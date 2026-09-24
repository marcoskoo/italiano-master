/* ── Almacenamiento portable del backend (sin Prisma) ──────────────────
   Sustituye a Prisma+SQLite con una API compatible (el mismo subconjunto
   de operaciones que usaba la app) para poder desplegar en serverless.

   Backends, en orden de preferencia:
   1. "blob"   → Vercel Blob (si existe BLOB_READ_WRITE_TOKEN) con el
                 snapshot CIFRADO AES-256-GCM: datos duraderos en
                 producción. La clave se deriva del propio token.
   2. "file"   → db/app-data.json: desarrollo local (archivos, sandbox).
   3. "memory" → solo memoria: la semilla se regenera en cada arranque en
                 frío (modo efímero; el panel admin lo indica).           */

import { createCipheriv, createDecipheriv, createHash, randomBytes, randomUUID, scryptSync } from "crypto";
import fs from "fs/promises";
import path from "path";
import { get as blobGet, put as blobPut } from "@vercel/blob";

/* ── modelos (idénticos a las tablas anteriores) ────────────────────── */

export interface UserRow {
  id: string;
  username: string;
  displayName: string;
  role: string; // "admin" | "student"
  level: string; // "A0"… "C2"
  plan: string; // "free" | "pro" | "premium" | "platinum"
  xp: number;
  streak: number;
  lessonsDone: number;
  wordsInSrs: number;
  active: boolean;
  passwordHash: string;
  lastSeen: Date;
  createdAt: Date;
}

export interface SettingRow {
  key: string;
  value: string; // JSON serializado
}

export interface TelemetryRow {
  id: string;
  clientId: string;
  username: string | null;
  event: string;
  detail: string | null;
  createdAt: Date;
}

interface StoreData {
  users: UserRow[];
  settings: SettingRow[];
  telemetry: TelemetryRow[];
}

export type PersistenceMode = "blob" | "file" | "memory";

export interface PersistenceInfo {
  mode: PersistenceMode;
  durable: boolean; // los cambios sobreviven a reinicios / cold starts
}

const BLOB_PATHNAME = "italiano-master/state.json";
const DATA_FILE = path.join(process.cwd(), "db", "app-data.json");
const MAX_TELEMETRY = 2000;

/* ── hash de contraseñas (mismo esquema histórico: mantiene los hashes
     existentes válidos tras la migración) ───────────────────────────── */

export function hashPassword(username: string, password: string): string {
  return createHash("sha256").update(`italiano-master::${username}::${password}`).digest("hex");
}

/* ── semilla para despliegues nuevos ────────────────────────────────── */

function seedData(): StoreData {
  const now = Date.now();
  const day = 86400000;
  const mkoo: UserRow = {
    id: "u-admin-mkoo",
    username: "Mkoo",
    displayName: "Marcos (Admin)",
    role: "admin",
    level: "C2",
    plan: "platinum",
    xp: 4200,
    streak: 12,
    lessonsDone: 48,
    wordsInSrs: 150,
    active: true,
    passwordHash: hashPassword("Mkoo", "Mk/06612"),
    lastSeen: new Date(now),
    createdAt: new Date(now - 120 * day),
  };
  const specs: [string, string, string, string, number, number, number, number][] = [
    ["giulia", "Giulia Serrano", "B1", "pro", 1840, 6, 14, 42],
    ["carlos", "Carlos Méndez", "A2", "free", 520, 3, 6, 18],
    ["lucia", "Lucía Herrera", "B2", "premium", 2380, 11, 22, 64],
    ["diego", "Diego Castillo", "A1", "free", 180, 1, 2, 9],
    ["valentina", "Valentina Ríos", "C1", "platinum", 3260, 21, 31, 88],
    ["marco", "Marco Ávila", "B1", "pro", 1420, 5, 12, 37],
  ];
  const students: UserRow[] = specs.map(([username, displayName, level, plan, xp, streak, lessonsDone, wordsInSrs], i) => ({
    id: `u-demo-${username}`,
    username,
    displayName,
    role: "student",
    level,
    plan,
    xp,
    streak,
    lessonsDone,
    wordsInSrs,
    active: true,
    passwordHash: hashPassword(username, "italiano123"),
    lastSeen: new Date(now - Math.floor(Math.random() * 3 * day)),
    createdAt: new Date(now - (60 - i * 9) * day),
  }));

  // telemetría de demostración (7 días) para que el panel no nazca vacío
  const eventNames = ["boot", "lesson_completed", "quiz_completed", "tutor_message", "plan_changed", "cert_earned"];
  const telemetry: TelemetryRow[] = [];
  let n = 0;
  for (let d = 6; d >= 0; d--) {
    for (let k = 0; k < 5; k++) {
      const u = students[Math.floor(Math.random() * students.length)];
      telemetry.push({
        id: `t-seed-${n++}`,
        clientId: `demo-${u.username}-${k % 2}`,
        username: u.username,
        event: eventNames[Math.floor(Math.random() * eventNames.length)],
        detail: null,
        createdAt: new Date(now - d * day - Math.floor(Math.random() * 20) * 3600000),
      });
    }
  }
  return { users: [mkoo, ...students], settings: [], telemetry };
}

