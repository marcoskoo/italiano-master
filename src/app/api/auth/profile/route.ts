import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const runtime = "nodejs";

interface ProfilePatch {
  userId?: string;
  xp?: number; level?: string; plan?: string; streak?: number;
  lessonsDone?: number; wordsInSrs?: number;
}

/* GET /api/auth/profile?userId=… → progreso del estudiante en el servidor */
export async function GET(req: Request) {
  try {
    const userId = new URL(req.url).searchParams.get("userId");
    if (!userId) return NextResponse.json({ error: "userId requerido" }, { status: 400 });
    const user = await db.user.findUnique({ where: { id: userId } });
    if (!user) return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
    return NextResponse.json({
      xp: user.xp, streak: user.streak, level: user.level, plan: user.plan,
      lessonsDone: user.lessonsDone, wordsInSrs: user.wordsInSrs,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

/* PATCH /api/auth/profile → sincroniza el progreso local con el servidor.
   El XP es monotónico: nunca baja (protege contra dispositivos con datos viejos). */
export async function PATCH(req: Request) {
  try {
    const body = (await req.json()) as ProfilePatch;
    if (!body.userId) return NextResponse.json({ error: "userId requerido" }, { status: 400 });

    const user = await db.user.findUnique({ where: { id: body.userId } });
    if (!user) return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });

    const data: Record<string, unknown> = { lastSeen: new Date() };
    if (typeof body.xp === "number") data.xp = Math.max(user.xp, Math.max(0, Math.round(body.xp)));
    if (typeof body.streak === "number") data.streak = Math.max(0, Math.round(body.streak));
    if (typeof body.lessonsDone === "number") data.lessonsDone = Math.max(0, Math.round(body.lessonsDone));
    if (typeof body.wordsInSrs === "number") data.wordsInSrs = Math.max(0, Math.round(body.wordsInSrs));
    if (body.level && user.role !== "admin") data.level = body.level;
    if (body.plan && user.role !== "admin") data.plan = body.plan;

    const updated = await db.user.update({ where: { id: user.id }, data });
    return NextResponse.json({
      ok: true,
      user: { id: updated.id, xp: updated.xp, level: updated.level, plan: updated.plan, streak: updated.streak },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
