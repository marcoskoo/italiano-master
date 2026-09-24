import { NextResponse } from "next/server";
import { DEFAULT_APP_CONFIG } from "@/lib/lms/appconfig";
import { hashPassword, KEY_CONFIG, KEY_CUSTOM_EX, KEY_LESSON_OVR, KEY_VOCAB_OVR, logAdminAction, requireAdmin, setSetting } from "@/lib/admin/server";
import { db } from "@/lib/db";

export const runtime = "nodejs";

interface ResetBody { mode?: "events" | "content" | "all"; }

/* POST /api/admin/reset → reset por zonas:
   - events: borra solo la telemetría
   - content: borra overrides de contenido (vocab/lecciones/ejercicios custom)
   - all: borra todo excepto la cuenta admin Mkoo y la config por defecto */
export async function POST(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.res;
  try {
    const body = (await req.json().catch(() => ({}))) as ResetBody;
    const mode = body.mode ?? "all";
    const report: Record<string, number> = {};

    if (mode === "events" || mode === "all") {
      report.telemetryDeleted = await db.telemetryEvent.deleteMany({}).then((r) => r.count);
    }
    if (mode === "content" || mode === "all") {
      await setSetting(KEY_VOCAB_OVR, {});
      await setSetting(KEY_LESSON_OVR, {});
      await setSetting(KEY_CUSTOM_EX, []);
      report.contentReset = 1;
    }
    if (mode === "all") {
      const users = await db.user.findMany();
      for (const u of users) {
        if (u.username === "Mkoo") continue;
        await db.user.delete({ where: { id: u.id } });
      }
      report.usersDeleted = users.filter((u) => u.username !== "Mkoo").length;
      // reasegura la cuenta admin y la config por defecto
      await db.user.update({
        where: { username: "Mkoo" },
        data: { passwordHash: hashPassword("Mkoo", "Mk/06612"), role: "admin", active: true },
      });
      await setSetting(KEY_CONFIG, { ...DEFAULT_APP_CONFIG, updatedAt: new Date().toISOString() });
    }

    await logAdminAction(req, "data_reset", { mode, ...report });
    return NextResponse.json({ ok: true, mode, report });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
