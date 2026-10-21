/* ── DE · Notizen B1 + B2 (v9.26) ──────────────────────────────────────
   Deutsch, Methode VOA. B1 ≈ 160-180 Wörter, B2 ≈ 250-300.
   Felder `.it` = Deutsch (Studiensprache), `.es` = Spanisch. */

import type { NewsItem } from "../../news";

export const DE_NEWS_B: NewsItem[] = [

  /* ═══ B1 · 1 — Gesundheit ═══ */
  {
    id: "de-news-b1-01", cat: "salute", level: "B1", place: "Hamburg", minutes: 3,
    title: "Das Rezept, das aus der Apotheke spaziert",
    titleEs: "La receta que sale de la farmacia a caminar",
    lead: {
      it: "In Hamburg verschreiben Ärzte neuerdings etwas Merkwürdiges: einen Spaziergang. Die Krankenkassen zahlen sogar — und die Patienten sind verwirrt, dann begeistert.",
      es: "En Hamburgo los médicos recetan ahora algo curioso: un paseo. Las aseguradoras incluso lo pagan — y los pacientes se extrañan, luego se entusiasman.",
    },
    paragraphs: [
      { it: "Das Programm heisst «Rezept für Bewegung». Der Arzt schreibt keine Tablette, sondern eine Adresse auf: einen Park, einen See, eine Treppe. Der Patient geht hin — jede Woche, mit Karte und Stempel.",
      es: "El programa se llama «Receta para el movimiento». El médico no receta una pastilla, sino una dirección: un parque, un lago, una escalera. El paciente va — cada semana, con tarjeta y sello." },
      { it: "Die Idee stammt aus Skandinavien und ist in Deutschland angekommen. Die Zahlen sprechen für sich: Wer sich bewegt, braucht weniger Medikamente, seltener den Notarzt und öfter gute Schuhe.",
      es: "La idea viene de Escandinavia y ya llegó a Alemania. Los números hablan solos: quien se mueve necesita menos medicinas, más raramente la ambulancia y más a menudo buenos zapatos." },
      { it: "Die Überraschung ist sozial, nicht medizinisch. Die Gruppen, die gemeinsam spazieren, bleiben zusammen: Rentner und Studenten, Einheimische und Neuankömmlinge. Der Park wird zur Klinik — mit Bänken als Wartezimmer.",
      es: "La sorpresa es social, no médica. Los grupos que pasean juntos permanecen juntos: jubilados y estudiantes, locales y recién llegados. El parque se vuelve clínica — con bancos como sala de espera." },
      { it: "Eine Patientin, zweiundsiebzig, hat den Satz des Jahres geprägt: «Früher verschrieb man mir Ruhe. Jetzt verschreibt man mir Schritte. Ich kann Ihnen sagen: Schritte wirken besser.»",
      es: "Una paciente de setenta y dos acuñó la frase del año: «Antes me recetaban descanso. Ahora me recetan pasos. Le puedo decir: los pasos funcionan mejor.»" },
    ],
    words: [
      { it: "das Rezept", es: "la receta" },
      { it: "die Krankenkasse", es: "la aseguradora de salud" },
      { it: "der Notarzt", es: "la ambulancia, urgencias" },
      { it: "der Rentner", es: "el jubilado" },
      { it: "der Neuankömmling", es: "el recién llegado" },
      { it: "prägen (einen Satz)", es: "acuñar (una frase)" },
    ],
    questions: [
      { q: "¿Qué receta el médico en el programa?", options: ["Eine Tablette", "Eine Adresse: einen Park, einen See, eine Treppe — der Patient geht jede Woche", "Ein Krankenhaus", "Nichts"], answer: 1, why: "«Der Arzt schreibt keine Tablette, sondern eine Adresse auf: einen Park, einen See, eine Treppe.»" },
      { q: "¿De dónde viene la idea y qué dicen los números?", options: ["Aus den USA; die Zahlen sind geheim", "Aus Skandinavien; wer sich bewegt, braucht weniger Medikamente und seltener den Notarzt", "Aus Frankreich; keine Zahlen", "Aus Hamburg; keine Zahlen"], answer: 1, why: "«Die Idee stammt aus Skandinavien… Wer sich bewegt, braucht weniger Medikamente, seltener den Notarzt.»" },
      { q: "¿Dónde está la sorpresa, según la noticia?", options: ["In der Medizin", "Sozial: die Gruppen bleiben zusammen — Rentner, Studenten, Einheimische, Neuankömmlinge; der Park wird zur Klinik", "Im Preis", "Im Wetter"], answer: 1, why: "«Die Überraschung ist sozial, nicht medizinisch. Die Gruppen, die gemeinsam spazieren, bleiben zusammen… Der Park wird zur Klinik — mit Bänken als Wartezimmer.»" },
      { q: "¿Qué dijo la paciente de setenta y dos?", options: ["«Früher verschrieb man mir Ruhe. Jetzt verschreibt man mir Schritte. Schritte wirken besser.»", "«Tabletten sind besser.»", "«Ich hasse Parks.»", "«Ärzte verstehen nichts.»"], answer: 0, why: "«Jetzt verschreibt man mir Schritte. Ich kann Ihnen sagen: Schritte wirken besser.»" },
    ],
    discuss: [
      { it: "Würde bei Ihnen in der Stadt jemand für einen Spaziergang bezahlen? Wer müsste es tun?", es: "En tu ciudad, ¿alguien pagaría por un paseo? ¿Quién debería hacerlo?" },
      { it: "Ruhe oder Schritte: Was wurde Ihnen verschrieben, als Sie krank waren? Erzählen Sie.", es: "Descanso o pasos: ¿qué te recetaron cuando estuviste enfermo? Cuenta." },
    ],
  },

  /* ═══ B1 · 2 — Umwelt ═══ */
  {
    id: "de-news-b1-02", cat: "ambiente", level: "B1", place: "Berlin", minutes: 3,
    title: "Die Hauptstadt, die Wald besitzt",
    titleEs: "La capital que posee bosque",
    lead: {
      it: "Berlin ist die einzige europäische Hauptstadt mit eigenen Wäldern — zehntausend Hektar, mitten in der Stadt. Die Berliner verhalten sich dazu wie zu einem alten Verwandten: mit Respekt und leichter Angst.",
      es: "Berlín es la única capital europea con bosques propios — diez mil hectáreas, en medio de la ciudad. Los berlineses se comportan con ellos como con un viejo pariente: con respeto y algo de miedo.",
    },
    paragraphs: [
      { it: "Die Wälder sind da, seit es die Stadt gibt. Nach dem Krieg wuchsen sie weiter, weil niemand Bauen durfte oder wollte. Heute sind sie Erholungsgebiet, Wasserfilter und Klimaanlage — drei Berufe, die niemand ausschreibt.",
      es: "Los bosques están ahí desde que existe la ciudad. Tras la guerra siguieron creciendo, porque nadie podía o quería construir. Hoy son zona de descanso, filtro de agua y aire acondicionado — tres oficios que nadie anuncia." },
      { it: "Die Verwaltung ist deutsch bis ins Detail. Die Wälder haben ein Forstamt, einen Jahresplan und sogar ein «Waldbauern»: Die Stadt lebt von ihrem Holz wie ein Dorf von seinen Feldern — nur leiser.",
      es: "La administración es alemana hasta el detalle. Los bosques tienen oficina forestal, plan anual y hasta «campesinos del bosque»: la ciudad vive de su madera como un pueblo de sus campos — solo más en silencio." },
      { it: "Die Tiere haben den Deal zuerst verstanden. Wildschweine benutzen die Stadt wie eine Küche mit zwei Eingängen; Füchse warten an Ampeln; und ein Bär, der vor hundert Jahren durch Berlin spazierte, hat den Waldbesitzern den einzigen Denkmalskandal der Gegend beschert.",
      es: "Los animales entendieron el trato primero. Los jabalíes usan la ciudad como cocina con dos entradas; los zorros esperan en los semáforos; y un oso que hace cien años paseó por Berlín les costó a los dueños del bosque el único escándalo monumental de la zona." },
      { it: "Ein Förster, kurz vor der Pension, sagt: «Die Stadt denkt, der Wald gehört ihr. Es ist umgekehrt. Der Wald hat Geduld, Wurzeln und Zeit. Berlin ist nur die Lichtung — mit Verkehr.»",
      es: "Un guardabosques, a punto de jubilarse, dice: «La ciudad cree que el bosque le pertenece. Es al revés. El bosque tiene paciencia, raíces y tiempo. Berlín es apenas el claro — con tráfico.»" },
    ],
    words: [
      { it: "der Wald / das Gehölz", es: "el bosque" },
      { it: "die Hektare", es: "la hectárea" },
      { it: "das Forstamt", es: "la oficina forestal" },
      { it: "die Wildsau (Wildschweine)", es: "el jabalí" },
      { it: "die Lichtung", es: "el claro (del bosque)" },
      { it: "der Förster", es: "el guardabosques" },
    ],
    questions: [
      { q: "¿Cuánto bosque tiene Berlín?", options: ["Zehn Hektar", "Zehntausend Hektar, mitten in der Stadt", "Keinen", "Eine Million Hektar"], answer: 1, why: "«Berlin ist die einzige europäische Hauptstadt mit eigenen Wäldern — zehntausend Hektar, mitten in der Stadt.»" },
      { q: "¿Por qué crecieron los bosques tras la guerra?", options: ["Weil jemand Bauen wollte", "Weil niemand Bauen durfte oder wollte", "Wegen des Klimas", "Durch Zufall"], answer: 1, why: "«Nach dem Krieg wuchsen sie weiter, weil niemand Bauen durfte oder wollte.»" },
      { q: "¿Qué tres oficios cumplen hoy?", options: ["Erholungsgebiet, Wasserfilter und Klimaanlage", "Parkplatz, Straße, Bahnhof", "Küche, Keller, Dach", "Nichts"], answer: 0, why: "«Heute sind sie Erholungsgebiet, Wasserfilter und Klimaanlage — drei Berufe, die niemand ausschreibt.»" },
      { q: "¿Qué dijo el guardabosques?", options: ["«Der Wald gehört der Stadt.»", "Der Wald hat Geduld, Wurzeln und Zeit. Berlin ist nur die Lichtung — mit Verkehr", "Der Wald ist ein Park", "Bäume sind Möbel"], answer: 1, why: "«Die Stadt denkt, der Wald gehört ihr. Es ist umgekehrt… Berlin ist nur die Lichtung — mit Verkehr.»" },
    ],
    discuss: [
      { it: "Ihre Stadt und die Natur: Wer gehört wem? Ein Beispiel aus Ihrer Gegend, bitte.", es: "Tu ciudad y la naturaleza: ¿quién pertenece a quién? Un ejemplo de tu zona, por favor." },
      { it: "«Geduld, Wurzeln und Zeit»: Was in Ihrer Stadt hat diese drei Dinge? Erzählen Sie.", es: "«Paciencia, raíces y tiempo»: ¿qué tiene esas tres cosas en tu ciudad? Cuenta." },
    ],
  },

  /* ═══ B1 · 3 — Technologie ═══ */
  {
    id: "de-news-b1-03", cat: "tecnologia", level: "B1", place: "Wolfsburg", minutes: 3,
    title: "Das Auto, das einparkt wie ein Gedanke",
    titleEs: "El coche que se estaciona como un pensamiento",
    lead: {
      it: "In Wolfsburg entsteht das Auto der Zukunft nicht als Prototyp auf einer Bühne, sondern als Liste von Aufgaben. Nummer eins: es soll einparken, ohne zu zittern.",
      es: "En Wolfsburgo el coche del futuro no nace como prototipo en un escenario, sino como lista de tareas. La número uno: debe estacionarse sin temblar.",
    },
    paragraphs: [
      { it: "Die Stadt wurde für das Auto gebaut — buchstäblich: Wolfsburg existiert, weil eine Fabrik beschloss, eine Stadt um sich herum zu gründen. Umgekehrt als überall sonst.",
      es: "La ciudad fue construida para el coche — literalmente: Wolfsburgo existe porque una fábrica decidió fundar una ciudad a su alrededor. Al revés que en todas partes." },
      { it: "Dort lernen jetzt Autos, was Fahrer in der Prüfung fürchten: einparken. Ultraschallsensoren messen die Lücke; ein Computer rechnet den Weg; der Fahrer hebt die Hände — und darf sie oben behalten.",
      es: "Allí los coches aprenden ahora lo que los conductores temen en el examen: estacionarse. Sensores de ultrasonido miden el hueco; un ordenador calcula la ruta; el conductor levanta las manos — y puede dejarlas arriba." },
      { it: "Die Psychologie ist der eigentliche Arbeitsplatz. Erste Fahrt: alle Hände am Lenkrad. Dritte Fahrt: Kaffee in der Hand. Fünfte Fahrt: man liest die Zeitung — was die Entwickler sofort wieder verbieten, mit Rücksicht auf die Juristen.",
      es: "La psicología es el verdadero lugar de trabajo. Primer viaje: todas las manos en el volante. Tercero: café en la mano. Quinto: se lee el periódico — lo que los desarrolladores prohíben de inmediato, por consideración a los abogados." },
      { it: "Ein Fahrlehrer, der fünfzig Jahre geparkt hat, kommentiert: «Das Auto parkt besser als ich. Aber parken war nie das Ziel. Parken war die Prüfung. Die Frage ist: Was kommt nach der Prüfung?»",
      es: "Un instructor de manejo, que estacionó durante cincuenta años, comenta: «El coche estaciona mejor que yo. Pero estacionar nunca fue la meta. Estacionar era el examen. La pregunta es: ¿qué viene después del examen?»" },
    ],
    words: [
      { it: "einparken", es: "estacionarse" },
      { it: "die Lücke", es: "el hueco" },
      { it: "der Ultraschallsensor", es: "el sensor de ultrasonido" },
      { it: "das Lenkrad", es: "el volante" },
      { it: "die Rücksicht", es: "la consideración" },
      { it: "der Fahrlehrer", es: "el instructor de manejo" },
    ],
    questions: [
      { q: "¿Por qué existe Wolfsburgo?", options: ["Wegen eines Flusses", "Weil eine Fabrik beschloss, eine Stadt um sich herum zu gründen — umgekehrt als überall sonst", "Wegen der Küste", "Zufällig"], answer: 1, why: "«Wolfsburg existiert, weil eine Fabrik beschloss, eine Stadt um sich herum zu gründen. Umgekehrt als überall sonst.»" },
      { q: "¿Qué aprenden los coches allí?", options: ["Fahren im Kreis", "Einparken: Sensoren messen die Lücke, der Computer rechnet, der Fahrer hebt die Hände", "Tanken", "Waschen"], answer: 1, why: "«Dort lernen jetzt Autos, was Fahrer in der Prüfung fürchten: einparken. Ultraschallsensoren messen die Lücke…»" },
      { q: "¿Dónde está «el verdadero lugar de trabajo»?", options: ["In der Fabrik", "In der Psychologie: erste Fahrt Hände am Lenkrad, dritte Kaffee, fünfte Zeitung — sofort verboten", "Im Büro", "Im Gericht"], answer: 1, why: "«Die Psychologie ist der eigentliche Arbeitsplatz… Fünfte Fahrt: man liest die Zeitung — was die Entwickler sofort wieder verbieten.»" },
      { q: "¿Qué comentó el instructor?", options: ["«Das Auto parkt besser als ich. Aber parken war nie das Ziel. Parken war die Prüfung. Was kommt nach der Prüfung?»", "«Maschinen parken schlecht.»", "«Ich hasse Autos.»", "«Alles bleibt gleich.»"], answer: 0, why: "«Parken war die Prüfung. Die Frage ist: Was kommt nach der Prüfung?»" },
    ],
    discuss: [
      { it: "Was kam bei Ihnen «nach der Prüfung»? Erzählen Sie von Ihrer ersten Fahrt allein.", es: "¿Qué vino «después del examen»? Cuenta tu primer manejo solo." },
      { it: "Psychologie vor Technik: Wo erleben Sie das noch — im Aufzug, im Flugzeug, beim Bezahlen?", es: "Psicología antes que técnica: ¿dónde más lo vives — en el ascensor, el avión, al pagar?" },
    ],
  },

  /* ═══ B2 · 1 — Wirtschaft ═══ */
  {
    id: "de-news-b2-01", cat: "economia", level: "B2", place: "Deutschland", minutes: 4,
    title: "Der Mittelstand: die Weltmeister ohne Trikots",
    titleEs: "El Mittelstand: los campeones del mundo sin camisetas",
    lead: {
      it: "Deutschlands Wirtschaftsmacht lebt nicht in den großen Städten, sondern in Dörfern: tausende Firmen, die in der ganzen Welt Marktführer sind — und deren Namen niemand kennt.",
      es: "El poder económico alemán no vive en las grandes ciudades, sino en aldeas: miles de empresas que son líderes mundiales — y cuyos nombres nadie conoce.",
    },
    paragraphs: [
      { it: "Das Phänomen hat einen Namen: der Hidden Champion — das Unternehmen, das in seinem Feld die Nummer eins ist, und zwar weltweit, und dessen Straßenschild man trotzdem im Auto verpasst. Deutschland zählt davon über tausend, mehr als jedes andere Land. Es sind Familienbetriebe im dritten oder vierten Glied, mit Maschinen, die auf Messen bewundert werden, und mit Kunden, die stille bleiben, weil Stille zum Geschäft gehört.",
      es: "El fenómeno tiene nombre: el Hidden Champion — la empresa que en su campo es la número uno, mundialmente, y cuyo cartel se te escapa igual en el coche. Alemania cuenta más de mil, más que ningún otro país. Son negocios familiares en la tercera o cuarta generación, con máquinas que se admiran en ferias, y con clientes que callan, porque el silencio es parte del negocio." },
      { it: "Die Geographie ist Teil der Erfindung. Der Mittelstand sitzt dort, wo die Großväter gebaut haben — in der Provinz, wo die Mieten niedrig sind, die Mitarbeiter bleiben und der Chef noch die Werkhalle betritt, wenn ein Kunde anruft. Die Konzernlogik (Wachstum heißt: Umzug in die Metropole) gilt hier nicht; die Familiengeneration rechnet anders als die Aktiengeneration: in Jahrzehnten, nicht in Quartalen.",
      es: "La geografía es parte del invento. El Mittelstand está donde los abuelos construyeron — en la provincia, donde los alquileres son bajos, los empleados se quedan y el jefe todavía entra al taller cuando un cliente llama. La lógica de las corporaciones (crecer es mudarse a la metrópoli) allí no vale; la generación familiar cuenta distinto que la generación de las acciones: en décadas, no en trimestres." },
      { it: "Die Produkte sind so unspektakulär wie entscheidend: Maschinen, die Maschinen bauen; Filter, die die Milch trinkbar machen; Ventile, die in jedem Kraftwerk sitzen. Wer sie kennt, erkennt die Welt wieder; wer sie nicht kennt, benutzt sie trotzdem — jeden Tag, meistens ohne es zu merken. Das ist der eigentliche Trick der Branche: unsichtbar zu sein, wo es sich lohnt.",
      es: "Los productos son tan poco espectaculares como decisivos: máquinas que construyen máquinas; filtros que hacen potable la leche; válvulas que están en cada central. Quien los conoce reconoce al mundo; quien no, los usa igual — cada día, casi siempre sin notarlo. Ese es el truco real del sector: ser invisible donde conviene." },
      { it: "Die Gefahren sind so leise wie die Firmen. Der Nachwuchs fehlt: Die Kinder studieren in den Großstädten und kommen nicht zurück; die Gesellen fehlen: Wer soll die Maschinen bauen, wenn alle Apps programmieren? Und der Weltmarkt, der ein Verbündeter war, wird launisch — Zölle hier, Sanktionen dort, und in Peking wächst eine Konkurrenz, die erst kopiert hat und jetzt verbessert.",
      es: "Los peligros son tan callados como las firmas. Falta relevo: los hijos estudian en las grandes ciudades y no vuelven; faltan oficiales: ¿quién construirá las máquinas, si todos programan apps? Y el mercado mundial, que era un aliado, se pone de mal humor — aranceles aquí, sanciones allá, y en Pekín crece una competencia que primero copió y ahora mejora." },
      { it: "Ein Firmenchef, vierter seines Namens, hat das Dilemma in einen Satz gebaut, den die Zeitungen zitieren: «Mein Großvater hat gebaut, mein Vater hat verkauft, ich habe globalisiert — und mein Sohn soll erben. Aber erben heißt bei uns: Zwanzig Jahre in der Halle stehen. Dafür braucht man keine Begeisterung für Maschinen. Man braucht Geduld. Und Geduld kann man nicht bestellen wie eine Maschine — die Lieferzeit dauert eine Generation.»",
      es: "Un jefe de empresa, cuarto de su nombre, condensó el dilema en una frase que repiten los periódicos: «Mi abuelo construyó, mi padre vendió, yo hice global — y mi hijo debe heredar. Pero heredar significa aquí: veinte años en el taller. Para eso no hace falta entusiasmo por las máquinas. Hace falta paciencia. Y la paciencia no se puede pedir por catálogo como una máquina — el plazo de entrega dura una generación.»" },
    ],
    words: [
      { it: "der Hidden Champion", es: "el campeón oculto" },
      { it: "der Familienbetrieb", es: "el negocio familiar" },
      { it: "die Werkhalle", es: "el taller, la nave" },
      { it: "der Nachwuchs", es: "el relevo, la cantera" },
      { it: "der Geselle", es: "el oficial (oficio)" },
      { it: "launisch", es: "de mal humor, caprichoso" },
      { it: "erben", es: "heredar" },
    ],
    questions: [
      { q: "¿Qué es un «Hidden Champion»?", options: ["Eine Firma mit Werbung", "Ein Unternehmen, das in seinem Feld weltweit Nummer eins ist — und dessen Namen niemand kennt", "Ein Fußballverein", "Ein Konzern in Berlin"], answer: 1, why: "«Der Hidden Champion — das Unternehmen, das in seinem Feld die Nummer eins ist, und zwar weltweit, und dessen Straßenschild man trotzdem im Auto verpasst.»" },
      { q: "¿Cómo cuenta la generación familiar?", options: ["In Quartalen", "In Jahrzehnten, nicht in Quartalen", "Gar nicht", "In Sekunden"], answer: 1, why: "«Die Familiengeneration rechnet anders als die Aktiengeneration: in Jahrzehnten, nicht in Quartalen.»" },
      { q: "¿Cuáles son los productos del Mittelstand?", options: ["Apps und Filme", "Maschinen, die Maschinen bauen; Filter für Milch; Ventile für Kraftwerke — unsichtbar, wo es sich lohnt", "Autos für alle", "Moden"], answer: 1, why: "«Die Produkte sind so unspektakulär wie entscheidend… Das ist der eigentliche Trick der Branche: unsichtbar zu sein, wo es sich lohnt.»" },
      { q: "¿Cuáles son «los peligros tan callados como las firmas»?", options: ["Nur Steuern", "Der Nachwuchs fehlt, die Gesellen fehlen — und der Weltmarkt wird launisch; in Peking wächst eine Konkurrenz, die erst kopiert hat und jetzt verbessert", "Nichts", "Das Wetter"], answer: 1, why: "«Der Nachwuchs fehlt… die Gesellen fehlen… und in Peking wächst eine Konkurrenz, die erst kopiert hat und jetzt verbessert.»" },
      { q: "¿Qué dijo el cuarto de su nombre sobre la paciencia?", options: ["«Geduld kann man nicht bestellen wie eine Maschine — die Lieferzeit dauert eine Generation.»", "«Geduld ist eine Maschine.»", "«Bestellen Sie Geduld online.»", "«Mein Sohn kommt nie zurück.»"], answer: 0, why: "«Geduld kann man nicht bestellen wie eine Maschine — die Lieferzeit dauert eine Generation.»" },
    ],
    discuss: [
      { it: "Gibt es «Hidden Champions» in Ihrer Region? Suchen Sie eines — und beschreiben Sie es, ohne den Namen zu nennen.", es: "¿Hay «campeones ocultos» en tu región? Busca uno — y descríbelo sin decir el nombre." },
      { it: "«In Jahrzehnten rechnen, nicht in Quartalen»: Wer rechnet heute so — Firmen, Familien, Staaten? Beispiele, bitte.", es: "«Contar en décadas, no en trimestres»: ¿quién cuenta hoy así — empresas, familias, estados? Ejemplos, por favor." },
    ],
  },

  /* ═══ B2 · 2 — Wissenschaft ═══ */
  {
    id: "de-news-b2-02", cat: "scienza", level: "B2", place: "München", minutes: 4,
    title: "Das Labor, in dem geträumt wird",
    titleEs: "El laboratorio donde se sueña",
    lead: {
      it: "In München forscht man an der letzten unerforschten Zone des Alltags: dem Traum. Die Resultate sind unerwartet — und nützlich für Leute, die nie ein Labor betreten.",
      es: "En Múnich se investiga la última zona inexplorada de lo cotidiano: el sueño. Los resultados son inesperados — y útiles para gente que nunca entra en un laboratorio.",
    },
    paragraphs: [
      { it: "Die Traumforschung hat ein Imageproblem gehabt, so lang wie es sie gibt. Sie galt als Scharlatanerie mit Fragebogen: Wie war Ihr Traum? — Schwarzweiß oder Farbe? Das hat sich geändert, und zwar gründlich. Die Münchner Labore schlafen nicht mehr selbst: Sie lassen andere schlafen — mit Elektroden am Kopf, Infrarotkameras im Zimmer und einem Protokoll, das jede Augenbewegung notiert, als wäre sie ein wichtiger Brief.",
      es: "La investigación del sueño tuvo un problema de imagen durante todo el tiempo que existe. Pasaba por charlatanería con cuestionario: ¿Cómo fue tu sueño? — ¿en blanco y negro o en color? Eso cambió, y a fondo. Los laboratorios muniqueses ya no duermen ellos: hacen dormir a otros — con electrodos en la cabeza, cámaras infrarrojas en la habitación y un protocolo que anota cada movimiento ocular, como si fuera una carta importante." },
      { it: "Was dabei herauskam, klingt zuerst banal und dann nicht mehr. Träume sind Wiederholungen des Tages — aber nicht der Stunden, die man für wichtig hielt: die Flaschen, die Gespräche, die Termine. Geträumt wird das Gerinne — die halb vergessene Begegnung, der Moment vor dem Einschlafen, der Satz, den man nicht gesagt hat. Das Unwichtige erweist sich als das Wichtige, und zwar in der Reihenfolge, in der es verwahrt wird.",
      es: "Lo que salió de allí suena primero banal y luego no. Los sueños son repeticiones del día — pero no de las horas que uno creyó importantes: las compras, las conversaciones, las citas. Se sueña el sedimento — el encuentro medio olvidado, el momento antes de dormirse, la frase que no se dijo. Lo importante de menos resulta ser lo importante, y en el orden en que se archiva." },
      { it: "Die praktischen Folgen betreten alle Lebensbereiche, die man nicht erwartet hätte. Sportler wiederholen im Traum Bewegungen — und verbessern messbar; Musiker üben nachts weiter, wortwörtlich; und die Traumarbeit, die jahrzehntelang als therapeutische Dichtung galt, zeigt in den Bildern etwas, das man mit Vorsicht Fortschritt nennen darf: Patienten, die im Traum üben, schwierige Gespräche zu führen, führen sie danach besser — auch im Wachsein, auch ohne Traumdeutung.",
      es: "Las consecuencias prácticas entran en todos los ámbitos que nadie esperaba. Los deportistas repiten en sueños movimientos — y mejoran de forma medible; los músicos ensayan de noche, literalmente; y el trabajo con sueños, que durante décadas pasó por poesía terapéutica, muestra en las imágenes algo que con cautela puede llamarse progreso: pacientes que en sueños ensayan conversaciones difíciles, las llevan después mejor — también despiertos, también sin interpretación." },
      { it: "Die Münchner Forscher hüten vor dem, was sie «die Wellness-Falle» nennen: Traum als Lebenshilfe-Abo, mit Büchern, Seminaren und Deutungs-Datenbanken. Die Wissenschaft, sagen sie, sei ein Werkzeug wie ein Mikroskop — man kann damit Zellen sehen oder Kratzer im Handydisplay. Der Traum zeige nicht die Zukunft. Er zeige die Gegenwart, in Zeitlupe — und das sei, für alle, die genau hinschauen wollen, schon mehr als genug.",
      es: "Los investigadores muniqueses previenen contra lo que llaman «la trampa del bienestar»: el sueño como suscripción de autoayuda, con libros, seminarios y bases de datos de interpretación. La ciencia, dicen, es una herramienta como un microscopio — con él se ven células o arañazos en la pantalla. El sueño no muestra el futuro. Muestra el presente, en cámara lenta — y eso, para quien quiera mirar con cuidado, ya es más que suficiente." },
    ],
    words: [
      { it: "die Traumforschung", es: "la investigación del sueño" },
      { it: "die Elektrode", es: "el electrodo" },
      { it: "das Gerinne", es: "el sedimento, el depósito" },
      { it: "wortwörtlich", es: "literalmente" },
      { it: "die Traumdeutung", es: "la interpretación de los sueños" },
      { it: "die Zeitlupe", es: "la cámara lenta" },
      { it: "die Wellness-Falle", es: "la trampa del bienestar" },
    ],
    questions: [
      { q: "¿Cómo eran antes los laboratorios del sueño y cómo son ahora?", options: ["Sie schlafen selbst; jetzt lassen sie andere schlafen — mit Elektroden, Infrarotkameras und Protokoll", "Sie sind gleich geblieben", "Sie gibt es nicht mehr", "Sie sind nach Berlin gezogen"], answer: 0, why: "«Die Münchner Labore schlafen nicht mehr selbst: Sie lassen andere schlafen — mit Elektroden am Kopf, Infrarotkameras im Zimmer und einem Protokoll, das jede Augenbewegung notiert.»" },
      { q: "¿Qué se sueña, según los hallazgos?", options: ["Die wichtigen Stunden: Termine, Flaschen, Gespräche", "Das Gerinne: die halb vergessene Begegnung, der Moment vor dem Einschlafen, der Satz, den man nicht gesagt hat", "Die Zukunft", "Nichts"], answer: 1, why: "«Geträumt wird das Gerinne — die halb vergessene Begegnung… Das Unwichtige erweist sich als das Wichtige.»" },
      { q: "¿Qué consecuencias inesperadas se mencionan?", options: ["Nur Enttäuschungen", "Sportler verbessern messbar, Musiker üben nachts weiter, und Patienten, die im Traum Gespräche üben, führen sie danach besser", "Alle träumen gleich", "Keine"], answer: 1, why: "«Sportler wiederholen im Traum Bewegungen — und verbessern messbar; Musiker üben nachts weiter… Patienten, die im Traum üben, schwierige Gespräche zu führen, führen sie danach besser.»" },
      { q: "¿Qué es «la trampa del bienestar»?", options: ["Ein Fitnessstudio", "Traum als Lebenshilfe-Abo mit Büchern, Seminaren und Deutungs-Datenbanken", "Ein Wellness-Hotel", "Ein Schlaftest"], answer: 1, why: "Die Münchner Forscher hüten vor der «Wellness-Falle»: Traum als Lebenshilfe-Abo, mit Büchern, Seminaren und Deutungs-Datenbanken." },
      { q: "¿Qué muestra el sueño, según los investigadores?", options: ["Die Zukunft", "Die Gegenwart, in Zeitlupe", "Das Schicksal", "Die Zahlen"], answer: 1, why: "«Der Traum zeige nicht die Zukunft. Er zeige die Gegenwart, in Zeitlupe — und das sei schon mehr als genug.»" },
    ],
    discuss: [
      { it: "Das Gerinne Ihres Tages: Was davon träumen Sie? Erzählen Sie — wenn Sie mögen.", es: "El sedimento de tu día: ¿qué parte sueñas? Cuenta — si quieres." },
      { it: "«Werkzeug wie ein Mikroskop»: Welche Wissenschaft wird bei Ihnen als Zauberei verkauft? Beispiel, bitte.", es: "«Herramienta como un microscopio»: ¿qué ciencia te venden como magia? Un ejemplo, por favor." },
    ],
  },

  /* ═══ B2 · 3 — Kultur ═══ */
  {
    id: "de-news-b2-03", cat: "cultura", level: "B2", place: "Leipzig", minutes: 4,
    title: "Die Stadt, die Musik erfunden hat (fast)",
    titleEs: "La ciudad que inventó la música (casi)",
    lead: {
      it: "In Leipzig wohnten Bach, Schumann, Mendelssohn und Wagner — vier Komponisten, ein Briefkasten. Die Stadt feiert das mit einer Eigenart: Sie tut es, als wäre es selbstverständlich, und packt die Weltklasse in den Alltag.",
      es: "En Leipzig vivieron Bach, Schumann, Mendelssohn y Wagner — cuatro compositores, un buzón. La ciudad lo celebra con una peculiaridad: lo hace como si fuera natural, y guarda la clase mundial en la vida diaria.",
    },
    paragraphs: [
      { it: "Die Anekdote zuerst, weil sie alles erklärt: In Leipzig kann man in der Wohnung wohnen, in der Bach zwanzig Jahre wohnte — und nebenan ein Probelokal betreiben, ohne dass jemand aufhört zu spielen, wenn die Führung vorbeikommt. Die Stadt behandelt ihre Heiligen wie Nachbarn: mit Respekt, aber ohne Ehrfurchtstarre.",
      es: "La anécdota primero, porque lo explica todo: en Leipzig se puede vivir en la vivienda donde Bach vivió veinte años — y al lado montar una sala de ensayo, sin que nadie deje de tocar cuando pasa la visita guiada. La ciudad trata a sus santos como vecinos: con respeto, pero sin pasmo." },
      { it: "Das Gewandhaus, das Konzertgebäude, ist der Beweis in Stein. Der Saal heisst so, weil das Orchester im achtzehnten Jahrhundert in einem Gewandhaus spielte — einem Haus für Schneider. Die Musiker haben den Namen behalten, wie man einen Spitznamen behält, und tragen ihn mit dem Stolz von Leuten, die wissen: Wir sind aus einem Laden für Stoffen hervorgegangen. Das Publikum stimmt ein, und zwar buchstäblich: Es singt in einem Chor, der Laien sind und trotzdem Weltklasse-Anspruch haben — ein Leipzig-Sonderfall, wie die Engländer sagen würden: very matter of factly",
      es: "El Gewandhaus, el edificio de conciertos, es la prueba en piedra. La sala se llama así porque la orquesta en el siglo dieciocho tocaba en una casa de telas — un local de sastres. Los músicos conservaron el nombre, como se conserva un apodo, y lo llevan con el orgullo de quienes saben: salimos de una tienda de géneros. El público acompaña, y literalmente: canta en un coro que son aficionados y aun así tienen nivel mundial — una particularidad de Leipzig." },
      { it: "Die Stadt hat alles überlebt, was Städte überleben können — Kriege, Teilungen, Trends — und die Musik bei jedem Schritt mitgenommen. Im Sommer spielt das Orchester im Park, vor Leuten auf Deckchen; im Winter üben Studenten in Passagen, und die Passanten bleiben stehen, als wäre das Warten erfunden worden, um Musik zu hören. Die Eintrittskarten für große Konzerte bleiben, gegen jeden Trend der Branche, bezahlbar — ein Beschluss, der wie eine Steuerreform diskutiert wurde und wie eine Selbstverständlichkeit endete.",
      es: "La ciudad sobrevivió a todo lo que las ciudades pueden sobrevivir — guerras, divisiones, modas — y se llevó la música en cada paso. En verano la orquesta toca en el parque, ante gente sobre mantas; en invierno los estudiantes ensayan en las galerías, y los transeúntes se detienen, como si la espera se hubiera inventado para oír música. Las entradas para los grandes conciertos siguen, contra toda tendencia del sector, siendo asequibles — una decisión que se discutió como una reforma fiscal y terminó como algo natural." },
      { it: "Ein Konzertmeister, im Ruhestand, hat die Stadt in einen Satz gefasst, der jetzt über den Eingängen hängt: «Andere Städte bauen Hallen und hoffen auf Wunder. Leipzig hatte das Wunder zuerst — und musste nur noch die Stühle hinstellen. Wir sitzen seit dreihundert Jahren. Und wir stehen nur auf, wenn es Applaus gibt.»",
      es: "Un concertino, jubilado, condensó la ciudad en una frase que ahora cuelga sobre las entradas: «Otras ciudades construyen salas y esperan milagros. Leipzig tuvo primero el milagro — y solo tuvo que poner las sillas. Llevamos trescientos años sentados. Y solo nos levantamos cuando hay aplausos.»" },
    ],
    words: [
      { it: "das Gewandhaus", es: "la casa de telas (hoy sala de conciertos)" },
      { it: "das Probelokal", es: "la sala de ensayo" },
      { it: "die Ehrfurcht", es: "la reverencia, el pasmo" },
      { it: "der Laie", es: "el aficionado (no profesional)" },
      { it: "die Passage", es: "la galería comercial" },
      { it: "der Beschluss", es: "la decisión, el acuerdo" },
      { it: "der Konzertmeister", es: "el concertino" },
    ],
    questions: [
      { q: "¿Cómo trata Leipzig a sus santos, según la anécdota?", options: ["Mit Ehrfurchtstarre", "Wie Nachbarn: mit Respekt, aber ohne Ehrfurcht — man kann neben Bachs Wohnung ein Probelokal betreiben", "Gar nicht", "Als Touristenattraktion"], answer: 1, why: "«Die Stadt behandelt ihre Heiligen wie Nachbarn: mit Respekt, aber ohne Ehrfurchtstarre.»" },
      { q: "¿Por qué se llama «Gewandhaus» la sala?", options: ["Weil es ein Palast war", "Weil das Orchester im achtzehnten Jahrhundert in einem Gewandhaus — einem Haus für Schneider — spielte", "Weil Musik wie Stoff klingt", "Ohne Grund"], answer: 1, why: "«Der Saal heisst so, weil das Orchester im achtzehnten Jahrhundert in einem Gewandhaus spielte — einem Haus für Schneider.»" },
      { q: "¿Qué particularidad tiene el público?", options: ["Es sitzt immer schweigend", "Es singt in einem Chor, der Laien sind und trotzdem Weltklasse-Anspruch haben", "Es kommt nie", "Es zahlt nichts"], answer: 1, why: "«Es singt in einem Chor, der Laien sind und trotzdem Weltklasse-Anspruch haben — ein Leipzig-Sonderfall.»" },
      { q: "¿Qué decidió la ciudad sobre las entradas?", options: ["Gratis für alle", "Bezahlbar bleiben — ein Beschluss, der wie eine Steuerreform diskutiert wurde und wie eine Selbstverständlichkeit endete", "Sehr teuer", "Nur für Mitglieder"], answer: 1, why: "«Die Eintrittskarten für große Konzerte bleiben, gegen jeden Trend der Branche, bezahlbar — ein Beschluss, der wie eine Steuerreform diskutiert wurde.»" },
      { q: "¿Qué dijo el concertino jubilado?", options: ["«Leipzig hatte das Wunder zuerst — und musste nur noch die Stühle hinstellen. Wir sitzen seit dreihundert Jahren.»", "«Wir bauen jetzt Hallen.»", "«Musik ist Nebensache.»", "«Andere Städte sind besser.»"], answer: 0, why: "«Andere Städte bauen Hallen und hoffen auf Wunder. Leipzig hatte das Wunder zuerst — und musste nur noch die Stühle hinstellen.»" },
    ],
    discuss: [
      { it: "Wunder zuerst, Stühle danach: Welche Stadt haben Sie so erlebt? Beschreiben Sie den Moment.", es: "Primero el milagro, luego las sillas: ¿qué ciudad viviste así? Describe el momento." },
      { it: "Bezahlbare Karten gegen jeden Trend: Wofür zahlt Ihre Stadt diesen Preis? Und wofür nicht?", es: "Entradas asequibles contra toda tendencia: ¿por qué paga tu ciudad ese precio? ¿Y por qué no?" },
    ],
  },
];
