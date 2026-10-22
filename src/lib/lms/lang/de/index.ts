import type { CbLevel } from "../../cambridge";
import { DE_A1 } from "./courses-a1";
import { DE_A2 } from "./courses-a2";
import { DE_B1 } from "./courses-b1";
import { DE_B2 } from "./courses-b2";
import { DE_C1 } from "./courses-c1";
import { DE_C2 } from "./courses-c2";
import { DE_CB_RULES_A1 } from "./cb-rules-a1";
import { DE_MIND_A1 } from "./mind-a1";
import { DE_CLOZE_A1 } from "./cloze-a1";
import { DE_DEEP_A1 } from "./deep-a1";
import { DE_MIND_A2 } from "./mind-a2";
import { DE_CLOZE_A2 } from "./cloze-a2";
import { DE_DEEP_A2 } from "./deep-a2";
import { DE_MIND_B1 } from "./mind-b1";
import { DE_CLOZE_B1 } from "./cloze-b1";
import { DE_DEEP_B1 } from "./deep-b1";
import { DE_MIND_B2 } from "./mind-b2";
import { DE_CLOZE_B2 } from "./cloze-b2";
import { DE_DEEP_B2 } from "./deep-b2";
import { DE_MIND_C1 } from "./mind-c1";
import { DE_CLOZE_C1 } from "./cloze-c1";
import { DE_DEEP_C1 } from "./deep-c1";
import { DE_MIND_C2 } from "./mind-c2";
import { DE_CLOZE_C2 } from "./cloze-c2";
import { DE_DEEP_C2 } from "./deep-c2";
import { DE_CB_RULES_A2 } from "./cb-rules-a2";
import { DE_CB_RULES_B1 } from "./cb-rules-b1";
import { DE_CB_RULES_B2 } from "./cb-rules-b2";
import { DE_CB_RULES_C1 } from "./cb-rules-c1";
import { DE_CB_RULES_C2 } from "./cb-rules-c2";

/* ═══ DE · paquete de contenido A1–C2 (Deutsch von Deutschland) ════
   v9.24 · Percorso completo: 6 niveles × 12 unidades comunicativas
   (metodología Cambridge de 12 pasos) en Hochdeutsch auténtico por
   nivel CEFR: Sie/du, comas obligatorias ante subordinadas, reloj de
   24 horas con Uhr, ß válido. Escenarios en Berlín, Múnich, Hamburgo,
   Colonia, Fráncfort, Dresde, Düsseldorf, Leipzig, Potsdam, la costa
   del mar del Norte y la Paulskirche de Fráncfort. Las unidades son
   autocontenidas y navegables sin lecturas complementarias (mind,
   cloze, gramática profunda y drills se amplían por nivel en pases
   sucesivos, igual que EN/PT en v9.22 y FR en v9.23).                     */

export const DE_COURSES: CbLevel[] = [
  {
    level: "A1",
    label: "Überleben auf Deutsch",
    subtitle: "Supervivencia comunicativa en alemán de Alemania: presentarte, pedir, moverte y resolver lo esencial.",
    hours: 90,
    units: DE_A1,
  },
  {
    level: "A2",
    label: "Der Alltag auf Deutsch",
    subtitle: "Vida cotidiana en alemán: contar el pasado, hacer planes y gestionar imprevistos.",
    hours: 95,
    units: DE_A2,
  },
  {
    level: "B1",
    label: "Kommunikative Selbstständigkeit",
    subtitle: "Independencia: opiniones, experiencias, hipótesis y primeros debates.",
    hours: 105,
    units: DE_B1,
  },
  {
    level: "B2",
    label: "Fortgeschrittene Kommunikation",
    subtitle: "Argumentación, matices y registros: discutir, persuadir y matizar con precisión.",
    hours: 115,
    units: DE_B2,
  },
  {
    level: "C1",
    label: "Akademische und professionelle Beherrschung",
    subtitle: "Alemán formal, académico y profesional con precisión y flexibilidad.",
    hours: 125,
    units: DE_C1,
  },
  {
    level: "C2",
    label: "Deutsch meistern",
    subtitle: "Dominio total: estilo, ironía, retórica y literatura.",
    hours: 110,
    units: DE_C2,
  },
];

/* v9.36 · tablas de reglas + ejemplos + drills para las 72 unidades */
export const DE_CB_RULES = {
  ...DE_CB_RULES_A1,
  ...DE_CB_RULES_A2,
  ...DE_CB_RULES_B1,
  ...DE_CB_RULES_B2,
  ...DE_CB_RULES_C1,
  ...DE_CB_RULES_C2,
};

/* v9.36 · registro de drills para la lengua (antes vacío) */
import type { GrammarDrill } from "../../extra/grammar-drills";
/* v9.38 · capas deep/cloze/mind A1–C2 completas (72 unidades) */
export const DE_MIND = { ...DE_MIND_A1, ...DE_MIND_A2, ...DE_MIND_B1, ...DE_MIND_B2, ...DE_MIND_C1, ...DE_MIND_C2 };
export const DE_CLOZE = { ...DE_CLOZE_A1, ...DE_CLOZE_A2, ...DE_CLOZE_B1, ...DE_CLOZE_B2, ...DE_CLOZE_C1, ...DE_CLOZE_C2 };
export const DE_DEEP = { ...DE_DEEP_A1, ...DE_DEEP_A2, ...DE_DEEP_B1, ...DE_DEEP_B2, ...DE_DEEP_C1, ...DE_DEEP_C2 };
export const DE_DRILLS: Record<string, GrammarDrill> = {};
