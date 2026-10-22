/* ── EN · Notizie A1 · batch B (v9.39) ───────────────────────────────
   American English news adapted to A1, Voice of America Learning
   English method. 100% original didactic content. Body: 4 short
   paragraphs, 70-95 words, present simple only. Fields `.it` =
   English (study language), `.es` = Spanish. Ids en-news-a1-04…15. */

import type { NewsItem } from "../../news";

export const EN_NEWS_A1B: NewsItem[] = [

  /* ═══ A1 · 4 — Technology ═══ */
  {
    id: "en-news-a1-04", cat: "tecnologia", level: "A1", place: "Seattle", minutes: 2,
    title: "A robot makes your coffee in Seattle",
    titleEs: "Un robot prepara tu café en Seattle",
    lead: {
      it: "A small coffee shop in Seattle has a new worker. It has two arms, one screen, and it never sleeps.",
      es: "Una pequeña cafetería de Seattle tiene un nuevo trabajador. Tiene dos brazos, una pantalla y nunca duerme.",
    },
    paragraphs: [
      { it: "Customers order on a screen. The robot arm takes a cup, adds the coffee, and closes the lid. The coffee is ready in ninety seconds.",
      es: "Los clientes piden en una pantalla. El brazo del robot toma una taza, añade el café y cierra la tapa. El café está listo en noventa segundos." },
      { it: "The owner says the robot is fast and clean. It does not need a break. It works all day.",
      es: "El dueño dice que el robot es rápido y limpio. No necesita descanso. Trabaja el día entero." },
      { it: "Engineer Katie Miller tests the machine every morning. «The robot does not smile. But the coffee is always good,» she says.",
      es: "La ingeniera Katie Miller prueba la máquina cada mañana. «El robot no sonríe. Pero el café siempre está bueno», dice." },
      { it: "Not everyone is happy. Some people prefer a human face with their coffee. The owner smiles: «The robot makes the coffee. A person gives you the smile.»",
      es: "No todas las personas están contentas. Algunas prefieren una cara humana con su café. El dueño sonríe: «El robot hace el café. Una persona te da la sonrisa.»" },
    ],
    words: [
      { it: "the robot", es: "el robot" },
      { it: "the screen", es: "la pantalla" },
      { it: "the cup", es: "la taza", note: "para bebidas calientes; una copa es a glass" },
      { it: "the owner", es: "el dueño / la dueña" },
      { it: "fast", es: "rápido" },
      { it: "to smile", es: "sonreír" },
    ],
    questions: [
      { q: "¿Dónde pide el café el cliente?", options: ["On a screen", "On the phone", "At the table", "In a shop"], answer: 0, why: "«Customers order on a screen»: piden en una pantalla." },
      { q: "¿Cuánto tarda el robot en preparar el café?", options: ["Ten minutes", "One hour", "Ninety seconds", "One day"], answer: 2, why: "«The coffee is ready in ninety seconds.»" },
      { q: "¿Por qué dice el dueño que el robot es bueno?", options: ["It talks with customers", "It is fast and does not need a break", "It is very cheap", "It makes tea"], answer: 1, why: "«The robot is fast and clean. It does not need a break.»" },
      { q: "Según la última cita, ¿qué da la persona que el robot no da?", options: ["The coffee", "The cup", "The money", "The smile"], answer: 3, why: "«The robot makes the coffee. A person gives you the smile.»" },
    ],
    discuss: [
      { it: "Do you like machines in shops, or do you prefer people? Why?", es: "¿Te gustan las máquinas en las tiendas o prefieres a las personas? ¿Por qué?" },
      { it: "What jobs are easy for a robot? What jobs are difficult?", es: "¿Qué trabajos son fáciles para un robot? ¿Cuáles son difíciles?" },
    ],
  },

  /* ═══ A1 · 5 — Culture ═══ */
  {
    id: "en-news-a1-05", cat: "cultura", level: "A1", place: "New Orleans", minutes: 2,
    title: "Kids learn jazz in New Orleans",
    titleEs: "Los niños aprenden jazz en Nueva Orleans",
    lead: {
      it: "In New Orleans, music is in the streets, in the schools and in the air. Now a free program teaches jazz to kids after class.",
      es: "En Nueva Orleans, la música está en las calles, en las escuelas y en el aire. Ahora un programa gratis enseña jazz a los niños después de clase.",
    },
    paragraphs: [
      { it: "Every Tuesday and Thursday, thirty students meet in a small hall near the river. They play trumpet, drums and trombone.",
      es: "Cada martes y jueves, treinta estudiantes se reúnen en un pequeño salón cerca del río. Tocan la trompeta, la batería y el trombón." },
      { it: "The teachers are local musicians. They play in the French Quarter at night. In the afternoon, they teach the children the old songs.",
      es: "Los maestros son músicos locales. Tocan en el Barrio Francés por la noche. Por la tarde, enseñan a los niños las canciones antiguas." },
      { it: "«Jazz is a conversation,» says teacher Betty Carter. «First you listen. Then you answer with your instrument.»",
      es: "«El jazz es una conversación», dice la maestra Betty Carter. «Primero escuchas. Luego respondes con tu instrumento.»" },
      { it: "The program is free. The students only need one thing: they must practice ten minutes every day. Next spring, the young band plays its first concert in the park.",
      es: "El programa es gratis. Los estudiantes solo necesitan una cosa: practicar diez minutos cada día. La próxima primavera, la banda joven toca su primer concierto en el parque." },
    ],
    words: [
      { it: "jazz", es: "el jazz" },
      { it: "the trumpet", es: "la trompeta" },
      { it: "the drums", es: "la batería" },
      { it: "the band", es: "la banda" },
      { it: "the concert", es: "el concierto" },
      { it: "free", es: "gratis" },
    ],
    questions: [
      { q: "¿Cuándo se reúnen los estudiantes?", options: ["Every Tuesday and Thursday", "Only on Mondays", "Every night", "Once a year"], answer: 0, why: "«Every Tuesday and Thursday, thirty students meet in a small hall near the river.»" },
      { q: "¿Quiénes son los maestros?", options: ["Famous actors", "The students' parents", "Local musicians", "Doctors"], answer: 2, why: "«The teachers are local musicians. They play in the French Quarter at night.»" },
      { q: "¿Qué deben hacer los estudiantes cada día?", options: ["Play in the French Quarter", "Practice ten minutes", "Buy a new trumpet", "Sing at night"], answer: 1, why: "«They must practice ten minutes every day.»" },
      { q: "¿Qué hará la banda joven la próxima primavera?", options: ["Travel to Europe", "Stop the program", "Record a movie", "Play its first concert in the park"], answer: 3, why: "«Next spring, the young band plays its first concert in the park.»" },
    ],
    discuss: [
      { it: "Do you play an instrument? Which instrument do you want to learn?", es: "¿Tocas algún instrumento? ¿Cuál quieres aprender?" },
      { it: "«Jazz is a conversation»: what happens in a conversation without listening?", es: "«El jazz es una conversación»: ¿qué pasa en una conversación sin escuchar?" },
    ],
  },

  /* ═══ A1 · 6 — History ═══ */
  {
    id: "en-news-a1-06", cat: "storia", level: "A1", place: "St. Louis", minutes: 2,
    title: "The Gateway Arch: a door to the West",
    titleEs: "La Puerta del Oeste: el Arco de San Luis",
    lead: {
      it: "A silver arch stands next to the Mississippi River in Saint Louis. It is 192 meters tall, and it tells the story of the American West.",
      es: "Un arco plateado se alza junto al río Misisipi en San Luis. Mide 192 metros de alto y cuenta la historia del Oeste americano.",
    },
    paragraphs: [
      { it: "The Gateway Arch is a monument in the shape of a silver rainbow. People call it «the Gateway to the West».",
      es: "La Gateway Arch es un monumento con forma de arcoíris plateado. La gente la llama «la Puerta al Oeste»." },
      { it: "In the nineteenth century, pioneers travel west from Saint Louis. They go on boats, on horses and on foot. This is the last city before the long trip.",
      es: "En el siglo XIX, los pioneros viajan al oeste desde San Luis. Van en barco, a caballo y a pie. Esta es la última ciudad antes del largo viaje." },
      { it: "Today, visitors ride a small tram to the top. On a clear day, they see thirty kilometers in every direction.",
      es: "Hoy, los visitantes suben en un pequeño tranvía hasta la cima. En un día despejado se ven treinta kilómetros en todas direcciones." },
      { it: "Park ranger Tom Baker works there. «This arch is a door between the East and the West,» he says. «And it is always open.»",
      es: "El guarda del parque Tom Baker trabaja allí. «Este arco es una puerta entre el Este y el Oeste», dice. «Y siempre está abierta.»" },
    ],
    words: [
      { it: "the arch", es: "el arco" },
      { it: "the monument", es: "el monumento" },
      { it: "the pioneer / the pioneers", es: "el pionero / los pioneros" },
      { it: "the tram", es: "el tranvía (que sube al arco)" },
      { it: "the top", es: "la cima, la parte de arriba" },
      { it: "always", es: "siempre" },
    ],
    questions: [
      { q: "¿Qué forma tiene el Arco?", options: ["A square", "A silver rainbow", "A circle", "A star"], answer: 1, why: "«The Gateway Arch is a monument in the shape of a silver rainbow.»" },
      { q: "¿Por qué llaman a la ciudad «la Puerta al Oeste»?", options: ["Because the pioneers travel west from this city", "Because it is in California", "Because the arch is golden", "Because there are no roads there"], answer: 0, why: "«Pioneers travel west from Saint Louis… the last city before the long trip.»" },
      { q: "¿Cómo suben los visitantes a la cima?", options: ["On foot", "By elevator", "By tram", "By helicopter"], answer: 2, why: "«Visitors ride a small tram to the top.»" },
      { q: "¿Qué dice el guarda del parque sobre el arco?", options: ["It is closed in winter", "It is a bridge", "It is a church", "It is a door always open"], answer: 3, why: "«This arch is a door between the East and the West… and it is always open.»" },
    ],
    discuss: [
      { it: "Is there a famous monument in your country? What does it remember?", es: "¿Hay un monumento famoso en tu país? ¿Qué recuerda?" },
      { it: "Do you like views from high places, or do you prefer the ground? Why?", es: "¿Te gustan las vistas desde lo alto o prefieres el suelo? ¿Por qué?" },
    ],
  },

  /* ═══ A1 · 7 — Economy ═══ */
  {
    id: "en-news-a1-07", cat: "economia", level: "A1", place: "Austin", minutes: 2,
    title: "Food trucks change lunch in Austin",
    titleEs: "Los camiones de comida cambian el almuerzo en Austin",
    lead: {
      it: "In Austin, lunch on the street is an art. The city has more than one thousand food trucks, and new ones arrive every month.",
      es: "En Austin, almorzar en la calle es un arte. La ciudad tiene más de mil camiones de comida y llegan nuevos cada mes.",
    },
    paragraphs: [
      { it: "A food truck is a small kitchen on wheels. The menu is short: tacos, burgers or noodles.",
      es: "Un camión de comida es una pequeña cocina sobre ruedas. El menú es corto: tacos, hamburguesas o fideos." },
      { it: "For many cooks, the truck is the first step. A restaurant costs a lot of money. A truck costs less, so young people start there.",
      es: "Para muchos cocineros, el camión es el primer paso. Un restaurante cuesta mucho dinero. Un camión cuesta menos, así que los jóvenes empiezan ahí." },
      { it: "«My dream is a restaurant one day,» says cook Maggie Wilson. «But first, the truck. Here I learn, I make mistakes, and I smile a lot.»",
      es: "«Mi sueño es un restaurante algún día», dice la cocinera Maggie Wilson. «Pero primero, el camión. Aquí aprendo, me equivoco y sonrío mucho.»" },
      { it: "Office workers love the trucks. Lunch is fast, cheap and different every day. «The city is my restaurant,» says one customer.",
      es: "Los oficinistas aman los camiones. El almuerzo es rápido, barato y diferente cada día. «La ciudad es mi restaurante», dice un cliente." },
    ],
    words: [
      { it: "the food truck", es: "el camión de comida" },
      { it: "the menu", es: "el menú" },
      { it: "the cook", es: "el cocinero / la cocinera" },
      { it: "cheap", es: "barato" },
      { it: "the customer", es: "el cliente / la clienta" },
      { it: "the dream", es: "el sueño" },
    ],
    questions: [
      { q: "¿Qué es un food truck?", options: ["A small kitchen on wheels", "A big restaurant", "A supermarket", "A school bus"], answer: 0, why: "«A food truck is a small kitchen on wheels.»" },
      { q: "¿Por qué empiezan los jóvenes con un camión?", options: ["Because trucks are very slow", "Because a restaurant costs a lot of money", "Because they hate cooking", "Because there are no cooks in the city"], answer: 1, why: "«A restaurant costs a lot of money. A truck costs less.»" },
      { q: "¿Cuál es el sueño de Maggie Wilson?", options: ["A new truck", "A long vacation", "A restaurant one day", "A sandwich shop"], answer: 2, why: "«My dream is a restaurant one day,» dice la cocinera." },
      { q: "¿Cómo es el almuerzo en los camiones, según la noticia?", options: ["Slow and expensive", "Always the same", "Only for tourists", "Fast, cheap and different every day"], answer: 3, why: "«Lunch is fast, cheap and different every day.»" },
    ],
    discuss: [
      { it: "Is there street food in your city? What is your favorite?", es: "¿Hay comida callejera en tu ciudad? ¿Cuál es tu favorita?" },
      { it: "You have a food truck: what food do you sell, and where?", es: "Tienes un camión de comida: ¿qué vendes y dónde?" },
    ],
  },

  /* ═══ A1 · 8 — Sports ═══ */
  {
    id: "en-news-a1-08", cat: "sport", level: "A1", place: "Minneapolis", minutes: 2,
    title: "Free ice skating on the city lakes",
    titleEs: "Patinaje sobre hielo gratis en los lagos de la ciudad",
    lead: {
      it: "Minneapolis is cold in winter, and the city loves it. When the lakes freeze, workers prepare free ice rinks for everyone.",
      es: "Minneapolis es fría en invierno, y a la ciudad le encanta. Cuando los lagos se congelan, unos trabajadores preparan pistas de hielo gratis para todos.",
    },
    paragraphs: [
      { it: "Winter is long in Minneapolis. But the city has a plan: more free ice rinks every year. There are more than twenty places to skate.",
      es: "El invierno es largo en Minneapolis. Pero la ciudad tiene un plan: más pistas de hielo gratis cada año. Hay más de veinte lugares para patinar." },
      { it: "On the lakes, volunteers check the ice every morning. They clean the snow. They put small orange flags on the dangerous places.",
      es: "En los lagos, los voluntarios revisan el hielo cada mañana. Limpian la nieve. Ponen pequeñas banderas naranjas en los lugares peligrosos." },
      { it: "Skates are free for children on weekends. Parents drink hot chocolate near the fire. Old people tell stories about the same lakes fifty years ago.",
      es: "Los patines son gratis para los niños los fines de semana. Los padres toman chocolate caliente junto al fuego. Los mayores cuentan historias sobre los mismos lagos de hace cincuenta años." },
      { it: "Coach Amy Clark teaches beginners. «Ice is honest,» she says. «You fall, you stand up, you smile. Then you try again.»",
      es: "La entrenadora Amy Clark enseña a los principiantes. «El hielo es honesto», dice. «Te caes, te levantas, sonríes. Y lo intentas de nuevo.»" },
    ],
    words: [
      { it: "the ice", es: "el hielo" },
      { it: "the lake / the lakes", es: "el lago / los lagos" },
      { it: "the volunteer / the volunteers", es: "el voluntario / los voluntarios" },
      { it: "the snow", es: "la nieve" },
      { it: "free", es: "gratis" },
      { it: "to fall", es: "caerse", note: "verbo irregular: fall – fell – fallen" },
    ],
    questions: [
      { q: "¿Cuántos lugares para patinar hay en la ciudad?", options: ["Only one", "Two hundred", "More than twenty", "None"], answer: 2, why: "«There are more than twenty places to skate.»" },
      { q: "¿Qué hacen los voluntarios cada mañana?", options: ["They check the ice and clean the snow", "They sleep late", "They sell skates", "They swim in the lake"], answer: 0, why: "«Volunteers check the ice every morning. They clean the snow.»" },
      { q: "¿Qué es gratis para los niños los fines de semana?", options: ["Hot chocolate", "Skates", "Orange flags", "Ice cream"], answer: 1, why: "«Skates are free for children on weekends.»" },
      { q: "¿Qué significa que «el hielo es honesto» para la entrenadora?", options: ["The ice never breaks", "The ice is expensive", "Skating is easy for everyone", "You fall, you stand up and you try again"], answer: 3, why: "«You fall, you stand up, you smile. Then you try again.»" },
    ],
    discuss: [
      { it: "Do you like winter sports, or do you prefer the beach? Why?", es: "¿Te gustan los deportes de invierno o prefieres la playa? ¿Por qué?" },
      { it: "What do you do when you fall? Do you smile and try again?", es: "¿Qué haces cuando te caes? ¿Sonríes y lo intentas otra vez?" },
    ],
  },

  /* ═══ A1 · 9 — Health ═══ */
  {
    id: "en-news-a1-09", cat: "salute", level: "A1", place: "San Diego", minutes: 2,
    title: "Doctors want more sleep for students",
    titleEs: "Los médicos quieren más sueño para los estudiantes",
    lead: {
      it: "Teenagers in San Diego are tired, and the doctors know why: they sleep six hours, but they need nine. One school now has a new plan.",
      es: "Los adolescentes de San Diego están cansados, y los médicos saben por qué: duermen seis horas, pero necesitan nueve. Ahora una escuela tiene un nuevo plan.",
    },
    paragraphs: [
      { it: "Doctors in San Diego study teenage sleep. The results are clear: many students sleep only six hours. A teenager needs nine hours.",
      es: "Los médicos de San Diego estudian el sueño de los adolescentes. Los resultados son claros: muchos estudiantes duermen solo seis horas. Un adolescente necesita nueve horas." },
      { it: "Tired students have problems. They do not listen in class. They eat more sugar. They feel sad.",
      es: "Los estudiantes cansados tienen problemas. No escuchan en clase. Comen más azúcar. Se sienten tristes." },
      { it: "So one high school starts classes at nine, not at seven thirty. Students sleep one hour more every morning.",
      es: "Así que una escuela secundaria empieza las clases a las nueve, no a las siete y media. Los estudiantes duermen una hora más cada mañana." },
      { it: "Doctor Anna Reed works with teenagers. «Sleep is medicine,» she says. «It is free, and it is powerful.» The students agree — they say good morning now.",
      es: "La doctora Anna Reed trabaja con adolescentes. «Dormir es medicina», dice. «Es gratis y es poderosa.» Los estudiantes están de acuerdo: ahora dan los buenos días." },
    ],
    words: [
      { it: "sleep", es: "el sueño / dormir", note: "también es verbo: to sleep" },
      { it: "tired", es: "cansado / cansada" },
      { it: "the teenager", es: "el adolescente / la adolescente" },
      { it: "the high school", es: "la escuela secundaria" },
      { it: "the hour", es: "la hora" },
      { it: "powerful", es: "poderoso / poderosa" },
    ],
    questions: [
      { q: "¿Cuántas horas duermen muchos estudiantes?", options: ["Six hours", "Ten hours", "Twelve hours", "Two hours"], answer: 0, why: "«Many students sleep only six hours.»" },
      { q: "¿Cuántas horas de sueño necesita un adolescente?", options: ["Four hours", "Six hours", "Nine hours", "One hour"], answer: 2, why: "«A teenager needs nine hours.»" },
      { q: "¿Qué problemas tienen los estudiantes cansados?", options: ["They run very fast", "They do not listen, eat more sugar and feel sad", "They sleep all day", "They love homework"], answer: 1, why: "«They do not listen in class. They eat more sugar. They feel sad.»" },
      { q: "¿A qué hora empiezan las clases en esa escuela ahora?", options: ["At seven thirty", "At six in the morning", "At midnight", "At nine"], answer: 3, why: "«One high school starts classes at nine, not at seven thirty.»" },
    ],
    discuss: [
      { it: "How many hours do you sleep? Is it enough for you?", es: "¿Cuántas horas duermes? ¿Te basta?" },
      { it: "Are you a morning person or a night person? Why?", es: "¿Eres persona de mañana o de noche? ¿Por qué?" },
    ],
  },

  /* ═══ A1 · 10 — Science ═══ */
  {
    id: "en-news-a1-10", cat: "scienza", level: "A1", place: "Houston", minutes: 2,
    title: "Students train like astronauts in Houston",
    titleEs: "Estudiantes se entrenan como astronautas en Houston",
    lead: {
      it: "In Houston, children put on blue suits and train like astronauts for one day. It is a space camp, and the mission is fun.",
      es: "En Houston, los niños se ponen trajes azules y se entrenan como astronautas durante un día. Es un campamento espacial, y la misión es diversión.",
    },
    paragraphs: [
      { it: "Houston is the city of space flight. Near the space center, there is a camp for young astronauts.",
      es: "Houston es la ciudad de los vuelos espaciales. Cerca del centro espacial hay un campamento para astronautas jóvenes." },
      { it: "The missions are real work. Students build a small robot. They test a rocket with water. They sit in a special chair and float like in space.",
      es: "Las misiones son trabajo real. Los estudiantes construyen un pequeño robot. Prueban un cohete con agua. Se sientan en una silla especial y flotan como en el espacio." },
      { it: "«Water is our fuel today,» says instructor Ben Hayes with a smile. «Real rockets need more. But the science is the same.»",
      es: "«El agua es nuestro combustible hoy», dice el instructor Ben Hayes con una sonrisa. «Los cohetes de verdad necesitan más. Pero la ciencia es la misma.»" },
      { it: "At the end of the day, there is a graduation ceremony. Every student gets a certificate and one lesson for life: science needs teamwork.",
      es: "Al final del día hay una ceremonia de graduación. Cada estudiante recibe un certificado y una lección para la vida: la ciencia necesita trabajo en equipo." },
    ],
    words: [
      { it: "the astronaut / the astronauts", es: "el astronauta / los astronautas" },
      { it: "space", es: "el espacio" },
      { it: "the camp", es: "el campamento" },
      { it: "the rocket", es: "el cohete" },
      { it: "to build", es: "construir" },
      { it: "the certificate", es: "el certificado" },
    ],
    questions: [
      { q: "¿Qué construyen los estudiantes?", options: ["A small robot", "A house", "A car", "A bridge"], answer: 0, why: "«Students build a small robot.»" },
      { q: "¿Con qué prueban el cohete?", options: ["With fire", "With water", "With air", "With oil"], answer: 1, why: "«They test a rocket with water.»" },
      { q: "¿Qué dice el instructor sobre la ciencia?", options: ["Science is boring", "Water is dangerous", "The science is the same", "Rockets are cheap"], answer: 2, why: "«Real rockets need more. But the science is the same.»" },
      { q: "¿Qué lección llevan los estudiantes a casa?", options: ["Astronauts sleep all day", "Space is very near", "Only strong men can be astronauts", "Science needs teamwork"], answer: 3, why: "«Science needs teamwork»: la última lección del día." },
    ],
    discuss: [
      { it: "Do you want to travel to space one day? Why or why not?", es: "¿Quieres viajar al espacio algún día? ¿Por qué sí o no?" },
      { it: "What is more important in a team: one star or good teamwork?", es: "¿Qué es más importante en un equipo: una estrella o un buen trabajo en equipo?" },
    ],
  },

  /* ═══ A1 · 11 — Environment ═══ */
  {
    id: "en-news-a1-11", cat: "ambiente", level: "A1", place: "Miami", minutes: 2,
    title: "Volunteers clean the beach in Miami",
    titleEs: "Voluntarios limpian la playa en Miami",
    lead: {
      it: "On Sunday morning, five hundred people meet on a Miami beach with gloves and bags. Their mission: one hour, one beach, zero trash.",
      es: "El domingo por la mañana, quinientas personas se reúnen en una playa de Miami con guantes y bolsas. Su misión: una hora, una playa, cero basura.",
    },
    paragraphs: [
      { it: "Every month, volunteers meet at the beach. They work for one hour. In that hour, they collect three tons of plastic, bottles and old shoes.",
      es: "Cada mes, los voluntarios se reúnen en la playa. Trabajan durante una hora. En esa hora recolectan tres toneladas de plástico, botellas y zapatos viejos." },
      { it: "The trash is dangerous for the ocean. Fish eat small pieces of plastic. Sea turtles eat plastic bags, because they look like jellyfish.",
      es: "La basura es peligrosa para el océano. Los peces comen trozos pequeños de plástico. Las tortugas marinas comen bolsas de plástico porque parecen medusas." },
      { it: "«The beach is our home,» says volunteer Sara Brooks. She comes every month with her two children. «They learn to love the sea.»",
      es: "«La playa es nuestra casa», dice la voluntaria Sara Brooks. Va cada mes con sus dos hijos. «Aprenden a amar el mar.»" },
      { it: "After the cleanup, there is a small party with music and fruit. The sand is clean again. Next month: the next beach.",
      es: "Después de la limpieza hay una pequeña fiesta con música y fruta. La arena está limpia otra vez. El próximo mes: la próxima playa." },
    ],
    words: [
      { it: "the beach", es: "la playa" },
      { it: "the trash", es: "la basura", note: "inglés americano; en británico se dice rubbish" },
      { it: "the plastic", es: "el plástico" },
      { it: "the sea turtle / the sea turtles", es: "la tortuga marina / las tortugas marinas" },
      { it: "the sand", es: "la arena" },
      { it: "to clean / the cleanup", es: "limpiar / la limpieza" },
    ],
    questions: [
      { q: "¿Cuánto tiempo trabajan los voluntarios en la playa?", options: ["One day", "One hour", "Ten minutes", "One week"], answer: 1, why: "«They work for one hour.»" },
      { q: "¿Cuánta basura recolectan en una hora?", options: ["Three tons", "Three kilos", "One bottle", "Nothing"], answer: 0, why: "«They collect three tons of plastic, bottles and old shoes.»" },
      { q: "¿Por qué comen las tortugas bolsas de plástico?", options: ["Because plastic is sweet", "Because people feed them", "Because they look like jellyfish", "Because they never eat"], answer: 2, why: "«Sea turtles eat plastic bags, because they look like jellyfish.»" },
      { q: "¿Con quién va Sara Brooks a la playa?", options: ["With her teacher", "Alone", "With fifty friends", "With her two children"], answer: 3, why: "«She comes every month with her two children.»" },
    ],
    discuss: [
      { it: "Is there a beach or a park near your home? Is it clean?", es: "¿Hay una playa o un parque cerca de tu casa? ¿Está limpio?" },
      { it: "What is one easy thing you do for the planet every week?", es: "¿Qué cosa fácil haces tú por el planeta cada semana?" },
    ],
  },

  /* ═══ A1 · 12 — Culture ═══ */
  {
    id: "en-news-a1-12", cat: "cultura", level: "A1", place: "Nashville", minutes: 2,
    title: "Free music nights in Nashville",
    titleEs: "Noches de música gratis en Nashville",
    lead: {
      it: "Nashville is Music City, USA. This summer, the parks are full of songs: free concerts every weekend, from country to jazz.",
      es: "Nashville es la Ciudad de la Música de Estados Unidos. Este verano los parques están llenos de canciones: conciertos gratis cada fin de semana, del country al jazz.",
    },
    paragraphs: [
      { it: "Every summer weekend, Nashville offers free concerts in the parks. People bring chairs, blankets and food. The music starts at seven.",
      es: "Cada fin de semana de verano, Nashville ofrece conciertos gratis en los parques. La gente lleva sillas, mantas y comida. La música empieza a las siete." },
      { it: "The program has all styles: country, blues, rock and bluegrass. Local bands play, and sometimes a big star sings a song for free.",
      es: "El programa tiene todos los estilos: country, blues, rock y bluegrass. Tocan bandas locales y, a veces, una gran estrella canta una canción gratis." },
      { it: "«Music must be for everybody,» says organizer Jack Turner. «A ticket costs fifty dollars. A park costs nothing.»",
      es: "«La música debe ser para todos», dice el organizador Jack Turner. «Una entrada cuesta cincuenta dólares. Un parque no cuesta nada.»" },
      { it: "The concerts are also good for the city. Restaurants are full on concert nights. Visitors stay for the weekend, and the music plays until ten.",
      es: "Los conciertos también son buenos para la ciudad. Los restaurantes se llenan las noches de concierto. Los visitantes se quedan el fin de semana y la música suena hasta las diez." },
    ],
    words: [
      { it: "the concert", es: "el concierto" },
      { it: "the ticket", es: "la entrada" },
      { it: "free", es: "gratis" },
      { it: "the star", es: "la estrella (persona famosa)" },
      { it: "the park", es: "el parque" },
      { it: "the song", es: "la canción" },
    ],
    questions: [
      { q: "¿Qué llevan las personas a los conciertos?", options: ["Chairs, blankets and food", "Nothing", "Tables and lamps", "Tickets"], answer: 0, why: "«People bring chairs, blankets and food.»" },
      { q: "¿A qué hora empieza la música?", options: ["At ten", "At seven", "At midnight", "At noon"], answer: 1, why: "«The music starts at seven.»" },
      { q: "¿Qué dice el organizador sobre la música?", options: ["It must be expensive", "It is only for tourists", "It must be for everybody", "It is finished"], answer: 2, why: "«Music must be for everybody,» dice el organizador." },
      { q: "¿Por qué son buenos los conciertos para la ciudad?", options: ["The parks are closed", "People stay at home", "Tickets cost a lot of money", "Restaurants are full and visitors stay for the weekend"], answer: 3, why: "«Restaurants are full on concert nights. Visitors stay for the weekend.»" },
    ],
    discuss: [
      { it: "Do you listen to live music? Tell us about a good concert.", es: "¿Escuchas música en vivo? Cuéntanos un buen concierto." },
      { it: "Should culture be free for everybody? Who pays for it?", es: "¿La cultura debería ser gratis para todos? ¿Quién la paga?" },
    ],
  },

  /* ═══ A1 · 13 — Technology ═══ */
  {
    id: "en-news-a1-13", cat: "tecnologia", level: "A1", place: "San Francisco", minutes: 2,
    title: "Electric buses are quiet and clean",
    titleEs: "Los autobuses eléctricos son silenciosos y limpios",
    lead: {
      it: "San Francisco buys one hundred new electric buses. They make no noise and they make no smoke. Passengers only hear the wheels.",
      es: "San Francisco compra cien autobuses eléctricos nuevos. No hacen ruido ni humo. Los pasajeros solo oyen las ruedas.",
    },
    paragraphs: [
      { it: "The old buses are loud. The new electric buses are quiet. «I hear the birds now,» says passenger David Lee with a smile.",
      es: "Los autobuses viejos son ruidosos. Los nuevos autobuses eléctricos son silenciosos. «Ahora escucho a los pájaros», dice el pasajero David Lee con una sonrisa." },
      { it: "The buses charge their batteries at the station at night. One charge is enough for a full day on the city hills.",
      es: "Los autobuses cargan sus baterías en la estación por la noche. Una carga basta para un día completo en las colinas de la ciudad." },
      { it: "Electric buses are not cheap. But they need less repair, and they use no gas. The city saves money in ten years.",
      es: "Los autobuses eléctricos no son baratos. Pero necesitan menos reparaciones y no usan gasolina. La ciudad ahorra dinero en diez años." },
      { it: "Driver Patricia Moore loves the change. «My bus is my office,» she says. «Now my office is clean, quiet and it smells good.»",
      es: "La conductora Patricia Moore ama el cambio. «Mi autobús es mi oficina», dice. «Ahora mi oficina está limpia, es silenciosa y huele bien.»" },
    ],
    words: [
      { it: "the bus", es: "el autobús" },
      { it: "quiet", es: "silencioso / silenciosa", note: "no confundas con quite (= bastante)" },
      { it: "loud", es: "ruidoso / ruidosa" },
      { it: "the battery / the batteries", es: "la batería / las baterías" },
      { it: "to charge", es: "cargar (la batería)" },
      { it: "the driver", es: "el conductor / la conductora" },
    ],
    questions: [
      { q: "¿Qué dice el pasajero David Lee?", options: ["«I hear the birds now»", "«The buses are terrible»", "«I love gas»", "«The bus is very fast»"], answer: 0, why: "«I hear the birds now,» says passenger David Lee." },
      { q: "¿Cuándo cargan las baterías los autobuses?", options: ["In the morning at home", "Never", "At night at the station", "Every hour"], answer: 2, why: "«The buses charge their batteries at the station at night.»" },
      { q: "¿Por qué ahorra dinero la ciudad?", options: ["The buses are free", "They need less repair and use no gas", "The drivers work at night", "The tickets are very expensive"], answer: 1, why: "«They need less repair, and they use no gas.»" },
      { q: "¿Cómo llama la conductora a su autobús?", options: ["My house", "My school", "My garden", "My office"], answer: 3, why: "«My bus is my office… Now my office is clean, quiet and it smells good.»" },
    ],
    discuss: [
      { it: "How do you go to work or school: bus, car, bike or on foot?", es: "¿Cómo vas al trabajo o a clase: autobús, coche, bici o a pie?" },
      { it: "Electric vehicles: the future or an expensive dream? Why?", es: "Los vehículos eléctricos: ¿el futuro o un sueño caro? ¿Por qué?" },
    ],
  },

  /* ═══ A1 · 14 — Society ═══ */
  {
    id: "en-news-a1-14", cat: "societa", level: "A1", place: "Atlanta", minutes: 2,
    title: "A library for tools opens in Atlanta",
    titleEs: "Abre en Atlanta una biblioteca de herramientas",
    lead: {
      it: "In Atlanta, people borrow hammers and drills like books. It is a tool library: you pay a small fee once, and you share with your neighbors.",
      es: "En Atlanta, la gente toma prestados martillos y taladros como si fueran libros. Es una biblioteca de herramientas: pagas una pequeña cuota una vez y compartes con tus vecinos.",
    },
    paragraphs: [
      { it: "A new library opens in Atlanta. There are no books on the shelves. There are hammers, drills, ladders and garden tools.",
      es: "Una nueva biblioteca abre en Atlanta. No hay libros en las estanterías. Hay martillos, taladros, escaleras y herramientas de jardín." },
      { it: "Members pay twenty dollars a year. Then they borrow tools for free. There are three hundred tools for one thousand families.",
      es: "Los socios pagan veinte dólares al año. Luego toman prestadas las herramientas gratis. Hay trescientas herramientas para mil familias." },
      { it: "«Why buy a drill for one shelf?» says director Carol White. «Borrow it, use it for one hour, and bring it back.»",
      es: "«¿Por qué comprar un taladro para una estantería?», dice la directora Carol White. «Tómalo prestado, úsalo una hora y devuélvelo.»" },
      { it: "The library is also a meeting place. Neighbors talk about their projects and drink coffee. A broken chair is a new friendship here.",
      es: "La biblioteca también es un lugar de encuentro. Los vecinos hablan de sus proyectos y toman café. Aquí, una silla rota es una nueva amistad." },
    ],
    words: [
      { it: "the tool / the tools", es: "la herramienta / las herramientas" },
      { it: "the hammer / the hammers", es: "el martillo / los martillos" },
      { it: "the drill / the drills", es: "el taladro / los taladros" },
      { it: "the shelf / the shelves", es: "la estantería / las estanterías" },
      { it: "the member / the members", es: "el socio / los socios" },
      { it: "to borrow", es: "tomar prestado", note: "≠ to lend (prestar a alguien)" },
    ],
    questions: [
      { q: "¿Qué hay en las estanterías de la nueva biblioteca?", options: ["Hammers, drills, ladders and garden tools", "Only books", "Old computers", "Food and drinks"], answer: 0, why: "«There are hammers, drills, ladders and garden tools.»" },
      { q: "¿Cuánto pagan los socios al año?", options: ["One thousand dollars", "Nothing", "Twenty dollars", "Three hundred dollars"], answer: 2, why: "«Members pay twenty dollars a year.»" },
      { q: "¿Para cuántas familias hay herramientas?", options: ["Twenty families", "One thousand families", "Three families", "One hundred families"], answer: 1, why: "«There are three hundred tools for one thousand families.»" },
      { q: "¿Qué más es la biblioteca, además de un lugar de préstamo?", options: ["A school", "A bank", "A restaurant", "A meeting place"], answer: 3, why: "«The library is also a meeting place.»" },
    ],
    discuss: [
      { it: "Do you share things with your neighbors? What things?", es: "¿Compartes cosas con tus vecinos? ¿Cuáles?" },
      { it: "Tell us about a friendship that starts with a small thing.", es: "Cuenta una amistad que empiece con algo pequeño." },
    ],
  },

  /* ═══ A1 · 15 — Sports ═══ */
  {
    id: "en-news-a1-15", cat: "sport", level: "A1", place: "Detroit", minutes: 2,
    title: "A free running club in Detroit",
    titleEs: "Un club de running gratis en Detroit",
    lead: {
      it: "Every Saturday at eight, three hundred people run together along the Detroit riverfront. The club is free, the coffee is hot, and everybody is welcome.",
      es: "Cada sábado a las ocho, trescientas personas corren juntas por el paseo ribereño de Detroit. El club es gratis, el café está caliente y todos son bienvenidos.",
    },
    paragraphs: [
      { it: "The running club meets every Saturday at eight in the morning. The route is five kilometers along the river. Fast runners go first; walkers start later.",
      es: "El club de running se reúne cada sábado a las ocho de la mañana. La ruta es de cinco kilómetros junto al río. Los corredores rápidos van primero; los que caminan salen después." },
      { it: "The club has one rule: nobody runs alone. «We start together and we finish together,» says coach Marcus Reed.",
      es: "El club tiene una sola regla: nadie corre solo. «Empezamos juntos y terminamos juntos», dice el entrenador Marcus Reed." },
      { it: "After the run, there is free coffee and fruit. New members get a welcome sticker. Old members get new friends.",
      es: "Después de correr hay café y fruta gratis. Los socios nuevos reciben una pegatina de bienvenida. Los de siempre reciben amigos nuevos." },
      { it: "«Running is easy,» says member Lisa Parker. «You need shoes, a morning and people who wait for you.»",
      es: "«Correr es fácil», dice la socia Lisa Parker. «Necesitas zapatos, una mañana y gente que te espere.»" },
    ],
    words: [
      { it: "the running club", es: "el club de running / atletismo" },
      { it: "the route", es: "la ruta" },
      { it: "the runner / the runners", es: "el corredor / los corredores" },
      { it: "the rule", es: "la regla" },
      { it: "to run", es: "correr" },
      { it: "alone", es: "solo / sola (sin compañía)" },
    ],
    questions: [
      { q: "¿Cuándo se reúne el club?", options: ["Every Saturday at eight", "Every night", "Once a month", "On Mondays"], answer: 0, why: "«The running club meets every Saturday at eight in the morning.»" },
      { q: "¿Cuántos kilómetros tiene la ruta?", options: ["Ten kilometers", "Five kilometers", "One kilometer", "Fifty kilometers"], answer: 1, why: "«The route is five kilometers along the river.»" },
      { q: "¿Cuál es la única regla del club?", options: ["Run fast or go home", "Only fast runners are welcome", "Nobody runs alone", "No coffee after the run"], answer: 2, why: "«The club has one rule: nobody runs alone.»" },
      { q: "¿Qué reciben los socios nuevos?", options: ["New shoes", "Money", "A medal", "A welcome sticker"], answer: 3, why: "«New members get a welcome sticker.»" },
    ],
    discuss: [
      { it: "Do you prefer to run alone or with friends? Why?", es: "¿Prefieres correr solo o con amigos? ¿Por qué?" },
      { it: "What sport is popular in your city? Do you practice it?", es: "¿Qué deporte es popular en tu ciudad? ¿Lo practicas?" },
    ],
  },
];
