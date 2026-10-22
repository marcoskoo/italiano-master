/* ── EN · Notizie C1 · batch B (v9.39) ───────────────────────────────
   Advanced American English news, Voice of America Learning English
   method. 100% original didactic content. Body: 5 short paragraphs,
   265-330 words, syntactic inversion + cleft sentences + idiomatic
   register. Fields `.it` = English (study language), `.es` = Spanish.
   Ids en-news-c1-04…15. */

import type { NewsItem } from "../../news";

export const EN_NEWS_C1B: NewsItem[] = [

  /* ═══ C1 · 4 — Science ═══ */
  {
    id: "en-news-c1-04", cat: "scienza", level: "C1", place: "Green Bank", minutes: 5,
    title: "Green Bank: the town that traded Wi-Fi for the stars",
    titleEs: "Green Bank: el pueblo que cambió el Wi-Fi por las estrellas",
    lead: {
      it: "In the hills of West Virginia, a federal rule has kept the airwaves silent for almost seventy years. What the silence costs the residents, the universe repays in discoveries.",
      es: "En las colinas de Virginia Occidental, una norma federal ha mantenido las ondas de radio en silencio durante casi setenta años. Lo que el silencio les cuesta a los vecinos, el universo lo devuelve en descubrimientos.",
    },
    paragraphs: [
      { it: "Green Bank, population one hundred and forty, sits inside the National Radio Quiet Zone, a rectangle of mountain silence drawn in 1958 around a telescope the size of a football field. Cell towers are banned here, Wi-Fi is rare, and microwave ovens are shielded like state secrets. Not until visitors cross the county line and watch their phones die do they grasp the bargain the town has struck.",
      es: "Green Bank, ciento cuarenta habitantes, se encuentra dentro de la Zona Nacional de Silencio de Radio, un rectángulo de silencio montañoso trazado en 1958 en torno a un telescopio del tamaño de un campo de fútbol. Aquí las antenas de telefonía están prohibidas, el Wi-Fi es raro y los hornos microondas se apantan como secretos de Estado. Solo cuando los visitantes cruzan el límite del condado y ven morir sus teléfonos entienden el trato que el pueblo ha cerrado." },
      { it: "It is the silence, astronomers insist, that makes the valley priceless. Radio telescopes listen to the universe, and a single leaky phone charger can shout down a galaxy. «What a loud city hides, a quiet valley reveals,» says Dr. Eleanor Whitfield, who has spent nineteen winters mapping hydrogen clouds. Her data, she notes, feeds studies of star formation on four continents.",
      es: "Es el silencio, insisten los astrónomos, lo que hace invaluable al valle. Los radiotelescopios escuchan el universo, y un simple cargador con fugas puede ahogar a una galaxia. «Lo que una ciudad ruidosa esconde, un valle callado lo revela», dice la doctora Eleanor Whitfield, que ha pasado diecinueve inviernos cartografiando nubes de hidrógeno. Sus datos, señala, alimentan estudios de formación estelar en cuatro continentes." },
      { it: "Residents do their business over buried cables, the school keeps its exams on paper, and the general store runs credit cards through a contraption from the dial-up era that clunks like a typewriter. Little did the dairy farmers of 1958 imagine that their pastures would become some of the most valuable scientific real estate in the country.",
      es: "Los vecinos hacen sus gestiones por cables enterrados, la escuela mantiene sus exámenes en papel y la tienda del pueblo pasa las tarjetas de crédito por un artilugio de la era del módem que repiquetea como una máquina de escribir. Poco imaginaban los ganaderos lecheros de 1958 que sus pastos se convertirían en algunos de los terrenos científicos más valiosos del país." },
      { it: "The arrangement is not painless, and the elephant in the room has a price tag. Young families want streaming, shops want card readers, and the county has spent years pleading for exemptions. «Only after I moved away for college did I realize how much of modern life I had been skipping,» says Dorothy Jenkins, twenty-four, who came home to teach.",
      es: "El acuerdo no es indoloro, y el elefante en la habitación tiene precio. Las familias jóvenes quieren streaming, las tiendas quieren datáfonos y el condado lleva años pidiendo excepciones. «Solo después de irme a la universidad me di cuenta de cuánta vida moderna me había estado saltando», dice Dorothy Jenkins, de veinticuatro años, que volvió al pueblo para enseñar." },
      { it: "For now, the telescope keeps winning the argument. Stargazing tours arrive by the busload on new-moon weekends, and observatory jobs anchor the school budget. Should the funding ever dry up, residents admit, the valley would face a harder choice than any antenna: keep the silence for its own sake, or let the noise back in.",
      es: "Por ahora, el telescopio sigue ganando la discusión. Los tours de observación de estrellas llegan en autobuses completos los fines de semana de luna nueva, y los empleos del observatorio sostienen el presupuesto escolar. Si algún día se secara la financiación, admiten los vecinos, el valle enfrentaría una decisión más dura que cualquier antena: mantener el silencio por sí mismo o dejar volver el ruido." },
    ],
    words: [
      { it: "banned", es: "prohibido" },
      { it: "to shield (shielded)", es: "apantallar, blindar", note: "shield = escudo o apantallar; el parabrisas es windshield en EE. UU." },
      { it: "the bargain", es: "el trato, el pacto" },
      { it: "priceless", es: "invaluable, que no tiene precio", note: "priceless = invaluable; «sin valor» es worthless" },
      { it: "leaky", es: "con fugas" },
      { it: "stargazing", es: "la observación de estrellas" },
    ],
    questions: [
      { q: "¿Qué se prohíbe dentro de la Zona de Silencio?", options: ["Los coches de gasolina", "Las antenas de telefonía y la mayoría de la tecnología inalámbrica", "Los tours al telescopio de noche", "La agricultura al atardecer"], answer: 1, why: "«Cell towers are banned here, Wi-Fi is rare, and microwave ovens are shielded like state secrets»." },
      { q: "¿Qué estudia la doctora Eleanor Whitfield?", options: ["Nubes de hidrógeno, para entender la formación de estrellas", "La migración de las aves", "La historia del condado", "Los paneles solares"], answer: 0, why: "La científica «has spent nineteen winters mapping hydrogen clouds» y sus datos «feeds studies of star formation on four continents»." },
      { q: "¿Por qué dice Dorothy Jenkins que se había «saltado» mucha vida moderna?", options: ["Porque nunca salió de Green Bank antes de la universidad", "Porque le desagrada la tecnología por principio", "Porque la biblioteca no tenía libros", "Porque el pueblo vive sin los servicios inalámbricos que el resto del país da por hechos"], answer: 3, why: "«Only after I moved away for college did I realize how much of modern life I had been skipping»: creció sin los servicios inalámbricos habituales." },
      { q: "¿Qué sugiere el dilema final del valle?", options: ["Que el silencio terminará pronto", "Que la ciencia perdió la discusión", "Que el pueblo valora el silencio como algo más que una exigencia científica", "Que los vecinos piensan mudarse"], answer: 2, why: "«keep the silence for its own sake, or let the noise back in»: el silencio ya tendría valor propio para el pueblo, más allá del telescopio." },
    ],
    discuss: [
      { it: "Could you live for a month in a town without cell service or Wi-Fi? What would you miss first?", es: "¿Podrías vivir un mes en un pueblo sin cobertura móvil ni Wi-Fi? ¿Qué es lo que más extrañarías?" },
      { it: "«What a loud city hides, a quiet valley reveals.» What else might we discover by turning the noise down?", es: "«Lo que una ciudad ruidosa esconde, un valle callado lo revela.» ¿Qué más podríamos descubrir bajando el ruido?" },
    ],
  },

  /* ═══ C1 · 5 — Technology ═══ */
  {
    id: "en-news-c1-05", cat: "tecnologia", level: "C1", place: "Milwaukee", minutes: 5,
    title: "Milwaukee turns its troubled waters into an industry",
    titleEs: "Milwaukee convierte sus aguas problemáticas en una industria",
    lead: {
      it: "A century ago, the rivers of Milwaukee ran the colors of its breweries. Today the same city hosts one of the world's densest clusters of water-technology companies — an industry built, fittingly, on cleaning up its own mess.",
      es: "Hace un siglo, los ríos de Milwaukee corrían con los colores de sus cervecerías. Hoy la misma ciudad alberga uno de los grupos de empresas de tecnología hídrica más densos del mundo — una industria construida, muy a propósito, para limpiar su propio desastre.",
    },
    paragraphs: [
      { it: "The turning point was painful. In 1993 a parasite slipped through the drinking-water plant and sickened hundreds of thousands of residents, the largest outbreak of its kind in the country's history. Only after that humiliation did the city rewire its treatment plants, replace hundreds of miles of pipes and start treating water as a discipline rather than a utility bill.",
      es: "El punto de inflexión fue doloroso. En 1993, un parásito atravesó la planta de agua potable y enfermó a cientos de miles de personas, el mayor brote de su tipo en la historia del país. Solo después de aquella humillación la ciudad rehízo sus plantas de tratamiento, reemplazó cientos de kilómetros de tuberías y empezó a tratar el agua como una disciplina y no como una simple factura." },
      { it: "The bet paid off. A research campus now fills a renovated warehouse on the lakefront, where two hundred companies design everything from leak-detecting sensors to filters that scrub pharmaceuticals out of wastewater. «What we export is not water; it is water intelligence,» says engineer Greg Halvorsen, whose firm advises utilities on four continents.",
      es: "La apuesta dio sus frutos. Hoy un campus de investigación ocupa un almacén renovado frente al lago, donde doscientas empresas diseñan desde sensores que detectan fugas hasta filtros que eliminan fármacos de las aguas residuales. «Lo que exportamos no es agua; es inteligencia del agua», dice el ingeniero Greg Halvorsen, cuya empresa asesora a servicios públicos en cuatro continentes." },
      { it: "It is the sewer, of all things, that has become the star pupil. A three-hundred-mile network of deep tunnels, studded with sensors, now predicts storms hours before the first drop falls and holds back the flood that once drowned basements after every summer storm. Rarely has a sewage system enjoyed such good press.",
      es: "Es el alcantarillado, precisamente, quien se ha convertido en el alumno estrella. Una red de túneles profundos de casi quinientos kilómetros, sembrada de sensores, anticipa ahora las tormentas horas antes de que caiga la primera gota y retiene la crecida que antes anegaba los sótanos tras cada tormenta de verano. Rara vez un sistema de saneamiento ha gozado de tan buena prensa." },
      { it: "The workforce has changed with the industry. Ex-brewery mechanics retrain as sensor technicians, the community college teaches water chemistry, and apprenticeships pay from the first week. Not every block has shared the comeback equally, planners admit, and the council now ties some grants to hiring within the city itself.",
      es: "La mano de obra ha cambiado con la industria. Mecánicos de las antiguas cervecerías se reciclan como técnicos de sensores, el colegio comunitario enseña química del agua y los aprendizajes pagan desde la primera semana. No todos los barrios han compartido la recuperación por igual, admiten los planificadores, y el concejo vincula ahora parte de las subvenciones a contrataciones dentro de la propia ciudad." },
      { it: "The market, meanwhile, keeps growing. Wherever the planet runs short of clean water, a Milwaukee invoice tends to follow, and the city's recruiters speak the language of drought in six tongues. «We spent a century learning to fix our own mess,» says Halvorsen. «The rest of the world is now the final exam.»",
      es: "El mercado, mientras tanto, no deja de crecer. Donde al planeta le falta agua limpia, suele aparecer una factura de Milwaukee, y los reclutadores de la ciudad hablan el idioma de la sequía en seis lenguas. «Pasamos un siglo aprendiendo a arreglar nuestro propio desastre», dice Halvorsen. «El resto del mundo es ahora el examen final.»" },
    ],
    words: [
      { it: "the utility bill", es: "la factura de servicios (luz, agua…)", note: "utility = servicio público; no confundas con la «utilidad»" },
      { it: "wastewater", es: "las aguas residuales" },
      { it: "an apprenticeship (apprenticeships)", es: "el aprendizaje, la formación en el puesto" },
      { it: "the comeback", es: "la reaparición, el regreso al buen momento" },
      { it: "drought", es: "la sequía", note: "drought rima con «doubt»: sin «b» en la pronunciación" },
      { it: "a leak (leak-detecting)", es: "una fuga; detectar fugas" },
    ],
    questions: [
      { q: "¿Qué ocurrió en Milwaukee en 1993?", options: ["Una crecida destruyó el barrio de los almacenes", "Una cervecería cerró tras un siglo", "Un parásito contaminó el agua potable y enfermó a cientos de miles de personas", "La ciudad prohibió bañarse en el lago"], answer: 2, why: "«a parasite slipped through the drinking-water plant and sickened hundreds of thousands of residents»." },
      { q: "¿Qué exporta la industria de Milwaukee según Halvorsen?", options: ["Agua embotellada", "Solo maquinaria de filtración", "Agua del lago a los estados secos", "Conocimiento: sensores, filtros y asesoría a servicios públicos"], answer: 3, why: "«What we export is not water; it is water intelligence» — sensores, filtros y asesoría a servicios públicos." },
      { q: "¿Por qué el alcantarillado es «el alumno estrella»?", options: ["Sus túneles con sensores predicen tormentas y evitan la inundación que antes anegaba los sótanos", "Porque es el más barato del país", "Porque se construyó en 1993", "Porque los turistas lo visitan"], answer: 0, why: "«predicts storms hours before the first drop falls and holds back the flood that once drowned basements»." },
      { q: "¿Qué significa que «el resto del mundo es ahora el examen final»?", options: ["Que la ciudad dejó de innovar", "Que Milwaukee debe aplicar a escala global lo que aprendió arreglándose a sí misma", "Que los estudiantes se examinarán de química del agua", "Que la industria abandonará la ciudad"], answer: 1, why: "«We spent a century learning to fix our own mess» y «The rest of the world is now the final exam»: la ciudad aplica globalmente lo aprendido en casa." },
    ],
    discuss: [
      { it: "Do you know where your city's tap water comes from? What would you do if it failed for a week?", es: "¿Sabes de dónde viene el agua del grifo de tu ciudad? ¿Qué harías si fallara durante una semana?" },
      { it: "Milwaukee built an industry out of its worst failure. Could a city you know do the same? With which problem?", es: "Milwaukee construyó una industria a partir de su peor fracaso. ¿Podría hacerlo una ciudad que conozcas? ¿Con qué problema?" },
    ],
  },

  /* ═══ C1 · 6 — Environment ═══ */
  {
    id: "en-news-c1-06", cat: "ambiente", level: "C1", place: "Charleston", minutes: 5,
    title: "Charleston negotiates with a rising sea",
    titleEs: "Charleston negocia con un mar que sube",
    lead: {
      it: "On bright afternoons in Charleston, South Carolina, salt water seeps up through the storm drains and pools in the streets. The tide — not the rain — is the new landlord, and it is raising the rent.",
      es: "En las tardes despejadas de Charleston, Carolina del Sur, el agua salada brota por los desagües y forma charcos en las calles. La marea — y no la lluvia — es la nueva casera, y está subiendo el alquiler.",
    },
    paragraphs: [
      { it: "Locals call it sunny-day flooding: puddles that appear from below, without a cloud in the sky, whenever the moon, the wind and the Gulf Stream align. Such floods have roughly tripled since the nineteen-seventies, and city engineers no longer treat them as weather. Hardly a month goes by without a street closing at high tide.",
      es: "Los vecinos lo llaman inundación de día soleado: charcos que aparecen desde abajo, sin una nube en el cielo, siempre que la luna, el viento y la corriente del Golfo se alinean. Esas crecidas casi se han triplicado desde los años setenta, y los ingenieros municipales ya no las tratan como meteorología. Casi no pasa un mes sin que una calle cierre con la marea alta." },
      { it: "Beneath the historic peninsula, drilling crews have carved a web of deep drainage tunnels feeding enormous pumps, which can empty a tropical downpour into the harbor before the next one arrives. «We cannot wall off the ocean,» says chief resilience officer Norma Pettigrew, «but we can learn its schedule.»",
      es: "Bajo la península histórica, cuadrillas de perforación han tallado una red de túneles de drenaje profundos que alimentan bombas enormes, capaces de vaciar un chaparrón tropical hacia el puerto antes de que llegue el siguiente. «No podemos amurallar el océano», dice la directora de resiliencia Norma Pettigrew, «pero podemos aprender su horario»." },
      { it: "The oldest streets pose the oldest problems. It is the eighteenth-century houses, with their raised door sills and their ballast-stone foundations, that must be lifted, wrapped or abandoned one by one, and preservation boards weigh every centimeter. What the city can save with pipes, it cannot always save with plaster.",
      es: "Las calles más antiguas plantean los problemas más antiguos. Son las casas del siglo dieciocho, con sus umbrales elevados y sus cimientos de piedra de lastre, las que deben alzarse, envolverse o abandonarse una a una, y las juntas de conservación miden cada centímetro. Lo que la ciudad puede salvar con tuberías no siempre puede salvarlo con yeso." },
      { it: "Money is the quiet half of the story. Federal funds cover the tunnels, yet the smaller bills — a pump for one block, a raised driveway, a family's move to higher ground — land on local budgets and neighbors. Not every street can argue its case with an engineer's drawings, and only rarely do the poorer ones try.",
      es: "El dinero es la mitad silenciosa de la historia. Los fondos federales pagan los túneles, pero las facturas menores — una bomba para una manzana, un camino de entrada elevado, el traslado de una familia a terreno más alto — caen sobre los presupuestos locales y los vecinos. No todas las calles pueden defender su caso con planos de ingeniería, y solo rara vez lo intentan las más pobres." },
      { it: "Still, no one in City Hall speaks of retreat. The plan runs to 2040, the pumps will grow, and a sea gate across the harbor mouth is being studied at the sketch stage. «Whether we stay dry is a question of physics,» says Pettigrew. «How gracefully we stay is the part we control.»",
      es: "Aun así, nadie en el ayuntamiento habla de retirada. El plan llega hasta 2040, las bombas crecerán y se estudia sobre el papel una compuerta marina en la boca del puerto. «Que permanezcamos secos es cuestión de física», dice Pettigrew. «Con cuánta elegancia permanecemos es la parte que controlamos»." },
    ],
    words: [
      { it: "sunny-day flooding", es: "la inundación de día soleado (por marea, no por lluvia)" },
      { it: "a downpour", es: "un chaparrón, un aguacero" },
      { it: "the harbor", es: "el puerto, la bahía" },
      { it: "the door sills", es: "los umbrales (de las puertas)" },
      { it: "higher ground", es: "el terreno más alto" },
      { it: "retreat", es: "la retirada", note: "aquí, abandonar terreno ante el mar; «to beat a retreat» = batirse en retirada" },
    ],
    questions: [
      { q: "¿Cuándo aparecen las «inundaciones de día soleado»?", options: ["Solo durante huracanes", "Después de lluvias fuertes", "Cuando se apagan las bombas", "Cuando la luna, el viento y la corriente del Golfo se alinean con la marea alta"], answer: 3, why: "«puddles that appear from below, without a cloud in the sky, whenever the moon, the wind and the Gulf Stream align»." },
      { q: "¿Qué dijo Norma Pettigrew que la ciudad puede hacer?", options: ["Amurallar el océano", "Trasladar las casas históricas tierra adentro", "Aprender el horario del océano en lugar de intentar amurallarlo", "Esperar los fondos federales"], answer: 2, why: "«We cannot wall off the ocean» y «but we can learn its schedule»." },
      { q: "¿Por qué las casas del siglo XVIII plantean los problemas más difíciles?", options: ["Porque son los edificios más altos", "Porque las reglas de conservación hacen que alzarlas o protegerlas sea un trabajo lento y meticuloso", "Porque nadie las posee", "Porque se construyeron con madera del puerto"], answer: 1, why: "Las casas «must be lifted, wrapped or abandoned one by one» y las juntas de conservación hacen que «preservation boards weigh every centimeter»." },
      { q: "¿Qué transmite la frase final de Pettigrew?", options: ["Que la física es irrelevante", "Que la ciudad acepta lo que no puede controlar y se concentra en cómo se adapta", "Que Charleston será seguramente abandonada", "Que la elegancia importa más que la seguridad"], answer: 0, why: "«Whether we stay dry is a question of physics» y «How gracefully we stay is the part we control»: distingue lo inevitable de lo que sí depende de la ciudad." },
    ],
    discuss: [
      { it: "The sea cannot be argued with, but the city can choose its attitude. Which coastal city do you think is adapting best, and why?", es: "Con el mar no se puede discutir, pero la ciudad puede elegir su actitud. ¿Qué ciudad costera crees que se adapta mejor, y por qué?" },
      { it: "Should public money protect every street equally, or the most vulnerable first? Who should decide?", es: "¿Debería el dinero público proteger todas las calles por igual, o primero a las más vulnerables? ¿Quién debería decidirlo?" },
    ],
  },

  /* ═══ C1 · 7 — Health ═══ */
  {
    id: "en-news-c1-07", cat: "salute", level: "C1", place: "Madison", minutes: 5,
    title: "In Madison, loneliness gets a prescription",
    titleEs: "En Madison, la soledad recibe su receta",
    lead: {
      it: "A family clinic in Madison, Wisconsin, has added an unusual question to its annual checkups: not «where does it hurt?» but «who do you have coffee with?». The answer, the doctors there say, belongs in the chart.",
      es: "Una clínica de familia en Madison, Wisconsin, ha añadido una pregunta poco habitual a sus chequeos anuales: no «¿dónde te duele?» sino «¿con quién tomas café?». La respuesta, dicen allí los médicos, pertenece a la historia clínica.",
    },
    paragraphs: [
      { it: "The science behind the question is blunt. Chronic loneliness measurably raises the risk of heart disease, stroke and dementia, and health authorities now rank it alongside smoking as a public-health concern. So serious has the problem grown among retirees that the clinic decided a prescription pad could no longer ignore it. It is sleep, every nurse repeats, that does half the healing — and company, the clinic adds, does much of the other half.",
      es: "La ciencia detrás de la pregunta es contundente. La soledad crónica eleva de forma medible el riesgo de cardiopatía, ictus y demencia, y las autoridades sanitarias la sitúan hoy junto al tabaquismo como preocupación de salud pública. Tan grave se ha vuelto el problema entre los jubilados que la clínica decidió que su recetario ya no podía ignorarlo. Es el sueño, repite cada enfermera, el que cura la mitad; y la compañía, añade la clínica, gran parte de la otra mitad." },
      { it: "The program works like a referral, not a lecture. A «community connector» interviews each patient, maps the person's interests — choirs, gardens, tool libraries, volunteer desks — and writes a twelve-week «social prescription» with follow-up visits built in. «What I cannot prescribe in a bottle, the city can prescribe in a calendar,» says Dr. Susan Hartley, who leads the effort.",
      es: "El programa funciona como una derivación, no como un sermón. Una «conectora comunitaria» entrevista a cada paciente, traza un mapa de sus intereses — coros, jardines, bibliotecas de herramientas, mesas de voluntariado — y extiende una «receta social» de doce semanas con visitas de seguimiento incluidas. «Lo que no puedo recetar en un frasco, la ciudad puede recetarlo en un calendario», dice la doctora Susan Hartley, que dirige el esfuerzo." },
      { it: "Early numbers encourage the staff. Of two hundred patients enrolled since spring, most kept at least one activity, missed appointments fell, and several cut back on sleep aids they no longer needed. It is follow-up, the organizers insist, rather than enthusiasm, that turns a hobby into a habit.",
      es: "Los primeros números animan al personal. De doscientos pacientes inscritos desde la primavera, la mayoría mantuvo al menos una actividad, bajaron las citas perdidas y varios redujeron somníferos que ya no necesitaban. Es el seguimiento, insisten los organizadores, y no el entusiasmo, lo que convierte un pasatiempo en un hábito." },
      { it: "Limits remain, and Hartley lists them without decoration. Loneliness is often the face of poverty, transport gaps or chronic pain, and no choir rehearses at the end of an unreachable bus line. «There is no pill for a bus route,» she says flatly, «and it would be easier to write one.»",
      es: "Los límites siguen ahí, y Hartley los enumera sin adornos. La soledad suele ser el rostro de la pobreza, de las carencias de transporte o del dolor crónico, y ningún coro ensaya al final de una línea de autobús inalcanzable. «No hay pastilla para una ruta de autobús», dice sin rodeos, «y sería más fácil recetarla»." },
      { it: "Whether insurers will ever pay for calendars is the experiment's open question, and the clinic is gathering its data accordingly. Meanwhile, the oldest rule hangs framed by the front desk: ask about coffee before you ask about sleep. One retired mail carrier, asked what worked, answered for the whole cohort: «The choir did what the pills could not.»",
      es: "Si los seguros llegarán a pagar calendarios es la pregunta abierta del experimento, y la clínica recoge sus datos con ese fin. Mientras tanto, la regla más antigua cuelga enmarcada junto a recepción: pregunta por el café antes de preguntar por el sueño. A un cartero jubilado, al que preguntaron qué había funcionado, respondió por toda la cohorte: «El coro hizo lo que las pastillas no pudieron»." },
    ],
    words: [
      { it: "chronic", es: "crónico, de larga duración", note: "pronunciación /krónik/: la «ch» suena /k/, como en Christmas" },
      { it: "a stroke", es: "un ictus, un derrame cerebral" },
      { it: "a referral", es: "una derivación (a un especialista)" },
      { it: "follow-up (visits)", es: "de seguimiento" },
      { it: "to cut back on (cut back on)", es: "reducir (una cantidad, un hábito)" },
      { it: "insurers", es: "las aseguradoras" },
    ],
    questions: [
      { q: "¿Con qué se compara el riesgo de la soledad crónica?", options: ["Con el tabaquismo, como preocupación de salud pública", "Con una mala dieta", "Con la falta de ejercicio", "Con la contaminación del aire"], answer: 0, why: "«health authorities now rank it alongside smoking as a public-health concern»." },
      { q: "¿Qué hace la «conectora comunitaria»?", options: ["Receta somníferos", "Entrevista a los pacientes y traza un mapa de sus intereses para escribir una receta social de doce semanas", "Realiza los chequeos anuales", "Lleva a los pacientes a la clínica"], answer: 1, why: "La conectora «interviews each patient, maps the person's interests» y escribe una «social prescription» de doce semanas con seguimiento incluido." },
      { q: "¿Por qué dice Hartley que «no hay pastilla para una ruta de autobús»?", options: ["Porque los pacientes se niegan a usar el autobús", "Porque los medicamentos no resuelven problemas estructurales como el transporte o la pobreza que aíslan a la gente", "Porque la farmacia queda demasiado lejos", "Porque las rutas de autobús son baratas"], answer: 2, why: "«Loneliness is often the face of poverty, transport gaps or chronic pain»: la receta social no alcanza las causas estructurales." },
      { q: "¿Qué implica la respuesta del cartero jubilado?", options: ["Que dejó toda la medicación", "Que los coros son más baratos que los médicos", "Que la clínica debería contratar músicos", "Que pertenecer a un grupo le dio lo que la medicina sola no pudo darle"], answer: 3, why: "«The choir did what the pills could not»: el vínculo social logró lo que el tratamiento farmacológico por sí solo no conseguía." },
    ],
    discuss: [
      { it: "Who did you have coffee with this week? What does your honest answer say about your social calendar?", es: "¿Con quién tomaste café esta semana? ¿Qué dice tu respuesta honesta sobre tu calendario social?" },
      { it: "Should health systems pay for choirs, gardens and walking groups? Where would you draw the line?", es: "¿Deberían los sistemas de salud pagar coros, huertos y grupos de caminata? ¿Dónde pondrías el límite?" },
    ],
  },

  /* ═══ C1 · 8 — History ═══ */
  {
    id: "en-news-c1-08", cat: "storia", level: "C1", place: "Duluth", minutes: 5,
    title: "A Lake Superior wreck gives up its name",
    titleEs: "Un naufragio del lago Superior revela por fin su nombre",
    lead: {
      it: "The Great Lakes preserve their dead better than any ocean: cold, dark and fresh enough to keep wood intact for a century. In the deep water off Duluth, Minnesota, a camera has finally read a name the lake has kept since 1905.",
      es: "Los Grandes Lagos conservan a sus muertos mejor que cualquier océano: fríos, oscuros y lo bastante dulces para mantener la madera intacta durante un siglo. En aguas profundas frente a Duluth, Minnesota, una cámara acaba de leer un nombre que el lago guardaba desde 1905.",
    },
    paragraphs: [
      { it: "The steamer Northerly left Duluth in November 1905 with a hold full of grain and a forecast that arrived late. Somewhere beyond the harbor she vanished; the lake, as sailors still say, never gives up her dead. A sonar survey last summer found the hull resting upright ninety feet down, masts still crossed.",
      es: "El vapor Northerly zarpó de Duluth en noviembre de 1905 con una bodega llena de grano y un parte meteorológico que llegó tarde. En algún punto más allá del puerto se esfumó; el lago, como aún dicen los marineros, jamás devuelve a sus muertos. Un sonar del verano pasado localizó el casco descansando derecho a veintisiete metros de profundidad, con los mástiles aún cruzados." },
      { it: "Cold did what conservators dream of. So cold is the water at that depth that the ship's wheel still turns, the cargo manifests still lie legible on the desk, and dinner plates sit stacked in the galley as if the cook had stepped out. Marine archaeologists describe the scene as a room awaiting its owner.",
      es: "El frío hizo lo que los conservadores sueñan. Tan fría es el agua a esa profundidad que el timón aún gira, los manifiestos de carga siguen legibles sobre el escritorio y los platos permanecen apilados en la cocina como si el cocinero acabara de salir. Los arqueólogos marinos describen la escena como una habitación que espera a su dueño." },
      { it: "Naming the wreck took patience and a typo. It was a misspelled entry in an insurance register, of all things, that settled the case: the Northerly had been logged as «Northern», which is why a century of searches came up empty. «Dead ends usually hide a clerical error,» says maritime historian James Lindqvist.",
      es: "Ponerle nombre al naufragio exigió paciencia y una errata. Fue una entrada mal escrita en un registro de seguros, precisamente, lo que zanjó el caso: el Northerly figuraba como «Northern», y por eso un siglo de búsquedas no dio con él. «Los callejones sin salida suelen esconder un error administrativo», dice el historiador marítimo James Lindqvist." },
      { it: "Descendants of the crew arrived within days. Little did the fireman's family know that the letters in an attic box — letters written aboard the ship — would end up under museum glass beside the sonar images. His granddaughter, ninety-two, recognized the handwriting before the signature.",
      es: "Los descendientes de la tripulación llegaron en cuestión de días. Poco sabía la familia del fogonero que las cartas de una caja del desván — cartas escritas a bordo — acabarían bajo la vitrina del museo junto a las imágenes de sonar. Su nieta, de noventa y dos años, reconoció la letra antes que la firma." },
      { it: "The wreck itself will stay where it is. Under state law the site is treated as a grave, and permits are nearly impossible to obtain. Should a diver try to raise the bell, the state would press charges; the museum contented itself with a full digital survey. «We brought up the story,» says Lindqvist, «and left the rest in peace.»",
      es: "El naufragio permanecerá donde está. Según la ley estatal, el lugar se trata como una tumba y los permisos son casi imposibles de obtener. Si un buzo intentara izar la campana, el estado lo procesaría; el museo se conformó con un levantamiento digital completo. «Rescatamos la historia», dice Lindqvist, «y dejamos el resto en paz»." },
    ],
    words: [
      { it: "the hull", es: "el casco" },
      { it: "legible", es: "legible" },
      { it: "the galley", es: "la cocina (de un barco)" },
      { it: "a dead end", es: "un callejón sin salida", note: "en una carretera, la señal dice DEAD END" },
      { it: "the attic", es: "el desván, el ático" },
      { it: "the bell", es: "la campana (del barco)" },
    ],
    questions: [
      { q: "¿Qué cargaba el Northerly cuando desapareció?", options: ["Mineral de hierro", "Grano", "Carbón", "Madera"], answer: 1, why: "«The steamer Northerly left Duluth in November 1905 with a hold full of grain»." },
      { q: "¿Qué resolvió finalmente la identidad del naufragio?", options: ["El diario de un superviviente", "La campana del barco", "Una entrada mal escrita en un registro de seguros: el «Northerly» figuraba como «Northern»", "Una fotografía de periódico"], answer: 2, why: "«It was a misspelled entry in an insurance register, of all things, that settled the case»." },
      { q: "¿Por qué se compara el naufragio con «una habitación que espera a su dueño»?", options: ["Porque reconstruyeron la cabina en el museo", "Porque el dueño sigue vivo en Duluth", "Porque el barco está a punto de ser izado", "Porque todo a bordo — timón, papeles, platos apilados — permanece intacto en su sitio"], answer: 3, why: "«the ship's wheel still turns, the cargo manifests still lie legible on the desk, and dinner plates sit stacked in the galley»." },
      { q: "¿Qué idea transmite la decisión de dejar el naufragio donde está?", options: ["Que el lugar se respeta como una tumba y el objetivo es la memoria, no el rescate de objetos", "Que al estado no le interesa la historia", "Que el naufragio no vale nada", "Que se anima a los buzos a visitarlo"], answer: 0, why: "«the site is treated as a grave» y «We brought up the story»: se honra la memoria sin saquear el lugar." },
    ],
    discuss: [
      { it: "Should shipwrecks be left untouched as graves, or excavated for what they can teach us? Where do you stand?", es: "¿Deberían dejarse los naufragios intactos como tumbas, o excavarse por lo que pueden enseñarnos? ¿Cuál es tu posición?" },
      { it: "A typo hid a ship for a century. What small mistake has changed something big in your family or work?", es: "Una errata escondió un barco durante un siglo. ¿Qué pequeño error ha cambiado algo grande en tu familia o tu trabajo?" },
    ],
  },

  /* ═══ C1 · 9 — Sports ═══ */
  {
    id: "en-news-c1-09", cat: "sport", level: "C1", place: "Salt Lake City", minutes: 5,
    title: "Desert kids fall for ice hockey in Utah",
    titleEs: "Los niños del desierto se enamoran del hockey sobre hielo en Utah",
    lead: {
      it: "Salt Lake City has spent a century selling its snow to skiers. This winter it is selling ice: a major-league hockey club arrived, and children who had never seen a frozen pond are learning to skate backward.",
      es: "Salt Lake City lleva un siglo vendiendo su nieve a los esquiadores. Este invierno vende hielo: llegó un club de hockey de las grandes ligas, y niños que nunca vieron un estanque congelado están aprendiendo a patinar hacia atrás.",
    },
    paragraphs: [
      { it: "The club's arrival lit a fuse nobody had measured. Learn-to-skate classes filled within days, rinks added midnight sessions, and sporting-goods stores report that the smallest skate sizes sell out before the large ones. Rarely has a waiting list grown so fast in a city with more skis than skates.",
      es: "La llegada del club encendió una mecha que nadie había medido. Las clases de iniciación al patinaje se llenaron en cuestión de días, las pistas añadieron horarios de medianoche y las tiendas de artículos deportivos reportan que las tallas más pequeñas de patín se agotan antes que las grandes. Rara vez una lista de espera creció tan rápido en una ciudad con más esquís que patines." },
      { it: "Money, as always, is the gatekeeper. Outfitting a young hockey player costs several hundred dollars, and it is the equipment, more than the ice, that decides who gets to play. The county answered with a gear library: donated helmets, pads and skates that circulate like library books, free for any child on a free-lunch plan.",
      es: "El dinero, como siempre, es el portero. Equipar a un joven jugador de hockey cuesta varios cientos de dólares, y es el equipamiento, más que el hielo, lo que decide quién puede jugar. El condado respondió con una biblioteca de material: cascos, protecciones y patines donados que circulan como libros de biblioteca, gratis para cualquier niño con beca de comedor." },
      { it: "The newest faces are the least expected. No sooner did the recreation centers drop their fees than the sign-up sheets filled with names in half a dozen languages, and a Saturday clinic now fields the children of families who arrived as refugees. «Talent is everywhere; access is not,» says youth coach Dana Rasmussen.",
      es: "Las caras más nuevas son las menos esperadas. Apenas los centros recreativos bajaron sus tarifas, las hojas de inscripción se llenaron de nombres en media docena de lenguas, y una clínica de los sábados reúne ahora a los hijos de familias que llegaron como refugiados. «El talento está en todas partes; el acceso no», dice la entrenadora juvenil Dana Rasmussen." },
      { it: "Girls' hockey is the fastest-growing corner of the boom. What began as a single team with borrowed jerseys has become a league with a waiting list of its own, and the club's women players have taken to visiting practices unannounced. The sight of a professional athlete tying a nine-year-old's skates, parents say, does more recruiting than any poster.",
      es: "El hockey femenino es el rincón que más rápido crece del auge. Lo que empezó como un solo equipo con camisetas prestadas se ha convertido en una liga con lista de espera propia, y las jugadoras del club han tomado la costumbre de presentarse en los entrenamientos sin avisar. La imagen de una atleta profesional atándole los patines a una niña de nueve años, dicen los padres, recluta más que cualquier cartel." },
      { it: "The boom even has a shadow, and it is a warm one. The outdoor rinks that grandparents remember depend on nights cold enough to freeze a hose, and Utah's winters keep shortening. Should the state lose its cold snaps, the sport will simply move indoors — but the ponds, old-timers admit, made a different kind of player.",
      es: "El auge incluso tiene una sombra, y es cálida. Las pistas al aire libre que recuerdan los abuelos dependen de noches lo bastante frías para congelar una manguera, y los inviernos de Utah siguen acortándose. Si el estado perdiera sus olas de frío, el deporte simplemente se trasladaría bajo techo; pero los estanques, admiten los veteranos, formaban a un jugador distinto." },
    ],
    words: [
      { it: "the rink", es: "la pista (de patinaje)" },
      { it: "to sell out (sell out)", es: "agotarse, venderse por completo" },
      { it: "gear", es: "el equipo, el material (deportivo)" },
      { it: "the fees", es: "las tarifas, las cuotas" },
      { it: "a jersey (jerseys)", es: "la camiseta (deportiva)" },
      { it: "a cold snap", es: "una ola de frío" },
    ],
    questions: [
      { q: "¿Qué pasó con las clases de iniciación al patinaje?", options: ["Se cancelaron", "Son gratis para todos", "Se llenaron en cuestión de días y las pistas añadieron horarios de medianoche", "Solo aceptan adultos"], answer: 2, why: "«Learn-to-skate classes filled within days, rinks added midnight sessions»." },
      { q: "¿Qué es la «biblioteca de material» del condado?", options: ["Cascos, protecciones y patines donados que circulan gratis, como libros de biblioteca", "Una tienda que alquila patines por horas", "Una escuela de hockey", "Un almacén de equipo viejo"], answer: 0, why: "«donated helmets, pads and skates that circulate like library books, free for any child on a free-lunch plan»." },
      { q: "¿Por qué dice Rasmussen que «el talento está en todas partes; el acceso no»?", options: ["Porque el deporte necesita hielo natural", "Porque el coste y el acceso deciden quién juega, no la capacidad", "Porque solo los refugiados pueden inscribirse", "Porque Utah no tiene tradición de hockey"], answer: 1, why: "«Outfitting a young hockey player costs several hundred dollars, and it is the equipment, more than the ice, that decides who gets to play»." },
      { q: "¿Qué sugiere la «sombra cálida» del final sobre el futuro del deporte?", options: ["Que el hockey desaparecerá de Utah", "Que las pistas cubiertas son peligrosas", "Que los niños dejarán de patinar", "Que el cambio climático podría cambiar dónde y cómo se aprende el juego"], answer: 3, why: "Las pistas exteriores «depend on nights cold enough to freeze a hose, and Utah's winters keep shortening»: el clima condiciona el futuro del deporte." },
    ],
    discuss: [
      { it: "Which sport «arrived» in your city during your childhood? How did it change your neighborhood?", es: "¿Qué deporte «llegó» a tu ciudad durante tu infancia? ¿Cómo cambió tu barrio?" },
      { it: "«Talent is everywhere; access is not.» What barrier would you remove first so more kids could play a sport?", es: "«El talento está en todas partes; el acceso no.» ¿Qué barrera quitarías primero para que más niños pudieran practicar un deporte?" },
    ],
  },

  /* ═══ C1 · 10 — Economy ═══ */
  {
    id: "en-news-c1-10", cat: "economia", level: "C1", place: "Toledo", minutes: 5,
    title: "Toledo's glass furnaces fire up for the solar age",
    titleEs: "Los hornos de cristal de Toledo se encienden para la era solar",
    lead: {
      it: "For a century, Toledo, Ohio, put a windshield in nearly every American car. The factories thinned and the nickname — the Glass City — stayed. Now the nickname is quietly paying the rent again.",
      es: "Durante un siglo, Toledo, Ohio, puso un parabrisas en casi todos los coches estadounidenses. Las fábricas se adelgazaron y el apodo — la Ciudad del Cristal — se quedó. Ahora el apodo vuelve a pagar silenciosamente el alquiler.",
    },
    paragraphs: [
      { it: "Glass built this city. Its laboratories invented the machines that made plate glass affordable, its unions won wages that put thousands through college, and its skyline glinted with the heat of twenty-four-hour furnaces. Not only did jobs leave when the car industry wobbled; the know-how nearly left with them.",
      es: "El cristal construyó esta ciudad. Sus laboratorios inventaron las máquinas que abarataron el cristal plano, sus sindicatos ganaron salarios que llevaron a miles de personas a la universidad y su horizonte brillaba con el calor de hornos encendidos las veinticuatro horas. No solo se fueron los empleos cuando la industria del automóvil tambaleó; el saber hacer casi se fue con ellos." },
      { it: "It was the sun, in the end, that came to the rescue. The same float-glass lines that once fed car plants now produce the tempered sheets inside solar panels, and new plants rise beside the old ones. «What we make has changed; how we make it has not,» says plant manager Diane Nowak, a third-generation glassworker.",
      es: "Fue el sol, al final, quien acudió al rescate. Las mismas líneas de cristal flotado que alimentaban a las plantas automotrices producen hoy las láminas templadas del interior de los paneles solares, y nuevas fábricas se levantan junto a las antiguas. «Lo que fabricamos ha cambiado; cómo lo fabricamos no», dice la directora de planta Diane Nowak, cristalera de tercera generación." },
      { it: "The workforce is being rebuilt slowly, a brick at a time. Only after the community college began teaching glass chemistry did the applications from young people pick up, and apprenticeships now pay from the first week on the assembly line. Robots handle the heavy sheets; people handle the tolerance math.",
      es: "La plantilla se reconstruye despacio, ladrillo a ladrillo. Solo cuando el colegio comunitario empezó a enseñar química del vidrio aumentaron las solicitudes de los jóvenes, y los aprendizajes pagan desde la primera semana en la línea de montaje. Los robots manejan las láminas pesadas; las personas, los cálculos de tolerancia." },
      { it: "The comeback is real but uneven. Wages have not fully returned to their fathers' levels, automation thins every new hire class, and the county still counts too many empty lots where the old glasshouses stood. «A rising tide lifts the boats that float,» says economic developer Frank Kowalczyk. «Part of our job is rebuilding the boats.»",
      es: "La recuperación es real pero desigual. Los salarios no han vuelto del todo a los niveles de los padres, la automatización adelgaza cada nueva promoción de contratados y el condado sigue contando demasiados solares vacíos donde había cristalerías. «La marea creciente eleva los barcos que flotan», dice el responsable de desarrollo económico Frank Kowalczyk. «Parte de nuestro trabajo es reconstruir los barcos»." },
      { it: "The order books, at least, point forward. Demand for solar glass doubles by the quarter, and the city's recruiters now pitch the Rust Belt as the Sun Belt's mirror. Should the panels one day be made from something other than glass, Toledo intends to be holding the patent. «Glass,» Nowak likes to say, «was always a transparent business.»",
      es: "Las carteras de pedidos, al menos, miran adelante. La demanda de cristal solar se duplica trimestre a trimestre, y los reclutadores de la ciudad venden ya el cinturón del óxido como el espejo del cinturón del sol. Si algún día los paneles se fabricaran con algo distinto al cristal, Toledo piensa tener la patente. «El cristal», dice Nowak, «siempre fue un negocio transparente»." },
    ],
    words: [
      { it: "the furnaces", es: "los hornos" },
      { it: "know-how", es: "el saber hacer, la experiencia práctica" },
      { it: "tempered (glass)", es: "templado (cristal)" },
      { it: "the wages", es: "los salarios" },
      { it: "a rising tide lifts the boats", es: "la marea creciente eleva todos los barcos", note: "refrán sobre prosperidad compartida; versión de «a rising tide lifts all boats»" },
      { it: "the order books", es: "las carteras de pedidos" },
    ],
    questions: [
      { q: "¿Qué producían antes las líneas de cristal flotado, y qué producen ahora?", options: ["Botellas, ahora ventanas", "Espejos, ahora pantallas de teléfono", "Faros, ahora cristal de laboratorio", "Parabrisas para las plantas de coches, ahora láminas templadas para paneles solares"], answer: 3, why: "«The same float-glass lines that once fed car plants now produce the tempered sheets inside solar panels»." },
      { q: "¿Quién es Diane Nowak?", options: ["Una directora de planta y cristalera de tercera generación", "La decana del colegio comunitario", "Una inventora de paneles solares", "La responsable económica del condado"], answer: 1, why: "«plant manager Diane Nowak, a third-generation glassworker»." },
      { q: "¿Qué significa que «los robots manejan las láminas pesadas; las personas, los cálculos de tolerancia»?", options: ["Que los trabajos que quedan exigen criterio técnico y no fuerza física", "Que la fábrica no tiene trabajadores", "Que los robots no son fiables", "Que los cálculos de tolerancia son fáciles"], answer: 0, why: "«Robots handle the heavy sheets; people handle the tolerance math»: el trabajo humano se desplaza hacia lo técnico." },
      { q: "¿Qué quiere decir Kowalczyk con «reconstruir los barcos»?", options: ["Que la ciudad construirá barcos de verdad", "Que hay que reparar la infraestructura portuaria", "Que no todos se benefician del auge, así que la ciudad debe preparar a las personas y los lugares que la recuperación no alcanza", "Que la pesca es el futuro de Toledo"], answer: 2, why: "«A rising tide lifts the boats that float» y «Part of our job is rebuilding the boats»: preparar a quienes el auge aún no alcanza." },
    ],
    discuss: [
      { it: "Your region's «old industry»: has anything replaced it? What did the new work demand that the old did not?", es: "La «industria vieja» de tu región: ¿la ha reemplazado algo? ¿Qué exigió el trabajo nuevo que el viejo no pedía?" },
      { it: "«What we make has changed; how we make it has not.» Does that describe any change you have lived through?", es: "«Lo que fabricamos ha cambiado; cómo lo fabricamos no.» ¿Describe eso algún cambio que hayas vivido tú?" },
    ],
  },

  /* ═══ C1 · 11 — Science ═══ */
  {
    id: "en-news-c1-11", cat: "scienza", level: "C1", place: "Missoula", minutes: 5,
    title: "In Missoula, hibernation is a medical question",
    titleEs: "En Missoula, la hibernación es una pregunta médica",
    lead: {
      it: "Every winter, a fat ground squirrel in the Rockies does what no hospital can imitate: it cools to a few degrees above freezing, sleeps for months and wakes up unharmed. A laboratory in Missoula wants to know how — and who else could learn the trick.",
      es: "Cada invierno, una ardilla de tierra bien alimentada de las Rocosas hace lo que ningún hospital puede imitar: se enfría hasta unos grados sobre cero, duerme durante meses y despierta ilesa. Un laboratorio de Missoula quiere saber cómo — y quién más podría aprender el truco.",
    },
    paragraphs: [
      { it: "Hibernation is not sleep, the researchers insist; it is a controlled demolition. A squirrel in torpor lets its body temperature fall to near freezing, its heart slow to a few beats a minute and its metabolism burn a single gram of fat a week. So efficient is the state that the animal loses almost no muscle across a winter that would hospitalize a human.",
      es: "La hibernación no es sueño, insisten los investigadores; es una demolición controlada. Una ardilla en torpor deja que su temperatura corporal caiga casi al punto de congelación, que su corazón desacelere a unos pocos latidos por minuto y que su metabolismo consuma un solo gramo de grasa a la semana. Tan eficiente es ese estado que el animal casi no pierde músculo en un invierno que hospitalizaría a un humano." },
      { it: "It is not the cold that interests the laboratory but the protection. Stroke, trauma and bleeding-out all share a clock: injured cells die faster in a warm body. Slow the clock, the argument runs, and a critically injured patient could survive the ambulance ride that now kills. «The squirrel doesn't sleep its winter away,» says biologist Dr. Carrie Munson. «It rehearses death on a schedule, and comes back.»",
      es: "No es el frío lo que interesa al laboratorio, sino la protección. El ictus, el traumatismo y la hemorragia comparten todos un reloj: las células lesionadas mueren más rápido en un cuerpo caliente. Frena el reloj, va el argumento, y un paciente crítico podría sobrevivir el trayecto en ambulancia que hoy lo mata. «La ardilla no se duerme el invierno», dice la bióloga Carrie Munson. «Ensaya la muerte con horario, y regresa.»" },
      { it: "The bench science is unglamorous. Students weigh animals that do not move, draw blood at two in the morning and measure proteins that switch on only in torpor. Their results feed a quieter medical neighbor — the cooling of newborns after oxygen loss — that already saves infants every year.",
      es: "La ciencia de laboratorio no tiene glamour. Los estudiantes pesan animales que no se mueven, extraen sangre a las dos de la mañana y miden proteínas que solo se activan en el torpor. Sus resultados alimentan a un vecino médico más discreto — la refrigeración de recién nacidos tras una falta de oxígeno — que ya salva bebés cada año." },
      { it: "Humans, the team is quick to admit, are poor candidates. We lack the squirrel's fuel depots, its uncoupled metabolism and its willingness to be handled while cold. What the researchers hunt is not hibernation itself but the switch that starts it — a molecule, a signal, perhaps a protein that tells every cell at once to spend less.",
      es: "Los humanos, reconoce el equipo enseguida, son malos candidatos. Nos faltan los depósitos de combustible de la ardilla, su metabolismo desacoplado y su disposición a ser manipulada en frío. Lo que buscan los investigadores no es la hibernación en sí, sino el interruptor que la enciende — una molécula, una señal, quizá una proteína que diga a todas las células a la vez que gasten menos." },
      { it: "The daydream is a long way off — an astronaut in torpor to Mars is the usual slide in the lab's talks — yet the funding arrives anyway, because the shorter question matters more: if medicine could borrow even a week of the squirrel's winter for its sickest patients, ambulances would carry the coldest, calmest cargo of their lives.",
      es: "El sueño está lejísimos — una astronauta en torpor camino de Marte es la diapositiva de siempre en las charlas del laboratorio — y aun así la financiación llega, porque la pregunta corta pesa más: si la medicina pudiera pedirle prestada aunque fuera una semana del invierno de la ardilla para sus pacientes más graves, las ambulancias llevarían la carga más fría y tranquila de sus vidas." },
    ],
    words: [
      { it: "torpor", es: "el torpor (letargo metabólico)" },
      { it: "the metabolism", es: "el metabolismo" },
      { it: "to draw blood (draw blood)", es: "extraer sangre", note: "draw = extraer (sangre, conclusiones): «sacar una conclusión» es to draw a conclusion" },
      { it: "a newborn (newborns)", es: "un recién nacido" },
      { it: "the fuel depots", es: "los depósitos de combustible" },
      { it: "to borrow", es: "pedir prestado", note: "borrow = pedir prestado; «prestar» es to lend" },
    ],
    questions: [
      { q: "¿Qué le ocurre a la ardilla en estado de torpor?", options: ["Su temperatura cae casi al punto de congelación y su corazón late unas pocas veces por minuto", "Migra hacia el sur", "Come cada semana", "Su cuerpo se calienta"], answer: 0, why: "La ardilla deja que «its body temperature fall to near freezing, its heart slow to a few beats a minute»." },
      { q: "¿Qué aplicación médica vecina ya salva vidas cada año?", options: ["Pastillas de torpor para astronautas", "Ambulancias con cámaras frigoríficas", "Batidos de proteínas para pacientes de ictus", "La refrigeración de recién nacidos tras una falta de oxígeno"], answer: 3, why: "«the cooling of newborns after oxygen loss — that already saves infants every year»." },
      { q: "¿Por qué «no es el frío lo que interesa al laboratorio, sino la protección»?", options: ["Porque al laboratorio disgusta el invierno", "Porque el frío es más barato que la medicina", "Porque las células lesionadas mueren más rápido en un cuerpo caliente, así que frenar el metabolismo gana tiempo", "Porque los cuerpos humanos ya son fríos"], answer: 2, why: "«injured cells die faster in a warm body» y «Slow the clock»: frenar el metabolismo gana tiempo a los pacientes críticos." },
      { q: "¿Qué reconoce el equipo al admitir que los humanos son «malos candidatos»?", options: ["Que la investigación debería detenerse", "Que los humanos no pueden hibernar como las ardillas: lo realista es copiar el interruptor celular", "Que las ardillas son peligrosas", "Que la hibernación es imposible de estudiar"], answer: 1, why: "«What the researchers hunt is not hibernation itself but the switch that starts it»: buscan imitar el mecanismo, no la hibernación completa." },
    ],
    discuss: [
      { it: "If you could safely «switch off» for a week — a flight, an illness, a hard month — would you? What would you miss?", es: "Si pudieras «apagarte» con seguridad durante una semana — un vuelo, una enfermedad, un mes difícil —, ¿lo harías? ¿Qué extrañarías?" },
      { it: "Nature often solves engineering problems first. Which animal ability would you hand to medicine, and why?", es: "La naturaleza suele resolver antes los problemas de ingeniería. ¿Qué capacidad animal le entregarías a la medicina, y por qué?" },
    ],
  },

  /* ═══ C1 · 12 — Culture ═══ */
  {
    id: "en-news-c1-12", cat: "cultura", level: "C1", place: "Des Moines", minutes: 5,
    title: "Iowa hangs its grandmothers' patterns on the barns",
    titleEs: "Iowa cuelga en los graneros los patrones de las abuelas",
    lead: {
      it: "Drive rural Iowa on a Sunday and the barns are dressed for church: eight-foot wooden squares painted like quilt blocks, copied from grandmothers' bedcovers. The countryside, it turns out, hangs its history where the weather can see it.",
      es: "Recorre el Iowa rural un domingo y los graneros van vestidos de gala: cuadrados de madera de dos metros y medio pintados como bloques de patchwork, copiados de las colchas de las abuelas. El campo, al parecer, cuelga su historia donde el clima pueda verla.",
    },
    paragraphs: [
      { it: "A barn quilt is plywood, house paint and patience: a single quilt pattern enlarged until its stars fit a barn's side. The first one is remembered as a memorial — a woman painted her mother's favorite block — and from that square, two decades ago, the idea spread county by county until trails now cross most of the Midwest.",
      es: "Una colcha de granero es contrachapado, pintura de interior y paciencia: un único patrón de patchwork ampliado hasta que sus estrellas cupieran en el lateral de un granero. La primera se recuerda como un homenaje — una mujer pintó el bloque favorito de su madre — y de ese cuadrado, hace dos décadas, la idea se extendió condado a condado hasta que hoy hay rutas que cruzan casi todo el Medio Oeste." },
      { it: "Each trail comes with a map, and each block with a story. Families choose a pattern for what it means — «Corn and Beans» for the farm's harvest, a wedding-ring block for the couple that built the barn in 1952 — and the county publishes the map like a museum catalog. Rarely does a folk art arrive with highway signage.",
      es: "Cada ruta viene con su mapa, y cada bloque con su historia. Las familias eligen el patrón por lo que significa — «Maíz y judías» por la cosecha de la finca, un bloque de anillos de boda por la pareja que construyó el granero en 1952 — y el condado publica el mapa como un catálogo de museo. Rara vez un arte popular llega con señalización de carretera." },
      { it: "The making is as social as the result. Church basements host painting days where four generations share one pattern sheet, and 4-H clubs auction their squares at the county fair. It is the painting parties, quilters insist, rather than the plywood, that hold a county together.",
      es: "El hacer es tan social como el resultado. Los sótanos de las iglesias acogen jornadas de pintura donde cuatro generaciones comparten una misma hoja de patrones, y los clubes 4-H subastan sus cuadrados en la feria del condado. Son las jornadas de pintura, insisten las artesanas, y no el contrachapado, las que mantienen unido a un condado." },
      { it: "The economics, while modest, are real. Cafés and bed-and-breakfasts along the trails report longer stays, and gas stations print the maps for free. «What tourists buy first is gasoline,» says quilter Mabel Jorgensen, eighty-one, «and second, somebody's grandmother's name.»",
      es: "La economía, aunque modesta, es real. Los cafés y las casas rurales de las rutas reportan estancias más largas, y las gasolineras imprimen los mapas gratis. «Lo primero que compran los turistas es gasolina», dice la artesana Mabel Jorgensen, de ochenta y un años, «y lo segundo, el nombre de la abuela de alguien»." },
      { it: "Whether the trails outlast their painters is the question nobody raises at the fairs. The paint fades every decade, and the barns themselves are mortal. Should the squares one day vanish, the patterns will survive in the quilts, the catalogs and the family names — but the drive, the map and the pie afterward would be gone, and the Iowans suspect they would miss them.",
      es: "Si las rutas sobrevivirán a sus pintoras es la pregunta que nadie plantea en las ferias. La pintura se decolora cada década y los propios graneros son mortales. Si los cuadrados desaparecieran algún día, los patrones sobrevivirían en las colchas, los catálogos y los apellidos; pero el paseo, el mapa y el pastel de después se perderían, y los habitantes de Iowa sospechan que los extrañarían." },
    ],
    words: [
      { it: "the barn", es: "el granero" },
      { it: "a quilt", es: "una colcha (de patchwork)", note: "pronunciación /kuilt/; quilt = colcha acolchada" },
      { it: "the pattern", es: "el patrón, el motivo" },
      { it: "a trail (the trails)", es: "una ruta / las rutas" },
      { it: "the county fair", es: "la feria del condado" },
      { it: "to fade (fades)", es: "decolorarse, apagarse" },
    ],
    questions: [
      { q: "¿Cómo se recuerda la primera colcha de granero?", options: ["Como una competición del condado", "Como un homenaje: una mujer pintó el bloque favorito de su madre", "Como una decoración de iglesia", "Como un proyecto escolar"], answer: 1, why: "«The first one is remembered as a memorial — a woman painted her mother's favorite block»." },
      { q: "¿Qué compran los turistas «en segundo lugar» según Jorgensen?", options: ["El nombre de la abuela de alguien: la historia detrás del bloque", "Otro mapa", "Colchas antiguas", "Pintura y materiales"], answer: 0, why: "«What tourists buy first is gasoline» y «and second, somebody's grandmother's name»." },
      { q: "¿Por qué se dice que «el hacer» es tan social como el resultado?", options: ["Porque las colchas se cosen en grupo", "Porque los graneros los construyen voluntarios", "Porque las jornadas de pintura reúnen a cuatro generaciones y las subastas financian a los clubes", "Porque los mapas se imprimen en comunidad"], answer: 2, why: "«Church basements host painting days where four generations share one pattern sheet, and 4-H clubs auction their squares at the county fair»." },
      { q: "¿Qué aporta el final sobre la relación de Iowa con las rutas?", options: ["Que las rutas están garantizadas por un siglo", "Que la pintura nunca se decolora", "Que el condado planea repintarlo todo", "Que lo que extrañarían es el ritual compartido — el paseo, el mapa, el pastel — y no solo las obras"], answer: 3, why: "«the drive, the map and the pie afterward would be gone»: el valor estaría también en la experiencia compartida, no solo en las obras." },
    ],
    discuss: [
      { it: "Which craft or «humble art» does your family keep alive? Who taught you, and who will you teach?", es: "¿Qué artesanía o «arte humilde» mantiene viva tu familia? ¿Quién te la enseñó y a quién se la enseñarías?" },
      { it: "Barn quilts turn private memories into public landmarks. Would you hang your family's «pattern» where strangers could see it?", es: "Las colchas de granero convierten recuerdos privados en hitos públicos. ¿Colgarías el «patrón» de tu familia donde los desconocidos pudieran verlo?" },
    ],
  },

  /* ═══ C1 · 13 — Environment ═══ */
  {
    id: "en-news-c1-13", cat: "ambiente", level: "C1", place: "Pikeville", minutes: 5,
    title: "After more than a century, elk bugle again in Kentucky",
    titleEs: "Después de más de un siglo, los alces vuelven a bramar en Kentucky",
    lead: {
      it: "The ridges around Pikeville, Kentucky, were logged, mined and replanted for a hundred years, and nobody consulted the wildlife. Since the late nineties, however, elk have been quietly coming back — and dragging an economy up the hill with them.",
      es: "Las crestas alrededor de Pikeville, Kentucky, fueron taladas, minadas y replantadas durante cien años, y nadie consultó a la fauna. Desde finales de los noventa, sin embargo, los alces han vuelto en silencio — y arrastran cuesta arriba una economía con ellos.",
    },
    paragraphs: [
      { it: "Eastern elk vanished before 1900, hunted out of the Appalachians. In 1997 wildlife agencies released a few hundred western animals on reclaimed mine land, and the herds found the grassy, sunlit openings absurdly comfortable. So well have they thrived that Kentucky now hosts the largest elk herd east of the Rockies.",
      es: "El alce oriental desapareció antes de 1900, cazado hasta extinguirse en los Apalaches. En 1997, las agencias de fauna liberaron unos cientos de ejemplares occidentales en terrenos mineros recuperados, y las manadas encontraron absurdamente cómodos los claros soleados y herbosos. Tan bien han prosperado que Kentucky aloja hoy la mayor población de alces al este de las Rocosas." },
      { it: "It was the strip mines, of all things, that opened the door. Where mature forest offers closed shade and little to graze on, reclaimed mine plateaus behave like mountain prairies — grass, clover, wind. The very scars the region lamented became the habitat the elk preferred.",
      es: "Fueron las minas a cielo abierto, precisamente, las que abrieron la puerta. Donde el bosque maduro ofrece sombra cerrada y poco pasto, las mesetas mineras recuperadas se comportan como praderas de montaña — hierba, trébol, viento. Las mismas cicatrices que la región lamentaba se convirtieron en el hábitat que los alces preferían." },
      { it: "Ecology keeps the ledger honest. Managers issue a careful number of hunting permits — the fees pay for habitat work — and watch for overgrazing, disease and the slow friction between a nine-hundred-pound animal and a highway. «We didn't bring back the elk; we borrowed them,» says biologist Wes Blackwood. «The lease runs as long as the habitat does.»",
      es: "La ecología mantiene las cuentas honestas. Los gestores emiten un número cuidadoso de permisos de caza — las tasas pagan los trabajos de hábitat — y vigilan el sobrepastoreo, las enfermedades y la lenta fricción entre un animal de cuatrocientos kilos y una autopista. «No trajimos de vuelta a los alces; los tomamos prestados», dice el biólogo Wes Blackwood. «El contrato dura lo que dure el hábitat»." },
      { it: "The tourist economy grew antlers of its own. September brings the bugling season — a high, eerie whistle that carries a mile — and dawn tours leave Pikeville in school buses full of photographers. Cabins, diners and a guide-training program at the community college followed the herds. No sooner did the elk settle than the calendars filled.",
      es: "La economía turística desarrolló cuernos propios. Septiembre trae la temporada de berreo — un silbido agudo y sobrecogedor que se oye a más de un kilómetro — y al alba salen de Pikeville autobuses escolares llenos de fotógrafos. Cabañas, restaurantes y un programa de formación de guías en el colegio comunitario siguieron a las manadas. Apenas se asentaron los alces, se llenaron los calendarios." },
      { it: "The return is not a finished story. Climate stress on the oak forests, new roads and the herd's own appetite could each bend the curve, and the elk have no memory of the landscape their great-grandparents lost. Still, on a frosty ridge at sunrise, the whistle sounds less like a comeback than like a claim. «You hear it once,» says Blackwood, «and the mountains feel less empty.»",
      es: "El regreso no es una historia terminada. El estrés climático sobre los bosques de robles, las nuevas carreteras y el propio apetito de la manada podrían torcer la curva, y los alces no guardan memoria del paisaje que perdieron sus tatarabuelos. Aun así, en una cresta helada al amanecer, el silbido suena menos a regreso que a reclamo. «Lo oyes una vez», dice Blackwood, «y las montañas se sienten menos vacías»." },
    ],
    words: [
      { it: "the herd", es: "la manada" },
      { it: "to graze", es: "pastar, pacer" },
      { it: "overgrazing", es: "el sobrepastoreo" },
      { it: "a permit (permits)", es: "el permiso", note: "work permit = permiso de trabajo; «el permiso de conducir» es driver's license" },
      { it: "to issue (a permit)", es: "emitir, expedir" },
      { it: "bugling", es: "el berreo (canto del alce)" },
    ],
    questions: [
      { q: "¿Qué tamaño tiene hoy la población de alces de Kentucky?", options: ["Unos pocos decenas de animales", "La mayor manada del país", "La mayor manada al este de las Rocosas", "La segunda mayor manada de los Apalaches"], answer: 2, why: "«Kentucky now hosts the largest elk herd east of the Rockies»." },
      { q: "¿Qué pagan las tasas de los permisos de caza?", options: ["La formación de guías", "Las nuevas carreteras", "Los autobuses escolares", "Los trabajos de hábitat"], answer: 3, why: "«Managers issue a careful number of hunting permits — the fees pay for habitat work»." },
      { q: "¿Por qué las minas a cielo abierto «abrieron la puerta»?", options: ["Porque los alces prefieren las mesetas abiertas y herbosas al bosque maduro y cerrado", "Porque las minas dejaron sal", "Porque los alces no pueden subir montañas", "Porque el bosque se incendió"], answer: 1, why: "«Where mature forest offers closed shade and little to graze on, reclaimed mine plateaus behave like mountain prairies»." },
      { q: "¿Qué quiere decir Blackwood con que los alces fueron «tomados prestados»?", options: ["Que la permanencia de los animales es condicional: se quedan solo mientras se mantenga el hábitat", "Que los alces pertenecen legalmente a otro estado", "Que hay que devolverlos en una fecha fija", "Que la caza los eliminará"], answer: 0, why: "«The lease runs as long as the habitat does»: la permanencia de los alces depende del cuidado del hábitat." },
    ],
    discuss: [
      { it: "A scarred landscape became the preferred habitat. Does your region turn its «scars» into anything valuable?", es: "Un paisaje marcado se convirtió en el hábitat preferido. ¿Convierte tu región sus «cicatrices» en algo valioso?" },
      { it: "Hunting permits fund conservation in Kentucky. Would you accept that trade-off? What conditions would you set?", es: "Los permisos de caza financian la conservación en Kentucky. ¿Aceptarías ese compromiso? ¿Qué condiciones pondrías?" },
    ],
  },

  /* ═══ C1 · 14 — Health ═══ */
  {
    id: "en-news-c1-14", cat: "salute", level: "C1", place: "Rochester", minutes: 5,
    title: "Rochester hospitals prescribe a quieter night",
    titleEs: "Los hospitales de Rochester recetan una noche más silenciosa",
    lead: {
      it: "A hospital, patients joke, is the worst place to try to get well. Alarms, carts and overhead pages keep the lights half on and the ears fully busy — and sleep, the staff now admits, is half the medicine.",
      es: "Un hospital, bromean los pacientes, es el peor lugar para intentar curarse. Alarmas, carros y llamadas por megafonía mantienen las luces a medias y los oídos del todo ocupados — y el sueño, admite ahora el personal, es la mitad del medicamento.",
    },
    paragraphs: [
      { it: "The numbers behind the joke are brutal. Measured at a patient's pillow, a hospital night can run as loud as a busy restaurant, and intensive-care units are worse. Broken sleep slows healing, confuses older patients and is linked to delirium — a complication medicine creates and then has to treat.",
      es: "Los números detrás de la broma son brutales. Medida en la almohada del paciente, una noche de hospital puede sonar tan fuerte como un restaurante concurrido, y las unidades de cuidados intensivos son peores. El sueño interrumpido retrasa la curación, confunde a los pacientes mayores y se asocia al delirio — una complicación que la medicina crea y luego tiene que tratar." },
      { it: "So a consortium of Rochester, Minnesota, hospitals declared war on the beep. Alarms were re-tuned so that only critical events sound; delivery carts received rubber wheels; corridors dim to amber after nine; and nurses now carry phones instead of waiting for a speaker to call their names. «Not every beep deserves a siren,» says Dr. Miriam Caldwell, who directs the program.",
      es: "Así que un consorcio de hospitales de Rochester, Minnesota, le declaró la guerra al bip. Las alarmas se reajustaron para que solo suenen los eventos críticos; los carros de reparto recibieron ruedas de goma; los pasillos se atenúan a un ámbar después de las nueve; y las enfermeras llevan ahora teléfonos en lugar de esperar que un altavoz pronuncie sus nombres. «No todos los bips merecen una sirena», dice la doctora Miriam Caldwell, que dirige el programa." },
      { it: "The early results read like a quiet kind of headline. Patient sleep scores rose, requests for sleeping pills fell, and the delirium rate on the pilot floors dropped enough that the program spread to every ward. Rarely has a cheaper medicine been invented — the entire fix, accountants note, cost less than one imaging machine. It was quiet, in other words, that did the work.",
      es: "Los primeros resultados parecen un titular en voz baja. Las puntuaciones de sueño de los pacientes subieron, bajaron las peticiones de somníferos y la tasa de delirio en las plantas piloto descendió lo bastante para que el programa se extendiera a todas las salas. Rara vez se ha inventado una medicina más barata — toda la solución, señalan los contables, costó menos que una sola máquina de imagen. Fue el silencio, en otras palabras, el que hizo el trabajo." },
      { it: "The staff had to be won over, not commanded. Nurses worried that softer alarms meant missed emergencies, and only after a review showed that the vast majority of beeps were false did the culture begin to turn. «You cannot order people to relax,» says Caldwell. «You redesign the room until relaxing is the default.»",
      es: "Hubo que convencer al personal, no mandarlo. Las enfermeras temían que unas alarmas más suaves significaran emergencias perdidas, y solo cuando una revisión mostró que la inmensa mayoría de los bips eran falsos la cultura empezó a cambiar. «No se puede ordenar a la gente que se relaje», dice Caldwell. «Se rediseña la habitación hasta que relajarse sea lo predeterminado»." },
      { it: "The quietest wing of the newest hospital was designed silent from the blueprints — sound-absorbing ceilings, single rooms, a policy that visitors whisper after ten. Should the decibel count keep falling, Caldwell likes to warn, the hospitals will face their final acoustic enemy: the cheerful teacart at dawn. Some noises, everyone agrees, are medicine too.",
      es: "El ala más silenciosa del hospital más nuevo se diseñó muda desde los planos — techos absorbentes, habitaciones individuales, una política de visitantes que susurran después de las diez. Si el nivel de decibelios sigue bajando, advierte Caldwell, los hospitales enfrentarán a su último enemigo acústico: el alegre carrito del té al amanecer. Algunos ruidos, coincide todo el mundo, también son medicina." },
    ],
    words: [
      { it: "the alarm", es: "la alarma" },
      { it: "delirium", es: "el delirio" },
      { it: "the ward", es: "la sala, la planta (hospitalaria)" },
      { it: "to dim (dimmed)", es: "atenuarse, bajar (la luz)" },
      { it: "the blueprints", es: "los planos (de construcción)", note: "blueprint = plano original; en sentido figurado, «el plan de base»" },
      { it: "to whisper", es: "susurrar" },
    ],
    questions: [
      { q: "¿Qué complicación se asocia al sueño interrumpido en pacientes mayores?", options: ["Caídas", "Infecciones", "Pérdida de audición", "Delirio"], answer: 3, why: "«Broken sleep slows healing, confuses older patients and is linked to delirium»." },
      { q: "¿Qué cambio recibieron los carros de reparto?", options: ["Motores eléctricos", "Estantes más grandes", "Ruedas de goma", "Campanillas"], answer: 2, why: "«delivery carts received rubber wheels»." },
      { q: "¿Por qué hubo que «convencer» al personal y no mandarlo?", options: ["Porque unas alarmas más suaves despertaban temor a emergencias perdidas, y la confianza hubo de ganarse con datos", "Porque el sindicato de enfermería vetó el cambio", "Porque las alarmas eran secretas", "Porque los médicos se negaban a usar teléfonos"], answer: 0, why: "«Nurses worried that softer alarms meant missed emergencies, and only after a review showed that the vast majority of beeps were false did the culture begin to turn»." },
      { q: "¿Qué matiz aporta la «guerra» final contra el carrito del té?", options: ["Que el programa será cancelado pronto", "Que no todo ruido es dañino: los sonidos que reconfortan también importan, y la meta es el equilibrio, no el silencio total", "Que los hospitales prohibirán el desayuno", "Que a las enfermeras disgustan los carritos"], answer: 1, why: "«Some noises, everyone agrees, are medicine too»: se busca equilibrio, no silencio absoluto." },
    ],
    discuss: [
      { it: "Where do you sleep worst — hospitals, hotels, planes? What noise would you eliminate first?", es: "¿Dónde duermes peor — hospitales, hoteles, aviones? ¿Qué ruido eliminarías primero?" },
      { it: "«You cannot order people to relax; you redesign the room.» Does that apply to schools, offices or your own home?", es: "«No se puede ordenar a la gente que se relaje; se rediseña la habitación.» ¿Se aplica a las escuelas, las oficinas o tu propia casa?" },
    ],
  },

  /* ═══ C1 · 15 — Society ═══ */
  {
    id: "en-news-c1-15", cat: "societa", level: "C1", place: "Tulsa", minutes: 5,
    title: "Tulsa pays strangers to put down roots",
    titleEs: "Tulsa paga a desconocidos para que echen raíces",
    lead: {
      it: "For decades, ambitious young Oklahomans left for the coasts and mailed the odd postcard back. Lately the arrows point the other way: Tulsa is offering remote workers cash to move in for a year — and hoping they stay for a decade.",
      es: "Durante décadas, los jóvenes ambiciosos de Oklahoma se fueron a las costas y enviaban alguna postal de vez en cuando. Últimamente las flechas apuntan al otro lado: Tulsa ofrece dinero a trabajadores remotos para que se muden por un año — y espera que se queden una década.",
    },
    paragraphs: [
      { it: "The program is simple to describe, and rarely has a city been so blunt about recruiting: ten thousand dollars, paid in installments, to any remote employee who relocates and commits to twelve months. Thousands apply, a few hundred are chosen, and the winners arrive with laptops, dogs and, occasionally, an entire startup folded into a moving van.",
      es: "El programa es fácil de describir, y rara vez una ciudad ha sido tan franca a la hora de reclutar: diez mil dólares, pagados a plazos, para cualquier empleado remoto que se mude y se comprometa a doce meses. Miles solicitan, unos cientos son elegidos, y los ganadores llegan con portátiles, perros y, ocasionalmente, una startup entera doblada en una furgoneta de mudanzas." },
      { it: "Not only do the newcomers bring salaries; they bring networks. Recruiters count the friends who follow the first mover, the investors who fly in to visit, the newsletter that tells a hundred thousand readers where the coffee is good. Urban sociologist Dr. Nathan Barlow calls the grant a first date. «We are not buying people,» he says. «We are buying introductions.»",
      es: "Los recién llegados no solo traen salarios; traen redes. Los reclutadores cuentan a los amigos que siguen al primero que se muda, a los inversores que vuelan para visitar, la carta de noticias que le dice a cien mil lectores dónde se toma buen café. El sociólogo urbano Nathan Barlow llama a la subvención una primera cita. «No estamos comprando personas», dice. «Estamos comprando presentaciones»." },
      { it: "The friction is honest. Housing prices in the trendiest districts have galloped ahead of wages, and the families who painted those neighborhoods for generations watch brunch lines form outside their churches. What is a lifeline for the newcomers reads, from certain porches, as a tax bill with better marketing.",
      es: "La fricción es honesta. Los precios de la vivienda en los barrios más de moda han galopado por delante de los salarios, y las familias que pintaron esos barrios durante generaciones ven formarse filas de brunch frente a sus iglesias. Lo que para los recién llegados es un salvavidas se lee, desde ciertos porches, como una factura de impuestos con mejor marketing." },
      { it: "The city's answer, so far, is to tie the money to mingling. Grantees volunteer, join neighborhood associations and coach robotics teams; the community desk tracks more than attendance. «A city is not a loyalty program,» says Barlow. «People stay for a job until they stay for a neighbor.»",
      es: "La respuesta de la ciudad, hasta ahora, consiste en condicionar el dinero al intercambio. Los beneficiarios hacen voluntariado, se unen a las asociaciones de vecinos y entrenan equipos de robótica; la mesa comunitaria controla algo más que la asistencia. «Una ciudad no es un programa de fidelización», dice Barlow. «La gente se queda por un trabajo hasta que se queda por un vecino»." },
      { it: "Whether the experiment remakes the city or merely decorates it will take a census to answer. What is already measurable is the mood: for the first time in fifty years, the question at Tulsa dinner tables is not who is leaving but who is coming. Even the skeptics, one organizer admits, keep asking for the application link.",
      es: "Si el experimento transforma la ciudad o solo la decora, lo dirá un censo. Lo que ya se puede medir es el ánimo: por primera vez en cincuenta años, la pregunta en las mesas de Tulsa no es quién se va sino quién viene. Hasta los escépticos, admite un organizador, siguen pidiendo el enlace de solicitud." },
    ],
    words: [
      { it: "to relocate", es: "trasladarse, mudarse (por trabajo)" },
      { it: "the installments", es: "las cuotas, los pagos a plazos" },
      { it: "housing prices", es: "los precios de la vivienda" },
      { it: "a lifeline", es: "un salvavidas" },
      { it: "to mingle (mingling)", es: "mezclarse, relacionarse", note: "mingle = mezclarse en sociedad; «mezclar» (algo) es to mix" },
      { it: "a census", es: "un censo" },
    ],
    questions: [
      { q: "¿Qué ofrece el programa a los trabajadores remotos que se mudan?", options: ["Diez mil dólares, pagados a plazos, por comprometerse a doce meses", "Una casa gratis", "Un empleo público", "Un pase de viaje"], answer: 0, why: "«ten thousand dollars, paid in installments, to any remote employee who relocates and commits to twelve months»." },
      { q: "¿Qué compra la ciudad según Barlow?", options: ["No personas, sino presentaciones", "Edificios de oficinas", "Espacios publicitarios", "Puntos de fidelización"], answer: 1, why: "«We are not buying people» y «We are buying introductions»." },
      { q: "¿Por qué desde ciertos porches la subvención «se lee como una factura de impuestos con mejor marketing»?", options: ["Porque los impuestos subieron en toda la ciudad", "Porque la subvención se paga con dinero de los impuestos", "Porque los vecinos de toda la vida sufren la subida de precios sin recibir los beneficios que reciben los recién llegados", "Porque las iglesias perdieron feligreses"], answer: 2, why: "«Housing prices in the trendiest districts have galloped ahead of wages» y «the families who painted those neighborhoods for generations watch brunch lines form outside their churches»: los vecinos de siempre cargan con los costes." },
      { q: "¿Qué sugiere la frase de Barlow «una ciudad no es un programa de fidelización»?", options: ["Que Tulsa debería terminar con las subvenciones", "Que el programa es ilegal", "Que los ciudadanos deberían acumular puntos", "Que la lealtad se construye con vínculos y no con recompensas: la gente se queda por la gente"], answer: 3, why: "«People stay for a job until they stay for a neighbor»: la permanencia se gana con vínculos, no con incentivos." },
    ],
    discuss: [
      { it: "Would you take a cash grant to move to an unfamiliar city for a year? What would make you stay longer?", es: "¿Aceptarías una subvención para mudarte un año a una ciudad desconocida? ¿Qué te haría quedarte más tiempo?" },
      { it: "Newcomers change a neighborhood: cafés, prices, habits. Who should adapt to whom?", es: "Los recién llegados cambian un barrio: cafés, precios, costumbres. ¿Quién debería adaptarse a quién?" },
    ],
  },

];
