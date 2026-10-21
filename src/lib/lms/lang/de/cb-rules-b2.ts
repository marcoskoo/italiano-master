import type { CbGrammarPack } from "../cb-rules";

/* ═══ DE B2 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════ */

export const DE_CB_RULES_B2: Record<string, CbGrammarPack> = {
  "de-cu-b2-01": {
    tables: [
      {
        title: "Argumentieren: zunächst, darüber hinaus, folglich, letztlich",
        headers: ["Schritt", "Konnektor", "Beispiel"],
        rows: [
          ["abrir", "zunächst", "Zunächst einmal: die Fakten."],
          ["añadir", "darüber hinaus", "Darüber hinaus sparen wir Kosten."],
          ["oponer", "allerdings / jedoch", "Allerdings bleibt das Risiko."],
          ["deducir", "folglich / infolgedessen", "Folglich müssen wir handeln."],
          ["cerrar", "letztlich / letztendlich", "Letztlich zählt das Ergebnis."],
        ],
        note: "La escalera argumentativa B2: zunächst (en primer lugar) → darüber hinaus (además) → allerdings (sin embargo) → folglich (por consiguiente) → letztlich (en definitiva). Todos son adverbios: ocupan posición 1 y empujan el verbo («Darüber hinaus SPAREN wir…»). Uno por frase, como condimentos.",
      },
    ],
    moreExamples: [
      { it: "Zunächst scheint alles klar.", es: "Al principio todo parece claro." },
      { it: "Infolgedessen hat sich die Lage verändert.", es: "En consecuencia, la situación ha cambiado." },
      { it: "Letztendlich ist es eine Frage des Stils.", es: "En definitiva, es una cuestión de estilo." },
    ],
    drills: {
      transform: [
        { q: "Stellung: «Darüber hinaus ___ man Kosten.» (sparen)", options: ["spart", "man spart", "spare man"], answer: 0, explain: "Conector pos. 1 → verbo pos. 2: spart man." },
        { q: "Welcher Schritt? «___ bleibt das Risiko.» (oposición)", options: ["Allerdings", "Zunächst", "Darüber hinaus"], answer: 0, explain: "allerdings = sin embargo (contrapeso)." },
      ],
      errors: [
        { q: "Korrigiere: «Zunächst die Fakten, zunächst die Zahlen.»", options: ["Zunächst die Fakten, danach die Zahlen.", "Zunächst die Fakten zunächst Zahlen.", "Die Fakten zunächst, Zahlen zunächst."], answer: 0, explain: "zunächst abre una sola vez; luego danach/darüber hinaus." },
      ],
    },
  },
  "de-cu-b2-02": {
    tables: [
      {
        title: "Nominalisierung ↔ Verbalisierung",
        headers: ["Verbalstil", "Nominalstil", "Effekt"],
        rows: [
          ["Weil die Preise steigen, …", "wegen steigender Preise…", "comprimido"],
          ["Wenn man das Gesetz umsetzt, …", "bei der Umsetzung des Gesetzes", "burocrático"],
          ["Die Regierung beschloss…", "der Beschluss der Regierung", "nominal"],
          ["…, nachdem sie geprüft hatte", "nach der Prüfung", "preposición + sust."],
          ["Regel", "Genitiv/dativo sustituyen al verbo", "el Nominalstil es el ADN del alemán oficial"],
        ],
        note: "El Nominalstil convierte oraciones en frases preposicionales: «weil die Preise steigen» → «wegen steigender Preise». Genitivo y dativo hacen el trabajo del verbo. El español tiende a verbalizar; el alemán oficial nominaliza — reconocer la equivalencia es el superpoder B2 (y des-nominalizar al traducir).",
      },
    ],
    moreExamples: [
      { it: "wegen der anhaltenden Trockenheit", es: "debido a la sequía persistente (nominalización)" },
      { it: "nach Abschluss der Arbeiten", es: "tras la finalización de los trabajos" },
      { it: "trotz wiederholter Warnungen", es: "a pesar de repetidas advertencias" },
    ],
    drills: {
      transform: [
        { q: "Nominalisiere: «weil die Preise steigen» →", options: ["wegen steigender Preise", "wegen steigen Preise", "weil Preisanstieg es"], answer: 0, explain: "wegen + genitivo: steigender Preise." },
        { q: "Verbalisiere: «nach der Prüfung der Unterlagen» →", options: ["nachdem die Unterlagen geprüft wurden", "nach prüfen die Unterlagen", "nachdem Prüfung unterlagen war"], answer: 0, explain: "nach + sust. → nachdem + pasiva." },
      ],
      errors: [
        { q: "Korrigiere: «wegen steigende Preise» (caso)", options: ["wegen steigender Preise", "wegen steigenden Preise dem", "wegen steigend Preise"], answer: 0, explain: "wegen + GENITIVO: steigender (adj. débil) Preise." },
      ],
    },
  },
  "de-cu-b2-03": {
    tables: [
      {
        title: "Konjunktiv II der Vergangenheit",
        headers: ["Typ", "Form", "Beispiel"],
        rows: [
          ["haben-Verben", "hätte + Partizip II", "Ich hätte das Angebot angenommen."],
          ["sein-Verben", "wäre + Partizip II", "Ich wäre früher gegangen."],
          ["modal", "hätte + inf. (¡sin PII!)", "Ich hätte fragen sollen."],
          ["Wenn-Variante", "wenn + hätte/wäre + PII", "Wenn ich gewusst hätte, …"],
          ["Bedauern", " Fast wäre es gelungen.", "por poco lo logro"],
        ],
        note: "El pasado irreal: «si hubiera sabido, habría venido» = «wenn ich gewusst HÄTTE, wäre ich gekommen». Los modales van sin participio: «ich hätte fragen SOLLEN» (debería haber preguntado) — el infinitivo queda al final, hätte lleva el peso. El arrepentimiento alemán cabe en dos palabras: «hätte, hätte».",
      },
    ],
    moreExamples: [
      { it: "Wir hätten das Angebot annehmen sollen.", es: "Deberíamos haber aceptado la oferta." },
      { it: "Wenn du gekommen wärst, hätte es Spaß gemacht.", es: "Si hubieras venido, habría sido divertido." },
      { it: "Fast wäre mir das Missgeschick passiert.", es: "Por poco me ocurre el desastre." },
    ],
    drills: {
      transform: [
        { q: "KII Vergangenheit: «Ich ___ das Angebot ___ (annehmen).»", options: ["hätte / angenommen", "hätte / annehme", "wäre / angenommen"], answer: 0, explain: "hätte + Partizip II angenommen." },
        { q: "Modal: «Ich hätte ___ ___ (fragen sollen).»", options: ["fragen sollen", "gefragt sollen", "sollen fragen"], answer: 0, explain: "Modal en KII pasado: hätte + infinitivo + sollen." },
      ],
      errors: [
        { q: "Korrigiere: «Ich hätte gefragt sollen gestern.» (posición)", options: ["Ich hätte gestern fragen sollen.", "Ich hätte gestern gefragt sollen.", "Ich gestern hätte fragen sollen es."], answer: 0, explain: "Modal: infinitivo (fragen) + sollen al final — sin participio." },
      ],
    },
  },
  "de-cu-b2-04": {
    tables: [
      {
        title: "Indirekte Rede mit Konjunktiv I",
        headers: ["Direkt", "Indirekt (Konj. I)", "Regel"],
        rows: [
          ["«Ich bin müde.»", "Er sagte, er sei müde.", "sei = Konjunktiv I de sein"],
          ["«Ich habe Zeit.»", "Sie sagte, sie habe Zeit.", "habe (idéntico a indicativo ich)"],
          ["«Ich kam spät.»", "Er sagte, er sei spät gekommen.", "perfekt → sei + PII"],
          ["«Kommst du?»", "Sie fragte, ob ich komme.", "ob + Konjunktiv I"],
          ["Ersatzform", "KII wenn KI = indicativo", "er käme / er kommt (registro hablado)"],
        ],
        note: "El Konjunktiv I es el modo del periodismo: «Er sagte, er SEI müde» — citar sin firmar la verdad. Si el Konjunktiv I coincide con el indicativo (ich habe), se cambia a Konjunktiv II (ich hätte). En la conversación, el alemán real usa KII o indicativo — el KI vive en los periódicos.",
      },
    ],
    moreExamples: [
      { it: "Die Firma teilte mit, sie habe das Ziel erreicht.", es: "La empresa comunicó que habría alcanzado la meta." },
      { it: "Er behauptet, er sei krank gewesen.", es: "Él sostiene que habría estado enfermo." },
      { it: "Sie sagte, sie wisse von nichts.", es: "Ella dijo que no sabía nada. (wisse = KI)" },
    ],
    drills: {
      transform: [
        { q: "Konjunktiv I: «Er sagte, er ___ (sein) müde.»", options: ["sei", "wäre", "ist"], answer: 0, explain: "KI de sein: sei (estilo indirecto)." },
        { q: "Indirekt: «Ich habe gewonnen», sagte sie. →", options: ["Sie sagte, sie habe gewonnen.", "Sie sagte, sie hat gewonnen.", "Sie sagte, sie hätte gewinnen gehabt."], answer: 0, explain: "Perfekt → KI: habe gewonnen." },
      ],
      errors: [
        { q: "Korrigiere: «Er sagte, er ist müde.» (prensa)", options: ["Er sagte, er sei müde.", "Er sagte, er wäre müde gewesen jetzt.", "Er sagt sei müde, er."], answer: 0, explain: "Indirekte Rede periodística: Konjunktiv I (sei)." },
      ],
    },
  },
  "de-cu-b2-05": {
    tables: [
      {
        title: "Die Konzessive: zwar… aber, obwohl, trotz, dennoch",
        headers: ["Mittel", "Struktur", "Beispiel"],
        rows: [
          ["zwar… aber", "zwar X, aber Y", "Es ist zwar teuer, aber gut."],
          ["obwohl + Nebensatz", "verbo final", "Obwohl es teuer ist, kaufe ich es."],
          ["trotz + Genitiv", "sustantivo", "Trotz des Preises kaufe ich es."],
          ["dennoch/trotzdem", "adverbio → inversión", "Es ist teuer; dennoch kaufe ich es."],
          ["wenn auch", "concesiva literaria", "Wenn auch spät, so kam er doch."],
        ],
        note: "El par mágico: «zwar… aber» es el «cierto que… pero» alemán — concede en la primera mitad, gira en la segunda. obwohl subordina (verbo final); trotz rige GENITIVO (trotz des Preises); dennoch/trotzdem son adverbios con inversión. Cuatro herramientas, una misma maniobra retórica.",
      },
    ],
    moreExamples: [
      { it: "Das Angebot ist zwar attraktiv, aber zu riskant.", es: "La oferta es ciertamente atractiva, pero demasiado arriesgada." },
      { it: "Trotz aller Schwierigkeiten wurde geliefert.", es: "A pesar de todas las dificultades, se entregó." },
      { it: "Die Kritik war hart; dennoch blieb er ruhig.", es: "La crítica fue dura; no obstante, se mantuvo tranquilo." },
    ],
    drills: {
      transform: [
        { q: "Genitiv: «___ des schlechten Wetters kamen alle.»", options: ["Trotz", "Obwohl", "Dennoch"], answer: 0, explain: "trotz + genitivo (des Wetters)." },
        { q: "Ergänze: «Es ist zwar teuer, ___ ich nehme es.»", options: ["aber", "doch trotzdem aber", "sondern"], answer: 0, explain: "La pareja fija: zwar… aber." },
      ],
      errors: [
        { q: "Korrigiere: «Trotz es regnete, kamen alle.»", options: ["Obwohl es regnete, kamen alle.", "Trotz dem Regen kamen alle.", "Trotz regnete es, alle kamen."], answer: 0, explain: "Con oración → obwohl; con sustantivo → trotz + genitivo." },
      ],
    },
  },
  "de-cu-b2-06": {
    tables: [
      {
        title: "Modalpartikeln: el subtexto del alemán hablado",
        headers: ["Partikel", "Signal", "Beispiel"],
        rows: [
          ["doch", "insistencia amable", "Komm doch mit!"],
          ["mal", "suaviza la petición", "Schau mal!"],
          ["ja", "obvio compartido", "Das ist ja klar."],
          ["eben/halt", "así son las cosas", "So ist es eben."],
          ["wohl", "suposición", "Er ist wohl im Stau."],
        ],
        note: "Las partículas modales son el ADN del tono alemán: «komm DOCH mit» (anda, ven — insiste amable), «schau MAL» (echa un vistazo — suaviza). No se traducen: se sienten. «Eben/halt» resignado; «wohl» conjetura. Sin ellas hablas correcto pero desnudo; con ellas, alemán con alma.",
      },
    ],
    moreExamples: [
      { it: "Das hast du ja selbst gesagt.", es: "Eso lo dijiste tú mismo, de hecho. (ja)" },
      { it: "Mach die Tür mal zu.", es: "Cierra la puerta, ¿sí? (mal suaviza)" },
      { it: "Das ist eben so.", es: "Así es y punto. (eben)" },
    ],
    drills: {
      transform: [
        { q: "Welche Partikel? «Komm ___ mit!» (insistencia amable)", options: ["doch", "ja", "halt"], answer: 0, explain: "doch = ¡vamos, anda! (empuje amable)." },
        { q: "Welche Partikel? «Er ist ___ im Stau.» (suposición)", options: ["wohl", "mal", "doch"], answer: 0, explain: "wohl = probablemente." },
      ],
      errors: [
        { q: "Ton-Analyse: «Schau mal!» — la partikel mal…", options: ["suaviza la petición", "expresa enojo", "afirma obviedad"], answer: 0, explain: "mal quita la orden del mandato: échale un vistazo." },
      ],
    },
  },
  "de-cu-b2-07": {
    tables: [
      {
        title: "Restricción y graduación: nur, erst, fast, durchaus",
        headers: ["Wort", "Bedeutung", "Beispiel"],
        rows: [
          ["nur", "solo (limitación)", "Ich habe nur fünf Euro."],
          ["erst", "solamente (todavía menos)", "Er ist erst acht Jahre alt."],
          ["fast / beinahe", "casi", "Fast hätte ich gewonnen."],
          ["durchaus", "sin duda (matiz positivo)", "Das ist durchaus möglich."],
          ["nicht gerade", "no precisamente", "Das war nicht gerade höflich."],
        ],
        note: "La pareja nur/erst separa mundos: «nur fünf Euro» = solo cinco euros; «erst acht Jahre» = apenas ocho años (¡y eso es poco tiempo!). fast/beinahe gemelos de «casi». «Durchaus» es el sí enfático elegante: «durchaus möglich» = totalmente posible. Graduar es matizar.",
      },
    ],
    moreExamples: [
      { it: "Er ist erst seit einem Monat hier.", es: "Está aquí desde hace apenas un mes." },
      { it: "Beinahe hätte ich den Zug verpasst.", es: "Por poco pierdo el tren." },
      { it: "Die Idee ist durchaus diskutabel.", es: "La idea es sin duda discutible." },
    ],
    drills: {
      transform: [
        { q: "nur oder erst? «Das Kind ist ___ sechs.» (pequeño)", options: ["erst", "nur", "fast"], answer: 0, explain: "La edad como poco tiempo → erst." },
        { q: "«Por poco gano»: «___ hätte ich gewonnen.»", options: ["Fast", "Nur", "Zwar"], answer: 0, explain: "fast/beinahe = casi." },
      ],
      errors: [
        { q: "Korrigiere: «Die Idee ist durchausdiskutabel.» (escritura)", options: ["Die Idee ist durchaus diskutabel.", "Die Idee ist durchausdiskutabel gut.", "Die Idee durchaus ist diskutabel."], answer: 0, explain: "durchaus es adverbio separado: durchaus diskutabel." },
      ],
    },
  },
  "de-cu-b2-08": {
    tables: [
      {
        title: "Passiv-Ersatzformen",
        headers: ["Form", "Beispiel", "Español"],
        rows: [
          ["sich lassen + inf.", "Das Problem lässt sich lösen.", "el problema puede resolverse"],
          ["sein zu + inf.", "Die Regeln sind zu beachten.", "las reglas deben observarse"],
          ["-bar Adjektiv", "Das ist machbar.", "es factible"],
          ["man + Verb", "Man kann es lösen.", "se puede resolver"],
          ["Nebeneinander", "lösbar = lösbar sein = sich lösen lassen", "tres vías, un sentido"],
        ],
        note: "El alemán huye de la pasiva con elegancia: «sich lassen» (se puede + verbo), «sein zu» (debe ser + verbo) y el sufijo -bar (-ble): machbar = factible. «Das lässt sich klären» = eso puede aclararse. Tres sustitutos de la pasiva que suenan a alemán de verdad, no a gramática traducida.",
      },
    ],
    moreExamples: [
      { it: "Das lässt sich nicht vermeiden.", es: "Eso no se puede evitar." },
      { it: "Die Frist ist einzuhalten.", es: "El plazo debe respetarse." },
      { it: "Dieser Wandel ist nicht aufhaltbar.", es: "Este cambio es imparable. (-bar)" },
    ],
    drills: {
      transform: [
        { q: "Passiv-Ersatz: «Man kann das Problem lösen.» → mit sich lassen:", options: ["Das Problem lässt sich lösen.", "Das Problem lässt lösen sich.", "Das Problem sich lösen lässt."], answer: 0, explain: "sich lassen + infinitivo: lässt sich lösen." },
        { q: "Bilden Sie: «Das ist möglich zu machen.» → adjetivo en -bar:", options: ["Das ist machbar.", "Das ist machenbar.", "Das ist machbarkeit."], answer: 0, explain: "machen → machbar (-ble alemán)." },
      ],
      errors: [
        { q: "Korrigiere: «Die Regeln sind zu beachten sich.»", options: ["Die Regeln sind zu beachten.", "Die Regeln lassen zu beachten sein.", "Die Regeln sind beachtbar zu sich."], answer: 0, explain: "sein zu + infinitivo: sind zu beachten (sin clítico)." },
      ],
    },
  },
  "de-cu-b2-09": {
    tables: [
      {
        title: "Der Brief: Anrede y Grußformel",
        headers: ["Teil", "Formel", "Beispiel"],
        rows: [
          ["Anrede", "Sehr geehrte Frau…, / Sehr geehrter Herr…,", "estimada señora / estimado señor"],
          ["Einstieg", "ich wende mich an Sie, weil…", "me dirijo a usted porque…"],
          ["Forderung", "Ich bitte Sie, … zu + inf.", "le pido que…"],
          ["Schluss", "Für Ihre Bemühungen danke ich Ihnen.", "por su gestión le agradezco"],
          ["Grußformel", "Mit freundlichen Grüßen", "saludos cordiales (sin coma)"],
        ],
        note: "La carta formal alemana es ritual de tres sellos: Anrede («Sehr geehrte/r…» con coma), cuerpo con «Ich bitte Sie, … zu + infinitivo» y el cierre «Mit freundlichen Grüßen» — SIN coma y con la firma debajo. «Sehr geehrte Damen und Herren» para destinatario desconocido: el traje negro del alemán escrito.",
      },
    ],
    moreExamples: [
      { it: "Sehr geehrte Damen und Herren,", es: "Muy señores míos," },
      { it: "Ich bitte Sie, den Betrag zu erstatten.", es: "Le pido que reembolse el importe." },
      { it: "Mit freundlichen Grüßen, Alejandro Pérez", es: "Saludos cordiales, Alejandro Pérez" },
    ],
    drills: {
      transform: [
        { q: "Forderung: «Ich bitte Sie, ___ (prüfen) den Fall.»", options: ["zu prüfen", "prüfen", "prüfend"], answer: 0, explain: "Ich bitte Sie, zu + infinitivo." },
        { q: "Anrede correcta para la Sra. Müller:", options: ["Sehr geehrte Frau Müller,", "Sehr geehrter Frau Müller,", "Liebe Frau Müller,"], answer: 0, explain: "Frau femenino → Sehr geehrte." },
      ],
      errors: [
        { q: "Korrigiere: «Mit freundlichen Grüßen,» — ¿falta algo?", options: ["Nada: va sin coma y con firma debajo", "Falta la coma tras Grüßen", "Falta «Sehr»"], answer: 0, explain: "«Mit freundlichen Grüßen» se escribe SIN coma; la firma va debajo." },
      ],
    },
  },
  "de-cu-b2-10": {
    tables: [
      {
        title: "Widerspruch + Einräumung (refutar y conceder)",
        headers: ["Schritt", "Formel", "Beispiel"],
        rows: [
          ["einräumen", "zwar… / einräumen, dass…", "Zwar ist der Preis hoch, …"],
          ["widersprechen", "dem möchte ich entgegenhalten, dass…", "…dem möchte ich entgegenhalten, dass…"],
          ["relativieren", "allerdings nur teilweise", "Das stimmt allerdings nur teilweise."],
          ["Gegenargument", "dagegen spricht, dass…", "Dagegen spricht, dass die Kosten sinken."],
          ["fazit", "Insgesamt überwiegen die Vorteile.", "en conjunto pesan más las ventajas"],
        ],
        note: "La refutación alemana con guantes: primero concede (zwar…), luego «dem möchte ich ENTGEGENHALTEN, dass…» (a eso quiero oponer que…) — el verbo separable de la refutación elegante. «Dagegen spricht, dass…» es el contraargumento directo. El cierre pesa ventajas: «insgesamt überwiegen».",
      },
    ],
    moreExamples: [
      { it: "Ich räume ein, dass der Weg lang ist.", es: "Reconozco que el camino es largo." },
      { it: "Dem lässt sich entgegenhalten, dass die Technik reift.", es: "A eso cabe oponer que la tecnología madura." },
      { it: "Dagegen spricht der Zeitaufwand.", es: "En contra habla el tiempo requerido." },
    ],
    drills: {
      transform: [
        { q: "Widerspruch: «Dem möchte ich ___ (entgegenhalten + möchten), dass…»", options: ["entgegenhalten", "entgegen gehalten", "gegenhalten entgegen"], answer: 0, explain: "möchte + entgegenhalten (infinitivo separable entero)." },
        { q: "Einräumung: «Ich räume ___, dass der Preis hoch ist.»", options: ["ein", "einräumt", "an"], answer: 0, explain: "ein|räumen: ich räume EIN, dass…" },
      ],
      errors: [
        { q: "Korrigiere: «Zwar der Preis ist hoch, aber die Qualität stimmt.»", options: ["Zwar ist der Preis hoch, aber die Qualität stimmt.", "Zwar der Preis hoch ist, aber stimmt die Qualität.", "Zwar ist der Preis hoch, aber die Qualität sie stimmt."], answer: 0, explain: "zwar abre → verbo posición 2: Zwar IST der Preis…" },
      ],
    },
  },
  "de-cu-b2-11": {
    tables: [
      {
        title: "Denglisch de oficina",
        headers: ["Englisch", "Deutsche Alternative", "Register"],
        rows: [
          ["Meeting", "die Besprechung / das Meeting", "ambos viven"],
          ["Deadline", "die Frist / der Abgabetermin", "Frist en formal"],
          ["Deadline-Druck", "Zeitdruck", "—"],
          ["das Briefing", "die Einweisung", "Briefing aceptado"],
          ["leasen", "mieten / pachten", "leasen = específico financiero"],
        ],
        note: "El Denglisch es el alemán de oficina con préstamos: das Meeting, die Deadline, das Briefing. Género gramatical (das Meeting) pero alma germánica. Alternativas puras existen (die Frist, die Besprechung) y suben el registro. La estrategia: entender todo, alternar según la sala.",
      },
    ],
    moreExamples: [
      { it: "Lass uns das im Meeting besprechen.", es: "Discutámoslo en la reunión." },
      { it: "Die Deadline läuft nächste Woche ab.", es: "El plazo vence la próxima semana." },
      { it: "Ich schicke dir das Briefing zu.", es: "Te envío la indicación." },
    ],
    drills: {
      transform: [
        { q: "Formeller: «Die Deadline ist Montag.» →", options: ["Die Frist endet am Montag.", "Die Deadline endet formell Montag.", "Der Montag ist die Deadline formal."], answer: 0, explain: "die Frist = la alternativa formal a Deadline." },
        { q: "Genus: «___ Meeting»", options: ["das", "die", "der"], answer: 0, explain: "das Meeting (neutro, préstamo)." },
      ],
      errors: [
        { q: "Korrigiere: «die Meeting ist verschoben.» (género)", options: ["Das Meeting ist verschoben.", "Die Meetingen ist verschoben.", "Der Meeting ist verschoben."], answer: 0, explain: "Meeting = das (neutro estándar)." },
      ],
    },
  },
  "de-cu-b2-12": {
    tables: [
      {
        title: "Die Architektur des Plädoyers",
        headers: ["Baustein", "Formel", "Beispiel"],
        rows: [
          ["These", "Meine These lautet: …", "Mi tesis es la siguiente…"],
          ["Säulen", "Erstens… Zweitens…", "columnas numeradas"],
          ["Beleg", "Belegen lässt sich das durch…", "Eso se demuestra mediante…"],
          ["Steigerung", "Nicht nur…, sondern auch…", "No solo…, sino también…"],
          ["Appell", "Ich fordere Sie auf, …zu + inf.", "Les exijo que…"],
        ],
        note: "El plaidoyer alemán es arquitectura: These (tesis en una frase), Säulen (columnas numeradas: erstens, zweitens), Beleg (la prueba), Steigerung (la escalada con «nicht nur…, sondern auch») y Appell (el cierre de llamado: «ich fordere Sie AUF zu handeln»). Construir en bloques es pensar en alemán.",
      },
    ],
    moreExamples: [
      { it: "Meine These lautet: Digitalisierung spart Zeit.", es: "Mi tesis: la digitalización ahorra tiempo." },
      { it: "Nicht nur spart es Kosten, sondern es motiviert auch.", es: "No solo ahorra costos, sino que además motiva." },
      { it: "Ich fordere Sie auf, heute zu entscheiden.", es: "Les exijo que decidan hoy." },
    ],
    drills: {
      transform: [
        { q: "Steigerung: «___ nur spart es Kosten, ___ motiviert es auch.»", options: ["Nicht / sondern", "Zwar / aber", "Entweder / oder"], answer: 0, explain: "nicht nur…, sondern… auch." },
        { q: "Appell: «Ich fordere Sie auf, ___ (handeln).»", options: ["zu handeln", "handeln", "handelnd"], answer: 0, explain: "auffordern zu + infinitivo (zu separable)." },
      ],
      errors: [
        { q: "Korrigiere: «Ich fordere Sie auf, heute entscheiden.»", options: ["Ich fordere Sie auf, heute zu entscheiden.", "Ich fordere Sie auf heute entscheiden zu.", "Ich fordere auf Sie, heute zu entscheiden."], answer: 0, explain: "zu + infinitivo: heute ZU entscheiden." },
      ],
    },
  },
};
