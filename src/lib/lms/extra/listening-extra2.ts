import type { ListeningTask } from "../types";

/* ── Escuchas EXTRA · paquete v4.0 (ls-15…ls-22) ───────────────────── */

export const LISTENING_EXTRA_2: ListeningTask[] = [
  {
    id: "ls-15", level: "A1", title: "Al banco o al tavolo", kind: "dialogo",
    dialogue: [
      { speaker: "Cameriere", it: "Buongiorno! Dica pure.", es: "¡Buenos días! Dígame." },
      { speaker: "Cliente", it: "Buongiorno, un caffè e un cornetto, per favore.", es: "Buenos días, un café y un croissant, por favor." },
      { speaker: "Cameriere", it: "Al banco o al tavolo?", es: "¿En la barra o en la mesa?" },
      { speaker: "Cliente", it: "Al banco, grazie. Quanto fa?", es: "En la barra, gracias. ¿Cuánto es?" },
      { speaker: "Cameriere", it: "Due e venti. Prego, si serva pure dello zucchero.", es: "Dos con veinte. Servirse azúcar, por favor." },
      { speaker: "Cliente", it: "Grazie, buongiornata!", es: "Gracias, ¡buen día!" },
    ],
    questions: ["ex-asc-013", "ex-asc-014"],
  },
  {
    id: "ls-16", level: "A1", title: "El tren a Florencia", kind: "dialogo",
    dialogue: [
      { speaker: "Altoparlante", it: "Attenzione, prego. Il treno regionale per Firenze parte dal binario nove.", es: "Atención, por favor. El tren regional a Florencia sale del andén nueve." },
      { speaker: "Turista", it: "Scusi, questo è il treno per Firenze?", es: "Disculpe, ¿este es el tren para Florencia?" },
      { speaker: "Controllore", it: "Sì, ma è in ritardo di dieci minuti.", es: "Sí, pero está retrasado diez minutos." },
      { speaker: "Turista", it: "Grazie! E dove posso convalidare il biglietto?", es: "¡Gracias! ¿Y dónde puedo validar el billete?" },
      { speaker: "Controllore", it: "Alla macchinetta gialla, lì vicino.", es: "En la máquina amarilla, allí al lado." },
    ],
    questions: ["ex-asc-015", "ex-asc-016"],
  },
  {
    id: "ls-17", level: "A2", title: "En la farmacia", kind: "dialogo",
    dialogue: [
      { speaker: "Farmacista", it: "Buongiorno, mi dica.", es: "Buenos días, dígame." },
      { speaker: "Clienta", it: "Buongiorno, ho un forte mal di testa. Avete qualcosa?", es: "Buenos días, tengo un fuerte dolor de cabeza. ¿Tienen algo?" },
      { speaker: "Farmacista", it: "Questa va bene, una pastiglia ogni otto ore. Ma se continua, chiami il medico.", es: "Esto va bien, una pastilla cada ocho horas. Pero si continúa, llame al médico." },
      { speaker: "Clienta", it: "Serve la ricetta?", es: "¿Hace falta receta?" },
      { speaker: "Farmacista", it: "No, è da banco. Sono cinque euro.", es: "No, es de venta libre. Son cinco euros." },
      { speaker: "Clienta", it: "Perfetto, grazie. Arrivederla!", es: "Perfecto, gracias. ¡Hasta luego!" },
    ],
    questions: ["ex-asc-017", "ex-asc-018"],
  },
  {
    id: "ls-18", level: "A2", title: "Alquilar un coche", kind: "dialogo",
    dialogue: [
      { speaker: "Impiegato", it: "Buongiorno, ha una prenotazione?", es: "Buenos días, ¿tiene reserva?" },
      { speaker: "Cliente", it: "Sì, a nome García, per tre giorni.", es: "Sí, a nombre García, por tres días." },
      { speaker: "Impiegato", it: "Ecco qui. Mi serve la patente e un documento.", es: "Aquí está. Necesito el carné de conducir y un documento." },
      { speaker: "Cliente", it: "Ecco. Avrei bisogno anche di un seggiolino per bambini.", es: "Aquí. También necesitaría una silla para niños." },
      { speaker: "Impiegato", it: "Nessun problema, lo installiamo subito. Firma qui, per favore.", es: "Ningún problema, lo instalamos enseguida. Firme aquí, por favor." },
    ],
    questions: ["ex-asc-019", "ex-asc-020"],
  },
  {
    id: "ls-19", level: "B1", title: "La videochiamata", kind: "dialogo",
    dialogue: [
      { speaker: "Giulia", it: "Pronto? Ci sentite? Praga, mi senti?", es: "¿Hola? ¿Nos oís? Praga, ¿me oyes?" },
      { speaker: "Praga", it: "Ora sì! Prima l'audio non funzionava.", es: "¡Ahora sí! Antes el audio no funcionaba." },
      { speaker: "Giulia", it: "Bene. Allora, partiamo dal punto due della presentazione?", es: "Bien. ¿Entonces, empezamos por el punto dos de la presentación?" },
      { speaker: "Luca", it: "Condivido lo schermo, un attimo… ecco.", es: "Comparto la pantalla, un momento… listo." },
      { speaker: "Giulia", it: "Perfetto. Riassumendo: consegna venerdì, e ti mando il verbale per email.", es: "Perfecto. Resumiendo: entrega el viernes, y te mando el acta por email." },
    ],
    questions: ["ex-asc-021", "ex-asc-022"],
  },
  {
    id: "ls-20", level: "B1", title: "La artesana", kind: "dialogo",
    dialogue: [
      { speaker: "Intervistatore", it: "Silvia, lei è la terza generazione di ceramisti della sua famiglia. Che significa fare l'artigiana oggi?", es: "Silvia, usted es la tercera generación de ceramistas de su familia. ¿Qué significa ser artesana hoy?" },
      { speaker: "Silvia", it: "Significa pazienza, e mani sporche di argilla. Il tornio non perdona: se ti distraghi, il vaso cade.", es: "Significa paciencia, y manos sucias de arcilla. El torno no perdona: si te distraes, el jarrón cae." },
      { speaker: "Intervistatore", it: "E i giovani? Il mestiere li attira ancora?", es: "¿Y los jóvenes? ¿El oficio todavía los atrae?" },
      { speaker: "Silvia", it: "Più di quanto si pensi. Cercano qualcosa di vero: la fatica, il fuoco, il colore. E poi, quando vendi una ciotola che hai fatto tu, quella è felicità pura.", es: "Más de lo que se piensa. Buscan algo verdadero: el esfuerzo, el fuego, el color. Y luego, cuando vendes un cuenco que has hecho tú, eso es felicidad pura." },
    ],
    questions: ["ex-asc-023", "ex-asc-024"],
  },
  {
    id: "ls-21", level: "B2", title: "Café económico", kind: "dialogo",
    dialogue: [
      { speaker: "Conduttore", it: "Oggi parliamo del costo della vita con l'economista Marta Ricci. Marta, il quadro qual è?", es: "Hoy hablamos del costo de la vida con la economista Marta Ricci. Marta, ¿cuál es el panorama?" },
      { speaker: "Marta", it: "Preoccupante: i prezzi dell'energia sono aumentati e l'inflazione ha eroso i salari. Le famiglie sentono il carrello più pesante.", es: "Preocupante: los precios de la energía han subido y la inflación ha erosionado los salarios. Las familias sienten el carrito más pesado." },
      { speaker: "Conduttore", it: "Che si può fare, concretamente?", es: "¿Qué se puede hacer, concretamente?" },
      { speaker: "Marta", it: "Confrontare i prezzi, sprecare meno, evitare il credito al consumo. E ricordare che risparmiare non è poverty: è libertà.", es: "Comparar precios, desperdiciar menos, evitar el crédito al consumo. Y recordar que ahorrar no es pobreza: es libertad." },
    ],
    questions: ["ex-asc-025", "ex-asc-026"],
  },
  {
    id: "ls-22", level: "C1", title: "El dialecto 2.0", kind: "dialogo",
    dialogue: [
      { speaker: "Studente", it: "Professore, il dialetto sta morendo?", es: "Profesor, ¿el dialecto está muriendo?" },
      { speaker: "Professore", it: "Dipende da cosa intendiamo per «morire». Come lingua di tutti i giorni, sì, si sta ritirando. Ma come lingua dell'affetto, no: resiste.", es: "Depende de qué entendamos por «morir». Como lengua de todos los días, sí, se está replegando. Pero como lengua del cariño, no: resiste." },
      { speaker: "Studente", it: "E la televisione ha davvero unificato l'italiano?", es: "¿Y la televisión realmente unificó el italiano?" },
      { speaker: "Professore", it: "Negli anni Sessanta, sì: ha portato l'italiano nelle case dove si parlava solo dialetto. Oggi fanno lo stesso, ironicamente, i social: i giovani postano in dialetto, e così lo salvano.", es: "En los años sesenta, sí: llevó el italiano a las casas donde solo se hablaba dialecto. Hoy hacen lo mismo, irónicamente, las redes: los jóvenes publican en dialecto, y así lo salvan." },
    ],
    questions: ["ex-asc-027", "ex-asc-028"],
  },
];
