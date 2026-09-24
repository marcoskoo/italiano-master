import type { ReadingText } from "./types";

/* ── Lectura · textos graduados ───────────────────────────────────── */

export const READINGS: ReadingText[] = [
  {
    id: "rd-1", level: "A1", title: "Una postal desde Roma", titleIt: "Una cartolina da Roma",
    genre: "Postal", minutes: 2,
    paragraphs: [
      { it: "Ciao Marta! Sono arrivata a Roma ieri. Sono qui in vacanza con la mia famiglia.", es: "¡Hola Marta! Llegué a Roma ayer. Estoy aquí de vacaciones con mi familia." },
      { it: "La città è bellissima. Ogni giorno visito un posto nuovo: ieri il Colosseo, oggi il Vaticano.", es: "La ciudad es bellísima. Cada día visito un sitio nuevo: ayer el Coliseo, hoy el Vaticano." },
      { it: "La mattina facciamo colazione al bar: un caffè e un cornetto. La sera mangiamo in una trattoria vicino all'hotel.", es: "Por la mañana desayunamos en el bar: un café y un croissant. Por la noche comemos en una trattoria cerca del hotel." },
      { it: "Il tempo è buono: c'è il sole! E tu, come stai? A presto, un bacio — Anna", es: "¡Hace buen tiempo: hay sol! ¿Y tú, cómo estás? Hasta pronto, un beso — Anna" },
    ],
    glossary: [
      { it: "la vacanza", es: "las vacaciones" },
      { it: "la trattoria", es: "trattoría (restaurante familiar)" },
      { it: "un bacio", es: "un beso (cierre de carta informal)" },
    ],
    questions: ["ex-let-001", "ex-let-002"],
  },
  {
    id: "rd-2", level: "A2", title: "El sábado en el mercado", titleIt: "Il sabato al mercato",
    genre: "Relato", minutes: 3,
    paragraphs: [
      { it: "Ogni sabato mattina Marco va al mercato del quartiere. Porta sempre una borsa grande e una lista corta.", es: "Cada sábado por la mañana Marco va al mercado del barrio. Siempre lleva una bolsa grande y una lista corta." },
      { it: "Prima compra la frutta: le pesche della Romagna sono le sue preferite. Poi prende il pane dal fornaio e mezzo chilo di formaggio.", es: "Primero compra la fruta: los melocotones de Romaña son sus preferidos. Luego toma el pan del panadero y medio kilo de queso." },
      { it: "Alla fine, se non piove, si ferma a prendere un caffè con gli amici. È la sua piccola felicità del sabato.", es: "Al final, si no llueve, se para a tomar un café con los amigos. Es su pequeña felicidad del sábado." },
    ],
    glossary: [
      { it: "il quartiere", es: "el barrio" },
      { it: "la pesca", es: "el melocotón" },
      { it: "il fornaio", es: "el panadero" },
    ],
    questions: ["ex-let-003", "ex-let-005"],
  },
  {
    id: "rd-3", level: "B1", title: "La alta velocidad italiana", titleIt: "L'alta velocità italiana",
    genre: "Noticia adaptada", minutes: 4,
    paragraphs: [
      { it: "L'Italia ha una delle reti ferroviarie ad alta velocità più efficienti d'Europa. La Frecciarossa collega Milano a Roma in poco più di tre ore, viaggiando fino a 300 chilometri all'ora.", es: "Italia tiene una de las redes ferroviarias de alta velocidad más eficientes de Europa. La Frecciarossa conecta Milán con Roma en poco más de tres horas, viajando hasta 300 kilómetros por hora." },
      { it: "Accanto a Trenitalia opera anche Italo, l'azienda privata che ha introdotto la concorrenza sul mercato. Per i passeggeri questo significa prezzi più bassi e servizi migliori.", es: "Junto a Trenitalia opera también Italo, la empresa privada que introdujo la competencia en el mercado. Para los pasajeros esto significa precios más bajos y mejores servicios." },
      { it: "Le stazioni sono diventate luoghi di incontro: bar, librerie e negozi accolgono milioni di viaggiatori ogni giorno. Il treno, in Italia, è tornato protagonista.", es: "Las estaciones se han convertido en lugares de encuentro: bares, librerías y tiendas acogen a millones de viajeros cada día. El tren, en Italia, ha vuelto a ser protagonista." },
    ],
    glossary: [
      { it: "la rete", es: "la red" },
      { it: "il passeggero", es: "el pasajero" },
      { it: "il protagonista", es: "el protagonista" },
    ],
    questions: ["ex-let-004"],
  },
  {
    id: "rd-4", level: "B2", title: "El mito del made in Italy", titleIt: "Il mito del made in Italy",
    genre: "Artículo", minutes: 5,
    paragraphs: [
      { it: "“Made in Italy” è molto più di un'etichetta: è un racconto di qualità, design e tradizione che il mondo riconosce immediatamente.", es: "“Hecho en Italia” es mucho más que una etiqueta: es un relato de calidad, diseño y tradición que el mundo reconoce de inmediato." },
      { it: "Dalla moda all'alimentazione, dal design alla meccanica di precisione, il marchio italiano vende un'idea di bellezza. Ma quanto pesa la qualità percepita rispetto a quella reale?", es: "De la moda a la alimentación, del diseño a la mecánica de precisión, la marca italiana vende una idea de belleza. Pero ¿cuánto pesa la calidad percibida frente a la real?" },
      { it: "Gli esperti concordano: la narrazione conta, però senza le competenze concrete delle piccole e medie imprese il mito crollerebbe. L'eccellenza italiana nasce nei laboratori artigiani come nelle fabbriche innovative.", es: "Los expertos coinciden: la narrativa cuenta, pero sin las competencias concretas de las pequeñas y medianas empresas el mito se derrumbaría. La excelencia italiana nace en los talleres artesanos como en las fábricas innovadoras." },
    ],
    glossary: [
      { it: "il marchio", es: "la marca" },
      { it: "la competenza", es: "la competencia / el saber hacer" },
      { it: "artigiano", es: "artesano" },
    ],
    questions: ["ex-let-006"],
  },
  {
    id: "rd-5", level: "A1", title: "Mi presento", titleIt: "Mi presento",
    genre: "Autopresentación", minutes: 1,
    paragraphs: [
      { it: "Mi chiamo Luca. Ho vent'anni e sono studente all'università di Bologna.", es: "Me llamo Luca. Tengo veinte años y soy estudiante en la universidad de Bolonia." },
      { it: "Studio economia e lavoro il sabato in un bar del centro. Abito con due amici in un appartamento piccolo ma allegro.", es: "Estudio economía y trabajo los sábados en un bar del centro. Vivo con dos amigos en un apartamento pequeño pero alegre." },
      { it: "Nel tempo libero gioco a calcio e ascolto musica italiana: adoro Jovanotti!", es: "En el tiempo libre juego al fútbol y escucho música italiana: ¡adoro a Jovanotti!" },
    ],
    glossary: [
      { it: "il tempo libero", es: "el tiempo libre" },
      { it: "l'appartamento", es: "el apartamento" },
    ],
    questions: ["ex-let-002"],
  },
  {
    id: "rd-6", level: "C1", title: "El silencio de Ginzburg", titleIt: "Il silenzio di Ginzburg",
    genre: "Crítica literaria", minutes: 6,
    paragraphs: [
      { it: "Natalia Ginzburg scriveva come si respira: frasi brevi, lessico familiare, una prosa che sembra semplice e invece contiene abissi. Il suo “Lessico famigliare” (1963) trasforma il dizionario privato di una famiglia in romanzo.", es: "Natalia Ginzburg escribía como se respira: frases breves, léxico familiar, una prosa que parece simple y sin embargo contiene abismos. Su “Léxico familiar” (1963) transforma el diccionario privado de una familia en novela." },
      { it: "La critica ha parlato di “antiretorica”: Ginzburg non spiega i sentimenti, li mostra attraverso i dettagli quotidiani. È una lezione di stile che ogni scrittore dovrebbe imparare.", es: "La crítica ha hablado de “antirretórica”: Ginzburg no explica los sentimientos, los muestra a través de los detalles cotidianos. Es una lección de estilo que cada escritor debería aprender." },
    ],
    glossary: [
      { it: "l'abisso", es: "el abismo" },
      { it: "la quotidianità", es: "la cotidianidad" },
      { it: "l'antiretorica", es: "la antirretórica" },
    ],
    questions: ["ex-let-006"],
  },
];
