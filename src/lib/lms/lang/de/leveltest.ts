import type { LevelTestItem } from "../../leveltest";

/* ═══ Deutsch · test de nivel · v9.39 ═══════════════════════════════
   Espejo de src/lib/lms/leveltest.ts: 20 ítems graduados A1→C1
   (4 por banda). `options` en alemán; `prompt` en español o alemán
   según el patrón del original italiano. Gramática propia del
   Hochdeutsch: sein/haben, artículos, Perfekt/Präteritum, mit +
   Dativ, verbos modales y separables, Konjunktiv II, Passiv,
   relativos, Genitiv, Konjunktiv I y als- Vergleichssatz.            */

export const DE_LEVEL_TEST: LevelTestItem[] = [
  /* A1 (1-4) */
  { id: "de-lt-1", band: "A1", prompt: "Completa: „Ich ___ Student.“", options: ["bin", "habe", "bist", "sind"], answer: 0 },
  { id: "de-lt-2", band: "A1", prompt: "¿Cómo se pregunta «¿cómo te llamas?» (informal)?", options: ["Wie heißt du?", "Wie geht es dir?", "Wo wohnst du?", "Wie alt bist du?"], answer: 0 },
  { id: "de-lt-3", band: "A1", prompt: "Completa: „___ Wohnung ist groß.“", options: ["Die", "Der", "Das", "Den"], answer: 0 },
  { id: "de-lt-4", band: "A1", prompt: "«Ich habe Hunger» significa…", options: ["Tengo hambre", "Tengo frío", "Estoy cansado", "Tengo razón"], answer: 0 },
  /* A2 (5-8) */
  { id: "de-lt-5", band: "A2", prompt: "Completa: „Ich ___ gestern ins Kino gegangen.“ (gehen)", options: ["bin", "habe", "war", "sei"], answer: 0 },
  { id: "de-lt-6", band: "A2", prompt: "Completa: „Als Kind ___ ich immer draußen.“ (spielen, Präteritum)", options: ["spielte", "habe gespielt", "spiele", "werde spielen"], answer: 0 },
  { id: "de-lt-7", band: "A2", prompt: "Completa: „Ich fahre ___ Bus zur Arbeit.“", options: ["mit dem", "mit der", "mit das", "durch den"], answer: 0 },
  { id: "de-lt-8", band: "A2", prompt: "Completa: „Morgen ___ ich nach Köln.“ (fahren)", options: ["fahre", "fähre", "fahren", "fuhr"], answer: 0 },
  /* B1 (9-12) */
  { id: "de-lt-9", band: "B1", prompt: "Completa: „Ich muss heute früh ___.“ (aufstehen)", options: ["aufstehen", "stehe auf", "aufstehe", "stehe"], answer: 0 },
  { id: "de-lt-10", band: "B1", prompt: "Para pedir con cortesía en una panadería:", options: ["Ich hätte gern ein Brot", "Ich will ein Brot", "Gib mir Brot!", "Brot!"], answer: 0 },
  { id: "de-lt-11", band: "B1", prompt: "Completa (posición, ¿dónde?): „Ich warte ___ Bahnhof.“", options: ["am", "in den", "auf den", "zum"], answer: 0 },
  { id: "de-lt-12", band: "B1", prompt: "Estilo indirecto: „Ich bin müde“ → Er hat gesagt, dass er müde ___", options: ["war", "bin", "ist geblieben", "gewesen hat"], answer: 0 },
  /* B2 (13-16) */
  { id: "de-lt-13", band: "B2", prompt: "Completa: „Wenn ich mehr Zeit ___, würde ich mehr reisen.“ (haben)", options: ["hätte", "habe", "hatte", "haben würde"], answer: 0 },
  { id: "de-lt-14", band: "B2", prompt: "Completa: „Das ist das Buch, ___ ich gestern gekauft habe.“", options: ["das", "dem", "den", "dessen"], answer: 0 },
  { id: "de-lt-15", band: "B2", prompt: "Completa (voz pasiva): „Das Haus ___ 1900 gebaut.“", options: ["wurde", "ist", "hat", "wird"], answer: 0 },
  { id: "de-lt-16", band: "B2", prompt: "¿Cuál es la forma más cortés?", options: ["Könnten Sie mir bitte helfen?", "Hilf mir!", "Hilfst du mir?", "Ich brauche Hilfe!"], answer: 0 },
  /* C1 (17-20) */
  { id: "de-lt-17", band: "C1", prompt: "Completa: „Obwohl es spät war, ___ wir noch einmal telefoniert.“", options: ["haben", "wir haben", "hätten", "haben wir gehabt"], answer: 0 },
  { id: "de-lt-18", band: "C1", prompt: "Completa (Konjunktiv I): „Er behauptete, er ___ krank.“ (sein)", options: ["sei", "ist", "war", "wäre gewesen"], answer: 0 },
  { id: "de-lt-19", band: "C1", prompt: "Completa (genitivo): „Wegen ___ Regens wurde das Spiel abgesagt.“", options: ["des", "dem", "der", "den"], answer: 0 },
  { id: "de-lt-20", band: "C1", prompt: "Completa: „Er tat, als ___ er alles verstanden.“ (Konjunktiv II)", options: ["hätte", "hatte", "habe", "würde"], answer: 0 },
];
