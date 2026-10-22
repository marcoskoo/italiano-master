import type { MindReading } from "../../cambridge-mind";

/* ═══ EN C1 · Mind readings (temáticas de conciencia) — 3 por unidad ══
   Ensayos reflexivos de conciencia/mindfulness en inglés americano C1,
   anclados suavemente a los escenarios del curso (el seminario, el
   paper, la negociación, el keynote, los datos, la case interview, el
   contrato, el longform, la pragmática, los acentos, el op-ed y la
   TEDx), con traducción española a la vista. Campos `.it` = inglés,
   `.es` = español. Rotación: L1 = predict + quiz (lit/inf/crít) + V/F;
   L2 = predict + ideas + intruso; L3 = predict + secuencia + escucha.
   Temas rotados (claves italianas fijas): meditazione 8 ·
   spiritualità 7 · qui e ora 7 · relax fisico 7 · relax mentale 7. */

export const EN_MIND_C1: Record<string, MindReading[]> = {
  "en-cu-c1-01": [
    {
      id: "md-en-c1-01-1", theme: "meditazione",
      title: "Three breaths before the lecture", titleEs: "Tres respiraciones antes de la clase",
      minutes: 2,
      paragraphs: [
        { it: "The seminar room empties and fills like a tide. Before the professor's first slide, there is a small window — the length of three breaths — in which nothing is being asked of you. Meditation begins there: not on a cushion, but in the pause before the room turns serious. Notice the breath entering, notice it leaving, and let the shoulders drop an inch.", es: "La sala del seminario se vacía y se llena como una marea. Antes de la primera diapositiva del profesor existe una pequeña ventana — la duración de tres respiraciones — en la que no se te pide nada. La meditación comienza ahí: no en un cojín, sino en la pausa previa a que la sala se ponga seria. Observa el aire entrar, obsérvalo salir, y deja que los hombros caigan un centímetro." },
        { it: "When the lecture accelerates, the practice does not change; it shrinks. One conscious breath while the slide changes. Another while a hand rises across the room. Attention, trained this way, becomes a muscle that returns to the bell of the breath instead of chasing every sentence. What we are really practicing, in that crowded hall, is staying home while the mind travels.", es: "Cuando la clase acelera, la práctica no cambia: se encoge. Una respiración consciente mientras cambia la diapositiva. Otra mientras una mano se alza al otro lado de la sala. La atención, entrenada así, se vuelve un músculo que regresa a la campana del aliento en lugar de perseguir cada frase. Lo que de verdad practicamos, en esa sala llena, es quedarnos en casa mientras la mente viaja." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía para hablar en público con diapositivas", "Una meditación breve aplicada a la sala de clase", "Un ensayo sobre la historia de las universidades americanas"],
        answer: 1,
        why: "El título ancla la práctica meditativa (tres respiraciones) al momento previo a la clase magistral.",
      },
      quiz: [
        { q: "Where does the practice described in the first paragraph begin?", kind: "literal", options: ["On a cushion at home", "In the pause before the room turns serious", "After the lecture ends"], answer: 1, why: "«Not on a cushion, but in the pause before the room turns serious»: la práctica empieza en esa pausa." },
        { q: "What happens to the practice when the lecture speeds up?", kind: "inferencial", options: ["It is abandoned until the class ends", "It shrinks to single conscious breaths", "It becomes a debate with other students"], answer: 1, why: "«The practice does not change; it shrinks»: se reduce a respiraciones conscientes puntuales." },
        { q: "Which title best captures the essay's central claim?", kind: "critica", options: ["Meditation requires silence and empty rooms", "Attention is a muscle that can be trained anywhere", "Lectures are hostile environments for concentration"], answer: 1, why: "La tesis del texto: la atención se entrena como un músculo y la pausa cotidiana basta." },
      ],
      vf: [
        { text: "The text recommends chasing every sentence of the lecture.", value: false, why: "«Instead of chasing every sentence»: recomienda lo contrario, volver a la campana del aliento." },
        { text: "One conscious breath while the slide changes is presented as enough.", value: true, why: "«One conscious breath while the slide changes» aparece como forma reducida de la práctica." },
        { text: "The writer compares attention to a muscle.", value: true, why: "«Attention, trained this way, becomes a muscle»: la comparación es literal en el texto." },
      ],
    },
    {
      id: "md-en-c1-01-2", theme: "spiritualità",
      title: "Learning as reverence", titleEs: "Aprender como reverencia",
      minutes: 2,
      paragraphs: [
        { it: "There is a quiet reverence in preparing to learn. The older tradition called it the posture of the student: arriving with questions rather than verdicts, letting another mind lead yours through unfamiliar country. Reverence, here, is not ceremony; it is the honesty to admit that the syllabus of the day might rearrange you.", es: "Hay una reverencia callada en prepararse para aprender. La tradición más antigua la llamaba la postura del estudiante: llegar con preguntas en lugar de veredictos, dejar que otra mente guíe la tuya por territorio desconocido. La reverencia, aquí, no es ceremonia; es la honestidad de admitir que el programa del día podría reordenarte." },
        { it: "Gratitude completes the posture. Someone wrote the book you are holding; someone scheduled the office hours; a whole institution agreed that ideas were worth a building. To study with attention is to thank them all without saying a word. The sacred, in this reading, is simply what deserves your full presence — and a page can qualify.", es: "La gratitud completa la postura. Alguien escribió el libro que sostienes; alguien agendó el horario de atención; una institución entera acordó que las ideas merecían un edificio. Estudiar con atención es agradecérselo a todos sin decir palabra. Lo sagrado, en esta lectura, es simplemente aquello que merece tu presencia plena — y una página puede calificar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de protocolo universitario", "La dimensión espiritual del acto de aprender: reverencia y gratitud", "Una crítica a las universidades americanas"],
        answer: 1,
        why: "El título («aprender como reverencia») apunta a la dimensión espiritual del estudio, no al protocolo ni a la crítica.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Learning well is a spiritual posture of reverence and gratitude", "American universities are too expensive for most students", "Office hours are the most important part of graduate school"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["The student arrives with questions rather than verdicts", "Studying with attention thanks many people silently", "The sacred is what deserves your full presence"],
        distractors: ["The final exam decides the whole grade", "Professors refuse to answer emails", "Reading speed matters more than comprehension"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The older tradition called it the posture of the student.",
          "You arrive with questions rather than verdicts.",
          "Someone wrote the book you are holding.",
          "The tuition invoice arrives every semester without fail.",
          "A page can qualify as something sacred.",
        ],
        intruder: 3,
        why: "La factura de la matrícula es un dato administrativo ajeno a la reverencia y la gratitud que describe el texto.",
      },
    },
    {
      id: "md-en-c1-01-3", theme: "qui e ora",
      title: "The pause before the slide", titleEs: "La pausa antes de la diapositiva",
      minutes: 2,
      paragraphs: [
        { it: "Now — the professor's favorite word — is also a meditation bell. When you hear 'Now, I'd like to turn to the evidence,' the mind usually races ahead to conclusions. The alternative is to land exactly where the voice is: the blue line, the vertical axis, the present slide. Presence in a lecture is the same skill as presence anywhere: one object, fully met, before the next one arrives.", es: "Now — la palabra favorita del profesor — es también una campana de meditación. Cuando oyes «Ahora, me gustaría pasar a la evidencia», la mente suele adelantarse a las conclusiones. La alternativa es aterrizar exactamente donde está la voz: la línea azul, el eje vertical, la diapositiva presente. La presencia en una clase es la misma destreza que la presencia en cualquier parte: un objeto, plenamente atendido, antes de que llegue el siguiente." },
        { it: "The body helps more than the will. Feet flat on the floor of the hall, the pen resting between notes, the exhale a half-second longer than the inhale. Nothing mystical; just engineering. A mind anchored in the body finds the current slide more interesting than the imagined exam, and the current slide, met fully, is usually the one that teaches.", es: "El cuerpo ayuda más que la voluntad. Pies planos en el suelo de la sala, el bolígrafo descansando entre notas, la exhalación medio segundo más larga que la inhalación. Nada místico; pura ingeniería. Una mente anclada en el cuerpo encuentra la diapositiva actual más interesante que el examen imaginado, y la diapositiva actual, plenamente atendida, suele ser la que enseña." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un método de estudio para exámenes finales", "Estar presente en la diapositiva actual durante una clase", "Una historia del diseño de diapositivas"],
        answer: 1,
        why: "El título apunta a la pausa y a la diapositiva presente: presencia en el aquí y ahora de la clase.",
      },
      sequence: {
        instr: "Ordena los pasos de la práctica de presencia en clase:",
        events: [
          "Hear the professor say 'Now, I'd like to turn to'",
          "Notice the mind racing ahead to conclusions",
          "Land your attention on the current slide",
          "Set your feet flat and rest the pen between notes",
          "Lengthen the exhale slightly and meet the slide fully",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Before the next slide appears, take one deliberate breath. Let the previous argument settle like dust in water. When the new image arrives, name one detail on it — a line, a color, a number — and stay with that detail until the speaker moves. This is the whole practice: one object, fully met, before the next one comes.",
        questions: [
          { q: "What are you asked to do before the next slide appears?", kind: "literal", options: ["Take one deliberate breath", "Raise your hand", "Close the laptop"], answer: 0, why: "«Take one deliberate breath»: está literal al inicio del audio." },
          { q: "How is the previous argument described?", kind: "literal", options: ["Burning like paper", "Settling like dust in water", "Freezing like ice"], answer: 1, why: "«Settle like dust in water»: asentarse como polvo en el agua." },
          { q: "What are you asked to do when the new image arrives?", kind: "inferencial", options: ["Memorize every number on it", "Name one detail and stay with it", "Compare it with the exam syllabus"], answer: 1, why: "Se infiere de «name one detail and stay with that detail until the speaker moves»." },
          { q: "What is called 'the whole practice'?", kind: "inferencial", options: ["One object, fully met, before the next one comes", "Breathing as fast as possible between slides", "Taking notes without looking at the screen"], answer: 0, why: "El audio cierra definiendo la práctica completa: un objeto, plenamente atendido." },
        ],
      },
    },
  ],

  "en-cu-c1-02": [
    {
      id: "md-en-c1-02-1", theme: "relax fisico",
      title: "The body at the desk", titleEs: "El cuerpo en el escritorio",
      minutes: 2,
      paragraphs: [
        { it: "Academic writing is a full-body event disguised as a seated one. After the third hour at the desk, the jaw has tightened around unwritten sentences, the shoulders have crept toward the ears, and the breath has gone shallow, high in the chest, as if the body itself were being peer-reviewed. None of this helps the paragraph.", es: "La escritura académica es un evento de cuerpo completo disfrazado de actividad sentada. Después de la tercera hora en el escritorio, la mandíbula se ha apretado alrededor de frases no escritas, los hombros se han acercado a las orejas y la respiración se ha vuelto superficial, alta en el pecho, como si el propio cuerpo estuviera en revisión por pares. Nada de esto ayuda al párrafo." },
        { it: "The reset takes ninety seconds and no equipment. Drop the shoulders and let the jaw hang so the teeth part. Roll the wrists; uncurl the toes inside the shoes. Then one slow exhale, longer than the inhale, as if the draft could be revised with the lungs. The body relaxes first; the sentence, strangely, follows.", es: "El reinicio toma noventa segundos y ningún aparato. Suelta los hombros y deja colgar la mandíbula hasta que los dientes se separen. Gira las muñecas; destensa los dedos de los pies dentro de los zapatos. Luego una exhalación lenta, más larga que la inhalación, como si el borrador pudiera revisarse con los pulmones. El cuerpo se relaja primero; la frase, extrañamente, lo sigue." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una rutina de gimnasio para oficinas", "Relajar el cuerpo que escribe tras horas en el escritorio", "Una dieta para estudiantes de posgrado"],
        answer: 1,
        why: "El título («el cuerpo en el escritorio») y el campo semántico del escritorio apuntan a la relajación física de quien escribe.",
      },
      quiz: [
        { q: "What happens to the jaw after three hours at the desk?", kind: "literal", options: ["It tightens around unwritten sentences", "It relaxes completely", "It stops moving at all"], answer: 0, why: "«The jaw has tightened around unwritten sentences»: mandíbula apretada." },
        { q: "Why does the writer describe the body as 'being peer-reviewed'?", kind: "inferencial", options: ["Because the breath becomes as tense as a manuscript under judgment", "Because colleagues watch each other write", "Because gyms require academic credentials"], answer: 0, why: "La metáfora del peer review transmite la tensión del cuerpo examinado: respiración superficial como manuscrito bajo juicio." },
        { q: "Which claim best reflects the essay's conclusion?", kind: "critica", options: ["Physical relaxation clears the way for better writing", "Longer sessions always produce better drafts", "Writing is purely a mental activity"], answer: 0, why: "El cierre del texto: «The body relaxes first; the sentence follows» — relajarse primero mejora la escritura." },
      ],
      vf: [
        { text: "The reset described in the text takes fifteen minutes.", value: false, why: "«The reset takes ninety seconds», no quince minutos." },
        { text: "The exhale should be longer than the inhale.", value: true, why: "«One slow exhale, longer than the inhale»." },
        { text: "The writer claims the body relaxes before the sentence improves.", value: true, why: "«The body relaxes first; the sentence, strangely, follows»." },
      ],
    },
    {
      id: "md-en-c1-02-2", theme: "relax mentale",
      title: "The sky above the literature review", titleEs: "El cielo sobre la revisión de literatura",
      minutes: 3,
      paragraphs: [
        { it: "A literature review at midnight can feel like weather: forty papers blowing through the mind at once, each one a cloud demanding to be the sky. The old image corrects the panic. Thoughts are clouds; the mind is the sky. No cloud needs to be chased, and none needs to be feared — they pass, because passing is what clouds do.", es: "Una revisión de literatura a medianoche puede sentirse como el clima: cuarenta artículos atravesando la mente a la vez, cada uno una nube exigiendo ser el cielo. La vieja imagen corrige el pánico. Los pensamientos son nubes; la mente es el cielo. Ninguna nube necesita ser perseguida, y ninguna necesita ser temida — pasan, porque pasar es lo que hacen las nubes." },
        { it: "The practical consequence is gentle. When the reading produces fog instead of clarity, stop summarizing and simply watch the fog. Which paper is actually agitating you? Name it, let it drift. The sky does not argue with weather, and a researcher does not have to argue with every anxious thought about relevance, novelty, or the deadline. The review gets written under the sky, not inside the storm.", es: "La consecuencia práctica es amable. Cuando la lectura produce niebla en vez de claridad, deja de resumir y simplemente observa la niebla. ¿Qué artículo es el que de verdad te agita? Nómbralo, deja que se deslice. El cielo no discute con el clima, y un investigador no tiene que discutir con cada pensamiento ansioso sobre relevancia, novedad o la fecha límite. La revisión se escribe bajo el cielo, no dentro de la tormenta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un artículo sobre meteorología aplicada", "Usar la metáfora cielo-nubes para soltar la ansiedad mientras se investiga", "Una guía para resumir cuarenta papers en una noche"],
        answer: 1,
        why: "La metáfora cielo-nubes sobre la revisión de literatura apunta al relax mental del investigador.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["The mind, like the sky, can hold passing thoughts without fighting them", "Literature reviews should be written as fast as possible", "Weather metaphors are unscientific and should be avoided"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Thoughts are compared to clouds that pass", "You can name the paper that is agitating you and let it drift", "The review gets written under the sky, not inside the storm"],
        distractors: ["Forty papers must all be quoted in the introduction", "Anxious thoughts about relevance must be resolved before writing", "Researchers should wait for perfect weather to work"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Thoughts are clouds; the mind is the sky.",
          "No cloud needs to be chased, and none needs to be feared.",
          "When the reading produces fog, you can simply watch the fog.",
          "The library closes at midnight during finals week.",
          "The sky does not argue with weather.",
        ],
        intruder: 3,
        why: "El horario de la biblioteca es un dato logístico ajeno a la metáfora de conciencia que construye el texto.",
      },
    },
    {
      id: "md-en-c1-02-3", theme: "meditazione",
      title: "One breath per footnote", titleEs: "Una respiración por nota al pie",
      minutes: 2,
      paragraphs: [
        { it: "Revision, like meditation, is the art of returning. You fix a citation, drift into doubt about the whole thesis, and come back to the next footnote. Each return is a repetition of the practice: one breath at the top of the page, one edit made with full attention, no verdict on the self who drifted. Drifting is not failure; it is the raw material of the training.", es: "La revisión, como la meditación, es el arte de volver. Corriges una cita, te deslizas hacia la duda sobre toda la tesis, y regresas a la siguiente nota al pie. Cada retorno es una repetición de la práctica: una respiración al comienzo de la página, una corrección hecha con atención plena, ningún veredicto sobre el yo que se distrajo. Distraerse no es fracaso; es la materia prima del entrenamiento." },
        { it: "Older monks described meditation as boiling water: the mind leaves the flame a hundred times, and each return puts the pot back on. The doctoral version is the same craft with drier tools. By the tenth footnote, something in the nervous system learns that returning is safe. The dissertation, in this light, is simply ten thousand returns wearing academic clothes.", es: "Los monjes de antes describían la meditación como hervir agua: la mente abandona el fuego cien veces, y cada retorno devuelve la olla a la hornilla. La versión doctoral es el mismo oficio con herramientas más secas. Para la décima nota al pie, algo en el sistema nervioso aprende que volver es seguro. La tesis, vista así, es simplemente diez mil retornos vestidos de ropa académica." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de estilo de citas APA", "La revisión de un texto como práctica de retorno meditativo", "Una historia del monacato medieval"],
        answer: 1,
        why: "El título («una respiración por nota al pie») une la revisión académica con la práctica meditativa del retorno.",
      },
      sequence: {
        instr: "Ordena el ciclo del retorno durante la revisión:",
        events: [
          "Fix one citation with full attention",
          "Notice the mind drifting into doubt about the thesis",
          "Take one breath at the top of the page",
          "Return to the next footnote without self-judgment",
          "Repeat until returning feels safe",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Welcome back to the page. Set the pen down for a moment and take one breath. Now look at the next footnote as if it were the only one in the world. Make the small fix. When the mind wanders to the whole dissertation — and it will — notice it kindly and come back to this line, this comma, this single edit. The work gets done one return at a time.",
        questions: [
          { q: "What do you do first after setting the pen down?", kind: "literal", options: ["Take one breath", "Read the whole chapter", "Email your advisor"], answer: 0, why: "«Set the pen down for a moment and take one breath»." },
          { q: "How are you told to look at the next footnote?", kind: "literal", options: ["As a possible exam question", "As if it were the only one in the world", "As a boring formality"], answer: 1, why: "«As if it were the only one in the world»." },
          { q: "What attitude is recommended when the mind wanders?", kind: "inferencial", options: ["Notice it kindly and come back", "Punish yourself for losing focus", "Stop revising for the day"], answer: 0, why: "«Notice it kindly and come back»: el audio pide amabilidad ante la distracción." },
          { q: "What does 'the work gets done one return at a time' suggest?", kind: "inferencial", options: ["Progress comes from repeated gentle returns, not from perfect focus", "Footnotes should be deleted", "Only speed matters in revision"], answer: 0, why: "La frase final resume el método: el trabajo avanza retorno a retorno." },
        ],
      },
    },
  ],

  "en-cu-c1-03": [
    {
      id: "md-en-c1-03-1", theme: "spiritualità",
      title: "The space between positions", titleEs: "El espacio entre las posiciones",
      minutes: 2,
      paragraphs: [
        { it: "Every negotiation is a meeting of two hungers, and underneath the spreadsheet lives a quieter question: what does this person actually need? To ask it sincerely — to care about the answer before calculating its price — is a spiritual act in work clothes. Respect, the veteran negotiators say, is not a tactic; it is the table itself.", es: "Toda negociación es el encuentro de dos hambres, y debajo de la hoja de cálculo vive una pregunta más callada: ¿qué necesita de verdad esta persona? Hacerla con sinceridad — preocuparse por la respuesta antes de calcular su precio — es un acto espiritual con ropa de trabajo. El respeto, dicen los negociadores veteranos, no es una táctica: es la mesa misma." },
        { it: "The practice shows up in small gestures. You let the other side finish its sentence. You repeat their position until they nod at your version of it. You refuse to celebrate a term that quietly harms them. None of this is weakness. The deal that survives the lawyers is usually the one where both parties leave with their dignity — and something of their trust — intact.", es: "La práctica se muestra en gestos pequeños. Dejas que la otra parte termine su frase. Repites su posición hasta que asientan ante tu versión de ella. Te niegas a celebrar un término que en silencio los daña. Nada de esto es debilidad. El acuerdo que sobrevive a los abogados suele ser aquel en el que ambas partes se van con su dignidad — y algo de su confianza — intactas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un contrato de distribución palabra por palabra", "El respeto por las necesidades del otro como fondo espiritual de una negociación", "Un curso de finanzas corporativas"],
        answer: 1,
        why: "El título apunta al espacio humano entre las posiciones de una negociación, no al contrato ni a las finanzas.",
      },
      quiz: [
        { q: "What question lives underneath the spreadsheet?", kind: "literal", options: ["What does this person actually need?", "Who drafted the first contract?", "When does the market open?"], answer: 0, why: "«Underneath the spreadsheet lives a quieter question: what does this person actually need?»." },
        { q: "Why does the writer call respect 'the table itself'?", kind: "inferencial", options: ["Because respect is the foundation that makes negotiation possible", "Because tables are expensive", "Because lawyers require furniture"], answer: 0, why: "La metáfora indica que el respeto es la base sobre la que la negociación se sostiene, no un truco." },
        { q: "Which statement best matches the essay's view of strong deals?", kind: "critica", options: ["Deals survive when both parties keep their dignity and some trust", "Deals survive when one side wins everything", "Deals are irrelevant to long-term relationships"], answer: 0, why: "«The deal that survives the lawyers is usually the one where both parties leave with their dignity intact»." },
      ],
      vf: [
        { text: "The text recommends interrupting the other side quickly to show confidence.", value: false, why: "El texto dice lo contrario: «You let the other side finish its sentence»." },
        { text: "Repeating the other side's position until they nod is presented as a gesture of respect.", value: true, why: "«You repeat their position until they nod at your version of it»." },
        { text: "The writer suggests celebrating terms that quietly harm the other party.", value: false, why: "«You refuse to celebrate a term that quietly harms them»." },
      ],
    },
    {
      id: "md-en-c1-03-2", theme: "qui e ora",
      title: "Listening past the bottom line", titleEs: "Escuchar más allá de la cifra final",
      minutes: 3,
      paragraphs: [
        { it: "In the middle of a tense call, presence is a strategic asset disguised as courtesy. The other voice speeds up; the numbers fly; the mind wants to leap to the counteroffer. Staying here — hearing the actual words, the hesitation before 'exclusive,' the small exhale after 'board sign-off' — is the quiet discipline of the present moment applied to commerce.", es: "En medio de una llamada tensa, la presencia es un activo estratégico disfrazado de cortesía. La otra voz acelera; los números vuelan; la mente quiere saltar a la contraoferta. Quedarse aquí — escuchar las palabras reales, la vacilación antes de «exclusiva», la pequeña exhalación después de «aprobación del consejo» — es la quieta disciplina del momento presente aplicada al comercio." },
        { it: "The here and now of negotiation is not decoration; it is information. The pause before a concession tells you what it costs them. The word chosen over another — 'partnership' instead of 'vendor' — sketches the relationship they hope for. A listener anchored in the present hears the deal being described before it is ever proposed.", es: "El aquí y ahora de la negociación no es decoración: es información. La pausa antes de una concesión te dice cuánto les cuesta. La palabra elegida sobre otra — «asociación» en vez de «proveedor» — dibuja la relación que esperan. Un oyente anclado en el presente escucha el acuerdo describirse antes de que alguien lo proponga." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de contabilidad creativa", "Escucha atenta en el presente como herramienta de negociación", "Cómo redactar un contrato de exclusividad"],
        answer: 1,
        why: "El título («escuchar más allá de la cifra final») apunta a la presencia y la escucha durante la llamada.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Being fully present while listening reveals information that haste hides", "Negotiation is purely a matter of numbers and spreadsheets", "Speaking faster than the other side guarantees victory"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["You can hear the hesitation before the word 'exclusive'", "The pause before a concession tells you what it costs", "A listener anchored in the present hears the deal being described"],
        distractors: ["The contract must always be signed the same day", "Silence is forbidden in American business calls", "Lawyers choose every word of the negotiation"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The other voice speeds up and the numbers fly.",
          "You stay with the actual words being said.",
          "The pause before a concession tells you what it costs them.",
          "The office printer jams whenever the interns are alone.",
          "A listener anchored in the present hears the deal early.",
        ],
        intruder: 3,
        why: "La impresora de la oficina es un detalle cotidiano sin relación con la escucha presente que describe el texto.",
      },
    },
    {
      id: "md-en-c1-03-3", theme: "relax fisico",
      title: "Unclenching the deal", titleEs: "Soltar el cuerpo del trato",
      minutes: 2,
      paragraphs: [
        { it: "Negotiation lives in the body before it reaches the voice. Under pressure, the hands close — around a pen, around an armrest, around a position. The jaw sets. The shoulders lock as if the terms could be defended physically. None of this aggression reaches the counterpart, but all of it reaches the mind, which tightens with the body that carries it.", es: "La negociación vive en el cuerpo antes de llegar a la voz. Bajo presión, las manos se cierran — sobre un bolígrafo, sobre el reposabrazos, sobre una posición. La mandíbula se traba. Los hombros se bloquean como si los términos pudieran defenderse físicamente. Nada de esa agresión llega a la otra parte, pero todo llega a la mente, que se tensa con el cuerpo que la carga." },
        { it: "The countermove is absurdly small. Open the hands, palm up, on the table. Unlock the jaw with a silent yawn. Let the exhale be one count longer, twice, three times. The position you are defending does not weaken when your fists do; often it clarifies, because a relaxed body has access to the whole mind, and a clenched one only to the bunker.", es: "La jugada contraria es absurdamente pequeña. Abre las manos, con la palma hacia arriba, sobre la mesa. Desbloquea la mandíbula con un bostezo silencioso. Deja que la exhalación dure un tiempo más, dos, tres. La posición que defiendes no se debilita cuando lo hacen tus puños; a menudo se aclara, porque un cuerpo relajado tiene acceso a la mente entera, y uno apretado solo al búnker." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de musculación para ejecutivos", "Soltar el cuerpo durante una negociación tensa", "Cómo gritar con eficacia en las reuniones"],
        answer: 1,
        why: "El título («soltar el cuerpo del trato») anuncia la relajación física aplicada a la negociación.",
      },
      sequence: {
        instr: "Ordena los pasos de la técnica:",
        events: [
          "Notice the hands closing around the pen",
          "Open the hands, palm up, on the table",
          "Unlock the jaw with a silent yawn",
          "Extend the exhale by one count, twice, three times",
          "Return to the negotiation with a clearer position",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Let's take thirty seconds before the next round. Sit back in the chair and let your hands rest open. Feel the pen or the mouse or the arm of the chair — whatever you have been gripping. Let it go. Now one long exhale, slower than the one before. As the body settles, ask yourself one honest question: what am I defending here, and what am I just clenching? Then, and only then, pick up the pen again.",
        questions: [
          { q: "How long is the pause before the next round?", kind: "literal", options: ["Three hours", "The rest of the day", "Thirty seconds"], answer: 2, why: "«Let's take thirty seconds before the next round»." },
          { q: "What are your hands told to do?", kind: "literal", options: ["Grip the pen tighter", "Rest open", "Count to a hundred"], answer: 1, why: "«Let your hands rest open»: descansar abiertas." },
          { q: "What honest question closes the exercise?", kind: "inferencial", options: ["What am I defending here, and what am I just clenching?", "Who will win the negotiation?", "When is lunch served?"], answer: 0, why: "La pregunta honesta del audio: ¿qué defiendo y qué estoy solo apretando?" },
          { q: "Why should the pen be picked up only at the end?", kind: "inferencial", options: ["Because clarity comes after the body settles", "Because lawyers forbid pens during pauses", "Because typing is faster than writing"], answer: 0, why: "«Then, and only then»: la claridad llega después de que el cuerpo se asiente." },
        ],
      },
    },
  ],

  "en-cu-c1-04": [
    {
      id: "md-en-c1-04-1", theme: "relax mentale",
      title: "Stage fright as weather", titleEs: "El miedo escénico como clima",
      minutes: 2,
      paragraphs: [
        { it: "Stage fright is weather, not identity. It arrives on its own schedule, fills the chest with pressure, rattles the hands, and — this is the part nobody believes until it happens — passes. The speaker who fights the storm becomes the storm. The speaker who names it, 'nervous, how interesting,' watches it move through like a front across the plains.", es: "El miedo escénico es clima, no identidad. Llega con su propio horario, llena el pecho de presión, sacude las manos y — esta es la parte que nadie cree hasta que sucede — pasa. El orador que pelea con la tormenta se convierte en la tormenta. El orador que la nombra, «nervioso, qué interesante», la ve atravesarlo como un frente sobre las llanuras." },
        { it: "Mental relaxation, backstage, is not the absence of nerves; it is a wider container for them. You let the fear be loud without taking its instructions. You remember that the audience, statistically, wants you to succeed — nobody buys a ticket hoping for a car crash. And you hand the outcome to the room. The trembling may stay; the trembling, well-accompanied, no longer decides anything.", es: "El relax mental, tras el escenario, no es la ausencia de nervios: es un recipiente más ancho para ellos. Dejas que el miedo sea ruidoso sin aceptar sus instrucciones. Recuerdas que el público, estadísticamente, quiere que triunfes — nadie compra una entrada esperando un choque. Y le entregas el resultado a la sala. El temblor puede quedarse; el temblor, bien acompañado, ya no decide nada." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un parte meteorológico del Medio Oeste", "Tratar el miedo escénico como fenómeno pasajero, no como identidad", "Cómo cancelar una conferencia con elegancia"],
        answer: 1,
        why: "El título compara el miedo escénico con el clima: algo que llega y pasa, no lo que uno es.",
      },
      quiz: [
        { q: "What does stage fright do, according to the first paragraph?", kind: "literal", options: ["It arrives on its own schedule and passes", "It lasts forever once it appears", "It only affects beginners"], answer: 0, why: "«It arrives on its own schedule and passes»: llega por su cuenta y pasa." },
        { q: "What happens to the speaker who fights the storm?", kind: "inferencial", options: ["They become the storm", "They calm down instantly", "They are removed from the stage"], answer: 0, why: "«The speaker who fights the storm becomes the storm»: pelearlo lo convierte a uno en la tormenta." },
        { q: "Which idea captures the essay's advice?", kind: "critica", options: ["Relaxation means building a wider container for the nerves, not erasing them", "Professionals never feel stage fright", "The audience should be ignored completely"], answer: 0, why: "«Not the absence of nerves; a wider container for them»: la tesis del segundo párrafo." },
      ],
      vf: [
        { text: "The text says the audience statistically hopes the speaker fails.", value: false, why: "«The audience, statistically, wants you to succeed»." },
        { text: "Naming the fear is presented as a way to watch it move through.", value: true, why: "«The speaker who names it watches it move through like a front»." },
        { text: "The trembling may stay but no longer decides anything, according to the writer.", value: true, why: "«The trembling may stay; the trembling, well-accompanied, no longer decides anything»." },
      ],
    },
    {
      id: "md-en-c1-04-2", theme: "meditazione",
      title: "Three breaths before the red dot", titleEs: "Tres respiraciones antes del punto rojo",
      minutes: 2,
      paragraphs: [
        { it: "There is a moment in every conference greenroom when the countdown starts and the mind offers its worst drafts: the forgotten opening, the trembling hand, the silence that follows a failed joke. Meditation does not delete these drafts; it declines to read them. Three slow breaths at the edge of the stage, and the speaker remembers what is actually true: a story, a room, a through-line.", es: "Hay un momento en cada camerino de conferencia en que la cuenta regresiva empieza y la mente ofrece sus peores borradores: la apertura olvidada, la mano que tiembla, el silencio que sigue a un chiste fallido. La meditación no borra esos borradores: se niega a leerlos. Tres respiraciones lentas al borde del escenario, y el orador recuerda lo que de verdad es cierto: una historia, una sala, un hilo conductor." },
        { it: "The breaths have assignments. The first one lands the body — feet on the floor, weight even. The second one clears the desk of the mind: not now, not now, not now. The third one opens the door: someone in row twelve needs this talk, and the speaker's only job is to hand it over. Then the red dot lights, and the practice becomes the talk itself.", es: "Las respiraciones tienen asignaciones. La primera aterriza el cuerpo — pies en el suelo, peso parejo. La segunda limpia el escritorio de la mente: ahora no, ahora no, ahora no. La tercera abre la puerta: alguien en la fila doce necesita esta charla, y el único trabajo del orador es entregarla. Entonces el punto rojo se enciende, y la práctica se convierte en la propia charla." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ensayo sobre iluminación teatral", "Una meditación de tres respiraciones para el momento previo a salir al escenario", "Una crítica a las conferencias tecnológicas"],
        answer: 1,
        why: "El título ancla tres respiraciones al punto rojo de la cámara: la meditación previa a la charla.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Three assigned breaths turn pre-talk panic into a practice of presence", "Stage fright must be hidden from the audience at all costs", "Conference talks should never be rehearsed"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["The first breath lands the body with feet on the floor", "The second breath clears the mind's desk", "The third breath remembers someone in row twelve"],
        distractors: ["The red dot must be avoided while speaking", "Breathing exercises are banned in greenrooms", "The opening joke must be memorized in three languages"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The mind offers its worst drafts before the countdown ends.",
          "Meditation declines to read those drafts.",
          "The first breath lands the body, feet on the floor.",
          "The greenroom refrigerator hums at exactly forty degrees.",
          "The third breath opens the door to the audience.",
        ],
        intruder: 3,
        why: "La temperatura del refrigerador es un dato técnico ajeno a la práctica respiratoria que describe el texto.",
      },
    },
    {
      id: "md-en-c1-04-3", theme: "spiritualità",
      title: "Speaking as service", titleEs: "Hablar como servicio",
      minutes: 3,
      paragraphs: [
        { it: "The oldest cure for stage fright is not confidence; it is purpose redirected. Before the microphone, the frightened speaker asks 'how do I look?' — and the answer is never enough. The serving speaker asks a different question: 'what does this room need that I happen to carry?' The shift is small, almost grammatical, and it changes everything, because fear and care cannot occupy the same sentence.", es: "El remedio más antiguo contra el miedo escénico no es la confianza: es el propósito redirigido. Antes del micrófono, el orador asustado pregunta «¿cómo me veo?» — y la respuesta nunca alcanza. El orador que sirve hace otra pregunta: «¿qué necesita esta sala que yo llevo conmigo?». El cambio es pequeño, casi gramatical, y lo cambia todo, porque el miedo y el cuidado no pueden ocupar la misma frase." },
        { it: "Service does not mean performing martyrdom on stage. It means editing the talk until every minute gives something away — an insight, a story, a usable Monday morning. The speaker who arrives to give sleeps better than the one who arrives to be admired; the audience, sensing the difference, relaxes and gives back its attention, which is the only currency a stage ever had.", es: "Servicio no significa interpretar el martirio en el escenario. Significa editar la charla hasta que cada minuto regale algo — una idea, una historia, un lunes por la mañana utilizable. El orador que llega a dar duerme mejor que el que llega a ser admirado; el público, que percibe la diferencia, se relaja y devuelve su atención, que es la única moneda que un escenario ha tenido jamás." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de oratoria para certámenes", "Hablar como acto de servicio: dar algo al público en vez de buscar admiración", "Cómo negociar los honorarios de una conferencia"],
        answer: 1,
        why: "El título («hablar como servicio») apunta al propósito de dar al público, no a la técnica ni al dinero.",
      },
      sequence: {
        instr: "Ordena el cambio de enfoque del orador:",
        events: [
          "Ask yourself 'how do I look?' and notice the fear",
          "Change the question to 'what does this room need?'",
          "Edit the talk until every minute gives something away",
          "Arrive on stage intending to give, not to be admired",
          "Receive the audience's attention as the only currency",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Before you walk out, one quiet reframe. The talk is not about you tonight. Somewhere in that audience, one person is stuck exactly where you were stuck five years ago. Find them with your mind — not their face, just their situation. Then speak to that one person for the first two minutes. If the words help them, the talk has already succeeded, whatever the applause meter says.",
        questions: [
          { q: "What reframe is offered before walking out?", kind: "literal", options: ["The talk is not about you tonight", "The applause is the goal", "The slides must be perfect"], answer: 0, why: "«The talk is not about you tonight»: la primera frase del reencuadre." },
          { q: "Who are you asked to find with your mind?", kind: "literal", options: ["The most important critic in the room", "The event organizer", "One person stuck where you were stuck five years ago"], answer: 2, why: "«One person is stuck exactly where you were stuck five years ago»." },
          { q: "How long are you asked to speak to that one person?", kind: "inferencial", options: ["Only during the questions", "For the whole talk", "For the first two minutes"], answer: 2, why: "«Speak to that one person for the first two minutes»." },
          { q: "What defines success in this reframe?", kind: "inferencial", options: ["The applause meter", "Whether the words help that person", "Standing ovations"], answer: 1, why: "«If the words help them, the talk has already succeeded»." },
        ],
      },
    },
  ],

  "en-cu-c1-05": [
    {
      id: "md-en-c1-05-1", theme: "qui e ora",
      title: "The number behind the number", titleEs: "El número detrás del número",
      minutes: 2,
      paragraphs: [
        { it: "Behind every quarterly figure stands a reality that no chart can hold: a customer who stayed, a team that shipped, a warehouse that did not sleep. Presence, in a data review, means letting the number be a door instead of a wall. The question is not only 'what does the data say?' but 'who, right now, is this number made of?'", es: "Detrás de cada cifra trimestral hay una realidad que ningún gráfico puede contener: un cliente que se quedó, un equipo que entregó, un almacén que no durmió. La presencia, en una revisión de datos, significa dejar que el número sea una puerta y no un muro. La pregunta no es solo «¿qué dicen los datos?», sino «¿de quién, ahora mismo, está hecho este número?»." },
        { it: "The practice is deliberately slow for a fast room. Before debating the churn line, take one breath and picture the actual kitchen where an actual subscriber pressed cancel. This is not sentimentality; it is accuracy of a higher order. Teams that remember the humans inside their dashboards make fewer confident mistakes — and apologize better when they do.", es: "La práctica es deliberadamente lenta para una sala veloz. Antes de debatir la línea de fuga de clientes, toma una respiración e imagina la cocina concreta donde un suscriptor concreto presionó cancelar. Esto no es sentimentalismo: es precisión de un orden superior. Los equipos que recuerdan a los humanos dentro de sus tableros cometen menos errores confiados — y piden disculpas mejor cuando los cometen." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso avanzado de hojas de cálculo", "Recordar la realidad humana detrás de cada cifra del informe", "La historia de las empresas de software"],
        answer: 1,
        why: "El título anuncia que detrás del número hay otra cosa: la gente que lo compone.",
      },
      quiz: [
        { q: "What stands behind every quarterly figure?", kind: "literal", options: ["A reality no chart can hold", "A government regulation", "A printing error"], answer: 0, why: "«Behind every quarterly figure stands a reality that no chart can hold»." },
        { q: "What does it mean for a number to be 'a door instead of a wall'?", kind: "inferencial", options: ["It opens onto the people and facts it summarizes", "It blocks the discussion until Q4", "It separates finance from operations"], answer: 0, why: "La imagen de la puerta sugiere que el número abre hacia las personas y hechos que resume." },
        { q: "Why does the writer call picturing the subscriber 'accuracy of a higher order'?", kind: "critica", options: ["Because remembering the humans inside dashboards prevents confident mistakes", "Because feelings are more important than data", "Because charts are always wrong"], answer: 0, why: "«Teams that remember the humans make fewer confident mistakes»: la razón está literal en el texto." },
      ],
      vf: [
        { text: "The text recommends picturing an actual kitchen before debating churn.", value: true, why: "«Picture the actual kitchen where an actual subscriber pressed cancel»." },
        { text: "The writer claims that data teams should ignore their dashboards.", value: false, why: "El texto no pide ignorar los datos, sino recordar a los humanos dentro de ellos." },
        { text: "Teams that remember the humans make fewer confident mistakes, according to the text.", value: true, why: "«Make fewer confident mistakes — and apologize better when they do»." },
      ],
    },
    {
      id: "md-en-c1-05-2", theme: "relax fisico",
      title: "Loosening the shoulders of the quarter", titleEs: "Soltar los hombros del trimestre",
      minutes: 3,
      paragraphs: [
        { it: "A quarter closes and the body keeps score. The neck has been holding the forecast like a weightlifter holds a bar; the eyes have been pinned to screens since the Monday the targets were announced. Physical relaxation after a results meeting is not indulgence — it is how the instrument that did the work gets maintained for the next movement.", es: "El trimestre se cierra y el cuerpo lleva la cuenta. El cuello ha sostenido el pronóstico como un halterofilista sostiene la barra; los ojos han estado clavados en las pantallas desde el lunes en que se anunciaron las metas. El relax físico después de una reunión de resultados no es un lujo — es el mantenimiento del instrumento que hizo el trabajo para el siguiente movimiento." },
        { it: "The routine takes four minutes and a doorway. Hang forward from the hips and let the head weigh nothing. Press the forearms into the door frame until the chest says thank you. Roll the shoulders backward as if putting away two heavy bags. The quarter is over; the body does not know yet. Someone has to tell it, and the telling is muscular.", es: "La rutina toma cuatro minutos y el marco de una puerta. Cuelga hacia adelante desde las caderas y deja que la cabeza no pese nada. Presiona los antebrazos contra el marco hasta que el pecho dé las gracias. Gira los hombros hacia atrás como quien guarda dos maletas pesadas. El trimestre terminó; el cuerpo todavía no lo sabe. Alguien tiene que decírselo, y el decirlo es muscular." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una rutina de fisicoculturismo competitivo", "Descargar el cuerpo después del cierre trimestral de resultados", "Cómo pedir vacaciones en una empresa americana"],
        answer: 1,
        why: "El título une los hombros (cuerpo) con el trimestre (resultados): relax físico post-cierre.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["The body needs deliberate release after intense work periods", "Quarterly results matter more than health", "Stretching is only for athletes"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["The neck holds the forecast like a weightlifter holds a bar", "You hang forward from the hips and let the head weigh nothing", "Rolling the shoulders is like putting away two heavy bags"],
        distractors: ["Results meetings should last four minutes", "The body automatically resets after each quarter", "Door frames are reserved for firefighters"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The neck has been holding the forecast for weeks.",
          "The eyes have been pinned to screens since Monday.",
          "Hang forward from the hips and let the head weigh nothing.",
          "The office coffee machine dispenses three sizes of latte.",
          "Roll the shoulders backward like putting away two heavy bags.",
        ],
        intruder: 3,
        why: "Los tamaños del café de oficina son un detalle administrativo ajeno a la rutina de relajación física.",
      },
    },
    {
      id: "md-en-c1-05-3", theme: "relax mentale",
      title: "Letting the chart breathe", titleEs: "Dejar que el gráfico respire",
      minutes: 2,
      paragraphs: [
        { it: "A crowded chart is a crowded mind made visible: twelve lines, two axes, three footnotes, and one buried insight. Mental relaxation, for the analyst, begins with whitespace. Remove a line. Then another. What remains when the slide can breathe is usually the trend that matters — and the trend that matters was there before the noise was added.", es: "Un gráfico saturado es una mente saturada hecha visible: doce líneas, dos ejes, tres notas al pie y una idea enterrada. El relax mental, para el analista, empieza con el espacio en blanco. Quita una línea. Luego otra. Lo que queda cuando la diapositiva puede respirar suele ser la tendencia que importa — y la tendencia que importa estaba ahí antes de que se añadiera el ruido." },
        { it: "The same discipline applies inwardly. After staring at data too long, the mind keeps computing in the background, like a browser with too many tabs. Close them, one recognition at a time: that worry is a tab; that replay of the CFO's frown is a tab. Attention consolidates in the pauses between analyses. The next insight arrives, reliably, in the space the noise vacated.", es: "La misma disciplina se aplica hacia adentro. Tras mirar datos demasiado tiempo, la mente sigue calculando en segundo plano, como un navegador con demasiadas pestañas. Ciérralas, un reconocimiento a la vez: esa preocupación es una pestaña; esa repetición del ceño de la directora financiera es una pestaña. La atención se consolida en las pausas entre análisis. La siguiente idea llega, con fiabilidad, al espacio que el ruido dejó libre." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un tutorial de software de gráficos", "Simplificar gráficos y mente: quitar ruido para que respire la tendencia", "La biografía de un analista financiero"],
        answer: 1,
        why: "El título («dejar que el gráfico respire») apunta a la simplificación y al descanso mental del analista.",
      },
      sequence: {
        instr: "Ordena el proceso de simplificación:",
        events: [
          "Look at the crowded chart with twelve lines",
          "Remove one line, then another",
          "Notice the trend that matters once the slide breathes",
          "Close the mental 'tabs' of worry one by one",
          "Let the next insight arrive in the space the noise vacated",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Here is a two-minute reset for the analytical mind. Look away from the screen and find the most boring object in the room — a wall, a chair, a door. Study it for one slow minute. Notice how quickly the mind tries to analyze even a chair. Let it. Then breathe once, and when you return to the chart, remove the two least important lines before adding anything new. Space first; insight second.",
        questions: [
          { q: "What should you find in the room?", kind: "literal", options: ["The most boring object", "The most colorful painting", "The fastest computer"], answer: 0, why: "«Find the most boring object in the room»." },
          { q: "How long do you study it?", kind: "literal", options: ["The whole afternoon", "One slow minute", "Ten seconds sharp"], answer: 1, why: "«Study it for one slow minute»." },
          { q: "What is the mind expected to do with the chair?", kind: "inferencial", options: ["Try to analyze even a chair", "Fall asleep immediately", "Forget the chart entirely"], answer: 0, why: "«Notice how quickly the mind tries to analyze even a chair»." },
          { q: "What rule closes the audio?", kind: "inferencial", options: ["Add three new lines for context", "Never touch the chart again", "Remove the two least important lines first"], answer: 2, why: "«Remove the two least important lines before adding anything new. Space first; insight second»." },
        ],
      },
    },
  ],

  "en-cu-c1-06": [
    {
      id: "md-en-c1-06-1", theme: "meditazione",
      title: "Silence is structure", titleEs: "El silencio es estructura",
      minutes: 2,
      paragraphs: [
        { it: "The thirty seconds of silence before a case interview feels like dead air; in the grammar of consulting, it is a load-bearing wall. 'Let me take a moment to structure the problem' is not a confession of slowness — it is the audible sound of thinking done in order. Meditators know the posture well: the pause that looks like nothing and holds everything.", es: "Los treinta segundos de silencio antes de una entrevista de caso parecen aire muerto; en la gramática de la consultoría, son un muro de carga. «Déjeme un momento para estructurar el problema» no es una confesión de lentitud — es el sonido audible del pensamiento hecho en orden. Los meditadores conocen bien esa postura: la pausa que parece nada y sostiene todo." },
        { it: "The same silence, practiced daily, becomes portable. Before answering any hard question — in a meeting, on a first date, in an airport — one full breath of structure beats ten seconds of improvised noise. The mind that can tolerate a silent second is a mind that has stopped confusing speed with intelligence. Structure, like meditation, is mainly the courage to be quiet on purpose.", es: "El mismo silencio, practicado a diario, se vuelve portátil. Antes de responder cualquier pregunta difícil — en una reunión, en una primera cita, en un aeropuerto — una respiración completa de estructura vale más que diez segundos de ruido improvisado. La mente que puede tolerar un segundo silencioso es una mente que dejó de confundir velocidad con inteligencia. La estructura, como la meditación, es sobre todo el coraje de callar a propósito." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas para hablar más rápido en entrevistas", "El silencio estructurado como herramienta de pensamiento y meditación", "Cómo decorar una oficina en Manhattan"],
        answer: 1,
        why: "El título iguala silencio y estructura: la pausa meditativa aplicada al razonamiento.",
      },
      quiz: [
        { q: "What does the candidate say before the thirty seconds of silence?", kind: "literal", options: ["Let me take a moment to structure the problem", "I have no idea", "Let's skip this question"], answer: 0, why: "«'Let me take a moment to structure the problem' is not a confession of slowness»." },
        { q: "Why is silence called 'a load-bearing wall'?", kind: "inferencial", options: ["Because it supports the whole structure of the reasoning", "Because offices in New York are noisy", "Because interviewers hate quiet candidates"], answer: 0, why: "La metáfora del muro de carga indica que la pausa sostiene todo el razonamiento posterior." },
        { q: "What does the essay suggest about speed and intelligence?", kind: "critica", options: ["Tolerating silence stops us from confusing speed with intelligence", "Fast answers are always smarter", "Silence should be avoided in professional settings"], answer: 0, why: "«A mind that has stopped confusing speed with intelligence»: la conclusión del texto." },
      ],
      vf: [
        { text: "The text says one breath of structure beats ten seconds of improvised noise.", value: true, why: "«One full breath of structure beats ten seconds of improvised noise»." },
        { text: "The writer claims meditators are unfamiliar with pauses.", value: false, why: "Dice lo contrario: «Meditators know the posture well»." },
        { text: "The courage to be quiet on purpose is presented as part of structure.", value: true, why: "«Structure, like meditation, is mainly the courage to be quiet on purpose»." },
      ],
    },
    {
      id: "md-en-c1-06-2", theme: "spiritualità",
      title: "The humility of hypothesis", titleEs: "La humildad de la hipótesis",
      minutes: 3,
      paragraphs: [
        { it: "To hold a hypothesis is to admit, in public, that you do not know — and to offer the world a chance to prove you wrong. There is something quietly spiritual in the posture: the researcher who says 'if this were true, we would expect to see X' has bowed to something larger than their own cleverness. The data is the teacher; the hypothesis is merely the question asked with respect.", es: "Sostener una hipótesis es admitir en público que no sabes — y ofrecerle al mundo la oportunidad de demostrar que te equivocas. Hay algo calladamente espiritual en la postura: el investigador que dice «si esto fuera cierto, esperaríamos ver X» se ha inclinado ante algo más grande que su propia astucia. Los datos son el maestro; la hipótesis es apenas la pregunta hecha con respeto." },
        { it: "Hypothesis-driven living, if the phrase can be forgiven, keeps the same humility off the whiteboard. Opinions held as hypotheses can die with dignity and be replaced without grief. The person who says 'my guess is foot traffic — what would we expect to see?' is easier to work with, and easier to be, than the one who marries every conclusion and defends it like territory.", es: "La vida guiada por hipótesis, si se perdona la frase, mantiene la misma humildad fuera de la pizarra. Las opiniones sostenidas como hipótesis pueden morir con dignidad y ser reemplazadas sin duelo. La persona que dice «mi conjetura es la afluencia — ¿qué esperaríamos ver?» es más fácil con quien trabajar, y más fácil de ser, que la que se casa con cada conclusión y la defiende como territorio." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una biografía de científicos famosos", "La humildad de sostener hipótesis: opiniones que pueden morir con dignidad", "Un tratado de lógica formal"],
        answer: 1,
        why: "El título anuncia la humildad como actitud espiritual del método de hipótesis.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Holding hypotheses is a humble, almost spiritual way of thinking and living", "Scientists must never change their minds", "Opinions should be defended like territory"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["The researcher bows to something larger than their own cleverness", "Opinions held as hypotheses can die with dignity", "The humble questioner is easier to work with than the defender of territory"],
        distractors: ["Hypotheses must never be tested", "Data should be ignored when inconvenient", "Changing your mind is a sign of weakness"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "To hold a hypothesis is to admit you do not know.",
          "The data is the teacher; the hypothesis is the question.",
          "Opinions held as hypotheses can die with dignity.",
          "The department retreat is scheduled for the second weekend in June.",
          "The humble questioner is easier to work with.",
        ],
        intruder: 3,
        why: "La fecha del retiro departamental es un dato logístico ajeno a la humildad de la hipótesis.",
      },
    },
    {
      id: "md-en-c1-06-3", theme: "qui e ora",
      title: "Thinking out loud, slowly", titleEs: "Pensar en voz alta, despacio",
      minutes: 2,
      paragraphs: [
        { it: "Reasoning in real time, in a second language, on a clock — this is the triathlon of the mind. The anchor, when everything accelerates, is the present step of the arithmetic. Not the final answer, not the interviewer's opinion, not the imagined rejection email: this multiplication, this rounding, this spoken 'give or take.' Presence is the only place where thinking actually happens.", es: "Razonar en tiempo real, en una segunda lengua, contra el reloj — este es el triatlón de la mente. El ancla, cuando todo acelera, es el paso presente de la aritmética. No la respuesta final, no la opinión de la entrevistadora, no el correo de rechazo imaginado: esta multiplicación, este redondeo, este «más o menos» dicho en voz alta. La presencia es el único lugar donde el pensamiento de verdad ocurre." },
        { it: "The body anchors the mind in return. Both feet on the floor of the interview room. The pen moving at the speed of speech, not faster. One breath before each new branch of the tree. Candidates who practice this slow embodiment outperform their own résumés, because the résumé lists what they knew yesterday, and the present moment is where they get to show it.", es: "El cuerpo ancla la mente a cambio. Ambos pies en el suelo de la sala de entrevista. El bolígrafo moviéndose a la velocidad del habla, no más rápido. Una respiración antes de cada nueva rama del árbol. Los candidatos que practican esta encarnación lenta superan su propio currículum, porque el currículum lista lo que sabían ayer, y el momento presente es donde pueden mostrarlo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso de matemática mental avanzada", "La presencia paso a paso mientras se razona en voz alta bajo presión", "Cómo redactar un currículum para consultoras"],
        answer: 1,
        why: "El título apunta al razonamiento en voz alta y al ritmo: presencia durante la case interview.",
      },
      sequence: {
        instr: "Ordena el anclaje:",
        events: [
          "Feel the pressure of the clock and the second language",
          "Anchor attention on the present step of the arithmetic",
          "Set both feet on the floor and slow the pen to speech speed",
          "Take one breath before opening a new branch of the tree",
          "Show what you know in the present moment",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Let's slow the moment down. You have just been asked to size a market, and the panic says hurry. Instead: feel your feet, both of them, flat against the floor. Now say the first number out loud, and round it before you say it. Sixty percent, say — not fifty-eight. Speak the step, breathe, and let the next step arrive. The interviewer is not timing your fear; the interviewer is listening to your order.",
        questions: [
          { q: "What are you asked to feel first?", kind: "literal", options: ["Your feet flat against the floor", "The temperature of the room", "The weight of the résumé"], answer: 0, why: "«Feel your feet, both of them, flat against the floor»." },
          { q: "How should the first number be said?", kind: "literal", options: ["With fourteen decimals", "Rounded before you say it", "In complete silence"], answer: 1, why: "«Round it before you say it. Sixty percent, say — not fifty-eight»." },
          { q: "What is the interviewer actually listening to, according to the audio?", kind: "inferencial", options: ["Your handshake", "Your accent", "Your order, not your speed"], answer: 2, why: "«The interviewer is not timing your fear; the interviewer is listening to your order»." },
          { q: "What does 'speak the step, breathe' suggest about the method?", kind: "inferencial", options: ["Thinking out loud works better in small, paced units", "Silence is always preferable", "Speed is the only metric"], answer: 0, why: "El ritmo paso a paso (decir el paso, respirar) sugiere unidades pequeñas y medidas." },
        ],
      },
    },
  ],

  "en-cu-c1-07": [
    {
      id: "md-en-c1-07-1", theme: "relax fisico",
      title: "Reading a contract, unclenching a jaw", titleEs: "Leer un contrato, soltar una mandíbula",
      minutes: 2,
      paragraphs: [
        { it: "Legalese has a physical signature. Somewhere around clause 4.1, the reader's jaw clamps, the brow folds, and the shoulders climb — the body bracing against twelve pages of 'notwithstanding' and 'hereby.' The tension is understandable and entirely useless: no clause has ever been defeated by a clenched muscle. Reading a contract can be an exercise in staying soft.", es: "El legalese tiene una firma física. En algún punto cerca de la cláusula 4.1, la mandíbula del lector se cierra, la frente se pliega y los hombros suben — el cuerpo protegiéndose de doce páginas de «notwithstanding» y «hereby». La tensión es comprensible y completamente inútil: ninguna cláusula ha sido jamás derrotada por un músculo apretado. Leer un contrato puede ser un ejercicio de mantenerse suave." },
        { it: "The trick is to read the document the way a lawyer teaches you to: clause by clause, one question at a time, with a pause between. What does this sentence give? What does it take? During the pause, soften the jaw on the exhale. The contract stays adversarial if it wants to; the reader does not have to hold the fight in the body.", es: "El truco es leer el documento como te enseña un abogado: cláusula por cláusula, una pregunta a la vez, con una pausa entre ellas. ¿Qué da esta frase? ¿Qué quita? Durante la pausa, ablanda la mandíbula al exhalar. El contrato puede seguir siendo adversarial si quiere; el lector no tiene que sostener la pelea en el cuerpo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un tratado de derecho mercantil", "Leer un contrato sin acumular la tensión en el cuerpo", "Cómo demandar a un empleador en Nueva York"],
        answer: 1,
        why: "El título une la lectura del contrato con la mandíbula: relax físico ante el legalese.",
      },
      quiz: [
        { q: "Where does the reader's jaw tend to clamp?", kind: "literal", options: ["Somewhere around clause 4.1", "During the lunch break", "After signing"], answer: 0, why: "«Somewhere around clause 4.1, the reader's jaw clamps»." },
        { q: "Why does the writer say the tension is 'entirely useless'?", kind: "inferencial", options: ["Because no clause has ever been defeated by a clenched muscle", "Because lawyers enjoy tense clients", "Because contracts are always fair"], answer: 0, why: "«No clause has ever been defeated by a clenched muscle»: la razón está literal." },
        { q: "What does the essay recommend doing during the pause between clauses?", kind: "critica", options: ["Soften the jaw on the exhale while asking what the sentence gives and takes", "Skip the clauses you dislike", "Sign immediately to avoid anxiety"], answer: 0, why: "«During the pause, soften the jaw on the exhale»: la recomendación central." },
      ],
      vf: [
        { text: "The text says a contract becomes less adversarial if the reader relaxes.", value: false, why: "«The contract stays adversarial if it wants to; the reader does not have to hold the fight»." },
        { text: "The body braces against 'notwithstanding' and 'hereby', according to the writer.", value: true, why: "«The body bracing against twelve pages of 'notwithstanding' and 'hereby'»." },
        { text: "The recommended reading is clause by clause, one question at a time.", value: true, why: "«Clause by clause, one question at a time, with a pause between»." },
      ],
    },
    {
      id: "md-en-c1-07-2", theme: "relax mentale",
      title: "Plain language, quiet mind", titleEs: "Lenguaje claro, mente tranquila",
      minutes: 3,
      paragraphs: [
        { it: "There is a particular mental quiet that comes from understanding what you have signed. Legalese fogs the mind; plain English airs it out. When a dense clause is rewritten into three short sentences — 'the company can end this with thirty days' notice; so can you; no reason needed' — something in the nervous system unclenches, because clarity is a form of safety.", es: "Hay una quietud mental particular que viene de entender lo que has firmado. El legalese empaña la mente; el inglés claro la ventila. Cuando una cláusula densa se reescribe en tres frases cortas — «la compañía puede terminar esto con treinta días de aviso; tú también; sin necesidad de razón» — algo en el sistema nervioso se destensa, porque la claridad es una forma de seguridad." },
        { it: "The relaxation runs both ways. A mind at ease asks better questions: what exactly am I giving away here? A mind in fog nods at paragraphs it does not understand and signs things it will meet again later, in a courtroom. Plain language is not just a legal movement; it is a mental hygiene practice wearing a suit. You sleep differently when you understand your own obligations.", es: "El descanso va en ambos sentidos. Una mente en calma hace mejores preguntas: ¿qué estoy cediendo exactamente aquí? Una mente en la niebla asiente a párrafos que no entiende y firma cosas que volverá a encontrar después, en una sala judicial. El lenguaje claro no es solo un movimiento jurídico: es una práctica de higiene mental con traje puesto. Duermes distinto cuando entiendes tus propias obligaciones." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una campaña contra los abogados", "La claridad del lenguaje como descanso mental y seguridad", "Cómo litigar cláusulas oscuras"],
        answer: 1,
        why: "El título empareja lenguaje claro y mente tranquila: la claridad como descanso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Understanding what you sign brings mental quiet and safety", "Legal documents should be as long as possible", "Lawyers prefer plain English in all contracts"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Legalese fogs the mind; plain English airs it out", "A mind at ease asks better questions about what it is giving away", "You sleep differently when you understand your obligations"],
        distractors: ["Courtrooms prefer foggy language", "Signing without reading is standard practice", "Clarity increases legal fees automatically"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Legalese fogs the mind; plain English airs it out.",
          "Clarity is a form of safety for the nervous system.",
          "A mind in fog nods at paragraphs it does not understand.",
          "The notary's office charges twelve dollars per signature.",
          "Plain language is mental hygiene wearing a suit.",
        ],
        intruder: 3,
        why: "El precio del notario es un trámite administrativo ajeno a la higiene mental del texto.",
      },
    },
    {
      id: "md-en-c1-07-3", theme: "meditazione",
      title: "One clause at a time", titleEs: "Una cláusula a la vez",
      minutes: 2,
      paragraphs: [
        { it: "A contract is a machine for generating anxiety about the future: what if they terminate, what if I breach, what if the state changes its mind. Meditation, applied to legal reading, is the discipline of the single clause. This page, this sentence, this obligation — met fully, understood, annotated — and then the next. The whole document is assembled from present moments, none of which require the whole future.", es: "Un contrato es una máquina de generar ansiedad sobre el futuro: ¿y si rescinden, ¿y si incumple, ¿y si el estado cambia de parecer. La meditación, aplicada a la lectura jurídica, es la disciplina de la cláusula única. Esta página, esta frase, esta obligación — atendidas por completo, entendidas, anotadas — y luego la siguiente. El documento entero se ensambla con momentos presentes, ninguno de los cuales necesita el futuro completo." },
        { it: "The meditative reader keeps a small ritual. Before each numbered section, one breath and a question: what is this section protecting, and from whom? The mind wants to leap to consequences; the practice brings it back to language. By the signature page, the reader who stayed present has not read faster — but has understood what the speed-readers skimmed past and paid for later.", es: "El lector meditativo guarda un pequeño ritual. Antes de cada sección numerada, una respiración y una pregunta: ¿qué protege esta sección, y de quién? La mente quiere saltar a las consecuencias; la práctica la devuelve al lenguaje. Al llegar a la página de firmas, el lector que se quedó presente no ha leído más rápido — pero ha entendido lo que los lectores veloces pasaron por alto y pagaron después." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo escribir contratos más largos", "Leer un contrato cláusula por cláusula como práctica de presencia", "Una historia del notariado estadounidense"],
        answer: 1,
        why: "El título («una cláusula a la vez») anuncia la lectura presente como práctica meditativa.",
      },
      sequence: {
        instr: "Ordena el ritual del lector:",
        events: [
          "Notice the anxiety about future 'what ifs'",
          "Take one breath before the numbered section",
          "Ask what the section protects and from whom",
          "Bring the mind back from consequences to language",
          "Sign having understood what speed-readers missed",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Take the contract and fold it, mentally, into a single page. Only section four exists right now. Read the first sentence of it, and as you read, notice the future trying to arrive early — the courtroom, the termination letter, the angry email, none of which has happened. Come back to the words. What does this sentence actually promise? Underline the verb. The verb is where the obligation lives; everything else is furniture. When one sentence is clear, move to the next.",
        questions: [
          { q: "Which section exists right now, mentally?", kind: "literal", options: ["Only section four", "The whole contract", "The signature page"], answer: 0, why: "«Only section four exists right now»." },
          { q: "Where does the obligation live, according to the audio?", kind: "literal", options: ["In the margins", "In the verb", "In the title"], answer: 1, why: "«Underline the verb. The verb is where the obligation lives»." },
          { q: "What is 'the future trying to arrive early'?", kind: "inferencial", options: ["Imagined events like courtrooms and angry emails", "The printer's deadline", "The notary's schedule"], answer: 0, why: "El audio enumera la sala judicial, la carta de rescisión y el correo enojado como futuro imaginado." },
          { q: "What should you do when one sentence is clear?", kind: "inferencial", options: ["Call the lawyer immediately", "Stop reading the contract", "Move to the next"], answer: 2, why: "«When one sentence is clear, move to the next»." },
        ],
      },
    },
  ],

  "en-cu-c1-08": [
    {
      id: "md-en-c1-08-1", theme: "spiritualità",
      title: "The dignity of the ordinary", titleEs: "La dignidad de lo ordinario",
      minutes: 3,
      paragraphs: [
        { it: "The longform journalist's deepest lesson is a spiritual one: the ordinary is worth witnessing. A parking lot at four in the morning, eleven men and a running truck, frost on windshields — none of it is news until someone kneels and pays attention. Reverence for small scenes is not sentimentality; it is the discipline of honoring what the world does while nobody is composing headlines.", es: "La lección más honda del periodista de reportajes largos es espiritual: lo ordinario merece ser presenciado. Un estacionamiento a las cuatro de la mañana, once hombres y un camión encendido, escarcha en los parabrisas — nada de eso es noticia hasta que alguien se arrodilla y presta atención. La reverencia por las escenas pequeñas no es sentimentalismo; es la disciplina de honrar lo que el mundo hace mientras nadie redacta titulares." },
        { it: "To write this way, the reporter must first see this way, and seeing this way is a contemplative act. You sit in the truck. You smell the diesel. You let the crew's silence teach you its grammar. The harvest feature that moves readers was never assembled from statistics alone; it was transcribed from presence — hours of it, spent on purpose, in service of people who rarely get that kind of attention.", es: "Para escribir así, el reportero primero debe ver así, y ver así es un acto contemplativo. Te sientas en el camión. Hueles el diésel. Dejas que el silencio de la cuadrilla te enseñe su gramática. El reportaje de cosecha que conmueve a los lectores nunca se armó solo con estadísticas; fue transcrito de la presencia — horas de ella, dedicadas a propósito, al servicio de personas que rara vez reciben ese tipo de atención." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["El estilo de las portadas de revista", "Honrar lo ordinario: el periodismo como acto contemplativo de presencia", "Cómo fotografiar amaneceres rurales"],
        answer: 1,
        why: "El título anuncia la dignidad de lo ordinario: la reverencia del reportero por las escenas pequeñas.",
      },
      quiz: [
        { q: "What happens to the parking-lot scene until someone pays attention?", kind: "literal", options: ["None of it is news", "It becomes a viral headline", "It is demolished"], answer: 0, why: "«None of it is news until someone kneels and pays attention»." },
        { q: "Why is 'seeing this way' called a contemplative act?", kind: "inferencial", options: ["Because it requires sitting, smelling, and letting silence teach", "Because journalists must pray before writing", "Because the truck is holy"], answer: 0, why: "El segundo párrafo describe sentarse, oler y dejar que el silencio enseñe: la contemplación del reportero." },
        { q: "What does the essay say moving features are transcribed from?", kind: "critica", options: ["From hours of presence spent on purpose", "From statistics alone", "From press releases"], answer: 0, why: "«It was transcribed from presence — hours of it, spent on purpose»." },
      ],
      vf: [
        { text: "The writer calls reverence for small scenes 'sentimentality'.", value: false, why: "«Reverence for small scenes is not sentimentality; it is the discipline»." },
        { text: "The reporter sits in the truck and smells the diesel, according to the text.", value: true, why: "«You sit in the truck. You smell the diesel»." },
        { text: "The essay claims the crew's silence can teach a grammar.", value: true, why: "«You let the crew's silence teach you its grammar»." },
      ],
    },
    {
      id: "md-en-c1-08-2", theme: "qui e ora",
      title: "Smelling the diesel", titleEs: "Oler el diésel",
      minutes: 2,
      paragraphs: [
        { it: "Reporters have a saying: the story is in the smells. A feature written from a desk can be accurate; a feature written from the field is true in a different register — the diesel at four in the morning, the sound of crates being counted, the particular tiredness of a voice that has been awake since three. Presence is the reporter's primary source, and it cannot be downloaded.", es: "Los reporteros tienen un dicho: la historia está en los olores. Un reportaje escrito desde un escritorio puede ser preciso; un reportaje escrito desde el terreno es verdadero en otro registro — el diésel de las cuatro de la mañana, el sonido de las cajas siendo contadas, el cansancio particular de una voz despierta desde las tres. La presencia es la fuente primaria del reportero, y no se puede descargar." },
        { it: "The practice of the here and now, for the writer, is radical attention to the physical present of the story. Warmth of the cup, weight of the crate, the exact words of the quote and the silence before it. Details gathered in presence outlast any outline. When the drafting gets hard, the writer returns to the field notes and finds that the scene, carefully witnessed, has already written its own first draft.", es: "La práctica del aquí y ahora, para el escritor, es atención radical al presente físico de la historia. El calor de la taza, el peso de la caja, las palabras exactas de la cita y el silencio anterior. Los detalles recogidos en presencia sobreviven a cualquier esquema. Cuando el borrador se vuelve cuesta arriba, el escritor vuelve a las notas de campo y descubre que la escena, cuidadosamente presenciada, ya escribió su propio primer borrador." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de motores diésel", "La atención plena a los detalles sensoriales como materia prima del reportaje", "Cómo conducir un camión de cosecha"],
        answer: 1,
        why: "El título cita el detalle sensorial por excelencia del reportaje de campo: el olor del diésel.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Radical presence in the field gives the story details no desk can supply", "Features should be written entirely from memory", "Sensory details weaken serious journalism"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["The diesel smell at four in the morning belongs to the true register", "The exact words of the quote and the silence before it matter", "A carefully witnessed scene has already written its own first draft"],
        distractors: ["Outlines are more important than reporting", "Field notes must never be revised", "Journalists should avoid talking to workers"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The story is in the smells.",
          "Presence is the reporter's primary source.",
          "You note the warmth of the cup and the weight of the crate.",
          "The truck's fuel tank holds fifty gallons of diesel.",
          "The scene, carefully witnessed, writes its own first draft.",
        ],
        intruder: 3,
        why: "La capacidad del tanque es un dato técnico que no pertenece a la atención sensorial del momento.",
      },
    },
    {
      id: "md-en-c1-08-3", theme: "relax fisico",
      title: "After the deadline, the body speaks", titleEs: "Después de la fecha límite, el cuerpo habla",
      minutes: 2,
      paragraphs: [
        { it: "The story files at six in the evening, and for a strange hour the writer feels nothing — the body has been forwarding all calls. Then the bill arrives: the neck that read like a question mark, the wrists that typed forty thousand words, the eyes that forgot to blink through three drafts. Physical recovery after a deadline is journalism's least glamorous beat, and the one that decides who is still writing at sixty.", es: "La historia se entrega a las seis de la tarde y, durante una hora extraña, el escritor no siente nada — el cuerpo ha estado desviando todas las llamadas. Luego llega la factura: el cuello que se leyó como signo de interrogación, las muñecas que teclearon cuarenta mil palabras, los ojos que olvidaron parpadear a lo largo de tres borradores. La recuperación física después de una fecha límite es la sección menos glamorosa del periodismo, y la que decide quién sigue escribiendo a los sesenta." },
        { it: "The recovery sequence is unheroic. Lie on the floor with the legs up the wall and let the spine remember it is straight. Drink water as though the deadline were dehydration, because partly it was. Walk without a destination, slowly, the way the characters of the story walked. The body kept every promise during the deadline; the least the writer can do afterward is keep one back.", es: "La secuencia de recuperación no tiene nada de heroica. Acuéstate en el suelo con las piernas en la pared y deja que la columna recuerde que es recta. Bebe agua como si la fecha límite fuera deshidratación, porque en parte lo fue. Camina sin destino, despacio, como caminaban los personajes de la historia. El cuerpo cumplió todas las promesas durante la entrega; lo mínimo que el escritor puede hacer después es devolverle una." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un régimen de entrenamiento olímpico", "Recuperar el cuerpo después de entregar un reportaje a fecha límite", "Cómo celebrar una publicación con amigos"],
        answer: 1,
        why: "El título anuncia el momento posterior a la entrega y la voz del cuerpo: recuperación física.",
      },
      sequence: {
        instr: "Ordena la recuperación:",
        events: [
          "File the story at six and feel nothing for an hour",
          "Notice the bill arrive: neck, wrists, eyes",
          "Lie on the floor with the legs up the wall",
          "Drink water and walk slowly without a destination",
          "Keep one promise back to the body",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "The piece is filed. Before you celebrate or collapse, do this. Stand up and reach for the ceiling with both hands, and as you lower your arms, let the exhale last twice as long as the reach. Now find a wall, sit against it with your back flat, and close your eyes for exactly ten breaths. Water next — a full glass, not a sip. The story needed your body for a week; tonight, the body needs the story to be over.",
        questions: [
          { q: "What do you do with both hands?", kind: "literal", options: ["Reach for the ceiling", "Type another draft", "Sign the contract"], answer: 0, why: "«Reach for the ceiling with both hands»." },
          { q: "How many breaths do you sit with your eyes closed?", kind: "literal", options: ["None", "Exactly ten", "Two hundred"], answer: 1, why: "«Close your eyes for exactly ten breaths»." },
          { q: "Why 'a full glass, not a sip'?", kind: "inferencial", options: ["Because the body has been running on deadline dehydration", "Because water is expensive", "Because the editor demands it"], answer: 0, why: "El audio sugiere que la entrega funcionó a base de deshidratación: hay que reponer." },
          { q: "What does the body need tonight, according to the closing line?", kind: "inferencial", options: ["A new assignment", "Another espresso", "The story to be over"], answer: 2, why: "«Tonight, the body needs the story to be over»." },
        ],
      },
    },
  ],

  "en-cu-c1-09": [
    {
      id: "md-en-c1-09-1", theme: "relax mentale",
      title: "Translating the unsaid", titleEs: "Traducir lo no dicho",
      minutes: 2,
      paragraphs: [
        { it: "Office language runs on a second channel. 'Interesting' descends, 'circle back' stalls, 'has merit' genuinely shines — and the listener who decodes in real time risks a new kind of fatigue: the exhaustion of constant interpretation. Mental relaxation, in a high-context workplace, is learning to hear the code without running every sentence through the anxiety translator.", es: "El lenguaje de oficina funciona en un segundo canal. «Interesting» despide, «circle back» aplaza, «has merit» brilla de verdad — y quien decodifica en tiempo real arriesga una fatiga nueva: el agotamiento de la interpretación constante. El relax mental, en un lugar de trabajo alto en contexto, es aprender a oír el código sin pasar cada frase por el traductor de la ansiedad." },
        { it: "The calmer protocol has three moves. First, read the verbs, not the adjectives; verbs are usually honest. Second, when the message matters, ask a plain question: 'so, is that a no?' — the code permits it. Third, when the message does not matter, let it go undecoded. Not every 'let's circle back' deserves a candlelight vigil. Saving your interpretation for what counts is how the fluent mind stays kind and sane.", es: "El protocolo más tranquilo tiene tres movimientos. Primero, lee los verbos, no los adjetivos; los verbos suelen ser honestos. Segundo, cuando el mensaje importa, haz una pregunta directa: «entonces, ¿eso es un no?» — el código lo permite. Tercero, cuando el mensaje no importa, déjalo pasar sin decodificar. No todo «retomémoslo» merece una vigilia con velas. Reservar la interpretación para lo que cuenta es como la mente fluida se mantiene amable y cuerda." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un diccionario de jerga corporativa", "Descansar la mente al descifrar el lenguaje indirecto de la oficina", "Cómo escribir correos más largos"],
        answer: 1,
        why: "El título («traducir lo no dicho») apunta al esfuerzo mental de decodificar, y al descanso de administrarlo.",
      },
      quiz: [
        { q: "What does 'has merit' do, according to the text?", kind: "literal", options: ["It genuinely shines", "It signals rejection", "It schedules a meeting"], answer: 0, why: "«'Has merit' genuinely shines»: es elogio real." },
        { q: "Why does the writer mention an 'anxiety translator'?", kind: "inferencial", options: ["Because constant decoding of subtext is exhausting", "Because offices employ official translators", "Because anxiety improves listening"], answer: 0, why: "La fatigua de la interpretación constante: pasar cada frase por el traductor de la ansiedad agota." },
        { q: "Which move belongs to the calmer protocol?", kind: "critica", options: ["Letting unimportant coded messages go undecoded", "Decoding every single phrase with maximum effort", "Answering coded speech with more coded speech"], answer: 0, why: "«When the message does not matter, let it go undecoded»: el tercer movimiento del protocolo." },
      ],
      vf: [
        { text: "The text recommends reading the verbs because they are usually honest.", value: true, why: "«Read the verbs, not the adjectives; verbs are usually honest»." },
        { text: "The writer suggests asking 'so, is that a no?' when the message matters.", value: true, why: "«When the message matters, ask a plain question: 'so, is that a no?'»." },
        { text: "According to the essay, every 'circle back' deserves deep analysis.", value: false, why: "«Not every 'let's circle back' deserves a candlelight vigil»." },
      ],
    },
    {
      id: "md-en-c1-09-2", theme: "meditazione",
      title: "The pause inside a pause", titleEs: "La pausa dentro de la pausa",
      minutes: 3,
      paragraphs: [
        { it: "There is a pause after the word 'interesting' — the polite one, with the falling tone — and inside that pause, a smaller one, where the listener decides what to do with the silence. Meditation trains exactly this joint of attention: the half-second between stimulus and response, between the compliment that was not a compliment and the reaction that does not have to happen.", es: "Hay una pausa después de la palabra «interesting» — la cortés, con tono descendente — y dentro de esa pausa, una más pequeña, donde quien escucha decide qué hacer con el silencio. La meditación entrena exactamente esa coyuntura de la atención: el medio segundo entre estímulo y respuesta, entre el cumplido que no fue cumplido y la reacción que no tiene que ocurrir." },
        { it: "Practiced listeners age well. They stop spending the pause composing a rebuttal, and start spending it noticing: the tone, the shoulders of the speaker, the room's temperature around the subject. The pause inside the pause is where empathy does its paperwork. Nothing about it looks impressive from the outside; everything about it changes what the next sentence will be.", es: "Los oyentes practicados envejecen bien. Dejan de gastar la pausa componiendo una réplica, y empiezan a gastarla notando: el tono, los hombros de quien habla, la temperatura de la sala alrededor del tema. La pausa dentro de la pausa es donde la empatía hace su papeleo. Nada de eso luce impresionante desde fuera; todo eso cambia cuál será la siguiente frase." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ensayo sobre puntuación inglesa", "El espacio entre estímulo y respuesta como lugar de práctica meditativa", "Cómo interrumpir con elegancia en reuniones"],
        answer: 1,
        why: "El título anuncia una pausa dentro de otra: el intervalo meditativo entre lo que oyes y lo que respondes.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["The half-second between stimulus and response is trainable and transformative", "Fast rebuttals build strong careers", "Silence in meetings is always a mistake"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["The listener decides what to do inside the smaller pause", "Practiced listeners notice tone, shoulders and the room's temperature", "The pause inside the pause is where empathy does its paperwork"],
        distractors: ["Every pause must be filled immediately", "Tone of voice carries no information", "Composing rebuttals is the best use of silence"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "There is a pause after the polite 'interesting'.",
          "Meditation trains the joint of attention between stimulus and response.",
          "Practiced listeners stop composing rebuttals during the pause.",
          "The meeting room was repainted over the weekend in pale gray.",
          "The pause inside the pause changes the next sentence.",
        ],
        intruder: 3,
        why: "El color de la pintura es un detalle decorativo ajeno a la atención que describe el texto.",
      },
    },
    {
      id: "md-en-c1-09-3", theme: "spiritualità",
      title: "Kindness between the lines", titleEs: "Amabilidad entre líneas",
      minutes: 2,
      paragraphs: [
        { it: "Understatement is often analyzed as strategy, but at its root it is a form of consideration: the culture that says 'not unreasonable' is a culture trying to leave the other person's dignity a soft place to land. Reading corporate courtesy with paranoia misses the kindness; reading it with gratitude can turn a whole meeting into a gentler transaction than it needed to be.", es: "El eufemismo suele analizarse como estrategia, pero en su raíz es una forma de consideración: la cultura que dice «no es irrazonable» es una cultura que intenta dejarle a la dignidad del otro un lugar suave donde aterrizar. Leer la cortesía corporativa con paranoia se pierde la amabilidad; leerla con gratitud puede convertir una reunión entera en una transacción más amable de lo que necesitaba ser." },
        { it: "The spiritual practice is simple to describe and hard to sustain: assume the code is protecting you, too. When the feedback arrives wrapped in three softeners, unwrap it slowly, take the useful center, and thank the wrapping. The person who chose cushioning over bluntness was, in their way, thinking of your morning. You can think of theirs when you answer.", es: "La práctica espiritual es simple de describir y difícil de sostener: asume que el código también te protege a ti. Cuando la retroalimentación llega envuelta en tres amortiguadores, desenvuélvela despacio, toma el centro útil y agradece el envoltorio. Quien eligió amortiguar en vez de ser brusco estaba, a su manera, pensando en tu mañana. Tú puedes pensar en la suya cuando respondas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un tratado de comunicación agresiva", "Leer la cortesía indirecta como una forma de consideración y amabilidad", "Cómo despedir empleados con sutileza"],
        answer: 1,
        why: "El título anuncia la amabilidad escondida en el lenguaje indirecto del trabajo.",
      },
      sequence: {
        instr: "Ordena la práctica:",
        events: [
          "Receive feedback wrapped in three softeners",
          "Resist reading the wrapping with paranoia",
          "Unwrap it slowly and take the useful center",
          "Thank the wrapping instead of resenting it",
          "Answer thinking of the other person's morning",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Recall the last time someone told you 'this is not a bad draft.' Sit with the sentence for a moment. The speaker chose a double negative — harder work than a compliment — so that you could disagree with them gently if you wanted to. That is care, disguised as hedging. Before your next reply, try building one sentence the same way: honest at the center, soft at the edges. Kindness and precision can share a clause; they do it all the time.",
        questions: [
          { q: "What sentence are you asked to recall?", kind: "literal", options: ["This is not a bad draft", "This is a disaster", "You are fired"], answer: 0, why: "«Recall the last time someone told you 'this is not a bad draft'»." },
          { q: "What is the double negative called in the audio?", kind: "literal", options: ["Laziness disguised as grammar", "Anger disguised as praise", "Care, disguised as hedging"], answer: 2, why: "«That is care, disguised as hedging»." },
          { q: "What is the next reply supposed to contain?", kind: "inferencial", options: ["One sentence, honest at the center and soft at the edges", "Three pages of arguments", "A formal complaint"], answer: 0, why: "«Try building one sentence the same way: honest at the center, soft at the edges»." },
          { q: "What final claim does the audio make?", kind: "inferencial", options: ["Precision requires bluntness", "Kindness and precision can share a clause", "Kindness ruins precision"], answer: 1, why: "«Kindness and precision can share a clause; they do it all the time»." },
        ],
      },
    },
  ],

  "en-cu-c1-10": [
    {
      id: "md-en-c1-10-1", theme: "qui e ora",
      title: "This voice, this moment", titleEs: "Esta voz, este momento",
      minutes: 2,
      paragraphs: [
        { it: "A multilingual team meeting is a presence practice disguised as a project update. Voices arrive carrying Texas and Monterrey and Third Ward; the mind wants to sort them, grade them, rank them by proximity to the evening news. The alternative is simpler and harder: let each voice be exactly the voice it is, in the only moment it is speaking.", es: "Una reunión de equipo multilingüe es una práctica de presencia disfrazada de actualización de proyecto. Las voces llegan cargando Texas y Monterrey y Third Ward; la mente quiere clasificarlas, puntuarlas, ordenarlas por cercanía al noticiero nocturno. La alternativa es más simple y más difícil: deja que cada voz sea exactamente la voz que es, en el único momento en que está hablando." },
        { it: "The accent you are hearing right now is not an obstacle on the way to meaning; it is part of the meaning — a person's whole history arriving in the vowels. Presence, here, is listening without mentally rewriting anyone toward 'General American.' What you understand when you stop correcting is often the thing the meeting actually needed.", es: "El acento que escuchas ahora mismo no es un obstáculo en el camino hacia el significado; es parte del significado — la historia entera de una persona llegando en las vocales. La presencia, aquí, es escuchar sin reescribir mentalmente a nadie hacia el «General American». Lo que entiendes cuando dejas de corregir suele ser lo que la reunión de verdad necesitaba." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de fonética comparada", "Escuchar la voz ajena tal como es, sin corregirla mentalmente, aquí y ahora", "Cómo imitar acentos con precisión"],
        answer: 1,
        why: "El título («esta voz, este momento») apunta a la presencia ante la voz tal como suena.",
      },
      quiz: [
        { q: "What does the mind want to do with the voices, according to the first paragraph?", kind: "literal", options: ["Sort them, grade them, rank them", "Record them for posterity", "Translate them instantly"], answer: 0, why: "«The mind wants to sort them, grade them, rank them by proximity to the evening news»." },
        { q: "Why is the accent called 'part of the meaning'?", kind: "inferencial", options: ["Because a person's whole history arrives in the vowels", "Because accents indicate seniority", "Because grammar matters less than accent"], answer: 0, why: "«A person's whole history arriving in the vowels»: el acento trae la historia del hablante." },
        { q: "What does the essay suggest you understand when you stop correcting?", kind: "critica", options: ["The thing the meeting actually needed", "The superiority of neutral accents", "The need for stricter style guides"], answer: 0, why: "«What you understand when you stop correcting is often the thing the meeting actually needed»." },
      ],
      vf: [
        { text: "The writer says the accent is an obstacle on the way to meaning.", value: false, why: "«Not an obstacle on the way to meaning; it is part of the meaning»." },
        { text: "The text describes the meeting as a presence practice disguised as a project update.", value: true, why: "«A presence practice disguised as a project update»." },
        { text: "Listening without mentally rewriting anyone is presented as the alternative.", value: true, why: "«Listening without mentally rewriting anyone toward 'General American'»." },
      ],
    },
    {
      id: "md-en-c1-10-2", theme: "relax fisico",
      title: "Relaxing into your own accent", titleEs: "Relajarse en el propio acento",
      minutes: 3,
      paragraphs: [
        { it: "Speaking a second language in public keeps muscles busy that grammar never mentions: the throat that tightens before the rolled r, the diaphragm that braces before the th. Much of what we call accent anxiety is actually muscle tension — the body trying to prevent its own biography from being audible. Relaxing into your accent is, quite literally, a physical practice.", es: "Hablar una segunda lengua en público mantiene ocupados músculos que la gramática jamás menciona: la garganta que se aprieta antes de la ere, el diafragma que se tensa antes de la z. Buena parte de lo que llamamos ansiedad de acento es en realidad tensión muscular — el cuerpo intentando evitar que su propia biografía se oiga. Relajarse en el propio acento es, literalmente, una práctica física." },
        { it: "The sequence is gentle. Yawn before the call to open the throat. Speak a half-tone slower and let the jaw move more than feels elegant. Let the mother tongue visit the vowels without inviting shame to the meeting. Speakers who release the tension stop mumbling — tension was the mumble. Clarity and relaxation, it turns out, were the same project all along.", es: "La secuencia es amable. Bosteza antes de la llamada para abrir la garganta. Habla medio tono más despacio y deja que la mandíbula se mueva más de lo que parece elegante. Deja que la lengua materna visite las vocales sin invitar a la vergüenza a la reunión. Quienes sueltan la tensión dejan de mascar — la tensión era el mascullar. Claridad y relajación, resulta, eran el mismo proyecto desde el principio." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Fonética correctiva intensiva", "Soltar la tensión física para hablar con más claridad y menos vergüenza", "Cómo eliminar el acento en seis semanas"],
        answer: 1,
        why: "El título anuncia la relajación física del propio acento, no su eliminación.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Releasing physical tension improves clarity more than self-correction does", "Accents must be eliminated before speaking professionally", "Mumbling is a personality trait"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["The throat tightens and the diaphragm braces before difficult sounds", "Speaking a half-tone slower helps the jaw move freely", "Tension was the mumble all along"],
        distractors: ["Shame improves pronunciation", "The mother tongue should never be audible", "Slower speech signals lower intelligence"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The throat tightens before the rolled r.",
          "Accent anxiety is partly muscle tension.",
          "Yawn before the call to open the throat.",
          "The company's phone plan includes unlimited international minutes.",
          "Tension was the mumble, and releasing it brings clarity.",
        ],
        intruder: 3,
        why: "El plan telefónico de la empresa es un dato logístico ajeno a la práctica corporal del texto.",
      },
    },
    {
      id: "md-en-c1-10-3", theme: "relax mentale",
      title: "A biography you can rest in", titleEs: "Una biografía en la que puedes descansar",
      minutes: 2,
      paragraphs: [
        { it: "An accent is a biography you can hear — but a biography, carried defensively, becomes a weight. The mental work of the advanced speaker is not to erase the history in the vowels; it is to stop litigating it in every meeting. You are allowed to know where you come from and also to be entirely here, discussing the roadmap, without a trial running in the background.", es: "Un acento es una biografía que se puede oír — pero una biografía, cargada a la defensiva, se vuelve un peso. El trabajo mental del hablante avanzado no es borrar la historia que hay en las vocales; es dejar de litigarla en cada reunión. Tienes derecho a saber de dónde vienes y a estar completamente aquí, discutiendo la hoja de ruta, sin un juicio corriendo en segundo plano." },
        { it: "Mental rest, in this sense, is the end of double bookkeeping: the voice that speaks and the inner critic that scores. Retire the critic for one meeting. Notice what becomes available — humor, risk, the second sentence of a thought — when no part of you is grading the first. The accent stays; the case is closed; the speaker, finally, gets to be a participant.", es: "El descanso mental, en este sentido, es el fin de la contabilidad doble: la voz que habla y el crítico interior que puntúa. Retira al crítico por una reunión. Nota qué se vuelve disponible — el humor, el riesgo, la segunda frase de un pensamiento — cuando ninguna parte de ti está calificando la primera. El acento se queda; el caso se cierra; el hablante, por fin, llega a ser un participante." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un procedimiento para solicitar la nacionalidad", "Descansar de la autocrítica: dejar de 'litigar' el propio acento en cada reunión", "Cómo escribir una autobiografía bilingüe"],
        answer: 1,
        why: "El título sugiere descansar dentro de la propia biografía sonora, sin defenderla ni borrarla.",
      },
      sequence: {
        instr: "Ordena el descanso mental:",
        events: [
          "Carry the accent as a defended biography",
          "Notice the inner critic scoring your speech",
          "Retire the critic for one whole meeting",
          "Notice humor and risk becoming available",
          "Remain a participant with the accent staying and the case closed",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "For the next meeting, try an experiment. Before you unmute, say one sentence to yourself in your strongest, most unapologetic accent — the one from home, the one nobody grades. Let the mouth remember it is free. Then join the call and speak from that freedom, choosing your careful register when it serves the client, and your easy one when it serves the team. Both registers are yours. The meeting is not an audition; it is just Tuesday.",
        questions: [
          { q: "What do you say to yourself before unmuting?", kind: "literal", options: ["One sentence in your strongest accent", "The agenda of the meeting", "A formal apology"], answer: 0, why: "«Say one sentence to yourself in your strongest, most unapologetic accent»." },
          { q: "When should you choose the careful register?", kind: "literal", options: ["Only on Mondays", "When it serves the client", "Never, under any circumstance"], answer: 1, why: "«Choosing your careful register when it serves the client»." },
          { q: "What does 'the meeting is not an audition; it is just Tuesday' mean?", kind: "inferencial", options: ["Ordinary participation matters more than performing", "Tuesday meetings are unimportant", "Auditions happen on Tuesdays"], answer: 0, why: "La frase quita dramatismo: la reunión es un día cualquiera, no una prueba de casting." },
          { q: "What is the freedom the mouth remembers?", kind: "inferencial", options: ["That it can speak without being graded", "That it can stay silent forever", "That it can sing"], answer: 0, why: "El acento de casa, el que nadie califica, recuerda a la boca que puede hablar sin nota." },
        ],
      },
    },
  ],

  "en-cu-c1-11": [
    {
      id: "md-en-c1-11-1", theme: "meditazione",
      title: "Breathing through the objection", titleEs: "Respirar a través de la objeción",
      minutes: 2,
      paragraphs: [
        { it: "Every writer of persuasive prose knows the moment: the objection rises in the reader's mind — and in your own body, half a second earlier. The breath shortens, the argument clenches, and the prose starts shouting. Meditation for the opinion writer is trained exactly there: at the breath before the rebuttal. Concede on the exhale; pivot on the inhale; strike with a level pulse.", es: "Todo escritor de prosa persuasiva conoce el momento: la objeción se levanta en la mente del lector — y en tu propio cuerpo, medio segundo antes. El aliento se corta, el argumento se aprieta y la prosa empieza a gritar. La meditación para el articulista de opinión se entrena exactamente ahí: en la respiración previa a la refutación. Concede al exhalar; gira al inhalar; golpea con el pulso parejo." },
        { it: "The practice keeps the steel-man honest. A writer who has calmed the body can afford to present the opposing case in its best suit, because nothing in the nervous system is screaming for a cheap win. Granted, the budget is tight — and the sentence lands better when the writer is not clutching. Persuasion, it turns out, is respiratory work: the calmer lung gets the reader.", es: "La práctica mantiene honesto al steel-man. Un escritor que ha calmado el cuerpo puede permitirse presentar el caso contrario en su mejor traje, porque nada en su sistema nervioso grita por una victoria barata. Concedido, el presupuesto está ajustado — y la frase aterriza mejor cuando el escritor no está aferrándose. La persuasión, resulta, es trabajo respiratorio: el pulmón más tranquilo se queda con el lector." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de técnicas de debate agresivo", "Respirar y calmarse para refutar con honestidad en un artículo de opinión", "Cómo aumentar la capacidad pulmonar para oradores"],
        answer: 1,
        why: "El título une la respiración con la objeción: calma meditativa para el articulista.",
      },
      quiz: [
        { q: "Where does the objection rise first, according to the text?", kind: "literal", options: ["In your own body, half a second earlier", "In the editor's inbox", "In the reader's conclusion"], answer: 0, why: "«And in your own body, half a second earlier»." },
        { q: "Why can a calm writer afford the steel-man?", kind: "inferencial", options: ["Because nothing in the nervous system is screaming for a cheap win", "Because calm writers dislike arguments", "Because steel-men are contractually required"], answer: 0, why: "«Because nothing in the nervous system is screaming for a cheap win»." },
        { q: "What does 'persuasion is respiratory work' mean?", kind: "critica", options: ["The calmer breathing, the more persuasive the writing", "Writers should speak only on the exhale", "Long sentences require athletic lungs"], answer: 0, why: "«The calmer lung gets the reader»: la respiración tranquila sostiene la persuasión." },
      ],
      vf: [
        { text: "The text recommends conceding on the exhale and pivoting on the inhale.", value: true, why: "«Concede on the exhale; pivot on the inhale»." },
        { text: "The writer claims a clenched argument makes the sentence land better.", value: false, why: "«The sentence lands better when the writer is not clutching»." },
        { text: "According to the essay, the steel-man requires a calm nervous system.", value: true, why: "«The practice keeps the steel-man honest» + la explicación del sistema nervioso tranquilo." },
      ],
    },
    {
      id: "md-en-c1-11-2", theme: "spiritualità",
      title: "Steeling the man, softening the heart", titleEs: "Blindar al adversario, ablandar el corazón",
      minutes: 3,
      paragraphs: [
        { it: "The steel-man technique — presenting your opponent's argument in its strongest form — is usually taught as strategy. It is also, quietly, a spiritual discipline: it asks you to spend your best imagination on someone you disagree with. To write the other side's case so fairly that they would sign it is to practice a respect that goes deeper than rhetoric.", es: "La técnica del steel-man — presentar el argumento del adversario en su forma más fuerte — suele enseñarse como estrategia. También es, en silencio, una disciplina espiritual: te pide gastar tu mejor imaginación en alguien con quien no estás de acuerdo. Escribir el caso del otro lado con tanta justicia que ellos lo firmarían es practicar un respeto más profundo que la retórica." },
        { it: "The practice changes the practitioner. Writers who steel-man habitually report that their opponents become, in their minds, people rather than categories — and prose written about people is more accurate than prose written about categories. The technique does not require agreement, or even warmth. It requires only the willingness to be fair at cost, which is most of what any ethical life asks anyway.", es: "La práctica transforma a quien la practica. Los escritores que hacen steel-man por costumbre reportan que sus adversarios se vuelven, en su mente, personas en lugar de categorías — y la prosa escrita sobre personas es más precisa que la prosa escrita sobre categorías. La técnica no exige acuerdo, ni siquiera calidez. Exige solo la voluntad de ser justo a un costo, que es casi todo lo que cualquier vida ética pide de todos modos." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de esgrima deportiva", "El steel-man como disciplina espiritual: imaginar con justicia al adversario", "Cómo ganar cualquier debate familiar"],
        answer: 1,
        why: "El título empareja blindar (steel) al adversario con ablandar el corazón: la dimensión ética del steel-man.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Steelmanning is a spiritual discipline of fair imagination toward opponents", "Opponents should always be categorized quickly", "Persuasion requires mocking the other side"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["You spend your best imagination on someone you disagree with", "The other side's case should be written so fairly they would sign it", "Prose about people is more accurate than prose about categories"],
        distractors: ["Agreement is required before steelmanning", "Warmth must precede every argument", "Categories make writing more precise"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The steel-man asks you to spend your best imagination on opponents.",
          "Write the other side's case so fairly they would sign it.",
          "Opponents become people rather than categories.",
          "The office debate club meets on alternate Thursdays at lunch.",
          "Fairness at cost is what any ethical life asks.",
        ],
        intruder: 3,
        why: "El horario del club de debate es un dato logístico ajeno a la disciplina del steel-man.",
      },
    },
    {
      id: "md-en-c1-11-3", theme: "qui e ora",
      title: "The reader in the room", titleEs: "El lector en la sala",
      minutes: 2,
      paragraphs: [
        { it: "An op-ed is addressed to thousands and read by one — one person, alone, on a bus, deciding whether the next paragraph is worth it. Writing with presence means writing to that one: not the abstract 'public opinion,' not the trolls already composing their replies, but the single reader who is here, now, curious and unconvinced. Everything in the genre gets easier when the audience has a face.", es: "Un artículo de opinión se dirige a miles y lo lee uno — una persona, sola, en un autobús, decidiendo si el próximo párrafo vale la pena. Escribir con presencia significa escribirle a ese uno: no a la «opinión pública» abstracta, no a los troles que ya redactan sus réplicas, sino al lector único que está aquí, ahora, curioso y no convencido. Todo en el género se vuelve más fácil cuando la audiencia tiene rostro." },
        { it: "The discipline is subtractive. Each sentence, ask: would I say this to the reader's face, at this speed, with this much certainty? The sentence written to impress a crowd tends to perform; the sentence written to one person tends to connect. Presence in writing is not a mood; it is an addressing decision, made again at every comma, to stay in the room where the actual reader is.", es: "La disciplina es sustractiva. En cada frase, pregúntate: ¿le diría esto a la cara del lector, a esta velocidad, con esta certeza? La frase escrita para impresionar a una multitud tiende a actuar; la frase escrita para una sola persona tiende a conectar. La presencia en la escritura no es un estado de ánimo; es una decisión de destinatario, tomada de nuevo en cada coma, de quedarse en la sala donde está el lector real." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de marketing viral", "Escribir para el lector único y presente, no para la multitud imaginaria", "Cómo moderar comentarios en redes sociales"],
        answer: 1,
        why: "El título anuncia al lector real en su sala: la presencia como decisión de escritura.",
      },
      sequence: {
        instr: "Ordena la disciplina:",
        events: [
          "Imagine thousands of readers and their imagined replies",
          "Reduce the audience to one reader on a bus",
          "Ask of each sentence whether you would say it to their face",
          "Drop the sentences written to impress a crowd",
          "Stay in the room where the actual reader is",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Before you revise the draft, do this once. Close your eyes and picture one reader: not a critic, not a crowd — a neighbor, maybe, on the morning bus. Give them a coat and a coffee. Now read your opening paragraph again, silently, as if handing it to them on paper. Notice which sentence makes them look up, and which one makes them look out the window. Keep the first kind. Revise the second until it earns their eyes.",
        questions: [
          { q: "Who are you asked to picture?", kind: "literal", options: ["One reader, like a neighbor on the morning bus", "A panel of famous critics", "Your entire social media following"], answer: 0, why: "«Picture one reader — a neighbor, maybe, on the morning bus»." },
          { q: "What are you reading again silently?", kind: "literal", options: ["The whole newspaper", "Your opening paragraph", "The reader's reply"], answer: 1, why: "«Read your opening paragraph again, silently»." },
          { q: "What does 'look out the window' indicate?", kind: "inferencial", options: ["A sentence that loses the reader's attention", "A beautiful view of the city", "The bus arriving at the stop"], answer: 0, why: "Mirar por la ventana significa perder la atención: la frase no la gana." },
          { q: "What should happen to sentences of the second kind?", kind: "inferencial", options: ["Delete the entire draft", "Move them to the conclusion", "Revise them until they earn the reader's eyes"], answer: 2, why: "«Revise the second until it earns their eyes»." },
        ],
      },
    },
  ],

  "en-cu-c1-12": [
    {
      id: "md-en-c1-12-1", theme: "relax fisico",
      title: "Planting your feet before the talk", titleEs: "Plantar los pies antes de la charla",
      minutes: 2,
      paragraphs: [
        { it: "Five minutes before a TEDx talk, the body invents emergencies. The hands want a phone, the stomach a second breakfast, the balance a wall to lean on. Grounding answers all three with one instruction: plant your feet, both of them, and feel the floor agree to hold you. The stage is just a floor with better lighting; the body needs to hear it.", es: "Cinco minutos antes de una charla TEDx, el cuerpo inventa emergencias. Las manos quieren un teléfono, el estómago un segundo desayuno, el equilibrio una pared donde recostarse. El aterrizaje responde a las tres con una sola instrucción: planta los pies, los dos, y siente que el suelo acepta sostenerte. El escenario es solo un suelo con mejor iluminación; el cuerpo necesita oírlo." },
        { it: "The posture is unglamorous and effective. Feet at hip width, knees soft, spine tall without military effort, the weight dropping evenly into the ground. From that base, one long exhale, and the eyes can finally look at the audience instead of scanning for exits. Presence, in public speaking, is a weight-distribution fact before it is a spiritual achievement.", es: "La postura no tiene glamour y es eficaz. Pies al ancho de caderas, rodillas sueltas, columna alta sin esfuerzo militar, el peso cayendo parejo hacia el suelo. Desde esa base, una exhalación larga, y los ojos pueden por fin mirar al público en lugar de buscar las salidas. La presencia, al hablar en público, es un hecho de distribución del peso antes que un logro espiritual." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ensayo sobre diseño de escenarios", "Aterrizar el cuerpo con los pies firmes antes de hablar en público", "Cómo bailar antes de una presentación"],
        answer: 1,
        why: "El título anuncia el aterrizaje físico previo a la charla: los pies plantados.",
      },
      quiz: [
        { q: "What does the body invent five minutes before a talk?", kind: "literal", options: ["Emergencies", "New jokes", "A full script"], answer: 0, why: "«Five minutes before a TEDx talk, the body invents emergencies»." },
        { q: "What can be inferred about a speaker who is still scanning for exits?", kind: "inferencial", options: ["Their attention is still caught in the body's emergencies", "They have memorized the script", "They dislike the audience"], answer: 0, why: "El texto opone mirar al público a buscar las salidas: quien busca salidas sigue en modo emergencia." },
        { q: "Why does grounding come before 'spiritual achievement'?", kind: "critica", options: ["Because presence starts as a weight-distribution fact", "Because spirituality is banned on stages", "Because the floor decides the lighting"], answer: 0, why: "«A weight-distribution fact before it is a spiritual achievement»: la presencia empieza en el cuerpo." },
      ],
      vf: [
        { text: "The text recommends scanning for exits while speaking.", value: false, why: "«The eyes can finally look at the audience instead of scanning for exits»." },
        { text: "Planting both feet helps the hands and the stomach settle.", value: true, why: "«Grounding answers all three with one instruction» — manos, estómago y equilibrio." },
        { text: "The recommended posture includes soft knees and an even distribution of weight.", value: true, why: "«Knees soft, the weight dropping evenly into the ground»." },
      ],
    },
    {
      id: "md-en-c1-12-2", theme: "relax mentale",
      title: "One idea, one mind", titleEs: "Una idea, una mente",
      minutes: 3,
      paragraphs: [
        { it: "The TED commandment — one idea per talk — is also a prescription for the speaker's mind. Most stage panic is multitasking wearing a costume: the talk, the clock, the remembered feedback from rehearsal two, the imagined review. Mental relaxation arrives when everything except the through-line is demoted to staff. One idea is not a limitation; it is the load-bearing simplicity that lets a mind stay standing.", es: "El mandamiento TED — una idea por charla — es también una receta para la mente del orador. La mayoría del pánico escénico es multitarea disfrazada: la charla, el reloj, la retroalimentación recordada del segundo ensayo, la reseña imaginada. El relax mental llega cuando todo lo que no es el hilo conductor es degradado a personal de apoyo. Una idea no es una limitación; es la sencillez estructural que permite que una mente siga en pie." },
        { it: "Simplifying the talk simplifies the thinker. Write the through-line on a card; read it before walking out; let every other worry check its coat at the door. What remains in the working memory is a sentence and a room. Speakers who trust this economy report the same discovery: the audience never misses what the speaker dropped, because the audience was only ever following the one thread.", es: "Simplificar la charla simplifica al pensador. Escribe el hilo conductor en una tarjeta; léela antes de salir; deja que cada otra preocupación deje su abrigo en la puerta. Lo que queda en la memoria de trabajo es una frase y una sala. Los oradores que confían en esta economía reportan el mismo descubrimiento: el público nunca extraña lo que el orador dejó caer, porque el público solo estuvo siguiendo, desde el principio, el único hilo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un análisis del formato TED desde la televisión", "Una sola idea como descanso mental: simplificar la charla simplifica al orador", "Cómo memorizar cuarenta diapositivas"],
        answer: 1,
        why: "El título iguala una idea con una mente: la economía mental del formato TED.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Committing to one idea frees the speaker's mind from multitasking panic", "Talks fail when they contain too few slides", "Memorizing forty slides guarantees success"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Most stage panic is multitasking wearing a costume", "The through-line goes on a card read before walking out", "The audience was only ever following the one thread"],
        distractors: ["Working memory improves with more deadlines", "The clock should be watched throughout the talk", "Rehearsal feedback should be ignored"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Most stage panic is multitasking wearing a costume.",
          "One idea is the load-bearing simplicity that keeps a mind standing.",
          "Every other worry checks its coat at the door.",
          "The venue's greenroom stocks four brands of sparkling water.",
          "The audience was only ever following the one thread.",
        ],
        intruder: 3,
        why: "Las marcas de agua del camerino son un detalle de logística ajeno a la economía mental de la charla.",
      },
    },
    {
      id: "md-en-c1-12-3", theme: "meditazione",
      title: "The red dot meditation", titleEs: "La meditación del punto rojo",
      minutes: 2,
      paragraphs: [
        { it: "The red dot of a recording camera is a strange meditation object: unblinking, judgmental, the eye of a future audience. The practiced speaker makes peace with it the way meditators make peace with the breath — by returning to it, again and again, without demanding that it blink. The dot is not the enemy; the dot is simply where attention goes when fear chooses the destination.", es: "El punto rojo de una cámara es un objeto de meditación extraño: sin parpadeo, con juicio, el ojo de un público futuro. El orador practicado hace las paces con él como los meditadores hacen las paces con la respiración — volviendo a él, una y otra vez, sin exigirle que parpadee. El punto no es el enemigo; el punto es simplemente adonde va la atención cuando el miedo elige el destino." },
        { it: "The final pre-talk practice, then, is a redirect. Eyes to the back wall for scale; then to the friendly face in row three for warmth; then to the dot for one calm second, acknowledging it like a colleague. Rotate: wall, face, dot. By the third cycle the camera has become furniture, and the speaker's attention has returned to its rightful home — the people, the idea, the five minutes that are the only ones that exist.", es: "La práctica final previa a la charla es, entonces, una redirección. Los ojos a la pared del fondo por escala; luego a la cara amable de la fila tres por calidez; luego al punto un segundo sereno, saludándolo como a un colega. Rota: pared, cara, punto. Al tercer ciclo la cámara se ha vuelto mueble, y la atención del orador ha regresado a su hogar legítimo — las personas, la idea, los cinco minutos que son los únicos que existen." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de videovigilancia", "Hacer las paces con la cámara: el punto rojo como objeto de meditación antes de la charla", "Cómo editar un video viral"],
        answer: 1,
        why: "El título nombra la práctica meditativa frente al punto rojo de la cámara.",
      },
      sequence: {
        instr: "Ordena la práctica:",
        events: [
          "Notice fear sending attention to the red dot",
          "Send the eyes to the back wall for scale",
          "Find the friendly face in row three for warmth",
          "Return to the dot for one calm second like a colleague",
          "Rotate wall, face, dot until the camera becomes furniture",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Last minute before you walk on. Stand tall and find three points in the room: the back wall, a kind face, and the red light of the camera. Breathe in on the wall — it gives you scale. Breathe out on the face — it gives you warmth. Now look at the dot and say, inside your mind: you are just Tuesday. Then walk out, and give your first sentence to the kind face, not to the lens. The recording will take care of itself; it always does.",
        questions: [
          { q: "What three points do you find in the room?", kind: "literal", options: ["The exit, the clock, and the floor", "The podium, the mic, and the screen", "The back wall, a kind face, and the red light"], answer: 2, why: "«The back wall, a kind face, and the red light of the camera»." },
          { q: "What does the kind face give you?", kind: "literal", options: ["Scale", "Volume", "Warmth"], answer: 2, why: "«Breathe out on the face — it gives you warmth»." },
          { q: "What does telling the dot 'you are just Tuesday' accomplish?", kind: "inferencial", options: ["It shrinks the camera's threat to ordinary size", "It starts the recording early", "It replaces the through-line"], answer: 0, why: "Reducir la cámara a «un martes cualquiera» le quita amenaza: la vuelve cotidiana." },
          { q: "Why give the first sentence to the kind face?", kind: "inferencial", options: ["Because warmth steadies the opening better than the lens does", "Because the camera is broken", "Because the audience sits on the left"], answer: 0, why: "La calidez de la cara amable sostiene la apertura; la lente no devuelve nada." },
        ],
      },
    },
  ],
};
