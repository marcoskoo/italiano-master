import type { Unit } from "../types";

/* ── Unidades y lecciones EXTRA · paquete de expansión v1.1 ──────────
   32 lecciones nuevas (45 → 77) distribuidas en 11 unidades que
   completan la ruta: tiempo libre, mesa, viajes, salud, trabajo,
   medios, debate, estilo y maestría. */

export const EXTRA_UNITS: Record<string, Unit[]> = {
  /* ══════════ DESDE CERO · +1 unidad ══════════ */
  zero: [
    { id: "u-zero-3", level: "zero", title: "El tiempo y los días", titleIt: "Il tempo e i giorni", lessons: [
      { id: "les-z3-1", level: "zero", title: "Días, meses y estaciones", titleIt: "I giorni, i mesi e le stagioni",
        objectives: ["Decir los 7 días de la semana", "Recordar los 12 meses", "Nombrar las 4 estaciones"],
        explanation: [
          "Los días italianos terminan en -dì (lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica) y se escriben con minúscula, igual que en español. Todos son masculinos: il lunedì, i sabati. Para hablar de hábitos usamos el artículo: il sabato studio italiano (los sábados estudio italiano).",
          "Los meses (gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre) no llevan preposición de fecha: il 25 dicembre (el 25 de diciembre). Las estaciones son primavera, estate, autunno e inverno, y van con la preposición articulada: in primavera, d'estate, d'autunno, d'inverno.",
        ],
        examples: [
          { it: "Il sabato vado al mercato.", es: "Los sábados voy al mercado." },
          { it: "Sono nata a marzo.", es: "Nací en marzo." },
          { it: "D'estate facciamo i bagni al mare.", es: "En verano nos bañamos en el mar." },
        ],
        vocabIds: ["w2-lunedi", "w2-martedi", "w2-mercoledi", "w2-sabato", "w2-domenica", "w2-estate", "w2-inverno"],
        exerciseIds: ["ex-a1-041"], conversationPrompt: { it: "Che giorno è oggi? In che mese siamo?", es: "¿Qué día es hoy? ¿En qué mes estamos?" },
        checkpointIds: ["ex-a1-041"] },
      { id: "les-z3-2", level: "zero", title: "¿Qué hora es?", titleIt: "Che ora è?",
        objectives: ["Preguntar y decir la hora", "Usare l'una / mezzogiorno / mezzanotte", "Entender horarios de tiendas y trenes"],
        explanation: [
          "Se pregunta Che ora è? o Che ore sono?. La respuesta casi siempre empieza con Sono le…: sono le tre, sono le otto e mezza. Las excepciones son la una y el mediodía/medianoche: è l'una, è mezzogiorno, è mezzanotte.",
          "Los minutos se añaden con e: le cinque e dieci (las 5:10), le cinque e un quarto (5:15), le cinque e mezza (5:30). Para el cuarto para: le sei meno un quarto (5:45). En horarios oficiales se cuenta de 24: il treno parte alle 14:30 (alle quattordici e trenta).",
        ],
        examples: [
          { it: "Scusa, che ora è? — Sono le nove e mezza.", es: "Disculpa, ¿qué hora es? — Son las nueve y media." },
          { it: "A che ora apri la domenica?", es: "¿A qué hora abres los domingos?" },
        ],
        vocabIds: ["w2-domani", "w2-oggi"], exerciseIds: ["ex-num-006", "ex-a2-038"],
        conversationPrompt: { it: "Scusa, che ora è?", es: "Disculpa, ¿qué hora es?" },
        checkpointIds: ["ex-num-006"] },
      { id: "les-z3-3", level: "zero", title: "El clima", titleIt: "Che tempo fa?",
        objectives: ["Preguntar por el clima", "Describir sol, lluvia, viento y nieve", "Comentar la temperatura"],
        explanation: [
          "La pregunta universal es Che tempo fa? (¿qué tiempo hace?). Se responde con fare: fa caldo (hace calor), fa freddo (hace frío), fa bello/brutto (hace bueno/mal tiempo). Para fenómenos concretos se usa el verbo propio: piove (llueve), nevica (nieva), c'è il sole (hace sol), c'è vento (hace viento).",
          "Pequeñas joyas expresivas: piove a catinelle (llueve a cántaros), che afa! (¡qué bochorno!). La temperatura se lee con gradi: oggi ci sono trenta gradi (hoy hay treinta grados).",
        ],
        examples: [
          { it: "Che tempo fa a Roma? — C'è il sole!", es: "¿Qué tiempo hace en Roma? — ¡Hace sol!" },
          { it: "Ieri pioveva a catinelle.", es: "Ayer llovía a cántaros." },
        ],
        vocabIds: ["w2-piove", "w2-neve", "w2-vento", "w2-afa"], exerciseIds: ["ex-a1-042", "ex-a1-045"],
        conversationPrompt: { it: "Che tempo fa oggi nella tua città?", es: "¿Qué tiempo hace hoy en tu ciudad?" },
        checkpointIds: ["ex-a1-042"] },
    ]},
  ],

  /* ══════════ A1 · +2 unidades ══════════ */
  A1: [
    { id: "u-a1-5", level: "A1", title: "El tiempo libre", titleIt: "Il tempo libero", lessons: [
      { id: "les-a1-13", level: "A1", title: "Gustos: mi piace / mi piacciono", titleIt: "Mi piace, mi piacciono",
        objectives: ["Expresar gustos con piacere", "Concordar piace/piacciono", "Preguntar ¿te gusta…?"],
        explanation: [
          "El verbo piacere funciona al revés que “gustar” en español: el sujeto es la cosa que agrada. Singular: mi piace la pizza (me gusta la pizza). Plural: mi piacciono gli spaghetti (me gustan los espaguetis). La persona va con pronombre tónico: a me piace, a Marco piace…",
          "Para preguntar: Ti piace il calcio? / Ti piacciono i dolci? Respuestas útiles: Sì, moltissimo! / No, per niente. Con verbos siempre singular: mi piace viaggiare (me gusta viajar).",
        ],
        examples: [
          { it: "Mi piace la musica italiana.", es: "Me gusta la música italiana." },
          { it: "Ti piacciono i film di Tornatore?", es: "¿Te gustan las películas de Tornatore?" },
        ],
        vocabIds: ["w2-hobby", "w2-fotografia", "w2-cucinare"], exerciseIds: ["ex-a1-031", "ex-a1-032", "ex-a1-040"],
        conversationPrompt: { it: "Cosa ti piace fare nel tempo libero?", es: "¿Qué te gusta hacer en el tiempo libre?" },
        checkpointIds: ["ex-a1-031", "ex-a1-032"] },
      { id: "les-a1-14", level: "A1", title: "Los verbos en -are", titleIt: "I verbi in -are",
        objectives: ["Conjugar el presente de la 1ª conjugación", "Usar los 10 verbos -are más frecuentes", "Negar y preguntar con -are"],
        explanation: [
          "La primera conjugación es la más numerosa del italiano: parlare (hablar), mangiare (comer), lavorare (trabajar), studiar (estudiar), abitare (vivir/residir), ascoltare (escuchar), guardare (mirar), comprare (comprar), cercare (buscar), giocare (jugar). Terminaciones: -o, -i, -a, -iamo, -ate, -ano.",
          "Atención a la ortografía: verbos en -care/-gare añaden h ante e/i (cerco, cerchi; gioco, giochi) y los de -ciare/-giare pierden la i (mangio, mangi — nunca *mangii). Con “non” se nievan: non parlo russo.",
        ],
        examples: [
          { it: "Abito a Barcellona e lavoro in un ufficio.", es: "Vivo en Barcelona y trabajo en una oficina." },
          { it: "Tu giochi a calcio? — No, non gioco, guardo solo le partite.", es: "¿Tú juegas fútbol? — No, no juego, solo miro los partidos." },
        ],
        vocabIds: ["w2-calcio", "w2-palestra"], exerciseIds: ["ex-a1-033", "ex-a1-034"],
        conversationPrompt: { it: "Cosa fai il finesettimana? Parla con tre verbi in -are.", es: "¿Qué haces el fin de semana? Usa tres verbos en -are." },
        checkpointIds: ["ex-a1-033", "ex-a1-034"] },
      { id: "les-a1-15", level: "A1", title: "Verbos -ere e -ire (con -isc)", titleIt: "Verbi in -ere e -ire",
        objectives: ["Conjugar el presente de -ere", "Reconocer los verbos -ire con -isc", "Usar los irregulares esenciales bere y dire"],
        explanation: [
          "Los verbos en -ere (credere, vendere, vivere, ricevere) usan -o, -i, -e, -iamo, -ete, -ono. La diferencia con -are está en la 3ª y 6ª persona: vende / vendono (no *venda).",
          "Dos familias en -ire: sin sufijo (dormire, sentire, partire, offrire: io dormo, tu dormi) y con -isc (capire, finire, preferire, pulire: io capisco, tu capisci, lui capisce, noi capiamo — ¡el noi no lleva -isc!). Irregulares de supervivencia: bere (bevo, bevi, beve) y dire (dico, dici, dice).",
        ],
        examples: [
          { it: "Non capisco, puoi ripetere?", es: "No entiendo, ¿puedes repetir?" },
          { it: "Preferisco il tè, ma lei beve solo caffè.", es: "Prefiero té, pero ella solo bebe café." },
        ],
        vocabIds: ["w-caffe", "w-acqua"], exerciseIds: ["ex-a1-035", "ex-verb-001", "ex-verb-003"],
        conversationPrompt: { it: "Cosa capisci dell'italiano? Cosa non capisci ancora?", es: "¿Qué entiendes del italiano? ¿Qué aún no entiendes?" },
        checkpointIds: ["ex-a1-035"] },
    ]},
    { id: "u-a1-6", level: "A1", title: "A tavola", titleIt: "A tavola", lessons: [
      { id: "les-a1-16", level: "A1", title: "Las comidas del día", titleIt: "I pasti della giornata",
        objectives: ["Nombrar colazione, pranzo, merenda y cena", "Describir tu menú diario", "Ordenar las horas de las comidas"],
        explanation: [
          "El día gastronómico italiano: la colazione (desayuno, dulce: caffè e cornetto), il pranzo (comida, el plato fuerte del mediodía), la merenda (merienda, sobre todo para niños) y la cena (cena, más ligera pero social). Verbo clave: fare — fare colazione, fare pranzo, fare cena.",
          "Estructura del pranzo tradicional: primo (pasta o arroz), secondo (carne o pescado) con contorno (verdura), fruta y caffè. El famoso “espresso después de comer” es sagrado; el cappuccino, en cambio, solo se toma por la mañana.",
        ],
        examples: [
          { it: "Faccio colazione al bar alle otto.", es: "Desayuno en el bar a las ocho." },
          { it: "Stasera ceniamo alle otto e mezza.", es: "Esta noche cenamos a las ocho y media." },
        ],
        vocabIds: ["w2-colazione", "w2-antipasto", "w2-dolce", "w2-primopiatto"], exerciseIds: ["ex-a1-036"],
        conversationPrompt: { it: "Cosa mangi a colazione? E a cena?", es: "¿Qué comes en el desayuno? ¿Y en la cena?" },
        checkpointIds: ["ex-a1-036"] },
      { id: "les-a1-17", level: "A1", title: "En el restaurante", titleIt: "Al ristorante",
        objectives: ["Pedir la mesa y el menú", "Ordenar primo, secondo y contorno", "Pedir la cuenta y dejar propina"],
        explanation: [
          "Protocolo del ristorante: entra y dice Avete un tavolo per due? (¿tienen mesa para dos?). El camarero (cameriere) pregunta Cosa desidera? / Cosa prende?. Se pide con Vorrei… (querría) o Prendo… (voy a tomar). Preguntas útiles: Cosa mi consiglia? (¿qué me recomienda?), È incluso il coperto? (¿está incluido el pan y servicio?).",
          "Para el final: Il conto, per favore. En Italia il coperto (pan + servicio) suele aparecer en la cuenta; la propina (mancia) no es obligatoria pero se redondea si el servicio fue bueno. Y recuerda: no se pide cappuccino después de la comida.",
        ],
        examples: [
          { it: "Vorrei una margherita e un'acqua naturale.", es: "Querría una margherita y un agua sin gas." },
          { it: "Il conto, per favore. — Subito!", es: "La cuenta, por favor. — ¡Ahora mismo!" },
        ],
        vocabIds: ["w2-prenotare", "w2-cameriere", "w2-mancia", "w-ristorante", "w-conto"],
        exerciseIds: ["ex-a1-037", "ex-a1-038", "ex-a2-026"],
        conversationPrompt: { it: "Buonasera! Cosa desidera da bere?", es: "¡Buenas noches! ¿Qué desea de beber?" },
        checkpointIds: ["ex-a1-037"] },
      { id: "les-a1-18", level: "A1", title: "Molto, poco, troppo", titleIt: "Molto, poco, troppo",
        objectives: ["Cuantificar con molto, poco, troppo", "Concordar estos adjetivos", "Pedir cantidades en el mercado"],
        explanation: [
          "molto, poco y troppo concuerdan cuando acompañan a un sustantivo: molta fame, molti amici, poche persone, troppa confusione. En cambio, delante de adjetivos o adverbios quedan invariables: molto buono, troppo caro, poco simpatico.",
          "En el mercado: un chilo di pesche (un kilo), mezzo chilo di formaggio (medio kilo), due mele (dos manzanas), un po' di tutto (un poco de todo). Expresión de oro: quanto costa? + abbondante! (¡generoso!).",
        ],
        examples: [
          { it: "Ho molta fame ma poco tempo.", es: "Tengo mucha hambre pero poco tiempo." },
          { it: "Questo ristorante è troppo caro!", es: "¡Este restaurante es demasiado caro!" },
        ],
        vocabIds: ["w2-passeggiata"], exerciseIds: ["ex-a1-039", "ex-asc-007"],
        conversationPrompt: { it: "Quanto caffè bevi al giorno? Molto o poco?", es: "¿Cuánto café bebes al día? ¿Mucho o poco?" },
        checkpointIds: ["ex-a1-039"] },
    ]},
  ],

  /* ══════════ A2 · +2 unidades ══════════ */
  A2: [
    { id: "u-a2-4", level: "A2", title: "De viaje", titleIt: "In viaggio", lessons: [
      { id: "les-a2-10", level: "A2", title: "Billetes de tren", titleIt: "Alla biglietteria",
        objectives: ["Comprar un billete de ida y vuelta", "Entender andenes, horarios y retrasos", "Validar el billete y elegir asiento"],
        explanation: [
          "En la biglietteria o en la app de Trenitalia: Vorrei un biglietto di andata e ritorno per Firenze (ida y vuelta) o solo andata. Preguntas clave: A che ora parte il treno? Da quale binario? C'è il supplemento per l'alta velocità?. Frases del tablón: in ritardo (retrasado), in orario (puntual), binario 9.",
          "Los trenes regionales exigen convalidar (obliterare/validation) el billete antes de subir; en Frecciarossa e Italo el billete es nominal y va con el DNI. Si pierdes el tren, el cambio depende de la tarifa: flessibile o economy.",
        ],
        examples: [
          { it: "Un biglietto di andata e ritorno per Venezia, per favore.", es: "Un billete de ida y vuelta a Venecia, por favor." },
          { it: "Il Frecciarossa parte dal binario 7 alle 14:30.", es: "El Frecciarossa sale del andén 7 a las 14:30." },
        ],
        vocabIds: ["w2-biglietto", "w2-binario", "w2-ritardo", "w2-andataritorno", "w2-valigia"],
        exerciseIds: ["ex-a2-026", "ex-a2-027", "ex-a2-028", "ex-a2-040"],
        conversationPrompt: { it: "Buongiorno, dove deve andare?", es: "Buenos días, ¿a dónde tiene que ir?" },
        checkpointIds: ["ex-a2-026", "ex-a2-027"] },
      { id: "les-a2-11", level: "A2", title: "En el hotel", titleIt: "In albergo",
        objectives: ["Hacer el check-in con naturalidad", "Pedir extras y reportar problemas", "Resolver la factura al salir"],
        explanation: [
          "Check-in modelo: Buonasera, ho una prenotazione a nome García. Verificación habitual: un documento, per favore. Peticiones frecuentes: una camera doppia con vista / affaccio sul mare, al piano alto, con aria condizionata. La colazione è inclusa?.",
          "Problemas típicos con elegancia: l'aria condizionata non funziona (el aire no funciona), non c'è l'acqua calda (no hay agua caliente), il wifi non prende (el wifi no llega). Al check-out: Posso pagare con la carta? — Certo, firmi qui.",
        ],
        examples: [
          { it: "La colazione è inclusa? — Sì, dalle 7 alle 10.", es: "¿El desayuno está incluido? — Sí, de 7 a 10." },
          { it: "Scusi, l'aria condizionata non funziona.", es: "Disculpe, el aire acondicionado no funciona." },
        ],
        vocabIds: ["w2-prenotazione", "w2-colazione", "w2-cassaforte", "w2-affaccio"],
        exerciseIds: ["ex-a2-029", "ex-a2-030", "ex-asc-008"],
        conversationPrompt: { it: "Benvenuto! Ha una prenotazione?", es: "¡Bienvenido! ¿Tiene una reserva?" },
        checkpointIds: ["ex-a2-029", "ex-a2-030"] },
      { id: "les-a2-12", level: "A2", title: "Transporte urbano", titleIt: "I mezzi pubblici",
        objectives: ["Elegir entre autobús, metro y tranvía", "Comprar y validar títulos de transporte", "Pedir la parada correcta"],
        explanation: [
          "Las ciudades italianas se mueven con autobús (ATAC en Roma, ATM en Milán), metropolitana (metro), tram (tranvía) y las nuevas mobilità elettrica: monopattini (patinetes) compartidos. El título se compra en edicola (kiosco), tabaccheria o app y se valida a bordo: biglietto orario, carnet, abbonamento mensile.",
          "A bordo, la frase que lo salva todo: Scusi, questo autobus va in centro? / Mi scusi, per la stazione?. Para bajar: Prossima fermata? (¿próxima parada?). Y si te multan senza biglietto, la slazione (multa) duele en el bolsillo.",
        ],
        examples: [
          { it: "Un biglietto orario, per favore. Dove lo oblitero?", es: "Un billete de una hora, por favor. ¿Dónde lo valido?" },
          { it: "Scusi, per il duomo scendo alla prossima?", es: "Disculpe, ¿para el duomo bajo en la próxima?" },
        ],
        vocabIds: ["w2-duomo", "w2-vicolo", "w-citta", "w-centro"],
        exerciseIds: ["ex-a1-019", "ex-a2-040"], conversationPrompt: { it: "Scusi, come arrivo al centro?", es: "Disculpe, ¿cómo llego al centro?" },
        checkpointIds: ["ex-a1-019"] },
    ]},
    { id: "u-a2-5", level: "A2", title: "Salud y cuerpo", titleIt: "Salute e corpo", lessons: [
      { id: "les-a2-13", level: "A2", title: "En el médico y la farmacia", titleIt: "Dal medico e in farmacia",
        objectives: ["Describir síntomas con mi fa male", "Entender diagnósticos y recetas", "Comprar medicamentos en la farmacia"],
        explanation: [
          "La fórmula estrella es mi fa male + parte del cuerpo: mi fa male la testa / mi fanno male i denti (plural). Otros síntomas: ho la febbre, ho la tosse, sono raffreddato/a (estoy resfriado/a), mi gira la testa (me mareo). El médico pregunta: Dove le fa male? Da quanto tempo?.",
          "En la farmacia: Avete qualcosa per la tosse? / Mi serve qualcosa per il mal di testa. Muchos medicamentos requieren ricetta medica (receta). La farmacia de guardia se llama farmacia di turno. Remedios caseros italianos: tè e miele, brodo e riposo.",
        ],
        examples: [
          { it: "Mi fa male la gola e ho la febbre.", es: "Me duele la garganta y tengo fiebre." },
          { it: "Serve la ricetta per questo sciroppo?", es: "¿Se necesita receta para este jarabe?" },
        ],
        vocabIds: ["w2-testa", "w2-febbre", "w2-tosse", "w2-farmacia", "w2-ricettamedica", "w2-guarire"],
        exerciseIds: ["ex-a2-031", "ex-a2-029"], conversationPrompt: { it: "Dove le fa male? Da quanto tempo?", es: "¿Dónde le duele? ¿Desde cuándo?" },
        checkpointIds: ["ex-a2-031"] },
      { id: "les-a2-14", level: "A2", title: "Verbos reflexivos y rutina", titleIt: "Verbi riflessivi",
        objectives: ["Conjugar alzarsi, lavarsi, svegliarsi", "Contar tu rutina de la mañana", "Usare sentirsi y chiamarsi"],
        explanation: [
          "Los reflexivos italianos llevan el pronombre delante: mi sveglio, ti svegli, si sveglia, ci svegliamo, vi svegliate, si svegliano. En infinitivo la partícula se pega al final: svegliarsi, lavarsi, alzarsi, vestirsi, riposarsi, divertirsi (divertirse).",
          "En el passato prossimo usan essere y el pronombre delante del auxiliar: mi sono svegliato/a alle sette (me he despertado a las siete). Dos imprescindibles con matiz: sentirsi (sentirse: come ti senti?) y chiamarsi (llamarse: mi chiamo Ana).",
        ],
        examples: [
          { it: "Mi sveglio alle sette, mi lavo e faccio colazione.", es: "Me despierto a las siete, me lavo y desayuno." },
          { it: "Come ti senti oggi? — Mi sento benissimo!", es: "¿Cómo te sientes hoy? — ¡Me siento genial!" },
        ],
        vocabIds: ["w2-lunedi", "w2-oggi"], exerciseIds: ["ex-a2-032", "ex-a2-033", "ex-a2-039"],
        conversationPrompt: { it: "Com'è la tua routine del mattino?", es: "¿Cómo es tu rutina de la mañana?" },
        checkpointIds: ["ex-a2-032", "ex-a2-033"] },
      { id: "les-a2-15", level: "A2", title: "El passato prossimo", titleIt: "Il passato prossimo",
        objectives: ["Formar el pasado próximo con avere y essere", "Elegir el auxiliar correcto", "Concordar el participio con essere"],
        explanation: [
          "El passato prossimo cuenta el pasado reciente (y buena parte del pasado italiano): ho mangiato, ho visto, ho letto. Auxiliare avere con verbos transitivos; essere con verbos de movimiento y estado: andare, venire, partire, arrivare, tornare, uscire, restare, essere, stare, nascere, morire.",
          "Con essere el participio concuerda en género y número: Maria è andata, i ragazzi sono tornati, le ragazze sono uscite. Participios irregulares de alta frecuencia: fatto (fare), detto (dire), preso (prendere), messo (mettere), visto (vedere), stato (essere), scritto (scrivere), aperto (aprire), chiuso (chiudere).",
        ],
        examples: [
          { it: "Ieri ho mangiato una carbonara incredibile.", es: "Ayer comí una carbonara increíble." },
          { it: "Siamo andati al mare e siamo tornati tardi.", es: "Fuimos al mar y volvimos tarde." },
        ],
        vocabIds: ["w2-ieri", "w2-biglietto"], exerciseIds: ["ex-a2-034", "ex-a2-035", "ex-a2-036", "ex-a2-037", "ex-let-009"],
        conversationPrompt: { it: "Cosa hai fatto ieri? Racconta tre cose.", es: "¿Qué hiciste ayer? Cuenta tres cosas." },
        checkpointIds: ["ex-a2-034", "ex-a2-035", "ex-a2-036"] },
    ]},
  ],

  /* ══════════ B1 · +2 unidades ══════════ */
  B1: [
    { id: "u-b1-4", level: "B1", title: "Trabajo y carrera", titleIt: "Lavoro e carriera", lessons: [
      { id: "les-b1-7", level: "B1", title: "El mundo del trabajo", titleIt: "Il mondo del lavoro",
        objectives: ["Dominar el vocabulario laboral esencial", "Describir tu puesto y responsabilidades", "Hablar de contrato, sueldo y jornada"],
        explanation: [
          "Vocabulario del trabajo italiano: il lavoro (empleo), l'azienda (empresa), il datore di lavoro (empleador), il dipendente (empleado), lo stipendio (sueldo), il contratto a tempo indeterminato/determinato (indefinido/temporal), la riunione (reunión), il colloquio di lavoro (entrevista de trabajo), le ferie (vacaciones laborales), il periodo di prova (período de prueba).",
          "Para describir tu puesto: lavoro come / faccio il-la + profesión, mi occupo di (me encargo de), sono responsabile di (soy responsable de), riporto a (reporto a). La jornada: full time / part time, lo smart working (teletrabajo), fare gli straordinari (hacer horas extra).",
        ],
        examples: [
          { it: "Lavoro come grafico in un'azienda multinazionale.", es: "Trabajo como diseñador en una empresa multinacional." },
          { it: "Domani ho una riunione importante con il team.", es: "Mañana tengo una reunión importante con el equipo." },
        ],
        vocabIds: ["w2-riunione", "w2-collega", "w2-stipendio", "w2-curriculum", "w2-ferie", "w2-candidatura"],
        exerciseIds: ["ex-b1-016", "ex-b1-019"], conversationPrompt: { it: "Di cosa ti occupi? Com'è il tuo lavoro?", es: "¿De qué te encargas? ¿Cómo es tu trabajo?" },
        checkpointIds: ["ex-b1-016"] },
      { id: "les-b1-8", level: "B1", title: "El correo formal", titleIt: "L'e-mail formale",
        objectives: ["Escribir aperturas y cierres formales", "Usar fórmulas de cortesía", "Pedir y confirmar información por escrito"],
        explanation: [
          "Anatomía del correo formal italiano: apertura Gentile / Spettabile + cargo (Gentile Dott. Rossi, / Spettabile Sig.ra Bianchi,), cuerpo con Lei (no tu), peticiones con condicional de cortesía (Le sarei grato se potesse…, Vorrei chiederLe…), cierre Cordiali saluti o Distinti saluti.",
          "Fórmulas de oro: In riferimento alla Sua e-mail del… (en referencia a su correo del…), In allegato trova… (adjunto encuentra…), Resto a disposizione per qualsiasi chiarimento (quedo a disposición para cualquier aclaración), In attesa di un Suo cortese riscontro (en espera de su amable respuesta).",
        ],
        examples: [
          { it: "Gentile Sig.ra Verdi, Le scrivo in merito alla vostra offerta di lavoro.", es: "Estimada Sra. Verdi, le escribo en relación a su oferta de empleo." },
          { it: "In allegato trova il mio curriculum aggiornato. Cordiali saluti.", es: "Adjunto encontrará mi currículum actualizado. Saludos cordiales." },
        ],
        vocabIds: ["w2-curriculum", "w2-candidatura"], exerciseIds: ["ex-b1-017", "ex-b1-018", "ex-b1-030"],
        conversationPrompt: { it: "Scrivi un'e-mail per chiedere informazioni su un corso.", es: "Escribe un correo pidiendo información sobre un curso." },
        checkpointIds: ["ex-b1-017", "ex-b1-018"] },
      { id: "les-b1-9", level: "B1", title: "La entrevista de trabajo", titleIt: "Il colloquio di lavoro",
        objectives: ["Presentar tu experiencia y fortalezas", "Responder a las 5 preguntas clásicas", "Preguntar sobre el puesto con inteligencia"],
        explanation: [
          "Las cinco preguntas que siempre llegan: Mi parli di Lei (hábleme de usted), Perché vuole lavorare con noi? (¿por qué con nosotros?), Quali sono i suoi punti di forza / di debolezza? (fortalezas/debilidades), Dove si vede tra cinque anni? (¿dónde se ve en 5 años?), Ha domande per noi? (¿tiene preguntas?).",
          "Respuestas modelo con passato prossimo y condicional: Ho lavorato per tre anni come…, Ho guidato un team di cinque persone, Vorrei crescere in un contesto internazionale. Truco italiano: convierte debilidades en proyectos: Sono perfezionista, quindi sto imparando a dare priorità.",
        ],
        examples: [
          { it: "Ho una esperienza pluriennale nel settore.", es: "Tengo una experiencia de varios años en el sector." },
          { it: "Vorrei candidarmi per il posto di project manager.", es: "Quisiera presentarme al puesto de project manager." },
        ],
        vocabIds: ["w2-riunione", "w2-candidatura"], exerciseIds: ["ex-b1-019", "ex-b1-020", "ex-asc-010"],
        conversationPrompt: { it: "Mi parli di Lei: esperienza, studi e punti di forza.", es: "Hábleme de usted: experiencia, estudios y fortalezas." },
        checkpointIds: ["ex-b1-019", "ex-b1-020"] },
    ]},
    { id: "u-b1-5", level: "B1", title: "Medios y opiniones", titleIt: "Media e opinioni", lessons: [
      { id: "les-b1-10", level: "B1", title: "Noticias y titulares", titleIt: "Notizie e titoli",
        objectives: ["Entender titulares y lead periodístico", "Dominar el vocabulario de actualidad", "Resumir una noticia con tus palabras"],
        explanation: [
          "El lenguaje de los telegiornali: l'aumento dei prezzi (el alza de precios), la crisi economica, il taglio delle tasse (rebaja de impuestos), lo sciopero (huelga), l'allerta meteo, la fonte (la fuente), secondo un'indagine (según una encuesta). Los titulares abrevian sin verbos: “Rincari carburanti: -5% a marzo”.",
          "Para resumir: La notizia parla di…, Il tema principale è…, L'articolo sostiene che… (el artículo sostiene que). Con verbos de opinión + che: dicono che, sembra che, pare che — a menudo con congiuntivo, tu primera puerta al subjuntivo italiano.",
        ],
        examples: [
          { it: "Secondo un'indagine, il 60% dei giovani legge le notizie online.", es: "Según una encuesta, el 60% de los jóvenes lee noticias online." },
          { it: "L'articolo sostiene che il turismo è cambiato per sempre.", es: "El artículo sostiene que el turismo ha cambiado para siempre." },
        ],
        vocabIds: ["w2-notizia", "w2-inchiesta"], exerciseIds: ["ex-b1-025", "ex-b1-029", "ex-asc-012"],
        conversationPrompt: { it: "Che notizie ci sono oggi nel tuo paese?", es: "¿Qué noticias hay hoy en tu país?" },
        checkpointIds: ["ex-b1-025"] },
      { id: "les-b1-11", level: "B1", title: "Imperfetto vs passato prossimo", titleIt: "Imperfetto e passato prossimo",
        objectives: ["Distinguir marco y evento", "Narrar anécdotas con ambos tiempos", "Usare mentre y quando como bisagras"],
        explanation: [
          "Regla de narración italiana: el imperfetto pinta el decorado (descripciones, hábitos, acciones en curso: era, faceva, giocavo); el passato prossimo dispara los hechos puntuales que avanzan la historia (è arrivato, ha suonato, ho visto). El imperfetto es la cámara amplia; el passato prossimo, el zoom.",
          "Las bisagras temporales son tu brújula: mentre + imperfetto (mentre studiavo…), quando + passato prossimo (quando è arrivato…). Los verbos de estado (essere, avere, sapere, volere) suelen ir en imperfetto: avevo fame, sapevo la risposta.",
        ],
        examples: [
          { it: "Pioveva quando sono uscito di casa.", es: "Llovía cuando salí de casa." },
          { it: "Da bambino giocavo sempre a calcio; un giorno mi sono rotto un braccio.", es: "De niño siempre jugaba fútbol; un día me rompí un brazo." },
        ],
        vocabIds: ["w2-ieri", "w2-braccio"], exerciseIds: ["ex-b1-021", "ex-b1-022", "ex-b1-023"],
        conversationPrompt: { it: "Racconta un ricordo d'infanzia: cosa facevi? Cosa è successo?", es: "Cuenta un recuerdo de infancia: ¿qué hacías? ¿Qué pasó?" },
        checkpointIds: ["ex-b1-021", "ex-b1-022", "ex-b1-023"] },
      { id: "les-b1-12", level: "B1", title: "Opinar y debatir", titleIt: "Esprimere opinioni",
        objectives: ["Abrir y matizar opiniones", "Estar de acuerdo y en desacuerdo con cortesía", "Usare penso che + congiuntivo"],
        explanation: [
          "Para opinar: secondo me / a mio parere / dal mio punto di vista / per come la vedo io. Para matizar: in un certo senso (en cierto modo), fino a un certo punto (hasta cierto punto), in parte hai ragione, però… (en parte tienes razón, pero…).",
          "El gran salto B1 es penso che / credo che + congiuntivo: penso che sia giusto, credo che abbiano ragione. Acuerdos: sono d'accordo, hai perfettamente ragione. Desacuerdos educados: non sono del tutto d'accordo, mi permetto di dissentire (me permito disentir).",
        ],
        examples: [
          { it: "Secondo me, il turismo di massa va regolamentato.", es: "En mi opinión, el turismo masivo debe regularse." },
          { it: "Credo che abbiano ragione, però dipende dai casi.", es: "Creo que tienen razón, pero depende de los casos." },
        ],
        vocabIds: ["w2-notizia", "w2-litigare"], exerciseIds: ["ex-b1-024", "ex-b1-026", "ex-b1-027", "ex-b1-028"],
        conversationPrompt: { it: "Secondo te, è meglio vivere in città o in campagna? Perché?", es: "Según tú, ¿es mejor vivir en ciudad o campo? ¿Por qué?" },
        checkpointIds: ["ex-b1-024", "ex-b1-027"] },
    ]},
  ],

  /* ══════════ B2 · +2 unidades ══════════ */
  B2: [
    { id: "u-b2-3", level: "B2", title: "La lengua de los medios", titleIt: "La lingua dei media", lessons: [
      { id: "les-b2-5", level: "B2", title: "Congiuntivo passato y relativas", titleIt: "Congiuntivo passato e relative",
        objectives: ["Formar el congiuntivo passato", "Elegir che / cui / il quale en relativas", "Combinar opiniones con hechos pasados"],
        explanation: [
          "El congiuntivo pasado se forma con sia/sei… no: con abbia/abbiano + participio (verbos con avere) o sia/siano + participio concordado (con essere): penso che abbia capito, credo che sia partita. Aparece tras los mismos disparadores del presente: penso che, è possibile che, mi pare che.",
          "Las oraciones de relativo suben de nivel con cui y il quale: il libro che ho letto (complemento directo), la città in cui vivo (tras preposición), il candidato il quale abbia presentato la domanda (registro formal). Il quale concuerda en género y número: la quale, i quali, le quali.",
        ],
        examples: [
          { it: "Penso che Maria sia già partita per Milano.", es: "Creo que María ya ha salido para Milán." },
          { it: "La città in cui vivo è cambiata moltissimo.", es: "La ciudad en la que vivo ha cambiado muchísimo." },
        ],
        vocabIds: ["w2-notizia", "w2-esperimento"], exerciseIds: ["ex-b2-013", "ex-b2-014", "ex-b2-015"],
        conversationPrompt: { it: "Cosa pensi che sia cambiato negli ultimi dieci anni?", es: "¿Qué crees que ha cambiado en los últimos diez años?" },
        checkpointIds: ["ex-b2-013", "ex-b2-014", "ex-b2-015"] },
      { id: "les-b2-6", level: "B2", title: "Conectores avanzados", titleIt: "I connettivi avanzati",
        objectives: ["Enlazar con nonostante, tuttavia, pertanto", "Estructurar un texto argumentativo", "Distinguir causa, contraste y consecuencia"],
        explanation: [
          "Tres familias de conectores B2: contraste (tuttavia, comunque, nonostante + sustantivo o congiuntivo), causa (poiché, dato che, in quanto), consecuencia (pertanto, di conseguenza, per cui). La clave es la puntuación: nonostante il traffico, siamo arrivati; el conector abre la subordinada con coma y la principal cierra.",
          "Para redactar: in primo luogo… in secondo luogo… infine (en primer lugar… en segundo… finalmente); da un lato… dall'altro (por un lado… por otro); vale a dire (es decir); in altre parole (en otras palabras). Con ellos, cualquier texto empieza a respirar.",
        ],
        examples: [
          { it: "Nonostante il traffico, siamo arrivati in orario.", es: "A pesar del tráfico, llegamos puntualmente." },
          { it: "Da un lato capisco, dall'altro non condivido.", es: "Por un lado entiendo, por otro no comparto." },
        ],
        vocabIds: ["w2-notizia"], exerciseIds: ["ex-b2-016", "ex-b2-017", "ex-b2-024"],
        conversationPrompt: { it: "Argomenta: i social media ci uniscono o ci dividono?", es: "Argumenta: ¿las redes nos unen o nos dividen?" },
        checkpointIds: ["ex-b2-016", "ex-b2-017"] },
      { id: "les-b2-7", level: "B2", title: "Cortesía y condizionale composto", titleIt: "Cortesia e condizionale composto",
        objectives: ["Formar el condizionale composto", "Expresar arrepentimiento y deseo irreal", "Suavizar peticiones formales"],
        explanation: [
          "El condizionale composto (avrei/sarei + participio) expresa lo irreal del pasado: avrei mangiato (habría comido), sarei venuto (habría venido). Es el tiempo de los arrepentimientos: avrei dovuto studiare di più (debería haber estudiado más) y de los periodi ipotetici di 3° tipo.",
          "En cortesía formal, el condicional (presente y compuesto) es el rey: Le sarei grato se mi inviasse la documentazione, Avrei preferito una soluzione diversa, Mi chiedevo se fosse possibile… (me preguntaba si sería posible…). Suena diplomático, no distante.",
        ],
        examples: [
          { it: "Se mi avessi avvisato, sarei arrivato prima.", es: "Si me hubieras avisado, habría llegado antes." },
          { it: "Le sarei grato se potesse rispondermi entro venerdì.", es: "Le agradecería que pudiera responderme antes del viernes." },
        ],
        vocabIds: ["w2-candidatura"], exerciseIds: ["ex-b2-018", "ex-b2-023", "ex-c1-014"],
        conversationPrompt: { it: "Cosa avresti fatto diversamente quest'anno?", es: "¿Qué habrías hecho diferente este año?" },
        checkpointIds: ["ex-b2-018"] },
    ]},
    { id: "u-b2-4", level: "B2", title: "Sociedad y debate", titleIt: "Società e dibattito", lessons: [
      { id: "les-b2-8", level: "B2", title: "El periodo ipotetico a fondo", titleIt: "Il periodo ipotetico",
        objectives: ["Distinguir los 3 tipos de hipótesis", "Combinar se + congiuntivo y condizionale", "Debatir escenarios y consecuencias"],
        explanation: [
          "Los tres periodi ipotetici italianos: 1° tipo (real: se piove, resto a casa — indicativo + indicativo/futuro), 2° tipo (irreal presente: se fossi ricco, viaggerei — congiuntivo imperfetto + condizionale presente), 3° tipo (irreal pasado: se avessi studiato, avresti passato l'esame — congiuntivo trapassato + condizionale composto).",
          "Errores calientes de hispanohablantes: usar el condicional tras se (❌ se vorrei → ✓ se volessi), y olvidar el subjuntivo en la hipótesis. Truco: la partícula se “manda” y el verbo principal “obedece” con condicional. En registros coloquiales oyes “se pioveva uscivo lo stesso” (imperfetto por imperfetto): compréndelo, pero escríbelo estándar.",
        ],
        examples: [
          { it: "Se avessi più tempo, imparerei anche il dialetto.", es: "Si tuviera más tiempo, aprendería también el dialecto." },
          { it: "Se l'avessi saputo, non sarei venuto!", es: "¡Si lo hubiera sabido, no habría venido!" },
        ],
        vocabIds: ["w2-tempesta"], exerciseIds: ["ex-b2-019", "ex-b2-020", "ex-b2-021", "ex-b2-023"],
        conversationPrompt: { it: "Se potessi cambiare una cosa del tuo paese, cosa cambieresti?", es: "Si pudieras cambiar una cosa de tu país, ¿qué cambiarías?" },
        checkpointIds: ["ex-b2-019", "ex-b2-021"] },
      { id: "les-b2-9", level: "B2", title: "Publicidad y eslóganes", titleIt: "Pubblicità e slogan",
        objectives: ["Analizar eslóganes y figuras retóricas", "Entender el italiano de marketing", "Crear un eslogan sencillo"],
        explanation: [
          "El italiano publicitario juega con imperativos, superlativos y rimas: Fatti afferrare dalle emozioni, La qualità che non si vede, Sempre più buono. Estructuras típicas: comparativos (più X che mai), genitivos poéticos (il gusto della tradizione), anglicismos (il look, il trend).",
          "Figuras que debes reconocer: l'anafora (ripetizione: Amo l'Italia, amo la vita), la metafora (il cuore della città), l'iperbole (il migliore del mondo), il gioco di parole (Less is more → Meno è più). La publicidad es un gimnasio gratuito de retórica B2-C1.",
        ],
        examples: [
          { it: "Amo l'Italia, amo la vita, amo il caffè.", es: "Amo Italia, amo la vida, amo el café." },
          { it: "Il gusto della tradizione, dal 1962.", es: "El sabor de la tradición, desde 1962." },
        ],
        vocabIds: ["w2-colonnasonora"], exerciseIds: ["ex-b2-022", "ex-let-012"],
        conversationPrompt: { it: "Crea uno slogan per un gelato artigianale.", es: "Crea un eslogan para un helado artesanal." },
        checkpointIds: ["ex-b2-022"] },
    ]},
  ],

  /* ══════════ C1 · +1 unidad ══════════ */
  C1: [
    { id: "u-c1-3", level: "C1", title: "Estilo y registro", titleIt: "Stile e registro", lessons: [
      { id: "les-c1-5", level: "C1", title: "Nominalización académica", titleIt: "La nominalizzazione",
        objectives: ["Sustantivar verbos y adjetivos", "Elevar el registro de un texto", "Reconocer la nominalización en ensayos"],
        explanation: [
          "El italiano académico prefiere nombres a verbos: dal momento che si è verificato un errore → a seguito del verificarsi di un errore. Patrones frecuentes: il + infinito (il fiorire della cultura), la + infinito (la crescita del Pil), l' + participio (la crescente complessità).",
          "Otras nominalizaciones de manual: mettere in atto → l'attuazione, prendere atto → la presa d'atto, dare origine → l'origine/la genesi. Con ellas, las frases pierden agente y ganan objetividad: si procederà alla verifica (se procederá a la verificación) — pasiva implícita, cero sujetos, tono de artículo científico.",
        ],
        examples: [
          { it: "L'attuazione della riforma richiede tempi lunghi.", es: "La aplicación de la reforma requiere tiempos largos." },
          { it: "Si è proceduto alla verifica dei dati.", es: "Se ha procedido a la verificación de los datos." },
        ],
        vocabIds: ["w2-esperimento", "w2-inchiesta"], exerciseIds: ["ex-c1-007", "ex-c1-011"],
        conversationPrompt: { it: "Riscrivi in stile formale: “Abbiamo fatto un controllo e c'è stato un errore.”", es: "Reescribe en estilo formal: “Hicimos un control y hubo un error.”" },
        checkpointIds: ["ex-c1-007", "ex-c1-011"] },
      { id: "les-c1-6", level: "C1", title: "Registros: formal, coloquial, literario", titleIt: "I registri",
        objectives: ["Alternar tres registros del italiano", "Reconocer marcas de coloquialidad", "Traducir el tono, no solo las palabras"],
        explanation: [
          "El italiano cambia de piel según el registro. Formal: effettuare, procedere, richiedere, in merito a, cortesemente. Coloquial: fare, sistemare, chiedere, circa, dai!. Literario: verbs de acción con prefijos (sopravvenire, dilatare), sinónimos cultos (auspicio invece de speranza).",
          "Marcas de coloquialidad: che esclamativo (che bello!), si impersonal coloquial (si sa come va), parolastronzo tipo che palle, mica (non è mica vero), insomma, poi. El C1 real es saber que “il documento è stato redatto” y “abbiamo buttato giù il documento” cuentan la misma historia en dos mundos.",
        ],
        examples: [
          { it: "Le trasmettiamo i dati richiesti in allegato.", es: "Le transmitimos los datos solicitados adjuntos." },
          { it: "Ti ho mandato quella roba via mail, dai.", es: "Te mandé esa cosa por correo, ¡vamos!" },
        ],
        vocabIds: ["w2-trama"], exerciseIds: ["ex-c1-008", "ex-c1-011", "ex-c1-013"],
        conversationPrompt: { it: "Presenta la stessa notizia in due registri: formale e colloquiale.", es: "Presenta la misma noticia en dos registros: formal y coloquial." },
        checkpointIds: ["ex-c1-008"] },
      { id: "les-c1-7", level: "C1", title: "Modi di dire esenciales", titleIt: "Modi di dire",
        objectives: ["Usar 12 idiomas de alta frecuencia", "Descubrir su origen y registro", "Evitar falsos amigos idiomáticos"],
        explanation: [
          "El italiano vive de modismos: in bocca al lupo (buena suerte; respuesta: crepi!), non vedo l'ora (no puedo esperar), capitare a fagiolo (llegar como anillo al dedo), fare il Grande Puffo (hacerse el grande), essere al verde (estar sin blanca), prendere due piccioni con una fava (matar dos pájaros de un tiro), rompere il ghiaccio (romper el hielo), la goccia che fa traboccare il vaso (la gota que colma el vaso).",
          "Falsos amigos idiomáticos con el español: “essere al settimo cielo” sí es estar en el séptimo cielo, pero “prendere per il naso” es tomar el pelo, no llevar de las narices. Y ojo: “che palle” no es una exageración de aburrimiento, es fastidio directo. Los idiomas se aprenden con contexto y registro, nunca sueltos.",
        ],
        examples: [
          { it: "In bocca al lupo per l'esame! — Crepi!", es: "¡Buena suerte en el examen! — ¡Gracias! (lit. ¡que reviente!)" },
          { it: "Sono al verde fino a fine mese.", es: "Estoy sin blanca hasta fin de mes." },
        ],
        vocabIds: ["w2-guarire"], exerciseIds: ["ex-c1-009", "ex-c1-010", "ex-c1-012", "ex-c1-013"],
        conversationPrompt: { it: "Usa un modo di dire per descrivere la tua settimana.", es: "Usa un modismo para describir tu semana." },
        checkpointIds: ["ex-c1-009", "ex-c1-010"] },
    ]},
  ],

  /* ══════════ C2 · +1 unidad ══════════ */
  C2: [
    { id: "u-c2-3", level: "C2", title: "Maestría estilística", titleIt: "Maestria stilistica", lessons: [
      { id: "les-c2-5", level: "C2", title: "Estilo literario y retórica", titleIt: "Stile letterario e retorica",
        objectives: ["Identificar anáfora, hipérbaton y quiasmo", "Leer prosa y poesía con ojo técnico", "Imitar estructuras de la gran prosa italiana"],
        explanation: [
          "La retórica italiana hereda de la tradición clásica: l'anafora (ripetizione iniziale: “Roma, Roma, non basta una vita”), l'iperbato (inversione sintattica: “del secolo l'oscuro velo”), il chiasmo (struttura ABBA: “chi ama comprende, chi comprende ama”), la metafora filata (metafora estesa lungo tutto il testo).",
          "La gran prosa del Novecento — Montale, Gadda, Calvino, Levi — enseña ritmo: periodi brevi dopo lunghi, incisi che respirano, lessico concreto che diventa astratto. Para escribir C2: lee un párrafo en voz alta, marca el ritmo con lápiz, luego escribe el tuyo imitando la partitura.",
        ],
        examples: [
          { it: "Chi ama comprende, chi comprende ama.", es: "Quien ama comprende, quien comprende ama (quiasmo)." },
          { it: "Del secolo l'oscuro velo si squarciò.", es: "El oscuro velo del siglo se rasgó (hipérbato)." },
        ],
        vocabIds: ["w2-poeta", "w2-verso", "w2-trama"], exerciseIds: ["ex-c2-005", "ex-c2-006", "ex-c2-010"],
        conversationPrompt: { it: "Analizza la figura retorica: “Roma, Roma, cuore della mia città.”", es: "Analiza la figura retórica: “Roma, Roma, corazón de mi ciudad.”" },
        checkpointIds: ["ex-c2-005"] },
      { id: "les-c2-6", level: "C2", title: "Variantes regionales y lengua viva", titleIt: "Varianti regionali e lingua viva",
        objectives: ["Reconocer marcas de italiano regional", "Distinguir lengua estándar, dialecto y minoría", "Entender el italiano contemporáneo de la calle"],
        explanation: [
          "El italiano estándar convive con dialéctos y lenguas minoritarias protegidas por la ley 482/1999: friulano, sardo, ladino, occitano, catalano di Alghero, sloveno, tedesco… El “italiano regionale” tiñe el estándar: al norte si dice “giù in piazza” como en el sur se dice “abbasso”, y el pasado remoto es diario en Toscana pero literario en Milán.",
          "Lengua viva: el italiano de hoy incorpora anglicismos (smartworking, spoilerare), formas en -zione flessiva (fattibilità), neologismi politici (grillino, leghista) y el lenguaje dei giovani che cambia por estaciones: “spettacolare” → “mitico” → “pauroso”. El C2 escucha estas capas sin perder la norma.",
        ],
        examples: [
          { it: "Che freddo che fa, sono tutto intirizzito!", es: "¡Qué frío hace, estoy entumecido! (marca del norte)" },
          { it: "Il friulano è lengua minoritaria riconosciuta dallo Stato.", es: "El friulano es lengua minoritaria reconocida por el Estado." },
        ],
        vocabIds: ["w2-inchiesta"], exerciseIds: ["ex-c2-007", "ex-let-013"],
        conversationPrompt: { it: "La tua lingua ha dialetti? Racconta la varietà del tuo paese.", es: "¿Tu lengua tiene dialectos? Cuenta la variedad de tu país." },
        checkpointIds: ["ex-c2-007"] },
      { id: "les-c2-7", level: "C2", title: "Escritura académica", titleIt: "Scrittura accademica",
        objectives: ["Estructurar una tesis con argumentación", "Usare conettivi de refinamiento", "Citar, matizar y concluir con precisión"],
        explanation: [
          "La escritura académica italiana exige: tesi chiara nell'introduzione, argomentazione a scaletta (in primo luogo, in secondo luogo), controargomentazione (eppure, peraltro, nondimeno) e sintesi finale (in conclusione, alla luce di quanto esposto). El tono es impersonal: si ritiene, appare evidente, emerge come.",
          "Citar con eleganza: secondo quanto afferma Autore (anno), come evidenziato da…, alla luce dei dati di… Para matizar sin debilitar: per certi versi, se non altro, quanto meno, in ultima analisi. La precisión léxica es C2: “sostenere” no es “affermare” (implica carga argumental), “evidenziare” no es “dimostrare”.",
        ],
        examples: [
          { it: "Alla luce di quanto esposto, si ritiene opportuno rivedere il modello.", es: "A la luz de lo expuesto, se considera oportuno revisar el modelo." },
          { it: "Peraltro, ogni lingua colora la realtà a modo suo.", es: "Por lo demás, cada lengua colorea la realidad a su manera." },
        ],
        vocabIds: ["w2-trama", "w2-esperimento"], exerciseIds: ["ex-c2-008", "ex-c2-009", "ex-let-014"],
        conversationPrompt: { it: "Scrivi la tesi di un saggio su: “La lingua è una gabbia o una lente?”", es: "Escribe la tesis de un ensayo sobre: “¿La lengua es jaula o lente?”" },
        checkpointIds: ["ex-c2-008"] },
    ]},
  ],
};
