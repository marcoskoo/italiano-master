/* ── Letture di Cultura italiana (v9.3) ────────────────────────────────
   Arte, cucina e musica del Bel Paese: 6 letture originales (2 arte,
   2 cucina, 2 musica) con párrafos it+es, glosario, comprensión
   lectora e ideas para debatir. Audio TTS sincronizado en la vista
   de letture. 100% contenido original.                              */

import type { CefrLevel } from "./types";
import type { Lettura } from "./letture";

/* ═══ ARTE ═══════════════════════════════════════════════════════════ */

const ARTE: Lettura[] = [
  {
    id: "cult-arte-17",
    cat: "cultura",
    level: "B2",
    title: "Caravaggio: la luce nell'ombra",
    titleEs: "Caravaggio: la luz en la sombra",
    minutes: 4,
    lines: [
      { it: "Michelangelo Merisi nasce nel 1571 e prende il nome del paese della sua famiglia, Caravaggio, un piccolo borgo vicino a Bergamo. Oggi lo chiamiamo semplicemente Caravaggio: è uno dei pittori più rivoluzionari e più moderni della storia dell'arte.", es: "Michelangelo Merisi nace en 1571 y toma el nombre del pueblo de su familia, Caravaggio, una pequeña aldea cerca de Bérgamo. Hoy lo llamamos simplemente Caravaggio: es uno de los pintores más revolucionarios y más modernos de la historia del arte." },
      { it: "Da giovane si forma a Milano e arriva a Roma nel 1592, povero e sconosciuto. Per sopravvivere copia quadri di santi e vende piccole nature morte. Ma il suo talento esplode presto: entra nella bottega di un pittore famoso e poi incontra un collezionista potente, il cardinale Del Monte, che diventa il suo protettore.", es: "Joven se forma en Milán y llega a Roma en 1592, pobre y desconocido. Para sobrevivir copia cuadros de santos y vende pequeñas naturalezas muertas. Pero su talento explota pronto: entra en el taller de un pintor famoso y luego conoce a un coleccionista poderoso, el cardenal Del Monte, que se convierte en su protector." },
      { it: "La sua prima grande opera, \"I bari\", è una scena di strada: due truffatori che imbrogliano un giovane nobile ingenuo durante una partita a carte. Caravaggio non dipinge dei o eroi ideali: dipinge la gente vera, con i piedi sporchi e le mani ruvide dei suoi modelli, trovati per le strade di Roma.", es: "Su primera gran obra, \"I bari\" (Los tramposos), es una escena callejera: dos estafadores que engañan a un joven noble ingenuo durante una partida de cartas. Caravaggio no pinta dioses ni héroes ideales: pinta a la gente real, con los pies sucios y las manos ásperas de sus modelos, encontrados por las calles de Roma." },
      { it: "La sua firma è la luce. Nelle sue tele la luce non arriva dal cielo, tranquilla e uniforme: entra di lato, violenta e teatrale, e divide il mondo in zone di splendore e di oscurità. Questo contrasto drammatico si chiama \"tenebrismo\". Guardando la \"Vocazione di san Matteo\", la luce che colpisce il santo sembra davvero il dito di Dio.", es: "Su firma es la luz. En sus lienzos la luz no llega del cielo, tranquila y uniforme: entra de lado, violenta y teatral, y divide el mundo en zonas de esplendor y de oscuridad. Este contraste dramático se llama \"tenebrismo\". Mirando la \"Vocación de san Mateo\", la luz que golpea al santo parece realmente el dedo de Dios." },
      { it: "Ma Caravaggio non era un uomo facile. Litigava spesso, girava armato di spada e passava le notti nei vicoli di Roma. Nel 1606, durante una rissa, uccide un uomo, Ranuccio Tomassoni. Condannato a morte, deve fuggire dalla città che lo aveva reso famoso.", es: "Pero Caravaggio no era un hombre fácil. Discutía a menudo, andaba armado con espada y pasaba las noches en los callejones de Roma. En 1606, durante una pelea, mata a un hombre, Ranuccio Tomassoni. Condenado a muerte, debe huir de la ciudad que lo había vuelto famoso." },
      { it: "Negli ultimi anni viaggia senza sosta: Napoli, Malta, la Sicilia. Le sue ultime opere sono più scure e più spirituali, piene di personaggi soli e sofferenti. Nel 1610, mentre torna verso Roma sperando nel perdono del papa, muore in circostanze misteriose sulla costa toscana, a Porto Ercole. Aveva solo trentotto anni.", es: "En los últimos años viaja sin descanso: Nápoles, Malta, Sicilia. Sus últimas obras son más oscuras y más espirituales, llenas de personajes solos y sufrientes. En 1610, mientras regresa hacia Roma esperando el perdón del papa, muere en circunstancias misteriosas en la costa toscana, en Porto Ercole. Tenía solo treinta y ocho años." },
      { it: "Dopo la morte, il suo nome cade nell'oblio per secoli. Solo nel Novecento la critica lo riscopre e oggi è considerato il padre della pittura moderna: senza di lui non esisterebbero né Rembrandt né tanta fotografia contemporanea. Le sue opere, come \"La Deposizione\" nei Musei Vaticani, attirano folle di visitatori da tutto il mondo.", es: "Tras su muerte, su nombre cae en el olvido durante siglos. Solo en el siglo XX la crítica lo redescubre y hoy se lo considera el padre de la pintura moderna: sin él no existirían ni Rembrandt ni tanta fotografía contemporánea. Sus obras, como \"La Deposición\" en los Museos Vaticanos, atraen multitudes de visitantes de todo el mundo." },
    ],
    glossary: [
      { it: "il baro", es: "el tramposo (en el juego)" },
      { it: "la bottega", es: "el taller (de un artista)" },
      { it: "il protettore", es: "el protector, mecenas" },
      { it: "la rissa", es: "la pelea, reyerta" },
      { it: "fuggire", es: "huir" },
      { it: "cadere nell'oblio", es: "caer en el olvido" },
    ],
    questions: [
      { q: "¿De dónde toma el pintor su nombre, \"Caravaggio\"?", options: ["De su maestro en Milán", "Del pueblo de su familia, cerca de Bérgamo", "De un barrio de Roma", "Del título de su primer cuadro"], answer: 1, why: "Se llamaba Michelangelo Merisi, pero tomó el nombre del pueblo de su familia: Caravaggio, cerca de Bérgamo." },
      { q: "¿Qué hace tan especial la luz en sus cuadros?", options: ["Es uniforme y celeste", "Entra de lado, violenta y teatral (tenebrismo)", "Imita la luz de velas flamencas", "Casi no hay luz en sus obras"], answer: 1, why: "La luz caravaggesca entra lateral e inesperada y divide la escena en esplendor y oscuridad: eso es el tenebrismo." },
      { q: "¿Qué ocurre en 1606?", options: ["Pinta la Cappella Contarelli", "Se muda a Venecia", "Mata a un hombre en una pelea y huye de Roma", "El papa lo nombra caballero"], answer: 2, why: "Durante una rissa mata a Ranuccio Tomassoni; condenado a muerte, escapa de Roma." },
      { q: "¿Cómo murió Caravaggio?", options: ["De viejo en Malta", "Ejecutado en Roma", "En circunstancias misteriosas en Porto Ercole, en 1610", "De peste en Nápoles"], answer: 2, why: "En 1610, volviendo a Roma esperando el perdón papal, muere en la costa toscana en circunstancias misteriosas, a los 38 años." },
      { q: "¿Qué pasó con su fama después de morir?", options: ["Fue siempre considerado el mejor pintor vivo", "Cayó en el olvido y fue redescubierto en el siglo XX", "Sus cuadros se quemaron por orden papal", "Solo lo recuerdan en Sicilia"], answer: 1, why: "Su nombre se olvidó durante siglos; la crítica del Novecento lo redescubrió y hoy es visto como el padre de la pintura moderna." },
    ],
    discuss: [
      { it: "Possiamo ammirare l'arte di una persona che viveva in modo violento? Arte e vita morale devono stare insieme?", es: "¿Podemos admirar el arte de alguien que vivía de forma violenta? ¿Arte y vida moral deben ir juntas?" },
      { it: "Perché secondo te la luce drammatica di Caravaggio colpisce ancora oggi gli occhi moderni, abituati al cinema e alla fotografia?", es: "¿Por qué crees que la luz dramática de Caravaggio sigue golpeando a los ojos modernos, acostumbrados al cine y la fotografía?" },
      { it: "Nella tua cultura esiste un artista \"maledetto\", geniale e difficile come Caravaggio? Raccontalo.", es: "¿En tu cultura existe un artista \"maldito\", genial y difícil como Caravaggio? Cuéntalo." },
    ],
  },
  {
    id: "cult-arte-18",
    cat: "cultura",
    level: "B1",
    title: "La Cappella Sistina: il cielo di Michelangelo",
    titleEs: "La Capilla Sixtina: el cielo de Miguel Ángel",
    minutes: 4,
    lines: [
      { it: "Nel cuore del Vaticano esiste una cappella famosa come nessun'altra. Fu costruita tra il 1475 e il 1481 per volontà di papa Sisto IV, e da lui prende il nome: la Cappella Sistina. Oggi è anche il luogo dove i cardinali eleggono il nuovo papa.", es: "En el corazón del Vaticano existe una capilla famosa como ninguna otra. Fue construida entre 1475 y 1481 por voluntad del papa Sixto IV, y de él toma su nombre: la Capilla Sixtina. Hoy es también el lugar donde los cardenales eligen al nuevo papa." },
      { it: "Alla fine del Quattrocento i migliori pittori dell'epoca decorarono le pareti laterali: Botticelli, Ghirlandaio, Perugino. Raccontarono, in due serie di affreschi, le storie di Mosè e le storie di Cristo, dal basso verso l'alto.", es: "A fines del Quattrocento los mejores pintores de la época decoraron las paredes laterales: Botticelli, Ghirlandaio, Perugino. Contaron, en dos series de frescos, las historias de Moisés y las historias de Cristo, de abajo hacia arriba." },
      { it: "Ma la volta, il soffitto curvo, restava un cielo blu con semplice stelle dorate. Nel 1508 papa Giulio II, nipote di Sisto IV, chiede a Michelangelo Buonarroti di dipingerla. Il problema è che Michelangelo si considera uno scultore, non un pittore. Accetta controvoglia.", es: "Pero la bóveda, el techo curvo, seguía siendo un cielo azul con sencillas estrellas doradas. En 1508 el papa Julio II, sobrino de Sixto IV, le pide a Miguel Ángel Buonarroti que la pinte. El problema es que Miguel Ángel se considera escultor, no pintor. Acepta a regañadientes." },
      { it: "Lavora per quattro anni, quasi sempre da solo, su impalcature di legno costruite in alto, con la testa piegata all'indietro e la vernice che gli cade in faccia. Non è sdraiato, come dicono le leggende: sta in piedi, piegato come un arco. Nel 1512 il soffitto è finito: trecento figure, nove scene del libro della Genesi.", es: "Trabaja durante cuatro años, casi siempre solo, sobre andamios de madera construidos en lo alto, con la cabeza inclinada hacia atrás y la pintura cayéndole en la cara. No está acostado, como dicen las leyendas: está de pie, doblado como un arco. En 1512 el techo está terminado: trescientas figuras, nueve escenas del libro del Génesis." },
      { it: "Al centro c'è la scena più riprodotta della storia dell'arte: la Creazione di Adamo. Dio, vigoroso, vola dentro un mantello rosso pieno di angeli, e stende il braccio verso Adamo. Le due dita non si toccano: c'è un piccolo spazio vuoto, e in quel vuoto sta tutta la tensione del quadro.", es: "En el centro está la escena más reproducida de la historia del arte: la Creación de Adán. Dios, vigoroso, vuela dentro de un manto rojo lleno de ángeles, y extiende el brazo hacia Adán. Los dos dedos no se tocan: hay un pequeño espacio vacío, y en ese vacío está toda la tensión del cuadro." },
      { it: "Venticinque anni dopo, Michelangelo torna nella cappella per un'opera ancora più difficile: il Giudizio Universale, sulla parete dell'altare. È un vortice di corpi nudi, santi e dannati, che salgono e cadono. Il dipinto scandalizza: la Chiesa giudica quei nudi troppo audaci e, dopo la morte dell'artista, un pittore viene incaricato di coprire le parti intime. Per questo lo chiamano ironicamente \"il Braghettone\", \"el de los calzoncillos\".", es: "Veinticinco años después, Miguel Ángel regresa a la capilla para una obra aún más difícil: el Juicio Final, en la pared del altar. Es un vórtice de cuerpos desnudos, santos y condenados, que suben y caen. El cuadro escandaliza: la Iglesia juzga esos desnudos demasiado audaces y, tras la muerte del artista, encarga a un pintor cubrir las partes íntimas. Por eso lo llaman irónicamente \"il Braghettone\", \"el de los calzoncillos\"." },
      { it: "Tra il 1980 e il 1994 un lungo restauro ha liberato gli affreschi dalla polvere e dal fumo delle candele, riportando alla luce colori vivissimi che nessuno vedeva da secoli: rosa, verdi, arancioni. Il mondo discusse a lungo: era giusto pulire così a fondo? Oggi, tra cinque milioni di visitatori l'anno, la Sistina resta il museo d'arte più amato del pianeta.", es: "Entre 1980 y 1994 una larga restauración liberó los frescos del polvo y del humo de las velas, devolviendo a la luz colores vivísimos que nadie veía desde hacía siglos: rosas, verdes, anaranjados. El mundo discutió mucho: ¿era justo limpiar tan a fondo? Hoy, entre cinco millones de visitantes al año, la Sixtina sigue siendo el museo de arte más amado del planeta." },
    ],
    glossary: [
      { it: "la volta", es: "la bóveda" },
      { it: "il soffitto", es: "el techo" },
      { it: "l'affresco", es: "el fresco (pintura sobre muro húmedo)" },
      { it: "l'impalcatura", es: "el andamio" },
      { it: "controvoglia", es: "de mala gana, a regañadientes" },
      { it: "il Giudizio Universale", es: "el Juicio Final" },
    ],
    questions: [
      { q: "¿Quién mandó construir la capilla?", options: ["Papa Julio II", "Papa Sisto IV", "Michelangelo", "Botticelli"], answer: 1, why: "Sisto IV la hizo construir entre 1475 y 1481; de él toma el nombre (y Julio II, su sobrino, encargó después la bóveda a Miguel Ángel)." },
      { q: "¿Cuánto tardó Miguel Ángel en pintar la bóveda?", options: ["Un año", "Cuatro años", "Diez años", "Veinticinco años"], answer: 1, why: "Trabajó de 1508 a 1512, cuatro años casi siempre solo, de pie sobre los andamios." },
      { q: "¿Qué escena famosa está en el centro del techo?", options: ["El Juicio Final", "La última cena", "La Creación de Adán", "Las historias de Moisés"], answer: 2, why: "La Creación de Adán, con los dos dedos que casi se tocan, es la escena central de las nueve del Génesis." },
      { q: "¿Por qué escandalizó el Juicio Final?", options: ["Porque era demasiado pequeño", "Por los cuerpos desnudos, juzgados demasiado audaces", "Porque usaba colores vivos", "Porque criticaba al papa"], answer: 1, why: "La Iglesia consideró los desnudos demasiado audaces y mandó cubrir las partes íntimas: de ahí el apodo \"il Braghettone\"." },
      { q: "¿Qué reveló la restauración de 1980-1994?", options: ["Que la bóveda era una copia", "Firmas ocultas de Botticelli", "Colores vivísimos ocultos bajo polvo y humo de velas", "Un túnel secreto hacia el castillo"], answer: 2, why: "La limpieza devolvió rosas, verdes y anaranjados ocultos durante siglos, y abrió un debate mundial sobre hasta dónde restaurar." },
    ],
    discuss: [
      { it: "Il restauro della Sistina tolse secoli di patina: secondo te, i musei devono \"pulire\" le opere o conservare anche il passare del tempo?", es: "La restauración de la Sixtina quitó siglos de pátina: ¿crees que los museos deben \"limpiar\" las obras o conservar también el paso del tiempo?" },
      { it: "Michelangelo si definiva scultore, non pittore. Ti è mai successo di scoprire un talento in un campo che non era il tuo?", es: "Miguel Ángel se definía escultor, no pintor. ¿Te ha pasado descubrir un talento en un campo que no era el tuyo?" },
      { it: "Quale opera d'arte sogneresti di vedere dal vivo almeno una volta nella vita?", es: "¿Qué obra de arte soñarías ver en vivo al menos una vez en la vida?" },
    ],
  },
];

