import type { CefrLevel, ViewId } from "./types";
import type { UiWeeklyStrings } from "./ui/types";

/* ── PRO · PREMIUM · PLATINUM · definiciones de planes y gating ───── */

export type PlanId = "free" | "pro" | "premium" | "platinum";

export const PLAN_ORDER: PlanId[] = ["free", "pro", "premium", "platinum"];

export interface PlanLimits {
  tutorPerDay: number;      // -1 = illimitato
  writingPerDay: number;    // -1 = illimitato
  levels: Array<CefrLevel | "zero">;
  advancedAnalytics: boolean;
  exclusiveContent: boolean; // letture B2/C1 + conversazioni avanzate
  verifiedCerts: boolean;
  weeklyPlan: boolean;
  offlinePack: boolean;
  prioritySupport: boolean;
}

export interface PlanDef {
  id: PlanId;
  name: string;
  it: string;
  tagline: string;
  desc: string;
  monthly: number; // €
  yearly: number;  // €
  emoji: string;
  badge?: string;
  features: string[];
  limits: PlanLimits;
}

export const PLANS: Record<PlanId, PlanDef> = {
  free: {
    id: "free", name: "FREE", it: "Piano Base",
    tagline: "Per iniziare il viaggio",
    desc: "I fondamentali per scoprire l'italiano: corsi iniziali, vocabolario e primi giochi.",
    monthly: 0, yearly: 0, emoji: "🌱",
    features: [
      "Corsi Da zero · A1 · A2",
      "Grammatica ed esercizi fino ad A2",
      "Tutor IA: 5 messaggi al giorno",
      "Correzione scrittura IA: 2 al giorno",
      "Flashcards e ripasso intelligente",
      "Laboratorio di pronuncia interattivo",
      "Certificati standard",
    ],
    limits: {
      tutorPerDay: 5, writingPerDay: 2,
      levels: ["zero", "A1", "A2"],
      advancedAnalytics: false, exclusiveContent: false, verifiedCerts: false,
      weeklyPlan: false, offlinePack: false, prioritySupport: false,
    },
  },
  pro: {
    id: "pro", name: "PRO", it: "Piano Pro",
    tagline: "Il passo avanti serio",
    desc: "Tutti i corsi fino a B2, tutor esteso e analisi avanzate dello studio.",
    monthly: 7.99, yearly: 63, emoji: "⚡",
    features: [
      "Tutto del piano FREE",
      "Corsi B1 e B2 sbloccati",
      "Tutor IA: 20 messaggi al giorno",
      "Correzione scrittura IA: 5 al giorno",
      "Analisi avanzate (radar + calendario + motore adattivo)",
      "Tutti i giochi e gli esami B1–B2",
    ],
    limits: {
      tutorPerDay: 20, writingPerDay: 5,
      levels: ["zero", "A1", "A2", "B1", "B2"],
      advancedAnalytics: true, exclusiveContent: false, verifiedCerts: false,
      weeklyPlan: false, offlinePack: false, prioritySupport: false,
    },
  },
  premium: {
    id: "premium", name: "PREMIUM", it: "Piano Premium",
    tagline: "L'esperienza completa",
    desc: "Tutti i livelli fino a C2, contenuti esclusivi e correzioni illimitate.",
    monthly: 12.99, yearly: 103, emoji: "💎",
    badge: "IL PIÙ SCELTO",
    features: [
      "Tutto del piano PRO",
      "Corsi C1 e C2 sbloccati",
      "Tutor IA: 100 messaggi al giorno",
      "Correzione scrittura IA illimitata",
      "Letture B2/C1 e conversazioni avanzate esclusive",
      "Piano di studio settimanale personalizzato",
      "Certificati con sigillo premium",
    ],
    limits: {
      tutorPerDay: 100, writingPerDay: -1,
      levels: ["zero", "A1", "A2", "B1", "B2", "C1", "C2"],
      advancedAnalytics: true, exclusiveContent: true, verifiedCerts: false,
      weeklyPlan: true, offlinePack: false, prioritySupport: false,
    },
  },
  platinum: {
    id: "platinum", name: "PLATINUM", it: "Piano Platinum",
    tagline: "Il massimo assoluto",
    desc: "Tutto, senza limiti: tutor illimitato, certificati verificati e supporto prioritario.",
    monthly: 19.99, yearly: 159, emoji: "👑",
    badge: "ELITE",
    features: [
      "Tutto del piano PREMIUM",
      "Tutor IA illimitato e prioritario",
      "Certificati VERIFICATI con codice univoco",
      "Export pacchetto offline completo",
      "Supporto prioritario 24/7",
      "Sigillo Platinum nel profilo e nei certificati",
    ],
    limits: {
      tutorPerDay: -1, writingPerDay: -1,
      levels: ["zero", "A1", "A2", "B1", "B2", "C1", "C2"],
      advancedAnalytics: true, exclusiveContent: true, verifiedCerts: true,
      weeklyPlan: true, offlinePack: true, prioritySupport: true,
    },
  },
};

