import type { CbLevel } from "../../cambridge";
import { PT_A1 } from "./courses-a1";
import { PT_A2 } from "./courses-a2";
import { PT_B1 } from "./courses-b1";
import { PT_B2 } from "./courses-b2";
import { PT_C1 } from "./courses-c1";
import { PT_C2 } from "./courses-c2";
import { PT_MIND_A1 } from "./mind-a1";
import { PT_CLOZE_A1 } from "./cloze-a1";
import { PT_DEEP_A1 } from "./deep-a1";
import { PT_DRILLS_A1 } from "./drills-a1";
import { PT_CB_RULES_A1 } from "./cb-rules-a1";
import { PT_CB_RULES_A2 } from "./cb-rules-a2";
import { PT_CB_RULES_B1 } from "./cb-rules-b1";
import { PT_CB_RULES_B2 } from "./cb-rules-b2";
import { PT_CB_RULES_C1 } from "./cb-rules-c1";
import { PT_CB_RULES_C2 } from "./cb-rules-c2";

/* ═══ PT · paquete de contenido A1–C2 (português de Portugal) ══════
   v9.22 · Percorso completo: 6 niveles × 12 unidades comunicativas
   (metodología Cambridge de 12 pasos) em português europeu autêntico
   por nível CEFR (nunca brasileño: AO90, "está a + infinitivo",
   autocarro, comboio, pequeno-almoço). Escenarios en Lisboa, Porto,
   Coimbra, Braga, Évora, Aveiro, Setúbal, Faro y Trás-os-Montes.
   Mind readings, cloze, gramática profunda y drills disponibles
   para A1 (se amplían por nivel en pases sucesivos); las unidades
   son autocontenidas y navegables sin ellos. */

export const PT_COURSES: CbLevel[] = [
  {
    level: "A1",
    label: "Sobreviver em português",
    subtitle: "Supervivencia comunicativa en portugués de Portugal: presentarte, pedir, moverte y resolver lo esencial.",
    hours: 90,
    units: PT_A1,
  },
  {
    level: "A2",
    label: "O dia a dia em português",
    subtitle: "Vida cotidiana en portugués: contar el pasado, hacer planes y gestionar imprevistos.",
    hours: 95,
    units: PT_A2,
  },
  {
    level: "B1",
    label: "Independência comunicativa",
    subtitle: "Independencia: opiniones, experiencias, hipótesis y primeros debates.",
    hours: 105,
    units: PT_B1,
  },
  {
    level: "B2",
    label: "Comunicação avançada",
    subtitle: "Argumentación, matices y registros: discutir, persuadir y matizar com precisão.",
    hours: 115,
    units: PT_B2,
  },
  {
    level: "C1",
    label: "Domínio académico e profissional",
    subtitle: "Portugués formal, académico y profesional con precisión y flexibilidad.",
    hours: 125,
    units: PT_C1,
  },
  {
    level: "C2",
    label: "Dominar o português",
    subtitle: "Dominio total: estilo, ironía, retórica y literatura.",
    hours: 110,
    units: PT_C2,
  },
];

export const PT_MIND = PT_MIND_A1;
export const PT_CLOZE = PT_CLOZE_A1;
export const PT_DEEP = PT_DEEP_A1;
export const PT_DRILLS = PT_DRILLS_A1;

/* v9.36 · tablas de reglas + ejemplos + drills para las 72 unidades */
export const PT_CB_RULES = {
  ...PT_CB_RULES_A1,
  ...PT_CB_RULES_A2,
  ...PT_CB_RULES_B1,
  ...PT_CB_RULES_B2,
  ...PT_CB_RULES_C1,
  ...PT_CB_RULES_C2,
};
