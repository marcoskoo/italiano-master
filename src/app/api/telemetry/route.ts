import { NextResponse } from "next/server";
import { logEvent } from "@/lib/admin/server";
import { db } from "@/lib/admin/store";

export const runtime = "nodejs";

/* POST /api/telemetry → registra un evento de uso de la plataforma */
export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { clientId?: string; username?: string | null; event?: string; detail?: unknown };
    if (!body.event) return NextResponse.json({ error: "event requerido" }, { status: 400 });

    await logEvent(body.clientId || "anon", body.username ?? null, body.event, body.detail);

    // actualiza lastSeen del usuario si existe
    if (body.username) {
      const user = await db.user.findUnique({ where: { username: body.username } });
      if (user) await db.user.update({ where: { id: user.id }, data: { lastSeen: new Date() } });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 200 }); // fire & forget: nunca rompe el cliente
  }
}
