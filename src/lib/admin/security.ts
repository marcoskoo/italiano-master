/* ── Seguridad del servidor · Italiano Master ──────────────────────────
   Endurecimiento v5.0:
   · Rate limiting en memoria (ventana fija + bloqueo temporal)
   · Comparación en tiempo constante (anti timing-attack)
   · Hash de contraseñas scrypt con sal aleatoria + compatibilidad
     con los hashes SHA-256 históricos (re-hash automático al entrar)
   · Validación de IBAN (formato + checksum mod-97 ISO 13616)
   · Medidor de fuerza de contraseña
   · Tokens de sesión de estudiante (registro con expiración)          */

import { createHash, randomBytes, scryptSync, timingSafeEqual } from "crypto";
import { getSetting, setSetting } from "./server";

/* ═══ Comparación en tiempo constante ═══════════════════════════════ */

const sha256 = (s: string) => createHash("sha256").update(s, "utf8").digest();

/** Compara dos strings sin filtrar información por el tiempo de respuesta. */
export function constantTimeEqual(a: string, b: string): boolean {
  if (a.length === 0 || b.length === 0) return a === b;
  try {
    return timingSafeEqual(sha256(a), sha256(b));
  } catch {
    return false;
  }
}

/* ═══ Rate limiter (memoria, con bloqueo) ═══════════════════════════ */

interface RateEntry { count: number; resetAt: number; blockedUntil: number }

const rateG = globalThis as unknown as { __imRate?: Map<string, RateEntry> };
function rateMap(): Map<string, RateEntry> {
  if (!rateG.__imRate) rateG.__imRate = new Map();
  return rateG.__imRate;
}

export interface RateLimitOptions { limit: number; windowMs: number; blockMs: number }
export interface RateLimitResult { ok: boolean; retryAfterSec: number; remaining: number }

/** Limita acciones por clave (p. ej. `login:1.2.3.4:Mkoo`).
 *  Al superar `limit` dentro de la ventana, la clave queda bloqueada
 *  `blockMs` milisegundos. Limpieza perezosa de entradas caducadas. */
export function rateLimit(key: string, opts: RateLimitOptions): RateLimitResult {
  const now = Date.now();
  const map = rateMap();

  // limpieza perezosa: si el mapa crece, purga las entradas muertas
  if (map.size > 5000) {
    for (const [k, v] of map) {
      if (v.resetAt < now && v.blockedUntil < now) map.delete(k);
    }
  }

  const cur = map.get(key);
  if (cur) {
    if (cur.blockedUntil > now) {
      return { ok: false, retryAfterSec: Math.ceil((cur.blockedUntil - now) / 1000), remaining: 0 };
    }
    if (cur.resetAt < now) {
      map.delete(key);
    } else {
      cur.count += 1;
      if (cur.count > opts.limit) {
        cur.blockedUntil = now + opts.blockMs;
        return { ok: false, retryAfterSec: Math.ceil(opts.blockMs / 1000), remaining: 0 };
      }
      return { ok: true, retryAfterSec: 0, remaining: Math.max(0, opts.limit - cur.count) };
    }
  }

  map.set(key, { count: 1, resetAt: now + opts.windowMs, blockedUntil: 0 });
  return { ok: true, retryAfterSec: 0, remaining: Math.max(0, opts.limit - 1) };
}

/* ═══ IP del cliente (proxy-safe) ═══════════════════════════════════ */

export function getClientIp(req: Request): string {
  const h = req.headers;
  const xf = h.get("x-forwarded-for");
  if (xf) return xf.split(",")[0].trim().slice(0, 64);
  return h.get("x-real-ip")?.slice(0, 64) || "local";
}

/* ═══ Hash de contraseñas: scrypt + legado SHA-256 ══════════════════ */

const SCRYPT_N = 16384, SCRYPT_r = 8, SCRYPT_p = 1, SCRYPT_KEYLEN = 64;

/** Nuevo hash: `scrypt$N$r$p$salt(b64)$hash(b64)` — sal aleatoria por usuario. */
export function scryptHash(password: string): string {
  const salt = randomBytes(16);
  const key = scryptSync(password, salt, SCRYPT_KEYLEN, { N: SCRYPT_N, r: SCRYPT_r, p: SCRYPT_p });
  return `scrypt$${SCRYPT_N}$${SCRYPT_r}$${SCRYPT_p}$${salt.toString("base64")}$${key.toString("base64")}`;
}

