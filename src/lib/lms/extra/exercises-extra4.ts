import type { Exercise } from "../types";

/* ── Ejercicios EXTRA · paquete v4.0 · unidad C2 académico/literario ──
   +10 ejercicios (ex-c2-010 … ex-c2-019) para las lecciones u-c2-3…u-c2-7. */

export const EXERCISES_EXTRA_4: Exercise[] = [
  { id: "ex-c2-010", type: "fill", level: "C2", topic: "accademico", prompt: "Completa la forma impersonal académica: «___ presente studio si analizza il corpus». (En el presente estudio se analiza)",
    sentence: "___ presente studio si analizza il corpus.", accepted: ["nel"], explain: "nel = in + il. La apertura académica clásica: «Nel presente studio si analizza…»." },
  { id: "ex-c2-011", type: "mc", level: "C2", topic: "connettivi", prompt: "El concesivo culto con subjuntivo es…",
    options: ["per quanto sia discutibile", "nonostante sia discutibile", "sebbene discutibile è", "quantunque discutibile sia"], answer: 0, explain: "per quanto + congiuntivo es la concesiva culta. Sebbene/nonostante también rigen subjuntivo, pero las opciones 3 y 4 alteran la sintaxis." },
  { id: "ex-c2-012", type: "mc", level: "C2", topic: "citazione", prompt: "En una nota, «ibidem» significa…",
    options: ["en la misma obra citada inmediatamente antes", "en la obra ya citada antes pero no inmediata", "véase más abajo", "obra por venir"], answer: 0, explain: "ibidem = misma obra y misma página de la cita anterior inmediata. Op. cit. = obra ya citada (no inmediata); infra = más abajo; cfr. = confrontar." },
  { id: "ex-c2-013", type: "order", level: "C2", topic: "argomentazione", prompt: "Ordena el período dialéctico: «Se puede objetar que… / a tal objeción… / se responde que…»",
    words: ["Si", "può", "obbiettare", "che", "il", "corpus", "sia", "esiguo"], answer: ["Si", "può", "obbiettare", "che", "il", "corpus", "sia", "esiguo"], explain: "Si può obbiettare che + congiuntivo (sia): la objeción elegante abre la secuencia confutativa." },
  { id: "ex-c2-014", type: "fill", level: "C2", topic: "argomentazione", prompt: "Completa el cierre del ensayo: «A ___ avviso, dunque, la questione va riformulata.» (A mi juicio)",
    sentence: "A ___ avviso, dunque, la questione va riformulata.", accepted: ["mio"], explain: "a mio avviso = a mi juicio. Fórmula de cierre personal estándar del texto argumentativo C2." },
  { id: "ex-c2-015", type: "mc", level: "C2", topic: "retorica", prompt: "«Bere un bicchiere» (beber un vaso) es un ejemplo de…",
    options: ["metonimia", "metafora", "similitudine", "iperbole"], answer: 0, explain: "La metonimia sustituye el contenido (vino) por el continente (vaso)." },
  { id: "ex-c2-016", type: "mc", level: "C2", topic: "narratologia", prompt: "En «Se questo è un uomo» de Primo Levi la voz narrante es…",
    options: ["io narrante testimone", "narratore onnisciente", "seconda persona", "narratore indefinito"], answer: 0, explain: "Levi narra en primera persona como testigo: el io narrante testimone, marca de la literatura de la Shoah." },
  { id: "ex-c2-017", type: "mc", level: "C2", topic: "metrica", prompt: "«Nel mezzo del cammin di nostra vita» es un endecasílabo…",
    options: ["a maiore (4+6)", "a minore (2+6)", "sdrucciolo", "con dieresi"], answer: 0, explain: "Acentos en 2ª, 6ª y 10ª: esquema 4+6, el endecasílabo a maiore dantesco." },
  { id: "ex-c2-018", type: "mc", level: "C2", topic: "metrica", prompt: "El sonetto italiano clásico se compone de…",
    options: ["dos cuartetos y dos tercetos", "tres cuartetos y un dístico", "ocho versos endecasílabos", "cinco tercetos"], answer: 0, explain: "Due quartine + due terzine: la estructura consagrada por Petrarca." },
  { id: "ex-c2-019", type: "translate", level: "C2", topic: "accademico", prompt: "Traduce al italiano académico: «Aunque los datos son parciales, se puede afirmar que la hipótesis se sostiene.»",
    to: "it", source: "Aunque los datos son parciales, se puede afirmar que la hipótesis se sostiene.",
    accepted: ["per quanto i dati siano parziali si puo affermare che lipotesi regge", "per quanto parziali i dati si puo affermare che lipotesi regge", "per quanto i dati siano parziali si puo dire che lipotesi regge", "anche se i dati sono parziali si puo affermare che lipotesi regge"],
    explain: "per quanto + subjuntivo (siano) + reggere (sostenerse, calco culto del ensayo italiano)." },
];
