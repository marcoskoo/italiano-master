import type { CbLevel } from "../../cambridge";
import { PT_A1 } from "./courses-a1";
import { PT_MIND_A1 } from "./mind-a1";
import { PT_CLOZE_A1 } from "./cloze-a1";
import { PT_DEEP_A1 } from "./deep-a1";
import { PT_DRILLS_A1 } from "./drills-a1";

/* ═══ PT · paquete de contenido A1 (português de Portugal) ═══════════
   Misma metodología que el italiano: 12 unidades comunicativas de
   12 pasos + 36 lecturas temáticas (7 estrategias) + 36 cloze +
   gramática profunda + drills. Escenarios en Lisboa y Oporto,
   portugués europeo. */

export const PT_COURSES: CbLevel[] = [
  {
    level: "A1",
    label: "Sobreviver em português",
    subtitle: "Supervivencia comunicativa en portugués de Portugal: presentarte, pedir, moverte y resolver lo esencial.",
    hours: 90,
    units: PT_A1,
  },
];

export const PT_MIND = PT_MIND_A1;
export const PT_CLOZE = PT_CLOZE_A1;
export const PT_DEEP = PT_DEEP_A1;
export const PT_DRILLS = PT_DRILLS_A1;
