import { NextResponse } from "next/server";
import { logAdminAction, requireAdmin } from "@/lib/admin/server";
import { db } from "@/lib/admin/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* GET /api/admin/export → dump completo de la plataforma en JSON */
export async function GET(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.res;

  const [users, settings, events] = await Promise.all([
    db.user.findMany({ orderBy: { createdAt: "asc" } }),
    db.setting.findMany(),
    db.telemetryEvent.findMany({ orderBy: { createdAt: "desc" }, take: 2000 }),
  ]);

  await logAdminAction(req, "data_export");

  const dump = {
    exportedAt: new Date().toISOString(),
    platform: "Italiano Master",
    users: users.map((u) => ({ ...u, passwordHash: `(${u.passwordHash.slice(0, 8)}…)` })), // hash truncado por seguridad
    settings: settings.map((s) => ({ key: s.key, value: JSON.parse(s.value) })),
    telemetryEvents: events,
  };

  return new NextResponse(JSON.stringify(dump, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": `attachment; filename="italiano-master-backup-${new Date().toISOString().slice(0, 10)}.json"`,
    },
  });
}
