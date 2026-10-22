import type { LevelTestItem } from "../../leveltest";

/* ── Test de nivel EN · 20 preguntas graduadas A1→C1 ────────────────
   Consignas en español con el enunciado en inglés (patrón IT);
   opciones en inglés americano. El índice de la respuesta varía. */

export const EN_LEVEL_TEST: LevelTestItem[] = [
  /* A1 (1-4) */
  { id: "en-lt-1", band: "A1", prompt: "Completa: “I ___ a student.”", options: ["is", "am", "are", "be"], answer: 1 },
  { id: "en-lt-2", band: "A1", prompt: "¿Cómo preguntas “¿cómo te llamas?” (informal)?", options: ["What's your name?", "How are you?", "Where do you live?", "How old are you?"], answer: 0 },
  { id: "en-lt-3", band: "A1", prompt: "Completa: “She has ___ apple.”", options: ["a", "an", "the", "some"], answer: 1 },
  { id: "en-lt-4", band: "A1", prompt: "“I'm hungry” significa…", options: ["Tengo hambre", "Tengo frío", "Estoy cansado", "Tengo razón"], answer: 0 },
  /* A2 (5-8) */
  { id: "en-lt-5", band: "A2", prompt: "Completa: “Yesterday we ___ to the movies.” (go)", options: ["goed", "went", "gone", "go"], answer: 1 },
  { id: "en-lt-6", band: "A2", prompt: "Completa: “Right now she ___ for the bus.” (wait)", options: ["waits", "is waiting", "wait", "waited"], answer: 1 },
  { id: "en-lt-7", band: "A2", prompt: "Completa: “New York is ___ than Chicago.” (big)", options: ["more big", "bigger", "biggest", "the biggest"], answer: 1 },
  { id: "en-lt-8", band: "A2", prompt: "¿Qué respuesta es correcta para “Where are you from?”", options: ["I'm from Peru", "I have 25 years", "I like coffee", "Yes, I am"], answer: 0 },
  /* B1 (9-12) */
  { id: "en-lt-9", band: "B1", prompt: "Completa: “I've lived in Austin ___ 2019.”", options: ["for", "since", "from", "during"], answer: 1 },
  { id: "en-lt-10", band: "B1", prompt: "Completa: “If it rains tomorrow, we ___ at home.” (stay)", options: ["would stay", "will stay", "stayed", "stay"], answer: 1 },
  { id: "en-lt-11", band: "B1", prompt: "¿Qué significa “turn off”?", options: ["Apagar", "Devolver", "Levantarse", "Enfadarse"], answer: 0 },
  { id: "en-lt-12", band: "B1", prompt: "Completa: “Could you tell me where ___?”", options: ["is the station", "the station is", "the station it is", "station is"], answer: 1 },
  /* B2 (13-16) */
  { id: "en-lt-13", band: "B2", prompt: "Completa: “If I ___ more time, I would travel more.” (have)", options: ["would have", "had", "have", "will have"], answer: 1 },
  { id: "en-lt-14", band: "B2", prompt: "Completa: “This bridge ___ in 1937.” (build)", options: ["was built", "is built", "has built", "built"], answer: 0 },
  { id: "en-lt-15", band: "B2", prompt: "Completa: “She's the woman ___ son plays in the NBA.”", options: ["who", "which", "whose", "that"], answer: 2 },
  { id: "en-lt-16", band: "B2", prompt: "Completa: “I'm not used ___ so early.” (get up)", options: ["to get up", "getting up", "get up", "to getting up"], answer: 3 },
  /* C1 (17-20) */
  { id: "en-lt-17", band: "C1", prompt: "Completa: “Not only ___ the exam, but she also got the top score.” (pass)", options: ["she passed", "did she pass", "she did pass", "passed she"], answer: 1 },
  { id: "en-lt-18", band: "C1", prompt: "Completa: “If I ___ you, I would accept the offer.” (be)", options: ["was", "were", "am", "had been"], answer: 1 },
  { id: "en-lt-19", band: "C1", prompt: "Completa: “It was Alex ___ solved the problem.”", options: ["who", "which", "whom", "whose"], answer: 0 },
  { id: "en-lt-20", band: "C1", prompt: "¿Cuál suena más formal y natural para pedir algo?", options: ["I was wondering if you could help me", "Help me with this", "You must help me", "I want you to help me"], answer: 0 },
];
