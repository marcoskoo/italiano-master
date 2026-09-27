/* ── Helpers del servidor para el Panel Admin (auth, settings, telemetría) ── */

import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { db } from "@/lib/admin/store";
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

/* ── Token de sesión admin (bearer) ─────────────────────────────────── */

const TOKEN_TTL_MS = 12 * 3600 * 1000; // 12 h por defecto (antes: 7 días)

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
  return TOKEN_TTL_MS;
}

export async function issueAdminToken(): Promise<string> {
  const token = `${randomUUID()}${randomUUID().replace(/-/g, "").slice(0, 16)}`;
  await setSetting(KEY_ADMIN_TOKEN, { token, expiresAt: new Date(Date.now() + (await adminTtlMs())).toISOString() });
  return token;
}

export async function clearAdminToken(): Promise<void> {
  await setSetting(KEY_ADMIN_TOKEN, { token: "", expiresAt: new Date(0).toISOString() });
}

export type AdminGuard = { ok: true } | { ok: false; res: NextResponse };

/** Indica si el token corresponde a la sesión admin activa (tiempo constante). */
export async function isAdminToken(token: string): Promise<boolean> {
  if (!token) return false;
  const stored = await getSetting<{ token: string; expiresAt: string } | null>(KEY_ADMIN_TOKEN, null);
  if (!stored?.token || new Date(stored.expiresAt).getTime() < Date.now()) return false;
  return constantTimeEqual(stored.token, token);
}

export async function requireAdmin(req: Request): Promise<AdminGuard> {
  const header = req.headers.get("authorization");
  const token = header?.startsWith("Bearer ") ? header.slice(7).trim() : "";
  if (!token) return { ok: false, res: NextResponse.json({ error: "Non autorizzato" }, { status: 401 }) };
  const stored = await getSetting<{ token: string; expiresAt: string } | null>(KEY_ADMIN_TOKEN, null);
  if (!stored?.token || !constantTimeEqual(stored.token, token) || new Date(stored.expiresAt).getTime() < Date.now()) {
    await logEvent("admin-panel", null, "admin_auth_failed"); // auditoría de intentos fallidos
    return { ok: false, res: NextResponse.json({ error: "Sessione scaduta, riaccedi" }, { status: 401 }) };
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
