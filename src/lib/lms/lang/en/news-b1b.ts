/* ── EN · Notizie B1 · batch B (v9.39) ───────────────────────────────
   American English news adapted to B1, Voice of America Learning
   English method. 100% original didactic content. Body: 4-5 short
   paragraphs, 125-165 words, present perfect + will + first
   conditional + connectors. Fields `.it` = English (study language),
   `.es` = Spanish. Ids en-news-b1-04…15. */

import type { NewsItem } from "../../news";

export const EN_NEWS_B1B: NewsItem[] = [

  /* ═══ B1 · 4 — Science ═══ */
  {
    id: "en-news-b1-04", cat: "scienza", level: "B1", place: "Boulder", minutes: 3,
    title: "Tiny backpacks reveal the hummingbird's secret route",
    titleEs: "Minúsculas mochilas revelan la ruta secreta del colibrí",
    lead: {
      it: "In Boulder, Colorado, scientists have solved a small summer mystery: where do the hummingbirds go when they vanish in August? The answer came from a backpack smaller than a coin.",
      es: "En Boulder, Colorado, unos científicos han resuelto un pequeño misterio veraniego: ¿adónde van los colibríes cuando desaparecen en agosto? La respuesta llegó gracias a una mochila más pequeña que una moneda.",
    },
    paragraphs: [
      { it: "Every summer, hundreds of hummingbirds visit the gardens of Boulder. Then, at the end of August, they vanish. For years, nobody knew where they went. «These birds weigh less than a nickel, so following them seemed impossible,» explains biologist Karen Ross.",
      es: "Cada verano, cientos de colibríes visitan los jardines de Boulder. Luego, a finales de agosto, desaparecen. Durante años, nadie supo adónde iban. «Estas aves pesan menos que una moneda de cinco centavos, así que seguirlas parecía imposible», explica la bióloga Karen Ross." },
      { it: "This spring, her team fitted forty birds with tiny sensor backpacks that weigh almost nothing. The sensors have already recorded more than two thousand flight hours.",
      es: "Esta primavera, su equipo equipó a cuarenta aves con diminutas mochilas de sensores que casi no pesan. Los sensores ya han registrado más de dos mil horas de vuelo." },
      { it: "The results have surprised everyone. The hummingbirds have not flown south through the mountains, as people believed. Instead, they have crossed the dry plateaus of New Mexico, feeding on wildflowers along the way.",
      es: "Los resultados han sorprendido a todos. Los colibríes no han volado hacia el sur por las montañas, como se creía. En cambio, han cruzado las mesetas secas de Nuevo México, alimentándose de flores silvestres por el camino." },
      { it: "The discovery matters because the birds depend on those flowers. «If the flowers disappear, the hummingbirds will lose their gas stations,» says Ross. The team will share the data with park managers, so they can protect the route.",
      es: "El descubrimiento importa porque las aves dependen de esas flores. «Si las flores desaparecen, los colibríes perderán sus gasolineras», dice Ross. El equipo compartirá los datos con los gestores del parque, para que puedan proteger la ruta." },
      { it: "Next year, the team plans even smaller sensors. They hope to follow one bird all the way to Mexico.",
      es: "El próximo año, el equipo planea sensores aún más pequeños. Esperan seguir a un ave hasta México." },
    ],
    words: [
      { it: "the hummingbird / the hummingbirds", es: "el colibrí / los colibríes" },
      { it: "to vanish", es: "desaparecer (sin dejar rastro)" },
      { it: "tiny", es: "diminuto, minúsculo" },
      { it: "the backpack / the backpacks", es: "la mochila / las mochilas" },
      { it: "the wildflower / the wildflowers", es: "la flor silvestre / las flores silvestres" },
      { it: "the data", es: "los datos", note: "plural latino (datum, data); en el uso diario se combina también con verbos en singular" },
    ],
    questions: [
      { q: "¿Cuándo desaparecen los colibríes de Boulder?", options: ["In early spring", "At the end of August", "After the first snow", "Only at night"], answer: 1, why: "El texto lo dice claramente: «Then, at the end of August, they vanish.»" },
      { q: "¿Cuántas aves recibieron mochilas con sensores esta primavera?", options: ["Four", "Fourteen", "Four hundred", "Forty"], answer: 3, why: "«This spring, her team fitted forty birds with tiny sensor backpacks…»" },
      { q: "¿Por qué importa tanto el descubrimiento?", options: ["Because the sensors are very cheap", "Because the birds sing at night", "Because the birds depend on the flowers along the route", "Because Boulder needs more tourists"], answer: 2, why: "La clave está en la causa: «The discovery matters because the birds depend on those flowers.»" },
      { q: "En la cita, ¿qué son las «gasolineras» de los colibríes?", options: ["Places where the birds drink nectar and refuel on the way", "Places where the birds sleep in winter", "Rest stops with food for cars", "Nests built inside flowers"], answer: 0, why: "«If the flowers disappear, the hummingbirds will lose their gas stations», dice Ross al comparar las flores con gasolineras." },
    ],
    discuss: [
      { it: "Have you ever seen a hummingbird in real life? Where were you, and what was it doing?", es: "¿Has visto alguna vez un colibrí en la vida real? ¿Dónde estabas y qué estaba haciendo?" },
      { it: "Scientists follow wild animals with tiny sensors. Do you think this technology helps or bothers the animals? Why?", es: "Los científicos siguen a los animales salvajes con sensores diminutos. ¿Crees que esta tecnología ayuda o molesta a los animales? ¿Por qué?" },
    ],
  },

  /* ═══ B1 · 5 — Culture ═══ */
  {
    id: "en-news-b1-05", cat: "cultura", level: "B1", place: "Nashville", minutes: 3,
    title: "Nashville songwriters find a new stage: the library",
    titleEs: "Compositores de Nashville encuentran un nuevo escenario: la biblioteca",
    lead: {
      it: "In Nashville, they call the public library «the quietest stage in town». This year, professional songwriters have moved their offices there, and the results are louder than expected.",
      es: "En Nashville llaman a la biblioteca pública «el escenario más silencioso de la ciudad». Este año, compositores profesionales han trasladado allí sus oficinas, y los resultados son más ruidosos de lo esperado.",
    },
    paragraphs: [
      { it: "Every Thursday afternoon, a small room at the Nashville library becomes a writing studio. Local songwriters sit with residents who have always wanted to write a song but never tried.",
      es: "Cada jueves por la tarde, una sala pequeña de la biblioteca de Nashville se convierte en un estudio de composición. Compositores locales se sientan con vecinos que siempre han querido escribir una canción pero nunca lo han intentado." },
      { it: "The program started in March with six teachers. Since then, more than two hundred people have attended the free sessions. Some participants are teenagers; others are retired nurses or bus drivers.",
      es: "El programa empezó en marzo con seis profesores. Desde entonces, más de doscientas personas han asistido a las sesiones gratuitas. Algunos participantes son adolescentes; otras, enfermeras jubiladas o conductores de autobús." },
      { it: "«Everybody has one story that deserves a chorus,» says country writer Dale McKinney. He has spent twenty years on tour buses, but he calls the library his best gig yet.",
      es: "«Todo el mundo tiene una historia que merece un estribillo», dice el compositor country Dale McKinney. Ha pasado veinte años en autobuses de gira, pero llama a la biblioteca su mejor trabajo hasta la fecha." },
      { it: "The method is simple. First, students write one honest sentence. Then the group turns it into a melody, and everybody sings. If a song works, the library will record it in a real studio.",
      es: "El método es simple. Primero, los estudiantes escriben una frase honesta. Luego el grupo la convierte en melodía y todos cantan. Si una canción funciona, la biblioteca la grabará en un estudio de verdad." },
      { it: "The city has already planned a winter concert, so every class will perform one song. Nobody knows the next music star, but the waiting list keeps growing.",
      es: "La ciudad ya ha planeado un concierto de invierno, así que cada clase interpretará una canción. Nadie sabe quién será la próxima estrella, pero la lista de espera sigue creciendo." },
    ],
    words: [
      { it: "the songwriter / the songwriters", es: "el compositor / los compositores" },
      { it: "the chorus", es: "el estribillo", note: "en música, chorus = estribillo; «coro» (grupo de cantantes) es choir" },
      { it: "the gig", es: "el concierto, el trabajo musical", note: "palabra informal usada por músicos" },
      { it: "to attend (attended)", es: "asistir a", note: "attend = asistir; «atender» es to take care of" },
      { it: "honest", es: "honesto, sincero" },
      { it: "the waiting list", es: "la lista de espera" },
    ],
    questions: [
      { q: "¿Cuándo se convierte la sala de la biblioteca en estudio de composición?", options: ["Every Thursday afternoon", "Every Sunday morning", "Only in March", "Once a year"], answer: 0, why: "«Every Thursday afternoon, a small room at the Nashville library becomes a writing studio.»" },
      { q: "¿Cuántas personas han asistido a las sesiones gratuitas desde marzo?", options: ["Only six", "About twenty", "More than two hundred", "Two thousand"], answer: 2, why: "«Since then, more than two hundred people have attended the free sessions.»" },
      { q: "¿Qué escriben los estudiantes en el primer paso del método?", options: ["They record a demo", "They write one honest sentence", "They buy a guitar", "They sing their favorite song"], answer: 1, why: "El método lo indica: «First, students write one honest sentence.»" },
      { q: "¿Por qué llama Dale McKinney a la biblioteca «su mejor trabajo»?", options: ["Because it pays more money", "Because it is quiet and free", "Because it is near his house", "Because helping ordinary people write songs feels better than touring"], answer: 3, why: "«He has spent twenty years on tour buses, but he calls the library his best gig yet.»" },
    ],
    discuss: [
      { it: "If you wrote one honest sentence today, what would it say? Try it in English.", es: "Si hoy escribieras una frase honesta, ¿qué diría? Prueba en inglés." },
      { it: "Libraries now offer songwriting, cooking and language classes. What should a library offer next, and why?", es: "Las bibliotecas ahora ofrecen clases de composición, cocina e idiomas. ¿Qué debería ofrecer una biblioteca a continuación, y por qué?" },
    ],
  },

  /* ═══ B1 · 6 — History ═══ */
  {
    id: "en-news-b1-06", cat: "storia", level: "B1", place: "Philadelphia", minutes: 3,
    title: "A colonial ship wakes up under a Philadelphia street",
    titleEs: "Un barco colonial despierta bajo una calle de Filadelfia",
    lead: {
      it: "Construction workers in Philadelphia were digging the basement of a new hotel when their machines touched old wood. Archaeologists now believe the pieces belong to a ship from the 1700s.",
      es: "Unos obreros de Filadelfia cavaban el sótano de un hotel nuevo cuando sus máquinas tocaron madera vieja. Los arqueólogos creen ahora que los restos pertenecen a un barco del siglo XVIII.",
    },
    paragraphs: [
      { it: "The workers stopped immediately and called the city archaeologists. The team has spent six weeks removing the mud, piece by piece. The vessel is about twelve meters long and was buried around 1780.",
      es: "Los obreros se detuvieron de inmediato y llamaron a los arqueólogos municipales. El equipo ha pasado seis semanas retirando el lodo, pieza por pieza. La embarcación mide unos doce metros y fue enterrada hacia 1780." },
      { it: "Historians think merchants used the ship on the Delaware River. When it grew too old, people filled it with gravel and sank it to extend the shore. The city has grown on top of such ships for centuries.",
      es: "Los historiadores creen que comerciantes usaban el barco en el río Delaware. Cuando envejeció demasiado, la gente lo llenó de grava y lo hundió para ganar terreno a la orilla. La ciudad ha crecido sobre barcos así durante siglos." },
      { it: "«Philadelphia is standing on its own history,» says archaeologist Thomas Reed. His team has found shoes, coins and a child's marble near the wreck. Each object tells a small human story.",
      es: "«Filadelfia está parada sobre su propia historia», dice el arqueólogo Thomas Reed. Su equipo ha encontrado zapatos, monedas y una canica de niño cerca del pecio. Cada objeto cuenta una pequeña historia humana." },
      { it: "The wood is fragile now, so the pieces will move to a laboratory. If the wood survives the drying process, the museum will show the ship to the public in two years.",
      es: "La madera está frágil ahora, así que las piezas irán a un laboratorio. Si la madera sobrevive al proceso de secado, el museo mostrará el barco al público dentro de dos años." },
      { it: "Meanwhile, the hotel builders have changed their plans. Their new lobby will have a glass floor, so guests can look at the old hull below.",
      es: "Mientras tanto, los constructores del hotel han cambiado sus planes. Su nuevo vestíbulo tendrá un suelo de cristal, para que los huéspedes puedan ver el viejo casco debajo." },
    ],
    words: [
      { it: "the archaeologist / the archaeologists", es: "el arqueólogo / los arqueólogos" },
      { it: "the vessel", es: "la embarcación, el buque" },
      { it: "the wreck", es: "el pecio, los restos del naufragio" },
      { it: "the shore", es: "la orilla, la costa" },
      { it: "fragile", es: "frágil" },
      { it: "the hull", es: "el casco (del barco)" },
    ],
    questions: [
      { q: "¿Cuánto mide la embarcación encontrada?", options: ["About two meters", "About twenty meters", "About twelve meters", "About a hundred meters"], answer: 2, why: "«The vessel is about twelve meters long and was buried around 1780.»" },
      { q: "¿Por qué hundieron el barco hace siglos?", options: ["Because it was too old; it was filled with gravel to extend the shore", "Because it carried treasure", "Because it lost a battle", "Because the river was too dangerous"], answer: 0, why: "«When it grew too old, people filled it with gravel and sank it to extend the shore.»" },
      { q: "¿Qué ha encontrado el equipo cerca del pecio?", options: ["Gold bars", "Old maps", "Nothing at all", "Shoes, coins and a child's marble"], answer: 3, why: "«His team has found shoes, coins and a child's marble near the wreck.»" },
      { q: "¿Qué significa la frase de Thomas Reed sobre Filadelfia?", options: ["That the city is very tall", "That the city is built above layers of its own past", "That Philadelphia has many museums", "That the streets are dangerous"], answer: 1, why: "«Philadelphia is standing on its own history», resume el arqueólogo Thomas Reed." },
    ],
    discuss: [
      { it: "Cities are often built on top of older cities. What do you think is under your street?", es: "Las ciudades suelen construirse sobre ciudades más antiguas. ¿Qué crees que hay debajo de tu calle?" },
      { it: "The hotel will have a glass floor over the ship. Would you like to sleep above a piece of history? Why?", es: "El hotel tendrá un suelo de cristal sobre el barco. ¿Te gustaría dormir encima de un trozo de historia? ¿Por qué?" },
    ],
  },

  /* ═══ B1 · 7 — Economy ═══ */
  {
    id: "en-news-b1-07", cat: "economia", level: "B1", place: "Montpelier", minutes: 3,
    title: "The town that bought its movie theater back",
    titleEs: "El pueblo que compró de vuelta su cine",
    lead: {
      it: "The only movie theater in Montpelier, Vermont, closed its doors last spring. This month, the town reopened it — with six hundred new owners.",
      es: "El único cine de Montpelier, Vermont, cerró sus puertas la primavera pasada. Este mes, el pueblo lo ha reabierto… con seiscientos nuevos propietarios.",
    },
    paragraphs: [
      { it: "When the Capital Theater closed, residents lost more than movies. The building had anchored Main Street for ninety years, and the shops around it felt the change fast. «Nobody wanted to see it dark,» says baker Ellen Hart.",
      es: "Cuando cerró el Capital Theater, los vecinos perdieron algo más que películas. El edificio había sido el ancla de Main Street durante noventa años, y las tiendas de alrededor notaron el cambio rápido. «Nadie quería verlo a oscuras», dice la panadera Ellen Hart." },
      { it: "So the town acted. A community group sold shares for one hundred dollars each. Within two months, six hundred people have bought a piece of their cinema — students, farmers, even visitors from Canada.",
      es: "Así que el pueblo actuó. Un grupo comunitario vendió acciones de cien dólares cada una. En dos meses, seiscientas personas han comprado un trozo de su cine: estudiantes, granjeros y hasta visitantes de Canadá." },
      { it: "The theater has already hired four part-time workers, and local farms will supply the snacks. If ticket sales stay strong, the owners will add a second screen next year.",
      es: "El cine ya ha contratado a cuatro trabajadores a tiempo parcial, y las granjas locales suministrarán los aperitivos. Si la venta de entradas se mantiene fuerte, los propietarios añadirán una segunda pantalla el año que viene." },
      { it: "Economists like the model because the money stays in town. A saved theater brings people downtown in the evening, and every visitor also spends at nearby restaurants.",
      es: "A los economistas les gusta el modelo porque el dinero se queda en el pueblo. Un cine salvado trae gente al centro por la tarde, y cada visitante también gasta en los restaurantes cercanos." },
      { it: "Other small towns have called Montpelier for advice. The new owners always give the same answer: «If the lights are on, the town is alive.»",
      es: "Otros pueblos pequeños han llamado a Montpelier para pedir consejo. Los nuevos propietarios siempre dan la misma respuesta: «Si las luces están encendidas, el pueblo está vivo»." },
    ],
    words: [
      { it: "the owner / the owners", es: "el propietario / los propietarios" },
      { it: "the share / the shares", es: "la acción / las acciones" },
      { it: "to hire (hired)", es: "contratar", note: "en EE. UU. hire = contratar personal; «alquilar» es to rent" },
      { it: "the snack / the snacks", es: "el aperitivo / los aperitivos" },
      { it: "downtown", es: "el centro (de la ciudad)", note: "adverbio: se usa sin «the» — go downtown, work downtown" },
      { it: "ticket sales", es: "la venta de entradas" },
    ],
    questions: [
      { q: "¿Cuánto costaba cada acción del cine?", options: ["Ten dollars", "One hundred dollars", "One thousand dollars", "Nothing"], answer: 1, why: "«A community group sold shares for one hundred dollars each.»" },
      { q: "¿Cuántas personas han comprado una parte del cine?", options: ["Ninety", "Sixteen", "Sixty", "Six hundred"], answer: 3, why: "«Within two months, six hundred people have bought a piece of their cinema…»" },
      { q: "¿Qué harán los propietarios si la venta de entradas se mantiene fuerte?", options: ["They will add a second screen next year", "They will close in winter", "They will sell the building", "They will raise ticket prices"], answer: 0, why: "«If ticket sales stay strong, the owners will add a second screen next year.»" },
      { q: "¿Por qué les gusta este modelo a los economistas?", options: ["Because theaters are fashionable again", "Because tickets are cheap", "Because the money stays in town", "Because cinemas pay fewer taxes"], answer: 2, why: "«Economists like the model because the money stays in town.»" },
    ],
    discuss: [
      { it: "Does your town have a building that everybody loves, like the Capital Theater? Tell us its story.", es: "¿Tu pueblo o ciudad tiene un edificio que todo el mundo quiera, como el Capital Theater? Cuenta su historia." },
      { it: "Would you buy a one-hundred-dollar share of a local business? Which business would you choose?", es: "¿Comprarías una acción de cien dólares de un negocio local? ¿Qué negocio elegirías?" },
    ],
  },

  /* ═══ B1 · 8 — Sports ═══ */
  {
    id: "en-news-b1-08", cat: "sport", level: "B1", place: "Minneapolis", minutes: 3,
    title: "Pond hockey waits for cold nights in Minneapolis",
    titleEs: "El hockey de estanque espera noches frías en Mineápolis",
    lead: {
      it: "In Minneapolis, winter does not officially start in December. It starts when the lakes freeze, the nets come out and pond hockey returns.",
      es: "En Mineápolis, el invierno no empieza oficialmente en diciembre. Empieza cuando los lagos se congelan, salen las porterías y vuelve el hockey de estanque.",
    },
    paragraphs: [
      { it: "Every winter, thousands of players leave the indoor arenas and play on the city's frozen lakes. The tradition has survived a century without electricity or expensive tickets.",
      es: "Cada invierno, miles de jugadores dejan los pabellones cubiertos y juegan en los lagos helados de la ciudad. La tradición ha sobrevivido un siglo sin electricidad ni entradas caras." },
      { it: "This season has tested everyone's patience. December was unusually warm, so the lakes stayed liquid. Organizers have postponed the opening twice, but nobody has given up. «We have waited before,» says rink manager Doug Sullivan. «The ice always comes.»",
      es: "Esta temporada ha puesto a prueba la paciencia de todos. Diciembre fue inusualmente cálido, así que los lagos siguieron líquidos. Los organizadores han aplazado la inauguración dos veces, pero nadie se ha rendido. «Ya hemos esperado otras veces», dice el gestor de la pista Doug Sullivan. «El hielo siempre llega»." },
      { it: "Safety comes first. The tournament will start only after the ice reaches twenty centimeters. If the cold arrives this week, two hundred teams will battle for the golden shovel, the traditional trophy.",
      es: "La seguridad va primero. El torneo empezará solo cuando el hielo alcance veinte centímetros. Si el frío llega esta semana, doscientos equipos lucharán por la pala dorada, el trofeo tradicional." },
      { it: "The rules are simple: four players per side, no goalies, and the last minute counts double. Kids and grandparents often share the same ice at sunset.",
      es: "Las reglas son simples: cuatro jugadores por lado, sin porteros, y el último minuto vale doble. Niños y abuelos suelen compartir el mismo hielo al atardecer." },
      { it: "The city has prepared warming tents and free hot chocolate. If the season is long enough, Minneapolis will host the national pond hockey final in February.",
      es: "La ciudad ha preparado carpas para calentarse y chocolate caliente gratuito. Si la temporada es lo bastante larga, Mineápolis acogerá la final nacional de hockey de estanque en febrero." },
    ],
    words: [
      { it: "the rink", es: "la pista (de hielo)" },
      { it: "frozen / to freeze (froze, frozen)", es: "helado / congelarse", note: "verbo irregular: freeze – froze – frozen" },
      { it: "the goalie / the goalies", es: "el portero / los porteros" },
      { it: "the trophy", es: "el trofeo" },
      { it: "to postpone (postponed)", es: "aplazar, posponer" },
      { it: "the ice", es: "el hielo" },
    ],
    questions: [
      { q: "¿Dónde juegan miles de jugadores cada invierno?", options: ["On the city's frozen lakes", "In modern indoor arenas", "On artificial rinks", "In Canada"], answer: 0, why: "«Every winter, thousands of players leave the indoor arenas and play on the city's frozen lakes.»" },
      { q: "¿Qué han hecho los organizadores esta temporada?", options: ["They have canceled the tournament", "They have moved it indoors", "They have postponed the opening twice", "They have sold the nets"], answer: 2, why: "«Organizers have postponed the opening twice, but nobody has given up.»" },
      { q: "¿Qué ocurrirá si el frío llega esta semana?", options: ["The season will end early", "The lakes will open for swimming", "Nothing will change", "Two hundred teams will battle for the golden shovel"], answer: 3, why: "«If the cold arrives this week, two hundred teams will battle for the golden shovel…»" },
      { q: "¿Qué nos dice la cita de Doug Sullivan sobre la cultura local?", options: ["That people prefer indoor arenas", "That the community trusts winter and waits calmly for the ice", "That hockey is a new sport there", "That the city never organizes events"], answer: 1, why: "«We have waited before… The ice always comes.»" },
    ],
    discuss: [
      { it: "Do you play or watch a sport that depends on the weather? How do people in your country wait for it?", es: "¿Practicas o sigues algún deporte que dependa del clima? ¿Cómo espera la gente en tu país?" },
      { it: "Pond hockey has simple rules and no goalies. Which sport would you simplify, and how?", es: "El hockey de estanque tiene reglas simples y no tiene porteros. ¿Qué deporte simplificarías tú, y cómo?" },
    ],
  },

  /* ═══ B1 · 9 — Society ═══ */
  {
    id: "en-news-b1-09", cat: "societa", level: "B1", place: "Portland", minutes: 3,
    title: "The bike bus: thirty kids pedal to school together",
    titleEs: "El bus bici: treinta niños pedalean juntos a la escuela",
    lead: {
      it: "Every Friday morning in Portland, Oregon, a crowd of bicycles rolls through a quiet street. Thirty students ride to school together, singing. The neighbors call it «the bike bus».",
      es: "Cada viernes por la mañana en Portland, Oregón, una multitud de bicicletas recorre una calle tranquila. Treinta estudiantes van juntos en bici a la escuela, cantando. Los vecinos lo llaman «el bus bici».",
    },
    paragraphs: [
      { it: "The idea started small. Physical education teacher Sam Bennett began riding to school with two students. Now the group has grown to thirty riders, and more families join every month.",
      es: "La idea empezó pequeña. El profesor de educación física Sam Bennett empezó a ir en bici a la escuela con dos estudiantes. Ahora el grupo ha crecido hasta treinta ciclistas, y más familias se unen cada mes." },
      { it: "The route covers four kilometers and stops at six stations, where children wait with their bikes. Parents have painted signs, and one neighbor plays music from his window every Friday.",
      es: "La ruta cubre cuatro kilómetros y para en seis estaciones, donde los niños esperan con sus bicis. Los padres han pintado carteles, y un vecino pone música desde su ventana cada viernes." },
      { it: "The city has noticed. Traffic engineers have installed two protected bike lanes along the route, and drivers have learned to slow down. Police now accompany the group at busy corners.",
      es: "La ciudad se ha dado cuenta. Los ingenieros de tráfico han instalado dos carriles bici protegidos a lo largo de la ruta, y los conductores han aprendido a reducir la velocidad. La policía acompaña ahora al grupo en las esquinas concurridas." },
      { it: "The benefits are clear: kids arrive awake and happy, and the street is calmer. «If it rains, we still ride — we just add jackets,» laughs Bennett.",
      es: "Los beneficios son claros: los niños llegan despiertos y contentos, y la calle está más tranquila. «Si llueve, igualmente pedaleamos; solo añadimos chaquetas», se ríe Bennett." },
      { it: "Other schools have copied the model. If the new safety guide works, even more schools will join next year. The bike bus has no engine, but it moves the whole neighborhood.",
      es: "Otras escuelas han copiado el modelo. Si la nueva guía de seguridad funciona, aún más escuelas se unirán el año que viene. El bus bici no tiene motor, pero mueve a todo el vecindario." },
    ],
    words: [
      { it: "the rider / the riders", es: "el ciclista / los ciclistas" },
      { it: "the route", es: "la ruta, el recorrido" },
      { it: "the station / the stations", es: "la estación / las estaciones", note: "aquí, en broma: los puntos donde se une el grupo" },
      { it: "the bike lane / the bike lanes", es: "el carril bici / los carriles bici" },
      { it: "to slow down", es: "reducir la velocidad", note: "phrasal verb: slow + down" },
      { it: "the engine", es: "el motor" },
    ],
    questions: [
      { q: "¿Quién empezó la idea del bus bici?", options: ["A traffic engineer", "A physical education teacher", "A police officer", "A group of parents"], answer: 1, why: "«Physical education teacher Sam Bennett began riding to school with two students.»" },
      { q: "¿En cuántas estaciones para la ruta antes de llegar a la escuela?", options: ["Six", "Four", "Five", "Sixteen"], answer: 0, why: "«The route covers four kilometers and stops at six stations…»" },
      { q: "¿Qué han instalado los ingenieros de tráfico?", options: ["Traffic lights", "Speed cameras", "Two protected bike lanes", "A new bridge"], answer: 2, why: "«Traffic engineers have installed two protected bike lanes along the route…»" },
      { q: "¿Qué significa que el bus bici «no tiene motor, pero mueve a todo el vecindario»?", options: ["That it pollutes a lot", "That it is too slow", "That it needs gasoline", "That it inspires and connects the whole community"], answer: 3, why: "«The bike bus has no engine, but it moves the whole neighborhood.»" },
    ],
    discuss: [
      { it: "How do kids in your city travel to school? Could a bike bus work where you live?", es: "¿Cómo van a la escuela los niños de tu ciudad? ¿Podría funcionar un bus bici donde vives?" },
      { it: "What would make you ride a bike more often: safer lanes, better weather, or good company?", es: "¿Qué te haría montar en bici más a menudo: carriles más seguros, mejor clima o buena compañía?" },
    ],
  },

  /* ═══ B1 · 10 — Environment ═══ */
  {
    id: "en-news-b1-10", cat: "ambiente", level: "B1", place: "Miami", minutes: 3,
    title: "Miami students grow coral for the dying reefs",
    titleEs: "Estudiantes de Miami cultivan coral para los arrecifes moribundos",
    lead: {
      it: "Off the coast of Miami, the coral reefs have suffered for decades. Now, help is coming from an unusual place: high school classrooms.",
      es: "Frente a la costa de Miami, los arrecifes de coral han sufrido durante décadas. Ahora la ayuda llega de un lugar insólito: las aulas de bachillerato.",
    },
    paragraphs: [
      { it: "Since September, five Miami schools have kept small saltwater tanks in their science labs. Students feed the coral fragments every morning and measure the water like professionals.",
      es: "Desde septiembre, cinco escuelas de Miami han mantenido pequeños acuarios de agua salada en sus laboratorios de ciencias. Los estudiantes alimentan los fragmentos de coral cada mañana y miden el agua como profesionales." },
      { it: "The project, called «coral high school», has already raised nine hundred healthy colonies. When the pieces are big enough, marine biologists attach them to the damaged reef with special cement.",
      es: "El proyecto, llamado «coral high school», ya ha criado novecientas colonias sanas. Cuando los fragmentos son suficientemente grandes, biólogos marinos los fijan al arrecife dañado con un cemento especial." },
      { it: "«The reef protects our beaches from storms, so we protect the reef,» explains marine biologist Susan Bell. «These students have done more for the ocean in one year than most people do in a lifetime.»",
      es: "«El arrecife protege nuestras playas de las tormentas, así que nosotros protegemos el arrecife», explica la bióloga marina Susan Bell. «Estos estudiantes han hecho más por el océano en un año que la mayoría de la gente en toda una vida»." },
      { it: "The data looks good. The young coral has survived heat waves that killed older colonies, and the fish have returned to restored areas. If the water temperature stays stable this summer, the team will plant two thousand more pieces.",
      es: "Los datos se ven bien. El coral joven ha sobrevivido a olas de calor que mataron colonias más viejas, y los peces han vuelto a las zonas restauradas. Si la temperatura del agua se mantiene estable este verano, el equipo plantará dos mil fragmentos más." },
      { it: "The program will expand to twelve schools next year. Students say the best part is simple: they have watched something grow.",
      es: "El programa se ampliará a doce escuelas el año que viene. Los estudiantes dicen que la mejor parte es simple: han visto crecer algo." },
    ],
    words: [
      { it: "the coral", es: "el coral" },
      { it: "the saltwater tank / the saltwater tanks", es: "el acuario de agua salada / los acuarios de agua salada" },
      { it: "the reef / the reefs", es: "el arrecife / los arrecifes" },
      { it: "the heat wave / the heat waves", es: "la ola de calor / las olas de calor" },
      { it: "to raise (raised)", es: "criar, cultivar", note: "raise = criar/cultivar; «subir» es to rise (rose, risen)" },
      { it: "to restore (restored)", es: "restaurar, recuperar" },
    ],
    questions: [
      { q: "¿Dónde cuidan los estudiantes los fragmentos de coral?", options: ["In the ocean", "At home", "In a museum", "In small saltwater tanks at school"], answer: 3, why: "«…five Miami schools have kept small saltwater tanks in their science labs.»" },
      { q: "¿Cuántas colonias sanas ha criado el proyecto?", options: ["Ninety", "Nine hundred", "Nine thousand", "Nine"], answer: 1, why: "«…has already raised nine hundred healthy colonies.»" },
      { q: "¿Por qué los estudiantes protegen el arrecife?", options: ["Because the reef protects their beaches from storms", "Because coral is expensive", "Because tourists dislike coral", "Because the fish are dangerous"], answer: 0, why: "«The reef protects our beaches from storms, so we protect the reef», explica la bióloga." },
      { q: "¿Qué pasará si la temperatura del agua se mantiene estable este verano?", options: ["The program will end", "The students will graduate", "The team will plant two thousand more pieces", "The tanks will close"], answer: 2, why: "«If the water temperature stays stable this summer, the team will plant two thousand more pieces.»" },
    ],
    discuss: [
      { it: "Have you ever seen a coral reef, in real life or on screen? What surprised you most?", es: "¿Has visto alguna vez un arrecife de coral, en persona o en pantalla? ¿Qué te sorprendió más?" },
      { it: "Schools can adopt parks, rivers or reefs. What natural place should your school adopt, and what could students do there?", es: "Los colegios pueden «adoptar» parques, ríos o arrecifes. ¿Qué lugar natural debería adoptar tu escuela, y qué podrían hacer allí los estudiantes?" },
    ],
  },

  /* ═══ B1 · 11 — Health ═══ */
  {
    id: "en-news-b1-11", cat: "salute", level: "B1", place: "Chicago", minutes: 3,
    title: "Chicago doctors now prescribe walks in the park",
    titleEs: "Los médicos de Chicago ahora recetan paseos por el parque",
    lead: {
      it: "In Chicago, a new kind of prescription has appeared in clinics. It has no pills, no price and no side effects. The medicine is a walk in the park.",
      es: "En Chicago ha aparecido un nuevo tipo de receta en las clínicas. No tiene pastillas, ni precio, ni efectos secundarios. La medicina es un paseo por el parque.",
    },
    paragraphs: [
      { it: "Twelve clinics have joined the «nature prescription» program this year. Doctors write down the name of a park, a route and a number of weekly minutes, exactly like a medicine.",
      es: "Doce clínicas se han unido este año al programa de «receta de naturaleza». Los médicos anotan el nombre de un parque, una ruta y un número de minutos semanales, exactamente como una medicina." },
      { it: "The idea is not new, but the results have impressed researchers. Patients who walk in green spaces have reported less stress and better sleep. Some have lowered their blood pressure without extra medication.",
      es: "La idea no es nueva, pero los resultados han impresionado a los investigadores. Los pacientes que caminan en espacios verdes han reportado menos estrés y mejor sueño. Algunos han reducido su presión arterial sin medicación adicional." },
      { it: "«A park is the cheapest pharmacy in the city,» says doctor Angela Brooks. She has prescribed over two hundred walks since January, and her patients keep the papers on their refrigerators.",
      es: "«Un parque es la farmacia más barata de la ciudad», dice la doctora Angela Brooks. Ha recetado más de doscientos paseos desde enero, y sus pacientes guardan los papeles en el refrigerador." },
      { it: "The program works with the city buses: a prescription also includes a free ride to the park. If patients complete their minutes for three months, they will receive a one-year park pass.",
      es: "El programa funciona con los autobuses urbanos: la receta incluye también un viaje gratuito al parque. Si los pacientes completan sus minutos durante tres meses, recibirán un pase anual para los parques." },
      { it: "Chicago has planned similar programs for winter, because cold weather keeps people inside. The next step will be group walks, so nobody walks alone.",
      es: "Chicago ha planeado programas similares para el invierno, porque el frío mantiene a la gente dentro. El siguiente paso serán paseos en grupo, para que nadie camine solo." },
    ],
    words: [
      { it: "the prescription / the prescriptions", es: "la receta / las recetas" },
      { it: "the clinic / the clinics", es: "la clínica / las clínicas" },
      { it: "the patient / the patients", es: "el paciente / los pacientes" },
      { it: "blood pressure", es: "la presión arterial" },
      { it: "the pharmacy", es: "la farmacia" },
      { it: "to prescribe (prescribed)", es: "recetar" },
    ],
    questions: [
      { q: "¿Qué anotan los médicos en esta nueva receta?", options: ["The name of a medicine", "A list of pills", "The name of a park, a route and weekly minutes", "The price of the bus"], answer: 2, why: "«Doctors write down the name of a park, a route and a number of weekly minutes…»" },
      { q: "¿Qué han reportado los pacientes que caminan en espacios verdes?", options: ["More stress", "Worse sleep", "Nothing new", "Less stress and better sleep"], answer: 3, why: "«Patients who walk in green spaces have reported less stress and better sleep.»" },
      { q: "¿Cuántos paseos ha recetado la doctora Brooks desde enero?", options: ["Twenty", "Over two hundred", "Two thousand", "Two"], answer: 1, why: "«She has prescribed over two hundred walks since January…»" },
      { q: "¿Por qué es un parque «la farmacia más barata de la ciudad»?", options: ["Because walking there improves health for free", "Because parks sell cheap medicine", "Because doctors work in parks", "Because pharmacies are closed"], answer: 0, why: "«A park is the cheapest pharmacy in the city», dice la doctora Brooks." },
    ],
    discuss: [
      { it: "Would you follow a walking prescription? What would make you walk more?", es: "¿Seguirías una receta de caminatas? ¿Qué te haría caminar más?" },
      { it: "Green spaces make cities healthier. Does your neighborhood have enough of them? What is missing?", es: "Los espacios verdes hacen las ciudades más sanas. ¿Tu barrio tiene suficientes? ¿Qué falta?" },
    ],
  },

  /* ═══ B1 · 12 — Science ═══ */
  {
    id: "en-news-b1-12", cat: "scienza", level: "B1", place: "Flagstaff", minutes: 3,
    title: "The city that protects the night sky",
    titleEs: "La ciudad que protege el cielo nocturno",
    lead: {
      it: "In Flagstaff, Arizona, you can see the Milky Way from a parking lot. The city has fought light pollution for sixty years, and astronomers say the battle is working.",
      es: "En Flagstaff, Arizona, puedes ver la Vía Láctea desde un estacionamiento. La ciudad ha luchado contra la contaminación lumínica durante sesenta años, y los astrónomos dicen que la batalla está funcionando.",
    },
    paragraphs: [
      { it: "Flagstaff sits below several major observatories. In 1958, the city passed the world's first law against light pollution. Since then, streets have used low, shielded lamps.",
      es: "Flagstaff se encuentra bajo varios grandes observatorios. En 1958, la ciudad aprobó la primera ley del mundo contra la contaminación lumínica. Desde entonces, las calles usan lámparas bajas y apantalladas." },
      { it: "Shielded means the light points down, not up. The night sky over Flagstaff has stayed dark while other cities have turned brighter. On clear nights, residents can count thousands of stars from their backyards.",
      es: "Apantallada significa que la luz apunta hacia abajo, no hacia arriba. El cielo nocturno de Flagstaff se ha mantenido oscuro mientras otras ciudades se han vuelto más brillantes. En noches claras, los residentes pueden contar miles de estrellas desde sus patios." },
      { it: "The darkness has brought unexpected guests. Birds and insects navigate by natural light, so the dark city has become a refuge for them. Biologists have recorded healthier bat populations around the town.",
      es: "La oscuridad ha traído invitados inesperados. Las aves y los insectos se orientan por la luz natural, así que la ciudad oscura se ha convertido en refugio para ellos. Los biólogos han registrado poblaciones de murciélagos más sanas alrededor del pueblo." },
      { it: "The rules are strict but simple. A business will receive a fine if its lights shine upward, and a lamp that is too bright will not be installed at all.",
      es: "Las reglas son estrictas pero simples. Un negocio recibirá una multa si sus luces brillan hacia arriba, y una lámpara demasiado brillante no se instalará en absoluto." },
      { it: "«Our sky is a scientific instrument, and we protect it,» says astronomer Nancy Cole. Other cities have copied the code, from Canada to Japan.",
      es: "«Nuestro cielo es un instrumento científico y lo protegemos», dice la astrónoma Nancy Cole. Otras ciudades han copiado la norma, de Canadá a Japón." },
    ],
    words: [
      { it: "light pollution", es: "la contaminación lumínica" },
      { it: "shielded", es: "apantallado (que dirige la luz hacia abajo)" },
      { it: "the observatory / the observatories", es: "el observatorio / los observatorios" },
      { it: "the lamp / the lamps", es: "la lámpara / las lámparas" },
      { it: "the fine / the fines", es: "la multa / las multas", note: "fine = multa; como adjetivo significa «fino» o «bien»" },
      { it: "to navigate", es: "navegar, orientarse" },
    ],
    questions: [
      { q: "¿Qué aprobó Flagstaff en 1958?", options: ["The world's first law against light pollution", "A new observatory", "A tax on telescopes", "A law against cars"], answer: 0, why: "«In 1958, the city passed the world's first law against light pollution.»" },
      { q: "¿Qué significa que una lámpara sea «shielded»?", options: ["That the lamps are very bright", "That the light points down, not up", "That the streets close at night", "That the lamps are expensive"], answer: 1, why: "«Shielded means the light points down, not up.»" },
      { q: "¿Por qué la ciudad oscura se ha vuelto refugio de aves e insectos?", options: ["Because there is more food", "Because the parks are big", "Because it is warmer there", "Because they navigate by natural light and the city is dark"], answer: 3, why: "«Birds and insects navigate by natural light, so the dark city has become a refuge for them.»" },
      { q: "¿Qué le pasará a un negocio si sus luces brillan hacia arriba?", options: ["Nothing", "The business will grow", "It will receive a fine", "The city will close"], answer: 2, why: "«A business will receive a fine if its lights shine upward…»" },
    ],
    discuss: [
      { it: "Can you see stars from your home? What does the night sky look like in your city?", es: "¿Puedes ver estrellas desde tu casa? ¿Cómo es el cielo nocturno en tu ciudad?" },
      { it: "Should all cities have laws against light pollution? What would change in your street?", es: "¿Deberían todas las ciudades tener leyes contra la contaminación lumínica? ¿Qué cambiaría en tu calle?" },
    ],
  },

  /* ═══ B1 · 13 — Culture ═══ */
  {
    id: "en-news-b1-13", cat: "cultura", level: "B1", place: "Boston", minutes: 3,
    title: "Boston teens learn the slow art of letterpress",
    titleEs: "Los adolescentes de Boston aprenden el arte lento de la imprenta tipográfica",
    lead: {
      it: "In a basement in Boston, a machine from 1902 still prints posters every day. The operators are teenagers, and the ink is on their hands, not on a screen.",
      es: "En un sótano de Boston, una máquina de 1902 todavía imprime pósters cada día. Los operadores son adolescentes, y la tinta está en sus manos, no en una pantalla.",
    },
    paragraphs: [
      { it: "The print shop opened its doors to students three years ago. Since then, more than one hundred teenagers have learned letterpress, the ancient technique of printing with metal type.",
      es: "La imprenta abrió sus puertas a los estudiantes hace tres años. Desde entonces, más de cien adolescentes han aprendido letterpress, la técnica antigua de imprimir con tipos metálicos." },
      { it: "The process is slow and physical. Students arrange metal letters by hand, letter by letter, backwards. Then they roll the ink, pull a heavy lever and wait for the paper. A single poster can take two hours.",
      es: "El proceso es lento y físico. Los estudiantes colocan letras metálicas a mano, letra por letra, al revés. Luego extienden la tinta, bajan una palanca pesada y esperan el papel. Un solo póster puede llevar dos horas." },
      { it: "«You have to slow down, and that is the lesson,» says master printer Alice Grant. «Screens have made everything fast. This machine teaches patience, and patience has become rare.»",
      es: "«Tienes que ir más despacio, y esa es la lección», dice la maestra impresora Alice Grant. «Las pantallas lo han vuelto todo rápido. Esta máquina enseña paciencia, y la paciencia se ha vuelto rara»." },
      { it: "The shop has printed wedding invitations, concert posters and poems. If a class sells enough posters, the money will fund the next course, so the program pays for itself.",
      es: "La imprenta ha impreso invitaciones de boda, pósters de conciertos y poemas. Si una clase vende suficientes pósters, el dinero financiará el siguiente curso, así que el programa se paga solo." },
      { it: "Colleges have noticed the program. Next fall, the shop will offer a workshop for teachers, who will then carry the art back to their own schools.",
      es: "Las universidades se han fijado en el programa. El próximo otoño, la imprenta ofrecerá un taller para profesores, que luego llevarán el arte a sus propias escuelas." },
    ],
    words: [
      { it: "the print shop", es: "la imprenta (el taller)" },
      { it: "letterpress", es: "la imprenta tipográfica", note: "técnica tradicional de imprimir con tipos de metal" },
      { it: "the ink", es: "la tinta" },
      { it: "the metal type", es: "los tipos móviles (de imprenta)" },
      { it: "the lever", es: "la palanca" },
      { it: "patience", es: "la paciencia" },
    ],
    questions: [
      { q: "¿Cuántos adolescentes han aprendido letterpress desde hace tres años?", options: ["More than ten", "More than one hundred", "More than a thousand", "Nobody"], answer: 1, why: "«Since then, more than one hundred teenagers have learned letterpress…»" },
      { q: "¿Cuánto puede tardar un solo póster?", options: ["Two minutes", "Two days", "Two weeks", "Two hours"], answer: 3, why: "«A single poster can take two hours.»" },
      { q: "¿Qué pasará con el dinero si una clase vende suficientes pósters?", options: ["It will fund the next course", "It will go to the city", "It will pay the rent", "It will buy new screens"], answer: 0, why: "«If a class sells enough posters, the money will fund the next course…»" },
      { q: "¿Cuál es «la lección» de la máquina según Alice Grant?", options: ["That old machines are dangerous", "That printing is cheap", "That you have to slow down; the machine teaches patience", "That teenagers should not work"], answer: 2, why: "«You have to slow down, and that is the lesson… This machine teaches patience…»" },
    ],
    discuss: [
      { it: "Handmade things take longer but feel different. What handmade object do you own, or remember from your childhood?", es: "Las cosas hechas a mano tardan más, pero se sienten distintas. ¿Qué objeto hecho a mano tienes, o recuerdas de tu infancia?" },
      { it: "Alice Grant says screens «have made everything fast». Do you agree? What should stay slow?", es: "Alice Grant dice que las pantallas «lo han vuelto todo rápido». ¿Estás de acuerdo? ¿Qué debería seguir siendo lento?" },
    ],
  },

  /* ═══ B1 · 14 — History ═══ */
  {
    id: "en-news-b1-14", cat: "storia", level: "B1", place: "St. Augustine", minutes: 3,
    title: "St. Augustine turns 460 and reopens its past",
    titleEs: "San Agustín cumple 460 años y reabre su pasado",
    lead: {
      it: "St. Augustine, Florida, is the oldest continuously inhabited European city in the United States. This month, the city celebrates its 460th birthday with an old promise.",
      es: "San Agustín, Florida, es la ciudad europea habitada sin interrupción más antigua de Estados Unidos. Este mes, la ciudad celebra sus 460 años con una vieja promesa.",
    },
    paragraphs: [
      { it: "Spanish settlers founded the city in 1565, decades before the first English colony. Although the town has survived hurricanes, fires and three changes of flag, its oldest street still follows the original plan.",
      es: "Colonos españoles fundaron la ciudad en 1565, décadas antes de la primera colonia inglesa. Aunque el pueblo ha sobrevivido a huracanes, incendios y tres cambios de bandera, su calle más antigua sigue el trazado original." },
      { it: "For the birthday, historians have opened a new wing of the museum. Inside, visitors will find letters, maps and a ship's log from the first voyage. Many documents have never been shown before.",
      es: "Para el cumpleaños, los historiadores han abierto una nueva ala del museo. Dentro, los visitantes encontrarán cartas, mapas y un diario de a bordo del primer viaje. Muchos documentos no se habían mostrado nunca." },
      { it: "The highlight is a wooden watchtower that volunteers have rebuilt with eighteenth-century tools. «If you cut the wood the old way, you understand the people,» says carpenter Henry Dawson. His family has lived in the city for six generations.",
      es: "La joya es una atalaya de madera que unos voluntarios han reconstruido con herramientas del siglo XVIII. «Si cortas la madera a la manera antigua, entiendes a la gente», dice el carpintero Henry Dawson. Su familia ha vivido en la ciudad durante seis generaciones." },
      { it: "The city has planned a year of events: concerts on the plaza, night tours of the fort and a reenactment of the landing. Hotels have reported the strongest winter in a decade.",
      es: "La ciudad ha planeado un año de eventos: conciertos en la plaza, visitas nocturnas al fuerte y una recreación del desembarco. Los hoteles han reportado el invierno más fuerte en una década." },
      { it: "If the weather cooperates, the fireworks will light the old tower in March. The mayor's promise is simple: history here is not behind glass.",
      es: "Si el clima acompaña, los fuegos artificiales iluminarán la vieja atalaya en marzo. La promesa del alcalde es simple: la historia aquí no está detrás de un cristal." },
    ],
    words: [
      { it: "the settler / the settlers", es: "el colono / los colonos" },
      { it: "the watchtower", es: "la atalaya, la torre de vigilancia" },
      { it: "the fort", es: "el fuerte" },
      { it: "the reenactment", es: "la recreación histórica", note: "recreate no es «recrear» en el sentido de divertir: es representar un hecho del pasado" },
      { it: "the ship's log", es: "el diario de a bordo" },
      { it: "fireworks", es: "los fuegos artificiales" },
    ],
    questions: [
      { q: "¿En qué año fundaron los colonos españoles la ciudad?", options: ["In 1656", "In 1958", "In 1565", "In 1780"], answer: 2, why: "«Spanish settlers founded the city in 1565, decades before the first English colony.»" },
      { q: "¿Qué han abierto los historiadores para el cumpleaños?", options: ["A new wing of the museum", "A new hotel", "A new fort", "A new school"], answer: 0, why: "«For the birthday, historians have opened a new wing of the museum.»" },
      { q: "¿Con qué herramientas han reconstruido los voluntarios la atalaya?", options: ["Modern machines", "Eighteenth-century tools", "Plastic wood", "Metal beams"], answer: 1, why: "«…volunteers have rebuilt with eighteenth-century tools.»" },
      { q: "¿Qué significa que «la historia aquí no está detrás de un cristal»?", options: ["That the museum is closed", "That the glass is broken", "That the buildings are all modern", "That history is part of everyday life in the city"], answer: 3, why: "«The mayor's promise is simple: history here is not behind glass.»" },
    ],
    discuss: [
      { it: "What is the oldest building in your city? Have you ever visited it?", es: "¿Cuál es el edificio más antiguo de tu ciudad? ¿Lo has visitado alguna vez?" },
      { it: "Volunteers rebuilt the watchtower with eighteenth-century tools. Would you like to learn a craft from the past? Which one?", es: "Unos voluntarios reconstruyeron la atalaya con herramientas del siglo XVIII. ¿Te gustaría aprender un oficio del pasado? ¿Cuál?" },
    ],
  },

  /* ═══ B1 · 15 — Society ═══ */
  {
    id: "en-news-b1-15", cat: "societa", level: "B1", place: "Albuquerque", minutes: 3,
    title: "Grandmothers open the best classroom in Albuquerque",
    titleEs: "Unas abuelas abren la mejor aula de Albuquerque",
    lead: {
      it: "Every Sunday morning, a community center in Albuquerque smells like chile and fresh bread. The teachers are grandmothers, and their subject is memory.",
      es: "Cada domingo por la mañana, un centro comunitario de Albuquerque huele a chile y a pan recién hecho. Las profesoras son abuelas, y su asignatura es la memoria.",
    },
    paragraphs: [
      { it: "The program has run for two years under the name «Kitchen of Memories». Retired grandmothers teach traditional New Mexican recipes to young neighbors, and every class ends with a shared meal.",
      es: "El programa funciona desde hace dos años bajo el nombre de «Cocina de Recuerdos». Unas abuelas jubiladas enseñan recetas tradicionales de Nuevo México a vecinos jóvenes, y cada clase termina con una comida compartida." },
      { it: "The idea began when Ruth Parker noticed that her grandchildren could not name the dishes she grew up with. «They knew every pizza app, but they had never tasted real posole,» she says.",
      es: "La idea surgió cuando Ruth Parker notó que sus nietos no sabían nombrar los platos con los que ella había crecido. «Conocían todas las apps de pizza, pero nunca habían probado el pozole de verdad», dice." },
      { it: "The classes have grown from four students to fifty. Participants have learned to make tamales, tortillas and red chile sauce. Along the way, they have also heard family stories that no cookbook contains.",
      es: "Las clases han crecido de cuatro estudiantes a cincuenta. Los participantes han aprendido a hacer tamales, tortillas y salsa de chile rojo. Por el camino, también han oído historias familiares que ningún libro de cocina contiene." },
      { it: "The city has noticed the social effect. Older participants have reported less loneliness, and younger ones now greet their neighbors by name. If the trend continues, the program will open a second kitchen next year.",
      es: "La ciudad ha notado el efecto social. Los participantes mayores han reportado menos soledad, y los más jóvenes ahora saludan a sus vecinos por su nombre. Si la tendencia continúa, el programa abrirá una segunda cocina el año que viene." },
      { it: "The grandmothers have one rule for new students: taste everything before you ask questions. «If you cook with love, the recipe will forgive your mistakes,» laughs Parker.",
      es: "Las abuelas tienen una regla para los estudiantes nuevos: prueba todo antes de preguntar. «Si cocinas con amor, la receta perdonará tus errores», se ríe Parker." },
    ],
    words: [
      { it: "the grandmother / the grandmothers", es: "la abuela / las abuelas" },
      { it: "the recipe / the recipes", es: "la receta / las recetas" },
      { it: "the dish / the dishes", es: "el plato / los platos", note: "dish = plato de comida; «lavar los platos» es to do the dishes" },
      { it: "the posole", es: "el pozole (guiso tradicional de maíz)" },
      { it: "loneliness", es: "la soledad" },
      { it: "the cookbook", es: "el libro de cocina" },
    ],
    questions: [
      { q: "¿Cuánto tiempo lleva funcionando el programa?", options: ["Two years", "Two months", "Twenty years", "Two weeks"], answer: 0, why: "«The program has run for two years…»" },
      { q: "¿Qué notó Ruth Parker cuando surgió la idea?", options: ["That her grandchildren cooked every day", "That the center was too small", "That her grandchildren could not name the dishes she grew up with", "That posole was too expensive"], answer: 2, why: "«…her grandchildren could not name the dishes she grew up with.»" },
      { q: "¿Qué efecto social ha notado la ciudad?", options: ["Young people have left the city", "Restaurants have closed", "Nothing has changed", "Older participants have reported less loneliness"], answer: 3, why: "«Older participants have reported less loneliness, and younger ones now greet their neighbors by name.»" },
      { q: "¿Qué quiere decir Parker con que «la receta perdonará tus errores»?", options: ["That recipes never fail", "That cooking with love matters more than perfection", "That students make too many mistakes", "That grandmothers never make mistakes"], answer: 1, why: "«If you cook with love, the recipe will forgive your mistakes», se ríe Parker." },
    ],
    discuss: [
      { it: "What dish from your family would you teach a stranger? Who taught it to you?", es: "¿Qué plato de tu familia le enseñarías a un desconocido? ¿Quién te lo enseñó a ti?" },
      { it: "Apps deliver food in minutes, but some recipes take a whole Sunday. What is worth the wait?", es: "Las apps entregan comida en minutos, pero algunas recetas llevan un domingo entero. ¿Qué vale la espera?" },
    ],
  },
];
