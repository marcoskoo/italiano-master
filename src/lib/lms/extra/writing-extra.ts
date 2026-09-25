import type { WritingPrompt } from "../types";

/* ── Escritura EXTRA · paquete de expansión v1.1 ───────────────────── */

export const WRITINGS_EXTRA: WritingPrompt[] = [
  {
    id: "wr-7", level: "A2", title: "Un correo a un amigo", task: "Escribe un correo informal a un amigo italiano para invitarlo a pasar un fin de semana en tu ciudad. Preséntale qué visitaréis, qué comeréis y cuándo llega (80-100 palabras).",
    minWords: 80,
    tips: ["Empieza con Ciao + nombre y termina con Un abbraccio / A presto", "Usa el presente para planes: visitiamo, mangiamo, andiamo", "Añade una pregunta final para esperar respuesta"],
    model: [
      "Ciao Matteo!",
      "Come stai? Io benissimo. Ti scrivo perché ho un'idea: perché non passi un fine settimana qui con me?",
      "Sabato visitiamo il centro: c'è un mercatino bellissimo e poi pranziamo in una trattoria tipica. La domenica andiamo al mare, se fa bel tempo!",
      "Puoi arrivare venerdì sera con il treno delle 18:30? Ti aspetto alla stazione.",
      "Scrivimi presto, okay? Un abbraccio forte,",
      "Ana",
    ],
    checklist: ["¿Saludo y despedida informales?", "¿Dos actividades concretas con días?", "¿Hora/lugar de llegada?", "¿Pregunta final?"],
  },
  {
    id: "wr-8", level: "B1", title: "Candidatura espontánea", task: "Redacta un correo formal de candidatura espontánea para unas prácticas en una empresa italiana: preséntate, explica por qué te interesa y qué aportas (100-130 palabras).",
    minWords: 100,
    tips: ["Gentile / Spettabile + tratamiento, y cierre con Cordiali saluti", "Usa el passato prossimo para tu experiencia y el condicional para tus propuestas", "Fórmulas: Le scrivo in merito a…, In allegato trova…, Resto a disposizione"],
    model: [
      "Gentile Sig.ra Moretti,",
      "Le scrivo in merito alla possibilità di svolgere un tirocinio presso la vostra azienda.",
      "Sono studente di traduzione a Barcellona e studio italiano da cinque anni. L'anno scorso ho collaborato con un'agenzia turistica, dove ho curato i contenuti in italiano e spagnolo.",
      "Il vostro progetto di comunicazione internazionale mi interessa molto: credo che potrei apportare competenze linguistiche e una forte motivazione.",
      "In allegato trova il mio curriculum. Resto a disposizione per un colloquio.",
      "Cordiali saluti,",
      "Diego Fernández",
    ],
    checklist: ["¿Apertura y cierre formales?", "¿Leísmo correcto (Le scrivo, troviLe)?", "¿Experiencia en passato prossimo?", "¿Fórmulas de cortesía condicional?"],
  },
  {
    id: "wr-9", level: "B2", title: "Reseña de restaurante", task: "Escribe una reseña (recensione) de un restaurante italiano: ambiente, platos, servicio y una recomendación final con matiz (120-150 palabras).",
    minWords: 120,
    tips: ["Conectores B2: nonostante, tuttavia, in conclusione", "Describe platos con participios y adjetivos precisos: stracciatella cremosa, rustico il pane", "Cierra con una recomendación matizada, no absoluta"],
    model: [
      "La Trattoria del Borgo è una di quelle sorprese che capitano una volta l'anno.",
      "L'ambiente è semplice, con tavoli di legno e una carta scritta a mano; nonostante la sala piccola, il servizio è stato impeccabile.",
      "Ho ordinato le tagliatelle al ragù: pasta fatta in casa, ragù cotto lentamente, un equilibrio perfetto. Il secondo, pollo al limone, era forse troppo salato; tuttavia le patate al rosmarino compensavano.",
      "Il conto, 35 euro a testa, è onesto per la qualità offerta.",
      "In conclusione, consiglio la trattoria soprattutto a chi cerca cucina vera: non è un ristorante stellato, ma è esattamente quello che un ristorante dovrebbe essere.",
    ],
    checklist: ["¿Conectores de contraste (nonostante, tuttavia)?", "¿Vocabulario gastronómico específico?", "¿Recomendación final matizada?", "¿Registro de reseña (impersonal + 1ª persona)?"],
  },
  {
    id: "wr-10", level: "C1", title: "Ensayo breve sobre bilingüismo", task: "Redacta un ensayo breve (200-250 palabras) sobre la tesis «La lengua es una jaula o una lente»: argumenta a favor de una postura con contraargumentación (eppure, peraltro) y conclusión académica.",
    minWords: 200,
    tips: ["Tesis clara en la introducción y conclusión con in conclusione / alla luce di", "Contraargumenta con nondimeno, peraltro, quanto meno", "Nominalizaciones: il pensare, la percezione della realtà, l'acquisizione di una seconda lingua"],
    model: [
      "Negli ultimi decenni si è diffusa l'idea che la lingua determini il pensiero, quasi una gabbia dentro cui la mente resta prigioniera.",
      "A mio avviso, la metafora della gabbia è fuorviante: la lingua somiglia piuttosto a una lente, che mette a fuoco alcuni dettagli lasciandone altri in secondo piano.",
      "È vero che ogni idioma codifica il mondo a modo suo: il tedesco compone, il cinese classifica, l'italiano colora. Nondimeno, il parlante non è passivo: attraversa la frontiera ogni volta che impara una parola nuova.",
      "Peraltro, l'esperienza bilingue mostra che chi possiede due lingue dispone di due paesaggi e di una frontiera: può scegliere dove guardare, e soprattutto vede il confine stesso.",
      "In conclusione, ritengo che la lingua non imprigioni bensì orienti: non è che una lingua limiti il pensiero, semmai lo dirige. Il bilinguismo, allora, non è una prigione doppia, ma una libertà raddoppiata.",
    ],
    checklist: ["¿Tesis explícita al inicio?", "¿Contraargumentación (nondimeno, peraltro)?", "¿Nominalizaciones académicas?", "¿Conclusión con in conclusione + matiz (bensì, semmai)?"],
  },
];
