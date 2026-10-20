import type { CbUnit } from "../cambridge";

/* ═══ C1 · Dominio accademico e professionale — 10 unità ══════════════ */

export const CB_C1: CbUnit[] = [
  {
    id: "cu-c1-01", n: 1, level: "C1",
    title: "El italiano académico", titleIt: "L'italiano accademico",
    img: "/images/situazioni/sit-biblioteca.jpg",
    goal: "Escribir y hablar con registro académico pleno",
    goals: ["Nominalizar y sintetizar conceptos", "Estructurar una tesis y su desarrollo", "Citar fuentes y reformular"],
    scenario: "Primer seminario doctoral en la Sapienza: debes presentar el estado de la cuestión de tu tema en cinco minutos. El italiano académico no perdona: precisión, síntesis y elegancia.",
    dialogue: [
      { speaker: "Relatore", it: "Ci esponga lo stato dell'arte: sintesi, non elenco.", es: "Exponganos el estado del arte: síntesis, no lista." },
      { speaker: "Tu", it: "La letteratura recente converge su tre assi: la periodizzazione, le fonti, l'impatto sociale.", es: "La literatura reciente converge en tres ejes: la periodización, las fuentes, el impacto social." },
      { speaker: "Relatore", it: "Su quale asse si concentra il dibattito attuale?", es: "¿Sobre qué eje se concentra el debate actual?" },
      { speaker: "Tu", it: "Sull'impatto sociale. Se da un lato gli studi ne evidenziano la portata, dall'altro ne rimette in questione la misurabilità.", es: "Sobre el impacto social. Si por un lado los estudios destacan su alcance, por otro cuestionan su medibilidad." },
      { speaker: "Relatore", it: "Ella come si colloca? Quale metodologia adotta?", es: "¿Usted cómo se coloca? ¿Qué metodología adopta?" },
      { speaker: "Tu", it: "Adotto un approccio misto: l'analisi quantitativa serve a delimitare il campo, quella qualitativa a interpretarlo.", es: "Adopto un enfoque mixto: el análisis cuantitativo sirve para delimitar el campo, el cualitativo para interpretarlo." },
      { speaker: "Relatore", it: "Curioso. E quali limiti individua nel suo stesso approccio?", es: "Curioso. ¿Y qué límites encuentra en su propio enfoque?" },
      { speaker: "Tu", it: "La rappresentatività del campione: è per questo che ho previsto una seconda fase di verifica.", es: "La representatividad de la muestra: es por eso que he previsto una segunda fase de verificación." },
    ],
    comprehension: [
      { q: "¿En qué tres ejes converge la literatura?", options: ["Periodización, fuentes, impacto social", "Autores, fechas, países", "Teoría, método, resultados"], answer: 0 },
      { q: "¿Qué enfoque metodológico adopta?", options: ["Solo cuantitativo", "Mixto: cuantitativo + cualitativo", "Solo cualitativo"], answer: 1 },
      { q: "¿Qué límite reconoce?", options: ["La falta de tiempo", "La representatividad de la muestra", "El presupuesto"], answer: 1 },
    ],
    chunks: [
      { it: "lo stato dell'arte", es: "el estado del arte" },
      { it: "la letteratura converge su…", es: "la literatura converge en…" },
      { it: "se da un lato… dall'altro…", es: "si por un lado… por otro…" },
      { it: "ne rimette in questione la misurabilità", es: "cuestiona su medibilidad" },
      { it: "Adotto un approccio misto", es: "Adopto un enfoque mixto" },
      { it: "è per questo che…", es: "es por eso que…" },
    ],
    grammar: {
      focus: "Síntesis y reformulación académica",
      inductive: [
        { it: "Gli studi ne evidenziano la portata.", es: "Los estudios destacan su alcance." },
        { it: "Ciò equivale a dire che il modello va rivisto.", es: "Esto equivale a decir que el modelo debe revisarse." },
        { it: "In altre parole, la misura non misura.", es: "En otras palabras, la medida no mide." },
      ],
      rule: [
        "El C1 académico formula y reformula: ciò equivale a dire, in altre parole, vale a dire, ossia. Y sintetiza: la letteratura converge su, in sintesi, a grandi linee, tout court (cultismo asimilado).",
        "El ne sustantivo abstracto (ne evidenziano la portata = della questione) es firma del registro: pronombre elegante que evita repetir el sustantivo. Úsalo con cirugía.",
      ],
      topicId: "gx-c1-nominalizz",
      gaps: [
        { q: "Gli studi ne ___ l'importanza. (destacar)", options: ["evidenziano", "evidenzia", "hanno evidenziato solo"], answer: 0 },
        { q: "In altre ___, il modello va rivisto.", options: ["parole", "parola", "modi"], answer: 0 },
        { q: "La tesi ___ (concentrarse) su tre assi.", options: ["converge", "convergono", "convergeranno solo"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "El ritmo del seminario",
      tip: "El académico italiano marca las palabras clave con pausas: «la letteratura… converge… su TRE assi». Las nominalizaciones se pronuncian enteras, sin atajos. La voz baja en las concesiones y sube en la tesis.",
      pairs: [
        { a: "misurabilità", b: "rappresentatività", note: "escaleras abstractas" },
        { a: "ossia", b: "vale a dire", note: "reformuladores" },
        { a: "in sintesi", b: "a grandi linee", note: "síntesis" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «La letteratura converge su tre assi. Ciò equivale a dire che…»." },
        { kind: "semi", task: "Presenta el estado de la cuestión de tu campo en 8 frases sintéticas." },
        { kind: "comunicativo", task: "Seminario doctoral: exposición, pregunta del relatore, respuesta con matices y autocrítica." },
        { kind: "autentico", task: "Lee un abstract académico italiano y reprodúcelo en 5 frases con ne abstracto." },
      ],
    },
    reading: {
      lines: [
        { it: "L'italiano accademico premia la densità: ogni frase deve avanzare la tesi, non accompagnarla.", es: "El italiano académico premia la densidad: cada frase debe avanzar la tesis, no acompañarla." },
        { it: "La regola d'oro: prima il dato, poi l'interpretazione — mai il contrario.", es: "La regla de oro: primero el dato, luego la interpretación — nunca al revés." },
      ],
      question: "¿Cuál es la regla de oro del texto académico según el fragmento?",
    },
    writing: {
      task: "Escribe el estado de la cuestión (200 palabras): convergencias, debate abierto, tu posición y metodología, con límites reconocidos.",
      minWords: 180,
      tips: ["ne abstracto al menos 2 veces", "Reformulador (in altre parole / ossia) en cada bloque"],
      model: [
        "La letteratura recente converge su tre assi, di cui il terzo — l'impatto sociale — resta il più controverso.",
        "Se da un lato gli studi ne evidenziano la portata, dall'altro ne mettono in dubbio la misurabilità.",
        "Il presente lavoro adotta un approccio misto: esso permetterà, in altre parole, di delimitare e insieme interpretare il fenomeno.",
      ],
    },
    culture: {
      title: "La Sapienza y el saber",
      text: "La Sapienza (1303) es la universidad más grande de Europa: 100.000 estudiantes, un idioma propio. El seminario italiano premia la «colta argomentazione»: citar bien, dudar con elegancia y defender la tesis con datos. La biblioteca di Storia moderna è su templo silencioso.",
    },
    finalTask: {
      title: "Il mio seminario dottorale",
      brief: "Presenta tu seminario de 5 minutos: estado de la cuestión, debate, tu posición con metodología y límites. Con preguntas del relatore y respuestas serenas.",
      checklist: ["Sinteticé sin listar", "Usé ne abstracto y reformuladores", "Reconocí límites con elegancia"],
    },
    review: [
      { q: "«Ciò equivale a dire» =", options: ["esto impide decir", "esto equivale a decir", "esto precede a"], answer: 1 },
      { q: "Gli studi ne ___ la portata.", options: ["evidenziano", "evidenziate", "evidenziando"], answer: 0 },
      { q: "«Lo stato dell'arte» =", options: ["el estado del arte", "el estado de ánimo", "la obra de arte"], answer: 0 },
      { q: "Se da un lato…, ___ altro…", options: ["da un", "dall'", "di"], answer: 1 },
    ],
    cando: [
      "Puedo sintetizar y reformular con registro académico",
      "Estructuro tesis, método y límites",
      "Respondo a preguntas de comité con precisión",
    ],
  },

  {
    id: "cu-c1-02", n: 2, level: "C1",
    title: "Escribir para persuadir", titleIt: "Scrivere per persuadere",
    img: "/images/testi/rd-6.jpg",
    goal: "Redactar textos argumentativos de alta eficacia",
    goals: ["Construir una argumentación con finali e causali", "Usar la secuencia de tiempos narrativa", "Escribir un ensayo completo"],
    scenario: "Concurso de ensayo del «Corriere»: «Perché vale la pena studiare l'italiano». Mil palabras para persuadir. Las finales y causales tejen la red lógica; la secuencia de tiempos mantiene el hilo.",
    dialogue: [
      { speaker: "Editor", it: "Il suo saggio parte bene, ma la tesi si perde: manca la struttura logica.", es: "Su ensayo empieza bien, pero la tesis se pierde: falta la estructura lógica." },
      { speaker: "Tu", it: "Capisco. Vorrei costruirlo in modo che ogni paragrafo prepari il successivo.", es: "Entiendo. Querría construirlo de modo que cada párrafo prepare el siguiente." },
      { speaker: "Editor", it: "Esatto: usi le finali. «Affinché la tesi arrivi, il lettore va guidato».", es: "Exacto: use las finales. «Para que la tesis llegue, hay que guiar al lector»." },
      { speaker: "Tu", it: "E le causali? Spesso spiego il perché dopo il cosa, per creare attesa.", es: "¿Y las causales? A menudo explico el porqué después del qué, para crear espera." },
      { speaker: "Editor", it: "Ottimo istinto: dato che il lettore moderno ha poco tempo, l'attesa dev'essere breve.", es: "Óptimo instinto: dado que el lector moderno tiene poco tiempo, la espera debe ser breve." },
      { speaker: "Tu", it: "Quindi: tesi subito, prove dopo, emozione alla fine?", es: "¿Entonces: tesis primero, pruebas después, emoción al final?" },
      { speaker: "Editor", it: "Precisamente. Affinché un saggio funzioni, deve chiudersi su un'immagine, non su un riassunto.", es: "Precisamente. Para que un ensayo funcione, debe cerrarse con una imagen, no con un resumen." },
      { speaker: "Tu", it: "Grazie: ora so non solo cosa scrivere, ma come condurre il lettore.", es: "Gracias: ahora sé no solo qué escribir, sino cómo conducir al lector." },
    ],
    comprehension: [
      { q: "¿Qué le falta al ensayo según el editor?", options: ["Datos", "Estructura lógica", "Adjetivos"], answer: 1 },
      { q: "¿Para qué sirven las finales?", options: ["Para guiar al lector hacia la tesis", "Para decorar", "Para alargar"], answer: 0 },
      { q: "¿Cómo debe cerrar un ensayo?", options: ["Con un resumen", "Con una imagen", "Con una cita"], answer: 1 },
    ],
    chunks: [
      { it: "in modo che ogni paragrafo prepari il successivo", es: "de modo que cada párrafo prepare el siguiente" },
      { it: "affinché la tesi arrivi", es: "para que la tesis llegue" },
      { it: "dato che il lettore ha poco tempo", es: "dado que el lector tiene poco tiempo" },
      { it: "la tesi si perde", es: "la tesis se pierde" },
      { it: "chiudersi su un'immagine", es: "cerrarse con una imagen" },
      { it: "non solo… ma anche…", es: "no solo… sino también…" },
    ],
    grammar: {
      focus: "Finali, causali e la trama lógica del ensayo",
      inductive: [
        { it: "Affinché la tesi arrivi, guida il lettore.", es: "Para que la tesis llegue, guía al lector." },
        { it: "Dato che il tempo è poco, l'attesa dev'essere breve.", es: "Dado que el tiempo es poco, la espera debe ser breve." },
        { it: "Scrive in modo che tutti capiscano.", es: "Escribe de modo que todos entiendan." },
      ],
      rule: [
        "Finali (finalidad): affinché / perché + subjuntivo (affinché capisca), per + infinito. Causali: dato che, poiché, siccome + indicativo; giacché culto.",
        "La persuasión C1 encadena: non solo… ma anche; se… allora; per quanto + subjuntivo (concesiva culta). Y la secuencia de tiempos narrativa: presente histórico, imperfecto para el decorado, passato remoto para los hechos de la historia contada.",
      ],
      topicId: "g3-b2-finali-causali",
      gaps: [
        { q: "Scrivo affinché tu ___ (capire).", options: ["capisci", "capisca", "capissi"], answer: 1 },
        { q: "___ piove, resto a casa. (dado que)", options: ["Affinché", "Dato che", "Per quanto"], answer: 1 },
        { q: "Per quanto ___ difficile, ci provo. (ser)", options: ["è", "sia", "fosse"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "La retórica del ensayo",
      tip: "El ensayo se lee con arquitectura: pausa tras la tesis («la tesi è questa. |»), aceleración en las pruebas, lento absoluto en la imagen final. affinché y giacché se pronuncian cultos, casi latinos.",
      pairs: [
        { a: "affinché", b: "giacché", note: "conectores cultos" },
        { a: "non solo…", b: "…ma anche!", note: "progresión" },
        { a: "per quanto", b: "dato che", note: "concesiva vs causal" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Affinché la tesi arrivi, il lettore va guidato. Dato che il tempo è poco…»." },
        { kind: "semi", task: "Defiende tu tesis del ensayo en 8 frases con finali y causali encadenadas." },
        { kind: "comunicativo", task: "Editorial: editor y autor pulen el ensayo — cortar, reordenar, cerrar con imagen." },
        { kind: "autentico", task: "Escribe y lee en voz alta tu ensayo de 500 palabras sobre un tema que te importe." },
      ],
    },
    reading: {
      sourceId: "rd-22",
      question: "¿Qué argumentos da la lectura sobre leer los clásicos y cómo los estructura?",
    },
    writing: {
      task: "Escribe el ensayo completo (220 palabras): tesis inmediata, 2 pruebas con causali, concesiva con per quanto, cierre con imagen. Tema: por qué vale la pena aprender italiano.",
      minWords: 200,
      tips: ["affinché / dato che / per quanto en el armazón", "Cierre con imagen, no resumen"],
      model: [
        "Studiare l'italiano vale la pena, e non per la bellezza del Bel Paese.",
        "Dato che le lingue muoiono quando non si parlano, ogni nuovo parlante è un atto di resistenza culturale.",
        "Per quanto l'inglese basti per lavorare, l'italiano serve per sentire: affinché un verso di Dante arrivi, bisogna leggerlo nella sua lingua.",
      ],
    },
    culture: {
      title: "El arte del ensayo",
      text: "Italia tiene una tradición ensayística feroz: de Leopardi («Zibaldone») a Calvino y Eco, pasando por los editoriali de «Repubblica» y «Corriere». El saggio italiano mezcla erudición y elegancia: datos con adjetivos justos, ironía culta, cierre aforístico. Se publica en suplementos dominicales que media Italia devora.",
    },
    finalTask: {
      title: "Il mio saggio per il concorso",
      brief: "Escribe y presenta tu ensayo de concurso: tesis, pruebas, concesiva, cierre con imagen. 3 minutos leídos en voz alta como en la radio.",
      checklist: ["La estructura lógica es visible", "Usé affinché, dato che, per quanto", "Cierro con imagen, no resumen"],
    },
    review: [
      { q: "Scrivo affinché tu ___ (venire).", options: ["vieni", "venga", "venissi"], answer: 1 },
      { q: "«Dato che» rige…", options: ["subjuntivo", "indicativo", "condicional"], answer: 1 },
      { q: "Per quanto ___ stanco, continua. (ser)", options: ["è", "sia", "era"], answer: 1 },
      { q: "El ensayo italiano cierra con…", options: ["un resumen", "una imagen o aforismo", "una disculpa"], answer: 1 },
    ],
    cando: [
      "Puedo escribir ensayos con estructura lógica visible",
      "Uso finali y causali cultas con naturalidad",
      "Cierro textos con eficacia retórica",
    ],
  },

  {
    id: "cu-c1-03", n: 3, level: "C1",
    title: "El italiano de los medios", titleIt: "L'italiano dei media",
    img: "/images/ascolto/ls-29.jpg",
    goal: "Comprender y producir lenguaje periodístico: titulares, síntesis, radio",
    goals: ["Descodificar titulares y lenguaje de prensa", "Sintetizar noticias oralmente", "Reconocer sesgos y registros mediáticos"],
    scenario: "Prácticas en la redacción romana de un diario digital: te dan tres noticias crudas y 15 minutos para titular, sintetizar y leer en el podcast de la mañana. El italiano de los medios no espera a nadie.",
    dialogue: [
      { speaker: "Caporedattore", it: "Tre notizie, quindici minuti: titoli, catene, audio. Vada!", es: "Tres noticias, quince minutos: titulares, cadenas, audio. ¡Vaya!" },
      { speaker: "Tu", it: "Prima notizia: consigli regionali approvano il piano trasporti. Titolo: «Via al piano trasporti».", es: "Primera: los consejos regionales aprueban el plan de transportes. Titular: «Vía libre al plan de transportes»." },
      { speaker: "Caporedattore", it: "Troppo piatto. Aggiunga il dato: quanto costa, chi lo paga?", es: "Demasiado plano. Añada el dato: ¿cuánto cuesta, quién lo paga?" },
      { speaker: "Tu", it: "«Piano trasporti da 200 milioni: ok delle Regioni, polemica sui fondi».", es: "«Plan de transportes de 200 millones: ok de las Regiones, polémica por los fondos»." },
      { speaker: "Caporedattore", it: "Meglio. Seconda notizia?", es: "Mejor. ¿Segunda noticia?" },
      { speaker: "Tu", it: "Sulla neve in Appennino: «Neve record, scuole chiuse in sei province».", es: "Sobre la nieve en el Apenino: «Nieve récord, escuelas cerradas en seis provincias»." },
      { speaker: "Caporedattore", it: "Ottimo: verbo, dato, luogo. Terza?", es: "Óptimo: verbo, dato, lugar. ¿Tercera?" },
      { speaker: "Tu", it: "Cultura: «Ritrovato un Caravaggio perduto? Le verifiche degli esperti».", es: "Cultura: «¿Recuperado un Caravaggio perdido? Las verificaciones de los expertos»." },
    ],
    comprehension: [
      { q: "¿Qué falta en el primer titular propuesto?", options: ["El dato (coste, quién paga)", "El verbo", "El lugar"], answer: 0 },
      { q: "¿Qué estructura pide el caporedattore?", options: ["Verbo, dato, lugar", "Solo adjetivos", "Pregunta siempre"], answer: 0 },
      { q: "¿De qué trata la tercera noticia?", options: ["Un Caravaggio perdido posiblemente recuperado", "Una exposición", "Un robo"], answer: 0 },
    ],
    chunks: [
      { it: "Via al piano trasporti", es: "Vía libre al plan de transportes" },
      { it: "polemica sui fondi", es: "polémica por los fondos" },
      { it: "Neve record, scuole chiuse", es: "Nieve récord, escuelas cerradas" },
      { it: "Le verifiche degli esperti", es: "Las verificaciones de los expertos" },
      { it: "Troppo piatto.", es: "Demasiado plano." },
      { it: "Vada!", es: "¡Vaya!" },
    ],
    grammar: {
      focus: "La sintassi del titolo: verbos elisos y nominalización",
      inductive: [
        { it: "Neve record, scuole chiuse in sei province.", es: "Nieve récord, escuelas cerradas en seis provincias." },
        { it: "Ritrovato un Caravaggio perduto.", es: "Recuperado (un) Caravaggio perdido." },
        { it: "Ok delle Regioni, polemica sui fondi.", es: "Ok de las Regiones, polémica por los fondos." },
      ],
      rule: [
        "El titular italiano elimina el verbo ser/estar y a veces todo verbo: «Neve record» (= c'è). Participios como títulos: «Ritrovato…», «Approvato…». Dos puntos = causa o especificación.",
        "Léxico de redacción: scoop, taglio (enfoque), catena (cadena informativa), lancio (entrada), titolista. Y la síntesis radiofónica: los primeros 10 segundos contienen qué, dónde, cuándo.",
      ],
      topicId: "g3-c1-verbi-fraseologici",
      gaps: [
        { q: "Titular correcto:", options: ["C'è neve record", "Neve record", "Nevicata che è record"], answer: 1 },
        { q: "«___ un tesoro perduto» (titular)", options: ["È ritrovato", "Ritrovato", "Si ritrova"], answer: 1 },
        { q: "scuole ___ (cerrar, participio)", options: ["chiuse", "chiudere", "chiuse sono"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "La voz del podcast informativo",
      tip: "La radio italiana lee: qué-dónde-cuándo en los primeros 10 segundos, con nombres propios claros. Los titulares se dicen secos, sin subrayar: la ironía se insinúa con una micro-pausa.",
      pairs: [
        { a: "«Via al piano»", b: "«Stop al piano»", note: "apertura y cierre" },
        { a: "polemica sui fondi", b: "ok delle Regioni", note: "tensión y consenso" },
        { a: "Vada!", b: "Perfetto.", note: "jerga de redacción" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Lee tres titulares en voz alta, secos y claros, con pausa de dos puntos." },
        { kind: "semi", task: "Sintetiza una noticia real italiana en 20 segundos: qué, dónde, cuándo, por qué." },
        { kind: "comunicativo", task: "Simulación de redacción: titula 3 noticias, defiende tus cortes ante el caporedattore." },
        { kind: "autentico", task: "Escucha un telegiornale italiano y reproduce en voz alta 3 titulares y sus síntesis." },
      ],
    },
    reading: {
      lines: [
        { it: "Il titolo italiano ama la nominalizzazione e detesta il verbo essere: meno parole, più colpo.", es: "El titular italiano ama la nominalización y detesta el verbo ser: menos palabras, más golpe." },
        { it: "I due punti sono il cuore del titolo: prima l'effetto, poi la causa. O viceversa, se serve l'attesa.", es: "Los dos puntos son el corazón del titular: primero el efecto, luego la causa. O al revés, si conviene la espera." },
      ],
      question: "¿Qué ama y qué detesta el titular italiano, y qué papel juegan los dos puntos?",
    },
    writing: {
      task: "Escribe el paquete completo de 3 noticias (200 palabras): titular + entradilla de 30 palabras + texto con verbo, dato, fuente.",
      minWords: 180,
      tips: ["Titular sin verbo ser; entradilla con qué-dónde-cuándo", "Fuente: «secondo…», «come confermato da…»"],
      model: [
        "NEVE RECORD: sei province chiuse, scuola a distanza.",
        "La perturbazione ha portato 80 cm di neve sull'Appennino: chiusse le scuole di sei province, secondo la Protezione Civile.",
        "Il presidente della Regione ha assicurato che i fondi per gli spazzaneve arriveranno entro venerdì.",
      ],
    },
    culture: {
      title: "Ansa, TG y la prensa",
      text: "La ANSA es la agencia que alimenta todos los medios italianos: sus flashes son una lengua propia (verbo eliso, siglas, presente histórico). El TG1 de las 13:30 es un rito nacional con la Audiencia media más alta de Europa. Y los editoriali del domingo siguen cambiando el debate público.",
    },
    finalTask: {
      title: "Turno di notte in redazione",
      brief: "Simula tu turno de noche: 3 noticias reales del día, tituladas, sintetizadas y leídas como podcast matinal. Quince minutos de presión y gloria.",
      checklist: ["Titulares sin verbo ser, con dato", "Cada síntesis abre con qué-dónde-cuándo", "La lectura radiofónica es clara y seca"],
    },
    review: [
      { q: "El titular italiano evita…", options: ["el dato", "el verbo essere y las palabras vacías", "los dos puntos"], answer: 1 },
      { q: "«Ritrovato un tesoro» es…", options: ["pasado próximo", "participio con verbo elidido", "infinitivo"], answer: 1 },
      { q: "La entradilla contiene…", options: ["qué-dónde-cuándo", "solo opiniones", "la fuente completa"], answer: 0 },
      { q: "ANSA es…", options: ["una cadena de TV", "la agencia de prensa italiana", "un diario"], answer: 1 },
    ],
    cando: [
      "Puedo escribir titulares y síntesis periodísticas",
      "Reconozco registros y sesgos de los medios",
      "Produzco audio informativo claro",
    ],
  },

  {
    id: "cu-c1-04", n: 4, level: "C1",
    title: "Negociar y mediar", titleIt: "Negoziazione e mediazione",
    img: "/images/ascolto/ls-27.jpg",
    goal: "Negociar en contextos profesionales con diplomacia verbal",
    goals: ["Usar condizionale composto y sfumature de cortesía", "Mediar entre posiciones contrarias", "Cerrar acuerdos con precisión"],
    scenario: "Negociación comercial italo-hispana: tú eres el mediador entre una empresa de Milán y otra de Madrid. Plazos, precios y orgullo en juego: la diplomacia verbal del C1 trabaja a plena potencia.",
    dialogue: [
      { speaker: "Milanese", it: "Non possiamo consegnare prima di marzo: prima sarebbe stato possibile, ora no.", es: "No podemos entregar antes de marzo: antes habría sido posible, ahora no." },
      { speaker: "Madrileño", it: "Ma avevate promesso gennaio! Questo cambia tutto il nostro piano.", es: "¡Pero habíais prometido enero! Esto cambia todo nuestro plan." },
      { speaker: "Tu", it: "Mi lasciate mediare? Capisco entrambe le posizioni: cerchiamo una finestra intermedia.", es: "¿Me dejáis mediar? Entiendo ambas posiciones: busquemos una ventana intermedia." },
      { speaker: "Milanese", it: "Sentiamo: cosa proporrebbe il mediatore?", es: "Escuchemos: ¿qué propondría el mediador?" },
      { speaker: "Tu", it: "Consegna parziale a gennaio, resto a febbraio, con penale ridotta del 50%.", es: "Entrega parcial en enero, resto en febrero, con penalización reducida al 50%." },
      { speaker: "Madrileño", it: "Avremmo preferito tutto a gennaio, ma così potremmo spiegare al nostro board.", es: "Habríamos preferido todo en enero, pero así podríamos explicárselo a nuestro board." },
      { speaker: "Milanese", it: "Da parte nostra, avremmo bisogno di conferma scritta entro venerdì.", es: "Por nuestra parte, habríamos necesitado confirmación escrita antes del viernes." },
      { speaker: "Tu", it: "Perfetto: avremmo quindi un accordo? Lo verbalizzo e lo mandò a entrambi.", es: "Perfecto: ¿tendríamos entonces un acuerdo? Lo verbalizo y lo envío a ambos." },
    ],
    comprehension: [
      { q: "¿Qué había prometido la empresa milanesa?", options: ["Enero", "Marzo", "Junio"], answer: 0 },
      { q: "¿Qué propone el mediador?", options: ["Todo en marzo", "Entrega parcial enero + resto febrero con penalización reducida", "Romper negociaciones"], answer: 1 },
      { q: "¿Qué necesita la parte milanesa?", options: ["Más dinero", "Confirmación escrita antes del viernes", "Una disculpa"], answer: 1 },
    ],
    chunks: [
      { it: "prima sarebbe stato possibile", es: "antes habría sido posible" },
      { it: "Mi lasciate mediare?", es: "¿Me dejáis mediar?" },
      { it: "cerchiamo una finestra intermedia", es: "busquemos una ventana intermedia" },
      { it: "avremmo preferito…, ma…", es: "habríamos preferido…, pero…" },
      { it: "con penale ridotta", es: "con penalización reducida" },
      { it: "Lo verbalizzo.", es: "Lo verbalizo." },
    ],
    grammar: {
      focus: "Condizionale composto y la diplomacia",
      inductive: [
        { it: "Avremmo preferito tutto a gennaio.", es: "Habríamos preferido todo en enero." },
        { it: "Sarebbe stato possibile prima.", es: "Habría sido posible antes." },
        { it: "Avremmo bisogno di una conferma.", es: "Necesitaríamos (habríamos necesitado) una confirmación." },
      ],
      rule: [
        "El condizionale composto (avremmo + participio) modula decepción y preferencias sin romper: «avremmo preferito…, ma…» es la fórmula de la concesión elegante.",
        "La mediación pide: mi lasciate mediare, capisco entrambe le posizioni, cerchiamo una finestra intermedia, da parte nostra, per parte mia. Y el cierre: lo verbalizzo, abbiamo quindi un accordo, restiamo intesi.",
      ],
      topicId: "g-b2-ipotetico",
      gaps: [
        { q: "___ preferito altra data. (habríamos)", options: ["Avremmo", "Abbiamo", "Avevamo"], answer: 0 },
        { q: "Sarebbe ___ possibile. (ser, cond. composto)", options: ["stato", "stata", "essere"], answer: 0 },
        { q: "Da parte ___, serve tempo. (nosotros)", options: ["nostra", "nostro", "noi"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "El tono del acuerdo",
      tip: "La negociación italiana sube en la objeción y baja en la concesión. «Avremmo preferito…» se dice con pesar contenido, nunca dramático. El cierre «restiamo intesi» es seco y definitivo: apretón de manos verbal.",
      pairs: [
        { a: "Avremmo preferito…", b: "Restiamo intesi.", note: "concesión y cierre" },
        { a: "Mi lasciate mediare?", b: "Sentiamo.", note: "mediación" },
        { a: "da parte nostra", b: "per parte mia", note: "posesión de postura" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Avremmo preferito otra cosa, ma… Restiamo intesi?»." },
        { kind: "semi", task: "Media un conflicto real (laboral, familiar): propuesta intermedia y cierre." },
        { kind: "comunicativo", task: "Mesa de negociación a tres: dos partes, un mediador, acuerdo final verbalizado." },
        { kind: "autentico", task: "Prepara tu «posizione» para una negociación real y ensáyala con condizionale composto." },
      ],
    },
    reading: {
      lines: [
        { it: "La negoziazione italiana premia la relazione: prima il caffè, poi i numeri.", es: "La negociación italiana premia la relación: primero el café, luego los números." },
        { it: "Il condizionale composto è l'arma della ferita elegante: dice il disappunto senza dichiarare guerra.", es: "El condicional compuesto es el arma de la herida elegante: dice el desacuerdo sin declarar la guerra." },
      ],
      question: "¿Qué premia la negociación italiana y para qué sirve el condicional compuesto?",
    },
    writing: {
      task: "Escribe el verbale del acuerdo (200 palabras): posiciones, propuesta mediadora, condiciones, plazos y cierre con condizionale composto.",
      minWords: 180,
      tips: ["avremmo preferito / sarebbe stato possibile", "restiamo intesi como cierre"],
      model: [
        "La dicitura A avrebbe consegnato a gennaio; tale termine si sarebbe rivelato impraticabile.",
        "Su proposta del mediatore, si concorda una consegna parziale (gennaio) e il saldo a febbraio, con penale ridotta.",
        "Le parti restano intese: conferma scritta entro venerdì.",
      ],
    },
    culture: {
      title: "El café antes que los números",
      text: "La negociación italiana arranca con un café y preguntas personales: la relación es el contrato antes del contrato. Los milaneses son más directos, los romanos más teatrales, los napolitanos más envolventes. El «verbale» final (acta) es sagrado: lo que no está escrito no existe.",
    },
    finalTask: {
      title: "Il tavolo delle tre parti",
      brief: "Simula la negociación completa: dos posiciones duras, tu mediación con ventana intermedia, objeción con condizionale composto y cierre verbalizado.",
      checklist: ["Usé 5 condizionali composti", "Creé una propuesta intermedia real", "El acuerdo queda verbalizado y claro"],
    },
    review: [
      { q: "Avremmo ___ (preferire) otra solución.", options: ["preferito", "preferendo", "preferito solo"], answer: 0 },
      { q: "«Restiamo intesi» =", options: ["seguimos discutiendo", "quedamos de acuerdo", "nos separamos"], answer: 1 },
      { q: "Sarebbe ___ possibile. (ser)", options: ["stato", "stata", "stati"], answer: 0 },
      { q: "En la negociación italiana, primero…", options: ["los números", "la relación (el café)", "el contrato"], answer: 1 },
    ],
    cando: [
      "Puedo mediar entre posiciones contrarias",
      "Uso el condizionale composto con elegancia",
      "Cierro acuerdos y los verbalizo con precisión",
    ],
  },

  {
    id: "cu-c1-05", n: 5, level: "C1",
    title: "Historia y memoria", titleIt: "Storia e memoria",
    img: "/images/letture/it-risorgimento-10.jpg",
    goal: "Narrar historia con trapassato remoto y concordancia de tiempos",
    goals: ["Usar trapassato remoto y consecutio temporum", "Narrar el Risorgimento y su memoria", "Analizar el uso público de la historia"],
    scenario: "Conferencia en el Vittoriano: «La memoria del Risorgimento hoy». Tras de ti, el Altare della Patria; ante ti, un público exigente. El trapassato remoto hace su entrada triunfal: «appena ebbe firmato, partì».",
    dialogue: [
      { speaker: "Pubblico", it: "Perché il Risorgimento interessa ancora oggi?", es: "¿Por qué el Risorgimiento interesa aún hoy?" },
      { speaker: "Tu", it: "Perché l'Italia nacque tardi e faticosamente: appena ebbe unito la penisola, dovette inventarsi un popolo.", es: "Porque Italia nació tarde y con esfuerzo: apenas hubo unido la península, tuvo que inventarse un pueblo." },
      { speaker: "Pubblico", it: "Ma fu davvero un'impresa popolare? O solo di élite?", es: "Pero ¿fue de verdad una empresa popular? ¿O solo de élites?" },
      { speaker: "Tu", it: "Dopo che Cavour ebbe ottenuto l'appoggio francese, il popolo seguì Garibaldi più col cuore che con la testa.", es: "Después de que Cavour hubo obtenido el apoyo francés, el pueblo siguió a Garibaldi más con el corazón que con la cabeza." },
      { speaker: "Pubblico", it: "E la memoria? Come la si celebra oggi?", es: "¿Y la memoria? ¿Cómo se la celebra hoy?" },
      { speaker: "Tu", it: "Con imbarazzo: appena si ebbero i 150 anni, si litigò sul costo della festa.", es: "Con embarazo: apenas se hubieron cumplido los 150 años, se discutió el coste de la fiesta." },
      { speaker: "Pubblico", it: "Un'Italia che si racconta ridendo o piangendo?", es: "¿Una Italia que se cuenta riendo o llorando?" },
      { speaker: "Tu", it: "L'Italia si racconta cantando: ogni storia che fu cantata, rimane.", es: "Italia se cuenta cantando: toda historia que fue cantada, queda." },
    ],
    comprehension: [
      { q: "¿Qué debió hacer Italia tras unir la península?", options: ["Inventarse un pueblo", "Declarar la guerra", "Cambiar de idioma oficial"], answer: 0 },
      { q: "¿Cómo siguió el pueblo a Garibaldi?", options: ["Con la cabeza", "Más con el corazón que con la cabeza", "No lo siguió"], answer: 1 },
      { q: "¿Cómo se celebra la memoria según el ponente?", options: ["Con fasto", "Con embarazo", "Con silencio"], answer: 1 },
    ],
    chunks: [
      { it: "appena ebbe firmato, partì", es: "apenas hubo firmado, partió" },
      { it: "dopo che Cavour ebbe ottenuto…", es: "después de que Cavour hubo obtenido…" },
      { it: "nacque tardi e faticosamente", es: "nació tarde y con esfuerzo" },
      { it: "inventarsi un popolo", es: "inventarse un pueblo" },
      { it: "più col cuore che con la testa", es: "más con el corazón que con la cabeza" },
      { it: "si litigò sul costo della festa", es: "se discutió el coste de la fiesta" },
    ],
    grammar: {
      focus: "Trapassato remoto y concordancia de tiempos",
      inductive: [
        { it: "Appena ebbe finito, uscì.", es: "Apenas hubo terminado, salió." },
        { it: "Dopo che ebbe parlato, tutti applaudirono.", es: "Después de que hubo hablado, todos aplaudieron." },
        { it: "Quando ebbe vinto, si ritirò.", es: "Cuando hubo vencido, se retiró." },
      ],
      rule: [
        "El trapassato remoto (ebbe + participio, fu + participio) expresa anterioridad inmediata respecto a un passato remoto. Solo vive tras appena, dopo che, quando — y solo en registro literario o histórico.",
        "La concordancia de tiempos en narración histórica: remoto (hechos) + imperfetto (decorado) + trapassato remoto (anterioridad). Es la partitura del historiador italiano.",
      ],
      topicId: "g3-c2-trapassato",
      gaps: [
        { q: "Appena ___ (arrivare), ripartì.", options: ["arrivava", "era arrivato", "ebbe arrivato"], answer: 2 },
        { q: "Dopo che ___ (parlare), tutti tacquero. (haber hablado, t.r.)", options: ["ebbe parlato", "aveva parlato", "parlò"], answer: 0 },
        { q: "Quando ebbe vinto, si ___ (ritirarse, remoto).", options: ["ritirava", "ritirò", "è ritirato"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "La solemnidad histórica",
      tip: "El trapassato remoto se dice con tempo lento y ceremonia: «appena EB-be par-LA-to». La conferencia histórica alterna solemnidad (datos) y sonrisa (anécdotas) — el público italiano lo espera todo.",
      pairs: [
        { a: "ebbe firmato", b: "aveva firmato", note: "remoto vs prossimo" },
        { a: "appena…", b: "dopo che…", note: "conectores del t.r." },
        { a: "nacque", b: "rimase", note: "remotos de nascere/rimanere" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Appena ebbe firmato, partì. Dopo che ebbe vinto, si ritirò»." },
        { kind: "semi", task: "Narra un hecho histórico italiano (o de tu país) con 4 trapassati remoti." },
        { kind: "comunicativo", task: "Conferencia + preguntas: la memoria histórica y su uso público hoy." },
        { kind: "autentico", task: "Lee un pasaje de un historiador italiano (Ginzburg, De Luna) e imita su tempo narrativo." },
      ],
    },
    reading: {
      letturaId: "it-risorgimento-10",
      question: "¿Cómo se hizo Italia según la lectura y qué fuerzas la impulsaron?",
    },
    writing: {
      task: "Escribe tu conferencia (220 palabras): un proceso histórico con remotos, trapassati remoti y una reflexión sobre su memoria actual.",
      minWords: 200,
      tips: ["appena / dopo che + trapassato remoto", "Alterna decorado (imperfetto) y hechos (remoto)"],
      model: [
        "Quando Garibaldi ebbe sbarcato in Sicilia, l'impresa parve impossibile; eppure avanzò.",
        "Appena l'Italia ebbe completato l'unità, dovette costruire un'identità comune: la scuola, l'esercito, la lingua.",
        "Ogni nazione che fu unita dall'alto, prima o poi si chiede chi la volle davvero.",
      ],
    },
    culture: {
      title: "El Vittoriano y el debate",
      text: "El Vittoriano (el «torta nuziale» de Roma, dicen los romanos) celebra a Vittorio Emanuele II y al Risorgimento. Cada aniversario reabre el debate: ¿revolución o cálculo de élites? La historia italiana se discute en TV, en los libros de Banti y De Luna, y en las cenas familiares con la misma pasión.",
    },
    finalTask: {
      title: "La mia lezione di storia",
      brief: "Imparte tu lección de historia de 5 minutos: proceso, protagonistas, un trapassato remoto por bloque y el debate de su memoria. En el Vittoriano imaginario.",
      checklist: ["Usé 4 trapassati remoti correctos", "Alterno hechos y decorado", "Abro el debate final con una pregunta"],
    },
    review: [
      { q: "Appena ebbe ___ (finire), uscì.", options: ["finiva", "finito", "finendo"], answer: 1 },
      { q: "El trapassato remoto vive tras…", options: ["appena, dopo che, quando", "se, perché, mentre", "solo dopo futuro"], answer: 0 },
      { q: "Dopo che ___ parlato, applauditono. (hablar, t.r.)", options: ["aveva", "ebbe", "ha"], answer: 1 },
      { q: "El Risorgimento culminó en…", options: ["1861", "1871", "1918"], answer: 0 },
    ],
    cando: [
      "Narro historia con concordancia de tiempos plena",
      "Uso trapassato remoto en registro culto",
      "Analizo el uso público de la memoria",
    ],
  },

  {
    id: "cu-c1-06", n: 6, level: "C1",
    title: "Literatura contemporánea", titleIt: "Letteratura contemporanea",
    img: "/images/vocab/letteratura.webp",
    goal: "Leer y comentar literatura italiana contemporánea",
    goals: ["Analizar estilo y voces narrativas", "Comentar un pasaje con precisión crítica", "Recomendar con argumentos literarios"],
    scenario: "Club de lectura del círculo cultural: «I giorni dell'abbandono» de Elena Ferrante o «La solitudine dei numeri primi». Te toca el comentario del pasaje: estilo, voz, tensión. El italiano literario contemporáneo es crudo y luminoso a la vez.",
    dialogue: [
      { speaker: "Conduttrice", it: "Ci legga il passaggio che ha scelto, e lo commenti.", es: "Léanos el pasaje que ha elegido y coméntelo." },
      { speaker: "Tu", it: "«Il corpo era una casa svuotata»: Ferrante usa la metafora della casa per il dolore.", es: "«El cuerpo era una casa vaciada»: Ferrante usa la metáfora de la casa para el dolor." },
      { speaker: "Conduttrice", it: "Che effetto fa questa immagine, secondo lei?", es: "¿Qué efecto produce esta imagen, según usted?" },
      { speaker: "Tu", it: "Sgomento: la casa è ciò che ci contiene, e qui contiene il vuoto. È di una precisione brutale.", es: "Desasosiego: la casa es lo que nos contiene, y aquí contiene el vacío. Es de una precisión brutal." },
      { speaker: "Conduttrice", it: "E la voce narrante? Come la descriverebbe?", es: "¿Y la voz narrante? ¿Cómo la describiría?" },
      { speaker: "Tu", it: "Nuda, senza cortesie: dice l'indicibile come se fosse una lista della spesa.", es: "Desnuda, sin cortesías: dice lo indecible como si fuera una lista de la compra." },
      { speaker: "Conduttrice", it: "Perché consigliare questo libro a chi studia italiano?", es: "¿Por qué recomendar este libro a quien estudia italiano?" },
      { speaker: "Tu", it: "Perché insegna che l'italiano può essere chirurgico: ogni parola è necessaria.", es: "Porque enseña que el italiano puede ser quirúrgico: cada palabra es necesaria." },
    ],
    comprehension: [
      { q: "¿Qué metáfora analiza del pasaje?", options: ["La casa vaciada", "El mar", "El fuego"], answer: 0 },
      { q: "¿Cómo describe la voz narrante?", options: ["Desnuda, sin cortesías", "Ornamentada", "Irónica"], answer: 0 },
      { q: "¿Por qué recomendar el libro?", options: ["Es fácil", "Enseña el italiano quirúrgico, cada palabra necesaria", "Es corto"], answer: 1 },
    ],
    chunks: [
      { it: "una casa svuotata", es: "una casa vaciada" },
      { it: "di una precisione brutale", es: "de una precisión brutal" },
      { it: "dice l'indicibile", es: "dice lo indecible" },
      { it: "come se fosse una lista della spesa", es: "como si fuera una lista de la compra" },
      { it: "la voce narrante", es: "la voz narrante" },
      { it: "ogni parola è necessaria", es: "cada palabra es necesaria" },
    ],
    grammar: {
      focus: "El comentario literario: consecutivas e intensificadores",
      inductive: [
        { it: "È di una precisione tale che stordisce.", es: "Es de una precisión tal que aturde." },
        { it: "Scrive così bene che sembra facile.", es: "Escribe tan bien que parece fácil." },
        { it: "Tanto brutale da diventare vera.", es: "Tan brutal que se vuelve verdadera." },
      ],
      rule: [
        "La crítica literaria C1 usa consecutivas: tale… che, così… che, tanto… da. E intensificadores de precisión: di una precisione brutale, di una crudeltà essenziale, aforistico.",
        "Léxico del comentario: metafora, voce narrante, incipit, ellissi, climax, andamento (ritmo del período). Y los autores: Ferrante, Starnone, Ammaniti, Ginzburg, Elsa Morante.",
      ],
      topicId: "g-c2-idiomi",
      gaps: [
        { q: "È di un talento ___ che stupisce.", options: ["tale", "tanto", "così"], answer: 0 },
        { q: "Scrive ___ bene che sembra semplice.", options: ["tale", "così", "tanto a"], answer: 1 },
        { q: "Troppo brutale ___ essere dimenticata. (como para)", options: ["da", "che", "di"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "Leer literatura en voz alta",
      tip: "La lectura literaria respeta el tempo del texto: lenta en las metáforas, seca en las listas, suspensive en los puntos suspensivos. «L'indicibile» se dice con las vocales abiertas: i-ni-DI-bi-le.",
      pairs: [
        { a: "l'indicibile", b: "l'indecifrabile", note: "adjetivos difíciles" },
        { a: "di una precisione brutale", b: "così bene", note: "intensificadores" },
        { a: "Elena Ferrante", b: "Elsa Morante", note: "dos Fer/Morante distintas" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Lee en voz alta un pasaje literario con su tempo: metáfora lenta, lista seca." },
        { kind: "semi", task: "Comenta un pasaje (real o recordado): imagen, voz, efecto, con 3 consecutivas." },
        { kind: "comunicativo", task: "Club de lectura: lectura + comentario + debate sobre la novela." },
        { kind: "autentico", task: "Lee un cuento italiano contemporáneo (Starnone, Ammaniti) y graba tu comentario de 2 minutos." },
      ],
    },
    reading: {
      sourceId: "rd-6",
      question: "¿Qué estilo describe la lectura sobre Ginzburg y qué silencios la habitan?",
    },
    writing: {
      task: "Escribe tu comentario crítico (220 palabras): cita, análisis de imagen y voz con consecutivas, contexto autoral y por qué leerla.",
      minWords: 200,
      tips: ["Cita breve en cursiva mental entre «»", "tal…che / così…che / tanto…da en cada bloque"],
      model: [
        "«Il corpo era una casa svuotata»: l'immagine è di una precisione tale che stordisce.",
        "La voce narrante è così nuda da sembrare fredda, e invece scotta.",
        "Ferrante insegna all'italiano una lezione crudele: ogni parola è necessaria, nessuna è di conforto.",
      ],
    },
    culture: {
      title: "Las voces de ahora",
      text: "La narrativa italiana actual es un coro: la Ferrante anónima y volcánica, Starnone maestro del período, Ammaniti y el «italiano young adult» inventado, Nicola Lagioia y la Nápoles de Saviano. El Premio Strega decide cada junio qué libro hablará todo el verano — y las polémicas venden más que los premios.",
    },
    finalTask: {
      title: "Il circolo di lettura",
      brief: "Dirige tu club de lectura: lee el pasaje, coméntalo con consecutivas e intensificadores, y abre el debate con una pregunta incómoda.",
      checklist: ["Leí con el tempo del texto", "Usé 4 consecutivas e intensificadores", "El debate se abre con pregunta real"],
    },
    review: [
      { q: "È ___ bravo che fa paura.", options: ["tale", "così", "tanto"], answer: 1 },
      { q: "di una precisione ___ che stordisce", options: ["tale", "così", "tanto"], answer: 0 },
      { q: "«La voce narrante» =", options: ["la voz que narra", "la narración oral", "el narrador externo"], answer: 0 },
      { q: "El Premio Strega se concede…", options: ["en junio", "en diciembre", "cada dos años"], answer: 0 },
    ],
    cando: [
      "Leo y comento literatura contemporánea",
      "Analizo estilo con vocabulario crítico",
      "Uso consecutivas e intensificadores con precisión",
    ],
  },

  {
    id: "cu-c1-07", n: 7, level: "C1",
    title: "El italiano institucional", titleIt: "L'italiano istituzionale",
    img: "/images/vocab/istituzioni.webp",
    goal: "Descodificar y producir lenguaje jurídico-burocrático",
    goals: ["Entender documentos oficiales y burocráticos", "Escribir instancias y reclamos formales", "Reconocer el peso de los institucionalismos"],
    scenario: "Te ha llegado una lettera dell'Agenzia delle Entrate que parece arameo antiguo. Y peor: tienes que responder con una istanza formal. El italiano burocrático es una lengua dentro de la lengua — y se puede domar.",
    dialogue: [
      { speaker: "Funzionario", it: "Ha ricevuto la comunicazione? Deve presentare un'istanza entro trenta giorni.", es: "¿Ha recibido la comunicación? Debe presentar una instancia antes de treinta días." },
      { speaker: "Tu", it: "Ho ricevuto, ma non ne comprendo il motivo: la causale cita un articolo senza spiegazione.", es: "La he recibido, pero no comprendo su motivo: la causal cita un artículo sin explicación." },
      { speaker: "Funzionario", it: "L'articolo 25-bis riguarda la mancato versamento. Verifichi il modello F24.", es: "El artículo 25-bis se refiere al pago omitido. Verifique el modelo F24." },
      { speaker: "Tu", it: "Il modello F24 risulta regolarmente versato: allego la ricevuta del pagamento.", es: "El modelo F24 resulta regularmente pagado: adjunto el recibo del pago." },
      { speaker: "Funzionario", it: "In tal caso, produca documentazione comprovante e la trasmetta via PEC.", es: "En tal caso, produzca documentación comprobante y transmítala por PEC." },
      { speaker: "Tu", it: "Provvederò oggi stesso. La istanza andrà corredata di marca da bollo?", es: "Proveeré hoy mismo. ¿La instancia deberá ir acompañada de sello?" },
      { speaker: "Funzionario", it: "No, per importi inferiori a 50 euro è esente. Resto a disposizione.", es: "No, para importes inferiores a 50 euros está exenta. Quedo a disposición." },
      { speaker: "Tu", it: "La ringrazio: la burocrazia è dura, ma il funzionario no.", es: "Le agradezco: la burocracia es dura, pero el funcionario no." },
    ],
    comprehension: [
      { q: "¿Qué debe presentar antes de 30 días?", options: ["Una instancia", "Un recurso de amparo", "Nada"], answer: 0 },
      { q: "¿Qué alega el ciudadano?", options: ["Que el F24 está pagado (adjunta recibo)", "Que no recibió nada", "Que no sabe italiano"], answer: 0 },
      { q: "¿Necesita marca da bollo?", options: ["Sí", "No, exenta para importes < 50 €", "Solo en diciembre"], answer: 1 },
    ],
    chunks: [
      { it: "presentare un'istanza", es: "presentar una instancia" },
      { it: "risulta regolarmente versato", es: "resulta regularmente pagado" },
      { it: "allego la ricevuta", es: "adjunto el recibo" },
      { it: "produca documentazione comprovante", es: "produzca documentación comprobante" },
      { it: "Provvederò oggi stesso.", es: "Proveeré hoy mismo." },
      { it: "andrà corredata di…", es: "deberá ir acompañada de…" },
    ],
    grammar: {
      focus: "El lenguaje jurídico: pasivos y futuros de obligación",
      inductive: [
        { it: "La domanda andrà presentata entro trenta giorni.", es: "La solicitud deberá presentarse antes de treinta días." },
        { it: "Il versamento risulta effettuato.", es: "El pago resulta efectuado." },
        { it: "Si trasmette la documentazione via PEC.", es: "Se transmite la documentación por PEC." },
      ],
      rule: [
        "El burocrático se construye con: passivo (è richiesto, va presentato), resultare + participio (risulta versato = «consta pagado»), andare + participio como obligación (l'istanza andrà corredata).",
        "Léxico sagrado: istanza, allegato, versamento, esente, PEC, marca da bollo, protocollo, decorrenza (vencimiento), accertamento (comprobación). El italiano institucional evita «dovere» a favor de «andare + participio».",
      ],
      topicId: "g3-c2-burocratico",
      gaps: [
        { q: "La domanda ___ (presentarse, andare + part.) entro 30 giorni.", options: ["andrà presentata", "deve presentare", "è presentata"], answer: 0 },
        { q: "Il pagamento ___ effettuato. (constar)", options: ["risulta", "risulta essere solo", "è risultato"], answer: 0 },
        { q: "Allego la ricevuta del ___. (pago)", options: ["versamento", "versare", "versato"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "Siglas y solemnidad administrativa",
      tip: "La burocracia se deletrea: PEC (pi-e-ci), F24 (effe-ventiquattro), ISEE. Las frases institucionales se dicen lentas y planas: «l'istanza andrà corredata di marca da bollo» tiene el tempo de un sello estampándose.",
      pairs: [
        { a: "PEC", b: "F24", note: "siglas diarias" },
        { a: "istanza", b: "esente", note: "léxico administrativo" },
        { a: "andrà presentata", b: "è presentata", note: "obligación vs estado" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «L'istanza andrà presentata entro trenta giorni. Il versamento risulta effettuato»." },
        { kind: "semi", task: "Explica a un amigo extranjero cómo pedir un permiso italiano (dichiarazione, allegati, PEC)." },
        { kind: "comunicativo", task: "Ventanilla: presentación del caso, objeción con prueba, petición de exención." },
        { kind: "autentico", task: "Descarga un modulo oficial italiano (ISTAT, Agenzia) y redáctale la istanza de respuesta." },
      ],
    },
    reading: {
      lines: [
        { it: "Il burocratese nasce per la precisione e muore per l'oscurità: legge il classico «Il cimitero di Praga» di Eco per vendetta.", es: "El burocratés nace por la precisión y muere por la oscuridad: lea el clásico de Eco como venganza." },
        { it: "Regola pratica: se una frase supera le tre righe senza verbo principale, è burocrazia; se supera le sei, è burocrazia colta.", es: "Regla práctica: si una frase supera las tres líneas sin verbo principal, es burocracia; si supera las seis, es burocracia culta." },
      ],
      question: "¿Cuándo es «burocracia» una frase según la regla práctica?",
    },
    writing: {
      task: "Escribe una istanza formal (200 palabras): oggetto, exposición de hechos, petición, documentación adjunta y fórmulas de cierre.",
      minWords: 180,
      tips: ["Oggetto: en negrita al inicio", "andrà/riguarda/risulta en cada bloque"],
      model: [
        "Oggetto: istanza di rettifica – avviso pagamento n. 12345.",
        "In data 12 marzo ho ricevuto l'avviso in oggetto, con il quale si richiederebbe il versamento di € 45,00.",
        "Il predetto importo risulta regolarmente versato il 10 gennaio (ricevuta allegata). Si chiede, pertanto, l'annullamento dell'avviso. Cordiali saluti.",
      ],
    },
    culture: {
      title: "El país de las filas",
      text: "La burocracia italiana es protagonista cultural: de «La grande bellezza» a las queues dell'INPS. La PEC (posta elettronica certificata) es el correo oficial con valor legal, y la marca da bollo (16 €) es el impuesto del papel sagrado. Regla de supervivencia: nunca discutas en ventanilla; pregunta, sonríe y vuelve con papeles.",
    },
    finalTask: {
      title: "La mia istanza perfetta",
      brief: "Redacta y presenta tu istanza completa: oggetto, hechos, pruebas, petición y cierre. Luego explícala en italiano llano a un amigo: la traducción es la prueba de que la dominas.",
      checklist: ["La istanza usa andare + participio y resultare", "Cada hecho tiene su prueba adjunta", "La versión llana suena natural"],
    },
    review: [
      { q: "La domanda andrà ___ (firmarse).", options: ["firmata", "firmare", "firmata solo"], answer: 0 },
      { q: "«Risulta versato» =", options: ["debe pagarse", "consta pagado", "se pagará"], answer: 1 },
      { q: "PEC es…", options: ["un correo con valor legal certificado", "una tasa", "un ministerio"], answer: 0 },
      { q: "La marca da bollo cuesta…", options: ["16 €", "50 €", "5 €"], answer: 0 },
    ],
    cando: [
      "Entiendo documentos burocráticos italianos",
      "Redacto instancias formales impecables",
      "Traduzco lo institucional a italiano llano",
    ],
  },

  {
    id: "cu-c1-08", n: 8, level: "C1",
    title: "Conferencias y presentaciones", titleIt: "Conferenze e presentazioni",
    img: "/images/vocab/professioni.webp",
    goal: "Hablar en público con eficacia profesional plena",
    goals: ["Estructurar una conferencia con dislocazioni retóricas", "Gestionar preguntas difíciles", "Usar marcadores del discurso oral"],
    scenario: "TEDx local en italiano: ocho minutos para tu idea. Público mixto, cronómetro impío y un moderador que corta. Las dislocazioni a la izquierda («la storia, ce l'ha chi la cerca») son tu firma de italianidad avanzada.",
    dialogue: [
      { speaker: "Moderatore", it: "Otto minuti, domande incluse. Prego!", es: "Ocho minutos, preguntas incluidas. ¡Adelante!" },
      { speaker: "Tu", it: "La padronanza di una lingua, ve lo dico subito, non la dà il vocabolario: la dà il ritmo.", es: "El dominio de una lengua, os lo digo enseguida, no lo da el vocabulario: lo da el ritmo." },
      { speaker: "Moderatore", it: "Interessante: ce lo può dimostrare in un esempio?", es: "Interesante: ¿nos lo puede demostrar con un ejemplo?" },
      { speaker: "Tu", it: "Il congedo, ad esempio: gli italiani lo adorano. Il libro, me lo sono portato apposta.", es: "El congedo, por ejemplo: los italianos lo adoran. El libro, me lo he traído a propósito." },
      { speaker: "Pubblico", it: "Ma il ritmo senza grammatica non basta, no?", es: "Pero el ritmo sin gramática no basta, ¿no?" },
      { speaker: "Tu", it: "Domanda giusta, e la risposta è duplice: il ritmo apre la porta, la grammatica la tiene aperta.", es: "Pregunta justa, y la respuesta es doble: el ritmo abre la puerta, la gramática la mantiene abierta." },
      { speaker: "Pubblico", it: "E per i hispanofoni, quale è il rischio maggiore?", es: "¿Y para los hispanohablantes, cuál es el riesgo mayor?" },
      { speaker: "Tu", it: "La falsa sicurezza: ci somigliamo tanto che a volte non ci accorgiamo di quando ci capiamo male. E questo, credetemi, è il punto.", es: "La falsa seguridad: nos parecemos tanto que a veces no nos damos cuenta de cuándo nos entendemos mal. Y esto, creedme, es el punto." },
    ],
    comprehension: [
      { q: "¿Qué da el dominio de una lengua según el ponente?", options: ["El vocabulario", "El ritmo", "La gramática sola"], answer: 1 },
      { q: "¿Cuál es el riesgo mayor para hispanohablantes?", options: ["La pronunciación", "La falsa seguridad (parecidos que esconden malentendidos)", "El vocabulario"], answer: 1 },
      { q: "¿Qué relación hay entre ritmo y gramática?", options: ["El ritmo abre la puerta, la gramática la mantiene abierta", "Son lo mismo", "No relación"], answer: 0 },
    ],
    chunks: [
      { it: "ve lo dico subito", es: "os lo digo enseguida" },
      { it: "Il libro, me lo sono portato apposta.", es: "El libro, me lo he traído a propósito." },
      { it: "la risposta è duplice", es: "la respuesta es doble" },
      { it: "tiene aperta la porta", es: "mantiene abierta la puerta" },
      { it: "credetemi, è il punto", es: "creedme, es el punto" },
      { it: "ci capiamo male", es: "nos entendemos mal" },
    ],
    grammar: {
      focus: "Dislocazioni a sinistra: el habla que marca el tema",
      inductive: [
        { it: "La padronanza, ve lo dico subito, non la dà il vocabolario.", es: "El dominio, os lo digo ya, no lo da el vocabulario." },
        { it: "Il libro, me lo sono portato apposta.", es: "El libro, me lo he traído a propósito." },
        { it: "Gli italiani, il caffè lo prendono in piedi.", es: "Los italianos, el café lo toman de pie." },
      ],
      rule: [
        "La dislocazione a sinistra anuncia el tema al inicio y lo retoma con pronombre («Il libro, me lo sono portato»): es LA firma del italiano hablado culto. Marca énfasis sin gritar.",
        "Marcadores del discurso público: ve lo dico subito, credetemi, e questo è il punto, in due parole, tornando alla domanda. Gestión de preguntas: domanda giusta, la risposta è duplice, mi lasci aggiungere.",
      ],
      topicId: "g3-c1-dislocazioni",
      gaps: [
        { q: "Il libro, ___ sono portato apposta. (me lo)", options: ["mi lo sono", "me lo sono", "me ne sono"], answer: 1 },
        { q: "Il caffè, gli italiani ___ prendono in piedi. (lo)", options: ["il", "lo", "gli"], answer: 1 },
        { q: "La storia, ce ___ ha chi la cerca. (la)", options: ["la", "l'", "ne"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "El tempo del escenario",
      tip: "La dislocazione se pronuncia con pausa tras el tema: «Il libro, | me lo sono portato». Los marcadores («ve lo dico», «credetemi») se dicen al público, mirando: son el contacto físico del discurso.",
      pairs: [
        { a: "ve lo dico", b: "ce l'ho", note: "clíticos combinados" },
        { a: "credetemi", b: "ascoltatemi", note: "imperativos de contacto" },
        { a: "è il punto", b: "è la domanda", note: "remates" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite con pausas: «Il ritmo, | ve lo dico, | non è tutto». Y «Il libro, | me lo sono portato»." },
        { kind: "semi", task: "Da tu mini-charla de 3 minutos con 4 dislocazioni y 3 marcadores de contacto." },
        { kind: "comunicativo", task: "TEDx completo: 8 minutos, 2 preguntas difíciles, cierre aforístico." },
        { kind: "autentico", task: "Graba tu TEDx real y compáralo con uno italiano: tempo, pausas, contacto." },
      ],
    },
    reading: {
      lines: [
        { it: "L'italiano parlato eccelle quando aggancia l'orecchio: tema iniziale, pausa, commento.", es: "El italiano hablado destaca cuando engancha el oído: tema inicial, pausa, comentario." },
        { it: "Chi disloca bene, possiede la lingua: non dice solo cosa, dice a chi sta parlando.", es: "Quien disloca bien, posee la lengua: no dice solo qué, dice a quién le habla." },
      ],
      question: "¿Qué demuestra dominar la dislocazione según el fragmento?",
    },
    writing: {
      task: "Escribe el guion de tu charla (220 palabras) con dislocazioni marcadas, marcadores de contacto y cierre aforístico.",
      minWords: 200,
      tips: ["Tema, pausa (|), pronombre: márca las pausas", "Un aforismo de cierre: la última frase se recuerda"],
      model: [
        "La paura di parlare, | ve lo confesso, l'ho avuta anch'io.",
        "Il pubblico, ce l'avrete notato, non ascolta le parole: ascolta le pause.",
        "E questo, in due parole, è il segreto: la lingua, credetemi, la parla chi la tace bene.",
      ],
    },
    culture: {
      title: "El arte del público italiano",
      text: "El público italiano interrumpe, aplaude a mitad y hace preguntas-lucha. El ponente que sobrevive usa las herramientas del teatro: dislocazioni, anafore, aforismos. Los TEDx italianos y los discorsi di Commencement (el de Roberto Benigni es antológico) son gimnasios de esta oratoria viva.",
    },
    finalTask: {
      title: "Il mio TEDx in italiano",
      brief: "Sube al escenario: 8 minutos de charla con dislocazioni, contacto con el público, gestión de dos preguntas difíciles y aforismo final. Cronómetro en mano.",
      checklist: ["Usé 4 dislocazioni con pausa correcta", "Los marcadores miran al público", "El cierre es un aforismo memorable"],
    },
    review: [
      { q: "Il libro, ___ portato apposta.", options: ["me lo sono", "mi lo sono", "me ne sono"], answer: 0 },
      { q: "La dislocazione a sinistra sirve para…", options: ["marcar el tema con énfasis", "preguntar", "conjugar"], answer: 0 },
      { q: "«Credetemi» es…", options: ["indicativo", "imperativo de contacto", "subjuntivo"], answer: 1 },
      { q: "El público italiano…", options: ["escucha en silencio", "interrumpe y aplaude a mitad", "se va antes"], answer: 1 },
    ],
    cando: [
      "Hablo en público con ritmo y contacto",
      "Uso dislocazioni como un nativo culto",
      "Gestiono preguntas difíciles con elegancia",
    ],
  },

  {
    id: "cu-c1-09", n: 9, level: "C1",
    title: "Lengua y sociedad", titleIt: "Lingua e società",
    img: "/images/vocab/comunicazione.webp",
    goal: "Analizar la evolución del italiano: neologismos, anglicismos, futuro",
    goals: ["Analizar neologismos y anglicismos con criterio", "Debatir normativismo vs naturalismo", "Proyectar el futuro del idioma"],
    scenario: "Mesa redonda en el Festival della Lingua Italiana: «L'italiano tra anglicismi e neologismi: resistere o evolversi?». Lingüistas, puristas y tú: la defensa del cambio como vida.",
    dialogue: [
      { speaker: "Purista", it: "L'italiano sta morendo: diciamo «meeting» e «smartphone» come se Dante non fosse mai nato!", es: "El italiano está muriendo: ¡decimos «meeting» y «smartphone» como si Dante nunca hubiera nacido!" },
      { speaker: "Tu", it: "Con rispetto: le lingue non muoiono per prestito, muoiono per disuso. L'anglicismo è sintomo di vita.", es: "Con respeto: las lenguas no mueren por préstamo, mueren por desuso. El anglicismo es síntoma de vida." },
      { speaker: "Purista", it: "Ma il lessico si impoverisce! I giovani non conoscono più «bozza» né «attimo».", es: "¡Pero el léxico se empobrece! Los jóvenes ya no conocen «bozza» ni «attimo»." },
      { speaker: "Tu", it: "Alcuni lossi sì; altri ne nascono. «Doxare», «svaporare» nel senso nuovo: la lingua respira.", es: "Algunos lexemas sí; otros nacen. «Doxare», «svaporare» en el sentido nuevo: la lengua respira." },
      { speaker: "Moderatrice", it: "E l'Accademia della Crusca? Che ruolo ha?", es: "¿Y la Accademia della Crusca? ¿Qué papel tiene?" },
      { speaker: "Tu", it: "Da fanalino di coda a faro: descrive più che prescrive, e guarda caso funziona.", es: "De luz trasera a faro: describe más que prescribe, y mira por dónde funciona." },
      { speaker: "Purista", it: "Quindi per lei va bene tutto? «Asciugare i piatti» diventerà «dryare»?", es: "¿Entonces para usted vale todo? ¿«Secar los platos» se volverá «dryare»?" },
      { speaker: "Tu", it: "No: va bene ciò che la comunità adotta. La lingua, mi creda, è democratica per natura.", es: "No: vale lo que la comunidad adopta. La lengua, créame, es democrática por naturaleza." },
    ],
    comprehension: [
      { q: "¿Cuándo muere una lengua según el protagonista?", options: ["Por préstamos", "Por desuso", "Por academias"], answer: 1 },
      { q: "¿Qué papel atribuye a la Crusca?", options: ["Prescribe", "Describe más que prescribe", "Prohíbe"], answer: 1 },
      { q: "¿Qué legitima un uso lingüístico?", options: ["La academia", "Lo que la comunidad adopta", "Los diccionarios"], answer: 1 },
    ],
    chunks: [
      { it: "le lingue muoiono per disuso", es: "las lenguas mueren por desuso" },
      { it: "è sintomo di vita", es: "es síntoma de vida" },
      { it: "il lessico si impoverisce", es: "el léxico se empobrece" },
      { it: "descrivere più che prescrivere", es: "describir más que prescribir" },
      { it: "va bene ciò che la comunità adotta", es: "vale lo que la comunidad adopta" },
      { it: "democratica per natura", es: "democrática por naturaleza" },
    ],
    grammar: {
      focus: "El estilo del ensayo oral: jerarquías y énfasis",
      inductive: [
        { it: "Le lingue non muoiono per prestito: muoiono per disuso.", es: "Las lenguas no mueren por préstamo: mueren por desuso." },
        { it: "Descrive più che prescrive.", es: "Describe más que prescribe." },
        { it: "La lingua, mi creda, è democratica.", es: "La lengua, créame, es democrática." },
      ],
      rule: [
        "El C1 argumenta con paralelismos («non per X: per Y»), comparativas de infinitivo (più che + infinito) y incisos apelativos (mi creda, guardi, tenga presente).",
        "Léxico del metalenguaje: neologismo, anglicismo, prestito, lessico, locuzione, registro, volgare vs illustre, standard e neostandard. Y los actores: Crusca, Treccani, Zingarelli.",
      ],
      topicId: "g-c2-stile",
      gaps: [
        { q: "Descrive più che ___. (prescribir)", options: ["prescrivere", "prescrive", "prescrivesse"], answer: 0 },
        { q: "Non è pigrizia: è ___. (elegir)", options: ["scelta", "scelto", "scegliere"], answer: 0 },
        { q: "La lingua, ___, è viva. (créame)", options: ["mi creda", "creda mi", "credamí"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "Los anglicismos a la italiana",
      tip: "Los anglicismos se italianizan: «smartworking» (smart-uòrking), «influencer» con acento llano final. El purista los escupe; el lingüista los canta. Pronúncialos como los italianos, no como en inglés: es la prueba de fuego.",
      pairs: [
        { a: "meeting", b: "feedback", note: "anglicismes italianizados" },
        { a: "neologismo", b: "prestito", note: "metalenguaje" },
        { a: "più che", b: "anziché", note: "comparativas cultas" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite el paralelismo: «Non muoiono per prestito: muoiono per disuso»." },
        { kind: "semi", task: "Analiza 3 neologismos de tu español con criterio lingüístico (vida, no suciedad)." },
        { kind: "comunicativo", task: "Mesa redonda: purista vs naturalista, 4 turnos, síntesis final moderada." },
        { kind: "autentico", task: "Lee un artículo de la Crusca online y roba 3 argumentos para tu próxima tertulia." },
      ],
    },
    reading: {
      sourceId: "rd-14",
      question: "¿Qué imagen da la lectura de la lengua como paisaje y qué capas la componen?",
    },
    writing: {
      task: "Escribe tu intervención (220 palabras): tesis sobre el cambio lingüístico, 3 ejemplos analizados, concesión al purismo y cierre aforístico.",
      minWords: 200,
      tips: ["Paralelismos «non per X: per Y»", "Incisos apelativos (mi creda)"],
      model: [
        "Le lingue non declinano per colpa dei prestiti: declinano quando nessuno le abita.",
        "L'anglicismo, più che minaccia, è termometro: misura ciò che una comunità vive e importare.",
        "La lingua, mi creda, è come l'acqua: se non si muove, non è viva — è solo pulita.",
      ],
    },
    culture: {
      title: "La Crusca y la querelle",
      text: "La Accademia della Crusca (1583) es la más antigua institución lingüística de Europa: nació para «despajar» el italiano como el grano. Hoy su consultorio lingüístico responde dudas de millones de italianos con humor. La eterna querelle entre puristas y naturalistas es, en sí misma, un rito nacional saludable.",
    },
    finalTask: {
      title: "La mia intervista al festival",
      brief: "Participa en la mesa redonda: tesis con paralelismos, 3 ejemplos reales analizados, réplica al purista y cierre aforístico que la sala repita al salir.",
      checklist: ["Analizo ejemplos con criterio, no con oído", "Repliqué con paralelismo perfecto", "El aforismo final es memorable"],
    },
    review: [
      { q: "Descrive più che ___.", options: ["prescrivere", "prescrive", "prescriverà"], answer: 0 },
      { q: "Un «prestito» es…", options: ["un préstamo léxico", "un error", "un arcaísmo"], answer: 0 },
      { q: "La Crusca…", options: ["prohíbe anglicismos", "describe y orienta la lengua", "es un diccionario"], answer: 1 },
      { q: "«Per disuso» =", options: ["por abuso", "por desuso", "por uso"], answer: 1 },
    ],
    cando: [
      "Analizo cambio lingüístico con criterio",
      "Debato normativismo vs naturalismo",
      "Produzco aforismos y paralelismos eficaces",
    ],
  },

  {
    id: "cu-c1-10", n: 10, level: "C1",
    title: "Misión: el ensayo", titleIt: "Missione: il saggio breve",
    img: "/images/letture/cult-arte-18.jpg",
    goal: "Repaso final C1: el saggio breve italiano por excelencia",
    goals: ["Repasar las funciones C1 en cadena", "Escribir un saggio breve (tipo esame)", "Autoevaluarte con el can-do C1"],
    scenario: "Fin de nivel C1: el «saggio breve» de tipo ministerial italiano. Documento fuente, análisis, argumentación y conclusión en 400 palabras. El ejercicio reina de los exámenes universitarios italianos — y tu última prueba antes del C2.",
    dialogue: [
      { speaker: "Esaminatore", it: "Le consegno la traccia: un articolo sul turismo culturale, con quattro documenti.", es: "Le entrego la traza: un artículo sobre turismo cultural, con cuatro documentos." },
      { speaker: "Tu", it: "Grazie. La linea che intravedo: il turismo come minaccia e come risorsa insieme.", es: "Gracias. La línea que intuyo: el turismo como amenaza y recurso a la vez." },
      { speaker: "Esaminatore", it: "Come strutturerebbe il saggio?", es: "¿Cómo estructuraría el ensayo?" },
      { speaker: "Tu", it: "Titolo, tesi, tre capoversi (documento, commento, nesso) e chiusura aforistica.", es: "Título, tesis, tres párrafos (documento, comentario, nexo) y cierre aforístico." },
      { speaker: "Esaminatore", it: "Attenzione ai connettivi: la coesione vale quanto il contenuto.", es: "Atención a los conectores: la cohesión vale tanto como el contenido." },
      { speaker: "Tu", it: "Lo so: pertanto, nondimeno, di conseguenza. Il saggio respira attraverso i passaggi.", es: "Lo sé: por tanto, no obstante, en consecuencia. El ensayo respira a través de los pasajes." },
      { speaker: "Esaminatore", it: "E la sua voce? Un saggio senza voce è un riassunto.", es: "¿Y su voz? Un ensayo sin voz es un resumen." },
      { speaker: "Tu", it: "La metterò in ogni nesso: chi analizza senza prendere posizione, non ha scritto nulla.", es: "La pondré en cada nexo: quien analiza sin tomar posición, no ha escrito nada." },
    ],
    comprehension: [
      { q: "¿Cuál es la línea del ensayo?", options: ["Turismo solo amenaza", "Turismo como amenaza y recurso a la vez", "Turismo irrelevante"], answer: 1 },
      { q: "¿Cómo estructura el saggio?", options: ["Título, tesis, 3 párrafos, cierre aforístico", "Lista de datos", "Solo citas"], answer: 0 },
      { q: "¿Qué vale tanto como el contenido?", options: ["La extensión", "La cohesión (los conectores)", "La caligrafía"], answer: 1 },
    ],
    chunks: [
      { it: "La linea che intravedo è…", es: "La línea que intuyo es…" },
      { it: "come minaccia e come risorsa", es: "como amenaza y recurso" },
      { it: "pertanto, nondimeno, di conseguenza", es: "por tanto, no obstante, en consecuencia" },
      { it: "il saggio respira attraverso i passaggi", es: "el ensayo respira a través de los pasajes" },
      { it: "chi analizza senza prendere posizione…", es: "quien analiza sin tomar posición…" },
      { it: "un saggio senza voce è un riassunto", es: "un ensayo sin voz es un resumen" },
    ],
    grammar: {
      focus: "Repaso C1: el arsenal completo del ensayo",
      inductive: [
        { it: "Il dato, una volta interpretato, diventa tesi.", es: "El dato, una vez interpretado, se vuelve tesis." },
        { it: "Pertanto il nesso è evidente; nondimeno, resta il rovescio.", es: "Por tanto el nexo es evidente; no obstante, queda el reverso." },
        { it: "Di conseguenza, la posizione che sostengo è duplice.", es: "En consecuencia, la posición que sostengo es doble." },
      ],
      rule: [
        "Repaso exprés C1: nominalizaciones, ne abstracto, consecutivas, finali e causali, trapassato remoto, condizionale composto, dislocazioni, andare + participio, reformuladores (ossia, vale a dire).",
        "El saggio breve pide: título que ya argumente, tesis en el primer párrafo, un dato + un comentario por párrafo, conectores de nivel (pertanto, nondimeno, di conseguenza) y una voz explícita. La conclusión no resume: abre.",
      ],
      topicId: "g3-c2-sequenza-tempi",
      gaps: [
        { q: "Il dato, ___ interpretato, diventa tesi.", options: ["una volta", "quando che", "dopo di"], answer: 0 },
        { q: "___ , resto della mia idea. (no obstante)", options: ["Pertanto", "Nondimeno", "Di conseguenza"], answer: 1 },
        { q: "La tesi che ___ è duplice. (sostener)", options: ["sostengo", "sostenga", "sostenere"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "Leer el saggio en voz alta",
      tip: "El saggio se lee con autoridad serena: los conectores se pronuncian marcados (pertanto… | nondimeno…), la tesis con firmeza, el aforismo final lento y bajo. Es la última lectura del nivel: hazla sonar a editorial de domingo.",
      pairs: [
        { a: "pertanto", b: "nondimeno", note: "conectores de nivel" },
        { a: "una volta interpretato", b: "di conseguenza", note: "ablativo y consecuencia" },
        { a: "la linea che intravedo", b: "la tesi che sostengo", note: "tu voz en el ensayo" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Pertanto… nondimeno… di conseguenza…»: tres pisos de un solo ensayo." },
        { kind: "semi", task: "Presenta tu saggio en 3 minutos: tesis, 3 datos comentados, aforismo final." },
        { kind: "comunicativo", task: "Defensa ante esaminatore: estructura, voz, conectores y una pregunta difícil." },
        { kind: "autentico", task: "Escribe el saggio completo (400 palabras) sobre un tema real de tu campo y lee la conclusión en voz alta." },
      ],
    },
    reading: {
      letturaId: "cult-arte-18",
      question: "¿Qué cuenta la lectura de la Capilla Sixtina y qué significa su restauración?",
    },
    writing: {
      task: "Escribe el saggio breve completo (250 palabras): título argumentativo, tesis, 3 párrafos dato+comentario con conectores de nivel, voz explícita, conclusión aforística que abre.",
      minWords: 230,
      tips: ["Un conector de nivel por párrafo, mínimo", "La voz explícita (a mio avviso / ritengo) al menos dos veces"],
      model: [
        "Turismo culturale: la minaccia che ci nutre.",
        "Il dato è noto: i visitatori dei grandi musei sono raddoppiati in vent'anni. Pertanto, l'accesso va regolato; nondimeno, vietare è ammettere la propria povertà culturale.",
        "La posizione che sostengo è duplice: il turismo, una volta educato, diventa custode. Di conseguenza, chi ama l'arte paghi per proteggerla — e chi la protegge, la possieda davvero.",
      ],
    },
    culture: {
      title: "El saggio breve, rito nacional",
      text: "El saggio breve es el ejercicio estrella de la escuela y la universidad italianas: analizar documentos, construir una línea, tomar posición. Enseña a pensar en público — y los italianos lo siguen haciendo de adultos en los editoriali. Domarlo es el último pase C1: quien escribe un saggio con voz propia, piensa en italiano.",
    },
    finalTask: {
      title: "Il saggio finale — prova d'esame C1",
      brief: "La prueba final C1: saggio breve de 400 palabras con todos los elementos, leído en voz alta y defendido ante el esaminatore. Tu diploma de dominio académico-profesional.",
      checklist: ["Título que argumenta, tesis temprana", "3 párrafos dato+comentario con nexos", "Conclusión aforística que abre, no cierra"],
    },
    review: [
      { q: "El saggio breve exige…", options: ["solo resumen", "análisis + posición personal", "citas textuales solo"], answer: 1 },
      { q: "Nondimeno = ", options: ["no obstante", "por tanto", "en consecuencia"], answer: 0 },
      { q: "Una volta ___ , il dato diventa tesi. (interpretar)", options: ["interpretato", "interpretando", "interpreta"], answer: 0 },
      { q: "La conclusión del saggio C1…", options: ["resume", "abre", "se disculpa"], answer: 1 },
    ],
    cando: [
      "Escribo ensayos académicos con voz propia",
      "Domino el arsenal C1 completo",
      "Estoy listo/a para el nivel C2",
    ],
  },

  {
    id: "cu-c1-11", n: 11, level: "C1",
    title: "El italiano de las empresas", titleIt: "L'italiano delle imprese",
    img: "/images/vocab/lavoro.webp",
    goal: "Moverte con soltura en el italiano corporativo: riunioni, e-mail y verbali",
    goals: ["Redactar e-mail formali, verbali y relazioni", "Usar el lessico gestionale y sus anglicismos con criterio", "Navegar el tú/Lei de la jerarquía empresarial"],
    scenario: "Primera semana en una scale-up milanese: al salir de tu primera riunione operativa, tu responsable te encarga redactar el verbale y el e-mail de seguimiento al cliente. El italiano corporativo mezcla burocrazia, anglicismos y una cortesía de precisión.",
    dialogue: [
      { speaker: "Responsabile", it: "Allora: com'è andata la tua prima riunione operativa? Hai preso appunti?", es: "¿Y bien? ¿Cómo ha ido tu primera reunión operativa? ¿Has tomado apuntes?" },
      { speaker: "Tu", it: "Ho trascritto tutto: ordine del giorno, decisioni, tempi. Ma il verbale mi intimidisce un po'.", es: "Lo he transcrito todo: orden del día, decisiones, plazos. Pero el acta me intimida un poco." },
      { speaker: "Responsabile", it: "Niente paura: il verbale non è un romanzo, è una fotografia. E si scrive in terza persona, sempre.", es: "Sin miedo: el acta no es una novela, es una fotografía. Y se escribe en tercera persona, siempre." },
      { speaker: "Tu", it: "Quindi non «io propongo», ma «la dottoressa Ferri propone»?", es: "¿Entonces no «yo propongo», sino «la doctora Ferri propone»?" },
      { speaker: "Responsabile", it: "Esatto. E i deliverable vanno indicati con owner e deadline: chi fa cosa, entro quando. Il budget si assegna, non si «dà».", es: "Exacto. Y los entregables se indican con responsable y fecha límite: quién hace qué, para cuándo. El presupuesto se asigna, no se «da»." },
      { speaker: "Tu", it: "E l'e-mail di follow-up al cliente? «Come sopra» mi suona burocratico.", es: "¿Y el correo de seguimiento al cliente? «Como arriba» me suena burocrático." },
      { speaker: "Responsabile", it: "«Come concordato in riunione»: formale ma vivo. E chiudi sempre con i prossimi passi, mai con un «cordiali saluti» e basta.", es: "«Como acordado en la reunión»: formal pero vivo. Y cierra siempre con los próximos pasos, nunca con un «cordiali saluti» a secas." },
      { speaker: "Tu", it: "Ordine del giorno, delibere, deliverable, follow-up: anche l'italiano aziendale ha le sue regole d'arte.", es: "Orden del día, acuerdos, entregables, seguimiento: también el italiano empresarial tiene sus reglas de arte." },
    ],
    comprehension: [
      { q: "¿Cómo se escribe el verbale según la responsable?", options: ["En primera persona, subjetiva", "En tercera persona: una fotografía", "En diálogo con los asistentes"], answer: 1 },
      { q: "¿Cómo se indica un deliverable?", options: ["Con owner y deadline: quién y para cuándo", "Solo con el coste", "Con una descripción literaria"], answer: 0 },
      { q: "¿Qué fórmula prefiere para el e-mail de seguimiento?", options: ["«Come sopra»", "«Come concordato in riunione»", "«Distinti saluti»"], answer: 1 },
      { q: "¿Con qué debe cerrar un e-mail corporativo eficaz?", options: ["Con un resumen de todo lo dicho", "Con los prossimi passi", "Con una firma larguísima"], answer: 1 },
    ],
    chunks: [
      { it: "l'ordine del giorno", es: "el orden del día" },
      { it: "redigere il verbale di riunione", es: "redactar el acta de reunión" },
      { it: "come concordato in riunione", es: "como acordado en la reunión" },
      { it: "il budget viene assegnato", es: "el presupuesto se asigna" },
      { it: "owner e deadline di un deliverable", es: "responsable y fecha límite de un entregable" },
      { it: "mettere in agenda", es: "poner en la agenda" },
      { it: "mettere al corrente il team", es: "poner al corriente al equipo" },
      { it: "i prossimi passi", es: "los próximos pasos" },
    ],
    grammar: {
      focus: "El verbale: impersonalidad, pasivo administrativo y presente de relación",
      inductive: [
        { it: "Si rileva che il budget è stato superato.", es: "Se constata que el presupuesto ha sido superado." },
        { it: "La relazione sarà trasmessa a tutti i soci via PEC.", es: "El informe se transmitirá a todos los socios por PEC." },
        { it: "Il team si impegna a consegnare entro il 30.", es: "El equipo se compromete a entregar antes del 30." },
        { it: "Al termine della discussione, il CdA delibera di prorogare il termine.", es: "Al final de la discusión, el consejo acuerda prorrogar el plazo." },
      ],
      rule: [
        "El italiano aziendale despersonaliza: si impersonale (si rileva, si conviene), pasivo (è stato approvato, sarà trasmesso) y andare + participio como obligación (la relazione andrà trasmessa). El verbale se escribe en presente de relación («il CdA delibera») aunque la reunión ya haya pasado; y el verbale fotografía sin interpretar, mientras la relazione valuta e raccomanda: confundirlas es confundir a un notario con un consultor.",
        "La realidad de los anglicismos: budget, deliverable, meeting, update, deadline circulan en toda empresa italiana. La regla del C1 culto: el anglicismo vive donde la empresa lo usa (il budget si assegna), pero los verbos del acto formal siguen siendo italianos — si delibera, si verbalizza, si prende atto, si dà mandato. «Fare un update» vive en la oralidad; «fornire un aggiornamento», en la escritura.",
      ],
      gaps: [
        { q: "___ rileva che il budget è stato superato. (impersonal)", options: ["Si", "Ci", "Gli"], answer: 0, explain: "si impersonale: el verbale no tiene yo." },
        { q: "Il verbale si scrive in ___ persona.", options: ["prima", "seconda", "terza"], answer: 2, explain: "Tercera persona: fotografía sin protagonista." },
        { q: "Il CdA ___ di prorogare il termine. (acto formal)", options: ["delibera", "decide solo", "deliberazione"], answer: 0, explain: "Deliberare es el verbo del acto administrativo." },
        { q: "La relazione ___ trasmessa entro venerdì. (andare + part.)", options: ["andrà", "va a", "dovrà"], answer: 0, explain: "andare + participio: obligación administrativa elegante." },
      ],
    },
    pronunciation: {
      focus: "Siglas de oficina y anglicismos de gestión",
      tip: "El CdA se deletrea (ci-di-à), la PEC también (pi-e-ci), el CEO se lee a la inglesa. Los anglicismos de gestión se pronuncian como los pronuncia la oficina: «budget» y «deadline» con su sonido original, «deliverable» ya circula a la italiana. Quien los italianiza del todo suena cómico; quien los evita, arcaico.",
      pairs: [
        { a: "CdA", b: "PEC", note: "siglas diarias" },
        { a: "il budget", b: "la deadline", note: "anglicismos de gestión" },
        { a: "si rileva", b: "si conviene", note: "impersonal del verbale" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Si rileva che il team ha approvato il piano. Il verbale sarà trasmesso entro domani»." },
        { kind: "semi", task: "Presenta en 6 frases los resultados de un trimestre (reales o inventados) con lessico gestionale: budget, deliverable, deadline." },
        { kind: "comunicativo", task: "Riunione de equipo: orden del día, dos decisiones verbalizadas, reparto de tareas con owner y deadline." },
        { kind: "autentico", task: "Redacta el verbale de una reunión real de tu vida (trabajo, estudio, asociación) y preséntalo como si el board lo aprobara." },
      ],
    },
    reading: {
      lines: [
        { it: "L'italiano delle imprese è una lingua franca interna: metà burocrazia sabauda, metà inglese prestato.", es: "El italiano de las empresas es una lengua franca interna: mitad burocracia sabauda, mitad inglés prestado." },
        { it: "Il verbale non interpreta: fotografa. Chi scrive «il socio è sembrato perplesso» ha già travisato la riunione.", es: "El acta no interpreta: fotografía. Quien escribe «el socio parecía perplejo» ya ha tergiversado la reunión." },
        { it: "La relazione, al contrario, valuta e raccomanda: confonderle è come scambiare un notaio per un consulente.", es: "El informe, al contrario, evalúa y recomienda: confundirlos es como confundir a un notario con un consultor." },
        { it: "L'e-mail formale italiana apre con il contesto e chiude con i prossimi passi: chi legge deve sapere che cosa fare.", es: "El correo formal italiano abre con el contexto y cierra con los próximos pasos: quien lee debe saber qué hacer." },
        { it: "Il Lei non è distanza: è precisione. Finché l'azienda non dice altro, il Lei è la divisa verbale.", es: "El Lei no es distancia: es precisión. Mientras la empresa no diga lo contrario, el Lei es el uniforme verbal." },
      ],
      question: "¿Qué distingue el verbale de la relazione, y con qué debe cerrar un e-mail formale?",
    },
    writing: {
      task: "Redacta el paquete completo (220 palabras): el verbale de la riunione (tercera persona, presente de relación, deliverable con owner y deadline) y el e-mail di follow-up con i prossimi passi.",
      minWords: 200,
      tips: ["En el verbale, cero primera persona: todo impersonal o pasivo", "Cada deliverable con owner y deadline explícitos", "El e-mail cierra con i prossimi passi, nunca con saluti a secas"],
      model: [
        "Oggetto: verbale riunione operativa del 14/03 — punti all'ordine del giorno e decisioni.",
        "Preso atto dell'andamento del budget, il team delibera di assegnare al marketing un contributo di 50.000 euro; owner: dott.ssa Ferri; deadline: 30 giugno.",
        "Come concordato in riunione, si trasmette il verbale in allegato. Prossimi passi: conferma dei deliverable entro venerdì.",
      ],
    },
    culture: {
      title: "PEC, «Egregio» y el Lei de la oficina",
      text: "En la empresa italiana la PEC (posta elettronica certificata) tiene valor legal: con la administración, sin PEC no existes. La email formale tiene su liturgia: oggetto inequívoco, «Spett.le» para las empresas, «Egregio» o «Gentile» para las personas, «Cordiali saluti» como estándar — «Distinti saluti», más frío, casi una despedida. Y el Lei es la divisa entre colegas hasta que el senior propone el tú: «Possiamo darci del tu?». Milán lo abandona antes; Roma y Nápoles lo custodian más. Quien llega extranjero y respeta el Lei demuestra haber entendido Italia antes de abrir la boca.",
    },
    finalTask: {
      title: "Il mio primo verbale",
      brief: "Tu primera semana en la milanese: redacta verbale + follow-up de una riunione con dos decisiones y tres deliverable, y preséntalos como si el board los aprobara en voz alta.",
      checklist: ["El verbale va en tercera persona y presente de relación", "Cada deliverable tiene owner y deadline", "El e-mail cierra con i prossimi passi"],
    },
    review: [
      { q: "El verbale se escribe en ___ persona.", options: ["primera", "segunda", "tercera"], answer: 2 },
      { q: "Il budget si ___.", options: ["assegna", "dà via", "prende"], answer: 0 },
      { q: "«Come concordato in riunione» sirve para…", options: ["abrir un informe anual", "referirse a lo acordado en el seguimiento", "despedirse"], answer: 1 },
      { q: "Il verbale fotografa; la relazione…", options: ["copia", "valuta e raccomanda", "tace"], answer: 1 },
      { q: "En la empresa italiana, el paso del Lei al tu lo propone…", options: ["el junior siempre", "el senior", "el cliente externo"], answer: 1 },
    ],
    cando: [
      "Redacto verbali, relazioni y e-mail formali de empresa",
      "Uso el lessico gestionale y sus anglicismos con criterio",
      "Navego el tú/Lei de la jerarquía corporativa italiana",
    ],
  },

  {
    id: "cu-c1-12", n: 12, level: "C1",
    title: "El italiano de la ciencia", titleIt: "L'italiano della scienza",
    img: "/images/vocab/scienza.webp",
    goal: "Divulgar ciencia en italiano: definir, comparar y dosificar el pasivo",
    goals: ["Construir definiciones rigurosas y analogías calibradas", "Dosificar pasivo, si impersonale y nominalizzazioni", "Escribir y presentar una Lezione divulgativa completa"],
    scenario: "Festival della Scienza di Genova: te han aceptado una Lezione divulgativa de diez minutos, al estilo TEDx, sobre un tema de tu campo. El público es culto pero no especialista: el divulgatore convierte lo difícil en claro sin volverlo simple.",
    dialogue: [
      { speaker: "Curatrice", it: "La sua proposta è interessante, ma ricordi: il pubblico del festival è colto, non esperto. Che strategia adotta?", es: "Su propuesta es interesante, pero recuerde: el público del festival es culto, no experto. ¿Qué estrategia adopta?" },
      { speaker: "Tu", it: "Tre mosse: definizione rigorosa, analogia calibrata, esempio quotidiano. In quest'ordine.", es: "Tres movimientos: definición rigurosa, analogía calibrada, ejemplo cotidiano. En este orden." },
      { speaker: "Curatrice", it: "Mi faccia un esempio, col suo tema.", es: "Póngame un ejemplo, con su tema." },
      { speaker: "Tu", it: "Se parlo di DNA, prima lo definisco — «il codice che istruisce la cellula» — poi lo paragono a una ricetta di cucina: stessi ingredienti, piatti diversi.", es: "Si hablo de ADN, primero lo defino — «el código que instruye a la célula» —, luego lo comparo con una receta de cocina: mismos ingredientes, platos distintos." },
      { speaker: "Curatrice", it: "Buon'analogia, ma non la faccia diventare casa: la scienza non è cucina.", es: "Buena analogía, pero no la convierta en casa: la ciencia no es cocina." },
      { speaker: "Tu", it: "Giusto: l'analogia è un ponte. Si attraversa e si abbandona.", es: "Justo: la analogía es un puente. Se atraviesa y se abandona." },
      { speaker: "Curatrice", it: "E il linguaggio tecnico? Passivo, nominalizzazioni… non spaventano il pubblico?", es: "¿Y el lenguaje técnico? Pasivo, nominalizaciones… ¿no asustan al público?" },
      { speaker: "Tu", it: "Dosati no: «il gene viene letto», poi «la lettura del gene». Il passivo nasconde l'agente, la nominalizzazione condensa: il divulgatore li usa come un farmaco, a piccole dosi.", es: "Dosificados no: «el gen se lee», luego «la lectura del gen». El pasivo esconde el agente, la nominalización condensa: el divulgador los usa como un fármaco, a dosis pequeñas." },
    ],
    comprehension: [
      { q: "¿Cuál es la estrategia del divulgador?", options: ["Definición rigurosa, analogía calibrada, ejemplo cotidiano", "Datos, gráficos y notas al pie", "Humor, anécdotas y silencios"], answer: 0 },
      { q: "¿A qué compara el ADN?", options: ["A una biblioteca", "A una receta de cocina: mismos ingredientes, platos distintos", "A un mapa"], answer: 1 },
      { q: "¿Qué advierte la curadora sobre la analogía?", options: ["Que no se convierta en casa: la ciencia no es cocina", "Que sea más larga", "Que se cite la fuente"], answer: 0 },
      { q: "¿Cómo se usan pasivo y nominalización?", options: ["Como un fármaco, a pequeñas dosis", "Nunca", "En cada frase"], answer: 0 },
    ],
    chunks: [
      { it: "il codice che istruisce la cellula", es: "el código que instruye a la célula" },
      { it: "un'analogia calibrata", es: "una analogía calibrada" },
      { it: "l'analogia è un ponte, non una casa", es: "la analogía es un puente, no una casa" },
      { it: "a piccole dosi, come un farmaco", es: "a pequeñas dosis, como un fármaco" },
      { it: "il gene viene letto", es: "el gen se lee" },
      { it: "la lettura del gene", es: "la lectura del gen" },
      { it: "alla luce dei dati", es: "a la luz de los datos" },
      { it: "i risultati confermano l'ipotesi", es: "los resultados confirman la hipótesis" },
    ],
    grammar: {
      focus: "Pasivo, si impersonale y nominalizzazioni de la prosa científica",
      inductive: [
        { it: "Il campione viene analizzato al microscopio.", es: "La muestra se analiza al microscopio." },
        { it: "Si osserva un aumento della temperatura.", es: "Se observa un aumento de la temperatura." },
        { it: "L'osservazione dei dati ha confermato l'ipotesi.", es: "La observación de los datos ha confirmado la hipótesis." },
        { it: "I risultati sono stati pubblicati su una rivista internazionale.", es: "Los resultados han sido publicados en una revista internacional." },
      ],
      rule: [
        "La prosa científica despersonaliza al agente: venire + participio (viene analizzato) para el proceso en curso, essere + participio (è stato pubblicato) para el resultado, si impersonale (si osserva) para el experimento contado en directo. La nominalización convierte verbos en conceptos (osservare → l'osservazione) y condensa el período, pero aleja: el divulgador la dosifica.",
        "El resto del arsenal divulgativo: la definición con relativa («il DNA, il codice che istruisce la cellula»), la analogía anunciada (è come se, immagina di, paragonabile a) y los conectores de la prueba (in base a, alla luce di, come dimostrato da). Definir no es simplificar: es traducir la complejidad sin traicionarla.",
      ],
      gaps: [
        { q: "Il campione ___ analizzato in laboratorio. (proceso en curso)", options: ["viene", "è venuto", "sta"], answer: 0, explain: "venire + participio = proceso; essere sería resultado." },
        { q: "___ osserva una reazione inattesa. (impersonal)", options: ["Gli", "Si", "Lo"], answer: 1, explain: "si impersonale: el experimento en directo." },
        { q: "La ___ dei dati ha richiesto un anno. (nominalización de osservare)", options: ["osservazione", "osservare", "osservato"], answer: 0, explain: "El verbo se vuelve concepto: -zione." },
        { q: "I risultati ___ pubblicati nel 2023. (resultado compiuto)", options: ["sono stati", "vengono", "hanno stato"], answer: 0, explain: "essere + participio compuesto = resultado." },
      ],
    },
    pronunciation: {
      focus: "Las palabras largas del laboratorio",
      tip: "Las palabras científicas son escaleras: «sperimenta-ZIO-ne», con el acento fijo en la -zione. La dizione divulgativa alterna velocidades: lenta al definir, rápida al demostrar, lenta otra vez al concluir. Y tras cada definición, pausa: quien define, regala tiempo al público.",
      pairs: [
        { a: "l'ipotesi", b: "l'ipotetico", note: "griego, acento estable" },
        { a: "la sperimentazione", b: "la dimostrazione", note: "escaleras en -zione" },
        { a: "è come se…", b: "immagina di…", note: "anunciantes de analogía" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite con la pausa de la definición: «Il DNA, | il codice che istruisce la cellula, | viene copiato ogni giorno»." },
        { kind: "semi", task: "Define tres conceptos de tu campo con la fórmula del festival: definizione + analogia + esempio." },
        { kind: "comunicativo", task: "Ensayo general de la Lezione: cinco minutos, una analogía que se abandona, dos preguntas del público." },
        { kind: "autentico", task: "Escucha una conferenza de divulgación italiana (Piergiorgio Odifreddi, un TEDx italiano) y roba dos analogías para tu tema." },
      ],
    },
    reading: {
      lines: [
        { it: "Divulgare non è semplificare: è tradurre la complessità senza tradirla.", es: "Divulgar no es simplificar: es traducir la complejidad sin traicionarla." },
        { it: "La tradizione italiana nasce con Galileo, che scelse il dialogo invece del trattato: la scienza che parla con la voce delle persone.", es: "La tradición italiana nace con Galileo, que eligió el diálogo en lugar del tratado: la ciencia que habla con la voz de las personas." },
        { it: "Chi spiega bene usa il «noi» che include, mai l'«io» che esibisce.", es: "Quien explica bien usa el «nosotros» que incluye, nunca el «yo» que exhibe." },
        { it: "L'analogia perfetta non esiste: esiste quella che regge il concetto per il tempo di attraversarlo.", es: "La analogía perfecta no existe: existe la que aguanta el concepto el tiempo de atravesarlo." },
        { it: "E la domanda finale non chiude: riapre. La buona scienza, come la buona lingua, vive di domande.", es: "Y la pregunta final no cierra: reabre. La buena ciencia, como la buena lengua, vive de preguntas." },
      ],
      question: "¿Por qué la divulgación no es simplificar, y qué eligió Galileo en lugar del trattato?",
    },
    writing: {
      task: "Escribe la primera página de tu Lezione (220 palabras): apertura con pregunta, definición con relativa, analogía calibrada y abandonada, y un máximo de un pasivo por párrafo.",
      minWords: 200,
      tips: ["Una sola analogía: puente que se abandona", "Pasivo y nominalización a dosis de fármaco", "Cierra la página con una pregunta que reabra"],
      model: [
        "Immaginate una biblioteca con tre miliardi di volumi, chiusa in uno spazio così piccolo che mille copie stanno sulla punta di uno spillo.",
        "Il DNA, il codice che istruisce la cellula, viene copiato migliaia di volte al giorno: ogni copia è una ricetta leggermente diversa.",
        "È come se un cuoco cambiasse un ingrediente a ogni piatto: la cucina resta la stessa, il sapore no. Ma lasciamo la cucina: il gene, a differenza del cuoco, non assaggia.",
      ],
    },
    culture: {
      title: "Galileo, la Treccani e il CICAP",
      text: "La divulgación italiana tiene apellidos propios. Galileo escribió en volgare y en forma de diálogo (Il saggiatore, 1623; Dialogo sopra i due massimi sistemi, 1632) para que la ciencia hablase con la voz de las personas. L'Istituto dell'Enciclopedia Italiana — la Treccani, 1925 — convirtió el saber en casa común, y hoy su portale divulga a millones. Piero Angela llevó la ciencia a la RAI durante medio siglo (Quark, Superquark) y en 1989 fundó il CICAP, el comité que examina las afirmaciones paranormales con método. Il Festival della Scienza di Genova, dal 2003, cierra el círculo: la scienza in piazza, in italiano.",
    },
    finalTask: {
      title: "La mia Lezione al festival",
      brief: "Sube al escenario di Genova: diez minutos con apertura-pregunta, definición rigurosa, analogía que se abandona y cierre que reabre. El público culto no especialista debe entenderlo todo y no aburrirse nunca.",
      checklist: ["La definición es rigurosa y la analogía, calibrada", "Pasivo y nominalizzazioni a dosis de fármaco", "La última pregunta reabre, no cierra"],
    },
    review: [
      { q: "El campione viene analizzato: el pasivo con venire expresa…", options: ["un resultado compiuto", "un proceso en curso", "un deseo"], answer: 1 },
      { q: "La nominalización de «osservare» es…", options: ["l'osservazione", "l'osservato", "l'osservare bene"], answer: 0 },
      { q: "«L'analogia è un ponte, non una casa» significa que…", options: ["se atraviesa y se abandona", "se habita para siempre", "es pura decoración"], answer: 0 },
      { q: "Galileo eligió divulgar en forma de…", options: ["trattato", "dialogo", "manuale"], answer: 1 },
      { q: "Il CICAP se dedica a…", options: ["examinar lo paranormal con método científico", "fundar museos", "traducir revistas"], answer: 0 },
    ],
    cando: [
      "Defino y comparo conceptos técnicos con precisión divulgativa",
      "Dosifico pasivo, si impersonale y nominalizzazioni",
      "Presento una Lezione completa ante público no especialista",
    ],
  },
];
