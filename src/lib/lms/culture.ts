import type { CultureArticle } from "./types";

/* ── Cultura italiana · artículos con pregunta ────────────────────── */

export const CULTURE: CultureArticle[] = [
  {
    id: "cul-1", emoji: "🏛️", category: "Historia", title: "El Risorgimento: nacer de la fragmentación", level: "B1", minutes: 4,
    paragraphs: [
      "Hasta 1861 Italia no era un país: era un mosaico de estados, ducados y reinos que hablaban variedades locales a menudo ininteligibles entre sí. El Risorgimento (resurgimiento) fue el movimiento cultural y político que tejió la unidad: Cavour lo planificó, Garibaldi lo combatió en barcos rojos, y Mazzini lo soñó en la emigración.",
      "Curiosidad lingüística: en 1861 solo el 2-3% de la población hablaba el italiano estándar. La lengua de Dante llegó a los italianos de a poco, sobre todo gracias a la televisión (Rai, 1954) y a la escuela obligatoria. Por eso el italiano estándar es, en realidad, más joven que muchos edificios del país.",
    ],
    vocab: [ { it: "il Risorgimento", es: "el Resurgimiento" }, { it: "l'unità d'Italia", es: "la unidad de Italia" }, { it: "il mosaico", es: "el mosaico" } ],
    question: { q: "¿Qué porcentaje hablaba italiano estándar en 1861?", options: ["2-3%", "50%", "80%", "100%"], answer: 0, explain: "Solo una minoría: la unidad política llegó antes que la lingüística." },
  },
  {
    id: "cul-2", emoji: "🗺️", category: "Regiones", title: "20 regiones, 20 Italias", level: "A2", minutes: 3,
    paragraphs: [
      "Italia se compone de 20 regiones, cada una con dialecto, cocina y carácter propio. Sicilia es griega, árabe y normanda a la vez; el Trentino-Alto Adige es tiroles y bilingüe; Cerdeña conserva el nurághe y un idioma propio, el sardo.",
      "Para el estudiante, esta variedad es una buena noticia: cada región regala palabras distintas. En el Norte tomas un “tramezzino”, en Nápoles un “panino” y en Roma “due supplì”. Aprender italiano es también aprender a viajar dentro del idioma.",
    ],
    vocab: [ { it: "la regione", es: "la región" }, { it: "il dialetto", es: "el dialecto" }, { it: "la varietà", es: "la variedad" } ],
    question: { q: "¿Cuántas regiones tiene Italia?", options: ["20", "18", "22", "15"], answer: 0, explain: "20 regiones, 5 con estatuto especial (Sicilia, Cerdeña, Valle de Aosta, Trentino-Alto Adige y Friul-Venecia Julia)." },
  },
  {
    id: "cul-3", emoji: "🍝", category: "Gastronomía", title: "El rito del caffè", level: "A2", minutes: 3,
    paragraphs: [
      "En Italia el café es una religión con horarios: el cappuccino se toma solo por la mañana (pedirlo después de comer delata al turista), el espresso se bebe de pie en el bar en dos sorbos, y el “caffè sospeso” —un café pagado para un desconocido— es un gesto de solidaridad napolitana.",
      "El espresso simplemente se llama “un caffè”. Si pides un “latte” te servirán un vaso de leche. El orden correcto: un caffè, un caffè macchiato (manchado), un caffè corretto (corregido con grappa, para después de comer).",
    ],
    vocab: [ { it: "il caffè sospeso", es: "el café pendiente (pagado para otro)" }, { it: "il bar", es: "la cafetería" }, { it: "la grappa", es: "el orujo" } ],
    question: { q: "¿Qué te sirven si pides “un latte”?", options: ["Un vaso de leche", "Un café con leche", "Un té con leche", "Un capuchino"], answer: 0, explain: "Latte = leche. El café con leche es “caffè latte” o caffè macchiato." },
  },
  {
    id: "cul-4", emoji: "🎨", category: "Arte", title: "El Renacimiento: Florencia como laboratorio", level: "B1", minutes: 4,
    paragraphs: [
      "Entre los siglos XV y XVI, una ciudad de mercaderes y banqueros reescribió el arte universal. Botticelli pintó el nacimiento de Venus, Masaccio inventó la perspectiva, Brunelleschi levantó una cúpula “imposible” y Miguel Ángel esculpió un David que sigue mirando a Roma con actitud.",
      "Palabra clave para el estudiante: “rinascita” (renacimiento), acuñada por Vasari, el primer historiador del arte. Florencia se recorre a pie: los Uffizi, el Duomo y el Ponte Vecchio forman un museo a cielo abierto donde cada piedra respira historia.",
    ],
    vocab: [ { it: "il Rinascimento", es: "el Renacimiento" }, { it: "la cupola", es: "la cúpula" }, { it: "il mercante", es: "el mercader" } ],
    question: { q: "¿Quién acuñó el término “rinascita”?", options: ["Vasari", "Dante", "Galileo", "Botticelli"], answer: 0, explain: "Giorgio Vasari, en sus “Vite” (1550), el primer gran libro de historia del arte." },
  },
  {
    id: "cul-5", emoji: "🤌", category: "Gestos", title: "La gramática de las manos", level: "A2", minutes: 3,
    paragraphs: [
      "El italiano se habla con la boca y con las manos: se calculan más de 250 gestos convencionales. Las puntas de los dedos juntas que se mueven hacia arriba y abajo significan “che vuoi?” (¿qué quieres?), la pasada de uñas bajo la barbilla es un “no me interesa nada” elegantemente despectivo.",
      "El gesto más malinterpretado: la mano en forma de “telefono” (puño con pulgar y meñique extendidos) junto a la oreja no es una llamada: significa “parliamoci” o “ti chiamo”. Observar los gestos en un bar es una lección de lengua gratis.",
    ],
    vocab: [ { it: "il gesto", es: "el gesto" }, { it: "che vuoi?", es: "¿qué quieres?" }, { it: "la barba", es: "la barbilla" } ],
    question: { q: "¿Qué expresan las puntas de los dedos juntas moviéndose?", options: ["Incredulidad / ¿qué quieres?", "Aprobación", "Hambre", "Saludo militar"], answer: 0, explain: "Es quizá el gesto italiano más icónico: “ma che vuoi?”" },
  },
  {
    id: "cul-6", emoji: "🎭", category: "Literatura", title: "Dante y el nacimiento del italiano", level: "B2", minutes: 4,
    paragraphs: [
      "En 1300 Dante Alighieri eligió escribir la Divina Commedia en florentino vulgar y no en latín: una decisión revolucionaria que hizo del habla de Florencia la base del italiano literario. Su endecasílabo —“Nel mezzo del cammin di nostra vita”— sigue siendo el verso nacional.",
      "El italiano moderno es, literalmente, el idioma de Dante enriquecido por Petrarca, Boccaccio, Manzoni y la televisión. Cuando estudias italiano, hablas con un país que lleva setecientos años conversando consigo mismo.",
    ],
    vocab: [ { it: "l'endecasillabo", es: "el endecasílabo" }, { it: "il volgare", es: "el vulgar (lengua romance)" }, { it: "la Commedia", es: "la Commedia (Divina)" } ],
    question: { q: "¿En qué lengua escribió Dante la Commedia?", options: ["Florentino vulgar", "Latín clásico", "Siciliano", "Griego"], answer: 0, explain: "El “volgare fiorentino”, decisión que fundó el italiano literario." },
  },
  {
    id: "cul-7", emoji: "🎬", category: "Cine", title: "De Rossellini a Sorrentino", level: "B2", minutes: 4,
    paragraphs: [
      "El cine italiano enseñó al mundo a filmar: el neorrealismo (Rossellini, De Sica, “Ladri di biciclette”) puso cámara en la calle de un país destrozado por la guerra; la commedia all'italiana (Monicelli, Risi) se rió de sus miserias; Fellini convirtió la fantasía en forma de arte.",
      "Hoy Sorrentino (“La grande bellezza”, “È stata la mano di Dio”) y los hermanos Taviani mantienen la llama. Para el estudiante de nivel B2+, ver cine italiano con subtítulos en italiano es el gimnasio perfecto del oído.",
    ],
    vocab: [ { it: "il neorealismo", es: "el neorrealismo" }, { it: "la commedia all'italiana", es: "la comedia a la italiana" }, { it: "la bicicletta", es: "la bicicleta" } ],
    question: { q: "¿Qué movimiento puso la cámara en la calle tras la guerra?", options: ["El neorrealismo", "El futurismo", "El verismo", "La dolce vita"], answer: 0, explain: "Rossellini y De Sica filmaron la Italia real con actores no profesionales." },
  },
  {
    id: "cul-8", emoji: "🎉", category: "Fiestas", title: "El calendario festivo", level: "B1", minutes: 3,
    paragraphs: [
      "El año italiano es un guion: el Epifany cierra las fiestas con la Befana (una bruja buena que trae carbón a los maleducados), el Carnevale de Veniza llena de máscaras los canales, y la Pasqua se despide con la “gita fuori porta” (excursión al campo) y la colomba de pascua.",
      "El 2 de junio (Festa della Repubblica) y el 25 de abril (Liberazione) son las fiestas patrias; cada ciudad suma su santo patrón: San Gennaro derrite la sangre en Nápoles cada 19 de septiembre, un milagro con calendario fijo.",
    ],
    vocab: [ { it: "la Befana", es: "la Befana (bruja de la Epifanía)" }, { it: "il Carnevale", es: "el Carnaval" }, { it: "il santo patrono", es: "el santo patrón" } ],
    question: { q: "¿Quién trae regalos el 6 de enero?", options: ["La Befana", "Babbo Natale", "San Gennaro", "Il topolino"], answer: 0, explain: "La Befana, la bruja buena que baja por la chimenea." },
  },
  {
    id: "cul-9", emoji: "⚽", category: "Deportes", title: "El calcio como identidad", level: "A2", minutes: 3,
    paragraphs: [
      "En Italia el fútbol no es un deporte: es un dialecto emocional. La Serie A es un campeonato, y la partita del domenica pomeriggio un rito familiar: Juventus y Milan dividen el país, el derby della Madonnina (Inter-Milan) parte Milán en dos.",
      "Vocabulario esencial para sobrevivir una sobremesa italiana: la partita (partido), il rigore (penal), il fuorigioco (fuera de juego), l'arbitro (árbitro, siempre sospechoso), la squadra del cuore (el equipo del corazón).",
    ],
    vocab: [ { it: "il rigore", es: "el penal" }, { it: "il derby", es: "el clásico" }, { it: "la squadra del cuore", es: "el equipo del corazón" } ],
    question: { q: "¿Qué es “la squadra del cuore”?", options: ["El equipo del corazón", "Un tipo de entrenamiento", "El trofeo del campeón", "La hinchada"], answer: 0, explain: "El equipo por el que se suspira de por vida." },
  },
];
