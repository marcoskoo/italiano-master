import { NextResponse } from "next/server";
import { getAppConfig, logAdminAction, requireAdmin, saveAppConfig } from "@/lib/admin/server";
import type { AppConfig } from "@/lib/lms/appconfig";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* GET /api/admin/settings → config actual */
export async function GET(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.res;
  return NextResponse.json({ config: await getAppConfig() });
}

/* PUT /api/admin/settings → guardar cambios de configuración (efecto inmediato en clientes) */
export async function PUT(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.res;
  try {
    const body = (await req.json()) as Partial<AppConfig>;
    const config = await saveAppConfig(body);
    await logAdminAction(req, "config_update", { fields: Object.keys(body) });
    return NextResponse.json({ config });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
