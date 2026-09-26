import type { CefrLevel, VocabWord, WordCategory, WordType } from "../types";

/* ── Dizionario didattico v2.0 · constructor de entradas ──────────────
   Estándares seguidos:
   · MCER/CEFR (Consejo de Europa, Companion Volume 2020) — inventarios A1–C2
   · Dizionario di Base (DIB, De Mauro) — bandas de frecuencia
   · GRADIT / DVX — categorías gramaticales y registro
   · Alfabeto Fonético Internacional (IPA/AFI) — transcripción fonética
   · Lexicografía contrastiva IT–ES para hispanohablantes (falsos amigos) */

export type DictExtra = Partial<
  Pick<VocabWord, "gender" | "plural" | "register" | "collocations" | "note" | "ff" | "syn" | "ant" | "related" | "alt">
>;

export const D = (
  id: string, it: string, es: string, ipa: string,
  type: WordType, cat: WordCategory, level: CefrLevel, freq: 1 | 2 | 3 | 4 | 5,
  example: { it: string; es: string },
  extra?: DictExtra
): VocabWord => {
  const w: VocabWord = { id, it, es, pron: ipa, ipa, type, cat, level, freq, example };
  if (extra) {
    if (extra.gender !== undefined) w.gender = extra.gender;
    if (extra.plural !== undefined) w.plural = extra.plural;
    if (extra.register !== undefined) w.register = extra.register;
    if (extra.collocations !== undefined) w.collocations = extra.collocations;
    if (extra.note !== undefined) w.note = extra.note;
    if (extra.ff !== undefined) w.ff = extra.ff;
    if (extra.syn !== undefined) w.syn = extra.syn;
    if (extra.ant !== undefined) w.ant = extra.ant;
    if (extra.related !== undefined) w.related = extra.related;
    if (extra.alt !== undefined) w.alt = extra.alt;
  }
  return w;
};
