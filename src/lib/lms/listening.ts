import type { ListeningTask } from "./types";

/* ── Escucha · tareas con TTS ─────────────────────────────────────── */

export const LISTENING: ListeningTask[] = [
  {
    id: "ls-1", level: "A1", title: "Al bar", kind: "dialogo",
    dialogue: [
      { speaker: "Barista", it: "Buongiorno! Cosa desidera?", es: "¡Buenos días! ¿Qué desea?" },
      { speaker: "Cliente", it: "Buongiorno! Un caffè e un cornetto, per favore.", es: "¡Buenos días! Un café y un croissant, por favor." },
      { speaker: "Barista", it: "Subito! Altro?", es: "¡Enseguida! ¿Algo más?" },
      { speaker: "Cliente", it: "No, grazie. Quanto costa?", es: "No, gracias. ¿Cuánto cuesta?" },
      { speaker: "Barista", it: "Tre euro e cinquanta.", es: "Tres euros con cincuenta." },
      { speaker: "Cliente", it: "Ecco a lei. Grazie!", es: "Aquí tiene. ¡Gracias!" },
    ],
    questions: ["ex-asc-001", "ex-asc-002"],
  },
  {
    id: "ls-2", level: "A1", title: "Presentazioni", kind: "parole",
    words: ["ciao", "buongiorno", "grazie", "per favore", "scusa", "arrivederci", "come stai?", "mi chiamo"],
    questions: ["ex-a1-010", "ex-a1-028"],
  },
  {
    id: "ls-3", level: "A2", title: "Alla stazione", kind: "dialogo",
    dialogue: [
      { speaker: "Signora", it: "Buongiorno, un biglietto per Firenze, per favore.", es: "Buenos días, un billete para Florencia, por favor." },
      { speaker: "Impiegato", it: "Andata e ritorno?", es: "¿Ida y vuelta?" },
      { speaker: "Signora", it: "No, solo andata. A che ora parte il treno?", es: "No, solo ida. ¿A qué hora sale el tren?" },
      { speaker: "Impiegato", it: "Alle nove e dieci, dal binario sette. Ma attenzione: il treno è in ritardo di quindici minuti.", es: "A las nueve y diez, del andén siete. Pero atención: el tren va con quince minutos de retraso." },
      { speaker: "Signora", it: "Va bene, grazie mille!", es: "Está bien, ¡muchas gracias!" },
    ],
    questions: ["ex-asc-003", "ex-asc-004"],
  },
  {
    id: "ls-4", level: "A2", title: "Dal medico", kind: "dialogo",
    dialogue: [
      { speaker: "Dottore", it: "Buongiorno, si accomodi. Come si sente?", es: "Buenos días, siéntese. ¿Cómo se siente?" },
      { speaker: "Paziente", it: "Non molto bene. Ho mal di gola e mi fa male la testa.", es: "No muy bien. Me duele la garganta y me duele la cabeza." },
      { speaker: "Dottore", it: "Ha la febbre? Si misuri la temperatura.", es: "¿Tiene fiebre? Mídase la temperatura." },
      { speaker: "Paziente", it: "Sì, trentotto gradi.", es: "Sí, treinta y ocho grados." },
      { speaker: "Dottore", it: "Le prescrivo una medicina. Prenda una compressa tre volte al giorno, dopo i pasti.", es: "Le receto una medicina. Tome una pastilla tres veces al día, después de las comidas." },
    ],
    questions: ["ex-asc-006", "ex-sit-med-1"],
  },
  {
    id: "ls-5", level: "B1", title: "Colloquio di lavoro", kind: "dialogo",
    dialogue: [
      { speaker: "Responsabile", it: "Buongiorno, si accomodi. Ci parli un po' di sé.", es: "Buenos días, siéntese. Háblenos un poco de usted." },
      { speaker: "Candidata", it: "Grazie. Mi chiamo Sofia Martín, sono spagnola e vivo a Milano da tre anni.", es: "Gracias. Me llamo Sofía Martín, soy española y vivo en Milán desde hace tres años." },
      { speaker: "Responsabile", it: "Che formazione ha?", es: "¿Qué formación tiene?" },
      { speaker: "Candidata", it: "Ho una laurea in economia e ho lavorato due anni in una multinazionale.", es: "Tengo un título en economía y trabajé dos años en una multinacional." },
      { speaker: "Responsabile", it: "E le lingue?", es: "¿Y los idiomas?" },
      { speaker: "Candidata", it: "Parlo italiano, spagnolo e inglese.", es: "Hablo italiano, español e inglés." },
    ],
    questions: ["ex-asc-005", "ex-b1-014"],
  },
  {
    id: "ls-6", level: "A1", title: "Numeri e parole: dettato facile", kind: "dictato",
    words: ["uno", "due", "tre", "quattro", "cinque", "Buongiorno, come stai?", "Mi chiamo Anna."],
    questions: ["ex-a1-022", "ex-a1-023"],
  },
  {
    id: "ls-7", level: "A2", title: "Dettato intermedio", kind: "dictato",
    words: ["Vorrei prenotare una camera per questa notte.", "Che tempo fa oggi? C'è il sole.", "Un chilo di pane, per favore."],
    questions: ["ex-a2-017", "ex-a2-018"],
  },
  {
    id: "ls-8", level: "B1", title: "Dettato avanzato", kind: "dictato",
    words: ["Secondo me, questo film è il migliore dell'anno.", "Vorrei cambiare la prenotazione, se è possibile."],
    questions: ["ex-b1-010", "ex-b1-009"],
  },
];
