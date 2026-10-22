import type { GrammarTopic } from "../../types";

/* ── Grammatik · alemán (Hochdeutsch) · v9.39 ─────────────────────────
   Espejo de src/lib/lms/grammar.ts (ejemplar IT): `title` en español,
   `titleIt` = título técnico en la lengua de estudio (aquí alemán),
   explicaciones en español con ejemplos DE inline, problemas resueltos
   paso a paso. Gramática PROPIA del alemán: los cuatro casos, la
   declinación del adjetivo, los verbos separables, la Satzklammer, el
   Konjunktiv II, la pasiva, las Partizipialkonstruktionen (C1) y el
   Nominalstil/Konjunktiv I (C2). Reparto A1(6)/A2(5)/B1(5)/B2(5)/
   C1(5)/C2(4). Ortografía vigente: ß tras vocal larga (groß, heißen),
   ss tras vocal breve (muss, Fluss).                                   */

export const DE_GRAMMAR: GrammarTopic[] = [
  /* ══════════ A1 ══════════ */
  {
    id: "de-g-a1-artikel", level: "A1", title: "El género y los artículos: der, die, das", titleIt: "Genus und Artikel: der, die, das",
    summary: "Tres géneros, tres artículos determinados y su indeterminado ein/eine.",
    explanation: [
      "El alemán tiene tres géneros: masculino (der Mann), femenino (die Frau) y neutro (das Kind). El género es gramatical, no lógico: la niña es das Mädchen (neutro) y el sol es die Sonne (femenino). Aprende siempre la palabra CON su artículo: der Zug, die Straße, das Buch.",
      "El artículo indeterminado es ein para masculino y neutro, y eine para femenino. No existe indeterminado en plural: Ich habe Brüder («tengo hermanos»). Para negar un sustantivo, ein se convierte en kein: Ich habe kein Geld (no tengo dinero).",
    ],
    examples: [
      { it: "Der Tisch ist neu.", es: "La mesa es nueva." },
      { it: "Die Lampe ist schön.", es: "La lámpara es bonita." },
      { it: "Das Buch ist interessant.", es: "El libro es interesante." },
      { it: "Das ist ein Freund von mir.", es: "Ese es un amigo mío." },
      { it: "Ich habe eine Frage.", es: "Tengo una pregunta." },
    ],
    problems: [
      {
        title: "Elegir el artículo",
        question: "Completa: “___ Bahnhof ist weit von hier.” (der Bahnhof, la estación)",
        steps: [
          "Bahnhof termina en -hof: la mayoría de estos sustantivos son masculinos.",
          "El diccionario lo cita como der Bahnhof.",
          "Masculino singular → artículo determinado der.",
          "Cuidado: no existe una regla de terminaciones 100 % fiable; el género se memoriza con la palabra.",
        ],
        conclusion: "Der Bahnhof ist weit von hier. (La estación está lejos de aquí.)",
      },
      {
        title: "ein o eine",
        question: "Completa: “Ich suche ___ Wohnung.” (die Wohnung, el piso)",
        steps: [
          "Wohnung es femenino: die Wohnung.",
          "El indeterminado femenino es eine.",
          "Masculino y neutro compartirían ein, pero aquí el género manda.",
        ],
        conclusion: "Ich suche eine Wohnung. (Busco un piso.)",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Artikel im Nominativ",
        headers: ["Género", "Determinado", "Indeterminado", "Negación", "Ejemplo"],
        rows: [
          ["masculino", "der", "ein", "kein", "der/ein/kein Zug"],
          ["femenino", "die", "eine", "keine", "die/eine/keine Uhr"],
          ["neutro", "das", "ein", "kein", "das/ein/kein Buch"],
          ["plural", "die", "—", "keine", "die/keine Bücher"],
        ],
        note: "El plural determinado es siempre die, igual que el femenino singular: el sustantivo decide.",
      },
    ],
  },
  {
    id: "de-g-a1-praesens", level: "A1", title: "El presente de los verbos regulares", titleIt: "Das Präsens regelmäßiger Verben",
    summary: "Quita -en del infinitivo y añade -e, -st, -t, -en, -t, -en.",
    explanation: [
      "El Präsens regular se forma con la raíz + terminación personal: ich mache, du machst, er macht, wir machen, ihr macht, sie/Sie machen. La terminación de wir, sie y Sie es siempre -en, igual que el infinitivo.",
      "Dos ajustes ortográficos importantes: si la raíz acaba en t o d, se inserta una e eufónica (du arbeitest, er arbeitet, ihr arbeitet); y si acaba en s, ß, z o x, el du solo añade -t (du heißt, du sitzt). El alemán no tiene equivalente del «yo» tácito español: el ich se pronuncia casi siempre.",
    ],
    examples: [
      { it: "Ich wohne in Bonn.", es: "Vivo en Bonn." },
      { it: "Du arbeitest zu viel!", es: "¡Trabajas demasiado!" },
      { it: "Er heißt Jonas.", es: "Se llama Jonas." },
      { it: "Wir lernen Deutsch.", es: "Aprendemos alemán." },
      { it: "Macht ihr morgen Sport?", es: "¿Hacéis deporte mañana?" },
    ],
    problems: [
      {
        title: "Conjugar en presente",
        question: "Completa: “Du ___ sehr gut Deutsch. (sprechen)”",
        steps: [
          "El sujeto es du.",
          "sprechen cambia la vocal en du y er: e → i.",
          "La forma correcta de du sprechen es sprichst.",
          "Recuerda: er spricht, pero wir/sie sprechen.",
        ],
        conclusion: "Du sprichst sehr gut Deutsch.",
      },
      {
        title: "Ortografía con -t final",
        question: "Completa: “Sie (usted) ___ bei Siemens. (arbeiten)”",
        steps: [
          "El sujeto Sie (formal) usa la forma de sie/ellas: -en.",
          "La raíz de arbeiten ya acaba en t, pero el plural solo añade -en.",
          "La e eufónica extra solo aparece en du/ihr: du arbeitest, ihr arbeitet.",
        ],
        conclusion: "Sie arbeiten bei Siemens.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Regelmäßiges Präsens: wohnen",
        headers: ["Persona", "Forma", "Terminación"],
        rows: [
          ["ich", "wohne", "-e"],
          ["du", "wohnst", "-st"],
          ["er/sie/es", "wohnt", "-t"],
          ["wir", "wohnen", "-en"],
          ["ihr", "wohnt", "-t"],
          ["sie/Sie", "wohnen", "-en"],
        ],
      },
    ],
  },
  {
    id: "de-g-a1-sein-haben", level: "A1", title: "sein y haben: los dos verbos clave", titleIt: "Die Verben sein und haben",
    summary: "Los irregulares más frecuentes del alemán; con ellos se dicen la edad, el hambre y el oficio.",
    explanation: [
      "sein (ser/estar): ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind. Igual que el italiano y al contrario que el español, el alemán usa UN solo verbo para ser y estar: Ich bin müde (estoy cansado), Ich bin Lehrer (soy profesor).",
      "haben (tener/haber): ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben. Se usa para el hambre y la sed (Ich habe Hunger / Durst: «tengo hambre/sed», nunca con sein) y como auxiliar del Perfekt. Para la edad, el alemán también usa sein: Ich bin 30 Jahre alt («tengo 30 años», literal «soy 30 años viejo»).",
      "Ojo con la h: en haben es muda pero obligatoria (nunca «aben»). La pregunta amable es Wie geht es Ihnen? — respuesta: Mir geht es gut (a mí me va bien), con dativo mir.",
    ],
    examples: [
      { it: "Ich bin müde.", es: "Estoy cansado." },
      { it: "Wir sind Studenten.", es: "Somos estudiantes." },
      { it: "Du hast recht.", es: "Tienes razón." },
      { it: "Habt ihr Hunger?", es: "¿Tenéis hambre?" },
      { it: "Sie ist Ärztin von Beruf.", es: "Es médica de profesión." },
    ],
    problems: [
      {
        title: "ser/estar alemán",
        question: "Traduce: «Estoy cansado y tengo hambre.»",
        steps: [
          "Para el estado (cansado) el alemán usa sein: Ich bin müde.",
          "Para el hambre usa haben: Ich habe Hunger.",
          "Nunca «Ich bin Hunger» ni «Ich habe müde»: cada verbo con su complemento.",
        ],
        conclusion: "Ich bin müde und habe Hunger.",
      },
      {
        title: "La persona correcta",
        question: "Completa: “Ihr ___ spät. (sein)”",
        steps: [
          "El sujeto es ihr (vosotros).",
          "sein en ihr es seid, la única forma con -d.",
          "No la confundas con sind (wir/sie/Sie).",
        ],
        conclusion: "Ihr seid spät.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "sein und haben im Präsens",
        headers: ["Persona", "sein", "haben"],
        rows: [
          ["ich", "bin", "habe"],
          ["du", "bist", "hast"],
          ["er/sie/es", "ist", "hat"],
          ["wir", "sind", "haben"],
          ["ihr", "seid", "habt"],
          ["sie/Sie", "sind", "haben"],
        ],
        note: "ich y du del sein (bin, bist) no se parecen al infinitivo: apréndelas de memoria.",
      },
    ],
  },
  {
    id: "de-g-a1-plural", level: "A1", title: "El plural de los sustantivos", titleIt: "Die Pluralbildung",
    summary: "Cinco patrones (-e, ¨-e, -er/¨-er, -(e)n, -s) más el plural sin cambio.",
    explanation: [
      "No hay una sola terminación de plural: la mayoría de masculinos añaden -e (der Tisch → die Tische) y muchos además umlaut (der Stuhl → die Stühle). Los neutros y algunos masculinos cortos toman -er con o sin umlaut: das Kind → die Kinder, das Buch → die Bücher.",
      "Los femeninos casi siempre añaden -(e)n: die Frau → die Frauen, die Lampe → die Lampen. Las palabras extranjeras y las acabadas en vocal larga toman -s: das Auto → die Autos, das Handy → die Handys. Y sustantivos en -er, -el, -en suelen no cambiar: der Lehrer → die Lehrer.",
      "A diferencia del español, el artículo de plural es siempre die para los tres géneros. El dativo plural añade -n al sustantivo si no la tiene: mit den Kindern, mit den Büchern.",
    ],
    examples: [
      { it: "der Apfel → die Äpfel", es: "la manzana → las manzanas" },
      { it: "die Stadt → die Städte", es: "la ciudad → las ciudades" },
      { it: "das Museum → die Museen", es: "el museo → los museos" },
      { it: "die Wohnung → die Wohnungen", es: "el piso → los pisos" },
    ],
    problems: [
      {
        title: "Formar el plural",
        question: "¿Cuál es el plural de «das Buch»?",
        steps: [
          "Buch es neutro y monosílabo.",
          "Los neutros monosílabos suelen tomar -er con umlaut cuando la vocal lo permite.",
          "u con umlaut → ü, y Buch añade -er.",
        ],
        conclusion: "die Bücher (los libros)",
      },
      {
        title: "Plural femenino",
        question: "¿Cuál es el plural de «die Uhr»?",
        steps: [
          "Uhr es femenino.",
          "Los femeninos toman -(e)n en plural.",
          "Como Uhr acaba en r, se añade solo -en.",
        ],
        conclusion: "die Uhren (los relojes / las horas)",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Los cinco patrones de plural",
        headers: ["Patrón", "Singular", "Plural"],
        rows: [
          ["-e / ¨-e", "der Tisch / der Stuhl", "die Tische / die Stühle"],
          ["-er / ¨-er", "das Kind / das Buch", "die Kinder / die Bücher"],
          ["-(e)n (femeninos)", "die Frau / die Uhr", "die Frauen / die Uhren"],
          ["-s (extranjerismos)", "das Auto / das Hobby", "die Autos / die Hobbys"],
          ["sin cambio", "der Lehrer / das Zimmer", "die Lehrer / die Zimmer"],
        ],
        note: "El plural se aprende junto al artículo: der Stuhl, ¨-e (así lo anotan los diccionarios alemanes).",
      },
    ],
  },
  {
    id: "de-g-a1-wortstellung", level: "A1", title: "El orden de la frase: el verbo en segunda posición", titleIt: "Die Wortstellung: Verb an zweiter Stelle",
    summary: "El verbo conjugado va SIEMPRE en posición 2; en preguntas sí/no, en posición 1.",
    explanation: [
      "En la frase afirmativa alemana el verbo conjugado ocupa la segunda posición, haga lo que haga el sujeto: Heute gehe ich ins Kino («hoy voy yo al cine»). Si empiezas la frase con un complemento, el sujeto se coloca después del verbo (inversión): Am Montag habe ich Deutschkurs.",
      "Las preguntas con palabra interrogativa (Wo, Was, Wann, Wie, Warum, Wer) empiezan por la W-frage y el verbo sigue en segunda posición: Wo wohnst du? En las preguntas de sí/no el verbo ocupa la primera posición: Kommst du mit? (¿vienes?).",
      "Este esqueleto (posición 2 para el verbo conjugado, resto al final) se llama Satzklammer y gobierna toda la gramática alemana: los participios, infinitivos y prefijos separables cierran la frase al final.",
    ],
    examples: [
      { it: "Heute regnet es.", es: "Hoy llueve." },
      { it: "Morgen fahre ich nach Leipzig.", es: "Mañana voy a Leipzig." },
      { it: "Wann beginnt der Kurs?", es: "¿Cuándo empieza el curso?" },
      { it: "Lernst du Deutsch?", es: "¿Aprendes alemán?" },
    ],
    problems: [
      {
        title: "Orden tras complemento inicial",
        question: "Ordena: «heute / ich / ins Kino / gehe»",
        steps: [
          "Empiezo con el complemento heute (posición 1).",
          "El verbo conjugado va justo después: gehe (posición 2).",
          "El sujeto ich va tras el verbo (inversión).",
          "El resto (ins Kino) cierra la frase.",
        ],
        conclusion: "Heute gehe ich ins Kino.",
      },
      {
        title: "Pregunta de sí/no",
        question: "Convierte en pregunta: “Du kommst zum Fest.”",
        steps: [
          "En preguntas de sí/no el verbo pasa a la posición 1.",
          "El sujeto lo sigue inmediatamente.",
          "La frase afirmativa Du kommst zum Fest. → pregunta Kommst du zum Fest?",
        ],
        conclusion: "Kommst du zum Fest? (¿Vienes a la fiesta?)",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "de-g-a1-negation", level: "A1", title: "Negar con nicht y kein", titleIt: "Negation mit nicht und kein",
    summary: "nicht niega verbos y adjetivos; kein niega sustantivos sin artículo o con ein.",
    explanation: [
      "nicht se coloca delante de lo que niega y normalmente al final de la frase (o justo antes del segundo bloque verbal): Ich komme nicht (no vengo), Das ist nicht teuer (eso no es caro). También niega nombres propios y profesiones: Er ist nicht Lehrer, er ist Arzt.",
      "kein sustituye a ein y acompaña a sustantivos sin artículo: Ich habe kein Geld (no tengo dinero), Ich habe keine Zeit, Wir haben keinen Hund. La declinación de kein es idéntica a la de ein/ein-: keinen (acusativo masculino), keine, kein.",
      "Trampa para hispanohablantes: no existe «nicht ein» para negar sustantivos; y el «no… más» español se dice nicht mehr: Ich wohne nicht mehr in Berlin.",
    ],
    examples: [
      { it: "Ich verstehe nicht.", es: "No entiendo." },
      { it: "Das Buch ist nicht neu.", es: "El libro no es nuevo." },
      { it: "Ich habe keinen Bruder.", es: "No tengo hermano." },
      { it: "Er trinkt keinen Kaffee.", es: "Él no bebe café." },
      { it: "Wir haben heute keine Zeit.", es: "Hoy no tenemos tiempo." },
    ],
    problems: [
      {
        title: "nicht o kein",
        question: "Completa: “Ich habe ___ Hunger.”",
        steps: [
          "Hunger es un sustantivo que va sin artículo (Ich habe Hunger).",
          "Los sustantivos sin artículo se niegan con kein.",
          "Hunger es masculino en acusativo: keinen.",
        ],
        conclusion: "Ich habe keinen Hunger. (No tengo hambre.)",
      },
      {
        title: "Negar un adjetivo",
        question: "Traduce: «El piso no es grande.»",
        steps: [
          "Grande es un adjetivo: se niega con nicht.",
          "El nicht va delante del adjetivo atributivo.",
          "El orden sujeto-verbo-nicht-adjetivo es el natural.",
        ],
        conclusion: "Die Wohnung ist nicht groß.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "kein en acusativo",
        headers: ["Género", "Nominativo", "Acusativo"],
        rows: [
          ["masculino", "kein Hund", "keinen Hund"],
          ["femenino", "keine Zeit", "keine Zeit"],
          ["neutro", "kein Geld", "kein Geld"],
          ["plural", "keine Fragen", "keine Fragen"],
        ],
      },
    ],
  },

  /* ══════════ A2 ══════════ */
  {
    id: "de-g-a2-akkusativ", level: "A2", title: "El acusativo: el caso del objeto directo", titleIt: "Der Akkusativ",
    summary: "Solo el masculino cambia (der → den, ein → einen); fem., neutro y plural quedan igual.",
    explanation: [
      "El acusativo marca el objeto directo. Frente al caos del español (lo, la, los, las), el alemán solo modifica el artículo masculino: der Mann → den Mann, ein Mann → einen Mann. Die Frau, das Kind y die Kinder no cambian.",
      "Cinco preposiciones rigen SIEMPRE acusativo: durch (por), für (para), gegen (contra), ohne (sin), um (alrededor de / a la hora). La chuleta clásica alemana las memoriza con una frase sin sentido; mejor: todas responden a una relación no espacial.",
      "La estructura es gibt («hay») también exige acusativo: Es gibt einen Supermarkt (masc.), Es gibt eine Apotheke (fem.), Es gibt ein Museum (neutro). Y el verbo brauchen («necesitar») es su compañero natural: Ich brauche einen neuen Pass.",
    ],
    examples: [
      { it: "Ich sehe den Mann.", es: "Veo al hombre." },
      { it: "Ich nehme einen Kaffee.", es: "Tomo un café." },
      { it: "Ich kaufe ein Buch für meine Schwester.", es: "Compro un libro para mi hermana." },
      { it: "Ohne meinen Kollegen macht die Arbeit keinen Spaß.", es: "Sin mi colega, el trabajo no divierte." },
      { it: "Es gibt hier einen Bahnhof.", es: "Aquí hay una estación." },
    ],
    problems: [
      {
        title: "Declinar en acusativo",
        question: "Completa: “Ich möchte ___ Kaffee. (der Kaffee)”",
        steps: [
          "Kaffee es masculino: der Kaffee.",
          "El objeto directo exige acusativo.",
          "Masculino acusativo: der → den, ein → einen.",
          "Con möchten («querría»), la fórmula de café es la más berlinesa posible.",
        ],
        conclusion: "Ich möchte einen Kaffee.",
      },
      {
        title: "Preposición + caso",
        question: "Completa: “Der Kurs ist für ___ Anfänger. (der Anfänger, pl.)”",
        steps: [
          "für rige siempre acusativo.",
          "Anfänger es plural; en plural el acusativo no añade nada al artículo: die Anfänger.",
          "Ojo: si el sustantivo plural acabara en consonante, el dativo añadiría -n, pero aquí es acusativo.",
        ],
        conclusion: "Der Kurs ist für die Anfänger.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Artikel im Akkusativ",
        headers: ["Género", "Determinado", "Indeterminado", "Ejemplo"],
        rows: [
          ["masculino", "den", "einen", "Ich sehe den/einen Hund."],
          ["femenino", "die", "eine", "Ich sehe die/eine Katze."],
          ["neutro", "das", "ein", "Ich sehe das/ein Pferd."],
          ["plural", "die", "—", "Ich sehe die Pferde."],
        ],
        note: "Solo la primera línea cambia respecto al nominativo: el resto es calco.",
      },
    ],
  },
  {
    id: "de-g-a2-dativ", level: "A2", title: "El dativo: el caso del complemento indirecto", titleIt: "Der Dativ",
    summary: "dem / der / dem / den + sustantivo en -n; con las preposiciones aus, bei, mit, nach, seit, von, zu.",
    explanation: [
      "El dativo marca el receptor: Ich gebe dem Kind ein Buch («le doy un libro al niño»). Los artículos: der → dem, die → der, das → dem, plural → den (+ -n en el sustantivo: den Kindern). El femenino der coincide con el nominativo singular: die Frau → ich helfe der Frau.",
      "Las siete preposiciones que rigen siempre dativo se memorizan como aus, bei, mit, nach, seit, von, zu: Ich fahre mit dem Bus; Ich komme aus Spanien; Wir gehen zum Arzt (zu dem → zum); Sie wohnt bei ihrer Tante.",
      "Verbos que piden dativo aunque el español use otro caso: helfen (ayudar a), danken (dar las gracias a), antworten (responder a), gefallen (gustar), gehören (pertenecer a), passen (ir bien). Das Buch gefällt mir (el libro me gusta) — nunca «mich».",
    ],
    examples: [
      { it: "Ich helfe der alten Frau.", es: "Ayudo a la anciana." },
      { it: "Wir fahren mit dem Zug.", es: "Vamos en tren." },
      { it: "Das Geschenk ist von meinen Eltern.", es: "El regalo es de mis padres." },
      { it: "Der Mantel passt mir nicht.", es: "El abrigo no me queda bien." },
      { it: "Ich danke dir für alles.", es: "Te doy las gracias por todo." },
    ],
    problems: [
      {
        title: "Artículo en dativo",
        question: "Completa: “Ich spreche mit ___ Lehrerin. (die Lehrerin)”",
        steps: [
          "mit rige siempre dativo.",
          "Lehrerin es femenino.",
          "Femenino dativo: die → der.",
        ],
        conclusion: "Ich spreche mit der Lehrerin.",
      },
      {
        title: "Verbo + dativo",
        question: "Completa: “Das Lied gefällt ___ (yo).”",
        steps: [
          "gefallen rige dativo (como gustar en español: el sujeto es das Lied).",
          "Pronombre personal de dativo: mir.",
          "Nunca mich: el gefallen alemán es tan caprichoso como el gustar español.",
        ],
        conclusion: "Das Lied gefällt mir.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Dativ: Artikel y pronombres",
        headers: ["Persona", "Pronombre", "Artículo"],
        rows: [
          ["ich", "mir", "—"],
          ["du", "dir", "—"],
          ["er/es", "ihm", "dem Mann / dem Kind"],
          ["sie", "ihr", "der Frau"],
          ["wir", "uns", "—"],
          ["ihr", "euch", "—"],
          ["sie/Sie", "ihnen", "den Männern / den Frauen"],
        ],
        note: "El dativo plural añade -n al sustantivo si no lo tiene: mit den Kindern, von den Büchern.",
      },
    ],
  },
  {
    id: "de-g-a2-perfekt", level: "A2", title: "El Perfekt: el pasado hablado", titleIt: "Das Perfekt mit haben und sein",
    summary: "haben/sein en presente + Partizip II; el auxiliar sein para movimiento y cambio.",
    explanation: [
      "El Perfekt es EL pasado de la conversación: Ich habe Pizza gegessen («he comido/comí pizza»). Se forma con haben o sein en presente + participio II, que va al FINAL de la frase (Satzklammer): Ich habe gestern einen Film gesehen.",
      "Verbos débiles forman ge- + raíz + -t: gemacht, gekauft, gearbeitet. Verbos fuertes forman ge- + raíz (a menudo con cambio vocálico) + -en: lesen → gelesen, sehen → gesehen, trinken → getrunken. Los verbos en -ieren y los prefijos inseparables (be-, ver-, er-…) NO llevan ge-: studiert, passiert, besucht, erklärt.",
      "El auxiliar sein se usa con verbos de movimiento o cambio de estado (gehen, kommen, fahren, fliegen, aufstehen, werden) y con sein mismo y bleiben: Ich bin nach Hause gegangen; Wir sind um acht Uhr aufgestanden; Er ist Lehrer geworden. Con haben sería el error clásico de hispanohablante.",
    ],
    examples: [
      { it: "Ich habe das Buch gelesen.", es: "He leído el libro." },
      { it: "Wir sind ins Kino gegangen.", es: "Fuimos al cine." },
      { it: "Er hat in München studiert.", es: "Estudió en Múnich." },
      { it: "Sie ist um sieben Uhr aufgestanden.", es: "Se levantó a las siete." },
      { it: "Was hast du gestern gemacht?", es: "¿Qué hiciste ayer?" },
    ],
    problems: [
      {
        title: "Elegir el auxiliar",
        question: "Completa: “Ich ___ nach Berlin gefahren.”",
        steps: [
          "fahren es un verbo de movimiento.",
          "Los verbos de movimiento forman el Perfekt con sein.",
          "La forma correcta es bin gefahren.",
          "«Ich habe gefahren» solo existe como verbo transitivo (algo conducido).",
        ],
        conclusion: "Ich bin nach Berlin gefahren.",
      },
      {
        title: "Formar el participio",
        question: "Completa: “Hast du den Text ___? (lesen)”",
        steps: [
          "lesen es un verbo fuerte (i → e en raíz).",
          "Participio fuerte: ge- + raíz + -en.",
          "lesen → gelesen, sin cambio respecto a la forma básica pero con ge-.",
          "El participio va al final de la frase, tras el objeto.",
        ],
        conclusion: "Hast du den Text gelesen?",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Partizip II: tres familias",
        headers: ["Tipo", "Regla", "Ejemplos"],
        rows: [
          ["débil", "ge- + raíz + -t", "machen → gemacht; arbeiten → gearbeitet"],
          ["fuerte", "ge- + raíz + -en", "trinken → getrunken; sehen → gesehen"],
          ["sin ge-", "-ieren / prefijo inseparable", "studiert; besucht; erklärt"],
        ],
        note: "Con sein (movimiento) el participio no concuerda: sie ist gegangen, igual para todos los géneros.",
      },
    ],
  },
  {
    id: "de-g-a2-modalverben", level: "A2", title: "Los verbos modales", titleIt: "Die Modalverben",
    summary: "können, müssen, wollen, dürfen, sollen, möchten: el segundo verbo va al final en infinitivo.",
    explanation: [
      "Los seis modales alemanes comparten dos rarezas: en ich y er/sie/es NO llevan terminación personal (ich kann, er muss) y empujan el verbo principal al final en infinitivo: Ich muss heute arbeiten («hoy tengo que trabajar»).",
      "wollen = querer (voluntad propia); mögen/möchten = gustar/querría (¡möchten no es «deber»!); dürfen = tener permiso; sollen = deber por encargo o norma externa; müssen = tener que; können = poder (capacidad o posibilidad).",
      "En Präteritum los modales toman la terminación débil con umlaut o sin él: ich konnte, musste, wollte, durfte, sollte. Y para pedir con cortesía, el Konjunktiv II: Könnten Sie mir helfen? (¿podría usted ayudarme?), Ich möchte einen Tee (querría un té).",
    ],
    examples: [
      { it: "Ich kann sehr gut schwimmen.", es: "Sé nadar muy bien." },
      { it: "Du musst jetzt nach Hause gehen.", es: "Tienes que irte a casa ahora." },
      { it: "Hier darf man nicht rauchen.", es: "Aquí no se puede fumar." },
      { it: "Ich möchte ein Wasser, bitte.", es: "Querría un agua, por favor." },
      { it: "Wir wollen im Sommer nach Norwegen fahren.", es: "Queremos ir a Noruega en verano." },
    ],
    problems: [
      {
        title: "Orden con modal",
        question: "Ordena: «ich / kann / heute / nicht / kommen»",
        steps: [
          "El modal conjugado (kann) va en posición 2.",
          "El verbo principal (kommen) va al final en infinitivo.",
          "La negación nicht se coloca delante del bloque final.",
        ],
        conclusion: "Ich kann heute nicht kommen.",
      },
      {
        title: "Elegir el modal correcto",
        question: "Completa: “Hier ___ man nicht parken. (prohibido aparcar)”",
        steps: [
          "Se trata de una prohibición: no está permitido.",
          "El modal de permiso/prohibición es dürfen.",
          "Con man: Hier darf man nicht parken. (müssen sería «hay que» con el sentido opuesto).",
        ],
        conclusion: "Hier darf man nicht parken.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Modalverben im Präsens",
        headers: ["Persona", "können", "müssen", "wollen"],
        rows: [
          ["ich", "kann", "muss", "will"],
          ["du", "kannst", "musst", "willst"],
          ["er/sie/es", "kann", "muss", "will"],
          ["wir", "können", "müssen", "wollen"],
          ["ihr", "könnt", "müsst", "wollt"],
          ["sie/Sie", "können", "müssen", "wollen"],
        ],
        note: "ich y er comparten forma (kann/muss/will): única excepción de terminaciones del presente.",
      },
    ],
  },
  {
    id: "de-g-a2-trennbare", level: "A2", title: "Los verbos separables", titleIt: "Trennbare Verben",
    summary: "aufstehen, anrufen, einkaufen: el prefijo se despega y cae al final de la frase.",
    explanation: [
      "Muchos verbos alemanes llevan un prefijo que se separa: an-rufen (llamar), auf-stehen (levantarse), ein-kaufen (hacer la compra), mit-kommen (venir con), fern-sehen (ver la tele). En la frase simple, el prefijo se va al final: Ich stehe um sieben Uhr auf.",
      "El prefijo separable lleva el acento fuerte (AUFstehen) y no admite ge- en el Perfekt entre prefijo y raíz: Ich habe meine Mutter angerufen, Er ist früh aufgestanden. En preguntas y órdenes también se separa: Rufst du mich an? — Ruf mich bitte an!",
      "En cambio, los prefijos inseparables (be-, ge-, er-, ver-, zer-, ent-) NUNCA se separan y no llevan ge- en el participio: besuchen → Ich habe dich besucht. La pareja clásica: übersetzen (traducir, inseparable) frente a über|setzen (cruzar en barca, separable).",
    ],
    examples: [
      { it: "Ich stehe jeden Tag um sechs Uhr auf.", es: "Me levanto cada día a las seis." },
      { it: "Ich rufe dich nach der Arbeit an.", es: "Te llamo después del trabajo." },
      { it: "Am Samstag kaufen wir ein.", es: "El sábado hacemos la compra." },
      { it: "Kommst du mit?", es: "¿Vienes (con nosotros)?" },
      { it: "Er hat seine Freunde eingeladen.", es: "Ha invitado a sus amigos." },
    ],
    problems: [
      {
        title: "Separar el prefijo",
        question: "Completa: “Wir kaufen am Samstag ___ . (einkaufen)”",
        steps: [
          "einkaufen = ein + kaufen.",
          "El verbo conjugado kaufen va en posición 2.",
          "El prefijo ein cae al final de la frase.",
        ],
        conclusion: "Wir kaufen am Samstag ein.",
      },
      {
        title: "Perfekt con separable",
        question: "Completa: “Ich habe meine Oma ___ . (anrufen)”",
        steps: [
          "Con prefijo separable, el ge- del participio se coloca ENTRE prefijo y raíz.",
          "an + gerufen → angerufen.",
          "El participio completo cierra la frase.",
        ],
        conclusion: "Ich habe meine Oma angerufen.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Separable o inseparable",
        headers: ["Tipo", "Prefijos", "Ejemplo"],
        rows: [
          ["separable (acento en prefijo)", "an-, auf-, aus-, ein-, mit-, vor-, zu-", "Ich rufe an. / Ich habe angerufen."],
          ["inseparable (acento en raíz)", "be-, ge-, er-, ver-, zer-, ent-", "Ich besuche dich. / Ich habe besucht."],
        ],
        note: "El acento del verbo entero delata si el prefijo se separa: ANrufen, pero beSUCHen.",
      },
    ],
  },

  /* ══════════ B1 ══════════ */
  {
    id: "de-g-b1-praeteritum", level: "B1", title: "Präteritum frente a Perfekt", titleIt: "Präteritum und Perfekt im Vergleich",
    summary: "Perfekt para hablar; Präteritum para narrar y con sein/haben/modales.",
    explanation: [
      "En el sur y en la conversación de todos los días domina el Perfekt: Ich habe ihn gestern gesehen. El Präteritum (ich sah ihn) suena literario o muy formal con verbos comunes, PERO es obligatorio en la lengua escrita narrativa (noticias, novelas, cartas formales).",
      "Con sein, haben, werden y los modales, el alemán hablado prefiere el Präteritum incluso en conversación: Ich war krank (estuve enfermo), Ich hatte keine Zeit, Ich konnte nicht kommen — nunca «Ich bin krank gewesen» en la charla diaria.",
      "Formación: verbos débiles toman raíz + -te + terminación (machen → machte, arbeiten → arbeitete). Los fuertes cambian la vocal y no llevan terminación en ich/er: gehen → ging, kommen → kam, sehen → sah, lesen → las. Als Kind las ich viel («de niño leía mucho»).",
    ],
    examples: [
      { it: "Ich war letztes Jahr in Wien.", es: "El año pasado estuve en Viena." },
      { it: "Wir hatten damals kein Auto.", es: "Entonces no teníamos coche." },
      { it: "Sie konnte nicht schlafen.", es: "No podía dormir." },
      { it: "Er arbeitete bei einer Zeitung.", es: "Trabajaba en un periódico." },
      { it: "Das Kind las die ganze Nacht.", es: "El niño leyó toda la noche." },
    ],
    problems: [
      {
        title: "Elegir el pasado correcto",
        question: "Completa: “Gestern ___ ich den ganzen Tag zu Hause. (sein)”",
        steps: [
          "sein se cuenta en Präteritum incluso hablando.",
          "sein en Präteritum: ich war.",
          "«Ich bin gewesen» solo se oye en el sur de Alemania y suena marcado.",
        ],
        conclusion: "Gestern war ich den ganzen Tag zu Hause.",
      },
      {
        title: "Präteritum fuerte",
        question: "Completa: “Als Kind ___ ich jeden Sommer am See. (schwimmen)”",
        steps: [
          "Narración de época (als Kind) → Präteritum.",
          "schwimmen es fuerte: la vocal cambia (i → a).",
          "ich/er no llevan terminación en el Präteritum fuerte.",
        ],
        conclusion: "Als Kind schwamm ich jeden Sommer am See. (De niño nadaba cada verano en el lago.)",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Präteritum de los irregulares clave",
        headers: ["Infinitivo", "Präteritum", "Perfekt"],
        rows: [
          ["sein", "war", "ist gewesen"],
          ["haben", "hatte", "hat gehabt"],
          ["werden", "wurde", "ist geworden"],
          ["gehen", "ging", "ist gegangen"],
          ["kommen", "kam", "ist gekommen"],
          ["können", "konnte", "hat gekonnt"],
        ],
        note: "En el habla, war/hatte/konnte sustituyen casi siempre a su Perfekt.",
      },
    ],
  },
  {
    id: "de-g-b1-adjektivdeklination", level: "B1", title: "La declinación del adjetivo", titleIt: "Die Adjektivdeklination",
    summary: "Tras der/ein el adjetivo lleva terminación débil; sin artículo, terminación fuerte.",
    explanation: [
      "El adjetivo atributivo alemán se declina y SIEMPRE precede al sustantivo: der gute Wein, ein guter Wein, guter Wein («el buen vino, un buen vino, buen vino»). La terminación depende de lo que haya delante: si el artículo ya marca género y caso, el adjetivo solo añade -e o -en (declinación débil).",
      "Sin artículo, el adjetivo asume él solo las marcas (declinación fuerte): guter Wein (masc.), gute Milch (fem.), gutes Bier (neut.), gute Weine (pl.). En acusativo masculino sin artículo la terminación es -en: Ich trinke gern guten Wein; con artículo determinado, den guten Wein.",
      "La tabla se reduce a dos reglas prácticas: 1) tras der, dieser, jeder y los posesivos, el adjetivo solo alterna -e (nominativo singular y acusativo f./n.) y -en (todo lo demás). 2) tras ein/kein/mein, el adjetivo «corrige» el género que el artículo no marca: ein guter Mann, aber eine gute Frau, ein gutes Kind.",
    ],
    examples: [
      { it: "Der neue Kollege kommt aus Bonn.", es: "El nuevo colega viene de Bonn." },
      { it: "Ich suche eine günstige Wohnung.", es: "Busco un piso barato." },
      { it: "Wir trinken kaltes Wasser.", es: "Bebemos agua fría." },
      { it: "Sie trägt ein rotes Kleid.", es: "Lleva un vestido rojo." },
      { it: "Das sind interessante Bücher.", es: "Son libros interesantes." },
    ],
    problems: [
      {
        title: "Declinación débil",
        question: "Completa: “Ich nehme den ___ Bus. (rot)”",
        steps: [
          "den ya marca masculino acusativo.",
          "Tras artículo determinado, el adjetivo solo pone -e o -en.",
          "Acusativo (cualquier género) con artículo → siempre -en.",
        ],
        conclusion: "Ich nehme den roten Bus.",
      },
      {
        title: "Declinación fuerte",
        question: "Completa: “___ Wein aus Spanien ist billig. (gut, sin artículo)”",
        steps: [
          "No hay artículo: el adjetivo carga con la marca.",
          "Wein es masculino nominativo.",
          "Masculino nominativo fuerte → -er: guter Wein.",
        ],
        conclusion: "Guter Wein aus Spanien ist billig.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Declinación débil (tras der/dieser/mein…)",
        headers: ["Caso", "m.", "f.", "n.", "pl."],
        rows: [
          ["Nominativo", "der gute Mann", "die gute Frau", "das gute Kind", "die guten Leute"],
          ["Akkusativ", "den guten Mann", "die gute Frau", "das gute Kind", "die guten Leute"],
          ["Dativ", "dem guten Mann", "der guten Frau", "dem guten Kind", "den guten Leuten"],
        ],
        note: "Solo hay que recordar dos formas: -e (nom. sing. m./f./n. y ac. f./n.) y -en (todo lo demás).",
      },
    ],
  },
  {
    id: "de-g-b1-komparativ", level: "B1", title: "Comparativo y superlativo", titleIt: "Komparativ und Superlativ",
    summary: "-er / am -sten, con umlaut en los monosílabos; als para la desigualdad.",
    explanation: [
      "El comparativo añade -er (schnell → schneller) y muchos adjetivos monosílabos añaden umlaut: alt → älter, groß → größer, jung → jünger, kalt → kälter. La desigualdad se expresa con als: Berlin ist größer als Bonn («más… que»).",
      "El superlativo es am + -sten: am schnellsten, am ältesten. Adjetivos en -d, -t, -s, -ß, -x, -z toman -esten: am größten, am schönsten. Ante sustantivo, el superlativo se declina como adjetivo: der größte Turm, die beste Lösung.",
      "Irregulares de lujo: gut → besser → am besten; viel → mehr → am meisten; gern → lieber → am liebsten; hoch → höher → am höchsten; bald → eher → am ehesten. La igualdad usa so … wie: Ich bin so müde wie du.",
    ],
    examples: [
      { it: "Mein Bruder ist älter als ich.", es: "Mi hermano es mayor que yo." },
      { it: "Dieses Hotel ist billiger.", es: "Este hotel es más barato." },
      { it: "Sie ist die beste Studentin des Kurses.", es: "Es la mejor estudiante del curso." },
      { it: "Ich trinke lieber Tee.", es: "Prefiero (beber) té." },
      { it: "Er läuft so schnell wie ich.", es: "Corre tan rápido como yo." },
    ],
    problems: [
      {
        title: "Comparativo irregular",
        question: "Completa: “Diese Lösung ist ___ als jene. (gut)”",
        steps: [
          "gut tiene comparativo propio: besser.",
          "La comparación de desigualdad exige als.",
          "El sustantivo Lösung es femenino, pero aquí gut va predicativo: sin declinación.",
        ],
        conclusion: "Diese Lösung ist besser als jene.",
      },
      {
        title: "Superlativo",
        question: "Completa: “Der Everest ist ___ Berg der Welt. (hoch)”",
        steps: [
          "hoch → comparativo höher → superlativo höchst-.",
          "Ante sustantivo, el superlativo se declina: der + adjetivo + e.",
          "Der höchste Berg = la montaña más alta.",
        ],
        conclusion: "Der Everest ist der höchste Berg der Welt.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Los irregulares clásicos",
        headers: ["Adjetivo", "Komparativ", "Superlativ"],
        rows: [
          ["gut", "besser", "am besten"],
          ["viel", "mehr", "am meisten"],
          ["gern", "lieber", "am liebsten"],
          ["hoch", "höher", "am höchsten"],
          ["groß", "größer", "am größten"],
        ],
      },
    ],
  },
  {
    id: "de-g-b1-nebensaetze", level: "B1", title: "Las subordinadas: weil, dass, wenn", titleIt: "Nebensätze mit weil, dass und wenn",
    summary: "Coma obligatoria + verbo conjugado al FINAL: la segunda mitad de la Satzklammer.",
    explanation: [
      "En toda subordinada alemana el verbo conjugado se marcha al final: ..., weil ich müde bin («porque estoy cansado»). La coma antes de la conjunción es OBLIGATORIA en alemán; su ausencia es una falta ortográfica, no un detalle.",
      "weil introduce causa, dass introduce complementos de opinión/deseo (Ich denke, dass er recht hat), wenn introduce condición o repetición temporal (Wenn es regnet, bleiben wir zu Hause; Wenn ich klein war… para el pasado repetido, als para lo puntual).",
      "Si la subordinada abre la frase, el verbo conjugado de la principal salta a la posición inmediatamente posterior a la coma: Wenn ich Zeit habe, besuche ich dich. Ojo con la pareja: denn es coordinante (verbo en posición 2): Ich bleibe zu Hause, denn ich bin müde.",
    ],
    examples: [
      { it: "Ich lerne Deutsch, weil ich in Berlin arbeiten will.", es: "Aprendo alemán porque quiero trabajar en Berlín." },
      { it: "Ich glaube, dass sie recht hat.", es: "Creo que tiene razón." },
      { it: "Wenn ich Zeit habe, rufe ich dich an.", es: "Si tengo tiempo, te llamo." },
      { it: "Er freut sich, dass du kommst.", es: "Se alegra de que vengas." },
      { it: "Als ich ein Kind war, wohnten wir in Kassel.", es: "Cuando era niño, vivíamos en Kassel." },
    ],
    problems: [
      {
        title: "Verbo al final",
        question: "Ordena: «..., weil / ich / müde / bin»",
        steps: [
          "weil introduce subordinada: el verbo conjugado va al final.",
          "Ich bin müde → tras weil: ..., weil ich müde bin.",
          "«..., weil ich bin müde» es EL error número uno de los hispanohablantes.",
        ],
        conclusion: "..., weil ich müde bin.",
      },
      {
        title: "Subordinada inicial",
        question: "Une: «Wenn ich nach Hause komme / ich / erst / eine Pause / mache»",
        steps: [
          "La subordinada abre la frase y termina en su verbo: Wenn ich nach Hause komme.",
          "Tras la coma, la principal empieza directamente por el sujeto.",
          "El verbo principal mache debe quedar en posición 2 del conjunto.",
        ],
        conclusion: "Wenn ich nach Hause komme, mache ich erst eine Pause.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "de-g-b1-wechselpraepositionen", level: "B1", title: "Preposiciones de doble caso: ¿dónde? vs ¿hacia dónde?", titleIt: "Wechselpräpositionen mit Dativ und Akkusativ",
    summary: "in, an, auf, über, unter, vor, hinter, neben, zwischen: dativo = lugar, acusativo = dirección.",
    explanation: [
      "Nueve preposiciones cambian de caso según la pregunta: si responden a Wo? (¿dónde?) llevan dativo; si responden a Wohin? (¿hacia dónde?) llevan acusativo. Das Buch liegt auf dem Tisch (lugar, dativo) / Ich lege das Buch auf den Tisch (dirección, acusativo).",
      "Trucos de movimiento: verbos que describen desplazamiento o cambio de posición (legen, stellen, setzen, hängen, gehen, fahren) piden acusativo; verbos de estado (liegen, stehen, sitzen, hängen, sein) piden dativo.",
      "Contraste con el español: «voy a Berlín» = Ich fahre nach Berlin (ciudad), pero «voy al cine» = Ich gehe ins Kino (in + acusativo: contracción in das → ins). Y «a casa» = nach Hause (fijo), mientras «en casa» = zu Hause.",
    ],
    examples: [
      { it: "Ich gehe in die Stadt.", es: "Voy al centro (de la ciudad)." },
      { it: "Ich wohne in der Stadt.", es: "Vivo en la ciudad." },
      { it: "Er hängt das Bild an die Wand.", es: "Cuelga el cuadro en la pared (dirección)." },
      { it: "Das Bild hängt an der Wand.", es: "El cuadro cuelga en la pared (lugar)." },
      { it: "Wir fahren ans Meer.", es: "Vamos al mar." },
    ],
    problems: [
      {
        title: "Lugar o dirección",
        question: "Completa: “Ich gehe ___ Schule. (a la escuela, dirección)”",
        steps: [
          "gehen expresa movimiento hacia: Wohin?",
          "Wohin? + in → acusativo.",
          "die Schule (fem.) no cambia en acusativo: in die Schule.",
        ],
        conclusion: "Ich gehe in die Schule.",
      },
      {
        title: "Estado con dativo",
        question: "Completa: “Die Kinder sind ___ Klassenzimmer. (en el aula, lugar)”",
        steps: [
          "sein expresa estado: Wo?",
          "Wo? + in → dativo.",
          "das Klassenzimmer (neutro) → dativo dem Klassenzimmer.",
        ],
        conclusion: "Die Kinder sind im Klassenzimmer.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Wo? (dativo) frente a Wohin? (acusativo)",
        headers: ["Preposición", "Wo? + Dat.", "Wohin? + Akk."],
        rows: [
          ["in", "in der Schule", "in die Schule"],
          ["an", "am Fenster", "ans Fenster"],
          ["auf", "auf dem Sofa", "aufs Sofa"],
          ["vor", "vor dem Haus", "vor das Haus"],
        ],
        note: "am/an dem, ins/in das, ans/an das: las contracciones son casi obligatorias en el habla.",
      },
    ],
  },

  /* ══════════ B2 ══════════ */
  {
    id: "de-g-b2-passiv", level: "B2", title: "La voz pasiva con werden", titleIt: "Das Vorgangspassiv mit werden",
    summary: "werden + participio II; el agente se introduce con von (o mit para instrumentos).",
    explanation: [
      "La pasiva alemana de proceso se forma con werden + participio II: Der Brief wird geschrieben («la carta es escrita/se está escribiendo»). El sujeto paciente pasa a nominativo y el verbo werden se conjuga: Präsens (wird geschrieben), Präteritum (wurde geschrieben), Perfekt (ist geschrieben worden — con worden, no geworden).",
      "El agente va con von + dativo (Der Patient wird vom Arzt untersucht) y el instrumento con mit (mit dem Skalpell). La pasiva alemana funciona también sin agente, como el «se» español: Hier wird nicht geraucht (aquí no se fuma), Man sagt… → Es wird gesagt…",
      "Con modales, el infinitivo pasivo cierra la frase: Das Haus muss verkauft werden. Y no confundas con la pasiva de estado (Zustandspassiv): sein + participio: Die Tür ist geöffnet (la puerta está abierta) — sin werden, sin proceso.",
    ],
    examples: [
      { it: "In unserem Viertel wird gerade ein Spielplatz gebaut.", es: "En nuestro barrio se está construyendo un parque infantil." },
      { it: "Die Rechnung wurde gestern bezahlt.", es: "La cuenta fue pagada ayer." },
      { it: "In Deutschland wird viel Bier getrunken.", es: "En Alemania se bebe mucha cerveza." },
      { it: "Das Problem muss gelöst werden.", es: "El problema debe ser resuelto." },
      { it: "Der Roman ist ins Spanische übersetzt worden.", es: "La novela ha sido traducida al español." },
    ],
    problems: [
      {
        title: "Transformar a pasiva",
        question: "Pasa a pasiva: “Man baut eine neue Brücke.”",
        steps: [
          "El objeto (eine neue Brücke) pasa a sujeto nominativo.",
          "man desaparece (o se convierte en von + agente si existiera).",
          "werden en presente + participio de bauen: wird gebaut.",
        ],
        conclusion: "Eine neue Brücke wird gebaut.",
      },
      {
        title: "Pasiva en pasado",
        question: "Completa: “Die Kirche ___ im Krieg zerstört. (ser, pasado)”",
        steps: [
          "Pasiva de proceso en Präteritum: werden → wurde.",
          "El participio zerstört cierra la frase.",
          "«wurde zerstört» = fue destruida (proceso); «war zerstört» sería pasiva de estado.",
        ],
        conclusion: "Die Kirche wurde im Krieg zerstört.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Vorgangspassiv en tres tiempos",
        headers: ["Tiempo", "Estructura", "Ejemplo"],
        rows: [
          ["Präsens", "wird + Part. II", "Es wird repariert."],
          ["Präteritum", "wurde + Part. II", "Es wurde repariert."],
          ["Perfekt", "ist + Part. II + worden", "Es ist repariert worden."],
        ],
        note: "El Perfekt passivo usa worden (nunca geworden) y lleva sein como auxiliar.",
      },
    ],
  },
  {
    id: "de-g-b2-konjunktiv2", level: "B2", title: "El Konjunktiv II: irrealidad y cortesía", titleIt: "Der Konjunktiv II der Gegenwart",
    summary: "wäre, hätte, würde + infinitivo: hipótesis, consejos y peticiones amables.",
    explanation: [
      "El Konjunktiv II expresa lo irreal: Wenn ich Zeit hätte, würde ich dich besuchen («si tuviera tiempo, te visitaría»). Sus tres piezas son wäre (sein), hätte (haben) y würde + infinitivo; para los demás verbos, würde + infinitivo es la forma estándar de la lengua hablada.",
      "Los modales tienen formas propias de KII: könnte, müsste, sollte, dürfte, möchte. Con ellas se construye la cortesía alemana: Könnten Sie mir helfen? (¿podría ayudarme?), Ich hätte gern einen Kaffee (querría un café), Das sollte man wissen (eso se debería saber).",
      "Las condicionales irreales siguen el patrón Wenn + KII, … KII: Wenn ich reich wäre, würde ich reisen. En pasado irreal (C1 asomando): Wenn ich das gewusst hätte, wäre ich gekommen («si lo hubiera sabido, habría venido»). El comparativo irreal usa als ob + KII: Er tut, als ob er alles wüsste.",
    ],
    examples: [
      { it: "Wenn ich Zeit hätte, würde ich dich besuchen.", es: "Si tuviera tiempo, te visitaría." },
      { it: "An deiner Stelle würde ich das Angebot annehmen.", es: "Yo en tu lugar aceptaría la oferta." },
      { it: "Könnten Sie das bitte wiederholen?", es: "¿Podría repetir eso, por favor?" },
      { it: "Ich hätte gern ein Einzelzimmer.", es: "Querría una habitación individual." },
      { it: "Ohne dich wäre ich verloren.", es: "Sin ti estaría perdido." },
    ],
    problems: [
      {
        title: "Condicional irreal",
        question: "Completa: “Wenn ich reich ___, würde ich um die Welt reisen. (sein)”",
        steps: [
          "Frase irreal: Konjunktiv II de sein.",
          "sein → KII: wäre.",
          "La principal usa würde + infinitivo.",
        ],
        conclusion: "Wenn ich reich wäre, würde ich um die Welt reisen.",
      },
      {
        title: "Cortesía con KII",
        question: "Pide amablemente a un desconocido que te ayude con la maleta.",
        steps: [
          "Con desconocidos: Sie + petición en KII.",
          "El modal de cortesía por excelencia es könnten.",
          "Estructura: Könnten Sie + infinitivo + bitte?",
        ],
        conclusion: "Könnten Sie mir bitte mit dem Koffer helfen?",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Konjunktiv II: formas de supervivencia",
        headers: ["Verbo", "Indicativo", "Konjunktiv II"],
        rows: [
          ["sein", "ist", "wäre"],
          ["haben", "hat", "hätte"],
          ["werden", "wird", "würde"],
          ["können", "kann", "könnte"],
          ["müssen", "muss", "müsste"],
        ],
        note: "würde + infinitivo sustituye a las formas largas de casi todos los verbos: Ich würde kommen.",
      },
    ],
  },
  {
    id: "de-g-b2-relativsaetze", level: "B2", title: "Las oraciones de relativo", titleIt: "Relativsätze",
    summary: "El pronombre relativo copia la declinación del artículo y el verbo va al final.",
    explanation: [
      "El pronombre relativo alemán tiene las mismas formas que el artículo determinado: der, die, das, die (nominativo); den, die, das, die (acusativo); dem, der, dem, denen (dativo); dessen, deren, dessen, deren (genitivo). El género y el número los decide el antecedente; el caso lo decide la función dentro de la relativa.",
      "La relativa va SIEMPRE tras coma y cierra con el verbo conjugado: Der Mann, der dort steht, ist mein Lehrer; Der Film, den ich gestern gesehen habe, war stark; Die Frau, der ich geholfen habe, wohnt nebenan.",
      "Con preposiciones, la preposición precede al relativo: das Thema, über das wir sprechen (el tema del que hablamos), la persona con la que trabajo → die Person, mit der ich arbeite. El español «que» invariable es la fuente de errores: nunca uses wer/was para personas (el calco «der Mann, wer…» es imposible en alemán).",
    ],
    examples: [
      { it: "Der Zug, der nach Hamburg fährt, hat Verspätung.", es: "El tren que va a Hamburgo va con retraso." },
      { it: "Das Buch, das ich lese, ist spannend.", es: "El libro que leo es apasionante." },
      { it: "Die Kollegin, deren Auto kaputt ist, nimmt den Bus.", es: "La colega cuyo coche está averiado coge el autobús." },
      { it: "Die Stadt, in der ich wohne, ist klein.", es: "La ciudad en la que vivo es pequeña." },
      { it: "Die Kinder, denen wir Bücher geschenkt haben, waren glücklich.", es: "Los niños a los que regalamos libros estaban felices." },
    ],
    problems: [
      {
        title: "Elegir el relativo",
        question: "Completa: “Der Mann, ___ dort steht, ist mein Onkel.”",
        steps: [
          "Antecedente: der Mann (masculino singular).",
          "Dentro de la relativa, el Mann es sujeto → nominativo.",
          "Masculino nominativo: der.",
        ],
        conclusion: "Der Mann, der dort steht, ist mein Onkel.",
      },
      {
        title: "Relativo con preposición",
        question: "Completa: “Der Kollege, mit ___ ich arbeite, ist sehr nett.”",
        steps: [
          "mit rige dativo.",
          "El relativo se refiere a der Kollege (masculino).",
          "Masculino dativo: dem → mit dem.",
        ],
        conclusion: "Der Kollege, mit dem ich arbeite, ist sehr nett.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Relativpronomen",
        headers: ["Caso", "m.", "f.", "n.", "pl."],
        rows: [
          ["Nominativ", "der", "die", "das", "die"],
          ["Akkusativ", "den", "die", "das", "die"],
          ["Dativ", "dem", "der", "dem", "denen"],
          ["Genitiv", "dessen", "deren", "dessen", "deren"],
        ],
        note: "En dativo plural el relativo es denen, distinto del artículo (den).",
      },
    ],
  },
  {
    id: "de-g-b2-genitiv", level: "B2", title: "El genitivo", titleIt: "Der Genitiv",
    summary: "des/der/des/der y -s posesivo; con wegen, trotz, während, statt también en la lengua formal.",
    explanation: [
      "El genitivo marca la posesión y pertenencia: das Auto des Nachbarn («el coche del vecino»), die Bücher der Studentin. En masculino y neutro el sustantivo toma -s o -es: des Mannes, des Kindes. Con nombres propios se pospone el -s: Annas neues Handy, Vaters Auto (y Max' Buch con apóstrofo tras s final).",
      "Las preposiciones de genitivo más frecuentes: wegen (a causa de), trotz (a pesar de), während (durante), statt (en lugar de), außerhalb/innerhalb (fuera de/dentro de), oberhalb/unterhalb (por encima/debajo de). Wegen des Regens bleiben wir zu Hause.",
      "En el habla coloquial el genitivo retrocede ante el dativo (wegen dem Regen), y la posesión se expresa con von + dativo (das Auto von meinem Nachbarn). En registro escrito y formal, sin embargo, el genitivo sigue siendo la marca de alemán cuidado: es imprescindible en cartas oficiales y textos académicos.",
    ],
    examples: [
      { it: "Das ist die Wohnung meiner Schwester.", es: "Es el piso de mi hermana." },
      { it: "Wegen des Streiks fahren keine Züge.", es: "Por la huelga no circulan trenes." },
      { it: "Trotz der Kälte gingen wir spazieren.", es: "A pesar del frío salimos a pasear." },
      { it: "Die Meinung des Arztes war klar.", es: "La opinión del médico era clara." },
      { it: "Während der Ferien arbeite ich nicht.", es: "Durante las vacaciones no trabajo." },
    ],
    problems: [
      {
        title: "Genitivo posesivo",
        question: "Completa: “Das ist das Auto ___ Vaters. (mi padre)”",
        steps: [
          "Posesión con genitivo: artículo posesivo + genitivo del posesor.",
          "Vater es masculino: genitivo meines Vaters.",
          "El posesor puede también ir antepuesto: meines Vaters Auto.",
        ],
        conclusion: "Das ist das Auto meines Vaters.",
      },
      {
        title: "Preposición + genitivo",
        question: "Completa: “___ des schlechten Wetters bleibt das Festival zu. (a causa de)”",
        steps: [
          "«A causa de» = wegen + genitivo.",
          "Wetters ya está en genitivo neutro.",
          "En registro formal wegen DES, no wegen dem.",
        ],
        conclusion: "Wegen des schlechten Wetters bleibt das Festival zu.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Genitiv: artículos y posesivos",
        headers: ["Género", "Determinado", "Indeterminado", "Posesivo (ich)"],
        rows: [
          ["masculino", "des Mannes", "eines Mannes", "meines Vaters"],
          ["femenino", "der Frau", "einer Frau", "meiner Mutter"],
          ["neutro", "des Kindes", "eines Kindes", "meines Kindes"],
          ["plural", "der Kinder", "—", "meiner Freunde"],
        ],
      },
    ],
  },
  {
    id: "de-g-b2-konnektoren", level: "B2", title: "Conectores: deshalb, trotzdem, obwohl, denn", titleIt: "Konnektoren und Satzverbindungen",
    summary: "La posición del verbo delata si el conector une frases (deshalb) o introduce subordinadas (obwohl).",
    explanation: [
      "Los conectores causales forman una escala: weil (subordinante, verbo al final) — denn (coordinante, verbo en posición 2) — deshalb/darum/deswegen (adverbio, abre frase propia con verbo en posición 2). Es regnet, weil es kalt ist. / Es regnet, denn es ist kalt. / Es regnet. Deshalb bleiben wir zu Hause.",
      "Lo mismo ocurre en el eje concesivo: obwohl (subordinante) frente a trotzdem (adverbio concesivo): Obwohl es regnete, gingen wir spazieren. / Es regnete. Trotzdem gingen wir spazieren. Mezclar los patrones («obwohl… trotzdem» juntos) es error típico de examen.",
      "Completan el mapa: daher (por eso), folglich (por consiguiente), außerdem (además), allerdings (sin embargo), einerseits… andererseits (por un lado… por otro). En alemán escrito, estos conectores estructuran el texto y se espera que alternes con las subordinadas de weil/obwohl para variar la sintaxis.",
    ],
    examples: [
      { it: "Es regnete. Trotzdem gingen wir spazieren.", es: "Llovía. Aun así salimos a pasear." },
      { it: "Obwohl es regnete, gingen wir spazieren.", es: "Aunque llovía, salimos a pasear." },
      { it: "Ich lerne Deutsch, deshalb brauche ich einen Deutschkurs.", es: "Quiero aprender alemán, por eso necesito un curso." },
      { it: "Er kommt nicht, denn er ist krank.", es: "No viene, porque está enfermo." },
      { it: "Einerseits gefällt mir die Wohnung, andererseits ist sie teuer.", es: "Por un lado me gusta el piso, por otro es caro." },
    ],
    problems: [
      {
        title: "Conector con posición verbal",
        question: "Completa con el conector correcto: «Es regnete hart. ___ gingen wir spazieren.» (sin embargo)",
        steps: [
          "Necesito un adverbio concesivo que abra una frase propia.",
          "trotzdem exige verbo en posición 2 justo después.",
          "La solución: Trotzdem gingen wir spazieren.",
        ],
        conclusion: "Es regnete hart. Trotzdem gingen wir spazieren.",
      },
      {
        title: "Subordinante concesivo",
        question: "Une con aunque: «___ es sehr kalt war, ___ wir schwimmen.»",
        steps: [
          "«Aunque» = obwohl + subordinada con verbo final.",
          "obwohl es sehr kalt war.",
          "La principal mantiene su verbo en posición 2: schwammen wir.",
        ],
        conclusion: "Obwohl es sehr kalt war, schwammen wir.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Un mismo significado, tres posiciones del verbo",
        headers: ["Conector", "Tipo", "Posición del verbo", "Ejemplo"],
        rows: [
          ["weil", "subordinante", "al final", "..., weil ich müde bin."],
          ["denn", "coordinante", "posición 2", "..., denn ich bin müde."],
          ["deshalb", "adverbio", "posición 2 tras él", "Deshalb bleibe ich zu Hause."],
          ["obwohl", "subordinante", "al final", "Obwohl es regnet, gehe ich."],
          ["trotzdem", "adverbio", "posición 2 tras él", "Es regnet. Trotzdem gehe ich."],
        ],
      },
    ],
  },

  /* ══════════ C1 ══════════ */
  {
    id: "de-g-c1-partizipialkonstruktionen", level: "C1", title: "Construcciones con participios", titleIt: "Partizipialkonstruktionen",
    summary: "Partizip I (activo/simultáneo) y Partizip II (pasivo/anterior) como adjetivos y frases absolutas.",
    explanation: [
      "El Partizip I (infinitivo + d: laufend, steigend, wachsend) expresa acción activa y simultánea: die steigenden Kosten («los costes crecientes»), das weinende Kind. El Partizip II (gestiegen, gebaut, geplant) expresa pasividad o anterioridad: die geplanten Reformen («las reformas previstas»), der reparierte Wagen.",
      "Ambos participios pueden ampliarse con complementos y quedar antepuestos al sustantivo como atributos extendidos: die seit Jahren steigenden Mieten («los alquileres que suben desde hace años»), die 1990 eröffnete Galerie («la galería inaugurada en 1990»). Equivalenten a relativas: die Reform, die geplant wurde → die geplante Reform.",
      "Como frases absolutas (adverbial), el participio abre o cierra la frase con sujeto implícito: Lachend verließ sie den Raum («salió de la sala riendo»), In Erfurt angekommen, suchte er sofort ein Hotel («una vez llegado a Erfurt, buscó hotel enseguida»). Este uso elegante sustituye a subordinadas temporales o modales.",
    ],
    examples: [
      { it: "Die wachsende Stadt braucht neue Schulen.", es: "La ciudad creciente necesita escuelas nuevas." },
      { it: "Der von der Kommission vorgeschlagene Plan wurde abgelehnt.", es: "El plan propuesto por la comisión fue rechazado." },
      { it: "Lachend erzählte sie die Geschichte.", es: "Contó la historia riendo." },
      { it: "Die seit Monaten diskutierte Reform tritt in Kraft.", es: "La reforma discutida desde hace meses entra en vigor." },
      { it: "Aufgewacht um sechs, ging er joggen.", es: "Despertado a las seis, salió a correr." },
    ],
    problems: [
      {
        title: "Reducir una relativa",
        question: "Reduce: «die Mieten, die seit Jahren steigen» → atributo participial",
        steps: [
          "Relativa activa y simultánea → Partizip I.",
          "steigen → steigend.",
          "El complemento seit años se interpone: die seit Jahren steigenden Mieten.",
        ],
        conclusion: "die seit Jahren steigenden Mieten",
      },
      {
        title: "Participio pasivo",
        question: "Reduce: «die Brücke, die 1927 gebaut wurde» → atributo participial",
        steps: [
          "Relativa pasiva → Partizip II.",
          "bauen → gebaut.",
          "El año se antepone al participio: die 1927 gebaute Brücke.",
        ],
        conclusion: "die 1927 gebaute Brücke",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "de-g-c1-passiversatz", level: "C1", title: "Alternativas a la pasiva", titleIt: "Passiversatzformen: sich lassen, sein zu, -bar",
    summary: "sich lassen + infinitivo, sein + zu + infinitivo y adjetivos en -bar evitan la pasiva pesada.",
    explanation: [
      "El buen estilo alemán técnico y académico evita repetir kann/muss + pasiva. Tres sustitutos: 1) sich lassen + infinitivo = capacidad: Das Problem lässt sich lösen («el problema puede resolverse»); 2) sein + zu + infinitivo = necesidad o posibilidad: Die Rechnung ist bis Freitag zu bezahlen («la cuenta debe pagarse / es pagadera antes del viernes»);",
      "3) el sufijo adjetival -bar = «que se puede…»: machbar (factible), lösbar (resoluble), trinkbar (potable), waschbar (lavable), erklärbar. La elección depende del matiz: -bar y sich lassen son possibility; sein + zu puede ser possibility o necessity según contexto y modal.",
      "La transformación es un clásico de examen (Goethe C1, TestDaF): Das Medikament kann gut vertragen werden → Das Medikament wird gut vertragen → mejor: Das Medikament ist gut verträglich / lässt sich gut vertragen. Domina las tres rutas y sabrás cuál suena más natural en cada registro.",
    ],
    examples: [
      { it: "Das Problem lässt sich nicht lösen.", es: "El problema no se puede resolver." },
      { it: "Der Vertrag ist bis Ende des Monats zu kündigen.", es: "El contrato debe rescindirse antes de fin de mes." },
      { it: "Diese Aufgabe ist leicht lösbar.", es: "Esta tarea es fácilmente resoluble." },
      { it: "Sein Verhalten ist kaum erklärbar.", es: "Su comportamiento apenas puede explicarse." },
      { it: "Die Daten lassen sich jederzeit abrufen.", es: "Los datos pueden consultarse en cualquier momento." },
    ],
    problems: [
      {
        title: "Transformar con sich lassen",
        question: "Reescribe sin pasiva: “Der Fehler kann schnell behoben werden.”",
        steps: [
          "können + pasiva → sich lassen.",
          "El verbo principal se mantiene en infinitivo: beheben.",
          "Sujeto + lässt sich + schnell beheben.",
        ],
        conclusion: "Der Fehler lässt sich schnell beheben.",
      },
      {
        title: "Transformar con -bar",
        question: "Reescribe adjetivalmente: “Der Vorschlag kann verwirklicht werden.”",
        steps: [
          "El sufijo -bar se añade a la raíz del verbo: verwirklich- + -bar.",
          "verwirklich- + -bar = verwirklichbar.",
          "Con sein: Der Vorschlag ist verwirklichbar.",
        ],
        conclusion: "Der Vorschlag ist verwirklichbar. (La propuesta es realizable.)",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Las tres rutas del Passiversatz",
        headers: ["Forma", "Sentido", "Ejemplo"],
        rows: [
          ["sich lassen + Inf.", "poder (capacidad)", "Das lässt sich machen."],
          ["sein + zu + Inf.", "deber/poder", "Die Form ist auszufüllen."],
          ["Adjektiv auf -bar", "«-ble» español", "machbar, lösbar, trinkbar"],
        ],
        note: "Comparación directa con el español: realizable → verwirklichbar, resoluble → lösbar.",
      },
    ],
  },
  {
    id: "de-g-c1-funktionsverbgefuege", level: "C1", title: "Colocaciones verbo + sustantivo", titleIt: "Funktionsverbgefüge",
    summary: "in Frage stellen, zur Verfügung stehen, Kritik üben: verbos vacíos con sentido fijo.",
    explanation: [
      "Los Funktionsverbgefüge son colocaciones en las que el verbo pierde su significado pleno y el sustantivo porta el sentido: eine Entscheidung treffen («tomar una decisión»), Kritik üben («ejercer crítica»), Rücksicht nehmen auf («tener consideración con»), Abschied nehmen von («despedirse de»).",
      "Con preposición fija: in Frage stellen (poner en duda), zur Verfügung stehen (estar a disposición), zur Sprache bringen (sacar a colación), in Kauf nehmen (asumir un coste), unter Druck setzen (presionar). El caso del sustantivo y la preposición son INAMOVIBLES: «Kritik machen» no existe en registro formal.",
      "Son la marca del alemán profesional y periodístico: un informe que dice Die Kommission hat Kritik an dem Plan geübt suena nativo; «Die Kommission hat den Plan kritisiert» es correcto pero plano. En C1 se espera que alternes ambas posibilidades según el registro.",
    ],
    examples: [
      { it: "Wir müssen eine Entscheidung treffen.", es: "Tenemos que tomar una decisión." },
      { it: "Er stellt den Bericht in Frage.", es: "Pone el informe en duda." },
      { it: "Die Daten stehen uns zur Verfügung.", es: "Los datos están a nuestra disposición." },
      { it: "Man sollte mehr Rücksicht auf die Nachbarn nehmen.", es: "Se debería tener más consideración con los vecinos." },
      { it: "Sie übte scharfe Kritik an der Politik.", es: "Ejerció una dura crítica contra la política." },
    ],
    problems: [
      {
        title: "Completar la colocación",
        question: "Completa: “Die Ministerin ___ scharfe Kritik an dem Gesetz. (ejercer crítica)”",
        steps: [
          "La colocación de «ejercer crítica» es Kritik üben.",
          "El sujeto es tercera singular en Präteritum: übte.",
          "Kritik an + dativo completa el sintagma.",
        ],
        conclusion: "Die Ministerin übte scharfe Kritik an dem Gesetz.",
      },
      {
        title: "Preposición fija",
        question: "Completa: “Ich nehme Rücksicht ___ die Kinder. (tener consideración)”",
        steps: [
          "Rücksicht nehmen rige sobre + acusativo.",
          "La preposición fija de esta colocación es auf.",
          "auf die Kinder (acusativo plural sin marca).",
        ],
        conclusion: "Ich nehme Rücksicht auf die Kinder.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "de-g-c1-erweiterte-attribute", level: "C1", title: "Atributos extendidos", titleIt: "Erweiterte Attribute",
    summary: "El participio con complementos ANTEPUESTO entre artículo y sustantivo: la firma del alemán oficial.",
    explanation: [
      "El atributo extendido es una relativa reducida y antepuesta: die von der Kommission vorgeschlagene Reform equivale a die Reform, die von der Kommission vorgeschlagen wurde. Todo lo que en español va detrás («la reforma propuesta por la comisión») se coloca en alemán DELANTE del sustantivo, entre artículo y participio.",
      "Estructura: artículo + extensiones (preposiciones, adverbios, complementos) + Partizip I/II + sustantivo. El participio se declina como adjetivo: der im Jahr 2020 verabschiedete Haushalt, die in München geborene Schauspielerin, die seit Jahren steigenden Kosten.",
      "Para descodificarlos en la lectura: localiza primero artículo y sustantivo final, identifica el participio y convierte mentalmente en relativa (die Reform, die … wurde). Para escribirlos: parte de la relativa, quita el pronombre y el verbo auxiliar, y antepón el participio declinado. Es la estructura estrella del alemán administrativo y académico (Verwaltungs- und Wissenschaftsdeutsch).",
    ],
    examples: [
      { it: "der von der Regierung geplante Ausbau", es: "la ampliación planeada por el gobierno" },
      { it: "die seit 2019 geltenden Regeln", es: "las normas vigentes desde 2019" },
      { it: "das im Bundestag diskutierte Gesetz", es: "la ley discutida en el Bundestag" },
      { it: "die in Leipzig stattfindende Messe", es: "la feria que se celebra en Leipzig" },
      { it: "der während des Krieges zerstörte Bahnhof", es: "la estación destruida durante la guerra" },
    ],
    problems: [
      {
        title: "Descodificar",
        question: "¿Qué significa «die 1990 eröffnete Galerie»?",
        steps: [
          "Localizo núcleo: die Galerie.",
          "El participio eröffnet (Partizip II) marca pasividad/anterioridad.",
          "1990 indica el momento.",
          "Convierto en relativa: die Galerie, die 1990 eröffnet wurde.",
        ],
        conclusion: "La galería inaugurada en 1990.",
      },
      {
        title: "Construir",
        question: "Convierte en atributo extendido: «die Brücke, die im 19. Jahrhundert erbaut wurde»",
        steps: [
          "Participio: erbaut (Partizip II).",
          "Extensiones: im 19. Jahrhundert.",
          "Se antepone todo entre artículo y sustantivo, con declinación de adjetivo débil: die im 19. Jahrhundert erbaute Brücke.",
        ],
        conclusion: "die im 19. Jahrhundert erbaute Brücke",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "de-g-c1-praepositionaladverbien", level: "C1", title: "Adverbios preposicionales y valencia verbal", titleIt: "Präpositionaladverbien und Verbvalenz",
    summary: "darauf, worauf, damit, womit: la respuesta alemana a la preposición huérfana.",
    explanation: [
      "Muchos verbos alemanes rigen preposición + caso: warten auf + acusativo (esperar A), sich freuen über/auf (alegrarse DE/POR), denken an (pensar EN), sich interessieren für (interesarse POR), sich bewerben um (solicitar). El español y el alemán rara vez coinciden en la preposición: cada valencia se aprende con su verbo.",
      "Cuando el complemento es una cosa, el alemán NO deja la preposición colgando como el español («eso dependo DE ello»): la funde en un adverbio preposicional da(r)- + preposición: Ich warte auf den Bus → Ich warte darauf. Con pregunta: Worauf wartest du? (¿A qué esperas?).",
      "Con personas se usan preposición + pronombre (Auf wen wartest du? — Auf meinen Bruder), con cosas wor-/da(r)- (Worauf wartest du? — Auf den Bus). Además, estos adverbios sirven de correlato ante infinitivos y subordinadas: Ich freue mich darauf, dich zu sehen; Ich rechne damit, dass er kommt.",
    ],
    examples: [
      { it: "Worauf wartest du? — Auf die Straßenbahn.", es: "¿A qué esperas? — Al tranvía." },
      { it: "Ich freue mich darauf, dich bald zu sehen.", es: "Me alegro de verte pronto." },
      { it: "Er denkt daran, umzuziehen.", es: "Está pensando en mudarse." },
      { it: "Wofür interessierst du dich?", es: "¿Por qué te interesas?" },
      { it: "Damit habe ich nicht gerechnet.", es: "Con eso no contaba." },
    ],
    problems: [
      {
        title: "Preguntar con adverbio preposicional",
        question: "Pregunta por la cosa: «Ich warte auf den Aufzug.» (¿A qué esperas?)",
        steps: [
          "Aufzug es cosa, no persona.",
          "Cosas → wo(r)- + preposición del verbo.",
          "warten rige auf → worauf.",
        ],
        conclusion: "Worauf wartest du?",
      },
      {
        title: "Correlato ante infinitivo",
        question: "Completa: “Ich freue mich ___, dich zu sehen. (alegrarse DE)”",
        steps: [
          "sich freuen rige auf cuando es expectativa futura.",
          "Ante un infinitivo con zu, la preposición se adelanta como correlato da(r)-.",
          "auf → darauf (r eufónica ante vocal).",
        ],
        conclusion: "Ich freue mich darauf, dich zu sehen.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Valencias trampa para hispanohablantes",
        headers: ["Verbo", "Preposición + caso", "Trampa española"],
        rows: [
          ["warten", "auf + Akk.", "esperar A"],
          ["denken", "an + Akk.", "pensar EN"],
          ["sich freuen über/auf", "über + Akk. / auf + Akk.", "alegrarse DE / POR"],
          ["sich interessieren für", "für + Akk.", "interesarse POR"],
          ["sich bewerben um", "um + Akk.", "solicitar / optar A"],
        ],
      },
    ],
  },

  /* ══════════ C2 ══════════ */
  {
    id: "de-g-c2-konjunktiv1", level: "C2", title: "El Konjunktiv I y el discurso indirecto", titleIt: "Der Konjunktiv I und die indirekte Rede",
    summary: "er sei, er habe, er werde: la distancia del periodismo y de la lengua académica.",
    explanation: [
      "El Konjunktiv I es la marca alemana del discurso indirecto: Der Minister sagte, er sei mit dem Ergebnis zufrieden («el ministro dijo que estaba satisfecho»). Sus formas: er sei (sein), er habe (haben), er komme (verbos regulares: raíz + -e en 3ª persona).",
      "Su valor es pragmático: señala que el hablante REPITE sin comprometerse con la verdad. Por eso domina la prensa: Die Firma teilte mit, sie habe die Produktion eingestellt. En textos académicos permite citar con distancia: Der Autor argumentiert, die Quelle sei unzuverlässig.",
      "Cuando la forma de KI coincide con el indicativo (wir sagen, sie sagen), el alemán salta al Konjunktiv II (sie würden sagen, sie hätten) o al indicativo puro con dass. La elección entre KI, KII e indicativo en indirecta es una decisión de registro y de matiz de distancia, y es competencia C2 pura.",
    ],
    examples: [
      { it: "Sie sagte, sie komme aus Rostock.", es: "Dijo que era de Rostock." },
      { it: "Er behauptet, er habe nichts gewusst.", es: "Afirma que no sabía nada." },
      { it: "Die Zeitung schreibt, die Verhandlungen seien gescheitert.", es: "El periódico escribe que las negociaciones habrían fracasado." },
      { it: "Der Autor meint, das sei übertrieben.", es: "El autor opina que eso sería exagerado." },
      { it: "Sie erklärte, man werde die Pläne prüfen.", es: "Explicó que se examinarían los planes." },
    ],
    problems: [
      {
        title: "Poner en indirecta",
        question: "Pasa a indirecta: Er sagt: «Ich habe den Brief geschickt.»",
        steps: [
          "El pronombre pasa a er.",
          "haben en KI 3ª persona: habe.",
          "El participio permanece: den Brief geschickt habe → er habe den Brief geschickt.",
        ],
        conclusion: "Er sagt, er habe den Brief geschickt.",
      },
      {
        title: "Forma colapsada",
        question: "Pasa a indirecta: Sie sagten: «Wir haben verloren.»",
        steps: [
          "wir → sie (3ª plural).",
          "KI de haben en plural coincide con el indicativo (sie haben): hay que saltar a KII.",
          "KII de haben: sie hätten.",
        ],
        conclusion: "Sie sagten, sie hätten verloren.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Konjunktiv I: paradigmas mínimos",
        headers: ["Persona", "sein", "haben", "regular (kommen)"],
        rows: [
          ["ich", "sei", "habe", "komme"],
          ["er/sie/es", "sei", "habe", "komme"],
          ["wir", "seien", "haben", "kommen"],
          ["sie/Sie", "seien", "haben", "kommen"],
        ],
        note: "Solo la 3ª persona singular se usa con regularidad; el resto colisiona con el indicativo y se sustituye por KII.",
      },
    ],
  },
  {
    id: "de-g-c2-nominalstil", level: "C2", title: "Nominalstil y Verbalstil", titleIt: "Nominalstil und Verbalstil",
    summary: "Transformar oraciones en sustantivos (y volver): el timbre del alemán académico y administrativo.",
    explanation: [
      "El Nominalstil convierte estructuras verbales en cadenas de sustantivos: nachdem die Unterlagen geprüft worden waren → nach der Prüfung der Unterlagen. Verbos se nominalizan (prüfen → die Prüfung, anwenden → die Anwendung, entscheiden → die Entscheidung) y los complementos se cuelgan en genitivo o con preposición fija.",
      "El Verbalstil es su inverso: die Anwendung der neuen Regel → wenn die neue Regel angewendet wird. La prosa viva (periodismo de calidad, literatura) prefiere el verbal; el alemán oficial (leyes, informes, ciencia) navega en nominal: Die Feststellung der Ursachen des Versagens der Bremsanlage («la determinación de las causas del fallo del sistema de frenos»).",
      "El dominio C2 consiste en tres habilidades: nominalizar correctamente (elegir género, genitivo y preposición), des-nominalizar para entender y reformular, y decidir con criterio de registro cuál usar. Las cadenas nominales largas son legales pero pesadas: saber romperlas con verbos es señal de estilo maduro.",
    ],
    examples: [
      { it: "nach der Prüfung der Unterlagen", es: "tras el examen de la documentación (= nachdem die Unterlagen geprüft wurden)" },
      { it: "die Anwendung der neuen Regel", es: "la aplicación de la nueva norma (= wenn die Regel angewendet wird)" },
      { it: "Zur Verbesserung der Luftqualität wurden Filtersysteme installiert.", es: "Para mejorar la calidad del aire se instalaron sistemas de filtros." },
      { it: "Die Entscheidung fiel einstimmig aus.", es: "La decisión fue unánime (decidieron por unanimidad)." },
      { it: "wegen der Verzögerung der Lieferung", es: "debido al retraso de la entrega" },
    ],
    problems: [
      {
        title: "Nominalizar",
        question: "Nominaliza: «weil die Preise steigen» (causa con wegen)",
        steps: [
          "El verbo steigen se nominaliza: der Anstieg.",
          "El sujeto pasa a genitivo: die Preise → der Preise.",
          "wegen + genitivo: wegen des Anstiegs der Preise.",
        ],
        conclusion: "wegen des Anstiegs der Preise (o, más corto: wegen steigender Preise)",
      },
      {
        title: "Des-nominalizar",
        question: "Convierte en frase verbal: «nach der Ankunft des Zuges»",
        steps: [
          "die Ankunft ← ankommen.",
          "El genitivo des Zuges es el sujeto.",
          "nachdem + sujeto + verbo conjugado final: nachdem der Zug angekommen ist.",
        ],
        conclusion: "nachdem der Zug angekommen ist",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "de-g-c2-modalpartikeln", level: "C2", title: "Las partículas modales", titleIt: "Modalpartikeln: doch, mal, eben, halt",
    summary: "Palabras intraducibles que suavizan, refuerzan o matizan: el alma del alemán hablado.",
    explanation: [
      "Las Modalpartikeln son palabras cortas (doch, mal, eben, halt, ja, schon, wohl, eigentlich) que NO se traducen: modulan la actitud del hablante. Komm doch mit! no es «ven de todos modos»: el doch convierte la orden en invitación cálida. Mach mal die Tür auf pide con suavidad (mal suaviza cualquier petición).",
      "Cada partícula tiene su campo: doch (insistencia amable o contradecir con evidencia: Ich habe dich doch angerufen!), eben/halt (aceptación resignada: Das ist eben so), ja (sabido compartido: Du weißt das ja), schon (concesión anticipada: Das wird schon klappen), wohl (suposición: Er ist wohl im Stau), eigentlich (reorientación del tema: Eigentlich wollte ich…).",
      "Son exclusivas del registro hablado y medio (Mittel- und Umgangssprache): en un informe o una tesis no caben, y su uso erróneo suena inmediatamente extranjero. En C2 se valoran dos destrezas: entenderlas al vuelo (películas, conversación) y usarlas con precisión tonal, sin calcos del español («¡venga, ven pues!» no tiene traducción literal: tiene cinco partículas alemanas distintas).",
    ],
    examples: [
      { it: "Komm doch mit!", es: "¡Ven, anda! (invitación amable)" },
      { it: "Mach mal das Licht an.", es: "Enciende la luz, ¿sí? (petición suave)" },
      { it: "Das ist eben so.", es: "Es lo que hay (aceptación)." },
      { it: "Ich habe dir doch geschrieben!", es: "¡Pero si te he escrito! (evidencia compartida)" },
      { it: "Er hat wohl den Termin vergessen.", es: "Supongo que ha olvidado la cita." },
    ],
    problems: [
      {
        title: "Elegir la partícula",
        question: "Suaviza la orden: «Gib mir die Zeitung.» (petición amable)",
        steps: [
          "Necesito una partícula suavizante de petición.",
          "mal es la suavizadora universal de órdenes e instrucciones.",
          "La posición va tras el verbo: Gib mir mal die Zeitung.",
        ],
        conclusion: "Gib mir mal die Zeitung.",
      },
      {
        title: "Interpretar la partícula",
        question: "¿Qué matiz aporta doch en «Ich bin doch kein Kind mehr.»?",
        steps: [
          "doch remite a algo sabido o evidente para ambos.",
          "El hablante se defiende con un hecho que el otro ya conoce.",
          "Equivale a un «¡pero si ya no soy un niño!» español.",
        ],
        conclusion: "Contrariedad con evidencia compartida: «¡pero si ya no soy un niño!»",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Campos de las principales Modalpartikeln",
        headers: ["Partícula", "Campo", "Glosa aproximada"],
        rows: [
          ["doch", "invitación / evidencia", "anda, pero si…"],
          ["mal", "suavización", "un momento, ¿sí?"],
          ["eben / halt", "resignación", "es lo que hay"],
          ["ja", "sabido compartido", "como sabes"],
          ["wohl", "suposición", "supongo"],
        ],
        note: "Ninguna funciona en registro formal: en escritos se sustituyen por adverbios (vermutlich, bekanntlich, immerhin).",
      },
    ],
  },
  {
    id: "de-g-c2-textkohaesion", level: "C2", title: "Cohesión textual: referencia y sustitución", titleIt: "Textkohäsion: Verweismittel und Substitution",
    summary: "Cadenas de referencia, Pronominaladverbien conectivos y sustitución: escribir alemán que fluye.",
    explanation: [
      "Un texto C2 no repite: encadena. Los Verweismittel (anáforas) retoman lo dicho: pronombres (dieser, jener, der/die/das como pro-forma: Kennst du den neuen Kollegen? — Der wartet schon im Büro), adverbios preposicionales conectivos (dadurch, dadurch dass; hierbei, dabei, deswegen) y sustitutos léxicos (Synonymie, hiperónimos: der Wagen → das Fahrzeug).",
      "Los Pronominaladverbien en función conectiva son joyas del alemán escrito: Dadurch, dass die Preise steigen, sinkt die Kaufkraft («el hecho de que suban los precios reduce el poder adquisitivo»); Die Firma investiert in Bildung. Hierdurch verbessert sich… Las construcciones wobei, wogegen, wonach retoman oraciones enteras.",
      "La sustitución verbal (Pro-Verb tun) evita repetir el verbo: Arbeitest du noch bei Siemens? — Nein, das tue ich nicht mehr. Dominar estas tres rutas (pro-formas nominales, adverbios conectivos, pro-verbos) más los conectores textuales (zunächst, daraufhin, abschließend, jedoch, allerdings) es lo que convierte frases correctas en texto con cohesión nativa.",
    ],
    examples: [
      { it: "Der neue Kollege? Der wartet schon im Büro.", es: "¿El nuevo colega? Ya está esperando en la oficina." },
      { it: "Dadurch, dass er kündigte, entstand ein Problem.", es: "El que renunciara creó un problema." },
      { it: "Die Firma sponsert den Verein. Hierdurch gewinnt sie Ansehen.", es: "La empresa patrocina al club. Con ello gana prestigio." },
      { it: "Er lobte den Film, obwohl er ihn nicht mochte — und das tat er selten.", es: "Elogió la película aunque no le gustaba, y eso rara vez lo hacía." },
      { it: "Zunächst prüfen wir die Unterlagen; daraufhin entscheiden wir.", es: "Primero revisamos la documentación; después decidimos." },
    ],
    problems: [
      {
        title: "Referencia con pro-forma",
        question: "Evita la repetición: «Kennst du den neuen Kursleiter? ___ kommt aus Jena.»",
        steps: [
          "La repetición de der neue Kursleiter sería pesada.",
          "La pro-forma nominal der/die/das (con flexión) retoma al masculino.",
          "Nominativo masculino: Der kommt aus Jena.",
        ],
        conclusion: "Der kommt aus Jena.",
      },
      {
        title: "Conector preposicional",
        question: "Une con un adverbio conectivo: «Die Preise steigen. ___ sinkt die Kaufkraft.» (a consecuencia de ello)",
        steps: [
          "Necesito retomar una oración entera como causa.",
          "dadurch / hierdurch remiten a lo precedente.",
          "Con ello la frase gana cohesión sin conjunción subordinante: Dadurch sinkt die Kaufkraft.",
        ],
        conclusion: "Dadurch sinkt die Kaufkraft.",
      },
    ],
    exerciseIds: [],
  },
];
