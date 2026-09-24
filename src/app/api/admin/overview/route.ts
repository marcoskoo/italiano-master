import { NextResponse } from "next/server";
import { requireAdmin, getAppConfig, getSetting, KEY_LESSON_OVR, KEY_VOCAB_OVR, KEY_CUSTOM_EX } from "@/lib/admin/server";
import { db } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* GET /api/admin/overview → métricas del dashboard */
export async function GET(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.res;

  try {
    const since7 = new Date(Date.now() - 7 * 86400000);
    const since24 = new Date(Date.now() - 86400000);

    const [users, events7, eventsToday, recent, vocabOvr, lessonOvr, customEx, config] = await Promise.all([
      db.user.findMany({ orderBy: { xp: "desc" } }),
      db.telemetryEvent.findMany({ where: { createdAt: { gte: since7 } }, orderBy: { createdAt: "desc" } }),
      db.telemetryEvent.count({ where: { createdAt: { gte: since24 } } }),
      db.telemetryEvent.findMany({ orderBy: { createdAt: "desc" }, take: 14 }),
      getSetting<Record<string, unknown>>(KEY_VOCAB_OVR, {}),
      getSetting<Record<string, unknown>>(KEY_LESSON_OVR, {}),
      getSetting<unknown[]>(KEY_CUSTOM_EX, []),
      getAppConfig(),
    ]);

    // actividad por día (7 días)
    const byDay: { day: string; label: string; count: number }[] = [];
    for (let d = 6; d >= 0; d--) {
      const date = new Date(Date.now() - d * 86400000);
      const key = date.toISOString().slice(0, 10);
      byDay.push({
        day: key,
        label: date.toLocaleDateString("es-ES", { weekday: "short" }),
        count: events7.filter((e) => e.createdAt.toISOString().slice(0, 10) === key).length,
      });
    }

    // eventos por tipo (7 días)
    const byType: Record<string, number> = {};
    for (const e of events7) byType[e.event] = (byType[e.event] ?? 0) + 1;

    // distribución por nivel y por plan (estudiantes)
    const students = users.filter((u) => u.role === "student");
    const byLevel: Record<string, number> = {};
    for (const s of students) byLevel[s.level] = (byLevel[s.level] ?? 0) + 1;
    const byPlan: Record<string, number> = {};
    for (const s of students) byPlan[s.plan] = (byPlan[s.plan] ?? 0) + 1;

    const activeStudents = students.filter((s) => s.lastSeen.getTime() >= since7.getTime()).length;
    const customWords = Object.values(vocabOvr).filter((o) => (o as { word?: unknown }).word).length;
    const hiddenWords = Object.values(vocabOvr).filter((o) => (o as { deleted?: boolean }).deleted).length;
    const customLessons = Object.values(lessonOvr).filter((o) => (o as { lesson?: unknown }).lesson).length;
    const disabledLessons = Object.values(lessonOvr).filter((o) => (o as { disabled?: boolean }).disabled).length;

    return NextResponse.json({
      kpis: {
        totalUsers: users.length,
        students: students.length,
        activeStudents,
        admins: users.length - students.length,
        totalXp: users.reduce((n, u) => n + u.xp, 0),
        events7: events7.length,
        eventsToday,
        customWords,
        hiddenWords,
        customLessons,
        disabledLessons,
        customExercises: customEx.length,
      },
      byDay,
      byType,
      byLevel,
      byPlan,
      topStudents: students.slice(0, 5).map((s) => ({
        username: s.username, displayName: s.displayName, xp: s.xp, level: s.level, plan: s.plan, streak: s.streak,
      })),
      recent: recent.map((e) => ({
        id: e.id, clientId: e.clientId, username: e.username, event: e.event,
        detail: e.detail, at: e.createdAt.toISOString(),
      })),
      configSummary: {
        maintenance: config.maintenance.enabled,
        features: config.features,
        appName: config.appName,
      },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
