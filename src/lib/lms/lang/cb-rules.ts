import type { CbLevel } from "../cambridge";
import type { GrammarTable } from "../types";
import type { GrammarDrill } from "../extra/grammar-drills";

/* ═══ v9.36 · Grammatica Cambridge «Reglas + ejemplos» (EN/PT/FR/DE) ══
   El mismo estándar de la sección Grammatica (v9.35) aplicado a la
   gramática incrustada en las unidades Cambridge de las otras lenguas:
   · tables       → tavole di reglas de construcción (paradigmas,
     terminaciones, transformaciones sintácticas) con nota contrastiva
   · moreExamples → amplía los ejemplos inductivos de 4 a 7 (con audio)
   · drills       → ejercicios GENERADOS a partir de las tablas:
     transformación por regla + corrección de errores
   El merge es aditivo: no toca focus/rule/gaps ni el progreso (los ids
   de unidad no cambian). Convención: `.it` = texto en la lengua de
   estudio, `.es` = español (interfaz del estudiante).                 */

export interface CbGrammarPack {
  tables?: GrammarTable[];
  moreExamples?: { it: string; es: string }[];
  drills?: GrammarDrill;
}

/** Fusiona los packs en las unidades y en el registro de drills (mutación única al cargar). */
export function applyCbGrammarPacks(
  courses: CbLevel[],
  drills: Record<string, GrammarDrill>,
  packs: Record<string, CbGrammarPack>,
): void {
  for (const lv of courses) {
    for (const u of lv.units) {
      const p = packs[u.id];
      if (!p) continue;
      if (p.tables?.length) u.grammar.tables = [...(u.grammar.tables ?? []), ...p.tables];
      if (p.moreExamples?.length) u.grammar.inductive.push(...p.moreExamples);
      if (p.drills) {
        const cur = drills[u.id];
        drills[u.id] = {
          transform: cur ? [...cur.transform, ...p.drills.transform] : p.drills.transform,
          errors: cur ? [...cur.errors, ...p.drills.errors] : p.drills.errors,
        };
      }
    }
  }
}
