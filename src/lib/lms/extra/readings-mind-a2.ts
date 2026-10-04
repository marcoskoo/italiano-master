import type { MindReading } from "../cambridge-mind";

/* ═══ v9.13 · Letture tematiche A2 · Meditazione, spiritualità, qui e ora,
   relax fisico e mentale — 3 por unidad comunicativa.                     */

export const MIND_A2: Record<string, MindReading[]> = {
  "cu-a2-01": [
    {
      id: "md-a2-01-1", theme: "meditazione", title: "Il mio primo ritiro", titleEs: "Mi primer retiro", minutes: 3,
      paragraphs: [
        { it: "Tre anni fa ho fatto il mio primo ritiro di meditazione. Sono arrivata con la testa piena di pensieri: il lavoro, le fatture, i messaggi sul telefono. Volevo «staccare», ma non sapevo come.", es: "Hace tres años hice mi primer retiro de meditación. Llegué con la cabeza llena de pensamientos: el trabajo, las facturas, los mensajes del teléfono. Quería «desconectar», pero no sabía cómo." },
        { it: "Il primo giorno è stato difficile: le gambe facevano male e la mente correva. Il secondo giorno, qualcosa è cambiato. Ho scoperto che il silenzio non è vuoto: è pieno. Pieno di respiro, di suoni piccoli, di me stessa.", es: "El primer día fue difícil: las piernas dolían y la mente corría. El segundo día, algo cambió. Descubrí que el silencio no es vacío: está lleno. Lleno de respiro, de sonidos pequeños, de mí misma." },
      ],
      predict: { q: "Antes de leer: ¿qué experiencia contará el texto?", options: ["Un viaje de compras a Milán", "Un retiro de meditación y su efecto personal", "Un curso de cocina profesional"], answer: 1, why: "«Il mio primo ritiro» + la voz de quien aprende a meditar." },
      quiz: [
        { q: "Quando ha fatto il suo primo ritiro?", kind: "literal", options: ["Tre anni fa", "Tre giorni fa", "Trent'anni fa"], answer: 0, why: "«Tre anni fa ho fatto il mio primo ritiro»." },
        { q: "Com'era il primo giorno?", kind: "literal", options: ["Difficile: gambe doloranti e mente in corsa", "Perfetto e tranquillo", "Noioso"], answer: 0, why: "«Le gambe facevano male e la mente correva»." },
        { q: "Cosa ha scoperto sul silenzio?", kind: "inferencial", options: ["Que no es vacío sino plenitud de detalles presentes", "Que da mucho miedo", "Que sirve solo para dormir"], answer: 0, why: "«Il silenzio non è vuoto: è pieno» — de respiro, sonidos, uno mismo." },
        { q: "La autora llegó «queriendo desconectar sin saber cómo». Te ha pasado?", kind: "critica", options: ["Sì: desconectar es una habilidad que se aprende, no un botón", "No: desconectar es automático", "El silencio es cosa de gente rara"], answer: 0, why: "El relato muestra que la calma se entrena: el segundo día fue distinto." },
      ],
      vf: [
        { text: "Il primo giorno è stato facile.", value: false, why: "Falso: «è stato difficile»." },
        { text: "Il secondo giorno qualcosa è cambiato.", value: true, why: "La apertura al silencio llegó al segundo día." },
        { text: "Per lei il silenzio è vuoto.", value: false, why: "Falso: «non è vuoto: è pieno»." },
      ],
    },
    {
      id: "md-a2-01-2", theme: "qui e ora", title: "Il momento che ho perso", titleEs: "El momento que perdí", minutes: 3,
      paragraphs: [
        { it: "Ieri sera ho perso un momento importante. Mio figlio mi mostrava un disegno, ma io guardavo il telefono. «Guarda, mamma!» ha detto due volte. La terza volta non ha detto niente: ha messo il disegno sul tavolo ed è andato via.", es: "Ayer por la tarde perdí un momento importante. Mi hijo me mostraba un dibujo, pero yo miraba el teléfono. «¡Mira, mamá!», dijo dos veces. La tercera vez no dijo nada: dejó el dibujo sobre la mesa y se fue." },
        { it: "Oggi ho capito una cosa semplice: il qui e ora non aspetta. Il disegno è ancora sul tavolo, ma il momento di guardarlo insieme è passato. Da oggi, quando qualcuno mi parla, metto giù il telefono. Il presente è un ospite: lo tratto bene.", es: "Hoy entendí algo simple: el aquí y ahora no espera. El dibujo sigue sobre la mesa, pero el momento de mirarlo juntos pasó. Desde hoy, cuando alguien me habla, dejo el teléfono. El presente es un invitado: lo trato bien." },
      ],
      predict: { q: "Antes de leer: ¿qué habrá pasado «ieri sera»?", options: ["Una fiesta divertida", "Un momento perdido por mirar el teléfono", "Un viaje inesperado"], answer: 1, why: "El título habla de un momento perdido: la distracción moderna." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Los momentos presentes no esperan: la atención es un regalo que damos", "Los dibujos de los niños no valen nada", "Hay que prohibir los teléfonos por ley"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El hijo intentó dos veces mostrar el dibujo y la tercera se rindió", "La autora decide dejar el teléfono cuando alguien le habla"],
        distractors: ["El hijo rompió el dibujo enojado", "La autora compró un teléfono nuevo"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Mio figlio mi mostrava un disegno.", "Io guardavo il telefono invece di lui.", "Il presente è un ospite: lo tratto bene.", "Quando qualcuno mi parla, alzo il volume della televisione."],
        intruder: 3, why: "La decisión del texto es lo contrario: bajar el teléfono para atender al presente.",
      },
    },
    {
      id: "md-a2-01-3", theme: "relax fisico", title: "Dopo la maratona", titleEs: "Después de la maratón", minutes: 3,
      paragraphs: [
        { it: "Quando ero giovane, dopo lo sport mi fermavo subito: bere, doccia, correre a casa. Il corpo era una macchina e io il pilota impaziente.", es: "Cuando era joven, después del deporte me detenía enseguida: beber, ducha, correr a casa. El cuerpo era una máquina y yo el piloto impaciente." },
        { it: "Oggi, dopo una lunga camminata, faccio diverso. Mi siedo su una panchina, appoggio le mani sulle gambe e ascolto il corpo: il cuore piano piano si calma, il respiro torna dolce. Prima non conoscevo questo piacere: il piacere di riposare con attenzione.", es: "Hoy, después de una larga caminata, hago algo distinto. Me siento en un banco, apoyo las manos sobre las piernas y escucho el cuerpo: el corazón poco a poco se calma, el respiro vuelve dulce. Antes no conocía este placer: el placer de descansar con atención." },
      ],
      predict: { q: "Antes de leer: ¿qué hará la persona después del ejercicio hoy?", options: ["Correr a casa de inmediato", "Descansar con atención en un banco", "Ir de compras"], answer: 1, why: "«Dopo la maratona» invita a leer qué cambió en su forma de descansar." },
      sequence: {
        instr: "Ordena la nueva rutina después del ejercicio (1 = primero):",
        events: ["Finisce una lunga camminata", "Si siede su una panchina", "Appoggia le mani sulle gambe", "Ascolta il corpo: cuore e respiro si calmano", "Scopre il piacere di riposare con attenzione"],
      },
      listen: {
        intro: "🎧 Escucha el audio y responde:",
        audioIt: "Dopo lo sport, non correre subito a casa. Siediti due minuti su una panchina. Appoggia le mani sulle gambe e ascolta: il cuore si calma piano piano, il respiro torna dolce. Il corpo ti dirà grazie.",
        questions: [
          { q: "Cosa devi fare dopo lo sport?", kind: "literal", options: ["Sederti due minuti su una panchina", "Correre subito a casa", "Fare un'altra gara"], answer: 0, why: "«Siediti due minuti su una panchina»." },
          { q: "Cosa succede al cuore?", kind: "literal", options: ["Si calma piano piano", "Corre sempre più veloce", "Si ferma"], answer: 0, why: "«Il cuore si calma piano piano»." },
          { q: "Chi dirà grazie?", kind: "inferencial", options: ["Il corpo, por el descanso atendido", "El entrenador", "Los vecinos del parque"], answer: 0, why: "«Il corpo ti dirà grazie»: el cuerpo agradecido por la pausa." },
        ],
      },
    },
  ],

  "cu-a2-02": [
    {
      id: "md-a2-02-1", theme: "spiritualità", title: "Quando ero piccola", titleEs: "Cuando era pequeña", minutes: 3,
      paragraphs: [
        { it: "Quando ero piccola, mia nonna mi insegnava una preghiera strana: non chiedeva niente. «Stai zitta e ascolta», diceva. «Dio parla piano». Io non capivo: per me, parlare con Dio era fare richieste.", es: "Cuando era pequeña, mi abuela me enseñaba una oración rara: no pedía nada. «Quédate callada y escucha», decía. «Dios habla bajito». Yo no entendía: para mí, hablar con Dios era hacer peticiones." },
        { it: "Oggi, trent'anni dopo, capisco. La nonna non insegnava una religione: insegnava il silenzio. Nel silenzio ascoltavi gli uccelli, il vento, il tuo cuore. Qualunque cosa ci fosse lassù, prima bisognava fare silenzio dentro.", es: "Hoy, treinta años después, entiendo. La abuela no enseñaba una religión: enseñaba el silencio. En el silencio escuchabas los pájaros, el viento, tu corazón. Cualquier cosa que hubiera allá arriba, primero había que hacer silencio adentro." },
      ],
      predict: { q: "Antes de leer: ¿qué enseñaba la nonna?", options: ["Recetas de cocina antiguas", "Una oración hecha de silencio y escucha", "Canciones de cuna"], answer: 1, why: "«Quando ero piccola» + nonna: un recuerdo espiritual de infancia." },
      quiz: [
        { q: "Com'era la preghiera della nonna?", kind: "literal", options: ["Non chiedeva niente", "Chiedeva molti soldi", "Durava due ore"], answer: 0, why: "«Una preghiera strana: non chiedeva niente»." },
        { q: "Cosa diceva la nonna su Dio?", kind: "literal", options: ["Parla piano", "Grida sempre", "Non esiste"], answer: 0, why: "«Dio parla piano»." },
        { q: "Cosa ha capito l'autrice oggi?", kind: "inferencial", options: ["La nonna enseñaba el silencio interior, no una religión", "La nonna estaba equivocada", "Las oraciones son inútiles"], answer: 0, why: "«Insegnava il silenzio… fare silenzio dentro»." },
        { q: "Hai avuto un adulto que te enseñara a hacer silencio? Qué valor le ves hoy?", kind: "critica", options: ["Mucho valor: el silencio interior es una herramienta de toda la vida", "Ninguno: el silencio es aburrido", "Solo sirve para las personas religiosas"], answer: 0, why: "La autora lo usa treinta años después: el silencio entrenado acompaña siempre." },
      ],
      vf: [
        { text: "Per l'autrice bambina, pregare era fare richieste.", value: true, why: "«Per me, parlare con Dio era fare richieste»." },
        { text: "La nonna gridava le preghiere.", value: false, why: "Falso: al revés, «Dio parla piano»." },
        { text: "L'autrice ha capito la lezione dopo trent'anni.", value: true, why: "«Oggi, trent'anni dopo, capisco»." },
      ],
    },
    {
      id: "md-a2-02-2", theme: "relax mentale", title: "I pensieri di quando ero bambino", titleEs: "Los pensamientos de cuando era niño", minutes: 3,
      paragraphs: [
        { it: "Da bambino, prima di dormire, la mia testa diventava un aeroporto: pensieri che decollavano, pensieri che atterravano, paure che volavano in cerchio. «Non riesco a spegnere la mente», dicevo a mia madre.", es: "De niño, antes de dormir, mi cabeza se volvía un aeropuerto: pensamientos que despegaban, pensamientos que aterrizaban, miedos que volaban en círculo. «No logro apagar la mente», le decía a mi madre." },
        { it: "Mia madre mi ha insegnato un trucco semplice: guardare i pensieri come nuvole. «Non seguirli», diceva, «guardali passare». Oggi insegno lo stesso trucco ai miei figli. Funziona ancora: le nuvole passano, il cielo resta.", es: "Mi madre me enseñó un truco simple: mirar los pensamientos como nubes. «No los sigas», decía, «míralos pasar». Hoy enseño el mismo truco a mis hijos. Todavía funciona: las nubes pasan, el cielo queda." },
      ],
      predict: { q: "Antes de leer: ¿con qué comparará la mente del niño?", options: ["Un jardín ordenado", "Un aeropuerto de pensamientos", "Una caja vacía"], answer: 1, why: "«Pensieri di quando ero bambino»: la mente infantil en movimiento." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Observar los pensamientos como nubes que pasan calma la mente", "Los niños no deben dormir solos", "Hay que eliminar todos los pensamientos de raíz"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["La madre enseñó a mirar los pensamientos sin seguirlos", "El autor hoy enseña el mismo truco a sus hijos"],
        distractors: ["La madre daba medicamentos al niño", "El truco dejó de funcionar al crecer"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Guarda i pensieri come nuvole.", "Non seguirli: guardali passare.", "Le nuvole passano, il cielo resta.", "Devi combattere ogni pensiero fino a vincere, tutta la notte."],
        intruder: 3, why: "El truco es observar sin pelear; combatir pensamientos toda la noche es lo contrario.",
      },
    },
    {
      id: "md-a2-02-3", theme: "qui e ora", title: "L'estate dei dodici anni", titleEs: "El verano de los doce años", minutes: 3,
      paragraphs: [
        { it: "A dodici anni ho passato un'estate intera senza televisione, in campagna dai nonni. Le prime due settimane sono state un dramma: «Che noia!». Poi è successo qualcosa di magico.", es: "A los doce años pasé un verano entero sin televisión, en el campo con los abuelos. Las primeras dos semanas fueron un drama: «¡Qué aburrimiento!». Luego pasó algo mágico." },
        { it: "Ho iniziato a vedere le cose: le formiche che portavano foglie dieci volte più grandi di loro, il sole che cambiava colore tra gli alberi, il suono diverso della pioggia sul tetto. Quell'estate non ho trovato Dio, ma ho trovato il presente. Aveva sempre vissuto lì: aspettava solo la mia attenzione.", es: "Empecé a ver las cosas: las hormigas que cargaban hojas diez veces más grandes que ellas, el sol que cambiaba de color entre los árboles, el sonido distinto de la lluvia en el techo. Ese verano no encontré a Dios, pero encontré el presente. Siempre había vivido allí: solo esperaba mi atención." },
      ],
      predict: { q: "Antes de leer: ¿qué encontrará el niño ese verano?", options: ["Un tesoro enterrado", "El presente, a través de la atención", "Un nuevo videojuego"], answer: 1, why: "El aburrimiento inicial que se transforma suele abrir la puerta a la presencia." },
      sequence: {
        instr: "Ordena la transformación del verano (1 = primero):",
        events: ["Il ragazzo passa l'estate in campagna senza televisione", "Le prime due settimane sono un dramma: «che noia!»", "Inizia a vedere le cose: formiche, luce, pioggia", "Scopre il presente che aspettava la sua attenzione", "Ricorda quell'estate come magica"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Quell'estate ho scoperto le formiche che portavano foglie giganti, il sole che cambiava colore tra gli alberi, la pioggia con il suo suono sul tetto. Non ho trovato Dio: ho trovato il presente. Aspettava solo la mia attenzione.",
        questions: [
          { q: "Cosa portavano le formiche?", kind: "literal", options: ["Foglie giganti", "Zucchero", "Piccole pietre bianche"], answer: 0, why: "«Formiche che portavano foglie giganti»." },
          { q: "Cosa ha trovato, alla fine?", kind: "literal", options: ["Il presente", "Un tesoro d'oro", "Un amico nuovo"], answer: 0, why: "«Non ho trovato Dio: ho trovato il presente»." },
          { q: "Cosa aspettava l'autore?", kind: "inferencial", options: ["Su atención", "El final del verano", "La televisión nueva"], answer: 0, why: "«Aspettava solo la mia attenzione»: el presente estaba allí." },
        ],
      },
    },
  ],

  "cu-a2-03": [
    {
      id: "md-a2-03-1", theme: "relax fisico", title: "La stanza d'albergo perfetta", titleEs: "La habitación de hotel perfecta", minutes: 3,
      paragraphs: [
        { it: "Dopo dieci ore di viaggio, sei arrivato in albergo. Sei stanco, sei nervoso, hai fame. Prima di tutto: non accendere la televisione. Appoggia la valigia, apri la finestra e ascolta i suoni nuovi della città.", es: "Después de diez horas de viaje, llegaste al hotel. Estás cansado, nervioso, con hambre. Antes que nada: no enciendas la televisión. Deja la maleta, abre la ventana y escucha los sonidos nuevos de la ciudad." },
        { it: "Poi distenditi sul letto cinque minuti. Sentì il materasso, senti il cuscino. Il viaggio continua, ma il corpo è già arrivato. «Prima il corpo, poi la città», dice sempre mio padre. È il segreto dei viaggiatori felici.", es: "Luego recuéstate en la cama cinco minutos. Siente el colchón, siente la almohada. El viaje continúa, pero el cuerpo ya llegó. «Primero el cuerpo, luego la ciudad», dice siempre mi padre. Es el secreto de los viajeros felices." },
      ],
      predict: { q: "Antes de leer: ¿qué hará primero al llegar al hotel?", options: ["Encender la televisión", "Abrir la ventana y descansar el cuerpo", "Deshacer toda la maleta"], answer: 1, why: "«La stanza d'albergo perfetta» promete un ritual de llegada consciente." },
      quiz: [
        { q: "Cosa NON devi fare appena arrivato?", kind: "literal", options: ["Accendere la televisione", "Aprire la finestra", "Distenditi sul letto"], answer: 0, why: "«Prima di tutto: non accendere la televisione»." },
        { q: "Quanto tempo devi stare sul letto?", kind: "literal", options: ["Cinque minuti", "Cinque ore", "Cinque secondi"], answer: 0, why: "«Distenditi sul letto cinque minuti»." },
        { q: "Cosa significa «il corpo è già arrivato»?", kind: "inferencial", options: ["Que el cuerpo se ancló en el presente aunque la cabeza siga en el viaje", "Que el cuerpo es más rápido que el tren", "Que el viaje ya terminó del todo"], answer: 0, why: "El cuerpo aterriza primero: la cabeza necesita su rito de llegada." },
        { q: "«Prima il corpo, poi la città». Usarías este consejo?", kind: "critica", options: ["Sì: descansar primero mejora todo el viaje", "No: hay que aprovechar cada minuto turístico", "Solo si el hotel es de lujo"], answer: 0, why: "La llegada consciente evita agotarse el primer día." },
      ],
      vf: [
        { text: "Devi accendere subito la televisione.", value: false, why: "Falso: es lo primero que prohíbe el texto." },
        { text: "Il segreto è «prima il corpo, poi la città».", value: true, why: "Es la frase del padre del autor." },
        { text: "Il testo consiglia dieci ore di sonno appena arrivato.", value: false, why: "Falso: propone cinco minutos de llegada consciente, no diez horas." },
      ],
    },
    {
      id: "md-a2-03-2", theme: "qui e ora", title: "Il primo mattino in vacanza", titleEs: "La primera mañana de vacaciones", minutes: 3,
      paragraphs: [
        { it: "Il primo mattino di vacanza ha un sapore speciale. Non c'è la sveglia, non c'è la routine, non c'è la corsa. C'è solo il lenzuolo caldo, la luce nuova che entra dalla finestra e il suono lontano del mare.", es: "La primera mañana de vacaciones tiene un sabor especial. No hay despertador, no hay rutina, no hay carrera. Solo la sábana tibia, la luz nueva que entra por la ventana y el sonido lejano del mar." },
        { it: "Molti turisti perdono questo momento: aprono gli occhi e prendono il telefono. Ma tu puoi fare diverso. Resta a letto due minuti in più e registra tutto: la luce, i suoni, il corpo che riposa. Le vacanze non iniziano con la prima visita turistica: iniziano con la prima attenzione.", es: "Muchos turistas pierden este momento: abren los ojos y agarran el teléfono. Pero tú puedes hacer algo distinto. Quédate en la cama dos minutos más y registra todo: la luz, los sonidos, el cuerpo que descansa. Las vacaciones no empiezan con la primera visita turística: empiezan con la primera atención." },
      ],
      predict: { q: "Antes de leer: ¿cuándo empiezan las vacaciones de verdad?", options: ["Con la primera visita turística", "Con la primera atención de la mañana", "Con la primera foto"], answer: 1, why: "El título anuncia la primera mañana; la tesis es la atención." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Las vacaciones de verdad empiezan con la atención, no con el itinerario", "Los hoteles deben prohibir los teléfonos", "El mar siempre hace ruido"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["La primera mañana tiene luz nueva, sábana tibia y sonido del mar", "Muchos turistas pierden el momento al abrir el teléfono"],
        distractors: ["El texto dice que hay que dormir hasta el mediodía", "La rutina de vacaciones debe ser idéntica a la de casa"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Resta a letto due minuti in più.", "Registra la luce, i suoni, il corpo che riposa.", "Le vacanze iniziano con la prima attenzione.", "Appena apri gli occhi, controlla subito le mail di lavoro."],
        intruder: 3, why: "El texto critica exactamente eso: abrir los ojos y tomar el teléfono." },
    },
    {
      id: "md-a2-03-3", theme: "relax mentale", title: "Il viaggio dentro il viaggio", titleEs: "El viaje dentro del viaje", minutes: 3,
      paragraphs: [
        { it: "L'anno scorso ho perso l'aereo per Roma. Panico, rabbia, biglietti nuovi costosi. Poi, nell'attesa di sei ore, è successa una cosa strana: mi sono fermato. Ho preso un caffè, ho guardato la gente, ho scritto una lettera.", es: "El año pasado perdí el avión a Roma. Pánico, rabia, billetes nuevos caros. Luego, en la espera de seis horas, pasó algo extraño: me detuve. Tomé un café, miré a la gente, escribí una carta." },
        { it: "Quella lettera, oggi, è uno dei miei ricordi più belli. Il volo era solo un volo; quelle sei ore sono diventate un piccolo viaggio dentro il viaggio. Da quel giorno, quando qualcosa va storto in viaggio, respiro e penso: «Chissà che regalo c'è qui dentro».", es: "Esa carta, hoy, es uno de mis recuerdos más lindos. El vuelo era solo un vuelo; esas seis horas se volvieron un pequeño viaje dentro del viaje. Desde ese día, cuando algo sale mal en un viaje, respiro y pienso: «Qué regalo habrá aquí dentro»." },
      ],
      predict: { q: "Antes de leer: ¿qué pasará tras perder el avión?", options: ["Un desastre total sin consuelo", "Un descubrimiento inesperado en la espera", "Una demanda a la aerolínea"], answer: 1, why: "«Il viaggio dentro il viaggio» sugiere hallazgo en el contratiempo." },
      sequence: {
        instr: "Ordena los hechos (1 = primero):",
        events: ["L'autore perde l'aereo per Roma", "Prova panico e rabbia", "Nell'attesa di sei ore si ferma", "Prende un caffè, guarda la gente, scrive una lettera", "Oggi quella lettera è uno dei ricordi più belli"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Quando un viaggio va storto, respira e aspetta. Nelle ore vuote si nascondono regali: un caffè guardando la gente, una lettera scritta con calma. Il volo era solo un volo; quelle sei ore sono diventate un viaggio dentro il viaggio.",
        questions: [
          { q: "Cosa devi fare quando un viaggio va storto?", kind: "literal", options: ["Respirare e aspettare", "Gridare con tutti", "Tornare subito a casa"], answer: 0, why: "«Respira e aspetta»." },
          { q: "Dove si nascondono i regali?", kind: "literal", options: ["Nelle ore vuote", "Nei duty free", "Nelle valigie perdute"], answer: 0, why: "«Nelle ore vuote si nascondono regali»." },
          { q: "Cosa sono diventate le sei ore di attesa?", kind: "inferencial", options: ["Un viaje dentro del viaje", "Una pérdida total", "Un castigo"], answer: 0, why: "«Un viaggio dentro il viaggio»: el contratiempo transformado." },
        ],
      },
    },
  ],

  "cu-a2-04": [
    {
      id: "md-a2-04-1", theme: "relax mentale", title: "Il mal di testa del lunedì", titleEs: "El dolor de cabeza del lunes", minutes: 3,
      paragraphs: [
        { it: "Ogni lunedì, alle undici, mi veniva il mal di testa. Prendevo una pastiglia e continuavo a lavorare. Un giorno il dottore mi ha fatto una domanda semplice: «Dove tiene le spalle, mentre lavora?». Le spalle erano alle orecchie!", es: "Cada lunes, a las once, me venía el dolor de cabeza. Tomaba una pastilla y seguía trabajando. Un día el doctor me hizo una pregunta simple: «¿Dónde tiene los hombros mientras trabaja?». ¡Los hombros estaban en las orejas!" },
        { it: "Ho imparato una lezione: spesso il dolore non è un nemico, è un messaggio. Il corpo parlava e io non ascoltavo. Adesso, ogni due ore, mi fermo due minuti: respiro, sciolgo le spalle, bevo acqua. Da tre mesi: niente più pastiglie, niente più mal di testa del lunedì.", es: "Aprendí una lección: muchas veces el dolor no es un enemigo, es un mensaje. El cuerpo hablaba y yo no escuchaba. Ahora, cada dos horas, me detengo dos minutos: respiro, suelto los hombros, bebo agua. Desde hace tres meses: ni pastillas, ni dolor de cabeza del lunes." },
      ],
      predict: { q: "Antes de leer: ¿qué descubrirá el autor sobre su dolor de cabeza?", options: ["Que era un mensaje del cuerpo sin escuchar", "Que necesitaba pastillas más fuertes", "Que era alergia al lunes"], answer: 0, why: "El dolor recurrente como señal: la pregunta del doctor lo cambiará todo." },
      quiz: [
        { q: "Quando gli veniva il mal di testa?", kind: "literal", options: ["Ogni lunedì alle undici", "Ogni sabato sera", "Una volta all'anno"], answer: 0, why: "«Ogni lunedì, alle undici»." },
        { q: "Cosa ha chiesto il dottore?", kind: "literal", options: ["Dove tiene le spalle mentre lavora", "Quanto guadagna", "Che colore preferisce"], answer: 0, why: "«Dove tiene le spalle, mentre lavora?»." },
        { q: "Cosa fa adesso ogni due ore?", kind: "literal", options: ["Si ferma due minuti: respiro, spalle, acqua", "Cambia lavoro", "Prende due pastiglie"], answer: 0, why: "«Mi fermo due minuti: respiro, sciolgo le spalle, bevo acqua»." },
        { q: "«Il dolore è un messaggio, non un nemico». Estás de acuerdo?", kind: "critica", options: ["Sì: escuchar el cuerpo previene y cura mejor que tapar el síntoma", "No: las pastillas resuelven todo", "Depende del color de la pastilla"], answer: 0, why: "La experiencia del autor lo confirma: pausas regulares > pastillas." },
      ],
      vf: [
        { text: "Le spalle dell'autore erano rilassate mentre lavorava.", value: false, why: "Falso: «erano alle orecchie» — tensión máxima." },
        { text: "Adesso si ferma due minuti ogni due ore.", value: true, why: "«Ogni due ore, mi fermo due minuti»." },
        { text: "Prende ancora le pastiglie ogni lunedì.", value: false, why: "Falso: «niente più pastiglie» desde hace tres meses." },
      ],
    },
    {
      id: "md-a2-04-2", theme: "meditazione", title: "La ricetta della calma", titleEs: "La receta de la calma", minutes: 3,
      paragraphs: [
        { it: "In farmacia vendono tutto per il corpo: pillole, creme, cerotti. Ma per la mente? Ho chiesto alla farmacista. Lei ha sorriso: «Per la mente, la ricetta migliore non è in scatola. Si chiama respirazione: quattro secondi dentro, sei secondi fuori. Dieci volte. Effetti: calma, sonno migliore, meno ansia. Prezzo: zero euro».", es: "En la farmacia venden todo para el cuerpo: pastillas, cremas, parches. ¿Pero para la mente? Le pregunté a la farmacéutica. Sonrió: «Para la mente, la mejor receta no viene en caja. Se llama respiración: cuatro segundos adentro, seis segundos afuera. Diez veces. Efectos: calma, mejor sueño, menos ansiedad. Precio: cero euros»." },
        { it: "Ho provato a crederle. Funziona. La calma, come la salute, si coltiva ogni giorno: non si compra in scatola. E se la farmacista dice la verità, la medicina più antica del mondo è sempre gratis: il respiro.", es: "Decidí creerle. Funciona. La calma, como la salud, se cultiva cada día: no se compra en caja. Y si la farmacéutica dice la verdad, la medicina más antigua del mundo sigue siendo gratis: el respiro." },
      ],
      predict: { q: "Antes de leer: ¿qué «ricetta» recomendará el texto?", options: ["Un suplemento caro", "La respiración como medicina gratuita", "Una dieta de siete días"], answer: 1, why: "«La ricetta della calma» + farmacia: la receta sorpresa no es química." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["La respiración consciente es una medicina gratuita para la mente", "Las farmacias deben cerrar", "La ansiedad no tiene remedio"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["La técnica: 4 segundos adentro, 6 afuera, diez veces", "La calma se cultiva cada día, no se compra en caja"],
        distractors: ["La farmacéutica vendió un producto carísimo", "El autor no probó la receta"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Quattro secondi dentro, sei secondi fuori.", "Dieci volte al giorno, gratis.", "La medicina più antica del mondo è il respiro.", "Per stare calmo devi comprare una crema speciale in farmacia."],
        intruder: 3, why: "Toda la «ricetta» del texto es gratis y respiratoria; la crema carísima contradice el final: «prezzo zero euro».",
      },
    },
    {
      id: "md-a2-04-3", theme: "relax fisico", title: "Il corpo sotto stress", titleEs: "El cuerpo bajo estrés", minutes: 3,
      paragraphs: [
        { it: "Quando sei sotto stress, il corpo lo sa prima di te. La mascella si stringe, lo stomaco si chiude, il respiro diventa corto e alto, nel petto. Il corpo grida, ma noi abbiamo imparato a non ascoltarlo.", es: "Cuando estás bajo estrés, el cuerpo lo sabe antes que tú. La mandíbula se aprieta, el estómago se cierra, el respiro se vuelve corto y alto, en el pecho. El cuerpo grita, pero nosotros aprendimos a no escucharlo." },
        { it: "Ecco un piccolo esercizio per riconnetterti: appoggia una mano sulla pancia e una sul petto. Respira con la mano sulla pancia: quella deve muoversi, l'altra no. Cinque respiri lenti. Hai appena detto al corpo: «Va tutto bene». Il corpo ti crede, e un po' si scioglie.", es: "Aquí un pequeño ejercicio para reconectarte: apoya una mano en la panza y otra en el pecho. Respira con la mano de la panza: esa debe moverse, la otra no. Cinco respiraciones lentas. Acabas de decirle al cuerpo: «Todo está bien». El cuerpo te cree, y se deshace un poco." },
      ],
      predict: { q: "Antes de leer: ¿quién sabe primero que estás estresado?", options: ["Tu jefe", "Tu cuerpo", "Tu banco"], answer: 1, why: "«Il corpo sotto stress»: el cuerpo como primer detector." },
      sequence: {
        instr: "Ordena el ejercicio de reconexión (1 = primero):",
        events: ["Appoggi una mano sulla pancia e una sul petto", "Respiri facendo muovere solo la mano sulla pancia", "Fai cinque respiri lenti", "Dici al corpo «va tutto bene»", "Il corpo si scioglie un po'"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Sotto stress, la mascella si stringe e il respiro diventa corto. Per riconnetterti, appoggia una mano sulla pancia e respira così, cinque volte, molto lentamente. Il corpo ascolta il respiro: se è lento, capisce che va tutto bene e si scioglie.",
        questions: [
          { q: "Cosa si stringe sotto stress?", kind: "literal", options: ["La mascella", "I piedi", "Le orecchie"], answer: 0, why: "«La mascella si stringe»." },
          { q: "Quante volte respiri?", kind: "literal", options: ["Cinque, lentamente", "Cento, veloci", "Una sola"], answer: 0, why: "«Cinque volte, molto lentamente»." },
          { q: "Cosa capisce il corpo se il respiro è lento?", kind: "inferencial", options: ["Che va tutto bene, y se suelta", "Que hay peligro", "Que es hora de correr"], answer: 0, why: "«Se è lento, capisce che va tutto bene e si scioglie»." },
        ],
      },
    },
  ],

  "cu-a2-05": [
    {
      id: "md-a2-05-1", theme: "relax fisico", title: "Istruzioni per rilassarti", titleEs: "Instrucciones para relajarte", minutes: 3,
      paragraphs: [
        { it: "Siediti comodo, con la schiena appoggiata. Chiudi gli occhi. Adesso ascolta la mia voce dentro di te. Stringi i piedi… forte… e lascia andare. Adesso le gambe… stringi… e lascia andare.", es: "Siéntate cómodo, con la espalda apoyada. Cierra los ojos. Ahora escucha mi voz dentro de ti. Aprieta los pies… fuerte… y suelta. Ahora las piernas… aprieta… y suelta." },
        { it: "Continua così: la pancia, le mani, le spalle, il viso. Ogni parte del corpo si stringe e poi riposa. Alla fine, resta fermo trenta secondi e senti il corpo intero: caldo, pesante, tranquillo. Benvenuto nel relax.", es: "Continúa así: la panza, las manos, los hombros, la cara. Cada parte del cuerpo se aprieta y luego descansa. Al final, quédate quieto treinta segundos y siente el cuerpo entero: tibio, pesado, tranquilo. Bienvenido a la relajación." },
      ],
      predict: { q: "Antes de leer: ¿qué tipo de texto será?", options: ["Una receta de cocina", "Una relajación muscular guiada paso a paso", "Un anuncio de gimnasio"], answer: 1, why: "«Istruzioni per rilassarti» = guía de relajación progresiva." },
      quiz: [
        { q: "Come devi stare seduto?", kind: "literal", options: ["Comodo, con la schiena appoggiata", "Dritto su una sedia dura", "In piedi"], answer: 0, why: "«Siediti comodo, con la schiena appoggiata»." },
        { q: "Quale parte del corpo si stringe per prima?", kind: "literal", options: ["I piedi", "La testa", "Le orecchie"], answer: 0, why: "«Stringi i piedi… e lascia andare»." },
        { q: "Cosa devi fare alla fine?", kind: "inferencial", options: ["Quedarte quieto 30 segundos sintiendo el cuerpo entero", "Aprire subito gli occhi", "Saltare in piedi"], answer: 0, why: "«Resta fermo trenta secondi e senti il corpo intero»." },
        { q: "Esta técnica (tensar y soltar) se llama relajación progresiva. Por qué funciona?", kind: "critica", options: ["Porque el contraste enseña al cuerpo qué es soltar de verdad", "Porque cansa los músculos hasta dormirse", "Es puro placebo sin base"], answer: 0, why: "El contraste tensión/solta recalibra el nivel base de tensión muscular." },
      ],
      vf: [
        { text: "Devi stringere ogni parte del corpo e poi lasciare andare.", value: true, why: "Es el ciclo central: stringi… lascia andare." },
        { text: "Alla fine devi correre subito.", value: false, why: "Falso: hay que quedarse quieto treinta segundos." },
        { text: "Il viso fa parte dell'esercizio.", value: true, why: "«La pancia, le mani, le spalle, il viso»." },
      ],
    },
    {
      id: "md-a2-05-2", theme: "meditazione", title: "Consigli per la tua prima meditazione", titleEs: "Consejos para tu primera meditación", minutes: 3,
      paragraphs: [
        { it: "Vuoi iniziare a meditare? Ecco cinque consigli pratici. Primo: scegli un'ora fissa, la mattina è perfetta. Secondo: siediti sempre nello stesso posto: il posto diventa un amico. Terzo: inizia con cinque minuti soltanto.", es: "¿Quieres empezar a meditar? Aquí cinco consejos prácticos. Primero: elige una hora fija, la mañana es perfecta. Segundo: siéntate siempre en el mismo sitio: el sitio se vuelve un amigo. Tercero: empieza con solo cinco minutos." },
        { it: "Quarto: quando la mente scappa (e scapperà!), non arrabbiarti: riporta il respiro, con gentilezza. Quinto: non aspettate risultati immediati. La meditazione è come piantare un giardino: ogni giorno un po' d'acqua, e poi un giorno… fiori.", es: "Cuarto: cuando la mente escape (¡y escapará!), no te enojes: vuelve al respiro, con amabilidad. Quinto: no esperes resultados inmediatos. La meditación es como plantar un jardín: cada día un poco de agua, y luego un día… flores." },
      ],
      predict: { q: "Antes de leer: ¿qué encontrará el texto?", options: ["Cinco consejos prácticos para empezar a meditar", "La historia de un monje tibetano", "Un análisis científico del cerebro"], answer: 0, why: "El título es explícito: consejos para la primera meditación." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Meditar bien es cuestión de constancia amable, no de perfección", "Hay que meditar tres horas desde el primer día", "Si la mente escapa, la meditación ha fracasado"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Elegir hora y sitio fijos ayuda a crear el hábito", "La meditación es como un jardín: agua diaria y paciencia"],
        distractors: ["El texto dice que la mejor hora es la medianoche", "Hay que enfadarse cuando la mente escapa"],
      },
      intruder: {
        instr: "Encuentra el intruso entre estos consejos del texto:",
        sentences: ["Scegli un'ora fissa, la mattina è perfetta.", "Inizia con cinque minuti soltanto.", "Quando la mente scappa, riporta il respiro con gentilezza.", "Se la mente scappa, abbandona tutto e riprova l'anno prossimo."],
        intruder: 3, why: "El texto enseña amabilidad con uno mismo; abandonar por una mente inquieta es lo contrario." },
    },
    {
      id: "md-a2-05-3", theme: "qui e ora", title: "Il consiglio del maestro", titleEs: "El consejo del maestro", minutes: 3,
      paragraphs: [
        { it: "Un allievo chiese al maestro: «Maestro, come faccio a vivere nel presente? Penso sempre al futuro». Il maestro lo portò in giardino e gli diede un secchio d'acqua. «Annaffia queste piante», disse.", es: "Un alumno preguntó al maestro: «Maestro, ¿cómo hago para vivir en el presente? Pienso siempre en el futuro». El maestro lo llevó al jardín y le dio un balde de agua. «Riega estas plantas», dijo." },
        { it: "L'allievo annaffiò. Le piante bevvero. Il maestro chiese: «Mentre annaffiavi, pensavi al futuro?». «No, maestro. Pensavo alle piante». Il maestro sorrise: «Ecco. Questo è vivere nel presente. Non serve di più».", es: "El alumno regó. Las plantas bebieron. El maestro preguntó: «Mientras regabas, ¿pensabas en el futuro?». «No, maestro. Pensaba en las plantas». El maestro sonrió: «Eso es. Esto es vivir en el presente. No hace falta más»." },
      ],
      predict: { q: "Antes de leer: ¿qué hará el maestro para enseñar el presente?", options: ["Dar una conferencia de dos horas", "Una tarea simple con las manos: regar plantas", "Un examen escrito"], answer: 1, why: "Los maestros zen enseñan con tareas concretas, no con teoría." },
      sequence: {
        instr: "Ordena la enseñanza del maestro (1 = primero):",
        events: ["L'allievo chiede come vivere nel presente", "Il maestro lo porta in giardino con un secchio d'acqua", "L'allievo annaffia le piante", "Il maestro chiede: pensavi al futuro?", "L'allievo capisce: il presente è fare quello che fai"],
      },
      listen: {
        intro: "🎧 Escucha la versión del cuento y responde:",
        audioIt: "Un allievo chiese al maestro come vivere nel presente. Il maestro gli diede un secchio d'acqua e disse: annaffia queste piante. L'allievo annaffiò, e pensava solo alle piante. «Ecco», sorrise il maestro, «questo è il presente. Non serve di più».",
        questions: [
          { q: "Cosa diede il maestro all'allievo?", kind: "literal", options: ["Un secchio d'acqua", "Un libro", "Un orologio"], answer: 0, why: "«Gli diede un secchio d'acqua»." },
          { q: "A cosa pensava l'allievo mentre annaffiava?", kind: "literal", options: ["Solo alle piante", "Alle vacanze", "Al futuro"], answer: 0, why: "«Pensava solo alle piante»." },
          { q: "Qual è la lezione finale?", kind: "inferencial", options: ["El presente es hacer con atención lo que haces", "Hay que regar plantas todos los días", "El futuro no existe"], answer: 0, why: "«Questo è il presente. Non serve di più»." },
        ],
      },
    },
  ],

  "cu-a2-06": [
    {
      id: "md-a2-06-1", theme: "qui e ora", title: "Le stagioni dentro di me", titleEs: "Las estaciones dentro de mí", minutes: 3,
      paragraphs: [
        { it: "Fuori è autunno: le foglie cadono, i giorni si accorciano. Dentro di me, invece, cosa succede? Ho notato una cosa curiosa: anche io ho le mie stagioni. Ci sono settimane di primavera, con energia e idee nuove, e settimane d'inverno, in cui ho bisogno di silenzio e riposo.", es: "Afuera es otoño: las hojas caen, los días se acortan. ¿Dentro de mí, en cambio, qué pasa? Noté algo curioso: yo también tengo mis estaciones. Hay semanas de primavera, con energía e ideas nuevas, y semanas de invierno, en las que necesito silencio y descanso." },
        { it: "Per anni ho combattuto i miei inverni interni: «Devo essere sempre produttivo!». Adesso li aspetto come il contadino aspetta la neve: la neve non è un problema, è una pausa che prepara la terra. Ascolta le tue stagioni: non tutte le settimane devono essere primavera.", es: "Por años combatí mis inviernos internos: «¡Debo ser siempre productivo!». Ahora los espero como el campesino espera la nieve: la nieve no es un problema, es una pausa que prepara la tierra. Escucha tus estaciones: no todas las semanas deben ser primavera." },
      ],
      predict: { q: "Antes de leer: ¿qué compara el texto?", options: ["El clima de Italia y España", "Las estaciones del año con los estados internos", "Dos equipos de fútbol"], answer: 1, why: "«Le stagioni dentro di me»: la metáfora interior de las estaciones." },
      quiz: [
        { q: "Cosa succede nelle settimane d'inverno interno?", kind: "literal", options: ["Serve silenzio e riposo", "Serve fare festa ogni sera", "Serve lavorare il doppio"], answer: 0, why: "«Settimane d'inverno, in cui ho bisogno di silenzio e riposo»." },
        { q: "Come il contadino considera la neve?", kind: "inferencial", options: ["Como pausa que prepara la tierra", "Como desastre total", "Como excusa para no trabajar"], answer: 0, why: "«La neve non è un problema, è una pausa che prepara la terra»." },
        { q: "«Non tutte le settimane devono essere primavera». Qué piensas?", kind: "critica", options: ["Es sano: aceptar los ritmos propios reduce el estrés", "Es falso: hay que ser productivo siempre", "Es bonito pero imposible"], answer: 0, why: "Combatir los ciclos naturales genera agotamiento; aceptarlos, sostenibilidad." },
      ],
      vf: [
        { text: "L'autore ha sempre accettato i suoi inverni interni.", value: false, why: "Falso: «per anni ho combattuto i miei inverni interni»." },
        { text: "Le settimane di primavera portano energia e idee nuove.", value: true, why: "Lo dice el primer párrafo." },
        { text: "La neve prepara la terra.", value: true, why: "Metáfora del campesino: la pausa nutre." },
      ],
    },
    {
      id: "md-a2-06-2", theme: "spiritualità", title: "Il tempo dell'attesa", titleEs: "El tiempo de la espera", minutes: 3,
      paragraphs: [
        { it: "Viviamo nell'epoca della velocità: treni veloci, cibi veloci, amicizie veloci. Ma dentro di noi resta un tempo antico, lento, che non ha fretta. Gli antichi lo chiamavano «il tempo dell'anima».", es: "Vivimos en la época de la velocidad: trenes rápidos, comidas rápidas, amistades rápidas. Pero dentro de nosotros queda un tiempo antiguo, lento, que no tiene prisa. Los antiguos lo llamaban «el tiempo del alma»." },
        { it: "Il tempo dell'anima non guarda l'orologio. Cresce come cresce un albero: invisibile, paziente, vero. Puoi correre quanto vuoi fuori, ma se non ti fermi mai, l'anima resta indietro ad aspettarti. E aspetta. Ha tutto il tempo del mondo.", es: "El tiempo del alma no mira el reloj. Crece como crece un árbol: invisible, paciente, verdadero. Puedes correr cuanto quieras afuera, pero si nunca te detienes, el alma se queda atrás esperándote. Y espera. Tiene todo el tiempo del mundo." },
      ],
      predict: { q: "Antes de leer: ¿qué será «il tempo dell'attesa»?", options: ["La fila del banco", "El tiempo lento del alma frente a la vida acelerada", "El horario del tren"], answer: 1, why: "«Attesa» + el contraste velocidad/interioridad." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Existe un tiempo interior lento que merece ser escuchado", "Hay que correr más para ser felices", "El alma no existe"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Vivimos rodeados de velocidad: trenes, comidas, amistades rápidas", "El tiempo del alma crece como un árbol: invisible y paciente"],
        distractors: ["El texto dice que el alma espera en la estación de tren", "Los antiguos no creían en el tiempo"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Il tempo dell'anima non guarda l'orologio.", "Cresce come cresce un albero: paziente e vero.", "Se non ti fermi mai, l'anima resta indietro ad aspettarti.", "L'anima ha una scadenza: se non arrivi entro venerdì, se ne va per sempre."],
        intruder: 3, why: "El texto dice lo contrario: el alma «ha tutto il tempo del mondo», no plazos." },
    },
    {
      id: "md-a2-06-3", theme: "relax mentale", title: "Sabato: il giorno del vuoto", titleEs: "Sábado: el día del vacío", minutes: 3,
      paragraphs: [
        { it: "Il sabato mattina, Anna fa una cosa strana: niente. Niente programmi, niente liste, niente telefono. Chiama questo giorno «il giorno del vuoto». Il vuoto, all'inizio, faceva paura: «E adesso? Che faccio?».", es: "El sábado por la mañana, Anna hace algo raro: nada. Sin programas, sin listas, sin teléfono. Llama a este día «el día del vacío». El vacío, al principio, daba miedo: «¿Y ahora? ¿Qué hago?»." },
        { it: "Poi ha scoperto che il vuoto è una stanza: all'inizio sembra vuota, ma se resti, si riempie da sola. Prima tornano i pensieri lenti, poi i desideri veri, poi la calma. «Il vuoto», dice Anna, «è la stanza dove torno a trovarmi».", es: "Luego descubrió que el vacío es una habitación: al principio parece vacía, pero si te quedas, se llena sola. Primero vuelven los pensamientos lentos, luego los deseos verdaderos, luego la calma. «El vacío», dice Anna, «es la habitación donde vuelvo a encontrarme»." },
      ],
      predict: { q: "Antes de leer: ¿qué hará Anna el sábado?", options: ["Llenar el día de actividades", "Nada: el día del vacío", "Trabajar desde casa"], answer: 1, why: "«Il giorno del vuoto» = sábado sin programas." },
      sequence: {
        instr: "Ordena lo que pasa cuando Anna se queda en el vacío (1 = primero):",
        events: ["Sabato mattina: nessun programma, nessuna lista", "All'inizio il vuoto fa paura", "Tornano i pensieri lenti", "Poi arrivano i desideri veri", "Infine la calma: il vuoto si riempie da sola"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Prova anche tu un'ora di vuoto: niente programmi, niente telefono. All'inizio fa paura. Poi tornano i pensieri lenti, i desideri veri e infine la calma. Il vuoto non è una stanza vuota: è la stanza dove torni a trovarti.",
        questions: [
          { q: "Cosa devi lasciare durante l'ora di vuoto?", kind: "literal", options: ["Programmi e telefono", "La casa", "I vestiti"], answer: 0, why: "«Niente programmi, niente telefono»." },
          { q: "Cosa torna per primo?", kind: "literal", options: ["I pensieri lenti", "Le mail di lavoro", "La fame"], answer: 0, why: "«Poi tornano i pensieri lenti»." },
          { q: "Cosa è il vuoto, alla fine?", kind: "inferencial", options: ["La stanza dove torni a trovarte", "Una pérdida de tiempo", "Un castigo autoimpuesto"], answer: 0, why: "«È la stanza dove torni a trovarti»." },
        ],
      },
    },
  ],

  "cu-a2-07": [
    {
      id: "md-a2-07-1", theme: "relax mentale", title: "La pausa delle quattro", titleEs: "La pausa de las cuatro", minutes: 3,
      paragraphs: [
        { it: "In ufficio, alle quattro del pomeriggio, succede qualcosa di strano. Le spalle si alzano, gli occhi bruciano, la pazienza finisce. La chiamano «l'ora del lupo». Molti la combattono con il caffè. Io l'ho sostituito con qualcos'altro.", es: "En la oficina, a las cuatro de la tarde, pasa algo extraño. Los hombros se levantan, los ojos arden, la paciencia se acaba. La llaman «la hora del lobo». Muchos la combaten con café. Yo lo reemplacé con otra cosa." },
        { it: "Alle quattro esco cinque minuti sul balcone dell'ufficio. Guardo il cielo, faccio dieci respiri lenti e bevo un bicchiere d'acqua. Il caffè dava energia per mezz'ora; la pausa dà calma per tutto il resto della giornata. Il capo non se n'è mai accorto… o forse sì: da quel giorno mi sorride di più.", es: "A las cuatro salgo cinco minutos al balcón de la oficina. Miro el cielo, hago diez respiraciones lentas y bebo un vaso de agua. El café daba energía por media hora; la pausa da calma por el resto del día. El jefe nunca se dio cuenta… o quizá sí: desde ese día me sonríe más." },
      ],
      predict: { q: "Antes de leer: ¿qué reemplazará el café de las cuatro?", options: ["Otro café más fuerte", "Una pausa de cinco minutos con respiración", "Una siesta de dos horas"], answer: 1, why: "«La pausa delle quattro» anuncia el cambio de hábito." },
      quiz: [
        { q: "Come si chiama quell'ora difficile?", kind: "literal", options: ["L'ora del lupo", "L'ora del gatto", "L'ora della tigre"], answer: 0, why: "«La chiamano l'ora del lupo»." },
        { q: "Cosa dava il caffè?", kind: "literal", options: ["Energia per mezz'ora", "Calma per tutto il giorno", "Sonno"], answer: 0, why: "«Il caffè dava energia per mezz'ora»." },
        { q: "Cosa dà la pausa?", kind: "literal", options: ["Calma per il resto della giornata", "Energia per dieci minuti", "Mal di testa"], answer: 0, why: "«La pausa dà calma per tutto il resto della giornata»." },
        { q: "Reemplazarían el café de la tarde por una pausa consciente? Por qué?", kind: "critica", options: ["Sì: calma duradera > energía prestada con intereses", "No: el café es sagrado", "Da igual: el estrés es el mismo"], answer: 0, why: "La cafeína pospone el cansancio; la pausa lo aborda de raíz." },
      ],
      vf: [
        { text: "L'autore esce cinque minuti sul balcone alle quattro.", value: true, why: "Es su nueva rutina." },
        { text: "Il capo si è arrabbiato per la pausa.", value: false, why: "Falso: «mi sorride di più»." },
        { text: "La pausa è più lunga del caffè.", value: false, why: "Falso: la pausa son cinco minutos; su efecto sí dura más." },
      ],
    },
    {
      id: "md-a2-07-2", theme: "meditazione", title: "La mente del pomodoro", titleEs: "La mente del pomodoro", minutes: 3,
      paragraphs: [
        { it: "Esiste una tecnica di lavoro che si chiama «pomodoro»: 25 minuti di concentrazione, 5 minuti di pausa. Molti la usano per produrre di più. Io l'ho trasformata in una tecnica di meditazione:", es: "Existe una técnica de trabajo que se llama «pomodoro»: 25 minutos de concentración, 5 minutos de pausa. Muchos la usan para producir más. Yo la transformé en una técnica de meditación:" },
        { it: "nei 25 minuti faccio una cosa sola, con tutta me stessa; nei 5 minuti non faccio niente: respiro, mi alzo, guardo dalla finestra. Niente telefono: il telefono è il pomodoro avvelenato. Dopo quattro cicli, la mente è limpida e il lavoro è fatto. Concentrazione e vuoto: due metà dello stesso pomodoro.", es: "en los 25 minutos hago una sola cosa, con toda mí; en los 5 minutos no hago nada: respiro, me levanto, miro por la ventana. Nada de teléfono: el teléfono es el pomodoro envenenado. Después de cuatro ciclos, la mente está límpida y el trabajo está hecho. Concentración y vacío: dos mitades del mismo pomodoro." },
      ],
      predict: { q: "Antes de leer: ¿qué hará la autora con la técnica pomodoro?", options: ["La usará para meditar: concentración + vacío", "La venderá como curso online", "La combinará con el teléfono"], answer: 0, why: "«La mente del pomodoro» = técnica de trabajo vuelta meditación." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Alternar concentración plena y pausa vacía mejora el trabajo y la mente", "Hay que trabajar sin parar cuatro horas", "El teléfono es la mejor herramienta de pausa"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["En los 5 minutos no hace nada: respira, se levanta, mira por la ventana", "Llama al teléfono «el pomodoro envenenado»"],
        distractors: ["La técnica original dura 25 horas", "La autora hace ocho ciclos seguidos sin beber agua"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["25 minuti di concentrazione, 5 minuti di pausa.", "Nei 5 minuti respiro e guardo dalla finestra.", "Concentrazione e vuoto: due metà dello stesso pomodoro.", "Durante la pausa rispondo a tutte le notifiche e controllo tre social."],
        intruder: 3, why: "El texto llama al teléfono «pomodoro avvelenato»: las notificaciones rompen el vacío." },
    },
    {
      id: "md-a2-07-3", theme: "relax fisico", title: "L'ufficio del respiro", titleEs: "La oficina del respiro", minutes: 3,
      paragraphs: [
        { it: "Il mio ufficio è open space: ventidue persone, quattro stampanti, un frigorifero rumoroso. Dove si medita, in questo casino? Ho trovato tre luoghi segreti.", es: "Mi oficina es open space: veintidós personas, cuatro impresoras, un refrigerador ruidoso. ¿Dónde se medita, en este desorden? Encontré tres lugares secretos." },
        { it: "Primo: le scale antincendio, fresche e silenziose. Secondo: il bagno grande dell'ultimo piano, con la luce bassa (serio!). Terzo: la mia sedia, con gli auricolari e una musica di pioggia. Il luogo perfetto non esiste: si crea. Il respiro trova sempre una casa, anche in un open space.", es: "Primero: las escaleras de emergencia, frescas y silenciosas. Segundo: el baño grande del último piso, con luz baja (¡en serio!). Tercero: mi silla, con auriculares y música de lluvia. El lugar perfecto no existe: se crea. El respiro siempre encuentra una casa, incluso en un open space." },
      ],
      predict: { q: "Antes de leer: ¿dónde meditará el autor en la oficina?", options: ["En tres lugares «secretos» que descubre", "Solo en casa, nunca en la oficina", "En la sala de reuniones ocupada"], answer: 0, why: "«L'ufficio del respiro» + open space: la búsqueda de rincones." },
      sequence: {
        instr: "Ordena el descubrimiento de los lugares (1 = primero):",
        events: ["L'autore lavora in un open space rumoroso", "Cerca un posto dove meditare", "Trova le scale antincendio, fresche e silenziose", "Trova il bagno dell'ultimo piano con la luce bassa", "Scopre che la sua sedia con auricolari è già un monastero"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "In un ufficio open space, il posto per respirare si crea, non si trova. Le scale antincendio sono fresche e silenziose. Anche un bagno con la luce bassa può diventare un tempio per due minuti. E la tua sedia, con auricolari e musica di pioggia, è già un piccolo monastero.",
        questions: [
          { q: "Il posto per respirare come si trova?", kind: "literal", options: ["Si crea, non si trova", "Si compra", "Si eredita"], answer: 0, why: "«Il posto per respirare si crea, non si trova»." },
          { q: "Com'è una sedia con auricolari e musica di pioggia?", kind: "literal", options: ["Un piccolo monastero", "Un ristorante", "Una discoteca"], answer: 0, why: "«È già un piccolo monastero»." },
          { q: "Cosa può diventare un bagno con luce bassa?", kind: "inferencial", options: ["Un tempio por dos minutos", "Un depósito", "Un lugar prohibido"], answer: 0, why: "«Può diventare un tempio per due minuti»." },
        ],
      },
    },
  ],

  "cu-a2-08": [
    {
      id: "md-a2-08-1", theme: "qui e ora", title: "La voce nell'orecchio", titleEs: "La voz en el oído", minutes: 3,
      paragraphs: [
        { it: "Al telefono manca una cosa importante: il viso. Non vedi se l'altro sorride, se è stanco, se sta piangendo. Resta solo la voce. E la voce, se l'ascolti davvero, dice tutto.", es: "Al teléfono falta algo importante: el rostro. No ves si el otro sonríe, si está cansado, si está llorando. Queda solo la voz. Y la voz, si la escuchas de verdad, lo dice todo." },
        { it: "Mio nonno, che faceva il sensale, ascoltava le voci così: «Prima dei saluti, senti il respiro. Se il respiro è veloce, la persona ha fretta o paura. Se è lento, è calma o triste». Prova anche tu alla prossima telefonata: ascolta il respiro prima delle parole. È una meditazione con il telefono in mano.", es: "Mi abuelo, que era casamentero, escuchaba las voces así: «Antes de los saludos, escucha el respiro. Si el respiro es rápido, la persona tiene prisa o miedo. Si es lento, está calmada o triste». Prueba tú también en la próxima llamada: escucha el respiro antes de las palabras. Es una meditación con el teléfono en la mano." },
      ],
      predict: { q: "Antes de leer: ¿qué enseña el nonno sobre el teléfono?", options: ["A hablar más rápido", "A escuchar el respiro detrás de las palabras", "A colgar antes de saludar"], answer: 1, why: "«La voce nell'orecchio»: escuchar profundamente en llamadas." },
      quiz: [
        { q: "Cosa manca al telefono?", kind: "literal", options: ["Il viso", "I numeri", "La batteria"], answer: 0, why: "«Al telefono manca una cosa importante: il viso»." },
        { q: "Che lavoro faceva il nonno?", kind: "literal", options: ["Il sensale", "Il barbiere", "Il pilota"], answer: 0, why: "«Che faceva il sensale»." },
        { q: "Cosa indica un respiro veloce?", kind: "inferencial", options: ["Prisa o miedo", "Alegría máxima", "Que la llamada es cara"], answer: 0, why: "«Se il respiro è veloce, la persona ha fretta o paura»." },
        { q: "Escuchar el respiro del otro antes de las palabras: lo intentarías?", kind: "critica", options: ["Sì: escucha activa mejora la conversación y la presencia", "No: suena a truco de vendedor", "Es imposible por teléfono"], answer: 0, why: "La escucha atenta es presencia aplicada: funciona en cualquier canal." },
      ],
      vf: [
        { text: "La voce può dire tutto, se l'ascolti davvero.", value: true, why: "Es la tesis del primer párrafo." },
        { text: "Un respiro lento significa siempre felicidad.", value: false, why: "Falso: puede ser calma o tristeza." },
        { text: "Il nonno ascoltava il respiro prima dei saluti.", value: true, why: "«Prima dei saluti, senti il respiro»." },
      ],
    },
    {
      id: "md-a2-08-2", theme: "relax mentale", title: "Prima di rispondere, conta fino a tre", titleEs: "Antes de responder, cuenta hasta tres", minutes: 3,
      paragraphs: [
        { it: "Le mail arrabbiate sono come i temporali: arrivano all'improvviso, fanno rumore, spaventano. La tentazione è rispondere subito, con un altro temporale. Ma esiste una via diversa.", es: "Los correos enojados son como las tormentas: llegan de repente, hacen ruido, asustan. La tentación es responder de inmediato, con otra tormenta. Pero existe una vía distinta." },
        { it: "Prima di rispondere, chiudi gli occhi e conta fino a tre. Nel primo secondo, respira. Nel secondo, chiediti: «Cosa c'è davvero sotto questa rabbia?». Nel terzo, decidi: risposta o silenzio. Tre secondi bastano per non mandare tempeste per posta. La calma, anche via mail, si nota. E si contagia.", es: "Antes de responder, cierra los ojos y cuenta hasta tres. En el primer segundo, respira. En el segundo, pregúntate: «¿Qué hay de verdad debajo de esta rabia?». En el tercero, decide: respuesta o silencio. Tres segundos bastan para no enviar tormentas por correo. La calma, también por mail, se nota. Y se contagia." },
      ],
      predict: { q: "Antes de leer: ¿qué hará el texto antes de responder un mail enojado?", options: ["Contar hasta tres con atención", "Responder doblemente enojado", "Reenviarlo al jefe"], answer: 0, why: "El título lo dice: una pausa de tres segundos conscientes." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Una pausa consciente de tres segundos evita respuestas destructivas", "Hay que responder siempre de inmediato", "Las mail arrabbiate no merecen respuesta nunca"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Las mails enojadas se comparan con tormentas", "En el segundo segundo te preguntas qué hay bajo la rabia"],
        distractors: ["El texto recomienda escribir la respuesta en mayúsculas", "Hay que contar hasta mil antes de responder"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Nel primo secondo, respira.", "Nel secondo, chiediti cosa c'è sotto la rabbia.", "La calma, anche via mail, si nota e si contagia.", "Rispondi subito con parole cattive e TUTTE LE MAIUSCOLE."],
        intruder: 3, why: "Es exactamente la reacción que el texto quiere evitar." },
    },
    {
      id: "md-a2-08-3", theme: "meditazione", title: "La suoneria come campana", titleEs: "El timbre como campana", minutes: 3,
      paragraphs: [
        { it: "Nei monasteri, una campana segna i momenti della giornata: preghiera, lavoro, pasto, riposo. Ogni volta che la campana suona, i monaci si fermano e respirano. Nel mondo moderno abbiamo perso le campane… o forse no?", es: "En los monasterios, una campana marca los momentos del día: oración, trabajo, comida, descanso. Cada vez que la campana suena, los monjes se detienen y respiran. En el mundo moderno perdimos las campanas… ¿o quizá no?" },
        { it: "La suoneria del telefono è la nostra campana. Ogni chiamata è un invito: fermati, respira, poi rispondi. Anche la vibrazione lo è. Da una settimana trasformo ogni squillo in tre respiri. Il telefono, da padrone rumoroso, è diventato un maestro di presenza.", es: "El timbre del teléfono es nuestra campana. Cada llamada es una invitación: detente, respira, luego responde. También la vibración lo es. Desde hace una semana transformo cada timbre en tres respiraciones. El teléfono, de amo ruidoso, se volvió un maestro de presencia." },
      ],
      predict: { q: "Antes de leer: ¿qué será la «campana» moderna?", options: ["La campana de la iglesia del barrio", "La suoneria del teléfono", "El despertador"], answer: 1, why: "«Suoneria come campana»: el timbre del teléfono como señal de presencia." },
      sequence: {
        instr: "Ordena la práctica del teléfono-campana (1 = primero):",
        events: ["Il telefono squilla", "Ti fermi e fai tre respiri", "Torni presente per un momento", "Solo dopo rispondi", "Il telefono diventa un maestro di presenza"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Nei monasteri la campana segna i momenti della giornata. Nel mondo moderno, la nostra campana è la suoneria. Quando il telefono squilla, fermati: tre respiri, e solo dopo rispondi. Così ogni chiamata diventa una piccola meditazione.",
        questions: [
          { q: "Cosa segna la campana nei monasteri?", kind: "literal", options: ["I momenti della giornata", "Le partite di calcio", "La fine del mondo"], answer: 0, why: "«Segna i momenti della giornata»." },
          { q: "Cosa devi fare quando squilla il telefono?", kind: "literal", options: ["Tre respiri e poi rispondere", "Rispondere subito urlando", "Spegnere il telefono"], answer: 0, why: "«Tre respiri, e solo dopo rispondi»." },
          { q: "Cosa diventa ogni chiamata?", kind: "inferencial", options: ["Una pequeña meditación", "Una interrupción", "Un problema"], answer: 0, why: "«Ogni chiamata diventa una piccola meditazione»." },
        ],
      },
    },
  ],

  "cu-a2-09": [
    {
      id: "md-a2-09-1", theme: "meditazione", title: "Yoga o meditazione?", titleEs: "¿Yoga o meditación?", minutes: 3,
      paragraphs: [
        { it: "Yoga e meditazione: sembrano gemelli, ma sono fratelli diversi. Lo yoga lavora soprattutto con il corpo: posizioni, respiro, flessibilità. La meditazione lavora soprattutto con la mente: attenzione, osservazione, calma.", es: "Yoga y meditación: parecen gemelos, pero son hermanos distintos. El yoga trabaja sobre todo con el cuerpo: posturas, respiración, flexibilidad. La meditación trabaja sobre todo con la mente: atención, observación, calma." },
        { it: "Quale è meglio? Domanda sbagliata! È come chiedere: è meglio l'acqua o il sonno? Dipende da cosa ti serve. Il mio consiglio: prova tutti e due per un mese. Il corpo e la mente sono amici da sempre: alla fine, si ritrovano.", es: "¿Cuál es mejor? ¡Pregunta equivocada! Es como preguntar: ¿es mejor el agua o el sueño? Depende de qué necesites. Mi consejo: prueba ambos por un mes. El cuerpo y la mente son amigos de siempre: al final, se reencuentran." },
      ],
      predict: { q: "Antes de leer: ¿qué comparará el texto?", options: ["Yoga y meditación: dos caminos hermanos", "Dos marcas de ropa deportiva", "Dos ciudades italianas"], answer: 0, why: "El título plantea una comparación clásica de bienestar." },
      quiz: [
        { q: "Con cosa lavora soprattutto lo yoga?", kind: "literal", options: ["Con il corpo", "Con i numeri", "Con la musica"], answer: 0, why: "«Lo yoga lavora soprattutto con il corpo»." },
        { q: "Con cosa lavora la meditazione?", kind: "literal", options: ["Con la mente", "Con i pesi", "Con il cibo"], answer: 0, why: "«La meditazione lavora soprattutto con la mente»." },
        { q: "Perché «quale è meglio» è una domanda sbagliata?", kind: "inferencial", options: ["Porque responden a necesidades distintas, como agua y sueño", "Porque ambos son inútiles", "Porque depende del precio"], answer: 0, why: "La comparación agua/sueño muestra que sirven para cosas diferentes." },
        { q: "El autor sugiere probar ambos un mes. Es buen consejo metodológico?", kind: "critica", options: ["Sì: la experiencia personal decide mejor que la teoría", "No: hay que elegir por moda", "Mejor no probar nada"], answer: 0, why: "La prueba empírica supera las opiniones genéricas." },
      ],
      vf: [
        { text: "Yoga e meditazione sono identici.", value: false, why: "Falso: son «fratelli diversi» con focos distintos." },
        { text: "Il corpo e la mente, alla fine, si ritrovano.", value: true, why: "Es la conclusión del texto." },
        { text: "Il testo dice che lo yoga è meglio della meditazione.", value: false, why: "Falso: «domanda sbagliata», no hay ganador." },
      ],
    },
    {
      id: "md-a2-09-2", theme: "relax fisico", title: "Bagno caldo o doccia fredda?", titleEs: "¿Baño caliente o ducha fría?", minutes: 3,
      paragraphs: [
        { it: "Due modi di rilassare il corpo, due filosofie. Il bagno caldo è come una nonna: ti accoglie, ti scalda, ti dice «riposa». I muscoli si sciolgono, la pelle si ammorbidisce, la mente segue il corpo nel riposo.", es: "Dos maneras de relajar el cuerpo, dos filosofías. El baño caliente es como una abuela: te acoge, te calienta, te dice «descansa». Los músculos se sueltan, la piel se ablanda, la mente sigue al cuerpo en el descanso." },
        { it: "La doccia fredda è come un maestro severo: ti sveglia, ti scuote, ti dice «sei vivo!». Il respiro si apre, la pelle canta, la mente diventa chiara come il ghiaccio. Quale scegliere? Sera: bagno caldo. Mattina: doccia fredda. Il corpo ha bisogno di entrambe le voci.", es: "La ducha fría es como un maestro severo: te despierta, te sacude, te dice «¡estás vivo!». El respiro se abre, la piel canta, la mente se vuelve clara como el hielo. ¿Cuál elegir? Noche: baño caliente. Mañana: ducha fría. El cuerpo necesita ambas voces." },
      ],
      predict: { q: "Antes de leer: ¿qué contraste presentará el texto?", options: ["Baño caliente (noche) vs ducha fría (mañana)", "Dos tipos de jabón", "Playa vs montaña"], answer: 0, why: "El título opone dos rituales de agua con efectos opuestos." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["El agua caliente relaja y la fría despierta: el cuerpo necesita ambas", "Las duchas frías son peligrosas siempre", "Los baños calientes son un invento moderno"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El baño caliente se compara con una abuela que acoge", "La ducha fría despierta y aclara la mente como el hielo"],
        distractors: ["El texto dice que hay que evitar el agua en invierno", "La ducha fría debe durar una hora"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Il bagno caldo è come una nonna: ti accoglie.", "La doccia fredda ti sveglia e ti dice «sei vivo».", "Il corpo ha bisogno di entrambe le voci.", "La sera è consigliabile una doccia fredda di dieci minuti."],
        intruder: 3, why: "El texto asigna la ducha fría a la mañana y el baño caliente a la noche: el intruso invierte el consejo." },
    },
    {
      id: "md-a2-09-3", theme: "relax mentale", title: "App di calma o quaderno?", titleEs: "¿App de calma o cuaderno?", minutes: 3,
      paragraphs: [
        { it: "Per rilassarmi ho provato due strade: un'app di meditazione e un quaderno di carta. L'app aveva campane, voci gentili e statistiche: «7 giorni di fila!». Il quaderno aveva pagine bianche e il rumore della penna.", es: "Para relajarme probé dos caminos: una app de meditación y un cuaderno de papel. La app tenía campanas, voces amables y estadísticas: «¡7 días seguidos!». El cuaderno tenía páginas en blanco y el ruido de la pluma." },
        { it: "L'app mi calmava… quando non mi stressava con i record da battere. Il quaderno non mi ha mai giudicato. Dopo un mese, l'ho cancellata e sono rimasto con la carta. Ma attenzione: per un mio amico è successo l'opposto. Lo strumento conta meno della costanza: scegli il tuo e resta.", es: "La app me calmaba… cuando no me estresaba con récords que batir. El cuaderno nunca me juzgó. Después de un mes, la borré y me quedé con el papel. Pero cuidado: a un amigo mío le pasó lo contrario. La herramienta importa menos que la constancia: elige la tuya y quédate." },
      ],
      predict: { q: "Antes de leer: ¿qué comparación hará el autor?", options: ["App de meditación vs cuaderno de papel", "Dos teléfonos nuevos", "Dos gimnasios"], answer: 0, why: "«App di calma o quaderno»: la comparación está en el título." },
      sequence: {
        instr: "Ordena la experiencia del autor (1 = primero):",
        events: ["Prova un'app di meditazione con campane e statistiche", "L'app a volte lo stressa con i record", "Prova anche un quaderno di carta", "Dopo un mese cancella l'app", "Resta con la carta, ma ricorda: conta la costanza"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Lo strumento conta meno della costanza. Un'app con campane e statistiche può aiutarti, o stressarti con i record da battere. Un quaderno di carta non giudica mai. Scegli il tuo strumento e resta: la calma ama la ripetizione.",
        questions: [
          { q: "Cosa conta meno, secondo l'audio?", kind: "literal", options: ["Lo strumento", "La costanza", "Il colore del quaderno"], answer: 0, why: "«Lo strumento conta meno della costanza»." },
          { q: "Cosa può fare l'app con i record?", kind: "literal", options: ["Stressarti", "Guarirti", "Addormentarti"], answer: 0, why: "«Stressarti con i record da battere»." },
          { q: "Cosa ama la calma?", kind: "inferencial", options: ["La repetición constante", "Las novedades diarias", "Las aplicaciones caras"], answer: 0, why: "«La calma ama la ripetizione»." },
        ],
      },
    },
  ],

  "cu-a2-10": [
    {
      id: "md-a2-10-1", theme: "meditazione", title: "Il risotto della pazienza", titleEs: "El risotto de la paciencia", minutes: 3,
      paragraphs: [
        { it: "Mia zia Rosa faceva il risotto come una cerimonia. «Il riso non ha fretta», diceva, «e nemmeno io». Mescolava piano, aggiungeva il brodo un mestolo alla volta, assaggiava, aspettava.", es: "Mi tía Rosa hacía el risotto como una ceremonia. «El arroz no tiene prisa», decía, «y yo tampoco». Removía despacio, agregaba el caldo un cucharón a la vez, probaba, esperaba." },
        { it: "Da lei ho imparato che cucinare è meditare in piedi: le mani occupate, la mente quieta. Quando mescoli il risotto per venti minuti, senza telefono, senza corsa, succede una cosa rara: ti rilassi e poi mangi il risultato della tua calma. Il risotto della zia Rosa era buono perché era calmo.", es: "De ella aprendí que cocinar es meditar de pie: las manos ocupadas, la mente quieta. Cuando revuelves el risotto durante veinte minutos, sin teléfono, sin prisa, pasa algo raro: te relajas y luego te comes el resultado de tu calma. El risotto de la tía Rosa era bueno porque estaba tranquilo." },
      ],
      predict: { q: "Antes de leer: ¿qué enseñaba la zia Rosa además de cocina?", options: ["La paciencia: cocinar como meditación", "Atajos para cocinar rápido", "Marketing de restaurantes"], answer: 0, why: "«Il risotto della paziencia»: la cocina lenta como práctica." },
      quiz: [
        { q: "Come mescolava il risotto la zia?", kind: "literal", options: ["Piano, con calma", "Velocissimo", "Con il frullatore"], answer: 0, why: "«Mescolava piano»." },
        { q: "Cosa significa «cucinare è meditare in piedi»?", kind: "inferencial", options: ["Manos ocupadas y mente quieta: presencia en la acción", "Hay que dormirse mientras se cocina", "Cocinar de pie es más sano"], answer: 0, why: "La definición viene en el propio texto." },
        { q: "Perché il risotto della zia era buono?", kind: "literal", options: ["Perché era calmo", "Perché era costoso", "Perché era veloce"], answer: 0, why: "«Era buono perché era calmo»." },
        { q: "Qué otras actividades cotidianas podrían ser «meditación en pie»?", kind: "critica", options: ["Barrer, regar, lavar: cualquier tarea hecha con atención", "Solo cocinar platos italianos", "Ninguna: meditar exige sentarse"], answer: 0, why: "La presencia se puede practicar en cualquier acción repetitiva." },
      ],
      vf: [
        { text: "La zia aggiungeva il brodo tutto insieme.", value: false, why: "Falso: «un mestolo alla volta»." },
        { text: "Cucinare può essere una forma di meditazione.", value: true, why: "Es la tesis central del texto." },
        { text: "Il risotto richiede venti minuti di attenzione.", value: true, why: "«Mescoli il risotto per venti minuti»." },
      ],
    },
    {
      id: "md-a2-10-2", theme: "qui e ora", title: "Cucinare insieme, stare insieme", titleEs: "Cocinar juntos, estar juntos", minutes: 3,
      paragraphs: [
        { it: "Quando cuciniamo insieme, succede una piccola magia sociale. Uno taglia, uno mescola, uno apparecchia. Le mani lavorano e la conversazione si rilassa: parlare è più facile quando le mani sono occupate.", es: "Cuando cocinamos juntos, sucede una pequeña magia social. Uno corta, uno remueve, uno pone la mesa. Las manos trabajan y la conversación se relaja: hablar es más fácil cuando las manos están ocupadas." },
        { it: "Nelle cucine italiane, i problemi di famiglia si parlano sopra una pentola, non sopra un tavolo di riunione. Il sugo che bolle piano dà il tempo giusto alle parole. La prossima volta che devi dire qualcosa di difficile, invita quella persona a cucinare con te: le parole trovano la strada tra gli odori del soffritto.", es: "En las cocinas italianas, los problemas de familia se hablan sobre una olla, no sobre una mesa de reunión. El ragù que hierve despacio da el tiempo justo a las palabras. La próxima vez que tengas que decir algo difícil, invita a esa persona a cocinar contigo: las palabras encuentran el camino entre los olores del sofrito." },
      ],
      predict: { q: "Antes de leer: ¿por qué cocinar juntos ayuda a hablar?", options: ["Las manos ocupadas relajan la conversación", "Porque nadie habla con la boca llena", "Porque la cocina es más lujosa"], answer: 0, why: "«Cucinare insieme» + conversación: la magia social de la cocina." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Cocinar juntos facilita las conversaciones difíciles", "La cocina italiana es la mejor del mundo", "Hay que evitar hablar mientras se cocina"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Hablar es más fácil cuando las manos están ocupadas", "El ragù que hierve lento da el tiempo justo a las palabras"],
        distractors: ["El texto dice que los problemas se resuelven comiendo pasta en silencio", "Hay que discutir siempre en la mesa de reuniones"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Le mani lavorano e la conversazione si rilassa.", "I problemi di famiglia si parlano sopra una pentola.", "Le parole trovano la strada tra gli odori del soffritto.", "Per dire qualcosa di difficile, manda un messaggio e scappa in camera tua."],
        intruder: 3, why: "El texto propone justamente lo contrario: cocinar juntos para conversar." },
    },
    {
      id: "md-a2-10-3", theme: "spiritualità", title: "Il pane del sabato", titleEs: "El pan del sábado", minutes: 3,
      paragraphs: [
        { it: "Ogni sabato mattina, la famiglia Levi accende il forno e il cuore. L'odore del pane riempie la casa prima ancora delle parole. «Il pane», dice il nonno, «è la preghiera più antica: farina, acqua, tempo e attenzione».", es: "Cada sábado por la mañana, la familia Levi enciende el horno y el corazón. El olor del pan llena la casa antes que las palabras. «El pan», dice el abuelo, «es la oración más antigua: harina, agua, tiempo y atención»." },
        { it: "Mentre l'impasto lievita, la famiglia non fa niente di speciale. Aspetta. E l'attesa, in una settimana di corsa, è già una cerimonia. Quando il pane esce dal forno, ogni persona riceve la sua fetta calda: un piccolo «ti voglio bene» che si può mangiare.", es: "Mientras la masa leuda, la familia no hace nada especial. Espera. Y la espera, en una semana de carrera, ya es una ceremonia. Cuando el pan sale del horno, cada persona recibe su rebanada tibia: un pequeño «te quiero» que se puede comer." },
      ],
      predict: { q: "Antes de leer: ¿qué será el pan del sábado?", options: ["Una receta rápida de compra", "Un ritual familiar semanal con espera compartida", "Una panadería famosa"], answer: 1, why: "«Il pane del sabato» + famiglia: ceremonia doméstica." },
      sequence: {
        instr: "Ordena el ritual del sábado (1 = primero):",
        events: ["La famiglia Levi accende il forno", "Prepara l'impasto: farina, acqua, tempo", "L'impasto lievita e la famiglia aspetta", "Il pane esce dal forno", "Ogni persona riceve la sua fetta calda"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Il pane è la preghiera più antica: farina, acqua, tempo e attenzione. Sabato mattina la famiglia impasta e poi aspetta. L'attesa è già una cerimonia. E quando il pane esce dal forno, ogni fetta calda è un piccolo «ti voglio bene» che si può mangiare.",
        questions: [
          { q: "Di cosa è fatta «la preghiera più antica»?", kind: "literal", options: ["Farina, acqua, tempo e attenzione", "Pietre e fiori", "Parole latine"], answer: 0, why: "«Farina, acqua, tempo e attenzione»." },
          { q: "Cosa fa la famiglia mentre l'impasto lievita?", kind: "literal", options: ["Aspetta", "Dorme", "Guarda la televisione"], answer: 0, why: "«La famiglia aspetta»." },
          { q: "Cosa è la fetta calda di pane?", kind: "inferencial", options: ["Un «ti voglio bene» que se puede comer", "Solo comida", "Un premio por portarse bien"], answer: 0, why: "«Un piccolo ti voglio bene che si può mangiare»." },
        ],
      },
    },
  ],

  "cu-a2-11": [
    {
      id: "md-a2-11-1", theme: "qui e ora", title: "La promessa dei venti minuti", titleEs: "La promesa de los veinte minutos", minutes: 3,
      paragraphs: [
        { it: "Il primo gennaio ho fatto una promessa diversa dal solito. Niente palestra, niente dieta: «Ogni giorno, venti minuti di quiete». Venti minuti sembrano pochi. Ma la promessa piccola è l'unica che mantengo.", es: "El primero de enero hice una promesa distinta de lo habitual. Ni gimnasio, ni dieta: «Cada día, veinte minutos de quietud». Veinte minutos parecen pocos. Pero la promesa pequeña es la única que cumplo." },
        { it: "Sono passati tre mesi. Non ho saltato neanche un giorno, e non per forza di volontà: semplicemente, quei venti minuti sono diventati il mio posto. Il segreto? Ho promesso poco. Le promesse giganti spaventano; quelle piccole accompagnano. Il futuro si costruisce con mattoni piccoli: venti minuti al giorno.", es: "Han pasado tres meses. No he saltado ni un día, y no por fuerza de voluntad: simplemente, esos veinte minutos se volvieron mi lugar. ¿El secreto? Prometí poco. Las promesas gigantes asustan; las pequeñas acompañan. El futuro se construye con ladrillos pequeños: veinte minutos al día." },
      ],
      predict: { q: "Antes de leer: ¿qué promesa hará el autor?", options: ["Veinte minutos diarios de quietud", "Correr un maratón", "Aprender cinco idiomas"], answer: 0, why: "«La promessa dei venti minuti»: pequeña y sostenible." },
      quiz: [
        { q: "Cosa ha promesso l'autore?", kind: "literal", options: ["Venti minuti di quiete al giorno", "Un'ora di palestra", "Niente dolci per un anno"], answer: 0, why: "«Ogni giorno, venti minuti di quiete»." },
        { q: "Quanto è durata la promessa finora?", kind: "literal", options: ["Tre mesi senza saltare un giorno", "Tre giorni", "Una settimana"], answer: 0, why: "«Sono passati tre mesi. Non ho saltato neanche un giorno»." },
        { q: "Perché ha mantenuto la promessa?", kind: "inferencial", options: ["Porque era pequeña: se volvió su lugar diario", "Porque su jefe lo obliga", "Porque pagó un curso caro"], answer: 0, why: "«La promessa piccola è l'unica che mantengo… quelle piccole accompagnano»." },
        { q: "«Le promesse giganti spaventano; quelle piccole accompagnano». Lo aplicas a tus propósitos?", kind: "critica", options: ["Sì: empezar pequeño crea hábitos reales", "No: sin metas enormes no hay motivación", "Las promesas son para el 31 de diciembre"], answer: 0, why: "La evidencia del autor y la psicología del hábito coinciden: pequeño y constante gana." },
      ],
      vf: [
        { text: "L'autore ha promesso un'ora di palestra ogni giorno.", value: false, why: "Falso: veinte minutos de quietud, ni gimnasio ni dieta." },
        { text: "Ha mantenuto la promessa per tre mesi.", value: true, why: "«Non ho saltato neanche un giorno»." },
        { text: "Il futuro si costruisce con mattoni piccoli.", value: true, why: "Es la metáfora final del texto." },
      ],
    },
    {
      id: "md-a2-11-2", theme: "spiritualità", title: "Promettere a se stessi", titleEs: "Prometerse a uno mismo", minutes: 3,
      paragraphs: [
        { it: "Promettiamo tante cose agli altri: amore, aiuto, presenza. Ma a noi stessi? Il mio amico Pietro ha un quaderno di promesse personali. «Non sono voti», dice, «sono appuntamenti con me stesso».", es: "Prometemos tantas cosas a los demás: amor, ayuda, presencia. ¿Pero a nosotros mismos? Mi amigo Pietro tiene un cuaderno de promesas personales. «No son votos», dice, «son citas conmigo mismo»." },
        { it: "La sua ultima promessa: «Ogni domenica, un'ora di silenzio». Il mondo pensa che Pietro sia strano. Pietro pensa che il mondo sia strano: promettiamo tutto a tutti, e poi ci dimentichiamo di noi. «Un patto con se stessi», sorride, «è il sacramento più semplice».", es: "Su última promesa: «Cada domingo, una hora de silencio». El mundo piensa que Pietro es raro. Pietro piensa que el mundo es raro: prometemos todo a todos y luego nos olvidamos de nosotros. «Un pacto con uno mismo», sonríe, «es el sacramento más simple»." },
      ],
      predict: { q: "Antes de leer: ¿qué tipo de promesas guarda Pietro?", options: ["Promesas personales en un cuaderno", "Deudas con el banco", "Regalos de cumpleaños"], answer: 0, why: "«Promettere a se stessi»: el giro hacia el interior." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Prometerse tiempo a uno mismo es un pacto sagrado y simple", "Las promesas a otros son las únicas que valen", "El silencio dominical es obligatorio"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Pietro llama a sus promesas «citas conmigo mismo»", "Su última promesa: una hora de silencio cada domingo"],
        distractors: ["Pietro rompió todas sus promesas en una semana", "El texto dice que el mundo tiene razón sobre Pietro"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Le promesse personali sono appuntamenti con se stessi.", "Ogni domenica, un'ora di silenzio.", "Ci dimentichiamo di noi, promettendo tutto a tutti.", "Se una domenica sei stanco, rompi la promessa e mangia torta davanti alla TV."],
        intruder: 3, why: "El espíritu del texto es el pacto firme consigo mismo; el intruso lo rompe por comodidad." },
    },
    {
      id: "md-a2-11-3", theme: "relax mentale", title: "Il futuro che spaventa", titleEs: "El futuro que asusta", minutes: 3,
      paragraphs: [
        { it: "«E se non trovo lavoro? E se mi ammalo? E se, e se…». La mente che guarda al futuro è come una macchina dei «e se»: produce infiniti film di paura. Il futuro, però, non esiste ancora: esiste solo nella nostra testa.", es: "«¿Y si no encuentro trabajo? ¿Y si me enfermo? ¿Y si, y si…?». La mente que mira al futuro es como una máquina de «¿y si?»: produce infinitas películas de miedo. El futuro, sin embargo, todavía no existe: existe solo en nuestra cabeza." },
        { it: "Un trucco antico: quando la mente vola nel futuro, riportala al corpo. Tocca il tavolo: è vero, è qui. Ascolta il respiro: è vero, è adesso. Il futuro si prepara meglio da una mente calma che da una mente spaventata. Prima il presente, poi il piano.", es: "Un truco antiguo: cuando la mente vuela al futuro, devuélvela al cuerpo. Toca la mesa: es real, está aquí. Escucha el respiro: es real, es ahora. El futuro se prepara mejor desde una mente calma que desde una mente asustada. Primero el presente, luego el plan." },
      ],
      predict: { q: "Antes de leer: ¿qué hará el texto con el miedo al futuro?", options: ["Devolver la mente al cuerpo y al presente", "Darte más películas de miedo", "Ignorar el tema"], answer: 0, why: "«Il futuro che spaventa» + el truco de anclaje." },
      sequence: {
        instr: "Ordena el truco antico (1 = primero):",
        events: ["La mente vola nel futuro con i «e se»", "Riporti la mente al corpo", "Tocchi il tavolo: è vero, è qui", "Ascolti il respiro: è vero, è adesso", "Da mente calma, prepari il piano per il futuro"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Quando la mente spaventa con i «e se» del futuro, riportala al corpo. Tocca il tavolo: è vero, è qui. Ascolta il respiro: è vero, è adesso. Il futuro non esiste ancora; il presente sì. Prima il presente, poi il piano.",
        questions: [
          { q: "Cosa produce la mente che guarda al futuro?", kind: "literal", options: ["Film di paura con i «e se»", "Film comici", "Canzoni allegre"], answer: 0, why: "«Produce infiniti film di paura»." },
          { q: "Cosa tocchi per tornare al presente?", kind: "literal", options: ["Il tavolo", "Il telefono", "Il futuro"], answer: 0, why: "«Tocca il tavolo: è vero, è qui»." },
          { q: "Da dove si prepara mejor el futuro?", kind: "inferencial", options: ["Da una mente calma, no spaventata", "Da una mente spaventata", "No se puede preparar"], answer: 0, why: "«Il futuro si prepara meglio da una mente calma»." },
        ],
      },
    },
  ],

  "cu-a2-12": [
    {
      id: "md-a2-12-1", theme: "spiritualità", title: "Firenze e la bellezza che ferma", titleEs: "Florencia y la belleza que detiene", minutes: 3,
      paragraphs: [
        { it: "A Firenze succede una cosa a molti turisti: davanti al David di Michelangelo, si fermano. Non per stanchezza: la bellezza li ferma. Per un momento, la mente tace e resta solo lo stupore.", es: "En Florencia le pasa algo a muchos turistas: frente al David de Miguel Ángel, se detienen. No por cansancio: la belleza los detiene. Por un momento, la mente calla y queda solo el asombro." },
        { it: "I mistici chiamavano questo momento «la preghiera degli occhi». Non serve essere religiosi: basta lasciarsi fermare. La bellezza è una porta: se la attraversi senza correre, ti porta sempre allo stesso posto: qui, ora, con il cuore aperto.", es: "Los místicos llamaban a este momento «la oración de los ojos». No hace falta ser religioso: basta dejarse detener. La belleza es una puerta: si la cruzas sin correr, te lleva siempre al mismo lugar: aquí, ahora, con el corazón abierto." },
      ],
      predict: { q: "Antes de leer: ¿qué hará la belleza en Florencia?", options: ["Detener la mente y abrir el corazón", "Acelerar a los turistas", "Nada especial"], answer: 0, why: "«La bellezza che ferma»: el arte como experiencia contemplativa." },
      quiz: [
        { q: "Dove si fermano i turisti?", kind: "literal", options: ["Davanti al David di Michelangelo", "Davanti al duomo", "In fila per la bistecca"], answer: 0, why: "«Davanti al David di Michelangelo»." },
        { q: "Come chiamavano i mistici questo momento?", kind: "literal", options: ["La preghiera degli occhi", "La corsa degli occhi", "Il riposo dei piedi"], answer: 0, why: "«La preghiera degli occhi»." },
        { q: "Dove ti porta la bellezza, se non corri?", kind: "inferencial", options: ["Al aquí y ahora con el corazón abierto", "A la tienda de souvenirs", "Al próximo museo"], answer: 0, why: "«Ti porta sempre allo stesso posto: qui, ora, con il cuore aperto»." },
        { q: "Has sentido «la oración de los ojos» ante una obra de arte? Qué fue?", kind: "critica", options: ["Sì: la belleza detiene el diálogo interno y abre algo dentro", "No: el arte es decoración", "Solo con obras caras"], answer: 0, why: "La experiencia estética como puerta contemplativa es universal." },
      ],
      vf: [
        { text: "I turisti si fermano davanti al David per stanchezza.", value: false, why: "Falso: «non per stanchezza: la bellezza li ferma»." },
        { text: "Basta lasciarsi fermare dalla bellezza.", value: true, why: "«Non serve essere religiosi: basta lasciarsi fermare»." },
        { text: "La bellezza è una porta.", value: true, why: "Metáfora central del segundo párrafo." },
      ],
    },
    {
      id: "md-a2-12-2", theme: "relax fisico", title: "I piedi sulla pietra antica", titleEs: "Los pies sobre la piedra antigua", minutes: 3,
      paragraphs: [
        { it: "Firenze è una città da piedi, non da macchina. Le strade di pietra, i ponti, le salite: il corpo cammina tutto il giorno, e la sera i piedi chiedono pietà. Ecco il rituale fiorentino della sera.", es: "Florencia es una ciudad de pies, no de coche. Las calles de piedra, los puentes, las subidas: el cuerpo camina todo el día, y por la noche los pies piden piedad. Este es el ritual florentino nocturno." },
        { it: "Primo: scarpe via, piedi in alto contro il muro, cinque minuti. Secondo: acqua fresca sui piedi, lentamente. Terzo: massaggio con olio, dai talloni alle dita, in silenzio. I fiorentini lo sapevano: il riposo vero non è solo dormire, è ascoltare il corpo che ha camminato per te tutto il giorno.", es: "Primero: zapatos fuera, pies en alto contra la pared, cinco minutos. Segundo: agua fresca en los pies, lentamente. Tercero: masaje con aceite, de los talones a los dedos, en silencio. Los florentinos lo sabían: el descanso verdadero no es solo dormir, es escuchar el cuerpo que caminó por ti todo el día." },
      ],
      predict: { q: "Antes de leer: ¿qué será el «ritual fiorentino»?", options: ["Cuidado consciente de los pies tras caminar", "Una cena pesada", "Un brindis con vino"], answer: 0, why: "«I piedi sulla pietra antica» + noche: el cuidado del caminante." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["El descanso verdadero incluye escuchar y cuidar el cuerpo cansado", "Florencia es demasiado cansada para visitarla", "Los masajes son un lujo innecesario"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El ritual: pies en alto, agua fresca y masaje con aceite en silencio", "Florencia se recorre a pie: calles de piedra, puentes y subidas"],
        distractors: ["El texto recomienda conducir por Florencia", "El masaje debe hacerse viendo la televisión"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Scarpe via, piedi in alto contro il muro.", "Acqua fresca sui piedi, lentamente.", "Massaggio con olio, dai talloni alle dita, in silenzio.", "Ignora i piedi doloranti: domani si cammina il doppio!"],
        intruder: 3, why: "Todo el ritual es escuchar el cuerpo; ignorar el dolor es lo contrario." },
    },
    {
      id: "md-a2-12-3", theme: "meditazione", title: "Il ponte all'alba", titleEs: "El puente al alba", minutes: 3,
      paragraphs: [
        { it: "Ponte Vecchio all'alba è un altro mondo: niente folla, niente negozi aperti, solo il fiume che parla piano. Giulia ci va ogni volta che passa da Firenze, sempre alla stessa ora: le sei e un quarto.", es: "El Ponte Vecchio al alba es otro mundo: sin multitud, sin tiendas abiertas, solo el río que habla bajito. Giulia va cada vez que pasa por Florencia, siempre a la misma hora: las seis y cuarto." },
        { it: "Sta sul ponte dieci minuti, con le mani sulla pietra fredda. «La città dorme», dice, «e io con lei, ma con gli occhi aperti». Quando il primo sole tocca l'acqua, Giulia respira una volta, piano, e va a fare colazione. La sua meditazione ha l'indirizzo più bello del mondo.", es: "Está en el puente diez minutos, con las manos sobre la piedra fría. «La ciudad duerme», dice, «y yo con ella, pero con los ojos abiertos». Cuando el primer sol toca el agua, Giulia respira una vez, despacio, y va a desayunar. Su meditación tiene la dirección más linda del mundo." },
      ],
      predict: { q: "Antes de leer: ¿qué hará Giulia en el puente al alba?", options: ["Una meditación de diez minutos con las manos en la piedra", "Comprar joyas en las tiendas", "Tomar el primer tren"], answer: 0, why: "«Il ponte all'alba»: la hora dorada como práctica." },
      sequence: {
        instr: "Ordena la mañana de Giulia (1 = primero):",
        events: ["Giulia arriva al Ponte Vecchio alle sei e un quarto", "Appoggia le mani sulla pietra fredda", "Sta sul ponte dieci minuti, in silenzio", "Il primo sole tocca l'acqua", "Respira una volta, piano, e va a fare colazione"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Ponte Vecchio all'alba: niente folla, solo il fiume che parla piano. Giulia appoggia le mani sulla pietra fredda e resta dieci minuti. La città dorme, e lei con lei, ma con gli occhi aperti. Quando il primo sole tocca l'acqua, respira una volta e va a fare colazione.",
        questions: [
          { q: "A che ora arriva Giulia al ponte?", kind: "literal", options: ["Alle sei e un quarto", "Alle nove", "A mezzanotte"], answer: 0, why: "«Sempre alla stessa ora: le sei e un quarto»." },
          { q: "Quanto tempo resta sul ponte?", kind: "literal", options: ["Dieci minuti", "Dieci ore", "Dieci secondi"], answer: 0, why: "«Resta dieci minuti»." },
          { q: "Cosa fa quando il sole tocca l'acqua?", kind: "inferencial", options: ["Respira una vez y va a desayunar", "Se tira al río", "Vuelve a dormir"], answer: 0, why: "«Respira una volta, piano, e va a fare colazione»." },
        ],
      },
    },
  ],
};
