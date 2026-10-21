import type { VocabWord } from "../types";
import type { LangCode } from "../types";
import { lookupWord } from "./lookup";
import { lookupWordEn } from "./lookup-en";
import { lookupWordPt } from "./lookup-pt";
import { lookupWordFr } from "./lookup-fr";
import { lookupWordDe } from "./lookup-de";

/* ═══ Despacho de lookup por lengua de estudio (v9.17→v9.24) ══════
   `it` usa el lematizador italiano original (8.022 lemas).
   `en` el americano; `pt` el portugués europeo; `fr` el francés
   (v9.23, con elisiones y contracciones) y `de` el alemán (v9.24,
   con artículos despojados y declinación de caso).                    */

export function lookupWordIn(lang: LangCode, form: string): VocabWord | undefined {
  switch (lang) {
    case "it":
      return lookupWord(form);
    case "en":
      return lookupWordEn(form);
    case "pt":
      return lookupWordPt(form);
    case "fr":
      return lookupWordFr(form);
    case "de":
      return lookupWordDe(form);
    default:
      return undefined;
  }
}
