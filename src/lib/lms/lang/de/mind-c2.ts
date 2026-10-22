import type { MindReading } from "../../cambridge-mind";

/* ═══ DE C2 · Mind readings (temáticas de conciencia) — 3 por unidad ══
   Metodología v9.13: 7 estrategias de comprensión lectora y escucha.
   Textos en alemán de Alemania nivel C2 (ensaio reflexivo, du-form),
   anclados suavemente a los escenarios del curso C2 (Literaturhaus,
   Lyrik-Seminar, Kabarett, Verlag, Auswärtiges Amt, Drehbuchwerkstatt,
   Wahlkampf, Übersetzung, Lektorat, Mundartarchiv, Improtheater,
   Friedenspreis). Campos `.it` = alemán, `.es` = español (tuteo).
   Estrategia por índice: L1 = predict + quiz (lit/inf/crít) + V/F;
   L2 = predict + ideas + intruso; L3 = predict + secuencia + escucha. */

export const DE_MIND_C2: Record<string, MindReading[]> = {
  "de-cu-c2-01": [
    {
      id: "md-de-c2-01-1", theme: "meditazione",
      title: "Drei Atemzüge vor der leeren Seite", titleEs: "Tres respiraciones ante la página vacía",
      minutes: 2,
      paragraphs: [
        { it: "Die leere Seite ist kein Richter, auch wenn sie sich so kleidet. Setz dich hin, atme dreimal tief und schau sie an: Sie wartet. Die erste Seite eines Essays entsteht nicht im Eifer, sondern in der Stille davor – im Bereitwerden eines Kopfes, der gelernt hat, vor dem ersten Wort zu verstummen. Groß war die Versuchung, sofort zu schreiben; größer ist die Kunst, einen Moment zu warten.", es: "La página vacía no es un juez, aunque se vista así. Siéntate, respira hondo tres veces y mírala: está esperando. La primera página de un ensayo no nace en el ímpetu, sino en el silencio previo — en la preparación de una cabeza que ha aprendido a callar antes de la primera palabra. Grande era la tentación de escribir de inmediato; más grande es el arte de esperar un momento." },
        { it: "Mit jedem Ausatmen legst du eine Befürchtung ab: die Angst, nichts zu sagen zu haben; die Angst, alles sagen zu müssen; die Angst, andere hätten es besser gesagt. Was bleibt, ist eine einzige Frage – und die Frage ist schon der Anfang des Textes. Wer so beginnt, schreibt nicht gegen die Seite; er schreibt mit ihr. Das ist Meditation am Schreibtisch: kein Leerwerden, sondern ein Freiwerden für den ersten Satz.", es: "Con cada exhalación sueltas un temor: el miedo a no tener nada que decir; el miedo a tener que decirlo todo; el miedo a que otros lo hayan dicho mejor. Lo que queda es una sola pregunta — y la pregunta ya es el comienzo del texto. Quien empieza así no escribe contra la página: escribe con ella. Esa es la meditación ante el escritorio: no vaciarse, sino liberarse para la primera frase." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Trucos para escribir más rápido", "Respirar y soltar el miedo antes de empezar a escribir", "Una crítica de los concursos literarios"],
        answer: 1,
        why: "El título une la respiración (drei Atemzüge) con la página vacía: apunta a la calma previa a la escritura, no a técnicas de productividad.",
      },
      quiz: [
        { q: "Was ist die leere Seite laut Text?", kind: "literal", options: ["Ein Richter, der verurteilt", "Kein Richter, auch wenn sie sich so kleidet", "Ein Freund, der nichts verlangt"], answer: 1, why: "«Die leere Seite ist kein Richter, auch wenn sie sich so kleidet»: está literal en la primera frase." },
        { q: "Wann entsteht die erste Seite eines Essays?", kind: "inferencial", options: ["In der Stille vor dem Schreiben", "Im Eifer des ersten Satzes", "Beim Lesen anderer Autoren"], answer: 0, why: "«Sie entsteht nicht im Eifer, sondern in der Stille davor»: se infiere que la calma previa es parte del proceso." },
        { q: "Was heißt «Meditation am Schreibtisch»?", kind: "critica", options: ["Ein Freiwerden für den ersten Satz – kein Leerwerden", "Ein Abschalten bis zum Nichts", "Ein Ritual gegen die Konkurrenz"], answer: 0, why: "El cierre opone Freiwerden a Leerwerden: meditar aquí es abrirse a la primera frase, no vaciarse." },
      ],
      vf: [
        { text: "Du sollst sofort schreiben, um den Eifer zu nutzen.", value: false, why: "El texto aconseja esperar: «Größer ist die Kunst, einen Moment zu warten»." },
        { text: "Mit jedem Ausatmen legst du eine Befürchtung ab.", value: true, why: "«Mit jedem Ausatmen legst du eine Befürchtung ab»: los tres miedos se sueltan al exhalar." },
        { text: "Die Frage, die bleibt, ist schon der Anfang des Textes.", value: true, why: "«Die Frage ist schon der Anfang des Textes»: el residuo de la calma ya es escritura." },
      ],
    },
    {
      id: "md-de-c2-01-2", theme: "qui e ora",
      title: "Der Kaffee wird kalt", titleEs: "El café se enfría",
      minutes: 2,
      paragraphs: [
        { it: "Auf dem Tisch des Workshops steht der Kaffee, den niemand mehr trinkt. Er wird kalt, während über deinem Essay geredet wird – und genau das macht ihn wertvoll: Er zeigt dir die Zeit, die vergeht, ohne dass jemand sie festhält. Leg für einen Moment den Stift hin und nimm die Tasse in beide Hände. Ihre Wärme ist vorbei, ihr Gewicht ist da.", es: "Sobre la mesa del taller está el café que ya nadie bebe. Se enfría mientras se habla de tu ensayo — y justamente eso lo vuelve valioso: te muestra el tiempo que pasa sin que nadie lo retenga. Deja por un momento el bolígrafo y toma la taza con las dos manos. Su calor ya pasó; su peso está." },
        { it: "Hier und jetzt gibt es keinen besseren Essay, keine wichtigere Stimme, kein späteres Urteil. Es gibt den kalt gewordenen Geschmack, das Kratzen des Bleistifts auf Papier, das Licht, das über den Tisch rückt. Die Gegenwart verlangt nichts von dir; sie stellt nur ihre Sachen auf den Tisch. Wer sie ansieht, muss nicht dorthin eilen, wo die Sorgen wohnen.", es: "Aquí y ahora no hay un ensayo mejor, ni una voz más importante, ni un veredicto posterior. Está el sabor que se enfrió, el rasguño del lápiz sobre el papel, la luz que se desplaza por la mesa. El presente no te exige nada: solo pone sus cosas sobre la mesa. Quien lo mira no tiene que correr a donde viven las preocupaciones." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una receta de café alemán", "Estar presente con una taza de café durante el taller", "Las normas de higiene del Literaturhaus"],
        answer: 1,
        why: "El título describe la taza que se enfría: es la excusa para la presencia, no una receta ni un reglamento.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Der kalte Kaffee als Anker im gegenwärtigen Moment",
          "Eine Anleitung, besseren Kaffee zu brühen",
          "Eine Kritik am Schreibworkshop und seinen Regeln",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Der Kaffee wird kalt, während über deinem Essay geredet wird",
          "Du legst den Stift hin und nimmst die Tasse in beide Hände",
          "Die Gegenwart verlangt nichts von dir",
        ],
        distractors: [
          "Der Kaffee wird neu aufgebrüht und bleibt heiß",
          "Der Bleistift liegt unter dem Tisch",
          "Die Sorgen wohnen in der Küche des Literaturhauses",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Der Kaffee auf dem Tisch wird kalt, während geredet wird.",
          "Du legst den Stift hin und nimmst die Tasse in beide Hände.",
          "Das Kratzen des Bleistifts und das Licht auf dem Tisch.",
          "Das Literaturhaus verlangt für den Workshopsaal eine Gebühr von zwölf Euro.",
          "Die Gegenwart stellt nur ihre Sachen auf den Tisch.",
        ],
        intruder: 3,
        why: "La tarifa del alquiler de la sala es un dato administrativo: la lectura trata de la presencia en la mesa, no de la logística del taller.",
      },
    },
    {
      id: "md-de-c2-01-3", theme: "relax fisico",
      title: "Die Hand lockert den Stift", titleEs: "La mano afloja el bolígrafo",
      minutes: 2,
      paragraphs: [
        { it: "Nach der dritten Runde Korrektur meldet sich die Hand: Sie hält den Stift wie ein Werkzeug, das weglaufen könnte. Leg ihn eine Minute ab. Beuge die Finger langsam zurück, spüre die Sehnen am Unterarm, und lass den Stift anschließend wie etwas liegen, das sich selbst genügt. Das Schreiben hat Muskeln – und die dürfen Feierabend machen.", es: "Tras la tercera ronda de corrección, la mano se hace notar: sostiene el bolígrafo como una herramienta que pudiera escaparse. Déjalo un minuto. Dobla los dedos despacio hacia atrás, siente los tendones del antebrazo, y deja luego el bolígrafo como algo que se basta a sí mismo. La escritura tiene músculos — y los músculos merecen su fin de jornada." },
        { it: "Dann die Schultern: hoch, tief, und noch einmal – diesmal so langsam, dass du die Zwischentöne spürst. Der Kiefer zuletzt: Er kaut den Tag noch einmal nach. Lass ihn los. Ein Körper, der eine Minute lang nichts festhält, schreibt am Ende leichter als ein Körper, der alles gleichzeitig trägt.", es: "Luego los hombros: arriba, abajo, y otra vez — esta vez tan despacio que sientes los matices intermedios. La mandíbula al final: todavía mastica el día una vez más. Suéltala. Un cuerpo que un minuto no agarra nada escribe al final con más ligereza que un cuerpo que lo carga todo a la vez." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Ejercicios de levantamiento de pesas", "Relajar mano, hombros y mandíbula después de escribir", "Una crítica de los bolígrafos caros"],
        answer: 1,
        why: "«Die Hand lockert den Stift» apunta a soltar la tensión física del escritor, no al entrenamiento ni al material.",
      },
      sequence: {
        instr: "Ordena los pasos del ejercicio:",
        events: [
          "Du legst nach der dritten Korrekturrunde den Stift eine Minute ab",
          "Du beugst die Finger langsam zurück und spürst die Sehnen am Unterarm",
          "Du bewegst die Schultern hoch, tief und noch einmal ganz langsam",
          "Du löst den Kiefer, der den Tag nachkaut",
          "Du schreibst anschließend leichter, weil der Körper nichts mehr festhält",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Nimm dir eine Minute. Leg den Stift hin und schau auf deine Hand: Sie hat heute schon viel getragen – Papier, Korrekturen, das Gewicht der eigenen Ansprüche. Beuge die Finger ganz langsam zurück, bis du die Sehnen spürst, und lass sie dann weich werden. Atme dabei aus, nicht ein. Die Hand darf Feierabend machen, auch wenn du noch eine Seite vor dir hast. Nach einer Minute nimmst du den Stift wieder auf – leichter, als du ihn abgelegt hast.",
        questions: [
          { q: "Was machst du zuerst mit dem Stift?", kind: "literal", options: ["Ich lege ihn hin", "Ich werfe ihn weg", "Ich gebe ihn an jemanden weiter"], answer: 0, why: "«Leg den Stift hin»: lo primero es soltarlo." },
          { q: "Wohin beugst du die Finger?", kind: "literal", options: ["Schnell vor und zurück", "Langsam zurück, bis die Sehnen spürbar sind", "Ganz nach oben zur Decke"], answer: 1, why: "«Beuge die Finger ganz langsam zurück, bis du die Sehnen spürst»." },
          { q: "Was passiert beim Ausatmen?", kind: "inferencial", options: ["Die Hand darf weich werden", "Die Seite wird kürzer", "Der Stift wird schwerer"], answer: 0, why: "«Atme dabei aus» acompaña el soltar: se infiere que la exhalación va con la distensión." },
          { q: "Warum nimmst du den Stift danach «leichter» auf?", kind: "inferencial", options: ["Weil die Hand einen Moment Ruhe hatte", "Weil der Stift gewechselt wurde", "Weil die Seite zu Ende ist"], answer: 0, why: "Del cierre del audio: la mano descansada hace que el mismo instrumento pese menos." },
        ],
      },
    },
  ],

  "de-cu-c2-02": [
    {
      id: "md-de-c2-02-1", theme: "meditazione",
      title: "Ein Vers, ein Atemzug", titleEs: "Un verso, una respiración",
      minutes: 2,
      paragraphs: [
        { it: "Nimm ein Gedicht zur Hand – eines, das du gut kennst – und lies nur die erste Zeile. Dann atme aus. Lies die zweite, atme aus. Der Vers will getragen werden, nicht gehetzt: Zwischen den Zeilen wohnt eine Pause, die niemand gemessen hat und die trotzdem gehört. Du liest nicht mehr; du gehst.", es: "Toma un poema — uno que conozcas bien — y lee solo el primer verso. Luego exhala. Lee el segundo, exhala. El verso quiere ser sostenido, no acosado: entre las líneas vive una pausa que nadie ha medido y que sin embargo se oye. Ya no lees: caminas." },
        { it: "Nach vier Zeilen stellst du fest: Die Gedanken von vorhin sind sitzen geblieben, so wie Hunde, die merken, dass der Spaziergang ernst gemeint ist. Die Kadenz hat dich getragen, der Atem hat das Tempo gesetzt. Das ist die älteste Meditation des Lesens: ein Schritt, ein Atemzug, ein Vers – kein Ziel, keine Ausbeute, nur Weg.", es: "Después de cuatro versos constatas: los pensamientos de hace un rato se han quedado sentados, como perros que notan que el paseo va en serio. La cadencia te ha llevado, el aliento ha marcado el paso. Esa es la meditación más antigua de la lectura: un paso, una respiración, un verso — sin meta, sin botín, solo camino." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso acelerado de memorización de poemas", "Leer poesía verso a verso, con una respiración por línea", "La historia de la poesía alemana"],
        answer: 1,
        why: "El título empareja verso y respiración: apunta a la lectura lenta y consciente, no al repaso histórico ni a la memoria rápida.",
      },
      quiz: [
        { q: "Wie liest du das Gedicht?", kind: "literal", options: ["Zeile für Zeile, mit einem Atemzug dazwischen", "Alles auf einmal im Stillen", "Rückwärts von der letzten Zeile"], answer: 0, why: "«Lies nur die erste Zeile. Dann atme aus»: lectura verso a verso." },
        { q: "Was passiert mit den Gedanken beim Lesen?", kind: "inferencial", options: ["Sie bleiben sitzen wie Hunde beim ernsten Spaziergang", "Sie verschwinden vollständig", "Sie werden immer schneller"], answer: 0, why: "La comparación de los perros indica que los pensamientos se calman sin desaparecer: se quedan sentados." },
        { q: "Was ist «die älteste Meditation des Lesens»?", kind: "critica", options: ["Ein Schritt, ein Atemzug, ein Vers – kein Ziel", "Ein Wettlauf gegen die Uhr", "Ein Auswendiglernen unter Druck"], answer: 0, why: "El cierre define la meditación lectora como camino sin meta ni botín." },
      ],
      vf: [
        { text: "Der Vers soll gehetzt werden, um Tempo zu machen.", value: false, why: "«Der Vers will getragen werden, nicht gehetzt»: sostenido, no acosado." },
        { text: "Die Pause zwischen den Zeilen hat niemand gemessen.", value: true, why: "«eine Pause, die niemand gemessen hat und die trotzdem gehört»." },
        { text: "Nach vier Zeilen ist der Kopf leer wie nach einem Schlaf.", value: false, why: "El texto dice que los pensamientos «se quedan sentados», no que desaparezcan." },
      ],
    },
    {
      id: "md-de-c2-02-2", theme: "spiritualità",
      title: "Die Stille zwischen den Zeilen", titleEs: "El silencio entre las líneas",
      minutes: 2,
      paragraphs: [
        { it: "Celan nannte das Gedicht einen Weg zur Begegnung. Begegnung wohnt nicht im Lauten allein: Sie wohnt im Übergang, in der Stille zwischen zwei Zeilen, wo der Atem des Lesers und der Atem des Gedichts sich kurz begegnen. Wer diese Stille hört, hört nicht nichts – er hört den Raum, den das Gedicht für ihn freigehalten hat.", es: "Celan llamó al poema un camino hacia el encuentro. El encuentro no vive solo en lo audible: vive en el tránsito, en el silencio entre dos líneas, donde el aliento del lector y el aliento del poema se cruzan un instante. Quien oye ese silencio no oye nada vacío: oye el espacio que el poema le había reservado." },
        { it: "Das braucht keine Lehre und kein Bekenntnis. Es genügt, ein Blatt ernst zu nehmen: Es gibt Menschen, die mit einem Vers begonnen haben, den Tag zu betreten, so wie andere mit einem ersten Schritt ins kalte Wasser. Die Stille zwischen den Zeilen ist kein Vakuum; sie ist Gastfreundschaft. Du darfst dort wohnen, solange du willst.", es: "Esto no necesita doctrina ni confesión. Basta con tomar una hoja en serio: hay personas que han empezado a habitar el día con un verso, como otros con el primer paso al agua fría. El silencio entre las líneas no es vacío: es hospitalidad. Puedes vivir ahí todo lo que quieras." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Métrica y rimas del soneto alemán", "El silencio entre los versos como espacio de encuentro", "Reglas para recitar en voz alta"],
        answer: 1,
        why: "El título señala el espacio entre las líneas: contemplación del silencio, no manual técnico.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Die Stille zwischen den Zeilen ist Gastfreundschaft, kein Vakuum",
          "Celan schrieb seine Gedichte in völliger Einsamkeit",
          "Verse sollten nur einmal im Jahr gelesen werden",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Begegnung wohnt im Übergang, in der Stille zwischen zwei Zeilen",
          "Es braucht keine Lehre und kein Bekenntnis",
          "Manche Menschen betreten den Tag mit einem Vers",
        ],
        distractors: [
          "Das Gedicht verbietet jeden Atem während des Lesens",
          "Die Stille wird von einem Lehrer mit der Uhr gemessen",
          "Nur Berufsdichter dürfen Verse benutzen",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Celan nannte das Gedicht einen Weg zur Begegnung.",
          "Die Stille zwischen zwei Zeilen hält Raum für den Leser frei.",
          "Manche betreten den Tag mit einem Vers wie mit einem ersten Schritt.",
          "Der Seminarraum ist mittwochs von 14 bis 16 Uhr reserviert.",
          "Die Stille zwischen den Zeilen ist Gastfreundschaft.",
        ],
        intruder: 3,
        why: "La reserva del seminario es logística académica: no pertenece a la experiencia contemplativa del poema.",
      },
    },
    {
      id: "md-de-c2-02-3", theme: "relax mentale",
      title: "Nicht deklamieren", titleEs: "No declamar",
      minutes: 2,
      paragraphs: [
        { it: "Vor der Lesung flüstert die Anspannung: Jetzt musst du groß sein. Die Anspannung irrt. Das Gedicht braucht keine große Stimme, es braucht eine ehrliche: sprechen statt deklamieren. Wer das Metrum trägt, muss es nicht zeigen; wer die Pause hält, muss sie nicht erklären. Die Wirkung wohnt im Zurückhaltenden.", es: "Antes de la lectura, la tensión susurra: ahora tienes que ser grande. La tensión se equivoca. El poema no necesita una voz grandiosa, necesita una honesta: hablar en vez de declamar. Quien sostiene el metro no tiene que exhibirlo; quien mantiene la pausa no tiene que explicarla. El efecto vive en lo contenido." },
        { it: "Probiere es im leeren Saal: Sprich die erste Zeile so leise, dass du dich selbst hörst. Die zweite etwas lauter, die dritte wieder leise. Du wirst merken, wie die Stimme den Körper verlässt und zurückkehrt, wie ein Atem, der niemanden überzeugen will. Innere Ruhe ist keine Voraussetzung der Lesung; sie ist ihr Nebenprodukt. Wer nichts erzwingt, dem folgt der Saal.", es: "Pruébalo en la sala vacía: di el primer verso tan bajo que te oigas a ti mismo. El segundo algo más alto, el tercero otra vez bajo. Notarás cómo la voz deja el cuerpo y vuelve, como una respiración que no quiere convencer a nadie. La calma interior no es requisito de la lectura: es su subproducto. A quien no fuerza nada, la sala lo sigue." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de proyección vocal para grandes teatros", "Hablar con honestidad en vez de declamar en la lectura pública", "Cómo memorizar poemas largos"],
        answer: 1,
        why: "«Nicht deklamieren» rechaza el tono grandioso: el texto apunta a la voz honesta y a la calma interior.",
      },
      sequence: {
        instr: "Ordena los pasos del ejercicio en la sala vacía:",
        events: [
          "Die Anspannung flüstert vor der Lesung: Jetzt musst du groß sein",
          "Du sprichst die erste Zeile so leise, dass du dich selbst hörst",
          "Die zweite Zeile sprichst du etwas lauter, die dritte wieder leise",
          "Du merkst, wie die Stimme den Körper verlässt und zurückkehrt",
          "Der Saal folgt dir, weil du nichts erzwingst",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Kurz bevor du liest: Schließ die Augen und sprich innerlich die erste Zeile. Nicht vorführen – sprechen. Lass die Stimme klein sein, so klein wie im Gespräch mit einem Freund. Beim Ausatmen lässt du das Wort fallen, nicht beim Einatmen. Wenn du so beginnst, trägt dich das Metrum, statt dass du es trägst. Der Saal wird still werden – nicht weil du laut warst, sondern weil du ehrlich warst.",
        questions: [
          { q: "Wie soll die Stimme sein?", kind: "literal", options: ["So klein wie im Gespräch mit einem Freund", "So groß wie ein Orchester", "Ganz laut bis zum Schluss"], answer: 0, why: "«Lass die Stimme klein sein, so klein wie im Gespräch mit einem Freund»." },
          { q: "Beim Ausatmen passiert was?", kind: "literal", options: ["Du lässt das Wort fallen", "Du atmest tiefer ein", "Du hörst auf zu lesen"], answer: 0, why: "«Beim Ausatmen lässt du das Wort fallen, nicht beim Einatmen»." },
          { q: "Warum wird der Saal still?", kind: "inferencial", options: ["Weil du ehrlich warst, nicht laut", "Weil das Mikrofon defekt war", "Weil niemand mehr kommen durfte"], answer: 0, why: "«Nicht weil du laut warst, sondern weil du ehrlich warst»." },
          { q: "Was heißt «das Metrum trägt dich»?", kind: "inferencial", options: ["Du musst den Rhythmus nicht mehr erzwingen", "Das Metrum ersetzt das Atmen", "Der Vers verlangsamt sich von selbst"], answer: 0, why: "Si el metro te lleva, tú ya no lo cargas: se infiere que no hay que forzar el ritmo." },
        ],
      },
    },
  ],

  "de-cu-c2-03": [
    {
      id: "md-de-c2-03-1", theme: "qui e ora",
      title: "Die Pause vor dem Lachen", titleEs: "La pausa antes de la risa",
      minutes: 2,
      paragraphs: [
        { it: "Auf der Bühne gibt es einen Moment, der nichts will und alles entscheidet: die Pause vor der Pointe. Sie ist reine Gegenwart – kein Text, keine Geste, nur du und der Saal, der atmet. Wer diese Pause füllt, weil er sie nicht aushält, verschenkt die Spannung. Wer sie hält, hält den Moment fest, in dem das Lachen entsteht.", es: "En el escenario hay un momento que no quiere nada y lo decide todo: la pausa antes del remate. Es presencia pura — sin texto, sin gesto, solo tú y la sala que respira. Quien llena esa pausa porque no la soporta, regala la tensión. Quien la sostiene, retiene el instante en que nace la risa." },
        { it: "Erst die Stille, dann der Schlag: Das gilt fürs Kabarett wie fürs Leben. In der Stille vor dem Lachen wohnen alle Möglichkeiten – der Satz kann noch jeder werden. Hier und jetzt heißt hier: in der Sekunde, die noch nichts entschieden hat. Wer sie aushält, muss nirgendwohin eilen.", es: "Primero el silencio, luego el golpe: vale para el cabaret y para la vida. En el silencio previo a la risa viven todas las posibilidades — la frase todavía puede ser cualquiera. Aquí y ahora significa aquí: en el segundo que aún no ha decidido nada. Quien lo soporta no tiene que ir corriendo a ninguna parte." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo escribir mejores remates", "La pausa antes del remate como presente puro", "Una guía de saludos en el escenario"],
        answer: 1,
        why: "El título nombra la pausa, no el chiste: el texto medita el instante previo a la risa.",
      },
      quiz: [
        { q: "Welchen Moment nennt der Text «alles entscheidend»?", kind: "literal", options: ["Die Pause vor der Pointe", "Den Applaus am Ende", "Den ersten Satz des Abends"], answer: 0, why: "«die Pause vor der Pointe» aparece literal en el primer párrafo." },
        { q: "Was passiert, wer die Pause füllt?", kind: "inferencial", options: ["Er verschenkt die Spannung", "Er verdoppelt das Lachen", "Er gewinnt das Publikum zurück"], answer: 0, why: "«Wer diese Pause füllt, weil er sie nicht aushält, verschenkt die Spannung»." },
        { q: "Warum ist die Pause «reine Gegenwart»?", kind: "critica", options: ["Weil in ihr noch nichts entschieden ist und alles möglich bleibt", "Weil sie länger dauert als der Rest der Show", "Weil das Publikum während ihr schläft"], answer: 0, why: "El segundo párrafo define el aquí y ahora como «la segunda que aún no ha decidido nada»." },
      ],
      vf: [
        { text: "Die Pause vor der Pointe will etwas Bestimmtes erreichen.", value: false, why: "«ein Moment, der nichts will und alles entscheidet»: la pausa no persigue nada." },
        { text: "In der Stille vor dem Lachen kann der Satz noch jeder werden.", value: true, why: "«der Satz kann noch jeder werden»: todas las opciones siguen abiertas." },
        { text: "Wer die Pause aushält, muss nirgendwohin eilen.", value: true, why: "«Wer sie aushält, muss nirgendwohin eilen»." },
      ],
    },
    {
      id: "md-de-c2-03-2", theme: "relax mentale",
      title: "Das Lächeln, das nichts verspricht", titleEs: "La sonrisa que nada promete",
      minutes: 2,
      paragraphs: [
        { it: "Der Anfänger lächelt, bevor die Pointe kommt – und nimmt dem Saal die Entdeckung. Das Lächeln ist ein Versprechen: Es verrät, dass gleich etwas Lustiges passiert. Wer es zurückhält, hält eine Tür zu, durch die der Zuschauer selbst gehen darf. Deadpan ist keine Kälte; es ist Respekt vor der Intelligenz des Publikums.", es: "El principiante sonríe antes de que llegue el remate — y le quita a la sala el descubrimiento. La sonrisa es una promesa: delata que dentro de nada pasará algo gracioso. Quien la contiene mantiene cerrada una puerta que el espectador puede cruzar por sí mismo. El deadpan no es frialdad: es respeto por la inteligencia del público." },
        { it: "Im Kopf gilt dasselbe. Der innere Kritiker lächelt vorab über jeden Einfall – und tötet ihn im Ei. Lass ihn heute schweigen. Ein Gedanke, der nicht sofort bewertet wird, bekommt Zeit zu reifen, wie ein Teig, der gehen muss. Mentale Entspannung heißt hier: dem eigenen Einfall den ersten Atemzug gönnen, ohne ihn gleich zu beurteilen.", es: "En la cabeza rige lo mismo. El crítico interior sonríe por adelantado ante cualquier ocurrencia — y la mata en el huevo. Hoy déjalo callar. Un pensamiento que no se evalúa de inmediato gana tiempo para madurar, como una masa que debe levar. Relajación mental significa aquí: concederle a la propia ocurrencia la primera respiración, sin juzgarla enseguida." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["El arte de sonreír para la cámara", "Contener la sonrisa (y al crítico interior) para dejar vivir la ocurrencia", "Un curso de panadería artesanal"],
        answer: 1,
        why: "La sonrisa del título «nada promete»: apunta a contener el anuncio, en el escenario y en la mente.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Wer das Lächeln zurückhält, lässt das Publikum und den eigenen Einfall entdecken",
          "Pointen funktionieren nur mit großen Gesten",
          "Der innere Kritiker sollte lauter werden",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Das Lächeln ist ein Versprechen: Es verrät, dass gleich etwas Lustiges passiert",
          "Deadpan ist Respekt vor der Intelligenz des Publikums",
          "Ein Gedanke, der nicht sofort bewertet wird, bekommt Zeit zu reifen",
        ],
        distractors: [
          "Das Publikum soll die Pointe vorher kennen",
          "Der Teig muss mindestens eine Woche ruhen",
          "Der Kritiker entscheidet alles in einer Sekunde",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Der Anfänger lächelt, bevor die Pointe kommt.",
          "Deadpan ist keine Kälte, sondern Respekt.",
          "Der innere Kritiker tötet jeden Einfall im Ei, wenn er sofort bewertet.",
          "Die Premiere beginnt um 20.15 Uhr, Einlass ab 19.40 Uhr.",
          "Ein Gedanke ohne sofortige Bewertung bekommt Zeit zu reifen.",
        ],
        intruder: 3,
        why: "El horario del estreno es un dato de cartel: el texto trabaja el silencio interior y el deadpan, no la taquilla.",
      },
    },
    {
      id: "md-de-c2-03-3", theme: "meditazione",
      title: "Lachen, das den Körper leert", titleEs: "La risa que vacía el cuerpo",
      minutes: 2,
      paragraphs: [
        { it: "Ein gutes Lachen beginnt tief – im Bauch, nicht im Gesicht. Es drückt die Luft aus, die sich über den Tag angesammelt hat, und lässt den Körper einen Moment lang ohne Vorrat zurück. Ärzte wissen es, Kabarettisten auch: Nach dem Lachen atmet es sich leichter. Das Lachen ist ein Ausatmen mit Publikum.", es: "Una risa buena empieza hondo — en el vientre, no en la cara. Exprime el aire acumulado durante el día y deja al cuerpo un instante sin provisiones. Los médicos lo saben, y los cabarettistas también: después de reír se respira mejor. La risa es una exhalación con público." },
        { it: "Darf man Lachen üben? Man darf es zulassen. Die meisten halten die Pointe zurück, weil der Tag noch nicht verdient hat, lustig zu sein – eine seltsame Steuer, die niemand beschlossen hat. Setz dich heute an einen Tisch, an dem gelacht wird, und lass das Lachen kommen, wenn es kommt. Der leere Körper danach ist keine Erschöpfung; er ist Weite.", es: "¿Se puede entrenar la risa? Se puede permitir que llegue. La mayoría retiene el remate porque el día aún no ha merecido ser divertido — un impuesto raro que nadie aprobó. Siéntate hoy en una mesa donde se ría, y deja que la risa venga cuando venga. El cuerpo vacío después no es agotamiento: es amplitud." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Ejercicios de risa obligatoria por temporizador", "Permitirse la risa como exhalación que vacía y ensancha", "Una historia del cabaret político"],
        answer: 1,
        why: "El título describe la risa que vacía: el texto invita a dejarla venir, no a forzarla.",
      },
      sequence: {
        instr: "Ordena los pasos del proceso:",
        events: [
          "Ein gutes Lachen beginnt tief im Bauch, nicht im Gesicht",
          "Es drückt die Luft aus, die sich über den Tag angesammelt hat",
          "Der Körper bleibt einen Moment ohne Vorrat zurück",
          "Du lässt das Lachen kommen, ohne es zurückzuhalten",
          "Der leere Körper danach ist keine Erschöpfung, sondern Weite",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Erinnere dich an das letzte Mal, dass du gelacht hast – richtig gelacht, bis der Bauch wehtat. Wo saß das Lachen? Nicht im Gesicht, sondern tiefer. Beim nächsten Mal, wenn etwas lustig ist, atme in den Moment hinein und lass das Lachen ganz kommen, auch wenn es laut ist. Danach bleib noch zwei Atemzüge sitzen und spüre die Weite im Brustkorb. Das ist kein Vergnügen, das verrinnen darf – das ist eine Ausscheidung alter Luft.",
        questions: [
          { q: "Wo saß das letzte Lachen?", kind: "literal", options: ["Nicht im Gesicht, sondern tiefer", "Nur in den Schultern", "Irgendwo neben dir"], answer: 0, why: "«Nicht im Gesicht, sondern tiefer»." },
          { q: "Was tust du, wenn das nächste Mal etwas lustig ist?", kind: "literal", options: ["Ich lasse das Lachen ganz kommen", "Ich halte es zurück", "Ich verlasse den Raum"], answer: 0, why: "«Lass das Lachen ganz kommen, auch wenn es laut ist»." },
          { q: "Was bedeutet «Ausscheidung alter Luft»?", kind: "inferencial", options: ["Das Lachen stößt angestaute Spannung aus", "Du atmest danach schneller", "Der Raum wird gelüftet"], answer: 0, why: "La metáfora médica equipara la risa con una exhalación profunda: expulsa el aire viejo." },
          { q: "Warum sollst du danach «noch zwei Atemzüge sitzen bleiben»?", kind: "inferencial", options: ["Um die Weite im Brustkorb zu spüren", "Um auf den Witz zu antworten", "Weil der Körper müde ist"], answer: 0, why: "«Bleib noch zwei Atemzüge sitzen und spüre die Weite»: la pausa posterior es parte del efecto." },
        ],
      },
    },
  ],

  "de-cu-c2-04": [
    {
      id: "md-de-c2-04-1", theme: "meditazione",
      title: "Der Erzähler atmet mit", titleEs: "El narrador respira con la escena",
      minutes: 2,
      paragraphs: [
        { it: "Eine Szene hat einen Atemrhythmus: Der Erzähler zählt still – zwei, drei, vier Sätze Beschreibung –, dann tritt die Figur ein und atmet kürzer. Wenn du das beim Schreiben vergisst, entsteht jene bleierne Prosa, in der alle Figuren mit der Stimme des Erzählers sprechen. Setz dich eine Minute lang nur das Atmen der Szene: Wo wird es eng, wo weit?", es: "Una escena tiene un ritmo de respiración: el narrador cuenta en silencio — dos, tres, cuatro frases de descripción — y luego entra el personaje y respira más corto. Si olvidas esto al escribir, surge esa prosa plomiza donde todas las figuras hablan con la voz del narrador. Siéntate un minuto solo a escuchar cómo respira la escena: ¿dónde se estrecha, dónde se abre?" },
        { it: "Das ist Meditation für Erzähler: nicht leer werden, sondern hinhören, wie der eigene Text atmet. Du wirst Stellen finden, die keine Luft lassen – dort stapeln sich Adjektive wie Kartons. Nimm eines weg, und der Satz hebt sich. Der Atem der Erzählung ist kein Bild; er ist das Maß, in dem der Leser erträgt, wie viel Welt er pro Satz tragen muss.", es: "Esa es la meditación del narrador: no vaciarse, sino escuchar cómo respira el propio texto. Encontrarás pasajes que no dejan aire — allí se apilan los adjetivos como cajas. Quita uno, y la frase se aligera. El aliento de la narración no es una imagen: es la medida de cuánto mundo soporta el lector por frase." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de respiración para lectores en voz alta", "Escuchar el ritmo respirable de la propia narración", "Una crítica de las novelas largas"],
        answer: 1,
        why: "El título hace respirar al narrador con la escena: el texto trabaja el ritmo del texto propio.",
      },
      quiz: [
        { q: "Was zählt der Erzähler still?", kind: "literal", options: ["Zwei, drei, vier Sätze Beschreibung", "Die Fehler der Figuren", "Die Seiten des Manuskripts"], answer: 0, why: "«Der Erzähler zählt still – zwei, drei, vier Sätze Beschreibung»." },
        { q: "Woran erkennst du bleierne Prosa?", kind: "inferencial", options: ["Alle Figuren sprechen mit der Stimme des Erzählers", "Die Sätze sind alle kurz", "Es gibt keine Adjektive"], answer: 0, why: "Si olvidas el ritmo de respiración, todos hablan con la misma voz: esa es la prosa plomiza." },
        { q: "Was ist «der Atem der Erzählung»?", kind: "critica", options: ["Das Maß, wie viel Welt der Leser pro Satz tragen muss", "Die Seitenzahl des Romans", "Die Geschwindigkeit des Plots"], answer: 0, why: "El cierre lo define: el aliento es la medida de cuánto mundo por frase soporta el lector." },
      ],
      vf: [
        { text: "Die Figur atmet schneller als der Erzähler.", value: true, why: "«dann tritt die Figur ein und atmet kürzer»: el personaje respira más corto." },
        { text: "An Stellen ohne Luft stapeln sich Adjektive wie Kartons.", value: true, why: "«dort stapeln sich Adjektive wie Kartons»." },
        { text: "Der Atem der Erzählung ist ein Bild ohne praktischen Wert.", value: false, why: "«kein Bild; er ist das Maß» — tiene función concreta de edición." },
      ],
    },
    {
      id: "md-de-c2-04-2", theme: "relax fisico",
      title: "Der Stuhl der Erzählerin", titleEs: "La silla de la narradora",
      minutes: 2,
      paragraphs: [
        { it: "Drei Stunden am Schreibtisch: Der Roman ist um vierzig Zeilen gewachsen, der Nacken um zwei Zentimeter geschrumpft. Stell den Wecker auf ein Kapitel, nicht auf eine Zeit – und zwischen den Kapiteln steh auf. Geh ans Fenster, lass die Augen in die Ferne, und roll die Schultern so langsam, als würdest du einen Satz streichen.", es: "Tres horas en el escritorio: la novela ha crecido cuarenta líneas, la nuca se ha encogido dos centímetros. Pon el despertador por capítulos, no por horas — y entre capítulos levántate. Ve a la ventana, deja que los ojos se vayan lejos, y gira los hombros tan despacio como si tacharas una frase." },
        { it: "Der Stuhl ist Werkzeug, kein Lebensort: Er trägt dich, wenn du ihn richtig benutzt – Füße am Boden, Sitzhöhe knapp unter dem Knie, Bildschirm auf Augenhöhe. Der Körper, der eine Geschichte erzählt, braucht die gleiche Pflege wie die Geschichte selbst: eine Zäsur, einen Wechsel der Perspektive, einen Absatz. Schreiben ist Handwerk – und Handwerk beginnt im Rücken.", es: "La silla es herramienta, no domicilio: te sostiene si la usas bien — pies en el suelo, altura del asiento justo por debajo de la rodilla, pantalla a la altura de los ojos. El cuerpo que cuenta una historia necesita el mismo cuidado que la historia: una cesura, un cambio de perspectiva, un párrafo. Escribir es oficio — y el oficio empieza en la espalda." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de compra de sillones ergonómicos", "Cuidar el cuerpo que escribe, capítulo a capítulo", "Ejercicios de escritura automática"],
        answer: 1,
        why: "La silla del título es la del escritorio: el texto cuida al cuerpo que narra, no el mobiliario.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Der Körper braucht Pausen zwischen den Kapiteln wie der Text Zäsuren",
          "Gute Romane entstehen nur im Stehen",
          "Der Schreibtischstuhl muss so teuer wie möglich sein",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Stell den Wecker auf ein Kapitel, nicht auf eine Zeit",
          "Geh ans Fenster und lass die Augen in die Ferne",
          "Füße am Boden, Sitzhöhe knapp unter dem Knie",
        ],
        distractors: [
          "Der Nacken wächst durch das lange Schreiben",
          "Das Fenster muss während der Arbeit geschlossen sein",
          "Der Bildschirm gehört auf Kniehöhe",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Drei Stunden am Schreibtisch lassen den Nacken schrumpfen.",
          "Stell den Wecker auf ein Kapitel, nicht auf eine Zeit.",
          "Zwischen den Kapiteln stehst du auf und rollst die Schultern.",
          "Das Manuskript umfasst 340 Seiten in zwölf Kapiteln.",
          "Schreiben ist Handwerk, und Handwerk beginnt im Rücken.",
        ],
        intruder: 3,
        why: "El número de páginas del manuscrito es un dato editorial: el texto cuida al cuerpo que escribe, no las medidas de la novela.",
      },
    },
    {
      id: "md-de-c2-04-3", theme: "spiritualità",
      title: "Was die Figur verschweigt", titleEs: "Lo que el personaje calla",
      minutes: 2,
      paragraphs: [
        { it: "Jede Figur trägt ein Geheimnis, auch wenn der Autor es nicht kennt. Das Verschwiegene ist der Raum, in dem die Figur lebendig wird: Was sie nicht sagt, während sie Kaffee kocht, ist wichtiger als jede Erklärung. Wer das respektiert, schreibt keine Figuren – er beherbergt sie.", es: "Cada personaje lleva un secreto, aunque el autor no lo conozca. Lo callado es el espacio donde el personaje se vuelve vivo: lo que no dice mientras prepara el café importa más que cualquier explicación. Quien respeta eso no escribe personajes: los hospeda." },
        { it: "Das verlangt eine Haltung, die man andächtig nennen könnte: dem eigenen Text zuhören, bevor man ihn regiert. Es gibt Autoren, die vor dem Schreiben eine Minute schweigen – nicht aus Aberglauben, sondern aus Respekt vor dem, was kommen will. Die Stille vor dem ersten Satz ist die Schwelle, an der die Figur entscheidet, ob sie heute mitkommt.", es: "Eso exige una actitud que podría llamarse devota: escuchar al propio texto antes de gobernarlo. Hay autores que guardan un minuto de silencio antes de escribir — no por superstición, sino por respeto hacia lo que quiere llegar. El silencio antes de la primera frase es el umbral donde el personaje decide si hoy te acompaña." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo obligar a los personajes a confesarse", "El silencio del personaje como espacio sagrado de la escritura", "Recetas de café para escritores"],
        answer: 1,
        why: "El título señala lo callado por el personaje: el texto medita el respeto por ese silencio.",
      },
      sequence: {
        instr: "Ordena los pasos de la actitud del escritor:",
        events: [
          "Du akzeptierst, dass jede Figur ein Geheimnis trägt, das du nicht kennst",
          "Du hörst dem eigenen Text zu, bevor du ihn regierst",
          "Du schweigst eine Minute vor dem ersten Satz – aus Respekt, nicht aus Aberglauben",
          "Die Figur entscheidet an der Schwelle, ob sie heute mitkommt",
          "Du beherbergst deine Figuren, statt sie zu erklären",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Bevor du heute weiterschreibst: Schau deine Figur an, ohne etwas von ihr zu verlangen. Sie steht vielleicht am Herd, sie sagt vielleicht nichts – genau dort beginnt ihr Leben. Frag dich nicht, was sie verbergen könnte, sondern womit sie beschäftigt ist. Lass sie eine Minute lang einfach da sein, in ihrer Küche, mit ihrem Kaffee. Wenn du danach weiterschreibst, wirst du merken, dass sie ein Stück eigenwilliger geworden ist – und ein Stück wahrer.",
        questions: [
          { q: "Wie schaust du deine Figur an?", kind: "literal", options: ["Ohne etwas von ihr zu verlangen", "Mit strenger Kritik", "Nur ganz kurz beim Umblättern"], answer: 0, why: "«Schau deine Figur an, ohne etwas von ihr zu verlangen»." },
          { q: "Was sollst du dich nicht fragen?", kind: "literal", options: ["Was sie verbergen könnte", "Womit sie beschäftigt ist", "Ob sie Kaffee trinkt"], answer: 0, why: "«Frag dich nicht, was sie verbergen könnte, sondern womit sie beschäftigt ist»." },
          { q: "Wie lange lässt du die Figur einfach da sein?", kind: "literal", options: ["Eine Minute", "Einen ganzen Tag", "Bis zum Ende des Kapitels"], answer: 0, why: "«Lass sie eine Minute lang einfach da sein»." },
          { q: "Was passiert nach dieser Übung mit der Figur?", kind: "inferencial", options: ["Sie wird eigenwilliger und wahrer", "Sie verschwindet aus dem Text", "Sie erklärt ihr Geheimnis"], answer: 0, why: "«ein Stück eigenwilliger geworden ist – und ein Stück wahrer»: del cierre del audio." },
        ],
      },
    },
  ],

  "de-cu-c2-05": [
    {
      id: "md-de-c2-05-1", theme: "relax mentale",
      title: "Die Antwort wartet einen Atemzug", titleEs: "La respuesta espera una respiración",
      minutes: 2,
      paragraphs: [
        { it: "In der Verhandlung kommt die Frage, auf die du vorbereitet warst – und trotzdem drängt die Antwort wie ein Pförtner ans Gitter. Halte sie einen Atemzug zurück. Nicht aus taktischer Kälte, sondern aus Genauigkeit: Eine Antwort, die eine Sekunde gewartet hat, ist oft eine andere als die, die sofort wollte.", es: "En la negociación llega la pregunta que esperabas — y aun así la respuesta empuja como un portero contra la reja. Retenla una respiración. No por frialdad táctica, sino por precisión: una respuesta que ha esperado un segundo suele ser distinta de la que quería salir de inmediato." },
        { it: "Der Atemzug ist die kürzeste Pause der Welt und die wirksamste. In ihm prüft sich, ob du die Frage verstanden oder nur gehört hast. Wer sofort antwortet, antwortet sich selbst; wer einen Atemzug wartet, antwortet der Frage. Und der Saal merkt den Unterschied – nicht als Verzögerung, sondern als Gewicht.", es: "La respiración es la pausa más corta del mundo y la más eficaz. En ella se comprueba si entendiste la pregunta o solo la oíste. Quien responde de inmediato se responde a sí mismo; quien espera una respiración, responde a la pregunta. Y la sala nota la diferencia — no como retraso, sino como peso." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Tácticas para ganar tiempo en una entrevista", "Retener la respuesta una respiración para responder con precisión", "Cómo evitar preguntas difíciles"],
        answer: 1,
        why: "El título retiene la respuesta un instante: el texto medita la pausa mínima antes de contestar.",
      },
      quiz: [
        { q: "Was drängt wie ein Pförtner ans Gitter?", kind: "literal", options: ["Die vorbereitete Antwort", "Die Frage des Gegners", "Der Stuhl im Saal"], answer: 0, why: "«die Frage, auf die du vorbereitet warst – und trotzdem drängt die Antwort wie ein Pförtner ans Gitter»." },
        { q: "Warum wartest du einen Atemzug?", kind: "inferencial", options: ["Aus Genauigkeit, nicht aus taktischer Kälte", "Um den Gegner zu provozieren", "Weil du die Antwort vergessen hast"], answer: 0, why: "«Nicht aus taktischer Kälte, sondern aus Genauigkeit»." },
        { q: "Was unterscheidet die wartende Antwort von der sofortigen?", kind: "critica", options: ["Sie antwortet der Frage statt dem eigenen Impuls", "Sie ist immer länger", "Sie vermeidet jede Festlegung"], answer: 0, why: "«Wer sofort antwortet, antwortet sich selbst; wer einen Atemzug wartet, antwortet der Frage»." },
      ],
      vf: [
        { text: "Eine Antwort, die eine Sekunde gewartet hat, ist oft eine andere.", value: true, why: "«ist oft eine andere als die, die sofort wollte»." },
        { text: "Der Atemzug ist die längste Pause der Verhandlung.", value: false, why: "«die kürzeste Pause der Welt», no la más larga." },
        { text: "Der Saal nimmt das Warten als Gewicht wahr, nicht als Verzögerung.", value: true, why: "«nicht als Verzögerung, sondern als Gewicht»." },
      ],
    },
    {
      id: "md-de-c2-05-2", theme: "meditazione",
      title: "Zwei Atemzüge über dem Entwurf", titleEs: "Dos respiraciones sobre el borrador",
      minutes: 2,
      paragraphs: [
        { it: "Bevor du den dritten Absatz weitergibst, halte inne: zwei Atemzüge über dem Blatt. Nicht um zu zweifeln – um zu prüfen, ob jeder Satz noch von dir ist. Die Erklärung von heute ist die Verhandlung von morgen; was du heute unterschreibst, wirst du morgen verteidigen. Zwei Atemzüge sind genug, um das zu bedenken.", es: "Antes de pasar el tercer párrafo, detente: dos respiraciones sobre la hoja. No para dudar — para comprobar si cada frase sigue siendo tuya. La declaración de hoy es la negociación de mañana; lo que firmes hoy lo defenderás mañana. Dos respiraciones bastan para pensarlo." },
        { it: "Das ist die Meditation des Diplomaten: keine Esoterik, sondern Verantwortung im Atemrhythmus. Beim ersten Atemzug lies den Absatz mit den Augen der anderen Seite; beim zweiten mit den eigenen. Bleiben beide Blicke ruhig, darf der Satz gehen. Tut sich ein Widerstand auf, hast du ihn früh gefunden – und frühe Zweifel sind die billigsten.", es: "Esa es la meditación del diplomático: nada de esoteria, sino responsabilidad al ritmo del aliento. Con la primera respiración lee el párrafo con los ojos de la otra parte; con la segunda, con los tuyos. Si ambas miradas quedan serenas, la frase puede salir. Si aparece una resistencia, la has encontrado temprano — y las dudas tempranas son las más baratas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Ejercicios de respiración para tribunales", "Revisar cada párrafo con dos respiraciones antes de entregarlo", "Cómo escribir borradores más rápido"],
        answer: 1,
        why: "Las dos respiraciones del título caen sobre el borrador: el texto enseña la pausa de revisión.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Zwei Atemzüge der Prüfung, bevor ein Absatz weitergegeben wird",
          "Diplomaten sollten schneller unterschreiben",
          "Zweifel gehören verboten",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Was du heute unterschreibst, wirst du morgen verteidigen",
          "Beim ersten Atemzug liest du mit den Augen der anderen Seite",
          "Frühe Zweifel sind die billigsten",
        ],
        distractors: [
          "Die andere Seite liest den Absatz zuerst laut vor",
          "Der zweite Atemzug dauert genau eine Minute",
          "Zweifel sollten erst nach der Unterschrift kommen",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Vor der Weitergabe hältst du zwei Atemzüge über dem Blatt inne.",
          "Was du heute unterschreibst, wirst du morgen verteidigen.",
          "Beim ersten Atemzug liest du mit den Augen der anderen Seite.",
          "Die gemeinsame Erklärung wird um 17 Uhr im Lichthof unterzeichnet.",
          "Frühe Zweifel sind die billigsten.",
        ],
        intruder: 3,
        why: "La hora de la firma es un dato protocolario: la lectura trabaja el gesto interior de revisar, no el calendario de la ceremonia.",
      },
    },
    {
      id: "md-de-c2-05-3", theme: "qui e ora",
      title: "Der Saal, bevor er laut wird", titleEs: "La sala antes de volverse ruidosa",
      minutes: 2,
      paragraphs: [
        { it: "Eine Stunde vor der Verhandlung ist der Saal leer: Stühle, Wasser, Mikrofon, Licht. Geh hinein und setz dich eine Weile. Hier ist noch nichts verhandelt, nichts verloren, nichts versprochen – der Raum wartet in dem Zustand, den du gleich vergessen wirst. Wer ihn so sieht, verhandelt anders.", es: "Una hora antes de la negociación la sala está vacía: sillas, agua, micrófono, luz. Entra y siéntate un rato. Aquí todavía no se ha negociado nada, nada se ha perdido, nada se ha prometido — el espacio espera en el estado que dentro de nada olvidarás. Quien lo ve así negocia de otra manera." },
        { it: "Der leere Saal ist eine Übung: Er zeigt dir den Moment vor dem Moment. Alles, was gleich geschieht, geschieht in einem Raum, der eine Stunde vorher einfach da war – still, ordentlich, ohne Meinung. Nimm einen Atemzug mit. Wenn die Tür aufgeht und die Delegationen kommen, trägst du die Stille des leeren Saals wie eine zweite Weste unter dem Anzug.", es: "La sala vacía es un ejercicio: te muestra el momento antes del momento. Todo lo que ocurra ahora ocurrirá en un espacio que una hora antes simplemente estaba ahí — callado, ordenado, sin opinión. Llévate una respiración. Cuando la puerta se abra y lleguen las delegaciones, llevas la calma de la sala vacía como un segundo chaleco bajo el traje." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La logística de una sala de conferencias", "Contemplar la sala vacía antes de la negociación", "Cómo preparar el agua y el micrófono"],
        answer: 1,
        why: "La sala «antes de volverse ruidosa» es el título: el texto medita el momento previo, no la organización material.",
      },
      sequence: {
        instr: "Ordena los pasos del ejercicio:",
        events: [
          "Eine Stunde vor der Verhandlung gehst du in den leeren Saal",
          "Du setzt dich eine Weile zwischen Stühle, Wasser und Mikrofon",
          "Du nimmst einen Atemzug in die Stille vor dem Moment mit",
          "Die Tür geht auf, und die Delegationen kommen",
          "Du trägst die Stille des leeren Saals unter dem Anzug",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Stell dir vor, du sitzt in einem Raum, in dem gleich Worte fallen werden, die zählen. Noch ist es still. Schau dir an, was da ist: Tische, Wasser, Licht, vielleicht ein Zettel, der noch nichts bedeutet. Atme einmal ganz in diesen Raum hinein. Alles, was gleich geschieht, braucht deine Ruhe nicht zu stören – der Raum bleibt derselbe, mit oder ohne Verhandlung. Wenn du das weißt, kann dich keine Frage aus deiner Stille werfen.",
        questions: [
          { q: "Was ist noch im Raum, bevor er laut wird?", kind: "literal", options: ["Tische, Wasser, Licht, ein bedeutungsloser Zettel", "Die Delegationen der letzten Runde", "Der Applaus des Vortags"], answer: 0, why: "«Tische, Wasser, Licht, vielleicht ein Zettel, der noch nichts bedeutet»." },
          { q: "Wozu atmest du in den Raum hinein?", kind: "literal", options: ["Um die Stille des Raums aufzunehmen", "Um den Raum zu kühlen", "Um Zeit zu schinden"], answer: 0, why: "«Atme einmal ganz in diesen Raum hinein»: para impregnarte de su calma." },
          { q: "Was kann dich nach dieser Übung keine Frage aus der Ruhe werfen?", kind: "inferencial", options: ["Das Wissen, dass der Raum derselbe bleibt", "Das Mikrofon auf dem Tisch", "Die Stühle der Delegationen"], answer: 0, why: "«der Raum bleibt derselbe, mit oder ohne Verhandlung»: la calma depende del marco estable." },
          { q: "Was meint «die Stille wie eine zweite Weste tragen»?", kind: "inferencial", options: ["Sie bleibt unsichtbar unter dem Auftritt erhalten", "Sie wird am Ende verteilt", "Sie ersetzt das Wasser auf dem Tisch"], answer: 0, why: "La metáfora de la prenda interior: la calma se lleva puesta por debajo, sin exhibirse." },
        ],
      },
    },
  ],

  "de-cu-c2-06": [
    {
      id: "md-de-c2-06-1", theme: "relax fisico",
      title: "Nur was die Hand tut", titleEs: "Solo lo que hace la mano",
      minutes: 2,
      paragraphs: [
        { it: "Der Regisseur sagt: Traurigkeit kann ich nicht drehen. Er hat recht – die Kamera sieht nur, was die Hand tut: Sie zögert am Türgriff, sie legt sich über die Augen, sie bleibt auf dem Tisch liegen, als gehöre sie niemandem. Wenn du wissen willst, was du fühlst, fang bei der Hand an.", es: "El director dice: la tristeza no se puede rodar. Tiene razón — la cámara solo ve lo que hace la mano: duda en el pomo de la puerta, se posa sobre los ojos, se queda en la mesa como si no perteneciera a nadie. Si quieres saber qué sientes, empieza por la mano." },
        { it: "Das ist auch eine Anweisung für den Körper im echten Leben. Emotion ohne Bewegung ist ein Gewitter ohne Regen: Sie lädt sich auf und findet kein Ventil. Die Übung heißt Umsetzung: Benenne das Gefühl, finde die kleinste dazugehörige Geste – und mach sie. Die Hand öffnet sich, und einen Atemzug später öffnet sich oft noch etwas anderes.", es: "Es también una instrucción para el cuerpo en la vida real. La emoción sin movimiento es una tormenta sin lluvia: se carga y no encuentra salida. El ejercicio se llama traducción: nombra el sentimiento, encuentra su gesto más pequeño — y hazlo. La mano se abre, y una respiración después suele abrirse algo más." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de cámara para principiantes", "Convertir la emoción en el gesto mínimo del cuerpo", "La historia del cine mudo alemán"],
        answer: 1,
        why: "«Nur was die Hand tut» traduce el sentimiento a gesto visible: cine y cuerpo, no técnica de rodaje.",
      },
      quiz: [
        { q: "Was kann die Kamera laut Text nicht drehen?", kind: "literal", options: ["Traurigkeit", "Türen", "Tische"], answer: 0, why: "«Traurigkeit kann ich nicht drehen»: la cámara no rueda la tristeza." },
        { q: "Woran erkennt der Zuschauer die Traurigkeit der Figur?", kind: "inferencial", options: ["An der Hand, die am Türgriff zögert", "Am Wort «traurig» im Dialog", "An der Musik am Anfang"], answer: 0, why: "Si la cámara solo rueda lo que la mano hace, la emoción llega por el gesto, no por la palabra." },
        { q: "Was heißt «Umsetzung» in der Übung des Textes?", kind: "critica", options: ["Das Gefühl benennen und die kleinste dazugehörige Geste machen", "Das Gefühl bis zum Abend speichern", "Andere nach dem eigenen Gefühl fragen"], answer: 0, why: "El segundo párrafo define el ejercicio: nombrar el sentimiento y ejecutar su gesto mínimo." },
      ],
      vf: [
        { text: "Die Hand, die am Türgriff zögert, ist eine filmbare Geste.", value: true, why: "«Sie zögert am Türgriff»: exactamente el tipo de gesto visible." },
        { text: "Die Kamera sieht Gefühle, wenn der Text sie benennt.", value: false, why: "El texto sostiene que solo se filma lo que la mano hace: el sentimiento nombrado no se rueda." },
        { text: "Nach der kleinen Geste öffnet sich oft noch etwas anderes.", value: true, why: "«einen Atemzug später öffnet sich oft noch etwas anderes»." },
      ],
    },
    {
      id: "md-de-c2-06-2", theme: "qui e ora",
      title: "Dämmerlicht und Staub", titleEs: "Luz crepuscular y polvo",
      minutes: 2,
      paragraphs: [
        { it: "Die Regieanweisung, die man nie vergisst, enthält kein Gefühl: Dämmerlicht. Staub in der Luft. Das ist alles – und es ist die ganze Szene. Der Gegenwart sieht man nur, wenn man sie wie eine Kamera beschreibt: Licht, Staub, eine Hand, ein Glas, das Schwitzen einer Fensterscheibe.", es: "La acotación que nunca se olvida no contiene ningún sentimiento: luz crepuscular. Polvo en el aire. Eso es todo — y es la escena entera. Al presente solo se lo ve cuando se lo describe como una cámara: luz, polvo, una mano, un vaso, el vaho de un cristal." },
        { it: "Versuch es eine Minute lang: Beschreib deinen Moment ohne jede Bewertung. Nicht «schöner Nachmittag», sondern: Der Schatten der Lampe erreicht die Tischkante; jemand klappert mit Tassen. Sobald du beschreibst statt urteilst, bist du da. Die Kamera lügt nicht – und wer durch sie schaut, lernt das Sehen, das nichts wissen will.", es: "Inténtalo un minuto: describe tu momento sin ningún juicio. No «tarde bonita», sino: la sombra de la lámpara llega al borde de la mesa; alguien hace ruido con tazas. En cuanto describes en vez de juzgar, estás ahí. La cámara no miente — y quien mira a través de ella aprende la mirada que no quiere saber nada." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo limpiar el polvo antes de una escena", "Describir el momento como una cámara, sin juzgarlo", "Técnicas de iluminación cinematográfica"],
        answer: 1,
        why: "Luz y polvo del título son la acotación mínima: el texto entrena la descripción sin juicio.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Beschreiben statt urteilen: die Kamera als Schule des Augenblicks",
          "Regieanweisungen sollten Gefühle benennen",
          "Staub ist ein Zeichen für schlechte Reinigungskräfte",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Die unvergessliche Regieanweisung enthält kein Gefühl",
          "Der Schatten der Lampe erreicht die Tischkante",
          "Wer beschreibt statt urteilt, ist da",
        ],
        distractors: [
          "Die Szene spielt in einem Café am Morgen",
          "Die Kamera wurde gerade repariert",
          "Jemand urteilt laut über den Nachmittag",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Dämmerlicht. Staub in der Luft. Das ist die ganze Szene.",
          "Du beschreibst deinen Moment ohne jede Bewertung.",
          "Der Schatten der Lampe erreicht die Tischkante.",
          "Der Drehplan sieht für Szene zwölf zwei Kameras vor.",
          "Wer durch die Kamera schaut, lernt das Sehen ohne Wissen-Wollen.",
        ],
        intruder: 3,
        why: "El plan de rodaje con dos cámaras es técnica de producción: la lectura entrena la mirada, no el equipo.",
      },
    },
    {
      id: "md-de-c2-06-3", theme: "meditazione",
      title: "Das Streichen als Loslassen", titleEs: "Tachar como soltar",
      minutes: 2,
      paragraphs: [
        { it: "Am Ende jedes Schreibtags liegt mehr Text auf dem Boden als auf dem Blatt – und genau so ist es richtig. Das Streichen ist keine Vernichtung; es ist Auswahl. Jedes gestrichene Wort hat gedient: Es hat den Weg zum Satz gebahnt, der jetzt steht. Wer das verstanden hat, streicht ohne Trauer.", es: "Al final de cada jornada de escritura hay más texto en el suelo que en la hoja — y exactamente así debe ser. Tachar no es destrucción: es selección. Cada palabra tachada ha servido: abrió el camino a la frase que ahora queda. Quien lo entiende tacha sin tristeza." },
        { it: "Nimm einen Satz, den du liebst, und streich ihn. Wenn der Absatz danach atmet, war die Liebe berechtigt – die Liebe zum Text, nicht zum Satz. Das ist die Meditation des Lektorats: loslassen, was sich gut anfühlt, damit übrig bleibt, was gut ist. Der Papierkorb ist kein Friedhof; er ist ein Kompost.", es: "Toma una frase que ames y táchala. Si el párrafo respira después, el amor estaba justificado — el amor al texto, no a la frase. Esa es la meditación del lektorat: soltar lo que se siente bien para que quede lo que está bien. La papelera no es un cementerio: es un compost." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo reciclar papel de guion", "Tachar como ejercicio de desapego y selección", "Un método para escribir sin corregir"],
        answer: 1,
        why: "El título iguala tachar con soltar: el texto convierte la corrección en meditación.",
      },
      sequence: {
        instr: "Ordena los pasos de la meditación del lektorat:",
        events: [
          "Am Schreibtag liegt mehr Text auf dem Boden als auf dem Blatt",
          "Du erkennst, dass jedes gestrichene Wort dem stehenden Satz gedient hat",
          "Du streichst einen Satz, den du liebst",
          "Du prüfst, ob der Absatz danach atmet",
          "Der Papierkorb erweist sich nicht als Friedhof, sondern als Kompost",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Heute eine kleine Übung für den Abend: Nimm die Seite, an der du hängst, und lies sie laut. Wenn du an einer Stelle stolperst – nicht über die Bedeutung, sondern über den Klang –, dann streich das erste Wort, das du dafür hältst. Nur eins. Lies wieder. Oft ist es das Wort, das du am liebsten hattest, das die Zeile schwer macht. Streichen ist kein Verlust: Es ist ein Geschenk an den Leser, der schneller gehen will als du.",
        questions: [
          { q: "Woran erkennst du die problematische Stelle?", kind: "literal", options: ["Du stolperst über den Klang, nicht über die Bedeutung", "Du vergisst den Text", "Du liest schneller als sonst"], answer: 0, why: "«nicht über die Bedeutung, sondern über den Klang»." },
          { q: "Wie viele Wörter streichst du zuerst?", kind: "literal", options: ["Nur eins", "Alle Adjektive", "Den ganzen Absatz"], answer: 0, why: "«streich das erste Wort, das du dafür hältst. Nur eins»." },
          { q: "Welches Wort ist oft das störende?", kind: "inferencial", options: ["Das Wort, das du am liebsten hattest", "Das letzte Wort des Satzes", "Ein Wort, das du nie benutzt"], answer: 0, why: "«Oft ist es das Wort, das du am liebsten hattest, das die Zeile schwer macht»." },
          { q: "Warum ist Streichen «ein Geschenk an den Leser»?", kind: "inferencial", options: ["Weil der Leser schneller gehen will als du", "Weil der Leser nichts versteht", "Weil der Leser nur kurze Texte mag"], answer: 0, why: "«ein Geschenk an den Leser, der schneller gehen will als du»: la cortesía del recorte." },
        ],
      },
    },
  ],

  "de-cu-c2-07": [
    {
      id: "md-de-c2-07-1", theme: "spiritualità",
      title: "Der ehrlichste Klang", titleEs: "El sonido más honesto",
      minutes: 2,
      paragraphs: [
        { it: "Ein alter Redenschreiber sagt: Ehrlichkeit ist der einzige Klang, dessen niemand müde wird. Er meint keine Moralpredigt – er meint eine körperliche Erfahrung: Die Stimme, die nicht verstellen muss, kann lange sprechen, ohne sich und andere zu ermüden. Wahrhaftigkeit ist hier eine Frage der Energie.", es: "Un viejo redactor de discursos dice: la honestidad es el único sonido del que nadie se cansa. No predica moral — describe una experiencia corporal: la voz que no tiene que disimular puede hablar largo tiempo sin agotarse a sí misma ni a los demás. La veracidad es aquí una cuestión de energía." },
        { it: "Probiere es mit einem Satz, den du wirklich meinst: Sag ihn dreimal – übertrieben, geflüstert, normal. Beim dritten Mal wirst du spüren, wie der Satz ohne Mühe getragen wird. Das ist keine Rhetorik; das ist Ausrichtung. Wer das Innere und das Gesagte zur Deckung bringt, muss keine Kraft mehr aufwenden, um glaubwürdig zu wirken – die Deckung arbeitet von allein.", es: "Pruébalo con una frase que realmente signifiques: dila tres veces — exagerada, susurrada, normal. La tercera vez sentirás cómo la frase se sostiene sin esfuerzo. Eso no es retórica: es alineación. Quien hace coincidir lo interior con lo dicho ya no necesita fuerza para parecer creíble — la coincidencia trabaja sola." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Trucos retóricos para convencer", "La honestidad como energía de la voz que nunca cansa", "Cómo hablar más alto sin cansarse"],
        answer: 1,
        why: "El «sonido más honesto» del título apunta a la congruencia entre voz y verdad, no al volumen.",
      },
      quiz: [
        { q: "Welcher Klang ermüdet niemanden?", kind: "literal", options: ["Der der Ehrlichkeit", "Der der lauten Stimme", "Der der langen Sätze"], answer: 0, why: "«Ehrlichkeit ist der einzige Klang, dessen niemand müde wird»." },
        { q: "Warum ist Wahrhaftigkeit «eine Frage der Energie»?", kind: "inferencial", options: ["Weil die unverstellte Stimme ohne Mühe tragen kann", "Weil Lügen mehr Wörter brauchen", "Weil Ehrlichkeit immer leise ist"], answer: 0, why: "«Die Stimme, die nicht verstellen muss, kann lange sprechen, ohne sich zu ermüden»." },
        { q: "Was heißt «Ausrichtung» im Text?", kind: "critica", options: ["Das Innere und das Gesagte zur Deckung bringen", "Die Stimme nach dem Publikum richten", "Den Text auswendig lernen"], answer: 0, why: "«Wer das Innere und das Gesagte zur Deckung bringt»: la congruencia sustituye al esfuerzo retórico." },
      ],
      vf: [
        { text: "Du sollst den ehrlichen Satz dreimal sagen: übertrieben, geflüstert, normal.", value: true, why: "«Sag ihn dreimal – übertrieben, geflüstert, normal»." },
        { text: "Beim geflüsterten Mal trägt der Satz am leichtesten.", value: false, why: "Es en el tercero (normal): «beim dritten Mal wirst du spüren, wie der Satz ohne Mühe getragen wird»." },
        { text: "Glaubwürdigkeit ohne Deckung kostet Kraft.", value: true, why: "Sin congruencia hay que «emplear fuerza para parecer creíble»." },
      ],
    },
    {
      id: "md-de-c2-07-2", theme: "relax mentale",
      title: "Drei Minuten vor dem Mikrofon", titleEs: "Tres minutos ante el micrófono",
      minutes: 2,
      paragraphs: [
        { it: "Der Kandidat hat drei Minuten – und einen Kopf, der in ihnen zehnmal abreist: zur Antwort, die er geben wollte; zur Frage, die kommen könnte; zum Frühstück, das ihm im Magen liegt. Aufmerksamkeit ist keine Zauberei: Sie ist ein Muskel, der gelernt hat, zurückzukehren.", es: "El candidato tiene tres minutos — y una cabeza que en ellos se escapa diez veces: hacia la respuesta que quería dar; hacia la pregunta que podría llegar; hacia el desayuno que lleva en el estómago. La atención no es magia: es un músculo que ha aprendido a volver." },
        { it: "Die Übung: Benenne leise, wo du gerade warst – «Antwort», «Angst», «Mittagessen» –, und komm zurück. Keine Strafe, keine Debatte: nur Benennen und Zurückkommen. Nach der zehnten Rückkehr ist der Kopf stiller als nach jedem Meditationslehrgang, denn er hat verstanden, dass die Rückkehr immer möglich ist. Wer zurückkommen kann, kann auch bleiben.", es: "El ejercicio: nombra en voz baja dónde estabas — «respuesta», «miedo», «comida» — y vuelve. Sin castigo, sin debate: solo nombrar y volver. Después del décimo regreso la cabeza está más quieta que tras cualquier curso de meditación, porque ha entendido que la vuelta siempre es posible. Quien sabe volver, sabe también quedarse." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo memorizar un discurso de tres minutos", "Entrenar la atención como músculo que aprende a volver", "Dieta recomendada antes de hablar en público"],
        answer: 1,
        why: "Los tres minutos ante el micrófono son el marco: el texto entrena el músculo de la atención.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Aufmerksamkeit ist ein Muskel, der zurückkehren lernt",
          "Redner sollten längere Pausen zwischen Sätzen machen",
          "Drei Minuten sind zu kurz für jede Rede",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Der Kopf des Kandidaten reist in drei Minuten zehnmal ab",
          "Du benennst leise, wo du gerade warst",
          "Wer zurückkommen kann, kann auch bleiben",
        ],
        distractors: [
          "Der Kandidat isst während der Rede sein Frühstück",
          "Die Rückkehr gelingt nur mit einem Trainer",
          "Der Kopf soll gar nicht mehr abreisen",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Der Kopf des Kandidaten reist in drei Minuten zehnmal ab.",
          "Du benennst leise, wo du gerade warst: «Antwort», «Angst», «Mittagessen».",
          "Es gibt keine Strafe, nur Benennen und Zurückkommen.",
          "Der Marktplatz ist dienstags und freitags von 7 bis 13 Uhr geöffnet.",
          "Wer zurückkommen kann, kann auch bleiben.",
        ],
        intruder: 3,
        why: "El horario del mercado es información municipal: la lectura entrena la atención del orador, no los días de feria.",
      },
    },
    {
      id: "md-de-c2-07-3", theme: "relax fisico",
      title: "Die Füße auf dem Marktplatz", titleEs: "Los pies en la plaza",
      minutes: 2,
      paragraphs: [
        { it: "Vor der Rede wandert die Nervosität nach oben: in die Kehle, in die Hände, in die Stirn. Gib ihr eine Adresse unten: die Füße. Steh mit beiden Sohlen voll auf dem Stein, spüre das Gewicht, das der Boden zurückgibt, und lass die Knie weich. Wer steht wie ein Pfahl, klingt wie ein Pfahl.", es: "Antes del discurso, el nervio migra hacia arriba: a la garganta, a las manos, a la frente. Dale una dirección abajo: los pies. Quédate con las dos plantas enteras sobre la piedra, siente el peso que el suelo devuelve y deja blandas las rodillas. Quien está como un poste suena como un poste." },
        { it: "Die Übung dauert eine Minute: Gewicht nach vorne, nach hinten, dann in die Mitte – und atmen. Der Marktplatz hat schon tausend Reden getragen; er trägt auch deine. Wenn das Mikrofon angeht, musst du nicht mehr balancieren: Du stehst schon. Und eine Stimme, die aus einem stehenden Körper kommt, muss nicht schreien, um weit zu tragen.", es: "El ejercicio dura un minuto: peso adelante, atrás, luego al centro — y respirar. La plaza ya sostuvo mil discursos; también sostiene el tuyo. Cuando se encienda el micrófono ya no tienes que equilibrarte: ya estás de pie. Y una voz que sale de un cuerpo plantado no tiene que gritar para llegar lejos." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo elegir zapatos para hablar en público", "Anclarse en los pies antes de hablar en la plaza", "La acústica de las plazas alemanas"],
        answer: 1,
        why: "Los pies del título son el ancla corporal del orador, no el calzado ni la acústica.",
      },
      sequence: {
        instr: "Ordena los pasos del anclaje:",
        events: [
          "Die Nervosität wandert vor der Rede nach oben",
          "Du gibst ihr eine Adresse unten: die Füße auf dem Stein",
          "Du verlagerst das Gewicht nach vorne, nach hinten, dann in die Mitte",
          "Du atmest und lässt die Knie weich",
          "Die Stimme aus dem stehenden Körper trägt weit, ohne zu schreien",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Stell dich hin, so wie du gleich vor den Menschen stehst. Beide Sohlen ganz auf dem Boden. Jetzt das Gewicht langsam nach vorne – Zehen, Ballen –, dann zurück in die Fersen, und dann in die Mitte, dorthin, wo der Körper von selbst ruht. Spüre, wie der Boden zurückdrückt: Er hält dich, ohne dass du es merkst. Lass die Knie leicht, nicht steif. Wenn du so stehst, kommt die Stimme von ganz unten – und sie muss nicht laut sein, um die letzte Reihe zu erreichen.",
        questions: [
          { q: "Wohin verlagerst du das Gewicht zuerst?", kind: "literal", options: ["Nach vorne, zu Zehen und Ballen", "Nur nach rechts", "Ganz nach oben in den Kopf"], answer: 0, why: "«das Gewicht langsam nach vorne – Zehen, Ballen»." },
          { q: "Was machen die Knie?", kind: "literal", options: ["Sie bleiben leicht, nicht steif", "Sie werden eingeklemmt", "Sie bewegen sich schnell"], answer: 0, why: "«Lass die Knie leicht, nicht steif»." },
          { q: "Was gibt der Boden zurück?", kind: "inferencial", options: ["Halt, den du nicht merken musst", "Einen Schubs nach vorne", "Wärme für die Stimme"], answer: 0, why: "«Er hält dich, ohne dass du es merkst»: el sostén es pasivo." },
          { q: "Warum muss die Stimme nicht laut sein?", kind: "inferencial", options: ["Weil sie von ganz unten getragen wird", "Weil das Mikrofon alles macht", "Weil die letzte Reihe näher rückt"], answer: 0, why: "«die Stimme kommt von ganz unten»: el apoyo corporal reemplaza al volumen." },
        ],
      },
    },
  ],

  "de-cu-c2-08": [
    {
      id: "md-de-c2-08-1", theme: "meditazione",
      title: "Der Satz muss atmen – du auch", titleEs: "La frase debe respirar — tú también",
      minutes: 2,
      paragraphs: [
        { it: "Der alte Übersetzer prüft jede Seite mit einer einzigen Frage: Atmet der Satz? Du kannst die Frage auf dich selbst ausweiten: atmest du? Zwischen dem Lesen des Originals und dem Schreiben der Fassung liegt ein Atemzug – und in ihm entscheidet sich, ob du übersetzt oder nur hinübergerettest.", es: "El viejo traductor comprueba cada página con una sola pregunta: ¿respira la frase? Puedes extender la pregunta a ti mismo: ¿respiras tú? Entre la lectura del original y la escritura de la versión hay una respiración — y en ella se decide si traduces o solo pones a salvo." },
        { it: "Übersetzen ist lieb gewordenes Zerlegen: Du nimmst den Satz auseinander wie ein Uhrwerk, legst die Teile auf, und wenn du wieder zusammensetzt, darf kein Teil fehlen – aber der Atem muss fließen. Wer ohne Pause arbeitet, schreibt Sätze, die der eigene Körper nicht halten kann. Der Atemzug zwischen den Sprachen ist keine Pause der Faulheit; er ist der Ort, wo beide Sprachen sich ansehen.", es: "Traducir es desmontar por amor: abres la frase como un reloj, pones las piezas sobre la mesa y, al volver a montar, no puede faltar ninguna — pero el aliento debe fluir. Quien trabaja sin pausa escribe frases que su propio cuerpo no aguanta. La respiración entre las dos lenguas no es pereza: es el lugar donde ambas se miran." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de relojería suiza", "La respiración del traductor entre dos lenguas", "Cómo traducir más rápido por hora"],
        answer: 1,
        why: "El título iguala la frase que respira con el traductor que respira: pausa entre original y versión.",
      },
      quiz: [
        { q: "Mit welcher Frage prüft der alte Übersetzer jede Seite?", kind: "literal", options: ["Atmet der Satz?", "Wie lang ist der Satz?", "Wem gehört der Satz?"], answer: 0, why: "«Er prüft jede Seite mit einer einzigen Frage: Atmet der Satz?»" },
        { q: "Was entscheidet sich im Atemzug zwischen Lesen und Schreiben?", kind: "inferencial", options: ["Ob du übersetzt oder nur hinübergerettest", "Wie schnell du arbeitest", "Welche Sprache du zuerst gelernt hast"], answer: 0, why: "«in ihm entscheidet sich, ob du übersetzt oder nur hinübergerettest»." },
        { q: "Was ist «lieb gewordenes Zerlegen»?", kind: "critica", options: ["Das Uhrwerk auseinandernehmen, ohne dass ein Teil fehlt", "Den Text absichtlich beschädigen", "Den Satz wörtlich kopieren"], answer: 0, why: "La metáfora del reloj: desmontar con amor y volver a montar sin perder piezas ni aliento." },
      ],
      vf: [
        { text: "Wer ohne Pause arbeitet, schreibt Sätze, die der Körper nicht halten kann.", value: true, why: "«schreibt Sätze, die der eigene Körper nicht halten kann»." },
        { text: "Der Atemzug zwischen den Sprachen ist eine Pause der Faulheit.", value: false, why: "«keine Pause der Faulheit; er ist der Ort, wo beide Sprachen sich ansehen»." },
        { text: "Beim Zusammensetzen darf kein Teil fehlen.", value: true, why: "«wenn du wieder zusammensetzt, darf kein Teil fehlen»." },
      ],
    },
    {
      id: "md-de-c2-08-2", theme: "spiritualità",
      title: "Treue zur Wirkung", titleEs: "Fidelidad al efecto",
      minutes: 2,
      paragraphs: [
        { it: "Am Ende entscheidet nicht die Treue zum Wort, sondern die Treue zur Wirkung. Das ist fast ein Gelübde: Du dienst einem Text, der nicht in deiner Sprache geboren wurde, und versprichst ihm, dass er in deiner Sprache denselben Schmerz, dieselbe Heiterkeit, dieselbe Stille erzeugt.", es: "Al final no decide la fidelidad a la palabra, sino la fidelidad al efecto. Es casi un voto: sirves a un texto que no nació en tu lengua y le prometes que en tu lengua producirá el mismo dolor, la misma alegría, el mismo silencio." },
        { it: "Dieser Dienst hat etwas Stilles, fast Religiöses ohne Religion: Du wirst unsichtbar, damit ein anderer sichtbar bleibt. Der Name auf dem Cover ist dein – und trotzdem gehört der Satz dem Original. Wer diese Demut nicht als Verlust versteht, sondern als Form der Nähe, übersetzt mit anderem Atem: nicht eifrig, sondern getreu.", es: "Este servicio tiene algo callado, casi religioso sin religión: te vuelves invisible para que otro siga visible. El nombre en la portada es tuyo — y sin embargo la frase pertenece al original. Quien entiende esta humildad no como pérdida sino como forma de cercanía, traduce con otro aliento: no diligente, sino fiel." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los derechos de autor del traductor", "La traducción como servicio silencioso al efecto del original", "Cómo firmar contratos editoriales"],
        answer: 1,
        why: "La «fidelidad al efecto» del título define el voto del traductor, no su contrato.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Übersetzen als stiller Dienst an der Wirkung des Originals",
          "Der Übersetzer sollte seinen Namen vom Cover entfernen",
          "Wörtliche Treue ist die höchste Tugend",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Am Ende entscheidet die Treue zur Wirkung",
          "Du wirst unsichtbar, damit ein anderer sichtbar bleibt",
          "Demut ist hier eine Form der Nähe",
        ],
        distractors: [
          "Der Übersetzer erfindet ein besseres Ende",
          "Der Name auf dem Cover gehört dem Originalautor",
          "Stillsein ist beim Übersetzen verboten",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Am Ende entscheidet die Treue zur Wirkung, nicht die zum Wort.",
          "Du dienst einem Text, der nicht in deiner Sprache geboren wurde.",
          "Du wirst unsichtbar, damit ein anderer sichtbar bleibt.",
          "Der Übersetzervertrag läuft über zwei Jahre und dreihundert Seiten.",
          "Demut ist hier eine Form der Nähe.",
        ],
        intruder: 3,
        why: "La duración del contrato es un dato profesional: el texto medita el servicio silencioso, no las condiciones laborales.",
      },
    },
    {
      id: "md-de-c2-08-3", theme: "qui e ora",
      title: "Ein Satz, eine Entscheidung", titleEs: "Una frase, una decisión",
      minutes: 2,
      paragraphs: [
        { it: "Übersetzen besteht aus tausend kleinen Entscheidungen, aber du triffst sie nie tausend gleichzeitig: Du triffst immer eine. Genau diese eine. Der Satz vor dir ist das ganze Universum der Arbeit – der nächste wartet geduldig in der Reihe, wie ein Passagier, der weiß, dass er mitkommt.", es: "Traducir se compone de mil pequeñas decisiones, pero nunca tomas mil a la vez: tomas siempre una. Exactamente esta. La frase que tienes delante es el universo entero del trabajo — la siguiente espera paciente en la fila, como un pasajero que sabe que viajará." },
        { it: "Das ist die Gegenwart des Handwerks: kein Blick auf den Berg von Seiten, kein Blick auf die Uhr, nur das Holz in der Hand und das eine Scharnier, das jetzt eingepasst wird. Wer so arbeitet, erlebt den Nachmittag anders – nicht kürzer, aber dichter. Und am Abend zählt die Zahl der Sätze weniger als die Ruhe, mit der du sie behandelt hast.", es: "Esa es la presencia del oficio: sin mirar la montaña de páginas, sin mirar el reloj, solo la madera en la mano y la bisagra que ahora encaja. Quien así trabaja vive la tarde de otro modo — no más corta, pero más densa. Y por la noche cuenta menos el número de frases que la calma con que las trataste." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo calcular tarifas por página traducida", "Trabajar frase a frase, presente a presente", "La historia del oficio de traducir"],
        answer: 1,
        why: "Una frase, una decisión: el título reduce el trabajo al presente de cada enunciado.",
      },
      sequence: {
        instr: "Ordena los pasos de la presencia del traductor:",
        events: [
          "Du erkennst, dass du trotz tausend Entscheidungen immer nur eine triffst",
          "Du behandelst den Satz vor dir als das ganze Universum der Arbeit",
          "Du verzichtest auf den Blick auf den Berg von Seiten und auf die Uhr",
          "Du passt das eine Scharnier in der Hand ein",
          "Am Abend zählt die Ruhe mehr als die Zahl der Sätze",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Nimm dir einen Moment vor dem Weiterarbeiten. Ein einziger Satz liegt vor dir – nicht das Kapitel, nicht der Vertrag, nur dieser Satz. Atme einmal. Lies ihn, als wäre er der erste, den du je übersetzt hast: langsam, ohne Ziel. Frag ihn, was er will – Tempo, Klang, Stille? Erst wenn der Satz geantwortet hat, schreibst du. Auf diese Weise wird aus einem Arbeitstag eine Reihe von Begegnungen, und die Zeit, die du brauchst, ist plötzlich die Zeit, die du hast.",
        questions: [
          { q: "Was liegt vor dir?", kind: "literal", options: ["Ein einziger Satz", "Das ganze Kapitel", "Der fertige Vertrag"], answer: 0, why: "«Ein einziger Satz liegt vor dir – nicht das Kapitel»." },
          { q: "Wann schreibst du?", kind: "literal", options: ["Erst wenn der Satz geantwortet hat", "Sofort nach dem ersten Lesen", "Nach einer festen Pause von fünf Minuten"], answer: 0, why: "«Erst wenn der Satz geantwortet hat, schreibst du»." },
          { q: "Was fragst du den Satz?", kind: "literal", options: ["Was er will: Tempo, Klang, Stille", "Wie viel er kosten wird", "Ob er Spanisch ist"], answer: 0, why: "«Frag ihn, was er will – Tempo, Klang, Stille?»" },
          { q: "Was verwandelt sich durch diese Arbeitsweise?", kind: "inferencial", options: ["Der Arbeitstag wird eine Reihe von Begegnungen", "Der Satz wird kürzer", "Die Sprache verschwindet"], answer: 0, why: "«wird aus einem Arbeitstag eine Reihe von Begegnungen»." },
        ],
      },
    },
  ],

  "de-cu-c2-09": [
    {
      id: "md-de-c2-09-1", theme: "relax fisico",
      title: "Der rote Bleistift wird warm", titleEs: "El lápiz rojo se calienta",
      minutes: 2,
      paragraphs: [
        { it: "Nach der dritten Seite von Herrn Möllers Behördenprosa meldet sich die Hand: Sie hält den roten Bleistift fest, wie ein Beamter seinen Stempel hält. Leg ihn eine Minute auf den Tisch. Spreize die Finger, roll den Stift langsam zwischen den Handflächen und spüre das Holz, das dabei warm wird. Der Griff hat die ganze Verwaltung mitgetragen; jetzt darf er Feierabend machen.", es: "Tras la tercera página de la prosa ministerial de Herr Möller, la mano se hace notar: sujeta el lápiz rojo con la firmeza con que un funcionario sujeta su sello. Déjalo un minuto sobre la mesa. Abre los dedos, haz rodar el lápiz despacio entre las palmas y siente la madera, que se va calentando. El agarre ha sostenido entera la administración; ahora merece su fin de jornada." },
        { it: "Dann die Augen: Nach den langen Nominalketten sind sie zu einem schmalen Sehschlitz zusammengesunken. Schau aus dem Fenster auf die Dächer von Schwabing, weit hinaus, dann zurück auf den Punkt vor dir – und wieder hinaus. Der Nacken, der sich über das Manuskript gebeugt hat, richtet sich mit einer langsamen Drehung auf. Zuletzt der Kiefer: Er hat beim Lesen von Amtsdeutsch mitverwaltet. Lass ihn locker. Eine Hand, die eine Minute lang nichts gehalten hat, streicht danach leichter durch die Zeilen.", es: "Luego los ojos: tras las largas cadenas de sustantivos se han hundido hasta una rendija estrecha. Mira por la ventana los tejados de Schwabing, lejos; vuelve al punto de delante — y otra vez lejos. La nuca, encorvada sobre el manuscrito, se endereza con un giro lento. Al final la mandíbula: ha co-administrado mientras leías prosa ministerial. Déjala floja. Una mano que un minuto no ha sujetado nada pasa después con más ligereza por las líneas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La ergonomía de las mesas de corrección", "Soltar mano, ojos y cuello después de horas de lápiz rojo", "La vida de un funcionario jubilado que escribe"],
        answer: 1,
        why: "El lápiz rojo que se calienta apunta a la mano que lo sujeta: relajación física tras la corrección, no ergonomía ni biografía.",
      },
      quiz: [
        { q: "Mit welchem Vergleich beschreibt der Text den Griff um den Bleistift?", kind: "literal", options: ["Wie ein Beamter seinen Stempel hält", "Wie ein Maler seinen Pinsel hält", "Wie ein Kind seinen Ball hält"], answer: 0, why: "«Sie hält den roten Bleistift fest, wie ein Beamter seinen Stempel hält»: la comparación está literal en el primer párrafo." },
        { q: "Warum schaust du weit hinaus zu den Dächern und wieder zurück?", kind: "inferencial", options: ["Damit du das Wetter für den Heimweg prüfst", "Damit die Augen zwischen Weite und Nähe ausruhen", "Weil der Verlag draußen einen Parkplatz hat"], answer: 1, why: "Del juego lejos-cerca se infiere que los ojos se destensan alternando distancias." },
        { q: "Was heißt es, dass der Kiefer «mitverwaltet» hat?", kind: "critica", options: ["Er hat die Akten des Verlags geprüft", "Er gehört offiziell zur Korrekturrunde", "Er hat sich beim Lesen von Amtsdeutsch mitangespannt und darf das loslassen"], answer: 2, why: "La palabra compuesta juega con la prosa ministerial: la mandíbula se tensó de burocracia y ahora la suelta." },
      ],
      vf: [
        { text: "Der Bleistift soll während der ganzen Runde fest in der Hand bleiben.", value: false, why: "«Leg ihn eine Minute auf den Tisch»: el texto pide soltarlo, no aguantarlo." },
        { text: "Du rollst den Stift langsam zwischen den Handflächen, bis das Holz warm wird.", value: true, why: "«roll den Stift langsam zwischen den Handflächen und spüre das Holz, das dabei warm wird»." },
        { text: "Eine Hand, die eine Minute lang nichts gehalten hat, streicht danach leichter.", value: true, why: "Cierre del texto: la mano descansada corrige con más ligereza." },
      ],
    },
    {
      id: "md-de-c2-09-2", theme: "spiritualità",
      title: "Wortfasten", titleEs: "Ayuno de palabras",
      minutes: 2,
      paragraphs: [
        { it: "Das Lektorat hat etwas von einem Fasten: Du verzichtest nicht auf Essen, sondern auf das Aufgeblähte. Herr Möllers Sätze sind voller Substantivketten, voller «hinsichtlich» und «in Bezug auf», und deine Arbeit ist der Verzicht darauf – Satz für Satz, mit Ruhe und Maß. Wenn ein Substantiv weicht und ein Verb an seine Stelle tritt, atmet der Satz: zuerst leise, dann hörbar. Wer Klarheit will, muss den Schmuck hergeben; das ist eine Askese ohne Lehre.", es: "El taller de corrección tiene algo de ayuno: no renuncias a la comida, sino a lo hinchado. Las frases de Herr Möller están llenas de cadenas de sustantivos, de «hinsichtlich» y «in Bezug auf», y tu trabajo es la renuncia a ello — frase por frase, con calma y mesura. Cuando un sustantivo cede y un verbo ocupa su sitio, la frase respira: primero en voz baja, luego de forma audible. Quien quiere claridad tiene que entregar el adorno; ese es un ascetismo sin doctrina." },
        { it: "Am Ende des Abends geschieht der leise Moment: Corinna liest den ersten verbalen Satz des Romans laut vor, und im Zimmer wird es still, fast ehrfürchtig. Nichts an dem Satz will beeindrucken; er steht einfach da, wie etwas, das keinen Schutz braucht. Diese Ehrfurcht vor dem schlichten Wort gehört zu keinem Ritual – sie gilt dem Leser am anderen Ende, der morgen weniger Nebel lesen wird. Ein schlichter Satz, der nichts versteckt, ist schon eine Freundlichkeit.", es: "Al final de la tarde sucede el momento callado: Corinna lee en voz alta la primera frase verbal de la novela, y en la habitación se hace un silencio casi reverente. Nada en esa frase quiere impresionar; simplemente está, como algo que no necesita protección. Esa reverencia ante la palabra sencilla no pertenece a ningún ritual — se dirige al lector del otro extremo, que mañana leerá menos niebla. Una frase sencilla que no esconde nada ya es una amabilidad." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un plan de alimentación para escritores", "Renunciar a lo hinchado del Amtsdeutsch como vía hacia la claridad", "La historia de un retiro espiritual en los Alpes"],
        answer: 1,
        why: "El «ayuno de palabras» del título es metafórico: se ayuna de sustantivos huecos, no de comida ni de fe.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Das Streichen der Substantivketten als stille Askese, die den Satz atmen lässt",
          "Herr Möller soll seinen Roman im Amtsdeutsch belassen",
          "Ein gutes Lektorat erledigt sich in einer einzigen Nacht",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Wenn ein Substantiv weicht und ein Verb an seine Stelle tritt, atmet der Satz",
          "Im Zimmer wird es still, fast ehrfürchtig, als der erste verbale Satz vorgelesen wird",
          "Die Ehrfurcht vor dem schlichten Wort gilt dem Leser am anderen Ende",
        ],
        distractors: [
          "Die Runde beschließt, alle Substantive des Romans zu streichen",
          "Herr Möller schreibt seinen Roman in Versen neu",
          "Amtsdeutsch gilt in der Runde als die höchste Stilkunst",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Herr Möllers Sätze sind voller Substantivketten und voller «in Bezug auf».",
          "Für den Versand der Korrekturfahnen gelten feste Termine am Monatsende.",
          "Wenn ein Substantiv weicht und ein Verb Platz nimmt, atmet der Satz.",
          "Corinna liest den ersten verbalen Satz vor, und es wird fast ehrfürchtig still.",
          "Die Ehrfurcht vor dem schlichten Wort gilt dem Leser am anderen Ende.",
        ],
        intruder: 1,
        why: "Los plazos de envío de las pruebas son logística editorial: el texto ayuna de sustantivos, no gestiona calendarios.",
      },
    },
    {
      id: "md-de-c2-09-3", theme: "qui e ora",
      title: "Vorlesen in der Runde", titleEs: "Leer en voz alta en la ronda",
      minutes: 2,
      paragraphs: [
        { it: "Corinna hat eine Regel für den Abend: Jede Seite wird laut vorgelesen, bevor sie rot wird. Während die Stimme trägt, liegt kein Bleistift auf dem Papier – niemand fixiert, niemand eilt zur nächsten Stelle. Du sitzt in der Runde und bist nur Ohr: Der Satz darf zu Ende kommen, ohne dass ihn jemand prüft. Diese Minuten gehören der Seite selbst, nicht ihrer Verbesserung.", es: "Corinna tiene una regla para la tarde: cada página se lee en voz alta antes de volverse roja. Mientras la voz lleva, ningún lápiz descansa sobre el papel — nadie fija, nadie corre hacia el siguiente pasaje. Estás sentado en la ronda y eres solo oído: la frase puede llegar al final sin que nadie la examine. Esos minutos pertenecen a la página misma, no a su mejora." },
        { it: "Es ist die Gegenwart des Lektorats: die Stimme im Zimmer, der Regen gegen die Scheiben des Schwabinger Verlags, das Lampenlicht auf den losen Blättern. Später werden die roten Striche kommen – jetzt noch nicht. Was in Eile verbessert wird, war oft schlecht gehört; was in Ruhe gehört wurde, wird in Ruhe korrigiert. Der erste Dienst eines Lektors ist das Dabeisein – und das Dabeisein geschieht nur, solange die Seite gelesen wird.", es: "Es el presente del taller de corrección: la voz en la habitación, la lluvia contra los cristales de la editorial de Schwabing, la luz de la lámpara sobre las hojas sueltas. Más tarde llegarán los trazos rojos — ahora todavía no. Lo que se corrige con prisa a menudo estuvo mal escuchado; lo que se escuchó en calma se corrige en calma. El primer servicio de un editor es estar ahí — y estar ahí solo sucede mientras se lee la página." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un debate sobre los derechos de lectura pública", "Escuchar sin lápiz mientras cada página se lee en voz alta", "Cómo imprimir manuscritos sin errores"],
        answer: 1,
        why: "«Leer en voz alta en la ronda» es la regla de Corinna: la escucha presente, no un tema legal ni técnico.",
      },
      sequence: {
        instr: "Ordena los pasos de la regla de Corinna:",
        events: [
          "Corinna legt fest, dass jede Seite erst laut vorgelesen wird, bevor sie korrigiert wird.",
          "Während die Stimme trägt, legt niemand den Bleistift an das Papier.",
          "Du sitzt in der Runde und bist nur Ohr, während der Satz zu Ende kommt.",
          "Nach dem Vorlesen kommen die roten Striche – in Ruhe, nicht in Eile.",
          "Was in Ruhe gehört wurde, wird in Ruhe korrigiert.",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Stell dir den Abend in der Runde vor. Die Lampe brennt, die Blätter liegen auf dem Tisch, und eine Stimme liest die Seite laut vor, bevor irgendetwas rot wird. Nimm den Bleistift aus der Hand – er hat jetzt nichts zu sagen. Es gibt nur diese eine Stimme, dieses eine Blatt, diesen einen Moment. Spüre, wie sich dein Atem dem Tempo der lesenden Stimme anpasst, ohne dass du es befiehlst. Wenn die Seite zu Ende gelesen ist, darfst du wieder an die Verbesserung denken – aber erst dann.",
        questions: [
          { q: "Was passiert mit der Seite, bevor sie rot wird?", kind: "literal", options: ["Sie wird laut vorgelesen", "Sie wird kopiert und verteilt", "Sie wird weggeworfen"], answer: 0, why: "«Jede Seite wird laut vorgelesen, bevor sie rot wird»." },
          { q: "Was machst du mit dem Bleistift, während vorgelesen wird?", kind: "literal", options: ["Du hältst ihn ans Papier", "Du nimmst ihn aus der Hand", "Du gibst ihn an Corinna weiter"], answer: 1, why: "«Nimm den Bleistift aus der Hand – er hat jetzt nichts zu sagen»." },
          { q: "Was macht dein Atem, ohne dass du es befiehlst?", kind: "inferencial", options: ["Er passt sich dem Tempo der lesenden Stimme an", "Er hält ganz an", "Er wird schneller und lauter"], answer: 0, why: "«Spüre, wie sich dein Atem dem Tempo der lesenden Stimme anpasst»: la sincronía es involuntaria." },
          { q: "Wann darfst du wieder an die Verbesserung denken?", kind: "inferencial", options: ["Erst wenn die Seite zu Ende gelesen ist", "Schon nach dem ersten Satz", "Nie wieder an diesem Abend"], answer: 0, why: "«Wenn die Seite zu Ende gelesen ist, darfst du wieder an die Verbesserung denken – aber erst dann»." },
        ],
      },
    },
  ],

  "de-cu-c2-10": [
    {
      id: "md-de-c2-10-1", theme: "relax fisico",
      title: "Die Bank in der Stube", titleEs: "El banco en la sala de la granja",
      minutes: 2,
      paragraphs: [
        { it: "Der Aufnahmetag beginnt auf der Bank an der Wand: Der Rücken lehnt gegen das Holz, das seit hundert Jahren steht, und in der Mitte des Tisches wartet das Mikrofon. Die Aufregung sitzt hoch – in Schultern, die sich zu den Ohren ziehen, in einer Hand, die das Gerät festhält, als müsse sie es beschützen. Lehn dich zurück. Die Wand hat schon schwerere Lasten getragen als einen aufgeregten Forscher.", es: "El día de grabación comienza en el banco pegado a la pared: la espalda se apoya en la madera que lleva cien años en pie, y en el centro de la mesa espera el micrófono. El nervio se sienta alto — en hombros que se suben hacia las orejas, en una mano que sujeta el aparato como si hubiera que protegerlo. Recuéstate hacia atrás. La pared ya ha cargado pesos más duros que un investigador alterado." },
        { it: "Dann die Füße: Beide Sohlen voll auf den Dielen, die jeden Morgen die Stiefel des Bauern getragen haben. Die Hände um die warme Tasse – Milch vom Hof, keine Eile. Zuletzt der Kiefer: Der Dialekt wird fließen, ob du ihn verstehst oder nicht, und ein lockerer Kiefer lässt ihn fließen. Ein Körper, der so sitzt wie die Bank steht – ohne Ehrgeiz –, zeichnet die besseren Stimmen auf: Mit einem gelösten Menschen reden die Leute, nicht mit einem Apparat.", es: "Luego los pies: las dos plantas enteras sobre los tablones que cada mañana han llevado las botas del agricultor. Las manos alrededor de la taza caliente — leche de la granja, sin prisa. Al final la mandíbula: el dialecto va a fluir, lo entiendas o no, y una mandíbula suelta lo deja fluir. Un cuerpo sentado como está el banco — sin ambición — graba las mejores voces: con una persona distendida habla la gente, no con un aparato." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo construir bancos de madera rústicos", "Apoyarse y soltar el cuerpo durante la grabación en la granja", "La vida cotidiana de una familia del Alto Bávaro"],
        answer: 1,
        why: "El banco de la granja es el ancla corporal: espalda, hombros, pies y mandíbula se destensan durante la sesión.",
      },
      quiz: [
        { q: "Woran lehnt dein Rücken auf der Bank?", kind: "literal", options: ["An das Holz der Wand", "An die Lehne eines Bürostuhls", "An den Mikrofonständer"], answer: 0, why: "«Der Rücken lehnt gegen das Holz, das seit hundert Jahren steht»." },
        { q: "Warum reden die Leute mit einem gelösten Menschen besser als mit einem Apparat?", kind: "inferencial", options: ["Weil ein gelöster Mensch mehr bezahlt", "Weil sich die Stimme vor einem entspannten Körper öffnet", "Weil Apparate den Dialekt verbieten"], answer: 1, why: "Se infiere del cierre: el cuerpo tenso convierte al entrevistador en máquina; el suelto invita a la voz campesina a fluir." },
        { q: "Was bedeutet «ohne Ehrgeiz sitzen»?", kind: "critica", options: ["So gerade und ruhig sitzen wie die Bank, aber ohne jede Anspannung", "Die Aufnahme ganz aufgeben", "Dem Bauern beim Melken helfen"], answer: 0, why: "El símil es postural: el cuerpo copia la firmeza serena del banco sin el esfuerzo del nervio." },
      ],
      vf: [
        { text: "Die Schultern sollen sich zu den Ohren ziehen, um wach zu bleiben.", value: false, why: "Al revés: los hombros hacia las orejas son el síntoma del nervio que hay que soltar." },
        { text: "Die Hände halten die warme Tasse mit Milch vom Hof.", value: true, why: "«Die Hände um die warme Tasse – Milch vom Hof, keine Eile»." },
        { text: "Ein Körper ohne Ehrgeiz zeichnet die besseren Stimmen auf.", value: true, why: "«Ein Körper, der so sitzt wie die Bank steht – ohne Ehrgeiz –, zeichnet die besseren Stimmen auf»." },
      ],
    },
    {
      id: "md-de-c2-10-2", theme: "spiritualità",
      title: "Was die Stimme überdauert", titleEs: "Lo que la voz sobrevive",
      minutes: 2,
      paragraphs: [
        { it: "Herr Wagner, der Sachse aus Dresden, spricht eine Kindheit ins Mikrofon, die es dort längst nicht mehr gibt. Seine Melodie wird im Archiv liegen, wenn die Stube vergangen ist, wenn die Bank erneuert ist – vielleicht, wenn das Dorf seine Meinung über das richtige Deutsch geändert hat. Du sitzt daneben und spürst etwas wie Ehrfurcht: nicht für eine Lehre, sondern für ein Leben, das noch einmal erzählt, wie es klang.", es: "Herr Wagner, el sajón de Dresde, habla al micrófono una infancia que allí ya no existe. Su melodía estará en el archivo cuando la sala haya pasado, cuando el banco se haya renovado — quizá cuando el pueblo haya cambiado de opinión sobre el alemán correcto. Estás sentado a su lado y sientes algo parecido a la reverencia: no por una doctrina, sino por una vida que cuenta una vez más cómo sonaba." },
        { it: "Jeder Dialekt ist eine Form der Erinnerung: In Wagners Vokalen wohnt ein Dresden, das er vor Jahrzehnten verlassen hat, und in Hubers Bairisch wohnen die Berge, die niemand aufgeschrieben hat. Aufzeichnen ist dann eine stille Pflege, wie das Gießen eines Gartens, der nichts zurückverlangt. Das Archiv bewahrt Stimmen nicht, weil sie berühmt sind, sondern weil sie waren; das genügt. Wer so sammelt, hält etwas fest, das sonst mit dem Sprecher gehen würde.", es: "Cada dialecto es una forma de memoria: en las vocales de Wagner vive un Dresde que dejó hace décadas, y en el bávaro de Huber viven las montañas que nadie puso por escrito. Grabar es entonces un cuidado callado, como regar un jardín que no pide nada a cambio. El archivo no guarda las voces porque sean famosas, sino porque fueron; eso basta. Quien así recopila retiene algo que, de otro modo, se iría con quien lo dice." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La biografía completa de Herr Wagner", "La reverencia ante una voz que seguirá viva en el archivo", "Cómo digitalizar cintas magnetofónicas antiguas"],
        answer: 1,
        why: "«Lo que la voz sobrevive» pone la voz por delante de habitaciones y opiniones: el archivo como cuidado, no como técnica.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Die Aufnahme bewahrt eine Stimme, die Räume und Meinungen überdauern wird",
          "Nur berühmte Stimmen gehören in ein Archiv",
          "Das Dorf soll sich endlich für ein einziges Deutsch entscheiden",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Herr Wagner spricht eine Kindheit ins Mikrofon, die es in Dresden längst nicht mehr gibt",
          "Aufzeichnen ist eine stille Pflege, wie das Gießen eines Gartens",
          "Das Archiv bewahrt Stimmen, weil sie waren, nicht weil sie berühmt sind",
        ],
        distractors: [
          "Herr Wagner kehrt zurück nach Dresden",
          "Das Dorf beschließt, künftig nur Hochdeutsch zu sprechen",
          "Die Stimmen werden im Abendprogramm des Radios gesendet",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Herr Wagner spricht eine Kindheit ins Mikrofon, die es längst nicht mehr gibt.",
          "Seine Melodie wird Räume und Meinungen überdauern.",
          "Aufzeichnen ist eine stille Pflege, wie das Gießen eines Gartens.",
          "Das Archiv bewahrt Stimmen, weil sie waren.",
          "Das Forschungsstipendium läuft über achtzehn Monate und zwei Winter.",
        ],
        intruder: 4,
        why: "La duración de la beca es logística académica: la lectura cuida voces, no presupuestos.",
      },
    },
    {
      id: "md-de-c2-10-3", theme: "meditazione",
      title: "Die Melodie des Dialekts", titleEs: "La melodía del dialecto",
      minutes: 2,
      paragraphs: [
        { it: "Bairisch verstehst du nicht Wort für Wort – und das ist ein Geschenk: Du darfst hören wie an einem Bachlauf, bei dem niemand nach der Bedeutung des Wassers fragt. Der Ton steigt, der Ton fällt, die Vokale werden groß und breit, die Konsonanten weichen. Die Bedeutung darf warten; zuerst kommt die Melodie. Dein Ohr, das den ganzen Tag transkribiert, bekommt eine Stunde lang nichts anderes zu tun als zuzuhören.", es: "El bávaro no lo entiendes palabra por palabra — y eso es un regalo: puedes escuchar como junto a un arroyo, donde nadie pregunta por el significado del agua. El tono sube, el tono baja, las vocales se vuelven grandes y anchas, las consonantes ceden. El significado puede esperar; primero llega la melodía. Tu oído, que transcribe todo el día, recibe una hora entera sin otra tarea que escuchar." },
        { it: "Die Übung: Folge der Melodie eines Sprechers zehn Atemzüge lang, ohne zu greifen. Wenn der Kopf wieder mitschreiben will, benenne leise «Notiz» und komm zurück – zum Steigen, zum Fallen, zu dem breiten Vokal am Ende der Zeile. Nach zehn Atemzügen verstehst du das Bairisch nicht besser und hörst es viel besser. Das ist Meditation mit geliehenem Material: Das Dorf liefert die Töne, du lieferst nur die Aufmerksamkeit.", es: "El ejercicio: sigue la melodía de un hablante durante diez respiraciones, sin aferrar. Cuando la cabeza quiera volver a escribir, nombra en voz baja «nota» y regresa — a la subida, a la bajada, a la vocal ancha del final de la frase. Tras diez respiraciones no entiendes el bávaro mejor, pero lo oyes mucho mejor. Esa es meditación con material prestado: el pueblo aporta los sonidos; tú aportas solo la atención." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso acelerado de dialecto bávaro", "Escuchar la melodía del dialecto sin aferrar el significado", "La fonética académica del Hochdeutsch"],
        answer: 1,
        why: "La melodía del dialecto es el objeto de la escucha: meditación con material prestado, no una clase de idioma.",
      },
      sequence: {
        instr: "Ordena los pasos del ejercicio:",
        events: [
          "Du hörst dem Bairisch zu wie einem Bachlauf, ohne nach der Bedeutung zu fragen.",
          "Du folgst der Melodie eines Sprechers zehn Atemzüge lang, ohne zu greifen.",
          "Wenn der Kopf mitschreiben will, benennst du leise «Notiz».",
          "Du kehrst zurück zum Steigen und Fallen der Töne.",
          "Am Ende verstehst du das Bairisch nicht besser und hörst es viel besser.",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Such dir unter den Stimmen am Tisch eine aus, am besten eine, von der du nichts verstehst. Schließ ruhig die Augen, wenn du magst. Jetzt hörst du nur der Melodie zu: wie der Ton am Ende des Satzes fällt, wie die Vokale sich öffnen, als würden Türen aufgemacht. Atme mit dem Fallen des Tones aus und mit dem Steigen wieder ein. Nichts will verstanden werden; alles darf gehört werden. Nach ein paar Atemzügen merkst du: Das Ohr hat sich längst entschieden – es wollte immer nur das.",
        questions: [
          { q: "Welche Stimme suchst du dir am Tisch aus?", kind: "literal", options: ["Eine, von der du nichts verstehst", "Die lauteste am Tisch", "Die des Bürgermeisters"], answer: 0, why: "«am besten eine, von der du nichts verstehst»." },
          { q: "Wann atmest du aus?", kind: "literal", options: ["Mit dem Fallen des Tones", "Beim Öffnen der Türen", "Vor dem ersten Vokal"], answer: 0, why: "«Atme mit dem Fallen des Tones aus»." },
          { q: "Was will die Stimme laut Audio?", kind: "inferencial", options: ["Nichts – sie darf einfach gehört werden", "Verstanden und notiert werden", "Ins Hochdeutsche übersetzt werden"], answer: 0, why: "«Nichts will verstanden werden; alles darf gehört werden»." },
          { q: "Was hat das Ohr laut Schluss erkannt?", kind: "inferencial", options: ["Dass es immer nur hören wollte", "Dass es selbst Bairisch spricht", "Dass die Aufnahme fehlerhaft ist"], answer: 0, why: "«Das Ohr hat sich längst entschieden – es wollte immer nur das»: el oído ya había elegido su oficio." },
        ],
      },
    },
  ],

  "de-cu-c2-11": [
    {
      id: "md-de-c2-11-1", theme: "relax mentale",
      title: "Kein Satz im Voraus", titleEs: "Ninguna frase por adelantado",
      minutes: 2,
      paragraphs: [
        { it: "Cems erste Regel im Improtheater lautet: Wer den Satz im Voraus bildet, ist schon fort. Der Kopf liebt das Voraus-Schreiben – halb geschmiedete Komposita, angefangene Kontaminationen, Pointen, die drei Szenen später sitzen sollen. Aber die Szene geschieht nur einmal, und sie geschieht jetzt. Der vorweg genommene Satz ist ein Gast, der zu früh kommt und die Tür blockiert.", es: "La primera regla de Cem en el teatro de impro dice: quien construye la frase por adelantado ya se fue. A la cabeza le encanta escribir por adelantado — compuestos a medio forjar, contaminaciones empezadas, remates pensados para tres escenas después. Pero la escena sucede una sola vez, y sucede ahora. La frase adelantada es un invitado que llega demasiado pronto y bloquea la puerta." },
        { it: "Die Übung ist nicht, an nichts zu denken – das kann niemand. Die Übung ist, keinen fertigen Satz festzuhalten: Das Wort kommt, wenn das Angebot fällt, und kein Wort kommt früher. Auf der Bühne heißt innere Lockerheit, nichts zu bewerten, was noch nicht gesprochen ist, und nichts zu vermissen, was noch nicht gefallen ist. Das Publikum merkt sofort, welches Wort vorgekocht war und welches frisch fiel – es riecht den Unterschied.", es: "El ejercicio no es pensar en nada — eso nadie puede. El ejercicio es no retener ninguna frase terminada: la palabra llega cuando cae la oferta, y ninguna palabra llega antes. En escena, soltura interior significa no valorar lo que todavía no se ha dicho y no echar de menos lo que todavía no ha caído. El público nota enseguida qué palabra estaba precocinada y cuál cayó fresca — huele la diferencia." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Memorizar frases cómicas para el partido del sábado", "Jugar sin frases preparadas: confiar en la palabra que llega con la oferta", "Las normas de puntuación del Improtheater"],
        answer: 1,
        why: "«Ninguna frase por adelantado» es la regla de Cem: la mente suelta en escena, no el repertorio memorizado.",
      },
      quiz: [
        { q: "Was macht der Kopf so gern, bevor die Szene beginnt?", kind: "literal", options: ["Er schreibt Sätze und Pointen im Voraus", "Er schläft kurz ein", "Er zählt die Zuschauer"], answer: 0, why: "«Der Kopf liebt das Voraus-Schreiben»: la tendencia está literal en el primer párrafo." },
        { q: "Warum blockiert der vorweg genommene Satz die Tür?", kind: "inferencial", options: ["Weil er zu leise gesprochen wird", "Weil das Publikum ihn nicht hören darf", "Weil kein Platz mehr für das Angebot des Partners bleibt"], answer: 2, why: "La metáfora del invitado prematuro: la frase adelantada ocupa el hueco de lo que estaba llegando." },
        { q: "Was heißt innere Lockerheit auf der Bühne?", kind: "critica", options: ["Dem ungeklärten Wort seine Chance lassen, statt es vorab zu verurteilen", "Alle Wörter für gut befinden", "Nach dem Sprechen sofort loben"], answer: 0, why: "La regla suspende el juicio: la palabra aún no dicha no se evalúa antes de caer." },
      ],
      vf: [
        { text: "Die Übung besteht darin, an gar nichts zu denken.", value: false, why: "«Die Übung ist nicht, an nichts zu denken – das kann niemand»." },
        { text: "Kein Wort kommt früher als das Angebot.", value: true, why: "«Das Wort kommt, wenn das Angebot fällt, und kein Wort kommt früher»." },
        { text: "Das Publikum merkt sofort, welches Wort vorgekocht war.", value: true, why: "«Das Publikum merkt sofort, welches Wort vorgekocht war und welches frisch fiel»." },
      ],
    },
    {
      id: "md-de-c2-11-2", theme: "qui e ora",
      title: "Das Wort, das jetzt fällt", titleEs: "La palabra que cae ahora",
      minutes: 2,
      paragraphs: [
        { it: "Im Impro ist das Wort Rohstoff – aber nur im Moment, in dem es fällt. Eine Sekunde später gehört es schon dem nächsten Spieler, der es weiterbiegt, weiterbaut, weiterträumt. Die Bühne ist die ehrlichste Uhr der Welt: Keine Szene lässt sich wiederholen, kein Kompositum noch einmal schmieden. Maike klingelt, das Publikum ruft ein Stichwort, und da ist es – der Augenblick, aus dem alles gemacht wird.", es: "En la impro la palabra es materia prima — pero solo en el momento en que cae. Un segundo después ya pertenece al siguiente jugador, que la tuerce, la construye, la sueña más lejos. El escenario es el reloj más honesto del mundo: ninguna escena se puede repetir, ningún compuesto se forja dos veces. Maike hace sonar la campana, el público grita una palabra clave, y ahí está — el instante del que todo se hace." },
        { it: "Das Hier und Jetzt des Matches hat seine eigene Sorgfalt: das warme Licht der Scheinwerfer, der Atem des Publikums im Dunkeln, Cem neben dir, der auf nichts wartet, weil alles kommt. Wer ganz in diesem Wort steht, braucht das nächste nicht. Das ist keine Leichtfertigkeit; es ist die Aufmerksamkeit für einen Moment, der nur einmal vorkommt – und genau darin gleicht die Impro dem Leben.", es: "El aquí y ahora del partido tiene su propio esmero: la luz cálida de los focos, la respiración del público en la oscuridad, Cem a tu lado, que no espera nada porque todo llega. Quien está del todo en esta palabra no necesita la siguiente. No es frivolidad: es la atención a un instante que solo ocurre una vez — y en eso se parece la impro a la vida." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["El reglamento del torneo de improvisación", "La palabra que cae ahora: el presente como materia prima del impro", "Cómo acuñar palabras compuestas por escrito"],
        answer: 1,
        why: "La palabra del título cae «ahora»: el texto vive el presente de la escena, no las normas del torneo.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Auf der Bühne zählt nur das Wort, das im gegenwärtigen Moment fällt",
          "Der beste Improspieler bereitet fünf Sätze im Voraus vor",
          "Komposita entstehen nur am Schreibtisch",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Keine Szene lässt sich wiederholen, kein Kompositum noch einmal schmieden",
          "Wer ganz in diesem Wort steht, braucht das nächste nicht",
          "Das Hier und Jetzt des Matches ist Sorgfalt, keine Leichtfertigkeit",
        ],
        distractors: [
          "Das Publikum darf während des Matches auf die Bühne steigen",
          "Cem verteilt vorab schriftliche Stichwörter",
          "Die Szenen werden nachts geschnitten und nachbearbeitet",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Im Impro ist das Wort Rohstoff, aber nur im Moment, in dem es fällt.",
          "Keine Szene lässt sich wiederholen, kein Kompositum noch einmal schmieden.",
          "Die Tageskasse des Theaters öffnet eine Stunde vor dem Match.",
          "Wer ganz in diesem Wort steht, braucht das nächste nicht.",
          "Das Hier und Jetzt des Matches ist Sorgfalt, keine Leichtfertigkeit.",
        ],
        intruder: 2,
        why: "El horario de la taquilla es logística del teatro: la lectura cuida el instante escénico, no la recaudación.",
      },
    },
    {
      id: "md-de-c2-11-3", theme: "relax fisico",
      title: "Der Kreis vor dem Match", titleEs: "El círculo antes del partido",
      minutes: 2,
      paragraphs: [
        { it: "Vor dem Match am Samstag stellt Maike ihren Kreis auf die Bühnenbretter: erst die Füße, beide Sohlen voll, die Knie weich wie die Federn einer alten Tür. Dann die Hände – schüttel sie aus, als hinge Wasser an den Fingern, das nie ganz abtropft. Die Schultern rollen langsam nach hinten, als hätten sie den ganzen Tag nichts zu tragen als den Abend.", es: "Antes del partido del sábado, Maike forma su círculo sobre las tablas del escenario: primero los pies, las dos plantas enteras, las rodillas blandas como los muelles de una puerta vieja. Luego las manos — sacúdelas, como si colgara agua de los dedos que nunca termina de gotear. Los hombros ruedan despacio hacia atrás, como si no tuvieran que cargar en todo el día más que la velada." },
        { it: "Zuletzt der Mund: Zunge, Kiefer, Lippen. Cem wärmt mit Wortketten, die es noch nicht gibt – halb Kompositum, halb Kontamination –, und der Kiefer ist das Tor, durch das sie später fallen. Ein lockerer Kiefer spricht lockere Wörter. Wenn sich der Kreis löst und ihr an den Bühnenrand tretet, weiß der Körper schon alles, was der Kopf noch einmal durchgeht: Er hat es in den Händen, in den Knien, im Atem.", es: "Al final la boca: lengua, mandíbula, labios. Cem calienta con cadenas de palabras que todavía no existen — medio compuesto, medio contaminación —, y la mandíbula es la puerta por la que luego caerán. Una mandíbula suelta dice palabras sueltas. Cuando el círculo se disuelve y llegáis al borde del escenario, el cuerpo ya sabe todo lo que la cabeza todavía repasa: lo tiene en las manos, en las rodillas, en la respiración." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Ejercicios de running antes del espectáculo", "El círculo de calentamiento: pies, manos, hombros y boca", "Cómo construir tablas de escenario resistentes"],
        answer: 1,
        why: "El círculo de Maike es calentamiento corporal completo: desde el suelo de los pies hasta la puerta de la boca.",
      },
      sequence: {
        instr: "Ordena el calentamiento del círculo:",
        events: [
          "Maike stellt vor dem Match ihren Aufwärmkreis auf die Bühnenbretter.",
          "Du stellst beide Sohlen voll auf und lässt die Knie weich.",
          "Du schüttelst die Hände aus, als hinge Wasser an den Fingern.",
          "Du rollst die Schultern langsam nach hinten.",
          "Du lockerst mit Cems Wortketten Zunge, Kiefer und Lippen.",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Stell dich in den Kreis, so wie du gleich am Rand stehst. Spür die Bretter unter den Sohlen – altes Holz, das viele Abende getragen hat. Lass die Knie leicht, ganz leicht, als wären sie nie ganz geschlossen. Jetzt die Hände: schütteln, tröpfeln, loslassen. Die Schultern nach hinten, langsam, als rollten sie einen schweren Tag von sich ab. Und zum Schluss der Kiefer: halb offen, bereit, kein Wort festzuhalten. Wenn sich der Kreis löst, nimmst du dieses lockere Gefühl mit auf die Bühne – es ist dein bestes Requisit.",
        questions: [
          { q: "Was spürst du unter den Sohlen?", kind: "literal", options: ["Altes Holz, das viele Abende getragen hat", "Nasses Gras", "Kalten Beton"], answer: 0, why: "«Spür die Bretter unter den Sohlen – altes Holz, das viele Abende getragen hat»." },
          { q: "Wohin rollen die Schultern?", kind: "literal", options: ["Schnell nach vorne", "Langsam nach hinten", "Ganz nach oben zu den Ohren"], answer: 1, why: "«Die Schultern nach hinten, langsam»." },
          { q: "Wie soll der Kiefer am Ende sein?", kind: "inferencial", options: ["Halb offen und bereit, kein Wort festzuhalten", "Fest geschlossen", "Vom Trainer korrigiert"], answer: 0, why: "«der Kiefer: halb offen, bereit, kein Wort festzuhalten»: la apertura física refleja la disponibilidad lúdica." },
          { q: "Was nimmst du mit auf die Bühne?", kind: "inferencial", options: ["Das lockere Gefühl aus dem Kreis", "Die Stoppuhr von Maike", "Ein geschriebenes Stichwort"], answer: 0, why: "«nimmst du dieses lockere Gefühl mit auf die Bühne – es ist dein bestes Requisit»." },
        ],
      },
    },
  ],

  "de-cu-c2-12": [
    {
      id: "md-de-c2-12-1", theme: "relax mentale",
      title: "Die Rede darf schlafen", titleEs: "El discurso puede dormir",
      minutes: 2,
      paragraphs: [
        { it: "In der Nacht vor der Verleihung wohnt die Stoppuhr des Lektors in deinem Kopf: Sie misst jede Version der Laudatio, auch die, die du gar nicht aussprichst. Der Kopf probt in Schleifen – die Triaden, die Anaphern, das Futur der Verheißung am Schluss –, und jede Runde wird etwas kürzer und etwas nervöser. Draußen, hinter dem Hotel, wartet die Paulskirche auf ihren Tag; sie schläft bereits.", es: "En la noche previa a la entrega, el cronómetro del editor vive en tu cabeza: mide cada versión de la Laudatio, también la que no pronuncias. La cabeza ensaya en bucles — las tríadas, las anáforas, el futuro de promesa del cierre —, y cada vuelta es un poco más corta y un poco más nerviosa. Ahí fuera, tras el hotel, la Paulskirche espera su día; ella ya duerme." },
        { it: "Die Übung dieser Nacht: Die Rede ist geschrieben – lass sie schlafen wie einen Teig, der über Nacht von selbst aufgeht. Bring die Schleifen eine nach der anderen zu Bett: die Angst zu vergessen, die Angst vor den Glocken, die Angst vor der Live-Übertragung. Benenne sie leise, decke sie zu. Eine Rede, die schlafen durfte, spricht sich morgen mit einer ausgeruhten Stimme – und die Triaden stehen dann von selbst.", es: "El ejercicio de esta noche: el discurso está escrito — déjalo dormir como una masa que sube sola durante la noche. Lleva los bucles a la cama uno tras otro: el miedo a olvidar, el miedo a las campanas, el miedo a la retransmisión en directo. Nómbralos en voz baja y tápalos. Un discurso al que dejaron dormir se dice mañana con una voz descansada — y entonces las tríadas se sostienen solas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Ensayar toda la noche frente al espejo", "Dejar dormir el discurso y acostar los bucles de la mente", "La historia del premio de la paz"],
        answer: 1,
        why: "«El discurso puede dormir» es la consigna de la víspera: descanso mental, no ensayo nocturno.",
      },
      quiz: [
        { q: "Wo wohnt die Stoppuhr am Vorabend der Verleihung?", kind: "literal", options: ["In deinem Kopf", "Im Tresor des Hotels", "Bei der Preisträgerin"], answer: 0, why: "«Die Stoppuhr des Lektors wohnt in deinem Kopf»: literal en la primera frase." },
        { q: "Warum vergleicht der Text die Rede mit einem Teig?", kind: "inferencial", options: ["Weil man Reden backen und essen kann", "Weil sie über Nacht von selbst «aufgeht», wenn man sie ruhen lässt", "Weil der Lektor Kuchen ins Hotel bringt"], answer: 1, why: "La masa sube sola durante la noche: se infiere que el descanso completa el trabajo." },
        { q: "Was heißt «die Schleifen zu Bett bringen»?", kind: "critica", options: ["Das Manuskript unter dem Kopfkissen verstecken", "Die Glocken der Paulskirche abschalten", "Die kreisenden Ängste benennen und ruhig werden lassen"], answer: 2, why: "Los bucles son los giros repetidos de la cabeza; llevarlos a la cama es nombrarlos y soltarlos." },
      ],
      vf: [
        { text: "In der Nacht vor der Verleihung soll die Laudatio noch einmal neu geschrieben werden.", value: false, why: "«Die Rede ist geschrieben – lass sie schlafen»: nada de reescribir." },
        { text: "Eine Rede, die schlafen durfte, spricht sich mit einer ausgeruhten Stimme.", value: true, why: "«spricht sich morgen mit einer ausgeruhten Stimme»." },
        { text: "Die Angst vor der Live-Übertragung ist eine der Schleifen, die zu Bett gehen.", value: true, why: "«die Angst vor der Live-Übertragung» aparece en la lista de bucles." },
      ],
    },
    {
      id: "md-de-c2-12-2", theme: "spiritualità",
      title: "Die Kunst des Lobens", titleEs: "El arte de alabar",
      minutes: 2,
      paragraphs: [
        { it: "Eine Laudatio ist die seltene Kunst, gut über jemanden zu sprechen – nicht zu schmeicheln, sondern zu ehren. Du nennst, was das Werk der Autorin an Lesern, an der Sprache, am Land getan hat, und du nennst es ohne Neid. Loben will ein Herz, das neben dem eigenen Ehrgeiz steht, statt auf ihm; sonst klingt jedes Lob wie eine Rechnung. Das ist eine stille Schulung, die niemand in einem Kurs lernt.", es: "Una Laudatio es el raro arte de hablar bien de alguien — no adular, sino honrar. Nominas lo que la obra de la autora ha hecho a los lectores, a la lengua, al país, y lo nombras sin envidia. Alabar quiere un corazón que esté al lado de su propia ambición, no encima de ella; de lo contrario, todo elogio suena a factura. Es una disciplina callada que nadie aprende en un curso." },
        { it: "Morgen, wenn du das Lob aussprichst, sprichst du es nicht für dich: Die Festrede ist ein Geschenk, das durch dich hindurchgeht. Der Beifall, wenn er kommt, gehört dem Werk, und der schönste Moment ist der leiseste – der, in dem das Publikum der Preisträgerin zujubelt, während du noch am Pult stehst. Wer das verstanden hat, spricht frei: kein Zittern der eigenen Wichtigkeit, nur die Dankbarkeit einer Sprache, die durch jemanden reicher wurde.", es: "Mañana, cuando pronuncies el elogio, no lo pronuncias para ti: la Festrede es un regalo que pasa a través de ti. El aplauso, si llega, pertenece a la obra, y el momento más bello es el más callado — aquel en que el público aplaude a la premiada mientras tú sigues en el atril. Quien entiende eso habla libre: ningún temblor de la propia importancia, solo la gratitud de una lengua que se volvió más rica gracias a alguien." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo aplaudir correctamente en una gala", "Alabar sin adulación: la Laudatio como regalo que te atraviesa", "La rivalidad entre los autores premiados"],
        answer: 1,
        why: "El arte de alabar define la Festrede: honrar sin envidia, no el protocolo de la gala.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Die Laudatio ist die Kunst des Lobens ohne Schmeichelei und ohne Neid",
          "Die beste Laudatio hält die Preisträgerin selbst",
          "Der Beifall gehört immer dem Redner",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Loben will ein Herz, das neben dem eigenen Ehrgeiz steht",
          "Die Festrede ist ein Geschenk, das durch dich hindurchgeht",
          "Der schönste Moment ist der leiseste, in dem das Publikum der Preisträgerin zujubelt",
        ],
        distractors: [
          "Der Redner verliest die Dankesrede der Autorin Wort für Wort",
          "In der Paulskirche ist Beifall während der Rede verboten",
          "Der Lektor schreibt die Laudatio heimlich um",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Eine Laudatio ehrt, ohne zu schmeicheln.",
          "Loben will ein Herz, das neben dem eigenen Ehrgeiz steht.",
          "Die Festrede ist ein Geschenk, das durch dich hindurchgeht.",
          "Die Übertragung aus der Paulskirche beginnt um elf Uhr und dauert sechzig Minuten.",
          "Der Beifall gehört dem Werk, nicht dem Redner.",
        ],
        intruder: 3,
        why: "El horario de la retransmisión es logística del acto: la lectura medita el elogio, no la parrilla de programación.",
      },
    },
    {
      id: "md-de-c2-12-3", theme: "relax mentale",
      title: "Die Pause trägt die Klimax", titleEs: "La pausa sostiene la gradación",
      minutes: 2,
      paragraphs: [
        { it: "Jede Festrede lebt von ihren Pausen: vor der Anapher eine Stille, vor der Klimax ein Atemzug, und am Schluss, vor dem Futur der Verheißung, ein Moment, in dem der Raum die Luft anhält. Beim Probelesen im Hotel entdeckst du, dass die Triaden nicht auf den Wörtern stehen, sondern auf den Pausen dazwischen – die Stille ist ein tragendes Element, kein Loch.", es: "Toda Festrede vive de sus pausas: antes de la anáfora, un silencio; antes de la Klimax, una respiración; y al final, antes del futuro de promesa, un momento en que la sala retiene el aire. En el ensayo del hotel descubres que las tríadas no se apoyan en las palabras, sino en las pausas de en medio — el silencio es un elemento portante, no un agujero." },
        { it: "Morgen verklingt das Geläut, die Übertragung ist live, und du stehst dort, wo sonst nur die Zeit spricht. Die Übung für heute Nacht: Atme an jeder markierten Stelle ein – nicht um die Pause zu füllen, sondern um sie zu bewohnen. Wer die Pause fürchtet, stopft sie mit Worten voll; wer sich mit ihr anfreundet, wird von ihr getragen. Die Klimax braucht kein lauteres Wort – sie braucht die Stille, die unmittelbar vor ihr steht.", es: "Mañana se apaga el campaneo, la retransmisión es en directo, y estás donde normalmente solo habla el tiempo. El ejercicio para esta noche: inspira en cada punto marcado — no para llenar la pausa, sino para habitarla. Quien teme la pausa la atiborra de palabras; quien se hace amigo de ella se ve sostenido por ella. La Klimax no necesita una palabra más fuerte — necesita el silencio que está justo antes." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Hablar más alto para que la Klimax suene", "Ensayar las pausas: el silencio que sostiene tríadas y anáforas", "El reglamento técnico de la retransmisión"],
        answer: 1,
        why: "La pausa del título es portante: sostiene la arquitectura del discurso, no la técnica del directo.",
      },
      sequence: {
        instr: "Ordena los descubrimientos y pasos de la noche:",
        events: [
          "Beim Probelesen im Hotel entdeckst du, dass die Stille ein tragendes Element ist.",
          "Du markierst im Manuskript die Stellen, an die Pausen gehören – vor der Anapher und vor der Klimax.",
          "Du atmest an jeder markierten Stelle bewusst ein, um die Pause zu bewohnen.",
          "Am nächsten Tag verklingt das Geläut, und die Übertragung ist live.",
          "Die Klimax trägt sich auf der Stille, die unmittelbar vor ihr steht.",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Nimm das Manuskript noch einmal zur Hand, aber lies heute Nacht nicht laut. Fahre mit den Augen langsam über die Triaden und halte an jeder markierten Stelle inne. Dort, wo die Stille hingehört, atmest du einmal ein und spürst, wie der Raum in dir größer wird. Die Worte brauchen deinen Klang erst morgen; heute brauchen sie nur deinen Atem. Wenn du das Blatt weglegst, nimm die Pausen mit ins Bett – sie sind der ruhigste Teil der Rede, und sie werden morgen das Publikum halten.",
        questions: [
          { q: "Was tust du heute Nacht mit dem Manuskript?", kind: "literal", options: ["Ich fahre mit den Augen darüber und halte an den markierten Stellen inne", "Ich lese es laut im Hotelzimmer", "Ich schreibe die Triaden neu"], answer: 0, why: "«Lies heute Nacht nicht laut – halte an jeder markierten Stelle inne»." },
          { q: "Was spürst du beim Einatmen an der Pause?", kind: "literal", options: ["Dass der Raum in mir größer wird", "Dass die Glocken läuten", "Dass die Stimme leiser wird"], answer: 0, why: "«Du atmest einmal ein und spürst, wie der Raum in dir größer wird»." },
          { q: "Was brauchen die Worte heute Nacht?", kind: "inferencial", options: ["Nur deinen Atem, nicht deinen Klang", "Eine Generalprobe vor dem Spiegel", "Die Zustimmung des Lektors"], answer: 0, why: "«Die Worte brauchen deinen Klang erst morgen; heute brauchen sie nur deinen Atem»." },
          { q: "Wozu dienen die Pausen laut Schluss?", kind: "inferencial", options: ["Sie werden morgen das Publikum halten", "Sie kürzen die Rede auf Zeit", "Sie ersetzen die Triaden"], answer: 0, why: "«Sie sind der ruhigste Teil der Rede, und sie werden morgen das Publikum halten»." },
        ],
      },
    },
  ],
};

