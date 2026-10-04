import { NextResponse } from "next/server";
import { removeSubscription } from "@/lib/push/server";
import { getClientIp, rateLimit } from "@/lib/admin/security";

export const runtime = "nodejs";

/* POST /api/push/unsubscribe { endpoint } → elimina la suscripción
   v9.10.1: rate limit — los endpoints push son secretos, pero limitar
   evita el griefing masivo contra el blob.                            */
export async function POST(req: Request) {
  try {
    const rl = rateLimit(`push-unsub:${getClientIp(req)}`, { limit: 15, windowMs: 60_000, blockMs: 300_000 });
    if (!rl.ok) {
      return NextResponse.json({ error: "Demasiadas peticiones" }, { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } });
    }
    const body = await req.json();
    if (!body?.endpoint) return NextResponse.json({ error: "endpoint requerido" }, { status: 400 });
    await removeSubscription(String(body.endpoint));
    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
