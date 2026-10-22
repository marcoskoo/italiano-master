/* ── EN · Notizie C2 · batch B (v9.39) ───────────────────────────────
   Advanced American English news, Voice of America Learning English
   method. 100% original didactic content. Body: 5-6 paragraphs,
   370-425 words, literary register with irony and rhetoric, nuanced
   hedging and register variation. Fields `.it` = English (study
   language), `.es` = Spanish. Ids en-news-c2-04…15. */

import type { NewsItem } from "../../news";

export const EN_NEWS_C2B: NewsItem[] = [

  /* ═══ C2 · 4 — Science ═══ */
  {
    id: "en-news-c2-04", cat: "scienza", level: "C2", place: "Isle Royale", minutes: 6,
    title: "Isle Royale: the longest argument in ecology",
    titleEs: "Isla Royale: la discusión más larga de la ecología",
    lead: {
      it: "On a wilderness island in Lake Superior, wolves and moose have been having the same argument for almost seventy years. Nobody has refereed the match; a handful of scientists has kept the score.",
      es: "En una isla salvaje del lago Superior, lobos y alces mantienen la misma discusión desde hace casi setenta años. Nadie ha arbitrado el partido; un puñado de científicos ha llevado el marcador.",
    },
    paragraphs: [
      { it: "The study began as an accident of weather. In the winter of 1949, an ice bridge joined the island to Ontario, and a pair of wolves trotted twenty miles across Lake Superior in search of food, found moose, and stayed. A decade later a patient ecologist arrived to count what he called «a perfect mistake»: one island, one predator, one prey, and almost no room for excuses. Science has been reading the island's ledger ever since.",
      es: "El estudio empezó por un accidente del clima. En el invierno de 1949, un puente de hielo unió la isla con Ontario, y una pareja de lobos cruzó al trote treinta kilómetros del lago Superior en busca de comida, encontró alces y se quedó. Una década después, un ecólogo paciente llegó a contar lo que llamó «un error perfecto»: una isla, un depredador, una presa y casi sin espacio para excusas. Desde entonces, la ciencia lee el libro de cuentas de la isla." },
      { it: "The argument runs in long, slow cycles. When wolves prosper, moose thin out and the balsam fir recovers; when wolves starve, moose multiply until they eat the forest that feeds them, and then starve themselves, politely, a few winters later. Neither side ever wins, and neither side is meant to. «You learn quickly not to root for anyone,» says Dr. Margaret Osgood, who has counted the herds for twenty-six winters. «The island is not a match; it is a marriage.»",
      es: "La discusión avanza en ciclos largos y lentos. Cuando los lobos prosperan, los alces se ralean y el abeto balsámico se recupera; cuando los lobos pasan hambre, los alces se multiplican hasta comerse el bosque que los alimenta, y luego ellos mismos pasan hambre, con cortesía, unos inviernos después. Ninguna parte gana nunca, y ninguna está destinada a ganar. «Aprendes enseguida a no hacerle barra a nadie», dice la doctora Margaret Osgood, que ha contado las manadas durante veintiséis inviernos. «La isla no es un partido; es un matrimonio.»" },
      { it: "Then the argument nearly ended by inbreeding. Cut off from the mainland, the wolves married their cousins until the population fell to two — a father and a daughter, both doomed, in the impassive way of animals. In 2018 the count reached zero, and the National Park Service, which administers the island as official wilderness, did something magnificently paradoxical: it flew in new wolves from the mainland and released them. To keep the experiment wild, the managers had to intervene.",
      es: "Luego la discusión estuvo a punto de terminar por endogamia. Cortados del continente, los lobos se cruzaron entre primos hasta que la población quedó en dos — un padre y una hija, ambos condenados, con la impasibilidad propia de los animales. En 2018 el conteo llegó a cero, y el Servicio de Parques Nacionales, que administra la isla como naturaleza salvaje oficial, hizo algo magníficamente paradójico: trajo nuevos lobos del continente en avión y los liberó. Para mantener salvaje el experimento, los gestores tuvieron que intervenir." },
      { it: "The ledger now spans almost seven decades, the longest continuous study of a predator and its prey anywhere on Earth, and its newest chapters are about a third party. Ice bridges, which once delivered fresh blood every few winters, now form rarely and melt fast; the lake, not the wolves, sets the schedule. «People ask what we will do when the ice stops coming,» Osgood says. «The island will answer before we do. It always has.»",
      es: "El libro de cuentas ya abarca casi siete décadas, el estudio continuo más largo de un depredador y su presa que existe sobre la Tierra, y sus capítulos más recientes hablan de un tercer participante. Los puentes de hielo, que antes traían sangre nueva cada pocos inviernos, ahora se forman rara vez y se derriten pronto; el lago, y no los lobos, fija el calendario. «La gente pregunta qué haremos cuando el hielo deje de llegar», dice Osgood. «La isla responderá antes que nosotros. Siempre lo ha hecho.»" },
      { it: "What the study has produced, beyond hundreds of papers, is a standard of patience. Doctoral students arrive, turn gray, and hand their notebooks on; the moose are oblivious, the wolves are dead and replaced, the fir trees keep their own slow minutes. Somewhere on the island, at this hour, a beaver is felling a birch for reasons of its own, and the ledger does not record it. Even the longest argument, Osgood likes to say, has margins.",
      es: "Lo que el estudio ha producido, más allá de cientos de artículos, es una vara de medir la paciencia. Los doctorandos llegan, encanecen y pasan sus cuadernos a otros; los alces están ajenos a todo, los lobos están muertos y sustituidos, los abetos llevan su propio reloj lento. En algún punto de la isla, a esta hora, un castor está talando un abedul por razones suyas, y el libro de cuentas no lo registra. Hasta la discusión más larga, le gusta decir a Osgood, tiene márgenes." },
    ],
    words: [
      { it: "the ledger", es: "el libro de cuentas", note: "figurado: como «llevar los libros» de una empresa" },
      { it: "to root for", es: "animar a, hacer barra por", note: "se hace root for un equipo; nunca «root» a secas" },
      { it: "inbreeding", es: "la endogamia, la reproducción entre parientes" },
      { it: "oblivious", es: "ajeno, que no se entera de nada", note: "falso amigo: no significa «obvio»" },
      { it: "a beaver", es: "un castor" },
      { it: "the balsam fir", es: "el abeto balsámico" },
    ],
    questions: [
      { q: "¿Cómo llegaron los primeros lobos a la isla?", options: ["They followed fishing boats across the open water", "They crossed an ice bridge from Ontario in the winter of 1949", "Rangers released them to control the moose in the sixties", "They swam behind the last ferry of the season"], answer: 1, why: "«an ice bridge joined the island to Ontario, and a pair of wolves trotted twenty miles across Lake Superior in search of food»." },
      { q: "¿Qué hizo el National Park Service cuando el número de lobos llegó a cero en 2018?", options: ["It moved the surviving moose to the mainland", "It closed the island to researchers for a decade", "It flew in new wolves from the mainland and released them", "It declared the study finished"], answer: 2, why: "«In 2018 the count reached zero» y «it flew in new wolves from the mainland and released them»." },
      { q: "¿Por qué compara Osgood la isla con un matrimonio y no con un partido?", options: ["Because the researchers get married during the study", "Because the moose always win the last round", "Because the wolves never leave the island voluntarily", "Because the two sides are bound in slow cycles and neither is meant to win"], answer: 3, why: "«Neither side ever wins, and neither side is meant to» — la relación es continua y sin ganadores, como un matrimonio." },
      { q: "¿Qué sugiere la frase de que hasta la discusión más larga «tiene márgenes»?", options: ["That part of what happens on the island will always escape the scientists' notebooks", "That the study has finally recorded everything important", "That the notebooks should be printed with wider margins", "That the argument is about to end"], answer: 0, why: "«a beaver is felling a birch for reasons of its own, and the ledger does not record it»: hay vida en la isla que queda fuera del estudio." },
    ],
    discuss: [
      { it: "The study needed seventy years of patience. What question in your own field — or your own life — deserves that kind of patience?", es: "El estudio necesitó setenta años de paciencia. ¿Qué pregunta de tu propio campo — o de tu propia vida — merece ese tipo de paciencia?" },
      { it: "Managers intervened to keep the wilderness «wild». Where else does protecting something require changing it?", es: "Los gestores intervinieron para mantener «salvaje» la naturaleza. ¿En qué otros casos proteger algo exige cambiarlo?" },
    ],
  },

  /* ═══ C2 · 5 — Technology ═══ */
  {
    id: "en-news-c2-05", cat: "tecnologia", level: "C2", place: "Chattanooga", minutes: 6,
    title: "Chattanooga: the city that got tired of waiting",
    titleEs: "Chattanooga: la ciudad que se cansó de esperar",
    lead: {
      it: "In 2011, while a private company was still promising Chattanooga a modern network, the city finished building its own. A tornado had wrecked the grid; the town rebuilt it as the smartest in the country — and ended up owning the fastest internet in America.",
      es: "En 2011, mientras una empresa privada seguía prometiendo a Chattanooga una red moderna, la ciudad terminó de construir la suya. Un tornado había destrozado la red eléctrica; el pueblo la reconstruyó como la más inteligente del país — y acabó poseyendo el internet más rápido de Estados Unidos.",
    },
    paragraphs: [
      { it: "The story begins with weather. In the spring of 2011, tornadoes tore through the Tennessee Valley and left the electric grid in pieces; the city's utility, publicly owned since the nineteen-thirties, rerouted power around the damage with a new smart grid and restored most neighborhoods in days instead of weeks. Strung on the same poles, in the same trench, ran something less visible: optical fiber, no thicker than a pencil, carrying traffic at speeds the country had never seen at street level.",
      es: "La historia empieza con el clima. En la primavera de 2011, unos tornados arrasaron el valle de Tennessee y dejaron la red eléctrica hecha pedazos; la empresa de servicios de la ciudad, de propiedad pública desde los años treinta, redirigió la corriente alrededor de los daños con una nueva red inteligente y restauró la mayoría de los barrios en días y no en semanas. En los mismos postes, en la misma zanja, corría algo menos visible: fibra óptica, no más gruesa que un lápiz, transportando tráfico a velocidades que el país nunca había visto a nivel de calle." },
      { it: "The city had built the network because a private provider had promised one for years and never delivered. When the fiber was switched on, Chattanooga became the first American city to offer gigabit speeds to every address — two hundred times the average connection of the day, and a boast the town wore like a new coat. Nicknames followed: the Gig City. So did engineers, start-ups, and a polite argument about who ought to own the wires.",
      es: "La ciudad había construido la red porque una proveedora privada llevaba años prometiéndola y nunca la entregó. Cuando se encendió la fibra, Chattanooga se convirtió en la primera ciudad estadounidense en ofrecer velocidad de gigabit a cada domicilio — doscientas veces la conexión media de la época, y una fanfarronada que el pueblo estrenó como un abrigo nuevo. Los apodos llegaron: la Gig City. También llegaron ingenieros, start-ups y una discusión cortés sobre quién debería ser dueño de los cables." },
      { it: "The engineer's version is less poetic and better. «A grid that cannot see itself can only be repaired by shouting at it,» says Harriet Vance, who has kept the system running for eleven years. «Our lines report their own faults before the phone rings. When a tree falls at three in the morning, the network routes around it, the lights stay on, and the customer sleeps. That, more than the speed, is the product.»",
      es: "La versión de la ingeniera es menos poética y mejor. «Una red que no puede verse a sí misma solo puede repararse gritándole», dice Harriet Vance, que ha mantenido el sistema en marcha durante once años. «Nuestras líneas informan de sus propias averías antes de que suene el teléfono. Si un árbol cae a las tres de la madrugada, la rodea la red, las luces se quedan encendidas y el cliente duerme. Eso, más que la velocidad, es el producto.»" },
      { it: "The argument is older than the fiber. Telephone and cable companies sued; state legislatures, lobbied and lobbied again, passed laws making it harder for other cities to copy the experiment. The defenders answer with a shrug and an invoice: the network has paid its bonds early, the utility's rates are among the region's lowest, and the storm outages that once took weeks now take hours. Impatience, it turns out, is an asset class.",
      es: "La discusión es más antigua que la fibra. Las telefónicas y las compañías de cable demandaron; las legislaturas estatales, presionadas una y otra vez, aprobaron leyes que dificultaban que otras ciudades copiaran el experimento. Los defensores responden con un encogimiento de hombros y una factura: la red ha amortizado sus bonos antes de tiempo, las tarifas del servicio público están entre las más bajas de la región, y los cortes por tormenta que antes llevaban semanas ahora llevan horas. La impaciencia, a final de cuentas, es una clase de activo." },
      { it: "What the rest of the country takes from Chattanooga is a lesson in verbs. The city did not ask permission to wait; it trenched, it strung, it billed, and it maintains. «Somewhere upstream, a customer in another city is still on hold with a provider,» Vance says, watching the river below her office. «We stopped waiting. That is the whole innovation, if you want it in one sentence.»",
      es: "Lo que el resto del país puede llevarse de Chattanooga es una lección de verbos. La ciudad no pidió permiso para esperar; cavó zanjas, tendió cables, facturó y mantiene. «En algún punto río arriba, un cliente de otra ciudad sigue en espera con su proveedor», dice Vance, mirando el río desde su oficina. «Nosotros dejamos de esperar. Esa es toda la innovación, si la quieres en una frase.»" },
    ],
    words: [
      { it: "the grid", es: "la red (eléctrica)" },
      { it: "a trench", es: "una zanja" },
      { it: "rerouted", es: "redirigido, desviado" },
      { it: "a boast", es: "una fanfarronada, un alarde" },
      { it: "an invoice", es: "una factura" },
      { it: "on hold", es: "en espera (telefónica)" },
    ],
    questions: [
      { q: "¿Cómo pudo Chattanooga restaurar la luz en días y no en semanas tras los tornados de 2011?", options: ["Renting generators from neighboring states", "Switching the whole valley off for a month", "Its smart grid rerouted power around the damage by itself", "Private technicians paid overtime"], answer: 2, why: "«rerouted power around the damage with a new smart grid and restored most neighborhoods in days instead of weeks»." },
      { q: "¿Por qué decidió la ciudad construir su propia red de fibra?", options: ["A federal law required every city to build one", "The university donated its laboratory network", "River floods kept cutting the copper lines", "A private provider had promised a network for years and never delivered it"], answer: 3, why: "«The city had built the network because a private provider had promised one for years and never delivered»." },
      { q: "¿Por qué dice Vance que la red que «se ve a sí misma» vale más que la velocidad?", options: ["Because the lines report their own faults before the phone rings, and customers sleep through the outage", "Because the speed is impossible to measure correctly", "Because the engineers refuse to work at night", "Because the bills are calculated from the fault reports"], answer: 0, why: "«Our lines report their own faults before the phone rings» y «the lights stay on, and the customer sleeps»." },
      { q: "¿Qué quiere decir la noticia con que «la impaciencia es una clase de activo»?", options: ["That the city acts without measuring the consequences", "That building the infrastructure itself ended up creating economic value for the town", "That municipal bonds always turn out well", "That impatient people make the best engineers"], answer: 1, why: "«the network has paid its bonds early, the utility's rates are among the region's lowest» — la impaciencia inicial se convirtió en valor." },
    ],
    discuss: [
      { it: "Would you trust your own city to run its internet? Which services should never be private, in your view?", es: "¿Confiarías en que tu propia ciudad gestione su internet? ¿Qué servicios no deberían ser nunca privados, en tu opinión?" },
      { it: "«We stopped waiting.» What have you stopped waiting for in your life — and built yourself instead?", es: "«Dejamos de esperar.» ¿Qué has dejado de esperar tú en tu vida — y has construido por tu cuenta?" },
    ],
  },

  /* ═══ C2 · 6 — Environment ═══ */
  {
    id: "en-news-c2-06", cat: "ambiente", level: "C2", place: "Klamath River", minutes: 6,
    title: "Klamath River: taking down the walls",
    titleEs: "El río Klamath: derribar los muros",
    lead: {
      it: "Between 2023 and 2024, crews demolished four dams on the Klamath River, the largest removal project of its kind in American history. The river finished the job itself, and the salmon, without being asked, came home.",
      es: "Entre 2023 y 2024, unas cuadrillas demolieron cuatro presas en el río Klamath, el mayor proyecto de demolición de su tipo en la historia estadounidense. El río terminó el trabajo él solo, y los salmones, sin que nadie se lo pidiera, volvieron a casa.",
    },
    paragraphs: [
      { it: "The dams went up for ordinary reasons. In the first half of the last century, four hydroelectric walls rose on the Klamath, a river that drains the mountains where Oregon and California still quarrel over water; they made electricity for a rural region that had none, and they made it cheap. They also made warm, shallow reservoirs that bloomed with toxic algae every summer, and they cut off the cold headwaters where the Chinook salmon had spawned for ten thousand generations.",
      es: "Las presas se levantaron por razones corrientes. En la primera mitad del siglo pasado, cuatro muros hidroeléctricos se alzaron sobre el Klamath, un río que drena las montañas donde Oregón y California siguen peleándose por el agua; produjeron electricidad para una región rural que no tenía ninguna, y la produjeron barata. También produjeron embalses cálidos y someros que florecían de algas tóxicas cada verano, y cortaron las cabeceras frías donde el salmón chinook había desovado durante diez mil generaciones." },
      { it: "For decades the tribes along the lower river petitioned, and for decades the answer was a shrug. What finally moved the walls was arithmetic: renewing the federal license would have cost the power company more than tearing the dams down, and in 2016 the utility itself proposed surrender. By 2024 the last of the four was gone — the largest dam removal in American history, achieved, in the end, by accountants. The arithmetic, everyone agreed, was unusually persuasive.",
      es: "Durante décadas, las tribus del tramo bajo del río pidieron justicia por petición, y durante décadas la respuesta fue un encogimiento de hombros. Lo que finalmente movió los muros fue la aritmética: renovar la licencia federal le habría costado a la eléctrica más que derribar las presas, y en 2016 la propia empresa propuso rendirse. Para 2024 la última de las cuatro había desaparecido — la mayor demolición de presas de la historia estadounidense, lograda, al final, por los contables. La aritmética, coincidieron todos, resultó inusualmente persuasiva." },
      { it: "The demolition was quieter than the word suggests. Crews drew down the reservoirs slowly, moved millions of tons of sediment downstream in managed pulses, and hauled the concrete away in pieces; the crushed concrete became the base of new roads. Then the river did the rest. Within weeks, fall-run Chinook were spawning in gravel that had spent a century underwater — the fish, as one biologist put it, had kept the address.",
      es: "La demolición fue más silenciosa de lo que sugiere la palabra. Las cuadrillas vaciaron los embalses despacio, trasladaron millones de toneladas de sedimento río abajo en pulsos controlados y se llevaron el hormigón por partes; el hormigón triturado se convirtió en la base de carreteras nuevas. Después el río hizo el resto. En cuestión de semanas, el chinook de otoño desovaba en gravilla que había pasado un siglo bajo el agua — los peces, como dijo un biólogo, tenían guardada la dirección." },
      { it: "«We did not restore the river,» says Dr. Peter Callahan, a fisheries biologist who has worked the Klamath for nineteen years. «We stopped preventing it. The distinction matters, because it humbles everybody involved.» The salmon returned on their own schedule; so did the uncertainty. Drought, water rights and invasive species never signed the agreement, and the valley's oldest quarrel — who gets the water, and when — survived the demolition intact. The paper was signed; the weather was not a party to it.",
      es: "«Nosotros no restauramos el río», dice el doctor Peter Callahan, biólogo pesquero que lleva diecinueve años trabajando en el Klamath. «Dejamos de impedírselo. La distinción importa, porque humilla a todos los implicados.» Los salmones volvieron según su propio calendario; también lo hizo la incertidumbre. La sequía, los derechos del agua y las especies invasoras nunca firmaron el acuerdo, y la disputa más vieja del valle — quién recibe el agua, y cuándo — sobrevivió intacta a la demolición. El papel quedó firmado; el tiempo no fue parte en el acuerdo." },
      { it: "What the project proved is narrower than hope and larger than engineering: that a river, given a decade of paperwork and a few good winters, will do most of the work itself. The banks are greening where the reservoirs stood; the first willows were free. «The river won on accounting, not poetry,» Callahan says. «But it wins every year now. That is the poetry.»",
      es: "Lo que el proyecto demostró es más estrecho que la esperanza y más grande que la ingeniería: que un río, con una década de papeleo y unos cuantos buenos inviernos, hará él solo la mayor parte del trabajo. Las orillas reverdecen donde estaban los embalses; los primeros sauces salieron gratis. «El río ganó por contabilidad, no por poesía», dice Callahan. «Pero ahora gana todos los años. Eso es la poesía.»" },
    ],
    words: [
      { it: "a dam (dams)", es: "una presa, una represa" },
      { it: "the headwaters", es: "las cabeceras del río" },
      { it: "spawning", es: "el desove; desovar" },
      { it: "sediment", es: "el sedimento" },
      { it: "reservoirs", es: "los embalses, los pantanos" },
      { it: "tearing down", es: "derribar, demoler" },
    ],
    questions: [
      { q: "¿Qué problema causaban cada verano los embalses de las presas del Klamath?", options: ["They flooded the riverside towns", "They attracted too many tourists", "They blocked the migration of geese", "Their warm, shallow water bloomed with toxic algae"], answer: 3, why: "«They also made warm, shallow reservoirs that bloomed with toxic algae every summer»." },
      { q: "¿Qué razón práctica terminó decidiendo la demolición de las presas?", options: ["Renewing the federal license would have cost more than tearing the dams down", "An international boycott of the utility", "An earthquake cracked the oldest dam", "The state took the river over"], answer: 0, why: "«renewing the federal license would have cost the power company more than tearing the dams down, and in 2016 the utility itself proposed surrender»." },
      { q: "¿Qué significa que los salmones «tenían guardada la dirección»?", options: ["They had been tagged with chips by the biologists", "They still knew, by instinct, where to spawn upstream", "They had waited in hatcheries for decades", "The fishermen carried them upstream in trucks"], answer: 1, why: "«Within weeks, fall-run Chinook were spawning in gravel that had spent a century underwater»: volvieron a desovar por sí solos en su hábitat ancestral." },
      { q: "¿Por qué insiste Callahan en decir «dejamos de impedírselo» y no «lo restauramos»?", options: ["Because the restoration was paid by outsiders", "Because the river does not need salmon anymore", "Because the river heals itself once the obstacle is removed — the credit is not all human", "Because he dislikes the engineers on the project"], answer: 2, why: "«We did not restore the river» y «We stopped preventing it. The distinction matters, because it humbles everybody involved.»" },
    ],
    discuss: [
      { it: "Should a river ever be dammed again? Who should decide — the region that needs the power, or the one that lives with the river?", es: "¿Debería volver a represarse un río? ¿Quién debería decidirlo: la región que necesita la energía o la que vive con el río?" },
      { it: "The Klamath was freed by accounting, not by idealism. Does the motivation matter if the result is the same?", es: "El Klamath se liberó por contabilidad, no por idealismo. ¿Importa la motivación si el resultado es el mismo?" },
    ],
  },

  /* ═══ C2 · 7 — Health ═══ */
  {
    id: "en-news-c2-07", cat: "salute", level: "C2", place: "Loma Linda", minutes: 6,
    title: "Loma Linda: the town where old age is a team sport",
    titleEs: "Loma Linda: el pueblo donde la vejez es un deporte de equipo",
    lead: {
      it: "In a valley east of Los Angeles, a university town has been quietly outliving the rest of America for more than a century. Researchers have spent decades asking its residents for the secret; the residents, politely, find the question odd.",
      es: "En un valle al este de Los Ángeles, un pueblo universitario lleva más de un siglo viviendo más tiempo que el resto de Estados Unidos, sin alardear. Los investigadores llevan décadas preguntando a sus vecinos por el secreto; los vecinos, con cortesía, encuentran rara la pregunta.",
    },
    paragraphs: [
      { it: "East of Los Angeles, in a valley that smells of orange blossom and hospital antiseptic, a university town has been quietly outliving the rest of the country for more than a century. Residents of Loma Linda live, on average, eight to ten years longer than other Americans, and they spend the extra years walking, volunteering, and being studied. Researchers arrived with clipboards and skepticism in the nineteen-eighties; both the researchers and the skepticism are still there.",
      es: "Al este de Los Ángeles, en un valle que huele a azahar y a antiséptico de hospital, un pueblo universitario lleva más de un siglo viviendo más tiempo que el resto del país, sin alardear. Los residentes de Loma Linda viven, en promedio, de ocho a diez años más que otros estadounidenses, y esos años extra los pasan caminando, haciendo voluntariado y siendo objeto de estudio. Los investigadores llegaron con carpetas y escepticismo en los años ochenta; tanto los investigadores como el escepticismo siguen allí." },
      { it: "The town grew around a health college founded in 1905 by a religious community that took its rest seriously. One day a week, everything stops — shops, homework, the news — by doctrine rather than by law. Smoking never took hold; the food skews vegetarian; the water is ordinary and the sunshine is standard Californian issue. Nothing, in other words, that a pharmaceutical company could patent — which is precisely why it works here and almost nowhere else.",
      es: "El pueblo creció alrededor de una facultad de salud fundada en 1905 por una comunidad religiosa que se tomaba muy en serio su descanso. Un día a la semana, todo se detiene — tiendas, deberes, noticias — por doctrina y no por ley. El tabaco nunca prendió; la comida tira a vegetariana; el agua es corriente y el sol es el modelo estándar de California. Nada, en otras palabras, que una farmacéutica pudiera patentar — que es exactamente por lo que funciona aquí y casi en ningún otro sitio." },
      { it: "«The recipe is embarrassingly dull,» says Dr. Helen Barclay, a gerontologist who has followed five hundred residents for two decades. «Walk every day. Eat plants. Have lunch with people you love. Rest one day a week whether or not you think you need it. What is rare here is not the discipline — it is that the habits are shared, so nobody has to be a hero.»",
      es: "«La receta es vergonzosamente aburrida», dice la doctora Helen Barclay, gerontóloga que ha seguido a quinientos residentes durante dos décadas. «Camina todos los días. Come plantas. Almuerza con gente que quieres. Descansa un día a la semana, creas o no necesitarlo. Lo raro aquí no es la disciplina: es que los hábitos se comparten, así que nadie tiene que ser un héroe.»" },
      { it: "That is the finding the longevity industry finds hardest to digest: the moat is social. In Loma Linda the dangerous choices are inconvenient and the healthy ones are normal, which is the opposite of the surrounding country. A newcomer who joins a walking club inherits, free of charge, a schedule, a purpose, and a set of neighbors who will notice his absence on Thursday. Loneliness, the study's quiet variable, has trouble getting a foothold in a town that expects you somewhere.",
      es: "Ese es el hallazgo que a la industria de la longevidad le cuesta más digerir: el foso es social. En Loma Linda las opciones peligrosas son incómodas y las sanas son normales, que es lo contrario del país circundante. Quien llega y se apunta a un club de caminata hereda, gratis, un horario, un propósito y un grupo de vecinos que notarán su ausencia el jueves. La soledad, la variable discreta del estudio, tiene dificultades para afianzarse en un pueblo que te espera en alguna parte." },
      { it: "The town has its discontents — housing prices, the usual American afflictions, a growing gap between the founders' descendants and the newcomers — and the study's fine print is honest about them. But at six in the morning on the trail behind the hospital, the evidence walks past in twos and threes, average age somewhere north of seventy. The pace is set by the slowest member, which is why, the club's founder liked to say, nobody here is ever dropped.",
      es: "El pueblo tiene sus descontentos — los precios de la vivienda, los males estadounidenses de siempre, la brecha creciente entre los descendientes de los fundadores y los recién llegados — y la letra pequeña del estudio es honesta al respecto. Pero a las seis de la mañana, en el sendero detrás del hospital, la evidencia pasa caminando de dos en dos y de tres en tres, con una media de edad bastante por encima de los setenta. El ritmo lo marca el miembro más lento, que es por lo que, como le gustaba decir al fundador del club, aquí nunca se deja a nadie atrás." },
    ],
    words: [
      { it: "outliving", es: "sobrevivir a, vivir más que" },
      { it: "doctrine", es: "la doctrina" },
      { it: "vegetarian", es: "vegetariano" },
      { it: "a moat", es: "un foso (de castillo)", note: "aquí figurado: lo que protege por completo" },
      { it: "the fine print", es: "la letra pequeña" },
      { it: "in twos and threes", es: "de dos en dos y de tres en tres" },
    ],
    questions: [
      { q: "¿Cuánto más viven los residentes de Loma Linda que el resto de los estadounidenses?", options: ["Eight to ten years longer, on average", "About two years longer", "Exactly the same, but healthier", "Less: the study found no difference"], answer: 0, why: "«Residents of Loma Linda live, on average, eight to ten years longer than other Americans»." },
      { q: "¿Cómo se descansa un día a la semana en Loma Linda?", options: ["By state law, with fines for shops that open", "By doctrine rather than by law: shops, homework and the news simply stop", "Only in summer, when the college closes", "The town votes on it every January"], answer: 1, why: "«One day a week, everything stops — shops, homework, the news — by doctrine rather than by law»." },
      { q: "¿Por qué «nadie tiene que ser un héroe» en Loma Linda?", options: ["Because the doctors do everything for the residents", "Because the climate makes exercise effortless", "Because the healthy habits are shared, so nobody fights alone", "Because heroes are not allowed in the community"], answer: 2, why: "«it is that the habits are shared, so nobody has to be a hero»." },
      { q: "¿Qué significa que «el foso es social»?", options: ["That the town is surrounded by a real moat", "That only rich people can be healthy there", "That health depends on private discipline and willpower", "That the environment makes healthy choices normal and dangerous ones inconvenient"], answer: 3, why: "«the dangerous choices are inconvenient and the healthy ones are normal, which is the opposite of the surrounding country»." },
    ],
    discuss: [
      { it: "Longevity here is a neighborhood, not a pill. Is that true where you live? What would have to change?", es: "La longevidad aquí es un barrio, no una píldora. ¿Es así donde vives tú? ¿Qué tendría que cambiar?" },
      { it: "A weekly day of rest, by doctrine rather than by law. Could you keep one? What would you cut first?", es: "Un día de descanso semanal, por doctrina y no por ley. ¿Podrías mantenerlo tú? ¿Qué recortarías primero?" },
    ],
  },

  /* ═══ C2 · 8 — History ═══ */
  {
    id: "en-news-c2-08", cat: "storia", level: "C2", place: "Cahokia", minutes: 6,
    title: "Cahokia: the city history forgot to mention",
    titleEs: "Cahokia: la ciudad que la historia olvidó mencionar",
    lead: {
      it: "Eight hundred years before skyscrapers, the largest city north of Mexico stood in a floodplain of the Mississippi River. It had pyramids of earth, a calendar of cedar and twenty thousand neighbors; today most Americans cannot name it.",
      es: "Ochocientos años antes de los rascacielos, la ciudad más grande al norte de México se alzaba en una llanura inundable del río Misisipi. Tenía pirámides de tierra, un calendario de cedro y veinte mil vecinos; hoy la mayoría de los estadounidenses no sabe nombrarla.",
    },
    paragraphs: [
      { it: "Ask most Americans to name the largest city north of Mexico in the year 1100, and the guesses land very far from the Mississippi. It stood in the river's floodplain, across from modern St. Louis: Cahokia, a city of ten to twenty thousand people — a population that rivaled London's at the time — built entirely of earth. Its builders had no metal tools, no draft animals and no wheel; they had baskets, mathematics, and time.",
      es: "Pide a la mayoría de los estadounidenses que nombren la ciudad más grande al norte de México en el año 1100, y las respuestas caen muy lejos del Misisipi. Estaba en la llanura inundable del río, frente a la actual San Luis: Cahokia, una ciudad de diez a veinte mil habitantes — una población que rivalizaba con la de Londres en su momento — construida por completo de tierra. Sus constructores no tenían herramientas de metal, ni animales de tiro, ni rueda; tenían cestas, matemáticas y tiempo." },
      { it: "At the center rose Monks Mound, a platform of packed clay ten stories tall with a footprint larger than the Great Pyramid's. Around it spread a central plaza, more than a hundred smaller mounds, fields of maize stretching to the treeline, and a wooden stockade two miles around, rebuilt again and again. A ring of cedar posts marked the solstices with the precision of a clock that had not been invented yet. The posts were replaced as they rotted; the alignment outlived the carpenters.",
      es: "En el centro se alzaba el Monks Mound, una plataforma de arcilla apisonada de diez pisos de altura cuya base superaba a la de la Gran Pirámide. A su alrededor se extendían una plaza central, más de cien túmulos menores, campos de maíz hasta la línea del bosque y una empalizada de madera de dos millas de perímetro, reconstruida una y otra vez. Un anillo de postes de cedro marcaba los solsticios con la precisión de un reloj que aún no se había inventado. Los postes se sustituían a medida que se podían; la alineación sobrevivió a los carpinteros." },
      { it: "The city's name is not its name. «Cahokia» belongs to a tribe that lived near the mounds in the sixteen-hundreds, centuries after the city had emptied; what the builders called themselves was never written down, because writing was not among their inventions. We named the metropolis after its later tenants, which is like crediting the movers with the architecture. The silence is not theirs; it is ours.",
      es: "El nombre de la ciudad no es su nombre. «Cahokia» pertenece a una tribu que vivía cerca de los túmulos en el siglo diecisiete, siglos después de que la ciudad se vaciara; cómo se llamaban a sí mismos sus constructores nunca se escribió, porque la escritura no estaba entre sus invenciones. Bautizamos la metrópoli por sus inquilinos posteriores, lo cual es como acreditar la arquitectura a los de la mudanza. El silencio no es suyo; es nuestro." },
      { it: "The decline is the polite mystery. By 1350 the city was gone — emptied, not sacked; no ash layer, no mass graves telling a single story — only a slow emptying out. Floods, drought, deforestation and political fatigue each have their partisans. «We keep looking for a catastrophe,» says Dr. Gerald Fentress, who has excavated at the site for twenty years. «Perhaps they did the most ordinary thing of all: they decided to leave.»",
      es: "La decadencia es el misterio cortés. Para 1350 la ciudad había desaparecido — vaciada, no saqueada; sin capa de cenizas, sin fosas comunes que cuenten una sola historia — solo un lento vaciarse. Las inundaciones, la sequía, la deforestación y el agotamiento político tienen cada una sus partidarios. «Seguimos buscando una catástrofe», dice el doctor Gerald Fentress, que ha excavado en el yacimiento durante veinte años. «Tal vez hicieron lo más ordinario de todo: decidieron irse.»" },
      { it: "Today the mounds sit between freeways, and school buses unload at the foot of the great platform. Children climb the modern stairs and look out at the arch of a city they can see, toward a city they cannot. Behind them, every June, the sun still rises where the cedar posts said it would — a calendar keeping an appointment with nobody. The plaza is mowed; the ancestors, whoever they were, are presumed content.",
      es: "Hoy los túmulos se sientan entre autopistas, y los autobuses escolares descargan a los pies de la gran plataforma. Los niños suben las escaleras modernas y miran hacia el arco de una ciudad que sí pueden ver, hacia una ciudad que no pueden. A sus espaldas, cada junio, el sol sigue saliendo donde los postes de cedro anunciaban que saldría — un calendario cumpliendo una cita con nadie. Se corta el césped de la plaza; a los ancestros, fueran quienes fueran, se los presume contentos." },
    ],
    words: [
      { it: "a mound (mounds)", es: "un túmulo, un montículo" },
      { it: "the floodplain", es: "la llanura inundable" },
      { it: "maize", es: "el maíz", note: "término culto; en EE. UU. lo coloquial es corn" },
      { it: "a stockade", es: "una empalizada" },
      { it: "the solstices", es: "los solsticios" },
      { it: "rivaled", es: "rivalizaba, equiparaba" },
    ],
    questions: [
      { q: "¿Cuánta gente vivía en Cahokia en su apogeo?", options: ["About two thousand people", "Fewer than one thousand, seasonal workers only", "Ten to twenty thousand — a population that rivaled London's at the time", "Half a million, according to the Spanish chronicles"], answer: 2, why: "«a city of ten to twenty thousand people — a population that rivaled London's at the time»" },
      { q: "¿Por qué «Cahokia» no es el verdadero nombre de la ciudad?", options: ["The name belongs to a tribe that lived near the mounds centuries after the city had emptied", "The builders deliberately kept their name secret", "The name is a Spanish translation of a local word", "The archaeologists could not agree on one"], answer: 0, why: "«belongs to a tribe that lived near the mounds in the sixteen-hundreds, centuries after the city had emptied»" },
      { q: "¿Qué demuestra que la ciudad no era un simple campamento?", options: ["The tourists who visit every summer", "Its location in a floodplain", "The absence of a written language", "Its works: a ten-story mound, a two-mile stockade, maize fields and a solar calendar of cedar posts"], answer: 3, why: "«a wooden stockade two miles around, rebuilt again and again» y «A ring of cedar posts marked the solstices»." },
      { q: "¿Qué sugiere Fentress con «hicieron lo más ordinario: decidieron irse»?", options: ["That a catastrophe destroyed the city after all", "That the fall may have had no dramatic cause — slow change can empty a city", "That the inhabitants were expelled by enemies", "That the archaeologists should stop working on the site"], answer: 1, why: "«We keep looking for a catastrophe» — tal vez la decadencia fue lenta y sin drama." },
    ],
    discuss: [
      { it: "Cahokia shows that even a great city can be forgotten. What do you think our cities will be remembered for — or not?", es: "Cahokia demuestra que hasta una gran ciudad puede olvidarse. ¿Por qué crees que se recordará a las nuestras — o no?" },
      { it: "«We keep looking for a catastrophe.» Why do humans prefer dramatic endings to slow changes?", es: "«Seguimos buscando una catástrofe.» ¿Por qué los humanos prefieren los finales dramáticos a los cambios lentos?" },
    ],
  },

  /* ═══ C2 · 9 — Sports ═══ */
  {
    id: "en-news-c2-09", cat: "sport", level: "C2", place: "Eugene", minutes: 6,
    title: "Eugene: the town that runs",
    titleEs: "Eugene: el pueblo que corre",
    lead: {
      it: "A college town in Oregon has produced more Olympic runners per capita than any other place in America. The locals do not find this remarkable; they blame the rain, which is their way of taking credit.",
      es: "Un pueblo universitario de Oregón ha producido más corredores olímpicos per cápita que cualquier otro lugar de Estados Unidos. Los vecinos no lo encuentran extraordinario; culpan a la lluvia, que es su manera de atribuirse el mérito.",
    },
    paragraphs: [
      { it: "In the Willamette Valley of Oregon, it rains in a way that makes every other sport unreasonable. The town of Eugene turned this to its advantage: if the weather is bad for spectators, build for runners. Over sixty years the town has produced distance runners the way Detroit once produced cars, and per capita it has hosted more Olympic trials than any other American city — a statistic the locals mention the way other towns mention their weather.",
      es: "En el valle de Willamette, en Oregón, llueve de una manera que vuelve irracional cualquier otro deporte. El pueblo de Eugene lo convirtió en ventaja: si el clima es malo para los espectadores, construye para los corredores. En sesenta años, el pueblo ha producido fondistas como Detroit producía coches, y per cápita ha acogido más pruebas clasificatorias olímpicas que cualquier otra ciudad estadounidense — una estadística que los vecinos mencionan como otros pueblos mencionan su clima." },
      { it: "The engine of it was a coach and a wooden stadium. In the nineteen-sixties a university coach decided that running was a craft rather than a punishment, and the town agreed with him. His athletes trained on bark paths through the wet woods, and when his runners needed shoes, he poured rubber into his wife's waffle iron and invented a sole. The waffle iron now sits in a glass case by the track, solemn as a relic — the most consequential kitchen appliance in American sport.",
      es: "El motor de todo fue un entrenador y un estadio de madera. En los años sesenta, un entrenador universitario decidió que correr era un oficio y no un castigo, y el pueblo le dio la razón. Sus atletas entrenaban en senderos de corteza por los bosques húmedos, y cuando sus corredores necesitaban zapatillas, vertió caucho en la waflera de su esposa e inventó una suela. La waflera descansa hoy en una vitrina junto a la pista, solemne como una reliquia — el electrodoméstico más trascendente del deporte estadounidense." },
      { it: "The culture did the rest. In Eugene the question is never whether you run; it is what you are training for. Retired professors jog with sophomores, the hardware store sells racing flats next to the hammers, and the town's nickname — TrackTown — is less a boast than a weather report. «Elsewhere, children ask how fast they ran,» says Miles Kendrick, who has coached high-school milers here for three decades. «Here they ask what's next. It is a better question.»",
      es: "El resto lo hizo la cultura. En Eugene la pregunta nunca es si corres; es para qué entrenas. Profesores jubilados trotan con estudiantes de segundo año, la ferretería vende zapatillas de competición junto a los martillos, y el apodo del pueblo — TrackTown — es menos una fanfarronada que un parte meteorológico. «Fuera de aquí, los niños preguntan qué tan rápido corrieron», dice Miles Kendrick, que lleva tres décadas entrenando a mileros de secundaria aquí. «Aquí preguntan qué viene después. Es una mejor pregunta.»" },
      { it: "Success has its bill. The old wooden stadium was torn down and replaced by a gleaming international venue; the world championships came — the first ever held on American soil — and so did the crowds and the rents. Some locals miss the splintery grandstands where nobody had a bad seat and everybody had a wet one. «We used to be a secret,» Kendrick says. «Secrets pay better in memory than in property tax.»",
      es: "El éxito tiene su factura. El viejo estadio de madera fue demolido y sustituido por una sede internacional reluciente; llegaron los campeonatos del mundo — los primeros que se celebraban en suelo estadounidense — y con ellos las multitudes y los alquileres. Algunos vecinos añoran las tribunas astilladas donde nadie tenía un mal asiento y todos lo tenían mojado. «Antes éramos un secreto», dice Kendrick. «Los secretos pagan mejor en la memoria que en el impuesto a la propiedad.»" },
      { it: "At dawn the arguments subside. On the bark trail along the river, teenagers and eighty-year-olds share the same soft surface, and nobody carries a watch. The town does not run because it wins; it wins, insofar as it does, because it runs — a sentence that would embarrass the citizens, who would point out, correctly, that they have simply never had anything better to do on a rainy Tuesday.",
      es: "Al amanecer, las discusiones se calman. En el sendero de corteza junto al río, adolescentes y ochentones comparten la misma superficie blanda, y nadie lleva reloj. El pueblo no corre porque gane; gana, hasta donde gana, porque corre — una frase que avergonzaría a los vecinos, que señalarían, con razón, que simplemente nunca han tenido nada mejor que hacer un martes lluvioso." },
    ],
    words: [
      { it: "bark", es: "la corteza", note: "bark chips: astillas de corteza con que se cubren las pistas" },
      { it: "a waffle iron", es: "una waflera, una plancha de gofres" },
      { it: "racing flats", es: "las zapatillas de competición (ligeras)" },
      { it: "the grandstands", es: "las tribunas" },
      { it: "per capita", es: "per cápita, por habitante" },
      { it: "splintery", es: "astillado, lleno de astillas" },
    ],
    questions: [
      { q: "¿Cómo convirtió Eugene su clima lluvioso en una ventaja?", options: ["It built the largest indoor stadium in the country", "It switched to winter sports like hockey", "It sold rain equipment to other states", "If the weather is bad for spectators, build for runners"], answer: 3, why: "«if the weather is bad for spectators, build for runners»." },
      { q: "¿Qué hizo el entrenador de los años sesenta cuando sus corredores necesitaban zapatillas?", options: ["He ordered them from a catalog in Boston", "He poured rubber into his wife's waffle iron and invented a sole", "He bought shoes from a local shoemaker", "He taught the runners to go barefoot"], answer: 1, why: "«he poured rubber into his wife's waffle iron and invented a sole»." },
      { q: "¿Por qué es «una mejor pregunta» la que hacen los niños de Eugene?", options: ["Because it looks forward — what you are training for — instead of judging a single result", "Because children cannot read a stopwatch", "Because nobody keeps times in Eugene", "Because the coaches forbid talking about speed"], answer: 0, why: "«Elsewhere, children ask how fast they ran» y «Here they ask what's next.»" },
      { q: "¿Qué crítica se esconde en «los secretos pagan mejor en la memoria que en el impuesto a la propiedad»?", options: ["That the old stadium was ugly", "That the world championships ruined the sport", "That fame and growth raised costs, and some locals miss the quieter past", "That property tax in Oregon is the highest in the nation"], answer: 2, why: "«We used to be a secret» y «Secrets pay better in memory than in property tax»: el crecimiento tuvo un precio." },
    ],
    discuss: [
      { it: "Eugene turned bad weather into a sport. What limitation of your region could become an advantage?", es: "Eugene convirtió el mal clima en un deporte. ¿Qué limitación de tu región podría convertirse en una ventaja?" },
      { it: "«We used to be a secret.» Is growth always worth its price for a small community?", es: "«Antes éramos un secreto.» ¿Vale siempre la pena el precio del crecimiento para una comunidad pequeña?" },
    ],
  },

  /* ═══ C2 · 10 — Economy ═══ */
  {
    id: "en-news-c2-10", cat: "economia", level: "C2", place: "Vidalia", minutes: 6,
    title: "Vidalia: the onion that needed a lawyer",
    titleEs: "Vidalia: la cebolla que necesitó un abogado",
    lead: {
      it: "In southern Georgia grows an onion so sweet it is eaten like an apple — and so contested that state law gives it an address. Outside thirteen counties and a few towns, no onion may legally call itself a Vidalia.",
      es: "En el sur de Georgia crece una cebolla tan dulce que se come como una manzana — y tan disputada que la ley estatal le da una dirección. Fuera de trece condados y unos cuantos pueblos, ninguna cebolla puede llamarse legalmente Vidalia.",
    },
    paragraphs: [
      { it: "In the flatlands of southern Georgia, the soil is poor in sulfur and rich in accidents. In the depths of the Depression, a farmer planted onion seedlings expecting the usual punishing vegetable and harvested something absurd: onions so mild and sweet that customers ate them like apples — some sliced with a pinch of salt, some straight from the hand, with a napkin. He sold them twice as fast as the ordinary kind and, this being the Depression, promptly planted more. Agriculture in Georgia has been riding the accident ever since.",
      es: "En las tierras llanas del sur de Georgia, el suelo es pobre en azufre y rico en accidentes. En lo más hondo de la Depresión, un agricultor plantó plantones de cebolla esperando la verdura punzante de siempre y cosechó algo absurdo: cebollas tan suaves y dulces que los clientes se las comían como manzanas — algunas en rodajas con una pizca de sal, otras directamente de la mano, con servilleta. Las vendió el doble de rápido que las corrientes y, como era la Depresión, plantó más de inmediato. La agricultura de Georgia ha cabalgado sobre el accidente desde entonces." },
      { it: "The explanation was underground. Low sulfur in the sandy loam, mild winters, steady rain: chemistry, not marketing. Agricultural colleges confirmed what the locals suspected — the sweetness was the soil's signature — and word traveled. A state farmers' market in the town of Vidalia gave the crop its name, and by the nineteen-eighties the onion was famous enough to be counterfeited, which in Georgia is the traditional second act.",
      es: "La explicación estaba bajo tierra. Poco azufre en el suelo franco arenoso, inviernos suaves, lluvia constante: química, no marketing. Las facultades de agronomía confirmaron lo que los locales sospechaban — la dulzura era la firma del suelo — y la noticia viajó. Un mercado agrícola estatal en el pueblo de Vidalia dio nombre a la cosecha, y para los años ochenta la cebolla era lo bastante famosa para ser falsificada, que en Georgia es el tradicional segundo acto." },
      { it: "What happened next made the Vidalia onion, legally speaking, the most defended vegetable in America. State law defined exactly where it may be grown — thirteen counties and a scattering of neighboring towns — federal rules followed, and inspectors now trace each crate from field to shelf, sticker by sticker. Shipping before the official pack date is an offense. Other regions grow sweet onions; only this one owns the adjective.",
      es: "Lo que vino después convirtió a la cebolla Vidalia, en términos legales, en la verdura más defendida de Estados Unidos. La ley estatal definió exactamente dónde puede cultivarse — trece condados y un puñado de pueblos vecinos — siguieron las normas federales, y los inspectores hoy rastrean cada caja del campo al estante, etiqueta por etiqueta. Expedir antes de la fecha oficial de empaque es una infracción. Otras regiones cultivan cebollas dulces; solo esta es dueña del adjetivo." },
      { it: "«You can copy the seed, you can copy the calendar,» says Bobbie Jean Farley, whose family has grown the crop for three generations. «You cannot copy the dirt. The onion reads the ground all winter and tells you at harvest whether you are a farmer or a tourist.» Her farm hires a hundred hands every April, and the festival in town elects an onion queen, which nobody involved treats as a joke.",
      es: "«Puedes copiar la semilla, puedes copiar el calendario», dice Bobbie Jean Farley, cuya familia ha cultivado la cosecha durante tres generaciones. «No puedes copiar la tierra. La cebolla lee el suelo todo el invierno y te dice en la cosecha si eres agricultor o turista.» Su granja contrata a cien braceros cada abril, y el festival del pueblo elige una reina de la cebolla, algo que nadie de los implicados toma a broma." },
      { it: "The borders are patrolled, mostly by paperwork. In a typical season, investigators seize shipments of impostor onions — sweet onions from three continents wearing Vidalia stickers — and the growers' association runs its tests with the seriousness of a doping lab. The onion, which cannot read, is innocent of all of it. The law, on the other hand, reads the onion. Somewhere at a farmers' market, a customer bites, and decides whether the law tasted right.",
      es: "Las fronteras se patrullan, sobre todo, con papeleo. En una temporada típica, los investigadores incautan cargamentos de cebollas impostoras — cebollas dulces de tres continentes con etiquetas de Vidalia — y la asociación de productores hace sus análisis con la seriedad de un laboratorio antidopaje. La cebolla, que no sabe leer, es inocente de todo ello. La ley, en cambio, sí lee la cebolla. En algún mercado agrícola, un cliente muerde y decide si la ley sabía bien." },
    ],
    words: [
      { it: "mild", es: "suave, nada picante", note: "mild onion: cebolla suave; también «templado» hablando del clima" },
      { it: "the loam (sandy loam)", es: "el suelo franco (arenoso)" },
      { it: "a crate", es: "una caja (de madera)" },
      { it: "shipments", es: "los envíos, los cargamentos" },
      { it: "to seize", es: "incautar, decomisar" },
      { it: "impostor", es: "falsificado, que usurpa una identidad" },
    ],
    questions: [
      { q: "¿Qué tenía de especial la cosecha del agricultor en plena Depresión?", options: ["The onions were so mild and sweet that customers ate them like apples", "The onions grew twice the normal size", "The crop failed and he switched to peaches", "The onions were blue and became a local curiosity"], answer: 0, why: "«onions so mild and sweet that customers ate them like apples»." },
      { q: "¿Qué explicaba la dulzura de la cebolla de Vidalia?", options: ["A secret fertilizer recipe", "The altitude of the Blue Ridge Mountains", "Low sulfur in the sandy loam, mild winters and steady rain", "A special seed brought from the Mediterranean"], answer: 2, why: "«Low sulfur in the sandy loam, mild winters, steady rain: chemistry, not marketing»." },
      { q: "¿Por qué se dice que la cebolla es «la verdura más defendida de Estados Unidos»?", options: ["Because farmers guard the fields at night", "Because state law defines where it can be grown, and inspectors trace each crate from field to shelf", "Because it appears on the state flag", "Because it is endangered"], answer: 1, why: "«State law defined exactly where it may be grown» y «inspectors now trace each crate from field to shelf»." },
      { q: "¿Qué quiere decir Farley con «puedes copiar la semilla; no puedes copiar la tierra»?", options: ["That seeds are cheap and land is expensive", "That farmers should patent their seeds", "That her family refuses to sell the farm", "That the soil — the local terroir — is what makes the crop inimitable"], answer: 3, why: "«You can copy the seed, you can copy the calendar» y «You cannot copy the dirt.»" },
    ],
    discuss: [
      { it: "Should food names be protected by law like place names? Where would you draw the line?", es: "¿Deberían protegerse por ley los nombres de alimentos como los nombres de lugares? ¿Dónde trazarías la línea?" },
      { it: "«You cannot copy the dirt.» Is authenticity real, or is it good marketing? Give an example.", es: "«No puedes copiar la tierra.» ¿Es real la autenticidad o es buen marketing? Da un ejemplo." },
    ],
  },

  /* ═══ C2 · 11 — Culture ═══ */
  {
    id: "en-news-c2-11", cat: "cultura", level: "C2", place: "Marfa", minutes: 6,
    title: "Marfa: the desert that became a gallery",
    titleEs: "Marfa: el desierto que se convirtió en galería",
    lead: {
      it: "In 1971 a New York sculptor moved to a near-empty cavalry town in West Texas because the light was honest. Half a century later, Marfa's population has barely changed — and its reputation has circled the globe.",
      es: "En 1971 un escultor neoyorquino se mudó a un pueblo casi vacío de caballería en el oeste de Texas porque la luz era honesta. Medio siglo después, la población de Marfa apenas ha cambiado — y su fama ha dado la vuelta al mundo.",
    },
    paragraphs: [
      { it: "In 1971 a sculptor from New York, tired of paying Manhattan rent for work that needed a mile of horizon, moved to a decommissioned cavalry post in the Chihuahuan Desert of West Texas. The town he chose, Marfa, had fifteen hundred residents, a courthouse, and light so clean it looked rationed, filtered by desert distance and no industry to speak of. He bought artillery sheds and half a mile of empty barracks, and never seriously left.",
      es: "En 1971, un escultor de Nueva York, cansado de pagar alquileres de Manhattan por obras que necesitaban una milla de horizonte, se mudó a un puesto de caballería clausurado en el desierto Chihuahuense del oeste de Texas. El pueblo que eligió, Marfa, tenía mil quinientos habitantes, un juzgado y una luz tan limpia que parecía racionada, filtrada por la distancia del desierto y sin industria que mencionar. Compró naves de artillería y media milla de cuarteles vacíos, y nunca se fue de verdad." },
      { it: "What he built there became the argument of American minimalism: shelves of raw aluminum boxes, a hundred of them, polished to the point of invisibility, sitting in old sheds where the sun repaints them hourly. Art that could not fit in a gallery got a hangar instead. Minimalism, which in a Manhattan gallery can look like a joke about emptiness, looks in a Texas hangar like a religious architecture of attention. Visitors now fly in from Seoul and Berlin to stand in the desert and look at, formally speaking, almost nothing. They line up, in effect, to verify the emptiness.",
      es: "Lo que construyó allí se convirtió en el argumento del minimalismo estadounidense: estanterías de cajas de aluminio en bruto, cien de ellas, pulidas hasta la invisibilidad, instaladas en naves viejas donde el sol las repinta cada hora. El arte que no cabía en una galería recibió un hangar. El minimalismo, que en una galería de Manhattan puede parecer un chiste sobre el vacío, en un hangar de Texas parece una arquitectura religiosa de la atención. Los visitantes ahora llegan en avión desde Seúl y Berlín para plantarse en el desierto y mirar, en términos formales, casi nada. Hacen cola, en efecto, para verificar el vacío." },
      { it: "The town's economics reversed politely. Motels filled, a bookstore opened, food trucks learned vegetarian Mexican, and painters priced out of Brooklyn priced out locals in turn. «The art came for the silence and brought noise,» says Winslow Hart, who runs a gallery on the main street. «Our job is to keep the ratio sensible. Marfa is a small stage; if everyone talks at once, you lose the play.»",
      es: "La economía del pueblo se invirtió con cortesía. Los moteles se llenaron, abrió una librería, los camiones de comida aprendieron cocina mexicana vegetariana, y los pintores desplazados por los precios de Brooklyn desplazaron a su vez a los locales. «El arte vino por el silencio y trajo ruido», dice Winslow Hart, que regenta una galería en la calle principal. «Nuestro trabajo es mantener la proporción sensata. Marfa es un escenario pequeño; si todos hablan a la vez, se pierde la obra.»" },
      { it: "There is an older exhibit that charges nothing. Southeast of town, after dark, lights have been performing over the flats since the nineteenth century — floating, splitting, occasionally beckoning, by the honest accounts of thousands. Physicists blame atmospheric refraction; romantics blame everything else; the state has built a roadside viewing platform and, wisely, no explanation. The lights, unlike the art, cannot be curated.",
      es: "Hay una exposición más antigua que no cobra entrada. Al sureste del pueblo, después del anochecer, unas luces llevan actuando sobre la llanura desde el siglo diecinueve — flotando, dividiéndose, haciendo señas de vez en cuando, según los relatos honestos de miles de personas. Los físicos culpan a la refracción atmosférica; los románticos lo culpan todo lo demás; el estado ha construido un mirador junto a la carretera y, sabiamente, ninguna explicación. Las luces, a diferencia del arte, no se pueden comisariar." },
      { it: "At dusk the two audiences mix in the parking lot, museum badges and binoculars, waiting for different shows. The sculptor, who distrusted explanation as a matter of doctrine, might have approved of the arrangement: a town at the end of the road that teaches looking, and a light that declines, courteously, to mean anything in particular. Minimalism, it turns out, was only the desert's beginner course.",
      es: "Al anochecer, los dos públicos se mezclan en el aparcamiento, credenciales de museo y prismáticos, esperando espectáculos distintos. El escultor, que desconfiaba de la explicación por principio, quizá habría aprobado el arreglo: un pueblo al final de la carretera que enseña a mirar, y una luz que se niega, con cortesía, a significar nada en particular. El minimalismo, a final de cuentas, no era más que el curso de iniciación del desierto." },
    ],
    words: [
      { it: "decommissioned", es: "clausurado, fuera de servicio (militar)" },
      { it: "a hangar", es: "un hangar" },
      { it: "priced out", es: "desplazado por los precios" },
      { it: "a viewing platform", es: "un mirador" },
      { it: "dusk", es: "el anochecer, el crepúsculo", note: "más literario que sunset, que es solo la puesta de sol" },
      { it: "beckoning", es: "haciendo señas, llamando con un gesto" },
    ],
    questions: [
      { q: "¿Por qué dejó el escultor Nueva York por el desierto de Texas?", options: ["He was hired by the state of Texas", "He was tired of paying Manhattan rent for work that needed a mile of horizon", "He wanted to be closer to Mexico City", "The climate was better for his health"], answer: 1, why: "«a sculptor from New York, tired of paying Manhattan rent for work that needed a mile of horizon, moved to a decommissioned cavalry post»." },
      { q: "¿Qué puede hacer el arte minimalista en una nave de Texas que no puede en una galería de Manhattan?", options: ["It sells for higher prices", "It attracts more critics", "It can be photographed without permission", "It breathes: the desert light repaints the aluminum boxes hour by hour"], answer: 3, why: "«sitting in old sheds where the sun repaints them hourly»." },
      { q: "¿Qué problema trajo el arte a Marfa, según el galerista?", options: ["The town ran out of electricity", "The artists could not stand the heat", "The art brought noise to a town it had chosen for its silence — and rents pushed locals out", "The foundation banned photography"], answer: 2, why: "«The art came for the silence and brought noise» y «painters priced out of Brooklyn priced out locals in turn»." },
      { q: "¿Por qué construyó el estado un mirador «y, sabiamente, ninguna explicación»?", options: ["Because the lights resist every explanation, and a mystery kept intact may be worth more than a solved one", "Because the state forgot to print the brochure", "Because scientists refuse to visit the site", "Because the explanation is secret for security reasons"], answer: 0, why: "«Physicists blame atmospheric refraction; romantics blame everything else» — la noticia sugiere que el misterio se respeta." },
    ],
    discuss: [
      { it: "The sculptor moved to the desert for space. What does your creativity need most: time, silence or space?", es: "El escultor se mudó al desierto por espacio. ¿Qué necesita más tu creatividad: tiempo, silencio o espacio?" },
      { it: "The Marfa Lights refuse to be explained. Do you think some mysteries should stay mysterious? Why?", es: "Las luces de Marfa se niegan a ser explicadas. ¿Crees que algunos misterios deberían seguir siéndolo? ¿Por qué?" },
    ],
  },

  /* ═══ C2 · 12 — Society ═══ */
  {
    id: "en-news-c2-12", cat: "societa", level: "C2", place: "Sturgis", minutes: 6,
    title: "Sturgis: the town of seven thousand that hosts half a million",
    titleEs: "Sturgis: el pueblo de siete mil habitantes que recibe a medio millón",
    lead: {
      it: "Every August, a town of seven thousand in the Black Hills multiplies its population by seventy for ten days, then folds itself up again. The residents' opinions about this are surprisingly practical.",
      es: "Cada agosto, un pueblo de siete mil habitantes en las Black Hills multiplica su población por setenta durante diez días, y luego se vuelve a plegar. La opinión de los vecinos sobre esto es sorprendentemente práctica.",
    },
    paragraphs: [
      { it: "For ten days each August, the town of Sturgis, South Dakota — population seven thousand — becomes, by headcount, one of the largest cities in the state. Half a million riders roll out of the Black Hills and park nose to tail down Main Street, and the ordinary economy hands the town over: the school lot becomes a campground, churches run pancake breakfasts, and the hardware store sells oil by the case and earplugs, ironically, by the dozen.",
      es: "Durante diez días cada agosto, el pueblo de Sturgis, en Dakota del Sur — siete mil habitantes — se convierte, por aforo, en una de las ciudades más grandes del estado. Medio millón de motoristas bajan rodando desde las Black Hills y aparcan morro con cola por la calle principal, y la economía ordinaria le entrega el pueblo al espectáculo: el patio de la escuela se vuelve un camping, las iglesias sirven desayunos de tortitas, y la ferretería vende aceite por cajas y tapones para los oídos, irónicamente, por docenas." },
      { it: "The rally began in 1938 as a race with nine entrants and one chili stand, promoted by a local motorcycle club with more optimism than infrastructure. It grew with the interstates and the legend, paused only once in nine decades, and now generates, by the state's estimate, revenue that a normal town of this size sees in a decade. August, as the saying goes, pays for January.",
      es: "El rally empezó en 1938 como una carrera con nueve inscritos y un puesto de chili, organizada por un club local de motociclistas con más optimismo que infraestructura. Creció con las interestatales y con la leyenda, se detuvo solo una vez en nueve décadas, y ahora genera, según la estimación del estado, ingresos que un pueblo normal de este tamaño ve en una década. Agosto, como dice el refrán local, paga a enero." },
      { it: "The residents' contract with the spectacle is unusually candid. They rent their lawns, sell their parking spots, leave town in recreational vehicles, or stay and enjoy it, in roughly equal thirds. «Every few years somebody proposes moving the rally or shrinking it,» says Otis Granger, whose family has run a hardware store on Main Street since 1952. «The proposal sells newspapers. Nothing else. We are a small town with a large hobby — it beats the reverse.» The newspaper editor, it should be said, writes the proposals himself.",
      es: "El contrato de los vecinos con el espectáculo es inusualmente franco. Alquilan sus jardines, venden sus plazas de aparcamiento, se van del pueblo en vehículos recreativos o se quedan y lo disfrutan, en tercios más o menos iguales. «Cada pocos años alguien propone mudar el rally o reducirlo», dice Otis Granger, cuya familia regenta una ferretería en la calle principal desde 1952. «La propuesta vende periódicos. Nada más. Somos un pueblo pequeño con un pasatiempo grande — preferible a lo contrario.» El editor del periódico, conviene decirlo, escribe él mismo las propuestas." },
      { it: "The costs are itemized too. The hospital adds staff, the police import reinforcements from three states, and the noise ordinance is, by common consent, suspended for the duration and reinstated the morning everyone leaves. The oldest local tradition, it is said, is leaving: a certain fraction of Sturgis decamps to the hills every August and lets the town make money without them.",
      es: "Los costes también vienen desglosados. El hospital suma personal, la policía importa refuerzos de tres estados, y la ordenanza del ruido queda, por consentimiento común, suspendida durante los diez días y restituida la mañana en que todos se marchan. La tradición local más antigua, se dice, es irse: una parte de Sturgis se retira a las colinas cada agosto y deja que el pueblo gane dinero sin ellos." },
      { it: "By the second Tuesday it is over. The street sweepers run in convoy, a lost helmet hangs on a fence post with a polite sign, and the town folds back to seven thousand people, a hardware store, and a diner where nobody has to shout. The diner refills the coffee urn. In garages across the country, half a million helmets wait eleven months for the next August — the largest, most patient club nobody applied to join.",
      es: "Para el segundo martes, todo terminó. Las barredoras avanzan en convoy, un casco perdido cuelga de un poste con un cartel cortés, y el pueblo se replega a siete mil personas, una ferretería y una cafetería donde nadie tiene que gritar. La cafetería rellena la jarra de café. En garajes de todo el país, medio millón de cascos esperan once meses el próximo agosto — el club más grande y más paciente al que nadie pidió apuntarse." },
    ],
    words: [
      { it: "a rally", es: "una concentración (de motoristas)", note: "rally también designa la carrera de regularidad" },
      { it: "entrants", es: "los participantes inscritos" },
      { it: "reinforcements", es: "los refuerzos" },
      { it: "decamps", es: "se retira, se va del campamento" },
      { it: "a campground", es: "un camping, una zona de acampada" },
      { it: "street sweepers", es: "las barredoras (máquinas de limpieza)" },
    ],
    questions: [
      { q: "¿Qué ocurre con los lugares ordinarios de Sturgis durante el rally?", options: ["They are demolished every year and rebuilt", "They become private property of the clubs", "They are handed over to the spectacle: the school lot becomes a campground and churches run pancake breakfasts", "They close and the residents move away"], answer: 2, why: "«the school lot becomes a campground, churches run pancake breakfasts»." },
      { q: "¿Cómo empezó el rally de 1938?", options: ["With a parade of ten thousand riders", "As a race with nine entrants and one chili stand, promoted by a local club", "As a military exercise", "As a protest ride to the state capital"], answer: 1, why: "«The rally began in 1938 as a race with nine entrants and one chili stand»." },
      { q: "¿Por qué las propuestas de mudar o reducir el rally «venden periódicos y nada más»?", options: ["Because the newspaper is the only business that profits", "Because the town council owns the rally", "Because nobody reads the local paper anymore", "Because the town depends on the rally economically and has accepted the bargain"], answer: 3, why: "«August, as the saying goes, pays for January» — la ciudad ha aceptado el trato." },
      { q: "¿Qué revela la tradición de que una parte de Sturgis «se marche a las colinas» cada agosto?", options: ["That coexistence with the spectacle has limits, and leaving is the town's oldest form of dissent", "That the hills are more beautiful in August", "That the residents hate motorcycles", "That the roads are too dangerous"], answer: 0, why: "«The oldest local tradition, it is said, is leaving»." },
    ],
    discuss: [
      { it: "A town of seven thousand hosts half a million every year. Would your town survive that? Would you stay or leave?", es: "Un pueblo de siete mil recibe a medio millón cada año. ¿Sobreviviría tu pueblo a eso? ¿Te quedarías o te irías?" },
      { it: "«August pays for January.» Is it acceptable to suffer ten days a year for ten good months? Where is your limit?", es: "«Agosto paga a enero.» ¿Es aceptable sufrir diez días al año a cambio de diez buenos meses? ¿Dónde está tu límite?" },
    ],
  },

  /* ═══ C2 · 13 — Technology ═══ */
  {
    id: "en-news-c2-13", cat: "tecnologia", level: "C2", place: "Oracle", minutes: 6,
    title: "Biosphere 2: the sealed world that taught us our limits",
    titleEs: "Biosphere 2: el mundo sellado que nos enseñó nuestros límites",
    lead: {
      it: "In 1991, eight people sealed themselves inside three acres of glass under the Arizona sun and promised not to come out for two years. They kept the promise. The planet inside did not cooperate — and taught more than any success could have.",
      es: "En 1991, ocho personas se encerraron en tres acres de cristal bajo el sol de Arizona y prometieron no salir durante dos años. Cumplieron la promesa. El planeta de dentro no colaboró — y enseñó más que cualquier éxito.",
    },
    paragraphs: [
      { it: "In September 1991, eight people in matching jumpsuits waved from behind a glass wall in the Arizona desert, sealed the door behind them, and promised the world they would not open it for two years. Inside waited three acres of assembled planet: a rainforest with its own mountain, a savannah, a desert, a little ocean with a coral reef, a farm, and a small herd of goats.",
      es: "En septiembre de 1991, ocho personas con monos a juego saludaron desde detrás de una pared de cristal en el desierto de Arizona, sellaron la puerta a sus espaldas y le prometieron al mundo que no la abrirían durante dos años. Dentro esperaban tres acres de planeta ensamblado: una selva con montaña propia, una sabana, un desierto, un pequeño océano con arrecife de coral, una granja y un pequeño rebaño de cabras." },
      { it: "The name was the thesis. Biosphere 1 was Earth; Biosphere 2 was the rehearsal — a bottle big enough to live in, built to test whether a closed world could keep humans alive. Nothing was supposed to cross the seal: not a seed, not a flu, not a slice of bread. The crew grew their own food, recycled their own water, and argued, famously, about absolutely everything else. Two years, eight people, one atmosphere: the budget for mistakes was generous.",
      es: "El nombre era la tesis. La Biosfera 1 era la Tierra; la Biosfera 2 era el ensayo general — una botella lo bastante grande para vivir dentro, construida para comprobar si un mundo cerrado podía mantener con vida a seres humanos. Nada debía cruzar el sello: ni una semilla, ni una gripe, ni una rebanada de pan. La tripulación cultivaba su propia comida, reciclaba su propia agua y discutía, famosamente, sobre absolutamente todo lo demás. Dos años, ocho personas, una atmósfera: el presupuesto de errores era generoso." },
      { it: "The planet misbehaved. Oxygen fell from twenty-one percent toward fourteen, and nobody inside could say why; the crew grew thin, then factional; cockroaches and ants flourished while the pollinating insects died, and the sweet-potato crop went from staple to memory. Two years later, thinner and wiser, the eight walked out on schedule. The mystery was eventually solved from outside — the concrete was absorbing it, breathing, in effect, and no one had done that arithmetic either.",
      es: "El planeta se portó mal. El oxígeno cayó del veintiuno por ciento hacia el catorce, y nadie dentro sabía decir por qué; la tripulación adelgazó y luego se dividió en facciones; las cucarachas y las hormigas prosperaron mientras morían los insectos polinizadores, y la cosecha de boniatos pasó de alimento básico a recuerdo. Dos años después, más delgados y más sabios, los ocho salieron con puntualidad. El misterio acabó resolviéndose desde fuera: el hormigón lo estaba absorbiendo — respirando, en efecto — y nadie había hecho tampoco esa aritmética." },
      { it: "«We proved that you cannot bottle a world,» says Dr. Sylvia Marsh, one of the eight, who stayed in systems science afterward. «Nobody wanted that result, and everybody needed it. Every sensor in that building was calibrated to warn us about the planet. Instead the planet warned us about ourselves.» The mission's failures now fill textbooks on closed ecosystems; its data on coral and water cycles are still cited, decades on.",
      es: "«Demostramos que no se puede embotellar un mundo», dice la doctora Sylvia Marsh, una de los ocho, que siguió después en las ciencias de sistemas. «Nadie quería ese resultado, y todo el mundo lo necesitaba. Cada sensor de aquel edificio estaba calibrado para avisarnos del planeta. En cambio, el planeta nos avisó de nosotros mismos.» Los fracasos de la misión llenan hoy los manuales de ecosistemas cerrados; sus datos sobre los corales y los ciclos del agua se siguen citando, décadas después." },
      { it: "The structure, run today by a university as a research and teaching station, keeps its two rubber «lungs» — domes that rise and fall as the building heats and cools — and its lesson. On the tours, children ask whether the eight were heroes or failures, and the guides give the only honest answer available: the distinction is the assignment. Civilization, so far, is still inside Biosphere 1, and the door has no seal. The tours continue either way.",
      es: "La estructura, gestionada hoy por una universidad como estación de investigación y docencia, conserva sus dos «pulmones» de goma — cúpulas que suben y bajan cuando el edificio se calienta y se enfría — y su lección. En las visitas, los niños preguntan si los ocho fueron héroes o fracasados, y los guías dan la única respuesta honesta disponible: la distinción es el deber. La civilización, por ahora, sigue dentro de la Biosfera 1, y la puerta no tiene sello. Las visitas continúan de todos modos." },
    ],
    words: [
      { it: "a rehearsal", es: "un ensayo (general)" },
      { it: "the seal", es: "el sello, el cierre hermético" },
      { it: "factional", es: "faccional, dividido en facciones" },
      { it: "a staple", es: "un alimento básico", note: "staple también es «grapadora»: misma palabra, mundos distintos" },
      { it: "calibrated", es: "calibrado" },
      { it: "the «lungs»", es: "los «pulmones»" },
    ],
    questions: [
      { q: "¿Qué prometieron los ocho tripulantes al entrar en 1991?", options: ["To grow enough food for a village", "To communicate only by letters", "To come out after one year", "Not to open the door for two years"], answer: 3, why: "«sealed the door behind them, and promised the world they would not open it for two years»." },
      { q: "¿Qué misterio surgió dentro del mundo sellado?", options: ["The water turned salty", "The goats escaped into the rainforest", "Oxygen fell from twenty-one percent toward fourteen, and nobody inside could say why", "The coral reef grew out of control"], answer: 2, why: "«Oxygen fell from twenty-one percent toward fourteen, and nobody inside could say why»." },
      { q: "¿Por qué es revelador que el hormigón estuviera «absorbiendo» el oxígeno?", options: ["Because even the building's own chemistry had not been accounted for — nobody had done the arithmetic of its breath", "Because concrete is a dangerous material", "Because the crew should have used wood", "Because oxygen is heavier than nitrogen"], answer: 0, why: "«the concrete was absorbing it, breathing, in effect, and no one had done that arithmetic either»." },
      { q: "¿Por qué responden los guías que «la distinción es el deber» a quien pregunta si los ocho fueron héroes o fracasados?", options: ["Because the guides are not allowed to give opinions", "Because deciding what counts as failure — and what a failure teaches — is precisely the lesson of the experiment", "Because the eight were officially declared heroes", "Because children cannot understand science"], answer: 1, why: "«the distinction is the assignment» — decidir qué es fracasar y qué enseña un fracaso es la lección." },
    ],
    discuss: [
      { it: "The eight proved a world cannot be bottled. Is that a failure, or the most useful result science can buy?", es: "Los ocho demostraron que un mundo no puede embotellarse. ¿Es un fracaso o el resultado más útil que la ciencia puede comprar?" },
      { it: "«Civilization is still inside Biosphere 1.» What would you change first about how we treat it?", es: "«La civilización sigue dentro de la Biosfera 1.» ¿Qué cambiarías primero en cómo la tratamos?" },
    ],
  },

  /* ═══ C2 · 14 — Environment ═══ */
  {
    id: "en-news-c2-14", cat: "ambiente", level: "C2", place: "Salton Sea", minutes: 6,
    title: "Salton Sea: an accident that became a landscape",
    titleEs: "El Mar Salton: un accidente que se volvió paisaje",
    lead: {
      it: "California's largest lake exists because an irrigation canal burst in 1905 and the Colorado River spent eighteen months filling a desert basin. It was a resort, then a symbol, then a slow emergency — and now, possibly, a mine.",
      es: "El mayor lago de California existe porque un canal de riego reventó en 1905 y el río Colorado pasó dieciocho meses llenando una cuenca desértica. Fue un balneario, luego un símbolo, luego una emergencia lenta — y ahora, quizá, una mina.",
    },
    paragraphs: [
      { it: "California's largest lake exists because of an engineering accident. In 1905, while engineers were cutting irrigation canals off the Colorado River, the river left its bed, found the cut, and spent eighteen months pouring itself into a desert basin below sea level before the breach was closed. The Salton Sea is the receipt — a sea with a birth certificate, a birthday, and nobody's permission.",
      es: "El mayor lago de California existe por un accidente de ingeniería. En 1905, mientras unos ingenieros abrían canales de riego desde el río Colorado, el río abandonó su cauce, encontró el corte y pasó dieciocho meses vertiéndose en una cuenca desértica por debajo del nivel del mar antes de que se cerrara la brecha. El Mar Salton es el recibo — un mar con partida de nacimiento, cumpleaños y permiso de nadie." },
      { it: "For a while the accident looked like a resort. The fifties brought speedboat races, marinas, water-skiing championships and a Hollywood crowd; developers sold lots by mail with photographs of the blue. Then the sea did what terminal lakes do: it had no outlet, so it kept the water and the salt, and the salt — farm runoff, drainage, everything — concentrated year by year until it passed the ocean. The blue, of course, was temporary.",
      es: "Durante un tiempo, el accidente pareció un balneario. Los años cincuenta trajeron carreras de lanchas, puertos deportivos, campeonatos de esquí acuático y público de Hollywood; los promotores vendían parcelas por correo con fotografías del azul. Después el mar hizo lo que hacen los lagos terminales: no tenía salida, así que guardó el agua y la sal, y la sal — escorrentía agrícola, drenajes, todo — se concentró año tras año hasta superar a la del océano. El azul, por supuesto, era temporal." },
      { it: "The die-offs followed on schedule. Tilapia, imported to eat the algae, bred by the million and then died by the million in the summer heat; the birds, which use the sea as a major stop on the Pacific Flyway, kept arriving at a buffet that was quietly turning to poison. «It is the most important bad lake in America,» says Dr. Everett Sloan, an ecologist who has sampled its water for twenty-two years. «We made it by accident. We are keeping it on purpose, because the birds have nowhere else.»",
      es: "Las mortandades siguieron puntualmente. La tilapia, importada para comerse las algas, se reprodujo por millones y luego murió por millones con el calor del verano; las aves, que usan el mar como parada mayor de la ruta migratoria del Pacífico, seguían llegando a un buffet que se volvía veneno en silencio. «Es el lago malo más importante de Estados Unidos», dice el doctor Everett Sloan, ecólogo que lleva veintidós años tomando muestras de su agua. «Lo hicimos por accidente. Lo mantenemos a propósito, porque las aves no tienen a dónde ir.»" },
      { it: "Beneath the lake, complicating every plan, sits the twenty-first century: superheated brine carrying lithium, the light metal that batteries want. Extraction royalties could fund the restoration that the lake needs, or postpone it indefinitely, depending on which engineer is talking. The state, for now, is doing arithmetic and building habitat ponds at the edges — dust control for the exposed playa, shallows for the fish that remain.",
      es: "Bajo el lago, complicando todos los planes, espera el siglo veintiuno: salmuera sobrecalentada cargada de litio, el metal ligero que quieren las baterías. Las regalías de la extracción podrían financiar la restauración que el lago necesita, o posponerla indefinidamente, según qué ingeniero hable. El estado, por ahora, hace aritmética y construye estanques de hábitat en los bordes — control del polvo para la playa de sal expuesta, aguas someras para los peces que quedan." },
      { it: "The sea itself continues to shrink, the way it arrived, one inch at a time. On the eastern shore, a half-drowned settlement has been adopted by artists and renamed by nobody in particular; the old marina sign still points to a harbor that is now a meadow. The mistake, a century old, has become the landscape — which is, come to think of it, how most of the American West was made. The lake is merely the newest page.",
      es: "El mar en sí sigue encogiéndose, como llegó, centímetro a centímetro. En la orilla oriental, un asentamiento medio ahogado ha sido adoptado por artistas y no lo ha rebautizado nadie en particular; el viejo cartel del puerto deportivo sigue señalando un puerto que hoy es un prado. El error, con un siglo de edad, se ha vuelto paisaje — que es, pensándolo bien, como se hizo la mayor parte del Oeste estadounidense. El lago es solo la página más reciente." },
    ],
    words: [
      { it: "canals", es: "los canales" },
      { it: "a marina (marinas)", es: "un puerto deportivo" },
      { it: "runoff", es: "el escurrimiento, la escorrentía" },
      { it: "the brine", es: "la salmuera, el agua muy salada" },
      { it: "the playa", es: "la playa de sal (fondo expuesto de un lago seco)" },
      { it: "a die-off (die-offs)", es: "una mortandad masiva" },
    ],
    questions: [
      { q: "¿Cómo nació el Mar Salton en 1905?", options: ["The Colorado River escaped through a cut and spent eighteen months pouring itself into a desert basin", "An ancient lake was restored by conservationists", "Heavy rains filled the basin in a single week", "It was dug as a reservoir for Los Angeles"], answer: 0, why: "«the river left its bed, found the cut, and spent eighteen months pouring itself into a desert basin below sea level»." },
      { q: "¿Por qué se volvió el lago cada vez más salado?", options: ["The ocean flooded it repeatedly", "The hotels dumped their pools into it", "A salt mine burst beneath the lake", "It had no outlet, so it kept the water and the salt — and everything the farms drained into it"], answer: 3, why: "«it had no outlet, so it kept the water and the salt, and the salt — farm runoff, drainage, everything — concentrated year by year»." },
      { q: "¿Por qué dice Sloan que el lago se mantiene «a propósito», aunque esté dañado?", options: ["Because the lithium companies need the water", "Because the migratory birds of the Pacific Flyway depend on it and have nowhere else to go", "Because the state refuses to admit a mistake", "Because the tourism industry still advertises it"], answer: 1, why: "«We are keeping it on purpose, because the birds have nowhere else.»" },
      { q: "¿Qué tensión plantea el litio del subsuelo para el futuro del lago?", options: ["None: lithium mining restores lakes automatically", "Mining will solve the dust problem by drying the lake faster", "The money from extraction could fund the restoration — or postpone it indefinitely", "The birds will adapt to the mines"], answer: 2, why: "«Extraction royalties could fund the restoration that the lake needs, or postpone it indefinitely»." },
    ],
    discuss: [
      { it: "The Salton Sea was born from an engineering mistake. Who should pay for mistakes that outlive their makers?", es: "El Mar Salton nació de un error de ingeniería. ¿Quién debería pagar los errores que sobreviven a quienes los cometieron?" },
      { it: "Restore the sea or mine the lithium beneath it? Can a community do both? Defend one side.", es: "¿Restaurar el mar o extraer el litio que hay debajo? ¿Puede una comunidad hacer ambas cosas? Defiende un lado." },
    ],
  },

  /* ═══ C2 · 15 — Health ═══ */
  {
    id: "en-news-c2-15", cat: "salute", level: "C2", place: "Saranac Lake", minutes: 6,
    title: "Saranac Lake: the town that prescribed winter",
    titleEs: "Saranac Lake: el pueblo que recetaba el invierno",
    lead: {
      it: "Before antibiotics, an American village turned its cruelest season into a cure and its cure into an identity. Saranac Lake still celebrates winter on purpose — a habit it inherited from the sick.",
      es: "Antes de los antibióticos, un pueblo estadounidense convirtió su estación más cruel en una cura, y la cura en una identidad. Saranac Lake sigue celebrando el invierno a propósito — un hábito heredado de los enfermos.",
    },
    paragraphs: [
      { it: "Before antibiotics, the most feared disease in America had a geography of hope: the cold. Doctors sent tuberculosis patients to the dry mountain air of the Adirondacks, and one young doctor, coughing and half dead, arrived in the village of Saranac Lake in 1873 to die — and, inconveniently for the prognosis, improved. The air, the theory ran, was too cold for the bacterium and too dry for the cough. The village, in other words, was founded twice: once by settlers, once by invalids.",
      es: "Antes de los antibióticos, la enfermedad más temida de Estados Unidos tenía una geografía de la esperanza: el frío. Los médicos enviaban a los pacientes de tuberculosis al aire seco de las montañas Adirondack, y un médico joven, tosiendo y medio muerto, llegó en 1873 al pueblo de Saranac Lake para morir — y, muy incómodamente para el pronóstico, mejoró. El aire, decía la teoría, era demasiado frío para la bacteria y demasiado seco para la tos. El pueblo, en otras palabras, se fundó dos veces: una por colonos, otra por convalecientes." },
      { it: "What he built there became a doctrine and an industry. A sanatorium rose above the village, then dozens of «cure cottages» with wide glassed porches, where patients lay on cots in the open air through blizzards, wrapped like parcels, breathing the freezing lake wind on the theory that rest, cold and food were the only honest medicine. The village filled with nurses, boarding houses, and wheelchairs that converted to sleds in winter.",
      es: "Lo que construyó allí se volvió doctrina e industria. Un sanatorio se alzó sobre el pueblo, luego docenas de «casas de cura» con porches acristalados anchos, donde los pacientes yacían en catres al aire libre entre ventiscas, envueltos como paquetes, respirando el viento helado del lago según la teoría de que el reposo, el frío y la comida eran la única medicina honesta. El pueblo se llenó de enfermeras, pensiones y sillas de ruedas que en invierno se convertían en trineos." },
      { it: "The cure was never quite a cure — remission, mostly, and luck — but the village made a dignified living from it for sixty years. Then streptomycin arrived in the nineteen-fifties, and within a decade the porches emptied, the sanatoria closed, and Saranac Lake was left holding the season it had industrialized. What it did with that inheritance is the strange part: it kept the winter on purpose.",
      es: "La cura nunca fue del todo una cura — remisión, sobre todo, y suerte —, pero el pueblo vivió de ella con dignidad durante sesenta años. Luego llegó la estreptomicina en los años cincuenta, y en una década los porches se vaciaron, los sanatorios cerraron y Saranac Lake se quedó con la estación que había industrializado. Lo que hizo con esa herencia es la parte extraña: se quedó con el invierno a propósito." },
      { it: "The Winter Carnival, first held in 1898 while the patients watched from the porches, became the town's second industry. Every February, volunteers cut ice blocks from the frozen lake and build a palace with them — towers, arches, a throne — which glows from within on the coldest night and melts, on schedule, by March. «We were the hospital that winter built,» says Dr. Abigail Tremper, of the village historical society. «When the hospital closed, winter kept its job.»",
      es: "El Carnaval de Invierno, celebrado por primera vez en 1898 mientras los pacientes miraban desde los porches, se convirtió en la segunda industria del pueblo. Cada febrero, unos voluntarios cortan bloques de hielo del lago congelado y construyen con ellos un palacio — torres, arcos, un trono — que brilla desde dentro la noche más fría y se derrite, puntualmente, hacia marzo. «Fuimos el hospital que construyó el invierno», dice la doctora Abigail Tremper, de la sociedad histórica del pueblo. «Cuando el hospital cerró, el invierno conservó su empleo.»" },
      { it: "The cure porches are still there, a hundred glass rooms holding rocking chairs and firewood instead of cots. A research institute founded by the original doctor still studies the lungs' stubborn enemies. And on the second Friday of February, when the palace lights go on, the village gets back, for one evening, the thing it sold for a century: the spectacle of people standing cheerfully in air cold enough to be medicine.",
      es: "Los porches de cura siguen allí, cien habitaciones de cristal que guardan mecedores y leña en lugar de catres. Un instituto de investigación fundado por el médico original sigue estudiando los enemigos tercos de los pulmones. Y el segundo viernes de febrero, cuando se encienden las luces del palacio, el pueblo recupera, por una noche, aquello que vendió durante un siglo: el espectáculo de gente de pie, contenta, en un aire lo bastante frío para ser medicina." },
    ],
    words: [
      { it: "a sanatorium (sanatoria)", es: "un sanatorio" },
      { it: "the porches", es: "los porches, las galerías acristaladas" },
      { it: "cots", es: "los catres, las camas plegables" },
      { it: "boarding houses", es: "las pensiones" },
      { it: "remission", es: "la remisión (mejoría temporal de una enfermedad)" },
      { it: "on schedule", es: "con puntualidad, según lo previsto" },
    ],
    questions: [
      { q: "¿Qué le ocurrió al médico que llegó a Saranac Lake en 1873 para morir?", options: ["He founded a winter resort", "He improved — inconveniently for the prognosis", "He died the following winter", "He left for a warmer climate"], answer: 1, why: "«arrived in the village of Saranac Lake in 1873 to die — and, inconveniently for the prognosis, improved»." },
      { q: "¿En qué consistía «la cura» en los porches acristalados?", options: ["Lying on cots in the open air through blizzards, wrapped like parcels, breathing the freezing wind", "Taking hot baths every evening", "Drinking water from the frozen lake", "Walking ten miles in the snow every morning"], answer: 0, why: "«patients lay on cots in the open air through blizzards, wrapped like parcels»." },
      { q: "¿Por qué dice la noticia que el pueblo «se quedó con la estación que había industrializado»?", options: ["Because winter was the only season it could export", "Because the sanatoria kept the patients forever", "Because when antibiotics emptied the porches, the town had to reinvent itself around the same cold season", "Because the doctors owned the lake"], answer: 2, why: "«streptomycin arrived in the nineteen-fifties, and within a decade the porches emptied, the sanatoria closed, and Saranac Lake was left holding the season it had industrialized»." },
      { q: "¿Qué recupera el pueblo cada febrero cuando se ilumina el palacio de hielo?", options: ["The tourists it lost to the ski resorts", "The electricity the sanatoria used to consume", "The doctors who left after the fifties", "The thing it sold for a century: people standing cheerfully in air cold enough to be medicine"], answer: 3, why: "«the village gets back, for one evening, the thing it sold for a century: the spectacle of people standing cheerfully in air cold enough to be medicine»." },
    ],
    discuss: [
      { it: "Saranac Lake turned its hardest season into an identity. What season — or hardship — defines your region?", es: "Saranac Lake convirtió su estación más dura en una identidad. ¿Qué estación — o qué dureza — define a tu región?" },
      { it: "The cure was never quite a cure. How should a town — or a person — honor an inheritance built on suffering?", es: "La cura nunca fue del todo una cura. ¿Cómo debería un pueblo — o una persona — honrar una herencia construida sobre el sufrimiento?" },
    ],
  },

];
