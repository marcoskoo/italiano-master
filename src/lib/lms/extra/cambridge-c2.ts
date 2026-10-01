import type { CbUnit } from "../cambridge";

/* ═══ C2 · Padroneggiare la lingua — 8 unità ══════════════════════════ */

export const CB_C2: CbUnit[] = [
  {
    id: "cu-c2-01", n: 1, level: "C2",
    title: "Estilo y registro", titleIt: "Stile e registro",
    img: "/images/conversazione/cs-12.jpg",
    goal: "Cambiar de registro con plena conciencia estilística",
    goals: ["Reconocer y producir registros extremos", "Analizar elecciones de estilo", "Imitar voces y matices"],
    scenario: "Taller de escritura con un editor milanés: te da la misma escena para escribirla en tres registros (burocrático, poético, neostandard giovanile). El C2 no sabe más palabras: sabe exactamente cuáles usar y cuándo.",
    dialogue: [
      { speaker: "Editor", it: "Stessa scena, tre registri: un funzionario, un poeta, un ventenne. Vada.", es: "Misma escena, tres registros: un funcionario, un poeta, un veinteañero. Adelante." },
      { speaker: "Tu", it: "Funzionario: «Si rende noto che l'interessato risulta essere deceduto».", es: "Funcionario: «Se hace saber que el interesado resulta estar fallecido»." },
      { speaker: "Editor", it: "Gelido e perfetto. Il poeta?", es: "Gélido y perfecto. ¿El poeta?" },
      { speaker: "Tu", it: "«Se n'è andato come se ne va il pane, senza accorgersene».", es: "«Se fue como se va el pan, sin darse cuenta»." },
      { speaker: "Editor", it: "Ah. E il ventenne?", es: "Ah. ¿Y el veinteañero?" },
      { speaker: "Tu", it: "«Non c'è più, bello, e non è na cosa normale».", es: "«Ya no está, tío, y no es una cosa normal»." },
      { speaker: "Editor", it: "Tre lingue in una. Questo è il C2: non la quantità, la precisione.", es: "Tres lenguas en una. Esto es el C2: no la cantidad, la precisión." },
      { speaker: "Tu", it: "E la consapevolezza: ogni scelta esclude altre cento, e lo so mentre scelgo.", es: "Y la consciencia: cada elección excluye otras cien, y lo sé mientras elijo." },
    ],
    comprehension: [
      { q: "¿Cómo dice el funcionario que alguien murió?", options: ["«È morto»", "«Risulta essere deceduto»", "«Non c'è più»"], answer: 1 },
      { q: "¿Qué imagen usa el poeta?", options: ["El pan que se va", "El mar", "La noche"], answer: 0 },
      { q: "¿Qué es el C2 según el editor?", options: ["Muchas palabras", "Precisión, no cantidad", "Hablar rápido"], answer: 1 },
    ],
    chunks: [
      { it: "Si rende noto che…", es: "Se hace saber que…" },
      { it: "risulta essere deceduto", es: "resulta estar fallecido" },
      { it: "se ne va il pane", es: "se va el pan" },
      { it: "non è na cosa normale", es: "no es una cosa normal (neoestándar)" },
      { it: "ogni scelta esclude altre cento", es: "cada elección excluye otras cien" },
      { it: "lo so mentre scelgo", es: "lo sé mientras elijo" },
    ],
    grammar: {
      focus: "Los registros: del burocratese al neostandard",
      inductive: [
        { it: "Registro alto: L'interessato è venuto a mancare.", es: "Registro alto: El interesado ha fallecido (eufemismo)." },
        { it: "Neostandard: Mi è morto il nonno, bello mio.", es: "Neoestándar: Se me murió el abuelo, tío." },
        { it: "Poetico: Se n'è andato piano, come la neve.", es: "Poético: Se fue despacio, como la nieve." },
      ],
      rule: [
        "El C2 domina el espectro: burocratese (si rende noto, decedere), aulico (venire a mancare, cotanto), neostandard (bello mio, na cosa, dimmi tutto), y dialettale calado (ya no mío, ¡ma che!).",
        "La clave no es solo elegir: es justificar. El análisis estilístico nomina las herramientas: eufemismo, metáfora, apócope (na < una), iperbole, litote (non è male = es excelente).",
      ],
      topicId: "g-c2-stile",
      gaps: [
        { q: "Eufemismo por «è morto»:", options: ["è crepato", "è venuto a mancare", "è schiattato"], answer: 1 },
        { q: "«Na cosa» es apócope de…", options: ["una cosa", "quella cosa", "nano cosa"], answer: 0 },
        { q: "«Non è male» como litote significa…", options: ["es malo", "es excelente", "es regular"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "La voz cambia con el registro",
      tip: "El funcionario habla plano y nasal; el poeta alarga las vocales finales; el veinteañero trunca («non è na cosa normale» con efinal comida). El C2 también pronuncia registros.",
      pairs: [
        { a: "deceduto", b: "crepato", note: "eufemismo vs crudo" },
        { a: "se n'è andato", b: "se ne va", note: "pasado y presente poéticos" },
        { a: "bello mio", b: "caro il mio", note: "neostandard afectivo" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Di la misma frase en tres registros: noticia de muerte, saludo afectuoso, reclamo." },
        { kind: "semi", task: "Escribe y lee una misma escena (60 palabras) en registro alto y neostandard." },
        { kind: "comunicativo", task: "Taller con el editor: defiende tus tres versiones y acepta (o rechaza) los cortes." },
        { kind: "autentico", task: "Toma un párrafo de un diario italiano y reescríbelo en dos registros opuestos." },
      ],
    },
    reading: {
      lines: [
        { it: "Lo stile è l'uomo:Buffon dixit. In italiano, lo stile è anche la classe sociale, l'età, la città.", es: "El estilo es el hombre, decía Buffon. En italiano, el estilo es también la clase social, la edad, la ciudad." },
        { it: "Il C2 non impara parole: impara distanze. Sa quanto spazio mettere tra sé e ciò che dice.", es: "El C2 no aprende palabras: aprende distancias. Sabe cuánto espacio poner entre sí y lo que dice." },
      ],
      question: "¿Qué aprende el C2 según el fragmento, además de palabras?",
    },
    writing: {
      task: "Escribe la misma escena (80 palabras × 3) en burocrático, poético y neostandard, con nota final que nombre las herramientas usadas.",
      minWords: 200,
      tips: ["Eufemismo/hipérbole/apócope en las versiones", "La nota usa metalenguaje crítico"],
      model: [
        "Burocratico: «Si comunica che l'utenza risulterà sospesa per morosità accertata».",
        "Poetico: «La luce se n'è andata come se ne vanno i gatti, senza salutare».",
        "Neostandard: «Bello, mi hanno staccato la luce, nun te dico».",
      ],
    },
    culture: {
      title: "El país de los cien italianos",
      text: "Italia es una federación de registros: el notarile, il parlato televisivo, il gergo giovanile, i dialetti pieni. La radio pública (RAI) marca el estándar; i social lo desbordan. El hablante C2 navega todos — y elige como un director de orquesta elige el instrumento: por lo que dice y por lo que calla.",
    },
    finalTask: {
      title: "Tre voci, un'autrice",
      brief: "Presenta tu trío de versiones en voz alta, cambiando de voz como de máscara, y explica tus elecciones con metalenguaje: la precisión del análisis iguala la de la escritura.",
      checklist: ["Las tres versiones son irreconocibles entre sí", "La nota nombra eufemismo/apócope/hipérbole", "La lectura cambia de voz con el registro"],
    },
    review: [
      { q: "«Venire a mancare» es…", options: ["eufemismo de morir", "neologismo", "gercio"], answer: 0 },
      { q: "La litote «non è male» expresa…", options: ["desprecio", "excelencia contenida", "ignorancia"], answer: 1 },
      { q: "El burocratese usa…", options: ["subjecto agente", "passivo y nominalización", "gerundio coloquial"], answer: 1 },
      { q: "El C2 elige con…", options: ["más palabras", "precisión y consciencia", "velocidad"], answer: 1 },
    ],
    cando: [
      "Produzco y analizo registros extremos",
      "Justifico elecciones de estilo con metalenguaje",
      "Imito voces con precisión",
    ],
  },

  {
    id: "cu-c2-02", n: 2, level: "C2",
    title: "La lengua literaria", titleIt: "La lingua letteraria",
    img: "/images/letture/it-rinascimento-09.jpg",
    goal: "Leer y comentar los clásicos con herramientas de filólogo",
    goals: ["Leer un pasaje clásico con ayuda mínima", "Analizar sintaxis y léxico de época", "Relacionar clásico y presente"],
    scenario: "Seminario de filología en la biblioteca de San Giovanni in Monte, Bolonia: Boccaccio y Ginzburg sobre la misma mesa. El comentario filológico pide ojo de cirujano y corazón de lector.",
    dialogue: [
      { speaker: "Filologo", it: "Legga ad alta voce l'incipit, e ci dica cosa nota.", es: "Lea en voz alta el incipit y díganos qué nota." },
      { speaker: "Tu", it: "«Nel principio delnovissimo tempo…»: la sintassi è trecentesca, ma il ritmo è già nostro.", es: "«En el principio del tiempo novísimo…»: la sintaxis es trecentista, pero el ritmo ya es nuestro." },
      { speaker: "Filologo", it: "E il lessico? Qualche forma la colpisce?", es: "¿Y el léxico? ¿Alguna forma le llama la atención?" },
      { speaker: "Tu", it: "«Novissimo» per «nuovo»: un superlativo che oggi vivrebbe solo in «novissimo mondo».", es: "«Novísimo» por «nuevo»: un superlativo que hoy viviría solo en «nuevo mundo»." },
      { speaker: "Filologo", it: "Bravo. E Ginzburg? Cosa avrebbe fatto di questo incipit?", es: "Bravo. ¿Y Ginzburg? ¿Qué habría hecho con este incipit?" },
      { speaker: "Tu", it: "Lo avrebbe spelato: «In principio era il tempo nuovo, e noi dentro, spettatori».", es: "Lo habría despellejado: «En el principio era el tiempo nuevo, y nosotros dentro, espectadores»." },
      { speaker: "Filologo", it: "Perfetto: la letteratura è questa conversazione tra morti e vivi.", es: "Perfecto: la literatura es esta conversación entre muertos y vivos." },
      { speaker: "Tu", it: "E il commento filologico è la traduzione dell'ammirazione.", es: "Y el comentario filológico es la traducción de la admiración." },
    ],
    comprehension: [
      { q: "¿Qué dice el lector del ritmo del pasaje?", options: ["Es ajeno al italiano moderno", "La sintaxis es trecentista pero el ritmo ya es nuestro", "Es intraducible"], answer: 1 },
      { q: "¿Qué forma léxica comenta?", options: ["«Novissimo» como superlativo de época", "Un gerundio", "Un artículo"], answer: 0 },
      { q: "¿Qué habría hecho Ginzburg según él?", options: ["Lo habría despellejado (sintetizado con ironía)", "Lo habría imitado", "Nada"], answer: 0 },
    ],
    chunks: [
      { it: "la sintassi è trecentesca", es: "la sintaxis es trecentista" },
      { it: "il ritmo è già nostro", es: "el ritmo ya es nuestro" },
      { it: "un superlativo che oggi vivrebbe solo in…", es: "un superlativo que hoy viviría solo en…" },
      { it: "Lo avrebbe spelato", es: "Lo habría despellejado" },
      { it: "una conversazione tra morti e vivi", es: "una conversación entre muertos y vivos" },
      { it: "la traduzione dell'ammirazione", es: "la traducción de la admiración" },
    ],
    grammar: {
      focus: "Sintaxis de época y su eco moderno",
      inductive: [
        { it: "Nel principio del tempo… (anticuo)", es: "En el principio del tiempo… (antiguo)" },
        { it: "Oggidì diremmo: all'inizio dei tempi.", es: "Hoy diríamos: al principio de los tiempos." },
        { it: "Il superlativo sopravvive come fossile lessicale.", es: "El superlativo sobrevive como fósil léxico." },
      ],
      rule: [
        "El comentario filológico C2 distingue: sintassi (orden, períodos largos), lessico (arcaiismi, fossili come «novissimo»), morfología (formas verbales antiguas: «avria» per «avrebbe») y ritmo.",
        "El condizionale compuesto de la hipótesis crítica: «Ginzburg lo avrebbe spelato», «Dante non avrebbe sopportato…». Es el tiempo de la crítica literaria: rigor + imaginación.",
      ],
      topicId: "g3-c2-letterario",
      gaps: [
        { q: "«Avria» è forma antica di…", options: ["aveva", "avrebbe", "abbia"], answer: 1 },
        { q: "Ginzburg lo ___ (spelare, cond. composto).", options: ["ha spelato", "avrebbe spelato", "spelerebbe"], answer: 1 },
        { q: "Oggi diremmo «all'inizio», non «___».", options: ["nel principio", "nel primissimo", "in principio solo"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "Leer el trecento",
      tip: "El italiano antiguo se lee con vocales aún más claras y dobles marcadas: «novis-SI-mo». El ritmo de Boccaccio es de narrador de plaza: prueba a leerlo como si contaras un chisme — es exactamente lo que era.",
      pairs: [
        { a: "novissimo", b: "nuovissimo", note: "fósiles y variantes" },
        { a: "avria", b: "avrebbe", note: "arcaísmo vs moderno" },
        { a: "incipit", b: "explicit", note: "jerga filológica" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Lee el incipit clásico con tempo de narrador de plaza, luego coméntalo en moderno." },
        { kind: "semi", task: "Comenta un pasaje clásico (Dante, Boccaccio, o un clásico de tu lengua) con las cuatro herramientas: sintassi, lessico, morfologia, ritmo." },
        { kind: "comunicativo", task: "Seminario filológico: lectura, comentario, y la pregunta «¿qué habría hecho X con esto?»." },
        { kind: "autentico", task: "Lee un canto de Dante o un cuento de Ginzburg y graba tu comentario filológico de 3 minutos." },
      ],
    },
    reading: {
      letturaId: "it-rinascimento-09",
      question: "¿Qué papel jugó el Renacimiento en la fijación del italiano según la lectura?",
    },
    writing: {
      task: "Escribe tu nota filológica (250 palabras): pasaje citado, análisis de sintassi/lessico/morfologia/ritmo, eco moderno y una hipótesis crítica con condizionale composto.",
      minWords: 230,
      tips: ["Cita breve y exacta", "La hipótesis crítica usa cond. compuesto (lo avrebbe…)", "Cierra con una imagen propia"],
      model: [
        "«Nel principio del novissimo tempo»: la sintassi mantiene il latineggiare trecentesco, ma il ritmo è già del romanzo.",
        "Il superlativo «novissimo», fossile lessicale, sopravvive oggi solo in formule religiose.",
        "Ginzburg lo avrebbe ridotto all'osso: «in principio, tempi nuovi». La letteratura è questa conversazione tra morti e vivi.",
      ],
    },
    culture: {
      title: "De Boccaccio a Ginzburg",
      text: "El italiano literario es una cadena de eslabones vivos: Boccaccio fijó la prosa, Dante la lengua alta, Manzoni el novel moderno, Ginzburg y Levi la sequedad del siglo XX. Leerlos juntos no es arqueología: es escuchar la misma voz con acentos distintos. La filología italiana es nacional-patriótica y a la vez cosmopolita: unpais que se piensa a través de sus muertos ilustres.",
    },
    finalTask: {
      title: "Il mio seminario filologico",
      brief: "Imparte tu seminario: lectura en voz alta del clásico, comentario con las cuatro herramientas y diálogo imaginario con un moderno (¿qué habría hecho Ginzburg?).",
      checklist: ["La lectura honora el ritmo de época", "El análisis nombra las cuatro herramientas", "La hipótesis crítica usa condizionale composto"],
    },
    review: [
      { q: "«Avria» equivale a…", options: ["aveva", "avrebbe", "avrà"], answer: 1 },
      { q: "Un «fossile lessicale» es…", options: ["un error de imprenta", "una forma que sobrevive en fórmulas fijas", "un extranjerismo"], answer: 1 },
      { q: "Dante habría escrito… (crítica) se dice…", options: ["Dante scriveva", "Dante avrebbe scritto", "Dante avrà scritto"], answer: 1 },
      { q: "El comentario filológico analiza…", options: ["solo el tema", "sintassi, lessico, morfologia, ritmo", "solo la biografía"], answer: 1 },
    ],
    cando: [
      "Leo clásicos con ayuda mínima",
      "Analizo sintaxis y léxico de época",
      "Formulo hipótesis críticas con rigor",
    ],
  },

  {
    id: "cu-c2-03", n: 3, level: "C2",
    title: "Ironía y humor", titleIt: "Ironia e umorismo",
    img: "/images/letture/cult-cine-24.jpg",
    goal: "Comprender y producir humor e ironía en italiano",
    goals: ["Reconocer la ironía verbal y situacional", "Usar understatement y sarcasmo con medida", "Analizar la comedia all'italiana"],
    scenario: "Ciclo de cine comedy: «La grande bellezza» y la commedia all'italiana. Después, mesa de debate sobre humor: por qué los italianos ríen de lo que da miedo. El humor es el examen final de toda lengua.",
    dialogue: [
      { speaker: "Critico", it: "Perché gli italiani ridono di tutto, anche delle disgrazie?", es: "¿Por qué los italianos se ríen de todo, incluso de las desgracias?" },
      { speaker: "Tu", it: "Perché la risata è l'ultimo gradino della scala: chi ride, ha già digerito la paura.", es: "Porque la risa es el último peldaño de la escalera: quien ríe, ya ha digerido el miedo." },
      { speaker: "Critico", it: "Mi faccia un esempio dal cinema.", es: "Deme un ejemplo del cine." },
      { speaker: "Tu", it: "«Il sorpasso»: una commedia che finisce male, e ridiamo fino all'ultima scena. Ecco il punto.", es: "«Il sorpasso»: una comedia que acaba mal, y reímos hasta la última escena. Ese es el punto." },
      { speaker: "Critico", it: "E l'ironia quotidiana? Come funziona al lavoro?", es: "¿Y la ironía cotidiana? ¿Cómo funciona en el trabajo?" },
      { speaker: "Tu", it: "Con l'understatement: «Non è che sia un problema…» significa che è un problema enorme.", es: "Con el understatement: «No es que sea un problema…» significa que es un problema enorme." },
      { speaker: "Critico", it: "E il sarcasmo? Non morde?", es: "¿Y el sarcasmo? ¿No muerde?" },
      { speaker: "Tu", it: "Morde, ma in Italia si morde tra amici: il sarcasmo è la prova che ti considero dei miei.", es: "Muerde, pero en Italia se muerde entre amigos: el sarcasmo es la prueba de que te considero de los míos." },
    ],
    comprehension: [
      { q: "¿Por qué ríen los italianos de las desgracias según el ponente?", options: ["Por crueldad", "Porque la risa es el último peldaño: ya digirieron el miedo", "Por educación"], answer: 1 },
      { q: "¿Qué ejemplifica con «Il sorpasso»?", options: ["Una comedia que acaba mal y aún así reímos", "Una tragedia clásica", "Un documental"], answer: 0 },
      { q: "¿Qué significa «Non è che sia un problema…»?", options: ["No hay problema", "Hay un problema enorme (understatement)", "Es una pregunta"], answer: 1 },
    ],
    chunks: [
      { it: "chi ride, ha già digerito la paura", es: "quien ríe, ya ha digerido el miedo" },
      { it: "ridiamo fino all'ultima scena", es: "reímos hasta la última escena" },
      { it: "Non è che sia un problema…", es: "No es que sea un problema… (ironía)" },
      { it: "il sarcasmo morde, ma tra amici", es: "el sarcasmo muerde, pero entre amigos" },
      { it: "ti considero dei miei", es: "te considero de los míos" },
      { it: "Ecco il punto.", es: "Ese es el punto." },
    ],
    grammar: {
      focus: "Las figuras del humor: litote, iperbole, ossimoro",
      inductive: [
        { it: "Non è male. (= eccellente, litote)", es: "No está mal. (= excelente, litote)" },
        { it: "Ci ho messo un secolo. (iperbole)", es: "Tardé un siglo. (hipérbole)" },
        { it: "Una tragedia esilarante. (ossimoro)", es: "Una tragedia hilarante. (oxímoron)" },
      ],
      rule: [
        "El humor italiano se construye con: litote (non è che sia… = lo es), iperbole (mica male, un macello), understatement (un problema di lieve entità = catástrofe), ossimoro (tragedia esilarante).",
        "La entonación manda: la ironía se marca con un micro-descenso final y media sonrisa. Sin entonación, la litote es un error; con ella, es una obra maestra. Y matices: mica (niega con sorpresa), altroché (¡y cómo!).",
      ],
      topicId: "g-b2-discorso",
      gaps: [
        { q: "«Non è male» può significare…", options: ["es pésimo", "es excelente (litote)", "no hay opinión"], answer: 1 },
        { q: "«Altroché!» es…", options: ["negación", "refuerzo total (¡y cómo!)", "duda"], answer: 1 },
        { q: "«Mica male» contiene «mica» que…", options: ["niega con sorpresa", "intensifica negativamente solo", "es arcaísmo muerto"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "La media sonrisa audible",
      tip: "La ironía italiana se oye: el final de la frase baja mientras la voz sonríe. «Non è che sia un problema…» se dice lento, con pausa sospechosa. Practica con «Ah, ottimo. Ottimo davvero.» en dos tonos: sincero e irónico.",
      pairs: [
        { a: "Ottimo! (sincero)", b: "Ottimo… (irónico)", note: "la misma palabra, dos mundos" },
        { a: "non è che sia", b: "mica male", note: "litote y sorpresa" },
        { a: "altroché!", b: "magari!", note: "refuerzo y deseo irónico" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Di «Non è che sia un problema» con entonación irónica y luego sincera: la misma frase, dos mensajes." },
        { kind: "semi", task: "Cuenta una desgracia cotidiana (un retraso, un caos) con humor italiano: iperbole + litote + cierre aforístico." },
        { kind: "comunicativo", task: "Mesa de debate sobre la commedia all'italiana: análisis, ejemplos, y una broma bien colada." },
        { kind: "autentico", task: "Ve una comedia italiana (Il sorpasso, Perfetti sconosciuti) y detecta 5 figuras del humor." },
      ],
    },
    reading: {
      letturaId: "cult-cine-24",
      question: "¿Por qué se ríe la commedia all'italiana según la lectura — de qué se ríe?",
    },
    writing: {
      task: "Escribe un artículo humorístico (250 palabras) sobre un vicio nacional (italiano o tuyo): iperbole, litote, un ossimoro y un final que remate sin explicar el chiste.",
      minWords: 230,
      tips: ["No expliques la ironía: confía en el lector", "Una figura por párrafo, no más"],
      model: [
        "Il ritardo italiano non è un difetto: è un'istituzione. Si nasce in ritardo, si cresce in ritardo, si arriva in ritardo al proprio funerale — con scuse accettate.",
        "Non è che siamo disorganizzati: siamo flessibili in modo estremo.",
        "E il treno? Il treno arriva, prima o poi: chiamarlo ritardo è un insulto alla nostra pazienza. È attesa attiva.",
      ],
    },
    culture: {
      title: "Rír para no llorar",
      text: "La commedia all'italiana (1958-1980) rió del miracolo economico, del famille, del boom y de la miseria que se escondía debajo: Totò, Gassman, Sordi, Tognazzi. «Il sorpasso» (1962) es su cima amarga. Hoy «Perfetti sconosciuti» (2016) demuestra que la fórmula sigue viva: italianos normales, una cena, y la verdad que mata.",
    },
    finalTask: {
      title: "La mia conferenza comica",
      brief: "Presenta tu mini-conferencia humorística: tesis sobre un vicio nacional, ejemplos con iperbole y litote, y un remate aforístico. La sala debe reír — y luego pensar.",
      checklist: ["Las figuras del humor son reconocibles", "La entonación marca la ironía", "El remate no explica el chiste"],
    },
    review: [
      { q: "La litote «non è male» expresa…", options: ["excelencia contenida", "mediocridad exacta", "desprecio"], answer: 0 },
      { q: "«Mica» sirve para…", options: ["intensificar afirmaciones", "negar con sorpresa", "saludar"], answer: 1 },
      { q: "El humor italiano con las desgracias funciona porque…", options: ["es cruel", "es digestivo: la risa viene después del miedo", "es obligatorio"], answer: 1 },
      { q: "Un ossimoro es…", options: ["una comparación", "la unión de opuestos", "una exageración"], answer: 1 },
    ],
    cando: [
      "Reconozco y produzco ironía con entonación",
      "Uso litote, iperbole y ossimoro con medida",
      "Analizo el humor italiano en su contexto",
    ],
  },

  {
    id: "cu-c2-04", n: 4, level: "C2",
    title: "Retórica y persuasión", titleIt: "Retorica e persuasione",
    img: "/images/vocab/attualita.webp",
    goal: "Analizar y construir discursos persuasivos de alto nivel",
    goals: ["Identificar las figuras retóricas del discurso público", "Construir una arenga con pathos y logos", "Desmontar falacias con elegancia"],
    scenario: "Curso de retorica en el mismo aula donde predicó Pedro de Verona: analizamos discursos históricos italianos (Kennedy en la piazza, Pertini, los comizi) y construyes el tuyo. Las consecutivas e la anafora son tus armas.",
    dialogue: [
      { speaker: "Docente", it: "Ascolti Pertini: «Io capisco la disperazione…». Cosa fa, retoricamente?", es: "Escuche a Pertini: «Yo entiendo la desesperación…». ¿Qué hace, retóricamente?" },
      { speaker: "Tu", it: "Si mette dalla parte del popolo prima di giudicarlo: è il captatio benevolentiae moderno.", es: "Se pone del lado del pueblo antes de juzgarlo: es el captatio benevolentiae moderno." },
      { speaker: "Docente", it: "E le anafore? Le sente?", es: "¿Y las anáforas? ¿Las oye?" },
      { speaker: "Tu", it: "«Io c'ero. Io ho visto. Io non dimentico»: tre colpi di martello, un solo chiodo.", es: "«Yo estaba. Yo he visto. Yo no olvido»: tres golpes de martillo, un solo clavo." },
      { speaker: "Docente", it: "Adesso tocca a lei: tre frasi con anafora sulla sua città.", es: "Ahora le toca a usted: tres frases con anáfora sobre su ciudad." },
      { speaker: "Tu", it: "«Lima respira mare. Lima suda storia. Lima non chiede il permesso di esistere».", es: "«Lima respira mar. Lima suda historia. Lima no pide permiso para existir»." },
      { speaker: "Docente", it: "Potente. Ma attenzione: la retorica senza verità è solo rumore.", es: "Potente. Pero cuidado: la retórica sin verdad es solo ruido." },
      { speaker: "Tu", it: "Per questo la studio: per riconoscerla quando la sento, non solo per usarla.", es: "Por esto la estudio: para reconocerla cuando la oigo, no solo para usarla." },
    ],
    comprehension: [
      { q: "¿Qué hace Pertini retóricamente según el alumno?", options: ["Se pone del lado del pueblo (captatio benevolentiae)", "Usa datos", "Cita a Cicerón"], answer: 0 },
      { q: "¿Qué son las anáforas de Kennedy/Pertini?", options: ["Preguntas retóricas", "Repeticiones de inicio: tres golpes de martillo", "Metáforas"], answer: 1 },
      { q: "¿Para qué estudia retórica el alumno?", options: ["Para ganar debates", "Para reconocerla cuando la oye, no solo usarla", "Para memorizar"], answer: 1 },
    ],
    chunks: [
      { it: "Io c'ero. Io ho visto. Io non dimentico.", es: "Yo estaba. Yo he visto. Yo no olvido." },
      { it: "tre colpi di martello, un solo chiodo", es: "tres golpes de martillo, un solo clavo" },
      { it: "captatio benevolentiae", es: "captatio benevolentiae (ganar la simpatía)" },
      { it: "non chiede il permesso di esistere", es: "no pide permiso para existir" },
      { it: "la retorica senza verità è solo rumore", es: "la retórica sin verdad es solo ruido" },
      { it: "per riconoscerla quando la sento", es: "para reconocerla cuando la oigo" },
    ],
    grammar: {
      focus: "Las consecutivas y las figuras del pathos",
      inductive: [
        { it: "È di una forza tale che ammutolisce.", es: "Es de una fuerza tal que enmudece." },
        { it: "Tanto basta perché la piazza esploda.", es: "Basta para que la plaza explote." },
        { it: "Così parlò, che tutti piansero.", es: "Así habló, que todos lloraron." },
      ],
      rule: [
        "Arsenal retórico: anafora (repetición inicial), climax (gradación), antitesi (opuestos en simetría), interrogativa retorica, chiasmo (ABBA). Las consecutivas son el músculo del pathos: tale…che, tanto…che, così…che.",
        "La falacia y su desmonte: ad hominem (ataca a la persona), slippery slope (pendiente resbaladiza), false cause. El C2 la desmonta con ironía cortés: «L'argomento è suggestivo, ma non è un argomento».",
      ],
      topicId: "g3-c1-consecutive",
      gaps: [
        { q: "È di un coraggio ___ che stupisce.", options: ["tale", "tanto", "così"], answer: 0 },
        { q: "Bastava ___ perché capissimo tutto. (poco)", options: ["poco", "così poco", "tale"], answer: 0 },
        { q: "La anafora es…", options: ["repetición al inicio de frases", "contraste", "exageración"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "El ritmo de la arenga",
      tip: "La arenga italiana marca la anafora con tres golpes iguales: «Io C'E-ro. | Io ho VIS-to. | Io non di-men-TI-co.» La voz sube en el climax y se corta seca en el remate. Practica con la piazza imaginaria delante.",
      pairs: [
        { a: "Io c'ero.", b: "Io ho visto.", note: "golpes de anafora" },
        { a: "tale…che", b: "tanto…che", note: "consecutivas" },
        { a: "È suggestivo, ma…", b: "…non è un argomento.", note: "desmonte elegante" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Recita la anafora de tres golpes con ritmo de martillo, luego la tuya." },
        { kind: "semi", task: "Construye tu arenga de 60 segundos: captatio, anafora, climax, remate." },
        { kind: "comunicativo", task: "Duelo retórico: arengas rivales y desmonte de dos falacias con ironía cortés." },
        { kind: "autentico", task: "Escucha un discurso italiano real (Pertini, Kennedy a Roma, un comizio) e identifica 4 figuras retóricas." },
      ],
    },
    reading: {
      lines: [
        { it: "La piazza italiana è il palco retorico più esigente d'Europa: ti ascolta, ti interrompe, ti giudica in diretta.", es: "La plaza italiana es el escenario retórico más exigente de Europa: te escucha, te interrumpe, te juzga en directo." },
        { it: "Chi governa la ripetizione governa la folla; chi governa la pausa governa il dubbio.", es: "Quien gobierna la repetición gobierna a la multitud; quien gobierna la pausa gobierna la duda." },
      ],
      question: "¿Qué gobierna la repetición y qué gobierna la pausa?",
    },
    writing: {
      task: "Escribe tu discorso (250 palabras): captatio, tesis, dos anafore, un climax, una antitesi, remate. Y un apéndice: las dos falacias que evitaste conscientemente.",
      minWords: 230,
      tips: ["Marca las pausas con | en el texto", "El remate: frase corta, verbo final"],
      model: [
        "Capisco la stanchezza. | La condivido. | Ma la stanchezza non è un progetto.",
        "Questa città respira mare. Questa città suda storia. Questa città non chiede il permesso di esistere.",
        "Non vi chiedo fiducia: vi chiedo memoria. E la memoria, si sa, | non è nostalgica: è armata.",
      ],
    },
    culture: {
      title: "La piazza y la palabra",
      text: "Italia inventó la retórica moderna (Cicerón, Quintiliano) y nunca la dejó: el comizio, la piazza, el comizio sindacale, el comico che fa politica (Grillo, Guzzanti). Pertini, presidente-partisano, era escuchado en silencio absoluto — caso único. La palabra pública italiana sigue siendo un deporte de contacto.",
    },
    finalTask: {
      title: "La mia arenga in piazza",
      brief: "Sube a la piazza imaginaria: tu arenga de 90 segundos con captatio, dos anafore, antitesi y remate. Y el desmonte elegante de una objeción desde el público.",
      checklist: ["La anafora suena a tres golpes", "El remate es corto y final", "Desmonto una objeción sin atacar a la persona"],
    },
    review: [
      { q: "La captatio benevolentiae sirve para…", options: ["ganar la simpatía antes de argumentar", "despedirse", "interrumpir"], answer: 0 },
      { q: "È tale ___ che ammutolisce.", options: ["che", "da", "di"], answer: 0 },
      { q: "El chiasmo es…", options: ["simetría invertida (ABBA)", "repetición", "pregunta"], answer: 0 },
      { q: "«Ad hominem» ataca…", options: ["el argumento", "la persona", "el ejemplo"], answer: 1 },
    ],
    cando: [
      "Analizo discursos y detecto falacias",
      "Construyo arengas con figuras retóricas",
      "Uso el ritmo y la pausa como armas",
    ],
  },

  {
    id: "cu-c2-05", n: 5, level: "C2",
    title: "Traducir y mediar", titleIt: "Tradurre e mediare",
    img: "/images/letture/mon-seta-15.jpg",
    goal: "Traducir y mediar entre culturas con plena conciencia",
    goals: ["Traducir con criterio (literal vs natural)", "Mediar en contextos interculturales", "Justificar elecciones de traducción"],
    scenario: "Workshop de traducción literaria: un cuento de 500 palabras del español al italiano. Y luego, algo más difícil: mediar en una cena de negocios donde el humor no cruza bien el Mediterráneo. Traducir es elegir.",
    dialogue: [
      { speaker: "Traduttrice", it: "Come tradurrebbe «mi amor» in un romanzo? «Amore mio» suona melense?", es: "¿Cómo traduciría «mi amor» en una novela? ¿«Amore mio» suena empalagoso?" },
      { speaker: "Tu", it: "Dipende dal contesto: in un litigio, «amore» da solo è più crudo, più vero.", es: "Depende del contexto: en una pelea, «amore» solo es más crudo, más verdadero." },
      { speaker: "Traduttrice", it: "E i modi di dire? «Estirar la pata»?", es: "¿Y los modismos? ¿«Estirar la pata»?" },
      { speaker: "Tu", it: "«Tirare le cuoia» tiene el mismo registro popular; «spegnersi» sería elegante pero traiciona.", es: "«Tirare le cuoia» tiene el mismo registro popular; «spegnersi» sería elegante pero traiciona." },
      { speaker: "Traduttrice", it: "Lei traduce il registro o la parola?", es: "¿Usted traduce el registro o la palabra?" },
      { speaker: "Tu", it: "Il registro, sempre. La parola è il vestito; il registro è il corpo.", es: "El registro, siempre. La palabra es el vestido; el registro es el cuerpo." },
      { speaker: "Traduttrice", it: "E quando media tra culture? Cosa non si deve tradurre?", es: "¿Y cuando media entre culturas? ¿Qué no se debe traducir?" },
      { speaker: "Tu", it: "Gli idiommi intraducibili: si spiegano. Tradurli li uccide, spiegarli li fa vivere due volte.", es: "Los idiomas intraducibles: se explican. Traducirlos los mata, explicarlos los hace vivir dos veces." },
    ],
    comprehension: [
      { q: "¿Cómo traduciría «mi amor» en un litigio?", options: ["«Amore mio»", "«Amore» solo, más crudo", "No se traduce"], answer: 1 },
      { q: "¿Qué traicionaría usar «spegnersi» para «estirar la pata»?", options: ["El significado", "El registro popular", "El género"], answer: 1 },
      { q: "¿Qué se hace con los modismos intraducibles?", options: ["Se traducen literalmente", "Se explican (traducirlos los mata)", "Se omiten"], answer: 1 },
    ],
    chunks: [
      { it: "tirare le cuoia", es: "estirar la pata (morir)" },
      { it: "dipende dal contesto", es: "depende del contexto" },
      { it: "tradurre il registro, non la parola", es: "traducir el registro, no la palabra" },
      { it: "la parola è il vestito; il registro è il corpo", es: "la palabra es el vestido; el registro es el cuerpo" },
      { it: "un idiomma intraducibile", es: "un modismo intraducible" },
      { it: "spiegarli li fa vivere due volte", es: "explicarlos los hace vivir dos veces" },
    ],
    grammar: {
      focus: "La traducción gramatical: tiempos que no coinciden",
      inductive: [
        { it: "ES «Cuando tenía 5 años» → IT «Quando avevo cinque anni».", es: "Coincide: imperfecto." },
        { it: "ES «Estuve trabajando» → IT «Ho lavorato / Lavoravo» según intención.", es: "No coincide: hay que elegir." },
        { it: "ES «Había hecho» → IT «Avevo fatto».", es: "Coincide: trapassato prossimo." },
      ],
      rule: [
        "Las trampas gramaticales ES→IT: el pretérito indefinido español se reparte entre passato prossimo (resultado presente) e imperfetto (descripción); el «estuve + gerundio» no existe literal; «llevo cinco años aquí» → «Sono qui da cinque anni».",
        "Y las trampas de mediación: el humor, los diminutivos (¿«un cafecito» = «un caffettino»? Rara vez), la cortesía indirecta. El mediador C2 traduce la función (respeto, cariño, ironía), no la forma.",
      ],
      topicId: "g-b2-ci-ne",
      gaps: [
        { q: "«Llevo 5 años aquí» =", options: ["Porto cinque anni qui", "Sono qui da cinque anni", "Sto qui per cinque anni"], answer: 1 },
        { q: "«Estuve trabajando toda la noche» (resultado): ", options: ["Lavoravo tutta la notte", "Ho lavorato tutta la notte", "Sono lavorato tutta la notte"], answer: 1 },
        { q: "El mediador traduce…", options: ["la forma literal", "la función comunicativa", "palabra por palabra"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "Leer la traducción en voz alta",
      tip: "La prueba de toda traducción es oral: si al leerla suena a italiano y no a «español traducido», funciona. Las dobles y las vocales finales son los delatores: cámbialas y el texto respira.",
      pairs: [
        { a: "tirare le cuoia", b: "spegnersi", note: "registros de morir" },
        { a: "caffettino", b: "un caffè, per favore", note: "diminutivo importado vs natural" },
        { a: "da cinque anni", b: "per cinque anni", note: "duración vs periodo" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Traduce en voz alta 3 frases trampa (llevo años, estuve trabajando, un cafecito) y justifica cada elección." },
        { kind: "semi", task: "Media una cena de negocios: 3 frases de humor que no cruzan, explicadas con gracia." },
        { kind: "comunicativo", task: "Workshop: defiende tus traducciones ante la traducttrice, acepta y rechaza correcciones." },
        { kind: "autentico", task: "Traduce un microcuento (100 palabras) de tu lengua al italiano y léelo en voz alta." },
      ],
    },
    reading: {
      letturaId: "mon-seta-15",
      question: "¿Qué nos enseña la Ruta de la Seda sobre el intercambio entre culturas y lenguas?",
    },
    writing: {
      task: "Escribe tu nota de traducción (250 palabras): un pasaje breve en tu lengua, tu versión italiana, y tres decisiones justificadas (registro, tiempos, modismo).",
      minWords: 230,
      tips: ["Cada decisión: problema → opción → razón", "Una de las decisiones debe ser un modismo"],
      model: [
        "Originale: «Llevamos media hora esperando, mi amor».",
        "Traduzione: «È mezz'ora che aspettiamo, amore».",
        "Decisione: «mi amor» diventa «amore» senza possessivo: in italiano il possessivo qua suona ironico, e la scena non lo è.",
      ],
    },
    culture: {
      title: "Italia, paese di traduttori",
      text: "Italia es una potencia traductora: todo se traduce, y bien. La traducción literaria tiene estrella propia (los premios Campiello Europa), y los traductores italianos debaten en público cada elección. «Traduttore, traditore» — dicen —, y responden: solo chi traduce sceglie, e solo chi sceglie, ama.",
    },
    finalTask: {
      title: "Il mio workshop di traduzione",
      brief: "Presenta tu mini-workshop: 3 decisiones de traducción justificadas (una gramatical, una de registro, un modismo) y la lectura en voz alta de la versión final.",
      checklist: ["Cada decisión tiene problema, opción y razón", "La versión final suena a italiano nativo", "El modismo vive explicado, no muerto traducido"],
    },
    review: [
      { q: "«Llevo un año aquí» =", options: ["Porto un anno qui", "Sono qui da un anno", "Sono qui per un anno"], answer: 1 },
      { q: "«Tirare le cuoia» es…", options: ["registro popular de morir", "registro culto", "un error"], answer: 0 },
      { q: "El mediador C2 traduce…", options: ["palabras", "funciones comunicativas", "literally siempre"], answer: 1 },
      { q: "«Traduttore, traditore» reconoce que…", options: ["traducir es imposible", "traducir es elegir", "los traductores mienten"], answer: 1 },
    ],
    cando: [
      "Traduzco con criterio registro y función",
      "Medio entre culturas con gracia",
      "Justifico decisiones de traducción",
    ],
  },

  {
    id: "cu-c2-06", n: 6, level: "C2",
    title: "El italiano del futuro", titleIt: "L'italiano del futuro",
    img: "/images/ascolto/ls-22.jpg",
    goal: "Analizar el italiano neostandard y proyectar su evolución",
    goals: ["Describir el neostandard y sus rasgos", "Analizar el habla real (radio, social, generacional)", "Proyectar escenarios futuros del idioma"],
    scenario: "Última unidad de contenido: una lezione magistrale sobre el italiano que viene. El neostandard (li ho visti → le ho visti, il che polivalente, «tipo» como conector) ya está aquí. Y tú, extranjero que llegó a C2, tienes la vista más limpia que los nativos.",
    dialogue: [
      { speaker: "Prof", it: "Da straniero, quali mutamenti sente di più rispetto all'italiano «dei libri»?", es: "De extranjero, ¿qué mutaciones siente más respecto al italiano «de los libros»?" },
      { speaker: "Tu", it: "Due: il «che» polivalente («la persona che io ho visto») e le preposizioni semplificate.", es: "Dos: el «che» polivalente («la persona che io ho visto») y las preposiciones simplificadas." },
      { speaker: "Prof", it: "E il parlato giovane? «Tipo», «cioè», «boh»?", es: "¿Y el habla joven? «Tipo», «cioè», «boh»?" },
      { speaker: "Tu", it: "Marcatori del discorso che funzionano come punteggiatura: il parlato ha la sua grammatica, non è error.", es: "Marcadores del discurso que funcionan como puntuación: el habla tiene su gramática, no es error." },
      { speaker: "Prof", it: "Il dialetto sta morendo o rinascendo?", es: "¿El dialecto está muriendo o renaciendo?" },
      { speaker: "Tu", it: "Si sta «regionalizzando»: il napoletano scompare come lingua, ma l'italiano di Napoli resta napoletano.", es: "Se está «regionalizando»: el napolitano desaparece como lengua, pero el italiano de Nápoles sigue siendo napolitano." },
      { speaker: "Prof", it: "E il futuro? Un italiano appiattito sull'inglese?", es: "¿Y el futuro? ¿Un italiano aplanado hacia el inglés?" },
      { speaker: "Tu", it: "No: un italiano a due strati, globale e locale. Come sempre, del resto: la lingua è un animale che adatta.", es: "No: un italiano a dos capas, global y local. Como siempre, en el fondo: la lengua es un animal que se adapta." },
    ],
    comprehension: [
      { q: "¿Qué dos mutaciones nota el estudiante?", options: ["El «che» polivalente y las preposiciones simplificadas", "Las vocales y las dobles", "El vocabulario técnico"], answer: 0 },
      { q: "¿Qué son «tipo», «cioè», «boh» según él?", options: ["Errores de jóvenes", "Marcadores del discurso, puntuación del habla", "Palabras inglesas"], answer: 1 },
      { q: "¿Qué le pasa al dialecto?", options: ["Muere del todo", "Se «regionaliza»: la lengua desaparece, el acento queda", "Vuelve a la escuela"], answer: 1 },
    ],
    chunks: [
      { it: "il «che» polivalente", es: "el «che» polivalente" },
      { it: "marcatori del discorso", es: "marcadores del discurso" },
      { it: "il parlato ha la sua grammatica", es: "el habla tiene su gramática" },
      { it: "si sta regionalizzando", es: "se está regionalizando" },
      { it: "un italiano a due strati", es: "un italiano a dos capas" },
      { it: "la lingua è un animale che adatta", es: "la lengua es un animal que se adapta" },
    ],
    grammar: {
      focus: "El neostandard: las reglas del habla real",
      inductive: [
        { it: "Standard: La persona che ho visto. Neostandard: igual, pero «che» invade también de objeto.", es: "El «che» polysémico ya es normal en el habla." },
        { it: "Standard: li ho visti. Parlato: le ho visti (molti, al Nord).", es: "La concordancia del pronombre se relaja." },
        { it: "Glia domanda che mi pongo = La domanda che mi faccio.", es: "«Porsi» culto vs «farsi» corriente." },
      ],
      rule: [
        "El neostandard (Berruto, Sabatini lo describieron): «che» polivalente, «gli» para todos los indirectos (a lui, a lei, a loro), concordancia ad sensum, «tipo/cioè/boh/praticamente» como puntuación del habla, condicional «ipotetico» de cortesía extendido.",
        "El C2 no solo usa el neostandard: lo ve. Sabe cuándo «gli» para ella es normal en la mesa y cuándo sería error en un paper. La conciencia del registro es la última frontera.",
      ],
      topicId: "g3-c2-substandard",
      gaps: [
        { q: "En el habla real del norte, «(a lei) ho detto» se oye a menudo como…", options: ["le ho detto", "gli ho detto", "lele ho detto"], answer: 1 },
        { q: "«Tipo» en el habla funciona como…", options: ["comparativo solo", "conector/ejemplificador", "adverbio de modo"], answer: 1 },
        { q: "«Boh» expresa…", options: ["afirmación", "ignorancia/indiferencia", "sorpresa positiva"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "La pronuncia regional reconocible",
      tip: "El italiano del futuro es un coro de acentos: la e napoletana abierta, la u veneta cerrada, la s romana sonora, la r toscana aspirada (la gorgia). Escúchalos todos: el C2 entiende a todos y habla con el suyo, o con el que elija.",
      pairs: [
        { a: "la gorgia toscana", b: "la c romanesca", note: "marcas regionales" },
        { a: "boh", b: "beh", note: "marcadores de actitud" },
        { a: "tipo…", b: "cioè…", note: "puntuación del habla" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Usa en una misma historia «tipo», «cioè», «boh» y «praticamente» como puntuación natural." },
        { kind: "semi", task: "Describe el habla joven de tu país como haría un lingüista: rasgos, marcas, diferencia con la escuela." },
        { kind: "comunicativo", task: "Lezione magistrale: presenta el neostandard con 3 ejemplos y la pregunta «¿error o evolución?»." },
        { kind: "autentico", task: "Escucha 10 minutos de radio o podcast italiano real y transcribe 3 rasgos neostandard." },
      ],
    },
    reading: {
      lines: [
        { it: "L'italiano medio parla neostandard e non lo sa: è la lingua della radio, dei social, della vita.", es: "El italiano medio habla neostandard y no lo sabe: es la lengua de la radio, de las redes, de la vida." },
        { it: "Chi arriva al C2 vede due Italie grammaticali e sceglie come un interprete, non come uno studente.", es: "Quien llega al C2 ve dos Italias gramaticales y elige como un intérprete, no como un estudiante." },
      ],
      question: "¿Qué ve quien llega al C2 según el fragmento?",
    },
    writing: {
      task: "Escribe tu lezione magistrale (250 palabras): tres rasgos del neostandard con ejemplos, el debate error/evolución, y tu proyección a 20 años.",
      minWords: 230,
      tips: ["Cada rasgo: forma estándar vs neostandard + contexto", "La proyección final usa el condizionale (sarà, avrà)"],
      model: [
        "Primo: il «che» polivalente. «La persona che io ho visto» era substandard; oggi è parlato normale.",
        "Secondo: il «gli» universale. A Milano «gli ho detto» per lei non è error: è sistole sociale.",
        "Fra vent'anni l'italiano sarà a due strati, globale e locale: la lingua, come sempre, adatterà — e sopravviverà.",
      ],
    },
    culture: {
      title: "La lengua que se mira",
      text: "Italia es el país que más reflexiona sobre su propia lengua: la Crusca responde, i linguisti (Berruto, D'Achille) publican best-sellers, y el Zingarelli registra cada año los neologismos con nota de prensa. El debate «error o evolución» es el deporte intelectual nacional: participan incluso los abuelos.",
    },
    finalTask: {
      title: "La mia lezione magistrale",
      brief: "Imparte tu lezione magistral final sobre el italiano del futuro: tres rasgos neostandard con ejemplos vivos, el debate y tu proyección. Con la calma de quien ya habla la lengua.",
      checklist: ["Cada rasgo tiene forma estándar y neostandard", "El debate error/evolución queda abierto con datos", "La proyección usa condizionale con elegancia"],
    },
    review: [
      { q: "El «che» polivalente del neostandard…", options: ["es error siempre", "cumple funciones de relativo y conector en el habla", "solo existe en Toscana"], answer: 1 },
      { q: "«Boh» expresa…", options: ["alegría", "ignorancia o indiferencia", "temor"], answer: 1 },
      { q: "El neostandard es…", options: ["italiano mal hablado", "la variedad del habla real, descrita por la lingüística", "un dialecto"], answer: 1 },
      { q: "El dialecto hoy…", options: ["desaparece sin rastro", "se regionaliza en el italiano local", "vuelve a ser oficial"], answer: 1 },
    ],
    cando: [
      "Reconozco y uso el neostandard con consciencia",
      "Analizo el habla real con herramientas de lingüista",
      "Proyecto la evolución del idioma con criterio",
    ],
  },

  {
    id: "cu-c2-07", n: 7, level: "C2",
    title: "Escribir ficción", titleIt: "Scrivere narrativa",
    img: "/images/testi/rd-29.jpg",
    goal: "Escribir narrativa breve en italiano con voz propia",
    goals: ["Construir un cuento con struttura y tensión", "Usar punto de vista y tiempo narrativo con maestría", "Pulir el estilo hasta la última palabra"],
    scenario: "Ultima fatica creativa: un racconto de 500 palabras para la antología del corso. Tema libre, único límite: que suene a ti, escrito en italiano. El taller final decide qué entra y qué se corta.",
    dialogue: [
      { speaker: "Maestra", it: "Il suo racconto parte bene. Ma il punto di vista vacilla: chi narra?", es: "Su cuento empieza bien. Pero el punto de vista vacila: ¿quién narra?" },
      { speaker: "Tu", it: "Una terza persona incollata alla protagonista: la vede solo da fuori, ma da vicinissimo.", es: "Una tercera persona pegada a la protagonista: la ve solo desde fuera, pero desde cerquísima." },
      { speaker: "Maestra", it: "Allora tagli il primo capoverso: lì entra nella testa, e rompe il patto.", es: "Entonces corte el primer párrafo: allí entra en la cabeza, y rompe el pacto." },
      { speaker: "Tu", it: "Ha ragione: apro con l'immagine, non col pensiero. «La valigia era rossa».", es: "Tiene razón: abro con la imagen, no con el pensamiento. «La maleta era roja»." },
      { speaker: "Maestra", it: "E la chiusura? Come finisce?", es: "¿Y el cierre? ¿Cómo acaba?" },
      { speaker: "Tu", it: "Con un gesto, non con una frase: lei che sistema la cinghia e non si gira.", es: "Con un gesto, no con una frase: ella que arregla la correa y no se gira." },
      { speaker: "Maestra", it: "Perfetto: il lettore chiude il libro e continua a vedere la scena.", es: "Perfecto: el lector cierra el libro y sigue viendo la escena." },
      { speaker: "Tu", it: "È tutto quello che chiedo all'italiano: che regga il peso di ciò che taccio.", es: "Es todo lo que le pido al italiano: que aguante el peso de lo que callo." },
    ],
    comprehension: [
      { q: "¿Qué punto de vista eligió?", options: ["Primera persona", "Tercera pegada a la protagonista (solo desde fuera)", "Narrador omnisciente"], answer: 1 },
      { q: "¿Por qué cortar el primer párrafo?", options: ["Es largo", "Entra en la cabeza y rompe el pacto", "Falta gramática"], answer: 1 },
      { q: "¿Cómo termina el cuento?", options: ["Con una frase explicativa", "Con un gesto (ella arregla la correa y no se gira)", "Con un diálogo"], answer: 1 },
    ],
    chunks: [
      { it: "una terza persona incollata alla protagonista", es: "una tercera persona pegada a la protagonista" },
      { it: "rompe il patto", es: "rompe el pacto" },
      { it: "apro con l'immagine, non col pensiero", es: "abro con la imagen, no con el pensamiento" },
      { it: "chiude con un gesto, non con una frase", es: "cierra con un gesto, no con una frase" },
      { it: "il lettore continua a vedere la scena", es: "el lector sigue viendo la escena" },
      { it: "il peso di ciò che taccio", es: "el peso de lo que callo" },
    ],
    grammar: {
      focus: "El tempo del racconto: pacto narrativo y tiempos",
      inductive: [
        { it: "La valigia era rossa. (imperfetto: el decorado primero)", es: "La maleta era roja. (imperfecto: el decorado primero)" },
        { it: "Sistemò la cinghia e non si girò. (passato remoto: los hechos)", es: "Arregló la correa y no se giró. (pasado remoto: los hechos)" },
        { it: "Solo dopo avrebbe capito. (condizionale composto: el futuro del pasado)", es: "Solo después habría comprendido. (futuro del pasado)" },
      ],
      rule: [
        "El cuento italiano clásico combina: imperfetto (decorado y repetición), passato remoto (acciones que avanzan), trapassato (anterioridad), condizionale composto (el futuro dentro del pasado). El pacto narrativo exige no mezclar viewpoint sin señalización.",
        "Los mandamientos del taller: abre con imagen, no con pensamiento; cierra con gesto, no con moraleja; cada adjetivo debe ganar su sitio; el diálogo corto y cortante (a la Ginzburg).",
      ],
      topicId: "g3-c2-letterario",
      gaps: [
        { q: "La valigia ___ rossa quando entrò. (ser, decorado)", options: ["fu", "era", "è stata"], answer: 1 },
        { q: "Lei ___ la cinghia e uscì. (sistemar, acción)", options: ["sistemava", "sistemò", "sistemerebbe"], answer: 1 },
        { q: "Solo dopo ___ capito. (comprender, futuro del pasado)", options: ["aveva", "ha", "avrebbe"], answer: 2 },
      ],
    },
    pronunciation: {
      focus: "Leer el propio cuento",
      tip: "El autor lee distinto: sabe dónde callar. Las frases de acción se dicen secas (remoto), las de decorado lentas (imperfetto). El gesto final se lee lento, con pausa antes: es la última imagen del lector.",
      pairs: [
        { a: "era rossa", b: "sistemò", note: "decorado vs acción" },
        { a: "non si girò", b: "…e non si girò mai più", note: "el remate puede estirarse" },
        { a: "avrebbe capito", b: "capì", note: "futuro del pasado vs golpe final" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Lee tu apertura con imagen (no pensamiento) y tu cierre con gesto, con pausa final." },
        { kind: "semi", task: "Cuenta el argumento de tu cuento en 60 segundos: quién, qué quiere, qué se lo impide, cómo acaba." },
        { kind: "comunicativo", task: "Taller: lectura, dos cortes aceptados, uno rechazado con argumento." },
        { kind: "autentico", task: "Escribe el racconto completo (500 palabras) y envíalo a un concurso real italiano." },
      ],
    },
    reading: {
      sourceId: "rd-29",
      question: "¿Qué clima crea la lectura de «L'ultima fermata» y con qué imágenes?",
    },
    writing: {
      task: "Escribe el racconto (500 palabras): apertura con imagen, punto de vista constante, imperfetto/remoto bien repartidos, un diálogo corto y cierre con gesto.",
      minWords: 350,
      tips: ["Apertura: imagen concreta; cierre: gesto sin moraleja", "Cada adjetivo debe ganar su sitio"],
      model: [
        "La valigia era rossa e aveva una ruota che girava storta.",
        "Sistemò la cinghia due volte, come si sistema una cosa che non tiene.",
        "«Vado», disse. E non si girò.",
      ],
    },
    culture: {
      title: "El cuento, escala del país",
      text: "Italia es tierra de cuentistas: de Verga y Pirandello a Moravia y Ginzburg, el racconto es el género nacional — y sus talleres (Scuola Holden de Turín entre todos) son semilleros de la nueva narrativa. El Premio Calvino premia inéditos: la puerta está abierta también para quien llegó de lejos y aprendió a callar en italiano.",
    },
    finalTask: {
      title: "Il mio racconto in antologia",
      brief: "Presenta tu racconto para la antología: lectura en voz alta (3 minutos) y defensa de tus tres elecciones clave (apertura, viewpoint, cierre). El taller vota.",
      checklist: ["El punto de vista no vacila nunca", "Los tiempos narran: remoto avanza, imperfetto pinta", "El cierre es un gesto que se queda"],
    },
    review: [
      { q: "El imperfetto en narración…", options: ["avanza la acción", "pinta decorado y repetición", "es error en cuentos"], answer: 1 },
      { q: "«Solo dopo avrebbe capito»: condizionale composto expresa…", options: ["deseo actual", "futuro dentro del pasado", "orden"], answer: 1 },
      { q: "La apertura ideal del cuento (taller) es…", options: ["un pensamiento", "una imagen concreta", "una moraleja"], answer: 1 },
      { q: "El cierre ideal es…", options: ["explicativo", "un gesto sin explicación", "un resumen"], answer: 1 },
    ],
    cando: [
      "Escribo narrativa con voz propia en italiano",
      "Domino el pacto narrativo y los tiempos",
      "Acepto y discuto cortes de taller con argumentos",
    ],
  },

  {
    id: "cu-c2-08", n: 8, level: "C2",
    title: "Misión: la tesina", titleIt: "Missione: la tesina",
    img: "/images/letture/cult-arte-17.jpg",
    goal: "Repaso final C2: la tesina — investigar, escribir y defender en italiano pleno",
    goals: ["Repasar todas las funciones C2 en cadena", "Escribir y defender una tesina completa", "Autoevaluarte con el can-do C2"],
    scenario: "La prueba final del camino entero: una tesina (pequeña tesis) sobre un tema que te pertenece — con investigación, argumentación, voz y defensa oral. Al terminar, ya no «estudias italiano»: escribes, piensas y bromeas en él. Benvenuto tra noi.",
    dialogue: [
      { speaker: "Relatore", it: "La sua tesina lega Caravaggio e Instagram: mi dica perché.", es: "Su tesina une a Caravaggio e Instagram: dígame por qué." },
      { speaker: "Tu", it: "Perché entrambi lavorano sulla luce come colpo di teatro: la conversione è un like, se vuole.", es: "Porque ambos trabajan la luz como golpe de teatro: la conversión es un like, si quiere." },
      { speaker: "Relatore", it: "Prova a sostenerlo: quale capitolo lo dimostra?", es: "Intente sostenerlo: ¿qué capítulo lo demuestra?" },
      { speaker: "Tu", it: "Il secondo: le tele caravaggesche che riscossero scandalo sono oggi le più condivise. Lo scandalo genera sguardi.", es: "El segundo: los lienzos caravaggescos que causaron escándalo son hoy los más compartidos. El escándalo genera miradas." },
      { speaker: "Relatore", it: "E il metodo? Come ha scelto le fonti?", es: "¿Y el método? ¿Cómo eligió las fuentes?" },
      { speaker: "Tu", it: "Ho scartato ciò che non citava le fonti primarie: preferisco un sasso vero a cento sassi dipinti.", es: "Descarté lo que no citaba fuentes primarias: prefiero una piedra verdadera a cien piedras pintadas." },
      { speaker: "Relatore", it: "Bella frase. Chiude così la tesina?", es: "Buena frase. ¿Cierra así la tesina?" },
      { speaker: "Tu", it: "No: chiudo con Caravaggio. «Dipingeva come guardano oggi gli occhi: una volta sola, e per sempre».", es: "No: cierro con Caravaggio. «Pintaba como miran hoy los ojos: una sola vez, y para siempre»." },
    ],
    comprehension: [
      { q: "¿Qué une la tesina?", options: ["Caravaggio e Instagram", "Dante y TikTok", "Petrarca y la radio"], answer: 0 },
      { q: "¿Qué demuestra el segundo capítulo?", options: ["Que el escándalo genera miradas (los lienzos escandalosos son los más compartidos)", "Que Caravaggio no existió", "Que Instagram es arte"], answer: 0 },
      { q: "¿Cómo eligió las fuentes?", options: ["Al azar", "Descartando lo que no cita fuentes primarias", "Solo en italiano"], answer: 1 },
    ],
    chunks: [
      { it: "la luce come colpo di teatro", es: "la luz como golpe de teatro" },
      { it: "lo scandalo genera sguardi", es: "el escándalo genera miradas" },
      { it: "fonti primarie", es: "fuentes primarias" },
      { it: "un sasso vero a cento sassi dipinti", es: "una piedra verdadera a cien piedras pintadas" },
      { it: "una volta sola, e per sempre", es: "una sola vez, y para siempre" },
      { it: "Benvenuto tra noi.", es: "Bienvenido entre nosotros." },
    ],
    grammar: {
      focus: "Repaso C2: el dominio completo",
      inductive: [
        { it: "Le tele che riscossero scandalo sono oggi le più condivise.", es: "Los lienzos que causaron escándalo son hoy los más compartidos." },
        { it: "Preferisco un sasso vero a cento sassi dipinti.", es: "Prefiero una piedra verdadera a cien piedras pintadas." },
        { it: "Dipingeva come guardano oggi gli occhi.", es: "Pintaba como miran hoy los ojos." },
      ],
      rule: [
        "Repaso exprés C2: registros (del burocratese al neostandard), condizionale composto, trapassato remoto, dislocazioni, consecutivas retoriche, nominalizaciones académicas, ironía (litote, iperbole), ne abstracto, andare + participio.",
        "La tesina exige todo en armonía: título que argumenta, tesis con voz, capítulos con datos y nexo, conclusiones que abren. Y la defensa: ritmo, pausa, ironía medida. Es el examen y la fiesta final.",
      ],
      topicId: "g3-c2-letterario",
      gaps: [
        { q: "Preferisco il vero ___ falso. (preferir X a Y)", options: ["al", "del", "col"], answer: 0 },
        { q: "Le tele che ___ scandalo. (causar, remoto)", options: ["riscuotevano", "riscossero", "hanno riscosso"], answer: 1 },
        { q: "Dipingeva ___ guardano gli occhi. (como)", options: ["che", "come", "quale"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "La defensa final",
      tip: "La defensa se lee con la calma del que ya no tiene que demostrar nada: pausas largas, citas lentas, ironía con media sonrisa. El último «Benvenuto tra noi» del relatore se responde con un «Grazie — e arrivederci» a la misma altura.",
      pairs: [
        { a: "Mi dica perché.", b: "Glielo dico.", note: "la pregunta y la respuesta del examen" },
        { a: "una volta sola", b: "…e per sempre", note: "el remate aforístico" },
        { a: "Benvenuto tra noi.", b: "Grazie, arrivederci.", note: "el cierre del camino" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Recita tu título, tu tesis y tu cierre aforístico: las tres frases que sostienen todo." },
        { kind: "semi", task: "Defiende tu tesina en 3 minutos: por qué el tema, qué demuestra, qué rechazaste." },
        { kind: "comunicativo", task: "Defensa completa: exposición + tres preguntas del relatore, una difícil de verdad." },
        { kind: "autentico", task: "Escribe la tesina real (o el primer capítulo) sobre el tema que te pertenece — y defiéndela ante alguien que la lea." },
      ],
    },
    reading: {
      letturaId: "cult-arte-17",
      question: "¿Qué hace Caravaggio con la luz según la lectura y por qué escandalizó?",
    },
    writing: {
      task: "Escribe la tesina final (350+ palabras): título argumentativo, tesis con voz, dos capítulos con datos y fuentes, una concesión y cierre aforístico. Tu obra maestra del curso.",
      minWords: 320,
      tips: ["Cada capítulo: dato, comentario, nexo", "La concesión demuestra madurez; el aforismo, dominio"],
      model: [
        "Titolo: La luce come like: Caravaggio e l'economia dello sguardo.",
        "Nel secondo capitolo si mostra che i dipinti che riscossero scandalo sono oggi i più condivisi: lo scandalo, pertanto, genera sguardi.",
        "Nondimeno, il paragone ha un limite: Caravaggio dipingeva per una chiesa, non per un algoritmo. Ma dipingeva come guardano oggi gli occhi: una volta sola, e per sempre.",
      ],
    },
    culture: {
      title: "La tesina y el fin del viaje",
      text: "La tesina es el rito de paso de la escuela italiana: un tema propio, investigado y defendido. También es la metáfora perfecta del curso: elegiste qué mirar, buscaste fuentes, tomaste posición y lo dijiste en italiano — con tu voz. De «Ciao! Mi presento» a esto. Il resto, come dicono, è conversazione.",
    },
    finalTask: {
      title: "La difesa finale — il diploma C2",
      brief: "La defensa final: 5 minutos de tesina, tres preguntas del relatore, una concesión elegante y un cierre aforístico. Al terminar, el italiano ya es tuyo: usalo, custodiscilo, e insegnalo a qualcuno.",
      checklist: ["La tesis tiene voz personal innegable", "Datos y fuentes sostienen cada afirmación", "El cierre aforístico se recuerda al salir"],
    },
    review: [
      { q: "Preferisco X ___ Y.", options: ["a", "di", "che"], answer: 0 },
      { q: "«Fonti primarie» =", options: ["fuentes originales de primera mano", "bibliografía secundaria", "opiniones"], answer: 0 },
      { q: "La tesina exige…", options: ["resumen neutro", "tesis con voz + datos + defensa", "solo citas"], answer: 1 },
      { q: "«Benvenuto tra noi» se dice…", options: ["al llegar de viaje", "cuando alguien entra definitivamente al grupo", "solo en hoteles"], answer: 1 },
    ],
    cando: [
      "Investigo, escribo y defiendo en italiano pleno",
      "Domino todos los registros y estructuras C2",
      "He completado el camino A1–C2: il italiano è mio",
    ],
  },
];
