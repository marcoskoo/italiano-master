import type { CultureArticle } from "../../types";

/* ── Cultura estadounidense · artículos con pregunta ────────────────
   Redacción en español con ejemplos en inglés (convención: `.it` =
   inglés americano). Cada artículo cierra con un dato curioso. */

export const EN_CULTURE: CultureArticle[] = [
  {
    id: "en-cul-1", emoji: "🦃", category: "Historia", title: "Thanksgiving: el pavo y el mito", level: "B1", minutes: 4,
    paragraphs: [
      "Cada cuarto jueves de noviembre, los estadounidenses cruzan el país entero para cenar pavo con su familia: es el tráfico más intenso del año. La historia oficial remite a 1621, cuando los peregrinos de Plymouth celebraron una buena cosecha junto a los wampanoag, aunque aquel menú (venado y maíz, sin rastro de pavo) poco tiene que ver con el de hoy.",
      "La fecha no se fijó hasta 1863, cuando Abraham Lincoln la proclamó fiesta nacional en plena Guerra Civil para intentar unir al país. Desde entonces, cada presidente «perdona» simbólicamente un pavo en la Casa Blanca, y las televisiones reparten la tarde entre el desfile de Macy's, el fútbol americano y la siesta.",
      "Dato curioso: la mesa del «Thanksgiving dinner» tiene un guion casi sagrado — «green bean casserole» (gratinado de judías verdes), «cranberry sauce» (salsa de arándanos) y «pumpkin pie» (pastel de calabaza)—. Y al día siguiente llega el «Black Friday», que convierte la gratitud del jueves en descuentos del viernes.",
    ],
    vocab: [ { it: "Thanksgiving", es: "el Día de Acción de Gracias" }, { it: "the turkey", es: "el pavo" }, { it: "pumpkin pie", es: "el pastel de calabaza" } ],
    question: { q: "¿Quién fijó Thanksgiving como fiesta nacional?", options: ["Abraham Lincoln, en 1863", "George Washington, en 1776", "Los peregrinos, en 1621", "Franklin D. Roosevelt, en 1939"], answer: 0, explain: "Lincoln la proclamó en 1863, en plena Guerra Civil; la cena de 1621 es el origen mítico." },
  },
  {
    id: "en-cul-2", emoji: "🏈", category: "Deporte", title: "Super Bowl Sunday: la fiesta no oficial", level: "A2", minutes: 3,
    paragraphs: [
      "Una tarde de febrero, cerca de un tercio de Estados Unidos se sienta frente al televisor para ver el mismo partido. El «Super Bowl», la gran final del fútbol americano, es mucho más que un deporte: es el evento social del año, con fiestas en cada sala de estar y más comida consumida que en cualquier otra fecha excepto Thanksgiving.",
      "El espectáculo importa tanto como el marcador: el «halftime show» es el escenario más codiciado del planeta, y los anuncios publicitarios cuestan millones de dólares por treinta segundos. Al día siguiente, en la oficina, se comenta el comercial gracioso casi tanto como la jugada decisiva.",
      "Dato curioso: las «chicken wings» (alas de pollo) y el guacamole se agotan en los supermercados cada primer domingo de febrero, y circula desde hace años la broma de que el lunes siguiente debería ser fiesta nacional por la caída de productividad.",
    ],
    vocab: [ { it: "the Super Bowl", es: "la final del fútbol americano" }, { it: "the halftime show", es: "el espectáculo de medio tiempo" }, { it: "chicken wings", es: "las alas de pollo" } ],
    question: { q: "¿Qué se comenta en la oficina casi tanto como las jugadas?", options: ["Los anuncios publicitarios", "El precio de las entradas", "El menú del estadio", "La lista de lesionados"], answer: 0, explain: "Los anuncios de 30 segundos cuestan millones y se comentan casi tanto como el partido." },
  },
  {
    id: "en-cul-3", emoji: "🍖", category: "Gastronomía", title: "BBQ y compañía: el mapa de la comida regional", level: "A2", minutes: 3,
    paragraphs: [
      "Preguntar «where's the best BBQ?» en Estados Unidos es declarar una guerra amistosa: Texas defiende la «brisket» (pecho de res ahumado), Kansas City la salsa dulce, Memphis las costillas secas con especias y Carolina del Norte el cerdo desmenuzado con salsa de vinagre. Cada región protege su receta como cuestión de honor familiar.",
      "El mapa sigue: Nueva Inglaterra es la tierra de la «clam chowder» (sopa de almejas) y la langosta de Maine; Chicago defiende su «deep-dish pizza» de masa alta contra la fina neoyorquina; Luisiana mezcla Francia, África y el Caribe en el «gumbo»; y el suroeste no entiende el chile sin herencia mexicana.",
      "Dato curioso: el «cheesesteak» de Filadelfia se pide con una palabra en clave: «wit» (con cebolla) o «witout» (sin ella). Si dudas en la fila, el de atrás te lo recordará con cariño… o sin él.",
    ],
    vocab: [ { it: "BBQ (barbecue)", es: "la barbacoa" }, { it: "clam chowder", es: "la sopa de almejas" }, { it: "deep-dish pizza", es: "la pizza de masa alta" } ],
    question: { q: "¿Qué especialidad es la seña de Carolina del Norte?", options: ["El cerdo desmenuzado con salsa de vinagre", "La pizza de masa alta", "La sopa de almejas", "El cheesesteak con cebolla"], answer: 0, explain: "El «pulled pork» con salsa de vinagre es el orgullo de Carolina del Norte." },
  },
  {
    id: "en-cul-4", emoji: "🎓", category: "Educación", title: "College, major y campus: la universidad americana", level: "B1", minutes: 4,
    paragraphs: [
      "La universidad estadounidense empieza antes de pisar el campus: en el último año de la «high school», los estudiantes hacen exámenes de admisión, escriben ensayos personales y solicitan becas. La respuesta llega en primavera, y las familias celebran la carta de aceptación como si fuera un título.",
      "El sistema es flexible: no eliges carrera, eliges «major» (especialidad), y puedes cambiarlo o decidirlo después de dos años cursando de todo un poco («gen eds»). Vivir en residencia (el «dorm») es parte de la experiencia, con compañeros por todas partes y banderas del equipo en las ventanas.",
      "Dato curioso: el deporte lo cambia todo. En los «colleges» grandes, un partido de fútbol americano reúne a cien mil personas, los atletas son celebridades locales y la «March Madness» de baloncesto de marzo paraliza oficinas enteras llenando «brackets» (quinielas) entre compañeros.",
    ],
    vocab: [ { it: "the major", es: "la especialidad universitaria" }, { it: "the campus", es: "el campus" }, { it: "the scholarship", es: "la beca" } ],
    question: { q: "¿Qué es exactamente el «major»?", options: ["La especialidad que estudias", "El examen de admisión", "La residencia estudiantil", "La beca deportiva"], answer: 0, explain: "El «major» es la especialidad; puedes cambiarlo incluso después de haber empezado." },
  },
  {
    id: "en-cul-5", emoji: "🏞️", category: "Naturaleza", title: "Yellowstone y la invención de los parques nacionales", level: "B1", minutes: 4,
    paragraphs: [
      "En 1872, el Congreso de Estados Unidos hizo algo que ningún país había hecho antes: reservar más de dos millones de acres «for the benefit and enjoyment of the people». Nacía Yellowstone, el primer parque nacional del mundo, con sus géiseres, sus bisontes y el gran cañón del río Yellowstone.",
      "La idea se convirtió en sistema: hoy hay más de sesenta parques nacionales gestionados por el «National Park Service» (creado en 1916), del desierto del Gran Cañón a los glaciares de Alaska y los bosques de secuoyas gigantes de California. El «road trip» de verano recorriendo varios parques es un rito familiar americano, con la tienda de campaña o la caravan en remolque.",
      "Dato curioso: dormir en el fondo del Gran Cañán, en el Phantom Ranch, requiere reservar con meses de antelación, y el «Junior Ranger Program» convierte a los niños en guardabosques honorarios: completan actividades, juran proteger el parque y reciben su insignia. Muchos adultos coleccionan sellos de parques en un pasaporte oficial.",
    ],
    vocab: [ { it: "national park", es: "el parque nacional" }, { it: "geyser", es: "el géiser" }, { it: "bison", es: "el bisonte" } ],
    question: { q: "¿Cuál fue el primer parque nacional del mundo?", options: ["Yellowstone, en 1872", "El Gran Cañón", "Yosemite", "Zion"], answer: 0, explain: "Yellowstone, creado en 1872, inauguró la idea misma de parque nacional." },
  },
  {
    id: "en-cul-6", emoji: "🎵", category: "Música", title: "Del blues al hip-hop: la banda sonora de América", level: "B2", minutes: 4,
    paragraphs: [
      "Casi toda la música popular del siglo XX nació en Estados Unidos, y buena parte en un radio de pocos cientos de kilómetros: el delta del Misisipi parió el «blues», Nueva Orleans mezcló Europa, África y el Caribe hasta inventar el «jazz», y del «gospel» de las iglesias del sur salió el «soul» que Motown convirtió en la banda sonora de la integración.",
      "La cadena no se detuvo: Memphis vio nacer el «rock and roll» de Elvis, Nashville industrializó el «country», Detroit y Los Ángeles fabricaron el «pop», y en las «block parties» del Bronx de los años setenta el «hip-hop» — discos, rimas y baile — se convirtió en la voz de los barrios. Hoy es el género más escuchado del planeta.",
      "Dato curioso: el «Grand Ole Opry» de Nashville emite su programa de música country desde 1925 casi sin interrupción, y el «Apollo Theater» de Harlem mantiene el «Amateur Night», donde el público decide con aplausos o abucheos quién vuelve al escenario. En EE. UU., la música nunca fue solo entretenimiento: fue, y sigue siendo, un debate sobre quién es el país.",
    ],
    vocab: [ { it: "blues", es: "el blues" }, { it: "gospel", es: "el gospel (música religiosa)" }, { it: "hip-hop", es: "el hip-hop" } ],
    question: { q: "¿Dónde nació el hip-hop en los años setenta?", options: ["En el Bronx, Nueva York", "En Nueva Orleans", "En Nashville", "En Detroit"], answer: 0, explain: "Nació en las «block parties» del Bronx: DJ, rimas y baile." },
  },
];
