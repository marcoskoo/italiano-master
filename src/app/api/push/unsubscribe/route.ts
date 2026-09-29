import { NextResponse } from "next/server";
import { removeSubscription } from "@/lib/push/server";

export const runtime = "nodejs";

/* POST /api/push/unsubscribe { endpoint } → elimina la suscripción */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body?.endpoint) return NextResponse.json({ error: "endpoint requerido" }, { status: 400 });
    await removeSubscription(String(body.endpoint));
    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
