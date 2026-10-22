import type { CbClozeText } from "../../cambridge";

/* ═══ EN A2 · Cloze readings — 3 por unidad (inferencia léxica) ══════
   Metodología v9.12: el texto en inglés americano lleva marcadores
   {1} {2}… que el reproductor convierte en huecos; el estudiante deduce
   la palabra por el contexto. Campos: `.it` = inglés, `.es` = español. */

export const EN_CLOZE_A2: Record<string, CbClozeText[]> = {
  "en-cu-a2-01": [
    {
      id: "cz-en-a2-01-1", title: "The tailgate party", titleEs: "La fiesta tailgate", minutes: 3,
      paragraphs: [
        { it: "Last Sunday, my brother and I had a {1} party before the Bears game. We arrived at the stadium parking lot four hours early, opened the back of his pickup truck and started the {2}. The smell of burgers traveled across the lot, and our neighbors offered us some cold sodas.", es: "El domingo pasado, mi hermano y yo hicimos una fiesta tailgate antes del partido de los Bears. Llegamos al estacionamiento del estadio cuatro horas antes, abrimos la caja de su camioneta y encendimos la parrilla. El olor a hamburguesas recorría el estacionamiento y nuestros vecinos nos ofrecieron unos refrescos fríos." },
        { it: "We {3} about the season while the meat was cooking. The Bears played badly that afternoon and {4} the game, but nobody at the tailgate seemed to care. It was my first time, and I will never {5} it.", es: "Hablamos de la temporada mientras la carne se cocinaba. Los Bears jugaron mal esa tarde y perdieron el partido, pero a nadie en el tailgate pareció importarle. Fue mi primera vez y nunca lo olvidaré." },
      ],
      gaps: [
        { options: ["costume", "tailgate", "birthday"], answer: 1, why: "«Antes del partido de los Bears», camioneta y estacionamiento: es la fiesta tailgate." },
        { options: ["grill", "oven", "dishwasher"], answer: 0, why: "El olor a hamburguesas en el estacionamiento señala la parrilla." },
        { options: ["slept", "cried", "talked"], answer: 2, why: "«About the season»: se conversa sobre la temporada." },
        { options: ["lost", "won", "bought"], answer: 0, why: "«Played badly» → perdieron, no ganaron." },
        { options: ["forget", "eat", "pay"], answer: 0, why: "«It was my first time» + emoción: nunca lo olvidaré." },
      ],
    },
    {
      id: "cz-en-a2-01-2", title: "Treasures at the yard sale", titleEs: "Tesoros en el yard sale", minutes: 2,
      paragraphs: [
        { it: "On Saturday morning, the whole street woke up to a yard sale. Our neighbors put their old things on tables in front of the {1}: books, toys, a guitar and two lamps. Everything was really {2}, so people stopped to look.", es: "El sábado por la mañana, toda la calle amaneció con un yard sale. Nuestros vecinos pusieron sus cosas viejas en mesas frente a la casa: libros, juguetes, una guitarra y dos lámparas. Todo estaba muy barato, así que la gente se detenía a mirar." },
        { it: "I found a {3} lamp for two dollars and an old baseball cap. My mom talked with the owner for twenty minutes and {4} a box of plates for five. At noon, the tables were almost {5} — the street looked like a small market.", es: "Encontré una lámpara linda por dos dólares y una gorra vieja de béisbol. Mi mamá habló con el dueño veinte minutos y compró una caja de platos por cinco. Al mediodía, las mesas estaban casi vacías: la calle parecía un mercado pequeño." },
      ],
      gaps: [
        { options: ["airport", "house", "hospital"], answer: 1, why: "En un yard sale se vende frente a la casa." },
        { options: ["cheap", "expensive", "heavy"], answer: 0, why: "La gente se detiene a mirar porque todo está barato." },
        { options: ["broken", "noisy", "nice"], answer: 2, why: "La compra por dos dólares implica que la lámpara era linda, no rota." },
        { options: ["bought", "sold", "lost"], answer: 0, why: "«A box of plates for five (dollars)»: la compró por cinco." },
        { options: ["full", "closed", "empty"], answer: 2, why: "Tras las compras del mediodía, las mesas quedaron casi vacías." },
      ],
    },
    {
      id: "cz-en-a2-01-3", title: "The new intern's weekend", titleEs: "El fin de semana del nuevo pasante", minutes: 2,
      paragraphs: [
        { it: "«How was your {1}?» asked Megan on Monday morning. It was my first weekend in Chicago, so I had a long answer. On Saturday I {2} to Navy Pier with two classmates and we saw the lake from the Ferris wheel.", es: "«¿Cómo estuvo tu fin de semana?», preguntó Megan el lunes por la mañana. Era mi primer fin de semana en Chicago, así que tenía una respuesta larga. El sábado fui a Navy Pier con dos compañeros de clase y vimos el lago desde la rueda de la fortuna." },
        { it: "After that, we ate deep-dish {3} at a famous place downtown — one slice was enough for me! On Sunday I didn't do much: I did my {4}, called my parents and packed my lunch for the week. «Busy and delicious», said Megan. «Welcome to Chicago!» I was {5} but happy.", es: "Después de eso, comimos pizza de masa profunda en un lugar famoso del centro: ¡un trozo me bastó! El domingo no hice mucho: lavé mi ropa, llamé a mis padres y preparé mi almuerzo de la semana. «Ocupado y delicioso», dijo Megan. «¡Bienvenido a Chicago!» Estaba cansado pero feliz." },
      ],
      gaps: [
        { options: ["weekend", "birthday", "vacation"], answer: 0, why: "Es lunes por la mañana: Megan pregunta por el fin de semana." },
        { options: ["goed", "went", "go"], answer: 1, why: "Pasado simple del irregular go: went." },
        { options: ["soup", "sushi", "pizza"], answer: 2, why: "«Deep-dish» + un trozo enorme: la pizza profunda de Chicago." },
        { options: ["laundry", "homework", "shopping"], answer: 0, why: "Rutina dominal clásica: did my laundry = lavé mi ropa." },
        { options: ["angry", "tired", "lost"], answer: 1, why: "Fin de semana ocupado + «but happy» = cansado pero feliz." },
      ],
    },
  ],

  "en-cu-a2-02": [
    {
      id: "cz-en-a2-02-1", title: "My first week as a barista", titleEs: "Mi primera semana como barista", minutes: 3,
      paragraphs: [
        { it: "My first week at the coffee shop in Seattle was crazy. At 7 a. m., the line was already out the {1}, and everybody wanted their coffee «to go». My manager taught me the sizes first: tall, grande and venti. «'Medium' does not {2} here», she said with a smile.", es: "Mi primera semana en la cafetería de Seattle fue una locura. A las 7 a. m., la fila ya salía por la puerta y todos querían su café «para llevar». Mi gerente me enseñó primero los tamaños: tall, grande y venti. «Aquí 'medium' no existe», dijo con una sonrisa." },
        { it: "I also learned to write the customer's {3} on the cup and call it out when the drink was ready. By Friday, I could make a latte without looking at the {4}. The regulars left coins in the tip jar every morning, and one of them said, «See you {5}, honey!». Seattle people really love their coffee.", es: "También aprendí a escribir el nombre del cliente en el vaso y anunciarlo cuando la bebida estaba lista. Para el viernes, ya podía hacer un latte sin mirar la receta. Los habituales dejaban monedas en el frasco de propinas cada mañana y uno de ellos dijo: «¡Nos vemos mañana, cariño!». La gente de Seattle de verdad ama su café." },
      ],
      gaps: [
        { options: ["door", "window", "menu"], answer: 0, why: "«The line was already out the…»: la fila llegaba hasta la puerta." },
        { options: ["pay", "exist", "drink"], answer: 1, why: "En las cadenas los tamaños son tall/grande/venti: 'medium' no existe ahí." },
        { options: ["address", "name", "order"], answer: 1, why: "Se escribe el nombre del cliente en el vaso para llamarlo." },
        { options: ["recipe", "phone", "clock"], answer: 0, why: "Hacer un latte sin mirar la receta: ya se la sabía." },
        { options: ["tomorrow", "never", "yesterday"], answer: 0, why: "Cliente habitual cada mañana: «nos vemos mañana»." },
      ],
    },
    {
      id: "cz-en-a2-02-2", title: "The allergy question", titleEs: "La pregunta de la alergia", minutes: 2,
      paragraphs: [
        { it: "At the coffee shop, a customer asked: «Do you have any {1} options? I'm allergic to nuts.» The barista checked the labels and answered: «Not today, sorry. But there aren't {2} nuts in the banana bread.»", es: "En la cafetería, un cliente preguntó: «¿Tienen algunas opciones sin frutos secos? Soy alérgico a los frutos secos». El barista revisó las etiquetas y respondió: «Hoy no, lo siento. Pero el pan de banano no lleva ningún fruto seco»." },
        { it: "The customer thanked him and ordered the banana bread with {3} honey. «For here or to {4}?» asked the barista. «To go — I'm catching a bus to Portland in twenty minutes.» He paid, took his bag and left a coin in the {5} jar on the counter.", es: "El cliente le agradeció y pidió el pan de banano con un poco de miel. «¿Para aquí o para llevar?», preguntó el barista. «Para llevar: tomo un autobús a Portland en veinte minutos». Pagó, tomó su bolsa y dejó una moneda en el frasco de propinas del mostrador." },
      ],
      gaps: [
        { options: ["fat-free", "nut-free", "sugar-free"], answer: 1, why: "«I'm allergic to nuts» define la restricción: sin frutos secos." },
        { options: ["some", "much", "any"], answer: 2, why: "Frase negativa → there aren't ANY nuts." },
        { options: ["some", "any", "many"], answer: 0, why: "Afirmativa con incontable → some honey." },
        { options: ["stay", "go", "eat"], answer: 1, why: "Fórmula fija del pedido: «For here or to go?»." },
        { options: ["jam", "trash", "tip"], answer: 2, why: "Dejar una moneda en el frasco de propinas (tip jar)." },
      ],
    },
    {
      id: "cz-en-a2-02-3", title: "The office coffee run", titleEs: "El pedido de café de la oficina", minutes: 2,
      paragraphs: [
        { it: "In American offices, the «coffee run» is a small tradition. One person offers to {1} everybody's order and walks to the coffee shop with a list. The office {2} says: «I'll take a large black coffee, no sugar, no cream — I'm not paying five dollars for milk!»", es: "En las oficinas americanas, el «coffee run» es una pequeña tradición. Una persona se ofrece a anotar el pedido de todos y camina a la cafetería con una lista. El gerente de la oficina dice: «Yo quiero un café negro grande, sin azúcar, sin crema: ¡no voy a pagar cinco dólares por leche!»." },
        { it: "The intern wants something {3}: «A grande iced latte with extra syrup, please». The orders are all different, but everybody says «thank you» to the runner. And the office has one {4} rule: the coffee person never {5} for their own drink.", es: "El pasante quiere algo dulce: «Un latte grande con hielo y jarabe extra, por favor». Los pedidos son todos distintos, pero todos le dicen «gracias» al mensajero. Y la oficina tiene una regla de oro: el que va por el café nunca paga su propia bebida." },
      ],
      gaps: [
        { options: ["write down", "erase", "sing"], answer: 0, why: "«With a list»: anota el pedido de todos." },
        { options: ["manager", "baby", "tourist"], answer: 0, why: "Quien da instrucciones en la oficina es el gerente." },
        { options: ["sweet", "hot", "plain"], answer: 0, why: "«Iced latte with extra syrup» = algo dulce." },
        { options: ["golden", "broken", "silent"], answer: 0, why: "Regla «de oro»: el mensajero no paga." },
        { options: ["cooks", "sleeps", "pays"], answer: 2, why: "Nunca paga su propia bebida." },
      ],
    },
  ],

  "en-cu-a2-03": [
    {
      id: "cz-en-a2-03-1", title: "A gift for Dad", titleEs: "Un regalo para papá", minutes: 3,
      paragraphs: [
        { it: "My sisters and I went to the outlet near Boston to find a birthday {1} for Dad. There were three options: a wallet, a mug and a scarf. The wallet was beautiful, but it was the most {2} one — fifty dollars, and our budget was twenty-five.", es: "Mis hermanas y yo fuimos al outlet cerca de Boston a buscar un regalo de cumpleaños para papá. Había tres opciones: una cartera, una taza y una bufanda. La cartera era hermosa, pero era la más cara: cincuenta dólares, y nuestro presupuesto era veinticinco." },
        { it: "«This mug is cheaper, and it has his favorite team on it», said Ana. The scarf was nice too, but Dad never wears {3}. In the end, we took the mug and a small bag of his {4} chocolates. He opened the box on Sunday and smiled: it was the {5} twenty-five dollars we ever spent.", es: "«Esta taza es más barata y tiene a su equipo favorito», dijo Ana. La bufanda también era linda, pero papá nunca usa bufandas. Al final, llevamos la taza y una bolsita de sus chocolates favoritos. Abrió la caja el domingo y sonrió: fueron los mejores veinticinco dólares que gastamos jamás." },
      ],
      gaps: [
        { options: ["gift", "car", "job"], answer: 0, why: "Cumpleaños + outlet + tres opciones: un regalo." },
        { options: ["comfortable", "expensive", "popular"], answer: 1, why: "Cuesta $50 frente a un presupuesto de $25: la más cara." },
        { options: ["scarves", "hats", "gloves"], answer: 0, why: "La bufanda era la otra opción, la que descartaron." },
        { options: ["favorite", "expensive", "healthy"], answer: 0, why: "Regalo personal: sus chocolates favoritos." },
        { options: ["worst", "longest", "best"], answer: 2, why: "Sonrió al abrir la caja: los mejores $25 gastados." },
      ],
    },
    {
      id: "cz-en-a2-03-2", title: "Black Friday", titleEs: "El Black Friday", minutes: 3,
      paragraphs: [
        { it: "My cousin woke me up at 4 a. m. on Black Friday. «The {1} open at five!» she said, already wearing her coat. We drove to the mall in the dark and, of course, the {2} was already around the building. Everybody wanted the same TV at forty percent {3}.", es: "Mi prima me despertó a las 4 a. m. del Black Friday. «¡Las tiendas abren a las cinco!», dijo, ya con el abrigo puesto. Manejamos al centro comercial en la oscuridad y, por supuesto, la fila ya daba la vuelta al edificio. Todos querían el mismo televisor con cuarenta por ciento de descuento." },
        { it: "Inside, the store was {4} and loud, but people were surprisingly nice. A man helped us reach the last TV on a high shelf. We paid, carried the box to the car and got home at 7 a. m. «Best {5} ever?» asked my cousin. «Weird, but yes», I said, and went back to bed.", es: "Adentro, la tienda estaba llena y ruidosa, pero la gente era sorprendentemente amable. Un hombre nos ayudó a alcanzar el último televisor de un estante alto. Pagamos, llevamos la caja al auto y llegamos a casa a las 7 a. m. «¿La mejor compra de la historia?», preguntó mi prima. «Rara, pero sí», dije, y volví a la cama." },
      ],
      gaps: [
        { options: ["stores", "schools", "banks"], answer: 0, why: "Black Friday: las tiendas abren al amanecer." },
        { options: ["line", "parking", "bus"], answer: 0, why: "«Around the building»: la fila rodeaba el edificio." },
        { options: ["off", "on", "up"], answer: 0, why: "«Forty percent off» = cuarenta por ciento de descuento." },
        { options: ["empty", "crowded", "closed"], answer: 1, why: "Llena y ruidosa a las 5 a. m. del día de mayores descuentos." },
        { options: ["deal", "nap", "movie"], answer: 0, why: "El televisor con 40% de descuento: la mejor compra." },
      ],
    },
    {
      id: "cz-en-a2-03-3", title: "The return", titleEs: "La devolución", minutes: 2,
      paragraphs: [
        { it: "The sweater my aunt sent me was too {1}, so I went back to the store with the receipt. «No problem», said the employee. «You can {2} it for a bigger size or get your money back». I looked around for five minutes, but there were no more sweaters in my {3}.", es: "El suéter que me envió mi tía quedaba muy pequeño, así que volví a la tienda con el recibo. «Sin problema», dijo el empleado. «Puede cambiarlo por una talla más grande o recuperar su dinero». Busqué por cinco minutos, pero ya no quedaban suéteres de mi talla." },
        { it: "In the end, I chose a {4} instead: same price, warmer and the right size. The employee scanned the receipt and said, «All set! You have thirty days if you change your {5}». American stores really make returns easy.", es: "Al final, elegí una chaqueta en su lugar: mismo precio, más abrigadora y de la talla correcta. El empleado escaneó el recibo y dijo: «¡Todo listo! Tiene treinta días si cambia de opinión». Las tiendas americanas de verdad facilitan las devoluciones." },
      ],
      gaps: [
        { options: ["small", "long", "soft"], answer: 0, why: "Pide una talla más grande: el suéter quedaba muy pequeño." },
        { options: ["sell", "exchange", "wash"], answer: 1, why: "«For a bigger size»: cambiar el producto." },
        { options: ["size", "color", "cart"], answer: 0, why: "No quedaban suéteres de su talla." },
        { options: ["jacket", "sock", "ring"], answer: 0, why: "Prenda más abrigadora que un suéter y del mismo precio: una chaqueta." },
        { options: ["mind", "address", "name"], answer: 0, why: "«Change your mind» = cambiar de opinión." },
      ],
    },
  ],

  "en-cu-a2-04": [
    {
      id: "cz-en-a2-04-1", title: "The subway doors", titleEs: "Las puertas del subway", minutes: 2,
      paragraphs: [
        { it: "It was our second day in New York. We were {1} for the subway when my friend stepped inside to look for seats. The doors closed right behind him — with me still on the {2}! The train left, and I stood there with my mouth open.", es: "Era nuestro segundo día en Nueva York. Estábamos esperando el subway cuando mi amigo entró a buscar asientos. Las puertas se cerraron justo detrás de él: ¡conmigo todavía en el andén! El tren se fue y me quedé ahí con la boca abierta." },
        { it: "I took the {3} train and found him at the next station, laughing near the map. «I saw your {4} through the window!» he said. We learned the local rule that day: hold the doors for nobody, and {5} together. New York teaches fast.", es: "Tomé el siguiente tren y lo encontré en la estación de al lado, riéndose junto al mapa. «¡Vi tu cara por la ventana!», dijo. Aprendimos la regla local ese día: no aguantes las puertas para nadie y súbanse juntos. Nueva York enseña rápido." },
      ],
      gaps: [
        { options: ["waiting", "paying", "cooking"], answer: 0, why: "Estaban esperando el subway cuando él entró." },
        { options: ["platform", "roof", "street"], answer: 0, why: "Las puertas se cerraron con él adentro y el amigo afuera, en el andén." },
        { options: ["first", "next", "last"], answer: 1, why: "El tren partió: tomó el siguiente." },
        { options: ["face", "shoes", "phone"], answer: 0, why: "Lo vio por la ventana con la boca abierta: su cara." },
        { options: ["get on", "get off", "wake up"], answer: 0, why: "La lección: subir juntos para no separarse." },
      ],
    },
    {
      id: "cz-en-a2-04-2", title: "Rain on the bridge", titleEs: "Lluvia en el puente", minutes: 2,
      paragraphs: [
        { it: "We were walking to the Brooklyn Bridge when the sky turned dark. Ten minutes later, it started to {1}, and of course we didn't have an umbrella. While we were running back to the subway, a guy on the corner {2} us two umbrellas for ten dollars.", es: "Íbamos caminando al puente de Brooklyn cuando el cielo se oscureció. Diez minutos después empezó a llover y, por supuesto, no teníamos paraguas. Mientras corríamos de vuelta al subway, un tipo en la esquina nos vendió dos paraguas por diez dólares." },
        { it: "«Best deal in the city», he said, and he was right. We opened the umbrellas, and our {3} was saved. When we finally got to the bridge, the rain stopped and the sun painted the skyline orange. Sometimes a little bad {4} makes the best {5} of the trip.", es: "«El mejor negocio de la ciudad», dijo, y tenía razón. Abrimos los paraguas y salvamos nuestra tarde. Cuando por fin llegamos al puente, la lluvia paró y el sol pintó el skyline de naranja. A veces un poco de mal clima crea los mejores recuerdos del viaje." },
      ],
      gaps: [
        { options: ["snow", "rain", "wind"], answer: 1, why: "Sin paraguas y corriendo: empezó a llover." },
        { options: ["sold", "asked", "threw"], answer: 0, why: "«Two umbrellas for ten dollars»: nos los vendió." },
        { options: ["afternoon", "money", "breakfast"], answer: 0, why: "Con los paraguas, el plan de la tarde se salvó." },
        { options: ["weather", "luck", "food"], answer: 0, why: "La lluvia repentina: un poco de mal clima." },
        { options: ["problems", "memories", "tickets"], answer: 1, why: "El cielo naranja sobre el puente: los mejores recuerdos." },
      ],
    },
    {
      id: "cz-en-a2-04-3", title: "A selfie in Times Square", titleEs: "Una selfie en Times Square", minutes: 3,
      paragraphs: [
        { it: "I was taking {1} in Times Square when my phone died. One percent, then a black screen. I was {2} — the meeting point with my friends was inside the phone! I stood there under the giant screens, thinking about my options.", es: "Estaba tomando fotos en Times Square cuando mi teléfono murió. Uno por ciento, luego una pantalla negra. Estaba perdido: ¡el punto de encuentro con mis amigos estaba dentro del teléfono! Me quedé ahí, bajo las pantallas gigantes, pensando en mis opciones." },
        { it: "A local saw my face and {3}: «You OK?». I explained the problem, and she lent me her {4} to call my friends. Ten minutes later, we were all eating pizza together. New Yorkers are nice — they're just in a {5}, as my guidebook says.", es: "Una local vio mi cara y preguntó: «¿Estás bien?». Le expliqué el problema y me prestó su teléfono para llamar a mis amigos. Diez minutos después, estábamos todos comiendo pizza juntos. Los neoyorquinos son amables: solo tienen prisa, como dice mi guía de viaje." },
      ],
      gaps: [
        { options: ["photos", "showers", "buses"], answer: 0, why: "Una selfie en Times Square: estaba tomando fotos." },
        { options: ["lost", "rich", "asleep"], answer: 0, why: "Sin teléfono y sin punto de encuentro: estaba perdido." },
        { options: ["left", "asked", "sang"], answer: 1, why: "«You OK?»: le preguntó si estaba bien." },
        { options: ["phone", "car", "umbrella"], answer: 0, why: "Se lo prestó para llamar a sus amigos: su teléfono." },
        { options: ["hurry", "movie", "class"], answer: 0, why: "«They're just in a…»: solo tienen prisa." },
      ],
    },
  ],

  "en-cu-a2-05": [
    {
      id: "cz-en-a2-05-1", title: "Texts before the game", titleEs: "Mensajes antes del partido", minutes: 2,
      paragraphs: [
        { it: "Jordan: «Hey! What are you doing {1}? The Lakers play at 7!» — Me: «Nothing much. Are you going to watch the game?» — Jordan: «Yeah, at Joe's Bar. Do you want to {2}?»", es: "Jordan: «¡Oye! ¿Qué haces esta noche? ¡Los Lakers juegan a las 7!». — Yo: «Nada en especial. ¿Vas a ver el partido?». — Jordan: «Sí, en el Joe's Bar. ¿Quieres venir?»." },
        { it: "Me: «I'd love to! I'll {3} you there at 6:30». — Jordan: «Perfect. I'm going to get there {4} — the bar fills up fast. BTW, it's going to be a great game!» — Me: «OMW at 6:15. Don't be {5}!»", es: "Yo: «¡Me encantaría! Nos vemos allí a las 6:30». — Jordan: «Perfecto. Voy a llegar temprano: el bar se llena rápido. Por cierto, ¡va a ser un gran partido!». — Yo: «Salgo a las 6:15. ¡No llegues tarde!»." },
      ],
      gaps: [
        { options: ["tonight", "yesterday", "last year"], answer: 0, why: "El partido de los Lakers es a las 7 de esta noche." },
        { options: ["leave", "come", "sleep"], answer: 1, why: "Invitación al bar: «¿quieres venir?»." },
        { options: ["meet", "call", "write"], answer: 0, why: "«I'll meet you there» = nos vemos allí." },
        { options: ["late", "early", "hungry"], answer: 1, why: "«The bar fills up fast»: va a llegar temprano." },
        { options: ["late", "sick", "quiet"], answer: 0, why: "Cierre clásico del plan: «¡No llegues tarde!»." },
      ],
    },
    {
      id: "cz-en-a2-05-2", title: "A surprise for Mom", titleEs: "Una sorpresa para mamá", minutes: 3,
      paragraphs: [
        { it: "My sister texted me on Thursday: «Mom's birthday is on Saturday. Are you going to help me with a {1} party?» I answered in two seconds: «Of course! I'll bring the cake». We made a plan: she's going to {2} the living room with balloons, and I'm going to pick up the cake at 4 p. m.", es: "Mi hermana me escribió el jueves: «El cumpleaños de mamá es el sábado. ¿Me ayudas con una fiesta sorpresa?». Respondí en dos segundos: «¡Claro! Yo llevo el pastel». Hicimos un plan: ella va a decorar la sala con globos y yo voy a recoger el pastel a las 4 p. m." },
        { it: "On Saturday, Mom went to the supermarket at 5, and we started right away. My cousin hid behind the {3} with his trumpet (bad idea, we agreed later). When Mom opened the door, we all shouted «Surprise!». She {4}, then laughed, then cried a little. «You two are in {5}», she said, laughing. Best plan ever.", es: "El sábado, mamá fue al supermercado a las 5 y empezamos de inmediato. Mi primo se escondió detrás del sofá con su trompeta (mala idea, acordamos después). Cuando mamá abrió la puerta, todos gritamos «¡Sorpresa!». Ella se asustó, luego rió, luego lloró un poco. «Ustedes dos están metidos en líos», dijo, riendo. El mejor plan de la historia." },
      ],
      gaps: [
        { options: ["goodbye", "surprise", "housewarming"], answer: 1, why: "Mamá no lo sabe y se esconden: fiesta sorpresa." },
        { options: ["decorate", "sell", "close"], answer: 0, why: "«With balloons»: va a decorar la sala." },
        { options: ["couch", "car", "tree"], answer: 0, why: "Lugar clásico para esconderse en la sala: el sofá." },
        { options: ["jumped", "cooked", "danced"], answer: 0, why: "Grito + trompeta: se asustó (saltó)." },
        { options: ["trouble", "love", "school"], answer: 0, why: "«You two are in…»: están metidos en líos (dicho con risa)." },
      ],
    },
    {
      id: "cz-en-a2-05-3", title: "Summer plans", titleEs: "Planes de verano", minutes: 2,
      paragraphs: [
        { it: "«What are you doing this {1}?» asked my roommate. «I'm going to visit three national parks with my cousins», I said. «We're going to rent a {2} and sleep in campgrounds». He looked excited: «Cool! I'll probably visit my grandma in Miami, but nothing is decided yet».", es: "«¿Qué vas a hacer este verano?», preguntó mi compañero de cuarto. «Voy a visitar tres parques nacionales con mis primos», dije. «Vamos a rentar un auto y dormir en campamentos». Se vio entusiasmado: «¡Qué bien! Probablemente visite a mi abuela en Miami, pero todavía no hay nada decidido»." },
        { it: "I told him the plan: first the Grand Canyon, then Zion and finally Yellowstone. «It's going to be a long {3}», I said, «so we're going to take turns driving». He smiled and said, «Take photos! And if you {4} a bear, don't run». «Thanks for the advice», I laughed. «I'll text you from every {5}».", es: "Le conté el plan: primero el Gran Cañón, luego Zion y finalmente Yellowstone. «Va a ser un viaje largo», dije, «así que vamos a turnarnos para manejar». Sonrió y dijo: «¡Toma fotos! Y si ves un oso, no corras». «Gracias por el consejo», reí. «Te escribiré desde cada parque»." },
      ],
      gaps: [
        { options: ["summer", "Monday", "hour"], answer: 0, why: "Parques nacionales y campamentos: los planes del verano." },
        { options: ["plane", "car", "boat"], answer: 1, why: "Van a turnarse manejando: rentan un auto." },
        { options: ["trip", "name", "song"], answer: 0, why: "Tres parques en ruta: un viaje largo." },
        { options: ["feed", "see", "buy"], answer: 1, why: "Consejo de seguridad: si ves un oso, no corras." },
        { options: ["park", "test", "class"], answer: 0, why: "«From every…»: le escribirá desde cada parque." },
      ],
    },
  ],

  "en-cu-a2-06": [
    {
      id: "cz-en-a2-06-1", title: "The ad on Zillow", titleEs: "El anuncio en Zillow", minutes: 2,
      paragraphs: [
        { it: "I found the ad on Zillow on Tuesday night: «Sunny apartment in Austin, ten minutes from the university. Two bedrooms, two bathrooms, big living room. There's a {1} next to the kitchen — perfect for plants. The building is {2} from a coffee shop and next to a bus stop».", es: "Encontré el anuncio en Zillow el martes por la noche: «Apartamento soleado en Austin, a diez minutos de la universidad. Dos dormitorios, dos baños, sala grande. Hay un balcón al lado de la cocina: perfecto para las plantas. El edificio está enfrente de una cafetería y al lado de una parada de autobús»." },
        { it: "The {3} was $950 a month, and the ad said utilities were {4}. I sent a message that same night: «Is the room still {5}? Can I visit this week?». The answer came in five minutes: «Sure! Come on Thursday at 6».", es: "El alquiler era de $950 al mes y el anuncio decía que los servicios estaban incluidos. Envié un mensaje esa misma noche: «¿El cuarto sigue disponible? ¿Puedo visitarlo esta semana?». La respuesta llegó en cinco minutos: «¡Claro! Venga el jueves a las 6»." },
      ],
      gaps: [
        { options: ["balcony", "gym", "pool"], answer: 0, why: "«Next to the kitchen, perfect for plants»: el balcón." },
        { options: ["across", "behind", "under"], answer: 0, why: "«Across from a coffee shop» = enfrente de una cafetería." },
        { options: ["rent", "tax", "tip"], answer: 0, why: "«$950 a month»: el alquiler mensual." },
        { options: ["extra", "included", "late"], answer: 1, why: "La pregunta de oro: si los servicios están incluidos." },
        { options: ["available", "painted", "noisy"], answer: 0, why: "«Can I visit?»: pregunta si el cuarto sigue disponible." },
      ],
    },
    {
      id: "cz-en-a2-06-2", title: "Meeting the roommates", titleEs: "Conociendo a los roommates", minutes: 3,
      paragraphs: [
        { it: "Hunter opened the door with a big smile. «Welcome! Come on in». The living room was bigger than in the photos: a long couch, two {1} by the window and a table full of plants. «How many {2} are there?» I asked. «Three. The empty one is across from the bathroom».", es: "Hunter abrió la puerta con una gran sonrisa. «¡Bienvenido! Pasa». La sala era más grande que en las fotos: un sofá largo, dos escritorios junto a la ventana y una mesa llena de plantas. «¿Cuántos dormitorios hay?», pregunté. «Tres. El vacío está enfrente del baño»." },
        { it: "Sierra showed me the rest: the {3} is downstairs, between the parking lot and the gym, and there's a small balcony {4} to the kitchen. At the end of the visit, I asked the only important question: «When can I {5} in?» They looked at each other and smiled: «Is Saturday too soon?»", es: "Sierra me mostró el resto: la lavandería está abajo, entre el estacionamiento y el gimnasio, y hay un balcón pequeño al lado de la cocina. Al final de la visita, hice la única pregunta importante: «¿Cuándo puedo mudarme?». Se miraron y sonrieron: «¿El sábado es muy pronto?»." },
      ],
      gaps: [
        { options: ["desks", "beds", "cars"], answer: 0, why: "Junto a la ventana, en una sala compartida: escritorios." },
        { options: ["bedrooms", "kitchens", "roofs"], answer: 0, why: "«The empty one is across from the bathroom»: dormitorios." },
        { options: ["laundry room", "movie theater", "bank"], answer: 0, why: "Abajo, entre el estacionamiento y el gimnasio: la lavandería." },
        { options: ["next", "far", "behind"], answer: 0, why: "«Next to the kitchen» = al lado de la cocina." },
        { options: ["move", "eat", "pay"], answer: 0, why: "«When can I move in?» = ¿cuándo puedo mudarme?" },
      ],
    },
    {
      id: "cz-en-a2-06-3", title: "The best street in the neighborhood", titleEs: "La mejor calle del barrio", minutes: 2,
      paragraphs: [
        { it: "My new street in Austin has everything. There's a coffee shop {1} from my building, a taco truck on the corner and a small park between the {2} and the library. The neighbors say the park is the {3} place for a picnic on Sundays.", es: "Mi nueva calle en Austin lo tiene todo. Hay una cafetería enfrente de mi edificio, un camión de tacos en la esquina y un parque pequeño entre la escuela y la biblioteca. Los vecinos dicen que el parque es el mejor lugar para un picnic los domingos." },
        { it: "At night, the street is quiet, and there are two bus {4} near the building — one going downtown and one to the lake. My roommate works from home, and he says the {5} is fast and free in the whole apartment. I really chose well.", es: "De noche, la calle es silenciosa y hay dos paradas de autobús cerca del edificio: una hacia el centro y otra hacia el lago. Mi compañero trabaja desde casa y dice que el internet es rápido y gratis en todo el apartamento. Realmente elegí bien." },
      ],
      gaps: [
        { options: ["across", "next", "between"], answer: 0, why: "«Across from my building» = enfrente del edificio." },
        { options: ["school", "moon", "river"], answer: 0, why: "Edificio público típico junto a la biblioteca: la escuela." },
        { options: ["worst", "best", "cheapest"], answer: 1, why: "Picnic dominical recomendado: el mejor lugar." },
        { options: ["stops", "tickets", "drivers"], answer: 0, why: "«One going downtown and one to the lake»: dos paradas de autobús." },
        { options: ["internet", "heating", "elevator"], answer: 0, why: "Rápido y gratis en todo el apartamento, para trabajar desde casa: el internet." },
      ],
    },
  ],

  "en-cu-a2-07": [
    {
      id: "cz-en-a2-07-1", title: "A visit to urgent care", titleEs: "Una visita al urgent care", minutes: 3,
      paragraphs: [
        { it: "After two days of a terrible sore throat, my roommate drove me to the urgent care near our apartment in Denver. The nurse asked, «What brings you in today?» I explained my {1}: sore throat, headache and a fever since Monday. «Do you have your insurance {2}?» she asked. «The copay is $25».", es: "Tras dos días de un dolor de garganta terrible, mi compañero de cuarto me llevó al urgent care cerca de nuestro apartamento en Denver. La enfermera preguntó: «¿Qué te trae hoy?». Expliqué mis síntomas: dolor de garganta, dolor de cabeza y fiebre desde el lunes. «¿Tienes tu tarjeta del seguro?», preguntó. «El copago es de $25»." },
        { it: "The doctor looked at my throat and said, «It's strep. You should {3} these antibiotics for seven days, and you shouldn't go to {4} tomorrow — rest». At the pharmacy downstairs, I filled the {5} and bought a bottle of water. Two days later, I was a new person.", es: "El médico miró mi garganta y dijo: «Es faringitis. Deberías tomar estos antibióticos durante siete días, y no deberías ir a trabajar mañana: descansa». En la farmacia de abajo, llené la receta y compré una botella de agua. Dos días después, era una persona nueva." },
      ],
      gaps: [
        { options: ["symptoms", "hobbies", "plans"], answer: 0, why: "Dolor de garganta, cabeza y fiebre: sus síntomas." },
        { options: ["card", "cake", "car"], answer: 0, why: "«Do you have your insurance…?»: la tarjeta del seguro." },
        { options: ["take", "plant", "count"], answer: 0, why: "Antibióticos durante siete días: hay que tomarlos." },
        { options: ["work", "bed", "school"], answer: 0, why: "«— rest!»: no debería ir a trabajar mañana." },
        { options: ["prescription", "pool", "suitcase"], answer: 0, why: "En la farmacia se llena la receta." },
      ],
    },
    {
      id: "cz-en-a2-07-2", title: "Ten p.m. at the pharmacy", titleEs: "Las diez de la noche en la farmacia", minutes: 2,
      paragraphs: [
        { it: "It was 10 p. m. when I left urgent care with my prescription. Luckily, the CVS on the corner is {1} twenty-four hours. The pharmacist read the paper and said, «Antibiotics — take one {2} a day, morning and night, with food. Don't skip a day, OK?»", es: "Eran las 10 p. m. cuando salí del urgent care con mi receta. Por suerte, el CVS de la esquina está abierto las veinticuatro horas. El farmacéutico leyó el papel y dijo: «Antibióticos: toma uno dos veces al día, mañana y noche, con comida. No te saltes ningún día, ¿OK?»." },
        { it: "I also bought cough drops and a box of {3}. At the register, the cashier asked if I had a rewards {4}. «My throat hurts too much for math», I said, and she laughed. Walking home with the bag, I felt better already — sometimes the {5} of a pharmacy at night is its own medicine.", es: "También compré pastillas para la tos y una caja de té. En la caja, la cajera preguntó si tenía tarjeta de puntos. «Me duele demasiado la garganta para matemáticas», dije, y ella rió. Caminando a casa con la bolsa, ya me sentía mejor: a veces la luz de una farmacia de noche es su propia medicina." },
      ],
      gaps: [
        { options: ["closed", "open", "far"], answer: 1, why: "A las 10 p. m. y por suerte atienden: está abierto 24 horas." },
        { options: ["twice", "once", "never"], answer: 0, why: "«Morning and night» = dos veces al día." },
        { options: ["tea", "shoes", "gum"], answer: 0, why: "Compra típica para la garganta junto a las pastillas para la tos: una caja de té." },
        { options: ["card", "car", "chair"], answer: 0, why: "«Rewards card» = tarjeta de puntos de la tienda." },
        { options: ["light", "price", "music"], answer: 0, why: "La farmacia iluminada de noche: su luz es su propia medicina." },
      ],
    },
    {
      id: "cz-en-a2-07-3", title: "Advice from Mom", titleEs: "Consejos de mamá", minutes: 2,
      paragraphs: [
        { it: "I called my mom to tell her I was sick. She had advice ready in three seconds: «You should {1} a lot of water and sleep eight hours. You shouldn't check your phone in bed, and you definitely shouldn't study tonight». «Mom, it's just a {2}», I said. «A cold is serious business, mijo».", es: "Llamé a mi mamá para decirle que estaba enfermo. Tuvo consejos listos en tres segundos: «Deberías beber mucha agua y dormir ocho horas. No deberías mirar el teléfono en la cama y definitivamente no deberías estudiar esta noche». «Mamá, es solo un resfriado», dije. «Un resfriado es cosa seria, hijo»." },
        { it: "The next morning, she texted me a photo of her chicken {3}, with the message: «Eat something warm». My roommate smelled it from his room and asked for the recipe. Mom's {4} worked, as always: rest, water, soup and a little love. I was {5} by Friday.", es: "A la mañana siguiente, me envió una foto de su sopa de pollo con el mensaje: «Come algo calientito». Mi compañero la olió desde su cuarto y pidió la receta. Los consejos de mamá funcionaron, como siempre: descanso, agua, sopa y un poco de amor. Estaba mejor para el viernes." },
      ],
      gaps: [
        { options: ["drink", "spill", "draw"], answer: 0, why: "Consejo clásico: deberías beber mucha agua." },
        { options: ["party", "cold", "wedding"], answer: 1, why: "«A cold is serious business»: es solo un resfriado." },
        { options: ["soup", "steak", "salad"], answer: 0, why: "«Chicken…» + «eat something warm»: la sopa de pollo." },
        { options: ["advice", "car", "recipe"], answer: 0, why: "«Worked, as always»: sus consejos." },
        { options: ["worse", "better", "taller"], answer: 1, why: "Descanso + sopa: estaba mejor para el viernes." },
      ],
    },
  ],

  "en-cu-a2-08": [
    {
      id: "cz-en-a2-08-1", title: "The potluck table", titleEs: "La mesa del potluck", minutes: 3,
      paragraphs: [
        { it: "The potluck started at 6 p. m., and the table was already full. Every guest brought a {1}, and every dish had a little label: «vegan», «gluten-free», «contains nuts». Nicole, the host, explained: «Mark is {2} and Lisa can't eat gluten, so we label everything».", es: "El potluck empezó a las 6 p. m. y la mesa ya estaba llena. Cada invitado trajo un plato y cada plato tenía una etiqueta pequeña: «vegano», «sin gluten», «contiene frutos secos». Nicole, la anfitriona, explicó: «Mark es vegano y Lisa no puede comer gluten, así que etiquetamos todo»." },
        { it: "I brought rice and beans, and Marcus brought his famous vegan {3} — nobody could tell it had no meat. I tried a little of everything, but first I asked the golden {4}: «Is there any peanut oil in the salad?» I'm allergic to {5}, so I never skip it.", es: "Yo traje arroz con frijoles y Marcus trajo su chili vegano famoso: nadie notó que no llevaba carne. Probé un poco de todo, pero primero hice la pregunta de oro: «¿Hay aceite de cacahuate en la ensalada?». Soy alérgico a los frutos secos, así que nunca me la salto." },
      ],
      gaps: [
        { options: ["dish", "chair", "song"], answer: 0, why: "En un potluck cada invitado trae un plato." },
        { options: ["vegan", "doctor", "tired"], answer: 0, why: "La etiqueta «vegan» del plato de Mark: él es vegano." },
        { options: ["chili", "coffee", "juice"], answer: 0, why: "«It had no meat»: su chili vegano famoso." },
        { options: ["question", "street", "door"], answer: 0, why: "«Is there any peanut oil?»: la pregunta de oro." },
        { options: ["nuts", "rice", "milk"], answer: 0, why: "El aceite de cacahuate le preocupa: alergia a los frutos secos." },
      ],
    },
    {
      id: "cz-en-a2-08-2", title: "Grandma Rosa's chili", titleEs: "El chili de la abuela Rosa", minutes: 3,
      paragraphs: [
        { it: "My grandma's chili recipe is simple. You need two cans of {1}, a pound of ground beef, one onion, some olive oil and a lot of cumin. First, you cook the onion in the {2}; then you add the beef until it's brown.", es: "La receta de chili de mi abuela es simple. Necesitas dos latas de frijoles, una libra de carne molida, una cebolla, un poco de aceite de oliva y mucho comino. Primero, cocinas la cebolla en el aceite; luego agregas la carne hasta que dore." },
        { it: "After that, you mix in the beans, two cups of {3} and the spices. It cooks slowly for one hour — «low and slow», grandma always says. We serve it with cheese on top and a slice of corn bread on the {4}. «How much cumin?» I asked once. «Until it smells {5}», she answered. True story.", es: "Después de eso, mezclas los frijoles, dos tazas de agua y las especias. Se cocina lentamente una hora — «a fuego bajo y despacio», dice siempre la abuela. Lo servimos con queso encima y una rebanada de pan de maíz al lado. «¿Cuánto comino?», pregunté una vez. «Hasta que huela bien», respondió. Historia verdadera." },
      ],
      gaps: [
        { options: ["beans", "candy", "soup"], answer: 0, why: "El chili clásico lleva dos latas de frijoles." },
        { options: ["oil", "milk", "syrup"], answer: 0, why: "«Some olive…» de la lista de ingredientes: se cocina la cebolla en el aceite." },
        { options: ["water", "juice", "soda"], answer: 0, why: "Dos tazas de líquido para guisar: agua." },
        { options: ["side", "floor", "roof"], answer: 0, why: "«On the side» = al lado, acompañando." },
        { options: ["wrong", "right", "blue"], answer: 1, why: "«Hasta que huela bien»: la cantidad correcta." },
      ],
    },
    {
      id: "cz-en-a2-08-3", title: "Food carts everywhere", titleEs: "Food carts por todas partes", minutes: 2,
      paragraphs: [
        { it: "Portland is famous for its food carts. Around the city, there are small groups of carts — locals call them «pods» — with {1} from all over the world: tacos, ramen, Thai noodles and giant burgers. A whole pod can share one {2} with tables and string lights.", es: "Portland es famosa por sus food carts. Por toda la ciudad hay grupos pequeños de carritos — los locales los llaman «pods» — con comida de todo el mundo: tacos, ramen, fideos tailandeses y hamburguesas gigantes. Un pod entero puede compartir un patio con mesas y luces colgantes." },
        { it: "Lunchtime is busy: office workers stand in {3} for ten or fifteen minutes, and everybody takes their food to go or eats at the shared tables. The prices are usually lower than in a {4}, and the portions are big. On a sunny day, the pod on 10th Street is the {5} place in town.", es: "La hora del almuerzo es concurrida: los oficinistas hacen fila diez o quince minutos y todos llevan su comida para llevar o comen en las mesas compartidas. Los precios suelen ser más bajos que en un restaurante y las porciones son grandes. En un día soleado, el pod de la calle 10 es el mejor lugar de la ciudad." },
      ],
      gaps: [
        { options: ["food", "furniture", "clothes"], answer: 0, why: "Tacos, ramen y hamburguesas: comida de todo el mundo." },
        { options: ["kitchen", "patio", "garage"], answer: 1, why: "«With tables and string lights»: un patio compartido." },
        { options: ["line", "corner", "car"], answer: 0, why: "Diez o quince minutos esperando: hacen fila." },
        { options: ["restaurant", "school", "bank"], answer: 0, why: "Precios más bajos que en un restaurante." },
        { options: ["best", "worst", "coldest"], answer: 0, why: "Día soleado + buena comida: el mejor lugar de la ciudad." },
      ],
    },
  ],

  "en-cu-a2-09": [
    {
      id: "cz-en-a2-09-1", title: "Fifteen minutes with Ms. Rivera", titleEs: "Quince minutos con la señora Rivera", minutes: 3,
      paragraphs: [
        { it: "The interview was at 3 p. m. at the mall in Miami. The manager, Ms. Rivera, welcomed me with a handshake and the famous first {1}: «Tell me about yourself». I took a breath and gave my thirty-second answer: student, friendly, organized, fast {2}.", es: "La entrevista fue a las 3 p. m. en el centro comercial de Miami. La gerente, la señora Rivera, me recibió con un apretón de manos y la famosa primera pregunta: «Háblame de ti». Respiré y di mi respuesta de treinta segundos: estudiante, sociable, organizado, aprendo rápido." },
        { it: "Then she asked, «Have you ever {3} in retail?» — «No, I've never worked in a store, but I've already helped at my uncle's shop during the holidays». She wrote something down and smiled. Before I left, I asked about the {4}: weekends only, from 9 to 5. «We'll be in {5}», she said. I sent a thank-you email that same night.", es: "Luego preguntó: «¿Has trabajado alguna vez en ventas?». — «No, nunca he trabajado en una tienda, pero ya ayudé en la tienda de mi tío durante las fiestas». Anotó algo y sonrió. Antes de irme, pregunté por el horario: solo fines de semana, de 9 a 5. «Te contactaremos», dijo. Envié un correo de agradecimiento esa misma noche." },
      ],
      gaps: [
        { options: ["question", "coffee", "parking"], answer: 0, why: "«Tell me about yourself»: la famosa primera pregunta." },
        { options: ["learner", "walker", "talker"], answer: 0, why: "«Fast learner» = aprendo rápido (frase de entrevista)." },
        { options: ["worked", "slept", "driven"], answer: 0, why: "«In retail» + «I've never worked in a store»: experiencia laboral." },
        { options: ["hours", "taxes", "shoes"], answer: 0, why: "«Weekends only, from 9 to 5»: el horario." },
        { options: ["touch", "line", "Miami"], answer: 0, why: "«We'll be in touch» = te contactaremos." },
      ],
    },
    {
      id: "cz-en-a2-09-2", title: "The follow-up email", titleEs: "El correo de seguimiento", minutes: 2,
      paragraphs: [
        { it: "Subject: Thank you — Sales Associate Position. «Dear Ms. Rivera: Thank you for {1} with me this afternoon. I enjoyed learning about the {2} and the team. Our conversation made me even more excited about this opportunity».", es: "Asunto: Gracias — puesto de asociado de ventas. «Querida señora Rivera: Gracias por reunirse conmigo esta tarde. Disfruté conocer la tienda y el equipo. Nuestra conversación me entusiasmó aún más con esta oportunidad»." },
        { it: "«As I mentioned, I'm available on {3} and I can start right away. Please let me know if you need anything else from me. I look {4} to hearing from you. Best regards, Alex». Twenty-four hours later, my phone rang: I got the {5}. Always send the email, friends.", es: "«Como mencioné, estoy disponible los fines de semana y puedo empezar de inmediato. Avísame si necesitas algo más de mí. Quedo a la espera de su respuesta. Saludos cordiales, Alex». Veinticuatro horas después, sonó mi teléfono: conseguí el trabajo. Siempre envíen el correo, amigos." },
      ],
      gaps: [
        { options: ["meeting", "running", "eating"], answer: 0, why: "«Thank you for meeting with me» = gracias por reunirse conmigo." },
        { options: ["store", "weather", "movie"], answer: 0, why: "Puesto de ventas: conoció la tienda y el equipo." },
        { options: ["weekends", "Mondays", "holidays"], answer: 0, why: "El trabajo es de fines de semana: disponible los weekends." },
        { options: ["forward", "back", "down"], answer: 0, why: "«I look forward to hearing from you» = fórmula de cierre." },
        { options: ["flu", "job", "bill"], answer: 1, why: "El teléfono sonó tras la entrevista: consiguió el trabajo." },
      ],
    },
    {
      id: "cz-en-a2-09-3", title: "First day on the job", titleEs: "Primer día de trabajo", minutes: 3,
      paragraphs: [
        { it: "My first Saturday at the store started with a tour: the fitting rooms, the stock room and the cash {1}. Then my trainer, Jake, asked the question of the day: «Have you ever used a register before?» — «Never», I said, «but I've used one at my uncle's {2}». «Perfect, it's the same idea».", es: "Mi primer sábado en la tienda empezó con un recorrido: los probadores, el almacén y la caja registradora. Luego, mi instructor, Jake, hizo la pregunta del día: «¿Has usado alguna vez una caja registradora?». — «Nunca», dije, «pero he usado una en la tienda de mi tío». «Perfecto, es la misma idea»." },
        { it: "By noon, I could fold shirts fast and say «It looks great on you!» without laughing. A customer asked if we had any {3} sweaters, and I found one in the back — my first save of the day. At 5, Jake bought me a coffee and said, «You've already learned more than the {4} guy». I went home tired and {5}.", es: "Al mediodía, ya podía doblar camisas rápido y decir «¡Te queda genial!» sin reírme. Un cliente preguntó si teníamos suéteres verdes y encontré uno en el almacén: mi primer rescate del día. A las 5, Jake me invitó un café y dijo: «Ya aprendiste más que el último tipo». Volví a casa cansado y feliz." },
      ],
      gaps: [
        { options: ["register", "garden", "pool"], answer: 0, why: "«Used a register?»: la caja registradora." },
        { options: ["shop", "farm", "kitchen"], answer: 0, why: "La de su tío es una tienda (shop)." },
        { options: ["green", "broken", "wet"], answer: 0, why: "«I found one in the back»: el cliente buscaba un color; verde." },
        { options: ["last", "next", "first"], answer: 0, why: "«Más que el… tipo»: el anterior (last)." },
        { options: ["angry", "happy", "sick"], answer: 1, why: "Primer día con éxito + café del instructor: cansado y feliz." },
      ],
    },
  ],

  "en-cu-a2-10": [
    {
      id: "cz-en-a2-10-1", title: "A foot of snow", titleEs: "Un pie de nieve", minutes: 3,
      paragraphs: [
        { it: "The forecast said two inches, but we woke up to a {1} of snow — twelve inches, more than the whole month of December. My car looked like a white {2}. Schools were closed, and the radio repeated the list of closings all morning.", es: "El pronóstico decía dos pulgadas, pero amanecimos con un pie de nieve: doce pulgadas, más que todo el mes de diciembre. Mi auto parecía una torta blanca. Las escuelas cerraron y la radio repitió la lista de cierres toda la mañana." },
        { it: "I spent forty minutes digging out the car with a {3}. My neighbor waved from her window and shouted, «It feels like minus ten today — {4} up!». The funny part: by Friday, the forecast says it'll warm up to thirty {5}. That's a heat wave in Minnesota.", es: "Pasé cuarenta minutos desenterrando el auto con una pala. Mi vecina saludó desde su ventana y gritó: «Hoy se siente como menos diez: ¡abrígate!». Lo gracioso: para el viernes, el pronóstico dice que calentará a treinta grados. Eso es una ola de calor en Minnesota." },
      ],
      gaps: [
        { options: ["foot", "glass", "letter"], answer: 0, why: "Doce pulgadas = un pie (a foot) de nieve." },
        { options: ["cake", "bird", "boat"], answer: 0, why: "El auto cubierto de nieve parecía una torta blanca." },
        { options: ["shovel", "pen", "guitar"], answer: 0, why: "Para desenterrar el auto se usa una pala." },
        { options: ["bundle", "wake", "look"], answer: 0, why: "«Bundle up!» = ¡abrígate! (consejo invernal)." },
        { options: ["degrees", "pounds", "gallons"], answer: 0, why: "La temperatura se mide en grados (Fahrenheit)." },
      ],
    },
    {
      id: "cz-en-a2-10-2", title: "Small talk in the elevator", titleEs: "Small talk en el elevador", minutes: 2,
      paragraphs: [
        { it: "Eight floors, two strangers and one classic conversation. «Crazy {1}, huh?» said the man with the parka. «I know! I read the forecast last night — snow again tomorrow», I answered. He shook his head: «And they said this winter was going to be {2}».", es: "Ocho pisos, dos desconocidos y una conversación clásica. «Qué clima loco, ¿verdad?», dijo el hombre de la parka. «¡Lo sé! Leí el pronóstico anoche: nieve otra vez mañana», respondí. Negó con la cabeza: «Y decían que este invierno iba a ser suave»." },
        { it: "At floor five, a woman joined us with wet boots. «Don't even ask», she said, and we all {3}. The doors opened at eight, and the man said, «Well, {4} a good one!» — the short version of «have a nice day». Weather talk: the fastest {5} in America.", es: "En el quinto piso, una mujer se unió con las botas mojadas. «Ni pregunten», dijo, y todos reímos. Las puertas se abrieron en el octavo y el hombre dijo: «¡Bueno, que tengas un buen día!» — la versión corta. Hablar del clima: la amistad más rápida de Estados Unidos." },
      ],
      gaps: [
        { options: ["weather", "lunch", "traffic"], answer: 0, why: "Parka + pronóstico + nieve: hablan del clima." },
        { options: ["mild", "terrible", "famous"], answer: 0, why: "Ironía ante la nieve: decían que el invierno sería suave." },
        { options: ["laughed", "cried", "left"], answer: 0, why: "El comentario de las botas mojadas hizo reír a todos." },
        { options: ["have", "make", "take"], answer: 0, why: "«Have a good one!» = versión corta de «have a nice day»." },
        { options: ["friendship", "subway", "coffee"], answer: 0, why: "El small talk del clima crea la amistad más rápida." },
      ],
    },
    {
      id: "cz-en-a2-10-3", title: "The weekend forecast", titleEs: "El pronóstico del fin de semana", minutes: 2,
      paragraphs: [
        { it: "Here is your weekend forecast for Minneapolis. On Saturday, it'll be {1} and warm, around 45 degrees — perfect for a walk around the lake. In the afternoon, some {2} will arrive from the north, but no rain is expected.", es: "Aquí está el pronóstico del fin de semana para Minneapolis. El sábado estará soleado y templado, cerca de 45 grados: perfecto para un paseo alrededor del lago. Por la tarde llegarán algunas nubes desde el norte, pero no se espera lluvia." },
        { it: "On Sunday, it'll {3} in the morning and get colder at night, so you should take a warm {4}. And good news for Monday: it'll be sunny again. That's all from the weather {5} — have a great weekend!", es: "El domingo lloverá por la mañana y enfriará por la noche, así que deberían llevar un abrigo calientito. Y buenas noticias para el lunes: volverá a estar soleado. Eso es todo desde el equipo del clima: ¡que tengan un gran fin de semana!" },
      ],
      gaps: [
        { options: ["sunny", "rainy", "windy"], answer: 0, why: "«And warm, around 45 degrees»: día soleado para pasear." },
        { options: ["clouds", "guests", "birds"], answer: 0, why: "Llegan desde el norte pero sin lluvia: algunas nubes." },
        { options: ["rain", "snow", "shine"], answer: 0, why: "«Get colder at night»: el domingo lloverá por la mañana." },
        { options: ["coat", "snack", "book"], answer: 0, why: "Para el frío nocturno: un abrigo calientito." },
        { options: ["team", "tax", "test"], answer: 0, why: "«That's all from the…»: el equipo del clima." },
      ],
    },
  ],

  "en-cu-a2-11": [
    {
      id: "cz-en-a2-11-1", title: "Moving day", titleEs: "Día de mudanza", minutes: 3,
      paragraphs: [
        { it: "Saturday, 9 a. m.: the moving truck was already in front of Carol and Mike's house. Ten neighbors came to help — that's how their street works. Some carried {1} to the truck, some took care of the {2}, and Mrs. Patterson made coffee for everybody.", es: "Sábado, 9 a. m.: el camión de mudanza ya estaba frente a la casa de Carol y Mike. Diez vecinos vinieron a ayudar: así funciona su calle. Algunos cargaban cajas al camión, otros cuidaban a los niños y la señora Patterson hizo café para todos." },
        { it: "The hard part was the {3} — it didn't fit through the door, so two engineers and one very strong nurse solved the problem together. By 1 p. m., everything was in the truck. Carol shouted, «Pizza is on {4}!» and everybody cheered. «Best {5} ever», said Mike, smiling and tired.", es: "La parte difícil fue el sofá: no cabía por la puerta, así que dos ingenieros y una enfermera muy fuerte resolvieron el problema juntos. Para la 1 p. m., todo estaba en el camión. Carol gritó: «¡La pizza corre por mi cuenta!» y todos aplaudieron. «La mejor mudanza de la historia», dijo Mike, sonriente y cansado." },
      ],
      gaps: [
        { options: ["boxes", "clouds", "songs"], answer: 0, why: "En una mudanza se cargan cajas al camión." },
        { options: ["kids", "taxes", "plants"], answer: 0, why: "Algunos vecinos cuidaban a los niños mientras los demás cargaban." },
        { options: ["couch", "toothbrush", "letter"], answer: 0, why: "Mueble grande que no cabe por la puerta: el sofá." },
        { options: ["me", "sale", "time"], answer: 0, why: "«Pizza is on me» = invito yo la pizza." },
        { options: ["move", "test", "movie"], answer: 0, why: "Todo salió bien y terminó con pizza: la mejor mudanza." },
      ],
    },
    {
      id: "cz-en-a2-11-2", title: "Rocky's weekend at my place", titleEs: "El fin de semana de Rocky en mi casa", minutes: 2,
      paragraphs: [
        { it: "Mike left me a note before their trip to Memphis: «Thanks a million for watching Rocky! He's easy. {1} him twice a day, walk him in the morning, and his ball is under the couch». The note ended with a {2}: «He'll pretend he's starving. Don't believe him».", es: "Mike me dejó una nota antes de su viaje a Memphis: «¡Mil gracias por cuidar a Rocky! Es fácil. Aliméntalo dos veces al día, sácalo a caminar por la mañana, y su pelota está debajo del sofá». La nota terminaba con una advertencia: «Fingirá que se muere de hambre. No le creas»." },
        { it: "Rocky was, in fact, easy. In the morning, he waited by the {3} with his ball; at noon, he slept in the sun like a cat; at night, he guarded my sandwich with hopeful {4}. When Mike came back on Sunday, he asked, «How was he?» — «Perfect», I said. «Can I {5} him next weekend too?»", es: "Rocky fue, de hecho, fácil. Por la mañana esperaba junto a la puerta con su pelota; al mediodía dormía al sol como un gato; por la noche vigilaba mi sándwich con ojos esperanzadores. Cuando Mike volvió el domingo, preguntó: «¿Cómo estuvo?». — «Perfecto», dije. «¿Puedo cuidarlo también el próximo fin de semana?»." },
      ],
      gaps: [
        { options: ["Feed", "Brush", "Count"], answer: 0, why: "«Twice a day» para un perro: hay que alimentarlo." },
        { options: ["warning", "poem", "bill"], answer: 0, why: "«He'll pretend he's starving»: una advertencia divertida." },
        { options: ["door", "oven", "pool"], answer: 0, why: "Esperaba con su pelota para salir: junto a la puerta." },
        { options: ["eyes", "shoes", "paws"], answer: 0, why: "«Hopeful…» mirando el sándwich: ojos esperanzadores." },
        { options: ["watch", "sell", "teach"], answer: 0, why: "Quedó encantado: ¿puede cuidarlo también el próximo fin de semana?" },
      ],
    },
    {
      id: "cz-en-a2-11-3", title: "The favor economy", titleEs: "La economía de los favores", minutes: 2,
      paragraphs: [
        { it: "In American neighborhoods, favors are a kind of {1}. You watch my dog, I lend you my ladder; you take my mail, I bring you a casserole when you're sick. Nobody keeps a list, but everybody {2} the rules: text before you stop by, say thank you loud, and return the favor when you can.", es: "En los barrios americanos, los favores son una especie de moneda. Tú me cuidas al perro, yo te presto mi escalera; tú recoges mi correo, yo te llevo una cazuela cuando estás enfermo. Nadie lleva la cuenta, pero todos conocen las reglas: avisa por mensaje antes de pasar, agradece con fuerza y devuelve el favor cuando puedas." },
        { it: "Every August, many streets close for National Night Out: tables in the middle of the road, hot dogs and music. It's a party, but also an {3}: neighbors who know each other help each other. Carol explains it best: «On this street, nobody moves a {4} alone». That's the whole {5}.", es: "Cada agosto, muchas calles cierran para el National Night Out: mesas en medio de la calle, hot dogs y música. Es una fiesta, pero también una inversión: los vecinos que se conocen se ayudan. Carol lo explica mejor: «En esta calle, nadie mueve un sofá solo». Esa es toda la filosofía." },
      ],
      gaps: [
        { options: ["currency", "disease", "language"], answer: 0, why: "Los favores se intercambian: funcionan como moneda." },
        { options: ["break", "know", "fear"], answer: 1, why: "Nadie lleva la lista, pero todos conocen las reglas." },
        { options: ["investment", "accident", "exam"], answer: 0, why: "Es fiesta y también inversión: conocerse trae ayuda futura." },
        { options: ["couch", "mountain", "carpet"], answer: 0, why: "Eco de la mudanza: nadie mueve un sofá solo." },
        { options: ["philosophy", "salary", "recipe"], answer: 0, why: "«That's the whole…»: la idea completa, su filosofía de barrio." },
      ],
    },
  ],

  "en-cu-a2-12": [
    {
      id: "cz-en-a2-12-1", title: "Eight days on the Mother Road", titleEs: "Ocho días en la Mother Road", minutes: 3,
      paragraphs: [
        { it: "Last summer, we did the classic road trip: Route 66, from Chicago to Santa Monica. First, we drove 200 {1} to Springfield and slept in a $60 motel. Then we stopped at a diner and had the best {2} of the trip — thick, hot and endless, like the road itself.", es: "El verano pasado hicimos el road trip clásico: la Route 66, de Chicago a Santa Monica. Primero, manejamos 200 millas hasta Springfield y dormimos en un motel de $60. Luego paramos en un diner y comimos los mejores panqueques del viaje: gruesos, calientes e infinitos, como la carretera misma." },
        { it: "After that, we crossed the Mississippi and took photos with every giant {3} on the way. The hardest day was Arizona: 400 miles of desert. Finally, after eight days, we arrived in Santa Monica and touched the {4} water of the Pacific. «Best trip {5}», we wrote on the last photo.", es: "Después de eso, cruzamos el Misisipi y nos tomamos fotos con cada estatua gigante del camino. El día más duro fue Arizona: 400 millas de desierto. Finalmente, tras ocho días, llegamos a Santa Monica y tocamos el agua fría del Pacífico. «El mejor viaje de la historia», escribimos en la última foto." },
      ],
      gaps: [
        { options: ["miles", "pounds", "gallons"], answer: 0, why: "Distancia en carretera americana: se mide en millas." },
        { options: ["pancakes", "tickets", "naps"], answer: 0, why: "En un diner, gruesos y calientes: los mejores panqueques." },
        { options: ["statue", "insect", "airplane"], answer: 0, why: "«Giant…» típica de la Route 66: las estatuas gigantes." },
        { options: ["cold", "dirty", "hot"], answer: 0, why: "El Pacífico al final de la ruta: agua fría." },
        { options: ["ever", "never", "again"], answer: 0, why: "«Best trip ever» = el mejor viaje de la historia." },
      ],
    },
    {
      id: "cz-en-a2-12-2", title: "The diner at 7 a. m.", titleEs: "El diner a las 7 a. m.", minutes: 2,
      paragraphs: [
        { it: "We found the diner on the second morning, somewhere in Missouri. The {1} was a bottomless cup — «Sit anywhere, honey!». The waitress called everybody «honey» and remembered every order without writing anything down. The {2} on the wall said: «Best pies on Route 66».", es: "Encontramos el diner en la segunda mañana, en algún lugar de Misuri. El café era de taza infinita: «Siéntense donde quieran, ¡cariño!». La mesera les decía «cariño» a todos y recordaba cada pedido sin anotar nada. El letrero en la pared decía: «Los mejores pasteles de la Route 66»." },
        { it: "I ordered pancakes with a {3} of bacon, and my friend tried the cherry pie — at 7 a. m., because vacation has its own rules. The cook waved from the kitchen, the truckers talked about the {4}, and the coffee was refilled three times without asking. «You ready for the {5}?» asked the waitress at the end. She meant the check — diner language for «the road is waiting».", es: "Pedí panqueques con una porción de tocino y mi amigo probó el pastel de cereza a las 7 a. m., porque las vacaciones tienen sus propias reglas. El cocinero saludó desde la cocina, los camioneros hablaban del clima y el café se rellenó tres veces sin pedirlo. «¿Listos para la cuenta?», preguntó la mesera al final. Se refería al check: idioma de diner para «la carretera espera»." },
      ],
      gaps: [
        { options: ["coffee", "soup", "juice"], answer: 0, why: "«Bottomless cup» = la taza infinita de café." },
        { options: ["sign", "window", "table"], answer: 0, why: "«On the wall said 'Best pies'»: el letrero." },
        { options: ["side", "river", "garden"], answer: 0, why: "«A… of bacon» = una porción de tocino (side)." },
        { options: ["weather", "stocks", "grammar"], answer: 0, why: "Conversación clásica de camioneros: el clima." },
        { options: ["check", "movie", "test"], answer: 0, why: "«She meant the…»: la cuenta (check)." },
      ],
    },
    {
      id: "cz-en-a2-12-3", title: "Are we there yet?", titleEs: "¿Ya llegamos?", minutes: 2,
      paragraphs: [
        { it: "Hour six of the drive, and the question came from the back {1}: «Are we there yet?» — «No, buddy. Two more hours», said Dad. The snacks were gone, the kids were {2}, and even the dog was tired of looking out the window.", es: "Hora seis del viaje y la pregunta llegó desde el asiento trasero: «¿Ya llegamos?». — «No, amigo. Dos horas más», dijo papá. Los snacks se habían acabado, los niños estaban aburridos y hasta el perro estaba cansado de mirar por la ventana." },
        { it: "At the next gas {3}, Mom had an idea: a map, a pencil and a mission for each kid. «Count the water towers», she told my sister. «Find a red {4}», she told me. The last two hours passed like magic, and when we finally saw the ocean, nobody asked anything — we were {5}.", es: "En la siguiente gasolinera, mamá tuvo una idea: un mapa, un lápiz y una misión para cada niño. «Cuenta las torres de agua», le dijo a mi hermana. «Encuentra un granero rojo», me dijo a mí. Las últimas dos horas pasaron como por arte de magia y, cuando por fin vimos el océano, nadie preguntó nada: habíamos llegado." },
      ],
      gaps: [
        { options: ["seat", "yard", "truck"], answer: 0, why: "La pregunta clásica llega desde el asiento trasero." },
        { options: ["bored", "asleep", "angry"], answer: 0, why: "Snacks acabados + seis horas de viaje: aburridos." },
        { options: ["station", "payment", "card"], answer: 0, why: "«Gas…» = gasolinera (estación de servicio)." },
        { options: ["barn", "tie", "apple"], answer: 0, why: "«Find a red…» en el campo: un granero rojo." },
        { options: ["there", "home", "lost"], answer: 0, why: "Vieron el océano y nadie preguntó: habían llegado (we were there)." },
      ],
    },
  ],
};
