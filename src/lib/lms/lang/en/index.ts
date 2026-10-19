import type { CbLevel } from "../../cambridge";
import { EN_A1 } from "./courses-a1";
import { EN_MIND_A1 } from "./mind-a1";
import { EN_CLOZE_A1 } from "./cloze-a1";
import { EN_DEEP_A1 } from "./deep-a1";
import { EN_DRILLS_A1 } from "./drills-a1";

/* ═══ EN · paquete de contenido A1 (inglés americano) ════════════════
   Misma metodología que el italiano: 12 unidades comunicativas de
   12 pasos + 36 lecturas temáticas (7 estrategias) + 36 cloze +
   gramática profunda + drills. Escenarios en EE. UU., inglés americano. */

export const EN_COURSES: CbLevel[] = [
  {
    level: "A1",
    label: "Survival English",
    subtitle: "Supervivencia comunicativa en inglés americano: presentarte, pedir, moverte y resolver lo esencial.",
    hours: 90,
    units: EN_A1,
  },
];

export const EN_MIND = EN_MIND_A1;
export const EN_CLOZE = EN_CLOZE_A1;
export const EN_DEEP = EN_DEEP_A1;
export const EN_DRILLS = EN_DRILLS_A1;
