import type { CbGrammarDeep } from "../../extra/grammar-deep";

/* ═══ EN A2 · Grammar deep — 12 unidades ═════════════════════════════
   Explicación amplia de la gramática de cada unidad A2 (inglés
   americano), con las trampas específicas del hispanohablante. Campos
   `.it` = inglés. Secciones: How it works / When to use it / Watch out
   (ES) / In real conversation. */

export const EN_DEEP_A2: Record<string, CbGrammarDeep> = {
  "en-cu-a2-01": {
    sezioni: [
      { t: "How it works", body: "El pasado simple se forma añadiendo -ed a los verbos regulares (watch → watched, play → played, visit → visited) y cambiando la raíz en los irregulares: go → went, have → had, see → saw, do → did, make → made, take → took. La misma forma sirve para todas las personas: I went, you went, she went — no hay conjugaciones nuevas. Para preguntar y negar entra el auxiliar did: «Did you go?», «I didn't go», y el verbo principal vuelve a su forma base." },
      { t: "When to use it", body: "Cuenta acciones terminadas en un tiempo definido: yesterday, last weekend, on Saturday, two days ago. Es el tiempo de las historias: «How was your weekend?» se resuelve con él («I went to a brunch, I saw my friends, we watched a movie»). Cuando hay un marcador claro de pasado, el español usa pretérito y el inglés pasado simple — la correspondencia es casi perfecta, y esa es tu ventaja." },
      { t: "Watch out (para hispanohablantes)", body: "1) La trampa clásica: «Did you went?» NO existe — el did ya carga el tiempo, así que el verbo vuelve a la base: «Did you go?». 2) No pronuncies la -ed como sílaba extra: watched es /wɑːtʃt/ (una sílaba); solo wanted, needed y visited llevan /ɪd/. 3) «El sábado pasado» = last Saturday, nunca «the last Saturday»; y «hace dos días» = two days ago, con ago al final." },
      { t: "In real conversation", body: "El lunes americano arranca con «How was your weekend?» en toda oficina del país. El guion: valoración corta («It was great!»), dos o tres acciones con irregulares («I went to a brunch and had pancakes»), una negativa natural («I didn't do much on Sunday») y la devolución («What about you?»). «Same here!» sirve para identificarte con la rutina del otro." },
    ],
    esempi: [
      { it: "I visited my cousins in Houston last month.", es: "Visité a mis primos en Houston el mes pasado." },
      { it: "We went to the lake and took a lot of pictures.", es: "Fuimos al lago y tomamos muchas fotos." },
      { it: "She made tacos for the whole family on Sunday.", es: "Hizo tacos para toda la familia el domingo." },
      { it: "I didn't go out on Sunday; I just relaxed at home.", es: "No salí el domingo; solo descansé en casa." },
      { it: "Did you see the game last night? The Bears won!", es: "¿Viste el partido anoche? ¡Ganaron los Bears!" },
    ],
    usi: [
      { q: "Un compañero pregunta por tu fin de semana. ¿Cuál es correcta?", options: ["I goed to a concert", "I went to a concert", "I did went to a concert"], answer: 1, explain: "go es irregular → went; y did + participio es imposible: did solo acompaña a la base." },
      { q: "«¿Fuiste al brunch del domingo?»", options: ["Did you go to the Sunday brunch?", "Did you went to the Sunday brunch?", "Went you to the Sunday brunch?"], answer: 0, explain: "Pregunta en pasado: Did + sujeto + verbo en base (go)." },
    ],
  },

  "en-cu-a2-02": {
    sezioni: [
      { t: "How it works", body: "Para pedir hay dos muelles: «Can I have a medium latte, please?» y «I'd like an iced coffee» (I'd like = I would like). some acompaña a afirmativas y cantidades sin número («some cream, some sugar»); any va en negativas e interrogativas informativas («Do you have any decaf?», «There aren't any nuts»). La elección es mecánica: depende del tipo de frase, no del significado." },
      { t: "When to use it", body: "Es la gramática del coffee shop: pedir («Can I have…?»), aceptar lo que ofrecen («I'll take a muffin»), preguntar por ingredientes («Do you have any gluten-free options?») y responder a las ofertas del barista («Would you like some whipped cream?»). También sirve para el desayuno en cualquier diner: «I'd like some scrambled eggs and a coffee»." },
      { t: "Watch out (para hispanohablantes)", body: "1) «Quisiera un café» necesita artículo en inglés: I'd like A coffee — en español lo omites, aquí es obligatorio. 2) En peticiones corteses se usa some aunque la frase sea pregunta: «Can I have some sugar?» (esperas un sí); any queda para preguntas puramente informativas. 3) a/an depende del SONIDO de la palabra siguiente: an iced tea, an hour, pero a university." },
      { t: "In real conversation", body: "El guion completo de la cafetería: «What can I get for you?» → «Can I have a grande latte, please?» → «Anything else?» → «No, that's it» → «For here or to go?» → «To go» → «Can I get a name for the cup?». Y ojo con los tamaños de las cadenas: tall es el pequeño, grande el mediano y venti el grande — nombres italianos con lógica americana." },
    ],
    esempi: [
      { it: "I'd like an iced tea with some lemon, please.", es: "Quisiera un té con hielo con un poco de limón, por favor." },
      { it: "Do you have any almond milk?", es: "¿Tienen leche de almendra?" },
      { it: "Can I have some milk on the side?", es: "¿Me puede dar un poco de leche aparte?" },
      { it: "We don't have any oat milk, sorry.", es: "No tenemos leche de avena, lo siento." },
      { it: "I'll take a chocolate chip cookie to go.", es: "Me llevo una galleta de chispas de chocolate para llevar." },
    ],
    usi: [
      { q: "Quieres saber si tienen leche de avena. ¿Cuál preguntas?", options: ["Do you have any oat milk?", "Do you have some oat milk?", "You have oat milk?"], answer: 0, explain: "Pregunta informativa de existencia → any." },
      { q: "Pides azúcar con cortesía:", options: ["Can I have any sugar?", "Can I have some sugar, please?", "Give me sugar now"], answer: 1, explain: "Petición cortés → some; «give me» suena brusco." },
    ],
  },

  "en-cu-a2-03": {
    sezioni: [
      { t: "How it works", body: "Adjetivos cortos → -er + than: «cheaper than», «nicer than», «warmer than». Largos → more + adjetivo: «more expensive than», «more useful than». Superlativos: the + -est («the biggest») o the most + adjetivo («the most beautiful»). Irregulares de memoria: good → better → the best; bad → worse → the worst. Los demostrativos this/that (singular, cerca/lejos) y these/those (plural) señalan, y one/ones sustituyen al nombre: «This one is cheaper than that one»." },
      { t: "When to use it", body: "Comparar es el motor de la compra: precios («It's cheaper than the blue one»), calidad («It's the best price at the outlet»), rebajas («These gloves are 30% off») y decisiones («It's the nicest sweater in the store»). También para opiniones cotidianas: «The subway is faster than the bus» o «This diner has the best pancakes in town»." },
      { t: "Watch out (para hispanohablantes)", body: "1) Jamás dobles la marca: «more cheaper» y «the most biggest» no existen — o -er/-est o more/most, nunca ambos. 2) El «que» del comparativo es than (con a final), no that: «cheaper than the red one». 3) El «de» del superlativo español se vuelve in/of/at: «the best prices AT the outlet», «the tallest building IN Chicago» — nunca «the best prices OF the outlet»." },
      { t: "In real conversation", body: "En tienda: «Do you have this in a large?», «Can I try these on?», «It runs small» (la talla sale pequeña) y «It runs big». Para decidir en voz alta: «This one is cheaper, but that one is nicer — I'll take the gloves». Y el cumplido de prueba: «It looks great on you!» es la frase que todo vendedor americano dirá al verte con la prenda." },
    ],
    esempi: [
      { it: "This coffee maker is cheaper than that one.", es: "Esta cafetera es más barata que esa." },
      { it: "The Grand Canyon is the most amazing place on the route.", es: "El Gran Cañón es el lugar más impresionante de la ruta." },
      { it: "These sneakers are more comfortable than those boots.", es: "Estos tenis son más cómodos que esas botas." },
      { it: "My pizza is good, but yours is the best.", es: "Mi pizza es buena, pero la tuya es la mejor." },
      { it: "Winter in Minneapolis is worse than winter in Boston.", es: "El invierno en Minneapolis es peor que el invierno en Boston." },
    ],
    usi: [
      { q: "Comparas dos suéteres en el outlet:", options: ["This sweater is more warmer than that one", "This sweater is warmer than that one", "This sweater is warmest than that one"], answer: 1, explain: "Adjetivo corto → -er + than; la marca nunca se dobla." },
      { q: "Quieres decir «es la mejor cafetería de Seattle»:", options: ["It's the best coffee shop of Seattle", "It's the better coffee shop in Seattle", "It's the best coffee shop in Seattle"], answer: 2, explain: "Superlativo the best + in + ciudad." },
    ],
  },

  "en-cu-a2-04": {
    sezioni: [
      { t: "How it works", body: "El pasado continuo es was/were + verbo en -ing: «I was waiting», «we were walking». Pinta el decorado: una acción en progreso en el pasado. El pasado simple trae el evento que irrumpe: «We were waiting for the subway when the doors closed». Fórmula mental: estaba pasando X cuando pasó Y. while acompaña al continuo («While we were running, it started to rain») y when al simple." },
      { t: "When to use it", body: "Es la gramática de las anécdotas: imprevistos de viaje («I was taking photos when I lost my MetroCard»), interrupciones domésticas («She was cooking when the phone rang») y escenas simultáneas («He was laughing, but I was nervous»). Para ambientar una historia antes del conflicto, abre siempre con el continuo." },
      { t: "Watch out (para hispanohablantes)", body: "1) El continuo siempre necesita su was/were: «I waiting for the train» es imposible — el español «estaba esperando» lo camufla. 2) Ortografía del -ing: run → running (dobra la consonante), take → taking (pierde la e), get → getting. 3) Los verbos de estado (know, want, need, like) casi nunca van en continuo: «I knew the answer», no «I was knowing»." },
      { t: "In real conversation", body: "Las historias americanas usan esta estructura con música de serie: «You'll never believe what happened — I was walking to the bridge when it started raining cats and dogs». Las reacciones también tienen guion: «No way!», «Oh no, what happened next?», «And then?». El que escucha alimenta la historia; el que la cuenta sostiene el was -ing… when." },
    ],
    esempi: [
      { it: "I was cooking dinner when the smoke alarm went off.", es: "Estaba cocinando la cena cuando se disparó la alarma de humo." },
      { it: "While she was studying, her roommate was playing music.", es: "Mientras ella estudiaba, su compañero de cuarto ponía música." },
      { it: "They were driving to Vegas when the car broke down.", es: "Iban manejando a Las Vegas cuando el auto se descompuso." },
      { it: "We were waiting outside when the store opened.", es: "Estábamos esperando afuera cuando la tienda abrió." },
      { it: "It was snowing hard, so we stayed in the motel.", es: "Nevaba con fuerza, así que nos quedamos en el motel." },
    ],
    usi: [
      { q: "«Estaba lloviendo cuando salimos»:", options: ["It rained when we left", "It was raining when we left", "It was rain when we left"], answer: 1, explain: "Decorado en progreso → was raining; la interrupción (we left) en simple." },
      { q: "¿Cuál cuenta el evento puntual que interrumpe?", options: ["The doors were closing with him inside", "The doors closed with him inside", "The doors closing with him inside"], answer: 1, explain: "El evento que irrumpe va en pasado simple: closed." },
    ],
  },

  "en-cu-a2-05": {
    sezioni: [
      { t: "How it works", body: "be going to expresa planes decididos ANTES de hablar: «I'm going to watch the game at Joe's Bar» (ya lo tenía pensado). will expresa lo que decides AL hablar, más promesas y predicciones: «I'll meet you there at 6:30». Negativa de will: won't («He won't come tonight»). Contracciones: I'll, we'll, they'll. Pregunta clave: ¿ya lo decidí antes de abrir la boca? → going to. ¿Lo decido ahora mismo? → will." },
      { t: "When to use it", body: "Para quedar: «What are you doing tonight?», «Are you going to watch the game?», «I'd love to — I'll meet you there». Para promesas de logística: «I'll text you when I'm on my way», «I'll save two seats». Y para predicciones con entusiasmo: «It's going to be a great game!». Las citas cerradas con hora también aceptan presente continuo: «I'm meeting Jordan at 6:30»." },
      { t: "Watch out (para hispanohablantes)", body: "1) El español dice «te escribo cuando salga» con presente; el inglés pide will en la principal: «I'll text you when I'm on my way» — el presente queda solo en la subordinada de tiempo. 2) will nunca lleva to: «I'll to meet you» es imposible. 3) gonna es la pronunciación casual de going to — la reconoces al escuchar, pero en escritura se escribe going to." },
      { t: "In real conversation", body: "Quedar por mensaje es un género propio: «Hey! What are you doing tonight?» → «Nothing much» → «I'm going to watch the game at Joe's. Do you want to come?» → «I'd love to! I'll be there at 6:30» → «OMW». Abreviaturas del club: BTW (por cierto), OMG (dios mío), OMW (voy en camino). Y para ampliar el plan: «The more, the merrier»." },
    ],
    esempi: [
      { it: "I'm going to visit my aunt in Denver next month.", es: "Voy a visitar a mi tía en Denver el mes que viene." },
      { it: "It's going to rain — look at those clouds!", es: "Va a llover: ¡mira esas nubes!" },
      { it: "Don't worry, I'll help you with the boxes.", es: "No te preocupes, te ayudo con las cajas." },
      { it: "They're going to move to Nashville in June.", es: "Se van a mudar a Nashville en junio." },
      { it: "I'll call you when I land in Chicago.", es: "Te llamo cuando aterrice en Chicago." },
    ],
    usi: [
      { q: "Suena el teléfono y decides contestar tú:", options: ["I'm going to get it", "I get it", "I'll get it"], answer: 2, explain: "Decisión del momento, tomada al hablar → will." },
      { q: "Cuentas un plan de fin de semana ya decidido:", options: ["I'm going to camp at the lake this weekend", "I'll camp at the lake this weekend", "I camp at the lake this weekend"], answer: 0, explain: "Plan anterior a la conversación → be going to." },
    ],
  },

  "en-cu-a2-06": {
    sezioni: [
      { t: "How it works", body: "there's (there is) + singular o incontable: «There's a balcony». there are + plural: «There are three bedrooms». Preguntas: «Is there a laundry room?», «How many bathrooms are there?». Negativas: «There isn't a gym», «There aren't any parking spots». Las preposiciones de lugar ubican todo: next to (al lado de), across from (enfrente de), between…and (entre), near (cerca), far from (lejos), by (junto a)." },
      { t: "When to use it", body: "Es la gramática de la vivienda: describir el apartamento («There's a big living room and there are two closets»), leer anuncios («2B/2B, washer in unit») y dar la ubicación («The building is across from a coffee shop, next to a bus stop»). También sirve para cualquier ciudad: «There are two pharmacies on this block» o «There's a park between the school and the library»." },
      { t: "Watch out (para hispanohablantes)", body: "1) «Hay dos baños» = There ARE two bathrooms — el español usa «hay» invariable y la tentación es dejarlo en is. 2) «Enfrente de» es across FROM, nunca across solo; y between siempre cierra con and: «between the parking lot and the gym». 3) No añadas of tras next: «next to the kitchen», jamás «next of the kitchen»." },
      { t: "In real conversation", body: "La visita al apartamento tiene su guion: «How many bedrooms are there?», «Is the room still available?», «Are utilities included?», «When can I move in?». La jerga del mercado: 2B/2B (dos dormitorios, dos baños), rent (alquiler), security deposit (depósito) y roommates. La pregunta de oro del que busca: «Is there a washer in the unit?»." },
    ],
    esempi: [
      { it: "There are two coffee shops on my street.", es: "Hay dos cafeterías en mi calle." },
      { it: "Is there a pharmacy near the hotel?", es: "¿Hay una farmacia cerca del hotel?" },
      { it: "The library is between the park and the bank.", es: "La biblioteca está entre el parque y el banco." },
      { it: "There isn't an elevator in the building.", es: "No hay ascensor en el edificio." },
      { it: "The bus stop is across from the gym.", es: "La parada de autobús está enfrente del gimnasio." },
    ],
    usi: [
      { q: "«Hay tres lavadoras en la lavandería»:", options: ["There is three washers in the laundry room", "There are three washers in the laundry room", "It has three washers"], answer: 1, explain: "Plural contable → there are." },
      { q: "«El banco está al lado de la cafetería»:", options: ["The bank is next the coffee shop", "The bank is next to the coffee shop", "The bank is next of the coffee shop"], answer: 1, explain: "next to + lugar, sin of." },
    ],
  },

  "en-cu-a2-07": {
    sezioni: [
      { t: "How it works", body: "should + verbo base da consejos: «You should rest», «You should see a doctor». La negativa es shouldn't: «You shouldn't go to work tomorrow». Es igual para todas las personas — nunca «shoulds» ni «should to». Es el consejo blando del inglés: menos mandato que must, más cálido que have to. Para los síntomas hay dos patrones: «I have a headache / a sore throat» o «My head hurts / My feet hurt» (plural → hurt)." },
      { t: "When to use it", body: "Enfermedad y recomendaciones: «What's wrong?», «I don't feel well», «When did it start? — Two days ago». El médico receta con should («You should take these antibiotics for seven days»), los amigos aconsejan («You should drink more water») y la etiqueta laboral pide avisar: «I'm sick — I'm going to stay home today»." },
      { t: "Watch out (para hispanohablantes)", body: "1) En español el dolor se refleja en la persona («me duele la cabeza»); en inglés el sujeto es la parte del cuerpo: «My head hurts». «I hurt my head» significa 'me lastimé la cabeza' — otra cosa. 2) should nunca lleva to ni -ing: «You should to rest» y «You should resting» son imposibles. 3) «Hace dos días» = two days AGO (al final), nunca «since two days»." },
      { t: "In real conversation", body: "La visita médica americana en cuatro frases: «What brings you in today?» (¿qué te trae?), «Do you have your insurance card?», «The copay is $25», «You should rest for two days». En farmacia: «I need to fill this prescription». Y el consejo de amigo en la oficina: «Man, you look terrible — you should go home»." },
    ],
    esempi: [
      { it: "You should drink a lot of water with this medicine.", es: "Deberías beber mucha agua con este medicamento." },
      { it: "She has a fever and a runny nose.", es: "Tiene fiebre y le gotea la nariz." },
      { it: "You shouldn't drink coffee before bed.", es: "No deberías tomar café antes de dormir." },
      { it: "My back hurts after moving those boxes.", es: "Me duele la espalda después de mover esas cajas." },
      { it: "You should see a dentist about that tooth.", es: "Deberías ver a un dentista por esa muela." },
    ],
    usi: [
      { q: "Un amigo tiene fiebre. Le aconsejas descansar:", options: ["You should to rest", "You should rest", "You should resting"], answer: 1, explain: "should + verbo base, sin to ni -ing." },
      { q: "«Me duelen los pies»:", options: ["My feet hurt", "My feet hurts", "I hurt my feet"], answer: 0, explain: "Los pies son el sujeto plural → hurt; «I hurt my feet» sería una lesión." },
    ],
  },

  "en-cu-a2-08": {
    sezioni: [
      { t: "How it works", body: "Contables: a carrot, two carrots, three eggs. Incontables: rice, cheese, water, bread, money — van en singular y no se cuentan en unidades: «There is some rice». Para contarlos se añade el envase o la porción: a cup of coffee, a slice of bread, a block of cheese, a can of beans. how many + contable plural («How many people are coming?»); how much + incontable («How much cheese did you buy?»)." },
      { t: "When to use it", body: "Cocina y compras: recetas («You need two cups of rice and a can of beans»), potlucks («How much food do we need for twelve people?») y restricciones alimentarias: «I'm allergic to nuts», «I'm vegan», «It's gluten-free». En afirmativas, a lot of sirve para ambos: «We have a lot of vegetables»." },
      { t: "Watch out (para hispanohablantes)", body: "1) bread, rice, money, information y advice son incontables en inglés: «an advice» y «informations» no existen — se dice «a piece of advice». 2) people es plural («people are coming»), aunque «la gente» sea singular en español. 3) «Tres panes» = three slices of bread o three loaves of bread, nunca «three breads»." },
      { t: "In real conversation", body: "En la mesa compartida: «Help yourself!» (sírvete), «Can I have some more?» (¿puedo repetir?), «What's in this dish?» (¿qué lleva este plato?). La pregunta de seguridad con alergias es normal y bien vista: «Is there any peanut oil in the salad?». Y el elogio al cocinero de turno: «Nobody can tell the difference!»." },
    ],
    esempi: [
      { it: "How many eggs do we need for the cake?", es: "¿Cuántos huevos necesitamos para el pastel?" },
      { it: "I need a loaf of bread and some butter.", es: "Necesito una barra de pan y un poco de mantequilla." },
      { it: "There isn't any milk in the fridge.", es: "No hay leche en el refrigerador." },
      { it: "How much sugar do you take in your coffee?", es: "¿Cuánta azúcar tomas en el café?" },
      { it: "We have a lot of food for the potluck.", es: "Tenemos mucha comida para el potluck." },
    ],
    usi: [
      { q: "Preguntas por la cantidad de invitados:", options: ["How much people are coming?", "How many people are coming?", "How people are coming?"], answer: 1, explain: "people = contable plural → how many." },
      { q: "Quieres decir «dos tazas de café»:", options: ["two cups of coffee", "two coffees of cup", "two cup of coffees"], answer: 0, explain: "Envase en plural + of + incontable: two cups of coffee." },
    ],
  },

  "en-cu-a2-09": {
    sezioni: [
      { t: "How it works", body: "Presente perfecto = have/has + participio: worked, gone, seen, been, done. Conecta pasado y presente: la experiencia ya ocurrió, pero importa ahora. Los marcadores tienen posición fija: ever y never entre have y el participio («Have you ever worked in retail?», «I've never worked in a store»); already y just antes del participio («I've already submitted it», «I've just sent it»); yet al final de preguntas y negativas («Have you finished yet?»)." },
      { t: "When to use it", body: "Es el tiempo de la experiencia: entrevistas («Have you ever worked on a team?»), currículum conversacional («I've been a student for two years») y logros recientes («I've just submitted my application»). En cuanto mencionas CUÁNDO, cambias a pasado simple: «I went there in 2023» — la fecha manda sobre el perfecto." },
      { t: "Watch out (para hispanohablantes)", body: "1) El presente perfecto jamás lleva fecha concreta: «I've worked there last year» es imposible — con fecha, pasado simple («I worked there last year»). 2) been vs gone: «She's gone to Miami» = se fue y sigue allá; «She's been to Miami» = fue y volvió. 3) El participio no es el pasado: «Have you ever went?» no existe → «Have you ever been?»." },
      { t: "In real conversation", body: "La entrevista americana se responde en presente perfecto y se ejemplifica en pasado simple: «Have you ever worked in retail?» → «No, I've never worked in a store, but I helped at my uncle's shop last summer». Frases de cierre: «Thank you for coming in», «We'll be in touch», y el follow-up email dentro de las 24 horas: «I look forward to hearing from you»." },
    ],
    esempi: [
      { it: "Have you ever visited the Grand Canyon?", es: "¿Has visitado alguna vez el Gran Cañón?" },
      { it: "I've never eaten deep-dish pizza before.", es: "Nunca he comido pizza de masa profunda antes." },
      { it: "He has already sent his resume.", es: "Él ya ha enviado su currículum." },
      { it: "We've just moved to a new apartment.", es: "Acabamos de mudarnos a un apartamento nuevo." },
      { it: "Have you sent the thank-you email yet?", es: "¿Has enviado ya el correo de agradecimiento?" },
    ],
    usi: [
      { q: "Preguntas por experiencia laboral sin fecha:", options: ["Did you ever work in retail?", "Have you ever worked in retail?", "Do you ever work in retail?"], answer: 1, explain: "Experiencia vital sin fecha concreta → presente perfecto con ever." },
      { q: "«Trabajé ahí el año pasado»:", options: ["I've worked there last year", "I worked there last year", "I've been working there last year"], answer: 1, explain: "Con fecha concreta (last year) → pasado simple." },
    ],
  },

  "en-cu-a2-10": {
    sezioni: [
      { t: "How it works", body: "Para predecir usamos will: «It'll snow all day», «It'll warm up by Friday», «It won't rain tomorrow». Con fuentes: «The forecast says it'll be sunny». El clima usa it como sujeto vacío: It's cold, It's raining, It'll snow. El vocabulario es adjetival: sunny, cloudy, windy, foggy; hot, warm, cool, cold, freezing. Y las temperaturas son Fahrenheit: el agua congela a 32 °F y un día agradable de verano ronda los 75 °F." },
      { t: "When to use it", body: "El weather small talk abre conversaciones en elevadores, filas y oficinas: «Cold out there, huh?». Predicciones para planes: «It'll rain in the morning, so take an umbrella». Reporte del clima: «Today it'll be sunny and warm, around 80 degrees». Y la señal para ir con going to: si ves las nubes ahora mismo («Look at those clouds — it's going to rain»), el coloquial prefiere going to." },
      { t: "Watch out (para hispanohablantes)", body: "1) El español dice «hace frío» con el verbo hacer; el inglés jamás usa make ni does: «Is it cold?» sí, «Does it cold?» imposible. 2) Los fenómenos se conjugan como verbos normales: «It rains a lot in April», «It snowed last night». 3) «minus 10» en EE. UU. significa 10 bajo cero FAHRENHEIT (unos 23 bajo cero Celsius): traduce mentalmente antes de asustarte." },
      { t: "In real conversation", body: "Frases de supervivencia invernal: «It's freezing out there!», «Bundle up!» (abrígate) y wind chill (el frío que se siente con el viento: «It feels like minus 10»). El guion del small talk: «Crazy weather, huh?» → «I know! The forecast said 2 inches» → «And we got a foot!». Nadie espera meteorología seria: es un saludo con datos." },
    ],
    esempi: [
      { it: "It'll be hot and humid in Miami all week.", es: "Estará caluroso y húmedo en Miami toda la semana." },
      { it: "The forecast says the rain will stop tonight.", es: "El pronóstico dice que la lluvia parará esta noche." },
      { it: "Grab your coat — it's freezing today!", es: "Toma tu abrigo: ¡hace un frío glacial hoy!" },
      { it: "It won't rain on Saturday, so we can have a picnic.", es: "No lloverá el sábado, así que podemos hacer un picnic." },
      { it: "What's the weather like in Denver today?", es: "¿Cómo está el clima en Denver hoy?" },
    ],
    usi: [
      { q: "Lees el pronóstico para mañana:", options: ["Tomorrow it wills be windy", "Tomorrow it'll be windy", "Tomorrow it's being windy"], answer: 1, explain: "Predicción con will → it'll (it will) be; will nunca añade -s." },
      { q: "«Hace frío hoy»:", options: ["It does cold today", "It's cold today", "Makes cold today"], answer: 1, explain: "El inglés usa it + be, nunca el verbo hacer." },
    ],
  },

  "en-cu-a2-11": {
    sezioni: [
      { t: "How it works", body: "La escalera de cortesía para pedir favores: «Can you…?» (neutro, entre conocidos) → «Could you…?» (más suave) → «Would you mind + -ing…?» (lo más cortés). Atención a la última: pregunta literalmente '¿te molestaría…?', así que aceptar es «No, not at all» ('no, para nada me molesta') = SÍ lo harás. Los pronombres objeto van después del verbo o de la preposición: help ME, call HIM, lend US, watch HER dog, I saw THEM." },
      { t: "When to use it", body: "Favores de barrio y de oficina: mudanzas («Could you bring your truck?»), mascotas («Would you mind watching our dog?»), herramientas («Can I borrow your ladder?»). Para negarte con clase: «Sorry, I can't right now, but I can help on Sunday» — el americano no se ofende; agradece la alternativa." },
      { t: "Watch out (para hispanohablantes)", body: "1) Responder «Yes» a «Would you mind…?» significa 'sí, me molesta': es exactamente lo contrario de lo que quieres. Acepta con «Not at all». 2) El pronombre español se pega al verbo («ayúdame»); el inglés jamás se antepone ni se pega: «Can you help me?», nunca «Can you me help?» ni «help to me». 3) mind va seguido de -ing: «Would you mind watching», no «to watch»." },
      { t: "In real conversation", body: "El diccionario del favor americano: «Can you do me a favor?», «I'd be happy to help», «You're a lifesaver!», «Thanks a million», «I owe you one» (te debo una) y «Pizza is on me» (invito yo). En los barrios del Sur, la hospitalidad llega en cazuela: los vecinos llevan una casserole cuando alguien está enfermo. Y siempre se avisa por mensaje antes de pasar por casa." },
    ],
    esempi: [
      { it: "Could you pick up my mail this week?", es: "¿Podrías recoger mi correo esta semana?" },
      { it: "Would you mind turning down the music?", es: "¿Te importaría bajar la música?" },
      { it: "I saw your neighbors and told them about the block party.", es: "Vi a tus vecinos y les conté de la fiesta del barrio." },
      { it: "Can I borrow your drill for an hour?", es: "¿Me prestas tu taladro una hora?" },
      { it: "Sorry, I'm busy this afternoon — how about tomorrow?", es: "Lo siento, estoy ocupado esta tarde: ¿qué tal mañana?" },
    ],
    usi: [
      { q: "Te preguntan «Would you mind watching our cat?» y quieres aceptar:", options: ["Yes, I mind", "Not at all — I love cats", "Yes, please"], answer: 1, explain: "«Not at all» = 'no me molesta' = acepto; «Yes» significaría que sí te molesta." },
      { q: "«¿Puedes ayudarnos con la mudanza?»", options: ["Can you help we with the move?", "Can you help us with the move?", "Can you us help with the move?"], answer: 1, explain: "Pronombre objeto tras el verbo: help us; nunca delante." },
    ],
  },

  "en-cu-a2-12": {
    sezioni: [
      { t: "How it works", body: "Los conectores narrativos ordenan cualquier historia: first (primero), then (luego), after that (después de eso), next (a continuación) y finally (finalmente). Van al inicio de la frase y se separan con coma: «First, we drove to Springfield. Then we stopped at a diner. Finally, we arrived in Santa Monica». Repaso de superlativos: the + -est («the longest day») o the most + adjetivo largo («the most amazing place»); irregulares: the best, the worst." },
      { t: "When to use it", body: "Es la gramática del relato de viaje: cronología con conectores, valoraciones con superlativos («the best pancakes in Illinois», «the most beautiful stop») y el cierre exclamativo de tres palabras: «Best trip ever!». Funciona igual para contar un día, una receta o una semana de trabajo: «First I packed, then I drove, finally I rested»." },
      { t: "Watch out (para hispanohablantes)", body: "1) then (narración, 'luego') y than (comparación, 'que') suenan casi igual: «We ate, then we left» vs «cheaper than that one». 2) La doble marca sigue prohibida: «the most longest» no existe — o -est o the most, nunca ambos. 3) El «de» del superlativo vuelve a ser in/of/on: «the best diner ON the route», «the tallest statue IN Texas» — no «of the route»." },
      { t: "In real conversation", body: "Contar un viaje en América es un monólogo con público: «So? I want every detail!» exige conectores. El guion: «First, we left Chicago at 6 a. m. Then we grabbed a bite at a diner. After that, we crossed the Mississippi. Finally, we made it to the ocean». Las reacciones: «Nice!», «No way!», «Best trip ever?». Y la filosofía de ruta: «The journey was the destination»." },
    ],
    esempi: [
      { it: "First, we packed the car; then we hit the road at dawn.", es: "Primero cargamos el auto; luego arrancamos al amanecer." },
      { it: "After that, we stopped at the big blue whale in Oklahoma.", es: "Después de eso, paramos en la gran ballena azul de Oklahoma." },
      { it: "The second day was the longest of all.", es: "El segundo día fue el más largo de todos." },
      { it: "Finally, we arrived at the Pacific Ocean.", es: "Finalmente, llegamos al océano Pacífico." },
      { it: "That diner has the best chili in Illinois.", es: "Ese diner tiene el mejor chili de Illinois." },
    ],
    usi: [
      { q: "Ordenas tu relato: «cargamos el auto; ___ salimos»", options: ["than", "then", "that"], answer: 1, explain: "Conector de secuencia = then; than es solo de comparación." },
      { q: "«Fue la parada más hermosa del viaje»:", options: ["It was the most beautiful stop of the trip", "It was the more beautiful stop on the trip", "It was the most beautiful stop on the trip"], answer: 2, explain: "Superlativo the most + adjetivo + on the trip." },
    ],
  },
};
