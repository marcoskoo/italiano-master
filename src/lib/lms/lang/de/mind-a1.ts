import type { MindReading } from "../../cambridge-mind";

/* ═══ DE A1 · Mind-Lesetexte (Achtsamkeit) — 3 pro Einheit ═══════════
   Metodología idéntica a las italianas (v9.13): 7 estrategias de
   comprensión lectora y de escucha. Textos en Hochdeutsch A1 (tuteo
   alemán), traducción española a la vista. Campos `.it` = alemán
   (lengua de estudio), `.es` = español. Rotación por posición: L1 =
   predict + quiz (literal/inferencial/crítica) + V/F; L2 = predict +
   ideas + intruso; L3 = predict + secuencia + escucha. Temas fijos
   (claves italianas): meditazione · spiritualità · qui e ora ·
   relax fisico · relax mentale (7-8 lecturas por tema). */

export const DE_MIND_A1: Record<string, MindReading[]> = {
  "de-cu-a1-01": [
    {
      id: "md-de-a1-01-1", theme: "meditazione",
      title: "Mein erster Atemzug", titleEs: "Mi primera respiración",
      minutes: 2,
      paragraphs: [
        { it: "Setz dich. Schließ die Augen. Nimm einen langsamen Atemzug. Das ist dein erster Atemzug der Praxis. Du bist hier, und das ist genug.", es: "Siéntate. Cierra los ojos. Da una respiración lenta. Esta es tu primera respiración de la práctica. Estás aquí, y esto es suficiente." },
        { it: "Meditation ist einfach. Du atmest ein, du atmest aus. Dein Kopf spricht, und das ist okay. Du kommst zum Atem zurück, immer wieder, wie ein guter Freund.", es: "La meditación es simple. Inhalas, exhalas. Tu mente habla, y está bien. Vuelves a la respiración, una y otra vez, como un buen amigo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual avanzado de yoga", "Una introducción sencilla a meditar con la respiración", "Una clase de gimnasia"],
        answer: 1,
        why: "El título «Mein erster Atemzug» apunta a un primer acercamiento a la respiración, no a algo avanzado.",
      },
      quiz: [
        { q: "Was machst du zuerst?", kind: "literal", options: ["Du läufst los", "Du setzt dich und schließt die Augen", "Du sprichst laut"], answer: 1, why: "«Setz dich. Schließ die Augen»: está literal en la primera frase." },
        { q: "Was passiert mit deinem Kopf?", kind: "inferencial", options: ["Dein Kopf spricht, und das ist okay", "Dein Kopf ist sofort still", "Du stoppst alle Gedanken"], answer: 0, why: "«Dein Kopf spricht, und das ist okay»: se infiere que no hay que bloquear la mente." },
        { q: "Welcher Titel passt zur Idee am besten?", kind: "critica", options: ["Meditation ist harte Arbeit für Sportler", "Meditation ist einfach: atmen und zurückkommen", "Meditation ist nur für Experten"], answer: 1, why: "La idea central del texto es la sencillez: respirar y volver." },
      ],
      vf: [
        { text: "Du nimmst einen schnellen Atemzug.", value: false, why: "El texto dice «einen langsamen Atemzug»: lenta, no rápida." },
        { text: "Es ist okay, wenn dein Kopf spricht.", value: true, why: "«Dein Kopf spricht, und das ist okay»." },
        { text: "Du kommst immer wieder zum Atem zurück.", value: true, why: "«Immer wieder, wie ein guter Freund»: una y otra vez." },
      ],
    },
    {
      id: "md-de-a1-01-2", theme: "qui e ora",
      title: "Der erste Abend im Sprachcafé", titleEs: "La primera tarde en el Sprachcafé",
      minutes: 2,
      paragraphs: [
        { it: "Du bist neu in der Stadt. Überall sind fremde Gesichter, neue Wörter, neue Fragen. Atme einmal tief. Fühl den Stuhl unter dir und die warme Tasse in deiner Hand. Genau hier beginnt dein Abend.", es: "Eres nuevo en la ciudad. Por todas partes hay caras desconocidas, palabras nuevas, preguntas nuevas. Respira hondo una vez. Siente la silla bajo ti y la taza tibia en tu mano. Justo aquí empieza tu tarde." },
        { it: "Du musst nichts erzwingen. Höre nur zu. Jede Stimme um dich herum ist genau jetzt, jedes Lachen auch. Wenn du da bist, mit beiden Füßen auf dem Boden, dann ist dieser Moment dein kleines Zuhause.", es: "No tienes que forzar nada. Solo escucha. Cada voz a tu alrededor es ahora mismo, y cada risa también. Si estás ahí, con los dos pies en el suelo, ese momento es tu pequeño hogar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de los bares de Berlín", "Estar presente en un sitio nuevo (aquí y ahora)", "Un examen de alemán"],
        answer: 1,
        why: "El título apunta a la experiencia del primer día en un lugar nuevo, no a guías ni exámenes.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Du bist neu in der Stadt.",
          "Du fühlst den Stuhl unter dir.",
          "Jede Stimme um dich herum ist genau jetzt.",
          "Das Sprachcafé kostet fünf Euro Eintritt.",
          "Wenn du da bist, ist der Moment dein Zuhause.",
        ],
        intruder: 3,
        why: "El precio de la entrada no pertenece a la experiencia del momento presente: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Neue Orte sind immer stressig", "Da sein: dieser Moment ist dein kleines Zuhause", "Man muss viel sprechen, um Freunde zu finden"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Du fühlst den Stuhl unter dir", "Du hörst nur zu", "Du bist mit beiden Füßen auf dem Boden"],
        distractors: ["Du trinkst drei Tassen Kaffee", "Der Stuhl ist sehr teuer", "Du sprichst mit jedem im Café"],
      },
    },
    {
      id: "md-de-a1-01-3", theme: "relax fisico",
      title: "Die Schultern nach unten", titleEs: "Los hombros hacia abajo",
      minutes: 2,
      paragraphs: [
        { it: "Schau auf deine Schultern. Sind sie oben, direkt neben den Ohren? Lass sie langsam nach unten sinken. Fühl den Unterschied. Dein Körper sagt leise danke.", es: "Mira tus hombros. ¿Están arriba, justo al lado de las orejas? Deja que caigan despacio. Siente la diferencia. Tu cuerpo da las gracias en voz baja." },
        { it: "Wir tragen den Stress des ganzen Tages in den Schultern. Fünfmal am Tag: Schultern checken — unten, weich, locker. Das ist eine kleine Angewohnheit mit einem großen Geschenk.", es: "Cargamos el estrés de todo el día en los hombros. Cinco veces al día: revisa los hombros — abajo, blandos, sueltos. Es un hábito pequeño con un gran regalo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ejercicio de gimnasio con pesas", "Relajar los hombros a lo largo del día", "Una clase de natación"],
        answer: 1,
        why: "«Die Schultern nach unten» sugiere soltar tensión, no levantar pesas.",
      },
      sequence: {
        instr: "Ordena los pasos del hábito:",
        events: ["Schau auf deine Schultern", "Sie sind oben, direkt neben den Ohren", "Lass sie langsam nach unten sinken", "Fühl den Unterschied", "Wiederhole das fünfmal am Tag"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Willkommen zu deiner Körperpause. Sitz gerade und atme einmal. Jetzt lass die Schultern nach unten sinken, weich und leicht. Fühl den Raum zwischen den Ohren und den Schultern. Bleib drei Atemzüge hier. Das ist dein Körper, der danke sagt.",
        questions: [
          { q: "Was machst du mit den Schultern?", kind: "literal", options: ["Du hebst sie hoch", "Du lässt sie nach unten sinken", "Du schüttelst sie schnell"], answer: 1, why: "«Lass die Schultern nach unten sinken»." },
          { q: "Wie lange bleibst du hier?", kind: "inferencial", options: ["Drei Atemzüge", "Drei Stunden", "Den ganzen Tag"], answer: 0, why: "«Bleib drei Atemzüge hier»: se infiere del cierre." },
          { q: "Wie sitzt du am Anfang?", kind: "literal", options: ["Gerade", "Gebückt", "Auf dem Tisch"], answer: 0, why: "«Sitz gerade»." },
          { q: "Was sagt dein Körper am Ende?", kind: "inferencial", options: ["Danke", "Nichts", "Gute Nacht"], answer: 0, why: "«Das ist dein Körper, der danke sagt»." },
        ],
      },
    },
  ],

  "de-cu-a1-02": [
    {
      id: "md-de-a1-02-1", theme: "spiritualità",
      title: "Die Familie der Welt", titleEs: "La familia del mundo",
      minutes: 3,
      paragraphs: [
        { it: "Spiritualität ist nicht weit weg. Sie ist in der Küche, in einem Anruf bei deiner Mutter, im Lachen eines Kindes. Wenn du liebst, praktizierst du schon Spiritualität.", es: "La espiritualidad no está lejos. Está en la cocina, en una llamada a tu madre, en la risa de un niño. Cuando amas, ya estás practicando espiritualidad." },
        { it: "Heute: Ruf eine Person an, die du liebst. Höre nur ihre Stimme, ohne Eile und ohne Ablenkung. Das ist genug. In vielen Traditionen sind Dienst und Liebe die erste Übung.", es: "Hoy: llama a una persona que amas. Escucha solo su voz, sin prisa y sin distracciones. Eso basta. En muchas tradiciones, el servicio y el amor son el primer ejercicio." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Religiones comparadas", "Espiritualidad cotidiana en la familia y el amor", "Un anuncio de telefonía"],
        answer: 1,
        why: "El título «familia del mundo» apunta a vínculos humanos, no a teología ni productos.",
      },
      quiz: [
        { q: "Wo ist Spiritualität, laut Text?", kind: "literal", options: ["In der Küche und in einem Anruf", "Nur in Tempeln", "In teuren Büchern"], answer: 0, why: "«Sie ist in der Küche, in einem Anruf bei deiner Mutter»." },
        { q: "Was machst du heute?", kind: "inferencial", options: ["Du rufst eine Person an, die du liebst", "Du reist in einen Tempel", "Du kaufst ein Buch"], answer: 0, why: "Se infiere de «Heute: Ruf eine Person an, die du liebst»." },
        { q: "Welche Idee passt am besten?", kind: "critica", options: ["Liebe und Dienst sind eine spirituelle Praxis", "Spiritualität braucht besondere Kleider", "Anrufe sind Zeitverschwendung"], answer: 0, why: "La idea central: amar y servir ya es práctica espiritual." },
      ],
      vf: [
        { text: "Spiritualität ist nur an besonderen Orten.", value: false, why: "El texto la sitúa en la cocina y en una llamada: en lo cotidiano." },
        { text: "Die Stimme einer geliebten Person zu hören ist genug.", value: true, why: "«Höre nur ihre Stimme. Das ist genug»." },
        { text: "Viele Traditionen nennen Dienst und Liebe die erste Übung.", value: true, why: "«Dienst und Liebe sind die erste Übung»." },
      ],
    },
    {
      id: "md-de-a1-02-2", theme: "relax mentale",
      title: "Ein Kopf wie der Himmel", titleEs: "Una mente como el cielo",
      minutes: 2,
      paragraphs: [
        { it: "Dein Kopf ist wie der Himmel. Gedanken sind Wolken. Manche Wolken sind dunkel, manche sind weiß und schnell. Der Himmel bleibt. Der Himmel ist immer da, still und offen.", es: "Tu mente es como el cielo. Los pensamientos son nubes. Algunas nubes son oscuras; otras, blancas y veloces. El cielo permanece. El cielo siempre está ahí, quieto y abierto." },
        { it: "Wenn ein schlechter Gedanke kommt, kämpfe nicht dagegen. Schau nur, wie die Wolke vorbeizieht. Hinter jeder Wolke ist der Himmel noch blau. Das ist mentale Entspannung: Du bist der Himmel, nicht die Wolke.", es: "Cuando llega un mal pensamiento, no luches contra él. Solo mira pasar la nube. Detrás de cada nube el cielo sigue azul. Esta es la relajación mental: tú eres el cielo, no la nube." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["El pronóstico del tiempo", "Una metáfora para relajar la mente: pensamientos como nubes", "Un texto de astronomía"],
        answer: 1,
        why: "La metáfora cielo-mente es un clásico de la relajación; el título lo anticipa.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Gedanken sind Wolken, dunkle und weiße.",
          "Der Himmel bleibt, still und offen.",
          "Wenn ein schlechter Gedanke kommt, schaust du nur zu.",
          "Wolken bringen am Montag Regen für die Bauern.",
          "Du bist der Himmel, nicht die Wolke.",
        ],
        intruder: 3,
        why: "El dato agrícola es ajeno a la metáfora mental: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Gedanken sind Wolken; du bist der Himmel, der offen bleibt", "Wolken sagen Regen für morgen voraus", "Du musst gegen deine Gedanken kämpfen"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Gedanken sind Wolken", "Du schaust, wie die Wolke vorbeizieht", "Der Himmel ist immer da"],
        distractors: ["Du malst die Wolken weiß an", "Der Himmel ist heute wütend", "Wolken sind gefährlich für Piloten"],
      },
    },
    {
      id: "md-de-a1-02-3", theme: "meditazione",
      title: "Drei Atemzüge mit Oma", titleEs: "Tres respiraciones con la abuela",
      minutes: 3,
      paragraphs: [
        { it: "Meine Oma sitzt jeden Morgen in ihrem alten Sessel. Sie trinkt ihren Tee in Stille, ohne Radio, ohne Eile. Dann sagt sie drei Worte: «Sitzen, atmen, lächeln.» Das ist ihre ganze Praxis.", es: "Mi abuela se sienta cada mañana en su viejo sillón. Bebe su té en silencio, sin radio, sin prisa. Luego dice tres palabras: «Sentarse, respirar, sonreír». Esa es toda su práctica." },
        { it: "Sie ist achtzig Jahre alt, und ihr Kopf ist still wie ein See am Morgen. Omas wissen es: Glück ist einfach, und es wohnt in kleinen Momenten — wie in einer Teetasse.", es: "Tiene ochenta años y su mente está serena como un lago de mañana. Las abuelas lo saben: la felicidad es simple y vive en momentos pequeños, como en una taza de té." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una biografía completa", "La práctica sencilla de una abuela: sentarse, respirar, sonreír", "Una receta de té"],
        answer: 1,
        why: "El título une tres respiraciones con la figura de la abuela: apunta a una práctica cotidiana.",
      },
      sequence: {
        instr: "Ordena la práctica de la abuela según el texto:",
        events: ["Oma sitzt jeden Morgen in ihrem Sessel", "Sie trinkt ihren Tee in Stille", "Sie sagt drei Worte: Sitzen, atmen, lächeln", "Ihr Kopf ist still wie ein See am Morgen", "Glück wohnt in kleinen Momenten"],
      },
      listen: {
        intro: "Escucha y responde:",
        audioIt: "Guten Morgen. Das ist deine Übung mit drei Atemzügen. Sitz wie meine Oma in ihrem alten Sessel. Atme langsam ein. Atme langsam aus. Jetzt lächle ein bisschen. Fühl dein Gesicht weich werden. Drei Atemzüge, ein Lächeln. Dein Tag beginnt sanft.",
        questions: [
          { q: "Wer sitzt so, in der Geschichte?", kind: "literal", options: ["Eine Oma in ihrem Sessel", "Eine Lehrerin in der Schule", "Ein Baby im Auto"], answer: 0, why: "«Sitz wie meine Oma in ihrem alten Sessel»." },
          { q: "Was kommt nach den drei Atemzügen?", kind: "inferencial", options: ["Du öffnest dein Handy", "Du lächelst ein bisschen", "Du läufst zur Arbeit"], answer: 1, why: "«Jetzt lächle ein bisschen»: se infiere el orden final." },
          { q: "Wie beginnt dein Tag?", kind: "literal", options: ["Sanft", "Wütend", "Zu spät"], answer: 0, why: "«Dein Tag beginnt sanft»." },
          { q: "Was macht dein Gesicht beim Lächeln?", kind: "inferencial", options: ["Es wird weich", "Es wird hart", "Es wird rot"], answer: 0, why: "«Fühl dein Gesicht weich werden»: la cara se relaja." },
        ],
      },
    },
  ],

  "de-cu-a1-03": [
    {
      id: "md-de-a1-03-1", theme: "qui e ora",
      title: "Der Kaffee ist warm", titleEs: "El café está caliente",
      minutes: 2,
      paragraphs: [
        { it: "Du hältst deinen Kaffee mit beiden Händen. Die Tasse ist warm. Der Geruch ist stark und gut. Genau jetzt existiert nichts anderes: nur du, die Tasse und dieser eine Moment.", es: "Sostienes tu café con las dos manos. La taza está tibia. El aroma es intenso y bueno. Ahora mismo no existe nada más: solo tú, la taza y este único momento." },
        { it: "Das ist die Praxis des Hier und Jetzt. Du denkst nicht an gestern. Du machst dir keine Sorgen um morgen. Der Kaffee ist warm, und du bist ganz da — mehr braucht es nicht.", es: "Esta es la práctica del aquí y el ahora. No piensas en el ayer. No te preocupas por el mañana. El café está caliente y estás del todo: no hace falta más." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una receta de café", "Estar presente con una taza de café (aquí y ahora)", "Una crítica de cafeterías"],
        answer: 1,
        why: "El título apunta a la experiencia sensorial del café, no a recetas ni críticas.",
      },
      quiz: [
        { q: "Wie hältst du den Kaffee?", kind: "literal", options: ["Mit beiden Händen", "Mit einem Finger", "Hinter dem Rücken"], answer: 0, why: "«Du hältst deinen Kaffee mit beiden Händen»." },
        { q: "Woran denkst du nicht?", kind: "inferencial", options: ["An gestern und morgen", "An den Kaffeepreis", "An deine Arbeit"], answer: 0, why: "«Du denkst nicht an gestern» y «keine Sorgen um morgen»: ni ayer ni mañana." },
        { q: "Was bedeutet «Hier und Jetzt» hier?", kind: "critica", options: ["Nur diesen einen Moment erleben", "Schnell trinken und gehen", "An einem anderen Ort sein"], answer: 0, why: "La idea central: vivir solo este momento." },
      ],
      vf: [
        { text: "Die Tasse ist kalt.", value: false, why: "El texto dice «Die Tasse ist warm»: está tibia." },
        { text: "Du machst dir keine Sorgen um morgen.", value: true, why: "Está literal en el segundo párrafo." },
        { text: "Du hältst die Tasse mit einer Hand.", value: false, why: "«Mit beiden Händen»: con las dos manos." },
      ],
    },
    {
      id: "md-de-a1-03-2", theme: "relax fisico",
      title: "Der Kiefer löst sich", titleEs: "La mandíbula se suelta",
      minutes: 2,
      paragraphs: [
        { it: "Spür deine Zähne. Berühren sie sich gerade? Lass den Kiefer weich werden. Die Zunge liegt unten, die Lippen sind locker, die Wangen sind ruhig. Nichts muss jetzt passieren.", es: "Siente tus dientes. ¿Se tocan ahora mismo? Deja que la mandíbula se ablande. La lengua descansa abajo, los labios están sueltos, las mejillas tranquilas. Nada tiene que pasar ahora." },
        { it: "Wir pressen den Kiefer den ganzen Tag zusammen, oft ohne es zu wissen. Beim Kaffee kommt die beste Pause: Gesicht weich, Kiefer weich, Atem ruhig. Genieße die Stille.", es: "Apretamos la mandíbula todo el día, a menudo sin saberlo. Con el café llega la mejor pausa: cara blanda, mandíbula blanda, respiración tranquila. Disfruta el silencio." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un tratamiento dental", "Soltar la mandíbula y relajar la cara", "Un vídeo de cocina"],
        answer: 1,
        why: "«Der Kiefer löst sich» apunta a soltar tensión física, no a odontología.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Spür deine Zähne.",
          "Lass den Kiefer weich werden.",
          "Die Lippen sind locker und die Wangen ruhig.",
          "Zahnpasta kostet heute drei Euro.",
          "Genieße die Stille beim Kaffee.",
        ],
        intruder: 3,
        why: "El precio de la pasta de dientes es ajeno al ejercicio de relajación: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Den Kiefer weich werden lassen: eine kleine Pause fürs Gesicht", "Zähne putzen ist sehr wichtig", "Kaffee schadet den Zähnen"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Die Zunge liegt unten", "Wir pressen den Kiefer oft ohne es zu wissen", "Der Atem wird ruhig"],
        distractors: ["Du isst einen Keks dazu", "Die Zähne müssen fest zusammen", "Der Kiefer ist kaputt"],
      },
    },
    {
      id: "md-de-a1-03-3", theme: "spiritualità",
      title: "Ein Moment der Dankbarkeit", titleEs: "Un momento de gratitud",
      minutes: 3,
      paragraphs: [
        { it: "Vor dem Essen machst du eine kleine Pause. Eine Sekunde nur. Du denkst: Danke. Danke für das Brot, für die Hände, die es gebacken haben, und für diesen Tisch hier.", es: "Antes de comer haces una pequeña pausa. Solo un segundo. Piensas: gracias. Gracias por el pan, por las manos que lo han horneado y por esta mesa." },
        { it: "Dankbarkeit ist eine einfache Spiritualität. Sie braucht kein Geld und keine großen Worte. Wenn du still danke sagst, wird der Moment größer, und das Essen schmeckt besser.", es: "La gratitud es una espiritualidad sencilla. No necesita dinero ni grandes palabras. Cuando das las gracias en silencio, el momento se hace más grande y la comida sabe mejor." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un menú de restaurante", "Un pequeño gesto de gratitud antes de comer", "Una dieta nueva"],
        answer: 1,
        why: "El título apunta al agradecimiento previo a la comida.",
      },
      sequence: {
        instr: "Ordena el gesto según el texto:",
        events: ["Vor dem Essen machst du eine Pause", "Du denkst das Wort Danke", "Du dankst für das Brot und die Hände", "Der Moment wird größer", "Das Essen schmeckt besser"],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "Setz dich an den Tisch. Bevor du isst: eine kleine Pause. Atme einmal. Denk an alle Hände, die dieses Essen möglich machen. Sag still danke. Jetzt nimm die Gabel und iss langsam. Vielleicht schmeckt heute alles ein bisschen besser.",
        questions: [
          { q: "Was machst du, bevor du isst?", kind: "literal", options: ["Eine kleine Pause", "Ein Foto", "Ein Telefonat"], answer: 0, why: "«Bevor du isst: eine kleine Pause»." },
          { q: "An wen denkst du beim Danken?", kind: "inferencial", options: ["An die Hände, die das Essen möglich machen", "An die Rechnung", "An morgen"], answer: 0, why: "«Denk an alle Hände, die dieses Essen möglich machen»." },
          { q: "Wie isst du danach?", kind: "literal", options: ["Langsam", "Sehr schnell", "Im Stehen"], answer: 0, why: "«Nimm die Gabel und iss langsam»." },
          { q: "Was passiert vielleicht heute?", kind: "inferencial", options: ["Alles schmeckt ein bisschen besser", "Das Essen ist kalt", "Du isst nichts"], answer: 0, why: "«Vielleicht schmeckt heute alles ein bisschen besser»." },
        ],
      },
    },
  ],

  "de-cu-a1-04": [
    {
      id: "md-de-a1-04-1", theme: "relax mentale",
      title: "Gehen ohne Eile", titleEs: "Caminar sin prisa",
      minutes: 2,
      paragraphs: [
        { it: "Du gehst durch die Stadt. Die Beine kennen den Weg ganz allein. Lass die Schultern locker und den Atem ruhig. Du musst nirgendwo schnell hin — wirklich nicht.", es: "Caminas por la ciudad. Las piernas conocen el camino solas. Deja los hombros sueltos y la respiración tranquila. No tienes que llegar rápido a ninguna parte, de verdad." },
        { it: "Ein Gedanke sagt vielleicht: schneller! Lächle nur und bleib bei deinen Schritten. Der Weg ist lang genug für dich, und die Stadt wartet auf niemanden. Langsam gehen ist auch Ankommen.", es: "Un pensamiento quizá dice: ¡más rápido! Sonríe solo y quédate con tus pasos. El camino es lo bastante largo para ti, y la ciudad no espera a nadie. Caminar despacio también es llegar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una competición de atletismo", "Caminar despacio, sin prisa, como relajación mental", "Las reglas de tráfico"],
        answer: 1,
        why: "«Gehen ohne Eile» apunta a caminar sin prisa, no a competir.",
      },
      quiz: [
        { q: "Wer kennt den Weg?", kind: "literal", options: ["Deine Beine", "Dein Handy", "Ein Freund"], answer: 0, why: "«Die Beine kennen den Weg ganz allein»." },
        { q: "Was sagt ein Gedanke vielleicht?", kind: "inferencial", options: ["Schneller!", "Langsamer!", "Gute Nacht!"], answer: 0, why: "Se infiere de la reacción con la sonrisa: la mente pide prisa." },
        { q: "Was bedeutet «Langsam gehen ist auch Ankommen»?", kind: "critica", options: ["Caminar despacio ya es llegar: el camino importa", "Nur schnelles Ankommen zählt", "Gehen ist Zeitverschwendung"], answer: 0, why: "La idea central: el camino mismo ya es destino." },
      ],
      vf: [
        { text: "Du musst nirgendwo schnell hin.", value: true, why: "Está literal en el primer párrafo." },
        { text: "Die Stadt wartet auf dich.", value: false, why: "«Die Stadt wartet auf niemanden»: no espera a nadie." },
        { text: "Du lächelst über den schnellen Gedanken.", value: true, why: "«Lächle nur und bleib bei deinen Schritten»." },
      ],
    },
    {
      id: "md-de-a1-04-2", theme: "meditazione",
      title: "Jeder Schritt ein Atemzug", titleEs: "Cada paso, una respiración",
      minutes: 2,
      paragraphs: [
        { it: "Geh langsam, ganz langsam. Ein Schritt, ein Atemzug. Der Fuß berührt die Erde: erst die Ferse, dann die Zehen. Die Stadt ist laut, aber deine Schritte sind still.", es: "Camina despacio, muy despacio. Un paso, una respiración. El pie toca la tierra: primero el talón, luego los dedos. La ciudad es ruidosa, pero tus pasos son callados." },
        { it: "So gehst du drei Minuten lang. Wenn der Kopf weggeht, kommst du einfach zurück zum Fuß. Gehen wird Meditation, und die Straße wird dein Meditationskissen.", es: "Así caminas durante tres minutos. Si la mente se va, vuelves simplemente al pie. Caminar se vuelve meditación, y la calle se vuelve tu cojín de meditar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una clase de marcha nórdica", "Meditación caminando: unir paso y respiración", "Un mapa de calles"],
        answer: 1,
        why: "El título une paso y aliento: meditación al caminar.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Ein Schritt, ein Atemzug.",
          "Der Fuß berührt die Erde: erst die Ferse, dann die Zehen.",
          "Wenn der Kopf weggeht, kommst du zurück zum Fuß.",
          "Schuhe aus Leder kosten in Berlin viel Geld.",
          "Die Straße wird dein Meditationskissen.",
        ],
        intruder: 3,
        why: "El precio del calzado no pertenece a la práctica: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Gehen wird Meditation, wenn Schritt und Atem zusammengehen", "Schuhe muss man teuer kaufen", "Nur lange Wege sind gesund"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Ein Schritt, ein Atemzug", "Deine Schritte sind still", "Du kommst zurück zum Fuß"],
        distractors: ["Du rennst drei Kilometer", "Die Stadt ist ganz still", "Du zählst Autos"],
      },
    },
    {
      id: "md-de-a1-04-3", theme: "qui e ora",
      title: "An der Ampel", titleEs: "En el semáforo",
      minutes: 2,
      paragraphs: [
        { it: "Du stehst an der Ampel. Rot. Niemand mag Warten — auch du nicht. Aber schau mal: Das ist eine kleine Pause, ein Geschenk mitten in der lauten Stadt.", es: "Estás en el semáforo. Rojo. A nadie le gusta esperar; a ti tampoco. Pero mira: es una pequeña pausa, un regalo en medio de la ciudad ruidosa." },
        { it: "Fühl deine Füße auf dem Boden. Atme einmal tief ein und wieder aus. Wenn die Ampel grün wird, gehst du weiter — ruhig und wach. Das Hier und Jetzt ist genau diese eine Minute.", es: "Siente tus pies en el suelo. Respira hondo una vez y suelta. Cuando el semáforo se ponga verde, sigues caminando, tranquilo y despierto. El aquí y el ahora es justo este minuto." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Las normas de tráfico en Alemania", "La espera en el semáforo como pausa presente", "Cómo cruzar más rápido"],
        answer: 1,
        why: "El título «An der Ampel» apunta a la pausa del semáforo, no a las normas.",
      },
      sequence: {
        instr: "Ordena lo que pasa en el semáforo:",
        events: ["Du stehst an der Ampel", "Das Licht ist rot", "Du fühlst deine Füße auf dem Boden", "Du atmest einmal tief", "Die Ampel wird grün und du gehst weiter"],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "Stopp. Du stehst an der Ampel, und das Licht ist rot. Perfekt: eine Pause für dich. Fühl deine Füße auf dem Boden, von der Ferse bis zu den Zehen. Atme einmal tief ein. Und wieder aus. Jetzt wird die Ampel grün. Geh weiter, ruhig und wach.",
        questions: [
          { q: "Welche Farbe hat die Ampel am Anfang?", kind: "literal", options: ["Rot", "Grün", "Gelb"], answer: 0, why: "«Das Licht ist rot»." },
          { q: "Was fühlst du auf dem Boden?", kind: "literal", options: ["Deine Füße", "Deine Hände", "Deine Tasche"], answer: 0, why: "«Fühl deine Füße auf dem Boden»." },
          { q: "Wann gehst du weiter?", kind: "inferencial", options: ["Wenn die Ampel grün wird", "Wenn es regnet", "Wenn jemand ruft"], answer: 0, why: "«Jetzt wird die Ampel grün. Geh weiter»: se infiere la condición." },
          { q: "Wie gehst du weiter?", kind: "inferencial", options: ["Ruhig und wach", "Sehr schnell", "Rückwärts"], answer: 0, why: "«Geh weiter, ruhig und wach»." },
        ],
      },
    },
  ],

  "de-cu-a1-05": [
    {
      id: "md-de-a1-05-1", theme: "relax fisico",
      title: "Die Arme ausschütteln", titleEs: "Sacudir los brazos",
      minutes: 2,
      paragraphs: [
        { it: "Du kommst vom Wochenmarkt und trägst schwere Taschen. Stell sie ab. Streck beide Arme nach oben und schüttle die Hände, zehn Sekunden lang. Fühl das Prickeln in den Fingern.", es: "Vuelves del mercado semanal cargando bolsas pesadas. Déjalas en el suelo. Estira los dos brazos hacia arriba y sacude las manos durante diez segundos. Siente el hormigueo en los dedos." },
        { it: "Jetzt lass die Arme fallen. Sie werden warm und schwer, wie nasse Tücher. Der Körper freut sich über jede kleine Pause. Nach dem Einkauf ist die beste Übung: einfach stehen und atmen.", es: "Ahora deja caer los brazos. Se vuelven tibios y pesados, como trapos mojados. El cuerpo agradece cada pequeña pausa. Después de la compra, el mejor ejercicio es quedarse quieto y respirar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un entrenamiento con pesas", "Sacudir los brazos y soltar tras cargar bolsas", "Una receta de mercado"],
        answer: 1,
        why: "El título apunta a soltar la carga física, no al gimnasio.",
      },
      quiz: [
        { q: "Was trägst du vom Markt?", kind: "literal", options: ["Schwere Taschen", "Einen Rucksack mit Steinen", "Nichts"], answer: 0, why: "«Du trägst schwere Taschen»." },
        { q: "Wie werden die Arme, wenn du sie fallen lässt?", kind: "inferencial", options: ["Warm und schwer", "Kalt und leicht", "Hart und trocken"], answer: 0, why: "«Sie werden warm und schwer»: se infiere la sensación de soltar." },
        { q: "Was ist die beste Übung nach dem Einkauf?", kind: "critica", options: ["Einfach stehen und atmen", "Noch mehr tragen", "Schnell nach Hause rennen"], answer: 0, why: "La idea central: pararse y respirar tras el esfuerzo." },
      ],
      vf: [
        { text: "Du schüttelst die Hände zehn Sekunden lang.", value: true, why: "Está literal en el primer párrafo." },
        { text: "Die Arme werden kalt und leicht.", value: false, why: "«Warm und schwer», no fríos y ligeros." },
        { text: "Der Körper freut sich über Pausen.", value: true, why: "«Der Körper freut sich über jede kleine Pause»." },
      ],
    },
    {
      id: "md-de-a1-05-2", theme: "spiritualità",
      title: "Dankbarkeit für das Essen", titleEs: "Gratitud por la comida",
      minutes: 3,
      paragraphs: [
        { it: "Auf dem Tisch liegen Äpfel, Brot und Käse. Einfache Dinge. Jeder Apfel trägt Sonne und Regen in sich — und die Arbeit von vielen Händen, vom Baum bis zum Wochenmarkt.", es: "Sobre la mesa hay manzanas, pan y queso. Cosas sencillas. Cada manzana lleva dentro sol y lluvia, y el trabajo de muchas manos, del árbol al mercado semanal." },
        { it: "Wenn du isst, iss langsam. Fühl den Geschmack auf der Zunge. Dankbarkeit macht einfaches Essen reich. Das wussten schon die Großmütter, jeden Sonntag beim Kaffee und Kuchen.", es: "Cuando comas, come despacio. Siente el sabor en la lengua. La gratitud hace rica la comida sencilla. Ya lo sabían las abuelas, cada domingo con el café y la tarta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una lista de precios del mercado", "Gratitud por la comida sencilla", "Un estudio de nutrición"],
        answer: 1,
        why: "El título anuncia el agradecimiento por lo sencillo, no precios ni ciencia.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Auf dem Tisch liegen Äpfel, Brot und Käse.",
          "Jeder Apfel trägt Sonne und Regen in sich.",
          "Iss langsam und fühl den Geschmack.",
          "Ein Kilo Äpfel kostet zwei Euro fünfzig.",
          "Dankbarkeit macht einfaches Essen reich.",
        ],
        intruder: 3,
        why: "El precio del kilo es información de compra, no de gratitud: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Dankbarkeit macht einfaches Essen reich", "Bio-Äpfel sind teuer", "Man muss mehr essen"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Jeder Apfel trägt Sonne und Regen in sich", "Iss langsam", "Die Großmütter wussten es schon"],
        distractors: ["Du isst jeden Tag Kuchen", "Der Käse kommt aus Spanien", "Der Tisch ist neu"],
      },
    },
    {
      id: "md-de-a1-05-3", theme: "relax mentale",
      title: "Die Warteschlange", titleEs: "La cola",
      minutes: 2,
      paragraphs: [
        { it: "Du stehst an der Kasse, und die Schlange ist lang. Du hast es eilig. Perfekt! Genau jetzt bekommst du eine kleine Pause, geschenkt vom Supermarkt.", es: "Estás en la caja y la cola es larga. Tienes prisa. ¡Perfecto! Justo ahora recibes una pequeña pausa, regalada por el supermercado." },
        { it: "Atme dreimal ruhig ein und aus. Schau die Menschen an: Alle warten, alle atemen, alle haben Zeit. Wenn du das Warten annimmst, wird daraus Stille statt Stress.", es: "Respira tres veces, tranquilo, dentro y fuera. Mira a la gente: todos esperan, todos respiran, todos tienen tiempo. Si aceptas la espera, de ella sale calma en lugar de estrés." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Trucos para colarse en la caja", "La cola del supermercado como pausa de calma", "Una historia de cajeros"],
        answer: 1,
        why: "El título apunta a la cola como momento de relax, no a trucos.",
      },
      sequence: {
        instr: "Ordena la pausa de la cola:",
        events: ["Du stehst in einer langen Schlange", "Du merkst: Du hast es eilig", "Du atmest dreimal ruhig", "Du schaust die Menschen an", "Das Warten wird Stille"],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "Willkommen in der Schlange an der Kasse. Stell dich entspannt hin, beide Füße auf dem Boden. Atme ein: eins. Atme aus: zwei. Noch einmal: ein und aus. Schau die Menschen vor dir an. Jeder atmet, jeder wartet. Du auch — und genau das ist heute deine Übung.",
        questions: [
          { q: "Wo stehst du?", kind: "literal", options: ["In der Schlange an der Kasse", "Im Park", "Im Zug"], answer: 0, why: "«Willkommen in der Schlange an der Kasse»." },
          { q: "Wie oft atmest du bewusst?", kind: "inferencial", options: ["Zweimal", "Zehnmal", "Keinmal"], answer: 0, why: "Se infiere de «ein und aus» repetido dos veces." },
          { q: "Was machen die Menschen vor dir?", kind: "literal", options: ["Jeder atmet und wartet", "Jeder singt", "Niemand ist da"], answer: 0, why: "«Jeder atmet, jeder wartet»." },
          { q: "Was ist die Schlange heute für dich?", kind: "inferencial", options: ["Deine Übung", "Ein Problem", "Ein Spiel"], answer: 0, why: "«Genau das ist heute deine Übung»: la cola se vuelve práctica." },
        ],
      },
    },
  ],

  "de-cu-a1-06": [
    {
      id: "md-de-a1-06-1", theme: "meditazione",
      title: "Der erste Atem am Morgen", titleEs: "El primer aliento de la mañana",
      minutes: 2,
      paragraphs: [
        { it: "Der Wecker klingelt. Noch nicht aufstehen! Erst drei Atemzüge im warmen Bett. Einatmen: Der Tag beginnt. Ausatmen: Der Körper wacht langsam auf.", es: "Suena el despertador. ¡Todavía no te levantes! Primero tres respiraciones en la cama caliente. Al inhalar: el día empieza. Al exhalar: el cuerpo despierta despacio." },
        { it: "Das ist dein erster kleiner Moment am Morgen. Mit jedem Atemzug wird der Kopf etwas ruhiger. Dann erst: Füße auf den Boden, Augen auf, und los geht der Tag.", es: "Ese es tu primer pequeño momento de la mañana. Con cada respiración la mente se vuelve algo más serena. Solo después: pies al suelo, ojos abiertos, y arranca el día." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Rutinas de famosos", "Las tres primeras respiraciones de la mañana en la cama", "Una crítica del despertador"],
        answer: 1,
        why: "El título apunta al primer aliento del día, no a famosos ni quejas.",
      },
      quiz: [
        { q: "Was machst du zuerst nach dem Wecker?", kind: "literal", options: ["Drei Atemzüge im Bett", "Sofort duschen", "Handy checken"], answer: 0, why: "«Erst drei Atemzüge im warmen Bett»." },
        { q: "Wann stehst du auf?", kind: "inferencial", options: ["Nach den drei Atemzügen", "Vor dem Weckerklingeln", "Gleich am Anfang"], answer: 0, why: "«Dann erst: Füße auf den Boden»: solo después de respirar." },
        { q: "Warum ist dieser Moment wichtig?", kind: "critica", options: ["Er startet den Tag ruhig und bewusst", "Er ersetzt das Frühstück", "Er macht dich schneller"], answer: 0, why: "La idea: empezar el día en calma y con conciencia." },
      ],
      vf: [
        { text: "Du stehst sofort nach dem Wecker auf.", value: false, why: "«Noch nicht aufstehen»: primero se respira." },
        { text: "Mit jedem Atemzug wird der Kopf ruhiger.", value: true, why: "Está literal en el segundo párrafo." },
        { text: "Der Körper wacht langsam auf.", value: true, why: "«Der Körper wacht langsam auf»." },
      ],
    },
    {
      id: "md-de-a1-06-2", theme: "qui e ora",
      title: "Am Fenster der S-Bahn", titleEs: "En la ventana del S-Bahn",
      minutes: 2,
      paragraphs: [
        { it: "Du sitzt in der S-Bahn, am Fenster. Die Häuser fliegen vorbei. Für drei Haltestellen schaust du nur aus dem Fenster: Häuser, Bäume, Himmel, Licht.", es: "Vas en el S-Bahn, junto a la ventana. Las casas vuelan al paso. Durante tres paradas solo miras por la ventana: casas, árboles, cielo, luz." },
        { it: "Du planst nichts, du bewertest nichts. Der Zug fährt, und du fährst einfach mit. Wenn eine Sorge kommt, schickst du sie zum nächsten Bahnhof. So beginnt der Tag leicht.", es: "No planificas nada, no valoras nada. El tren avanza y tú simplemente viajas. Si llega una preocupación, la despachas a la próxima estación. Así empieza ligero el día." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["El mapa de la red de metro", "Mirar por la ventana del tren (aquí y ahora)", "Cómo estudiar en el tren"],
        answer: 1,
        why: "El título apunta a la mirada por la ventana, no a mapas ni estudio.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Du sitzt in der S-Bahn am Fenster.",
          "Für drei Haltestellen schaust du nur aus dem Fenster.",
          "Du planst nichts und bewertest nichts.",
          "Das Monatsticket kostet 49 Euro.",
          "Wenn eine Sorge kommt, schickst du sie zum nächsten Bahnhof.",
        ],
        intruder: 3,
        why: "El precio del abono no pertenece a la experiencia presente: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Drei Haltestellen lang einfach nur schauen: da sein im Zug", "Man soll im Zug arbeiten", "Die S-Bahn ist immer pünktlich"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Die Häuser fliegen vorbei", "Du fährst einfach mit", "Sorgen schickst du zum nächsten Bahnhof"],
        distractors: ["Du schläfst die ganze Fahrt", "Du hörst laute Musik", "Der Zug fährt nach München"],
      },
    },
    {
      id: "md-de-a1-06-3", theme: "relax fisico",
      title: "Der Nacken nach der Vorlesung", titleEs: "La nuca después de la clase",
      minutes: 2,
      paragraphs: [
        { it: "Zwei Stunden Vorlesung, zwei Stunden Bildschirm: Dein Nacken ist hart wie Stein. Dreh den Kopf ganz langsam nach links, atme aus. Dann nach rechts, atme aus.", es: "Dos horas de clase, dos horas de pantalla: tu nuca está dura como una piedra. Gira la cabeza muy despacio a la izquierda y exhala. Luego a la derecha y exhala." },
        { it: "Lass den Kopf sinken und roll die Schultern, dreimal, ohne Eile. Der Nacken sagt danke, und der Kopf wird wieder klar — genau richtig für den Weg in die Mensa.", es: "Deja caer la cabeza y rueda los hombros, tres veces, sin prisa. La nuca da las gracias y la cabeza vuelve a estar clara, justo lo que hace falta para ir a la Mensa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Ejercicios para la voz", "Soltar cuello y hombros tras horas de pantalla", "Un examen de anatomía"],
        answer: 1,
        why: "El título apunta a la tensión del cuello después de la clase.",
      },
      sequence: {
        instr: "Ordena el mini-ejercicio:",
        events: ["Du drehst den Kopf langsam nach links", "Du atmest aus", "Du drehst den Kopf nach rechts", "Du lässt den Kopf sinken", "Du rollst die Schultern dreimal"],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "Pause nach der Vorlesung. Sitz gerade. Dreh den Kopf ganz langsam nach links. Atme aus. Und zurück zur Mitte. Jetzt nach rechts, langsam. Atme aus. Zurück zur Mitte. Lass die Schultern kreisen, einmal, zweimal, dreimal. Fühl, wie der Nacken weicher wird. Jetzt bist du bereit für die Mensa.",
        questions: [
          { q: "Wohin drehst du den Kopf zuerst?", kind: "literal", options: ["Nach links", "Nach rechts", "Nach oben"], answer: 0, why: "«Dreh den Kopf ganz langsam nach links»." },
          { q: "Was machst du beim Drehen?", kind: "literal", options: ["Du atmest aus", "Du liest", "Du schreibst"], answer: 0, why: "«Atme aus»." },
          { q: "Wie oft kreisen die Schultern?", kind: "literal", options: ["Dreimal", "Zehnmal", "Keinmal"], answer: 0, why: "«einmal, zweimal, dreimal»." },
          { q: "Wie fühlt sich der Nacken am Ende an?", kind: "inferencial", options: ["Weicher", "Härter", "Nass"], answer: 0, why: "«Fühl, wie der Nacken weicher wird»." },
        ],
      },
    },
  ],

  "de-cu-a1-07": [
    {
      id: "md-de-a1-07-1", theme: "spiritualità",
      title: "Zeit für das, was du liebst", titleEs: "Tiempo para lo que amas",
      minutes: 3,
      paragraphs: [
        { it: "Ein Hobby ist keine verlorene Zeit. Wenn du malst, kochst oder kletterst, bist du ganz da, mit Kopf und Händen. Das ist eine stille Form von Spiritualität.", es: "Un pasatiempo no es tiempo perdido. Cuando pintas, cocinas o escalas, estás del todo, con la cabeza y las manos. Es una forma silenciosa de espiritualidad." },
        { it: "Diese Woche: eine Stunde nur für dein Hobby. Kein Handy, kein Ziel, kein Wettbewerb. Nur du und die Sache, die du liebst. Danach bist du reicher als vorher.", es: "Esta semana: una hora solo para tu afición. Sin móvil, sin meta, sin competición. Solo tú y aquello que amas. Después eres más rico que antes." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo ganar dinero con aficiones", "El tiempo dedicado a lo que amas como práctica espiritual", "Los mejores clubes de Alemania"],
        answer: 1,
        why: "El título apunta al valor del tiempo para lo amado, no al dinero.",
      },
      quiz: [
        { q: "Was ist ein Hobby, laut Text?", kind: "literal", options: ["Eine stille Form von Spiritualität", "Verlorene Zeit", "Ein Wettbewerb"], answer: 0, why: "«Das ist eine stille Form von Spiritualität»." },
        { q: "Was gehört NICHT zu deiner Hobby-Stunde?", kind: "inferencial", options: ["Handy", "Deine Sache", "Deine Hände"], answer: 0, why: "«Kein Handy, kein Ziel, kein Wettbewerb»: se infiere lo excluido." },
        { q: "Was bedeutet «Danach bist du reicher»?", kind: "critica", options: ["Die Erfahrung selbst bereichert, nicht das Geld", "Du bekommst Geld dafür", "Du kaufst neue Sachen"], answer: 0, why: "Riqueza interior, no material: la idea central del texto." },
      ],
      vf: [
        { text: "Ein Hobby ist verlorene Zeit.", value: false, why: "«Ein Hobby ist keine verlorene Zeit»." },
        { text: "Während des Hobbys bist du ganz da.", value: true, why: "«bist du ganz da, mit Kopf und Händen»." },
        { text: "In der Hobby-Stunde gibt es einen Wettbewerb.", value: false, why: "«Kein Wettbewerb»: no hay competición." },
      ],
    },
    {
      id: "md-de-a1-07-2", theme: "relax mentale",
      title: "Spielen ohne Ergebnis", titleEs: "Jugar sin resultado",
      minutes: 2,
      paragraphs: [
        { it: "Als Kind hast du gespielt, ohne zu gewinnen. Heute zählt bei allem die Note, der Preis, das Ergebnis. Der Kopf wird müde von diesem vielen Zählen.", es: "De niño jugabas sin ganar. Hoy en todo cuentan la nota, el premio, el resultado. La cabeza se cansa de tanto contar." },
        { it: "Versuch es wieder: eine Stunde spielen, ohne Punkte und ohne Preis. Vielleicht Fußball im Park, vielleicht Klavier für niemanden. Der Kopf lernt wieder: Es gibt nichts zu erreichen. Das ist echte Erholung.", es: "Inténtalo otra vez: una hora de juego, sin puntos y sin premio. Quizá fútbol en el parque, quizá piano para nadie. La cabeza reaprende: no hay nada que lograr. Ese es el descanso de verdad." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo ganar todos los partidos", "Jugar sin meta ni puntos como descanso mental", "Un torneo de fútbol"],
        answer: 1,
        why: "El título apunta al juego sin resultado, no a la competición.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Als Kind hast du gespielt, ohne zu gewinnen.",
          "Heute zählt bei allem das Ergebnis.",
          "Du spielst eine Stunde ohne Punkte und ohne Preis.",
          "Die Mannschaft gewinnt drei zu null im Pokal.",
          "Der Kopf lernt: Es gibt nichts zu erreichen.",
        ],
        intruder: 3,
        why: "El resultado deportivo es justamente lo que el texto excluye: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Spielen ohne Ergebnis ist echte Erholung für den Kopf", "Nur Siege machen glücklich", "Musik ist besser als Sport"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Heute zählt bei allem das Ergebnis", "Du spielst ohne Punkte", "Der Kopf wird müde vom Zählen"],
        distractors: ["Du gewinnst einen Preis", "Klavier ist verboten", "Kinder spielen nie"],
      },
    },
    {
      id: "md-de-a1-07-3", theme: "meditazione",
      title: "Im Wald: Schritt und Atem", titleEs: "En el bosque: paso y aliento",
      minutes: 3,
      paragraphs: [
        { it: "Am Sonntag gehst du in den Wald. Keine Musik, kein Podcast in den Ohren. Nur deine Schritte auf dem Weg und dein Atem, ruhig und gleichmäßig, wie eine ruhige Musik.", es: "El domingo vas al bosque. Sin música, sin pódcast en los oídos. Solo tus pasos en el camino y tu respiración, tranquila y pareja, como una música serena." },
        { it: "Der Wald atmet auch: die Blätter, der Wind, die große Stille. Wenn du drei Schritte mit einem Atemzug verbindest, wird das Wandern leise Meditation.", es: "El bosque también respira: las hojas, el viento, el gran silencio. Si conectas tres pasos con una respiración, el senderismo se vuelve meditación callada." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de equipos de senderismo", "Caminar por el bosque uniendo paso y respiración", "Los animales del bosque"],
        answer: 1,
        why: "El título une bosque, paso y aliento: meditación al caminar.",
      },
      sequence: {
        instr: "Ordena la caminata:",
        events: ["Am Sonntag gehst du in den Wald", "Du hörst keine Musik, nur deine Schritte", "Du hörst deinen ruhigen Atem", "Du verbindest drei Schritte mit einem Atemzug", "Das Wandern wird leise Meditation"],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "Sonntag im Wald. Geh langsam, vielleicht drei Schritte mit einem Atemzug. Hör die Blätter im Wind. Fühl den weichen Boden unter deinen Schuhen. Der Wald atmet, und du atmest mit. Bleib einmal stehen und schau nach oben, zu den Wipfeln. Dann geh weiter, still und leicht.",
        questions: [
          { q: "Was ist in deinen Ohren?", kind: "literal", options: ["Keine Musik, kein Podcast", "Laute Musik", "Ein Hörbuch"], answer: 0, why: "«Keine Musik, kein Podcast in den Ohren»." },
          { q: "Was verbindest du mit einem Atemzug?", kind: "literal", options: ["Drei Schritte", "Drei Bäume", "Drei Wörter"], answer: 0, why: "«drei Schritte mit einem Atemzug»." },
          { q: "Was machst du, als du stehen bleibst?", kind: "inferencial", options: ["Du schaust nach oben zu den Wipfeln", "Du rufst jemanden an", "Du isst ein Brot"], answer: 0, why: "«Bleib einmal stehen und schau nach oben»." },
          { q: "Wie gehst du am Ende weiter?", kind: "inferencial", options: ["Still und leicht", "Schnell und laut", "Traurig"], answer: 0, why: "«Dann geh weiter, still und leicht»." },
        ],
      },
    },
  ],

  "de-cu-a1-08": [
    {
      id: "md-de-a1-08-1", theme: "qui e ora",
      title: "Langsam essen", titleEs: "Comer despacio",
      minutes: 2,
      paragraphs: [
        { it: "Das Essen ist da: warm, duftend, bunt. Kein Handy auf dem Tisch, keine Zeitung. Nimm die erste Gabel ganz langsam und schau sie an. Genau das ist der Moment.", es: "La comida está servida: caliente, aromática, colorida. Sin móvil en la mesa, sin periódico. Toma el primer bocado muy despacio y obsérvalo. Justo eso es el momento." },
        { it: "Kau jeden Bissen viele Male. Schmeck die Gewürze, die Wärme, die Textur. Wenn du langsam isst, isst der Kopf mit — und die Mahlzeit wird ein kleines Fest.", es: "Mastica cada bocado muchas veces. Saborea las especias, el calor, la textura. Si comes despacio, la cabeza come contigo, y la comida se vuelve una pequeña fiesta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La mejor dieta del mundo", "Comer despacio, con atención plena", "Un menú de restaurante bávaro"],
        answer: 1,
        why: "El título apunta a la lentitud consciente al comer.",
      },
      quiz: [
        { q: "Was liegt NICHT auf dem Tisch?", kind: "literal", options: ["Handy und Zeitung", "Teller und Gabel", "Das Essen"], answer: 0, why: "«Kein Handy auf dem Tisch, keine Zeitung»." },
        { q: "Was machst du mit der ersten Gabel?", kind: "inferencial", options: ["Du schaust sie langsam an", "Du isst sie sehr schnell", "Du gibst sie weg"], answer: 0, why: "«Nimm die erste Gabel ganz langsam und schau sie an»." },
        { q: "Was passiert, wenn du langsam isst?", kind: "critica", options: ["Die Mahlzeit wird ein kleines Fest", "Du wirst schneller fertig", "Du isst mehr als alle"], answer: 0, why: "La idea: comer despacio convierte la comida en fiesta." },
      ],
      vf: [
        { text: "Das Essen ist kalt.", value: false, why: "«Das Essen ist da: warm, duftend, bunt»: está caliente." },
        { text: "Du kaust jeden Bissen viele Male.", value: true, why: "«Kau jeden Bissen viele Male»." },
        { text: "Der Kopf isst mit, wenn du langsam isst.", value: true, why: "«isst der Kopf mit»: la mente participa." },
      ],
    },
    {
      id: "md-de-a1-08-2", theme: "relax fisico",
      title: "Die Hand auf den Bauch", titleEs: "La mano en el vientre",
      minutes: 2,
      paragraphs: [
        { it: "Vor dem Essen: Leg eine Hand auf deinen Bauch, ganz locker. Atme in die Hand hinein. Der Bauch wird rund beim Einatmen und weich beim Ausatmen.", es: "Antes de comer: pon una mano sobre tu vientre, muy suelta. Respira hacia la mano. El vientre se redondea al inhalar y se ablanda al exhalar." },
        { it: "Fünf Atemzüge so, dann iss. Die Verdauung beginnt schon mit der Ruhe vor dem ersten Bissen. Der Körper isst besser, wenn er friedlich ist — das merkt man gleich.", es: "Cinco respiraciones así, y luego come. La digestión empieza ya con la calma antes del primer bocado. El cuerpo come mejor cuando está en paz; se nota enseguida." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ejercicio de gimnasio abdominal", "Respirar con la mano en el vientre antes de comer", "Una receta ligera"],
        answer: 1,
        why: "El título apunta a la respiración con la mano en la barriga.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Du legst eine Hand auf deinen Bauch.",
          "Der Bauch wird rund beim Einatmen.",
          "Fünf Atemzüge, dann isst du.",
          "Bauchmuskel-Training macht einen flachen Bauch.",
          "Der Körper isst besser, wenn er friedlich ist.",
        ],
        intruder: 3,
        why: "El entrenamiento abdominal es gimnasia, no calma digestiva: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Ruhe vor dem Essen: Atmung und Bauch gehören zusammen", "Man muss vor dem Essen Sport machen", "Fünf Mahlzeiten sind wichtig"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Du atmest in die Hand hinein", "Der Bauch wird weich beim Ausatmen", "Die Verdauung beginnt mit der Ruhe"],
        distractors: ["Du zählst Kalorien", "Die Hand ist kalt", "Du isst im Stehen"],
      },
    },
    {
      id: "md-de-a1-08-3", theme: "spiritualità",
      title: "Ein Tisch für Freunde", titleEs: "Una mesa para amigos",
      minutes: 3,
      paragraphs: [
        { it: "Ein Tisch mit Freunden ist ein stiller Tempel. Jeder bringt etwas mit: Brot, Zeit, Geschichten, Aufmerksamkeit. Das Teilen ist älter als jede Speisekarte.", es: "Una mesa con amigos es un templo silencioso. Cada uno trae algo: pan, tiempo, historias, atención. Compartir es más antiguo que cualquier carta." },
        { it: "Heute Abend: ein Glas, ein Platz, ein gutes Gespräch. Wenn Menschen sich begegnen und Zeit schenken, geschieht etwas Einfaches und zugleich Großes.", es: "Esta noche: un vaso, un sitio, una buena conversación. Cuando las personas se encuentran y se regalan tiempo, ocurre algo sencillo y, a la vez, grande." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo cocinar para muchos invitados", "La mesa compartida como práctica espiritual", "Los horarios de los restaurantes"],
        answer: 1,
        why: "El título apunta al encuentro en la mesa, no a recetas ni horarios.",
      },
      sequence: {
        instr: "Ordena la velada:",
        events: ["Jeder bringt etwas mit: Brot, Zeit, Geschichten", "Ihr setzt euch an den Tisch", "Ihr teilt das Brot und die Geschichten", "Ihr schenkt euch Zeit", "Etwas Einfaches und Großes geschieht"],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "Stell dir den Tisch von heute Abend vor. Brot in der Mitte. Gläser, die leise klingen. Ein Freund erzählt langsam eine Geschichte, und alle hören zu. Niemand schaut auf ein Handy. Du atmest einmal und denkst: So ist das Teilen. Einfach und groß zugleich.",
        questions: [
          { q: "Was liegt in der Mitte des Tisches?", kind: "literal", options: ["Brot", "Ein Handy", "Eine Rechnung"], answer: 0, why: "«Brot in der Mitte»." },
          { q: "Was macht der Freund?", kind: "literal", options: ["Er erzählt eine Geschichte", "Er telefoniert", "Er kocht"], answer: 0, why: "«Ein Freund erzählt langsam eine Geschichte»." },
          { q: "Was macht niemand?", kind: "literal", options: ["Niemand schaut auf ein Handy", "Niemand lacht", "Niemand isst"], answer: 0, why: "«Niemand schaut auf ein Handy»." },
          { q: "Was denkst du am Ende?", kind: "inferencial", options: ["So ist das Teilen", "Ich muss noch arbeiten", "Das Essen ist zu teuer"], answer: 0, why: "«Du atmest einmal und denkst: So ist das Teilen»." },
        ],
      },
    },
  ],

  "de-cu-a1-09": [
    {
      id: "md-de-a1-09-1", theme: "relax mentale",
      title: "Warten auf den Zug", titleEs: "Esperar el tren",
      minutes: 2,
      paragraphs: [
        { it: "Der Zug hat zehn Minuten Verspätung. Alle am Bahnsteig schauen auf ihr Handy. Du schaust auf etwas anderes: auf deinen Atem, wie er kommt und geht.", es: "El tren va con diez minutos de retraso. Todos en el andén miran el móvil. Tú miras otra cosa: tu respiración, cómo llega y se va." },
        { it: "Zehn Minuten sind ungefähr zwanzig Atemzüge. Jeder Atemzug bringt dich zurück auf den Bahnsteig, in deinen Körper, in diesen Moment. Warten kann Ruhe sein — probier es aus.", es: "Diez minutos son unas veinte respiraciones. Cada una te devuelve al andén, a tu cuerpo, a este momento. Esperar puede ser calma: pruébalo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los horarios de la DB", "Convertir la espera del tren en calma", "Cómo reclamar un retraso"],
        answer: 1,
        why: "El título apunta a la espera como ejercicio, no a horarios ni reclamaciones.",
      },
      quiz: [
        { q: "Worauf schauen die anderen Leute?", kind: "literal", options: ["Auf ihr Handy", "Auf den Himmel", "Auf ihre Schuhe"], answer: 0, why: "«Alle am Bahnsteig schauen auf ihr Handy»." },
        { q: "Worauf schaust du?", kind: "inferencial", options: ["Auf deinen Atem", "Auf dein Handy", "Auf die Uhr"], answer: 0, why: "«Du schaust auf etwas anderes: auf deinen Atem»." },
        { q: "Was kann Warten sein, laut Text?", kind: "critica", options: ["Ruhe, wenn du beim Atem bleibst", "Immer Stress", "Zeitverschwendung"], answer: 0, why: "«Warten kann Ruhe sein»: la idea central." },
      ],
      vf: [
        { text: "Der Zug ist pünktlich.", value: false, why: "«Der Zug hat zehn Minuten Verspätung»." },
        { text: "Zehn Minuten sind ungefähr zwanzig Atemzüge.", value: true, why: "Está literal en el segundo párrafo." },
        { text: "Jeder Atemzug bringt dich zurück in deinen Körper.", value: true, why: "«Jeder Atemzug bringt dich zurück in deinen Körper»." },
      ],
    },
    {
      id: "md-de-a1-09-2", theme: "meditazione",
      title: "Der Rhythmus des Zuges", titleEs: "El ritmo del tren",
      minutes: 2,
      paragraphs: [
        { it: "Im Zug, am Fenster: Setz dich bequem hin. Der Zug hat seinen eigenen Rhythmus, tick, tick, tick über die Schienen. Dein Atem findet diesen Rhythmus ganz von selbst.", es: "En el tren, junto a la ventana: siéntate cómodo. El tren tiene su propio ritmo, tic, tic, tic sobre los raíles. Tu respiración encuentra ese ritmo sola." },
        { it: "Einatmen: Die Felder ziehen vorbei. Ausatmen: Ein Wald verschwindet. So sitzt du still in der Bewegung, wie eine kleine Insel. Das ist Meditation auf Rädern.", es: "Al inhalar: los campos pasan. Al exhalar: un bosque desaparece. Así estás quieto dentro del movimiento, como una pequeña isla. Es meditación sobre ruedas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de maquinistas", "El ritmo del tren como meditación", "La historia del ICE"],
        answer: 1,
        why: "El título une el ritmo del tren con la meditación.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Der Zug hat seinen eigenen Rhythmus.",
          "Dein Atem findet diesen Rhythmus.",
          "Einatmen: Die Felder ziehen vorbei.",
          "ICE-Tickets kosten am Wochenende weniger.",
          "Du sitzt still in der Bewegung.",
        ],
        intruder: 3,
        why: "La tarifa del fin de semana es información de viaje, no de meditación: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Still in der Bewegung sitzen: Meditation auf Rädern", "Zugfahren ist langweilig", "Felder sind schöner als Wälder"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Der Zug hat seinen Rhythmus", "Dein Atem findet den Rhythmus", "Ein Wald verschwindet beim Ausatmen"],
        distractors: ["Du steuerst den Zug selbst", "Der Zug hält oft", "Du schaust Filme"],
      },
    },
    {
      id: "md-de-a1-09-3", theme: "qui e ora",
      title: "Aus dem Fenster", titleEs: "Por la ventana",
      minutes: 2,
      paragraphs: [
        { it: "Du schaust aus dem Zugfenster. Kirchtürme, Flüsse, Gärten, Menschen, die winken. Alles fliegt vorbei — und du bleibst: sitzend, atmend, da.", es: "Miras por la ventana del tren. Torres de iglesia, ríos, jardines, gente que saluda. Todo pasa volando, y tú permaneces: sentado, respirando, ahí." },
        { it: "Die Landschaft sagt: Alles geht vorbei. Dein Atem sagt: Du bist hier. Zwischen diesen zwei Sätzen liegt eine ganze Reise, still und leicht wie der Zug selbst.", es: "El paisaje dice: todo pasa. Tu respiración dice: estás aquí. Entre esas dos frases cabe un viaje entero, silencioso y ligero como el propio tren." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Fotografía de paisajes", "El contraste paisaje/presencia mirando por la ventana", "Un texto sobre trenes rápidos"],
        answer: 1,
        why: "El título apunta a la mirada presente por la ventana del tren.",
      },
      sequence: {
        instr: "Ordena lo que ocurre:",
        events: ["Du schaust aus dem Zugfenster", "Kirchtürme und Flüsse fliegen vorbei", "Die Landschaft sagt: Alles geht vorbei", "Dein Atem sagt: Du bist hier", "Die Reise wird still und leicht"],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "Du sitzt im Zug und schaust aus dem Fenster. Da: ein Kirchturm im Abendlicht. Da: ein Fluss, der glitzert. Alles zieht vorbei, nichts bleibt stehen. Aber du bleibst. Fühl deinen Atem, einmal ein, einmal aus. Du bist der ruhige Punkt in dieser schnellen Landschaft.",
        questions: [
          { q: "Was siehst du im Abendlicht?", kind: "literal", options: ["Einen Kirchturm", "Einen Supermarkt", "Ein Krankenhaus"], answer: 0, why: "«Da: ein Kirchturm im Abendlicht»." },
          { q: "Was macht der Fluss?", kind: "literal", options: ["Er glitzert", "Er singt", "Er schläft"], answer: 0, why: "«ein Fluss, der glitzert»." },
          { q: "Was bleibt stehen, während alles vorbeizieht?", kind: "inferencial", options: ["Du", "Der Kirchturm", "Der Fluss"], answer: 0, why: "«Alles zieht vorbei, aber du bleibst»: se infiere que tú eres el punto quieto." },
          { q: "Was bist du in dieser Landschaft?", kind: "inferencial", options: ["Der ruhige Punkt", "Der schnellste Fahrgast", "Der Lokführer"], answer: 0, why: "«Du bist der ruhige Punkt in dieser schnellen Landschaft»." },
        ],
      },
    },
  ],

  "de-cu-a1-10": [
    {
      id: "md-de-a1-10-1", theme: "relax fisico",
      title: "Der Wind im Gesicht", titleEs: "El viento en la cara",
      minutes: 2,
      paragraphs: [
        { it: "Der Wind bläst in Hamburg stark vom Meer. Statt dagegen zu kämpfen: Stell dich hin und lass ihn wehen. Gesicht weich, Schultern locker, Füße fest auf dem Boden.", es: "En Hamburgo el viento sopla fuerte del mar. En vez de luchar contra él: plántate y déjalo soplar. Cara blanda, hombros sueltos, pies firmes en el suelo." },
        { it: "Spür den Wind auf der Haut, in den Haaren, an den Kleidern. Der Körper wacht dabei ganz natürlich auf. Nach fünf Minuten gehst du weiter — frisch wie nach einer kalten Dusche.", es: "Siente el viento en la piel, en el pelo, en la ropa. El cuerpo despierta solo con eso. Tras cinco minutos sigues caminando, fresco como tras una ducha fría." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo protegerse de la lluvia", "Dejar que el viento despierte el cuerpo", "La meteorología del norte"],
        answer: 1,
        why: "El título apunta a la sensación del viento en el cuerpo, no a pronósticos.",
      },
      quiz: [
        { q: "Woher kommt der Wind?", kind: "literal", options: ["Vom Meer", "Von den Bergen", "Aus der U-Bahn"], answer: 0, why: "«Der Wind bläst in Hamburg stark vom Meer»." },
        { q: "Was machst du mit dem Wind?", kind: "inferencial", options: ["Du lässt ihn wehen", "Du kämpfst dagegen", "Du rennst weg"], answer: 0, why: "«Stell dich hin und lass ihn wehen»." },
        { q: "Wie gehst du nach fünf Minuten weiter?", kind: "critica", options: ["Frisch wie nach einer kalten Dusche", "Müde und schlecht gelaunt", "Ganz nass und kalt"], answer: 0, why: "La idea: el viento refresca y despierta, no molesta." },
      ],
      vf: [
        { text: "Du kämpfst gegen den Wind.", value: false, why: "«Statt dagegen zu kämpfen»: no luchas contra él." },
        { text: "Der Wind weht auf der Haut und in den Haaren.", value: true, why: "«Spür den Wind auf der Haut, in den Haaren»." },
        { text: "Der Körper wacht beim Wind natürlich auf.", value: true, why: "«Der Körper wacht dabei ganz natürlich auf»." },
      ],
    },
    {
      id: "md-de-a1-10-2", theme: "spiritualità",
      title: "Die Jahreszeiten", titleEs: "Las estaciones",
      minutes: 3,
      paragraphs: [
        { it: "Im Winter sterben die Blätter nicht wirklich — sie machen nur Pause. Die Natur kennt kein «immer schneller» und kein «immer mehr». Sie kennt nur Rhythmus.", es: "En invierno las hojas no mueren de verdad: solo hacen una pausa. La naturaleza no conoce el 'siempre más rápido' ni el 'siempre más'. Solo conoce ritmo." },
        { it: "Jede Jahreszeit hat ihre eigene Aufgabe: Wachsen, Blühen, Fallen, Ruhen. Auch du hast Zeiten zum Wachsen und Zeiten zum Ruhen. Das ist eine alte, stille Lehre aus dem Garten.", es: "Cada estación tiene su tarea: crecer, florecer, caer, descansar. También tú tienes tiempos para crecer y tiempos para descansar. Es una vieja y serena lección del jardín." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un calendario de jardinería", "Las estaciones como maestras de ritmo y pausa", "El cambio climático"],
        answer: 1,
        why: "El título apunta a la lección de las estaciones, no a jardinería.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Im Winter machen die Blätter nur Pause.",
          "Die Natur kennt kein immer schneller.",
          "Jede Jahreszeit hat ihre eigene Aufgabe.",
          "Der Sommer ist die beste Jahreszeit, weil Ferien sind.",
          "Auch du hast Zeiten zum Ruhen.",
        ],
        intruder: 3,
        why: "La opinión sobre las vacaciones es un juicio personal ajeno al texto: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Die Natur lehrt Rhythmus: Wachsen und Ruhen gehören zusammen", "Winter ist schlecht", "Nur der Sommer zählt"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Die Blätter machen im Winter Pause", "Jede Jahreszeit hat ihre Aufgabe", "Du hast auch Zeiten zum Ruhen"],
        distractors: ["Der Garten gehört dem Nachbarn", "Im Winter schneit es nie", "Blumen öffnen sich nachts"],
      },
    },
    {
      id: "md-de-a1-10-3", theme: "relax mentale",
      title: "Der Regen als Musik", titleEs: "La lluvia como música",
      minutes: 2,
      paragraphs: [
        { it: "Es regnet in Strömen, und du kannst es nicht ändern. Also: Setz dich ans Fenster und hör zu, wie der Regen auf die Erde trommelt, auf Dächer, auf Blätter.", es: "Llueve a cántaros y no puedes cambiarlo. Así que: siéntate junto a la ventana y escucha cómo la lluvia tamborilea sobre la tierra, sobre los tejados, sobre las hojas." },
        { it: "Der Regen macht alle anderen Geräusche weich. Gedanken kommen, Gedanken gehen — wie Tropfen an der Scheibe. Wenn du nur hörst, wird der Regen deine ruhige Musik.", es: "La lluvia suaviza todos los demás ruidos. Los pensamientos llegan y se van, como gotas en el cristal. Si solo escuchas, la lluvia se convierte en tu música serena." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo reparar goteras", "Escuchar la lluvia como música interior", "Un parte meteorológico"],
        answer: 1,
        why: "El título convierte la lluvia en música: escucha consciente.",
      },
      sequence: {
        instr: "Ordena la escucha:",
        events: ["Es regnet in Strömen", "Du setzt dich ans Fenster", "Du hörst den Regen trommeln", "Gedanken kommen und gehen", "Der Regen wird deine ruhige Musik"],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "Es regnet. Du sitzt am Fenster, eine Tasse Tee in der Hand. Hör die Tropfen auf dem Glas, auf der Straße, unter den Bäumen. Jeder Tropfen hat seinen eigenen Ton. Du musst nichts tun, nur hören. Der Regen spielt heute Abend dein Lied, und du bist das Publikum.",
        questions: [
          { q: "Was hast du in der Hand?", kind: "literal", options: ["Eine Tasse Tee", "Ein Buch", "Einen Regenschirm"], answer: 0, why: "«eine Tasse Tee in der Hand»." },
          { q: "Wo hörst du die Tropfen?", kind: "literal", options: ["Auf dem Glas, auf der Straße, unter den Bäumen", "Im Radio", "Im Zug"], answer: 0, why: "«Hör die Tropfen auf dem Glas, auf der Straße, unter den Bäumen»." },
          { q: "Was hat jeder Tropfen?", kind: "inferencial", options: ["Seinen eigenen Ton", "Seine eigene Farbe", "Einen Preis"], answer: 0, why: "«Jeder Tropfen hat seinen eigenen Ton»." },
          { q: "Was bist du heute Abend?", kind: "inferencial", options: ["Das Publikum", "Der Sänger", "Der Dirigent"], answer: 0, why: "«Du bist das Publikum»: escuchas sin intervenir." },
        ],
      },
    },
  ],

  "de-cu-a1-11": [
    {
      id: "md-de-a1-11-1", theme: "meditazione",
      title: "Ein neuer Ort", titleEs: "Un lugar nuevo",
      minutes: 2,
      paragraphs: [
        { it: "Ein leeres Zimmer, ein Koffer, eine Matratze am Boden. Alles ist neu und noch ein bisschen fremd. Setz dich mitten in das Zimmer, einfach auf den Boden.", es: "Una habitación vacía, una maleta, un colchón en el suelo. Todo es nuevo y todavía un poco ajeno. Siéntate en medio de la habitación, simplemente en el suelo." },
        { it: "Atme dreimal tief. Schau dich langsam um: Das ist jetzt dein Ort. Mit jedem Atemzug wird das Zimmer ein Stück mehr deins. Zuhause entsteht nicht an einem Tag.", es: "Respira hondo tres veces. Mira despacio a tu alrededor: este es ya tu sitio. Con cada respiración la habitación se vuelve un poco más tuya. El hogar no se hace en un día." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Consejos de decoración", "Hacer propio un lugar nuevo, respirando", "Un contrato de alquiler"],
        answer: 1,
        why: "El título apunta a la apropiación del espacio, no a decoración ni contratos.",
      },
      quiz: [
        { q: "Wo sitzt du?", kind: "literal", options: ["Mitten im Zimmer, auf dem Boden", "Auf dem Bett", "Am Schreibtisch"], answer: 0, why: "«Setz dich mitten in das Zimmer, einfach auf den Boden»." },
        { q: "Wie wird das Zimmer deins?", kind: "inferencial", options: ["Mit jedem Atemzug ein Stück mehr", "Mit neuen Möbeln", "Mit einer Party"], answer: 0, why: "«Mit jedem Atemzug wird das Zimmer ein Stück mehr deins»." },
        { q: "Was bedeutet der letzte Satz?", kind: "critica", options: ["Zuhause braucht Zeit und Geduld", "Zuhause ist unmöglich", "Man braucht nur einen Tag"], answer: 0, why: "«Zuhause entsteht nicht an einem Tag»: el hogar toma su tiempo." },
      ],
      vf: [
        { text: "Das Zimmer ist sofort ganz deins.", value: false, why: "«Zuhause entsteht nicht an einem Tag»: lleva tiempo." },
        { text: "Du atmest dreimal tief.", value: true, why: "«Atme dreimal tief»." },
        { text: "Im Zimmer stehen ein Koffer und eine Matratze.", value: true, why: "«ein Koffer, eine Matratze am Boden»." },
      ],
    },
    {
      id: "md-de-a1-11-2", theme: "qui e ora",
      title: "Die erste Nacht", titleEs: "La primera noche",
      minutes: 2,
      paragraphs: [
        { it: "Die erste Nacht im neuen Zimmer. Alles klingt anders: der Kühlschrank, die Straße, die Schritte der Nachbarn. Bleib einfach liegen und hör zu.", es: "La primera noche en la habitación nueva. Todo suena distinto: la nevera, la calle, los pasos de los vecinos. Quédate quieto y escucha." },
        { it: "Das Hier und Jetzt hat auch einen Klang. Du musst nichts tun, nirgendwo hin — nur da sein, im Bett, im Dunkeln, im Hören. Morgen kennst du jedes Geräusch schon.", es: "El aquí y el ahora también tiene un sonido. No tienes que hacer nada ni ir a ninguna parte: solo estar, en la cama, en la oscuridad, escuchando. Mañana ya conocerás cada ruido." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo combatir el insomnio", "Escuchar los sonidos de la primera noche en un sitio nuevo", "Una historia de terror"],
        answer: 1,
        why: "El título apunta a la primera noche y sus sonidos, no al insomnio ni al miedo.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Die erste Nacht im neuen Zimmer.",
          "Alles klingt anders: Kühlschrank, Straße, Nachbarn.",
          "Du bleibst liegen und hörst zu.",
          "Die Miete beträgt 450 Euro im Monat.",
          "Das Hier und Jetzt hat auch einen Klang.",
        ],
        intruder: 3,
        why: "La renta es información práctica, ajena a la escucha nocturna: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Da sein und hören: die Geräusche der ersten Nacht", "Neue Zimmer sind laut und schlecht", "Man soll Musik hören beim Schlafen"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Der Kühlschrank klingt anders", "Du musst nichts tun", "Morgen kennst du jedes Geräusch"],
        distractors: ["Du rufst deine Mutter an", "Die Nachbarn feiern eine Party", "Das Zimmer hat keine Fenster"],
      },
    },
    {
      id: "md-de-a1-11-3", theme: "relax fisico",
      title: "Nach dem Umzug", titleEs: "Después de la mudanza",
      minutes: 2,
      paragraphs: [
        { it: "Der Umzug ist fertig. Der Rücken schmerzt, die Beine sind schwer, die Arme müde. Leg dich auf den Boden, die Arme neben dem Körper, die Handflächen nach oben.", es: "La mudanza terminó. La espalda duele, las piernas pesan, los brazos están cansados. Túmbate en el suelo, los brazos junto al cuerpo, las palmas hacia arriba." },
        { it: "Atme in den Rücken hinein: ein, aus, ein, aus. Mit jedem Ausatmen sinkst du ein bisschen tiefer. Der Boden trägt dich ganz allein — das darfst du jetzt spüren.", es: "Respira hacia la espalda: dentro, fuera, dentro, fuera. Con cada exhalación te hundes un poco más. El suelo te sostiene él solo: eso puedes sentirlo ahora." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Ejercicios de fuerza", "Descansar tumbado en el suelo tras la mudanza", "Cómo deshacer cajas"],
        answer: 1,
        why: "El título apunta al descanso físico después de mover cajas.",
      },
      sequence: {
        instr: "Ordena el descanso:",
        events: ["Der Umzug ist fertig", "Du legst dich auf den Boden", "Du atmest in den Rücken", "Du sinkst mit jedem Ausatmen tiefer", "Du spürst: Der Boden trägt dich"],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "Der Umzug ist vorbei. Stell die letzte Box in die Ecke. Jetzt komm mit auf den Boden. Leg dich hin, die Arme neben dir. Atme tief in den Rücken. Beim Ausatmen wirst du schwer, gut so. Der Boden trägt dich. Bleib noch drei Atemzüge. Du hast es dir verdient.",
        questions: [
          { q: "Wohin legst du dich?", kind: "literal", options: ["Auf den Boden", "Ins Bett", "Auf das Sofa"], answer: 0, why: "«Jetzt komm mit auf den Boden. Leg dich hin»." },
          { q: "Wohin atmest du?", kind: "literal", options: ["In den Rücken", "In die Beine", "In den Kopf"], answer: 0, why: "«Atme tief in den Rücken»." },
          { q: "Wie lange bleibst du noch liegen?", kind: "inferencial", options: ["Drei Atemzüge", "Drei Stunden", "Bis morgen"], answer: 0, why: "«Bleib noch drei Atemzüge»." },
          { q: "Was hast du dir verdient?", kind: "inferencial", options: ["Die Pause", "Ein neues Zimmer", "Einen Umzug mehr"], answer: 0, why: "«Du hast es dir verdient»: te mereces la pausa." },
        ],
      },
    },
  ],

  "de-cu-a1-12": [
    {
      id: "md-de-a1-12-1", theme: "spiritualità",
      title: "Der Weg ist das Ziel", titleEs: "El camino es la meta",
      minutes: 3,
      paragraphs: [
        { it: "Dein A1-Kurs ist zu Ende. Vielleicht denkst du: Das war nur der Anfang! Genau. Und genau so soll es sein: Jede Sprache ist ein weiter Weg.", es: "Tu curso de A1 terminó. Quizá piensas: ¡esto fue solo el comienzo! Exacto. Y así debe ser: cada idioma es un camino largo." },
        { it: "Jeder Tag ist ein Schritt, und kein Schritt ist umsonst. Wenn du jeden Schritt ehrlich gehst, ist das Ziel schon da — mitten im Gehen. Gehen, lernen, atmen: Alles ist Praxis.", es: "Cada día es un paso, y ningún paso es en vano. Si das cada paso con honestidad, la meta ya está ahí, en medio del caminar. Caminar, aprender, respirar: todo es práctica." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los certificados oficiales", "El camino mismo como meta: aprender sin prisa", "Un plan de estudios de A2"],
        answer: 1,
        why: "El título apunta al valor del proceso, no a títulos ni planes.",
      },
      quiz: [
        { q: "Was ist zu Ende?", kind: "literal", options: ["Der A1-Kurs", "Die Arbeit", "Der Urlaub"], answer: 0, why: "«Dein A1-Kurs ist zu Ende»." },
        { q: "Was denkst du vielleicht?", kind: "inferencial", options: ["Das war nur der Anfang", "Ich höre auf", "Alles ist fertig"], answer: 0, why: "«Vielleicht denkst du: Das war nur der Anfang!»." },
        { q: "Was bedeutet «Das Ziel ist mitten im Gehen»?", kind: "critica", options: ["Der Weg selbst ist schon der Erfolg", "Nur das Ziel zählt", "Lernen ist sinnlos"], answer: 0, why: "La idea central: el proceso ya es la meta." },
      ],
      vf: [
        { text: "Kein Schritt ist umsonst.", value: true, why: "«Kein Schritt ist umsonst»: ningún paso en vano." },
        { text: "Der Kurs dauert noch ein Jahr.", value: false, why: "El texto dice que el curso de A1 ya terminó." },
        { text: "Gehen, lernen, atmen: Alles ist Praxis.", value: true, why: "Está literal al final del texto." },
      ],
    },
    {
      id: "md-de-a1-12-2", theme: "relax mentale",
      title: "Der Abend: der Tag im Kopf", titleEs: "La noche: el día en la cabeza",
      minutes: 2,
      paragraphs: [
        { it: "Der Tag ist vorbei: zuerst, dann, danach, zuletzt. Leg dich hin und lass den Tag noch einmal durch den Kopf gehen, langsam wie einen Film ohne Ton.", es: "El día terminó: primero, luego, después, por último. Túmbate y deja que el día pase otra vez por la cabeza, despacio, como una película sin sonido." },
        { it: "Bewerte nichts, urteile nicht. Schau nur: Das war der Tag. Was schön war, behalte. Was schwer war, gib dem Atem. So schläft der Kopf später leichter.", es: "No valores nada, no juzgues. Solo mira: ese fue el día. Lo bonito, guárdalo. Lo duro, entrégaselo a la respiración. Así la cabeza duerme después más ligera." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Planear el día siguiente", "Repasar el día con calma antes de dormir", "Un diario escrito"],
        answer: 1,
        why: "El título apunta al repaso mental sereno de la jornada.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Du lässt den Tag durch den Kopf gehen.",
          "Du bewertest nichts und urteilst nicht.",
          "Was schön war, behalte.",
          "Morgen musst du um sieben Uhr aufstehen.",
          "Was schwer war, gib dem Atem.",
        ],
        intruder: 3,
        why: "La tarea de la mañana siguiente es planificación, no repaso sereno: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Den Tag ohne Urteil anschauen: so schläft der Kopf leichter", "Man soll abends arbeiten", "Filme helfen beim Einschlafen"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Du lässt den Tag wie einen Film durch den Kopf gehen", "Du behältst das Schöne", "Du gibst das Schwere dem Atem"],
        distractors: ["Du schreibst eine E-Mail", "Der Kopf schmerzt", "Du weinst vor dem Schlaf"],
      },
    },
    {
      id: "md-de-a1-12-3", theme: "meditazione",
      title: "Drei Atemzüge am Abend", titleEs: "Tres respiraciones por la noche",
      minutes: 2,
      paragraphs: [
        { it: "Vor dem Schlafen: drei Atemzüge, mehr nicht. Der erste ist für den Tag, der zweite für die Menschen, der dritte ist für dich allein.", es: "Antes de dormir: tres respiraciones, nada más. La primera es por el día, la segunda por las personas, la tercera es solo para ti." },
        { it: "Mehr brauchst du nicht. Der Kurs ist vorbei, morgen beginnt Neues — oder erst einmal ein freier Tag. Der Atem bleibt: still, einfach und treu wie ein guter Freund.", es: "No necesitas más. El curso terminó; mañana empieza algo nuevo, o quizá primero un día libre. La respiración se queda: silenciosa, sencilla y fiel como un buen amigo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Rituales complicados de sueño", "Tres respiraciones sencillas antes de dormir", "Una alarma para despertar"],
        answer: 1,
        why: "El título anuncia tres respiraciones nocturnas, no rituales complicados.",
      },
      sequence: {
        instr: "Ordena las tres respiraciones:",
        events: ["Du machst drei Atemzüge vor dem Schlafen", "Der erste ist für den Tag", "Der zweite ist für die Menschen", "Der dritte ist nur für dich", "Der Atem bleibt, still und treu"],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "Gute Nacht. Lege dich bequem hin. Ein Atemzug für den Tag: danke. Ein Atemzug für die Menschen in deinem Leben: danke. Und ein Atemzug nur für dich. Atme ein, atme aus. Morgen ist ein neuer Tag, mit neuen Wörtern. Heute darfst du einfach schlafen.",
        questions: [
          { q: "Wie viele Atemzüge machst du?", kind: "literal", options: ["Drei", "Zehn", "Keinen"], answer: 0, why: "Uno por el día, uno por las personas, uno para ti: tres en total." },
          { q: "Wofür ist der erste Atemzug?", kind: "literal", options: ["Für den Tag", "Für die Menschen", "Für dich"], answer: 0, why: "«Ein Atemzug für den Tag»." },
          { q: "Wofür ist der dritte Atemzug?", kind: "inferencial", options: ["Nur für dich", "Für den Kurs", "Für die Zukunft"], answer: 0, why: "«Und ein Atemzug nur für dich»: el tercero es personal." },
          { q: "Was darfst du heute einfach?", kind: "literal", options: ["Schlafen", "Arbeiten", "Lernen"], answer: 0, why: "«Heute darfst du einfach schlafen»." },
        ],
      },
    },
  ],
};
