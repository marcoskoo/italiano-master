import type { CultureArticle } from "../../types";

/* ── Cultura francesa · artículos con pregunta (Francia) ──────────
   Redacción en español con ejemplos en francés, tal como el
   ejemplar canónico italiano. 6 artículos: Révolution française,
   impressionnisme, gastronomie et terroir, laïcité et école, TGV
   et mobilité, chanson française. Cada artículo cierra con una
   curiosidad y una pregunta de comprensión.                       */

export const FR_CULTURE: CultureArticle[] = [
  {
    id: "fr-cul-1", emoji: "🏛️", category: "Historia", title: "La Revolución francesa: el mundo moderno nace en París", level: "B2", minutes: 5,
    paragraphs: [
      "En 1789, Francia era el reino del privilegio: la nobleza y el clero apenas pagaban impuestos, mientras el « tiers état » —el estado llano: burgueses, campesinos y artesanos— cargaba con todo. Cuando Luis XVI convocó los Estados Generales para resolver la crisis financiera, nadie imaginaba que en tres meses caería la Bastilla.",
      "El 14 de julio de 1789, los parisinos tomaron la fortaleza-prisión de la Bastilla, símbolo del absolutismo. Poco después, la Asamblea proclamó la « Déclaration des droits de l'homme et du citoyen », cuyo artículo primero sigue sonando revolucionario: « Les hommes naissent et demeurent libres et égaux en droits ».",
      "La Revolución trajo además el sistema métrico, el calendario republicano y, durante un tiempo, el « tu » universal entre ciudadanos: todos eran « citoyen » y « citoyenne ». Muchas de esas palabras —« député », « référendum », « constitution »— cruzaron fronteras y hoy las usamos en medio mundo.",
      "De aquellos años, Francia heredó su lema —« Liberté, Égalité, Fraternité »—, su bandera tricolor y su pasión por el debate político. Curiosidad: la guillotina se usó en Francia hasta 1977, el mismo año en que se estrenó La guerra de las galaxias.",
    ],
    vocab: [
      { it: "le tiers état", es: "el estado llano" },
      { it: "la Déclaration des droits de l'homme et du citoyen", es: "la Declaración de los derechos del hombre y del ciudadano" },
      { it: "la Bastille", es: "la Bastilla" },
      { it: "Liberté, Égalité, Fraternité", es: "Libertad, Igualdad, Fraternidad" },
    ],
    question: {
      q: "¿Qué documento proclamó la Asamblea en agosto de 1789?",
      options: ["El Imperio francés", "La Declaración de los derechos del hombre y del ciudadano", "La Comuna de París", "La Unión Europea"],
      answer: 1,
      explain: "Es la base de los derechos humanos modernos: « Les hommes naissent et demeurent libres et égaux en droits ».",
    },
  },
  {
    id: "fr-cul-2", emoji: "🎨", category: "Arte", title: "El impresionismo: pintar la luz al aire libre", level: "B1", minutes: 4,
    paragraphs: [
      "En abril de 1874, un grupo de pintores « rechazados » por el Salón oficial expuso en el estudio del fotógrafo Nadar, en París. Un crítico, al ver el cuadro « Impression, soleil levant » de Monet, los bautizó con desprecio: « impresionistas ». El insulto se convirtió en nombre de gloria.",
      "Su revolución fue técnica y filosófica: salir del taller (« peindre sur le motif »), pintar al aire libre y atrapar el instante. Renoir, Sisley, Pissarro o Degas rompieron con el acabado perfecto del arte académico para trabajar con pinceladas rápidas y colores puros.",
      "También cambiaron los temas: la vida moderna, las estaciones de tren, los cafés-concierto, el Sena en un domingo de verano. Monet pintó la catedral de Rouen casi treinta veces, una por cada luz distinta del día.",
      "Hoy esos cuadros valen fortunas y llenan el musée d'Orsay de París. Curiosidad: « Impression, soleil levant » fue robado del musée Marmottan en 1985 y recuperado en 1990; desde entonces casi nunca viaja.",
    ],
    vocab: [
      { it: "l'impressionnisme", es: "el impresionismo" },
      { it: "peindre sur le motif", es: "pintar del natural (al aire libre)" },
      { it: "le musée d'Orsay", es: "el museo de Orsay" },
      { it: "une pincelade", es: "una pincelada" },
    ],
    question: {
      q: "¿De dónde viene el nombre « impresionismo »?",
      options: ["De un periódico de Lyon", "De una técnica fotográfica", "De un cuadro de Monet: « Impression, soleil levant »", "De un tren nocturno"],
      answer: 2,
      explain: "El crítico Louis Leroy lo acuñó en 1874 para burlarse del cuadro de Monet, y el grupo adoptó el nombre con orgullo.",
    },
  },
  {
    id: "fr-cul-3", emoji: "🧀", category: "Gastronomía", title: "El terroir: la geografía en el plato", level: "A2", minutes: 3,
    paragraphs: [
      "En Francia no se come simplemente « bien »: se come « de un lugar ». Esa es la idea del « terroir »: un territorio con su suelo, su clima y su saber hacer, que termina expresándose en el plato.",
      "Así, el champagne solo puede llamarse champagne si viene de Champagne; el comté envejece en las « fruitières » del Jura; y el poulet de Bresse, el único pollo francés con denominación de origen, lleva su etiqueta roja, azul y blanca como si fuera un ciudadano de honor.",
      "El queso es la enciclopedia del terroir: más de mil variedades, una por valle y casi una por pueblo. El general De Gaulle lo resumió con humor: « Comment gouverner un pays qui a plus de 300 sortes de fromages ? » — ¿cómo gobernar un país que tiene más de 300 quesos?",
      "Para quien estudia francés, el terroir es vocabulario puro: « un grand cru », « l'appellation d'origine », « le producteur »… Curiosidad: el saber hacer artesanal de la baguette es patrimonio cultural inmaterial de la UNESCO desde 2022.",
    ],
    vocab: [
      { it: "le terroir", es: "el terroir (territorio y saber hacer)" },
      { it: "l'appellation d'origine", es: "la denominación de origen" },
      { it: "le fromage", es: "el queso" },
      { it: "le producteur", es: "el productor" },
    ],
    question: {
      q: "¿Cuántas variedades de queso se fabrican aproximadamente en Francia?",
      options: ["Solo veinte", "Cinco", "Más de mil", "Exactamente 300"],
      answer: 2,
      explain: "De Gaulle hablaba de « más de 300 » en su época; hoy se cuentan más de mil variedades registradas.",
    },
  },
  {
    id: "fr-cul-4", emoji: "🏫", category: "Sociedad", title: "La laïcité: la escuela sin religión", level: "B2", minutes: 4,
    paragraphs: [
      "En Francia, un alumno de una escuela pública no lleva símbolos religiosos visibles: ni velo, ni kippa, ni cruz de gran tamaño. No es una medida contra una religión concreta: es la « laïcité », un principio que separa estrictamente el Estado de las religiones desde la ley de 1905.",
      "El origen es histórico: durante siglos, la Iglesia católica dirigía buena parte de la enseñanza. La República construyó la escuela « gratuite, obligatoire et laïque » —gratuita, obligatoria y laica— con las leyes de Jules Ferry (1882), y el maestro sustituyó al cura como figura de autoridad.",
      "La laïcité no es hostilidad religiosa: garantiza que cada cual crea o no crea como quiera, siempre que el espacio público se mantenga neutral. Pero el debate sigue vivo: en 2004 una ley prohibió los símbolos religiosos « ostensibles » en las escuelas públicas y cada caso enciende la conversación nacional.",
      "Curiosidad: la tarde libre del miércoles de los escolares franceses viene de lejos: en 1882 se reservaba el jueves para la catequesis, y la tradición sobrevivió cambiando de día.",
    ],
    vocab: [
      { it: "la laïcité", es: "la laicidad (separación Estado-religión)" },
      { it: "l'école publique", es: "la escuela pública" },
      { it: "gratuit, obligatoire et laïque", es: "gratuita, obligatoria y laica" },
      { it: "un symbole religieux ostensible", es: "un símbolo religioso visible" },
    ],
    question: {
      q: "¿Qué ley creó el marco actual de la laïcité francesa?",
      options: ["La ley de separación de las Iglesias y el Estado de 1905", "La ley de 1789", "Un decreto europeo de 1992", "La ley Guizot de 1833"],
      answer: 0,
      explain: "La ley de 1905 separó las Iglesias y el Estado; la escuela laica de Ferry la había anticipado en 1882.",
    },
  },
  {
    id: "fr-cul-5", emoji: "🚄", category: "Transporte", title: "El TGV: el país que se encogió", level: "A2", minutes: 3,
    paragraphs: [
      "Antes de 1981, viajar de París a Lyon tomaba casi cuatro horas en tren. El 27 de septiembre de ese año, el « train à grande vitesse » inauguró la línea París-Lyon y dejó el trayecto en dos horas y media: Francia entró en la era de la alta velocidad.",
      "El TGV cambió la geografía del país: se puede desayunar en París, almorzar en Lyon y cenar en Marsella. Los « navetteurs » de gran velocidad viven en una ciudad y trabajan en otra, y el mapa de Francia parece cada vez más pequeño.",
      "Para el estudiante, el TGV es una lección de vocabulario viajero: « un aller-retour », « le quai numéro douze », « la voiture-bar »… Y conviene saber que hay tarifas « Prem's » muy baratas si reservas con antelación.",
      "Curiosidad: el récord mundial de velocidad sobre rieles lo tiene un TGV: 574,8 km/h en 2007, en la línea París-Estrasburgo, más rápido que muchos aviones en el momento del despegue.",
    ],
    vocab: [
      { it: "le TGV (train à grande vitesse)", es: "el TGV (tren de gran velocidad)" },
      { it: "un aller-retour", es: "un billete de ida y vuelta" },
      { it: "le quai", es: "el andén" },
      { it: "un navetteur", es: "un viajero pendular" },
    ],
    question: {
      q: "¿Qué velocidad récord alcanzó un TGV en 2007?",
      options: ["300 km/h", "574,8 km/h", "150 km/h", "980 km/h"],
      answer: 1,
      explain: "574,8 km/h, récord mundial sobre rieles, conseguido el 3 de abril de 2007 en la LGV Est.",
    },
  },
  {
    id: "fr-cul-6", emoji: "🎤", category: "Música", title: "La chanson française: poesía con acordeón", level: "B1", minutes: 4,
    paragraphs: [
      "La « chanson française » es mucho más que pop en francés: es un género con reglas no escritas donde la letra manda. Sus padres fundadores son Georges Brassens, Léo Ferré y Jacques Brel —belga, adoptado como propio—, poetas con guitarra que pusieron a Verlaine y Aragon en la radio.",
      "El género tiene su árbol genealógico: Édith Piaf enseñó al mundo a llorar con « Non, je ne regrette rien », los años sesenta bailaron el « yé-yé » de Françoise Hardy y Sylvie Vartan, y las décadas siguientes escucharon a Aznavour y a Renaud contar la calle.",
      "La línea sigue viva: Zaz mezcla el jazz manouche, Grand Corps Malade habla en « slam », y el belga Stromae lleva la chanson al mundo electrónico. La tradición importa menos que la exigencia: decir algo con palabras cuidadas.",
      "Para quien estudia francés, la chanson es oro: dicción clara, gramática real y cultura en tres minutos. Curiosidad: « La Vie en rose » de Piaf la han cantado Louis Armstrong, Grace Jones y Lady Gaga, que la interpretó en la apertura de los Juegos de París 2024.",
    ],
    vocab: [
      { it: "la chanson française", es: "la canción francesa (género)" },
      { it: "le couplet", es: "la estrofa" },
      { it: "le refrain", es: "el estribillo" },
      { it: "un auteur-compositeur-interprète", es: "un cantautor" },
    ],
    question: {
      q: "¿Qué es un « auteur-compositeur-interprète »?",
      options: ["Un productor discográfico", "Un presentador de radio", "Un tipo de acordeón", "Un cantautor: escribe, compone e interpreta"],
      answer: 3,
      explain: "Es el ideal de la chanson: el artista que firma la letra, la música y la voz, como Brassens o Brel.",
    },
  },
];
