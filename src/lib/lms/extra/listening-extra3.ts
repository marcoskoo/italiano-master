import type { ListeningTask } from "../types";

/* ── Escucha EXTRA · paquete v6.0 (ls-23…ls-30) ───────────────────── */

export const LISTENING_EXTRA_3: ListeningTask[] = [
  {
    id: "ls-23", level: "A1", title: "Prezzi al bar: dettato facile", kind: "dictato",
    words: [
      "Il biglietto costa due euro e cinquanta.",
      "Il cornetto costa un euro.",
      "Il caffè costa un euro e dieci.",
      "L'acqua naturale costa due euro.",
    ],
    questions: ["ex-asc-029", "ex-asc-030"],
  },
  {
    id: "ls-24", level: "A2", title: "Al ristorante: la cena completa", kind: "dialogo",
    dialogue: [
      { speaker: "Cameriere", it: "Buonasera! Avete prenotato?", es: "¡Buenas noches! ¿Han reservado?" },
      { speaker: "Cliente", it: "Sì, un tavolo per due, nome Rossi.", es: "Sí, una mesa para dos, a nombre Rossi." },
      { speaker: "Cameriere", it: "Perfetto, da questa parte. Ecco il menù. Desidera un antipasto?", es: "Perfecto, por aquí. Aquí tiene el menú. ¿Desea un entrante?" },
      { speaker: "Cliente", it: "No, grazie, andiamo diretti al primo: le tagliatelle al ragù per me.", es: "No, gracias, vamos directos al primer plato: las tagliatelle al ragù para mí." },
      { speaker: "Cameriere", it: "Ottima scelta. E come secondo?", es: "Excelente elección. ¿Y de segundo?" },
      { speaker: "Cliente", it: "La tagliata di manzo, al sangue. E per mia moglie il branzino al forno.", es: "La tagliata de res, a la sangre. Y para mi esposa el lubrón al horno." },
      { speaker: "Cameriere", it: "Benissimo. Da bere?", es: "Muy bien. ¿Para beber?" },
      { speaker: "Cliente", it: "Una bottiglia di acqua frizzante e mezzo litro di rosso della casa.", es: "Una botella de agua con gas y medio litro de tinto de la casa." },
      { speaker: "Cliente", it: "E alla fine… il conto, per favore!", es: "Y al final… ¡la cuenta, por favor!" },
    ],
    questions: ["ex-asc-031", "ex-asc-032"],
  },
  {
    id: "ls-25", level: "A2", title: "Chiedere la strada", kind: "dialogo",
    dialogue: [
      { speaker: "Turista", it: "Scusi, sa dirmi dov'è la stazione centrale?", es: "Disculpe, ¿sabe decirme dónde está la estación central?" },
      { speaker: "Passante", it: "Certo! Vada sempre dritto per questa via, poi giri a destra al semaforo.", es: "¡Claro! Siga siempre recto por esta calle, luego gire a la derecha en el semáforo." },
      { speaker: "Turista", it: "È lontana? Vado di fretta.", es: "¿Está lejos? Tengo prisa." },
      { speaker: "Passante", it: "No, sono dieci minuti a piedi. Oppure prende il bus numero 12, due fermate e è arrivata.", es: "No, son diez minutos a pie. O si toma el bus número 12, dos paradas y ya llegó." },
      { speaker: "Turista", it: "Grazie mille, molto gentile!", es: "¡Muchísimas gracias, muy amable!" },
    ],
    questions: ["ex-asc-033", "ex-asc-034"],
  },
  {
    id: "ls-26", level: "B1", title: "Prenotare una visita dal medico", kind: "dialogo",
    dialogue: [
      { speaker: "Segreteria", it: "Studio medico Rossi, buongiorno. Mi dica.", es: "Consultorio del doctor Rossi, buenos días. Dígame." },
      { speaker: "Paziente", it: "Buongiorno, vorrei prenotare una visita generica. È la prima volta che chiamo.", es: "Buenos días, quisiera reservar una consulta general. Es la primera vez que llamo." },
      { speaker: "Segreteria", it: "Certo. Ha il codice fiscale a portata di mano?", es: "Claro. ¿Tiene a mano el código fiscal?" },
      { speaker: "Paziente", it: "Sì, glielo detto: B-R-T-M-R-A…", es: "Sí, se lo dicto: B-R-T-M-R-A…" },
      { speaker: "Segreteria", it: "Perfetto. Il dottore può riceverla giovedì alle sedici. Le va bene?", es: "Perfecto. El doctor puede recibirla el jueves a las dieciséis. ¿Le parece bien?" },
      { speaker: "Paziente", it: "Sì, giovedì alle sedici va benissimo. La ringrazio!", es: "Sí, el jueves a las dieciséis me va perfecto. ¡La agradezco!" },
    ],
    questions: ["ex-asc-035", "ex-asc-036"],
  },
  {
    id: "ls-27", level: "B1", title: "La riunione di team", kind: "dialogo",
    dialogue: [
      { speaker: "Direttore", it: "Ragazzi, due cose veloci. Primo: il report per il cliente. A che punto siamo?", es: "Chicos, dos cosas rápidas. Primero: el informe para el cliente. ¿En qué punto estamos?" },
      { speaker: "Sara", it: "I testi sono pronti, mancano solo i grafici. Marco sta finendo le slide.", es: "Los textos están listos, faltan solo los gráficos. Marco está terminando las láminas." },
      { speaker: "Marco", it: "Sì, entro domani mattina carico tutto sulla cartella condivisa.", es: "Sí, mañana temprano subo todo a la carpeta compartida." },
      { speaker: "Direttore", it: "Bene. Sara, puoi mandarmi la versione definitiva entro venerdì? Il cliente la presenta lunedì.", es: "Bien. Sara, ¿puedes mandarme la versión definitiva antes del viernes? El cliente la presenta el lunes." },
      { speaker: "Sara", it: "Tranquillo, entro venerdì ce l'hai. Promesso.", es: "Tranquilo, antes del viernes la tienes. Prometido." },
    ],
    questions: ["ex-asc-037", "ex-asc-038"],
  },
  {
    id: "ls-28", level: "B2", title: "Intervista radiofonica: l'emigrazione", kind: "dialogo",
    dialogue: [
      { speaker: "Conduttrice", it: "Buonasera, oggi in studio abbiamo Elena Marchetti, autrice de «Le lettere dall'Argentina». Elena, com'è nato questo libro?", es: "Buenas noches, hoy en estudio tenemos a Elena Marchetti, autora de «Las cartas desde Argentina». Elena, ¿cómo nació este libro?" },
      { speaker: "Elena", it: "Da una scatola di latta trovata in cantina: le lettere che la mia bisnonna scriveva alla sorella rimasta in Italia. Nonna Lucia partì nel 1948 e non tornò mai.", es: "De una lata encontrada en el sótano: las cartas que mi bisabuela le escribía a la hermana que quedó en Italia. La nonna Lucia se fue en 1948 y nunca volvió." },
      { speaker: "Conduttrice", it: "E per chi ha scritto il libro, alla fine?", es: "¿Y para quién escribió el libro, al final?" },
      { speaker: "Elena", it: "Per lei, per nonna Lucia. Volevo che le sue parole arrivassero finalmente a casa, anche solo sulla pagina.", es: "Para ella, para la nonna Lucia. Quería que sus palabras llegaran por fin a casa, aunque fuera en la página." },
    ],
    questions: ["ex-asc-039", "ex-asc-040"],
  },
  {
    id: "ls-29", level: "C1", title: "Dettato di attualità", kind: "dictato",
    words: [
      "Il comune ha approvato la nuova isola pedonale nel centro storico.",
      "I commercianti potranno caricare la merce solo nelle fasce orarie mattutine.",
      "La misura entrerà in vigore il primo settembre, dopo la stagione turistica.",
    ],
    questions: ["ex-asc-041", "ex-asc-042"],
  },
  {
    id: "ls-30", level: "C2", title: "Dettato letterario", kind: "dictato",
    words: [
      "Un filo di fumo saliva dai tetti, come se la città avesse deciso di svegliarsi piano.",
      "Se ne sarebbe pentito, forse, ma il treno era già ripartito senza di lui.",
    ],
    questions: ["ex-asc-043", "ex-asc-044"],
  },
];
