import type { CefrLevel, DialogueLine } from "./types";
import { CB_A1 } from "./extra/cambridge-a1";
import { CB_A2 } from "./extra/cambridge-a2";
import { CB_B1 } from "./extra/cambridge-b1";
import { CB_B2 } from "./extra/cambridge-b2";
import { CB_C1 } from "./extra/cambridge-c1";
import { CB_C2 } from "./extra/cambridge-c2";

/* ═══ v9.8 · Percorso Comunicativo (arquitectura Cambridge) ═════════
   Reorganización del curso en unidades comunicativas con secuencia
   pedagógica fija de 12 pasos. La gramática deja de ser el eje del
   recorrido y pasa a ser herramienta al servicio de funciones
   comunicativas ("Non imparare l'italiano per parlare italiano:
   impara l'italiano per fare qualcosa in italiano").                */

export interface CbQuizItem { q: string; options: string[]; answer: number; explain?: string; }

/* v9.12 · Lecturas con comprensión cloze (inferencia léxica contextual):
   el texto italiano lleva marcadores {1} {2}… que el reproductor convierte
   en huecos; el estudiante deduce la palabra correcta por el contexto. */
export interface CbClozeGap {
  options: string[];        // 3 opciones plausibles (solo una encaja)
  answer: number;           // índice de la correcta
  why?: string;             // feedback breve (ES) del porqué
}
export interface CbClozeText {
  id: string;               // "cz-a1-01-1"
  title: string;            // IT
  titleEs: string;          // ES
  minutes: number;
  paragraphs: { it: string; es: string }[]; // it contiene marcadores {n}
  gaps: CbClozeGap[];       // gaps[n-1] corresponde al marcador {n}
}

export interface CbUnit {
  id: string;                    // "cu-a1-01"
  n: number;                     // nº de unidad dentro del nivel
  level: CefrLevel;
  title: string;                 // ES (título de la tarjeta)
  titleIt: string;
  img: string;                   // imagen existente de la app (ThemeImg)
  goal: string;                  // objetivo comunicativo en una frase
  goals: string[];               // can-do statements (3-4)
  scenario: string;              // 1. Motivazione — situación real (ES)
  dialogue: DialogueLine[];      // 2. Ascolto/Input — escuchar antes que analizar
  comprehension: CbQuizItem[];   // 3. Comprensione
  chunks: { it: string; es: string }[];  // 4. Vocabolario en bloques, no palabras aisladas
  grammar: {                     // 5. Grammatica inductiva
    focus: string;
    inductive: { it: string; es: string }[];  // ejemplos primero
    rule: string[];              // la regla, después
    topicId?: string;            // enlace al tema completo en Gramática
    gaps: CbQuizItem[];          // práctica inmediata (huecos)
  };
  pronunciation: {               // 6. Pronuncia (fonética específica)
    focus: string;
    tip: string;
    pairs: { a: string; b: string; note?: string }[];  // pares mínimos con audio
  };
  speaking: {                    // 7. Parlato — escalera accuracy→fluency
    steps: { kind: "controllato" | "semi" | "comunicativo" | "autentico"; task: string }[];
  };
  reading: {                     // 8. Lettura (lectura existente enlazada o texto propio)
    sourceId?: string;           // id de READINGS (rd-*)
    letturaId?: string;          // id de LETTURE (dia-/inf-/it-/mon-/cult-)
    lines?: { it: string; es: string }[];  // texto propio corto
    question: string;            // pregunta de comprensión abierta
  };
  writing: {                     // 9. Scrittura
    task: string;
    minWords: number;
    tips: string[];
    model: string[];
  };
  culture: {                     // 10. Cultura — lingua + cultura + comunicazione
    title: string;
    text: string;
    cultureId?: string;          // enlace a artículo en Cultura italiana
  };
  finalTask: {                   // 11. Missione finale — tarea real
    title: string;
    brief: string;
    checklist: string[];
  };
  review: CbQuizItem[];          // 12a. Quiz de repaso (≥60% para cerrar la unidad)
  cando: string[];               // 12b. Autoevaluación can-do
}

export interface CbLevel {
  level: CefrLevel;
  label: string;                 // "A1 · Sopravvivere in italiano"
  subtitle: string;              // descripción del nivel
  hours: number;
  units: CbUnit[];
}

