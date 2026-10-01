import type { CbUnit } from "../cambridge";

/* ═══ B2 · Comunicazione avanzata — 12 unità comunicative ════════════ */

export const CB_B2: CbUnit[] = [
  {
    id: "cu-b2-01", n: 1, level: "B2",
    title: "Debatir con elegancia", titleIt: "Discutere con eleganza",
    img: "/images/conversazione/cs-18.jpg",
    goal: "Sostener tesis, matizar y rebatir en un debate formal",
    goals: ["Argumentar con congiuntivo imperfetto", "Rebatir sin romper la relación", "Moderar y ceder el turno"],
    scenario: "Círculo de debate en un café literario de Turín: «¿Deberían prohibirse los coches en los centros históricos?». Tesis, antítesis y matices: el nivel B2 en estado puro.",
    dialogue: [
      { speaker: "Moderatore", it: "Aprimo il dibattito: zone pedonali ovunque? Chi inizia?", es: "Abro el debate: ¿zonas peatonales en todas partes? ¿Quién empieza?" },
      { speaker: "Tu", it: "Io sostengo che le zone ZTL dovrebbero essere ampliate: l'aria è un diritto.", es: "Yo sostengo que las zonas ZTL deberían ampliarse: el aire es un derecho." },
      { speaker: "Giulia", it: "Capisco il punto, però non sembra che tu consideri i negozianti: molti chiuderebbero.", es: "Entiendo el punto, pero no parece que consideres a los comerciantes: muchos cerrarían." },
      { speaker: "Tu", it: "È un rischio reale. Sebbene il commercio soffra all'inizio, le città come Pontremoli dimostrano il contrario.", es: "Es un riesgo real. Aunque el comercio sufra al principio, ciudades como Pontremoli demuestran lo contrario." },
      { speaker: "Giulia", it: "Non è che io sia contro, intendiamoci: chiedo solo gradualità.", es: "No es que yo esté en contra, claro: solo pido gradualidad." },
      { speaker: "Tu", it: "Su questo siamo d'accordo. Basterebbe una transizione di due anni con incentivi.", es: "En esto estamos de acuerdo. Bastaría una transición de dos años con incentivos." },
      { speaker: "Moderatore", it: "Ottima sintesi! Mi sembrava che vi foste capiti, alla fine.", es: "¡Óptima síntesis! Me parecía que os habíais entendido, al final." },
      { speaker: "Tu", it: "Beh, il dibattito serve a questo: non a vincere, ma ad avvicinarsi.", es: "Bueno, el debate sirve para eso: no para ganar, sino para acercarse." },
    ],
    comprehension: [
      { q: "¿Cuál es la tesis del protagonista?", options: ["Prohibir todo comercio", "Ampliar las zonas ZTL", "Más coches"], answer: 1 },
      { q: "¿Qué objeción pone Giulia?", options: ["El aire no importa", "Los comerciantes cerrarían", "Es ilegal"], answer: 1 },
      { q: "¿En qué coinciden al final?", options: ["En una transición gradual con incentivos", "En prohibir ya", "En no hacer nada"], answer: 0 },
    ],
    chunks: [
      { it: "Io sostengo che…", es: "Yo sostengo que…" },
      { it: "Non sembra che tu consideri…", es: "No parece que consideres…" },
      { it: "Sebbene il commercio soffra, …", es: "Aunque el comercio sufra,…" },
      { it: "Non è che io sia contro, …", es: "No es que yo esté en contra,…" },
      { it: "Su questo siamo d'accordo.", es: "En esto estamos de acuerdo." },
      { it: "Basterebbe…", es: "Bastaría…" },
    ],
    grammar: {
      focus: "Congiuntivo imperfetto en la argumentación",
      inductive: [
        { it: "Sosterrei che fosse una buona idea.", es: "Sostendría que fuera una buena idea." },
        { it: "Sebbene fosse difficile, ci riuscimmo.", es: "Aunque fuera difícil, lo logramos." },
        { it: "Mi sembrava che avessi ragione.", es: "Me parecía que tuvieras razón." },
      ],
      rule: [
        "El congiuntivo imperfetto (fossi, avessi, facesse, sembrasse) vive en la argumentación: tras sebbene/benché (aunque), come se (como si), non che… (no es que…), mi sembrava che… (me parecía que).",
        "La caja B2 de debate: sostengo che, obietterei che, purtroppo devo dissentire, su questo siamo d'accordo, resto della mia idea. Rebatir sin herir es el arte.",
      ],
      topicId: "g3-b1-congiuntivo-imperfetto",
      gaps: [
        { q: "Sebbene ___ costoso, ne vale la pena. (ser)", options: ["è", "sia", "fosse"], answer: 2 },
        { q: "Mi sembrava che tu ___ ragione. (tener)", options: ["hai", "avessi", "avresti"], answer: 1 },
        { q: "Non è che io ___ d'accordo, ma… (estar)", options: ["sono", "fossi", "sarò"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "El matiz en la voz",
      tip: "El B2 se oye en los matices: «capisco il punto, PERÒ…» (la objeción se anuncia subiendo), «su questo siamo d'accordo» (baja conciliador). La voz modula la diplomacia.",
      pairs: [
        { a: "Capisco, però…", b: "Assolutamente no!", note: "matiz vs ruptura" },
        { a: "Mi sembrava che…", b: "Mi sembra che…", note: "imperfetto vs presente" },
        { a: "D'accordo su questo.", b: "Dissento su questo.", note: "convergencia y divergencia" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite la caja: «Sostengo che…, sebbene…, non è che io sia contro, su questo siamo d'accordo»." },
        { kind: "semi", task: "Defiende una tesis polémica con 3 argumentos, una concesión y una réplica anticipada." },
        { kind: "comunicativo", task: "Debate formal moderado: 5 turnos, objeta con cortesía, busca síntesis final." },
        { kind: "autentico", task: "Escucha un debate italiano (radio/podcast) y roba 3 expresiones para tu próximo debate." },
      ],
    },
    reading: {
      sourceId: "rd-12",
      question: "¿Qué argumentos enfrenta la lectura sobre el turismo en Venecia?",
    },
    writing: {
      task: "Escribe un texto argumentativo (150 palabras): tesis, 2 argumentos, objeción con sebbene, concesión y síntesis.",
      minWords: 130,
      tips: ["Sebbene + subjuntivo para conceder", "Non è che io sia… para matizar"],
      model: [
        "Io sostengo che le auto debbano sparire dai centri storici. Sebbene i negozianti temano il calo dei clienti, le città pedonali registrano più vendite.",
        "Non è che io sottovalimi il problema: basterebbe una transizione graduale con navette gratuite.",
        "In sintesi: meno smog, più qualità della vita, più incassi.",
      ],
    },
    culture: {
      title: "El arte italiano de la discusión",
      text: "Discutir es deporte nacional: en la mesa, en la radio, en el bar. Pero hay reglas no escritas: se objeta la idea, nunca la persona; la voz sube sin ofender; y una síntesis final («resta il fatto che…») cierra con elegancia. El debate italiano termina casi siempre en un café.",
    },
    finalTask: {
      title: "Il dibattito del circolo",
      brief: "Participa en el debate del círculo: tesis, objeta con sebbene, concede un punto y construye síntesis. Con moderador y contrincante.",
      checklist: ["Usé 4 subjuntivos imperfectos", "Concedí sin perder la tesis", "Cerré con una síntesis elegante"],
    },
    review: [
      { q: "Sebbene ___ tardi, continuiamo. (ser)", options: ["è", "sia", "fosse"], answer: 2 },
      { q: "«Non è che io sia contro» matiza…", options: ["un rechazo total", "una duda gramatical", "una fecha"], answer: 0 },
      { q: "Mi sembrava che tu ___ tutto. (saber)", options: ["sapevi", "sapessi", "sappia"], answer: 1 },
      { q: "«Basterebbe» es…", options: ["condicional presente", "subjuntivo pasado", "futuro"], answer: 0 },
    ],
    cando: [
      "Puedo argumentar con matices y concesiones",
      "Puedo rebatir sin romper la relación",
      "Puedo moderar y construir síntesis",
    ],
  },

  {
    id: "cu-b2-02", n: 2, level: "B2",
    title: "El trabajo que cambia", titleIt: "Il lavoro che cambia",
    img: "/images/testi/rd-17.jpg",
    goal: "Hablar del futuro del trabajo: passivo, estadísticas y tendencias",
    goals: ["Usar el passivo en registros formales", "Interpretar datos y tendencias laborales", "Discutir smart working y precariedad"],
    scenario: "Seminario universitario «Il lavoro nel 2030»: presentas datos sobre el teletrabajo italiano. Frases pasivas, porcentajes y previsiones: el lenguaje de los informes.",
    dialogue: [
      { speaker: "Prof", it: "Ci presenti i suoi dati sullo smart working in Italia.", es: "Preséntenos sus datos sobre el teletrabajo en Italia." },
      { speaker: "Tu", it: "Grazie. Nel 2023 è stato stimato che il 15% dei lavoratori lavorava da remoto.", es: "Gracias. En 2023 se estimó que el 15% de los trabajadores trabajaba en remoto." },
      { speaker: "Prof", it: "Un dato basso rispetto al nord Europa. Come mai?", es: "Un dato bajo respecto al norte de Europa. ¿Por qué?" },
      { speaker: "Tu", it: "Il tessuto italiano è fatto di PMI: le piccole aziende non sono attrezzate.", es: "El tejido italiano está hecho de pymes: las pequeñas empresas no están equipadas." },
      { speaker: "Prof", it: "E i giovani? Che_scenario li attende?", es: "¿Y los jóvenes? ¿Qué escenario les espera?" },
      { speaker: "Tu", it: "I contratti precari sono aumentati, ma i giovani vengono assunti soprattutto nelle tech.", es: "Los contratos precarios han aumentado, pero los jóvenes son contratados sobre todo en las tecnológicas." },
      { speaker: "Prof", it: "Quindi, optimismo o pessimismo?", es: "¿Entonces, optimismo o pesimismo?" },
      { speaker: "Tu", it: "Realismo: se non verranno investite le competenze digitali, il divario crescerà.", es: "Realismo: si no se invierten las competencias digitales, la brecha crecerá." },
    ],
    comprehension: [
      { q: "¿Qué porcentaje trabajaba en remoto en 2023?", options: ["5%", "15%", "50%"], answer: 1 },
      { q: "¿Por qué es bajo respecto al norte de Europa?", options: ["Falta de cultura", "Predominio de pymes sin equipamiento", "Ley que lo prohíbe"], answer: 1 },
      { q: "¿Dónde son contratados sobre todo los jóvenes?", options: ["En la hostelería", "En las tecnológicas", "En la agricultura"], answer: 1 },
    ],
    chunks: [
      { it: "è stato stimato che…", es: "se ha estimado que…" },
      { it: "Il tessuto è fatto di PMI.", es: "El tejido está hecho de pymes." },
      { it: "non sono attrezzate", es: "no están equipadas" },
      { it: "vengono assunti soprattutto…", es: "son contratados sobre todo…" },
      { it: "se non verranno investite le competenze…", es: "si no se invierten las competencias…" },
      { it: "il divario crescerà", es: "la brecha crecerá" },
    ],
    grammar: {
      focus: "Passivo con essere y venire",
      inductive: [
        { it: "I giovani vengono assunti dalle tech.", es: "Los jóvenes son contratados por las tecnológicas." },
        { it: "Il report è stato pubblicato ieri.", es: "El informe fue publicado ayer." },
        { it: "Le competenze devono essere aggiornate.", es: "Las competencias deben ser actualizadas." },
      ],
      rule: [
        "Passivo con essere + participio (acordado): è stato stimato, sono state create. Con venire (más elegante en presente): vengono assunti, viene pubblicato. Agente con da: dalle tech.",
        "Registro de informe: dati, tendenze, stime: «è stato stimato che», «si prevede un aumento del…», «il dato è in linea con…», «a fronte di…».",
      ],
      topicId: "g-b1-passivo",
      gaps: [
        { q: "Il report ___ ieri. (publicarse)", options: ["è pubblicato", "è stato pubblicato", "ha pubblicato"], answer: 1 },
        { q: "I contratti ___ dalle aziende. (firmarse, venire)", options: ["vengono firmati", "sono firmare", "firmano"], answer: 0 },
        { q: "Le competenze devono ___ aggiornate. (ser)", options: ["essere", "avere", "fare"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "Siglas y datos",
      tip: "Las siglas italianas se deletrean: PMI (pi-emme-i), ISTAT, INPS. Los porcentajes se dicen «il quindici per cento». Los datos se pronuncian lentos: son oro en un seminario.",
      pairs: [
        { a: "PMI", b: "ISTAT", note: "siglas frecuentes" },
        { a: "il 15%", b: "il 50%", note: "porcentajes" },
        { a: "è stato stimato", b: "viene stimato", note: "essere vs venire" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «È stato stimato che… I giovani vengono assunti da…»." },
        { kind: "semi", task: "Presenta 3 datos sobre el trabajo en tu país con passivo y previsiones." },
        { kind: "comunicativo", task: "Seminario: presenta tu mini-informe (4 datos) y responde 2 preguntas del público." },
        { kind: "autentico", task: "Lee un artículo de economía italiano y resumelo en 5 frases pasivas." },
      ],
    },
    reading: {
      sourceId: "rd-17",
      question: "¿Cómo cambia el trabajo según la lectura y quién se adapta mejor?",
    },
    writing: {
      task: "Escribe un mini-informe (150 palabras): situación del trabajo en tu sector, 3 datos (inventados pero verosímiles) en pasivo, causa y previsiones.",
      minWords: 130,
      tips: ["Passivo con è stato/sono state + participio", "Un dato por párrafo con interpretación"],
      model: [
        "Nel settore del marketing digitale, nel 2024 è stato registrato un aumento del 20% delle posizioni remote.",
        "Tuttavia, i contratti a progetto sono cresciuti più delle assunzioni stabili.",
        "Si prevede che entro il 2030 le competenze legate all'IA verranno richieste nel 60% delle offerte.",
      ],
    },
    culture: {
      title: "Smart working all'italiana",
      text: "Italia llegó tarde al teletrabajo y la pandemia la obligó: el pico fue 2021, luego el RTO (ritorno in ufficio) milanés. La ley de 2022 lo regula como accordi individuali. El debate sigue: productividad contra cultura de oficina, con el café del bar como argumento emocional.",
    },
    finalTask: {
      title: "Il mio rapporto sul futuro",
      brief: "Presenta tu informe del trabajo en 2030: 5 frases pasivas con datos, dos causas y una previsión condicional. Como analista en un seminario.",
      checklist: ["Usé 6 pasivas correctas", "Presenté datos numéricos claros", "La previsión usa se non verranno…"],
    },
    review: [
      { q: "I dati ___ (raccontarse, venire, plural)", options: ["vengono raccontati", "sono raccontare", "raccontano si"], answer: 0 },
      { q: "«è stato stimato» es passivo…", options: ["con venire", "con essere, pasado", "impersonal puro"], answer: 1 },
      { q: "Le assunzioni sono state fatte ___ le tech. (agente)", options: ["di", "da", "per"], answer: 1 },
      { q: "PMI significa…", options: ["piccole e medie imprese", "piccole industrie milanesi", "progetti di investimento"], answer: 0 },
    ],
    cando: [
      "Puedo presentar datos con voz pasiva",
      "Puedo discutirir tendencias laborales",
      "Puedo escribir un informe estructurado",
    ],
  },

  {
    id: "cu-b2-03", n: 3, level: "B2",
    title: "Ambiente y responsabilidad", titleIt: "Ambiente e responsabilità",
    img: "/images/vocab/natura.webp",
    goal: "Hablar de hipótesis pasadas y responsabilidades ambientales",
    goals: ["Usar condizionale passato para arrepentimientos e hipótesis", "Discutir culpa y responsabilidad colectiva", "Proponer políticas concretas"],
    scenario: "Mesa redonda tras la lectura de «Il mare che sale»: Venecia bajo el agua otra vez. «Habríamos debido actuar antes», dice alguien. El condizionale passato pone nombres a los remordimientos.",
    dialogue: [
      { speaker: "Sara", it: "Un'altra acqua alta record. Non vi sembra che avremmo potuto evitarlo?", es: "Otra marea récord. ¿No os parece que habríamos podido evitarlo?" },
      { speaker: "Tu", it: "Decenni fa sì. Se il piano MOSE fosse stato completato in tempo, oggi sarebbe diverso.", es: "Hace décadas, sí. Si el plan MOSE se hubiera completado a tiempo, hoy sería distinto." },
      { speaker: "Marco", it: "Ma il piano era costoso e controverso: non è che gli ambientalisti avessero torto.", es: "Pero el plan era caro y polémico: no es que los ecologistas estuvieran equivocados." },
      { speaker: "Tu", it: "Verissimo. Avremmo dovuto investire in prevenzione, non solo in opere faraoniche.", es: "Verdad. Habríamos debido invertir en prevención, no solo en obras faraónicas." },
      { speaker: "Sara", it: "E noi cittadini? Anche noi abbiamo colpe: il turismo di massa, i consumi…", es: "¿Y nosotros los ciudadanos? También tenemos culpas: el turismo de masas, los consumos…" },
      { speaker: "Tu", it: "Concordo. Se ognuno di noi avesse cambiato abitudini, il quadro sarebbe miglire.", es: "Concordo. Si cada uno de nosotros hubiera cambiado hábitos, el panorama sería mejor." },
      { speaker: "Marco", it: "Quindi la colpa è di tutti e di nessuno: la storia d'Italia!", es: "Entonces la culpa es de todos y de nadie: ¡la historia de Italia!" },
      { speaker: "Tu", it: "Appunto. Da qui in poi, però, ci comportiamo come se il pianeta fosse nostro figlio.", es: "Exacto. De aquí en adelante, eso sí, nos comportamos como si el planeta fuera nuestro hijo." },
    ],
    comprehension: [
      { q: "¿Qué habría cambiado el panorama según el protagonista?", options: ["Completar el MOSE a tiempo", "Más turismo", "Menos prevención"], answer: 0 },
      { q: "¿En qué dice que se habría debido invertir?", options: ["Obras faraónicas", "Prevención", "Publicidad"], answer: 1 },
      { q: "¿Qué dice Marco de la culpa?", options: ["Es solo del gobierno", "Es de todos y de nadie", "No existe"], answer: 1 },
    ],
    chunks: [
      { it: "avremmo potuto evitarlo", es: "habríamos podido evitarlo" },
      { it: "Se fosse stato completato in tempo, …", es: "Si se hubiera completado a tiempo,…" },
      { it: "avremmo dovuto investire in…", es: "habríamos debido invertir en…" },
      { it: "Non è che avessero torto.", es: "No es que estuvieran equivocados." },
      { it: "come se il pianeta fosse…", es: "como si el planeta fuera…" },
      { it: "il quadro sarebbe migliore", es: "el panorama sería mejor" },
    ],
    grammar: {
      focus: "Condizionale passato e ipótesis irreales",
      inductive: [
        { it: "Avrei dovuto studiare di più.", es: "Habría debido estudiar más." },
        { it: "Se avessimo agito, il danno sarebbe stato minore.", es: "Si hubiéramos actuado, el daño habría sido menor." },
        { it: "Sarebbe bastato poco.", es: "Habría bastado poco." },
      ],
      rule: [
        "Condizionale passato = avrei/sarei + participio: avremmo potuto, sarebbe stato. Expresa arrepentimiento y consecuencia no realizada.",
        "Periodo ipotetico de la irrealtà: se + congiuntivo trapassato → condizionale passato (se avessimo agito, sarebbe andata meglio). Es el tiempo de los «y si…» históricos.",
      ],
      topicId: "g3-b1-condizionale-passato",
      gaps: [
        { q: "Se ___ (agire) prima, il disastro non ci sarebbe stato.", options: ["abbiamo agito", "avessimo agito", "agiremmo"], answer: 1 },
        { q: "___ (dovere, cond. pasado) ascoltare gli scienziati.", options: ["Avremmo dovuto", "Abbiamo dovuto", "Dovremmo"], answer: 0 },
        { q: "Sarebbe ___ (essere) sufficiente un piano serio.", options: ["stato", "stata", "essere"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "El peso del remordimiento",
      tip: "El condizionale passato pesa: «aVREI dovuto» con auxiliar alargado. Las hipótesis irreales se dicen lentas, con pausa tras el «se»: se… avessimo agito, | sarebbe stato diverso.",
      pairs: [
        { a: "avrei dovuto", b: "dovrei", note: "pasado vs presente" },
        { a: "Se avessimo…", b: "Se abbiamo…", note: "irreal vs real" },
        { a: "sarebbe stato", b: "sarà stato", note: "condicional vs futuro" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Se avessimo agito, sarebbe stato diverso. Avremmo dovuto ascoltare»." },
        { kind: "semi", task: "Tres arrepentimientos ecológicos colectivos con «avremmo dovuto…» y tres hipótesis con se + trapassado." },
        { kind: "comunicativo", task: "Mesa redonda: culpa histórica, culpa individual, soluciones concretas — con hipótesis irreales." },
        { kind: "autentico", task: "Elige una noticia ambiental italiana y escribe 3 frases de arrepentimiento hipotético en voz alta." },
      ],
    },
    reading: {
      letturaId: "inf-mare-06",
      question: "¿Qué fenómeno describe la lectura y qué adaptation se menciona?",
    },
    writing: {
      task: "Escribe un ensayo breve (150 palabras): «¿Habríamos podido evitar la crisis climática?» Con 3 hipótesis irreales, 2 responsables y 1 propuesta.",
      minWords: 130,
      tips: ["Se + trapassado → condizionale passato", "Non è che… para matizar culpables"],
      model: [
        "Se le politiche climatiche fossero state applicate trent'anni fa, il pianeta sarebbe oggi più sano.",
        "Non è che i cittadini fossero ignari: semplicemente, avremmo dovuto sacrificare comodità che nessuno voleva cedere.",
        "Da qui in poi, bisognerebbe agire come se non ci fosse un domani per rimediare.",
      ],
    },
    culture: {
      title: "Italia y el agua",
      text: "Venecia y su MOSE (terminado tras 40 años y escándalos), los desbordamientos del Po, la sequía del sur: Italia vive el agua en sus dos extremos. El país del «bel paesaggio» se enfrenta al deterioro de una costa que es su marca. El debate entre obras grandes y prevención es idéntico al de todos los países mediterráneos.",
    },
    finalTask: {
      title: "Il processo al clima",
      brief: "Simula el juicio a la crisis climática: acusación, defensa y veredicto con hipótesis irreales («se avessero…»). Tres voces, una sentencia.",
      checklist: ["Usé 5 hipótesis irreales correctas", "Repartí responsabilidades con matices", "El veredicto incluye una propuesta realista"],
    },
    review: [
      { q: "Se ___ studiato, avresti passato l'esame.", options: ["hai", "avessi", "avresti"], answer: 1 },
      { q: "«Avremmo dovuto» =", options: ["hemos debido", "habríamos debido", "deberíamos"], answer: 1 },
      { q: "Sarebbe ___ meglio. (ir, cond. pas.)", options: ["andato", "andata", "andare"], answer: 0 },
      { q: "El periodo ipotetico de irreality usa…", options: ["indicativo", "subjuntivo trapassado + condicional pasado", "futuro"], answer: 1 },
    ],
    cando: [
      "Puedo formular hipótesis irreales sobre el pasado",
      "Puedo discutir responsabilidades colectivas",
      "Puedo proponer políticas con registro formal",
    ],
  },

  {
    id: "cu-b2-04", n: 4, level: "B2",
    title: "Identidad y pertenencia", titleIt: "Identità e appartenenza",
    img: "/images/cultura/cul-16.jpg",
    goal: "Hablar de identidad local vs global con estructuras concesivas",
    goals: ["Usare benché, nonostante, pur + gerundio", "Narrar ritos de pertenencia (Palio, passeggiata)", "Sutentar tensiones identidad-globalización"],
    scenario: "Documental universitario: «Essere senese nel 2030». Entrevistan a un contradaio del Palio y a ti, estudiante extranjero. La identidad local italiana como resistencia amorosa.",
    dialogue: [
      { speaker: "Regista", it: "Lei è della Contrada della Selva. Cosa significa appartenere?", es: "Usted es de la Contrada della Selva. ¿Qué significa pertenecer?" },
      { speaker: "Contradaio", it: "Tutto. Benché il mondo cambi, la contrada resta la mia famiglia.", es: "Todo. Aunque el mundo cambie, la contrada sigue siendo mi familia." },
      { speaker: "Tu", it: "Da straniero mi colpisce: nonostante la globalizzazione, qui si vive il territorio.", es: "De extranjero me impresiona: pese a la globalización, aquí se vive el territorio." },
      { speaker: "Contradaio", it: "Esatto. Pur essendo una città piccola, Siena ha una voce propria.", es: "Exacto. Siendo una ciudad pequeña, Siena tiene una voz propia." },
      { speaker: "Regista", it: "Ma i giovani? Non è che preferiscano andarsene?", es: "¿Pero los jóvenes? ¿No es que prefieran irse?" },
      { speaker: "Contradaio", it: "Molti partono. Tuttavia, quando torna il Palio, tutti ritornano: è magico.", es: "Muchos se van. Sin embargo, cuando vuelve el Palio, todos regresan: es mágico." },
      { speaker: "Tu", it: "Secondo me, l'identità non è un museo: è un muscolo che si allena.", es: "Según yo, la identidad no es un museo: es un músculo que se entrena." },
      { speaker: "Contradaio", it: "Bella immagine! Pur vivendo lontano, uno resta della sua contrada. Per sempre.", es: "¡Bonita imagen! Aunque viva lejos, uno sigue siendo de su contrada. Para siempre." },
    ],
    comprehension: [
      { q: "¿Qué es la contrada para el contradaio?", options: ["Un club deportivo", "Su familia", "Un negocio"], answer: 1 },
      { q: "¿Qué pasa cuando vuelve el Palio?", options: ["Nadie vuelve", "Los que se fueron regresan", "Se cancela"], answer: 1 },
      { q: "¿Qué imagen usa el estudiante para la identidad?", options: ["Un museo", "Un músculo que se entrena", "Una isla"], answer: 1 },
    ],
    chunks: [
      { it: "Benché il mondo cambi, …", es: "Aunque el mundo cambie,…" },
      { it: "nonostante la globalizzazione", es: "pese a la globalización" },
      { it: "Pur essendo piccola, …", es: "Siendo pequeña (aunque sea),…" },
      { it: "Pur vivendo lontano, …", es: "Aunque viva lejos,…" },
      { it: "una voce propria", es: "una voz propia" },
      { it: "Per sempre.", es: "Para siempre." },
    ],
    grammar: {
      focus: "Concesivas: benché, nonostante, pur + gerundio",
      inductive: [
        { it: "Benché piovesse, siamo usciti.", es: "Aunque lloviera, salimos." },
        { it: "Nonostante il traffico, sono arrivato in orario.", es: "Pese al tráfico, llegué puntual." },
        { it: "Pur essendo stanco, ha continuato.", es: "Aunque estaba cansado, continuó." },
      ],
      rule: [
        "Concesivas con subjuntivo: benché/sebbene + subjuntivo (benché sia), nonostante + subjuntivo o sustantivo (nonostante il traffico / nonostante sia).",
        "pur + gerundio = «aunque + gerundio»: pur essendo, pur vivendo, pur sapendo. Compacto y elegante, marca registro alto. La identidad se narra con concesivas: la tensión entre lo que se resiste y lo que avanza.",
      ],
      topicId: "g3-b2-concessive",
      gaps: [
        { q: "Benché ___ caro, lo compro. (ser)", options: ["è", "sia", "fosse"], answer: 1 },
        { q: "___ stanco, ha ballato tutta la notte. (aunque estar)", options: ["Pur essendo", "Per essere", "Essendo"], answer: 0 },
        { q: "Nonostante ___ problemi, ci siamo riusciti. (haber)", options: ["abbiano", "avessero", "avute"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "La solemnidad concesiva",
      tip: "«Benché» y «nonostante» se pronuncian con solemnidad lenta: son la ropa elegante de la frase. El «pur» se funde con el gerundio: pur-essen-do, como una sola palabra.",
      pairs: [
        { a: "benché", b: "sebbene", note: "sinónimos solemnes" },
        { a: "pur essendo", b: "pur vivendo", note: "gerundios fundidos" },
        { a: "nonostante", b: "tuttavia", note: "concesiva vs adversativa" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Benché il mondo cambi, resto. Pur essendo lontano, appartengo»." },
        { kind: "semi", task: "Describe tu identidad (local, nacional, global) con 3 concesivas encadenadas." },
        { kind: "comunicativo", task: "Entrevista documental: contradaio vs globalizado, tensión y síntesis final." },
        { kind: "autentico", task: "Investiga una festa/rito identitario italiano (Palio, Calcio storico, carnevale) y preséntalo con 3 concesivas." },
      ],
    },
    reading: {
      lines: [
        { it: "Il Palio non è una corsa di cavalli: è la guerra rituale tra le diciassette contrade di Siena.", es: "El Palio no es una carrera de caballos: es la guerra ritual entre las diecisiete contradas de Siena." },
        { it: "Si nasce in una contrada e si muore nella stessa: l'appartenenza non si compra né si sceglie.", es: "Se nace en una contrada y se muere en la misma: la pertenencia no se compra ni se elige." },
      ],
      question: "¿Se puede elegir la contrada? ¿Qué es entonces el Palio?",
    },
    writing: {
      task: "Escribe un capítulo del documental (150 palabras): identidad local vs global con 4 concesivas, una cita de «entrevistado» y una reflexión final.",
      minWords: 130,
      tips: ["benché / nonostante / pur + gerundio variados", "Termina con una imagen fuerte"],
      model: [
        "Benché Siena conti solo cinquantamila abitanti, le sue contrade moltiplicano l'anima della città.",
        "Pur vivendo all'estero, molti senesi tornano ogni agosto: l'appartenenza non si rinnega.",
        "Nonostante la globalizzazione appiattisca le città, il Palio resta un'identità viva.",
      ],
    },
    culture: {
      title: "Las repúblicas de la pertenencia",
      text: "Italia es un mosaico de pertenencias: contrade, rioni, sestieri, paesi. El ciudadano italiano es primero de su pueblo, luego de su región, luego de Italia — y europeo por último. La passeggiata, el santo patrono, la squadra del corazón: la identidad se practica en ritos semanales.",
      cultureId: "cul-16",
    },
    finalTask: {
      title: "Il mio documentario sull'identità",
      brief: "Guioniza y presenta tu mini-documental (3 minutos): una identidad local italiana, una entrevista imaginaria con concesivas y tu reflexión de extranjero enamorado.",
      checklist: ["Usé 4 concesivas distintas", "La entrevista suena real", "La reflexión personal cierra con imagen"],
    },
    review: [
      { q: "Benché ___ tardi, continuo. (ser)", options: ["è", "sia", "era"], answer: 1 },
      { q: "Pur ___ stanco, sorride. (ser)", options: ["è", "essendo", "stato"], answer: 1 },
      { q: "Nonostante ___ problemi, si parte. (haber, subj.)", options: ["abbiano", "avessimo", "avremo"], answer: 0 },
      { q: "El Palio di Siena se corre…", options: ["2 veces al año", "cada 4 años", "cada mes"], answer: 0 },
    ],
    cando: [
      "Puedo usar estructuras concesivas con soltura",
      "Puedo hablar de identidad y pertenencia",
      "Puedo entrevistar y redactar como documental",
    ],
  },

  {
    id: "cu-b2-05", n: 5, level: "B2",
    title: "Lengua y dialectos", titleIt: "Lingua e dialetti",
    img: "/images/testi/rd-13.jpg",
    goal: "Hablar de variedades lingüísticas: dialectos, registros y pureza",
    goals: ["Describir la situación dialectal italiana", "Reconocer registros y palabras dialectales", "Opinar sobre el futuro de las lenguas minoritarias"],
    scenario: "Conferencia de lingüística aplicada: «¿El dialecto muere o muta?». Tú, hispanohablante que ha oído napoletano, siciliano y romanesco, tienes cosas que decir — y preguntas incómodas que hacer.",
    dialogue: [
      { speaker: "Prof", it: "Qualcuno di voi ha sentito parlare il dialetto? Che esperienza?", es: "¿Alguno de vosotros ha oído hablar el dialecto? ¿Qué experiencia?" },
      { speaker: "Tu", it: "A Napoli non capivo nulla: mi sembrava che parlassero un'altra lingua — e lo era.", es: "En Nápoles no entendía nada: me parecía que hablaran otra lengua — y lo era." },
      { speaker: "Prof", it: "Esatto: sono lingue, non «dialetti degradati». Cosa ne pensate del futuro?", es: "Exacto: son lenguas, no «dialectos degradados». ¿Qué pensáis del futuro?" },
      { speaker: "Tu", it: "Pur essendo pessimista, vedo segnali vitali: i ragazzi cantano in napoletano su TikTok.", es: "Aunque sea pesimista, veo señales vitales: los chicos cantan en napolitano en TikTok." },
      { speaker: "Prof", it: "Il «neo-italiano» dei social, allora, aiuta?", es: "¿El «neo-italiano» de las redes, entonces, ayuda?" },
      { speaker: "Tu", it: "Secondo me sì: benché si perda la profondità, si guadagna diffusione.", es: "Según yo sí: aunque se pierda profundidad, se gana difusión." },
      { speaker: "Prof", it: "E con lo spagnolo? Vi capite con gli italiani?", es: "¿Y con el español? ¿Os entendéis con los italianos?" },
      { speaker: "Tu", it: "Se parliamo lentamente, sì. Anche se, quando litigano in dialetto, mi perdo tutto!", es: "Si hablamos despacio, sí. ¡Aunque, cuando discuten en dialecto, lo pierdo todo!" },
    ],
    comprehension: [
      { q: "¿Qué le pasó en Nápoles?", options: ["Entendió todo", "No entendía nada", "Le enseñaron dialecto"], answer: 1 },
      { q: "¿Qué señal vital ve en las redes?", options: ["Cursos de dialecto", "Chicos cantando en napolitano", "Traducciones oficiales"], answer: 1 },
      { q: "¿Cuándo se pierde todo?", options: ["Cuando hablan despacio", "Cuando discuten en dialecto", "Cuando escriben"], answer: 1 },
    ],
    chunks: [
      { it: "mi sembrava che parlassero…", es: "me parecía que hablaran…" },
      { it: "lingue, non dialetti degradati", es: "lenguas, no dialectos degradados" },
      { it: "Pur essendo pessimista, …", es: "Aunque sea pesimista,…" },
      { it: "si perde profondità, si guadagna diffusione", es: "se pierde profundidad, se gana difusión" },
      { it: "Il neo-italiano dei social", es: "El neo-italiano de las redes" },
      { it: "quando litigano, mi perdo!", es: "¡cuando discuten, me pierdo!" },
    ],
    grammar: {
      focus: "Subjuntivos en la opinión y el estilo indirecto culto",
      inductive: [
        { it: "Mi sembrava che parlassero un'altra lingua.", es: "Me parecía que hablaran otra lengua." },
        { it: "Benché si perda la profondità, si guadagna diffusione.", es: "Aunque se pierda profundidad, se gana difusión." },
        { it: "Penso che il dialetto non morirà, purché si canti.", es: "Pienso que el dialecto no morirá, con tal de que se cante." },
      ],
      rule: [
        "Opinar de lingüística exige subjuntivos encadenados: penso che sopravviva, mi sembrava che fosse, purché si trasmetta (con tal de que se transmita), a patto che si parli.",
        "Vocabulario del tema: varietà, registro, lingua minoritaria, neologismo, anglicismo, contaminazione, parlante nativo. Y las familias: napoletano, siciliano, veneto, romanesco, sardo, friulano.",
      ],
      topicId: "g3-c2-substandard",
      gaps: [
        { q: "Penso che il dialetto ___ (sopravvivere).", options: ["sopravvive", "sopravviva", "sopravviverà"], answer: 1 },
        { q: "Mi sembrava che ___ (essere) un'altra lingua.", options: ["era", "fosse", "sia"], answer: 1 },
        { q: "Purché lo ___ (parlare) in famiglia, vivrà.", options: ["parlano", "parlino", "parlassero"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "Acentos italianos reconocibles",
      tip: "El romanesco «er» parroquial (er cazzo' de Roma), el napoletano vocálico y alargado, el veneto con la S sonora. Escuchar variedades entrena el oído real: el italiano «de libro» es solo una de las voces.",
      pairs: [
        { a: "napoletano", b: "romanesco", note: "dos musicalidades" },
        { a: "veneto", b: "siciliano", note: "norte vs sur" },
        { a: "lingua", b: "dialetto", note: "el debate en dos palabras" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Mi sembrava che fosse un'altra lingua. Benché cambi, sopravvive»." },
        { kind: "semi", task: "Compara el italiano estándar con un dialecto que hayas oído: sonidos, velocidad, emoción." },
        { kind: "comunicativo", task: "Mesa de lingüistas: ¿el dialecto muere o muta? Defiende con subjuntivos y ejemplos reales." },
        { kind: "autentico", task: "Escucha una canción en dialecto (Pino Daniele, Fabrizio De André) y resume su registro." },
      ],
    },
    reading: {
      sourceId: "rd-13",
      question: "¿Por qué hablan con las manos los italianos según la lectura, y qué papel juega el dialecto?",
    },
    writing: {
      task: "Escribe una ponencia breve (150 palabras): situación de tu lengua materna frente a las variedades, con 3 subjuntivos y una propuesta cultural.",
      minWords: 130,
      tips: ["purché / a patto che + subjuntivo", "Vocabulario: varietà, registro, minoranza"],
      model: [
        "Lo spagnolo che parlo non è quello dei libri: benché la RAE difenda la norma, il continente parla altro.",
        "Mi sembra che le varietà siano ricchezza, non errore: purché si insegni a cambiar de registro.",
        "Pur essendo difficile, la scuola dovrebbe valorizzare anche la lingua della strada.",
      ],
    },
    culture: {
      title: "El mosaico lingüístico",
      text: "Italia unificó el país antes que la lengua: en 1861 solo el 2% hablaba italiano. Los dialectos son lenguas hermanas del latín, no «italiano mal hablado»: el siciliano tiene literatura propia desde el siglo XIII. Hoy el 46% usa dialecto (a menudo mezclado) en familia. La música dialettale en las redes ha dado a los dialectos un second life global.",
    },
    finalTask: {
      title: "Il mio intervento al convegno",
      brief: "Presenta tu ponencia sobre lengua y variedades: situación, 2 ejemplos vivos, un riesgo y una propuesta. Como lingüista invitado extranjero.",
      checklist: ["Usé 4 subjuntivos en opinión", "Di ejemplos reales de variedades", "La propuesta es cultural y concreta"],
    },
    review: [
      { q: "Penso che il dialetto ___ (cambiare).", options: ["cambia", "cambi", "cambierà"], answer: 1 },
      { q: "«Purché» =", options: ["aunque", "con tal de que", "sin embargo"], answer: 1 },
      { q: "El napoletano es…", options: ["italiano mal hablado", "una lengua hermana del latín", "un acento del toscano"], answer: 1 },
      { q: "Mi sembrava che ___ (parlare) un'altra lingua.", options: ["parlavano", "parlassero", "parlino"], answer: 1 },
    ],
    cando: [
      "Puedo opinar sobre variedades lingüísticas con precisión",
      "Reconozco registros y dialectos básicos",
      "Puedo escribir una ponencia breve",
    ],
  },

  {
    id: "cu-b2-06", n: 6, level: "B2",
    title: "Cine y literatura", titleIt: "Cinema e letteratura",
    img: "/images/letture/cult-cine-23.jpg",
    goal: "Analizar películas y libros con lenguaje crítico",
    goals: ["Contar tramas sin spoilear", "Analizar estilo y mensajes", "Recomendar con argumentos críticos"],
    scenario: "Cineforum italiano: proyectan «Ladri di biciclette» (1948) y luego se abre el debate. Toca analizar el neorrealismo con herramientas de crítico: trama, estilo, contexto, mensaje.",
    dialogue: [
      { speaker: "Conduttore", it: "Allora, che impressione vi ha fatto il film?", es: "Bien, ¿qué impresión os ha dado la película?" },
      { speaker: "Tu", it: "Mi ha devastato. La scena in cui il padre ruba la bicicletta è di una crudeltà perfetta.", es: "Me ha devastado. La escena en que el padre roba la bicicleta es de una crueldad perfecta." },
      { speaker: "Sara", it: "Io mi chiedo: perché non usavano attori professionisti?", es: "Yo me pregunto: ¿por qué no usaban actores profesionales?" },
      { speaker: "Tu", it: "È proprio quello il punto: il neorrealismo voleva attori che fossero la vita stessa.", es: "Es justamente ese el punto: el neorrealismo quería actores que fueran la vida misma." },
      { speaker: "Conduttore", it: "E il contesto storico? Quanto conta?", es: "¿Y el contexto histórico? ¿Cuánto cuenta?" },
      { speaker: "Tu", it: "Tutto: benché sia del '48, parla della povertà che vediamo ancora oggi.", es: "Todo: aunque sea del 48, habla de la pobreza que vemos aún hoy." },
      { speaker: "Sara", it: "Quindi lo consiglieresti a un giovane del 2030?", es: "¿Entonces lo recomendarías a un joven del 2030?" },
      { speaker: "Tu", it: "Assolutamente. Non è un film sulla bicicletta: è un film su cosa significhi essere padri.", es: "Absolutamente. No es una película sobre una bicicleta: es una película sobre qué significa ser padre." },
    ],
    comprehension: [
      { q: "¿Qué escena destaca el protagonista?", options: ["El final feliz", "El padre robando la bicicleta", "La boda"], answer: 1 },
      { q: "¿Por qué no usaban actores profesionales?", options: ["Era más barato", "El neorrealismo quería actores que fueran la vida misma", "No había"], answer: 1 },
      { q: "¿Sobre qué es la película según él?", options: ["Sobre bicicletas", "Sobre qué significa ser padre", "Sobre el fútbol"], answer: 1 },
    ],
    chunks: [
      { it: "Mi ha devastato.", es: "Me ha devastado." },
      { it: "di una crudeltà perfetta", es: "de una crueldad perfecta" },
      { it: "È proprio quello il punto.", es: "Es justamente ese el punto." },
      { it: "attori che fossero la vita stessa", es: "actores que fueran la vida misma" },
      { it: "Quanto conta il contesto?", es: "¿Cuánto cuenta el contexto?" },
      { it: "Non è un film su X: è un film su Y.", es: "No es una película sobre X: es una película sobre Y." },
    ],
    grammar: {
      focus: "El análisis: subjuntivo en la interpretación",
      inductive: [
        { it: "Voleva attori che fossero veri.", es: "Quería actores que fueran de verdad." },
        { it: "Cerca un regista che abbia coraggio.", es: "Busca un director que tenga coraje." },
        { it: "Benché sia antico, parla di oggi.", es: "Aunque sea antiguo, habla de hoy." },
      ],
      rule: [
        "Tras antecedente indefinido o interpretativo, subjuntivo: attori che fossero, un film che dica qualcosa. El subjuntivo convierte el hecho en lectura personal.",
        "Lenguaje crítico: mi ha devastato/colpito/conquistato; la scena in cui…; è di una crudeltà/luminosità perfetta; non è un film su X: è un film su Y (la fórmula del crítico).",
      ],
      topicId: "g3-c2-sequenza-tempi",
      gaps: [
        { q: "Cerca un finale che ___ (sorprendere) il pubblico.", options: ["sorprende", "sorprenda", "sorprese"], answer: 1 },
        { q: "È un film che ___ (parlare) a tutti.", options: ["parla", "parli", "parlasse"], answer: 1 },
        { q: "La scena ___ il padre piange è il cuore del film.", options: ["che", "in cui", "dove"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "Títulos y autores",
      tip: "Los títulos italianos se dicen enteros y con ritmo: «Ladri di biciclette» (LAdri di bici-CLETTEte). Los apellidos de directores llevan acento propio: Visconti, Fellini, Moretti, Sorrentino.",
      pairs: [
        { a: "Ladri di biciclette", b: "La dolce vita", note: "títulos con ritmo" },
        { a: "Visconti", b: "Fellini", note: "maestros" },
        { a: "neorrealismo", b: "neorealista", note: "sustantivo vs adjetivo" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite la fórmula: «Non è un film su X: è un film su Y. Mi ha devastato»." },
        { kind: "semi", task: "Analiza tu película italiana favorita: trama sin spoilers, escena clave, mensaje." },
        { kind: "comunicativo", task: "Cineforum: debate sobre la película, 2 interpretaciones rivales, síntesis del moderador." },
        { kind: "autentico", task: "Escribe (y di) tu reseña de 90 segundos de una película o libro italiano real." },
      ],
    },
    reading: {
      letturaId: "cult-cine-23",
      question: "¿Qué características del neorrealismo describe la lectura?",
    },
    writing: {
      task: "Escribe una crítica (160 palabras): trama sin spoilers, análisis de estilo con 3 subjuntivos, contexto y veredicto con la fórmula «non è un film su…».",
      minWords: 140,
      tips: ["La scena in cui… para el ejemplo concreto", "3 adjetivos críticos precisos (spietato, luminoso, essenziale)"],
      model: [
        "Ladri di biciclette racconta un padre e un figlio che cercano una bicicletta rubata: niente di più, tutto.",
        "La scena in cui il padre tenta il furto è di una spietatezza perfetta: benché sia girata nel 1948, parla di oggi.",
        "Non è un film su una bicicletta: è un film sulla dignità che si perde. Da vedere assolutamente.",
      ],
    },
    culture: {
      title: "Neorrealismo: la cámara en la calle",
      text: "Tras la guerra, el cine italiano bajó a la calle: no sets, no estrellas, sí gente común y ciudades rotas. Rossellini, De Sica, Visconti filmaron la Italia real con actores no profesionales. «Ladri di biciclette» (De Sica, 1948) es su emblema: un padre, un hijo, una ciudad y la dignidad en juego. Su herencia llega hasta Sorrentino y Garrone.",
    },
    finalTask: {
      title: "La mia recensione da critico",
      brief: "Presenta tu crítica audiovisual (2 minutos): película o libro, trama sin spoilers, escena clave analizada, contexto y veredicto memorable.",
      checklist: ["Analizo sin spoilear", "Usé 3 subjuntivos interpretativos", "El veredicto usa la fórmula del crítico"],
    },
    review: [
      { q: "Cerca un film che ___ (emozionare).", options: ["emoziona", "emozioni", "emozionava"], answer: 1 },
      { q: "«La scena in cui» =", options: ["la escena que", "la escena en la que", "la escena donde que"], answer: 1 },
      { q: "El neorrealismo usaba…", options: ["estrellas de Hollywood", "actores no profesionales y calles reales", "estudios cerrados"], answer: 1 },
      { q: "«Mi ha devastato» =", options: ["me ha aburrido", "me ha devastado", "me ha confundido"], answer: 1 },
    ],
    cando: [
      "Puedo analizar cine y literatura con vocabulario crítico",
      "Puedo contar tramas sin spoilers",
      "Puedo recomendar con argumentos interpretativos",
    ],
  },

  {
    id: "cu-b2-07", n: 7, level: "B2",
    title: "Made in Italy", titleIt: "Il mito del made in Italy",
    img: "/images/testi/rd-4.jpg",
    goal: "Hablar de economía, artesanía y marca país",
    goals: ["Contar la historia de la marca Italia", "Usar vocabulario económico esencial", "Debatir autenticidad vs producción global"],
    scenario: "Feria de artesanía en Milán: una charla sobre el «made in Italy» entre un artesano del cuero, una empresaria y tú. ¿Qué queda de la marca cuando la producción se globaliza?",
    dialogue: [
      { speaker: "Artigiano", it: "Io cucio borse da quarant'anni: ogni cucitura è firmata, per così dire.", es: "Yo coso bolsos desde hace cuarenta años: cada costura está firmada, por así decirlo." },
      { speaker: "Imprenditrice", it: "Il made in Italy vale il 30% in più sul prezzo: è la marca más fuerte del mundo.", es: "El made in Italy vale un 30% más en el precio: es la marca más fuerte del mundo." },
      { speaker: "Tu", it: "Ma quanta produzione è davvero italiana? Molte cose sono solo assemblate qui.", es: "Pero ¿cuánta producción es de verdad italiana? Muchas cosas solo se ensamblan aquí." },
      { speaker: "Artigiano", it: "Purtroppo sì. Benché l'etichetta dica Italia, il lavoro spesso viene da fuori.", es: "Por desgracia, sí. Aunque la etiqueta diga Italia, el trabajo a menudo viene de fuera." },
      { speaker: "Imprenditrice", it: "Il consumatore però cerca la storia, non solo il prodotto: noi vendiamo racconto.", es: "El consumidor sin embargo busca la historia, no solo el producto: nosotros vendemos relato." },
      { speaker: "Tu", it: "Su questo sono d'accordo: purché il racconto sia vero, non marketing puro.", es: "En esto estoy de acuerdo: con tal de que el relato sea verdad, no marketing puro." },
      { speaker: "Artigiano", it: "Appunto. La qualità si sente al tatto: chi se la può permettere, la riconosce.", es: "Exacto. La calidad se siente al tacto: quien puede permitírsela, la reconoce." },
      { speaker: "Tu", it: "Allora il futuro è insegnare a toccare: la educación del consumidor.", es: "Entonces el futuro es enseñar a tocar: la educación del consumidor." },
    ],
    comprehension: [
      { q: "¿Cuánto vale más el made in Italy en precio?", options: ["10%", "30%", "Nada"], answer: 1 },
      { q: "¿Qué problema señala el artesano?", options: ["La etiqueta dice Italia pero el trabajo viene de fuera", "El cuero es malo", "No hay demanda"], answer: 0 },
      { q: "¿Qué vende la empresaria?", options: ["Solo productos", "Historia/relato", "Publicidad"], answer: 1 },
    ],
    chunks: [
      { it: "ogni cucitura è firmata", es: "cada costura está firmada" },
      { it: "vale il 30% in più sul prezzo", es: "vale un 30% más en el precio" },
      { it: "solo assemblate qui", es: "solo ensambladas aquí" },
      { it: "noi vendiamo racconto", es: "nosotros vendemos relato" },
      { it: "purché il racconto sia vero", es: "con tal de que el relato sea verdad" },
      { it: "la qualità si sente al tatto", es: "la calidad se siente al tacto" },
    ],
    grammar: {
      focus: "Formación de palabras y lenguaje económico",
      inductive: [
        { it: "artigiano → artigianato → artigianale", es: "artesano → artesanía → artesanal" },
        { it: "esportare → esportazione → esportatore", es: "exportar → exportación → exportador" },
        { it: "impresa → imprenditore → imprenditoriale", es: "empresa → empresario → empresarial" },
      ],
      rule: [
        "El vocabulario económico se construye por familias: -tore/-trice (agente), -zione (acción), -ale (adjetivo): produrre → produttore → produzione → produttivo.",
        "Para el debate: purché + subjuntivo (con tal de que), a patto che, a condizione che. Y las cifras: vale il X% in più/meno, incide per il…, cresce del…",
      ],
      topicId: "g3-c1-formazione-parole",
      gaps: [
        { q: "Il made in Italy è noto per la sua ___. (qualità → adjetivo)", options: ["qualitoso", "qualitativo", "qualità"], answer: 1 },
        { q: "Chi esporta è un ___. ", options: ["esportazione", "esportatore", "esportabile"], answer: 1 },
        { q: "Vinceremo purché il racconto ___ vero. (ser)", options: ["è", "sia", "era"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "Palabras largas del marketing",
      tip: "Las palabras económicas italianas son escaleras: im-pre-ni-DO-ria-le, ar-ti-gia-NA-to. Sube despacio los peldaños y no te salte sílabas: es el cardio del B2.",
      pairs: [
        { a: "artigianato", b: "imprenditoriale", note: "escaleras largas" },
        { a: "esportazione", b: "produzione", note: "-zione igual al español" },
        { a: "made in Italy", b: "stato estero", note: "anglicismo + italiano" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Il made in Italy vale il 30% in più. Noi vendiamo racconto»." },
        { kind: "semi", task: "Presenta un producto «de marca país» de tu país con su historia y su valor añadido." },
        { kind: "comunicativo", task: "Mesa de feria: artesano vs empresaria vs consumidor — autenticidad, precio, futuro." },
        { kind: "autentico", task: "Investiga una marca italiana real (Ferrari, Lavazza, Gucci) y cuenta su historia en 8 frases." },
      ],
    },
    reading: {
      sourceId: "rd-4",
      question: "¿Qué cuenta la lectura sobre el mito del made in Italy?",
    },
    writing: {
      task: "Escribe un artículo de economía (160 palabras): la marca país «made in…» de tu país o de Italia, con 3 datos, una tensión (autenticidad vs globalización) y una propuesta.",
      minWords: 140,
      tips: ["Familias de palabras: produttore/produzione/produttivo", "purché + subjuntivo para condiciones"],
      model: [
        "Il made in Italy genera il 25% delle esportazioni nazionali: cifra record, ombre reali.",
        "Benché l'etichetta garantisca l'assemblaggio, molte fasi della produzione avvengono all'estero.",
        "La proposta? Trasparenza: purché il consumatore sappia cosa compra, il racconto resterà credibile.",
      ],
    },
    culture: {
      title: "La marca país más famosa",
      text: "«Made in Italy» agrupa moda, diseño, alimentación y mecánica: Ferrari, Armani, Barilla, Lavazza. Nació como etiqueta aduanera y se volvió promesa de belleza. Su paradoja: el 60% del lujo «italiano» produce fuera. Por eso el artesano de feria es sagrado: es la prueba de que la costura aún existe.",
    },
    finalTask: {
      title: "Il mio stand alla fiera",
      brief: "Presenta tu «stand» en la feria: un producto artesanal (real o imaginario) con su historia, su precio justificado y su defensa contra la copia global.",
      checklist: ["Usé 3 familias de palabras económicas", "Justifiqué el precio con valor añadido", "Respondí a la objeción de la globalización"],
    },
    review: [
      { q: "Chi produce è un ___.", options: ["produzione", "produttore", "produttivo"], answer: 1 },
      { q: "«Vendiamo racconto» significa…", options: ["vendemos narrativa", "vendemos historia/marca", "contamos chistes"], answer: 1 },
      { q: "Vinceremo purché ___ onesti. (ser)", options: ["siamo", "siamo stati", "fossimo"], answer: 0 },
      { q: "La calidad se siente…", options: ["al tatto", "all'occhio solo", "al naso"], answer: 0 },
    ],
    cando: [
      "Puedo hablar de economía y artesanía",
      "Puedo debatir autenticidad y marca país",
      "Domino el vocabulario económico esencial",
    ],
  },

  {
    id: "cu-b2-08", n: 8, level: "B2",
    title: "Vida digital", titleIt: "Vita digitale",
    img: "/images/vocab/tecnologia.webp",
    goal: "Discutir tecnología, algoritmos y vida en línea",
    goals: ["Formular preguntas indirectas complejas", "Debatir algoritmos, privacidad y dependencia", "Proponer hábitos digitales sanos"],
    scenario: "Podcast grabado en casa: «Vita digitale», episodio piloto. Invitado: un experto en algoritmos. Tú, presentador: preguntas indirectas, datos y un experimento personal de «disintossicazione».",
    dialogue: [
      { speaker: "Tu", it: "Benvenuti! Oggi chiediamo all'esperto cosa succede davvero dentro i nostri telefoni.", es: "¡Bienvenidos! Hoy preguntamos al experto qué pasa de verdad dentro de nuestros teléfonos." },
      { speaker: "Esperto", it: "Grazie. La risposta breve: tutto quello che fate viene trasformato in dati.", es: "Gracias. La respuesta corta: todo lo que hacéis se transforma en datos." },
      { speaker: "Tu", it: "Mi domando se gli utenti sappiano davvero quanto vale il loro tempo.", es: "Me pregunto si los usuarios saben de verdad cuánto vale su tiempo." },
      { speaker: "Esperto", it: "Poche volte. Non è che l'algoritmo sia malvagio: è semplicemente efficiente.", es: "Pocas veces. No es que el algoritmo sea malvado: es simplemente eficiente." },
      { speaker: "Tu", it: "Curioso modo di dirlo. E riguardo ai ragazzi, cosa ci consiglia?", es: "Curiosa forma de decirlo. ¿Y respecto a los chicos, qué nos aconseja?" },
      { speaker: "Esperto", it: "Regole chiare: niente telefono in camera da letto, tempo definito, modelli adulti.", es: "Reglas claras: nada de teléfono en el dormitorio, tiempo definido, modelos adultos." },
      { speaker: "Tu", it: "Io ho provato una settimana senza social: vi racconto com'è andata…", es: "Yo probé una semana sin redes: os cuento cómo fue…" },
      { speaker: "Esperto", it: "Ah, non vedo l'ora! Il suo esperimento è esattamente ciò di cui parliamo.", es: "¡Ah, no veo la hora! Su experimento es exactamente de lo que hablamos." },
    ],
    comprehension: [
      { q: "¿Qué pasa con lo que hacemos según el experto?", options: ["Nada", "Se transforma en datos", "Se borra"], answer: 1 },
      { q: "¿Cómo describe el algoritmo?", options: ["Malvado", "Simplemente eficiente", "Inútil"], answer: 1 },
      { q: "¿Qué experimento hizo el presentador?", options: ["Una semana sin redes", "Un mes sin móvil", "Un día sin internet"], answer: 0 },
    ],
    chunks: [
      { it: "Mi domando se…", es: "Me pregunto si…" },
      { it: "Non è che sia malvagio: è efficiente.", es: "No es que sea malvado: es eficiente." },
      { it: "tutto viene trasformato in dati", es: "todo se transforma en datos" },
      { it: "cosa ci consiglia?", es: "¿qué nos aconseja?" },
      { it: "una disintossicazione digitale", es: "una desintoxicación digital" },
      { it: "Non vedo l'ora!", es: "¡No veo la hora!" },
    ],
    grammar: {
      focus: "Preguntas indirectas y subjuntivo de duda",
      inductive: [
        { it: "Mi domando se gli utenti sappiano.", es: "Me pregunto si los usuarios saben." },
        { it: "Chiediamogli cosa succeda dentro l'app.", es: "Preguntémosle qué pase dentro de la app." },
        { it: "Non so se sia peggio il too much o il nothing.", es: "No sé si sea peor el demasiado o el nada." },
      ],
      rule: [
        "Preguntas indirectas: se (sí/no), chi/cosa/dove/quando/perché + subjuntivo tras verbos de duda (mi domando se, non so se, chiedo se) o indicativo tras saber (so cosa succede).",
        "El podcast pide conectores de guion: benvenuti a, oggi parliamo di, non vedo l'ora, vi racconto com'è andata, restate sintonizzati.",
      ],
      topicId: "g3-b2-interrogative-indirette",
      gaps: [
        { q: "Mi domando se ___ (sapere) la verità.", options: ["sanno", "sappiano", "sapessero"], answer: 1 },
        { q: "Non so cosa ___ (decidere) fare.", options: ["decidono", "decidano", "decide"], answer: 1 },
        { q: "Chiedo se ___ (essere) possibile.", options: ["è", "sia", "fosse"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "La voz del podcaster",
      tip: "El podcaster italiano modula: abre alto («Benvenuti!»), baja en los datos, susurra el suspenso («vi racconto com'è andata…»). Practica la radio: la voz es contenido.",
      pairs: [
        { a: "Benvenuti!", b: "Restate sintonizzati.", note: "apertura y cierre" },
        { a: "Mi domando se…", b: "Non so se…", note: "dudas introductorias" },
        { a: "Non vedo l'ora!", b: "Ma dai!", note: "entusiasmo radiofónico" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Mi domando se sia possibile. Non so cosa dire. Chiedo se sia vero»." },
        { kind: "semi", task: "Presenta tu experimento digital (una semana sin X) con resultados y conclusiones." },
        { kind: "comunicativo", task: "Entrevista podcast: 6 preguntas indirectas al experto, resumen y cierre." },
        { kind: "autentico", task: "Graba un episodio real de 3 minutos sobre vida digital — en italiano, claro." },
      ],
    },
    reading: {
      letturaId: "inf-social-04",
      question: "¿Qué relación compleja describen las redes con los jóvenes?",
    },
    writing: {
      task: "Escribe el guion de tu episodio piloto (160 palabras): saludo, 4 preguntas indirectas, 2 datos, el experimento y el cierre.",
      minWords: 140,
      tips: ["mi domando se / non so se / chiedo se", "Cierre: restate sintonizzati!"],
      model: [
        "Benvenuti a Vita digitale! Oggi mi domando se il telefono ci abbia reso più liberi o più controllati.",
        "Non so se sia peggio la dipendenza o l'ignoranza dei dati: chiederemo a un esperto cosa ne pensi.",
        "Ho provato sette giorni senza social: vi racconto tutto. Restate sintonizzati!",
      ],
    },
    culture: {
      title: "Los italianos y la pantalla",
      text: "Italia tiene de las cifras más altas de Europa en tiempo de redes entre adolescentes. El debate público mezcla moralismo y ciencia: pantallas en las escuelas prohibidas desde 2025 en clase. Mientras, el podcast italiano explota: 20 millones de oyentes. La «disintossicazione digitale» es el nuevo fitness verbal.",
    },
    finalTask: {
      title: "Il mio episodio pilota",
      brief: "Graba (o presenta) tu episodio piloto de 3 minutos: tema digital, 4 preguntas indirectas, un dato, un experimento y cierre radiofónico.",
      checklist: ["Usé 4 preguntas indirectas con subjuntivo", "El guion suena a radio real", "Incluí un dato verificable"],
    },
    review: [
      { q: "Mi domando se ___ (esserci) una soluzione.", options: ["c'è", "ci sia", "ci fosse"], answer: 1 },
      { q: "«Non vedo l'ora» =", options: ["no tengo tiempo", "no veo la hora (tengo ganas)", "no miro el reloj"], answer: 1 },
      { q: "Non so cosa ___ (fare).", options: ["fare", "faccia", "facesse"], answer: 1 },
      { q: "Tras «so che…» se usa…", options: ["subjuntivo siempre", "indicativo (saber = certeza)", "condicional"], answer: 1 },
    ],
    cando: [
      "Puedo formular preguntas indirectas complejas",
      "Puedo debatir tecnología y privacidad",
      "Puedo producir un guion de podcast",
    ],
  },

  {
    id: "cu-b2-09", n: 9, level: "B2",
    title: "Emigración e identidad", titleIt: "Emigrazione e identità",
    img: "/images/letture/it-emigrazione-11.jpg",
    goal: "Narrar la gran historia de la emigración italiana y conectarla con tu propia historia",
    goals: ["Usar el passato remoto en narración histórica", "Narra la emigración italiana y sus huellas", "Comparar migraciones de ayer y hoy"],
    scenario: "Ciclo de conferencias «L'Italia dei partiti (los que se fueron)»: te toca narrar la gran emigración (1880-1980) y ponerla en diálogo con tu propia historia migrante. El passato remoto hace su aparición solemne.",
    dialogue: [
      { speaker: "Pubblico", it: "Ci racconti: quanti furono gli emigrati italiani?", es: "Cuéntenos: ¿cuántos fueron los emigrantes italianos?" },
      { speaker: "Tu", it: "Trenta milioni in un secolo: partirono da Genova e Napoli con una valigia di cartone.", es: "Treinta millones en un siglo: salieron de Génova y Nápoles con una maleta de cartón." },
      { speaker: "Pubblico", it: "E cosa trovarono in America? Fu davvero «l'America dei sogni»?", es: "¿Y qué encontraron en América? ¿Fue de verdad «la América de los sueños»?" },
      { speaker: "Tu", it: "Per molti no: nacquero ghetti, discriminazione, e il mito si sgretolò presto.", es: "Para muchos no: nacieron guetos, discriminación, y el mito se derrumbó pronto." },
      { speaker: "Pubblico", it: "E oggi? L'Italia è diventata paese d'immigrazione…", es: "¿Y hoy? Italia se ha vuelto país de inmigración…" },
      { speaker: "Tu", it: "Esatto: il rovescio della medaglia. Chi arriva oggi vive ciò che vissero i nonni.", es: "Exacto: la otra cara de la moneda. Quien llega hoy vive lo que vivieron los abuelos." },
      { speaker: "Pubblico", it: "Che lezione ci lascia questa storia?", es: "¿Qué lección nos deja esta historia?" },
      { speaker: "Tu", it: "Che nessuno emigra per scelta: si parte perché si deve. Ricordarlo è già politica.", es: "Que nadie emigra por elección: se parte porque se debe. Recordarlo ya es política." },
    ],
    comprehension: [
      { q: "¿Cuántos emigraron en un siglo?", options: ["3 millones", "13 millones", "30 millones"], answer: 2 },
      { q: "¿Qué encontraron muchos en América?", options: ["Guetos y discriminación", "Riqueza inmediata", "Nada"], answer: 0 },
      { q: "¿Qué lección extrae el ponente?", options: ["Emigrar es divertido", "Nadie emigra por elección", "America es un mito real"], answer: 1 },
    ],
    chunks: [
      { it: "partirono con una valigia di cartone", es: "salieron con una maleta de cartón" },
      { it: "nacquero ghetti e discriminazione", es: "nacieron guetos y discriminación" },
      { it: "il mito si sgretolò", es: "el mito se derrumbó" },
      { it: "il rovescio della medaglia", es: "la otra cara de la moneda" },
      { it: "ciò che vissero i nonni", es: "lo que vivieron los abuelos" },
      { it: "nessuno emigra per scelta", es: "nadie emigra por elección" },
    ],
    grammar: {
      focus: "Passato remoto: la narración histórica",
      inductive: [
        { it: "Partirono nel 1912; trovarono lavoro e faticarono.", es: "Salieron en 1912; encontraron trabajo y se fatigaron." },
        { it: "Nacque un quartiere italiano a New York.", es: "Nació un barrio italiano en Nueva York." },
        { it: "Fu un esodo che cambiò due continenti.", es: "Fue un éxodo que cambió dos continentes." },
      ],
      rule: [
        "El passato remoto narra hechos históricos puntuales: partirono, nacque, fu, trovarono. Convive con el imperfecto (mientras l'Italia era povera, milioni partirono). Es la voz de los libros de historia y de la épica familiar.",
        "Irregulares esenciales: fu (essere), ebbe (avere), fece (fare), disse (dire), andò (andare), venne (venire), nacque (nascere), visse (vivere).",
      ],
      topicId: "g3-c1-remoto-uso",
      gaps: [
        { q: "Nel 1920 ___ (partire) due milioni di italiani.", options: ["partivano", "partirono", "sono partiti"], answer: 1 },
        { q: "___ (nascere) una comunità fortissima a Buenos Aires.", options: ["Nacque", "Nasceva", "È nata"], answer: 0 },
        { q: "L'Italia ___ (essere) povera, ma i legami ___ (restare) saldi.", options: ["era… restarono", "fu… restavano", "è… restarono"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "La solemnidad del remoto",
      tip: "El remoto suena a epopeya: «parTIrono» con fuerza en la raíz. Las formas agudas «fu», «fece», «disse» se dicen cortas y secas, como golpes de tambor histórico.",
      pairs: [
        { a: "partirono", b: "partivano", note: "remoto vs imperfetto" },
        { a: "fu", b: "era", note: "puntual vs decorado" },
        { a: "nacque", b: "nacquero", note: "singular vs plural" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Partirono, trovarono, faticarono. Fu un esodo epico»." },
        { kind: "semi", task: "Narra en remoto una historia migratoria de tu familia o país (8 frases)." },
        { kind: "comunicativo", task: "Conferencia + preguntas del público: narra la emigración italiana y conecta con el presente." },
        { kind: "autentico", task: "Investiga a un emigrante italiano famoso (o tu barrio italiano local) y narra su historia en voz alta." },
      ],
    },
    reading: {
      letturaId: "it-emigrazione-11",
      question: "¿Cuántas partidas describe la lectura y qué huellas dejó la emigración italiana?",
    },
    writing: {
      task: "Escribe tu conferencia (160 palabras): la gran emigración italiana en passato remoto, un personaje ejemplo, y el puente con las migraciones actuales.",
      minWords: 140,
      tips: ["Remoto para hechos, imperfecto para contexto", "Un personaje concreto humaniza los datos"],
      model: [
        "Tra il 1880 e il 1980 partirono trenta milioni di italiani: fu uno degli esodi più grandi della storia.",
        "Mentre il Sud era poverissimo, nacquero comunità da New York a Buenos Aires.",
        "Mio nonno arrivò nel 1932: trovò lavoro e non tornò più. Chi arriva oggi in Italia visse la stessa storia, al contrario.",
      ],
    },
    culture: {
      title: "La Italia que se fue",
      text: "Treinta millones de italianos salieron entre 1880 y 1980: Argentina, Estados Unidos, Australia, Alemania. «L'america» se volvió mito y canción (Santa Lucia luntana). Hoy Italia invierte en «Italians abroad»: el voto de los descendientes pesa, y cada 15 millones de personas en el mundo tienen pasaporte italiano elegible.",
    },
    finalTask: {
      title: "La mia conferenza storica",
      brief: "Presenta tu conferencia de 4 minutos: la emigración italiana con datos y remotos, un personaje, y el puente con tu historia migrante. Con preguntas finales.",
      checklist: ["Usé 6 pasados remotos correctos", "El personaje humaniza los datos", "El puente presente-pasado es explícito"],
    },
    review: [
      { q: "Nel 1910 ___ (partire) milioni.", options: ["partivano", "partirono", "partono"], answer: 1 },
      { q: "El passato remoto narra…", options: ["decorado", "hechos históricos puntuales", "futuro"], answer: 1 },
      { q: "«Nacque» es el remoto de…", options: ["nascere", "nascondere", "notare"], answer: 0 },
      { q: "«Il rovescio della medaglia» =", options: ["el anverso", "la otra cara de la moneda", "la suerte"], answer: 1 },
    ],
    cando: [
      "Puedo narrar historia en passato remoto",
      "Puedo conectar pasados migratorios con el presente",
      "Puedo dar una conferencia estructurada",
    ],
  },

  {
    id: "cu-b2-10", n: 10, level: "B2",
    title: "Universidad y saber", titleIt: "Università e sapere",
    img: "/images/testi/rd-22.jpg",
    goal: "Escribir y comprender textos académicos con nominalizaciones",
    goals: ["Reconocer y usar nominalizaciones", "Resumir un artículo académico", "Participar en un seminario"],
    scenario: "Seminario de historia en la Sapienza: hay que resumir un artículo denso sobre el Renacimiento. El italiano académico convierte verbos en sustantivos («la costruzione dello Stato») — y hay que domarlo.",
    dialogue: [
      { speaker: "Prof", it: "Chi ci riassume la tesi centrale dell'articolo?", es: "¿Quién nos resume la tesis central del artículo?" },
      { speaker: "Tu", it: "L'autore sostiene che la nascita dello Stato moderno fu un processo lungo.", es: "El autor sostiene que el nacimiento del Estado moderno fue un proceso largo." },
      { speaker: "Prof", it: "Bene. E la periodizzazione proposta?", es: "Bien. ¿Y la periodización propuesta?" },
      { speaker: "Tu", it: "Distingue tre fasi: la crisi dei comuni, l'affermazione delle signorie, la consolidazione.", es: "Distingue tres fases: la crisis de los comunos, la afirmación de las señorías, la consolidación." },
      { speaker: "Prof", it: "Ottimo uso delle nominalizzazioni. Qualche critica da fare?", es: "Óptimo uso de las nominalizaciones. ¿Alguna crítica que hacer?" },
      { speaker: "Tu", it: "Una: sottovaluta la contribuzione delle città del Sud, come Napoli.", es: "Una: subestima la contribución de las ciudades del Sur, como Nápoles." },
      { speaker: "Prof", it: "Interessante. Come la motiverebbe?", es: "Interesante. ¿Cómo la motivaría?" },
      { speaker: "Tu", it: "Con la permanenza della corte aragonese: la sua presenza fu un motore culturale.", es: "Con la permanencia de la corte aragonesa: su presencia fue un motor cultural." },
    ],
    comprehension: [
      { q: "¿Cuál es la tesis del artículo?", options: ["El Estado moderno nació rápido", "El nacimiento del Estado moderno fue un proceso largo", "No hay tesis"], answer: 1 },
      { q: "¿Cuántas fases distingue?", options: ["Dos", "Tres", "Cuatro"], answer: 1 },
      { q: "¿Qué crítica hace el estudiante?", options: ["Subestima el Sur", "Es demasiado largo", "No tiene fuentes"], answer: 0 },
    ],
    chunks: [
      { it: "la nascita dello Stato moderno", es: "el nacimiento del Estado moderno" },
      { it: "l'affermazione delle signorie", es: "la afirmación de las señorías" },
      { it: "la tesi centrale dell'articolo", es: "la tesis central del artículo" },
      { it: "Qualche critica da fare?", es: "¿Alguna crítica que hacer?" },
      { it: "Come la motiverebbe?", es: "¿Cómo la motivaría?" },
      { it: "un motore culturale", es: "un motor cultural" },
    ],
    grammar: {
      focus: "Nominalización: el estilo académico",
      inductive: [
        { it: "costruire → la costruzione dello Stato", es: "construir → la construcción del Estado" },
        { it: "affermarsi → l'affermazione delle signorie", es: "afirmarse → la afirmación de las señorías" },
        { it: "contribuire → la contribuzione del Sud", es: "contribuir → la contribución del Sur" },
      ],
      rule: [
        "El italiano académico prefiere sustantivos abstractos: -zione, -mento, -tura, -anza/-enza (la formazione, lo sviluppo, la crisi, l'influenza). Convierte verbos en conceptos y eleva el registro.",
        "Fórmulas de seminario: l'autore sostiene che, la tesi centrale, in primo luogo… in secondo luogo, a mio avviso, come motiverebbe. Y el arte de «qualche critica»: elegante y punzante.",
      ],
      topicId: "gx-c1-nominalizz",
      gaps: [
        { q: "___ dello Stato moderno durò secoli. (il formarsi → sustantivo)", options: ["La formarsi", "La formazione", "Il formamento"], answer: 1 },
        { q: "L'___ delle repubbliche marinare fu decisiva. (il fiorire)", options: ["fioritura", "fiorezza", "fiorizione"], answer: 0 },
        { q: "A ___ avviso, la tesi è debole. (según mi parecer)", options: ["mio", "mia", "mio/mia invariabile"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "Las escaleras abstractas",
      tip: "Las nominalizaciones son escaleras de 5-6 peldaños: co-stru-ZIO-ne, affer-ma-ZIO-ne. Sube regular, sin saltarte la zi. En el seminario, pronúncialas lentas: son el traje del saber.",
      pairs: [
        { a: "costruzione", b: "affermazione", note: "escaleras -zione" },
        { a: "sviluppo", b: "influenza", note: "cortas pero densas" },
        { a: "a mio avviso", b: "secondo me", note: "académico vs coloquial" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «L'autore sostiene che la formazione dello Stato fu un processo»." },
        { kind: "semi", task: "Resume en 6 frases un texto denso que conozcas, con 4 nominalizaciones." },
        { kind: "comunicativo", task: "Seminario: resumen, una crítica motivada y respuesta a una objección." },
        { kind: "autentico", task: "Lee el resumen de un artículo académico italiano y reescríbelo en 5 frases." },
      ],
    },
    reading: {
      sourceId: "rd-22",
      question: "¿Por qué conviene leer los clásicos según la lectura?",
    },
    writing: {
      task: "Escribe una recensión académica (170 palabras): tesis del texto, 2 argumentos con nominalizaciones, una crítica motivada y propuesta.",
      minWords: 150,
      tips: ["Cada frase con un sustantivo abstracto mínimo", "a mio avviso / l'autore sostiene che"],
      model: [
        "L'articolo analizza la nascita dello Stato moderno attraverso tre fasi.",
        "L'autore sostiene che l'affermazione delle signorie fu determinante; a mio avviso, però, la contribuzione delle città meridionali resta sottovalutata.",
        "La presenza della corte aragonese a Napoli, ad esempio, fu un motore di innovazione artistica e politica.",
      ],
    },
    culture: {
      title: "El italiano del saber",
      text: "El italiano académico tiene su dialecto: nominalizaciones, impersonales («si osserva che»), pasivos y conectores solemnes. Nació con los humanistas del Renacimiento y sigue vivo en las aulas. Domarlo es el pase B2-C1: quien escribe «la costruzione del sapere» ya piensa en italiano culto.",
    },
    finalTask: {
      title: "Il mio seminario",
      brief: "Presenta tu seminario de 4 minutos: resumen de un texto (o tema) con nominalizaciones, crítica motivada y respuesta a una pregunta del público.",
      checklist: ["Usé 6 nominalizaciones correctas", "La crítica está motivada con un ejemplo", "Respondo con estructura y calma"],
    },
    review: [
      { q: "«La formazione» viene de…", options: ["formarsi", "formare", "ambos", "ninguno"], answer: 2 },
      { q: "«A mio avviso» =", options: ["en mi viaje", "en mi opinión", "a mi lado"], answer: 1 },
      { q: "L'affermazione delle signorie: «affermazione» es…", options: ["adjetivo", "nominalización", "gerundio"], answer: 1 },
      { q: "«Qualche critica da fare» es…", options: ["una queja", "una fórmula de seminario", "una pregunta de examen"], answer: 1 },
    ],
    cando: [
      "Puedo comprender y escribir textos académicos",
      "Domino la nominalización del registro culto",
      "Puedo participar en un seminario con críticas motivadas",
    ],
  },

  {
    id: "cu-b2-11", n: 11, level: "B2",
    title: "Diseño y belleza útil", titleIt: "Il design italiano",
    img: "/images/cultura/cul-14.jpg",
    goal: "Hablar de diseño, arquitectura y estética cotidiana",
    goals: ["Describir objetos y espacios con precisión", "Usar gerundios y participios presentes", "Cuenta la historia del diseño italiano"],
    scenario: "Visita guiada a la Triennale de Milán: del Vespa a la Moka, del lounge de Ponti a la silla de Castiglioni. El guía te pasa el micro: «Describa su objeto italiano favorito».",
    dialogue: [
      { speaker: "Guida", it: "Ecco la Moka di Bialetti: disegnata nel 1933 e mai cambiata. Lei cosa ne pensa?", es: "Aquí la Moka de Bialetti: diseñada en 1933 y nunca cambiada. ¿Usted qué piensa?" },
      { speaker: "Tu", it: "Per me è il design perfetto: un oggetto che unisce funzione e bellezza, senza tempo.", es: "Para mí es el diseño perfecto: un objeto que une función y belleza, sin tiempo." },
      { speaker: "Guida", it: "Nota l'ottagono? Ispirandosi alle lavatrici dell'epoca, Bialetti scelse questa forma.", es: "¿Nota el octágono? Inspirándose en las lavadoras de la época, Bialetti eligió esta forma." },
      { speaker: "Tu", it: "Affascinante: un oggetto quotidiano che racconta un'epoca intera.", es: "Fascinante: un objeto cotidiano que cuenta una época entera." },
      { speaker: "Guida", it: "E il futuro? Il design sostenibile sostituirà quello industriale?", es: "¿Y el futuro? ¿El diseño sostenible sustituirá al industrial?" },
      { speaker: "Tu", it: "Penso di sì: essendo le risorse limitate, il riutilizzo diventerà estetica.", es: "Creo que sí: siendo los recursos limitados, la reutilización se volverá estética." },
      { speaker: "Guida", it: "Bella formula. E qual è l'oggetto italiano che porterebbe a casa?", es: "Bonita fórmula. ¿Y cuál es el objeto italiano que se llevaría a casa?" },
      { speaker: "Tu", it: "La Vespa: avendo le ruote piccole, entra ovunque — come una buona idea.", es: "La Vespa: teniendo las ruedas pequeñas, cabe en todas partes — como una buena idea." },
    ],
    comprehension: [
      { q: "¿Cuándo fue diseñada la Moka?", options: ["1913", "1933", "1963"], answer: 1 },
      { q: "¿En qué se inspiró Bialetti?", options: ["En las lavadoras de la época", "En la naturaleza", "En un café turco"], answer: 0 },
      { q: "¿Qué objeto se llevaría a casa?", options: ["La Moka", "La Vespa", "La silla"], answer: 1 },
    ],
    chunks: [
      { it: "unisce funzione e bellezza", es: "une función y belleza" },
      { it: "senza tempo", es: "sin tiempo (atemporal)" },
      { it: "Ispirandosi a…, scelse…", es: "Inspirándose en…, eligió…" },
      { it: "un oggetto quotidiano", es: "un objeto cotidiano" },
      { it: "essendo le risorse limitate, …", es: "siendo los recursos limitados,…" },
      { it: "entra ovunque", es: "cabe en todas partes" },
    ],
    grammar: {
      focus: "Gerundio con valor causal y temporal",
      inductive: [
        { it: "Essendo le risorse limitate, il riuso diventa estetica.", es: "Siendo los recursos limitados, el reúso se vuelve estética." },
        { it: "Ispirandosi alle lavatrici, creò un'icona.", es: "Inspirándose en las lavadoras, creó un icono." },
        { it: "Avendo le ruote piccole, la Vespa entra ovunque.", es: "Teniendo las ruedas pequeñas, la Vespa cabe en todas partes." },
      ],
      rule: [
        "El gerundio (essere→essendo, avere→avendo, ispirarsi→ispirandosi) comprime causa, tiempo y modo en una sola palabra: elegante y eficiente. Nunca sujeto propio — comparte el del verbo principal.",
        "Vocabulario de diseño: forma, linea, materiale, prototipo, produzione in serie, essentialità, ergonomia, sostenibilità. Y los maestros: Ponti, Castiglioni, Colombo, Munari.",
      ],
      topicId: "g3-c1-gerundio-participio",
      gaps: [
        { q: "___ povero, usava il cartone. (siendo)", options: ["Essendo", "Stando", "Avendo"], answer: 0 },
        { q: "___ le ruote piccole, gira facile.", options: ["Avendo", "Essendo", "Facendo"], answer: 0 },
        { q: "Ispirandosi ___ natura, disegnò la sedia.", options: ["alla", "a la", "della"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "Los nombres del diseño",
      tip: "Los apellidos del diseño italiano se pronuncian enteros: Castiglioni (casti-GLIO-ni), Bialetti (bia-LET-ti), Ponti. La Vespa es VES-pa: corta y zumbante como el objeto.",
      pairs: [
        { a: "Bialetti", b: "Castiglioni", note: "apellidos del diseño" },
        { a: "Vespa", b: "Moka", note: "objetos icónicos" },
        { a: "essendo", b: "avendo", note: "gerundios irregulares" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Essendo un oggetto quotidiano, unisce funzione e bellezza»." },
        { kind: "semi", task: "Describe tu objeto de diseño favorito: forma, materiales, historia, por qué funciona." },
        { kind: "comunicativo", task: "Visita guiada: presenta 2 piezas de la Triennale con gerundios y anécdotas." },
        { kind: "autentico", task: "Investiga un diseñador italiano (Munari, Ponti) y presenta su filosofía en voz alta." },
      ],
    },
    reading: {
      lines: [
        { it: "Il design italiano nasce dal bello utile: la bellezza come funzione, non come ornamento.", es: "El diseño italiano nace de lo bello útil: la belleza como función, no como ornamento." },
        { it: "Dalla Moka alla Vespa, gli oggetti italiani raccontano un paese che ha fatto dell'eleganza una lingua.", es: "De la Moka a la Vespa, los objetos italianos cuentan un país que ha hecho de la elegancia una lengua." },
      ],
      question: "¿Qué es el «bello utile» y qué cuentan los objetos italianos?",
    },
    writing: {
      task: "Escribe un catálogo de exposición (160 palabras): presenta 3 objetos italianos con historia, materiales y filosofía, con gerundios.",
      minWords: 140,
      tips: ["Cada objeto con su gerundio (avendo/essendo/ispirandosi)", "Una frase-filosofía de cierre"],
      model: [
        "La Moka, disegnata nel 1933, unisce funzione e bellezza: essendo in alluminio, dura una vita.",
        "La Vespa, avendo le ruote piccole, liberò l'Italia del dopoguerra.",
        "Il design italiano insegna che la bellezza non è ornamento: è rispetto per chi usa.",
      ],
    },
    culture: {
      title: "La bellezza útil",
      text: "Italia convirtió el diseño en identidad nacional: la Vespa (1946) como símbolo de la reconstrucción, la Moka en cada cocina, la Triennale de Milán como templo. «Il bello utile» de Munari: si un objeto no funciona, no es bello. Los italianos lo aplican sin saberlo — y lo exigen sin piedad.",
      cultureId: "cul-14",
    },
    finalTask: {
      title: "La mia visita guidata alla Triennale",
      brief: "Presenta tu visita de 3 minutos: 3 objetos italianos (reales o de tu casa) con historia, materiales y filosofía del bello utile.",
      checklist: ["Usé 4 gerundios con valor causal", "Cada objeto tiene su historia", "La frase-filosofía cierra la visita"],
    },
    review: [
      { q: "___ tardi, prese un taxi. (siendo)", options: ["Essendo", "Avendo", "Stando"], answer: 0 },
      { q: "«Senza tempo» (en diseño) =", options: ["lento", "atemporal", "barato"], answer: 1 },
      { q: "Avendo ___ fame, cucinò. (tener)", options: ["avuto", "essere", "facendo"], answer: 0 },
      { q: "La Moka fue diseñada en…", options: ["1933", "1953", "1973"], answer: 0 },
    ],
    cando: [
      "Puedo describir objetos y espacios con precisión",
      "Uso gerundios causales con naturalidad",
      "Puedo narrar la historia del diseño italiano",
    ],
  },

  {
    id: "cu-b2-12", n: 12, level: "B2",
    title: "Misión: presentación formal", titleIt: "Missione: presentazione formale",
    img: "/images/testi/rd-20.jpg",
    goal: "Repaso final B2: preparar y dar una presentación formal completa",
    goals: ["Repasar las funciones B2 en cadena", "Estructurar una presentación académica", "Autoevaluarte con el can-do B2"],
    scenario: "Fin de nivel B2: presentar formalmente, ante un comité, el proyecto que te lleva a Italia — trabajo, investigación o negocio. Apertura, datos, concesivas, hipótesis, pasivas y cierre. Todo tu B2 en cinco minutos de gloria.",
    dialogue: [
      { speaker: "Commissione", it: "Prego, ha dieci minuti. Ci presenti il suo progetto.", es: "Adelante, tiene diez minutos. Preséntenos su proyecto." },
      { speaker: "Tu", it: "Grazie. Il progetto che presento oggi è stato sviluppato in due anni di ricerca.", es: "Gracias. El proyecto que presento hoy ha sido desarrollado en dos años de investigación." },
      { speaker: "Commissione", it: "Ci dica il problema e la soluzione, sinteticamente.", es: "Díganos el problema y la solución, sintéticamente." },
      { speaker: "Tu", it: "Il problema: l'abbandono scolastico. La proposta: un app che collega studenti e mentor.", es: "El problema: el abandono escolar. La propuesta: una app que conecta estudiantes y mentores." },
      { speaker: "Commissione", it: "Sono stati fatti studi simili? Cosa cambia nel suo?", es: "¿Se han hecho estudios similares? ¿Qué cambia en el suyo?" },
      { speaker: "Tu", it: "Benché esistano piattaforme di tutoring, nessuna è stata pensata per il contesto rurale.", es: "Aunque existan plataformas de tutoría, ninguna ha sido pensada para el contexto rural." },
      { speaker: "Commissione", it: "E i costi? Come sarà finanziato?", es: "¿Y los costos? ¿Cómo será financiado?" },
      { speaker: "Tu", it: "Se ottenessimo il fondo, avremmo otto mesi di sviluppo. Senza, partircmo comunque più piccoli.", es: "Si obtuviéramos el fondo, tendríamos ocho meses de desarrollo. Sin él, partiremos igualmente más pequeños." },
    ],
    comprehension: [
      { q: "¿Cuántos años de investigación tiene el proyecto?", options: ["Uno", "Dos", "Cinco"], answer: 1 },
      { q: "¿Qué problema aborda?", options: ["Abandono escolar", "Contaminación", "Paro juvenil"], answer: 0 },
      { q: "¿Qué diferencia a su propuesta?", options: ["Es más barata", "Está pensada para el contexto rural", "Tiene más marketing"], answer: 1 },
    ],
    chunks: [
      { it: "Il progetto è stato sviluppato in…", es: "El proyecto ha sido desarrollado en…" },
      { it: "Benché esistano piattaforme, nessuna…", es: "Aunque existan plataformas, ninguna…" },
      { it: "Se ottenessimo il fondo, avremmo…", es: "Si obtuviéramos el fondo, tendríamos…" },
      { it: "Ci dica il problema e la soluzione.", es: "Díganos el problema y la solución." },
      { it: "sinteticamente parlando", es: "hablando sintéticamente" },
      { it: "partiremo comunque", es: "partiremos de todos modos" },
    ],
    grammar: {
      focus: "Repaso B2: el arsenal completo",
      inductive: [
        { it: "È stato dimostrato che il metodo funziona.", es: "Se ha demostrado que el método funciona." },
        { it: "Sebbene i dati siano limitati, la tendenza è chiara.", es: "Aunque los datos sean limitados, la tendencia es clara." },
        { it: "Se ricevessimo supporto, potremmo scalare.", es: "Si recibiéramos apoyo, podríamos escalar." },
      ],
      rule: [
        "Repaso exprés B2: congiuntivo (presente/imperfetto/pasado), condizionale (presente/pasado), concesivas (benché, pur + gerundio), passivo (essere/venire), nominalizaciones, preguntas indirectas, gerundios causales, connettivi argumentativos.",
        "La presentación formal tiene su arco: apertura (grazie, il progetto che presento), problema, propuesta, diferenciación (benché…), financiación (se…, condizionale), cierre (spero di avervi convinto). Cada bloque pide sus estructuras.",
      ],
      topicId: "g3-c2-sequenza-tempi",
      gaps: [
        { q: "Il progetto ___ (svilupparsi, pasivo) in due anni.", options: ["è stato sviluppato", "ha sviluppato", "si sviluppava"], answer: 0 },
        { q: "Se ___ (ottenere) il fondo, avremmo tempo.", options: ["otteniamo", "ottenessimo", "otterremo"], answer: 1 },
        { q: "Benché ___ (essere) piccolo, il team è forte.", options: ["è", "sia", "fosse"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "La voz del comité",
      tip: "La presentación formal respira: pausa tras cada bloque, énfasis en los datos, caída firme en el cierre. «Se ottenessimo il fondo…» sube con esperanza; «avremmo otto mesi» cae con seguridad.",
      pairs: [
        { a: "Prego, ci presenti…", b: "La ringraziamo.", note: "apertura y cierre del comité" },
        { a: "se ottenessimo…", b: "…avremmo otto mesi", note: "hipótesis y fruto" },
        { a: "sinteticamente", b: "sostanzialmente", note: "adverbios de comité" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite el arco: «Grazie. Il problema è… La proposta è… Benché… Se…»." },
        { kind: "semi", task: "Prepara el guion de tu presentación: 5 bloques con una estructura B2 en cada uno." },
        { kind: "comunicativo", task: "Simulación completa ante comité: 10 minutos, preguntas difíciles, respuestas con matices." },
        { kind: "autentico", task: "Graba tu presentación real (proyecto, tesis, idea) y revísala con la checklist B2." },
      ],
    },
    reading: {
      sourceId: "rd-20",
      question: "¿Qué secretos revelan las città d'arte minori de la lectura?",
    },
    writing: {
      task: "Escribe el guion completo de tu presentación (180 palabras): apertura, problema, propuesta, diferenciación con concesiva, financiación con hipótesis y cierre.",
      minWords: 160,
      tips: ["Al menos 8 estructuras B2 distintas", "Una nominalización por bloque"],
      model: [
        "Grazie per l'attenzione. Il progetto che presento è stato sviluppato in due anni di lavoro sul campo.",
        "Il problema è chiaro: l'abbandono scolastico nelle zone rurali. La proposta: una piattaforma di mentorato digitale.",
        "Benché esistano soluzioni urbane, nessuna è stata progettata per il contesto rurale. Se ottenessimo il fondo, avremmo otto mesi per dimostrare l'impatto. Spero di avervi convinto.",
      ],
    },
    culture: {
      title: "El rito de la presentación",
      text: "En Italia se presenta ante comisiones para todo: becas, concursos públicos, proyectos europei. El «colloquio con la commissione» premia la claridad y castiga la arrogancia: se empieza agradeciendo, se estructura con numeración, se cierra con humildad. Y nunca, jamás, se excede el tiempo.",
    },
    finalTask: {
      title: "Davanti alla commissione — simulazione finale B2",
      brief: "La prueba final B2: presentación formal de 5 minutos ante comisión, con preguntas. Apertura, datos, concesiva, hipótesis, pasivas y cierre. Tu diploma de comunicación avanzada.",
      checklist: ["La presentación sigue el arco formal", "Incluye 8 estructuras B2 distintas", "Respondo a las preguntas con matices y calma"],
    },
    review: [
      { q: "Se ___ (avere) più tempo, presenteremmo tutto.", options: ["abbiamo", "avessimo", "avremmo"], answer: 1 },
      { q: "Il progetto ___ (finanziarsi, pasivo) dall'UE.", options: ["è finanziato", "ha finanziato", "finanzia"], answer: 0 },
      { q: "Benché i dati ___ limitati, procediamo. (ser)", options: ["sono", "siano", "fossero"], answer: 1 },
      { q: "«Sinteticamente» =", options: ["sintéticamente", "sintácticamente", "sin piedad"], answer: 0 },
    ],
    cando: [
      "Puedo dar una presentación formal estructurada",
      "Domino el arsenal gramatical B2",
      "Estoy listo/a para el nivel C1",
    ],
  },
];
