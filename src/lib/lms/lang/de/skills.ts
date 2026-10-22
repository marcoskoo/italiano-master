import type { ListeningTask, ReadingText, WritingPrompt, ConversationScenario } from "../../types";

/* ═══ Deutsch · destrezas: escucha, lectura, escritura y conversación ══
   v9.39 · espejo de src/lib/lms/{listening,reading,writing,conversation}.ts
   Convención de campos: `.it` = texto en alemán (lengua de estudio),
   `.es` = español. Escenarios alemanes (Bäckerei, Bahn, Wohnungssuche,
   Arzttermin, Volksfest), Hochdeutsch: coma ante subordinada, ß tras
   vocal larga (groß, heißt) y ss tras breve (muss, Wasser), reloj 24 h
   con Uhr. TutorSeed y frases modelo en alemán; tips en español.       */

/* ── Escucha · tareas con TTS ─────────────────────────────────────── */

export const DE_LISTENING: ListeningTask[] = [
  {
    id: "de-ls-1", level: "A1", title: "En la panadería", kind: "dialogo",
    dialogue: [
      { speaker: "Verkäuferin", it: "Guten Morgen! Was darf es sein?", es: "¡Buenos días! ¿Qué le pongo?" },
      { speaker: "Kunde", it: "Guten Morgen! Ich hätte gern zwei Brötchen und ein Mischbrot, bitte.", es: "¡Buenos días! Quisiera dos panecillos y una barra de pan, por favor." },
      { speaker: "Verkäuferin", it: "Gerne. Sonst noch etwas?", es: "Con gusto. ¿Algo más?" },
      { speaker: "Kunde", it: "Ja, eine Brezel, bitte. Was kostet das alles?", es: "Sí, un pretzel, por favor. ¿Cuánto cuesta todo?" },
      { speaker: "Verkäuferin", it: "Das macht zusammen 4 Euro 60.", es: "En total son 4 euros con 60." },
      { speaker: "Kunde", it: "Kann ich mit Karte zahlen?", es: "¿Puedo pagar con tarjeta?" },
      { speaker: "Verkäuferin", it: "Selbstverständlich. Möchten Sie eine Tüte?", es: "Por supuesto. ¿Quiere una bolsa?" },
      { speaker: "Kunde", it: "Ja, bitte. Danke schön, schönen Tag noch!", es: "Sí, por favor. ¡Muchas gracias, que tenga un buen día!" },
    ],
    questions: ["ex-de-ls-01", "ex-de-ls-02"],
  },
  {
    id: "de-ls-2", level: "A2", title: "Billetes de tren: automático y ventanilla", kind: "dialogo",
    dialogue: [
      { speaker: "Reisende", it: "Guten Tag, der Automat nimmt meine Karte nicht. Ich brauche ein Ticket nach Hamburg.", es: "Buenos días, la máquina no acepta mi tarjeta. Necesito un billete para Hamburgo." },
      { speaker: "Beamter", it: "Kein Problem, das mache ich hier am Schalter. Einfach oder hin und zurück?", es: "No hay problema, eso lo hago aquí en la ventanilla. ¿Solo ida o ida y vuelta?" },
      { speaker: "Reisende", it: "Hin und zurück, bitte. Wann fährt der nächste Zug?", es: "Ida y vuelta, por favor. ¿Cuándo sale el próximo tren?" },
      { speaker: "Beamter", it: "Um 14:12 Uhr von Gleis 8. Der ICE braucht zwei Stunden nach Hamburg.", es: "A las 14:12 desde la vía 8. El ICE tarda dos horas hasta Hamburgo." },
      { speaker: "Reisende", it: "Muss ich umsteigen?", es: "¿Tengo que hacer transbordo?" },
      { speaker: "Beamter", it: "Nein, der Zug fährt direkt. Heute hat er aber zehn Minuten Verspätung.", es: "No, el tren va directo. Pero hoy lleva diez minutos de retraso." },
      { speaker: "Reisende", it: "Alles klar. Und gilt das Ticket auch für die S-Bahn?", es: "Perfecto. ¿Y el billete vale también para el S-Bahn?" },
      { speaker: "Beamter", it: "Ja, in Hamburg gilt es im ganzen Nahverkehr. Gute Reise!", es: "Sí, en Hamburgo vale para todo el transporte regional. ¡Buen viaje!" },
    ],
    questions: ["ex-de-ls-03", "ex-de-ls-04"],
  },
  {
    id: "de-ls-3", level: "B1", title: "Buscando habitación en Berlín", kind: "dialogo",
    dialogue: [
      { speaker: "Sara", it: "Guten Tag, ich komme wegen der WG-Besichtigung. Ich habe um 17 Uhr einen Termin.", es: "Buenas tardes, vengo por la visita al piso compartido. Tengo cita a las 17." },
      { speaker: "Mitbewohner", it: "Ah, Sie müssen Sara sein! Kommen Sie herein. Hier ist die Küche, sie ist ziemlich groß.", es: "¡Ah, usted debe de ser Sara! Pase. Aquí está la cocina, es bastante grande." },
      { speaker: "Sara", it: "Sehr schön. Und das freie Zimmer ist am Ende des Flurs, oder?", es: "Muy bonita. ¿Y la habitación libre está al final del pasillo, verdad?" },
      { speaker: "Mitbewohner", it: "Genau. Es ist hell und geht zum Hinterhof, deshalb ist es ruhig. Die Miete beträgt 450 Euro warm.", es: "Exacto. Es luminosa y da al patio interior, por eso es tranquila. El alquiler es de 450 euros con gastos incluidos." },
      { speaker: "Sara", it: "Internet und Nebenkosten sind also inklusive?", es: "¿Entonces internet y los gastos están incluidos?" },
      { speaker: "Mitbewohner", it: "Ja. Sie müssten nur eine Kaution von zwei Monatsmieten zahlen. Ab wann könnten Sie einziehen?", es: "Sí. Solo tendría que pagar una fianza de dos mensualidades. ¿Desde cuándo podría mudarse?" },
      { speaker: "Sara", it: "Ab dem ersten Juni, wenn das möglich ist. Ich melde mich morgen bei Ihnen.", es: "Desde el uno de junio, si es posible. Mañana les doy una respuesta." },
    ],
    questions: ["ex-de-ls-05", "ex-de-ls-06"],
  },
  {
    id: "de-ls-4", level: "B2", title: "Pedir cita en el consultorio", kind: "dialogo",
    dialogue: [
      { speaker: "Arzthelferin", it: "Praxis Dr. Weber, guten Tag! Was kann ich für Sie tun?", es: "Consultorio del doctor Weber, ¡buenos días! ¿En qué puedo ayudarle?" },
      { speaker: "Patient", it: "Guten Tag, Schneider. Ich möchte einen Termin vereinbaren. Ich habe seit drei Tagen starke Halsschmerzen.", es: "Buenos días, Schneider. Quisiera pedir una cita. Llevo tres días con un fuerte dolor de garganta." },
      { speaker: "Arzthelferin", it: "Haben Sie auch Fieber?", es: "¿Tiene fiebre también?" },
      { speaker: "Patient", it: "Ja, gestern Abend hatte ich 38,5 Grad, und nachts habe ich kaum geschlafen.", es: "Sí, ayer por la noche tenía 38,5 grados y por la noche casi no he dormido." },
      { speaker: "Arzthelferin", it: "Dann sollten Sie noch heute vorbeikommen. Können Sie um 11:30 Uhr?", es: "Entonces debería pasar hoy mismo. ¿Puede a las 11:30?" },
      { speaker: "Patient", it: "Das passt gut. Soll ich die Versichertenkarte mitbringen?", es: "Me viene bien. ¿Debo traer la tarjeta sanitaria?" },
      { speaker: "Arzthelferin", it: "Ja, bitte. Falls Sie Husten haben, tragen Sie bitte eine Maske, weil hier viele ältere Patienten warten.", es: "Sí, por favor. Si tiene tos, póngase una mascarilla, porque aquí esperan muchos pacientes mayores." },
      { speaker: "Patient", it: "Selbstverständlich. Vielen Dank für den Termin, bis später!", es: "Por supuesto. Muchas gracias por la cita, ¡hasta luego!" },
    ],
    questions: ["ex-de-ls-07", "ex-de-ls-08"],
  },
  {
    id: "de-ls-5", level: "C1", title: "En la fiesta popular", kind: "dialogo",
    dialogue: [
      { speaker: "Jonas", it: "Ich muss gestehen, dass ich trotz der Menschenmassen gern aufs Volksfest gehe. Diese Mischung aus Tradition und Jahrmarktsrummel gibt es sonst nirgends.", es: "He de confesar que, pese a las multitudes, me encanta ir a la fiesta popular. Esa mezcla de tradición y bullicio ferial no existe en ningún otro sitio." },
      { speaker: "Elena", it: "Das sehe ich genauso, obwohl die Preise für eine Maß jedes Jahr neue Höchststände erreichen.", es: "Yo lo veo igual, aunque los precios de la jarra alcanzan cada año nuevos récords." },
      { speaker: "Jonas", it: "Sag mal, sollen wir ins Festzelt gehen, oder ziehen wir es vor, draußen zu bleiben, solange das Wetter mitspielt?", es: "Oye, ¿entramos en la carpa o preferimos quedarnos fuera mientras el tiempo acompañe?" },
      { speaker: "Elena", it: "Lass uns draußen bleiben. Ich möchte die Live-Musik im Biergarten genießen, bevor es zu voll wird.", es: "Quedémonos fuera. Quiero disfrutar de la música en directo en el jardín de la cerveza antes de que se llene." },
      { speaker: "Jonas", it: "Abgemacht. Übrigens habe ich gehört, dass das Feuerwerk heute um 22 Uhr gezündet wird.", es: "Hecho. Por cierto, he oído que hoy los fuegos artificiales se encienden a las 22." },
      { speaker: "Elena", it: "Dann bleiben wir solange. Weißt du noch, wie wir uns letztes Jahr zwischen den Fahrgeschäften verlaufen haben?", es: "Pues nos quedamos hasta entonces. ¿Te acuerdas de cómo nos perdimos el año pasado entre las atracciones?" },
      { speaker: "Jonas", it: "Wie könnte ich das vergessen! Diesmal orientieren wir uns einfach am Riesenrad.", es: "¡Cómo voy a olvidarlo! Esta vez nos orientamos simplemente por la noria." },
    ],
    questions: ["ex-de-ls-09", "ex-de-ls-10"],
  },
  {
    id: "de-ls-6", level: "C2", title: "Charla con una escritora", kind: "dialogo",
    dialogue: [
      { speaker: "Moderatorin", it: "Frau Berger, Ihr neuer Roman spielt im Leipzig der Achtzigerjahre. Was hat Sie zu diesem Stoff bewogen?", es: "Señora Berger, su nueva novela transcurre en el Leipzig de los años ochenta. ¿Qué la llevó a este material?" },
      { speaker: "Schriftstellerin", it: "Mich hat schon immer die Frage umgetrieben, wie Menschen unter widrigen Umständen ihre Würde bewahren. Die letzten Jahre der DDR liefern dafür ein ergiebiges Panorama.", es: "Siempre me ha rondado la pregunta de cómo conservan las personas su dignidad en circunstancias adversas. Los últimos años de la RDA ofrecen para ello un panorama fecundo." },
      { speaker: "Moderatorin", it: "Ihre Sätze sind auffallend knapp. Ist das Methode oder Temperament?", es: "Sus frases son llamativamente escuetas. ¿Es método o temperamento?" },
      { speaker: "Schriftstellerin", it: "Beides. Was unausgesprochen bleibt, wirkt oft länger nach als das Gesagte; meine Figuren schweigen deshalb viel.", es: "Ambas cosas. Lo que queda sin decir suele repercutir más tiempo que lo dicho; por eso mis personajes callan tanto." },
      { speaker: "Moderatorin", it: "Wird der Roman auch ins Spanische übertragen?", es: "¿Se traducirá la novela al español?" },
      { speaker: "Schriftstellerin", it: "Ja, und ich bin gespannt, ob meine Ellipsen die Übersetzung überleben werden.", es: "Sí, y tengo curiosidad por saber si mis elipsis sobrevivirán a la traducción." },
    ],
    questions: ["ex-de-ls-11", "ex-de-ls-12"],
  },
];

