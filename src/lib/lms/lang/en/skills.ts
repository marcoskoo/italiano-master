import type { ListeningTask, ReadingText, WritingPrompt, ConversationScenario } from "../../types";

/* ── Skills EN · escucha + lectura + escritura + conversación ───────
   Inglés americano (EE. UU.). Convención del proyecto: `.it` = lengua
   de estudio (aquí inglés), `.es` = español con tuteo. Los ids de
   preguntas (en-ex-*) pertenecen al espacio EN: el orquestador puede
   cablearlos a ejercicios propios (hoy degradan con gracia si no hay
   ejercicio resuelto, como getExercises filtra los desconocidos). */

/* ── Escucha · tareas con TTS ─────────────────────────────────────── */

export const EN_LISTENING: ListeningTask[] = [
  {
    id: "en-ls-1", level: "A1", title: "At the coffee shop", kind: "dialogo",
    dialogue: [
      { speaker: "Barista", it: "Hi there! What can I get for you?", es: "¡Hola! ¿Qué te preparo?" },
      { speaker: "Customer", it: "Hi! A medium coffee and a blueberry muffin, please.", es: "¡Hola! Un café mediano y un muffin de arándanos, por favor." },
      { speaker: "Barista", it: "Sure thing. For here or to go?", es: "Claro. ¿Para tomar aquí o para llevar?" },
      { speaker: "Customer", it: "To go, please. How much is it?", es: "Para llevar, por favor. ¿Cuánto es?" },
      { speaker: "Barista", it: "That's five seventy-five.", es: "Son cinco con setenta y cinco." },
      { speaker: "Customer", it: "Here you go. Thank you!", es: "Aquí tiene. ¡Gracias!" },
      { speaker: "Barista", it: "You're welcome! Have a great one!", es: "¡De nada! ¡Que tengas un buen día!" },
    ],
    questions: ["en-ex-ls-1-1", "en-ex-ls-1-2"],
  },
  {
    id: "en-ls-2", level: "A1", title: "First words", kind: "parole",
    words: ["hello", "good morning", "thank you", "please", "excuse me", "goodbye", "How are you?", "My name is…"],
    questions: ["en-ex-ls-2-1", "en-ex-ls-2-2"],
  },
  {
    id: "en-ls-3", level: "A2", title: "On the New York subway", kind: "dialogo",
    dialogue: [
      { speaker: "Tourist", it: "Excuse me, does this train go to Brooklyn?", es: "Perdone, ¿este tren va a Brooklyn?" },
      { speaker: "Local", it: "No, you need the L. Take it from Union Square.", es: "No, necesitas la línea L. Tómala desde Union Square." },
      { speaker: "Tourist", it: "Is it far from here?", es: "¿Está lejos de aquí?" },
      { speaker: "Local", it: "Not at all. Three stops, but watch out: you need the local, not the express.", es: "Para nada. Tres paradas, pero cuidado: necesitas el local, no el expreso." },
      { speaker: "Tourist", it: "Where can I buy a MetroCard?", es: "¿Dónde puedo comprar una MetroCard?" },
      { speaker: "Local", it: "There's a machine right there, by the stairs. Or just tap in with your card.", es: "Hay una máquina justo ahí, junto a las escaleras. O entra tocando con tu tarjeta." },
      { speaker: "Tourist", it: "Thanks a lot!", es: "¡Muchísimas gracias!" },
      { speaker: "Local", it: "No problem. Mind the closing doors!", es: "No hay de qué. ¡Cuidado con las puertas que se cierran!" },
    ],
    questions: ["en-ex-ls-3-1", "en-ex-ls-3-2"],
  },
  {
    id: "en-ls-4", level: "A2", title: "At the doctor's office", kind: "dialogo",
    dialogue: [
      { speaker: "Receptionist", it: "Good morning! Do you have an appointment?", es: "¡Buenos días! ¿Tiene cita?" },
      { speaker: "Patient", it: "Yes, at ten fifteen. My name is Ana Garcia.", es: "Sí, a las diez y cuarto. Me llamo Ana García." },
      { speaker: "Receptionist", it: "Perfect. Can I see your insurance card, please?", es: "Perfecto. ¿Puedo ver su tarjeta del seguro, por favor?" },
      { speaker: "Doctor", it: "So, Ana, what seems to be the problem?", es: "Bien, Ana, ¿cuál parece ser el problema?" },
      { speaker: "Patient", it: "I have a sore throat and my head hurts.", es: "Me duele la garganta y me duele la cabeza." },
      { speaker: "Doctor", it: "Let me check… It's one hundred point four, a mild fever. It's just a cold: drink plenty of water and rest.", es: "Déjeme ver… Es cien punto cuatro (37.8 °C), una fiebre leve. Es solo un resfriado: beba mucha agua y descanse." },
    ],
    questions: ["en-ex-ls-4-1", "en-ex-ls-4-2"],
  },
  {
    id: "en-ls-5", level: "B1", title: "A job interview", kind: "dialogo",
    dialogue: [
      { speaker: "Manager", it: "Good morning! Please, have a seat. Tell me a little about yourself.", es: "¡Buenos días! Siéntese, por favor. Cuénteme un poco sobre usted." },
      { speaker: "Candidate", it: "Thank you. My name is Sofia Martin, and I've been working in marketing for three years.", es: "Gracias. Me llamo Sofía Martín y llevo tres años trabajando en marketing." },
      { speaker: "Manager", it: "What did you study in college?", es: "¿Qué estudió en la universidad?" },
      { speaker: "Candidate", it: "I have a degree in communications, and I'm currently taking a course in digital marketing.", es: "Tengo un título en comunicación y actualmente estoy haciendo un curso de marketing digital." },
      { speaker: "Manager", it: "Why do you want to work with us?", es: "¿Por qué quiere trabajar con nosotros?" },
      { speaker: "Candidate", it: "Because your company works with international clients, and I speak both English and Spanish.", es: "Porque su empresa trabaja con clientes internacionales, y hablo inglés y español." },
      { speaker: "Manager", it: "Great. When could you start?", es: "Estupendo. ¿Cuándo podría empezar?" },
    ],
    questions: ["en-ex-ls-5-1", "en-ex-ls-5-2"],
  },
  {
    id: "en-ls-6", level: "B2", title: "Calling the airline", kind: "dialogo",
    dialogue: [
      { speaker: "Agent", it: "Thank you for calling Skyline Airways, this is Michael. How can I help you?", es: "Gracias por llamar a Skyline Airways, soy Michael. ¿En qué puedo ayudarle?" },
      { speaker: "Passenger", it: "Hi, my flight to Denver tomorrow has been canceled, and I'm trying to rebook it.", es: "Hola, mi vuelo a Denver de mañana ha sido cancelado y estoy intentando cambiarlo." },
      { speaker: "Agent", it: "I'm really sorry about that. Could you give me your confirmation number, please?", es: "Lo siento mucho. ¿Podría darme su número de confirmación, por favor?" },
      { speaker: "Passenger", it: "Sure, it's B as in boy, 4-7-2-9.", es: "Claro, es B de boy, 4-7-2-9." },
      { speaker: "Agent", it: "Thank you. I can put you on the six thirty flight, or you could take the connection through Chicago at noon.", es: "Gracias. Puedo ponerle en el vuelo de las seis y media, o podría tomar la conexión por Chicago al mediodía." },
      { speaker: "Passenger", it: "I'd rather take the direct one, if there are still seats available.", es: "Preferiría el directo, si aún quedan asientos disponibles." },
      { speaker: "Agent", it: "You're all set. You'll receive the new boarding pass by email right away.", es: "Todo listo. Recibirá la nueva tarjeta de embarque por correo de inmediato." },
    ],
    questions: ["en-ex-ls-6-1", "en-ex-ls-6-2"],
  },
];

