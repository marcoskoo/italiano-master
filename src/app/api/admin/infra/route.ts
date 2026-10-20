import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin/server";
import { getPersistenceInfo, infraSnapshot } from "@/lib/admin/store";
import { listSubscriptions, pushConfigured } from "@/lib/push/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* GET /api/admin/infra → panel «Infraestructura · Coste 0» (v9.20)
   Reúne en vivo el uso real de cada servicio gratuito para compararlo
   contra los límites del free tier. Solo expone BOOLEANOS de env: nunca
   valores de secretos.                                                       */
export async function GET(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.res;

  try {
    const [persistence, snapshot, subs] = await Promise.all([
      getPersistenceInfo(),
      infraSnapshot(),
      listSubscriptions().catch(() => [] as { endpoint: string }[]),
    ]);

    return NextResponse.json({
      persistence: { mode: persistence.mode, durable: persistence.durable },
      snapshot,
      push: {
        configured: pushConfigured(),
        subscriptions: subs.length,
      },
      /* booleanos de configuración (nunca el valor) */
      env: {
        blob: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
        cronSecret: Boolean(process.env.CRON_SECRET || process.env.PUSH_CRON_SECRET),
        tutorApi: Boolean(process.env.TUTOR_API_BASE && process.env.TUTOR_API_KEY),
        adminPassword: Boolean(process.env.ADMIN_PASSWORD),
      },
      /* el checkout de planes es una simulación client-side: no hay
         pasarela conectada, por tanto ningún coste de procesamiento   */
      billing: { gateway: "none", simulatedCheckout: true },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
