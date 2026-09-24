/* ── Italiano Master · Core types ─────────────────────────────────── */

export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
export const CEFR_LEVELS: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];
export const LEVEL_LABELS: Record<CefrLevel, string> = {
  A1: "Principiante absoluto",
  A2: "Básico",
  B1: "Intermedio",
  B2: "Intermedio alto",
  C1: "Avanzado",
  C2: "Dominio avanzado",
};

/* Vocabulary */
export type WordCategory =
  | "saluti" | "famiglia" | "casa" | "alimentazione" | "compras" | "transporte"
  | "viaggi" | "hotel" | "salud" | "lavoro" | "studi" | "citta" | "clima"
  | "ropa" | "tecnologia" | "sport" | "musica" | "cinema" | "relazioni"
  | "finanze" | "ristorante" | "professioni" | "attualita" | "scienza" | "letteratura";

export const CATEGORY_META: Record<WordCategory, { es: string; emoji: string }> = {
  saluti: { es: "Saludos", emoji: "👋" },
  famiglia: { es: "Familia", emoji: "👨‍👩‍👧" },
  casa: { es: "Casa", emoji: "🏠" },
  alimentazione: { es: "Alimentación", emoji: "🍝" },
  compras: { es: "Compras", emoji: "🛒" },
  transporte: { es: "Transporte", emoji: "🚗" },
  viaggi: { es: "Viajes", emoji: "✈️" },
  hotel: { es: "Hotel", emoji: "🏨" },
  salud: { es: "Salud", emoji: "🏥" },
  lavoro: { es: "Trabajo", emoji: "💼" },
  studi: { es: "Estudios", emoji: "🎓" },
  citta: { es: "Ciudad", emoji: "🏙️" },
  clima: { es: "Clima", emoji: "🌦️" },
  ropa: { es: "Ropa", emoji: "👕" },
  tecnologia: { es: "Tecnología", emoji: "💻" },
  sport: { es: "Deportes", emoji: "⚽" },
  musica: { es: "Música", emoji: "🎵" },
  cinema: { es: "Cine", emoji: "🎬" },
  relazioni: { es: "Relaciones sociales", emoji: "❤️" },
  finanze: { es: "Finanzas y banco", emoji: "💰" },
  ristorante: { es: "Restaurante", emoji: "🍽️" },
  professioni: { es: "Profesiones", emoji: "🧑‍💻" },
  attualita: { es: "Actualidad", emoji: "📰" },
  scienza: { es: "Ciencia", emoji: "🧪" },
  letteratura: { es: "Literatura", emoji: "📚" },
};

export type WordType = "sostantivo" | "verbo" | "aggettivo" | "avverbio" | "espressione";

export interface VocabWord {
  id: string;
  it: string;
  es: string;
  pron: string;          // pronunciation hint
  type: WordType;
  gender?: "m" | "f";
  plural?: string;       // for nouns
  cat: WordCategory;
  level: CefrLevel;
  example: { it: string; es: string };
  syn?: string[];
  ant?: string[];
  related?: string[];
}

/* Exercises */
export type ExerciseType = "mc" | "tf" | "fill" | "order" | "dictation" | "translate" | "match";

export type Topic =
  | "vocabolario" | "articoli" | "verbi" | "presente" | "passato" | "futuro"
  | "condizionale" | "congiuntivo" | "imperativo" | "pronomi" | "preposizioni"
  | "plurale" | "genere" | "aggettivi" | "negazione" | "domande" | "numeri"
  | "ascolto" | "cultura" | "situazioni" | "grammatica";

export interface BaseExercise {
  id: string;
  type: ExerciseType;
  level: CefrLevel;
  topic: Topic;
  prompt: string; // instructions (ES or IT as appropriate)
}
export interface McExercise extends BaseExercise { type: "mc"; options: string[]; answer: number; explain: string; }
export interface TfExercise extends BaseExercise { type: "tf"; statement: string; answer: boolean; explain: string; }
export interface FillExercise extends BaseExercise { type: "fill"; sentence: string; accepted: string[]; explain: string; } // sentence contains "___"
export interface OrderExercise extends BaseExercise { type: "order"; words: string[]; answer: string[]; explain: string; }
export interface DictationExercise extends BaseExercise { type: "dictation"; text: string; es: string; }
export interface TranslateExercise extends BaseExercise { type: "translate"; to: "it" | "es"; source: string; accepted: string[]; explain: string; }
export interface MatchExercise extends BaseExercise { type: "match"; pairs: { it: string; es: string }[]; }
export type Exercise = McExercise | TfExercise | FillExercise | OrderExercise | DictationExercise | TranslateExercise | MatchExercise;

