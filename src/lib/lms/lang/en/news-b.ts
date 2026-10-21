/* ── EN · Notizie B1 + B2 (v9.26) ─────────────────────────────────────
   American English news, VOA method. B1 ≈ 160-180 words, B2 ≈ 250-300.
   Fields `.it` = English (study language), `.es` = Spanish. */

import type { NewsItem } from "../../news";

export const EN_NEWS_B: NewsItem[] = [

  /* ═══ B1 · 1 — Health ═══ */
  {
    id: "en-news-b1-01", cat: "salute", level: "B1", place: "San Diego", minutes: 3,
    title: "Sunscreen: what the dermatologists now say",
    titleEs: "Protector solar: lo que dicen ahora los dermatólogos",
    lead: {
      it: "San Diego is famous for its beaches, but doctors there spend most of their week treating skin that burned on weekends. Their new advice is simpler than you think.",
      es: "San Diego es famosa por sus playas, pero los médicos de allí dedican la mayor parte de la semana a tratar pieles quemadas los fines de semana. Su nuevo consejo es más simple de lo que crees.",
    },
    paragraphs: [
      { it: "The classic advice was «stay out of the sun between eleven and three». The problem: in Southern California, that is exactly when everybody goes to the beach. So dermatologists changed the message. Instead of hiding from the sun, they now ask people to work with it.",
      es: "El consejo clásico era «no te expongas al sol entre las once y las tres». El problema: en el sur de California, ese es justo el momento en que todos van a la playa. Así que los dermatólogos cambiaron el mensaje. En vez de esconderse del sol, ahora piden a la gente que trabaje con él." },
      { it: "The new rules are three. First: sunscreen everywhere, every two hours, even on cloudy days. Second: a hat with a wide edge, because the neck burns first. Third: sunglasses, because eyes get old faster than faces.",
      es: "Las nuevas reglas son tres. Primero: protector solar en todas partes, cada dos horas, incluso en días nublados. Segundo: un sombrero de ala ancha, porque el cuello se quema primero. Tercero: gafas de sol, porque los ojos envejecen más rápido que las caras." },
      { it: "They also have news for people who trust the number on the bottle. «SPF 100» does not mean double protection. After SPF 50, the difference is small. What matters is the amount you use: most people apply a third of what they need.",
      es: "También tienen noticias para quienes confían en el número del envase. «SPF 100» no significa doble protección. A partir de SPF 50, la diferencia es pequeña. Lo que importa es la cantidad que usas: la mayoría aplica un tercio de lo necesario." },
      { it: "The doctors' final message is positive: the sun is good for you. It lifts the mood and helps the body produce vitamin D. Like everything at the beach, it only needs a little respect.",
      es: "El mensaje final de los médicos es positivo: el sol te hace bien. Sube el ánimo y ayuda al cuerpo a producir vitamina D. Como todo en la playa, solo necesita un poco de respeto." },
    ],
    words: [
      { it: "sunscreen", es: "protector solar" },
      { it: "to burn (burned)", es: "quemarse" },
      { it: "the dermatologist", es: "el dermatólogo" },
      { it: "cloudy", es: "nublado" },
      { it: "the edge (of a hat)", es: "el ala (del sombrero)" },
      { it: "to apply", es: "aplicar" },
      { it: "to lift the mood", es: "subir el ánimo" },
    ],
    questions: [
      { q: "¿Cuál era el consejo clásico y por qué falló?", options: ["«Stay out of the sun between eleven and three» — but that is when everybody goes to the beach", "«Use no sunscreen» — but people burned", "«Only swim at night» — but the sea is cold", "«Wear black clothes» — but it is not fashionable"], answer: 0, why: "«The problem: in Southern California, that is exactly when everybody goes to the beach.»" },
      { q: "¿Cuáles son las tres nuevas reglas?", options: ["Sunscreen every two hours, a wide-edge hat, sunglasses", "No beach, no sun, no summer", "Only morning swimming", "SPF 100 every minute"], answer: 0, why: "Las tres reglas: protector cada dos horas, sombrero de ala ancha y gafas de sol." },
      { q: "¿Qué dicen sobre «SPF 100»?", options: ["It means double protection", "After SPF 50 the difference is small; the amount matters", "It is illegal", "It is only for children"], answer: 1, why: "«After SPF 50, the difference is small. What matters is the amount you use.»" },
      { q: "¿Cuánta cantidad aplican la mayoría de las personas?", options: ["Triple", "A third of what they need", "The whole bottle", "Exactly enough"], answer: 1, why: "«Most people apply a third of what they need.»" },
      { q: "¿Cómo termina el mensaje de los médicos?", options: ["The sun is dangerous, avoid it", "The sun is good for you — it lifts the mood and produces vitamin D", "The sun is only for tourists", "The beach is closed"], answer: 1, why: "«The sun is good for you… it only needs a little respect.»" },
    ],
    discuss: [
      { it: "How much sun is «a little respect» in your city? Compare your habits with these rules.", es: "¿Cuánto sol es «un poco de respeto» en tu ciudad? Compara tus hábitos con estas reglas." },
      { it: "Do you read the number (SPF) or the amount when you buy sunscreen? Be honest.", es: "¿Lees el número (SPF) o la cantidad cuando compras protector solar? Sé honesto." },
    ],
  },

  /* ═══ B1 · 2 — Environment ═══ */
  {
    id: "en-news-b1-02", cat: "ambiente", level: "B1", place: "Anchorage", minutes: 3,
    title: "The salmon come home to the creek",
    titleEs: "Los salmones vuelven a casa al arroyo",
    lead: {
      it: "For forty years, a creek near Anchorage ran under a parking lot. Last summer, the salmon returned. The city calls it the cheapest environmental project in its history.",
      es: "Durante cuarenta años, un arroyo cerca de Anchorage corrió debajo de un estacionamiento. El verano pasado, el salmón regresó. La ciudad lo llama el proyecto ambiental más barato de su historia.",
    },
    paragraphs: [
      { it: "In 1983, engineers put the creek into a pipe under a shopping area. It was modern at the time: more parking, no floods. Nobody asked the fish.",
      es: "En 1983, los ingenieros metieron el arroyo en un tubo debajo de una zona comercial. Era moderno en su momento: más estacionamiento, sin inundaciones. Nadie les preguntó a los peces." },
      { it: "Salmon have a strange talent: they remember the river where they were born, and they come back to lay eggs in the exact same place. With the pipe, that memory led nowhere. Year after year, the fish waited at the entrance.",
      es: "El salmón tiene un talento extraño: recuerda el río donde nació y vuelve a poner huevos en el mismo lugar exacto. Con el tubo, ese recuerdo no llevaba a ninguna parte. Año tras año, los peces esperaban en la entrada." },
      { it: "The restoration started small: volunteers removed the pipe section by section and put natural stones back. Scientists were careful: «We don't build a creek. We only remove what was covering it.»",
      es: "La restauración empezó pequeña: voluntarios retiraron el tubo sección por sección y devolvieron piedras naturales. Los científicos fueron prudentes: «No construimos un arroyo. Solo quitamos lo que lo cubría.»" },
      { it: "Last July, the cameras recorded the first nest. The video went viral in Alaska. A local elder said the best sentence of the season: «We apologized to the fish, and they accepted.»",
      es: "El pasado julio, las cámaras grabaron el primer nido. El video se hizo viral en Alaska. Un anciano local dijo la mejor frase de la temporada: «Nos disculpamos con los peces, y ellos aceptaron.»" },
    ],
    words: [
      { it: "the creek", es: "el arroyo" },
      { it: "the pipe", es: "el tubo, la tubería" },
      { it: "to lay eggs", es: "poner huevos" },
      { it: "the restoration", es: "la restauración" },
      { it: "section by section", es: "sección por sección" },
      { it: "the nest", es: "el nido" },
    ],
    questions: [
      { q: "¿Qué pasó en 1983?", options: ["The creek was put into a pipe under a shopping area", "The salmon disappeared forever", "The city built a dam", "Volunteers removed the pipe"], answer: 0, why: "«In 1983, engineers put the creek into a pipe under a shopping area.»" },
      { q: "¿Cuál es el «extraño talento» del salmón?", options: ["It can live without water", "It remembers the river where it was born and comes back to lay eggs", "It can fly short distances", "It sleeps for years"], answer: 1, why: "«They remember the river where they were born, and they come back to lay eggs in the exact same place.»" },
      { q: "¿Cómo empezó la restauración?", options: ["With a huge investment", "Small: volunteers removed the pipe section by section", "With new pipes", "With a concrete channel"], answer: 1, why: "«The restoration started small: volunteers removed the pipe section by section.»" },
      { q: "¿Qué dijeron los científicos con cuidado?", options: ["«We build a new creek»", "«We don't build a creek. We only remove what was covering it»", "«Nature needs engineers»", "«The fish called us»"], answer: 1, why: "«We don't build a creek. We only remove what was covering it.»" },
      { q: "¿Qué se grabó el pasado julio?", options: ["A flood", "The first nest — and the video went viral", "A shopping center", "Nothing"], answer: 1, why: "«The cameras recorded the first nest. The video went viral in Alaska.»" },
    ],
    discuss: [
      { it: "Is there a river in your city that was buried, moved or «improved»? What would you do today?", es: "¿Hay un río en tu ciudad que fue enterrado, movido o «mejorado»? ¿Qué harías hoy?" },
      { it: "The elder said: «We apologized to the fish, and they accepted.» What does that sentence mean to you?", es: "El anciano dijo: «Nos disculpamos con los peces, y aceptaron.» ¿Qué significa esa frase para ti?" },
    ],
  },

  /* ═══ B1 · 3 — Technology ═══ */
  {
    id: "en-news-b1-03", cat: "tecnologia", level: "B1", place: "Mountain View", minutes: 3,
    title: "The car that parks itself",
    titleEs: "El coche que se estaciona solo",
    lead: {
      it: "In Mountain View, the hardest part of driving is slowly disappearing: parallel parking. New cars do it alone, and drivers are learning to trust a machine with the bumper.",
      es: "En Mountain View, la parte más difícil de conducir desaparece lentamente: el estacionamiento en paralelo. Los coches nuevos lo hacen solos, y los conductores están aprendiendo a confiar el parachoques a una máquina.",
    },
    paragraphs: [
      { it: "For a century, parallel parking was the terror of every driving test. Students practiced with cones. Examiners watched the front wheels. Whole comedy movies were built on that one fear.",
      es: "Durante un siglo, el estacionamiento en paralelo fue el terror de todo examen de conducción. Los estudiantes practicaban con conos. Los examinadores vigilaban las ruedas delanteras. Películas enteras de comedia se construyeron sobre ese único miedo." },
      { it: "The new system does not need cones. Twelve sensors measure the space while you drive slowly past it. A screen tells you: «Stop here. Hands off the wheel.» The car moves, corrects and fits into the gap in about twenty seconds.",
      es: "El nuevo sistema no necesita conos. Doce sensores miden el espacio mientras pasas lentamente. Una pantalla te dice: «Detente aquí. Quita las manos del volante.» El coche se mueve, corrige y cabe en el hueco en unos veinte segundos." },
      { it: "The strange part is human. The first time, everybody keeps their hands near the wheel. The second time, they relax. By the third time, they drink coffee and watch the car do the work. Engineers call this the trust curve.",
      es: "La parte extraña es humana. La primera vez, todos mantienen las manos cerca del volante. La segunda, se relajan. A la tercera, toman café y ven al coche hacer el trabajo. Los ingenieros llaman a esto la curva de confianza." },
      { it: "Old driving teachers are not happy. One of them said: «Parking teaches patience. If a machine is patient for you, what exactly are you learning?» Nobody in Mountain View had an answer ready.",
      es: "Los viejos instructores de manejo no están contentos. Uno dijo: «Estacionar enseña paciencia. Si una máquina es paciente por ti, ¿qué estás aprendiendo exactamente?» Nadie en Mountain View tenía una respuesta lista." },
    ],
    words: [
      { it: "to park (parallel parking)", es: "estacionarse (en paralelo)" },
      { it: "the wheel", es: "el volante" },
      { it: "the sensor", es: "el sensor" },
      { it: "the gap", es: "el hueco, el espacio" },
      { it: "the bumper", es: "el parachoques" },
      { it: "trust", es: "confianza" },
    ],
    questions: [
      { q: "¿Qué era el terror de todo examen de conducción?", options: ["Highways", "Parallel parking", "Traffic lights", "Rain"], answer: 1, why: "«For a century, parallel parking was the terror of every driving test.»" },
      { q: "¿Cómo mide el espacio el sistema?", options: ["A camera only", "Twelve sensors while you drive slowly past it", "A person with a tape", "It guesses"], answer: 1, why: "«Twelve sensors measure the space while you drive slowly past it.»" },
      { q: "¿Cuánto tarda el coche en entrar en el hueco?", options: ["Two minutes", "About twenty seconds", "One hour", "Five seconds"], answer: 1, why: "«The car moves, corrects and fits into the gap in about twenty seconds.»" },
      { q: "¿Qué es la «curva de confianza»?", options: ["A road in the mountains", "The moment when drivers relax and let the car work", "A new exam", "A software error"], answer: 1, why: "«By the third time, they drink coffee and watch the car do the work. Engineers call this the trust curve.»" },
      { q: "¿Qué preguntó el viejo instructor?", options: ["«Where can I buy this car?»", "«If a machine is patient for you, what exactly are you learning?»", "«Is coffee allowed while driving?»", "«Who pays the ticket?»"], answer: 1, why: "«Parking teaches patience. If a machine is patient for you, what exactly are you learning?»" },
    ],
    discuss: [
      { it: "What did your driving test include? Was parking the hardest part?", es: "¿Qué incluía tu examen de conducción? ¿Era el estacionamiento lo más difícil?" },
      { it: "Which task would you hand to a machine today — and which one would you never?", es: "¿Qué tarea le entregarías hoy a una máquina — y cuál nunca?" },
    ],
  },

  /* ═══ B2 · 1 — Economy ═══ */
  {
    id: "en-news-b2-01", cat: "economia", level: "B2", place: "USA", minutes: 4,
    title: "The side hustle: one job is no longer the whole story",
    titleEs: "El side hustle: un empleo ya no es toda la historia",
    lead: {
      it: "A third of American workers now earn money outside their main job. Economists argue about the risks; the workers themselves talk about freedom, and about Tuesday nights.",
      es: "Un tercio de los trabajadores estadounidenses ya gana dinero fuera de su empleo principal. Los economistas discuten los riesgos; los propios trabajadores hablan de libertad, y de las noches de los martes.",
    },
    paragraphs: [
      { it: "The expression is new, but the habit is old. A generation ago, people called it «moonlighting» and whispered about it, because a second job meant the first one was not enough. Today the side hustle is public, almost fashionable: it appears on business cards and in dating profiles.",
      es: "La expresión es nueva, pero el hábito es viejo. Hace una generación se llamaba «moonlighting» y se comentaba en voz baja, porque un segundo empleo significaba que el primero no alcanzaba. Hoy el side hustle es público, casi de moda: aparece en las tarjetas de visita y en los perfiles de citas." },
      { it: "The numbers explain the change. Wages grew slowly while rents grew fast, especially in the big cities. At the same time, platforms made it easy to sell a skill: photography on Saturday, code review at midnight, a vintage market stall on Sunday. The barrier to entry fell to almost zero.",
      es: "Los números explican el cambio. Los salarios crecieron despacio mientras los alquileres crecieron rápido, sobre todo en las grandes ciudades. Al mismo tiempo, las plataformas facilitaron vender una habilidad: fotografía el sábado, revisión de código a medianoche, un puesto de mercado vintage el domingo. La barrera de entrada cayó a casi cero." },
      { it: "Economists remain divided. The optimists see a laboratory: people testing small businesses with no debt and no bank in the middle. The pessimists see the opposite: a labor market that quietly shifted risk from companies to individuals, one gig at a time.",
      es: "Los economistas siguen divididos. Los optimistas ven un laboratorio: gente probando pequeños negocios sin deuda y sin banco de por medio. Los pesimistas ven lo contrario: un mercado laboral que trasladó en silencio el riesgo de las empresas a los individuos, contrato por contrato." },
      { it: "The workers themselves are more practical. In interviews, they rarely use the word «freedom». They say things like: «My side hustle pays for the vacation my salary cannot afford» or, more honestly: «I keep it in case the main job disappears next winter.»",
      es: "Los propios trabajadores son más prácticos. En entrevistas rara vez usan la palabra «libertad». Dicen cosas como: «Mi side hustle paga las vacaciones que mi sueldo no puede costear» o, con más honestidad: «Lo mantengo por si el empleo principal desaparece el próximo invierno.»" },
      { it: "The Tuesday nights are the hidden chapter. Between the day job and the side job, the hours that disappear are the ones nobody pays for: family dinners, sleep, the gym in the evening. Researchers call this the «third shift». No platform offers a fix for that yet.",
      es: "Las noches de los martes son el capítulo oculto. Entre el empleo diurno y el secundario, las horas que desaparecen son las que nadie paga: cenas en familia, el sueño, el gimnasio de la noche. Los investigadores llaman a esto el «tercer turno». Ninguna plataforma ofrece todavía una solución para eso." },
    ],
    words: [
      { it: "the side hustle", es: "el trabajo paralelo (ingreso extra)" },
      { it: "moonlighting", es: "trabajar de noche además del empleo (término antiguo)" },
      { it: "wages", es: "los salarios" },
      { it: "the barrier to entry", es: "la barrera de entrada" },
      { it: "to shift risk", es: "trasladar el riesgo" },
      { it: "the gig", es: "el trabajo puntual (gig economy)" },
      { it: "the third shift", es: "el tercer turno (horas no pagadas)" },
    ],
    questions: [
      { q: "¿Cómo se llamaba esto hace una generación y por qué se susurraba?", options: ["«Side hustle», porque era de moda", "«Moonlighting», porque un segundo empleo significaba que el primero no alcanzaba", "«Gig», porque era rápido", "«Third shift», porque era de noche"], answer: 1, why: "«A generation ago, people called it moonlighting and whispered about it, because a second job meant the first one was not enough.»" },
      { q: "¿Qué explican los números?", options: ["Wages grew slowly while rents grew fast; platforms lowered the barrier to entry", "Everybody got rich", "Jobs disappeared", "Banks closed"], answer: 0, why: "«Wages grew slowly while rents grew fast… The barrier to entry fell to almost zero.»" },
      { q: "¿Qué ven los pesimistas?", options: ["A laboratory of small businesses", "A labor market that quietly shifted risk from companies to individuals", "A fashion that will end", "A solution to unemployment"], answer: 1, why: "«A labor market that quietly shifted risk from companies to individuals, one gig at a time.»" },
      { q: "¿Qué dicen los trabajadores en las entrevistas?", options: ["They always use the word «freedom»", "They are practical: the hustle pays for vacations, or they keep it in case the main job disappears", "They hate platforms", "They want more Tuesday nights"], answer: 1, why: "«They rarely use the word freedom… I keep it in case the main job disappears next winter.»" },
      { q: "¿Qué es el «tercer turno»?", options: ["A night job at a factory", "The unpaid hours that disappear: family dinners, sleep, the gym", "A third job", "A tax"], answer: 1, why: "«The hours that disappear are the ones nobody pays for: family dinners, sleep, the gym… Researchers call this the third shift.»" },
    ],
    discuss: [
      { it: "Do you have a side hustle — or would you like one? What skill could you sell on a platform?", es: "¿Tienes un ingreso extra — o te gustaría tenerlo? ¿Qué habilidad podrías vender en una plataforma?" },
      { it: "«Companies shifted risk to individuals.» Do you agree? Who wins in the gig economy?", es: "«Las empresas trasladaron el riesgo a los individuos.» ¿Estás de acuerdo? ¿Quién gana en la gig economy?" },
    ],
  },

  /* ═══ B2 · 2 — Science ═══ */
  {
    id: "en-news-b2-02", cat: "scienza", level: "B2", place: "Houston", minutes: 4,
    title: "Artemis: the Moon is no longer a memory",
    titleEs: "Artemis: la Luna ya no es un recuerdo",
    lead: {
      it: "In Houston they are training a crew for a flight that has not happened since 1972. The program has a new name, a new rocket and, above all, a new reason to go.",
      es: "En Houston entrenan a una tripulación para un vuelo que no ocurre desde 1972. El programa tiene un nombre nuevo, un cohete nuevo y, sobre todo, una razón nueva para ir.",
    },
    paragraphs: [
      { it: "The Apollo generation touched the Moon six times and then stopped, almost bored. The reasons were political and financial, not technical: once the race was won, the audience went home. For fifty years, the Moon belonged to photographs.",
      es: "La generación de Apolo tocó la Luna seis veces y luego paró, casi por aburrimiento. Las razones fueron políticas y financieras, no técnicas: una vez ganada la carrera, el público se fue a casa. Durante cincuenta años, la Luna perteneció a las fotografías." },
      { it: "Artemis reverses the logic. The goal is not a flag and a photograph, but a permanent base near the south pole, where shadowed craters may hold ice. Ice means water; water means oxygen, fuel and, in the long run, a gas station in deep space.",
      es: "Artemis invierte la lógica. La meta no es una bandera y una fotografía, sino una base permanente cerca del polo sur, donde los cráteres en sombra podrían contener hielo. El hielo significa agua; el agua significa oxígeno, combustible y, a largo plazo, una gasolinera en el espacio profundo." },
      { it: "The engineering is enormous, and so is the patience. The new rocket stands taller than the Statue of Liberty, and each launch burns fuel at a rate that no analogy makes friendly. Engineers summarize the budget of the program in three words: «The Moon is far.»",
      es: "La ingeniería es enorme, y también la paciencia. El nuevo cohete mide más que la Estatua de la Libertad, y cada lanzamiento quema combustible a un ritmo que ninguna analogía hace amable. Los ingenieros resumen el presupuesto del programa en tres palabras: «La Luna está lejos.»" },
      { it: "The crew composition is the quiet revolution. For the first time, the shortlist includes women and men from partner agencies, not only American test pilots. The official line says the next person on the Moon will look like the planet that is watching.",
      es: "La composición de la tripulación es la revolución silenciosa. Por primera vez, la lista corta incluye mujeres y hombres de agencias socias, no solo pilotos de pruebas estadounidenses. La versión oficial dice que la próxima persona en la Luna se parecerá al planeta que la está mirando." },
      { it: "Skeptics exist, and they are serious. Delays are real, the costs are public, and space history is a museum of missed dates. But in Houston the mood is different from Apollo: nobody talks about a race this time. They talk about a road, and about not closing it after the first trip.",
      es: "Hay escépticos, y son serios. Los retrasos son reales, los costes son públicos, y la historia espacial es un museo de fechas incumplidas. Pero en Houston el ánimo es distinto al de Apolo: esta vez nadie habla de una carrera. Hablan de un camino, y de no cerrarlo después del primer viaje." },
    ],
    words: [
      { it: "the crew", es: "la tripulación" },
      { it: "the crater", es: "el cráter" },
      { it: "ice", es: "el hielo" },
      { it: "fuel", es: "el combustible" },
      { it: "the launch", es: "el lanzamiento" },
      { it: "the shortlist", es: "la lista corta (de candidatos)" },
      { it: "delay", es: "el retraso" },
    ],
    questions: [
      { q: "¿Por qué paró Apolo, según la noticia?", options: ["Technical failure", "Political and financial reasons: once the race was won, the audience went home", "The Moon was boring", "Astronauts refused"], answer: 1, why: "«The reasons were political and financial, not technical: once the race was won, the audience went home.»" },
      { q: "¿Cuál es la meta de Artemis?", options: ["A flag and a photograph", "A permanent base near the south pole, where craters may hold ice", "A hotel for tourists", "A new satellite"], answer: 1, why: "«The goal is not a flag and a photograph, but a permanent base near the south pole, where shadowed craters may hold ice.»" },
      { q: "¿Qué significa hielo, en la lógica de Artemis?", options: ["Only something to drink", "Water, oxygen, fuel and a gas station in deep space", "A problem for the rocket", "Nothing"], answer: 1, why: "«Ice means water; water means oxygen, fuel and, in the long run, a gas station in deep space.»" },
      { q: "¿Cuál es la «revolución silenciosa» de la tripulación?", options: ["They are all pilots", "For the first time the shortlist includes women and men from partner agencies", "They are all tourists", "Nobody knows"], answer: 1, why: "«For the first time, the shortlist includes women and men from partner agencies, not only American test pilots.»" },
      { q: "¿Cómo es el ánimo en Houston comparado con Apolo?", options: ["More nervous: it is a race again", "Different: nobody talks about a race; they talk about a road and about not closing it", "Identical", "Nobody works there"], answer: 1, why: "«Nobody talks about a race this time. They talk about a road, and about not closing it after the first trip.»" },
    ],
    discuss: [
      { it: "Flags and photographs, or ice and gas stations: which Moon story would you fund with your taxes?", es: "Banderas y fotografías, o hielo y gasolineras: ¿qué historia lunar financiarías con tus impuestos?" },
      { it: "«The next person on the Moon will look like the planet that is watching.» Why does representation matter in space?", es: "«La próxima persona en la Luna se parecerá al planeta que la mira.» ¿Por qué importa la representación en el espacio?" },
    ],
  },

  /* ═══ B2 · 3 — Culture ═══ */
  {
    id: "en-news-b2-03", cat: "cultura", level: "B2", place: "Nashville", minutes: 4,
    title: "Nashville: the town where a song is a job interview",
    titleEs: "Nashville: la ciudad donde una canción es una entrevista de trabajo",
    lead: {
      it: "In Nashville, two hundred people move to town every week with a guitar and a plan. The industry calls them dreamers; the city calls them neighbors.",
      es: "En Nashville, doscientas personas se mudan cada semana con una guitarra y un plan. La industria los llama soñadores; la ciudad los llama vecinos.",
    },
    paragraphs: [
      { it: "Other music cities sell spectacle. Nashville sells craft. The historic theaters matter, but the real industry works in rooms you will never see: small offices where writers sit at nine in the morning, with coffee, and open a notebook the way a carpenter opens a toolbox.",
      es: "Otras ciudades musicales venden espectáculo. Nashville vende oficio. Los teatros históricos importan, pero la industria real funciona en oficinas que nunca verás: cuartos pequeños donde los compositores se sientan a las nueve de la mañana, con café, y abren una libreta como un carpintero abre su caja de herramientas." },
      { it: "That is the famous «songwriting appointment»: two strangers, one room, four hours, and the expectation of a finished chorus. Visitors find it strange — art with a schedule. Locals answer that every bridge, every stadium and every vaccine was also «art» on a schedule.",
      es: "Esa es la famosa «cita de composición»: dos desconocidos, una sala, cuatro horas y la expectativa de un estribillo terminado. A los visitantes les parece raro — arte con calendario. Los locales responden que todo puente, todo estadio y toda vacuna fueron también «arte» con calendario." },
      { it: "The numbers are honest: most of these songs will never be recorded, and most of those recorded will never be hits. The town knows it and says it out loud. What keeps the system alive is the minority that pays for everybody — one giant country hit can feed a writer for a decade.",
      es: "Los números son honestos: la mayoría de esas canciones nunca será grabada, y la mayoría de las grabadas nunca será un éxito. La ciudad lo sabe y lo dice en voz alta. Lo que mantiene vivo el sistema es la minoría que paga por todos — un gran éxito de country puede alimentar a un compositor durante una década." },
      { it: "The city is changing around the craft. Bachelorette tourism fills the bars on weekend nights, and rents push the writers further from downtown. The industry worries about the same thing every creative district worries about: success is louder than the work that created it.",
      es: "La ciudad cambia alrededor del oficio. El turismo de despedidas llena los bares las noches del fin de semana, y los alquileres empujan a los compositores lejos del centro. A la industria le inquieta lo que a todo distrito creativo: el éxito hace más ruido que el trabajo que lo creó." },
      { it: "And yet the appointments continue at nine in the morning. The oldest writers say the same thing, with a shrug: the town does not promise you a hit. It promises you a chair, a room, and four hours. The rest is the song.",
      es: "Y sin embargo las citas siguen a las nueve de la mañana. Los compositores más viejos dicen lo mismo, encogiéndose de hombros: la ciudad no te promete un éxito. Te promete una silla, una sala y cuatro horas. El resto es la canción." },
    ],
    words: [
      { it: "craft", es: "el oficio (destreza artesanal)" },
      { it: "the songwriter", es: "el compositor / la compositora" },
      { it: "the chorus", es: "el estribillo" },
      { it: "the hit", es: "el éxito (canción famosa)" },
      { it: "on a schedule", es: "con calendario, con horario" },
      { it: "rents", es: "los alquileres" },
    ],
    questions: [
      { q: "¿Qué vende Nashville, según la noticia?", options: ["Spectacle", "Craft: songwriting in small offices at nine in the morning", "Only concerts", "Souvenirs"], answer: 1, why: "«Other music cities sell spectacle. Nashville sells craft… writers sit at nine in the morning, with coffee, and open a notebook.»" },
      { q: "¿En qué consiste la «cita de composición»?", options: ["A concert for two hundred people", "Two strangers, one room, four hours, expecting a finished chorus", "A TV show", "A guitar lesson"], answer: 1, why: "«Two strangers, one room, four hours, and the expectation of a finished chorus.»" },
      { q: "¿Qué mantiene vivo el sistema?", options: ["Tourism", "The minority that pays for everybody: one giant hit can feed a writer for a decade", "The government", "Streaming"], answer: 1, why: "«One giant country hit can feed a writer for a decade.»" },
      { q: "¿Qué le inquieta a la industria?", options: ["That songs are too long", "Success is louder than the work that created it — bachelorette tourism and rents push writers out", "That nobody visits", "That coffee is expensive"], answer: 1, why: "«Bachelorette tourism fills the bars… rents push the writers further from downtown… success is louder than the work that created it.»" },
      { q: "¿Qué promete la ciudad, según los compositores viejos?", options: ["A hit every year", "A chair, a room and four hours — the rest is the song", "A house downtown", "Nothing at all"], answer: 1, why: "«The town does not promise you a hit. It promises you a chair, a room, and four hours.»" },
    ],
    discuss: [
      { it: "«Art with a schedule»: creative or contradiction? What do you think?", es: "«Arte con calendario»: ¿creativo o contradicción? ¿Qué opinas?" },
      { it: "In your job, what is your equivalent of «a chair, a room and four hours»?", es: "En tu trabajo, ¿cuál es tu equivalente de «una silla, una sala y cuatro horas»?" },
    ],
  },
];
