import type { CbGrammarDeep } from "../../extra/grammar-deep";

/* ═══ EN A1 · Grammar deep — 12 unidades ═════════════════════════════
   Explicación amplia de la gramática de cada unidad, con las trampas
   específicas del hispanohablante en inglés americano. Campos `.it` =
   inglés. Secciones: How it works / When to use it / Watch out (ES) /
   In real conversation. */

export const EN_DEEP_A1: Record<string, CbGrammarDeep> = {
  "en-cu-a1-01": {
    sezioni: [
      { t: "How it works", body: "El verbo to be tiene tres formas en presente: am (I), is (he/she/it), are (you/we/they). En inglés americano se contrae casi siempre: I'm, you're, she's, we're, they're. La contracción es lo NORMAL: sin ella suenas enfático («I AM tired» = 'sí que estoy cansado') o muy formal." },
      { t: "When to use it", body: "to be sirve para identidad (I'm a student), origen (I'm from Peru), nacionalidad (She's American), profesión (He's an engineer) y descripción (It's beautiful). Las nacionalidades SIEMPRE con mayúscula en inglés, a diferencia del español: I'm Peruvian, no «peruvian»." },
      { t: "Watch out (para hispanohablantes)", body: "1) No existe «I have 20 years»: la edad se dice con be («I'm 20 years old»). 2) «Soy de Lima» = I'm from Lima — nunca «I'm of Lima» ni «I'm Lima». 3) En español puedes omitir el sujeto («soy estudiante»); en inglés el sujeto es obligatorio, aunque sea un pronombre: I'm a student." },
      { t: "In real conversation", body: "Los americanos encadenan: «Hi, I'm Emma — what's your name?». What's = what is. Escucha también «How's it going?» (how is). Las contracciones no son flojera: son el estándar. Si las omites, suenas como un robot de película antigua." },
    ],
    esempi: [
      { it: "I'm from Lima, but I live in Boston now.", es: "Soy de Lima, pero vivo en Boston ahora." },
      { it: "She's American, from Chicago.", es: "Ella es estadounidense, de Chicago." },
      { it: "We're students at the university.", es: "Somos estudiantes en la universidad." },
      { it: "They're my friends from Texas.", es: "Son mis amigos de Texas." },
      { it: "How's it going? — Great, thanks!", es: "¿Qué tal? — ¡Muy bien, gracias!" },
    ],
    usi: [
      { q: "En una fiesta conoces a alguien. ¿Qué digo?", options: ["I'm of Peru", "I'm from Peru", "I am Peru"], answer: 1, explain: "Origen = from + país; con contracción es lo natural." },
      { q: "¿Cuál suena natural en EE. UU.?", options: ["She is American.", "She's American.", "She American."], answer: 1, explain: "La contracción es el estándar; sin sujeto es agramatical." },
    ],
  },

  "en-cu-a1-02": {
    sezioni: [
      { t: "How it works", body: "Posesivos: my, your, his (de él), her (de ella), its (de cosa/animal), our, their. his/her distinguen el GÉNERO DEL POSEEDOR, no del objeto: her father = el padre DE ELLA; his mother = la madre DE ÉL." },
      { t: "When to use it", body: "have para poseer y relaciones: I have two brothers, she has a dog. En inglés americano se usa have (no «have got», que suena británico). Tercera persona: she HAS, he HAS, it HAS — con -s." },
      { t: "Watch out (para hispanohablantes)", body: "1) «su» es ambiguo en español (de él/ella/usted/ellos); en inglés hay que ELEGIR: his/her/your/their. 2) No confundas its (posesivo de cosa: its name is Luna) con it's (contracción de it is). 3) «Tengo 25 años» → I'm 25 (con be), no «I have 25»." },
      { t: "In real conversation", body: "Los americanos preguntan «Do you have brothers or sisters?» y «Do you have any pets?» — las mascotas cuentan como familia. Responde «I have one sister and two brothers» o «I'm an only child» (hijo único)." },
    ],
    esempi: [
      { it: "This is my mother. Her name is Carmen.", es: "Esta es mi madre. Se llama Carmen." },
      { it: "That's my father. He's an engineer.", es: "Ese es mi padre. Es ingeniero." },
      { it: "She has one brother and two sisters.", es: "Ella tiene un hermano y dos hermanas." },
      { it: "Our dog is part of the family!", es: "¡Nuestro perro es parte de la familia!" },
      { it: "Their names are Daniela and Valeria.", es: "Se llaman Daniela y Valeria." },
    ],
    usi: [
      { q: "«___ father is from Quito» (el padre DE ELLA)", options: ["His", "Her", "Their"], answer: 1, explain: "El poseedor es ella → her." },
      { q: "«¿Tienes mascota?» se dice…", options: ["Do you have any pets?", "Do you have any brothers?", "Are you a pet?"], answer: 0, explain: "Pets = mascotas." },
    ],
  },

  "en-cu-a1-03": {
    sezioni: [
      { t: "How it works", body: "Presente simple: I/you get up, have, start. Preguntas con DO: «Do you get up early?». Negaciones con don't: «I don't watch TV». La -s de tercera persona llega en la unidad 8; aquí practicas I/you." },
      { t: "When to use it", body: "Rutinas, horarios y hechos: «I get up at 6:30», «Classes start at 8». Con adverbios de frecuencia: always (100 %), usually (80 %), sometimes (40 %), never (0 %) — entre sujeto y verbo: «I always have breakfast»." },
      { t: "Watch out (para hispanohablantes)", body: "1) La hora: 12 horas con a. m./p. m. — «19:00» suena a ejército. 2) «a las 8» = at 8 (preposición at para horas). 3) El orden adverbio-verbo: «I always get up», nunca «I get up always»." },
      { t: "In real conversation", body: "Pregunta «What time do you get up?» y «Do you have breakfast at home?». Los americanos dicen «I grab a coffee» (tomo un café rápido) y «sleep in» los fines de semana. «At noon» = al mediodía; «at midnight» = a medianoche." },
    ],
    esempi: [
      { it: "I get up at 6:30 in the morning.", es: "Me levanto a las 6:30 de la mañana." },
      { it: "Classes start at 8 a. m.", es: "Las clases empiezan a las 8 a. m." },
      { it: "I always have breakfast at home.", es: "Siempre desayuno en casa." },
      { it: "She never watches TV in the morning.", es: "Ella nunca ve TV por la mañana." },
      { it: "What time is it? — It's 7:55, five to eight.", es: "¿Qué hora es? — Son las 7:55, cinco para las ocho." },
    ],
    usi: [
      { q: "«Siempre desayuno» se dice…", options: ["I have always breakfast", "I always have breakfast", "Always I breakfast"], answer: 1, explain: "Adverbio entre sujeto y verbo." },
      { q: "Son las 7:45 p. m. ¿Cómo se dice?", options: ["quarter to eight in the evening", "quarter past seven", "seven and forty"], answer: 0, explain: "7:45 = cuarto PARA las ocho, por la tarde." },
    ],
  },

  "en-cu-a1-04": {
    sezioni: [
      { t: "How it works", body: "I'd like (= I would like) es la forma cortés de pedir: «I'd like a large coffee, please». I want es correcto pero más seco. Could you…? / Can I…? para pedir a otros; Can I get you…? es cómo el personal ofrece." },
      { t: "When to use it", body: "Artículos: a delante de sonido consonante (a coffee), an delante de sonido vocal (an orange juice). Es el SONIDO: an hour (h muda), a university (/ju/). some en afirmativas y ofertas; any en negativas y preguntas de existencia." },
      { t: "Watch out (para hispanohablantes)", body: "1) «Quisiera un café» → I'd like A coffee (artículo obligatorio); en español lo omites («quisiera café»), en inglés no. 2) «Para llevar» = to go (EE. UU.), no «take away» (británico). 3) «How much is it?» para precios; «How much?» a secas suena brusco." },
      { t: "In real conversation", body: "El guion de la cafetería: «Hi, what can I get you?» → «I'd like a tall latte, please» → «For here or to go?» → «To go» → «That's $5.50. Card or cash?» → «All set — have a nice day!». Aprende el guion entero: es el mismo en todo el país." },
    ],
    esempi: [
      { it: "I'd like a large coffee, please.", es: "Quisiera un café grande, por favor." },
      { it: "For here or to go? — To go, please.", es: "¿Para aquí o llevar? — Para llevar, por favor." },
      { it: "Would you like some dessert?", es: "¿Quieres algún postre?" },
      { it: "How much is it? — That's $6.25.", es: "¿Cuánto es? — Son $6.25." },
      { it: "Could I get an orange juice?", es: "¿Me podría dar un jugo de naranja?" },
    ],
    usi: [
      { q: "El pedido más cortés en cafetería:", options: ["Give me a coffee", "I'd like a coffee, please", "I want coffee now"], answer: 1, explain: "I'd like + please = estándar cortés." },
      { q: "«___ hour» lleva…", options: ["a", "an", "the"], answer: 1, explain: "hour suena /aʊər/ (vocal) → an." },
    ],
  },

  "en-cu-a1-05": {
    sezioni: [
      { t: "How it works", body: "Peticiones corteses: Could you/we…? (más formal) y Can you/we…? (directo amistoso). Could we get the check, please? es el estándar para pedir la cuenta. some en ofertas («Would you like some dessert?»), any en negativas («no onions — I don't want any onions»)." },
      { t: "When to use it", body: "En restaurante: pedir (I'd like…), modificar (no onions / extra cheese), preguntar (How much is it? — aunque el check trae el total), y la propina: 15-20 %, calculada sobre el total CON tax." },
      { t: "Watch out (para hispanohablantes)", body: "1) La cuenta es the check en EE. UU. («bill» se entiende pero suena británico). 2) «Sin cebolla» = no onions (plural, sin artículo). 3) El tax NO está en el precio del menú: suma ~8-10 % según el estado, y luego la propina. Tu $30 del menú son ~$38 de cuenta." },
      { t: "In real conversation", body: "El servidor se presenta: «Hi, I'm Ashley, I'll be your server today». Los refill de soda son gratis: «Can we get a refill?». Para pedir la cuenta: «Could we get the check, please?». El truco de propina: el tax ≈ 8-10 %; duplica el tax y tienes el 18 %." },
    ],
    esempi: [
      { it: "Could we get the check, please?", es: "¿Nos trae la cuenta, por favor?" },
      { it: "I'd like a cheeseburger, well done, no onions.", es: "Quisiera una hamburguesa, bien hecha, sin cebolla." },
      { it: "Would you like some more coffee?", es: "¿Quieres más café?" },
      { it: "We don't want any dessert, thanks.", es: "No queremos postre, gracias." },
      { it: "Everything was delicious!", es: "¡Todo estuvo delicioso!" },
    ],
    usi: [
      { q: "¿Cómo pides la cuenta en EE. UU.?", options: ["Could we get the bill?", "Could we get the check, please?", "Money, now"], answer: 1, explain: "check = cuenta en inglés americano." },
      { q: "Propina estándar en restaurante:", options: ["5 %", "15-20 %", "No se deja"], answer: 1, explain: "15-20 % es la norma social; los servers viven de esto." },
    ],
  },

  "en-cu-a1-06": {
    sezioni: [
      { t: "How it works", body: "Demostrativos: this (este/esta) y these (estos/as) para lo cercano; that/those para lo lejano. En tienda: «Do you have this in a medium?» — el patrón universal. El adjetivo va ANTES del nombre y sin concordancia: a blue shirt, two blue shirts." },
      { t: "When to use it", body: "Orden de adjetivos (opinión → tamaño → edad → color): a nice little blue dress. Precio: How much is it? / How much are these? (plural → are). «It's $59.99 plus tax» — el tax se agrega en caja." },
      { t: "Watch out (para hispanohablantes)", body: "1) «¿Cuánto cuestan estos zapatos?» → How much ARE these shoes (plural, verbo are; en español el verbo va en singular y aquí no). 2) Nunca «a shirt blue»: el adjetivo va delante, siempre. 3) «Queda ajustada» = it's tight; «queda holgada» = it's loose — sin concordar el adjetivo (it's tight vale para cualquier prenda)." },
      { t: "In real conversation", body: "Guion de tienda: «What size are you?» → «I'm a medium» → «The fitting room is over there» → «How does it fit?» → «It's a little tight in the shoulders — do you have a large?». «It runs small» = la talla sale pequeña (y «runs big» = sale grande)." },
    ],
    esempi: [
      { it: "Do you have this jacket in a large?", es: "¿Tiene esta chaqueta en talla L?" },
      { it: "These pants are too long.", es: "Estos pantalones quedan muy largos." },
      { it: "How much are these shoes?", es: "¿Cuánto cuestan estos zapatos?" },
      { it: "It's a little tight in the shoulders.", es: "Queda un poco ajustada en los hombros." },
      { it: "It's $59.99 plus tax.", es: "Cuesta $59.99 más impuesto." },
    ],
    usi: [
      { q: "Orden correcto:", options: ["a nice gray jacket", "a jacket nice gray", "a gray nice jacket"], answer: 0, explain: "Opinión → color → nombre; adjetivo antes del nombre." },
      { q: "«How much ___ these sneakers?»", options: ["is", "are", "be"], answer: 1, explain: "Plural (sneakers) → are." },
    ],
  },

  "en-cu-a1-07": {
    sezioni: [
      { t: "How it works", body: "Direcciones = imperativo sin sujeto: Go straight, turn left/right, cross the street, take the N train. Preposiciones de lugar: next to (al lado), across from (enfrente), between (entre), on the corner (en la esquina), behind (detrás)." },
      { t: "When to use it", body: "Cómo llegar: «How do I get to the library?». Distancia: «It's three blocks from here» o «It's a five-minute walk». Las calles llevan on: «on 6th Street». En direcciones urbanas americanas, blocks sustituye a metros." },
      { t: "Watch out (para hispanohablantes)", body: "1) «Siga recto» = Go straight (nunca «follow straight»). 2) En español «queda entre el banco y el parque»; en inglés el orden es fijo: between the bank AND the park. 3) «En la esquina» = ON the corner (no «in»)." },
      { t: "In real conversation", body: "Para pedir: «Excuse me, how do I get to Times Square?». Para responder, los americanos dan 3 datos: dirección (straight), giro (left on 6th) y referencia (it's next to the courthouse). Cierra con «Have a nice day! — You too!»." },
    ],
    esempi: [
      { it: "Go straight for two blocks.", es: "Siga recto dos cuadras." },
      { it: "Turn left on 6th Street.", es: "Gire a la izquierda en la 6th Street." },
      { it: "It's next to the courthouse.", es: "Está al lado del juzgado." },
      { it: "The pharmacy is across from the bank.", es: "La farmacia está enfrente del banco." },
      { it: "It's a five-minute walk from here.", es: "Está a cinco minutos a pie de aquí." },
    ],
    usi: [
      { q: "«Está entre el parque y el banco»:", options: ["It's between the park and the bank", "It's between the bank the park", "It's among park bank"], answer: 0, explain: "between X and Y, con and." },
      { q: "«Tome el tren N»:", options: ["Take the N train", "You take N the train", "Enter to N train"], answer: 0, explain: "Imperativo + artículo: take the N train." },
    ],
  },

  "en-cu-a1-08": {
    sezioni: [
      { t: "How it works", body: "Presente simple, 3ª persona: the train leaves, it takes, she wants — la -s es obligatoria. PERO en preguntas y negativas la -s se va al auxiliar: Does the train stop here? / The train doesn't stop here. Does + sujeto + verbo en base: nunca «does the train stops»." },
      { t: "When to use it", body: "Horarios y duraciones: «What time does the train leave?», «How long does the trip take?». Billetes: one way (ida) / round trip (ida y vuelta); coach (turista) / business class; track 4 = vía 4." },
      { t: "Watch out (para hispanohablantes)", body: "1) La -s de 3ª persona es la regla que más olvidan los hispanohablantes: «she want» se oye como error grave. 2) En preguntas, la -s desaparece del verbo: «Does she wants?» es error doble. 3) «Viajar en tren» = by train (sin artículo); «take the train» = tomar el tren." },
      { t: "In real conversation", body: "En la taquilla: «I'd like a round-trip ticket to New York» → «One way or round trip?» → «The next train leaves at 9:10 from track 4» → «How long does it take?» → «About four hours». A bordo: «We are now arriving at Penn Station»." },
    ],
    esempi: [
      { it: "The train leaves at 9:10 from track 4.", es: "El tren sale a las 9:10 de la vía 4." },
      { it: "Does the train stop in Providence?", es: "¿El tren para en Providence?" },
      { it: "How long does the trip take?", es: "¿Cuánto dura el viaje?" },
      { it: "The trip takes about four hours.", es: "El viaje dura unas cuatro horas." },
      { it: "One way or round trip?", es: "¿Solo ida o ida y vuelta?" },
    ],
    usi: [
      { q: "«El tren sale a las 9:10»:", options: ["The train leave at 9:10", "The train leaves at 9:10", "The train leaving at 9:10"], answer: 1, explain: "3ª persona → leaves (con -s)." },
      { q: "¿Cuál es correcta?", options: ["Does the train stops here?", "Do the train stop here?", "Does the train stop here?"], answer: 2, explain: "Does + sujeto + verbo en base (stop, sin -s)." },
    ],
  },

  "en-cu-a1-09": {
    sezioni: [
      { t: "How it works", body: "like/love/hate/enjoy + verbo en -ing: I like playing, she loves cooking, I hate waking up early. En inglés americano casual, el -ing domina sobre like + to (que suena más formal o de propósito)." },
      { t: "When to use it", body: "Gustos y pasatiempos: «What do you like doing on weekends?». Intensidad: I like < I love < I'm really into. Negativo suave: «I don't really like…». Preguntar por planes: «Do you want to watch the game?»." },
      { t: "Watch out (para hispanohablantes)", body: "1) «Me gusta jugar» = I like playing — el verbo lleva -ing, no infinitivo español. 2) «I'm really into hiking»: into + sustantivo/gerundio = me apasiona. 3) Cuidado con «I like you» vs «I'd like…»: el primero es sentimiento; el segundo, un pedido." },
      { t: "In real conversation", body: "La pregunta clásica de fiesta: «What do you do for fun?» — responde con energía: «I'm really into hiking and I love game days». Los americanos valoran el entusiasmo por encima de la precisión gramatical: «Oh, you gotta try Colorado!» es la respuesta típica." },
    ],
    esempi: [
      { it: "I like playing soccer on weekends.", es: "Me gusta jugar fútbol los fines de semana." },
      { it: "She loves cooking tex-mex food.", es: "Le encanta cocinar comida tex-mex." },
      { it: "I hate waking up early!", es: "¡Odio despertar temprano!" },
      { it: "I'm really into hiking.", es: "Me apasiona el senderismo." },
      { it: "Do you want to watch the game with us?", es: "¿Quieres ver el partido con nosotros?" },
    ],
    usi: [
      { q: "«Me encanta cocinar»:", options: ["I love cook", "I love cooking", "I love to cooking"], answer: 1, explain: "love + -ing." },
      { q: "Pregunta de fiesta para hablar de gustos:", options: ["What do you do for fun?", "What is your salary?", "How old are you?"], answer: 0, explain: "for fun = pasatiempos; salario y edad son tabú." },
    ],
  },

  "en-cu-a1-10": {
    sezioni: [
      { t: "How it works", body: "there is (singular) / there are (plural): There's a balcony, There are two bedrooms. Preguntas: Is there…? / Are there…? Negativo: there isn't / there aren't. En el habla rápida los americanos usan there's hasta con plurales; en escritura, separa." },
      { t: "When to use it", body: "Describir espacios: «There's a big living room and there are two closets». Los apartamentos se cuentan en dormitorios y baños: «It's a two-bed, two-bath». El verbo principal de existencia es there is/are; el resto describe." },
      { t: "Watch out (para hispanohablantes)", body: "1) «Hay dos dormitorios» = There ARE two bedrooms (plural); en español «hay» es invariable y la tentación es usar is siempre. 2) «It has two bedrooms» también existe (la casa tiene), pero para EXISTENCIA usa there are. 3) home vs house: home es donde vives (afectivo); house es la estructura." },
      { t: "In real conversation", body: "En anuncios y visitas: «How many bedrooms are there?» → «There are two, and there's a balcony». «Is there a washer in the unit?» (¿hay lavadora en el apartamento?) es pregunta de oro al buscar vivienda: la lavandería compartida cuesta tiempo." },
    ],
    esempi: [
      { it: "There are two bedrooms and a big living room.", es: "Hay dos dormitorios y una sala grande." },
      { it: "Is there a garden? — No, there isn't.", es: "¿Hay jardín? — No, no hay." },
      { it: "There's even a small balcony!", es: "¡Hasta hay un balcón pequeño!" },
      { it: "It's a two-bed, two-bath apartment.", es: "Es un apartamento de dos dormitorios y dos baños." },
      { it: "We use the garage for storage.", es: "Usamos el garaje de bodega." },
    ],
    usi: [
      { q: "«Hay tres ventanas»:", options: ["There is three windows", "There are three windows", "There be three windows"], answer: 1, explain: "Plural → there are." },
      { q: "¿Cómo describes un apto con 2 dormitorios?", options: ["a two-bed apartment", "an apartment of two beds", "a bed-double"], answer: 0, explain: "Formato estándar americano: two-bed, two-bath." },
    ],
  },

  "en-cu-a1-11": {
    sezioni: [
      { t: "How it works", body: "some/any + how much/how many: some en afirmativas y ofertas; any en negativas y preguntas de existencia. how much + incontable (milk, bread, rice); how many + contable en plural (eggs, apples, bags)." },
      { t: "When to use it", body: "En el súper: «Do you have any whole-grain bread?», «How much is a gallon of milk?». Cantidades americanas: a gallon (3.78 L), a dozen (12), a pound (454 g). Los precios de carne/fruta van per pound." },
      { t: "Watch out (para hispanohablantes)", body: "1) «¿Cuánta leche necesitamos?» = How much milk (no «how many milk»: milk es incontable). 2) «un poco de arroz» = some rice (no «a little of rice» en A1). 3) En español «tengo algunos cupones» = some coupons (afirmativa); «¿tienes pan?» → Do you have any bread? (pregunta)." },
      { t: "In real conversation", body: "Guion del súper: «Where's the peanut butter?» → «Aisle 5, next to the jams» → «It's $3.29 a gallon — on sale today» → checkout: «Did you find everything OK? Paper or plastic?» → «You saved $4.50 with coupons!». «Have a good one!» = versión corta de «have a nice day»." },
    ],
    esempi: [
      { it: "Do you have any whole-grain bread?", es: "¿Tienen pan integral?" },
      { it: "How much is a gallon of milk?", es: "¿Cuánto cuesta un galón de leche?" },
      { it: "How many eggs do we need?", es: "¿Cuántos huevos necesitamos?" },
      { it: "I have some coupons.", es: "Tengo algunos cupones." },
      { it: "We don't have any rice at home.", es: "No tenemos arroz en casa." },
    ],
    usi: [
      { q: "«¿Cuántos huevos hay en una docena?»", options: ["How much eggs are in a dozen?", "How many eggs are in a dozen?", "How eggs are in a dozen?"], answer: 1, explain: "eggs = contable → how many." },
      { q: "«No tenemos azúcar»:", options: ["We don't have some sugar", "We don't have any sugar", "We no have sugar"], answer: 1, explain: "Negativa → any." },
    ],
  },

  "en-cu-a1-12": {
    sezioni: [
      { t: "How it works", body: "Repaso integrador del A1: to be (I'm a student), presente simple con do/does (What time does it start?), there is/are (There's a discount), some/any (I don't have any cash), I'd like (pedidos corteses) y demostrativos (this jacket)." },
      { t: "When to use it", body: "El combo turístico NYC: «How do I get to…?» + «Take the N train» + «How much is it?» + «I'd like a bagel» + «Are you a student? There's a discount». Con estas cinco estructuras resuelves el 90 % de un día de viaje." },
      { t: "Watch out (para hispanohablantes)", body: "1) Elige la estructura correcta: identidad → be; rutina/horario → presente simple con does; existencia → there is/are; pedido → I'd like. 2) No mezcles: «Do you are a student?» es imposible (do nunca con be). 3) Las contracciones al hablar: I'm, she's, there's, don't." },
      { t: "In real conversation", body: "Día completo en inglés: desayuno (I'd like a bagel with cream cheese), transporte (take the N train, it's about twenty minutes), compras (how much is it? — plus tax), cultura (are you a student? there's a discount) y despedida (have a nice day — you too!). Si sobrevives 24 horas en NYC, tu A1 está listo para A2." },
    ],
    esempi: [
      { it: "I'd like a bagel with cream cheese, please.", es: "Quisiera un bagel con queso crema, por favor." },
      { it: "What time does the show start?", es: "¿A qué hora empieza la función?" },
      { it: "There's a discount for students.", es: "Hay descuento para estudiantes." },
      { it: "I don't have any cash, but I have a card.", es: "No tengo efectivo, pero tengo tarjeta." },
      { it: "How do I get to Times Square?", es: "¿Cómo llego a Times Square?" },
    ],
    usi: [
      { q: "«¿Eres estudiante?»:", options: ["Do you are a student?", "Are you a student?", "You are student?"], answer: 1, explain: "be hace su propia pregunta; do nunca acompaña a be." },
      { q: "El combo NYC para pedir entrada:", options: ["One ticket to Hamilton — how much is it?", "I want ticket Hamilton — price?", "Give me one Hamilton"], answer: 0, explain: "Pedido cortés + pregunta de precio." },
    ],
  },
};
