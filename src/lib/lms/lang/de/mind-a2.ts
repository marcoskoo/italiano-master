import type { MindReading } from "../../cambridge-mind";

/* ═══ DE A2 · Mind readings (temáticas de conciencia) — 3 por unidad ══
   Metodología idéntica a las italianas e inglesas (v9.13): 7
   estrategias de comprensión lectora y de escucha. Textos en alemán de
   Alemania A2, traducción española a la vista. Campos `.it` = alemán
   (lengua de estudio), `.es` = español. Estrategia por índice: L1 =
   predict + quiz (lit/inf/crít) + V/F con justificación; L2 = predict
   + ideas + intruso; L3 = predict + secuencia + escucha.              */

export const DE_MIND_A2: Record<string, MindReading[]> = {
  "de-cu-a2-01": [
    {
      id: "md-de-a2-01-1", theme: "meditazione",
      title: "Drei Atemzüge am Sonntag", titleEs: "Tres respiraciones del domingo",
      minutes: 2,
      paragraphs: [
        { it: "Der Sonntag ist in Deutschland still. Die Geschäfte sind zu, die Straßen sind leise. Setz dich ans Fenster und nimm drei tiefe Atemzüge. Einatmen, ausatmen, ruhig werden. Mehr ist nicht nötig.", es: "El domingo en Alemania es silencioso. Las tiendas cierran, las calles quedan tranquilas. Siéntate a la ventana y toma tres respiraciones profundas. Inhalar, exhalar, aquietarse. No hace falta nada más." },
        { it: "Diese drei Atemzüge sind eine kleine Meditation. Du musst nichts kaufen und nichts lernen. Du brauchst nur zwei Minuten und einen stillen Ort. Der Sonntag gibt dir diese Stille geschenkt.", es: "Estas tres respiraciones son una pequeña meditación. No tienes que comprar nada ni aprender nada. Solo necesitas dos minutos y un lugar tranquilo. El domingo te regala ese silencio." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ritual de compras dominical", "Una mini meditación de tres respiraciones en el silencio del domingo", "Una guía de museos para el domingo"],
        answer: 1,
        why: "El título apunta a la respiración y al domingo tranquilo alemán, no a compras ni cultura.",
      },
      quiz: [
        { q: "Was machst du zuerst?", kind: "literal", options: ["Ich setze mich ans Fenster", "Ich gehe einkaufen", "Ich mache Musik"], answer: 0, why: "«Setz dich ans Fenster» está literal al inicio del texto." },
        { q: "Wie viele Minuten brauchst du?", kind: "inferencial", options: ["Zwei Minuten", "Zwei Stunden", "Den ganzen Tag"], answer: 0, why: "«Du brauchst nur zwei Minuten»: se infiere que la práctica es brevísima." },
        { q: "Was ist die Botschaft des Textes?", kind: "critica", options: ["Meditation ist einfach und gratis", "Meditation ist nur für Sonntage", "Man braucht einen teuren Kurs"], answer: 0, why: "La idea central: no hay que comprar ni aprender nada; la calma ya está ahí." },
      ],
      vf: [
        { text: "Die Geschäfte sind am Sonntag offen.", value: false, why: "«Die Geschäfte sind zu»: en domingo cierran." },
        { text: "Du brauchst nur zwei Minuten.", value: true, why: "Está literal: zwei Minuten und einen stillen Ort." },
        { text: "Du musst für die Meditation viel lernen.", value: false, why: "El texto dice: «Du musst nichts kaufen und nichts lernen»." },
      ],
    },
    {
      id: "md-de-a2-01-2", theme: "qui e ora",
      title: "Der Sonntagsspaziergang", titleEs: "El paseo dominical",
      minutes: 2,
      paragraphs: [
        { it: "Nach dem Mittagessen gehen viele Deutsche spazieren. Geh heute mit ihnen — aber geh achtsam. Fühle den Wind im Gesicht. Höre die Vögel. Sieh, wie das Licht durch die Bäume fällt.", es: "Después de comer, muchos alemanes salen a pasear. Ve hoy con ellos, pero camina con atención. Siente el viento en la cara. Escucha los pájaros. Mira cómo la luz cae entre los árboles." },
        { it: "Wenn du gehst, geh. Wenn du stehst, steh. Der Kopf will über morgen nachdenken? Lächle und komm zurück zu deinen Schuhen auf dem Weg. Genau hier ist das Leben — nicht gestern, nicht morgen.", es: "Cuando caminas, camina. Cuando te detienes, detente. ¿La cabeza quiere pensar en mañana? Sonríe y vuelve a tus zapatos sobre el camino. Justo aquí está la vida: ni ayer, ni mañana." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de calzado deportivo", "Caminar con plena atención: el paseo como aquí y ahora", "La historia del senderismo alemán"],
        answer: 1,
        why: "El título es el paseo dominical, y el foco del texto es la presencia al caminar.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Fühle den Wind im Gesicht.",
          "Höre die Vögel im Park.",
          "Das Licht fällt durch die Bäume.",
          "Man muss beim Gehen schnell laufen.",
          "Wenn du gehst, geh.",
        ],
        intruder: 3,
        why: "El texto invita a ir despacio y presente; caminar rápido contradice la práctica: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Spazieren mit Aufmerksamkeit: der Weg ist das Hier und Jetzt",
          "Spazieren ist ein Sport für junge Leute",
          "Beim Gehen soll man Musik hören",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Fühle den Wind im Gesicht",
          "Der Kopf denkt an morgen",
          "Genau hier ist das Leben",
        ],
        distractors: [
          "Der Spaziergang dauert drei Stunden",
          "Man braucht neue Schuhe",
          "In Deutschland regnet es immer",
        ],
      },
    },
    {
      id: "md-de-a2-01-3", theme: "relax fisico",
      title: "Schultern am Montag", titleEs: "Hombros el lunes",
      minutes: 2,
      paragraphs: [
        { it: "Am Montagmorgen sitzen viele Menschen vor dem Computer. Die Schultern sind hoch, der Hals ist hart. Der Körper spricht — und wir hören nicht zu. Heute hören wir zu.", es: "El lunes por la mañana, mucha gente está sentada ante el ordenador. Los hombros van subidos, el cuello queda rígido. El cuerpo habla y no le escuchamos. Hoy le escuchamos." },
        { it: "Mach mit: Hebe beide Schultern ganz hoch. Halte kurz den Atem. Und lass los — plumps! Fühle die Wärme im Nacken. Zweimal am Tag ein paar Übungen, und die Woche wird leichter.", es: "Acompáñame: sube los dos hombros bien alto. Aguanta un momento la respiración. Y suelta: ¡pum! Siente el calor en la nuca. Un par de ejercicios dos veces al día, y la semana se vuelve más ligera." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un entrenamiento de gimnasio intenso", "Un ejercicio breve para soltar hombros y cuello en el trabajo", "Un anuncio de sillas de oficina"],
        answer: 1,
        why: "El título apunta a los hombros del lunes; el texto propone soltarlos con un gesto simple.",
      },
      sequence: {
        instr: "Ordena el ejercicio:",
        events: ["Hebe beide Schultern ganz hoch", "Halte kurz den Atem", "Lass die Schultern fallen", "Fühle die Wärme im Nacken", "Wiederhole es zweimal am Tag"],
      },
      listen: {
        intro: "Escucha el mini-audio de la oficina y responde:",
        audioIt: "Kurze Pause am Schreibtisch. Sitze gerade. Hebe jetzt beide Schultern zu den Ohren. Halte den Atem für drei Sekunden. Lass die Schultern langsam sinken. Spüre den Unterschied. Der Körper sagt danke, und der Montag wird ruhiger.",
        questions: [
          { q: "Wohin hebst du die Schultern?", kind: "literal", options: ["Zu den Ohren", "Zur Decke", "Zum Fenster"], answer: 0, why: "«Hebe beide Schultern zu den Ohren»." },
          { q: "Wie lange hältst du den Atem?", kind: "literal", options: ["Drei Sekunden", "Drei Stunden", "Drei Minuten"], answer: 0, why: "«Halte den Atem für drei Sekunden»." },
          { q: "Was spürst du am Ende?", kind: "inferencial", options: ["Einen Unterschied", "Nichts", "Neuen Stress"], answer: 0, why: "«Spüre den Unterschied»: se infiere el alivio tras soltar." },
          { q: "Wie wird der Montag?", kind: "inferencial", options: ["Ruhiger", "Lauter", "Länger"], answer: 0, why: "«Der Montag wird ruhiger»: se infiere del cierre del audio." },
        ],
      },
    },
  ],

  "de-cu-a2-02": [
    {
      id: "md-de-a2-02-1", theme: "spiritualità",
      title: "Dankbarkeit vor der Wanderung", titleEs: "Gratitud antes de la caminata",
      minutes: 3,
      paragraphs: [
        { it: "Vor einer Wanderung im Wald halte kurz inne. Danke den Beinen, die dich tragen. Danke den Schuhen, danke dem Wasser in der Flasche. Danke dem Weg, der schon da wartet.", es: "Antes de una caminata en el bosque, haz una pausa breve. Da las gracias a las piernas que te llevan. A los zapatos, al agua de la cantimplora. Al camino que ya espera ahí." },
        { it: "Dankbarkeit ist eine einfache Übung. Sie braucht keine Worte und keinen Tempel. Wer dankbar geht, geht leichter. Der Wald spürt es vielleicht nicht — aber du ganz sicher.", es: "La gratitud es un ejercicio sencillo. No necesita palabras ni templo. Quien camina agradecido camina más ligero. Quizá el bosque no lo note, pero tú seguro que sí." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de equipo de montaña", "Agradecer el cuerpo y el camino antes de caminar", "Una crítica a los senderos alemanes"],
        answer: 1,
        why: "El título une gratitud y caminata: la práctica previa al paseo, no el equipo.",
      },
      quiz: [
        { q: "Wann hältst du inne?", kind: "literal", options: ["Vor der Wanderung", "Nach der Arbeit", "Im Winter"], answer: 0, why: "«Vor einer Wanderung im Wald halte kurz inne»." },
        { q: "Was braucht die Dankbarkeit laut Text?", kind: "inferencial", options: ["Keine Worte und keinen Tempel", "Ein teures Buch", "Einen Lehrer"], answer: 0, why: "«Sie braucht keine Worte und keinen Tempel»: se infiere su sencillez." },
        { q: "Welcher Satz passt zum Text?", kind: "critica", options: ["Dankbarkeit macht den Weg leichter", "Wandern ist gefährlich", "Dankbarkeit braucht einen Tempel"], answer: 0, why: "La conclusión del texto: quien agradece camina más ligero." },
      ],
      vf: [
        { text: "Du dankst den Beinen und den Schuhen.", value: true, why: "Está literal en el primer párrafo." },
        { text: "Dankbarkeit braucht einen Tempel.", value: false, why: "El texto dice: «keine Worte und keinen Tempel»." },
        { text: "Wer dankbar geht, geht leichter.", value: true, why: "Frase final del segundo párrafo." },
      ],
    },
    {
      id: "md-de-a2-02-2", theme: "relax mentale",
      title: "Ein Kopf wie ein Rucksack", titleEs: "Una cabeza como una mochila",
      minutes: 2,
      paragraphs: [
        { it: "Dein Kopf ist wie ein voller Rucksack: Termine, Sorgen, E-Mails. Beim Wandern merkst du das Gewicht. Nach einer Stunde im Wald wird der Rucksack leichter — der innere auch.", es: "Tu cabeza es como una mochila llena: citas, preocupaciones, correos. Al caminar notas el peso. Tras una hora en el bosque, la mochila pesa menos: también la de dentro." },
        { it: "Gib deinen Gedanken einen Rastplatz: «Bleib hier, ich gehe weiter.» Gedanken dürfen kommen, aber sie müssen nicht mitkommen. Du entscheidest, was du trägst — im Rucksack und im Kopf.", es: "Dale a tus pensamientos un lugar de descanso: «Quédate aquí, yo sigo». Los pensamientos pueden llegar, pero no tienen que venir contigo. Tú decides qué llevas: en la mochila y en la cabeza." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una comparación de marcas de mochilas", "Aligerar la mente: los pensamientos como peso que se suelta", "Una ruta de montaña difícil"],
        answer: 1,
        why: "La metáfora mochila-cabeza apunta a soltar peso mental, no al equipamiento.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Der Kopf ist wie ein voller Rucksack.",
          "Gedanken dürfen kommen, aber nicht mitkommen.",
          "Du entscheidest, was du trägst.",
          "Ein guter Rucksack kostet mindestens zweihundert Euro.",
          "Termine und Sorgen machen das Gewicht.",
        ],
        intruder: 3,
        why: "El precio de las mochilas es un dato de compras, ajeno a la metáfora mental: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Gedanken sind wie Gepäck — du entscheidest, was du trägst",
          "Rucksäcke sind in Deutschland sehr teuer",
          "Wandern ist anstrengend und gefährlich",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Nach einer Stunde wird der Rucksack leichter",
          "Gedanken dürfen kommen",
          "Du entscheidest, was du trägst",
        ],
        distractors: [
          "Der Wald ist voller Wildschweine",
          "Man muss den Kopf mit Medikamenten leeren",
          "E-Mails sind wichtiger als Sorgen",
        ],
      },
    },
    {
      id: "md-de-a2-02-3", theme: "meditazione",
      title: "Gehen und atmen", titleEs: "Caminar y respirar",
      minutes: 2,
      paragraphs: [
        { it: "Beim Wandern gibt es einen einfachen Rhythmus: Schritt, Atem, Schritt, Atem. Vier Schritte einatmen, vier Schritte ausatmen. Der Weg wird zur Meditation, ohne dass du es merkst.", es: "Al caminar hay un ritmo sencillo: paso, respiración, paso, respiración. Cuatro pasos inhalando, cuatro pasos exhalando. El camino se convierte en meditación sin que te des cuenta." },
        { it: "Du brauchst kein Meditationskissen und keine stille Höhle. Der Wald ist dein Meditationsraum, die Schuhe deine Glocke. Wenn der Kopf wegfliegt, bringt dich der nächste Schritt zurück.", es: "No necesitas cojín de meditación ni cueva silenciosa. El bosque es tu sala de meditación, los zapatos tu campana. Si la cabeza se va volando, el siguiente paso te trae de vuelta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de carrera rápida", "Convertir la caminata en meditación con ritmo y respiración", "Una reseña de calzado deportivo"],
        answer: 1,
        why: "El título une caminar y respirar: la caminata como práctica contemplativa.",
      },
      sequence: {
        instr: "Ordena la práctica:",
        events: ["Beginne langsam zu gehen", "Atme über vier Schritte ein", "Atme über vier Schritte aus", "Finde den Rhythmus von Schritt und Atem", "Komm mit dem nächsten Schritt zurück"],
      },
      listen: {
        intro: "Escucha la guía breve y responde:",
        audioIt: "Willkommen bei der Gehmeditation. Stehe kurz still. Spüre deine Füße auf dem Boden. Jetzt geh langsam los. Vier Schritte einatmen. Vier Schritte ausatmen. Der Wind berührt dein Gesicht. Wenn ein Gedanke kommt, kein Problem: Der nächste Schritt bringt dich zurück.",
        questions: [
          { q: "Was spürst du am Anfang?", kind: "literal", options: ["Die Füße auf dem Boden", "Hunger", "Musik"], answer: 0, why: "«Spüre deine Füße auf dem Boden»." },
          { q: "Wie viele Schritte atmest du ein?", kind: "literal", options: ["Vier", "Fünf", "Zehn"], answer: 0, why: "«Vier Schritte einatmen»." },
          { q: "Was berührt dein Gesicht?", kind: "literal", options: ["Der Wind", "Der Regen", "Ein Blatt"], answer: 0, why: "«Der Wind berührt dein Gesicht»." },
          { q: "Was machst du, wenn ein Gedanke kommt?", kind: "inferencial", options: ["Ich komme mit dem nächsten Schritt zurück", "Ich höre auf zu gehen", "Ich werde ärgerlich"], answer: 0, why: "Se infiere: el siguiente paso te trae de vuelta, sin pelear." },
        ],
      },
    },
  ],

  "de-cu-a2-03": [
    {
      id: "md-de-a2-03-1", theme: "qui e ora",
      title: "Das Kind im Sand", titleEs: "La niña en la arena",
      minutes: 3,
      paragraphs: [
        { it: "Ein Kind im Sandkasten ist ganz da. Es sieht nicht auf die Uhr und denkt nicht an morgen. Es gräbt, baut, lacht. Der Sand ist jetzt, das Wasser ist jetzt.", es: "Un niño en el arenero está del todo ahí. No mira el reloj ni piensa en mañana. Cava, construye, ríe. La arena es ahora, el agua es ahora." },
        { it: "Du warst auch so ein Kind. Erinnerung ist schön, aber heute geht es um das Sandkastengefühl: eine Sache, volle Aufmerksamkeit, keine Uhr. Was ist dein Sand heute? Vielleicht eine Tasse Tee, ein Gespräch, ein Lied.", es: "Tú también fuiste así. El recuerdo es bonito, pero hoy va del sentirse del arenero: una sola cosa, atención plena, sin reloj. ¿Cuál es tu arena hoy? Quizá una taza de té, una conversación, una canción." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de juegos infantiles", "Recuperar la presencia absorbida de la infancia: tu «arena» de hoy", "Un artículo sobre relojes infantiles"],
        answer: 1,
        why: "El título apunta al niño concentrado en la arena; el texto lo usa como espejo del presente.",
      },
      quiz: [
        { q: "Woran denkt das Kind im Sandkasten?", kind: "literal", options: ["An nichts — es ist ganz da", "An morgen", "An die Schule"], answer: 0, why: "«Es sieht nicht auf die Uhr und denkt nicht an morgen»." },
        { q: "Was ist «dein Sand» heute?", kind: "inferencial", options: ["Eine Sache mit voller Aufmerksamkeit", "Ein neuer Job", "Ein teures Hobby"], answer: 0, why: "Se infiere de la fórmula: una cosa, atención plena, sin reloj." },
        { q: "Welche Idee passt am besten?", kind: "critica", options: ["Präsenz ist ein Kindertalent, das man wieder üben kann", "Nur Kinder können präsent sein", "Uhren sind für Kinder wichtig"], answer: 0, why: "El texto invita a recuperar esa presencia infantil como práctica adulta." },
      ],
      vf: [
        { text: "Das Kind im Sandkasten denkt an morgen.", value: false, why: "El texto dice: «denkt nicht an morgen»." },
        { text: "Erinnerung ist schön, aber heute geht es um Präsenz.", value: true, why: "Frase inicial del segundo párrafo." },
        { text: "Eine Tasse Tee kann «dein Sand» sein.", value: true, why: "Está en la lista de ejemplos del final." },
      ],
    },
    {
      id: "md-de-a2-03-2", theme: "relax fisico",
      title: "Wie ein Kind einschlafen", titleEs: "Dormirse como un niño",
      minutes: 2,
      paragraphs: [
        { it: "Kinder schlafen leicht ein. Sie spannen zuerst alle Muskeln an — und lassen dann alles los. Erwachsene machen das Gegenteil: Sie bleiben angespannt und wundern sich über den schlechten Schlaf.", es: "Los niños se duermen con facilidad. Primero tensan todos los músculos y después lo sueltan todo. Los adultos hacen lo contrario: siguen tensos y se sorprenden del mal sueño." },
        { it: "Probiere die Kinder-Methode: Spanne die Beine an, halte kurz, lass los. Arme, Schultern, Gesicht — alles an, alles los. Dann atme tief und sag innerlich: «Nun ist Ruhe.» Der Körper versteht diese Sprache noch.", es: "Prueba el método infantil: tensa las piernas, aguanta un momento, suelta. Brazos, hombros, cara: todo tenso, todo suelto. Luego respira hondo y di por dentro: «Ahora, calma». El cuerpo aún entiende ese idioma." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un anuncio de colchones", "Relajación muscular progresiva para dormir mejor", "Un cuento para niños"],
        answer: 1,
        why: "El título anuncia el sueño infantil; el texto enseña tensar y soltar para dormir.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Kinder spannen alle Muskeln an und lassen dann los.",
          "Erwachsene bleiben oft angespannt.",
          "Spanne die Beine an, halte kurz, lass los.",
          "Man sollte direkt vor dem Schlafen einen Marathon laufen.",
          "Sag innerlich: Nun ist Ruhe.",
        ],
        intruder: 3,
        why: "Correr un maratón antes de dormir contradice la relajación progresiva: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Anspannen und Loslassen hilft beim Einschlafen",
          "Kinder schlafen immer schlecht",
          "Man braucht ein neues Bett",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Kinder spannen erst an und lassen dann los",
          "Erwachsene bleiben angespannt",
          "Der Körper versteht die Sprache der Ruhe noch",
        ],
        distractors: [
          "Man soll abends Sport machen",
          "Kinder brauchen kein Schlaflied",
          "Schlaf ist Zeitverschwendung",
        ],
      },
    },
    {
      id: "md-de-a2-03-3", theme: "spiritualità",
      title: "Omas Stille", titleEs: "El silencio de la abuela",
      minutes: 3,
      paragraphs: [
        { it: "Meine Oma saß jeden Abend am Fenster. Sie sprach kein Mantra und machte nichts Besonderes. Sie saß einfach da, mit Tee und Stille. Heute nenne ich das: Spiritualität des einfachen Sitzens.", es: "Mi abuela se sentaba cada tarde a la ventana. No recitaba mantra alguno ni hacía nada especial. Simplemente estaba ahí, con té y silencio. Hoy yo llamo a eso: la espiritualidad del simple sentarse." },
        { it: "Für Oma war das Sitzen vielleicht ein Danke: für den Tag, für den Tee, für die Menschen. Du kannst es heute probieren. Setz dich hin, sei still und sage leise danke. Mehr braucht es nicht.", es: "Para la abuela, sentarse era quizá un gracias: por el día, por el té, por la gente. Hoy puedes probarlo. Siéntate, guarda silencio y da las gracias en voz baja. No hace falta más." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Oraciones de una religión concreta", "La espiritualidad serena de la abuela: sentarse en silencio y dar gracias", "Una receta de té de la abuela"],
        answer: 1,
        why: "El título apunta al silencio de la abuela; el texto la presenta como práctica espiritual sencilla.",
      },
      sequence: {
        instr: "Ordena la tarde de la abuela:",
        events: ["Oma setzte sich ans Fenster", "Sie trank ihren Tee", "Sie saß still und dachte nach", "Sie sagte leise danke", "Der Tag endete in Ruhe"],
      },
      listen: {
        intro: "Escucha el recuerdo y responde:",
        audioIt: "Am Abend, wenn die Küche dunkel wurde, setzte sich meine Oma ans Fenster. Sie trank ihren Tee langsam, Schluck für Schluck. Sie sprach kein Wort. Nur der Mond kam und ging. Am Ende sagte sie fast unhörbar: Danke für diesen Tag. Dann schlief sie lächelnd ein.",
        questions: [
          { q: "Wohin setzte sich Oma?", kind: "literal", options: ["Ans Fenster", "An den Tisch", "Ins Bett"], answer: 0, why: "«setzte sich meine Oma ans Fenster»." },
          { q: "Was trank sie?", kind: "literal", options: ["Tee", "Kaffee", "Milch"], answer: 0, why: "«Sie trank ihren Tee langsam»." },
          { q: "Was sagte sie am Ende?", kind: "literal", options: ["Danke für diesen Tag", "Gute Nacht", "Wo ist die Fernbedienung"], answer: 0, why: "«Danke für diesen Tag»." },
          { q: "Wie schlief sie ein?", kind: "inferencial", options: ["Lächelnd", "Weinend", "Ärgerlich"], answer: 0, why: "«Dann schlief sie lächelnd ein»: se infiere su paz interior." },
        ],
      },
    },
  ],

  "de-cu-a2-04": [
    {
      id: "md-de-a2-04-1", theme: "relax mentale",
      title: "Der Zug im Kopf", titleEs: "El tren en la cabeza",
      minutes: 3,
      paragraphs: [
        { it: "Im Zug schlafen wir oft ein — die Gedanken fahren weiter ohne uns. Das ist normal. Gedanken sind Züge: Sie kommen, sie halten, sie fahren ab. Du bist der Bahnsteig, nicht der Zug.", es: "En el tren nos dormimos a menudo; los pensamientos siguen viajando sin nosotros. Es normal. Los pensamientos son trenes: llegan, se detienen, parten. Tú eres el andén, no el tren." },
        { it: "Wenn ein Gedanke einfährt — «Ich habe vergessen!» —, dann wink ihm zu. Ja, hallo, gute Fahrt. Du bleibst stehen. Der nächste Gedanke kommt bestimmt. Der Bahnsteig bleibt: ruhig, fest, da.", es: "Cuando un pensamiento entra en la estación («¡Olvidé algo!»), salúdalo con la mano. Sí, hola, buen viaje. Tú te quedas. El siguiente pensamiento llegará seguro. El andén permanece: tranquilo, firme, ahí." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Horarios de la Deutsche Bahn", "Los pensamientos como trenes que pasan: tú eres el andén", "Un relato de aventuras en tren"],
        answer: 1,
        why: "La metáfora tren-pensamiento apunta a la calma mental, no a la logística ferroviaria.",
      },
      quiz: [
        { q: "Was sind die Gedanken im Bild?", kind: "literal", options: ["Züge", "Autos", "Vögel"], answer: 0, why: "«Gedanken sind Züge»: está literal." },
        { q: "Wer bist du im Bild?", kind: "inferencial", options: ["Der Bahnsteig", "Der Zug", "Der Fahrer"], answer: 0, why: "«Du bist der Bahnsteig, nicht der Zug»: se infiere tu papel." },
        { q: "Was bedeutet «wink ihm zu»?", kind: "critica", options: ["Die Gedanken freundlich ziehen lassen, ohne mitzufahren", "Die Gedanken laut stoppen", "Den Zug verpassen wollen"], answer: 0, why: "La actitud del texto: saludar y quedarse, sin pelear con el pensamiento." },
      ],
      vf: [
        { text: "Gedanken fahren manchmal ohne uns weiter.", value: true, why: "«Die Gedanken fahren weiter ohne uns»." },
        { text: "Du sollst jedem Gedanken hinterherfahren.", value: false, why: "Al contrario: «Du bleibst stehen»." },
        { text: "Der Bahnsteig bleibt ruhig und fest.", value: true, why: "Frase final del texto." },
      ],
    },
    {
      id: "md-de-a2-04-2", theme: "meditazione",
      title: "Warten auf dem Bahnsteig", titleEs: "Esperar en el andén",
      minutes: 2,
      paragraphs: [
        { it: "Der Zug hat fünf Minuten Verspätung. Perfekt! Steck das Handy weg und komm zum Stehen. Fühle beide Füße auf dem Boden. Atme ein: ich bin hier. Atme aus: der Zug kommt, wenn er kommt.", es: "El tren va con cinco minutos de retraso. ¡Perfecto! Guarda el móvil y quédate de pie. Siente los dos pies en el suelo. Inhala: estoy aquí. Exhala: el tren llegará cuando llegue." },
        { it: "Wartezeit ist verlorene Zeit? Nein — sie ist geschenkte Zeit. Fünf Minuten ohne Bildschirm, mit dir und deinem Atem. Der Bahnhof wird dein Meditationsraum, die Durchsage deine Glocke.", es: "¿Esperar es tiempo perdido? No: es tiempo regalado. Cinco minutos sin pantalla, contigo y con tu respiración. La estación se vuelve tu sala de meditación y el aviso por megafonía, tu campana." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una queja por los retrasos", "Convertir la espera del andén en mini meditación", "Las normas de la Deutsche Bahn"],
        answer: 1,
        why: "El retraso del tren se presenta como oportunidad («Perfekt!»), no como queja.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Steck das Handy weg und komm zum Stehen.",
          "Fühle beide Füße auf dem Boden.",
          "Wartezeit ist geschenkte Zeit.",
          "Ein Bahnticket nach München kostet 89 Euro.",
          "Die Durchsage wird deine Glocke.",
        ],
        intruder: 3,
        why: "El precio del billete es información de viaje, ajena a la práctica contemplativa de la espera.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Wartezeit kann Meditation sein",
          "Die Bahn ist immer zu spät",
          "Handys sind am Bahnhof verboten",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Fühle beide Füße auf dem Boden",
          "Fünf Minuten ohne Bildschirm",
          "Der Bahnhof wird dein Meditationsraum",
        ],
        distractors: [
          "Man soll laut atmen, damit alle es hören",
          "Der Zug kommt nie",
          "Wartezeit ist immer verloren",
        ],
      },
    },
    {
      id: "md-de-a2-04-3", theme: "qui e ora",
      title: "Aus dem Fenster", titleEs: "Por la ventana",
      minutes: 3,
      paragraphs: [
        { it: "Sitz im Zug und schau aus dem Fenster. Vorbei: Felder, Häuser, Flüsse, Kühe. Alles kommt einmal und geht. Genau wie dieser Moment — auch er hält nicht an.", es: "Siéntate en el tren y mira por la ventana. Pasan: campos, casas, ríos, vacas. Todo llega una vez y se va. Igual que este momento: tampoco él se detiene." },
        { it: "Das ist die Lehre vom Zugfenster: Nichts bleibt, und das ist gut so. Halte einen Moment fest — nein, das geht nicht. Also: Sieh ihn an, diesen Moment. Er ist einmalig, wie ein Haus im Vorbeifliegen.", es: "Esa es la lección de la ventanilla: nada permanece, y así está bien. Intenta fijar un momento: no, imposible. Entonces míralo, ese momento. Es único, como una casa al pasar volando." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Descripción de paisajes alemanes", "La ventanilla del tren como maestra del aquí y ahora", "Una guía de fotografía de viajes"],
        answer: 1,
        why: "El título apunta a mirar por la ventana; el texto convierte el paisaje en lección de presencia.",
      },
      sequence: {
        instr: "Ordena la contemplación:",
        events: ["Sitz im Zug und schau aus dem Fenster", "Sieh die Felder und Häuser vorbeiziehen", "Bemerke: alles kommt und geht", "Sieh einen Moment genau an", "Lass ihn weiterziehen"],
      },
      listen: {
        intro: "Escucha la variación y responde:",
        audioIt: "Schau einmal aus dem Fenster. Da: ein Feld, gelb und grün. Da: ein kleiner Bahnhof, ein Mann winkt. Da: ein Fluss, glatt wie Glas. Alles zieht vorbei, nichts bleibt stehen. Nur du bist hier, in diesem Moment, im Zug. Atme einmal tief. Das ist deine Station.",
        questions: [
          { q: "Welche Farbe hat das Feld?", kind: "literal", options: ["Gelb und grün", "Rot und blau", "Grau"], answer: 0, why: "«ein Feld, gelb und grün»." },
          { q: "Wer winkt am kleinen Bahnhof?", kind: "literal", options: ["Ein Mann", "Eine Frau", "Ein Kind"], answer: 0, why: "«ein Mann winkt»." },
          { q: "Wie ist der Fluss?", kind: "literal", options: ["Glatt wie Glas", "Wild und laut", "Trocken"], answer: 0, why: "«ein Fluss, glatt wie Glas»." },
          { q: "Was bedeutet «Das ist deine Station»?", kind: "inferencial", options: ["Dieser Moment ist mein Ort der Präsenz", "Ich muss jetzt aussteigen", "Der Zug hält gleich"], answer: 0, why: "Se infiere: el momento presente es tu parada de atención, no una parada real." },
        ],
      },
    },
  ],

  "de-cu-a2-05": [
    {
      id: "md-de-a2-05-1", theme: "relax fisico",
      title: "Vor dem Termin atmen", titleEs: "Respirar antes de la cita",
      minutes: 2,
      paragraphs: [
        { it: "Vor einer Verabredung: Steh kurz still. Atme dreimal tief in den Bauch. Beim Ausatmen lassen die Schultern sinken. So kommst du ruhig an — und pünktlich.", es: "Antes de una quedada: quédate un momento quieto. Respira tres veces hondo hacia el vientre. Al exhalar, deja que los hombros bajen. Así llegas tranquilo, y puntual." },
        { it: "Pünktlichkeit ist in Deutschland eine höfliche Sache. Aber geh nicht gehetzt: Drei Atemzüge dauern zwanzig Sekunden. Ruhig und pünktlich — das geht zusammen, und dein Herz sagt danke.", es: "La puntualidad es en Alemania una forma de cortesía. Pero no corras apurado: tres respiraciones duran veinte segundos. Tranquilo y puntual: ambas cosas caben juntas, y tu corazón lo agradece." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo correr a las citas", "Tres respiraciones para llegar tranquilo y puntual", "La historia de los relojes alemanes"],
        answer: 1,
        why: "El título apunta a la respiración previa a la cita; el texto la une a la puntualidad.",
      },
      quiz: [
        { q: "Wohin atmest du tief?", kind: "literal", options: ["In den Bauch", "In die Schuhe", "In die Tasche"], answer: 0, why: "«Atme dreimal tief in den Bauch»." },
        { q: "Warum ist ruhiges Pünktlichsein gut?", kind: "inferencial", options: ["Weil Hast Stress macht und Ruhe höflich wirkt", "Weil man sonst Geld zahlt", "Weil es schneller geht"], answer: 0, why: "Se infiere del contraste gehetzt/ruhig y de «dein Herz sagt danke»." },
        { q: "Welche Haltung empfiehlt der Text?", kind: "critica", options: ["Ruhig und pünktlich kommen", "Immer schneller laufen", "Später kommen, aber entspannt"], answer: 0, why: "La idea central: calma y puntualidad van juntas." },
      ],
      vf: [
        { text: "Drei Atemzüge dauern zwanzig Sekunden.", value: true, why: "Está literal en el segundo párrafo." },
        { text: "Du sollst gehetzt zur Verabredung laufen.", value: false, why: "El texto aconseja lo contrario: ruhig ankommen." },
        { text: "Pünktlichkeit ist in Deutschland höflich.", value: true, why: "«Pünktlichkeit ist eine höfliche Sache»." },
      ],
    },
    {
      id: "md-de-a2-05-2", theme: "spiritualità",
      title: "Ein Vorsatz mit Herz", titleEs: "Un propósito con corazón",
      minutes: 2,
      paragraphs: [
        { it: "Pläne sind gut: «Ich werde mehr spazieren, ich werde weniger scrollen.» Aber Vorsätze ohne Herz sind wie Züge ohne Fahrer. Frag dich leise: Was wünscht sich mein Herz wirklich?", es: "Los planes están bien: «Pasearé más, haré menos scroll». Pero los propósitos sin corazón son trenes sin maquinista. Pregúntate en voz baja: ¿qué desea de verdad mi corazón?" },
        { it: "Ein Vorsatz mit Herz klingt so: «Ich werde jeden Abend einen Moment Stille halten — für mich.» Das ist kein Plan für den Lebenslauf. Das ist ein Versprechen an dich selbst, und solche Versprechen sind kostbar.", es: "Un propósito con corazón suena así: «Cada noche guardaré un momento de silencio, para mí». No es un plan para el currículum. Es una promesa a ti mismo, y esas promesas son valiosas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una agenda semanal productiva", "Propósitos con corazón: un compromiso contigo mismo", "Cómo escribir un currículum"],
        answer: 1,
        why: "El título une propósito y corazón: el compromiso personal, no la productividad.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Vorsätze ohne Herz sind wie Züge ohne Fahrer.",
          "Frag dich: Was wünscht sich mein Herz?",
          "Ein Vorsatz mit Herz ist ein Versprechen an dich selbst.",
          "Züge ohne Fahrer müssen sofort repariert werden.",
          "Ich werde jeden Abend einen Moment Stille halten.",
        ],
        intruder: 3,
        why: "La reparación técnica de trenes rompe la metáfora del texto: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Ein Vorsatz braucht ein Herz hinter dem Plan",
          "Alle Pläne sind nutzlos",
          "Abends darf man nicht ruhig sein",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Vorsätze ohne Herz sind Züge ohne Fahrer",
          "Frag dich: Was wünscht sich mein Herz?",
          "Solche Versprechen sind kostbar",
        ],
        distractors: [
          "Man soll nie Pläne machen",
          "Stille ist gefährlich",
          "Nur der Lebenslauf zählt",
        ],
      },
    },
    {
      id: "md-de-a2-05-3", theme: "relax mentale",
      title: "Der Freitag-Abend-Kopf", titleEs: "La cabeza del viernes por la noche",
      minutes: 3,
      paragraphs: [
        { it: "Freitagabend. Die Woche ist vorbei, aber der Kopf arbeitet weiter: E-Mails, Meetings, Aufgaben. Der Körper sitzt schon auf dem Sofa, der Kopf noch im Büro.", es: "Viernes por la noche. La semana terminó, pero la cabeza sigue trabajando: correos, reuniones, tareas. El cuerpo ya está en el sofá; la cabeza, todavía en la oficina." },
        { it: "Mach die Woche im Kopf zu, wie ein Buch. Sag innerlich: «Feierabend.» Atme aus und lass die Aufgaben bis Montag liegen — sie warten geduldig. Der Feierabend ist eine Kunst, und du kannst sie lernen.", es: "Cierra la semana en la cabeza, como un libro. Di por dentro: «Se acabó la jornada». Exhala y deja las tareas para el lunes: esperan pacientes. El Feierabend es un arte, y puedes aprenderlo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Crónica del estrés laboral", "Cerrar mentalmente la semana: el arte del Feierabend", "Una guía de ocio nocturno"],
        answer: 1,
        why: "El título apunta a la cabeza que no desconecta el viernes; el texto enseña a cerrar la semana.",
      },
      sequence: {
        instr: "Ordena el ritual del Feierabend:",
        events: ["Setz dich auf das Sofa", "Bemerke den arbeitenden Kopf", "Sag innerlich: Feierabend", "Atme bewusst aus", "Lass die Aufgaben bis Montag liegen"],
      },
      listen: {
        intro: "Escucha el cierre de semana y responde:",
        audioIt: "Feierabend. Schau dir die Woche an wie einen Film, der vorbei ist. Der Montag mit seinen Terminen. Der Mittwoch mit dem Meeting. Und jetzt: Vorhang zu. Atme tief aus. Die Aufgaben warten geduldig bis Montag. Diese Stunde gehört dir. Vielleicht ein Tee, vielleicht Musik — aber ruhig, ganz ruhig.",
        questions: [
          { q: "Womit vergleichst du die Woche?", kind: "literal", options: ["Mit einem Film", "Mit einem Buch", "Mit einem Lied"], answer: 0, why: "«wie einen Film, der vorbei ist»." },
          { q: "Was kommt nach dem Vorhang?", kind: "literal", options: ["Ein tiefer Atem", "Ein neuer Termin", "Ein Anruf"], answer: 0, why: "«Vorhang zu. Atme tief aus»." },
          { q: "Wem gehört diese Stunde?", kind: "inferencial", options: ["Dir", "Dem Chef", "Der Arbeit"], answer: 0, why: "«Diese Stunde gehört dir»: se infiere del cierre." },
          { q: "Wie soll die Stunde sein?", kind: "inferencial", options: ["Ruhig", "Laut", "Voller Termine"], answer: 0, why: "«aber ruhig, ganz ruhig»: se infiere el tono del descanso." },
        ],
      },
    },
  ],

  "de-cu-a2-06": [
    {
      id: "md-de-a2-06-1", theme: "meditazione",
      title: "Mein Ort, mein Atem", titleEs: "Mi lugar, mi respiración",
      minutes: 2,
      paragraphs: [
        { it: "Eine neue Wohnung, ein neues Zimmer — und doch nimmst du dich selbst mit. Setz dich in die Mitte des leeren Zimmers. Atme. Das Zimmer wird dein Zuhause, wenn du ihm deine Ruhe gibst.", es: "Un piso nuevo, una habitación nueva, y aun así te llevas contigo a ti mismo. Siéntate en medio de la habitación vacía. Respira. La habitación será tu hogar cuando le regales tu calma." },
        { it: "Beginne mit einer Ecke: ein Stuhl, eine Kerze, ein Glas Wasser. Das ist dein ruhiger Ort. Jedes Zuhause hat einen — er ist klein, aber er gehört ganz dir.", es: "Empieza por un rincón: una silla, una vela, un vaso de agua. Ese es tu lugar tranquilo. Todo hogar tiene uno: es pequeño, pero es del todo tuyo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Consejos de decoración barata", "Crear un rincón de calma en la casa nueva", "Un contrato de alquiler explicado"],
        answer: 1,
        why: "El título une lugar y respiración: la calma como fundamento del hogar nuevo.",
      },
      quiz: [
        { q: "Wo sitzt du am Anfang?", kind: "literal", options: ["In der Mitte des leeren Zimmers", "Auf dem Balkon", "Im Treppenhaus"], answer: 0, why: "«Setz dich in die Mitte des leeren Zimmers»." },
        { q: "Wann wird das Zimmer dein Zuhause?", kind: "inferencial", options: ["Wenn du ihm deine Ruhe gibst", "Wenn es groß ist", "Wenn es Möbel hat"], answer: 0, why: "Se infiere de la frase final del primer párrafo." },
        { q: "Warum ist der ruhige Ort wichtig?", kind: "critica", options: ["Weil Zuhause entsteht, wenn man ihm Ruhe gibt", "Weil Ecken billig sind", "Weil Gäste davon beeindruckt sind"], answer: 0, why: "La idea central: el hogar se construye con tu propia calma." },
      ],
      vf: [
        { text: "Du nimmst dich selbst in die neue Wohnung mit.", value: true, why: "Frase inicial del texto: te llevas contigo a ti mismo." },
        { text: "Der ruhige Ort muss groß sein.", value: false, why: "«Er ist klein, aber er gehört ganz dir»." },
        { text: "Jedes Zuhause hat einen ruhigen Ort.", value: true, why: "Está literal en el segundo párrafo." },
      ],
    },
    {
      id: "md-de-a2-06-2", theme: "qui e ora",
      title: "Das Geräusch der Heizung", titleEs: "El ruido de la calefacción",
      minutes: 2,
      paragraphs: [
        { it: "In einer neuen Wohnung ist alles fremd: die Straßen, die Nachbarn, das Geräusch der Heizung. Nachts liegst du wach und hörst dem Haus zu. Es knarrt, es summt, es atmet.", es: "En un piso nuevo todo es ajeno: las calles, los vecinos, el ruido de la calefacción. De noche estás despierto y escuchas a la casa. Cruje, zumba, respira." },
        { it: "Das Haus spricht. Hör zu, ohne zu bewerten. Jedes Geräusch ist ein kleines Jetzt: Knarren — jetzt. Summen — jetzt. So wird das fremde Haus langsam dein Haus, Geräusch für Geräusch.", es: "La casa habla. Escucha sin juzgar. Cada ruido es un pequeño ahora: crujido, ahora; zumbido, ahora. Así la casa ajena se vuelve poco a poco tu casa, ruido a ruido." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo reparar una calefacción", "Escuchar los sonidos de la casa nueva para habitarla", "Una historia de fantasmas"],
        answer: 1,
        why: "El título apunta al ruido de la calefacción; el texto lo convierte en escucha consciente.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "In einer neuen Wohnung ist alles fremd.",
          "Das Haus knarrt, summt, atmet.",
          "Jedes Geräusch ist ein kleines Jetzt.",
          "Eine neue Heizung kostet etwa dreitausend Euro.",
          "Hör zu, ohne zu bewerten.",
        ],
        intruder: 3,
        why: "El coste de la calefacción es un dato técnico ajeno a la escucha consciente: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Zuhören macht das fremde Haus zu deinem Haus",
          "Neue Wohnungen sind immer laut",
          "Man soll nachts Musik hören",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Nachts liegst du wach und hörst zu",
          "Das Haus knarrt und summt",
          "Jedes Geräusch ist ein kleines Jetzt",
        ],
        distractors: [
          "Man muss das Haus sofort verlassen",
          "Heizungen kosten viel Geld",
          "Nachbarn hören immer mit",
        ],
      },
    },
    {
      id: "md-de-a2-06-3", theme: "relax fisico",
      title: "Kisten auspacken, Körper entspannen", titleEs: "Desembalar cajas, relajar el cuerpo",
      minutes: 2,
      paragraphs: [
        { it: "Umzug ist Kraftsport: heben, tragen, schieben. Am Ende tut alles weh — Rücken, Beine, Finger. Gönn dir eine Pause: Leg dich auf den Boden, Arme neben dem Körper.", es: "Mudarse es un deporte de fuerza: levantar, cargar, empujar. Al final lo duele todo: espalda, piernas, dedos. Date una pausa: túmbate en el suelo, brazos junto al cuerpo." },
        { it: "Fühle den Boden unter dem Rücken. Er trägt dich ganz allein — du musst nichts tun. Beim Ausatmen werde ein bisschen schwerer. Zehn Minuten Boden, und der Umzugstag wird wieder machbar.", es: "Siente el suelo bajo la espalda. Te sostiene él solo: no tienes que hacer nada. Al exhalar, hazte un poco más pesado. Diez minutos de suelo, y el día de mudanza vuelve a ser afrontable." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de mudanza rápidas", "Descanso consciente en el suelo tras la mudanza", "Una comparación de muebles"],
        answer: 1,
        why: "El título une desembalar y relajar el cuerpo: la pausa tras el esfuerzo.",
      },
      sequence: {
        instr: "Ordena el descanso post-mudanza:",
        events: ["Leg dich auf den Boden", "Lege die Arme neben den Körper", "Fühle, wie der Boden dich trägt", "Werde beim Ausatmen schwerer", "Bleib zehn Minuten liegen"],
      },
      listen: {
        intro: "Escucha la pausa de la mudanza y responde:",
        audioIt: "Die Kisten können warten. Leg dich auf den Rücken, ganz einfach. Die Beine lang, die Arme neben dem Körper. Der Boden trägt dich — du musst nichts halten. Atme aus und werde schwer. Beim nächsten Atemzug noch schwerer. Der Umzug endet heute nicht, aber diese Pause gehört dir.",
        questions: [
          { q: "Was kann warten?", kind: "literal", options: ["Die Kisten", "Der Vermieter", "Der Umzugswagen"], answer: 0, why: "«Die Kisten können warten»." },
          { q: "Wohin legst du die Arme?", kind: "literal", options: ["Neben den Körper", "Hinter den Kopf", "Auf die Brust"], answer: 0, why: "«die Arme neben dem Körper»." },
          { q: "Was musst du nicht tun?", kind: "inferencial", options: ["Nichts halten — der Boden trägt", "Zahlen", "Lächeln"], answer: 0, why: "«Du musst nichts halten»: se infiere el abandono del esfuerzo." },
          { q: "Wem gehört diese Pause?", kind: "inferencial", options: ["Dir", "Den Nachbarn", "Dem Chef"], answer: 0, why: "«Diese Pause gehört dir»: se infiere del cierre." },
        ],
      },
    },
  ],

  "de-cu-a2-07": [
    {
      id: "md-de-a2-07-1", theme: "spiritualità",
      title: "Der Körper als Freund", titleEs: "El cuerpo como amigo",
      minutes: 2,
      paragraphs: [
        { it: "Wenn der Kopf wehtut oder der Hals brennt, sagen wir: «Der Körper streikt.» Aber vielleicht spricht er nur. Ein Schmerz ist eine Botschaft: Ruhiger, bitte. Langsamer, bitte.", es: "Cuando duele la cabeza o arde la garganta, decimos: «El cuerpo se declara en huelga». Pero quizá solo habla. Un dolor es un mensaje: más despacio, por favor; más lento, por favor." },
        { it: "Sei heute wie ein guter Freund für deinen Körper. Ein warmer Tee ist eine Freundlichkeit. Eine Pause ist ein Geschenk. Und wenn der Arzt sagt: schonen — dann ist Schonung eine Form von Liebe.", es: "Sé hoy un buen amigo de tu cuerpo. Un té caliente es un gesto de amistad. Una pausa es un regalo. Y si el médico dice «reposo», entonces el reposo es una forma de cariño." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual médico", "Escuchar el cuerpo: el dolor como mensaje y el cuidado como amistad", "Una crítica al sistema sanitario"],
        answer: 1,
        why: "El título plantea la amistad con el cuerpo; el texto lee el dolor como mensaje.",
      },
      quiz: [
        { q: "Was ist ein Schmerz laut Text?", kind: "literal", options: ["Eine Botschaft", "Eine Strafe", "Ein Fehler"], answer: 0, why: "«Ein Schmerz ist eine Botschaft»." },
        { q: "Was bedeutet Schonung am Ende?", kind: "inferencial", options: ["Eine Form von Liebe", "Ein Zeichen von Schwäche", "Zeitverschwendung"], answer: 0, why: "Se infiere del tono: cuidarse es una forma de quererse." },
        { q: "Welche Haltung passt zum Text?", kind: "critica", options: ["Mit dem Körper freundlich sprechen und ihn pflegen", "Den Körper ignorieren", "Gegen den Körper kämpfen"], answer: 0, why: "La metáfora central: tratar el cuerpo como a un amigo." },
      ],
      vf: [
        { text: "Ein warmer Tee ist eine Freundlichkeit für den Körper.", value: true, why: "Está literal en el segundo párrafo." },
        { text: "Der Text sagt: Schonung ist Zeitverschwendung.", value: false, why: "Dice lo contrario: eine Form von Liebe." },
        { text: "Der Körper spricht vielleicht durch den Schmerz.", value: true, why: "«Aber vielleicht spricht er nur»." },
      ],
    },
    {
      id: "md-de-a2-07-2", theme: "relax mentale",
      title: "Im Wartezimmer", titleEs: "En la sala de espera",
      minutes: 2,
      paragraphs: [
        { it: "Das Wartezimmer: weiße Wände, alte Zeitschriften, tickende Uhr. Viele Menschen werden hier nervös. Du kannst es anders machen: Setz dich hin und komm zur Ruhe.", es: "La sala de espera: paredes blancas, revistas viejas, el reloj que hace tic. Mucha gente se pone nerviosa aquí. Tú puedes hacerlo distinto: siéntate y entra en calma." },
        { it: "Fühle den Stuhl unter dir. Atme ein, und atme noch länger aus. Die Uhr tickt weiter, und das ist okay. In zwanzig Minuten bist du dran — jetzt bist du hier. Das Wartezimmer wartet mit dir.", es: "Siente la silla bajo ti. Inhala, y exhala aún más largo. El reloj sigue con su tic, y está bien. En veinte minutos te toca; ahora estás aquí. La sala de espera espera contigo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una queja por los tiempos de espera", "Convertir la sala de espera en un lugar de calma", "Las revistas de los consultorios"],
        answer: 1,
        why: "El título sitúa la escena; el texto transforma la espera en práctica de calma.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Das Wartezimmer hat weiße Wände und eine tickende Uhr.",
          "Fühle den Stuhl unter dir.",
          "Atme ein, und atme noch länger aus.",
          "Zeitschriften von 1995 sind historische Dokumente.",
          "In zwanzig Minuten bist du dran.",
        ],
        intruder: 3,
        why: "El chiste sobre las revistas viejas es humor ajeno a la práctica de calma: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Auch das Warten kann ruhig sein — mit Atem und Aufmerksamkeit",
          "Wartezimmer sind immer schrecklich",
          "Man soll im Wartezimmer arbeiten",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Fühle den Stuhl unter dir",
          "Atme ein, und atme noch länger aus",
          "Jetzt bist du hier",
        ],
        distractors: [
          "Der Arzt kommt immer zu spät",
          "Uhren sind verboten",
          "Zeitschriften sind Geschenke",
        ],
      },
    },
    {
      id: "md-de-a2-07-3", theme: "meditazione",
      title: "Ein Atemzug gegen den Schmerz", titleEs: "Una respiración contra el dolor",
      minutes: 3,
      paragraphs: [
        { it: "Bei Kopfschmerzen hilft manchmal ein einfacher Trick: Atme in den Schmerz hinein, nicht weg von ihm. Klingt seltsam? Der Atem ist weich, der Schmerz ist hart. Weichheit gewinnt mit Geduld.", es: "Con dolor de cabeza a veces ayuda un truco sencillo: respira hacia el dolor, no lejos de él. ¿Suena raro? El aliento es suave, el dolor es duro. La suavidad gana con paciencia." },
        { it: "So geht es: Atme ein und stelle dir vor, der Atem fließt zum Kopf. Atme aus und stelle dir Wärme vor. Wiederhole das dreimal — kein Wundermittel, nur eine kleine Brücke der Aufmerksamkeit.", es: "Se hace así: inhala e imagina que el aliento sube a la cabeza. Exhala e imagina calor. Repítelo tres veces: no es un milagro, solo un pequeño puente de atención." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un anuncio de analgésicos", "Respirar dirigiendo la atención hacia el dolor, con suavidad", "Teorías médicas sobre la migraña"],
        answer: 1,
        why: "El título anuncia una respiración frente al dolor; el texto la guía paso a paso.",
      },
      sequence: {
        instr: "Ordena la práctica:",
        events: ["Atme ein", "Stelle dir vor: der Atem fließt zum Kopf", "Atme aus", "Stelle dir Wärme vor", "Wiederhole es dreimal"],
      },
      listen: {
        intro: "Escucha la práctica guiada y responde:",
        audioIt: "Setz dich bequem hin. Wenn der Kopf drückt, musst du nicht dagegen kämpfen. Atme ein und lenke den Atem sanft nach oben, zum Kopf. Atme aus und denke: Wärme. Noch einmal: ein — Wärme kommt. Aus — Wärme bleibt. Der Atem ist weich. Der Schmerz darf weicher werden.",
        questions: [
          { q: "Wohin lenkst du den Atem?", kind: "literal", options: ["Zum Kopf", "Zu den Füßen", "Zum Fenster"], answer: 0, why: "«Lenke den Atem sanft nach oben, zum Kopf»." },
          { q: "Was denkst du beim Ausatmen?", kind: "literal", options: ["Wärme", "Kälte", "Arbeit"], answer: 0, why: "«Atme aus und denke: Wärme»." },
          { q: "Wie ist der Atem im Bild?", kind: "literal", options: ["Weich", "Hart", "Schnell"], answer: 0, why: "«Der Atem ist weich»." },
          { q: "Was darf der Schmerz tun?", kind: "inferencial", options: ["Weicher werden", "Lauter werden", "Wachsen"], answer: 0, why: "«Der Schmerz darf weicher werden»: se infiere el efecto buscado." },
        ],
      },
    },
  ],

  "de-cu-a2-08": [
    {
      id: "md-de-a2-08-1", theme: "qui e ora",
      title: "Mit allen Sinnen kochen", titleEs: "Cocinar con todos los sentidos",
      minutes: 3,
      paragraphs: [
        { it: "Heute kochst du Kartoffelsalat — ganz achtsam. Fühle die kühle, raue Schale der Kartoffeln. Höre das Messer auf dem Brett. Rieche die Zwiebel — und weine ruhig, das gehört dazu.", es: "Hoy cocinas ensalada de patatas, del todo atento. Siente la piel fría y áspera de las patatas. Escucha el cuchillo sobre la tabla. Huele la cebolla, y llora tranquilo: forma parte." },
        { it: "Kochen mit Aufmerksamkeit schmeckt anders. Der Löffel wird zum Pinsel, die Küche zum Atelier. Am Ende isst du nicht nur Kartoffelsalat: Du isst eine halbe Stunde deines Lebens — bewusst gekocht, bewusst gegessen.", es: "Cocinar con atención sabe distinto. La cuchara se vuelve pincel, la cocina taller. Al final no comes solo ensalada de patatas: comes media hora de tu vida, cocinada y comida con conciencia." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una receta rápida de microondas", "Cocinar con atención plena: los sentidos en la cocina", "La biografía de una cocinera famosa"],
        answer: 1,
        why: "El título invita a cocinar con todos los sentidos, no a seguir una receta.",
      },
      quiz: [
        { q: "Was fühlst du am Anfang?", kind: "literal", options: ["Die kühle, raue Schale der Kartoffeln", "Das warme Wasser", "Den hungrigen Magen"], answer: 0, why: "Está literal en el primer párrafo." },
        { q: "Warum weinst du beim Zwiebelschneiden?", kind: "inferencial", options: ["Weil Zwiebeln die Augen reizen — das gehört dazu", "Weil du traurig bist", "Weil der Salat misslingt"], answer: 0, why: "Se infiere de «und weine ruhig, das gehört dazu»." },
        { q: "Was heißt «bewusst gegessen»?", kind: "critica", options: ["Mit Aufmerksamkeit kochen und essen, statt nebenbei", "Schnell essen, damit es nicht kalt wird", "Nur teure Zutaten essen"], answer: 0, why: "La idea central: presencia en todo el proceso, de la cocina a la mesa." },
      ],
      vf: [
        { text: "Der Löffel wird im Text zum Pinsel.", value: true, why: "Metáfora literal del segundo párrafo." },
        { text: "Achtsames Kochen schmeckt genau wie normales.", value: false, why: "El texto dice: «schmeckt anders»." },
        { text: "Du isst eine halbe Stunde deines Lebens.", value: true, why: "Frase final literal del texto." },
      ],
    },
    {
      id: "md-de-a2-08-2", theme: "relax fisico",
      title: "Hände wärmen, Seele wärmen", titleEs: "Calentar las manos, calentar el alma",
      minutes: 2,
      paragraphs: [
        { it: "In Omas Küche war es warm: der Ofen, der Dampf, die vielen Hände. Heute: Fülle eine Schüssel mit warmem Wasser und halte deine Hände hinein. Spüre, wie die Wärme langsam hochkriecht.", es: "En la cocina de la abuela hacía calor: el horno, el vapor, las manos de todos. Hoy: llena un cuenco con agua tibia y sumerge las manos. Siente cómo el calor sube despacio." },
        { it: "Hände sagen dem Kopf: Alles gut. Das ist alte Küchenweisheit: warme Hände, ruhiger Puls. Beim Suppenrühren passierte es schon Oma — der Löffel kreist, das Herz auch, und alles wird langsam.", es: "Las manos le dicen a la cabeza: todo bien. Es la vieja sabiduría de la cocina: manos calientes, pulso sereno. A la abuela le pasaba removiendo la sopa: la cuchara gira, el corazón también, y todo se ralentiza." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Instrucciones de fontanería", "El calor de las manos como vía de calma (sabiduría de la cocina)", "Cómo hacer una sopa de la abuela"],
        answer: 1,
        why: "El título une manos y alma; el texto usa el agua tibia como práctica corporal.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Omas Küche war warm: Ofen, Dampf, viele Hände.",
          "Halte deine Hände in warmes Wasser.",
          "Warme Hände, ruhiger Puls.",
          "Suppenlöffel aus Silber kosten viel Geld.",
          "Beim Rühren kreist der Löffel, und alles wird langsam.",
        ],
        intruder: 3,
        why: "El precio de los cubiertos es un dato de compra, ajeno a la sabiduría de cocina: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Warme Hände beruhigen — eine alte Küchenweisheit",
          "Oma hatte keinen Herd",
          "Suppe ist ungesund",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Omas Küche war warm",
          "Halte deine Hände in warmes Wasser",
          "Warme Hände, ruhiger Puls",
        ],
        distractors: [
          "Kalte Hände sind gefährlich",
          "Man braucht eine Mikrowelle",
          "Oma rührte nie um",
        ],
      },
    },
    {
      id: "md-de-a2-08-3", theme: "spiritualità",
      title: "Omas stiller Dank", titleEs: "El agradecimiento silencioso de la abuela",
      minutes: 3,
      paragraphs: [
        { it: "Vor dem Essen hielt Oma kurz inne. «So, jetzt danke ich», sagte sie leise — wem, wusste sie nie genau. Dem Boden, dem Regen, den Kartoffeln, dem Leben.", es: "Antes de comer, la abuela hacía una pausa breve. «Bueno, ahora doy las gracias», decía en voz baja. ¿A quién? Nunca lo tuvo claro. A la tierra, a la lluvia, a las patatas, a la vida." },
        { it: "Dank am Tisch braucht keine feierlichen Worte: Danke dem Boden, danke dem Regen, danke den Händen. Wenn du heute isst, halte eine Sekunde inne. Das Essen schmeckt dann wie mit Segen.", es: "El agradecimiento en la mesa no necesita palabras solemnes: gracias a la tierra, a la lluvia, a las manos. Si hoy comes, detente un segundo. La comida entonces sabe a bendición." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Oraciones de una religión concreta", "La pausa de gratitud de la abuela antes de comer", "Una receta de Kartoffelsalat"],
        answer: 1,
        why: "El título apunta al agradecimiento silencioso antes de comer, sin religión concreta.",
      },
      sequence: {
        instr: "Ordena el gesto de la abuela:",
        events: ["Oma hielt vor dem Essen inne", "Sie sagte leise: Jetzt danke ich", "Sie dankte dem Boden und dem Regen", "Alle begannen zu essen", "Das Essen schmeckte wie mit Segen"],
      },
      listen: {
        intro: "Escucha la escena y responde:",
        audioIt: "Wenn wir bei Oma essen durften, passierte immer dasselbe: Der Teller war voll, aber niemand aß. Oma sah auf den Tisch, lächelte und sagte leise: «Danke dem Boden, danke dem Regen, danke den Händen.» Erst dann nahmen wir die Löffel. Die Suppe schmeckte an diesen Tagen immer ein bisschen besser.",
        questions: [
          { q: "Was war auf dem Tisch?", kind: "literal", options: ["Volle Teller", "Leere Teller", "Blumen"], answer: 0, why: "«Der Teller war voll»." },
          { q: "Wem dankte Oma?", kind: "literal", options: ["Dem Boden, dem Regen, den Händen", "Dem Koch", "Der Post"], answer: 0, why: "Está literal en el audio." },
          { q: "Wann durften alle essen?", kind: "inferencial", options: ["Nach dem Dank", "Vor dem Dank", "Gleichzeitig mit dem Dank"], answer: 0, why: "Se infiere: «Erst dann nahmen wir die Löffel»." },
          { q: "Wie schmeckte die Suppe an diesen Tagen?", kind: "inferencial", options: ["Ein bisschen besser", "Salziger", "Kalt"], answer: 0, why: "«Schmeckte immer ein bisschen besser»: se infiere el efecto del ritual." },
        ],
      },
    },
  ],

  "de-cu-a2-09": [
    {
      id: "md-de-a2-09-1", theme: "relax mentale",
      title: "Vor der Tür des Büros", titleEs: "Antes de la puerta de la oficina",
      minutes: 3,
      paragraphs: [
        { it: "Vor dem Vorstellungsgespräch: Deine Hände sind feucht, dein Herz rennt. Ganz normal. Nimm den Stress an — er will dir helfen, wach zu sein. Kämpfe nicht gegen ihn.", es: "Antes de la entrevista: las manos sudan, el corazón corre. Completamente normal. Acepta el estrés: quiere ayudarte a estar despierto. No pelees contra él." },
        { it: "Atme dreimal: ein — «Ich bin hier», aus — «Mehr muss ich nicht». Du musst nicht perfekt sein, nur echt. Wer ruhig atmet, denkt klarer. Und klares Denken ist die beste Visitenkarte.", es: "Respira tres veces: dentro, «estoy aquí»; fuera, «no necesito más». No tienes que ser perfecto, solo auténtico. Quien respira tranquilo piensa más claro. Y pensar claro es la mejor tarjeta de visita." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Tácticas para impresionar en entrevistas", "Aceptar los nervios y respirar antes de la entrevista", "Cómo negociar el sueldo"],
        answer: 1,
        why: "El título sitúa el momento previo a la entrevista; el texto trabaja los nervios con el aire.",
      },
      quiz: [
        { q: "Was ist mit deinen Händen vor dem Gespräch?", kind: "literal", options: ["Sie sind feucht", "Sie sind eiskalt", "Sie sind warm"], answer: 0, why: "«Deine Hände sind feucht»." },
        { q: "Was will der Stress laut Text?", kind: "inferencial", options: ["Dir helfen, wach zu sein", "Dich krank machen", "Dich ärgern"], answer: 0, why: "«Er will dir helfen, wach zu sein»: se infiere su función positiva." },
        { q: "Was ist die beste Visitenkarte?", kind: "critica", options: ["Ruhiger Atem und klares Denken", "Ein teurer Anzug", "Ein perfekter Lebenslauf"], answer: 0, why: "«Klares Denken ist die beste Visitenkarte»: la idea central." },
      ],
      vf: [
        { text: "Du musst perfekt sein.", value: false, why: "El texto dice: «Du musst nicht perfekt sein, nur echt»." },
        { text: "Wer ruhig atmet, denkt klarer.", value: true, why: "Está literal en el segundo párrafo." },
        { text: "Dein Herz rennt vor Aufregung.", value: true, why: "«Dein Herz rennt»: está literal." },
      ],
    },
    {
      id: "md-de-a2-09-2", theme: "meditazione",
      title: "Eine Aufgabe, ganz", titleEs: "Una tarea, del todo",
      minutes: 2,
      paragraphs: [
        { it: "Im Café: Bestellungen annehmen, Kaffee mahlen, lächeln. Das klingt einfach — und wird zur Meditation, wenn du nur das tust. Nur diese Bestellung. Nur dieser Kaffee. Nur dieses Lächeln.", es: "En el café: tomar pedidos, moler café, sonreír. Suena simple, y se vuelve meditación si solo haces eso. Solo este pedido. Solo este café. Solo esta sonrisa." },
        { it: "Arbeit zerreißt uns, wenn wir zehn Dinge gleichzeitig denken. Aber sie kann uns sammeln: eine Aufgabe, ganz. Der Gast spürt es, der Kaffee auch. Achtsame Arbeit ist keine Langsamkeit — sie ist Gegenwart.", es: "El trabajo nos rompe cuando pensamos diez cosas a la vez. Pero también puede reunirnos: una tarea, del todo. El cliente lo nota, el café también. El trabajo atento no es lentitud: es presencia." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una queja sobre el trabajo de camarero", "El trabajo sencillo como meditación: una cosa a la vez", "Trucos para trabajar más rápido"],
        answer: 1,
        why: "El título apunta a la tarea hecha del todo; el texto convierte el café en práctica.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Im Café: Bestellungen annehmen, Kaffee mahlen, lächeln.",
          "Nur diese Bestellung, nur dieses Lächeln.",
          "Arbeit kann uns sammeln.",
          "Ein Vertrag für Espressomaschinen läuft über fünf Jahre.",
          "Achtsame Arbeit ist keine Langsamkeit.",
        ],
        intruder: 3,
        why: "El contrato de las máquinas de café es un detalle administrativo, ajeno a la práctica atenta.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Eine Aufgabe ganz tun ist achtsame Arbeit",
          "Multitasking ist der beste Weg",
          "Kaffee schmeckt immer gleich",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Nur diese Bestellung, nur dieser Kaffee",
          "Arbeit kann uns sammeln",
          "Achtsame Arbeit ist Gegenwart",
        ],
        distractors: [
          "Man soll zwei Dinge gleichzeitig machen",
          "Gäste mögen nur schnelle Kellner",
          "Meditation braucht ein Kloster",
        ],
      },
    },
    {
      id: "md-de-a2-09-3", theme: "qui e ora",
      title: "Neu anfangen", titleEs: "Empezar de nuevo",
      minutes: 3,
      paragraphs: [
        { it: "Der erste Arbeitstag: neue Gesichter, neue Geräusche, neue Regeln. Der Kopf produziert Fragen: Mach ich das richtig? Zieh die Aufmerksamkeit zurück: Sieh das Café. Riech den Kaffee. Hör die Maschine.", es: "El primer día de trabajo: caras nuevas, ruidos nuevos, reglas nuevas. La cabeza fabrica preguntas: ¿lo haré bien? Trae la atención de vuelta: mira el café, huele el café, escucha la máquina." },
        { it: "Ankommen braucht keine Perfektion, nur Neugier. Ein Schritt, dann der nächste. Am Ende des Tages weißt du hundert Dinge mehr als am Morgen — und das ist ein schönes Gefühl. Heute warst du einfach da. Genug.", es: "Llegar no exige perfección, solo curiosidad. Un paso, luego el siguiente. Al final del día sabes cien cosas más que por la mañana, y eso es un buen sentimiento. Hoy simplemente estuviste. Suficiente." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo pedir un aumento", "Llegar presente al primer día de trabajo", "Las normas laborales alemanas"],
        answer: 1,
        why: "El título anuncia un comienzo; el texto aterriza la atención en el primer día.",
      },
      sequence: {
        instr: "Ordena el primer día:",
        events: ["Komm im Café an", "Zieh die Aufmerksamkeit zurück", "Sieh das Café und riech den Kaffee", "Geh einen Schritt nach dem anderen", "Am Ende weißt du hundert Dinge mehr"],
      },
      listen: {
        intro: "Escucha el primer día y responde:",
        audioIt: "Der erste Tag im Café. Die Kasse piept, die Maschine zischt, überall Namen. Du weißt noch nichts — und genau das ist gut. Heute lernst du nur zuschauen: wie die Kollegen lächeln, wie der Dampf aufsteigt, wie der Raum klingt. Morgen kannst du schon mithelfen. Heute darfst du einfach da sein.",
        questions: [
          { q: "Was macht die Kasse?", kind: "literal", options: ["Sie piept", "Sie singt", "Sie schläft"], answer: 0, why: "«Die Kasse piept»." },
          { q: "Was lernst du heute?", kind: "literal", options: ["Nur zuschauen", "Alles alleine", "Nichts"], answer: 0, why: "«Heute lernst du nur zuschauen»." },
          { q: "Was kannst du morgen?", kind: "inferencial", options: ["Mithelfen", "Den Chef kritisieren", "Urlaub machen"], answer: 0, why: "«Morgen kannst du schon mithelfen»: se infiere el progreso." },
          { q: "Was darfst du heute sein?", kind: "inferencial", options: ["Einfach da", "Perfekt", "Unsichtbar"], answer: 0, why: "«Heute darfst du einfach da sein»: se infiere la actitud." },
        ],
      },
    },
  ],

  "de-cu-a2-10": [
    {
      id: "md-de-a2-10-1", theme: "relax fisico",
      title: "Wind als Massage", titleEs: "El viento como masaje",
      minutes: 3,
      paragraphs: [
        { it: "An der Nordsee gibt es fast immer Wind. Viele regen sich auf — du kannst es anders halten: Stell dich in den Wind und lass dich massieren. Der Rücken, die Arme, das Gesicht: alles wird durchgepustet.", es: "En el mar del Norte casi siempre hace viento. Muchos se quejan; tú puedes hacerlo distinto: ponte frente al viento y déjate masajear. La espalda, los brazos, la cara: todo queda aireado." },
        { it: "Schließ die Augen. Der Wind trägt alte Gedanken fort — Richtung Meer. Nach fünf Minuten hast du rote Wangen und einen leeren Kopf. Das ist die billigste Wellness der Welt: Nordsee-Wind, rund um die Uhr.", es: "Cierra los ojos. El viento se lleva los pensamientos viejos rumbo al mar. A los cinco minutos tienes mejillas rojas y la cabeza vacía. Es el wellness más barato del mundo: viento del mar del Norte, a todas horas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una queja del viento costero", "El viento del mar del Norte como masaje y limpieza mental", "Prendas de abrigo para la costa"],
        answer: 1,
        why: "El título presenta el viento como masaje; el texto lo convierte en práctica.",
      },
      quiz: [
        { q: "Was gibt es an der Nordsee fast immer?", kind: "literal", options: ["Wind", "Schnee", "Stille"], answer: 0, why: "«An der Nordsee gibt es fast immer Wind»." },
        { q: "Was macht der Wind mit alten Gedanken?", kind: "inferencial", options: ["Er trägt sie fort", "Er verdoppelt sie", "Er verkauft sie"], answer: 0, why: "«Der Wind trägt alte Gedanken fort»: se infiere el efecto limpiador." },
        { q: "Was ist die «billigste Wellness»?", kind: "critica", options: ["Fünf Minuten Nordsee-Wind mit offenen Sinnen", "Ein Spa-Hotel", "Eine teure Creme"], answer: 0, why: "La conclusión: el viento como wellness gratuito y siempre disponible." },
      ],
      vf: [
        { text: "Viele Menschen freuen sich über den Wind.", value: false, why: "«Viele regen sich auf»: más bien se quejan." },
        { text: "Du hast nach fünf Minuten rote Wangen.", value: true, why: "Está literal en el segundo párrafo." },
        { text: "Der Wind massiert Rücken, Arme und Gesicht.", value: true, why: "Está literal en el primer párrafo." },
      ],
    },
    {
      id: "md-de-a2-10-2", theme: "relax mentale",
      title: "Wolken lesen", titleEs: "Leer las nubes",
      minutes: 2,
      paragraphs: [
        { it: "Liegen in den Dünen, Blick nach oben: Wolken. Der Kopf will sofort das Wetter deuten — lass ihn. Dann schau einfach: Die Wolke ist jetzt ein Schaf, jetzt ein Wal, jetzt nichts mehr.", es: "Tumbado en las dunas, mirada al cielo: nubes. La cabeza quiere interpretar el tiempo al instante; déjala. Después solo mira: la nube es ahora una oveja, ahora una ballena, ahora ya nada." },
        { it: "Wolkenschauen ist Meditation für Faule? Nein — für Gegenwärtige. Jede Wolke entsteht einmal und vergeht. Wie Gedanken. Du liegst nur da und siehst zu — das ist die ganze Technik.", es: "¿Mirar nubes es meditación para vagos? No: para presentes. Cada nube nace una vez y se deshace. Como los pensamientos. Tú solo estás ahí mirando: esa es toda la técnica." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["El pronóstico del tiempo explicado", "Observar nubes como meditación del presente", "Nombres de figuras y animales"],
        answer: 1,
        why: "El título invita a leer nubes; el texto las usa como metáfora de los pensamientos.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Liegen in den Dünen, Blick nach oben.",
          "Die Wolke ist jetzt ein Schaf, jetzt ein Wal.",
          "Jede Wolke entsteht einmal und vergeht.",
          "Regenwolken bringen am Nachmittag Schauer mit Windstärke sechs.",
          "Du liegst nur da und siehst zu.",
        ],
        intruder: 3,
        why: "La predicción meteorológica rompe la contemplación: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Wolken wie Gedanken kommen und gehen — zuschauen genügt",
          "Wolken sagen das Wetter von morgen",
          "In den Dünen ist es zu kalt",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Die Wolke ist jetzt ein Schaf, jetzt nichts mehr",
          "Wie Gedanken",
          "Du liegst nur da und siehst zu",
        ],
        distractors: [
          "Man muss jede Wolke fotografieren",
          "Wolken sind gefährlich",
          "Faule Menschen meditieren nicht",
        ],
      },
    },
    {
      id: "md-de-a2-10-3", theme: "spiritualità",
      title: "Größe und Kleinheit", titleEs: "Grandeza y pequeñez",
      minutes: 3,
      paragraphs: [
        { it: "Am Strand, am Abend: Der Himmel wird groß, der Mensch klein. Das ist keine schlechte Nachricht. Endlich mal nicht der Wichtigste sein — welch Feriengefühl!", es: "En la playa, al atardecer: el cielo se hace grande, la persona pequeña. No es una mala noticia. Ser por fin no el más importante: ¡qué sensación de vacaciones!" },
        { it: "Die See hat keine Termine, das Watt keine E-Mails. Wer am Wasser steht, darf klein sein — und atmet trotzdem tief. Vielleicht ist das die eigentliche Erholung: nicht Pause vom Arbeiten, sondern Pause vom Wichtigsein.", es: "El mar no tiene citas, el Watt no tiene correos. Quien está junto al agua puede ser pequeño, y aun así respira hondo. Quizá esa es la verdadera recuperación: no pausa del trabajo, sino pausa de la importancia." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Instrucciones de natación", "Sentirse pequeño ante el mar: las vacaciones del ego", "Los horarios de las mareas"],
        answer: 1,
        why: "El título enfrenta grandeza y pequeñez; el texto descubre el alivio de no ser el centro.",
      },
      sequence: {
        instr: "Ordena la experiencia del atardecer:",
        events: ["Steh am Strand am Abend", "Der Himmel wird groß", "Du wirst klein", "Atme tief durch", "Genieße die Pause vom Wichtigsein"],
      },
      listen: {
        intro: "Escucha el atardecer y responde:",
        audioIt: "Abend an der Nordsee. Die Sonne sinkt, das Wasser wird still, und du stehst da — ein kleiner Punkt am Rand eines großen Meeres. Kein Handy klingelt hier laut. Nur die Wellen zählen die Zeit. Atme einmal tief ein. Und noch einmal. Diese Weite gehört jetzt dir.",
        questions: [
          { q: "Was macht die Sonne?", kind: "literal", options: ["Sie sinkt", "Sie springt", "Sie schläft ein"], answer: 0, why: "«Die Sonne sinkt»." },
          { q: "Wer zählt die Zeit?", kind: "literal", options: ["Die Wellen", "Die Uhr", "Die Möwen"], answer: 0, why: "«Nur die Wellen zählen die Zeit»." },
          { q: "Was klingelt hier nicht laut?", kind: "inferencial", options: ["Das Handy", "Die Kasse", "Der Wecker"], answer: 0, why: "«Kein Handy klingelt hier laut»: se infiere la desconexión." },
          { q: "Wem gehört die Weite?", kind: "inferencial", options: ["Dir", "Den Touristen", "Dem Meer"], answer: 0, why: "«Diese Weite gehört jetzt dir»: se infiere del cierre." },
        ],
      },
    },
  ],

  "de-cu-a2-11": [
    {
      id: "md-de-a2-11-1", theme: "meditazione",
      title: "Die Treppe hinauf", titleEs: "Subir la escalera",
      minutes: 2,
      paragraphs: [
        { it: "Jeden Tag die Treppen — vier Etagen, kein Aufzug. Die meisten fluchen. Du kannst es drehen: Eine Stufe, ein Atemzug. Zwei Stufen, ein Gedanke, der gehen darf.", es: "Cada día las escaleras: cuatro pisos sin ascensor. La mayoría maldice. Tú puedes darle la vuelta: un escalón, una respiración. Dos escalones, un pensamiento al que puede marcharse." },
        { it: "Oben angekommen, bist du nicht nur zu Hause — du bist auch angekommen bei dir. Das Treppensteigen wird zur Glocke: Jede Stufe ruft dich zurück. Wer so steigt, braucht kein Meditationskissen im achten Stock.", es: "Al llegar arriba no solo estás en casa: también has llegado a ti. La escalera se vuelve campana: cada peldaño te llama de vuelta. Quien sube así no necesita cojín de meditación en el octavo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo ahorrar electricidad", "Subir las escaleras como campana de atención", "Una protesta contra los ascensores"],
        answer: 1,
        why: "El título apunta a la subida diaria; el texto la convierte en práctica de presencia.",
      },
      quiz: [
        { q: "Wie viele Etagen hast du?", kind: "literal", options: ["Vier", "Zwei", "Acht"], answer: 0, why: "«Vier Etagen, kein Aufzug»." },
        { q: "Was brauchst du im achten Stock nicht mehr?", kind: "inferencial", options: ["Ein Meditationskissen", "Einen Aufzug", "Einen Schlüssel"], answer: 0, why: "Se infiere: la escalera ya cumple esa función." },
        { q: "Welche Haltung passt?", kind: "critica", options: ["Alltag als Übung nutzen", "Alltag nur ertragen", "Alltag vermeiden"], answer: 0, why: "La idea central: convertir lo cotidiano en práctica." },
      ],
      vf: [
        { text: "Die meisten Menschen fluchen über die Treppe.", value: true, why: "«Die meisten fluchen»." },
        { text: "Jede Stufe ruft dich zurück.", value: true, why: "«Jede Stufe ruft dich zurück»." },
        { text: "Oben angekommen bist du nervös und unruhig.", value: false, why: "El texto dice: angekommen bei dir." },
      ],
    },
    {
      id: "md-de-a2-11-2", theme: "qui e ora",
      title: "Guten Tag, Nachbar", titleEs: "Buenos días, vecino",
      minutes: 2,
      paragraphs: [
        { it: "Im Treppenhaus begegnest du dem Nachbarn — drei Sekunden, mehr nicht. Diese drei Sekunden können echt sein: Blick, Lächeln, «Guten Tag». Oder sie sind leer, während der Kopf woanders ist.", es: "En el rellano te cruzas con el vecino: tres segundos, nada más. Esos tres segundos pueden ser reales: mirada, sonrisa, «buenos días». O pueden estar vacíos, con la cabeza en otra parte." },
        { it: "Übe heute die echte Begrüßung: Ein Atemzug vor der Tür, dann der Blick. Du wirst sehen — der Nachbar sieht es. Menschen spüren Anwesenheit, auch in drei Sekunden. Gute Nachbarschaft beginnt so klein.", es: "Practica hoy el saludo real: una respiración antes de la puerta, luego la mirada. Verás que el vecino lo nota. Las personas perciben presencia, incluso en tres segundos. La buena vecindad empieza tan pequeño." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Conflictos entre vecinos", "El saludo consciente de tres segundos en el rellano", "Las normas del edificio"],
        answer: 1,
        why: "El título es el saludo; el texto lo convierte en mini práctica de presencia.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Im Treppenhaus begegnest du dem Nachbarn für drei Sekunden.",
          "Blick, Lächeln, Guten Tag.",
          "Ein Atemzug vor der Tür, dann der Blick.",
          "Das Treppenhaus wurde 1974 renoviert.",
          "Menschen spüren Anwesenheit.",
        ],
        intruder: 3,
        why: "La fecha de la renovación es un dato del edificio, ajeno a la práctica del saludo.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Auch drei Sekunden Begegnung können echt und gegenwärtig sein",
          "Nachbarn soll man meiden",
          "Im Treppenhaus muss man schweigen",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Blick, Lächeln, Guten Tag",
          "Ein Atemzug vor der Tür",
          "Gute Nachbarschaft beginnt klein",
        ],
        distractors: [
          "Man muss lange Gespräche führen",
          "Nachbarn mögen keine Begrüßung",
          "Das Treppenhaus ist ein Fitnessstudio",
        ],
      },
    },
    {
      id: "md-de-a2-11-3", theme: "relax fisico",
      title: "Ruhezeit für dich", titleEs: "Ruhezeit para ti",
      minutes: 3,
      paragraphs: [
        { it: "Ab 22 Uhr ist in deutschen Häusern Ruhezeit: kein Bohren, keine laute Musik. Die Nachbarn danken es dir — und dein Nervensystem auch. Die Ruhezeit ist eine geschenkte Grenze.", es: "A partir de las 22 h hay Ruhezeit en las casas alemanas: ni taladro ni música alta. Los vecinos te lo agradecen, y tu sistema nervioso también. La Ruhezeit es un límite regalado." },
        { it: "Nutze sie: Ab 22 Uhr leiser leben. Dimme das Licht, sprich weicher, atme langsamer. Der Körper hört auf diese Signale wie auf ein altes Lied. Wer die Abendruhe hält, schläft wie ein Stein — und bohrt morgen wieder frisch.", es: "Aprovéchala: desde las 22 h vive más bajo. Baja la luz, habla más suave, respira más lento. El cuerpo obedece esas señales como una vieja canción. Quien guarda la quietud vespertina duerme como una piedra, y mañana taladra con fuerzas nuevas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo taladrar de noche", "La Ruhezeit de las 22 como regalo para el cuerpo", "Una denuncia por ruido"],
        answer: 1,
        why: "El título juega con la Ruhezeit alemana; el texto la lee como descanso corporal.",
      },
      sequence: {
        instr: "Ordena la tarde tranquila:",
        events: ["Um 22 Uhr endet der Lärm", "Dimme das Licht", "Sprich weicher", "Atme langsamer", "Schlafe wie ein Stein"],
      },
      listen: {
        intro: "Escucha la noche tranquila y responde:",
        audioIt: "Es ist 22 Uhr. Offiziell ist jetzt Ruhezeit. Das Radio geht aus, das Licht wird weicher. Du hörst plötzlich neue Klänge: die Heizung, dein Atem, ein Auto weit weg. Lass den Tag langsam kleiner werden. Morgen bohrt der Nachbar wieder — heute nicht. Heute herrscht Ruhe, und du bist ein Teil davon.",
        questions: [
          { q: "Wann beginnt die Ruhezeit?", kind: "literal", options: ["Um 22 Uhr", "Um 20 Uhr", "Um 24 Uhr"], answer: 0, why: "«Es ist 22 Uhr. Offiziell ist jetzt Ruhezeit»." },
          { q: "Welche Klänge hörst du plötzlich?", kind: "literal", options: ["Die Heizung und den Atem", "Lauter Techno", "Den Fernseher"], answer: 0, why: "«Die Heizung, dein Atem, ein Auto weit weg»." },
          { q: "Was soll klein werden?", kind: "inferencial", options: ["Der Tag", "Das Zimmer", "Der Tisch"], answer: 0, why: "«Lass den Tag langsam kleiner werden»: se infiere la imagen." },
          { q: "Was macht der Nachbar morgen?", kind: "inferencial", options: ["Er bohrt wieder", "Er zieht um", "Er schläft den ganzen Tag"], answer: 0, why: "«Morgen bohrt der Nachbar wieder»: se infiere del humor final." },
        ],
      },
    },
  ],

  "de-cu-a2-12": [
    {
      id: "md-de-a2-12-1", theme: "spiritualità",
      title: "Gute Reise ins Weite", titleEs: "Buen viaje hacia lo amplio",
      minutes: 3,
      paragraphs: [
        { it: "Eine Reise beginnt nicht am Bahnsteig — sie beginnt innerlich. Packe auch Altes ein: einen Groll, eine Sorge, eine Meinung. Der Rucksack hat Platz, das Herz auch.", es: "Un viaje no comienza en el andén: comienza por dentro. Empaca también lo viejo: un rencor, una preocupación, una opinión. La mochila tiene sitio; el corazón también." },
        { it: "Unterwegs darfst du leichter werden. Jede Station lässt etwas zurück: den Groll in Köln, die Sorge in Hamburg. Am Meer angekommen, bist du nicht mehr derselbe Reisende. Reisen ist Wandlung — selbst beim Tagestrip ans Meer.", es: "Por el camino puedes volverte más ligero. Cada estación deja algo atrás: el rencor en Colonia, la preocupación en Hamburgo. Al llegar al mar ya no eres el mismo viajero. Viajar es transformarse, incluso en una excursión de un día al mar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una lista de equipaje técnico", "El viaje interior: soltar pesos en cada estación", "Los horarios del ferry a Norderney"],
        answer: 1,
        why: "El título apunta al viaje interior; el texto reparte el peso entre las estaciones.",
      },
      quiz: [
        { q: "Wo beginnt eine Reise wirklich?", kind: "literal", options: ["Innerlich", "Am Bahnsteig", "Im Büro"], answer: 0, why: "«Sie beginnt innerlich»." },
        { q: "Was darfst du unterwegs werden?", kind: "inferencial", options: ["Leichter", "Lauter", "Reicher"], answer: 0, why: "«Unterwegs darfst du leichter werden»: se infiere el aligeramiento." },
        { q: "Was heißt «Reisen ist Wandlung»?", kind: "critica", options: ["Man verändert sich, auch auf kurzen Reisen", "Man muss weit reisen, um sich zu ändern", "Reisen ist nur Erholung"], answer: 0, why: "La idea final: hasta el viaje corto transforma al viajero." },
      ],
      vf: [
        { text: "Der Rucksack hat Platz für Altes.", value: true, why: "«Der Rucksack hat Platz, das Herz auch»." },
        { text: "Jede Station lässt etwas zurück.", value: true, why: "Está literal en el segundo párrafo." },
        { text: "Am Meer angekommen, bist du genau derselbe.", value: false, why: "El texto dice: «nicht mehr derselbe Reisende»." },
      ],
    },
    {
      id: "md-de-a2-12-2", theme: "relax mentale",
      title: "Fensterplatz", titleEs: "Asiento de ventanilla",
      minutes: 2,
      paragraphs: [
        { it: "Im ICE, Fensterplatz: Die Landschaft läuft wie ein Film — Felder, Wälder, Dörfer. Der Kopf wird ruhig, wenn er nur zuschaut. Bewegung draußen, Stille innen.", es: "En el ICE, asiento de ventanilla: el paisaje corre como una película: campos, bosques, pueblos. La cabeza se aquieta cuando solo mira. Movimiento fuera, silencio dentro." },
        { it: "Das ist die Magie der Zugfahrt: Du darfst einfach sitzen, während die Welt sich bewegt. Die Probleme? Sie fahren auch mit — aber sie sitzen woanders. Am Ziel bist du wieder dran, mit einem frischen Kopf.", es: "Esa es la magia del viaje en tren: puedes simplemente sentarte mientras el mundo se mueve. ¿Los problemas? También viajan, pero se sientan en otro sitio. Al destino vuelves a estar tú, con la cabeza fresca." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Comparativa de trenes alemanes", "La ventanilla del tren: el mundo se mueve, tú en calma", "Cómo trabajar en el tren"],
        answer: 1,
        why: "El título es el asiento de ventanilla; el texto lo presenta como isla de calma.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Die Landschaft läuft wie ein Film.",
          "Der Kopf wird ruhig, wenn er nur zuschaut.",
          "Du darfst einfach sitzen, während die Welt sich bewegt.",
          "Ein Erste-Klasse-Ticket kostet doppelt so viel.",
          "Am Ziel bist du wieder dran.",
        ],
        intruder: 3,
        why: "El precio del billete es un dato comercial, ajeno a la calma del ventanilla: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Zugfahren kann den Kopf still machen: Bewegung draußen, Ruhe innen",
          "ICE-Züge sind zu teuer",
          "Am Fenster ist es zu kalt",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Die Landschaft läuft wie ein Film",
          "Du darfst einfach sitzen",
          "Am Ziel bist du wieder dran",
        ],
        distractors: [
          "Man muss im Zug arbeiten",
          "Fensterplätze sind nur für Kinder",
          "Züge fahren ohne Fahrer",
        ],
      },
    },
    {
      id: "md-de-a2-12-3", theme: "meditazione",
      title: "Ankommen auf der Insel", titleEs: "Llegar a la isla",
      minutes: 3,
      paragraphs: [
        { it: "Die Fähre legt an, die Möwen schreien, der Wind trägt Salz. Stopp — bevor du zu den Dünen rennst: Steh still. Drei Atemzüge. Nimm die Insel mit der Nase auf, mit den Ohren, mit der Haut.", es: "El ferry atraca, las gaviotas gritan, el viento trae sal. Alto: antes de correr a las dunas, quédate quieto. Tres respiraciones. Toma la isla con la nariz, con los oídos, con la piel." },
        { it: "Ankommen ist eine Kunst. Wer langsam ankommt, ist wirklich da. Wer hetzt, war nie weg — der Kopfkram ist mitgereist. Nimm dir fünf Minuten am Wasser: nur Stehen, Atmen, Sein. Dann beginnt der Urlaub wirklich.", es: "Llegar es un arte. Quien llega despacio está de verdad. Quien corre ni se fue: el mental se viajó con él. Tómate cinco minutos junto al agua: solo estar, respirar, ser. Entonces empiezan de verdad las vacaciones." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Guía turística de Norderney", "Llegar despacio: la isla empieza con tres respiraciones", "Horarios de ferrys"],
        answer: 1,
        why: "El título apunta al arte de llegar; el texto frena la prisa con la respiración.",
      },
      sequence: {
        instr: "Ordena la llegada:",
        events: ["Die Fähre legt an", "Steh still am Kai", "Nimm drei Atemzüge", "Nimm die Insel mit allen Sinnen auf", "Steh fünf Minuten am Wasser"],
      },
      listen: {
        intro: "Escucha la llegada a la isla y responde:",
        audioIt: "Willkommen auf der Insel. Bleib zuerst einmal stehen. Fühle den Wind, der nach Salz riecht. Höre die Möwen über dem Dach. Zehn Finger, zehn Zehen — alles ist angekommen. Atme dreimal tief ein und aus. Erst jetzt nimmst du deine Tasche. Der Urlaub wartet nicht — er hat schon begonnen.",
        questions: [
          { q: "Woran erinnert der Wind?", kind: "literal", options: ["An Salz", "An Kaffee", "An Benzin"], answer: 0, why: "«Der Wind, der nach Salz riecht»." },
          { q: "Was hörst du über dem Dach?", kind: "literal", options: ["Möwen", "Flugzeuge", "Musik"], answer: 0, why: "«Höre die Möwen über dem Dach»." },
          { q: "Was machst du nach den drei Atemzügen?", kind: "inferencial", options: ["Ich nehme meine Tasche", "Ich renne los", "Ich schlafe ein"], answer: 0, why: "«Erst jetzt nimmst du deine Tasche»: se infiere el orden pausado." },
          { q: "Wann hat der Urlaub begonnen?", kind: "inferencial", options: ["Er hat schon begonnen", "Er beginnt morgen", "Er beginnt nach dem Essen"], answer: 0, why: "«Der Urlaub wartet nicht — er hat schon begonnen»." },
        ],
      },
    },
  ],
};
