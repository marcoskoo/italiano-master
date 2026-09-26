import type { VocabWord } from "../types";
import { PACK_A1 } from "./pack-a1";
import { PACK_A2 } from "./pack-a2";
import { PACK_B1 } from "./pack-b1";
import { PACK_B2 } from "./pack-b2";
import { PACK_C1 } from "./pack-c1";
import { PACK_C2 } from "./pack-c2";

/* ── Dizionario didattico v2.0 · paquetes MCER A1→C2 ──
   +~670 entradas nuevas con IPA, frecuencia, registro, colocaciones
   y notas contrastivas IT–ES. */

export const DICT_PACKS: VocabWord[] = [
  ...PACK_A1, // ~170 · inventario fundamental
  ...PACK_A2, // ~120 · vida cotidiana
  ...PACK_B1, // ~110 · sociedad y opinión
  ...PACK_B2, // ~105 · abstracción y argumentación
  ...PACK_C1, // ~85 · registro formal y académico
  ...PACK_C2, // ~55 · literario y especializado
];
