import type { VocabWord, LangCode } from "../types";
import { VOCAB_BY_ID } from "../vocabulary";
import { DICTIONARY } from "./dictionary";
import { EN_DICT } from "./lang-en";
import { PT_DICT } from "./lang-pt";

/* ═══ v9.21 · Despacho central del diccionario por lengua ════════════
   Una sola fuente para las vistas (dizionario, home, quadro, ricerca):
   elimina los ternarios activeLang === "en" repartidos por los
   componentes. it → DICTIONARY/VOCAB_BY_ID (histórico); en → EN_DICT;
   pt → PT_DICT. Las demás lenguas se añaden aquí al aterrizar.      */

const EN_BY_ID: Record<string, VocabWord> = Object.fromEntries(EN_DICT.map((w) => [w.id, w]));
const PT_BY_ID: Record<string, VocabWord> = Object.fromEntries(PT_DICT.map((w) => [w.id, w]));

/** Lista base del diccionario de la lengua activa. */
export function dictListFor(lang: LangCode): VocabWord[] {
  if (lang === "en") return EN_DICT;
  if (lang === "pt") return PT_DICT;
  return DICTIONARY;
}

/** Número de entradas del diccionario activo. */
export function dictCountFor(lang: LangCode): number {
  return dictListFor(lang).length;
}

/** Índice por id del diccionario activo. */
export function dictByIdFor(lang: LangCode): Record<string, VocabWord> {
  if (lang === "en") return EN_BY_ID;
  if (lang === "pt") return PT_BY_ID;
  return VOCAB_BY_ID;
}
