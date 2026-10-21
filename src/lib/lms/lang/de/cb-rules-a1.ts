import type { CbGrammarPack } from "../cb-rules";

/* ═══ DE A1 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════ */

export const DE_CB_RULES_A1: Record<string, CbGrammarPack> = {
  "de-cu-a1-01": {
    tables: [
      {
        title: "sein + die W-Fragen",
        headers: ["Person", "sein", "W-Frage"],
        rows: [
          ["ich", "ich bin", "Wer ist das?"],
          ["du", "du bist", "Wie heißt du?"],
          ["Sie (formal)", "Sie sind", "Woher kommen Sie?"],
          ["er/sie/es", "er ist", "Was ist er von Beruf?"],
          ["wir", "wir sind", "Wo wohnen wir?"],
          ["sie (pl.)", "sie sind", "Wer sind Sie?"],
        ],
        note: "El verbo sein es la primera herramienta y las preguntas W su marco: Wer (quién), Wo (dónde), Was (qué), Wie (cómo), Woher (de dónde). Ojo: el verbo SIEMPRE en posición 2 en la pregunta W («Wie heißt DU?»), y el pronombre formal Sie con mayúscula abre todas las puertas.",
      },
    ],
    moreExamples: [
      { it: "Woher kommen Sie? — Ich komme aus Peru.", es: "¿De dónde viene usted? — Vengo de Perú." },
      { it: "Das ist Lena, meine Mitbewohnerin.", es: "Esta es Lena, mi compañera de piso." },
      { it: "Wir sind neu in Berlin.", es: "Somos nuevos en Berlín." },
    ],
    drills: {
      transform: [
        { q: "Ergänze: «___ heißt du?»", options: ["Wie", "Wer", "Was"], answer: 0, explain: "Cómo te llamas → Wie heißt du?" },
        { q: "Formell: «Du bist die Organisatorin» → con un desconocido:", options: ["Sie sind die Organisatorin.", "Sie bist die Organisatorin.", "Ihr sind die Organisatorin."], answer: 0, explain: "Sie (formal) + sind." },
      ],
      errors: [
        { q: "Korrigiere: «Wie du heißt?»", options: ["Wie heißt du?", "Wie du heißt?", "Wie heißt du heißt?"], answer: 0, explain: "Pregunta W: verbo en posición 2 → heißt du." },
      ],
    },
  },
  "de-cu-a1-02": {
    tables: [
      {
        title: "haben + Possessivartikel",
        headers: ["Person", "haben", "Possessiv (m./f./pl.)"],
        rows: [
          ["ich", "ich habe", "mein Bruder / meine Schwester / meine Eltern"],
          ["du", "du hast", "dein / deine / deine"],
          ["er/sie", "er hat", "sein / seine / seine"],
          ["wir", "wir haben", "unser / unsere / unsere"],
          ["Sie", "Sie haben", "Ihr / Ihre / Ihre"],
        ],
        note: "El posesivo alemán concuerda con la COSA como el francés: mein Bruder (m.), meinE Schwester (f.), meinE Eltern (pl.). haben es irregular en du (hast) y er/sie (hat). El posesivo NO lleva artículo: «mein Bruder», nunca «der mein Bruder».",
      },
    ],
    moreExamples: [
      { it: "Hast du eine warme Jacke?", es: "¿Tienes una chaqueta abrigada?" },
      { it: "Meine Eltern wohnen in Madrid.", es: "Mis padres viven en Madrid." },
      { it: "Unser Urlaub war toll!", es: "¡Nuestras vacaciones fueron geniales!" },
    ],
    drills: {
      transform: [
        { q: "Ergänze: «___ du eine Schwester?» (haben)", options: ["Hast", "Habe", "Hat"], answer: 0, explain: "du → hast." },
        { q: "Wähle: «___ Eltern wohnen in Madrid.» (nosotros)", options: ["Unsere", "Unser", "Unsers"], answer: 0, explain: "Eltern plural → unsere." },
      ],
      errors: [
        { q: "Korrigiere: «Ich habe ein Schwester.»", options: ["Ich habe eine Schwester.", "Ich habe einen Schwester.", "Ich habe ein Schwesterin."], answer: 0, explain: "Schwester femenina → eine." },
      ],
    },
  },
  "de-cu-a1-03": {
    tables: [
      {
        title: "Der Akkusativ: ein/eine/einen und den",
        headers: ["Genus", "Nominativ", "Akkusativ"],
        rows: [
          ["maskulin", "ein Kaffee", "einen Kaffee · den Käsekuchen"],
          ["feminin", "eine Cola", "eine Cola · die Cola (invariabel)"],
          ["neutrum", "ein Brötchen", "ein Brötchen · das Brötchen"],
          ["plural", "Brezeln", "Brezeln (invariabel)"],
          ["Regel", "solo el MASCULINO cambia", "m. → -en: ein→einen, der→den"],
        ],
        note: "El acusativo alemán es el más amable: SOLO el masculino se disfraza (ein → einen, der → den). Femenino, neutro y plural quedan igual. «Ich nehme EINEN Kaffee» (tomo UN café — objeto directo masculino). Si dominas einen, dominas el acusativo A1.",
      },
    ],
    moreExamples: [
      { it: "Ich nehme einen Apfelsaft, bitte.", es: "Tomo un jugo de manzana, por favor." },
      { it: "Ich mag den Käsekuchen hier.", es: "Me gusta la tarta de queso de aquí." },
      { it: "Hast du ein Brötchen?", es: "¿Tienes un panecillo?" },
    ],
    drills: {
      transform: [
        { q: "Akkusativ: «Ich nehme ___ Kaffee.»", options: ["einen", "ein", "eine"], answer: 0, explain: "Kaffee masculino objeto → einen." },
        { q: "Akkusativ: «Ich trinke ___ Cola.»", options: ["eine", "einen", "ein"], answer: 0, explain: "Cola femenina → eine (invariável)." },
      ],
      errors: [
        { q: "Korrigiere: «Ich mag ein Käsekuchen.»", options: ["Ich mag einen Käsekuchen.", "Ich mag eine Käsekuchen.", "Ich mag Käsekuchenen."], answer: 0, explain: "Objeto masculino: ein → einen." },
      ],
    },
  },
  "de-cu-a1-04": {
    tables: [
      {
        title: "es gibt + Akkusativ · preposiciones de lugar",
        headers: ["Struktur", "Beispiel", "Español"],
        rows: [
          ["es gibt + akk.", "Es gibt eine U-Bahn-Station.", "hay una estación de metro"],
          ["es gibt + m. akk.", "Es gibt einen Supermarkt.", "hay un supermercado (einen!)"],
          ["gegenüber + dat.", "Der Supermarkt ist gegenüber dem Hotel.", "enfrente del hotel"],
          ["neben + dat.", "Er ist neben der Apotheke.", "al lado de la farmacia"],
          ["in der + Straße", "in der Friedrichstraße", "en la calle Friedrich"],
        ],
        note: "«Hay» alemán = es gibt + ACUSATIVO (¡ojo!: es gibt EINEN Supermarkt, no «ein»). Las preposiciones de lugar estático (wo?) rigen DATIVO: gegenüber DEM Hotel, neben DER Apotheke — el dativo marca ubicación, el acusativo destino.",
      },
    ],
    moreExamples: [
      { it: "Es gibt keinen Supermarkt hier.", es: "No hay ningún supermercado aquí." },
      { it: "Die Apotheke ist neben dem Bäcker.", es: "La farmacia está al lado de la panadería." },
      { it: "Gibt es hier eine Bäckerei?", es: "¿Hay aquí una panadería?" },
    ],
    drills: {
      transform: [
        { q: "Ergänze: «Es gibt ___ Supermarkt in der Straße.»", options: ["einen", "ein", "einem"], answer: 0, explain: "es gibt + acusativo: einen." },
        { q: "Dativ: «neben ___ Apotheke» (die Apotheke)", options: ["der", "die", "den"], answer: 0, explain: "neben + dativo: der Apotheke." },
      ],
      errors: [
        { q: "Korrigiere: «Es gibt ein Supermarkt in der Friedrichstraße.»", options: ["Es gibt einen Supermarkt in der Friedrichstraße.", "Es gibt einen Supermarkt in der Friedrichstraße einem.", "Es gibt Supermarkt einen der Straße."], answer: 0, explain: "es gibt SIEMPRE acusativo: einen." },
      ],
    },
  },
  "de-cu-a1-05": {
    tables: [
      {
        title: "Zahlen und Preise",
        headers: ["Muster", "Beispiel", "Español"],
        rows: [
          ["¿Cuánto cuesta?", "Was kostet der Apfelsaft?", "¿Cuánto cuesta el jugo?"],
          ["precio con coma", "Zwei Euro achtzig (2,80 €)", "dos euros ochenta"],
          ["peso", "Ein Kilo Tomaten kostet drei Euro.", "un kilo de tomates cuesta tres euros"],
          ["gramos", "Ich nehme fünfhundert Gramm Käse.", "quinientos gramos de queso"],
          ["total", "Zusammen macht das zwölf Euro sechzig.", "en total son doce sesenta"],
        ],
        note: "Los números alemanes se dicen al revés: 22 = zweiundzwanzig (dos-y-veinte). Y los precios con coma decimal: «zwei Komma fünf Euro» = 2,50 €. «Zusammen macht das…» es la frase de la caja: en total hace…",
      },
    ],
    moreExamples: [
      { it: "Was kostet ein Kilo Kartoffeln?", es: "¿Cuánto cuesta un kilo de papas?" },
      { it: "Ich nehme zweihundert Gramm Schinken.", es: "Tomo doscientos gramos de jamón." },
      { it: "Das macht neun Euro vierzig.", es: "Son nueve euros cuarenta." },
    ],
    drills: {
      transform: [
        { q: "Sag die Zahl: 47 =", options: ["siebenundvierzig", "vierzigundsieben", "vierundsiebzig"], answer: 0, explain: "Primero la unidad: sieben-und-vierzig." },
        { q: "Frage nach dem Preis: «___ kostet der Apfelsaft?»", options: ["Was", "Wie viel ist", "Was (beide: Was kostet / Wie viel kostet)"], answer: 0, explain: "Was kostet…? = la pregunta de precio estándar." },
      ],
      errors: [
        { q: "Korrigiere: «Zwei Euro achtzig» — ¿2,08 € o 2,80 €?", options: ["2,80 €", "2,08 €", "28,00 €"], answer: 0, explain: "achtzig = ochenta: 2,80 €." },
      ],
    },
  },
  "de-cu-a1-06": {
    tables: [
      {
        title: "Regelmäßige Verben im Präsens + die Uhrzeit",
        headers: ["Person", "Endung", "Beispiel"],
        rows: [
          ["ich", "-e", "ich stehe auf"],
          ["du", "-st", "du frühstückst"],
          ["er/sie/es", "-t", "die Vorlesung beginnt"],
          ["wir/sie/Sie", "-en", "wir lernen"],
          ["Uhrzeit", "um … Uhr", "um sieben Uhr · um halb acht (7:30)"],
        ],
        note: "La conjugación regular alemana es simétrica: -e, -st, -t, -en, -t, -en. «Halb acht» = las SIETE Y MEDIA (¡no las ocho y media!: halb + la hora QUE VIENE). Los verbos separables (auf|stehen) mandan el prefijo al final: «ich stehe um sieben Uhr AUF».",
      },
    ],
    moreExamples: [
      { it: "Der Kurs beginnt um neun Uhr.", es: "El curso empieza a las nueve." },
      { it: "Um halb neun frühstücke ich.", es: "A las ocho y media desayuno." },
      { it: "Wann endet das Seminar?", es: "¿Cuándo termina el seminario?" },
    ],
    drills: {
      transform: [
        { q: "Konjugiere: «Wir ___ (lernen) in der Bibliothek.»", options: ["lernen", "lernt", "lerne"], answer: 0, explain: "wir → -en: lernen." },
        { q: "Uhrzeit: «7:30» =", options: ["halb acht", "halb sieben", "sieben halb"], answer: 0, explain: "halb acht = mitad hacia las 8 = 7:30." },
      ],
      errors: [
        { q: "Korrigiere: «Ich stehe auf um sieben Uhr.» (orden de palabras)", options: ["Ich stehe um sieben Uhr auf.", "Ich auf stehe um sieben Uhr.", "Um sieben Uhr ich stehe auf Uhr."], answer: 0, explain: "Verbo separable: auf va AL FINAL de la frase." },
      ],
    },
  },
  "de-cu-a1-07": {
    tables: [
      {
        title: "gern · lieber · am liebsten + mögen",
        headers: ["Grad", "Form", "Beispiel"],
        rows: [
          ["me gusta", "gern + verbo", "Ich schwimme gern."],
          ["prefiero", "lieber + verbo", "Ich spiele lieber Tennis."],
          ["lo que más", "am liebsten + verbo", "Am liebsten lese ich."],
          ["mögen + sustantivo", "me gusta algo", "Ich mag Kino und Theater."],
          ["frage", "Magst du Klassik?", "¿te gusta la música clásica?"],
        ],
        note: "La escala del gusto: gern → lieber → am liebsten (como bien → mejor → lo mejor). «Ich schwimme gern» = me gusta nadar (adverbio gern, no verbo). mögen va con sustantivos: «ich mag Pop». La comparación funciona igual que más/menos en español.",
      },
    ],
    moreExamples: [
      { it: "Am liebsten höre ich Hörbücher.", es: "Lo que más me gusta es escuchar audiolibros." },
      { it: "Trinkst du lieber Kaffee oder Tee?", es: "¿Prefieres café o té?" },
      { it: "Ich mag deine Jacke.", es: "Me gusta tu chaqueta." },
    ],
    drills: {
      transform: [
        { q: "Ergänze: «Ich spiele ___ Tennis.» (preferencia)", options: ["lieber", "gern", "am liebsten"], answer: 0, explain: "lieber = prefiero (comparativo de gern)." },
        { q: "Steigere: «am ___» (lo que más)", options: ["liebsten", "lieber", "gern"], answer: 0, explain: "am liebsten = el superlativo de gern." },
      ],
      errors: [
        { q: "Korrigiere: «Ich schwimme gern nicht.»", options: ["Ich schwimme nicht gern.", "Ich nicht schwimme gern.", "Ich schwimme gern nein."], answer: 0, explain: "La negación va antes de gern: nicht gern." },
      ],
    },
  },
  "de-cu-a1-08": {
    tables: [
      {
        title: "möchten + Akkusativ (pedir con cortesía)",
        headers: ["Person", "möchten", "Beispiel"],
        rows: [
          ["ich", "ich möchte", "Ich möchte ein Bier."],
          ["du", "möchtest du…?", "Was möchtest du essen?"],
          ["er/sie", "er möchte", "Er möchte einen Apfelsaft."],
          ["wir", "wir möchten", "Wir möchten zahlen, bitte."],
          ["✗", "«ich will ein Bier»", "gramatical, pero brusco al pedir"],
        ],
        note: "möchten es el «quisiera» alemán (Konjunktiv II de mögen): la cortesía líquida de Baviera. «Ich will ein Bier» = QUIERO una cerveza — gramatical pero suena a sed desesperada. La fórmula de oro: «Ich möchte…, bitte».",
      },
    ],
    moreExamples: [
      { it: "Ich möchte einen Kaffee, bitte.", es: "Quisiera un café, por favor." },
      { it: "Möchtest du noch etwas?", es: "¿Quieres algo más?" },
      { it: "Wir möchten getrennt zahlen.", es: "Queremos pagar por separado." },
    ],
    drills: {
      transform: [
        { q: "Höflich: «Ich will ein Bier.» →", options: ["Ich möchte ein Bier, bitte.", "Ich wille ein Bier, bitte.", "Bier, jetzt, bitte!"], answer: 0, explain: "möchten = pedir con cortesía." },
        { q: "Akkusativ: «Er möchte ___ Apfelsaft.»", options: ["einen", "ein", "eine"], answer: 0, explain: "Apfelsaft masculino → einen." },
      ],
      errors: [
        { q: "Korrigiere: «Ich möchte ein Apfelsaft.»", options: ["Ich möchte einen Apfelsaft.", "Ich möchte eine Apfelsaft.", "Ich möchte Apfelsaften ein."], answer: 0, explain: "Objeto masculino → einen Apfelsaft." },
      ],
    },
  },
  "de-cu-a1-09": {
    tables: [
      {
        title: "Starke Verben: fahren, lesen, nehmen",
        headers: ["Verb", "du", "er/sie/es", "Perfekt (bonus)"],
        rows: [
          ["fahren", "du fährst", "er fährt", "gefahren"],
          ["lesen", "du liest", "sie liest", "gelesen"],
          ["nehmen", "du nimmst", "er nimmt", "genommen"],
          ["Regel", "la vocal cambia en du/er", "fahren → fähr-", "—"],
          ["más comunes", "sehen → du siehst", "sprechen → er spricht", "gesehen · gesprochen"],
        ],
        note: "Los verbos fuertes cambian la vocal en du/er: fahrEN → du FÄHRST, er FÄHRT (la e se vuelve ä). Como «pensar → pienso» en español — el cambio toca solo a esas dos personas. nehmen es doblemente travieso: nimmst/nimmt (sin h).",
      },
    ],
    moreExamples: [
      { it: "Er nimmt den ICE nach München.", es: "Él toma el ICE a Múnich." },
      { it: "Sie liest im Zug ein Buch.", es: "Ella lee un libro en el tren." },
      { it: "Fährst du auch nach Hamburg?", es: "¿Tú también vas a Hamburgo?" },
    ],
    drills: {
      transform: [
        { q: "Konjugiere: «Du ___ (fahren) nach Hamburg.»", options: ["fährst", "fahrest", "fahren"], answer: 0, explain: "Verbo fuerte: du fährst (ä)." },
        { q: "Konjugiere: «Er ___ (nehmen) den ICE.»", options: ["nimmt", "nehmt", "nehmen"], answer: 0, explain: "nehmen → er nimmt." },
      ],
      errors: [
        { q: "Korrigiere: «Du liesst ein Buch.»", options: ["Du liest ein Buch.", "Du lesst ein Buch.", "Du lesest ein Buch."], answer: 0, explain: "lesen → du liest (una s)." },
      ],
    },
  },
  "de-cu-a1-10": {
    tables: [
      {
        title: "Das Wetter mit es + Monate und Jahreszeiten",
        headers: ["Struktur", "Beispiel", "Español"],
        rows: [
          ["es + verbo", "Es regnet in Hamburg.", "llueve en Hamburgo"],
          ["es ist + adj", "Im Winter ist es kalt.", "en invierno hace frío"],
          ["es + sustantivo", "Heute ist es windig und bewölkt.", "hoy hay viento y está nublado"],
          ["im + monat", "Im Juli scheint die Sonne.", "en julio brilla el sol"],
          ["im Sommer/Winter · im Frühling/Herbst", "im Herbst regnet es viel", "en otoño llueve mucho"],
        ],
        note: "El clima alemán usa es como paraguas: es regnet (llueve — ¡verbo propio!), es ist kalt (hace frío). Las estaciones van con im: im Sommer, im Winter, im Frühling, im Herbst. «Heute ist es windig» — hoy hace viento: es ist + adjetivo.",
      },
    ],
    moreExamples: [
      { it: "Es schneit im Dezember.", es: "Nieve en diciembre." },
      { it: "Im Frühling wird es wärmer.", es: "En primavera se vuelve más cálido." },
      { it: "Wie ist das Wetter heute?", es: "¿Cómo está el tiempo hoy?" },
    ],
    drills: {
      transform: [
        { q: "Ergänze: «Im Winter ist ___ kalt.»", options: ["es", "das", "man"], answer: 0, explain: "es ist kalt = hace frío." },
        { q: "Übersetze: «llueve» →", options: ["es regnet", "es ist regnet", "regnet es ist"], answer: 0, explain: "regnen es su propio verbo: es regnet." },
      ],
      errors: [
        { q: "Korrigiere: «Im Juli es scheint die Sonne.»", options: ["Im Juli scheint die Sonne.", "Im Juli die Sonne scheint es.", "Es im Juli scheint Sonne die."], answer: 0, explain: "scheint va en posición 2: Im Juli SCHEINT die Sonne." },
      ],
    },
  },
  "de-cu-a1-11": {
    tables: [
      {
        title: "wo? + Dativ: in der, im, am",
        headers: ["Präposition + Kasus", "Beispiel", "Español"],
        rows: [
          ["in der + f. Straße", "Ich wohne in der Boxhagener Straße.", "en la calle Boxhagener"],
          ["im (in dem)", "Die Küche ist im Erdgeschoss.", "en la planta baja"],
          ["am (an dem)", "Das Bad ist am Ende des Flurs.", "al final del pasillo"],
          ["in der Nähe", "Der Supermarkt ist in der Nähe.", "está cerca"],
          ["Regel", "wo? → DATIVO siempre", "ubicación estática"],
        ],
        note: "La pregunta wo? (¿dónde?) abre el dativo: in DER Straße (f.), IM Erdgeschoss (n.), AM Ende (n.). El dativo es el caso del LUGAR donde algo está — el acusativo sería hacia dónde va. «In der Nähe» = en la cercanía: el comodín de toda dirección.",
      },
    ],
    moreExamples: [
      { it: "Die Wohnung ist im zweiten Stock.", es: "El apartamento está en el segundo piso." },
      { it: "Das Café liegt am Kanal.", es: "El café está junto al canal." },
      { it: "Wohnt er in der Schillerstraße?", es: "¿Vive él en la calle Schiller?" },
    ],
    drills: {
      transform: [
        { q: "Dativ: «Ich wohne ___ Boxhagener Straße.»", options: ["in der", "in die", "in dem Straße"], answer: 0, explain: "Straße femenina + wo? → in der." },
        { q: "Kurzform: «in dem Zimmer» =", options: ["im", "in", "am"], answer: 0, explain: "in dem = im (contracción estándar)." },
      ],
      errors: [
        { q: "Korrigiere: «Die Küche ist in Erdgeschoss.»", options: ["Die Küche ist im Erdgeschoss.", "Die Küche ist in der Erdgeschoss.", "Die Küche ist ins Erdgeschoss."], answer: 0, explain: "in + dem = im Erdgeschoss (neutro, dativo)." },
      ],
    },
  },
  "de-cu-a1-12": {
    tables: [
      {
        title: "Berlín-Tage · zuerst, dann, danach, zuletzt",
        headers: ["Konnektor", "Español", "Funktion"],
        rows: [
          ["zuerst", "primero", "abre el día"],
          ["dann", "luego", "siguiente paso"],
          ["danach", "después de eso", "encadena"],
          ["zuletzt", "por último", "cierra"],
          ["Satzklammer", "verbo posición 2", "Zuerst frühstücken WIR im Café."],
        ],
        note: "El esqueleto del día berlinés: zuerst → dann → danach → zuletzt. La Satzklammer (marco oracional) manda: el conector abre, el verbo va en posición 2, el resto cierra. «Zuerst frühstücken wir im Café» — el marco es la firma del alemán.",
      },
    ],
    moreExamples: [
      { it: "Dann gehen wir zum Brandenburger Tor.", es: "Luego vamos a la Puerta de Brandeburgo." },
      { it: "Danach machen wir Fotos.", es: "Después tomamos fotos." },
      { it: "Zuletzt essen wir Currywurst.", es: "Al final comemos Currywurst." },
    ],
    drills: {
      transform: [
        { q: "Ordne: «___ besuchen wir das Museum, ___ essen wir.» (1º/2º)", options: ["Zuerst / dann", "Dann / zuerst", "Zuletzt / zuerst"], answer: 0, explain: "zuerst abre, dann continúa." },
        { q: "Verbstellung: «Zuerst ___ wir im Café.» (frühstücken)", options: ["frühstücken", "frühstücken wir im Café zuerst es", "essen frühstücken"], answer: 0, explain: "Conector + verbo posición 2: Zuerst frühstücken wir." },
      ],
      errors: [
        { q: "Korrigiere: «Zuerst wir frühstücken im Café.»", options: ["Zuerst frühstücken wir im Café.", "Zuerst wir im Café frühstücken.", "Wir zuerst frühstücken im Café es."], answer: 0, explain: "Tras el conector, el VERBO sube a posición 2." },
      ],
    },
  },
};
