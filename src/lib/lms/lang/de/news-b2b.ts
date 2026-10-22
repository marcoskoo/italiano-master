/* ── DE · Nachrichten B2, Teil B (v9.39) ──────────────────────────────
   Fortsetzung von lang/de/news-b.ts: ids de-news-b2-04 … de-news-b2-15
   (B2: 3 → 15 Notizen). Hochdeutsch, Methode VOA Learning English: 4-5
   Absätze ≈ 255-330 Wörter, Konjunktiv II + Passiv + Register, Zitat
   einer lokalen Fachstimme, Ausblick am Ende. Felder `.it` = Deutsch,
   `.es` = Spanisch. */

import type { NewsItem } from "../../news";

export const DE_NEWS_B2B: NewsItem[] = [

  /* ═══ B2 · 4 — Technologie ═══ */
  {
    id: "de-news-b2-04", cat: "tecnologia", level: "B2", place: "Jena", minutes: 4,
    title: "Das Labor, in dem Licht gebogen wird",
    titleEs: "El laboratorio donde se dobla la luz",
    lead: {
      it: "In Jena wird seit Generationen Glas geschliffen. Jetzt zerlegen Forscher Licht in Pulse, die kürzer sind als jede Vorstellungskraft — und daraus entstehen Werkzeuge für Krankenhäuser und Fabriken.",
      es: "En Jena se pule cristal desde hace generaciones. Ahora los investigadores descomponen la luz en pulsos más cortos que cualquier imaginación — y de ellos nacen herramientas para hospitales y fábricas.",
    },
    paragraphs: [
      { it: "In Jena, einer mittelgroßen Stadt an der Saale, wird Optik nicht nur erfunden, sondern von Kindesbeinen an gelernt. Seit dem neunzehnten Jahrhundert werden hier Mikroskope gebaut, Fernrohre geschliffen und jede Linse geprüft, bis kein Fehler mehr messbar ist. Ohne diese Tradition wäre die Stadt heute eine ganz gewöhnliche Universitätsstadt; stattdessen werden ihre Apparate in alle Welt geliefert, von der Augenklinik bis zum Weltraumteleskop.",
      es: "En Jena, una ciudad mediana junto al Saale, la óptica no se inventa desde hace generaciones: se aprende desde la infancia. Desde el siglo diecinueve se construyen aquí microscopios, se pulen telescopios y se comprueba cada lente hasta que ya no se puede medir ningún error. Sin esa tradición, la ciudad sería hoy una universitaria del todo corriente; en cambio, sus aparatos se entregan a todo el mundo, de la clínica oftalmológica al telescopio espacial." },
      { it: "Im neuen Laborgebäude an der Universität wird seit diesem Frühjahr an noch kürzeren Lichtpulsen geforscht. Ein einzelner Puls dauert weniger als eine millionstel Sekunde; würde man ihn auf eine volle Sekunde strecken, entspräche das einem einzigen Herzschlag auf dreißig Jahre. Mit solchen Pulsen ist es möglich, Metallplatten zu durchtrennen, ohne dass sie heiß werden: Das Material verdampft, bevor die Wärme überhaupt entstehen kann.",
      es: "En el nuevo edificio de laboratorios de la universidad, desde esta primavera se investiga con pulsos de luz aún más cortos. Un solo pulso dura menos de una millonésima de segundo; si se lo estirara hasta un segundo entero, equivaldría a un único latido de corazón en treinta años. Con tales pulsos es posible cortar placas metálicas sin que se calienten: el material se evapora antes de que el calor pueda siquiera surgir." },
      { it: "Die Technik klingt nach Science-Fiction, ist aber längst Alltag. In Augenkliniken werden mit Ultrakurzlasern Hornhautschichten abgetragen, tausendfach pro Woche; in Werkstätten können Löcher gebohrt werden, die dünner sind als ein menschliches Haar. «Frustration kennen wir hier nicht», sagt die Physikerin Dr. Regina Vollmer mit einem Lächeln. «Aber Geduld wird bei uns täglich trainiert.»",
      es: "La técnica suena a ciencia ficción, pero es desde hace tiempo vida cotidiana. En clínicas oculares se retiran capas de córnea con láseres ultracortos, miles de veces por semana; en talleres pueden perforarse agujeros más finos que un pelo humano. «De frustración, aquí no sabemos nada», dice la física Dra. Regina Vollmer con una sonrisa. «Pero la paciencia se entrena con nosotros a diario.»" },
      { it: "Geld und Köpfe kommen aus aller Welt. Studierende aus vier Kontinenten wurden in diesem Jahr aufgenommen, und ein Drittel der Laborplätze wird von Firmen mitfinanziert, die ihre Neuentwicklungen hier prüfen dürfen. Manchmal, berichtet Frau Vollmer, sitzen Doktoranden und Meister aus der Industrie am selben Tisch — zwei Welten, die sich früher kaum etwas zu sagen gehabt hätten.",
      es: "El dinero y las cabezas llegan de todo el mundo. Este año fueron admitidos estudiantes de cuatro continentes, y un tercio de los puestos de laboratorio está cofinanciado por empresas que pueden probar aquí sus nuevos desarrollos. A veces, cuenta la señora Vollmer, doctorandos y maestros de la industria se sientan a la misma mesa — dos mundos que antes apenas tendrían algo que decirse." },
      { it: "Der nächste Traum heißt Quantenoptik: Licht, das eines Tages rechnen könnte. Ob daraus wirklich Computer werden, wagt in Jena niemand zu versprechen. Aber gebaut wird bereits daran — selbstverständlich bei gedämpfter Beleuchtung, denn zu viel Streulicht könnte das empfindliche Messgerät stören.",
      es: "El próximo sueño se llama óptica cuántica: luz que un día podría calcular. Que de ahí salgan de verdad ordenadores, en Jena nadie se atreve a prometerlo. Pero ya se trabaja en ello — por supuesto con luz atenuada, porque demasiada luz difusa podría perturbar el sensible instrumento de medición." },
    ],
    words: [
      { it: "die Linse", es: "la lente", note: "Linsen también significa «lentejas»" },
      { it: "der Puls", es: "el pulso" },
      { it: "durchtrennen", es: "cortar, seccionar" },
      { it: "die Geduld", es: "la paciencia", note: "adjetivo correspondiente: geduldig" },
      { it: "die Beleuchtung", es: "la iluminación" },
      { it: "das Messgerät", es: "el instrumento de medición" },
    ],
    questions: [
      { q: "¿Desde cuándo se construyen microscopios en Jena?", options: ["Seit dem neunzehnten Jahrhundert", "Seit zehn Jahren", "Seit dem letzten Winter", "Erst seit diesem Frühjahr"], answer: 0, why: "Porque el texto dice: «Seit dem neunzehnten Jahrhundert werden hier Mikroskope gebaut, Fernrohre geschliffen und jede Linse geprüft»" },
      { q: "¿Cuánto dura un pulso de luz en el nuevo laboratorio?", options: ["Mehr als eine Sekunde", "Weniger als eine millionstel Sekunde", "Genauso lang wie ein Herzschlag", "Eine halbe Stunde"], answer: 1, why: "El texto dice: «Ein einzelner Puls dauert weniger als eine millionstel Sekunde»" },
      { q: "¿Qué ventaja tiene cortar metal con pulsos ultracortos?", options: ["Das Metall wird dabei billiger", "Die Löcher sind immer rund", "Das Material verdampft, bevor die Wärme entstehen kann", "Man braucht kein Licht mehr"], answer: 2, why: "Porque el texto explica: «Das Material verdampft, bevor die Wärme überhaupt entstehen kann»" },
      { q: "¿Qué sugiere la frase sobre «dos mundos» que antes apenas tendrían algo que decirse?", options: ["Dass die Firmen alles bezahlen", "Dass die Doktoranden schweigen müssen", "Dass die Industrie skeptisch bleibt", "Dass Universität und Industrie früher kaum in Kontakt kamen"], answer: 3, why: "La cita habla de «zwei Welten, die sich früher kaum etwas zu sagen gehabt hätten» — es decir, dos grupos que antes casi no se comunicaban" },
    ],
    discuss: [
      { it: "Wo begegnen Ihnen Laser im Alltag — oft, ohne dass Sie es bemerken? Sammeln Sie Beispiele.", es: "¿Dónde te encuentras láseres en la vida diaria — a menudo sin notarlo? Reúne ejemplos." },
      { it: "Universität und Industrie am selben Tisch: sinnvoll oder riskant? Begründen Sie Ihre Meinung.", es: "Universidad e industria en la misma mesa: ¿sensato o arriesgado? Justifica tu opinión." },
    ],
  },

  /* ═══ B2 · 5 — Umwelt ═══ */
  {
    id: "de-news-b2-05", cat: "ambiente", level: "B2", place: "Kiel", minutes: 4,
    title: "Kiel pflanzt Wiesen auf dem Grund der Ostsee",
    titleEs: "Kiel planta praderas en el fondo del Báltico",
    lead: {
      it: "Vor der Küste von Kiel verschwanden jahrelang ganze Unterwasserwiesen. Taucher pflanzen jetzt Schösslinge von Hand zurück — eine Geduldsarbeit mit Wirkung für das Klima.",
      es: "Frente a la costa de Kiel desaparecieron durante años praderas submarinas enteras. Buceadores replantan ahora brotes a mano — un trabajo de paciencia con efectos sobre el clima.",
    },
    paragraphs: [
      { it: "Vor der Küste von Kiel liegt eine Landschaft, die fast niemand kennt: Seegraswiesen, kilometerweit auf dem Grund der Ostsee. Schwimmer sehen nur die Oberfläche; Taucher dagegen kennen die grünen Felder, in denen Jungfische aufwachsen und Krabben Schutz suchen. Kaum ein Urlauber ahnt, dass unter seinen Füßen eine Wiese wächst, die älter ist als die Stadt selbst.",
      es: "Frente a la costa de Kiel se extiende un paisaje que casi nadie conoce: praderas de hierba marina, kilómetros sobre el fondo del Báltico. Los bañistas solo ven la superficie; los buceadores, en cambio, conocen los campos verdes donde crecen los peces jóvenes y buscan refugio los cangrejos. Casi ningún veraneante sospecha que bajo sus pies crece una pradera más antigua que la propia ciudad." },
      { it: "Was hier wächst, ist wichtiger, als es aussieht. Seegras speichert Kohlenstoff in seinem Wurzelwerk, oft über Jahrhunderte hinweg, und der Boden darunter bleibt dunkel und ruhig. Würden die Wiesen verschwinden, würde die Ostsee nicht nur einen Kindergarten für Jungfische verlieren, sondern auch einen natürlichen Speicher für Kohlenstoff. Das Wasser würde trüber, weil das Sediment wieder aufgewirbelt werden könnte.",
      es: "Lo que aquí crece es más importante de lo que parece. La hierba marina almacena carbono en su red de raíces, a menudo durante siglos, y el suelo debajo permanece oscuro y tranquilo. Si las praderas desaparecieran, el Báltico no solo perdería un vivero para peces jóvenes, sino también un almacén natural de carbono. El agua se volvería más turbia, porque el sedimento podría volver a agitarse." },
      { it: "In den vergangenen Jahrzehnten sind große Teile der Wiesen verloren gegangen: Das Wasser war zu nährstoffreich, Boote zogen Anker durch die Felder, und niemand fühlte sich zuständig. Seit drei Jahren wird in Kiel deshalb neu angepflanzt. Taucher entnehmen Schösslinge aus gesunden Beständen und setzen sie von Hand in den Meeresboden — Arbeit, die nur bei gutem Wetter geleistet werden kann.",
      es: "En las últimas décadas se perdieron grandes partes de las praderas: el agua tenía demasiados nutrientes, los barcos arrastraban sus anclas por los campos y nadie se sentía responsable. Por eso desde hace tres años se replanta en Kiel. Buceadores extraen brotes de poblaciones sanas y los plantan a mano en el fondo marino — un trabajo que solo puede hacerse con buen tiempo." },
      { it: "Die Bilanz fällt vorsichtig optimistisch aus. Rund vier von fünf gepflanzten Schösslingen wachsen an, und auf den ersten Probeflächen wurden bereits junge Triebe gezählt, die von allein gekommen sind. «Ein einzelnes Blatt sieht so zerbrechlich aus wie Papier», sagt die Meeresbiologin Katja Ostermann. «Aber eine ganze Wiese kann Wellen brechen. Wenn wir Geduld hätten, müssten wir weniger pflanzen — doch die Zeit drängt.»",
      es: "El balance es prudentemente optimista. Alrededor de cuatro de cada cinco brotes plantados arraigan, y en las primeras parcelas de prueba ya se contaron brotes jóvenes que habían llegado solos. «Una hoja sola parece frágil como el papel», dice la bióloga marina Katja Ostermann. «Pero una pradera entera puede romper olas. Si tuviéramos paciencia, tendríamos que plantar menos — pero el tiempo apremia.»" },
      { it: "Bis eine Wiese wieder so dicht ist wie einst, werden Jahrzehnte vergehen. Doch die Arbeit in Kiel zeigt, dass sich der Aufwand lohnt: Sichtungen von Seehunden und Seevögeln nehmen zu, und die Fischer berichten von mehr Jungfischen. Wer die Wiesen mit eigenen Augen sehen möchte, kann an einer Bootstour teilnehmen; angeboten werden sie in den Sommermonaten, bei gutem Wetter auch am Abend um neunzehn Uhr.",
      es: "Hasta que una pradera vuelva a ser tan densa como antaño pasarán décadas. Pero el trabajo de Kiel muestra que el esfuerzo vale la pena: aumentan los avistamientos de focas y aves marinas, y los pescadores hablan de más peces jóvenes. Quien quiera ver las praderas con sus propios ojos puede participar en una excursión en barco; se ofrecen en los meses de verano y, con buen tiempo, también por la tarde a las diecinueve." },
    ],
    words: [
      { it: "das Seegras", es: "la hierba marina" },
      { it: "die Wiese", es: "la pradera" },
      { it: "der Grund", es: "el fondo", note: "también significa «motivo» y «suelo»; aquí, el fondo del mar" },
      { it: "die Wellen", es: "las olas" },
      { it: "zerbrechlich", es: "frágil" },
      { it: "entnehmen", es: "extraer, sacar" },
    ],
    questions: [
      { q: "¿Qué encuentran los buceadores frente a la costa de Kiel?", options: ["Eine versunkene Stadt", "Seegraswiesen, in denen Jungfische aufwachsen und Krabben Schutz suchen", "Alte Wracks aus dem Krieg", "Korallen wie in der Karibik"], answer: 1, why: "Porque el texto dice: «Taucher dagegen kennen die grünen Felder, in denen Jungfische aufwachsen und Krabben Schutz suchen»" },
      { q: "¿Qué pasaría si desaparecieran las praderas?", options: ["Nichts Besonderes", "Das Wasser würde klarer", "Die Ostsee würde einen Kindergarten für Jungfische und einen Speicher für Kohlenstoff verlieren", "Die Fischer hätten mehr Arbeit"], answer: 2, why: "El texto dice: «Würden die Wiesen verschwinden, würde die Ostsee nicht nur einen Kindergarten für Jungfische verlieren, sondern auch einen natürlichen Speicher für Kohlenstoff»" },
      { q: "¿Por qué se perdió gran parte de las praderas en las últimas décadas?", options: ["Weil die Taucher zu wenig pflanzten", "Weil die Fischer die Blätter verkauften", "Weil die Stadt Häuser baute", "Weil das Wasser zu nährstoffreich war und Boote ihre Anker durch die Felder zogen"], answer: 3, why: "Según el texto: «Das Wasser war zu nährstoffreich, Boote zogen Anker durch die Felder, und niemand fühlte sich zuständig»" },
      { q: "¿Qué quiere decir Ostermann con «si tuviéramos paciencia, tendríamos que plantar menos»?", options: ["Dass die Wiesen sich von allein ausbreiten würden, wenn man ihnen Zeit ließe", "Dass ihre Taucher zu ungeduldig sind", "Dass Pflanzen keine Arbeit ist", "Dass es zu wenige Schösslinge gibt"], answer: 0, why: "Lo sugiere la cita «Wenn wir Geduld hätten, müssten wir weniger pflanzen — doch die Zeit drängt»" },
    ],
    discuss: [
      { it: "Was könnten Ihre Stadt und die Küste voneinander lernen? Denken Sie an Wasser, Grün und Geduld.", es: "¿Qué podrían aprender tu ciudad y la costa una de otra? Piensa en agua, zonas verdes y paciencia." },
      { it: "Sollte man zerbrechliche Naturorte für Touristen öffnen oder schließen? Diskutieren Sie.", es: "¿Conviene abrir parajes naturales frágiles a los turistas o cerrarlos? Discútelo." },
    ],
  },

  /* ═══ B2 · 6 — Gesundheit ═══ */
  {
    id: "de-news-b2-06", cat: "salute", level: "B2", place: "Tübingen", minutes: 4,
    title: "Der Darm, der mitredet",
    titleEs: "El intestino que opina",
    lead: {
      it: "In Tübingen lagern Tausende gefrorene Proben, die eine ungewöhnliche Frage stellen: Spricht der Darm mit dem Gehirn? Eine Ernährungsstudie liefert erste Antworten — und einen bescheidenen Rat.",
      es: "En Tubinga se almacenan miles de muestras congeladas que plantean una pregunta insólita: ¿habla el intestino con el cerebro? Un estudio nutricional ofrece primeras respuestas — y un consejo modesto.",
    },
    paragraphs: [
      { it: "In einem Kellerlabor an der Universität Tübingen lagern Tausende Proben in großen Gefrierfächern, beschriftet mit Nummern, die nur wenige Menschen deuten können. Was hier aufbewahrt wird, klingt unappetitlich, ist für die Forschung jedoch Gold wert: Stuhlproben von Freiwilligen aus ganz Deutschland, die sich einer ungewöhnlichen Diät unterzogen haben.",
      es: "En un laboratorio de sótano de la Universidad de Tubinga se almacenan miles de muestras en grandes arcones congeladores, rotuladas con números que solo unos pocos saben interpretar. Lo que allí se guarda suena poco apetitoso, pero para la investigación vale oro: muestras de heces de voluntarios de toda Alemania que se sometieron a una dieta inusual." },
      { it: "Hinter den Gefrierfächern steht eine Hypothese, die noch vor zwanzig Jahren belächelt worden wäre: Der Darm spricht mit dem Gehirn. Billionen von Bakterien leben im menschlichen Verdauungstrakt, und sie produzieren Botenstoffe, die über Nervenbahnen bis ins Gehirn wandern. Ob und wie diese Stoffe Stimmung, Schlaf und sogar Denkleistung beeinflussen, wird in Tübingen jetzt systematisch untersucht.",
      es: "Tras los congeladores hay una hipótesis que hace veinte años habría provocado sonrisas: el intestino habla con el cerebro. Billones de bacterias viven en el aparato digestivo humano y producen mensajeros que viajan por vías nerviosas hasta el cerebro. Si estas sustancias influyen en el ánimo, el sueño e incluso el rendimiento intelectual, y cómo, se investiga ahora en Tubinga de forma sistemática." },
      { it: "Für die Studie wurden zweihundert Freiwillige in zwei Gruppen geteilt. Die eine Hälfte ernährte sich acht Wochen lang mediterran, mit viel Gemüse, Obst und fermentierten Lebensmitteln; die andere behielt ihre gewohnte Kost bei. Vorher, nach vier und nach acht Wochen wurden Proben entnommen und anonym ausgewertet. Das Ergebnis: In der Ernährungsgruppe veränderte sich die Zusammensetzung der Darmbakterien messbar, und viele Teilnehmer berichteten von besserer Stimmung und ruhigerem Schlaf.",
      es: "Para el estudio, doscientos voluntarios fueron divididos en dos grupos. La mitad se alimentó durante ocho semanas al estilo mediterráneo, con mucha verdura, fruta y alimentos fermentados; la otra mantuvo su dieta habitual. Antes, a las cuatro y a las ocho semanas se tomaron muestras y se evaluaron de forma anónima. El resultado: en el grupo de la dieta cambió de forma medible la composición de las bacterias intestinales, y muchos participantes hablaron de mejor ánimo y sueño más tranquilo." },
      { it: "«Der Darm ist kein Chemiekochtopf, sondern ein hochkomplexes Organ», sagt der Gastroenterologe Prof. Dr. Jonas Feldmann. «Wer ihn nur als Verdauungsmaschine behandelt, verschenkt die Hälfte der Geschichte.» Zugleich warnt er vor Wunderkurversprechen: Aus Beobachtungen könne man keine Therapien ableiten; dafür seien kontrollierte Studien nötig, und die dauerten Jahre.",
      es: "«El intestino no es una olla de laboratorio, sino un órgano altamente complejo», dice el gastroenterólogo Prof. Dr. Jonas Feldmann. «Quien lo trata solo como máquina digestiva, desperdicia la mitad de la historia.» Al mismo tiempo advierte contra promesas de curas milagrosas: de observaciones no pueden deducirse terapias; para eso harían falta estudios controlados, y esos duran años." },
      { it: "Die Forscher hoffen, dass aus der Untersuchung einmal Empfehlungen für die Praxis entstehen könnten — etwa für Patienten mit Reizdarm oder für Menschen, die unter ständiger Erschöpfung leiden. Bis es so weit ist, gilt in Tübingen ein schlichter Rat, den jeder befolgen kann: Wer seinem Darm Gutes tun will, sollte mehr Gemüse essen und weniger Zucker. Die Bakterien würden es ihm danken — falls sie reden könnten.",
      es: "Los investigadores esperan que del estudio surjan algún día recomendaciones para la práctica — por ejemplo para pacientes con colon irritable o para personas que sufren agotamiento constante. Hasta que llegue ese momento, en Tubinga vale un consejo sencillo que cualquiera puede seguir: quien quiera hacerle un favor a su intestino debería comer más verdura y menos azúcar. Las bacterias se lo agradecerían — si pudieran hablar." },
    ],
    words: [
      { it: "die Proben", es: "las muestras", note: "distinto de «probieren» (probar)" },
      { it: "der Darm", es: "el intestino" },
      { it: "die Bakterien", es: "las bacterias" },
      { it: "die Stimmung", es: "el ánimo, el estado de ánimo" },
      { it: "die Erschöpfung", es: "el agotamiento" },
      { it: "leiden (unter)", es: "sufrir (de)", note: "con dativo: unter dem Lärm leiden" },
    ],
    questions: [
      { q: "¿Qué se guarda en los congeladores del sótano de Tubinga?", options: ["Alte Bücher", "Tiefgekühltes Essen für die Kantine", "Stuhlproben von Freiwilligen aus ganz Deutschland", "Wasserproben aus dem Fluss"], answer: 2, why: "Porque el texto dice: «Stuhlproben von Freiwilligen aus ganz Deutschland, die sich einer ungewöhnlichen Diät unterzogen haben»" },
      { q: "¿Qué hipótesis se investiga allí?", options: ["Dass Schlaf schadet", "Dass Gemüse zu teuer ist", "Dass Bakterien bald aussterben", "Dass der Darm mit dem Gehirn spricht"], answer: 3, why: "El texto lo formula así: «Der Darm spricht mit dem Gehirn.»" },
      { q: "¿Cómo se dividieron a los doscientos voluntarios?", options: ["In zwei Gruppen: eine ernährte sich mediterran, die andere behielt ihre gewohnte Kost bei", "In Altersgruppen", "Nach Größe sortiert", "Männer und Frauen getrennt"], answer: 0, why: "Según el texto: «Die eine Hälfte ernährte sich acht Wochen lang mediterran, mit viel Gemüse, Obst und fermentierten Lebensmitteln»" },
      { q: "¿Qué advierte el gastroenterólogo Feldmann?", options: ["Dass alle Patienten Medikamente brauchen", "Dass man aus Beobachtungen keine Therapien ableiten kann — dafür seien kontrollierte Studien nötig", "Dass die Studie erfunden wurde", "Dass Gemüse besser schmeckt"], answer: 1, why: "Porque el texto dice: «Aus Beobachtungen könne man keine Therapien ableiten; dafür seien kontrollierte Studien nötig, und die dauerten Jahre.»" },
    ],
    discuss: [
      { it: "«Der Darm spricht mit dem Gehirn»: Klingt das für Sie nach Wissenschaft oder nach Werbung? Warum?", es: "«El intestino habla con el cerebro»: ¿te suena a ciencia o a publicidad? ¿Por qué?" },
      { it: "Würden Sie acht Wochen lang Ihre Ernährung für eine Studie umstellen? Was würde Ihnen fehlen?", es: "¿Cambiarías tu dieta durante ocho semanas por un estudio? ¿Qué te faltaría?" },
    ],
  },

  /* ═══ B2 · 7 — Geschichte ═══ */
  {
    id: "de-news-b2-07", cat: "storia", level: "B2", place: "Augsburg", minutes: 4,
    title: "Die Miete, die seit fünfhundert Jahren nicht steigt",
    titleEs: "El alquiler que no sube desde hace quinientos años",
    lead: {
      it: "In Augsburg zahlen Mieter der Fuggerei seit 1521 eine symbolische Miete: einen Gulden im Jahr und drei Gebete am Tag. Die älteste Sozialsiedlung der Welt funktioniert bis heute — und wird jetzt kopiert.",
      es: "En Augsburgo los inquilinos de la Fuggerei pagan desde 1521 un alquiler simbólico: un florín al año y tres oraciones al día. La colonia social más antigua del mundo sigue funcionando — y ahora se copia.",
    },
    paragraphs: [
      { it: "Hinter einer grünen Holztür in der Augsburger Altstadt beginnt eine eigene Welt: drei Gassen, zwei Tore, siebenundsechzig Häuser. Hier zahlen Mieter seit über fünfhundert Jahren dieselbe Jahresmiete — umgerechnet weniger als einen Euro. Klingt das nach Märchen? Es ist die älteste bestehende Sozialsiedlung der Welt, und sie wird bis heute nach den Regeln ihres Gründers bewohnt.",
      es: "Tras una puerta de madera verde en el casco antiguo de Augsburgo empieza un mundo aparte: tres callejones, dos portones, sesenta y siete casas. Aquí los inquilinos pagan desde hace más de quinientos años el mismo alquiler anual — convertido, menos de un euro. ¿Suena a cuento? Es la colonia social más antigua del mundo todavía en pie, y sigue habitada según las reglas de su fundador." },
      { it: "Im Jahr 1521 wurde die Siedlung von Jakob Fugger gestiftet, dem reichsten Kaufmann seiner Zeit. Die Bedingung: Bedürftige Augsburger Handwerker sollten eine Wohnung erhalten, die sie sich sonst nicht leisten könnten; als Gegenleistung verlangte der Stifter drei Gebete am Tag — für ihn und sein Seelenheil — sowie eine symbolische Miete von einem Rheinischen Gulden. Wer die Regeln brach, verlor sein Recht auf die Wohnung.",
      es: "En 1521 la colonia fue fundada por Jakob Fugger, el mercader más rico de su tiempo. La condición: artesanos augsburgueses necesitados recibirían una vivienda que de otro modo no podrían pagar; a cambio, el fundador exigía tres oraciones al día — por él y su salvación — además de un alquiler simbólico de un florín renano. Quien incumplía las reglas perdía su derecho a la vivienda." },
      { it: "Die Geschichte des Viertels wäre fast zu Ende gewesen: Im Zweiten Weltkrieg wurde ein Großteil der Häuser zerstört, und die Wohnungen standen leer. Doch mit Spenden aus aller Welt wurde die Fuggerei Stein für Stein wieder aufgebaut. Heute wohnen hier wieder rund hundertfünfzig Menschen, und die Warteliste ist lang. Finanziert wird der Unterhalt längst nicht mehr nur durch Mieten: Ein eigener Wald liefert Holz, und der Verkauf davon deckt die Reparaturen.",
      es: "La historia del barrio estuvo a punto de acabar: en la Segunda Guerra Mundial fue destruida gran parte de las casas y las viviendas quedaron vacías. Pero con donaciones de todo el mundo la Fuggerei fue reconstruida piedra a piedra. Hoy vuelven a vivir aquí unas ciento cincuenta personas, y la lista de espera es larga. El mantenimiento ya no se financia solo con los alquileres: un bosque propio aporta madera, y su venta cubre las reparaciones." },
      { it: "Wer heute durch das Tor geht, betritt eine Insel aus einer anderen Zeit: Blumenkästen, Hausglocken, eine eigene kleine Kirche. «Manchmal würde ich meinen, die Uhr sei stehengeblieben», sagt die Historikerin Dr. Margarete Schlosser, die das Museum der Siedlung leitet. «Aber täuschen Sie sich nicht: Hinter den alten Mauern wird modern verwaltet, mit Stiftungsrecht und Fördervereinen.»",
      es: "Quien hoy cruza el portón entra en una isla de otro tiempo: jardineras, campanillas de puerta, una pequeña iglesia propia. «A veces diría que el reloj se ha parado», dice la historiadora Dra. Margarete Schlosser, que dirige el museo de la colonia. «Pero no se engañe: tras los muros viejos se administra de forma muy moderna, con derecho fundacional y asociaciones de apoyo.»" },
      { it: "Der Erfolg wird inzwischen weit über Augsburg hinaus diskutiert. Städte aus mehreren Ländern haben angefragt, wie das Modell kopiert werden könnte, und in Bayern entstehen erste Nachbauten. Ob die Miete dabei symbolisch bleibt oder zum Geschäft wird, hängt von den Stiftern ab. In Augsburg gilt weiter der alte Vertrag, und die älteste Mieterin des Viertels, vierundneunzig, zahlt dieselbe Miete wie ihre Vorgängerin vor fünfhundert Jahren: einen Gulden, umgerechnet achtundachtzig Cent, und drei Gebete.",
      es: "El éxito se comenta hoy mucho más allá de Augsburgo. Ciudades de varios países han preguntado cómo podría copiarse el modelo, y en Baviera surgen las primeras réplicas. Que el alquiler siga siendo simbólico o se convierta en negocio depende de los fundadores. En Augsburgo sigue vigente el viejo contrato, y la inquilina más anciana del barrio, de noventa y cuatro años, paga el mismo alquiler que su antecesora hace quinientos años: un florín, ochenta y ocho céntimos, y tres oraciones." },
    ],
    words: [
      { it: "die Siedlung", es: "la colonia, el asentamiento" },
      { it: "der Kaufmann", es: "el mercader", note: "plural irregular: die Kaufleute" },
      { it: "die Miete", es: "el alquiler" },
      { it: "der Stifter", es: "el fundador, el benefactor" },
      { it: "die Spenden", es: "las donaciones" },
      { it: "umgerechnet", es: "equivaliendo (en otra moneda)" },
    ],
    questions: [
      { q: "¿Cuánto pagan al año los inquilinos de la Fuggerei?", options: ["Einen ganzen Monatslohn", "Gar nichts", "Hundert Euro", "Umgerechnet weniger als einen Euro — einen Rheinischen Gulden"], answer: 3, why: "Porque el texto dice: «Hier zahlen Mieter seit über fünfhundert Jahren dieselbe Jahresmiete — umgerechnet weniger als einen Euro.»" },
      { q: "¿Quién fundó la colonia y con qué condición?", options: ["Jakob Fugger, der reichste Kaufmann seiner Zeit — drei Gebete am Tag und eine symbolische Miete als Gegenleistung", "Der Kaiser — hohe Steuern", "Die Stadt Augsburg — keine Bedingungen", "Ein Handwerkerverein — Mitgliedsbeitrag"], answer: 0, why: "Según el texto: «Im Jahr 1521 wurde die Siedlung von Jakob Fugger gestiftet, dem reichsten Kaufmann seiner Zeit.»" },
      { q: "¿Cómo se financian hoy las reparaciones?", options: ["Durch hohe Mieten", "Ein eigener Wald liefert Holz, und der Verkauf davon deckt die Reparaturen", "Durch staatliche Zuschüsse", "Durch Vermietung an Touristen"], answer: 1, why: "El texto dice: «Ein eigener Wald liefert Holz, und der Verkauf davon deckt die Reparaturen.»" },
      { q: "¿Qué quiere decir Schlosser con que tras los muros viejos «se administra de forma moderna»?", options: ["Dass die Mieter Internet brauchen", "Dass das Museum Geld verliert", "Dass hinter der historischen Fassade zeitgemäß gewirtschaftet wird — mit Stiftungsrecht und Fördervereinen", "Dass die Uhren kaputt sind"], answer: 2, why: "Lo explica la cita: «Hinter den alten Mauern wird modern verwaltet, mit Stiftungsrecht und Fördervereinen.»" },
    ],
    discuss: [
      { it: "Könnten Sie sich eine «Fuggerei» in Ihrer Stadt vorstellen? Wer sollte sie stiften, und mit welchen Regeln?", es: "¿Te imaginas una «Fuggerei» en tu ciudad? ¿Quién debería fundarla y con qué reglas?" },
      { it: "Ist eine symbolische Miete fair oder unrealistisch? Diskutieren Sie beide Seiten.", es: "¿Es justo o irreal un alquiler simbólico? Discute ambos lados." },
    ],
  },

  /* ═══ B2 · 8 — Sport ═══ */
  {
    id: "de-news-b2-08", cat: "sport", level: "B2", place: "Winterberg", minutes: 4,
    title: "Die Bobbahn, die den Winter neu erfindet",
    titleEs: "La pista de bobsleigh que reinventa el invierno",
    lead: {
      it: "Die Bobbahn in Winterberg ist kurz, tückisch und über hundert Jahre alt. Weil der Winter unsicherer wird, sucht der Ort neue Wege — und findet sie im Sommer, im Simulator und im Kopf junger Pilotinnen.",
      es: "La pista de bobsleigh de Winterberg es corta, traicionera y tiene más de cien años. Como el invierno es cada vez más incierto, el lugar busca salidas nuevas — y las encuentra en el verano, en el simulador y en la cabeza de las jóvenes pilotos.",
    },
    paragraphs: [
      { it: "Im Sauerland, hoch auf einem Bergkamm, liegt eine der kürzesten Bobbahnen der Welt: Die Strecke in Winterberg misst keine tausendfünfhundert Meter, gilt bei Piloten aber als eine der tückischsten. Wer die ersten vier Kurven unbeschadet übersteht, kann vorne mitfahren — wer zögert, verliert zwei Zehntel, und im Bobsport sind zwei Zehntel eine Ewigkeit.",
      es: "En el Sauerland, en lo alto de una cresta, se encuentra una de las pistas de bobsleigh más cortas del mundo: la de Winterberg no llega a los mil quinientos metros, pero para los pilotos es de las más traicioneras. Quien supera sin daño las cuatro primeras curvas puede ir delante; quien duda pierde dos décimas, y en bobsleigh dos décimas son una eternidad." },
      { it: "Die Bobbahn ist über hundert Jahre alt und wurde in dieser Zeit mehrfach neu gebaut, zuletzt komplett in Beton gegossen und mit Kühlrohren durchzogen. Früher lief die Saison von November bis März; heute wird sie kürzer, weil der natürliche Winter unsicher geworden ist. Wäre die Bahn noch auf Natureis angewiesen, könnte sie kaum noch geöffnet werden.",
      es: "La pista de bobsleigh tiene más de cien años y en ese tiempo fue reconstruida varias veces, la última vaciada por completo en hormigón y recorrida por tubos de refrigeración. Antes la temporada iba de noviembre a marzo; hoy se acorta, porque el invierno natural se ha vuelto inseguro. Si la pista dependiera aún del hielo natural, apenas podría abrirse." },
      { it: "Die Antwort auf den kurzen Winter heißt Vielseitigkeit. Im Sommer rollen Bobs mit Rädern dieselben Kurven hinunter, Mountainbiker nutzen den Berg, und seit zwei Jahren steht ein Simulator neben der Bahn. Darin können Nachwuchspiloten Hunderte Fahrten üben, ohne dass ein Risiko eingegangen werden muss. Die Zeiten einzelner Abschnitte werden dabei genauso gemessen wie auf dem echten Eis, und die Daten zeigen, wo eine Hundertstelsekunde verloren wird.",
      es: "La respuesta al invierno corto se llama versatilidad. En verano descienden bobs con ruedas por las mismas curvas, los ciclistas de montaña usan la montaña y desde hace dos años hay un simulador junto a la pista. En él, los jóvenes pilotos pueden ensayar cientos de descensos sin que haya que asumir riesgo alguno. Los tiempos de cada tramo se miden igual que en el hielo de verdad, y los datos muestran dónde se pierde una centésima de segundo." },
      { it: "«Mut heißt nicht, keine Angst zu kennen», sagt die Trainerin Simone Gerlach, die selbst jahrelang als Pilotin unterwegs war. «Mut heißt, die Angst zu kennen und trotzdem sauber zu fahren. Im Simulator lernen die jungen Leute die Linie; auf dem Eis lernen sie, ihr Herz ruhig zu halten.» Ihre Mannschaft startet in der kommenden Saison mit vier Pilotinnen — so viele wie nie zuvor.",
      es: "«Valor no es no conocer el miedo», dice la entrenadora Simone Gerlach, que durante años compitió como piloto. «Valor es conocer el miedo y aun así conducir limpio. En el simulador los jóvenes aprenden la trazada; en el hielo aprenden a mantener tranquilo el corazón.» Su equipo empezará la próxima temporada con cuatro pilotos — nunca antes hubo tantas." },
      { it: "Eröffnet wird die Saison traditionell an einem Freitagabend um neunzehn Uhr, wenn die Scheinwerfer die Eisrinne blau färben und die ersten Schlitten donnernd ins Tal schießen. Wer dann an der Bahn steht, versteht, warum der Sport überlebt hat: Lärm, Geschwindigkeit, ein Hauch von Gefahr. Und nachts, wenn die Zuschauer gegangen sind, wird die Bahn neu gewässert und eingefroren — derselbe Kreislauf wie vor hundert Jahren, nur mit modernen Schläuchen.",
      es: "La temporada se inaugura tradicionalmente un viernes a las diecinueve, cuando los focos tiñen de azul el canal de hielo y los primeros trineos rugen cuesta abajo. Quien entonces está junto a la pista entiende por qué el deporte sobrevivió: ruido, velocidad, un soplo de peligro. Y de noche, cuando el público se ha ido, la pista se riega y se vuelve a congelar — el mismo ciclo que hace cien años, solo que con mangueras modernas." },
    ],
    words: [
      { it: "die Bobbahn / die Bobbahnen", es: "la pista de bobsleigh" },
      { it: "die Saison", es: "la temporada" },
      { it: "der Simulator", es: "el simulador" },
      { it: "die Hundertstelsekunde", es: "la centésima de segundo" },
      { it: "die Eisrinne", es: "el canal de hielo" },
      { it: "die Linie", es: "la trazada", note: "aquí: el recorrido ideal por la curva" },
    ],
    questions: [
      { q: "¿Cuánto mide la pista de Winterberg?", options: ["Keine tausendfünfhundert Meter — aber sie gilt als eine der tückischsten", "Zehn Kilometer", "Fünfhundert Meter", "Genau drei Kilometer"], answer: 0, why: "Porque el texto dice: «Die Strecke in Winterberg misst keine tausendfünfhundert Meter, gilt bei Piloten aber als eine der tückischsten.»" },
      { q: "¿Por qué se acorta la temporada?", options: ["Weil die Piloten müde sind", "Weil der natürliche Winter unsicher geworden ist", "Weil die Bahn kaputt ist", "Weil es keine Zuschauer gibt"], answer: 1, why: "Según el texto: «heute wird sie kürzer, weil der natürliche Winter unsicher geworden ist»" },
      { q: "¿Qué aporta el simulador a los jóvenes pilotos?", options: ["Er ersetzt das Fahrtraining völlig", "Er unterhält nur die Zuschauer", "Er ist billiger als der Sommer", "Damit können sie Hunderte Fahrten üben, ohne Risiko — und die Daten zeigen, wo Zeit verloren wird"], answer: 3, why: "Porque el texto dice: «Darin können Nachwuchspiloten Hunderte Fahrten üben, ohne dass ein Risiko eingegangen werden muss.»" },
      { q: "¿Cómo define la entrenadora Gerlach el valor?", options: ["Als Abwesenheit jeder Angst", "Als reine Frage der Technik", "Die Angst kennen und trotzdem sauber fahren", "Als Wichtigkeit der Ausrüstung"], answer: 2, why: "Lo define así: «Mut heißt, die Angst zu kennen und trotzdem sauber zu fahren.»" },
    ],
    discuss: [
      { it: "Simulator oder echtes Eis: Wo gehört die Jugend hin? Argumentieren Sie.", es: "¿Simulador o hielo de verdad: dónde debería formarse la juventud? Argumenta." },
      { it: "Wie viel Risiko darf Sport haben, damit er spannend bleibt? Wo liegt für Sie die Grenze?", es: "¿Cuánto riesgo puede tener el deporte para seguir siendo emocionante? ¿Dónde está tu límite?" },
    ],
  },

  /* ═══ B2 · 9 — Gesellschaft ═══ */
  {
    id: "de-news-b2-09", cat: "societa", level: "B2", place: "Marburg", minutes: 4,
    title: "Das Haus, in dem Jung und Alt zusammen wohnen",
    titleEs: "La casa donde jóvenes y mayores viven juntos",
    lead: {
      it: "In Marburg wohnen Studierende und Seniorinnen unter einem Dach. Das Mehrgenerationenhaus löst zwei Probleme auf einmal — und zeigt, dass Nachbarschaft geplant werden kann.",
      es: "En Marburgo, estudiantes y personas mayores viven bajo el mismo techo. La casa intergeneracional resuelve dos problemas a la vez — y demuestra que el vecindario puede planearse.",
    },
    paragraphs: [
      { it: "In Marburg, einer alten Universitätsstadt in Hessen, steht seit einem Jahr ein Haus, in dem manches Wunder normal geworden ist: Studierende und Seniorinnen wohnen unter einem Dach, teilen sich Küche und Garten und begegnen sich täglich im Treppenhaus. Das Gebäude, eine frühere Grundschule, wurde umgebaut und bietet vierzig Wohnungen — die Hälfte für junge Leute, die Hälfte für Menschen über siebzig.",
      es: "En Marburgo, una vieja ciudad universitaria de Hesse, hay desde hace un año una casa en la que cierto prodigio se volvió normal: estudiantes y personas mayores viven bajo un mismo techo, comparten cocina y jardín y se cruzan a diario en la escalera. El edificio, una antigua escuela primaria, fue remodelado y ofrece cuarenta viviendas — la mitad para gente joven, la mitad para mayores de setenta." },
      { it: "Der Alltag im Haus folgt einfachen Regeln. Um achtzehn Uhr wird dreimal pro Woche gemeinsam gekocht; wer einkaufen möchte, findet fast immer Begleitung, und wer Hilfe mit dem Handy braucht, klopft nebenan an. Die Jungen sagen Du, die Alten sagen Sie, und gestritten wird selten — aber wenn, dann auf der monatlichen Hausversammlung, wo alles besprochen wird, vom Lärm bis zum Gemüsebeet.",
      es: "El día a día de la casa sigue reglas sencillas. A las dieciocho se cocina en común tres veces por semana; quien quiere hacer compras casi siempre encuentra compañía, y quien necesita ayuda con el móvil llama a la puerta de al lado. Los jóvenes tutean, los mayores tratan de usted, y casi nunca hay peleas — y cuando las hay, en la asamblea mensual de la casa, donde se habla de todo, del ruido al huerto." },
      { it: "Der Hintergrund ist nüchtern: In Universitätsstädten wird Wohnraum knapp und teuer, und unter älteren Menschen, die allein leben, wächst die Einsamkeit. Zwei Generationen, zwei Probleme — hier wurden sie nicht getrennt, sondern zusammen gedacht. Ohne das Projekt hätten viele Senioren weiter leere Flure, und manche Studierende wären in entfernte Vororte gezogen. «Wir haben keine Wohnungen gebaut», sagt die Sozialpädagogin Marlene Vogt, «wir haben Nachbarschaft geplant.»",
      es: "El trasfondo es sobrio: en las ciudades universitarias la vivienda escasea y se encarece, y entre las personas mayores que viven solas crece la soledad. Dos generaciones, dos problemas — aquí no se separaron: se pensaron juntos. Sin el proyecto, muchos mayores seguirían con pasillos vacíos y algunos estudiantes se habrían mudado a barrios lejanos. «No construimos viviendas», dice la pedagoga social Marlene Vogt, «planificamos vecindario.»" },
      { it: "Nicht immer ist es harmonisch zugegangen. Im ersten Winter beschwerten sich Studierende über einen Fernseher, der zu laut lief; im Frühling ärgerten sich Senioren über Musik aus dem Dachgeschoss. Gelöst wurden beide Konflikte nicht von oben, sondern im Gespräch: Der Fernseher bekam Kopfhörer, und für die Musik wurde eine feste Stunde vereinbart. Solche Kompromisse, sagt Frau Vogt, sind der Kern des Hauses: «Verständigung ist keine Glückssache, sondern eine Fähigkeit — und die wird hier täglich geübt.»",
      es: "No siempre fue armonioso. En el primer invierno, estudiantes se quejaron de un televisor demasiado alto; en primavera se irritaron los mayores por la música del ático. Ninguno de los dos conflictos lo resolvió nadie desde arriba, sino en conversación: el televisor recibió auriculares y para la música se pactó una hora fija. Esos compromisos, dice la señora Vogt, son el corazón de la casa: «Entenderse no es cuestión de suerte, sino una destreza — y aquí se practica a diario.»" },
      { it: "Inzwischen wird das Modell in anderen Städten kopiert, und die Warteliste in Marburg ist lang. Manche Anfragen kommen sogar aus dem Ausland. Der älteste Bewohner, ein pensionierter Organist, gibt seit dem Sommer Klavierstunden im Gemeinschaftsraum; bezahlt wird in Keksen und Geschichten. «Das ist unsere Währung», sagt er und lacht. «Hier ist niemand reich — aber niemand fühlt sich arm.»",
      es: "Mientras tanto el modelo se copia en otras ciudades, y en Marburgo la lista de espera es larga. Algunas consultas llegan incluso del extranjero. El vecino más anciano, un organista jubilado, da desde el verano clases de piano en la sala común; se le paga en galletas y en historias. «Esa es nuestra moneda», dice entre risas. «Aquí nadie es rico — pero nadie se siente pobre.»" },
    ],
    words: [
      { it: "die Einsamkeit", es: "la soledad" },
      { it: "die Hausversammlung", es: "la asamblea de la casa" },
      { it: "begegnen", es: "encontrarse (con)", note: "siempre con dativo: ich begegne dir" },
      { it: "die Verständigung", es: "la comunicación, el entendimiento" },
      { it: "die Währung", es: "la moneda" },
      { it: "der Wohnraum", es: "la vivienda (como recurso)" },
    ],
    questions: [
      { q: "¿Cómo se reparten las cuarenta viviendas?", options: ["Alle für Studierende", "Zur Hälfte für junge Leute, zur Hälfte für Menschen über siebzig", "Nur für Senioren", "Nur für Familien"], answer: 1, why: "Porque el texto dice: «bietet vierzig Wohnungen — die Hälfte für junge Leute, die Hälfte für Menschen über siebzig»" },
      { q: "¿Qué problemas se pensaron juntos?", options: ["Fehlende Schulen und Straßen", "Zu viele Touristen", "Knapper, teurer Wohnraum für Studierende und wachsende Einsamkeit bei älteren Menschen", "Zu wenige Parkplätze"], answer: 2, why: "Según el texto: «In Universitätsstädten wird Wohnraum knapp und teuer, und unter älteren Menschen, die allein leben, wächst die Einsamkeit.»" },
      { q: "¿Cómo se resolvieron los conflictos del televisor y la música?", options: ["Durch ein Verbot", "Durch eine Klage", "Vom Vermieter von oben", "Im Gespräch: Der Fernseher bekam Kopfhörer, und für die Musik wurde eine feste Stunde vereinbart"], answer: 3, why: "Porque el texto dice: «Der Fernseher bekam Kopfhörer, und für die Musik wurde eine feste Stunde vereinbart.»" },
      { q: "¿Qué significa que la comprensión «no es cuestión de suerte, sino una destreza»?", options: ["Dass Verständigung zwischen den Generationen erlernbar ist und täglich geübt werden muss", "Dass man einfach Glück haben muss", "Dass die Hausregeln strenger werden sollten", "Dass Diskussionen überflüssig sind"], answer: 0, why: "Lo dice la cita: «Verständigung ist keine Glückssache, sondern eine Fähigkeit — und die wird hier täglich geübt.»" },
    ],
    discuss: [
      { it: "Würden Sie in einem Mehrgenerationenhaus wohnen wollen? Was würde Sie stören, was würde Ihnen gefallen?", es: "¿Te gustaría vivir en una casa intergeneracional? ¿Qué te molestaría y qué te gustaría?" },
      { it: "Du oder Sie: Wie sollen junge und alte Menschen sich ansprechen? Begründen Sie.", es: "¿Tú o usted: cómo deberían tratarse jóvenes y mayores? Justifica." },
    ],
  },

  /* ═══ B2 · 10 — Wirtschaft ═══ */
  {
    id: "de-news-b2-10", cat: "economia", level: "B2", place: "Bremerhaven", minutes: 4,
    title: "Das Frachtschiff, das mit dem Wind fährt",
    titleEs: "El carguero que navega con el viento",
    lead: {
      it: "Vor Bremerhaven liegt ein Frachtschiff mit vier rotierenden Zylindern auf dem Deck. Die Technik stammt aus der Segelzeit — und spart doch heute echten Treibstoff.",
      es: "Frente a Bremerhaven hay un carguero con cuatro cilindros giratorios en cubierta. La técnica viene de la época velera — pero hoy ahorra combustible de verdad.",
    },
    paragraphs: [
      { it: "Im Hafen von Bremerhaven liegt seit dem Frühjahr ein Frachtschiff, das aussieht wie ein Widerspruch: Vier weiße Zylinder ragen vom Deck in den Himmel, und doch fährt das Schiff mit dem Wind. Die sogenannten Rotoren werden von Elektromotoren in Drehung versetzt und erzeugen eine Kraft, die das Schiff seitlich schiebt — ein Prinzip, das vor einem Jahrhundert entdeckt wurde und jetzt wieder erfunden wird.",
      es: "En el puerto de Bremerhaven hay desde la primavera un carguero que parece una contradicción: cuatro cilindros blancos se alzan de la cubierta al cielo, y sin embargo el barco avanza con el viento. Los llamados rotores son puestos en rotación por motores eléctricos y generan una fuerza que empuja el barco de costado — un principio descubierto hace un siglo y hoy reinventado." },
      { it: "Der Effekt klingt nach Zauberei, folgt aber einfachen Regeln der Physik: Versetzt man einen Zylinder in rasche Drehung, entsteht seitlich ein Druckunterschied, der den Körper in Bewegung setzt. Auf günstigen Routen kann mit dieser Technik bis zu einem Fünftel an Treibstoff eingespart werden. Das klingt nach wenig — auf Weltrouten jedoch sind es Tausende Tonnen Öl pro Jahr und Schiff.",
      es: "El efecto parece magia, pero sigue reglas físicas sencillas: si se pone un cilindro a girar deprisa, surge a los lados una diferencia de presión que pone el cuerpo en movimiento. En rutas favorables, con esta técnica puede ahorrarse hasta una quinta parte del combustible. Suena a poco — pero en las rutas mundiales son miles de toneladas de petróleo al año por barco." },
      { it: "Für die Werft in Bremerhaven ist die Rückkehr des Windes eine Chance. Jahrelang wurden große Handelsschiffe vor allem in Asien gebaut; jetzt laufen erste Aufträge für Umbauten und Neubauten wieder in Norddeutschland ein. Rund vierhundert Arbeitsplätze konnten gesichert werden, und im Herbst wurde eine neue Lehrwerkstatt eröffnet, in der zwanzig Auszubildende den Beruf des Schiffsmechanikers lernen.",
      es: "Para el astillero de Bremerhaven el regreso del viento es una oportunidad. Durante años los grandes buques mercantes se construyeron sobre todo en Asia; ahora vuelven a llegar a Alemania del norte los primeros encargos de reformas y construcciones nuevas. Se pudieron conservar unos cuatrocientos puestos de trabajo, y en otoño se inauguró un nuevo taller de formación donde veinte aprendices estudian el oficio de mecánico naval." },
      { it: "«Der Wind kostet nichts — man muss ihm nur zuhören lernen», sagt der Ingenieur Claus Diedrich, der die Umbauten begleitet hat. Nicht jede Route eigne sich, räumt er ein: Wer eng nach Fahrplan fahren muss, braucht einen zuverlässigen Antrieb. Aber auf den langen Routen über den Atlantik sei der Wind verlässlicher als sein Ruf.",
      es: "«El viento no cuesta nada — solo hay que aprender a escucharlo», dice el ingeniero Claus Diedrich, que acompañó las reformas. No toda ruta sirve, admite: quien debe navegar con horario estricto necesita una propulsión fiable. Pero en las rutas largas del Atlántico el viento es más fiable que su fama." },
      { it: "Ob daraus eine neue Industrie wird, hängt vom Ölpreis ab und von der Geduld der Reeder. In Bremerhaven rechnet man vorsichtig: Bis Ende des Jahrzehnts könnten Dutzende Schiffe umgerüstet werden. Das erste Schiff wurde im Sommer ausgeliefert und ist jetzt auf dem Atlantik unterwegs — mit Wind im Rücken und einem Diesel, der nur noch leise mitläuft.",
      es: "Que de ahí surja una industria nueva depende del precio del petróleo y de la paciencia de los armadores. En Bremerhaven se calcula con prudencia: hacia fines de la década podrían reformarse decenas de barcos. El primero fue entregado en verano y navega ya por el Atlántico — con viento de cola y un diésel que solo acompaña en voz baja." },
    ],
    words: [
      { it: "das Frachtschiff", es: "el buque de carga" },
      { it: "der Zylinder", es: "el cilindro" },
      { it: "der Treibstoff", es: "el combustible" },
      { it: "die Werft", es: "el astillero" },
      { it: "die Rückkehr", es: "el regreso", note: "verbo correspondiente: zurückkehren" },
      { it: "die Lehrwerkstatt", es: "el taller de formación", note: "compuesto: Lehr- (formación) + Werkstatt (taller)" },
    ],
    questions: [
      { q: "¿Qué sobresale de la cubierta del carguero?", options: ["Kamine und Antennen", "Solarpaneele", "Vier rotierende Zylinder, die eine Kraft erzeugen und das Schiff mit dem Wind fahren lassen", "Fischreusen"], answer: 2, why: "Porque el texto dice: «Vier weiße Zylinder ragen vom Deck in den Himmel, und doch fährt das Schiff mit dem Wind.»" },
      { q: "¿Cuánto combustible se puede ahorrar en rutas favorables?", options: ["Gar nichts", "Alles", "Die Hälfte immer", "Bis zu einem Fünftel des Treibstoffs"], answer: 3, why: "Según el texto: «Auf günstigen Routen kann mit dieser Technik bis zu einem Fünftel an Treibstoff eingespart werden.»" },
      { q: "¿Qué ha significado el regreso del viento para el astillero?", options: ["Arbeitsplätze wurden gesichert, eine Lehrwerkstatt wurde eröffnet, und Aufträge laufen wieder ein", "Nichts Neues", "Alle Schiffe wurden abgewrackt", "Nur Verluste"], answer: 0, why: "Porque el texto dice: «Rund vierhundert Arbeitsplätze konnten gesichert werden, und im Herbst wurde eine neue Lehrwerkstatt eröffnet»" },
      { q: "¿Qué quiere decir Diedrich con que «hay que aprender a escuchar al viento»?", options: ["Dass die Matrosen Musik hören sollen", "Dass die Technik den Wind nutzen kann — auf langen Routen ist er verlässlicher als sein Ruf", "Dass man Windkraftanlagen bauen soll", "Dass der Wind zu leise ist"], answer: 1, why: "Lo sugiere la cita: «Aber auf den langen Routen über den Atlantik sei der Wind verlässlicher als sein Ruf.»" },
    ],
    discuss: [
      { it: "Sollte der Güterverkehr auf See wieder mehr segeln — auch wenn er langsamer wird? Wägen Sie ab.", es: "¿Debería el transporte marítimo volver a navegar más a vela — aunque sea más lento? Sopesa pros y contras." },
      { it: "Alte Ideen, neue Technik: Kennen Sie ein weiteres Beispiel für so eine Rückkehr? Erzählen Sie.", es: "Ideas viejas, técnica nueva: ¿conoces otro ejemplo de ese regreso? Cuenta." },
    ],
  },

  /* ═══ B2 · 11 — Kultur ═══ */
  {
    id: "de-news-b2-11", cat: "cultura", level: "B2", place: "Görlitz", minutes: 4,
    title: "Die Stadt, die für das Kino umgebaut wird",
    titleEs: "La ciudad que se transforma para el cine",
    lead: {
      it: "Görlitz besitzt über viertausend Denkmäler und spielt im Kino andere Städte. Die Bewohner verdienen daran — und ihre Häuser werden daraus saniert.",
      es: "Görlitz tiene más de cuatro mil monumentos y en el cine interpreta a otras ciudades. Sus vecinos ganan con ello — y con eso se restauran sus casas.",
    },
    paragraphs: [
      { it: "Görlitz, die östlichste Stadt Deutschlands, hat einen Reichtum, der sich kaum verstecken lässt: über viertausend denkmalgeschützte Häuser aus sechs Jahrhunderten, vom Mittelalter bis zur Gründerzeit. Keine andere deutsche Stadt hat so viele Altbauten so konsequent restauriert. Filmteams aus Hollywood und Europa drehen hier seit Jahren, wenn sie Straßenzüge suchen, die zugleich wie Berlin um 1930, wie Paris und wie Prag aussehen.",
      es: "Görlitz, la ciudad más oriental de Alemania, tiene una riqueza que apenas puede ocultarse: más de cuatro mil casas protegidas de seis siglos, de la Edad Media al ensanche. Ninguna otra ciudad alemana ha restaurado tantos edificios antiguos con tanto empeño. Equipos de cine de Hollywood y de Europa ruedan aquí desde hace años, cuando buscan calles que a la vez parezcan el Berlín de 1930, París y Praga." },
      { it: "Für die Bewohner ist das Kino längst Wirtschaftsfaktor. Wer sein Haus für einen Dreh zur Verfügung stellt, erhält ein Honorar; ganze Straßenzüge werden für Wochen umgestaltet, und Läden verwandeln sich in Apotheken, Cafés oder Banken von einst. «Plötzlich liegt vor meinem Fenster eine Straße aus dem Jahr 1920», erzählt ein Mieter aus der Innenstadt. «Zwei Wochen lang fahre ich jeden Morgen durch die Geschichte zur Arbeit.»",
      es: "Para los vecinos, el cine es desde hace tiempo un factor económico. Quien pone su casa a disposición de un rodaje recibe un honorario; calles enteras se transforman durante semanas y las tiendas se convierten en farmacias, cafés o bancos de antaño. «De pronto, ante mi ventana hay una calle del año 1920», cuenta un inquilino del centro. «Dos semanas enteras conduzco cada mañana a través de la historia, camino del trabajo.»" },
      { it: "Die Honorare fließen zurück in die Häuser: Mit dem Geld aus den Dreharbeiten wurden Dächer gedeckt, jede Fassade gestrichen und kaputte Fenster ersetzt. Wäre das Kino nicht gekommen, sähe manches Viertel heute anders aus. Die Stadtverwaltung unterstützt das Geschäft, wo sie kann, denn jede Filmszene wird zur Werbung: Zuschauer, die die Kulisse im Kino gesehen haben, kommen und bleiben.",
      es: "Los honorarios vuelven a las casas: con el dinero de los rodajes se cubrieron techos, se pintó cada fachada y se reemplazaron ventanas rotas. Si el cine no hubiera llegado, algunos barrios se verían hoy distintos. La administración municipal apoya el negocio donde puede, porque cada escena es publicidad: los espectadores que vieron el decorado en el cine vienen y se quedan." },
      { it: "Nicht jeder Bewohner ist begeistert. Während eines Drehs kann die Arbeit bis tief in die Nacht gehen; Anwohner beschweren sich über Licht und Lärm, und manche Geschäfte leiden unter den Absperrungen. «Wir verkaufen keine Postkarten, wir verkaufen Kulissen — aber echtes Leben wohnt darin», sagt die Stadtführerin Elke Marschall, die seit Jahren Film-Touren anbietet. An genervte Nachbarn sagt sie nur: «Ohne die Kameras wäre Ihre Straße schon lange renovierungsbedürftig — und niemand hätte es bezahlt.»",
      es: "No todos los vecinos están entusiasmados. Durante un rodaje el trabajo puede alargarse hasta bien entrada la noche; los residentes se quejan de luz y ruido, y algunos negocios sufren por los cortes de calle. «No vendemos postales, vendemos decorados — pero en ellos vive gente real», dice la guía Elke Marschall, que desde hace años ofrece rutas de cine. A los vecinos irritados responde: «Sin las cámaras, su calle haría tiempo que estaría ruinosa — y nadie la habría pagado.»" },
      { it: "Inzwischen hat die Stadt gelernt, mit ihrem Doppelleben zu leben. Ein kleines Filmmuseum wurde eröffnet, die Stadtführungen sind ausgebucht. Die Bewohner erkennen ihre Fenster dann in fremden Filmen wieder — und manche winken kurz, wenn die Kamera vorbeifährt. «Görliwood», sagt Marschall mit einem Achselzucken, «ist kein Spitzname mehr. Es ist ein Beruf.»",
      es: "Mientras tanto, la ciudad aprendió a vivir con su doble vida. Se inauguró un pequeño museo del cine y las visitas guiadas están completas. Los vecinos reconocen entonces sus ventanas en películas ajenas — y algunos saludan con la mano cuando pasa la cámara. «Görliwood», dice Marschall encogiéndose de hombros, «ya no es un apodo. Es un oficio.»" },
    ],
    words: [
      { it: "die Fassade", es: "la fachada" },
      { it: "das Honorar", es: "el honorario" },
      { it: "die Dreharbeiten", es: "el rodaje", note: "de drehen (rodar); un rodaje también es «der Dreh»" },
      { it: "die Kulisse", es: "el decorado" },
      { it: "renovierungsbedürftig", es: "en ruinas, que necesita reforma", note: "-bedürftig = que necesita algo" },
      { it: "ausgebucht", es: "completo, sin plazas" },
    ],
    questions: [
      { q: "¿Cuántos edificios protegidos tiene Görlitz?", options: ["Vierzig", "Vierhundert", "Keine", "Über viertausend — aus sechs Jahrhunderten"], answer: 3, why: "Porque el texto dice: «über viertausend denkmalgeschützte Häuser aus sechs Jahrhunderten, vom Mittelalter bis zur Gründerzeit»" },
      { q: "¿Qué reciben quienes ponen su casa a disposición de un rodaje?", options: ["Ein Honorar — und ganze Straßenzüge werden für Wochen umgestaltet", "Nur eine Quittung", "Freikarten fürs Kino", "Steuererleichterungen"], answer: 0, why: "Según el texto: «Wer sein Haus für einen Dreh zur Verfügung stellt, erhält ein Honorar»" },
      { q: "¿Para qué se usan los honorarios?", options: ["Für Partys", "Für die Häuser: Mit dem Geld wurden Dächer gedeckt, jede Fassade gestrichen und kaputte Fenster ersetzt", "Für Reisen", "Für Werbung im Fernsehen"], answer: 1, why: "Porque el texto dice: «Mit dem Geld aus den Dreharbeiten wurden Dächer gedeckt, jede Fassade gestrichen und kaputte Fenster ersetzt.»" },
      { q: "¿Qué responde Marschall a los vecinos molestos?", options: ["Dass die Dreharbeiten sofort enden", "Dass die Stadt keine Filme mehr braucht", "Dass ohne die Kameras die Straße längst ruinös wäre — niemand hätte die Renovierung bezahlt", "Dass alle umziehen sollen"], answer: 2, why: "Lo dice la cita: «Ohne die Kameras wäre Ihre Straße schon lange renovierungsbedürftig — und niemand hätte es bezahlt.»" },
    ],
    discuss: [
      { it: "Würden Sie Ihr Haus für einen Film zur Verfügung stellen? Was wäre für Sie die Grenze?", es: "¿Pondrías tu casa a disposición de una película? ¿Dónde estaría tu límite?" },
      { it: "Kulisse oder echtes Leben: Was ist Ihrer Stadt wichtiger? Diskutieren Sie.", es: "Decorado o vida real: ¿qué es más importante para tu ciudad? Discútelo." },
    ],
  },

  /* ═══ B2 · 12 — Umwelt ═══ */
  {
    id: "de-news-b2-12", cat: "ambiente", level: "B2", place: "Neubrandenburg", minutes: 4,
    title: "Das Moor, das wieder Wasser bekommt",
    titleEs: "La turbera que recupera el agua",
    lead: {
      it: "Rund um Neubrandenburg wird entwässerten Mooren das Wasser zurückgegeben. Was wie ein Verlust für die Landwirtschaft aussieht, ist ein Gewinn für das Klima — und die Kraniche kommen zurück.",
      es: "En torno a Neubrandenburg se devuelve el agua a turberas desecadas. Lo que parece una pérdida para la agricultura es una ganancia para el clima — y las grullas vuelven.",
    },
    paragraphs: [
      { it: "Östlich von Neubrandenburg, wo Mecklenburg flach und der Horizont weit ist, liegt eine Landschaft, die jahrzehntelang trockengelegt wurde: Moore, entwässert für Äcker und Weiden, damit mehr Gras wachsen konnte. Was damals wie Fortschritt aussah, entpuppt sich als Problem: Der trockene Torf zersetzt sich, und dabei wird Klimagas freigesetzt — tonnenweise, jedes Jahr wieder.",
      es: "Al este de Neubrandenburg, donde Mecklemburgo es llano y el horizonte ancho, hay un paisaje que fue desecado durante décadas: turberas, drenadas para campos y pastos, para que creciera más hierba. Lo que entonces parecía progreso resulta ser un problema: la turba seca se descompone y con ello se libera gas de efecto invernadero — toneladas, cada año otra vez." },
      { it: "Nun wird das Wasser zurückgeholt. Bagger verfüllen alte Gräben, Wehre werden geschlossen, und der Grundwasserstand steigt. Würde das Moor trocken bleiben, würde es weiterhin Kohlenstoff ausstoßen; hält man es nass, kehrt sich der Prozess um, und das Moor beginnt wieder zu speichern. «Ein Moor ist kein Sumpf, sondern ein Archiv», sagt der Moorforscher Dr. Henning Krause. «Es bewahrt Pollen, Samen, sogar Holz aus der Eisenzeit — alles, was ihm anvertraut wurde.»",
      es: "Ahora se devuelve el agua. Excavadoras rellenan zanjas viejas, se cierran presas y el nivel freático sube. Si la turbera siguiera seca, seguiría emitiendo carbono; si se la mantiene húmeda, el proceso se invierte y la turbera vuelve a almacenar. «Una turbera no es un pantano, sino un archivo», dice el investigador de turberas Dr. Henning Krause. «Conserva polen, semillas, incluso madera de la Edad del Hierro — todo lo que se le confió.»" },
      { it: "Für die Landwirte bedeutet die Wende eine Umstellung. Auf nassen Böden kann kein Getreide wachsen, aber Schilf kann geerntet werden — als Baustoff, als Dämmmaterial, sogar als Rohstoff für Verpackungen. Drei Höfe der Region haben sich zusammengeschlossen und eigene Maschinen angeschafft, die auf weichem Boden fahren können. Gefördert wird die Umstellung mit öffentlichen Geldern; ohne Förderung, räumen alle ein, wäre der Wechsel kaum bezahlbar.",
      es: "Para los agricultores, el giro supone una reconversión. En suelos encharcados no puede crecer cereal, pero el junco puede cosecharse — como material de construcción, como aislante, incluso como materia prima para envases. Tres explotaciones de la región se unieron y adquirieron máquinas propias capaces de circular sobre terreno blando. La reconversión se financia con fondos públicos; sin ayudas, reconocen todos, el cambio apenas sería pagable." },
      { it: "Die ersten Erfolge sind schon sichtbar: Im Herbst rasten Tausende Kraniche auf den wiedervernässten Flächen, und im Frühjahr brüten erstmals wieder Vogelarten, die verschwunden schienen. Ein einzelner Kranich blieb sogar den ganzen Winter. Auch für Touristen wird gebaut: ein Bohlenweg, der über das nasse Land führt, ohne es zu belasten, und ein Beobachtungsturm, von dem aus die ganze Fläche überblickt werden kann.",
      es: "Los primeros éxitos ya se ven: en otoño descansan miles de grullas en las superficies rehumedecidas, y en primavera crían de nuevo por primera vez especies de aves que parecían desaparecidas. Una grulla solitaria llegó incluso a quedarse todo el invierno. También se construye para el turismo: una pasarela de tablones que cruza el terreno húmedo sin dañarlo y una torre de observación desde la que puede contemplarse toda la extensión." },
      { it: "Ob die Moore je wieder so wachsen wie einst, ist ungewiss — ein Moor wächst nur wenige Millimeter pro Jahrzehnt. Aber die Rechnung der Region geht auch ohne Wunder auf: Jeder Hektar, der vernässt wird, stößt weniger Klimagas aus, und jede Tonne zählt. «Wir haben keine Zeitmaschine», sagt Krause. «Aber wir haben Schaufeln, Wasser und Ausdauer. Mehr braucht ein Moor nicht.»",
      es: "Que las turberas vuelvan alguna vez a crecer como antes es incierto — una turbera crece apenas unos milímetros por década. Pero la cuenta de la región también sale sin milagros: cada hectárea que se rehumedece emite menos gas de efecto invernadero, y cada tonelada cuenta. «No tenemos máquina del tiempo», dice Krause. «Pero tenemos palas, agua y constancia. Una turbera no necesita más.»" },
    ],
    words: [
      { it: "das Moor / die Moore", es: "la turbera" },
      { it: "der Torf", es: "la turba" },
      { it: "das Klimagas", es: "el gas de efecto invernadero" },
      { it: "das Schilf", es: "el junco, la caña" },
      { it: "der Kranich", es: "la grulla", note: "no confundir con «der Kran» (la grúa)" },
      { it: "das Archiv", es: "el archivo" },
    ],
    questions: [
      { q: "¿Por qué se desecaron las turberas durante décadas?", options: ["Um Äcker und Weiden zu gewinnen — was damals wie Fortschritt aussah", "Für den Tourismus", "Als Trinkwasserreservoir", "Für den Straßenbau"], answer: 0, why: "Porque el texto dice: «Moore, entwässert für Äcker und Weiden» y «Was damals wie Fortschritt aussah, entpuppt sich als Problem»" },
      { q: "¿Qué problema causa la turba seca?", options: ["Sie brennt im Sommer", "Sie zersetzt sich und setzt dabei Klimagas frei — tonnenweise jedes Jahr", "Sie wird teuer", "Nichts"], answer: 1, why: "Según el texto: «Der trockene Torf zersetzt sich, und dabei wird Klimagas freigesetzt — tonnenweise, jedes Jahr wieder.»" },
      { q: "¿Qué pueden cosechar los agricultores en suelos encharcados?", options: ["Getreide wie früher", "Kartoffeln", "Schilf — als Baustoff, Dämmmaterial und Rohstoff für Verpackungen", "Obst"], answer: 2, why: "Porque el texto dice: «Schilf kann geerntet werden — als Baustoff, als Dämmmaterial, sogar als Rohstoff für Verpackungen.»" },
      { q: "¿Qué significa que «una turbera no es un pantano, sino un archivo»?", options: ["Dass Moore verschmutzt sind", "Dass man dort Dokumente lagert", "Dass Moore nutzlos sind", "Dass das Moor Bewahrtes enthält — Pollen, Samen, Holz aus der Eisenzeit: eine Art Gedächtnis der Landschaft"], answer: 3, why: "Lo explica la cita: «Es bewahrt Pollen, Samen, sogar Holz aus der Eisenzeit — alles, was ihm anvertraut wurde.»" },
    ],
    discuss: [
      { it: "Torf im Garten: Würden Sie darauf verzichten, wenn Sie wüssten, was er kostet? Warum (nicht)?", es: "Turba en el jardín: ¿renunciarías a ella sabiendo lo que cuesta? ¿Por qué (no)?" },
      { it: "Landschaft zurückdrehen: Wo wäre das in Ihrer Region möglich — und wer müsste dafür zahlen?", es: "Rebobinar el paisaje: ¿dónde sería posible en tu región — y quién debería pagarlo?" },
    ],
  },

  /* ═══ B2 · 13 — Gesundheit ═══ */
  {
    id: "de-news-b2-13", cat: "salute", level: "B2", place: "Würzburg", minutes: 4,
    title: "Der Chor, der die Sprache zurückbringt",
    titleEs: "El coro que devuelve el habla",
    lead: {
      it: "In Würzburg proben jeden Donnerstag Menschen, deren Sprache nach einem Schlaganfall brüchig wurde. Sie singen — und finden über die Melodie zurück zu Worten.",
      es: "En Wurzburgo ensayan cada jueves personas cuyo habla quedó quebrada tras un ictus. Cantan — y a través de la melodía recuperan las palabras.",
    },
    paragraphs: [
      { it: "Im Gemeinschaftsraum einer Würzburger Klinik sitzen donnerstags um sechzehn Uhr zwanzig Menschen im Stuhlkreis: Schlaganfallpatienten, Ehepartner, eine Logopädin und ein Klavier. Was hier geprobt wird, ist kein normaler Chor — denn die meisten von ihnen haben ihr Sprechen teilweise verloren.",
      es: "En la sala común de una clínica de Wurzburgo se reúnen los jueves a las dieciséis veinte personas en círculo de sillas: pacientes de ictus, cónyuges, una logopeda y un piano. Lo que allí se ensaya no es un coro normal — porque la mayoría de ellos perdió en parte el habla." },
      { it: "Nach einem Schlaganfall kann die Sprache beschädigt werden, obwohl die Stimme unversehrt bleibt. Sprache und Musik werden jedoch von überlappenden, aber nicht identischen Netzen verarbeitet. Melodie und Rhythmus öffnen Wege, die das gestörte Sprechen blockiert — deshalb können Menschen mit Aphasie singen, was sie nicht sagen können. Ohne diesen Umweg bliebe so mancher Satz für immer verschlossen.",
      es: "Tras un ictus, el lenguaje puede quedar dañado aunque la voz permanezca intacta. Lenguaje y música, sin embargo, se procesan en redes que se superponen sin ser idénticas. La melodía y el ritmo abren caminos que el habla alterada tiene bloqueados — por eso algunas personas con afasia pueden cantar lo que no pueden decir. Sin ese rodeo, más de una frase quedaría cerrada para siempre." },
      { it: "Der Chor wurde vor drei Jahren von der Sprachtherapeutin Dr. Franziska Wenzel gegründet und probt seither jede Woche. Gesungen werden alte Volkslieder, einfache Kanons und manchmal Schlager, deren Texte niemand mehr erklären muss — sie sitzen einfach fest. Zuerst wird nur mitgesummt, dann Silbe für Silbe mitgesungen, und niemand wird gedrängt, schneller zu gehen, als die Sprache es erlaubt.",
      es: "El coro fue fundado hace tres años por la logopeda Dra. Franziska Wenzel y desde entonces ensaya cada semana. Se cantan canciones populares viejas, cánones sencillos y a veces éxitos de variedades cuyas letras ya nadie necesita explicar — simplemente quedan grabadas. Al principio solo se tararea, luego se canta sílaba a sílaba, y a nadie se le apura a ir más deprisa de lo que el habla permite." },
      { it: "Die Erfolge sind leise, aber messbar. In einer begleitenden Studie wurde dokumentiert, wie sich Sprechtempo und Wortfindung über Monate veränderten. «Der Fortschritt kommt nicht über Nacht», sagt Frau Wenzel. «Aber wenn ein Mensch, der wochenlang geschwiegen hat, plötzlich mitsingt, dann passiert im Saal etwas, das man mit keinem Test messen kann.»",
      es: "Los éxitos son discretos, pero medibles. En un estudio paralelo se documentó cómo cambiaron a lo largo de meses la velocidad del habla y la evocación de palabras. «El progreso no llega de la noche a la mañana», dice la señora Wenzel. «Pero cuando una persona que calló durante semanas canta de pronto con los demás, en la sala ocurre algo que ningún test puede medir.»" },
      { it: "Am Ende des Semesters steht ein kleines Konzert im Foyer der Klinik, und das Publikum — Pfleger, Ärzte, Familien — singt am Ende fast immer mit. Ob die Musik heilt oder nur öffnet, ist für Wenzel zweitrangig: «Ich behandle keine Kehlen, ich begleite Menschen. Und wenn die Melodie den Weg zur Sprache freimacht, ist mir egal, wer sie gepflastert hat.»",
      es: "Al final del semestre hay un pequeño concierto en el vestíbulo de la clínica, y el público — cuidadores, médicos, familias — casi siempre acaba cantando. Si la música sana o solo abre, para Wenzel es secundario: «Yo no trato gargantas, acompaño personas. Y si la melodía allana el camino hacia el habla, me da igual quién lo pavimentó.»" },
    ],
    words: [
      { it: "der Schlaganfall", es: "el ictus, el derrame cerebral" },
      { it: "die Aphasie", es: "la afasia" },
      { it: "der Chor", es: "el coro" },
      { it: "die Melodie", es: "la melodía" },
      { it: "die Silbe", es: "la sílaba" },
      { it: "die Wortfindung", es: "la evocación de palabras" },
    ],
    questions: [
      { q: "¿Quiénes se sientan los jueves en el círculo de sillas?", options: ["Nur Kinder", "Schlaganfallpatienten, Ehepartner, eine Logopädin und ein Klavier", "Nur Musiker", "Nur Ärzte"], answer: 1, why: "Porque el texto dice: «Schlaganfallpatienten, Ehepartner, eine Logopädin und ein Klavier»" },
      { q: "¿Por qué pueden cantar algunas personas con afasia lo que no pueden decir?", options: ["Weil Singen einfacher ist als Reden", "Weil die Texte kurz sind", "Weil Musik und Sprache von überlappenden, aber nicht identischen Netzen verarbeitet werden", "Weil sie mehr üben"], answer: 2, why: "Según el texto: «Sprache und Musik werden jedoch von überlappenden, aber nicht identischen Netzen verarbeitet.»" },
      { q: "¿Cómo se integra a los nuevos miembros del coro?", options: ["Sie müssen sofort solo singen", "Sie zahlen eine Gebühr", "Sie werden abgelehnt, wenn sie nicht singen können", "Zuerst wird nur mitgesummt, dann Silbe für Silbe mitgesungen — und niemand wird gedrängt"], answer: 3, why: "Porque el texto dice: «Zuerst wird nur mitgesummt, dann Silbe für Silbe mitgesungen, und niemand wird gedrängt»" },
      { q: "¿Qué quiere decir Wenzel con «yo no trato gargantas, acompaño personas»?", options: ["Dass sie Menschen begleitet, statt nur Symptome zu behandeln — das Zwischenmenschliche ist ihr Kern", "Dass sie keine Kehlkopfspezialistin ist", "Dass die Klinik zu klein ist", "Dass Singen den Hals schädigt"], answer: 0, why: "Lo dice ella misma: «Ich behandle keine Kehlen, ich begleite Menschen.»" },
    ],
    discuss: [
      { it: "Gibt es ein Lied, das Ihnen bei schweren Momenten geholfen hat? Welches — und warum?", es: "¿Hay una canción que te haya ayudado en momentos difíciles? ¿Cuál y por qué?" },
      { it: "Musik als Medizin: Wo würde Therapie mit Musik in Ihrem Alltag passen? Sammeln Sie Ideen.", es: "La música como medicina: ¿dónde encajaría la terapia con música en tu vida diaria? Reúne ideas." },
    ],
  },

  /* ═══ B2 · 14 — Geschichte ═══ */
  {
    id: "de-news-b2-14", cat: "storia", level: "B2", place: "Speyer", minutes: 4,
    title: "Die Könige, die unter dem Dom schlafen",
    titleEs: "Los reyes que duermen bajo la catedral",
    lead: {
      it: "Unter dem Dom von Speyer ruhen Könige aus vier Jahrhunderten. Ihre Gebeine werden jetzt mit modernen Methoden befragt — und die Toten antworten erstaunlich klar.",
      es: "Bajo la catedral de Espira descansan reyes de cuatro siglos. Sus restos son ahora interrogados con métodos modernos — y los muertos responden con sorprendente claridad.",
    },
    paragraphs: [
      { it: "Der Dom zu Speyer, im Jahr 1030 begonnen, ist die größte romanische Kirche der Welt. Aber der berühmteste Teil des Gebäudes liegt unter dem Boden: In der Gruft unter dem Schiff schlafen acht Könige und Kaiser aus vier Jahrhunderten — hier wurden salische Herrscher, ihre Frauen und Kinder beigesetzt, die größte Königsgruft Europas.",
      es: "La catedral de Espira, comenzada en el año 1030, es la mayor iglesia románica del mundo. Pero la parte más célebre del edificio está bajo el suelo: en la cripta bajo la nave duermen ocho reyes y emperadores de cuatro siglos — allí fueron enterrados soberanos salios, sus esposas y sus hijos: la mayor cripta real de Europa." },
      { it: "Was Besucher heute sehen können, ist das Ergebnis einer wechselvollen Geschichte: Im Jahr 1689 brannte der Dom bis auf die Mauern, und die Gruft wurde ausgeraubt. Wäre die Krypta damals vollständig zerstört worden, wäre fast alles verloren gewesen — die steinernen Sarkophage blieben jedoch erhalten. Anfang des zwanzigsten Jahrhunderts wurde die Anlage erforscht; die Gebeine wurden gehoben, untersucht und an verborgener Stelle wieder beigesetzt.",
      es: "Lo que hoy pueden ver los visitantes es el resultado de una historia accidentada: en 1689 la catedral ardió hasta los muros y la cripta fue saqueada. Si la cripta se hubiera destruido entonces por completo, casi todo se habría perdido — pero los sarcófagos de piedra se conservaron. A comienzos del siglo veinte el recinto fue estudiado; los restos fueron alzados, examinados y vueltos a enterrar en un lugar oculto." },
      { it: "Jetzt werden die sterblichen Überreste mit modernen Methoden untersucht: Isotope aus dem Zahnschmelz verraten, wo ein Mensch aufgewachsen ist und was er aß; DNA-Vergleiche könnten klären, wer mit wem verwandt war. Die Analysen werden in mehreren Laboratorien durchgeführt, und die Ergebnisse werden vorläufig unter Verschluss gehalten.",
      es: "Ahora los restos mortales se examinan con métodos modernos: los isótopos del esmalte dental revelan dónde creció una persona y qué comía; las comparaciones de ADN podrían aclarar quién estaba emparentado con quién. Los análisis se realizan en varios laboratorios y los resultados se mantienen por ahora bajo llave." },
      { it: "«Ein Dom ist ein Buch, das in Stein gebunden wurde», sagt der Historiker Prof. Dr. Ulrich Falk, der das Projekt begleitet. «Aber Bücher können neu gelesen werden. Wir fragen die Könige jetzt Dinge, die vor hundert Jahren niemand zu fragen wagte: Woher kamen sie? Was aßen sie? Waren sie krank? Die Toten antworten nicht — aber ihre Knochen reden eine erstaunlich klare Sprache.»",
      es: "«Una catedral es un libro encuadernado en piedra», dice el historiador Prof. Dr. Ulrich Falk, que acompaña el proyecto. «Pero los libros pueden releerse. A los reyes les preguntamos ahora cosas que hace cien años nadie se atrevía a preguntar: ¿de dónde venían? ¿Qué comían? ¿Estaban enfermos? Los muertos no contestan — pero sus huesos hablan un idioma asombrosamente claro.»" },
      { it: "Ob die neuen Befunde das Geschichtsbild verschieben, ist offen. Sicher ist nur, dass das Interesse riesig ist: Für die große Ausstellung im nächsten Jahr wird derzeit eine digitale Rekonstruktion der Gruft erstellt, die auch zeigen soll, wie die Gruft um das Jahr 1100 ausgesehen hat. Und jeden Nachmittag um siebzehn Uhr, wenn das Licht durch die Westfenster fällt, steht die Krypta still da — acht Könige, vier Jahrhunderte, ein Steinhaus voller Fragen.",
      es: "Si los nuevos hallazgos moverán la imagen histórica, está abierto. Lo único seguro es el interés: para la gran exposición del año próximo se está elaborando una reconstrucción digital de la cripta, que mostrará también cómo era hacia el año 1100. Y cada tarde a las diecisiete, cuando la luz entra por los ventanales occidentales, la cripta permanece allí en silencio — ocho reyes, cuatro siglos, una casa de piedra llena de preguntas." },
    ],
    words: [
      { it: "der Dom", es: "la catedral" },
      { it: "die Gruft", es: "el sepulcro, la tumba" },
      { it: "die Krypta", es: "la cripta" },
      { it: "die Gebeine", es: "los restos, los huesos" },
      { it: "der Zahnschmelz", es: "el esmalte dental" },
      { it: "die Befunde", es: "los hallazgos (médicos o científicos)" },
    ],
    questions: [
      { q: "¿Qué se encuentra bajo la nave de la catedral de Espira?", options: ["Ein geheimer Schatz aus Gold", "Eine alte Bibliothek", "Eine Königsgruft mit acht Königen und Kaisern aus vier Jahrhunderten", "Ein unterirdischer Fluss"], answer: 2, why: "Porque el texto dice: «In der Gruft unter dem Schiff schlafen acht Könige und Kaiser aus vier Jahrhunderten»" },
      { q: "¿Qué habría pasado si la cripta se hubiera destruido por completo en 1689?", options: ["Nichts — alles war kopiert", "Die Stadt hätte einen neuen Dom gebaut", "Die Könige wären umgezogen", "Fast alles wäre verloren gewesen — doch die steinernen Sarkophage blieben erhalten"], answer: 3, why: "Según el texto: «Wäre die Krypta damals vollständig zerstört worden, wäre fast alles verloren gewesen — die steinernen Sarkophage blieben jedoch erhalten.»" },
      { q: "¿Qué pueden revelar los isótopos del esmalte dental?", options: ["Wo ein Mensch aufgewachsen ist und was er aß", "Den Namen der Person", "Die Farbe der Haare", "Die Größe des Hauses"], answer: 0, why: "Porque el texto dice: «Isotope aus dem Zahnschmelz verraten, wo ein Mensch aufgewachsen ist und was er aß»" },
      { q: "¿Qué significa la frase de Falk sobre un «libro encuadernado en piedra»?", options: ["Dass man im Dom lesen lernen kann", "Dass der Dom wie ein Buch Geschichten bewahrt, die immer wieder neu gelesen werden können", "Dass Bücher schwer sind", "Dass der Dom eine Bibliothek enthält"], answer: 1, why: "Lo sugieren las citas «Ein Dom ist ein Buch, das in Stein gebunden wurde» y «Aber Bücher können neu gelesen werden»" },
    ],
    discuss: [
      { it: "Sollen Königsgräber geöffnet werden — oder sind die Toten in Ruhe zu lassen? Diskutieren Sie.", es: "¿Deben abrirse las tumbas de reyes — o hay que dejar a los muertos en paz? Discútelo." },
      { it: "Was würde man an Ihren Knochen in tausend Jahren ablesen können? Beschreiben Sie es mit Humor.", es: "¿Qué se leería en tus huesos dentro de mil años? Descríbelo con humor." },
    ],
  },

  /* ═══ B2 · 15 — Technologie ═══ */
  {
    id: "de-news-b2-15", cat: "tecnologia", level: "B2", place: "Karlsruhe", minutes: 4,
    title: "Die Batterie, die nicht brennen kann",
    titleEs: "La batería que no puede arder",
    lead: {
      it: "Am Karlsruher Institut für Technologie wird an einer Batterie gearbeitet, die nicht brennen kann. Das Geheimnis ist ein Elektrolyt aus Keramik — und Geduld bei jedem Fertigungsschritt.",
      es: "En el Instituto de Tecnología de Karlsruhe se trabaja en una batería que no puede arder. El secreto es un electrolito de cerámica — y paciencia en cada paso de fabricación.",
    },
    paragraphs: [
      { it: "In einer Halle am Karlsruher Institut für Technologie liegt ein Objekt, das unscheinbar aussieht und doch eine Frage beantworten soll, an der Forscher seit Jahrzehnten arbeiten: eine Batterie, die nicht brennen kann. Herzstück ist ein Elektrolyt, der nicht flüssig, sondern fest ist — eine keramische Schicht, dünn wie ein Blatt Papier.",
      es: "En una nave del Instituto de Tecnología de Karlsruhe hay un objeto de aspecto discreto que debería responder una pregunta en la que los investigadores trabajan desde hace décadas: una batería que no puede arder. Su corazón es un electrolito no líquido sino sólido — una capa cerámica fina como una hoja de papel." },
      { it: "Solange der Elektrolyt flüssig ist, kann eine Zelle undicht werden, heiß laufen und im schlimmsten Fall brennen. Wäre der Stoff fest, entfiele dieses Risiko fast vollständig — und mehr Energie könnte auf gleichem Raum gespeichert werden. Theoretisch klingt das einfach; praktisch scheitert die Fertigung bislang an winzigen Details: an Grenzflächen, die brüchig werden, an Kontakten, die sich lösen, an Kosten, die niemand bezahlen will.",
      es: "Mientras el electrolito sea líquido, una celda puede hacerse permeable, sobrecalentarse y, en el peor caso, arder. Si la sustancia fuera sólida, ese riesgo desaparecería casi por completo — y podría almacenarse más energía en el mismo espacio. En teoría suena sencillo; en la práctica, la fabricación choca hasta hoy con detalles diminutos: superficies que se vuelven quebradizas, contactos que se desprenden, costos que nadie quiere pagar." },
      { it: "In Karlsruhe wurde deshalb eine kleine Pilotstrecke aufgebaut, an der jede Fehlquelle einzeln untersucht werden kann. Die Zellen werden dort zehntausendmal geladen und wieder entladen, dabei werden sie durchleuchtet, gewogen und auf Herz und Nieren geprüft. Eine einzige Fertigungsstunde, sagen die Forscher, könne über Erfolg und Misserfolg entscheiden — deshalb wird jede Veränderung erst im Kleinen getestet, bevor sie übernommen wird.",
      es: "Por eso se construyó en Karlsruhe una pequeña línea piloto donde cada fuente de error puede analizarse por separado. Allí, las celdas se cargan y descargan diez mil veces, se les toman imágenes, se pesan y se examinan a fondo. Una sola hora de fabricación, dicen los investigadores, puede decidir el éxito o el fracaso — por eso cada cambio se prueba primero a pequeña escala antes de adoptarse." },
      { it: "«Eine Batterie ist wie ein guter Kellner», sagt die Chemikerin Prof. Dr. Lena Siebert mit einem Lächeln. «Man bemerkt sie nur, wenn sie versagt. Deshalb bauen wir nicht für die Sensation, sondern für den Alltag — für das Auto, das zehn Jahre lang jeden Morgen anfahren soll.»",
      es: "«Una batería es como un buen camarero», dice la química Prof. Dra. Lena Siebert con una sonrisa. «Solo se la nota cuando falla. Por eso no construimos para la sensación, sino para el día a día — para el coche que debe arrancar cada mañana durante diez años.»" },
      { it: "Ob aus der Pilotstrecke einmal eine Fabrik wird, entscheiden Investoren und Märkte — die Forscher können nur liefern: Materialien, Messreihen und Ausdauer. Immerhin: Der älteste Prototyp aus Karlsruhe läuft seit neun Jahren im Dauertest, und die Kurve ist noch immer nicht abgefallen. «Wenn er eines Tages schlappmacht, trauern wir ein bisschen — und dann bauen wir die nächste.»",
      es: "Que de la línea piloto salga algún día una fábrica lo deciden inversores y mercados — los investigadores solo pueden aportar: materiales, series de mediciones y constancia. Al fin y al cabo: el prototipo más antiguo de Karlsruhe lleva nueve años en prueba continua y la curva todavía no ha caído. «El día que se rinda, lo lloramos un poco — y luego construimos la siguiente.»" },
    ],
    words: [
      { it: "die Batterie", es: "la batería" },
      { it: "der Elektrolyt", es: "el electrolito", note: "sustantivo masculino — cuidado con el artículo" },
      { it: "die Zelle / die Zellen", es: "la celda / las celdas" },
      { it: "die Fertigung", es: "la fabricación" },
      { it: "der Prototyp", es: "el prototipo" },
      { it: "der Dauertest", es: "la prueba de resistencia", note: "compuesto: Dauer (duración) + Test (prueba)" },
    ],
    questions: [
      { q: "¿Qué hace especial a la batería de Karlsruhe?", options: ["Sie ist besonders bunt", "Sie kostet nichts", "Sie ist besonders groß", "Ihr Elektrolyt ist fest statt flüssig — sie kann deshalb nicht brennen"], answer: 3, why: "Porque el texto dice: «eine Batterie, die nicht brennen kann. Herzstück ist ein Elektrolyt, der nicht flüssig, sondern fest ist»" },
      { q: "¿Dónde falla hasta ahora la fabricación?", options: ["An winzigen Details: Grenzflächen, die brüchig werden, Kontakte, die sich lösen, Kosten", "An fehlenden Ideen", "Am Wetter", "An den Vorschriften allein"], answer: 0, why: "Según el texto: «praktisch scheitert die Fertigung bislang an winzigen Details: an Grenzflächen, die brüchig werden, an Kontakten, die sich lösen, an Kosten, die niemand bezahlen will.»" },
      { q: "¿Qué ocurre con las celdas en la línea piloto?", options: ["Sie werden verkauft", "Sie werden zehntausendmal geladen und entladen, durchleuchtet, gewogen und geprüft", "Sie werden zerstört", "Sie bleiben ungenutzt"], answer: 1, why: "Porque el texto dice: «Die Zellen werden dort zehntausendmal geladen und wieder entladen, dabei werden sie durchleuchtet, gewogen und auf Herz und Nieren geprüft.»" },
      { q: "¿Qué quiere decir Siebert comparando la batería con «un buen camarero»?", options: ["Dass Batterien Dienstleistungen verkaufen", "Dass man sie im Restaurant benutzt", "Dass eine Batterie im Alltag gar nicht auffallen darf — nur ihr Versagen fällt auf", "Dass Kellner Elektrizität brauchen"], answer: 2, why: "Lo explica la cita: «Man bemerkt sie nur, wenn sie versagt.»" },
    ],
    discuss: [
      { it: "Was müsste eine Batterie können, damit Sie sie wirklich glücklich macht? Prioritäten setzen.", es: "¿Qué debería poder hacer una batería para hacerte de verdad feliz? Establece prioridades." },
      { it: "Grundlagenforschung braucht Geduld — wer soll sie bezahlen: der Staat, die Industrie, alle? Begründen Sie.", es: "La investigación básica exige paciencia — ¿quién debe pagarla: el Estado, la industria, todos? Justifica." },
    ],
  },
];
