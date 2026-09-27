/* ── Helpers del servidor para el Panel Admin (auth, settings, telemetría) ── */

import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { db, readFresh } from "@/lib/admin/store";
import { DEFAULT_APP_CONFIG, type AppConfig, type BillingConfig } from "@/lib/lms/appconfig";
import { constantTimeEqual, isValidBic, isValidIban, normalizeIban } from "@/lib/admin/security";

export { hashPassword } from "./store";

export const KEY_CONFIG = "config";
export const KEY_ADMIN_TOKEN = "adminToken";
export const KEY_VOCAB_OVR = "vocabOverrides";
export const KEY_LESSON_OVR = "lessonOverrides";
export const KEY_CUSTOM_EX = "customExercises";

export async function getSetting<T>(key: string, fallback: T): Promise<T> {
  const row = await db.setting.findUnique({ where: { key } });
  if (!row) return fallback;
  try {
    return JSON.parse(row.value) as T;
  } catch {
    return fallback;
  }
}

export async function setSetting(key: string, value: unknown): Promise<void> {
  const json = JSON.stringify(value);
  await db.setting.upsert({ where: { key }, update: { value: json }, create: { key, value: json } });
}

/* ── Tokens de sesión admin (multi-dispositivo + renovación deslizante) ──
   Diseño v5.1: hasta MAX_ADMIN_SESSIONS sesiones concurrentes (una por
   dispositivo/navegador), TTL configurable desde el Panel (15 min – 30 días,
   por defecto 7 días) y renovación automática mientras el admin esté activo:
   una sesión solo caduca si el panel NO se usa durante todo el TTL.
   El logout revoca únicamente el token del dispositivo que lo pide.       */

const DEFAULT_TOKEN_TTL_MS = 7 * 24 * 3600 * 1000; // 7 días de inactividad
const MAX_ADMIN_SESSIONS = 8;

interface AdminSession { token: string; createdAt: string; expiresAt: string; }

export const KEY_ADMIN_TOKENS = "adminTokens";

async function adminTtlMs(): Promise<number> {
  try {
    const cfg = await getAppConfig();
    const minutes = cfg.security?.adminSessionMinutes;
    if (typeof minutes === "number" && minutes >= 15 && minutes <= 60 * 24 * 30) {
      return minutes * 60 * 1000;
    }
  } catch {
    /* configuración no disponible: TTL por defecto */
  }
  return DEFAULT_TOKEN_TTL_MS;
}

/** Núcleo fresco: devuelve sesiones válidas + token legado crudo. */
async function readSessionsWithLegacy(): Promise<{ sessions: AdminSession[]; legacyToken: string | null }> {
  const now = Date.now();
  const { list, legacy } = await readFresh((d) => {
    const parse = (key: string): unknown => {
      const row = d.settings.find((s) => s.key === key);
      if (!row) return null;
      try { return JSON.parse(row.value); } catch { return null; }
    };
    return {
      list: parse(KEY_ADMIN_TOKENS) as { sessions?: AdminSession[] } | null,
      legacy: parse(KEY_ADMIN_TOKEN) as { token?: string; expiresAt?: string } | null,
    };
  });
  const sessions = (list?.sessions ?? []).filter((s) => s.token && new Date(s.expiresAt).getTime() > now);
  let legacyToken: string | null = null;
  if (legacy?.token && legacy.expiresAt && new Date(legacy.expiresAt).getTime() > now) {
    legacyToken = legacy.token;
    if (!sessions.some((s) => s.token === legacy.token)) {
      sessions.push({ token: legacy.token, createdAt: new Date().toISOString(), expiresAt: legacy.expiresAt });
    }
  }
  return { sessions, legacyToken };
}

/** Lee las sesiones válidas (SIEMPRE frescas desde el blob: los tokens se
 *  emiten desde cualquier instancia serverless y un `read` cacheado podría
 *  no verlos), poda las caducadas y acepta el token único heredado de v5.0
 *  (migración sin re-login forzado). */
async function readSessions(): Promise<AdminSession[]> {
  return (await readSessionsWithLegacy()).sessions;
}

