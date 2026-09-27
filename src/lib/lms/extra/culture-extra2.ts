import type { CultureArticle } from "../types";

/* ── Cultura EXTRA · paquete v4.0 (cul-16…cul-21) ──────────────────── */

export const CULTURE_EXTRA_2: CultureArticle[] = [
  {
    id: "cul-16", emoji: "🏁", category: "Tradizioni", title: "El Palio de Siena: caballos, contrade y orgullo", level: "B1", minutes: 4,
    paragraphs: [
      "Dos veces al año, el 2 de julio y el 16 de agosto, la Piazza del Campo se transforma en un anillo de tierra batida: es el Palio, la carrera de caballos más famosa (y más discutida) de Italia. Montan a pelo, sin silla, jinetes de diecisiete contrade, los barrios medievales en que se divide Siena.",
      "El Palio no es una fiesta folclórica de museo: es una guerra ritual que se juega todo el año, con alianzas, traiciones y pactos que los seneses comentan como analistas políticos. Quien gana, llora de alegría; quien pierde, espera el próximo año como una herida abierta.",
      "Y sí: también hay quien lo critica por el trato a los animales. El debate forma parte del Palio mismo, como el cortejo histórico y la bandera. Si vas, recuerda una regla de oro: entra en la plaza por la mañana, aguanta sin sombra horas, y no te sientes nunca en el espacio de los seneses de a pie. El centro de la plaza es suyo, pero ese día el mundo es del Palio.",
    ],
    vocab: [
      { it: "la contrada", es: "el barrio histórico (con escudo, museo y fuente bautismal propios)" },
      { it: "a pelo", es: "a pelo (sin silla)" },
      { it: "il corteo storico", es: "el cortejo histórico en traje medieval" },
    ],
    question: { q: "¿Cuántas contrade participan en cada carrera del Palio?", options: ["Diecisiete", "Diez", "Veinte", "Siete"], answer: 0, explain: "Las contrade son diecisiete, pero solo diez corren en cada Palio: las siete que no corrieron el año anterior y tres sorteadas." },
  },
  {
    id: "cul-17", emoji: "🎭", category: "Cinema", title: "La commedia all'italiana: reír para no llorar", level: "B2", minutes: 5,
    paragraphs: [
      "Entre los años cincuenta y setenta, el cine italiano inventó una forma única de comedia: la commedia all'italiana. Detrás de las risas había amargura: el milagro económico, la emigración, el boom de la especulación. Totò, Alberto Sordi, Ugo Tognazzi, Monica Vitti y sobre todo Marcello Mastroianni hicieron de la imperfección humana un espejo nacional.",
      "Películas como «Il sorpasso» (Dino Risi, 1962) cuentan el país mejor que muchos libros de historia: un estudiante tímido y un vividor cruzan Italia en un Lancia Aurelia durante el Ferragosto, entre fiestas vacías y carreteras mortales. El final, seco como un latigazo, enseñó al mundo entero qué significaba «commedia all'italiana».",
      "La lección del género es una lección de lengua también: el humor italiano vive de la litote, de la frase dichosa, del silencio después de la boutade. Quien quiere entender a los italianos no debe solo estudiar la gramática: debe ver «Pane e cioccolata» y descubrir por qué un emigrante italiano en Suiza elige el alemán antes que renunciar a su chocolate.",
    ],
    vocab: [
      { it: "il sorpasso", es: "el adelantamiento (y la superación social)" },
      { it: "il vividor / il papavero", es: "el vividor, el que va a su bola" },
      { it: "la boutade", es: "la salida ingeniosa (galicismo del italiano coloquial)" },
    ],
    question: { q: "¿Qué película de Dino Risi (1962) es considerada la cumbre de la commedia all'italiana?", options: ["Il sorpasso", "La dolce vita", "Roma città aperta", "Nuovo Cinema Paradiso"], answer: 0, explain: "«Il sorpasso» (1962), con Vittorio Gassman y Jean-Louis Trintignant: el road movie del milagro económico." },
  },
  {
    id: "cul-18", emoji: "🏛️", category: "Storia", title: "El Risorgimento: hacer (y deshacer) Italia", level: "B2", minutes: 5,
    paragraphs: [
      "«Abbiamo fatto l'Italia, ora dobbiamo fare gli italiani»: la frase (atribuida a Massimo d'Azeglio) resume el problema del Risorgimento, el movimiento que entre 1815 y 1871 unificó una península de estados pequeños en un solo reino. Cavour lo planeó, Garibaldi lo conquistó, Vittorio Emanuele II lo coronó: el trío perfecto de la mitología escolar italiana.",
      "La realidad fue más compleja: revoluciones fracasadas (1848-49), guerras de independencia, plebiscitos con votos más que dudosos, y un sur que no entendió la unificación como liberación, sino como conquista. El brigantaggio postunitario fue una guerra civil olvidada durante un siglo.",
      "El Risorgimento dejó al italiano dos palabras que todavía usa todos los días: «patria» (que suena retórica) y «unità» (que suena ferroviaria: la Autostrada del Sole se llamó «strada delle unità»). Comprender el Risorgimento es comprender por qué el himno italiano («Il Canto degli Italiani», de los hermanos Mameli) es una lista de batallas con música: los italianos lo cantan sin pensarlo, como quien recita el catálogo de una fundación.",
    ],
    vocab: [
      { it: "il Risorgimento", es: "el Resurgimiento (proceso de unificación italiana)" },
      { it: "il brigantaggio", es: "el bandolerismo postunitario del Sur" },
      { it: "il plebiscito", es: "el plebiscito (votación popular de anexión)" },
    ],
    question: { q: "¿Quién dijo (según la tradición) «Abbiamo fatto l'Italia, ora dobbiamo fare gli italiani»?", options: ["Massimo d'Azeglio", "Cavour", "Garibaldi", "Mazzini"], answer: 0, explain: "Se atribuye a Massimo d'Azeglio, estadista piamontés: hecha Italia, quedaba hacer a los italianos." },
  },
  {
    id: "cul-19", emoji: "☕", category: "Tradizioni", title: "El rito del café: una guía de supervivencia", level: "A2", minutes: 3,
    paragraphs: [
      "El café en Italia no es una bebida: es una gramática. El «caffè» a secas es un espresso; el «caffè macchiato» lleva una nube de leche; el «caffè corretto» lleva un chorrito de licor (corretto = «corregido»). El «cappuccino» se toma solo por la mañana: pedirlo después de comer marca al turista más que la gorra y el mapa.",
      "La regla de oro es el banco (la barra): el espresso se bebe de pie, en dos sorbos, hablando con el camarero. Sentarse a la mesa puede costar el doble o el triple: no es una estafa, es el precio del tiempo que ocupas. En el bar de barrio, la cuenta a menudo se paga después, de memoria: el camarero sabe lo que has tomado mejor que tú.",
      "Y la palabra mágica es «un caffè?»: en Italia se ofrece café como en otros países se ofrece un whisky o una terapia. Acepta siempre. Es la manera más rápida de pasar de «lei» a «tu», de desconocido a amigo.",
    ],
    vocab: [
      { it: "il banco", es: "la barra del bar" },
      { it: "macchiato", es: "«manchado» con un poco de leche" },
      { it: "corretto", es: "«corregido» con licor" },
    ],
    question: { q: "¿Cuándo se considera «normal» pedir un cappuccino en Italia?", options: ["Solo por la mañana (hasta el mediodía)", "Después de cenar", "A cualquier hora", "Solo en verano"], answer: 0, explain: "El cappuccino es bebida de desayuno: pedirlo después de una comida es la marca del turista (aunque nadie te lo dirá a la cara)." },
  },
  {
    id: "cul-20", emoji: "🎶", category: "Musica", title: "La canzone d'autore: de Modugno a Conti", level: "C1", minutes: 5,
    paragraphs: [
      "En 1958, Domenico Modugno cantó «Nel blu dipinto di blu» en Sanremo y el mundo entero aprendió a decir «volare»: fue el primer éxito global de la música italiana. Pero la canzone d'autore era algo más que un éxito: era la unión de poesía y música popular, con firmas como Fabrizio De André, Francesco De Gregori, Lucio Dalla y Paolo Conte.",
      "De André contaba a los perdedores («Bocca di rosa», «Il pescatore») con la voz de un arcángel cansado; Dalla improvisaba historias de cine («Caruso», escrita con Rondo); Paolo Conte, abogado de Asti, convertía el swing en pintura metafísica («Via con me»). Cantar a lo De André es un rito de iniciación en cada generación italiana.",
      "Para el estudiante de italiano, la canzone d'autore es un gimnasio perfecto: pronunciación clara, metáforas accesibles, cultura compartida. Empieza por «La guerra di Piero» (De André), sigue con «Generale» (De Gregori) y termina, si te atreves, con «Azzurro» (Conte/Adriano Celentano): cuando entiendas por qué «mi amore perduto è azzurro», habrás entendido no solo la lengua, sino la melancolía alegre de un país entero.",
    ],
    vocab: [
      { it: "la canzone d'autore", es: "la canción de autor (letra y música del mismo artista)" },
      { it: "il cantautore", es: "el cantautor" },
      { it: "il Festival di Sanremo", es: "el festival de Sanremo (desde 1951, la institutriz musical del país)" },
    ],
    question: { q: "¿Quién escribió «Nel blu dipinto di blu» (Volare), el primer gran éxito global italiano?", options: ["Domenico Modugno", "Lucio Dalla", "Fabrizio De André", "Paolo Conte"], answer: 0, explain: "Domenico Modugno, Sanremo 1958: «Volare, oh oh, cantare, oh oh oh oh»." },
  },
  {
    id: "cul-21", emoji: "⚽", category: "Sport", title: "El calcio como lengua nacional", level: "B1", minutes: 4,
    paragraphs: [
      "El italiano que dice que el fútbol no le interesa miente, o es un filósofo (o ambos). El calcio no es un deporte nacional: es una lengua nacional, con su sintaxis (il modulo, il catenaccio, il fuorigioco), su vocabulario afectivo (il magico destro, la beffa) y sus dialectos (Juventus, Milan, Napoli, Roma: cada uno con su teología).",
      "Los domingos, la mesa italiana se divide: el tifoso de la Juventus y el de la Napoli pueden quererse mucho, pero ese día comen en cuartos separados. Y el lunes, la lengua nacional se reduce a una sola pregunta: «Hai visto la partita?» — y por un momento, incluso los que «no le interesa» tienen una opinión sobre el árbitro.",
      "Para el estudiante, el fútbol es una vía rápida a la conversación: aprende diez palabras (gol, rigore, fuorigioco, cartellino, golpare all'ultimo minuto) y tendrás tema para mil cafés. Y si un día entiendes por qué un gol en el minuto 93 puede llamarse «una beffa», ya no estás estudiando italiano: estás viviéndolo.",
    ],
    vocab: [
      { it: "il tifoso", es: "el hincha" },
      { it: "il fuorigioco", es: "el fuera de juego" },
      { it: "la beffa", es: "la burla cruel (gol que roba el partido al final)" },
    ],
    question: { q: "¿Qué significa «la beffa» en el lenguaje del fútbol italiano?", options: ["El gol que roba el partido al final", "El himno antes del partido", "La lesión de un jugador", "El derbi entre dos ciudades"], answer: 0, explain: "La beffa es la burla cruel: el gol en el último minuto que le roba el resultado al rival." },
  },
];