export function planRank(id: PlanId): number {
  return PLAN_ORDER.indexOf(id);
}

/* Bandera global: cuando el admin desactiva el sistema de planes (features.plans=false)
   todo el gating desaparece y todos los usuarios tienen acceso completo. */
let PLANS_DISABLED = false;
export function setPlansDisabled(disabled: boolean): void {
  PLANS_DISABLED = disabled;
}
export function plansDisabled(): boolean {
  return PLANS_DISABLED;
}

/** Límites efectivos del plan: si el admin desactivó el sistema de planes,
    todo el mundo tiene los límites PLATINUM (acceso total). */
export function planLimits(plan: PlanId): PlanLimits {
  if (PLANS_DISABLED) return PLANS.platinum.limits;
  return PLANS[plan].limits;
}

export function hasAtLeast(plan: PlanId, min: PlanId): boolean {
  if (PLANS_DISABLED) return true;
  return planRank(plan) >= planRank(min);
}

export function levelAllowed(plan: PlanId, level: string): boolean {
  if (PLANS_DISABLED) return true;
  return PLANS[plan].limits.levels.includes(level as CefrLevel | "zero");
}

export function requiredPlanForLevel(level: string): PlanId {
  if (PLANS_DISABLED) return "free";
  if (["zero", "A1", "A2"].includes(level)) return "free";
  if (["B1", "B2"].includes(level)) return "pro";
  return "premium";
}

export function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Mensajes/correcciones usados hoy (resetea a medianoche). */
export function todayUsage(count: number, date: string): number {
  return date === todayStr() ? count : 0;
}

/* ── Piano di studio settimanale (PREMIUM+) ──────────────────────── */

export interface PlanActivity { emoji: string; label: string; view: ViewId; minutes: number }
export interface DayPlan { day: string; focus: string; activities: PlanActivity[] }

/* v9.27 · los textos del plan llegan del diccionario UI de la lengua de
   estudio (ui.weekly): antes estaban hardcodeados en italiano y el plan
   salía en italiano aunque la lengua activa fuera en/pt/fr/de.        */
export function generateWeeklyPlan(level: CefrLevel | null, dueCount: number, weakLabels: string[], w: UiWeeklyStrings): DayPlan[] {
  const lv = level ?? "A1";
  const weak = weakLabels[0] ?? null;
  const due = Math.min(dueCount, 15);
  const dueAct: PlanActivity = due > 0
    ? { emoji: "🔄", label: w.act.due(due), view: "repaso", minutes: 10 }
    : { emoji: "🔄", label: w.act.addWords, view: "vocabolario", minutes: 5 };

  return [
    { day: w.days[0], focus: w.focus.mon, activities: [
      { emoji: "📚", label: w.act.lesson(lv), view: "cursos", minutes: 20 },
      dueAct,
    ] },
    { day: w.days[1], focus: weak ? w.focus.tueWeak(weak) : w.focus.tue, activities: [
      { emoji: "🧠", label: weak ? w.act.reinforce(weak) : w.act.grammarNew, view: "grammatica", minutes: 15 },
      { emoji: "🎧", label: w.act.listen, view: "ascolto", minutes: 10 },
    ] },
    { day: w.days[2], focus: w.focus.wed, activities: [
      { emoji: "🎧", label: w.act.dictation, view: "ascolto", minutes: 15 },
      { emoji: "🎨", label: w.act.vowelLab, view: "pronuncia", minutes: 10 },
    ] },
    { day: w.days[3], focus: w.focus.thu, activities: [
      { emoji: "✍️", label: w.act.writing, view: "scrittura", minutes: 15 },
      { emoji: "📖", label: w.act.reading, view: "lettura", minutes: 10 },
    ] },
    { day: w.days[4], focus: w.focus.fri, activities: [
      { emoji: "🗣️", label: w.act.conversation, view: "conversazione", minutes: 15 },
      { emoji: "🤖", label: w.act.tutor, view: "tutor", minutes: 10 },
    ] },
    { day: w.days[5], focus: w.focus.sat, activities: [
      { emoji: w.flag, label: w.act.culture, view: "cultura", minutes: 10 },
      { emoji: "📚", label: w.act.bonus, view: "cursos", minutes: 15 },
    ] },
    { day: w.days[6], focus: w.focus.sun, activities: [
      { emoji: "🎮", label: w.act.game, view: "giochi", minutes: 10 },
      due > 0
        ? { emoji: "🔄", label: w.act.quickReview, view: "repaso", minutes: 10 }
        : { emoji: "🗓️", label: w.act.preview, view: "progreso", minutes: 5 },
    ] },
  ];
}
