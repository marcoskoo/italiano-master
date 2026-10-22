/* ═══ v9.39 · Números multilingües · interfaz + pack IT ═════════════
   Espejo de la API histórica de numbers.ts (número/ordinal/hora/normali-
   zación/comparación) resuelta por lengua de estudio. Los packs
   en/pt/fr/de viven en lang/<l>/numbers.ts (exportan numberTo<Lang>,
   ordinalTo<Lang>, timeTo<Lang>, normalize<Lang>, <lang>Equals) y se
   registran en BY_LANG en el wiring v9.39.                            */

import type { LangCode } from "./types";
import { numberToItalian, ordinalToItalian, timeToItalian, normalizeItalian, italianEquals } from "./numbers";

export interface NumbersPack {
  numberTo(n: number): string;
  ordinal(n: number): string;
  time(h: number, m: number): string;
  normalize(s: string): string;
  equals(a: string, b: string): boolean;
}

const IT_PACK: NumbersPack = {
  numberTo: numberToItalian,
  ordinal: ordinalToItalian,
  time: timeToItalian,
  normalize: normalizeItalian,
  equals: italianEquals,
};

// v9.39 wiring: engines de números por lengua (espejo de la API italiana)
import { numberToEnglish, ordinalToEnglish, timeToEnglish, normalizeEnglish, englishEquals } from "./lang/en/numbers";
import { numberToPortuguese, ordinalToPortuguese, timeToPortuguese, normalizePortuguese, portugueseEquals } from "./lang/pt/numbers";
import { numberToFrench, ordinalToFrench, timeToFrench, normalizeFrench, frenchEquals } from "./lang/fr/numbers";
import { numberToGerman, ordinalToGerman, timeToGerman, normalizeGerman, germanEquals } from "./lang/de/numbers";

const BY_LANG: Partial<Record<LangCode, NumbersPack>> = {
  it: IT_PACK,
  en: { numberTo: numberToEnglish, ordinal: ordinalToEnglish, time: timeToEnglish, normalize: normalizeEnglish, equals: englishEquals },
  pt: { numberTo: numberToPortuguese, ordinal: ordinalToPortuguese, time: timeToPortuguese, normalize: normalizePortuguese, equals: portugueseEquals },
  fr: { numberTo: numberToFrench, ordinal: ordinalToFrench, time: timeToFrench, normalize: normalizeFrench, equals: frenchEquals },
  de: { numberTo: numberToGerman, ordinal: ordinalToGerman, time: timeToGerman, normalize: normalizeGerman, equals: germanEquals },
};

export function numbersFor(lang: string | undefined | null): NumbersPack {
  return BY_LANG[(lang ?? "it") as LangCode] ?? IT_PACK;
}