/* ── serialización / cifrado ────────────────────────────────────────── */

function revive(parsed: unknown): StoreData {
  const raw = parsed as Partial<StoreData>;
  const users = (raw.users ?? []).map((u) => ({
    ...u,
    lastSeen: new Date(u.lastSeen),
    createdAt: new Date(u.createdAt),
  })) as UserRow[];
  const telemetry = (raw.telemetry ?? []).map((t) => ({ ...t, createdAt: new Date(t.createdAt) })) as TelemetryRow[];
  return { users, settings: raw.settings ?? [], telemetry };
}

function toJson(d: StoreData): string {
  return JSON.stringify(d); // Date → ISO automáticamente
}

function deriveKey(secret: string): Buffer {
  return scryptSync(secret, "italiano-master/store/v1", 32);
}

function encrypt(plaintext: string, secret: string): string {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", deriveKey(secret), iv);
  const body = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, tag, body]).toString("base64");
}

function decrypt(payload: string, secret: string): string | null {
  try {
    const buf = Buffer.from(payload, "base64");
    const iv = buf.subarray(0, 12);
    const tag = buf.subarray(12, 28);
    const decipher = createDecipheriv("aes-256-gcm", deriveKey(secret), iv);
    decipher.setAuthTag(tag);
    return Buffer.concat([decipher.update(buf.subarray(28)), decipher.final()]).toString("utf8");
  } catch {
    return null;
  }
}

/* ── backends ───────────────────────────────────────────────────────── */

async function loadFromBlob(): Promise<StoreData | null> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return null;
  try {
    const res = await blobGet(BLOB_PATHNAME, { access: "private" });
    if (!res || res.statusCode !== 200 || !res.stream) return null;
    const cipherText = await new Response(res.stream).text();
    const json = decrypt(cipherText, token);
    if (!json) return null;
    return revive(JSON.parse(json));
  } catch {
    return null;
  }
}

async function saveToBlob(d: StoreData): Promise<boolean> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return false;
  try {
    await blobPut(BLOB_PATHNAME, encrypt(toJson(d), token), {
      access: "private", // privado + cifrado AES-256-GCM (doble capa)
      contentType: "text/plain",
      addRandomSuffix: false,
    });
    return true;
  } catch {
    return false;
  }
}

async function loadFromFile(): Promise<StoreData | null> {
  try {
    return revive(JSON.parse(await fs.readFile(DATA_FILE, "utf8")));
  } catch {
    return null;
  }
}

async function saveToFile(d: StoreData): Promise<boolean> {
  try {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, toJson(d), "utf8");
    return true;
  } catch {
    return false;
  }
}

/* ── ciclo de vida del store (singleton global) ───────────────────────
   El estado se guarda en globalThis: en desarrollo Next.js compila cada
   ruta con su propia copia de los módulos y un singleton de módulo se
   duplicaría (mismo truco que usaba PrismaClient).                   */

interface StoreState {
  data: StoreData | null;
  mode: PersistenceMode;
  durable: boolean;
  readyPromise: Promise<void> | null;
  writeQueue: Promise<unknown>;
}

const g = globalThis as unknown as { __italianoMasterStore?: StoreState };

function S(): StoreState {
  if (!g.__italianoMasterStore) {
    g.__italianoMasterStore = { data: null, mode: "memory", durable: false, readyPromise: null, writeQueue: Promise.resolve() };
  }
  return g.__italianoMasterStore;
}

function commit(d: StoreData, m: PersistenceMode): void {
  const s = S();
  s.data = d;
  s.mode = m;
  s.durable = m !== "memory";
}

