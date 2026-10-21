import type { CbGrammarPack } from "../cb-rules";

/* ═══ DE C2 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════ */

export const DE_CB_RULES_C2: Record<string, CbGrammarPack> = {
  "de-cu-c2-01": {
    tables: [
      {
        title: "Inversion, Ellipse, Chiasmus",
        headers: ["Stilmittel", "Muster", "Beispiel"],
        rows: [
          ["Inversion", "adverbio/primer elemento → verbo antes del sujeto", "Nie war die Lage klarer."],
          ["Ellipse", "cortar lo repetido", "Die einen kamen; die anderen nicht."],
          ["Chiasmus", "AB–BA", "Man lebt, um zu schreiben; man schreibt, um zu leben."],
          ["Parallelismus", "misma forma ×2", "Er kam, er sah, er schwieg."],
          ["Klimax + Ellipse", "escalera sin verbo", "Erst Zweifel, dann Wut, dann Schweigen."],
        ],
        note: "El ensayista alemán C2 afila la frase: inversión con negación al frente («NIE WAR die Lage klarer» — nunca estuvo la situación más clara), elipsis («die anderen NICHT» — el verbo ya cayó) y quiasmo (vivir para escribir, escribir para vivir). La elipsis sustantiva («erst Zweifel, dann Wut…») pinta escenas enteras sin verbo.",
      },
    ],
    moreExamples: [
      { it: "Nie hat er lauter geschwiegen.", es: "Nunca ha callado más ruidosamente. (paradoja + inversión)" },
      { it: "Die einen lesen; die anderen schreiben.", es: "Unos leen; otros escriben. (elipsis)" },
      { it: "Erst Zweifel, dann Wut, dann Schweigen.", es: "Primero duda, luego rabia, luego silencio. (elipsis + clímax)" },
    ],
    drills: {
      transform: [
        { q: "Invertiere: «Die Lage war nie klarer.»", options: ["Nie war die Lage klarer.", "Nie die Lage war klarer.", "War nie die Lage klarer."], answer: 0, explain: "Nie pos. 1 → verbo pos. 2: war DIE LAGE." },
        { q: "Welches Stilmittel? «Man lebt, um zu schreiben; man schreibt, um zu leben.»", options: ["ein Chiasmus", "eine Ellipse", "eine Anapher"], answer: 0, explain: "AB–BA espejado: quiasmo." },
      ],
      errors: [
        { q: "Korrigiere: «Nie die Lage war klarer.»", options: ["Nie war die Lage klarer.", "Nie war klarer die Lage war.", "Die Lage nie war klarer."], answer: 0, explain: "La inversión manda el verbo antes del sujeto." },
      ],
    },
  },
  "de-cu-c2-02": {
    tables: [
      {
        title: "Deutsche Metrik: Jambus, Trochäus, Kadenz",
        headers: ["Begriff", "Definition", "Beispiel"],
        rows: [
          ["Jambus", "sílaba átona + tónica (x –)", "Ein Wolf ist ja kein Schaf."],
          ["Trochäus", "tónica + átona (– x)", "Lobe den Herren (himno)"],
          ["Kadenz", "final del verso", "männlich (–) / weiblich (x)"],
          ["Reim", "pausa fonética", "aabb (paarweise) · abab (kreuzend)"],
          ["Enjambement", "verso sin pausa sintáctica", "el sentido salta al siguiente"],
        ],
        note: "La métrica alemana cuenta ALTURAS: Jambus (x–: da-DUM, el latido del corazón), Trochäus (–x: DUM-da, el ritmo del himno «Ein feste Burg»). La Kadenz masculina corta seco (–), la femenina se desliza (x). El Enjambement salta la pausa del verso: el sentido escapa — el recurso de Goethe para sorprender.",
      },
    ],
    moreExamples: [
      { it: "Ein Wolf | ist ja | kein Schaf.", es: "Un lobo no es, desde luego, una oveja. (jambos)" },
      { it: "Wer reitet so spät durch Nacht und Wind?", es: "¿Quién cabalga tan tarde por noche y viento? (Goethe, Jambus)" },
      { it: "Ich weiß nicht, was soll es bedeuten…", es: "No sé qué deberá significar… (Loreley, enjambements)" },
    ],
    drills: {
      transform: [
        { q: "Scansion: «da-DUM» = welcher Fuß?", options: ["Jambus", "Trochäus", "Daktylus"], answer: 0, explain: "Átona + tónica = Jambus (x –)." },
        { q: "Kadenz: verso acabado en sílaba tónica =", options: ["männlich", "weiblich", "reimend"], answer: 0, explain: "Kadenz masculina: corte seco en tónica." },
      ],
      errors: [
        { q: "Korrigiere: «Der Trochäus ist x– (átona-tónica).»", options: ["Der Trochäus ist –x (tónica-átona).", "Der Trochäus ist x–x.", "Der Trochäus zählt keine Silben."], answer: 0, explain: "Trochäus = DUM-da (–x); el Jambus es x–." },
      ],
    },
  },
  "de-cu-c2-03": {
    tables: [
      {
        title: "La gramática de la ironía",
        headers: ["Werkzeug", "Signal", "Beispiel"],
        rows: [
          ["Modalpartikel doch", "¡si es obvio! (irónico)", "Das ist ja eine Überraschung."],
          ["Konjunktiv II", "distancia burlona", "Das wäre ja zu schön."],
          ["Litotes", "negar lo contrario", "nicht übel (= notable)"],
          ["Untertreibung", "decir menos", "ganz leicht verstört (= devastado)"],
          ["Euphemismus", "decir fino", "kreativ (= caótico)"],
        ],
        note: "La ironía alemana se construye con gramática: «das WÄRE ja zu schön» (eso SERÍA demasiado bello — no lo es), la partícula ja marca complicidad, y la Litotes niega el contrario: «nicht übel» = nada mal = ¡bravo! El subtítulo lo pone la entonación plana — la gramática solo prepara la trampa.",
      },
    ],
    moreExamples: [
      { it: "Das wäre ja zu schön, um wahr zu sein.", es: "Eso sería demasiado bello para ser cierto. (no lo es)" },
      { it: "Nicht übel, Herr Kollege!", es: "Nada mal, ¡colega! (= impresionante)" },
      { it: "Du bist heute mal wieder kreativ.", es: "Hoy estás de nuevo «creativo». (= desastre)" },
    ],
    drills: {
      transform: [
        { q: "Litotes: «Das war nicht schlecht.» heißt:", options: ["Es war gut.", "Es war schlecht.", "Es war neutral."], answer: 0, explain: "Negar el contrario = elogio atenuado." },
        { q: "Welches Signal? «Das WÄRE ja zu schön.»", options: ["Konjunktiv II + ja (ironía)", "Präteritum (hecho)", "Imperativ"], answer: 0, explain: "KII + ja: distancia irónica compartida." },
      ],
      errors: [
        { q: "Entschlüssele: «Ganz leicht verstört.» nach dem Desaster =", options: ["Devastado (Untertreibung)", "Levemente molesto (literal)", "Feliz"], answer: 0, explain: "Decir menos de la realidad = ironía understatement." },
      ],
    },
  },
  "de-cu-c2-04": {
    tables: [
      {
        title: "Erlebte Rede y monólogo interior",
        headers: ["Element", "Direct", "Erlebte Rede"],
        rows: [
          ["Pronomen", "ich", "er/sie"],
          ["Tempus", "Präsens", "Präteritum/Konjunktiv"],
          ["Futur", "werde gehen", "würde gehen"],
          ["Frage", "Sollte ich bleiben?", "Sollte er bleiben?"],
          ["Modus", "—", "Indikativ o KI, sin marco («sagte er»)"],
        ],
        note: "La Erlebte Rede (discurso vivido) es la voz del personaje con la gramática del narrador: «Sollte er bleiben?» — la pregunta del héroe, sin «dachte er», con la 3ª persona. El monólogo interior lleva más lejos: saltos, elipsis, asociaciones — el flujo puro. El alemán lo afinó en Kafka y Schnitzler.",
      },
    ],
    moreExamples: [
      { it: "War das die richtige Entscheidung gewesen?", es: "¿Había sido esa la decisión correcta? (sin marco: voz interior)" },
      { it: "Er würde es ihr sagen. Morgen. Bestimmt.", es: "Se lo diría. Mañana. Seguro. (monólogo)" },
      { it: "Wozu noch warten?", es: "¿Para qué seguir esperando? (pregunta interior)" },
    ],
    drills: {
      transform: [
        { q: "Erlebte Rede: «Ich werde es tun», dachte er. →", options: ["Er würde es tun.", "Er wird es tun gedacht.", "Er tun würde es."], answer: 0, explain: "werde → würde; ich → er." },
        { q: "Erlebte Rede: «Soll ich bleiben?» →", options: ["Sollte er bleiben?", "Soll er bleiben?", "Bleibt er sollte?"], answer: 0, explain: "La pregunta interior conserva la forma, cambia a 3ª persona." },
      ],
      errors: [
        { q: "Korrigiere: «Erlebte Rede: Er wird es tun, dachte er nichts.»", options: ["Er würde es tun. (sin marco)", "Er wird es tun dachte er wird.", "Erlebte er es tun Rede."], answer: 0, explain: "La Erlebte Rede no necesita «dachte er»: el modo la señala." },
      ],
    },
  },
  "de-cu-c2-05": {
    tables: [
      {
        title: "Konjunktiv diplomático",
        headers: ["Formel", "Wirkung", "Beispiel"],
        rows: [
          ["dürfte + inf.", "probablemente (prudencial)", "Das dürfte schwierig werden."],
          ["möchte", "quisiera (suave)", "Wir möchten anmerken, dass…"],
          ["wäre erfreut", "agradecería", "Wir wären erfreut, wenn…"],
          ["Litotes", "no imposible", "nicht ausgeschlossen, dass…"],
          ["Perífrasis", "en Betracht ziehen", "Wir ziehen in Betracht, ob…"],
        ],
        note: "El diplomático alemán usa dürfte para suposiciones con distinción: «das DÜRFTE schwierig werden» (probablemente se vuelva difícil — dicho con guantes). «Nicht ausgeschlossen, dass…» (no excluido que) = probablemente sí. Las perífrasis verbales (in Betracht ziehen) cubren el desacuerdo con terciopelo.",
      },
    ],
    moreExamples: [
      { it: "Das dürfte kein Zufall sein.", es: "Eso probablemente no sea casualidad. (dürfte)" },
      { it: "Eine Antwort wäre uns willkommen.", es: "Una respuesta nos sería bienvenida. (= la esperamos)" },
      { it: "Wir möchten anmerken, dass die Frist knapp ist.", es: "Quisiéramos notar que el plazo es ajustado." },
    ],
    drills: {
      transform: [
        { q: "Vorsicht: «Das ___ schwierig werden.» (probablemente)", options: ["dürfte", "muss", "soll"], answer: 0, explain: "dürfte = suposición prudencial elegante." },
        { q: "Litotes: «Es ist nicht ___, dass er zustimmt.» (probable)", options: ["ausgeschlossen", "unmöglich sicher", "geschlossen"], answer: 0, explain: "nicht ausgeschlossen = no descartado." },
      ],
      errors: [
        { q: "Korrigiere: «Das muss schwierig werden, fürchten wir sehr!» (tono diplomático)", options: ["Das dürfte schwierig werden.", "Das muss schwer werden müssen!", "Das wird schwierig, ganz sicher!"], answer: 0, explain: "dürfte suaviza; muss afirma — el diplomático prefiere dürfte." },
      ],
    },
  },
  "de-cu-c2-06": {
    tables: [
      {
        title: "Präsens cinematográfico",
        headers: ["Element", "Regel", "Beispiel"],
        rows: [
          ["Präsens", "todo pasa AHORA", "Er steht auf. Es klingelt."],
          ["Didaskalie", "sin artículo, telegrama", "Regen. Nacht. Bahnhof."],
          ["Kurzsätze", "ritmo de corte", "Er zögert. Dann geht er."],
          ["Dialog-Strich", "— rede — widerrede", "— Kommst du? — Später."],
          ["Satzklammer", "marco abre y cierra", "Er hebt langsam DEN KOPF."],
        ],
        note: "El guion alemán es presente de cámara: «Er steht AUF. Es KLINGELT.» — verbos cortos, marco oracional. Las didascalias son telegramas: «Regen. Nacht. Bahnhof.» — sustantivos sin artículo pintan el plano. El diálogo con raya (—) se corta sin «dijo él»: el corte ES la información.",
      },
    ],
    moreExamples: [
      { it: "Er zögert. Dann geht er.", es: "Duda. Luego se va." },
      { it: "INT. BAHNHOF — NACHT. Regen.", es: "INT. ESTACIÓN — NOCHE. Lluvia." },
      { it: "— Kommst du? — Später.", es: "— ¿Vienes? — Luego. (ralla de diálogo)" },
    ],
    drills: {
      transform: [
        { q: "Didaskalie: «Llovía de noche en la estación» (guion) →", options: ["Regen. Nacht. Bahnhof.", "Es regelte nachts am Bahnhof lange.", "Regen war nacht Bahnhof es."], answer: 0, explain: "Telegrama: sustantivos sueltos, presente." },
        { q: "Tempus im Drehbuch: «Er ___ (aufstehen)» →", options: ["steht auf", "stand auf", "ist aufgestanden"], answer: 0, explain: "El guion vive en presente: steht auf." },
      ],
      errors: [
        { q: "Korrigiere: «Er stand auf. Es klangelte.» (guion moderno)", options: ["Er steht auf. Es klingelt.", "Er aufsteht. Es klingelte.", "Er steht aufgestanden. Klangelt es."], answer: 0, explain: "Präsens cinematográfico en ambas acciones." },
      ],
    },
  },
  "de-cu-c2-07": {
    tables: [
      {
        title: "Futur I como promesa política",
        headers: ["Figur", "Muster", "Beispiel"],
        rows: [
          ["Futur der Zusage", "wir werden + sust.", "Wir werden liefern."],
          ["Anapher", "×2+", "Deutschland wird… Deutschland wird…"],
          ["Dreiklang", "tres miembros", "schneller, digitaler, gerechter"],
          ["rhetorische Frage", "sin respuesta", "Wie lange noch?"],
          ["Werbeslogan-Politik", "el futuro como marca", "Der Zukunft versprechen."],
        ],
        note: "«Wir WERDEN liefern» — el futuro alemán promete entrega (y el político reparte futuro en paquetes). La anáfora sobre werden («Deutschland wird… Deutschland wird…») martilla la promesa; el Dreiklang de adjetivos (más rápido, más digital, más justo) pone la escalera. La pregunta retórica «Wie lange NOCH?» enciende al público sin pedir respuesta.",
      },
    ],
    moreExamples: [
      { it: "Wir werden liefern — das ist unser Versprechen.", es: "Cumpliremos — esa es nuestra promesa." },
      { it: "Deutschland wird moderner. Deutschland wird gerechter.", es: "Alemania será más moderna. Alemania será más justa. (anáfora)" },
      { it: "Wie lange noch wollen wir warten?", es: "¿Cuánto tiempo más queremos esperar?" },
    ],
    drills: {
      transform: [
        { q: "Anapher: «Deutschland ___ schneller. Deutschland ___ digitaler.»", options: ["wird / wird", "ist / wird", "wird / ist"], answer: 0, explain: "Anáfora con futuro: wird… wird…" },
        { q: "Dreiklang: «schneller, ___, gerechter»", options: ["digitaler", "digital", "digitalerweise"], answer: 0, explain: "Tres comparativos paralelos: digitaler." },
      ],
      errors: [
        { q: "Korrigiere: «Wie lange noch wir wollen warten?»", options: ["Wie lange noch wollen wir warten?", "Wie lange wir wollen noch warten?", "Wie lange noch warten wir wollen?"], answer: 0, explain: "Pregunta retórica con inversión: wollen WIR warten." },
      ],
    },
  },
  "de-cu-c2-08": {
    tables: [
      {
        title: "Falsos amigos DE–ES y la Satzklammer",
        headers: ["Español", "Trampa", "Richtig"],
        rows: [
          ["actualmente", "aktuell (= actual)", "heute/heutzutage (hoy)"],
          ["costar", "kosten ✓ pero…", "dauern (= tomar tiempo)"],
          ["quedarse", "bleiben", "quedarse también: bleiben ✓ (¡contexto!)"],
          ["eventuell", "posiblemente (NO «eventualmente»)", "gegebenenfalls"],
          ["Satzklammer", "calco de orden español", "verbo final en subordinada"],
        ],
        note: "Los falsos amigos muerden: «eventuell» = POSIBLEMENTE (no «eventualmente»: gegebenenfalls); «aktuell» = actual (no «actualmente»: heute). Y el calco mayor es sintáctico: el español del traductor deja el verbo en posición 2 dentro de la subordinada — la Satzklammer exige verbo AL FINAL: «…, weil ich müde BIN».",
      },
    ],
    moreExamples: [
      { it: "Eventuell fahren wir morgen. (= tal vez)", es: "POSIBLEMENTE vayamos mañana. (no: eventualmente)" },
      { it: "Die Reparatur dauert zwei Stunden.", es: "La reparación TOMA dos horas. (dauern ≠ costar)" },
      { it: "…, weil der Zug Verspätung hat.", es: "…porque el tren TIENE retraso. (verbo final)" },
    ],
    drills: {
      transform: [
        { q: "Traduzca: «posiblemente vaya» →", options: ["Eventuell gehe ich.", "Eventualmente gehe ich.", "Aktuell gehe ich."], answer: 0, explain: "eventuell = posiblemente (probabilidad)." },
        { q: "¿Verbo final? «…, weil ich müde ___ (sein).»", options: ["bin", "ist müde", "sein"], answer: 0, explain: "Satzklammer: …müde BIN al final." },
      ],
      errors: [
        { q: "Korrigiere: «…, weil ich bin müde.»", options: ["…, weil ich müde bin.", "…, weil ich müde sein bin.", "…, weil bin ich müde."], answer: 0, explain: "El calco español mata la Satzklammer: verbo conjugado final." },
      ],
    },
  },
  "de-cu-c2-09": {
    tables: [
      {
        title: "Nominalstil vs. Verbalstil: desnominalizar",
        headers: ["Nominalstil", "Verbalstil", "Gewinn"],
        rows: [
          ["zur Durchführung bringen", "durchführen", "verbo"],
          ["in Anwendung kommen", "angewendet werden", "pasiva"],
          ["eine Prüfung vornehmen", "prüfen", "verbo"],
          ["Kostenersparnis bewirken", "Kosten sparen", "verbo + objeto"],
          ["Verdichtung", "comprimir ideas", "el ensayo C2 respira en verbos"],
        ],
        note: "El estilo C2 desnominaliza: «zur Durchführung BRINGEN» es un verbo disfrazado de sustantivo — la versión limpia es einfach durchführen. La prueba del editor: cada -ung, -keit, -heit ¿puede ser verbo? Si sí, el Verbstil casi siempre gana. Nominalstil para contratos; Verbstil para pensar.",
      },
    ],
    moreExamples: [
      { it: "Wir prüfen die Unterlagen. (no: nehmen eine Prüfung vor)", es: "Revisamos los documentos." },
      { it: "Das wird angewendet. (no: kommt in Anwendung)", es: "Eso es aplicado." },
      { it: "So sparen wir Kosten. (no: bewirken eine Kostenersparnis)", es: "Así ahorramos costos." },
    ],
    drills: {
      transform: [
        { q: "Verbalisiere: «eine Prüfung vornehmen» →", options: ["prüfen", "vorgeprüft werden", "Prüfung machen"], answer: 0, explain: "vornehmen + sustantivo = el verbo simple." },
        { q: "Verbalisiere: «zur Anwendung kommen» →", options: ["angewendet werden", "Anwendung machen", "sich anwenden kommen"], answer: 0, explain: "kommt zur Anwendung = wird angewendet." },
      ],
      errors: [
        { q: "Korrigiere (Stil): «Wir bringen das Verfahren zur Durchführung.»", options: ["Wir führen das Verfahren durch.", "Wir durchbringen das Verfahren.", "Das Verfahren bringt Durchführung uns."], answer: 0, explain: "zur Durchführung bringen = durchführen (verbo separable)." },
      ],
    },
  },
  "de-cu-c2-10": {
    tables: [
      {
        title: "Konjunktiv I del archivo",
        headers: ["Quelle", "Konjunktiv I", "Deutung"],
        rows: [
          ["«Ich war dabei», sagt er.", "Er sagt, er sei dabei gewesen.", "cita neutra"],
          ["«Ich habe nichts gewusst.»", "Er behauptet, er habe nichts gewusst.", "behauptet = distancia"],
          ["KI = Indikativ?", "→ Ersatzform KII", "er käme, nicht er komme (ich)"],
          ["Zweifel marcar", "laut, angeblich, angeblich", "derange de «angeblich» = supuestamente"],
          ["Handschrift des Archivs", "KI + angeblich", "el protocolo del escéptico"],
        ],
        note: "El Konjunktiv I es la firma del archivo: «er SAGT, er SEI dabei gewesen» — el documento habla sin que el historiador lo firme. Para la duda, el adjetivo «ANGEBLICH» (supuestamente) marca la distancia del archivero: «er habe, ANGEBLICH, nichts gewusst». Citar con KI + angeblich = citar sin creer.",
      },
    ],
    moreExamples: [
      { it: "Er sagt, er sei krank gewesen.", es: "Él dice que habría estado enfermo. (KI)" },
      { it: "Sie behauptet, sie habe nichts gewusst.", es: "Ella sostiene que no habría sabido nada." },
      { it: "Der Zeuge habe, so die Akte, geschwiegen.", es: "El testigo habría, según el expediente, callado." },
    ],
    drills: {
      transform: [
        { q: "Konjunktiv I: «Er sagt, er ___ (haben) nichts gewusst.»", options: ["habe", "hat", "hätte gehabt"], answer: 0, explain: "KI de haben: habe (cita indirecta)." },
        { q: "Zweifel-Wort: «Er habe ___ nichts gewusst.» (supuestamente)", options: ["angeblich", "wirklich", "sicherlich"], answer: 0, explain: "angeblich = supuestamente (distancia del cronista)." },
      ],
      errors: [
        { q: "Korrigiere: «Er sagt, er ist krank.» (informe/archivo)", options: ["Er sagt, er sei krank.", "Er sagt, er wäre krank gewesen jetzt.", "Er sei sagt krank er."], answer: 0, explain: "El informe cita en Konjunktiv I: sei." },
      ],
    },
  },
  "de-cu-c2-11": {
    tables: [
      {
        title: "Komposita y Wortverschmelzungen",
        headers: ["Verfahren", "Mechanik", "Beispiel"],
        rows: [
          ["Determinativkompositum", "A determina B", "die Zeit + der Schrift = die Zeitschrift"],
          ["Kontamination", "dos palabras fundidas", "Kurlaub (Kur + Urlaub)"],
          ["Doppeldeutigkeit", "doble lectura", "Zeitgeist — con y sin ironía"],
          ["Kopfkompositum", "el género manda la última palabra", "die Zeitschrift (f. porque Schrift)"],
        ],
        note: "El alemán fabrica palabras como Lego: Zeit+Schrift = Zeitschrift (revista = tiempo+escritura). La Kontamination funde sin costura: Kurlaub (cura+vacaciones). Y el género lo decide SIEMPRE la última palabra: die ZeitsCHRIFT (femenina). El humor vive en la ambigüedad del compuesto: la «Wortverdrehung» retuerce la pieza y nace el chiste.",
      },
    ],
    moreExamples: [
      { it: "der Zeitgeist → die Geisterzeit (juego invertido)", es: "el espíritu del tiempo → el tiempo de los espíritus (juego)" },
      { it: "Das Kofferwort «Kurlaub».", es: "La palabra-maleta «cura-caciones»." },
      { it: "Fernweh: die Ferne + das Weh.", es: "Morriñaleza: lejanía + dolor. (nostalgia de lo lejos)" },
    ],
    drills: {
      transform: [
        { q: "Zerlege: «die Zeitschrift» =", options: ["die Zeit + die Schrift", "zeigen + Schrift", "Zeit + das Schreiben gestern"], answer: 0, explain: "Zeit (tiempo) + Schrift (escritura) = revista." },
        { q: "Genus: «das Zeitschriftenregal» — das Genus kommt von:", options: ["Regal (última palabra)", "Zeitschrift", "der Zähler"], answer: 0, explain: "El género del compuesto manda el último elemento: das Regal." },
      ],
      errors: [
        { q: "Korrigiere: «die Zeitschriftenregal» (género)", options: ["das Zeitschriftenregal", "der Zeitschriftenregal", "die Zeitschriftenregale sein"], answer: 0, explain: "Regal = neutro: DAS Zeitschriftenregal." },
      ],
    },
  },
  "de-cu-c2-12": {
    tables: [
      {
        title: "Die Festrede: elogio y péroraison",
        headers: ["Bewegung", "Formel", "Beispiel"],
        rows: [
          ["Einstieg", "Es gab einmal einen…", "Hubo una vez un…"],
          ["Klimax", "Er war nicht nur…, er war…", "No solo era…, era…"],
          ["Dreiklang", "tres golpes", "Er baute, er lehrte, er liebte."],
          ["Anapher", "Er lehrte uns… Er gab uns…", "Él nos enseñó… Él nos dio…"],
          ["Futur-Versprechen", "Sein Werk wird leben.", "Su obra vivirá."],
        ],
        note: "La Festrede (discurso conmemorativo) sube la escalera: «Er war NICHT NUR klug, er war WEISE» (no solo listo: sabio — el clímax del elogio). El Dreiklang biográfico («er baute, er lehrte, er liebte») resume una vida en tres verbos; y el cierre promete futuro: «sein Werk WIRD leben» — el Futur I como epitafio luminoso.",
      },
    ],
    moreExamples: [
      { it: "Er baute, er lehrte, er liebte.", es: "Construyó, enseñó, amó. (Dreiklang)" },
      { it: "Sein Werk wird weiterleben.", es: "Su obra seguirá viva. (futuro-promesa)" },
      { it: "Er gab uns Mut, er gab uns Lachen, er gab uns Zeit.", es: "Nos dio valor, nos dio risa, nos dio tiempo. (anáfora)" },
    ],
    drills: {
      transform: [
        { q: "Klimax: «Er war nicht nur klug, er war ___.»", options: ["weise", "klüger noch mehr", "nicht dumm"], answer: 0, explain: "La escalera sube: klug → weise (sabio)." },
        { q: "Futur-Versprechen: «Sein Werk ___ weiterleben.»", options: ["wird", "will", "wäre"], answer: 0, explain: "La promesa del legado: Futur I (wird)." },
      ],
      errors: [
        { q: "Korrigiere: «Er baute, er lehrt, er liebte.» (Dreiklang)", options: ["Er baute, er lehrte, er liebte.", "Er baut, er lehrt, er liebt heute noch.", "Er baute lehrte er liebte."], answer: 0, explain: "Paralelismo estricto: tres Präteritum iguales." },
      ],
    },
  },
};
