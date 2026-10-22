import type { MindReading } from "../../cambridge-mind";

/* ═══ EN C2 · Mind readings (temáticas de conciencia) — 3 por unidad ══
   Metodología v9.38: 7 estrategias de comprensión, rotación estricta por
   posición: L1 = predict + quiz (literal/inferencial/critica) + V/F con
   justificación; L2 = predict + ideas + intruso; L3 = predict + secuencia
   + escucha (4 preguntas). Textos de conciencia en inglés americano C2
   (ensayo reflexivo), anclados suavemente a los escenarios del curso.
   Campos `.it` = inglés, `.es` = español. Temas rotados 8/7/7/7/7. */

export const EN_MIND_C2: Record<string, MindReading[]> = {
  "en-cu-c2-01": [
    {
      id: "md-en-c2-01-1", theme: "meditazione",
      title: "The drawer and the breath", titleEs: "El cajón y la respiración",
      minutes: 2,
      paragraphs: [
        { it: "Before the workshop begins, there is a small ceremony nobody assigned: you sit at the desk, close your eyes, and take three slow breaths while the folder of photocopied pages rests under your hand. The breath is not decoration. It is the difference between reading your own sentence as a threat and reading it as an object — something you made, something the room will hold for an hour.", es: "Antes de que empiece el taller hay una pequeña ceremonia que nadie asignó: te sientas al escritorio, cierras los ojos y das tres respiraciones lentas mientras la carpeta de páginas fotocopiadas descansa bajo tu mano. La respiración no es decoración. Es la diferencia entre leer tu propia frase como una amenaza y leerla como un objeto: algo que hiciste, algo que la sala sostendrá durante una hora." },
        { it: "Meditation, in the workshop, is exactly this change of distance. You watch the sentence the way you would watch the dead man's watch: wound, worn, still keeping time. When the mind starts circling the airport — pride, dread, the memory of last week's critique — you do not fight it. You notice the circle, name it 'approach,' and land the attention back on the breath. The folder can wait one more minute. It has waited all week.", es: "La meditación, en el taller, es exactamente este cambio de distancia. Miras la frase como mirarías el reloj del difunto: dada cuerda, gastado, todavía dando la hora. Cuando la mente empieza a rodear el aeropuerto — orgullo, miedo, el recuerdo de la crítica de la semana pasada — no la peleas. Notas el círculo, lo llamas «aproximación» y aterrizas la atención de vuelta en la respiración. La carpeta puede esperar un minuto más. Ha esperado toda la semana." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de aviación para pilotos", "Una práctica de calma antes de un taller de escritura", "Una crítica a los talleres literarios"],
        answer: 1,
        why: "El título reúne el objeto del ensayo (el cajón) y la práctica (la respiración): apunta a la calma previa al taller, no a la aviación ni a la crítica.",
      },
      quiz: [
        { q: "What do you do while the folder rests under your hand?", kind: "literal", options: ["You take three slow breaths with your eyes closed", "You read the pages aloud", "You answer your emails"], answer: 0, why: "«You sit at the desk, close your eyes, and take three slow breaths»: está literal en el primer párrafo." },
        { q: "Why is the breath 'not decoration'?", kind: "inferencial", options: ["Because it changes the distance: the sentence becomes an object instead of a threat", "Because the room requires complete silence", "Because it is a warm-up for reading aloud"], answer: 0, why: "Se infiere de la oposición «as a threat» / «as an object»: la respiración cambia la distancia con la propia frase." },
        { q: "What does the image of the plane 'circling the airport' suggest about the mind?", kind: "critica", options: ["That thoughts circle without landing, and the practice is to land them gently on the breath", "That flying is dangerous", "That the workshop is too far away"], answer: 0, why: "La metáfora del segundo párrafo: la mente da vueltas (orgullo, miedo) y la práctica consiste en aterrizar la atención, no en pelear." },
      ],
      vf: [
        { text: "The three breaths happen before the pages are read.", value: true, why: "«Before the workshop begins»: la ceremonia va antes de la lectura; la carpeta puede esperar." },
        { text: "You must fight the circling mind until it stops.", value: false, why: "«You do not fight it. You notice the circle»: se observa y se nombra, no se pelea." },
        { text: "The breath turns the sentence into an object.", value: true, why: "«Reading it as an object — something you made»: la distancia de objeto es el efecto buscado." },
      ],
    },
    {
      id: "md-en-c2-01-2", theme: "qui e ora",
      title: "One sentence at a time", titleEs: "Una frase a la vez",
      minutes: 2,
      paragraphs: [
        { it: "Revision has a secret that no style manual admits: it can only happen in the present tense. You cannot polish a sentence yesterday, and you cannot protect it from tomorrow's workshop. There is only this line, this pencil, this evening light on the desk — the paragraph asks for exactly the patience that the present tense provides, one sentence at a time.", es: "La revisión tiene un secreto que ningún manual de estilo admite: solo puede ocurrir en presente. No puedes pulir una frase ayer, y no puedes protegerla del taller de mañana. Solo existe esta línea, este lápiz, esta luz de tarde en el escritorio: el párrafo pide exactamente la paciencia que el presente proporciona, una frase a la vez." },
        { it: "The here and now of revision is strangely physical. The page under the lamp, the sound of the pencil, the small ceremony of the cup going cold beside your wrist. When the mind jumps ahead to the faces of the workshop, you come back to the line you are actually reading. The future of the essay is not your business tonight. Tonight the essay is one sentence long, and the sentence is enough.", es: "El aquí y el ahora de la revisión es extrañamente físico. La página bajo la lámpara, el sonido del lápiz, la pequeña ceremonia de la taza enfriándose junto a tu muñeca. Cuando la mente salta adelante hacia los rostros del taller, vuelves a la línea que estás leyendo de verdad. El futuro del ensayo no es asunto tuyo esta noche. Esta noche el ensayo tiene una frase de largo, y la frase es suficiente." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un método para escribir más rápido", "Revisar en el presente, una frase a la vez", "Cómo publicar un ensayo en una revista"],
        answer: 1,
        why: "El título «One sentence at a time» apunta al ritmo de la revisión presente, no a la velocidad ni a la publicación.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Revision happens only in the present: one sentence, one evening at a time",
          "Style manuals are useless for serious writers",
          "Workshops judge you before you finish writing",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "You cannot polish a sentence yesterday",
          "The cup goes cold beside your wrist",
          "Tonight the essay is one sentence long",
        ],
        distractors: [
          "The essay was published in a famous magazine",
          "The professor canceled the workshop",
          "You need special software to revise",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Revision can only happen in the present tense.",
          "There is only this line, this pencil, this evening light.",
          "The paragraph asks for the patience the present provides.",
          "The printer is out of toner again.",
          "Tonight the essay is one sentence long.",
        ],
        intruder: 3,
        why: "La impresora sin tóner es un problema logístico ajeno a la práctica contemplativa de revisar en el presente.",
      },
    },
    {
      id: "md-en-c2-01-3", theme: "relax fisico",
      title: "The reading-aloud body", titleEs: "El cuerpo que lee en voz alta",
      minutes: 2,
      paragraphs: [
        { it: "Reading your page aloud is a body practice before it is a literary one. The jaw, which has been clenched around the sentence all day, learns to soften. The shoulders, which have been guarding the paragraph like a bodyguard, drop an inch with the first full sentence. And the breath, which the written word tends to hold hostage, gets its job back: it moves at the commas, rests at the dashes, lands at the periods.", es: "Leer tu página en voz alta es una práctica corporal antes que literaria. La mandíbula, que ha estado apretada alrededor de la frase todo el día, aprende a ablandarse. Los hombros, que han estado custodiando el párrafo como guardaespaldas, bajan una pulgada con la primera frase completa. Y la respiración, que la palabra escrita suele mantener de rehén, recupera su trabajo: se mueve en las comas, descansa en las rayas, aterriza en los puntos." },
        { it: "This is why the tradition recommends it. E. B. White read everything aloud before sending it, and the reason is not superstition but anatomy: the ear is more honest than the eye. Where the voice trips, the sentence was hiding a corridor; where the breath runs out, a trench coat of clauses is standing between the reader and the meaning. The body, read aloud, becomes the final editor.", es: "Por eso la tradición lo recomienda. E. B. White leía todo en voz alta antes de enviarlo, y la razón no es superstición sino anatomía: el oído es más honesto que el ojo. Donde la voz tropieza, la frase escondía un pasillo; donde el aire se agota, una gabardina de cláusulas se interpone entre el lector y el sentido. El cuerpo, leído en voz alta, se convierte en el editor final." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ejercicio de canto profesional", "Leer en voz alta como práctica física: mandíbula, hombros y respiración", "Una historia sobre E. B. White de niño"],
        answer: 1,
        why: "El título habla del cuerpo que lee: apunta a lo físico de la lectura en voz alta, no al canto ni a la biografía.",
      },
      sequence: {
        instr: "Ordena los pasos de la práctica:",
        events: [
          "Sit at the desk with the page",
          "Unclench the jaw before the first sentence",
          "Let the shoulders drop as you begin reading",
          "Breathe at the commas and rest at the dashes",
          "Mark where the voice trips or the breath runs out",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Before you read the page to the room, read it to your body first. Soften the jaw. Drop the shoulders. Take one breath, and let the voice walk the sentence slowly — pausing at every comma, resting at every dash. If the air runs out before the period, the sentence is too long, and your body just told you. Thank it, and pick up the pencil.",
        questions: [
          { q: "What do you do before reading the sentence?", kind: "literal", options: ["Soften the jaw and drop the shoulders", "Run around the block", "Memorize the whole page"], answer: 0, why: "«Soften the jaw. Drop the shoulders»: está literal al inicio del audio." },
          { q: "What does it mean if the air runs out before the period?", kind: "inferencial", options: ["The sentence is too long, and the body has signaled it", "You need to speak much louder", "The room is too hot"], answer: 0, why: "«The sentence is too long, and your body just told you»: el cuerpo como editor final." },
          { q: "Where do you pause while reading?", kind: "literal", options: ["At every comma", "Only at the end of the page", "Nowhere: reading must be continuous"], answer: 0, why: "«Pausing at every comma, resting at every dash»." },
          { q: "Why do you thank the body at the end?", kind: "inferencial", options: ["Because it gave you honest editorial information", "Because it finished the workout", "Because the teacher requires politeness"], answer: 0, why: "El cuerpo «te acaba de decir» dónde falla la frase: información editorial honesta y gratuita." },
        ],
      },
    },
  ],

  "en-cu-c2-02": [
    {
      id: "md-en-c2-02-1", theme: "spiritualità",
      title: "Your melody, a new time signature", titleEs: "Tu melodía, un compás nuevo",
      minutes: 3,
      paragraphs: [
        { it: "There is a quiet spirituality in accepting the voice you were given. The coach does not ask you to bury your accent; he asks you to change its time signature — the same melody, a new rhythm. Gratitude, here, is not a poster on a wall. It is the moment you stop hearing your Spanish vowels as a debt and start hearing them as the lower chords of everything you will ever say in English.", es: "Hay una espiritualidad silenciosa en aceptar la voz que te fue dada. El coach no te pide enterrar tu acento; te pide cambiarle el compás: la misma melodía, un ritmo nuevo. La gratitud, aquí, no es un cartel en la pared. Es el momento en que dejas de oír tus vocales españolas como una deuda y empiezas a oírlas como los acordes graves de todo lo que dirás algún día en inglés." },
        { it: "The traditions of voice work all begin the same way: find the note that is already in you, and build from it. Your first language is not luggage you pay for at the counter; it is the instrument you learned on. When you speak English with your own melody, you are not less clear — you are specific. And specificity, the old teachers say, is the closest thing a voice has to a soul.", es: "Las tradiciones del trabajo vocal empiezan todas igual: encuentra la nota que ya está en ti y construye desde ella. Tu primera lengua no es un equipaje que pagas en el mostrador; es el instrumento en el que aprendiste. Cuando hablas inglés con tu propia melodía no eres menos claro: eres específico. Y la especificidad, dicen los viejos maestros, es lo más parecido a un alma que tiene una voz." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un anuncio de clases de canto", "Aceptar la propia voz y el acento como identidad", "Una historia sobre equipajes perdidos en un aeropuerto"],
        answer: 1,
        why: "El título («tu melodía, un compás nuevo») apunta a la relación con la propia voz, no a clases ni a viajes.",
      },
      quiz: [
        { q: "What does the coach ask you to change?", kind: "literal", options: ["The time signature of your accent, not the accent itself", "Your entire personality", "Your first language"], answer: 0, why: "«He asks you to change its time signature — the same melody, a new rhythm»: literal en el primer párrafo." },
        { q: "What changes when you stop hearing your vowels 'as a debt'?", kind: "inferencial", options: ["They become the foundation — the lower chords — of your English", "They disappear completely", "You stop speaking Spanish at home"], answer: 0, why: "Se infiere del giro de «deuda» a «acordes graves»: la lengua primera pasa de peso a fundamento." },
        { q: "Why is specificity 'the closest thing a voice has to a soul'?", kind: "critica", options: ["Because a specific voice carries a real history instead of a borrowed standard", "Because souls are naturally musical", "Because accents cannot be corrected"], answer: 0, why: "La idea central del texto: la voz específica cuenta una biografía; la norma prestada la borra." },
      ],
      vf: [
        { text: "Your first language is luggage you pay for at the counter.", value: false, why: "El texto lo niega: «it is the instrument you learned on», no un exceso de equipaje." },
        { text: "Speaking with your own melody makes you specific rather than less clear.", value: true, why: "«You are not less clear — you are specific»." },
        { text: "The coach wants you to bury your accent.", value: false, why: "«The coach does not ask you to bury your accent»: pide cambiarle el compás, no enterrarlo." },
      ],
    },
    {
      id: "md-en-c2-02-2", theme: "relax mentale",
      title: "Listening for the pulse", titleEs: "Escuchar el pulso",
      minutes: 3,
      paragraphs: [
        { it: "The anxious ear hunts syllables, and English refuses to give them to you. The relaxed ear does something else entirely: it stops chasing the vowels and listens for the pulse — the strong beats that arrive like a bass line, on schedule, no matter how many faint syllables faint between them. This is a mental relaxation technique disguised as a listening strategy: you cannot hear the rhythm while you are strangling every sound.", es: "El oído ansioso caza sílabas, y el inglés se niega a dártelas. El oído relajado hace otra cosa: deja de perseguir las vocales y escucha el pulso — los tiempos fuertes que llegan como una línea de bajo, puntuales, sin importar cuántas sílabas débiles se desmayen entre ellos. Es una técnica de relajación mental disfrazada de estrategia de escucha: no puedes oír el ritmo mientras estrangulas cada sonido." },
        { it: "The practice is counterintuitive, like all good ones. You let the words you do not understand drift out with the tide, and you trust the stressed beats to carry the meaning home. Surprise: they usually do. The sentence was never a list of sounds; it was music with a heartbeat, and the heartbeat was always the easy part. Ten minutes of listening for the kick drum, and the entire language slows down to a walk.", es: "La práctica es contraintuitiva, como todas las buenas. Dejas que las palabras que no entiendes se vayan con la marea y confías en que los tiempos fuertes lleven el sentido a casa. Sorpresa: casi siempre lo hacen. La frase nunca fue una lista de sonidos; era música con latido, y el latido siempre fue la parte fácil. Diez minutos escuchando el bombo, y el idioma entero baja a un ritmo de caminata." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una clase de batería para principiantes", "Relajación mental al escuchar: buscar el pulso, no cada sílaba", "Una guía para cantar en inglés"],
        answer: 1,
        why: "El título «Listening for the pulse» apunta a una forma de escucha relajada, no a clases de instrumento.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Relaxed listening follows the stressed pulse instead of chasing every syllable",
          "You must understand every single word to understand English",
          "Music should be banned from language learning",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "The anxious ear hunts syllables",
          "You let the unclear words drift out with the tide",
          "The stressed beats usually carry the meaning home",
        ],
        distractors: [
          "Native speakers always slow down when asked politely",
          "The pulse disappears completely in fast speech",
          "Bass players make better translators than drummers",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The anxious ear hunts syllables.",
          "The relaxed ear listens for the pulse.",
          "The strong beats arrive like a bass line.",
          "A bass guitar costs about eight hundred dollars.",
          "The heartbeat was always the easy part.",
        ],
        intruder: 3,
        why: "El precio de un bajo es un dato material ajeno a la práctica de escucha relajada que describe el texto.",
      },
    },
    {
      id: "md-en-c2-02-3", theme: "meditazione",
      title: "The warm-up as ritual", titleEs: "El calentamiento como ritual",
      minutes: 3,
      paragraphs: [
        { it: "Every actor knows the warm-up, and every language learner can steal it. It begins with a hum — not a word, not a meaning, just a note held long enough to feel the vibration in the chest. Three humming breaths: one for the jaw, one for the tongue, one for the fear. The hum asks nothing of you. That is exactly why it works: the voice relaxes in the absence of judgment, the way a dog lies down when nobody is watching.", es: "Todo actor conoce el calentamiento, y todo estudiante de idiomas puede robárselo. Empieza con un zumbido — no una palabra, no un significado, solo una nota sostenida el tiempo suficiente para sentir la vibración en el pecho. Tres respiraciones zumbando: una para la mandíbula, una para la lengua, una para el miedo. El zumbido no te pide nada. Por eso funciona exactamente: la voz se relaja en la ausencia de juicio, como un perro se echa cuando nadie lo mira." },
        { it: "The ritual ends with a whisper, then silence, then the first real sentence of the day. Meditation teachers would recognize the architecture: arrive in the body, release the effort, speak from the quiet. The coach calls it 'finding the set voice.' You could call it finding your voice at all — the one that does not defend every vowel like a hostage, because it has already spent five minutes remembering that it is an instrument, not a performance.", es: "El ritual termina con un susurro, luego silencio, luego la primera frase real del día. Los maestros de meditación reconocerían la arquitectura: llegar al cuerpo, soltar el esfuerzo, hablar desde la quietud. El coach lo llama «encontrar la voz de set». Podrías llamarlo encontrar tu voz, simplemente: la que no defiende cada vocal como a un rehén, porque ya pasó cinco minutos recordando que es un instrumento, no una actuación." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ensayo sobre perros de teatro", "El calentamiento vocal como ritual de meditación", "Una crítica a los actores de Hollywood"],
        answer: 1,
        why: "El título («el calentamiento como ritual») apunta al zumbido y la respiración como práctica, no a animales ni a chismes de cine.",
      },
      sequence: {
        instr: "Ordena los pasos del ritual:",
        events: [
          "Hum one long note and feel the chest vibrate",
          "Take three humming breaths: jaw, tongue, fear",
          "Whisper a sentence without judgment",
          "Sit in silence for one breath",
          "Speak the first real sentence of the day",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Welcome to your five-minute warm-up. Close your eyes if you like. Hum with me — one note, no words, until you feel the buzz in your chest. Now let the jaw hang loose, heavy as a coat on a hook. One more hum, softer. And now, without performing anything, say the first easy sentence that comes: 'today is a word I can say slowly.' Notice how the voice arrives on its own. That is the whole ritual.",
        questions: [
          { q: "What do you hum at the start?", kind: "literal", options: ["One note, with no words", "A full pop song", "The alphabet in English"], answer: 0, why: "«Hum with me — one note, no words»: literal al inicio del audio." },
          { q: "Why does the voice arrive 'on its own' at the end?", kind: "inferencial", options: ["Because judgment was removed in the earlier steps", "Because the volume kept increasing", "Because someone else spoke first"], answer: 0, why: "«Without performing anything»: al quitar el juicio, la voz aparece sin esfuerzo." },
          { q: "What image is used for the jaw?", kind: "literal", options: ["Heavy as a coat on a hook", "Light as a feather", "Straight as an arrow"], answer: 0, why: "«Let the jaw hang loose, heavy as a coat on a hook»." },
          { q: "What is 'the whole ritual' according to the audio?", kind: "inferencial", options: ["Noticing that the voice arrives without effort", "Memorizing a song perfectly", "Speaking for five minutes without stopping"], answer: 0, why: "«Notice how the voice arrives on its own. That is the whole ritual»: el ritual es notar la llegada sin esfuerzo." },
        ],
      },
    },
  ],

  "en-cu-c2-03": [
    {
      id: "md-en-c2-03-1", theme: "qui e ora",
      title: "The silence you can hear", titleEs: "El silencio que se oye",
      minutes: 2,
      paragraphs: [
        { it: "Comedians protect the beat before the punchline the way monks protect a bell: it is the most valuable second of the craft, and it is made entirely of nothing. In that silence, the listener is not waiting — they are rebuilding the sentence in their heads, and the rebuild is the laugh. The performer who fills the pause with explanation has not made things clearer; they have confiscated the audience's half-second of work.", es: "Los cómicos protegen la pausa antes del punchline como los monjes protegen una campana: es el segundo más valioso del oficio, y está hecho enteramente de nada. En ese silencio, el oyente no está esperando: está reconstruyendo la frase en su cabeza, y la reconstrucción es la risa. El intérprete que llena la pausa con explicación no ha aclarado nada; le ha confiscado al público su medio segundo de trabajo." },
        { it: "There is a way to live in that beat, and it is the oldest practice there is: be where you are. Not in the next joke, not in the previous one that bombed — here, in the suspended second, breathing, trusting the setup you already planted. The here and now, in comedy, is not a slogan. It is the exact address where the laugh is born, and only the performer who is fully there can afford to look like they are somewhere else entirely.", es: "Hay una manera de vivir en esa pausa, y es la práctica más vieja que existe: está donde estás. No en el siguiente chiste, no en el anterior que fracasó: aquí, en el segundo suspendido, respirando, confiando en el setup que ya plantaste. El aquí y el ahora, en la comedia, no es un eslogan. Es la dirección exacta donde nace la risa, y solo el intérprete que está del todo allí puede permitirse parecer que está en cualquier otro sitio." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un tratado sobre campanas de monasterio", "La pausa antes del remate como práctica de presencia", "Cómo escribir chistes más largos"],
        answer: 1,
        why: "El título retoma la frase del oficio («timing is silence you can hear»): apunta a la pausa y la presencia, no a campanas ni a longitud.",
      },
      quiz: [
        { q: "What is inside the beat before the punchline, according to the text?", kind: "literal", options: ["Nothing: a silence in which the listener rebuilds the sentence", "A whispered explanation of the joke", "The beginning of the next joke"], answer: 0, why: "«It is made entirely of nothing» y «they are rebuilding the sentence in their heads»: literal en el primer párrafo." },
        { q: "Why is explaining during the pause a 'confiscation'?", kind: "inferencial", options: ["Because it takes away the listener's own work of re-reading the sentence", "Because it literally steals the microphone", "Because it makes the show shorter"], answer: 0, why: "Se infiere: el público hace su trabajo en ese medio segundo; explicarlo se lo quita." },
        { q: "What does 'the exact address where the laugh is born' suggest about presence?", kind: "critica", options: ["That presence is a technical requirement of comedy, not a poetic extra", "That comedy is really about geography", "That jokes should be rehearsed only at home"], answer: 0, why: "La lectura crítica: el aquí y ahora funciona como requisito técnico del timing, no como adorno." },
      ],
      vf: [
        { text: "The beat before the punchline is the least valuable part of the craft.", value: false, why: "«It is the most valuable second of the craft»: es lo más valioso, no lo menos." },
        { text: "A fully present performer can play deadpan convincingly.", value: true, why: "«Only the performer who is fully there can afford to look like they are somewhere else»." },
        { text: "During the pause, the listener is simply doing nothing.", value: false, why: "Están «rebuilding the sentence in their heads»: el trabajo del público ocurre en la pausa." },
      ],
    },
    {
      id: "md-en-c2-03-2", theme: "relax fisico",
      title: "The deadpan face", titleEs: "El rostro deadpan",
      minutes: 2,
      paragraphs: [
        { it: "The deadpan face is not a frozen face; it is a relaxed one. The eyebrows release, the jaw unclenches, the corners of the mouth stop rehearsing the laugh they are not allowed to have. Physical relaxation, oddly, is what makes the stillness readable: a tense face looks like effort, and effort tells the audience the joke is coming. A soft face tells them nothing — and nothing, on a stage, is the loudest invitation.", es: "El rostro deadpan no es un rostro congelado; es un rostro relajado. Las cejas se sueltan, la mandíbula se desapega, las comisuras de la boca dejan de ensayar la risa que no pueden tener. La relajación física, curiosamente, es lo que vuelve legible la quietud: una cara tensa parece esfuerzo, y el esfuerzo le avisa al público de que el chiste viene. Una cara blanda no les dice nada — y nada, en un escenario, es la invitación más ruidosa." },
        { it: "Off stage, the same muscles carry our days. The smirk prepared for a meeting, the frown rehearsed in traffic, the polite smile held long past its expiration date. The deadpan practice — letting the face be a face, without commentary — is a vacation for all of them. You do not have to become a statue. You just stop narrating with your forehead, and the room, paradoxically, starts listening to your words.", es: "Fuera del escenario, los mismos músculos cargan nuestros días. La sonrisita preparada para una reunión, el ceño ensayado en el tráfico, la sonrisa de cortesía sostenida mucho después de su fecha de caducidad. La práctica deadpan — dejar que la cara sea una cara, sin comentario — es unas vacaciones para todos ellos. No tienes que volverte estatua. Solo dejas de narrar con la frente, y la sala, paradójicamente, empieza a escuchar tus palabras." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de maquillaje teatral", "El rostro relajado (no congelado) del deadpan como descanso físico", "Una historia sobre el tráfico de una gran ciudad"],
        answer: 1,
        why: "El título apunta al rostro deadpan; el enfoque físico (relajado, no congelado) distingue la práctica del maquillaje o la anécdota.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "The deadpan face is a relaxed, non-narrating face, and softening it is physical rest",
          "Deadpan requires expensive plastic surgery",
          "Faces should always express exactly what we feel",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "The jaw unclenches and the eyebrows release",
          "A tense face tells the audience a joke is coming",
          "You stop narrating with your forehead",
        ],
        distractors: [
          "Deadpan comedians never blink on stage",
          "The relaxation exercise lasts three hours",
          "Traffic gets better with comedy podcasts",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The eyebrows release and the jaw unclenches.",
          "A soft face tells the audience nothing.",
          "You stop narrating with your forehead.",
          "The theater rents stage lights by the hour.",
          "The room starts listening to your words.",
        ],
        intruder: 3,
        why: "El alquiler de luces es logística teatral, ajena a la relajación física del rostro que describe el texto.",
      },
    },
    {
      id: "md-en-c2-03-3", theme: "spiritualità",
      title: "Laughter that reconciles", titleEs: "La risa que reconcilia",
      minutes: 3,
      paragraphs: [
        { it: "Laughter, at its kindest, is the sound of reconciliation. Two meanings that had been arguing in the same sentence suddenly shake hands, and the body celebrates with a spasm of joy. This is why a shared laugh feels almost sacred: for one second, two people understood the same thing at the same time, in two different ways. No sermon has ever achieved that.", es: "La risa, en su versión más amable, es el sonido de la reconciliación. Dos significados que venían discutiendo en la misma frase se dan de pronto la mano, y el cuerpo lo celebra con un espasmo de alegría. Por eso una risa compartida se siente casi sagrada: por un segundo, dos personas entendieron lo mismo al mismo tiempo, de dos maneras distintas. Ningún sermón lo ha logrado jamás." },
        { it: "The spiritual traditions were suspicious of jokes and terrible at them, which proves they were paying attention: humor is powerful. It punctures pride without drawing blood. It lets a room hold a hard truth it would spit out if it arrived as a lecture. The comic's discipline — bless the audience, harm no one, punch up or not at all — is a kindness practice with a two-drink minimum. And the groan, that martyred exhale, is the body saying: you got me, and I am glad.", es: "Las tradiciones espirituales desconfiaban de los chistes y eran pésimas con ellos, lo cual prueba que estaban prestando atención: el humor es poderoso. Pincha el orgullo sin derramar sangre. Permite que una sala sostenga una verdad dura que escupiría si llegara como conferencia. La disciplina del cómico — bendecir al público, no dañar a nadie, golpear hacia arriba o no golpear — es una práctica de bondad con consumición incluida. Y el gemido, esa exhalación de mártir, es el cuerpo diciendo: me tienes, y me alegro." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una lista de chistes sobre religiones", "La risa como reconciliación y práctica de bondad", "Por qué está prohibido reír en ciertos lugares"],
        answer: 1,
        why: "El título («la risa que reconcilia») apunta al valor humano y casi sagrado de la risa compartida, no a listas de chistes ni prohibiciones.",
      },
      sequence: {
        instr: "Ordena la secuencia que describe el texto:",
        events: [
          "Two meanings argue inside one sentence",
          "The punchline makes them shake hands",
          "The body celebrates with a spasm of joy",
          "Two people share the same understanding at once",
          "The room exhales together, groaning or laughing",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Think of the last time a room laughed with you, not at you. Where did the laugh live — the belly, the shoulders, the back of the throat? Stay with that memory for one breath. A shared laugh is the shortest meditation there is: for one second, nobody in the room is anywhere else. That second is worth protecting. Aim your jokes the way you aim your kindness — carefully, and never downward.",
        questions: [
          { q: "Where can a laugh live, according to the audio?", kind: "literal", options: ["The belly, the shoulders, the back of the throat", "Only in the belly", "The hands and the knees"], answer: 0, why: "«The belly, the shoulders, the back of the throat»: literal al inicio del audio." },
          { q: "Why is a shared laugh called 'the shortest meditation'?", kind: "inferencial", options: ["Because for that second nobody is anywhere else", "Because it lasts exactly one breath", "Because it only happens with closed eyes"], answer: 0, why: "«For one second, nobody in the room is anywhere else»: presencia total, breve como una meditación." },
          { q: "How should jokes be aimed?", kind: "literal", options: ["Carefully, and never downward", "Quickly and at random", "Only at ourselves"], answer: 0, why: "«Aim your jokes the way you aim your kindness — carefully, and never downward»." },
          { q: "What does 'laughed with you, not at you' distinguish?", kind: "inferencial", options: ["Shared joy versus humiliation", "Loud volume versus silence", "Professional versus amateur comedy"], answer: 0, why: "Se infiere: reír con alguien es alegría compartida; reírse de alguien es humillación." },
        ],
      },
    },
  ],

  "en-cu-c2-04": [
    {
      id: "md-en-c2-04-1", theme: "relax mentale",
      title: "Whose thought is this?", titleEs: "¿De quién es este pensamiento?",
      minutes: 3,
      paragraphs: [
        { it: "The novelists gave us a beautiful tool for the mind: free indirect discourse, the character's thought wearing the narrator's grammar. It works off the page too. Sit quietly and a thought arrives — 'the party was over, then' — and for a second you cannot tell whose voice said it. Yours? The version of you that failed at something? A sentence you read years ago and adopted? The mind, it turns out, is a workshop of unattributed quotations.", es: "Los novelistas nos dieron una herramienta hermosa para la mente: el estilo indirecto libre, el pensamiento del personaje con la gramática del narrador. También funciona fuera de la página. Te sientas en silencio y llega un pensamiento — «la fiesta se había acabado, entonces» — y por un segundo no puedes decir de qué voz salió. ¿Tuya? ¿De la versión de ti que falló en algo? ¿De una frase que leíste hace años y adoptaste? La mente, resulta, es un taller de citas sin atribuir." },
        { it: "The relaxation is in the technique, not in stopping the thoughts. You do not have to silence the interior narrator. You simply learn to read your own mind with its own rule: third-person grammar, first-person flavor. The thought is hosted, not signed. When the panic speaks, you can notice — 'so this was what worry sounded like today' — and the distance of that little 'so' is often enough to let the sentence pass through without buying the whole paragraph.", es: "La relajación está en la técnica, no en detener los pensamientos. No tienes que silenciar al narrador interior. Simplemente aprendes a leer tu propia mente con su propia regla: gramática de tercera persona, sabor de primera. El pensamiento se hospeda, no se firma. Cuando habla el pánico, puedes notarlo — «así que esto era lo que sonaba la preocupación hoy» — y la distancia de ese pequeño «así que» suele bastar para dejar pasar la frase sin comprar el párrafo entero." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ensayo de teoría literaria especializada", "Observar los propios pensamientos como voces sin firmar", "Cómo escribir una novela en treinta días"],
        answer: 1,
        why: "El título pregunta por la autoría del pensamiento: apunta a observar la mente, no a la teoría literaria ni a los manuales de escritura.",
      },
      quiz: [
        { q: "What does the arriving thought — 'the party was over, then' — illustrate?", kind: "literal", options: ["A thought whose author is uncertain, like free indirect discourse", "A memory of a real party last weekend", "A quote from a famous novel the writer loves"], answer: 0, why: "«For a second you cannot tell whose voice said it»: literal en el primer párrafo." },
        { q: "Why does the little 'so' create distance?", kind: "inferencial", options: ["Because it marks the thought as something observed rather than owned", "Because it makes the sentence grammatically correct", "Because it translates the thought into Spanish"], answer: 0, why: "Se infiere: «so this was what worry sounded like» convierte el pensamiento en objeto observado." },
        { q: "What is the advantage of reading the mind 'with its own rule'?", kind: "critica", options: ["Thoughts can pass through without being believed or fought", "It eliminates the need for sleep entirely", "It guarantees better literary taste"], answer: 0, why: "«Let the sentence pass through without buying the whole paragraph»: la regla permite el tránsito sin compra." },
      ],
      vf: [
        { text: "The goal of the practice is to silence the interior narrator.", value: false, why: "«You do not have to silence the interior narrator»: se hospeda, no se silencia." },
        { text: "The mind is described as 'a workshop of unattributed quotations'.", value: true, why: "Literal al final del primer párrafo." },
        { text: "You must identify the original author of every thought.", value: false, why: "«The thought is hosted, not signed»: no hace falta firmar la autoría." },
      ],
    },
    {
      id: "md-en-c2-04-2", theme: "meditazione",
      title: "Reading slowly, one page a night", titleEs: "Leer despacio, una página por noche",
      minutes: 3,
      paragraphs: [
        { it: "There is a way of reading that is really a sitting practice: one page a night, no pencil, no phone, the lamp angled like a small altar. The prose moves at the speed of breath. A paragraph about a kitchen drawer can hold you for ten minutes if you let it — the watch, the receipts, the drawer that outlived its owner. Slow reading is not slowness for its own sake; it is the decision to let a sentence be an event instead of information.", es: "Hay una manera de leer que en realidad es una práctica de sentarse: una página por noche, sin lápiz, sin teléfono, la lámpara inclinada como un pequeño altar. La prosa avanza a la velocidad de la respiración. Un párrafo sobre un cajón de cocina puede retenerte diez minutos si lo dejas: el reloj, los recibos, el cajón que sobrevivió a su dueño. La lectura lenta no es lentitud por sí misma; es la decisión de dejar que una frase sea un acontecimiento en vez de información." },
        { it: "The meditative reader is not trying to finish. That is the whole secret. Finishing is the anxiety of the syllabus; the page under the lamp has no syllabus. When the mind speeds ahead to the ending — who dies, who marries, what the review said — you return, without drama, to the line where the breath is. Novelists spend years choosing the order of their sentences. Honoring that order with attention is a small, precise form of gratitude.", es: "El lector meditativo no intenta terminar. Ese es todo el secreto. Terminar es la ansiedad del temario; la página bajo la lámpara no tiene temario. Cuando la mente se adelanta al final — quién muere, quién se casa, qué dijo la reseña — vuelves, sin drama, a la línea donde está la respiración. Los novelistas pasan años eligiendo el orden de sus frases. Honrar ese orden con atención es una forma pequeña y precisa de gratitud." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Trucos para leer más libros al año", "La lectura lenta como meditación: una página por noche", "Una reseña de una novela de suspenso"],
        answer: 1,
        why: "El título anuncia una práctica nocturna de lectura lenta; apunta a la meditación, no a la productividad lectora.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Slow reading treats each sentence as an event, without the goal of finishing",
          "Reading fast is medically dangerous for the eyes",
          "Only novels about kitchens are worth reading slowly",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "The lamp is angled like a small altar",
          "A paragraph about a kitchen drawer can hold you for ten minutes",
          "You return to the line where the breath is",
        ],
        distractors: [
          "The reader takes notes on every page with a pencil",
          "The practice requires total darkness in the room",
          "Gratitude must be written down in a journal every night",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "One page a night, no pencil, no phone.",
          "The prose moves at the speed of breath.",
          "The lamp is angled like a small altar.",
          "The library closes at nine on weekdays.",
          "You return to the line where the breath is.",
        ],
        intruder: 3,
        why: "El horario de la biblioteca es logística externa: la práctica es la lámpara, la página y la respiración.",
      },
    },
    {
      id: "md-en-c2-04-3", theme: "qui e ora",
      title: "Closing the book, staying in the room", titleEs: "Cerrar el libro, quedarse en la habitación",
      minutes: 2,
      paragraphs: [
        { it: "The hardest moment of reading is not the difficult paragraph; it is the moment after the chapter ends, when the fictional room releases you and the real room is still there, exactly as you left it — the chair, the cold tea, the rain or the traffic doing whatever it was doing all along. Coming back is a skill. The book trained your attention for an hour; now the same attention has a new assignment: here, this chair, this sound, this steam rising from a fresh cup.", es: "El momento más difícil de la lectura no es el párrafo complicado; es el momento después de que el capítulo termina, cuando la habitación ficticia te suelta y la habitación real sigue ahí, exactamente como la dejaste — la silla, el té frío, la lluvia o el tráfico haciendo lo que venían haciendo todo el tiempo. Volver es una destreza. El libro entrenó tu atención durante una hora; ahora la misma atención tiene una tarea nueva: aquí, esta silla, este sonido, este vapor subiendo de una taza recién servida." },
        { it: "Stay two minutes before reaching for the phone. The here and now after a novel is famously disappointing and quietly enough: the window has been performing weather this whole time, and you were out. The practice is not to mourn the ending but to notice the return — the weight of the body in the chair, the light moving an inch, the extraordinary fact that a room can hold you even when nobody in it is speaking. The chapter ended. The room didn't.", es: "Quédate dos minutos antes de ir por el teléfono. El aquí y ahora después de una novela es célebremente decepcionante y calladamente suficiente: la ventana ha estado dando el clima todo este tiempo, y tú no estabas. La práctica no es llorar el final sino notar el regreso — el peso del cuerpo en la silla, la luz moviéndose una pulgada, el hecho extraordinario de que una habitación puede sostenerte aunque nadie en ella hable. El capítulo terminó. La habitación no." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo evitar terminar los libros", "Volver al presente tras cerrar el libro: la habitación real", "Una crítica a las redes sociales y el teléfono"],
        answer: 1,
        why: "El título anuncia el regreso del libro a la habitación: presencia tras la lectura, no consejos de lectura ni crítica tecnológica.",
      },
      sequence: {
        instr: "Ordena los pasos del regreso:",
        events: [
          "The chapter ends and the fictional room releases you",
          "You notice the real room: chair, cold tea, weather at the window",
          "You stay two minutes without reaching for the phone",
          "You feel the weight of the body in the chair",
          "You pour a fresh cup and let the room hold you",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "The book is closed. Before anything else, listen to the room for three breaths. One: the room has a sound of its own — hum, traffic, rain, a refrigerator doing its faithful work. Two: the body has a weight, and the chair has been holding it all along. Three: the light has moved since you started reading, and that small migration is the only news you need right now. Stay. The story will wait for you inside you.",
        questions: [
          { q: "How many breaths do you take while listening to the room?", kind: "literal", options: ["Three", "Ten", "Exactly one"], answer: 0, why: "«Listen to the room for three breaths»: literal al inicio del audio." },
          { q: "What does the 'small migration' of the light indicate?", kind: "inferencial", options: ["That time passed quietly while you read, and that is enough news", "That the lamp is probably broken", "That the sun is setting right now"], answer: 0, why: "«The only news you need right now»: el paso sereno del tiempo es la única noticia necesaria." },
          { q: "What faithful worker is mentioned?", kind: "literal", options: ["A refrigerator", "A grandfather clock", "A neighbor upstairs"], answer: 0, why: "«A refrigerator doing its faithful work»." },
          { q: "Why will the story 'wait for you inside you'?", kind: "inferencial", options: ["Because reading leaves something in you that does not require the book", "Because you bookmarked the exact page", "Because the library keeps extra copies"], answer: 0, why: "Se infiere: lo leído queda dentro; el libro físico ya no es necesario para que la historia espere." },
        ],
      },
    },
  ],

  "en-cu-c2-05": [
    {
      id: "md-en-c2-05-1", theme: "relax fisico",
      title: "Tempo medio", titleEs: "Tempo medio",
      minutes: 3,
      paragraphs: [
        { it: "Diplomatic speech has a body, and the body has rules: medium tempo, level tone, pauses long enough to drive a small truck through. Nothing in the delivery is allowed to leak. The shoulders sit like a settled negotiation; the hands rest on the table as if they had signed something. It looks like power, but it is technique — the physical discipline of a person who has decided that no adjective will be ambushed by their own pulse.", es: "El discurso diplomático tiene cuerpo, y el cuerpo tiene reglas: tempo medio, tono nivelado, pausas lo bastante largas como para pasar por ellas en un camioncito. Nada en la entrega puede filtrarse. Los hombros se sientan como una negociación resuelta; las manos descansan sobre la mesa como si hubieran firmado algo. Parece poder, pero es técnica: la disciplina física de una persona que ha decidido que ningún adjetivo será emboscado por su propio pulso." },
        { it: "You can borrow the body even for ordinary Tuesdays. Before the difficult email, before the family dinner that is also a summit: sit, lengthen the exhale until it is twice the inhale, let the jaw hang like a curtain at rest. The nervous system reads the tempo of the body and negotiates accordingly. Half the calm we admire in diplomats is a breathing pattern rehearsed until it became a posture. The other half is silence, which costs nothing and is rarely spent.", es: "Puedes tomar prestado el cuerpo incluso para los martes corrientes. Antes del correo difícil, antes de la cena familiar que también es una cumbre: siéntate, alarga la exhalación hasta que duplique la inhalación, deja la mandíbula colgar como una cortina en reposo. El sistema nervioso lee el tempo del cuerpo y negocia en consecuencia. La mitad de la calma que admiramos en los diplomáticos es un patrón de respiración ensayado hasta volverse postura. La otra mitad es silencio, que no cuesta nada y rara vez se gasta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de protocolo diplomático", "La postura y la respiración serenas del discurso (calma física prestada)", "Una clase para conducir camiones pequeños"],
        answer: 1,
        why: "El título «Tempo medio» es la regla prosódica del diplomático; el texto la convierte en práctica física, no en protocolo ni en conducción.",
      },
      quiz: [
        { q: "How long are the pauses in diplomatic delivery?", kind: "literal", options: ["Long enough to drive a small truck through", "There are no pauses at all", "Exactly two seconds, by regulation"], answer: 0, why: "«Pauses long enough to drive a small truck through»: literal en el primer párrafo." },
        { q: "Why does the nervous system 'negotiate accordingly'?", kind: "inferencial", options: ["Because it reads the body's tempo and calibrates its response to match", "Because it understands English grammar", "Because it is afraid of the table"], answer: 0, why: "Se infiere: el cuerpo marca el tempo y el sistema nervioso se calibra según ese tempo." },
        { q: "What does 'silence, which costs nothing and is rarely spent' criticize?", kind: "critica", options: ["Our habit of spending words we cannot take back instead of using free silence", "The high price of diplomatic training", "The noise of trucks in Washington"], answer: 0, why: "Lectura crítica: gastamos palabras caras y desechamos el silencio gratuito — la economía invertida." },
      ],
      vf: [
        { text: "Half the diplomatic calm is a rehearsed breathing pattern.", value: true, why: "«A breathing pattern rehearsed until it became a posture»: literal en el segundo párrafo." },
        { text: "The difficult email should be answered mid-breath, immediately.", value: false, why: "«Before the difficult email: sit, lengthen the exhale»: primero el cuerpo, luego el correo." },
        { text: "The exhale should be twice as long as the inhale.", value: true, why: "«Lengthen the exhale until it is twice the inhale»." },
      ],
    },
    {
      id: "md-en-c2-05-2", theme: "spiritualità",
      title: "The pause before further engagement", titleEs: "La pausa antes del compromiso",
      minutes: 3,
      paragraphs: [
        { it: "The diplomats keep one spiritual practice without calling it that: the pause. 'We look forward to further engagement' — and then, the silence, the long tea-colored pause in which nothing is promised and nothing is burned. The old negotiators knew that the pause is where the future is stored. Every tradition of wisdom says something similar: do not answer while the blood is loud; let the sentence cross the room twice before you sign it with your mouth.", es: "Los diplomáticos conservan una práctica espiritual sin llamarla así: la pausa. «Esperamos un compromiso continuado» — y luego, el silencio, la larga pausa color de té en la que nada se promete y nada se quema. Los viejos negociadores sabían que la pausa es donde se guarda el futuro. Toda tradición de sabiduría dice algo parecido: no respondas mientras la sangre está alta; deja que la frase cruce la habitación dos veces antes de firmarla con la boca." },
        { it: "There is an equanimity in the unhurried reply that borders on devotion. It honors the other person's words enough to let them finish existing before yours begin. It honors tomorrow's version of you, who will have to live with whatever today's version said. The pause is not evasion. It is the belief — quiet, structural, almost liturgical — that a door left open is a form of kindness, and that no truth needs to arrive on fire to be true.", es: "Hay una ecuanimidad en la respuesta sin prisa que roza la devoción. Honra las palabras del otro lo suficiente como para dejarlas terminar de existir antes de que empiecen las tuyas. Honra a la versión de ti de mañana, que tendrá que vivir con lo que diga la versión de hoy. La pausa no es evasión. Es la creencia — silenciosa, estructural, casi litúrgica — de que una puerta abierta es una forma de bondad, y de que ninguna verdad necesita llegar en llamas para ser verdad." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un tratado sobre el té y sus ceremonias", "La pausa serena antes de responder como práctica espiritual", "Cómo cerrar negociaciones rápidamente"],
        answer: 1,
        why: "El título juega con la fórmula diplomática «further engagement»: apunta a la pausa como práctica, no al té ni a la velocidad negociadora.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "The unhurried pause is a form of kindness: it honors the speaker and tomorrow's version of you",
          "Diplomats should always answer instantly to look strong",
          "Tea solves most international conflicts",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Do not answer while the blood is loud",
          "Let the sentence cross the room twice",
          "A door left open is a form of kindness",
        ],
        distractors: [
          "Silence is legally required in all treaties",
          "The pause must last exactly one minute",
          "Loud answers are always more honest than quiet ones",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The pause is where the future is stored.",
          "Do not answer while the blood is loud.",
          "Let the sentence cross the room twice.",
          "The embassy cafeteria serves lunch at noon.",
          "No truth needs to arrive on fire to be true.",
        ],
        intruder: 3,
        why: "El menú de la cafetería es logística diplomática ajena a la práctica espiritual de la pausa.",
      },
    },
    {
      id: "md-en-c2-05-3", theme: "relax mentale",
      title: "Reading the adjectives, not the nouns", titleEs: "Leer los adjetivos, no los sustantivos",
      minutes: 3,
      paragraphs: [
        { it: "The news arrives dressed as nouns — summits, deadlines, statements — but it hits as adjectives: alarming, unprecedented, catastrophic. The tired mind absorbs the temperature of every word and ends the day with a fever it never chose. There is a mental hygiene practice borrowed from the analysts: read the adjectives, notice the nouns, and refuse the escalation on the intake side. You are not responsible for the weather of the language; you are responsible for whether you hang it in your own sky.", es: "La noticia llega vestida de sustantivos — cumbres, plazos, comunicados — pero golpea como adjetivos: alarmante, sin precedentes, catastrófico. La mente cansada absorbe la temperatura de cada palabra y termina el día con una fiebre que nunca eligió. Hay una práctica de higiene mental tomada de los analistas: lee los adjetivos, nota los sustantivos y rechaza la escalada en la puerta de entrada. No eres responsable del clima del lenguaje; eres responsable de si lo cuelgas en tu propio cielo." },
        { it: "This is not denial. The facts keep their seats; only the percussion section is asked to lower its volume. Try it with one headline: strip the intensifiers, restore the agent, and see how much of the emergency was formatting. What remains is usually still serious — and now speakable, because the nervous system can only process what the ear can carry. A calm reading of a hard truth is not a smaller reading. It is the only reading that fits through the door of action.", es: "Esto no es negación. Los hechos conservan sus asientos; solo se le pide a la sección de percusión que baje el volumen. Pruébalo con un titular: quita los intensificadores, restaura el agente y mira cuánta parte de la emergencia era formato. Lo que queda suele seguir siendo serio — y ya decible, porque el sistema nervioso solo puede procesar lo que el oído puede cargar. Una lectura serena de una verdad dura no es una lectura menor. Es la única lectura que cabe por la puerta de la acción." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una columna de meteorología", "Higiene mental ante el lenguaje escalado: leer adjetivos sin absorberlos", "Una guía para redactar mejores titulares"],
        answer: 1,
        why: "El título retoma el consejo de la analista («read the adjectives, not the nouns»): apunta a la salud mental del lector, no al clima ni al periodismo.",
      },
      sequence: {
        instr: "Ordena los pasos de la práctica:",
        events: [
          "A headline arrives dressed as nouns but hits as adjectives",
          "You notice the temperature of the words",
          "You strip the intensifiers and restore the agent",
          "You see how much of the emergency was formatting",
          "You carry the serious remainder through the door of action",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Take the last headline you read, and read it again in slow motion. First the nouns: who, what, where — just the furniture of the fact. Now the adjectives: which one was doing the shouting? Say it aloud, once, at half volume. Notice that the fact has not changed, and your shoulders have. That drop — that half-inch of shoulder — is the difference between being informed and being recruited.",
        questions: [
          { q: "What do you read first when you slow down the headline?", kind: "literal", options: ["The nouns — who, what, where", "The readers' comments", "The publication date"], answer: 0, why: "«First the nouns: who, what, where»: literal en el audio." },
          { q: "What does the half-inch drop of the shoulders mark?", kind: "inferencial", options: ["The difference between being informed and being recruited", "The beginning of sleep", "A successful physical workout"], answer: 0, why: "«That drop is the difference between being informed and being recruited»: el cuerpo distingue información de reclutamiento." },
          { q: "What do you do with the shouting adjective?", kind: "literal", options: ["Say it once, at half volume", "Delete it and forget the news", "Repeat it louder for emphasis"], answer: 0, why: "«Say it aloud, once, at half volume»." },
          { q: "Why does the fact 'not change' during the exercise?", kind: "inferencial", options: ["Because the practice adjusts your relationship to the words, not the events", "Because headlines are usually fictional", "Because nouns cannot be modified"], answer: 0, why: "Se infiere: el hecho permanece; lo que cambia es tu forma de recibirlo." },
        ],
      },
    },
  ],

  "en-cu-c2-06": [
    {
      id: "md-en-c2-06-1", theme: "meditazione",
      title: "White space", titleEs: "Espacio en blanco",
      minutes: 2,
      paragraphs: [
        { it: "A screenplay page teaches meditation without meaning to. Look at all that white: the pauses are written into the format, the silence is typeset, the breathing room is a margin requirement. In a culture that fills every inch, the screenplay is a monk's page — action in the present tense, three lines at most, and then the generous nothing that lets the reader's mind rest between beats. The white space is not empty. It is the visual form of a held breath.", es: "Una página de guion enseña meditación sin proponérselo. Mira todo ese blanco: las pausas están escritas en el formato, el silencio está compuesto tipográficamente, el aire es un requisito del margen. En una cultura que llena cada pulgada, el guion es la página de un monje — acción en presente, tres líneas como máximo, y luego la nada generosa que deja a la mente del lector descansar entre beats. El espacio en blanco no está vacío. Es la forma visual de una respiración contenida." },
        { it: "Meditation, at its most practical, is learning to trust the white space of the mind — the gap between two thoughts where nothing needs to be fixed. The format promises the reader: what you need will arrive in the next block, and the emptiness in between is safe. The practice promises you the same thing about your own afternoons. You do not have to write over the silence to make it productive. The silence is the formatting. Something is about to happen on the next line, and it needs this room.", es: "La meditación, en su versión más práctica, es aprender a confiar en el espacio en blanco de la mente — el hueco entre dos pensamientos donde nada necesita ser arreglado. El formato le promete al lector: lo que necesitas llegará en el siguiente bloque, y el vacío entre medias es seguro. La práctica te promete lo mismo sobre tus propias tardes. No tienes que escribir sobre el silencio para volverlo productivo. El silencio es el formato. Algo está a punto de ocurrir en la siguiente línea, y necesita este espacio." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de tipografía y diseño", "El espacio en blanco del guion (y de la mente) como meditación", "Cómo vender un guion en Hollywood"],
        answer: 1,
        why: "El título «White space» apunta al blanco de la página del guion y su lección para la mente, no al diseño ni al negocio.",
      },
      quiz: [
        { q: "How is the white space described on the screenplay page?", kind: "literal", options: ["As the visual form of a held breath", "As a printing error to be fixed", "As a place for the writer's private notes"], answer: 0, why: "«It is the visual form of a held breath»: literal al final del primer párrafo." },
        { q: "Why does the format promise the reader that the emptiness 'is safe'?", kind: "inferencial", options: ["Because what is needed will arrive in the next block, so the gap can be trusted", "Because the story is already finished", "Because action lines are always short"], answer: 0, why: "«What you need will arrive in the next block»: el hueco es seguro porque lo siguiente ya viene." },
        { q: "What does 'the silence is the formatting' propose about rest?", kind: "critica", options: ["That rest is structural, not wasted: it makes the next line possible", "That silence should be sold as a product", "That formatting matters more than story"], answer: 0, why: "Lectura crítica: el silencio no es ausencia sino estructura que habilita lo que sigue." },
      ],
      vf: [
        { text: "The screenplay page fills every inch with text.", value: false, why: "«The screenplay is a monk's page»: es una página de blancos, no llena." },
        { text: "The white space between beats is compared to a held breath.", value: true, why: "«It is the visual form of a held breath»." },
        { text: "Meditation asks you to write over the silence to make it productive.", value: false, why: "«You do not have to write over the silence»: el silencio no se cubre." },
      ],
    },
    {
      id: "md-en-c2-06-2", theme: "qui e ora",
      title: "A beat", titleEs: "Un beat",
      minutes: 2,
      paragraphs: [
        { it: "Screenwriters have a beautiful unit of time: the beat. One second, written down, honored — 'A beat. Then: Fine.' Most of us treat seconds as things to be survived on the way to the next scene. The screenplay treats a second as an event with its own page number. In that one written second, an entire decision happens: the face changes its mind, the hand almost reaches out, the room decides whether to forgive.", es: "Los guionistas tienen una unidad de tiempo hermosa: el beat. Un segundo, escrito, honrado — «Un beat. Entonces: De acuerdo». La mayoría de nosotros trata los segundos como cosas que sobrevivir de camino a la siguiente escena. El guion trata un segundo como un acontecimiento con su propio número de página. En ese segundo escrito ocurre una decisión entera: la cara cambia de parecer, la mano casi se extiende, la habitación decide si perdona." },
        { it: "Living in beats is the here and now with a typewriter's discipline. This beat: the kettle, not the meeting. This beat: the walk to the door, not the whole day compressed into dread. The scene, the coach says, enters late and leaves early — and so can attention: arrive when it matters, leave before the goodbyes. A day measured in honest beats is shorter on paper and longer in experience, which is the only exchange rate that matters.", es: "Vivir en beats es el aquí y ahora con la disciplina de una máquina de escribir. Este beat: la tetera, no la reunión. Este beat: la caminata a la puerta, no el día entero comprimido en miedo. La escena, dice el mentor, entra tarde y sale temprano — y la atención también puede: llega cuando importa, vete antes de los adioses. Un día medido en beats honestos es más corto en el papel y más largo en la experiencia, que es el único tipo de cambio que importa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ensayo sobre máquinas de escribir antiguas", "El «beat» del guion como unidad de presencia (aquí y ahora)", "Cómo alargar las reuniones de trabajo"],
        answer: 1,
        why: "El título nombra la unidad del guion («A beat»); el texto la convierte en práctica de presencia, no en historia de la máquina.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "A beat is a one-second event worth full attention; days measured in beats feel longer and truer",
          "Screenplays should be written without any pauses",
          "Time only exists inside movie theaters",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "A second can hold an entire decision",
          "This beat: the kettle, not the meeting",
          "Attention can enter late and leave early",
        ],
        distractors: [
          "Beats must be exactly one minute long",
          "The coach banned typewriters from the set",
          "Goodbyes are the most important part of a scene",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "One second, written down, honored.",
          "A beat can hold an entire decision.",
          "This beat: the kettle, not the meeting.",
          "The studio parking lot has forty spaces.",
          "Attention can enter late and leave early.",
        ],
        intruder: 3,
        why: "El estacionamiento del estudio es logística de rodaje: no pertenece a la práctica de vivir en beats.",
      },
    },
    {
      id: "md-en-c2-06-3", theme: "relax fisico",
      title: "Enter late, leave early", titleEs: "Entra tarde, sal temprano",
      minutes: 3,
      paragraphs: [
        { it: "The screenwriter's rule is a physical relief in disguise: enter late, leave early. Lungs know it — no breath lingers past its usefulness. Scenes learn it — cut before the goodbyes, start at the last possible second. And bodies beg for it daily: the meeting that could have been an email, the hug that held on for three verses past its music, the conversation rehearsing its own encore. Staying past the beat is how tension becomes noise.", es: "La regla del guionista es un alivio físico disfrazado: entra tarde, sal temprano. Los pulmones la conocen: ninguna respiración se queda más de lo útil. Las escenas la aprenden: corta antes de los adioses, empieza en el último segundo posible. Y los cuerpos la ruegan a diario: la reunión que pudo ser un correo, el abrazo que se sostuvo tres estrofas más allá de su música, la conversación ensayando su propio bis. Quedarse pasado el beat es como la tensión se vuelve ruido." },
        { it: "Practicing the early exit is a muscular kindness. The exhale that does not apologize for ending, the visit that leaves while the room still wants more, the evening that closes before exhaustion writes the final scene. You are not abandoning anything; you are trusting the cut. The editors know: the emotion continues off screen. What you leave early, the body finishes gently by itself — and what remains is not less life, but life with better margins.", es: "Practicar la salida temprana es una bondad muscular. La exhalación que no se disculpa por terminar, la visita que se va mientras la sala todavía quiere más, la tarde que cierra antes de que el agotamiento escriba la escena final. No estás abandonando nada: estás confiando en el corte. Los editores lo saben: la emoción continúa fuera de cuadro. Lo que dejas temprano, el cuerpo lo termina suavemente solo — y lo que queda no es menos vida, sino vida con mejores márgenes." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de cine y edición avanzada", "Salir temprano y entrar tarde como alivio físico (el corte amable)", "Cómo despedirse con formalidad en eventos"],
        answer: 1,
        why: "El título toma la regla del guion, pero el enfoque («alivio físico», «corte amable») apunta al cuerpo, no a la edición profesional.",
      },
      sequence: {
        instr: "Ordena los pasos de la salida temprana:",
        events: [
          "Notice the moment entering its final beat",
          "Release the breath without apologizing",
          "Choose the cut over the encore",
          "Leave while the room still wants more",
          "Let the body finish the emotion gently off screen",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Let's rehearse an early exit, gently. Choose some small ending near you — a cup, a paragraph, a phone call that has said what it needed. Feel the last beat of it, the little silence that means we are done. Now stand, or close the page, or say the short thank you — and stop there. No encore, no explanation. Notice the strange lightness, the margin you just gave your day. That lightness is the edit. Rest in it for two breaths.",
        questions: [
          { q: "What do you choose at the start of the exercise?", kind: "literal", options: ["A small ending near you", "A brand new project", "A difficult person to call"], answer: 0, why: "«Choose some small ending near you — a cup, a paragraph, a phone call»: literal en el audio." },
          { q: "What is 'the margin you just gave your day'?", kind: "inferencial", options: ["Free space created by ending something at its natural beat", "The edge of a notebook page", "Extra money saved for later"], answer: 0, why: "Se infiere: terminar en el beat natural deja espacio libre — margen — en el día." },
          { q: "How long do you rest in the lightness at the end?", kind: "literal", options: ["Two breaths", "Twenty minutes", "Until sunset"], answer: 0, why: "«Rest in it for two breaths»." },
          { q: "Why 'no encore, no explanation'?", kind: "inferencial", options: ["Because a clean cut needs no justification, and explanation dilutes the ending", "Because speaking is forbidden during the exercise", "Because the phone call was a mistake"], answer: 0, why: "El corte limpio se basta a sí mismo; la explicación diluye el final." },
        ],
      },
    },
  ],

  "en-cu-c2-07": [
    {
      id: "md-en-c2-07-1", theme: "spiritualità",
      title: "Who is not in the sentence", titleEs: "Quién no está en la frase",
      minutes: 3,
      paragraphs: [
        { it: "The analyst's question — who is not in the sentence? — is secretly a spiritual exercise. Every unmarked plural hides particular faces: 'the American people,' 'the migrants,' 'the residents,' each word doing the work of millions of absences. To ask who is missing is to insist that the unnamed are particular, that they have kitchens and coughs and opinions about the weather. Compassion begins exactly where the generalization ends.", es: "La pregunta del analista — ¿quién no está en la frase? — es en secreto un ejercicio espiritual. Cada plural sin marca esconde rostros particulares: «el pueblo americano», «los migrantes», «los residentes», cada palabra haciendo el trabajo de millones de ausencias. Preguntar quién falta es insistir en que los no nombrados son particulares, que tienen cocinas y toses y opiniones sobre el clima. La compasión empieza exactamente donde termina la generalización." },
        { it: "The practice is simple and slightly uncomfortable: when the language sweeps broadly, slow down and restore the singular. Not to win an argument — the point is not being right but staying human at the speed of abstraction. The great traditions phrase it as seeing the face of the other. The journalists phrase it as restoring the agent. Both are describing the same discipline: the refusal to let a sentence carry more people than it can look in the eye.", es: "La práctica es simple y levemente incómoda: cuando el lenguaje barre amplio, baja la velocidad y restaura el singular. No para ganar una discusión — la cuestión no es tener razón sino seguir humano a la velocidad de la abstracción. Las grandes tradiciones lo formulan como ver el rostro del otro. Los periodistas lo formulan como restaurar el agente. Ambas describen la misma disciplina: la negativa a dejar que una frase cargue más gente de la que puede mirar a los ojos." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una lección de gramática básica sobre plurales", "Compasión por los no nombrados: quién no está en la frase", "Cómo escribir plurales correctamente en inglés"],
        answer: 1,
        why: "El título retoma la pregunta de la analista: apunta a la compasión por los ausentes del discurso, no a la gramática de los plurales.",
      },
      quiz: [
        { q: "What does every unmarked plural hide, according to the text?", kind: "literal", options: ["Particular faces — kitchens, coughs, opinions about the weather", "Spelling mistakes by the writer", "Legal citations from the record"], answer: 0, why: "«They have kitchens and coughs and opinions about the weather»: literal en el primer párrafo." },
        { q: "Why is the practice 'slightly uncomfortable'?", kind: "inferencial", options: ["Because slowing down abstraction makes the absences feel personal", "Because plurals are grammatically incorrect", "Because journalists dislike all questions"], answer: 0, why: "Se infiere: al bajar la velocidad, las ausencias dejan de ser abstractas y se vuelven personales." },
        { q: "What do 'seeing the face of the other' and 'restoring the agent' share?", kind: "critica", options: ["Both refuse to let language carry more people than it can look in the eye", "Both are techniques for winning political arguments", "Both require specialized academic vocabulary"], answer: 0, why: "La lectura crítica: tradiciones y periodismo describen la misma disciplina de concretar al ausente." },
      ],
      vf: [
        { text: "The goal of restoring the singular is to win arguments.", value: false, why: "«The point is not being right but staying human»: el objetivo es la humanidad, no la victoria." },
        { text: "Compassion begins where generalization ends.", value: true, why: "«Compassion begins exactly where the generalization ends»." },
        { text: "The unnamed people are described as having kitchens and coughs.", value: true, why: "Literal en el primer párrafo: particularidades cotidianas de los ausentes." },
      ],
    },
    {
      id: "md-en-c2-07-2", theme: "relax mentale",
      title: "Stripping the percussion", titleEs: "Quitar la percusión",
      minutes: 3,
      paragraphs: [
        { it: "Political speech runs on percussion: the repeated verb, the three-beat clause, the applause line that lands whether or not anything was said. After a debate, the rhythm keeps drumming in the listener — the beat of being informed and the anxiety of being behind. Mental relaxation, the day after, consists of one operation: strip the percussion. Take the memorable phrase and slow it down until it confesses how little of it you actually needed.", es: "El discurso político marcha sobre percusión: el verbo repetido, la cláusula de tres golpes, la frase de aplauso que aterriza digan algo o no. Después de un debate, el ritmo sigue tamborileando en el oyente — el golpe de estar informado y la ansiedad de ir tarde. La relajación mental, al día siguiente, consiste en una sola operación: quita la percusión. Toma la frase memorable y raléntizala hasta que confiese qué poco de ella necesitabas de verdad." },
        { it: "What survives the stripping is usually two or three facts and one feeling. Keep the facts; name the feeling; let the drumming go. The mind that carries only what it examined is not less informed — it is less occupied. There is a quiet strength in being the one person at the table who can hear a slogan and hear, underneath it, the silence where a specific person should have been. The noise wanted your pulse. Your pulse, as it turns out, had other plans.", es: "Lo que sobrevive al despojo suele ser dos o tres hechos y un sentimiento. Guarda los hechos; nombra el sentimiento; deja ir el tambor. La mente que solo carga lo que examinó no está menos informada: está menos ocupada. Hay una fuerza silenciosa en ser la única persona de la mesa capaz de oír un eslogan y oír, debajo, el silencio donde debería haber estado una persona concreta. El ruido quería tu pulso. Tu pulso, resulta, tenía otros planes." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una crítica musical de desfiles populares", "Desactivar la percusión retórica del discurso (relajación mental)", "Cómo tocar el tambor en una banda"],
        answer: 1,
        why: "El título usa la metáfora del curso («repetition is percussion»): apunta a desmontar la retórica, no a la música.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "After absorbing rhetoric, strip the percussion: keep the facts you examined and release the drumming",
          "All political speech must be memorized for safety",
          "Anxiety is the best way to stay informed",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "The rhythm keeps drumming in the listener after the debate",
          "Slow the memorable phrase down until it confesses",
          "The mind that carries only what it examined is less occupied",
        ],
        distractors: [
          "Facts must be discarded along with the slogans",
          "Your pulse should follow the applause line",
          "Debates always last exactly one hour",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The beat of being informed, the anxiety of being behind.",
          "Slow the memorable phrase down.",
          "Keep the facts; name the feeling.",
          "The debate hall holds an audience of four hundred.",
          "Your pulse had other plans.",
        ],
        intruder: 3,
        why: "El aforo del recinto es un dato logístico: no pertenece a la práctica mental de desactivar la percusión.",
      },
    },
    {
      id: "md-en-c2-07-3", theme: "meditazione",
      title: "After the debate, the kettle", titleEs: "Tras el debate, la tetera",
      minutes: 3,
      paragraphs: [
        { it: "The debate ends at ten; the mind, uninvited, keeps debating until two. The meditation that actually works on such nights is embarrassingly domestic: stand up, fill the kettle, and give the water your full attention until it boils. The rumble, the first bubbles, the steam's slow argument with the cold air — the whole show takes four minutes and stars no commentators. Attention, directed at something honest and small, forgets to keep score.", es: "El debate termina a las diez; la mente, sin invitación, sigue debatiendo hasta las dos. La meditación que de verdad funciona en esas noches es vergonzosamente doméstica: párate, llena la tetera y dale al agua tu atención completa hasta que hierva. El retumbo, las primeras burbujas, la lenta discusión del vapor con el aire frío — el espectáculo entero dura cuatro minutos y no tiene comentaristas. La atención, dirigida a algo honesto y pequeño, olvida llevar la cuenta." },
        { it: "The tea itself is the second half of the practice. You hold the warm cup with both hands, and for a few sips the evening is just an evening again — no sides, no swing states, no imagined rebuttals to relatives. This is not avoidance; it is repair. The nervous system that spent hours in artificial urgency needs a task with a natural ending. The kettle boils, the tea steeps, the cup empties, and somewhere in that arc the body remembers that most nights end, quietly, without a winner being declared.", es: "El té en sí es la segunda mitad de la práctica. Sostienes la taza caliente con las dos manos y, por unos sorbos, la tarde vuelve a ser solo una tarde — sin bandos, sin estados indecisos, sin réplicas imaginadas para los parientes. Esto no es evasión: es reparación. El sistema nervioso que pasó horas en urgencia artificial necesita una tarea con final natural. La tetera hierve, el té reposa, la taza se vacía, y en algún punto de ese arco el cuerpo recuerda que la mayoría de las noches terminan, en silencio, sin que se declare un ganador." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Recetas de tés exóticos del mundo", "Volver a la calma doméstica tras un debate: el agua y la taza", "Cómo ganar una discusión familiar"],
        answer: 1,
        why: "El título anuncia el regreso a lo doméstico (la tetera) después del debate: calma, no recetas ni estrategias de discusión.",
      },
      sequence: {
        instr: "Ordena los pasos de la noche:",
        events: [
          "The debate ends but the mind keeps arguing",
          "You stand and fill the kettle",
          "You watch the water with full attention until it boils",
          "You hold the warm cup with both hands",
          "The body remembers the night ends without a winner",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "The screen is off, and the evening needs a new host. Kitchen, please. Fill the kettle and listen to it fill — that first cold rush, then the pitch changing as the water rises. Now wait for the boil like it is the only news tonight: the low hum, the small bubbles, the full rumble. While it climbs, let your shoulders climb down. The water will boil in its own time, and nothing you rehearse in your head will make it faster. That is the lesson, and the tea is the certificate.",
        questions: [
          { q: "What do you listen to as the kettle fills?", kind: "literal", options: ["The cold rush and the changing pitch of the water", "The evening news on the radio", "A podcast about debates"], answer: 0, why: "«That first cold rush, then the pitch changing»: literal en el audio." },
          { q: "Why does rehearsing in your head not help the water?", kind: "inferencial", options: ["Because the kettle boils at its own pace — the lesson is accepting what cannot be hurried", "Because the stove is probably broken", "Because thoughts are forbidden in kitchens"], answer: 0, why: "«The water will boil in its own time»: aceptar lo que no se puede apurar es la lección." },
          { q: "What do the shoulders do while the water climbs?", kind: "literal", options: ["They climb down", "They freeze in place", "They rise toward the ears"], answer: 0, why: "«Let your shoulders climb down»." },
          { q: "What is 'the certificate' at the end?", kind: "inferencial", options: ["The tea: proof you practiced waiting without forcing", "A diploma from a meditation school", "The receipt from the grocery store"], answer: 0, why: "El té certifica la práctica de esperar sin forzar: la prueba es la bebida misma." },
        ],
      },
    },
  ],

  "en-cu-c2-08": [
    {
      id: "md-en-c2-08-1", theme: "qui e ora",
      title: "Lingering over coffee", titleEs: "Quedarse con el café",
      minutes: 2,
      paragraphs: [
        { it: "Spanish keeps a word for the hour when the meal is over and the talking isn't: sobremesa. English has no address for it, but the practice translates perfectly: the cups refilled, the plates pushed to the center, the conversation that can finally slow down because nothing is being served anymore. Presence, here, is not a technique. It is what remains when the agenda runs out — the purest hour of a table, and most tables never visit it.", es: "El español guarda una palabra para la hora en que la comida terminó y la conversación no: sobremesa. El inglés no tiene dirección para ella, pero la práctica se traduce perfecta: las tazas rellenadas, los platos empujados al centro, la conversación que por fin puede frenar porque ya no se sirve nada. La presencia, aquí, no es una técnica. Es lo que queda cuando la agenda se agota — la hora más pura de una mesa, y la mayoría de las mesas nunca la visitan." },
        { it: "To linger is a small act of civilization. The phone sleeps face down; the second coffee goes cold and is forgiven; the story that started as small talk unspools into something that matters. The translator's rule applies to life as well: translate the scene, not the dictionary. Do not schedule the sobremesa, do not name it, do not optimize it — just stay ten minutes past the end, and let the table do what tables do when nobody is in a hurry: hold people.", es: "Quedarse es un pequeño acto de civilización. El teléfono duerme boca abajo; el segundo café se enfría y es perdonado; la historia que empezó como charla trivial se desenreda hasta volverse algo que importa. La regla del traductor sirve también para la vida: traduce la escena, no el diccionario. No agendes la sobremesa, no la nombres, no la optimices — solo quédate diez minutos más allá del final, y deja que la mesa haga lo que hacen las mesas cuando nadie tiene prisa: sostener personas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un diccionario de gastronomía española", "La sobremesa como práctica de presencia (quedarse sin prisa)", "Cómo preparar café como un barista profesional"],
        answer: 1,
        why: "El título alude al «lingered over coffee» del oficio de traducir: apunta a quedarse en la mesa, no a gastronomía ni cafetería.",
      },
      quiz: [
        { q: "What is the sobremesa, as described?", kind: "literal", options: ["The hour when the meal is over and the talking continues", "The main course of a Spanish dinner", "The bill at the end of a restaurant meal"], answer: 0, why: "«The hour when the meal is over and the talking isn't»: literal en el primer párrafo." },
        { q: "Why is it 'the purest hour of a table'?", kind: "inferencial", options: ["Because it happens when the agenda has run out and presence is all that remains", "Because the food tastes better after the meal", "Because everyone at the table speaks Spanish"], answer: 0, why: "Se infiere de «what remains when the agenda runs out»: sin tareas, queda pura presencia." },
        { q: "What does 'do not optimize it' suggest about presence?", kind: "critica", options: ["That presence dies when treated as a task to be improved or measured", "That Spanish meals are far too long", "That cold coffee should never be forgiven"], answer: 0, why: "Lectura crítica: la presencia no se programa ni se mide; optimizarla la mata." },
      ],
      vf: [
        { text: "The second coffee going cold is described as forgivable.", value: true, why: "«The second coffee goes cold and is forgiven»: literal en el segundo párrafo." },
        { text: "The sobremesa should be scheduled and optimized.", value: false, why: "«Do not schedule the sobremesa, do not name it, do not optimize it»." },
        { text: "The phone sleeps face down during the lingering.", value: true, why: "«The phone sleeps face down»." },
      ],
    },
    {
      id: "md-en-c2-08-2", theme: "relax fisico",
      title: "The breath between two languages", titleEs: "La respiración entre dos idiomas",
      minutes: 3,
      paragraphs: [
        { it: "Every bilingual body knows the little border crossing: the half-second before switching languages, when the mouth reorganizes itself and the breath waits. That pause is a physical place. The tongue changes address, the lips take a new job, even the rhythm of the walk seems to renegotiate. Instead of rushing across, some speakers rest there — one breath at the customs desk — and let both languages exist at once, unreconciled and unproblematic.", es: "Todo cuerpo bilingüe conoce el pequeño cruce de frontera: el medio segundo antes de cambiar de idioma, cuando la boca se reorganiza y la respiración espera. Esa pausa es un lugar físico. La lengua cambia de domicilio, los labios toman un empleo nuevo, hasta el ritmo de la caminata parece renegociarse. En vez de cruzar apurado, algunos hablantes descansan ahí — una respiración en el puesto de aduana — y dejan que ambos idiomas existan a la vez, sin reconciliar y sin problema." },
        { it: "The relaxation practice is to stop smoothing the switch. Feel the muscles change assignments; notice which language lives higher in the chest and which sits lower in the jaw. Neither is home base and neither is abroad — they are two rooms of one house, and the hallway between them is yours. The old fear, that mixing means failing, dissolves when you feel the border as anatomy rather than error. The body has been bilingual all along. It is the judgment that arrived late and uninvited.", es: "La práctica de relajación es dejar de alisar el cambio. Siente los músculos cambiar de asignación; nota qué idioma vive más alto en el pecho y cuál se sienta más abajo en la mandíbula. Ninguno es la base y ninguno es el extranjero: son dos cuartos de una sola casa, y el pasillo entre ellos es tuyo. El viejo miedo, que mezclar signifique fracasar, se disuelve cuando sientes la frontera como anatomía y no como error. El cuerpo ha sido bilingüe todo este tiempo. El juicio llegó tarde y sin invitación." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso de fonética comparada", "El cuerpo bilingüe: descansar en la pausa entre dos idiomas", "Cómo evitar hablar dos idiomas a la vez"],
        answer: 1,
        why: "El título anuncia la respiración entre idiomas: apunta a la experiencia corporal del bilingüismo, no a la fonética académica.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "The pause between languages is a physical place to rest in, not an error to smooth away",
          "Bilinguals should choose one language forever",
          "Breathing exercises damage pronunciation",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "The mouth reorganizes itself in the half-second before switching",
          "One language may live higher in the chest, another lower in the jaw",
          "The body has been bilingual all along",
        ],
        distractors: [
          "The hallway between languages must be renovated",
          "Mixing languages is forbidden in most workplaces",
          "The judgment arrived first, before the languages",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The mouth reorganizes itself before switching.",
          "The breath waits at the border crossing.",
          "Neither language is home base or abroad.",
          "The customs office closes at six on Fridays.",
          "The body has been bilingual all along.",
        ],
        intruder: 3,
        why: "El horario de la aduana es burocracia literal: aquí la frontera es una metáfora corporal, no una oficina.",
      },
    },
    {
      id: "md-en-c2-08-3", theme: "spiritualità",
      title: "Fidelity to the spirit", titleEs: "Fidelidad al espíritu",
      minutes: 3,
      paragraphs: [
        { it: "Translators speak of loyalty the way gardeners speak of watering: constantly, modestly, without applause. Their fidelity is not to the word but to the scene — carrying a sobremesa across a border it was never given papers for, and setting it down, alive, on the other side. This is a spiritual posture disguised as a profession: devotion to something that will never be perfectly finished, service to voices that cannot thank you.", es: "Los traductores hablan de la lealtad como los jardineros hablan del riego: constantemente, con modestia, sin aplausos. Su fidelidad no es a la palabra sino a la escena — cruzar una sobremesa por una frontera para la que nunca le dieron papeles, y dejarla, viva, del otro lado. Es una postura espiritual disfrazada de profesión: devoción a algo que nunca estará perfectamente terminado, servicio a voces que no pueden agradecerte." },
        { it: "To live like a translator is to assume that meaning matters more than ownership. You hold sentences that are not yours, carefully, the way you might hold someone else's baby — supporting the head, returning it intact. Gratitude flows in both directions along that border: the original language that raised you, the new one that lets you work. And on the best days, the two of them stand on either side of a single sentence, nodding at each other like old friends who have finally been introduced.", es: "Vivir como traductor es asumir que el sentido importa más que la propiedad. Sostienes frases que no son tuyas, con cuidado, como sostendrías el bebé de otro — sujetando la cabeza, devolviéndolo intacto. La gratitud fluye en ambos sentidos por esa frontera: la lengua original que te crió, la nueva que te deja trabajar. Y en los mejores días, las dos se paran a los lados de una misma frase, saludándose con la cabeza como viejos amigos a los que por fin les han presentado." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["El contrato laboral de un traductor freelance", "La traducción como devoción: lealtad al espíritu y gratitud por ambos idiomas", "Una guía para tramitar la ciudadanía"],
        answer: 1,
        why: "El título («fidelidad al espíritu») apunta a la dimensión devota del oficio, no a contratos ni trámites.",
      },
      sequence: {
        instr: "Ordena la secuencia del oficio:",
        events: [
          "The translator receives a sentence that is not hers",
          "She holds it carefully, like someone else's baby, supporting the head",
          "She carries the scene across the border without papers",
          "She sets it down, alive, on the other side",
          "The two languages nod at each other like old friends",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Sit for a moment with a sentence you love in the language you learned second. Say it slowly, twice. Now thank it, quietly, in the language you learned first — the one that taught your mouth how to be a mouth. Notice that no translation is needed for the thanking. The gratitude itself is bilingual, and it has always been. You did not choose between your languages. You grew a hallway between them, and tonight the hallway is warm.",
        questions: [
          { q: "How many times do you say the loved sentence?", kind: "literal", options: ["Twice, slowly", "Ten times, quickly", "Only once, in your head"], answer: 0, why: "«Say it slowly, twice»: literal en el audio." },
          { q: "Why is 'no translation needed for the thanking'?", kind: "inferencial", options: ["Because gratitude is already bilingual — it lives in both languages at once", "Because the sentence was too easy", "Because dictionaries contain gratitude"], answer: 0, why: "«The gratitude itself is bilingual»: la gratitud habita ambos idiomas a la vez." },
          { q: "What image closes the audio?", kind: "literal", options: ["A warm hallway between the two languages", "A cold border station at night", "A brand new dictionary"], answer: 0, why: "«You grew a hallway between them, and tonight the hallway is warm»." },
          { q: "What does 'you grew a hallway' imply about bilingualism?", kind: "inferencial", options: ["That it is built over time, connecting rather than dividing", "That it is inherited fully formed at birth", "That it requires a professional architect"], answer: 0, why: "Se infiere: el pasillo se «cultivó» con el tiempo — conecta, no divide." },
        ],
      },
    },
  ],

  "en-cu-c2-09": [
    {
      id: "md-en-c2-09-1", theme: "relax mentale",
      title: "Nothing left to take away", titleEs: "Nada por quitar",
      minutes: 3,
      paragraphs: [
        { it: "The editor's definition of finished — not when nothing is left to add, but when nothing is left to take away — works on the mind as well as the page. Watch an ordinary worry for one minute and count its adverbs: 'really urgent,' 'totally unfair,' 'absolutely the end.' The thought arrives padded like a draft full of corridors. Mental editing is the quiet discipline of trying the sentence without its overcoat and checking whether the fact survives the cut.", es: "La definición de terminado de la editora — no cuando no queda nada por añadir, sino cuando no queda nada por quitar — funciona también para la mente, además de la página. Observa una preocupación cualquiera durante un minuto y cuenta sus adverbios: «urgentísimo», «totalmente injusto», «definitivamente el fin». El pensamiento llega acolchado como un borrador lleno de pasillos. La edición mental es la disciplina silenciosa de probar la frase sin su abrigo y comprobar si el hecho sobrevive al corte." },
        { it: "Usually it does. Under the intensifiers, most worries are one clean sentence long: 'I am afraid of Thursday.' Said plainly, it can be held, looked at, answered. Said padded, it becomes a house with too many corridors, and the mind wanders them all night. The practice is not positive thinking — it is prose hygiene. You are not required to feel better about Thursday. You are only asked to let the fear travel lighter, one strong verb instead of a bodyguard of adverbs.", es: "Casi siempre sobrevive. Debajo de los intensificadores, la mayoría de las preocupaciones miden una frase limpia: «Tengo miedo del jueves». Dicha así, se puede sostener, mirar, responder. Dicha acolchada, se vuelve una casa con demasiados pasillos, y la mente los recorre toda la noche. La práctica no es pensamiento positivo: es higiene de prosa. No se te pide sentirte mejor con el jueves. Solo se te pide dejar que el miedo viaje más ligero, un verbo fuerte en vez de un guardaespaldas de adverbios." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de edición profesional", "Editar los pensamientos como prosa: quitar el relleno mental", "Cómo escribir novelas de terror"],
        answer: 1,
        why: "El título retoma la definición de la editora («nothing left to take away») y la aplica a la mente: edición mental, no manuales ni ficción.",
      },
      quiz: [
        { q: "What does the editor's definition of 'finished' say?", kind: "literal", options: ["Nothing left to take away, not nothing left to add", "A text needs at least three revisions", "Finished means the same as published"], answer: 0, why: "«Not when nothing is left to add, but when nothing is left to take away»: literal en el primer párrafo." },
        { q: "Why does 'I am afraid of Thursday' work better than the padded version?", kind: "inferencial", options: ["Because a plainly said fear can be held, looked at, and answered", "Because Thursdays are always easy", "Because short sentences happen to rhyme"], answer: 0, why: "«It can be held, looked at, answered»: la frase limpia se puede manejar." },
        { q: "What does 'prose hygiene' imply about negative feelings?", kind: "critica", options: ["That feelings can stay — only their padding needs cutting", "That fear should be suppressed entirely", "That worries must be corrected by professionals"], answer: 0, why: "«You are not required to feel better»: el sentimiento se queda; solo se corta el relleno." },
      ],
      vf: [
        { text: "The practice requires you to feel better about Thursday.", value: false, why: "«You are not required to feel better about Thursday»: no es pensamiento positivo." },
        { text: "Worries often arrive 'padded' with intensifiers.", value: true, why: "«Really urgent, totally unfair, absolutely the end»: el acolchado de adverbios." },
        { text: "The padded worry is compared to a house with too many corridors.", value: true, why: "«A house with too many corridors, and the mind wanders them all night»." },
      ],
    },
    {
      id: "md-en-c2-09-2", theme: "meditazione",
      title: "The two-word sentence", titleEs: "La frase de dos palabras",
      minutes: 2,
      paragraphs: [
        { it: "Prose rhythm has a teaching for meditation: the short sentence lands. After the long line that breathes, two words fall like a dropped book — and the room hears them. The mind, too, knows long sentences: the conditional clauses of planning, the subordinate fears, the semicolons of almost-decided. Meditation is often just the search for the two-word sentence inside the paragraph: 'It shipped.' 'Begin now.' 'You're here.'", es: "El ritmo de la prosa tiene una lección para la meditación: la frase corta aterriza. Tras la línea larga que respira, dos palabras caen como un libro que se suelta — y la sala las oye. La mente, también, conoce las frases largas: las condicionales de la planificación, los miedos subordinados, los puntos y coma de lo casi decidido. La meditación suele ser apenas la búsqueda de la frase de dos palabras dentro del párrafo: «Salió». «Empieza ya». «Estás aquí»." },
        { it: "The short form is not harshness; it is mercy. A mantra is a sentence cut until only the load-bearing word remains, then repeated until the noise starves. In the stillness between repetitions — the white space, the beat — the paragraph-mind rests, because nothing is being argued there. You do not have to finish the whole thought. The thought was mostly corridors anyway. End on the word that resonates, and let the silence do the rest of the saying.", es: "La forma corta no es dureza: es piedad. Un mantra es una frase cortada hasta que solo queda la palabra portante, repetida hasta que el ruido se muere de hambre. En la quietud entre repeticiones — el espacio en blanco, el beat — la mente-párrafo descansa, porque ahí no se discute nada. No tienes que terminar todo el pensamiento. El pensamiento era mayormente pasillos, de todos modos. Termina en la palabra que resuena, y deja que el silencio diga el resto." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Métrica poética avanzada", "La frase corta como meditación: el mantra y la palabra que resuena", "Cómo hablar en público con autoridad"],
        answer: 1,
        why: "El título («la frase de dos palabras») apunta al ritmo interior del mantra, no a la métrica poética ni a la oratoria.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Meditation finds the two-word sentence inside the paragraph of thoughts, and lets the silence finish it",
          "Long sentences are grammatically incorrect",
          "Mantras must be invented by professionals",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "The long line breathes, then the short one lands",
          "A mantra is a sentence cut to its load-bearing word",
          "End on the word that resonates",
        ],
        distractors: [
          "Silence must always be filled with soft music",
          "The paragraph-mind never rests at all",
          "Two-word sentences are always commands",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The short sentence lands like a dropped book.",
          "A mantra is a sentence cut to its load-bearing word.",
          "Nothing is being argued in the space between repetitions.",
          "The typewriter ribbon needs replacing by Friday.",
          "Let the silence do the rest of the saying.",
        ],
        intruder: 3,
        why: "La cinta de la máquina de escribir es logística de oficina: ajena a la práctica del mantra.",
      },
    },
    {
      id: "md-en-c2-09-3", theme: "qui e ora",
      title: "Cutting what you love", titleEs: "Cortar lo que amas",
      minutes: 3,
      paragraphs: [
        { it: "The hardest edit is the darling: the sentence you love more than the piece it lives in. Writers keep graveyards — files of cut beauties — and the healthiest ones visit them without grief. The present-moment practice inside revision is precise: when you cut what you love, notice that you have not lost it. It exists, whole, in the graveyard. What you have lost is only the argument that the page was the only place it could live.", es: "La edición más dura es la querida: la frase que amas más que la pieza en la que vive. Los escritores mantienen cementerios — archivos de bellezas cortadas — y los más sanos los visitan sin duelo. La práctica de presencia dentro de la revisión es precisa: cuando cortas lo que amas, nota que no lo has perdido. Existe, entera, en el cementerio. Lo que has perdido es solo el argumento de que la página era el único lugar donde podía vivir." },
        { it: "Non-attachment, the workshop version, is not coldness. It is the discovery that the sentence was never the love — the love was the attention that made it. That attention remains after the cut, free and solvent, ready for the next line. And here is the quiet here-and-now of it: the page in front of you is the only page being written. The graveyard is behind you, the anthology is ahead, and the pencil is exactly where your hand is. Cut, and keep writing where you stand.", es: "El no-apego, versión taller, no es frialdad. Es el descubrimiento de que la frase nunca fue el amor: el amor era la atención que la hizo. Esa atención queda tras el corte, libre y solvente, lista para la siguiente línea. Y aquí está el aquí-y-ahora silencioso del asunto: la página que tienes delante es la única página que se está escribiendo. El cementerio queda atrás, la antología adelante, y el lápiz está exactamente donde está tu mano. Corta, y sigue escribiendo donde estás." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una novela sobre cementerios antiguos", "Soltar la frase amada (kill your darlings) como no-apego y presencia", "Cómo publicar antologías colectivas"],
        answer: 1,
        why: "El título retoma «kill your darlings» y el archivo-cementerio del oficio: apunta al desapego, no a novela ni publicación.",
      },
      sequence: {
        instr: "Ordena los pasos del corte:",
        events: [
          "You find the sentence you love more than the piece",
          "You cut it and save it in the graveyard file",
          "You notice you have not lost it: it exists, whole",
          "You realize the love was the attention, which remains solvent",
          "You pick up the pencil and keep writing where you stand",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Open the graveyard file — you know the one. Read one cut sentence, the one you still love. Say hello to it, the way you greet an old friend you no longer live with. Notice: the sentence did not die. It lives here, in the cool archive of the things you could not keep on the page. Now close the file, gently. Take one breath for what you cut, and one for what you are about to write. The pencil is warm. Begin.",
        questions: [
          { q: "How do you greet the old sentence?", kind: "literal", options: ["Like an old friend you no longer live with", "Like a rival at a contest", "Like a stranger on a train"], answer: 0, why: "«The way you greet an old friend you no longer live with»: literal en el audio." },
          { q: "Why is the archive described as 'cool'?", kind: "inferencial", options: ["Because the cut things rest there safely, without heat or urgency", "Because it is stored in a basement", "Because it has air conditioning"], answer: 0, why: "Se infiere: el archivo conserva sin calor ni urgencia — descanso sereno de lo cortado." },
          { q: "How many breaths do you take before beginning?", kind: "literal", options: ["One for what was cut, one for what is next", "Three for luck", "None: writers must not stop"], answer: 0, why: "«Take one breath for what you cut, and one for what you are about to write»." },
          { q: "What does 'the pencil is warm' suggest?", kind: "inferencial", options: ["That the writing continues in the present — the tool is alive and ready", "That someone else used it before you", "That the room has good heating"], answer: 0, why: "El lápiz caliente = herramienta viva en el ahora: la escritura sigue en el presente." },
        ],
      },
    },
  ],

  "en-cu-c2-10": [
    {
      id: "md-en-c2-10-1", theme: "relax fisico",
      title: "The porch, the chair, the listening body", titleEs: "El porche, la silla, el cuerpo que escucha",
      minutes: 3,
      paragraphs: [
        { it: "Oral history begins as a posture. The chair on the porch, the recorder flat and ignored, the listener's body turned toward the speaker like a plant toward a slow window — nothing about it is casual. The old voice takes its time, and the young body must agree, muscle by muscle, to that time: shoulders settled, hands empty, breathing matched, without drama, to the cadence of someone who has been talking to the sea for sixty years.", es: "La historia oral empieza como una postura. La silla en el porche, la grabadora plana e ignorada, el cuerpo del oyente vuelto hacia quien habla como una planta hacia una ventana lenta — nada de eso es casual. La voz vieja toma su tiempo, y el cuerpo joven debe aceptar, músculo a músculo, ese tiempo: hombros asentados, manos vacías, respiración emparejada, sin drama, con la cadencia de alguien que lleva sesenta años hablándole al mar." },
        { it: "This is physical training disguised as politeness. The itch to interrupt lives in the throat; the itch to check the time lives in the wrist. Both are allowed to be felt and not obeyed — felt fully, like a stretch, and released. Long listening is a posture of the whole body, and the body is honest: when it finally relaxes into the speaker's rhythm, the story changes register, as if the porch itself had said, take your time, baby; the tape don't bite.", es: "Esto es entrenamiento físico disfrazado de cortesía. La comezón por interrumpir vive en la garganta; la comezón por mirar la hora vive en la muñeca. Ambas pueden sentirse sin obedecerse — sentirse del todo, como un estiramiento, y soltarse. La escucha larga es una postura del cuerpo entero, y el cuerpo es honesto: cuando por fin se relaja en el ritmo de quien habla, la historia cambia de registro, como si el propio porche hubiera dicho, toma tu tiempo, criatura; la cinta no muerde." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo usar una grabadora profesional", "La escucha larga como postura física: el porche y la silla", "Ejercicios de gimnasia para la voz"],
        answer: 1,
        why: "El título enumera porche, silla y cuerpo: apunta a la postura de escucha, no al equipo técnico ni a la vocalización.",
      },
      quiz: [
        { q: "How is the listener's body positioned?", kind: "literal", options: ["Turned toward the speaker like a plant toward a slow window", "Facing away to seem neutral", "Standing at all times to show respect"], answer: 0, why: "«The listener's body turned toward the speaker like a plant toward a slow window»: literal en el primer párrafo." },
        { q: "Why are the itches 'felt and not obeyed'?", kind: "inferencial", options: ["Because noticing an impulse without acting on it is part of long listening", "Because itching is medically dangerous", "Because the recorder forbids all movement"], answer: 0, why: "Se infiere: sentir el impulso como un estiramiento y soltarlo entrena la escucha larga." },
        { q: "What changes when the body relaxes into the speaker's rhythm?", kind: "critica", options: ["The story changes register — the speaker senses the permission to take time", "The recording gets louder", "The interview becomes much shorter"], answer: 0, why: "Lectura crítica: la postura relajada comunica permiso, y la historia cambia de registro." },
      ],
      vf: [
        { text: "The recorder should be watched constantly during the interview.", value: false, why: "«The recorder flat and ignored»: la grabadora se ignora, no se vigila." },
        { text: "The listener matches the speaker's breathing without drama.", value: true, why: "«Breathing matched, without drama, to the cadence»." },
        { text: "The itch to interrupt lives in the wrist.", value: false, why: "Vive en la garganta; en la muñeca vive la comezón de mirar la hora." },
      ],
    },
    {
      id: "md-en-c2-10-2", theme: "spiritualità",
      title: "Somewhere to live", titleEs: "Un sitio donde vivir",
      minutes: 3,
      paragraphs: [
        { it: "The old woman on the porch said it without ceremony: the words need somewhere to live. Every tradition that keeps elders has some version of this sentence. Memory, in these houses, is not storage; it is hospitality. The story is a guest — it arrives with its own weather, sits where it is offered, and leaves something behind in the cushions. To record a grandmother is to build the guest room after years of assuming the house would always be hers.", es: "La anciana del porche lo dijo sin ceremonia: las palabras necesitan un sitio donde vivir. Toda tradición que cuida a sus mayores tiene alguna versión de esta frase. La memoria, en estas casas, no es almacenamiento: es hospitalidad. La historia es una huésped — llega con su propio clima, se sienta donde le ofrecen, y deja algo entre los cojines. Grabar a una abuela es construir el cuarto de huéspedes después de años de suponer que la casa siempre sería de ella." },
        { it: "There is a spirituality of transmission that asks for only two things: that you listen as if the words were alive, and that you pass them on without renovating them into furniture. The gratitude runs in both directions — the elder for the ear, the listener for the inheritance that no bank holds. And when the porch is finally gone, the recording hums in an archive like a kitchen at suppertime: the words, at home, still telling whoever comes to hear how the sea never stopped talking.", es: "Hay una espiritualidad de la transmisión que pide solo dos cosas: que escuches como si las palabras estuvieran vivas, y que las pases adelante sin renovarlas hasta volverlas mobiliario. La gratitud corre en ambos sentidos — la anciana por el oído, el oyente por la herencia que ningún banco custodia. Y cuando el porche por fin se va, la grabadora zumba en un archivo como una cocina a la hora de la cena: las palabras, en casa, contándole todavía a quien venga a oír cómo el mar nunca dejó de hablar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Bienes raíces y herencias legales", "La memoria como hospitalidad: las palabras necesitan un hogar", "Cómo construir cuartos de huéspedes"],
        answer: 1,
        why: "El título retoma la frase de la señora Jenkins («the words need somewhere to live»): hospitalidad de la memoria, no inmobiliaria.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Memory is hospitality: stories are guests, and recording an elder builds them a home",
          "Archives should edit dialects for clarity",
          "Grandmothers tend to exaggerate their stories",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Memory is not storage; it is hospitality",
          "The story arrives with its own weather",
          "The gratitude runs in both directions",
        ],
        distractors: [
          "The guest room must be soundproofed",
          "Banks keep the best inheritances",
          "The recording lasts exactly one hour",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The story is a guest that arrives with its own weather.",
          "Memory is hospitality, not storage.",
          "The words need somewhere to live.",
          "The archive's server was upgraded last spring.",
          "The words are at home, still telling.",
        ],
        intruder: 3,
        why: "La actualización del servidor es un dato técnico ajeno a la espiritualidad de la transmisión oral.",
      },
    },
    {
      id: "md-en-c2-10-3", theme: "relax mentale",
      title: "Writing the water down", titleEs: "Escribir el agua",
      minutes: 3,
      paragraphs: [
        { it: "Transcribing an oral history is an exercise in impossible fidelity: the speech flowed like water, and the page is a net. The relaxing discovery is that you were never asked to hold the water — only to describe its weather. The pauses, the mm-hms, the sentence that changes course midstream like a river reconsidering its delta: the transcriber's mind learns to follow without gripping, marking what happened without stopping it from having happened that way.", es: "Transcribir una historia oral es un ejercicio de fidelidad imposible: el habla fluyó como agua, y la página es una red. El descubrimiento relajante es que nunca te pidieron retener el agua: solo describir su clima. Las pausas, los mm-hm, la frase que cambia de rumbo a mitad de cauce como un río reconsiderando su delta: la mente del transcriptor aprende a seguir sin aferrar, marcando lo ocurrido sin impedir que haya ocurrido así." },
        { it: "This is concentration of the least aggressive kind. For one hour, your attention is a guest of the recording: you rewind, you re-hear, you let the voice say the same thing twice with slightly different music, and you do not choose a favorite. The mind that can transcribe a meander without correcting it is a mind that has practiced a rare mercy. It can also, on a good day, listen to its own thoughts the same way: flowing, repeating, midstream, still making sense — and still water, in the old sense, only when it is done moving.", es: "Esta es concentración de la índole menos agresiva. Durante una hora, tu atención es huésped de la grabación: rebobinas, reescuchas, dejas que la voz diga lo mismo dos veces con música ligeramente distinta, y no eliges favorita. La mente que puede transcribir un meandro sin corregirlo es una mente que ha practicado una piedad rara. También puede, un buen día, escuchar sus propios pensamientos igual: fluyendo, repitiendo, a mitad de cauce, todavía con sentido — y agua quieta, en el sentido viejo, solo cuando termina de moverse." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de stenografía judicial", "Transcribir como atención amable: seguir el habla sin corregirla", "Cómo pescar con redes en un delta"],
        answer: 1,
        why: "El título («escribir el agua») juega con la fidelidad imposible del transcriptor: atención amable, no estenografía ni pesca.",
      },
      sequence: {
        instr: "Ordena los pasos de la transcripción:",
        events: [
          "You play the recording and follow the flow of speech",
          "You mark the pauses and the mm-hms without correcting them",
          "A sentence changes course midstream, and you follow it",
          "You rewind and let the voice say it twice, choosing no favorite",
          "You end with the voice still making sense, still moving",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Transcription practice, three minutes. Play the first minute of any recorded voice — an elder, a friend, yourself from last year. Listen once with your hands still. Now listen again, and this time write only the pauses: a dash where the breath holds, a comma where it turns. Do not fix a single word. When the voice repeats itself, write both versions. You are not making a transcript tonight; you are making a map of respect.",
        questions: [
          { q: "What do you write on the second listening?", kind: "literal", options: ["Only the pauses — dashes and commas", "Every single word exactly", "A short summary of the meaning"], answer: 0, why: "«Write only the pauses: a dash where the breath holds, a comma where it turns»." },
          { q: "Why write both versions when the voice repeats itself?", kind: "inferencial", options: ["Because both are part of how the person actually spoke — respect over tidiness", "Because one of them is always wrong", "Because repetition fills the page faster"], answer: 0, why: "Se infiere: ambas versiones son el habla real; el respeto vence al orden." },
          { q: "What are you making tonight, according to the audio?", kind: "literal", options: ["A map of respect, not a transcript", "A legal document", "An audiobook for children"], answer: 0, why: "«You are not making a transcript tonight; you are making a map of respect»." },
          { q: "Why listen the first time 'with your hands still'?", kind: "inferencial", options: ["To receive the voice before deciding how to represent it", "Because writing is forbidden at night", "To test the headphones"], answer: 0, why: "Primero recibir, luego representar: la escucha sin manos precede al lápiz." },
        ],
      },
    },
  ],

  "en-cu-c2-11": [
    {
      id: "md-en-c2-11-1", theme: "meditazione",
      title: "Yes, and the breath", titleEs: "Yes, and la respiración",
      minutes: 2,
      paragraphs: [
        { it: "The improv rule is a meditation instruction wearing stage makeup: yes, and. Yes — the full acceptance of what has just arrived, the breath you are having instead of the one you planned. And — the addition, the next floor, the small creation that acceptance makes possible. Meditators recognize the architecture instantly: the first half is awareness, the second half is response, and the whole game dies if either half starts with 'no, but.'", es: "La regla del improv es una instrucción de meditación con maquillaje de escenario: yes, and. Yes — la aceptación plena de lo que acaba de llegar, la respiración que estás teniendo en vez de la que planeabas. And — la adición, el siguiente piso, la pequeña creación que la aceptación vuelve posible. Los meditadores reconocen la arquitectura al instante: la primera mitad es conciencia, la segunda es respuesta, y el juego entero muere si cualquiera de las dos empieza con «no, pero»." },
        { it: "On the cushion as on the stage, the offers are usually absurd. A thought arrives wearing a grandmother's wig and flying a plane; the body itches in a place dignity cannot reach. The practice is not to judge the offer — judging is just 'no, but' with better posture. The practice is to say the silent yes and add something: a breath, a name, a return to the word. The scene, the old improvisers say, is a staircase built while running up it. So, apparently, is a life of attention.", es: "En el cojín como en el escenario, las ofertas suelen ser absurdas. Llega un pensamiento con peluca de abuela pilotando un avión; el cuerpo pica en un sitio al que la dignidad no llega. La práctica no es juzgar la oferta — juzgar es solo un «no, pero» con mejor postura. La práctica es decir el sí silencioso y añadir algo: una respiración, un nombre, un retorno a la palabra. La escena, dicen los viejos improvisadores, es una escalera construida mientras se sube corriendo. Y al parecer, también lo es una vida de atención." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una biografía de comediantes famosos", "La regla del improv «yes, and» como instrucción de meditación", "Cómo construir escaleras mecánicas"],
        answer: 1,
        why: "El título funde la regla del improv con la respiración: meditación disfrazada de escenario, no biografía ni construcción.",
      },
      quiz: [
        { q: "What are the two halves of the improv rule?", kind: "literal", options: ["Yes (acceptance) and and (addition)", "Yes (agreement) and but (doubt)", "No and maybe"], answer: 0, why: "«Yes — the full acceptance. And — the addition»: literal en el primer párrafo." },
        { q: "Why is judging 'no, but with better posture'?", kind: "inferencial", options: ["Because judgment refuses the offer politely instead of rudely — the same block in nicer clothes", "Because posture improves the quality of judgment", "Because 'no, but' is grammatically incorrect"], answer: 0, why: "Se infiere: el juicio bloquea con cortesía; es el mismo rechazo mejor vestido." },
        { q: "What does the staircase built while running up say about attention?", kind: "critica", options: ["That presence is constructed moment by moment, on the move, not prepared in advance", "That stairs are inherently dangerous", "That meditation requires special equipment"], answer: 0, why: "Lectura crítica: la atención no se prepara; se construye al vuelo, instante a instante." },
      ],
      vf: [
        { text: "The offers that arrive in meditation are usually solemn and reasonable.", value: false, why: "«The offers are usually absurd»: pelucas de abuela y aviones." },
        { text: "A breath can be the 'and' — the small addition after acceptance.", value: true, why: "«Say the silent yes and add something: a breath, a name, a return to the word»." },
        { text: "The game survives if either half starts with 'no, but'.", value: false, why: "«The whole game dies if either half starts with no, but»." },
      ],
    },
    {
      id: "md-en-c2-11-2", theme: "qui e ora",
      title: "Building the staircase now", titleEs: "Construir la escalera ahora",
      minutes: 2,
      paragraphs: [
        { it: "Improvisation cannot be rehearsed backward, and neither can an afternoon. The scene exists only in the direction it is being built: this line accepting the last one, this step resting on the one below it, nobody in the room owning the blueprints. The present moment, say the improvisers, is not a spiritual luxury; it is the load-bearing wall. There is simply nowhere else to build from.", es: "La improvisación no puede ensayarse hacia atrás, y tampoco una tarde. La escena solo existe en la dirección en que se está construyendo: esta línea aceptando la anterior, este peldaño apoyado en el de abajo, nadie en la sala con los planos. El momento presente, dicen los improvisadores, no es un lujo espiritual: es el muro portante. Simplemente no hay ningún otro sitio desde el cual construir." },
        { it: "The here-and-now of co-creation is unusually forgiving. You do not have to be brilliant; you have to be present and slightly generous — add a floor, not a verdict. The audience, like the mind, forgives an imperfect line that continues the scene and punishes a perfect line that abandons it. Which suggests a gentle standard for ordinary days: show up for the sentence currently being said, by anyone, including yourself. The staircase holds. It was designed, all along, to be built exactly this way, right now.", es: "El aquí-y-ahora de la cocreación es inusualmente indulgente. No tienes que ser brillante; tienes que estar presente y levemente generoso — añade un piso, no un veredicto. El público, como la mente, perdona una línea imperfecta que continúa la escena y castiga una línea perfecta que la abandona. Lo cual sugiere un estándar amable para los días corrientes: preséntate para la frase que se está diciendo ahora, de quien sea, incluyéndote. La escalera aguanta. Fue diseñada, desde el principio, para construirse exactamente así, ahora mismo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Arquitectura de escaleras residenciales", "Presencia como muro portante: construir la escena (y el día) ahora", "Cómo ensayar obras de teatro clásicas"],
        answer: 1,
        why: "El título retoma la escalera del improv: el foco es la presencia («ahora»), no la arquitectura ni el ensayo clásico.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Presence is the load-bearing wall of any scene: build only from the line being said now",
          "Rehearsal matters more than live performance",
          "Audiences prefer perfect lines over continuing scenes",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "The scene exists only in the direction it is being built",
          "You have to be present and slightly generous",
          "Add a floor, not a verdict",
        ],
        distractors: [
          "The blueprints are written before the show begins",
          "Brilliance is required for every single line",
          "The staircase must be inspected by engineers",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "This line accepts the last one.",
          "Nobody in the room owns the blueprints.",
          "The present moment is the load-bearing wall.",
          "The theater's fire inspector visits each December.",
          "Add a floor, not a verdict.",
        ],
        intruder: 3,
        why: "La inspección de incendios es un requisito del local: no pertenece a la práctica de construir en el presente.",
      },
    },
    {
      id: "md-en-c2-11-3", theme: "relax fisico",
      title: "The laugh that releases", titleEs: "La risa que libera",
      minutes: 3,
      paragraphs: [
        { it: "A real laugh is a full-body event: the diaphragm contracts like a friendly bellows, the shoulders surrender, the eyes close, and for two seconds the body forgets to hold any of its small kingdoms. Physiology calls it respiratory relief; the comedy basement calls it killing. Both are describing the same lovely collapse — a system that was braced, briefly and thoroughly, unbraced.", es: "Una risa real es un acontecimiento de cuerpo entero: el diafragma se contrae como un fuelle amistoso, los hombros se rinden, los ojos se cierran, y por dos segundos el cuerpo olvida sostener cada uno de sus pequeños reinos. La fisiología lo llama alivio respiratorio; el sótano de la comedia lo llama matar. Ambas describen el mismo derrumbe encantador — un sistema que estaba tenso, breve y exhaustivamente destensado." },
        { it: "The after-laugh is the part worth keeping. The breath returns deeper than it left; the face sits looser on the skull; problems that were clenched a minute ago now lie in reach, unlocked by the spasm. This is why laughter survives every fashion: it is the fastest full-body reset available without a prescription. And the groan — the martyred exhale at a terrible pun — is its honest cousin. Both say the same thing in different registers: you moved me, and the moving did me good.", es: "La posrisa es la parte que vale la pena guardar. La respiración vuelve más honda que como se fue; la cara se sienta más floja en el cráneo; los problemas que estaban apretados hace un minuto quedan al alcance, desbloqueados por el espasmo. Por eso la risa sobrevive a todas las modas: es el reinicio de cuerpo entero más rápido disponible sin receta. Y el gemido — la exhalación de mártir ante un pun terrible — es su primo honesto. Ambos dicen lo mismo en registros distintos: me moviste, y moverme me hizo bien." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Anatomía médica de la risa para estudiantes", "La risa (y el gemido) como descanso físico del cuerpo", "Cómo comprar medicinas sin receta médica"],
        answer: 1,
        why: "El título anuncia la risa que libera: descanso corporal, no anatomía académica ni farmacia.",
      },
      sequence: {
        instr: "Ordena la secuencia corporal de la risa:",
        events: [
          "The diaphragm contracts like a friendly bellows",
          "The shoulders surrender and the eyes close",
          "The body briefly forgets its small kingdoms",
          "The breath returns deeper than it left",
          "Problems that were clenched lie within reach, unlocked",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Stand up and let's rehearse a laugh — not a polite one, a real one. Start with a chuckle in the chest, fake it, that's fine; the body cannot always tell the difference. Let it grow: shoulders in, head back, hands loose. Let the laugh shake whatever it wants to shake. Now stop, and feel the after — the deep breath, the loose jaw, the face sitting comfortably on the skull. Whatever you were clenching before this, check on it now. Still clenching, or slightly opened?",
        questions: [
          { q: "Where does the rehearsed laugh start?", kind: "literal", options: ["With a chuckle in the chest, fake if necessary", "With a scream", "With three minutes of silence"], answer: 0, why: "«Start with a chuckle in the chest, fake it, that's fine»: literal en el audio." },
          { q: "Why is faking the laugh acceptable at first?", kind: "inferencial", options: ["Because the body cannot always tell the difference — it releases anyway", "Because the exercise is really about acting", "Because polite laughs are forbidden"], answer: 0, why: "«The body cannot always tell the difference»: el cuerpo se libera igual." },
          { q: "What is the 'after' of the laugh?", kind: "literal", options: ["Deep breath, loose jaw, face sitting comfortably", "Soreness and dizziness", "The urge to sit down at once"], answer: 0, why: "«Feel the after — the deep breath, the loose jaw, the face sitting comfortably»." },
          { q: "What is the final question of the audio checking?", kind: "inferencial", options: ["Whether the clenching released during the laugh", "Whether you remember the joke word by word", "Whether you can laugh in complete silence"], answer: 0, why: "«Whatever you were clenching before this, check on it now»: verifica si la tensión se soltó." },
        ],
      },
    },
  ],

  "en-cu-c2-12": [
    {
      id: "md-en-c2-12-1", theme: "spiritualità",
      title: "The silence after the last word", titleEs: "El silencio tras la última palabra",
      minutes: 3,
      paragraphs: [
        { it: "The commencement speaker's last discipline is the most spiritual thing a loud room can hold: the silence after the last word. No thank-you cascade, no summary encore — just the finished sentence standing alone in the air while three thousand people decide what to do with it. Every tradition of prayer, every tradition of performance, knows that threshold. The word has ended; the meaning has not; the gap between the two is where the listener lives.", es: "La última disciplina del orador de graduación es lo más espiritual que una sala ruidosa puede contener: el silencio tras la última palabra. Sin cascada de agradecimientos, sin bis de resumen — solo la frase terminada, sola en el aire, mientras tres mil personas deciden qué hacer con ella. Toda tradición de oración, toda tradición de performance, conoce ese umbral. La palabra terminó; el sentido no; el hueco entre las dos es donde vive el oyente." },
        { it: "There is a generosity in letting your words belong to others. The speaker who fills the silence after the last line is hoarding — taking back the gift at the moment of giving it. The speaker who sits down hands the sentence over, unfinished forever, to be completed by strangers in dorm rooms and long drives home. That is the quiet theology of endings: what you release intact can keep working after you; what you pad with explanation dies in the padding. Say the true line, then let it be — somewhere, alone, beginning its life without you.", es: "Hay una generosidad en dejar que tus palabras pertenezcan a otros. El orador que llena el silencio tras la última línea está acaparando — recuperando el regalo en el momento de entregarlo. El orador que se sienta le pasa la frase, inacabada para siempre, para que la completen desconocidos en dormitorios y viajes largos a casa. Esa es la teología silenciosa de los finales: lo que sueltas intacto puede seguir trabajando después de ti; lo que acolchas con explicación muere en el acolchado. Di la frase verdadera, y luego déjala ser — en algún sitio, sola, empezando su vida sin ti." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de oratoria motivacional", "El silencio tras la última palabra como entrega generosa", "Cómo organizar ceremonias de graduación"],
        answer: 1,
        why: "El título nombra el silencio final del discurso: entrega y generosidad, no técnicas ni logística de eventos.",
      },
      quiz: [
        { q: "What does the speaker do after the last word, according to the text?", kind: "literal", options: ["Sits down and lets the sentence stand in silence", "Repeats the final line twice", "Explains what the line really meant"], answer: 0, why: "«Just the finished sentence standing alone in the air»: literal en el primer párrafo." },
        { q: "Why is filling the silence described as 'hoarding'?", kind: "inferencial", options: ["Because it takes back the gift instead of letting listeners complete it", "Because silence wastes the audience's time", "Because audiences dislike endings"], answer: 0, why: "«Taking back the gift at the moment of giving it»: recuperar el regalo en el instante de darlo." },
        { q: "What does 'what you release intact can keep working after you' propose?", kind: "critica", options: ["That unfinished, unpadded endings live on in others — a form of generosity", "That speeches should never really end", "That listeners memorize everything they hear"], answer: 0, why: "Lectura crítica: la frase soltada sin acolchar sigue viva en otros; la generosidad del final abierto." },
      ],
      vf: [
        { text: "The gap between the ended word and the unfinished meaning is where the listener lives.", value: true, why: "«The word has ended; the meaning has not; the gap between the two is where the listener lives»." },
        { text: "A good speaker pads the last line with explanation so nobody misreads it.", value: false, why: "«What you pad with explanation dies in the padding»: el acolchado mata la frase." },
        { text: "The released sentence can be completed by strangers later.", value: true, why: "«To be completed by strangers in dorm rooms and long drives home»." },
      ],
    },
    {
      id: "md-en-c2-12-2", theme: "relax mentale",
      title: "Under the gown", titleEs: "Bajo la toga",
      minutes: 2,
      paragraphs: [
        { it: "Every commencement hides a smaller ceremony: the graduate alone in the gown, ten minutes before the procession, negotiating with a stomach that has opinions. The nerves are not a malfunction — they are the body paying attention in advance. The mind, though, needs a translator in that hallway: it will offer catastrophes ('you will trip'), comparisons ('the other speaker is calmer'), and weather reports for futures that do not exist. None of them require a rebuttal. They require a name: thinking.", es: "Toda graduación esconde una ceremonia menor: el graduado solo con la toga, diez minutos antes de la procesión, negociando con un estómago que tiene opiniones. Los nervios no son una avería: son el cuerpo pagando atención por adelantado. La mente, eso sí, necesita un traductor en ese pasillo: ofrecerá catástrofes («tropezarás»), comparaciones («el otro orador está más tranquilo») y reportes del clima para futuros que no existen. Ninguno requiere refutación. Requieren un nombre: pensar." },
        { it: "Under the gown there is, still, a kid — and the kid is not the problem. The practice is to let the kid come along without letting it write the speech. Feel the fabric, the absurd satin of the sleeve, the weight of the cap like a small roof; feel both feet on the floor, the actual floor of the actual hallway. The ceremony ahead is make-believe in the oldest, best sense — a ritual that only works if someone shows up human inside the costume. Nerves included. They are, in fact, the proof of the showing up.", es: "Bajo la toga sigue habiendo un niño — y el niño no es el problema. La práctica es dejar que el niño venga sin dejarle escribir el discurso. Siente la tela, el satén absurdo de la manga, el peso del birrete como un techo pequeño; siente ambos pies en el suelo, el suelo real del pasillo real. La ceremonia que viene es ficción en el sentido más viejo y mejor — un ritual que solo funciona si alguien se presenta humano dentro del disfraz. Nervios incluidos. Son, de hecho, la prueba de la presentación." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["El diseño de togas académicas", "Los nervios antes de hablar: nombrarlos y dejar que el niño interior venga", "Un manual de protocolo universitario"],
        answer: 1,
        why: "El título anuncia lo que hay bajo la toga (el niño nervioso): gestión mental de los nervios, no diseño ni protocolo.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Nerves are attention paying in advance; name the thoughts and let the nervous kid come along in the costume",
          "Graduates should take sedatives before ceremonies",
          "The speech matters more than the speaker's humanity",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "The nerves are the body paying attention in advance",
          "The offered catastrophes require a name, not a rebuttal",
          "The ritual only works if someone shows up human inside the costume",
        ],
        distractors: [
          "The gown must be dry-cleaned twice before the ceremony",
          "The cap is technically a safety helmet",
          "Calm speakers are always better humans",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The nerves are the body paying attention in advance.",
          "The mind offers catastrophes that require a name, not a rebuttal.",
          "Feel the absurd satin of the sleeve and both feet on the floor.",
          "The gown rental includes a spare zipper.",
          "Nerves are the proof of the showing up.",
        ],
        intruder: 3,
        why: "La cremallera de repuesto del alquiler es logística del vestuario: ajena a la práctica mental de nombrar los nervios.",
      },
    },
    {
      id: "md-en-c2-12-3", theme: "meditazione",
      title: "Three beats, one idea", titleEs: "Tres golpes, una idea",
      minutes: 3,
      paragraphs: [
        { it: "The closing rhythm of a good speech is a meditation structure you can hear: a long phrase that breathes, then the short one that lands, then the silence. Three beats — setup, lesson, dare; in-breath, out-breath, rest. The audience does not know they are following a breathing pattern, but their lungs do. That is why the tricolon has survived every century: it is the respiration of meaning, three beats with the weight on the last.", es: "El ritmo de cierre de un buen discurso es una estructura de meditación que se puede oír: una frase larga que respira, luego la corta que aterriza, luego el silencio. Tres golpes — setup, lección, envite; inhalación, exhalación, reposo. El público no sabe que está siguiendo un patrón respiratorio, pero sus pulmones sí. Por eso el tricolon ha sobrevivido a todos los siglos: es la respiración del sentido, tres golpes con el peso en el último." },
        { it: "To live by three beats is to give the day a cadence instead of a queue. One: the long sentence, the work, the breathing through of what is given. Two: the short sentence, the landing, the decision that ends a paragraph. Three: the silence — the rest that is not empty but resonant, the pause that lets the last word keep working. Sit for a moment in your own third beat. The speech is over, the truck of furniture has left, and what remains, breathing, is the one idea — which was, of course, the point.", es: "Vivir a tres golpes es darle al día una cadencia en vez de una fila. Uno: la frase larga, el trabajo, la respiración a través de lo dado. Dos: la frase corta, el aterrizaje, la decisión que cierra un párrafo. Tres: el silencio — el reposo que no está vacío sino resonante, la pausa que deja a la última palabra seguir trabajando. Siéntate un momento en tu propio tercer golpe. El discurso terminó, el camión del mobiliario se fue, y lo que queda, respirando, es la única idea — que era, por supuesto, el punto." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Percusión para bandas de marcha", "El ritmo de cierre (tres golpes, una idea) como estructura meditativa", "Cómo componer canciones de tres minutos"],
        answer: 1,
        why: "El título une los tres golpes del tricolon con una sola idea: cadencia meditativa, no percusión ni composición.",
      },
      sequence: {
        instr: "Ordena los tres golpes y su resto:",
        events: [
          "A long phrase breathes and gathers the room",
          "The short sentence lands with the weight",
          "The speaker stops after the last word",
          "The silence holds while the meaning keeps working",
          "The one idea remains, breathing, as the point",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Let's close with three beats of your own. Beat one: breathe in slowly, and with it gather one long thing you carried today — a task, a sentence, a small worry; let it ride the long breath in, and the long breath out. Beat two: now the short one. One word for what it all comes down to — say it silently, once, and let it land. Beat three: rest. No word now. The silence is not empty; it is the room your word is still ringing in. Stay until the ringing fades. That was the whole speech.",
        questions: [
          { q: "What rides the long breath in beat one?", kind: "literal", options: ["One long thing you carried today", "Three worries from the week", "A complete list of tasks"], answer: 0, why: "«Gather one long thing you carried today — a task, a sentence, a small worry»." },
          { q: "Why is the silence 'the room your word is still ringing in'?", kind: "inferencial", options: ["Because the chosen word keeps resonating after it is said — the rest is part of the speech", "Because the room is literally very noisy", "Because silence must be filled quickly"], answer: 0, why: "La palabra sigue resonando: el reposo es parte del discurso, no un vacío." },
          { q: "How many times do you say the word of beat two?", kind: "literal", options: ["Once, silently", "Aloud, three times", "Twice, in writing"], answer: 0, why: "«Say it silently, once, and let it land»." },
          { q: "What does 'that was the whole speech' mean at the end?", kind: "inferencial", options: ["That the essential is complete: long breath, one word, silence — nothing else needed", "That the audio was too short", "That the listener failed the exercise"], answer: 0, why: "Lo esencial está completo: respiración larga, una palabra, silencio — el discurso entero." },
        ],
      },
    },
  ],
};

