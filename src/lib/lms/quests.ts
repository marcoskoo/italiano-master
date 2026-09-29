/* ── Misiones diarias + logros (v6.0 · engagement estilo Duolingo) ──
   100% offline: sin servicios de pago, todo corre en el cliente.
   · Misiones: 3 objetivos diarios generados de forma determinista
     por fecha (seeded) — se resetean cada día a medianoche.
   · Logros: insignias permanentes con progreso (cur/target),
     derivadas del estado global — no se "guardan", se calculan. */

import type { LmsState } from "./store";

/* ═══ MISIONES DIARIAS ═════════════════════════════════════════════ */

/** Tipos que alimentan misiones (los que generan quest diaria) */
export type QuestType =
  | "correct" | "listen" | "lesson" | "game" | "review" | "dictation" | "shadow" | "import" | "xp";

/** Tipos solo-contador (para logros, sin quest diaria) */
export type CounterType = "tutor" | "writing" | "manual";

export type TrackType = QuestType | CounterType;

export interface DailyQuest {
  id: string;        // `${type}-${fecha}`
  type: QuestType;
  target: number;
  progress: number;
  done: boolean;
}

export const QUEST_BONUS_XP = 15;       // bonus al completar una misión
export const ALL_QUESTS_BONUS_XP = 50;  // bonus al completar las 3

interface QuestDef {
  type: QuestType;
  emoji: string;
  label: (t: number) => string;   // descripción con objetivo
  targets: number[];              // variantes de dificultad
}

export const QUEST_DEFS: QuestDef[] = [
  { type: "correct", emoji: "🎯", label: (t) => `Acierta ${t} respuestas`, targets: [12, 18, 25] },
  { type: "listen", emoji: "👂", label: (t) => `Escucha ${t} audios`, targets: [6, 10, 15] },
  { type: "lesson", emoji: "📗", label: (t) => `Completa ${t} ${t === 1 ? "lección" : "lecciones"}`, targets: [1, 2] },
  { type: "game", emoji: "🎲", label: (t) => `Juega ${t} ${t === 1 ? "juego" : "juegos"}`, targets: [1, 2, 3] },
  { type: "review", emoji: "🔁", label: (t) => `Repasa ${t} tarjetas`, targets: [10, 15, 20] },
  { type: "dictation", emoji: "✍️", label: (t) => `Completa ${t} ${t === 1 ? "dictado" : "dictados"}`, targets: [1, 2] },
  { type: "shadow", emoji: "🎙️", label: (t) => `Graba ${t} ${t === 1 ? "frase" : "frases"} en shadowing`, targets: [3, 5] },
  { type: "import", emoji: "📥", label: (t) => `Añade ${t} palabras desde el importador`, targets: [5, 8] },
  { type: "xp", emoji: "⚡", label: (t) => `Gana ${t} XP hoy`, targets: [60, 100, 150] },
];

export function questLabel(type: QuestType): string {
  const def = QUEST_DEFS.find((d) => d.type === type);
  return def ? def.label(0).replace(/^(\w+)\s+\d+\s*/, "$1") : type;
}

