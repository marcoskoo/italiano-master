import type { GrammarTopic } from "../types";

/* ── Grammatica completa v3.0 · bloque A (A1–A2) ───────────────────────
   17 temas que completan la cobertura gramatical de base junto a los
   temas existentes. Criterio MCER + contraste sistemático IT–ES. */

export const GRAMMAR_FULL_A: GrammarTopic[] = [
  /* ══════════ A1 ══════════ */
  {
    id: "g3-a1-alfabeto", level: "A1", title: "Alfabeto y pronunciación", titleIt: "Alfabeto e pronuncia",
    summary: "El italiano se lee casi como se escribe: dominar 8 reglas y ya lees todo.",
    explanation: [
      "El italiano tiene 21 letras (j, k, w, x, y solo aparecen en extranjerismos). Las vocales son siempre claras y no se contraen: a, e, i, o, u se pronuncian igual que en español, y cada vocal final se oye siempre (amico se oye a-mi-co, nunca “amiko”). La e y la o pueden ser abiertas o cerradas (é/è), pero la escritura no lo marca fuera de la sílaba tónica final (caffè, città) y para comunicarte basta la variante neutra.",
      "Las claves consonánticas son pocas y muy rentables: la h es muda pero distingue ho/hai/ha (avere) de o/ai/a; c y g son duras ante a/o/u (casa, gamba) y suaves ante e/i (ciao, gelato); para endurecerlas ante e/i se añade h (chiave, spaghetti); sci/sce suenan como la sh inglesa (pesce); gn suena como ñ (bagno); gli suena como ll italiana (figlio); y la z es ts o dz (pizza, zero). Las consonantes dobles (nonno ≠ nono) son largas de verdad: alargando la consonante cambias la palabra.",
    ],
    examples: [
      { it: "cena [che-na] vs cena", es: "la cena se pronuncia igual que en español" },
      { it: "ciao / cioccolato / cinema", es: "chao / chokkolato / chinema (c+i = ch)" },
      { it: "ghiro / paghiro… no: paghe, spaghetti", es: "g+h = g dura: spaguétti" },
      { it: "nonno (abuelo) ≠ nono (noveno)", es: "la doble consonante se alarga" },
    ],
    problems: [
      {
        title: "Leer correctamente",
        question: "¿Cómo se pronuncia “pesce”?",
        steps: [
          "Divido en sílabas: pe-sce.",
          "sc ante e/i suena como sh inglesa.",
          "Por tanto: “pé-she”.",
        ],
        conclusion: "pesce suena “péshe”. Y si fuera “pesce” con sc seguida de a/o/u (pesca) sería “péska”.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Las 8 reglas de oro de la pronunciación",
        headers: ["Escritura", "Suena como", "Ejemplo"],
        rows: [
          ["c / g + a, o, u", "k / g", "casa, gusto"],
          ["c / g + e, i", "ch / j suave", "ciao, gelato"],
          ["ch / gh + e, i", "k / g", "chiave, spaghetti"],
          ["sc + e, i", "sh", "pesce, uscita"],
          ["gn", "ñ", "bagno, lasagne"],
          ["gli", "ll (líquida)", "figlio, famiglia"],
          ["z", "ts / dz", "pizza, zero"],
          ["h", "muda", "ho, hai, hotel"],
        ],
        note: "El acento gráfico solo se escribe en sílabas finales: città, caffè, però. En otras posiciones no se marca (tavolo = TAvolo).",
      },
    ],
  },
  {
    id: "g3-a1-articoli-ind", level: "A1", title: "Artículos indeterminados y partitivo", titleIt: "Articoli indeterminativi e partitivo",
    summary: "un/uno/una/un' para “uno cualquiera”; del/dello/della/dei para “algo de”.",
    explanation: [
      "El artículo indeterminado italiano tiene cuatro formas: un (masculino ante consonante: un libro), uno (masculino ante s+consonante, z, ps, gn: uno studente, uno zaino), una (femenino: una casa) y un' (femenino ante vocal: un'amica). Es exactamente el mismo reparto que il/lo y la/l' de los artículos determinados, así que si ya sabes elegir entre il y lo, sabes elegir entre un y uno.",
      "El partitivo (del, dello, della, dei, degli, delle) responde a “algún/cierto/una cantidad de”: vorrei del pane (quiero pan), ho comprato delle mele (compré unas manzanas). Se forma con di + artículo y en español muchas veces se omite o se dice “algunos”. Con verbos de gustos y deseos es omnipresente: preferisco della frutta. En negaciones tiende a desaparecer: non ho pane (no tengo pan).",
    ],
    examples: [
      { it: "Un amico mi ha regalato dello zucchero.", es: "Un amigo me regaló azúcar." },
      { it: "Vorrei un'aranciata e della acqua frizzante… no: dell'acqua frizzante.", es: "Quisiera una naranjada y agua con gas." },
      { it: "Ho degli amici a Roma.", es: "Tengo unos amigos en Roma." },
      { it: "Non ho (dei) soldi con me.", es: "No tengo dinero encima (el partitivo se omite en negación)." },
    ],
    problems: [
      {
        title: "Elegir la forma correcta",
        question: "Completa: “Ho mangiato ___ gelato e ___ insalata.”",
        steps: [
          "gelato: masculino ante consonante normal → un gelato.",
          "insalata: femenino que empieza por vocal → un'insalata.",
          "Si fuera partitivo (algún gelato): del gelato, dell'insalata.",
        ],
        conclusion: "Ho mangiato un gelato e un'insalata.",
      },
    ],
    exerciseIds: ["ex-a1-001", "ex-a1-002"],
    tables: [
      {
        title: "Indeterminado y partitivo de un vistazo",
        headers: ["Caso", "Indeterminado", "Partitivo", "Ejemplo"],
        rows: [
          ["m. consonante", "un", "del", "un libro · del pane"],
          ["m. s+cons/z/ps/gn", "uno", "dello", "uno zaino · dello zucchero"],
          ["f. consonante", "una", "della", "una pizza · della frutta"],
          ["f. vocal", "un'", "dell'", "un'amica · dell'acqua"],
          ["m. plural", "—", "dei / degli", "dei libri · degli amici"],
          ["f. plural", "—", "delle", "delle mele"],
        ],
        note: "El partitivo NO existe en plural indeterminado: nunca “uni” o “une”.",
      },
    ],
  },
  {
    id: "g3-a1-numeri", level: "A1", title: "Números cardinales y ordinales", titleIt: "Numeri cardinali e ordinali",
    summary: "De uno a un millón, y la serie primero/segundo/tercero.",
    explanation: [
      "Los cardinales italianos se escriben en una sola palabra hasta el millar: ventotto (28), trentatré (33), novantanove (99), centoventicinque (125). El acento se escribe solo en números agudos terminados en -tré (ventitré). Mil es mille; dos mil pasa a plural: duemila, tremila. Un millón es un milione (y “dos millones” due milioni, separado). Atención a due con vocal final corta y a zero inicial en precios y años.",
      "Los ordinales de 1.º a 10.º son irregulares en su mayoría: primo, secondo, terzo, quarto, quinto, sesto, settimo, ottavo, nono, decimo. Desde el 11 se forma con el cardinal + -esimo cortando la vocal final: undicesimo (11.º), ventesimo (20.º), trentunesimo (31.º). Se escriben sin punto ni.º y concuerdan: la prima volta, i primi passi. Para pisos, capítulos y siglos son diarios: al terzo piano, capitolo quarto, il Novecento (siglo XX).",
    ],
    examples: [
      { it: "Sono le otto e venti (8:20).", es: "Son las ocho y veinte." },
      { it: "Il biglietto costa ventisei euro.", es: "El pasaje cuesta veintiséis euros." },
      { it: "Abito al quinto piano.", es: "Vivo en el quinto piso." },
      { it: "È la mia prima volta in Italia.", es: "Es mi primera vez en Italia." },
    ],
    problems: [
      {
        title: "Formar un ordinal alto",
        question: "¿Cómo se dice “quincuagésimo” (50.º)?",
        steps: [
          "Cardinal: cinquanta.",
          "Quito la vocal final: cinquant-.",
          "Añado -esimo: cinquantesimo.",
        ],
        conclusion: "50.º = cinquantesimo (se pronuncia chinquantésimo).",
      },
    ],
    exerciseIds: ["ex-a1-009", "ex-a1-010"],
    tables: [
      {
        title: "Cardinales que trampas",
        headers: ["Número", "Italiano", "Trampa"],
        rows: [
          ["1", "uno / una", "un'ora, un amico (apócope)"],
          ["17", "diciassette", "doble s, una sola palabra"],
          ["19", "diciannove", "doble n"],
          ["23", "ventitré", "único con acento"],
          ["1000", "mille", "duemila (plural!)"],
          ["1.000.000", "un milione", "due milioni (separado)"],
        ],
      },
    ],
  },
  {
    id: "g3-a1-ora", level: "A1", title: "La hora, los días y la fecha", titleIt: "L'ora, i giorni e la data",
    summary: "Che ora è? — Sono le… / È l'una. Días con minúscula y fechas al revés que en español.",
    explanation: [
      "Para la hora se usa essere: È l'una / è mezzogiorno / è mezzanotte para la una y los medios días, y Sono le + número para todo lo demás (Sono le tre, Sono le otto e mezza). Los minutos se añaden con e (le cinque e dieci) o se restan con meno (le cinque meno dieci). Al preguntar puedes elegir entre Che ora è? y Che ore sono?, ambas correctas.",
      "Los días (lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica) y los meses se escriben SIEMPRE con minúscula, a diferencia del español. La fecha se dice con el cardinal excepto el día primero, que es ordinal: il primo giugno. Para el día de la semana concretos se usa il (il lunedì = los lunes) o su (lunedì = el lunes próximo): ci vediamo lunedì. Invariable en plural: tutti i lunedì.",
    ],
    examples: [
      { it: "Che ora è? — Sono le nove e un quarto.", es: "¿Qué hora es? — Son las nueve y cuarto." },
      { it: "Il treno parte alle sette meno venti.", es: "El tren sale a las siete menos veinte." },
      { it: "Oggi è il primo dicembre.", es: "Hoy es el uno de diciembre." },
      { it: "Il sabato vado in palestra.", es: "Los sábados voy al gimnasio." },
    ],
    problems: [
      {
        title: "Decir una cita completa",
        question: "¿Cómo dirías “el 3 de mayo a las 2:30 pm”?",
        steps: [
          "Fecha: il tre maggio (cardinal, salvo il primo).",
          "Hora: le due e mezza (pm implícito o di pomeriggio).",
          "Preposición de hora: a + le = alle.",
        ],
        conclusion: "Il tre maggio alle due e mezza.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Mini-calendario italiano",
        headers: ["Italiano", "Español", "Nota"],
        rows: [
          ["lunedì … domenica", "lunes … domingo", "minúscula siempre"],
          ["gennaio, febbraio, marzo", "enero, febrero, marzo", "minúscula siempre"],
          ["il primo maggio", "el uno de mayo", "solo el 1.º es ordinal"],
          ["alle otto", "a las ocho", "a + le = alle"],
          ["da lunedì a venerdì", "de lunes a viernes", "da…a invariables"],
        ],
      },
    ],
  },
  {
    id: "g3-a1-avere-essere-espressioni", level: "A1", title: "Tener o ser: las expresiones de estado", titleIt: "Avere o essere nelle espressioni",
    summary: "ho fame, ho 20 anni, ho ragione: donde el español varía, el italiano usa avere.",
    explanation: [
      "El italiano usa avere en un paquete de expresiones que en español reparten entre tener, ser y sentir: ho fame (tengo hambre), ho sete (tengo sed), ho sonno (tengo sueño), ho freddo/caldo (tengo frío/calor), ho paura (tengo miedo), ho fretta (tengo prisa), ho ragione/torto (tengo razón/culpa — en español “tener la razón”), ho bisogno di (necesito) y la edad: ho vent'anni (tengo veinte años).",
      "Con essere, en cambio, van las descripciones y estados físicos que en español decimos con tener: sono stanco (estoy cansado), sono felice (soy/estoy feliz), sono malato (estoy enfermo). La regla práctica: sensaciones físicas y posesiones abstractas → avere; identidades, cualidades y estados con adjetivo → essere. Y atención al clásico error: en italiano NO se dice “sono fame”, porque sería “soy hambre”.",
    ],
    examples: [
      { it: "Ho fame, andiamo a mangiare?", es: "Tengo hambre, ¿vamos a comer?" },
      { it: "Quanti anni hai? — Ne ho diciannove.", es: "¿Cuántos años tienes? — Tengo diecinueve." },
      { it: "Hai ragione tu, scusa.", es: "Tienes razón, perdón." },
      { it: "Sono stanco morto dopo il viaggio.", es: "Estoy muerto de cansancio tras el viaje." },
    ],
    problems: [
      {
        title: "avere o essere",
        question: "Completa: “___ freddo, chiudi la finestra!”",
        steps: [
          "La sensación física de temperatura usa avere.",
          "Sujeto implícito io → forma ho.",
          "Nunca “sono freddo” (eso = soy frío de personalidad).",
        ],
        conclusion: "Ho freddo, chiudi la finestra!",
      },
    ],
    exerciseIds: ["ex-a1-003", "ex-a1-004"],
  },
  {
    id: "g3-a1-verbi-irregolari", level: "A1", title: "Irregulares esenciales I", titleIt: "Verbi irregolari essenziali I",
    summary: "andare, fare, stare, dare, dire, uscire: los seis caballos de batalla.",
    explanation: [
      "Andare (ir) es irregular en todo el singular: vado, vai, va, andiamo, andate, vanno. Su compuesto andarsene (irse) añade la partícula: me ne vado. Fare (hacer) mezcla raíces latinas y francesas: faccio, fai, fa, facciamo, fate, fanno — y de él cuelgan centenares de verbos compuestos que se conjugan igual (rifare, soddisfare).",
      "Stare (estar/quedarse) da sto, stai, sta, stiamo, state, stanno: sirve para stare bene/male, stare zitto, stare attento y para el progresivo (sto mangiando). Dare (dar) solo irregular en io: do, dai, dà, diamo, date, danno (en italiano antiguo “dèo”). Dire (decir): dico, dici, dice, diciamo, dite, dicono. Uscire (salir) esco, esci, esce, usciamo, uscite, escono. Dominar estos seis es tener el 80 % de la conversación A1 en el bolsillo.",
    ],
    examples: [
      { it: "Vado a lavorare, ciao!", es: "Voy a trabajar, ¡chau!" },
      { it: "Che fai stasera? — Non faccio niente.", es: "¿Qué haces esta noche? — No hago nada." },
      { it: "Sto bene, grazie!", es: "Estoy bien, ¡gracias!" },
      { it: "Mi dici la verità?", es: "¿Me dices la verdad?" },
    ],
    problems: [
      {
        title: "Conjugar al vuelo",
        question: "Completa: “Lei ___ sempre tutto tardi.” (fare)",
        steps: [
          "Sujeto Lei → 3.ª persona singular.",
          "fare → fa.",
          "La frase completa necesita también l'ordine: fa sempre tutto tardi.",
        ],
        conclusion: "Lei fa sempre tutto tardi.",
      },
    ],
    exerciseIds: ["ex-a1-005", "ex-a1-006"],
    tables: [
      {
        title: "Seis irregulares en presente",
        headers: ["Persona", "andare", "fare", "stare", "dare", "dire", "uscire"],
        rows: [
          ["io", "vado", "faccio", "sto", "do", "dico", "esco"],
          ["tu", "vai", "fai", "stai", "dai", "dici", "esci"],
          ["lui/lei", "va", "fa", "sta", "dà", "dice", "esce"],
          ["noi", "andiamo", "facciamo", "stiamo", "diamo", "diciamo", "usciamo"],
          ["voi", "andate", "fate", "state", "date", "dite", "uscite"],
          ["loro", "vanno", "fanno", "stanno", "danno", "dicono", "escono"],
        ],
        note: "Il dà del verbo dare lleva acento para no confundirlo con la preposición da.",
      },
    ],
  },
  {
    id: "g3-a1-possessivi", level: "A1", title: "Posesivos", titleIt: "Aggettivi e pronomi possessivi",
    summary: "il mio libro, la tua casa: el posesivo italiano casi siempre va con artículo.",
    explanation: [
      "Los posesivos concuerdan con la cosa poseída, no con el poseedor: il suo libro (de él o de ella, ¡indistinto!), la loro macchina. Formas: mio/mia/miei/mie, tuo/tua/tuoi/tue, suo/sua/suoi/sue, nostro/nostro…, vostro/vostro…, loro (invariable). Se colocan normalmente antes del sustantivo y CON artículo: la mia famiglia, i tuoi genitori.",
      "Hay dos excepciones donde el artículo desaparece: (1) parientes singulares sin especificador: mia madre, tuo fratello, sua sorella (pero le mie sorelle lleva artículo por el plural, e il mio fratello maggiore lo lleva por el adjetivo); (2) expresiones fijas de afecto: casa mia, mamma mia. Ojo con il loro, que jamás cambia y sí lleva artículo: il loro cane. Para saber de quién es el “suo”, el contexto manda o se aclara: il libro di Marco.",
    ],
    examples: [
      { it: "La mia famiglia è numerosa.", es: "Mi familia es numerosa." },
      { it: "Sua madre è medico.", es: "Su madre es médica (de él o de ella)." },
      { it: "Le loro valigie sono pesanti.", es: "Sus maletas son pesadas." },
      { it: "Che c'è, mamma mia!", es: "¡Madre mía, qué pasó!" },
    ],
    problems: [
      {
        title: "Artículo o no con parientes",
        question: "¿“Mis hermanas” con artículo o sin?",
        steps: [
          "Pariente + posesivo: sin artículo solo en singular.",
          "hermanas es plural → artículo obligatorio.",
          "le mie sorelle.",
        ],
        conclusion: "le mie sorelle (pero: mia sorella).",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Paradigma completo del posesivo",
        headers: ["Poseedor", "m. sing.", "f. sing.", "m. pl.", "f. pl."],
        rows: [
          ["1.ª sing.", "il mio", "la mia", "i miei", "le mie"],
          ["2.ª sing.", "il tuo", "la tua", "i tuoi", "le tue"],
          ["3.ª sing.", "il suo", "la sua", "i suoi", "le sue"],
          ["1.ª pl.", "il nostro", "la nostra", "i nostri", "le nostre"],
          ["2.ª pl.", "il vostro", "la vostra", "i vostri", "le vostre"],
          ["3.ª pl.", "il loro", "la loro", "i loro", "le loro"],
        ],
        note: "Como pronombre: il mio = el mío. “Whose is it? — È mio!”",
      },
    ],
  },
  {
    id: "g3-a1-ce-sono", level: "A1", title: "C'è y ci sono", titleIt: "C'è e ci sono",
    summary: "La estructura italiana para “hay”: singular c'è, plural ci sono.",
    explanation: [
      "Para decir “hay” el italiano usa ci (ahí) + essere: c'è un problema (hay un problema), ci sono due ristoranti (hay dos restaurantes). Interrogativo: c'è un bagno qui? Negativo: non c'è tempo / non ci sono posti. Nunca se usa avere impersonal (“ha un problema” sería “tiene un problema”): el equivalente del “hay” español es siempre c'è/ci sono.",
      "La partícula ci se combina con muchos verbos y aparece en frases hechas: ci vuole tempo (se necesita tiempo — verbo volerci), ci vado domani (voy allí mañana — con verbos de movimiento), ci penso io (yo me encargo). A1 basta con dominar c'è/ci sono y reconocer el patrón: el español “hay” tiene dueños italianos varios, pero todos empiezan con ci.",
    ],
    examples: [
      { it: "C'è un messaggio per te.", es: "Hay un mensaje para ti." },
      { it: "Ci sono molti turisti oggi.", es: "Hay muchos turistas hoy." },
      { it: "Non c'è pane in casa.", es: "No hay pan en casa." },
      { it: "Ci vuole pazienza con i bambini.", es: "Se necesita paciencia con los niños." },
    ],
    problems: [
      {
        title: "Singular o plural",
        question: "Completa: “___ tre camere libere.”",
        steps: [
          "Pregunto ¿cuántas? → plural (tre).",
          "Plural → ci sono.",
        ],
        conclusion: "Ci sono tre camere libere.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "g3-a1-bello-buono", level: "A1", title: "bello, buono y grande: adjetivos especiales", titleIt: "Aggettivi con forme speciali",
    summary: "bello/buono se comportan como artículos (bel, bei, buon…): la excepción que se ve a diario.",
    explanation: [
      "Bello y buono, cuando van ANTES del sustantivo, se apocapan como los artículos: bel ragazzo, bei ragazzi, begli amici, bella casa, belle case; buon amico, buoni amici, buon'amica (o buona amiga). Es el mismo reparto il/bei/bugli → bel/bei/begli. Si van después o con molto, se comportan normal: un film bello, molto buono.",
      "Grande tiene dos valores según posición: un grande scrittore (un gran escritor — sentido figurado de grandeza) vs un scrittore grande (un escritor grande/anciano — tamaño literal). Ante consonante puede apococarse: un gran scrittore. Otros adjetivos con doble lectura por posición: un pover'uomo (un pobre hombre, desgraciado) vs un uomo povero (un hombre pobre, sin dinero); certa gente (cierta gente) vs gente certa (gente segura).",
    ],
    examples: [
      { it: "Che bello! / Bei tempi!", es: "¡Qué lindo! / ¡Buenos tiempos!" },
      { it: "Un buon consiglio vale oro.", es: "Un buen consejo vale oro." },
      { it: "È un grande amico.", es: "Es un gran amigo (importante), no un amigo gigante." },
      { it: "Un pover'uomo, ha perso tutto.", es: "Un pobre hombre, lo perdió todo." },
    ],
    problems: [
      {
        title: "La forma de bello",
        question: "Completa: “___ ragazzi! (¡Qué chicos tan buenos!)”",
        steps: [
          "Sustantivo plural masculino starting con r: ragazzi.",
          "Ante consonante normal plural → bei.",
          "Exclamación: Bei ragazzi!",
        ],
        conclusion: "Bei ragazzi! (begli ante s+cons/z/vocal: begli amici).",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "bello y buono ante sustantivo",
        headers: ["Contexto", "bello", "buono"],
        rows: [
          ["m. sing. consonante", "bel (ragazzo)", "buon (vino)"],
          ["m. sing. s+cons/z/gn", "bello (studente)", "buono (studente)"],
          ["m. sing. vocal", "bell' (amico)", "buon (amico)"],
          ["f. sing.", "bella (casa)", "buona (pizza)"],
          ["m. pl. consonante", "bei (ragazzi)", "buoni (vini)"],
          ["m. pl. s+cons/vocal", "begli (amici)", "buoni (amici)"],
          ["f. pl.", "belle (case)", "buone (pizze)"],
        ],
      },
    ],
  },

  /* ══════════ A2 ══════════ */
  {
    id: "g3-a2-irregolari-venire", level: "A2", title: "Irregulares esenciales II", titleIt: "Verbi irregolari essenziali II",
    summary: "venire, bere, rimanere, tenere: cuatro irregulares con familia entera.",
    explanation: [
      "Venire (venir): vengo, vieni, viene, veniamo, venite, vengono. Es el auxiliar de la pasiva en registro escrito (viene costruito) y de las “venire + infinito” de cortesía (vieni a trovarmi). Bere (beber) hereda del latín bibere: bevo, bevi, beve, beviamo, bevete, bevono — el participio es bevuto.",
      "Rimanere (quedarse): rimango, rimani, rimane, rimangono — sirve como sinónimo elegante de stare y como verbo de estado con participio rimasto (sono rimasto a casa). Tenere (tener/sostener): tengo, tieni, tiene, teniamo, tenete, tengono — ojo, no es el “tener” de posesión (avere), sino sostener o mantener, y aparece en tenere a (importar), tenere d'occhio (vigilar), tenere conto (tomar en cuenta).",
    ],
    examples: [
      { it: "Vengo da te tra un'ora.", es: "Voy a tu casa en una hora." },
      { it: "Bevo un caffè amaro.", es: "Tomo un café amargo." },
      { it: "Sono rimasto senza parole.", es: "Me quedé sin palabras." },
      { it: "Tengo molto a questa amicizia.", es: "Esta amistad me importa mucho." },
    ],
    problems: [
      {
        title: "venire o andare",
        question: "¿“Vengo” o “vado” para decir que vas a la casa de alguien?",
        steps: [
          "El movimiento hacia donde está el oyente = venire.",
          "“Vengo da te” = voy hacia ti (tú estás allí).",
          "Si el oyente no está allí: vado da Marco.",
        ],
        conclusion: "El español “voy” se reparte: vengo (hacia ti) / vado (a otro sitio).",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Presente de los cuatro",
        headers: ["Persona", "venire", "bere", "rimanere", "tenere"],
        rows: [
          ["io", "vengo", "bevo", "rimango", "tengo"],
          ["tu", "vieni", "bevi", "rimani", "tieni"],
          ["lui/lei", "viene", "beve", "rimane", "tiene"],
          ["noi", "veniamo", "beviamo", "rimaniamo", "teniamo"],
          ["voi", "venite", "bevete", "rimanete", "tenete"],
          ["loro", "vengono", "bevono", "rimangono", "tengono"],
        ],
      },
    ],
  },
  {
    id: "g3-a2-modali", level: "A2", title: "Verbos modales", titleIt: "Verbi modali",
    summary: "dovere, potere, volere, sapere: los cuatro verbos que van con infinitivo sin preposición.",
    explanation: [
      "Los modales italianos se unen directamente al infinitivo del verbo principal, sin preposición (a diferencia del español “tengo QUE”, “puedo QUE no”): devo partire (tengo que partir), posso entrare? (¿puedo entrar?), voglio dormire (quiero dormir), so nuotare (sé nadar). Cuando el modal acompaña a un verbo de movimiento o reflexivo, el pronombre se sube al infinitivo: devo andarmene, ti voglio dire (o devo dirti).",
      "El truco está en sapere, que como modal significa “saber hacer” (so guidare = sé manejar), pero también “conocer información” (so la risposta). Dovere en negativa suaviza: non devi preoccuparti = no tienes que preocuparte; y para prohibir tajante se usa non puoi o è vietato. En pasado prossimo el modal puede tomar avere o essere según el verbo que acompaña: ho dovuto lavorare / sono dovuto partire.",
    ],
    examples: [
      { it: "Devi provare questa pasta!", es: "¡Tienes que probar esta pasta!" },
      { it: "Posso aiutarti?", es: "¿Puedo ayudarte?" },
      { it: "Voglio imparare l'italiano bene.", es: "Quiero aprender bien el italiano." },
      { it: "Non so cosa dire.", es: "No sé qué decir." },
    ],
    problems: [
      {
        title: "Modal + infinitivo",
        question: "Traduce: “No puedo quedarme esta noche.”",
        steps: [
          "Modal: potere → posso.",
          "Negación: non posso.",
          "Quedarse: fermarsi (reflexivo) → non posso fermarsi… con pronombre: non posso fermarmi.",
        ],
        conclusion: "Non posso fermarmi stasera.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Presente de los modales",
        headers: ["Persona", "dovere", "potere", "volere", "sapere"],
        rows: [
          ["io", "devo", "posso", "voglio", "so"],
          ["tu", "devi", "puoi", "vuoi", "sai"],
          ["lui/lei", "deve", "può", "vuole", "sa"],
          ["noi", "dobbiamo", "possiamo", "vogliamo", "sappiamo"],
          ["voi", "dovete", "potete", "volete", "sapete"],
          ["loro", "devono", "possono", "vogliono", "sanno"],
        ],
        note: "El condicional de cortesía (vorrei, potrei, dovrei) convierte cualquier pedido en oro.",
      },
    ],
  },
  {
    id: "g3-a2-comparativo", level: "A2", title: "Comparativo y superlativo", titleIt: "Comparativi e superlativi",
    summary: "più/meno … di (che); il più … di tutti; y los irregulares meglio/migliore, peggio/peggiore.",
    explanation: [
      "Comparativo: più + adjetivo + di/che (más… que): Roma è più grande di Firenze. Se usa DI ante nombres y pronombres, y CHE ante otro adjetivo, infinitivos o adverbios: è più bello che intelligente, meglio viaggiare che sognare. Igualdad: (così) … come: è alto come te. Menos: meno…di: meno caro del previsto.",
      "Superlativo relativo: il/la più + adjetivo + di: il più alto della classe. Superlativo absoluto: adjetivo + -issimo: bellissimo, carissimo (equivale a “muy/recontra”). Irregulares: bueno → migliore (mejor) / il migliore (el mejor), con buono más común en habla; cattivo → peggiore; bien/mal (adverbios) → meglio / peggio: sto meglio, va peggio. En español “mejor” sirve para adjetivo y adverbio; el italiano distingue migliore (cosa) de meglio (modo).",
    ],
    examples: [
      { it: "Milano è più cara di Torino.", es: "Milán es más cara que Turín." },
      { it: "È il ristorante più famoso della città.", es: "Es el restaurante más famoso de la ciudad." },
      { it: "Questa pizza è buonissima!", es: "¡Esta pizza es buenísima!" },
      { it: "Oggi mi sento meglio.", es: "Hoy me siento mejor." },
    ],
    problems: [
      {
        title: "di o che",
        question: "Completa: “Studiare è più utile ___ guardare la TV.”",
        steps: [
          "Comparo dos infinitivos: studiare vs guardare.",
          "Ante segundo infinitivo → che.",
        ],
        conclusion: "Studiare è più utile che guardare la TV.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Los cuatro irregulares",
        headers: ["Base", "Comparativo", "Superlativo"],
        rows: [
          ["buono (bueno)", "migliore", "il migliore / ottimo"],
          ["cattivo (malo)", "peggiore", "il peggiore / pessimo"],
          ["bene (bien)", "meglio", "—"],
          ["male (mal)", "peggio", "—"],
        ],
        note: "Assoluto culto: ottimo, pessimo, massimo, minimo (registro formal).",
      },
    ],
  },
  {
    id: "g3-a2-pronomi-tonici", level: "A2", title: "Pronombres tónicos", titleIt: "Pronomi tonici",
    summary: "me, te, lui, lei, noi, voi, loro tras preposición: a me, con te, senza di lui.",
    explanation: [
      "Los tónicos son los que van solos o tras preposición: chi è? — me! (¿quién es? — ¡yo!), viene con me (viene conmigo), senza di te no parto. Formas: me, te, lui, lei, noi, voi, loro (para personas); per me / per noi idéntico al español “para mí/nosotros”. Con las preposiciones se comportan como en español, salvo loro que exige di: con loro, di loro.",
      "Las formas átonas (mi, ti, gli, le, ci, vi) son las de complemento directo/indirecto (mi vedi, ti parlo). El contraste clave: con (= conmigo → con me, átono imposible) vs los verbos que ya llevan partícula (mi piace usa mi átono porque piace rige dativo). En comparaciones: è più alto di me (más alto que yo) — nunca “di mi”. Y para enfatizar el sujeto coloquial: me lo mangio io! (¡me lo como yo!).",
    ],
    examples: [
      { it: "Vieni anche con me?", es: "¿Vienes también conmigo?" },
      { it: "Questo regalo è per te.", es: "Este regalo es para ti." },
      { it: "È più brava di lui.", es: "Es más capaz que él." },
      { it: "Senza di voi non ce la faccio.", es: "Sin ustedes no puedo." },
    ],
    problems: [
      {
        title: "Tónico tras preposición",
        question: "Completa: “Ho comprato un caffè per ___.” (para ella)",
        steps: [
          "Tras preposición → tónico.",
          "Ella → lei.",
          "Sin di (solo loro la exige).",
        ],
        conclusion: "Ho comprato un caffè per lei.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Átonos vs tónicos",
        headers: ["Persona", "Átono (objeto)", "Tónico (tras prep.)"],
        rows: [
          ["io", "mi", "me"],
          ["tu", "ti", "te"],
          ["lui", "lo / gli", "lui"],
          ["lei", "la / le", "lei"],
          ["noi", "ci", "noi"],
          ["voi", "vi", "voi"],
          ["loro", "li / le / loro", "loro (con di)"],
        ],
      },
    ],
  },
  {
    id: "g3-a2-indefiniti", level: "A2", title: "Indefinidos", titleIt: "Indefiniti",
    summary: "qualcuno, qualcosa, niente, nessuno, ogni, tutto: el sistema de “alguien/nada”.",
    explanation: [
      "Alguien/algo: qualcuno, qualcosa (o qualche cosa). Qualche + sustantivo SINGULAR significa “algunos” en plural: qualche volta (algunas veces), qualche giorno (algunos días) — ¡trampa clásica! Ogni (cada) va siempre en singular: ogni giorno. Todo: tutto/tutta/tutti/tutte con concordancia total: tutti i giorni, tutta la verità.",
      "Nada/nadie tienen doble forma: niente/nessuno (pronombres) y non…niente / non…nessuno con doble negación obligatoria, igual que el español: non ho visto niente (no vi nada), non c'è nessuno (no hay nadie). Como respuesta tajante basta la palabra sola: Chi chiama? — Nessuno. Che mangi? — Niente. Ninguno: nessun + sustantivo (nessun problema, nessuna scusa).",
    ],
    examples: [
      { it: "C'è qualcuno alla porta.", es: "Hay alguien en la puerta." },
      { it: "Qualche volta esco con gli amici.", es: "Algunas veces salgo con amigos." },
      { it: "Non ho detto niente!", es: "¡No dije nada!" },
      { it: "Ogni tanto mi manca il Perú.", es: "De vez en cuando extraño Perú." },
    ],
    problems: [
      {
        title: "qualche + singular",
        question: "Completa: “Ho qualche ___ libero.” (días)",
        steps: [
          "qualche siempre + singular.",
          "giorno (no giorni).",
        ],
        conclusion: "Ho qualche giorno libero (algunos días libres).",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "g3-a2-trapassato", level: "A2", title: "Trapassato prossimo", titleIt: "Trapassato prossimo",
    summary: "El “pluscuamperfecto” italiano: avevo fatto / ero andato (había hecho/ido).",
    explanation: [
      "El trapassato prossimo = imperfetto del auxiliar + participio pasado: avevo mangiato (había comido), ero già uscito (ya había salido). La elección del auxiliar sigue las mismas reglas del passato prossimo: avere con transitivos y la mayoría, essere con verbos de movimiento, reflexivos y permanenza (andare, venire, nascere, rimanere, diventare).",
      "Se usa igual que el pluscuamperfecto español: la acción anterior a otra pasada. Quando sono arrivato, il treno era già partito (cuando llegué, el tren ya había partido). Es imprescindible en narración y en el periodo ipotetico de irrealidad del pasado (B2). Para el hispanohablante es casi transparente: “había + participio” — solo hay que recordar el auxiliar correcto y que el participio con essere concuerda: era andata (ella), eravamo tornati.",
    ],
    examples: [
      { it: "Avevo già mangiato quando sei arrivato.", es: "Ya había comido cuando llegaste." },
      { it: "Era uscita senza ombrello.", es: "Había salido sin paraguas." },
      { it: "Non avevo mai visto tanto traffico.", es: "Nunca había visto tanto tráfico." },
      { it: "Eravamo già tornati dalle vacanze.", es: "Ya habíamos vuelto de vacaciones." },
    ],
    problems: [
      {
        title: "Elegir auxiliar",
        question: "Completa: “Quando ho chiamato, Maria ___ già ___ (partire).”",
        steps: [
          "partire es verbo de movimiento → essere.",
          "imperfetto di essere 3.ª sing. → era.",
          "participio partito concuerda con Maria.",
        ],
        conclusion: "Maria era già partita.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "g3-a2-progressivo", level: "A2", title: "El progresivo: stare + gerundio", titleIt: "Stare + gerundio",
    summary: "sto mangiando = estoy comiendo: el “estar + -ando” italiano.",
    explanation: [
      "El gerundio italiano se forma con la raíz del presente: -are → -ando (mangiando), -ere/-ire → -endo (credendo, dormendo). Los irregulares conservan la vocal de la raíz: fare → facendo, dire → dicendo, bere → bevendo. Para el progresivo se usa stare conjugado + gerundio: sto studiando (estoy estudiando), cosa stai facendo? (¿qué estás haciendo?), stavamo dormendo (estábamos durmiendo).",
      "A diferencia del español, el italiano NO usa el progresivo con verbos de estado ni con sentido habitual: “sé la verdad” es so la verità, nunca “sto sapendo”. El progresivo exige acción en curso, visible: sta piovendo (está lloviendo), stai migliorando (estás mejorando). Con la partícula ci y los pronombres, estos se unen al gerundio: sto scrivendoglielo (se lo estoy escribiendo) — más coloquial: glielo sto scrivendo.",
    ],
    examples: [
      { it: "Cosa stai facendo? — Sto cucinando.", es: "¿Qué estás haciendo? — Estoy cocinando." },
      { it: "Sta piovendo a dirotto.", es: "Está lloviendo a cántaros." },
      { it: "Stavamo ridendo come pazzi.", es: "Estábamos riéndonos como locos." },
      { it: "Il Papa? No, sto leggendo il giornale.", es: "¿El Papa? No, estoy leyendo el diario." },
    ],
    problems: [
      {
        title: "Formar el gerundio",
        question: "¿Cómo se dice “estoy durmiendo”?",
        steps: [
          "stare 1.ª sing. → sto.",
          "dormire es -ire → dormendo.",
        ],
        conclusion: "Sto dormendo (¡y no “sto dormindo”!).",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "g3-a2-posizione-aggettivo", level: "A2", title: "Posición del adjetivo", titleIt: "La posizione dell'aggettivo",
    summary: "Antes o después del sustantivo puede cambiar el sentido: un grande uomo ≠ un uomo grande.",
    explanation: [
      "El adjetivo italiano normalmente va DESPUÉS del sustantivo (al revés que en español): una macchina rossa, un film interessante. Colocarlo antes es posible y frecuente con adjetivos cortos y valorativos (bello, brutto, buono, grande, nuovo, vecchio): una bella giornata. La posición cambia el matiz en pares famosos: un grande uomo (un gran hombre) vs un uomo grande (un hombre alto/crecido); un vecchio amico (un viejo amigo de siempre) vs un amico vecchio (un amigo anciano).",
      "Otros pares útiles: uno strano rumore (un ruido extraño) vs un rumore strano (poco usado, más literal); un pover'uomo (un hombre desdichado) vs un uomo povero (hombre sin dinero); certa gente (cierta gente) vs gente certa (gente confiable). Regla práctica para hispanohablantes: si en español iría naturalmente antes (“gran”, “viejo”, “buen”), ponlo antes en italiano; en caso de duda, después — siempre es correcto.",
    ],
    examples: [
      { it: "una città antica", es: "una ciudad antigua (después: neutro)" },
      { it: "un antico amico", es: "un antiguo amigo (antes: afectivo)" },
      { it: "un film bello / un bel film", es: "ambos correctos: neutro vs entusiasta" },
      { it: "degli studenti bravi", es: "unos estudiantes capaces (después, valorativo)" },
    ],
    problems: [
      {
        title: "Interpretar la posición",
        question: "¿Qué significa “la mia vecchia scuola”?",
        steps: [
          "vecchia va antes de escuela.",
          "Posición anterior → valor afectivo/temporal.",
          "Es “mi escuela de antes”, no un edificio viejo.",
        ],
        conclusion: "La mia vecchia scuola = mi antigua escuela (donde yo estudié).",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "g3-a2-remoto-intro", level: "A2", title: "Passato remoto (reconocimiento)", titleIt: "Passato remoto",
    summary: "El “pretérito indefinido” narrativo: hoy solo para leer literatura del sur.",
    explanation: [
      "El passato remoto cuenta hechos concluidos en un pasado lejano o narrativo: Dante nacque nel 1265 (Dante nació en 1265). Sus formas regulares: -are → parlai, parlasti, parlò, parlammo, parlaste, parlarono; -ere → credetti/credei, credesti, credé/credette, credemmo, credeste, credettero/crederono. Muchos verbos comunes son irregulares completos: essere (fui, fosti, fu…), avere (ebbi, ebbe…), fare (feci), dire (dissi), venire (venni), vedere (vidi), prendere (presi), morire (morì).",
      "El español usa el indefinido a diario (comí, fui); el italiano moderno lo reserva para la escritura narrativa y para el habla del centro-sur (nacquimo a Napoli). En el norte casi todos usan el passato prossimo incluso para lo lejano. Como estudiante A2 solo necesitas RECONOCERLO para leer literatura (Moravia, Ferrante, Camilleri) y entender el sur; para hablar, tu passato prossimo siempre será aceptado.",
    ],
    examples: [
      { it: "Nel 1969 l'uomo andò sulla Luna.", es: "En 1969 el hombre fue a la Luna." },
      { it: "Pinocchio nacque sotto una penna.", es: "Pinocho nació bajo una pluma (incipit)." },
      { it: "Fu allora che capii tutto.", es: "Fue entonces cuando entendí todo." },
      { it: "Disse che sarebbe tornato.", es: "Dijo que volvería." },
    ],
    problems: [
      {
        title: "Reconocer el remoto en un texto",
        question: "¿Qué tiempo es “vidi” y de qué verbo?",
        steps: [
          "Terminación -i con raíz v-.",
          "Es passato remoto de vedere: vi-di.",
          "Equivale a “vi” español (yo vi).",
        ],
        conclusion: "vidi = passato remoto di vedere = vidi/yo vi.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Remotos irregulares imprescindibles",
        headers: ["Verbo", "io", "lui/lei", "loro"],
        rows: [
          ["essere", "fui", "fu", "furono"],
          ["avere", "ebbi", "ebbe", "ebbero"],
          ["fare", "feci", "fece", "fecero"],
          ["dire", "dissi", "disse", "dissero"],
          ["andare", "andai", "andò", "andarono"],
          ["venire", "venni", "venne", "vennero"],
          ["vedere", "vidi", "vide", "videro"],
          ["prendere", "presi", "prese", "presero"],
        ],
      },
    ],
  },
];
