import type { ListeningTask } from "../types";

/* ── Escucha EXTRA · paquete de expansión v1.1 ─────────────────────── */

export const LISTENING_EXTRA: ListeningTask[] = [
  {
    id: "ls-9", level: "A1", title: "En el mercado", kind: "dialogo",
    dialogue: [
      { speaker: "Fruttivendolo", it: "Buongiorno! Desidera?", es: "¡Buenos días! ¿Qué desea?" },
      { speaker: "Clienta", it: "Buongiorno! Vorrei due chili di pesche, per favore.", es: "¡Buenos días! Querría dos kilos de melocotones, por favor." },
      { speaker: "Fruttivendolo", it: "Le pesche oggi sono dolcissime. Altro?", es: "Los melocotones hoy están dulcísimos. ¿Algo más?" },
      { speaker: "Clienta", it: "No, grazie. Quanto fa?", es: "No, gracias. ¿Cuánto es?" },
      { speaker: "Fruttivendolo", it: "Sono quattro euro e mezzo.", es: "Son cuatro euros y medio." },
    ],
    questions: ["ex-asc-007"],
  },
  {
    id: "ls-10", level: "A2", title: "Check-in en el hotel", kind: "dialogo",
    dialogue: [
      { speaker: "Receptionist", it: "Buonasera, benvenuto! Ha una prenotazione?", es: "Buenas noches, ¡bienvenido! ¿Tiene una reserva?" },
      { speaker: "Ospite", it: "Sì, a nome García, per tre notti.", es: "Sí, a nombre García, por tres noches." },
      { speaker: "Receptionist", it: "Perfetto. Una camera doppia con vista sul giardino.", es: "Perfecto. Una habitación doble con vistas al jardín." },
      { speaker: "Ospite", it: "Preferivo una camera silenziosa ai piani alti, se possibile.", es: "Prefería una habitación silenciosa en los pisos altos, si es posible." },
      { speaker: "Receptionist", it: "Nessun problema, la settima piano ha la camera 702. La colazione è dalle sette alle dieci.", es: "Ningún problema, el séptimo piso tiene la habitación 702. El desayuno es de siete a diez." },
    ],
    questions: ["ex-asc-008"],
  },
  {
    id: "ls-11", level: "A1", title: "Números y teléfono", kind: "parole",
    words: ["tre", "tre", "nove", "otto", "due", "uno", "tre-tre-nove-otto-due-uno"],
    questions: ["ex-asc-009"],
  },
  {
    id: "ls-12", level: "B1", title: "La entrevista", kind: "dialogo",
    dialogue: [
      { speaker: "HR", it: "Mi parli della sua esperienza internazionale.", es: "Hábleme de su experiencia internacional." },
      { speaker: "Candidato", it: "Ho guidato team internazionali per due anni, tra Milano e Barcellona.", es: "He liderado equipos internacionales durante dos años, entre Milán y Barcelona." },
      { speaker: "HR", it: "E qual è il suo punto di forza?", es: "¿Y cuál es su fortaleza?" },
      { speaker: "Candidato", it: "La gestione dei team: so ascoltare le persone e ottenere risultati.", es: "La gestión de equipos: sé escuchar a las personas y obtener resultados." },
      { speaker: "HR", it: "Ottimo. Quando può iniziare?", es: "Excelente. ¿Cuándo puede empezar?" },
    ],
    questions: ["ex-asc-010"],
  },
  {
    id: "ls-13", level: "B2", title: "El debate del turismo", kind: "dialogo",
    dialogue: [
      { speaker: "Moderatore", it: "Il turismo di massa: risorsa o minaccia per le città d'arte?", es: "El turismo masivo: ¿recurso o amenaza para las ciudades de arte?" },
      { speaker: "Primo relatore", it: "Senza turisti, Venezia muore economicamente. Il turismo crea lavoro e cultura.", es: "Sin turistas, Venecia muere económicamente. El turismo crea trabajo y cultura." },
      { speaker: "Secondo relatore", it: "Il turismo non è il nemico: lo è la sua cattiva gestione. Servono regole per chi vive in centro.", es: "El turismo no es el enemigo: lo es su mala gestión. Hacen falta reglas para quien vive en el centro." },
      { speaker: "Moderatore", it: "Quindi entrambi concordate sulla necessità di regole?", es: "¿Entonces ambos concuerdan en la necesidad de reglas?" },
    ],
    questions: ["ex-asc-011"],
  },
  {
    id: "ls-14", level: "B2", title: "Dictado del telediario", kind: "dictato",
    words: [
      "Secondo gli esperti, il mercato del lavoro crescerà lentamente.",
      "Nonostante il traffico, la città resta la più vivibile d'Italia.",
    ],
    questions: ["ex-asc-012", "ex-b2-024"],
  },
];
