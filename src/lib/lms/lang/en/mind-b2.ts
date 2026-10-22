import type { MindReading } from "../../cambridge-mind";

/* ═══ EN B2 · Mind readings (temáticas de conciencia) — 3 por unidad ══
   Metodología idéntica a las italianas (v9.13): 7 estrategias de
   comprensión lectora y de escucha. Textos en inglés americano B2
   (ensayo reflexivo), traducción española a la vista. Campos `.it` =
   inglés (lengua de estudio), `.es` = español. Estrategia por índice:
   L1 = predict + quiz (lit/inf/crít) + V/F con justificación;
   L2 = predict + ideas + intruso; L3 = predict + secuencia + escucha. */

export const EN_MIND_B2: Record<string, MindReading[]> = {
  "en-cu-b2-01": [
    {
      id: "md-en-b2-01-1", theme: "meditazione",
      title: "The space between meetings", titleEs: "El espacio entre reuniones",
      minutes: 3,
      paragraphs: [
        { it: "The calendar fills itself like a bathtub: one meeting, another meeting, a quick sync, and suddenly the day has no air left. Meditation, for a working person, is not about escaping to a mountain. It is the small, stubborn art of finding the space between two meetings — sixty seconds of breath before the next tab opens.", es: "El calendario se llena solo como una bañera: una reunión, otra reunión, una sincronización rápida, y de pronto el día no tiene aire. La meditación, para una persona que trabaja, no va de escaparse a una montaña. Es el arte pequeño y testarudo de encontrar el espacio entre dos reuniones: sesenta segundos de respiración antes de que se abra la siguiente pestaña." },
        { it: "Sit in your chair and let the timer be your only boss for one minute. Feel the inhale arrive without pulling it, feel the exhale leave without pushing it. The next meeting will start on time whether you panic or not; the breath is the one appointment that never reschedules. Practiced daily, the gap between meetings becomes a room of your own.", es: "Siéntate en tu silla y deja que el temporizador sea tu único jefe por un minuto. Siente cómo llega la inhalación sin jalarla, siente cómo se va la exhalación sin empujarla. La próxima reunión empezará a tiempo te pongas nervioso o no; la respiración es la única cita que nunca se reprograma. Practicado a diario, el hueco entre reuniones se convierte en una habitación propia." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Trucos para agendar más reuniones", "Meditar en los pequeños huecos de la jornada laboral", "Una crítica del trabajo remoto"],
        answer: 1,
        why: "El título «The space between meetings» apunta a la pausa entre reuniones, no a la productividad ni a la polémica.",
      },
      quiz: [
        { q: "Where does the working person find meditation, according to the text?", kind: "literal", options: ["In the space between two meetings", "On a mountain retreat", "In the office gym"], answer: 0, why: "«finding the space between two meetings»: está literal en el primer párrafo." },
        { q: "What does the image of the bathtub suggest about the calendar?", kind: "inferencial", options: ["Meetings fill it until there is no air left", "It needs to be cleaned weekly", "It drains at the end of the day"], answer: 0, why: "«suddenly the day has no air left»: la bañera que se llena implica un día sin respiro." },
        { q: "Which idea best captures the text's message?", kind: "critica", options: ["Meditation only works far away from work", "The breath is the one appointment that never reschedules", "Meetings should be banned from calendars"], answer: 1, why: "La frase de cierre resume la tesis: la respiración como cita inamovible dentro de la jornada." },
      ],
      vf: [
        { text: "Meditation for a working person requires a mountain retreat.", value: false, why: "El texto dice lo contrario: «is not about escaping to a mountain»." },
        { text: "The breath is compared to an appointment that never reschedules.", value: true, why: "«the breath is the one appointment that never reschedules»." },
        { text: "The next meeting will start on time whether you panic or not.", value: true, why: "Literal en el segundo párrafo: la reunión no depende de tu ansiedad." },
      ],
    },
    {
      id: "md-en-b2-01-2", theme: "qui e ora",
      title: "The window at 3 p.m.", titleEs: "La ventana de las 3 p. m.",
      minutes: 2,
      paragraphs: [
        { it: "At three in the afternoon, the light crosses the home office like a slow animal. Dust floats in it. The neighbor's dog barks twice and stops. For a moment, the mind stops arguing with the day and simply watches the light move across the desk.", es: "A las tres de la tarde, la luz cruza la oficina en casa como un animal lento. El polvo flota en ella. El perro del vecino ladra dos veces y calla. Por un momento, la mente deja de discutir con el día y simplemente mira la luz moverse por el escritorio." },
        { it: "This is the here and now: not a mystical achievement, just attention landing on what is already here. The report can wait ninety seconds. The deadline exists, but so does this window, this dust, this light. Presence is not the absence of work; it is work's quiet companion.", es: "Esto es el aquí y el ahora: no un logro místico, solo la atención aterrizando en lo que ya está aquí. El reporte puede esperar noventa segundos. La fecha límite existe, pero esta ventana también, este polvo, esta luz. La presencia no es la ausencia del trabajo; es su compañera silenciosa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un pronóstico del clima de Seattle", "Estar presente ante la ventana en plena jornada de trabajo", "Cómo limpiar el polvo de la oficina"],
        answer: 1,
        why: "El título nombra un momento concreto del día; el foco es la atención, no el clima ni la limpieza.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The light crosses the home office like a slow animal.",
          "Dust floats in the beam.",
          "The report can wait ninety seconds.",
          "Standing desks cost between two and four hundred dollars.",
          "Presence is work's quiet companion.",
        ],
        intruder: 3,
        why: "El precio de los muebles de oficina es un dato práctico ajeno a la escena contemplativa: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Presence is attention to what is already here, even at work", "Dust is bad for home offices", "Deadlines should be ignored until Friday"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["The light crosses the home office like a slow animal", "The neighbor's dog barks twice and stops", "Presence is not the absence of work"],
        distractors: ["The dog belongs to the mail carrier", "The narrator quits the job", "The window faces a parking lot"],
      },
    },
    {
      id: "md-en-b2-01-3", theme: "relax fisico",
      title: "Unclench the workday", titleEs: "Soltar la jornada laboral",
      minutes: 3,
      paragraphs: [
        { it: "Six hours of remote work live in the body: a locked jaw, shoulders serving as earrings, hands curled around the mouse like it might escape. None of it is dramatic; all of it is tension, quietly stacked. The body keeps the receipts of every tense email.", es: "Seis horas de trabajo remoto viven en el cuerpo: una mandíbula cerrada, hombros que sirven de aretes, manos acurrucadas alrededor del mouse como si fuera a escaparse. Nada de eso es dramático; todo es tensión, apilada en silencio. El cuerpo guarda los recibos de cada correo tenso." },
        { it: "Unclenching is a tour, not a workout. Jaw: let the teeth part. Shoulders: down, away from the ears. Hands: open, palms up on the desk. Feet: flat on the floor, toes unclenched too — yes, toes hold tension. Three slow breaths, and the day's armor comes off one strap at a time.", es: "Soltar es un recorrido, no un entrenamiento. Mandíbula: deja que los dientes se separen. Hombros: abajo, lejos de las orejas. Manos: abiertas, palmas arriba sobre el escritorio. Pies: planos en el piso, dedos sueltos también — sí, los dedos guardan tensión. Tres respiraciones lentas, y la armadura del día se quita correa por correa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una rutina intensa de gimnasio", "Soltar la tensión física acumulada tras el trabajo", "Cómo elegir un buen mouse ergonómico"],
        answer: 1,
        why: "«Unclench the workday» apunta a liberar tensión, no al ejercicio físico ni al equipamiento.",
      },
      sequence: {
        instr: "Ordena el recorrido de soltar la jornada:",
        events: ["You notice the jaw is locked", "You let the teeth part gently", "You drop the shoulders away from the ears", "You open the hands, palms up on the desk", "You take three slow breaths as the armor comes off"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Welcome to the unclenching tour. Start with your jaw: let the teeth part, let the tongue rest. Now the shoulders: down, away from the ears. Open your hands, palms up on the desk. Feel your feet flat on the floor, and yes, uncurl your toes. Take three slow breaths. With every exhale, one strap of the day's armor comes off. There is nothing to fix here; there is only something to release.",
        questions: [
          { q: "Where do the shoulders go?", kind: "literal", options: ["Up toward the ears", "Down, away from the ears", "Behind the back"], answer: 1, why: "«Now the shoulders: down, away from the ears»." },
          { q: "What comes off with every exhale?", kind: "inferencial", options: ["One strap of the day's armor", "The office badge", "A shoe"], answer: 0, why: "«With every exhale, one strap of the day's armor comes off»: se infiere de la metáfora." },
          { q: "What do the toes do?", kind: "literal", options: ["They uncurl", "They tap twice", "They lift off the floor"], answer: 0, why: "«yes, uncurl your toes»." },
          { q: "What is there to do at the end, according to the audio?", kind: "inferencial", options: ["Nothing to fix, only something to release", "Ten push-ups", "Answer one last email"], answer: 0, why: "«There is nothing to fix here; there is only something to release»: el cierre del audio." },
        ],
      },
    },
  ],

  "en-cu-b2-02": [
    {
      id: "md-en-b2-02-1", theme: "spiritualità",
      title: "Work as an offering", titleEs: "El trabajo como ofrenda",
      minutes: 3,
      paragraphs: [
        { it: "There is a quiet spirituality in doing small things with full attention: the report proofread twice, the client call taken with both ears, the colleague's name remembered. No ceremony, no incense — just the old idea that how you do anything is how you do everything.", es: "Hay una espiritualidad silenciosa en hacer las cosas pequeñas con atención plena: el reporte revisado dos veces, la llamada con el cliente atendida con los dos oídos, el nombre del compañero recordado. Sin ceremonia, sin incienso — solo la vieja idea de que cómo haces cualquier cosa es cómo haces todo." },
        { it: "Some traditions call it an offering: the work itself becomes the practice. You do not need to love every task to honor it. Washing the coffee cup with the same care as the quarterly review is not perfectionism; it is respect for the thing in front of you. The sacred, it turns out, commutes to work too.", es: "Algunas tradiciones lo llaman ofrenda: el trabajo mismo se vuelve la práctica. No necesitas amar cada tarea para honrarla. Lavar la taza de café con el mismo cuidado que la revisión trimestral no es perfeccionismo; es respeto por lo que tienes delante. Lo sagrado, resulta, también va a trabajar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Religiones comparadas en la oficina", "Espiritualidad cotidiana hecha trabajo bien hecho", "Un manual de productividad"],
        answer: 1,
        why: "El título «Work as an offering» apunta a la dimensión espiritual del trabajo diario, no a la teología comparada.",
      },
      quiz: [
        { q: "What is the 'old idea' mentioned in the first paragraph?", kind: "literal", options: ["How you do anything is how you do everything", "Work should be avoided when possible", "Only big tasks deserve attention"], answer: 0, why: "«just the old idea that how you do anything is how you do everything»: literal." },
        { q: "Why does the text mention washing the coffee cup?", kind: "inferencial", options: ["To show that small actions can receive the same care as big ones", "To complain about dirty offices", "To recommend buying a dishwasher"], answer: 0, why: "Se contrasta la taza con la revisión trimestral: el cuidado igual en lo pequeño y lo grande." },
        { q: "Which sentence best fits the text's view of spirituality?", kind: "critica", options: ["Spirituality requires a temple", "The sacred commutes to work too", "Only artists can be spiritual at work"], answer: 1, why: "La frase de cierre resume la tesis: lo sagrado también toma el transporte al trabajo." },
      ],
      vf: [
        { text: "The text says you must love every task to honor it.", value: false, why: "Dice lo contrario: «You do not need to love every task to honor it»." },
        { text: "Remembering a colleague's name is listed as a small thing done with attention.", value: true, why: "Aparece en la enumeración del primer párrafo." },
        { text: "Washing the cup with care is presented as respect, not perfectionism.", value: true, why: "«is not perfectionism; it is respect for the thing in front of you»." },
      ],
    },
    {
      id: "md-en-b2-02-2", theme: "relax mentale",
      title: "Before the big conversation", titleEs: "Antes de la gran conversación",
      minutes: 2,
      paragraphs: [
        { it: "Ten minutes before you pitch the pilot, the mind writes disaster scripts: she will say no, the numbers are wrong, the words will desert you. Mental relaxation is not deleting the script; it is noticing that you are the one holding the pen.", es: "Diez minutos antes de presentar el piloto, la mente escribe guiones de desastre: dirá que no, los números están mal, las palabras te abandonarán. La relajación mental no es borrar el guion; es notar que tú eres quien sostiene la pluma." },
        { it: "Name the fear quietly: «I am imagining rejection.» Naming shrinks it. Then give the mind one job: rehearse the first sentence only. Not the whole meeting — the first sentence. The rest of the conversation belongs to the future, which is famously never here on time.", es: "Nombra el miedo en voz baja: «Estoy imaginando el rechazo». Nombrarlo lo encoge. Luego dale a la mente una sola tarea: ensayar únicamente la primera frase. No la reunión entera — la primera frase. El resto de la conversación pertenece al futuro, que es famoso por nunca llegar a tiempo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo redactar una propuesta de negocio", "Relajar la mente antes de una conversación importante", "Por qué los jefes siempre dicen que no"],
        answer: 1,
        why: "El título marca el «antes» de la conversación grande: el tema es la mente, no la propuesta.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The mind writes disaster scripts before the pitch.",
          "Naming the fear quietly shrinks it.",
          "You give the mind one job: rehearse the first sentence.",
          "The meeting room on the third floor seats twelve people.",
          "The future is famously never here on time.",
        ],
        intruder: 3,
        why: "La capacidad de la sala es un dato logístico ajeno a la relajación mental: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Notice you write the disaster scripts, then rehearse only the first sentence", "Memorize the whole pitch word for word", "Cancel the meeting until you feel ready"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["The mind writes disaster scripts before a big conversation", "Naming the fear quietly shrinks it", "The future is famously never here on time"],
        distractors: ["The boss rejected the pilot", "The numbers were actually wrong", "The narrator quit instead of pitching"],
      },
    },
    {
      id: "md-en-b2-02-3", theme: "meditazione",
      title: "One proposal, ten breaths", titleEs: "Una propuesta, diez respiraciones",
      minutes: 3,
      paragraphs: [
        { it: "A proposal is a seed, not a verdict. Before you carry it into the office, sit with it for ten breaths. On the inhale, remember why it matters; on the exhale, release the outcome. The proposal will be stronger in your hands if it is not drowning in your hopes.", es: "Una propuesta es una semilla, no un veredicto. Antes de llevarla a la oficina, siéntate con ella diez respiraciones. En la inhalación, recuerda por qué importa; en la exhalación, suelta el resultado. La propuesta estará más fuerte en tus manos si no se está ahogando en tus esperanzas." },
        { it: "Meditation does not make the meeting go your way; it makes you available for whatever way it goes. If she says yes, you will be present for it. If she says no, you will be present for that too — and present people hear the second question hiding inside the first no.", es: "La meditación no hace que la reunión salga a tu manera; te hace disponible para como salga. Si ella dice sí, estarás presente para eso. Si dice no, estarás presente también — y las personas presentes oyen la segunda pregunta escondida dentro del primer no." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de negociación salarial", "Meditar con la propuesta antes de presentarla", "Cómo escribir un memorando perfecto"],
        answer: 1,
        why: "El título empareja la propuesta con las respiraciones: el tema es la preparación meditativa.",
      },
      sequence: {
        instr: "Ordena la práctica de la propuesta:",
        events: ["You sit with the proposal for ten breaths", "On the inhale you remember why it matters", "On the exhale you release the outcome", "You walk into the meeting available for whatever happens", "You hear the second question hiding inside the no"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Before you open that door, take ten breaths with your proposal. Breathe in: remember why it matters. Breathe out: let the outcome go. It is not your job to control her answer; it is your job to show up clearly. If the answer is yes, be present. If it is no, be present too — the second question often hides inside the first no. Now stand, shoulders down, and begin.",
        questions: [
          { q: "What do you remember on the inhale?", kind: "literal", options: ["Why the proposal matters", "Her last email", "The salary number"], answer: 0, why: "«Breathe in: remember why it matters»." },
          { q: "What is your job, according to the audio?", kind: "inferencial", options: ["To show up clearly, not to control the answer", "To convince her at any cost", "To reschedule the meeting"], answer: 0, why: "«It is not your job to control her answer; it is your job to show up clearly»." },
          { q: "Where does the second question hide?", kind: "literal", options: ["Inside the first no", "Inside the elevator", "Inside the budget"], answer: 0, why: "«the second question often hides inside the first no»." },
          { q: "How do you stand before beginning?", kind: "inferencial", options: ["With shoulders down", "With fists closed", "Looking at the floor"], answer: 0, why: "«Now stand, shoulders down, and begin»: se infiere del cierre." },
        ],
      },
    },
  ],

  "en-cu-b2-03": [
    {
      id: "md-en-b2-03-1", theme: "qui e ora",
      title: "The pause between jokes", titleEs: "La pausa entre bromas",
      minutes: 3,
      paragraphs: [
        { it: "Fast talk has a pulse: joke, laugh, joke, joke, laugh. Between them, almost invisible, there are pauses — the half second where a friend decides whether to say the real thing. The here and now of a conversation lives in those gaps, not in the punchlines.", es: "La conversación rápida tiene pulso: broma, risa, broma, broma, risa. Entre ellas, casi invisibles, hay pausas — el medio segundo en que un amigo decide si decir lo verdadero. El aquí y el ahora de una conversación vive en esos huecos, no en los remates." },
        { it: "Listening for the pause is a quiet skill. You stop preparing your reply; you stop grading their jokes. For one breath, the banter stops being a performance and becomes a conversation. People remember the person who noticed their pause more than the person who filled it.", es: "Escuchar la pausa es una habilidad silenciosa. Dejas de preparar tu respuesta; dejas de calificar sus bromas. Por una respiración, la charla deja de ser actuación y se vuelve conversación. La gente recuerda a quien notó su pausa más que a quien la llenó." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo contar mejores chistes", "Escuchar las pausas reales dentro de la conversación rápida", "Por qué reírse es de mala educación"],
        answer: 1,
        why: "El título traslada la presencia al hueco entre bromas, no al arte de bromear.",
      },
      quiz: [
        { q: "Where does the 'here and now' of a conversation live?", kind: "literal", options: ["In the pauses between jokes", "In the punchlines", "In the group chat later"], answer: 0, why: "«The here and now of a conversation lives in those gaps»: literal." },
        { q: "What does 'you stop grading their jokes' suggest about normal listening?", kind: "inferencial", options: ["We usually judge instead of simply listening", "We usually take notes", "We usually laugh too loudly"], answer: 0, why: "Se infiere que la escucha habitual evalúa en vez de recibir: el texto pide soltar la calificación." },
        { q: "Which person will be remembered, according to the text?", kind: "critica", options: ["The one who noticed the pause rather than filled it", "The one with the best punchline", "The one who talked the most"], answer: 0, why: "La frase de cierre compara al que nota la pausa con el que la llena: la memoria premia la atención." },
      ],
      vf: [
        { text: "The pauses between jokes are described as almost invisible.", value: true, why: "«Between them, almost invisible, there are pauses»." },
        { text: "The text recommends preparing your reply while the other person speaks.", value: false, why: "Dice lo contrario: «You stop preparing your reply»." },
        { text: "Banter can become a conversation for one breath.", value: true, why: "«For one breath, the banter stops being a performance and becomes a conversation»." },
      ],
    },
    {
      id: "md-en-b2-03-2", theme: "relax fisico",
      title: "Laughing muscles", titleEs: "Músculos de la risa",
      minutes: 2,
      paragraphs: [
        { it: "A real laugh is a full-body event: the diaphragm jumps, the shoulders shake, the eyes narrow to slits, and for a few seconds the body forgets to be dignified. Twenty minutes of good company at happy hour can do more for a stiff neck than a lecture about posture.", es: "Una risa de verdad es un evento de cuerpo entero: el diafragma brinca, los hombros tiemblan, los ojos se estrechan hasta ser rendijas, y por unos segundos el cuerpo olvida ser digno. Veinte minutos de buena compañía en el happy hour pueden hacer más por un cuello tenso que una conferencia sobre postura." },
        { it: "Afterward, the body hums like a struck bell. The jaw is loose, the breathing is wide, and the ribs feel rearranged in the best way. Physical relaxation does not always begin with a yoga mat; sometimes it begins with a friend's terrible impression of the boss.", es: "Después, el cuerpo vibra como una campana golpeada. La mandíbula está suelta, la respiración es ancha, y las costillas se sienten reacomodadas de la mejor manera. La relajación física no siempre empieza en una esterilla de yoga; a veces empieza con la terrible imitación del jefe que hace un amigo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una clase de anatomía del diafragma", "La risa como liberación física completa", "Los peligros de reírse en el trabajo"],
        answer: 1,
        why: "«Laughing muscles» apunta al cuerpo que ríe, no a la ciencia ni a la etiqueta.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "A real laugh makes the diaphragm jump.",
          "The eyes narrow to slits.",
          "The ribs feel rearranged in the best way.",
          "Domestic draft beer costs six dollars a pint.",
          "Sometimes relaxation begins with a friend's terrible impression.",
        ],
        intruder: 3,
        why: "El precio de la cerveza es un dato práctico ajeno a la fisiología de la risa: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Laughter is a full-body release that relaxes better than advice", "Happy hour is dangerous for your health", "Posture lectures cure stiff necks"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["The diaphragm jumps and the shoulders shake", "Afterward the body hums like a struck bell", "The jaw is loose and the breathing is wide"],
        distractors: ["The friend's impression won a contest", "The ribs were injured in a fall", "Yoga mats are forbidden at happy hour"],
      },
    },
    {
      id: "md-en-b2-03-3", theme: "spiritualità",
      title: "Kindness behind the roast", titleEs: "La bondad detrás de la broma",
      minutes: 3,
      paragraphs: [
        { it: "The roast looks like cruelty and works like trust. Friends mock each other's parking jobs, coffee orders, and third strikeouts precisely because the floor is safe. Underneath every good joke between close friends runs an older sentence: I know you, and I stay.", es: "La burla amistosa parece crueldad y funciona como confianza. Los amigos se burlan del estacionamiento, del pedido de café y del tercer strike exactamente porque el piso es seguro. Debajo de cada buena broma entre amigos cercanos corre una frase más antigua: te conozco, y me quedo." },
        { it: "That is a quiet kind of spirituality: being known and staying anyway. No ritual required. The next time affection arrives disguised as teasing, receive it as what it is — a small, strange blessing wrapped in sarcasm, handed over without eye contact.", es: "Esa es una clase silenciosa de espiritualidad: ser conocido y quedarse igual. Sin ritual necesario. La próxima vez que el cariño llegue disfrazado de burla, recíbelo como lo que es — una bendición pequeña y extraña envuelta en sarcasmo, entregada sin contacto visual." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo insultar mejor a los amigos", "La confianza y el cariño escondidos en la broma amistosa", "Una guía de etiqueta para el happy hour"],
        answer: 1,
        why: "El título opone la burla («roast») a la bondad: el tema es el afecto debajo de la broma.",
      },
      sequence: {
        instr: "Ordena la secuencia del afecto disfrazado:",
        events: ["Friends mock each other's parking jobs", "The floor is safe because they trust each other", "Underneath the joke runs an older sentence: I know you, and I stay", "Affection arrives disguised as teasing", "You receive it as a small blessing wrapped in sarcasm"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Some blessings arrive wrapped in sarcasm. A friend mocks your parking, your coffee order, your third strikeout, and hands you, at the very same time, the quiet news that you are known. When teasing lands on safe ground, it carries trust underneath. So the practice is simple: listen for the sentence under the joke. Receive it. No eye contact is required — this is friendship, not a ceremony.",
        questions: [
          { q: "What wraps the blessing, according to the audio?", kind: "literal", options: ["Sarcasm", "Paper", "Silence"], answer: 0, why: "«Some blessings arrive wrapped in sarcasm»." },
          { q: "What runs underneath the teasing?", kind: "inferencial", options: ["Trust — you are known", "Anger at the parking job", "A complaint about coffee"], answer: 0, why: "«it carries trust underneath»: se infiere la confianza bajo la burla." },
          { q: "What is the practice the audio suggests?", kind: "literal", options: ["Listen for the sentence under the joke", "Never joke again", "Demand eye contact"], answer: 0, why: "«the practice is simple: listen for the sentence under the joke»." },
          { q: "What is NOT required at the end?", kind: "inferencial", options: ["Eye contact", "Listening", "Receiving"], answer: 0, why: "«No eye contact is required — this is friendship, not a ceremony»." },
        ],
      },
    },
  ],

  "en-cu-b2-04": [
    {
      id: "md-en-b2-04-1", theme: "relax mentale",
      title: "The writer's blank page", titleEs: "La página en blanco del escritor",
      minutes: 3,
      paragraphs: [
        { it: "The blank page is honest: it holds nothing, promises nothing, threatens nothing. The panic is a story the mind tells about a rectangle. Mental relaxation for a writer begins with admitting that the page is neutral and the storm is portable — you carried it in yourself.", es: "La página en blanco es honesta: no sostiene nada, no promete nada, no amenaza nada. El pánico es un cuento que la mente cuenta sobre un rectángulo. La relajación mental del escritor empieza por admitir que la página es neutra y que la tormenta es portátil — tú la llevabas dentro." },
        { it: "So put the storm down for a moment. Write the worst possible first sentence on purpose, with pleasure. The critic in your head has no power over a sentence that already admits it is bad. Momentum is quiet, but it is stronger than fear, and it only asks for one ugly sentence to hold on to.", es: "Así que baja la tormenta un momento. Escribe a propósito la peor primera frase posible, con gusto. El crítico de tu cabeza no tiene poder sobre una frase que ya admite que es mala. El impulso es silencioso, pero más fuerte que el miedo, y solo pide una frase fea a la que agarrarse." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Consejos de ortografía y estilo", "Relajar la mente ante la página en blanco", "Cómo elegir el mejor procesador de textos"],
        answer: 1,
        why: "El título centra la página en blanco; el enfoque es la mente que la mira, no la técnica.",
      },
      quiz: [
        { q: "What does the blank page do, according to the text?", kind: "literal", options: ["It holds, promises and threatens nothing", "It judges your grammar", "It deletes your drafts"], answer: 0, why: "«it holds nothing, promises nothing, threatens nothing»: literal." },
        { q: "Why write 'the worst possible first sentence on purpose'?", kind: "inferencial", options: ["Because the inner critic has no power over a sentence that admits it is bad", "Because bad writing wins prizes", "Because the teacher asked for it"], answer: 0, why: "Se infiere que admitir la fealdad desarma al crítico interno y libera el impulso." },
        { q: "What is stronger than fear, according to the closing?", kind: "critica", options: ["Momentum, which only asks for one ugly sentence", "A perfect outline", "A stricter deadline"], answer: 0, why: "«Momentum is quiet, but it is stronger than fear»: la tesis del cierre." },
      ],
      vf: [
        { text: "The page itself is described as neutral.", value: true, why: "«the page is neutral»: literal." },
        { text: "The text recommends waiting for inspiration before writing.", value: false, why: "Recomienda lo contrario: escribir la peor frase posible ahora mismo." },
        { text: "The storm is something you carried in yourself.", value: true, why: "«the storm is portable — you carried it in yourself»." },
      ],
    },
    {
      id: "md-en-b2-04-2", theme: "meditazione",
      title: "One idea per paragraph", titleEs: "Una idea por párrafo",
      minutes: 2,
      paragraphs: [
        { it: "A paragraph is a breath unit. In: the topic sentence. Out: the evidence and the closing line. When a paragraph tries to hold four ideas, it is holding its breath — and readers can feel the strain. Meditation and writing agree on the same principle: one thing at a time, then a pause.", es: "Un párrafo es una unidad de respiración. Adentro: la oración temática. Afuera: la evidencia y la frase de cierre. Cuando un párrafo intenta sostener cuatro ideas, está aguantando la respiración — y los lectores sienten el esfuerzo. La meditación y la escritura coinciden en el mismo principio: una cosa a la vez, y luego una pausa." },
        { it: "Try it on your next draft. Read a paragraph aloud and notice where you run out of air; that spot is usually where the second idea sneaked in. Cut it, give it a paragraph of its own, and read again. The prose starts breathing, and so, somehow, do you.", es: "Pruébalo en tu próximo borrador. Lee un párrafo en voz alta y nota dónde te queda aire; ese punto suele ser donde se coló la segunda idea. Córtala, dale un párrafo propio, y lee de nuevo. La prosa empieza a respirar, y tú también, de algún modo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Reglas de puntuación académica", "El párrafo como unidad de respiración: una idea a la vez", "Cómo escribir párrafos más largos"],
        answer: 1,
        why: "El título anuncia la correspondencia entre respiración y párrafo, no normas de formato.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "A paragraph is a breath unit.",
          "The topic sentence arrives with the inhale.",
          "Four ideas in one paragraph means the paragraph is holding its breath.",
          "Most word processors were released in the 1980s.",
          "The prose starts breathing, and so do you.",
        ],
        intruder: 3,
        why: "La historia del software es trivia ajena a la metáfora respiratoria del párrafo: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["A paragraph should hold one idea, like a breath unit", "Paragraphs should be as long as possible", "Reading aloud damages your drafts"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["The topic sentence comes with the inhale", "Where you run out of air is where the second idea sneaked in", "Cut ideas and give each a paragraph of its own"],
        distractors: ["Holding four ideas makes paragraphs richer", "The evidence belongs in the conclusion", "Meditation replaces editing software"],
      },
    },
    {
      id: "md-en-b2-04-3", theme: "qui e ora",
      title: "The library at dusk", titleEs: "La biblioteca al atardecer",
      minutes: 3,
      paragraphs: [
        { it: "At dusk, the university library changes keys. The daytime rustle packs up; the lamps take over, one pool of light per table. Somewhere a pen rolls. The smell is paper and radiator dust, and for a moment the whole building feels like one long exhale.", es: "Al atardecer, la biblioteca universitaria cambia de llave. El bullicio diurno hace las maletas; las lámparas toman el relevo, un charco de luz por mesa. En algún lugar rueda un bolígrafo. El olor es papel y polvo de radiador, y por un momento el edificio entero se siente como una larga exhalación." },
        { it: "You do not have to be a student to borrow this quiet. Every city has a room that slows down at dusk — a library, a chapel, a late laundromat. The practice is simply arriving without an errand: five minutes of being nowhere else, under a lamp that is not yours, watching the light shift into night.", es: "No hace falta ser estudiante para pedir prestado este silencio. Cada ciudad tiene un cuarto que se vuelve lento al atardecer — una biblioteca, una capilla, una lavandería nocturna. La práctica es simplemente llegar sin recado: cinco minutos de no estar en ningún otro lugar, bajo una lámpara que no es tuya, viendo la luz cambiarse a noche." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Horarios de bibliotecas universitarias", "La quietud del atardecer y cómo pedirla prestada", "Cómo estudiar toda la noche sin dormir"],
        answer: 1,
        why: "El título nombra un momento; el texto trata de la quietud prestada, no de la logística.",
      },
      sequence: {
        instr: "Ordena la escena del atardecer:",
        events: ["The daytime rustle packs up at dusk", "The lamps take over, one pool of light per table", "A pen rolls somewhere in the quiet", "You arrive without an errand", "You watch the light shift into night"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Dusk at the library. The daytime noise is packing up. Lamps come on, one pool of light per table. Somewhere a pen rolls and nobody minds. You are allowed to be here without an errand. Sit under a lamp that is not yours. Smell the paper and the radiator dust. For five minutes, be nowhere else. The building is exhaling, and you can exhale with it.",
        questions: [
          { q: "What takes over at dusk?", kind: "literal", options: ["The lamps, one pool of light per table", "The cleaning crew", "The daytime rustle"], answer: 0, why: "«Lamps come on, one pool of light per table»." },
          { q: "What is the listener allowed to do?", kind: "inferencial", options: ["Be there without an errand", "Borrow every book", "Roll pens across tables"], answer: 0, why: "«You are allowed to be here without an errand»: se infiere del permiso del audio." },
          { q: "What is the building doing?", kind: "literal", options: ["Exhaling", "Closing", "Flooding"], answer: 0, why: "«The building is exhaling»." },
          { q: "How long does the audio suggest staying?", kind: "inferencial", options: ["Five minutes", "The whole night", "Until the lamps break"], answer: 0, why: "«For five minutes, be nowhere else»: la duración explícita de la pausa." },
        ],
      },
    },
  ],

  "en-cu-b2-05": [
    {
      id: "md-en-b2-05-1", theme: "relax fisico",
      title: "Shoulders at the negotiating table", titleEs: "Hombros en la mesa de negociación",
      minutes: 3,
      paragraphs: [
        { it: "Negotiation lives in the body. When the number lands wrong, the shoulders climb toward the ears, the jaw sets, and the breath goes shallow and quick. The other side reads all of it before you finish your sentence — bodies negotiate even when mouths stay polite.", es: "La negociación vive en el cuerpo. Cuando el número aterriza mal, los hombros trepan hacia las orejas, la mandíbula se cierra, y la respiración se vuelve corta y rápida. El otro lado lee todo eso antes de que termines tu frase — los cuerpos negocian aunque las bocas se queden corteses." },
        { it: "The countermeasure is embarrassingly simple: drop the shoulders on the exhale, twice, before you answer. Keep both feet flat on the floor, which is where your steadiness lives. A relaxed body buys the mind three extra seconds, and three seconds is exactly the length of a good counteroffer.", es: "La contramedida es vergonzosamente simple: baja los hombros en la exhalación, dos veces, antes de responder. Mantén los dos pies planos en el piso, que es donde vive tu firmeza. Un cuerpo relajado le compra a la mente tres segundos extra, y tres segundos es exactamente la duración de una buena contraoferta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de negociación agresiva", "El cuerpo durante la negociación y cómo calmarlo", "Cómo subir el precio de un alquiler"],
        answer: 1,
        why: "El título traslada la negociación al cuerpo: hombros, mandíbula y respiración.",
      },
      quiz: [
        { q: "What happens when 'the number lands wrong'?", kind: "literal", options: ["The shoulders climb toward the ears", "The deal closes instantly", "The feet leave the floor"], answer: 0, why: "«the shoulders climb toward the ears»: literal." },
        { q: "Why do 'three extra seconds' matter?", kind: "inferencial", options: ["Because they are exactly the length of a good counteroffer", "Because contracts require delays", "Because the other side gets bored"], answer: 0, why: "Se infiere del cierre: tres segundos es lo que dura una buena contraoferta." },
        { q: "What does 'bodies negotiate even when mouths stay polite' mean?", kind: "critica", options: ["Your body language reveals what polite words hide", "Negotiations should be silent", "Only polite people negotiate well"], answer: 0, why: "La tesis crítica: el cuerpo delata lo que la cortesía esconde." },
      ],
      vf: [
        { text: "The countermeasure is complicated and expensive.", value: false, why: "«embarrassingly simple»: bajar los hombros es gratis y fácil." },
        { text: "The other side reads your body before you finish your sentence.", value: true, why: "«reads all of it before you finish your sentence»." },
        { text: "Steadiness lives in both feet flat on the floor, according to the text.", value: true, why: "«which is where your steadiness lives»." },
      ],
    },
    {
      id: "md-en-b2-05-2", theme: "spiritualità",
      title: "Enough space", titleEs: "Suficiente espacio",
      minutes: 2,
      paragraphs: [
        { it: "The apartment hunt teaches a spiritual lesson before you sign anything: enough is a feeling, not a square footage. The loft with exposed brick whispers more; the studio with good light whispers enough. Both whispers are telling the truth, but only one of them lets you sleep.", es: "La búsqueda de apartamento enseña una lección espiritual antes de firmar nada: suficiente es un sentimiento, no un metraje. El loft de ladrillo visto susurra más; el estudio con buena luz susurra suficiente. Los dos susurros dicen la verdad, pero solo uno te deja dormir." },
        { it: "Enough is not settling — it is a boundary you can actually defend. The person who knows what enough looks like negotiates from calm, walks away without bitterness, and enjoys the room they rented. The person chasing more square footage lives, spiritually, in the hallway between rooms.", es: "Suficiente no es conformarse — es un límite que sí puedes defender. Quien sabe cómo se ve suficiente negocia desde la calma, se va sin amargura y disfruta la habitación que alquiló. Quien persigue más metros cuadrados vive, espiritualmente, en el pasillo entre habitaciones." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["El mercado inmobiliario de San Francisco", "Lo suficiente como frontera espiritual al elegir casa", "Cómo decorar un loft pequeño"],
        answer: 1,
        why: "El título «Enough space» juega con el doble sentido: espacio físico y espacio suficiente para el alma.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Enough is a feeling, not a square footage.",
          "The loft with exposed brick whispers more.",
          "The person who knows what enough looks like walks away without bitterness.",
          "Exposed brick adds about two percent to resale value.",
          "Chasing more square footage leaves you in the hallway.",
        ],
        intruder: 3,
        why: "El valor de reventa es un dato del mercado inmobiliario, ajeno a la lección espiritual: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Enough is a feeling and a defensible boundary, not a size", "Studios are always better than lofts", "Renting is always a mistake"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Enough is not settling", "The person who knows enough negotiates from calm", "Chasing more square footage leaves you in the hallway"],
        distractors: ["The studio had a doorman", "The loft was rent-free", "The narrator bought a house"],
      },
    },
    {
      id: "md-en-b2-05-3", theme: "relax mentale",
      title: "Letting the deal wait", titleEs: "Dejar que el trato espere",
      minutes: 3,
      paragraphs: [
        { it: "A deal that needs you to decide tonight is a deal that knows it cannot survive the morning. Mental relaxation in negotiation is the willingness to say: «Let me sleep on it.» The sentence feels like weakness and works like armor. Overnight, the terms either keep their shine or lose it, and you get to see which.", es: "Un trato que necesita que decidas esta noche es un trato que sabe que no puede sobrevivir a la mañana. La relajación mental en la negociación es la disposición a decir: «Déjame pensarlo esta noche». La frase se siente como debilidad y funciona como armadura. Durante la noche, los términos conservan su brillo o lo pierden, y tú puedes ver cuál de las dos." },
        { it: "Nothing about a lease, a salary, or a sofa changes between 10 p.m. and 9 a.m. — except your clarity, which does change, and dramatically. The mind files, sorts, and quietly discounts while you sleep. Trust the night shift. Decisions made in the morning have fewer regrets attached.", es: "Nada en un contrato, un sueldo o un sofá cambia entre las 10 p. m. y las 9 a. m. — excepto tu claridad, que sí cambia, y dramáticamente. La mente archiva, ordena y discretamente descuenta mientras duermes. Confía en el turno de noche. Las decisiones tomadas por la mañana traen menos arrepentimientos pegados." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo negociar rebajas agresivas", "Dormir antes de decidir como estrategia mental", "Los horarios de las inmobiliarias"],
        answer: 1,
        why: "El título «Letting the deal wait» apunta a posponer la decisión, no a la táctica agresiva.",
      },
      sequence: {
        instr: "Ordena la estrategia de la noche:",
        events: ["A deal asks you to decide tonight", "You say you will sleep on it", "Overnight the terms keep or lose their shine", "Your mind files, sorts and discounts while you sleep", "You decide in the morning with fewer regrets"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "When a deal pushes you to decide tonight, that pressure is information. Say the magic sentence: let me sleep on it. Nothing in the contract changes overnight — but your clarity does. While you rest, the mind files and sorts, and quietly discounts the hype. In the morning, read the terms again. Some keep their shine; some lose it. Trust the night shift. It works for free.",
        questions: [
          { q: "What is the magic sentence?", kind: "literal", options: ["Let me sleep on it", "I quit", "Show me the money"], answer: 0, why: "«Say the magic sentence: let me sleep on it»." },
          { q: "What changes overnight?", kind: "inferencial", options: ["Your clarity, not the terms", "The interest rate", "The landlord's mood"], answer: 0, why: "«Nothing in the contract changes overnight — but your clarity does»: se infiere la distinción." },
          { q: "What does the mind do while you rest?", kind: "literal", options: ["Files, sorts and quietly discounts", "Nothing at all", "Writes new contracts"], answer: 0, why: "«the mind files and sorts, and quietly discounts the hype»." },
          { q: "How much does the night shift cost?", kind: "inferencial", options: ["It works for free", "A hundred dollars", "Ten percent of the deal"], answer: 0, why: "«Trust the night shift. It works for free»: el cierre del audio." },
        ],
      },
    },
  ],

  "en-cu-b2-06": [
    {
      id: "md-en-b2-06-1", theme: "meditazione",
      title: "A stranger is a friend", titleEs: "Un desconocido es un amigo",
      minutes: 3,
      paragraphs: [
        { it: "Twenty thousand badges, and every single one is carrying a nervous system. Meditation at a conference is not incense in a corner; it is one honest breath before you say hello. The stranger at the coffee station is also rehearsing a sentence, also hoping to be seen.", es: "Veinte mil credenciales, y cada una lleva un sistema nervioso. La meditación en una conferencia no es incienso en un rincón; es una respiración honesta antes de decir hola. El desconocido en la estación de café también está ensayando una frase, también esperando ser visto." },
        { it: "Before the next introduction, try this: silently wish the person well. Not a speech — one second of goodwill. «May you have a good conference.» It sounds naïve until you notice what it does to your face. People trust a face that already decided to like them, and conversations open on their own.", es: "Antes de la próxima presentación, prueba esto: deséale en silencio algo bueno a la persona. No un discurso — un segundo de buena voluntad. «Que tengas una buena conferencia». Suena ingenuo hasta que notas lo que le hace a tu cara. La gente confía en un rostro que ya decidió quererla, y las conversaciones se abren solas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo recolectar contactos de LinkedIn", "Meditar antes de hablar con desconocidos en una conferencia", "Los precios del café en Las Vegas"],
        answer: 1,
        why: "El título anuncia la apertura hacia el desconocido; el tema es la buena voluntad previa al hola.",
      },
      quiz: [
        { q: "What do you do silently before the next introduction?", kind: "literal", options: ["Wish the person well for one second", "Rehearse your elevator pitch", "Check their badge color"], answer: 0, why: "«silently wish the person well»: literal." },
        { q: "What does the goodwill practice do to your face?", kind: "inferencial", options: ["It makes you look trustworthy and warm", "It freezes your expression", "It makes you look busy"], answer: 0, why: "Se infiere de «People trust a face that already decided to like them»." },
        { q: "What is the text's view of strangers at a conference?", kind: "critica", options: ["Every stranger is also hoping to be seen", "Strangers should be avoided", "Only badge colors matter"], answer: 0, why: "La tesis humaniza al desconocido: también ensaya, también espera ser visto." },
      ],
      vf: [
        { text: "Meditation at a conference requires incense and a quiet corner.", value: false, why: "«is not incense in a corner»: la versión real es una respiración antes del hola." },
        { text: "The stranger at the coffee station is also rehearsing a sentence.", value: true, why: "«also rehearsing a sentence, also hoping to be seen»." },
        { text: "Conversations open on their own when trust is present.", value: true, why: "«conversations open on their own» cierra el segundo párrafo." },
      ],
    },
    {
      id: "md-en-b2-06-2", theme: "qui e ora",
      title: "The badge and the breath", titleEs: "La credencial y la respiración",
      minutes: 2,
      paragraphs: [
        { it: "Between the keynote and the next session, the hallway is a river of lanyards. You are here, in the middle of it, holding a coffee that is too hot, and for once you are not anywhere else: not in tomorrow's pitch, not in yesterday's awkward handshake. Just here, in the loud, fluorescent present.", es: "Entre el keynote y la siguiente sesión, el pasillo es un río de credenciales colgantes. Estás aquí, en medio de él, sosteniendo un café demasiado caliente, y por una vez no estás en ningún otro lugar: no en el pitch de mañana, no en el apretón de manos incómodo de ayer. Solo aquí, en el presente ruidoso y fluorescente." },
        { it: "The here and now at a conference is not silent — it is 20,000 people being alive at the same time. Let the noise wash over you without sorting it. Feel the coffee warm your hands. The moment asks nothing of you, which is exactly why it is so hard to stay in.", es: "El aquí y el ahora en una conferencia no es silencioso — son 20.000 personas estando vivas al mismo tiempo. Deja que el ruido te pase por encima sin clasificarlo. Siente el café calentándote las manos. El momento no te pide nada, que es exactamente por lo que es tan difícil quedarse en él." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo evitar las multitudes en conferencias", "Estar presente en medio del ruido de una conferencia", "Por qué el café de evento siempre quema"],
        answer: 1,
        why: "El título empareja la credencial (acontecimiento) con la respiración (presencia).",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The hallway is a river of lanyards.",
          "You are not in tomorrow's pitch.",
          "The present is loud and fluorescent.",
          "The keynote hall seats two thousand attendees.",
          "The moment asks nothing of you.",
        ],
        intruder: 3,
        why: "La capacidad del auditorio es logística del evento, no la experiencia de presencia: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Being present in the loud, fluorescent middle of a conference", "How to skip keynotes successfully", "Why conference coffee is always too hot"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["You are not in tomorrow's pitch or yesterday's handshake", "The here and now is 20,000 people being alive at the same time", "The moment asks nothing of you"],
        distractors: ["The keynote was canceled", "The lanyards were green", "You found a quiet room upstairs"],
      },
    },
    {
      id: "md-en-b2-06-3", theme: "relax fisico",
      title: "Feet on the expo floor", titleEs: "Los pies en el pabellón",
      minutes: 3,
      paragraphs: [
        { it: "Hour four on the expo floor: the feet file a formal complaint, the lower back joins the petition, and the bag strap has carved its signature into your shoulder. Conference walking is a sport nobody trains for — miles of carpet, hours of standing, zero cardio glory.", es: "Hora cuatro en el pabellón de exposiciones: los pies presentan una queja formal, la lumbar se suma a la petición, y la correa del bolso ha grabado su firma en tu hombro. Caminar por conferencias es un deporte para el que nadie entrena — millas de alfombra, horas de pie, cero gloria cardiovascular." },
        { it: "The recovery ritual is old and free. Sit, even on the floor by a charging station — nobody judges at hour four. Roll the ankles slowly, both directions. Unclench the calves you didn't know you were clenching. Drink water like it's your job, because at a conference, it is. Ten minutes of this, and the floor forgives you.", es: "El ritual de recuperación es viejo y gratuito. Siéntate, aunque sea en el piso junto a una estación de carga — nadie juzga a la hora cuatro. Gira los tobillos despacio, en ambas direcciones. Suelta las pantorrillas que no sabías que tenías apretadas. Bebe agua como si fuera tu trabajo, porque en una conferencia, lo es. Diez minutos de esto, y el piso te perdona." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo conseguir el mejor stand", "Recuperar el cuerpo tras horas de pie en una conferencia", "Los mejores zapatos para expositores"],
        answer: 1,
        why: "«Feet on the expo floor» centra el cansancio físico del evento, no la estrategia comercial.",
      },
      sequence: {
        instr: "Ordena el ritual de recuperación:",
        events: ["The feet and lower back file complaints at hour four", "You sit down, even by a charging station", "You roll the ankles slowly in both directions", "You unclench the calves and drink water", "The floor forgives you after ten minutes"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Hour four on the expo floor. Find a seat — yes, the floor by the charging station counts. Roll your right ankle slowly, both directions. Now the left. Unclench your calves; you didn't know they were clenched, and they are. Let the bag slide off your shoulder. Drink water like it's your job, because today it is. Ten minutes from now, the floor will forgive you. Ready? Stand slowly.",
        questions: [
          { q: "Where can you sit, according to the audio?", kind: "literal", options: ["On the floor by the charging station", "Only on rented chairs", "On a demo table"], answer: 0, why: "«yes, the floor by the charging station counts»." },
          { q: "What do you do with the ankles?", kind: "inferencial", options: ["Roll them slowly in both directions", "Cross them tightly", "Kick them against a wall"], answer: 0, why: "«Roll your right ankle slowly, both directions»: se infiere la acción completa." },
          { q: "What is drunk like it's your job?", kind: "literal", options: ["Water", "Cold brew", "Sparkling wine"], answer: 0, why: "«Drink water like it's your job»." },
          { q: "How do you stand at the end?", kind: "inferencial", options: ["Slowly", "Immediately and fast", "Without finishing the exercise"], answer: 0, why: "«Ready? Stand slowly»: el cierre marca el modo de levantarse." },
        ],
      },
    },
  ],

  "en-cu-b2-07": [
    {
      id: "md-en-b2-07-1", theme: "spiritualità",
      title: "Resting the detective mind", titleEs: "Descansar la mente detectivesca",
      minutes: 3,
      paragraphs: [
        { it: "After the final episode, the mind keeps deposing witnesses at 2 a.m. Who moved the car? Why was the porch light on? The true crime fan inherits a detective brain with no off switch, and the body pays the overtime. Resting it is not a betrayal of the mystery; even detectives in the stories sleep.", es: "Después del episodio final, la mente sigue tomando declaraciones a testigos a las 2 a. m. ¿Quién movió el auto? ¿Por qué estaba encendida la luz del porche? El fan del true crime hereda un cerebro detective sin botón de apagado, y el cuerpo paga las horas extra. Descansarlo no es una traición al misterio; hasta los detectives de las historias duermen." },
        { it: "The practice is a handoff. Say it plainly: «The case is closed for tonight. The evidence will keep.» Justice, whatever it is, has never once been served by your insomnia. Put the theory down like a case file, leave it on the nightstand, and let the night be just the night.", es: "La práctica es un traspaso. Dilo sin rodeos: «El caso queda cerrado por esta noche. La evidencia sabe esperar». La justicia, sea lo que sea, jamás ha sido servida por tu insomnio. Deja la teoría como un expediente, déjala en la mesita de noche, y deja que la noche sea solo la noche." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Resumen del caso Mile Marker 9", "Cómo descansar la mente obsesionada con un caso", "Por qué el insomnio resuelve crímenes"],
        answer: 1,
        why: "El título anuncia el descanso de la mente detective, no la trama del podcast.",
      },
      quiz: [
        { q: "When does the mind keep deposing witnesses?", kind: "literal", options: ["At 2 a.m. after the final episode", "During the morning commute", "Only while the podcast plays"], answer: 0, why: "«keeps deposing witnesses at 2 a.m.»: literal." },
        { q: "Why does the text mention that 'even detectives in the stories sleep'?", kind: "inferencial", options: ["To show that resting the case is not a betrayal", "To prove the podcast is fictional", "To recommend detective novels"], answer: 0, why: "Se infiere que si hasta los detectives duermen, descansar no abandona el caso." },
        { q: "What is the 'handoff' the text recommends?", kind: "critica", options: ["Closing the case for the night and leaving the theory on the nightstand", "Binging two more episodes", "Emailing the podcast host"], answer: 0, why: "El traspaso es la práctica central: declarar el caso cerrado hasta mañana." },
      ],
      vf: [
        { text: "Insomnia has never served justice, according to the text.", value: true, why: "«has never once been served by your insomnia»: literal." },
        { text: "The text recommends watching one more episode to relax.", value: false, why: "Recomienda lo contrario: cerrar el caso por esta noche." },
        { text: "The case file metaphor suggests putting the theory down for the night.", value: true, why: "«Put the theory down like a case file, leave it on the nightstand»." },
      ],
    },
    {
      id: "md-en-b2-07-2", theme: "relax mentale",
      title: "Theories can wait until morning", titleEs: "Las teorías pueden esperar a la mañana",
      minutes: 2,
      paragraphs: [
        { it: "A theory is a cat: it pads around the mind at night, knocks things off shelves, and demands attention it does not need. Mental relaxation is not killing the cat; it is closing the bedroom door. The theory will still be there in the morning, sitting on your chest, exactly as theories do.", es: "Una teoría es un gato: merodea la mente de noche, tira cosas de los estantes y exige atención que no necesita. La relajación mental no es matar al gato; es cerrar la puerta del dormitorio. La teoría seguirá ahí por la mañana, sentada sobre tu pecho, exactamente como hacen las teorías." },
        { it: "Morning light is a famous skeptic. What felt like a breakthrough at midnight reads, at eight, like a note from a stranger. Give your best thinking to the morning and your worst worries to the night, which will misfile them anyway. The timeline will still not add up by Friday, and that, too, can wait.", es: "La luz de la mañana es una escéptica famosa. Lo que a medianoche parecía un hallazgo, a las ocho se lee como una nota de un desconocido. Dale tu mejor pensamiento a la mañana y tus peores preocupaciones a la noche, que de todos modos las archivará mal. La cronología seguirá sin cuadrar para el viernes, y eso también puede esperar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo resolver el caso del podcast", "Posponer las teorías hasta la mañana para descansar la mente", "Cuidados básicos de gatos domésticos"],
        answer: 1,
        why: "El título difiere las teorías a la mañana; el gato es la metáfora de la teoría nocturna.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "A theory pads around the mind at night.",
          "Mental relaxation is closing the bedroom door.",
          "Morning light is a famous skeptic.",
          "The neighbor's cat was named Detective Whiskers.",
          "The timeline will still not add up by Friday.",
        ],
        intruder: 3,
        why: "El nombre del gato del vecino es un detalle caprichoso ajeno al argumento de la relajación mental: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Close the bedroom door on theories at night; morning light is the better skeptic", "Stay up until every theory is solved", "Cats are bad pets for detectives"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A theory pads around the mind at night like a cat", "What felt like a breakthrough at midnight reads like a note from a stranger", "Give your best thinking to the morning"],
        distractors: ["The cat knocked the timeline off the shelf", "The theory was solved on Friday", "The narrator stopped listening to podcasts"],
      },
    },
    {
      id: "md-en-b2-07-3", theme: "meditazione",
      title: "Waffles, slowly", titleEs: "Waffles, despacio",
      minutes: 3,
      paragraphs: [
        { it: "Sunday breakfast after a true crime marathon is the perfect detox: heat the iron, pour the batter, and watch the steam rise like the world's smallest weather system. Meditation here is not formal. It is simply giving the waffle your full attention, which the waffle has earned.", es: "El desayuno dominical tras un maratón de true crime es el desintoxicante perfecto: calienta la wafflera, vierte la masa, y mira subir el vapor como el sistema meteorológico más pequeño del mundo. La meditación aquí no es formal. Es simplemente darle al waffle tu atención completa, que el waffle se la ha ganado." },
        { it: "Smell the batter turning golden. Listen for the moment the sizzle drops half a tone — that is the waffle's way of speaking. Syrup poured slowly makes a spiral you could study for a year. By the second waffle, the theories about mile marker 9 are still in your head, but quieter, and smelling of maple.", es: "Huele la masa volviéndose dorada. Escucha el momento en que el chisporroteo baja medio tono — esa es la manera de hablar del waffle. El sirope vertido despacio hace una espiral que podrías estudiar un año. Para el segundo waffle, las teorías del kilómetro 9 siguen en tu cabeza, pero más calladas, y oliendo a arce." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una receta de waffles con medidas exactas", "Desayunar con atención plena tras el maratón de true crime", "Cómo limpiar una wafflera"],
        answer: 1,
        why: "«Waffles, slowly» apunta a la lentitud atenta, no a la receta ni a la limpieza.",
      },
      sequence: {
        instr: "Ordena la meditación del desayuno:",
        events: ["You heat the iron and pour the batter", "You watch the steam rise like a small weather system", "You listen as the sizzle drops half a tone", "You pour the syrup slowly into a spiral", "The theories get quieter and smell of maple"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Sunday morning meditation, waffle edition. Heat the iron. Pour the batter, and listen: the sizzle starts loud and then drops half a tone — that is your waffle telling you it is nearly ready. Watch the steam rise. When the moment comes, open the iron slowly. Add syrup in a spiral. Eat at the table, not at the counter. The case of the missing breakfast has just been solved.",
        questions: [
          { q: "What drops half a tone while cooking?", kind: "literal", options: ["The sizzle", "The radio", "Your voice"], answer: 0, why: "«the sizzle starts loud and then drops half a tone»." },
          { q: "What does the half-tone drop mean?", kind: "inferencial", options: ["The waffle is nearly ready", "The battery is dying", "The syrup is too cold"], answer: 0, why: "«that is your waffle telling you it is nearly ready»: se infiere el aviso." },
          { q: "Where does the audio say to eat?", kind: "literal", options: ["At the table, not at the counter", "Standing by the stove", "In the car"], answer: 0, why: "«Eat at the table, not at the counter»." },
          { q: "What case has been solved, in the joke?", kind: "inferencial", options: ["The case of the missing breakfast", "Mile marker 9", "The neighbor's stolen bike"], answer: 0, why: "«The case of the missing breakfast has just been solved»: el guiño final del audio." },
        ],
      },
    },
  ],

  "en-cu-b2-08": [
    {
      id: "md-en-b2-08-1", theme: "qui e ora",
      title: "Before they call your name", titleEs: "Antes de que digan tu nombre",
      minutes: 3,
      paragraphs: [
        { it: "The waiting room chair knows things. Across from you, a fern nobody waters; beside you, your own résumé, rehearsed to death. In three minutes they will call your name. Between now and then, there is exactly one place to live: here, in a plastic chair, breathing.", es: "La silla de la sala de espera sabe cosas. Frente a ti, un helecho que nadie riega; a tu lado, tu propio currículum, ensayado hasta la muerte. En tres minutos dirán tu nombre. Entre ahora y entonces, hay exactamente un lugar donde vivir: aquí, en una silla de plástico, respirando." },
        { it: "The future interview — the stumbles, the brilliant answers, the what-ifs — does not exist yet. It is a rehearsal with no audience. Feel the chair hold you, feel the floor take your weight. The name they call will be yours, and the person who stands up will be the one who was here the whole time.", es: "La entrevista futura — los tropiezos, las respuestas brillantes, los qué pasaría si — todavía no existe. Es un ensayo sin público. Siente la silla sostenerte, siente el piso tomar tu peso. El nombre que llamen será el tuyo, y quien se levante será quien estuvo aquí todo el tiempo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo responder preguntas difíciles", "Estar presente en la sala de espera antes de la entrevista", "Cómo vestirse para una entrevista interna"],
        answer: 1,
        why: "El título marca el «antes»: el momento de la espera, no las respuestas.",
      },
      quiz: [
        { q: "What is across from you in the waiting room?", kind: "literal", options: ["A fern nobody waters", "A mirror", "The interviewer"], answer: 0, why: "«Across from you, a fern nobody waters»: literal." },
        { q: "Why does the text call the imagined interview 'a rehearsal with no audience'?", kind: "inferencial", options: ["Because imagining it changes nothing and nobody is watching it", "Because interviews are performances", "Because the room is empty"], answer: 0, why: "Se infiere que la entrevista imaginada no existe aún: ensayarla no la altera." },
        { q: "Who stands up when the name is called, according to the ending?", kind: "critica", options: ["The person who was present the whole time", "The person with the best résumé", "The person who rehearsed the most"], answer: 0, why: "La tesis del cierre: se levanta quien estuvo aquí, presente, todo el tiempo." },
      ],
      vf: [
        { text: "The résumé is described as rehearsed to death.", value: true, why: "«your own résumé, rehearsed to death»: literal." },
        { text: "The text recommends rehearsing answers during the final three minutes.", value: false, why: "Dice lo contrario: el único lugar donde vivir es aquí, respirando." },
        { text: "The chair and the floor are mentioned as things you can feel.", value: true, why: "«Feel the chair hold you, feel the floor take your weight»." },
      ],
    },
    {
      id: "md-en-b2-08-2", theme: "relax fisico",
      title: "The handshake rehearsal", titleEs: "El ensayo del apretón de manos",
      minutes: 2,
      paragraphs: [
        { it: "The body has opinions about interviews. The hand, left alone, will either strangle the handshake or offer a wet fish. The spine, unadvised, will fold into an apology. Physical preparation is a two-minute rehearsal in the parking lot: roll the shoulders back, unlock the knees, and let the hand hang heavy and warm.", es: "El cuerpo tiene opiniones sobre las entrevistas. La mano, abandonada a su suerte, o estrangulará el apretón u ofrecerá un pez mojado. La columna, sin consejo, se plegará en una disculpa. La preparación física es un ensayo de dos minutos en el estacionamiento: enrolla los hombros hacia atrás, desbloquea las rodillas, y deja la mano colgar pesada y tibia." },
        { it: "Practice the walk to the chair as if you were walking in to help, not to beg — the body cannot tell the difference, but the face can. Plant both feet before you sit. Hands on the table, open. The body you walk in with sets the volume of the voice you answer with.", es: "Practica la caminata hasta la silla como si entraras a ayudar, no a mendigar — el cuerpo no nota la diferencia, pero la cara sí. Planta los dos pies antes de sentarte. Manos sobre la mesa, abiertas. El cuerpo con el que entras fija el volumen de la voz con la que respondes." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Preguntas STAR y respuestas modelo", "Preparar el cuerpo antes de la entrevista", "Cómo negociar el salario por teléfono"],
        answer: 1,
        why: "El título anuncia el ensayo físico: mano, columna y caminata, no el contenido de las respuestas.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Roll the shoulders back in the parking lot.",
          "Let the hand hang heavy and warm.",
          "Walk in as if you were going to help.",
          "The parking garage charges four dollars an hour.",
          "Plant both feet before you sit.",
        ],
        intruder: 3,
        why: "La tarifa del estacionamiento es logística ajena al ensayo físico: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["A two-minute physical rehearsal sets the tone: walk in to help, feet planted, hands open", "Handshakes should be avoided entirely", "Interviews are won by the résumé alone"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Roll the shoulders back and unlock the knees", "Walk in as if you were going to help, not to beg", "Plant both feet before you sit"],
        distractors: ["The parking lot was full that morning", "The chair was too tall", "The interviewer shook hands twice"],
      },
    },
    {
      id: "md-en-b2-08-3", theme: "spiritualità",
      title: "Your story is enough", titleEs: "Tu historia es suficiente",
      minutes: 3,
      paragraphs: [
        { it: "Before an interview, the mind hires a marketing team: inflate this, hide that, add adjectives. There is a quieter alternative, and it is almost spiritual: tell the truth with your chest open. What you actually did, what you actually learned, told plainly, is more magnetic than any polished fiction.", es: "Antes de una entrevista, la mente contrata un equipo de marketing: infla esto, esconde aquello, añade adjetivos. Hay una alternativa más callada, y es casi espiritual: cuenta la verdad con el pecho abierto. Lo que realmente hiciste, lo que realmente aprendiste, dicho sin adornos, es más magnético que cualquier ficción pulida." },
        { it: "Being enough is not the belief that you are the best candidate; it is the refusal to audition for a role you already play. Your story got you to this chair — the rejections included. Walk in as the author, not the draft, and whatever happens in that room, you will leave it still yourself.", es: "Ser suficiente no es creer que eres el mejor candidato; es negarte a hacer una audición para un papel que ya interpretas. Tu historia te trajo hasta esta silla — los rechazos incluidos. Entra como el autor, no como el borrador, y pase lo que pase en esa sala, saldrás de ella siendo todavía tú." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo exagerar logros en la entrevista", "La verdad dicha con el pecho abierto como postura espiritual", "Técnicas de control de nervios"],
        answer: 1,
        why: "«Your story is enough» apunta a la suficiencia de la propia historia, no a la técnica.",
      },
      sequence: {
        instr: "Ordena la secuencia de la historia suficiente:",
        events: ["The mind hires a marketing team before the interview", "You choose to tell the truth with your chest open", "You tell what you did and learned, plainly", "You walk in as the author, not the draft", "Whatever happens, you leave still yourself"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Before you walk in, a small reminder. Your story got you here — the rejections included. You do not need to audition for a role you already play. Tell what you did, tell what you learned, and keep your chest open. If they say yes, you are still yourself. If they say no, you are still yourself. That is the only guarantee on offer today, and it is enough. Now breathe once, and go.",
        questions: [
          { q: "What got you here, according to the audio?", kind: "literal", options: ["Your story, rejections included", "Your new suit", "A lucky parking spot"], answer: 0, why: "«Your story got you here — the rejections included»." },
          { q: "What is the only guarantee on offer?", kind: "inferencial", options: ["You leave still yourself", "You get the job", "The interview is easy"], answer: 0, why: "Se infiere del cierre: la única garantía es seguir siendo tú." },
          { q: "What do you tell, plainly?", kind: "literal", options: ["What you did and what you learned", "What your rivals did", "What you plan to earn"], answer: 0, why: "«Tell what you did, tell what you learned»." },
          { q: "What do you do before going in?", kind: "inferencial", options: ["Breathe once", "Check the salary range", "Text a friend"], answer: 0, why: "«Now breathe once, and go»: el cierre del audio." },
        ],
      },
    },
  ],

  "en-cu-b2-09": [
    {
      id: "md-en-b2-09-1", theme: "relax mentale",
      title: "Taste without stars", titleEs: "Sabor sin estrellas",
      minutes: 3,
      paragraphs: [
        { it: "The food arrives, and a tiny clerk in the head reaches for the stars: four? five? Was the plating worth half a point? The reviewing habit is a wall between you and the dinner. You are eating a spreadsheet now, and the spreadsheet never tastes of anything.", es: "La comida llega, y un pequeño oficinista en la cabeza agarra las estrellas: ¿cuatro? ¿cinco? ¿El emplatado valía medio punto? El hábito de calificar es un muro entre tú y la cena. Ahora estás comiendo una hoja de cálculo, y la hoja de cálculo nunca sabe a nada." },
        { it: "Mental relaxation at the table is firing the clerk. Let the dish be a dish, not a verdict. Notice warmth, salt, the crunch that arrives a half-beat late. You can rate the meal tomorrow if you must; tonight, taste it. The stars will still be in the sky either way — the other kind never mattered as much.", es: "La relajación mental en la mesa es despedir al oficinista. Deja que el plato sea un plato, no un veredicto. Nota el calor, la sal, el crujido que llega medio tiempo tarde. Puedes calificar la comida mañana si hace falta; esta noche, saboréala. Las estrellas seguirán en el cielo de todos modos — las otras nunca importaron tanto." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo escribir reseñas de restaurantes", "Soltar la calificación mental y simplemente probar la comida", "La astronomía y las constelaciones"],
        answer: 1,
        why: "«Taste without stars» juega con las estrellas de la reseña: el tema es soltarlas al comer.",
      },
      quiz: [
        { q: "What does the 'tiny clerk in the head' do?", kind: "literal", options: ["Reaches for the stars to rate everything", "Serves the food", "Pays the bill"], answer: 0, why: "«a tiny clerk in the head reaches for the stars»: literal." },
        { q: "Why is the spreadsheet metaphor used?", kind: "inferencial", options: ["Because rating while eating removes the experience of taste", "Because restaurants use software", "Because the bill is itemized"], answer: 0, why: "Se infiere que el muro de la calificación convierte la cena en datos sin sabor." },
        { q: "What is the text's advice for tonight?", kind: "critica", options: ["Taste the meal now; rate it tomorrow if you must", "Write the review before dessert", "Never eat out again"], answer: 0, why: "La tesis: esta noche se saborea, la calificación puede esperar." },
      ],
      vf: [
        { text: "The reviewing habit is compared to a wall between you and dinner.", value: true, why: "«The reviewing habit is a wall between you and the dinner»." },
        { text: "The text says the meal should be rated immediately.", value: false, why: "Dice lo contrario: la calificación puede esperar hasta mañana." },
        { text: "The crunch arrives a half-beat late, according to the text.", value: true, why: "«the crunch that arrives a half-beat late»: literal." },
      ],
    },
    {
      id: "md-en-b2-09-2", theme: "meditazione",
      title: "The first bite", titleEs: "El primer bocado",
      minutes: 2,
      paragraphs: [
        { it: "The first bite of a meal is a door. Before it, hunger; after it, memory. Meditation trains you to walk through that door slowly: look at the bite, turn the fork once, and notice that the mouth has already started watering — the body has been ready for minutes.", es: "El primer bocado de una comida es una puerta. Antes de él, hambre; después de él, memoria. La meditación te entrena para cruzar esa puerta despacio: mira el bocado, gira el tenedor una vez, y nota que la boca ya empezó a hacer agua — el cuerpo llevaba minutos listo." },
        { it: "Chew more than feels necessary. Flavor unfolds in chapters, not in a single flash: first salt, then heat, then something quiet underneath, maybe thyme. Somewhere around the tenth chew, the rushing stops by itself. You did not force presence; you gave it enough time to catch up.", es: "Mastica más de lo que parece necesario. El sabor se despliega en capítulos, no en un solo destello: primero la sal, luego el picante, luego algo callado debajo, quizá tomillo. Alrededor de la décima masticada, el apuro se detiene solo. No forzaste la presencia; le diste tiempo suficiente para alcanzarte." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una dieta basada en masticación", "Comer el primer bocado con atención plena", "La historia del tenedor en la mesa"],
        answer: 1,
        why: "El título centra un solo gesto: el primer bocado como práctica meditativa.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The first bite of a meal is a door.",
          "The body has been ready for minutes.",
          "Flavor unfolds in chapters.",
          "The restaurant's signature dish costs thirty-four dollars.",
          "The rushing stops by itself.",
        ],
        intruder: 3,
        why: "El precio del plato insignia pertenece a la cultura de la reseña, no a la meditación del primer bocado: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["The first bite is a door, and slow chewing gives presence time to catch up", "Forks should be turned exactly three times", "Hunger is an unhealthy feeling"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["The body starts watering before the bite", "Flavor unfolds in chapters: salt, heat, something quiet", "Around the tenth chew the rushing stops by itself"],
        distractors: ["The restaurant was closed on Mondays", "Thyme was imported from France", "The narrator skipped dessert"],
      },
    },
    {
      id: "md-en-b2-09-3", theme: "qui e ora",
      title: "A table for three", titleEs: "Una mesa para tres",
      minutes: 3,
      paragraphs: [
        { it: "Three friends, one table, ninety minutes of waiting ahead — and none of it wasted, because the conversation was the reservation. The bread arrives; nobody photographs it. Someone tells the story about the parking garage again, and it gets better with each telling, which is how you know the table is sacred ground.", es: "Tres amigos, una mesa, noventa minutos de espera por delante — y nada desperdiciado, porque la conversación era la reservación. Llega el pan; nadie lo fotografía. Alguien cuenta otra vez la historia del estacionamiento, y mejora con cada versión, que es como sabes que la mesa es terreno sagrado." },
        { it: "Being here, now, at a table for three is a humble superpower: phones face down, laughter timed like a jazz trio, the check arriving like a period at the end of a good sentence. Years later nobody remembers the jambalaya. Everyone remembers the table.", es: "Estar aquí, ahora, en una mesa para tres es un superpoder humilde: teléfonos boca abajo, risas sincronizadas como un trío de jazz, la cuenta llegando como un punto al final de una buena frase. Años después nadie recuerda el jambalaya. Todos recuerdan la mesa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo conseguir mesa sin reserva", "La presencia compartida en una mesa de amigos", "Una crítica del servicio del restaurante"],
        answer: 1,
        why: "El título nombra la mesa compartida; el foco es la compañía, no la logística ni la queja.",
      },
      sequence: {
        instr: "Ordena la velada:",
        events: ["Three friends wait ninety minutes for the table", "The bread arrives and nobody photographs it", "Someone retells the parking garage story", "Phones stay face down and laughter lands in time", "The check arrives like a period at the end of a good sentence"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "A table for three, and the wait is ninety minutes. Use it well: the conversation is the reservation. When the bread arrives, let it stay unphotographed. Tell the old story again, the one about the parking garage, and let it get better. Keep the phones face down. When the check finally comes, let it close the evening like a period at the end of a good sentence. Years from now, the table is what everyone will remember.",
        questions: [
          { q: "What is the reservation, according to the audio?", kind: "literal", options: ["The conversation", "The app", "The deposit"], answer: 0, why: "«the conversation is the reservation»." },
          { q: "What happens to the bread?", kind: "inferencial", options: ["It stays unphotographed", "It is sent back", "It is photographed twice"], answer: 0, why: "«let it stay unphotographed»: se infiere la decisión de no fotografiarlo." },
          { q: "What stays face down?", kind: "literal", options: ["The phones", "The plates", "The menus"], answer: 0, why: "«Keep the phones face down»." },
          { q: "What will everyone remember years from now?", kind: "inferencial", options: ["The table", "The jambalaya", "The bill"], answer: 0, why: "«the table is what everyone will remember»: el cierre del audio." },
        ],
      },
    },
  ],

  "en-cu-b2-10": [
    {
      id: "md-en-b2-10-1", theme: "relax fisico",
      title: "Sun on the shoulders", titleEs: "Sol en los hombros",
      minutes: 3,
      paragraphs: [
        { it: "At a San Diego barbecue, relaxation arrives through the skin before the mind even votes: sun on the shoulders, smoke in the air, a lawn chair doing its honest best. The body recognizes a day off within ninety seconds and starts loosening bolts you didn't know were tightened.", es: "En una barbacoa de San Diego, la relajación llega por la piel antes de que la mente siquiera vote: sol en los hombros, humo en el aire, una silla de jardín haciendo su mejor esfuerzo honesto. El cuerpo reconoce un día libre en noventa segundos y empieza a aflojar pernos que no sabías apretados." },
        { it: "Let the sun do the work. Feet flat on the grass, shoulders surrendering to gravity, a paper plate balanced on one knee like a small trophy. Every laugh burns residual tension. By the time the coals go gray, you have completed an entire physical relaxation protocol while believing you did nothing at all.", es: "Deja que el sol haga el trabajo. Pies planos en el pasto, hombros rindiéndose a la gravedad, un plato de papel equilibrado en una rodilla como un pequeño trofeo. Cada risa quema tensión residual. Para cuando los carbones se ponen grises, has completado un protocolo entero de relajación física creyendo que no hiciste nada." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los peligros del sol sin protector", "La relajación física espontánea en una barbacoa", "Cómo encender una parrilla de carbón"],
        answer: 1,
        why: "«Sun on the shoulders» apunta al cuerpo que descansa al aire libre, no a la salud ni a la técnica.",
      },
      quiz: [
        { q: "How quickly does the body recognize a day off?", kind: "literal", options: ["Within ninety seconds", "After three hours", "Only after dark"], answer: 0, why: "«within ninety seconds»: literal." },
        { q: "What does the 'lawn chair doing its honest best' suggest?", kind: "inferencial", options: ["Simple comfort can carry relaxation", "The chair is broken", "The yard needs new furniture"], answer: 0, why: "Se infiere que el confort modesto de la silla ya hace el trabajo." },
        { q: "What does 'a complete physical relaxation protocol' refer to?", kind: "critica", options: ["Sun, gravity, laughter and rest disguised as doing nothing", "A workout routine", "A medical procedure"], answer: 0, why: "La tesis irónica: el protocolo completo ocurre mientras crees no hacer nada." },
      ],
      vf: [
        { text: "Relaxation at the barbecue arrives through the skin before the mind votes.", value: true, why: "«arrives through the skin before the mind even votes»: literal." },
        { text: "The text recommends checking email between ribs.", value: false, why: "No aparece: el cuerpo está en modo día libre, no en modo oficina." },
        { text: "By the time the coals go gray, the body has relaxed completely.", value: true, why: "«By the time the coals go gray, you have completed an entire physical relaxation protocol»." },
      ],
    },
    {
      id: "md-en-b2-10-2", theme: "spiritualità",
      title: "Belonging without performing", titleEs: "Pertenecer sin actuar",
      minutes: 2,
      paragraphs: [
        { it: "At the barbecue, everyone speaks fluent casual: slang, inside jokes, a code that updates hourly. The outsider's temptation is performance — memorize the expressions, deploy them like passwords. But belonging is not vocabulary. The guest who laughs at the right time and asks real questions already belongs.", es: "En la barbacoa, todos hablan casual con fluidez: jerga, chistes internos, un código que se actualiza cada hora. La tentación del de afuera es la actuación — memorizar las expresiones, desplegarlas como contraseñas. Pero pertenecer no es vocabulario. El invitado que se ríe a tiempo y hace preguntas reales ya pertenece." },
        { it: "There is a quiet spirituality in showing up as a learner: «What does that mean?» is a sacred sentence. Friends do not grade your slang; they enjoy your company. The group chat keeps its door open for the person who is genuinely there, accent and all. Presence, once again, outperforms performance.", es: "Hay una espiritualidad silenciosa en presentarse como aprendiz: «¿Qué significa eso?» es una frase sagrada. Los amigos no califican tu jerga; disfrutan tu compañía. El chat del grupo mantiene la puerta abierta para quien está genuinamente ahí, acento incluido. La presencia, otra vez, supera a la actuación." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un diccionario de slang californiano", "Pertenecer por presencia y curiosidad, no por imitar la jerga", "Cómo cambiar de acento rápido"],
        answer: 1,
        why: "El título opone pertenencia y actuación: el tema es la autenticidad en el grupo.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Everyone at the barbecue speaks fluent casual.",
          "Belonging is not vocabulary.",
          "'What does that mean?' is a sacred sentence.",
          "The barbecue grill ran on propane, not charcoal.",
          "Presence outperforms performance.",
        ],
        intruder: 3,
        why: "El tipo de combustible de la parrilla es un detalle logístico ajeno a la lección de pertenencia: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Belonging comes from presence and curiosity, not from performing slang", "Slang should be memorized before every party", "Outsiders must stay silent until invited"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["The outsider's temptation is performance", "'What does that mean?' is a sacred sentence", "The group chat keeps its door open for the genuine"],
        distractors: ["The guest was graded on slang and failed", "The barbecue was canceled", "Everyone switched to formal English"],
      },
    },
    {
      id: "md-en-b2-10-3", theme: "relax mentale",
      title: "Not translating anymore", titleEs: "Ya no traducir",
      minutes: 3,
      paragraphs: [
        { it: "For years, every English sentence took the elevator down to Spanish, got translated, and rode back up. Mental fatigue lived in that commute. Then one afternoon at a barbecue, someone says «no big deal», and you just — understand. No elevator. The sentence arrives already yours.", es: "Durante años, cada frase en inglés tomaba el ascensor hasta el español, se traducía, y volvía a subir. La fatiga mental vivía en ese trayecto. Entonces, una tarde en una barbacoa, alguien dice «no big deal», y simplemente — lo entiendes. Sin ascensor. La frase llega ya tuya." },
        { it: "That moment is not a victory of grammar; it is a release. The mind stops double-booking every word and simply listens. Fluency, whatever the apps promise, is not speed — it is silence where the translation used to be. Enjoy the quiet. You built it one awkward conversation at a time.", es: "Ese momento no es una victoria de la gramática; es una liberación. La mente deja de agendar dos veces cada palabra y simplemente escucha. La fluidez, prometan lo que prometan las apps, no es velocidad — es silencio donde antes estaba la traducción. Disfruta la quietud. La construiste una conversación incómoda a la vez." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Trucos para traducir más rápido", "El momento en que la mente deja de traducir y solo entiende", "Cómo desactivar el traductor del teléfono"],
        answer: 1,
        why: "El título anuncia el fin del hábito de traducir: el tema es la comprensión directa.",
      },
      sequence: {
        instr: "Ordena la llegada de la fluidez:",
        events: ["Every English sentence used to ride the elevator to Spanish", "One afternoon someone says 'no big deal'", "You understand it with no translation", "The mind stops double-booking every word", "Fluency becomes the silence where translation used to be"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Notice something today. When a friend says 'no big deal' over the grill smoke, do not send the sentence downstairs for translation. Let it land as it is. If it lands, stay with the feeling for a second: that is the silence where the translation used to be. Nobody claps when fluency arrives; it just gets quieter in there. One phrase at a time, the elevator stops running. You built this. Now enjoy the quiet.",
        questions: [
          { q: "What should you NOT do with the sentence 'no big deal'?", kind: "literal", options: ["Send it downstairs for translation", "Repeat it loudly", "Write it down"], answer: 0, why: "«do not send the sentence downstairs for translation»." },
          { q: "What is fluency, according to the audio?", kind: "inferencial", options: ["The silence where translation used to be", "Speaking faster than natives", "Never making mistakes"], answer: 0, why: "Se infiere de la imagen del silencio que ocupa el lugar de la traducción." },
          { q: "What happens when fluency arrives?", kind: "literal", options: ["Nobody claps; it just gets quieter", "Everyone applauds", "The barbecue ends"], answer: 0, why: "«Nobody claps when fluency arrives; it just gets quieter in there»." },
          { q: "How was this quiet built?", kind: "inferencial", options: ["One phrase at a time", "In one weekend", "By moving to San Diego"], answer: 0, why: "«One phrase at a time, the elevator stops running»: se infiere la construcción gradual." },
        ],
      },
    },
  ],

  "en-cu-b2-11": [
    {
      id: "md-en-b2-11-1", theme: "meditazione",
      title: "Breath like a power grid", titleEs: "La respiración como red eléctrica",
      minutes: 3,
      paragraphs: [
        { it: "A power grid works best when nobody notices it: steady hum, invisible infrastructure, the lights simply on. The breath is the body's grid. When it runs smooth, attention flows everywhere; when it surges and dips, every room in you flickers. Meditation is not adding capacity — it is maintenance.", es: "Una red eléctrica funciona mejor cuando nadie la nota: zumbido estable, infraestructura invisible, las luces simplemente encendidas. La respiración es la red del cuerpo. Cuando corre suave, la atención fluye a todas partes; cuando sube y baja, cada habitación dentro de ti parpadea. La meditación no añade capacidad — es mantenimiento." },
        { it: "The maintenance is humble. Four counts in, six counts out, for three minutes; the exhale longer than the inhale, which is the body's version of load balancing. You would not wait for a blackout to fix a grid. You are the grid, and the exhale is the repair crew that works nights.", es: "El mantenimiento es humilde. Cuatro tiempos adentro, seis tiempos afuera, por tres minutos; la exhalación más larga que la inhalación, que es la versión corporal del balanceo de carga. No esperarías un apagón para arreglar una red. Tú eres la red, y la exhalación es el equipo de reparación que trabaja de noche." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo funciona una planta solar en Arizona", "La respiración como infraestructura del cuerpo", "Cómo ahorrar en la factura de luz"],
        answer: 1,
        why: "El título compara la respiración con la red eléctrica: el tema es el mantenimiento del propio cuerpo.",
      },
      quiz: [
        { q: "When does a power grid work best, according to the text?", kind: "literal", options: ["When nobody notices it", "When it makes loud noises", "When it is brand new"], answer: 0, why: "«works best when nobody notices it»: literal." },
        { q: "Why is the exhale longer than the inhale?", kind: "inferencial", options: ["It is the body's version of load balancing", "It burns more calories", "It impresses the neighbors"], answer: 0, why: "Se infiere de la comparación: exhalación larga = balanceo de carga del cuerpo." },
        { q: "What is meditation compared to?", kind: "critica", options: ["Maintenance of a grid you already are", "Building a new power plant", "Paying an electric bill"], answer: 0, why: "La tesis: «Meditation is not adding capacity — it is maintenance»." },
      ],
      vf: [
        { text: "The breath is compared to the body's power grid.", value: true, why: "«The breath is the body's grid»: literal." },
        { text: "The text says you should wait for a blackout before maintaining yourself.", value: false, why: "Dice lo contrario: «You would not wait for a blackout to fix a grid»." },
        { text: "The exhale is described as the repair crew that works nights.", value: true, why: "«the exhale is the repair crew that works nights»." },
      ],
    },
    {
      id: "md-en-b2-11-2", theme: "qui e ora",
      title: "Two minutes of sun", titleEs: "Dos minutos de sol",
      minutes: 2,
      paragraphs: [
        { it: "Phoenix teaches presence the honest way: step outside at noon and the sun edits every thought you were having. There is no mental argument that survives full contact with a June sky. For two minutes, you are just a creature standing in light, blinking and complete.", es: "Phoenix enseña presencia de la manera honesta: sal al mediodía y el sol edita cada pensamiento que tenías. No hay argumento mental que sobreviva al contacto pleno con un cielo de junio. Por dos minutos, eres solo una criatura de pie en la luz, parpadeando y completa." },
        { it: "The practice is exactly that brief. Stand in the sun until the mind quiets — not until you bake. Feel the heat press evenly on your skin like a hand that means no harm. The desert has no small talk; it just makes you feel exactly where you are, which is the whole assignment.", es: "La práctica es exactamente así de breve. Párate al sol hasta que la mente se aquiete — no hasta que te hornees. Siente el calor presionar parejo sobre tu piel como una mano sin mala intención. El desierto no tiene small talk; solo te hace sentir exactamente dónde estás, que es toda la tarea." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Riesgos de la insolación en verano", "La presencia inmediata bajo el sol del desierto", "Cómo instalar paneles solares"],
        answer: 1,
        why: "«Two minutes of sun» delimita una práctica breve de presencia, no una advertencia sanitaria.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Step outside at noon and the sun edits every thought.",
          "You are a creature standing in light, blinking and complete.",
          "The heat presses evenly like a hand that means no harm.",
          "Utility rates in the valley rose four percent this summer.",
          "The desert makes you feel exactly where you are.",
        ],
        intruder: 3,
        why: "El aumento de la tarifa es un dato de la audiencia pública, ajeno a la práctica de presencia: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["The desert sun cuts through thought and returns you to where you are", "Sunbathing is dangerous and must be avoided", "Phoenix is too hot for any practice"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["No mental argument survives a June sky", "The heat presses evenly like a harmless hand", "The desert makes you feel exactly where you are"],
        distractors: ["The narrator installed solar panels that week", "June skies are cloudy in Phoenix", "The practice lasts two hours"],
      },
    },
    {
      id: "md-en-b2-11-3", theme: "relax fisico",
      title: "Heat, slowly released", titleEs: "El calor, soltándose despacio",
      minutes: 3,
      paragraphs: [
        { it: "Desert heat gets stored: in the shoulders, behind the eyes, in the fists you didn't notice making. Coming into an air-conditioned house is not yet relief — the body holds the outside temperature like a grudge. Physical relaxation in Phoenix is the art of letting the heat go.", es: "El calor del desierto se almacena: en los hombros, detrás de los ojos, en los puños que no notaste estar haciendo. Entrar a una casa con aire acondicionado todavía no es alivio — el cuerpo sostiene la temperatura exterior como un rencor. La relajación física en Phoenix es el arte de dejar ir el calor." },
        { it: "Lie flat for five minutes, fan or no fan. Let the skin do its work; it has been doing it all day. Unclench the fists, soften the jaw, and imagine the heat leaving through the fingertips like a guest who stayed for the pool. Drink water slowly, not in a panic. The desert is not your enemy; it is just very sincere.", es: "Acuéstate plano cinco minutos, con ventilador o sin él. Deja que la piel haga su trabajo; lo ha estado haciendo todo el día. Suelta los puños, ablanda la mandíbula, e imagina el calor saliendo por las puntas de los dedos como un invitado que se quedó por la piscina. Bebe agua despacio, sin pánico. El desierto no es tu enemigo; es solo muy sincero." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo instalar aire acondicionado", "Soltar físicamente el calor acumulado del desierto", "Los mejores ventiladores de torre"],
        answer: 1,
        why: "El título anuncia la liberación gradual del calor corporal, no el equipamiento.",
      },
      sequence: {
        instr: "Ordena la liberación del calor:",
        events: ["You come inside carrying heat in the shoulders and fists", "You lie flat for five minutes", "You unclench the fists and soften the jaw", "The heat leaves through the fingertips like a guest", "You drink water slowly, not in a panic"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "You are inside now, and the body still holds the outside. Lie flat. Let the skin finish its work — it has been cooling you all day, and it knows how. Unclench your fists. Soften the jaw. Imagine the heat leaving through your fingertips, like a guest who only stayed for the pool. Now water, slowly, glass by glass. The desert is not your enemy. It is just very sincere. Breathe, and let it go.",
        questions: [
          { q: "What does the body hold after coming inside?", kind: "literal", options: ["The outside temperature, like a grudge", "A glass of water", "The mail"], answer: 0, why: "«the body holds the outside temperature like a grudge»." },
          { q: "How does the heat leave, in the image?", kind: "inferencial", options: ["Through the fingertips, like a guest who stayed for the pool", "Through the door, slamming it", "Through the air conditioner"], answer: 0, why: "«Imagine the heat leaving through your fingertips, like a guest who only stayed for the pool»." },
          { q: "How should you drink the water?", kind: "literal", options: ["Slowly, glass by glass", "All at once", "Only with ice"], answer: 0, why: "«Now water, slowly, glass by glass»." },
          { q: "What is the desert, in the last line?", kind: "inferencial", options: ["Not an enemy, just very sincere", "An enemy to escape", "A place with no water"], answer: 0, why: "«The desert is not your enemy. It is just very sincere»: el cierre del audio." },
        ],
      },
    },
  ],

  "en-cu-b2-12": [
    {
      id: "md-en-b2-12-1", theme: "spiritualità",
      title: "The seed and the pitch", titleEs: "La semilla y el pitch",
      minutes: 3,
      paragraphs: [
        { it: "Every startup pitch begins as a seed: small, unspectacular, requiring faith from exactly one person first — you. The spiritual work of a founder is not hype; it is tending. Water the idea daily with attention, pull the weeds of comparison, and remember that seeds grow in the dark before anyone sees anything.", es: "Cada pitch de startup empieza como una semilla: pequeña, nada espectacular, que exige fe de exactamente una persona primero — tú. El trabajo espiritual de un fundador no es el hype; es el cultivo. Riega la idea a diario con atención, arranca las malas hierbas de la comparación, y recuerda que las semillas crecen en la oscuridad antes de que nadie vea nada." },
        { it: "The demo day is a harvest festival, not the whole farm. Whether the panel says yes or no, the seed keeps its own schedule. Founders who respect the slowness of growth make fewer desperate deals. The best pitches, like the best gardens, are simply evidence of patient seasons.", es: "El demo day es una fiesta de cosecha, no toda la finca. Diga sí o no el panel, la semilla conserva su propio calendario. Los fundadores que respetan la lentitud del crecimiento hacen menos tratos desesperados. Los mejores pitch, como los mejores jardines, son simplemente evidencia de estaciones pacientes." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo levantar capital en 30 días", "El pitch como semilla y el fundador como jardinero", "Manual de agricultura urbana"],
        answer: 1,
        why: "El título empareja la semilla con el pitch: la metáfora agrícola ordena el texto.",
      },
      quiz: [
        { q: "What does a startup pitch begin as?", kind: "literal", options: ["A seed requiring faith from one person first", "A finished product", "A bank loan"], answer: 0, why: "«begins as a seed… requiring faith from exactly one person first»: literal." },
        { q: "What does 'seeds grow in the dark before anyone sees anything' suggest?", kind: "inferencial", options: ["Early progress is invisible and needs patience", "Founders should hide their work", "Investors avoid early ideas"], answer: 0, why: "Se infiere que el crecimiento temprano es invisible: la fe del fundador lo sostiene." },
        { q: "What are the best pitches compared to?", kind: "critica", options: ["Evidence of patient seasons, like gardens", "Fireworks at night", "Lottery tickets"], answer: 0, why: "«The best pitches, like the best gardens, are simply evidence of patient seasons»." },
      ],
      vf: [
        { text: "The spiritual work of a founder is described as tending, not hype.", value: true, why: "«is not hype; it is tending»: literal." },
        { text: "The text says demo day is the whole farm.", value: false, why: "Dice lo contrario: «a harvest festival, not the whole farm»." },
        { text: "Founders who respect slowness make fewer desperate deals.", value: true, why: "«make fewer desperate deals»: literal." },
      ],
    },
    {
      id: "md-en-b2-12-2", theme: "relax mentale",
      title: "Three minutes, one breath", titleEs: "Tres minutos, una respiración",
      minutes: 2,
      paragraphs: [
        { it: "Backstage at demo day, the mind runs the pitch at double speed and the body at none. Three minutes on the clock feel like three minutes of held breath. Mental relaxation is learning to breathe inside the countdown: one breath before the first slide, one before the numbers, one before the ask.", es: "Entre bambalinas en el demo day, la mente corre el pitch a doble velocidad y el cuerpo a ninguna. Tres minutos en el reloj se sienten como tres minutos de respiración contenida. La relajación mental es aprender a respirar dentro de la cuenta regresiva: una respiración antes de la primera diapositiva, una antes de los números, una antes del ask." },
        { it: "The breath is a metronome the nervous system already trusts. Slide one, inhale. Traction, exhale. The ask, one clean breath, and let the silence after it work for you. Investors rarely remember the fastest pitch in the room; they remember the steadiest. Steady is just breath, distributed.", es: "La respiración es un metrónomo en el que el sistema nervioso ya confía. Diapositiva uno, inhalación. Tracción, exhalación. El ask, una respiración limpia, y deja que el silencio posterior trabaje por ti. Los inversionistas rara vez recuerdan el pitch más rápido de la sala; recuerdan el más firme. Firme es solo respiración, distribuida." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo diseñar diapositivas", "Respirar dentro de la cuenta regresiva del pitch", "Cómo hablar más rápido sin equivocarse"],
        answer: 1,
        why: "El título condensa la fórmula: tres minutos de reloj gestionados con una respiración.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "One breath before the first slide.",
          "The breath is a metronome the nervous system trusts.",
          "Let the silence after the ask work for you.",
          "The demo day stage was equipped with two teleprompters.",
          "Steady is just breath, distributed.",
        ],
        intruder: 3,
        why: "El equipamiento del escenario es trivia de producción ajena al ritmo mental del pitch: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Breathing inside the three minutes turns a sprint into a steady pitch investors remember", "Speaking as fast as possible wins funding", "Slides should be read aloud word for word"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["One breath before the first slide, the numbers, and the ask", "The breath is a metronome the nervous system trusts", "They remember the steadiest, not the fastest"],
        distractors: ["The timer was broken that day", "The panel asked for a fourth minute", "The narrator forgot the slides entirely"],
      },
    },
    {
      id: "md-en-b2-12-3", theme: "meditazione",
      title: "After the room goes quiet", titleEs: "Cuando la sala queda en silencio",
      minutes: 3,
      paragraphs: [
        { it: "The pitch ends, the panel nods, and the room empties — and there you are, alone with a heartbeat that still thinks the meeting is happening. This is the moment nobody trains for. Meditation after a big moment is the art of closing the door gently instead of slamming it on repeat.", es: "El pitch termina, el panel asiente, y la sala se vacía — y ahí estás, solo con un latido que todavía cree que la reunión está sucediendo. Este es el momento para el que nadie entrena. La meditación después de un gran momento es el arte de cerrar la puerta con suavidad en vez de azotarla en bucle." },
        { it: "Sit for two minutes in the emptying room. Let the adrenaline drain without a story attached: it was fuel, it was spent, it can go now. Review nothing. The pitch already happened; it no longer needs your supervision. What remains, when the noise leaves, is the quiet fact that you stood up and spoke. That fact does not need a verdict.", es: "Siéntate dos minutos en la sala que se vacía. Deja que la adrenalina se drene sin historia pegada: era combustible, se gastó, ya puede irse. No repases nada. El pitch ya sucedió; ya no necesita tu supervisión. Lo que queda, cuando el ruido se va, es el hecho callado de que te paraste y hablaste. Ese hecho no necesita veredicto." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo responder las preguntas del panel", "Meditar después del gran momento, cuando la sala se vacía", "Cómo celebrar una inversión cerrada"],
        answer: 1,
        why: "El título marca el «después»: el silencio posterior al pitch, no el pitch mismo.",
      },
      sequence: {
        instr: "Ordena el cierre del gran momento:",
        events: ["The pitch ends and the room empties", "You sit for two minutes in the emptying room", "The adrenaline drains without a story attached", "You review nothing, the pitch no longer needs supervision", "What remains is the quiet fact that you stood up and spoke"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "The room is empty now. Stay seated for two more minutes. Feel the adrenaline draining through you — it was fuel, it was spent, and it can leave now. Do not review the pitch; it already happened, and it does not need your supervision. Stay with the quiet fact underneath: you stood up, and you spoke. No verdict required. When you are ready, stand slowly, and take the quiet with you.",
        questions: [
          { q: "How long do you stay seated?", kind: "literal", options: ["Two more minutes", "The rest of the day", "Ten seconds"], answer: 0, why: "«Stay seated for two more minutes»." },
          { q: "What was the adrenaline, according to the audio?", kind: "inferencial", options: ["Fuel that was spent and can leave now", "A poison to ignore", "A sign of failure"], answer: 0, why: "«it was fuel, it was spent, and it can leave now»: se infiere la relectura de la adrenalina." },
          { q: "What does the pitch no longer need?", kind: "literal", options: ["Your supervision", "A new venue", "Better slides"], answer: 0, why: "«it does not need your supervision»." },
          { q: "What do you take with you when you stand?", kind: "inferencial", options: ["The quiet", "The panel's notes", "A new pitch"], answer: 0, why: "«stand slowly, and take the quiet with you»: el cierre del audio." },
        ],
      },
    },
  ],
};
