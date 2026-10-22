/* ── EN · Notizie B2 · batch B (v9.39) ───────────────────────────────
   American English news adapted to B2, Voice of America Learning
   English method. 100% original didactic content. Body: 5 short
   paragraphs, 210-245 words, second and third conditionals +
   passive voice + phrasal verbs. Fields `.it` = English (study
   language), `.es` = Spanish. Ids en-news-b2-04…15. */

import type { NewsItem } from "../../news";

export const EN_NEWS_B2B: NewsItem[] = [

  /* ═══ B2 · 4 — Technology ═══ */
  {
    id: "en-news-b2-04", cat: "tecnologia", level: "B2", place: "Detroit", minutes: 4,
    title: "Repair buses give old phones a second life",
    titleEs: "Buses de reparación le dan una segunda vida a los teléfonos viejos",
    lead: {
      it: "Two yellow school buses are parked outside Detroit libraries every weekend. They carry no passengers. They carry screwdrivers, spare parts and volunteers who fix what the city throws away.",
      es: "Dos autobuses escolares amarillos se estacionan cada fin de semana frente a las bibliotecas de Detroit. No llevan pasajeros. Llevan destornilladores, repuestos y voluntarios que reparan lo que la ciudad tira a la basura.",
    },
    paragraphs: [
      { it: "The «Repair Roll» program was launched in September by a neighborhood coalition. Residents bring broken phones and laptops to the buses, and volunteers try to bring the machines back to life. If a device cannot be saved, its parts are sorted and reused. «If we fixed half of what people carry in, the city would keep tons of waste out of the ground,» says coordinator Marcus Hale.",
      es: "El programa «Repair Roll» fue lanzado en septiembre por una coalición de barrios. Los vecinos llevan a los buses teléfonos y portátiles rotos, y los voluntarios intentan devolver las máquinas a la vida. Si un aparato no puede salvarse, sus piezas se clasifican y se reutilizan. «Si arregláramos la mitad de lo que la gente trae, la ciudad mantendría toneladas de residuos fuera del suelo», dice el coordinador Marcus Hale." },
      { it: "The numbers are impressive. Since fall, more than nine hundred devices have been examined, and nearly eight in ten were repaired on the spot. Batteries are replaced, screens are glued back, and corroded cables are cleaned with patience no store counter offers.",
      es: "Los números impresionan. Desde el otoño, se han examinado más de novecientos aparatos, y casi ocho de cada diez fueron reparados en el acto. Las baterías se cambian, las pantallas se vuelven a pegar y los cables corroídos se limpian con una paciencia que ningún mostrador de tienda ofrece." },
      { it: "The buses also hand out refurbished phones to families that cannot afford new ones. About one in five households in the city still lacks internet access, and a working phone is often the only bridge to school forms, job applications and telehealth visits.",
      es: "Los buses también reparten teléfonos reacondicionados entre familias que no pueden pagar unos nuevos. Aproximadamente uno de cada cinco hogares de la ciudad sigue sin acceso a internet, y un teléfono que funciona suele ser el único puente hacia los formularios escolares, las solicitudes de empleo y las teleconsultas." },
      { it: "Every visit ends with a free mini-lesson, so visitors learn to fix things on their own. Teenagers who show up «just to watch» end up holding a screwdriver. «If somebody had run a bus like this when I was fifteen, I would have chosen a different school,» laughs nineteen-year-old Jake Palmer.",
      es: "Cada visita termina con una minilección gratuita, para que los visitantes aprendan a reparar por su cuenta. Los adolescentes que se acercan «solo a mirar» acaban sujetando un destornillador. «Si alguien hubiera puesto en marcha un bus así cuando yo tenía quince años, habría elegido otra escuela», se ríe Jake Palmer, de diecinueve años." },
      { it: "The fleet could grow soon. If the city council approves the spring budget, three more buses will be painted yellow, and the program's oldest rule will travel with them: nobody is turned away, and nobody pays a cent.",
      es: "La flota podría crecer pronto. Si el concejo municipal aprueba el presupuesto de primavera, se pintarán de amarillo tres buses más, y la regla más antigua del programa viajará con ellos: a nadie se le rechaza y nadie paga un centavo." },
    ],
    words: [
      { it: "the device / the devices", es: "el aparato / los aparatos", note: "device = aparato o dispositivo; no confundas con la «divisa» (currency)" },
      { it: "to refurbish (refurbished)", es: "reacondicionar, restaurar" },
      { it: "the household / the households", es: "el hogar / los hogares" },
      { it: "to hand out", es: "repartir, entregar", note: "hand out = repartir; para «salir a pasear» se usa go out" },
      { it: "to turn away (turned away)", es: "rechazar, no atender", note: "en pasiva: «nobody is turned away» = no se rechaza a nadie" },
      { it: "the fleet", es: "la flota (aquí, humorístico: los buses)" },
    ],
    questions: [
      { q: "¿Quién puso en marcha el programa «Repair Roll»?", options: ["A telephone company", "A neighborhood coalition", "The city libraries", "A group of students"], answer: 1, why: "El texto lo dice directamente: «program was launched in September by a neighborhood coalition»." },
      { q: "¿Cuántos dispositivos han sido examinados desde el otoño?", options: ["About ninety", "About nine", "About nine hundred", "About nine thousand"], answer: 2, why: "«more than nine hundred devices have been examined, and nearly eight in ten were repaired on the spot»." },
      { q: "¿Por qué un teléfono que funciona es tan importante para muchas familias de Detroit?", options: ["Because it is often the only bridge to school forms, job applications and telehealth visits", "Because new phones are not sold in the city", "Because libraries only lend phones", "Because internet at home is free"], answer: 0, why: "La clave está en la conexión que describe el texto: «a working phone is often the only bridge to school forms, job applications and telehealth visits»." },
      { q: "¿Qué sugiere la cita de Jake Palmer sobre el efecto del programa?", options: ["That the buses arrived too late for him", "That he would have preferred a different school anyway", "That only teenagers benefit from the program", "That the experience opened a path he had not imagined"], answer: 3, why: "«If somebody had run a bus like this when I was fifteen, I would have chosen a different school» sugiere que el programa le habría cambiado las decisiones de vida." },
    ],
    discuss: [
      { it: "Have you ever repaired something instead of throwing it away? What was it, and how did it go?", es: "¿Has reparado alguna vez algo en lugar de tirarlo? ¿Qué era y cómo te fue?" },
      { it: "If your city had a repair bus, would you volunteer or take a device? Which skill would you teach?", es: "Si tu ciudad tuviera un bus de reparación, ¿te ofrecerías como voluntario o llevarías un aparato? ¿Qué habilidad enseñarías?" },
    ],
  },

  /* ═══ B2 · 5 — Environment ═══ */
  {
    id: "en-news-b2-05", cat: "ambiente", level: "B2", place: "Bangor", minutes: 4,
    title: "In Maine, a river is allowed to run again",
    titleEs: "En Maine, un río recibe permiso para correr de nuevo",
    lead: {
      it: "For one hundred and six years, a concrete wall blocked the Coldwater River a few miles from Bangor. Last summer the wall came down, and the water remembered its old road.",
      es: "Durante ciento seis años, un muro de hormigón bloqueó el río Coldwater a pocos kilómetros de Bangor. El verano pasado el muro cayó, y el agua recordó su camino de siempre.",
    },
    paragraphs: [
      { it: "The dam was built in 1918 to power a sawmill that closed in the 1950s. Long after the mill shut down, the wall stayed, holding back the current and the fish that once crowded the river. The pond behind it became part of local memory.",
      es: "La presa fue construida en 1918 para alimentar un aserradero que cerró en los años cincuenta. Mucho después de que el aserradero cerrara, el muro siguió ahí, conteniendo la corriente y los peces que antes abarrotaban el río. El estanque que dejó detrás se volvió parte de la memoria local." },
      { it: "Removal was finished in July. The concrete was torn out piece by piece, and the channel was cleared of a century of mud. Within weeks, the river found its former bed, and cold water began to move past downtown Bangor.",
      es: "Los trabajos de demolición terminaron en julio. El hormigón fue arrancado pieza a pieza y el cauce fue limpiado de un siglo de lodo. En pocas semanas, el río encontró su lecho antiguo y el agua fría volvió a pasar junto al centro de Bangor." },
      { it: "Biologists are counting winners. «If the dam had stayed up, the salmon would have disappeared from this stretch forever,» says fisheries biologist Laura Bennett. Her team has counted young salmon above the old dam site for the first time in sixty years, and herons have moved in as if they had read the menu.",
      es: "Los biólogos ya cuentan a los ganadores. «Si la presa se hubiera mantenido en pie, el salmón habría desaparecido de este tramo para siempre», dice la bióloga pesquera Laura Bennett. Su equipo ha contado salmones jóvenes sobre el antiguo emplazamiento de la presa por primera vez en sesenta años, y las garzas se han instalado como si hubieran leído el menú." },
      { it: "Not everybody celebrated. The pond was loved by kayakers and families whose cabins face its water. «If we had known how empty the shoreline would look, we would have asked for a slower goodbye,» admits cabin owner Carol Dunn. Engineers answer that the pond was dying anyway, filled by the mud the river dropped.",
      es: "No todo el mundo lo celebró. El estanque era querido por piragüistas y familias cuyas cabañas miran a sus aguas. «Si hubiéramos sabido lo vacía que se vería la orilla, habríamos pedido una despedida más lenta», admite Carol Dunn, dueña de una cabaña. Los ingenieros responden que el estanque moría de todos modos, colmatado por el lodo que el río depositaba." },
      { it: "The experiment will be watched far away. Similar walls are being studied upriver, and young trees planted along the banks will shade the water as they grow. «If you gave rivers time, they would heal faster than we expect,» says Bennett, «but you have to leave them alone.»",
      es: "El experimento será observado desde lejos. Se estudian muros similares río arriba, y los árboles jóvenes plantados en las orillas darán sombra al agua a medida que crezcan. «Si les dieras tiempo a los ríos, sanarían más rápido de lo que esperamos», dice Bennett, «pero hay que dejarlos en paz»." },
    ],
    words: [
      { it: "the dam", es: "la presa, la represa" },
      { it: "the salmon", es: "el salmón" },
      { it: "to shut down (shut down)", es: "cerrar (una fábrica, una máquina)" },
      { it: "to tear out (torn out)", es: "arrancar", note: "tear es irregular: tear, tore, torn" },
      { it: "the shoreline", es: "la línea de costa, la orilla" },
      { it: "the bank / the banks", es: "la orilla / las orillas", note: "bank = orilla de un río; el «banco» financiero se escribe igual: el contexto decide" },
    ],
    questions: [
      { q: "¿Para qué se construyó la presa en 1918?", options: ["To protect the town from floods", "To create an artificial lake", "To power a sawmill", "To stop the salmon"], answer: 2, why: "«The dam was built in 1918 to power a sawmill that closed in the 1950s»." },
      { q: "¿Qué ha encontrado el equipo de Laura Bennett sobre el antiguo emplazamiento de la presa?", options: ["Young salmon have been counted there for the first time in sixty years", "The river bed was empty", "No fish survived the removal", "Only herons returned"], answer: 0, why: "«Her team has counted young salmon above the old dam site for the first time in sixty years»." },
      { q: "¿Por qué no todo el mundo celebró la demolición?", options: ["Because electricity prices rose", "Because downtown lost its water", "Because the sawmill reopened", "Because kayakers and cabin families loved the artificial pond"], answer: 3, why: "El texto explica el afecto por el estanque: «The pond was loved by kayakers and families whose cabins face its water»." },
      { q: "¿Qué idea quiere transmitir Bennett con su cita final?", options: ["That rivers need human management forever", "That rivers recover when we step back and leave them alone", "That more dams should be built", "That the experiment failed"], answer: 1, why: "«If you gave rivers time, they would heal faster than we expect» transmite la idea de que la naturaleza se recupera si se la deja en paz." },
    ],
    discuss: [
      { it: "A dam was removed so a river could run free. Can you think of another case where «giving nature time» worked?", es: "Se eliminó una presa para que un río corriera libre. ¿Se te ocurre otro caso donde «darle tiempo a la naturaleza» haya funcionado?" },
      { it: "Not everyone celebrated the dam removal. How should cities balance progress and memory?", es: "No todo el mundo celebró la demolición de la presa. ¿Cómo deberían las ciudades equilibrar el progreso y la memoria?" },
    ],
  },

  /* ═══ B2 · 6 — Health ═══ */
  {
    id: "en-news-b2-06", cat: "salute", level: "B2", place: "Cleveland", minutes: 4,
    title: "Cleveland schools test a later morning bell",
    titleEs: "Escuelas de Cleveland prueban una campana matinal más tarde",
    lead: {
      it: "Teenagers are famous for sleeping through alarms. This year, two high schools in Cleveland are testing a gentler solution: first period at eight thirty instead of seven fifteen.",
      es: "Los adolescentes son famosos por dormir con la alarma sonando. Este año, dos institutos de Cleveland prueban una solución más amable: la primera clase a las ocho y media en vez de las siete y cuarto.",
    },
    paragraphs: [
      { it: "The science is not new. Doctors have argued for two decades that the teenage brain runs on a delayed clock: melatonin, the hormone that signals sleep, is released about two hours later than in adults. «You cannot lecture a biology problem away,» says pediatrician Emily Shaw.",
      es: "La ciencia no es nueva. Los médicos llevan dos décadas defendiendo que el cerebro adolescente funciona con un reloj atrasado: la melatonina, la hormona que anuncia el sueño, se libera unas dos horas más tarde que en los adultos. «No se puede dar una charla para arreglar un problema de biología», dice la pediatra Emily Shaw." },
      { it: "The pilot started in August with two volunteer schools, which pushed back their first bell to eight thirty. Attendance is tracked digitally, and the first months show a clear trend: late arrivals fell by a third, and teachers report fewer heads on desks during first period.",
      es: "El piloto empezó en agosto con dos escuelas voluntarias, que retrasaron su primera campana hasta las ocho y media. La asistencia se controla de forma digital, y los primeros meses muestran una tendencia clara: las llegadas tarde cayeron un tercio, y los profesores reportan menos cabezas sobre los pupitres en la primera hora." },
      { it: "«If every high school in the district moved its bell, thousands of teenagers would gain an hour of sleep,» says Shaw. An hour, her studies suggest, is the difference between dozing off in geometry and finishing the homework at a human hour.",
      es: "«Si cada instituto del distrito retrasara su campana, miles de adolescentes ganarían una hora de sueño», dice Shaw. Una hora, sugieren sus estudios, es la diferencia entre quedarse dormido en geometría y terminar los deberes a una hora humana." },
      { it: "The obstacles are practical, not medical. School buses serve three different schools with one route, coaches fear that practice would be cut short under autumn darkness, and many parents start work at seven. «If the bus schedules had been redesigned first, the transition would have gone more smoothly,» admits district planner Alan Price.",
      es: "Los obstáculos son prácticos, no médicos. Los autobuses escolares atienden a tres escuelas distintas con una sola ruta, los entrenadores temen que la práctica se acorte en la oscuridad del otoño, y muchos padres empiezan a trabajar a las siete. «Si primero se hubieran rediseñado los horarios de los autobuses, la transición habría sido más fluida», admite Alan Price, planificador del distrito." },
      { it: "The school board will vote in June. If the numbers still look strong, the later start could be extended to all district high schools by 2027, and Cleveland would join a short list of cities that treated sleep as school policy.",
      es: "La junta escolar votará en junio. Si los números siguen siendo sólidos, el inicio más tarde podría extenderse a todos los institutos del distrito para 2027, y Cleveland se uniría a la corta lista de ciudades que trataron el sueño como política escolar." },
    ],
    words: [
      { it: "melatonin", es: "la melatonina (hormona del sueño)" },
      { it: "attendance", es: "la asistencia" },
      { it: "to track (is tracked)", es: "registrar, hacer seguimiento de" },
      { it: "to doze off (dozing off)", es: "quedarse dormido, dar una cabezada" },
      { it: "to cut short (cut short)", es: "acortar (una actividad)" },
      { it: "the school board", es: "la junta escolar (órgano de gobierno del distrito)" },
    ],
    questions: [
      { q: "¿Cuánto más tarde se libera la melatonina en los adolescentes que en los adultos?", options: ["About two hours later", "About two minutes later", "About two days later", "About twelve hours later"], answer: 0, why: "«melatonin, the hormone that signals sleep, is released about two hours later than in adults»." },
      { q: "¿Cuánto cayeron las llegadas tarde en los primeros meses?", options: ["By half", "By a quarter", "Not at all", "By a third"], answer: 3, why: "«late arrivals fell by a third, and teachers report fewer heads on desks during first period»." },
      { q: "¿Por qué los obstáculos del cambio son «prácticos y no médicos»?", options: ["Because doctors disagree about sleep", "Because buses, sports practice and parents' work schedules are hard to move", "Because students refuse to sleep more", "Because the pilot schools failed"], answer: 1, why: "El texto enumera las causas prácticas: «School buses serve three different schools with one route, coaches fear that practice would be cut short under autumn darkness, and many parents start work at seven»." },
      { q: "¿Qué significa que Cleveland «tratara el sueño como política escolar»?", options: ["That the district ignored medical advice", "That students now sleep at school", "That the school schedule was changed based on sleep science", "That sleep is forbidden at school"], answer: 2, why: "La frase final resume el proyecto: la ciudad «would join a short list of cities that treated sleep as school policy», es decir, adaptar el horario a la ciencia del sueño." },
    ],
    discuss: [
      { it: "How much sleep did you get when you were a teenager? Would a later school bell have helped you?", es: "¿Cuánto dormías cuando eras adolescente? ¿Te habría ayudado una campana escolar más tarde?" },
      { it: "If your school or company changed its schedule, what would be the hardest part to move: buses, sports or family routines?", es: "Si tu escuela o empresa cambiara de horario, ¿qué sería lo más difícil de mover: los autobuses, el deporte o las rutinas familiares?" },
    ],
  },

  /* ═══ B2 · 7 — History ═══ */
  {
    id: "en-news-b2-07", cat: "storia", level: "B2", place: "Omaha", minutes: 4,
    title: "Omaha opens the files of the orphan trains",
    titleEs: "Omaha abre los archivos de los trenes de huérfanos",
    lead: {
      it: "Between 1854 and 1929, around two hundred thousand children were carried out of East Coast cities and placed with farm families across the Midwest. This month, the paper trail of those «orphan trains» went public in Omaha.",
      es: "Entre 1854 y 1929, unos doscientos mil niños fueron sacados de las ciudades de la Costa Este y entregados a familias de granjeros por todo el Medio Oeste. Este mes, el rastro documental de aquellos «trenes de huérfanos» se hizo público en Omaha.",
    },
    paragraphs: [
      { it: "The orphan trains were run by charity agencies in New York. At each stop, children were lined up on station platforms, and farmers inspected hands and teeth before choosing a child. Its defenders called it a hard system, but better than the streets; the children's letters tell a more complicated story.",
      es: "Los trenes de huérfanos eran operados por agencias de caridad de Nueva York. En cada parada, los niños se formaban en los andenes de las estaciones, y los granjeros examinaban manos y dientes antes de elegir a un niño. Sus defensores lo llamaban un sistema duro, pero mejor que la calle; las cartas de los propios niños cuentan una historia más complicada." },
      { it: "Nebraska was a busy destination, and its records were boxed and forgotten in a courthouse basement. A team of thirty volunteers has now digitized fifteen thousand pages: arrival lists, medical cards, letters that were never delivered, and photographs that were never claimed.",
      es: "Nebraska era un destino concurrido, y sus registros acabaron encajonados y olvidados en el sótano de un juzgado. Un equipo de treinta voluntarios ha digitalizado ahora quince mil páginas: listas de llegada, fichas médicas, cartas que nunca fueron entregadas y fotografías que nadie reclamó." },
      { it: "Descendants arrive from as far as California. «If these files had been lost, my mother's whole childhood would have stayed a rumor,» says Robert Ellis, who looked up his grandmother's name in ten minutes. She had traveled west at age nine with a paper tag sewn to her coat.",
      es: "Los descendientes llegan desde lugares tan lejanos como California. «Si estos archivos se hubieran perdido, toda la infancia de mi madre habría seguido siendo un rumor», dice Robert Ellis, que buscó el nombre de su abuela en diez minutos. Ella viajó hacia el oeste a los nueve años con una etiqueta de papel cosida al abrigo." },
      { it: "The archivists expect difficult reading. Some letters describe kind families; others describe children who were worked like hired men and were never sent to school. «If you read ten of these letters, you would hear ten different Americas,» says the director. Nothing will be edited, because the collection was donated on the condition that it be shown complete.",
      es: "Los archiveros esperan una lectura difícil. Algunas cartas describen familias amables; otras describen niños que fueron explotados como jornaleros y a los que nunca enviaron a la escuela. «Si leyeras diez de estas cartas, oirías diez Américas distintas», dice el director. Nada será editado, porque la colección fue donada con la condición de mostrarse completa." },
      { it: "In April, the museum will open a small exhibit built around the letters, and actors will read a selection aloud in the old station. Visitors under twelve are admitted free — the same age, a librarian noted, as many travelers.",
      es: "En abril, el museo inaugurará una pequeña exposición construida en torno a las cartas, y unos actores leerán una selección en voz alta en la estación antigua. Los menores de doce años entran gratis: la misma edad, señaló una bibliotecaria, que la de muchos viajeros." },
    ],
    words: [
      { it: "the orphan / the orphan trains", es: "el huérfano / los trenes de huérfanos" },
      { it: "the courthouse", es: "el juzgado, el palacio de justicia", note: "court + house: en EE. UU. es el edificio de los tribunales" },
      { it: "to digitize (digitized)", es: "digitalizar" },
      { it: "the descendant / the descendants", es: "el descendiente / los descendientes" },
      { it: "to look up (looked up)", es: "buscar (un nombre, un dato) en un registro" },
      { it: "the exhibit", es: "la exposición" },
    ],
    questions: [
      { q: "¿Cómo se seleccionaba a los niños en las estaciones?", options: ["By a lottery", "By their school grades", "By their age", "Farmers inspected hands and teeth before choosing a child"], answer: 3, why: "«children were lined up on station platforms, and farmers inspected hands and teeth before choosing a child»." },
      { q: "¿Cuántas páginas ha digitalizado el equipo de voluntarios?", options: ["Five thousand", "Fifteen thousand", "Fifty thousand", "Fifteen hundred"], answer: 1, why: "«A team of thirty volunteers has now digitized fifteen thousand pages»." },
      { q: "¿Por qué «nada será editado» en la colección?", options: ["Because the letters are unreadable", "Because the museum has no time", "Because the collection was donated on the condition that it be shown complete", "Because the families asked for privacy"], answer: 2, why: "«the collection was donated on the condition that it be shown complete»." },
      { q: "¿Qué sugiere la frase del director sobre diez cartas y diez Américas distintas?", options: ["That every child's experience of the orphan trains was different", "That the letters repeat the same story", "That the archive is useless", "That children wrote only ten letters"], answer: 0, why: "«If you read ten of these letters, you would hear ten different Americas» sugiere que cada historia fue distinta." },
    ],
    discuss: [
      { it: "Family history often hides in basements and attics. What old document would you like to find, and why?", es: "La historia familiar suele esconderse en sótanos y desvanes. ¿Qué documento viejo te gustaría encontrar, y por qué?" },
      { it: "The records will be shown complete, without edits. Do you think difficult history should be published as it is? Why?", es: "Los archivos se mostrarán completos, sin ediciones. ¿Crees que la historia difícil debería publicarse tal como fue? ¿Por qué?" },
    ],
  },

  /* ═══ B2 · 8 — Sports ═══ */
  {
    id: "en-news-b2-08", cat: "sport", level: "B2", place: "Scottsdale", minutes: 4,
    title: "Pickleball and tennis argue over the morning courts",
    titleEs: "El pickleball y el tenis se disputan las canchas de la mañana",
    lead: {
      it: "The loudest argument in Scottsdale, Arizona, does not happen in a stadium. It happens on the public courts at sunrise, between a felt ball and a plastic one with holes.",
      es: "La discusión más ruidosa de Scottsdale, Arizona, no ocurre en un estadio. Ocurre en las canchas públicas al amanecer, entre una pelota de fieltro y una de plástico con agujeros.",
    },
    paragraphs: [
      { it: "Pickleball was invented on a summer afternoon in 1965, when a family on Bainbridge Island ran out of badminton equipment and lowered a net. Since then the sport has quietly taken over the country: courts are booked before sunrise, and retirees now compete with twelve-year-olds for playing time.",
      es: "El pickleball fue inventado en una tarde de verano de 1965, cuando una familia de la isla Bainbridge se quedó sin equipo de bádminton y bajó la red. Desde entonces, el deporte se ha apoderado del país en silencio: las canchas se reservan antes del amanecer, y los jubilados compiten ahora con niños de doce años por el tiempo de juego." },
      { it: "The success has produced a noise problem and a space problem. The plastic ball makes a sharp pop, and twelve courts in Scottsdale were repainted last year for pickleball only. Tennis players, who waited forty years for their morning slots, feel pushed out.",
      es: "El éxito ha producido un problema de ruido y un problema de espacio. La pelota de plástico hace un «pop» agudo, y doce canchas de Scottsdale fueron repintadas el año pasado solo para pickleball. Los tenistas, que esperaron cuarenta años sus franjas de la mañana, se sienten desplazados." },
      { it: "The city has been asked to mediate. «If we built sound walls around three courts, both groups would share the park without shouting,» says tennis coach Gail Sutton. Pickleball fans answer that their sport is easier on aging knees, and that tennis was once the loud new game too.",
      es: "Se ha pedido a la ciudad que medie. «Si construyéramos muros acústicos alrededor de tres canchas, ambos grupos compartirían el parque sin gritar», dice la entrenadora de tenis Gail Sutton. Los aficionados al pickleball responden que su deporte es más amable con las rodillas que envejecen, y que el tenis también fue alguna vez el juego nuevo y ruidoso." },
      { it: "A temporary schedule has been drawn up: pickleball before ten, tennis after five, and shared hours between. Quieter paddles are being tested this season. «If we had sat down together a year earlier, we would have spared ourselves a very loud summer,» admits parks manager Brian Cobb.",
      es: "Se ha redactado un horario temporal: pickleball antes de las diez, tenis después de las cinco y horas compartidas entremedio. Esta temporada se prueban palas más silenciosas. «Si nos hubiéramos sentado juntos un año antes, nos habríamos ahorrado un verano muy ruidoso», admite el director de parques Brian Cobb." },
      { it: "Meanwhile, the courts have never been so full. Grandfathers teach granddaughters the drop shot at six forty-five, and the park's oldest referee now calls pickleball «chess at the speed of ping-pong». Nobody in Scottsdale is giving up their mornings.",
      es: "Mientras tanto, las canchas nunca habían estado tan llenas. Los abuelos enseñan a las nietas el golpe suave a las seis y cuarenta y cinco, y el árbitro más veterano del parque llama ahora al pickleball «ajedrez a la velocidad del ping-pong». Nadie en Scottsdale piensa renunciar a sus mañanas." },
    ],
    words: [
      { it: "the court / the courts", es: "la cancha / las canchas" },
      { it: "the paddle", es: "la pala (de pickleball)" },
      { it: "to take over (taken over)", es: "apoderarse de, adueñarse de" },
      { it: "the slot", es: "la franja, el horario disponible" },
      { it: "to push out (pushed out)", es: "desplazar, echar fuera" },
      { it: "to draw up (drawn up)", es: "redactar, preparar (un plan)", note: "draw up = redactar; para «dibujar» se usa draw a la carta" },
    ],
    questions: [
      { q: "¿Cuándo y dónde se inventó el pickleball?", options: ["In 1956, in Texas", "In 1965, on Bainbridge Island", "In 1929, in New York", "In 2001, in Arizona"], answer: 1, why: "«Pickleball was invented on a summer afternoon in 1965, when a family on Bainbridge Island ran out of badminton equipment»." },
      { q: "¿Qué pasó con doce canchas de Scottsdale el año pasado?", options: ["They were repainted for pickleball only", "They were closed at night", "They were sold to clubs", "They were covered with sound walls"], answer: 0, why: "«twelve courts in Scottsdale were repainted last year for pickleball only»." },
      { q: "¿Por qué se sienten «desplazados» los tenistas?", options: ["Because their equipment is too old", "Because tennis is now illegal in the park", "Because pickleball took over the courts and the morning slots", "Because the city raised the fees"], answer: 2, why: "El texto explica la pérdida de espacio y horario: «courts are booked before sunrise, and retirees now compete with twelve-year-olds for playing time» y «Tennis players, who waited forty years for their morning slots, feel pushed out»." },
      { q: "¿Qué aprendió la ciudad según la frase de Brian Cobb?", options: ["That sport is a waste of money", "That pickleball will disappear soon", "That tennis players were right all along", "That talking early would have avoided a year of shouting"], answer: 3, why: "«If we had sat down together a year earlier, we would have spared ourselves a very loud summer»." },
    ],
    discuss: [
      { it: "Have you ever played pickleball or another sport that «took over» your free time? Tell the story.", es: "¿Has jugado alguna vez al pickleball o a otro deporte que «se apoderara» de tu tiempo libre? Cuenta la historia." },
      { it: "Public parks serve many groups with different needs. How would you share the courts fairly?", es: "Los parques públicos sirven a muchos grupos con necesidades distintas. ¿Cómo repartirías las canchas de forma justa?" },
    ],
  },

  /* ═══ B2 · 9 — Society ═══ */
  {
    id: "en-news-b2-09", cat: "societa", level: "B2", place: "Buffalo", minutes: 4,
    title: "In Buffalo, retired men rebuild their Tuesdays",
    titleEs: "En Buffalo, los jubilados reconstruyen sus martes",
    lead: {
      it: "Every Tuesday morning, a former furniture factory in Buffalo smells of sawdust and coffee. Inside, retired men build benches, repair chairs and — without quite noticing — rebuild their social lives.",
      es: "Cada martes por la mañana, una antigua fábrica de muebles de Buffalo huele a serrín y a café. Dentro, unos hombres jubilados construyen bancos, reparan sillas y —casi sin darse cuenta— reconstruyen su vida social.",
    },
    paragraphs: [
      { it: "Loneliness is now treated by American doctors as a health risk comparable to smoking, and retired men are hit hardest. When work ends, the network built around it falls apart. «If you asked them directly, most men would shrug,» says the shed's founder. «Give them a bench and a saw, and they open up.»",
      es: "La soledad es tratada hoy por los médicos estadounidenses como un riesgo para la salud comparable al tabaquismo, y los hombres jubilados son de los más golpeados. Cuando el trabajo termina, la red tejida a su alrededor se desmorona. «Si se lo preguntaras directamente, la mayoría se encogería de hombros», dice el fundador del taller. «Dales un banco y una sierra, y se abren.»" },
      { it: "The «Harbor Shed» was set up three years ago with six benches and a donated tool cabinet. Today it counts ninety members, who pay twenty dollars a month for coffee, wood and the right to argue about the correct way to sharpen a chisel.",
      es: "El «Harbor Shed» fue fundado hace tres años con seis bancos y un armario de herramientas donado. Hoy cuenta con noventa socios, que pagan veinte dólares al mes por café, madera y el derecho a discutir la forma correcta de afilar un formón." },
      { it: "The health effect is hard to measure but easy to watch. «If my wife had not signed me up, I would have spent three years talking to the television,» says Frank Morrison, seventy-one, who now arrives an hour early to open the place. His blood pressure, he reports, has also behaved.",
      es: "El efecto sobre la salud es difícil de medir pero fácil de ver. «Si mi esposa no me hubiera apuntado, habría pasado tres años hablándole al televisor», dice Frank Morrison, de setenta y uno, que ahora llega una hora antes para abrir el lugar. Su presión arterial, informa, también se ha portado bien." },
      { it: "The shed works for the city as well. Wheelchair ramps are built there for families that cannot pay, broken toys are repaired for a daycare center, and each December the men cut and deliver firewood to a dozen elderly neighbors.",
      es: "El taller también trabaja para la ciudad. Allí se construyen rampas para sillas de ruedas destinadas a familias que no pueden pagar, se reparan juguetes para una guardería y cada diciembre los hombres cortan y reparten leña a una docena de vecinos mayores." },
      { it: "Other cities keep calling. A second shed will be opened in a closed firehouse next spring, and the movement has even inspired a sewing shed for women two streets away. The oldest rule is written over the door: leave the news outside, and pick up a broom when you go.",
      es: "Otras ciudades siguen llamando. Un segundo taller se abrirá la próxima primavera en una antigua estación de bomberos, y el movimiento ha inspirado incluso un taller de costura para mujeres a dos calles. La regla más antigua está escrita sobre la puerta: deja las noticias fuera y recoge una escoba al marcharte." },
    ],
    words: [
      { it: "loneliness", es: "la soledad" },
      { it: "to fall apart (falls apart)", es: "desmoronarse, venirse abajo" },
      { it: "to set up (set up)", es: "montar, fundar", note: "set up = fundar o instalar; «instalar un software» también es set up" },
      { it: "to sign up (signed up)", es: "apuntarse, inscribirse" },
      { it: "the shed", es: "el taller, la barraca (aquí: el cobertizo)" },
      { it: "the ramp / wheelchair ramps", es: "la rampa / las rampas para sillas de ruedas" },
    ],
    questions: [
      { q: "¿Cuánto pagan los socios del taller al mes?", options: ["Two dollars", "Two hundred dollars", "Twenty dollars", "Nothing"], answer: 2, why: "«who pay twenty dollars a month for coffee, wood and the right to argue about the correct way to sharpen a chisel»." },
      { q: "¿Qué hacen los hombres cada diciembre?", options: ["They close the shed for winter", "They elect a new president", "They organize a party", "They cut and deliver firewood to elderly neighbors"], answer: 3, why: "«each December the men cut and deliver firewood to a dozen elderly neighbors»." },
      { q: "¿Por qué el taller «también funciona para la ciudad»?", options: ["Because it builds wheelchair ramps and repairs toys without charge", "Because it pays taxes", "Because it employs young workers", "Because it sells furniture cheaply"], answer: 0, why: "«Wheelchair ramps are built there for families that cannot pay, broken toys are repaired for a daycare center»." },
      { q: "¿Qué pide la regla escrita sobre la puerta?", options: ["That tools must be locked", "That members clean up and leave their worries outside", "That the shed is closing soon", "That only carpenters can enter"], answer: 1, why: "«leave the news outside, and pick up a broom when you go»: la regla pide orden y dejar las preocupaciones fuera del taller." },
    ],
    discuss: [
      { it: "Where do the older men in your family or neighborhood meet and spend their time? Do those places work?", es: "¿Dónde se reúnen los hombres mayores de tu familia o de tu barrio? ¿Funcionan esos lugares?" },
      { it: "The shed builds ramps and repairs toys for others. How does helping people change the helpers?", es: "El taller construye rampas y repara juguetes para otros. ¿Cómo cambia a quienes ayudan el hecho de ayudar?" },
    ],
  },

  /* ═══ B2 · 10 — Economy ═══ */
  {
    id: "en-news-b2-10", cat: "economia", level: "B2", place: "Pittsburgh", minutes: 4,
    title: "Pittsburgh measures a four-day workweek",
    titleEs: "Pittsburgh mide una semana laboral de cuatro días",
    lead: {
      it: "Twenty-six small companies in Pittsburgh are halfway through a six-month experiment: the same salary, the same workload, one day less. The first numbers are turning heads.",
      es: "Veintiséis pequeñas empresas de Pittsburgh están a mitad de un experimento de seis meses: el mismo sueldo, la misma carga de trabajo, un día menos. Los primeros números están llamando la atención.",
    },
    paragraphs: [
      { it: "The pilot was organized by a local business alliance, and the participating firms were picked from health care, design and light manufacturing. Each company kept one promise: paychecks were not touched, and nobody was laid off.",
      es: "El piloto fue organizado por una alianza empresarial local, y las firmas participantes fueron elegidas entre sanidad, diseño y manufactura ligera. Cada empresa mantuvo una promesa: las nóminas no se tocaron y nadie fue despedido." },
      { it: "The method was simple and strict. Meetings were cut back from forty minutes to twenty-five, routine reports were phased out, and internal messages are being replaced by shared documents that anyone can read at any hour.",
      es: "El método fue simple y estricto. Las reuniones se recortaron de cuarenta minutos a veinticinco, los informes de rutina se eliminaron gradualmente y los mensajes internos están siendo sustituidos por documentos compartidos que cualquiera puede leer a cualquier hora." },
      { it: "The early results are being watched closely. Sick days fell by a fifth. A dental laboratory reported a six percent rise in output, and three companies say customer complaints dropped after Fridays went quiet. «If we had kept the old schedule, we would have burned out our best people within a year,» says laboratory director Rachel Abbott.",
      es: "Los primeros resultados se siguen con atención. Los días de baja por enfermedad cayeron una quinta parte. Un laboratorio dental reportó un aumento del seis por ciento en producción, y tres empresas dicen que las quejas de clientes bajaron cuando los viernes se callaron. «Si hubiéramos mantenido el horario antiguo, habríamos quemado a nuestra mejor gente en un año», dice Rachel Abbott, directora del laboratorio." },
      { it: "Not everything adds up. Two service firms found that clients still call on Fridays, and some employees quietly move unfinished work into their kitchens. «If the whole city switched at once, traffic, schools and childcare would feel the difference immediately,» warns economist Kevin Marsh.",
      es: "No todo cuadra. Dos empresas de servicios descubrieron que los clientes siguen llamando los viernes, y algunos empleados trasladan en silencio el trabajo sin terminar a sus cocinas. «Si la ciudad entera cambiara a la vez, el tráfico, las escuelas y el cuidado infantil notarían la diferencia de inmediato», advierte el economista Kevin Marsh." },
      { it: "The final report will be published in December, along with a free toolkit for companies that want to run their own trial. Inside the participating firms, the change is already cultural: Thursday is the new Friday, and the office plants, one manager swears, have perked up.",
      es: "El informe final se publicará en diciembre, junto con una guía gratuita para las empresas que quieran hacer su propia prueba. Dentro de las firmas participantes el cambio ya es cultural: el jueves es el nuevo viernes, y las plantas de oficina, jura un gerente, han recobrado brío." },
    ],
    words: [
      { it: "the pilot", es: "el programa piloto, la prueba" },
      { it: "to lay off (laid off)", es: "despedir por razones económicas", note: "lay off = despedir; el despido más general también es to fire" },
      { it: "to cut back (cut back)", es: "recortar, reducir" },
      { it: "to phase out (phased out)", es: "eliminar de forma gradual" },
      { it: "sick days", es: "los días de baja por enfermedad" },
      { it: "to burn out (burned out)", es: "quemarse por exceso de trabajo o estrés" },
    ],
    questions: [
      { q: "¿Qué promesa mantuvo cada empresa participante?", options: ["Paychecks were not touched and nobody was laid off", "Everybody would work from home", "Fridays would be free forever", "Salaries would double"], answer: 0, why: "«paychecks were not touched, and nobody was laid off»." },
      { q: "¿Cuánto cayeron los días de baja por enfermedad?", options: ["By a half", "By a fifth", "By a third", "They doubled"], answer: 1, why: "«Sick days fell by a fifth»." },
      { q: "¿Por qué «no todo cuadra» en el experimento?", options: ["Because employees work less", "Because companies lost clients", "Because the toolkit is expensive", "Because clients still call on Fridays and some work moves to kitchens"], answer: 3, why: "«Two service firms found that clients still call on Fridays, and some employees quietly move unfinished work into their kitchens»." },
      { q: "¿Qué sugiere el cambio cultural de «el jueves es el nuevo viernes»?", options: ["That Friday disappeared from the calendar", "That workers miss the old schedule", "That Thursday took over Friday's rhythm and energy", "That the experiment failed"], answer: 2, why: "«the change is already cultural: Thursday is the new Friday»: el jueves heredó el ritmo y la energía del viernes." },
    ],
    discuss: [
      { it: "Would you prefer a four-day week with longer days, or five shorter days? Explain your choice in English.", es: "¿Preferirías una semana de cuatro días con jornadas más largas, o cinco días más cortos? Explica tu elección en inglés." },
      { it: "If your company adopted a four-day week, what would you do with the extra day?", es: "Si tu empresa adoptara la semana de cuatro días, ¿qué harías con el día extra?" },
    ],
  },

  /* ═══ B2 · 11 — Science ═══ */
  {
    id: "en-news-b2-11", cat: "scienza", level: "B2", place: "Indianapolis", minutes: 4,
    title: "Indianapolis spent four minutes in the Moon's shadow",
    titleEs: "Indianapolis pasó cuatro minutos en la sombra de la Luna",
    lead: {
      it: "For four minutes on an April afternoon, Indianapolis went dark in the middle of the day. A total solar eclipse turned the city into an open-air laboratory, and the data is still being examined.",
      es: "Durante cuatro minutos en una tarde de abril, Indianapolis se oscureció en pleno día. Un eclipse total de sol convirtió la ciudad en un laboratorio al aire libre, y los datos siguen analizándose.",
    },
    paragraphs: [
      { it: "The Moon's shadow crossed the city at two thousand kilometers per hour. Daylight faded like a dimmer switch, the temperature dropped five degrees, and streetlights switched themselves on at three in the afternoon. Crickets began to sing, and the zoo later reported that its flamingos huddled into a tight pink circle.",
      es: "La sombra de la Luna cruzó la ciudad a dos mil kilómetros por hora. La luz del día se apagó como con un regulador, la temperatura bajó cinco grados y las farolas se encendieron solas a las tres de la tarde. Los grillos empezaron a cantar, y el zoológico reportó luego que sus flamencos se apretaron en un círculo rosa y compacto." },
      { it: "For scientists, the darkness was a gift. Student teams launched weather balloons into the stratosphere, and thousands of photographs of the solar corona were uploaded by volunteers. Those images will be compared with pictures captured in Mexico and Texas, twenty minutes apart in the Moon's path.",
      es: "Para los científicos, la oscuridad fue un regalo. Equipos de estudiantes lanzaron globos meteorológicos a la estratosfera, y miles de fotografías de la corona solar fueron subidas por voluntarios. Esas imágenes se compararán con las capturadas en México y Texas, a veinte minutos de distancia en el recorrido de la Luna." },
      { it: "The weather could have ruined everything. «If clouds had covered Indianapolis, ten years of preparation would have been washed out,» says astronomer Carol Hughes, who coordinated the school program from the planetarium. Instead, the sky stayed clean from horizon to horizon.",
      es: "El clima podría haberlo arruinado todo. «Si las nubes hubieran cubierto Indianapolis, diez años de preparación se habrían ido por el desagüe», dice la astrónoma Carol Hughes, que coordinó el programa escolar desde el planetario. En cambio, el cielo se mantuvo limpio de horizonte a horizonte." },
      { it: "The economy enjoyed its own eclipse. Hotels were booked solid months ahead, an estimated three hundred thousand visitors showed up, and restaurants sold out of everything shaped like the Sun. Traffic leaving the city, the police chief joked, moved at the speed of the Moon's shadow.",
      es: "La economía tuvo su propio eclipse. Los hoteles se llenaron con meses de antelación, unos trescientos mil visitantes —según las estimaciones— aparecieron, y los restaurantes se quedaron sin todo lo que tuviera forma de sol. El tráfico saliendo de la ciudad, bromeó el jefe de policía, avanzaba a la velocidad de la sombra lunar." },
      { it: "The next total eclipse over the United States will not arrive until 2045. Until then, the science museums will keep the eclipse glasses in their drawers, and the balloons will be reused for ordinary weather. «If this happened every year,» Hughes laughs, «nobody would look up.»",
      es: "El próximo eclipse total sobre Estados Unidos no llegará hasta 2045. Hasta entonces, los museos de ciencia guardarán las gafas de eclipse en sus cajones y los globos se reutilizarán para el clima ordinario. «Si esto pasara todos los años», se ríe Hughes, «nadie miraría arriba»." },
    ],
    words: [
      { it: "the shadow", es: "la sombra" },
      { it: "the corona", es: "la corona (solar)" },
      { it: "the stratosphere", es: "la estratosfera" },
      { it: "to huddle (huddled)", es: "acurrucarse, apretarse en grupo" },
      { it: "to show up (showed up)", es: "aparecer, presentarse" },
      { it: "to sell out (sold out)", es: "agotarse, quedarse sin existencias" },
    ],
    questions: [
      { q: "¿Qué pasó con la temperatura durante el eclipse?", options: ["It rose ten degrees", "It stayed the same", "It dropped one degree", "It dropped five degrees"], answer: 3, why: "«the temperature dropped five degrees, and streetlights switched themselves on at three in the afternoon»." },
      { q: "¿Qué se hará con las imágenes de la corona solar?", options: ["They will be sold to newspapers", "They will be deleted after the study", "They will be compared with pictures captured in Mexico and Texas", "They will be printed in books"], answer: 2, why: "«Those images will be compared with pictures captured in Mexico and Texas»." },
      { q: "¿Qué habría pasado si las nubes hubieran cubierto la ciudad?", options: ["The balloons would have flown higher", "Ten years of preparation would have been washed out", "The planetarium would have closed", "The visitors would have stayed longer"], answer: 1, why: "«If clouds had covered Indianapolis, ten years of preparation would have been washed out»." },
      { q: "¿Qué sugiere Hughes con su broma final?", options: ["That rarity is part of what makes people look up", "That eclipses should happen every year", "That she is tired of eclipses", "That nobody cares about the sky"], answer: 0, why: "«If this happened every year», bromea Hughes, «nobody would look up»: lo excepcional del fenómeno es lo que despierta la curiosidad." },
    ],
    discuss: [
      { it: "Where were you during the last eclipse you remember? What did the people around you do?", es: "¿Dónde estabas durante el último eclipse que recuerdas? ¿Qué hizo la gente a tu alrededor?" },
      { it: "Hughes jokes that rare events make people look up. What other rare event would you travel to see?", es: "Hughes bromea con que los eventos únicos hacen que la gente mire hacia arriba. ¿A qué otro evento excepcional viajarías para verlo?" },
    ],
  },

  /* ═══ B2 · 12 — Environment ═══ */
  {
    id: "en-news-b2-12", cat: "ambiente", level: "B2", place: "Concord", minutes: 4,
    title: "New England swaps oil furnaces for heat pumps",
    titleEs: "Nueva Inglaterra cambia hornos de petróleo por bombas de calor",
    lead: {
      it: "Winter in Concord, New Hampshire, used to smell of heating oil. This season, a record number of families are warming their houses with heat pumps — machines that move heat instead of burning anything.",
      es: "El invierno en Concord, New Hampshire, solía oler a petróleo de calefacción. Esta temporada, un número récord de familias calienta sus casas con bombas de calor: máquinas que mueven el calor en lugar de quemar algo.",
    },
    paragraphs: [
      { it: "A heat pump does not make heat; it pulls warmth out of the outdoor air, even at minus fifteen, and moves it indoors through a wall unit the size of a suitcase, and the room warms up within minutes. The technology was perfected for Nordic winters, and cold-climate models now work in almost any New England basement.",
      es: "Una bomba de calor no fabrica calor: extrae el calor del aire exterior, incluso a quince bajo cero, y lo traslada al interior a través de una unidad de pared del tamaño de un maletín, y la habitación se calienta en minutos. La tecnología fue perfeccionada para los inviernos nórdicos, y los modelos de clima frío funcionan hoy en casi cualquier sótano de Nueva Inglaterra." },
      { it: "The numbers moved first, then the neighbors. More than four thousand units were installed across the state last year, and rebates cover a large share of the cost. Installers are booked until March, and community colleges have added evening courses to train technicians.",
      es: "Primero se movieron los números, luego los vecinos. El año pasado se instalaron más de cuatro mil unidades en el estado, y los descuentos cubren una gran parte del coste. Los instaladores tienen agenda hasta marzo, y los colegios comunitarios han añadido cursos nocturnos para formar técnicos." },
      { it: "«If one whole street switched, that block would need half the oil it burns today,» says energy engineer Steve Pearson. His utility has started painting the change on paper: fuel deliveries in neighborhoods full of heat pumps fall year after year, like a tide going out.",
      es: "«Si una calle entera cambiara, esa manzana necesitaría la mitad del petróleo que quema hoy», dice el ingeniero energético Steve Pearson. Su eléctrica ha empezado a poner el cambio sobre el papel: las entregas de combustible en los barrios llenos de bombas de calor caen año tras año, como una marea que baja." },
      { it: "Old houses raise the difficult cases. Some need new wiring before installation, and upfront costs still scare renters, who cannot decide for their landlords. «If the rebates had been approved five years earlier, thousands of families would have made the jump already,» says Pearson.",
      es: "Las casas viejas plantean los casos difíciles. Algunas necesitan cableado nuevo antes de la instalación, y el coste inicial sigue asustando a los inquilinos, que no pueden decidir por sus caseros. «Si los descuentos se hubieran aprobado cinco años antes, miles de familias ya habrían dado el salto», dice Pearson." },
      { it: "The state goal is written into law: most new homes will be heated this way by 2030. Even the science museum was retrofitted last summer, and its old oil tank, now empty and polished, has been turned into an exhibit about the city's warmer, quieter winters.",
      es: "El objetivo del estado está escrito en la ley: la mayoría de las viviendas nuevas se calentará así hacia 2030. Incluso el museo de ciencias fue reacondicionado el verano pasado, y su viejo depósito de petróleo, vacío y pulido, se ha convertido en una exposición sobre los inviernos más cálidos y silenciosos de la ciudad." },
    ],
    words: [
      { it: "the heat pump", es: "la bomba de calor" },
      { it: "to install (installed)", es: "instalar" },
      { it: "the rebate", es: "el descuento, la devolución", note: "rebate = desgravación o descuento en una compra; no es «rebaja» de precio temporal" },
      { it: "the renter", es: "el inquilino / la inquilina" },
      { it: "the landlord", es: "el casero, el dueño del alquiler", note: "landlord = propietario que alquila; lady lord no existe: la dueña también es landlord" },
      { it: "to retrofit (retrofitted)", es: "reacondicionar, modernizar (un edificio)" },
    ],
    questions: [
      { q: "¿Cómo funciona una bomba de calor?", options: ["It burns oil more efficiently", "It pulls warmth out of the outdoor air and moves it indoors", "It makes heat with electricity", "It stores heat underground"], answer: 1, why: "«it pulls warmth out of the outdoor air, even at minus fifteen, and moves it indoors»." },
      { q: "¿Cuántas unidades se instalaron en el estado el año pasado?", options: ["Four hundred", "Forty thousand", "Fourteen hundred", "More than four thousand"], answer: 3, why: "«More than four thousand units were installed across the state last year»." },
      { q: "¿Por qué los inquilinos tienen dificultades para «dar el salto»?", options: ["Because heat pumps do not work in old houses", "Because they do not like new technology", "Because they cannot decide for their landlords", "Because rebates are only for businesses"], answer: 2, why: "«upfront costs still scare renters, who cannot decide for their landlords»." },
      { q: "¿Qué simboliza el viejo depósito de petróleo convertido en exposición?", options: ["The shift from oil heat to a new energy era", "That oil is still the best option", "That the museum needs money", "That winters are getting colder"], answer: 0, why: "«its old oil tank, now empty and polished, has been turned into an exhibit about the city's warmer, quieter winters»: el símbolo del cambio de era energética." },
    ],
    discuss: [
      { it: "How is your home heated, and would you consider a heat pump? Why or why not?", es: "¿Cómo se calienta tu casa, y considerarías una bomba de calor? ¿Por qué sí o no?" },
      { it: "Old buildings make change harder. Should governments help renters and owners pay for it? Argue your side.", es: "Los edificios viejos dificultan el cambio. ¿Deberían los gobiernos ayudar a inquilinos y propietarios a pagarlo? Argumenta tu postura." },
    ],
  },

  /* ═══ B2 · 13 — Health ═══ */
  {
    id: "en-news-b2-13", cat: "salute", level: "B2", place: "Tucson", minutes: 4,
    title: "In Tucson, doctors prescribe vegetables",
    titleEs: "En Tucson, los médicos recetan verduras",
    lead: {
      it: "At a clinic in Tucson, Arizona, the most common prescription this winter is not a pill. It is a weekly box of vegetables, redeemable at the farmers market down the street.",
      es: "En una clínica de Tucson, Arizona, la receta más común de este invierno no es una pastilla. Es una caja semanal de verduras, canjeable en el mercado de agricultores de la calle de al lado.",
    },
    paragraphs: [
      { it: "The «Fresh Prescription» program was started two years ago for patients with type two diabetes. Participants are referred by their doctors, and each family receives fifteen dollars a week in market tokens. Last year, four hundred households were enrolled.",
      es: "El programa «Fresh Prescription» comenzó hace dos años para pacientes con diabetes tipo dos. Los participantes son remitidos por sus médicos, y cada familia recibe quince dólares semanales en fichas para el mercado. El año pasado se inscribieron cuatrocientos hogares." },
      { it: "The market does the teaching. Nutritionists walk families through the stalls, farmers share recipes, and cooking demonstrations are held on Saturday mornings in English and Spanish. Children, the organizers learned, will eat almost any vegetable they have chosen themselves.",
      es: "La enseñanza la hace el mercado. Nutricionistas acompañan a las familias por los puestos, los agricultores comparten recetas y los sábados por la mañana hay demostraciones de cocina en inglés y español. Los niños, aprendieron los organizadores, comerán casi cualquier verdura que hayan elegido ellos mismos." },
      { it: "The results are being followed by two universities. Blood-sugar levels have dropped for about two thirds of participants, and emergency-room visits fell during the study year. «If food were treated as medicine, this country would save billions and eat better,» says Dr. Alice Moore, who directs the clinic.",
      es: "Dos universidades siguen los resultados. El azúcar en sangre ha bajado en alrededor de dos tercios de los participantes, y las visitas a urgencias cayeron durante el año de estudio. «Si la comida fuera tratada como medicina, este país ahorraría miles de millones y comería mejor», dice la doctora Alice Moore, que dirige la clínica." },
      { it: "The patients tell the shorter version. «If this program had not been here, I would have gone back to canned food and given up,» says Linda Ford, sixty-eight, who joined with her granddaughter. Her latest check-up, she says, was «the best news I have had in years».",
      es: "Los pacientes cuentan una versión más corta. «Si este programa no hubiera estado aquí, habría vuelto a la comida enlatada y me habría rendido», dice Linda Ford, de sesenta y ocho años, que se apuntó con su nieta. Su última revisión, dice, fue «la mejor noticia que he tenido en años»." },
      { it: "The program will be expanded to two more clinics this spring, and farmers are already planting for it. Fields that were left half empty in past seasons are being filled with squash, greens and chiles, which is how a prescription, in Tucson, changed the landscape.",
      es: "El programa se ampliará a dos clínicas más esta primavera, y los agricultores ya están plantando para él. Campos que quedaron medio vacíos en temporadas pasadas se están llenando de calabaza, verduras de hoja y chiles: así es como una receta, en Tucson, cambió el paisaje." },
    ],
    words: [
      { it: "the prescription", es: "la receta médica" },
      { it: "to refer (referred)", es: "remitir (a un paciente a un programa o especialista)" },
      { it: "the token", es: "la ficha, el vale canjeable" },
      { it: "blood sugar (blood-sugar)", es: "el azúcar en sangre" },
      { it: "canned food", es: "la comida enlatada", note: "can = lata; canned = enlatado (no significa «cancelado», que aquí sería cancelled)" },
      { it: "the check-up", es: "el chequeo médico, la revisión" },
    ],
    questions: [
      { q: "¿Quién remite a los pacientes al programa?", options: ["The farmers", "The nutritionists", "Their doctors", "The market organizers"], answer: 2, why: "«Participants are referred by their doctors, and each family receives fifteen dollars a week in market tokens»." },
      { q: "¿Qué ha ocurrido con el azúcar en sangre de dos tercios de los participantes?", options: ["It has stayed the same", "It has dropped", "It has risen sharply", "It is no longer measured"], answer: 1, why: "«Blood-sugar levels have dropped for about two thirds of participants»." },
      { q: "¿Por qué los niños comen casi cualquier verdura, según los organizadores?", options: ["Because they choose the vegetables themselves", "Because doctors force them", "Because vegetables are sweet", "Because the market gives prizes"], answer: 0, why: "«Children, the organizers learned, will eat almost any vegetable they have chosen themselves»." },
      { q: "¿Por qué la revisión de Linda Ford fue «la mejor noticia en años»?", options: ["Because she won the lottery", "Because she does not need to cook", "Because the clinic is closing", "Because her health improved thanks to the program"], answer: 3, why: "Tras unirse al programa con su nieta, su revisión fue «the best news I have had in years», lo que sugiere una mejora de salud." },
    ],
    discuss: [
      { it: "If vegetables were prescribed in your country, which recipes would doctors recommend first?", es: "Si en tu país se recetaran verduras, ¿qué recetas recomendarían primero los médicos?" },
      { it: "The program changed both diets and farms. Can health programs change a whole landscape? How?", es: "El programa cambió tanto dietas como granjas. ¿Pueden los programas de salud cambiar todo un paisaje? ¿Cómo?" },
    ],
  },

  /* ═══ B2 · 14 — Technology ═══ */
  {
    id: "en-news-b2-14", cat: "tecnologia", level: "B2", place: "Louisville", minutes: 4,
    title: "Printed in Louisville: a hand for every child",
    titleEs: "Impreso en Louisville: una mano para cada niño",
    lead: {
      it: "In a workshop near the Ohio River, a printer hums for nineteen hours and produces a mechanical left hand. It belongs to an eight-year-old boy, and it costs less than a good pair of sneakers.",
      es: "En un taller junto al río Ohio, una impresora zumba durante diecinueve horas y produce una mano izquierda mecánica. Pertenece a un niño de ocho años y cuesta menos que un buen par de zapatillas.",
    },
    paragraphs: [
      { it: "A commercial prosthetic arm can cost twenty thousand dollars, and children outgrow a prosthesis the way they outgrow shoes. The «Open Palm» collective in Louisville answers with plastic: mechanical hands that are printed, assembled and given away for the price of the material.",
      es: "Un brazo protésico comercial puede costar veinte mil dólares, y a los niños las prótesis les quedan pequeñas igual que los zapatos. El colectivo «Open Palm» de Louisville responde con plástico: manos mecánicas que se imprimen, se ensamblan y se regalan por el precio del material." },
      { it: "Each hand is designed to measure, printed in seventeen pieces and assembled by volunteers in an evening. The fingers close when the wrist bends — no batteries, no software. If the wrist could not bend at all, the fingers would be closed by a strap across the shoulder.",
      es: "Cada mano se diseña a medida, se imprime en diecisiete piezas y la ensamblan voluntarios en una tarde. Los dedos se cierran cuando la muñeca se dobla: sin baterías, sin software. Si la muñeca no pudiera doblarse en absoluto, los dedos se cerrarían con una correa que cruza el hombro." },
      { it: "The children choose the colors: superhero red, galaxy purple, the orange of a favorite team. «If designs like these had existed twenty years ago, a whole generation would have grown up swinging from the monkey bars,» says occupational therapist Karen Walsh. In June, a seven-year-old in galaxy purple caught a ball with two hands.",
      es: "Los niños eligen los colores: rojo de superhéroe, púrpura galaxia, el naranja del equipo favorito. «Si diseños como estos hubieran existido hace veinte años, toda una generación habría crecido colgándose de las barras de mono», dice la terapeuta ocupacional Karen Walsh. En junio, una niña de siete años con púrpura galaxia atrapó un balón con las dos manos." },
      { it: "More than two hundred hands have been handed out since the collective was founded in 2019, and families pay only the postage. Requests arrive by email from forty states; a high school robotics club in Kentucky now prints a batch every month.",
      es: "Se han repartido más de doscientas manos desde que el colectivo fue fundado en 2019, y las familias solo pagan el envío. Las peticiones llegan por correo electrónico desde cuarenta estados; un club de robótica de un instituto de Kentucky imprime ahora un lote cada mes." },
      { it: "The next challenge is the printer itself. Library machines that sit idle at night will be lent to the project, so the waiting list, now three months long, can be shortened. «Every kid deserves a hand that looks like a decision, not like a donation,» says Walsh.",
      es: "El siguiente desafío es la propia impresora. Las máquinas de biblioteca que quedan ociosas por la noche se prestarán al proyecto, para acortar la lista de espera, hoy de tres meses. «Cada niño merece una mano que parezca una decisión, no una donación», dice Walsh." },
    ],
    words: [
      { it: "the prosthesis / prosthetic", es: "la prótesis / protésico" },
      { it: "to outgrow", es: "quedársele pequeño a alguien (por crecer)" },
      { it: "to assemble (assembled)", es: "ensamblar, montar" },
      { it: "to give away (given away)", es: "regalar, donar" },
      { it: "the batch", es: "el lote, la tanda de producción" },
      { it: "the wrist", es: "la muñeca (de la mano)" },
    ],
    questions: [
      { q: "¿Cuánto puede costar un brazo protésico comercial?", options: ["Twenty thousand dollars", "Two hundred dollars", "Two thousand dollars", "Twenty dollars"], answer: 0, why: "«A commercial prosthetic arm can cost twenty thousand dollars»." },
      { q: "¿Cómo se cierran los dedos de estas manos?", options: ["With batteries", "With a phone app", "When the wrist bends", "With a remote control"], answer: 2, why: "«The fingers close when the wrist bends — no batteries, no software»." },
      { q: "¿Qué solución existe si la muñeca no puede doblarse en absoluto?", options: ["The child receives no hand", "A robot moves the fingers", "The hand is printed larger", "The fingers would be closed by a strap across the shoulder"], answer: 3, why: "«If the wrist could not bend at all, the fingers would be closed by a strap across the shoulder»." },
      { q: "¿Qué significa que una mano «parezca una decisión y no una donación»?", options: ["That the hands are very expensive", "That children choose colors and feel the hand is their own", "That donations are forbidden", "That decisions are made by doctors"], answer: 1, why: "«The children choose the colors: superhero red, galaxy purple, the orange of a favorite team»: elegir convierte la prótesis en algo propio." },
    ],
    discuss: [
      { it: "Technology often costs too much for the children who need it most. What other object could be «printed for the price of the material»?", es: "La tecnología suele costar demasiado para los niños que más la necesitan. ¿Qué otro objeto se podría «imprimir por el precio del material»?" },
      { it: "Karen Walsh says a hand should look like a decision, not a donation. What does that sentence mean to you?", es: "Karen Walsh dice que una mano debe parecer una decisión y no una donación. ¿Qué significa para ti esa frase?" },
    ],
  },

  /* ═══ B2 · 15 — Society ═══ */
  {
    id: "en-news-b2-15", cat: "societa", level: "B2", place: "Baltimore", minutes: 4,
    title: "Baltimore's street refrigerators feed the block",
    titleEs: "Los refrigeradores callejeros de Baltimore alimentan la manzana",
    lead: {
      it: "On a corner in East Baltimore, a refrigerator painted bright green stands outside a hardware store and hums all day. Nobody locks it. Nobody guards it. Everybody fills it.",
      es: "En una esquina del este de Baltimore, un refrigerador pintado de verde brillante está frente a una ferretería y zumba todo el día. Nadie lo cierra con llave. Nadie lo vigila. Todos lo llenan.",
    },
    paragraphs: [
      { it: "Community refrigerators — «freedges» — were borrowed from other cities and have multiplied across Baltimore. The rules are painted on each door: take what you need, leave what you can. No documents are requested, no questions are asked, and nothing is written down.",
      es: "Los refrigeradores comunitarios —«freedges»— fueron tomados de otras ciudades y se han multiplicado por Baltimore. Las reglas están pintadas en cada puerta: toma lo que necesites, deja lo que puedas. No se piden documentos, no se hacen preguntas y nada se pone por escrito." },
      { it: "The machines are cleaned twice a day by rotating teams of neighbors. Bakeries drop off bread at closing time, a farmer leaves boxes of tomatoes on Fridays, and one electrician keeps the compressors alive for free. The green refrigerator alone, its organizers estimate, moves four hundred pounds of food a week.",
      es: "Las máquinas son limpiadas dos veces al día por equipos rotativos de vecinos. Las panaderías dejan pan a la hora del cierre, un agricultor deja cajas de tomates los viernes y un electricista mantiene vivos los compresores gratis. Solo el refrigerador verde, calculan sus organizadores, mueve cuatrocientas libras de comida a la semana." },
      { it: "The philosophy is deliberate. «If people were asked for a pay slip, they simply would not come,» says organizer Denise Carter. «Food is shared here, not inspected. Hunger does not always look like hunger, and a refrigerator never stares.»",
      es: "La filosofía es deliberada. «Si se les pidiera una nómina, simplemente no vendrían», dice la organizadora Denise Carter. «Aquí la comida se comparte, no se inspecciona. El hambre no siempre parece hambre, y un refrigerador nunca se queda mirando.»" },
      { it: "The first fridge was almost removed after complaints about noise and loitering. Neighbors showed up at the hearing instead, forty of them, and the complaint was withdrawn. «If that first meeting had gone differently, none of the others would exist,» says Carter. There are now forty-one.",
      es: "El primer refrigerador estuvo a punto de ser retirado tras quejas por ruido y merodeo. Los vecinos aparecieron en la audiencia —cuarenta de ellos— y la queja fue retirada. «Si esa primera reunión hubiera salido de otro modo, ninguno de los demás existiría», dice Carter. Hoy son cuarenta y uno." },
      { it: "Winter is the next test: a heated cabinet for coats will be bolted beside the green door, and a fifth-grade class has begun painting the season's refrigerator, one snowflake per student. The corner, Carter says, has stopped being a corner: «It is the busiest kitchen in the neighborhood.»",
      es: "El invierno es la siguiente prueba: junto a la puerta verde se atornillará un armario calefactado para abrigos, y una clase de quinto grado ha empezado a pintar el refrigerador de la temporada, un copo de nieve por alumno. La esquina, dice Carter, dejó de ser una esquina: «Es la cocina más ocupada del barrio»." },
    ],
    words: [
      { it: "the fridge / the refrigerator", es: "el refrigerador, la nevera" },
      { it: "to drop off (drop off)", es: "dejar, entregar (algo o a alguien) de paso" },
      { it: "the pay slip", es: "la nómina, el recibo de sueldo" },
      { it: "loitering", es: "el merodeo (quedarse en la calle sin propósito)", note: "en EE. UU. puede ser una falta leve; proviene del verbo to loiter" },
      { it: "the hearing", es: "la vista, la audiencia (legal)", note: "hearing = audiencia o vista judicial; «audición» es otro sentido de la misma palabra" },
      { it: "to write down (written down)", es: "anotar, poner por escrito" },
    ],
    questions: [
      { q: "¿Qué reglas están pintadas en la puerta de cada refrigerador?", options: ["Open only at night", "Pay what you can", "Bring your own bag", "Take what you need, leave what you can"], answer: 3, why: "«The rules are painted on each door: take what you need, leave what you can»." },
      { q: "¿Quién mantiene vivos los compresores gratis?", options: ["One electrician", "The hardware store", "The city council", "A repair company"], answer: 0, why: "«one electrician keeps the compressors alive for free»." },
      { q: "¿Por qué el refrigerador «nunca se queda mirando» a nadie?", options: ["Because it is always empty", "Because using it requires no documents, questions or records", "Because it is closed at night", "Because it belongs to nobody"], answer: 1, why: "«No documents are requested, no questions are asked, and nothing is written down»: no hay trámites ni control." },
      { q: "¿Qué importancia tuvo la audiencia sobre el primer refrigerador?", options: ["It decided the color of the fridges", "It made the program city-funded", "Forty neighbors defended it, and the other fridges exist thanks to that moment", "It changed the fridge locations"], answer: 2, why: "«Neighbors showed up at the hearing instead, forty of them, and the complaint was withdrawn». Y añade: «If that first meeting had gone differently, none of the others would exist»." },
    ],
    discuss: [
      { it: "Would a community fridge work on a corner of your neighborhood? What would you leave in it?", es: "¿Funcionaría un refrigerador comunitario en una esquina de tu barrio? ¿Qué dejarías dentro?" },
      { it: "The fridge «never stares». Why is dignity so important in the way we help others?", es: "El refrigerador «nunca se queda mirando». ¿Por qué es tan importante la dignidad en la forma en que ayudamos a los demás?" },
    ],
  },
];
