/* ── Seed: admin Mkoo + config por defecto + estudiantes demo + telemetría ── */
import { createHash } from "crypto";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export function hashPassword(username: string, password: string): string {
  return createHash("sha256").update(`italiano-master::${username}::${password}`).digest("hex");
}

const DEFAULT_CONFIG = {
  appName: "Italiano Master",
  tagline: "Tu plataforma integral de italiano, desde cero hasta C2",
  maintenance: { enabled: false, message: "Stiamo aggiornando la piattaforma. Torna tra poco!" },
  features: { plans: true, tutor: true, games: true, certificates: true, weeklyPlan: true },
  defaults: { dailyGoalXp: 120, audioRate: 0.9, theme: "light", textSize: "md" },
  forceDefaults: false,
  levels: { zero: true, A1: true, A2: true, B1: true, B2: true, C1: true, C2: true },
  pricing: { pro: 7.99, premium: 12.99, platinum: 19.99, yearlyDiscount: 20 },
  updatedAt: new Date().toISOString(),
};

const DEMO_STUDENTS = [
  { username: "giulia", displayName: "Giulia Fernándezi", level: "B1", plan: "pro", xp: 1840, streak: 12, lessonsDone: 21, wordsInSrs: 64 },
  { username: "carlos", displayName: "Carlos Mendoza", level: "A2", plan: "free", xp: 620, streak: 3, lessonsDone: 9, wordsInSrs: 31 },
  { username: "lucia", displayName: "Lucía Ramírez", level: "C1", plan: "platinum", xp: 3980, streak: 41, lessonsDone: 38, wordsInSrs: 112 },
  { username: "diego", displayName: "Diego Torres", level: "A1", plan: "free", xp: 180, streak: 1, lessonsDone: 3, wordsInSrs: 12 },
  { username: "valentina", displayName: "Valentina Ruiz", level: "B2", plan: "premium", xp: 2670, streak: 8, lessonsDone: 27, wordsInSrs: 87 },
  { username: "marco", displayName: "Marco Antonio Solís", level: "A2", plan: "pro", xp: 940, streak: 5, lessonsDone: 12, wordsInSrs: 45 },
];

const EVENTS: { event: string; detail?: Record<string, unknown> }[] = [
  { event: "boot" }, { event: "boot" }, { event: "boot" },
  { event: "lesson_completed", detail: { lessonId: "les-a1-1" } },
  { event: "lesson_completed", detail: { lessonId: "les-a2-2" } },
  { event: "lesson_completed", detail: { lessonId: "les-b1-1" } },
  { event: "quiz_completed", detail: { label: "Práctica A1", score: 8, total: 10 } },
  { event: "quiz_completed", detail: { label: "Esame B1", score: 17, total: 20 } },
  { event: "quiz_completed", detail: { label: "Repaso", score: 12, total: 12 } },
  { event: "tutor_message" }, { event: "tutor_message" }, { event: "tutor_message" },
  { event: "plan_changed", detail: { plan: "pro" } },
  { event: "plan_changed", detail: { plan: "platinum" } },
  { event: "cert_earned", detail: { level: "A2" } },
  { event: "level_test", detail: { level: "B1" } },
];

async function main() {
  console.log("→ Limpiando datos previos…");
  await db.telemetryEvent.deleteMany();
  await db.setting.deleteMany();
  await db.user.deleteMany();

  console.log("→ Creando admin Mkoo…");
  await db.user.create({
    data: {
      username: "Mkoo",
      passwordHash: hashPassword("Mkoo", "Mk/06612"),
      role: "admin",
      displayName: "Mkoo · Amministratore",
      level: "C2",
      plan: "platinum",
      xp: 5200,
      streak: 30,
      active: true,
    },
  });

  console.log("→ Creando estudiantes demo…");
  for (const s of DEMO_STUDENTS) {
    await db.user.create({
      data: {
        username: s.username,
        passwordHash: hashPassword(s.username, "italiano123"),
        role: "student",
        displayName: s.displayName,
        level: s.level,
        plan: s.plan,
        xp: s.xp,
        streak: s.streak,
        lessonsDone: s.lessonsDone,
        wordsInSrs: s.wordsInSrs,
        active: true,
        lastSeen: new Date(Date.now() - Math.floor(Math.random() * 5 * 86400000)),
      },
    });
  }

  console.log("→ Guardando configuración por defecto…");
  const set = (key: string, value: unknown) =>
    db.setting.upsert({ where: { key }, update: { value: JSON.stringify(value) }, create: { key, value: JSON.stringify(value) } });
  await set("config", DEFAULT_CONFIG);
  await set("vocabOverrides", {});
  await set("lessonOverrides", {});
  await set("customExercises", []);

  console.log("→ Generando telemetría demo (últimos 7 días)…");
  const users = await db.user.findMany({ where: { role: "student" } });
  const rows: { clientId: string; username: string; event: string; detail: string | null; createdAt: Date }[] = [];
  for (let day = 6; day >= 0; day--) {
    const n = 6 + Math.floor(Math.random() * 10);
    for (let i = 0; i < n; i++) {
      const u = users[Math.floor(Math.random() * users.length)];
      const e = EVENTS[Math.floor(Math.random() * EVENTS.length)];
      const at = new Date(Date.now() - day * 86400000 - Math.floor(Math.random() * 20 * 3600000));
      rows.push({
        clientId: `demo-${u.username}-${i % 3}`,
        username: u.username,
        event: e.event,
        detail: e.detail ? JSON.stringify(e.detail) : null,
        createdAt: at,
      });
    }
  }
  // el evento de hoy incluye al admin
  rows.push({ clientId: "demo-admin-0", username: "Mkoo", event: "login", detail: null, createdAt: new Date() });
  await db.telemetryEvent.createMany({ data: rows });

  const counts = {
    users: await db.user.count(),
    settings: await db.setting.count(),
    events: await db.telemetryEvent.count(),
  };
  console.log("✔ Seed completado:", counts);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => db.$disconnect());
