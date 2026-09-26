import type { GrammarTopic } from "../types";

/* ── Grammatica completa v3.0 · bloque B (B1–B2) ─────────────────────── */

export const GRAMMAR_FULL_B: GrammarTopic[] = [
  /* ══════════ B1 ══════════ */
  {
    id: "g3-b1-congiuntivo-imperfetto", level: "B1", title: "Congiuntivo imperfetto", titleIt: "Congiuntivo imperfetto",
    summary: "fosse, avesse, facesse: el subjuntivo de “si yo fuera, si tuviera”.",
    explanation: [
      "Formación: -are → -assi (parlassi), -ere/-ire → -essi (credessi, dormissi). Irregulares de alta frecuencia: essere → fossi, fossi, fosse, fossimo, foste, fossero; avere → avessi…; fare → facessi; dare → dessi; stare → stessi; dire → dicessi; andare → andassi (regular en el patrón). El uso central B1: el periodo ipotetico de irrealidad (se fossi ricco…, se avessi tempo…) y los verbos de deseo/pesar en pasado: vorrei che venissi anche tu, pensavo che fosse facile.",
      "El español ya tiene este subjuntivo (“si tuviera, fuera”), así que el hispanohablante solo debe mapear formas: tuviera → avessi, fuera → fossi, hiciera → facessi. La diferencia real está en la secuencia: tras un principal en pasado (pensavo, credevo, speravo, era possibile), la subordinada con che exige imperfetto del subjuntivo, no presente: pensavo che sapessi la notizia (pensaba que supieras la noticia) — nunca “pensavo che sappia”, error calco del español “pensaba que sabes”.",
    ],
    examples: [
      { it: "Se fossi in te, accetterei.", es: "Si yo fuera tú, aceptaría." },
      { it: "Vorrei che tu stessi meglio.", es: "Quisiera que estuvieras mejor." },
      { it: "Pensavo che fosse più facile.", es: "Pensaba que era más fácil." },
      { it: "Magari avessi vent'anni!", es: "¡Ojalá tuviera veinte años!" },
    ],
    problems: [
      {
        title: "Secuencia de tiempos",
        question: "Completa: “Credevo che Marco ___ (essere) a casa.”",
        steps: [
          "Principal en pasado: credevo.",
          "Subordinada con che → congiuntivo imperfetto.",
          "essere → fosse.",
        ],
        conclusion: "Credevo che Marco fosse a casa.",
      },
    ],
    exerciseIds: ["ex-b1-004", "ex-b1-005"],
    tables: [
      {
        title: "Congiuntivo imperfetto",
        headers: ["Persona", "parlare", "credere", "dormire", "essere", "avere"],
        rows: [
          ["che io", "parlassi", "credessi", "dormissi", "fossi", "avessi"],
          ["che tu", "parlassi", "credessi", "dormissi", "fossi", "avessi"],
          ["che lui/lei", "parlasse", "credesse", "dormisse", "fosse", "avesse"],
          ["che noi", "parlassimo", "credessimo", "dormissimo", "fossimo", "avessimo"],
          ["che voi", "parlaste", "credeste", "dormiste", "foste", "aveste"],
          ["che loro", "parlassero", "credessero", "dormissero", "fossero", "avessero"],
        ],
        note: "Fórmula de irrealidad: se + imperfetto del subjuntivo → condizionale en la principal.",
      },
    ],
  },
  {
    id: "g3-b1-futuro-anteriore", level: "B1", title: "Futuro anteriore", titleIt: "Futuro anteriore",
    summary: "avrò finito = habré terminado: el futuro compuesto para lo anterior a otro futuro.",
    explanation: [
      "Formación: futuro simple del auxiliar + participio: avrò finito (habré terminado), sarò già partito (ya habré partido). El auxiliar se elige como siempre: avere con transitivos, essere con movimiento y reflexivos, y el participio con essere concuerda: quando sarà arrivata, avvisami (cuando ella haya llegado, avísame).",
      "Se usa cuando una acción futura es anterior a otra futura (exactamente el “futuro compuesto” español): avrò finito entro le sei (habré terminado antes de las seis); prima che tu sia uscita, devo parlarti. En registro periodístico y coloquial también expresa suposición sobre el presente o pasado: sarà stanco (estará cansado — supongo), avrà dimenticato l'appuntamento (habrá olvidado la cita). Ese matiz de probabilidad es importantísimo en la conversación real.",
    ],
    examples: [
      { it: "Avrò finito il lavoro entro venerdì.", es: "Habré terminado el trabajo para el viernes." },
      { it: "Quando sarai arrivato, chiamami.", es: "Cuando hayas llegado, llámame." },
      { it: "Sarà in ufficio a quest'ora.", es: "Estará en la oficina a esta hora (suposición)." },
      { it: "Avranno perso il volo.", es: "Habrán perdido el vuelo (probablemente)." },
    ],
    problems: [
      {
        title: "Futuro simple o compuesto",
        question: "Completa: “Domani alle otto ___ già ___ (partire).”",
        steps: [
          "La acción (partir) es anterior a “mañana a las ocho”.",
          "Anterioridad en futuro → futuro anteriore.",
          "partire → essere: sarò già partito.",
        ],
        conclusion: "Domani alle otto sarò già partito.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "g3-b1-imperativo-pronomi", level: "B1", title: "Imperativo con pronombres", titleIt: "L'imperativo con i pronomi",
    summary: "dammi, fammi, dimmi; non farlo; glielo dia: dónde se pegan los pronombres.",
    explanation: [
      "Con el imperativo AFIRMATIVO (tu/noi/voi), los pronombres se pegan al final del verbo formando una sola palabra: dammi il sale (dame la sal), chiamami stasera (llámame esta noche), andiamo via → andiamocene. Con los imperativos de cortesía (Lei) y con la forma negativa de tu, se usa el SUBJUNTIVO presente con el pronombre delante: mi dia il sale, non mi chiamare / non chiamarmi (ambas válidas: infinitivo con pronombre pegado o imperativo con pronombre delante).",
      "Los verbos en -are añaden h ante pronombres pegados que empiezan por vocal... no exactamente: la h aparece solo en las formas dignas (daho no existe); lo que sí cambia es la elisión: dammelo (dameLO), dimmelo (dimeLO), fammelo vedere (muéstramelo), diglielo (díselo). En negativo: non dirglielo, non farlo, non preoccuparti. Y la exhortación de noi/vi: alziamoci, sedetevi, muovetevi!",
    ],
    examples: [
      { it: "Dammi una mano, per favore.", es: "Dame una mano, por favor." },
      { it: "Mi dica, come posso aiutarla?", es: "Dígame, ¿cómo puedo ayudarle?" },
      { it: "Non dirlo a nessuno!", es: "¡No se lo digas a nadie!" },
      { it: "Sedetevi qui, prego.", es: "Siéntense aquí, por favor." },
    ],
    problems: [
      {
        title: "Imperativo + pronombre combinado",
        question: "Traduce: “Díselo (a él).”",
        steps: [
          "Imperativo de dire (tu): di'.",
          "Pronombre combinado: glielo.",
          "Se pega: diglielo.",
        ],
        conclusion: "Diglielo! (negativo: non diglielo).",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Imperativo: formas y pronombres",
        headers: ["Persona", "Afirmativo", "Negativo", "Con pronombre"],
        rows: [
          ["tu", "parla!", "non parlare!", "parlami / dimmi"],
          ["tu (irreg.)", "da' / dai!", "non dare!", "dammi, dammelo"],
          ["Lei", "parli!", "non parli!", "mi parli / mi dica"],
          ["noi", "parliamo!", "non parliamo!", "parliamogli"],
          ["voi", "parlate!", "non parlate!", "parlatemi"],
        ],
        note: "Afirmativo → pronombre pegado; negativo y cortesía → pronombre delante.",
      },
    ],
  },
  {
    id: "g3-b1-relative", level: "B1", title: "Oraciones de relativo", titleIt: "Le relative",
    summary: "che (sujeto/objeto), cui (con preposición), dove, il quale: el sistema completo.",
    explanation: [
      "La relativa italiana básica usa che para sujeto y objeto directo: il libro che ho letto (el libro que leí), la donna che parla (la mujer que habla). El italiano NO distingue “que/quien” ni omite el relativo jamás: la persona che ho visto (nunca “la persona ho visto”). Para el complemento con preposición se usa cui, invariable: la persona di cui parlo (la persona de quien hablo), il motivo per cui sono qui (el motivo por el que estoy aquí), lo strumento con cui lavoro.",
      "Dove introduce relativas de lugar: la città dove sono nato. Il quale (la quale, i quali, le quali) es la forma culta de che, útil para desambiguar género y en registro formal: la which... la sorella della quale ti parlavo. El posesivo relativo es il cui/la cui (invariable en género, concuerda con lo poseído): lo scrittore i cui libri vendono (el escritor cuyos libros venden). Para personas existe también chi (= quien): chi ben comincia…",
    ],
    examples: [
      { it: "Il film che abbiamo visto era lungo.", es: "La película que vimos era larga." },
      { it: "È l'amico con cui viaggio sempre.", es: "Es el amigo con quien siempre viajo." },
      { it: "Il paese dove sono cresciuta.", es: "El pueblo donde crecí." },
      { it: "Un autore i cui romanzi fama… i cui romanzi vincono premi.", es: "Un autor cuyas novelas ganan premios." },
    ],
    problems: [
      {
        title: "che o cui",
        question: "Completa: “La persona ___ mi fido è Marco.”",
        steps: [
          "fidarsi DI qualcuno → lleva preposición.",
          "Con preposición el relativo es cui.",
          "mi fido di → la persona di cui mi fido.",
        ],
        conclusion: "La persona di cui mi fido è Marco.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Relativos de un vistazo",
        headers: ["Función", "Relativo", "Ejemplo"],
        rows: [
          ["sujeto / objeto", "che", "la pizza che ho mangiato"],
          ["con preposición", "cui", "la città in cui vivo"],
          ["lugar", "dove", "il bar dove ci siamo conosciuti"],
          ["culto / desambiguar", "il quale", "la figlia della quale parlavo"],
          ["posesivo", "il cui / la cui", "il ragazzo la cui macchina…"],
          ["quien (sin antecedente)", "chi", "chi tace acconsente"],
        ],
      },
    ],
  },
  {
    id: "g3-b1-passivo", level: "B1", title: "Voz pasiva", titleIt: "Il passivo",
    summary: "essere (o venire) + participio: la lettera è stata scritta da Marco.",
    explanation: [
      "La pasiva italiana = essere + participio pasado (+ da + agente): la pizza è mangiata (la pizza es comida), il libro è stato pubblicato nel 2020 (el libro fue publicado en 2020). El participio concuerda con el sujeto: le case sono state vendute. En presente y pasado la pasiva con essere indica estado resultante; para la acción en curso se usa venire: la legge viene applicata ovunque (la ley se aplica en todas partes) — venire no se usa en infinitivo ni con tiempos compuestos.",
      "El agente se introduce con da (no por “por”): scritta da Dante, costruito dagli antichi Romani. En español la pasiva refleja (“se vende”, “se dice”) tiene su propio sistema italiano (vedi si impersonale). La pasiva de los verbos intransitivos no existe: para “se fue” no hay pasiva. En registro periodístico la pasiva es omnipresente: il presidente è stato ricevuto al Quirinale.",
    ],
    examples: [
      { it: "Il Duomo è stato costruito in sei secoli.", es: "El Duomo fue construido en seis siglos." },
      { it: "La pasta viene servita calda.", es: "La pasta se sirve caliente." },
      { it: "Questi vini sono prodotti in Toscana.", es: "Estos vinos son producidos en Toscana." },
      { it: "È stato licenziato dal direttore.", es: "Fue despedido por el director." },
    ],
    problems: [
      {
        title: "Pasiva con tiempos",
        question: "Pasa a pasiva: “Marco ha scritto la lettera.”",
        steps: [
          "Objeto → sujeto: la lettera.",
          "essere al mismo tiempo (present perfect) → è stata.",
          "participio concuerda: scritta + da Marco.",
        ],
        conclusion: "La lettera è stata scritta da Marco.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "g3-b1-si-impersonale", level: "B1", title: "El SI impersonal y reflejo", titleIt: "Il si impersonale",
    summary: "si mangia bene qui; in Italia si vive così: el “se” italiano con concordancia especial.",
    explanation: [
      "El si impersonal forma oraciones sin sujeto determinado: qui si parla italiano (aquí se habla italiano), si dice che… (se dice que…). El verbo va en 3.ª singular. Con un objeto plural el verbo pasa a plural (pasiva refleja): si vendono le case (se venden las casas), si mangiano i cannoli in Sicilia. Es la única “irregularidad”: singular con verbo intransitivo o sin objeto, plural con objeto plural.",
      "Si el verbo es reflexivo o lleva pronombre, el si se convierte en ci para evitar el choque si+si: in Italia ci si alza tardi la domenica (en Italia se madruga tarde — alzarsi). Con dovere/potere/volere impersonales: si deve partire presto. El español casi siempre usa “se + singular”, así que ojo con “si vendono” (plural) y con ci si (doble partícula). Diferencia con la pasiva en -si: en realidad son el mismo fenómeno; el italiano las siente como una sola construcción.",
    ],
    examples: [
      { it: "Qui si mangia davvero bene.", es: "Aquí se come de verdad bien." },
      { it: "Si dice che il film sia bello.", es: "Se dice que la película es buena." },
      { it: "In quel negozio si accettano carte.", es: "En esa tienda se aceptan tarjetas." },
      { it: "In Italia ci si saluta con un bacio.", es: "En Italia se saluda con un beso." },
    ],
    problems: [
      {
        title: "Singular o plural",
        question: "Completa: “Si ___ le mele al mercato.” (comprare)",
        steps: [
          "Objeto plural: le mele.",
          "Pasiva refleja → verbo plural.",
          "comprare → si comprano.",
        ],
        conclusion: "Si comprano le mele al mercato.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "g3-b1-verbi-preposizioni", level: "B1", title: "Verbos + preposiciones", titleIt: "Verbi e preposizioni",
    summary: "decidere di, credere a, insistere su: donde el español y el italiano no coinciden.",
    explanation: [
      "Cada idioma reparte sus preposiciones a su manera. Pares de alta frecuencia IT–ES: decidere DI (decidir de→a), cercare DI (intentar), smettere DI (dejar de), provare A (intentar), riuscire A (lograr), cominciare A (empezar a), avere paura DI (tener miedo de), essere sicuro DI (estar seguro de), interessarsi A (interesarse en→por), pensare A (pensar en) vs pensare DI (pensar de/opinar), credere A (creer a alguien) vs credere IN (creer en algo).",
      "Trampas típicas del hispanohablante: “soñar con” = sognare (senza preposizione) o sognare DI; “depender de” = dipendere DA; “confiar en” = fidarsi DI; “casarse con” = sposarsi CON (sposare a alguien, sin preposición, es casarse directamente); “entrar en” = entrare IN/A. La estrategia: aprender el verbo SIEMPRE con su preposición y el verbo regente que la exige, como una unidad (cercare di + infinito, essere bravo a + infinito).",
    ],
    examples: [
      { it: "Ho deciso di imparare l'italiano.", es: "Decidí aprender italiano (decidir de)." },
      { it: "Sono riuscito a prenotare l'albergo.", es: "Logré reservar el hotel (lograr a)." },
      { it: "Penso spesso ai miei amici.", es: "Pienso a menudo en mis amigos." },
      { it: "Dipende da te.", es: "Depende de ti." },
    ],
    problems: [
      {
        title: "La preposición correcta",
        question: "Completa: “Ho smesso ___ fumare.”",
        steps: [
          "smettere rige di + infinito.",
          "dejar de → smettere di.",
        ],
        conclusion: "Ho smesso di fumare.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Verbos + preposición (los 12 imprescindibles)",
        headers: ["Verbo italiano", "Preposición", "Español"],
        rows: [
          ["decidere", "di + inf.", "decidir"],
          ["cercare", "di + inf.", "intentar"],
          ["smettere", "di + inf.", "dejar de"],
          ["provare", "a + inf.", "intentar"],
          ["riuscire", "a + inf.", "lograr"],
          ["cominciare / iniziare", "a + inf.", "empezar a"],
          ["avere paura", "di + inf.", "tener miedo de"],
          ["essere sicuro", "di", "estar seguro de"],
          ["interessarsi", "a / di", "interesarse por"],
          ["pensare", "a (persona) / di (opinar)", "pensar en / pensar que"],
          ["dipendere", "da", "depender de"],
          ["fidarsi", "di", "confiar en"],
        ],
      },
    ],
  },
  {
    id: "g3-b1-temporali", level: "B1", title: "Subordinadas temporales", titleIt: "Le temporali",
    summary: "quando, mentre, appena, finché, prima che, dopo che: el tiempo del verbo manda.",
    explanation: [
      "Cuando (quando) y mientras (mentre) funcionan como en español: quando sono arrivato, dormivi; mentre studiavo, ascoltavo musica. Appena (= en cuanto): appena arrivi, chiamami — con futuro o subjuntivo según el matiz. Finché / finché non (= mientras / hasta que, ¡con non!): finché non torno, aspetta (hasta que vuelva, espera) — el non es puramente estilístico, no niega.",
      "Prima che rige SUBJUNTIVO siempre (prima che sia tardi — antes que sea tarde), mientras dopo che usa indicativo: dopo che è partito, ho pianto. En pasado, dopo che + trapassato: dopo che era uscito. Para el hispanohablante, las trampas son: (1) el non redundante de finché non; (2) prima che + subjuntivo (el español “antes de que” también subjuntivo, ¡esta es gratis!); (3) appena seguido del tiempo futuro: appena sarò arrivato (en cuanto haya llegado).",
    ],
    examples: [
      { it: "Mentre cucinavo, ho bruciato il sugo.", es: "Mientras cocinaba, quemé la salsa." },
      { it: "Appena hai finito, avisami.", es: "En cuanto termines, avísame." },
      { it: "Finché non ti calmi, non parliamo.", es: "Hasta que te calmes, no hablamos." },
      { it: "Esci prima che sia tardi.", es: "Sal antes que sea tarde." },
    ],
    problems: [
      {
        title: "El non de finché",
        question: "¿Cómo se dice “hasta que llegue”?",
        steps: [
          "finché = mientras / hasta que.",
          "Con verbos puntuales se añade non: finché non.",
          "llegare → subjuntivo arrivi.",
        ],
        conclusion: "finché non arrivi (el non NO significa negación aquí).",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "g3-b1-condizionale-passato", level: "B1", title: "Condizionale passato", titleIt: "Condizionale passato",
    summary: "avrei fatto = habría hecho: la forma compuesta de la hipótesis y la cortesía.",
    explanation: [
      "Formación: condizionale del auxiliar + participio: avrei mangiato (habría comido), sarei venuto (habría venido). Participio con essere concuerda: sarebbe arrivata antes. Es el tiempo del periodo ipotetico de irrealidad pasada: se avessi studiato, avresti passato l'esame (si hubieras estudiado, habrías pasado el examen) — con el subjuntivo trapassado (avessi studiato).",
      "También expresa futuro-in-the-past (estilo indirecto): disse che sarebbe arrivato tardi (dijo que llegaría tarde — el español “llegaría”). Y el “futuro hipotético” español “me gustaría haber…” se dice mi sarebbe piaciuto + infinito passato (mi habría gustado). Nunca uses condizionale passato solo porque en español hay condicional compuesto: revisa que haya una hipótesis o un pasado del futuro.",
    ],
    examples: [
      { it: "Se mi avessi detto, ti avrei aiutato.", es: "Si me hubieras dicho, te habría ayudado." },
      { it: "Sarei voluto venire alla festa.", es: "Habría querido venir a la fiesta." },
      { it: "Disse che sarebbe tornato presto.", es: "Dijo que volvería pronto." },
      { it: "Non avrei mai immaginato.", es: "Nunca habría imaginado." },
    ],
    problems: [
      {
        title: "Hipótesis pasada completa",
        question: "Completa: “Se ___ (avere) tempo, ___ (venire) volentieri.”",
        steps: [
          "Irrealidad pasada: se + congiuntivo trapassato → avessi avuto.",
          "Principal: condizionale passato → sarei venuto.",
        ],
        conclusion: "Se avessi avuto tempo, sarei venuto volentieri.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "g3-b1-congiuntivo-uso", level: "B1", title: "Cuándo usar el subjuntivo", titleIt: "L'uso del congiuntivo",
    summary: "penso che, spero che, benché: el mapa de los gatillos del subjuntivo italiano.",
    explanation: [
      "El subjuntivo italiano se dispara desde cuatro familias: (1) verbos de opinión/duda (penso che, credo che, mi sembra che, dubito che); (2) verbos de deseo/emoción (voglio che, spero che, mi dispiace che, è strano che, mi piace che); (3) conjunciones (benché, sebbene, prima che, affinché, purché, a meno che, nonostante, senza che); (4) superlativos y relativos con matiz (il migliore che io conosca). Con verbos de certeza (so che, è chiaro che, penso di sì) rige indicativo.",
      "La diferencia clave con el español: el italiano usa subjuntivo también detrás de penso che y mi sembra che, donde el español prefiere indicativo (creo que ES, penso che SIA). En cambio, después de “credo di” + mismo sujeto se usa infinitivo: credo di avere ragione (creo tener razón), nunca “credo che io abbia”. Las conjunciones che terminan en -ché (benché, affinché, purché, perché finale) siempre subjuntivo. En el habla coloquial el norte tiende a sustituir el subjuntivo por indicativo, pero en la norma escrita y en los exámenes CILS/CELI, subjuntivo.",
    ],
    examples: [
      { it: "Penso che abbia ragione lei.", es: "Creo que ella tiene razón (subj. obligatorio)." },
      { it: "Spero che tu stia meglio.", es: "Espero que estés mejor." },
      { it: "È strano che non chiami.", es: "Es extraño que no llame." },
      { it: "Credo di sì / Credo di sapere la risposta.", es: "Creo que sí / Creo saber la respuesta (infinito)." },
    ],
    problems: [
      {
        title: "Gatillo correcto",
        question: "¿Indicativo o subjuntivo? “Sono sicuro che Marco ___ (venire).”",
        steps: [
          "essere sicuro = certeza → indicativo.",
          "viene.",
        ],
        conclusion: "Sono sicuro che Marco viene (la duda usaría subjuntivo: venga).",
      },
    ],
    exerciseIds: ["ex-b1-001", "ex-b1-002"],
  },

  /* ══════════ B2 ══════════ */
  {
    id: "g3-b2-congiuntivo-trapassato", level: "B2", title: "Congiuntivo trapassato", titleIt: "Congiuntivo trapassato",
    summary: "fosse stato, avesse fatto: el subjuntivo pluscuamperfecto de la irrealidad.",
    explanation: [
      "Formación: congiuntivo imperfetto del auxiliar + participio: fosse arrivato (hubiera llegado), avesse saputo (hubiera sabido). Es el tiempo del periodo ipotetico de irrealidad pasada: se fossi stato più attento, non avresti sbagliato; y de la secuencia tras pasado de verbos de opinión: pensavo che fosse già partito (pensaba que ya se hubiera ido — el español “pensaba que ya se había ido” usa pluscuamperfecto de indicativo, ¡trampa!).",
      "El hispanohablante mapea fácil: “hubiera/hubiese sido” → fosse stato, “hubiera tenido” → avesse avuto. Los usos: (1) hipótesis pasada con se; (2) deseo imposible: magari avessi studiato medicina!; (3) subjuntivo tras principal pasado cuando la subordinada es anterior: non sapevo che avessi già finito (no sabía que ya hubieras terminado). Con essere el participio concuerda: se fossimo stati, se fosse arrivata.",
    ],
    examples: [
      { it: "Se avessi studiato, ora starei meglio.", es: "Si hubiera estudiado, ahora estaría mejor." },
      { it: "Magari lo avessi conosciuto!", es: "¡Ojalá lo hubiera conocido!" },
      { it: "Non pensavo che fosse già tutto pronto.", es: "No pensaba que ya estuviera todo listo." },
      { it: "Se fossimo partiti prima, non avremmo perso il volo.", es: "Si hubiéramos salido antes, no habríamos perdido el vuelo." },
    ],
    problems: [
      {
        title: "Hipótesis mixta",
        question: "Completa: “Se ___ (nascere) in Italia, ___ (parlare) italiano perfettamente.”",
        steps: [
          "Hipótesis pasada: fosse nato.",
          "Consecuencia presente: condizionale presente parlerebbe.",
        ],
        conclusion: "Se fosse nato in Italia, parlerebbe perfettamente italiano.",
      },
    ],
    exerciseIds: ["ex-b2-001", "ex-b2-002"],
  },
  {
    id: "g3-b2-concessive", level: "B2", title: "Concesivas", titleIt: "Le concessive",
    summary: "benché, sebbene, nonostante, per quanto: la concesión con subjuntivo.",
    explanation: [
      "Las concesivas italianas (“aunque”) rigen subjuntivo cuando usan las conjunciones cultas: benché / sebbé (aunque), nonostante (a pesar de que), per quanto (por más que), seppure / concesso che (aunque sea). Benché piova, usciamo (aunque llueva, salimos). Nonostante funciona igual con che + subjuntivo o con sustantivo sin che: nonostante la pioggia / nonostante piova.",
      "El italiano coloquial usa anche se + indicativo o subjuntivo (aunque sea + indicativo es lo más común: anche se piove), exactamente como el español “aunque llueve/lueva”. La diferencia de matiz: benché/sebbé son escritos y elegantes; anche se es neutro; per quanto añe intensidad (por más que + subjuntivo). Con valore hipotético irreal: anche se avessi tempo, non verrei (aunque tuviera tiempo, no iría — subjuntivo porque es hipótesis, no concesión).",
    ],
    examples: [
      { it: "Benché sia stanco, esco con voi.", es: "Aunque esté cansado, salgo con ustedes." },
      { it: "Nonostante il traffico, siamo arrivati puntuali.", es: "A pesar del tráfico, llegamos puntuales." },
      { it: "Anche se piove, la partita si gioca.", es: "Aunque llueva (o llueve), el partido se juega." },
      { it: "Per quanto gridasse, nessuno lo sentiva.", es: "Por más que gritara, nadie lo oía." },
    ],
    problems: [
      {
        title: "Concesiva real vs hipotética",
        question: "¿Indicativo o subjuntivo en “anche se ___ (avere) i soldi, non comprerei quella casa”?",
        steps: [
          "Hipótesis irreal (condizionale en la principal).",
          "Hipótesis → subjuntivo trapassado: avessi.",
        ],
        conclusion: "Anche se avessi i soldi, non comprerei quella casa.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "g3-b2-finali-causali", level: "B2", title: "Finales y causales", titleIt: "Le finali e le causali",
    summary: "affinché (para que, subj.), perché finale; poiché, siccome, dato che (porque).",
    explanation: [
      "Las finales expresan objetivo. Con subject diferente se usa affinché / perché + SUBJUNTIVO: ti spiego affinché tu capisca (te explico para que entiendas). Con el mismo sujeto se prefiere per + infinitivo: studio per imparare (estudio para aprender — mucho más frecuente que affinché). El español “para que” + subjuntivo se traduce casi siempre affinché + subjuntivo.",
      "Las causales tienen una jerarquía: perché (neutro: porque), poiché (formal/culto: ya que, puesto que), siccome / dato che / visto che (coloquial-culto: como, dado que — van bien al inicio de la frase), giacché (literario). Todas + indicativo: siccome piove, resto. La causal negativa explicativa non perché… ma perché: non perché sia tardi, ma perché sono stanco. Para la causa futura (motivo de una decisión): poiché domani c'è la festa, comprerò il vino.",
    ],
    examples: [
      { it: "Te lo dico affinché tu sappia la verità.", es: "Te lo digo para que sepas la verdad." },
      { it: "Studio l'italiano per lavorare in Italia.", es: "Estudio italiano para trabajar en Italia." },
      { it: "Siccome era tardi, prendemmo un taxi.", es: "Como era tarde, tomamos un taxi." },
      { it: "Poiché non rispondi, vado avanti da solo.", es: "Ya que no respondes, sigo solo." },
    ],
    problems: [
      {
        title: "Final con mismo sujeto",
        question: "Traduce: “Ahorro para viajar” (mismo sujeto).",
        steps: [
          "Mismo sujeto → per + infinitivo (no affinché).",
          "viaggiare.",
        ],
        conclusion: "Risparmio per viaggiare (affinché sería antinatural aquí).",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "g3-b2-relative-avanzate", level: "B2", title: "Relativas avanzadas", titleIt: "Relative avanzate",
    summary: "chi, chiunque, quantunque, ciò che, tutto ciò che: los relativos sin antecedente.",
    explanation: [
      "Los relativos sin antecedente explícito forman su propio grupo: chi (= el que / quien: chi va piano va sano e lontano), chiunque /unque (= cualquiera que: chiunque telefoni, digli che sono fuori — subjuntivo), tutto ciò che / quello che (= todo lo que: non capisco ciò che dici), quanto (= lo que: farò quanto possibile — registro elevado), ovunque (= dondequiera: ovunque vada, trovo amici).",
      "La relativa con il quale permite concordancia para desambiguar cuando hay dos posibles antecedentes: la moglie di Paolo, la quale lavora in banca (la que trabaja es la esposa — con che sería ambiguo). La relativa anticipada o suspensa (anacoluto) es típica del italiano hablado: Marco, che non lo vedo da mesi, mi ha scritto — el che relativo puede retomar un complemento entero. Cuantitativas: quanti (los que): quanti vogliono, si iscrivano.",
    ],
    examples: [
      { it: "Chi non rischia, non beve champagne.", es: "Quien no arriesga, no bebe champán." },
      { it: "Non capisco ciò che intendi.", es: "No entiendo lo que quieres decir." },
      { it: "Chiunque bussi, non aprire.", es: "Cualquiera que toque, no abras." },
      { it: "Ovunque andiamo, troviamo coda.", es: "Dondequiera que vayamos, encontramos cola." },
    ],
    problems: [
      {
        title: "Elegir el relativo sin antecedente",
        question: "Completa: “___ cerca, trova.” (el que busca…)",
        steps: [
          "“El que” sin antecedente → chi.",
          "verbo 3.ª singular.",
        ],
        conclusion: "Chi cerca, trova (versetto evangelico).",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "g3-b2-infinito-passato", level: "B2", title: "Infinito passato y usos del infinito", titleIt: "L'infinito passato",
    summary: "dopo aver mangiato, senza che ti vedano… dopo essere uscito: infinitivo con tiempo.",
    explanation: [
      "El infinito passato = auxiliar + participio: aver finito (haber terminado), essere uscito (haber salido — con concordancia: essere uscita). Se usa sobre todo tras preposiciones para expresar anterioridad: dopo aver mangiato (después de comer→haber comido), prima di essere licenziato (antes de ser despedido), senza aver capito niente (sin haber entendido nada). Sustituye elegantemente a una subordinada: dopo che ho mangiato → dopo aver mangiato.",
      "El infinito italiano también aparece con valor temporal o causal con di, a, per: al sentire quella notizia, ho pianto (al oír esa noticia, lloré); a dir la verità (a decir verdad); per essere sincero (para ser sincero). Con los pronombres, estos se pegan: dopo averti visto (después de haberte visto), senza farsi notare (sin hacerse notar). Ojo: el auxiliar essere en infinito passado nunca lleva concordancia escrita (essere uscito/e es invariable en el infinito: dopo essere uscita).",
    ],
    examples: [
      { it: "Dopo aver finito, andiamo a casa.", es: "Después de terminar, vamos a casa." },
      { it: "Dopo essere uscita, ha chiuso a chiave.", es: "Después de salir, cerró con llave." },
      { it: "Senza averlo mai visto prima.", es: "Sin haberlo visto nunca antes." },
      { it: "Al sentirе la tua voce, mi sono calmato.", es: "Al oír tu voz, me calmé." },
    ],
    problems: [
      {
        title: "Compactar una subordinada",
        question: "Reescribe con infinito: “Dopo che ho mangiato, ho dormito.”",
        steps: [
          "Sujeto idéntico en ambas → infinito.",
          "avere + participio: aver mangiato.",
          "dopo aver mangiato.",
        ],
        conclusion: "Dopo aver mangiato, ho dormito.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "g3-b2-interrogative-indirette", level: "B2", title: "Interrogativas indirectas", titleIt: "Le interrogative indirette",
    summary: "chiedo se…, non so che cosa…, dimmi dove: la pregunta escondida en la frase.",
    explanation: [
      "La interrogativa indirecta introduce una pregunta dentro de otra oración con verbos como chiedere, sapere, dire, capire, ricordarsi. Con si (para sí/no): non so se verrà (no sé si vendrá). Con pronombres/adverbios interrogativos: dimmi dove abiti (dime dónde vives), non capisco perché pianga (no entiendo por qué llore — subjuntivo opcional tras verbos de emoción), chissà come sta (quién sabe cómo está).",
      "La diferencia con la directa: no se invierte el sujeto (sai dove sta il bagno?, no “sai dove sta IL BAGNO?” con orden interrogativo directo), y el verbo va en indicativo para hechos, subjuntivo para duda o cortesía dubitativa: mi chiedo chi sia (me pregunto quién será). Con che cosa / cosa: non so cosa fare (no sé qué hacer). La construcción con se + condizionale expresa la cortesía de petición indirecta: mi chiedevo se potresti aiutarmi (me preguntaba si podrías ayudarme).",
    ],
    examples: [
      { it: "Non so se ho capito bene.", es: "No sé si entendí bien." },
      { it: "Dimmi quando arrivi.", es: "Dime cuándo llegas." },
      { it: "Mi chiedo chi sia quella donna.", es: "Me pregunto quién será esa mujer." },
      { it: "Chissà che cosa pensano di noi.", es: "Quién sabe qué piensan de nosotros." },
    ],
    problems: [
      {
        title: "Directa → indirecta",
        question: "Convierte: “Dove vai?” → (non so…)",
        steps: [
          "Pregunta directa con inversión → indirecta sin inversión.",
          "non so dove vai.",
        ],
        conclusion: "Non so dove vai (nunca “non so dove VAI tu?” con orden directo).",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "g3-b2-pronomi-combinati", level: "B2", title: "Pronombres combinados", titleIt: "I pronomi combinati",
    summary: "me lo, te la, glielo, ce ne, ve lo: dos pronombres en una sola palabra.",
    explanation: [
      "Cuando se combinan un pronombre indirecto (mi, ti, gli, le, ci, vi) con uno directo (lo, la, li, le, ne), el indirecto va primero y se transforman: mi + lo → me lo; ti + la → te la; gli/le + lo → glielo; ci + ne → ce ne; vi + lo → ve lo. La única forma nueva es glie- (para gli y le, masculino y femenino singular): glielo, gliela, glieli, gliele. Loro se pospone: do lo a loro → lo do a loro (registro formal, no combinado).",
      "Posición: con verbos conjugados van delante (me lo dai?); con infinitivo se pegan y la vocal final cae: darmelo (dármelo), dirglielo; con gerundio pegados: dicendoglielo; con imperativo afirmativo pegados: dimmelo!. La concordancia del participio en passato prossimo con combinados: solo con li/le/ne directo plural — me li hanno dati (me los dieron), mentre me lo hanno dato (invariable con lo).",
    ],
    examples: [
      { it: "Mi porti il caffè? — Te lo porto subito.", es: "¿Me traes el café? — Te lo traigo enseguida." },
      { it: "Hai parlato a Maria? — Sì, le ho parlato… gliel'ho detto.", es: "¿Le hablaste a María? — Sí, se lo dije." },
      { it: "Ce ne sono ancora due.", es: "Todavía hay dos (de eso)." },
      { it: "Devi dirglielo tu.", es: "Tienes que decírselo tú." },
    ],
    problems: [
      {
        title: "Formar el combinado",
        question: "Traduce: “¿Se lo prestas (a él)?”",
        steps: [
          "Indirecto: a lui → gli.",
          "Directo: lo.",
          "glie + lo → glielo.",
        ],
        conclusion: "Glielo presti?",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Tabla de combinaciones",
        headers: ["Indirecto", "+ lo / la", "+ li / le", "+ ne"],
        rows: [
          ["mi", "me lo / me la", "me li / me le", "me ne"],
          ["ti", "te lo / te la", "te li / te le", "te ne"],
          ["gli / le", "glielo / gliela", "glieli / gliele", "gliene"],
          ["ci", "ce lo / ce la", "ce li / ce le", "ce ne"],
          ["voi (vi)", "ve lo / ve la", "ve li / ve le", "ve ne"],
        ],
        note: "Con participio pasado: mi hai vistO (invariable con lo), mi hai vistI (concuerda con li).",
      },
    ],
  },
];
