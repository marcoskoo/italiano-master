import type { LangCode } from "../types";
import type { CbLevel, CbClozeText, CbQuizItem } from "../cambridge";
import type { CbGrammarDeep } from "../extra/grammar-deep";
import type { GrammarDrill } from "../extra/grammar-drills";
import type { MindReading } from "../cambridge-mind";
import { CAMBRIDGE } from "../cambridge";
import { CB_CLOZE } from "../extra/readings-cloze";
import { MIND_LIBRARY, MIND_READINGS } from "../extra/readings-mind";
import { GRAMMAR_DEEP } from "../extra/grammar-deep";
import { GRAMMAR_DRILLS } from "../extra/grammar-drills";
import { EN_COURSES, EN_MIND, EN_CLOZE, EN_DEEP, EN_DRILLS, EN_CB_RULES } from "./en";
import { PT_COURSES, PT_MIND, PT_CLOZE, PT_DEEP, PT_DRILLS, PT_CB_RULES } from "./pt";
import { FR_COURSES, FR_CB_RULES, FR_DRILLS, FR_MIND, FR_CLOZE, FR_DEEP } from "./fr";
import { DE_COURSES, DE_CB_RULES, DE_DRILLS, DE_MIND, DE_CLOZE, DE_DEEP } from "./de";

/* ═══ v9.17 · Resolutor de contenido por lengua de estudio ════════════
   La interfaz sigue en español; el contenido (unidades, lecturas,
   cloze, gramática, drills) se resuelve para la lengua activa.
   El italiano conserva sus módulos históricos (compat total con el
   progreso existente: sus ids no llevan prefijo).                       */

export interface LangContent {
  courses: CbLevel[];
  cloze: Record<string, CbClozeText[]>;
  mind: Record<string, MindReading[]>;
  deep: Record<string, CbGrammarDeep>;
  drills: Record<string, GrammarDrill>;
}

const IT_CONTENT: LangContent = {
  courses: CAMBRIDGE,
  cloze: CB_CLOZE,
  mind: MIND_READINGS,
  deep: GRAMMAR_DEEP,
  drills: GRAMMAR_DRILLS,
};

const EN_CONTENT: LangContent = {
  courses: EN_COURSES,
  cloze: EN_CLOZE,
  mind: EN_MIND,
  deep: EN_DEEP,
  drills: EN_DRILLS,
};

const PT_CONTENT: LangContent = {
  courses: PT_COURSES,
  cloze: PT_CLOZE,
  mind: PT_MIND,
  deep: PT_DEEP,
  drills: PT_DRILLS,
};

/* v9.23/v9.24 · FR y DE aterrizaron con el percorso completo; v9.38 añade
   las capas deep/cloze/mind para sus 72 unidades (A1–C2). */
const FR_CONTENT: LangContent = {
  courses: FR_COURSES,
  cloze: FR_CLOZE,
  mind: FR_MIND,
  deep: FR_DEEP,
  drills: FR_DRILLS,
};

const DE_CONTENT: LangContent = {
  courses: DE_COURSES,
  cloze: DE_CLOZE,
  mind: DE_MIND,
  deep: DE_DEEP,
  drills: DE_DRILLS,
};

const BY_LANG: Partial<Record<LangCode, LangContent>> = {
  it: IT_CONTENT,
  en: EN_CONTENT,
  pt: PT_CONTENT,
  fr: FR_CONTENT,
  de: DE_CONTENT,
};

/* v9.36 · «Reglas + ejemplos» en la gramática incrustada de las unidades
   Cambridge EN/PT/FR/DE: tablas de construcción + ejemplos (4→7) + drills
   derivados de las tablas. Merge aditivo al cargar (patrón v9.35). */
import { applyCbGrammarPacks } from "./cb-rules";
applyCbGrammarPacks(EN_COURSES, EN_DRILLS, EN_CB_RULES);
applyCbGrammarPacks(PT_COURSES, PT_DRILLS, PT_CB_RULES);
applyCbGrammarPacks(FR_COURSES, FR_DRILLS, FR_CB_RULES);
applyCbGrammarPacks(DE_COURSES, DE_DRILLS, DE_CB_RULES);

export function langContent(lang: LangCode): LangContent | undefined {
  return BY_LANG[lang];
}

/** Unidades por id (todas las lenguas mezcladas; el prefijo decide). */
import { CB_UNIT_BY_ID } from "../cambridge";
const UNIT_INDEX: Record<string, import("../cambridge").CbUnit> = {
  ...CB_UNIT_BY_ID,
  ...Object.fromEntries(EN_COURSES.flatMap((l) => l.units).map((u) => [u.id, u] as const)),
  ...Object.fromEntries(PT_COURSES.flatMap((l) => l.units).map((u) => [u.id, u] as const)),
  ...Object.fromEntries(FR_COURSES.flatMap((l) => l.units).map((u) => [u.id, u] as const)),
  ...Object.fromEntries(DE_COURSES.flatMap((l) => l.units).map((u) => [u.id, u] as const)),
};
export function unitById(id: string): import("../cambridge").CbUnit | undefined {
  return UNIT_INDEX[id];
}

/** Nivel MCER de una unidad por su id (prefijo por lengua). */
const LEVEL_OF: Record<string, import("../types").CefrLevel> = {};
for (const lv of CAMBRIDGE) for (const u of lv.units) LEVEL_OF[u.id] = lv.level;
for (const lv of EN_COURSES) for (const u of lv.units) LEVEL_OF[u.id] = lv.level;
for (const lv of PT_COURSES) for (const u of lv.units) LEVEL_OF[u.id] = lv.level;
for (const lv of FR_COURSES) for (const u of lv.units) LEVEL_OF[u.id] = lv.level;
for (const lv of DE_COURSES) for (const u of lv.units) LEVEL_OF[u.id] = lv.level;
export function levelOfUnit(id: string): import("../types").CefrLevel | undefined {
  return LEVEL_OF[id];
}

/** CbQuizItem re-export para consumers */
export type { CbQuizItem };
