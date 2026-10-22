import type { Exercise } from "../../types";

/* ═══ Deutsch · banco de ejercicios de destrezas y situaciones ══════
   v9.39 (Task v9.39/ex-de) · cubre EXACTAMENTE los 37 ids referenciados
   por skills.ts (ex-de-ls-*, ex-de-rd-*) y situations.ts (ex-de-sit-*),
   que antes degradaban a quizzes vacíos porque getExercises solo mira
   el banco italiano. Cada ítem es una pregunta de comprensión sobre el
   texto o diálogo concreto que lo referencia: prompt y explain en
   español con tuteo, opciones en Hochdeutsch, nivel = nivel del texto.
   Topics: ascolto (diálogos), vocabolario (lecturas y léxico en
   contexto), grammatica cuando la pregunta apunta a una forma del
   propio diálogo.
   Nota: el union Topic no incluye "lettura"; las preguntas de lectura
   usan "vocabolario", como los ex-let-* históricos del banco italiano.
   La posición de la opción correcta varía entre 0 y 3 (la vista del
   quiz no baraja opciones y siempre-primera sería trivial).            */

export const DE_EXERCISES: Exercise[] = [
  /* ── Escucha · DE_LISTENING (ex-de-ls-*) ─────────────────────────── */

  /* de-ls-1 · A1 · En la panadería */
  { id: "ex-de-ls-01", type: "mc", level: "A1", topic: "grammatica", prompt: "Fíjate en cómo pide el cliente: ¿con qué fórmula lo hace de forma cortés?",
    options: ["Gib mir zwei Brötchen", "Bring mir zwei Brötchen", "Ich hätte gern zwei Brötchen", "Ich will jetzt zwei Brötchen"], answer: 2,
    explain: "„Ich hätte gern…“ (Konjunktiv II) es la fórmula de oro para pedir en alemán; „ich will“ o el imperativo („gib/bring mir“) suenan exigentes. Así lo hace él: „Ich hätte gern zwei Brötchen und ein Mischbrot, bitte.“" },
  { id: "ex-de-ls-02", type: "mc", level: "A1", topic: "ascolto", prompt: "¿Cuánto cuesta la compra completa?",
    options: ["Das macht zusammen 4 Euro 60", "Das macht zusammen 4 Euro 16", "Das kostet 14 Euro 60", "Das macht zusammen 5 Euro"], answer: 0,
    explain: "„Das macht zusammen 4 Euro 60“ — zusammen significa «en total». Después el cliente pregunta si puede pagar con tarjeta („Kann ich mit Karte zahlen?“)." },

  /* de-ls-2 · A2 · Billetes de tren */
  { id: "ex-de-ls-03", type: "mc", level: "A2", topic: "ascolto", prompt: "¿Qué problema tiene la viajera con el billete?",
    options: ["Der Automat gibt kein Wechselgeld heraus", "Sie hat ihre Karte zu Hause vergessen", "Der Automat verkauft keine Tickets nach Hamburg", "Der Automat nimmt ihre Karte nicht"], answer: 3,
    explain: "„Der Automat nimmt meine Karte nicht“, dice la viajera al abrir el diálogo; por eso el funcionario le hace el billete „hier am Schalter“ (en la ventanilla)." },
  { id: "ex-de-ls-04", type: "mc", level: "A2", topic: "ascolto", prompt: "Sobre el transbordo y la puntualidad, ¿qué dice el empleado?",
    options: ["Der Zug fällt heute aus", "Der Zug fährt direkt, hat aber zehn Minuten Verspätung", "Sie müssen umsteigen, der Zug ist pünktlich", "Der Zug fährt direkt und ist pünktlich"], answer: 1,
    explain: "„Nein, der Zug fährt direkt. Heute hat er aber zehn Minuten Verspätung.“ Sale a las 14:12 desde la vía 8, el ICE tarda dos horas y en Hamburgo el billete vale para todo el Nahverkehr." },

  /* de-ls-3 · B1 · Buscando habitación en Berlín */
  { id: "ex-de-ls-05", type: "mc", level: "B1", topic: "ascolto", prompt: "¿Por qué es tan tranquila la habitación libre?",
    options: ["Sie liegt direkt neben dem Bahnhof", "Sie ist klein und dunkel", "Sie geht zum ruhigen Hinterhof", "Sie liegt an einer lauten Straße"], answer: 2,
    explain: "„Es ist hell und geht zum Hinterhof, deshalb ist es ruhig“ — luminosa y con vistas al patio interior, al final del pasillo (am Ende des Flurs)." },
  { id: "ex-de-ls-06", type: "mc", level: "B1", topic: "ascolto", prompt: "¿Cuánto debe pagar de fianza (Kaution)?",
    options: ["Zwei Monatsmieten", "Drei Monatsmieten", "Eine Monatsmiete", "Gar keine Kaution"], answer: 0,
    explain: "„Sie müssten nur eine Kaution von zwei Monatsmieten zahlen“ — dos mensualidades. Internet y Nebenkosten van incluidos: 450 Euro warm." },

  /* de-ls-4 · B2 · Pedir cita en el consultorio */
  { id: "ex-de-ls-07", type: "mc", level: "B2", topic: "ascolto", prompt: "¿Qué síntomas describe el paciente?",
    options: ["Nur trockenen Husten", "Bauchschmerzen ohne Fieber", "Kopfschmerzen seit einer Woche", "Starke Halsschmerzen, Fieber und kaum Schlaf"], answer: 3,
    explain: "„Seit drei Tagen starke Halsschmerzen“, ayer por la noche 38,5 grados y „nachts habe ich kaum geschlafen“: garganta, fiebre y casi sin dormir." },
  { id: "ex-de-ls-08", type: "mc", level: "B2", topic: "ascolto", prompt: "¿Qué debe llevar el paciente a la consulta de las 11:30?",
    options: ["Nichts, alles steht schon im System", "Die Versichertenkarte; bei Husten zusätzlich eine Maske", "Nur den Reisepass", "Eine Quittung vom Arbeitgeber"], answer: 1,
    explain: "„Bringen Sie die Versichertenkarte mit“ — y, si tiene tos, mascarilla, „weil hier viele ältere Patienten warten“." },

  /* de-ls-5 · C1 · En la fiesta popular */
  { id: "ex-de-ls-09", type: "mc", level: "C1", topic: "ascolto", prompt: "¿Dónde prefieren quedarse Jonas y Elena?",
    options: ["Gleich bei den Fahrgeschäften", "Zu Hause, weil es zu voll wird", "Draußen im Biergarten, bei der Live-Musik", "Im Festzelt, bei der Live-Musik"], answer: 2,
    explain: "„Lass uns draußen bleiben. Ich möchte die Live-Musik im Biergarten genießen, bevor es zu voll wird“ — fuera, en el jardín de la cerveza." },
  { id: "ex-de-ls-10", type: "mc", level: "C1", topic: "ascolto", prompt: "¿A qué hora encienden los fuegos artificiales?",
    options: ["Um 22 Uhr", "Um 20 Uhr", "Um 23 Uhr", "Um Mitternacht"], answer: 0,
    explain: "„Das Feuerwerk wird heute um 22 Uhr gezündet.“ Y esta vez se orientarán por la noria (Riesenrad), para no perderse como el año pasado." },

  /* de-ls-6 · C2 · Charla con una escritora */
  { id: "ex-de-ls-11", type: "mc", level: "C2", topic: "ascolto", prompt: "Según la escritora, ¿por qué callan tanto sus personajes?",
    options: ["Sie haben einfach nichts zu sagen", "Der Verlag verlangt knappe Dialoge", "Stille verkauft sich heute besser", "Was unausgesprochen bleibt, wirkt oft länger nach"], answer: 3,
    explain: "„Was unausgesprochen bleibt, wirkt oft länger nach als das Gesagte; meine Figuren schweigen deshalb viel.“ Frases escuetas: método y temperamento a la vez." },
  { id: "ex-de-ls-12", type: "mc", level: "C2", topic: "ascolto", prompt: "¿Qué le intriga a la escritora sobre la traducción al español?",
    options: ["Ob die Kritiker in Leipzig einverstanden sind", "Ob ihre Ellipsen die Übersetzung überleben", "Ob der Roman ein Bestseller wird", "Ob die Tantiemen höher ausfallen"], answer: 1,
    explain: "„Ich bin gespannt, ob meine Ellipsen die Übersetzung überleben werden.“ La novela, ambientada en el Leipzig de los años ochenta (última RDA), sí se traducirá." },

  /* ── Lectura · DE_READINGS (ex-de-rd-*) ──────────────────────────── */

  /* de-rd-1 · A1 · Una postal desde Múnich */
  { id: "ex-de-rd-01", type: "mc", level: "A1", topic: "vocabolario", prompt: "¿Qué desayunan en el café?",
    options: ["Tee und ein Stück Kuchen", "Nur einen Kaffee, mehr nicht", "Einen Kaffee und eine Brezel mit Butter", "Zwei Brötchen mit Marmelade"], answer: 2,
    explain: "„Einen Kaffee und eine Brezel mit Butter. Die Brezel ist hier sehr salzig!“ — café y pretzel con mantequilla." },
  { id: "ex-de-rd-02", type: "mc", level: "A1", topic: "vocabolario", prompt: "¿Qué van a visitar mañana?",
    options: ["Das Schloss Nymphenburg", "Den Marienplatz", "Das Rathaus", "Den Bodensee"], answer: 0,
    explain: "Hoy toca el Marienplatz y el Rathaus; „morgen fahren wir zum Schloss Nymphenburg“. Y hace sol: „Die Sonne scheint!“" },

  /* de-rd-2 · A2 · El sábado en el mercado */
  { id: "ex-de-rd-03", type: "mc", level: "A2", topic: "vocabolario", prompt: "¿Qué fruta prefiere Jonas por encima de todo?",
    options: ["Die Kartoffeln", "Der Bergkäse", "Die Birnen", "Die Äpfel vom Bodensee"], answer: 3,
    explain: "„Die Äpfel vom Bodensee mag er am liebsten“ — compra primero la fruta; el pan del puesto de panadería y el Bergkäse, después." },
  { id: "ex-de-rd-04", type: "mc", level: "A2", topic: "vocabolario", prompt: "Si no llueve, ¿qué hace Jonas al final?",
    options: ["Ins Kino gehen", "Noch einen Kaffee am Marktplatz trinken und mit den Nachbarn reden", "Gleich nach Hause gehen", "Noch ein Kilo Kartoffeln kaufen"], answer: 1,
    explain: "„Wenn es nicht regnet, trinkt er noch einen Kaffee am Marktplatz und redet mit den Nachbarn“ — su „kleines Samstagsglück“." },

  /* de-rd-3 · B1 · La búsqueda de piso en Berlín */
  { id: "ex-de-rd-05", type: "mc", level: "B1", topic: "vocabolario", prompt: "Según el texto, ¿qué necesita quien busca vivienda?",
    options: ["Ein eigenes Auto", "Gute Beziehungen zum Vermieter", "Geduld, Glück und vollständige Unterlagen", "Ein hohes Gehalt"], answer: 2,
    explain: "„Wer eine Wohnung sucht, braucht Geduld, Glück und vollständige Unterlagen“ — a veces se presentan cien interesados por una sola habitación de WG." },
  { id: "ex-de-rd-06", type: "mc", level: "B1", topic: "vocabolario", prompt: "En la visita al piso, ¿qué es lo habitual en Alemania?",
    options: ["Kaution von zwei Monatsmieten und Einkommensnachweis", "Fünf Monatsmieten Kaution", "Ein Empfehlungsschreiben der Eltern", "Die erste Miete in bar auf dem Tisch"], answer: 0,
    explain: "„Üblich sind eine Kaution von zwei Monatsmieten und ein Einkommensnachweis.“ Y en la Besichtigung: llegar puntual, buenas preguntas y sinceridad." },

  /* de-rd-4 · B2 · El país del tren */
  { id: "ex-de-rd-07", type: "mc", level: "B2", topic: "vocabolario", prompt: "¿Qué es exactamente el Deutschlandticket?",
    options: ["Seit 2023: nur für Fernzüge", "Seit 2020: nur für Busse", "Seit 2023: gültig in ganz Europa", "Seit 2023: monatlicher Festpreis, gültig im gesamten Nahverkehr"], answer: 3,
    explain: "„Seit 2023 gibt es das Deutschlandticket: für einen monatlichen Festpreis gilt es in Bussen und Bahnen des gesamten Nahverkehrs“ — transporte regional completo." },
  { id: "ex-de-rd-08", type: "mc", level: "B2", topic: "vocabolario", prompt: "¿Qué replican los defensores del tren (Befürworter)?",
    options: ["Flügen schadet das Klima am wenigsten", "Ohne die Bahn wären die Klimaziele nicht zu erreichen", "Die Bahn ist schneller als jedes Auto", "Die Autobahn ist zu teuer geworden"], answer: 1,
    explain: "„Befürworter entgegnen, dass die Klimaziele ohne die Bahn nicht zu erreichen wären.“ La crítica: retrasos, trenes abarrotados y obras („Baustellen“)." },

  /* de-rd-5 · C1 · La noche del Muro */
  { id: "ex-de-rd-09", type: "mc", level: "C1", topic: "vocabolario", prompt: "¿Qué responde Schabowski sobre las nuevas normas de viaje?",
    options: ["„Das entscheidet die Regierung“", "„Dafür bin ich nicht zuständig“", "„Ab sofort, unverzüglich“", "„Ab morgen, 6 Uhr“"], answer: 2,
    explain: "Poco después de las 19 del 9 de noviembre de 1989, leyó cansado una decisión y respondió „Ab sofort, unverzüglich“: un error con consecuencias que abrió el muro esa misma noche." },
  { id: "ex-de-rd-10", type: "mc", level: "C1", topic: "vocabolario", prompt: "¿Cuándo se incorporó la RDA a la República Federal?",
    options: ["Am 3. Oktober 1990", "Am 9. November 1989", "Am 3. Oktober 1991", "Am 1. Mai 1990"], answer: 0,
    explain: "La apertura del muro fue el 9-N-1989 (Bornholmer Straße); „am 3. Oktober 1990 trat die DDR der Bundesrepublik bei“ — la reunificación." },

  /* de-rd-6 · C2 · ¿Tutear o tratar de usted? */
  { id: "ex-de-rd-11", type: "mc", level: "C2", topic: "vocabolario", prompt: "Según el ensayo, ¿dónde sigue siendo natural el Sie?",
    options: ["In Start-ups und an Hochschulen", "In sozialen Netzwerken", "Nirgendwo mehr, das Sie ist tot", "In Ämtern, Arztpraxen und an der Kasse"], answer: 3,
    explain: "„In Ämtern, Arztpraxen und an der Kasse bleibt es selbstverständlich.“ En start-ups y redes sociales domina el du; y pasar del du al Sie en plena discusión marca distancia." },
  { id: "ex-de-rd-12", type: "mc", level: "C2", topic: "vocabolario", prompt: "¿Qué consejo da el texto a quien aprende alemán?",
    options: ["Immer Sie, auch unter Freunden", "Im Zweifel siezen, bis das Gegenüber das du anbietet", "Alle sofort duzen", "Nur Ältere siezen"], answer: 1,
    explain: "„Im Zweifel siezen, bis das Gegenüber das du anbietet“: ofrecer el tuteo es y sigue siendo una pequeña ceremonia con la que se regala pertenencia." },

  /* ── Situaciones · DE_SITUATIONS (ex-de-sit-*) ───────────────────── */

  /* de-sit-baeckerei · A1 · En la panadería */
  { id: "ex-de-sit-baeckerei-1", type: "mc", level: "A1", topic: "ascolto", prompt: "¿Cómo paga el cliente la compra de 4,60 €?",
    options: ["Mit dem Handy", "Auf Rechnung", "Mit Karte, bitte", "In bar, mit Bargeld"], answer: 2,
    explain: "La vendedora pregunta „Bar oder mit Karte?“ y el cliente responde „Mit Karte, bitte“, antes de despedirse con „Schönen Tag noch!“" },
  { id: "ex-de-sit-baeckerei-2", type: "mc", level: "A1", topic: "vocabolario", prompt: "¿Con qué frase pregunta el cliente el precio total?",
    options: ["Was macht das zusammen?", "Wie viel Uhr ist es?", "Was machst du gerade?", "Wie schmeckt das?"], answer: 0,
    explain: "„Was macht das zusammen?“ = ¿cuánto es en total? (zusammen = «en total»). La vendedora contesta: „4 Euro 60.“" },

  /* de-sit-bahn · A2 · Billetes: máquina y ventanilla */
  { id: "ex-de-sit-bahn-1", type: "mc", level: "A2", topic: "ascolto", prompt: "¿Cuánto se ahorra la viajera con el tren de las 14:12?",
    options: ["10 Euro", "2 Euro", "50 Euro", "20 Euro"], answer: 3,
    explain: "„Ja, mit dem Zug um 14:12 Uhr sparen Sie 20 Euro“ — es el Sparpreis (tarifa con descuento) que ella misma pregunta por teléfono de ventanilla." },
  { id: "ex-de-sit-bahn-2", type: "mc", level: "A2", topic: "ascolto", prompt: "¿Desde qué vía sale el tren y con qué retraso?",
    options: ["Von Gleis 7, zwanzig Minuten Verspätung", "Von Gleis 8, zehn Minuten Verspätung", "Von Gleis 3, ohne Verspätung", "Von Gleis 8, eine Stunde Verspätung"], answer: 1,
    explain: "„Von Gleis 8. Der Zug hat heute zehn Minuten Verspätung.“ El funcionario cierra con „Gute Reise!“" },
  { id: "ex-de-sit-bahn-3", type: "mc", level: "A2", topic: "ascolto", prompt: "¿Por qué acaba comprando en la ventanilla y no en la máquina?",
    options: ["Weil sie erst morgen fahren will", "Weil der Beamte keine Karte akzeptiert", "Weil der Automat nicht funktioniert", "Weil es am Schalter günstiger ist"], answer: 2,
    explain: "„Der Automat funktioniert nicht“, explica la viajera al principio (Fahrkartenautomat); por eso el funcionario le vende el billete „am Schalter“." },

  /* de-sit-wochenmarkt · A1 · En el mercado semanal */
  { id: "ex-de-sit-wochenmarkt-1", type: "mc", level: "A1", topic: "ascolto", prompt: "¿Cuánto cuesta el kilo de manzanas?",
    options: ["2 Euro 50 das Kilo", "5 Euro das Kilo", "2 Euro 15 das Kilo", "1 Euro 25 das Kilo"], answer: 0,
    explain: "„2 Euro 50 das Kilo“ cuestan las Äpfel; las Birnen están de oferta („im Angebot“), pero ella solo toma un kilo de manzanas." },
  { id: "ex-de-sit-wochenmarkt-2", type: "mc", level: "A1", topic: "ascolto", prompt: "Cuando el vendedor ofrece el queso de montaña, ¿qué responde la clienta?",
    options: ["Ich schaue nur, ich kaufe nichts.", "Nein, danke. Das ist alles.", "Ja, ein Stück Bergkäse, bitte.", "Noch ein Kilo Birnen, bitte."], answer: 1,
    explain: "Rechaza el Bergkäse —„Nein, danke. Das ist alles“— y paga: „Hier bitte, 5 Euro.“" },

  /* de-sit-wohnung · B1 · Buscando piso en Berlín */
  { id: "ex-de-sit-wohnung-1", type: "mc", level: "B1", topic: "vocabolario", prompt: "La cifra clave del diálogo es «450 Euro warm». ¿Qué significa exactamente?",
    options: ["450 Euro nur für das Zimmer, ohne Küche", "900 Euro warm, alles inklusive", "450 Euro, alles inklusive (Miete plus Nebenkosten)", "450 Euro kalt, die Nebenkosten kommen dazu"], answer: 2,
    explain: "„450 Euro warm, alles inklusive“: warm = alquiler «con gastos incluidos» (kalt = sin gastos). La Kaution: dos mensualidades." },
  { id: "ex-de-sit-wohnung-2", type: "mc", level: "B1", topic: "ascolto", prompt: "¿Desde cuándo podría mudarse (einziehen)?",
    options: ["Ab dem ersten Mai", "Ab sofort", "Erst im September", "Ab dem ersten Juni"], answer: 3,
    explain: "„Ab dem ersten Juni“, dice el compañero de piso; y remata: „Rufen Sie uns an, wenn Sie sich entscheiden.“" },

  /* de-sit-arzt · A2 · Cita con el médico */
  { id: "ex-de-sit-arzt-1", type: "mc", level: "A2", topic: "ascolto", prompt: "¿Qué cita le da la asistenta para ese mismo día?",
    options: ["Nächste Woche Montag", "Heute um 11:30 Uhr", "Morgen um 11:30 Uhr", "Heute um 23:30 Uhr"], answer: 1,
    explain: "„Kommen Sie heute um 11:30 Uhr“ — reloj de 24 h: las once y media de la mañana. Y que lleve la Versichertenkarte." },
  { id: "ex-de-sit-arzt-2", type: "mc", level: "A2", topic: "ascolto", prompt: "¿Desde cuándo tiene los síntomas y cuáles son?",
    options: ["Seit einer Woche: Fieber ohne Halsschmerzen", "Seit gestern: Husten ohne Fieber", "Seit drei Tagen: Halsschmerzen und Fieber", "Seit drei Tagen: nur Schnupfen"], answer: 2,
    explain: "„Ich habe Halsschmerzen und Fieber… Seit drei Tagen. Nachts huste ich viel.“ — garganta y fiebre desde hace tres días, tos nocturna." },

  /* de-sit-volksfest · A2 · En la fiesta popular */
  { id: "ex-de-sit-volksfest-1", type: "mc", level: "A2", topic: "ascolto", prompt: "¿Qué pide Elena para comer y beber?",
    options: ["Eine Brezel und eine Maß", "Zwei Brezeln und ein Wasser", "Eine Maß und nichts zu essen", "Eine Wurst und eine Cola"], answer: 0,
    explain: "„Ich nehme eine Brezel und eine Maß“ — die Maß es la jarra de un litro (de cerveza)." },
  { id: "ex-de-sit-volksfest-2", type: "mc", level: "A2", topic: "ascolto", prompt: "¿Qué harán primero, antes de los fuegos artificiales?",
    options: ["Gleich ins Festzelt gehen", "Direkt zu den Fahrgeschäften", "Schon um 20 Uhr gehen", "Erst zur Live-Musik gehen"], answer: 3,
    explain: "„Lass uns erst zur Live-Musik gehen. Um 22 Uhr gibt es das Feuerwerk.“ Y luego brindan: „Dann stoßen wir schon mal an: Prost!“" },
];