/* RNG determinista por fecha (mulberry32 con seed del string) */
function seedFrom(s: string): number {
  let h = 1779033703 ^ s.length;
  for (let i = 0; i < s.length; i++) {
    h = Math.imul(h ^ s.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return h >>> 0;
}

function mulberry32(a: number) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Genera las 3 misiones del día (determinista: misma fecha = mismas misiones) */
export function generateDailyQuests(date: string): DailyQuest[] {
  const rnd = mulberry32(seedFrom(`missioni-${date}`));
  const pool = [...QUEST_DEFS];
  const picked: DailyQuest[] = [];
  // la misión de XP siempre entra: es el objetivo mínimo diario
  const xpDef = pool.find((d) => d.type === "xp")!;
  const xpTarget = xpDef.targets[Math.floor(rnd() * xpDef.targets.length)];
  picked.push({ id: `xp-${date}`, type: "xp", target: xpTarget, progress: 0, done: false });
  // +2 aleatorias distintas
  const rest = pool.filter((d) => d.type !== "xp");
  for (let i = 0; i < 2 && rest.length > 0; i++) {
    const idx = Math.floor(rnd() * rest.length);
    const def = rest.splice(idx, 1)[0];
    const target = def.targets[Math.floor(rnd() * def.targets.length)];
    picked.push({ id: `${def.type}-${date}`, type: def.type, target, progress: 0, done: false });
  }
  return picked;
}

/* ═══ LOGROS PERMANENTES ════════════════════════════════════════════ */

export interface AchievementState {
  xp: number;
  streak: number;
  lessons: number;
  totalLessons: number;
  srsCount: number;
  mastered: number;
  quizzes: number;
  games: number;        // counters.game
  certificates: number;
  perfectCerts: number;
  c2Cert: boolean;
  dictations: number;   // counters.dictation
  shadows: number;      // counters.shadow
  imports: number;      // counters.import
  listens: number;      // counters.listen
  tutorUses: number;    // counters.tutor
  writings: number;     // counters.writing
}

export type AchievementCat = "studio" | "lessico" | "costanza" | "abilita" | "valore";

export const ACHIEVEMENT_CATS: Record<AchievementCat, { label: string; emoji: string }> = {
  studio: { label: "Estudio", emoji: "🎓" },
  lessico: { label: "Léxico", emoji: "📚" },
  costanza: { label: "Constancia", emoji: "🔥" },
  abilita: { label: "Abilità", emoji: "🎙️" },
  valore: { label: "Valore", emoji: "🏆" },
};

export interface AchievementDef {
  id: string;
  emoji: string;
  name: string;
  desc: string;
  cat: AchievementCat;
  target: number;
  value: (s: AchievementState) => number;
}

export const ACHIEVEMENTS: AchievementDef[] = [
  /* ── Estudio ── */
  { id: "primi-passi", emoji: "👣", name: "Primi passi", desc: "Completa 1 lección", cat: "studio", target: 1, value: (s) => s.lessons },
  { id: "corsaro", emoji: "⛵", name: "Corsaro", desc: "10 lecciones completadas", cat: "studio", target: 10, value: (s) => s.lessons },
  { id: "esploratore", emoji: "🧭", name: "Esploratore", desc: "30 lecciones completadas", cat: "studio", target: 30, value: (s) => s.lessons },
  { id: "maratoneta", emoji: "🏃", name: "Maratoneta", desc: "60 lecciones completadas", cat: "studio", target: 60, value: (s) => s.lessons },
  { id: "gran-tour", emoji: "🏛️", name: "Gran Tour", desc: "Completa todas las lecciones", cat: "studio", target: 120, value: (s) => s.lessons },
  { id: "xp-cinque", emoji: "⚡", name: "Cinquecento", desc: "Alcanza 500 XP", cat: "studio", target: 500, value: (s) => s.xp },
  { id: "xp-mille", emoji: "🚀", name: "Mille XP", desc: "Alcanza 1.000 XP", cat: "studio", target: 1000, value: (s) => s.xp },
  { id: "xp-cinquemila", emoji: "🌟", name: "Stella nascente", desc: "Alcanza 5.000 XP", cat: "studio", target: 5000, value: (s) => s.xp },
  /* ── Léxico ── */
  { id: "parole-25", emoji: "📖", name: "Vocabolista", desc: "25 palabras en repaso", cat: "lessico", target: 25, value: (s) => s.srsCount },
  { id: "parole-100", emoji: "📚", name: "Dizionario vivente", desc: "100 palabras en repaso", cat: "lessico", target: 100, value: (s) => s.srsCount },
  { id: "parole-500", emoji: "🧠", name: "Memoria d'acciaio", desc: "500 palabras en repaso", cat: "lessico", target: 500, value: (s) => s.srsCount },
  { id: "parole-1000", emoji: "💎", name: "Mille parole", desc: "1.000 palabras en repaso", cat: "lessico", target: 1000, value: (s) => s.srsCount },
  { id: "padroneggio", emoji: "🧬", name: "Padroneggio", desc: "100 palabras dominadas", cat: "lessico", target: 100, value: (s) => s.mastered },
  { id: "cacciatore", emoji: "🏹", name: "Cacciatore di parole", desc: "50 palabras importadas", cat: "lessico", target: 50, value: (s) => s.imports },
  /* ── Constancia ── */
  { id: "settimana", emoji: "🔥", name: "Settimana di fuoco", desc: "Racha de 7 días", cat: "costanza", target: 7, value: (s) => s.streak },
  { id: "quindici", emoji: "🌋", name: "Vulcano", desc: "Racha de 15 días", cat: "costanza", target: 15, value: (s) => s.streak },
  { id: "mese", emoji: "🌙", name: "Luna piena", desc: "Racha de 30 días", cat: "costanza", target: 30, value: (s) => s.streak },
  { id: "cento-giorni", emoji: "💪", name: "Centurione", desc: "Racha de 100 días", cat: "costanza", target: 100, value: (s) => s.streak },
  /* ── Abilità ── */
  { id: "orecchio-fino", emoji: "👂", name: "Orecchio fino", desc: "Escucha 100 audios", cat: "abilita", target: 100, value: (s) => s.listens },
  { id: "dettato-perfetto", emoji: "✍️", name: "Scrivano", desc: "20 dictados completados", cat: "abilita", target: 20, value: (s) => s.dictations },
  { id: "shadow-master", emoji: "🎙️", name: "Shadow master", desc: "20 grabaciones de shadowing", cat: "abilita", target: 20, value: (s) => s.shadows },
  { id: "giocatore", emoji: "🎲", name: "Giocatore", desc: "Juega 25 partidas", cat: "abilita", target: 25, value: (s) => s.games },
  { id: "tutor-amico", emoji: "💬", name: "Amico del tutor", desc: "25 sesiones con el Tutor IA", cat: "abilita", target: 25, value: (s) => s.tutorUses },
  { id: "scrittore", emoji: "🖊️", name: "Scrittore", desc: "10 escrituras corregidas", cat: "abilita", target: 10, value: (s) => s.writings },
  /* ── Valore ── */
  { id: "diplomato", emoji: "🎓", name: "Diplomato", desc: "Aprueba un examen de nivel", cat: "valore", target: 1, value: (s) => s.certificates },
  { id: "perfetto", emoji: "✨", name: "Perfetto!", desc: "Un examen sin fallos (100%)", cat: "valore", target: 1, value: (s) => s.perfectCerts },
  { id: "c2-dominio", emoji: "👑", name: "Dominio C2", desc: "Certificado de nivel C2", cat: "valore", target: 1, value: (s) => (s.c2Cert ? 1 : 0) },
  { id: "collezionista", emoji: "🥇", name: "Collezionista", desc: "3 certificados distintos", cat: "valore", target: 3, value: (s) => s.certificates },
];

/** Construye el snapshot de logros desde el estado global */
export function achievementState(s: LmsState, totalLessons: number): AchievementState {
  return {
    xp: s.xp,
    streak: s.streakCount,
    lessons: s.completedLessons.length,
    totalLessons,
    srsCount: Object.keys(s.srs).length,
    mastered: Object.values(s.srs).filter((c) => c.interval >= 21 && c.lapses === 0).length,
    quizzes: s.quizHistory.length,
    games: s.counters.game ?? 0,
    certificates: s.certificates.length,
    perfectCerts: s.certificates.filter((c) => c.score === 100).length,
    c2Cert: s.certificates.some((c) => c.level === "C2"),
    dictations: s.counters.dictation ?? 0,
    shadows: s.counters.shadow ?? 0,
    imports: s.counters.import ?? 0,
    listens: s.counters.listen ?? 0,
    tutorUses: s.counters.tutor ?? 0,
    writings: s.counters.writing ?? 0,
  };
}
