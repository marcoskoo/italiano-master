import { NextResponse } from "next/server";
import { hashPassword, logAdminAction, requireAdmin } from "@/lib/admin/server";
import { db } from "@/lib/admin/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function safeUser(u: { id: string; username: string; displayName: string; role: string; level: string; plan: string; xp: number; streak: number; lessonsDone: number; wordsInSrs: number; active: boolean; lastSeen: Date; createdAt: Date }) {
  return {
    id: u.id, username: u.username, displayName: u.displayName, role: u.role,
    level: u.level, plan: u.plan, xp: u.xp, streak: u.streak,
    lessonsDone: u.lessonsDone, wordsInSrs: u.wordsInSrs, active: u.active,
    lastSeen: u.lastSeen.toISOString(), createdAt: u.createdAt.toISOString(),
  };
}

/* GET /api/admin/users → lista completa */
export async function GET(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.res;
  const users = await db.user.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json({ users: users.map(safeUser) });
}

interface UserPayload {
  username?: string; password?: string; displayName?: string; role?: string;
  level?: string; plan?: string; xp?: number; streak?: number; active?: boolean;
}

/* POST /api/admin/users → crear usuario */
export async function POST(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.res;
  try {
    const body = (await req.json()) as UserPayload;
    const username = body.username?.trim();
    if (!username || !body.password || !body.displayName?.trim()) {
      return NextResponse.json({ error: "Usuario, contraseña y nombre son obligatorios" }, { status: 400 });
    }
    const exists = await db.user.findUnique({ where: { username } });
    if (exists) return NextResponse.json({ error: `El usuario "${username}" ya existe` }, { status: 409 });

    const user = await db.user.create({
      data: {
        username,
        passwordHash: hashPassword(username, body.password),
        displayName: body.displayName.trim(),
        role: body.role === "admin" ? "admin" : "student",
        level: body.level ?? "A1",
        plan: body.plan ?? "free",
        xp: body.xp ?? 0,
        streak: body.streak ?? 0,
      },
    });
    await logAdminAction(req, "user_create", { username });
    return NextResponse.json({ user: safeUser(user) });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

/* PATCH /api/admin/users?id=… → editar usuario (campos opcionales) */
export async function PATCH(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.res;
  try {
    const id = new URL(req.url).searchParams.get("id");
    if (!id) return NextResponse.json({ error: "id requerido" }, { status: 400 });
    const body = (await req.json()) as UserPayload;

    const user = await db.user.findUnique({ where: { id } });
    if (!user) return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });

    const data: Record<string, unknown> = {};
    if (body.displayName?.trim()) data.displayName = body.displayName.trim();
    if (body.role === "admin" || body.role === "student") data.role = body.role;
    if (body.level) data.level = body.level;
    if (body.plan) data.plan = body.plan;
    if (typeof body.xp === "number") data.xp = Math.max(0, Math.round(body.xp));
    if (typeof body.streak === "number") data.streak = Math.max(0, Math.round(body.streak));
    if (typeof body.active === "boolean") data.active = body.active;
    if (body.password) data.passwordHash = hashPassword(user.username, body.password);

    const updated = await db.user.update({ where: { id }, data });
    await logAdminAction(req, "user_update", { username: updated.username, fields: Object.keys(data) });
    return NextResponse.json({ user: safeUser(updated) });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

/* DELETE /api/admin/users?id=… → eliminar usuario (protegido: no se puede borrar a sí mismo el admin Mkoo) */
export async function DELETE(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.res;
  try {
    const id = new URL(req.url).searchParams.get("id");
    if (!id) return NextResponse.json({ error: "id requerido" }, { status: 400 });
    const user = await db.user.findUnique({ where: { id } });
    if (!user) return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
    if (user.username === "Mkoo") {
      return NextResponse.json({ error: "La cuenta principal del administrador (Mkoo) no puede eliminarse" }, { status: 403 });
    }
    await db.user.delete({ where: { id } });
    await logAdminAction(req, "user_delete", { username: user.username });
    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
