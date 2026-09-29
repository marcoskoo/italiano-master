import { NextResponse } from "next/server";
import { upsertSubscription, pushConfigured } from "@/lib/push/server";

export const runtime = "nodejs";

/* POST /api/push/subscribe { subscription, username?, displayName? }
   Registra o actualiza la suscripción push de este dispositivo. */
export async function POST(req: Request) {
  try {
    if (!pushConfigured()) return NextResponse.json({ error: "Push no configurado" }, { status: 503 });
    const body = await req.json();
    const sub = body?.subscription;
    if (!sub?.endpoint || !sub?.keys?.p256dh || !sub?.keys?.auth) {
      return NextResponse.json({ error: "Suscripción inválida" }, { status: 400 });
    }
    await upsertSubscription({
      endpoint: String(sub.endpoint),
      keys: { p256dh: String(sub.keys.p256dh), auth: String(sub.keys.auth) },
      username: typeof body.username === "string" && body.username ? body.username : null,
      displayName: typeof body.displayName === "string" && body.displayName ? body.displayName : null,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
