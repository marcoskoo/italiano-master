import type { LevelTestItem } from "../../leveltest";

/* ═══ PT · Test de nivel · 20 preguntas graduadas A1→C1 ══════════════
   Espejo de src/lib/lms/leveltest.ts (português EUROPEU de Portugal).
   Consigna en español + opciones en portugués; puntos propios del
   portugués de Portugal: indicativo tras «penso que», ênclise neutra,
   futuro do conjuntivo, infinitivo pessoal, mesóclise formal.         */

export const PT_LEVEL_TEST: LevelTestItem[] = [
  /* A1 (1-4) */
  { id: "pt-lt-1", band: "A1", prompt: "Completa: «Eu ___ estudante.»", options: ["sou", "tenho", "és", "tem"], answer: 0 },
  { id: "pt-lt-2", band: "A1", prompt: "¿Cómo se pregunta «¿cómo te llamas?» (informal)?", options: ["Como te chamas?", "Como estás?", "Onde moras?", "Quantos anos tens?"], answer: 0 },
  { id: "pt-lt-3", band: "A1", prompt: "Completa: «___ casa é grande.»", options: ["A", "O", "Os", "Uns"], answer: 0 },
  { id: "pt-lt-4", band: "A1", prompt: "«Tenho fome» significa…", options: ["Tengo hambre", "Tengo frío", "Estoy cansado", "Tengo razón"], answer: 0 },
  /* A2 (5-8) */
  { id: "pt-lt-5", band: "A2", prompt: "Completa: «Ontem ___ ao cinema.» (ir)", options: ["fui", "tenho ido", "ia", "vou"], answer: 0 },
  { id: "pt-lt-6", band: "A2", prompt: "Completa: «Quando era criança, ___ sempre na rua.» (brincar, imperfeito)", options: ["brincava", "brinquei", "brinco", "brincarei"], answer: 0 },
  { id: "pt-lt-7", band: "A2", prompt: "Completa: «O telemóvel está ___ mochila.»", options: ["na", "no", "à", "pela"], answer: 0 },
  { id: "pt-lt-8", band: "A2", prompt: "Completa: «Amanhã ___ ao Porto.» (ir, futuro)", options: ["irei", "vou", "iria", "fui"], answer: 0 },
  /* B1 (9-12) */
  { id: "pt-lt-9", band: "B1", prompt: "Completa: «Penso que a Maria ___ razão.» (ter)", options: ["tem", "tenha", "terá", "tinha"], answer: 0 },
  { id: "pt-lt-10", band: "B1", prompt: "Para pedir con cortesía en una pastelaria:", options: ["Queria um café, se faz favor", "Quero um café", "Dá-me um café", "Café!"], answer: 0 },
  { id: "pt-lt-11", band: "B1", prompt: "Completa: «Este livro? ___ leio hoje.» (ver)", options: ["Leio-o", "O leio", "Leio-lhe", "Leio-no"], answer: 0 },
  { id: "pt-lt-12", band: "B1", prompt: "Estilo indirecto: «Estou cansado» → Ele disse que…", options: ["estava cansado", "está cansado", "estará cansado", "esteja cansado"], answer: 0 },
  /* B2 (13-16) */
  { id: "pt-lt-13", band: "B2", prompt: "Completa: «Se ___ mais tempo, viajava mais.» (ter)", options: ["tivesse", "teria", "tenho", "tiver"], answer: 0 },
  { id: "pt-lt-14", band: "B2", prompt: "Completa: «Convém ___ embora.» (tu, ir)", options: ["ires", "ir", "iras", "vais"], answer: 0 },
  { id: "pt-lt-15", band: "B2", prompt: "Completa: «Quando ___ a Lisboa, telefono-te.» (tu, chegar)", options: ["chegares", "chegas", "chegues", "chegarias"], answer: 0 },
  { id: "pt-lt-16", band: "B2", prompt: "¿Cuál es la forma más formal?", options: ["Agradecia que me respondesse", "Responde-me depressa!", "Escreves-me?", "Vá, responde!"], answer: 0 },
  /* C1 (17-20) */
  { id: "pt-lt-17", band: "C1", prompt: "Completa: «Embora ___ tarde, saímos.» (ser)", options: ["fosse", "era", "seja", "for"], answer: 0 },
  { id: "pt-lt-18", band: "C1", prompt: "Concordancia C1: «A Maria? Vi-___ ontem.» (ver)", options: ["a", "o", "as", "lhe"], answer: 0 },
  { id: "pt-lt-19", band: "C1", prompt: "Completa: «Se me ___ ontem, ter-lhe-ia dito tudo.» (ele, telefonar)", options: ["tivesse telefonado", "telefonaria", "tenha telefonado", "telefonasse"], answer: 0 },
  { id: "pt-lt-20", band: "C1", prompt: "Mesóclise (estilo formal): «Dir-___ tudo amanhã.» (dizer, a vocês)", options: ["lhes-ei", "ei-lhes", "lhe-ei", "lhes-ia"], answer: 0 },
];
