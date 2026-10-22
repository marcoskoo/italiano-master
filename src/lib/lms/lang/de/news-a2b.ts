/* ── DE · Nachrichten A2, Teil B (v9.39) ──────────────────────────────
   Fortsetzung von lang/de/news-a.ts: ids de-news-a2-04 … de-news-a2-15
   (A2: 3 → 15 Notizen). Hochdeutsch, kontrollierter Wortschatz, Perfekt +
   Modalverben, Methode VOA Learning English: 4-5 kurze Absätze ≈ 90-125
   Wörter, Zitat einer lokalen Fachstimme, Ausblick am Ende. Felder `.it` =
   Deutsch, `.es` = Spanisch. */

import type { NewsItem } from "../../news";

export const DE_NEWS_A2B: NewsItem[] = [

  /* ═══ A2 · 4 — Wissenschaft ═══ */
  {
    id: "de-news-a2-04", cat: "scienza", level: "A2", place: "Göttingen", minutes: 3,
    title: "Kluge Krähen: ein Experiment in Göttingen",
    titleEs: "Grajos listos: un experimento en Gotinga",
    lead: {
      it: "Forscher in Göttingen haben Krähen ein Rätsel aufgegeben. Die Vögel haben es gelöst — und die Wissenschaftler sind überrascht.",
      es: "Investigadores de Gotinga les han planteado un acertijo a unos grajos. Las aves lo han resuelto — y los científicos están sorprendidos.",
    },
    paragraphs: [
      { it: "An der Universität Göttingen hat eine Biologin ein einfaches Spiel vorbereitet. Sie hat einen Leckerbissen unter einen Becher gelegt, und die Krähen mussten ihn finden.",
      es: "En la Universidad de Gotinga una bióloga ha preparado un juego sencillo. Ha puesto una golosina debajo de un vaso, y los grajos tenían que encontrarla." },
      { it: "Die Vögel haben sofort verstanden, wie das Spiel funktioniert. Sie haben den Becher umgeworfen und die Belohnung bekommen. Eine alte Krähe hat sogar zwei Schritte geplant.",
      es: "Las aves han entendido enseguida cómo funciona el juego. Han volcado el vaso y han recibido la recompensa. Una graja vieja incluso ha planeado dos pasos." },
      { it: "Die Biologin, Frau Hartmann, sagt: «Wir haben gedacht, Vögel können das nicht. Aber die Krähen haben uns eines Besseren belehrt.»",
      es: "La bióloga, la señora Hartmann, dice: «Pensábamos que las aves no podían hacerlo. Pero los grajos nos han demostrado lo contrario.»" },
      { it: "Jetzt wollen die Forscher mehr wissen. Sie haben einen neuen Test geplant, denn Krähen können sich offenbar Zahlen merken. Vielleicht lernen wir bald noch mehr über diese klugen Stadtvögel.",
      es: "Ahora los investigadores quieren saber más. Han planeado una nueva prueba, porque al parecer los grajos pueden memorizar números. Quizá pronto aprendamos algo más sobre estas aves urbanas tan listas." },
    ],
    words: [
      { it: "die Krähe / die Krähen", es: "el grajo / los grajos", note: "más pequeña que der Rabe, el cuervo" },
      { it: "der Becher / die Becher", es: "el vaso" },
      { it: "der Leckerbissen", es: "la golosina, el premio" },
      { it: "die Belohnung", es: "la recompensa" },
      { it: "die Zahl / die Zahlen", es: "el número / los números" },
      { it: "sich merken", es: "memorizar, recordar" },
    ],
    questions: [
      { q: "¿Qué ha puesto la bióloga debajo del vaso?", options: ["Einen Leckerbissen", "Einen Stein", "Einen Schlüssel", "Ein Foto"], answer: 0, why: "«Sie hat einen Leckerbissen unter einen Becher gelegt, und die Krähen mussten ihn finden.»" },
      { q: "¿Qué ha llegado a planear una graja vieja?", options: ["Nur einen Schritt", "Eine Reise in die Stadt", "Zwei Schritte", "Eine Flucht"], answer: 2, why: "«Eine alte Krähe hat sogar zwei Schritte geplant.»" },
      { q: "¿Qué habían pensado primero los investigadores?", options: ["Die Krähen sind faul", "Vögel können das nicht", "Das Spiel ist zu teuer", "Krähen mögen keine Becher"], answer: 1, why: "«Wir haben gedacht, Vögel können das nicht.»" },
      { q: "¿Qué quieren estudiar ahora los investigadores?", options: ["Ob Krähen nachts schlafen", "Wo Krähen wohnen", "Was Krähen essen", "Ob Krähen sich Zahlen merken können"], answer: 3, why: "«Sie haben einen neuen Test geplant, denn Krähen können sich offenbar Zahlen merken.»" },
    ],
    discuss: [
      { it: "Welche Tiere haben Sie schon beobachtet? Wie schlau waren sie?", es: "¿Qué animales has observado ya? ¿Qué tan listos eran?" },
      { it: "Krähen in der Stadt: Problem oder Nachbarn? Warum?", es: "Los grajos en la ciudad: ¿problema o vecinos? ¿Por qué?" },
    ],
  },

  /* ═══ A2 · 5 — Umwelt ═══ */
  {
    id: "de-news-a2-05", cat: "ambiente", level: "A2", place: "Flensburg", minutes: 3,
    title: "Strom aus Wind: ein Versuchsviertel in Flensburg",
    titleEs: "Electricidad del viento: un barrio de prueba en Flensburgo",
    lead: {
      it: "Flensburg liegt an der Ostsee, wo der Wind fast immer weht. Die Stadt hat einen Plan: mehr Strom aus Wind und Sonne, weniger aus Kohle.",
      es: "Flensburgo está junto al mar Báltico, donde el viento sopla casi siempre. La ciudad tiene un plan: más electricidad del viento y el sol, menos del carbón.",
    },
    paragraphs: [
      { it: "An der Küste bei Flensburg stehen große Windräder. Seit einem Jahr drehen sie sich fast ohne Pause — auch nachts um drei Uhr.",
      es: "En la costa cerca de Flensburgo hay grandes aerogeneradores. Desde hace un año giran casi sin pausa — también de noche, a las tres." },
      { it: "Die Stadt hat ein Versuchsviertel gebaut. Dort bekommen zweihundert Häuser ihren Strom direkt aus der Nachbarschaft — aus Wind und Sonne.",
      es: "La ciudad ha construido un barrio de prueba. Allí, doscientas casas reciben su electricidad directamente del vecindario — del viento y del sol." },
      { it: "Der Ingenieur Herr Petersen sagt: «Wir haben die Rechnungen dreimal geprüft. Die Familien müssen weniger bezahlen, denn der Wind schickt keine Rechnung.»",
      es: "El ingeniero, el señor Petersen, dice: «Hemos comprobado las cuentas tres veces. Las familias tienen que pagar menos, porque el viento no envía ninguna factura.»" },
      { it: "Nicht jeder hat Freude am Projekt. Einige Bewohner haben sich beschwert, denn das Rad vor ihrem Fenster ist zu groß.",
      es: "No todo el mundo está contento con el proyecto. Algunos vecinos se han quejado, porque el rotor frente a su ventana es demasiado grande." },
      { it: "Die Stadt hat eine Regel gefunden: Ab zweiundzwanzig Uhr dürfen die Anlagen nicht mehr laut laufen. So kann Flensburg weiter den Wind nutzen — und die Nachbarn können schlafen.",
      es: "La ciudad ha encontrado una regla: desde las veintidós, las instalaciones no pueden funcionar con ruido. Así Flensburgo puede seguir usando el viento — y los vecinos pueden dormir." },
    ],
    words: [
      { it: "das Windrad / die Windräder", es: "el aerogenerador", note: "literalmente «rueda de viento»" },
      { it: "der Strom", es: "la electricidad, la corriente" },
      { it: "die Küste", es: "la costa" },
      { it: "der Bewohner / die Bewohner", es: "el vecino / los vecinos" },
      { it: "die Anlage / die Anlagen", es: "la instalación, la planta" },
      { it: "die Rechnung / die Rechnungen", es: "la factura" },
    ],
    questions: [
      { q: "¿De dónde reciben la electricidad doscientas casas del barrio de prueba?", options: ["Aus einem Kohlekraftwerk", "Direkt aus der Nachbarschaft — aus Wind und Sonne", "Aus einem See", "Aus dem Nachbarland"], answer: 1, why: "«Dort bekommen zweihundert Häuser ihren Strom direkt aus der Nachbarschaft — aus Wind und Sonne.»" },
      { q: "¿Qué ha dicho el ingeniero Petersen sobre el viento?", options: ["Der Wind schickt keine Rechnung", "Der Wind ist zu teuer", "Der Wind schläft im Winter", "Der Wind gehört den Nachbarn"], answer: 0, why: "«Die Familien müssen weniger bezahlen, denn der Wind schickt keine Rechnung.»" },
      { q: "¿Por qué se han quejado algunos vecinos?", options: ["Weil der Strom oft fehlt", "Weil die Straße zu schmal ist", "Weil das Rad vor ihrem Fenster zu groß ist", "Weil es keinen Wind gibt"], answer: 2, why: "«Einige Bewohner haben sich beschwert, denn das Rad vor ihrem Fenster ist zu groß.»" },
      { q: "¿Qué regla ha encontrado la ciudad?", options: ["Die Anlagen laufen nie", "Nachts ist alles erlaubt", "Die Anlagen stehen im Meer", "Ab zweiundzwanzig Uhr dürfen die Anlagen nicht mehr laut laufen"], answer: 3, why: "«Ab zweiundzwanzig Uhr dürfen die Anlagen nicht mehr laut laufen.»" },
    ],
    discuss: [
      { it: "Woher kommt der Strom in Ihrer Stadt? Wissen Sie es?", es: "¿De dónde viene la electricidad de tu ciudad? ¿Lo sabes?" },
      { it: "Ein Windrad vor Ihrem Fenster: schön oder schlecht? Erzählen Sie.", es: "Un aerogenerador frente a tu ventana: ¿bonito o malo? Cuenta." },
    ],
  },

  /* ═══ A2 · 6 — Umwelt ═══ */
  {
    id: "de-news-a2-06", cat: "ambiente", level: "A2", place: "Wuppertal", minutes: 3,
    title: "Wuppertal: die Bahn, die über dem Fluss hängt",
    titleEs: "Wuppertal: el tren que cuelga sobre el río",
    lead: {
      it: "In Wuppertal fährt die Bahn nicht auf der Straße, sondern über dem Fluss. Die Schwebebahn ist über hundertzwanzig Jahre alt — und fährt immer noch.",
      es: "En Wuppertal el tren no circula por la calle, sino sobre el río. El tren suspendido tiene más de ciento veinte años — y sigue circulando.",
    },
    paragraphs: [
      { it: "Vor über hundertzwanzig Jahren haben die Ingenieure ein Problem gehabt: Die Stadt ist lang, die Straßen sind schmal, und ein Fluss läuft durch die Mitte.",
      es: "Hace más de ciento veinte años los ingenieros tuvieron un problema: la ciudad es larga, las calles son estrechas y un río atraviesa el centro." },
      { it: "Ihre Lösung hängt in der Luft. Die Wagen der Schwebebahn hängen an einem Gestell über der Wupper — wie Körbe an einem Draht. Heute fahren sie alle paar Minuten.",
      es: "Su solución cuelga en el aire. Los vagones del Schwebebahn cuelgan de una estructura sobre el río Wupper — como cestas de un alambre. Hoy pasan cada pocos minutos." },
      { it: "Millionen Fahrgäste haben die Bahn seit der ersten Fahrt benutzt. Sie braucht keine eigene Straße und keinen Platz am Boden, denn sie schwebt über dem Fluss.",
      es: "Millones de pasajeros han usado el tren desde el primer viaje. No necesita calle propia ni espacio en el suelo, porque flota sobre el río." },
      { it: "Eine Sprecherin der Stadt, Frau Gerlach, sagt: «Wir haben die Bahn nie ersetzen können. Sie ist Verkehrsmittel und Wahrzeichen zugleich.» Im nächsten Jahr beginnen große Reparaturen — die Bahn wird jünger, nicht älter.",
      es: "Una portavoz de la ciudad, la señora Gerlach, dice: «Nunca hemos podido reemplazar el tren. Es medio de transporte y símbolo de la ciudad a la vez.» El próximo año comienzan grandes reparaciones — el tren se vuelve más joven, no más viejo." },
    ],
    words: [
      { it: "die Schwebebahn", es: "el tren suspendido" },
      { it: "der Fluss / die Flüsse", es: "el río / los ríos" },
      { it: "der Fahrgast / die Fahrgäste", es: "el pasajero / los pasajeros", note: "compuesto: Fahrt (viaje) + Gast (invitado)" },
      { it: "das Gestell", es: "la estructura, el bastidor" },
      { it: "das Wahrzeichen", es: "el símbolo, el emblema de la ciudad" },
      { it: "die Wupper", es: "el (río) Wupper" },
    ],
    questions: [
      { q: "¿Qué problema tenían los ingenieros hace más de ciento veinte años?", options: ["Die Stadt ist lang, die Straßen sind schmal, und ein Fluss läuft durch die Mitte", "Es gab zu viele Züge", "Die Berge waren zu hoch", "Das Wasser war zu kalt"], answer: 0, why: "«Die Stadt ist lang, die Straßen sind schmal, und ein Fluss läuft durch die Mitte.»" },
      { q: "¿Cómo cuelgan los vagones de la Schwebebahn?", options: ["An Kabeln unter der Straße", "An einem Gestell über der Wupper — wie Körbe an einem Draht", "Auf Rädern im Tunnel", "An Brücken aus Stahl"], answer: 1, why: "«Die Wagen der Schwebebahn hängen an einem Gestell über der Wupper — wie Körbe an einem Draht.»" },
      { q: "¿Por qué la Schwebebahn no necesita calle propia?", options: ["Weil sie sehr klein ist", "Weil sie nur nachts fährt", "Weil sie auf Wasser schwimmt", "Weil sie über dem Fluss schwebt"], answer: 3, why: "«Sie braucht keine eigene Straße und keinen Platz am Boden, denn sie schwebt über dem Fluss.»" },
      { q: "¿Qué pasará el próximo año?", options: ["Die Bahn wird geschlossen", "Ein Tunnel wird gebaut", "Große Reparaturen beginnen — die Bahn wird jünger, nicht älter", "Die Wupper wird umgeleitet"], answer: 2, why: "«Im nächsten Jahr beginnen große Reparaturen — die Bahn wird jünger, nicht älter.»" },
    ],
    discuss: [
      { it: "Gibt es ein altes Verkehrsmittel, das Ihre Stadt liebt? Welches?", es: "¿Hay un medio de transporte viejo al que tu ciudad quiera? ¿Cuál?" },
      { it: "Woran hängt Ihre Stadt — an einer Brücke, einem Fluss, einer Bahn? Erzählen Sie.", es: "¿De qué «cuelga» tu ciudad — un puente, un río, un tren? Cuenta." },
    ],
  },

  /* ═══ A2 · 7 — Gesundheit ═══ */
  {
    id: "de-news-a2-07", cat: "salute", level: "A2", place: "Bad Wörishofen", minutes: 3,
    title: "Heilen mit Wasser: die Methode Kneipp",
    titleEs: "Curar con agua: el método Kneipp",
    lead: {
      it: "In Bad Wörishofen hat ein Pfarrer vor rund hundertsiebzig Jahren eine Therapie erfunden: Wasser, Bewegung, Kräuter. Heute kommen Kranke und Gesunde zum Wassertreten.",
      es: "En Bad Wörishofen un párroco ha inventado hace unos ciento setenta años una terapia: agua, movimiento, hierbas. Hoy vienen enfermos y sanos a pisar el agua.",
    },
    paragraphs: [
      { it: "Der Pfarrer Sebastian Kneipp war selbst krank und hat sich mit kaltem Wasser geheilt. Danach hat er seine Methode jahrzehntelang verbessert und ein Buch geschrieben.",
      es: "El párroco Sebastian Kneipp estuvo él mismo enfermo y se curó con agua fría. Después mejoró su método durante décadas y escribió un libro." },
      { it: "Das Herzstück ist das Wassertreten: Patienten laufen barfuß durch einen Bach. Sie müssen die Knie hochheben, und das kalte Wasser regt den Kreislauf an.",
      es: "La pieza central es el Wassertreten (pisar el agua): los pacientes caminan descalzos por un arroyo. Deben levantar las rodillas, y el agua fría estimula la circulación." },
      { it: "Die Ärzte haben die Methode lange kritisiert. Aber neue Studien haben gezeigt, dass Wechselduschen das Immunsystem stärken können. Seit ein paar Jahren bezahlen auch die Krankenkassen eine Kneipp-Kur.",
      es: "Los médicos criticaron el método durante mucho tiempo. Pero estudios nuevos han demostrado que las duchas alternas pueden fortalecer el sistema inmunitario. Desde hace unos años, también los seguros de enfermedad pagan una cura Kneipp." },
      { it: "Eine Kurleiterin, Frau Adler, sagt: «Am Anfang haben die Gäste Angst vor dem kalten Wasser. Nach einer Woche wollen viele nicht mehr nach Hause gehen.»",
      es: "Una directora de curas, la señora Adler, dice: «Al principio los huéspedes tienen miedo del agua fría. A la semana, muchos no quieren irse a casa.»" },
    ],
    words: [
      { it: "die Methode / die Methoden", es: "el método" },
      { it: "das Wassertreten", es: "el «pisar el agua» (terapia de Kneipp)" },
      { it: "der Bach / die Bäche", es: "el arroyo" },
      { it: "der Kreislauf", es: "la circulación" },
      { it: "die Krankenkasse / die Krankenkassen", es: "el seguro de enfermedad" },
      { it: "der Gast / die Gäste", es: "el huésped / los huéspedes" },
    ],
    questions: [
      { q: "¿Quién fue Sebastian Kneipp?", options: ["Ein Pfarrer, der sich mit kaltem Wasser geheilt hat", "Ein Arzt aus München", "Ein schwedischer König", "Ein Sportlehrer"], answer: 0, why: "«Der Pfarrer Sebastian Kneipp war selbst krank und hat sich mit kaltem Wasser geheilt.»" },
      { q: "¿Qué deben hacer los pacientes al caminar por el arroyo?", options: ["Schwimmen", "Schnell laufen", "Die Knie hochheben", "Die Augen schließen"], answer: 2, why: "«Sie müssen die Knie hochheben, und das kalte Wasser regt den Kreislauf an.»" },
      { q: "¿Qué han demostrado los estudios nuevos?", options: ["Kneipp war ein Betrüger", "Dass Wechselduschen das Immunsystem stärken können", "Kaltes Wasser ist gefährlich", "Bücher heilen jede Krankheit"], answer: 1, why: "«Neue Studien haben gezeigt, dass Wechselduschen das Immunsystem stärken können.»" },
      { q: "¿Qué observa la directora de las curas?", options: ["Die Gäste bleiben für immer", "Niemand kommt wieder", "Das Wasser ist zu warm", "Am Anfang haben die Gäste Angst — nach einer Woche wollen viele nicht mehr nach Hause gehen"], answer: 3, why: "«Nach einer Woche wollen viele nicht mehr nach Hause gehen.»" },
    ],
    discuss: [
      { it: "Kaltes Wasser am Morgen: Können Sie sich das vorstellen?", es: "Agua fría por la mañana: ¿puedes imaginártelo?" },
      { it: "Welche alten Hausmittel kennen Sie? Funktionieren sie?", es: "¿Qué remedios caseros antiguos conoces? ¿Funcionan?" },
    ],
  },

  /* ═══ A2 · 8 — Gesundheit ═══ */
  {
    id: "de-news-a2-08", cat: "salute", level: "A2", place: "Bochum", minutes: 3,
    title: "Schlaf-Studie in Bochum: das Handy schläft im Flur",
    titleEs: "Estudio del sueño en Bochum: el móvil duerme en el pasillo",
    lead: {
      it: "Forscher in Bochum haben Studenten eine Aufgabe gegeben: zwei Wochen ohne Handy im Bett. Das Ergebnis war besser als erwartet.",
      es: "Investigadores de Bochum les han dado una tarea a unos estudiantes: dos semanas sin móvil en la cama. El resultado fue mejor de lo esperado.",
    },
    paragraphs: [
      { it: "An der Universität Bochum haben Psychologen ein einfaches Experiment gemacht. Vierzig Studentinnen und Studenten haben zwei Wochen lang jeden Schlaf notiert.",
      es: "En la Universidad de Bochum psicólogos han hecho un experimento sencillo. Cuarenta estudiantes han registrado su sueño cada noche durante dos semanas." },
      { it: "In der ersten Woche durften die Teilnehmer bis ins Bett scrollen. In der zweiten Woche mussten sie das Handy um einundzwanzig Uhr vor der Schlafzimmertür lassen.",
      es: "En la primera semana los participantes pudieron hacer scroll hasta en la cama. En la segunda semana tuvieron que dejar el móvil a las veintiuno ante la puerta del dormitorio." },
      { it: "Das Ergebnis war deutlich: Ohne Handy sind die Probanden schneller eingeschlafen und haben länger geschlafen. Viele haben am Morgen zum ersten Mal seit Monaten gefrühstückt.",
      es: "El resultado fue claro: sin móvil, los probandos se durmieron más rápido y durmieron más tiempo. Muchos desayunaron por primera vez en meses." },
      { it: "Die Leiterin des Teams, Frau Sander, sagt: «Wir haben nichts Neues erfunden. Der Schlaf war schon immer da — wir haben ihn nur mit dem Licht vertrieben.»",
      es: "La jefa del equipo, la señora Sander, dice: «No hemos inventado nada nuevo. El sueño siempre estuvo ahí — solo lo espantamos con la luz.»" },
    ],
    words: [
      { it: "das Experiment / die Experimente", es: "el experimento" },
      { it: "der Schlaf", es: "el sueño (acto de dormir)" },
      { it: "das Ergebnis / die Ergebnisse", es: "el resultado" },
      { it: "der Teilnehmer / die Teilnehmer", es: "el participante" },
      { it: "das Handy", es: "el móvil", note: "anglicismo alemán; no significa «práctico»" },
      { it: "das Licht", es: "la luz" },
    ],
    questions: [
      { q: "¿Cuántas personas participaron en el experimento?", options: ["Vier", "Vierzig Studentinnen und Studenten", "Vierhundert", "Vierzehn"], answer: 1, why: "«Vierzig Studentinnen und Studenten haben zwei Wochen lang jeden Schlaf notiert.»" },
      { q: "¿Qué han tenido que hacer en la segunda semana?", options: ["Das Handy um einundzwanzig Uhr vor der Schlafzimmertür lassen", "Länger scrollen als vorher", "Im Labor schlafen", "Nachts arbeiten"], answer: 0, why: "«In der zweiten Woche mussten sie das Handy um einundzwanzig Uhr vor der Schlafzimmertür lassen.»" },
      { q: "¿Qué ha pasado sin el móvil?", options: ["Sie haben schlechter geträumt", "Nichts hat sich geändert", "Die Probanden sind schneller eingeschlafen und haben länger geschlafen", "Sie sind später aufgestanden"], answer: 2, why: "«Ohne Handy sind die Probanden schneller eingeschlafen und haben länger geschlafen.»" },
      { q: "¿Cómo explica la jefa del equipo el descubrimiento?", options: ["«Handys sind schlecht.»", "«Studenten brauchen keinen Schlaf.»", "«Wir haben ein Wunder erlebt.»", "«Der Schlaf war schon immer da — wir haben ihn nur mit dem Licht vertrieben.»"], answer: 3, why: "«Wir haben nichts Neues erfunden. Der Schlaf war schon immer da — wir haben ihn nur mit dem Licht vertrieben.»" },
    ],
    discuss: [
      { it: "Wo schläft Ihr Handy — im Bett oder im Flur? Ehrlich!", es: "¿Dónde duerme tu móvil — en la cama o en el pasillo? ¡Honestamente!" },
      { it: "Wie viele Stunden schlafen Sie in der Nacht? Ist das genug?", es: "¿Cuántas horas duermes por noche? ¿Es suficiente?" },
    ],
  },

  /* ═══ A2 · 9 — Kultur ═══ */
  {
    id: "de-news-a2-09", cat: "cultura", level: "A2", place: "Düsseldorf", minutes: 3,
    title: "Düsseldorf im Karneval: die fünfte Jahreszeit",
    titleEs: "Düsseldorf en carnaval: la quinta estación",
    lead: {
      it: "In Düsseldorf hat der Karneval begonnen. Elf Monate im Jahr ist die Stadt ruhig — dann übernehmen die Narren das Rathaus.",
      es: "En Düsseldorf ha empezado el carnaval. Once meses al año la ciudad es tranquila — entonces los locos toman el ayuntamiento.",
    },
    paragraphs: [
      { it: "Am elften November um elf Uhr elf hat der Karneval begonnen. In diesem Moment haben die Narren symbolisch die Schlüssel vom Rathaus bekommen.",
      es: "El once de noviembre a las once y once ha empezado el carnaval. En ese momento los locos recibieron simbólicamente las llaves del ayuntamiento." },
      { it: "Monate lang haben die Vereine Kostüme genäht, Lieder geprobt und Reden geschrieben. In den Sälen der Stadt haben die Kapellen gespielt, und alle haben laut mitgesungen.",
      es: "Durante meses los clubes han cosido disfraces, han ensayado canciones y han escrito discursos. En las salas de la ciudad tocaron las bandas, y todos cantaron a gritos." },
      { it: "Der Höhepunkt ist der Rosenmontagszug. Über sechzig Wagen sind durch die Innenstadt gefahren, und Zehntausende Zuschauer haben Bonbons und Blumen von den Wagen gefangen.",
      es: "El punto culminante es el desfile del Lunes de Rosas. Más de sesenta carrozas circularon por el centro, y decenas de miles de espectadores atraparon caramelos y flores lanzados desde las carrozas." },
      { it: "Eine Organisatorin, Frau Jansen, sagt: «Wir haben ein ganzes Jahr dafür gearbeitet. Aber wenn die Musik spielt und die Leute lachen, haben wir alles vergessen.»",
      es: "Una organizadora, la señora Jansen, dice: «Hemos trabajado un año entero para esto. Pero cuando suena la música y la gente ríe, lo olvidamos todo.»" },
    ],
    words: [
      { it: "der Karneval", es: "el carnaval" },
      { it: "der Narr / die Narren", es: "el loco (figura del carnaval)" },
      { it: "das Kostüm / die Kostüme", es: "el disfraz" },
      { it: "der Wagen / die Wagen", es: "la carroza" },
      { it: "das Rathaus", es: "el ayuntamiento" },
      { it: "der Saal / die Säle", es: "la sala" },
    ],
    questions: [
      { q: "¿Cuándo ha empezado el carnaval?", options: ["Am elften November um elf Uhr elf", "Am ersten Januar", "Am Rosenmontag", "Im Hochsommer"], answer: 0, why: "«Am elften November um elf Uhr elf hat der Karneval begonnen.»" },
      { q: "¿Qué han preparado los clubes durante meses?", options: ["Ein Feuerwerk", "Ein Festessen", "Kostüme, Lieder und Reden", "Eine große Reise"], answer: 2, why: "«Monate lang haben die Vereine Kostüme genäht, Lieder geprobt und Reden geschrieben.»" },
      { q: "¿Qué han atrapado miles de espectadores?", options: ["Regen und Wind", "Zeitungen", "Bälle", "Bonbons und Blumen von den Wagen"], answer: 3, why: "«Zehntausende Zuschauer haben Bonbons und Blumen von den Wagen gefangen.»" },
      { q: "¿Qué ha dicho la organizadora señora Jansen?", options: ["«Karneval ist zu teuer.»", "«Wir haben ein ganzes Jahr dafür gearbeitet.»", "«Die Musik war zu leise.»", "«Nächstes Jahr machen wir nicht mit.»"], answer: 1, why: "«Wir haben ein ganzes Jahr dafür gearbeitet. Aber wenn die Musik spielt und die Leute lachen, haben wir alles vergessen.»" },
    ],
    discuss: [
      { it: "Welches Fest braucht in Ihrer Stadt ein ganzes Jahr Vorbereitung?", es: "¿Qué fiesta de tu ciudad necesita un año entero de preparación?" },
      { it: "Kostüme: gerne oder ungern? Erzählen Sie von einem Erlebnis.", es: "Disfraces: ¿con ganas o sin ganas? Cuenta una experiencia." },
    ],
  },

  /* ═══ A2 · 10 — Kultur ═══ */
  {
    id: "de-news-a2-10", cat: "cultura", level: "A2", place: "Lübeck", minutes: 3,
    title: "Lübeck und das süße Geheimnis der Mandeln",
    titleEs: "Lübeck y el dulce secreto de las almendras",
    lead: {
      it: "In Lübeck riecht es nach Mandeln und Zucker. Die alte Hansestadt hat seit Jahrhunderten ein süßes Geheimnis: Marzipan.",
      es: "En Lübeck huele a almendras y azúcar. La vieja ciudad hanseática tiene desde hace siglos un dulce secreto: el mazapán.",
    },
    paragraphs: [
      { it: "Eine alte Geschichte sagt: Vor sechshundert Jahren hat eine Hungersnot der Stadt das Mehl genommen. Die Bäcker haben Mandeln gemahlen, und der Marzipan war geboren.",
      es: "Una vieja historia cuenta: hace seiscientos años una hambruna le quitó a la ciudad la harina. Los panaderos molieron almendras, y el mazapán nació." },
      { it: "In den Läden der Altstadt verkaufen die Verkäufer Figuren aus Marzipan: Schweine, Herzen, Brezeln und kleine Kartoffeln. Am Holstentor probieren Touristen die süßen Figuren, und vor Weihnachten stehen die Kunden Schlange.",
      es: "En las tiendas del casco antiguo los vendedores ofrecen figuras de mazapán: cerditos, corazones, pretzels y patatitas. Junto a la Puerta de Holsten los turistas prueban las figuras dulces, y antes de Navidad los clientes hacen cola." },
      { it: "Nicht jeder darf den Namen «Lübecker Marzipan» benutzen. Nur Betriebe aus der Region haben dieses Recht, denn auch die Qualität hat strenge Regeln.",
      es: "No cualquiera puede usar el nombre «Lübecker Marzipan». Solo las empresas de la región tienen ese derecho, porque también la calidad tiene reglas estrictas." },
      { it: "Eine Konditorin, Frau Ritter, sagt: «Mein Urgroßvater hat hier schon Marzipan geknetet. Die Rezepte haben wir nie verraten — nur die Ergebnisse verkauft.»",
      es: "Una confitera, la señora Ritter, dice: «Mi bisabuelo ya amasaba mazapán aquí. Las recetas nunca las hemos revelado — solo hemos vendido los resultados.»" },
    ],
    words: [
      { it: "der Marzipan", es: "el mazapán", note: "sustantivo masculino en alemán" },
      { it: "die Mandel / die Mandeln", es: "la almendra" },
      { it: "das Mehl", es: "la harina" },
      { it: "der Bäcker / die Bäcker", es: "el panadero" },
      { it: "die Figur / die Figuren", es: "la figura" },
      { it: "die Altstadt", es: "el casco antiguo" },
    ],
    questions: [
      { q: "¿Qué le quitó el hambre a la ciudad hace seiscientos años?", options: ["Den Zucker", "Das Mehl", "Die Mandeln", "Das Salz"], answer: 1, why: "«Vor sechshundert Jahren hat eine Hungersnot der Stadt das Mehl genommen.»" },
      { q: "¿Cómo nació el mazapán según la vieja historia?", options: ["Die Bäcker haben Mandeln gemahlen, und der Marzipan war geboren", "Ein Kaufmann brachte ihn aus dem Orient", "Die Königin erfand ihn für ein Fest", "Ein Kind mischte Zucker und Nüsse"], answer: 0, why: "«Die Bäcker haben Mandeln gemahlen, und der Marzipan war geboren.»" },
      { q: "¿Quién puede usar el nombre «Lübecker Marzipan»?", options: ["Jeder Laden in Deutschland", "Nur ein Familienbetrieb", "Nur Betriebe aus der Region", "Niemand"], answer: 2, why: "«Nur Betriebe aus der Region haben dieses Recht, denn auch die Qualität hat strenge Regeln.»" },
      { q: "¿Qué ha dicho la confitera sobre las recetas?", options: ["«Die Rezepte stehen im Internet.»", "«Wir haben keine Rezepte.»", "«Der Urgroßvater arbeitete in Paris.»", "«Die Rezepte haben wir nie verraten — nur die Ergebnisse verkauft.»"], answer: 3, why: "«Die Rezepte haben wir nie verraten — nur die Ergebnisse verkauft.»" },
    ],
    discuss: [
      { it: "Welche Süßigkeit ist typisch für Ihre Region? Beschreiben Sie sie.", es: "¿Qué dulce es típico de tu región? Descríbelo." },
      { it: "Alte Rezepte: geheim halten oder teilen? Warum?", es: "Las recetas antiguas: ¿guardarlas en secreto o compartirlas? ¿Por qué?" },
    ],
  },

  /* ═══ A2 · 11 — Geschichte ═══ */
  {
    id: "de-news-a2-11", cat: "storia", level: "A2", place: "Aachen", minutes: 3,
    title: "Aachen: die Stadt der Könige und des warmen Wassers",
    titleEs: "Aquisgrán: la ciudad de los reyes y del agua caliente",
    lead: {
      it: "In Aachen haben sich dreißig deutsche Könige die Krone aufsetzen lassen. Der Grund war ein Kaiser, der warmes Wasser und gute Bücher liebte.",
      es: "En Aquisgrán treinta reyes alemanes se dejaron poner la corona. La razón fue un emperador que amaba el agua caliente y los buenos libros.",
    },
    paragraphs: [
      { it: "Kaiser Karl der Große hat um das Jahr 800 hier seine Lieblingsresidenz gebaut. Die Pfalz hatte eine prächtige Kapelle und Thermalbäder, denn Aachen besitzt heiße Quellen aus der Römerzeit.",
      es: "El emperador Carlomagno construyó aquí, hacia el año 800, su residencia favorita. El palacio tenía una capilla espléndida y termas, porque Aquisgrán posee fuentes calientes de la época romana." },
      { it: "Sechshundert Jahre lang haben sich die deutschen Könige in dieser Kapelle krönen lassen. Wer die Krone wollte, musste nach Aachen reisen — es gab keine andere Wahl.",
      es: "Durante seiscientos años los reyes alemanes se hicieron coronar en esa capilla. Quien quería la corona tenía que viajar a Aquisgrán — no había otra opción." },
      { it: "Der Marmorthron im Dom hat eine geheime Geschichte: Die Steine sollen aus dem heiligen Land kommen. Und bequem war der Thron nie — ein Kissen hat es dort nie gegeben.",
      es: "El trono de mármol de la catedral tiene una historia secreta: se dice que las piedras vienen de Tierra Santa. Y cómodo nunca fue el trono — un cojín jamás existió allí." },
      { it: "Ein Historiker, Herr Klein, sagt: «Wir haben im Dom über dreißig Krönungen gezählt. Der letzte König hat hier im Jahr 1531 Platz genommen.»",
      es: "Un historiador, el señor Klein, dice: «En la catedral hemos contado más de treinta coronaciones. El último rey se sentó aquí en 1531.»" },
    ],
    words: [
      { it: "der Kaiser / die Kaiser", es: "el emperador" },
      { it: "die Krone / die Kronen", es: "la corona" },
      { it: "die Kapelle / die Kapellen", es: "la capilla" },
      { it: "der Thron / die Throne", es: "el trono" },
      { it: "die Quelle / die Quellen", es: "el manantial, la fuente termal" },
      { it: "der Dom / die Dome", es: "la catedral" },
    ],
    questions: [
      { q: "¿Qué ha construido el emperador Carlomagno hacia el año 800?", options: ["Seine Lieblingsresidenz mit Kapelle und Thermalbädern", "Eine Stadtmauer", "Einen Hafen am Meer", "Ein Kloster in den Bergen"], answer: 0, why: "«Kaiser Karl der Große hat um das Jahr 800 hier seine Lieblingsresidenz gebaut.»" },
      { q: "¿Qué tenían que hacer quienes querían la corona?", options: ["Nach Rom reisen", "Ein Bad nehmen", "Steine aus dem heiligen Land holen", "Nach Aachen reisen — es gab keine andere Wahl"], answer: 3, why: "«Wer die Krone wollte, musste nach Aachen reisen — es gab keine andere Wahl.»" },
      { q: "¿De dónde se supone que vienen las piedras del trono de mármol?", options: ["Aus Rom", "Aus dem heiligen Land", "Aus Griechenland", "Aus Ägypten"], answer: 1, why: "«Die Steine sollen aus dem heiligen Land kommen.»" },
      { q: "¿Cuándo tuvo lugar la última coronación según el historiador?", options: ["Im Jahr 800", "Im Jahr 1815", "Im Jahr 1531", "Vor zwei Jahren"], answer: 2, why: "«Der letzte König hat hier im Jahr 1531 Platz genommen.»" },
    ],
    discuss: [
      { it: "Gibt es einen Thron oder eine Krone in der Geschichte Ihres Landes? Erzählen Sie.", es: "¿Hay un trono o una corona en la historia de tu país? Cuenta." },
      { it: "Warmes Wasser und gute Bücher: Was braucht ein guter Chef heute?", es: "Agua caliente y buenos libros: ¿qué necesita hoy un buen jefe?" },
    ],
  },

  /* ═══ A2 · 12 — Wirtschaft ═══ */
  {
    id: "de-news-a2-12", cat: "economia", level: "A2", place: "Wolfsburg", minutes: 3,
    title: "Wolfsburg: eine Stadt wächst aus einer Fabrik",
    titleEs: "Wolfsburgo: una ciudad nacida de una fábrica",
    lead: {
      it: "Vor neunzig Jahren war hier nur ein Dorf mit dreihundert Einwohnern. Dann hat ein Werk die Stadt erfunden — und die Stadt hat dem Werk Reichtum gegeben.",
      es: "Hace noventa años aquí solo había un pueblo de trescientos habitantes. Luego una fábrica ha inventado la ciudad — y la ciudad le ha dado riqueza a la fábrica.",
    },
    paragraphs: [
      { it: "Vor über achtzig Jahren hat ein großer Konzern hier, neben einer alten Burg, ein Autowerk geplant. Die ersten Arbeiter haben in einfachen Baracken gewohnt.",
      es: "Hace más de ochenta años un gran grupo empresarial proyectó aquí, junto a un viejo castillo, una fábrica de coches. Los primeros obreros vivieron en barracas sencillas." },
      { it: "Aus dem Werk ist eine ganze Stadt gewachsen. Heute wohnen hier über Hunderttausend Menschen, und viele Familien haben seit drei Generationen mit den Autos zu tun.",
      es: "De la fábrica ha crecido una ciudad entera. Hoy viven aquí más de cien mil personas, y muchas familias llevan tres generaciones ligadas a los coches." },
      { it: "Auch nach der Arbeit dreht sich in Wolfsburg alles ums Auto: Das Museum, die Fußballarena und viele Straßen haben Namen von Modellen. Im Museum können Touristen durch hundert Jahre Autogeschichte laufen.",
      es: "También fuera del trabajo en Wolfsburgo todo gira alrededor del coche: el museo, el estadio de fútbol y muchas calles llevan nombres de modelos. En el museo los turistas pueden recorrer cien años de historia del automóvil." },
      { it: "Eine Stadtführerin, Frau Meyer, sagt: «Meine Großeltern sind für das Werk hierher gekommen. Sie haben die Stadt mitgebaut — Straße für Straße, Haus für Haus.»",
      es: "Una guía de la ciudad, la señora Meyer, dice: «Mis abuelos vinieron aquí por la fábrica. Ellos construyeron la ciudad — calle por calle, casa por casa.»" },
    ],
    words: [
      { it: "das Werk / die Werke", es: "la fábrica, la planta" },
      { it: "der Arbeiter / die Arbeiter", es: "el obrero" },
      { it: "die Baracke / die Baracken", es: "la barraca" },
      { it: "die Generation / die Generationen", es: "la generación" },
      { it: "das Museum / die Museen", es: "el museo" },
      { it: "das Auto / die Autos", es: "el coche" },
    ],
    questions: [
      { q: "¿Dónde han vivido los primeros obreros?", options: ["In einfachen Baracken", "In der alten Burg", "In Hotels", "In Zelten"], answer: 0, why: "«Die ersten Arbeiter haben in einfachen Baracken gewohnt.»" },
      { q: "¿Cuánta gente vive hoy en Wolfsburgo?", options: ["Dreihundert", "Zwanzigtausend", "Über Hunderttausend", "Zwei Millionen"], answer: 2, why: "«Heute wohnen hier über Hunderttausend Menschen, und viele Familien haben seit drei Generationen mit den Autos zu tun.»" },
      { q: "¿Qué tienen en común el museo, el estadio y muchas calles?", options: ["Sie sind alle ganz neu", "Sie haben Namen von Modellen", "Sie gehören dem Kaiser", "Sie sind aus Holz"], answer: 1, why: "«Das Museum, die Fußballarena und viele Straßen haben Namen von Modellen.»" },
      { q: "¿Quién construyó la ciudad según la señora Meyer?", options: ["Der Staat allein", "Architekten aus Berlin", "Touristen aus aller Welt", "Ihre Großeltern und andere Werksfamilien — Straße für Straße, Haus für Haus"], answer: 3, why: "«Sie haben die Stadt mitgebaut — Straße für Straße, Haus für Haus.»" },
    ],
    discuss: [
      { it: "Wovon lebt Ihre Stadt — von einem Werk, vom Tourismus, vom Handel?", es: "¿De qué vive tu ciudad — de una fábrica, del turismo, del comercio?" },
      { it: "Drei Generationen in einer Fabrik: Traum oder Albtraum? Erzählen Sie.", es: "Tres generaciones en una fábrica: ¿sueño o pesadilla? Cuenta." },
    ],
  },

  /* ═══ A2 · 13 — Sport ═══ */
  {
    id: "de-news-a2-13", cat: "sport", level: "A2", place: "Oberhof", minutes: 3,
    title: "Oberhof: ein Dorf voller Wintersportler",
    titleEs: "Oberhof: un pueblo lleno de deportistas de invierno",
    lead: {
      it: "Oberhof liegt hoch im Thüringer Wald. Das kleine Dorf hat etwas Seltenes: Loipen vor der Haustür und Sportler in fast jedem Haus.",
      es: "Oberhof está en lo alto del bosque de Turingia. El pequeño pueblo tiene algo poco común: pistas de esquí ante la puerta y deportistas en casi cada casa.",
    },
    paragraphs: [
      { it: "Vor sechzig Jahren haben Trainer hier ein Sportzentrum gegründet. Sie haben sich die Berge und den Schnee genau angeschaut und dann Loipen, Schanzen und eine Rodelbahn gebaut.",
      es: "Hace sesenta años unos entrenadores fundaron aquí un centro deportivo. Observaron con detalle las montañas y la nieve, y luego construyeron pistas de fondo, trampolines y una pista de trineo." },
      { it: "Heute trainieren im Dorf Biathleten, Skispringer und Rodler. Nach dem Training haben die Sportler zwei Möglichkeiten: Bettruhe oder ein ruhiger Spaziergang durch den Wald.",
      es: "Hoy entrenan en el pueblo biatletas, saltadores de esquí y pilotos de trineo. Después del entrenamiento los deportistas tienen dos opciones: reposo en cama o un paseo tranquilo por el bosque." },
      { it: "Die Talente haben meist als Kinder angefangen. In der Sporthalle haben Sechsjährige ihre ersten Runden auf Skiern gedreht — mit Helmen und großen Augen.",
      es: "Los talentos empezaron casi todos de niños. En el polideportivo los de seis años dieron sus primeras vueltas con esquís — con casco y ojos muy abiertos." },
      { it: "Der Trainer Herr Lehmann sagt: «Wir haben keine Wunder versprochen. Aber wer hier drei Winter durchhält, hat fürs Leben gelernt, weiterzumachen.»",
      es: "El entrenador, el señor Lehmann, dice: «No hemos prometido milagros. Pero quien aguanta aquí tres inviernos, aprende para toda la vida a seguir adelante.»" },
    ],
    words: [
      { it: "das Dorf / die Dörfer", es: "el pueblo" },
      { it: "der Schnee", es: "la nieve" },
      { it: "die Loipe / die Loipen", es: "la pista de esquí de fondo" },
      { it: "der Trainer / die Trainer", es: "el entrenador" },
      { it: "das Talent / die Talente", es: "el talento" },
      { it: "die Schanze / die Schanzen", es: "el trampolín de salto" },
    ],
    questions: [
      { q: "¿Qué han construido los entrenadores después de estudiar las montañas?", options: ["Loipen, Schanzen und eine Rodelbahn", "Ein Schwimmbad", "Ein Fußballstadion", "Ein Kino"], answer: 0, why: "«Sie haben sich die Berge und den Schnee genau angeschaut und dann Loipen, Schanzen und eine Rodelbahn gebaut.»" },
      { q: "¿Quiénes entrenan hoy en el pueblo?", options: ["Nur Kinder", "Nur Touristen", "Nur Einheimische", "Biathleten, Skispringer und Rodler"], answer: 3, why: "«Heute trainieren im Dorf Biathleten, Skispringer und Rodler.»" },
      { q: "¿Cómo han empezado la mayoría de los talentos?", options: ["Mit zwanzig Jahren", "Als Kinder — Sechsjährige drehen ihre ersten Runden", "Nach der Schulzeit", "Im Rentenalter"], answer: 1, why: "«Die Talente haben meist als Kinder angefangen.»" },
      { q: "¿Qué han aprendido para toda la vida quienes aguantan tres inviernos?", options: ["Skispringen", "Schnell zu laufen", "Weiterzumachen", "Kalt zu duschen"], answer: 2, why: "«Wer hier drei Winter durchhält, hat fürs Leben gelernt, weiterzumachen.»" },
    ],
    discuss: [
      { it: "Wintersport oder Sommersport: Was ist besser für junge Leute? Warum?", es: "Deporte de invierno o de verano: ¿cuál es mejor para los jóvenes? ¿Por qué?" },
      { it: "«Weitermachen»: Wann haben Sie einmal nicht aufgegeben?", es: "«Seguir adelante»: ¿cuándo no te rendiste una vez?" },
    ],
  },

  /* ═══ A2 · 14 — Gesellschaft ═══ */
  {
    id: "de-news-a2-14", cat: "societa", level: "A2", place: "Kassel", minutes: 3,
    title: "Kassel: ein Haus für alle Generationen",
    titleEs: "Kassel: una casa para todas las generaciones",
    lead: {
      it: "In Kassel hat ein Verein ein Haus für Jung und Alt eröffnet. Die Idee ist alt — aber der Alltag darin ist neu.",
      es: "En Kassel un club ha abierto una casa para jóvenes y mayores. La idea es vieja — pero el día a día dentro es nuevo.",
    },
    paragraphs: [
      { it: "Im Stadtteil Nord hat ein Verein ein altes Schulgebäude gemietet. Handwerker haben es renoviert, und seit März wohnen hier junge Familien und Senioren unter einem Dach.",
      es: "En el barrio Norte un club ha alquilado un viejo edificio escolar. Los artesanos lo han renovado, y desde marzo viven aquí familias jóvenes y personas mayores bajo un mismo techo." },
      { it: "Die Bewohner haben klare Aufgaben bekommen: Die Senioren helfen den Kindern bei den Hausaufgaben, und die Jugendlichen bringen schwere Einkäufe nach oben. Beim Abendessen kocht jede Woche eine andere Gruppe.",
      es: "Los vecinos han recibido tareas claras: los mayores ayudan a los niños con los deberes, y los jóvenes suben las compras pesadas. En la cena cocina cada semana un grupo distinto." },
      { it: "Viele Senioren haben vorher allein gelebt und selten Besuch bekommen. In dem Haus haben sie jetzt jeden Tag jemanden zum Reden gefunden.",
      es: "Muchos mayores vivían antes solos y rara vez recibían visitas. En la casa ahora encuentran cada día a alguien con quien hablar." },
      { it: "Die Leiterin Frau Vogt sagt: «Wir haben keine Betreuung gekauft, sondern Nachbarschaft gebaut. Die Menschen haben einander kennengelernt — das ist der ganze Trick.»",
      es: "La directora, la señora Vogt, dice: «No hemos comprado asistencia, sino construido vecindad. Las personas se han conocido — ese es todo el truco.»" },
    ],
    words: [
      { it: "der Verein / die Vereine", es: "el club, la asociación" },
      { it: "der Senior / die Senioren", es: "la persona mayor", note: "latinismo más formal que der alte Mensch" },
      { it: "die Hausaufgaben", es: "los deberes" },
      { it: "das Dach / die Dächer", es: "el techo" },
      { it: "die Nachbarschaft", es: "el vecindario" },
      { it: "die Gruppe / die Gruppen", es: "el grupo" },
    ],
    questions: [
      { q: "¿Qué ha alquilado el club en el barrio norte?", options: ["Ein Kino", "Ein altes Schulgebäude", "Eine Fabrik", "Ein Schloss"], answer: 1, why: "«Im Stadtteil Nord hat ein Verein ein altes Schulgebäude gemietet.»" },
      { q: "¿Cómo se reparten las tareas los vecinos?", options: ["Die Senioren helfen bei den Hausaufgaben, und die Jugendlichen bringen schwere Einkäufe nach oben", "Jeder macht, was er will", "Der Verein bezahlt alles", "Die Lehrer machen alles"], answer: 0, why: "«Die Senioren helfen den Kindern bei den Hausaufgaben, und die Jugendlichen bringen schwere Einkäufe nach oben.»" },
      { q: "¿Cómo vivían muchos mayores antes de mudarse?", options: ["In großen Familien", "In Hotels", "Sie haben allein gelebt und selten Besuch bekommen", "In anderen Ländern"], answer: 2, why: "«Viele Senioren haben vorher allein gelebt und selten Besuch bekommen.»" },
      { q: "¿Qué han construido según la directora?", options: ["Ein Krankenhaus", "Eine Schule", "Ein Hotel", "Keine Betreuung gekauft, sondern Nachbarschaft gebaut"], answer: 3, why: "«Wir haben keine Betreuung gekauft, sondern Nachbarschaft gebaut.»" },
    ],
    discuss: [
      { it: "Unter einem Dach mit Familie, Freunden oder Nachbarn: Was ist am besten? Warum?", es: "Bajo un mismo techo con familia, amigos o vecinos: ¿qué es mejor? ¿Por qué?" },
      { it: "Jung hilft alt: Welche Projekte gibt es in Ihrer Stadt?", es: "Jóvenes ayudan a mayores: ¿qué proyectos hay en tu ciudad?" },
    ],
  },

  /* ═══ A2 · 15 — Technologie ═══ */
  {
    id: "de-news-a2-15", cat: "tecnologia", level: "A2", place: "Darmstadt", minutes: 3,
    title: "Darmstadt: die Stadt, die Satelliten steuert",
    titleEs: "Darmstadt: la ciudad que dirige satélites",
    lead: {
      it: "Wenn ein Satellit die Richtung verliert, hilft Darmstadt. In der hessischen Stadt sitzt eine Fernbedienung für den Weltraum.",
      es: "Cuando un satélite pierde el rumbo, Darmstadt ayuda. En la ciudad de Hesse está un mando a distancia para el espacio.",
    },
    paragraphs: [
      { it: "In Darmstadt sitzt ein großes Kontrollzentrum für Satelliten. Die Ingenieure haben hier schon Hunderte Missionen überwacht — vom ersten Signal im All bis zum letzten Funkkontakt.",
      es: "En Darmstadt está un gran centro de control de satélites. Los ingenieros ya han supervisado aquí cientos de misiones — desde la primera señal en el espacio hasta el último contacto de radio." },
      { it: "Der Weg einer Nachricht ist lang: Eine Antenne hat ein Signal vom Weltraum gefangen, dann haben Computer es übersetzt, und am Bildschirm haben die Spezialisten es gelesen.",
      es: "El camino de un mensaje es largo: una antena captó una señal del espacio, luego unos ordenadores la tradujeron, y en la pantalla los especialistas la leyeron." },
      { it: "Darmstadt trägt den offiziellen Titel «Stadt der Wissenschaft». Über dreißig Institute für Forschung haben hier ihre Heimat gefunden, von der Physik bis zur künstlichen Intelligenz.",
      es: "Darmstadt lleva el título oficial de «ciudad de la ciencia». Más de treinta institutos de investigación han encontrado aquí su hogar, desde la física hasta la inteligencia artificial." },
      { it: "Eine Ingenieurin, Frau Rieger, sagt: «Wir haben die Rakete nie gesehen. Aber wir haben jeden Herzschlag unseres Satelliten gehört — Tag und Nacht.»",
      es: "Una ingeniera, la señora Rieger, dice: «Nunca hemos visto el cohete. Pero hemos escuchado cada latido de nuestro satélite — día y noche.»" },
    ],
    words: [
      { it: "der Satellit / die Satelliten", es: "el satélite" },
      { it: "das Kontrollzentrum", es: "el centro de control" },
      { it: "die Antenne / die Antennen", es: "la antena" },
      { it: "das Signal / die Signale", es: "la señal" },
      { it: "das Institut / die Institute", es: "el instituto" },
      { it: "die Rakete / die Raketen", es: "el cohete" },
    ],
    questions: [
      { q: "¿Cuántas misiones han vigilado ya los ingenieros?", options: ["Schon Hunderte", "Nur eine", "Genau zehn", "Keine"], answer: 0, why: "«Die Ingenieure haben hier schon Hunderte Missionen überwacht — vom ersten Signal im All bis zum letzten Funkkontakt.»" },
      { q: "¿Cuál es el camino de un mensaje desde el espacio?", options: ["Computer, dann Antenne, dann Telefon", "Bildschirm, dann Antenne, dann Computer", "Direkt ins Büro", "Antenne, dann Computer, dann Bildschirm"], answer: 3, why: "«Eine Antenne hat ein Signal vom Weltraum gefangen, dann haben Computer es übersetzt, und am Bildschirm haben die Spezialisten es gelesen.»" },
      { q: "¿Cuántos institutos de investigación han encontrado su hogar en Darmstadt?", options: ["Drei", "Über dreißig", "Hundert", "Keine"], answer: 1, why: "«Über dreißig Institute für Forschung haben hier ihre Heimat gefunden, von der Physik bis zur künstlichen Intelligenz.»" },
      { q: "¿Qué ha dicho la ingeniera?", options: ["«Wir fliegen selbst ins All.»", "«Satelliten sind langweilig.»", "«Wir haben die Rakete nie gesehen. Aber wir haben jeden Herzschlag unseres Satelliten gehört.»", "«Wir haben keine Antennen.»"], answer: 2, why: "«Wir haben die Rakete nie gesehen. Aber wir haben jeden Herzschlag unseres Satelliten gehört — Tag und Nacht.»" },
    ],
    discuss: [
      { it: "Welche Raumfahrt-Technik benutzen Sie jeden Tag — Navigation, Wetter-App?", es: "¿Qué tecnología espacial usas a diario — navegación, la app del tiempo?" },
      { it: "Sollte man mehr Geld für den Weltraum ausgeben oder für die Erde? Warum?", es: "¿Habría que gastar más en el espacio o en la Tierra? ¿Por qué?" },
    ],
  },
];
