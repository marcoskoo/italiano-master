import { NextResponse } from "next/server";
import { listSubscriptions, sendToSubs, dailyMessage, pushConfigured } from "@/lib/push/server";

export const runtime = "nodejs";

/* GET /api/push/cron → recordatorio diario a todos los suscritos.
   Endurecido v9.10.1: si CRON_SECRET (o PUSH_CRON_SECRET) está definida,
   se EXIGE `Authorization: Bearer <secret>` — la cabecera x-vercel-cron
   por sí sola es falsificable desde fuera y permitía a cualquiera
   disparar el envío masivo. Vercel adjunta automáticamente el header
   Bearer con el valor de CRON_SECRET en cada invocación programada.   */
export async function GET(req: Request) {
  try {
    const secret = process.env.CRON_SECRET || process.env.PUSH_CRON_SECRET;
    const authHeader = req.headers.get("authorization");
    const authOk = secret ? authHeader === `Bearer ${secret}` : false;
    const isVercelCron = req.headers.get("x-vercel-cron") === "1" || req.headers.get("x-vercel-cron") === "true";
    // sin secret configurado solo se acepta la cabecera de Vercel (dev);
    // con secret configurado, SIEMPRE se exige el Bearer.
    const authorized = secret ? authOk : isVercelCron;
    if (!authorized) {
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