/* ── Lectura · textos graduados ───────────────────────────────────── */

export const DE_READINGS: ReadingText[] = [
  {
    id: "de-rd-1", level: "A1", title: "Una postal desde Múnich", titleIt: "Eine Postkarte aus München",
    genre: "Postal", minutes: 2,
    paragraphs: [
      { it: "Hallo Anna! Jetzt bin ich in München. Die Stadt ist wunderschön.", es: "¡Hola, Anna! Ya estoy en Múnich. La ciudad es preciosísima." },
      { it: "Am Morgen frühstücken wir im Café: einen Kaffee und eine Brezel mit Butter. Die Brezel ist hier sehr salzig!", es: "Por la mañana desayunamos en el café: un café y un pretzel con mantequilla. ¡El pretzel aquí es muy salado!" },
      { it: "Heute besichtigen wir den Marienplatz und das Rathaus. Morgen fahren wir zum Schloss Nymphenburg.", es: "Hoy visitamos la Marienplatz y el ayuntamiento. Mañana vamos al palacio de Nymphenburg." },
      { it: "Das Wetter ist gut: Die Sonne scheint! Viele Grüße — Lucía", es: "Hace buen tiempo: ¡hay sol! Un saludo — Lucía" },
    ],
    glossary: [
      { it: "das Rathaus", es: "el ayuntamiento" },
      { it: "die Brezel", es: "el pretzel (pan de lazo con sal gruesa)" },
      { it: "das Schloss", es: "el palacio" },
    ],
    questions: ["ex-de-rd-01", "ex-de-rd-02"],
  },
  {
    id: "de-rd-2", level: "A2", title: "El sábado en el mercado", titleIt: "Der Samstag auf dem Wochenmarkt",
    genre: "Relato", minutes: 3,
    paragraphs: [
      { it: "Jeden Samstagvormittag geht Jonas auf den Wochenmarkt in seinem Viertel. Er nimmt immer eine Stofftasche und eine kurze Liste mit.", es: "Cada sábado por la mañana, Jonas va al mercado semanal de su barrio. Siempre lleva una bolsa de tela y una lista corta." },
      { it: "Zuerst kauft er Obst: Die Äpfel vom Bodensee mag er am liebsten. Danach bekommt er Brot vom Bäckerstand und ein Stück Bergkäse.", es: "Primero compra fruta: las manzanas del lago de Constanza son sus preferidas. Después toma pan del puesto de panadería y un trozo de queso de montaña." },
      { it: "Beim Gemüsehändler fragt er: „Wie viel kostet ein Kilo Kartoffeln?“ Die Verkäuferin antwortet freundlich, weil sie ihn schon lange kennt.", es: "En el puesto de verduras pregunta: «¿Cuánto cuesta un kilo de patatas?». La vendedora le responde amablemente, porque hace tiempo que lo conoce." },
      { it: "Wenn es nicht regnet, trinkt er noch einen Kaffee am Marktplatz und redet mit den Nachbarn. Das ist sein kleines Samstagsglück.", es: "Si no llueve, todavía toma un café en la plaza del mercado y charla con los vecinos. Es su pequeña felicidad del sábado." },
    ],
    glossary: [
      { it: "der Wochenmarkt", es: "el mercado semanal" },
      { it: "der Stand", es: "el puesto" },
      { it: "das Stück", es: "el trozo / la pieza" },
    ],
    questions: ["ex-de-rd-03", "ex-de-rd-04"],
  },
  {
    id: "de-rd-3", level: "B1", title: "La búsqueda de piso en Berlín", titleIt: "Die Wohnungssuche in Berlin",
    genre: "Reportaje", minutes: 4,
    paragraphs: [
      { it: "Berlins Wohnungsmarkt ist hart: Auf ein Zimmer in einer WG bewerben sich manchmal hundert Interessenten. Wer eine Wohnung sucht, braucht Geduld, Glück und vollständige Unterlagen.", es: "El mercado inmobiliario de Berlín es duro: a veces se presentan cien interesados a una habitación en un piso compartido. Quien busca vivienda necesita paciencia, suerte y documentación completa." },
      { it: "Für viele junge Leute ist die WG die erste Lösung. Die Miete wird geteilt, und die Suche läuft über Internetportale. Wichtig sind ein freundliches Profil und ein gepflegtes Bewerbungsfoto.", es: "Para muchos jóvenes, el piso compartido es la primera solución. El alquiler se reparte y la búsqueda se hace por portales de internet. Un perfil amable y una foto cuidada son importantes." },
      { it: "Bei der Besichtigung zählt der erste Eindruck. Wer pünktlich kommt, gute Fragen stellt und ehrlich antwortet, hat bessere Chancen. Üblich sind eine Kaution von zwei Monatsmieten und ein Einkommensnachweis.", es: "En la visita al piso cuenta la primera impresión. Quien llega puntual, hace buenas preguntas y responde con sinceridad tiene más posibilidades. Lo habitual es una fianza de dos mensualidades y un justificante de ingresos." },
      { it: "Experten geben einen klaren Rat: Wer realistisch bleibt und schnell reagiert, findet früher oder später ein neues Zuhause. Der Weg dorthin ist mühsam, aber er lehrt viel über das Land und seine Bürokratie.", es: "Los expertos dan un consejo claro: quien es realista y reacciona rápido acaba encontrando un nuevo hogar. El camino es costoso, pero enseña mucho sobre el país y su burocracia." },
    ],
    glossary: [
      { it: "die WG (Wohngemeinschaft)", es: "el piso compartido" },
      { it: "die Kaution", es: "la fianza" },
      { it: "die Besichtigung", es: "la visita (al piso)" },
    ],
    questions: ["ex-de-rd-05", "ex-de-rd-06"],
  },
  {
    id: "de-rd-4", level: "B2", title: "El país del tren", titleIt: "Die Bahn und die Mobilitätswende",
    genre: "Artículo", minutes: 5,
    paragraphs: [
      { it: "Die Deutschen gelten als Volk der Autobahn, doch in keinem anderen Land wird so viel über die Bahn gestritten, geliebt und geflucht wie hier. Die Deutsche Bahn befördert jedes Jahr Milliarden von Reisenden und steht trotzdem ständig in der Kritik.", es: "Los alemanes pasan por ser el pueblo de la autopista, pero en ningún otro país se discute, se ama y se reniega tanto del tren como aquí. La Deutsche Bahn transporta cada año miles de millones de viajeros y, aun así, vive bajo crítica constante." },
      { it: "Seit 2023 gibt es das Deutschlandticket: Für einen monatlichen Festpreis gilt es in Bussen und Bahnen des gesamten Nahverkehrs. Millionen Menschen nutzen das Angebot, das den öffentlichen Verkehr attraktiver machen soll.", es: "Desde 2023 existe el Deutschlandticket: por una cuota mensual fija vale en buses y trenes de todo el transporte regional. Millones de personas usan esta oferta, destinada a hacer más atractivo el transporte público." },
      { it: "Die Kritik ist trotzdem laut: Verspätungen, überfüllte Züge und Baustellen prägen den Alltag vieler Pendler. Befürworter entgegnen, dass die Klimaziele ohne die Bahn nicht zu erreichen wären.", es: "La crítica no obstante es sonora: retrasos, trenes abarrotados y obras marcan el día a día de muchos viajeros. Los defensores replican que, sin el tren, los objetivos climáticos no serían alcanzables." },
      { it: "Am Ende bleibt ein Land im Umbau: Die Städte planen neue Radwege und autofreie Zonen, während auf dem Land das Auto oft unersetzlich bleibt. Die Mobilitätswende ist längst nicht abgeschlossen, aber sie hat begonnen.", es: "Al final queda un país en obras: las ciudades planean nuevos carriles bici y zonas sin coches, mientras que en el campo el coche sigue siendo a menudo insustituible. La transición de la movilidad está lejos de terminar, pero ya ha empezado." },
    ],
    glossary: [
      { it: "die Mobilitätswende", es: "la transición de la movilidad" },
      { it: "der Pendler", es: "el viajero diario / el que va al trabajo" },
      { it: "die Verspätung", es: "el retraso" },
    ],
    questions: ["ex-de-rd-07", "ex-de-rd-08"],
  },
  {
    id: "de-rd-5", level: "C1", title: "La noche del Muro", titleIt: "Der Mauerfall",
    genre: "Historia", minutes: 6,
    paragraphs: [
      { it: "Am 9. November 1989, kurz nach 19 Uhr, verlas Günter Schabowski auf einer Pressekonferenz müde einen Beschluss. Auf die Frage, wann die neuen Reiseregeln gelten, antwortete er: „Ab sofort, unverzüglich.“ Es war ein Fehler mit Folgen.", es: "El 9 de noviembre de 1989, poco después de las 19, Günter Schabowski leyó cansado una decisión en una rueda de prensa. A la pregunta de cuándo entraban en vigor las nuevas normas de viaje, respondió: «Desde ahora mismo, sin demora». Fue un error con consecuencias." },
      { it: "Noch am selben Abend strömten Tausende DDR-Bürger zu den Grenzübergängen. Die Wachen, die keine klaren Befehle hatten, öffneten schließlich die Schranken. Am Grenzübergang Bornholmer Straße fielen sich Fremde weinend in die Arme.", es: "Esa misma noche, miles de ciudadanos de la RDA se agolparon en los pasos fronterizos. Los guardias, que no tenían órdenes claras, acabaron abriendo las barreras. En el paso de Bornholmer Straße, desconocidos se abrazaron llorando." },
      { it: "In den folgenden Nächten eroberten die Berliner die Mauer zurück: mit Hämmern, Sekt und Tränen. Die Bilder von der Maueröffnung gingen um die Welt und wurden zum Symbol eines friedlichen Umbruchs, den kaum jemand für möglich gehalten hatte.", es: "En las noches siguientes, los berlineses reconquistaron el muro: con martillos, espumoso y lágrimas. Las imágenes de la apertura del muro dieron la vuelta al mundo y se convirtieron en símbolo de un cambio pacífico que casi nadie había creído posible." },
      { it: "Wenige Monate später, am 3. Oktober 1990, trat die DDR der Bundesrepublik bei. Die Wiedervereinigung brachte Freiheit, aber auch wirtschaftliche Erschütterungen, deren Spuren bis heute sichtbar sind.", es: "Pocos meses después, el 3 de octubre de 1990, la RDA se incorporó a la República Federal. La reunificación trajo libertad, pero también sacudidas económicas cuyas huellas siguen visibles hoy." },
      { it: "Heute erinnern nur noch wenige Reste an die Mauer, die die Stadt 28 Jahre lang teilte. Die Gedenkstätte an der Bernauer Straße bewahrt die Erinnerung daran, dass Freiheit nichts Selbstverständliches ist.", es: "Hoy solo unos pocos restos recuerdan el muro que partió la ciudad durante 28 años. El memorial de la calle Bernauer conserva la memoria de que la libertad no es algo que se dé por descontado." },
    ],
    glossary: [
      { it: "die Grenze", es: "la frontera" },
      { it: "der Umbruch", es: "el cambio / la transformación" },
      { it: "die Wiedervereinigung", es: "la reunificación" },
    ],
    questions: ["ex-de-rd-09", "ex-de-rd-10"],
  },
  {
    id: "de-rd-6", level: "C2", title: "¿Tutear o tratar de usted?", titleIt: "Duzen oder siezen?",
    genre: "Ensayo", minutes: 6,
    paragraphs: [
      { it: "Kaum eine Frage verunsichert Deutschlernende so sehr wie die Wahl zwischen du und Sie. Dabei war die Regel einst eindeutig: Fremde, Ältere und Vorgesetzte siezte man; Freunde und Verwandte duzte man. Wer die Grenze überschritt, konnte sich schnell blamieren.", es: "Casi ninguna pregunta desorienta tanto a quien aprende alemán como la elección entre du y Sie. Y sin embargo, la regla fue un día inequívoca: a los desconocidos, mayores y superiores se les trataba de Sie; a los amigos y parientes, de du. Quien cruzaba la línea podía quedar en ridículo enseguida." },
      { it: "Diese Ordnung gerät ins Wanken: In Start-ups und an vielen Hochschulen ist das du längst Normalität; das Sie gilt dort stellenweise als distanziert, ja als unhöflich.", es: "Ese orden se tambalea: en las start-ups y en muchas universidades el du es desde hace tiempo lo normal; el Sie se considera allí, en ciertos casos, distante e incluso descortés." },
      { it: "Die Digitalisierung beschleunigt den Wandel: In sozialen Netzwerken duzen sich Menschen, die sich nie begegnet sind, und Sprachhistoriker beobachten, dass die alte Asymmetrie zwischen Jung und Alt allmählich verschwindet.", es: "La digitalización acelera el cambio: en las redes sociales se tutean personas que nunca se han visto, y los historiadores de la lengua observan que la vieja asimetría entre jóvenes y mayores desaparece poco a poco." },
      { it: "Doch das Sie ist nicht tot: In Ämtern, Arztpraxen und an der Kasse bleibt es selbstverständlich. Und wer im Streit vom du ins Sie wechselt, setzt damit ein unüberhörbares Signal der Distanz.", es: "Pero el Sie no está muerto: en las administraciones, los consultorios y las cajas sigue siendo lo natural. Y quien, en plena discusión, pasa del du al Sie, lanza con ello una señal de distancia imposible de no oír." },
      { it: "Der Rat für Lernende lautet deshalb: Im Zweifel siezen, bis das Gegenüber das du anbietet. Denn das Angebot zum du ist und bleibt eine kleine Zeremonie, mit der man Zugehörigkeit schenkt.", es: "Por eso, el consejo para el estudiante es: ante la duda, tratar de usted, hasta que la otra persona ofrezca el du. Porque ofrecer el tuteo es y sigue siendo una pequeña ceremonia con la que se regala pertenencia." },
    ],
    glossary: [
      { it: "das Duzen", es: "el tuteo" },
      { it: "das Siezen", es: "el tratamiento de usted" },
      { it: "die Anrede", es: "la forma de dirigirse a alguien" },
    ],
    questions: ["ex-de-rd-11", "ex-de-rd-12"],
  },
];

