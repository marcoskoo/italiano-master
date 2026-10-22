import type { MindReading } from "../../cambridge-mind";

/* ═══ DE B1 · Mind readings (temáticas de conciencia) — 3 por unidad ══
   Metodología idéntica a las italianas, inglesas y portuguesas (v9.13):
   7 estrategias de comprensión lectora y de escucha. Textos en alemán
   de Alemania B1, traducción española a la vista. Campos `.it` =
   alemán (lengua de estudio), `.es` = español. Estrategia por índice:
   L1 = predict + quiz (lit/inf/crít) + V/F con justificación; L2 =
   predict + ideas + intruso; L3 = predict + secuencia + escucha.      */

export const DE_MIND_B1: Record<string, MindReading[]> = {
  "de-cu-b1-01": [
    {
      id: "md-de-b1-01-1", theme: "meditazione",
      title: "Drei Atemzüge vor der Meinung", titleEs: "Tres respiraciones antes de la opinión",
      minutes: 2,
      paragraphs: [
        { it: "Es ist Montag, und im Deutschkurs wartet die erste Diskussionsrunde. Bevor du deine Meinung sagst, nimm drei tiefe Atemzüge. Einatmen durch die Nase, ausatmen durch den Mund. Du musst nicht sofort antworten — eine kurze Stille ist erlaubt.", es: "Es lunes, y en el curso de alemán espera la primera ronda de debate. Antes de dar tu opinión, toma tres respiraciones profundas. Inhala por la nariz, exhala por la boca. No tienes que responder de inmediato: una pausa breve está permitida." },
        { it: "Diese drei Atemzüge sind eine kleine Meditation. Sie geben deinen Gedanken Zeit, sich zu ordnen, weil ein ruhiger Kopf klarer argumentieren kann. Der Atem ist wie ein Anker: Du kommst zu dir selbst zurück, bevor du in die Diskussion gehst.", es: "Estas tres respiraciones son una pequeña meditación. Dan a tus pensamientos tiempo para ordenarse, porque una cabeza tranquila argumenta con más claridad. La respiración es como un ancla: vuelves a ti mismo antes de entrar en la discusión." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un debate sobre la política alemana", "Respirar con calma antes de dar tu opinión en clase", "Un curso de oratoria profesional"],
        answer: 1,
        why: "El título apunta a la respiración y al momento de opinar, no a la política ni a la oratoria.",
      },
      quiz: [
        { q: "Was machst du, bevor du deine Meinung sagst?", kind: "literal", options: ["Ich nehme drei tiefe Atemzüge", "Ich schreibe ein Protokoll", "Ich verlasse den Raum"], answer: 0, why: "«Nimm drei tiefe Atemzüge» está literal al inicio del texto." },
        { q: "Warum hilft der Atem beim Argumentieren?", kind: "inferencial", options: ["Weil er die Gedanken ordnet", "Weil er die Meinung der anderen ändert", "Weil er Zeit verschwendet"], answer: 0, why: "«Sie geben deinen Gedanken Zeit, sich zu ordnen»: se infiere que la cabeza tranquila argumenta mejor." },
        { q: "Welche Haltung empfiehlt der Text?", kind: "critica", options: ["Schnell reden, damit niemand widerspricht", "Stille zulassen und ruhig bleiben", "Immer das letzte Wort haben"], answer: 1, why: "La idea central: la pausa breve está permitida y el ancla del aliento da calma." },
      ],
      vf: [
        { text: "Du musst sofort antworten, wenn dich jemand fragt.", value: false, why: "El texto dice lo contrario: «Du musst nicht sofort antworten»." },
        { text: "Der Atem ist wie ein Anker.", value: true, why: "«Der Atem ist wie ein Anker» está literal en el segundo párrafo." },
        { text: "Ein ruhiger Kopf kann klarer argumentieren.", value: true, why: "«Weil ein ruhiger Kopf klarer argumentieren kann»." },
      ],
    },
    {
      id: "md-de-b1-01-2", theme: "qui e ora",
      title: "Der Stift in der Hand", titleEs: "El bolígrafo en la mano",
      minutes: 2,
      paragraphs: [
        { it: "Die Gruppe schreibt jetzt die neue Regel gemeinsam auf. Nimm deinen Stift in die Hand und spüre ihn: das leichte Plastik, die weiche Spitze, das kleine Geräusch auf dem Papier. Schreibe langsam. Jeder Buchstabe entsteht in diesem Moment.", es: "El grupo escribe ahora la regla nueva juntos. Toma tu bolígrafo en la mano y siéntelo: el plástico ligero, la punta suave, el pequeño ruido sobre el papel. Escribe despacio. Cada letra nace en este momento." },
        { it: "Wenn du schreibst, schreib. Wenn dein Kopf zur nächsten Aufgabe springt, lächle und komm zurück zum Blatt. Hier und jetzt gibt es nur dich, den Stift und das Papier. Der Rest darf warten, bis die Zeile fertig ist.", es: "Cuando escribes, escribe. Si tu cabeza salta a la siguiente tarea, sonríe y vuelve a la hoja. En el aquí y el ahora solo hay tú, el bolígrafo y el papel. Lo demás puede esperar a que la línea esté terminada." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una crítica a la letra de los estudiantes", "Escribir con plena atención: el aquí y ahora de una línea", "Un anuncio de bolígrafos baratos"],
        answer: 1,
        why: "El título se centra en la sensación del bolígrafo en la mano, típico de un ejercicio de presencia.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Spüre das leichte Plastik in der Hand.",
          "Schreibe langsam, Buchstabe für Buchstabe.",
          "Wenn dein Kopf springt, lächle und komm zurück.",
          "Ein guter Kugelschreiber kostet zwei Euro fünfzig.",
          "Der Rest darf warten, bis die Zeile fertig ist.",
        ],
        intruder: 3,
        why: "El precio del bolígrafo no pertenece a la experiencia sensorial de la escritura: es información práctica ajena al texto.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Schreiben als Übung im Hier und Jetzt",
          "Schreiben ist nur nützlich, wenn es schnell geht",
          "Regeln sollte man immer allein aufschreiben",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Du spürst die weiche Spitze des Stifts",
          "Jeder Buchstabe entsteht in diesem Moment",
          "Der Rest darf warten, bis die Zeile fertig ist",
        ],
        distractors: [
          "Die Gruppe diskutiert laut über das Thema",
          "Du schreibst die Regel mit dem Handy",
          "Am Ende liest der Lehrer alles vor",
        ],
      },
    },
    {
      id: "md-de-b1-01-3", theme: "relax fisico",
      title: "Die Schultern vor dem Sprechen", titleEs: "Los hombros antes de hablar",
      minutes: 2,
      paragraphs: [
        { it: "Viele Menschen werden nervös, wenn sie vor anderen sprechen. Der Körper zeigt es ganz deutlich: Die Schultern steigen, der Kiefer wird hart, die Hände werden feucht. Das ist normal — dein Körper will dich schützen, auch wenn keine Gefahr da ist.", es: "Mucha gente se pone nerviosa cuando habla ante otros. El cuerpo lo muestra con toda claridad: los hombros suben, la mandíbula se endurece, las manos se humedecen. Es normal: tu cuerpo quiere protegerte, aunque no haya ningún peligro." },
        { it: "Probiere es jetzt: Lass die Schultern sinken. Öffne den Kiefer ein wenig und seufze leise. Spüre den Boden unter den Füßen. Wenn du das nächste Mal diskutierst, wirst du fester stehen — innen ruhig, außen freundlich.", es: "Pruébalo ahora: deja caer los hombros. Abre un poco la mandíbula y suspira suavemente. Siente el suelo bajo los pies. Cuando discutas la próxima vez, estarás más firme: por dentro tranquilo, por fuera amable." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso de teatro para actores", "Soltar hombros y mandíbula antes de hablar en público", "Un análisis médico del estrés"],
        answer: 1,
        why: "El título une los hombros con el momento de hablar: apunta a relajación física, no a teatro ni medicina.",
      },
      sequence: {
        instr: "Ordena los pasos del ejercicio:",
        events: ["Beobachte deine Schultern", "Lass die Schultern sinken", "Öffne den Kiefer ein wenig", "Seufze leise", "Spüre den Boden unter den Füßen"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Kurze Übung vor der nächsten Kursdiskussion. Setz dich gerade hin. Lass zuerst die Schultern nach unten sinken. Öffne dann den Kiefer ein wenig und seufze leise dabei. Atme zweimal tief ein und aus. Spüre jetzt den Boden unter deinen Füßen. Wenn du gleich sprichst, bleib mit den Schultern weich und mit dem Kopf ruhig.",
        questions: [
          { q: "Wohin sinken die Schultern?", kind: "literal", options: ["Nach unten", "Nach oben", "Nach vorn"], answer: 0, why: "«Lass zuerst die Schultern nach unten sinken» está dicho literalmente." },
          { q: "Was machst du mit dem Kiefer?", kind: "literal", options: ["Ich öffne ihn ein wenig", "Ich beiße die Zähne zusammen", "Ich drehe den Kopf"], answer: 0, why: "«Öffne dann den Kiefer ein wenig»." },
          { q: "Wie oft atmest du tief?", kind: "literal", options: ["Zweimal", "Zehnmal", "Gar nicht"], answer: 0, why: "«Atme zweimal tief ein und aus»." },
          { q: "Wie bleibst du beim Sprechen?", kind: "inferencial", options: ["Mit weichen Schultern und ruhigem Kopf", "Mit harten Schultern und schnellem Kopf", "Ganz still und ohne Worte"], answer: 0, why: "«Bleib mit den Schultern weich und mit dem Kopf ruhig»: se infiere del cierre del audio." },
        ],
      },
    },
  ],

  "de-cu-b1-02": [
    {
      id: "md-de-b1-02-1", theme: "relax mentale",
      title: "Der erste Tag im Büro", titleEs: "El primer día en la oficina",
      minutes: 2,
      paragraphs: [
        { it: "Der erste Arbeitstag beginnt, und dein Kopf produziert Gedanken ohne Pause: Was, wenn ich etwas Falsches sage? Wo war noch mal die Küche? Wer sind all die Menschen? Lass diese Gedanken wie Züge vorbeifahren. Du musst nicht in jeden einsteigen.", es: "El primer día de trabajo empieza, y tu cabeza produce pensamientos sin pausa: ¿y si digo algo mal? ¿dónde estaba la cocina? ¿quiénes son todas estas personas? Deja que esos pensamientos pasen como trenes. No tienes que subirte a cada uno." },
        { it: "Beobachte den Gedanken, atme aus und lass ihn weiterfahren. Dann kommst du zurück zu deiner Aufgabe: der Bildschirm, die Hände, der Atem. Am Ende des Tages wirst du sehen: Die meisten Züge fuhren in keine gefährliche Richtung.", es: "Observa el pensamiento, exhala y déjalo seguir. Después vuelves a tu tarea: la pantalla, las manos, la respiración. Al final del día verás: la mayoría de los trenes no iba hacia ningún peligro." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de transporte público alemán", "Tratar los pensamientos del primer día como trenes que pasan", "Un manual de informática para oficinas"],
        answer: 1,
        why: "La metáfora de los trenes es la clásica imagen de la relajación mental ante los pensamientos.",
      },
      quiz: [
        { q: "Womit vergleicht der Text die Gedanken?", kind: "literal", options: ["Mit Zügen", "Mit Vögeln", "Mit Regenschirmen"], answer: 0, why: "«Lass diese Gedanken wie Züge vorbeifahren» está literal en el primer párrafo." },
        { q: "Was tust du, wenn ein Gedanke vorbeifährt?", kind: "inferencial", options: ["Ich beobachte ihn und atme aus", "Ich steige sofort ein", "Ich rufe einen Kollegen an"], answer: 0, why: "«Beobachte den Gedanken, atme aus und lass ihn weiterfahren»." },
        { q: "Was ist die Botschaft für den Arbeitstag?", kind: "critica", options: ["Gedanken sind meist harmlos, wenn man sie ziehen lässt", "Man darf am ersten Tag nichts sagen", "Büros sind gefährliche Orte"], answer: 0, why: "El cierre lo resume: la mayoría de los trenes no iba hacia ningún peligro." },
      ],
      vf: [
        { text: "Du musst in jeden Gedanken einsteigen.", value: false, why: "El texto dice: «Du musst nicht in jeden einsteigen»." },
        { text: "Am Ende fuhren die meisten Züge in keine gefährliche Richtung.", value: true, why: "Es la frase de cierre del segundo párrafo." },
        { text: "Der Kopf produziert am ersten Tag keine Gedanken.", value: false, why: "Al contrario: «dein Kopf produziert Gedanken ohne Pause»." },
      ],
    },
    {
      id: "md-de-b1-02-2", theme: "spiritualità",
      title: "Die Kollegen, die alles erklärt haben", titleEs: "Los colegas que lo explicaron todo",
      minutes: 3,
      paragraphs: [
        { it: "Vor deinem ersten Praktikum hattest du Angst. Dann erklärten dir die Kollegen alles — geduldig, freundlich, manchmal mit einem Lächeln. Heute nimmst du dir zwei Minuten und sagst innerlich Danke: für die Geduld, für die kleine Erklärung, für das Gefühl, willkommen zu sein.", es: "Antes de tus primeras prácticas tenías miedo. Luego los colegas te explicaron todo, con paciencia, con amabilidad, a veces con una sonrisa. Hoy te tomas dos minutos y dices gracias por dentro: por la paciencia, por la pequeña explicación, por la sensación de ser bienvenido." },
        { it: "Dankbarkeit ist eine leise Übung. Du brauchst keine Worte, kein Geschenk und keinen Anlass. Du denkst nur an die Menschen, die dir geholfen haben, und lässt das Gefühl warm werden. Wer dankbar ist, sieht den eigenen Weg nicht mehr so einsam.", es: "La gratitud es un ejercicio silencioso. No necesitas palabras, ni un regalo, ni una ocasión. Solo piensas en las personas que te ayudaron y dejas que el sentimiento se vuelva cálido. Quien agradece ya no ve su camino tan solitario." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un contrato de prácticas en Stuttgart", "Un ejercicio de gratitud hacia quienes te ayudaron", "Un reglamento de la empresa"],
        answer: 1,
        why: "El título recuerda a los colegas que explicaron todo: apunta a agradecer, no a trámites.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Vor dem Praktikum hattest du Angst.",
          "Die Kollegen erklärten dir alles geduldig.",
          "Du sagst innerlich Danke für die Geduld.",
          "Das Praktikum in Stuttgart dauert genau vier Wochen.",
          "Du lässt das Gefühl warm werden.",
        ],
        intruder: 3,
        why: "La duración exacta de las prácticas es un dato práctico que el texto no da: rompe el ejercicio de gratitud.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Dankbarkeit macht den eigenen Weg weniger einsam",
          "Praktika in Deutschland sind immer bezahlt",
          "Nur Geschenke zeigen echten Dank",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Die Kollegen erklärten alles geduldig",
          "Du brauchst keine Worte und kein Geschenk",
          "Du denkst an die Menschen, die dir geholfen haben",
        ],
        distractors: [
          "Die Firma schenkt dir eine Uhr",
          "Du schreibst einen langen Brief",
          "Am Ende weinst du vor Glück",
        ],
      },
    },
    {
      id: "md-de-b1-02-3", theme: "meditazione",
      title: "Zwei Minuten am Schreibtisch", titleEs: "Dos minutos ante el escritorio",
      minutes: 2,
      paragraphs: [
        { it: "Zwischen zwei E-Mails gibt es eine Lücke von zwei Minuten. Nutze sie: Setz dich gerade hin, lege die Hände auf den Tisch und schließe für einen Moment die Augen. Der Atem geht von selbst — du musst ihn nur beobachten, nicht steuern.", es: "Entre dos correos hay un hueco de dos minutos. Aprovéchalo: siéntate recto, pon las manos sobre la mesa y cierra un momento los ojos. La respiración va sola: solo tienes que observarla, no dirigirla." },
        { it: "Einatmen: Der Bauch hebt sich. Ausatmen: Der Bauch sinkt. Nach zehn Atemzügen öffnest du die Augen. Der Schreibtisch sieht genau gleich aus, aber du siehst ihn frischer. Diese Pause gehört nur dir — und niemand kann sie dir nehmen.", es: "Inhalar: el vientre se levanta. Exhalar: el vientre baja. Tras diez respiraciones abres los ojos. El escritorio es exactamente igual, pero tú lo ves con más frescura. Esta pausa es solo tuya, y nadie te la puede quitar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo escribir correos más rápido", "Una mini meditación de dos minutos en el trabajo", "La historia del escritorio alemán"],
        answer: 1,
        why: "El título nombra dos minutos ante el escritorio: una pausa breve de conciencia en la oficina.",
      },
      sequence: {
        instr: "Ordena los pasos de la pausa:",
        events: ["Setz dich gerade hin", "Lege die Hände auf den Tisch", "Schließe für einen Moment die Augen", "Beobachte zehn Atemzüge", "Öffne die Augen wieder"],
      },
      listen: {
        intro: "Escucha el mini-audio de la oficina y responde:",
        audioIt: "Deine Mittagspause am Schreibtisch. Setz dich bequem, aber gerade hin. Lege die Hände locker auf die Tastatur, ohne zu tippen. Schließe die Augen. Folge drei Atemzügen: einatmen, ausatmen, einatmen, ausatmen. Lass die Schultern dabei sinken. Wenn du die Augen wieder öffnest, arbeite langsam weiter — mit frischem Blick.",
        questions: [
          { q: "Wohin legst du die Hände?", kind: "literal", options: ["Locke auf die Tastatur", "Unter den Tisch", "Hinter den Kopf"], answer: 0, why: "«Lege die Hände locker auf die Tastatur»." },
          { q: "Wie vielen Atemzügen folgst du?", kind: "literal", options: ["Drei", "Zehn", "Hundert"], answer: 0, why: "«Folge drei Atemzügen» está dicho literalmente." },
          { q: "Was passiert mit den Schultern?", kind: "literal", options: ["Sie sinken", "Sie steigen", "Sie bleiben hart"], answer: 0, why: "«Lass die Schultern dabei sinken»." },
          { q: "Wie arbeitest du danach weiter?", kind: "inferencial", options: ["Langsam und mit frischem Blick", "Schnell und unter Druck", "Gar nicht mehr"], answer: 0, why: "«Arbeite langsam weiter — mit frischem Blick»: se infiere del cierre." },
        ],
      },
    },
  ],

  "de-cu-b1-03": [
    {
      id: "md-de-b1-03-1", theme: "qui e ora",
      title: "Zurück im Café", titleEs: "De vuelta en el café",
      minutes: 2,
      paragraphs: [
        { it: "Ihr habt eine Stunde lang von drei Millionen geträumt: vom Haus am See, von der Weltreise, von Ruhe. Der Traum war schön und hat euch zum Lachen gebracht. Jetzt steht der Kaffee vor dir, noch warm. Der Traum war schön — und dieser Moment ist echt.", es: "Habéis soñado una hora con tres millones: con la casa junto al lago, con el viaje por el mundo, con la tranquilidad. El sueño fue bonito y os hizo reír. Ahora el café está ante ti, todavía caliente. El sueño fue bonito, y este momento es real." },
        { it: "Wünsche dürfen im Himmel fliegen, aber du darfst auf der Erde bleiben. Fühle die warme Tasse in den Händen. Höre das leise Geräusch des Cafés. Wenn du im Hier und Jetzt ankommst, reicht dieser Moment — ganz ohne Million.", es: "Los deseos pueden volar por el cielo, pero tú puedes quedarte en la tierra. Siente la taza caliente entre las manos. Escucha el ruido suave del café. Cuando llegas al aquí y ahora, este momento basta: del todo sin un millón." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Resultados de la lotería alemana", "Volver al presente después de soñar con un premio", "La receta del café de Colonia"],
        answer: 1,
        why: "El título «Zurück im Café» anuncia el regreso al momento real tras el sueño del dinero.",
      },
      quiz: [
        { q: "Was steht vor dir, nachdem ihr geträumt habt?", kind: "literal", options: ["Ein warmer Kaffee", "Ein kalter Regen", "Ein neuer Fernseher"], answer: 0, why: "«Jetzt steht der Kaffee vor dir, noch warm»." },
        { q: "Was ist laut Text echt?", kind: "inferencial", options: ["Der Moment im Café", "Der Traum vom Geld", "Das Haus am See"], answer: 0, why: "«Der Traum war schön — und dieser Moment ist echt»: el presente es lo real." },
        { q: "Welche Lebenshaltung beschreibt der Text?", kind: "critica", options: ["Träume erlauben und im Jetzt ankommen", "Niemals träumen, nur arbeiten", "Nur mit Geld ist Glück möglich"], answer: 0, why: "La idea central: los deseos vuelan, pero el momento presente basta." },
      ],
      vf: [
        { text: "Die Tasse in deinen Händen ist warm.", value: true, why: "«Fühle die warme Tasse in den Händen»." },
        { text: "Der Text sagt, dass du den Traum weiterträumen musst.", value: false, why: "Al contrario: los deseos vuelan, pero tú puedes quedarte en la tierra." },
        { text: "Der Moment reicht ganz ohne Million.", value: true, why: "«reicht dieser Moment — ganz ohne Million»." },
      ],
    },
    {
      id: "md-de-b1-03-2", theme: "relax fisico",
      title: "Ein Lächeln für den Körper", titleEs: "Una sonrisa para el cuerpo",
      minutes: 2,
      paragraphs: [
        { it: "Wenn wir zusammen träumen und lachen, entspannt sich der ganze Körper: Die Augen werden weich, der Atem wird tief, die Schultern lockern sich von selbst. Lachen ist eine kleine Massage von innen — und es kostet keinen Cent.", es: "Cuando soñamos juntos y nos reímos, todo el cuerpo se relaja: los ojos se suavizan, la respiración se hace profunda, los hombros se aflojan solos. La risa es un pequeño masaje desde dentro, y no cuesta ni un céntimo." },
        { it: "Probiere es jetzt: Lächle, auch wenn niemand zusieht. Hebe die Mundwinkel ein wenig und warte fünf Atemzüge. Spürst du die kleine Veränderung im Gesicht? Der Körper glaubt dem Lächeln — und folgt ihm sanft.", es: "Pruébalo ahora: sonríe, aunque nadie te mire. Sube un poco las comisuras y espera cinco respiraciones. ¿Sientes el pequeño cambio en la cara? El cuerpo se cree la sonrisa y la sigue con suavidad." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso de comedia en Colonia", "El efecto físico de sonreír y reír juntos", "Precios de entradas para el teatro"],
        answer: 1,
        why: "El título promete algo para el cuerpo; el foco es el efecto relajante de la sonrisa.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Die Augen werden weich, wenn wir lachen.",
          "Der Atem wird tief und ruhig.",
          "Lachen ist eine Massage von innen.",
          "Kinos in Köln kosten zwölf Euro pro Karte.",
          "Hebe die Mundwinkel ein wenig.",
        ],
        intruder: 3,
        why: "El precio del cine no tiene nada que ver con la relajación del cuerpo: es el dato ajeno.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Ein Lächeln entspannt den Körper von innen",
          "Nur teure Massagen helfen gegen Stress",
          "Lachen ist in Deutschland verboten",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Die Schultern lockern sich von selbst",
          "Hebe die Mundwinkel ein wenig",
          "Der Körper glaubt dem Lächeln",
        ],
        distractors: [
          "Du brauchst einen Spiegel für die Übung",
          "Fünf Freunde müssen mitlachen",
          "Am Ende weinst du vor Anstrengung",
        ],
      },
    },
    {
      id: "md-de-b1-03-3", theme: "relax mentale",
      title: "Das Spiel mit dem Wenn", titleEs: "El juego con el «si»",
      minutes: 2,
      paragraphs: [
        { it: "«Was würdest du machen, wenn?» — dieses Spiel kann den Kopf frei machen. Du wanderst durch Möglichkeiten: eine Weltreise, ein Haus am See, ein Jahr ohne Wecker. Der Kopf spielt mit den Möglichkeiten, und die Sorgen machen für eine Weile Pause.", es: "«¿Qué harías si?»: este juego puede despejar la cabeza. Recorres posibilidades: un viaje por el mundo, una casa junto al lago, un año sin despertador. La cabeza juega con las posibilidades, y las preocupaciones hacen una pausa por un rato." },
        { it: "Doch am Ende kommt immer der schönste Moment: die Rückkehr. Du kommst zurück in den Stuhl, in den Raum, in dein echtes Leben. Das Wenn-Spiel zeigt dir zwei Dinge: Deine Phantasie ist reich — und dein Leben ist echt.", es: "Pero al final llega siempre el momento más bonito: el regreso. Vuelves a la silla, a la sala, a tu vida real. El juego del «si» te muestra dos cosas: tu imaginación es rica, y tu vida es real." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Reglas del Konjunktiv II", "El juego de las hipótesis como descanso mental y su regreso al presente", "Una oferta de viajes baratos"],
        answer: 1,
        why: "El título anuncia el juego con «si»: hipótesis placenteras y el regreso a lo real.",
      },
      sequence: {
        instr: "Ordena el transcurso del juego:",
        events: ["Jemand fragt: Was würdest du machen, wenn?", "Du wanderst durch Möglichkeiten", "Die Sorgen machen eine Pause", "Du kommst zurück in den Stuhl", "Du siehst: Dein Leben ist echt"],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "Stell dir vor, du hättest frei entscheiden: ein Jahr lang, überallhin, ohne Geldsorgen. Wohin würdest du zuerst reisen? Wen würdest du einladen? Bleib einen Moment bei diesen Bildern. Und jetzt komm langsam zurück: Spüre den Stuhl unter dir, die Füße auf dem Boden, den Atem. Das war das Wenn-Spiel — und dies hier ist dein Leben.",
        questions: [
          { q: "Wie lange darfst du im Spiel frei entscheiden?", kind: "literal", options: ["Ein Jahr lang", "Eine Woche lang", "Einen Tag lang"], answer: 0, why: "«ein Jahr lang, überallhin» está dicho literalmente." },
          { q: "Was spürst du bei der Rückkehr?", kind: "literal", options: ["Den Stuhl unter dir", "Nur Hunger", "Einen Schmerz"], answer: 0, why: "«Spüre den Stuhl unter dir, die Füße auf dem Boden»." },
          { q: "Was zeigt das Spiel am Ende?", kind: "inferencial", options: ["Phantasie ist schön, aber das echte Leben wartet", "Reisen sind immer besser als Zuhause", "Geldsorgen lösen alle Probleme"], answer: 0, why: "«Dies hier ist dein Leben»: el juego termina y lo real permanece." },
          { q: "Welchen Ton hat der Text?", kind: "inferencial", options: ["Ruhig und freundlich", "Laut und streng", "Traurig und kalt"], answer: 0, why: "Las imágenes suaves («langsam zurück», «den Atem») marcan un tono tranquilo." },
        ],
      },
    },
  ],

  "de-cu-b1-04": [
    {
      id: "md-de-b1-04-1", theme: "spiritualità",
      title: "Das gegebene Wort", titleEs: "La palabra dada",
      minutes: 3,
      paragraphs: [
        { it: "Im Verein hast du versprochen, den Kuchen zu backen. Ein Versprechen ist mehr als eine Information: Es ist ein kleines Geschenk an die Gemeinschaft. Wenn du es hältst, gibst du den anderen Stabilität — wie ein Fundament unter dem gemeinsamen Haus.", es: "En el club has prometido hornear la tarta. Una promesa es más que una información: es un pequeño regalo a la comunidad. Si la cumples, das estabilidad a los demás, como un cimiento bajo la casa común." },
        { it: "Nimm dir heute Abend zwei Minuten und sieh dir dein Versprechen an: Was brauchst du dafür? Mehl, Eier, Zeit und etwas Ruhe. Wenn du die Vorbereitung langsam planst, wird aus der Pflicht eine kleine Übung in Achtsamkeit. Das gegebene Wort wird leichter.", es: "Tómate hoy dos minutos por la tarde y mira tu promesa: ¿qué necesitas para ella? Harina, huevos, tiempo y algo de calma. Si planificas la preparación despacio, el deber se convierte en un pequeño ejercicio de atención plena. La palabra dada se vuelve más ligera." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una receta de tarta española", "El valor casi espiritual de cumplir la palabra dada", "El reglamento de un club cultural"],
        answer: 1,
        why: "El título «Das gegebene Wort» apunta al peso moral de la promesa, no a recetas ni reglamentos.",
      },
      quiz: [
        { q: "Womit vergleicht der Text ein gehaltenes Versprechen?", kind: "literal", options: ["Mit einem Fundament", "Mit einem Fenster", "Mit einem Foto"], answer: 0, why: "«Wie ein Fundament unter dem gemeinsamen Haus»." },
        { q: "Was brauchst du für dein Versprechen?", kind: "inferencial", options: ["Mehl, Eier, Zeit und Ruhe", "Neue Schuhe und ein Auto", "Viel Geld und einen Anwalt"], answer: 0, why: "La pregunta retórica del texto enumera harina, huevos, tiempo y calma." },
        { q: "Welche Haltung empfiehlt der Text?", kind: "critica", options: ["Versprechen langsam und bewusst planen", "Versprechen schnell vergessen", "Nur versprechen, was andere hören wollen"], answer: 0, why: "La conclusión: planificar con calma convierte el deber en atención plena." },
      ],
      vf: [
        { text: "Ein Versprechen ist nur eine Information.", value: false, why: "El texto dice que es más que una información: un regalo a la comunidad." },
        { text: "Langsame Vorbereitung macht die Pflicht leichter.", value: true, why: "«Wenn du die Vorbereitung langsam planst, wird aus der Pflicht eine kleine Übung»." },
        { text: "Du brauchst für den Kuchen einen Anwalt.", value: false, why: "No aparece: se necesitan harina, huevos, tiempo y calma." },
      ],
    },
    {
      id: "md-de-b1-04-2", theme: "meditazione",
      title: "Die Liste im Kopf", titleEs: "La lista en la cabeza",
      minutes: 2,
      paragraphs: [
        { it: "Vor dem Sommerfest kreist der Kopf: Getränke, Zelt, Musik, Kuchen, Erlaubnis. Alles will geplant sein. Schreib die Liste einmal auf — und dann lege sie bewusst weg. Die Liste darf ruhen, sobald sie auf dem Papier ist. Du darfst auch ruhen.", es: "Antes de la fiesta de verano, la cabeza da vueltas: bebidas, carpa, música, tarta, permiso. Todo quiere ser planificado. Escribe la lista una vez y luego guárdala a propósito. La lista puede descansar en cuanto está en el papel. Tú también puedes descansar." },
        { it: "Schau die Aufgaben nacheinander an, wie Perlen an einer Schnur: eine Aufgabe, ein Atemzug. Morgen ist auch noch ein Tag. Wenn du das Planen mit Ruhe verbindest, wächst das Fest statt des Stresses.", es: "Mira las tareas una detrás de otra, como perlas en un hilo: una tarea, una respiración. Mañana también es un día. Si unes planificar con calma, crece la fiesta en lugar del estrés." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo organizar un festival enorme", "Aplacar la lista mental de tareas con calma y respiración", "Los precios de las carpas en Hamburgo"],
        answer: 1,
        why: "El título habla de la lista en la cabeza: el foco es la calma ante las tareas, no la logística.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Schreib die Liste einmal auf.",
          "Dann lege sie bewusst weg.",
          "Eine Aufgabe, ein Atemzug.",
          "Getränke kaufen Sie am billigsten im Großmarkt.",
          "Morgen ist auch noch ein Tag.",
        ],
        intruder: 3,
        why: "Dónde comprar más barato es un consejo comercial que el texto no da: rompe la atmósfera de calma.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Planen mit Ruhe lässt das Fest statt des Stresses wachsen",
          "Listen sind nutzlos und gehören verboten",
          "Nur Profis dürfen Feste organisieren",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Schreib die Liste einmal auf",
          "Die Liste darf ruhen auf dem Papier",
          "Schau die Aufgaben nacheinander an",
        ],
        distractors: [
          "Der Kopf bleibt leer ohne Liste",
          "Alles muss heute fertig sein",
          "Die Musik spielt von allein",
        ],
      },
    },
    {
      id: "md-de-b1-04-3", theme: "qui e ora",
      title: "Der Aufbau", titleEs: "El montaje",
      minutes: 3,
      paragraphs: [
        { it: "Samstag früh, der Festplatz ist noch leer. Du trägst Tische, spannst das Zelt, hängst Lichterketten. Jede Bewegung kann achtsam sein: das schwere Heben, die wackligen Tischbeine, das erste Licht im weißen Stoff. Du bist ganz hier, mit beiden Händen.", es: "Sábado temprano, el recinto de la fiesta está todavía vacío. Cargas mesas, tensas la carpa, cuelgas guirnaldas de luces. Cada movimiento puede ser atento: el levantamiento pesado, las patas cojas de la mesa, la primera luz en la tela blanca. Estás del todo aquí, con las dos manos." },
        { it: "Wenn du müde wirst, halte kurz an und atme einmal bewusst. Dann geht es weiter — Tisch für Tisch. Am Abend, wenn die Musik spielt, wirst du jede Stunde des Aufbaus in der Feier wiederfinden. Gute Arbeit hinterlässt eine warme Spur.", es: "Cuando te canses, detente un momento y respira una vez a propósito. Después se sigue, mesa por mesa. Por la noche, cuando suene la música, volverás a encontrar cada hora del montaje en la fiesta. El buen trabajo deja un rastro cálido." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual técnico de carpas", "Montar la fiesta con presencia y con pausas conscientes", "Una crítica a los voluntarios"],
        answer: 1,
        why: "El título anuncia el montaje, y el enfoque tranquilo apunta a trabajar con atención, no a técnica.",
      },
      sequence: {
        instr: "Ordena el día del montaje:",
        events: ["Der Festplatz ist noch leer", "Du trägst Tische und spannst das Zelt", "Du hängst Lichterketten auf", "Du hältst kurz an und atmest bewusst", "Am Abend spielt die Musik"],
      },
      listen: {
        intro: "Escucha el audio del día de la fiesta y responde:",
        audioIt: "Es ist Samstagmorgen, acht Uhr. Der Platz ist still, nur Vögel und das Rascheln der Zeltplane. Du begibst dich langsam zur Arbeit: erst die Tische, dann die Stühle, dann die Lichterketten. Bei jeder Pause hörst du den Morgen. Am Abend wirst du tanzen — aber dieser ruhige Anfang gehört auch zum Fest.",
        questions: [
          { q: "Wann beginnt der Aufbau?", kind: "literal", options: ["Samstagmorgen um acht Uhr", "Freitagnacht um zwölf", "Sonntagnachmittag um drei"], answer: 0, why: "«Samstagmorgen, acht Uhr» está dicho literalmente." },
          { q: "Was hörst du am Morgen?", kind: "literal", options: ["Vögel und das Rascheln der Zeltplane", "Laute Musik", "Verkehr auf der Autobahn"], answer: 0, why: "«nur Vögel und das Rascheln der Zeltplane»." },
          { q: "Was kommt zuerst bei der Arbeit?", kind: "literal", options: ["Die Tische", "Die Musikboxen", "Das Essen"], answer: 0, why: "«erst die Tische, dann die Stühle»." },
          { q: "Was bedeutet der ruhige Anfang für das Fest?", kind: "inferencial", options: ["Er gehört auch zum Fest", "Er stört das Fest", "Er ist verschwendete Zeit"], answer: 0, why: "«Dieser ruhige Anfang gehört auch zum Fest»: se infiere del cierre." },
        ],
      },
    },
  ],

  "de-cu-b1-05": [
    {
      id: "md-de-b1-05-1", theme: "relax fisico",
      title: "Nach dem Putzen", titleEs: "Después de limpiar",
      minutes: 2,
      paragraphs: [
        { it: "Der Putzplan sagt: Heute bist du dran. Du wischst den Boden, saugst das Wohnzimmer, leerst die Tonnen. Danach brennen vielleicht die Arme, und der Rücken ist müde. Das ist gut so: Der Körper hat gearbeitet und erzählt davon — du musst nur zuhören.", es: "El plan de limpieza dice: hoy te toca a ti. Friegas el suelo, aspiras el salón, vacías los cubos. Después quizá ardan los brazos y la espalda esté cansada. Está bien así: el cuerpo ha trabajado y lo cuenta; solo tienes que escucharlo." },
        { it: "Leg dich auf den Boden und streck dich lang aus. Atme in die müden Muskeln hinein und sag ihnen innerlich Danke — sie tragen dich durch den Alltag. Körperliche Arbeit kann den Kopf still machen, fast wie eine Meditation.", es: "Túmbate en el suelo y estírate largo. Respira hacia los músculos cansados y diles gracias por dentro: te llevan por el día a día. El trabajo físico puede aquietar la cabeza, casi como una meditación." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un debate sobre quién limpia más en la WG", "Cuidar el cuerpo cansado después de limpiar la casa", "Una crítica a los planes de limpieza"],
        answer: 1,
        why: "El título marca el momento posterior a limpiar: el foco es el descanso del cuerpo, no el reparto de tareas.",
      },
      quiz: [
        { q: "Was sagt der Putzplan heute?", kind: "literal", options: ["Heute bist du dran", "Heute ist frei", "Heute putzt die Nachbarin"], answer: 0, why: "«Der Putzplan sagt: Heute bist du dran»." },
        { q: "Wie fühlt sich der Körper nach der Arbeit an?", kind: "inferencial", options: ["Müde, aber lebendig", "Völlig kaputt und wütend", "Ganz frisch wie vorher"], answer: 0, why: "Brazos que arden y espalda cansada, pero «das ist gut so»: cansancio sano." },
        { q: "Was macht körperliche Arbeit laut Text mit dem Kopf?", kind: "critica", options: ["Sie kann ihn still machen wie eine Meditation", "Sie macht ihn laut und nervös", "Sie löst alle Probleme der WG"], answer: 0, why: "La frase final: el trabajo físico puede aquietar la cabeza, casi como una meditación." },
      ],
      vf: [
        { text: "Nach dem Putzen ist der Rücken müde.", value: true, why: "«Der Rücken ist müde» está en el primer párrafo." },
        { text: "Du sollst den müden Muskeln innerlich danken.", value: true, why: "«Sag ihnen innerlich Danke — sie tragen dich»." },
        { text: "Der Text sagt, dass Putzen verboten ist.", value: false, why: "No aparece ninguna prohibición: el texto trata del descanso después de limpiar." },
      ],
    },
    {
      id: "md-de-b1-05-2", theme: "relax mentale",
      title: "Der innere Widerstand", titleEs: "La resistencia interior",
      minutes: 2,
      paragraphs: [
        { it: "Manchmal liest du eine Regel, und ein Teil in dir sagt sofort: Nein! Vor allem, wenn genau das verboten wird, was du gerade machen wolltest. Beobachte diesen Widerstand wie ein Wetter im Kopf — er darf da sein, aber er muss nicht regieren.", es: "A veces lees una regla, y una parte de ti dice enseguida: ¡no! Sobre todo cuando se prohíbe justo lo que querías hacer. Observa esa resistencia como un tiempo meteorológico en la cabeza: puede estar ahí, pero no tiene que gobernar." },
        { it: "Atme dreimal tief und frag dich: Ist die Regel ein Angriff oder einfach eine Abmachung unter vielen? Meistens ist sie nur eine Abmachung. Wenn du das erkennst, wird der Widerstand kleiner — und der Kopf wieder frei.", es: "Respira tres veces hondo y pregúntate: ¿la regla es un ataque o simplemente un acuerdo entre muchos? Casi siempre es solo un acuerdo. Cuando lo reconoces, la resistencia se hace pequeña y la cabeza vuelve a quedarse libre." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo cambiar las normas de un edificio", "Observar la rebeldía interior ante una regla y dejarla pasar", "Un manual jurídico de alquileres"],
        answer: 1,
        why: "El título anuncia el conflicto interior, no el jurídico: es un texto de calma mental.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Ein Teil in dir sagt sofort: Nein!",
          "Beobachte den Widerstand wie ein Wetter im Kopf.",
          "Atme dreimal tief.",
          "Das Ordnungsamt verlangt vier Tonnen pro Haushalt.",
          "Meistens ist die Regel nur eine Abmachung.",
        ],
        intruder: 3,
        why: "La exigencia administrativa de contenedores es un dato normativo que el texto no menciona: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Widerstand beobachten statt ihn regieren zu lassen",
          "Alle Regeln sind ungerecht und müssen weg",
          "Nur tiefe Atmung macht Regeln überflüssig",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Ein Teil in dir sagt: Nein!",
          "Er darf da sein, aber er muss nicht regieren",
          "Der Widerstand wird kleiner",
        ],
        distractors: [
          "Du rufst sofort beim Vermieter an",
          "Am Ende gehst du in ein anderes Land",
          "Die Regel gilt nur für deinen Nachbarn",
        ],
      },
    },
    {
      id: "md-de-b1-05-3", theme: "spiritualità",
      title: "Die Stille um 22 Uhr", titleEs: "El silencio de las 22",
      minutes: 3,
      paragraphs: [
        { it: "Um 22 Uhr wird es in deutschen Häusern leise. Kein Bohrer, keine Musik, kein Staubsauger. Was auf den ersten Blick wie eine Einschränkung aussieht, ist auch ein Geschenk: Das Land schenkt dir jeden Abend eine kleine Insel der Stille.", es: "A las 22 las casas alemanas se quedan en silencio. Ni taladro, ni música, ni aspiradora. Lo que a primera vista parece una restricción es también un regalo: el país te regala cada noche una pequeña isla de silencio." },
        { it: "Nutze diese Insel heute: Sitz ans Fenster und hör in das Haus hinein. Irgendwo tickt eine Uhr, irgendwo atmet ein Mensch, ein Fenster klappt leise zu. In dieser gemeinsamen Stille wohnst du nicht allein. Stille kann verbinden, ohne ein Wort.", es: "Aprovecha hoy esta isla: siéntate a la ventana y escucha la casa. En algún sitio tictaquea un reloj, en algún sitio respira una persona, una ventana se cierra despacio. En este silencio compartido no vives solo. El silencio puede unir sin una sola palabra." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Las multas por ruido en Alemania", "Vivir la Ruhezeit de las 22 como una isla de silencio compartido", "Cómo insonorizar tu habitación"],
        answer: 1,
        why: "El título nombra el silencio de las 22: el enfoque es la quietud, no las sanciones ni las obras.",
      },
      sequence: {
        instr: "Ordena la velada de silencio:",
        events: ["Um 22 Uhr wird das Haus leise", "Du setzt dich ans Fenster", "Du hörst eine Uhr ticken", "Ein Fenster klappt leise zu", "Du fühlst: Du wohnst nicht allein"],
      },
      listen: {
        intro: "Escucha el audio de la noche y responde:",
        audioIt: "Zehn Uhr abends. Die Stadt atmet langsamer. Setz dich ans Fenster und lass die Schultern sinken. Höre: Vielleicht eine Uhr, vielleicht einen letzten Zug in der Ferne, vielleicht nur deinen eigenen Atem. Diese Stille gehört allen im Haus. Bleib noch drei Atemzüge sitzen. Gute Nacht.",
        questions: [
          { q: "Wie atmet die Stadt um diese Zeit?", kind: "literal", options: ["Langsamer", "Schneller", "Lauter"], answer: 0, why: "«Die Stadt atmet langsamer» está dicho literalmente." },
          { q: "Was hörst du vielleicht?", kind: "literal", options: ["Eine Uhr oder einen Zug in der Ferne", "Eine Baustelle", "Ein Rockkonzert"], answer: 0, why: "«Vielleicht eine Uhr, vielleicht einen letzten Zug in der Ferne»." },
          { q: "Wem gehört die Stille?", kind: "literal", options: ["Allen im Haus", "Nur dem Vermieter", "Niemandem"], answer: 0, why: "«Diese Stille gehört allen im Haus»." },
          { q: "Wie endet der Text?", kind: "inferencial", options: ["Mit einer ruhigen Verabschiedung", "Mit einem lauten Wecker", "Mit einer neuen Regel"], answer: 0, why: "«Bleib noch drei Atemzüge sitzen. Gute Nacht»: cierre tranquilo." },
        ],
      },
    },
  ],

  "de-cu-b1-06": [
    {
      id: "md-de-b1-06-1", theme: "meditazione",
      title: "Worte im Treppenhaus", titleEs: "Palabras en la escalera",
      minutes: 2,
      paragraphs: [
        { it: "Im Treppenhaus hörst du ein Gerücht: Die Bäckerei soll schließen. Auf dem Weg nach oben begleiten dich die Worte. Sie flattern im Kopf wie Vögel — und du kannst entscheiden, ob du sie fütterst oder ob du sie weiterfliegen lässt.", es: "En la escalera oyes un rumor: la panadería, dicen, va a cerrar. En el camino hacia arriba te acompañan las palabras. Aletean en la cabeza como pájaros, y tú puedes decidir si los alimentas o los dejas seguir volando." },
        { it: "Atme langsam weiter, Schritt für Schritt. Das Gerücht ist nur ein Gerücht: Es ist vielleicht wahr, vielleicht nicht. Wenn du es nicht weiterträgst, wird es leichter — für dich, für den Bäcker unten an der Ecke und für das ganze Haus.", es: "Sigue respirando despacio, paso a paso. El rumor es solo un rumor: quizá sea verdad, quizá no. Si no lo llevas más lejos, se vuelve más ligero: para ti, para el panadero de la esquina y para todo el edificio." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["El cierre definitivo de una panadería", "Dejar que un rumor pase como un pájaro, sin alimentarlo", "Cómo montar una panadería en Düsseldorf"],
        answer: 1,
        why: "El título nombra las palabras en la escalera: el foco es la relación tranquila con el rumor.",
      },
      quiz: [
        { q: "Womit vergleicht der Text die Worte des Gerüchts?", kind: "literal", options: ["Mit Vögeln", "Mit Steinen", "Mit Zügen"], answer: 0, why: "«Sie flattern im Kopf wie Vögel»." },
        { q: "Was kannst du laut Text entscheiden?", kind: "inferencial", options: ["Ob du die Worte fütterst oder weiterfliegen lässt", "Ob die Bäckerei wirklich schließt", "Wer das Gerücht erzählt hat"], answer: 0, why: "El texto da la elección sobre qué hacer con las palabras, no sobre su verdad." },
        { q: "Was passiert, wenn du das Gerücht nicht weiterträgst?", kind: "critica", options: ["Es wird leichter für alle im Haus", "Es wird lauter und größer", "Es wird zur offiziellen Nachricht"], answer: 0, why: "«Wenn du es nicht weiterträgst, wird es leichter — für dich, für den Bäcker und für das ganze Haus»." },
      ],
      vf: [
        { text: "Ein Gerücht ist immer wahr.", value: false, why: "El texto dice: «Es ist vielleicht wahr, vielleicht nicht»." },
        { text: "Du kannst entscheiden, ob du die Worte fütterst.", value: true, why: "«Du kannst entscheiden, ob du sie fütterst»." },
        { text: "Der Bäcker arbeitet unten an der Ecke.", value: true, why: "«Für den Bäcker unten an der Ecke»." },
      ],
    },
    {
      id: "md-de-b1-06-2", theme: "qui e ora",
      title: "Der Duft aus der Bäckerei", titleEs: "El aroma de la panadería",
      minutes: 2,
      paragraphs: [
        { it: "Am Morgen zieht der Duft von frischem Brot durch die Straße. Für einen Moment gibt es keine Neuigkeiten, keine Fragen, kein Ob. Es gibt nur diesen warmen Geruch, das Licht des frühen Tages und deine Schritte auf dem Gehweg.", es: "Por la mañana, el aroma del pan fresco recorre la calle. Por un momento no hay noticias, ni preguntas, ni «si». Solo este olor cálido, la luz del día temprano y tus pasos en la acera." },
        { it: "Bleib kurz stehen und atme ihn ein. Was hörst du? Die Maschinen in der Backstube, ein Fahrrad auf dem Asphalt, eine Tür irgendwo. Wenn du mit offenen Sinnen gehst, wird der Weg zur Übung — und der Tag beginnt ruhig.", es: "Detente un momento e inhalo. ¿Qué oyes? Las máquinas del obrador, una bici sobre el asfalto, una puerta en algún sitio. Si caminas con los sentidos abiertos, el camino se convierte en práctica, y el día empieza tranquilo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La receta del pan alemán", "Caminar presente con los sentidos ante la panadería", "La historia de las panaderías de Düsseldorf"],
        answer: 1,
        why: "El título nombra el aroma: la puerta es la experiencia sensorial del aquí y ahora.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Der Duft von frischem Brot zieht durch die Straße.",
          "Bleib kurz stehen und atme ihn ein.",
          "Du hörst die Maschinen in der Backstube.",
          "Ein Brötchen kostet hier einen Euro achtzig.",
          "Der Weg wird zur Übung.",
        ],
        intruder: 3,
        why: "El precio del Brötchen es información comercial que no aparece en el texto: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Mit offenen Sinnen beginnt der Tag ruhig",
          "Brot ist das wichtigste Frühstück der Deutschen",
          "Straßen sind morgens zu laut zum Zuhören",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Für einen Moment gibt es keine Neuigkeiten",
          "Du hörst ein Fahrrad auf dem Asphalt",
          "Der Weg wird zur Übung",
        ],
        distractors: [
          "Du kaufst drei Brötchen fürs Büro",
          "Die Bäckerei öffnet erst um neun",
          "Am Ende regnet es stark",
        ],
      },
    },
    {
      id: "md-de-b1-06-3", theme: "relax fisico",
      title: "Die Stirn entspannen", titleEs: "Relajar la frente",
      minutes: 2,
      paragraphs: [
        { it: "Wenn wir anderen zuhören, spannen wir oft unbewusst an: die Stirn, den Kiefer, den Hals. Nach einem langen Gespräch mit der Nachbarin merkst du vielleicht, wie fest deine Stirn war. Das Gesicht hat mitgehört — und mitgearbeitet.", es: "Cuando escuchamos a otros, a menudo tensionamos sin querer: la frente, la mandíbula, el cuello. Tras una larga conversación con la vecina quizá notes lo tensa que estaba tu frente. La cara también ha escuchado, y también ha trabajado." },
        { it: "Massiere jetzt sanft mit den Fingerspitzen über die Stirn, von der Mitte zu den Schläfen. Lass den Kiefer locker und die Zunge weich liegen. Hören und Entspannen dürfen zusammenpassen: Du kannst zuhören, ohne dich zu verkrampfen.", es: "Masajea ahora suavemente con las yemas de los dedos sobre la frente, del centro hacia las sienes. Deja suelta la mandíbula y blanda la lengua. Escuchar y relajarse pueden ir juntos: puedes escuchar sin bloquearte." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un masaje facial de belleza", "Relajar la frente y la mandíbula después de escuchar mucho", "Los consejos de una vecina cotilla"],
        answer: 1,
        why: "El título apunta a la frente, y el contexto es la charla larga con la vecina: relajación tras escuchar.",
      },
      sequence: {
        instr: "Ordena el masaje:",
        events: ["Massiere mit den Fingerspitzen über die Stirn", "Wandere von der Mitte zu den Schläfen", "Lass den Kiefer locker", "Lege die Zunge weich ab", "Höre weiter, ohne dich zu verkrampfen"],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "Deine Nachbarin erzählt gern und viel. Heute hast du zugehört, zehn Minuten lang. Jetzt spüre dein Gesicht: Ist die Stirn fest? Ist der Kiefer hart? Löse beides mit drei langsamen Atemzügen. Beim nächsten Gespräch kannst du freundlich zuhören und trotzdem weich bleiben — Stirn offen, Kiefer locker.",
        questions: [
          { q: "Wie lange hast du heute zugehört?", kind: "literal", options: ["Zehn Minuten", "Zehn Stunden", "Eine Minute"], answer: 0, why: "«Heute hast du zugehört, zehn Minuten lang»." },
          { q: "Was spürst du zuerst?", kind: "literal", options: ["Dein Gesicht", "Deine Schuhe", "Dein Handy"], answer: 0, why: "«Jetzt spüre dein Gesicht»." },
          { q: "Womit löst du die Spannung?", kind: "literal", options: ["Mit drei langsamen Atemzügen", "Mit einem kalten Getränk", "Mit lauter Musik"], answer: 0, why: "«Löse beides mit drei langsamen Atemzügen»." },
          { q: "Wie hörst du beim nächsten Mal zu?", kind: "inferencial", options: ["Freundlich und trotzdem weich", "Streng und angespannt", "Gar nicht mehr"], answer: 0, why: "«Freundlich zuhören und trotzdem weich bleiben»: se infiere del cierre." },
        ],
      },
    },
  ],

  "de-cu-b1-07": [
    {
      id: "md-de-b1-07-1", theme: "relax mentale",
      title: "Genaues Sehen", titleEs: "Ver con precisión",
      minutes: 2,
      paragraphs: [
        { it: "Dresden liegt vor dir: Türme, Brücken, der breite Fluss. Der Kopf will sofort vergleichen, bewerten, erklären. Heute üben wir etwas anderes: genau sehen. Die Form der Kuppel, die Farbe des Steins, das Licht auf dem Wasser — mehr braucht es nicht.", es: "Dresde está ante ti: torres, puentes, el río ancho. La cabeza quiere comparar, valorar, explicar enseguida. Hoy practicamos otra cosa: ver con precisión. La forma de la cúpula, el color de la piedra, la luz sobre el agua: no hace falta más." },
        { it: "Wenn du etwas genau beschreibst, wird der Kopf still. Es gibt nur das Objekt und deine Aufmerksamkeit. Beschreibe innerlich die Elbe: breit, ruhig, silbergrau. Schon bist du ganz hier — und die Stadt schenkt dir ihre Stille zurück.", es: "Cuando describes algo con precisión, la cabeza se queda en silencio. Solo hay el objeto y tu atención. Describe por dentro el Elba: ancho, tranquilo, gris plata. Ya estás del todo aquí, y la ciudad te devuelve su silencio." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía turística completa de Dresde", "Aquietar la mente describiendo con precisión lo que ves", "La historia de la Frauenkirche"],
        answer: 1,
        why: "El título «Genaues Sehen» apunta a la atención, no a la guía histórica.",
      },
      quiz: [
        { q: "Was will der Kopf zuerst machen, wenn die Stadt vor dir liegt?", kind: "literal", options: ["Vergleichen, bewerten, erklären", "Schlafen", "Fotografieren"], answer: 0, why: "«Der Kopf will sofort vergleichen, bewerten, erklären»." },
        { q: "Was passiert, wenn du etwas genau beschreibst?", kind: "inferencial", options: ["Der Kopf wird still", "Der Kopf wird lauter", "Du vergisst die Stadt"], answer: 0, why: "«Wenn du etwas genau beschreibst, wird der Kopf still»." },
        { q: "Welche Übung beschreibt der Text?", kind: "critica", options: ["Genau sehen: Die Aufmerksamkeit auf einen Punkt richten", "Möglichst schnell fotografieren und weitergehen", "Alles sofort erklären und bewerten"], answer: 0, why: "La práctica central del texto es mirar con precisión: la atención aquietá la cabeza." },
      ],
      vf: [
        { text: "Genaues Beschreiben macht den Kopf still.", value: true, why: "Está literal en el segundo párrafo." },
        { text: "Der Text sagt, dass Fotografieren verboten ist.", value: false, why: "No aparece ninguna prohibición; la práctica es mirar, no fotografiar." },
        { text: "Die Stadt schenkt dir ihre Stille zurück.", value: true, why: "Es la frase final del texto." },
      ],
    },
    {
      id: "md-de-b1-07-2", theme: "spiritualità",
      title: "Der Stein neben dem Stein", titleEs: "Piedra junto a piedra",
      minutes: 3,
      paragraphs: [
        { it: "Die Frauenkirche wurde aus alten und neuen Steinen wieder aufgebaut: dunkel und hell nebeneinander. Wenn du die Kirche ansiehst, kannst du daran denken, dass Geduld Großes bauen kann — Stein für Stein, Jahr für Jahr, Hand für Hand.", es: "La Frauenkirche se reconstruyó con piedras viejas y nuevas: oscuras y claras una al lado de la otra. Si miras la iglesia, puedes pensar que la paciencia puede construir cosas grandes: piedra a piedra, año a año, mano a mano." },
        { it: "Auch in dir gibt es alte und neue Teile: Fehler von gestern, Hoffnung von heute. Sie dürfen nebeneinander stehen, wie die Steine der Kirche. Wie die Stadt baust du an dir weiter — leise, geduldig, ohne Eile.", es: "También en ti hay partes viejas y nuevas: errores de ayer, esperanza de hoy. Pueden quedarse una al lado de la otra, como las piedras de la iglesia. Como la ciudad, sigues construyéndote: en silencio, con paciencia, sin prisa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de construcción barrocas", "Los dos colores de las piedras como imagen de la paciencia y del propio crecimiento", "Un informe sobre la guerra"],
        answer: 1,
        why: "El título une la imagen material (piedra junto a piedra) con un sentido interior: paciencia y crecimiento.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Die Kirche wurde aus alten und neuen Steinen aufgebaut.",
          "Geduld kann Großes bauen.",
          "In dir gibt es alte und neue Teile.",
          "Der Wiederaufbau kostete rund 180 Millionen Euro.",
          "Du baust an dir weiter, ohne Eile.",
        ],
        intruder: 3,
        why: "El coste exacto de la reconstrucción es un dato económico que el texto no da: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Altes und Neues dürfen nebeneinander stehen — in Städten und in Menschen",
          "Nur neue Steine machen ein Gebäude schön",
          "Fehler von gestern sollte man verstecken",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Geduld kann Großes bauen",
          "Fehler von gestern und Hoffnung von heute",
          "Du baust leise und geduldig weiter",
        ],
        distractors: [
          "Die Kirche ist heute ein Museum für Autos",
          "Alle alten Steine wurden ersetzt",
          "Am Ende gewinnst du einen Preis",
        ],
      },
    },
    {
      id: "md-de-b1-07-3", theme: "meditazione",
      title: "Der Rhythmus des Flusses", titleEs: "El ritmo del río",
      minutes: 3,
      paragraphs: [
        { it: "Auf der Elbe fahren alte Raddampfer. Ihre Räder drehen sich langsam und regelmäßig: platsch, platsch, platsch. Setz dich ans Ufer und lass deinen Atem diesen Rhythmus finden — gleichmäßig, weich, ohne Ziel.", es: "Sobre el Elba navegan viejos barcos de ruedas. Sus ruedas giran despacio y con regularidad: plas, plas, plas. Siéntate en la orilla y deja que tu respiración encuentre ese ritmo: uniforme, suave, sin meta." },
        { it: "Vier Sekunden einatmen, vier Sekunden ausatmen, wie die Räder im Wasser. Wenn Gedanken kommen, steigen sie wie Fahrgäste ein und wieder aus. Der Fluss trägt alles weiter. Du bleibst sitzen und atmest mit ihm.", es: "Cuatro segundos inhalando, cuatro segundos exhalando, como las ruedas en el agua. Si llegan pensamientos, suben como pasajeros y vuelven a bajar. El río lo lleva todo adelante. Tú sigues sentado y respiras con él." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La técnica de los barcos de ruedas", "Sincronizar la respiración con el ritmo lento del río y sus barcos", "Horarios de los Raddampfer"],
        answer: 1,
        why: "El título nombra el ritmo del río: meditación con el compás de las ruedas, no un texto técnico.",
      },
      sequence: {
        instr: "Ordena la práctica de la orilla:",
        events: ["Setz dich ans Ufer des Flusses", "Hör den Rhythmus der Räder", "Atme vier Sekunden ein", "Atme vier Sekunden aus", "Lass Gedanken einsteigen und aussteigen"],
      },
      listen: {
        intro: "Escucha el audio del río y responde:",
        audioIt: "Stell dir den Fluss vor: Ein alter Dampfer kommt langsam vorbei, die Räder platschen ruhig im Wasser. Du sitzt am Ufer und atmest im gleichen Takt. Einatmen, wenn die Räder hochkommen. Ausatmen, wenn sie untertauchen. Der Dampfer fährt weiter, dein Atem bleibt: ruhig, weich, regelmäßig wie das Wasser.",
        questions: [
          { q: "Was macht der Dampfer?", kind: "literal", options: ["Er kommt langsam vorbei", "Er fährt schnell vorbei", "Er bleibt stehen"], answer: 0, why: "«Ein alter Dampfer kommt langsam vorbei»." },
          { q: "Wann atmest du ein?", kind: "literal", options: ["Wenn die Räder hochkommen", "Wenn die Räder untertauchen", "Wenn die Sonne scheint"], answer: 0, why: "«Einatmen, wenn die Räder hochkommen»." },
          { q: "Was bleibt am Ende?", kind: "literal", options: ["Dein Atem", "Der Dampfer", "Das Ufer"], answer: 0, why: "«Der Dampfer fährt weiter, dein Atem bleibt»." },
          { q: "Wie ist dein Atem am Schluss?", kind: "inferencial", options: ["Ruhig und regelmäßig wie das Wasser", "Schnell und laut", "Unregelmäßig und schwer"], answer: 0, why: "«Ruhig, weich, regelmäßig wie das Wasser»: se infiere del cierre." },
        ],
      },
    },
  ],

  "de-cu-b1-08": [
    {
      id: "md-de-b1-08-1", theme: "qui e ora",
      title: "Frische Luft auf dem Balkon", titleEs: "Aire fresco en el balcón",
      minutes: 2,
      paragraphs: [
        { it: "Tritt heute Abend auf den Balkon und atme die Luft ein. Sie riecht nach Regen oder nach Sonne, nach Bäumen oder nach Stadt. Die Umwelt ist keine Nachricht im Handy — sie ist dieser Moment auf deiner Haut.", es: "Sal esta tarde al balcón y respira el aire. Huele a lluvia o a sol, a árboles o a ciudad. El medio ambiente no es una noticia en el móvil: es este momento sobre tu piel." },
        { it: "Umwelt beginnt nicht weit weg: Sie ist der Atem, den du gerade ziehst, der Wind, der dein Fenster berührt. Wenn du ihm drei Atemzüge lang Aufmerksamkeit schenkst, wird aus einem abstrakten Wort ein lebendiges Gefühl.", es: "El entorno no empieza lejos: es la respiración que acabas de tomar, el viento que toca tu ventana. Si le regalas tres respiraciones de atención, de una palabra abstracta nace un sentimiento vivo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["El parte meteorológico de la semana", "Sentir el aire del balcón: el entorno como experiencia presente", "Cómo ahorrar calefacción"],
        answer: 1,
        why: "El título une el balcón y el aire fresco: presencia sensorial, no pronóstico ni ahorro.",
      },
      quiz: [
        { q: "Wann trittst du auf den Balkon?", kind: "literal", options: ["Heute Abend", "Morgen früh", "Nächstes Jahr"], answer: 0, why: "«Tritt heute Abend auf den Balkon»." },
        { q: "Was ist die Umwelt laut Text?", kind: "inferencial", options: ["Dieser Moment auf deiner Haut", "Eine App auf dem Handy", "Ein Kapitel im Schulbuch"], answer: 0, why: "«Sie ist dieser Moment auf deiner Haut»: el entorno se siente ahora." },
        { q: "Was passiert nach drei Atemzügen Aufmerksamkeit?", kind: "critica", options: ["Aus dem abstrakten Wort wird ein lebendiges Gefühl", "Die Umwelt ist gerettet", "Der Wind hört auf zu wehen"], answer: 0, why: "La frase final: la palabra abstracta se convierte en sentimiento vivo." },
      ],
      vf: [
        { text: "Die Umwelt ist laut Text eine Nachricht im Handy.", value: false, why: "El texto dice lo contrario: «keine Nachricht im Handy»." },
        { text: "Umwelt beginnt mit deinem eigenen Atem.", value: true, why: "«Sie ist der Atem, den du gerade ziehst»." },
        { text: "Du sollst drei Atemzüge lang Aufmerksamkeit schenken.", value: true, why: "«Wenn du ihm drei Atemzüge lang Aufmerksamkeit schenkst»." },
      ],
    },
    {
      id: "md-de-b1-08-2", theme: "relax fisico",
      title: "Der Tritt ins Pedal", titleEs: "El golpe en el pedal",
      minutes: 2,
      paragraphs: [
        { it: "Mit dem Fahrrad fahren ist gut für die Stadt und gut für dich. Spüre heute jede Pedaldrehung: die Kraft in den Beinen, den Wind durch das T-Shirt, den sanften Rhythmus deines Atems. Du musst nicht schnell sein.", es: "Ir en bici es bueno para la ciudad y bueno para ti. Siente hoy cada pedalada: la fuerza en las piernas, el viento a través de la camiseta, el ritmo suave de tu respiración. No tienes que ir rápido." },
        { it: "Fahr wie ein Fluss: stetig und ruhig. An der Ampel: Füße auf den Boden, einmal atmen, vielleicht lächeln. Wenn du achtsam radelst, wird der Weg zur Übung — und du kommst entspannt an, statt gehetzt.", es: "Pedalea como un río: constante y tranquilo. En el semáforo: pies al suelo, una respiración, quizá una sonrisa. Si pedaleas con atención, el camino se vuelve práctica, y llegas relajado en vez de apurado." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una ruta deportiva de montaña", "Ciclar con calma, como un río, hasta llegar relajado", "Las normas de circulación para bicis"],
        answer: 1,
        why: "El título apunta al gesto físico del pedal, y el enfoque es la calma, no el deporte ni las normas.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Spüre jede Pedaldrehung bewusst.",
          "An der Ampel: Füße auf den Boden.",
          "Der Wind geht durch das T-Shirt.",
          "Ein neues Fahrrad kostet mindestens achthundert Euro.",
          "Du kommst entspannt an.",
        ],
        intruder: 3,
        why: "El precio de una bici nueva es información de compra ajena al texto: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Achtsames Radfahren macht den Weg zur Übung",
          "Nur schnelles Fahren bringt etwas",
          "Radfahren ist gefährlicher als Autofahren",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Fahr wie ein Fluss: stetig und ruhig",
          "Füße auf den Boden an der Ampel",
          "Du kommst entspannt an",
        ],
        distractors: [
          "Du brauchst einen neuen Helm",
          "Der Weg dauert drei Stunden",
          "Am Ziel wartet ein Preis",
        ],
      },
    },
    {
      id: "md-de-b1-08-3", theme: "relax mentale",
      title: "Aufräumen im Kopf", titleEs: "Ordenar la cabeza",
      minutes: 3,
      paragraphs: [
        { it: "Du trennst deinen Müll: Papier hier, Plastik dort, Reste in die schwarze Tonne. Warum nicht auch mit den Gedanken? Heute Abend sortiere deinen Kopf: Welcher Gedanke gehört in die Tonne der Sorgen? Welcher darf bleiben?", es: "Separas tu basura: papel aquí, plástico allá, restos al cubo negro. ¿Por qué no también con los pensamientos? Esta noche ordena tu cabeza: ¿qué pensamiento va al cubo de las preocupaciones? ¿Cuál puede quedarse?" },
        { it: "Du musst die Sorgen-Gedanken nicht hassen. Sag ihnen nur freundlich: Nicht heute. Was bleibt, ist das, was du wirklich brauchst: ein Plan für morgen, ein Dank für heute und ein leiser Kopf für die Nacht.", es: "No tienes que odiar los pensamientos de preocupación. Diles solo con amabilidad: hoy no. Lo que queda es lo que de verdad necesitas: un plan para mañana, un gracias para hoy y una cabeza silenciosa para la noche." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["El sistema alemán de contenedores", "Aplicar la separación de residuos a los propios pensamientos", "Cómo dormir ocho horas"],
        answer: 1,
        why: "El título «Aufräumen im Kopf» traslada el orden de la basura a la mente: relajación mental.",
      },
      sequence: {
        instr: "Ordena el ejercicio de la noche:",
        events: ["Sortiere deine Gedanken wie Müll", "Frage: Welcher Gedanke ist Sorge?", "Sag freundlich: Nicht heute", "Behalte Plan für morgen und Dank für heute", "Genieße den leisen Kopf"],
      },
      listen: {
        intro: "Escucha el audio del final del día y responde:",
        audioIt: "Der Tag ist vorbei. Bevor du schlafen gehst, eine kleine Übung: Sammle deine Gedanken wie Papiere auf einem Tisch. Drei Dinge bleiben liegen: ein Plan für morgen, ein Dank für heute, ein Wunsch für die Woche. Alles andere kommt in die gedankliche Tonne. Dann atmest du tief aus — und der Kopf wird leise.",
        questions: [
          { q: "Wann machst du die Übung?", kind: "literal", options: ["Bevor du schlafen gehst", "Beim Frühstück", "Auf dem Weg zur Arbeit"], answer: 0, why: "«Bevor du schlafen gehst, eine kleine Übung»." },
          { q: "Wie sammelst du deine Gedanken?", kind: "literal", options: ["Wie Papiere auf einem Tisch", "Wie Fotos in einem Album", "Wie Münzen in einer Kasse"], answer: 0, why: "«Sammle deine Gedanken wie Papiere auf einem Tisch»." },
          { q: "Wie viele Dinge bleiben liegen?", kind: "literal", options: ["Drei", "Zehn", "Keine"], answer: 0, why: "«Drei Dinge bleiben liegen»." },
          { q: "Wie endet die Übung?", kind: "inferencial", options: ["Mit einem tiefen Atemzug und stillem Kopf", "Mit einem neuen Termin", "Mit einem lauten Wecker"], answer: 0, why: "«Dann atmest du tief aus — und der Kopf wird leise»." },
        ],
      },
    },
  ],

  "de-cu-b1-09": [
    {
      id: "md-de-b1-09-1", theme: "spiritualità",
      title: "Freundlich mit dir selbst", titleEs: "Amable contigo mismo",
      minutes: 2,
      paragraphs: [
        { it: "Vor dem Vorstellungsgespräch flüstert eine innere Stimme: Du reichst nicht. Diese Stimme will dich schützen, aber sie übertreibt ein bisschen. Du darfst ihr freundlich widersprechen — wie einer alten Bekannten, die sich immer zu viele Sorgen macht.", es: "Antes de la entrevista de trabajo, una voz interior susurra: no eres suficiente. Esa voz quiere protegerte, pero exagera un poco. Puedes contradecirla con amabilidad, como a una vieja conocida que siempre se preocupa demasiado." },
        { it: "Sag dir selbst drei Sätze: Ich habe vorbereitet. Ich darf nervös sein. Ich bin genug. Das ist kein Zauberspruch, aber es räumt den Weg frei — für eine ruhige Stimme, wenn du gleich von dir erzählst.", es: "Dite tres frases: me he preparado, puedo estar nervioso, soy suficiente. No es un conjuro, pero despeja el camino para una voz tranquila cuando dentro de un momento hables de ti." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas para engañar al entrevistador", "Tratarse con amabilidad antes de una entrevista", "El reglamento de una empresa de Hamburgo"],
        answer: 1,
        why: "El título anuncia la amabilidad propia: es un texto de autoconfianza serena, no de trucos.",
      },
      quiz: [
        { q: "Was flüstert die innere Stimme vor dem Gespräch?", kind: "literal", options: ["Du reichst nicht", "Du bist der Beste", "Bleib zu Hause"], answer: 0, why: "«Eine innere Stimme flüstert: Du reichst nicht»." },
        { q: "Wie darfst du mit dieser Stimme umgehen?", kind: "inferencial", options: ["Ihr freundlich widersprechen", "Sie laut anschreien", "Sie ignorieren und weglaufen"], answer: 0, why: "«Du darfst ihr freundlich widersprechen — wie einer alten Bekannten»." },
        { q: "Was ist der Sinn der drei Sätze?", kind: "critica", options: ["Den Weg für eine ruhige Stimme freiräumen", "Den Interviewer zu beeindrucken", "Das Nervössein ganz zu verbieten"], answer: 0, why: "«Es räumt den Weg frei — für eine ruhige Stimme»." },
      ],
      vf: [
        { text: "Ich darf nervös sein.", value: true, why: "Es la segunda de las tres frases que te dices." },
        { text: "Die innere Stimme will dich verletzen.", value: false, why: "El texto dice que quiere protegerte, aunque exagera." },
        { text: "Die drei Sätze sind ein Zauberspruch.", value: false, why: "«Das ist kein Zauberspruch»: solo despejan el camino." },
      ],
    },
    {
      id: "md-de-b1-09-2", theme: "meditazione",
      title: "Die Minute vor der Tür", titleEs: "El minuto ante la puerta",
      minutes: 2,
      paragraphs: [
        { it: "Du stehst vor der Tür der Personalabteilung. Noch eine Minute. Nutze sie: Steh gerade, atme in den Bauch, lass die Schultern weich fallen. Deine Hände dürfen locker sein — auch für den Händedruck gleich zu Beginn.", es: "Estás ante la puerta del departamento de personal. Falta un minuto. Aprovéchalo: de pie recto, respira hacia el vientre, deja caer blandos los hombros. Tus manos pueden estar sueltas, también para el apretón del principio." },
        { it: "Stell dir vor, wie die Tür ruhig aufgeht: freundlich, ohne Eile. Wer eine Minute lang bewusst atmet, betritt Räume anders — nicht kleiner, sondern gleich. Dann klopfst du an. Jetzt bist du bereit.", es: "Imagina cómo la puerta se abre con calma: amable, sin prisa. Quien respira un minuto a conciencia entra en las salas de otra manera: no más pequeño, sino al mismo nivel. Después llamas. Ya estás listo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo llamar a una puerta en Alemania", "Un minuto de respiración consciente antes de entrar a la entrevista", "Los horarios de las empresas"],
        answer: 1,
        why: "El título marca el minuto previo a la puerta: respiración y presencia antes del momento clave.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Steh gerade und atme in den Bauch.",
          "Lass die Schultern weich fallen.",
          "Wer bewusst atmet, betritt Räume gleich.",
          "Personalabteilungen öffnen meist um neun Uhr.",
          "Dann klopfst du an.",
        ],
        intruder: 3,
        why: "El horario de las oficinas es un dato práctico ajeno al ejercicio de respiración: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Eine Minute bewusster Atem verändert den Eintritt",
          "Man muss sich vor Türschwellen fürchten",
          "Händedrücke sind in Deutschland verboten",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Du stehst vor der Tür der Personalabteilung",
          "Deine Hände dürfen locker sein",
          "Du betrittst den Raum nicht kleiner, sondern gleich",
        ],
        distractors: [
          "Du klopfst zweimal ganz laut",
          "Der Empfang schenkt Kaffee ein",
          "Das Gespräch dauert drei Stunden",
        ],
      },
    },
    {
      id: "md-de-b1-09-3", theme: "qui e ora",
      title: "Der Weg zum Bahnhof", titleEs: "El camino a la estación",
      minutes: 3,
      paragraphs: [
        { it: "Das Vorstellungsgespräch ist vorbei. Auf dem Weg zum Bahnhof will der Kopf sofort alles bewerten: War der Satz gut? War die Antwort zu leise? Heute machen wir es anders: erst gehen, dann denken.", es: "La entrevista ha terminado. De camino a la estación, la cabeza quiere valorarlo todo enseguida: ¿estuvo bien aquella frase? ¿fue demasiado baja la respuesta? Hoy lo hacemos distinto: primero caminar, después pensar." },
        { it: "Fühle die Schritte, das Gewicht, das von einem Bein zum anderen wandert. Höre die Stadt: Hamburg atmet am Nachmittag. Das Gespräch ist vorbei — jetzt ist nur noch dieser Weg. Wenn du angekommen bist, darfst du alles bewerten. Jetzt noch nicht.", es: "Siente los pasos, el peso que viaja de una pierna a la otra. Escucha la ciudad: Hamburgo respira por la tarde. La entrevista ha terminado; ahora solo queda este camino. Cuando llegues, podrás valorarlo todo. Todavía no." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una evaluación de la entrevista", "Caminar presentes hacia la estación y dejar la evaluación para después", "Los horarios de la DB"],
        answer: 1,
        why: "El título nombra el trayecto, y la regla del texto es «erst gehen, dann denken».",
      },
      sequence: {
        instr: "Ordena el camino tras la entrevista:",
        events: ["Das Gespräch ist vorbei", "Du gehst Richtung Bahnhof", "Du fühlst die Schritte und das Gewicht", "Du hörst die Stadt atmen", "Am Bahnhof darfst du bewerten"],
      },
      listen: {
        intro: "Escucha el audio del camino y responde:",
        audioIt: "Du verlässt das Gebäude. Die Tür fällt leise zu, und das Gespräch ist vorbei. Vor dir liegen zehn Minuten bis zum Bahnhof. Nutze sie: Spüre den Wind von der Elbe, hör die Schuhe auf dem Stein. Erst wenn du am Gleis stehst, holst du die Gedanken zurück. Der Weg gehört jetzt nur dir.",
        questions: [
          { q: "Wie fällt die Tür zu?", kind: "literal", options: ["Leise", "Laut", "Gar nicht"], answer: 0, why: "«Die Tür fällt leise zu»." },
          { q: "Wie lange dauert der Weg zum Bahnhof?", kind: "literal", options: ["Zehn Minuten", "Eine Stunde", "Fünf Stunden"], answer: 0, why: "«Vor dir liegen zehn Minuten bis zum Bahnhof»." },
          { q: "Was spürst du auf dem Weg?", kind: "literal", options: ["Den Wind von der Elbe", "Regen im Gesicht", "Nichts"], answer: 0, why: "«Spüre den Wind von der Elbe»." },
          { q: "Wann holst du die Gedanken zurück?", kind: "inferencial", options: ["Wenn du am Gleis stehst", "Sofort nach der Tür", "Nie wieder"], answer: 0, why: "«Erst wenn du am Gleis stehst, holst du die Gedanken zurück»." },
        ],
      },
    },
  ],

  "de-cu-b1-10": [
    {
      id: "md-de-b1-10-1", theme: "relax fisico",
      title: "Die Augen dürfen ruhen", titleEs: "Los ojos pueden descansar",
      minutes: 2,
      paragraphs: [
        { it: "Nachrichten lesen wir heute überall: am Bildschirm, im Zug, in der U-Bahn, in der Pause. Die Augen arbeiten den ganzen Tag ohne Unterbrechung. Gib ihnen jetzt drei Minuten: Leg das Handy weg und schau in die Ferne — aus dem Fenster, den Flur hinunter, in den Himmel.", es: "Las noticias las leemos hoy en todas partes: en la pantalla, en el tren, en el metro, en la pausa. Los ojos trabajan todo el día sin interrupción. Regálales ahora tres minutos: aparta el móvil y mira a lo lejos, por la ventana, a lo largo del pasillo, al cielo." },
        { it: "Blinzle langsam, als würdest du dunkle Vorhänge schließen. Reibe die Handflächen warm und lege sie sanft auf die geschlossenen Augen. Die Wärme ist wie eine kleine Badewanne für müde Augen. Nach drei Atemzügen öffnest du sie wieder — die Welt sieht frischer aus.", es: "Parpadea despacio, como si cerraras cortinas oscuras. Frota las palmas hasta calentarlas y ponlas con suavidad sobre los ojos cerrados. El calor es como una pequeña bañera para ojos cansados. Tras tres respiraciones vuelves a abrirlos: el mundo se ve más fresco." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un test de vista clínico", "Descansar los ojos con palmas calientes tras tanto mirar pantallas", "Las gafas nuevas del Tagesschau"],
        answer: 1,
        why: "El título habla del descanso de los ojos; el contexto es el exceso de noticias y pantallas.",
      },
      quiz: [
        { q: "Was sollen die Augen drei Minuten machen?", kind: "literal", options: ["In die Ferne schauen", "Ein Buch lesen", "Videos ansehen"], answer: 0, why: "«Leg das Handy weg und schau in die Ferne»." },
        { q: "Womit vergleichst du die Wärme der Hände?", kind: "inferencial", options: ["Mit einer kleinen Badewanne", "Mit einem kalten Wind", "Mit einem harten Kissen"], answer: 0, why: "«Die Wärme ist wie eine kleine Badewanne für müde Augen»." },
        { q: "Was passiert nach drei Atemzügen?", kind: "critica", options: ["Die Welt sieht frischer aus", "Die Augen brennen stärker", "Man braucht sofort neue Nachrichten"], answer: 0, why: "«Nach drei Atemzügen öffnest du sie wieder — die Welt sieht frischer aus»." },
      ],
      vf: [
        { text: "Die Hände werden vor dem Auflegen warm gerieben.", value: true, why: "«Reibe die Handflächen warm und lege sie sanft auf die geschlossenen Augen»." },
        { text: "Der Text sagt, dass Nachrichten verboten sind.", value: false, why: "No hay prohibición: solo una pausa de tres minutos para los ojos." },
        { text: "Du blinzelst langsam wie dunkle Vorhänge.", value: true, why: "«Blinzle langsam, als würdest du dunkle Vorhänge schließen»." },
      ],
    },
    {
      id: "md-de-b1-10-2", theme: "relax mentale",
      title: "Ein Abend ohne Nachrichten", titleEs: "Una tarde sin noticias",
      minutes: 3,
      paragraphs: [
        { it: "Jeden Abend um 20 Uhr laufen die Nachrichten — und den ganzen Tag laufen sie zusätzlich im Handy. Der Kopf sammelt schwere Meldungen wie ein Regenschirm den Regen. Heute Abend darfst du einmal anders machen: eine Sendung auslassen, das Handy in die Tasche legen.", es: "Cada noche a las 20 se emiten las noticias, y además corren todo el día en el móvil. La cabeza junta titulares pesados como un paraguas la lluvia. Esta tarde puedes hacerlo distinto una vez: saltarte una emisión y guardar el móvil en el bolsillo." },
        { it: "Nichts bricht zusammen, wenn du eine Nacht lang nichts erfährst. Der Kopf braucht Pausen wie der Körper. Wenn du die Nachrichten-Diät einen Abend probierst, wirst du merken: Die Stille klingt zuerst fremd — und dann sehr gut.", es: "Nada se derrumba si una noche no te enteras de nada. La cabeza necesita pausas como el cuerpo. Si pruebas la dieta de noticias una tarde, notarás que el silencio suena primero raro, y después muy bien." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una crítica a los periodistas", "Probar una tarde sin noticias para dar descanso a la cabeza", "Cómo funciona una redacción"],
        answer: 1,
        why: "El título anuncia la prueba concreta: una tarde sin noticias, como descanso mental.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Um 20 Uhr laufen die Nachrichten.",
          "Der Kopf sammelt schwere Meldungen.",
          "Lege das Handy in die Tasche.",
          "Die Tagesschau-Sprecherin heißt Sarah.",
          "Die Stille klingt zuerst fremd.",
        ],
        intruder: 3,
        why: "El nombre de la presentadora es un detalle externo que el texto no da: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Der Kopf braucht Pausen von den Nachrichten",
          "Nachrichten sind immer gelogen",
          "Nur Handys ohne Internet sind gut",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Der Kopf sammelt Meldungen wie ein Regenschirm den Regen",
          "Nichts bricht zusammen, wenn du eine Nacht nichts erfährst",
          "Die Stille klingt zuerst fremd",
        ],
        distractors: [
          "Du wirfst das Handy in den Müll",
          "Du schreibst einen Brief an die Redaktion",
          "Am Ende schaust du zwei Sendungen mehr",
        ],
      },
    },
    {
      id: "md-de-b1-10-3", theme: "spiritualità",
      title: "Der Gong um 20 Uhr", titleEs: "El gong a las 20",
      minutes: 3,
      paragraphs: [
        { it: "Die Tagesschau beginnt immer mit dem gleichen Klang. Solche Rituale geben dem Tag Struktur — wie eine Glocke, die sagt: Jetzt ist Abend. Auch du kannst ein kleines Abendritual bauen, ganz ohne Bildschirm und ganz ohne Nachrichten.", es: "El Tagesschau empieza siempre con el mismo sonido. Esos rituales dan estructura al día, como una campana que dice: ya es noche. Tú también puedes construir un pequeño rito de tarde, del todo sin pantalla y del todo sin noticias." },
        { it: "Zum Beispiel: eine Kerze anzünden, ein Glas Wasser trinken, dreimal tief atmen — immer in der gleichen Reihenfolge. Wenn du jeden Abend dasselbe tust, lernt der Körper: Jetzt kommt die Ruhe. Ein Ritual ist am Ende nichts anderes als ein Versprechen an dich selbst.", es: "Por ejemplo: encender una vela, beber un vaso de agua, respirar tres veces hondo, siempre en el mismo orden. Si cada tarde haces lo mismo, el cuerpo aprende: ahora llega la calma. Un ritual es, al final, nada más que una promesa hacia ti mismo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La historia del Tagesschau", "Construir un pequeño ritual de tarde como promesa a uno mismo", "Cómo encender velas correctamente"],
        answer: 1,
        why: "El gong de las 20 es el punto de partida para hablar de rituales personales de calma.",
      },
      sequence: {
        instr: "Ordena el ritual de la tarde:",
        events: ["Zünde eine Kerze an", "Trink ein Glas Wasser", "Atme dreimal tief", "Wiederhole die Reihenfolge jeden Abend", "Der Körper lernt: Jetzt kommt die Ruhe"],
      },
      listen: {
        intro: "Escucha el audio del ritual y responde:",
        audioIt: "Stell dir deinen Abend vor: Der Bildschirm ist aus. Du zündest eine kleine Kerze an und stellst dir ein Glas Wasser hin. Dann atmest du dreimal tief, immer im gleichen Takt. Jeder Abend dieselben Schritte. Nach einer Woche weiß dein Körper schon vor deinem Kopf: Jetzt beginnt die Ruhe.",
        questions: [
          { q: "Was machst du zuerst mit dem Bildschirm?", kind: "literal", options: ["Du schaltest ihn aus", "Du machst ihn lauter", "Du reinigst ihn"], answer: 0, why: "«Der Bildschirm ist aus»." },
          { q: "Was zündest du an?", kind: "literal", options: ["Eine kleine Kerze", "Ein Feuerwerk", "Den Herd"], answer: 0, why: "«Du zündest eine kleine Kerze an»." },
          { q: "Wie oft atmest du tief?", kind: "literal", options: ["Dreimal", "Zweimal", "Hundertmal"], answer: 0, why: "«Du atmest dreimal tief»." },
          { q: "Was weiß der Körper nach einer Woche?", kind: "inferencial", options: ["Jetzt beginnt die Ruhe", "Jetzt kommt Arbeit", "Jetzt beginnt die Sendung"], answer: 0, why: "«Dein Körper weiß schon vor deinem Kopf: Jetzt beginnt die Ruhe»." },
        ],
      },
    },
  ],

  "de-cu-b1-11": [
    {
      id: "md-de-b1-11-1", theme: "meditazione",
      title: "Atmen bei Kritik", titleEs: "Respirar ante la crítica",
      minutes: 2,
      paragraphs: [
        { it: "In der Feedbackrunde hörst du einen Verbesserungsvorschlag für deine Präsentation. Der erste Impuls ist Verteidigung: Aber ich habe doch alles vorbereitet! Atme einmal, bevor du antwortest. Ein Atemzug ist kurz, aber er ist eine Brücke.", es: "En la ronda de feedback oyes una propuesta de mejora para tu presentación. El primer impulso es defenderse: ¡pero si lo preparé todo! Respira una vez antes de responder. Una respiración es breve, pero es un puente." },
        { it: "Auf der anderen Seite der Brücke wartet eine Frage: Was ist wahr an dem, was die andere Person sagt? Auch wenn nur die Hälfte stimmt — die Hälfte ist ein Geschenk. Kritik ist wie Regen: Sie macht nicht schöner, aber sie lässt wachsen.", es: "Al otro lado del puente espera una pregunta: ¿qué hay de cierto en lo que dice la otra persona? Aunque solo la mitad sea cierta, esa mitad es un regalo. La crítica es como la lluvia: no embellece, pero hace crecer." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo defenderse de los compañeros", "Respirar antes de responder a una crítica y encontrar su parte cierta", "Cómo escribir presentaciones perfectas"],
        answer: 1,
        why: "El título une respiración y crítica: recepción serena del feedback, no defensa.",
      },
      quiz: [
        { q: "Was ist der erste Impuls bei Kritik?", kind: "literal", options: ["Verteidigung", "Applaus", "Schlafen"], answer: 0, why: "«Der erste Impuls ist Verteidigung»." },
        { q: "Was ist ein Atemzug laut Text?", kind: "inferencial", options: ["Eine Brücke", "Eine Mauer", "Ein Wettkampf"], answer: 0, why: "«Ein Atemzug ist kurz, aber er ist eine Brücke»." },
        { q: "Welche Haltung empfiehlt der Text gegenüber Kritik?", kind: "critica", options: ["Erst atmen, dann die wahre Hälfte suchen", "Kritik sofort zurückgeben", "Kritikern nie wieder zuhören"], answer: 0, why: "La idea central: respirar primero y buscar la parte cierta, que es un regalo." },
      ],
      vf: [
        { text: "Kritik ist wie Regen: Sie lässt wachsen.", value: true, why: "Es la imagen final del texto." },
        { text: "Du sollst sofort und laut verteidigen.", value: false, why: "El texto propone respirar primero: la defensa es el impulso, no el consejo." },
        { text: "Die Hälfte der Kritik kann ein Geschenk sein.", value: true, why: "«Auch wenn nur die Hälfte stimmt — die Hälfte ist ein Geschenk»." },
      ],
    },
    {
      id: "md-de-b1-11-2", theme: "qui e ora",
      title: "Ein Lob annehmen", titleEs: "Aceptar un elogio",
      minutes: 2,
      paragraphs: [
        { it: "«Das hast du gut gemacht!» Wie oft antworten wir automatisch: «Ach, das war nichts.» Heute üben wir das Gegenteil: Nimm das Lob an. Bleib eine Sekunde still, atme und sag dann einfach: Danke. Mehr braucht es nicht.", es: "«¡Lo hiciste muy bien!» Cuántas veces respondemos automáticamente: «bah, no fue nada». Hoy practicamos lo contrario: acepta el elogio. Quédate un segundo en silencio, respira y di simplemente: gracias. No hace falta más." },
        { it: "In dieser Sekunde passiert etwas Kostbares: Du bist ganz im Moment. Du hörst die freundlichen Worte, du fühlst ihre Wärme — ohne sie wegzuwischen. Freude annehmen ist auch Achtsamkeit: Sie beginnt mit einem vollen Ja und einem leisen Lächeln.", es: "En esa segunda pasa algo valioso: estás del todo en el momento. Oyes las palabras amables, sientes su calor, sin barrerlas. Aceptar la alegría también es atención plena: empieza con un sí pleno y una sonrisa tranquila." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo hacer cumplidos a otros", "Quedarse un segundo presente para aceptar un elogio", "Por qué los elogios son mentira"],
        answer: 1,
        why: "El título anuncia el acto de recibir: presencia ante el elogio, no la técnica de darlo.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Nimm das Lob an, statt es wegzuwischen.",
          "Bleib eine Sekunde still und atme.",
          "Sag dann einfach: Danke.",
          "Blumensträuße kosten in Deutschland etwa zehn Euro.",
          "Du fühlst die Wärme der Worte.",
        ],
        intruder: 3,
        why: "El precio de un ramo de flores no aparece en el texto: es información ajena al ejercicio.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Ein Lob still und ganz anzunehmen ist Achtsamkeit",
          "Lob ist nur Höflichkeit ohne Inhalt",
          "Nur Geschenke zeigen echten Dank",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Bleib eine Sekunde still",
          "Du hörst die freundlichen Worte",
          "Ein volles Ja und ein leises Lächeln",
        ],
        distractors: [
          "Du schenkst sofort etwas zurück",
          "Du lachst laut über das Lob",
          "Der Kollege wiederholt das Lob zehnmal",
        ],
      },
    },
    {
      id: "md-de-b1-11-3", theme: "relax fisico",
      title: "Das Gesicht entspannen", titleEs: "Relajar el rostro",
      minutes: 2,
      paragraphs: [
        { it: "Nach einer Feedbackrunde trägt das Gesicht oft die ganze Sitzung: zusammengezogene Brauen, ein fester Kiefer, ein kleiner Zorn zwischen den Augen. Niemand sieht es — aber du kannst es fühlen. Lege jetzt die Fingerspitzen sanft auf die Stirn.", es: "Después de una ronda de feedback, la cara suele cargar con toda la reunión: ceños fruncidos, mandíbula apretada, un enfado pequeño entre los ojos. Nadie lo ve, pero tú puedes sentirlo. Pon ahora las yemas suavemente sobre la frente." },
        { it: "Glätte mit kleinen Bewegungen die Brauen auseinander. Lass die Zunge weich am Gaumen liegen. Atme aus und stell dir vor, wie das Gesicht weich wird wie warmes Wachs. Ein entspanntes Gesicht macht einen entspannten Kopf — und einen gutmütigen Abend.", es: "Alisa con pequeños movimientos las cejas, separándolas. Deja la lengua blanda en el paladar. Exhala e imagina que el rostro se ablanda como cera tibia. Una cara relajada hace una cabeza relajada, y una tarde benévola." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ritual de belleza nocturno", "Soltar cejas y mandíbula después de una reunión de feedback", "Cómo discutir mejor con la jefa"],
        answer: 1,
        why: "El título apunta al rostro, y el punto de partida es la tensión posterior a la feedback.",
      },
      sequence: {
        instr: "Ordena la relajación del rostro:",
        events: ["Lege die Fingerspitzen auf die Stirn", "Glätte die Brauen auseinander", "Lass die Zunge weich am Gaumen liegen", "Atme aus", "Stell dir vor: Das Gesicht wird weich wie warmes Wachs"],
      },
      listen: {
        intro: "Escucha el audio del final de la reunión y responde:",
        audioIt: "Die Feedbackrunde ist vorbei, der Raum leer. Du bleibst noch einen Moment sitzen. Spüre dein Gesicht: die Stirn, die Brauen, den Kiefer. Mit jedem Ausatmen wird das Gesicht ein bisschen weicher. Morgen früh hast du die Meinung der anderen längst verarbeitet — heute Abend gehört das Gesicht nur dir.",
        questions: [
          { q: "Wo bleibst du nach der Runde?", kind: "literal", options: ["Noch einen Moment sitzen", "Sofort stehen", "Im Flur"], answer: 0, why: "«Du bleibst noch einen Moment sitzen»." },
          { q: "Was spürst du zuerst?", kind: "literal", options: ["Stirn, Brauen und Kiefer", "Nur die Schuhe", "Das Fenster"], answer: 0, why: "«Spüre dein Gesicht: die Stirn, die Brauen, den Kiefer»." },
          { q: "Wann wird das Gesicht weicher?", kind: "literal", options: ["Mit jedem Ausatmen", "Mit jedem Lachen", "Mit jedem Telefonanruf"], answer: 0, why: "«Mit jedem Ausatmen wird das Gesicht ein bisschen weicher»." },
          { q: "Wem gehört das Gesicht heute Abend?", kind: "inferencial", options: ["Nur dir", "Der Gruppe", "Der Chefin"], answer: 0, why: "«Heute Abend gehört das Gesicht nur dir»: se infiere del cierre." },
        ],
      },
    },
  ],

  "de-cu-b1-12": [
    {
      id: "md-de-b1-12-1", theme: "relax mentale",
      title: "Zuhören als Kunst", titleEs: "Escuchar como arte",
      minutes: 2,
      paragraphs: [
        { it: "In der Debatte spricht die andere Seite — und in dir formt sich schon die Antwort. Der Kopf ist beim Formulieren, nicht beim Zuhören. Heute üben wir: Parke die Antwort einen Moment lang und hör zu, bis der Satz ganz vorbei ist.", es: "En el debate habla la otra parte, y en ti ya se está formando la respuesta. La cabeza está redactando, no escuchando. Hoy practicamos: aparta la respuesta un momento y escucha hasta que la frase termine del todo." },
        { it: "Nimm drei Atemzüge und hör einfach zu. Was will die Person wirklich sagen? Welche Sorge steckt hinter dem Argument? Wer so zuhört, antwortet später klüger — und aus dem Wettkampf wird ein Gespräch.", es: "Toma tres respiraciones y simplemente escucha. ¿Qué quiere decir de verdad esa persona? ¿qué preocupación se esconde tras el argumento? Quien escucha así responde después con más inteligencia, y de la competición nace una conversación." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo ganar cualquier debate", "Escuchar de verdad en lugar de preparar la respuesta", "Las reglas de la moderación"],
        answer: 1,
        why: "El título anuncia la escucha como práctica, no la victoria como objetivo.",
      },
      quiz: [
        { q: "Was macht der Kopf, während die andere Seite spricht?", kind: "literal", options: ["Er formt schon die Antwort", "Er schläft ein", "Er zeichnet ein Bild"], answer: 0, why: "«In dir formt sich schon die Antwort»." },
        { q: "Was sollst du mit deiner Antwort machen?", kind: "inferencial", options: ["Sie einen Moment parken", "Sie sofort rufen", "Sie aufschreiben und weggeben"], answer: 0, why: "«Parke die Antwort einen Moment lang»." },
        { q: "Was passiert, wenn man bis zum Ende zuhört?", kind: "critica", options: ["Aus dem Wettkampf wird ein Gespräch", "Man verliert die Debatte sicher", "Die andere Seite schweigt für immer"], answer: 0, why: "«Wer so zuhört, antwortet später klüger — und aus dem Wettkampf wird ein Gespräch»." },
      ],
      vf: [
        { text: "Du sollst drei Atemzüge nehmen und einfach zuhören.", value: true, why: "«Nimm drei Atemzüge und hör einfach zu»." },
        { text: "Hinter dem Argument steckt oft eine Sorge.", value: true, why: "«Welche Sorge steckt hinter dem Argument?»." },
        { text: "Der Text sagt, dass Debatten nutzlos sind.", value: false, why: "No aparece esa idea: el debate se vuelve conversación cuando se escucha." },
      ],
    },
    {
      id: "md-de-b1-12-2", theme: "spiritualità",
      title: "Applaus für alle", titleEs: "Aplauso para todos",
      minutes: 3,
      paragraphs: [
        { it: "Am Ende einer Podiumsdiskussion klatschen die Menschen — für alle Redner, für jede Seite. Dieser Moment hat etwas Feierliches: Streit verwandelt sich in Respekt, und die verschiedenen Meinungen stehen plötzlich friedlich im selben Saal.", es: "Al final de un debate público la gente aplaude, a todos los oradores, a cada parte. Este momento tiene algo solemne: la disputa se transforma en respeto, y las distintas opiniones quedan de pronto en paz en la misma sala." },
        { it: "Wenn du das nächste Mal mit jemandem streitest, erinnere dich an diesen Applaus. Stell dir vor, wie ihr beide am Ende klatscht — nicht weil einer gewonnen hat, sondern weil ihr beide mutig geredet habt. Respekt ist eine stille Form von Applaus.", es: "La próxima vez que discutas con alguien, recuerda ese aplauso. Imagina que ambos aplaudís al final, no porque uno haya ganado, sino porque los dos hablasteis con valentía. El respeto es una forma silenciosa de aplauso." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["El ruido del aplauso en los teatros", "El aplauso final del debate como imagen de respeto hacia todas las posturas", "Cómo votar al final de una asamblea"],
        answer: 1,
        why: "El título anuncia el aplauso para todos: respeto tras la discusión, no logística ni votos.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Am Ende klatschen die Menschen für alle Redner.",
          "Streit verwandelt sich in Respekt.",
          "Stell dir vor, ihr klatscht beide am Ende.",
          "Eintrittskarten kosten an der Abendkasse mehr.",
          "Respekt ist eine Form von Applaus.",
        ],
        intruder: 3,
        why: "El precio de las entradas en taquilla no aparece en el texto: es el intruso comercial.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Respekt verwandelt Streit in Begegnung",
          "Nur der Gewinner verdient Applaus",
          "Debatten enden immer mit Wut",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Man klatscht für alle Redner, für jede Seite",
          "Stell dir vor, ihr klatscht beide am Ende",
          "Ihr habt beide mutig geredet",
        ],
        distractors: [
          "Die Moderation vergibt einen Pokal",
          "Das Publikum verlässt wütend den Saal",
          "Am Ende singen alle zusammen",
        ],
      },
    },
    {
      id: "md-de-b1-12-3", theme: "meditazione",
      title: "Die Pause zwischen den Worten", titleEs: "La pausa entre las palabras",
      minutes: 3,
      paragraphs: [
        { it: "In einer guten Debatte gibt es Pausen: zwischen den Rednern, nach einer starken These, vor der Antwort. Viele fürchten die Stille — dabei ist sie der Raum, in dem Denken stattfindet. Heute schenken wir der Stille drei Minuten.", es: "En un buen debate hay pausas: entre los oradores, tras una tesis fuerte, antes de la respuesta. Muchos temen el silencio, pero es el espacio donde ocurre el pensar. Hoy regalamos al silencio tres minutos." },
        { it: "Sitze still und lausche in den Raum. Vielleicht hörst du deinen Atem, eine Uhr, das leise Summen der Lampen. Jede Stille ist eine Bühne, auf der das nächste Wort reifen darf. Wer Pausen aushält, wirkt sicher — ohne ein Wort sagen zu müssen.", es: "Quédate quieto y escucha la sala. Quizá oigas tu respiración, un reloj, el zumbido suave de las lámparas. Cada silencio es un escenario donde la siguiente palabra puede madurar. Quien sostiene las pausas transmite seguridad, sin necesidad de decir una palabra." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas para hablar más rápido", "Aguantar el silencio entre los argumentos como espacio de pensamiento", "Cómo apagar las lámparas del salón"],
        answer: 1,
        why: "El título nombra la pausa entre palabras: el silencio como escenario, no como enemigo.",
      },
      sequence: {
        instr: "Ordena el ejercicio del silencio:",
        events: ["Sitze still und lausche in den Raum", "Höre deinen Atem", "Höre eine Uhr oder das Summen der Lampen", "Lass das nächste Wort reifen", "Wirk sicher, ohne ein Wort zu sagen"],
      },
      listen: {
        intro: "Escucha el audio de la pausa y responde:",
        audioIt: "Nach deiner Rede bleibt der Raum still. Nichts passiert — und genau das ist gut. Nutze die Stille: Atme einmal ein, atme langsam aus. Vielleicht hörst du das Publikum atmen, eine Tasche, die leise zugeht. Die Pause gehört dir. Wer sie ruhig trägt, braucht kein einziges Wort mehr zu beweisen.",
        questions: [
          { q: "Was passiert nach deiner Rede?", kind: "literal", options: ["Der Raum bleibt still", "Alle rufen laut", "Die Musik startet"], answer: 0, why: "«Nach deiner Rede bleibt der Raum still»." },
          { q: "Was hörst du vielleicht in der Stille?", kind: "literal", options: ["Das Publikum atmen", "Einen Sturm", "Einen Motor"], answer: 0, why: "«Vielleicht hörst du das Publikum atmen»." },
          { q: "Wem gehört die Pause?", kind: "literal", options: ["Dir", "Der Moderation", "Dem Publikum"], answer: 0, why: "«Die Pause gehört dir»." },
          { q: "Was musst du in der Pause nicht mehr tun?", kind: "inferencial", options: ["Kein einziges Wort mehr beweisen", "Sofort weitersprechen", "Den Raum verlassen"], answer: 0, why: "«Wer sie ruhig trägt, braucht kein einziges Wort mehr zu beweisen»." },
        ],
      },
    },
  ],
};
