import type { CbGrammarPack } from "../cb-rules";

/* ═══ DE C1 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════ */

export const DE_CB_RULES_C1: Record<string, CbGrammarPack> = {
  "de-cu-c1-01": {
    tables: [
      {
        title: "Verbstil vs. Nominalstil · la paráfrasis",
        headers: ["Nominalstil", "Verbstil", "Technik"],
        rows: [
          ["die Durchführung der Analyse", "wir analysieren", "sust. → verbo"],
          ["aufgrund der Tatsache, dass", "weil", "frase → conjunción"],
          ["zur Anwendung bringen", "anwenden", "verbos inflados"],
          ["in Betracht ziehen", "berücksichtigen", "verbos inflados"],
          ["Paráfrasis", "gleicher Sinn, andere Wörter", "el anti-plagio alemán"],
        ],
        note: "El Verbstil es la dieta del alemán académico bien escrito: cada sustantivo abstracto (Durchführung) esconde un verbo (durchführen) más ligero. La paráfrasis académica exige reformular sin repetir: sinónimo + nominalización + cambio de voz — el trío anti-plagio.",
      },
    ],
    moreExamples: [
      { it: "Wir haben die Daten analysiert. (no: eine Analyse durchgeführt)", es: "Analizamos los datos. (no: realizamos un análisis)" },
      { it: "Weil das Gesetz gilt… (no: aufgrund der Tatsache, dass)", es: "Porque la ley rige…" },
      { it: "Wir berücksichtigen die Kosten. (no: ziehen in Betracht)", es: "Consideramos los costos." },
    ],
    drills: {
      transform: [
        { q: "Verbalisiere: «eine Prüfung durchführen» →", options: ["prüfen", "prüfen durch", "geprüft werden"], answer: 0, explain: "Prüfung durchführen = simplemente prüfen." },
        { q: "Verbalisiere: «aufgrund der Tatsache, dass es regnet» →", options: ["weil es regnet", "trotz es regnet", "damit es regnet"], answer: 0, explain: "la frase inflada = weil." },
      ],
      errors: [
        { q: "Korrigiere (estilo): «Wir haben eine Durchführung der Analyse gemacht.»", options: ["Wir haben die Daten analysiert.", "Wir haben die Analyse durchgemacht.", "Wir waren durchführend die Analyse."], answer: 0, explain: "Nominalstil inflado → Verbstil directo." },
      ],
    },
  },
  "de-cu-c1-02": {
    tables: [
      {
        title: "Erörterung: These–Antithese–Synthese",
        headers: ["Schritt", "Signale", "Beispiel"],
        rows: [
          ["These", "Für die These spricht, dass…", "A favor de la tesis habla que…"],
          ["Antithese", "Dagegen lässt sich einwenden, dass…", "En contra cabe objetar que…"],
          ["Abwägung", "Wenn auch…, so doch…", "Si bien…, con todo…"],
          ["Synthese", "In der Gesamtschau / Letztlich", "En el conjunto / en última instancia"],
          ["Konjunktiv I", "der Autor argumentiert, es sei…", "el autor argumenta que sería…"],
        ],
        note: "La Erörterung (disertación) alemana es dialéctica formalizada: These → Antithese → Synthese. Las señas: «Für die These SPRICHT, dass…» / «Dagegen lässt sich EINWENDEN, dass…». Y al citar autores, Konjunktiv I: «er argumentiert, es SEI sinnvoll» — la distancia académica.",
      },
    ],
    moreExamples: [
      { it: "Für die Einschränkung spricht der Datenschutz.", es: "A favor de la restricción habla la protección de datos." },
      { it: "Dagegen lässt sich einwenden, dass die Kosten steigen.", es: "En contra cabe objetar que los costos suben." },
      { it: "In der Gesamtschau überwiegen die Chancen.", es: "En el conjunto pesan más las oportunidades." },
    ],
    drills: {
      transform: [
        { q: "Antithese: «Dagegen ___ sich ___ (einwenden), dass…»", options: ["lässt / einwenden", "lässt / einwenden zu", "einwenden / lässt"], answer: 0, explain: "sich einwenden lassen: lässt sich einwenden." },
        { q: "Konjunktiv I: «Er schreibt, es ___ (sein) sinnvoll.»", options: ["sei", "wäre", "ist"], answer: 0, explain: "Konjunktiv I: sei (cita sin compromiso)." },
      ],
      errors: [
        { q: "Korrigiere: «Dagegen einwenden lässt sich, dass…»", options: ["Dagegen lässt sich einwenden, dass…", "Dagegen sich lässt einwenden, dass…", "Dagegen einwenden sich lässt dass…"], answer: 0, explain: "lässt SICH einwenden — el orden del reflexivo." },
      ],
    },
  },
  "de-cu-c1-03": {
    tables: [
      {
        title: "Rhetorische Figuren",
        headers: ["Figur", "Muster", "Beispiel"],
        rows: [
          ["Anapher", "misma apertura ×2+", "Wir brauchen Mut. Wir brauchen Klarheit."],
          ["Klimax", "escalera ascendente", "Er kam, sah und siegte."],
          ["rhetorische Frage", "pregunta sin respuesta", "Wer will das schon?"],
          ["Antithese", "X contra Y", "Reden ist billig, Handeln ist teuer."],
          ["Parallelismus", "misma forma gramatical", "Reden wir weniger, handeln wir mehr."],
        ],
        note: "Las figuras retóricas alemanas: Anapher (Wir brauchen… Wir brauchen…), Klimax (kam, sah und SIEGTE — vino, vio y venció), la pregunta retórica «Wer will das SCHON?» (¿quién quiere eso?). La Antithese equilibra los platos: reden ist billig, handeln ist teuer — hablar es barato, actuar cuesta.",
      },
    ],
    moreExamples: [
      { it: "Wir brauchen Mut. Wir brauchen Klarheit. Wir brauchen dich.", es: "Necesitamos valor. Necesitamos claridad. Te necesitamos a ti. (anáfora)" },
      { it: "Wer will das schon ändern?", es: "¿Quién quiere cambiar eso? (nadie, dice el tono)" },
      { it: "Er kam, sah und siegte.", es: "Vino, vio y venció. (clímax)" },
    ],
    drills: {
      transform: [
        { q: "Welche Figur? «Wir brauchen Mut. Wir brauchen Zeit.»", options: ["eine Anapher", "ein Klimax", "eine Antithese"], answer: 0, explain: "Misma apertura repetida = anáfora." },
        { q: "Vervollständige die Antithese: «Reden ist billig, ___ ist teuer.»", options: ["Handeln", "Reden", "Schweigen nur"], answer: 0, explain: "Antítesis: el segundo término invierte el primero." },
      ],
      errors: [
        { q: "Analysiere: «Er kam, sah und siegte.» — die Struktur ist:", options: ["ein Klimax (Steigerung)", "eine Anapher", "eine Litotes"], answer: 0, explain: "Tres pasos ascendentes: clímax." },
      ],
    },
  },
  "de-cu-c1-04": {
    tables: [
      {
        title: "Modalpartikeln C1: doch, ja, mal, eben, halt, wohl",
        headers: ["Partikel", "Feinsinn", "Beispiel"],
        rows: [
          ["doch", "recuerda lo obvio / empuja", "Das weißt du doch!"],
          ["ja", "consenso compartido", "Es ist ja bekannt."],
          ["mal", "desarma la orden", "Ruf mal an."],
          ["eben/halt", "resignación sureña/norteña", "So ist es halt. / So ist es eben."],
          ["wohl", "conjetura con matiz", "Sie wird wohl krank sein."],
        ],
        note: "A C1 las partículas se usan con bisturí: «das weißt du DOCH» (¡si lo sabes!), «so ist es HALT» (así es, resignación sureña) vs «so ist es EBEN» (norteña). «Sie wird WOHL krank sein» = estará enferma (suposición con duda amable). El regionalismo halt/eben es el GPS dialectal del alemán.",
      },
    ],
    moreExamples: [
      { it: "Das haben wir ja schon besprochen.", es: "Eso ya lo hemos hablado, de hecho. (ja)" },
      { it: "Dann ruf ihn mal an.", es: "Entonces llámalo, ¿sí? (mal)" },
      { it: "Das war eben ein Missverständnis.", es: "Eso fue simplemente un malentendido. (eben)" },
    ],
    drills: {
      transform: [
        { q: "Feinsinn: «Sie wird ___ krank sein.» (probablemente)", options: ["wohl", "ja", "doch"], answer: 0, explain: "wohl = suposición matizada." },
        { q: "Feinsinn: «Das weißt du ___!» (si lo sabes)", options: ["doch", "mal", "halt"], answer: 0, explain: "doch apela a lo que el otro ya sabe." },
      ],
      errors: [
        { q: "Stil: «Schicken Sie mir mal die Unterlagen.» — ¿apropiado en carta formal?", options: ["Nein — mal es registro hablado", "Ja — mal es formal", "Nein — mal expresa enojo"], answer: 0, explain: "mal suaviza en el habla; en escrito formal sobra." },
      ],
    },
  },
  "de-cu-c1-05": {
    tables: [
      {
        title: "Passiv y sus alternativas (visión C1)",
        headers: ["Form", "Fokus", "Beispiel"],
        rows: [
          ["werden-Passiv", "proceso", "Es wird gebaut."],
          ["sein-Passiv", "estado resultante", "Es gebaut. (está construido)"],
          ["man", "impersonal coloquial", "Man sagt, dass…"],
          ["sich lassen", "posibilidad", "Es lässt sich beweisen."],
          ["Reziprok/Mittel", "einander / durch", "lösbar durch Tests"],
        ],
        note: "La distinción de oro: werden-passiv (se está construyendo — proceso) vs sein-passiv (está construido — resultado). «Es WIRD bewiesen» (se está demostrando) ≠ «es IST bewiesen» (está demostrado). A C1 se elige la pasiva por foco, no por azar: ¿importa el proceso o el estado?",
      },
    ],
    moreExamples: [
      { it: "Die Straße ist gesperrt. (estado)", es: "La calle está cerrada. (sein-passiv)" },
      { it: "Die Straße wird gesperrt. (proceso)", es: "La calle está siendo cerrada. (werden)" },
      { it: "Man munkelt, er kündigt.", es: "Se rumorea que renuncia. (man)" },
    ],
    drills: {
      transform: [
        { q: "Prozess oder Zustand? «Die Straße ___ gesperrt.» (ahora mismo, obras)", options: ["wird", "ist", "hat"], answer: 0, explain: "Acción en curso → werden: wird gesperrt." },
        { q: "Zustand: «Das Problem ___ gelöst.» (ya está)", options: ["ist", "wird", "wäre"], answer: 0, explain: "Resultado → sein: ist gelöst." },
      ],
      errors: [
        { q: "Korrigiere: «Das Haus ist 1912 gebaut.» (evento histórico)", options: ["Das Haus wurde 1912 gebaut.", "Das Haus ist 1912 gebaut worden jetzt.", "Das Haus hat 1912 gebaut."], answer: 0, explain: "Evento en el pasado → werden-Passiv: wurde gebaut." },
      ],
    },
  },
  "de-cu-c1-06": {
    tables: [
      {
        title: "Der Vortrag: Einstieg y Gliederungssignale",
        headers: ["Signal", "Funktion", "Beispiel"],
        rows: [
          ["Einstieg", "ancla la atención", "Stellen Sie sich vor, …"],
          ["Thema nennen", "presenta el tema", "Heute spreche ich über…"],
          ["Gliederung", "anuncia el plan", "Mein Vortrag gliedert sich in drei Teile."],
          ["Überleitung", "cambia de bloque", "Damit komme ich zum zweiten Teil."],
          ["Merksatz", "la frase-recuerdo", "Merken Sie sich: …"],
        ],
        note: "El Vortrag alemán es expreso con señales: «Mein Vortrag GLIEDERT sich in drei Teile» (mi ponencia se estructura en tres partes) — el público alemán QUIERE el mapa antes de viajar. «Damit komme ich zum zweiten Teil» cambia de vía; «Merken Sie sich» clava la frase-recuerdo. La señalética es cortesía, no relleno.",
      },
    ],
    moreExamples: [
      { it: "Stellen Sie sich Folgendes vor:", es: "Imagínese lo siguiente:" },
      { it: "Damit komme ich zum Kern der Sache.", es: "Con esto llego al meollo del asunto." },
      { it: "Merken Sie sich diesen Unterschied.", es: "Recuerde esta diferencia." },
    ],
    drills: {
      transform: [
        { q: "Gliederung: «Mein Vortrag ___ sich in drei Teile.»", options: ["gliedert", "gliedern", "gegliedert"], answer: 0, explain: "sich gliedern in + akkusativo: gliedert sich." },
        { q: "Überleitung: «___ komme ich zum zweiten Teil.»", options: ["Damit", "Dazu", "Dabei"], answer: 0, explain: "Damit komme ich zu… = transición estándar." },
      ],
      errors: [
        { q: "Korrigiere: «Mein Vortrag gliedert in drei Teile sich.»", options: ["Mein Vortrag gliedert sich in drei Teile.", "Mein Vortrag sich gliedert in drei Teile.", "Mein Vortrag in drei Teile sich gliedert."], answer: 0, explain: "Orden: gliedert SICH in drei Teile." },
      ],
    },
  },
  "de-cu-c1-07": {
    tables: [
      {
        title: "Behördendeutsch: el alemán administrativo",
        headers: ["Formel", "Bedeutung", "Beispiel"],
        rows: [
          ["Hiermit teile ich Ihnen mit, dass…", "por la presente le comunico", "la apertura clásica"],
          ["in Bearbeitung", "en trámite", "Ihr Antrag ist in Bearbeitung."],
          ["Die Voraussetzung hierfür ist…", "el requisito para ello es", "—"],
          ["es obliegt Ihnen zu…", "le incumbe + infinitivo", "Es obliegt Ihnen zu prüfen."],
          ["Genitivketten", "cadenas de genitivo", "die Bearbeitung der Anträge der Bürger"],
        ],
        note: "El Behördendeutsch es fortaleza jurídica: «Hiermit teile ich Ihnen MIT» (aquí con ello comunico a usted) — el verbo separable como sello oficial. Las cadenas de genitivo apilan: «die Bearbeitung DER Anträge DER Bürger» (el procesamiento de las solicitudes de los ciudadanos). Traducir oficinesa es desenredar genitivos.",
      },
    ],
    moreExamples: [
      { it: "Ihr Antrag befindet sich in Bearbeitung.", es: "Su solicitud se encuentra en trámite." },
      { it: "Es obliegt Ihnen, die Fristen einzuhalten.", es: "Le incumbe respetar los plazos." },
      { it: "Hiermit bestätige ich den Erhalt Ihres Schreibens.", es: "Por la presente confirmo la recepción de su carta." },
    ],
    drills: {
      transform: [
        { q: "Amtsdeutsch: «Su solicitud está en trámite.» →", options: ["Ihr Antrag ist in Bearbeitung.", "Ihr Antrag ist am Arbeiten dran.", "Ihr Antrag bearbeitet sich."], answer: 0, explain: "in Bearbeitung = en trámite (fórmula fija)." },
        { q: "Entschlüsselung: «Es obliegt Ihnen zu prüfen.» =", options: ["Le incumbe verificar", "Le prohiben verificar", "Le sugieren verificar"], answer: 0, explain: "obliegen zu + infinitivo = incumbir." },
      ],
      errors: [
        { q: "Korrigiere: «Hiermit ich teile Ihnen mit.»", options: ["Hiermit teile ich Ihnen mit.", "Hiermit teile Ihnen ich mit.", "Hiermit Ihnen teile ich mit."], answer: 0, explain: "Hiermit (pos. 1) → verbo pos. 2: teile ICH Ihnen mit." },
      ],
    },
  },
  "de-cu-c1-08": {
    tables: [
      {
        title: "El reproche cortés",
        headers: ["Schritt", "Formel", "Beispiel"],
        rows: [
          ["premisa", "Sie hatten zugesagt, dass…", "Usted había prometido que…"],
          ["constatación KII", "Hier wäre eine Information nützlich gewesen.", "aquí habría sido útil información"],
          ["eco-pregunta", "Oder sehe ich das falsch?", "¿o lo veo mal?"],
          ["petición suave", "Ich wäre Ihnen dankbar, wenn Sie…", "le agradecería que usted…"],
          ["Fazit", "Ich bitte um Verständnis.", "pido comprensión"],
        ],
        note: "El reproche cortés alemán usa el Konjunktiv II como escudo: «Hier WÄRE eine Information nützlich GEWESEN» (aquí habría sido útil…) — el pasado irreal reparte el reproche sin gritar. La eco-pregunta «oder sehe ich das falsch?» (¿o me equivoco?) ofrece la salida elegante. «Ich wäre Ihnen dankbar» es la petición blindada.",
      },
    ],
    moreExamples: [
      { it: "Ich wäre Ihnen dankbar, wenn Sie das prüfen würden.", es: "Le agradecería que usted lo revisara." },
      { it: "Das hätte man früher mitteilen können.", es: "Eso se podría haber comunicado antes." },
      { it: "Oder habe ich Sie missverstanden?", es: "¿O le he entendido mal?" },
    ],
    drills: {
      transform: [
        { q: "Reproche cortés: «Hier ___ eine Info nützlich ___ (sein).»", options: ["wäre / gewesen", "wäre / sein", "wäre / wäre"], answer: 0, explain: "KII pasado: wäre + gewesen." },
        { q: "Petición: «Ich ___ Ihnen dankbar, wenn Sie antworten würden.»", options: ["wäre", "bin", "werde"], answer: 0, explain: "ich wäre dankbar = condicional de cortesía." },
      ],
      errors: [
        { q: "Korrigiere: «Ich wäre Ihnen dankbar, wenn Sie würden antworten.»", options: ["Ich wäre Ihnen dankbar, wenn Sie antworten würden.", "Ich wäre dankbar Ihnen, wenn antworten Sie würden.", "Ich wäre Ihnen dankbar, wenn Sie antworteten würden."], answer: 0, explain: "En wenn: infinitivo + würden al final (antworten würden)." },
      ],
    },
  },
  "de-cu-c1-09": {
    tables: [
      {
        title: "La grámatica del eslogan",
        headers: ["Mittel", "Wirkung", "Beispiel"],
        rows: [
          ["Ellipse", "sin verbo = sin freno", "Einfach mehr."],
          ["Superlativ", "el techo del elogio", "Die beste Entscheidung."],
          ["Wortkreuzung", "palabra-telescopio", "Lieferando → liefern + Amarando?"],
          ["Imperativ", "orden amable", "Probier's jetzt."],
          ["Dreisilben-Rhythmus", "tres golpes", "Geiz ist ge… nein: Geiz ist geil!"],
        ],
        note: "El eslogan alemán vive de la elipsis: «Einfach mehr» (simplemente más) — dos palabras, cero verbo, cien por cien promesa. El superlativo pinta el techo («die BESTE Entscheidung»), y las palabras-telescopio (Kontaminationen) fabrican marcas. El ritmo cuenta: «Geiz ist geil» gana por dos golpes rimados.",
      },
    ],
    moreExamples: [
      { it: "Einfach mehr Wasser.", es: "Simplemente más agua. (elipsis)" },
      { it: "Die beste Bahn aller Zeiten.", es: "El mejor tren de todos los tiempos. (superlativo)" },
      { it: "Probier's jetzt!", es: "¡Pruébalo ahora! (imperativo cortés)" },
    ],
    drills: {
      transform: [
        { q: "Welches Mittel? «Einfach mehr.»", options: ["Ellipse (sin verbo)", "Superlativ", "Kontamination"], answer: 0, explain: "Sin verbo: la elipsis comercial." },
        { q: "Bilde den Superlativ: «gut» →", options: ["am besten / die beste", "am guter", "die guteste"], answer: 0, explain: "gut → besser → am besten / die beste." },
      ],
      errors: [
        { q: "Analysiere: «Geiz ist geil.» — der Effekt kommt durch:", options: ["Reim + Zweisilbigkeit", "Ellipse", "Superlativ"], answer: 0, explain: "Rima (geiz/geil) + dos golpes: ritmo memorable." },
      ],
    },
  },
  "de-cu-c1-10": {
    tables: [
      {
        title: "Konzedieren und entkräften",
        headers: ["Zug", "Formel", "Beispiel"],
        rows: [
          ["einräumen", "Zugegeben, …", "Zugegeben, das Verfahren ist teuer."],
          ["zwar…doch", "concesión con giro", "Zwar ist es teuer, doch lohnt es sich."],
          ["entkräften", "Aber das wiegt nicht schwer, weil…", "Pero eso pesa poco porque…"],
          ["relativieren", "nur teilweise zutreffend", "Das stimmt nur teilweise."],
          ["Konjunktiv II reductivo", "sollte man meinen…", "solo que…"],
        ],
        note: "La cadena refutativa C1: conceder (Zugegeben… / zwar… doch), relativar («das stimmt nur TEILWEISE») y entkräften (desactivar): «aber das wiegt nicht schwer, weil…». El Konjunktiv II reductivo («man SOLLTE meinen» = uno pensaría…) ironiza la posición contraria sin nombrarla.",
      },
    ],
    moreExamples: [
      { it: "Zugegeben, der Anfang war holprig.", es: "Concedido, el comienzo fue accidentado." },
      { it: "Das Argument wiegt nicht schwer.", es: "El argumento no pesa mucho. (se desactiva)" },
      { it: "Man sollte meinen, dass es einfach ist — nur tut man sich schwer.", es: "Uno pensaría que es fácil; solo que cuesta." },
    ],
    drills: {
      transform: [
        { q: "Einräumung: «___, das Verfahren ist teuer.»", options: ["Zugegeben", "Zwar gegeben", "Angenehm"], answer: 0, explain: "Zugegeben = concedido (participio absoluto)." },
        { q: "Relativieren: «Das stimmt ___ ___.»", options: ["nur teilweise", "nicht alles", "sehr ganz"], answer: 0, explain: "nur teilweise = solo en parte." },
      ],
      errors: [
        { q: "Korrigiere: «Zwar ist es teuer, doch es lohnt sich.»", options: ["Zwar ist es teuer, doch lohnt es sich.", "Zwar ist es teuer, doch sich lohnt es.", "Zwar es teuer ist, doch lohnt sich."], answer: 0, explain: "doch (pos. 1 tras coma) → verbo antes del sujeto: lohnt ES sich." },
      ],
    },
  },
  "de-cu-c1-11": {
    tables: [
      {
        title: "Tiempos narrativos y sintaxis literaria",
        headers: ["Tempus", "Funktion", "Beispiel"],
        rows: [
          ["Präteritum", "hilo narrativo", "Er ging zur Tür."],
          ["Plusquamperfekt", "pre-historia", "Sie hatte gewarnt."],
          ["historisches Präsens", "presente histórico", "Plötzlich steht er auf."],
          ["Inversion", "adverbio primero → verbo-sujeto", "Dann kam der Anruf."],
          ["Nominalstil narrativo", "cadenas de participios", "durch den Regen gehetzt, kam er an."],
        ],
        note: "El relato literario alemán: Präteritum hilo («er ging»), Plusquamperfekt para lo anterior («sie hatte gewarnt»), historisches Präsens para el golpe («plötzlich STEHT er auf»). La inversión («DANN KAM der Anruf») es la cámara que gira; los participios absolutos («durch den Regen GEHETZT») comprimen escenas enteras.",
      },
    ],
    moreExamples: [
      { it: "Plötzlich stand alles still.", es: "De repente todo se detuvo." },
      { it: "Dann kam, was kommen musste.", es: "Luego llegó lo que tenía que llegar. (inversión)" },
      { it: "Von der Reise erschöpft, schlief er ein.", es: "Agotado del viaje, se durmió. (participio absoluto)" },
    ],
    drills: {
      transform: [
        { q: "Inversion: «Der Anruf kam dann.» (narrativo) →", options: ["Dann kam der Anruf.", "Dann der Anruf kam.", "Dann kam Anruf der."], answer: 0, explain: "Adverbio pos. 1 → verbo-sujeto: dann KAM der Anruf." },
        { q: "Tempus: «Antes de eso ella ya había advertido.» →", options: ["Sie hatte zuvor gewarnt.", "Sie warnt zuvor.", "Sie hat zuvor gewarnt gehabt."], answer: 0, explain: "Pre-historia → Plusquamperfekt: hatte gewarnt." },
      ],
      errors: [
        { q: "Korrigiere: «Plötzlich er steht auf.» (literatura)", options: ["Plötzlich steht er auf.", "Plötzlich steht auf er.", "Plötzlich auf steht er."], answer: 0, explain: "Adverbio primero → verbo pos. 2: steht ER auf." },
      ],
    },
  },
  "de-cu-c1-12": {
    tables: [
      {
        title: "La defensa final: réplica, hedging y conclusión",
        headers: ["Zug", "Formel", "Beispiel"],
        rows: [
          ["réplica concesiva", "Auch wenn Sie Recht hätten, …", "Aunque usted tuviera razón…"],
          ["hedging", "Es mag stimmen, dass…", "Puede ser cierto que…"],
          ["KII de distancia", "Man könnte einwenden… ich halte entgegen…", "Se podría objetar… yo opongo…"],
          ["conclusión", "Zusammenfassend halte ich fest: …", "En resumen sostengo: …"],
          ["Appell final", "Lassen Sie uns…", "Permitámonos…"],
        ],
        note: "La defensa (Verteidigung) académica combina todo: concesiva con KII («auch wenn Sie Recht HÄTTEN»), hedging («es MAG stimmen»), réplica formal («ich halte ENTGEGEN») y la conclusión anclada («zusammenfassend halte ich FEST»). El verbo separable fest|halten sujeta la tesis como un clavo.",
      },
    ],
    moreExamples: [
      { it: "Es mag stimmen, dass die Daten lückenhaft sind.", es: "Puede ser cierto que los datos tienen lagunas." },
      { it: "Auch wenn das zutrifft, bleibt die These tragfähig.", es: "Aun si eso es cierto, la tesis se sostiene." },
      { it: "Lassen Sie uns gemeinsam den nächsten Schritt gehen.", es: "Demos juntos el siguiente paso." },
    ],
    drills: {
      transform: [
        { q: "Hedging: «Es ___ stimmen, dass…»", options: ["mag", "muss", "soll"], answer: 0, explain: "mögen en KI: es mag stimmen = puede ser." },
        { q: "Konklusion: «Zusammenfassend halte ich ___: …»", options: ["fest", "festhalten", "festgehalten"], answer: 0, explain: "fest|halten: ich halte FEST (conclusión anclada)." },
      ],
      errors: [
        { q: "Korrigiere: «Auch wenn Sie haben Recht, bleibt die These.»", options: ["Auch wenn Sie Recht hätten, bleibt die These.", "Auch wenn Sie Recht haben, bleibt die Thesis die.", "Auch Sie Recht hätten, bleibt die These wenn."], answer: 0, explain: "Concesiva irreal: auch wenn + KII (hätten)." },
      ],
    },
  },
};
