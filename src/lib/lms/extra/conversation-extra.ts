import type { ConversationScenario } from "../types";

/* ── Conversación EXTRA · paquete de expansión v1.1 ────────────────── */

export const CONVERSATION_EXTRA: ConversationScenario[] = [
  {
    id: "cs-7", emoji: "🤝", title: "Hacer amistades", level: "A2",
    phrases: [
      { it: "Di dove sei? / Di dov'è?", es: "¿De dónde eres / es usted?" },
      { it: "Che lavoro fai?", es: "¿Qué trabajo haces?" },
      { it: "Ci vediamo dopo?", es: "¿Nos vemos luego?" },
      { it: "Ti va di prendere un caffè?", es: "¿Te apetece tomar un café?" },
      { it: "Scambio il numero?", es: "¿Intercambiamos el número?" },
    ],
    tips: ["El italiano usa el tú (tu) con mucha rapidez entre jóvenes", "Los tres temas rotos-hielo: comida, calcio, città d'arte", "Ti va di…? es la fórmula más natural para proponer"],
    tutorSeed: "Conosciamoci! Facciamo finta di essere a una festa: presentati, chiedimi di me e proponi di prendere un caffè. Parliamo in italiano, piano piano.",
  },
  {
    id: "cs-8", emoji: "📞", title: "Al teléfono", level: "A2",
    phrases: [
      { it: "Pronto, chi parla?", es: "¿Sí? ¿Quién habla?" },
      { it: "Posso lasciare un messaggio?", es: "¿Puedo dejar un mensaje?" },
      { it: "La richiamo più tardi", es: "Le devuelvo la llamada más tarde" },
      { it: "C'è... per favore?", es: "¿Está... por favor?" },
      { it: "Scusi, non sento bene", es: "Disculpe, no oigo bien" },
    ],
    tips: ["Al teléfono se usa casi siempre el formal (Le) con desconocidos", "Pronto! es el saludo italiano al descolgar — no «ciao»", "Confirmar números dígito a dígito evita desastres"],
    tutorSeed: "Telefonata role-play: io sono il portiere del tuo hotel, tu chiami per chiedere informazioni. Usa «Pronto», il formale e lascia un messaggio per un amico.",
  },
  {
    id: "cs-9", emoji: "💼", title: "Hablar del trabajo", level: "B1",
    phrases: [
      { it: "Mi occupo di comunicazione.", es: "Me ocupo de comunicación." },
      { it: "Lavoro in un'azienda che si occupa di…", es: "Trabajo en una empresa que se dedica a…" },
      { it: "Il mio lavoro mi piace, però è stressante.", es: "Mi trabajo me gusta, pero es estresante." },
      { it: "Sto pensando di cambiare settore.", es: "Estoy pensando en cambiar de sector." },
      { it: "Com'è il mondo del lavoro nel tuo paese?", es: "¿Cómo es el mundo laboral en tu país?" },
    ],
    tips: ["mi occupo di suena más natural que «il mio lavoro è»", "Combina passato prossimo (experiencia) y presente (situación actual)", "El però suave el contraste mejor que un ma seco"],
    tutorSeed: "Parliamo di lavoro: cosa fai, cosa facevi prima e cosa vorresti fare in futuro? Io ti farò domande da colloquio informale.",
  },
  {
    id: "cs-10", emoji: "⚔️", title: "Disentir con elegancia", level: "B1",
    phrases: [
      { it: "Capisco il tuo punto, però…", es: "Entiendo tu punto, pero…" },
      { it: "Non sono del tutto d'accordo.", es: "No estoy del todo de acuerdo." },
      { it: "Vedi, la penso diversamente.", es: "Mira, lo pienso diferente." },
      { it: "Mi permetto di dissentire.", es: "Me permito disentir." },
      { it: "Restiamo d'accordo nel dissentire?", es: "¿Quedamos en desacuerdo amistoso?" },
    ],
    tips: ["Primero valida, después contrasta: capisco, però…", "non del todo (non del tutto) rebaja el desacuerdo un 50%", "Las interrupciones suaves (scusa, un attimo) son normales en debates italianos"],
    tutorSeed: "Dibattito amichevole: secondo me i social network fanno più male che bene. Obietta con eleganza: usa «capisco, però…» e «la penso diversamente».",
  },
  {
    id: "cs-11", emoji: "🎬", title: "Contar una película", level: "B2",
    phrases: [
      { it: "Tratta di…", es: "Trata de…" },
      { it: "La trama è piena di colpi di scena.", es: "La trama está llena de giros." },
      { it: "La fotografia è splendida.", es: "La fotografía es espléndida." },
      { it: "L'ho trovato un po' prevedibile.", es: "Lo encontré algo predecible." },
      { it: "Te lo consiglio / Non ne vale la pena.", es: "Te lo recomiendo / No vale la pena." },
    ],
    tips: ["Presente para la trama (si svolge a Napoli), passato prossimo para tu experiencia (l'ho visto sabato)", "Vocabulario técnico: regia, colonna sonora, fotografia, montaggio", "Matiza con un po', alquanto, parecchio: el italiano detesta los absolutos"],
    tutorSeed: "Raccontami l'ultimo film che hai visto: trama (senza spoiler!), attori, colonna sonora e un giudizio finale. Io ti chiederò dettagli.",
  },
  {
    id: "cs-12", emoji: "🕊️", title: "El arte del matiz", level: "C1",
    phrases: [
      { it: "Se non altro, …", es: "Si acaso / Al menos…" },
      { it: "Quanto meno potremmo…", es: "Como mínimo podríamos…" },
      { it: "Pur di non…, sarei disposto a…", es: "Con tal de no…, estaría dispuesto a…" },
      { it: "Tutto sommato, …", es: "Al fin y al cabo…" },
      { it: "Semmai, valuterei…", es: "Más bien, evaluaría…" },
    ],
    tips: ["Estos conectores son diplomacia pura: convierten un no en un quizás", "pur di + infinitivo expresa costo/disposición con precisión quirúrgica", "El condizionale composto es el rey de la concesión: avrei preferito"],
    tutorSeed: "Negoziazione elegante: dobbiamo decidere dove andare in vacanza con un budget limitato. Obietta, concedi e proponi usando «se non altro», «quanto meno» e «semmai».",
  },
];
