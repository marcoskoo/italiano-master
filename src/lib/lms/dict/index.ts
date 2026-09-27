import type { VocabWord } from "../types";
import { PACK_A1 } from "./pack-a1";
import { PACK_A2 } from "./pack-a2";
import { PACK_B1 } from "./pack-b1";
import { PACK_B2 } from "./pack-b2";
import { PACK_C1 } from "./pack-c1";
import { PACK_C2 } from "./pack-c2";
import { PACK_KA1 } from "./pack-ka1";
import { PACK_KA1B } from "./pack-ka1b";
import { PACK_KA2 } from "./pack-ka2";
import { PACK_KA2B } from "./pack-ka2b";
import { PACK_KB1 } from "./pack-kb1";
import { PACK_KB1B } from "./pack-kb1b";
import { PACK_KB1C } from "./pack-kb1c";
import { PACK_KB2 } from "./pack-kb2";
import { PACK_KB2B } from "./pack-kb2b";
import { PACK_KC1 } from "./pack-kc1";
import { PACK_KC1B } from "./pack-kc1b";
import { PACK_KC2 } from "./pack-kc2";
import { PACK_KC2B } from "./pack-kc2b";
import { PACK_KX1 } from "./pack-kx1";
import { PACK_KX2 } from "./pack-kx2";
import { PACK_KX3 } from "./pack-kx3";
import { PACK_KX4 } from "./pack-kx4";
import { PACK_KX5 } from "./pack-kx5";
import { PACK_KX6 } from "./pack-kx6";
import { PACK_KX7 } from "./pack-kx7";
import { PACK_KX8 } from "./pack-kx8";
import { PACK_KX9 } from "./pack-kx9";
import { PACK_KX10 } from "./pack-kx10";
import { PACK_KX11 } from "./pack-kx11";
import { PACK_KX12 } from "./pack-kx12";
import { PACK_KX13 } from "./pack-kx13";
import { PACK_KX14 } from "./pack-kx14";
import { PACK_KX15 } from "./pack-kx15";
import { PACK_KX16 } from "./pack-kx16";
import { PACK_KX17 } from "./pack-kx17";
import { PACK_KX18 } from "./pack-kx18";
import { PACK_KX19 } from "./pack-kx19";
import { PACK_KX20 } from "./pack-kx20";
import { PACK_KX21 } from "./pack-kx21";
import { PACK_KX22 } from "./pack-kx22";

/* ── Dizionario didattico v3.0 · paquetes MCER A1→C2 ──────────────────
   v2.0: packs D (DIB/De Mauro, IPA, frecuencia, registro, colocaciones)
   v3.0: packs K compactos — expansión masiva con la misma calidad
   lexicográfica (género/plural automáticos, validación por script). */

export const DICT_PACKS: VocabWord[] = [
  ...PACK_A1, ...PACK_A2, ...PACK_B1, ...PACK_B2, ...PACK_C1, ...PACK_C2,
  /* ── v3.0 · expansión compacta ── */
  ...PACK_KA1, ...PACK_KA1B,    // A1: concreto + función
  ...PACK_KA2, ...PACK_KA2B,    // A2: vida diaria + verbi/aggettivi
  ...PACK_KB1, ...PACK_KB1B, ...PACK_KB1C, // B1: sociedad + conectores + vida concreta
  ...PACK_KB2, ...PACK_KB2B,    // B2: argumentación + ciencia/cultura
  ...PACK_KC1, ...PACK_KC1B,    // C1: registro formal + ambiente/política/medios
  ...PACK_KC2, ...PACK_KC2B,    // C2: literario + coloquial/regional
  ...PACK_KX1, ...PACK_KX2, ...PACK_KX3, ...PACK_KX4, ...PACK_KX5, ...PACK_KX6, // reposición + idiomi + musica/cinema
  ...PACK_KX7, ...PACK_KX8, ...PACK_KX9, ...PACK_KX10, // materiales + formale + salute + cotidiano
  ...PACK_KX11, ...PACK_KX12, ...PACK_KX13, // adjective/cucina/feste/bagno/sentimenti
  ...PACK_KX14, ...PACK_KX15, ...PACK_KX16, ...PACK_KX17, // deportes/animales/vestido/bodas
  ...PACK_KX18, ...PACK_KX19, ...PACK_KX20, ...PACK_KX21, ...PACK_KX22, // montaña/cuerpo/tiempo/comida + giardinaggio/mestieri/casa + botanica/orto
];
