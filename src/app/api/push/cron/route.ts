import { NextResponse } from "next/server";
import { listSubscriptions, sendToSubs, dailyMessage, pushConfigured } from "@/lib/push/server";

export const runtime = "nodejs";

/* GET /api/push/cron → recordatorio diario a todos los suscritos.
   Protegido: cabecera x-vercel-cron (invocación de Vercel) o
   Authorization: Bearer PUSH_CRON_SECRET.                             */
export async function GET(req: Request) {
  try {
    const secret = process.env.PUSH_CRON_SECRET;
    const isVercelCron = req.headers.get("x-vercel-cron") === "1" || req.headers.get("x-vercel-cron") === "true";
    const authOk = secret ? req.headers.get("authorization") === `Bearer ${secret}` : false;
    if (!isVercelCron && !authOk) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    if (!pushConfigured()) return NextResponse.json({ error: "Push no configurado" }, { status: 503 });

    const subs = await listSubscriptions();
    if (subs.length === 0) return NextResponse.json({ ok: true, sent: 0, failed: 0, removed: 0 });

    const res = await sendToSubs(subs, dailyMessage());
    return NextResponse.json({ ok: true, ...res });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