/* ── Escritura · consignas por nivel ──────────────────────────────── */

export const DE_WRITINGS: WritingPrompt[] = [
  {
    id: "de-wr-1", level: "A1", title: "Presentarme", task: "Preséntate por escrito: nombre, edad, nacionalidad, ciudad y algo que te gusta.",
    minWords: 30,
    tips: ["Usa sein (ich bin) y haben (ich habe)", "Frase modelo: Ich heiße…, ich bin … Jahre alt, ich wohne in…", "Con una frase corta por idea te basta en A1"],
    model: [
      "Ich heiße Ana und bin 24 Jahre alt.",
      "Ich komme aus Spanien und wohne jetzt in Berlin.",
      "Ich habe einen Bruder. Er heißt Diego.",
      "Ich lerne Deutsch. Ich mag deutsche Musik und Kaffee.",
    ],
    checklist: ["¿Usas ich bin / ich heiße para presentarte?", "¿La edad con Jahre alt (ich bin … Jahre alt)?", "¿Cierras con algo que te gusta (Ich mag…)?"],
  },
  {
    id: "de-wr-2", level: "A2", title: "Mi última semana", task: "Cuenta en Perfekt lo que hiciste la semana pasada: trabajo, estudios y tiempo libre.",
    minWords: 50,
    tips: ["Perfekt con haben (ich habe gekocht) y sein (ich bin gegangen)", "Marcadores: letzte Woche, am Montag, am Wochenende", "Ojo con los verbos de movimiento: van con sein"],
    model: [
      "Letzte Woche war sehr anstrengend.",
      "Am Montag habe ich den ganzen Tag gearbeitet und am Abend für meine Freunde gekocht.",
      "Am Mittwoch bin ich ins Fitnessstudio gegangen und danach habe ich einen deutschen Film gesehen.",
      "Am Samstag sind wir zum See gefahren. Das Wasser war kalt, aber die Sonne war warm!",
    ],
    checklist: ["¿Elegiste bien haben/sein en el Perfekt?", "¿El participio va al final de la frase?", "¿Usaste al menos 4 verbos distintos?"],
  },
  {
    id: "de-wr-3", level: "B1", title: "Un correo para pedir información", task: "Escribe un correo formal para preguntar por una habitación: quién eres, desde cuándo podrías mudarte y una pregunta final.",
    minWords: 60,
    tips: ["Apertura: Sehr geehrte Frau Müller, / Sehr geehrte Damen und Herren,", "Cortesía: ich interessiere mich für…, könnten Sie mir sagen…", "Cierre: Mit freundlichen Grüßen"],
    model: [
      "Sehr geehrte Frau Müller,",
      "ich habe Ihre Anzeige auf dem Portal gelesen und interessiere mich für das Zimmer in der Schillerstraße.",
      "Ich bin 26 Jahre alt und arbeite als Grafikdesignerin in Berlin. Seit zwei Jahren wohne ich schon in der Stadt.",
      "Könnten Sie mir sagen, ob das Zimmer noch frei ist? Ich könnte nächste Woche gern zur Besichtigung kommen.",
      "Mit freundlichen Grüßen — A. García",
    ],
    checklist: ["¿Tratas de usted (Sie) y usas könnten (Konjunktiv II)?", "¿El verbo conjugado va en segunda posición?", "¿Apertura y cierre formales correctos?"],
  },
  {
    id: "de-wr-4", level: "B2", title: "Opinión: el coche en la ciudad", task: "Redacta un texto argumentativo: ¿hay que expulsar el coche de los centros urbanos? Tesis, un argumento a favor, uno en contra y conclusión.",
    minWords: 100,
    tips: ["Conectores: einerseits … andererseits, allerdings, deshalb", "Hipótesis con Konjunktiv II: Wenn die Städte … böten, würden …", "Conclusión: Zusammenfassend bin ich der Meinung, dass…"],
    model: [
      "In den letzten Jahren wird heftig darüber diskutiert, ob Autos aus den Innenstädten verbannt werden sollen.",
      "Einerseits ist unbestreitbar, dass der Verkehr die Luft verschmutzt und der Lärm die Lebensqualität senkt.",
      "Andererseits brauchen viele Pendler ihr Auto, weil der ÖPNV gerade auf dem Land lückenhaft ist.",
      "Wenn die Städte bessere Alternativen böten, würden mehr Menschen freiwillig auf das Auto verzichten.",
      "Zusammenfassend bin ich der Meinung, dass Verbote allein nicht genügen: Nur mit überzeugenden Angeboten gelingt die Mobilitätswende.",
    ],
    checklist: ["¿Hay una tesis clara al inicio?", "¿Usas einerseits/andererseits para contrastar?", "¿Konjunktiv II en la hipótesis (böten, würden)?", "¿Conclusión que sintetiza?"],
  },
  {
    id: "de-wr-5", level: "C1", title: "Ensayo breve: lengua e identidad", task: "Ensayo académico: ¿hasta qué punto moldea la lengua que hablamos nuestra forma de pensar?",
    minWords: 120,
    tips: ["Pasivas e impersonales: Erinnert sei…, lässt sich festhalten", "Conectores académicos: dennoch, hingegen, freilich", "Matiz con modalverben: sie schreibt ihnen nichts vor"],
    model: [
      "Es ist ein Gemeinplatz zu behaupten, dass die Sprache das Denken bestimmt; dennoch enthält diese These einen wahren Kern.",
      "Erinnert sei an Wilhelm von Humboldt, der die Sprache als das bildende Organ des Gedanken bezeichnete.",
      "Das Deutsche begünstigt mit seinen Komposita und der Satzklammer eine Denkweise, die Geduld verlangt: Erst am Satzende löst sich die Spannung.",
      "Wer mehrere Sprachen spricht, weiß hingegen, dass keine davon ein Gefängnis ist; jede öffnet dem Blick andere Fenster.",
      "Freilich prägt jede Sprache ihre Sprecher, doch sie schreibt ihnen nichts vor.",
      "Abschließend lässt sich festhalten, dass die Sprache keine Mauer, sondern eine Brücke ist: Sie begrenzt das Denken nicht, sie lenkt es.",
    ],
    checklist: ["¿Registro académico sostenido?", "¿Conectores variados (dennoch, hingegen, freilich)?", "¿Passiv o Passiversatz (lässt sich)?", "¿Síntesis final?"],
  },
  {
    id: "de-wr-6", level: "C2", title: "Una reseña con ironía", task: "Escribe una reseña crítica de una serie, película o exposición: registro elevado, una pizca de ironía y un veredicto matizado.",
    minWords: 150,
    tips: ["Konjunktiv II para lo hipotético: als wäre sie nie anders gefilmt worden", "Inversión concesiva: Mag der dritte Akt auch … sein, so bleibt …", "Cierre con estilo: Fazit: … – und zwar …"],
    model: [
      "Wer die neue Serie „Kreuzberg Nights“ nur nebenbei konsumiert, verpasst ihr Bestes: die Pausen, in denen nichts geschieht und doch alles passiert.",
      "Die Regisseurin verzichtet auf jede Erklärung: Wer Deutungen erwartet, wird enttäuscht; wer genau hinsieht, wird reich belohnt.",
      "Besonders die Hauptdarstellerin meistert die Balance zwischen Verletzlichkeit und Ironie mit einer Leichtigkeit, als wäre sie nie anders gefilmt worden.",
      "Mag der dritte Akt auch etwas behäbig geraten sein, so bleibt doch der Eindruck eines Werks, das man so schnell nicht vergisst.",
      "Fazit: unbedingt sehenswert – und zwar mit voller, ungeteilter Aufmerksamkeit.",
    ],
    checklist: ["¿Ironía fina sin sarcasmo grueso?", "¿Inversión concesiva (Mag …, so …)?", "¿Konjunktiv II en la comparación (als wäre…)?", "¿Veredicto matizado, no tajante?"],
  },
];