/* ═══ CUCINA ════════════════════════════════════════════════════════ */

const CUCINA: Lettura[] = [
  {
    id: "cult-cucina-19",
    cat: "cultura",
    level: "B1",
    title: "La cucina regionale: un mosaico di sapori",
    titleEs: "La cocina regional: un mosaico de sabores",
    minutes: 5,
    lines: [
      { it: "Quando diciamo \"cucina italiana\", diciamo in realtà una cosa che non esiste. L'Italia è stata unificata solo nel 1861, e ogni regione, anzi ogni città, ha sviluppato nel corso dei secoli piatti, ingredienti e tecniche proprie. La cucina italiana è un mosaico: ogni tessera ha il suo colore.", es: "Cuando decimos \"cocina italiana\", en realidad decimos algo que no existe. Italia fue unificada solo en 1861, y cada región, es más, cada ciudad, desarrolló a lo largo de los siglos platos, ingredientes y técnicas propias. La cocina italiana es un mosaico: cada tesela tiene su color." },
      { it: "Al nord il grasso di cucina è il burro. In pianura padana si coltiva il riso, e il risotto alla milanese, giallo per lo zafferano, è un istituzione, come l'ossobuco, lo stinco di vitello brasato. Nelle montagne e in Veneto domina la polenta, farina di mais cotta lentamente, un tempo cibo dei poveri.", es: "En el norte la grasa de cocina es la mantequilla. En la llanura padana se cultiva el arroz, y el risotto alla milanese, amarillo por el azafrán, es una institución, como el ossobuco, la pata de ternera estofada. En las montañas y en el Véneto domina la polenta, harina de maíz cocida lentamente, antaño comida de pobres." },
      { it: "L'Emilia-Romagna è chiamata \"il giardino d'Italia\". Qui nasce la pasta fresca all'uovo: le tagliatelle al ragù, i tortellini in brodo, i cappelletti. Nella stessa zona producono il Parmigiano Reggiano, il Prosciutto di Parma e l'Aceto Balsamico Tradizionale di Modena: tre tesori che il mondo ci invidia. Nota curiosa: gli spaghetti alla bolognese, famosi all'estero, in Italia non esistono: il ragù si mangia con le tagliatelle, non con gli spaghetti.", es: "La Emilia-Romaña es llamada \"el jardín de Italia\". Aquí nace la pasta fresca al huevo: las tagliatelle al ragù, los tortellini in brodo, los cappelletti. En la misma zona producen el Parmigiano Reggiano, el Prosciutto di Parma y el Aceto Balsámico Tradicional de Módena: tres tesoros que el mundo nos envidia. Nota curiosa: los espaguetis a la boloñesa, famosos en el extranjero, en Italia no existen: el ragù se come con tagliatelle, no con espaguetis." },
      { it: "Il centro ha un'anima contadina. In Toscana il pane è \"sciocco\", cioè senza sale, perfetto con la ribollita, una zuppa di verdure e pane raffermo; e la bistecca alla fiorentina si serve al sangue su una griglia ardente. Nel Lazio regnano due capolavori romani: la carbonara, con guanciale, pecorino, uovo e pepe nero, e l'amatriciana, con guanciale e pomodoro. Attenzione: nella carbonara autentica la panna non entra mai.", es: "El centro tiene un alma campesina. En Toscana el pan es \"sciocco\", es decir sin sal, perfecto con la ribollita, una sopa de verduras y pan duro; y la bistecca alla fiorentina se sirve poco hecha sobre una parrilla ardiente. En el Lacio reinan dos obras maestras romanas: la carbonara, con tocino de mejilla, pecorino, huevo y pimienta negra, y la amatriciana, con tocino y tomate. Atención: en la carbonara auténtica la nata jamás entra." },
      { it: "Al sud cambia tutto: il grasso diventa olio d'oliva e la pasta è di semola di grano duro, secca, come quella prodotta da secoli a Gragnano, vicino a Napoli. Il pomodoro, arrivato dall'America, ha trovato qui la sua casa definitiva. E qui è nata la pizza, che ormai appartiene al mondo intero.", es: "En el sur todo cambia: la grasa pasa a ser aceite de oliva y la pasta es de sémola de trigo duro, seca, como la producida desde hace siglos en Gragnano, cerca de Nápoles. El tomate, llegado de América, encontró aquí su casa definitiva. Y aquí nació la pizza, que ya pertenece al mundo entero." },
      { it: "Le isole aggiungono profumi esotici. La Sicilia porta l'eredità degli arabi: il couscous di Trapani, gli arancini, i cannoli, il pistacchio di Bronte. La Sardegna offre il pane carasau, sottile come un foglio, e il porceddu, il maialetto arrosto. Sono cucine che raccontano le invasioni e i commerci di tremila anni di storia mediterranea.", es: "Las islas añaden perfumes exóticos. Sicilia lleva la herencia de los árabes: el cuscús de Trapani, los arancini, los cannoli, el pistacho de Bronte. Cerdeña ofrece el pan carasau, fino como una hoja, y el porceddu, el cochinillo asado. Son cocinas que cuentan las invasiones y los comercios de tres mil años de historia mediterránea." },
      { it: "Per proteggere questo patrimonio, l'Europa ha creato le etichette DOP e IGP: denominazioni che garantiscano che un Parmigiano viene davvero da Parma o un prosciutto da San Daniele. Sono formaggi e salumi legati al territorio: se cambi il latte, il clima o l'aria, cambi il prodotto.", es: "Para proteger este patrimonio, Europa creó las etiquetas DOP e IGP: denominaciones que garantizan que un Parmigiano viene realmente de Parma o un jamón de San Daniele. Son quesos y embutidos ligados al territorio: si cambias la leche, el clima o el aire, cambia el producto." },
      { it: "Alla fine, la lezione più bella della cucina italiana è questa: la semplicità. Pochi ingredienti, freschi e di qualità, cucinati con rispetto. Come dicono gli chef: \"prima di tutto, non rovinare gli ingredienti\". Ed è forse per questo che, in ogni angolo del pianeta, quando qualcuno vuole festeggiare, cucina italiano.", es: "Al final, la lección más bella de la cocina italiana es esta: la sencillez. Pocos ingredientes, frescos y de calidad, cocinados con respeto. Como dicen los chef: \"antes que nada, no arruines los ingredientes\". Y quizá por eso, en cada rincón del planeta, cuando alguien quiere celebrar, cocina italiano." },
    ],
    glossary: [
      { it: "il grasso di cucina", es: "la grasa de cocina" },
      { it: "il ragù", es: "el ragú (salsa de carne)" },
      { it: "il guanciale", es: "el tocino de mejilla" },
      { it: "la semola", es: "la sémola" },
      { it: "raffermo", es: "duro, añejo (pan)" },
      { it: "DOP / IGP", es: "denominaciones de origen protegido europeas" },
    ],
    questions: [
      { q: "¿Qué grasa domina la cocina del norte y cuál la del sur?", options: ["Crema y mantequilla", "Mantequilla al norte, aceite de oliva al sur", "Aceite en todo el país", "Manteca de cerdo en todas partes"], answer: 1, why: "El norte cocina con mantequilla (risotti, polenta); el sur con aceite de oliva y pasta seca de sémola." },
      { q: "¿Qué NO lleva la carbonara auténtica?", options: ["Pecorino", "Guanciale", "Panna (nata)", "Pepe nero"], answer: 2, why: "La carbonara romana lleva guanciale, pecorino, huevo y pimienta negra; la nata es una adaptación extranjera." },
      { q: "Según la lectura, los \"spaghetti alla bolognese\"...", options: ["Son el plato nacional", "Se inventaron en Bolonia en 1900", "No existen en Italia: el ragù se come con tagliatelle", "Se comen solo en el sur"], answer: 2, why: "Famosos en el extranjero, en Italia no existen: el ragù alla bolognese se sirve con tagliatelle de pasta al huevo." },
      { q: "¿Qué herencia muestra la cocina siciliana?", options: ["La francesa", "La árabe (couscous, arancini, cannoli)", "La austriaca", "La inglesa"], answer: 1, why: "Sicilia lleva la herencia árabe: couscous de Trapani, arancini, cannoli y el pistacho de Bronte." },
      { q: "¿Qué garantizan las etiquetas DOP e IGP?", options: ["Que el producto es bajo en calorías", "Que el producto viene realmente de su territorio de origen", "Que es más barato", "Que se hizo a mano"], answer: 1, why: "Son denominaciones europeas que ligan el producto a su territorio: leche, clima y aire de la zona de origen." },
    ],
    discuss: [
      { it: "Anche la cucina del tuo paese è regionale o esiste un piatto davvero nazionale? Quale?", es: "La cocina de tu país también es regional o existe un plato verdaderamente nacional ¿Cuál?" },
      { it: "Gli stranieri adattano la cucina italiana (la carbonara con la panna!). Secondo te è un tradimento o un'evoluzione naturale?", es: "Los extranjeros adaptan la cocina italiana (¡la carbonara con nata!). ¿Es una traición o una evolución natural?" },
      { it: "Qual è il piatto che difende la tua regione o la tua città meglio di ogni parola?", es: "¿Cuál es el plato que defiende a tu región o tu ciudad mejor que cualquier palabra?" },
    ],
  },
  {
    id: "cult-cucina-20",
    cat: "cultura",
    level: "A2",
    title: "La pizza: una storia napoletana",
    titleEs: "La pizza: una historia napolitana",
    minutes: 3,
    lines: [
      { it: "La pizza è forse il cibo più famoso del mondo. Ma la sua storia comincia in modo molto semplice, nelle strade povere di Napoli.", es: "La pizza es quizá la comida más famosa del mundo. Pero su historia comienza de forma muy simple, en las calles pobres de Nápoles." },
      { it: "Già nell'antichità i popoli del Mediterraneo cuocevano pani piatti simili alla focaccia. A Napoli, nel Settecento, la \"pizza\" si vendeva per strada: un pane basso, economico, con olio, formaggio, aglio o acciughe. Era il pasto dei pescatori e dei lavoratori.", es: "Ya en la antigüedad los pueblos del Mediterráneo cocían panes planos parecidos a la focaccia. En Nápoles, en el Setecientos, la \"pizza\" se vendía por la calle: un pan bajo, económico, con aceite, queso, ajo o anchoas. Era la comida de los pescadores y de los trabajadores." },
      { it: "Poi arriva un ingrediente nuovo dall'America: il pomodoro. All'inizio la gente ha paura, crede che sia velenoso. Ma a Napoli i poveri non hanno scelta: provano a mangiarlo, e il pomodoro diventa il cuore della pizza. Nasce così la marinara: pomodoro, aglio, olio e origano.", es: "Luego llega un ingrediente nuevo de América: el tomate. Al principio la gente tiene miedo, cree que es venenoso. Pero en Nápoles los pobres no tienen elección: prueban a comerlo, y el tomate se convierte en el corazón de la pizza. Nace así la marinara: tomate, ajo, aceite y orégano." },
      { it: "L'anno chiave è il 1889. La regina Margherita di Savoia visita Napoli e il pizzaiolo Raffaele Esposito prepara per lei una pizza speciale con i colori della bandiera italiana: rosso (pomodoro), bianco (mozzarella) e verde (basilico). La pizza si chiama \"Margherita\", come la regina, e diventa un classico eterno.", es: "El año clave es 1889. La reina Margherita de Savoia visita Nápoles y el pizzaiolo Raffaele Esposito prepara para ella una pizza especial con los colores de la bandera italiana: rojo (tomate), blanco (mozzarella) y verde (albahaca). La pizza se llama \"Margherita\", como la reina, y se convierte en un clásico eterno." },
      { it: "Tra Ottocento e Novecento milioni di italiani emigrano in America e portano con sé le loro ricette. Nel 1905 a New York apre la prima pizzeria degli Stati Uniti. Da lì la pizza conquista il pianeta: oggi esiste in ogni paese, in mille versioni diverse.", es: "Entre el Ochocientos y el Novecento millones de italianos emigran a América y llevan consigo sus recetas. En 1905 abre en Nueva York la primera pizzería de los Estados Unidos. Desde allí la pizza conquista el planeta: hoy existe en cada país, en mil versiones diferentes." },
      { it: "Ma a Napoli la pizza resta un rito preciso: impasto lievitato a lungo, forno a legna a temperatura altissima e solo novanta secondi di cottura. Nel 2017 l'UNESCO ha dichiarato l'arte del pizzaiuolo napoletano patrimonio dell'umanità. E c'è chi la mangia ancora \"a portafoglio\", piegata in quattro, camminando per la città.", es: "Pero en Nápoles la pizza sigue siendo un rito preciso: masa fermentada durante mucho tiempo, horno de leña a temperatura altísima y solo noventa segundos de cocción. En 2017 la UNESCO declaró el arte del pizzaiuolo napolitano patrimonio de la humanidad. Y hay quien todavía se la come \"a portafoglio\", doblada en cuatro, caminando por la ciudad." },
      { it: "Nata come cibo dei poveri, oggi la pizza unisce il mondo: semplice, generosa e sincera, proprio come la città che l'ha creata.", es: "Nacida como comida de pobres, hoy la pizza une al mundo: simple, generosa y sincera, igual que la ciudad que la creó." },
    ],
    glossary: [
      { it: "l'impasto", es: "la masa" },
      { it: "il forno a legna", es: "el horno de leña" },
      { it: "il pizzaiolo", es: "el pizzero" },
      { it: "piegare", es: "doblar" },
      { it: "il patrimonio dell'umanità", es: "el patrimonio de la humanidad" },
    ],
    questions: [
      { q: "¿Dónde nació la pizza?", options: ["En Roma", "En Nueva York", "En Nápoles", "En Palermo"], answer: 2, why: "Nació en las calles pobres de Nápoles como pan bajo con aceite, queso o anchoas." },
      { q: "¿De dónde llegó el tomate?", options: ["De América", "De África", "De Asia", "De Francia"], answer: 0, why: "El tomate llegó de América; al principio la gente creía que era venenoso." },
      { q: "¿Por qué la pizza Margherita se llama así?", options: ["Por la flor margherita", "Por la reina Margherita di Savoia, en 1889", "Por un pizzaiolo llamado Margherita", "Por el barrio Margherita"], answer: 1, why: "Raffaele Esposito la creó para la reina en 1889, con los colores de la bandera italiana." },
      { q: "¿Qué reconoció la UNESCO en 2017?", options: ["La pizza americana", "La pizza congelada", "El arte del pizzaiuolo napoletano", "El primer horno de leña"], answer: 2, why: "El arte del pizzaiuolo napolitano fue declarado patrimonio inmaterial de la humanidad." },
      { q: "¿Cómo se come la pizza \"a portafoglio\"?", options: ["Con tenedor y cuchillo", "Doblada en cuatro, caminando", "Solo en el desayuno", "Fría"], answer: 1, why: "\"Portafoglio\" significa \"cartera\": la pizza se dobla en cuatro para comerla por la calle." },
    ],
    discuss: [
      { it: "Com'è la pizza nel tuo paese? È simile a quella italiana o molto diversa?", es: "¿Cómo es la pizza en tu país? ¿Se parece a la italiana o es muy diferente?" },
      { it: "Preferisci la pizza classica (margherita, marinara) o le versioni moderne e creative?", es: "¿Prefieres la pizza clásica (margherita, marinara) o las versiones modernas y creativas?" },
      { it: "Hai mai fatto la pizza in casa? Com'è andata a finire?", es: "¿Has hecho pizza en casa alguna vez? ¿Cómo terminó?" },
    ],
  },
];

