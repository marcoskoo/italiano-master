/* ── Aplicación de overrides remotos sobre el contenido estático ──────
   El Panel Admin envía vocabOverrides / lessonOverrides / customExercises.
   Este módulo reconstruye VOCAB / COURSES / EXERCISES in place (desde
   copias prístinas) para que TODA la app consuma el contenido actualizado
   sin cambios en las vistas. */

import type { AppConfigBundle } from "./appconfig";
import { VOCAB, VOCAB_BY_ID, VOCAB_CATEGORIES } from "./vocabulary";
import type { VocabWord } from "./types";
import { COURSES } from "./courses";
import { EXERCISES, EXERCISES_BY_ID } from "./exercises";
import { PLANS, setPlansDisabled } from "./plans";

const VOCAB_PRISTINE: VocabWord[] = structuredClone(VOCAB);
const COURSES_PRISTINE = structuredClone(COURSES);
const EXERCISES_PRISTINE = structuredClone(EXERCISES);

let appliedVersion = "";

/** Copia prístina del vocabulario base (para el Panel Admin). */
export function baseVocabSnapshot(): VocabWord[] {
  return VOCAB_PRISTINE;
}

/** Copia prístina de los cursos base (para el Panel Admin). */
export function baseCoursesSnapshot(): typeof COURSES {
  return COURSES_PRISTINE;
}

export function overridesAppliedVersion(): string {
  return appliedVersion;
}

/** Aplica el bundle completo (config + contenido). Idempotente. */
export function applyRemoteBundle(bundle: AppConfigBundle): void {
  appliedVersion = bundle.version;
  applyVocabOverrides(bundle.vocabOverrides);
  applyExerciseOverrides(bundle.customExercises);
  applyLessonOverrides(bundle.lessonOverrides);
  applyPricingAndPlans(bundle.config);
}

/* ── Vocabolario ───────────────────────────────────────────────────── */

function applyVocabOverrides(overrides: AppConfigBundle["vocabOverrides"]): void {
  const map = new Map(VOCAB_PRISTINE.map((w) => [w.id, w]));

  for (const [id, entry] of Object.entries(overrides)) {
    if (entry.deleted) {
      map.delete(id);
    } else if (entry.word) {
      map.set(id, entry.word); // palabra custom (custom-*) o reemplazo completo de una base
    }
  }

  VOCAB.length = 0;
  VOCAB.push(...map.values());

  for (const k of Object.keys(VOCAB_BY_ID)) delete VOCAB_BY_ID[k];
  for (const w of VOCAB) VOCAB_BY_ID[w.id] = w;

  VOCAB_CATEGORIES.length = 0;
  VOCAB_CATEGORIES.push(...[...new Set(VOCAB.map((w) => w.cat))]);
}

/* ── Esercizi custom ───────────────────────────────────────────────── */

function applyExerciseOverrides(custom: AppConfigBundle["customExercises"]): void {
  const map = new Map(EXERCISES_PRISTINE.map((e) => [e.id, e]));
  for (const e of custom) map.set(e.id, e);

  EXERCISES.length = 0;
  EXERCISES.push(...map.values());

  for (const k of Object.keys(EXERCISES_BY_ID)) delete EXERCISES_BY_ID[k];
  for (const e of EXERCISES) EXERCISES_BY_ID[e.id] = e;
}

/* ── Lezioni ───────────────────────────────────────────────────────── */

function applyLessonOverrides(overrides: AppConfigBundle["lessonOverrides"]): void {
  const next = structuredClone(COURSES_PRISTINE);

  // desactivar/borrar/parchear lecciones base
  for (const course of next) {
    for (const unit of course.units) {
      unit.lessons = unit.lessons
        .filter((l) => {
          const o = overrides[l.id];
          return !o || (!o.deleted && !o.disabled);
        })
        .map((l) => {
          const o = overrides[l.id];
          return o?.patch ? { ...l, ...o.patch } : l;
        });
    }
  }

  // lecciones custom → unidad extra por nivel
  const customs = Object.values(overrides).flatMap((o) => (o.lesson ? [o.lesson] : []));
  for (const les of customs) {
    const course = next.find((c) => c.level === les.level);
    if (!course) continue;
    let unit = course.units.find((u) => u.id === `u-${les.level}-extra`);
    if (!unit) {
      unit = { id: `u-${les.level}-extra`, level: les.level, title: "Unità extra (Admin)", titleIt: "Unità extra", lessons: [] };
      course.units.push(unit);
    }
    unit.lessons = unit.lessons.filter((l) => l.id !== les.id);
    unit.lessons.push(les);
  }

  COURSES.length = 0;
  COURSES.push(...next);
}

/* ── Precios y planes (config) ─────────────────────────────────────── */

function applyPricingAndPlans(config: AppConfigBundle["config"]): void {
  setPlansDisabled(!config.features?.plans);
  const p = config.pricing;
  if (!p) return;
  const yearlyFor = (monthly: number) => Math.round(monthly * 12 * (1 - (p.yearlyDiscount ?? 20) / 100) * 100) / 100;
  if (typeof p.pro === "number" && p.pro > 0) { PLANS.pro.monthly = p.pro; PLANS.pro.yearly = yearlyFor(p.pro); }
  if (typeof p.premium === "number" && p.premium > 0) { PLANS.premium.monthly = p.premium; PLANS.premium.yearly = yearlyFor(p.premium); }
  if (typeof p.platinum === "number" && p.platinum > 0) { PLANS.platinum.monthly = p.platinum; PLANS.platinum.yearly = yearlyFor(p.platinum); }
}