async function init(): Promise<void> {
  const hasBlob = Boolean(process.env.BLOB_READ_WRITE_TOKEN);
  if (hasBlob) {
    const fromBlob = await loadFromBlob();
    if (fromBlob) {
      commit(fromBlob, "blob");
      return;
    }
  }
  const fromFile = await loadFromFile();
  const base = fromFile ?? seedData();
  if (hasBlob && (await saveToBlob(base))) {
    commit(base, "blob");
    return;
  }
  if (await saveToFile(base)) {
    commit(base, "file");
    return;
  }
  commit(base, "memory");
}

function ready(): Promise<void> {
  const s = S();
  if (!s.readyPromise) {
    s.readyPromise = init().catch(() => {
      if (!S().data) commit(seedData(), "memory");
    });
  }
  return s.readyPromise;
}

async function read<T>(fn: (d: StoreData) => T): Promise<T> {
  await ready();
  return fn(S().data as StoreData);
}

/** Mutación serializada: en modo blob refresca el snapshot antes de
 *  aplicar el cambio (coherencia entre instancias serverless). */
async function mutate<T>(fn: (d: StoreData) => T): Promise<T> {
  await ready();
  const s = S();
  const run = s.writeQueue.then(async () => {
    if (s.mode === "blob") {
      const fresh = await loadFromBlob();
      if (fresh) s.data = fresh;
    }
    const result = fn(s.data as StoreData);
    if (s.mode === "blob") {
      if (!(await saveToBlob(s.data as StoreData))) {
        s.mode = "memory";
        s.durable = false;
      }
    } else if (s.mode === "file") {
      if (!(await saveToFile(s.data as StoreData))) {
        s.mode = "memory";
        s.durable = false;
      }
    }
    return result;
  });
  s.writeQueue = run.catch(() => undefined);
  return run;
}

export async function getPersistenceInfo(): Promise<PersistenceInfo> {
  await ready();
  const s = S();
  return { mode: s.mode, durable: s.durable };
}

/* ── API compatible con el subconjunto de Prisma usado por la app ───── */

type UserWhere = { id?: string; username?: string };
type SortOrder = "asc" | "desc";
type TelemetryWhere = { event?: string; createdAt?: { gte?: Date } };
type TelemetryInput = Partial<Omit<TelemetryRow, "clientId" | "event">> & Pick<TelemetryRow, "clientId" | "event">;

function sortRows<T>(rows: T[], orderBy?: Record<string, SortOrder>): T[] {
  if (!orderBy) return rows;
  const [field, order] = Object.entries(orderBy)[0] as [keyof T & string, SortOrder];
  return [...rows].sort((a, b) => {
    const av = a[field] as unknown as number | string | Date;
    const bv = b[field] as unknown as number | string | Date;
    const cmp =
      av instanceof Date || bv instanceof Date
        ? new Date(av as Date).getTime() - new Date(bv as Date).getTime()
        : typeof av === "number"
          ? (av as number) - (bv as number)
          : String(av).localeCompare(String(bv));
    return order === "desc" ? -cmp : cmp;
  });
}

function matchTelemetry(t: TelemetryRow, where?: TelemetryWhere): boolean {
  if (!where) return true;
  if (where.event !== undefined && t.event !== where.event) return false;
  if (where.createdAt?.gte && t.createdAt.getTime() < where.createdAt.gte.getTime()) return false;
  return true;
}

