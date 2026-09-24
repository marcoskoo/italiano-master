import { NextResponse } from "next/server";
import { hashPassword, issueAdminToken, logEvent } from "@/lib/admin/server";
import { db } from "@/lib/admin/store";

export const runtime = "nodejs";

interface LoginBody { username?: string; password?: string; clientId?: string; }

/* POST /api/auth/login → valida credenciales (admin o estudiante) */
export async function POST(req: Request) {
  try {
    const body = (await req.json()) as LoginBody;
    const username = body.username?.trim();
    const password = body.password ?? "";
    if (!username || !password) {
      return NextResponse.json({ error: "Usuario y contraseña obligatorios" }, { status: 400 });
    }

    const user = await db.user.findUnique({ where: { username } });
    if (!user || user.passwordHash !== hashPassword(username, password)) {
      return NextResponse.json({ error: "Credenciales incorrectas" }, { status: 401 });
    }
    if (!user.active) {
      return NextResponse.json({ error: "Cuenta desactivada por la administración" }, { status: 403 });
    }

    await db.user.update({ where: { id: user.id }, data: { lastSeen: new Date() } });
    await logEvent(body.clientId || "anon", user.username, user.role === "admin" ? "admin_login" : "login");

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

    // el admin recibe un token de sesión para el panel
    const token = user.role === "admin" ? await issueAdminToken() : null;
    return NextResponse.json({ user: safeUser, token });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
