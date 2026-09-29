import { NextResponse } from "next/server";
import { getAppConfig, logEvent } from "@/lib/admin/server";
import { db } from "@/lib/admin/store";
import { getClientIp, rateLimit } from "@/lib/admin/security";

export const runtime = "nodejs";

/* Eventos permitidos (evita inyección de nombres arbitrarios en el panel) */
const ALLOWED_EVENTS = new Set([
  "boot", "lesson_completed", "quiz_completed", "tutor_message", "plan_changed",
  "cert_earned", "level_set", "login", "login_failed", "logout", "admin_login",
  "admin_action", "admin_auth_failed", "login_rate_limited", "payment_started",
  "payment_method_selected", "plan_activated", "security_pin_enabled",
  "security_pin_disabled", "security_lock", "pomodoro_session", "wordle_win",
  "app_locked", "app_unlocked", "session_revoked",
  /* v9.5.2: excepciones del cliente capturadas por global-error (diagnóstico) */
  "client_error",
]);

/* POST /api/telemetry → registra un evento de uso de la plataforma.
   Endurecido v5.0: rate limit por IP, whitelist de eventos y
   telemetría desactivable desde el Panel Admin. */
export async function POST(req: Request) {
  try {
    const cfg = await getAppConfig();
    if (cfg.security && cfg.security.telemetryEnabled === false) {
      return NextResponse.json({ ok: true }); // telemetría desactivada: se descarta en silencio
    }

    const ip = getClientIp(req);
    const rl = rateLimit(`tel:${ip}`, { limit: 60, windowMs: 60_000, blockMs: 120_000 });
    if (!rl.ok) {
      return NextResponse.json({ ok: false }, { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } });
    }

    const raw = await req.json().catch(() => ({}));
    const body = (typeof raw === "object" && raw !== null ? raw : {}) as {
      clientId?: string; username?: string | null; event?: string; detail?: unknown;
    };

    if (!body.event || typeof body.event !== "string" || !ALLOWED_EVENTS.has(body.event)) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    await logEvent(
      (body.clientId || "anon").slice(0, 64),
      typeof body.username === "string" ? body.username.slice(0, 64) : null,
      body.event,
      body.detail,
    );

    // actualiza lastSeen solo de usuarios reales existentes
    if (typeof body.username === "string" && body.username) {
      const user = await db.user.findUnique({ where: { username: body.username.slice(0, 64) } });
      if (user) await db.user.update({ where: { id: user.id }, data: { lastSeen: new Date() } });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 200 }); // fire & forget: nunca rompe el cliente
  }
}
