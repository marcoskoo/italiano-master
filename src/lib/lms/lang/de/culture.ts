import type { CultureArticle } from "../../types";

/* ═══ Cultura del mundo germano · v9.39 ═════════════════════════════
   Espejo de src/lib/lms/culture.ts: artículos redactados en español
   con ejemplos y léxico en alemán (campo `.it` = alemán), 3-5 párrafos,
   pregunta de comprensión y curiosidad integrada. Temas: Mauerfall,
   Weihnachtsmärkte, Bundesliga y cultura del club, Mülltrennung,
   duzen/siezen en el trabajo, die Bahn y la movilidad.                  */

export const DE_CULTURE: CultureArticle[] = [
  {
    id: "de-cul-1", emoji: "🧱", category: "Historia", title: "El Mauerfall: la noche que cambió Europa", level: "B1", minutes: 4,
    paragraphs: [
      "Durante 28 años, un muro de 155 kilómetros partió Berlín en dos. La RDA lo llamó «antifaschistischer Schutzwall» (muro de protección antifascista); los berlineses lo llamaron simplemente die Mauer. Al menos 140 personas murieron intentando cruzarlo.",
      "La noche del 9 de noviembre de 1989 todo se derrumbó sin un solo disparo. En una conferencia de prensa confusa, el dirigente Günter Schabowski anunció la apertura de las fronteras con un «ab sofort, unverzüglich» (desde ahora mismo, sin demora) que pasó a la historia. En pocas horas, miles de ciudadanos de la RDA se agolparon en los pasos fronterizos.",
      "Ante la presión, los guardias abrieron las barreras. En el paso de Bornholmer Straße, desconocidos se abrazaron llorando; esa noche el Oeste regaló plátanos (la fruta símbolo del Este) y se descorcharon botellas de Sekt. En los días siguientes, los «Mauerspechte» (picos del muro) martillaron pedazos de cemento como recuerdo.",
      "Unos meses después llegó die Wiedervereinigung: el 3 de octubre de 1990, la RDA se incorporó a la República Federal. Hoy solo quedan fragmentos del muro, y el sendero que marca su trazado, el Mauerweg, invita a recorrer en bici la cicatriz de la ciudad. Curiosidad: la caída del muro empezó… por un error de comunicación en directo.",
    ],
    vocab: [
      { it: "der Mauerfall", es: "la caída del muro" },
      { it: "die Wende", es: "el cambio (nombre popular de 1989)" },
      { it: "die Grenze", es: "la frontera" },
    ],
    question: { q: "¿Qué significaba «ab sofort, unverzüglich»?", options: ["Desde ahora mismo, sin demora", "Mañana por la mañana", "Solo con visado especial", "Después de las vacaciones"], answer: 0, explain: "Schabowski respondió así a la pregunta de cuándo entraban en vigor las nuevas normas de viaje; el muro se abrió esa misma noche." },
  },
  {
    id: "de-cul-2", emoji: "🎄", category: "Tradiciones", title: "Weihnachtsmärkte: el aroma del Adviento", level: "A2", minutes: 3,
    paragraphs: [
      "Desde finales de noviembre, cada ciudad alemana enciende sus luces: nace der Weihnachtsmarkt. Puestos de madera ofrecen Glühwein (vino caliente especiado), Lebkuchen (pan de jengibre) y artesanía bajo un olor a canela y madera que se huele desde la otra acera.",
      "El más famoso es el Christkindlesmarkt de Núremberg, documentado desde mediados del siglo XVI. Cada año, una joven vestida de ángel (das Christkind) inaugura el mercado con un discurso desde el balcón de la iglesia de Nuestra Señora.",
      "Para el estudiante, el mercado es un gimnasio de lengua perfecto: se pide «Ein Glühwein mit Schuss, bitte» (con un chorro de ron), se devuelve la taza para recuperar el Pfand (el depósito) y se charla con desconocidos bajo las guirnaldas.",
      "Curiosidad: la taza del año es de colección. Cada mercado diseña su propia Kugel con un motivo nuevo, y muchos alemanes las guardan durante décadas como recuerdo de inviernos pasados.",
    ],
    vocab: [
      { it: "der Weihnachtsmarkt", es: "el mercadillo de Navidad" },
      { it: "der Glühwein", es: "el vino caliente especiado" },
      { it: "der Lebkuchen", es: "el pan de jengibre" },
    ],
    question: { q: "¿Qué es el Pfand en un mercadillo navideño?", options: ["El depósito que se recupera al devolver la taza", "La entrada al mercado", "Una propina obligatoria", "Un impuesto turístico"], answer: 0, explain: "Pagas la bebida más un depósito por la taza; al devolverla, recuperas el Pfand." },
  },
  {
    id: "de-cul-3", emoji: "⚽", category: "Deportes", title: "La Bundesliga y la cultura del club", level: "A2", minutes: 3,
    paragraphs: [
      "En Alemania el fútbol no empieza en la tele, sino en el Verein: decenas de miles de clubes deportivos de barrio forman la base del sistema. Sin ellos no habría estrellas, porque casi todo profesional ha salido de un club local.",
      "La Bundesliga se juega de agosto a mayo, con una pausa de invierno (die Winterpause). Los sábados a las 15:30 se concentran varios partidos a la vez, y el duelo estrella es el Klassiker: Bayern de Múnich contra Borussia Dortmund.",
      "Palabras para sobrevivir una sobremesa: das Derby (el clásico regional), der Absteiger (el equipo que desciende), die Tabelle (la tabla) y der Spieltag (la jornada). Con ellas ya puedes opinar en cualquier oficina alemana.",
      "Curiosidad: la «50+1-Regel» obliga a que los socios tengan siempre la mayoría de los votos del club. Por eso ningún inversor extranjero puede comprar un equipo alemán como si fuera un juguete, y por eso los abonos siguen siendo tan baratos que los estadios se llenan de familias.",
    ],
    vocab: [
      { it: "der Verein", es: "el club (deportivo)" },
      { it: "der Spieltag", es: "la jornada (de liga)" },
      { it: "der Absteiger", es: "el equipo que desciende" },
    ],
    question: { q: "¿Qué regula la «50+1-Regel»?", options: ["Los socios tienen siempre la mayoría de los votos del club", "El precio máximo de los abonos", "El número de extranjeros por equipo", "Los horarios de los partidos"], answer: 0, explain: "Los socios (Mitglieder) controlan el club: protege la tradición frente a inversores." },
  },
  {
    id: "de-cul-4", emoji: "♻️", category: "Sociedad", title: "Mülltrennung: separar la basura (casi) con orgullo", level: "B1", minutes: 4,
    paragraphs: [
      "En Alemania la basura no se tira: se ordena. La Mülltrennung distingue al menos cinco fracciones: Papier (papel y cartón), Verpackungen (envases plásticos y metálicos, en el contenedor amarillo), Biomüll (orgánico), Restmüll (resto) y Glas (vidrio, que además se separa por colores en contenedores públicos del barrio).",
      "El sistema descansa en el principio de que quien fabrica envases paga por su reciclaje. El resultado es una cultura de la sostenibilidad que empieza en la cocina: en muchos pisos, cada fracción tiene su cubo, y las botellas se enjuagan antes de salir de casa.",
      "Para el recién llegado, la etiqueta es estricta: el vidrio se lleva al Glascontainer, los aparatos electrónicos y las pilas jamás van al cubo normal y en algunas ciudades tirar mal puede costar una multa. Nadie te lo dirá a la cara, pero los vecinos lo notan.",
      "Curiosidad: el Pfand convierte cada botella de plástico en pequeña moneda. Los supermercados tienen máquinas que «comen» botellas y devuelven un vale de 25 céntimos; por eso ver a alguien recogiendo botellas en el parque no es humillante, es economía circular en acción.",
    ],
    vocab: [
      { it: "die Mülltrennung", es: "la separación de residuos" },
      { it: "der Biomüll", es: "la basura orgánica" },
      { it: "das Pfand", es: "el depósito de envases" },
    ],
    question: { q: "¿Cuánto vale el Pfand de una botella de plástico desechable?", options: ["25 céntimos", "5 céntimos", "1 euro", "Nada: solo el vidrio tiene Pfand"], answer: 0, explain: "Las botellas de un uso devuelven 25 céntimos en la máquina del supermercado." },
  },
  {
    id: "de-cul-5", emoji: "🤝", category: "Trabajo", title: "Duzen o siezen: el du y el Sie en el trabajo", level: "B2", minutes: 4,
    paragraphs: [
      "El alemán ofrece dos modos de dirigirse a la gente: du (tú) y Sie (usted). La frontera no la marca la gramática, sino el respeto: siezt a desconocidos, jefes y funcionarios; duzt a amigos, familiares y niños. Ofrecer el du es un pequeño regalo que se agradece.",
      "En las empresas clásicas, los colegas podían llevar veinte años tratándose de Sie. El paso al du (das Duzen) era una pequeña ceremonia: lo ofrecía el mayor, la jefa o el anfitrión, a menudo con un brindis de por medio.",
      "El cambio de época lo traen las start-ups: en las oficinas modernas de Berlín el du es estándar desde el primer día y hay empresas que lo escriben en su cultura corporativa: «Wir duzen uns». El Sie suena allí distante, casi frío.",
      "Para el estudiante, la regla de oro es sencilla: im Zweifel siezen (ante la duda, usted). Y atención al arma secreta: pasar bruscamente del du al Sie en plena discusión es la forma alemana de marcar distancia, un gesto que ningún nativo deja de notar.",
    ],
    vocab: [
      { it: "das Duzen", es: "tratarse de tú" },
      { it: "das Siezen", es: "tratarse de usted" },
      { it: "die Anrede", es: "la forma de dirigirse a alguien" },
    ],
    question: { q: "¿Quién ofrece tradicionalmente el paso al du?", options: ["El mayor, la jefa o el anfitrión", "El empleado más nuevo", "Siempre el cliente", "Nadie: el du nunca se ofrece"], answer: 0, explain: "Ofrecer el du es una ceremonia que corresponde a quien tiene más autoridad o edad." },
  },
  {
    id: "de-cul-6", emoji: "🚆", category: "Viajes y transporte", title: "Die Bahn: el país en movimiento", level: "B2", minutes: 4,
    paragraphs: [
      "Los alemanes se quejan de su tren con la pasión de quien lo ama: die Deutsche Bahn transporta cada año a miles de millones de viajeros y la puntualidad es un tema de conversación nacional, casi como el tiempo atmosférico.",
      "Desde 2023, el Deutschlandticket (el D-Ticket) permite, por una cuota mensual, viajar en todo el transporte regional del país: buses y trenes regionales incluidos. Millones de personas lo usan para ir al trabajo entre semana y para excursiones (Ausflüge) el fin de semana.",
      "La cultura ferroviaria tiene su propio idioma: der ICE (el tren de alta velocidad), die S-Bahn (el cercanías), der Nahverkehr (el transporte regional), das Gleis (la vía), umsteigen (hacer transbordo) y die Verspätung (el retraso, palabra que todo estudiante aprende rápido).",
      "Curiosidad: antes de cada salida, la voz del andén pide «Bitte zurückbleiben» (por favor, no se acerquen al borde), una frase tan icónica que hasta aparece impresa en camisetas. Y si el tren llega tarde, el viajero paciente sabe que puede reclamar parte del billete: la famosa Erstattung.",
    ],
    vocab: [
      { it: "die Verspätung", es: "el retraso" },
      { it: "umsteigen", es: "hacer transbordo" },
      { it: "der Nahverkehr", es: "el transporte regional" },
    ],
    question: { q: "¿Qué permite el Deutschlandticket?", options: ["Viajar en todo el transporte regional con una cuota mensual", "Viajar gratis en el ICE", "Aparcar gratis en todas las estaciones", "Viajar solo los domingos"], answer: 0, explain: "Por una cuota mensual fija cubre buses y trenes regionales de todo el país (no el ICE)." },
  },
];
