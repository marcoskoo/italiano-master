import type { CbQuizItem } from "../cambridge";
import { GD_A1 } from "./grammar-deep-a1";
import { GD_A2 } from "./grammar-deep-a2";
import { GD_B1 } from "./grammar-deep-b1";
import { GD_B2 } from "./grammar-deep-b2";
import { GD_C1 } from "./grammar-deep-c1";
import { GD_C2 } from "./grammar-deep-c2";

/* ═══ v9.15 · Grammatica approfondita ═══════════════════════════════
   Explicación amplia de la gramática de cada unidad comunicativa:
   · sezioni — cómo se forma, cuándo se usa, trampas para hispanohablantes
   · esempi — 5 ejemplos extra con audio, traducción y hover palabra a palabra
   · usi — ejercicios de elección de uso («¿cuál encaja y por qué?»)
   Junto a los gaps (v9.8), trasformazioni y correzione errori (v9.13),
   cada lección queda con explicación amplia + ejemplos + 4 bloques de
   ejercicios.                                                          */

export interface CbGrammarDeep {
  sezioni: { t: string; body: string }[];   // 3-4 secciones de explicación amplia
  esempi: { it: string; es: string }[];     // 5 ejemplos extra (con audio y hover)
  usi: CbQuizItem[];                        // 2-3 ejercicios de uso
}

export const GRAMMAR_DEEP: Record<string, CbGrammarDeep> = {
  ...GD_A1,
  ...GD_A2,
  ...GD_B1,
  ...GD_B2,
  ...GD_C1,
  ...GD_C2,
};
