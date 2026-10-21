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

import type { CefrLevel, LangCode } from "./types";
import { NEWS_DATA_A } from "./news-data-a";
import { NEWS_DATA_B } from "./news-data-b";
import { NEWS_DATA_C } from "./news-data-c";
import { EN_NEWS_A } from "./lang/en/news-a";
import { EN_NEWS_B } from "./lang/en/news-b";
import { EN_NEWS_C } from "./lang/en/news-c";
import { PT_NEWS_A } from "./lang/pt/news-a";
import { PT_NEWS_B } from "./lang/pt/news-b";
import { PT_NEWS_C } from "./lang/pt/news-c";
import { FR_NEWS_A } from "./lang/fr/news-a";
import { FR_NEWS_B } from "./lang/fr/news-b";
import { FR_NEWS_C } from "./lang/fr/news-c";
import { DE_NEWS_A } from "./lang/de/news-a";
import { DE_NEWS_B } from "./lang/de/news-b";
import { DE_NEWS_C } from "./lang/de/news-c";

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

/* v9.26 · Etiquetas de categoría en la lengua de estudio (estilo VOA:
   el lector aprende también el vocabulario de la sección del periódico). */
export const NEWS_CATS_LABEL: Record<LangCode, Record<NewsCat, string>> = {
  it: {
    scienza: "Scienza", tecnologia: "Tecnologia", ambiente: "Ambiente", salute: "Salute",
    cultura: "Cultura", storia: "Storia", economia: "Economia", sport: "Sport", societa: "Società",
  },
  en: {
    scienza: "Science", tecnologia: "Technology", ambiente: "Environment", salute: "Health",
    cultura: "Culture", storia: "History", economia: "Economy", sport: "Sports", societa: "Society",
  },
  pt: {
    scienza: "Ciência", tecnologia: "Tecnologia", ambiente: "Ambiente", salute: "Saúde",
    cultura: "Cultura", storia: "História", economia: "Economia", sport: "Desporto", societa: "Sociedade",
  },
  fr: {
    scienza: "Sciences", tecnologia: "Technologie", ambiente: "Environnement", salute: "Santé",
    cultura: "Culture", storia: "Histoire", economia: "Économie", sport: "Sport", societa: "Société",
  },
  de: {
    scienza: "Wissenschaft", tecnologia: "Technologie", ambiente: "Umwelt", salute: "Gesundheit",
    cultura: "Kultur", storia: "Geschichte", economia: "Wirtschaft", sport: "Sport", societa: "Gesellschaft",
  },
};
export function newsCatLabel(cat: NewsCat, lang: LangCode): string {
  return NEWS_CATS_LABEL[lang]?.[cat] ?? NEWS_CATS[cat].label;
}

export const NEWS: NewsItem[] = [...NEWS_DATA_A, ...NEWS_DATA_B, ...NEWS_DATA_C];

/* ═══ v9.26 · Notizie por lengua de estudio ═════════════════════════
   La vista consume el paquete de la lengua activa; el italiano conserva
   NEWS (compat). Campos `.it` = lengua de estudio (como en el resto de
   contenido multilenguaje), `.es` = traducción de apoyo.               */
export const NEWS_BY_LANG: Record<LangCode, NewsItem[]> = {
  it: NEWS,
  en: [...EN_NEWS_A, ...EN_NEWS_B, ...EN_NEWS_C],
  pt: [...PT_NEWS_A, ...PT_NEWS_B, ...PT_NEWS_C],
  fr: [...FR_NEWS_A, ...FR_NEWS_B, ...FR_NEWS_C],
  de: [...DE_NEWS_A, ...DE_NEWS_B, ...DE_NEWS_C],
};

export const NEWS_BY_ID: Record<string, NewsItem> = Object.fromEntries(NEWS.map((n) => [n.id, n]));
/** Índice global (todas las lenguas) por id con prefijo (en-news-…, de-news-…). */
export const NEWS_ALL_BY_ID: Record<string, NewsItem> = Object.fromEntries(
  ([...NEWS_BY_LANG.it, ...NEWS_BY_LANG.en, ...NEWS_BY_LANG.pt, ...NEWS_BY_LANG.fr, ...NEWS_BY_LANG.de]).map((n) => [n.id, n])
);

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
    Maneja puntuación internacional (. ! ? …), cierres de comillas «»
    (it/fr), „“ alemanas y “” tipográficas, y paréntesis; si no hay
    puntuación final, devuelve el párrafo entero. */
export function splitSentences(p: string): string[] {
  const out: string[] = [];
  const re = /[^.!?…]+[.!?…]+(?:\s?[»')\]“”])?/g;
  let m: RegExpExecArray | null;
  let end = 0;
  while ((m = re.exec(p)) !== null) {
    end = re.lastIndex;
    const s = m[0].replace(/\s+/g, " ").trim();
    if (s) out.push(s);
  }
  /* v9.26 fix: exec() resetea lastIndex a 0 al devolver null; hay que
     guardar el fin real del último match (bug heredado de v9.25 que
     duplicaba cada párrafo como "frase" adicional).                    */
  const rest = p.slice(end).replace(/\s+/g, " ").trim();
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