function verifyScrypt(stored: string, password: string): boolean {
  try {
    const [tag, nS, rS, pS, saltB64, hashB64] = stored.split("$");
    if (tag !== "scrypt") return false;
    const key = scryptSync(password, Buffer.from(saltB64, "base64"), Buffer.from(hashB64, "base64").length, {
      N: Number(nS), r: Number(rS), p: Number(pS),
    });
    return timingSafeEqual(key, Buffer.from(hashB64, "base64"));
  } catch {
    return false;
  }
}

/** Hash histórico (sin sal): necesario para validar credenciales existentes. */
export function legacyHash(username: string, password: string): string {
  return createHash("sha256").update(`italiano-master::${username}::${password}`).digest("hex");
}

export interface PasswordVerify { ok: boolean; needsRehash: boolean }

/** Verifica una contraseña contra el hash almacenado (scrypt o legado).
 *  `needsRehash` = true cuando el hash es legado y conviene migrar a scrypt. */
export function verifyPassword(stored: string, username: string, password: string): PasswordVerify {
  if (stored.startsWith("scrypt$")) {
    return { ok: verifyScrypt(stored, password), needsRehash: false };
  }
  return { ok: constantTimeEqual(legacyHash(username, password), stored), needsRehash: true };
}

/* ═══ Fuerza de contraseña ══════════════════════════════════════════ */

export function passwordIssues(pw: string, username?: string): string[] {
  const issues: string[] = [];
  if (pw.length < 8) issues.push("mínimo 8 caracteres");
  if (pw.length > 200) issues.push("máximo 200 caracteres");
  if (!/[a-z]/.test(pw) || !/[A-Z]/.test(pw)) issues.push("mayúsculas y minúsculas");
  if (!/[0-9]/.test(pw)) issues.push("al menos un número");
  if (/^(?:password|italiano|12345678|qwerty)/i.test(pw)) issues.push("demasiado predecible");
  if (username && pw.toLowerCase().includes(username.toLowerCase())) issues.push("no contenga tu nombre de usuario");
  return issues;
}

/* ═══ IBAN: normalizar, validar (mod-97), enmascarar ════════════════ */

export function normalizeIban(iban: string): string {
  return iban.replace(/[\s-]/g, "").toUpperCase();
}

/** Validación ISO 13616: longitud por país + dígitos de control mod-97. */
export function isValidIban(raw: string): boolean {
  const iban = normalizeIban(raw);
  if (!/^[A-Z]{2}\d{2}[A-Z0-9]{10,30}$/.test(iban)) return false;
  const len: Record<string, number> = {
    IT: 27, ES: 24, PT: 25, FR: 27, DE: 22, NL: 18, BE: 16, AT: 20,
    IE: 22, GB: 22, CH: 21, PL: 28, SE: 24, DK: 18, NO: 15, FI: 18,
  };
  const expected = len[iban.slice(0, 2)];
  if (expected && iban.length !== expected) return false;
  // mover los 4 primeros caracteres al final y convertir A→10 … Z→35
  const rearranged = iban.slice(4) + iban.slice(0, 4);
  const digits = rearranged.replace(/[A-Z]/g, (c) => String(c.charCodeAt(0) - 55));
  // mod-97 con aritmética de enteros grandes por partes
  let rest = 0;
  for (const ch of digits) rest = (rest * 10 + Number(ch)) % 97;
  return rest === 1;
}

/** `IT60X0542811101000000123456` → `IT60 X054 2811 1010 0000 0123 456` */
export function formatIban(raw: string): string {
  return normalizeIban(raw).replace(/(.{4})/g, "$1 ").trim();
}

/** Enmascara el IBAN para mostrarlo sin exponerlo completo. */
export function maskIban(raw: string): string {
  const iban = normalizeIban(raw);
  if (iban.length < 10) return "•".repeat(iban.length);
  return `${iban.slice(0, 4)} ${"•".repeat(Math.max(0, iban.length - 8)).replace(/(.{4})/g, "$1 ").trim()} ${iban.slice(-4)}`.replace(/\s+/g, " ").trim();
}

/* ═══ SWIFT/BIC y cuentas no IBAN (transferencias internacionales) ════ */