export const CAMBRIDGE: CbLevel[] = [
  { level: "A1", label: "Sopravvivere in italiano", subtitle: "Supervivencia comunicativa: presentarte, moverte, pedir y resolver lo esencial.", hours: 60, units: CB_A1 },
  { level: "A2", label: "La vita quotidiana", subtitle: "Vida cotidiana: contar el pasado, hacer planes, gestionar imprevistos.", hours: 70, units: CB_A2 },
  { level: "B1", label: "Indipendenza comunicativa", subtitle: "Independencia: opiniones, experiencias, hipótesis y primeros debates.", hours: 80, units: CB_B1 },
  { level: "B2", label: "Comunicazione avanzata", subtitle: "Argumentación, matices y registros: discutir, persuadir y matizar.", hours: 90, units: CB_B2 },
  { level: "C1", label: "Dominio accademico e professionale", subtitle: "Lengua formal, académica y profesional con precisión y flexibilidad.", hours: 100, units: CB_C1 },
  { level: "C2", label: "Padroneggiare la lingua", subtitle: "Dominio total: estilo, ironía, retórica y literatura.", hours: 90, units: CB_C2 },
];

export const CB_UNIT_BY_ID: Record<string, CbUnit> = Object.fromEntries(
  CAMBRIDGE.flatMap((l) => l.units.map((u) => [u.id, u]))
);

export const CB_LEVEL_OF: Record<string, CefrLevel> = Object.fromEntries(
  CAMBRIDGE.flatMap((l) => l.units.map((u) => [u.id, l.level]))
);

/** Matriz de evaluación por competencias (adaptación Cambridge). */
export const SKILL_MATRIX: { skill: string; key: "ascolto" | "parlato" | "lettura" | "scrittura" | "grammatica" | "vocabolario"; descriptors: Record<string, string> }[] = [
  { skill: "Ascolto", key: "ascolto", descriptors: {
    A1: "Instrucciones y diálogos lentos sobre lo esencial", A2: "Conversaciones cotidianas y anuncios claros",
    B1: "Ideas principales de discursos y noticias", B2: "Argumentos complejos y lenguaje coloquial",
    C1: "Conferencias y debates a velocidad nativa", C2: "Todo, incluidos acentos y registros extremos" } },
  { skill: "Parlato", key: "parlato", descriptors: {
    A1: "Frases sueltas para necesidades inmediatas", A2: "Conversación simple rutinaria",
    B1: "Fluidez espontánea sobre temas conocidos", B2: "Argumentación fluida y espontánea",
    C1: "Precisión, flexibilidad y eficacia social", C2: "Naturalidad total con matices y humor" } },
  { skill: "Lettura", key: "lettura", descriptors: {
    A1: "Carteles, menús y textos muy simples", A2: "Textos cotidianos y cartas breves",
    B1: "Artículos e opiniones sobre temas actuales", B2: "Artículos complejos y literatura contemporánea",
    C1: "Textos académicos, ensayos y documentación", C2: "Clásicos, juegos de palabras y todo registro" } },
  { skill: "Scrittura", key: "scrittura", descriptors: {
    A1: "Notas y mensajes simples", A2: "Cartas y descripciones breves",
    B1: "Textos estructurados coherentes", B2: "Textos argumentativos claros",
    C1: "Informes, ensayos y síntesis académicas", C2: "Estilo propio y matizado en cualquier género" } },
  { skill: "Grammatica", key: "grammatica", descriptors: {
    A1: "Estructuras fundamentales controladas", A2: "Estructuras funcionales frecuentes",
    B1: "Control razonable, errores no bloquean", B2: "Precisión con estructuras variadas",
    C1: "Flexibilidad consciente y corrección alta", C2: "Uso intuitivo, incluso consciente de las reglas" } },
  { skill: "Vocabolario", key: "vocabolario", descriptors: {
    A1: "Repertorio esencial de supervivencia", A2: "Vocabulario cotidiano amplio",
    B1: "Repertorio amplio para temas generales", B2: "Vocabulario especializado y expresivo",
    C1: "Precisión léxica y colocaciones idiomáticas", C2: "Riqueza total, incluidas rarezas literarias" } },
];

/** Los 12 pasos pedagógicos de cada unidad (orden fijo Cambridge). */
export const CB_STEPS = [
  { id: "scenario", label: "Motivazione" },
  { id: "ascolto", label: "Ascolto" },
  { id: "comprensione", label: "Comprensione" },
  { id: "vocabolario", label: "Vocabolario" },
  { id: "grammatica", label: "Grammatica" },
  { id: "pronuncia", label: "Pronuncia" },
  { id: "parlato", label: "Parlato" },
  { id: "lettura", label: "Lettura" },
  { id: "scrittura", label: "Scrittura" },
  { id: "cultura", label: "Cultura" },
  { id: "missione", label: "Missione" },
  { id: "autovalutazione", label: "Autovalutazione" },
] as const;

export type CbStepId = (typeof CB_STEPS)[number]["id"];

export const CB_UNIT_XP = { section: 10, unit: 60 };
