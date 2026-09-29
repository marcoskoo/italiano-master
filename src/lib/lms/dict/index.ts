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
import { PACK_KX23 } from "./pack-kx23";
import { PACK_KX24 } from "./pack-kx24";
import { PACK_KX25 } from "./pack-kx25";
import { PACK_KX26 } from "./pack-kx26";
import { PACK_KX27 } from "./pack-kx27";
import { PACK_KX28 } from "./pack-kx28";
import { PACK_KX29 } from "./pack-kx29";
import { PACK_KX30 } from "./pack-kx30";
import { PACK_KX31 } from "./pack-kx31";
import { PACK_KX32 } from "./pack-kx32";
import { PACK_KX33 } from "./pack-kx33";
import { PACK_KX34 } from "./pack-kx34";
import { PACK_KX35 } from "./pack-kx35";
import { PACK_KX36 } from "./pack-kx36";
import { PACK_KX37 } from "./pack-kx37";
import { PACK_KX38 } from "./pack-kx38";
import { PACK_KX39 } from "./pack-kx39";
import { PACK_KX40 } from "./pack-kx40";
import { PACK_KX41 } from "./pack-kx41";
import { PACK_KX42 } from "./pack-kx42";
import { PACK_KX43 } from "./pack-kx43";
import { PACK_KX44 } from "./pack-kx44";
import { PACK_KX45 } from "./pack-kx45";
import { PACK_KX46 } from "./pack-kx46";
import { PACK_KX47 } from "./pack-kx47";
import { PACK_KX48 } from "./pack-kx48";
import { PACK_KX49 } from "./pack-kx49";
import { PACK_KX50 } from "./pack-kx50";
import { PACK_KX51 } from "./pack-kx51";
import { PACK_KX52 } from "./pack-kx52";
import { PACK_KX53 } from "./pack-kx53";
import { PACK_KX54 } from "./pack-kx54";

/* ── Dizionario didattico v3.0 · paquetes MCER A1→C2 ──────────────────
   v2.0: packs D (DIB/De Mauro, IPA, frecuencia, registro, colocaciones)
   v3.0: packs K compactos — expansión masiva con la misma calidad
   lexicográfica (género/plural automáticos, validación por script).
   v4.0: packs KX23-KX40 — expansión a 8000 lemas con foco B2/C1/C2
   (académico, literario, CILS-ready). */

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
  ...PACK_KX23, // B2: verbi di argomentazione e comunicazione
  ...PACK_KX24, // C1: verbi colti, formali e letterari
  ...PACK_KX25, // B2: sostantivi astratti della società
  ...PACK_KX26, // C1: lessico accademico e scientifico
  ...PACK_KX27, // B2: locuzioni idiomatiche fare/prendere/dare
  ...PACK_KX28, // C2: figure retoriche, narratologia e metrica
  ...PACK_KX29, // B2: diritto, tribunali e processi
  ...PACK_KX30, // C1: medicina clinica e psicopatologia
  ...PACK_KX31, // B2: economia, finanza e lavoro tecnico
  ...PACK_KX32, // C1: filosofia e pensiero
  ...PACK_KX33, // B2: locuzioni essere/stare/mettere/tirare/venire
  ...PACK_KX34, // C2: latinismi, aforismi e locuzioni dotte
  ...PACK_KX35, // B2: locuzioni avere/tenere/andare/uscire/restare
  ...PACK_KX36, // C1: giornalismo, media e comunicazione politica
  ...PACK_KX37, // B2: ambiente, energia ed ecologia
  ...PACK_KX38, // C1: arte, architettura e restauro
  ...PACK_KX39, // C2: lessico aulico, arcaico e letterario raro
  ...PACK_KX40, // B2: scienza e tecnologia
  ...PACK_KX41, // B1: modi di dire del quotidiano 2
  ...PACK_KX42, // B2: relazioni, amicizia e carattere
  ...PACK_KX43, // C1: politica, geopolitica e relazioni internazionali
  ...PACK_KX44, // B2: casa, trasloco e fai-da-te
  ...PACK_KX45, // C2: regionalismi e dialettismi
  ...PACK_KX46, // B1: scuola e università: espressioni
  ...PACK_KX47, // B2: lavoro e carriera: espressioni
  ...PACK_KX48, // C1: musica e teatro
  ...PACK_KX49, // C2: espressioni colte e sentenze
  ...PACK_KX50, // B2: viaggi e trasporti: espressioni
  ...PACK_KX51, // C1: psicologia e società: espressioni
  ...PACK_KX52, // B2: corpo, salute e emozioni: espressioni
  ...PACK_KX53, // B2: repertorio finale: 250+ espressioni trasversali
  ...PACK_KX54, // B2: coda del repertorio di espressioni
];