/* Grammar */
export interface GrammarProblem {
  title: string;
  question: string;
  steps: string[]; // revealed line by line
  conclusion: string;
}
export interface GrammarTopic {
  id: string;
  level: CefrLevel;
  title: string;      // ES
  titleIt: string;    // IT
  summary: string;    // one-liner ES
  explanation: string[]; // paragraphs ES (with IT inline)
  examples: { it: string; es: string }[];
  problems: GrammarProblem[];
  exerciseIds: string[];
}

/* Courses */
export interface Lesson {
  id: string;
  level: CefrLevel | "zero";
  title: string;
  titleIt: string;
  objectives: string[];
  explanation: string[];
  examples: { it: string; es: string }[];
  vocabIds: string[];
  exerciseIds: string[];
  conversationPrompt: { it: string; es: string };
  checkpointIds: string[];
}
export interface Unit { id: string; level: CefrLevel | "zero"; title: string; titleIt: string; lessons: Lesson[]; }
export interface Course {
  level: CefrLevel | "zero";
  label: string;
  goal: string;
  hours: number;
  units: Unit[];
}

/* Reading / Listening / Writing */
export interface ReadingText {
  id: string; level: CefrLevel; title: string; titleIt: string;
  genre: string; minutes: number;
  paragraphs: { it: string; es: string }[];
  glossary: { it: string; es: string }[];
  questions: string[]; // exercise ids
}

export interface DialogueLine { speaker: string; it: string; es: string; }
export interface ListeningTask {
  id: string; level: CefrLevel; title: string; kind: "parole" | "dialogo" | "dictato";
  dialogue?: DialogueLine[]; words?: string[];
  questions: string[]; // exercise ids
}

export interface WritingPrompt {
  id: string; level: CefrLevel; title: string; task: string;
  minWords: number; tips: string[];
  model: string[]; // model answer revealed line by line
  checklist: string[];
}

/* Situations */
export interface Situation {
  id: string; emoji: string; title: string; titleIt: string; level: CefrLevel;
  intro: string;
  vocab: { it: string; es: string }[];
  dialogue: DialogueLine[];
  exerciseIds: string[];
  roleplay: { it: string; es: string };
}

/* Culture */
export interface CultureArticle {
  id: string; emoji: string; category: string; title: string; level: CefrLevel;
  minutes: number; paragraphs: string[]; vocab: { it: string; es: string }[];
  question: { q: string; options: string[]; answer: number; explain: string };
}

/* Conversation scenarios */
export interface ConversationScenario {
  id: string; emoji: string; title: string; level: CefrLevel;
  phrases: { it: string; es: string }[];
  tips: string[];
  tutorSeed: string;
}

/* SRS */
export interface SrsCard {
  wordId: string;
  ease: number;        // 1.3 – 3.0
  interval: number;    // days
  due: number;         // timestamp
  reps: number;
  lapses: number;
  lastGrade?: number;
}

export interface QuizResultEntry {
  id: string; label: string; score: number; total: number; date: string;
  kind: "lección" | "prueba" | "examen" | "test" | "repaso" | "juego";
}

export interface SkillStats { ascolto: number; lettura: number; scrittura: number; parlato: number; pronuncia: number; grammatica: number; vocabolario: number; }

export interface Badge { id: string; name: string; desc: string; emoji: string; }

export type ViewId =
  | "inicio" | "progreso" | "test" | "cursos" | "grammatica" | "vocabolario"
  | "conversazione" | "ascolto" | "lettura" | "scrittura" | "pronuncia"
  | "coniugatore" | "dizionario" | "situazioni" | "cultura" | "tutor" | "giochi"
  | "repaso" | "esami" | "certificati" | "impostazioni" | "piani" | "admin";

export interface NavParams {
  level?: CefrLevel | "zero";
  lessonId?: string;
  situationId?: string;
  tutorSeed?: string;
  category?: WordCategory;
}
