/* ── DE · Nachrichten B1, Teil B (v9.39) ──────────────────────────────
   Fortsetzung von lang/de/news-b.ts: ids de-news-b1-04 … de-news-b1-15
   (B1: 3 → 15 Notizen). Hochdeutsch, Methode VOA Learning English: 4-5
   kurze Absätze ≈ 105-150 Wörter, Präteritum + Nebensätze (weil/dass/
   wenn), Zitat einer lokalen Fachstimme, Ausblick am Ende. Felder `.it`
   = Deutsch, `.es` = Spanisch. */

import type { NewsItem } from "../../news";

export const DE_NEWS_B1B: NewsItem[] = [

  /* ═══ B1 · 4 — Wissenschaft ═══ */
  {
    id: "de-news-b1-04", cat: "scienza", level: "B1", place: "Mainz", minutes: 3,
    title: "Das Geheimnis des Regengeruchs",
    titleEs: "El secreto del olor a lluvia",
    lead: {
      it: "Wenn nach trockenen Wochen der erste Regen fällt, liegt plötzlich ein warmer Geruch in der Luft. Forscher in Mainz haben jetzt erklärt, woher er kommt — die Antwort liegt im Boden.",
      es: "Cuando tras semanas secas cae la primera lluvia, de pronto flota en el aire un olor cálido. Investigadores de Maguncia ya han explicado de dónde viene — la respuesta está en el suelo.",
    },
    paragraphs: [
      { it: "Viele Menschen kennen dieses Gefühl: Nach einem trockenen Sommer begann es zu regnen, und die Luft roch plötzlich warm und intensiv. Kinder blieben auf der Straße stehen und schnupperten; Erwachsene lächelten, weil sie an ihre Kindheit dachten.",
      es: "Muchas personas conocen esta sensación: tras un verano seco empezó a llover, y el aire olía de repente cálido e intenso. Los niños se quedaban parados en la calle y olfateaban; los adultos sonreían, porque pensaban en su infancia." },
      { it: "Chemiker an der Universität Mainz untersuchten diesen Duft jahrelang. Sie fanden heraus, dass der Boden ihn erzeugt: Winzige Lebewesen im Erdreich senden einen Stoff aus, den man erst bemerkt, wenn Regentropfen die Erde aufschlagen.",
      es: "Químicos de la Universidad de Maguncia investigaron durante años ese aroma. Descubrieron que el suelo lo genera: unos seres diminutos de la tierra emiten una sustancia que solo se nota cuando las gotas de lluvia golpean el suelo." },
      { it: "«Der Regen ist nicht der Künstler», sagte die Chemikerin Frau Weber. «Er ist nur der Trommler. Die Erde spielt die Melodie, weil sie seit Wochen darauf wartet.» Ihr Team sammelte Proben aus Gärten in der ganzen Region.",
      es: "«La lluvia no es la artista», dijo la química, la señora Weber. «Es solo la tamborilera. La tierra interpreta la melodía, porque lleva semanas esperándola.» Su equipo recogió muestras de jardines de toda la región." },
      { it: "Die Studie wurde schnell bekannt, weil der Geruch starke Erinnerungen weckt. Die Forscher vermuten, dass die Menschen den Duft mögen, weil er Sicherheit bedeutet: Endlich gibt es Wasser, das Leben geht weiter.",
      es: "El estudio se hizo conocido enseguida, porque el olor despierta recuerdos intensos. Los investigadores suponen que el aroma gusta a las personas porque significa seguridad: por fin hay agua, la vida sigue." },
    ],
    words: [
      { it: "der Geruch / die Gerüche", es: "el olor / los olores" },
      { it: "das Erdreich", es: "la tierra, el suelo" },
      { it: "der Stoff / die Stoffe", es: "la sustancia, la materia" },
      { it: "die Erinnerung / die Erinnerungen", es: "el recuerdo / los recuerdos" },
      { it: "die Probe / die Proben", es: "la muestra / las muestras", note: "distinto de «probieren» (probar)" },
      { it: "aufschlagen", es: "golpear, chocar contra" },
    ],
    questions: [
      { q: "¿Qué hacían los niños en la calle cuando empezaba a llover?", options: ["Sie blieben stehen und schnupperten", "Sie liefen schnell nach Hause", "Sie spielten im Regen", "Sie machten Fotos"], answer: 0, why: "«Kinder blieben auf der Straße stehen und schnupperten»" },
      { q: "¿Qué descubrieron los químicos sobre el origen del olor?", options: ["Die Wolken erzeugen ihn", "Der Boden erzeugt ihn — winzige Lebewesen senden einen Stoff aus", "Die Fabriken der Stadt", "Der Wind bringt ihn aus dem Süden"], answer: 1, why: "«Sie fanden heraus, dass der Boden ihn erzeugt: Winzige Lebewesen im Erdreich senden einen Stoff aus, den man erst bemerkt, wenn Regentropfen die Erde aufschlagen.»" },
      { q: "¿Qué quiso decir la química Weber con que la lluvia es «solo la tamborilera»?", options: ["Dass Regen gefährlich ist", "Dass man beim Regen trommeln muss", "Dass die Erde den Duft erzeugt und der Regen ihn nur spürbar macht", "Dass Regen Musik macht"], answer: 2, why: "«Er ist nur der Trommler. Die Erde spielt die Melodie, weil sie seit Wochen darauf wartet.»" },
      { q: "¿Por qué creen los investigadores que el olor gusta a las personas?", options: ["Weil er neu ist", "Weil er teuer ist", "Weil er an Ferien erinnert", "Weil er Sicherheit bedeutet: endlich gibt es Wasser"], answer: 3, why: "«Die Forscher vermuten, dass die Menschen den Duft mögen, weil er Sicherheit bedeutet»" },
    ],
    discuss: [
      { it: "Welcher Geruch erinnert Sie an Ihre Kindheit? Beschreiben Sie ihn.", es: "¿Qué olor te recuerda a tu infancia? Descríbelo." },
      { it: "Regen in Ihrer Stadt: Problem oder Geschenk? Warum?", es: "La lluvia en tu ciudad: ¿problema o regalo? ¿Por qué?" },
    ],
  },

  /* ═══ B1 · 5 — Kultur ═══ */
  {
    id: "de-news-b1-05", cat: "cultura", level: "B1", place: "Wolfenbüttel", minutes: 3,
    title: "Wolfenbüttel öffnet seine alten Handschriften für die Welt",
    titleEs: "Wolfenbüttel abre sus antiguos manuscritos al mundo",
    lead: {
      it: "In Wolfenbüttel liegen tausende mittelalterliche Handschriften in dunklen Kammern. Jetzt werden sie Seite für Seite digitalisiert — bald kann jeder die Blätter der Dichter am Bildschirm lesen.",
      es: "En Wolfenbüttel descansan miles de manuscritos medievales en cámaras oscuras. Ahora se digitalizan página por página — pronto cualquiera podrá leer en pantalla las hojas de los poetas.",
    },
    paragraphs: [
      { it: "Die kleine Stadt besitzt eine der ältesten Bibliotheken Europas. Ihre Schätze sammelten sich über Jahrhunderte: Briefe von Gelehrten, Notizen von Dichtern, Bücher mit goldenen Buchstaben. Die Originale blieben meist hinter dicken Türen, weil Licht und Luft sie zerstören können.",
      es: "La pequeña ciudad posee una de las bibliotecas más antiguas de Europa. Sus tesoros se acumularon durante siglos: cartas de eruditos, notas de poetas, libros con letras doradas. Los originales permanecían casi siempre tras puertas gruesas, porque la luz y el aire pueden destruirlos." },
      { it: "Wer eine Handschrift sehen wollte, brauchte Geduld. Studenten warteten oft Wochen auf eine Genehmigung, und jede Seite durfte nur kurz offen bleiben. «Die Bücher waren wie kranke Verwandte», sagt die Bibliothekarin Frau Hoffmann. «Geliebt, aber selten besucht.»",
      es: "Quien quería ver un manuscrito necesitaba paciencia. Los estudiantes esperaban a menudo semanas una autorización, y cada página solo podía quedar abierta un momento. «Los libros eran como parientes enfermos», dice la bibliotecaria, la señora Hoffmann. «Queridos, pero rara vez visitados.»" },
      { it: "Seit diesem Jahr ist das anders. Ein Team digitalisiert die Sammlung, oft bis spät in den Abend; um zwanzig Uhr laufen die Kameras manchmal noch. Bald erscheinen die ersten Blätter im Internet, frei für alle.",
      es: "Desde este año es distinto. Un equipo digitaliza la colección, a menudo hasta entrada la noche; a las veinte, las cámaras siguen encendidas a veces. Pronto aparecerán en internet las primeras hojas, libres para todos." },
      { it: "Wenn Schüler eine alte Notiz öffnen, lesen sie anders als bei modernen Texten: langsamer, genauer, fast wie eine Entdeckung. Lehrer hoffen, dass die digitalen Schätze bald in jedem Klassenzimmer ankommen.",
      es: "Cuando un escolar abre una nota antigua, lee de otro modo que con textos modernos: más despacio, con más precisión, casi como un descubrimiento. Los profesores esperan que los tesoros digitales lleguen pronto a todas las aulas." },
    ],
    words: [
      { it: "die Handschrift / die Handschriften", es: "el manuscrito / los manuscritos" },
      { it: "der Gelehrte / die Gelehrten", es: "el erudito / los eruditos" },
      { it: "die Genehmigung", es: "la autorización", note: "sustantivo del verbo genehmigen (autorizar)" },
      { it: "die Sammlung", es: "la colección" },
      { it: "die Kamera / die Kameras", es: "la cámara" },
      { it: "das Klassenzimmer", es: "el aula", note: "compuesto: Klasse (clase) + Zimmer (habitación)" },
    ],
    questions: [
      { q: "¿Qué tesoros se acumularon en la biblioteca durante siglos?", options: ["Nur moderne Romane", "Briefe von Gelehrten, Notizen von Dichtern und Bücher mit goldenen Buchstaben", "Zeitungen aus der Region", "Karten und Stadtpläne"], answer: 1, why: "«Briefe von Gelehrten, Notizen von Dichtern, Bücher mit goldenen Buchstaben.»" },
      { q: "¿Con qué compara la bibliotecaria los libros antiguos?", options: ["Wie alte Freunde", "Wie teure Möbel", "Wie kranke Verwandte — geliebt, aber selten besucht", "Wie neue Computer"], answer: 2, why: "«Die Bücher waren wie kranke Verwandte»" },
      { q: "¿Por qué permanecían los originales tras puertas gruesas?", options: ["Weil sie gestohlen werden sollten", "Weil niemand sie sehen wollte", "Weil der Platz fehlte", "Weil Licht und Luft sie zerstören können"], answer: 3, why: "«Die Originale blieben meist hinter dicken Türen, weil Licht und Luft sie zerstören können.»" },
      { q: "¿Cómo leerán los escolares una nota antigua, según la noticia?", options: ["Langsamer und genauer — fast wie eine Entdeckung", "Schneller als moderne Texte", "Überhaupt nicht", "Nur mit Hilfe von Robotern"], answer: 0, why: "«Wenn Schüler eine alte Notiz öffnen, lesen sie anders als bei modernen Texten: langsamer, genauer, fast wie eine Entdeckung.»" },
    ],
    discuss: [
      { it: "Was würden Sie lieber lesen: ein echtes altes Buch oder eine digitale Kopie? Warum?", es: "¿Qué preferirías leer: un libro antiguo de verdad o una copia digital? ¿Por qué?" },
      { it: "Gibt es in Ihrer Stadt einen Ort voller alter Bücher? Erzählen Sie.", es: "¿Hay en tu ciudad un lugar lleno de libros antiguos? Cuenta." },
    ],
  },

  /* ═══ B1 · 6 — Geschichte ═══ */
  {
    id: "de-news-b1-06", cat: "storia", level: "B1", place: "Xanten", minutes: 3,
    title: "Xanten macht die Römerzeit sichtbar — mit einer Glasstraße",
    titleEs: "Xanten hace visible la época romana — con un suelo de cristal",
    lead: {
      it: "Bauarbeiter in Xanten trafen beim Graben auf dicke Steinplatten. Was sie fanden, war eine römische Straße — und die Stadt entschied, dass jeder sie sehen soll.",
      es: "Unos obreros de Xanten dieron al cavar con gruesas losas de piedra. Lo que encontraron era una calle romana — y la ciudad decidió que todos debían poder verla.",
    },
    paragraphs: [
      { it: "Die Arbeiter wollten nur ein Rohr verlegen, als ihre Maschine plötzlich auf Stein stieß. Sie hielten sofort an, weil in Xanten fast jeder Quadratmeter Geschichte sein kann: Hier stand vor zweitausend Jahren eine römische Stadt.",
      es: "Los obreros solo querían colocar una tubería cuando su máquina chocó de pronto con la piedra. Se detuvieron de inmediato, porque en Xanten casi cada metro cuadrado puede ser historia: aquí se alzaba hace dos mil años una ciudad romana." },
      { it: "Archäologen legten die Platten frei und entdeckten eine gepflasterte Straße aus der Römerzeit. Auf den Steinen waren noch Spuren schwerer Wagenräder zu erkennen. «Hier spürt man den Alltag», sagte der Archäologe Herr Simon. «Kein Kaiser, kein Denkmal — einfach ein Weg zur Arbeit.»",
      es: "Los arqueólogos dejaron al descubierto las losas y descubrieron una calle empedrada de la época romana. En las piedras aún se reconocían huellas de ruedas pesadas. «Aquí se siente la vida cotidiana», dijo el arqueólogo, el señor Simon. «Ningún emperador, ningún monumento — simplemente un camino al trabajo.»" },
      { it: "Die Stadt hatte eine ungewöhnliche Idee: Statt die Funde wegzutransportieren, ließ sie eine Glasfläche in den Boden einbauen. Wer heute über den Platz geht, sieht die römischen Steine unter seinen Schuhen — geschützt und nah.",
      es: "La ciudad tuvo una idea poco común: en lugar de llevarse los hallazgos, hizo instalar en el suelo una superficie de cristal. Quien hoy cruza la plaza ve las piedras romanas bajo sus zapatos — protegidas y cerca." },
      { it: "Historiker hoffen, dass der Glaspfad berühmt wird, weil er Geschichte fühlbar macht. Tausende Besucher kamen schon im ersten Monat. Wenn sie auf dem Glas stehen, fotografieren viele zuerst ihre Schuhe — und dann die zweitausend Jahre darunter.",
      es: "Los historiadores esperan que el paso de cristal se haga famoso, porque vuelve tangible la historia. Miles de visitantes vinieron ya en el primer mes. Cuando se paran sobre el cristal, muchos fotografían primero sus zapatos — y después los dos mil años que hay debajo." },
    ],
    words: [
      { it: "die Platte / die Platten", es: "la losa / las losas" },
      { it: "der Archäologe", es: "el arqueólogo" },
      { it: "die Römerzeit", es: "la época romana" },
      { it: "der Fund / die Funde", es: "el hallazgo / los hallazgos", note: "no confundir con «der Fonds» (el fondo)" },
      { it: "die Glasfläche", es: "la superficie de cristal" },
      { it: "der Alltag", es: "la vida cotidiana" },
    ],
    questions: [
      { q: "¿Qué querían hacer los obreros cuando su máquina chocó con la piedra?", options: ["Ein Haus bauen", "Nach Gold suchen", "Ein Rohr verlegen", "Die Straße reparieren"], answer: 2, why: "«Die Arbeiter wollten nur ein Rohr verlegen»" },
      { q: "¿Qué se podía reconocer todavía sobre las piedras?", options: ["Moderne Inschriften", "Ein Bild von einem Kaiser", "Nichts Besonderes", "Spuren schwerer Wagenräder"], answer: 3, why: "«Auf den Steinen waren noch Spuren schwerer Wagenräder zu erkennen.»" },
      { q: "¿Por qué se detuvieron los obreros de inmediato?", options: ["Weil in Xanten fast jeder Quadratmeter Geschichte sein kann", "Weil die Maschine kaputt war", "Weil es regnete", "Weil die Pause begann"], answer: 0, why: "«Sie hielten sofort an, weil in Xanten fast jeder Quadratmeter Geschichte sein kann»" },
      { q: "¿Qué idea tuvo la ciudad con los hallazgos?", options: ["Sie verkaufte die Steine", "Sie baute eine Glasfläche in den Boden ein, damit jeder die Steine sehen kann", "Sie baute ein Museum aus Beton", "Sie ließ alles im Boden verschwinden"], answer: 1, why: "«Statt die Funde wegzutransportieren, ließ sie eine Glasfläche in den Boden einbauen.»" },
    ],
    discuss: [
      { it: "Was würde man finden, wenn man unter Ihrer Stadt graben würde? Raten Sie.", es: "¿Qué se encontraría si se cavara bajo tu ciudad? Adivina." },
      { it: "Alter Schutz oder moderne Nutzung: Was ist wichtiger für Funde? Warum?", es: "Protección antigua o uso moderno: ¿qué es más importante para los hallazgos? ¿Por qué?" },
    ],
  },

  /* ═══ B1 · 7 — Wirtschaft ═══ */
  {
    id: "de-news-b1-07", cat: "economia", level: "B1", place: "Münster", minutes: 3,
    title: "Münster: die Wirtschaft auf zwei Rädern",
    titleEs: "Münster: la economía sobre dos ruedas",
    lead: {
      it: "In Münster gibt es mehr Fahrräder als Einwohner. Werkstätten, Kuriere und ein großes Fahrradparkhaus — das Rad wurde in der Stadt zu einem wichtigen Wirtschaftszweig.",
      es: "En Münster hay más bicicletas que habitantes. Talleres, mensajeros y un gran aparcamiento de bicis — la bicicleta se ha convertido en la ciudad en un importante sector económico.",
    },
    paragraphs: [
      { it: "Vor fünfzig Jahren begannen Stadtplaner, eigene Wege für Fahrräder zu bauen, weil der Autoverkehr die Innenstadt erstickte. Damals lachten viele über die Idee. Heute rollen morgens um acht Uhr Tausende Räder durch die Straßen, und niemand lacht mehr.",
      es: "Hace cincuenta años los urbanistas empezaron a construir vías propias para bicicletas, porque el tráfico de coches ahogaba el centro. Entonces muchos se rieron de la idea. Hoy, por la mañana a las ocho, ruedan miles de bicis por las calles y ya nadie se ríe." },
      { it: "Der Wandel schuf Arbeit. Hunderte Werkstätten reparieren Räder, Kuriere liefern Briefe und Essen auf zwei Rädern, und am Bahnhof steht eines der größten Fahrradparkhäuser des Landes. Ökonomen rechneten aus, dass die Radwirtschaft der Stadt mehr Geld bringt als ein kleines Kaufhaus.",
      es: "El cambio creó empleo. Cientos de talleres reparan bicis, los mensajeros reparten cartas y comida sobre dos ruedas, y junto a la estación se alza uno de los mayores aparcamientos de bicicletas del país. Los economistas calcularon que la economía de la bici deja a la ciudad más dinero que unos grandes almacenes pequeños." },
      { it: "«Das Rad ist hier kein Sportgerät», sagt die Stadtplanerin Frau Neumann. «Es ist ein Werkzeug wie ein Hammer. Die Leute benutzen es, weil es schnell, billig und ehrlich ist.»",
      es: "«La bici aquí no es un artículo deportivo», dice la urbanista, la señora Neumann. «Es una herramienta como un martillo. La gente la usa porque es rápida, barata y honesta.»" },
      { it: "Andere Städte schicken inzwischen Delegationen nach Münster. Wenn die Gäste die Radwege sehen, fragen sie immer dasselbe: Was kostet das alles? Frau Neumann antwortet dann kurz: weniger, als das Auto je gekostet hat.",
      es: "Mientras tanto, otras ciudades envían delegaciones a Münster. Cuando los visitantes ven los carriles bici, preguntan siempre lo mismo: ¿cuánto cuesta todo eso? La señora Neumann responde entonces brevemente: menos de lo que el coche ha costado jamás." },
    ],
    words: [
      { it: "die Werkstatt / die Werkstätten", es: "el taller / los talleres" },
      { it: "der Kurier / die Kuriere", es: "el mensajero / los mensajeros" },
      { it: "die Stadtplanerin", es: "la urbanista" },
      { it: "die Innenstadt", es: "el centro de la ciudad" },
      { it: "das Werkzeug", es: "la herramienta" },
      { it: "der Radweg / die Radwege", es: "el carril bici" },
    ],
    questions: [
      { q: "¿Por qué empezaron los urbanistas a construir vías para bicicletas hace cincuenta años?", options: ["Weil Fahrräder modern waren", "Weil das Öl fehlte", "Weil ein Gesetz es befahl", "Weil der Autoverkehr die Innenstadt erstickte"], answer: 3, why: "«Vor fünfzig Jahren begannen Stadtplaner, eigene Wege für Fahrräder zu bauen, weil der Autoverkehr die Innenstadt erstickte.»" },
      { q: "¿Qué calcularon los economistas?", options: ["Dass die Radwirtschaft der Stadt mehr Geld bringt als ein kleines Kaufhaus", "Dass das Fahrradparkhaus zu teuer ist", "Dass Kuriere langsamer sind", "Dass Autos besser für die Stadt sind"], answer: 0, why: "«Ökonomen rechneten aus, dass die Radwirtschaft der Stadt mehr Geld bringt als ein kleines Kaufhaus.»" },
      { q: "¿Con qué compara la urbanista la bicicleta?", options: ["Mit einem Spielzeug", "Mit einem Werkzeug wie ein Hammer", "Mit einem Sportgerät", "Mit einem teuren Hobby"], answer: 1, why: "«Es ist ein Werkzeug wie ein Hammer.»" },
      { q: "¿Cómo responde la señora Neumann a la pregunta de las delegaciones sobre los costes?", options: ["Mit einer langen Präsentation", "Sie schweigt", "Kurz: weniger, als das Auto je gekostet hat", "Sie nennt eine genaue Zahl in Euro"], answer: 2, why: "«Frau Neumann antwortet dann kurz: weniger, als das Auto je gekostet hat.»" },
    ],
    discuss: [
      { it: "Wie viele Räder stehen vor Ihrem Haus? Zählen Sie!", es: "¿Cuántas bicis hay delante de tu casa? ¡Cuenta!" },
      { it: "Würde Ihre Stadt mit mehr Radwegen besser funktionieren? Warum (nicht)?", es: "¿Funcionaría mejor tu ciudad con más carriles bici? ¿Por qué (no)?" },
    ],
  },

  /* ═══ B1 · 8 — Sport ═══ */
  {
    id: "de-news-b1-08", cat: "sport", level: "B1", place: "Chemnitz", minutes: 3,
    title: "Chemnitz macht Klettern zum Schulsport",
    titleEs: "Chemnitz convierte la escalada en deporte escolar",
    lead: {
      it: "In Chemnitz hängen seit diesem Schuljahr Schüler an Seilen und bunten Griffen. An mehreren Schulen wurde Klettern zum Schulfach — die Wartelisten sind lang.",
      es: "En Chemnitz, desde este curso escolar, hay escolares colgados de cuerdas y de presas de colores. En varias escuelas la escalada se ha convertido en asignatura — y las listas de espera son largas.",
    },
    paragraphs: [
      { it: "Die Turnhalle einer Chemnitzer Schule sieht seit dem Herbst anders aus: An der hohen Wand leuchten bunte Griffe, und unter der Decke hängen lange Seile. Früher standen hier nur Kästen und Matten; heute klettert jede Klasse mindestens einmal pro Woche.",
      es: "El gimnasio de una escuela de Chemnitz luce distinto desde el otoño: en la alta pared brillan presas de colores y del techo cuelgan cuerdas largas. Antes aquí solo había cajones y colchonetas; hoy escala cada clase al menos una vez por semana." },
      { it: "Die Idee brachte ein Sportlehrer mit, der früher in den Bergen kletterte. Er überzeugte die Schulleitung, weil Klettern den ganzen Körper trainiert — und auch den Kopf: Wer oben hängt, muss ruhig atmen und genau denken.",
      es: "La idea la trajo un profesor de educación física que antes escalaba en las montañas. Convenció a la dirección, porque la escalada entrena todo el cuerpo — y también la cabeza: quien cuelga arriba debe respirar con calma y pensar con precisión." },
      { it: "«Die Schüler verändern sich», sagt die Sportlehrerin Frau Kirchner. «Unruhige Kinder werden plötzlich geduldig, weil sie wissen, dass ein falscher Griff sie zurückwirft.» Am Nachmittag ist die Halle für alle offen; um sechzehn Uhr ist sie meist voll.",
      es: "«Los escolares cambian», dice la profesora de deporte, la señora Kirchner. «Los niños inquietos se vuelven de repente pacientes, porque saben que una presa equivocada los hace retroceder.» Por la tarde el pabellón está abierto a todos; a las dieciséis suele estar lleno." },
      { it: "Eltern waren zuerst skeptisch und fragten nach den Risiken. Die Schule antwortete mit Zahlen: Beim Fußball gab es in den vergangenen Jahren mehr Verletzungen als beim Klettern. Wenn das Projekt erfolgreich bleibt, wollen andere Städte nachziehen.",
      es: "Los padres eran al principio escépticos y preguntaron por los riesgos. La escuela respondió con cifras: en el fútbol hubo en los últimos años más lesiones que en la escalada. Si el proyecto sigue con éxito, otras ciudades quieren imitarlo." },
    ],
    words: [
      { it: "der Griff / die Griffe", es: "la presa, el agarre", note: "viene de greifen (agarrar)" },
      { it: "das Seil / die Seile", es: "la cuerda / las cuerdas" },
      { it: "die Matte / die Matten", es: "la colchoneta" },
      { it: "klettern", es: "escalar" },
      { it: "geduldig", es: "paciente" },
      { it: "die Verletzung / die Verletzungen", es: "la lesión / las lesiones" },
    ],
    questions: [
      { q: "¿Cómo ha cambiado el gimnasio desde el otoño?", options: ["An der hohen Wand leuchten bunte Griffe, unter der Decke hängen lange Seile", "Es gibt jetzt einen Swimmingpool", "Die Halle wurde geschlossen", "Nichts hat sich verändert"], answer: 0, why: "«An der hohen Wand leuchten bunte Griffe, und unter der Decke hängen lange Seile.»" },
      { q: "¿Qué debe hacer quien cuelga arriba, según el profesor de deporte?", options: ["Schnell nach unten springen", "Ruhig atmen und genau denken", "Die Augen schließen", "Um Hilfe rufen"], answer: 1, why: "«Wer oben hängt, muss ruhig atmen und genau denken.»" },
      { q: "¿Por qué se vuelven pacientes los niños inquietos?", options: ["Weil sie müde sind", "Weil der Lehrer streng ist", "Weil sie wissen, dass ein falscher Griff sie zurückwirft", "Weil die Halle still ist"], answer: 2, why: "«Unruhige Kinder werden plötzlich geduldig, weil sie wissen, dass ein falscher Griff sie zurückwirft.»" },
      { q: "¿Con qué respondió la escuela a los padres escépticos?", options: ["Mit einem Verbot des Kletterns", "Mit einem Brief", "Mit einem Arztbericht", "Mit Zahlen: Beim Fußball gab es mehr Verletzungen als beim Klettern"], answer: 3, why: "«Beim Fußball gab es in den vergangenen Jahren mehr Verletzungen als beim Klettern.»" },
    ],
    discuss: [
      { it: "Welcher Sport hat Ihnen Geduld beigebracht? Erzählen Sie.", es: "¿Qué deporte te ha enseñado paciencia? Cuenta." },
      { it: "Sollen Schulen mehr neue Sportarten anbieten? Welche und warum?", es: "¿Deberían las escuelas ofrecer más deportes nuevos? ¿Cuáles y por qué?" },
    ],
  },

  /* ═══ B1 · 9 — Gesellschaft ═══ */
  {
    id: "de-news-b1-09", cat: "societa", level: "B1", place: "Bielefeld", minutes: 3,
    title: "Der Laden, in dem man Dinge ausleiht statt kauft",
    titleEs: "La tienda donde se piden prestadas las cosas en vez de comprarlas",
    lead: {
      it: "In Bielefeld gibt es seit einem Jahr einen Leihladen. Bohrer, Zelte, Kameras, Kuchenformen — Mitglieder leihen aus, was selten gebraucht wird, und lernen dabei ihre Nachbarn kennen.",
      es: "En Bielefeld hay desde hace un año una tienda de préstamos. Taladros, tiendas de campaña, cámaras, moldes de pastel — los socios toman prestado lo que casi nunca se usa y de paso conocen a sus vecinos.",
    },
    paragraphs: [
      { it: "Die Idee ist einfach: Nicht jeder Haushalt braucht einen eigenen Bohrer. Das Gerät steht meist im Keller, weil es nur zweimal im Jahr benutzt wird. Im Leihladen liegt es stattdessen im Regal und arbeitet für das ganze Viertel.",
      es: "La idea es sencilla: no hace falta que cada hogar tenga su propio taladro. El aparato pasa la mayor parte del año en el sótano, porque solo se usa dos veces. En la tienda de préstamos está en cambio en la estantería y trabaja para todo el barrio." },
      { it: "Wer Mitglied wird, zahlt einen kleinen Beitrag pro Jahr und darf dann fast alles ausleihen. Zwei Frauen gründeten den Laden, weil es solche Geschäfte in den Niederlanden schon lange gibt. Heute zählt der Verein mehr als dreihundert Mitglieder.",
      es: "Quien se hace socio paga una pequeña cuota al año y entonces puede llevarse prestado casi todo. Dos mujeres fundaron la tienda, porque en los Países Bajos hace tiempo que existen esos negocios. Hoy la asociación cuenta con más de trescientos socios." },
      { it: "«Wir verleihen Gegenstände und sammeln dabei Nachbarn ein», sagt Frau Behrens, eine der Gründerinnen. «Wenn jemand zum ersten Mal hereinkommt, kennt er niemanden. Beim dritten Besuch redet er wie ein alter Freund.»",
      es: "«Prestamos objetos y de paso reunimos vecinos», dice la señora Behrens, una de las fundadoras. «Cuando alguien entra por primera vez, no conoce a nadie. A la tercera visita habla como un viejo amigo.»" },
      { it: "Die Stadt unterstützt das Projekt mit einem kleinen Raum. Soziologen erklärten, dass die Idee wichtig ist, weil sie Müll spart und Menschen zusammenbringt: Teilen ist billiger und persönlicher als Kaufen.",
      es: "La ciudad apoya el proyecto con un pequeño local. Los sociólogos explicaron que la idea es importante, porque ahorra basura y junta a las personas: compartir es más barato y más personal que comprar." },
    ],
    words: [
      { it: "der Bohrer / die Bohrer", es: "el taladro" },
      { it: "das Mitglied / die Mitglieder", es: "el socio / los socios", note: "Mitglied werden = hacerse socio" },
      { it: "der Nachbar / die Nachbarn", es: "el vecino / los vecinos" },
      { it: "der Beitrag", es: "la cuota, la aportación" },
      { it: "das Regal / die Regale", es: "la estantería" },
      { it: "ausleihen", es: "pedir prestado, prestar", note: "verbo separable: ich leihe … aus" },
    ],
    questions: [
      { q: "¿Dónde está el taladro la mayor parte del año en un hogar normal, según la noticia?", options: ["In der Küche", "Meist im Keller", "Im Leihladen", "Im Büro"], answer: 1, why: "«Das Gerät steht meist im Keller, weil es nur zweimal im Jahr benutzt wird.»" },
      { q: "¿Por qué fundaron dos mujeres el negocio?", options: ["Weil Bohrer zu teuer wurden", "Weil die Stadt es befahl", "Weil es solche Geschäfte in den Niederlanden schon lange gibt", "Weil sie Geld verdienen wollten"], answer: 2, why: "«Zwei Frauen gründeten den Laden, weil es solche Geschäfte in den Niederlanden schon lange gibt.»" },
      { q: "¿Qué reúne la tienda además de objetos, según la fundadora?", options: ["Geld", "Alte Möbel", "Briefmarken", "Nachbarn — aus Fremden werden Freunde"], answer: 3, why: "«Wir verleihen Gegenstände und sammeln dabei Nachbarn ein»" },
      { q: "¿Por qué explicaron los sociólogos que la idea es importante?", options: ["Weil sie Müll spart und Menschen zusammenbringt", "Weil sie Gewinn macht", "Weil sie modern aussieht", "Weil der Raum billig ist"], answer: 0, why: "«Soziologen erklärten, dass die Idee wichtig ist, weil sie Müll spart und Menschen zusammenbringt»" },
    ],
    discuss: [
      { it: "Welche Gegenstände könnten Sie ausleihen statt kaufen? Nennen Sie drei.", es: "¿Qué objetos podrías pedir prestados en vez de comprar? Menciona tres." },
      { it: "Kennen Sie Ihre Nachbarn? Was teilen Sie schon mit ihnen?", es: "¿Conoces a tus vecinos? ¿Qué compartes ya con ellos?" },
    ],
  },

  /* ═══ B1 · 10 — Wissenschaft ═══ */
  {
    id: "de-news-b1-10", cat: "scienza", level: "B1", place: "Konstanz", minutes: 3,
    title: "Fische, die zählen können: ein Experiment in Konstanz",
    titleEs: "Peces que saben contar: un experimento en Constanza",
    lead: {
      it: "Können Fische zählen? Forscher in Konstanz gaben Buntbarschen eine Aufgabe, die einfach klingt: Schwimm zur größeren Gruppe. Die Tiere machten kaum Fehler.",
      es: "¿Saben contar los peces? Investigadores de Constanza dieron a unos cíclidos una tarea que suena fácil: nada hacia el grupo más grande. Los animales casi no se equivocaron.",
    },
    paragraphs: [
      { it: "Im Labor der Universität Konstanz schwammen kleine Buntbarsche in flachen Becken. Die Forscher zeigten ihnen zwei Karten: auf der einen zwei Punkte, auf der anderen drei. Die Fische lernten schnell, dass nur die Karte mit mehr Punkten Futter brachte.",
      es: "En el laboratorio de la Universidad de Constanza nadaban pequeños cíclidos en acuarios planos. Los investigadores les mostraron dos tarjetas: en una, dos puntos; en la otra, tres. Los peces aprendieron rápido que solo la tarjeta con más puntos traía comida." },
      { it: "Danach wurde die Aufgabe schwerer. Die Punkte verwandelten sich in kleine Bilder von Fischen, und die Farben wechselten ständig. Die Barsche wählten trotzdem meist die größere Gruppe — sogar dann, wenn der Unterschied nur ein Tier betrug.",
      es: "Después la tarea se volvió más difícil. Los puntos se transformaron en pequeños dibujos de peces y los colores cambiaban sin parar. Los cíclidos eligieron aun así casi siempre el grupo mayor — incluso cuando la diferencia era de un solo animal." },
      { it: "«Wir waren erstaunt, wie lange die Tiere konzentriert blieben», sagte die Biologin Frau Ackermann. «Sie schauten, verglichen und entschieden ruhig. Im Wasser passiert mehr Denken, als die Menschen früher glaubten.»",
      es: "«Nos sorprendió lo concentrados que permanecían los animales», dijo la bióloga, la señora Ackermann. «Miraban, comparaban y decidían con calma. En el agua sucede más pensamiento del que la gente creía antes.»" },
      { it: "Warum ist das wichtig? Die Forscher vermuten, dass Zählen in der Natur über Leben und Tod entscheidet: Wer die größere Gruppe sieht, weiß, wo Sicherheit ist. Das Team plant jetzt ein neues Experiment mit Stichlingen, weil diese Fische auch in kaltem Wasser zählen könnten.",
      es: "¿Por qué importa? Los investigadores suponen que contar decide en la naturaleza sobre la vida y la muerte: quien ve el grupo mayor sabe dónde está la seguridad. El equipo planea ahora un nuevo experimento con espinosos, porque quizá estos peces también cuenten en agua fría." },
    ],
    words: [
      { it: "das Becken / die Becken", es: "el acuario, la pileta" },
      { it: "die Karte / die Karten", es: "la tarjeta / las tarjetas" },
      { it: "das Futter", es: "la comida (de animales)" },
      { it: "die Gruppe / die Gruppen", es: "el grupo / los grupos" },
      { it: "der Stichling / die Stichlinge", es: "el espinoso (pez de agua fría)" },
      { it: "das Experiment", es: "el experimento" },
    ],
    questions: [
      { q: "¿Qué traía la tarjeta con más puntos?", options: ["Musik", "Ein neues Becken", "Futter", "Nichts"], answer: 2, why: "«Die Fische lernten schnell, dass nur die Karte mit mehr Punkten Futter brachte.»" },
      { q: "¿Qué hicieron los cíclidos cuando la tarea se volvió más difícil?", options: ["Sie schwammen weg", "Sie schliefen ein", "Sie verloren das Interesse", "Sie wählten trotzdem meist die größere Gruppe"], answer: 3, why: "«Die Barsche wählten trotzdem meist die größere Gruppe — sogar dann, wenn der Unterschied nur ein Tier betrug.»" },
      { q: "¿Para qué sirve contar en la naturaleza, según los investigadores?", options: ["Wer die größere Gruppe sieht, weiß, wo Sicherheit ist", "Um Beute zu fangen", "Um Menschen zu erkennen", "Um Futter zu riechen"], answer: 0, why: "«Wer die größere Gruppe sieht, weiß, wo Sicherheit ist.»" },
      { q: "¿Con qué peces planea el equipo un nuevo experimento y por qué?", options: ["Mit Haien, weil sie groß sind", "Mit Stichlingen, weil diese auch in kaltem Wasser zählen könnten", "Mit Delfinen, weil sie klug sind", "Mit Goldfischen, weil sie beliebt sind"], answer: 1, why: "«Das Team plant jetzt ein neues Experiment mit Stichlingen, weil diese Fische auch in kaltem Wasser zählen könnten.»" },
    ],
    discuss: [
      { it: "Welche Tiere haben Sie schon zählen sehen oder davon gehört? Erzählen Sie.", es: "¿Qué animales has visto o has oído que saben contar? Cuenta." },
      { it: "Ist Zählen im Alltag noch wichtig, wenn Computer rechnen? Warum?", es: "¿Sigue siendo importante contar en el día a día, si los ordenadores calculan? ¿Por qué?" },
    ],
  },

  /* ═══ B1 · 11 — Kultur ═══ */
  {
    id: "de-news-b1-11", cat: "cultura", level: "B1", place: "Bamberg", minutes: 3,
    title: "Bamberg schickt Musiker in die Klassenzimmer",
    titleEs: "Bamberg envía músicos a las aulas",
    lead: {
      it: "In Bamberg besuchen Musiker regelmäßig Schulklassen. Sie spielen nicht nur vor — sie erklären, proben und lassen Kinder Instrumente testen. Der Applaus ist garantiert.",
      es: "En Bamberg los músicos visitan periódicamente las clases. No solo tocan delante — explican, ensayan y dejan que los niños prueben instrumentos. El aplauso está garantizado.",
    },
    paragraphs: [
      { it: "Die Stadt ist bekannt für ihr Orchester, das seit Jahrzehnten in der ganzen Welt konzertiert. Doch viele Kinder aus der Region hatten noch nie ein richtiges Konzert gehört, weil Karten teuer sind und die Abende spät beginnen.",
      es: "La ciudad es conocida por su orquesta, que lleva décadas dando conciertos por todo el mundo. Pero muchos niños de la región no habían oído nunca un concierto de verdad, porque las entradas son caras y las funciones empiezan tarde." },
      { it: "Deshalb startete die Stadt ein Programm: Musiker besuchen Klassen, bringen Geigen und Posaunen mit und erzählen, wie Musik entsteht. «Wir wollten die Halle loswerden», sagt der Geiger Herr Wagner. «Musik passiert nicht nur in einem Saal mit Eintrittskarten.»",
      es: "Por eso la ciudad lanzó un programa: los músicos visitan clases, traen violines y trombones y cuentan cómo nace la música. «Queríamos quitarnos la sala de encima», dice el violinista, el señor Wagner. «La música no ocurre solo en una sala con entradas.»" },
      { it: "Die Reaktionen überzeugten die Skeptiker. Lehrer berichteten, dass schwierige Schüler plötzlich zuhörten, und ein Kind sagte nach der Stunde, es will Bratsche lernen, weil das Instrument so groß ist.",
      es: "Las reacciones convencieron a los escépticos. Los profesores contaron que los alumnos difíciles de pronto escuchaban atentos, y un niño dijo después de la clase que quiere aprender viola, porque el instrumento es tan grande." },
      { it: "Wenn die Musiker die Schule verlassen, ist es nie still: Die Schüler summen die Melodien den ganzen Tag. Die Stadt plant, das Programm zu verlängern, weil die Wartelisten länger sind als das Schuljahr.",
      es: "Cuando los músicos dejan la escuela, nunca hay silencio: los alumnos tararean las melodías todo el día. La ciudad planea prolongar el programa, porque las listas de espera son más largas que el curso escolar." },
    ],
    words: [
      { it: "das Orchester / die Orchester", es: "la orquesta" },
      { it: "der Musiker / die Musiker", es: "el músico / los músicos" },
      { it: "die Geige / die Geigen", es: "el violín", note: "coloquial; más formal: die Violine" },
      { it: "die Klasse / die Klassen", es: "la clase / las clases" },
      { it: "das Instrument / die Instrumente", es: "el instrumento" },
      { it: "die Melodie / die Melodien", es: "la melodía / las melodías" },
    ],
    questions: [
      { q: "¿Por qué muchos niños no habían oído nunca un concierto de verdad?", options: ["Weil sie keine Musik mögen", "Weil das Orchester auf Reisen war", "Weil die Schule es verbot", "Weil Karten teuer sind und die Abende spät beginnen"], answer: 3, why: "«Doch viele Kinder aus der Region hatten noch nie ein richtiges Konzert gehört, weil Karten teuer sind und die Abende spät beginnen.»" },
      { q: "¿Qué hacen los músicos en las clases?", options: ["Sie besuchen Klassen, bringen Geigen und Posaunen mit und erzählen, wie Musik entsteht", "Nur schweigen und zuschauen", "Nur alte Filme zeigen", "Nur Hausaufgaben kontrollieren"], answer: 0, why: "«Musiker besuchen Klassen, bringen Geigen und Posaunen mit und erzählen, wie Musik entsteht.»" },
      { q: "¿Qué quiere decir el violinista con que «querían quitarse la sala de encima»?", options: ["Dass die Halle abgerissen wird", "Dass Musik nicht nur in einem Saal mit Eintrittskarten stattfinden soll", "Dass Musiker keine Säle mögen", "Dass die Karten gratis werden"], answer: 1, why: "«Musik passiert nicht nur in einem Saal mit Eintrittskarten.»" },
      { q: "¿Por qué quiere la ciudad prolongar el programa?", options: ["Weil es billig ist", "Weil die Musiker es wollen", "Weil die Wartelisten länger sind als das Schuljahr", "Weil die Ferien kommen"], answer: 2, why: "«Die Stadt plant, das Programm zu verlängern, weil die Wartelisten länger sind als das Schuljahr.»" },
    ],
    discuss: [
      { it: "Welches Instrument würden Sie in der Schule testen wollen? Warum?", es: "¿Qué instrumento te gustaría probar en la escuela? ¿Por qué?" },
      { it: "Klassische Musik: altmodisch oder zeitlos? Was meinen Sie?", es: "La música clásica: ¿anticuada o intemporal? ¿Tú qué opinas?" },
    ],
  },

  /* ═══ B1 · 12 — Geschichte ═══ */
  {
    id: "de-news-b1-12", cat: "storia", level: "B1", place: "Regensburg", minutes: 3,
    title: "Die Brücke, die acht Jahrhunderte Lasten trägt",
    titleEs: "El puente que soporta cargas desde hace ocho siglos",
    lead: {
      it: "Die Steinerne Brücke in Regensburg ist über achthundert Jahre alt und trägt immer noch Fußgänger und Radfahrer. Jetzt wurde jeder Stein geprüft — die Ingenieure fanden Überraschendes.",
      es: "El Puente de Piedra de Ratisbona tiene más de ochocientos años y todavía soporta peatones y ciclistas. Ahora se ha revisado cada piedra — y los ingenieros encontraron algo sorprendente.",
    },
    paragraphs: [
      { it: "Als die Baumeister im zwölften Jahrhundert bauten, hielt niemand das Projekt für möglich: eine steinerne Brücke über die breite, wilde Donau. Die Menschen lachten — bis die erste Wölbung über dem Wasser stand und einen Handelsweg öffnete.",
      es: "Cuando los constructores edificaban en el siglo XII, nadie creía posible el proyecto: un puente de piedra sobre el Danubio, ancho y salvaje. La gente se reía — hasta que la primera bóveda quedó sobre el agua y abrió una ruta comercial." },
      { it: "Die Brücke veränderte die Region, weil sie den Handel von den Schiffen auf die Straße holte. Kaufleute aus dem Norden trafen hier auf Händler aus dem Süden; die kleine Stadt wuchs und wurde reich.",
      es: "El puente transformó la región, porque bajó el comercio de los barcos a la carretera. Mercaderes del norte se encontraban aquí con comerciantes del sur; la pequeña ciudad creció y se hizo rica." },
      { it: "Kürzlich untersuchten Ingenieure jeden Stein. Sie stellten fest, dass der Kern der Brücke noch fast intakt ist; nur die Oberfläche brauchte Pflege. «Die alten Baumeister dachten an ihre Enkel», sagt der Ingenieur Herr Brandt. «Wir versuchen nur, nicht schlechter zu sein.»",
      es: "Hace poco, los ingenieros examinaron cada piedra. Comprobaron que el núcleo del puente sigue casi intacto; solo la superficie necesitaba cuidados. «Los viejos constructores pensaban en sus nietos», dice el ingeniero, el señor Brandt. «Nosotros solo intentamos no ser peores.»" },
      { it: "Heute gehen täglich Tausende Menschen über den steinernen Rücken — Touristen, Pendler, Schüler. Wenn die Abendsonne auf dem alten Gestein liegt, bleiben viele stehen: Sie stehen auf denselben Steinen, auf denen vor achthundert Jahren Kaufleute ihre Wagen rollten.",
      es: "Hoy cruzan a diario miles de personas el lomo de piedra — turistas, trabajadores, escolares. Cuando el sol de la tarde se posa sobre la vieja roca, muchos se detienen: están sobre las mismas piedras sobre las que hace ochocientos años hacían rodar sus carros los mercaderes." },
    ],
    words: [
      { it: "die Brücke / die Brücken", es: "el puente / los puentes" },
      { it: "der Baumeister / die Baumeister", es: "el constructor, el arquitecto de obra" },
      { it: "der Kaufmann / die Kaufleute", es: "el mercader / los mercaderes", note: "plural irregular: der Kaufmann → die Kaufleute" },
      { it: "die Donau", es: "el (río) Danubio" },
      { it: "der Handel", es: "el comercio" },
      { it: "die Oberfläche", es: "la superficie", note: "literalmente «cara de arriba»" },
    ],
    questions: [
      { q: "¿Qué encontraron los ingenieros al examinar cada piedra?", options: ["Der Kern der Brücke ist noch fast intakt", "Die Brücke ist gefährlich", "Nichts Besonderes", "Gold unter dem Pflaster"], answer: 0, why: "«Sie stellten fest, dass der Kern der Brücke noch fast intakt ist»" },
      { q: "¿Cómo transformó el puente la región?", options: ["Sie trennte zwei Länder", "Sie holte den Handel von den Schiffen auf die Straße", "Sie machte die Donau schmaler", "Sie brachte den Menschen Glück"], answer: 1, why: "«Die Brücke veränderte die Region, weil sie den Handel von den Schiffen auf die Straße holte.»" },
      { q: "¿Qué quiere decir el ingeniero Brandt con que los constructores pensaban en sus nietos?", options: ["Dass sie ein Museum bauen wollten", "Dass sie schnell fertig werden wollten", "Dass sie so bauten, dass die Brücke Generationen hält", "Dass sie keine Kinder mochten"], answer: 2, why: "«Die alten Baumeister dachten an ihre Enkel»" },
      { q: "¿Quiénes cruzan hoy a diario el puente?", options: ["Nur Touristen", "Nur Radfahrer", "Nur Anwohner", "Touristen, Pendler und Schüler"], answer: 3, why: "«Heute gehen täglich Tausende Menschen über den steinernen Rücken — Touristen, Pendler, Schüler.»" },
    ],
    discuss: [
      { it: "Gibt es in Ihrer Stadt ein altes Bauwerk, das alle benutzen? Welches?", es: "¿Hay en tu ciudad una construcción antigua que todos usan? ¿Cuál?" },
      { it: "Was sollten wir heute bauen, damit es in achthundert Jahren noch steht?", es: "¿Qué deberíamos construir hoy para que siga en pie dentro de ochocientos años?" },
    ],
  },

  /* ═══ B1 · 13 — Gesundheit ═══ */
  {
    id: "de-news-b1-13", cat: "salute", level: "B1", place: "Osnabrück", minutes: 3,
    title: "Osnabrück: Erste-Hilfe-Kurse für alle Schüler",
    titleEs: "Osnabrück: cursos de primeros auxilios para todos los escolares",
    lead: {
      it: "In Osnabrück lernen jetzt auch Zehnjährige, wie man im Notfall hilft. Die Kurse gehören an vielen Schulen zum Unterricht — und die Kinder üben überraschend ernst.",
      es: "En Osnabrück ahora también los niños de diez años aprenden cómo ayudar en una emergencia. Los cursos forman parte de las clases en muchas escuelas — y los niños practican con una seriedad sorprendente.",
    },
    paragraphs: [
      { it: "Alles begann mit der Frage eines Notarztes: Warum lernen Jugendliche Gleichungen und Grammatik, aber nicht, wie man hilft, wenn das Herz plötzlich steht? Sein Vorschlag erreichte die Stadtverwaltung — und wurde zu einem Programm.",
      es: "Todo empezó con la pregunta de un médico de urgencias: ¿por qué aprenden los jóvenes ecuaciones y gramática, pero no cómo ayudar cuando el corazón se detiene de repente? Su propuesta llegó a la administración municipal — y se convirtió en un programa." },
      { it: "Heute üben Schulklassen den Ernstfall. Auf Matten liegen Puppen, und die Schüler drücken im Takt eines bekannten Liedes aufs Brustbein. «Die Angst vor Fehlern verschwindet, wenn man lacht», sagt der Sanitäter Herr Krüger, der die Kurse leitet.",
      es: "Hoy las clases practican el caso real de emergencia. Sobre colchonetas hay maniquíes y los escolares presionan el esternón al ritmo de una canción conocida. «El miedo a equivocarse desaparece cuando uno se ríe», dice el sanitario, el señor Krüger, que dirige los cursos." },
      { it: "Die Ergebnisse überzeugten die Ärzte: Nach zwei Kursen handelten die meisten Schüler richtig, auch wenn sie nervös waren. Studien zeigen außerdem, dass schnelle Hilfe im Notfall Leben retten kann, weil jede Minute zählt.",
      es: "Los resultados convencieron a los médicos: tras dos cursos actuaba bien la mayoría de los escolares, incluso estando nerviosos. Los estudios muestran además que la ayuda rápida en una emergencia puede salvar vidas, porque cada minuto cuenta." },
      { it: "Andere Städte beobachten das Projekt mit Interesse. Wenn Osnabrück langfristig Erfolg hat, könnten Erste-Hilfe-Kurse bald überall Pflicht werden. Die Zehnjährigen von heute wären dann die ersten Erwachsenen, die nie vergessen haben, wohin die Hände gehören.",
      es: "Otras ciudades siguen el proyecto con interés. Si Osnabrück tiene éxito a largo plazo, los cursos de primeros auxilios podrían pronto ser obligatorios en todas partes. Los niños de diez de hoy serían entonces los primeros adultos que nunca olvidaron a dónde van las manos." },
    ],
    words: [
      { it: "die Erste Hilfe", es: "los primeros auxilios" },
      { it: "die Puppe / die Puppen", es: "el maniquí / los maniquíes" },
      { it: "das Brustbein", es: "el esternón", note: "compuesto: Brust (pecho) + Bein (hueso)" },
      { it: "der Notfall / die Notfälle", es: "la emergencia" },
      { it: "der Sanitäter", es: "el sanitario, el socorrista" },
      { it: "retten", es: "salvar, rescatar" },
    ],
    questions: [
      { q: "¿Con qué pregunta de un médico de urgencias empezó todo?", options: ["Warum gibt es keine Ärzte?", "Warum lernen Jugendliche nicht, wie man hilft, wenn das Herz plötzlich steht?", "Warum ist Schule langweilig?", "Warum kosten Kurse so viel?"], answer: 1, why: "«Warum lernen Jugendliche Gleichungen und Grammatik, aber nicht, wie man hilft, wenn das Herz plötzlich steht?»" },
      { q: "¿Con qué ritmo presionan los escolares el esternón?", options: ["Ohne jeden Rhythmus", "Im Takt einer Uhr", "Im Takt eines bekannten Liedes", "So schnell wie möglich"], answer: 2, why: "«Auf Matten liegen Puppen, und die Schüler drücken im Takt eines bekannten Liedes aufs Brustbein.»" },
      { q: "¿Qué muestran los estudios, según la noticia?", options: ["Dass Kinder keine Kurse brauchen", "Dass Puppen teuer sind", "Dass Erste Hilfe zu schwer ist", "Dass schnelle Hilfe im Notfall Leben retten kann"], answer: 3, why: "«Studien zeigen außerdem, dass schnelle Hilfe im Notfall Leben retten kann, weil jede Minute zählt.»" },
      { q: "¿Qué podría pasar si Osnabrück tiene éxito a largo plazo?", options: ["Erste-Hilfe-Kurse könnten überall Pflicht werden", "Die Kurse werden abgeschafft", "Nur Ärzte dürfen helfen", "Nichts ändert sich"], answer: 0, why: "«Wenn Osnabrück langfristig Erfolg hat, könnten Erste-Hilfe-Kurse bald überall Pflicht werden.»" },
    ],
    discuss: [
      { it: "Würden Sie im Notfall helfen oder zögern? Ehrlich bitte.", es: "¿Ayudarías en una emergencia o dudarías? Con sinceridad." },
      { it: "Sollte Erste Hilfe ein Pflichtfach werden? Warum (nicht)?", es: "¿Deberían los primeros auxilios ser una asignatura obligatoria? ¿Por qué (no)?" },
    ],
  },

  /* ═══ B1 · 14 — Umwelt ═══ */
  {
    id: "de-news-b1-14", cat: "ambiente", level: "B1", place: "Essen", minutes: 3,
    title: "Essen pflanzt einen Wald gegen die Hitze",
    titleEs: "Essen planta un bosque contra el calor",
    lead: {
      it: "Essen war Jahrzehnte lang eine Stadt der Kohle und des Stahls. Jetzt entsteht im Norden ein neuer Stadtwald — Bürger pflanzen gemeinsam gegen Hitze und Staub.",
      es: "Essen fue durante décadas una ciudad del carbón y del acero. Ahora nace en el norte un nuevo bosque urbano — los vecinos plantan juntos contra el calor y el polvo.",
    },
    paragraphs: [
      { it: "Auf einem großen Gelände im Norden der Stadt wuchsen früher Kohlehalden und Schienen. Nach dem Ende der Industrie blieb eine weite, graue Fläche übrig, auf der im Sommer die Sonne brannte und der Wind Staub trug.",
      es: "En una gran zona del norte de la ciudad antes crecían escombreras de carbón y vías de tren. Tras el fin de la industria quedó una superficie gris y extensa en la que, en verano, quemaba el sol y el viento arrastraba polvo." },
      { it: "Die Stadt startete ein ungewöhnliches Projekt: Bürger pflanzen gemeinsam einen Wald, weil die Sommer heißer wurden. Sie setzten Eichen, Linden und tausende junge Bäume, die mit Trockenheit zurechtkommen. Wenn die Hitze kommt, sollen die Blätter eines Tages kühle Wege spenden.",
      es: "La ciudad lanzó un proyecto poco común: los vecinos plantan juntos un bosque, porque los veranos se volvieron más calurosos. Plantaron robles, tilos y miles de árboles jóvenes que resisten bien la sequía. Cuando llegue el calor, algún día las hojas ofrecerán caminos frescos." },
      { it: "«Ein Baum wächst langsam», sagt die Försterin Frau Lindner. «Aber er arbeitet ohne Pause: Er kühlt, filtert Wasser und fängt Lärm ein. Wir pflanzen hier keine Dekoration, sondern eine Maschine.»",
      es: "«Un árbol crece despacio», dice la ingeniera de montes, la señora Lindner. «Pero trabaja sin descanso: refresca, filtra el agua y atrapa el ruido. Aquí no plantamos decoración, sino una máquina.»" },
      { it: "Viele Anwohner kamen zum Pflanzen und blieben als Paten: Jede Familie pflegt ein Bäumchen und gießt es im Sommer. Die Stadt hofft, dass aus dem grauen Gelände in dreißig Jahren ein grüner Kern wächst — der erste Stadtwald, den eine ganze Stadt gemeinsam goss.",
      es: "Muchos vecinos acudieron a plantar y se quedaron como padrinos: cada familia cuida un arbolito y lo riega en verano. La ciudad espera que de la zona gris crezca en treinta años un corazón verde — el primer bosque urbano que regó una ciudad entera." },
    ],
    words: [
      { it: "der Wald / die Wälder", es: "el bosque / los bosques" },
      { it: "pflanzen", es: "plantar" },
      { it: "die Hitze", es: "el calor intenso" },
      { it: "der Baum / die Bäume", es: "el árbol / los árboles" },
      { it: "die Fläche / die Flächen", es: "la superficie, la zona" },
      { it: "der Pate / die Paten", es: "el padrino / los padrinos", note: "Pate stehen = apadrinar" },
    ],
    questions: [
      { q: "¿Qué quedó en la zona norte tras el fin de la industria?", options: ["Ein Park", "Ein neuer Wald", "Eine weite, graue Fläche", "Ein Einkaufszentrum"], answer: 2, why: "«Nach dem Ende der Industrie blieb eine weite, graue Fläche übrig»" },
      { q: "¿Qué árboles pusieron los vecinos en la tierra?", options: ["Nur Palmen", "Obstbäume", "Gar keine", "Eichen, Linden und tausende junge Bäume, die mit Trockenheit zurechtkommen"], answer: 3, why: "«Sie setzten Eichen, Linden und tausende junge Bäume, die mit Trockenheit zurechtkommen.»" },
      { q: "¿Qué quiere decir la ingeniera de montes con que no plantan «decoración» sino una «máquina»?", options: ["Dass die Bäume Arbeit leisten: kühlen, Wasser filtern, Lärm fangen", "Dass die Bäume hässlich sind", "Dass Bäume nur in Museen gehören", "Dass Roboter gießen"], answer: 0, why: "«Er kühlt, filtert Wasser und fängt Lärm ein.»" },
      { q: "¿Qué espera la ciudad que crezca de la zona gris dentro de treinta años?", options: ["Noch mehr Kohle", "Einen grünen Kern — den ersten Stadtwald, den eine ganze Stadt gemeinsam goss", "Eine neue Industrie", "Einen Parkplatz"], answer: 1, why: "«Die Stadt hofft, dass aus dem grauen Gelände in dreißig Jahren ein grüner Kern wächst»" },
    ],
    discuss: [
      { it: "Wo braucht Ihre Stadt mehr Bäume? Beschreiben Sie die Stelle.", es: "¿Dónde necesita tu ciudad más árboles? Describe el lugar." },
      { it: "Würden Sie als Pate ein Bäumchen gießen? Warum (nicht)?", es: "¿Serías padrino y regarías un arbolito? ¿Por qué (no)?" },
    ],
  },

  /* ═══ B1 · 15 — Technologie ═══ */
  {
    id: "de-news-b1-15", cat: "tecnologia", level: "B1", place: "Bonn", minutes: 3,
    title: "Ein Roboter führt Besucher durch das Museum",
    titleEs: "Un robot guía a los visitantes por el museo",
    lead: {
      it: "Ein Museum in Bonn testet einen neuen Mitarbeiter: einen Roboter. Er rollt durch die Säle, erzählt Geschichten zu den Kunstwerken — und die Besucher reden gern mit ihm.",
      es: "Un museo de Bonn prueba a un empleado nuevo: un robot. Recorre las salas, cuenta historias sobre las obras — y a los visitantes les encanta hablar con él.",
    },
    paragraphs: [
      { it: "Der weiße Roboter heißt Kuno und fährt langsam durch die Ausstellungsräume. An seinem Bauch leuchtet ein Bildschirm, auf dem Besucher Details der Werke vergrößert betrachten können. Kuno kennt den Weg zu jedem Saal.",
      es: "El robot blanco se llama Kuno y circula despacio por las salas de exposición. En su vientre brilla una pantalla en la que los visitantes pueden ver ampliados los detalles de las obras. Kuno conoce el camino a cada sala." },
      { it: "Die Idee entstand, weil das Museum zu wenig Personal hatte. Zwei Mitarbeiter betreuten früher alle Gruppen; heute übernimmt der Roboter die einfachen Aufgaben: Er zeigt den Weg, nennt die Öffnungszeiten und beantwortet zwanzig Standardfragen.",
      es: "La idea nació porque el museo tenía poco personal. Dos empleados atendían antes a todos los grupos; hoy el robot asume las tareas sencillas: indica el camino, dice los horarios y responde veinte preguntas frecuentes." },
      { it: "«Die Gäste reden mit ihm, als wäre er ein Kollege», sagt die Museumsführerin Frau Sommer. «Kinder stellen ihm Fragen, die sie uns nie stellen würden. Der Roboter macht neugierig, weil er nichts erwartet.»",
      es: "«Los invitados hablan con él como si fuera un colega», dice la guía del museo, la señora Sommer. «Los niños le hacen preguntas que jamás nos harían a nosotros. El robot despierta curiosidad, porque no espera nada.»" },
      { it: "Kuno lernt weiter: Das Team sagt, dass er nach jedem Arbeitstag neue Antworten bekommt, weil seine Gespräche ausgewertet werden. Wenn das Experiment gut läuft, bekommt der Roboter bald Gesellschaft — dann rollen kleine Helfer auch durch andere Häuser der Stadt.",
      es: "Kuno sigue aprendiendo: el equipo dice que cada jornada recibe respuestas nuevas, porque sus conversaciones se analizan. Si el experimento va bien, el robot pronto tendrá compañía — entonces pequeños ayudantes rodarán también por otras sedes de la ciudad." },
    ],
    words: [
      { it: "der Roboter / die Roboter", es: "el robot / los robots" },
      { it: "der Bildschirm / die Bildschirme", es: "la pantalla" },
      { it: "das Personal", es: "el personal (colectivo)" },
      { it: "die Öffnungszeiten", es: "el horario de apertura" },
      { it: "die Frage / die Fragen", es: "la pregunta / las preguntas" },
      { it: "neugierig", es: "curioso", note: "literalmente «ansioso por lo nuevo»" },
    ],
    questions: [
      { q: "¿Qué pueden hacer los visitantes con la pantalla del robot?", options: ["Billetts kaufen", "Filme drehen", "Telefonieren", "Details der Werke vergrößert betrachten"], answer: 3, why: "«An seinem Bauch leuchtet ein Bildschirm, auf dem Besucher Details der Werke vergrößert betrachten können.»" },
      { q: "¿Por qué surgió la idea del robot?", options: ["Weil das Museum zu wenig Personal hatte", "Weil Roboter modern sind", "Weil Kinder Roboter lieben", "Weil die Eintrittskarten teuer waren"], answer: 0, why: "«Die Idee entstand, weil das Museum zu wenig Personal hatte.»" },
      { q: "¿Por qué despierta curiosidad el robot, según la guía?", options: ["Weil er schnell fährt", "Weil er nichts erwartet", "Weil er teuer war", "Weil er laut ist"], answer: 1, why: "«Der Roboter macht neugierig, weil er nichts erwartet.»" },
      { q: "¿Qué pasará si el experimento funciona bien?", options: ["Das Museum schließt", "Kuno wird verkauft", "Kuno bekommt Gesellschaft — kleine Helfer rollen durch andere Häuser", "Nichts Neues"], answer: 2, why: "«Wenn das Experiment gut läuft, bekommt der Roboter bald Gesellschaft — dann rollen kleine Helfer auch durch andere Häuser der Stadt.»" },
    ],
    discuss: [
      { it: "Mit wem würden Sie lieber im Museum sprechen: mit einem Roboter oder mit einem Menschen? Warum?", es: "¿Con quién preferirías hablar en un museo: con un robot o con una persona? ¿Por qué?" },
      { it: "Welche einfachen Aufgaben könnten Roboter in Ihrer Stadt übernehmen?", es: "¿Qué tareas sencillas podrían asumir los robots en tu ciudad?" },
    ],
  },
];
