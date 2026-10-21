/* ── EN · Notizie C1 + C2 (v9.26) ─────────────────────────────────────
   Advanced American English news, VOA method. C1: nuanced argumentation;
   C2: literary register, irony and rhetoric. `.it` = English, `.es` = Spanish. */

import type { NewsItem } from "../../news";

export const EN_NEWS_C: NewsItem[] = [

  /* ═══ C1 · 1 — Society ═══ */
  {
    id: "en-news-c1-01", cat: "societa", level: "C1", place: "New York", minutes: 5,
    title: "Queens: the neighborhood where the world runs errands",
    titleEs: "Queens: el barrio donde el mundo hace sus mandados",
    lead: {
      it: "In one borough of New York, linguists count more than one hundred and thirty languages. The wonder is not the number; it is the mundane machine that makes them work together.",
      es: "En un distrito de Nueva York, los lingüistas cuentan más de ciento treinta lenguas. La maravilla no es el número; es la máquina cotidiana que hace que funcionen juntas.",
    },
    paragraphs: [
      { it: "Tourists look for the languages in the wrong place — in restaurants and on signs, as if diversity were a decoration. Residents know better. The languages live in the boring places: the pharmacy counter, the bus depot, the school office at eight in the morning, the laundromat where two grandmothers compare prices in two languages and understand each other perfectly.",
      es: "Los turistas buscan las lenguas en el lugar equivocado — en los restaurantes y los letreros, como si la diversidad fuera decoración. Los residentes lo saben mejor. Las lenguas viven en los lugares aburridos: el mostrador de la farmacia, la estación de autobuses, la administración del colegio a las ocho de la mañana, la lavandería donde dos abuelas comparan precios en dos lenguas y se entienden perfectamente." },
      { it: "Sociologists have a term for this: «mundane contact». Grand theories about integration are built, they argue, on trivial exchanges — a question about a bus route, a joke in a queue, an apology between shopping carts. Queens runs on billions of these micro-transactions, and almost none of them makes the news.",
      es: "Los sociólogos tienen un término para esto: «contacto mundano». Las grandes teorías sobre la integración se construyen, dicen, sobre intercambios triviales — una pregunta sobre una ruta de autobús, un chiste en una fila, una disculpa entre carritos de compra. Queens funciona con miles de millones de estas microtransacciones, y casi ninguna sale en las noticias." },
      { it: "The school system tells the story in numbers that sound poetic for a bureaucracy: a typical elementary classroom hosts children who between them command a dozen home languages, and a teacher who speaks four of them badly and the rest not at all. The pedagogical trick is not translation. It is theater: pointing, miming, exaggerating, until the meaning arrives.",
      es: "El sistema escolar cuenta la historia en números que suenan poéticos para una burocracia: un aula típica de primaria reúne niños que entre ellos dominan una docena de lenguas del hogar, y una maestra que habla cuatro mal y el resto para nada. El truco pedagógico no es la traducción. Es teatro: señalar, gesticular, exagerar, hasta que el significado llega." },
      { it: "Not everything is harmonious, and locals are the first to say so. Languages can wall people in as well as connect them; a block can host six communities that nod at each other for decades without a single real conversation. The optimism of Queens is specific and stubborn: coexistence is not friendship, but it is a beginning, and beginnings are cheaper than endings.",
      es: "No todo es armonioso, y los locales son los primeros en decirlo. Las lenguas pueden encerrar a las personas además de conectarlas; una cuadra puede alojar seis comunidades que se saludan con la cabeza durante décadas sin una sola conversación real. El optimismo de Queens es específico y terco: la convivencia no es amistad, pero es un comienzo, y los comienzos son más baratos que los finales." },
      { it: "The last word belongs, as usual, to the bus drivers. One of them, a veteran of the route under the elevated tracks, put it in a sentence that academics now quote: «I don't carry languages. I carry people going somewhere. The languages just ride along.»",
      es: "La última palabra es, como siempre, de los conductores de autobús. Uno de ellos, veterano de la ruta bajo las vías elevadas, lo resumió en una frase que los académicos ya citan: «Yo no transporte lenguas. Transporto gente que va a algún lado. Las lenguas solo vienen de camino.»" },
    ],
    words: [
      { it: "to run errands", es: "hacer mandados" },
      { it: "mundane", es: "mundano, cotidiano" },
      { it: "the counter", es: "el mostrador" },
      { it: "micro-transactions", es: "las microtransacciones" },
      { it: "home language", es: "la lengua del hogar" },
      { it: "to mime", es: "gesticular" },
      { it: "coexistence", es: "la convivencia" },
      { it: "the elevated tracks", es: "las vías elevadas (del tren)" },
    ],
    questions: [
      { q: "¿Dónde viven realmente las lenguas de Queens, según los residentes?", options: ["In restaurants and on signs", "In the boring places: the pharmacy counter, the bus depot, the school office, the laundromat", "In museums", "In the subway only"], answer: 1, why: "«The languages live in the boring places: the pharmacy counter, the bus depot, the school office…»" },
      { q: "¿Qué es el «contacto mundano»?", options: ["A diplomatic treaty", "The trivial exchanges on which grand theories of integration are built", "A language school", "A type of visa"], answer: 1, why: "«Grand theories about integration are built… on trivial exchanges — a question about a bus route, a joke in a queue.»" },
      { q: "¿Cuál es el truco pedagógico del aula típica?", options: ["Translation into a dozen languages", "Theater: pointing, miming, exaggerating, until the meaning arrives", "Silence", "Homework in four languages"], answer: 1, why: "«The pedagogical trick is not translation. It is theater: pointing, miming, exaggerating, until the meaning arrives.»" },
      { q: "¿Qué admiten los propios locales?", options: ["That everything is harmonious", "That languages can wall people in; six communities can nod at each other for decades without a real conversation", "That nobody understands anybody", "That they all speak English at home"], answer: 1, why: "«A block can host six communities that nod at each other for decades without a single real conversation.»" },
      { q: "¿Cómo definió el conductor veterano su oficio?", options: ["«I carry languages on wheels»", "«I carry people going somewhere. The languages just ride along»", "«I drive a dictionary»", "«I translate the city»"], answer: 1, why: "«I don't carry languages. I carry people going somewhere. The languages just ride along.»" },
    ],
    discuss: [
      { it: "«Coexistence is not friendship, but it is a beginning.» Do you agree? Where does your city stand?", es: "«La convivencia no es amistad, pero es un comienzo.» ¿Estás de acuerdo? ¿En qué punto está tu ciudad?" },
      { it: "Describe a «mundane contact» that changed a prejudice of yours — in a queue, a bus, a laundromat.", es: "Describe un «contacto mundano» que cambió un prejuicio tuyo — en una fila, un autobús, una lavandería." },
    ],
  },

  /* ═══ C1 · 2 — Culture ═══ */
  {
    id: "en-news-c1-02", cat: "cultura", level: "C1", place: "Hollywood", minutes: 5,
    title: "The streaming decade: how the movies learned television",
    titleEs: "La década del streaming: cómo el cine aprendió televisión",
    lead: {
      it: "Hollywood spent a century selling tickets to stories that ended. Then the stories learned to pause — and the industry is still deciding whether that was evolution or surrender.",
      es: "Hollywood pasó un siglo vendiendo entradas para historias que terminaban. Luego las historias aprendieron a pausarse — y la industria sigue decidiendo si aquello fue evolución o rendición.",
    },
    paragraphs: [
      { it: "The old contract was strict. A movie asked for two hours of your evening, in the dark, among strangers, and in exchange it promised an ending. Credits rolled; the lights came up; life resumed. Television was the messy sibling: interrupted by advertisements, serialized forever, watched in pajamas. Nobody confused a film with a soap, and the industry liked it that way.",
      es: "El contrato antiguo era estricto. Una película te pedía dos horas de tu noche, en la oscuridad, entre extraños, y a cambio prometía un final. Rodaban los créditos; se encendían las luces; la vida continuaba. La televisión era la hermana desordenada: interrumpida por publicidad, serializada para siempre, vista en pijama. Nadie confundía una película con una telenovela, y a la industria le gustaba así." },
      { it: "The streaming decade dissolved the border in both directions. Series acquired cinematographers, budgets and three-year arcs that demand the patience of a novelist. Films, for their part, learned the cliffhanger, the mid-credit scene, the open ending that functions as a commercial for a movie that does not exist yet.",
      es: "La década del streaming disolvió la frontera en ambas direcciones. Las series adquirieron directores de fotografía, presupuestos y arcos de tres años que exigen la paciencia de un novelista. Las películas, por su parte, aprendieron el suspenso a mitad de créditos, la escena post-créditos, el final abierto que funciona como anuncio de una película que todavía no existe." },
      { it: "The numbers behind the romance are less romantic. A subscription is not a ticket: it is a relationship without an ending, which is precisely what the platforms want. The metric that governs the green light is no longer the opening weekend but the churn — the speed at which you cancel when a story ends. Endings, it turns out, are bad for business.",
      es: "Los números detrás del romance son menos románticos. Una suscripción no es una entrada: es una relación sin final, que es exactamente lo que las plataformas quieren. La métrica que gobierna el visto bueno ya no es la taquilla del fin de semana sino el churn — la velocidad con que cancelas cuando una historia termina. Los finales, resulta, son malos para el negocio." },
      { it: "The writers fought back last year, on paper more than on screen, and won concessions that read like a treaty from an earlier century: definitions of what a «season» is, minimums for rooms, protections against the infinite reshuffling of release dates. Outside the negotiation rooms, the older craftsmen repeat a melancholy rule of thumb: when a story can always be extended, someone eventually must decide to end it well. That someone used to be an artist. Increasingly it is a spreadsheet.",
      es: "Los guionistas contraatacaron el año pasado, más en papel que en pantalla, y ganaron concesiones que leen como un tratado de un siglo anterior: definiciones de qué es una «temporada», mínimos para las salas de guion, protecciones contra el barajado infinito de fechas de estreno. Fuera de las salas de negociación, los artesanos mayores repiten una regla melancólica: cuando una historia siempre puede extenderse, alguien debe finalmente decidir terminarla bien. Ese alguien solía ser un artista. Cada vez más, es una hoja de cálculo." },
      { it: "And yet the ending survives, stubbornly, in the place where it always lived: the audience. Viewers still rank a series by its last episode, forgive a slow middle for a perfect finale, and cancel their memory of a franchise the day it announces one sequel too many. The industry can postpone endings indefinitely. The public, it seems, cannot.",
      es: "Y sin embargo el final sobrevive, terco, en el lugar donde siempre vivió: el público. Los espectadores siguen clasificando una serie por su último episodio, perdonan un medio lento por un final perfecto y cancelan su memoria de una franquicia el día en que anuncia una secuela de más. La industria puede posponer los finales indefinidamente. El público, al parecer, no." },
    ],
    words: [
      { it: "the cliffhanger", es: "el suspenso (final abierto de capítulo)" },
      { it: "the arc", es: "el arco (narrativo)" },
      { it: "the green light", es: "el visto bueno (para producir)" },
      { it: "churn", es: "la cancelación de suscripción (métrica)" },
      { it: "the room", es: "la sala de guion (equipo de guionistas)" },
      { it: "a rule of thumb", es: "una regla práctica" },
      { it: "the finale", es: "el final (de temporada o serie)" },
    ],
    questions: [
      { q: "¿Cuál era «el contrato antiguo» del cine?", options: ["Four hours in the light", "Two hours of your evening, in the dark, among strangers, in exchange for an ending", "A story without an end", "A novel read aloud"], answer: 1, why: "«A movie asked for two hours of your evening, in the dark, among strangers, and in exchange it promised an ending.»" },
      { q: "¿Qué aprendieron las películas en la década del streaming?", options: ["To be shorter", "The cliffhanger, the mid-credit scene, the open ending that advertises a movie that does not exist yet", "To play in theaters only", "To remove music"], answer: 1, why: "«Films, for their part, learned the cliffhanger, the mid-credit scene, the open ending that functions as a commercial for a movie that does not exist yet.»" },
      { q: "¿Por qué son los finales «malos para el negocio»?", options: ["Because they are expensive", "Because a subscription is a relationship without an ending — the metric is the churn, the speed at which you cancel when a story ends", "Because actors hate them", "Because critics refuse to review them"], answer: 1, why: "«The metric that governs the green light is no longer the opening weekend but the churn — the speed at which you cancel when a story ends.»" },
      { q: "¿Qué ganaron los guionistas en la negociación?", options: ["Higher salaries only", "Definitions of what a season is, minimums for rooms, protections against the infinite reshuffling of release dates", "Free streaming for life", "The right to direct"], answer: 1, why: "«Concessions that read like a treaty from an earlier century: definitions of what a «season» is, minimums for rooms, protections against the infinite reshuffling of release dates.»" },
      { q: "¿Dónde sobrevive el final, según la noticia?", options: ["In the contracts", "In the audience: viewers rank a series by its last episode and cancel franchises that announce one sequel too many", "In the spreadsheets", "In the advertisements"], answer: 1, why: "«The ending survives, stubbornly, in the place where it always lived: the audience… The public, it seems, cannot [postpone endings].»" },
    ],
    discuss: [
      { it: "Name a series whose finale changed your whole opinion of it — for better or worse.", es: "Nombra una serie cuyo final cambió tu opinión completa de ella — para bien o para mal." },
      { it: "«When a story can always be extended, someone must decide to end it well.» Where else does that rule apply?", es: "«Cuando una historia siempre puede extenderse, alguien debe decidir terminarla bien.» ¿Dónde más aplica esa regla?" },
    ],
  },

  /* ═══ C1 · 3 — Economy ═══ */
  {
    id: "en-news-c1-03", cat: "economia", level: "C1", place: "Silicon Valley", minutes: 5,
    title: "Fail fast: the region that industrialized failure",
    titleEs: "Fail fast: la región que industrializó el fracaso",
    lead: {
      it: "Silicon Valley sells success, but its real product is a peculiar relationship with failure: rapid, cheap, documented — and, if possible, useful to somebody else.",
      es: "Silicon Valley vende éxito, pero su verdadero producto es una relación peculiar con el fracaso: rápido, barato, documentado — y, si es posible, útil para otra persona.",
    },
    paragraphs: [
      { it: "Every traditional economy hides failure. Banks do not publish the loans they regret; restaurants close quietly on a Tuesday and reappear as another cuisine with the same owner. The Valley inverted the custom: it posts its failures online, in long essays, with traffic numbers and apologies. The genre even has a name — the «post-mortem» — and job interviews ask for links to one.",
      es: "Toda economía tradicional esconde el fracaso. Los bancos no publican los préstamos de los que se arrepienten; los restaurantes cierran en silencio un martes y reaparecen como otra cocina con el mismo dueño. El Valle invirtió la costumbre: cuelga sus fracasos en internet, en ensayos largos, con cifras de tráfico y disculpas. El género hasta tiene nombre — el «post-mortem» — y las entrevistas de trabajo piden enlaces a uno." },
      { it: "The logic is agricultural, not moral. A failed startup that fails in six months cost a few hundred thousand dollars; the same startup failing after five years costs a fund, several careers and a decade. Speed converts catastrophe into tuition. Hence the slogans: fail fast, learn faster, and — the crueler one — «the most expensive lesson is the slow one».",
      es: "La lógica es agrícola, no moral. Una startup que fracasa en seis meses cuesta unos cientos de miles de dólares; la misma startup fracasando después de cinco años cuesta un fondo, varias carreras y una década. La velocidad convierte la catástrofe en matrícula. De ahí los lemas: falla rápido, aprende más rápido, y — el más cruel — «la lección más cara es la lenta»." },
      { it: "Critics note what the celebrations omit. The system prices failure in money, but the people inside pay in other currencies: savings, visas that expire with the job, reputations measured in a single niche. «Fail fast» is easy advice to give from a balcony; from inside the building, at two in the morning, the tuition feels exactly as expensive as it sounds.",
      es: "Los críticos notan lo que las celebraciones omiten. El sistema valora el fracaso en dinero, pero las personas de dentro pagan en otras monedas: ahorros, visas que caducan con el empleo, reputaciones medidas en un solo nicho. «Falla rápido» es un consejo fácil de dar desde un balcón; desde dentro del edificio, a las dos de la mañana, la matrícula cuesta exactamente tan cara como suena." },
      { it: "The machine also creates a subtler problem: mistaking motion for progress. If failure is cheap and celebrated, it is tempting to fail on purpose — to «pivot» every quarter, to chase the next wave, to confuse restlessness with strategy. The old-timers, the ones who shipped products for decades, have a saying for it: «Failure is a teacher, but it is not a diploma. At some point you have to pass.»",
      es: "La máquina también crea un problema más sutil: confundir movimiento con progreso. Si el fracaso es barato y celebrado, es tentador fracasar a propósito — «pivotar» cada trimestre, perseguir la siguiente ola, confundir el desasosiego con estrategia. Los veteranos, los que lanzaron productos durante décadas, tienen un dicho para eso: «El fracaso es un maestro, pero no es un diploma. En algún momento hay que aprobar.»" },
      { it: "And the post-mortems keep appearing, half confession and half advertisement. Read closely, most of them end with the same sentence, dressed in different words: we were right about the problem and wrong about the people, including us. In the Valley, even honesty is expected to iterate.",
      es: "Y los post-mortems siguen apareciendo, media confesión y media publicidad. Leídos de cerca, la mayoría termina con la misma frase, vestida con palabras distintas: teníamos razón sobre el problema y estábamos equivocados con las personas, incluidos nosotros. En el Valle, hasta la honestidad debe iterar." },
    ],
    words: [
      { it: "the post-mortem", es: "la autopsia (ensayo sobre el fracaso)" },
      { it: "a startup", es: "la startup (empresa emergente)" },
      { it: "tuition", es: "la matrícula (coste de aprendizaje)" },
      { it: "to pivot", es: "pivotar (cambiar de negocio)" },
      { it: "restlessness", es: "el desasosiego, la inquietud" },
      { it: "to ship (a product)", es: "lanzar, entregar (un producto)" },
      { it: "to iterate", es: "iterar (mejorar por repeticiones)" },
    ],
    questions: [
      { q: "¿Qué hizo el Valle con la costumbre de esconder el fracaso?", options: ["It kept it: failures are private", "It inverted it: failures are posted online in long essays with numbers and apologies", "It made it illegal", "It sold it to banks"], answer: 1, why: "«The Valley inverted the custom: it posts its failures online, in long essays, with traffic numbers and apologies… the «post-mortem».»" },
      { q: "¿Por qué la lógica es «agrícola»?", options: ["Because startups grow food", "Because failing in six months costs little; failing after five years costs a fund, careers and a decade — speed converts catastrophe into tuition", "Because farms fail often", "Because investors like gardens"], answer: 1, why: "«A failed startup that fails in six months cost a few hundred thousand dollars… Speed converts catastrophe into tuition.»" },
      { q: "¿En qué «otras monedas» pagan las personas, según los críticos?", options: ["Bitcoin", "Savings, visas that expire with the job, reputations measured in a single niche", "Exposure on social media", "Free coffee"], answer: 1, why: "«The people inside pay in other currencies: savings, visas that expire with the job, reputations measured in a single niche.»" },
      { q: "¿Cuál es el problema más sutil de la máquina?", options: ["Failing is too expensive", "Mistaking motion for progress: pivoting every quarter, confusing restlessness with strategy", "Post-mortems are too long", "Investors read too much"], answer: 1, why: "«It is tempting to fail on purpose — to pivot every quarter, to chase the next wave, to confuse restlessness with strategy.»" },
      { q: "¿Cómo terminan la mayoría de los post-mortems?", options: ["With a success story", "With the same sentence: right about the problem, wrong about the people, including us", "With a lawsuit", "With a new slogan"], answer: 1, why: "«We were right about the problem and wrong about the people, including us. In the Valley, even honesty is expected to iterate.»" },
    ],
    discuss: [
      { it: "«Failure is a teacher, but it is not a diploma.» Do you have a post-mortem of your own — professional or personal?", es: "«El fracaso es un maestro, pero no es un diploma.» ¿Tienes un post-mortem propio — profesional o personal?" },
      { it: "Is rapid failure celebrated in your field? Should it be? Where is the line between tuition and waste?", es: "¿Se celebra el fracaso rápido en tu campo? ¿Debería? ¿Dónde está la línea entre matrícula y desperdicio?" },
    ],
  },

  /* ═══ C2 · 1 — Culture ═══ */
  {
    id: "en-news-c2-01", cat: "cultura", level: "C2", place: "New Orleans", minutes: 6,
    title: "Jazz: the argument that became a music",
    titleEs: "El jazz: la discusión que se convirtió en música",
    lead: {
      it: "Every history of jazz begins with a street and a date, and misses the point: jazz was born where three cultures, legally forbidden to speak to each other, invented a grammar instead of a conversation.",
      es: "Toda historia del jazz empieza con una calle y una fecha, y se pierde el punto: el jazz nació donde tres culturas, a las que la ley prohibía hablarse, inventaron una gramática en lugar de una conversación.",
    },
    paragraphs: [
      { it: "The standard account runs as follows: African rhythms, European instruments, Caribbean melodies, a port city drunk on commerce — and one Sunday afternoon, in a square where the enslaved were permitted to dance, the mixture caught fire. The account is true and insufficient, the way recipes are true: it lists the ingredients and tells you nothing about the heat.",
      es: "El relato estándar va así: ritmos africanos, instrumentos europeos, melodías caribeñas, una ciudad portuaria ebria de comercio — y un domingo por la tarde, en una plaza donde permitían bailar a los esclavizados, la mezcla prendió. El relato es cierto e insuficiente, como lo son las recetas: enumera los ingredientes y no te dice nada del fuego." },
      { it: "What the recipe leaves out is the argument. Ragtime argued with the blues; the brass bands argued with the pianists, who argued with the church, which argued with the dance halls. Jazz preserved the argument as its very structure — the statement of a theme, the dissent of a solo, the return to a harmony that everyone saw coming and nobody wanted to arrive early. It is the only music in which disagreement is a form of agreement.",
      es: "Lo que la receta omite es la discusión. El ragtime discutía con el blues; las bandas de metales discutían con los pianistas, que discutían con la iglesia, que discutía con los salones de baile. El jazz preservó la discusión como su propia estructura — la exposición de un tema, la disidencia de un solo, el regreso a una armonía que todos veían venir y que nadie quería que llegara temprano. Es la única música en la que el desacuerdo es una forma de acuerdo." },
      { it: "The city that produced it was, and remains, allergic to straight lines. New Orleans does not bury its dead above ground out of whimsy; it does so because the ground is water and the dead would float. Its music follows the same hydrology: it refuses to go under, it rises, it occupies the street, and any parade can turn into a funeral or the reverse without notifying anyone. Locals have a word for it — «second line» — which technically means the dancers behind the band and practically means that the audience is a rumor: everyone is in the band.",
      es: "La ciudad que lo produjo era, y sigue siendo, alérgica a las líneas rectas. Nueva Orleans no entierra a sus muertos bajo tierra por capricho; lo hace porque el suelo es agua y los muertos flotarían. Su música sigue la misma hidrología: se niega a hundirse, asciende, ocupa la calle, y cualquier desfile puede convertirse en un funeral o al revés sin avisar a nadie. Los locales tienen una palabra para eso — «second line» — que técnicamente significa los bailarines detrás de la banda y en la práctica significa que el público es un rumor: todos están en la banda." },
      { it: "Exported, the argument changed languages and kept arguing. In Paris it became philosophy; in Kansas City it became arithmetic; in Harlem it became a manifesto; in California it unfortunately became a syllabus. The players themselves, asked to define the thing, specialized in refusal. Louis Armstrong is credited with the shortest definition on record, one that has the additional merit of being untranslatable and therefore, in a sense, still playing.",
      es: "Exportada, la discusión cambió de idioma y siguió discutiendo. En París se volvió filosofía; en Kansas City se volvió aritmética; en Harlem se volvió manifiesto; en California, por desgracia, se volvió programa de estudio. Los propios músicos, cuando pedían definir la cosa, se especializaron en la negativa. Se atribuye a Louis Armstrong la definición más corta que se conoce, con la ventaja añadida de ser intraducible y por lo tanto, en cierto modo, seguir tocando." },
      { it: "Which brings us back to the square. The tourists find it smaller than the legend, as tourists always do; the city finds the legend smaller than the square, which is the correct order of things. Nothing is explained there, and nothing needs to be. The grammar that three cultures built, because a conversation was illegal, still works on the same principle a century and a half later: listen past the point of comfort, answer before you are ready, and let the harmony arrive late — but arrive.",
      es: "Lo que nos devuelve a la plaza. Los turistas la encuentran más pequeña que la leyenda, como siempre les ocurre a los turistas; la ciudad encuentra la leyenda más pequeña que la plaza, que es el orden correcto de las cosas. Allí no se explica nada, y nada hace falta. La gramática que tres culturas construyeron, porque la conversación era ilegal, sigue funcionando con el mismo principio siglo y medio después: escucha más allá del punto de comodidad, responde antes de estar listo, y deja que la armonía llegue tarde — pero que llegue." },
    ],
    words: [
      { it: "the enslaved", es: "los esclavizados (personas esclavizadas)" },
      { it: "insufficient", es: "insuficiente" },
      { it: "the dissent", es: "la disidencia" },
      { it: "allergic to straight lines", es: "alérgica a las líneas rectas (figurado)" },
      { it: "hydrology", es: "la hidrología" },
      { it: "the second line", es: "el second line (bailarines tras la banda)" },
      { it: "a syllabus", es: "un programa de estudio" },
      { it: "untranslatable", es: "intraducible" },
    ],
    questions: [
      { q: "¿Por qué dice la noticia que el relato estándar es «cierto e insuficiente»?", options: ["Because it is false", "Because, like recipes, it lists ingredients and says nothing about the heat", "Because dates are wrong", "Because jazz was born elsewhere"], answer: 1, why: "«The account is true and insufficient, the way recipes are true: it lists the ingredients and tells you nothing about the heat.»" },
      { q: "¿Qué dejó fuera la receta, según el segundo párrafo?", options: ["The instruments", "The argument: ragtime argued with the blues, brass bands with pianists, the church with the dance halls", "The port", "The dates"], answer: 1, why: "«What the recipe leaves out is the argument. Ragtime argued with the blues; the brass bands argued with the pianists…»" },
      { q: "¿Cuál es la estructura del jazz como «discusión»?", options: ["Theme, then silence", "Statement of a theme, dissent of a solo, return to a harmony everyone saw coming and nobody wanted early", "One solo after another", "No structure at all"], answer: 1, why: "«The statement of a theme, the dissent of a solo, the return to a harmony that everyone saw coming and nobody wanted to arrive early.»" },
      { q: "¿Qué significa «second line» en la práctica?", options: ["The queue at the venue", "The dancers behind the band — practically meaning the audience is a rumor: everyone is in the band", "A second concert", "The bass player"], answer: 1, why: "«Technically it means the dancers behind the band and practically means that the audience is a rumor: everyone is in the band.»" },
      { q: "¿En qué se convirtió el jazz al exportarse?", options: ["The same everywhere", "In Paris, philosophy; in Kansas City, arithmetic; in Harlem, a manifesto; in California, a syllabus", "It stopped being played", "It became folklore only"], answer: 1, why: "«In Paris it became philosophy; in Kansas City it became arithmetic; in Harlem it became a manifesto; in California it unfortunately became a syllabus.»" },
      { q: "¿Cuál es el principio final que la noticia atribuye a esa gramática?", options: ["Listen only when comfortable", "Listen past the point of comfort, answer before you are ready, and let the harmony arrive late — but arrive", "Never answer", "Wait for the score", "Harmony must arrive on time"], answer: 1, why: "«Listen past the point of comfort, answer before you are ready, and let the harmony arrive late — but arrive.»" },
    ],
    discuss: [
      { it: "«Disagreement is a form of agreement.» Where else — beyond music — does that principle work?", es: "«El desacuerdo es una forma de acuerdo.» ¿Dónde más — fuera de la música — funciona ese principio?" },
      { it: "If you had to explain jazz to someone who has never heard it, in one sentence, what would you say?", es: "Si tuvieras que explicar el jazz a alguien que nunca lo ha oído, en una frase, ¿qué dirías?" },
    ],
  },

  /* ═══ C2 · 2 — Science ═══ */
  {
    id: "en-news-c2-02", cat: "scienza", level: "C2", place: "Cape Canaveral", minutes: 6,
    title: "The machine that looks at the first light",
    titleEs: "La máquina que mira la primera luz",
    lead: {
      it: "A telescope the size of a tennis court now parks a million and a half kilometers from Earth, in the wrong place on purpose. What it sends back are not photographs; they are invoices from the childhood of the universe.",
      es: "Un telescopio del tamaño de una cancha de tenis estaciona ahora a un millón y medio de kilómetros de la Tierra, en el lugar equivocado a propósito. Lo que envía de vuelta no son fotografías; son facturas de la infancia del universo.",
    },
    paragraphs: [
      { it: "The engineering reads like a dare. A mirror of eighteen gold-coated segments, folded like origami to fit a rocket, then unfolded in deep space with a clearance measured in millimeters — at temperatures where the word «cold» needs new adjectives. The sunshield, five layers thinner than a human hair, keeps one side of the machine at the temperature of a summer afternoon and the other side close to absolute zero, because the telescope is trying to see the faintest heat in existence, and its own heat would blind it.",
      es: "La ingeniería se lee como un desafío. Un espejo de dieciocho segmentos bañados en oro, plegado como origami para caber en un cohete, y luego desplegado en el espacio profundo con un margen medido en milímetros — a temperaturas donde la palabra «frío» necesita adjetivos nuevos. El parasol, cinco capas más finas que un cabello humano, mantiene un lado de la máquina a la temperatura de una tarde de verano y el otro lado cerca del cero absoluto, porque el telescopio intenta ver el calor más tenue que existe, y su propio calor lo cegaría." },
      { it: "The destination is the trick few people understand. It is called the second Lagrange point, and it is not a place where you arrive; it is a place where you balance, where the gravities of the Earth, the Sun and the orbital motion cancel out. The telescope does not orbit the Earth, as its ancestors did. It orbits the Sun, keeping the Earth between itself and the daylight, the way a photographer's assistant stands in front of a lamp with a dark cloth.",
      es: "El destino es la trampa que poca gente entiende. Se llama el segundo punto de Lagrange, y no es un lugar al que se llega; es un lugar donde se equilibra, donde las gravedades de la Tierra, el Sol y el movimiento orbital se cancelan. El telescopio no orbita la Tierra, como sus ancestros. Orbita el Sol, manteniendo a la Tierra entre él y la luz del día, como el asistente de un fotógrafo que se para frente a la lámpara con un paño oscuro." },
      { it: "What it looks at requires a different verb than «see». The first galaxies assembled their light when the universe was a toddler; the light has been traveling for thirteen billion years, and the expansion of the universe has stretched it, cooled it, reddened it into the infrared — out of the range of any eye, into the range of warmth. The telescope is, strictly speaking, not an eye. It is a thermometer with a doctoral education.",
      es: "Lo que mira exige un verbo distinto de «ver». Las primeras galaxias armaron su luz cuando el universo era un niño que empezaba a caminar; la luz ha viajado trece mil millones de años, y la expansión del universo la ha estirado, enfriado, enrojecido hasta el infrarrojo — fuera del alcance de cualquier ojo, dentro del alcance del calor. El telescopio es, en rigor, un ojo que no es un ojo: es un termómetro con doctorado." },
      { it: "The results arrived as a controlled humiliation of the predictions. The early galaxies were too bright, too structured, too many — assembling like a metropolis where the theory had sketched a village. Cosmologists spent a season doing what scientists do when the universe contradicts them: checking the instruments, then checking each other, then quietly rewriting the timeline of youth.",
      es: "Los resultados llegaron como una humillación controlada de las predicciones. Las galaxias tempranas eran demasiado brillantes, demasiado estructuradas, demasiadas — ensamblándose como una metrópolis donde la teoría había esbozado una aldea. Los cosmólogos pasaron una temporada haciendo lo que hacen los científicos cuando el universo los contradice: revisar los instrumentos, luego revisarse entre sí, y luego reescribir en silencio la cronología de la infancia." },
      { it: "And the exoplanets: the machine watches them cross in front of their stars and reads the starlight that filters through their atmospheres, the way one reads a fingerprint left on a window. From that smudge, chemists on Earth list the molecules of air on worlds nobody will visit: water, methane, carbon dioxide, the chemistry of maybe. It is the closest science comes, at present, to reading a letter addressed to somebody else — and finding, in the address, a word that could be home.",
      es: "Y los exoplanetas: la máquina los ve cruzar frente a sus estrellas y lee la luz estelar que se filtra por sus atmósferas, como se lee una huella dactilar dejada en una ventana. De esa mancha, los químicos de la Tierra enumeran las moléculas del aire en mundos que nadie visitará: agua, metano, dióxido de carbono, la química del quizás. Es lo más cerca que la ciencia está hoy, por ahora, de leer una carta dirigida a otra persona — y hallar, en la dirección, una palabra que podría ser hogar." },
    ],
    words: [
      { it: "the sunshield", es: "el parasol" },
      { it: "a dare", es: "un desafío (a la suerte)" },
      { it: "the clearance", es: "el margen (de holgura)" },
      { it: "to cancel out", es: "cancelarse, anularse" },
      { it: "to redden", es: "enrojecer" },
      { it: "the infrared", es: "el infrarrojo" },
      { it: "a smudge", es: "una mancha (borrosa)" },
      { it: "the chemistry of maybe", es: "la química del quizás (figurado)" },
    ],
    questions: [
      { q: "¿Por qué el propio calor del telescopio lo cegaría?", options: ["Because it is badly built", "Because it is trying to see the faintest heat in existence — its own warmth would blind it", "Because space is warm", "Because the Sun shines on it"], answer: 1, why: "«The telescope is trying to see the faintest heat in existence, and its own heat would blind it.»" },
      { q: "¿Qué es el segundo punto de Lagrange?", options: ["A place on the Moon", "A place where you balance: the gravities of Earth, Sun and orbital motion cancel out", "A crater on Mars", "A station in orbit"], answer: 1, why: "«It is not a place where you arrive; it is a place where you balance, where the gravities of the Earth, the Sun and the orbital motion cancel out.»" },
      { q: "¿Por qué el telescopio es «un termómetro con doctorado»?", options: ["Because it measures temperature only", "Because the first light has been stretched into the infrared, out of the range of any eye, into the range of warmth", "Because it has a degree", "Because it is very slow"], answer: 1, why: "«The expansion of the universe has stretched it… into the infrared — out of the range of any eye, into the range of warmth.»" },
      { q: "¿Cómo llegaron los resultados de las galaxias tempranas?", options: ["As expected", "As a controlled humiliation of the predictions: too bright, too structured, too many — a metropolis where theory had sketched a village", "As a failure", "As noise"], answer: 1, why: "«The early galaxies were too bright, too structured, too many — assembling like a metropolis where the theory had sketched a village.»" },
      { q: "¿Qué leen los químicos en la luz filtrada por las atmósferas?", options: ["Nothing", "The molecules of air on worlds nobody will visit: water, methane, carbon dioxide — the chemistry of maybe", "The names of the stars", "Radio signals"], answer: 1, why: "«From that smudge, chemists on Earth list the molecules of air on worlds nobody will visit: water, methane, carbon dioxide, the chemistry of maybe.»" },
      { q: "¿Con qué imagen cierra la noticia la lectura de exoplanetas?", options: ["A letter addressed to somebody else, with a word in the address that could be home", "A map of the galaxy", "A photograph of Earth", "A warning to humanity"], answer: 0, why: "«The closest science comes to reading a letter addressed to somebody else — and finding, in the address, a word that could be home.»" },
    ],
    discuss: [
      { it: "The universe contradicted the predictions and science rewrote the timeline. Is that a weakness or exactly the method? Defend it.", es: "El universo contradijo las predicciones y la ciencia reescribió la cronología. ¿Es eso una debilidad o exactamente el método? Defiéndelo." },
      { it: "If a letter arrived from another atmosphere, what one molecule would you look for first — and why that one?", es: "Si llegara una carta de otra atmósfera, ¿qué molécula buscarías primero — y por qué esa?" },
    ],
  },

  /* ═══ C2 · 3 — Economy ═══ */
  {
    id: "en-news-c2-03", cat: "economia", level: "C2", place: "Wall Street", minutes: 6,
    title: "The dollar: an empire that runs on paper and trust",
    titleEs: "El dólar: un imperio que funciona con papel y confianza",
    lead: {
      it: "Two thirds of the world's savings are written in a currency that a committee of twelve people can create at a keyboard. The system is absurd, historically speaking; it is also the most durable structure the modern economy has produced.",
      es: "Dos tercios del ahorro mundial están escritos en una moneda que un comité de doce personas puede crear en un teclado. El sistema es absurdo, hablando históricamente; es también la estructura más duradera que la economía moderna ha producido.",
    },
    paragraphs: [
      { it: "The dollar became the world's currency by accident twice. The first accident was a war: in 1914 the belligerents needed American wheat, steel and credit, and paid for them in gold, which crossed the Atlantic and never went home. The second accident was a conference at a hotel in New Hampshire, where, while the delegates posed for photographs, an economist named Keynes was losing the argument to a man named White, and the architecture of the next eighty years was drafted in the margins.",
      es: "El dólar se convirtió en moneda mundial por accidente dos veces. El primer accidente fue una guerra: en 1914 los beligerantes necesitaban trigo, acero y crédito estadounidenses, y los pagaban en oro, que cruzó el Atlántico y nunca volvió a casa. El segundo accidente fue una conferencia en un hotel de Nueva Inglaterra donde, mientras los delegados posaban para las fotos, un economista llamado Keynes perdía la discusión frente a un tal White, y la arquitectura de los siguientes ochenta años se redactó en los márgenes." },
      { it: "What the architecture rests on is difficult to explain to a visitor from another century, because it is circular. The world accepts dollars because the world accepts dollars. Oil is priced in dollars because oil is priced in dollars. A currency, it turns out, is not a commodity like others; it is a convention that everybody maintains because everybody else maintains it — a roundabout with no exits that still, somehow, keeps the traffic moving.",
      es: "Aquello en lo que descansa la arquitectura es difícil de explicar a un visitante de otro siglo, porque es circular. El mundo acepta dólares porque el mundo acepta dólares. El petróleo se cotiza en dólares porque el petróleo se cotiza en dólares. Una moneda, resulta, no es una mercancía como las otras; es una convención que todos mantienen porque todos los demás la mantienen — una glorieta sin salidas que, no se sabe cómo, sigue manteniendo el tráfico en movimiento." },
      { it: "The privileges are real, and the rest of the world bills them with increasing politeness. Americans borrow in their own currency, which means, in plain language, that their lenders assume the exchange-rate risk and their central bank can buy its own government's debt at a keyboard. Economists call one part of this the «exorbitant privilege», a phrase coined by a French minister through gritted teeth, and every crisis since has underlined the adjective rather than the noun.",
      es: "Los privilegios son reales, y el resto del mundo los factura con cortesía creciente. Los estadounidenses piden prestado en su propia moneda, lo que significa, en lenguaje llano, que sus prestamistas asumen el riesgo de cambio y su banco central puede comprar la deuda de su propio gobierno en un teclado. Los economistas llaman a una parte de esto el «privilegio exorbitante», frase acuñada por un ministro francés entre dientes, y cada crisis desde entonces ha subrayado el adjetivo más que el sustantivo." },
      { it: "The threats to the system are older than the system and have a perfect record of failure. Gold bugs have been announcing the return to hard money since 1971; the euro arrived with ceremony and settled into a dignified regional role; the yuan internationalizes at the speed at which a control-minded state allows, which is to say, slowly, on purpose. Meanwhile the dollar's share of reserves declines one polite percentage point at a time, and the markets treat each point as an argument for the dollar.",
      es: "Las amenazas al sistema son más viejas que el sistema y tienen un historial perfecto de fracaso. Los partidarios del oro anuncian el regreso al dinero duro desde 1971; el euro llegó con ceremonia y se instaló en un papel regional digno; el yuan se internacionaliza a la velocidad con que un estado que ama los controles lo permite, es decir, despacio, a propósito. Mientras tanto, la participación del dólar en las reservas baja un punto porcentual cortés a la vez, y los mercados tratan cada punto como un argumento a favor del dólar." },
      { it: "The honest conclusion, the one the traders never say on television, is that the dollar is not strong because America is strong. It is strong because the alternatives are countries, and countries have politics, and politics has interruptions. Trust, in the end, is the only commodity that is manufactured nowhere and needed everywhere — and the printing presses, whatever the gold bugs say, do not print it. They only print the paper it is written on.",
      es: "La conclusión honesta, la que los operadores nunca dicen en televisión, es que el dólar no es fuerte porque Estados Unidos sea fuerte. Es fuerte porque las alternativas son países, y los países tienen política, y la política tiene interrupciones. La confianza, al final, es la única mercancía que no se fabrica en ninguna parte y se necesita en todas — y las imprentas, digan lo que digan los partidarios del oro, no la imprimen. Solo imprimen el papel en que está escrita." },
    ],
    words: [
      { it: "the belligerents", es: "los beligerantes" },
      { it: "in the margins", es: "en los márgenes" },
      { it: "a roundabout with no exits", es: "una glorieta sin salidas (figurado)" },
      { it: "to bill (privileges)", es: "facturar (figurado)" },
      { it: "the exorbitant privilege", es: "el privilegio exorbitante" },
      { it: "through gritted teeth", es: "entre dientes" },
      { it: "gold bugs", es: "los partidarios del oro (peyorativo)" },
      { it: "the printing press", es: "la imprenta, la prensa de billetes" },
    ],
    questions: [
      { q: "¿Cuáles fueron los dos «accidentes» que hicieron del dólar la moneda mundial?", options: ["A war (1914, gold crossed the Atlantic and never went home) and a conference at a New Hampshire hotel where Keynes lost the argument to White", "The discovery of oil and the internet", "Two treaties with England", "The Marshall Plan and the euro"], answer: 0, why: "«The first accident was a war… The second accident was a conference at a hotel in New Hampshire, where… Keynes was losing the argument to a man named White.»" },
      { q: "¿Por qué es «circular» la arquitectura del dólar?", options: ["Because the Fed is round", "Because the world accepts dollars because the world accepts dollars; oil is priced in dollars because oil is priced in dollars", "Because coins are circular", "Because markets rotate"], answer: 1, why: "«A currency… is a convention that everybody maintains because everybody else maintains it — a roundabout with no exits.»" },
      { q: "¿Qué significa pedir prestado en la propia moneda?", options: ["Free money forever", "Lenders assume the exchange-rate risk, and the central bank can buy its own government's debt at a keyboard", "No interest is paid", "Loans never end"], answer: 1, why: "«Their lenders assume the exchange-rate risk and their central bank can buy its own government's debt at a keyboard.»" },
      { q: "¿Quién acuñó «privilegio exorbitante» y cómo?", options: ["A French minister, through gritted teeth", "Keynes, in a book", "White, at the conference", "A trader, on television"], answer: 0, why: "«A phrase coined by a French minister through gritted teeth, and every crisis since has underlined the adjective rather than the noun.»" },
      { q: "¿Cómo se internacionaliza el yuan, según la noticia?", options: ["Very fast", "At the speed at which a control-minded state allows — slowly, on purpose", "It is already number one", "It does not exist outside China"], answer: 1, why: "«The yuan internationalizes at the speed at which a control-minded state allows, which is to say, slowly, on purpose.»" },
      { q: "¿Cuál es la conclusión honesta de la noticia?", options: ["The dollar is strong because America is strong", "The dollar is strong because the alternatives are countries, and countries have politics, and politics has interruptions", "Gold will return", "The printing press prints trust"], answer: 1, why: "«It is strong because the alternatives are countries, and countries have politics, and politics has interruptions… the printing presses do not print [trust]. They only print the paper it is written on.»" },
    ],
    discuss: [
      { it: "Your savings are written in some currency. After reading this news, what did you learn about the trust behind it?", es: "Tus ahorros están escritos en alguna moneda. Tras leer esta noticia, ¿qué aprendiste sobre la confianza que hay detrás?" },
      { it: "«Trust is manufactured nowhere and needed everywhere.» Where else does that sentence apply — beyond money?", es: "«La confianza no se fabrica en ninguna parte y se necesita en todas.» ¿Dónde más aplica esa frase — más allá del dinero?" },
    ],
  },
];