/* ── Conversación · escenarios con frases útiles + tutor IA ───────── */

export const DE_CONVERSATION: ConversationScenario[] = [
  {
    id: "de-cs-1", emoji: "👋", title: "Conocer a alguien", level: "A1",
    phrases: [
      { it: "Hallo! Schön, dich kennenzulernen.", es: "¡Hola! Encantado de conocerte." },
      { it: "Wie heißt du? — Ich heiße Marta.", es: "¿Cómo te llamas? — Me llamo Marta." },
      { it: "Woher kommst du? — Ich komme aus Madrid.", es: "¿De dónde eres? — Soy de Madrid." },
      { it: "Was machst du? — Ich bin Studentin.", es: "¿A qué te dedicas? — Soy estudiante." },
      { it: "Sprichst du Englisch? — Ja, ein bisschen.", es: "¿Hablas inglés? — Sí, un poco." },
    ],
    tips: ["En un Sprachcafé el tuteo (du) es lo normal entre gente joven", "kennenzulernen = conocer a alguien: es verbo separable, «schön, dich kennenzulernen»", "Para despedirte de manera informal: Bis bald! (hasta pronto)"],
    tutorSeed: "Simulieren wir ein lockeres Gespräch: Wir lernen uns in einem Sprachcafé in Berlin kennen. Du bist Deutsche und ich stelle mich vor. Fang du an und begrüße mich.",
  },
  {
    id: "de-cs-2", emoji: "🥨", title: "En la panadería", level: "A1",
    phrases: [
      { it: "Guten Morgen! Ich hätte gern zwei Brötchen, bitte.", es: "¡Buenos días! Quisiera dos panecillos, por favor." },
      { it: "Was darf es sein? — Ein Mischbrot, bitte.", es: "¿Qué le pongo? — Una barra de pan, por favor." },
      { it: "Was kostet das?", es: "¿Cuánto cuesta?" },
      { it: "Kann ich mit Karte zahlen?", es: "¿Puedo pagar con tarjeta?" },
      { it: "Möchten Sie eine Tüte? — Ja, bitte. Danke schön!", es: "¿Quiere una bolsa? — Sí, por favor. ¡Muchas gracias!" },
    ],
    tips: ["Ich hätte gern es la fórmula de oro para pedir (Konjunktiv II)", "El pan se pide por piezas: zwei Brötchen, ein Mischbrot", "El cierre clásico del comercio es Schönen Tag noch!"],
    tutorSeed: "Rollenspiel: Du besuchst eine deutsche Bäckerei, ich bin die Verkäuferin. Begrüße mich und bestelle etwas. Ich frage dich, ob du noch etwas möchtest.",
  },
  {
    id: "de-cs-3", emoji: "🚉", title: "Información de trenes", level: "A2",
    phrases: [
      { it: "Entschuldigung, wann fährt der nächste Zug nach Köln?", es: "Disculpe, ¿cuándo sale el próximo tren a Colonia?" },
      { it: "Einmal zweiter Klasse nach Köln, bitte.", es: "Un billete de segunda clase a Colonia, por favor." },
      { it: "Von welchem Gleis fährt der Zug ab?", es: "¿Desde qué vía sale el tren?" },
      { it: "Muss ich umsteigen?", es: "¿Tengo que hacer transbordo?" },
      { it: "Hat der Zug Verspätung? — Ja, zehn Minuten.", es: "¿Va con retraso el tren? — Sí, diez minutos." },
    ],
    tips: ["En el Reisezentrum te atiende una persona; el Fahrkartenautomat acepta tarjeta o monedas", "La Bahn usa el reloj de 24 h: um 14:12 Uhr (las catorce y doce)", "Gilt das Ticket auch für…? sirve para preguntar si el billete vale para otro medio"],
    tutorSeed: "Rollenspiel am Bahnhof: Ich bin der Reisende und du arbeitest am Fahrkartenschalter. Ich möchte ein Ticket kaufen und habe viele Fragen. Hilf mir freundlich weiter.",
  },
  {
    id: "de-cs-4", emoji: "🏠", title: "Ver una habitación (WG)", level: "A2",
    phrases: [
      { it: "Guten Tag, ich komme wegen der Besichtigung.", es: "Buenas tardes, vengo por la visita al piso." },
      { it: "Wie hoch ist die Miete? — 450 Euro warm.", es: "¿Cuánto es el alquiler? — 450 euros con gastos incluidos." },
      { it: "Sind die Nebenkosten inklusive?", es: "¿Están incluidos los gastos?" },
      { it: "Ab wann kann ich einziehen?", es: "¿Desde cuándo puedo mudarme?" },
      { it: "Wie viele Mitbewohner wohnen hier?", es: "¿Cuántos compañeros de piso viven aquí?" },
    ],
    tips: ["warm significa 'con gastos incluidos'; kalt es el alquiler sin gastos", "En las visitas es habitual presentarse brevemente: edad, profesión, aficiones", "El acuerdo casi siempre incluye la Kaution (fianza) de dos o tres mensualidades"],
    tutorSeed: "Rollenspiel: Ich besichtige ein Zimmer in deiner WG in Berlin. Du bist der Mitbewohner und zeigst mir die Wohnung. Beantworte meine Fragen zur Miete, zur Kaution und zum Leben in der WG.",
  },
  {
    id: "de-cs-5", emoji: "🩺", title: "Pedir cita con el médico", level: "B1",
    phrases: [
      { it: "Guten Tag, ich möchte einen Termin vereinbaren.", es: "Buenos días, quisiera pedir una cita." },
      { it: "Ich habe seit drei Tagen Halsschmerzen.", es: "Llevo tres días con dolor de garganta." },
      { it: "Haben Sie Fieber? — Ja, gestern 38,5 Grad.", es: "¿Tiene fiebre? — Sí, ayer 38,5 grados." },
      { it: "Passt es Ihnen am Mittwoch um 10 Uhr?", es: "¿Le viene bien el miércoles a las 10?" },
      { it: "Soll ich die Versichertenkarte mitbringen?", es: "¿Debo traer la tarjeta sanitaria?" },
    ],
    tips: ["Con la asisténtica (Arzthelferin) usa Sie; con el médico muchas veces se pasa al du", "Desde hace… se dice seit drei Tagen y va con presente, no con pasado", "Para describir síntomas: Ich habe Kopfschmerzen / Mir ist übel"],
    tutorSeed: "Rollenspiel: Du rufst in einer Arztpraxis an, ich bin die Arzthelferin. Vereinbare einen Termin und beschreibe deine Beschwerden. Ich schlage dir Termine vor.",
  },
  {
    id: "de-cs-6", emoji: "♻️", title: "Debate: basura y sostenibilidad", level: "B2",
    phrases: [
      { it: "Meiner Meinung nach ist die Mülltrennung eine Frage der Rücksicht.", es: "En mi opinión, separar la basura es una cuestión de consideración." },
      { it: "Wenn alle weniger Plastik kaufen würden, wäre der Effekt enorm.", es: "Si todos compraran menos plástico, el efecto sería enorme." },
      { it: "Da bin ich nicht ganz deiner Meinung, denn…", es: "Ahí no estoy del todo de acuerdo contigo, porque…" },
      { it: "Man muss unterscheiden zwischen…", es: "Hay que distinguir entre…" },
      { it: "Zusammenfassend würde ich sagen, dass…", es: "Resumiendo, diría que…" },
    ],
    tips: ["El Konjunktiv II en la hipótesis (würden … wäre) es la marca del B2", "En Alemania la Mülltrennung (papel, envases, orgánico, resto) es casi un asunto moral", "Matiza con bis zu einem gewissen Grad, in gewisser Hinsicht"],
    tutorSeed: "Debatte: Wir sprechen über Mülltrennung und Nachhaltigkeit in Deutschland. Ich bin etwas skeptisch gegenüber dem ganzen Recycling. Äußere deine Meinung und widersprich mir höflich mit Argumenten.",
  },
];