/** Persiste la lista conservando las sesiones más recientes. */
async function writeSessions(sessions: AdminSession[]): Promise<void> {
  const trimmed = [...sessions]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, MAX_ADMIN_SESSIONS);
  await setSetting(KEY_ADMIN_TOKENS, { sessions: trimmed });
}

function newToken(): string {
  return `${randomUUID()}${randomUUID().replace(/-/g, "").slice(0, 16)}`;
}

export async function issueAdminToken(): Promise<string> {
  const token = newToken();
  const sessions = await readSessions();
  sessions.push({ token, createdAt: new Date().toISOString(), expiresAt: new Date(Date.now() + (await adminTtlMs())).toISOString() });
  await writeSessions(sessions);
  return token;
}

/** Revoca UN token concreto: el logout de un dispositivo no expulsa al resto. */
export async function revokeAdminToken(token: string): Promise<void> {
  if (!token) return;
  const { sessions, legacyToken } = await readSessionsWithLegacy();
  const next = sessions.filter((s) => !constantTimeEqual(s.token, token));
  const legacyHit = Boolean(legacyToken) && constantTimeEqual(legacyToken as string, token);
  if (next.length !== sessions.length || legacyHit) {
    await writeSessions(next);
    if (legacyHit) await setSetting(KEY_ADMIN_TOKEN, { token: "", expiresAt: new Date(0).toISOString() });
  }
}

/** Revoca TODAS las sesiones admin (emergencias / rotación total). */
export async function clearAdminToken(): Promise<void> {
  await setSetting(KEY_ADMIN_TOKENS, { sessions: [] });
  await setSetting(KEY_ADMIN_TOKEN, { token: "", expiresAt: new Date(0).toISOString() });
}

export type AdminGuard = { ok: true } | { ok: false; res: NextResponse };

/** Indica si el token corresponde a alguna sesión admin activa (tiempo constante). */
export async function isAdminToken(token: string): Promise<boolean> {
  if (!token) return false;
  const sessions = await readSessions();
  return sessions.some((s) => constantTimeEqual(s.token, token));
}

export async function requireAdmin(req: Request): Promise<AdminGuard> {
  const header = req.headers.get("authorization");
  const token = header?.startsWith("Bearer ") ? header.slice(7).trim() : "";
  if (!token) return { ok: false, res: NextResponse.json({ error: "Non autorizzato" }, { status: 401 }) };
  const sessions = await readSessions();
  const idx = sessions.findIndex((s) => constantTimeEqual(s.token, token));
  if (idx === -1) {
    await logEvent("admin-panel", null, "admin_auth_failed"); // auditoría de intentos fallidos
    return { ok: false, res: NextResponse.json({ error: "Sessione scaduta, riaccedi" }, { status: 401 }) };
  }
  // renovación deslizante: la sesión solo caduca si el panel no se usa durante todo el TTL
  const ttl = await adminTtlMs();
  const remaining = new Date(sessions[idx].expiresAt).getTime() - Date.now();
  if (remaining < ttl / 2) {
    sessions[idx] = { ...sessions[idx], expiresAt: new Date(Date.now() + ttl).toISOString() };
    await writeSessions(sessions);
  }
  return { ok: true };
}

/* ── Config de la app (merge defensivo con defaults) ────────────────── */

export async function getAppConfig(): Promise<AppConfig> {
  const stored = await getSetting<Partial<AppConfig> | null>(KEY_CONFIG, null);
  if (!stored) return { ...DEFAULT_APP_CONFIG };
  return {
    ...DEFAULT_APP_CONFIG,
    ...stored,
    maintenance: { ...DEFAULT_APP_CONFIG.maintenance, ...(stored.maintenance ?? {}) },
    features: { ...DEFAULT_APP_CONFIG.features, ...(stored.features ?? {}) },
    defaults: { ...DEFAULT_APP_CONFIG.defaults, ...(stored.defaults ?? {}) },
    levels: { ...DEFAULT_APP_CONFIG.levels, ...(stored.levels ?? {}) },
    pricing: { ...DEFAULT_APP_CONFIG.pricing, ...(stored.pricing ?? {}) },
    billing: {
      ...DEFAULT_APP_CONFIG.billing,
      ...(stored.billing ?? {}),
      bank: { ...DEFAULT_APP_CONFIG.billing.bank, ...(stored.billing?.bank ?? {}) }, // merge profundo: nuevos campos BCP
    },
    security: { ...DEFAULT_APP_CONFIG.security, ...(stored.security ?? {}) },
  };
}

