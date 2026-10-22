import type { MindReading } from "../../cambridge-mind";

/* ═══ DE C1 · Mind readings (temáticas de conciencia) — 3 por unidad ══
   Metodología v9.13: 7 estrategias de comprensión lectora y escucha.
   Textos en alemán de Alemania nivel C1 (ensayo reflexivo permitido),
   anclados suavemente a los escenarios del curso C1 (Universität, Medien,
   Unternehmen). Campos `.it` = alemán, `.es` = español. Estrategia por
   índice: L1 = predict + quiz (lit/inf/crít) + V/F justificado;
   L2 = predict + ideas + intruso; L3 = predict + secuencia + escucha. */

export const DE_MIND_C1: Record<string, MindReading[]> = {
  "de-cu-c1-01": [
    {
      id: "md-de-c1-01-1", theme: "meditazione",
      title: "Drei Atemzüge vor der Paraphrase", titleEs: "Tres respiraciones antes de la paráfrasis",
      minutes: 2,
      paragraphs: [
        { it: "Bevor du einen fremden Satz in eigene Worte verwandelst, halte inne. Drei Atemzüge: einatmen durch die Nase, ausatmen durch den Mund. Die Paraphrase ist keine Kopierübung, sondern ein Akt des Verstehens — und Verstehen braucht einen ruhigen Kopf. Der fremde Text ist kein Gegner, er ist ein Gast.", es: "Antes de transformar una frase ajena en palabras propias, detente. Tres respiraciones: inhala por la nariz, exhala por la boca. La paráfrasis no es un ejercicio de copia, sino un acto de comprensión — y comprender necesita una cabeza tranquila. El texto ajeno no es un adversario: es un invitado." },
        { it: "Mit jedem Ausatmen legst du eine Schicht ab: den Druck, das Original zu wiederholen; die Angst, es nicht besser zu machen; die Eile. Was bleibt, ist die Frage: Was will dieser Satz eigentlich sagen? Wenn du sie in Ruhe stellst, findet deine Sprache ihre eigene Form. Das ist Meditation am Schreibtisch — kein Leerwerden, sondern Klarwerden.", es: "Con cada exhalación sueltas una capa: la presión de repetir el original; el miedo a no hacerlo mejor; las prisas. Lo que queda es la pregunta: ¿qué quiere decir realmente esta frase? Si la formulas en calma, tu lengua encuentra su propia forma. Esa es la meditación ante el escritorio — no vaciarse, sino aclararse." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de cocina para estudiantes", "Respirar con calma antes de reformular un texto ajeno", "Una crítica del sistema universitario alemán"],
        answer: 1,
        why: "El título une la respiración (drei Atemzüge) con la paráfrasis: apunta a la calma antes de reformular.",
      },
      quiz: [
        { q: "Was tust du, bevor du paraphrasierst?", kind: "literal", options: ["Ich halte inne und atme dreimal", "Ich schreibe schneller", "Ich schalte das Licht aus"], answer: 0, why: "«Halte inne. Drei Atemzüge»: está literal al inicio del texto." },
        { q: "Wie ist das Verhältnis zum fremden Text?", kind: "inferencial", options: ["Der Text ist ein Gegner", "Der Text ist ein Gast", "Der Text ist unnötig"], answer: 1, why: "«Er ist kein Gegner, er ist ein Gast»: la actitud recomendada es de hospitalidad, no de lucha." },
        { q: "Welche Haltung empfiehlt der Text?", kind: "critica", options: ["Meditation am Schreibtisch heißt Klarwerden, nicht Leerwerden", "Wer schneller kopiert, paraphrasiert besser", "Fremde Texte sollte man vermeiden"], answer: 0, why: "El cierre opone Klarwerden a Leerwerden: meditar aquí es aclarar la mente, no vaciarla." },
      ],
      vf: [
        { text: "Die Paraphrase ist eine Kopierübung.", value: false, why: "El texto dice lo contrario: «keine Kopierübung, sondern ein Akt des Verstehens»." },
        { text: "Mit jedem Ausatmen legst du eine Schicht Druck ab.", value: true, why: "«Mit jedem Ausatmen legst du eine Schicht ab»: presión, miedo y prisa." },
        { text: "Du musst den Satz sofort besser machen als das Original.", value: false, why: "El miedo a «no hacerlo mejor» es una capa que se suelta, no una obligación." },
      ],
    },
    {
      id: "md-de-c1-01-2", theme: "qui e ora",
      title: "Die Bibliothek atmet", titleEs: "La biblioteca respira",
      minutes: 2,
      paragraphs: [
        { it: "Es ist später Nachmittag in der Universitätsbibliothek. Um dich herum blättern Seiten, jemand tippt leise, ein Bleistift kratzt. Du musst deine Hausarbeit schreiben, doch für einen Moment legst du den Stift hin und hörst dem Saal zu: Die Bibliothek atmet, langsam und gleichmäßig, wie ein großer ruhiger Organismus.", es: "Es tarde por la tarde en la biblioteca de la universidad. A tu alrededor pasan páginas, alguien teclea despacio, un lápiz rasca. Tienes que escribir tu trabajo de curso, pero por un momento dejas el bolígrafo y escuchas la sala: la biblioteca respira, lenta y pareja, como un gran organismo tranquilo." },
        { it: "In diesem Moment gibt es keine Abgabe, keine Bewertung, kein Original. Es gibt nur das Licht über den Tischen, den Klang der Lüftung und deine Hände auf der Tastatur. Der Schreibtisch von nebenan ist heute Konkurrenz und morgen fremd — jetzt ist er einfach ein Mensch, der auch sitzt und arbeitet. Hier und jetzt schreiben beide, jeder in seiner eigenen Zeit.", es: "En este momento no hay entrega, ni nota, ni original. Solo hay la luz sobre las mesas, el rumor de la ventilación y tus manos en el teclado. La mesa de al lado hoy es competencia y mañana desconocida — ahora es simplemente una persona que también está sentada y trabaja. Aquí y ahora escriben los dos, cada uno en su propio tiempo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una historia de misterio en una biblioteca", "Estar presente mientras se escribe en la biblioteca", "Las normas de silencio de la universidad"],
        answer: 1,
        why: "El título describe la sala como organismo vivo: apunta a la presencia en el lugar, no a una trama.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "In der Gegenwart wird die Bibliothek zum ruhigen Organismus und der Nachbar zum Mitmenschen",
          "Eine Universitätsbibliothek braucht strengere Verhaltensregeln",
          "Wer in der Bibliothek arbeitet, sollte besser Musik über Kopfhörer hören",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Die Bibliothek atmet langsam und gleichmäßig wie ein großer Organismus",
          "In diesem Moment gibt es keine Abgabe, keine Bewertung, kein Original",
          "Der Nachbar ist jetzt einfach ein Mensch, der auch sitzt und arbeitet",
        ],
        distractors: [
          "Der Nachbar bleibt für immer Konkurrenz, heute und morgen",
          "Die Lüftung der Bibliothek wird nachts abgeschaltet",
          "Beide schreiben im selben Tempo und in derselben Zeit",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Es ist später Nachmittag in der Universitätsbibliothek.",
          "Die Bibliothek atmet langsam und gleichmäßig wie ein großer Organismus.",
          "In diesem Moment gibt es keine Abgabe, keine Bewertung, kein Original.",
          "Die Bibliothek schließt um 22 Uhr, auch am Wochenende.",
          "Hier und jetzt schreiben beide, jeder in seiner eigenen Zeit.",
        ],
        intruder: 3,
        why: "El horario de cierre es un dato logístico ajeno al texto: la lectura trata de la presencia en la sala, no de sus normas.",
      },
    },
    {
      id: "md-de-c1-01-3", theme: "relax fisico",
      title: "Schultern und Stuhl", titleEs: "Hombros y silla",
      minutes: 2,
      paragraphs: [
        { it: "Drei Stunden Hausarbeit: Der Kopf hat gearbeitet, aber der Körper auch — nur hat es niemand bemerkt. Die Schultern sind hochgerutscht, der Kiefer ist fest, der Atem flach. Zeit für eine Inventur: Rolle die Schultern langsam nach hinten, lass sie sinken, und spüre den Unterschied zwischen «hoch» und «unten». Der Stuhl trägt dich; du musst ihn nicht umklammern.", es: "Tres horas de trabajo de curso: la cabeza ha trabajado, pero el cuerpo también — solo que nadie lo notó. Los hombros se han subido, la mandíbula apretada, la respiración superficial. Tiempo de inventario: gira los hombros despacio hacia atrás, déjalos caer y siente la diferencia entre «arriba» y «abajo». La silla te sostiene; no tienes que abrazarla." },
        { it: "Stell dir vor, dein Atem fließt bis in den Beckenboden, und lass den Stuhl den unteren Teil der Arbeit machen. Die Füße dürfen aufs Boden, die Hände dürfen weich werden. Ein Körper, der getragen wird, denkt klarer — das ist keine Esoterik, sondern Erfahrung von jedem langen Schreibtischtag. Nach fünf Minuten Schultern-unten schreibt es sich wieder wie von selbst.", es: "Imagina que tu respiración baja hasta la pelvis y deja que la silla haga la parte baja del trabajo. Los pies pueden apoyarse en el suelo, las manos pueden ablandarse. Un cuerpo sostenido piensa con más claridad — no es esoteria, es la experiencia de cada larga jornada de escritorio. Tras cinco minutos de hombros abajo, se escribe otra vez solo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un catálogo de sillas ergonómicas", "Relajar hombros y cuerpo tras horas de escribir", "Una clase de levantamiento de pesas"],
        answer: 1,
        why: "«Schultern und Stuhl» apunta a soltar la tensión corporal del escritorio, no al mobiliario.",
      },
      sequence: {
        instr: "Ordena los pasos del ejercicio:",
        events: [
          "Nach drei Stunden Hausarbeit bemerkst du die hochgerutschten Schultern",
          "Du rollst die Schultern langsam nach hinten und lässt sie sinken",
          "Du stellst dir vor, der Atem fließt bis in den Beckenboden",
          "Die Füße dürfen auf den Boden, die Hände dürfen weich werden",
          "Nach fünf Minuten Schultern-unten schreibt es sich wieder wie von selbst",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Setz dich hin und spüre nach: Wo sind deine Schultern? Viele tragen sie tagsüber bis zu den Ohren. Roll sie jetzt langsam nach hinten, ganz ohne Kraft. Beim Ausatmen lassen sie ein Stück sinken. Der Stuhl trägt deinen Rücken — du musst ihn nicht umklammern. Atme noch zweimal so, und lass den Körper unten ankommen.",
        questions: [
          { q: "Wohin rollst du die Schultern?", kind: "literal", options: ["Nach hinten", "Nach vorne", "Nach oben zu den Ohren"], answer: 0, why: "«Roll sie jetzt langsam nach hinten»." },
          { q: "Was passiert beim Ausatmen?", kind: "literal", options: ["Die Schultern lassen ein Stück sinken", "Die Schultern steigen bis zu den Ohren", "Der Stuhl rutscht weg"], answer: 0, why: "«Beim Ausatmen lassen sie ein Stück sinken»." },
          { q: "Wer trägt deinen Rücken, laut Audio?", kind: "inferencial", options: ["Der Stuhl", "Deine Arme", "Die Schultern selbst"], answer: 0, why: "«Der Stuhl trägt deinen Rücken — du musst ihn nicht umklammern»." },
          { q: "Was heißt «unten ankommen»?", kind: "inferencial", options: ["Den Körper ruhen lassen statt ihn festzuhalten", "Aufstehen und umhergehen", "Schneller und tiefer atmen"], answer: 0, why: "Del cierre del audio: apoyar el cuerpo, no agarrarlo." },
        ],
      },
    },
  ],

  "de-cu-c1-02": [
    {
      id: "md-de-c1-02-1", theme: "spiritualità",
      title: "Der Tisch vor dem Fenster", titleEs: "La mesa junto a la ventana",
      minutes: 3,
      paragraphs: [
        { it: "Der Schreibtisch ist alt, das Holz hat Kratzer, und vor dem Fenster wechselt das Licht des Tages. Wer hier arbeitet, übt mehr als einen Beruf: Jedes ordentliche Aufräumen ist ein kleiner Respekt vor dem kommenden Tag. In vielen Traditionen ist die Pflege des Ortes die erste Übung — nicht weil der Ort heilig wäre, sondern weil man der Aufmerksamkeit einen Ort gibt.", es: "El escritorio es viejo, la madera tiene arañazos, y ante la ventana cambia la luz del día. Quien trabaja aquí practica algo más que un oficio: cada pequeño orden es un gesto de respeto hacia el día que viene. En muchas tradiciones, el cuidado del lugar es el primer ejercicio — no porque el lugar sea sagrado, sino porque uno le da un lugar a la atención." },
        { it: "Am Abend, wenn der Laptop zugeht, bleibt noch ein Moment: der Blick über das Holz, die Kratzer, das Licht. Dankbarkeit für einen Arbeitstag ist keine Pflicht; sie ist eine Tür. Wer durch sie geht, merkt, dass Arbeit nicht nur verbraucht, sondern auch nährt — dass der Tisch geduldig war und das Fenster den Himmel geliefert hat.", es: "Por la noche, cuando el portátil se cierra, queda todavía un momento: la mirada sobre la madera, los arañazos, la luz. La gratitud por una jornada de trabajo no es un deber; es una puerta. Quien la cruza nota que el trabajo no solo consume, también alimenta — que la mesa fue paciente y la ventana trajo el cielo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un anuncio de escritorios de lujo", "El cuidado del propio lugar de trabajo como práctica espiritual", "Un manual de carpintería"],
        answer: 1,
        why: "La mesa y la ventana funcionan como motivo contemplativo: cuidado, gratitud y atención, no mobiliario.",
      },
      quiz: [
        { q: "Was steht auf dem alten Holz des Tisches?", kind: "literal", options: ["Kratzer", "Blumen", "Inschriften"], answer: 0, why: "«Das Holz hat Kratzer»: literal en la primera frase." },
        { q: "Warum ist die Pflege des Ortes die erste Übung?", kind: "inferencial", options: ["Weil der Ort heilig ist", "Weil man der Aufmerksamkeit einen Ort gibt", "Weil es sonst Streit gibt"], answer: 1, why: "El texto lo dice: no santidad, sino darle un lugar a la atención." },
        { q: "Was ist Dankbarkeit für einen Arbeitstag, laut Text?", kind: "critica", options: ["Eine Pflicht am Abend", "Eine Tür, durch die Arbeit nährt statt nur zu verbrauchen", "Ein Zeichen von Schwäche"], answer: 1, why: "«Sie ist eine Tür»: la gratitud transforma el trabajo en algo que también alimenta." },
      ],
      vf: [
        { text: "Der Tisch ist neu und makellos.", value: false, why: "«Alt» y con «Kratzer»: viejo y arañado." },
        { text: "Am Abend bleibt ein Moment für den Blick über das Holz.", value: true, why: "«Bleibt noch ein Moment: der Blick über das Holz»: literal." },
        { text: "Arbeit verbraucht nur, sagt der Text.", value: false, why: "«Nicht nur verbraucht, sondern auch nährt»." },
      ],
    },
    {
      id: "md-de-c1-02-2", theme: "relax mentale",
      title: "Das innere Podium", titleEs: "El podio interior",
      minutes: 3,
      paragraphs: [
        { it: "Nachts, wenn das Licht aus ist, tagt manchmal ein Parlament im Kopf: die These sagt Ja, die Antithese sagt Nein, und ein dritter Abgeordneter meldet sich zu Wort, der weder Name noch Wahlkreis hat. Es ist das innere Podium der Sorgen — und es debattiert am liebsten dann, wenn man schlafen will.", es: "De noche, cuando la luz está apagada, a veces sesiona un parlamento en la cabeza: la tesis dice sí, la antítesis dice no, y un tercer diputado pide la palabra sin tener ni nombre ni circunscripción. Es el podio interior de las preocupaciones — y debate sobre todo cuando uno quiere dormir." },
        { it: "Die Übung ist nicht, das Podium abzubauen — Gedanken verscheucht man nicht. Die Übung ist, gutes Publikum zu werden: zuhören, ohne zu applaudieren; wahrnehmen, ohne mitzureden. Wenn keine Frage mehr kommt, wenn keine Antwort mehr gefordert wird, verstummt die Debatte von allein. Was bleibt, ist der Saal, still und warm, und irgendwann schläfst du in ihm ein wie in einem leeren Theater.", es: "El ejercicio no es desmontar el podio — a los pensamientos no se les ahuyenta. El ejercicio es convertirse en buen público: escuchar sin aplaudir; percibir sin intervenir. Cuando ya no llega ninguna pregunta y ya no se exige ninguna respuesta, el debate calla solo. Lo que queda es la sala, en silencio y tibia, y en algún momento te duermes en ella como en un teatro vacío." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una crónica del Bundestag", "Los pensamientos que debaten de noche y cómo aquietarlos", "Un curso de teatro improvisado"],
        answer: 1,
        why: "El «podio interior» señala el debate mental nocturno, no la política real.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Das nächtliche Gedankenparlament ruhig werden lassen, indem man Publikum wird",
          "Debatten im Bundestag sind anstrengend und sollte man abschaffen",
          "Theaterbesuch hilft beim Einschlafen besser als alles andere",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Die These sagt Ja, die Antithese sagt Nein", "Gedanken verscheucht man nicht", "Der Saal bleibt still und warm"],
        distractors: ["Der dritte Abgeordnete hat einen Wahlkreis", "Man soll das Podium gewaltsam abbauen", "Applaudieren beruhigt die Debatte"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Nachts tagt manchmal ein Parlament im Kopf.",
          "Die These sagt Ja, die Antithese sagt Nein.",
          "Ein dritter Abgeordneter meldet sich zu Wort.",
          "Die Abgeordneten erhalten ein Jahresgehalt vom Staat.",
          "Die Übung ist, gutes Publikum zu werden.",
        ],
        intruder: 3,
        why: "El sueldo anual de los diputados pertenece al parlamento real, no al parlamento interior de pensamientos.",
      },
    },
    {
      id: "md-de-c1-02-3", theme: "meditazione",
      title: "Die leere Seite", titleEs: "La página vacía",
      minutes: 2,
      paragraphs: [
        { it: "Vor dir liegt die leere Seite, und sie hat etwas Drohendes: Sie verlangt eine Meinung, und zwar eine gute. Bevor du schreibst, setze einen Punkt. Nur einen Punkt, mitten auf das weiße Feld. Er ist keine Meinung und kein Argument; er ist ein Anker. Atme zu ihm hin, atme von ihm weg.", es: "Ante ti está la página vacía, y tiene algo de amenaza: exige una opinión, y además buena. Antes de escribir, pon un punto. Solo un punto, en medio del campo blanco. No es una opinión ni un argumento; es un ancla. Respira hacia él, respira alejándote de él." },
        { it: "Der Punkt bleibt, während die Gedanken kommen: die Angst vor der Bewertung, die Erinnerung an die letzte Arbeit, die Stimme der Antithese. Alles darf da sein — du schaust nur zum Punkt und zurück zum Atem. Irgendwann bemerkst du, dass die Seite nicht mehr leer ist: Der Punkt ist zum Anfang geworden, und die Synthese schreibt sich von selbst weiter. So beginnt Meditation: nicht mit einem leeren Kopf, sondern mit einem Punkt, der hält.", es: "El punto queda, mientras llegan los pensamientos: el miedo a la nota, el recuerdo del último trabajo, la voz de la antítesis. Todo puede estar — tú solo miras el punto y vuelves a la respiración. En algún momento notas que la página ya no está vacía: el punto se ha vuelto comienzo, y la síntesis sigue escribiéndose sola. Así empieza la meditación: no con una cabeza vacía, sino con un punto que sostiene." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una lección de tipografía", "Un ancla de atención ante la página en blanco", "Cómo borrar mejor los borradores"],
        answer: 1,
        why: "La página vacía que exige opinión y el punto-ancla: el texto enseña calma ante el blanco.",
      },
      sequence: {
        instr: "Ordena los pasos del ejercicio:",
        events: [
          "Vor dir liegt die leere Seite",
          "Du setzt einen Punkt mitten auf das weiße Feld",
          "Du atmest zu ihm hin und von ihm weg",
          "Die Gedanken kommen und gehen, du schaust zum Punkt",
          "Der Punkt wird zum Anfang der Synthese",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Wenn du vor der leeren Seite sitzt, halte einen Moment still. Setze einen Punkt in die Mitte des Feldes. Atme ein, atme aus, und lass den Punkt einfach da sein. Er ist kein Fehler und kein Anfang — er ist nur ein Anker für deine Aufmerksamkeit. Wenn die Gedanken kommen, schau zurück zum Punkt. Mehr ist nicht zu tun.",
        questions: [
          { q: "Was setzt du in die Mitte des Feldes?", kind: "literal", options: ["Einen Punkt", "Ein Foto", "Eine Überschrift"], answer: 0, why: "«Setze einen Punkt in die Mitte des Feldes»." },
          { q: "Was ist der Punkt, laut Audio?", kind: "literal", options: ["Ein Fehler", "Ein Anker für die Aufmerksamkeit", "Der Anfang des Textes"], answer: 1, why: "«Er ist kein Fehler und kein Anfang — er ist nur ein Anker»." },
          { q: "Was tust du, wenn Gedanken kommen?", kind: "inferencial", options: ["Ich schreibe sie sofort auf", "Ich schaue zurück zum Punkt", "Ich mache das Licht aus"], answer: 1, why: "«Wenn die Gedanken kommen, schau zurück zum Punkt»: la vuelta al ancla." },
          { q: "Welche Grundhaltung vermittelt das Audio?", kind: "inferencial", options: ["Weniger tun und halten statt hetzen", "Schnell schreiben, bevor der Punkt verschwindet", "Die Seite am besten weglegen"], answer: 0, why: "«Mehr ist nicht zu tun»: la actitud es simplicidad, no prisa." },
        ],
      },
    },
  ],

  "de-cu-c1-03": [
    {
      id: "md-de-c1-03-1", theme: "qui e ora",
      title: "Stille am Rednerpult", titleEs: "Silencio en el atril",
      minutes: 2,
      paragraphs: [
        { it: "Das Mikrofon ist an, der Saal wartet, und der Zettel mit der Rede liegt bereit. Jetzt kommt der Moment, den niemand sieht: die drei Sekunden Stille, bevor der erste Satz kommt. Wer sie aushält, gewinnt sie; wer sie füllt, verliert sie. In dieser Stille ist kein Versagen — in ihr trittst du ein in den Raum und in die Rede zugleich.", es: "El micrófono está abierto, la sala espera, y la hoja con el discurso está lista. Llega entonces el momento que nadie ve: los tres segundos de silencio antes de la primera frase. Quien los sostiene, los gana; quien los rellena, los pierde. En ese silencio no hay fracaso — en él entras a la vez en la sala y en el discurso." },
        { it: "Fühle die Füße hinter dem Pult, das Gewicht, das nach unten sinkt, den Atem, der von selbst kommt. Der Saal ist keine Prüfung, er ist nur ein Raum voller Menschen, die zuhören wollen. Wenn du so weit bist, nimm den Zettel — oder lass ihn — und beginne. Die Stille hat dich vorbereitet; jetzt darfst du sprechen. Redezeit ist Gegenwart, und Gegenwart ist Redezeit.", es: "Siente los pies tras el atril, el peso que se hunde, la respiración que llega sola. La sala no es un examen, es solo un espacio lleno de gente que quiere escuchar. Cuando llegues ahí, toma la hoja — o déjala — y empieza. El silencio te ha preparado; ahora puedes hablar. El tiempo de palabra es presencia, y la presencia es tiempo de palabra." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un tutorial de micrófonos", "La pausa consciente antes de empezar a hablar en público", "Un discurso político completo"],
        answer: 1,
        why: "El título sitúa la calma en el atril: es la pausa previa, no la técnica del equipo.",
      },
      quiz: [
        { q: "Was passiert, bevor der erste Satz kommt?", kind: "literal", options: ["Drei Sekunden Stille", "Ein Applaus", "Eine Musik"], answer: 0, why: "«Die drei Sekunden Stille, bevor der erste Satz kommt»." },
        { q: "Was ist der Saal, laut Text?", kind: "inferencial", options: ["Eine Prüfung", "Ein Raum voller Menschen, die zuhören wollen", "Ein feindliches Territorium"], answer: 1, why: "«Der Saal ist keine Prüfung, er ist nur ein Raum voller Menschen»." },
        { q: "Was bedeutet «Redezeit ist Gegenwart»?", kind: "critica", options: ["Redezeit sollte man immer ausnutzen", "Gutes Reden wächst aus der Gegenwart, nicht aus der Hetze", "Pausen sind verschwendete Redezeit"], answer: 1, why: "La tesis final: hablar bien nace de la presencia; la pausa no es pérdida." },
      ],
      vf: [
        { text: "Wer die Stille füllt, gewinnt sie.", value: false, why: "«Wer sie füllt, verliert sie»: lo contrario." },
        { text: "Du sollst die Füße hinter dem Pult spüren.", value: true, why: "«Fühle die Füße hinter dem Pult»: literal." },
        { text: "Der Saal ist eine Prüfung, sagt der Text.", value: false, why: "«Der Saal ist keine Prüfung»." },
      ],
    },
    {
      id: "md-de-c1-03-2", theme: "relax fisico",
      title: "Die Stimme kommt aus dem Bauch", titleEs: "La voz viene del vientre",
      minutes: 2,
      paragraphs: [
        { it: "Vor der Rede zittert die Stimme nicht, weil sie schwach ist — sie zittert, weil sie zu hoch sitzt. Die Übung der Sänger und Redner: Eine Hand auf den Bauch, eine Hand auf die Brust. Beim Einatmen hebt sich der Bauch, die Hand mit ihm; die Schultern bleiben unten, wo sie hingehören. Die Stimme darf aus dem Bauch kommen, nicht aus dem Hals.", es: "Antes del discurso la voz no tiembla porque sea débil — tiembla porque está colocada demasiado arriba. El ejercicio de cantantes y oradores: una mano en el vientre, otra en el pecho. Al inhalar, el vientre se levanta y la mano con él; los hombros se quedan abajo, donde pertenecen. La voz puede venir del vientre, no de la garganta." },
        { it: "Dreimal so atmen, bevor du ans Pult gehst: ein, zwei, drei. Der Atem wird zum Fundament der Rede, so wie das Fundament den Saal trägt. Wenn die Nervosität kommt — und sie kommt —, darfst du zurück zum Bauch, mitten im Satz, mitten im Wort. Kein Mensch merkt es, und deine Stimme bleibt ruhig, auch wenn der Puls es nicht ist.", es: "Respira así tres veces antes de acercarte al atril: uno, dos, tres. La respiración se vuelve el cimiento del discurso, igual que el cimiento sostiene la sala. Cuando lleguen los nervios — y llegan —, puedes volver al vientre, en mitad de frase, en mitad de palabra. Nadie lo nota, y tu voz sigue tranquila aunque el pulso no lo esté." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una clase de canto profesional", "Respirar desde el vientre para sostener la voz al hablar", "Una dieta para oradores"],
        answer: 1,
        why: "La voz «desde el vientre» es la respiración diafragmática del orador, no una clase de canto.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Die Stimme wird ruhig, wenn sie aus dem Bauch kommt statt aus dem Hals",
          "Eine zitternde Stimme verrät mangelnde Professionalität",
          "Vor jeder Rede sollte man schweigen, bis das Zittern vorbei ist",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Eine Hand auf den Bauch, eine Hand auf die Brust",
          "Die Schultern bleiben unten, wo sie hingehören",
          "Mitten im Satz darfst du zurück zum Bauch, ohne dass es jemand merkt",
        ],
        distractors: [
          "Beim Einatmen sollen die Schultern mit hochgehen",
          "Nur Sänger brauchen Bauchatmung, Redner nicht",
          "Wenn der Puls unruhig ist, muss die Stimme abbrechen",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Vor der Rede zittert die Stimme, weil sie zu hoch sitzt.",
          "Eine Hand auf den Bauch, eine Hand auf die Brust.",
          "Beim Einatmen hebt sich der Bauch, die Schultern bleiben unten.",
          "Das Mikrofon muss vor jeder Rede neu kalibriert werden.",
          "Kein Mensch merkt es, und deine Stimme bleibt ruhig.",
        ],
        intruder: 3,
        why: "La calibración del micrófono es técnica de sonido, ajena al texto: aquí la práctica es respiratoria, no de equipo.",
      },
    },
    {
      id: "md-de-c1-03-3", theme: "spiritualità",
      title: "Worte, die verbinden", titleEs: "Palabras que unen",
      minutes: 3,
      paragraphs: [
        { it: "Es gibt Worte, die bauen Brücken, und Worte, die ziehen Mauern hoch. Der Unterschied liegt nicht im Wörterbuch, sondern im Atem: Wer ruhig atmet und langsam spricht, wählt andere Worte als wer anhält und hetzt. In vielen Traditionen gilt die Sprache als heilige Handlung — nicht weil einzelne Wörter zaubern, sondern weil Sprechen immer Begegnung ist.", es: "Hay palabras que tienden puentes y palabras que levantan muros. La diferencia no está en el diccionario, sino en la respiración: quien respira tranquilo y habla despacio elige palabras distintas de quien se contiene y se apresura. En muchas tradiciones, hablar es un acto sagrado — no porque ciertas palabras hagan magia, sino porque hablar es siempre encuentro." },
        { it: "Die Übung ist einfach und anspruchsvoll: Sprich heute einmal so, dass der andere größer wird statt kleiner. Keine Schmeichelei — nur Genauigkeit. Ein Satz wie «Ich verstehe, wie du darauf gekommen bist» verbindet mehr als zehn Argumente. Am Ende des Tages zählt nicht, wer recht hatte, sondern wer verbunden hat. Das ist die stille Spiritualität der Rede: Sie verwandelt Zuhörer in Menschen und Sprecher in Mitmenschen.", es: "El ejercicio es simple y exigente: habla hoy una vez de modo que el otro crezca en lugar de encoger. Sin adulación — solo precisión. Una frase como «entiendo cómo llegaste a eso» une más que diez argumentos. Al final del día no cuenta quién tenía razón, sino quién conectó. Esa es la espiritualidad silenciosa del habla: convierte oyentes en personas y oradores en prójimos." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un tratado de lingüística", "Hablar de forma que una a las personas", "Un curso de debate competitivo"],
        answer: 1,
        why: "«Palabras que unen» anuncia una ética del habla, no teoría lingüística.",
      },
      sequence: {
        instr: "Ordena los pasos del ejercicio:",
        events: [
          "Du bemerkst: Manche Worte bauen Brücken, andere ziehen Mauern hoch",
          "Du sprichst einmal so, dass der andere größer wird statt kleiner",
          "Du verzichtest auf Schmeichelei und wählst Genauigkeit",
          "Du sagst einen Satz wie «Ich verstehe, wie du darauf gekommen bist»",
          "Am Ende des Tages zählt, wer verbunden hat",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Heute gibt es eine einzige Übung: Sprich einmal so, dass der andere größer wird. Nicht lauter, nicht netter — nur genau. Atme vor dem Satz einmal ruhig aus, und wähle dann die Worte, die passen. Ein einziger verstehender Satz verbindet mehr als zehn Argumente. Und wenn der Tag zu Ende geht, frage dich nicht, wer recht hatte, sondern wer verbunden hat.",
        questions: [
          { q: "Was ist die einzige Übung des Tages?", kind: "literal", options: ["Einmal so sprechen, dass der andere größer wird", "Zehn Argumente sammeln", "Den ganzen Tag schweigen"], answer: 0, why: "«Sprich einmal so, dass der andere größer wird»." },
          { q: "Was tust du vor dem Satz?", kind: "literal", options: ["Ich atme einmal ruhig aus", "Ich zähle laut bis zehn", "Ich wiederhole den Satz leise"], answer: 0, why: "«Atme vor dem Satz einmal ruhig aus»." },
          { q: "Worauf verzichtest du bei der Wortwahl?", kind: "inferencial", options: ["Auf Schmeichelei und Lautstärke", "Auf freundliche Worte", "Auf Genauigkeit"], answer: 0, why: "«Nicht lauter, nicht netter — nur genau»: la precisión sustituye a la adulación." },
          { q: "Welche Frage stellst du am Tagesende?", kind: "inferencial", options: ["Wer hat verbunden?", "Wer hatte recht?", "Wer hat länger gesprochen?"], answer: 0, why: "«Nicht, wer recht hatte, sondern wer verbunden hat»." },
        ],
      },
    },
  ],

  "de-cu-c1-04": [
    {
      id: "md-de-c1-04-1", theme: "relax mentale",
      title: "Wörter, die niemand übersetzt", titleEs: "Palabras que nadie traduce",
      minutes: 2,
      paragraphs: [
        { it: "Im Gespräch hörst du sie: die kleinen Wörter, die kein Wörterbuch übersetzt. Dein Kopf will sie sofort ins Spanische drehen, zerlegen, vergleichen — und verpasst dabei den Satz, der gerade vorbeizieht. Die Übung: Lass das Wort einfach stehen, wie eine Skulptur im Park. Du musst es nicht verstehen, um da zu sein.", es: "En la conversación las oyes: las palabras pequeñas que ningún diccionario traduce. Tu cabeza quiere girarlas de inmediato al español, desmontarlas, compararlas — y se pierde la frase que acaba de pasar. El ejercicio: deja la palabra quieta, como una escultura en el parque. No tienes que entenderla para estar ahí." },
        { it: "Verstehen kommt später, wie von selbst, im Schlaf, im zweiten Gespräch, im dritten Kaffee. Was zählt, ist das Loslassen des Übersetzens: Du bist nicht mehr Maschine, sondern Gast. Ein Geist, der nicht jedes Wort festnageln muss, wird weich — und Weichheit ist keine Schwäche, sondern Öffnung. Am Ende des Tages verstehst du mehr als alle Vokabeln zusammen erklären könnten.", es: "La comprensión llega después, sola, dormida, en la segunda conversación, en el tercer café. Lo que cuenta es soltar la traducción: ya no eres máquina, eres invitado. Una mente que no necesita clavar cada palabra se vuelve blanda — y la blandura no es debilidad, sino apertura. Al final del día entiendes más de lo que todas las palabras juntas podrían explicar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un diccionario de falsos amigos", "Soltar la necesidad de traducir cada palabra en la conversación", "Un método para traducir más rápido"],
        answer: 1,
        why: "El título apunta a las partículas intraducibles y a la calma de no traducirlas todo.",
      },
      quiz: [
        { q: "Was will dein Kopf mit den kleinen Wörtern machen?", kind: "literal", options: ["Sie sofort übersetzen", "Sie singen", "Sie vergessen"], answer: 0, why: "«Dein Kopf will sie sofort ins Spanische drehen»." },
        { q: "Wann kommt das Verstehen, laut Text?", kind: "inferencial", options: ["Sofort im ersten Moment", "Später, von selbst", "Nie"], answer: 1, why: "«Verstehen kommt später, wie von selbst, im Schlaf, im zweiten Gespräch»." },
        { q: "Was bedeutet «Weichheit ist keine Schwäche»?", kind: "critica", options: ["Wer weich ist, verliert immer", "Öffnung des Geistes ist stärker als Kontrolle", "Härte braucht niemand"], answer: 1, why: "El texto define la blandura como Öffnung: soltar el control permite entender más." },
      ],
      vf: [
        { text: "Du musst jedes Wort sofort verstehen, um da zu sein.", value: false, why: "«Du musst es nicht verstehen, um da zu sein»." },
        { text: "Der Geist soll jedes Wort festnageln.", value: false, why: "«Ein Geist, der nicht jedes Wort festnageln muss, wird weich»." },
        { text: "Am Ende des Tages verstehst du mehr, als Vokabeln erklären könnten.", value: true, why: "Es el cierre del texto." },
      ],
    },
    {
      id: "md-de-c1-04-2", theme: "meditazione",
      title: "Mal — die Partikel der Ruhe", titleEs: "Mal — la partícula del descanso",
      minutes: 2,
      paragraphs: [
        { it: "Die deutsche Sprache hat ein Wort, das eine ganze Haltung enthält: «mal». Schau mal. Komm mal mit. Ich geh mal kurz raus. Das «mal» sagt: nichts ist endgültig, nichts ist ein Test, alles darf leicht sein. Sprich es leise mit, wenn du es hörst — es ist wie ein kleines Ausatmen mitten im Satz.", es: "La lengua alemana tiene una palabra que contiene una actitud entera: «mal». Schau mal. Komm mal mit. Ich geh mal kurz raus. Ese «mal» dice: nada es definitivo, nada es un examen, todo puede ser ligero. Pronúnciala en voz baja cuando la oigas — es como una pequeña exhalación en mitad de la frase." },
        { it: "Nimm dir das Wort für einen Tag als Meditationsobjekt. Wenn es vorbeikommt — im Bus, im Café, in der Serie —, halte einen Atemzug lang still und spüre die Leichtigkeit, die es trägt. Am Abend wirst du merken: Du hast zwanzigmal kurz innegehalten, zwanzigmal leicht geatmet. Das ist Meditation ohne Meditationskissen — eine Partikel als Übung, ein Wörtchen als Glocke.", es: "Toma la palabra como objeto de meditación por un día. Cuando aparezca — en el autobús, en el café, en la serie —, quédate un ciclo de respiración en silencio y siente la ligereza que transporta. Por la noche notarás: has hecho veinte pausas breves, has respirado ligero veinte veces. Eso es meditación sin cojín — una partícula como ejercicio, una palabrita como campana." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una gramática de partículas alemanas", "Usar la partícula «mal» como recordatorio de respirar", "Una historia sobre campanas de iglesia"],
        answer: 1,
        why: "«La partícula del descanso» convierte el «mal» en campana de mindfulness, no en tema gramatical.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Die Partikel «mal» trägt eine Haltung der Leichtigkeit und kann als Meditationsanker dienen",
          "Ohne Meditationskissen funktioniert Meditation überhaupt nicht",
          "Deutsche Partikeln sind im Grunde grammatikalisch falsch",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["«Mal» sagt: nichts ist endgültig, nichts ist ein Test", "Sprich das Wort leise mit, wenn du es hörst", "Am Abend hast du zwanzigmal leicht geatmet"],
        distractors: ["«Mal» bedeutet «einmal zählen»", "Man muss das Wort laut rufen, damit es wirkt", "Die Serie im Café ist die eigentliche Übung"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Schau mal. Komm mal mit. Ich geh mal kurz raus.",
          "Das «mal» sagt: nichts ist endgültig, nichts ist ein Test.",
          "Sprich es leise mit, wenn du es hörst.",
          "Das «mal» steht immer am Satzanfang und braucht ein Komma.",
          "Halte einen Atemzug lang still, wenn es vorbeikommt.",
        ],
        intruder: 3,
        why: "La regla de posición y coma es una afirmación gramatical ajena al sentido de ligereza que el texto describe.",
      },
    },
    {
      id: "md-de-c1-04-3", theme: "qui e ora",
      title: "Die Pause im Gespräch", titleEs: "La pausa en la conversación",
      minutes: 2,
      paragraphs: [
        { it: "Zwei Menschen reden, und zwischen den Sätzen gibt es Lücken. Der eine füllt jede Lücke sofort — mit «äh», mit einem neuen Satz, mit Aufregung. Der andere lässt die Lücke stehen, einen Herzschlag lang, und schaut. In dieser Lücke wohnt das Eigentliche: der Moment, in dem zwei Menschen sich ansehen, ohne etwas zu müssen.", es: "Dos personas hablan, y entre las frases hay huecos. Uno llena cada hueco de inmediato — con «eh», con una frase nueva, con agitación. El otro deja el hueco quieto, un latido, y mira. En ese hueco vive lo esencial: el momento en que dos personas se miran sin deberse nada." },
        { it: "Die Übung im nächsten Gespräch: Lass eine Lücke stehen. Nicht als Machtspiel, nicht als Kälte — als Raum. Der andere darf hineinsetzen, was er will: einen Gedanken, einen Atemzug, ein Lachen. Du wirst sehen, dass die besten Sätze nicht am Reden hängen, sondern an den Pausen dazwischen. Hier und jetzt ist die Lücke; hier und jetzt bist du.", es: "El ejercicio en la próxima conversación: deja un hueco quieto. No como juego de poder, ni como frialdad — como espacio. El otro puede poner en él lo que quiera: un pensamiento, una respiración, una risa. Verás que las mejores frases no dependen del hablar, sino de las pausas de en medio. Aquí y ahora es el hueco; aquí y ahora estás tú." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas para hablar sin parar", "El valor de dejar pausas en la conversación", "Un duelo de poder en una reunión"],
        answer: 1,
        why: "La pausa en la conversación como espacio compartido, no la técnica de llenarla.",
      },
      sequence: {
        instr: "Ordena los pasos del ejercicio:",
        events: [
          "Zwei Menschen reden, und zwischen den Sätzen gibt es Lücken",
          "Du entscheidest dich, eine Lücke stehen zu lassen",
          "Der andere setzt in den Raum, was er will",
          "Ein Gedanke, ein Atemzug oder ein Lachen erscheint",
          "Du merkst, dass die besten Sätze an den Pausen hängen",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Im nächsten Gespräch passiert etwas Kleines: Eine Lücke tut sich auf, ein Moment ohne Worte. Widerstehe dem Drang, sie zu füllen. Atme einmal in die Lücke hinein und schau den anderen an. Die Stille gehört jetzt euch beiden. Sie ist keine Kälte, sie ist ein offenes Zimmer, in das ein Gedanke einziehen darf.",
        questions: [
          { q: "Was tust sich im Gespräch auf?", kind: "literal", options: ["Eine Lücke ohne Worte", "Ein Streit", "Ein Telefonanruf"], answer: 0, why: "«Eine Lücke tut sich auf, ein Moment ohne Worte»." },
          { q: "Wem gehört die Stille?", kind: "literal", options: ["Euch beiden", "Nur dir", "Dem leiseren Redner"], answer: 0, why: "«Die Stille gehört jetzt euch beiden»." },
          { q: "Was ist die Stille, laut Audio?", kind: "inferencial", options: ["Kälte zwischen zwei Menschen", "Ein offenes Zimmer für einen Gedanken", "Ein Zeichen von Desinteresse"], answer: 1, why: "«Sie ist keine Kälte, sie ist ein offenes Zimmer»: la comparación define la pausa." },
          { q: "Warum widerstehst du dem Drang zu füllen?", kind: "inferencial", options: ["Weil die Lücke dem Gedanken Raum gibt", "Weil Reden anstrengt", "Weil der andere schuld ist"], answer: 0, why: "La pausa abierta permite que un pensamiento se instale: se infiere del cierre." },
        ],
      },
    },
  ],

  "de-cu-c1-05": [
    {
      id: "md-de-c1-05-1", theme: "relax fisico",
      title: "Der Blick in die Ferne", titleEs: "La mirada a lo lejos",
      minutes: 2,
      paragraphs: [
        { it: "Nach Stunden am Bildschirm ist der Blick kurz geworden: Er springt von Buchstabe zu Buchstabe und hält die Welt auf eine Armlänge Distanz. Die alte Übung der Bildschirmarbeiter: Stell dich ans Fenster und such den entferntesten Punkt — einen Schornstein, einen Baum, ein Stück Himmel. Schau ihn an, weich und ohne Anstrengung, zwanzig Atemzüge lang.", es: "Después de horas ante la pantalla, la mirada se ha vuelto corta: salta de letra en letra y mantiene el mundo a un brazo de distancia. El viejo ejercicio de los trabajadores de pantalla: colócate en la ventana y busca el punto más lejano — una chimenea, un árbol, un trozo de cielo. Míralo, suave y sin esfuerzo, durante veinte respiraciones." },
        { it: "Die Augen danken es dir, und mehr noch: Der weite Blick weitet auch den Kopf. Gedanken, die am Schreibtisch feststeckten, lösen sich im Panorama — der Schornstein kennt deine Fristen nicht. Wenn du zurückkehrst, ist der Text kein Feind mehr, nur noch eine Aufgabe unter anderen. Weite draußen, Tiefe drinnen: Das ist der kleine Vertrag zwischen Augen und Arbeit.", es: "Los ojos te lo agradecen, y más aún: la mirada amplia ensancha también la cabeza. Los pensamientos que se habían atascado en el escritorio se sueltan en el panorama — la chimenea no conoce tus plazos. Cuando vuelves, el texto ya no es un enemigo, solo una tarea entre otras. Amplitud fuera, profundidad dentro: ese es el pequeño contrato entre los ojos y el trabajo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un anuncio de ventanas", "Descansar la vista mirando lejos tras horas de pantalla", "Un curso de astronomía"],
        answer: 1,
        why: "La mirada a lo lejos es el clásico descanso visual del trabajo de escritorio.",
      },
      quiz: [
        { q: "Wonach suchst du am Fenster?", kind: "literal", options: ["Den entferntesten Punkt", "Die Fernbedienung", "Den nächsten Parkplatz"], answer: 0, why: "«Such den entferntesten Punkt»: literal." },
        { q: "Was passiert mit den feststeckenden Gedanken?", kind: "inferencial", options: ["Sie lösen sich im Panorama", "Sie verschwinden für immer", "Sie werden noch enger"], answer: 0, why: "«Gedanken, die am Schreibtisch feststeckten, lösen sich im Panorama»." },
        { q: "Was ist der Text, wenn du zurückkehrst?", kind: "critica", options: ["Ein Feind", "Nur noch eine Aufgabe unter anderen", "Unwichtig geworden"], answer: 1, why: "«Der Text ist kein Feind mehr, nur noch eine Aufgabe unter anderen»: la mirada lejana relativiza." },
      ],
      vf: [
        { text: "Der weite Blick weitet auch den Kopf.", value: true, why: "Literal en el segundo párrafo." },
        { text: "Der Schornstein kennt deine Fristen, sagt der Text.", value: false, why: "«Der Schornstein kennt deine Fristen nicht»." },
        { text: "Du sollst den Punkt mit voller Anstrengung anschauen.", value: false, why: "«Weich und ohne Anstrengung»." },
      ],
    },
    {
      id: "md-de-c1-05-2", theme: "spiritualità",
      title: "Demut vor dem Befund", titleEs: "Humildad ante el hallazgo",
      minutes: 3,
      paragraphs: [
        { it: "Die Daten sind da, und sie sagen weniger, als man hoffte: ein Zusammenhang, kein Beweis; eine Tendenz, kein Gesetz. Für den Stolz des Forschers ist das ernüchternd — für die Seele des Forschers kann es Übung sein. Demut heißt hier nicht Kriecherei; sie heißt, die Welt größer sein zu lassen als das eigene Ergebnis.", es: "Los datos están ahí, y dicen menos de lo que se esperaba: una relación, no una prueba; una tendencia, no una ley. Para el orgullo del investigador eso desilusiona — para el alma del investigador puede ser ejercicio. Humildad no significa aquí sumisión; significa dejar que el mundo sea más grande que el propio resultado." },
        { it: "Es gibt eine alte Haltung in allen Forschungstraditionen: das Staunen. Wer staunt, will nicht besitzen, sondern betrachten; wer staunt, sagt «siehe» und nicht «sieh her, was ich gefunden habe». Am Ende eines Arbeitstages darfst du die Daten liegen lassen wie ein Kind die Steine am Flussufer — gesammelt, bewundert, zurückgelegt. Morgen sind sie wieder da, und die Welt ist keinen Deut kleiner geworden.", es: "Hay una vieja actitud en todas las tradiciones de investigación: el asombro. Quien se asombra no quiere poseer, sino contemplar; quien se asombra dice «mira» y no «mira lo que he encontrado». Al final de una jornada puedes dejar los datos como el niño deja las piedras en la orilla del río — recogidas, admiradas, devueltas. Mañana siguen ahí, y el mundo no ha empequeñecido nada." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una lección de estadística", "La humildad y el asombro del investigador ante sus datos", "Cómo publicar más rápido"],
        answer: 1,
        why: "La humildad «ante el hallazgo» apunta a la actitud del investigador, no al cálculo.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Demut heißt, die Welt größer sein zu lassen als das eigene Ergebnis",
          "Forschen ist nur etwas für Stolze und Schnelle",
          "Daten muss man besitzen und für immer behalten",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Ein Zusammenhang ist kein Beweis, eine Tendenz kein Gesetz", "Staunen will betrachten, nicht besitzen", "Du darfst die Daten liegen lassen wie Steine am Flussufer"],
        distractors: ["Demut bedeutet Kriecherei vor der Kommission", "Das Staunen ist eine moderne Erfindung", "Am Flussufer sammelt man Beweise für Veröffentlichungen"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Ein Zusammenhang ist kein Beweis, eine Tendenz kein Gesetz.",
          "Demut heißt, die Welt größer sein zu lassen als das eigene Ergebnis.",
          "Wer staunt, sagt «siehe» und nicht «sieh her, was ich gefunden habe».",
          "Die Daten müssen in einem versiegelten Safe aufbewahrt werden.",
          "Am Abend darfst du die Daten liegen lassen wie Steine am Flussufer.",
        ],
        intruder: 3,
        why: "La caja fuerte sellada es una instrucción administrativa ajena a la actitud contemplativa del texto.",
      },
    },
    {
      id: "md-de-c1-05-3", theme: "relax mentale",
      title: "Das Wir löst sich auf", titleEs: "El «nosotros» se disuelve",
      minutes: 2,
      paragraphs: [
        { it: "Im Fachtext verschwindet das «wir» — die Messungen wurden durchgeführt, die Daten wurden erhoben. Auch der Kopf darf das lernen: Nicht jede Beobachtung braucht einen Beobachter, der sich vorstellt. Wenn du abends die Arbeit loslässt, löst sich das Wir auf, und was bleibt, ist der Blick selbst: still, ohne Eigentümer, ohne Aufgabe.", es: "En el texto especializado desaparece el «wir» — las mediciones fueron realizadas, los datos fueron recogidos. También la cabeza puede aprenderlo: no toda observación necesita un observador que se presente. Cuando por la noche sueltas el trabajo, el «nosotros» se disuelve, y lo que queda es la mirada misma: quieta, sin dueño, sin tarea." },
        { it: "Das ist kein Verlust, sondern ein Feierabend der Pronomen. Du bist nicht weniger, wenn du für zehn Minuten niemand sein musst — im Gegenteil: Erst das losgelassene Ich sieht, wie groß die Nacht ist. Morgen früh kehrt das Wir zurück, mit Liste und Kaffee, und das ist auch gut so. Aber jetzt, im Dunkeln, darf die Beobachtung einfach beobachten.", es: "No es una pérdida, sino el fin de jornada de los pronombres. No eres menos cuando durante diez minutos no tienes que ser nadie — al contrario: solo el «yo» soltado ve lo grande que es la noche. Mañana por la mañana el «nosotros» vuelve, con lista y café, y también eso está bien. Pero ahora, en la oscuridad, la observación puede simplemente observar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una lección de pronombres alemanes", "Descansar la mente soltando el rol del «yo» que trabaja", "Cómo escribir mejores informes en equipo"],
        answer: 1,
        why: "La disolución del «nosotros» es una metáfora del descanso mental, no una clase de gramática.",
      },
      sequence: {
        instr: "Ordena los pasos del descanso:",
        events: [
          "Am Abend lässt du die Arbeit los",
          "Das Wir löst sich auf, und was bleibt, ist der Blick selbst",
          "Für zehn Minuten musst du niemand sein",
          "Das losgelassene Ich sieht, wie groß die Nacht ist",
          "Morgen früh kehrt das Wir zurück, mit Liste und Kaffee",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Wenn du heute Abend die Arbeit loslässt, darfst du auch das Wir loslassen. Die Messungen wurden durchgeführt, die Daten erhoben — kein Satz braucht heute Nacht dein Ich. Atme einmal aus und lass die Beobachtung einfach beobachten. Morgen früh, mit Liste und Kaffee, kehrt alles zurück, was heute ruhen darf.",
        questions: [
          { q: "Was darfst du heute Abend loslassen?", kind: "literal", options: ["Die Arbeit und das Wir", "Das Bücherregal", "Die Liste für immer"], answer: 0, why: "«Du darfst auch das Wir loslassen»." },
          { q: "Wann kehrt alles zurück, was heute ruht?", kind: "literal", options: ["Morgen früh, mit Liste und Kaffee", "Nie wieder", "Noch in derselben Nacht"], answer: 0, why: "«Morgen früh, mit Liste und Kaffee, kehrt alles zurück»." },
          { q: "Was darf die Beobachtung heute Nacht tun?", kind: "inferencial", options: ["Einfach beobachten, ohne Eigentümer", "Weitere Daten sammeln", "Den Bericht zu Ende schreiben"], answer: 0, why: "«Lass die Beobachtung einfach beobachten»: sin dueño y sin tarea." },
          { q: "Welche Haltung vermittelt das Audio?", kind: "inferencial", options: ["Loslassen ist eine Pause, kein Verlust", "Arbeit darf nie losgelassen werden", "Nur nachts denkt man klar"], answer: 0, why: "«Was heute ruhen darf»: el descanso es temporal y no resta nada." },
        ],
      },
    },
  ],

  "de-cu-c1-06": [
    {
      id: "md-de-c1-06-1", theme: "meditazione",
      title: "Der Atem vor dem ersten Satz", titleEs: "La respiración antes de la primera frase",
      minutes: 2,
      paragraphs: [
        { it: "Zwanzig Minuten Vortrag, ein Saal, ein roter Faden — und davor, unsichtbar für alle, der erste Atemzug. Bevor das Mikrofon angeht, atme dreimal: Der erste Atemzug gehört dem Körper, der zweite der Angst, der dritte dem Saal. Was du dann sagst, kommt aus einem ruhigeren Ort.", es: "Veinte minutos de charla, una sala, un hilo conductor — y antes, invisible para todos, la primera respiración. Antes de que el micrófono se encienda, respira tres veces: la primera para el cuerpo, la segunda para el miedo, la tercera para la sala. Lo que digas después saldrá de un lugar más tranquilo." },
        { it: "Die Angst darf mit aufs Pult — sie ist kein Feind, sondern ein Zeichen dafür, dass dir die Sache wichtig ist. Der dritte Atemzug verwandelt sie in Aufmerksamkeit: Der Saal ist nicht länger eine Prüfung, sondern ein Gespräch, das noch nicht begonnen hat. Wenn du dann den Einstieg sagst — die Zahl, die Frage, die Szene —, trägt dich der Atem und nicht der Ehrgeiz. Das Publikum hört den Unterschied.", es: "El miedo puede subir contigo al atril — no es un enemigo, sino la señal de que el asunto te importa. La tercera respiración lo convierte en atención: la sala ya no es un examen, sino una conversación que aún no ha empezado. Cuando pronuncies la apertura — la cifra, la pregunta, la escena —, te sostiene el aliento y no la ambición. El público oye la diferencia." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de ventilación de salas", "Respirar antes de empezar a hablar en público", "Cómo escribir eslóganes"],
        answer: 1,
        why: "La respiración «antes de la primera frase» sitúa el texto en el momento previo a la charla.",
      },
      quiz: [
        { q: "Wem gehört der zweite Atemzug?", kind: "literal", options: ["Dem Körper", "Der Angst", "Dem Saal"], answer: 1, why: "«Der erste gehört dem Körper, der zweite der Angst, der dritte dem Saal»." },
        { q: "Was ist die Angst, laut Text?", kind: "inferencial", options: ["Ein Feind, den man loswerden muss", "Ein Zeichen, dass einem die Sache wichtig ist", "Ein Zeichen von Unprofessionalität"], answer: 1, why: "«Sie ist kein Feind, sondern ein Zeichen dafür, dass dir die Sache wichtig ist»." },
        { q: "Was trägt dich beim Einstieg?", kind: "critica", options: ["Der Ehrgeiz", "Der Atem", "Die Folien"], answer: 1, why: "«Trägt dich der Atem und nicht der Ehrgeiz»." },
      ],
      vf: [
        { text: "Der erste Atemzug gehört dem Saal.", value: false, why: "El primero es del cuerpo; el tercero, de la sala." },
        { text: "Die Angst darf mit aufs Pult.", value: true, why: "Literal: no hay que expulsarla." },
        { text: "Das Publikum hört den Unterschied.", value: true, why: "Es la frase final del texto." },
      ],
    },
    {
      id: "md-de-c1-06-2", theme: "qui e ora",
      title: "Der erste Satz ist jetzt", titleEs: "La primera frase es ahora",
      minutes: 2,
      paragraphs: [
        { it: "Zwanzig Minuten sind eine lange Zeit — und trotzdem besteht der Vortrag aus einem einzigen Moment: dem, der gerade stattfindet. Wenn du am dritten Punkt hängst und an den fünften denkst, verlierst du den dritten; wenn du am ersten Fehler hängst, verlierst du den vierten Satz. Der Zuhörer ist immer nur im Jetzt — und du darfst es auch sein.", es: "Veinte minutos son mucho tiempo — y aun así la charla está hecha de un único momento: el que está ocurriendo. Si te atascaste en el tercer punto y piensas en el quinto, pierdes el tercero; si te quedas en el primer error, pierdes la cuarta frase. El oyente solo vive en el ahora — y tú también puedes." },
        { it: "Die Übung ist ein Satz, still gesprochen, mitten im Vortrag: «Dieser Satz ist jetzt.» Nicht der letzte Satz, nicht die Zusammenfassung — dieser hier. Der Vortrag ist kein Wettrennen gegen die Uhr, sondern eine Abfolge von Jetzts. Wer so spricht, hetzt nicht und verliert nicht; wer so spricht, ist anwesend, auch wenn die zwanzigste Minute kommt. Und die Uhr? Sie darf mitzählen, aber nicht mitreden.", es: "El ejercicio es una frase, dicha en silencio, en mitad de la charla: «Esta frase es ahora». Ni la última frase, ni el resumen — esta. La charla no es una carrera contra el reloj, sino una secuencia de ahoras. Quien así habla no se apresura ni se pierde; quien así habla está presente, aunque llegue el minuto veinte. ¿Y el reloj? Puede contar, pero no opinar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un reloj de cocina para ponencias", "Vivir la charla momento a momento en lugar de correr", "Cómo resumir en veinte minutos"],
        answer: 1,
        why: "«La primera frase es ahora» apunta a la presencia en el momento, no a la gestión del tiempo.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Der Vortrag ist eine Abfolge von Jetzts — Anwesenheit statt Hetze",
          "Zwanzig Minuten sind grundsätzlich zu kurz für gute Vorträge",
          "Man sollte während des Vortrags ständig an die Zusammenfassung denken",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Wenn du an den fünften Punkt denkst, verlierst du den dritten", "Der Zuhörer ist immer nur im Jetzt", "Die Uhr darf mitzählen, aber nicht mitreden"],
        distractors: ["Der erste Fehler ist der wichtigste Satz eines Vortrags", "Wettrennen gegen die Uhr machen Vorträge besser", "Die zwanzigste Minute ist verboten"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Wenn du am dritten Punkt hängst und an den fünften denkst, verlierst du den dritten.",
          "Der Zuhörer ist immer nur im Jetzt.",
          "Der Vortrag ist ein Wettrennen gegen die Uhr, das man unbedingt gewinnen muss.",
          "Die Übung ist ein stiller Satz: «Dieser Satz ist jetzt.»",
          "Die Uhr darf mitzählen, aber nicht mitreden.",
        ],
        intruder: 2,
        why: "La carrera contra el reloj es justo lo que el texto niega: la charla es secuencia de presentes, no competición.",
      },
    },
    {
      id: "md-de-c1-06-3", theme: "relax fisico",
      title: "Füße auf dem Boden", titleEs: "Pies en el suelo",
      minutes: 2,
      paragraphs: [
        { it: "Hinter dem Pult geschieht oft ein Verschwinden: Der Redner zieht sich in Kopf und Hals zurück, und der Körper bleibt als Kleiderständer zurück. Die Gegenübung beginnt unten: Spüre die Füße. Links, rechts, Socken, Boden. Das Gewicht darf sinken, durch die Beine hindurch, in den Boden, der den Saal trägt — und der dich mitträgt.", es: "Tras el atril ocurre a menudo una desaparición: el orador se retira a cabeza y cuello, y el cuerpo queda como perchero. La contrapráctica empieza abajo: siente los pies. Izquierdo, derecho, calcetines, suelo. El peso puede hundirse, a través de las piernas, hasta el suelo que sostiene la sala — y que te sostiene también a ti." },
        { it: "Vor jedem Übergang — erster Punkt, zweiter Punkt, Schluss — eine halbe Sekunde Bodenkontakt: Die Zehen dürfen sich im Schuh bewegen, der Atem darf unten ankommen. Ein Redner mit Füßen wirkt anders als ein Redner ohne: erdiger, ruhiger, schwerer im guten Sinn. Die Stimme merkt es, der Saal merkt es, und am meisten merkt es der, der steht und spricht.", es: "Antes de cada transición — primer punto, segundo punto, cierre — medio segundo de contacto con el suelo: los dedos pueden moverse dentro del zapato, la respiración puede llegar abajo. Un orador con pies parece distinto que uno sin ellos: más terroso, más quieto, más pesado en el buen sentido. La voz lo nota, la sala lo nota, y lo nota sobre todo quien está de pie hablando." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una tienda de zapatos", "Apoyarse en los pies para hablar con más calma", "Un ejercicio de baile"],
        answer: 1,
        why: "Los pies en el suelo son la base física del orador tras el atril.",
      },
      sequence: {
        instr: "Ordena los pasos de la práctica:",
        events: [
          "Du spürst die Füße hinter dem Pult",
          "Das Gewicht sinkt durch die Beine in den Boden",
          "Vor jedem Übergang machst du eine halbe Sekunde Bodenkontakt",
          "Die Zehen dürfen sich im Schuh bewegen",
          "Die Stimme, der Saal und du selbst merken die Ruhe",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Stell dich hinter das Pult und schau kurz nach unten — nicht mit dem Kopf, nur mit der Aufmerksamkeit. Deine Füße stehen auf dem Boden. Lass das Gewicht durch die Beine sinken. Der Boden trägt den Saal, und er trägt dich mit. Vor deinem nächsten Satz gehst du kurz in die Füße. Dann sprichst du, getragen und ruhig.",
        questions: [
          { q: "Wohin geht die Aufmerksamkeit zuerst?", kind: "literal", options: ["Nach unten, zu den Füßen", "Zur Decke", "Zum Publikum"], answer: 0, why: "«Schau kurz nach unten — nur mit der Aufmerksamkeit»." },
          { q: "Was trägt der Boden?", kind: "literal", options: ["Den Saal und dich mit", "Nur die Stühle", "Das Mikrofon"], answer: 0, why: "«Der Boden trägt den Saal, und er trägt dich mit»." },
          { q: "Was tust du vor dem nächsten Satz?", kind: "inferencial", options: ["Ich gehe kurz in die Füße", "Ich trinke Wasser", "Ich blättere um"], answer: 0, why: "«Vor deinem nächsten Satz gehst du kurz in die Füße»." },
          { q: "Wie sprichst du danach?", kind: "inferencial", options: ["Getragen und ruhig", "Laut und schnell", "Kalt und distanziert"], answer: 0, why: "«Dann sprichst du, getragen und ruhig»." },
        ],
      },
    },
  ],

  "de-cu-c1-07": [
    {
      id: "md-de-c1-07-1", theme: "spiritualità",
      title: "Der Dienstweg als Übung", titleEs: "El cauce oficial como ejercicio",
      minutes: 3,
      paragraphs: [
        { it: "Der Antrag braucht ein Formular, das Formular braucht eine Frist, das Amt braucht Geduld — und du brauchst eine Haltung. Der Dienstweg ist keine Gerade, sondern ein Weg mit Bögen, und wer auf ihm geht, darf üben, was alle Traditionen lehren: einen Schritt nach dem anderen, das Ziel nicht in jeder Minute mit sich schleppen.", es: "La solicitud necesita un formulario, el formulario un plazo, la oficina paciencia — y tú necesitas una actitud. El cauce oficial no es una línea recta, sino un camino con curvas, y quien lo recorre puede practicar lo que enseñan todas las tradiciones: un paso tras otro, sin arrastrar la meta en cada minuto." },
        { it: "Es gibt eine stille Würde in jedem erledigten Formular: Jede Zeile ist ein Versprechen, das die Verwaltung später halten oder prüfen wird. Wer so wartet, wartet nicht verloren; wer so wartet, verwandelt Wartezimmer in Übungsraum. Und wenn der Brief mit dem Stempel kommt, ist es nicht nur ein Dokument — es ist der Beweis, dass Geduld eine Adresse hat.", es: "Hay una silenciosa dignidad en cada formulario completado: cada línea es una promesa que la administración luego cumplirá o comprobará. Quien así espera no espera perdido; quien así espera convierte la sala de espera en sala de práctica. Y cuando llega la carta con el sello, no es solo un documento — es la prueba de que la paciencia tiene dirección." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una crítica al estado alemán", "Vivir los trámites con paciencia paso a paso", "Cómo falsificar sellos oficiales"],
        answer: 1,
        why: "El cauce oficial «como ejercicio» convierte la burocracia en práctica de paciencia.",
      },
      quiz: [
        { q: "Was braucht der Antrag alles?", kind: "literal", options: ["Ein Formular, eine Frist und Geduld", "Nur Geld", "Sofort einen Anwalt"], answer: 0, why: "«Der Antrag braucht ein Formular, das Formular braucht eine Frist, das Amt braucht Geduld»." },
        { q: "Was geschieht mit dem Wartenden, der so wartet?", kind: "inferencial", options: ["Er verwandelt Wartezimmer in Übungsraum", "Er verliert die Zeit", "Er wird wütend"], answer: 0, why: "«Wer so wartet, verwandelt Wartezimmer in Übungsraum»." },
        { q: "Was ist der Brief mit dem Stempel am Ende?", kind: "critica", options: ["Nur Papier", "Der Beweis, dass Geduld eine Adresse hat", "Eine Beleidigung"], answer: 1, why: "«Es ist der Beweis, dass Geduld eine Adresse hat»." },
      ],
      vf: [
        { text: "Der Dienstweg ist eine Gerade, sagt der Text.", value: false, why: "«Keine Gerade, sondern ein Weg mit Bögen»." },
        { text: "Jede Zeile eines Formulars ist ein Versprechen.", value: true, why: "Literal en el segundo párrafo." },
        { text: "Wer so wartet, wartet verloren.", value: false, why: "«Wer so wartet, wartet nicht verloren»." },
      ],
    },
    {
      id: "md-de-c1-07-2", theme: "relax mentale",
      title: "Das Formular loslassen", titleEs: "Soltar el formulario",
      minutes: 2,
      paragraphs: [
        { it: "Abgegeben. Der Umschlag ist weg, die Nachweise in Kopie geprüft, die Frist notiert. Doch im Kopf geht die Behörde weiter: Der Sachbearbeiter liest, wägt, zweifelt — und du sitzt mit am Schreibtisch deiner Fantasie. Die Übung des Abends: Schließe die innere Akte. Was getan ist, ist getan; was kommt, kommt mit der Post.", es: "Entregado. El sobre se ha ido, los justificantes revisados por duplicado, el plazo anotado. Pero en la cabeza la oficina sigue: la funcionaria lee, pondera, duda — y tú te sientas con ella en el escritorio de tu fantasía. El ejercicio de la noche: cierra el expediente interior. Lo que está hecho, está hecho; lo que venga, vendrá por correo." },
        { it: "Stell dir die Akte vor, wie sie wirklich ist: Papier in einem Regal, ruhend, wartend, ohne dich. Du bist nicht mehr Teil des Vorgangs — du bist der Mensch, der den Vorgang beauftragt hat. Atme einmal tief in diese Rolle. Der Kopf wird leerer, nicht weil du unterdrückst, sondern weil du abgibst: ans Regal, ans Papier, an die Zeit. Das ist der schönste Stempel: der, den du dir selbst gibst.", es: "Imagina el expediente tal como es: papel en una estantería, en reposo, esperando, sin ti. Ya no formas parte del trámite — eres la persona que lo encargó. Respira hondo dentro de ese papel. La cabeza se vacía, no porque reprimas, sino porque entregas: a la estantería, al papel, al tiempo. Ese es el mejor sello: el que te pones tú mismo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo rellenar formularios mejor", "Descansar la mente después de entregar un trámite", "Una guía de filatelia"],
        answer: 1,
        why: "Soltar el formulario tras entregarlo: el texto va del trámite hecho a la mente en calma.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Nach der Abgabe darfst du die innere Akte schließen und loslassen",
          "Man muss das Amt täglich anrufen, bis der Brief kommt",
          "Formulare sollte man in doppelter Sorge mit nach Hause nehmen",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Die Behörde geht im Kopf weiter, wenn man sie nicht stoppt", "Du bist der Mensch, der den Vorgang beauftragt hat", "Der Kopf wird leerer durch Abgeben, nicht durch Unterdrücken"],
        distractors: ["Der schönste Stempel kommt vom Sachbearbeiter", "Das Regal der Akten gehört dir", "Die Post bringt immer schlechte Nachrichten"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Abgegeben: Der Umschlag ist weg, die Frist notiert.",
          "Im Kopf geht die Behörde weiter, wenn man sie nicht stoppt.",
          "Stell dir die Akte vor: Papier in einem Regal, ohne dich.",
          "Du bist verpflichtet, den Sachbearbeiter jede Woche zu besuchen.",
          "Der Kopf wird leerer, weil du abgibst, nicht unterdrückst.",
        ],
        intruder: 3,
        why: "La obligación de visitar semanalmente a la funcionaria es un deber inventado: el texto enseña a soltar, no a vigilar.",
      },
    },
    {
      id: "md-de-c1-07-3", theme: "meditazione",
      title: "Ein Feld, ein Atemzug", titleEs: "Un campo, una respiración",
      minutes: 2,
      paragraphs: [
        { it: "Das Formular hat zweiundvierzig Felder, und jedes will eine Wahrheit. Wer alle auf einmal im Kopf hat, hat keinen Kopf mehr. Die Übung: ein Feld, ein Atemzug. Name — Atemzug. Geburtsdatum — Atemzug. Die Zeilen werden zu Perlen einer Kette, und die Kette wird ruhiger mit jedem Glied.", es: "El formulario tiene cuarenta y dos casillas, y cada una quiere una verdad. Quien las tiene todas a la vez en la cabeza, ya no tiene cabeza. El ejercicio: una casilla, una respiración. Nombre — respiración. Fecha de nacimiento — respiración. Las líneas se vuelven perlas de una cadena, y la cadena se aquieta con cada eslabón." },
        { it: "Gegen Ende, bei den Feldern, die schwer werden — Einkommen, Aufenthaltstitel, Nachweis der Nachweise —, darfst du langsamer werden statt schneller. Die Langsamkeit ist keine Schwäche; sie ist Präzisionsliebe. Ein Formular, das in Ruhe ausgefüllt wurde, sieht man ihm an — es ist fast schön. Und du, der du es gefüllt hast: Du bist am Ende ruhiger als am Anfang. Vierzig Meditationen lang, Feld für Feld.", es: "Hacia el final, en las casillas que pesan — ingresos, permiso de residencia, justificante de los justificantes —, puedes ir más despacio en lugar de más deprisa. La lentitud no es debilidad; es amor a la precisión. Un formulario rellenado en calma se nota — es casi bonito. Y tú, que lo has rellenado: acabas más tranquilo que al principio. Cuarenta meditaciones, casilla a casilla." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de caligrafía", "Rellenar un formulario con calma, casilla a casilla", "Cómo evitar la burocracia"],
        answer: 1,
        why: "«Un campo, una respiración» es la regla de la práctica: una casilla por ciclo de aire.",
      },
      sequence: {
        instr: "Ordena los pasos:",
        events: [
          "Das Formular hat zweiundvierzig Felder",
          "Du entscheidest dich: ein Feld, ein Atemzug",
          "Name — Atemzug, Geburtsdatum — Atemzug",
          "Bei den schweren Feldern wirst du langsamer statt schneller",
          "Am Ende bist du ruhiger als am Anfang",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Nimm dir das Formular vor, aber nicht alle Felder auf einmal. Nur das erste: dein Name. Atme einmal aus, während du ihn schreibst. Dann das nächste Feld, wieder ein Atemzug. Die schweren Zeilen kommen später; wenn sie kommen, darfst du noch langsamer werden. Am Ende legst du den Stift hin und atmest einmal tief. Das Formular ist fertig, und du bist ruhiger als vorher.",
        questions: [
          { q: "Mit welchem Feld beginnst du?", kind: "literal", options: ["Mit deinem Namen", "Mit dem Einkommen", "Mit der Unterschrift"], answer: 0, why: "«Nur das erste: dein Name»." },
          { q: "Was darfst du bei den schweren Zeilen tun?", kind: "literal", options: ["Noch langsamer werden", "Sie überspringen", "Schneller schreiben"], answer: 0, why: "«Wenn sie kommen, darfst du noch langsamer werden»." },
          { q: "Was tust du, während du den Namen schreibst?", kind: "inferencial", options: ["Du atmest einmal aus", "Du singst leise", "Du zählst die Felder"], answer: 0, why: "«Atme einmal aus, während du ihn schreibst»." },
          { q: "Wie endet die Übung, laut Audio?", kind: "inferencial", options: ["Mit Stift hinlegen und einem tiefen Atemzug", "Mit einem neuen Formular", "Mit einem Anruf beim Amt"], answer: 0, why: "«Am Ende legst du den Stift hin und atmest einmal tief»." },
        ],
      },
    },
  ],

  "de-cu-c1-08": [
    {
      id: "md-de-c1-08-1", theme: "qui e ora",
      title: "Die Frage, dann die Stille", titleEs: "La pregunta, luego el silencio",
      minutes: 2,
      paragraphs: [
        { it: "Die Frage ist gestellt — gut, klar, ohne Gift. Jetzt kommt der zweite Teil der Kunst: die Stille danach. Der Fragende hält sie aus; der Antwortende braucht sie. In diesen Sekunden darf nichts geschehen: kein Erklären, kein Verteidigen, kein Nachschieben. Nur die Frage, die im Raum steht wie ein Gegenstand, den man erst betrachten muss, bevor man ihn anfasst.", es: "La pregunta está hecha — buena, clara, sin veneno. Ahora llega la segunda parte del arte: el silencio después. Quien pregunta lo aguanta; quien responde lo necesita. En estos segundos no debe pasar nada: ni explicar, ni defenderse, ni añadir más. Solo la pregunta, plantada en la sala como un objeto que hay que mirar antes de tocarlo." },
        { it: "Wer sofort antwortet, hat die Frage oft nur halb gehört. Wer die Stille nutzt, tut zweierlei: Er hört die Frage ganz — bis zum letzten Wort, das manchmal das wichtigste ist — und er hört sich selbst: den ersten Impuls, den zweiten, den dritten. Dann erst die Antwort, aus der Stille gebaut. Sie klingt anders: weniger schnell, mehr wahr. Hier und jetzt: eine Frage, ein Atemzug, eine Antwort.", es: "Quien responde de inmediato a menudo solo ha oído la mitad de la pregunta. Quien usa el silencio hace dos cosas: oye la pregunta entera — hasta la última palabra, a veces la más importante — y se oye a sí mismo: el primer impulso, el segundo, el tercero. Solo entonces la respuesta, construida desde el silencio. Suena distinta: menos rápida, más verdadera. Aquí y ahora: una pregunta, una respiración, una respuesta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo interrumpir con elegancia", "La pausa consciente entre la pregunta y la respuesta", "Un interrogatorio policial"],
        answer: 1,
        why: "La pregunta y su silencio posterior: el texto trata la pausa del que responde.",
      },
      quiz: [
        { q: "Wofür braucht der Antwortende die Stille?", kind: "literal", options: ["Um die Frage ganz zu hören und sich zu sammeln", "Um Zeit zu schinden", "Um den Raum zu verlassen"], answer: 0, why: "«Der Antwortende braucht sie» y quien la usa «hört die Frage ganz»." },
        { q: "Welches Wort der Frage ist manchmal das wichtigste?", kind: "inferencial", options: ["Das erste", "Das letzte", "Das längste"], answer: 1, why: "«Bis zum letzten Wort, das manchmal das wichtigste ist»." },
        { q: "Wie klingt eine Antwort aus der Stille?", kind: "critica", options: ["Weniger schnell, mehr wahr", "Lauter und härter", "Kürzer und falscher"], answer: 0, why: "«Sie klingt anders: weniger schnell, mehr wahr»." },
      ],
      vf: [
        { text: "Wer sofort antwortet, hat die Frage ganz gehört.", value: false, why: "«Hat die Frage oft nur halb gehört»." },
        { text: "In der Stille darf nichts geschehen: kein Erklären, kein Verteidigen.", value: true, why: "Literal en el primer párrafo." },
        { text: "Die Antwort aus der Stille klingt anders.", value: true, why: "«Sie klingt anders»: literal." },
      ],
    },
    {
      id: "md-de-c1-08-2", theme: "relax fisico",
      title: "Der Kiefer vor der harten Frage", titleEs: "La mandíbula antes de la pregunta dura",
      minutes: 2,
      paragraphs: [
        { it: "Die harte Frage kommt — man sieht sie kommen, Zeile für Zeile. Und der Körper bereitet sich vor: Der Kiefer klemmt, die Zunge wird breit, die Lippen schmal. Zeit für ein kleines Gegenprogramm: Lass den Kiefer hängen, wirklich hängen, wie bei einem gelangweilten Teenager. Keiner sieht es — die Kamera zeigt das Gesicht, nicht das Innere des Mundes.", es: "La pregunta dura llega — se la ve venir, línea a línea. Y el cuerpo se prepara: la mandíbula se bloquea, la lengua se engorda, los labios se estrechan. Tiempo de un pequeño contraprograma: deja colgar la mandíbula, colgada de verdad, como la de un adolescente aburrido. Nadie lo ve — la cámara muestra la cara, no el interior de la boca." },
        { it: "Dreimal darfst du den Kiefer öffnen und schließen, sanft, ohne Geräusch; dann ein Atemzug durch den offenen Mund, langsam. Die Wut oder die Angst bleibt vielleicht — aber sie sitzt nicht mehr im Kiefer. Eine Entspannung im Gesicht ist eine Entspannung im Satz: Die Worte kommen weicher heraus, auch die ablehnenden. Wer den Kiefer hält, hält die Fassung.", es: "Tres veces puedes abrir y cerrar la mandíbula, suave, sin ruido; luego una respiración por la boca abierta, despacio. La rabia o el miedo quizá se queden — pero ya no se sientan en la mandíbula. Una relajación en la cara es una relajación en la frase: las palabras salen más blandas, también las que niegan. Quien sostiene la mandíbula, sostiene la compostura." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía del lenguaje corporal para engañar", "Relajar la mandíbula antes de una pregunta difícil", "Un documental sobre adolescentes"],
        answer: 1,
        why: "La mandíbula antes de la pregunta dura: relajación física aplicada a la entrevista.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Ein entspannter Kiefer hilft, auch harte Antworten ruhig zu formulieren",
          "Harte Fragen sollte man grundsätzlich vermeiden",
          "Die Kamera filmt alles, auch das Innere des Mundes",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Der Körper spannt sich an, wenn die harte Frage kommt", "Dreimal den Kiefer sanft öffnen und schließen", "Die Worte kommen weicher heraus, auch die ablehnenden"],
        distractors: ["Die Zunge wird schmal, wenn man entspannt", "Wut verschwindet für immer nach einem Atemzug", "Laut kauen beruhigt die Kamera"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Der Kiefer klemmt, die Zunge wird breit, die Lippen schmal.",
          "Lass den Kiefer hängen, wie bei einem gelangweilten Teenager.",
          "Dreimal darfst du den Kiefer sanft öffnen und schließen.",
          "Nach der Übung verschwinden alle kritischen Fragen von selbst.",
          "Wer den Kiefer hält, hält die Fassung.",
        ],
        intruder: 3,
        why: "La desaparición automática de las preguntas críticas es una promesa imposible: el texto solo promete calma corporal.",
      },
    },
    {
      id: "md-de-c1-08-3", theme: "spiritualità",
      title: "Zuhören als Praxis", titleEs: "Escuchar como práctica",
      minutes: 3,
      paragraphs: [
        { it: "Es gibt ein Zuhören, das nur wartet, bis es selbst reden darf — man kennt es von jeder Feier. Und es gibt ein anderes: das Zuhören, das den anderen sieht, so wie er ist, ohne die nächste eigene Geschichte bereitzuhalten. Die zweite Sorte ist eine Praxis, und zwar eine spirituelle: Sie setzt voraus, dass der andere wichtig ist, einfach so.", es: "Hay una escucha que solo espera su turno para hablar — se conoce de cualquier fiesta. Y hay otra: la escucha que ve al otro tal como es, sin tener ya lista la siguiente historia propia. La segunda es una práctica, y espiritual: presupone que el otro importa, simplemente así." },
        { it: "Der Interviewer übt es, die Mutter übt es, der Nachtportier übt es: volle Aufmerksamkeit, drei Minuten lang, ohne Ziel. Wer so zuhört, hört mehr als Worte — er hört, wo die Stimme zögert, wo sie leuchtet, wo sie eine Frage vermeidet. Und der, der gehört wird, verändert sich: Er wird langsamer, ehrlicher, menschlicher. Zuhören ist die älteste Form von Achtung.", es: "La entrevista lo practica, la madre lo practica, el portero de noche lo practica: atención plena, tres minutos, sin meta. Quien así escucha oye más que palabras — oye dónde la voz duda, dónde brilla, dónde esquiva una pregunta. Y quien es escuchado se transforma: se vuelve más lento, más honesto, más humano. Escuchar es la forma más antigua de respeto." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas para interrumpir mejor", "La escucha plena como forma de respeto", "Cómo grabar entrevistas"],
        answer: 1,
        why: "Escuchar como práctica espiritual: el texto exalta la atención plena sin meta.",
      },
      sequence: {
        instr: "Ordena los pasos de la práctica:",
        events: [
          "Du entscheidest dich, drei Minuten lang voll zuzuhören, ohne Ziel",
          "Du hältst die nächste eigene Geschichte zurück",
          "Du hörst, wo die Stimme zögert, wo sie leuchtet, wo sie ausweicht",
          "Der andere wird langsamer, ehrlicher, menschlicher",
          "Am Ende bleibt Zuhören als die älteste Form von Achtung",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Es gibt ein Zuhören, das nur wartet, bis es selbst reden darf. Und es gibt ein anderes: drei Minuten volle Aufmerksamkeit, ohne Ziel und ohne die nächste eigene Geschichte. Wer so zuhört, hört, wo die Stimme zögert und wo sie leuchtet. Und der, der gehört wird, verändert sich: Er wird langsamer, ehrlicher, menschlicher. Zuhören ist die älteste Form von Achtung.",
        questions: [
          { q: "Was macht das erste Zuhören?", kind: "literal", options: ["Es wartet nur, bis es selbst reden darf", "Es hört drei Minuten schweigend zu", "Es stellt keine Gegenfragen"], answer: 0, why: "«Ein Zuhören, das nur wartet, bis es selbst reden darf»." },
          { q: "Wie lange dauert die andere Art zuhören?", kind: "literal", options: ["Drei Minuten", "Zehn Minuten", "Eine halbe Stunde"], answer: 0, why: "«Drei Minuten volle Aufmerksamkeit»." },
          { q: "Was hörst du, wenn du so zuhörst?", kind: "inferencial", options: ["Wo die Stimme zögert und wo sie leuchtet", "Nur die Fakten des Gesprächs", "Die Fehler des anderen"], answer: 0, why: "«Hört, wo die Stimme zögert und wo sie leuchtet»." },
          { q: "Wie verändert sich der, der gehört wird?", kind: "inferencial", options: ["Er wird langsamer, ehrlicher, menschlicher", "Er wird nervös und leiser", "Er hört sofort auf zu erzählen"], answer: 0, why: "«Er wird langsamer, ehrlicher, menschlicher»." },
        ],
      },
    },
  ],

  "de-cu-c1-09": [
    {
      id: "md-de-c1-09-1", theme: "meditazione",
      title: "Fünf Wörter, ein Atemzug", titleEs: "Cinco palabras, una respiración",
      minutes: 2,
      paragraphs: [
        { it: "Der Claim hat höchstens fünf Wörter, und jedes einzelne muss sich seinen Platz verdienen. In der Hamburger Agentur sitzt du vor dem Zettel und streichst: das Adjektiv, das Hilfsverb, die halbe Erklärung. Was zuerst nach Verlust aussieht, ist Meditation — Verdichtung ist nichts anderes als die Kunst, loszulassen, Wort für Wort. Ein Atemzug pro Streichung, und der Satz wird leichter.", es: "El claim tiene cinco palabras como máximo, y cada una tiene que ganarse su sitio. En la agencia de Hamburgo estás ante el papel y tachas: el adjetivo, el verbo auxiliar, media explicación. Lo que primero parece pérdida es meditación — condensar no es otra cosa que el arte de soltar, palabra por palabra. Una respiración por cada tachadura, y la frase se aligera." },
        { it: "Am Ende bleibt ein Satz wie ein Stein aus einem Fluss: rund, klein, von vielen Händen glatt geschliffen. «Nicht größer. Nicht schneller. Nur deins.» — siehst du, wie ruhig das klingt? Wer so verdichtet, atmet langsamer; wer langsamer atmet, denkt klarer. Das Meditationskissen der Werbetexter ist der Papierkorb.", es: "Al final queda una frase como una piedra de río: redonda, pequeña, pulida por muchas manos. «Nicht größer. Nicht schneller. Nur deins.» — ¿ves qué serena suena? Quien así condensa respira más despacio; quien respira más despacio piensa con más claridad. El cojín de meditación del publicista es la papelera." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de compra de papeleras finas", "Tachar palabras como práctica meditativa al escribir eslóganes", "La historia completa de una agencia de Hamburgo"],
        answer: 1,
        why: "«Fünf Wörter, ein Atemzug» une la brevedad del claim con la respiración: tachar como meditación.",
      },
      quiz: [
        { q: "Wie viele Wörter hat ein Claim höchstens?", kind: "literal", options: ["Fünf", "Zehn", "Zwanzig"], answer: 0, why: "«Der Claim hat höchstens fünf Wörter»: literal en la apertura." },
        { q: "Was ist Verdichtung, laut Text?", kind: "inferencial", options: ["Die Kunst, loszulassen, Wort für Wort", "Eine Technik, mehr Wörter unterzubringen", "Ein Fehler junger Texter"], answer: 0, why: "«Verdichtung ist nichts anderes als die Kunst, loszulassen»: condensar es soltar." },
        { q: "Was bedeutet «das Meditationskissen ist der Papierkorb»?", kind: "critica", options: ["Wegwerfen ist die eigentliche Übung des Texters", "Man sollte alle Entwürfe aufheben", "Meditation funktioniert nur im Büro"], answer: 0, why: "La imagen convierte el tachar en práctica contemplativa: lo descartado no es una pérdida." },
      ],
      vf: [
        { text: "Jedes Wort im Claim muss sich seinen Platz verdienen.", value: true, why: "«Jedes einzelne muss sich seinen Platz verdienen»: literal." },
        { text: "Wer verdichtet, atmet schneller.", value: false, why: "«Wer so verdichtet, atmet langsamer»: lo contrario." },
        { text: "Der erste Entwurf soll immer der letzte sein.", value: false, why: "El texto presenta el tachar como camino: el papelero es el cojín de meditación." },
      ],
    },
    {
      id: "md-de-c1-09-2", theme: "qui e ora",
      title: "Plakate im Hier und Jetzt", titleEs: "Carteles en el aquí y ahora",
      minutes: 2,
      paragraphs: [
        { it: "Der Weg zum Büro führt an zwanzig Plakaten vorbei, und die meisten Menschen sehen keines: Der Kopf schreibt schon am dritten Claim, das Handy summt, die Ampel ist nur ein Hindernis. Dabei redet die Stadt den ganzen Tag mit dir — «Kommt Zeit. Kommt Rad.» — und jede Fläche ist ein Satz von jemandem, der ihn verdichtet hat. Hier und jetzt heißt es: ein Plakat wirklich lesen, drei Atemzüge lang, statt alle zu überfliegen.", es: "El camino al trabajo pasa junto a veinte carteles, y la mayoría de la gente no ve ninguno: la cabeza ya redacta el tercer claim, el móvil zumba, el semáforo es solo un estorbo. Pero la ciudad habla todo el día contigo — «Kommt Zeit. Kommt Rad.» — y cada superficie es una frase de alguien que la condensó. Aquí y ahora significa: leer de verdad un cartel, tres respiraciones, en lugar de sobrevolarlos todos." },
        { it: "Nimm dir morgen eines vor, nur eines: das Plakat an der Haltestelle, das du sonst übersiehst. Lies den Claim laut in Gedanken, spüre die Ellipse — was fehlt, ergänzt du selbst. Plötzlich bist du nicht mehr Pendler, sondern Leser, und die Stadt wird zur Galerie, durch die du gehst. Der Rest der Werbung darf warten; dieser eine Satz gehört jetzt dir.", es: "Tómate mañana uno, solo uno: el cartel de la parada que normalmente pasas por alto. Lee el claim en voz alta en tu cabeza, siente la elipsis — lo que falta lo completas tú. De pronto ya no eres viajero, sino lector, y la ciudad se vuelve galería por la que caminas. El resto de la publicidad puede esperar; esta frase es tuya ahora." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una crítica a la publicidad urbana", "Leer con atención un cartel del camino al trabajo", "Cómo instalar carteles en una ciudad"],
        answer: 1,
        why: "El título lleva los carteles al «aquí y ahora»: presencia ante un anuncio, no crítica publicitaria.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Ein Plakat wirklich lesen statt alle überfliegen — die Stadt wird zur Galerie der Gegenwart",
          "Werbung sollte aus dem Stadtbild verbannt werden",
          "Claims funktionieren nur im Fernsehen nach 20 Uhr",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Der Weg zum Büro führt an zwanzig Plakaten vorbei",
          "Du spürst die Ellipse: Was fehlt, ergänzt du selbst",
          "Dieser eine Satz gehört jetzt dir",
        ],
        distractors: [
          "Der Kopf schreibt am dritten Claim, weil die Chefin es verlangt",
          "Die Ampel schaltet sich nach den Atemzügen des Lesers",
          "Nur Pendler mit Zeitungsabonnement dürfen Plakate lesen",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Der Weg zum Büro führt an zwanzig Plakaten vorbei.",
          "Das Plakat an der Haltestelle kostet zwei Euro fifty pro Blick.",
          "Die Stadt redet den ganzen Tag mit dir.",
          "Lies den Claim laut in Gedanken, drei Atemzüge lang.",
          "Plötzlich bist du nicht mehr Pendler, sondern Leser.",
        ],
        intruder: 1,
        why: "El precio por mirada es un dato comercial inventado: la lectura del cartel es gratuita y trata de presencia, no de tarifas.",
      },
    },
    {
      id: "md-de-c1-09-3", theme: "relax mentale",
      title: "Der Feierabend der Wörter", titleEs: "El fin de jornada de las palabras",
      minutes: 2,
      paragraphs: [
        { it: "Nach dem Pitch dreht die Wortmaschine weiter: «Rad-ikal» oder lieber «Stadttauglich»? Das Gehirn reimt in der U-Bahn, im Supermarkt, unter der Dusche. Kreativität kennt keinen Feierabend, sagt man — aber der Kopf braucht einen. Irgendwann am Abend musst du die Wörter nach Hause schicken, so wie die Agentur das Licht ausschaltet.", es: "Después del pitch, la máquina de palabras sigue girando: ¿«Rad-ikal» o mejor «Stadttauglich»? El cerebro rima en el metro, en el supermercado, bajo la ducha. La creatividad no conoce fin de jornada, dicen — pero la cabeza lo necesita. A alguna hora de la noche tienes que mandar las palabras a casa, como la agencia apaga la luz." },
        { it: "Die Übung: Sag deinen Claims gute Nacht, einen nach dem anderen. Sie kommen morgen wieder — Wörter sind pünktlich. Was heute nachts nicht gelöst wird, löst sich beim Kaffee von selbst, und wenn nicht, dann übermorgen. Ein Geist, der abends verstummt, ist morgens heller; das weiß jeder, der je einen guten Satz am Morgen gefunden hat, ohne ihn gesucht zu haben.", es: "El ejercicio: da las buenas noches a tus claims, uno por uno. Volverán mañana — las palabras son puntuales. Lo que esta noche no se resuelve se resuelve solo con el café, y si no, pasado mañana. Una mente que calla por la noche brilla más por la mañana; lo sabe quien haya encontrado una buena frase a la mañana siguiente sin haberla buscado." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo escribir eslóganes de noche", "Apagar la máquina de palabras al terminar el día", "Un curso de insomnio creativo"],
        answer: 1,
        why: "El «Feierabend de las palabras» apunta al descanso mental del creativo, no a seguir escribiendo de noche.",
      },
      sequence: {
        instr: "Ordena los pasos del descanso:",
        events: [
          "Nach dem Pitch dreht die Wortmaschine in deinem Kopf weiter",
          "Du bemerkst, dass der Kopf einen Feierabend braucht",
          "Du sagst deinen Claims gute Nacht, einen nach dem anderen",
          "Der Geist verstummt, und du lässt das Ungelöste ungelöst",
          "Am Morgen findest du den guten Satz, ohne ihn gesucht zu haben",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Guten Abend, Wörter. Ihr habt den ganzen Tag gearbeitet: gereimt, verdichtet, gelöscht. Jetzt ist Schluss. Der Claim von morgen ist morgen da — Wörter sind pünktlich, das weißt du. Atme einmal aus und lass die Maschine ausklingen. Was heute offen bleibt, löst sich beim ersten Kaffee. Gute Nacht, «Rad-ikal». Gute Nacht, ihr anderen auch.",
        questions: [
          { q: "Wem sagst du gute Nacht?", kind: "literal", options: ["Den Wörtern und Claims", "Der Chefin der Agentur", "Den Kunden der Radmarke"], answer: 0, why: "«Guten Abend, Wörter… Gute Nacht, ‹Rad-ikal›»." },
          { q: "Warum kannst du loslassen?", kind: "literal", options: ["Weil Wörter pünktlich sind und morgen zurückkommen", "Weil das Schreiben verboten wurde", "Weil du alles gelöst hast"], answer: 0, why: "«Der Claim von morgen ist morgen da — Wörter sind pünktlich»." },
          { q: "Was passiert mit dem Offenen?", kind: "inferencial", options: ["Es löst sich am Morgen beim Kaffee", "Es verschwindet für immer", "Es wird zur Chefin getragen"], answer: 0, why: "«Was heute offen bleibt, löst sich beim ersten Kaffee»." },
          { q: "Welche Geste vermittelt das Audio?", kind: "inferencial", options: ["Ein freundlicher Abschluss statt eines harten Kampfes gegen Gedanken", "Ein strenger Befehl an das Gehirn", "Eine Entschuldigung an den Kunden"], answer: 0, why: "El tono es de despedida amable: dejar que la máquina se apague sola, no apagarla a la fuerza." },
        ],
      },
    },
  ],

  "de-cu-c1-10": [
    {
      id: "md-de-c1-10-1", theme: "relax fisico",
      title: "Die Hände auf dem Tisch", titleEs: "Las manos sobre la mesa",
      minutes: 2,
      paragraphs: [
        { it: "Die Medientrainerin unterbricht dich zum dritten Mal, und dein Körper reagiert, bevor du es merkst: Die Hände ballen sich, die Schultern ziehen hoch, der Atem wird kurz. Genau da beginnt die Übung. Leg die Hände flach auf den Tisch, Handflächen nach unten, und lass sie schwer werden. Der Tisch hält sie; du hältst nichts.", es: "La entrenadora de medios te interrumpe por tercera vez, y tu cuerpo reacciona antes de que lo notes: las manos se cierran, los hombros suben, la respiración se acorta. Justo ahí empieza el ejercicio. Pon las manos planas sobre la mesa, palmas hacia abajo, y deja que pesen. La mesa las sostiene; tú no sostienes nada." },
        { it: "Mit schweren Händen fällt es leichter, ruhig zu bleiben: Der Satz «Lassen Sie mich ausreden» klingt anders, wenn die Fäuste offen sind. Die Trainerin wird es dir bestätigen — im Duell gewinnt nicht, wer lauter ist, sondern wer geerdeter klingt. Und die Erdung beginnt nicht im Kopf, sondern in den Handflächen: zwei Flächen, ein Tisch, ein Atemzug, und der Puls darf langsam wieder Boden finden.", es: "Con las manos pesadas es más fácil mantener la calma: la frase «Lassen Sie mich ausreden» suena distinta con los puños abiertos. La entrenadora te lo confirmará — en el duelo no gana quien grita más, sino quien suena más centrado. Y el arraigo no empieza en la cabeza, sino en las palmas: dos superficies, una mesa, una respiración, y el pulso puede volver a tocar suelo despacio." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de muebles de oficina", "Soltar la tensión de las manos para mantener la calma al debatir", "Cómo golpear la mesa en un duelo televisivo"],
        answer: 1,
        why: "Las manos sobre la mesa son la ancla física de la calma en el debate, no mobiliario ni agresión.",
      },
      quiz: [
        { q: "Was passiert beim dritten Unterbrechen zuerst?", kind: "literal", options: ["Die Hände ballen sich, die Schultern ziehen hoch", "Du verlässt den Raum", "Du sprichst lauter"], answer: 0, why: "«Die Hände ballen sich, die Schultern ziehen hoch»: reacción corporal automática." },
        { q: "Wer hält die Hände, laut Text?", kind: "inferencial", options: ["Der Tisch", "Deine Arme", "Die Trainerin"], answer: 0, why: "«Der Tisch hält sie; du hältst nichts»: el apoyo es externo." },
        { q: "Warum klingt der Satz mit offenen Fäusten anders?", kind: "critica", options: ["Weil die Körperhaltung die Stimme trägt und Ruhe hörbar macht", "Weil leises Sprechen automatisch gewinnt", "Weil die Trainerin es lieber hört"], answer: 0, why: "El texto une cuerpo y voz: quien suena más «geerdet» gana, y esa calma empieza en las manos." },
      ],
      vf: [
        { text: "Im Duell gewinnt, wer am lautesten ist.", value: false, why: "«Nicht, wer lauter ist, sondern wer geerdeter klingt»." },
        { text: "Du legst die Hände flach auf den Tisch und lässt sie schwer werden.", value: true, why: "Literal: la práctica central del texto." },
        { text: "Die Erdung beginnt im Kopf, nicht im Körper.", value: false, why: "«Die Erdung beginnt nicht im Kopf, sondern in den Handflächen»." },
      ],
    },
    {
      id: "md-de-c1-10-2", theme: "relax mentale",
      title: "Die innere Runde vertagen", titleEs: "Aplazar la mesa interior",
      minutes: 3,
      paragraphs: [
        { it: "Das Training ist seit drei Stunden vorbei, doch in deinem Kopf tagt die Runde noch: Du führst die Konter, die dir nachträglich eingefallen sind — «Zwar sind die Kosten hoch, doch sie fallen nur einmal an» —, und der Gegner des Trainings antwortet frisch und falsch zurück. Der Kopf ist ein Studio ohne Sendezeit, und niemand schaltet ab, wenn du es nicht tust.", es: "El entrenamiento acabó hace tres horas, pero en tu cabeza la mesa sigue sesionando: diriges las réplicas que se te ocurrieron después — «Zwar sind die Kosten hoch, doch sie fallen nur einmal an» — y el rival del ensayo responde fresco y equivocado. La cabeza es un estudio sin horario de emisión, y nadie apaga si no lo haces tú." },
        { it: "Die Übung des Abends: die innere Runde vertagen. Schlag mental mit dem Hämmerchen, sag «Hier endet die Sitzung», und räum den Saal: Die Argumente bleiben da — sie sind aus Papier und geduldig. Du darfst müde sein, ohne die Debatte zu verlieren; morgen um zehn ist sie wieder da, mit Kaffee und Verstand. Wer nachts ausruht, antwortet tagsüber schärfer.", es: "El ejercicio de la noche: aplazar la mesa interior. Golpea mentalmente con el mazo, di «aquí termina la sesión» y despeja la sala: los argumentos se quedan — son de papel y pacientes. Puedes estar cansado sin perder el debate; mañana a las diez vuelve, con café y juicio. Quien descansa de noche responde más afilado de día." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Las reglas de horario de un tribunal alemán", "Aplazar el debate interior para poder dormir", "Cómo responder objeciones toda la noche"],
        answer: 1,
        why: "«Aplazar la mesa interior» propone cerrar la sesión mental tras el entrenamiento de medios.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Die nächtliche Debatte im Kopf vertagen — Schlaf ist Teil der Vorbereitung",
          "Gute Kandidaten üben nachts weiter, weil die Kommission es merkt",
          "Einwände sollte man nur morgens um zehn beantworten, nie vorher",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Der Kopf ist ein Studio ohne Sendezeit",
          "Die Argumente sind aus Papier und geduldig — sie laufen nicht weg",
          "Wer nachts ausruht, antwortet tagsüber schärfer",
        ],
        distractors: [
          "Der Gegner des Trainings wartet vor deiner Haustür",
          "Das mentale Hämmerchen muss aus echtem Holz sein",
          "Müdigkeit verliert automatisch jede Debatte",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Das Training ist seit drei Stunden vorbei.",
          "In deinem Kopf tagt die Runde noch.",
          "Der Kopf ist ein Studio ohne Sendezeit.",
          "Die Argumente sind aus Papier und geduldig.",
          "Die Sendung wird sonntags um 18 Uhr nicht ausgestrahlt.",
        ],
        intruder: 4,
        why: "El horario de emisión dominical confunde el símil televisivo con un dato real de programación: el texto no habla de parrillas de TV.",
      },
    },
    {
      id: "md-de-c1-10-3", theme: "meditazione",
      title: "Die Stille vor der ersten Frage", titleEs: "El silencio antes de la primera pregunta",
      minutes: 3,
      paragraphs: [
        { it: "Die Podiumsdiskussion beginnt um 19.30 Uhr, aber deine Übung beginnt früher: in der zweiten Reihe, während die Techniker noch Mikrofone prüfen. Schau den leeren Platz auf der Bühne, atme zu ihm hin und wieder zurück. Die Fragen, die heute Abend kommen, sind noch nirgendwo — auch nicht in dir. Alles, was jetzt ist: ein Stuhl, ein Lichtkegel, dein Atem.", es: "El debate empieza a las 19:30, pero tu práctica empieza antes: en la segunda fila, mientras los técnicos aún prueban micrófonos. Mira el sitio vacío en el escenario, respira hacia él y de vuelta. Las preguntas que llegarán esta noche aún no están en ninguna parte — tampoco en ti. Todo lo que hay ahora: una silla, un haz de luz, tu respiración." },
        { it: "Das ist die Meditation des Debattanten: nicht die Antworten üben, sondern den Raum annehmen, in dem sie fallen werden. Wer den Saal vorher betritt — innen, mit der Aufmerksamkeit —, für den ist er kein Feindesland mehr, sondern Arbeitsplatz. Wenn die erste Frage dann kommt, sitzt du schon lange da. Und die Stille, die du vorhin geübt hast, steht dir im Gesicht, während du antwortest.", es: "Esa es la meditación del debatiente: no ensayar las respuestas, sino recibir el espacio donde caerán. Quien entra antes en la sala — por dentro, con la atención — ya no la vive como territorio enemigo, sino como lugar de trabajo. Cuando llegue la primera pregunta, tú llevas mucho tiempo ahí. Y el silencio que practicaste antes se te queda en la cara mientras respondes." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de iluminación de escenarios", "Meditar en la sala antes de que empiece el debate", "Cómo memorizar respuestas rápidamente"],
        answer: 1,
        why: "El silencio «antes de la primera pregunta» sitúa la práctica en la sala aún vacía, previa al duelo.",
      },
      sequence: {
        instr: "Ordena los pasos de la meditación:",
        events: [
          "Während die Techniker Mikrofone prüfen, sitzt du in der zweiten Reihe",
          "Du schaust den leeren Platz auf der Bühne und atmest zu ihm hin",
          "Du nimmst den Raum an, in dem die Fragen fallen werden",
          "Die erste Frage kommt, und du sitzt schon lange da",
          "Die geübte Stille steht dir im Gesicht, während du antwortest",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Der Saal ist noch leer, nur ein paar Techniker prüfen die Mikrofone. Nutze diese Minuten. Schau auf die Bühne, atme einmal hin, einmal zurück. Die Fragen von heute Abend existieren noch nicht — du brauchst ihnen nicht vorzubeugen. Wenn der erste Satz des Moderators kommt, wirst du bereit sein, nicht weil du geübt hast, sondern weil du da warst.",
        questions: [
          { q: "Was prüfen die Techniker?", kind: "literal", options: ["Die Mikrofone", "Die Beleuchtung der ersten Reihe", "Die Fragen des Moderators"], answer: 0, why: "«Nur ein paar Techniker prüfen die Mikrofone»." },
          { q: "Existieren die Fragen des Abends schon?", kind: "literal", options: ["Nein, noch nicht", "Ja, alle schriftlich", "Nur die erste"], answer: 0, why: "«Die Fragen von heute Abend existieren noch nicht»." },
          { q: "Weshalb wirst du bereit sein?", kind: "inferencial", options: ["Weil du mit der Aufmerksamkeit da warst", "Weil du alle Antworten memoriert hast", "Weil die Techniker dir halfen"], answer: 0, why: "«Nicht, weil du geübt hast, sondern weil du da warst»: presencia antes que ensayo." },
          { q: "Was bedeutet «atme einmal hin, einmal zurück»?", kind: "inferencial", options: ["Die Bühne als Anker der Aufmerksamkeit benutzen", "Auf die Bühne laufen und zurückkommen", "Zweimal laut seufzen"], answer: 0, why: "La respiración dirigida al escenario entrena la presencia en el espacio del duelo." },
        ],
      },
    },
  ],

  "de-cu-c1-11": [
    {
      id: "md-de-c1-11-1", theme: "spiritualità",
      title: "Langsam lesen", titleEs: "Leer despacio",
      minutes: 3,
      paragraphs: [
        { it: "«Wer reitet so spät durch Nacht und Wind?» — der Vers ist über zweihundert Jahre alt und kennt keine Eile. Lies ihn so, wie die Zeit ihn erfunden hat: ein Vers, ein Atemzug. Die Ballade erzählt vom Ritt eines Vaters, aber sie lehrt etwas Stilleres — dass alte Wörter Zeit brauchen, um aufzutauen. Wer liest, was langsamer ist als er, wird selbst langsamer: Das ist die stille Andacht der Literatur.", es: "«Wer reitet so spät durch Nacht und Wind?» — el verso tiene más de doscientos años y no conoce las prisas. Léelo como el tiempo lo inventó: un verso, una respiración. La balada cuenta el galope de un padre, pero enseña algo más quieto — que las palabras viejas necesitan tiempo para descongelarse. Quien lee lo que es más lento que él se vuelve lento también: esa es la quieta reverencia de la literatura." },
        { it: "Nach der letzten Strophe bleib noch einen Moment sitzen, so wie man nach Musik noch sitzen bleibt. Dem Vater ist nicht zu helfen — aber dir: Du hast eine Nacht, ein Pferd und eine Sprache durchmessen, ohne vom Stuhl aufzustehen. Dankbarkeit braucht keinen Adressaten; sie braucht nur einen, der sie fühlt. Die Bücher warten geduldig, und jede Nacht liest du eine andere langsam.", es: "Tras la última estrofa quédate un momento más, como se sigue sentado después de la música. Al padre no se le puede ayudar — pero a ti sí: has recorrido una noche, un caballo y una lengua sin levantarte de la silla. La gratitud no necesita destinatario; solo necesita alguien que la sienta. Los libros esperan pacientes, y cada noche lees despacio otro." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un análisis del Erlkönig para un examen", "Leer poesía despacio, verso a verso, como práctica contemplativa", "Cómo memorizar poemas rápidamente"],
        answer: 1,
        why: "«Leer despacio» propone un ritmo contemplativo: un verso, una respiración, sin meta de examen.",
      },
      quiz: [
        { q: "Wie alt ist der Vers, laut Text?", kind: "literal", options: ["Über zweihundert Jahre", "Zwanzig Jahre", "Zweitausend Jahre"], answer: 0, why: "«Der Vers ist über zweihundert Jahre alt»: literal." },
        { q: "Was passiert mit dem, der liest, was langsamer ist als er?", kind: "inferencial", options: ["Er wird selbst langsamer", "Er wird ungeduldig", "Er hört auf zu lesen"], answer: 0, why: "«Wer liest, was langsamer ist als er, wird selbst langsamer»." },
        { q: "Was braucht Dankbarkeit, laut Text?", kind: "critica", options: ["Keinen Adressaten, nur einen, der sie fühlt", "Ein Gebet mit festen Worten", "Eine Belohnung am Ende"], answer: 0, why: "«Dankbarkeit braucht keinen Adressaten»: una espiritualidad serena, sin dogma." },
      ],
      vf: [
        { text: "Die Ballade kennt keine Eile.", value: true, why: "«Der Vers ist über zweihundert Jahre alt und kennt keine Eile»." },
        { text: "Nach der letzten Strophe sollst du sofort aufstehen.", value: false, why: "«Bleib noch einen Moment sitzen, so wie man nach Musik noch sitzen bleibt»." },
        { text: "Alte Wörter brauchen Zeit, um aufzutauen.", value: true, why: "Literal en el primer párrafo." },
      ],
    },
    {
      id: "md-de-c1-11-2", theme: "qui e ora",
      title: "Vers für Vers durch die Nacht", titleEs: "Verso a verso por la noche",
      minutes: 2,
      paragraphs: [
        { it: "Der Vater reitet, und du liest — beides geschieht Schritt für Schritt. Wer die Ballade überfliegt, verpasst das Eigentliche: dass jede Zeile ein Hufschlag ist, ein Jetzt, das es nur gibt, solange du sie liest. «Dem Vater grauset's» — in diesem Moment graust es wirklich; drei Zeilen später ist es vorbei. Literatur ist der einzige Ritt, bei dem du gleichzeitig reitest und zuschaust.", es: "El padre cabalga y tú lees — ambas cosas ocurren paso a paso. Quien sobrevuela la balada se pierde lo esencial: que cada línea es un casco de caballo, un ahora que solo existe mientras la lees. «Dem Vater grauset's» — en ese momento espanta de verdad; tres líneas después ya pasó. La literatura es el único galope en el que a la vez cabalgas y miras." },
        { it: "Die Übung heißt lesendes Reiten: Nimm dir eine Strophe vor und bleib in ihr, Zeile für Zeile, ohne vorzudenken. Was die nächste Strophe bringt, erfährst du erst, wenn du da bist — so wie der Sohn den Erlkönig erst sieht, wenn der Vers ihn bringt. Wer so liest, ist anwesend in einer erfundenen Nacht; und die erfundene Gegenwart übt, ganz leise, die echte.", es: "El ejercicio se llama galope de lectura: toma una estrofa y quédate en ella, línea a línea, sin adelantarte. Lo que traiga la siguiente lo sabrás cuando estés en ella — igual que el hijo solo ve al rey de los elfos cuando el verso lo trae. Quien así lee está presente en una noche inventada; y el presente inventado entrena, muy quedo, el verdadero." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de equitación nocturna", "Leer una estrofa línea a línea, sin adelantarse", "Cómo escribir baladas propias"],
        answer: 1,
        why: "«Verso a verso por la noche» traslada el galope del Erlkönig al ritmo del lector presente.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Zeile für Zeile lesen: Jede Zeile ist ein Jetzt, das es nur beim Lesen gibt",
          "Der Erlkönig ist eine Ballade über Pferdepflege",
          "Beim Lesen sollte man immer die letzte Seite zuerst lesen",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Wer die Ballade überfliegt, verpasst das Eigentliche",
          "Was die nächste Strophe bringt, erfährst du erst, wenn du da bist",
          "Die erfundene Gegenwart übt, ganz leise, die echte",
        ],
        distractors: [
          "Der Vater sieht den Erlkönig zuerst, vor dem Sohn",
          "Jede Zeile der Ballade enthält ein «wie»",
          "Literatur funktioniert nur mit geschlossenen Augen",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Jede Zeile ist ein Hufschlag, ein Jetzt.",
          "Die Ballade besteht aus acht Strophen mit paarweisem Reim.",
          "Wer die Ballade überfliegt, verpasst das Eigentliche.",
          "Dem Vater grauset's — in diesem Moment graust es wirklich.",
          "Die erfundene Gegenwart übt, ganz leise, die echte.",
        ],
        intruder: 1,
        why: "El dato sobre estrofas y rima es análisis métrico: el texto trata de la experiencia presente de leer, no del esquema del poema.",
      },
    },
    {
      id: "md-de-c1-11-3", theme: "meditazione",
      title: "Das abendliche Vorlesen", titleEs: "La lectura en voz alta de la noche",
      minutes: 2,
      paragraphs: [
        { it: "In deutschen Wohnzimmern gibt es einen alten Laut: das Vorlesen am Abend. Du brauchst kein Publikum, nur eine Stimme und fünf Minuten. Nimm die Ballade vom Nachttisch, setz dich, und lies laut — nicht für andere, für den Klang. Die Zunge formt die Verse, der Atem trägt sie, und zwischen zwei Strophen wohnt eine Stille, die dem Tag das Wort abschneidet.", es: "En los salones alemanes hay un sonido antiguo: la lectura en voz alta de la noche. No necesitas público, solo una voz y cinco minutos. Toma la balada de la mesilla, siéntate y lee en voz alta — no para otros, para el sonido. La lengua da forma a los versos, el aliento los lleva, y entre dos estrofas vive un silencio que corta la palabra al día." },
        { it: "Das ist Meditation für Leute, die nicht stillsitzen können: Die Aufmerksamkeit hat eine Aufgabe — aussprechen — und darf dabei zur Ruhe kommen. Nach der letzten Zeile legst du das Buch auf die Brust und atmest mit ihm. Wer abends vorgelesen hat — und sei es sich selbst —, schläft mit dem Takt der Sprache, und der Schlaf ist tiefer, weil die Wörter ihn geglättet haben.", es: "Esa es la meditación de quienes no saben quedarse quietos: la atención tiene una tarea — pronunciar — y puede aquietarse mientras la cumple. Tras la última línea pones el libro sobre el pecho y respiras con él. Quien ha leído en voz alta por la noche — aunque sea para sí — se duerme con el compás de la lengua, y el sueño es más hondo porque las palabras lo alisaron." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de locución profesional", "Leer en voz alta por la noche como práctica de calma", "Cómo escribir libros infantiles"],
        answer: 1,
        why: "La lectura nocturna en voz alta se presenta como meditación para gente que no sabe quedarse quieta.",
      },
      sequence: {
        instr: "Ordena el ritual:",
        events: [
          "Du nimmst die Ballade vom Nachttisch",
          "Du setzt dich und liest laut, für den Klang",
          "Zwischen zwei Strophen wohnt eine Stille, die dem Tag das Wort abschneidet",
          "Nach der letzten Zeile legst du das Buch auf die Brust",
          "Du atmest mit dem Buch und schläfst mit dem Takt der Sprache",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Am Abend, wenn das Licht gedimmt ist, nimm dir fünf Minuten und ein Buch. Lies eine Strophe laut, nicht schnell — die Stimme darf träger werden mit jeder Zeile. Nach der letzten Zeile legst du das Buch auf die Brust und spürst, wie sie sich hebt: das Buch, der Atem, du. Dann mach das Licht aus. Mehr Ritual braucht der Abend nicht.",
        questions: [
          { q: "Wie lange nimmst du dir?", kind: "literal", options: ["Fünf Minuten", "Eine Stunde", "Zwei Stunden"], answer: 0, why: "«Nimm dir fünf Minuten und ein Buch»." },
          { q: "Wohin legst du das Buch nach der letzten Zeile?", kind: "literal", options: ["Auf die Brust", "Auf den Nachttisch", "Unter das Kissen"], answer: 0, why: "«Du legst das Buch auf die Brust»." },
          { q: "Was darf die Stimme mit jeder Zeile tun?", kind: "inferencial", options: ["Träger werden", "Lauter werden", "Schneller werden"], answer: 0, why: "«Die Stimme darf träger werden mit jeder Zeile»: la voz se ralentiza." },
          { q: "Was spürst du auf der Brust?", kind: "inferencial", options: ["Das Buch, den Atem und dich selbst", "Nur das Gewicht des Buches", "Den Takt der Nachbarn"], answer: 0, why: "«Das Buch, der Atem, du»: libro, aliento y presencia se unen." },
        ],
      },
    },
  ],

  "de-cu-c1-12": [
    {
      id: "md-de-c1-12-1", theme: "relax fisico",
      title: "Die Hände am Manuskript", titleEs: "Las manos en el manuscrito",
      minutes: 2,
      paragraphs: [
        { it: "Um 9.52 Uhr wartest du vor dem Hörsaal, und das Manuskript ist feucht. Die Verteidigung beginnt mit den Händen: Löse den Griff, Finger für Finger, und leg die Blätter flach auf die linke Hand. Das Papier darf schwer sein; dein Griff darf es nicht sein. Was du hältst, hält dich — das gilt für Sorgen wie für Seiten.", es: "A las 9:52 esperas ante la sala, y el manuscrito está húmedo. La defensa empieza por las manos: suelta el agarre, dedo a dedo, y apoya las hojas planas sobre la mano izquierda. El papel puede pesar; tu agarre no. Lo que sujetas te sujeta — vale para las preocupaciones y para las páginas." },
        { it: "Beim ersten Einwand passiert es wieder: Die rechte Hand verkrampft um die Kante. Kein Problem — das ist der Puls der Sache, und du darfst mit ihm arbeiten. Ein Atemzug in die Hand, die Finger öffnen sich, der Kiefer gleich mit. Dann erst die Antwort: «Danke für diesen Einwand.» Der Satz klingt anders — tiefer, langsamer —, wenn der Körper ihn nicht festhält. Und die Kommission hört den Unterschied, versprochen.", es: "Con la primera objeción vuelve a pasar: la mano derecha se tensa en el borde. No pasa nada — es el pulso del asunto, y puedes trabajar con él. Una respiración hacia la mano, los dedos se abren, la mandíbula con ellos. Solo entonces la respuesta: «Danke für diesen Einwand». La frase suena distinta — más grave, más lenta — cuando el cuerpo no la aprisiona. Y la comisión oye la diferencia, prometido." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo imprimir manuscritos de tesis", "Soltar la tensión de las manos durante la defensa", "Un tratado de caligrafía académica"],
        answer: 1,
        why: "Las manos sobre el manuscrito: relajación física aplicada a la Disputation.",
      },
      quiz: [
        { q: "Wann wartest du vor dem Hörsaal?", kind: "literal", options: ["Um 9.52 Uhr", "Um 10.30 Uhr", "Um 8 Uhr"], answer: 0, why: "«Um 9.52 Uhr wartest du vor dem Hörsaal»: literal." },
        { q: "Was gilt für Sorgen wie für Seiten?", kind: "inferencial", options: ["Was du hältst, hält dich", "Was du liest, liest dich", "Was du schreibst, schreibt dich"], answer: 0, why: "«Was du hältst, hält dich»: el agarre sujeta en ambos sentidos." },
        { q: "Wie klingt der Satz, wenn der Körper ihn nicht festhält?", kind: "critica", options: ["Tiefer und langsamer", "Lauter und schneller", "Genau gleich wie sonst"], answer: 0, why: "«Tiefer, langsamer»: la relajación física cambia la voz, y la comisión lo oye." },
      ],
      vf: [
        { text: "Das Papier darf schwer sein; dein Griff darf es nicht sein.", value: true, why: "Literal: la regla del agarre." },
        { text: "Beim ersten Einwand darf die Hand ruhig verkrampfen — das ist der Puls der Sache.", value: true, why: "«Kein Problem — das ist der Puls der Sache»: se acepta y se trabaja con ello." },
        { text: "Die Kommission hört keinen Unterschied, sagt der Text.", value: false, why: "«Die Kommission hört den Unterschied, versprochen»." },
      ],
    },
    {
      id: "md-de-c1-12-2", theme: "relax mentale",
      title: "Die Kommission tagt nicht nachts", titleEs: "La comisión no sesiona de noche",
      minutes: 3,
      paragraphs: [
        { it: "Die Verteidigung ist morgen um 10 Uhr, doch deine innere Kommission tagt jetzt, um 23.40 Uhr: Der erste Prüfer stellt die Frage nach der Stichprobe, die zweite zweifelt an der Methode, und du verteidigst dich im Dunkeln gegen Einwände, die offiziell noch gar nicht erhoben wurden. Die echte Kommission schläft. Nur die erfundene wacht mit dir.", es: "La defensa es mañana a las 10, pero tu comisión interior sesiona ahora, a las 23:40: el primer examinador pregunta por la muestra, la segunda duda del método, y tú te defiendes en la oscuridad de objeciones que oficialmente aún no se han formulado. La comisión real duerme. Solo la inventada vela contigo." },
        { it: "Vertage auch sie. Morgen um 10 Uhr wird es echte Fragen geben und echte Antworten — beides ist vorbereitet, so gut es ging. Was du heute Nacht der Phantasie antwortest, hört niemand, und es macht dich nicht besser, nur müder. Eine Schwäche zugeben ist Methode, sagte die Direktorin — dazu gehört auch diese: die Müdigkeit zuzugeben und zu schlafen. Das Klopfen kommt morgen; die Nacht gehört dir.", es: "Aplázala también a ella. Mañana a las 10 habrá preguntas reales y respuestas reales — ambas preparadas tan bien como se pudo. Lo que esta noche respondas a la fantasía no lo oye nadie, y no te hace mejor: solo más cansado. Admitir una debilidad es método, dijo la directora — también lo es esta: admitir el cansancio y dormir. El Klopfen llega mañana; la noche es tuya." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Las reglas de horario de los tribunales alemanes", "Aplazar la comisión imaginaria y dormir antes de la defensa", "Cómo responder objeciones toda la noche"],
        answer: 1,
        why: "La comisión que «no sesiona de noche» es la imaginada: el texto enseña a posponerla hasta mañana.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Die nächtliche Phantasiekommission vertagen — Schlaf ist Teil der Vorbereitung",
          "Gute Kandidaten üben nachts weiter, weil das Publikum es merkt",
          "Einwände sollte man nur morgens um zehn beantworten, nie vorher",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Die echte Kommission schläft, nur die erfundene wacht mit dir",
          "Was du der Phantasie antwortest, hört niemand und macht dich nur müder",
          "Die Müdigkeit zuzugeben und zu schlafen ist auch Methode",
        ],
        distractors: [
          "Die innere Kommission tagt um 23.40 Uhr im echten Hörsaal",
          "Die Direktorin empfiehlt Kaffee statt Schlaf",
          "Das Klopfen findet heimlich um Mitternacht statt",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Die Verteidigung ist morgen um 10 Uhr.",
          "Deine innere Kommission tagt jetzt, um 23.40 Uhr.",
          "Die echte Kommission schläft, nur die erfundene wacht mit dir.",
          "Der Hörsaal wird für die Nacht mit einer Chipkarte verschlossen.",
          "Die Nacht gehört dir, das Klopfen kommt morgen.",
        ],
        intruder: 3,
        why: "El cierre del aula con tarjeta es logística de edificio: el texto habla de la comisión interior, no del mobiliario universitario.",
      },
    },
    {
      id: "md-de-c1-12-3", theme: "spiritualità",
      title: "Das Klopfen", titleEs: "Los golpes en la mesa",
      minutes: 3,
      paragraphs: [
        { it: "Am Ende der Disputation geschieht etwas Altes: Die Kommission klopft mit den Knöcheln auf die Tische, ein trockener, höflicher Donner. Er kommt aus den Lesesälen, in denen die Hände Bücher hielten und nicht klatschen konnten. Wenn er dir gilt, dann nicht nur für die Arbeit — er gilt für den Übergang: Du betrittst den Saal als Kandidat und verlässt ihn als Kollege.", es: "Al final de la Disputation ocurre algo antiguo: la comisión golpea las mesas con los nudillos, un trueno seco y cortés. Viene de las salas de lectura, donde las manos sostenían libros y no podían aplaudir. Si va dirigido a ti, no es solo por el trabajo — celebra el tránsito: entras en la sala como candidato y sales de ella como colega." },
        { it: "Nimm den Moment mit, wenn er kommt: ein Atemzug Stille vor dem ersten Klopfen, und dann der Klang, der durch Holz und Luft zu dir reicht. Riten sind keine Deko; sie sind das Geländer über einer Schwelle, an dem man sich festhält, während man verwandelt wird. Heute Abend werden dir Freunde einen selbst gebastelten Hut aufsetzen, und morgen wirst du dich fragen, was sich geändert hat. Nichts — und alles: dieselbe Stimme, jetzt gehört.", es: "Tómate el momento cuando llegue: una respiración de silencio antes del primer golpe, y después el sonido que llega hasta ti a través de la madera y del aire. Los ritos no son decoración; son la barandilla de un umbral a la que uno se agarra mientras es transformado. Esta noche unos amigos te pondrán un sombrero hecho a mano, y mañana te preguntarás qué ha cambiado. Nada — y todo: la misma voz, ahora escuchada." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de carpintería de mesas", "El Klopfen como rito de paso al final de la defensa", "Cómo golpear la mesa con los nudillos correctamente"],
        answer: 1,
        why: "El Klopfen final se presenta como ceremonia del tránsito de candidato a colega, no como técnica manual.",
      },
      sequence: {
        instr: "Ordena los pasos del rito:",
        events: [
          "Die Disputation endet mit deinem Schlusswort",
          "Ein Atemzug Stille — dann klopft die Kommission mit den Knöcheln auf die Tische",
          "Du nimmst den Klang auf, der durch Holz und Luft zu dir reicht",
          "Am Abend setzen dir Freunde den selbst gebastelten Doktorhut auf",
          "Am Morgen stellst du fest: dieselbe Stimme, jetzt gehört",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Stell dir den Moment vor: Dein Schlusswort ist gesprochen, der Saal ist still. Ein Prüfer hebt die Hand, und dann — ein Klopfen, trocken und höflich, über alle Tische hinweg. Es ist kein Applaus für Show, es ist ein alter Ton aus den Lesesälen. Für einen Atemzug lang ist nichts zu tun und nichts zu beweisen. Dann öffnet sich die Tür, und du gehst als Kollege hinaus.",
        questions: [
          { q: "Was geschieht nach dem Schlusswort?", kind: "literal", options: ["Ein Klopfen über alle Tische hinweg", "Ein Applaus mit den Händen", "Eine Pause von einer Stunde"], answer: 0, why: "«Ein Klopfen, trocken und höflich, über alle Tische hinweg»." },
          { q: "Woher kommt der Ton, laut Audio?", kind: "literal", options: ["Aus den alten Lesesälen", "Aus dem Fernsehen", "Aus der Oper"], answer: 0, why: "«Ein alter Ton aus den Lesesälen»." },
          { q: "Was gilt während des Augenblicks?", kind: "inferencial", options: ["Nichts ist zu tun und nichts zu beweisen", "Man muss sich sofort bedanken", "Die Kommission wartet auf eine Zugabe"], answer: 0, why: "«Für einen Atemzug lang ist nichts zu tun und nichts zu beweisen»." },
          { q: "Wie gehst du hinaus?", kind: "inferencial", options: ["Als Kollege", "Als Kandidat", "Als Zuschauer"], answer: 0, why: "«Du gehst als Kollege hinaus»: el rito consuma el tránsito." },
        ],
      },
    },
  ],
};
