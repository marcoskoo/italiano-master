/* ═══ v9.39 · Conjugadores multilingües ═════════════════════════════
   Interfaz única (ConjugatorPack) + pack italiano (wrapper del engine
   histórico conjugator.ts) + resolutor conjugatorFor(lang).
   Los packs EN/PT/FR/DE viven en lang/<l>/conjugator.ts y se cablean
   aquí (wiring v9.39) con la MISMA interfaz; hasta entonces el
   resolutor devuelve el pack IT (comportamiento histórico).          */

import type { LangCode } from "./types";
import {
  conjugate, findVerb, searchVerbs, TENSES, PRONOUNS, verbInfo,
  type TenseId, type VerbEntry,
} from "./conjugator";

export interface PackTense { id: string; label: string; hint: string; }
export interface PackForm { pronoun: string; form: string; irregular: boolean; }
export interface PackTenseResult { tense: string; forms: PackForm[]; }

export interface ConjugatorVerb {
  infinitive: string;
  es: string;
  patternLabel: string;   // "-are regular", "irregular", "strong verb"…
  infoEs: string;         // línea de info en español (auxiliar, participio…)
}

export interface ConjugatorPack {
  code: LangCode;
  tenses: PackTense[];
  pronouns: string[];
  popular: string[];
  verbs: ConjugatorVerb[];
  findVerb(infinitive: string): ConjugatorVerb | undefined;
  searchVerbs(query: string, limit?: number): ConjugatorVerb[];
  conjugate(verb: ConjugatorVerb, tenseId: string): PackTenseResult;
  /** Nota de registro formal EN ESPAÑOL con la forma de usted destacada. */
  formalNote(verb: ConjugatorVerb, tenseId: string): string;
}

/* ── Pack ITALIANO (wrapper del engine histórico) ─────────────────── */

const PATTERN_LABEL: Record<VerbEntry["pattern"], string> = {
  are: "1ª conjugación (-are)", ere: "2ª conjugación (-ere)",
  ire: "3ª conjugación (-ire)", "ire-isc": "3ª conjugación (-ire, -isc-)",
  irregular: "irregular",
};

function toPackVerb(v: VerbEntry): ConjugatorVerb {
  const info = verbInfo(v);
  return {
    infinitive: v.infinitive,
    es: v.es,
    patternLabel: PATTERN_LABEL[v.pattern],
    infoEs: `patrón ${info.pattern === "irregular" ? "irregular" : info.pattern} · auxiliar ${info.auxiliary}${info.auxiliary === "essere" ? " (participio concuerda)" : ""} · participio ${info.participle} · gerundio ${info.gerund}`,
  };
}

const IT_VERBS: ConjugatorVerb[] = searchVerbs("", 1000).map(toPackVerb);

function fromPackVerb(pv: ConjugatorVerb): VerbEntry | undefined {
  return findVerb(pv.infinitive);
}

export const IT_CONJUGATOR: ConjugatorPack = {
  code: "it",
  tenses: TENSES.map((t) => ({ id: t.id, label: t.label, hint: t.hint })),
  pronouns: PRONOUNS,
  popular: ["essere", "avere", "fare", "andare", "parlare", "venire", "prendere", "capire", "volere", "dovere"],
  verbs: IT_VERBS,
  findVerb(infinitive: string) {
    const v = findVerb(infinitive);
    return v ? toPackVerb(v) : undefined;
  },
  searchVerbs(query: string, limit = 8) {
    return searchVerbs(query, limit).map(toPackVerb);
  },
  conjugate(verb: ConjugatorVerb, tenseId: string) {
    const v = fromPackVerb(verb);
    if (!v) return { tense: tenseId, forms: [] };
    return conjugate(v, tenseId as TenseId);
  },
  formalNote(verb: ConjugatorVerb, tenseId: string) {
    const v = fromPackVerb(verb);
    let form = "";
    if (v) form = conjugate(v, tenseId as TenseId).forms[2].form.split("/")[0];
    return `Para el registro formal usa **Lei** con las formas de 3ª persona: ${PRONOUNS[2]} → **${form}** con "Lei". Las formas irregulares se muestran en rojo.`;
  },
};

/* ── Resolutor ──────────────────────────────────────────────────────
   v9.39 wiring: packs en/pt/fr/de registrados (engines propios con la
   misma interfaz; el IT envuelve el motor histórico).                  */

import { EN_CONJUGATOR } from "./lang/en/conjugator";
import { PT_CONJUGATOR } from "./lang/pt/conjugator";
import { FR_CONJUGATOR } from "./lang/fr/conjugator";
import { DE_CONJUGATOR } from "./lang/de/conjugator";

const BY_LANG: Partial<Record<LangCode, ConjugatorPack>> = {
  it: IT_CONJUGATOR,
  en: EN_CONJUGATOR, pt: PT_CONJUGATOR, fr: FR_CONJUGATOR, de: DE_CONJUGATOR,
};

export function conjugatorFor(lang: string | undefined | null): ConjugatorPack {
  return BY_LANG[(lang ?? "it") as LangCode] ?? IT_CONJUGATOR;
}