/* ── Lectura · textos graduados ───────────────────────────────────── */

export const EN_READINGS: ReadingText[] = [
  {
    id: "en-rd-1", level: "A1", title: "Una postal desde Nueva York", titleIt: "A postcard from New York",
    genre: "Postal", minutes: 2,
    paragraphs: [
      { it: "Hi Marta! I arrived in New York yesterday. I'm here on vacation with my family.", es: "¡Hola Marta! Llegué a Nueva York ayer. Estoy aquí de vacaciones con mi familia." },
      { it: "The city is amazing. Every day we visit a new place: yesterday the Statue of Liberty, today Central Park.", es: "La ciudad es increíble. Cada día visitamos un sitio nuevo: ayer la Estatua de la Libertad, hoy Central Park." },
      { it: "In the morning we have breakfast at a diner: pancakes and orange juice. In the evening we eat pizza in Brooklyn.", es: "Por la mañana desayunamos en un diner: tortitas y zumo de naranja. Por la noche comemos pizza en Brooklyn." },
      { it: "The weather is good: it's sunny! How are you? See you soon — Anna", es: "¡Hace buen tiempo: hay sol! ¿Y tú, cómo estás? Hasta pronto — Anna" },
    ],
    glossary: [
      { it: "amazing", es: "increíble" },
      { it: "a diner", es: "un diner (cafetería clásica americana)" },
      { it: "pancakes", es: "tortitas / hot cakes" },
    ],
    questions: ["en-ex-rd-1-1", "en-ex-rd-1-2"],
  },
  {
    id: "en-rd-2", level: "A2", title: "El sábado en el mercado de agricultores", titleIt: "Saturday at the farmers market",
    genre: "Relato", minutes: 3,
    paragraphs: [
      { it: "Every Saturday morning Megan goes to the farmers market in her neighborhood in Portland. She always brings a big canvas bag and a very short list.", es: "Cada sábado por la mañana Megan va al mercado de agricultores de su barrio en Portland. Siempre lleva una bolsa grande de tela y una lista muy corta." },
      { it: "First she buys vegetables: the tomatoes from the local farm are her favorites. Then she gets fresh bread from the bakery stand and a jar of honey from the mountains.", es: "Primero compra verduras: los tomates de la granja local son sus preferidos. Luego toma pan fresco del puesto de panadería y un frasco de miel de la montaña." },
      { it: "Finally, if it's not raining, she stops for a cup of coffee with her neighbors. It's her small Saturday happiness.", es: "Al final, si no llueve, se para a tomar un café con sus vecinos. Es su pequeña felicidad del sábado." },
      { it: "Next Saturday there will be a cooking class at the market: how to make apple pie. Megan already signed up.", es: "El próximo sábado habrá una clase de cocina en el mercado: cómo hacer pastel de manzana. Megan ya se apuntó." },
    ],
    glossary: [
      { it: "the farmers market", es: "el mercado de agricultores" },
      { it: "the stand", es: "el puesto" },
      { it: "the neighborhood", es: "el barrio" },
    ],
    questions: ["en-ex-rd-2-1"],
  },
  {
    id: "en-rd-3", level: "B1", title: "Route 66: la carretera madre", titleIt: "Route 66: the Mother Road",
    genre: "Artículo", minutes: 4,
    paragraphs: [
      { it: "Route 66 was one of the first federal highways in the United States. It ran from Chicago, Illinois, to Santa Monica, California, covering almost four thousand kilometers of farmland, desert and mountains.", es: "La ruta 66 fue una de las primeras carreteras federales de Estados Unidos. Iba de Chicago, Illinois, a Santa Mónica, California, cubriendo casi cuatro mil kilómetros de campos, desierto y montañas." },
      { it: "In the 1950s, thousands of families drove west on Route 66 looking for a better life. Motels, diners and gas stations grew along the road, and the road trip became an American tradition.", es: "En los años cincuenta, miles de familias condujeron hacia el oeste por la ruta 66 buscando una vida mejor. Motelos, diners y gasolineras crecieron a lo largo de la carretera, y el road trip se convirtió en una tradición americana." },
      { it: "The interstate system replaced the old road, and Route 66 was removed from the federal list in 1985. But the myth never died: today drivers from all over the world rent a car in Chicago just to follow the historic signs west.", es: "El sistema de interestatales sustituyó a la carretera vieja, y la ruta 66 se eliminó de la lista federal en 1985. Pero el mito nunca murió: hoy conductores de todo el mundo alquilan un coche en Chicago solo para seguir los carteles históricos hacia el oeste." },
      { it: "For a language learner, the old road is perfect: people stop, talk and tell stories in every single town you pass.", es: "Para quien aprende el idioma, la carretera vieja es perfecta: la gente se detiene, conversa y cuenta historias en cada pueblo que atraviesas." },
    ],
    glossary: [
      { it: "the highway", es: "la carretera / autopista" },
      { it: "to rent", es: "alquilar" },
      { it: "the sign", es: "el cartel / la señal" },
    ],
    questions: ["en-ex-rd-3-1", "en-ex-rd-3-2"],
  },
  {
    id: "en-rd-4", level: "B2", title: "El auge y la caída del centro comercial", titleIt: "The rise and fall of the American mall",
    genre: "Artículo", minutes: 5,
    paragraphs: [
      { it: "For half a century, the shopping mall was the beating heart of American suburbia: a climate-controlled city where teenagers met after school, families shopped on weekends and retirees walked their morning laps.", es: "Durante medio siglo, el centro comercial fue el corazón palpitante de la suburbia americana: una ciudad con aire acondicionado donde los adolescentes se veían después de clase, las familias compraban los fines de semana y los jubilados daban sus vueltas matinales." },
      { it: "At its peak, the country counted more than two thousand enclosed malls. Anchor stores, food courts and multiplex cinemas turned shopping into a social experience that television and movies celebrated for generations.", es: "En su apogeo, el país contaba con más de dos mil centros comerciales cerrados. Los grandes almacenes ancla, las plazas de comida y los cines multiosala convirtieron la compra en una experiencia social que la televisión y el cine celebraron durante generaciones." },
      { it: "Online shopping, changing tastes and rising rents have hit hard: hundreds of malls now sit half empty, the famous dead malls that photographers document like modern ruins.", es: "Las compras en línea, los gustos cambiantes y los alquileres crecientes han golpeado fuerte: cientos de centros comerciales están hoy medio vacíos, los famosos dead malls que los fotógrafos documentan como ruinas modernas." },
      { it: "Yet the story may not be over. Some surviving malls are reinventing themselves as community spaces, with libraries, gyms and even apartments where the stores used to be. The mall, it seems, refuses to die quietly.", es: "Sin embargo, la historia quizá no haya terminado. Algunos centros que sobreviven se reinventan como espacios comunitarios, con bibliotecas, gimnasios e incluso apartamentos donde antes estaban las tiendas. El mall, por lo visto, se niega a morir en silencio." },
    ],
    glossary: [
      { it: "the mall", es: "el centro comercial" },
      { it: "the anchor store", es: "los grandes almacenes ancla" },
      { it: "the food court", es: "la plaza de comidas" },
    ],
    questions: ["en-ex-rd-4-1", "en-ex-rd-4-2"],
  },
  {
    id: "en-rd-5", level: "C1", title: "El crisol y el mosaico", titleIt: "The melting pot and the mosaic",
    genre: "Ensayo", minutes: 5,
    paragraphs: [
      { it: "No metaphor has described the United States more often than the melting pot: a country where immigrants from every corner of the planet arrive, melt, and supposedly become one new people. The image is seductive, and it has shaped the way Americans tell their own story.", es: "Ninguna metáfora ha descrito Estados Unidos más a menudo que el crisol (melting pot): un país donde los inmigrantes de cada rincón del planeta llegan, se funden y, supuestamente, se convierten en un solo pueblo nuevo. La imagen es seductora y ha moldeado la manera en que los estadounidenses cuentan su propia historia." },
      { it: "Sociologists, however, prefer newer metaphors — the salad bowl, the mosaic — precisely because communities often keep their languages, cuisines and celebrations for generations. Far from melting, many traditions simply become American.", es: "Los sociólogos, sin embargo, prefieren metáforas más nuevas — la ensaladera, el mosaico — precisamente porque las comunidades suelen conservar sus lenguas, cocinas y celebraciones durante generaciones. Lejos de fundirse, muchas tradiciones simplemente se vuelven americanas." },
      { it: "Language tells the story: almost seventy million people speak a language other than English at home, from Spanish to Chinese, and heritage languages are now taught at major universities across the country.", es: "El idioma cuenta la historia: casi setenta millones de personas hablan en casa una lengua distinta del inglés, del español al chino, y las lenguas de herencia se enseñan hoy en grandes universidades de todo el país." },
      { it: "Perhaps the deepest truth is that becoming American has never required forgetting where you come from; it has required adding your own chapter to a story that is still being written.", es: "Quizá la verdad más profunda es que volverse americano nunca ha exigido olvidar de dónde vienes; ha exigido añadir tu propio capítulo a una historia que todavía se está escribiendo." },
    ],
    glossary: [
      { it: "the melting pot", es: "el crisol (de fusiones)" },
      { it: "to require", es: "requerir / exigir" },
      { it: "unfinished", es: "inacabado / no terminado" },
    ],
    questions: ["en-ex-rd-5-1"],
  },
  {
    id: "en-rd-6", level: "C2", title: "La gran novela americana", titleIt: "The Great American Novel",
    genre: "Crítica literaria", minutes: 6,
    paragraphs: [
      { it: "Every few years an American critic announces the death of the Great American Novel, and every few years a writer quietly resurrects it. The term describes an impossible book: one novel vast enough to hold the whole country between two covers.", es: "Cada pocos años un crítico estadounidense anuncia la muerte de la Gran Novela Americana, y cada pocos años un escritor la resucita en silencio. El término describe un libro imposible: una novela lo bastante vasta como para contener el país entero entre dos tapas." },
      { it: "Melville's whaling ship, Fitzgerald's green light, Toni Morrison's ghosts: candidates come from every direction, and each generation rewrites the shortlist. What unites them is ambition — the will to map a continent's dreams and failures in a single narrative.", es: "El ballenero de Melville, la luz verde de Fitzgerald, los fantasmas de Toni Morrison: las candidaturas llegan de todas direcciones y cada generación reescribe la lista de finalistas. Lo que las une es la ambición — la voluntad de cartografiar los sueños y los fracasos de un continente en una sola narración." },
      { it: "Maybe the Great American Novel was never a book at all, but a conversation that each reader is invited to join. When you open Moby-Dick or Beloved, you are not just reading: you are arguing with the national idea itself.", es: "Quizá la Gran Novela Americana nunca fue un libro, sino una conversación a la que se invita a cada lector. Cuando abres Moby-Dick o Beloved, no solo estás leyendo: estás discutiendo con la idea nacional misma." },
      { it: "And that, in the end, may be the most American thing about it: a country that writes itself one book at a time, and never finishes the sentence.", es: "Y eso, al final, quizá sea lo más americano de todo: un país que se escribe libro a libro y nunca termina la frase." },
    ],
    glossary: [
      { it: "the shortlist", es: "la lista de finalistas" },
      { it: "to map (a story)", es: "cartografiar / trazar" },
      { it: "two covers", es: "las dos tapas (del libro)" },
    ],
    questions: ["en-ex-rd-6-1"],
  },
];

