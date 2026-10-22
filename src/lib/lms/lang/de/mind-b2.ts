import type { MindReading } from "../../cambridge-mind";

/* ═══ DE B2 · Mind readings (temáticas de conciencia) — 3 por unidad ══
   Metodología idéntica a las italianas, inglesas, portuguesas y francesas
   (v9.13): 7 estrategias de comprensión lectora y de escucha. Textos en
   alemán de Alemania B2 (ensayo reflexivo calmado), traducción española
   a la vista. Campos `.it` = alemán (lengua de estudio), `.es` = español.
   Estrategia por índice: L1 = predict + quiz (lit/inf/crít) + V/F con
   justificación; L2 = predict + ideas + intruso; L3 = predict +
   secuencia + escucha. */

export const DE_MIND_B2: Record<string, MindReading[]> = {
  "de-cu-b2-01": [
    {
      id: "md-de-b2-01-1", theme: "meditazione",
      title: "Drei Atemzüge vor der Talkshow", titleEs: "Tres respiraciones antes de la tertulia",
      minutes: 2,
      paragraphs: [
        { it: "In einer Stunde beginnt die Talkshow, und deine Gedanken laufen bereits wie Züge ohne Fahrplan: das Argument, die Zahl, der Einwand, den du befürchtest. Bevor du in die Diskussion gehst, setz dich einen Moment hin und nimm drei bewusste Atemzüge. Einatmen durch die Nase, ausatmen durch den leicht geöffneten Mund.", es: "Dentro de una hora empieza la tertulia y tus pensamientos ya circulan como trenes sin horario: el argumento, la cifra, la objeción que temes. Antes de entrar en la discusión, siéntate un momento y toma tres respiraciones conscientes. Inhala por la nariz, exhala por la boca entreabierta." },
        { it: "Diese drei Atemzüge sind keine Flucht, sondern eine Vorbereitung: Sie geben deinen Gedanken Zeit, sich zu ordnen, bevor sie öffentlich werden. Ein ruhiger Kopf argumentiert klarer, weil er nicht alles gleichzeitig sagen will. Wenn die Runde später hitzig wird, kehrst du einfach zu diesem Atem zurück – er ist dein Anker mitten im Streit.", es: "Estas tres respiraciones no son una huida, sino una preparación: dan a tus pensamientos tiempo para ordenarse antes de hacerse públicos. Una cabeza tranquila argumenta con más claridad porque no quiere decirlo todo a la vez. Si la ronda se caldea más tarde, vuelve simplemente a este aliento: es tu ancla en medio de la disputa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de técnicas de debate", "Respirar con calma antes de entrar en un debate", "Un análisis de la televisión alemana"],
        answer: 1,
        why: "El título une la respiración con el momento previo a la tertulia: apunta a calma interior, no a retórica ni a medios.",
      },
      quiz: [
        { q: "Was nimmst du, bevor du in die Diskussion gehst?", kind: "literal", options: ["Drei bewusste Atemzüge", "Eine Tasse Kaffee", "Deine Notizen mit"], answer: 0, why: "«nimm drei bewusste Atemzüge» está literal al inicio del texto." },
        { q: "Warum hilft der Atem beim Argumentieren?", kind: "inferencial", options: ["Weil er die Gedanken ordnet, bevor sie öffentlich werden", "Weil er die Gegenseite ruhiger stimmt", "Weil er die Sendung verkürzt"], answer: 0, why: "«Sie geben deinen Gedanken Zeit, sich zu ordnen»: se infiere que la cabeza tranquila argumenta mejor." },
        { q: "Welche Haltung empfiehlt der Text für hitzige Momente?", kind: "critica", options: ["Zum Atem zurückkehren statt alles gleichzeitig sagen zu wollen", "Lauter sprechen, um zu gewinnen", "Die Diskussion sofort verlassen"], answer: 0, why: "La idea central: el aliento es el ancla en medio de la disputa; no se trata de vencer ni de huir." },
      ],
      vf: [
        { text: "Du sollst alles gleichzeitig sagen, was dir einfällt.", value: false, why: "«weil er nicht alles gleichzeitig sagen will»: la cabeza tranquila no lo dice todo a la vez." },
        { text: "Der Atem ist ein Anker mitten im Streit.", value: true, why: "«er ist dein Anker mitten im Streit» está literal al final del texto." },
        { text: "Du nimmst die Atemzüge während der Sendung, nicht davor.", value: false, why: "El texto dice «bevor du in die Diskussion gehst»: los tres alientos son antes." },
      ],
    },
    {
      id: "md-de-b2-01-2", theme: "spiritualità",
      title: "Zuhören als Geschenk", titleEs: "Escuchar como regalo",
      minutes: 2,
      paragraphs: [
        { it: "In einer Debatte geht es meist ums Reden: Wer hat den stärkeren Einwand, wer die bessere Zahl? Dabei beginnt die wahre Kunst früher, beim Zuhören. Wenn du einer anderen Person wirklich zuhörst, gibst du ihr etwas, das niemand drucken kann: deine ungeteilte Aufmerksamkeit.", es: "En un debate casi todo gira en torno a hablar: ¿quién tiene la objeción más fuerte, quién la mejor cifra? Pues bien, el verdadero arte empieza antes, en la escucha. Cuando escuchas de verdad a otra persona, le das algo que nadie puede imprimir: tu atención indivisa." },
        { it: "Diese Aufmerksamkeit ist eine stille Form des Respekts, manche würden sagen: eine geistige Übung. Du musst der Meinung nicht zustimmen, um gut zuzuhören; es genügt, dass du den anderen Menschen ernst nimmst. Wer so hört, versteht irgendwann mehr als die Argumente: Er versteht, warum sie jemandem so wichtig sind.", es: "Esta atención es una forma silenciosa de respeto; algunos dirían: un ejercicio espiritual. No tienes que estar de acuerdo con la opinión para escuchar bien: basta con que te tomes en serio a la otra persona. Quien escucha así acaba entendiendo más que los argumentos: entiende por qué le importan tanto a alguien." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso de técnicas de venta", "Escuchar de verdad como forma de respeto", "Una crítica a los debates televisivos"],
        answer: 1,
        why: "El título presenta la escucha como regalo: el texto va del respeto al otro, no de persuasión ni de crítica mediática.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Zuhören ist eine stille Form des Respekts und eine geistige Übung",
          "Nur Zahlen überzeugen in einer Debatte",
          "Wer zuhört, verliert die Diskussion",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Du gibst dem anderen deine ungeteilte Aufmerksamkeit",
          "Zustimmen ist keine Voraussetzung für gutes Zuhören",
          "Wer so hört, versteht, warum Argumente jemandem wichtig sind",
        ],
        distractors: [
          "Der Redner soll lauter sprechen als die anderen",
          "Am Ende gewinnt immer die stärkste Zahl",
          "Zuhören ersetzt das eigene Argument",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Wer gut zuhört, gibt ungeteilte Aufmerksamkeit.",
          "Zustimmen ist keine Voraussetzung für gutes Zuhören.",
          "Erst verstehen, dann antworten.",
          "Die Einschaltquote der Talkshow lag bei 1,2 Millionen.",
          "Du nimmst den anderen Menschen ernst.",
        ],
        intruder: 3,
        why: "La audiencia de la tertulia es un dato televisivo ajeno a la escucha como gesto de respeto: es el intruso.",
      },
    },
    {
      id: "md-de-b2-01-3", theme: "qui e ora",
      title: "Das Licht im Studio", titleEs: "La luz del estudio",
      minutes: 2,
      paragraphs: [
        { it: "Kurz vor der Aufnahme ist das Studio nur noch Licht, Stuhl und Mikrofon. Die Kamera läuft, aber dieser eine Moment gehört dir allein. Du spürst den Stuhl unter dir, das Gewicht deiner Hände, das leise Summen der Lampe über dem Tisch. Mehr braucht es nicht, um ganz hier zu sein.", es: "Poco antes de la grabación, el estudio es solo luz, silla y micrófono. La cámara gira, pero este único momento es tuyo. Sientes la silla debajo de ti, el peso de tus manos, el zumbido suave de la lámpara sobre la mesa. No hace falta más para estar del todo aquí." },
        { it: "Wenn die Aufnahme beginnt, wirst du sprechen und widersprechen und zustimmen. Jetzt aber zählen nur der Atem und das Licht. Wer diesen Moment übt, indem er einfach da sitzt, geht gelassener in jede Diskussion: nicht weil er alle Antworten kennt, sondern weil er weiß, wo er steht – hier, jetzt, in diesem Stuhl.", es: "Cuando empiece la grabación hablarás, discreparás y asentirás. Ahora, en cambio, solo cuentan el aliento y la luz. Quien practica este momento, estando sencillamente sentado, entra con más serenidad en cualquier discusión: no porque conozca todas las respuestas, sino porque sabe dónde está: aquí, ahora, en esta silla." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un reportaje sobre cámaras de televisión", "Estar presente en el instante previo a la grabación", "Un manual de iluminación de estudios"],
        answer: 1,
        why: "El título describe la percepción del estudio antes de grabar: presencia plena, no técnica audiovisual.",
      },
      sequence: {
        instr: "Ordena los momentos del texto:",
        events: [
          "Das Studio ist nur noch Licht, Stuhl und Mikrofon",
          "Du spürst den Stuhl und das Summen der Lampe",
          "Du bist ganz hier, mehr braucht es nicht",
          "Die Aufnahme beginnt, du sprichst und widersprichst",
          "Du gehst gelassener in die Diskussion",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Setz dich auf deinen Stuhl im Studio. Spüre, wie der Rücken gehalten wird, und höre das leise Summen der Lampe. Atme zweimal ruhig ein und aus. Wenn gleich die Aufnahme beginnt, musst du nichts beweisen. Du musst nur hier sein, Satz für Satz, Moment für Moment.",
        questions: [
          { q: "Was hörst du im Studio?", kind: "literal", options: ["Das leise Summen der Lampe", "Lautes Publikum", "Musik aus dem Radio"], answer: 0, why: "«höre das leise Summen der Lampe» está literal en el audio." },
          { q: "Was musst du tun, wenn die Aufnahme beginnt?", kind: "inferencial", options: ["Nichts beweisen, nur hier sein", "Schneller sprechen als sonst", "Die Fragen der anderen beantworten"], answer: 0, why: "«Du musst nichts beweisen. Du musst nur hier sein»: el audio lo resume al final." },
          { q: "Wie oft atmest du ruhig ein und aus?", kind: "literal", options: ["Zweimal", "Zehnmal", "Gar nicht"], answer: 0, why: "«Atme zweimal ruhig ein und aus»." },
          { q: "Welche Haltung vermittelt das Audio?", kind: "inferencial", options: ["Gelassenheit, Satz für Satz", "Nervosität vor der Kamera", "Eile bis zur Sendung"], answer: 0, why: "«Satz für Satz, Moment für Moment»: el tono del audio transmite calma, no prisa." },
        ],
      },
    },
  ],

  "de-cu-b2-02": [
    {
      id: "md-de-b2-02-1", theme: "relax fisico",
      title: "Die Füße unter dem Pult", titleEs: "Los pies bajo el atril",
      minutes: 2,
      paragraphs: [
        { it: "Vor einer Festrede zittern oft die Hände, und die Stimme wird dünn. Ein alter Trick der Rednerinnen und Redner beginnt viel tiefer: bei den Füßen. Drücke beide Fußsohlen sanft in den Boden, als wollten sie Wurzeln schlagen, und spüre, wie der Boden zurückdrückt.", es: "Antes de un discurso conmemorativo tiemblan a menudo las manos y la voz se adelgaza. Un truco antiguo de los oradores empieza mucho más abajo: en los pies. Presiona suavemente ambas plantas contra el suelo, como si quisieran echar raíces, y siente cómo el suelo responde empujando." },
        { it: "Dieser Druck gibt dem Körper Halt, und die Schultern dürfen ein Stück sinken. Atme in den Bauch, nicht in die Brust, und lass den Kiefer leicht locker. Niemand im Saal sieht diese Übung, aber alle hören sie: Eine Stimme, die aus einem ruhigen Körper kommt, trägt weiter und klingt wärmer.", es: "Esa presión da sostén al cuerpo y los hombros pueden bajar un poco. Respira hacia el vientre, no hacia el pecho, y deja la mandíbula ligeramente suelta. Nadie en la sala ve este ejercicio, pero todos lo oyen: una voz que viene de un cuerpo tranquilo llega más lejos y suena más cálida." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un catálogo de micrófonos", "Afirmar los pies y el cuerpo antes de hablar en público", "Un artículo sobre acústica de salas"],
        answer: 1,
        why: "El título baja el foco a los pies bajo el atril: apunta a relajación física antes de hablar, no a técnica de sonido.",
      },
      quiz: [
        { q: "Wo beginnt der alte Trick der Redner?", kind: "literal", options: ["Bei den Füßen", "Bei den Händen", "Beim Mikrofon"], answer: 0, why: "«beginnt viel tiefer: bei den Füßen» está literal en el texto." },
        { q: "Warum trägt die Stimme weiter, wenn der Körper ruhig ist?", kind: "inferencial", options: ["Weil sie aus einem ruhigen Körper kommt", "Weil man lauter atmet", "Weil das Mikrofon näher steht"], answer: 0, why: "«Eine Stimme, die aus einem ruhigen Körper kommt, trägt weiter»: la calma corporal sostiene la voz." },
        { q: "Welche Übung passt zum Text?", kind: "critica", options: ["Fußsohlen in den Boden drücken und in den Bauch atmen", "Möglichst schnell sprechen, um fertig zu werden", "Die Hände verstecken, damit niemand das Zittern sieht"], answer: 0, why: "El texto recomienda raíces en los pies y respiración abdominal; esconder o acelerar van contra su idea." },
      ],
      vf: [
        { text: "Die Übung beginnt bei den Händen.", value: false, why: "El texto dice lo contrario: «beginnt viel tiefer: bei den Füßen»." },
        { text: "Niemand im Saal sieht diese Übung.", value: true, why: "«Niemand im Saal sieht diese Übung» está literal." },
        { text: "Man soll in die Brust statt in den Bauch atmen.", value: false, why: "«Atme in den Bauch, nicht in die Brust»: al vientre, no al pecho." },
      ],
    },
    {
      id: "md-de-b2-02-2", theme: "relax mentale",
      title: "Weniger Gepäck im Kopf", titleEs: "Menos equipaje en la cabeza",
      minutes: 2,
      paragraphs: [
        { it: "Manche Sätze tragen mehr Gepäck mit sich, als nötig wäre: ganze Kolonnen von Substantiven stapeln sich zu Bergen, und wer liest, erschöpft sich am Klettern. Dein Kopf macht das manchmal auch: Ein einfacher Gedanke zieht zehn Nebengedanken hinter sich her, und am Ende weißt du nicht mehr, wo die eigentliche Idee war.", es: "Algunas frases llevan consigo más equipaje del necesario: columnas enteras de sustantivos se apilan en montañas, y quien lee se agota trepando. Tu cabeza hace eso a veces también: un pensamiento simple arrastra detrás diez pensamientos secundarios, y al final ya no sabes dónde estaba la idea original." },
        { it: "Der Ausweg ähnelt dem Lektorat: Prüfe jeden Gedanken, wie ein Editor ein Wort prüft, und lass die Hälfte der Umstände einfach zu Hause. Denke den Satz kurz, dann lang, dann wieder kurz – und wähle die Version, die atmet. Ein leichter Kopf ist kein leerer Kopf: Er hat nur entschieden, was mitdarf und was warten kann.", es: "La salida se parece a la corrección de estilo: examina cada pensamiento como un editor examina una palabra, y deja la mitad de las circunstancias en casa. Piensa la frase corta, luego larga, luego corta otra vez, y elige la versión que respira. Una cabeza ligera no es una cabeza vacía: solo ha decidido qué puede acompañarla y qué puede esperar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ensayo sobre maletas de viaje", "Aligerar los pensamientos como un editor sus frases", "Un manual de montañismo"],
        answer: 1,
        why: "El título habla de equipaje mental y el texto compara el pensamiento con la corrección de estilo: aligera por dentro, no viaja ni escala.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Gedanken lassen sich wie Sätze lektorieren: weniger Gepäck, mehr Klarheit",
          "Lange Sätze sind immer eleganter als kurze",
          "Man sollte überhaupt nicht denken, bevor man redet",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Ein Gedanke kann zehn Nebengedanken hinter sich herziehen",
          "Du prüfst jeden Gedanken, wie ein Editor ein Wort prüft",
          "Ein leichter Kopf hat entschieden, was mitdarf",
        ],
        distractors: [
          "Der Berg war zweitausend Meter hoch",
          "Der Editor arbeitet nur nachts",
          "Umstände darf man niemals streichen",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Ein Gedanke zieht manchmal zehn Nebengedanken hinter sich her.",
          "Du prüfst jeden Gedanken, wie ein Editor ein Wort prüft.",
          "Die Hälfte der Umstände darf zu Hause bleiben.",
          "Ein leichter Kopf ist kein leerer Kopf.",
          "Die Druckerei liefert die Neuauflage am Freitag.",
        ],
        intruder: 4,
        why: "La entrega de la imprenta es logística editorial ajena al ejercicio mental de aligerar pensamientos: es el intruso.",
      },
    },
    {
      id: "md-de-b2-02-3", theme: "meditazione",
      title: "Die Stille vor dem Toast", titleEs: "El silencio antes del brindis",
      minutes: 2,
      paragraphs: [
        { it: "Am Ende einer Festrede hebt jemand das Glas, und für einen winzigen Moment wird der Raum still. Diese Stille ist kein Fehler der Technik, sondern der Atem der Feier. Wer sie aushält, statt sie hastig zu füllen, spürt, wie sie die Anwesenden verbindet.", es: "Al final de un discurso conmemorativo alguien levanta la copa y, por un instante mínimo, la sala enmudece. Ese silencio no es una avería técnica, sino la respiración de la celebración. Quien lo aguanta, en vez de llenarlo con prisa, siente cómo une a los presentes." },
        { it: "Probiere es beim nächsten Anlass: Sprich deinen Toast, dann warte zwei Herzschläge, ehe du weiterredest. In dieser Pause sammelt sich alles, was gesagt wurde, und wird gemeinsam getragen. Die Stille vor dem Toast ist wie ein geöffneter Vorhang: Dahinter beginnt das Eigentliche.", es: "Pruébalo en la próxima ocasión: di tu brindis y espera dos latidos antes de seguir hablando. En esa pausa se reúne todo lo dicho y se comparte. El silencio antes del brindis es como un telón que se abre: detrás empieza lo verdaderamente importante." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un texto sobre reparación de equipos de sonido", "El valor del silencio breve en las celebraciones", "Una lista de brindis famosos"],
        answer: 1,
        why: "El título pone el foco en la pausa antes del brindis: habla del silencio compartido, no de técnica ni de antología.",
      },
      sequence: {
        instr: "Ordena los pasos del brindis consciente:",
        events: [
          "Du sprichst deinen Toast",
          "Du wartest zwei Herzschläge",
          "Das Gesagte sammelt sich in der Pause",
          "Du hebst das Glas",
          "Die Stille verbindet die Anwesenden",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Stell dir den Moment vor: Alle Gläser sind gefüllt, der Raum wartet. Du atmest einmal ruhig ein und lässt den Atem langsam wieder los. In diesen zwei Herzschlägen liegt die ganze Feier. Erst dann hebst du dein Glas und sagst, was dir am Herzen liegt.",
        questions: [
          { q: "Was ist mit den Gläsern?", kind: "literal", options: ["Alle Gläser sind gefüllt", "Die Gläser sind leer", "Ein Glas ist zerbrochen"], answer: 0, why: "«Alle Gläser sind gefüllt» está literal al inicio del audio." },
          { q: "Was tust du, bevor du das Glas hebst?", kind: "inferencial", options: ["Ich atme einmal ruhig ein und wieder aus", "Ich zähle bis zwanzig laut", "Ich singe ein Lied"], answer: 0, why: "«Du atmest einmal ruhig ein und lässt den Atem langsam wieder los»: antes de levantar la copa, el aliento." },
          { q: "Wo liegt die ganze Feier, sagt das Audio?", kind: "literal", options: ["In diesen zwei Herzschlägen", "In der Musik der Band", "Im Essen"], answer: 0, why: "«In diesen zwei Herzschlägen liegt die ganze Feier»." },
          { q: "Wann sagst du, was dir am Herzen liegt?", kind: "inferencial", options: ["Erst nach dem Atem, beim Heben des Glases", "Bevor alle ankommen", "Gar nicht"], answer: 0, why: "«Erst dann hebst du dein Glas und sagst, was dir am Herzen liegt»: primero el aliento, luego las palabras." },
        ],
      },
    },
  ],

  "de-cu-b2-03": [
    {
      id: "md-de-b2-03-1", theme: "spiritualità",
      title: "Freundlich mit dir selbst", titleEs: "Amable contigo mismo",
      minutes: 2,
      paragraphs: [
        { it: "Nach einem Fehler reden viele Menschen mit sich selbst, wie sie es mit keinem Gast täten: vorwurfsvoll, laut, ohne Pause. Dabei beginnt die Wiederholung des Fehlers oft genau dort, wo die Selbstachtung endet. Wer sich selbst freundlich begegnet, wird nicht nachgiebiger, sondern klarer.", es: "Después de un error, muchas personas hablan consigo mismas como no lo harían con ningún invitado: con reproches, en voz alta, sin pausa. Pues bien, la repetición del error suele empezar justamente donde termina el respeto propio. Quien se trata con amabilidad no se vuelve más indulgente, sino más lúcido." },
        { it: "Freundlichkeit gegen sich selbst ist kein Luxus, sondern eine Übung: Benenne, was passiert ist, wie du es einer guten Freundin erzählen würdest – mit Fakten, ohne Drama. Dann frage, was du daraus lernen kannst. Fehler passieren, sagt ein Sprichwort, und wer freundlich mit sich umgeht, macht aus ihnen Erfahrung, nicht Gefangenschaft.", es: "La amabilidad con uno mismo no es un lujo, sino un ejercicio: nombra lo que pasó como se lo contarías a una buena amiga, con hechos y sin drama. Luego pregúntate qué puedes aprender de ello. Los errores pasan, dice un proverbio, y quien se trata con cariño hace de ellos experiencia, no prisión." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de gestión de equipos", "Tratarse con amabilidad tras cometer un error", "Una crítica a los proverbios alemanes"],
        answer: 1,
        why: "El título apunta a la relación amable consigo mismo después de un fallo, no a empresas ni a refranes.",
      },
      quiz: [
        { q: "Wie reden viele Menschen nach einem Fehler mit sich selbst?", kind: "literal", options: ["Vorwurfsvoll, laut, ohne Pause", "Ruhig und mit Pausen", "Überhaupt nicht"], answer: 0, why: "«vorwurfsvoll, laut, ohne Pause» está literal al inicio." },
        { q: "Warum wird man durch Selbstfreundlichkeit klarer?", kind: "inferencial", options: ["Weil die Wiederholung des Fehlers oft dort beginnt, wo die Selbstachtung endet", "Weil man den Fehler vergisst", "Weil andere den Fehler übernehmen"], answer: 0, why: "«Dabei beginnt die Wiederholung des Fehlers oft genau dort, wo die Selbstachtung endet»: el respeto propio evita repetir el fallo." },
        { q: "Welche Übung empfiehlt der Text?", kind: "critica", options: ["Den Fehler benennen wie einer guten Freundin, mit Fakten und ohne Drama", "Den Fehler so schnell wie möglich vergessen", "Anderen die Schuld geben, um sich zu schützen"], answer: 0, why: "El texto propone nombrar lo pasado con hechos y sin drama y extraer la lección: no olvidar ni culpar." },
      ],
      vf: [
        { text: "Freundlichkeit mit sich selbst macht nachgiebig.", value: false, why: "El texto dice lo contrario: «wird nicht nachgiebiger, sondern klarer»." },
        { text: "Du sollst benennen, was passiert ist, mit Fakten und ohne Drama.", value: true, why: "«Benenne, was passiert ist, wie du es einer guten Freundin erzählen würdest»." },
        { text: "Fehler passieren, laut Text.", value: true, why: "«Fehler passieren, sagt ein Sprichwort»." },
      ],
    },
    {
      id: "md-de-b2-03-2", theme: "qui e ora",
      title: "Im Stuhl der Beraterin", titleEs: "En la silla de la asesora",
      minutes: 2,
      paragraphs: [
        { it: "Im Beratungsbüro tickt eine Uhr, und auf dem Tisch liegt ein Klemmbrett mit Formularen. Du bist hier, weil ein Vertrag dich bindet, doch in diesem Moment bindet dich nur der Stuhl. Spüre die Rückenlehne, das Papier unter den Fingern, den Stift, der wartet.", es: "En la oficina de asesoría tictacea un reloj y sobre la mesa hay una carpeta con formularios. Estás aquí porque un contrato te ata, pero en este momento solo te ata la silla. Siente el respaldo, el papel bajo los dedos, el bolígrafo que espera." },
        { it: "Die Vergangenheit, die du schildern wirst, ist bereits vergangen; sie kann dir hier nichts mehr tun. Die Zukunft, um die du dir Sorgen machst, ist noch nicht da. Was bleibt, ist dieser Schreibtisch, diese Frage der Beraterin, dein nächster Atemzug. Wer hier ganz sitzt, schildert klarer und hört genauer zu.", es: "El pasado que vas a relatar ya es pasado: aquí no puede hacerte nada. El futuro que te preocupa todavía no ha llegado. Lo que queda es este escritorio, esta pregunta de la asesora, tu próxima respiración. Quien está sentado del todo aquí relata con más claridad y escucha con más precisión." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de derecho inmobiliario", "Estar presente en la silla de la asesoría", "Una crítica a la burocracia alemana"],
        answer: 1,
        why: "El título se centra en el momento presente en la silla, no en el contrato ni en los formularios.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Im Beratungsbüro zählt am Ende nur der gegenwärtige Moment: Stuhl, Frage, Atem",
          "Formulare sind wichtiger als Gespräche",
          "Man sollte in die Vergangenheit zurückreisen",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Du spürst die Rückenlehne und das Papier unter den Fingern",
          "Die Vergangenheit kann dir hier nichts mehr tun",
          "Wer ganz sitzt, schildert klarer und hört genauer",
        ],
        distractors: [
          "Die Uhr im Büro ging zehn Minuten nach",
          "Die Beraterin hat um 14 Uhr Feierabend",
          "Der Vertrag läuft über zwei Jahre",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Du spürst die Rückenlehne und den Stift, der wartet.",
          "Die Vergangenheit ist bereits vergangen.",
          "Die Zukunft ist noch nicht da.",
          "Dieser Schreibtisch und dein nächster Atemzug bleiben.",
          "Das Formular muss in dreifacher Ausfertigung abgegeben werden.",
        ],
        intruder: 4,
        why: "Las copias del formulario son trámite administrativo ajeno al ejercicio de presencia en la silla: es el intruso.",
      },
    },
    {
      id: "md-de-b2-03-3", theme: "relax fisico",
      title: "Der Kloß im Hals", titleEs: "El nudo en la garganta",
      minutes: 2,
      paragraphs: [
        { it: "Nach schlechten Nachrichten sitzt oft ein Kloß im Hals: Der Kiefer spannt sich an, die Atmung wird flach, die Schultern klettern Richtung Ohren. Der Körper bereitet sich auf Gefahr vor, obwohl der Feind nur eine Nachricht auf Papier war.", es: "Tras las malas noticias se instala a menudo un nudo en la garganta: la mandíbula se tensa, la respiración se vuelve superficial, los hombros trepan hacia las orejas. El cuerpo se prepara para el peligro, aunque el enemigo solo fuera una noticia en papel." },
        { it: "Du kannst diesen Kloß nicht wegdenken, aber du kannst ihn weich atmen: Öffne den Kiefer ein wenig, lasse die Zunge unten ruhen und seufze hörbar aus. Wiederhole das dreimal. Der Seufzer ist eine uralte Technik, die das Nervensystem informiert: Es darf wieder ruhiger werden.", es: "No puedes pensar ese nudo para hacerlo desaparecer, pero puedes ablandarlo respirando: abre un poco la mandíbula, deja que la lengua descanse abajo y suspira de forma audible. Repítelo tres veces. El suspiro es una técnica antiquísima que informa al sistema nervioso: puede volverse a estar tranquilo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un artículo sobre nutrición", "Soltar la tensión de garganta y mandíbula tras una mala noticia", "Un tratado de canto"],
        answer: 1,
        why: "El «nudo en la garganta» es tensión física tras un disgusto: el texto enseña a destensar, no a comer ni a cantar.",
      },
      sequence: {
        instr: "Ordena los pasos del ejercicio:",
        events: [
          "Du bemerkst den Kloß im Hals",
          "Du öffnest den Kiefer ein wenig",
          "Du lässt die Zunge unten ruhen",
          "Du seufzt hörbar aus",
          "Du wiederholst das dreimal",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Setz dich aufrecht hin und lass die Schultern sinken. Öffne den Kiefer ein wenig, als würdest du sanft gähnen. Die Zunge ruht unten, der Atem fließt langsam. Nun seufze einmal hörbar aus – wie nach einem langen Tag. Spüre, wie der Hals weicher wird, Atemzug für Atemzug.",
        questions: [
          { q: "Was tust du mit dem Kiefer?", kind: "literal", options: ["Ich öffne ihn ein wenig, wie beim sanften Gähnen", "Ich beiße die Zähne zusammen", "Ich drehe den Kopf hin und her"], answer: 0, why: "«Öffne den Kiefer ein wenig, als würdest du sanft gähnen»." },
          { q: "Was bezweckt der hörbare Seufzer?", kind: "inferencial", options: ["Er informiert das Nervensystem, dass es ruhiger werden darf", "Er zeigt der Umgebung Ärger", "Er macht die Stimme lauter"], answer: 0, why: "«der Atem fließt langsam» y el suspiro: el audio retoma la idea del texto de calmar el sistema nervioso." },
          { q: "Wo ruht die Zunge?", kind: "literal", options: ["Unten", "Am Gaumen", "Hinter den Lippen"], answer: 0, why: "«Die Zunge ruht unten»." },
          { q: "Wie verändert sich der Hals?", kind: "inferencial", options: ["Er wird weicher, Atemzug für Atemzug", "Er wird enger", "Er bleibt genau gleich"], answer: 0, why: "«Spüre, wie der Hals weicher wird, Atemzug für Atemzug»." },
        ],
      },
    },
  ],

  "de-cu-b2-04": [
    {
      id: "md-de-b2-04-1", theme: "relax mentale",
      title: "Gedanken wie Zitate", titleEs: "Pensamientos como citas",
      minutes: 2,
      paragraphs: [
        { it: "Ein Gedanke kommt und behauptet: Das wird schiefgehen. Ein anderer sagt: Du hast es schon wieder falsch gemacht. Wir glauben solche Sätze oft sofort, nur weil sie in unserem eigenen Kopf stehen. Ein Journalist würde anders arbeiten: Er würde fragen, wer das gesagt hat, und die Quelle prüfen.", es: "Llega un pensamiento y afirma: esto va a salir mal. Otro dice: lo has vuelto a hacer mal. Creemos enseguida tales frases solo porque están en nuestra propia cabeza. Un periodista trabajaría de otro modo: preguntaría quién lo ha dicho y comprobaría la fuente." },
        { it: "Behandle deine Gedanken wie Zitate: Sie sind Äußerungen, keine Beweise. Du darfst sie hören, niederschreiben und danach fragen: Stimmt das, oder ist es nur die Stimme der alten Sorge? Gedanken, die man nicht für bare Münze nimmt, verlieren an Macht – und der Kopf wird stiller, weil nicht mehr jeder Satz eine Schlagzeile sein muss.", es: "Trata tus pensamientos como citas: son declaraciones, no pruebas. Puedes oírlos, anotarlos y preguntarte después: ¿es cierto, o es solo la voz de la vieja preocupación? Los pensamientos que no se toman al pie de la letra pierden poder, y la cabeza se aquieta, porque ya no toda frase tiene que ser un titular." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de periodismo de investigación", "Tratar los propios pensamientos como citas por verificar", "Una historia de la prensa amarilla"],
        answer: 1,
        why: "El título compara los pensamientos con citas: el texto enseña a no creerlos automáticamente, no a investigar noticias.",
      },
      quiz: [
        { q: "Was behauptet der erste Gedanke im Text?", kind: "literal", options: ["Das wird schiefgehen", "Heute wird alles gelingen", "Ich gehe jetzt spazieren"], answer: 0, why: "«Das wird schiefgehen» está literal al inicio." },
        { q: "Warum verlieren Gedanken an Macht, die man nicht für bare Münze nimmt?", kind: "inferencial", options: ["Weil sie Äußerungen sind und keine Beweise", "Weil man sie vergisst", "Weil andere sie verbieten"], answer: 0, why: "«Sie sind Äußerungen, keine Beweise»: al no tomarlos como moneda contante, se debilitan." },
        { q: "Welche Frage passt zur Haltung des Textes?", kind: "critica", options: ["Stimmt das, oder ist es nur die Stimme der alten Sorge?", "Wer hat mir das eingeredet, und wen kann ich dafür kritisieren?", "Wie unterdrücke ich alle Gedanken sofort?"], answer: 0, why: "El texto propone verificar el pensamiento con calma, no buscar culpables ni reprimir." },
      ],
      vf: [
        { text: "Gedanken sind Beweise, weil sie im eigenen Kopf stehen.", value: false, why: "El texto dice lo contrario: «Sie sind Äußerungen, keine Beweise»." },
        { text: "Du darfst Gedanken hören und niederschreiben.", value: true, why: "«Du darfst sie hören, niederschreiben und danach fragen»." },
        { text: "Nicht jeder Satz im Kopf muss eine Schlagzeile sein.", value: true, why: "«weil nicht mehr jeder Satz eine Schlagzeile sein muss»." },
      ],
    },
    {
      id: "md-de-b2-04-2", theme: "meditazione",
      title: "Der Atem schreibt mit", titleEs: "El aliento escribe contigo",
      minutes: 2,
      paragraphs: [
        { it: "Wer lange Texte schreibt, vergisst manchmal zu atmen: Die Schultern steigen, der Atem wird kurz, die Sätze werden es auch. Setz dich für einen Moment zurück vom Bildschirm und lass drei Atemzüge länger sein als gewöhnlich – länger ein, länger aus.", es: "Quien escribe textos largos olvida a veces respirar: los hombros suben, el aliento se acorta, y las frases también. Apártate un momento de la pantalla y deja que tres respiraciones sean más largas de lo habitual: más larga la inhalación, más larga la exhalación." },
        { it: "Danach kehrst du zum Text zurück, aber etwas hat sich verändert: Der Rhythmus deiner Sätze folgt nun einem ruhigeren Takt. Meditation bedeutet nicht, dass der Geist leer wird; er darf schreiben, zweifeln, formulieren. Er bekommt nur einen Begleiter, den Atem, der leise mitzählt, Satz für Satz.", es: "Después vuelves al texto, pero algo ha cambiado: el ritmo de tus frases sigue ahora un compás más tranquilo. Meditar no significa que la mente quede vacía; puede escribir, dudar, formular. Solo recibe un acompañante, el aliento, que cuenta en voz baja, frase por frase." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso de mecanografía rápida", "Respirar mientras se escribe para dar ritmo al texto", "Una crítica a las pantallas"],
        answer: 1,
        why: "El título presenta al aliento como compañero de escritura: ritmo y calma, no velocidad ni crítica tecnológica.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Der Atem begleitet das Schreiben und gibt den Sätzen einen ruhigeren Takt",
          "Gute Texte entstehen nur unter Zeitdruck",
          "Meditation verlangt einen leeren Geist",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Wer lange schreibt, vergisst manchmal zu atmen",
          "Du lässt drei Atemzüge länger sein als gewöhnlich",
          "Der Geist darf schreiben, zweifeln und formulieren",
        ],
        distractors: [
          "Der Bildschirm gehört während der Arbeit ausgeschaltet",
          "Der Text muss bis 17 Uhr fertig sein",
          "Schultern steigen, weil der Stuhl kaputt ist",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Wer lange schreibt, vergisst manchmal zu atmen.",
          "Drei Atemzüge länger ein, länger aus.",
          "Der Atem zählt leise mit, Satz für Satz.",
          "Der Geist darf schreiben, zweifeln, formulieren.",
          "Die Tastatur hat einen deutschen und einen englischen Modus.",
        ],
        intruder: 4,
        why: "Los modos del teclado son un detalle técnico ajeno a la respiración y al ritmo de la escritura: es el intruso.",
      },
    },
    {
      id: "md-de-b2-04-3", theme: "spiritualità",
      title: "Worte sorgsam tragen", titleEs: "Llevar las palabras con cuidado",
      minutes: 3,
      paragraphs: [
        { it: "Worte sind leichter als man denkt und tragen mehr, als man ahnt: Eine Formulierung kann einen Tag erhellen oder ein halbes Jahr belasten. Wer das einmal verstanden hat, geht anders mit Sprache um – nicht ängstlicher, sondern sorgfältiger.", es: "Las palabras pesan menos de lo que se cree y cargan más de lo que se imagina: una formulación puede iluminar un día o agobiar medio año. Quien lo entiende una vez, trata la lengua de otro modo: no con más miedo, sino con más cuidado." },
        { it: "Sorgfalt ist eine stille geistige Haltung: Vor dem Sprechen einen Atemzug lang prüfen, ob der Satz auch in einem Monat noch wahr sein soll. Das ist keine Zensur, sondern Respekt vor der Kraft der Worte. In vielen Traditionen gilt Rede als das erste Geschenk, das Menschen einander machen – Geschenke wählt man mit Bedacht aus.", es: "El esmero es una actitud espiritual silenciosa: antes de hablar, comprobar durante una respiración si la frase seguirá siendo cierta dentro de un mes. No es censura, sino respeto por la fuerza de las palabras. En muchas tradiciones, el habla es el primer regalo que las personas se hacen, y los regalos se eligen con tiento." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un diccionario de sinónimos", "El cuidado con que elegimos y damos las palabras", "Un texto sobre regalos de cumpleaños"],
        answer: 1,
        why: "El título habla de cargar las palabras con cuidado: el texto va del respeto al lenguaje, no del léxico ni de obsequios materiales.",
      },
      sequence: {
        instr: "Ordena la práctica del texto:",
        events: [
          "Du verstehst, wie viel Worte tragen",
          "Du prüfst einen Atemzug lang, ob der Satz in einem Monat noch wahr ist",
          "Du sprichst mit Bedacht",
          "Du behandelst Rede wie ein Geschenk",
          "Du wählst das Geschenk mit Sorgfalt aus",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Bevor du heute sprichst, halte einen Atemzug lang inne. Frag dich leise: Trägt dieser Satz den anderen oder belastet er ihn? Worte sind Geschenke; manche werden ein Leben lang behalten. Wähle deshalb sorgfältig, und wenn du nichts Gutes zu sagen hast, schweige freundlich.",
        questions: [
          { q: "Was tust du, bevor du heute sprichst?", kind: "literal", options: ["Ich halte einen Atemzug lang inne", "Ich spreche sofort", "Ich schreibe erst einen Brief"], answer: 0, why: "«halte einen Atemzug lang inne» está literal al inicio del audio." },
          { q: "Was kann mit Worten als Geschenken geschehen?", kind: "inferencial", options: ["Manche werden ein Leben lang behalten", "Sie werden immer zurückgegeben", "Sie verlieren sofort ihren Wert"], answer: 0, why: "«manche werden ein Leben lang behalten»: se infiere el valor duradero del regalo." },
          { q: "Was fragst du dich leise?", kind: "literal", options: ["Trägt dieser Satz den anderen oder belastet er ihn?", "Wie laut kann ich sprechen?", "Wann ist die Pause zu Ende?"], answer: 0, why: "La pregunta literal del audio es si la frase sostiene o carga al otro." },
          { q: "Was tust du, wenn du nichts Gutes zu sagen hast?", kind: "inferencial", options: ["Ich schweige freundlich", "Ich sage es trotzdem", "Ich wechsle das Thema laut"], answer: 0, why: "«schweige freundlich»: el audio cierra con esa instrucción." },
        ],
      },
    },
  ],

  "de-cu-b2-05": [
    {
      id: "md-de-b2-05-1", theme: "qui e ora",
      title: "Der Feed und der Atem", titleEs: "El feed y el aliento",
      minutes: 2,
      paragraphs: [
        { it: "Der Daumen scrollt, das Auge springt, der Atem wird flach – so sehen viele Abende aus. Der Feed verspricht, dass es gleich interessanter wird, und genau dieses Gleich ist sein Trick. Solange du auf das Gleich wartest, bist du nirgendwo.", es: "El pulgar hace scroll, la mirada salta, el aliento se vuelve superficial: así son muchas tardes. El feed promete que ahora mismo se pondrá interesante, y ese «ahora mismo» es justamente su truco. Mientras esperas el ahora mismo, no estás en ninguna parte." },
        { it: "Lege das Handy einmal mit dem Bild nach unten auf den Tisch und spüre den kleinen Entzug: Die Finger zittern vielleicht, der Kopf sucht nach Neuigkeiten. Genau hier beginnt die Übung: Bleib bei diesem Gefühl, ohne zu urteilen, und folge drei Atemzügen. Das Hier und Jetzt ist kein Ort, zu dem man reist; es ist der Ort, an dem man gerade einfach sitzt – mit zitternden Fingern, wenn es sein muss.", es: "Deja una vez el móvil boca abajo sobre la mesa y siente el pequeño síndrome de abstinencia: quizá tiemblen los dedos, la cabeza busca novedades. Justamente aquí empieza el ejercicio: quédate con esa sensación, sin juzgarla, y sigue tres respiraciones. El aquí y el ahora no es un lugar al que se viaja; es el lugar en el que ahora mismo estás sentado, con dedos temblorosos si hace falta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una reseña de redes sociales", "Volver al aquí y ahora frente al scroll infinito", "Un tutorial de configuración del móvil"],
        answer: 1,
        why: "El título enfrenta el feed con la respiración: el texto trata la presencia frente al scroll, no la opinión sobre redes.",
      },
      quiz: [
        { q: "Was macht der Daumen, während das Auge springt?", kind: "literal", options: ["Er scrollt", "Er ruht", "Er schreibt"], answer: 0, why: "«Der Daumen scrollt, das Auge springt» está literal al inicio." },
        { q: "Warum bist du nirgendwo, solange du auf das Gleich wartest?", kind: "inferencial", options: ["Weil das Gleich der Trick des Feeds ist und nie kommt", "Weil der Raum zu dunkel ist", "Weil man zu müde ist"], answer: 0, why: "«genau dieses Gleich ist sein Trick»: la promesa perpetua impide estar en ninguna parte." },
        { q: "Welche Haltung empfiehlt der Text gegenüber dem Entzug?", kind: "critica", options: ["Bleib bei dem Gefühl, ohne zu urteilen, und folge drei Atemzügen", "Sofort weiterscrollen, um das Zittern zu stoppen", "Das Handy wegwerfen"], answer: 0, why: "La práctica del texto es quedarse con la sensación sin juzgarla: ni huir al scroll ni eliminar el móvil." },
      ],
      vf: [
        { text: "Der Feed hält sein Versprechen: Es wird gleich interessanter.", value: false, why: "El texto llama a ese «Gleich» un truco: «genau dieses Gleich ist sein Trick»." },
        { text: "Die Finger können beim Üben zittern.", value: true, why: "«mit zitternden Fingern, wenn es sein muss»." },
        { text: "Das Hier und Jetzt ist ein Reiseziel.", value: false, why: "«ist kein Ort, zu dem man reist»: es el lugar donde ya estás sentado." },
      ],
    },
    {
      id: "md-de-b2-05-2", theme: "relax fisico",
      title: "Müde Augen, weicher Blick", titleEs: "Ojos cansados, mirada suave",
      minutes: 2,
      paragraphs: [
        { it: "Nach Stunden am Bildschirm brennen die Augen, und der Blick ist hart geworden, ohne dass du es gemerkt hast. Ein einfacher Wechsel: Schau in die Ferne – aus dem Fenster, bis zum Ende der Straße – und lass die Augenlider schwer werden. Kein Zusammenkneifen, kein Suchen: Nur Schauen.", es: "Después de horas frente a la pantalla arden los ojos y la mirada se ha endurecido sin que te dieras cuenta. Un cambio sencillo: mira a lo lejos, por la ventana, hasta el final de la calle, y deja que los párpados pesen. Sin apretar, sin buscar: solo mirar." },
        { it: "Danach bedecke die geschlossenen Augen sanft mit den warmen Handflächen, ohne Druck, und gib ihnen eine Minute Dunkelheit. Die Handflächen geben Wärme, die Augen nehmen Ruhe. Wenn du die Hände wieder abnimmst, wirkt die Welt für einen Moment weicher – nicht weil sie sich verändert hätte, sondern weil dein Blick es hat.", es: "Después cubre suavemente los ojos cerrados con las palmas tibias, sin presionar, y dales un minuto de oscuridad. Las palmas entregan calor, los ojos reciben descanso. Cuando retires las manos, el mundo se ve por un instante más suave: no porque haya cambiado, sino porque tu mirada lo ha hecho." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una receta de colirios caseros", "Descansar la vista después de la pantalla", "Un anuncio de gafas nuevas"],
        answer: 1,
        why: "El título une ojos cansados y mirada suave: el texto propone descanso visual, no remedios ni productos.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Augen und Blick erholen sich mit Ferne, Wärme und Dunkelheit",
          "Brennende Augen muss man einfach ertragen",
          "Nur neue Brillen helfen gegen Bildschirmmüdigkeit",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Du schaust in die Ferne bis zum Ende der Straße",
          "Du bedeckst die geschlossenen Augen mit warmen Handflächen",
          "Die Welt wirkt weicher, weil dein Blick sich verändert hat",
        ],
        distractors: [
          "Die Straße endet an einer Ampel",
          "Die Handflächen müssen zehn Minuten bleiben",
          "Der Bildschirm soll größer gekauft werden",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Du schaust in die Ferne, ohne zu suchen.",
          "Die Augenlider dürfen schwer werden.",
          "Die Handflächen geben Wärme ohne Druck.",
          "Die Welt wirkt einen Moment weicher.",
          "Der Bildschirm gehört alle zwei Jahre ausgetauscht.",
        ],
        intruder: 4,
        why: "Cambiar el monitor cada dos años es información de compra ajena al descanso de los ojos: es el intruso.",
      },
    },
    {
      id: "md-de-b2-05-3", theme: "relax mentale",
      title: "Zwei Stimmen in dir", titleEs: "Dos voces dentro de ti",
      minutes: 2,
      paragraphs: [
        { it: "Bei jeder Meinung wohnen zwei Stimmen mit: die überzeugte, die laut Ja sagt, und die zweifelnde, die leise fragt: Bist du sicher? Die meisten von uns haben gelernt, die zweite Stimme zu überfahren, weil Zweifel als Schwäche gilt.", es: "En cada opinión habitan dos voces: la convencida, que dice sí en voz alta, y la dubitativa, que pregunta en voz baja: ¿estás seguro? La mayoría hemos aprendido a atropellar la segunda, porque la duda pasa por debilidad." },
        { it: "Doch wer die zweifelnde Stimme anhört, statt sie zu überfahren, gewinnt an innerer Ruhe: Er muss nicht mehr ständig gegen sich selbst streiten. Das ist keine Entscheidungsschwäche, sondern eine innere Debatte mit guten Manieren: Beide Seiten dürfen sprechen, und am Ende entscheidest du – ohne dass eine Stimme die andere besiegen musste.", es: "Pero quien escucha la voz dubitativa, en vez de atropellarla, gana sosiego interior: ya no tiene que discutir constantemente consigo mismo. No es indecisión, sino un debate interno con buenos modales: ambas partes pueden hablar, y al final decides tú, sin que una voz tenga que vencer a la otra." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un artículo sobre coros y música", "Escuchar la voz del propio desacuerdo interior", "Un manual de debates parlamentarios"],
        answer: 1,
        why: "Las dos voces del título son la convicción y la duda internas: el texto va del diálogo mental, no del canto ni del parlamento.",
      },
      sequence: {
        instr: "Ordena el proceso del texto:",
        events: [
          "Zwei Stimmen wohnen in jeder Meinung",
          "Die laute Stimme sagt Ja",
          "Die leise Stimme fragt: Bist du sicher?",
          "Du hörst die zweifelnde Stimme an, statt sie zu überfahren",
          "Am Ende entscheidest du, ohne eine Stimme zu besiegen",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "In dir sprechen heute gleich zwei Stimmen: eine überzeugte und eine zweifelnde. Lass beide kurz zu Wort kommen. Die überzeugte darf sagen, was sie will. Die zweifelnde darf nur eine Frage stellen. Danach atmest du aus und triffst deine Wahl – ruhig, wie ein guter Moderator, der allen gedankt hat.",
        questions: [
          { q: "Wie viele Stimmen sprechen in dir?", kind: "literal", options: ["Zwei", "Drei", "Keine"], answer: 0, why: "«zwei Stimmen: eine überzeugte und eine zweifelnde» está literal al inicio." },
          { q: "Was darf die zweifelnde Stimme tun?", kind: "inferencial", options: ["Nur eine Frage stellen", "So lange reden wie sie will", "Die Entscheidung treffen"], answer: 0, why: "«Die zweifelnde darf nur eine Frage stellen»: se infiere el papel limitado y respetado de la duda." },
          { q: "An wen erinnert die Art der Entscheidung?", kind: "literal", options: ["An einen guten Moderator, der allen gedankt hat", "An ein Sportspiel mit Sieger", "An ein Gericht mit Urteil"], answer: 0, why: "«wie ein guter Moderator, der allen gedankt hat»." },
          { q: "Wann triffst du deine Wahl?", kind: "inferencial", options: ["Nach dem Ausatmen, wenn beide Stimmen gehört wurden", "Bevor die Stimmen sprechen", "Niemals"], answer: 0, why: "«Danach atmest du aus und triffst deine Wahl»: primero se escucha, luego se decide." },
        ],
      },
    },
  ],

  "de-cu-b2-06": [
    {
      id: "md-de-b2-06-1", theme: "meditazione",
      title: "Das Lächeln von innen", titleEs: "La sonrisa desde dentro",
      minutes: 2,
      paragraphs: [
        { it: "Ein echtes Lächeln beginnt nicht im Gesicht, sondern irgendwo tiefer: Es entsteht, wenn der Körper ein wenig Ruhe findet, und steigt dann wie von selbst nach oben. Umgekehrt funktioniert es auch: Ein sanftes, halbes Lächeln kann dem Körper signalisieren, dass keine Gefahr droht.", es: "Una sonrisa verdadera no empieza en la cara, sino algo más adentro: nace cuando el cuerpo encuentra un poco de quietud y sube luego como por sí sola. También funciona al revés: una media sonrisa suave puede señalarle al cuerpo que no acecha ningún peligro." },
        { it: "Probiere es jetzt: Lass die Mundwinkel minimal heben, nicht für andere, sondern für dich selbst, und beobachte, was mit den Schultern passiert. Manchmal sinken sie ein Stück. Das ist kein Trick, sondern eine alte Abmachung zwischen Gesicht und Nervensystem – ein Lächeln, das von innen kommt, muss nirgendwo hingehen.", es: "Pruébalo ahora: deja que las comisuras suban lo mínimo, no para los demás, sino para ti, y observa qué pasa con los hombros. A veces bajan un poco. No es un truco, sino un pacto antiguo entre el rostro y el sistema nervioso: una sonrisa que viene de dentro no tiene que ir a ninguna parte." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de gestos sociales", "La sonrisa como señal interna de calma", "Un texto sobre protocolo de empresa"],
        answer: 1,
        why: "El título habla de una sonrisa que nace dentro y calma el cuerpo: va de relajación, no de cortesía social.",
      },
      quiz: [
        { q: "Wo beginnt ein echtes Lächeln?", kind: "literal", options: ["Nicht im Gesicht, sondern tiefer", "An den Augenbrauen", "Im Kiefer"], answer: 0, why: "«beginnt nicht im Gesicht, sondern irgendwo tiefer» está literal al inicio." },
        { q: "Was kann mit den Schultern passieren, wenn die Mundwinkel minimal steigen?", kind: "inferencial", options: ["Manchmal sinken sie ein Stück", "Sie steigen höher", "Sie werden steif"], answer: 0, why: "«Manchmal sinken sie ein Stück»: el texto enlaza sonrisa mínima y hombros que bajan." },
        { q: "Für wen ist das Lächeln der Übung gedacht?", kind: "critica", options: ["Für dich selbst, nicht für andere", "Für das Publikum im Saal", "Für die Kamera"], answer: 0, why: "«nicht für andere, sondern für dich selbst»: la práctica es íntima, no escénica." },
      ],
      vf: [
        { text: "Ein Lächeln kann dem Körper signalisieren, dass keine Gefahr droht.", value: true, why: "«Ein sanftes, halbes Lächeln kann dem Körper signalisieren, dass keine Gefahr droht»." },
        { text: "Die Übung verlangt ein großes Lachen vor anderen.", value: false, why: "El texto pide «ein sanftes, halbes Lächeln» y «nicht für andere»: nada de grandes risas de cara al público." },
        { text: "Ein Lächeln von innen muss nirgendwo hingehen.", value: true, why: "«ein Lächeln, das von innen kommt, muss nirgendwo hingehen»." },
      ],
    },
    {
      id: "md-de-b2-06-2", theme: "spiritualità",
      title: "Freundlichkeit im Team", titleEs: "Amabilidad en el equipo",
      minutes: 2,
      paragraphs: [
        { it: "Freundlichkeit gilt in schnellen Arbeitswelten oft als Zusatz, das man sich leistet, wenn Zeit übrig bleibt. Die Erfahrung zeigt das Gegenteil: Freundlichkeit ist Grundausstattung, weil sie die Arbeit selbst leichter macht – für alle, die mitmachen.", es: "En mundos laborales veloces, la amabilidad suele considerarse un extra que uno se permite cuando sobra tiempo. La experiencia muestra lo contrario: la amabilidad es equipamiento de base, porque aligera el trabajo mismo, para todos los que participan." },
        { it: "Vielleicht ist das eine der ältesten geistigen Übungen überhaupt: dem anderen Menschen zu begegnen, als wäre er eine Aufgabe, die es sorgfältig zu lösen gilt – mit Geduld, mit Aufmerksamkeit, ohne Eile. Wer so arbeitet, verwandelt selbst die stressigste Woche in etwas, das man überstehen kann, ohne sich selbst zu verlieren.", es: "Quizá sea uno de los ejercicios espirituales más antiguos que existen: encontrar al otro como si fuera una tarea que merece resolverse con esmero, con paciencia, con atención, sin prisa. Quien así trabaja convierte hasta la semana más estresante en algo que se puede atravesar sin perderse a sí mismo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un catálogo de softwares de gestión", "La amabilidad como base del trabajo compartido", "Una crítica a los jefes"],
        answer: 1,
        why: "El título presenta la amabilidad como equipo base: el texto la describe como práctica espiritual cotidiana, no como herramienta productiva ni queja.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Freundlichkeit ist Grundausstattung, weil sie die Arbeit für alle leichter macht",
          "Freundlichkeit kostet zu viel Zeit in modernen Firmen",
          "Nur Chefs können Freundlichkeit zeigen",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Freundlichkeit gilt oft als Zusatz für übrig gebliebene Zeit",
          "Du begegnest dem Menschen mit Geduld, Aufmerksamkeit und ohne Eile",
          "So verwandelst du selbst die stressigste Woche",
        ],
        distractors: [
          "Das Team arbeitet in vier Städten",
          "Die Woche hat vierzig Meetings",
          "Geduld ist in diesem Büro verboten",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Freundlichkeit ist Grundausstattung, nicht Zusatz.",
          "Du begegnest Menschen mit Geduld und ohne Eile.",
          "Selbst die stressigste Woche wird tragbar.",
          "Freundlichkeit verwandelt Arbeit für alle.",
          "Der Kicker im Pausenraum ist seit Montag kaputt.",
        ],
        intruder: 4,
        why: "El futbolín averiado del salón es una incidencia de oficina ajena a la amabilidad como práctica: es el intruso.",
      },
    },
    {
      id: "md-de-b2-06-3", theme: "qui e ora",
      title: "Der Moment nach dem Wurf", titleEs: "El momento después del lanzamiento",
      minutes: 2,
      paragraphs: [
        { it: "Die Kugel ist geworfen, noch bevor sie fällt: In der Kegelbahn gibt es einen winzigen Moment, in dem nichts mehr zu entscheiden ist. Wer ihn kennt, steht still und wartet – nicht auf das Ergebnis, sondern einfach, weil Warten hier die ganze Sache ist.", es: "La bola está lanzada antes de caer: en la bolera existe un instante mínimo en que ya nada queda por decidir. Quien lo conoce se queda quieto y espera, no el resultado, sino simplemente porque esperar es aquí todo el asunto." },
        { it: "Dieser Moment taucht überall auf: nach der gesendeten Nachricht, nach der gestellten Frage, nach dem gelieferten Argument. Die meisten füllen ihn sofort mit Neuem. Wer ihn stattdessen aushält, spürt eine seltene Leichtigkeit: Es ist gerade nichts zu tun, und das ist nicht Mangel, sondern Pause. Die Kugel fällt, ganz ohne deine Hilfe.", es: "Ese instante aparece en todas partes: tras el mensaje enviado, tras la pregunta formulada, tras el argumento entregado. La mayoría lo rellena enseguida con algo nuevo. Quien lo aguanta, en cambio, siente una ligereza poco común: no hay nada que hacer ahora mismo, y eso no es carencia, sino pausa. La bola cae, sin la menor ayuda tuya." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un reglamento de bolos", "El instante en que ya nada se puede decidir", "Una historia del campeonato de Hamburgo"],
        answer: 1,
        why: "El título aísla el momento tras el lanzamiento: el texto reflexiona sobre la pausa, no sobre normas ni competición.",
      },
      sequence: {
        instr: "Ordena el transcurso:",
        events: [
          "Die Kugel ist geworfen",
          "Ein winziger Moment beginnt, in dem nichts mehr zu entscheiden ist",
          "Du stehst still und wartest",
          "Die Kugel fällt, ganz ohne deine Hilfe",
          "Du spürst die Leichtigkeit der Pause",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Du hast die Kugel losgelassen. Der Arm sinkt, die Schulter wird weich. Jetzt gibt es nichts mehr zu steuern: kein Nachhelfen, kein Fluchen. Stell dich einfach hin und schau zu, wie die Kugel ihre Bahn läuft. Was nach dem Wurf kommt, kommt – und du bist nur noch Zuschauer deiner eigenen Idee.",
        questions: [
          { q: "Was geschieht mit dem Arm nach dem Loslassen?", kind: "literal", options: ["Er sinkt, die Schulter wird weich", "Er bleibt oben", "Er zittert stark"], answer: 0, why: "«Der Arm sinkt, die Schulter wird weich» está literal al inicio." },
          { q: "Warum gibt es nichts mehr zu steuern?", kind: "inferencial", options: ["Weil die Kugel bereits ihre Bahn läuft", "Weil die Bahn zu kurz ist", "Weil jemand anders wirft"], answer: 0, why: "«schau zu, wie die Kugel ihre Bahn läuft»: la bola ya recorre su camino sola." },
          { q: "Was sollst du nicht tun?", kind: "literal", options: ["Nachhelfen und fluchen", "Zuschauen", "Atmen"], answer: 0, why: "«kein Nachhelfen, kein Fluchen» está literal en el audio." },
          { q: "Was bist du am Ende?", kind: "inferencial", options: ["Zuschauer deiner eigenen Idee", "Der Schiedsrichter des Abends", "Der Verlierer des Spiels"], answer: 0, why: "«du bist nur noch Zuschauer deiner eigenen Idee»: el audio lo cierra así." },
        ],
      },
    },
  ],

  "de-cu-b2-07": [
    {
      id: "md-de-b2-07-1", theme: "relax fisico",
      title: "Hände, Schultern, Bildschirm", titleEs: "Manos, hombros, pantalla",
      minutes: 2,
      paragraphs: [
        { it: "Am Schreibtisch einer Lektorin wiederholt sich ein stummer Dialog: Die Augen prüfen, die Hände schreiben, die Schultern vergessen, dass es sie gibt. Nach einer Stunde sind sie fast am Ohr. Wer korrigiert, korrigiert offenbar nicht nur Texte.", es: "En el escritorio de una editora se repite un diálogo mudo: los ojos revisan, las manos escriben, los hombros olvidan que existen. Al cabo de una hora están casi en la oreja. Quien corrige, corrige aparentemente no solo textos." },
        { it: "Lege für einen Moment die Hände auf die Oberschenkel, Handflächen nach unten, und spüre ihre Wärme. Lass die Schultern in einer Ausatmung sinken und rolle den Kopf ganz langsam zur Mitte. Diese dreißig Sekunden sind kein Zeitverlust: Ein gelöster Körper liest genauer, weil er nicht mehr um sein Überleben verhandelt.", es: "Apoya un momento las manos sobre los muslos, palmas hacia abajo, y siente su calor. Deja que los hombros bajen en una exhalación y lleva la cabeza muy despacio al centro. Estos treinta segundos no son una pérdida de tiempo: un cuerpo distendido lee con más precisión, porque ya no negocia su supervivencia." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía ergonómica de sillas", "Pequeños gestos para soltar el cuerpo mientras se corrige", "Una historia de editoriales"],
        answer: 1,
        why: "El título enlaza manos, hombros y pantalla: el texto da micro-ejercicios corporales de la corrección, no consejos de mobiliario.",
      },
      quiz: [
        { q: "Wohin legen sich die Hände in der Übung?", kind: "literal", options: ["Auf die Oberschenkel, Handflächen nach unten", "Auf den Bildschirm", "Hinter den Kopf"], answer: 0, why: "«Lege für einen Moment die Hände auf die Oberschenkel, Handflächen nach unten»." },
        { q: "Warum liest ein gelöster Körper genauer?", kind: "inferencial", options: ["Weil er nicht mehr um sein Überleben verhandelt", "Weil er schneller wird", "Weil er die Brille absetzt"], answer: 0, why: "«weil er nicht mehr um sein Überleben verhandelt»: sin alarma corporal, la lectura gana finura." },
        { q: "Wie bewertet der Text die dreißig Sekunden Pause?", kind: "critica", options: ["Als keinen Zeitverlust, sondern als Genauigkeit", "Als unnötige Unterbrechung", "Als Belohnung für den Feierabend"], answer: 0, why: "«Diese dreißig Sekunden sind kein Zeitverlust»: la pausa se presenta como fuente de precisión." },
      ],
      vf: [
        { text: "Nach einer Stunde sind die Schultern fast am Ohr.", value: true, why: "«Nach einer Stunde sind sie fast am Ohr»." },
        { text: "Die Übung verlangt, den Schreibtisch zu verlassen.", value: false, why: "Los ejercicios se hacen sentados: manos en los muslos, hombros que bajan, cabeza al centro." },
        { text: "Die Hände spüren ihre eigene Wärme.", value: true, why: "«und spüre ihre Wärme»." },
      ],
    },
    {
      id: "md-de-b2-07-2", theme: "relax mentale",
      title: "Ein Gedanke nach dem anderen", titleEs: "Un pensamiento cada vez",
      minutes: 2,
      paragraphs: [
        { it: "Präzision beginnt nicht im Text, sondern im Kopf: Wer drei Gedanken gleichzeitig denkt, denkt alle drei halb. Die Übung ist einfach zu beschreiben und schwer zu halten: Wähle einen Gedanken aus, lass die anderen warten, und bring den gewählten zu Ende – wie ein Satz, der seinen Punkt verdient.", es: "La precisión no empieza en el texto, sino en la cabeza: quien piensa tres pensamientos a la vez, piensa los tres a medias. El ejercicio es fácil de describir y difícil de sostener: elige un pensamiento, deja que los demás esperen y lleva el elegido hasta el final, como una frase que merece su punto." },
        { it: "Die wartenden Gedanken verschwinden übrigens selten: Sie stehen geduldig im Flur, bis du sie dran nimmst. Manche lösen sich auch von selbst auf, sobald sie nicht mehr drängeln dürfen. Was bleibt, ist ein Kopf, der eine Sache nach der anderen tut – und am Abend bemerkst du, dass weniger erschöpft macht als mehr gleichzeitig.", es: "Los pensamientos que esperan, por cierto, rara vez desaparecen: aguardan pacientes en el pasillo hasta que les llegue el turno. Algunos se disuelven solos en cuanto dejan de empujar. Lo que queda es una cabeza que hace una cosa tras otra, y por la noche descubres que pensar menos a la vez agota menos que pensar más." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de multitarea", "Pensar una sola cosa hasta el final para no pensar a medias", "Una crítica a las listas de tareas"],
        answer: 1,
        why: "El título lo dice: un pensamiento tras otro; el texto enseña foco mental, no multitarea ni organización.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Wer einen Gedanken zu Ende denkt, denkt ihn ganz statt halb",
          "Multitasking ist die beste Arbeitstechnik",
          "Gedanken darf man niemals aufschreiben",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Wer drei Gedanken gleichzeitig denkt, denkt alle drei halb",
          "Wartende Gedanken stehen geduldig im Flur",
          "Weniger gleichzeitig macht am Abend weniger erschöpft",
        ],
        distractors: [
          "Der Flur des Büros wurde neu gestrichen",
          "Gedanken verschwinden für immer, wenn man sie wegschickt",
          "Am Abend gehört der Kopf ausgeschaltet",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Wer drei Gedanken gleichzeitig denkt, denkt alle drei halb.",
          "Du wählst einen Gedanken aus und bringst ihn zu Ende.",
          "Die anderen warten geduldig im Flur.",
          "Manche Gedanken lösen sich auf, wenn sie nicht drängeln dürfen.",
          "Der Drucker im Flur verbraucht zu viel Tinte.",
        ],
        intruder: 4,
        why: "El consumo de tinta es una avería de oficina sin relación con el foco mental: es el intruso.",
      },
    },
    {
      id: "md-de-b2-07-3", theme: "meditazione",
      title: "Der Punkt am Satzende", titleEs: "El punto al final de la frase",
      minutes: 2,
      paragraphs: [
        { it: "Jeder Satz endet mit einem Punkt, und doch überspringen wir ihn ständig: Der Blick eilt zum nächsten Wort, der Atem eilt mit, und am Absatzende sind wir erschöpfter als am Anfang. Der Punkt ist eine Einladung, die wir nie annehmen.", es: "Cada frase termina con un punto y, aun así, lo saltamos sin parar: la mirada corre hacia la palabra siguiente, el aliento corre con ella, y al final del párrafo estamos más agotados que al principio. El punto es una invitación que nunca aceptamos." },
        { it: "Nimm sie heute dreimal an: Lies einen Satz, erreiche den Punkt – und verweile dort einen Atemzug lang. Nichts muss in diesem Atemzug verstanden oder erreicht werden; er ist einfach die Grenze zwischen dem, was war, und dem, was kommt. So gelesen, wird ein Text zum Weg mit Rastplätzen, und die Stille am Satzende gehört mit zum Satz.", es: "Acéptala hoy tres veces: lee una frase, alcanza el punto y demórate allí lo que dura una respiración. Nada tiene que entenderse ni lograrse en esa respiración: es simplemente la frontera entre lo que fue y lo que viene. Leído así, un texto se convierte en un camino con áreas de descanso, y el silencio del final de la frase forma parte de la frase." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de puntuación", "El punto final como pequeño lugar de descanso al leer", "Una historia de la tipografía"],
        answer: 1,
        why: "El título convierte el punto en pausa: el texto enseña a descansar en él, no reglas ortográficas ni historia de la imprenta.",
      },
      sequence: {
        instr: "Ordena el ejercicio de lectura:",
        events: [
          "Du liest einen Satz",
          "Du erreichst den Punkt",
          "Du verweilst einen Atemzug lang dort",
          "Nichts muss verstanden oder erreicht werden",
          "Der Text wird zum Weg mit Rastplätzen",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Lies langsam und lass den Punkt arbeiten. Wenn ein Satz endet, kommt ein kleiner Raum, so groß wie ein Atemzug. Bleib darin, ohne zu eilen. Der nächste Satz wartet bereits – aber er weiß, dass du kommst. So liest sich ein ganzer Absatz wie ein Spaziergang mit Bänken.",
        questions: [
          { q: "Wie groß ist der Raum am Satzende?", kind: "literal", options: ["So groß wie ein Atemzug", "So groß wie eine Seite", "So groß wie ein Wort"], answer: 0, why: "«so groß wie ein Atemzug» está literal en el audio." },
          { q: "Warum wartet der nächste Satz geduldig?", kind: "inferencial", options: ["Weil er weiß, dass du kommst", "Weil er müde ist", "Weil er ungern gelesen wird"], answer: 0, why: "«er weiß, dass du kommst»: la espera es serena, no un reproche." },
          { q: "Womit wird der Absatz verglichen?", kind: "literal", options: ["Mit einem Spaziergang mit Bänken", "Mit einem Rennen", "Mit einer Treppe"], answer: 0, why: "«wie ein Spaziergang mit Bänken» cierra el audio." },
          { q: "Was bedeutet «den Punkt arbeiten lassen»?", kind: "inferencial", options: ["Die Pause am Satzende bewusst zulassen", "Schneller tippen lernen", "Fehler im Text suchen"], answer: 0, why: "El audio invita a quedarse en el espacio del punto: la pausa consciente." },
        ],
      },
    },
  ],

  "de-cu-b2-08": [
    {
      id: "md-de-b2-08-1", theme: "spiritualità",
      title: "Was übrig bleibt", titleEs: "Lo que queda",
      minutes: 2,
      paragraphs: [
        { it: "Nach einer Woche voller Schlagzeilen fragt sich mancher Abend leise: Was bleibt eigentlich hängen? Nicht der Lärm, meistens, sondern kleine Dinge: ein Satz, der stimmte, ein Blick, der hörte, eine Hilfe, die niemand fordern musste.", es: "Tras una semana llena de titulares, alguna tarde se pregunta en voz baja: ¿qué se queda de verdad? No el ruido, casi nunca, sino cosas pequeñas: una frase que acertó, una mirada que escuchó, una ayuda que nadie tuvo que exigir." },
        { it: "Vielleicht ist das eine gute geistige Übung vor dem Schlafen: die Schlagzeilen des Tages Revue passieren lassen und fragen, was davon tragfähig ist. Das meiste verblasst über Nacht – und das ist kein Verlust, sondern eine Auswahl. Was übrig bleibt, sagt dir, was dir wirklich wichtig ist; man muss nur hinhören, wenn der Tag leise wird.", es: "Quizá sea un buen ejercicio espiritual antes de dormir: repasar los titulares del día y preguntarse qué de ello aguanta el peso. La mayoría se desvanece durante la noche, y eso no es una pérdida, sino una selección. Lo que queda te dice qué te importa de verdad: solo hay que escuchar cuando el día se vuelve silencioso." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un resumen de noticias de la semana", "Quedarse con lo que de verdad importa del día", "Una crítica al ruido de los medios"],
        answer: 1,
        why: "El título pregunta qué queda: el texto propone un repaso sereno antes de dormir, no informativo ni polémico.",
      },
      quiz: [
        { q: "Was bleibt meistens hängen?", kind: "literal", options: ["Kleine Dinge: ein Satz, ein Blick, eine Hilfe", "Alle Schlagzeilen im Wortlaut", "Der Lärm des Tages"], answer: 0, why: "«Nicht der Lärm, meistens», sondern las cosas pequeñas: está literal en el primer párrafo." },
        { q: "Warum ist das Verblasen über Nacht kein Verlust?", kind: "inferencial", options: ["Weil es eine Auswahl ist, die zeigt, was wichtig ist", "Weil man ohnehin alles vergisst", "Weil die Nacht alles repariert"], answer: 0, why: "«das ist kein Verlust, sondern eine Auswahl»: lo que se desvanece filtraba lo esencial." },
        { q: "Was sagt dir, was dir wirklich wichtig ist?", kind: "critica", options: ["Was übrig bleibt, wenn der Tag leise wird", "Was am lautesten berichtet wurde", "Was andere am häufigsten teilen"], answer: 0, why: "El texto invita a escuchar lo que permanece cuando baja el ruido, no lo más compartido." },
      ],
      vf: [
        { text: "Der Lärm bleibt meistens hängen.", value: false, why: "El texto dice «Nicht der Lärm, meistens», sino las cosas pequeñas." },
        { text: "Die Übung findet vor dem Schlafen statt.", value: true, why: "«eine gute geistige Übung vor dem Schlafen»." },
        { text: "Das meiste verblasst über Nacht.", value: true, why: "«Das meiste verblasst über Nacht – und das ist kein Verlust»." },
      ],
    },
    {
      id: "md-de-b2-08-2", theme: "qui e ora",
      title: "Der Morgen in der Redaktion", titleEs: "La mañana en la redacción",
      minutes: 2,
      paragraphs: [
        { it: "Um acht Uhr ist die Redaktion noch still: Kaffee duftet, Bildschirme schlafen, auf den Tischen liegen die Zeitungen von gestern. Wer früh kommt, bekommt eine halbe Stunde Stadt ohne Dringlichkeit – der Tag hat noch keine Schlagzeile geschrieben.", es: "A las ocho la redacción sigue en silencio: huele a café, las pantallas duermen, sobre las mesas quedan los periódicos de ayer. Quien llega pronto recibe media hora de ciudad sin urgencias: el día todavía no ha escrito ningún titular." },
        { it: "Diese halbe Stunde ist wertvoller, als sie klingt: Sie ist der einzige Moment, in dem der Arbeitstag noch Form annehmen kann, bevor er Form annimmt. Trink deinen Kaffee langsam, blättere in der Zeitung, ohne ein Ziel zu haben, und schau einmal zum Fenster hinaus. Alles Dringende wird ohnehin dringend genug sein – die Stille von acht Uhr kommt nicht wieder.", es: "Esa media hora vale más de lo que suena: es el único momento en que la jornada puede todavía tomar forma antes de tomarla. Bebe tu café despacio, hojea el periódico sin ningún objetivo y asómate una vez a la ventana. Lo urgente será urgente de sobra de todos modos: el silencio de las ocho no vuelve." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un horario de una empresa", "La media hora tranquila antes de que empiece todo", "Un artículo sobre producción de café"],
        answer: 1,
        why: "El título sitúa la escena en la mañana de la redacción: el texto valora la calma previa, no la organización ni el café.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Die stille halbe Stunde am Morgen formt den Tag, bevor er sich selbst formt",
          "Wer früh kommt, soll sofort alle Mails beantworten",
          "Stille am Morgen ist verschwendete Arbeitszeit",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Um acht Uhr schlafen die Bildschirme noch",
          "Du blätterst in der Zeitung, ohne ein Ziel zu haben",
          "Die Stille von acht Uhr kommt nicht wieder",
        ],
        distractors: [
          "Der Kaffee stammt aus einer Rösterei in Bonn",
          "Die Redaktion hat vierzig Mitarbeiter",
          "Die Zeitung erscheint nur sonntags",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Um acht Uhr ist die Redaktion noch still.",
          "Du trinkst deinen Kaffee langsam.",
          "Du blätterst ohne Ziel in der Zeitung.",
          "Alles Dringende wird ohnehin dringend genug sein.",
          "Die Frühstückspause endet um 8.30 Uhr.",
        ],
        intruder: 4,
        why: "El horario del desayuno es un dato administrativo que no aparece en el texto: es el intruso.",
      },
    },
    {
      id: "md-de-b2-08-3", theme: "relax fisico",
      title: "Leichte Schultern, leichte Wörter", titleEs: "Hombros ligeros, palabras ligeras",
      minutes: 2,
      paragraphs: [
        { it: "Schwere Wörter haben oft schwere Schultern als Nachbarn: Wer den ganzen Tag formuliert und korrigiert, trägt die Anstrengung buchstäblich hoch oben mit sich herum. Der Körper eines Redakteurs erzählt am Feierabend die Geschichte seiner Sätze.", es: "Las palabras pesadas tienen a menudo hombros pesados por vecinos: quien formula y corrige todo el día carga literalmente arriba el esfuerzo. El cuerpo de un redactor cuenta al final de la jornada la historia de sus frases." },
        { it: "Die Gegenübung dauert zwei Minuten: Stelle dich hin, hebe beide Schultern beim Einatmen bis zu den Ohren, halte kurz – und lass sie beim Ausatmen fallen, so weit sie wollen. Dreimal wiederholen. Danach schüttelst du die Hände aus wie nasses Wasser. Die Wörter von morgen dürfen leichter sein, weil die Schultern von heute es gelernt haben.", es: "El contrapunto dura dos minutos: ponte de pie, sube ambos hombros al inhalar hasta las orejas, aguanta un momento y déjalos caer al exhalar, hasta donde quieran. Repite tres veces. Después sacude las manos como si estuvieran mojadas. Las palabras de mañana pueden ser más ligeras porque los hombros de hoy lo han aprendido." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un entrenamiento de gimnasio", "Bajar hombros cargados tras un día de palabras", "Un texto sobre ergonomía del teclado"],
        answer: 1,
        why: "El título empareja hombros y palabras: la sesión libera la tensión del trabajo intelectual, no entrena fuerza.",
      },
      sequence: {
        instr: "Ordena el ejercicio:",
        events: [
          "Du stellst dich hin",
          "Du hebst beide Schultern beim Einatmen bis zu den Ohren",
          "Du hältst kurz",
          "Du lässt die Schultern beim Ausatmen fallen",
          "Du schüttelst die Hände aus wie nasses Wasser",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Feierabend für die Schultern: Hebe sie beim Einatmen ganz langsam nach oben, bis zu den Ohren. Halte den Atem einen Moment. Und beim Ausatmen lass einfach los – die Schultern dürfen fallen, wohin sie wollen. Noch zweimal. Zum Schluss schüttle die Hände aus, als wären sie nass. So sieht der Feierabend aus, wenn er dem Körper gehört.",
        questions: [
          { q: "Wohin steigen die Schultern beim Einatmen?", kind: "literal", options: ["Bis zu den Ohren", "Bis zur Decke", "Gar nicht"], answer: 0, why: "«bis zu den Ohren» está literal en el audio." },
          { q: "Was passiert beim Ausatmen?", kind: "inferencial", options: ["Die Schultern dürfen fallen, wohin sie wollen", "Die Schultern bleiben oben", "Die Hände werden geballt"], answer: 0, why: "«lass einfach los – die Schultern dürfen fallen»: soltar es la clave de la exhalación." },
          { q: "Wie oft wiederholst du die Übung insgesamt?", kind: "literal", options: ["Dreimal", "Zehnmal", "Einmal"], answer: 0, why: "«Noch zweimal» tras la primera vez: tres en total." },
          { q: "Wem gehört der Feierabend am Schluss?", kind: "inferencial", options: ["Dem Körper", "Dem Chef", "Dem Kalender"], answer: 0, why: "«wenn er dem Körper gehört»: el cierre del audio lo dice." },
        ],
      },
    },
  ],

  "de-cu-b2-09": [
    {
      id: "md-de-b2-09-1", theme: "relax mentale",
      title: "Der Ärger darf warten", titleEs: "El enfado puede esperar",
      minutes: 2,
      paragraphs: [
        { it: "Der defekte Herd, die unverständliche Rechnung, die endlose Warteschleife: Ärger sammelt sich schnell und will sofort raus. Doch die ersten Sätze einer Beschwerde sollten Fakten tragen, nicht Gefühle – nicht, weil Gefühle falsch wären, sondern weil sie dort nicht wirken.", es: "La placa rota, la factura incomprensible, la cola de espera infinita: el enfado se acumula rápido y quiere salir de inmediato. Pero las primeras frases de una reclamación deben llevar hechos, no sentimientos; no porque los sentimientos sean equivocados, sino porque allí no funcionan." },
        { it: "Gib dem Ärger stattdessen seinen eigenen Ort: ein Blatt Papier, das niemand sieht, eine Runde um den Block, drei bewusste Atemzüge. Danach schreibst du die eigentliche Nachricht – freundlich, aber bestimmt. Der Ärger wartet dann nicht mehr ungeduldig neben dir, sondern wurde gehört und darf ruhen.", es: "Dale al enfado su propio lugar: una hoja de papel que nadie ve, una vuelta a la manzana, tres respiraciones conscientes. Después escribes el mensaje de verdad, amable pero firme. El enfado ya no espera impaciente a tu lado: ha sido escuchado y puede descansar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de consumo", "Calmar el enfado antes de escribir la queja", "Una crítica al servicio posventa"],
        answer: 1,
        why: "El título deja esperar al enfado: el texto enseña a darle su lugar antes de redactar, no a reclamar mejor ni a criticar.",
      },
      quiz: [
        { q: "Was sollen die ersten Sätze einer Beschwerde tragen?", kind: "literal", options: ["Fakten, nicht Gefühle", "So viele Ausrufezeichen wie möglich", "Eine lange Vorgeschichte"], answer: 0, why: "«sollten Fakten tragen, nicht Gefühle» está literal en el texto." },
        { q: "Warum bekommt der Ärger ein eigenes Blatt Papier?", kind: "inferencial", options: ["Damit er gehört wird und danach ruhen darf", "Damit man ihn der Firma schicken kann", "Damit man ihn für immer vergisst"], answer: 0, why: "«sondern wurde gehört und darf ruhen»: darle lugar lo apacigua, no lo envía ni lo borra." },
        { q: "Wie klingt die eigentliche Nachricht am Ende?", kind: "critica", options: ["Freundlich, aber bestimmt", "Kalt und distanziert", "Laut und vorwurfsvoll"], answer: 0, why: "El tono recomendado es amable pero firme: ni frialdad ni reproches." },
      ],
      vf: [
        { text: "Gefühle sind falsch und dürfen nie vorkommen.", value: false, why: "«nicht, weil Gefühle falsch wären, sondern weil sie dort nicht wirken»: no son falsos, solo no funcionan ahí." },
        { text: "Eine Runde um den Block ist ein möglicher Ort für den Ärger.", value: true, why: "«ein Blatt Papier, das niemand sieht, eine Runde um den Block, drei bewusste Atemzüge»." },
        { text: "Der Ärger wurde gehört und darf danach ruhen.", value: true, why: "«sondern wurde gehört und darf ruhen»." },
      ],
    },
    {
      id: "md-de-b2-09-2", theme: "meditazione",
      title: "Langsam schreiben", titleEs: "Escribir despacio",
      minutes: 2,
      paragraphs: [
        { it: "Handschrift ist langsamer als jeder Gedanke – und genau deshalb ist sie ein guter Ort für ihn. Wer mit der Hand schreibt, muss wählen, welches Wort den Stift als erstes erreicht; die anderen bilden eine geduldige Schlange.", es: "La escritura a mano es más lenta que cualquier pensamiento, y precisamente por eso es un buen lugar para él. Quien escribe a mano tiene que elegir qué palabra alcanza primero el bolígrafo; las demás forman una cola paciente." },
        { it: "Das ist Schreiben als Meditation: kein Löschen, kein Zurückspringen, nur der nächste Buchstabe, einer nach dem anderen. Am Ende liest du nicht nur, was du denkst, sondern auch, wie du denkst: Die Handschrift zeigt Zögern und Sicherheit, Eile und Ruhe. Ein paar Zeilen am Tag genügen, um wieder zu spüren, dass Denken einen Körper hat.", es: "Eso es escribir como meditación: sin borrar, sin saltar atrás, solo la siguiente letra, una tras otra. Al final lees no solo lo que piensas, sino cómo piensas: la letra muestra duda y seguridad, prisa y calma. Bastan unas líneas al día para volver a sentir que pensar tiene cuerpo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un análisis de la letra manuscrita", "Escribir a mano como forma de meditar", "Una comparación de bolígrafos"],
        answer: 1,
        why: "El título subraya la lentitud: escribir a mano se convierte en meditación, no en grafología ni en papelería.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Handschrift zwingt zum Wählen und wird so zur Meditation des Denkens",
          "Handschrift ist nur noch für Unterschriften gut",
          "Wer langsam schreibt, denkt automatisch schlechter",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Wer mit der Hand schreibt, muss wählen, welches Wort den Stift erreicht",
          "Kein Löschen, kein Zurückspringen, nur ein Buchstabe nach dem anderen",
          "Die Handschrift zeigt Zögern und Sicherheit",
        ],
        distractors: [
          "Der Stift gehört zu einer deutschen Traditionsmarke",
          "Am Computer schreibt es sich dreimal schneller",
          "Zögern ist ein Zeichen von Schwäche",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Handschrift ist langsamer als jeder Gedanke.",
          "Du musst wählen, welches Wort den Stift zuerst erreicht.",
          "Ein Buchstabe nach dem anderen, ohne Löschen.",
          "Die Handschrift zeigt Zögern und Sicherheit.",
          "Das Notizbuch kostet neun Euro fünfzig.",
        ],
        intruder: 4,
        why: "El precio del cuaderno es información de compra ajena a la escritura como meditación: es el intruso.",
      },
    },
    {
      id: "md-de-b2-09-3", theme: "spiritualità",
      title: "Geduld mit dem Prozess", titleEs: "Paciencia con el proceso",
      minutes: 3,
      paragraphs: [
        { it: "Manche Dinge brauchen ihre Zeit, ob man es versteht oder nicht: Ein Baum wächst nicht schneller, weil man an ihm zieht, und eine behördliche Antwort kommt nicht früher, weil man täglich nachfragt. Geduld ist keine Passivität – sie ist das Vertrauen, dass der Prozess läuft.", es: "Algunas cosas necesitan su tiempo, lo entiendas o no: un árbol no crece más rápido porque tiren de él, y una respuesta administrativa no llega antes porque preguntes a diario. La paciencia no es pasividad: es la confianza de que el proceso avanza." },
        { it: "Geduldig zu sein heißt nicht, nichts zu tun: Du tust, was deine Aufgabe ist, und lässt die Prozesse ihre Aufgabe tun. Wer beides verwechselt, wird hektisch; wer beides unterscheidet, wird ruhig. Manche Traditionen nennen diese Ruhe einen geistigen Reifeprozess – am Ende wartet man nicht mehr auf das Ergebnis, man arbeitet mit der Zeit zusammen.", es: "Ser paciente no significa no hacer nada: haces lo que es tarea tuya y dejas que los procesos cumplan la suya. Quien confunde ambas cosas se vuelve frenético; quien las distingue, sereno. Algunas tradiciones llaman a esta calma un proceso de maduración espiritual: al final ya no esperas el resultado, colaboras con el tiempo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de trámites públicos", "La paciencia como colaboración con el tiempo", "Un ensayo sobre jardinería"],
        answer: 1,
        why: "El título apunta a la paciencia con los procesos: el texto la define como confianza activa, no como burocracia ni horticultura.",
      },
      sequence: {
        instr: "Ordena el camino de la paciencia:",
        events: [
          "Du verstehst, dass manche Dinge ihre Zeit brauchen",
          "Du tust, was deine Aufgabe ist",
          "Du lässt die Prozesse ihre Aufgabe tun",
          "Du unterscheidest beides, statt es zu verwechseln",
          "Du arbeitest mit der Zeit zusammen",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Stell dir einen Prozess vor, der gerade läuft: ein Antrag, ein Wachstum, ein Gespräch. Atme einmal tief ein und denk: Meine Aufgabe ist getan, soweit ich sie kenne. Der Rest gehört der Zeit. Das ist keine Kapitulation, sondern Zusammenarbeit. Wer mit der Zeit arbeitet, wird nicht unruhig, wenn sie langsam ist.",
        questions: [
          { q: "Wem gehört der Rest, sagt das Audio?", kind: "literal", options: ["Der Zeit", "Der Firma", "Dem Zufall"], answer: 0, why: "«Der Rest gehört der Zeit» está literal en el audio." },
          { q: "Warum ist die Haltung keine Kapitulation?", kind: "inferencial", options: ["Weil es Zusammenarbeit mit der Zeit ist", "Weil man den Antrag storniert", "Weil man schneller arbeitet"], answer: 0, why: "«Das ist keine Kapitulation, sondern Zusammenarbeit»." },
          { q: "Wann wirst du nicht unruhig?", kind: "literal", options: ["Wenn du mit der Zeit arbeitest und sie langsam ist", "Wenn alles sofort klappt", "Wenn jemand nachfragt"], answer: 0, why: "«Wer mit der Zeit arbeitet, wird nicht unruhig, wenn sie langsam ist»." },
          { q: "Wie weit kennst du deine Aufgabe?", kind: "inferencial", options: ["Soweit du sie kennst: getan, was möglich war", "Gar nicht", "Nur mit Hilfe anderer"], answer: 0, why: "«Meine Aufgabe ist getan, soweit ich sie kenne»: la parte conocida está hecha." },
        ],
      },
    },
  ],

  "de-cu-b2-10": [
    {
      id: "md-de-b2-10-1", theme: "qui e ora",
      title: "Die Pause zwischen den Worten", titleEs: "La pausa entre las palabras",
      minutes: 2,
      paragraphs: [
        { it: "In einer guten Debatte gibt es Pausen, die niemand füllen muss: der Atemzug zwischen Frage und Antwort, das kurze Schweigen, in dem ein Gedanke reift. Wer diese Pausen aushält, wirkt nicht unsicher, sondern souverän – er vertraut dem Gespräch.", es: "En un buen debate hay pausas que nadie necesita rellenar: la respiración entre pregunta y respuesta, el silencio breve en el que madura una idea. Quien aguanta esas pausas no parece inseguro, sino seguro de sí: confía en la conversación." },
        { it: "Übe sie im kleinen Format: Wenn dich heute jemand fragt, warte einen Atemzug, bevor du antwortest. In diesem Atemzug entscheidet sich oft, ob du reagierst oder antwortest. Reagieren ist schnell und alt; antworten braucht die Pause – und die Gegenwart, die in ihr wohnt.", es: "Practícalas en formato pequeño: si hoy alguien te pregunta, espera una respiración antes de contestar. En esa respiración se decide a menudo si reaccionas o respondes. Reaccionar es rápido y viejo; responder necesita la pausa y la presencia que vive en ella." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de oratoria política", "La pausa antes de responder en una conversación", "Un estudio sobre el silencio incómodo"],
        answer: 1,
        why: "El título sitúa la pausa entre las palabras: el texto la entrena en el día a día, no en discursos ni laboratorios.",
      },
      quiz: [
        { q: "Was gibt es in einer guten Debatte, das niemand füllen muss?", kind: "literal", options: ["Pausen", "Zahlen", "Zitate"], answer: 0, why: "«gibt es Pausen, die niemand füllen muss» está literal al inicio." },
        { q: "Warum wirkt souverän, wer Pausen aushält?", kind: "inferencial", options: ["Weil er dem Gespräch vertraut", "Weil er lauter spricht", "Weil er schneller antwortet"], answer: 0, why: "«er vertraut dem Gespräch»: la pausa serena comunica dominio, no duda." },
        { q: "Was entscheidet sich im Atemzug vor der Antwort?", kind: "critica", options: ["Ob ich reagiere oder antworte", "Ob ich die Frage verstanden habe", "Ob ich gewinne oder verliere"], answer: 0, why: "El texto opone reaccionar (rápido y viejo) a responder (con pausa y presencia)." },
      ],
      vf: [
        { text: "Wer Pausen aushält, wirkt unsicher.", value: false, why: "El texto dice lo contrario: «wirkt nicht unsicher, sondern souverän»." },
        { text: "Du wartest heute einen Atemzug, bevor du antwortest.", value: true, why: "«warte einen Atemzug, bevor du antwortest»." },
        { text: "Reagieren ist schnell und alt, antworten braucht die Pause.", value: true, why: "«Reagieren ist schnell und alt; antworten braucht die Pause»." },
      ],
    },
    {
      id: "md-de-b2-10-2", theme: "relax fisico",
      title: "Feste Füße am runden Tisch", titleEs: "Pies firmes en la mesa redonda",
      minutes: 2,
      paragraphs: [
        { it: "Am runden Tisch entscheidet nicht nur, wer recht hat, sondern auch, wer ruhig sitzt: Wer mit beiden Füßen im Boden steht, während die Meinungen aufeinanderprallen, verliert seltener den Faden. Der Stand ist die leiseste Form der Stärke.", es: "En la mesa redonda no decide solo quién tiene razón, sino también quién está sentado con calma: quien mantiene ambos pies en el suelo mientras las opiniones chocan pierde más raramente el hilo. El aplomo es la forma más silenciosa de la fuerza." },
        { it: "Der Trick ist kleiner, als er klingt: Spüre vor jedem Redebeitrag die Sohlen, den Kontakt zum Boden, das Gewicht, das sie tragen. Vielleicht trittst du sogar leicht mit den Zehen auf, wie ein Baum, der seine Wurzeln prüft. Der Körper, der Halt hat, schenkt der Stimme Halt – und die Runde hört es, ohne es benennen zu können.", es: "El truco es más pequeño de lo que suena: antes de cada intervención siente las plantas, el contacto con el suelo, el peso que sostienen. Quizá aprietes incluso levemente las puntas de los pies, como un árbol que comprueba sus raíces. El cuerpo con apoyo le regala apoyo a la voz, y la mesa lo oye sin saber nombrarlo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de mobiliario de oficina", "Afirmarse en los pies antes de hablar en una reunión", "Un artículo sobre árbitros deportivos"],
        answer: 1,
        why: "El título une pies firmes y mesa redonda: el texto ancla el cuerpo para hablar, no el mobiliario ni el arbitraje.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Wer im Körper Halt hat, gibt der Stimme Halt – Stand als leiseste Stärke",
          "Am runden Tisch zählt nur die Lautstärke",
          "Füße sind während Debatten völlig egal",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Wer ruhig sitzt, verliert seltener den Faden",
          "Du spürst vor jedem Redebeitrag die Sohlen",
          "Vielleicht trittst du leicht mit den Zehen auf",
        ],
        distractors: [
          "Der Tisch hat zwölf Plätze",
          "Die Runde dauert genau neunzig Minuten",
          "Die Stimme wird mit einem Mikrofon verstärkt",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Wer ruhig sitzt, verliert seltener den Faden.",
          "Du spürst die Sohlen und das Gewicht, das sie tragen.",
          "Du trittst leicht mit den Zehen auf, wie ein Baum mit Wurzeln.",
          "Der Körper schenkt der Stimme Halt.",
          "Die Getränke werden vor der Pause serviert.",
        ],
        intruder: 4,
        why: "El servicio de bebidas es logística de la reunión, ajeno al anclaje corporal del texto: es el intruso.",
      },
    },
    {
      id: "md-de-b2-10-3", theme: "relax mentale",
      title: "Zwei Wahrheiten aushalten", titleEs: "Sostener dos verdades",
      minutes: 2,
      paragraphs: [
        { it: "Reife beginnt oft dort, wo zwei wahre Sätze sich widersprechen: Die Maßnahme hilft der Stadt, und sie belastet den Einzelhändler. Der Kopf möchte aufräumen und eine Seite behalten; das Denken beginnt jedoch erst im Aushalten beider Sätze.", es: "La madurez empieza a menudo donde dos frases verdaderas se contradicen: la medida ayuda a la ciudad y perjudica al comerciante. La cabeza quiere ordenar y quedarse con un bando; el pensamiento, sin embargo, empieza solo al sostener ambas frases." },
        { it: "Das ist anstrengender als eine Meinung und befreiender als alle Hektik: Du stellst die beiden Wahrheiten nebeneinander, atmest und entscheidest, wenn es Zeit ist – nicht, damit der Druck nachlässt, sondern weil es weitergeht. Wer beides aushält, wird langsamer, aber glaubwürdiger – und der eigene Kopf hört auf, wie ein überhitzter Streit zu klingen.", es: "Es más cansado que una opinión y más liberador que cualquier frenesí: pones las dos verdades una al lado de la otra, respiras y decides cuando llega el momento, no para que baje la presión, sino porque hay que seguir. Quien sostiene ambas se vuelve más lento, pero más creíble, y la propia cabeza deja de sonar como una disputa recalentada." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ensayo de lógica formal", "Sostener dos verdades contrarias sin decidir de inmediato", "Un manual de negociación comercial"],
        answer: 1,
        why: "El título habla de aguantar dos verdades: el texto entrena la tolerancia mental al contraste, no la lógica ni la venta.",
      },
      sequence: {
        instr: "Ordena el proceso:",
        events: [
          "Zwei wahre Sätze widersprechen sich",
          "Der Kopf möchte aufräumen und eine Seite behalten",
          "Du stellst beide Wahrheiten nebeneinander",
          "Du atmest und wartest, bis es Zeit ist",
          "Du entscheidest, weil es weitergeht",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Heute hältst du zwei Sätze aus, die sich widersprechen. Der eine sagt: Es hilft. Der andere sagt: Es belastet. Du musst nicht sofort wählen. Atme einmal aus und lass beide Sätze stehen, wie zwei Gäste am Tisch. Erst wenn die Zeit reif ist, triffst du eine Entscheidung – ruhig und ohne den Druck der Eile.",
        questions: [
          { q: "Wie werden die zwei Sätze verglichen?", kind: "literal", options: ["Wie zwei Gäste am Tisch", "Wie zwei Fahrzeuge", "Wie zwei Bücher"], answer: 0, why: "«wie zwei Gäste am Tisch» está literal en el audio." },
          { q: "Wann triffst du die Entscheidung?", kind: "inferencial", options: ["Erst wenn die Zeit reif ist", "Sofort beim ersten Satz", "Niemals"], answer: 0, why: "«Erst wenn die Zeit reif ist»: la decisión espera su momento." },
          { q: "Was tust du, statt sofort zu wählen?", kind: "literal", options: ["Ich atme einmal aus", "Ich verlasse den Tisch", "Ich lasse einen Gast gehen"], answer: 0, why: "«Atme einmal aus»." },
          { q: "Wovon ist die Entscheidung frei?", kind: "inferencial", options: ["Vom Druck der Eile", "Von jeder Verantwortung", "Von den Meinungen anderer"], answer: 0, why: "«ohne den Druck der Eile»: el audio lo dice al cierre." },
        ],
      },
    },
  ],

  "de-cu-b2-11": [
    {
      id: "md-de-b2-11-1", theme: "meditazione",
      title: "Das Daily als Ritual", titleEs: "El Daily como ritual",
      minutes: 2,
      paragraphs: [
        { it: "Jeden Morgen, gleiche Uhr, gleiche Frage: Was gestern, was heute, was blockiert? Was wie Routine aussieht, kann ein Ritual werden – der Unterschied liegt allein in der Aufmerksamkeit, mit der du dabei stehst.", es: "Cada mañana, la misma hora, la misma pregunta: ¿qué ayer, qué hoy, qué bloquea? Lo que parece rutina puede convertirse en ritual: la diferencia está solo en la atención con la que estás allí." },
        { it: "Rituale geben dem Tag ein Gerüst, bevor der Tag selbst es übernimmt: Sie sagen dem Nervensystem, jetzt beginnt Arbeit, und später, jetzt beginnt Feierabend. Wer sein Daily bewusst betritt – zwei Atemzüge, dann das erste Wort –, der startet nicht in die Aufgaben, sondern in einen Rhythmus. Das ist der ganze Unterschied zwischen Getriebenwerden und Arbeiten.", es: "Los rituales le dan al día una armadura antes de que el día la tome él mismo: le dicen al sistema nervioso, ahora empieza el trabajo, y más tarde, ahora empieza el descanso. Quien entra en su Daily con consciencia, dos respiraciones y luego la primera palabra, no arranca hacia las tareas, sino hacia un ritmo. Esa es toda la diferencia entre ser arrastrado y trabajar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de gestión de proyectos", "Convertir la reunión diaria en un ritual consciente", "Una crítica a las reuniones de trabajo"],
        answer: 1,
        why: "El título convierte el Daily en ritual: el texto añade consciencia a la rutina, no productividad ni queja.",
      },
      quiz: [
        { q: "Wie lautet die dritte Frage des Daily?", kind: "literal", options: ["Was blockiert?", "Was kostet es?", "Wer gewinnt?"], answer: 0, why: "«Was gestern, was heute, was blockiert?» está literal al inicio." },
        { q: "Was sagen Rituale dem Nervensystem?", kind: "inferencial", options: ["Jetzt beginnt Arbeit, jetzt beginnt Feierabend", "Alles ist gefährlich", "Nichts ist wichtig"], answer: 0, why: "«Sie sagen dem Nervensystem, jetzt beginnt Arbeit, und später, jetzt beginnt Feierabend»: ordenan la jornada." },
        { q: "Was unterscheidet Getriebenwerden von Arbeiten?", kind: "critica", options: ["Der bewusste Einstieg in einen Rhythmus", "Die Anzahl der Aufgaben", "Die Länge des Tages"], answer: 0, why: "El texto opone arrancar hacia las tareas a arrancar hacia un ritmo: la consciencia marca la diferencia." },
      ],
      vf: [
        { text: "Der Unterschied zwischen Routine und Ritual liegt in der Aufmerksamkeit.", value: true, why: "«der Unterschied liegt allein in der Aufmerksamkeit»." },
        { text: "Rituale übernehmen den Tag vollständig.", value: false, why: "Los rituales dan armadura «bevor der Tag selbst es übernimmt»: lo preparan, no lo sustituyen." },
        { text: "Zwei Atemzüge vor dem ersten Wort gehören zum bewussten Daily.", value: true, why: "«zwei Atemzüge, dann das erste Wort»." },
      ],
    },
    {
      id: "md-de-b2-11-2", theme: "spiritualità",
      title: "Sinn in der Arbeit", titleEs: "Sentido en el trabajo",
      minutes: 2,
      paragraphs: [
        { it: "Arbeit füllt den Tag; Sinn füllt die Arbeit. Nicht jede Aufgabe trägt ihren Sinn an der Oberfläche: Manche muss man erst fragen, wem sie dient, und die Antwort verändert, wie man sie ausführt.", es: "El trabajo llena el día; el sentido llena el trabajo. No toda tarea lleva su sentido a la vista: a algunas hay que preguntarles primero a quién sirven, y la respuesta cambia cómo se ejecutan." },
        { it: "Das ist keine Frage für Wochenend-Seminare, sondern eine Alltagsfrage: Wem hilft diese Zeile, dieser Anruf, diese Ordnung? Wer so fragt, arbeitet nicht langsamer, aber anders – die Hand bleibt gleich, die Haltung wird eine andere. Vielleicht ist das die einfachste Definition geistiger Arbeit: das Ordentliche tun und dabei wissen, wofür.", es: "No es una pregunta para seminarios de fin de semana, sino una pregunta de cada día: ¿a quién ayuda esta línea, esta llamada, este orden? Quien así pregunta no trabaja más despacio, pero sí distinto: la mano sigue igual, la actitud se vuelve otra. Quizá sea la definición más simple de trabajo espiritual: hacer lo que corresponde y saber para qué." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un anuncio de empleo", "Preguntar a quién sirve cada tarea", "Una guía de productividad"],
        answer: 1,
        why: "El título opone sentido a ocupación: el texto pregunta por el destinatario del trabajo, no por ofertas ni rendimiento.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Sinn entsteht, wenn man fragt, wem jede Aufgabe dient – die Haltung ändert sich, die Hand nicht",
          "Sinn findet man nur außerhalb der Arbeit",
          "Arbeit ist reine Pflicht ohne Fragen",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Nicht jede Aufgabe trägt ihren Sinn an der Oberfläche",
          "Du fragst: Wem hilft diese Zeile, dieser Anruf?",
          "Geistige Arbeit: das Ordentliche tun und wissen, wofür",
        ],
        distractors: [
          "Das Wochenende gehört den Seminaren",
          "Die Antwort steht im Arbeitsvertrag",
          "Langsamere Arbeit wird immer bestraft",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Nicht jede Aufgabe trägt ihren Sinn an der Oberfläche.",
          "Du fragst, wem diese Zeile und dieser Anruf helfen.",
          "Die Hand bleibt gleich, die Haltung wird eine andere.",
          "Das Ordentliche tun und dabei wissen, wofür.",
          "Die Zeile gehört ins Protokoll der Mittwochs-Konferenz.",
        ],
        intruder: 4,
        why: "La conferencia del miércoles es logística de agenda ajena a la pregunta por el sentido del trabajo: es el intruso.",
      },
    },
    {
      id: "md-de-b2-11-3", theme: "qui e ora",
      title: "Feierabend", titleEs: "Fin de jornada",
      minutes: 2,
      paragraphs: [
        { it: "Um 18 Uhr liegt ein unsichtbarer Flur zwischen zwei Welten: der Arbeit und dem Abend. Wer ihn mit einem Rucksack voller offener Tabs betritt, kommt nicht wirklich an; wer ihn bewusst durchschreitet, kommt ganz woanders an – bei sich.", es: "A las 18:00 hay un pasillo invisible entre dos mundos: el trabajo y la tarde. Quien lo cruza con una mochila llena de pestañas abiertas no llega de verdad; quien lo atraviesa con consciencia llega a un sitio completamente distinto: a sí mismo." },
        { it: "Der Übergang braucht nur eine kleine Handlung: die Bildschirme herunterfahren, drei tiefe Atemzüge, den Schreibtisch einmal ansehen wie ein Gesicht, das man verabschiedet. Dann aufstehen und den Raum wechseln. Der Feierabend ist keine Uhrzeit, sondern ein Übergangsritual – und wie jeder Übergang will er gelebt werden, nicht nur geplant.", es: "El tránsito necesita solo un gesto pequeño: apagar las pantallas, tres respiraciones profundas, mirar una vez el escritorio como un rostro al que despides. Después levantarse y cambiar de habitación. El Feierabend no es una hora, sino un ritual de paso y, como todo paso, quiere vivirse, no solo planearse." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un horario laboral de Berlín", "El tránsito consciente del trabajo a la tarde", "Una guía de apagado de ordenadores"],
        answer: 1,
        why: "El título marca el umbral: el texto convierte el fin de jornada en ritual de presencia, no en horario ni en técnica.",
      },
      sequence: {
        instr: "Ordena el ritual del Feierabend:",
        events: [
          "Du fährst die Bildschirme herunter",
          "Du nimmst drei tiefe Atemzüge",
          "Du siehst den Schreibtisch an wie ein Gesicht, das du verabschiedest",
          "Du stehst auf und wechselst den Raum",
          "Du kommst bei dir an",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Der Arbeitstag ist vorbei – wirklich vorbei. Fahr die Bildschirme herunter und lege die Hände kurz auf den Tisch. Atme dreimal tief, und mit jedem Ausatmen lässt du eine offene Aufgabe los. Sie wartet morgen geduldig. Jetzt steh auf, dreh dich einmal im Raum und geh nach Hause: Der Feierabend beginnt genau in diesem Schritt.",
        questions: [
          { q: "Wohin legst du die Hände kurz?", kind: "literal", options: ["Auf den Tisch", "Auf die Tastatur", "In die Taschen"], answer: 0, why: "«lege die Hände kurz auf den Tisch»." },
          { q: "Was lässt du mit jedem Ausatmen los?", kind: "inferencial", options: ["Eine offene Aufgabe", "Den Stuhl", "Das Wasser"], answer: 0, why: "«mit jedem Ausatmen lässt du eine offene Aufgabe los»." },
          { q: "Wann beginnt der Feierabend?", kind: "literal", options: ["Genau in diesem Schritt", "Am nächsten Morgen", "Nach dem Essen"], answer: 0, why: "«Der Feierabend beginnt genau in diesem Schritt» cierra el audio." },
          { q: "Was machen die Aufgaben bis morgen?", kind: "inferencial", options: ["Sie warten geduldig", "Sie verschwinden", "Sie erledigen sich selbst"], answer: 0, why: "«Sie wartet morgen geduldig»: la tarea pendiente sabe esperar." },
        ],
      },
    },
  ],

  "de-cu-b2-12": [
    {
      id: "md-de-b2-12-1", theme: "relax fisico",
      title: "Die Stimme vor dem Gericht", titleEs: "La voz ante el tribunal",
      minutes: 2,
      paragraphs: [
        { it: "Bevor du sprichst, spricht dein Körper: Er hebt sich vom Stuhl, ordnet die Blätter, sucht den Boden. Die Stimme kommt zuletzt – und sie klingt genau so, wie der Körper gerade steht.", es: "Antes de hablar, habla tu cuerpo: se incorpora, ordena las hojas, busca el suelo. La voz llega al final, y suena exactamente como está puesto el cuerpo en ese momento." },
        { it: "Nimm dir die dreißig Sekunden vor dem Plädoyer: Stelle beide Füße parallel, lass das Brustbein leicht heben, als würdest du stolz, aber nicht steif stehen, und seufze einmal leise. Die erste Silbe, die dann kommt, trägt dich, statt dass du sie trägst. Wer so beginnt, dem folgen die Wörter leichter – und der Atem reicht bis zum Schluss.", es: "Tómate los treinta segundos antes del alegato: pon ambos pies en paralelo, deja que el esternón suba un poco, como quien está orgulloso pero no rígido, y suspira una vez en voz baja. La primera sílaba que llegue entonces te sostiene a ti, en vez de que tú la cargues a ella. Quien empieza así ve venir las palabras con más facilidad, y el aliento alcanza hasta el final." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de derecho procesal", "Preparar cuerpo y voz en los segundos previos al discurso", "Una crítica a los tribunales"],
        answer: 1,
        why: "El título une voz y tribunal: el texto prepara el cuerpo antes de hablar, no el procedimiento legal.",
      },
      quiz: [
        { q: "Was tut der Körper, bevor du sprichst?", kind: "literal", options: ["Er hebt sich vom Stuhl, ordnet die Blätter, sucht den Boden", "Er schläft ein", "Er verlässt den Saal"], answer: 0, why: "«Er hebt sich vom Stuhl, ordnet die Blätter, sucht den Boden» está literal al inicio." },
        { q: "Warum reicht der Atem bis zum Schluss?", kind: "inferencial", options: ["Weil der Körper am Anfang ruhig organisiert wurde", "Weil das Plädoyer kurz ist", "Weil der Saal klimatisiert ist"], answer: 0, why: "La organización corporal inicial (pies, esternón, suspiro) sostiene la respiración hasta el final." },
        { q: "Wie soll die Körperhaltung sein?", kind: "critica", options: ["Stolz, aber nicht steif", "Zusammengesunken und leise", "So groß wie möglich"], answer: 0, why: "«stolz, aber nicht steif»: ni desplome ni rigidez." },
      ],
      vf: [
        { text: "Die Stimme kommt zuerst, der Körper danach.", value: false, why: "El texto dice «Die Stimme kommt zuletzt»: primero habla el cuerpo." },
        { text: "Du seufzt einmal leise als Teil der Vorbereitung.", value: true, why: "«und seufze einmal leise»." },
        { text: "Die erste Silbe trägt dich, statt dass du sie trägst.", value: true, why: "«trägt dich, statt dass du sie trägst»." },
      ],
    },
    {
      id: "md-de-b2-12-2", theme: "relax mentale",
      title: "Der innere Richter", titleEs: "El juez interior",
      minutes: 2,
      paragraphs: [
        { it: "Im Kopf vieler Menschen sitzt ein Richter, der nie Feierabend macht: Er bewertet jeden Satz, jede Reaktion, jeden Vergleich mit anderen. Sein Urteil kommt schnell und klingt endgültig – genau wie die Urteile, vor denen er Angst hat.", es: "En la cabeza de muchas personas se sienta un juez que nunca termina su jornada: evalúa cada frase, cada reacción, cada comparación con otros. Su veredicto llega rápido y suena definitivo, igual que los veredictos que él teme." },
        { it: "Die Übung besteht nicht darin, ihn abzusetzen, sondern ihn in den Ruhestand zu begleiten: Du hörst sein Urteil, bedankst dich innerlich für die Meinung – und triffst deine eigene Entscheidung. Mit der Zeit spricht er seltener, und wenn er spricht, klingt er wie ein alter Bekannter, dem man zuhören kann, ohne ihm zu folgen.", es: "El ejercicio no consiste en destituirlo, sino en acompañarlo a la jubilación: escuchas su veredicto, le agradeces interiormente la opinión y tomas tu propia decisión. Con el tiempo habla menos, y cuando habla suena como un viejo conocido al que se puede oír sin obedecerle." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un texto sobre carreras judiciales", "Tratar al juez interior con cortesía pero sin obedecerle", "Una crítica a los exámenes orales"],
        answer: 1,
        why: "El título presenta al juez interno: el texto enseña a retirarlo con amabilidad, no temas legales ni exámenes.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Der innere Richter darf bleiben, aber in den Ruhestand – du hörst ihn und entscheidest selbst",
          "Der innere Richter hat immer recht und muss befolgt werden",
          "Man muss den inneren Richter wütend vertreiben",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Er bewertet jeden Satz und jeden Vergleich mit anderen",
          "Du bedankst dich innerlich für seine Meinung",
          "Wenn er spricht, klingt er wie ein alter Bekannter",
        ],
        distractors: [
          "Der Richter trägt eine schwarze Robe im Traum",
          "Sein Urteil kommt per Post am Montag",
          "Der Ruhestand beginnt mit 67 Jahren",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Im Kopf sitzt ein Richter, der nie Feierabend macht.",
          "Sein Urteil kommt schnell und klingt endgültig.",
          "Du bedankst dich innerlich für die Meinung.",
          "Du triffst deine eigene Entscheidung.",
          "Die Robe des Richters wird jährlich gereinigt.",
        ],
        intruder: 4,
        why: "La limpieza anual de la toga es un detalle material ajeno al juez mental: es el intruso.",
      },
    },
    {
      id: "md-de-b2-12-3", theme: "meditazione",
      title: "Stille nach dem Plädoyer", titleEs: "Silencio tras el alegato",
      minutes: 3,
      paragraphs: [
        { it: "Nach den letzten Worten fällt eine Stille, die niemand plant: Der Saal hält den Atem an, die Worte setzen sich langsam auf ihren Plätzen ab, wie Staub nach einem Lichtstrahl. Wer diese Stille nicht sofort mit Applaus oder Erleichterung füllt, erlebt das Seltenste: den Moment, in dem die Rede zu Ende ist und noch nachwirkt.", es: "Tras las últimas palabras cae un silencio que nadie planifica: la sala contiene el aliento, las palabras se depositan despacio en sus sitios, como el polvo tras un rayo de luz. Quien no llena ese silencio enseguida con aplausos o alivio vive lo más raro: el momento en que el discurso ha terminado y todavía resuena." },
        { it: "So endet jedes große Gespräch: mit einer Pause, die gehört. Nimm sie auch im Kleinen: Nach dem letzten Satz einer Diskussion, einer Nachricht, eines Tages – ein Atemzug Stille. Sie ist nicht leer; sie ist der Raum, in dem das Gesagte zu dem wird, was es für dich bedeutet. Danach darfst du aufstehen, und der Tag geht weiter.", es: "Así termina toda gran conversación: con una pausa que se escucha. Tómala también en lo pequeño: tras la última frase de una discusión, de un mensaje, de un día, una respiración de silencio. No está vacía; es el espacio en que lo dicho se convierte en lo que significa para ti. Después puedes levantarte, y el día sigue." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un texto de protocolo de aplausos", "El silencio que sigue a las palabras importantes", "Una guía de despedidas laborales"],
        answer: 1,
        why: "El título pone la quietud tras el discurso: el texto habita la pausa final, no el protocolo ni las despedidas.",
      },
      sequence: {
        instr: "Ordena lo que ocurre tras el discurso:",
        events: [
          "Die letzten Worte fallen",
          "Der Saal hält den Atem an",
          "Die Worte setzen sich langsam auf ihren Plätzen ab",
          "Die Stille wirkt nach, ohne gefüllt zu werden",
          "Ein Atemzug Stille macht das Gesagte zu deinem",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Die Rede ist vorbei, aber du sprichst noch nicht. Lass die Worte noch einen Moment in der Luft stehen, wie Glockenklang nach dem Schlag. Atme einmal ruhig aus und spüre: Das Gesagte braucht jetzt keinen Schutz mehr. Es darf wirken, und du darfst still sein. Erst wenn der Atem geendet hat, verlässt du diesen Moment.",
        questions: [
          { q: "Womit wird der Nachklang der Worte verglichen?", kind: "literal", options: ["Mit Glockenklang nach dem Schlag", "Mit Regen nach dem Sturm", "Mit Licht nach der Nacht"], answer: 0, why: "«wie Glockenklang nach dem Schlag» está literal en el audio." },
          { q: "Was dürfen die Worte jetzt, ohne Schutz?", kind: "inferencial", options: ["Wirken", "Verändert werden", "Wiederholt werden"], answer: 0, why: "«Es darf wirken»: sin defensa, la palabra actúa por sí sola." },
          { q: "Wann verlässt du den Moment?", kind: "literal", options: ["Erst wenn der Atem geendet hat", "Sofort nach dem letzten Wort", "Nach dem Applaus"], answer: 0, why: "«Erst wenn der Atem geendet hat» cierra el audio." },
          { q: "Was spürst du beim Ausatmen?", kind: "inferencial", options: ["Dass das Gesagte keinen Schutz mehr braucht", "Dass alles falsch war", "Dass du mehr hättest sagen sollen"], answer: 0, why: "«Das Gesagte braucht jetzt keinen Schutz mehr»: la exhalación confirma la calma." },
        ],
      },
    },
  ],
};
