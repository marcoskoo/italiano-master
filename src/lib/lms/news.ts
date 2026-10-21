/* ── Notizie per studenti (v9.25) ─────────────────────────────────────
   Radiogiornale adaptado: el método Voice of America Learning English
   (learningenglish.voanews.com) aplicado al italiano.
   Estrategias VOA replicadas:
   · noticia real adaptada al nivel MCER (texto 100% original)
   · palabras clave ANTES de leer ("Words in This Story")
   · audio TTS a velocidad reducida con selector (VOA Special English)
   · transcripción siempre visible + traducción ES conmutable
   · lectura sincronizada frase por frase con resaltado y auto-scroll
   · clic en cualquier frase para escucharla (sentence-level replay)
   · modo "solo audio" (escuchar antes de leer, como en la radio)
   · quiz de comprensión al final + debate con el Tutor IA            */

import type { CefrLevel } from "./types";
import { NEWS_DATA_A } from "./news-data-a";
import { NEWS_DATA_B } from "./news-data-b";
import { NEWS_DATA_C } from "./news-data-c";

export type NewsCat =
  | "scienza" | "tecnologia" | "ambiente" | "salute"
  | "cultura" | "storia" | "economia" | "sport" | "societa";

export interface NewsQuestion {
  q: string;              // pregunta (ES, como el resto de la app)
  options: string[];
  answer: number;
  why: string;
}

export interface NewsItem {
  id: string;
  cat: NewsCat;
  level: CefrLevel;
  title: string;          // titular italiano (estilo noticia)
  titleEs: string;        // titular en español
  place: string;          // dateline (Roma, Milano…)
  minutes: number;        // duración estimada de lectura+audio
  lead: { it: string; es: string };               // sommario / entradilla
  paragraphs: { it: string; es: string }[];       // 4-8 párrafos
  words: { it: string; es: string; note?: string }[]; // "Parole per questa notizia"
  questions: NewsQuestion[];
  discuss: { it: string; es: string }[];          // ideas para debatir
}

export const NEWS_CATS: Record<NewsCat, { label: string; emoji: string; desc: string; chip: string }> = {
  scienza:    { label: "Scienza",    emoji: "🔬", desc: "Studi, scoperte e ricerca",           chip: "border-azzurro/30 bg-azzurro/10 text-azzurro-scuro dark:text-azzurro" },
  tecnologia: { label: "Tecnologia", emoji: "💻", desc: "Innovazione e vita digitale",          chip: "border-viola/30 bg-viola-tenue text-viola-scuro dark:text-viola" },
  ambiente:   { label: "Ambiente",   emoji: "🌱", desc: "Clima, natura e città green",          chip: "border-verde/30 bg-verde-tenue text-verde-scuro dark:text-verde" },
  salute:     { label: "Salute",     emoji: "🩺", desc: "Benessere, medicina e abitudini",      chip: "border-rosso/30 bg-rosso/10 text-rosso-scuro dark:text-rosso" },
  cultura:    { label: "Cultura",    emoji: "🎨", desc: "Libri, arte, musica e costume",        chip: "border-oro/30 bg-oro-tenue text-oro-scuro dark:text-oro" },
  storia:     { label: "Storia",     emoji: "🏛️", desc: "Archeologia e memoria del passato",    chip: "border-terracotta/30 bg-terracotta/10 text-terracotta-scuro dark:text-terracotta" },
  economia:   { label: "Economia",   emoji: "📈", desc: "Lavoro, turismo e mercati",            chip: "border-azzurro/30 bg-azzurro/10 text-azzurro-scuro dark:text-azzurro" },
  sport:      { label: "Sport",      emoji: "⚽", desc: "Attività fisica e società",            chip: "border-verde/30 bg-verde-tenue text-verde-scuro dark:text-verde" },
  societa:    { label: "Società",    emoji: "👥", desc: "Come viviamo, come cambia l'Italia",    chip: "border-viola/30 bg-viola-tenue text-viola-scuro dark:text-viola" },
};

export const NEWS: NewsItem[] = [...NEWS_DATA_A, ...NEWS_DATA_B, ...NEWS_DATA_C];

export const NEWS_BY_ID: Record<string, NewsItem> = Object.fromEntries(NEWS.map((n) => [n.id, n]));

export function newsByLevel(level: CefrLevel): NewsItem[] {
  return NEWS.filter((n) => n.level === level);
}

/* ── Velocidad de locución por nivel (método VOA Special English) ────
   VOA lee las noticias de nivel básico a ~2/3 de la velocidad natural.
   Defaults por nivel; el usuario puede cambiarlas en el reproductor.  */
export const DEFAULT_RATE: Record<CefrLevel, number> = {
  A1: 0.65, A2: 0.72, B1: 0.82, B2: 0.9, C1: 0.95, C2: 1,
};
export const NEWS_RATES: { value: number; label: string }[] = [
  { value: 0.65, label: "Molto lento" },
  { value: 0.8, label: "Lento" },
  { value: 0.95, label: "Normale" },
  { value: 1.1, label: "Veloce" },
];

/** nº de palabras del cuerpo de la noticia (para las tarjetas). */
export function newsWordCount(n: NewsItem): number {
  return n.paragraphs.reduce((acc, p) => acc + p.it.split(/\s+/).filter(Boolean).length, 0);
}

/** Divide un párrafo en frases (para audio y resaltado frase a frase).
    Maneja puntuación italiana (. ! ? …), cierres de comillas «» y
    paréntesis; si no hay puntuación final, devuelve el párrafo entero. */
export function splitSentences(p: string): string[] {
  const out: string[] = [];
  const re = /[^.!?…]+[.!?…]+[»')\]]?/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(p)) !== null) {
    const s = m[0].replace(/\s+/g, " ").trim();
    if (s) out.push(s);
  }
  const rest = p.slice(re.lastIndex).replace(/\s+/g, " ").trim();
  if (rest) out.push(rest);
  return out.length ? out : [p.trim()];
}

/** Frases "planas" de toda la noticia: [{ p: párrafo, s: frase, text }] */
export interface NewsSentenceRef { p: number; s: number; text: string; }
export function newsSentences(n: NewsItem): NewsSentenceRef[] {
  const out: NewsSentenceRef[] = [];
  n.paragraphs.forEach((par, p) => {
    splitSentences(par.it).forEach((text, s) => out.push({ p, s, text }));
  });
  return out;
}

/** Convierte las preguntas de una noticia en ejercicios MC para QuizEngine. */
export function newsExercises(n: NewsItem) {
  return n.questions.map((q, i) => ({
    id: `${n.id}-q${i}`,
    type: "mc" as const,
    level: n.level,
    topic: "ascolto" as const,
    prompt: q.q,
    options: q.options,
    answer: q.answer,
    explain: q.why,
  }));
}
