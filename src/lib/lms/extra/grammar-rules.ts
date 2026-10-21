import type { GrammarTable, GrammarTopic } from "../types";
import { RULES_G_A1_A2 } from "./grammar-rules-g1";
import { RULES_G_B_C } from "./grammar-rules-g2";
import { RULES_GX } from "./grammar-rules-gx";
import { RULES_G3_A } from "./grammar-rules-g3a";
import { RULES_G3_B } from "./grammar-rules-g3b";
import { RULES_G3_C } from "./grammar-rules-g3c";

/* ═══ v9.35 · Grammatica v4 «Regole ed esempi» ═══
   Refuerzo sistemático de TODOS los temas de la vista Grammatica:
   · moreExamples → amplía la lista de ejemplos (objetivo ≥6 por tema,
     con audio TTS automático vía AudioButton en la vista)
   · tables       → añade tavole de reglas de construcción (terminaciones,
     paradigmas de conjugación, transformaciones sintácticas) donde
     faltaban, con nota contrastiva IT–ES
   El merge es aditivo: no toca explanation/problems/ejercicios. */

export interface GrammarRulePack {
  moreExamples?: { it: string; es: string }[];
  tables?: GrammarTable[];
}

export const GRAMMAR_RULES: Record<string, GrammarRulePack> = {
  ...RULES_G_A1_A2,
  ...RULES_G_B_C,
  ...RULES_GX,
  ...RULES_G3_A,
  ...RULES_G3_B,
  ...RULES_G3_C,
};

/** Fusiona los packs de reglas en el array GRAMMAR (mutación única al cargar). */
export function applyGrammarRules(topics: GrammarTopic[]): void {
  topics.forEach((t) => {
    const pack = GRAMMAR_RULES[t.id];
    if (!pack) return;
    if (pack.moreExamples?.length) t.examples.push(...pack.moreExamples);
    if (pack.tables?.length) t.tables = [...(t.tables ?? []), ...pack.tables];
  });
}
