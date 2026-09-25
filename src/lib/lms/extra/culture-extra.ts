import type { CultureArticle } from "../types";

/* ── Cultura EXTRA · paquete de expansión v1.1 ─────────────────────── */

export const CULTURE_EXTRA: CultureArticle[] = [
  {
    id: "cul-10", emoji: "🚶", category: "Costumbres", title: "La passeggiata: el rito del paseo", level: "B1", minutes: 4,
    paragraphs: [
      "En Italia, después de cenar, las ciudades se llenan de gente que camina sin destino: es la passeggiata, el paseo vespertino que no es ejercicio sino teatro social. Se ve y se deja ver (farsi vedere), se saluda, se comenta el día.",
      "La passeggiata tiene sus reglas no escritas: ritmo lento, ropa cuidada —aunque sea para dar tres vueltas a la plaza—, y paradas estratégicas: la parada del helado, la parada de los amigos, la parada frente al escaparate.",
      "Para el visitante, unirse a la passeggiata es la manera más fácil de sentirse local: camina despacio, saluda con un cenno y ya estás dentro del rito.",
    ],
    vocab: [ { it: "farsi vedere", es: "dejarse ver" }, { it: "il cenno", es: "el gesto/cenizo de saludo" }, { it: "il rito", es: "el rito" } ],
    question: { q: "¿Qué es la passeggiata?", options: ["Un paseo social vespertino", "Una excursión de montaña", "Un postre típico", "Una siesta corta"], answer: 0, explain: "Es el paseo después de cenar: teatro social italiano." },
  },
  {
    id: "cul-11", emoji: "🧺", category: "Gastronomía", title: "I mercati rionali: mercados de barrio", level: "A2", minutes: 3,
    paragraphs: [
      "Antes del supermercato estaba il mercato rionale: el mercado de barrio que monta sus carpas dos o tres mañanas por semana. Fruta, verdura, queso, pescado y el banquete del vendedor que grita más fuerte que todos.",
      "El mercado tiene su lenguaje: las ofertas se cantan (prezzo speciale, solo oggi!), el peso se redondea a favor del cliente cuando el fruttivendolo simpatiza (un po' di più, così, per gentilezza), y se elige con la mano puesta: mai toccare la frutta senza chiedere!",
      "Preguntar «di dov'è?» (¿de dónde es?) es legítimo y esperado: la procedencia importa casi tanto como el precio.",
    ],
    vocab: [ { it: "il banco", es: "el puesto" }, { it: "il fruttivendolo", es: "el vendedor de fruta" }, { it: "gentilezza", es: "amabilidad" } ],
    question: { q: "¿Qué NO se debe hacer en un mercado italiano?", options: ["Tocar la fruta sin pedir permiso", "Preguntar de dónde viene", "Saludar al vendedor", "Redondear el peso"], answer: 0, explain: "La fruta la elige el vendedor: pide antes de tocar." },
  },
  {
    id: "cul-12", emoji: "☀️", category: "Tradiciones", title: "Ferragosto: el país que cierra", level: "B1", minutes: 4,
    paragraphs: [
      "El 15 de agosto Italia se detiene: es Ferragosto, la fiesta más vacacional del año. Deriva del latín Feriae Augusti (descansos de Augusto), y Mussolini lo popularizó con los «treni popolari» que llevaban a los obreros al mar.",
      "En Ferragosto las ciudades se vacían y las playas se llenan. Cierran restaurantes, farmacias y oficinas; quien puede huye al mare o alla montagna. El pranzo di Ferragosto —con agua melón o anguila, según la región— reúne a la familia.",
      "Consejo práctico: si viajas a Italia en agosto, reserva todo con antelación y verifica horarios: la palabra mágica de la temporada è chiuso per ferie (cerrado por vacaciones).",
    ],
    vocab: [ { it: "le ferie", es: "las vacaciones laborales" }, { it: "chiuso per ferie", es: "cerrado por vacaciones" }, { it: "il pranzo", es: "la comida del mediodía" } ],
    question: { q: "¿Qué significa «chiuso per ferie»?", options: ["Cerrado por vacaciones", "Abierto solo por la tarde", "Cerrado los lunes", "Descuento de agosto"], answer: 0, explain: "El cartel más común del verano italiano." },
  },
  {
    id: "cul-13", emoji: "🎓", category: "Sociedad", title: "La universidad italiana", level: "B2", minutes: 5,
    paragraphs: [
      "La universidad italiana es una de las más antiguas del mundo: Bologna celebra desde 1088, y Padova, Napoli y Siena le siguen de cerca. El sistema se apoya en la laurea triennale (grado, 3 años) + laurea magistrale (máster, 2 años).",
      "La vida académica tiene sus ritos: l'appello (la convocatoria de examen), il ricevimento (las horas de tutoría del profesor) y la tesi di laurea defendida ante una commissione. Los exámenes orales son moneda común: hablar bien importa.",
      "Para estudiantes extranjeros, Italia ofrece formación pública asequible y programas en inglés, pero el italiano académico —con sus nominalizzazioni y su pasiva refleja— es una lengua en sí misma que conviene dominar.",
    ],
    vocab: [ { it: "l'appello", es: "la convocatoria de examen" }, { it: "il ricevimento", es: "la tutoría del profesor" }, { it: "la commissione", es: "el tribunal evaluador" } ],
    question: { q: "¿Cuál es la universidad más antigua del mundo occidental?", options: ["Bologna (1088)", "Padova", "Sorbona", "Salamanca"], answer: 0, explain: "Bologna, fundada en 1088, es considerada la más antigua." },
  },
  {
    id: "cul-14", emoji: "🪑", category: "Diseño", title: "Il design italiano: la belleza útil", level: "B2", minutes: 5,
    paragraphs: [
      "Del Vespa al Lampone de Achille Castiglioni, el diseño italiano demuestra que la belleza puede ser diaria. La fórmula del bello e ben fatto (bello y bien hecho) nació del Renacimiento y se industrializó en el Milán de los años cincuenta.",
      "Nombres que cambiaron el mundo: Adriano Olivetti (máquinas de escribir y ética empresarial), Gio Ponti (la Superleggera pesa 1,7 kg), los Castiglioni (lámparas que parecen objetos encontrados), Ettore Sottsass (el Memphis que rompió el funcionalismo).",
      "Hoy el design italiano es lengua global: salone del mobile de Milán, la triennale y un vocabulario que todo estudiante debería reconocer: prototipo, sbozzatura, ergonomia, pezzo unico.",
    ],
    vocab: [ { it: "il pezzo unico", es: "la pieza única" }, { it: "lo sbozzo", es: "el boceto" }, { it: "ben fatto", es: "bien hecho" } ],
    question: { q: "¿Qué pesa la silla Superleggera de Gio Ponti?", options: ["1,7 kg", "5 kg", "500 g", "3 kg"], answer: 0, explain: "Superleggera = superligera: 1,7 kilos de madera y genio." },
  },
  {
    id: "cul-15", emoji: "📜", category: "Lengua", title: "Dante y el nacimiento del italiano", level: "C1", minutes: 6,
    paragraphs: [
      "Antes de Dante, nadie había escrito en florentino vulgar para la eternidad: se escribía en latín. La Divina Commedia eligió el «si dicetra» del pueblo y fundó, de facto, el estándar del italiano moderno.",
      "El mérito de Dante fue doble: calidad (un toscano riquísimo, técnico, experimental) y fortuna (el prestigio del poema hizo que el florentino se volviera modelo peninsular). Boccaccio y Petrarca completaron la santísima trinidad: le tre corone.",
      "Curiosidad lingüística: muchos italianos «hablan como Dante» sin saberlo. Expresiones cotidianas como «senza infamia e senza lode» o «galeotto fu il libro» salen directamente del poema. Cuando estudias italiano, estudias su descendencia.",
    ],
    vocab: [ { it: "il volgare", es: "la lengua vulgar (no latina)" }, { it: "le tre corone", es: "las tres coronas (Dante, Petrarca, Boccaccio)" }, { it: "galeotto", es: "culpable/inceitador" } ],
    question: { q: "¿Por qué Dante es considerado el padre del italiano?", options: ["Escribió la gran obra en florentino vulgar, no en latín", "Inventó la gramática italiana", "Fundó la Accademia della Crusca", "Tradujo la Biblia"], answer: 0, explain: "Su elección del volgare fiorentino fundó el estándar moderno." },
  },
];
