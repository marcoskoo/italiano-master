import type { CbGrammarPack } from "../cb-rules";

/* ═══ DE B1 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════ */

export const DE_CB_RULES_B1: Record<string, CbGrammarPack> = {
  "de-cu-b1-01": {
    tables: [
      {
        title: "Nebensätze: dass, weil, obwohl · verbo al final",
        headers: ["Konnektor", "Funktion", "Beispiel"],
        rows: [
          ["dass", "contenido", "Ich denke, dass der Kurs gut ist."],
          ["weil", "causa", "Ich bleibe zu Hause, weil es regnet."],
          ["obwohl", "concesión", "Obwohl es regnet, gehe ich."],
          ["Verbendstellung", "verbo conjugado AL FINAL", "…, weil es regnet."],
          ["✗", "«weil es ist kalt»", "→ weil es kalt IST"],
        ],
        note: "La regla de hierro del subordinado: la conjunción (dass/weil/obwohl) manda el verbo conjugado AL FINAL de la subordinada. «Obwohl es regnet, gehe ich» — además, si la subordinada abre, la principal invierte su verbo (gehe ICH). El español «aunque llueve, voy» no invierte: el alemán sí.",
      },
    ],
    moreExamples: [
      { it: "Ich glaube, dass er recht hat.", es: "Creo que tiene razón." },
      { it: "…, weil ich die Bahn verpasst habe.", es: "…porque perdí el tren." },
      { it: "Obwohl ich müde bin, lerne ich weiter.", es: "Aunque estoy cansado, sigo estudiando." },
    ],
    drills: {
      transform: [
        { q: "Verb ans Ende: «…, weil ich müde ___ (sein).»", options: ["bin", "ist", "sei"], answer: 0, explain: "weil: …müde BIN (final)." },
        { q: "Inversion: «Es regnet. Ich gehe spazieren.» mit obwohl:", options: ["Obwohl es regnet, gehe ich spazieren.", "Obwohl es regnet, ich gehe spazieren.", "Es regnet obwohl, gehe ich spazieren."], answer: 0, explain: "Subordinada primero → verbo principal antes del sujeto." },
      ],
      errors: [
        { q: "Korrigiere: «…, weil ich habe keine Zeit.»", options: ["…, weil ich keine Zeit habe.", "…, weil ich keine Zeit habend.", "…, weil keine Zeit ich habe."], answer: 0, explain: "El verbo conjugado cierra la subordinada: …habe." },
      ],
    },
  },
  "de-cu-b1-02": {
    tables: [
      {
        title: "Plusquamperfekt + seit/vor",
        headers: ["Struktur", "Beispiel", "Español"],
        rows: [
          ["PQP = hatte/war + PII", "Ich hatte schon gegessen.", "ya había comido"],
          ["antes del pasado", "Nachdem ich gegessen hatte, …", "después de que hubiera comido"],
          ["seit + präsens", "Ich lerne seit zwei Jahren Deutsch.", "aprendo alemán desde hace 2 años"],
          ["vor + dativo", "vor zwei Jahren", "hace dos años"],
          ["nachdem + PQP", "Nachdem er gegangen war, …", "después de que él se fue"],
        ],
        note: "El Plusquamperfekt (había comido) = hatte/war + participio, igual que el Perfekt pero un paso atrás. La pareja seit/vor es la trampa inversa: «seit zwei Jahren» = desde hace dos años (presente), «vor zwei Jahren» = hace dos años (pasado puntual).",
      },
    ],
    moreExamples: [
      { it: "Der Zug war schon abgefahren.", es: "El tren ya se había ido." },
      { it: "Ich lebe seit März in Berlin.", es: "Vivo en Berlín desde marzo." },
      { it: "Vor einem Jahr war ich noch in Peru.", es: "Hace un año todavía estaba en Perú." },
    ],
    drills: {
      transform: [
        { q: "PQP: «Der Zug ___ schon ___ (abfahren).»", options: ["war / abgefahren", "hat / abgefahren", "war / abfuhr"], answer: 0, explain: "abfahren (movimiento) → war abgefahren." },
        { q: "seit o vor? «Ich lerne ___ drei Monaten Deutsch.»", options: ["seit", "vor", "ab"], answer: 0, explain: "acción continua → seit + dativo." },
      ],
      errors: [
        { q: "Korrigiere: «Ich habe seit zwei Jahren Deutsch gelernt.» (acción terminada hace 2 años)", options: ["Ich habe vor zwei Jahren Deutsch gelernt.", "Ich lerne seit zwei Jahren Deutsch.", "Ich lernte vor seit zwei Jahren."], answer: 0, explain: "Acción terminada: vor + Perfekt (seit = acción que continúa)." },
      ],
    },
  },
  "de-cu-b1-03": {
    tables: [
      {
        title: "Konjunktiv II: wäre, hätte, könnte, würde",
        headers: ["Verb", "Konjunktiv II", "Beispiel"],
        rows: [
          ["sein", "wäre", "Wenn ich Zeit hätte, wäre ich glücklich."],
          ["haben", "hätte", "Ich hätte gern mehr Urlaub."],
          ["können", "könnte", "Ich könnte dir helfen."],
          ["würde + inf.", "todas las demás", "Ich würde gern reisen."],
          ["Wenn + KII", "condición irreal", "Wenn ich reich wäre, würde ich reisen."],
        ],
        note: "Los cuatro jinetes del Konjunktiv II: wäre (sería), hätte (tendría), könnte (podría), würde (haría). Para el resto de verbos, würde + infinitivo lo resuelve todo. «Wenn ich reich WÄRE, WÜRDE ich reisen» — si fuera rico, viajaría: el condicional español completo en dos piezas alemanas.",
      },
    ],
    moreExamples: [
      { it: "Wenn ich du wäre, würde ich das Angebot annehmen.", es: "Yo que tú, aceptaría la oferta." },
      { it: "An deiner Stelle hätte ich gefragt.", es: "En tu lugar, habría preguntado." },
      { it: "Könntest du mir einen Gefallen tun?", es: "¿Podrías hacerme un favor?" },
    ],
    drills: {
      transform: [
        { q: "KII: «Wenn ich Zeit ___ (haben), würde ich kommen.»", options: ["hätte", "hatte", "habe"], answer: 0, explain: "Wenn + Konjunktiv II: hätte." },
        { q: "KII: «Ich ___ (sein) gern dort.»", options: ["wäre", "war", "werde"], answer: 0, explain: "sein Konjunktiv II: wäre." },
      ],
      errors: [
        { q: "Korrigiere: «Wenn ich reich wäre, ich würde reisen.»", options: ["Wenn ich reich wäre, würde ich reisen.", "Wenn ich reich wäre, reisen würde ich würde.", "Wenn ich reich bin, würde ich reisen."], answer: 0, explain: "Wenn-Club: subordinada cierra con wäre; la principal invierte: würde ICH." },
      ],
    },
  },
  "de-cu-b1-04": {
    tables: [
      {
        title: "Futur I vs. Präsens con valor futuro",
        headers: ["", "Präsens", "Futur I"],
        rows: [
          ["Uso", "plan seguro, horario", "promesa, predicción, suposición"],
          ["Beispiel", "Morgen fahre ich nach Bonn.", "Morgen werde ich früh aufstehen (versprochen)."],
          ["Signal", "schon fest steht", "wohl / sicher / vermutlich"],
          ["Vermutung", "Er wird wohl im Stau stehen.", "probablemente esté en el atasco"],
          ["✗ calco", "«ich werde morgen fahren» (plan fijo)", "mejor: morgen fahre ich"],
        ],
        note: "El alemán del futuro diario es el PRESENTE: «morgen fahre ich nach Bonn» (plan fijo). El Futur I se reserva para promesas y suposiciones: «er wird WOHL im Stau stehen» (estará en el atasco, supongo). El calco «voy a + futuro» con werden suena a extranjero bien intencionado.",
      },
    ],
    moreExamples: [
      { it: "Nächste Woche fliege ich nach Lima.", es: "La semana que viene vuelo a Lima. (presente con valor futuro)" },
      { it: "Das wird schon gut gehen!", es: "¡Eso saldrá bien! (Futur I, confianza)" },
      { it: "Sie wird die E-Mail wohl übersehen haben.", es: "Habrá pasado por alto el correo, seguramente." },
    ],
    drills: {
      transform: [
        { q: "Wähle (plan fijo): «Morgen ___ ich nach Bonn.»", options: ["fahre", "werde fahren", "führe"], answer: 0, explain: "Plan seguro → presente con valor futuro." },
        { q: "Wähle (suposición): «Er ___ wohl im Stau stehen.»", options: ["wird", "ist", "hat"], answer: 0, explain: "Vermutung → Futur I: wird wohl." },
      ],
      errors: [
        { q: "Korrigiere (naturalidad): «Ich werde morgen den Arzttermin haben.» (plan ya fijado)", options: ["Morgen habe ich den Arzttermin.", "Morgen werde den Arzttermin ich haben.", "Morgen der Arzttermin wird sein."], answer: 0, explain: "Cita ya agendada → presente: habe." },
      ],
    },
  },
  "de-cu-b1-05": {
    tables: [
      {
        title: "dürfen nicht · müssen · nicht müssen",
        headers: ["Formel", "Bedeutung", "Beispiel"],
        rows: [
          ["müssen", "obligación", "Du musst deine Steuererklärung abgeben."],
          ["nicht dürfen", "PROHIBIDO", "Hier dürfen Sie nicht rauchen."],
          ["nicht müssen", "NO es necesario", "Du musst nicht kommen. (opcional)"],
          ["man + inf.", "regla general", "Hier darf man nicht parken."],
          ["zu + Infinitiv", "obligación nominal", "Es ist verboten, hier zu rauchen."],
        ],
        note: "La trampa clásica: «no debes» español se divide en alemán — nicht DÜRFEN = prohibido; nicht MÜSSEN = no hace falta. «Du musst nicht kommen» = no es necesario que vengas (¡pero puedes!); «du darfst nicht kommen» = te prohibo venir. La diferencia es legal.",
      },
    ],
    moreExamples: [
      { it: "Man darf hier nicht parken.", es: "Aquí no se puede estacionar. (prohibido)" },
      { it: "Du musst nicht warten.", es: "No tienes que esperar. (opcional)" },
      { it: "Es ist wichtig, pünktlich zu sein.", es: "Es importante ser puntual. (zu + infinitivo)" },
    ],
    drills: {
      transform: [
        { q: "Verbot oder Freiheit? «Du ___ nicht zahlen — es ist gratis.»", options: ["musst", "darfst", "kannst nicht"], answer: 0, explain: "No es necesario → nicht müssen." },
        { q: "Verbot: «Hier ___ man nicht rauchen.»", options: ["darf", "muss", "soll"], answer: 0, explain: "Prohibición → darf nicht." },
      ],
      errors: [
        { q: "Korrigiere: «Du darfst nicht kommen, wenn du keine Zeit hast.» (opcional)", options: ["Du musst nicht kommen, wenn du keine Zeit hast.", "Du kannst nicht kommen müssen.", "Du darfst nicht kommen nicht."], answer: 0, explain: "«No tienes que venir» (opcional) = nicht müssen." },
      ],
    },
  },
  "de-cu-b1-06": {
    tables: [
      {
        title: "Indirekte Fragen + dass/ob",
        headers: ["Struktur", "Beispiel", "Español"],
        rows: [
          ["ob (sí/no)", "Ich frage, ob er kommt.", "pregunto si viene"],
          ["W-Wort", "Ich weiß nicht, wann der Zug kommt.", "no sé cuándo viene el tren"],
          ["dass", "Ich hoffe, dass du kommst.", "espero que vengas"],
          ["Verbo final", "…ob er KOMMT", "…si VIENE (verbo al final)"],
          ["✗", "«Ich frage, ob kommt er?»", "jamás inversión en indirecta"],
        ],
        note: "La pregunta indirecta alemana NO invierte: «Ich frage, ob er KOMMT» (verbo al final, jamás «kommt er»). ob = si (sí/no); las W-palabras (wann, wo, wer) se quedan y el verbo también va al final. La estructura es idéntica a la subordinada con dass.",
      },
    ],
    moreExamples: [
      { it: "Ich weiß nicht, wo er wohnt.", es: "No sé dónde vive." },
      { it: "Kannst du mir sagen, wann der Kurs beginnt?", es: "¿Puedes decirme cuándo empieza el curso?" },
      { it: "Ich frage mich, ob das stimmt.", es: "Me pregunto si eso es cierto." },
    ],
    drills: {
      transform: [
        { q: "Indirekt: «Wann beginnt der Kurs?» → Ich frage, …", options: ["wann der Kurs beginnt", "wann beginnt der Kurs", "wann der Kurs beginnet"], answer: 0, explain: "W-Wort + sujeto + … + verbo final." },
        { q: "ob o dass? «Ich hoffe, ___ du kommst.»", options: ["dass", "ob", "wann"], answer: 0, explain: "Espero QUE → dass (afirmación)." },
      ],
      errors: [
        { q: "Korrigiere: «Ich frage, ob kommt er.»", options: ["Ich frage, ob er kommt.", "Ich frage ob, er kommt.", "Ich frage, ob er kommen tut."], answer: 0, explain: "Sin inversión: ob + sujeto + verbo final." },
      ],
    },
  },
  "de-cu-b1-07": {
    tables: [
      {
        title: "Relativsätze: nominativo, acusativo, dativo, dessen",
        headers: ["Kasus", "Pronomen", "Beispiel"],
        rows: [
          ["Nominativ (m./f./n./pl.)", "der / die / das / die", "der Mann, der dort steht"],
          ["Akkusativ", "den / die / das / die", "der Film, den ich sah"],
          ["Dativ", "dem / der / dem / denen", "die Frau, der ich half"],
          ["wo", "lugar", "die Stadt, wo ich wohne"],
          ["dessen / deren", "posesión (cuyo)", "der Autor, dessen Buch ich las"],
        ],
        note: "El relativo alemán copia género y número del sustantivo, pero el CASO lo decide su función en la subordinada: «der Film, DEN ich sah» (objeto → acusativo). dessen = cuyo (m.): «der Autor, DESSEN Buch» — el autor CUYO libro. La tabla de cuatro casos es el billete B1.",
      },
    ],
    moreExamples: [
      { it: "Das ist die Kollegin, die mich immer unterstützt.", es: "Esa es la colega que siempre me apoya." },
      { it: "Der Bericht, den du geschrieben hast, ist gut.", es: "El informe que escribiste está bien." },
      { it: "Die Leute, denen ich vertraue, sind wenige.", es: "La gente a la que confío son pocos. (dativo)" },
    ],
    drills: {
      transform: [
        { q: "Relativpronomen: «der Mann, ___ mir geholfen hat.» (sujeto)", options: ["der", "den", "dem"], answer: 0, explain: "El hombre QUE ayudó → nominativo: der." },
        { q: "Relativpronomen: «der Film, ___ ich gestern sah.» (objeto)", options: ["den", "der", "dem"], answer: 0, explain: "Vi la película → acusativo: den." },
      ],
      errors: [
        { q: "Korrigiere: «der Autor, den Buch ich gelesen habe.»", options: ["der Autor, dessen Buch ich gelesen habe.", "der Autor, der Buch ich las.", "der Autor, dem Buch ich las habe."], answer: 0, explain: "Posesión → dessen (cuyo)." },
      ],
    },
  },
  "de-cu-b1-08": {
    tables: [
      {
        title: "weil/denn vs. deshalb/daher/darum",
        headers: ["Typ", "Wort", "Stellung", "Beispiel"],
        rows: [
          ["causa (subordinante)", "weil", "verbo final", "…, weil es regnet."],
          ["causa (coordinante)", "denn", "posición normal", "…, denn es regnet."],
          ["consecuencia", "deshalb / daher / darum", "¡inversión!", "Es regnet, deshalb bleiben wir."],
          ["weil ≠ deshalb", "causa ↔ efecto", "miran distinto", "weil da la causa, deshalb da el efecto"],
          ["✗", "«deshalb wir bleiben»", "inversión", "✗ deshalb wir bleiben → deshalb bleiben WIR"],
        ],
        note: "La pareja causal: weil (porque) subordina — verbo al final; denn (porque) coordina — orden normal. La consecuencia invierte: «es regnet, DESHALB BLEIBEN wir» (llueve, POR ESO nos quedamos). Tres hermanos de consecuencia: deshalb, daher, darum — mismo motor, registro distinto.",
      },
    ],
    moreExamples: [
      { it: "Ich kam zu spät, denn der Bus hatte Verspätung.", es: "Llegué tarde, porque el bus venía retrasado." },
      { it: "Der Bus hatte Verspätung, deshalb kam ich zu spät.", es: "El bus venía retrasado, por eso llegué tarde." },
      { it: "Es war teuer; daher habe ich es nicht gekauft.", es: "Era caro; por eso no lo compré." },
    ],
    drills: {
      transform: [
        { q: "Verbe ans Ende: «…, weil es regnet stark ___ (sein).»", options: ["ist", "ist es", "sei"], answer: 0, explain: "weil: …stark IST al final." },
        { q: "Inversion: «Es regnet. Wir bleiben.» mit deshalb:", options: ["Es regnet, deshalb bleiben wir.", "Es regnet, deshalb wir bleiben.", "Es regnet deshalb, bleiben wir."], answer: 0, explain: "deshalb/daher → verbo antes del sujeto." },
      ],
      errors: [
        { q: "Korrigiere: «Es regnet, denn deshalb bleiben wir zu Hause.»", options: ["Es regnet, deshalb bleiben wir zu Hause.", "Es regnet denn, wir bleiben deshalb.", "Es regnet, deshalb wir bleiben zu Hause denn."], answer: 0, explain: "denn y deshalb no se apilan: uno da causa, otro efecto." },
      ],
    },
  },
  "de-cu-b1-09": {
    tables: [
      {
        title: "Reflexive Verben + Präteritum",
        headers: ["Verb", "ich (Präsens)", "ich (Präteritum)", "Beispiel"],
        rows: [
          ["sich freuen", "ich freue mich", "ich freute mich", "Ich freute mich auf den Urlaub."],
          ["sich interessieren für", "ich interessiere mich", "ich interessierte mich", "Ich interessierte mich für Kunst."],
          ["sich beeilen", "ich beeile mich", "ich beeilte mich", "Ich beeilte mich."],
          ["sich erinnern an", "ich erinnere mich", "ich erinnerte mich", "Ich erinnerte mich an dich."],
          ["Akkusativ vs. Dativ", "mich/dich (akk.)", "mir/dir (dat.)", "Ich putze mir die Zähne."],
        ],
        note: "Los reflexivos alemanes son ciudadanos con pasaporte propio: sich FREUEN (alegrarse), sich BEEILEN (darse prisa). El Präteritum regular simplemente camina: freute mich, beeilte mich. Y el truco: «ich putze MIR die Zähne» — dativo reflexivo cuando hay otro objeto en la frase.",
      },
    ],
    moreExamples: [
      { it: "Ich freute mich sehr über das Geschenk.", es: "Me alegró mucho el regalo." },
      { it: "Wir beeilten uns und verpassten den Zug trotzdem.", es: "Nos apuramos y aun así perdimos el tren." },
      { it: "Sie erinnerte sich an ihre Kindheit.", es: "Ella recordaba su infancia." },
    ],
    drills: {
      transform: [
        { q: "Präteritum: «Ich ___ mich auf den Urlaub ___ (freuen).»", options: ["freute", "froh", "freue"], answer: 0, explain: "sich freuen Präteritum: freute mich." },
        { q: "Präposition: «Ich interessiere mich ___ Kunst.»", options: ["für", "an", "auf"], answer: 0, explain: "sich interessieren FÜR." },
      ],
      errors: [
        { q: "Korrigiere: «Ich freue mich auf dich erinnern.»", options: ["Ich erinnere mich an dich.", "Ich freue mich an dich.", "Ich erinnere mich auf dich."], answer: 0, explain: "recordar a alguien = sich erinnern AN + acusativo." },
      ],
    },
  },
  "de-cu-b1-10": {
    tables: [
      {
        title: "Passiv: wird + Partizip II",
        headers: ["Tempus", "Form", "Beispiel"],
        rows: [
          ["Präsens", "wird + PII", "Das Haus wird gebaut."],
          ["Präteritum", "wurde + PII", "Das Haus wurde 1912 gebaut."],
          ["Perfekt", "ist … worden", "Das Haus ist gebaut worden."],
          ["Agens mit von", "… + von + dativo", "geschrieben von Goethe"],
          ["Sinn", "el foco en la acción", "El proceso importa, no el autor"],
        ],
        note: "La pasiva alemana usa werden (¡no sein!): «das Haus WIRD gebaut» (la casa es construida — en proceso). Präteritum: WURDE gebaut. El agente con von: «geschrieben VON Goethe». Perfekt pasivo: «ist gebaut WORDEN» — worden es el participio de werden en pasiva, el giro de bola extra.",
      },
    ],
    moreExamples: [
      { it: "Die Brücke wurde 1897 eröffnet.", es: "El puente fue inaugurado en 1897." },
      { it: "Neue Regeln werden jedes Jahr eingeführt.", es: "Nuevas reglas son introducidas cada año." },
      { it: "Der Roman wurde von einer Studentin geschrieben.", es: "La novela fue escrita por una estudiante." },
    ],
    drills: {
      transform: [
        { q: "Passiv: «Das Haus ___ gerade ___ (bauen).»", options: ["wird / gebaut", "ist / gebaut", "hat / gebaut"], answer: 0, explain: "pasiva presente: wird + gebaut." },
        { q: "Passiv Präteritum: «Die Brücke ___ 1897 ___ (eröffnen).»", options: ["wurde / eröffnet", "wird / eröffnet", "war / eröffnete"], answer: 0, explain: "pasiva en pasado: wurde eröffnet." },
      ],
      errors: [
        { q: "Korrigiere: «Das Haus ist gebaut werden.» (proceso actual)", options: ["Das Haus wird gebaut.", "Das Haus ist gebaut worden jetzt.", "Das Haus hat gebaut geworden."], answer: 0, explain: "Pasiva de proceso: WIRD gebaut (sein-passiva = estado)." },
      ],
    },
  },
  "de-cu-b1-11": {
    tables: [
      {
        title: "Konjunktiv II de deseo + sollte (consejo)",
        headers: ["Funktion", "Formel", "Beispiel"],
        rows: [
          ["deseo", "hätte gern + sust.", "Ich hätte gern mehr Zeit."],
          ["deseo", "wäre gern + lugar/estado", "Ich wäre gern am Meer."],
          ["deseo verbal", "könnte + inf.", "Ich könnte den ganzen Tag schlafen."],
          ["consejo", "sollte + inf.", "Du solltest mehr schlafen."],
          ["consejo fuerte", "wäre gut, wenn + KII", "Es wäre gut, wenn du kommen würdest."],
        ],
        note: "El deseo en Konjunktiv II: hätte GERN (quisiera tener), wäre GERN (quisiera estar), könnte (podría). El consejo alemán tiene dueño: SOLLTE — «du solltest mehr schlafen» = deberías dormir más. Es el consejo estándar de amistades y médicos: suave, directo, sin sermones.",
      },
    ],
    moreExamples: [
      { it: "Ich wäre gern dabei gewesen.", es: "Habría querido estar allí." },
      { it: "Du solltest das Buch lesen.", es: "Deberías leer el libro." },
      { it: "Man sollte mehr reisen.", es: "Uno debería viajar más." },
    ],
    drills: {
      transform: [
        { q: "Wunsch: «Ich ___ gern mehr Urlaub.» (haben)", options: ["hätte", "wäre", "könnte"], answer: 0, explain: "quisiera tener → hätte gern." },
        { q: "Rat: «Du ___ mehr Wasser trinken.»", options: ["solltest", "willst", "musst nicht"], answer: 0, explain: "consejo → sollte." },
      ],
      errors: [
        { q: "Korrigiere: «Ich wäre gern ein Auto.» (quisiera tener)", options: ["Ich hätte gern ein Auto.", "Ich wäre gern ein Auto gern.", "Ich könnte gern ein Auto."], answer: 0, explain: "Tener → hätte gern; wäre gern = quisiera SER." },
      ],
    },
  },
  "de-cu-b1-12": {
    tables: [
      {
        title: "Conectores argumentativos",
        headers: ["Konnektor", "Funktion", "Beispiel"],
        rows: [
          ["einerseits… andererseits", "por un lado… por otro", "Einerseits ist es teuer, andererseits gut."],
          ["außerdem", "además", "Außerdem spart es Zeit."],
          ["folglich", "por consiguiente", "Folglich müssen wir handeln."],
          ["zum Schluss", "para terminar", "Zum Schluss möchte ich danken."],
          ["Stellung", "conector → ¡verbo antes del sujeto!", "Außerdem SPART es Zeit."],
        ],
        note: "Los conectores adverbiales (außerdem, folglich, zum Schluss) OCUPAN posición 1 y empujan el verbo antes del sujeto: «Außerdem spart es Zeit». Uno por frase. «Einerseits… andererseits» abre el pros y contras — el esqueleto de cualquier Meinung (opinión) alemana.",
      },
    ],
    moreExamples: [
      { it: "Einerseits gefällt mir die Stadt, andererseits ist sie laut.", es: "Por un lado me gusta la ciudad, por otro es ruidosa." },
      { it: "Darüber hinaus ist es umweltfreundlich.", es: "Además es ecológico." },
      { it: "Folglich habe ich gekündigt.", es: "En consecuencia, renuncié." },
    ],
    drills: {
      transform: [
        { q: "Stellung: «Außerdem ___ es Zeit.» (sparen)", options: ["spart", "es spart", "spare"], answer: 0, explain: "Conector en pos. 1 → verbo pos. 2: spart es." },
        { q: "Pro und Contra: «___ ist es günstig, ___ ist die Qualität schlecht.»", options: ["Einerseits / andererseits", "Einerseits / deshalb", "Außerdem / andererseits"], answer: 0, explain: "La pareja fija: einerseits… andererseits." },
      ],
      errors: [
        { q: "Korrigiere: «Außerdem es spart Zeit.»", options: ["Außerdem spart es Zeit.", "Außerdem sparen es Zeit doch.", "Zeit spart außerdem es."], answer: 0, explain: "El conector empuja el verbo a posición 2: spart ES Zeit." },
      ],
    },
  },
};
