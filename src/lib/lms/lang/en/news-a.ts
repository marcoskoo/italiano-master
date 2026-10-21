/* ── EN · Notizie A1 + A2 (v9.26) ─────────────────────────────────────
   American English news adapted to level, Voice of America Learning
   English method. 100% original didactic content. Body: A1 ≈ 80 words,
   A2 ≈ 130-150. Controlled vocabulary, present simple (A1) / past &
   future (A2). Fields `.it` = English (study language), `.es` = Spanish. */

import type { NewsItem } from "../../news";

export const EN_NEWS_A: NewsItem[] = [

  /* ═══ A1 · 1 — Science ═══ */
  {
    id: "en-news-a1-01", cat: "scienza", level: "A1", place: "Boston", minutes: 2,
    title: "A short walk is good for the heart",
    titleEs: "Un paseo corto le hace bien al corazón",
    lead: {
      it: "Doctors in Boston have good news for busy people: twenty minutes of walking a day helps your heart.",
      es: "Los médicos de Boston tienen una buena noticia para la gente ocupada: veinte minutos de caminata al día ayudan al corazón.",
    },
    paragraphs: [
      { it: "Scientists in Boston have good news. A short walk every day is good for the heart. Twenty minutes is enough.",
      es: "Los científicos de Boston tienen una buena noticia. Un paseo corto cada día es bueno para el corazón. Veinte minutos son suficientes." },
      { it: "The study says: walk twenty minutes, five days a week. You do not need to run. A slow walk is fine.",
      es: "El estudio dice: camina veinte minutos, cinco días a la semana. No necesitas correr. Una caminata lenta está bien." },
      { it: "Walking helps the heart, the legs and the mood. It also helps you sleep at night.",
      es: "Caminar ayuda al corazón, a las piernas y al ánimo. También te ayuda a dormir por la noche." },
      { it: "The doctors have a simple message: the walk is free, it is easy, and it is good for you. No gym necessary.",
      es: "Los médicos tienen un mensaje simple: el paseo es gratis, es fácil y te hace bien. No hace falta gimnasio." },
    ],
    words: [
      { it: "the walk", es: "la caminata, el paseo" },
      { it: "the heart", es: "el corazón" },
      { it: "the study", es: "el estudio (científico)" },
      { it: "the mood", es: "el ánimo, el estado de ánimo" },
      { it: "to sleep", es: "dormir" },
      { it: "necessary", es: "necesario" },
    ],
    questions: [
      { q: "¿Cuántos minutos al día recomienda el estudio?", options: ["Twenty minutes", "Two hours", "Ten seconds", "No walking"], answer: 0, why: "«Twenty minutes is enough»: veinte minutos bastan." },
      { q: "¿Necesitas correr, según el estudio?", options: ["Yes, every day", "No, a slow walk is fine", "Only on Monday", "Yes, very fast"], answer: 1, why: "«You do not need to run. A slow walk is fine.»" },
      { q: "¿Qué más ayuda la caminata, además del corazón?", options: ["Only the heart", "The legs and the mood", "Nothing", "The wallet"], answer: 1, why: "«Walking helps the heart, the legs and the mood.»" },
      { q: "Para los médicos, el paseo es…", options: ["expensive", "free, easy and good for you", "difficult", "only for athletes"], answer: 1, why: "«The walk is free, it is easy, and it is good for you.»" },
    ],
    discuss: [
      { it: "How many minutes do you really walk every day? Be honest!", es: "¿Cuántos minutos caminas de verdad cada día? ¡Sé honesto!" },
      { it: "In your city, do people walk for health or only because they have no car?", es: "En tu ciudad, ¿la gente camina por salud o solo porque no tiene coche?" },
    ],
  },

  /* ═══ A1 · 2 — Environment ═══ */
  {
    id: "en-news-a1-02", cat: "ambiente", level: "A1", place: "Portland", minutes: 2,
    title: "More trees, cooler streets",
    titleEs: "Más árboles, calles más frescas",
    lead: {
      it: "Portland has a plan for the hot summers: more trees in the streets. The city plants them, the neighbors water them.",
      es: "Portland tiene un plan para los veranos calurosos: más árboles en las calles. La ciudad los planta, los vecinos los riegan.",
    },
    paragraphs: [
      { it: "In Portland the summers are hotter now. The streets with no trees are very warm. The streets with many trees are fresh and quiet.",
      es: "En Portland los veranos son más calurosos ahora. Las calles sin árboles están muy calientes. Las calles con muchos árboles son frescas y tranquilas." },
      { it: "The city has a simple plan: one million new trees. The trees clean the air. They also give homes to birds.",
      es: "La ciudad tiene un plan simple: un millón de árboles nuevos. Los árboles limpian el aire. También dan hogar a los pájaros." },
      { it: "The neighbors help. On Saturday mornings, families water the young trees near their houses. It is free, and it is good exercise.",
      es: "Los vecinos ayudan. Los sábados por la mañana, las familias riegan los árboles jóvenes cerca de sus casas. Es gratis y es buen ejercicio." },
      { it: "One tree is small. One million trees together change a city. That is the plan.",
      es: "Un árbol es poco. Un millón de árboles juntos cambian una ciudad. Ese es el plan." },
    ],
    words: [
      { it: "the tree", es: "el árbol" },
      { it: "cool / cooler", es: "fresco / más fresco" },
      { it: "the street", es: "la calle" },
      { it: "to plant", es: "plantar" },
      { it: "the neighbor", es: "el vecino / la vecina" },
      { it: "to water", es: "regar" },
    ],
    questions: [
      { q: "¿Cuál es el plan de Portland?", options: ["One million new trees", "No more trees", "New cars", "More streets"], answer: 0, why: "«The city has a simple plan: one million new trees.»" },
      { q: "¿Cómo son las calles con muchos árboles?", options: ["Very warm", "Fresh and quiet", "Noisy", "Closed"], answer: 1, why: "«The streets with many trees are fresh and quiet.»" },
      { q: "¿Qué hacen los vecinos los sábados?", options: ["They watch TV", "They water the young trees", "They cut the trees", "Nothing"], answer: 1, why: "«On Saturday mornings, families water the young trees near their houses.»" },
      { q: "¿Qué más dan los árboles, además de sombra?", options: ["Homes to birds", "Free coffee", "Warm streets", "Noise"], answer: 0, why: "«They also give homes to birds.»" },
    ],
    discuss: [
      { it: "Are there many trees in your street? Who takes care of them?", es: "¿Hay muchos árboles en tu calle? ¿Quién los cuida?" },
      { it: "Which do you prefer in summer: a street with trees or air conditioning? Why?", es: "¿Qué prefieres en verano: una calle con árboles o aire acondicionado? ¿Por qué?" },
    ],
  },

  /* ═══ A1 · 3 — Society ═══ */
  {
    id: "en-news-a1-03", cat: "societa", level: "A1", place: "Chicago", minutes: 2,
    title: "Saturday at the farmers market",
    titleEs: "Sábado en el mercado de agricultores",
    lead: {
      it: "Every Saturday morning, one street in Chicago smells like bread and strawberries. It is the farmers market.",
      es: "Cada sábado por la mañana, una calle de Chicago huele a pan y fresas. Es el mercado de agricultores.",
    },
    paragraphs: [
      { it: "The market is small: two rows of white tents. The farmers come at six in the morning with boxes of apples, eggs and honey.",
      es: "El mercado es pequeño: dos filas de carpas blancas. Los agricultores llegan a las seis de la mañana con cajas de manzanas, huevos y miel." },
      { it: "People ask questions: «Is this cheese local?» «Yes, it is from a farm ninety miles from here.»",
      es: "La gente pregunta: «¿Este queso es local?» «Sí, viene de una granja a noventa millas de aquí.»" },
      { it: "The market is also a meeting place. Friends drink coffee together. Children try free samples of peaches. Dogs wait for bread.",
      es: "El mercado también es un lugar de encuentro. Los amigos toman café juntos. Los niños prueban muestras gratis de duraznos. Los perros esperan pan." },
      { it: "The sellers say: buy less, but buy better. A small market is not cheap. But the food is fresh, and the money stays near home.",
      es: "Los vendedores dicen: compra menos, pero compra mejor. Un mercado pequeño no es barato. Pero la comida es fresca, y el dinero se queda cerca de casa." },
    ],
    words: [
      { it: "the farmers market", es: "el mercado de agricultores" },
      { it: "the tent", es: "la carpa" },
      { it: "local", es: "local (de la zona)" },
      { it: "the farm", es: "la granja" },
      { it: "fresh", es: "fresco" },
      { it: "the sample", es: "la muestra (gratis)" },
    ],
    questions: [
      { q: "¿A qué hora llegan los agricultores?", options: ["At six in the morning", "At midnight", "At six in the evening", "Never"], answer: 0, why: "«The farmers come at six in the morning with boxes of apples, eggs and honey.»" },
      { q: "¿De dónde viene el queso?", options: ["From a farm ninety miles away", "From the moon", "From a factory", "From a supermarket"], answer: 0, why: "«Yes, it is from a farm ninety miles from here.»" },
      { q: "¿Qué hacen los niños en el mercado?", options: ["They try free samples of peaches", "They work in the tents", "They sell cheese", "They sleep"], answer: 0, why: "«Children try free samples of peaches.»" },
      { q: "¿Qué dicen los vendedores?", options: ["Buy more, pay less", "Buy less, but buy better", "Buy only bread", "Buy nothing"], answer: 1, why: "«Buy less, but buy better»: la comida es fresca y el dinero se queda cerca." },
    ],
    discuss: [
      { it: "Is there a farmers market in your neighborhood? What do they sell?", es: "¿Hay un mercado de agricultores en tu barrio? ¿Qué venden?" },
      { it: "«Buy less, but buy better»: do you agree? Is it easy in your city?", es: "«Compra menos, pero compra mejor»: ¿estás de acuerdo? ¿Es fácil en tu ciudad?" },
    ],
  },

  /* ═══ A2 · 1 — History ═══ */
  {
    id: "en-news-a2-01", cat: "storia", level: "A2", place: "Philadelphia", minutes: 3,
    title: "The Liberty Bell: a crack that tells a story",
    titleEs: "La Campana de la Libertad: una grieta que cuenta una historia",
    lead: {
      it: "Millions of people visit a broken bell in Philadelphia every year. Why? Because in America, sometimes a broken object tells the best story.",
      es: "Millones de personas visitan una campana rota en Filadelfia cada año. ¿Por qué? Porque en Estados Unidos, a veces un objeto roto cuenta la mejor historia.",
    },
    paragraphs: [
      { it: "The bell arrived from London in 1752. It was a gift for the Pennsylvania State House. But the bell cracked the first time they tested it. A local team melted it down and made it again.",
      es: "La campana llegó de Londres en 1752. Era un regalo para la Casa del Estado de Pensilvania. Pero la campana se agrietó la primera vez que la probaron. Un equipo local la fundió y la hizo de nuevo." },
      { it: "For years, the bell called people to meetings. On July 8, 1776, it rang for the first public reading of the Declaration of Independence. That is why we call it the Liberty Bell.",
      es: "Durante años, la campana llamaba a la gente a las reuniones. El 8 de julio de 1776 sonó para la primera lectura pública de la Declaración de Independencia. Por eso la llamamos la Campana de la Libertad." },
      { it: "The famous crack grew in the nineteenth century. In 1846, workers tried to fix it for a celebration. The bell cracked again, this time for good. It never rang again.",
      es: "La grieta famosa creció en el siglo XIX. En 1846, unos trabajadores intentaron arreglarla para una celebración. La campana se volvió a agrietar, esta vez para siempre. Nunca volvió a sonar." },
      { it: "Today nobody wants to repair it. Park rangers explain it to visitors with a smile: the bell is silent, but its message still travels. Words on the bell come from the Bible: «Proclaim liberty throughout all the land.»",
      es: "Hoy nadie quiere repararla. Los guardas del parque se la explican a los visitantes con una sonrisa: la campana está en silencio, pero su mensaje sigue viajando. Las palabras de la campana vienen de la Biblia: «Proclamad la libertad por toda la tierra.»" },
    ],
    words: [
      { it: "the bell", es: "la campana" },
      { it: "to crack / the crack", es: "agrietarse / la grieta" },
      { it: "to melt down", es: "fundir" },
      { it: "to ring (rang, rung)", es: "sonar (verbo irregular)" },
      { it: "the crack (for good)", es: "la grieta (para siempre)" },
      { it: "the park ranger", es: "el guarda del parque" },
    ],
    questions: [
      { q: "¿De dónde llegó la campana y en qué año?", options: ["From London, 1752", "From Boston, 1776", "From Philadelphia, 1846", "From New York, 1800"], answer: 0, why: "«The bell arrived from London in 1752.»" },
      { q: "¿Por qué la llaman la Campana de la Libertad?", options: ["Because it is free", "Because it rang for the first public reading of the Declaration of Independence", "Because it is made of gold", "Because it never breaks"], answer: 1, why: "«On July 8, 1776, it rang for the first public reading of the Declaration of Independence.»" },
      { q: "¿Qué pasó en 1846?", options: ["Workers fixed it forever", "Workers tried to fix it, but it cracked again for good", "It was melted again", "It was sold"], answer: 1, why: "«In 1846, workers tried to fix it… The bell cracked again, this time for good.»" },
      { q: "¿Qué hacen hoy los guardas del parque?", options: ["They repair the bell", "They explain its story to visitors", "They sell the bell", "They hide it"], answer: 1, why: "«Park rangers explain it to visitors with a smile.»" },
      { q: "¿De dónde vienen las palabras escritas en la campana?", options: ["From the Constitution", "From the Bible", "From a poem", "From a newspaper"], answer: 1, why: "«Words on the bell come from the Bible.»" },
    ],
    discuss: [
      { it: "Is there an object with a crack or a scar that you would never repair? Tell its story.", es: "¿Hay un objeto con una grieta o cicatriz que nunca repararías? Cuenta su historia." },
      { it: "Why do you think people prefer symbols that are old and imperfect, not perfect and new?", es: "¿Por qué crees que la gente prefiere símbolos viejos e imperfectos, y no perfectos y nuevos?" },
    ],
  },

  /* ═══ A2 · 2 — Technology ═══ */
  {
    id: "en-news-a2-02", cat: "tecnologia", level: "A2", place: "Seattle", minutes: 3,
    title: "The library in your pocket",
    titleEs: "La biblioteca en tu bolsillo",
    lead: {
      it: "In Seattle you can now borrow a library card on your phone in two minutes. Librarians say the queue outside was longer than the wait for coffee.",
      es: "En Seattle ya puedes obtener un carnet de biblioteca en tu teléfono en dos minutos. Los bibliotecarios dicen que la fila afuera era más larga que la espera del café.",
    },
    paragraphs: [
      { it: "Seattle loves reading. The city has one of the busiest central libraries in the country: steel, glass and eleven floors of books.",
      es: "Seattle ama la lectura. La ciudad tiene una de las bibliotecas centrales más concurridas del país: acero, vidrio y once pisos de libros." },
      { it: "Last month, the library system started something new: an online card. You open the app, enter your address, and you get a number immediately.",
      es: "El mes pasado, el sistema de bibliotecas empezó algo nuevo: un carnet en línea. Abres la app, escribes tu dirección y obtienes un número de inmediato." },
      { it: "With the digital card, you can borrow e-books and audiobooks the same day. No plastic, no paper, no waiting. Students use it for homework; commuters listen to novels on the bus.",
      es: "Con el carnet digital, puedes prestar libros electrónicos y audiolibros el mismo día. Sin plástico, sin papel, sin esperas. Los estudiantes lo usan para la tarea; quienes van al trabajo escuchan novelas en el autobús." },
      { it: "There is one rule, of course: return the e-books on time. Well — the app returns them automatically. The librarians joke that now the only fine in the library is the coffee.",
      es: "Hay una regla, por supuesto: devolver los libros a tiempo. Bueno… la app los devuelve automáticamente. Los bibliotecarios bromean que ahora la única multa de la biblioteca es el café." },
    ],
    words: [
      { it: "to borrow", es: "tomar prestado" },
      { it: "the library card", es: "el carnet de biblioteca" },
      { it: "the e-book", es: "el libro electrónico" },
      { it: "the audiobook", es: "el audiolibro" },
      { it: "the queue", es: "la fila" },
      { it: "on time", es: "a tiempo" },
    ],
    questions: [
      { q: "¿Qué empezó el sistema de bibliotecas el mes pasado?", options: ["A new building", "An online card", "A coffee shop", "A paper card"], answer: 1, why: "«The library system started something new: an online card.»" },
      { q: "¿Qué necesitas para obtener el número?", options: ["Your address and the app", "A passport", "A photo", "A book"], answer: 0, why: "«You open the app, enter your address, and you get a number immediately.»" },
      { q: "¿Quiénes usan el carnet digital, según la noticia?", options: ["Students and commuters", "Only tourists", "Only librarians", "Nobody"], answer: 0, why: "«Students use it for homework; commuters listen to novels on the bus.»" },
      { q: "¿Qué pasa con los libros electrónicos atrasados?", options: ["You pay a fine", "The app returns them automatically", "You lose the card", "The library calls you"], answer: 1, why: "«The app returns them automatically… now the only fine in the library is the coffee.»" },
    ],
    discuss: [
      { it: "Paper books or e-books: which one is really yours? Why?", es: "Libros de papel o electrónicos: ¿cuál es realmente tuyo? ¿Por qué?" },
      { it: "What was the last thing you borrowed? Did you return it on time?", es: "¿Qué fue lo último que tomaste prestado? ¿Lo devolviste a tiempo?" },
    ],
  },

  /* ═══ A2 · 3 — Sports ═══ */
  {
    id: "en-news-a2-03", cat: "sport", level: "A2", place: "Denver", minutes: 3,
    title: "Free ski lessons for fifth graders",
    titleEs: "Clases de esquí gratis para quinto grado",
    lead: {
      it: "Colorado has a rule: every child should touch the snow at least once. The program is called Ski Passport, and this year the list grew again.",
      es: "Colorado tiene una regla: cada niño debería tocar la nieve al menos una vez. El programa se llama Ski Passport, y este año la lista creció otra vez.",
    },
    paragraphs: [
      { it: "In Colorado, the mountains are near, but skiing is expensive. A day ticket can cost more than the family's food budget for a week.",
      es: "En Colorado las montañas están cerca, pero esquiar es caro. Un billete de un día puede costar más que el presupuesto de comida de la familia para una semana." },
      { it: "That is why the state created the Ski Passport years ago. Fifth graders pay a small fee once, and then they get free or very cheap tickets at twenty mountains.",
      es: "Por eso el estado creó el Ski Passport hace años. Los niños de quinto grado pagan una pequeña cuota una vez, y luego consiguen entradas gratis o muy baratas en veinte montañas." },
      { it: "This winter, almost every big resort joined the program. Kids also get free lessons and rentals on special weekends. The idea is simple: try a sport once, and maybe you will love it for life.",
      es: "Este invierno, casi todos los grandes centros de esquí se unieron al programa. Los niños también reciben clases y equipo gratis en fines de semana especiales. La idea es simple: prueba un deporte una vez, y quizás lo ames de por vida." },
      { it: "Teachers like the plan for another reason: after a day on the snow, students talk about physics, weather and courage — in class, without complaints.",
      es: "A los maestros les gusta el plan por otra razón: después de un día en la nieve, los estudiantes hablan de física, del clima y del valor — en clase, sin quejarse." },
    ],
    words: [
      { it: "the fifth grader", es: "el niño de quinto grado" },
      { it: "expensive", es: "caro" },
      { it: "the fee", es: "la cuota" },
      { it: "the resort", es: "el centro de esquí" },
      { it: "the rental", es: "el alquiler (de equipo)" },
      { it: "to join", es: "unirse" },
    ],
    questions: [
      { q: "¿Por qué es difícil esquiar en Colorado para muchas familias?", options: ["Because the mountains are far", "Because a day ticket is expensive", "Because there is no snow", "Because schools forbid it"], answer: 1, why: "«A day ticket can cost more than the family's food budget for a week.»" },
      { q: "¿Qué reciben los niños de quinto grado con el Ski Passport?", options: ["A new car", "Free or very cheap tickets at twenty mountains", "Money for food", "Nothing"], answer: 1, why: "«They get free or very cheap tickets at twenty mountains.»" },
      { q: "¿Qué más obtienen los niños en fines de semana especiales?", options: ["Free lessons and rentals", "Free food", "Free phones", "Free homework"], answer: 0, why: "«Kids also get free lessons and rentals on special weekends.»" },
      { q: "¿Por qué les gusta el plan a los maestros?", options: ["Because students talk about physics, weather and courage", "Because it is cheap", "Because they ski too", "Because there is no school"], answer: 0, why: "«After a day on the snow, students talk about physics, weather and courage.»" },
    ],
    discuss: [
      { it: "Did your school offer any sport for free? What was it?", es: "¿Tu colegio ofrecía algún deporte gratis? ¿Cuál?" },
      { it: "Should the state pay for sports lessons for all children? Where would the money come from?", es: "¿Debe el estado pagar clases de deporte para todos los niños? ¿De dónde saldría el dinero?" },
    ],
  },
];
