/* ═══ v9.13 · Letture tematiche: meditazione, spiritualità, qui e ora,
   relax fisico e mentale — con comprensione lectora y de escucha.

   Cada unidad comunicativa recibe 3 lecturas temáticas que, junto con
   las letture cloze (v9.12, estrategia de completamiento contextual),
   cubren las 7 estrategias de comprensión:

   L1 · Predizione + Cuestionario (literal/inferencial/crítico) + V/F con justificación
   L2 · Predizione + Idea principal e ideas secundarias + Búsqueda del intruso
   L3 · Predizzie + Reconstrucción de secuencias (orden temporal) + Ascolto (escucha)   */

export type MindTheme = "meditazione" | "spiritualità" | "qui e ora" | "relax fisico" | "relax mentale";

export const MIND_THEME_LABEL: Record<MindTheme, string> = {
  "meditazione": "Meditazione",
  "spiritualità": "Spiritualità",
  "qui e ora": "Qui e ora",
  "relax fisico": "Relax fisico",
  "relax mentale": "Relax mentale",
};

/** Estrategia 4 · Predicción de contenidos a partir del título (antes de leer). */
export interface MindPredict {
  q: string;               // pregunta en ES ("¿De qué tratará el texto?")
  options: string[];       // 3 hipótesis (ES)
  answer: number;
  why: string;             // feedback (ES)
}

/** Cuestionario: preguntas literal / inferencial / crítico (estrategia 1). */
export interface MindQuiz {
  q: string;               // en italiano (se comprende el texto italiano)
  kind: "literal" | "inferencial" | "critica";
  options: string[];
  answer: number;
  why: string;             // justificación en ES
}

/** Estrategia 7 · Verdadero o falso CON justificación. */
export interface MindVF {
  text: string;            // enunciado en italiano
  value: boolean;
  why: string;             // justificación (ES) del porqué
}

/** Estrategia 2 · Identificación de la idea principal e ideas secundarias. */
export interface MindIdeas {
  mainQ: string;           // "¿Cuál es la idea principal del texto?"
  mainOptions: string[];   // 3 resúmenes (IT), uno fiel al texto
  mainAnswer: number;
  secQ: string;            // instrucción para las secundarias
  secondary: string[];     // ideas secundarias PRESENTES (IT)
  distractors: string[];   // plausibles pero NO presentes (IT)
}

/** Estrategia 6 · Búsqueda del intruso / detección de absurdos (verbales). */
export interface MindIntruder {
  instr: string;           // instrucción (ES)
  sentences: string[];     // 4-5 frases (IT): una es el intruso
  intruder: number;        // índice del intruso
  why: string;             // por qué es el intruso (ES)
}

/** Estrategia 3 · Reconstrucción de secuencias / ordenamiento temporal. */
export interface MindSequence {
  instr: string;           // instrucción (ES)
  events: string[];        // eventos EN ORDEN CORRECTO (el componente los mezcla)
}

/** Comprensión de escucha: audio TTS con texto oculto + preguntas. */
export interface MindListen {
  intro: string;           // instrucción (ES)
  audioIt: string;         // texto del audio (no se muestra hasta "revelar")
  questions: MindQuiz[];
}

export interface MindReading {
  id: string;              // "md-a1-01-1"
  theme: MindTheme;
  title: string;           // IT
  titleEs: string;         // ES
  minutes: number;
  paragraphs: { it: string; es: string }[];
  predict: MindPredict;
  quiz?: MindQuiz[];
  vf?: MindVF[];
  ideas?: MindIdeas;
  intruder?: MindIntruder;
  sequence?: MindSequence;
  listen?: MindListen;
}