/* ── Escritura · consignas por nivel ──────────────────────────────── */

export const EN_WRITINGS: WritingPrompt[] = [
  {
    id: "en-wr-1", level: "A1", title: "Presentarme", task: "Preséntate por escrito: nombre, edad, nacionalidad, ciudad, familia y algo que te gusta.",
    minWords: 30,
    tips: ["Usa el verbo to be contraído (I'm, she's)", "Frase modelo: My name is…, I'm … years old, I'm from…", "Una frase corta por idea es suficiente en A1"],
    model: [
      "Hi! My name is Ana and I'm twenty-three years old.",
      "I'm Mexican, from Monterrey, and I live with my family.",
      "I have one brother. His name is Diego.",
      "I like American music and iced coffee.",
    ],
    checklist: ["¿Contraes el verbo (I'm, no I am siempre)?", "¿Usas I'm … years old (nunca I have 23 years)?", "¿Cierras con I like…?"],
  },
  {
    id: "en-wr-2", level: "A2", title: "Mi último fin de semana", task: "Cuenta en pasado simple lo que hiciste el fin de semana: planes, ocio y algo que no hiciste.",
    minWords: 50,
    tips: ["Pasado simple regular (worked, watched) e irregular (went, had, saw)", "Marcadores: last weekend, on Saturday, in the evening", "Negación: didn't + verbo en forma base"],
    model: [
      "Last weekend was really fun.",
      "On Saturday morning I went to the farmers market with my sister and we bought fresh strawberries.",
      "In the afternoon I watched a basketball game with my friends.",
      "On Sunday I didn't do much: I slept late and cooked pancakes.",
    ],
    checklist: ["¿Usaste al menos 3 verbos irregulares distintos?", "¿La negativa usa didn't + base (didn't went NO)?", "¿Los regulares llevan -ed bien escrita (studied, stopped)?"],
  },
  {
    id: "en-wr-3", level: "B1", title: "Un correo formal al hotel", task: "Escribe un correo para confirmar la reserva, pedir una habitación tranquila y preguntar por el desayuno.",
    minWords: 60,
    tips: ["Apertura: Dear Sir or Madam, / Hello,", "Cortesía: I would like to…, Could you…?, I'd appreciate…", "Cierre: Best regards, / Sincerely,"],
    model: [
      "Dear Sir or Madam,",
      "I'm writing about my reservation (number 34A) for next weekend at your hotel in Chicago.",
      "I would like to confirm that I'll be arriving on Friday evening, and I'd appreciate a quiet room on a high floor, if possible.",
      "Could you also let me know whether breakfast is included in the rate?",
      "Thank you very much for your help. Best regards, A. Garcia",
    ],
    checklist: ["¿Usaste would/could en lugar de want/can?", "¿Preguntaste con Could you…?", "¿Apertura y cierre formales correctos?"],
  },
  {
    id: "en-wr-4", level: "B2", title: "Opinión: la cultura de la propina", task: "Redacta un texto argumentativo: ¿debería cambiar EE. UU. su cultura de la propina? Tesis, un argumento en contra y una conclusión.",
    minWords: 100,
    tips: ["Conectores: first of all, moreover, however, therefore", "Hipótesis: if + pasado simple, would (if tipping disappeared, prices would rise)", "Conclusión: in conclusion / to sum up"],
    model: [
      "In the United States, tipping is not really optional: servers often depend on tips for most of their income.",
      "First of all, defenders argue that tipping rewards good service and keeps menu prices low.",
      "However, the system also creates instability for workers and confusion for visitors, who never know how much to leave.",
      "If the country switched to fair fixed wages, prices would go up, but workers would gain stability and dignity.",
      "In conclusion, I believe the tradition should evolve rather than disappear: fair wages first, tips as a bonus.",
    ],
    checklist: ["¿Hay tesis clara en la apertura?", "¿Conectores variados?", "¿Condicional tipo 2 tras if?", "¿Conclusión que sintetiza?"],
  },
  {
    id: "en-wr-5", level: "C1", title: "Ensayo: lengua e identidad", task: "Ensayo de 150 palabras: ¿cuánto moldea el idioma que hablamos nuestra forma de pensar? Usa registro académico.",
    minWords: 150,
    tips: ["Impersonales: it is often claimed that, it is worth noting that", "Conectores académicos: moreover, nevertheless, admittedly", "Matiz: to some extent, arguably, rather than"],
    model: [
      "It is often claimed that the language we speak determines the way we think; admittedly, the hypothesis contains a grain of truth.",
      "English, with its relentless present tense in news headlines, seems to favor immediacy; Spanish, with its subjunctive, seems to welcome doubt as a grammatical citizen.",
      "Nevertheless, multilinguals know that every language illuminates different corners of the same reality: a language does not imprison thought — it colors it.",
      "To some extent, then, English is not a cage but a lens: it widens, rather than limits, the view of whoever looks through it.",
      "In conclusion, the relationship between language and identity is not determinism but dialogue, an ongoing negotiation between what we say and what we could say.",
    ],
    checklist: ["¿Registro académico sostenido?", "¿Conectores de refinamiento (nevertheless, admittedly)?", "¿Matiz con to some extent / rather than?", "¿Tesis-antítesis-síntesis?"],
  },
  {
    id: "en-wr-6", level: "C2", title: "Una crítica cultural", task: "Escribe una crítica de 150 palabras de una serie, película o exposición que conozcas: tono culto pero vivo, con luces, sombras y veredicto.",
    minWords: 150,
    tips: ["Léxico de crítica: nuanced, gripping, a tour de force, falls short", "Evita very: prefiere adjetivos precisos (luminous, sluggish, flawless)", "Cierra con un veredicto con matices, no con una nota"],
    model: [
      "Some shows are merely watched; a handful deserve to be rewatched. The last season of my favorite drama belongs, for the most part, to the second group.",
      "The pilot, all nervy editing and whispered promises, gripped from the opening frame; the finale, by contrast, felt hurried, as though the writers had been chased out of the room.",
      "What survives is the middle stretch: five luminous episodes in which the dialogue does the heavy lifting and the camera merely listens.",
      "Is it a masterpiece? Arguably not. Is it worth your weekend? Unquestionably.",
      "Verdict: a flawed gem — and the flaws, somehow, are part of the charm.",
    ],
    checklist: ["¿Evitaste very y elegiste adjetivos precisos?", "¿Contraste equilibrado entre luces y sombras?", "¿Veredicto final con matices?"],
  },
];

