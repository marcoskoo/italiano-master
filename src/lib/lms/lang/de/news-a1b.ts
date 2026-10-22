/* ── DE · Nachrichten A1, Teil B (v9.39) ──────────────────────────────
   Fortsetzung von lang/de/news-a.ts: ids de-news-a1-04 … de-news-a1-15
   (A1: 3 → 15 Notizen). Hochdeutsch, kontrollierter Wortschatz, Präsens
   (einfache Vergangenheitsformen nur in Geschichtssätzen, wie im Basisfile),
   Methode VOA Learning English: 4 kurze Absätze ≈ 70-95 Wörter, Zitat einer
   lokalen Fachstimme, Ausblick am Ende. Felder `.it` = Deutsch, `.es` = Spanisch. */

import type { NewsItem } from "../../news";

export const DE_NEWS_A1B: NewsItem[] = [

  /* ═══ A1 · 4 — Technologie ═══ */
  {
    id: "de-news-a1-04", cat: "tecnologia", level: "A1", place: "Hamburg", minutes: 2,
    title: "Kleine Roboter im Hamburger Hafen",
    titleEs: "Pequeños robots en el puerto de Hamburgo",
    lead: {
      it: "Im größten Hafen Deutschlands arbeiten jetzt kleine Roboter. Sie fahren zwischen riesigen Containern — und machen nie Urlaub.",
      es: "En el puerto más grande de Alemania ahora trabajan pequeños robots. Circulan entre contenedores gigantes — y nunca van de vacaciones.",
    },
    paragraphs: [
      { it: "Im Hamburger Hafen ist viel los. Jeden Tag bringen große Schiffe Container aus der ganzen Welt.",
      es: "En el puerto de Hamburgo hay mucho movimiento. Cada día grandes barcos traen contenedores del mundo entero." },
      { it: "Jetzt helfen kleine Roboter. Sie fahren zwischen den Containern, scannen Nummern und sagen dem Computer, wo jedes Paket steht.",
      es: "Ahora ayudan pequeños robots. Circulan entre los contenedores, escanean números y le dicen al ordenador dónde está cada paquete." },
      { it: "Die Roboter arbeiten Tag und Nacht — auch um drei Uhr morgens. Sie sind nie müde und brauchen keinen Schlaf.",
      es: "Los robots trabajan día y noche — también a las tres de la madrugada. Nunca están cansados y no necesitan dormir." },
      { it: "Die Ingenieurin Lena Krüger sagt: «Die Roboter machen die schwere Arbeit. Wir Menschen machen die kluge Arbeit.»",
      es: "La ingeniera Lena Krüger dice: «Los robots hacen el trabajo pesado. Nosotros, los humanos, hacemos el trabajo inteligente.»" },
    ],
    words: [
      { it: "der Roboter", es: "el robot" },
      { it: "der Hafen", es: "el puerto" },
      { it: "der Container", es: "el contenedor" },
      { it: "das Paket", es: "el paquete" },
      { it: "die Arbeit", es: "el trabajo" },
      { it: "müde", es: "cansado" },
    ],
    questions: [
      { q: "¿Qué hacen los robots entre los contenedores?", options: ["Sie scannen Nummern und sagen dem Computer, wo jedes Paket steht", "Sie schlafen in der Nacht", "Sie trinken Kaffee", "Sie machen Urlaub"], answer: 0, why: "«Sie fahren zwischen den Containern, scannen Nummern und sagen dem Computer, wo jedes Paket steht.»" },
      { q: "¿A qué hora trabajan también los robots?", options: ["Nur am Morgen", "Nur am Wochenende", "Auch um drei Uhr morgens — Tag und Nacht", "Nie"], answer: 2, why: "«Die Roboter arbeiten Tag und Nacht — auch um drei Uhr morgens.»" },
      { q: "¿Qué trabajo hacen las personas según la ingeniera?", options: ["Die schwere Arbeit", "Gar keine Arbeit", "Nur Büroarbeit", "Die kluge Arbeit — die Roboter machen die schwere Arbeit"], answer: 3, why: "«Die Roboter machen die schwere Arbeit. Wir Menschen machen die kluge Arbeit.»" },
      { q: "¿Cómo son los robots según el texto?", options: ["Sie sind nie müde und brauchen keinen Schlaf", "Sie sind groß und langsam", "Sie sind teuer und schlecht", "Sie sind alt und laut"], answer: 0, why: "«Sie sind nie müde und brauchen keinen Schlaf.»" },
    ],
    discuss: [
      { it: "Arbeiten bei Ihnen schon Roboter? Wo — im Hafen, im Supermarkt, im Büro?", es: "¿Ya trabajan robots cerca de ti? ¿Dónde — en el puerto, el supermercado, la oficina?" },
      { it: "Wer soll die schwere Arbeit machen: Menschen oder Roboter? Warum?", es: "¿Quién debería hacer el trabajo pesado: personas o robots? ¿Por qué?" },
    ],
  },

  /* ═══ A1 · 5 — Gesundheit ═══ */
  {
    id: "de-news-a1-05", cat: "salute", level: "A1", place: "Köln", minutes: 2,
    title: "Clowns im Krankenhaus: Lachen als Medizin",
    titleEs: "Payasos en el hospital: la risa como medicina",
    lead: {
      it: "In einem Krankenhaus in Köln läuft manchmal ein Clown durch die Gänge. Die Kinder lachen — und das hilft ihnen wirklich.",
      es: "En un hospital de Colonia a veces un payaso recorre los pasillos. Los niños ríen — y eso de verdad les ayuda.",
    },
    paragraphs: [
      { it: "Im Krankenhaus in Köln sind viele Kinder nervös. Sie haben Angst vor Ärzten, vor Nadeln und vor großen Maschinen.",
      es: "En el hospital de Colonia muchos niños están nerviosos. Tienen miedo de los médicos, de las agujas y de las máquinas grandes." },
      { it: "Dann kommt Frau Schmidt mit einer roten Nase. Sie ist Klinik-Clownin und heißt bei den Kindern «Doktor Pusteblume». Sie macht Spiele, Musik und kleine Tricks.",
      es: "Entonces llega la señora Schmidt con una nariz roja. Es payasa de hospital y entre los niños se llama «Doktor Pusteblume». Hace juegos, música y pequeños trucos." },
      { it: "Die Kinder lachen — und die Angst wird kleiner. Das ist wichtig, denn Stress macht Kranke müde. Die Ärzte sagen: Lachen ist gute Medizin.",
      es: "Los niños ríen — y el miedo se hace más pequeño. Eso es importante, porque el estrés cansa a los enfermos. Los médicos dicen: reír es una buena medicina." },
      { it: "Frau Schmidt sagt: «Ich behandle keine Krankheit. Ich behandle die Angst. Das ist mein Beruf.»",
      es: "La señora Schmidt dice: «Yo no trato ninguna enfermedad. Yo trato el miedo. Ese es mi oficio.»" },
    ],
    words: [
      { it: "das Krankenhaus", es: "el hospital" },
      { it: "die Angst", es: "el miedo" },
      { it: "die Nase", es: "la nariz" },
      { it: "lachen", es: "reír" },
      { it: "die Medizin", es: "la medicina" },
      { it: "die Krankheit", es: "la enfermedad" },
    ],
    questions: [
      { q: "¿De qué tienen miedo los niños?", options: ["Vor Ärzten, Nadeln und großen Maschinen", "Vor Clowns", "Vor Hunden", "Vor dem Essen"], answer: 0, why: "«Sie haben Angst vor Ärzten, vor Nadeln und vor großen Maschinen.»" },
      { q: "¿Qué hace la señora Schmidt?", options: ["Sie operiert Kinder", "Sie macht Spiele, Musik und kleine Tricks", "Sie verteilt Medikamente", "Sie putzt das Krankenhaus"], answer: 1, why: "«Sie macht Spiele, Musik und kleine Tricks.»" },
      { q: "¿Qué pasa cuando los niños ríen?", options: ["Die Angst wird größer", "Sie werden müde", "Die Angst wird kleiner", "Sie gehen nach Hause"], answer: 2, why: "«Die Kinder lachen — und die Angst wird kleiner.»" },
      { q: "¿Cómo define la payasa su trabajo?", options: ["«Ich bin Ärztin.»", "«Ich behandle keine Krankheit. Ich behandle die Angst.»", "«Ich mache nur Musik.»", "«Ich spiele mit den Eltern.»"], answer: 1, why: "«Ich behandle keine Krankheit. Ich behandle die Angst. Das ist mein Beruf.»" },
    ],
    discuss: [
      { it: "Was hilft Ihnen gegen Angst oder Stress?", es: "¿Qué te ayuda contra el miedo o el estrés?" },
      { it: "Gibt es Klinik-Clowns in Ihrem Land? Finden Sie sie nützlich?", es: "¿Hay payasos de hospital en tu país? ¿Te parecen útiles?" },
    ],
  },

  /* ═══ A1 · 6 — Kultur ═══ */
  {
    id: "de-news-a1-06", cat: "cultura", level: "A1", place: "Leipzig", minutes: 2,
    title: "Leipzig: die Stadt der Bücher",
    titleEs: "Leipzig: la ciudad de los libros",
    lead: {
      it: "In Leipzig dreht sich alles um Bücher. Die Stadt hat eine der ältesten Buchmessen Europas — und Läden, in denen man den ganzen Tag lesen darf.",
      es: "En Leipzig la vida gira alrededor de los libros. La ciudad tiene una de las ferias del libro más antiguas de Europa — y tiendas donde se puede leer el día entero.",
    },
    paragraphs: [
      { it: "Leipzig ist eine Stadt der Bücher. Hier steht eine der ältesten Buchmessen Europas. Jedes Jahr im März kommen Verlage aus vielen Ländern in die Stadt.",
      es: "Leipzig es una ciudad de libros. Aquí se celebra una de las ferias del libro más antiguas de Europa. Cada año, en marzo, vienen editoriales de muchos países a la ciudad." },
      { it: "Es gibt auch alte Buchläden mit drei Etagen voller Bücher. Studenten lesen hier den ganzen Tag, und der Kaffee steht neben dem Buch.",
      es: "También hay librerías de viejo con tres pisos llenos de libros. Los estudiantes leen aquí el día entero, y el café está al lado del libro." },
      { it: "Der Buchhändler Herr Weber sagt: «Kunden kommen aus Japan, aus Spanien und aus der Nachbarschaft. Alte Bücher verbinden die Welt.»",
      es: "El librero, el señor Weber, dice: «Los clientes vienen de Japón, de España y del barrio. Los libros viejos conectan al mundo.»" },
      { it: "Die Stadt plant jetzt ein Museum für die Geschichte der Bücher. Es öffnet im nächsten Jahr — mit alten Druckmaschinen zum Anfassen.",
      es: "La ciudad planea ahora un museo sobre la historia de los libros. Abre el próximo año — con antiguas imprentas para tocar." },
    ],
    words: [
      { it: "das Buch / die Bücher", es: "el libro / los libros" },
      { it: "die Buchmesse / die Buchmessen", es: "la feria del libro" },
      { it: "der Buchladen / die Buchläden", es: "la librería" },
      { it: "der Verlag / die Verlage", es: "la editorial" },
      { it: "der Buchhändler", es: "el librero" },
      { it: "das Museum", es: "el museo" },
    ],
    questions: [
      { q: "¿Cuándo vienen las editoriales a Leipzig?", options: ["Jedes Jahr im März", "Jedes Jahr im Juli", "Nur am Wochenende", "Nur in der Nacht"], answer: 0, why: "«Jedes Jahr im März kommen Verlage aus vielen Ländern in die Stadt.»" },
      { q: "¿Qué hacen los estudiantes en las librerías?", options: ["Sie schlafen", "Sie lesen den ganzen Tag", "Sie verkaufen Bücher", "Sie tanzen"], answer: 1, why: "«Studenten lesen hier den ganzen Tag, und der Kaffee steht neben dem Buch.»" },
      { q: "¿De dónde vienen los clientes del señor Weber?", options: ["Nur aus Japan", "Nur aus Leipzig", "Aus Japan, Spanien und der Nachbarschaft", "Nur aus Spanien"], answer: 2, why: "«Kunden kommen aus Japan, aus Spanien und aus der Nachbarschaft.»" },
      { q: "¿Qué planea la ciudad para el año que viene?", options: ["Die Stadt schließt alle Buchläden", "Die Buchmesse endet dieses Jahr", "Ein neues Museum für die Geschichte der Bücher", "Niemand liest mehr Bücher"], answer: 2, why: "«Die Stadt plant jetzt ein Museum für die Geschichte der Bücher. Es öffnet im nächsten Jahr.»" },
    ],
    discuss: [
      { it: "Lesen Sie lieber echte Bücher oder E-Books? Warum?", es: "¿Prefieres libros de papel o electrónicos? ¿Por qué?" },
      { it: "Gibt es in Ihrer Stadt berühmte Buchläden oder eine Buchmesse?", es: "¿Hay librerías famosas o una feria del libro en tu ciudad?" },
    ],
  },

  /* ═══ A1 · 7 — Geschichte ═══ */
  {
    id: "de-news-a1-07", cat: "storia", level: "A1", place: "Trier", minutes: 2,
    title: "Trier: die älteste Stadt Deutschlands",
    titleEs: "Tréveris: la ciudad más antigua de Alemania",
    lead: {
      it: "Trier nennt sich die älteste Stadt Deutschlands. Vor über zweitausend Jahren bauten die Römer hier Bäder, eine Brücke und ein dunkles Tor.",
      es: "Tréveris se llama la ciudad más antigua de Alemania. Hace más de dos mil años los romanos construyeron aquí termas, un puente y una puerta oscura.",
    },
    paragraphs: [
      { it: "Vor über zweitausend Jahren kamen die Römer an die Mosel. Sie bauten hier große Bäder, eine Brücke und ein dunkles Tor: die Porta Nigra.",
      es: "Hace más de dos mil años los romanos llegaron al Mosela. Construyeron aquí grandes termas, un puente y una puerta oscura: la Porta Nigra." },
      { it: "Das Tor aus schweren Steinen steht noch heute. Der Name kommt aus dem Lateinischen und heißt «schwarzes Tor».",
      es: "La puerta de piedras pesadas sigue en pie hoy. El nombre viene del latín y significa «puerta negra»." },
      { it: "Trier ist heute eine kleine, freundliche Stadt. Viele Touristen kommen wegen der römischen Steine — und wegen des Weins von der Mosel.",
      es: "Tréveris es hoy una ciudad pequeña y acogedora. Muchos turistas vienen por las piedras romanas — y por el vino del Mosela." },
      { it: "Eine Archäologin, Frau Neumann, sagt: «Unter unseren Füßen schlafen noch viele römische Häuser. Wir graben langsam — die Geschichte hat Zeit.»",
      es: "Una arqueóloga, la señora Neumann, dice: «Bajo nuestros pies todavía duermen muchas casas romanas. Excavamos despacio — la historia tiene tiempo.»" },
    ],
    words: [
      { it: "die Römer", es: "los romanos" },
      { it: "das Tor", es: "la puerta monumental" },
      { it: "die Brücke", es: "el puente" },
      { it: "der Stein / die Steine", es: "la piedra / las piedras" },
      { it: "graben", es: "excavar" },
      { it: "die Geschichte", es: "la historia" },
    ],
    questions: [
      { q: "¿Qué construyeron los romanos en Tréveris?", options: ["Bäder, eine Brücke und ein dunkles Tor", "Nur ein Museum", "Eine Kirche und ein Schloss", "Einen Flughafen"], answer: 0, why: "«Sie bauten hier große Bäder, eine Brücke und ein dunkles Tor: die Porta Nigra.»" },
      { q: "¿Qué significa «Porta Nigra»?", options: ["Weiße Brücke", "Schwarzes Tor", "Alte Stadt", "Römischer Wein"], answer: 1, why: "«Der Name kommt aus dem Lateinischen und heißt “schwarzes Tor”.»" },
      { q: "¿Por qué vienen hoy muchos turistas a Trier?", options: ["Wegen der Berge", "Wegen des Meeres", "Nur wegen des Wetters", "Wegen der römischen Steine — und des Weins von der Mosel"], answer: 3, why: "«Viele Touristen kommen wegen der römischen Steine — und wegen des Weins von der Mosel.»" },
      { q: "¿Qué hay bajo los pies de los habitantes según la arqueóloga?", options: ["«Unter der Stadt ist nichts.»", "«Wir graben nicht mehr.»", "«Die Geschichte hat keine Zeit.»", "«Unter unseren Füßen schlafen noch viele römische Häuser.»"], answer: 3, why: "«Unter unseren Füßen schlafen noch viele römische Häuser. Wir graben langsam.»" },
    ],
    discuss: [
      { it: "Gibt es römische oder sehr alte Gebäude in Ihrer Stadt? Welche?", es: "¿Hay edificios romanos o muy antiguos en tu ciudad? ¿Cuáles?" },
      { it: "«Die Geschichte hat Zeit»: Finden Sie das schön oder langweilig?", es: "«La historia tiene tiempo»: ¿te parece bonito o aburrido?" },
    ],
  },

  /* ═══ A1 · 8 — Wirtschaft ═══ */
  {
    id: "de-news-a1-08", cat: "economia", level: "A1", place: "Stuttgart", minutes: 2,
    title: "Menschen und Roboter: die Fabrik von morgen",
    titleEs: "Humanos y robots: la fábrica del mañana",
    lead: {
      it: "In Stuttgart entstehen die Fabriken von morgen. Sie sind stiller, sauberer — und voller Roboter. Aber die Menschen bleiben.",
      es: "En Stuttgart surgen las fábricas del mañana. Son más silenciosas, más limpias — y llenas de robots. Pero las personas se quedan.",
    },
    paragraphs: [
      { it: "Stuttgart ist die Stadt der Autos und Maschinen. In den Fabriken arbeiten heute schon Roboter Seite an Seite mit Menschen.",
      es: "Stuttgart es la ciudad de los coches y las máquinas. En las fábricas ya trabajan robots lado a lado con personas." },
      { it: "Die neuen Roboter sind nicht mehr hinter Gittern. Sie halten Werkzeuge, reichen Teile und hören auf ein einfaches Wort.",
      es: "Los nuevos robots ya no están detrás de rejas. Sostienen herramientas, alcanzan piezas y obedecen una palabra simple." },
      { it: "Die Arbeiter lernen dafür neue Dinge: Programmieren, Planen, Reparieren. Der Roboter macht das Schwere, der Mensch macht das Denken.",
      es: "Los trabajadores aprenden para ello cosas nuevas: programar, planificar, reparar. El robot hace lo pesado; el humano, el pensar." },
      { it: "Der Betriebsleiter Herr Braun sagt: «Früher waren die Roboter Gäste. Heute sind sie Kollegen. Und Kollegen lernt man kennen.»",
      es: "El jefe de planta, el señor Braun, dice: «Antes los robots eran invitados. Hoy son colegas. Y a los colegas se les conoce.»" },
    ],
    words: [
      { it: "die Fabrik / die Fabriken", es: "la fábrica" },
      { it: "der Roboter", es: "el robot" },
      { it: "der Arbeiter / die Arbeiter", es: "el trabajador" },
      { it: "das Werkzeug / die Werkzeuge", es: "la herramienta" },
      { it: "der Kollege / die Kollegen", es: "el compañero de trabajo" },
      { it: "reparieren", es: "reparar" },
    ],
    questions: [
      { q: "¿Cómo trabajan los robots en las fábricas de Stuttgart?", options: ["Hinter Gittern", "Seite an Seite mit Menschen", "Nur nachts", "Alleine zu Hause"], answer: 1, why: "«In den Fabriken arbeiten heute schon Roboter Seite an Seite mit Menschen.»" },
      { q: "¿Qué hacen los nuevos robots?", options: ["Sie halten Werkzeuge, reichen Teile und hören auf ein einfaches Wort", "Sie sprechen mit Kunden", "Sie bauen Gitter", "Sie machen Urlaub"], answer: 0, why: "«Sie halten Werkzeuge, reichen Teile und hören auf ein einfaches Wort.»" },
      { q: "¿Qué deben aprender ahora los trabajadores?", options: ["Nur Autofahren", "Nichts — der Roboter lernt alles", "Programmieren, Planen und Reparieren", "Kochen"], answer: 2, why: "«Die Arbeiter lernen dafür neue Dinge: Programmieren, Planen, Reparieren.»" },
      { q: "¿Cómo describe el señor Braun el cambio?", options: ["Roboter sind böse", "Roboter sind teurer als Menschen", "Roboter arbeiten langsamer", "Früher waren die Roboter Gäste, heute sind sie Kollegen"], answer: 3, why: "«Früher waren die Roboter Gäste. Heute sind sie Kollegen.»" },
    ],
    discuss: [
      { it: "Möchten Sie mit einem Roboter zusammenarbeiten? Warum (nicht)?", es: "¿Te gustaría trabajar junto a un robot? ¿Por qué (no)?" },
      { it: "Welche Arbeiten sollen immer Menschen machen? Beispiele, bitte.", es: "¿Qué trabajos deberían hacer siempre personas? Ejemplos, por favor." },
    ],
  },

  /* ═══ A1 · 9 — Sport ═══ */
  {
    id: "de-news-a1-09", cat: "sport", level: "A1", place: "Dresden", minutes: 2,
    title: "Klettern: ein Sport für Millionen",
    titleEs: "La escalada: un deporte para millones",
    lead: {
      it: "Immer mehr Deutsche klettern. In Sachsen gibt es dafür ein Paradies aus Stein, und in den Städten wachsen neue Hallen.",
      es: "Cada vez más alemanes escalan. En Sajonia hay un paraíso de piedra para ello, y en las ciudades crecen nuevos rocódromos.",
    },
    paragraphs: [
      { it: "Klettern ist in Deutschland ein echter Trendsport. Über eine Million Menschen gehen regelmäßig in die Kletterhalle oder an die Felsen.",
      es: "La escalada es un verdadero deporte de moda en Alemania. Más de un millón de personas van con regularidad al rocódromo o a las rocas." },
      { it: "Bei Dresden liegt die Sächsische Schweiz mit ihren Steintürmen. Kletterer aus aller Welt kommen hierher — oft schon um sechs Uhr morgens.",
      es: "Cerca de Dresde está la Suiza Sajona con sus torres de piedra. Escaladores del mundo entero vienen aquí — a menudo ya a las seis de la mañana." },
      { it: "Anfänger lernen zuerst in der Halle. Dort sind die Griffe bunt, die Wände sind sicher, und der Boden ist weich.",
      es: "Los principiantes aprenden primero en la sala. Allí las presas son de colores, las paredes son seguras y el suelo es blando." },
      { it: "Eine Trainerin, Anna Fischer, sagt: «Klettern macht stark — den Körper und den Kopf. Oben wartet immer ein schöner Blick.»",
      es: "Una entrenadora, Anna Fischer, dice: «Escalar fortalece — el cuerpo y la cabeza. Arriba siempre espera una buena vista.»" },
    ],
    words: [
      { it: "klettern", es: "escalar" },
      { it: "die Kletterhalle", es: "el rocódromo" },
      { it: "der Fels / die Felsen", es: "la roca" },
      { it: "der Griff / die Griffe", es: "la presa (en escalada)" },
      { it: "der Anfänger", es: "el principiante" },
      { it: "der Körper", es: "el cuerpo" },
    ],
    questions: [
      { q: "¿Cuántas personas escalan con regularidad en Alemania?", options: ["Über eine Million", "Über tausend", "Über hundert", "Niemand"], answer: 0, why: "«Über eine Million Menschen gehen regelmäßig in die Kletterhalle oder an die Felsen.»" },
      { q: "¿Cuándo llegan a menudo los escaladores a la Sächsische Schweiz?", options: ["Um Mitternacht", "Oft schon um sechs Uhr morgens", "Nur im Winter", "Nur am Abend"], answer: 1, why: "«Kletterer aus aller Welt kommen hierher — oft schon um sechs Uhr morgens.»" },
      { q: "¿Dónde aprenden los principiantes?", options: ["Direkt am Fels", "Im Fitnessstudio", "Zuerst in der Halle", "Zu Hause"], answer: 2, why: "«Anfänger lernen zuerst in der Halle.»" },
      { q: "¿Qué dice la entrenadora sobre la escalada?", options: ["«Klettern ist gefährlich.»", "«Klettern macht stark — den Körper und den Kopf.»", "«Klettern ist nur für Profis.»", "«Klettern ist langweilig.»"], answer: 1, why: "«Klettern macht stark — den Körper und den Kopf. Oben wartet immer ein schöner Blick.»" },
    ],
    discuss: [
      { it: "Klettern Sie gern — oder machen Sie lieber einen anderen Sport?", es: "¿Te gusta escalar — o prefieres otro deporte?" },
      { it: "Sport um sechs Uhr morgens: Könnten Sie das? Erzählen Sie.", es: "Deporte a las seis de la mañana: ¿podrías tú? Cuenta." },
    ],
  },

  /* ═══ A1 · 10 — Wissenschaft ═══ */
  {
    id: "de-news-a1-10", cat: "scienza", level: "A1", place: "Rostock", minutes: 2,
    title: "Forscher in Rostock untersuchen die Ostsee",
    titleEs: "Investigadores de Rostock estudian el mar Báltico",
    lead: {
      it: "Die Ostsee vor Rostock ist flach und ruhig. Aber unter der Oberfläche arbeitet das Klima. Forscher fahren jeden Monat hinaus und schauen genau hin.",
      es: "El Báltico frente a Rostock es poco profundo y tranquilo. Pero bajo la superficie trabaja el clima. Investigadores salen cada mes a mirar de cerca.",
    },
    paragraphs: [
      { it: "Die Ostsee ist ein Meer mit vielen Geheimnissen. Bei Rostock ist das Wasser flach — ideal für Forscher mit kleinen Schiffen.",
      es: "El Báltico es un mar con muchos secretos. Frente a Rostock el agua es poco profunda — ideal para investigadores con barcos pequeños." },
      { it: "Jeden Monat messen sie die Temperatur des Wassers. Die Daten zeigen: Die Ostsee wird langsam wärmer — fast jeden Sommer ein bisschen mehr.",
      es: "Cada mes miden la temperatura del agua. Los datos muestran: el Báltico se calienta lentamente — casi cada verano un poco más." },
      { it: "Auch Algen stehen auf der Liste der Forscher. Aus ihnen kann man morgen vielleicht Farben, Papier oder Tierfutter machen.",
      es: "También las algas están en la lista de los investigadores. Con ellas quizá mañana se puedan hacer pinturas, papel o pienso para animales." },
      { it: "Die Meeresforscherin Frau Hoffmann sagt: «Das Meer schreibt uns Briefe. Wir müssen nur lernen, sie zu lesen.»",
      es: "La investigadora marina, la señora Hoffmann, dice: «El mar nos escribe cartas. Solo tenemos que aprender a leerlas.»" },
    ],
    words: [
      { it: "die Ostsee", es: "el mar Báltico" },
      { it: "das Meer", es: "el mar" },
      { it: "die Temperatur", es: "la temperatura" },
      { it: "die Alge / die Algen", es: "el alga / las algas" },
      { it: "der Forscher", es: "el investigador" },
      { it: "messen", es: "medir", note: "du misst / er misst — con ss tras vocal breve" },
    ],
    questions: [
      { q: "¿Por qué el agua frente a Rostock es ideal para los investigadores?", options: ["Das Wasser ist flach — ideal für kleine Schiffe", "Das Wasser ist sehr tief", "Es gibt dort keine Schiffe", "Das Meer ist dort warm"], answer: 0, why: "«Bei Rostock ist das Wasser flach — ideal für Forscher mit kleinen Schiffen.»" },
      { q: "¿Qué muestran los datos de temperatura?", options: ["Die Ostsee wird kälter", "Die Ostsee wird langsam wärmer", "Alles bleibt gleich", "Das Wasser gefriert im Sommer"], answer: 1, why: "«Die Daten zeigen: Die Ostsee wird langsam wärmer — fast jeden Sommer ein bisschen mehr.»" },
      { q: "¿Qué se podrá hacer quizá mañana con las algas?", options: ["Häuser bauen", "Autos fahren", "Farben, Papier oder Tierfutter machen", "Nichts — Algen sind unbrauchbar"], answer: 2, why: "«Aus ihnen kann man morgen vielleicht Farben, Papier oder Tierfutter machen.»" },
      { q: "¿Qué quieren decir los investigadores con que el mar «escribe cartas»?", options: ["Das Meer verschickt Post", "Fische können schreiben", "Die Forscher bekommen Briefe von zu Hause", "Das Meer gibt uns Informationen — wir müssen nur lernen, sie zu lesen"], answer: 3, why: "«Das Meer schreibt uns Briefe. Wir müssen nur lernen, sie zu lesen.»" },
    ],
    discuss: [
      { it: "Warum ist es wichtig, die Temperatur des Meeres zu kennen?", es: "¿Por qué es importante conocer la temperatura del mar?" },
      { it: "«Das Meer schreibt uns Briefe»: Was möchten Sie über das Meer wissen?", es: "«El mar nos escribe cartas»: ¿qué te gustaría saber sobre el mar?" },
    ],
  },

  /* ═══ A1 · 11 — Umwelt ═══ */
  {
    id: "de-news-a1-11", cat: "ambiente", level: "A1", place: "Heidelberg", minutes: 2,
    title: "Heidelberg baut Häuser ohne Heizung",
    titleEs: "Heidelberg construye casas sin calefacción",
    lead: {
      it: "Im Heidelberger Stadtteil Bahnstadt bleibt es auch im Januar warm — ohne klassische Heizung. Über tausend Häuser nutzen nur Sonne, Technik und die Wärme ihrer Bewohner.",
      es: "En el barrio Bahnstadt de Heidelberg se mantiene cálido incluso en enero — sin calefacción tradicional. Más de mil casas usan solo el sol, la técnica y el calor de sus habitantes.",
    },
    paragraphs: [
      { it: "Im Stadtteil Bahnstadt stehen über tausend Passivhäuser. Sie brauchen fast keine Heizung — auch nicht im Januar.",
      es: "En el barrio Bahnstadt hay más de mil casas pasivas. Casi no necesitan calefacción — ni siquiera en enero." },
      { it: "Das Geheimnis sind dicke Wände, große Fenster und frische Luft aus dem Keller. Der Körper der Menschen und die Sonne heizen mit.",
      es: "El secreto son paredes gruesas, ventanas grandes y aire fresco del sótano. El cuerpo de las personas y el sol también calientan." },
      { it: "So sparen die Familien viel Geld und Energie. Die Stadt plant noch mehr solcher Viertel in den nächsten Jahren.",
      es: "Así las familias ahorran mucho dinero y energía. La ciudad planea más barrios así en los próximos años." },
      { it: "Eine Bewohnerin, Frau Schneider, sagt: «Im Winter trage ich nur ein T-Shirt. Mein Geld bleibt in der Tasche — die Wärme im Haus.»",
      es: "Una vecina, la señora Schneider, dice: «En invierno llevo solo una camiseta. Mi dinero se queda en el bolsillo — el calor, en casa.»" },
    ],
    words: [
      { it: "das Passivhaus / die Passivhäuser", es: "la casa pasiva" },
      { it: "die Heizung", es: "la calefacción", note: "todos los sustantivos en -ung son femeninos" },
      { it: "die Wand / die Wände", es: "la pared" },
      { it: "die Energie", es: "la energía" },
      { it: "sparen", es: "ahorrar" },
      { it: "das Viertel", es: "el barrio" },
    ],
    questions: [
      { q: "¿Cuántas casas pasivas hay en el barrio Bahnstadt?", options: ["Über tausend", "Über hunderttausend", "Nur zehn", "Keine"], answer: 0, why: "«Im Stadtteil Bahnstadt stehen über tausend Passivhäuser.»" },
      { q: "¿Cuál es el secreto de las casas?", options: ["Teure Heizungen", "Dicke Wände, große Fenster und frische Luft aus dem Keller", "Kleine Fenster ohne Licht", "Offene Türen den ganzen Tag"], answer: 1, why: "«Das Geheimnis sind dicke Wände, große Fenster und frische Luft aus dem Keller.»" },
      { q: "¿Qué ahorran las familias y qué planea la ciudad?", options: ["Die Familien zahlen mehr; die Stadt baut nichts", "Die Stadt verbietet die Häuser", "Die Familien sparen Geld und Energie; die Stadt plant noch mehr solcher Viertel", "Die Häuser brauchen neue Heizungen"], answer: 2, why: "«So sparen die Familien viel Geld und Energie. Die Stadt plant noch mehr solcher Viertel.»" },
      { q: "¿Qué cuenta la señora Schneider sobre el invierno?", options: ["«Im Winter friere ich immer.»", "«Im Winter trage ich nur ein T-Shirt.»", "«Die Heizung ist zu teuer.»", "«Ich wohne jetzt woanders.»"], answer: 1, why: "«Im Winter trage ich nur ein T-Shirt. Mein Geld bleibt in der Tasche — die Wärme im Haus.»" },
    ],
    discuss: [
      { it: "Was macht Ihr Zuhause im Winter warm?", es: "¿Qué mantiene caliente tu casa en invierno?" },
      { it: "Möchten Sie in einem Passivhaus wohnen? Warum (nicht)?", es: "¿Te gustaría vivir en una casa pasiva? ¿Por qué (no)?" },
    ],
  },

  /* ═══ A1 · 12 — Gesellschaft ═══ */
  {
    id: "de-news-a1-12", cat: "societa", level: "A1", place: "Hannover", minutes: 2,
    title: "Die Tafel: gerettetes Essen für viele Menschen",
    titleEs: "El banco de alimentos: comida rescatada para muchas personas",
    lead: {
      it: "In Hannover retten Freiwillige gutes Essen vor dem Müll. Aus Supermärkten kommt es auf die Tische von Familien mit wenig Geld.",
      es: "En Hannover voluntarios salvan buena comida de la basura. De los supermercados pasa a las mesas de familias con poco dinero.",
    },
    paragraphs: [
      { it: "In Deutschland landen jedes Jahr Millionen Tonnen gutes Essen im Müll. In Hannover sagt eine Gruppe: Stopp.",
      es: "En Alemania cada año acaban en la basura millones de toneladas de buena comida. En Hannover un grupo dice: basta." },
      { it: "Die Gruppe heißt «Tafel». Freiwillige sammeln Brot, Obst und Gemüse aus Supermärkten. Nichts kommt in die Tonne.",
      es: "El grupo se llama «Tafel». Voluntarios recogen pan, fruta y verdura de supermercados. Nada va al contenedor." },
      { it: "Am Nachmittag öffnet der kleine Laden in der Innenstadt. Menschen mit wenig Geld bekommen das Essen für einen kleinen Preis — frisch und mit einem Lächeln.",
      es: "Por la tarde abre la tiendita del centro. Personas con poco dinero reciben la comida por un precio pequeño — fresca y con una sonrisa." },
      { it: "Ein Freiwilliger, Herr Wagner, sagt: «Wir retten kein Gemüse. Wir retten einen guten Abend für viele Familien.»",
      es: "Un voluntario, el señor Wagner, dice: «Nosotros no rescatamos verdura. Rescatamos una buena noche para muchas familias.»" },
    ],
    words: [
      { it: "die Tafel", es: "el banco de alimentos", note: "literalmente «la tabla»: la mesa donde se reparte" },
      { it: "der Freiwillige / die Freiwilligen", es: "el voluntario / la voluntaria" },
      { it: "das Essen", es: "la comida" },
      { it: "der Müll", es: "la basura" },
      { it: "sammeln", es: "recoger" },
      { it: "das Gemüse", es: "la verdura" },
    ],
    questions: [
      { q: "¿Cuánta comida buena acaba cada año en la basura en Alemania?", options: ["Millionen Tonnen", "Nur ein paar Kilo", "Gar keine", "Etwa eine Tonne"], answer: 0, why: "«In Deutschland landen jedes Jahr Millionen Tonnen gutes Essen im Müll.»" },
      { q: "¿De dónde recogen los voluntarios la comida?", options: ["Von der Tonne", "Aus Supermärkten", "Aus Restaurants in Berlin", "Vom Markt in München"], answer: 1, why: "«Freiwillige sammeln Brot, Obst und Gemüse aus Supermärkten.»" },
      { q: "¿Quién recibe la comida por la tarde?", options: ["Nur Touristen — kostenlos", "Reiche Familien — mit Lieferung", "Menschen mit wenig Geld — für einen kleinen Preis, frisch und mit einem Lächeln", "Niemand — der Laden ist geschlossen"], answer: 2, why: "«Menschen mit wenig Geld bekommen das Essen für einen kleinen Preis — frisch und mit einem Lächeln.»" },
      { q: "¿Qué quieren decir las palabras del señor Wagner «Wir retten kein Gemüse»?", options: ["Das Gemüse ist schlecht", "Die Tafel verkauft kein Gemüse", "Gemüse ist unwichtig", "Das Ziel ist nicht das Essen, sondern ein guter Abend für Familien"], answer: 3, why: "«Wir retten kein Gemüse. Wir retten einen guten Abend für viele Familien.»" },
    ],
    discuss: [
      { it: "Was macht man in Ihrem Land mit Essen, das niemand kauft? Gibt es Tafeln?", es: "¿Qué se hace en tu país con la comida que nadie compra? ¿Hay bancos de alimentos?" },
      { it: "Sammeln oder spenden Sie gern für andere Menschen?", es: "¿Te gusta recolectar o donar para otras personas?" },
    ],
  },

  /* ═══ A1 · 13 — Wirtschaft ═══ */
  {
    id: "de-news-a1-13", cat: "economia", level: "A1", place: "Nürnberg", minutes: 2,
    title: "Nürnbergs Weihnachtsmarkt bringt Millionen",
    titleEs: "El mercado de Navidad de Núremberg trae millones",
    lead: {
      it: "Vier Wochen im Jahr wird Nürnbergs Marktplatz zu einem Dorf aus Holz und Licht. Das Dorf verkauft Glühwein — und bringt der Stadt Millionen.",
      es: "Cuatro semanas al año la plaza del mercado de Núremberg se convierte en un pueblo de madera y luz. El pueblo vende vino caliente — y trae millones a la ciudad.",
    },
    paragraphs: [
      { it: "Der Christkindlesmarkt in Nürnberg öffnet jedes Jahr Ende November. Über zwei Millionen Menschen besuchen ihn bis Heiligabend.",
      es: "El Christkindlesmarkt de Núremberg abre cada año a finales de noviembre. Más de dos millones de personas lo visitan hasta Nochebuena." },
      { it: "Etwa zweihundert Händler verkaufen hier Glühwein, Bratwürste und Handarbeit. In vier Wochen verdient man das Geld für viele Monate.",
      es: "Unos doscientos vendedores venden aquí vino caliente, salchichas a la plancha y artesanía. En cuatro semanas se gana el dinero de muchos meses." },
      { it: "Auch Hotels, Busse und Taxis verdienen mit. Die Stadt spricht von fast zweihundert Millionen Euro pro Jahr.",
      es: "También hoteles, autobuses y taxis ganan con ello. La ciudad habla de casi doscientos millones de euros al año." },
      { it: "Eine Händlerin, Frau Baumann, sagt: «Ich verkaufe hier Lebkuchen seit zwanzig Jahren. Der Markt ist mein zweites Zuhause — mit Kasse.»",
      es: "Una vendedora, la señora Baumann, dice: «Vendo aquí pan de especias desde hace veinte años. El mercado es mi segunda casa — con caja.»" },
    ],
    words: [
      { it: "der Christkindlesmarkt", es: "el famoso mercado de Navidad de Núremberg" },
      { it: "der Händler / die Händlerin", es: "el vendedor / la vendedora" },
      { it: "verkaufen", es: "vender" },
      { it: "der Glühwein", es: "el vino caliente especiado" },
      { it: "verdienen", es: "ganar (dinero)" },
      { it: "das Geld", es: "el dinero" },
    ],
    questions: [
      { q: "¿Cuándo abre el Christkindlesmarkt y cuánta gente lo visita?", options: ["Ende November; über zwei Millionen Menschen bis Heiligabend", "Im Sommer; hundert Menschen", "Im März; niemand", "Im Januar; zwei Millionen"], answer: 0, why: "«Der Christkindlesmarkt in Nürnberg öffnet jedes Jahr Ende November. Über zwei Millionen Menschen besuchen ihn bis Heiligabend.»" },
      { q: "¿Qué venden los vendedores en el mercado?", options: ["Autos und Busse", "Glühwein, Bratwürste und Handarbeit", "Möbel und Handys", "Nur Spielzeug"], answer: 1, why: "«Etwa zweihundert Händler verkaufen hier Glühwein, Bratwürste und Handarbeit.»" },
      { q: "¿Quiénes más ganan dinero con el mercado?", options: ["Nur die Händler", "Nur die Stadt", "Auch Hotels, Busse und Taxis — fast zweihundert Millionen Euro pro Jahr", "Niemand außer den Touristen"], answer: 2, why: "«Auch Hotels, Busse und Taxis verdienen mit. Die Stadt spricht von fast zweihundert Millionen Euro pro Jahr.»" },
      { q: "¿Qué dice la señora Baumann sobre el mercado?", options: ["«Der Markt ist zu teuer.»", "«Der Markt ist mein zweites Zuhause — mit Kasse.»", "«Ich arbeite nicht gern hier.»", "«Nächstes Jahr verkaufe ich nicht mehr.»"], answer: 1, why: "«Ich verkaufe hier Lebkuchen seit zwanzig Jahren. Der Markt ist mein zweites Zuhause — mit Kasse.»" },
    ],
    discuss: [
      { it: "Gibt es in Ihrer Stadt einen berühmten Markt? Was verkauft man dort?", es: "¿Hay un mercado famoso en tu ciudad? ¿Qué se vende allí?" },
      { it: "Ist ein Weihnachtsmarkt Kultur oder Wirtschaft — oder beides?", es: "¿Un mercado de Navidad es cultura o economía — o ambas cosas?" },
    ],
  },

  /* ═══ A1 · 14 — Kultur ═══ */
  {
    id: "de-news-a1-14", cat: "cultura", level: "A1", place: "Weimar", minutes: 2,
    title: "Weimar: die Stadt der Dichter",
    titleEs: "Weimar: la ciudad de los poetas",
    lead: {
      it: "In Weimar stehen zwei Dichter aus Bronze Hand in Hand: Goethe und Schiller. Die Welt kennt die kleine Stadt — wegen ihrer großen Wörter.",
      es: "En Weimar hay dos poetas de bronce tomados de la mano: Goethe y Schiller. El mundo conoce la pequeña ciudad — por sus grandes palabras.",
    },
    paragraphs: [
      { it: "Weimar ist eine kleine Stadt in Thüringen. Aber in der Welt der Bücher ist sie groß: Goethe und Schiller lebten und schrieben hier.",
      es: "Weimar es una ciudad pequeña en Turingia. Pero en el mundo de los libros es grande: Goethe y Schiller vivieron y escribieron aquí." },
      { it: "Vor dem Theater stehen ihre Statuen aus Bronze. Touristen aus vielen Ländern fotografieren die beiden Dichter — Tag und Nacht.",
      es: "Frente al teatro están sus estatuas de bronce. Turistas de muchos países fotografían a los dos poetas — día y noche." },
      { it: "In Goethes Gartenhaus liegt noch sein alter Schreibtisch. Dort entstehen heute Führungen, Lesungen und stille Gedanken.",
      es: "En la casa de jardín de Goethe sigue su viejo escritorio. Allí hoy surgen visitas guiadas, lecturas y pensamientos tranquilos." },
      { it: "Ein Museumsführer, Herr Vogel, sagt: «Goethe schrieb hier mit Feder und Tinte. Wir schreiben heute mit dem Handy — aber das Herz bleibt gleich.»",
      es: "Un guía de museo, el señor Vogel, dice: «Goethe escribía aquí con pluma y tinta. Hoy escribimos con el móvil — pero el corazón sigue igual.»" },
    ],
    words: [
      { it: "der Dichter", es: "el poeta" },
      { it: "die Statue / die Statuen", es: "la estatua" },
      { it: "das Gartenhaus", es: "la casa de jardín" },
      { it: "der Schreibtisch", es: "el escritorio", note: "no confundir: la mesa de escribir, no «el escritor» (der Schriftsteller)" },
      { it: "das Theater", es: "el teatro" },
      { it: "das Handy", es: "el teléfono móvil", note: "anglicismo alemán; no significa «handy» en inglés" },
    ],
    questions: [
      { q: "¿Qué tipo de ciudad es Weimar?", options: ["Eine kleine Stadt in Thüringen — groß in der Welt der Bücher", "Eine große Stadt am Meer", "Ein Dorf in Bayern", "Eine Insel im Norden"], answer: 0, why: "«Weimar ist eine kleine Stadt in Thüringen. Aber in der Welt der Bücher ist sie groß.»" },
      { q: "¿Qué hay frente al teatro?", options: ["Ein modernes Museum", "Die Statuen von Goethe und Schiller aus Bronze", "Nur Bäume und Bänke", "Ein Parkplatz"], answer: 1, why: "«Vor dem Theater stehen ihre Statuen aus Bronze.»" },
      { q: "¿Qué ocurre hoy en el Gartenhaus de Goethe?", options: ["Fußballspiele", "Konzerte mit lauter Musik", "Führungen, Lesungen und stille Gedanken", "Gar nichts"], answer: 2, why: "«Dort entstehen heute Führungen, Lesungen und stille Gedanken.»" },
      { q: "¿Qué quiere decir el señor Vogel con «das Herz bleibt gleich»?", options: ["Handys sind schlecht fürs Schreiben", "Goethe hatte ein kaltes Herz", "Heute schreibt niemand mehr", "Das Schreiben hat sich technisch verändert, aber die Gefühle sind gleich geblieben"], answer: 3, why: "«Goethe schrieb hier mit Feder und Tinte. Wir schreiben heute mit dem Handy — aber das Herz bleibt gleich.»" },
    ],
    discuss: [
      { it: "Kennen Sie Goethe oder Schiller? Ein Buch, ein Zitat, ein Name?", es: "¿Conoces a Goethe o a Schiller? ¿Un libro, una cita, un nombre?" },
      { it: "Feder und Tinte oder Handy: Wie schreiben Sie am liebsten?", es: "Pluma y tinta o móvil: ¿cómo te gusta más escribir?" },
    ],
  },

  /* ═══ A1 · 15 — Sport ═══ */
  {
    id: "de-news-a1-15", cat: "sport", level: "A1", place: "Garmisch", minutes: 2,
    title: "Wandern: ein Sport für die ganze Familie",
    titleEs: "El senderismo: un deporte para toda la familia",
    lead: {
      it: "Das Wandern ist Deutschlands Volkssport Nummer eins. In den Bergen bei Garmisch kann man sehen, warum.",
      es: "El senderismo es el deporte popular número uno de Alemania. En las montañas cerca de Garmisch se puede ver por qué.",
    },
    paragraphs: [
      { it: "Deutsche lieben das Wandern. Fast sechzig Millionen Menschen gehen jedes Jahr in Wald und Berge — mit Stiefeln, Stock und Butterbrot.",
      es: "Los alemanes aman el senderismo. Casi sesenta millones de personas salen cada año al bosque y a la montaña — con botas, bastón y bocadillo." },
      { it: "Bei Garmisch-Partenkirchen warten hohe Gipfel. Aber es gibt auch einfache Wege für Anfänger und Familien mit Kindern.",
      es: "Junto a Garmisch-Partenkirchen esperan cimas altas. Pero también hay caminos fáciles para principiantes y familias con niños." },
      { it: "Wer wandert, hält den Körper fit und den Kopf ruhig. Und oben auf dem Berg wartet oft eine Hütte mit Kuchen und warmem Tee.",
      es: "Quien camina mantiene el cuerpo en forma y la cabeza tranquila. Y arriba en la montaña muchas veces espera una cabaña con pastel y té caliente." },
      { it: "Eine Wanderin, Frau Berger, sagt: «Oben vergehen alle Sorgen. Nur der Rucksack ist schwer — und er wird unterwegs leichter.»",
      es: "Una excursionista, la señora Berger, dice: «Arriba se desvanecen todas las preocupaciones. Solo la mochila pesa — y por el camino se aligera.»" },
    ],
    words: [
      { it: "wandern / das Wandern", es: "caminar / el senderismo" },
      { it: "der Berg / die Berge", es: "la montaña" },
      { it: "der Weg / die Wege", es: "el camino" },
      { it: "der Gipfel", es: "la cima" },
      { it: "der Rucksack", es: "la mochila" },
      { it: "die Sorge / die Sorgen", es: "la preocupación" },
    ],
    questions: [
      { q: "¿Cuántas personas salen cada año al bosque y a la montaña?", options: ["Fast sechzig Millionen", "Fast sechs Millionen", "Nur sechzig", "Keine"], answer: 0, why: "«Fast sechzig Millionen Menschen gehen jedes Jahr in Wald und Berge.»" },
      { q: "¿Qué hay también cerca de Garmisch-Partenkirchen?", options: ["Nur schwere Kletterrouten", "Einfache Wege für Anfänger und Familien mit Kindern", "Keine Wege", "Nur Straßen für Autos"], answer: 1, why: "«Aber es gibt auch einfache Wege für Anfänger und Familien mit Kindern.»" },
      { q: "¿Qué logra quien camina según el texto?", options: ["Man wird müde und traurig", "Nur der Rücken schmerzt", "Der Körper wird fit und der Kopf ruhig", "Man lernt kochen"], answer: 2, why: "«Wer wandert, hält den Körper fit und den Kopf ruhig.»" },
      { q: "¿Por qué se vuelve más ligera la mochila por el camino?", options: ["Weil der Rucksack kaputtgeht", "Weil jemand anders ihn trägt", "Weil sie nichts mitnimmt", "Weil man unterwegs isst — und oben alle Sorgen vergehen"], answer: 3, why: "«Oben vergehen alle Sorgen. Nur der Rucksack ist schwer — und er wird unterwegs leichter.»" },
    ],
    discuss: [
      { it: "Wandern Sie gern? Wo ist Ihr Lieblingsweg?", es: "¿Te gusta el senderismo? ¿Cuál es tu camino favorito?" },
      { it: "Berge: Ferien oder Stress? Erzählen Sie.", es: "Las montañas: ¿vacaciones o estrés? Cuenta." },
    ],
  },

];