export const db = {
  user: {
    async findUnique({ where }: { where: UserWhere }): Promise<UserRow | null> {
      return read((d) => d.users.find((u) => (where.id !== undefined ? u.id === where.id : u.username === where.username)) ?? null);
    },

    async findMany(args?: { orderBy?: Record<string, SortOrder> }): Promise<UserRow[]> {
      return read((d) => sortRows(d.users, args?.orderBy));
    },

    async create({ data }: { data: Partial<UserRow> & Pick<UserRow, "username" | "displayName" | "passwordHash"> }): Promise<UserRow> {
      return mutate((d) => {
        const row: UserRow = {
          id: data.id ?? randomUUID(),
          username: data.username,
          displayName: data.displayName,
          role: data.role ?? "student",
          level: data.level ?? "A1",
          plan: data.plan ?? "free",
          xp: data.xp ?? 0,
          streak: data.streak ?? 0,
          lessonsDone: data.lessonsDone ?? 0,
          wordsInSrs: data.wordsInSrs ?? 0,
          active: data.active ?? true,
          passwordHash: data.passwordHash,
          lastSeen: data.lastSeen ?? new Date(),
          createdAt: data.createdAt ?? new Date(),
        };
        d.users.push(row);
        return row;
      });
    },

    async update({ where, data }: { where: UserWhere; data: Partial<UserRow> }): Promise<UserRow> {
      return mutate((d) => {
        const idx = d.users.findIndex((u) => (where.id !== undefined ? u.id === where.id : u.username === where.username));
        if (idx === -1) throw new Error("User not found");
        d.users[idx] = { ...d.users[idx], ...data } as UserRow;
        return d.users[idx];
      });
    },

    async delete({ where }: { where: UserWhere }): Promise<UserRow> {
      return mutate((d) => {
        const idx = d.users.findIndex((u) => (where.id !== undefined ? u.id === where.id : u.username === where.username));
        if (idx === -1) throw new Error("User not found");
        return d.users.splice(idx, 1)[0];
      });
    },

    async deleteMany(_args?: unknown): Promise<{ count: number }> {
      return mutate((d) => {
        const count = d.users.length;
        d.users = [];
        return { count };
      });
    },
  },

  setting: {
    async findUnique({ where }: { where: { key: string } }): Promise<SettingRow | null> {
      return read((d) => d.settings.find((s) => s.key === where.key) ?? null);
    },

    async findMany(): Promise<SettingRow[]> {
      return read((d) => d.settings);
    },

    async upsert({ where, update, create }: { where: { key: string }; update: { value: string }; create: { key: string; value: string } }): Promise<SettingRow> {
      return mutate((d) => {
        const idx = d.settings.findIndex((s) => s.key === where.key);
        if (idx === -1) {
          const row = { key: create.key, value: create.value };
          d.settings.push(row);
          return row;
        }
        d.settings[idx] = { key: where.key, value: update.value };
        return d.settings[idx];
      });
    },
  },

  telemetryEvent: {
    async create({ data }: { data: TelemetryInput }): Promise<TelemetryRow> {
      return mutate((d) => {
        const row: TelemetryRow = {
          id: data.id ?? randomUUID(),
          clientId: data.clientId,
          username: data.username ?? null,
          event: data.event,
          detail: data.detail ?? null,
          createdAt: data.createdAt ?? new Date(),
        };
        d.telemetry.push(row);
        if (d.telemetry.length > MAX_TELEMETRY) d.telemetry = d.telemetry.slice(-MAX_TELEMETRY);
        return row;
      });
    },

    async createMany({ data }: { data: TelemetryInput[] }): Promise<{ count: number }> {
      return mutate((d) => {
        for (const item of data) {
          d.telemetry.push({
            id: item.id ?? randomUUID(),
            clientId: item.clientId,
            username: item.username ?? null,
            event: item.event,
            detail: item.detail ?? null,
            createdAt: item.createdAt ?? new Date(),
          });
        }
        if (d.telemetry.length > MAX_TELEMETRY) d.telemetry = d.telemetry.slice(-MAX_TELEMETRY);
        return { count: data.length };
      });
    },

    async findMany(args?: { where?: TelemetryWhere; orderBy?: Record<string, SortOrder>; take?: number }): Promise<TelemetryRow[]> {
      return read((d) => {
        let rows = d.telemetry.filter((t) => matchTelemetry(t, args?.where));
        rows = sortRows(rows, args?.orderBy);
        if (args?.take) rows = rows.slice(0, args.take);
        return rows;
      });
    },

    async count(args?: { where?: TelemetryWhere }): Promise<number> {
      return read((d) => d.telemetry.filter((t) => matchTelemetry(t, args?.where)).length);
    },

    async groupBy(_args?: { by?: string[]; _count?: unknown }): Promise<{ event: string; _count: { event: number } }[]> {
      return read((d) => {
        const counts = new Map<string, number>();
        for (const t of d.telemetry) counts.set(t.event, (counts.get(t.event) ?? 0) + 1);
        return [...counts.entries()].map(([event, count]) => ({ event, _count: { event: count } }));
      });
    },

    async deleteMany(_args?: unknown): Promise<{ count: number }> {
      return mutate((d) => {
        const count = d.telemetry.length;
        d.telemetry = [];
        return { count };
      });
    },
  },
};
