import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin/server";
import { db } from "@/lib/admin/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* GET /api/admin/activity?event=&limit= → registro de eventos con filtro */
export async function GET(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.res;

  const url = new URL(req.url);
  const event = url.searchParams.get("event") || undefined;
  const limit = Math.min(300, Math.max(10, Number(url.searchParams.get("limit") ?? 100)));

  const events = await db.telemetryEvent.findMany({
    where: event ? { event } : undefined,
    orderBy: { createdAt: "desc" },
    take: limit,
  });

  const types = await db.telemetryEvent.groupBy({ by: ["event"], _count: { event: true } });
  return NextResponse.json({
    events: events.map((e) => ({
      id: e.id, clientId: e.clientId, username: e.username, event: e.event,
      detail: e.detail, at: e.createdAt.toISOString(),
    })),
    types: types.map((t) => ({ event: t.event, count: t._count.event })).sort((a, b) => b.count - a.count),
  });
}
