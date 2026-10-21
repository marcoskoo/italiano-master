import type { CbLevel } from "../../cambridge";
import { EN_A1 } from "./courses-a1";
import { EN_A2 } from "./courses-a2";
import { EN_B1 } from "./courses-b1";
import { EN_B2 } from "./courses-b2";
import { EN_C1 } from "./courses-c1";
import { EN_C2 } from "./courses-c2";
import { EN_MIND_A1 } from "./mind-a1";
import { EN_CLOZE_A1 } from "./cloze-a1";
import { EN_DEEP_A1 } from "./deep-a1";
import { EN_DRILLS_A1 } from "./drills-a1";
import { EN_CB_RULES_A1 } from "./cb-rules-a1";
import { EN_CB_RULES_A2 } from "./cb-rules-a2";
import { EN_CB_RULES_B1 } from "./cb-rules-b1";
import { EN_CB_RULES_B2 } from "./cb-rules-b2";
import { EN_CB_RULES_C1 } from "./cb-rules-c1";
import { EN_CB_RULES_C2 } from "./cb-rules-c2";

/* ═══ EN · paquete de contenido A1–C2 (inglés americano) ════════════
   v9.22 · Percorso completo: 6 niveles × 12 unidades comunicativas
   (metodología Cambridge de 12 pasos). Escenarios en EE. UU., inglés
   americano auténtico por nivel CEFR. Mind readings, cloze, gramática
   profunda y drills disponibles para A1 (se amplían por nivel en
   pases sucesivos); las unidades son autocontenidas y navegables
   sin ellos. */

export const EN_COURSES: CbLevel[] = [
  {
    level: "A1",
    label: "Survival English",
    subtitle: "Supervivencia comunicativa en inglés americano: presentarte, pedir, moverte y resolver lo esencial.",
    hours: 90,
    units: EN_A1,
  },
  {
    level: "A2",
    label: "Everyday English",
    subtitle: "Vida cotidiana en inglés americano: contar el pasado, hacer planes y resolver imprevistos.",
    hours: 95,
    units: EN_A2,
  },
  {
    level: "B1",
    label: "Independent English",
    subtitle: "Independencia comunicativa: opiniones, experiencias, hipótesis y primeros debates.",
    hours: 105,
    units: EN_B1,
  },
  {
    level: "B2",
    label: "Advanced Communication",
    subtitle: "Argumentación, matices y registros: discutir, persuadir y matizar con naturalidad.",
    hours: 115,
    units: EN_B2,
  },
  {
    level: "C1",
    label: "Academic & Professional English",
    subtitle: "Inglés formal, académico y profesional con precisión y flexibilidad.",
    hours: 125,
    units: EN_C1,
  },
  {
    level: "C2",
    label: "Mastering English",
    subtitle: "Dominio total: estilo, ironía, retórica y literatura.",
    hours: 110,
    units: EN_C2,
  },
];

export const EN_MIND = EN_MIND_A1;
export const EN_CLOZE = EN_CLOZE_A1;
export const EN_DEEP = EN_DEEP_A1;
export const EN_DRILLS = EN_DRILLS_A1;

/* v9.36 · tablas de reglas + ejemplos + drills para las 72 unidades */
export const EN_CB_RULES = {
  ...EN_CB_RULES_A1,
  ...EN_CB_RULES_A2,
  ...EN_CB_RULES_B1,
  ...EN_CB_RULES_B2,
  ...EN_CB_RULES_C1,
  ...EN_CB_RULES_C2,
};
