import type { CbGrammarPack } from "../cb-rules";

/* ═══ DE A2 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════ */

export const DE_CB_RULES_A2: Record<string, CbGrammarPack> = {
  "de-cu-a2-01": {
    tables: [
      {
        title: "Perfekt con haben",
        headers: ["Typ", "Regel", "Beispiel"],
        rows: [
          ["Bildung", "haben + Partizip II", "Ich habe den Dom besucht."],
          ["regelmäßig: ge…t", "machen → gemacht", "Wir haben einen Kaffee getrunken. (trinken: stark)"],
          ["stark: ge…en", "trinken → getrunken", "—"],
          ["Verb am Ende", "Partizip II cierra", "Ich habe lange geschlafen."],
          ["trennbare Verben", "auf|rufen → aufgerufen", "Ich habe eine Nachricht geschickt."],
        ],
        note: "El Perfekt es EL pasado conversacional alemán: haben + participio AL FINAL (Satzklammer). Regulares: ge-…-t (gemacht); fuertes: ge-…-en (getrunken). «Ich habe lange geschlafen» = dormí mucho — el marco haben…geschlafen es la firma del Perfekt.",
      },
    ],
    moreExamples: [
      { it: "Wir haben einen Kaffee getrunken.", es: "Tomamos un café." },
      { it: "Hast du den Film gesehen?", es: "¿Has visto la película?" },
      { it: "Ich habe meinen Freunden geschrieben.", es: "Les escribí a mis amigos." },
    ],
    drills: {
      transform: [
        { q: "Perfekt: «Ich ___ den Dom ___ (besuchen).»", options: ["habe / besucht", "habe / besuchst", "hat / besuchen"], answer: 0, explain: "haben + besucht (regular ge…t)." },
        { q: "Perfekt: «Wir ___ einen Kaffee ___ (trinken).»", options: ["haben / getrunken", "haben / getrinkt", "sind / getrunken"], answer: 0, explain: "trinken fuerte → getrunken." },
      ],
      errors: [
        { q: "Korrigiere: «Ich habe lange schlafen.»", options: ["Ich habe lange geschlafen.", "Ich habe lange schlaft.", "Ich bin lange geschlafen haben."], answer: 0, explain: "Perfekt: haben + Partizip II (geschlafen) al final." },
      ],
    },
  },
  "de-cu-a2-02": {
    tables: [
      {
        title: "Perfekt con sein: movimiento y cambio",
        headers: ["Verb", "Perfekt", "Warum sein?"],
        rows: [
          ["fahren", "Wir sind nach Potsdam gefahren.", "movimiento A → B"],
          ["laufen", "Ich bin durch den Park gelaufen.", "movimiento"],
          ["aufstehen", "Wann bist du aufgestanden?", "cambio de estado"],
          ["zurückkommen", "Wir sind um 20 Uhr zurückgekommen.", "movimiento"],
          ["bleiben / sein", "Ich bin zu Hause geblieben.", "estados con sein (excepción)"],
        ],
        note: "El Perfekt con sein toca dos familias: verbos de MOVIMIENTO (fahren, laufen, kommen) y verbos de CAMBIO (aufstehen, werden). Y dos huéspedes fijos: bleiben y sein. La prueba: ¿el sujeto se mueve o cambia? → sein. ¿Todo lo demás? → haben.",
      },
    ],
    moreExamples: [
      { it: "Er ist gestern sehr spät angekommen.", es: "Él llegó ayer muy tarde." },
      { it: "Wir sind den ganzen Tag gewandert.", es: "Caminamos (de excursión) todo el día." },
      { it: "Bist du mit dem Zug gefahren?", es: "¿Fuiste en tren?" },
    ],
    drills: {
      transform: [
        { q: "haben oder sein? «Ich ___ durch den Park gelaufen.»", options: ["bin", "habe", "hat"], answer: 0, explain: "laufen = movimiento → sein." },
        { q: "Perfekt: «Wann ___ du ___ (aufstehen)?»", options: ["bist / aufgestanden", "hast / aufgestanden", "bist / aufstanden"], answer: 0, explain: "aufstehen = cambio de estado → sein + aufgestanden." },
      ],
      errors: [
        { q: "Korrigiere: «Wir haben nach Potsdam gefahren.»", options: ["Wir sind nach Potsdam gefahren.", "Wir haben nach Potsdam gefahrt.", "Wir sind nach Potsdam gefahrt haben."], answer: 0, explain: "fahren = movimiento → sein gefahren." },
      ],
    },
  },
  "de-cu-a2-03": {
    tables: [
      {
        title: "Präteritum: war, hatte y los modales",
        headers: ["Verb", "ich", "er/sie", "Beispiel"],
        rows: [
          ["sein", "ich war", "er war", "Ich war bei meinen Großeltern."],
          ["haben", "ich hatte", "er hatte", "Ich hatte einen Hund."],
          ["können", "ich konnte", "er konnte", "Ich konnte mit fünf schwimmen."],
          ["müssen", "ich musste", "er musste", "Ich musste jeden Tag lernen."],
          ["wollen", "ich wollte", "er wollte", "Er wollte mitkommen."],
        ],
        note: "En la conversación, war/hatte y los MODALES prefieren el Präteritum (nunca «ich bin gewesen» — suena a robot): «ich WAR müde», «ich HATTE einen Hund». Los modales sin -e en ich: konnte, musste, wollte (como el español «podía, debía, quería»).",
      },
    ],
    moreExamples: [
      { it: "Als Kind wollte ich Astronautin werden.", es: "De niña quería ser astronauta." },
      { it: "Wir hatten kein Internet.", es: "No teníamos internet." },
      { it: "Konntest du schwimmen?", es: "¿Sabías nadar?" },
    ],
    drills: {
      transform: [
        { q: "Präteritum: «Ich ___ (sein) bei meinen Großeltern.»", options: ["war", "wäre", "warst"], answer: 0, explain: "sein → ich war." },
        { q: "Präteritum: «Ich ___ (können) mit fünf schwimmen.»", options: ["konnte", "könnte", "kann"], answer: 0, explain: "können → konnte (pasado)." },
      ],
      errors: [
        { q: "Korrigiere: «Ich bin bei meinen Großeltern gewesen.» (habla natural)", options: ["Ich war bei meinen Großeltern.", "Ich war bei meinen Großeltern gewesen bin.", "Ich gewesen bin bei Großeltern."], answer: 0, explain: "sein en conversación → Präteritum: war (no Perfekt)." },
      ],
    },
  },
  "de-cu-a2-04": {
    tables: [
      {
        title: "Perfekt o Präteritum · la división del trabajo",
        headers: ["", "Perfekt (haben/sein + PII)", "Präteritum (ich machte…)"],
        rows: [
          ["Registro", "conversación (Süden)", "escritura, narración (Norte)"],
          ["haben/sein", "casi obligatorio", "war/hatte sí, resto raro"],
          ["modales", "raro («ich habe gemusst» ✗)", "natural: konnte, musste, wollte"],
          ["Ejemplo", "Ich habe eine Geschichte erlebt.", "Dann kam die Fahrkontrolle."],
          ["Historia", "perfekt para el diálogo", "präteritum para narrar"],
        ],
        note: "División del trabajo: la charla usa Perfekt («ich habe erlebt»), la historia escrita usa Präteritum («dann KAM die Kontrolle»). Pero war/hatte y los modales son ciudadanos del Präteritum incluso hablando. Y al norte (Hannover) se narra más en Präteritum que al sur.",
      },
    ],
    moreExamples: [
      { it: "Ich habe eine seltsame Geschichte erlebt.", es: "Me ocurrió una historia extraña. (perfekt, diálogo)" },
      { it: "Dann kam die Fahrkontrolle.", es: "Luego llegó el control policial. (präteritum, narración)" },
      { it: "Zum Glück hatte eine Frau ein Ladekabel.", es: "Por suerte una mujer tenía un cable de carga." },
    ],
    drills: {
      transform: [
        { q: "Wähle: «Ich ___ (haben) kein Glück.» (habla)", options: ["hatte", "habe gehabt", "hätte"], answer: 0, explain: "haben en conversación → Präteritum: hatte." },
        { q: "Wähle (narración escrita): «Der Zug ___ (halten) plötzlich.»", options: ["hielt", "hat gehalten", "hält"], answer: 0, explain: "Narración escrita → Präteritum: hielt." },
      ],
      errors: [
        { q: "Korrigiere: «Ich habe zum Glück ein Ladekabel gehabt» — ¿mejor?", options: ["Zum Glück hatte ich ein Ladekabel.", "Zum Glück ich hatte gehabt ein Kabel.", "Zum Glück haben ich Kabel ein."], answer: 0, explain: "haben preferido en Präteritum hablado: hatte." },
      ],
    },
  },
  "de-cu-a2-05": {
    tables: [
      {
        title: "Futur I: werden + Infinitiv",
        headers: ["Person", "werden", "Beispiel"],
        rows: [
          ["ich", "ich werde", "Ich werde zu Hause bleiben."],
          ["du", "du wirst", "Du wirst sehen, es ist schön."],
          ["er/sie", "er wird", "Es wird regnen."],
          ["wir", "werden wir…?", "Werden wir am Main spazieren gehen?"],
          ["✗", "«ich will bleiben» = quiero", "wollen ≠ futuro"],
        ],
        note: "El futuro alemán: werden + infinitivo AL FINAL (otra Satzklammer). Ojo con la trampa del calco: «ich werde» NO es «voy a» español coloquial — el alemán usa el presente para planes ciertos («ich gehe morgen») y Futur I para promesas/predicciones («du wirst sehen»).",
      },
    ],
    moreExamples: [
      { it: "Wir werden am Main spazieren gehen.", es: "Pasearemos a orillas del Main." },
      { it: "Es wird morgen schneien.", es: "Mañana nevará." },
      { it: "Ich werde dich anrufen, versprochen!", es: "Te llamaré, ¡prometido!" },
    ],
    drills: {
      transform: [
        { q: "Futur I: «Ich ___ zu Hause ___ (bleiben).»", options: ["werde / bleiben", "werde / bleibe", "will / bleiben"], answer: 0, explain: "werden + infinitivo al final." },
        { q: "Futur I: «Es ___ morgen ___ (regnen).»", options: ["wird / regnen", "werde / regnen", "wird / regnt"], answer: 0, explain: "es wird + regnen (predicción)." },
      ],
      errors: [
        { q: "Korrigiere: «Ich werde zu Hause bleibe.»", options: ["Ich werde zu Hause bleiben.", "Ich werde zu Hause bleibst.", "Ich werde zu Hause geblieben."], answer: 0, explain: "werden + INFINITIVO (bleiben), no forma conjugada." },
      ],
    },
  },
  "de-cu-a2-06": {
    tables: [
      {
        title: "Wohnungsanzeigen decodificadas",
        headers: ["Kürzel", "Bedeutung", "Español"],
        rows: [
          ["2-Zi-Whg", "2-Zimmer-Wohnung", "piso de 2 ambientes"],
          ["1. OG", "1. Obergeschoss", "primer piso (alto)"],
          ["EBK", "Einbauküche", "cocina equipada"],
          ["kalt/miete", "Kaltmiete (sin calefacción/luz)", "alquiler frío"],
          ["NK", "Nebenkosten", "gastos adicionales"],
          ["Provisionsfrei", "sin comisión inmobiliaria", "sin comisión"],
        ],
        note: "El anuncio alemán es telegrama: «3-Zi-Whg, 65 m², EBK, 1. OG, 650 € KM, provisionsfrei» = 3 ambientes, 65 m², cocina equipada, primer alto, 650 € fríos, sin comisión. La Kaltmiete (fría) NO incluye Nebenkosten: el total real suma 100-200 € más.",
      },
    ],
    moreExamples: [
      { it: "Suche 2-Zimmer-Wohnung mit Balkon.", es: "Busco piso de 2 ambientes con balcón." },
      { it: "Die Wohnung ist ab 1. März frei.", es: "El piso está libre desde el 1 de marzo." },
      { it: "Kaution: drei Kaltmieten.", es: "Fianza: tres alquileres fríos." },
    ],
    drills: {
      transform: [
        { q: "Dekodiere: «EBK» =", options: ["Einbauküche (cocina equipada)", "Erdgeschoss mit Küche", "Einbettzimmer klein"], answer: 0, explain: "EBK = Einbauküche." },
        { q: "Dekodiere: «650 € KM» — ¿qué pagas de base?", options: ["650 € Kaltmiete (más Nebenkosten)", "650 € todo incluido", "650 € de fianza"], answer: 0, explain: "KM = Kaltmiete: sin gastos (NK) encima." },
      ],
      errors: [
        { q: "Korrigiere la lectura: «1. OG» es…", options: ["el primer piso alto", "la planta baja", "el sótano"], answer: 0, explain: "Erdgeschoss = baja; 1. OG = un piso arriba." },
      ],
    },
  },
  "de-cu-a2-07": {
    tables: [
      {
        title: "Beim Arzt: dolor y receta",
        headers: ["Struktur", "Beispiel", "Español"],
        rows: [
          ["Ich habe Schmerzen + en", "Ich habe Schmerzen im Rücken.", "me duelen la espalda"],
          ["Mir tut/weh … weh", "Mir tut der Kopf weh.", "me duele la cabeza"],
          ["Mir tun … weh (pl.)", "Mir tun die Augen weh.", "me duelen los ojos"],
          ["seit + dativo", "Seit zwei Tagen.", "desde hace dos días"],
          ["sollen (receta)", "Sie sollen viel Wasser trinken.", "debe beber mucha agua"],
        ],
        note: "El dolor alemán se reparte: «Ich habe Schmerzen» (tengo dolores) o «Mir tut der Kopf weh» (a mí me duele la cabeza — dativo mir + tut…weh). Plural: «mir TUN die Augen weh». Y el médico receta con sollen: «Sie SOLLEN sich ausruhen» = debe usted descansar.",
      },
    ],
    moreExamples: [
      { it: "Mir tut der Hals weh und ich habe Fieber.", es: "Me duele la garganta y tengo fiebre." },
      { it: "Sie sollen dreimal täglich die Tabletten nehmen.", es: "Debe tomar las pastillas tres veces al día." },
      { it: "Ich kann nicht schlafen.", es: "No puedo dormir." },
    ],
    drills: {
      transform: [
        { q: "Singular oder Plural? «Mir ___ der Kopf weh.»", options: ["tut", "tun", "tut weh tun"], answer: 0, explain: "der Kopf singular → mir TUT weh." },
        { q: "Rezept: «Sie ___ (sollen) viel trinken.»", options: ["sollen", "soll", "sollst"], answer: 0, explain: "Sie formal → sollen." },
      ],
      errors: [
        { q: "Korrigiere: «Mir haben die Augen weh getan.» (simple)", options: ["Mir tun die Augen weh.", "Mir tut die Augen weh.", "Die Augen weh tun mir haben."], answer: 0, explain: "Plural: mir TUN die Augen weh." },
      ],
    },
  },
  "de-cu-a2-08": {
    tables: [
      {
        title: "Imperativ: du, ihr, Sie + Mengen",
        headers: ["Ziel", "Regel", "Beispiel"],
        rows: [
          ["du", "stamm (sin -st)", "Nimm zwei Eier! · Gib den Zucker dazu!"],
          ["ihr", "stamm + t", "Nehmt den Teig! · Rührt alles!"],
          ["Sie", "stamm + en + Sie", "Nehmen Sie 200 Gramm Mehl!"],
          ["negativ", "nicht + imperativ", "Backe den Kuchen nicht zu lange!"],
          ["Mengen", "Zahl + Einheit + von", "ein Pfund Mehl · 200 g Zucker"],
        ],
        note: "El imperativo du pierde la -st y (con verbos fuertes) suele recuperar la vocal: du nimmst → NIMM! Du hilfst → HILF! El Sie-imperativo invierte: «Nehmen SIE…». Las recetas alemanas ordenan en imperativo Sie incluso escritas: «Geben Sie die Eier dazu».",
      },
    ],
    moreExamples: [
      { it: "Verrühren Sie alles gut.", es: "Mezclen todo bien." },
      { it: "Gib einen Teelöffel Salz dazu.", es: "Añade una cucharadita de sal." },
      { it: "Backe den Kuchen 45 Minuten.", es: "Hornea el pastel 45 minutos." },
    ],
    drills: {
      transform: [
        { q: "Imperativ (du): du nimmst → ___ zwei Eier!", options: ["Nimm", "Nimmst", "Nehme"], answer: 0, explain: "du-imperativo = raíz sin -st: Nimm!" },
        { q: "Imperativ (Sie): ___ Sie 200 Gramm Mehl!", options: ["Nehmen", "Nehmst", "Nimm"], answer: 0, explain: "Sie-imperativo: infinitivo + Sie." },
      ],
      errors: [
        { q: "Korrigiere: «Nimmst zwei Eier!» (a un amigo)", options: ["Nimm zwei Eier!", "Nehmen Sie zwei Eier!", "Nimmst du zwei Eier, ja?"], answer: 0, explain: "El du-imperativo tira la terminación: Nimm!" },
      ],
    },
  },
  "de-cu-a2-09": {
    tables: [
      {
        title: "Perfekt profesional + weil (verbo al final)",
        headers: ["Struktur", "Beispiel", "Español"],
        rows: [
          ["weil + verbo final", "…, weil ich die Abläufe verbessert habe.", "porque he mejorado los procesos"],
          ["Perfekt en weil", "haben/sein + PII al final", "—"],
          ["CV: Zahlen", "Ich habe ein Team geleitet.", "he liderado un equipo"],
          ["verantwortlich für + akk.", "Ich war verantwortlich für den Vertrieb.", "era responsable de ventas"],
          ["✗", "«weil ich habe… verbessert»", "verbo conjugado SIEMPRE último"],
        ],
        note: "La joya alemana: weil manda el verbo conjugado AL FINAL — «…, weil ich die Abläufe verbessert HABE» (porque los procesos he mejorado). En la entrevista: logros en Perfekt, responsabilidades con «verantwortlich für». El weil con verbo final es la prueba de fuego A2→B1.",
      },
    ],
    moreExamples: [
      { it: "Ich habe drei Jahre in Madrid gearbeitet.", es: "Trabajé tres años en Madrid." },
      { it: "…, weil ich mich für Datenanalyse interessiere.", es: "…porque me intereso por el análisis de datos." },
      { it: "Ich habe die Kundenzufriedenheit erhöht.", es: "He aumentado la satisfacción del cliente." },
    ],
    drills: {
      transform: [
        { q: "Verbe an die richtige Stelle: «…, weil ich die Prozesse ___ (verbessern + habe).»", options: ["verbessert habe", "habe verbessert", "verbessere habe"], answer: 0, explain: "weil: participio + haben al final." },
        { q: "Beruf: «Ich war ___ ___ den Vertrieb.»", options: ["verantwortlich für", "verantwortlich auf", "verantwortlich von"], answer: 0, explain: "verantwortlich für + acusativo." },
      ],
      errors: [
        { q: "Korrigiere: «…, weil ich habe die Abläufe verbessert.»", options: ["…, weil ich die Abläufe verbessert habe.", "…, weil ich die Abläufe habe verbessert besser.", "…, weil verbessert ich die Abläufe habe."], answer: 0, explain: "En weil, el verbo conjugado cierra: …verbessert habe." },
      ],
    },
  },
  "de-cu-a2-10": {
    tables: [
      {
        title: "Futur I para el tiempo",
        headers: ["Muster", "Beispiel", "Español"],
        rows: [
          ["es wird + adj", "Es wird kälter.", "se volverará más frío"],
          ["es wird + verbo", "Es wird schneien.", "nevará"],
          ["frage", "Wird es morgen regnen?", "¿lloverá mañana?"],
          ["sicherheit", "Es wird sicher schön.", "seguro estará bonito"],
          ["vermutung", "Die Wolken — es wird wohl regnen.", "probablemente llueva"],
        ],
        note: "La predicción meteorológica vive en Futur I: «es WIRD schneien» (nevará). Con «wohl» se convierte en suposición: «es wird wohl regnen» = probablemente llueva. El presente también sirve para lo casi seguro: «morgen regnet es» — Futur I añade el matiz de pronóstico oficial.",
      },
    ],
    moreExamples: [
      { it: "Morgen wird es sonnig.", es: "Mañana estará soleado." },
      { it: "Am Wochenende wird es regnerisch.", es: "El fin de semana estará lluvioso." },
      { it: "Es wird bald winterlich.", es: "Pronto será invernal." },
    ],
    drills: {
      transform: [
        { q: "Futur I: «Es ___ morgen ___ (schneien).»", options: ["wird / schneien", "werde / schneit", "wird / schneit"], answer: 0, explain: "es wird + infinitivo." },
        { q: "Vermutung: «Es wird ___ regnen.» (probablemente)", options: ["wohl", "schon", "noch"], answer: 0, explain: "wohl convierte la predicción en suposición." },
      ],
      errors: [
        { q: "Korrigiere: «Es wird morgen schneit.»", options: ["Es wird morgen schneien.", "Es wird morgen schneite.", "Es wird morgen geschneit."], answer: 0, explain: "werden + INFINITIVO (schneien)." },
      ],
    },
  },
  "de-cu-a2-11": {
    tables: [
      {
        title: "Konjunktiv II básico + Dativ",
        headers: ["Funktion", "Formel", "Beispiel"],
        rows: [
          ["pedir cortés", "könnten Sie…?", "Könnten Sie mir helfen?"],
          ["desear", "hätte gern + akk.", "Ich hätte gern ein Wasser."],
          ["preguntar", "hätten Sie…?", "Hätten Sie einen Moment Zeit?"],
          ["wäre", "Es wäre schön, wenn…", "Es wäre schön, wenn du kommst."],
          ["Dativ-Objekt", "helfen + dativo", "Könnten Sie MIR helfen?"],
        ],
        note: "El Konjunktiv II es la cortesía alemana: könnten SIE (¿podría usted?), hätte GERN (quisiera). El verbo helfen rige DATIVO: «können Sie MIR helfen» (¿puede ayudarME?) — el dativo marca a quién se ayuda. «Ich hätte gern» es el «quisiera» de toda panadería.",
      },
    ],
    moreExamples: [
      { it: "Könnten Sie das bitte wiederholen?", es: "¿Podría repetir eso, por favor?" },
      { it: "Ich hätte gern zwei Brötchen.", es: "Quisiera dos panecillos." },
      { it: "Wärst du so nett?", es: "¿Serías tan amable?" },
    ],
    drills: {
      transform: [
        { q: "Höflich: «Können Sie mir helfen?» (más cortés)", options: ["Könnten Sie mir helfen?", "Können Sie mir helfen, jetzt?", "Sie helfen mir, bitte!"], answer: 0, explain: "könnten = Konjunktiv II de können." },
        { q: "Bestellen: «Ich will ein Wasser.» → cortés:", options: ["Ich hätte gern ein Wasser.", "Ich will gern ein Wasser.", "Gib mir ein Wasser, bitte schnell."], answer: 0, explain: "hätte gern = quisiera." },
      ],
      errors: [
        { q: "Korrigiere: «Könnten Sie mich helfen?» (helfen + caso)", options: ["Könnten Sie mir helfen?", "Könnten Sie mich und helfen?", "Könnten Sie helfen mich?"], answer: 0, explain: "helfen rige dativo: mir (no mich)." },
      ],
    },
  },
  "de-cu-a2-12": {
    tables: [
      {
        title: "Erzählen + Superlativ",
        headers: ["Konnektor", "Español", "Funktion"],
        rows: [
          ["zuerst", "primero", "abre"],
          ["danach / dann", "después / luego", "encadena"],
          ["schließlich", "finalmente", "cierra"],
          ["am Ende", "al final", "conclusión"],
          ["Superlativ", "am + -sten", "das schönste Erlebnis · am schönsten"],
        ],
        note: "El superlativo alemán tiene dos trajes: con sustantivo «das SCHÖNSTE Erlebnis» (el más bello recuerdo) y adverbial «am SCHÖNSTEN» (lo más bello). La narración encadena zuerst → dann → danach → schließlich — mismo esqueleto del día berlinés de A1, ahora con pasado.",
      },
    ],
    moreExamples: [
      { it: "Zuerst sind wir nach Bremen gefahren.", es: "Primero fuimos a Bremen." },
      { it: "Schließlich haben wir den Sonnenuntergang gesehen.", es: "Finalmente vimos el atardecer." },
      { it: "Das war das schönste Wochenende des Jahres.", es: "Fue el fin de semana más bello del año." },
    ],
    drills: {
      transform: [
        { q: "Superlativ: «Das war ___ ___ Erlebnis.» (schön)", options: ["das schönste", "das schönerste", "am schönste"], answer: 0, explain: "Con sustantivo: das schönste." },
        { q: "Adverbial: «Ich habe mich ___ ___ gefreut.» (am meisten)", options: ["am meisten", "das meiste", "am meister"], answer: 0, explain: "Adverbial: am meisten gefreut." },
      ],
      errors: [
        { q: "Korrigiere: «Es war das schönste Erlebnis am schönsten.»", options: ["Es war das schönste Erlebnis.", "Es war am schönsten Erlebnis das.", "Es war das schönste am Erlebnis."], answer: 0, explain: "Con sustantivo: das schönste; «am schönsten» es solo adverbial." },
      ],
    },
  },
};
