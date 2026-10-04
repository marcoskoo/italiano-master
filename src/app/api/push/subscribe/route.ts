import { NextResponse } from "next/server";
import { upsertSubscription, pushConfigured } from "@/lib/push/server";
import { getClientIp, rateLimit } from "@/lib/admin/security";

export const runtime = "nodejs";

/* POST /api/push/subscribe { subscription, username?, displayName? }
   Registra o actualiza la suscripción push de este dispositivo.
   v9.10.1: rate limit — impedir inundar el blob de suscripciones basura. */
export async function POST(req: Request) {
  try {
    const rl = rateLimit(`push-sub:${getClientIp(req)}`, { limit: 15, windowMs: 60_000, blockMs: 300_000 });
    if (!rl.ok) {
      return NextResponse.json({ error: "Demasiadas peticiones" }, { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } });
    }
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
