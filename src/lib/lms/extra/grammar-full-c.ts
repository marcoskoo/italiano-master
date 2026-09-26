import type { GrammarTopic } from "../types";

/* ── Grammatica completa v3.0 · bloque C (C1–C2) ─────────────────────── */

export const GRAMMAR_FULL_C: GrammarTopic[] = [
  /* ══════════ C1 ══════════ */
  {
    id: "g3-c1-consecutive", level: "C1", title: "Oraciones consecutivas", titleIt: "Le consecutive",
    summary: "così…che, tanto…da, talmente…che: expresar consecuencia con intensidad.",
    explanation: [
      "Las consecutivas italianas enlazan causa y efecto con cuantificadores. Con che (verbo conjugado): era così stanco che si addormentò in piedi (estaba tan cansado que se durmió de pie); parlava talmente veloce che nessuno capiva. Con da + infinitivo (mismo sujeto): è tanto stanco da non reggersi in piedi (está tan cansado que no se tiene en pie); sei così gentile da aiutarmi?. La estructura con da es más elegante y compacta.",
      "Matiz importante: così/tanto indican grado alto pero medible; talmente añe énfasis casi exclamativo. La consequential “formal” usa di conseguenza, per cui, tanto che: ha piovuto per giorni, tanto che il fiume è straripato. En C1 conviene dominar también la consecutiva con tale…che: ebbe un tale successo che lo tradussero in dieci lingue. En español “tan…que” cubre todo; el italiano afina: così/tanto/talmente/tale según el registro y la estructura (da + infinito o che + verbo).",
    ],
    examples: [
      { it: "Era così buono che ne mangiai tre porzioni.", es: "Era tan bueno que comí tres porciones." },
      { it: "Talmente assorto da non sentirmi.", es: "Tan absorto que no me oyó (da + infinito)." },
      { it: "Ha pianto tanto che le si sono gonfiati gli occhi.", es: "Lloró tanto que se le hincharon los ojos." },
      { it: "Uno scrittore tale che le scuole lo studiano.", es: "Un escritor tal que las escuelas lo estudian." },
    ],
    problems: [
      {
        title: "che o da",
        question: "Completa: “È così stanco ___ addormentarsi in piedi.”",
        steps: [
          "Mismo sujeto (è stanco / addormentarsi).",
          "Mismo sujeto → da + infinitivo.",
        ],
        conclusion: "È così stanco da addormentarsi in piedi.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "g3-c1-gerundio-participio", level: "C1", title: "Gerundio y participio avanzados", titleIt: "Gerundio e participio avanzati",
    summary: "gerundio passato (avendo visto), participio presente (un libro avvincente).",
    explanation: [
      "El gerundio passato (avendo + participio / essendo + participio) expresa anterioridad respecto al verbo principal, con el MISMO sujeto: avendo finito il lavoro, uscì (habiendo terminado el trabajo, salió); essendo stato avvisato, non si presentò (habiendo sido avisado, no se presentó — pasiva). Sustituye a subordinate causali y temporali en registro cuidado: poiché aveva finito → avendo finito.",
      "El participio presente italiano ya NO es forma verbal conjugada (a diferencia del español “el hombre que camina”); sobrevive solo como ADJETIVO: un film avvincente (una película fascinante), una notizia sconvolgente, un libro coinvolgente, sostanze ustionanti. Se forma con -ante/-ente (parlante, credente, dormiente). La perifrasis “el que camina” se dice che cammina o, más culto, camminante como adjetivo. Confusión clásica del hispanohablante: traducir “estando” por “stando” cuando corresponde essendo: essendo tardi, andiamo (siendo tarde, vamos).",
    ],
    examples: [
      { it: "Avendo già mangiato, rifiutò gentilmente.", es: "Habiendo ya comido, rechazó gentilmente." },
      { it: "Essendo arrivato in ritardo, chiese scusa.", es: "Habiendo llegado tarde, pidió perdón." },
      { it: "Un giallo avvincente, non smetti di leggere.", es: "Un policial apasionante, no dejas de leer." },
      { it: "Notizie sconvolgenti da Kabul.", es: "Noticias estremecedoras de Kabul." },
    ],
    problems: [
      {
        title: "Compactar con gerundio passato",
        question: "Reescribe: “Poiché aveva perso il treno, prese un taxi.”",
        steps: [
          "Causal con mismo sujeto → gerundio passato.",
          "avere + participio: avendo perso.",
        ],
        conclusion: "Avendo perso il treno, prese un taxi.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "g3-c1-dislocazioni", level: "C1", title: "La sintaxis del italiano hablado", titleIt: "Dislocazioni e anafora",
    summary: "Il caffè, lo prendo amaro: dislocaciones, topicalización y elipsis del italiano real.",
    explanation: [
      "El italiano hablado real reorganiza la frase para poner el TEMA al principio: dislocação a la izquierda con pronombre-resumen (il caffè, LO prendo amaro; a Marco, GLI ho già detto), dislocación a la derecha con pronombre anticipado (LO prendo amaro, il caffè) y topicalización pura sin pronombre (il caffè, mi piace amaro — el verbo ya concuerda). Este mecanismo es ubicuo: la risposta natural a “prendi il tè?” es “il caffè lo prendo, il tè no”.",
      "Otras marcas de la oralidad: la anáfora con i/le/li resumen (conosci Marco? — no lo vedo MAI), las frases scisse o cleft (è MARCO che mi ha aiutato — es Marco quien me ayudó; el español “cleft” es raro, el italiano lo usa a diestro y siniestro), las preguntas eco (e io che ne so? — ¿y yo qué sé?), las left-dislocations afectivas (questo libro, poi, che fatica!). En C1 hay que PRODUCIRLAS: suenan naturales, no incorrectas. En escritura formal se sustituyen por subordinadas y concordancias estándar.",
    ],
    examples: [
      { it: "Il libro, l'ho già finito.", es: "El libro, ya lo terminé (dislocación izquierda)." },
      { it: "Lo prendo io, il conto.", es: "Yo pago la cuenta (dislocación derecha)." },
      { it: "È stata Maria a convincermi.", es: "Fue María quien me convenció (cleft)." },
      { it: "Il cinema sì, il teatro no.", es: "El cine sí, el teatro no (elipsis)." },
    ],
    problems: [
      {
        title: "Reconstruir la dislocación",
        question: "¿Qué pronombre resume en “La pizza, ___ mangio sempre”? ",
        steps: [
          "pizza = objeto directo femenino singular.",
          "Directo f. sing. → la.",
          "Se contrae con la vocal del verbo: la mangio → l'è… no: la mangio.",
        ],
        conclusion: "La pizza, la mangio sempre (nunca “le mangio”: le es indirecto).",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "g3-c1-remoto-uso", level: "C1", title: "Passato remoto vs passato prossimo", titleIt: "Remoto o prossimo?",
    summary: "La frontera geográfica y narrativa entre los dos pasados italianos.",
    explanation: [
      "El italiano reparte el pasado según la DISTANCIA PERCIBIDA, no solo la cronológica. En el norte el passato prossimo cubre casi todo (hanno sposato nel 1970, ho mangiato ieri, e incluso la historia: Napoleone è morto); en el centro-sur y en la escritura el remoto se usa para hechos concluidos y puntuales (nacque, morì, scrisse). La literatura narrativa usa el remoto para el hilo principal de la historia (una mattina Gigetta si svegliò tardi) y el imperfecto para los decorados (il sole splendeva).",
      "Reglas prácticas C1: (1) hechos de la propia biografía en diálogo → prossimo, siempre; (2) historia, biografías y narración escrita → remoto; (3) la mezcla remoto (eventos) + imperfetto (descripciones/acción en curso) crea el famoso “fondo narrativo”: entrò mentre dormivano; (4) con mentale verbs (pensare, credere, sembrare) el remoto da paso al congiuntivo trapassato en estilo indirecto. Al leer a Ferrante, Camilleri o Primo Levi reconocerás el sistema completo en acción.",
    ],
    examples: [
      { it: "Nel 1861 nacque l'Italia unita.", es: "En 1861 nació la Italia unida." },
      { it: "Ho visto Marco ieri al mercato.", es: "Vi a Marco ayer en el mercado (biografía)." },
      { it: "Piovve per tre giorni e il fiume straripò.", es: "Llovió tres días y el río se desbordó." },
      { it: "Mentre studiava a Bologna, conobbe Elsa.", es: "Mientras estudiaba en Bolonia, conoció a Elsa." },
    ],
    problems: [
      {
        title: "Elegir el pasado",
        question: "¿Remoto o prossimo? “Ieri ___ (andare) al mare.”",
        steps: [
          "Ayer = mi biografía inmediata.",
          "Diálogo/habla cotidiana → prossimo.",
        ],
        conclusion: "Ieri sono andato al mare (remoto sonaría pedante o sureño).",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "g3-c1-verbi-fraseologici", level: "C1", title: "Verbos fraseológicos", titleIt: "Verbi fraseologici",
    summary: "stare per, andare + gerundio, mettersi a, venire + participio: aspecto en italiano.",
    explanation: [
      "El italiano expresa el ASPECTO (iniciar, continuar, estar a punto de) con perifrasis: stare per + infinito = estar a punto de (il treno sta per partire); mettersi a + infinito = ponerse a (si è messo a piovere); andare + gerundio = ir + gerundio, progresivo lento (andiamo avanti piano, lavorando… il lavoro va avanti); continuare a / seguitare a = seguir + gerundio; stare + gerundio = progresivo estándar.",
      "Otras perifrasis útiles: venire + participio = pasiva en curso (i lavori vengono ultimati — más dinámica que sono ultimati); restare/rimanere + participio = resultativo (rimase ferito, resta inteso che…); finire per + infinito = acabar + gerundio (ho finito per accettare); fare in tempo a = llegar a tiempo a (non ho fatto in tempo a salutarlo); avere da + infinito = tener que (ho da fare — coloquial culto). Dominar estas perifrasis es lo que hace sonar C1: no son adornos, son la manera nativa de afinar el tiempo del verbo.",
    ],
    examples: [
      { it: "Stavo per chiamarti!", es: "¡Estaba a punto de llamarte!" },
      { it: "Si è messo a ridere senza motivo.", es: "Se puso a reír sin motivo." },
      { it: "Il progetto va avanti bene.", es: "El proyecto va avanzando bien." },
      { it: "Ho finito per abituarmi.", es: "Acabé acostumbrándome." },
    ],
    problems: [
      {
        title: "La perifrasis de inminencia",
        question: "Traduce: “El avión está a punto de despegar.”",
        steps: [
          "Inminencia → stare per + infinito.",
          "despegar → decollare.",
        ],
        conclusion: "L'aereo sta per decollare.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "g3-c1-formazione-parole", level: "C1", title: "Formación de palabras", titleIt: "La formazione delle parole",
    summary: "Prefijos y sufijos productivos: cómo multiplicar tu vocabulario por tres.",
    explanation: [
      "Los prefijos italianos modifican el significado con precisión: s- privativo (fare → sfare no; meglio: montare → smontare, caricare → scaricare), ri- repetitivo (fare → rifare, leggere → rileggere), in-/im- negativo sobre adjetivos (possibile → impossibile, paziente → impaziente), anti- (antifurto), auto- (autoparco? — meglio parcheggio; autostima), pre- (prevedere), sotto- (sottolineare), sopra- (sopravvalutare), ri-/str- intensivo (stracotto, stravecchio).",
      "Los sufijos nominales crean nombres de verbos y adjetivos: -zione (costruzione), -mento (pagamento), -tore/-trice (venditore, attrice), -ista (dentista), -ità (utilità), -ezza (bellezza), -ore (amore, odiatore). Los adjetivales: -oso (rilassante? no: rilassato; -oso = pieno di: famoso, ombroso), -abile/-ibile (credibile, mangiabile), -esco (dantesco). Los diminutivos/alterados: -ino/-etto/-ello (ragazzino, libretto, ventello), -one (ragazzone), -accio (tempaccio — despectivo). El español comparte la mayoría, pero el italiano altera MUCHO más: il caffè → un caffèz­zino? (no: caffettino/caffè; tavolino, tavernetta).",
    ],
    examples: [
      { it: "scaricare → caricare (antónimos por prefijo)", es: "descargar ↔ cargar" },
      { it: "un tempaccio, un caffè? un cappuccino", es: "untiempo feo — alteración despectiva" },
      { it: "La rilettura del contratto (lettura + ri-)", es: "La relectura del contrato" },
      { it: "Ingegneria: niente di impossibile (-ibile)", es: "Ingeniería: nada imposible" },
    ],
    problems: [
      {
        title: "Desmontar una palabra nueva",
        question: "¿Qué significa “sottolineatura”?",
        steps: [
          "Prefijo sotto- (debajo) + linea (línea) + -atura (acción/result).",
          "Acción de poner debajo de la línea.",
        ],
        conclusion: "Sottolineatura = el subrayado (de un texto).",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Prefijos y sufijos productivos",
        headers: ["Elemento", "Valor", "Ejemplo"],
        rows: [
          ["s-", "privación/inversión", "smontare, scaricare"],
          ["ri-", "repetición", "rileggere, rifare"],
          ["in-/im-", "negación", "possibile → impossibile"],
          ["-zione", "acción/resultado", "costruire → costruzione"],
          ["-tore / -trice", "agente", "vendere → venditore"],
          ["-ità", "cualidad abstracta", "utile → utilità"],
          ["-abile / -ibile", "posibilidad", "mangiare → mangiabile"],
          ["-ino / -accio", "diminutivo / despectivo", "tavolo → tavolino; tempo → tempaccio"],
        ],
      },
    ],
  },

  /* ══════════ C2 ══════════ */
  {
    id: "g3-c2-sequenza-tempi", level: "C2", title: "Concordancia total de tiempos y modos", titleIt: "La sequenza dei tempi",
    summary: "El sistema completo de la concordancia: qué tiempo exige cada principal.",
    explanation: [
      "La concordancia italiana (sequenza dei tempi) sigue dos leyes. Ley 1: un principal en presente/futuro rige subjuntivo presente o pasado según la simultaneidad (penso che sia / che fosse stato via); un principal en pasado rige subjuntivo imperfetto o trapassato (pensavo che fosse / che fosse stato). Ley 2: el condizionale aparece en subordinadas tras pasado para el futuro relativo (disse che sarebbe venuto — nunca “verrà” tras disse in estilo indirecto normativo).",
      "En C2 entran las excepciones elegantes: el llamado “congiuntivo riporto” (el subjuntivo puede mantenerse en presente si el hecho sigue vigente: mi ha detto che sia… no: ha detto che È ancora valida la notizia — indicativo si sigue siendo verdad), el futuro en el pasado con斯塔 hipótesis (pensavo che saresti arrivato), el congiuntivo tras superlativo implícito (è il migliore che io conosca), y el periodo ipotetico misto (se avessi studiato, ora saprei — la hipótesis pasada con consecuencia presente). La norma escrita cuidada (ensayos, CILS C2) exige este control fino; el habla coloquial lo flexibiliza.",
    ],
    examples: [
      { it: "Penso che sia tardi.", es: "Creo que es tarde (principal presente → subj. presente)." },
      { it: "Pensavo che fosse tardi.", es: "Pensaba que era tarde (principal pasado → subj. imperfecto)." },
      { it: "Sapevo che sarebbe arrivato.", es: "Sabía que llegaría (futuro en el pasado)." },
      { it: "Se avessi accettato, ora sarei a Roma.", es: "Si hubiera aceptado, ahora estaría en Roma (misto)." },
    ],
    problems: [
      {
        title: "Secuencia tras pasado",
        question: "Completa: “Era convinto che io ___ (sapere) la verità.”",
        steps: [
          "Principal en pasado (era convinto).",
          "Simultáneo → subjuntivo imperfecto.",
          "sapere → sapessi.",
        ],
        conclusion: "Era convinto che io sapessi la verità.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "El mapa de la sequenza dei tempi",
        headers: ["Principal", "Simultáneo", "Anterior", "Posterior"],
        rows: [
          ["presente", "che sia", "che sia stato", "che sarà"],
          ["passato", "che fosse", "che fosse stato", "che sarebbe stato"],
          ["condizionale", "che fosse", "che fosse stato", "che sarebbe stato"],
        ],
        note: "El indicativo entra con verbos de certeza (so che è / sapevo che era).",
      },
    ],
  },
  {
    id: "g3-c2-substandard", level: "C2", title: "Registro coloquial y variantes", titleIt: "L'italiano substandard",
    summary: "Che fai?, nun se po' ddà, ghe l'ho: la lengua real frente a la norma.",
    explanation: [
      "El italiano “subestándar” (parlato) incluye: truncamientos (che fai? per cosa fai; non è vero → è vero?;telefono → cellu), mica (non è mica vero!), poi/po' (dopo poi), insomma, cioè, tipo como relleno (tipo, ero tipo stanco), el si impersonal de infinito (da mangiare ce n'è), las preguntas con ecô (ecche?). Reconocerlos es C2; usarlos con mesura es naturalidad.",
      "La variación diatópica marca: norte (ghe l'ho, el clítico ga/lombardo, la negación postverbal mía no: no so miga), centro (ma che stai a ddì en romanesco), sur (nun se po' fa' napoletano, el artículo 'o/'a, la periferasta acca'…). El italiano regional estándar (uso medio) absorbe rasgos: la preposición in+ciudad del norte (vengo da Milano), la a personal del sur (aspetto a Marco), el passato remoto del sur en la vida diaria. En escritura C2 se alternan registro coloquial consciente (diálogo) y norma (narración), como en Camilleri o en el cine de Moretti.",
    ],
    examples: [
      { it: "Che fai stasera? (per: cosa fai)", es: "¿Qué haces esta noche? (truncamiento estándar)" },
      { it: "Non è mica vero!", es: "¡Para nada es cierto! (mica enfático)" },
      { it: "Ghe l'ho minga (milanés)", es: "No lo tengo (dialecto, no uses en examen)" },
      { it: "Nun se po' capì niente (napolitano)", es: "No se entiende nada (napolitano)" },
    ],
    problems: [
      {
        title: "Detectar el registro",
        question: "¿“Non vedo un tubo” es estándar?",
        steps: [
          "un tubo = nada (coloquial eufemístico).",
          "Registro: hablado informal.",
        ],
        conclusion: "No: es subestándar. En entrevista de trabajo: non vedo niente.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "g3-c2-burocratico", level: "C2", title: "El registro burocrático y los latinismos", titleIt: "L'italiano burocratico",
    summary: "istanza, decreto, ex novo, iter: la lengua de administraciones y académicos.",
    explanation: [
      "El italiano burocrático tiene su gramática: nominalización extrema (effettuare il pagamento per pagare), perífrasis con in/da + sustantivo (in caso di necessità, a mezzo PEC), participios absolutos (vista la richiesta, considerata la normativa), gerundios de causa (ricorrendo all'art. 3), y un léxico propio: istanza (solicitud), decesso (fallecimiento), decreto, deliberazione, provvedimento, enti (entidades), URP (oficina de relaciones públicas), PEC (correo certificado), CODICE FISCALE. En C2 hay que redactarlo (por ejemplo para una domanda di congedo) y parafrasearlo en lengua común.",
      "Los latinismos vivos son frecuentes en textos cultos y periodísticos: ex novo (de nuevo), iter (proceso, con plural itinera), albo (registro profesional), aut-aut (o esto o lo otro), improvviso: sine die (sin fecha), ad hoc (a medida), in itinere (en curso), de iure/de facto (de derecho/de hecho), blitz, curriculum, viceversa, cahiers de doléances no (francés). El español comparte muchos, pero el italiano usa albo e iter a diario donde el español diría “colegio profesional” y “procedimiento”: iscriversi all'albo degli avvocati; l'iter della legge.",
    ],
    examples: [
      { it: "Si chiede la concessione di un congedo straordinario.", es: "Se solicita la concesión de una licencia extraordinaria." },
      { it: "La domanda va presentata a mezzo PEC.", es: "La solicitud debe presentarse por correo certificado." },
      { it: "Iter della legge: dallaula… l'iter legislativo è lungo.", es: "El procedimiento de la ley es largo." },
      { it: "Ripartire ex novo.", es: "Recomenzar de nuevo." },
    ],
    problems: [
      {
        title: "Traducir burocracia a lengua común",
        question: "¿Cómo dirías “effettuare il versamento” en lengua común?",
        steps: [
          "effettuare = fare (elevado).",
          "versamento = pagamento (depósito).",
        ],
        conclusion: "pagare / fare il bonifico (lengua común).",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "g3-c2-letterario", level: "C2", title: "La lengua literaria", titleIt: "La lingua letteraria",
    summary: "Remoto narrativo, inversión, hipérbaton: leer y apreciar el italiano literario.",
    explanation: [
      "La prosa literaria italiana despliega recursos que conviene reconocer: el remoto narrativo como hilo (si svegliò, uscì, vide), el imperfecto de fondo (pioveva da ore), las inversiones sujetas al final (scese lentamente la scala — objeto anticipado), las subordinadas absolutas con participio (finito il lavoro, uscì — gerundio absoluto), el estilo indirecto libre (pensava: era tutto inutile — la voz del personaje sin comillas) y el léxico altezzoso (fatuo, esiziale, iattura, ostico).",
      "La poesía desde el Duecento aporta el endecasílabo (11 sílabas: “Tanto gentile e tanto onesta pare”), la rima alternada del soneto petrarquista y el verso sciolto (blanco) del ottocento. La narrativa moderna (Ferrante, Saviano) mezcla dialecto y estándar, rompiendo la tradizione manzoniana. Para C2: leer con conciencia de estos mecanismos, citar (come dice Leopardi…), y en escritura creativa atreverse con el imperfecto de fondo y el cleft narrativo (fu allora che capì).",
    ],
    examples: [
      { it: "Finito il lavoro, uscì in silenzio.", es: "Terminado el trabajo, salió en silencio (participio absoluto)." },
      { it: "Fu allora che capì tutto.", es: "Fue entonces cuando entendió todo (cleft narrativo)." },
      { it: "Pioveva da ore sulle sue scarpe chiare.", es: "Llovía desde hacía horas sobre sus zapatos claros." },
      { it: "Tanto gentile e tanto onesta pare (Dante)", es: "Tan gentil y tan honesta parece." },
    ],
    problems: [
      {
        title: "El participio absoluto",
        question: "¿Qué estructura hay en “Ultimata la cena, sparecchiarono”?",
        steps: [
          "Ultimata = participio pasado con valor temporal.",
          "Sin sujeto explícito propio: mismo sujeto de sparecchiarono.",
        ],
        conclusion: "Es un participio absoluto: “terminada la cena, despejaron la mesa”.",
      },
    ],
    exerciseIds: [],
  },
];