/** Normaliza un BIC: mayúsculas, sin espacios ni guiones. */
export function normalizeBic(bic: string): string {
  return (bic ?? "").toUpperCase().replace(/[^A-Z0-9]/g, "");
}

/** Valida formato SWIFT/BIC ISO 9362: 4 alfanuméricos (banco) + 2 letras
 *  (país) + 2 alfanuméricos (localización) + 3 opcionales (sucursal).
 *  8 o 11 caracteres. Ejemplo válido: BCPLPEPL (Banco de Crédito del Perú). */
export function isValidBic(raw: string): boolean {
  const bic = normalizeBic(raw);
  return /^[A-Z0-9]{4}[A-Z]{2}[A-Z0-9]{2}([A-Z0-9]{3})?$/.test(bic);
}

/** Enmascara un número de cuenta no IBAN: `19198476543210` → `••••••••••3210`. */
export function maskAccount(raw: string): string {
  const acc = (raw ?? "").replace(/[\s-]/g, "");
  if (acc.length <= 4) return "•".repeat(acc.length);
  return `${"•".repeat(acc.length - 4)}${acc.slice(-4)}`;
}

/* ═══ Tokens de sesión de estudiante ════════════════════════════════ */

const KEY_STUDENT_TOKENS = "studentTokens";
const MAX_STUDENT_TOKENS = 300;

export interface StudentTokenEntry { token: string; userId: string; expiresAt: string }

async function readTokens(): Promise<Record<string, StudentTokenEntry>> {
  return getSetting<Record<string, StudentTokenEntry>>(KEY_STUDENT_TOKENS, {});
}

function prune(tokens: Record<string, StudentTokenEntry>): Record<string, StudentTokenEntry> {
  const now = Date.now();
  const alive: Record<string, StudentTokenEntry> = {};
  for (const [k, v] of Object.entries(tokens)) {
    if (new Date(v.expiresAt).getTime() > now) alive[k] = v;
  }
  const entries = Object.values(alive);
  if (entries.length > MAX_STUDENT_TOKENS) {
    entries.sort((a, b) => a.expiresAt.localeCompare(b.expiresAt));
    for (const e of entries.slice(0, entries.length - MAX_STUDENT_TOKENS)) delete alive[e.token];
  }
  return alive;
}

export async function issueStudentToken(userId: string, ttlMs = 30 * 24 * 3600 * 1000): Promise<string> {
  const token = `${randomUUIDPrefix()}${randomBytes(16).toString("hex")}`;
  const tokens = prune(await readTokens());
  tokens[token] = { token, userId, expiresAt: new Date(Date.now() + ttlMs).toISOString() };
  await setSetting(KEY_STUDENT_TOKENS, tokens);
  return token;
}

export async function revokeStudentToken(token: string): Promise<void> {
  const tokens = prune(await readTokens());
  delete tokens[token];
  await setSetting(KEY_STUDENT_TOKENS, tokens);
}

/** Revoca todas las sesiones de un usuario (o todas si userId es null). */
export async function revokeStudentSessions(userId?: string): Promise<number> {
  const tokens = prune(await readTokens());
  let n = 0;
  for (const [k, v] of Object.entries(tokens)) {
    if (!userId || v.userId === userId) {
      delete tokens[k];
      n += 1;
    }
  }
  await setSetting(KEY_STUDENT_TOKENS, tokens);
  return n;
}

export type SessionGuard = { ok: true; role: "admin" | "student" } | { ok: false };

/** Verifica el Bearer token de la petición contra la sesión pedida.
 *  El token del admin abre cualquier perfil; el de estudiante solo el suyo. */
export async function requireSession(req: Request, userId: string, isAdminToken: (t: string) => Promise<boolean>): Promise<SessionGuard> {
  const header = req.headers.get("authorization");
  const token = header?.startsWith("Bearer ") ? header.slice(7).trim() : "";
  if (!token) return { ok: false };
  if (await isAdminToken(token)) return { ok: true, role: "admin" };
  const tokens = await readTokens();
  const entry = tokens[token];
  if (!entry || entry.userId !== userId) return { ok: false };
  if (new Date(entry.expiresAt).getTime() < Date.now()) return { ok: false };
  return { ok: true, role: "student" };
}

function randomUUIDPrefix(): string {
  return `${Date.now().toString(36)}-`;
}