/* ── Conversación · escenarios con frases útiles + tutor IA ───────── */

export const EN_CONVERSATION: ConversationScenario[] = [
  {
    id: "en-cs-1", emoji: "👋", title: "Conocer a alguien", level: "A1",
    phrases: [
      { it: "Hi! Nice to meet you.", es: "¡Hola! Encantado de conocerte." },
      { it: "What's your name? — My name is… / I'm…", es: "¿Cómo te llamas? — Me llamo… / Soy…" },
      { it: "Where are you from? — I'm from Mexico City.", es: "¿De dónde eres? — Soy de Ciudad de México." },
      { it: "What do you do? — I'm a student.", es: "¿A qué te dedicas? — Soy estudiante." },
      { it: "How's it going? — Pretty good, thanks!", es: "¿Qué tal? — ¡Muy bien, gracias!" },
    ],
    tips: ["En EE. UU. se usan los first names desde el primer minuto, incluso con tu profesor o tu jefe", "How's it going? es el saludo casual universal: responde breve y devuelve la pregunta", "Nice to meet you va con apretón de manos corto y contacto visual"],
    tutorSeed: "Let's role-play: we meet at a welcome party for international students in Boston. You are American, I introduce myself. Start by greeting me and asking my name.",
  },
  {
    id: "en-cs-2", emoji: "☕", title: "En la cafetería", level: "A1",
    phrases: [
      { it: "Hi, can I get a medium coffee, please?", es: "Hola, ¿me das un café mediano, por favor?" },
      { it: "I'd like a blueberry muffin.", es: "Quisiera un muffin de arándanos." },
      { it: "For here or to go? — To go, please.", es: "¿Para tomar aquí o para llevar? — Para llevar, por favor." },
      { it: "How much is it?", es: "¿Cuánto es?" },
      { it: "Can I pay with a card?", es: "¿Puedo pagar con tarjeta?" },
    ],
    tips: ["Se pide con can I get… o I'd like…; I want suena brusco", "Los tamaños son small, medium y large: no hay tall salvo en algunas cadenas", "To go = para llevar; for here = para tomar allí"],
    tutorSeed: "Role-play: I'm the customer, you're a barista at a coffee shop in Portland. Greet me and ask what you can get me.",
  },
  {
    id: "en-cs-3", emoji: "🗺️", title: "Pedir direcciones", level: "A2",
    phrases: [
      { it: "Excuse me, how do I get to Grand Central?", es: "Perdone, ¿cómo llego a Grand Central?" },
      { it: "Is it far from here? — No, it's a ten-minute walk.", es: "¿Está lejos de aquí? — No, está a diez minutos a pie." },
      { it: "Take the L train and get off at Union Square.", es: "Toma el tren L y bájate en Union Square." },
      { it: "Go straight ahead and then turn left.", es: "Sigue recto y luego gira a la izquierda." },
      { it: "Thanks a lot! — No problem.", es: "¡Muchísimas gracias! — No hay de qué." },
    ],
    tips: ["Excuse me es imprescindible antes de preguntar a un desconocido", "Las direcciones se dan con imperativos: go, turn, take, cross", "En Manhattan se ubica por calles y avenidas: at 5th Avenue and 42nd Street"],
    tutorSeed: "Role-play: I'm a lost tourist in Manhattan, you're a friendly New Yorker. I ask you for directions to the Empire State Building.",
  },
  {
    id: "en-cs-4", emoji: "🛍️", title: "De compras en el mall", level: "A2",
    phrases: [
      { it: "Excuse me, where's the fitting room?", es: "Perdone, ¿dónde está el probador?" },
      { it: "Do you have this shirt in a medium?", es: "¿Tiene esta camisa en talla M?" },
      { it: "Can I try it on?", es: "¿Puedo probármela?" },
      { it: "It's on sale — thirty percent off.", es: "Está en oferta: treinta por ciento de descuento." },
      { it: "I'll take it. Do you take cash?", es: "Me la quedo. ¿Aceptan efectivo?" },
    ],
    tips: ["Las tallas de ropa son XS, S, M, L, XL", "try on = probarse; es separable: try it on, nunca try on it", "I'll take it es la fórmula natural para decir «me lo quedo»"],
    tutorSeed: "Role-play: I'm shopping for a jacket at a mall in Minneapolis, you're the salesperson. Offer help and ask about my size.",
  },
  {
    id: "en-cs-5", emoji: "💼", title: "Entrevista de trabajo", level: "B1",
    phrases: [
      { it: "Good morning, thank you for having me.", es: "Buenos días, gracias por recibirme." },
      { it: "I have a degree in communications and three years of experience.", es: "Tengo un título en comunicación y tres años de experiencia." },
      { it: "I'm a hard worker and a fast learner.", es: "Soy trabajador y aprendo rápido." },
      { it: "What would my responsibilities be?", es: "¿Cuáles serían mis responsabilidades?" },
      { it: "When can I expect to hear back from you?", es: "¿Cuándo puedo esperar una respuesta?" },
    ],
    tips: ["Agradece la oportunidad: thank you for having me suena profesional", "hear back = recibir respuesta: la fórmula estándar para preguntar", "Preguntar al final demuestra interés: se espera, no es osadía"],
    tutorSeed: "Role-play: you're the hiring manager at a company in New York, I'm a candidate. Welcome me and ask me to tell you about myself.",
  },
  {
    id: "en-cs-6", emoji: "🌎", title: "Debate: ciudad vs. suburbios", level: "B2",
    phrases: [
      { it: "In my view, the problem is structural.", es: "En mi opinión, el problema es estructural." },
      { it: "If cities had better public transportation, fewer people would drive.", es: "Si las ciudades tuvieran mejor transporte público, menos gente conduciría." },
      { it: "I agree up to a point; however, the cost of living is the real issue.", es: "Estoy de acuerdo hasta cierto punto; sin embargo, el coste de vida es el verdadero problema." },
      { it: "We need to distinguish between…", es: "Hay que distinguir entre…" },
      { it: "To sum up, I would argue that…", es: "En resumen, sostendría que…" },
    ],
    tips: ["El condicional tipo 2 (if + pasado, would) es la marca del B2 al argumentar", "Matiza: up to a point, to some extent, in a way", "Los estadounidenses debaten con energía pero esperan su turno: interrumpir es de mala educación en contexto formal"],
    tutorSeed: "Debate: let's discuss whether life in the American suburbs is really better than city life. State your position and I'll push back — in English.",
  },
];
