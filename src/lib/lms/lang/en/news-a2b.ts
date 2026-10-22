/* ── EN · Notizie A2 · batch B (v9.39) ───────────────────────────────
   American English news adapted to A2, Voice of America Learning
   English method. 100% original didactic content. Body: 4 short
   paragraphs, 100-145 words, past simple + present continuous +
   going to. Fields `.it` = English (study language), `.es` = Spanish.
   Ids en-news-a2-04…15. */

import type { NewsItem } from "../../news";

export const EN_NEWS_A2B: NewsItem[] = [

  /* ═══ A2 · 4 — Science ═══ */
  {
    id: "en-news-a2-04", cat: "scienza", level: "A2", place: "Anchorage", minutes: 3,
    title: "The night the sky turned green over Anchorage",
    titleEs: "La noche en que el cielo se volvió verde sobre Anchorage",
    lead: {
      it: "One night in Anchorage, the sky turned green and purple. Hundreds of people stopped their cars and took pictures of the northern lights.",
      es: "Una noche en Anchorage, el cielo se volvió verde y violeta. Cientos de personas pararon sus coches y tomaron fotos de la aurora boreal.",
    },
    paragraphs: [
      { it: "Last month, a strong solar storm hit Earth. In Anchorage, the northern lights appeared at ten o'clock. The sky turned green, purple and pink. Many people went outside in pajamas and snow boots.",
      es: "El mes pasado, una fuerte tormenta solar golpeó la Tierra. En Anchorage, las auroras boreales aparecieron a las diez. El cielo se volvió verde, violeta y rosa. Mucha gente salió en pijama y botas de nieve." },
      { it: "The photos are now famous online. One image shows a moose under a pink sky. Photographer Lisa Carter took it near her house. «I was sleeping, but my phone woke me up,» she says.",
      es: "Las fotos ya son famosas en internet. Una imagen muestra un alce bajo un cielo rosa. La fotógrafa Lisa Carter la tomó cerca de su casa. «Estaba durmiendo, pero mi teléfono me despertó», dice." },
      { it: "Scientists are studying this solar cycle with special cameras. The sun is more active now, so the lights are visiting the south too. Last week, people saw them in Texas.",
      es: "Los científicos están estudiando este ciclo solar con cámaras especiales. El sol está más activo ahora, así que las luces también están visitando el sur. La semana pasada, la gente las vio en Texas." },
      { it: "The University of Alaska is going to offer free aurora classes this winter. Students are going to learn how the sun paints the sky. Bring warm clothes — and patience.",
      es: "La Universidad de Alaska va a ofrecer clases gratuitas de auroras este invierno. Los estudiantes van a aprender cómo el sol pinta el cielo. Lleva ropa abrigada… y paciencia." },
    ],
    words: [
      { it: "the northern lights", es: "la aurora boreal" },
      { it: "the solar storm", es: "la tormenta solar" },
      { it: "the sky", es: "el cielo" },
      { it: "to hit (hit)", es: "golpear, azotar", note: "verbo irregular: hit – hit – hit" },
      { it: "the photographer", es: "el fotógrafo / la fotógrafa" },
      { it: "patience", es: "la paciencia" },
    ],
    questions: [
      { q: "¿Qué pasó en Anchorage el mes pasado?", options: ["A solar storm hit Earth and the sky turned green", "It snowed for ten days", "The city lost electricity", "A rocket crashed"], answer: 0, why: "«A strong solar storm hit Earth… the sky turned green, purple and pink.»" },
      { q: "¿Quién tomó la foto del alce?", options: ["A tourist from Texas", "Photographer Lisa Carter", "A university scientist", "A park ranger"], answer: 1, why: "«One image shows a moose under a pink sky. Photographer Lisa Carter took it near her house.»" },
      { q: "¿Por qué ven ahora las luces también en el sur?", options: ["Because Alaska is closed", "Because the winters are warmer", "Because the sun is more active now", "Because of the city lights"], answer: 2, why: "«The sun is more active now, so the lights are visiting the south too.»" },
      { q: "¿Qué van a aprender los estudiantes en las clases de auroras?", options: ["How to photograph moose", "How to repair phones", "How to predict snow", "How the sun paints the sky"], answer: 3, why: "«Students are going to learn how the sun paints the sky.»" },
    ],
    discuss: [
      { it: "Have you ever seen the northern lights, or another sky show? Tell us about it.", es: "¿Has visto alguna vez la aurora boreal u otro espectáculo del cielo? Cuéntanoslo." },
      { it: "Would you wake up at two in the morning for a photo? Why or why not?", es: "¿Te levantarías a las dos de la mañana por una foto? ¿Por qué sí o no?" },
    ],
  },

  /* ═══ A2 · 5 — Environment ═══ */
  {
    id: "en-news-a2-05", cat: "ambiente", level: "A2", place: "New Orleans", minutes: 3,
    title: "Cypress trees return to the Louisiana bayou",
    titleEs: "Los cipreses vuelven al bayou de Luisiana",
    lead: {
      it: "South of New Orleans, the bayou is losing land every hour. Now volunteers are bringing back an old hero: the cypress tree.",
      es: "Al sur de Nueva Orleans, el bayou pierde tierra cada hora. Ahora unos voluntarios están devolviendo a un viejo héroe: el ciprés.",
    },
    paragraphs: [
      { it: "A hundred years ago, forests of cypress trees covered the wetlands near New Orleans. The trees drank storm water and stopped the wind. Then loggers cut millions of them, and storms washed the land away.",
      es: "Hace cien años, bosques de cipreses cubrían los humedales cerca de Nueva Orleans. Los árboles bebían el agua de las tormentas y frenaban el viento. Después, los leñadores talaron millones de ellos, y las tormentas se llevaron la tierra." },
      { it: "Today the situation is changing. Every weekend, volunteers are planting young cypress trees in the mud. Boats carry two thousand seedlings per trip. Students, families and even tourists help.",
      es: "Hoy la situación está cambiando. Cada fin de semana, voluntarios están plantando cipreses jóvenes en el lodo. Los barcos llevan dos mil plántulas por viaje. Estudiantes, familias y hasta turistas ayudan." },
      { it: "«One tree is small, but a forest is a wall,» says biologist Mark Johnson. He works for a local restoration group. «In twenty years, these trees are going to protect this city.»",
      es: "«Un árbol es pequeño, pero un bosque es un muro», dice el biólogo Mark Johnson. Trabaja para un grupo local de restauración. «En veinte años, estos árboles van a proteger esta ciudad.»" },
      { it: "The program started three years ago with four thousand trees. This year, the goal is fifty thousand. The bayou is coming back, one weekend at a time.",
      es: "El programa empezó hace tres años con cuatro mil árboles. Este año, la meta es cincuenta mil. El bayou está volviendo, un fin de semana a la vez." },
    ],
    words: [
      { it: "the wetlands", es: "los humedales" },
      { it: "the cypress tree / the cypress trees", es: "el ciprés / los cipreses" },
      { it: "the volunteer / the volunteers", es: "el voluntario / los voluntarios" },
      { it: "the seedlings", es: "las plántulas" },
      { it: "the mud", es: "el lodo, el barro" },
      { it: "to protect", es: "proteger" },
    ],
    questions: [
      { q: "¿Qué hacían los cipreses hace cien años?", options: ["They drank storm water and stopped the wind", "They produced oil", "They blocked the river", "They grew in gardens"], answer: 0, why: "«The trees drank storm water and stopped the wind.»" },
      { q: "¿Cuántas plántulas lleva cada barco por viaje?", options: ["Twenty", "Two thousand", "Two million", "Two hundred"], answer: 1, why: "«Boats carry two thousand seedlings per trip.»" },
      { q: "¿Por qué dice el biólogo que «un bosque es un muro»?", options: ["Because it is beautiful", "Because walls are old", "Because it is expensive", "Because the trees are going to protect the city"], answer: 3, why: "«One tree is small, but a forest is a wall… these trees are going to protect this city.»" },
      { q: "¿Cuál es la meta de este año?", options: ["Four thousand trees", "Fifty trees", "Fifty thousand trees", "One hundred thousand trees"], answer: 2, why: "«This year, the goal is fifty thousand.»" },
    ],
    discuss: [
      { it: "Is your city prepared for big storms? What could improve?", es: "¿Está tu ciudad preparada para las grandes tormentas? ¿Qué podría mejorar?" },
      { it: "Would you spend a weekend planting trees in the mud? Why or why not?", es: "¿Dedicarías un fin de semana a plantar árboles en el lodo? ¿Por qué sí o no?" },
    ],
  },

  /* ═══ A2 · 6 — Health ═══ */
  {
    id: "en-news-a2-06", cat: "salute", level: "A2", place: "Cleveland", minutes: 3,
    title: "Dogs with a job at a children's hospital",
    titleEs: "Perros con empleo en un hospital infantil",
    lead: {
      it: "At a children's hospital in Cleveland, the most popular workers have four legs. They don't wear white coats — they wear bandanas.",
      es: "En un hospital infantil de Cleveland, los trabajadores más populares tienen cuatro patas. No llevan batas blancas: llevan pañuelos.",
    },
    paragraphs: [
      { it: "Every Tuesday, therapy dogs visit the rooms of the children's hospital in Cleveland. They wear colorful bandanas with their names. Kids stroke their soft ears and forget the needles for a while.",
      es: "Cada martes, perros de terapia visitan las habitaciones del hospital infantil de Cleveland. Llevan pañuelos de colores con sus nombres. Los niños acarician sus orejas suaves y olvidan las agujas por un rato." },
      { it: "Nine-year-old patient Noah Bell was afraid of doctors last month. Then he met Goldie, a golden retriever. Now he reads stories to her before his treatment. «Goldie listens. She never says ouch,» he laughs.",
      es: "El paciente Noah Bell, de nueve años, tenía miedo a los médicos el mes pasado. Luego conoció a Goldie, una golden retriever. Ahora le lee cuentos antes de su tratamiento. «Goldie escucha. Nunca dice ¡ay!», se ríe." },
      { it: "Studies show the visits work: children are sleeping better, and they need less medicine for stress. Nurses are seeing the difference too. «The whole floor smiles on Tuesdays,» says nurse Rachel Adams.",
      es: "Los estudios demuestran que las visitas funcionan: los niños están durmiendo mejor y necesitan menos medicación para el estrés. Las enfermeras también están viendo la diferencia. «Toda la planta sonríe los martes», dice la enfermera Rachel Adams." },
      { it: "The hospital started the program with three dogs. It now has twelve, and next year the handlers are going to train twenty more. The waiting list? Only for humans.",
      es: "El hospital empezó el programa con tres perros. Ahora tiene doce, y el año próximo los adiestadores van a entrenar veinte más. ¿La lista de espera? Solo para humanos." },
    ],
    words: [
      { it: "the therapy dog / the therapy dogs", es: "el perro de terapia / los perros de terapia" },
      { it: "the bandanas", es: "los pañuelos (de perro)" },
      { it: "the patient", es: "el paciente / la paciente" },
      { it: "the treatment", es: "el tratamiento" },
      { it: "the nurse", es: "el enfermero / la enfermera" },
      { it: "the handler / the handlers", es: "el adiestrador / los adiestradores" },
    ],
    questions: [
      { q: "¿Cuándo visitan los perros el hospital?", options: ["Only in summer", "Every Tuesday", "Every night", "Once a year"], answer: 1, why: "«Every Tuesday, therapy dogs visit the rooms of the children's hospital in Cleveland.»" },
      { q: "¿Cómo estaba Noah antes de conocer a Goldie?", options: ["He read to nurses", "He worked with dogs", "He was afraid of doctors", "He hated dogs"], answer: 2, why: "«Nine-year-old patient Noah Bell was afraid of doctors last month.»" },
      { q: "¿Qué están notando los médicos y enfermeras?", options: ["The children are sleeping better and need less medicine", "The children eat more", "The dogs need more food", "Nothing changes"], answer: 0, why: "«Children are sleeping better, and they need less medicine for stress.»" },
      { q: "¿Cuántos perros más van a entrenar el año próximo?", options: ["Three", "Twelve", "Two hundred", "Twenty more"], answer: 3, why: "«Next year the handlers are going to train twenty more.»" },
    ],
    discuss: [
      { it: "Do animals help you feel calm? Tell us about a special pet.", es: "¿Los animales te ayudan a estar tranquilo? Cuéntanos una mascota especial." },
      { it: "Should hospitals spend money on therapy animals, or only on machines and medicine?", es: "¿Deberían los hospitales gastar dinero en animales de terapia, o solo en máquinas y medicina?" },
    ],
  },

  /* ═══ A2 · 7 — Culture ═══ */
  {
    id: "en-news-a2-07", cat: "cultura", level: "A2", place: "Santa Fe", minutes: 3,
    title: "The world's folk artists meet in Santa Fe",
    titleEs: "Los artistas populares del mundo se reúnen en Santa Fe",
    lead: {
      it: "Once a year, a small city in the desert becomes an art capital. Folk artists from fifty countries are arriving in Santa Fe with suitcases full of stories.",
      es: "Una vez al año, una pequeña ciudad del desierto se convierte en capital del arte. Artistas populares de cincuenta países están llegando a Santa Fe con las maletas llenas de historias.",
    },
    paragraphs: [
      { it: "The Santa Fe International Folk Art Market started in 2004 with sixty artists. This summer, more than one hundred fifty masters came to New Mexico from every continent. They brought textiles, ceramics, baskets and paintings.",
      es: "El Mercado Internacional de Arte Popular de Santa Fe empezó en 2004 con sesenta artistas. Este verano, más de ciento cincuenta maestros llegaron a Nuevo México desde todos los continentes. Trajeron textiles, cerámicas, cestas y pinturas." },
      { it: "For many artists, the trip was their first plane ride. A weaver from Peru sold all her tablecloths in two hours last year. «My village is going to eat well this winter,» she laughs.",
      es: "Para muchos artistas, el viaje fue su primera vez en avión. Una tejedora de Perú vendió todos sus manteles en dos horas el año pasado. «Mi pueblo va a comer bien este invierno», se ríe." },
      { it: "Visitors are walking between the white tents on Museum Hill. They touch the fabrics, ask questions and dance to live music. Nothing costs a fortune here: the idea is fair trade, not high prices.",
      es: "Los visitantes están caminando entre las carpas blancas de Museum Hill. Tocan las telas, hacen preguntas y bailan con música en vivo. Aquí nada cuesta una fortuna: la idea es el comercio justo, no los precios altos." },
      { it: "The market closes on Sunday night with a big community dinner. The money goes back to the artists' towns — schools, wells and workshops. Art, the organizers say, is a bridge.",
      es: "El mercado cierra el domingo por la noche con una gran cena comunitaria. El dinero vuelve a los pueblos de los artistas: escuelas, pozos y talleres. El arte, dicen los organizadores, es un puente." },
    ],
    words: [
      { it: "folk art", es: "el arte popular" },
      { it: "the weaver", es: "el tejedor / la tejedora" },
      { it: "the textiles", es: "los textiles" },
      { it: "the baskets", es: "las cestas" },
      { it: "fair trade", es: "el comercio justo" },
      { it: "the workshops", es: "los talleres" },
    ],
    questions: [
      { q: "¿Con cuántos artistas empezó el mercado en 2004?", options: ["Sixty", "Six hundred", "Sixteen", "Six thousand"], answer: 0, why: "«The Santa Fe International Folk Art Market started in 2004 with sixty artists.»" },
      { q: "¿Qué significa que la idea del mercado sea «comercio justo»?", options: ["High prices for tourists", "The money goes back to the artists' towns", "Only rich people can buy", "The art is free"], answer: 1, why: "«The idea is fair trade, not high prices… The money goes back to the artists' towns.»" },
      { q: "¿Qué pasó con los manteles de la tejedora de Perú?", options: ["She lost them at the airport", "She gave them away", "She painted them", "She sold all of them in two hours"], answer: 3, why: "«A weaver from Peru sold all her tablecloths in two hours last year.»" },
      { q: "¿Cómo cierra el mercado el domingo por la noche?", options: ["With a big community dinner", "With a silent auction", "With a parade of cars", "With nothing"], answer: 0, why: "«The market closes on Sunday night with a big community dinner.»" },
    ],
    discuss: [
      { it: "What traditional crafts exist in your region? Which one would you show in Santa Fe?", es: "¿Qué artesanías tradicionales hay en tu región? ¿Cuál mostrarías en Santa Fe?" },
      { it: "Is it better to buy cheap factory products or expensive handmade things? Why?", es: "¿Es mejor comprar productos baratos de fábrica o cosas caras hechas a mano? ¿Por qué?" },
    ],
  },

  /* ═══ A2 · 8 — Economy ═══ */
  {
    id: "en-news-a2-08", cat: "economia", level: "A2", place: "Detroit", minutes: 3,
    title: "Detroit builds a new life, one bicycle at a time",
    titleEs: "Detroit construye una nueva vida, una bicicleta a la vez",
    lead: {
      it: "Detroit built the cars that changed America. Now a new factory in the same city is making something slower, cheaper and greener: bicycles.",
      es: "Detroit construyó los coches que cambiaron Estados Unidos. Ahora una fábrica nueva en la misma ciudad fabrica algo más lento, barato y ecológico: bicicletas.",
    },
    paragraphs: [
      { it: "Detroit is famous for cars. But the city also has a bicycle factory with forty workers. Last year, they made eight thousand bikes by hand, and this year they are making more.",
      es: "Detroit es famosa por los coches. Pero la ciudad también tiene una fábrica de bicicletas con cuarenta trabajadores. El año pasado hicieron ocho mil bicicletas a mano, y este año están haciendo más." },
      { it: "The company started in a small garage in 2011. Two friends, both car mechanics, welded their first frames there. Today, their steel bikes are riding across all fifty states.",
      es: "La empresa empezó en un garaje pequeño en 2011. Dos amigos, ambos mecánicos de coches, soldaron allí sus primeros cuadros. Hoy sus bicicletas de acero ruedan por los cincuenta estados." },
      { it: "The factory is training young welders from the neighborhoods. «A bicycle is simple, but a job changes a life,» says co-founder Steven Doyle. «We are going to hire ten apprentices next spring.»",
      es: "La fábrica está formando a jóvenes soldadores de los barrios. «Una bicicleta es simple, pero un trabajo cambia una vida», dice el cofundador Steven Doyle. «Vamos a contratar diez aprendices la próxima primavera.»" },
      { it: "The city is happy about the plan. Detroit lost thousands of factory jobs years ago, so every new workshop matters. And the workers joke: their products never need gasoline.",
      es: "A la ciudad le gusta el plan. Detroit perdió miles de empleos de fábrica hace años, así que cada taller nuevo importa. Y los trabajadores bromean: sus productos nunca necesitan gasolina." },
    ],
    words: [
      { it: "the factory", es: "la fábrica" },
      { it: "the frames", es: "los cuadros (de la bicicleta)" },
      { it: "the welders", es: "los soldadores" },
      { it: "by hand", es: "a mano" },
      { it: "the apprentices", es: "los aprendices" },
      { it: "to hire", es: "contratar" },
    ],
    questions: [
      { q: "¿Cuántas bicicletas hicieron los trabajadores el año pasado?", options: ["Eight hundred", "Eight thousand", "Eighty", "Eighteen"], answer: 1, why: "«Last year, they made eight thousand bikes by hand.»" },
      { q: "¿Dónde empezó la empresa en 2011?", options: ["In a school", "In a car factory", "In New York", "In a small garage"], answer: 3, why: "«The company started in a small garage in 2011.»" },
      { q: "¿Por qué le importa tanto a la ciudad cada taller nuevo?", options: ["Because the city lost thousands of factory jobs years ago", "Because bikes are pretty", "Because gasoline is cheap", "Because cars are forbidden"], answer: 0, why: "«Detroit lost thousands of factory jobs years ago, so every new workshop matters.»" },
      { q: "¿Qué van a hacer la próxima primavera?", options: ["Close the factory", "Sell the garage", "Hire ten apprentices", "Make cars"], answer: 2, why: "«We are going to hire ten apprentices next spring.»" },
    ],
    discuss: [
      { it: "Is your city good for bicycles? What is missing: lanes, parking, respect?", es: "¿Es buena tu ciudad para las bicicletas? ¿Qué falta: carriles, aparcamiento, respeto?" },
      { it: "Would you pay more for a product made by hand in your country? Why?", es: "¿Pagarías más por un producto hecho a mano en tu país? ¿Por qué?" },
    ],
  },

  /* ═══ A2 · 9 — Society ═══ */
  {
    id: "en-news-a2-09", cat: "societa", level: "A2", place: "Kansas City", minutes: 3,
    title: "The library that lends drills, not books",
    titleEs: "La biblioteca que presta taladros, no libros",
    lead: {
      it: "In Kansas City, there is a library with no books. Members borrow drills, tents, sewing machines and garden tools — and they meet their neighbors.",
      es: "En Kansas City hay una biblioteca sin libros. Los socios toman prestados taladros, tiendas de campaña, máquinas de coser y herramientas de jardín… y conocen a sus vecinos.",
    },
    paragraphs: [
      { it: "The Kansas City Tool Library opened five years ago in an old streetcar barn. Today it has nine hundred members and three thousand tools. A membership costs forty dollars a year.",
      es: "La Biblioteca de Herramientas de Kansas City abrió hace cinco años en un viejo depósito de tranvías. Hoy tiene novecientos socios y tres mil herramientas. La afiliación cuesta cuarenta dólares al año." },
      { it: "The idea is simple: nobody uses a drill every day. Why should everyone own one? «People come for a tool and stay for the neighbors,» says director Grace Murphy.",
      es: "La idea es simple: nadie usa un taladro todos los días. ¿Para qué debería tenerlo cada quien? «La gente viene por una herramienta y se queda por los vecinos», dice la directora Grace Murphy." },
      { it: "Last Saturday, a retired teacher borrowed a pressure washer to clean her street's benches. Two students took camping chairs for a weekend trip. A father and his daughter are building a birdhouse this week.",
      es: "El sábado pasado, una maestra jubilada tomó prestada una máquina de limpieza a presión para limpiar los bancos de su calle. Dos estudiantes se llevaron sillas de camping para un viaje de fin de semana. Un padre y su hija están construyendo una casa para pájaros esta semana." },
      { it: "The library is going to open a second branch next year, and volunteers are collecting tools at the door. In difficult times, sharing is the cheapest technology.",
      es: "La biblioteca va a abrir una segunda sucursal el año próximo, y los voluntarios están recolectando herramientas en la puerta. En tiempos difíciles, compartir es la tecnología más barata." },
    ],
    words: [
      { it: "the tool library", es: "la biblioteca de herramientas" },
      { it: "to borrow / borrowed", es: "tomar prestado" },
      { it: "the drill", es: "el taladro" },
      { it: "the member / the membership", es: "el socio / la afiliación" },
      { it: "the bench / the benches", es: "el banco / los bancos (de parque)", note: "para el banco de dinero se dice bank" },
      { it: "the neighbor / the neighbors", es: "el vecino / los vecinos" },
    ],
    questions: [
      { q: "¿Cuántos socios tiene hoy la biblioteca de herramientas?", options: ["Nine thousand", "Nine hundred", "Ninety", "Nine"], answer: 1, why: "«Today it has nine hundred members and three thousand tools.»" },
      { q: "¿Cuánto cuesta la afiliación anual?", options: ["Four dollars", "Fourteen dollars", "Four hundred dollars", "Forty dollars"], answer: 3, why: "«A membership costs forty dollars a year.»" },
      { q: "¿Qué están construyendo un padre y su hija esta semana?", options: ["A streetcar", "A tool library", "A birdhouse", "A new garage"], answer: 2, why: "«A father and his daughter are building a birdhouse this week.»" },
      { q: "¿Cuál es el verdadero valor de la biblioteca, según la noticia?", options: ["Meeting the neighbors and building community", "Only saving money", "The tools are always new", "The membership is free"], answer: 0, why: "«People come for a tool and stay for the neighbors,» dice la directora: la comunidad es el corazón del proyecto." },
    ],
    discuss: [
      { it: "Do you know your neighbors? What are their names?", es: "¿Conoces a tus vecinos? ¿Cómo se llaman?" },
      { it: "What object do you own but use only once a year? Could you share it?", es: "¿Qué objeto tienes pero usas solo una vez al año? ¿Podrías compartirlo?" },
    ],
  },

  /* ═══ A2 · 10 — History ═══ */
  {
    id: "en-news-a2-10", cat: "storia", level: "A2", place: "New York", minutes: 3,
    title: "Ellis Island: the door to America",
    titleEs: "Ellis Island: la puerta de América",
    lead: {
      it: "Before the airports, before the highways, there was a small island in New York harbor. Twelve million immigrants started their American story there.",
      es: "Antes de los aeropuertos, antes de las autopistas, hubo una pequeña isla en el puerto de Nueva York. Doce millones de inmigrantes empezaron allí su historia americana.",
    },
    paragraphs: [
      { it: "Ellis Island opened its doors in 1892. For sixty-two years, ships arrived from Europe, Asia and Latin America. Doctors checked the passengers; officers asked questions about work and family. Most people passed in a few hours.",
      es: "Ellis Island abrió sus puertas en 1892. Durante sesenta y dos años, los barcos llegaron desde Europa, Asia y América Latina. Los médicos revisaban a los pasajeros; los funcionarios preguntaban por el trabajo y la familia. La mayoría pasaba la inspección en pocas horas." },
      { it: "Historians tell stories like Rosa's. She was a young immigrant from Italy, and she crossed the ocean in 1910 with one suitcase and her grandmother's bread recipe. Her great-grandchildren live in Chicago today.",
      es: "Los historiadores cuentan historias como la de Rosa. Era una joven inmigrante de Italia y cruzó el océano en 1910 con una maleta y la receta de pan de su abuela. Sus bisnietos viven hoy en Chicago." },
      { it: "The station closed in 1954, and the buildings fell into ruins. Years later, restorers brought the great hall back to life. Now the museum is welcoming two million visitors a year.",
      es: "La estación cerró en 1954 y los edificios quedaron en ruinas. Años después, unos restauradores devolvieron la vida al gran salón. Ahora el museo está recibiendo a dos millones de visitantes al año." },
      { it: "Next month, the museum is going to open a new center with digital records. Americans are going to search for their ancestors online. History, here, is a family affair.",
      es: "El mes próximo, el museo va a abrir un nuevo centro con registros digitales. Los estadounidenses van a buscar a sus antepasados en línea. La historia, aquí, es un asunto familiar." },
    ],
    words: [
      { it: "the immigrant", es: "el inmigrante / la inmigrante" },
      { it: "the ship / the ships", es: "el barco / los barcos" },
      { it: "the suitcase", es: "la maleta" },
      { it: "the ocean", es: "el océano" },
      { it: "the records", es: "los registros" },
      { it: "the great hall", es: "el gran salón" },
    ],
    questions: [
      { q: "¿Durante cuántos años llegaron barcos a Ellis Island?", options: ["Sixty-two years", "Sixty years", "Twenty-six years", "One hundred years"], answer: 0, why: "«For sixty-two years, ships arrived from Europe, Asia and Latin America.»" },
      { q: "¿Qué llevaba Rosa además de la maleta?", options: ["Money", "Her grandmother's bread recipe", "Photos of New York", "A ticket home"], answer: 1, why: "«She crossed the ocean in 1910 with one suitcase and her grandmother's bread recipe.»" },
      { q: "¿Qué pasó con los edificios después de 1954?", options: ["They became a hotel", "They burned", "They fell into ruins", "They became offices"], answer: 2, why: "«The station closed in 1954, and the buildings fell into ruins.»" },
      { q: "¿Qué van a poder hacer los estadounidenses en el nuevo centro?", options: ["Book ship tickets", "Search for their ancestors online", "Watch old movies", "Buy bread recipes"], answer: 1, why: "«Americans are going to search for their ancestors online.»" },
    ],
    discuss: [
      { it: "Did someone in your family move to another country? Tell their story.", es: "¿Alguien de tu familia se mudó a otro país? Cuenta su historia." },
      { it: "How many languages do you hear on the streets of your city every day?", es: "¿Cuántos idiomas escuchas cada día en las calles de tu ciudad?" },
    ],
  },

  /* ═══ A2 · 11 — Technology ═══ */
  {
    id: "en-news-a2-11", cat: "tecnologia", level: "A2", place: "Columbus", minutes: 3,
    title: "Small robots deliver food in Columbus",
    titleEs: "Pequeños robots reparten comida en Columbus",
    lead: {
      it: "In Columbus, Ohio, lunch sometimes arrives on six wheels. Small robots are rolling across the campus with sandwiches, sushi and toothpaste.",
      es: "En Columbus, Ohio, a veces el almuerzo llega sobre seis ruedas. Pequeños robots están rodando por el campus con sándwiches, sushi y pasta de dientes.",
    },
    paragraphs: [
      { it: "The robots are knee-high, white and very polite. They cross streets, climb sidewalks and wait for traffic lights. A phone app opens their lid, and the food is still warm.",
      es: "Los robots son de la altura de una rodilla, blancos y muy educados. Cruzan calles, suben aceras y esperan los semáforos. Una app del teléfono abre su tapa, y la comida sigue caliente." },
      { it: "The company started the service two years ago with six machines. Today, two hundred robots are working in the city. Last month, they completed ninety thousand deliveries.",
      es: "La empresa empezó el servicio hace dos años con seis máquinas. Hoy, doscientos robots están trabajando en la ciudad. El mes pasado completaron noventa mil entregas." },
      { it: "Students love them. «My robot waited outside the library in the rain,» says student Emma Walsh. «A hero!» Older residents had questions at first, but now they are sending orders too.",
      es: "Los estudiantes los adoran. «Mi robot esperó fuera de la biblioteca bajo la lluvia», dice la estudiante Emma Walsh. «¡Un héroe!» Los vecinos mayores tuvieron dudas al principio, pero ahora también están enviando pedidos." },
      { it: "The next step is coming: bigger robots are going to carry food from supermarkets, and the city is going to study night deliveries. The machines still say thank you — in a small, friendly voice.",
      es: "El siguiente paso ya viene: robots más grandes van a llevar comida desde los supermercados, y la ciudad va a estudiar las entregas nocturnas. Las máquinas todavía dicen thank you — con una voz pequeña y amable." },
    ],
    words: [
      { it: "the robot / the robots", es: "el robot / los robots" },
      { it: "the deliveries", es: "las entregas" },
      { it: "the sidewalks", es: "las aceras" },
      { it: "to climb", es: "subir, escalar" },
      { it: "the lid", es: "la tapa" },
      { it: "polite", es: "educado / educada" },
    ],
    questions: [
      { q: "¿Cómo son los robots, según la noticia?", options: ["Big and fast", "Knee-high, white and very polite", "Blue and noisy", "Slow and angry"], answer: 1, why: "«The robots are knee-high, white and very polite.»" },
      { q: "¿Cuántas entregas completaron el mes pasado?", options: ["Ninety", "Nine thousand", "Ninety thousand", "Nine hundred"], answer: 2, why: "«Last month, they completed ninety thousand deliveries.»" },
      { q: "¿Qué demuestra la anécdota de Emma Walsh bajo la lluvia?", options: ["Robots hate rain", "The robots wait patiently and work in bad weather", "Students never eat", "The library sells food"], answer: 1, why: "«My robot waited outside the library in the rain… A hero!»" },
      { q: "¿Cuál es el siguiente paso del servicio?", options: ["Bigger robots for supermarkets and night deliveries", "Robots for other cities only", "Flying robots", "No changes"], answer: 0, why: "«Bigger robots are going to carry food from supermarkets, and the city is going to study night deliveries.»" },
    ],
    discuss: [
      { it: "Would you trust a robot with your food? Why or why not?", es: "¿Confiarías tu comida a un robot? ¿Por qué sí o no?" },
      { it: "Which jobs are safe from robots? Which ones are not?", es: "¿Qué trabajos están a salvo de los robots? ¿Cuáles no?" },
    ],
  },

  /* ═══ A2 · 12 — Sports ═══ */
  {
    id: "en-news-a2-12", cat: "sport", level: "A2", place: "Honolulu", minutes: 3,
    title: "In Honolulu, the ocean is the gym",
    titleEs: "En Honolulú, el océano es el gimnasio",
    lead: {
      it: "Every evening, long canoes leave Waikiki Beach in Honolulu. Teenagers are paddling them the same way their grandparents did — with six paddles and one heartbeat.",
      es: "Cada tarde, largas canoas salen de la playa de Waikiki, en Honolulú. Unos adolescentes las reman igual que sus abuelos: con seis remos y un solo latido.",
    },
    paragraphs: [
      { it: "Outrigger canoeing is the official team sport of Hawaii, and clubs are training kids after school. A canoe carries six paddlers. When all the paddles move together, the boat flies over the waves.",
      es: "El remo en canoa con flotador es el deporte de equipo oficial de Hawái, y los clubes están entrenando a los chicos después del colegio. Una canoa lleva seis remeros. Cuando todos los remos se mueven juntos, el barco vuela sobre las olas." },
      { it: "The junior team of the Waikiki club started with eight members three years ago. Now forty teenagers are racing every weekend. Last month, they won the regional championship for the first time.",
      es: "El equipo juvenil del club de Waikiki empezó con ocho miembros hace tres años. Ahora cuarenta adolescentes están compitiendo cada fin de semana. El mes pasado ganaron el campeonato regional por primera vez." },
      { it: "«The ocean teaches respect,» says coach Daniel Baker. «You cannot cheat the waves.» His athletes arrive with homework and leave with salt in their hair. Fifteen-year-old Sophia Reed is dreaming of the Olympics.",
      es: "«El océano enseña respeto», dice el entrenador Daniel Baker. «No puedes hacer trampa con las olas.» Sus atletas llegan con la tarea y se van con sal en el pelo. Sophia Reed, de quince años, está soñando con los Juegos Olímpicos." },
      { it: "The club is going to buy two new canoes with the prize money, and older members are going to teach a free class for beginners this summer. The sunset schedule stays: five in the afternoon, every day.",
      es: "El club va a comprar dos canoas nuevas con el dinero del premio, y los miembros mayores van a dar una clase gratis para principiantes este verano. El horario al atardecer se mantiene: las cinco de la tarde, todos los días." },
    ],
    words: [
      { it: "the canoe / the canoes", es: "la canoa / las canoas" },
      { it: "the paddle / the paddles", es: "el remo / los remos" },
      { it: "the coach", es: "el entrenador / la entrenadora" },
      { it: "the wave / the waves", es: "la ola / las olas" },
      { it: "the team", es: "el equipo" },
      { it: "the prize", es: "el premio" },
    ],
    questions: [
      { q: "¿Cuántos remeros lleva una canoa?", options: ["Two", "Four", "Six", "Twelve"], answer: 2, why: "«A canoe carries six paddlers.»" },
      { q: "¿Cuándo y con cuántos miembros empezó el equipo juvenil?", options: ["Three years ago with eight members", "Ten years ago with forty members", "Last month with six members", "In 1892 with twelve members"], answer: 0, why: "«The junior team of the Waikiki club started with eight members three years ago.»" },
      { q: "¿Qué enseña el océano, según el entrenador?", options: ["To swim fast", "Respect", "To cheat the waves", "To rest"], answer: 1, why: "«The ocean teaches respect… You cannot cheat the waves.»" },
      { q: "¿Qué van a hacer con el dinero del premio?", options: ["Buy a gym", "Travel to California", "Pay for the homework", "Buy two new canoes and teach a free class"], answer: 3, why: "«The club is going to buy two new canoes with the prize money… a free class for beginners.»" },
    ],
    discuss: [
      { it: "Is there a traditional sport in your country? Do you practice it?", es: "¿Hay algún deporte tradicional en tu país? ¿Lo practicas?" },
      { it: "Team sports or individual sports: which teach more about life? Why?", es: "¿Deportes de equipo o individuales? ¿Cuáles enseñan más sobre la vida? ¿Por qué?" },
    ],
  },

  /* ═══ A2 · 13 — Science ═══ */
  {
    id: "en-news-a2-13", cat: "scienza", level: "A2", place: "Tucson", minutes: 3,
    title: "Tucson teenagers run a real telescope",
    titleEs: "Adolescentes de Tucson manejan un telescopio de verdad",
    lead: {
      it: "Tucson, Arizona, has clear skies three hundred nights a year. A high school club is putting that sky in teenage hands — with surprising results.",
      es: "Tucson, Arizona, tiene cielos despejados trescientas noches al año. Un club de secundaria está poniendo ese cielo en manos adolescentes, con resultados sorprendentes.",
    },
    paragraphs: [
      { it: "The students of the SkyWatch club are controlling a professional telescope on Mount Lemmon. They take photos of planets, galaxies and passing asteroids during their astronomy class.",
      es: "Los estudiantes del club SkyWatch están controlando un telescopio profesional en el monte Lemmon. Toman fotos de planetas, galaxias y asteroides que pasan durante su clase de astronomía." },
      { it: "Last spring, the group photographed a new comet before many observatories did. The news traveled around the world. «We screamed for a minute, then we checked the data twice,» says seventeen-year-old Marcus Lee.",
      es: "La primavera pasada, el grupo fotografió un cometa nuevo antes que muchos observatorios. La noticia dio la vuelta al mundo. «Gritamos un minuto y después revisamos los datos dos veces», dice Marcus Lee, de diecisiete años." },
      { it: "Astronomy is part of the culture in Tucson. The city protects its dark sky with special streetlights, because big telescopes need darkness the way hospitals need silence.",
      es: "La astronomía es parte de la cultura de Tucson. La ciudad protege su cielo oscuro con alumbrado público especial, porque los grandes telescopios necesitan oscuridad como los hospitales necesitan silencio." },
      { it: "The club is growing fast. Next semester, twenty more schools are going to join, and the team is going to publish a small book of the students' photos. Some of those young eyes are going professional.",
      es: "El club está creciendo rápido. El próximo semestre van a sumarse veinte escuelas más, y el equipo va a publicar un pequeño libro con las fotos de los estudiantes. Algunos de esos ojos jóvenes se van a hacer profesionales." },
    ],
    words: [
      { it: "the telescope", es: "el telescopio" },
      { it: "the comet", es: "el cometa" },
      { it: "the asteroids", es: "los asteroides" },
      { it: "the photos", es: "las fotos" },
      { it: "the darkness", es: "la oscuridad" },
      { it: "the streetlights", es: "el alumbrado público, las farolas" },
    ],
    questions: [
      { q: "¿Qué están controlando los estudiantes en el monte Lemmon?", options: ["A rocket station", "A professional telescope", "A weather balloon", "A radio station"], answer: 1, why: "«The students of the SkyWatch club are controlling a professional telescope on Mount Lemmon.»" },
      { q: "¿Qué lograron fotografiar la primavera pasada?", options: ["A new planet", "A UFO", "A new comet", "The moon"], answer: 2, why: "«Last spring, the group photographed a new comet before many observatories did.»" },
      { q: "¿Por qué protege Tucson su cielo oscuro?", options: ["Because big telescopes need darkness", "Because tourists like stars", "Because it saves batteries", "Because the sun is dangerous"], answer: 0, why: "«Big telescopes need darkness the way hospitals need silence.»" },
      { q: "¿Qué va a publicar el equipo el próximo semestre?", options: ["A newspaper", "A small book of the students' photos", "A map of Tucson", "A video game"], answer: 1, why: "«The team is going to publish a small book of the students' photos.»" },
    ],
    discuss: [
      { it: "Can you see many stars from your home? Why or why not?", es: "¿Puedes ver muchas estrellas desde tu casa? ¿Por qué sí o no?" },
      { it: "Would you like to work in astronomy one day? What would you study?", es: "¿Te gustaría trabajar algún día en astronomía? ¿Qué estudiarías?" },
    ],
  },

  /* ═══ A2 · 14 — Environment ═══ */
  {
    id: "en-news-a2-14", cat: "ambiente", level: "A2", place: "Baltimore", minutes: 3,
    title: "Baltimore grows oysters to clean its bay",
    titleEs: "Baltimore cultiva ostras para limpiar su bahía",
    lead: {
      it: "One oyster can filter two hundred liters of water a day. In Baltimore, thousands of citizens are using this superpower to save their harbor.",
      es: "Una ostra puede filtrar doscientos litros de agua al día. En Baltimore, miles de ciudadanos están usando ese superpoder para salvar su puerto.",
    },
    paragraphs: [
      { it: "The Chesapeake Bay was famous for its oysters, but pollution and overfishing destroyed most of them during the last century. The water turned cloudy, and many fish left.",
      es: "La bahía de Chesapeake era famosa por sus ostras, pero la contaminación y la pesca excesiva destruyeron la mayoría durante el último siglo. El agua se volvió turbia y muchos peces se fueron." },
      { it: "Now Baltimore is fighting back with oyster gardeners. Families, schools and churches raise baby oysters in cages under their docks. One adult oyster can filter two hundred liters of water a day.",
      es: "Ahora Baltimore está contraatacando con «jardineros de ostras». Familias, escuelas e iglesias crían ostras bebé en jaulas bajo sus muelles. Una ostra adulta puede filtrar doscientos litros de agua al día." },
      { it: "The babies grow for a year, and then volunteers plant them in the bay. Last year, the program planted five million oysters. The water near the reefs is clearer now, and young crabs and fish are returning.",
      es: "Las crías crecen durante un año y luego los voluntarios las plantan en la bahía. El año pasado, el programa plantó cinco millones de ostras. El agua cerca de los arrecifes está más clara ahora, y los cangrejos y peces jóvenes están volviendo." },
      { it: "«The bay is telling us something,» says marine biologist Laura Hughes. This fall, the city is going to add two hundred new cages. The goal for 2030 is ten billion oysters.",
      es: "«La bahía nos está diciendo algo», dice la bióloga marina Laura Hughes. Este otoño, la ciudad va a añadir doscientas jaulas nuevas. La meta para 2030 son diez mil millones de ostras." },
    ],
    words: [
      { it: "the oyster / the oysters", es: "la ostra / las ostras" },
      { it: "the bay", es: "la bahía" },
      { it: "the oyster gardeners", es: "los «jardineros de ostras»" },
      { it: "to plant", es: "plantar" },
      { it: "the cages", es: "las jaulas" },
      { it: "cloudy", es: "turbio" },
    ],
    questions: [
      { q: "¿Cuánta agua puede filtrar una ostra adulta al día?", options: ["Twenty liters", "Two hundred liters", "Two thousand liters", "Two liters"], answer: 1, why: "«One adult oyster can filter two hundred liters of water a day.»" },
      { q: "¿Dónde crían las familias las ostras bebé?", options: ["In their kitchens", "In aquariums", "In cages under their docks", "In supermarkets"], answer: 2, why: "«Families, schools and churches raise baby oysters in cages under their docks.»" },
      { q: "¿Qué resultados se ven cerca de los arrecifes?", options: ["The water is warmer", "Nothing changed", "More pollution arrived", "The water is clearer and young crabs and fish are returning"], answer: 3, why: "«The water near the reefs is clearer now, and young crabs and fish are returning.»" },
      { q: "¿Cuál es la meta para 2030?", options: ["Two hundred cages", "Five million oysters", "Ten billion oysters", "A new aquarium"], answer: 2, why: "«The goal for 2030 is ten billion oysters.»" },
    ],
    discuss: [
      { it: "Is the water in your city clean? What would you change first?", es: "¿Es limpia el agua de tu ciudad? ¿Qué cambiarías primero?" },
      { it: "What saves a river faster: small daily actions or big laws?", es: "¿Qué salva un río más rápido: pequeñas acciones diarias o grandes leyes?" },
    ],
  },

  /* ═══ A2 · 15 — Culture ═══ */
  {
    id: "en-news-a2-15", cat: "cultura", level: "A2", place: "Memphis", minutes: 3,
    title: "Memphis teenagers spend the summer with soul",
    titleEs: "Adolescentes de Memphis pasan el verano con el soul",
    lead: {
      it: "In Memphis, Tennessee, one summer camp has no canoes and no tents. It has microphones, horns and history: teenagers are learning soul music in the city where it was born.",
      es: "En Memphis, Tennessee, un campamento de verano no tiene canoas ni tiendas de campaña. Tiene micrófonos, trompetas e historia: unos adolescentes están aprendiendo música soul en la ciudad donde nació.",
    },
    paragraphs: [
      { it: "Memphis gave the world soul music in the 1960s. Songs were recorded here in small studios, and whole neighborhoods danced. Twenty years ago, many of the old studios closed one by one.",
      es: "Memphis le dio al mundo la música soul en los años sesenta. Aquí se grababan las canciones en estudios pequeños, y los barrios enteros bailaban. Hace veinte años, muchos de los viejos estudios cerraron uno tras otro." },
      { it: "The Riverside Soul Camp opened in an old theater four years ago. This summer, sixty teenagers are studying voice, guitar, bass and drums from Monday to Friday. The teachers are working musicians.",
      es: "El Riverside Soul Camp abrió en un teatro viejo hace cuatro años. Este verano, sesenta adolescentes están estudiando canto, guitarra, bajo y batería de lunes a viernes. Los profesores son músicos en activo." },
      { it: "Last weekend, the students gave their first concert. Two hundred families clapped and cried a little. «Soul is not only music,» says vocal coach Angela Price. «It is telling your story with power.»",
      es: "El fin de semana pasado, los estudiantes dieron su primer concierto. Doscientas familias aplaudieron y lloraron un poco. «El soul no es solo música», dice la coach vocal Angela Price. «Es contar tu historia con fuerza.»" },
      { it: "Next month, the camp is going to record the students' first album in a professional studio. Who knows? Maybe one voice from Memphis is going to travel around the world again.",
      es: "El mes próximo, el campamento va a grabar el primer disco de los estudiantes en un estudio profesional. ¿Quién sabe? Quizá una voz de Memphis vuelva a viajar por el mundo entero." },
    ],
    words: [
      { it: "soul / soul music", es: "el soul / la música soul" },
      { it: "the camp", es: "el campamento" },
      { it: "the studio / the studios", es: "el estudio / los estudios (de grabación)" },
      { it: "the concert", es: "el concierto" },
      { it: "the voice", es: "la voz" },
      { it: "to record", es: "grabar" },
    ],
    questions: [
      { q: "¿Qué pasó con muchos de los viejos estudios hace veinte años?", options: ["They became schools", "They burned", "They moved to Nashville", "They closed one by one"], answer: 3, why: "«Twenty years ago, many of the old studios closed one by one.»" },
      { q: "¿Qué están estudiando los adolescentes este verano?", options: ["Voice, guitar, bass and drums", "Only singing", "Only dancing", "Cooking and music"], answer: 0, why: "«Sixty teenagers are studying voice, guitar, bass and drums from Monday to Friday.»" },
      { q: "¿Cómo reaccionaron las familias en el primer concierto?", options: ["They left early", "They clapped and cried a little", "They were silent", "They complained"], answer: 1, why: "«Two hundred families clapped and cried a little.»" },
      { q: "¿Qué va a hacer el campamento el mes próximo?", options: ["Go on vacation", "Build a new theater", "Record the students' first album", "Close the camp"], answer: 2, why: "«Next month, the camp is going to record the students' first album in a professional studio.»" },
    ],
    discuss: [
      { it: "What music was born in your city or country? Tell us about it.", es: "¿Qué música nació en tu ciudad o país? Cuéntanosla." },
      { it: "Is it important for teenagers to learn the music of the past? Why?", es: "¿Es importante que los adolescentes aprendan la música del pasado? ¿Por qué?" },
    ],
  },
];
