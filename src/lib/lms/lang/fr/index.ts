import type { CbLevel } from "../../cambridge";
import { FR_A1 } from "./courses-a1";
import { FR_A2 } from "./courses-a2";
import { FR_B1 } from "./courses-b1";
import { FR_B2 } from "./courses-b2";
import { FR_C1 } from "./courses-c1";
import { FR_C2 } from "./courses-c2";
import { FR_CB_RULES_A1 } from "./cb-rules-a1";
import { FR_MIND_A1 } from "./mind-a1";
import { FR_CLOZE_A1 } from "./cloze-a1";
import { FR_DEEP_A1 } from "./deep-a1";
import { FR_MIND_A2 } from "./mind-a2";
import { FR_CLOZE_A2 } from "./cloze-a2";
import { FR_DEEP_A2 } from "./deep-a2";
import { FR_MIND_B1 } from "./mind-b1";
import { FR_CLOZE_B1 } from "./cloze-b1";
import { FR_DEEP_B1 } from "./deep-b1";
import { FR_MIND_B2 } from "./mind-b2";
import { FR_CLOZE_B2 } from "./cloze-b2";
import { FR_DEEP_B2 } from "./deep-b2";
import { FR_MIND_C1 } from "./mind-c1";
import { FR_CLOZE_C1 } from "./cloze-c1";
import { FR_DEEP_C1 } from "./deep-c1";
import { FR_MIND_C2 } from "./mind-c2";
import { FR_CLOZE_C2 } from "./cloze-c2";
import { FR_DEEP_C2 } from "./deep-c2";
import { FR_CB_RULES_A2 } from "./cb-rules-a2";
import { FR_CB_RULES_B1 } from "./cb-rules-b1";
import { FR_CB_RULES_B2 } from "./cb-rules-b2";
import { FR_CB_RULES_C1 } from "./cb-rules-c1";
import { FR_CB_RULES_C2 } from "./cb-rules-c2";

/* ═══ FR · paquete de contenido A1–C2 (français de France) ═════════
   v9.23 · Percorso completo: 6 niveles × 12 unidades comunicativas
   (metodología Cambridge de 12 pasos) en francés de Francia auténtico
   por nivel CEFR: vouvoiement, tipografía francesa (espacio antes de
   ? ! : ;), euros, reloj de 24 horas. Escenarios en París, Lyon,
   Marseille, Bordeaux, Lille, Strasbourg, Nantes, Toulouse, Grenoble,
   Rennes, Montpellier, Dijon, Cassis y Versailles. Las unidades son
   autocontenidas y navegables sin lecturas complementarias (mind,
   cloze, gramática profunda y drills se amplían por nivel en pases
   sucesivos, igual que EN/PT en v9.22).                                    */

export const FR_COURSES: CbLevel[] = [
  {
    level: "A1",
    label: "Survivre en français",
    subtitle: "Supervivencia comunicativa en francés de Francia: presentarte, pedir, moverte y resolver lo esencial.",
    hours: 90,
    units: FR_A1,
  },
  {
    level: "A2",
    label: "Le quotidien en français",
    subtitle: "Vida cotidiana en francés: contar el pasado, hacer planes y gestionar imprevistos.",
    hours: 95,
    units: FR_A2,
  },
  {
    level: "B1",
    label: "Indépendance communicative",
    subtitle: "Independencia: opiniones, experiencias, hipótesis y primeros debates.",
    hours: 105,
    units: FR_B1,
  },
  {
    level: "B2",
    label: "Communication avancée",
    subtitle: "Argumentación, matices y registros: discutir, persuadir y matizar con precisión.",
    hours: 115,
    units: FR_B2,
  },
  {
    level: "C1",
    label: "Maîtrise académique et professionnelle",
    subtitle: "Francés formal, académico y profesional con precisión y flexibilidad.",
    hours: 125,
    units: FR_C1,
  },
  {
    level: "C2",
    label: "Maîtriser le français",
    subtitle: "Dominio total: estilo, ironía, retórica y literatura.",
    hours: 110,
    units: FR_C2,
  },
];


/* v9.36 · tablas de reglas + ejemplos + drills para las 72 unidades */
export const FR_CB_RULES = {
  ...FR_CB_RULES_A1,
  ...FR_CB_RULES_A2,
  ...FR_CB_RULES_B1,
  ...FR_CB_RULES_B2,
  ...FR_CB_RULES_C1,
  ...FR_CB_RULES_C2,
};

/* v9.36 · registro de drills para la lengua (antes vacío) */
import type { GrammarDrill } from "../../extra/grammar-drills";
/* v9.38 · capas deep/cloze/mind A1–C2 completas (72 unidades) */
export const FR_MIND = { ...FR_MIND_A1, ...FR_MIND_A2, ...FR_MIND_B1, ...FR_MIND_B2, ...FR_MIND_C1, ...FR_MIND_C2 };
export const FR_CLOZE = { ...FR_CLOZE_A1, ...FR_CLOZE_A2, ...FR_CLOZE_B1, ...FR_CLOZE_B2, ...FR_CLOZE_C1, ...FR_CLOZE_C2 };
export const FR_DEEP = { ...FR_DEEP_A1, ...FR_DEEP_A2, ...FR_DEEP_B1, ...FR_DEEP_B2, ...FR_DEEP_C1, ...FR_DEEP_C2 };
export const FR_DRILLS: Record<string, GrammarDrill> = {};
