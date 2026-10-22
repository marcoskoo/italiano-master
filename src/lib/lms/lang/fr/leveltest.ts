import type { LevelTestItem } from "../../leveltest";

/* ── Test de nivel FR · 20 ítems graduados A1→C1 ───────────────────
   Espejo del archivo canónico italiano: consignas en español con el
   enunciado francés inline, opciones en francés de Francia e índice
   de respuesta correcta. Banda: 4×A1, 4×A2, 4×B1, 4×B2, 4×C1.     */

export const FR_LEVEL_TEST: LevelTestItem[] = [
  /* A1 (1-4) */
  { id: "fr-lt-01", band: "A1", prompt: "Completa: « Je ___ étudiant. »", options: ["ai", "suis", "es", "a"], answer: 1 },
  { id: "fr-lt-02", band: "A1", prompt: "¿Cómo se pregunta « ¿cómo te llamas? » (informal)?", options: ["Comment ça va ?", "Comment tu t'appelles ?", "Où tu habites ?", "Quel âge as-tu ?"], answer: 1 },
  { id: "fr-lt-03", band: "A1", prompt: "Completa: « ___ maison de Marie est grande. »", options: ["Le", "La", "Les", "Une"], answer: 1 },
  { id: "fr-lt-04", band: "A1", prompt: "« J'ai faim » significa…", options: ["Tengo frío", "Estoy cansado", "Tengo hambre", "Tengo razón"], answer: 2 },
  /* A2 (5-8) */
  { id: "fr-lt-05", band: "A2", prompt: "Completa: « Hier, je ___ au cinéma. » (aller)", options: ["ai allé", "suis allé(e)", "suis aller", "irai"], answer: 1 },
  { id: "fr-lt-06", band: "A2", prompt: "Completa: « Petit, je ___ souvent dehors. » (jouer, imparfait)", options: ["jouais", "ai joué", "joue", "jouerai"], answer: 0 },
  { id: "fr-lt-07", band: "A2", prompt: "Completa: « Le train part ___ huit heures. »", options: ["en", "dans", "de", "à"], answer: 3 },
  { id: "fr-lt-08", band: "A2", prompt: "Completa: « Demain, nous ___ à Lyon. » (aller, futur simple)", options: ["allons", "irions", "irons", "sommes allés"], answer: 2 },
  /* B1 (9-12) */
  { id: "fr-lt-09", band: "B1", prompt: "Completa: « Je ne pense pas que Marie ___ raison. » (avoir)", options: ["a", "ait", "aura", "avait"], answer: 1 },
  { id: "fr-lt-10", band: "B1", prompt: "Para pedir con cortesía en un café:", options: ["Je veux un café", "Donne un café", "Café !", "Je voudrais un café"], answer: 3 },
  { id: "fr-lt-11", band: "B1", prompt: "Completa: « Tu vois Marie ? — Oui, je ___ vois. »", options: ["le", "la", "lui", "les"], answer: 1 },
  { id: "fr-lt-12", band: "B1", prompt: "Estilo indirecto: « Je suis fatigué » → Il a dit qu'il…", options: ["est fatigué", "était fatigué", "sera fatigué", "soit fatigué"], answer: 1 },
  /* B2 (13-16) */
  { id: "fr-lt-13", band: "B2", prompt: "Completa: « Si j'___ plus de temps, je voyagerais. » (avoir)", options: ["avais", "aurais", "ai", "aurai"], answer: 0 },
  { id: "fr-lt-14", band: "B2", prompt: "Completa: « Tu veux du café ? — Oui, j'___ veux bien. »", options: ["y", "le", "en", "la"], answer: 2 },
  { id: "fr-lt-15", band: "B2", prompt: "Completa: « Tu vas à Paris ? — Oui, j'___ vais demain. »", options: ["en", "y", "le", "ça"], answer: 1 },
  { id: "fr-lt-16", band: "B2", prompt: "¿Cuál es la forma más formal?", options: ["Réponds-moi vite !", "Je vous serais reconnaissant de me répondre", "Tu me réponds ?", "Allez, réponds !"], answer: 1 },
  /* C1 (17-20) */
  { id: "fr-lt-17", band: "C1", prompt: "Completa: « Bien qu'il ___ tard, nous sommes sortis. » (être)", options: ["était", "est", "fût", "sera"], answer: 2 },
  { id: "fr-lt-18", band: "C1", prompt: "Concordancia: « Marie ? Je l'___ vue hier. » (voir)", options: ["a", "ai", "est", "as"], answer: 1 },
  { id: "fr-lt-19", band: "C1", prompt: "Completa: « Il a dit qu'il ___ déjà mangé. »", options: ["a", "aura", "avait", "aurait"], answer: 2 },
  { id: "fr-lt-20", band: "C1", prompt: "Registro: la respuesta más elegante a una invitación formal", options: ["Ça marche, à plus !", "Je viens, t'inquiète !", "OK, on se voit !", "Je me réjouis de vous y retrouver"], answer: 3 },
];