/* ═══ MUSICA ════════════════════════════════════════════════════════ */

const MUSICA: Lettura[] = [
  {
    id: "cult-musica-21",
    cat: "cultura",
    level: "C1",
    title: "L'opera lirica: quando la musica racconta",
    titleEs: "La ópera: cuando la música cuenta",
    minutes: 5,
    lines: [
      { it: "Alla fine del Cinquecento, a Firenze, un gruppo di intellettuali e musicisti si riuniva in casa del conte Bardi per parlare di teatro e di Grecia. Erano la \"Camerata de' Bardi\". Sognavano di ricreare il teatro antico, dove la parola si cantava. Da quel sogno nasce qualcosa di completamente nuovo: l'opera.", es: "A fines del Quinientos, en Florencia, un grupo de intelectuales y músicos se reunía en casa del conde Bardi para hablar de teatro y de Grecia. Eran la \"Camerata de' Bardi\". Soñaban con recrear el teatro antiguo, donde la palabra se cantaba. De ese sueño nace algo completamente nuevo: la ópera." },
      { it: "Il primo capolavoro arriva nel 1607: \"L'Orfeo\" di Claudio Monteverdi, rappresentato a Mantova. Orfeo scende negli inferi per salvare la sua Euridice con la forza della musica. Da quel momento l'opera diventa il grande spettacolo dell'epoca: mito, passione e morte trasformati in canto.", es: "La primera obra maestra llega en 1607: \"L'Orfeo\" de Claudio Monteverdi, representado en Mantua. Orfeo baja a los infiernos para salvar a su Eurídice con la fuerza de la música. Desde ese momento la ópera se convierte en el gran espectáculo de la época: mito, pasión y muerte transformados en canto." },
      { it: "Nel 1637 Venezia fa un passo rivoluzionario: apre il Teatro di San Cassiano, il primo teatro d'opera pubblico del mondo. Non servono più principi e cardinali: basta pagare un biglietto. L'opera diventa un divertimento di massa, e per due secoli l'Europa intera canta in italiano. Ancora oggi le parole dell'arte musicale sono italiane: aria, pianoforte, soprano, orchestra, diva, maestro.", es: "En 1637 Venecia da un paso revolucionario: abre el Teatro di San Cassiano, el primer teatro de ópera público del mundo. Ya no hacen falta príncipes y cardenales: basta pagar una entrada. La ópera se convierte en un entretenimiento de masas, y durante dos siglos Europa entera canta en italiano. Todavía hoy las palabras del arte musical son italianas: aria, pianoforte, soprano, orchestra, diva, maestro." },
      { it: "L'Ottocento è il secolo d'oro del \"bel canto\": la bellezza assoluta della voce. Gioachino Rossini riempie i teatri di risate con \"Il barbiere di Siviglia\", Vincenzo Bellini scrive melodie celestiali come \"Norma\", Gaetano Donizetti fa piangere il pubblico con \"Lucia di Lammermoor\". I cantanti sono le star dell'epoca, come oggi i campioni del calcio.", es: "El Ochocientos es el siglo de oro del \"bel canto\": la belleza absoluta de la voz. Gioachino Rossini llena los teatros de risas con \"El barbero de Sevilla\", Vincenzo Bellini escribe melodías celestiales como \"Norma\", Gaetano Donizetti hace llorar al público con \"Lucia di Lammermoor\". Los cantantes son las estrellas de la época, como hoy los campeones de fútbol." },
      { it: "Poi arriva Giuseppe Verdi, il compositore che l'Italia intera adora. Nel 1842 il suo \"Nabucco\" fa esplodere il pubblico in applausi: il coro \"Va' pensiero\", il canto degli schiavi ebrei che sognano la patria perduta, diventa l'inno segreto del Risorgimento, il movimento per l'unità d'Italia. \"Viva Verdi!\" significa, in codice, \"Viva Vittorio Emanuele Re D'Italia\". Dopo l'unità, Verdi regala al paese capolavori come \"Rigoletto\", \"La traviata\" e \"Aida\".", es: "Luego llega Giuseppe Verdi, el compositor que Italia entera adora. En 1842 su \"Nabucco\" hace explotar al público en aplausos: el coro \"Va' pensiero\", el canto de los esclavos hebreos que sueñan la patria perdida, se convierte en el himno secreto del Risorgimento, el movimiento por la unidad de Italia. \"¡Viva Verdi!\" significa, en clave, \"Viva Vittorio Emanuele Re D'Italia\". Tras la unidad, Verdi regala al país obras maestras como \"Rigoletto\", \"La traviata\" y \"Aida\"." },
      { it: "Alla fine del secolo la voce più amata è quella di Giacomo Puccini, il maestro del \"verismo\": la vita vera della gente comune sulla scena. \"La bohème\" racconta quattro artisti poveri e un amore morente in una fredda soffitta parigina; \"Tosca\" mescola amore, politica e morte; \"Madama Butterfly\" porta in scena la tragedia di una geisha tradita. La sua ultima opera, \"Turandot\", resta incompiuta: Puccini muore nel 1924, e l'ultima scena la completa un altro compositore. Dell'opera resta l'aria più famosa di tutte: \"Nessun dorma\".", es: "A fines del siglo la voz más amada es la de Giacomo Puccini, el maestro del \"verismo\": la vida real de la gente común en escena. \"La bohème\" cuenta cuatro artistas pobres y un amor que se apaga en una fría buhardilla parisina; \"Tosca\" mezcla amor, política y muerte; \"Madama Butterfly\" lleva a escena la tragedia de una gueisha traicionada. Su última ópera, \"Turandot\", queda inconclusa: Puccini muere en 1924, y la última escena la completa otro compositor. De la ópera queda el aria más famosa de todas: \"Nessun dorma\"." },
      { it: "Il tempio dell'opera è la Scala di Milano, inaugurata nel 1778. La stagione si apre ogni anno il 7 dicembre, giorno di Sant'Ambrogio, patrono della città, e la prima della Scala è l'evento sociale più elegante d'Italia. Ma l'estate porta l'opera dove non te l'aspetti: nell'Arena di Verona, un anfiteatro romano di duemila anni fa, ventimila persone ascoltano le voci sotto le stelle.", es: "El templo de la ópera es La Scala de Milán, inaugurada en 1778. La temporada se abre cada año el 7 de diciembre, día de Sant'Ambrogio, patrono de la ciudad, y la prima de La Scala es el evento social más elegante de Italia. Pero el verano lleva la ópera donde no te lo esperas: en la Arena de Verona, un anfiteatro romano de hace dos mil años, veinte mil personas escuchan las voces bajo las estrellas." },
      { it: "Oggi qualcuno dice che l'opera è vecchia, un museo per élite. Ma i numeri raccontano un'altra storia: le trasmissioni nei cinema riempiono le sale in tutto il mondo, i cantanti lirici diventano virali sui social, e ogni estate migliaia di giovani scoprono le voci divine sotto il cielo di Verona. L'opera è nata in Italia quattro secoli fa, e ancora oggi, quando vuole, un'aria italiana può fermare il tempo.", es: "Hoy alguien dice que la ópera es vieja, un museo para élites. Pero los números cuentan otra historia: las transmisiones en los cines llenan salas en todo el mundo, los cantantes líricos se vuelven virales en las redes, y cada verano miles de jóvenes descubren las voces divinas bajo el cielo de Verona. La ópera nació en Italia hace cuatro siglos, y todavía hoy, cuando quiere, un aria italiana puede detener el tiempo." },
    ],
    glossary: [
      { it: "il libretto", es: "el libreto (texto de la ópera)" },
      { it: "l'aria", es: "el aria (pieza para voz solista)" },
      { it: "il bel canto", es: "el bel canto (técnica vocal italiana)" },
      { it: "il verismo", es: "el verismo (corriente realista)" },
      { it: "la prima", es: "el estreno" },
      { it: "la soffitta", es: "la buhardilla" },
    ],
    questions: [
      { q: "¿Dónde y cuándo nace la ópera?", options: ["En Roma, en el siglo XVIII", "En Florencia, hacia 1600", "En Venecia, en 1500", "En Nápoles, en el siglo XIX"], answer: 1, why: "Nace en Florencia de la mano de la Camerata de' Bardi, que soñaba con recrear el teatro antiguo; el primer gran éxito fue el Orfeo de Monteverdi (1607)." },
      { q: "¿Qué paso revolucionario dio Venecia en 1637?", options: ["Construyó el teatro más grande", "Abrió el primer teatro de ópera público del mundo", "Prohibió la ópera", "Inventó el intermedio musical"], answer: 1, why: "El Teatro di San Cassiano fue el primero abierto al público pagante: la ópera dejó de ser solo cosa de príncipes." },
      { q: "¿Qué une a Verdi con el Risorgimento?", options: ["Compuso el himno nacional oficial", "\"Va' pensiero\" del Nabucco se volvió himno secreto del movimiento por la unidad", "Fue presidente del parlamento", "Financió al ejército piamontés"], answer: 1, why: "El coro de los esclavos hebreos se convirtió en símbolo patrio, y \"Viva Verdi\" era un código para \"Viva Vittorio Emanuele Re D'Italia\"." },
      { q: "¿Quién compuso \"Nessun dorma\" y en qué ópera suena?", options: ["Verdi, en Aida", "Puccini, en Turandot", "Rossini, en Norma", "Bellini, en Tosca"], answer: 1, why: "\"Nessun dorma\" cierra la Turandot de Puccini, su última ópera, completada por otro compositor tras su muerte en 1924." },
      { q: "¿Qué es el \"verismo\" de Puccini?", options: ["Un estilo de arquitectura", "Llevar a escena la vida real de la gente común", "Cantar sin orquesta", "Una técnica de bel canto"], answer: 1, why: "El verismo puso en escena la vida cotidiana: artistas pobres de La bohème, la tragedia de Butterfly..." },
    ],
    discuss: [
      { it: "Hai mai ascoltato un'opera dal vivo o al cinema? Che impressione ti ha fatto?", es: "¿Has escuchado alguna vez una ópera en vivo o en el cine? ¿Qué impresión te dio?" },
      { it: "Perché secondo te l'italiano è diventato il linguaggio universale della musica?", es: "¿Por qué crees que el italiano se convirtió en el lenguaje universal de la música?" },
      { it: "Il \"Nessun dorma\" si usa anche nello sport e nei film. Conosci altri pezzi classici diventati famosi fuori dai teatri?", es: "El \"Nessun dorma\" se usa también en el deporte y en el cine. ¿Conoces otras piezas clásicas que se hicieron famosas fuera de los teatros?" },
    ],
  },
  {
    id: "cult-musica-22",
    cat: "cultura",
    level: "B2",
    title: "Sanremo: la festa della canzone italiana",
    titleEs: "Sanremo: la fiesta de la canción italiana",
    minutes: 4,
    lines: [
      { it: "Ogni anno, la prima settimana di febbraio, l'Italia si ferma. Per cinque sere di fila, dalle 20:30 fino a notte fonda, milioni di famiglie accendono la televisione per seguire lo stesso evento: il Festival della canzone italiana, che tutti chiamano semplicemente Sanremo.", es: "Cada año, la primera semana de febrero, Italia se detiene. Durante cinco noches seguidas, de las 20:30 hasta la madrugada, millones de familias encienden el televisor para seguir el mismo evento: el Festival de la canción italiana, que todos llaman simplemente Sanremo." },
      { it: "La storia comincia nel 1951, quando la radio RAI organizza una gara di canzoni nel salone delle feste del Casinò di Sanremo, una elegante cittadina di fiori sulla riviera ligure. Solo tre serate, venti canzoni, due cantanti in gara. Nel 1955 arriva la televisione, e il festival diventa presto l'appuntamento televisivo più visto del paese.", es: "La historia comienza en 1951, cuando la radio RAI organiza un concurso de canciones en el salón de fiestas del Casino de Sanremo, una elegante ciudad de flores en la riviera ligur. Solo tres noches, veinte canciones, dos cantantes en competencia. En 1955 llega la televisión, y el festival se convierte pronto en la cita televisiva más vista del país." },
      { it: "Dal 1977 la casa del festival è il Teatro Ariston, con la sua inconfondibile pista a forma di nave. Sul palco dell'Ariston è passata la storia della musica leggera italiana: cantanti leggendari, debutti impossibili, vittorie discusse, lacrime e colpi di scena. Gli italiani discutono per giorni delle canzoni, dei vestiti e delle battute dei presentatori.", es: "Desde 1977 la casa del festival es el Teatro Ariston, con su inconfundible pista en forma de nave. Por el escenario del Ariston ha pasado la historia de la música ligera italiana: cantantes legendarios, debuts imposibles, victorias discutidas, lágrimas y giros inesperados. Los italianos discuten durante días sobre las canciones, los vestidos y los chistes de los presentadores." },
      { it: "Alcune canzoni nate a Sanremo hanno conquistato il mondo. Nel 1958 Domenico Modugno vince con \"Nel blu dipinto di blu\", la famosa \"Volare\": arriva ai primi posti delle classifiche americane e vince due Grammy, un caso unico per una canzone in italiano. Nel 1964 Gigliola Cinquetti, sedicenne, vince con \"Non ho l'età\" e poi trionfa anche all'Eurovision. Sono i giorni in cui tutta l'Europa canta in italiano.", es: "Algunas canciones nacidas en Sanremo conquistaron el mundo. En 1958 Domenico Modugno gana con \"Nel blu dipinto di blu\", el famoso \"Volare\": llega a los primeros puestos de las listas americanas y gana dos Grammy, un caso único para una canción en italiano. En 1964 Gigliola Cinquetti, de dieciséis años, gana con \"Non ho l'età\" y luego triunfa también en Eurovisión. Son los días en que toda Europa canta en italiano." },
      { it: "Il festival è anche una fabbrica di talenti. La sezione \"Nuove Proposte\" lancia le carriere dei giovani: da lì sono passati Eros Ramazzotti negli anni Ottanta e Laura Pausini negli anni Novanta, oggi star internazionali. E perfino Andrea Bocelli, la voce tenorile più celebre del mondo, ha attraversato da giovane il palco di Sanremo.", es: "El festival es también una fábrica de talentos. La sección \"Nuove Proposte\" lanza las carreras de los jóvenes: por allí pasaron Eros Ramazzotti en los años ochenta y Laura Pausini en los noventa, hoy estrellas internacionales. Y hasta Andrea Bocelli, la voz tenoril más célebre del mundo, cruzó de joven el escenario de Sanremo." },
      { it: "Come funziona la gara? Le canzoni, tutte inedite e cantate dal vivo con l'orchestra, passano attraverso cinque serate. Il voto combina tre voci: il pubblico da casa col televoto, una giuria di opinione e la stampa. Nella serata finale tutto si decide tra le prime tre canzoni. E dal 2015 c'è un premio extra: il vincitore rappresenta l'Italia all'Eurovision Song Contest.", es: "¿Cómo funciona la competencia? Las canciones, todas inéditas y cantadas en vivo con orquesta, pasan por cinco noches. El voto combina tres voces: el público desde casa con el televoto, un jurado de opinión y la prensa. En la noche final todo se decide entre las tres primeras canciones. Y desde 2015 hay un premio extra: el ganador representa a Italia en el Festival de Eurovisión." },
      { it: "Naturalmente Sanremo si ama e si odia. C'è chi dice che sia troppo lungo, troppo politico, troppo vecchio; chi lo guarda solo per le polemiche e i costumi. Ma dopo più di settant'anni, il festival resiste come un rito nazionale che unisce tre generazioni davanti allo stesso schermo. E ogni febbraio, in ufficio o al bar, la domanda è sempre la stessa: \"Ma tu, chi vorresti che vincesse?\".", es: "Naturalmente a Sanremo se le ama y se le odia. Hay quien dice que es demasiado largo, demasiado político, demasiado viejo; quien lo mira solo por las polémicas y los vestuarios. Pero después de más de setenta años, el festival resiste como un rito nacional que une a tres generaciones frente a la misma pantalla. Y cada febrero, en la oficina o en el bar, la pregunta es siempre la misma: \"¿Y tú, a quién te gustaría que le ganara?\"." },
    ],
    glossary: [
      { it: "la serata", es: "la noche (del festival, gala)" },
      { it: "il televoto", es: "el voto telefónico del público" },
      { it: "la giuria", es: "el jurado" },
      { it: "la carriera", es: "la carrera profesional" },
      { it: "il colpo di scena", es: "el giro inesperado" },
      { it: "la sezione", es: "la sección, categoría" },
    ],
    questions: [
      { q: "¿Cuándo y dónde nació el Festival?", options: ["En 1951, en el Casino de Sanremo", "En 1977, en el Teatro Ariston", "En 1955, en Milán", "En 1964, en Roma"], answer: 0, why: "La primera edición fue en 1951 en el salón de fiestas del Casino; la televisión llegó en 1955 y el Teatro Ariston recién en 1977." },
      { q: "¿Qué logró \"Nel blu dipinto di blu\" de Modugno en 1958?", options: ["Solo ganó Sanremo", "Ganó dos Grammy y conquistó las listas americanas", "Fue descalificada", "Nadie la recuerda"], answer: 1, why: "\"Volare\" ganó el festival, llegó a lo más alto de las listas de EE.UU. y ganó dos Grammy: caso único para una canción en italiano." },
      { q: "¿Qué es la sección \"Nuove Proposte\"?", options: ["Un premio para veteranos", "La categoría que lanza a cantantes jóvenes", "Una sección de música clásica", "El voto del jurado"], answer: 1, why: "Es la sección para jóvenes talentos: de allí salieron Ramazzotti, Pausini y pasó también Bocelli." },
      { q: "Desde 2015, ¿qué le pasa al ganador?", options: ["Gira el mundo gratis", "Representa a Italia en Eurovisión", "Recibe un Grammy automático", "Se convierte en senador"], answer: 1, why: "Desde 2015 el vencedor de Sanremo representa a Italia en el Festival de Eurovisión." },
      { q: "¿Cómo se vota en el festival?", options: ["Solo televoto", "Solo jurado de expertos", "Combinando televoto, jurado de opinión y prensa", "Lo decide la orquesta"], answer: 2, why: "El voto mezcla tres componentes: televoto del público, giuria de opinión y prensa, a lo largo de cinco noches." },
    ],
    discuss: [
      { it: "Nel tuo paese esiste un festival di canzoni così famoso? Come si chiama e quanto è importante?", es: "¿En tu país existe un festival de canciones tan famoso? ¿Cómo se llama y cuánto importa?" },
      { it: "I grandi eventi televisivi uniscono ancora le famiglie davanti allo schermo o ognuno guarda il proprio telefono?", es: "¿Los grandes eventos televisivos todavía unen a las familias frente a la pantalla o cada uno mira su teléfono?" },
      { it: "Qual è la tua canzone italiana preferita? Come l'hai scoperta?", es: "¿Cuál es tu canción italiana preferida? ¿Cómo la descubriste?" },
    ],
  },
];

/** Biblioteca de cultura italiana (v9.3): arte, cucina e musica */
export const CULTURA: Lettura[] = [...ARTE, ...CUCINA, ...MUSICA];
