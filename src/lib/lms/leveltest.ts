import type { Exercise } from "./types";

/* ── Test de nivel · 20 preguntas graduadas A1→C2 ─────────────────── */

export interface LevelTestItem {
  id: string;
  band: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  prompt: string;
  options: string[];
  answer: number;
}

export const LEVEL_TEST: LevelTestItem[] = [
  /* A1 (1-4) */
  { id: "lt-1", band: "A1", prompt: "Completa: “Io ___ studente.”", options: ["sono", "ho", "sei", "ha"], answer: 0 },
  { id: "lt-2", band: "A1", prompt: "¿Cómo se pregunta “¿cómo te llamas?” (informal)?", options: ["Come ti chiami?", "Come stai?", "Dove abiti?", "Quanti anni hai?"], answer: 0 },
  { id: "lt-3", band: "A1", prompt: "Completa: “___ casa è grande.”", options: ["La", "Il", "Lo", "Le"], answer: 0 },
  { id: "lt-4", band: "A1", prompt: "“Ho fame” significa…", options: ["Tengo hambre", "Tengo frío", "Estoy cansado", "Tengo razón"], answer: 0 },
  /* A2 (5-8) */
  { id: "lt-5", band: "A2", prompt: "Completa: “Ieri ___ al cinema.” (andare)", options: ["sono andato", "ho andato", "sono andare", "fui"], answer: 0 },
  { id: "lt-6", band: "A2", prompt: "Completa: “Da bambino ___ sempre fuori.” (giocare, imperfetto)", options: ["giocavo", "ho giocato", "gioco", "giocherò"], answer: 0 },
  { id: "lt-7", band: "A2", prompt: "Completa: “Il telefono è ___ borsa.”", options: ["nella", "alla", "dalla", "sulla"], answer: 0 },
  { id: "lt-8", band: "A2", prompt: "Completa: “Domani ___ a Roma.” (andare, futuro)", options: ["andrò", "vado", "andrei", "sono andato"], answer: 0 },
  /* B1 (9-12) */
  { id: "lt-9", band: "B1", prompt: "Completa: “Penso che Maria ___ ragione.” (avere)", options: ["abbia", "ha", "avrà", "aveva"], answer: 0 },
  { id: "lt-10", band: "B1", prompt: "Para pedir con cortesía en un bar:", options: ["Vorrei un caffè", "Voglio un caffè", "Prendo caffè", "Caffè!"], answer: 0 },
  { id: "lt-11", band: "B1", prompt: "Completa: “Questo libro? ___ leggo subito.”", options: ["Lo", "La", "Le", "Gli"], answer: 0 },
  { id: "lt-12", band: "B1", prompt: "Estilo indirecto: “Sono stanco” → Ha detto che…", options: ["era stanco", "è stanco", "sarà stanco", "sia stanco"], answer: 0 },
  /* B2 (13-16) */
  { id: "lt-13", band: "B2", prompt: "Completa: “Se ___ più tempo, viaggerei.” (avere)", options: ["avessi", "avrei", "ho", "avrò"], answer: 0 },
  { id: "lt-14", band: "B2", prompt: "Completa: “Quanti anni ___ hai?”", options: ["ne", "ci", "li", "le"], answer: 0 },
  { id: "lt-15", band: "B2", prompt: "Completa: “Vai a Roma? — Sì, ___ vado domani.”", options: ["ci", "ne", "lo", "vi"], answer: 0 },
  { id: "lt-16", band: "B2", prompt: "¿Cuál es la forma más formal?", options: ["Le sarei grato se mi rispondesse", "Rispondimi presto!", "Mi scrivi?", "Dai, rispondi!"], answer: 0 },
  /* C1 (17-18) */
  { id: "lt-17", band: "C1", prompt: "Completa: “Nonostante ___ tardi, uscimmo.” (essere)", options: ["fosse", "era", "sia", "fossero"], answer: 0 },
  { id: "lt-18", band: "C1", prompt: "Concordancia C1: “Maria? L'ho ___ ieri.” (vedere)", options: ["vista", "visto", "viste", "visti"], answer: 0 },
  /* C2 (19-20) */
  { id: "lt-19", band: "C2", prompt: "El endecasílabo tiene…", options: ["11 sílabas", "10 sílabas", "14 sílabas", "9 sílabas"], answer: 0 },
  { id: "lt-20", band: "C2", prompt: "“Non è che non voglia” expresa…", options: ["un matiz concesivo (no es que no quiera)", "una negación total", "un futuro de intención", "una orden suave"], answer: 0 },
];

export function computeLevel(correctByBand: Record<string, number>): "A1" | "A2" | "B1" | "B2" | "C1" | "C2" {
  // Regla: el nivel es la banda más alta con ≥60% de aciertos, siempre que las bandas inferiores tengan ≥50%.
  const bands: Array<["A1" | "A2" | "B1" | "B2" | "C1" | "C2", number]> = [
    ["A1", 4], ["A2", 4], ["B1", 4], ["B2", 4], ["C1", 2], ["C2", 2],
  ];
  let level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2" = "A1";
  let previousOk = true;
  for (const [band, total] of bands) {
    const pct = (correctByBand[band] ?? 0) / total;
    if (previousOk && pct >= 0.6) level = band;
    else previousOk = false;
    if (!previousOk) break;
  }
  return level;
}
