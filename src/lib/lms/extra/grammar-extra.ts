import type { GrammarTopic } from "../types";

/* ── Gramática EXTRA · paquete de expansión v1.1 ───────────────────── */

export const GRAMMAR_EXTRA: GrammarTopic[] = [
  {
    id: "gx-a1-are", level: "A1", title: "Los verbos en -ARE", titleIt: "I verbi in -are",
    summary: "La primera conjugación: -o, -i, -a, -iamo, -ate, -ano, con las trampas ortográficas de -care/-gare y -ciare/-giare.",
    explanation: [
      "Los verbos en -are son la familia más grande del italiano (parlare, mangiare, lavorare, studiare, abitare, giocare, cercare, comprare). El presente se forma con el tema + -o, -i, -a, -iamo, -ate, -ano: io parlo, tu parli, lui parla, noi parliamo, voi parlate, loro parlano.",
      "Dos trampas ortográficas: (1) los verbos en -care y -gare conservan el sonido duro ante las terminaciones que empiezan por e o i añadiendo una h: cercare → cerco, cerchi, cerca; giocare → gioco, giochi, gioca (nunca *cerchi sin h ni *giochi sin h). (2) Los verbos en -ciare y -giare pierden la i del tema delante de e/i: mangiare → mangio, mangi (nunca *mangii); cominciare → comincio, cominci.",
    ],
    examples: [
      { it: "Io parlo italiano e un po' di spagnolo.", es: "Yo hablo italiano y un poco de español." },
      { it: "Noi lavoriamo ogni giorno tranne la domenica.", es: "Nosotros trabajamos todos los días excepto el domingo." },
      { it: "Tu giochi a tennis? — Sì, ma gioco male!", es: "¿Tú juegas tenis? — Sí, ¡pero juego mal!" },
    ],
    problems: [
      { title: "Conjugar “cercare” con “tu”",
        question: "Completa: “Tu ___ le chiavi di casa.” (cercare)",
        steps: [
          "Identifica la conjugación: cercare termina en -are → primera conjugación.",
          "Aplica la ortografía: -care añade h ante las terminaciones que empiezan por e o i.",
          "La terminación de la 2ª persona es -i: tema “cerch-” + “i”.",
          "Resultado: cerchi. La frase es “Tu cerchi le chiavi di casa.”",
        ],
        conclusion: "cercare → tu cerchi. La h mantiene el sonido duro de la c." },
    ],
    exerciseIds: ["ex-a1-033", "ex-a1-034"],
  },
  {
    id: "gx-a2-pp", level: "A2", title: "Passato prossimo: avere o essere?", titleIt: "Il passato prossimo",
    summary: "El pasado reciente italiano: auxiliar essere con verbos de movimiento y reflexivos, avere con el resto; participios irregulares de alta frecuencia.",
    explanation: [
      "El passato prossimo se forma con il participio passato (parlato, venduto, dormito) más il auxiliar avere (verbos transitivos: ho mangiato) o essere (verbos de movimiento y estado: sono andato). La lista essere clásica: andare, venire, partire, arrivare, tornare, uscire, entrare, restare, rimanere, essere, stare, nascere, morire, diventare.",
      "Con essere, el participio concuerda en género y número con el sujeto: Maria è andata, Marco è andato, i ragazzi sono andati, le ragazze sono andate. Con avere no concuerda, salvo con los pronomi diretti lo/la/li/le: ho vista la foto (la he visto — concuerda con “la”). Participios irregulares que debes de memoria: fatto, detto, preso, messo, visto, stato, scritto, aperto, chiuso, vinto, perso, sciolto.",
    ],
    examples: [
      { it: "Ieri ho mangiato una pizza margherita.", es: "Ayer comí una pizza margherita." },
      { it: "Maria è andata al mercato a piedi.", es: "María fue al mercado a pie." },
      { it: "Le ragazze sono uscite alle otto.", es: "Las chicas salieron a las ocho." },
    ],
    problems: [
      { title: "Elegir el auxiliar",
        question: "Completa: “Le mie amiche ___ tornate tardi ieri sera.”",
        steps: [
          "Identifica el verbo: tornare (volver).",
          "Clasifícalo: verbo de movimiento → auxiliar essere.",
          "Concordancia: sujeto “le mie amiche” (femenino plural) → participio feminine plural: tornate.",
          "Auxiliar essere en passato prossimo con “loro”: sono.",
          "Resultado: “Le mie amiche sono tornate tardi ieri sera.”",
        ],
        conclusion: "Movimiento → essere + participio concordado: sono tornate." },
      { title: "Participio irregular",
        question: "Completa: “Ho ___ un messaggio a Luca.” (scrivere)",
        steps: [
          "Verbo scrivere, transitivo → auxiliar avere.",
          "El participio de scrivere es irregular: no *scrivuto, sino scritto.",
          "Con avere no hay concordancia: ho scritto.",
          "Resultado: “Ho scritto un messaggio a Luca.”",
        ],
        conclusion: "scrivere → scritto (irregular de memoria, como detto, fatto, preso)." },
    ],
    exerciseIds: ["ex-a2-034", "ex-a2-035", "ex-a2-036", "ex-a2-037"],
  },
  {
    id: "gx-a2-riflessivi", level: "A2", title: "Los verbos reflexivos", titleIt: "I verbi riflessivi",
    summary: "svegliarsi, lavarsi, alzarsi: pronombre + verbo en presente, y essere + pronombre en passato prossimo.",
    explanation: [
      "Los reflexivos llevan el pronombre complemento delante del verbo: mi sveglio, ti svegli, si sveglia, ci svegliamo, vi svegliate, si svegliano. En infinitivo, la partícula -si se pospone y el verbo pierde la e final: svegliare + si → svegliarsi; lavare + si → lavarsi. Los más usados: svegliarsi (despertarse), alzarsi (levantarse), lavarsi, vestirsi (vestirse), pettinarsi (peinarse), riposarsi, divertirsi (divertirse), annoiarsi (aburrirse), sentirsi (sentirse), chiamarsi.",
      "En passato prossimo el auxiliar es siempre essere y el pronombre va delante del auxiliar: mi sono svegliato/a, ti sei lavato/a, si è vestito/a. El participio concuerda con el sujeto. En imperativo informal el pronombre se pospone y se duplica la consonante: svegliati! (¡despiértate!), alzati!, lavati!.",
    ],
    examples: [
      { it: "Mi sveglio alle sette e mi lavo la faccia.", es: "Me despierto a las siete y me lavo la cara." },
      { it: "Ieri mi sono alzato tardi.", es: "Ayer me levanté tarde." },
      { it: "Come ti chiami? — Mi chiamo Sofia.", es: "¿Cómo te llamas? — Me llamo Sofía." },
    ],
    problems: [
      { title: "Passato prossimo reflexivo",
        question: "Completa: “Stamattina ___ ___ vestita in cinque minuti.” (vestirsi, Maria)",
        steps: [
          "Verbo reflexivo en passato prossimo → auxiliar essere.",
          "El pronombre reflexivo va DELANTE del auxiliar: mi/ti/si/ci/vi/si + essere + participio.",
          "Sujeto Maria (femenino singular): pronombre si, participio concordado vestita.",
          "Auxiliar essere 3ª persona: è.",
          "Resultado: “Stamattina si è vestita in cinque minuti.”",
        ],
        conclusion: "Reflexivo en pasado: si è vestita — pronombre + essere + participio concordado." },
    ],
    exerciseIds: ["ex-a2-032", "ex-a2-033", "ex-a2-039"],
  },
  {
    id: "gx-b1-aspetti", level: "B1", title: "Imperfetto o passato prossimo?", titleIt: "Imperfetto e passato prossimo",
    summary: "El decorado va en imperfecto, los hechos en passato prossimo: la narración italiana en dos tiempos.",
    explanation: [
      "El imperfecto pinta el marco: descripciones (era una giornata di sole), acciones en curso (dormivo profondamente), hábitos (andavamo al mare ogni estate), estados y emociones (avevo paura). El passato prossimo dispara los eventos puntuales que hacen avanzar la historia: è suonato il telefono, ho aperto la porta, è entrato il gatto.",
      "Las bisagras que lo revelan todo: mentre pide imperfecto (mentre cucinavo…), cuando introduce el evento (quando è arrivato…). Errores típicos del hispanohablante: usar passato prossimo para hábitos (❌ ho giocato sempre → ✓ giocavo sempre) y para descripciones (❌ ieri ha piovuto tutto il día cuando se quiere pintar el marco → ieri pioveva).",
    ],
    examples: [
      { it: "Mentre studiavo, è arrivata mia sorella.", es: "Mientras estudiaba, llegó mi hermana." },
      { it: "Da bambino andavo in bicicletta ogni giorno.", es: "De niño iba en bicicleta cada día." },
    ],
    problems: [
      { title: "Marco o evento",
        question: "Completa: “Ieri ___ (essere) una bella giornata: il sole ___ (splendere) quando ___ (uscire) di casa.”",
        steps: [
          "Clasifica cada verbo: ¿decorado o hecho puntual?",
          "“era una bella giornata” y “il sole splendeva” pintan el marco → imperfetto.",
          "“sono uscito/a di casa” es el evento que mueve la historia → passato prossimo.",
          "Resultado: “Ieri era una bella giornata: il sole splendeva quando sono uscito di casa.”",
        ],
        conclusion: "Dos imperfettos para el decorado + un passato prossimo para el evento." },
    ],
    exerciseIds: ["ex-b1-021", "ex-b1-022", "ex-b1-023"],
  },
  {
    id: "gx-b2-congp", level: "B2", title: "Il congiuntivo passato", titleIt: "Il congiuntivo passato",
    summary: "Opiniones sobre hechos terminados: che abbia fatto / che sia partita, con la concordancia del participio.",
    explanation: [
      "El congiuntivo passato se forma con abbia/abbia/abbia/abbiamo/abbiate/abbiano + participio (verbos con avere) o sia/sia/sia/siamo/siate/siano + participio concordado (verbos con essere). Ejemplos: penso che abbia capito, credo che sia arrivata, mi pare che abbiano vinto.",
      "Se usa tras los mismos disparadores del presente (penso che, credo che, è possibile che, mi sembra che, benché, sebbene) cuando el hecho es pasado: Penso che Marco abbia già mangiato (creo que Marco ya ha comido). La concordancia con essere sigue las reglas del passato prossimo: che sia partita (ella), che siano tornati (ellos).",
    ],
    examples: [
      { it: "Penso che abbiano già preso la decisione.", es: "Creo que ya han tomado la decisión." },
      { it: "Non credo che sia stata una buona idea.", es: "No creo que haya sido una buena idea." },
    ],
    problems: [
      { title: "Formar el congiuntivo passato",
        question: "Completa: “Credo che Maria ___ già ___ (partire) per Milano.”",
        steps: [
          "Disparador: credo che → subjuntivo.",
          "Hecho pasado (ya ocurrió) → congiuntivo pasado.",
          "partire usa essere; sujeto Maria → participio concordado partita.",
          "Auxiliar essere en subjuntivo 3ª persona: sia.",
          "Resultado: “Credo che Maria sia già partita per Milano.”",
        ],
        conclusion: "che sia partita: essere en subjuntivo + participio concordado." },
    ],
    exerciseIds: ["ex-b2-013", "ex-b1-027", "ex-b1-026"],
  },
  {
    id: "gx-b2-connettivi", level: "B2", title: "Conectores del texto", titleIt: "I connettivi testuali",
    summary: "nonostante, tuttavia, pertanto, per cui: la caja de herramientas que convierte frases sueltas en argumentación.",
    explanation: [
      "Familias de conectores: contraste (ma, però, tuttavia, comunque, nonostante, sebbene, eppure), causa (perché, poiché, dato che, siccome, in quanto), consecuencia (quindi, pertanto, di conseguenza, per cui), adición (inoltre, peraltro, oltretutto), ejemplificación (ad esempio, per esempio, come nel caso di).",
      "nonostante y sebbene rigen subjuntivo cuando llevan verbo (nonostante piovesse) y sustantivo sin cambios (nonostante la pioggia). Trampa de registro: quindi es neutro, pertanto es formal, eppure añade matiz de resistencia argumentativa (y sin embargo…). Con estos matices, un texto B2 empieza a sonar italiano de verdad.",
    ],
    examples: [
      { it: "Nonostante fosse tardi, siamo rimasti a chiacchierare.", es: "Aunque era tarde, nos quedamos a charlar." },
      { it: "Siccome il treno era in ritardo, ho chiamato l'ufficio.", es: "Como el tren iba con retraso, llamé a la oficina." },
    ],
    problems: [
      { title: "Elegir el conector",
        question: "“Il progetto è costoso; ___, i benefici durano decenni.” ¿tuttavia o quindi?",
        steps: [
          "Analiza la relación lógica: costoso (contra) vs beneficios duraderos (a favor).",
          "Es una oposición entre dos evaluaciones → conector de contraste.",
          "quindi expresa consecuencia, no encaja.",
          "Registro del texto: evaluativo-formal → tuttavia (o comunque).",
          "Resultado: “Il progetto è costoso; tuttavia, i benefici durano decenni.”",
        ],
        conclusion: "Contraste formal → tuttavia / comunque / nondimeno." },
    ],
    exerciseIds: ["ex-b2-016", "ex-b2-017", "ex-b2-024"],
  },
  {
    id: "gx-c1-nominalizz", level: "C1", title: "La nominalizzazione", titleIt: "La nominalizzazione",
    summary: "Del verbo al nombre: il verificarsi, l'attuazione, la presa d'atto — la sintaxis del italiano académico y profesional.",
    explanation: [
      "La nominalización convierte acciones en conceptos: attuare → l'attuazione, verificarsi → il verificarsi, crescere → la crescita, esprimere → l'espressione, collaborare → la collaborazione. El italiano formal la prefiere porque elimina agentes y suena objetivo: si procederà alla verifica (se procederá a la verificación) en lugar de verificheremo.",
      "Patrones de alto rendimiento: (1) infinito sustantivado con artículo (il fiorire della cultura), (2) verbo + prefijo (mettere in atto → l'attuazione; prendere atto → la presa d'atto; dar seguito → il seguito), (3) participio nominalizado (la crescente complessità). En informes y actas: in merito a, in occasione di, a mezzo di, ai fini di — preposiciones nobles que sustituyen a respecto de, para, por.",
    ],
    examples: [
      { it: "L'attuazione della direttiva è prevista per giugno.", es: "La aplicación de la directiva está prevista para junio." },
      { it: "A seguito del verificarsi di anomalie, si è provveduto al blocco del sistema.", es: "Consecuencia de la verificación de anomalías, se ha procedido al bloqueo del sistema." },
    ],
    problems: [
      { title: "Nominalizar una frase",
        question: "Reescribe en estilo formal: “Abbiamo controllato i conti e abbiamo trovato degli errori.”",
        steps: [
          "Identifica las acciones nominalizables: controllare → il controllo; trovare errori → il reperimento di errori.",
          "Sustituye el sujeto “noi” por la pasiva refleja: si è proceduto.",
          "Enlaza con preposiciones nobles: a seguito di, in esito a.",
          "Resultado: “In esito al controllo dei conti, si è proceduto al reperimento di errori.” (o más suave: “A seguito del controllo, sono emersi degli errori.”)",
        ],
        conclusion: "Acción → nombre + pasiva refleja: el ADN del italiano burocrático-académico." },
    ],
    exerciseIds: ["ex-c1-007", "ex-c1-011"],
  },
  {
    id: "gx-c2-trapassato", level: "C2", title: "Trapassado y concordancia de tiempos", titleIt: "Congiuntivo trapassato e concordanza",
    summary: "se avessi saputo, fosse arrivato: el subjuntivo pluscuamperfecto y la orquestación de los tiempos en el período hipotético y en el estilo indirecto.",
    explanation: [
      "El congiuntivo trapassado se forma con avessi/avesse/… o fossi/fosse/… + participio: che avessi mangiato, che fosse arrivato. Es el tiempo del irreal pasado y del estilo indirecto del pasado: disse che era già arrivato (dijo que ya había llegado); pensava che avessi capito (pensaba que habías entendido).",
      "La concordancia de tiempos (concordanza dei tempi) es la verdadera prueba C2: con un principal en pasado, el subjuntivo concurrente va en imperfecto (pensavo che fosse…), y el anterior, en trapassado (pensavo che fosse arrivato). Con principal en presente: penso che sia… (concurrente) / che sia arrivato (anterior). En el período hipotético: se + trapassado → condizionale composto (se avessi saputo, sarei venuto).",
    ],
    examples: [
      { it: "Se avessi saputo, sarei arrivato prima.", es: "Si hubiera sabido, habría llegado antes." },
      { it: "Credeva che avessi già finito il libro.", es: "Creía que ya había terminado el libro." },
    ],
    problems: [
      { title: "Concordar tiempos en estilo indirecto",
        question: "Pasa a estilo indirecto: “Sono già partito” (ha detto).",
        steps: [
          "Principal en pasado (ha detto) → la subordinada retrocede un tiempo.",
          "El passato prossimo “sono partito” retrocede a trapassado.",
          "partire usa essere → fosse + participio partito.",
          "Resultado: “Ha detto che era già partito.” (en neutro) o “Disse che fosse già partito.” (con subjuntivo, registro literario).",
        ],
        conclusion: "Pasado + pasado → trapassado: che fosse già partito / che avesse già finito." },
    ],
    exerciseIds: ["ex-c2-006", "ex-c2-009", "ex-b2-018", "ex-b2-020"],
  },
];
