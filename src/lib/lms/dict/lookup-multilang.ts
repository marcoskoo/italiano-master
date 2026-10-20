import type { VocabWord } from "../types";
import type { LangCode } from "../types";
import { lookupWord } from "./lookup";
import { lookupWordEn } from "./lookup-en";
import { lookupWordPt } from "./lookup-pt";

/* ═══ Despacho de lookup por lengua de estudio (v9.17) ═══════════════
   `it` usa el lematizador italiano original (8.022 lemas).
   `en` usa el lematizador americano; `pt` el portugués europeo.
   Las demás lenguas se añaden con su propio módulo lookup-<lang>.ts
   cuando llega su contenido. */

export function lookupWordIn(lang: LangCode, form: string): VocabWord | undefined {
  switch (lang) {
    case "it":
      return lookupWord(form);
    case "en":
      return lookupWordEn(form);
    case "pt":
      return lookupWordPt(form);
    default:
      return undefined;
  }
}