/* Saneamiento de la configuración de pagos: SWIFT/BIC 8-11, IBAN opcional
   (solo cuentas europeas, checksum mod-97), número de cuenta saneado y
   moneda de cuenta en whitelist. Evita guardar datos corruptos o inyectados. */
function sanitizeBilling(billing: BillingConfig): BillingConfig {
  const bank = billing.bank ?? DEFAULT_APP_CONFIG.billing.bank;
  const iban = normalizeIban(bank.iban ?? "");
  const accountNumber = (bank.accountNumber ?? "").replace(/[\s]/g, "").replace(/[^0-9A-Za-z-]/g, "").slice(0, 34);
  const bic = (bank.bic ?? "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 11);
  if (iban && !isValidIban(iban)) throw new Error("El IBAN configurado no es válido (checksum mod-97).");
  if (bic && !isValidBic(bic)) throw new Error("El BIC/SWIFT configurado no es válido (formato 8 u 11 caracteres, p. ej. BCPLPEPL).");
  /* Los datos personales (titular, número de cuenta) pueden completarse después desde el
     admin: el checkout oculta la transferencia bancaria hasta que haya cuenta o IBAN,
     y el panel muestra un aviso de "datos incompletos para el remitente". */
  const accountCurrency = ["", "PEN", "USD", "EUR"].includes(bank.accountCurrency) ? bank.accountCurrency : "";
  return {
    ...billing,
    currency: ["EUR", "USD", "PEN", "MXN", "ARS", "COP", "CLP"].includes(billing.currency) ? billing.currency : "USD",
    bank: {
      enabled: Boolean(bank.enabled),
      holder: (bank.holder ?? "").trim().slice(0, 80),
      bankName: (bank.bankName ?? "").trim().slice(0, 80),
      bankAddress: (bank.bankAddress ?? "").trim().slice(0, 140),
      accountNumber,
      accountCurrency,
      iban,
      bic,
    },
  };
}

export async function saveAppConfig(patch: Partial<AppConfig>): Promise<AppConfig> {
  const current = await getAppConfig();
  const next: AppConfig = {
    ...current,
    ...patch,
    maintenance: { ...current.maintenance, ...(patch.maintenance ?? {}) },
    features: { ...current.features, ...(patch.features ?? {}) },
    defaults: { ...current.defaults, ...(patch.defaults ?? {}) },
    levels: { ...current.levels, ...(patch.levels ?? {}) },
    pricing: { ...current.pricing, ...(patch.pricing ?? {}) },
    billing: patch.billing
      ? sanitizeBilling({ ...current.billing, ...patch.billing, bank: { ...current.billing.bank, ...(patch.billing.bank ?? {}) } })
      : current.billing,
    security: { ...current.security, ...(patch.security ?? {}) },
    updatedAt: new Date().toISOString(),
  };
  await setSetting(KEY_CONFIG, next);
  return next;
}

/* ── Telemetría ─────────────────────────────────────────────────────── */

export async function logEvent(clientId: string, username: string | null, event: string, detail?: unknown): Promise<void> {
  await db.telemetryEvent.create({
    data: {
      clientId: clientId.slice(0, 64),
      username: username?.slice(0, 64) || null,
      event: event.slice(0, 48),
      detail: detail === undefined ? null : JSON.stringify(detail).slice(0, 512),
    },
  });
}

export async function logAdminAction(req: Request, action: string, detail?: unknown): Promise<void> {
  await logEvent("admin-panel", "Mkoo", "admin_action", { action, ...(detail as Record<string, unknown> | undefined) });
}
