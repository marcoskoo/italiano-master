import { NextResponse } from "next/server";
import { db } from "@/lib/admin/store";
import { getAppConfig, issueAdminToken, logEvent } from "@/lib/admin/server";
import { getClientIp, legacyHash, rateLimit, scryptHash, verifyPassword, persistentLoginBlocked, persistentLoginFail, persistentLoginClear } from "@/lib/admin/security";

export const runtime = "nodejs";

interface LoginBody { username?: string; password?: string; clientId?: string; }

/* POST /api/auth/login → valida credenciales (admin o estudiante).
   Endurecido v5.0: rate limiting por IP+usuario, mensajes unificados
   (anti enumeración), igualación de tiempos (anti timing-attack) y
   migración automática de hashes SHA-256 legados a scrypt. */
export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const cfg = await getAppConfig();
    const maxAttempts = Math.max(3, Math.min(20, cfg.security?.loginMaxAttempts ?? 5));
    const lockMs = Math.max(1, Math.min(120, cfg.security?.loginLockMinutes ?? 10)) * 60 * 1000;

    const body = (await req.json().catch(() => ({}))) as LoginBody;
    const username = body.username?.trim() ?? "";
    const password = body.password ?? "";

    // validación de tamaño: evita payloads enormes (DoS)
    if (!username || !password || username.length > 64 || password.length > 200) {
      return NextResponse.json({ error: "Usuario y contraseña obligatorios" }, { status: 400 });
    }

    // rate limiting: por IP y por combinación IP+usuario
    const ipRl = rateLimit(`login:ip:${ip}`, { limit: maxAttempts * 4, windowMs: lockMs, blockMs: lockMs });
    if (!ipRl.ok) {
      return NextResponse.json(
        { error: `Demasiados intentos. Reintenta en ${Math.ceil(ipRl.retryAfterSec / 60)} min.` },
        { status: 429, headers: { "Retry-After": String(ipRl.retryAfterSec) } },
      );
    }
    const userRl = rateLimit(`login:u:${ip}:${username.toLowerCase()}`, { limit: maxAttempts, windowMs: lockMs, blockMs: lockMs });
    if (!userRl.ok) {
      await logEvent(ip, null, "login_rate_limited");
      return NextResponse.json(
        { error: `Cuenta temporalmente bloqueada tras ${maxAttempts} intentos. Reintenta en ${Math.ceil(userRl.retryAfterSec / 60)} min.` },
        { status: 429, headers: { "Retry-After": String(userRl.retryAfterSec) } },
      );
    }

    // v9.10.1: lockout PERSISTENTE compartido entre instancias serverless
    // (el limitador en memoria no viaja entre lambdas; este sí).
    const persistKey = `login:p:${ip}:${username.toLowerCase()}`;
    if (await persistentLoginBlocked(persistKey)) {
      await logEvent(ip, username.slice(0, 64), "login_rate_limited");
      return NextResponse.json(
        { error: "Cuenta temporalmente bloqueada por intentos fallidos. Reintenta en unos minutos." },
        { status: 429, headers: { "Retry-After": "900" } },
      );
    }

    const user = await db.user.findUnique({ where: { username } });

    // igualación de tiempos: se verifica un hash ficticio cuando el usuario no existe
    let ok = false;
    let needsRehash = false;
    if (user) {
      const v = verifyPassword(user.passwordHash, username, password);
      ok = v.ok;
      needsRehash = v.ok && v.needsRehash;
    } else {
      verifyPassword(legacyHash("ghost", "timing-equalizer"), "ghost", password);
    }

    // mensaje unificado: no revela si el usuario existe o si la cuenta está desactivada
    if (!ok || !user || !user.active) {
      await logEvent(ip, username.slice(0, 64), "login_failed");
      await persistentLoginFail(persistKey, Math.max(6, maxAttempts * 2), lockMs, lockMs); // contador compartido
      return NextResponse.json({ error: "Credenciales incorrectas" }, { status: 401 });
    }

    await persistentLoginClear(persistKey); // login correcto: reinicia el contador persistente

    // migración transparente: hash legado → scrypt con sal
    if (needsRehash) {
      await db.user.update({ where: { id: user.id }, data: { passwordHash: scryptHash(password) } });
    }

    await db.user.update({ where: { id: user.id }, data: { lastSeen: new Date() } });
    await logEvent(body.clientId?.slice(0, 64) || ip, user.username, user.role === "admin" ? "admin_login" : "login");

    const safeUser = {
      id: user.id,
      username: user.username,
      displayName: user.displayName,
      role: user.role as "admin" | "student",
      level: user.level,
      plan: user.plan,
      xp: user.xp,
      streak: user.streak,
      lessonsDone: user.lessonsDone,
      wordsInSrs: user.wordsInSrs,
    };

    // token de sesión: el admin para el panel, el estudiante para sincronizar su perfil
    const { issueStudentToken } = await import("@/lib/admin/security");
    const token = user.role === "admin" ? await issueAdminToken() : await issueStudentToken(user.id);
    return NextResponse.json({ user: safeUser, token });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
