import { NextResponse } from "next/server";
import { hashPassword, logAdminAction, requireAdmin } from "@/lib/admin/server";
import { db } from "@/lib/admin/store";

export const runtime = "nodejs";

const DEMO = [
  { username: "sofia", displayName: "Sofía Beltrán", level: "B1", plan: "premium", xp: 1520, streak: 9, lessonsDone: 18, wordsInSrs: 55 },
  { username: "andrea", displayName: "Andrea Cevallos", level: "A1", plan: "free", xp: 240, streak: 2, lessonsDone: 4, wordsInSrs: 14 },
  { username: "matteo", displayName: "Matteo Gómez", level: "B2", plan: "pro", xp: 2210, streak: 15, lessonsDone: 25, wordsInSrs: 73 },
];

const DEMO_EVENTS = ["boot", "lesson_completed", "quiz_completed", "tutor_message", "plan_changed", "cert_earned"];

/* POST /api/admin/seed → genera estudiantes demo con progreso y telemetría */
export async function POST(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.res;
  try {
    let created = 0;
    for (const d of DEMO) {
      const exists = await db.user.findUnique({ where: { username: d.username } });
      if (exists) continue;
      await db.user.create({
        data: {
          ...d,
          passwordHash: hashPassword(d.username, "italiano123"),
          role: "student",
          active: true,
          lastSeen: new Date(Date.now() - Math.floor(Math.random() * 3 * 86400000)),
        },
      });
      created++;
    }

    // telemetría de los demo
    const rows: { clientId: string; username: string; event: string; createdAt: Date }[] = [];
    for (let day = 3; day >= 0; day--) {
      for (let i = 0; i < 5; i++) {
        const u = DEMO[Math.floor(Math.random() * DEMO.length)];
        rows.push({
          clientId: `demo-${u.username}-${i % 2}`,
          username: u.username,
          event: DEMO_EVENTS[Math.floor(Math.random() * DEMO_EVENTS.length)],
          createdAt: new Date(Date.now() - day * 86400000 - Math.floor(Math.random() * 20 * 3600000)),
        });
      }
    }
    await db.telemetryEvent.createMany({ data: rows });

    await logAdminAction(req, "seed_demo", { created });
    return NextResponse.json({ ok: true, created, events: rows.length });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
