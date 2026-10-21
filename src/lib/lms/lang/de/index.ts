import type { CbLevel } from "../../cambridge";
import { DE_A1 } from "./courses-a1";
import { DE_A2 } from "./courses-a2";
import { DE_B1 } from "./courses-b1";
import { DE_B2 } from "./courses-b2";
import { DE_C1 } from "./courses-c1";
import { DE_C2 } from "./courses-c2";

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
