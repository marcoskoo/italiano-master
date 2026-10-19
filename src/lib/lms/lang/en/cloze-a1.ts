import type { CbClozeText } from "../../cambridge";

/* ═══ EN A1 · Cloze readings — 3 por unidad (inferencia léxica) ══════
   Metodología v9.12: el texto en inglés lleva marcadores {1} {2}… que
   el reproductor convierte en huecos; el estudiante deduce la palabra
   por el contexto. Campos: `.it` = inglés, `.es` = español. */

export const EN_CLOZE_A1: Record<string, CbClozeText[]> = {
  "en-cu-a1-01": [
    {
      id: "cz-en-a1-01-1", title: "The welcome email", titleEs: "El correo de bienvenida", minutes: 2,
      paragraphs: [
        { it: "Hi! My name is Anna and I'm {1} Chicago. I'm 30 years old and I work in an office downtown. I study English because my job needs it. I love American {2}: pizza is my favorite!", es: "¡Hola! Me llamo Anna y soy de Chicago. Tengo 30 años y trabajo en una oficina del centro. Estudio inglés porque mi trabajo lo necesita. ¡Me encanta la comida americana: la pizza es mi favorita!" },
        { it: "Every morning I {3} a coffee and read the news. In the evening I watch a movie or {4} with my friends on the phone. I'm a very {5} person: I talk with everybody!", es: "Cada mañana tomo un café y leo las noticias. Por la noche veo una película o hablo con mis amigos por teléfono. ¡Soy una persona muy sociable: hablo con todo el mundo!" },
      ],
      gaps: [
        { options: ["from", "of", "at"], answer: 0, why: "\"I'm FROM + ciudad\" = origen." },
        { options: ["food", "flag", "weather"], answer: 0, why: "La pizza indica comida." },
        { options: ["grab", "pay", "lose"], answer: 0, why: "\"Grab a coffee\" = tomar un café (exprés americana)." },
        { options: ["talk", "sleep", "cry"], answer: 0, why: "Contraste con \"watch a movie\": actividades de la tarde." },
        { options: ["friendly", "tired", "shy"], answer: 0, why: "\"I talk with everybody\" = sociable." },
      ],
    },
    {
      id: "cz-en-a1-01-2", title: "Two students at the party", titleEs: "Dos estudiantes en la fiesta", minutes: 2,
      paragraphs: [
        { it: "At the welcome party, Leo {1} to a girl with a Boston accent. «Hi! I'm Leo. I'm from Miami.» The girl {2}: «Nice to meet you! I'm Emma.»", es: "En la fiesta de bienvenida, Leo se acerca a una chica con acento de Boston. «¡Hola! Soy Leo. Soy de Miami.» La chica sonríe: «¡Encantada! Soy Emma.»" },
        { it: "They talk about classes. Leo studies {3}; Emma studies art. They are both {4} students. «See you in class!» says Emma. «See you!» {5} Leo, happy.", es: "Hablan de las clases. Leo estudia negocios; Emma estudia arte. Los dos son estudiantes nuevos. «¡Nos vemos en clase!» dice Emma. «¡Nos vemos!» responde Leo, feliz." },
      ],
      gaps: [
        { options: ["walks over", "runs away", "falls down"], answer: 0, why: "Presentarse requiere acercarse." },
        { options: ["smiles", "cries", "leaves"], answer: 0, why: "La respuesta a un saludo es una sonrisa." },
        { options: ["business", "soccer", "pizza"], answer: 0, why: "Se estudian carreras; soccer y pizza no son carreras." },
        { options: ["new", "old", "angry"], answer: 0, why: "En una welcome party, los estudiantes son nuevos." },
        { options: ["answers", "asks", "sings"], answer: 0, why: "Leo responde al saludo de despedida." },
      ],
    },
    {
      id: "cz-en-a1-01-3", title: "Where are you from?", titleEs: "¿De dónde eres?", minutes: 2,
      paragraphs: [
        { it: "Sofía is from Mexico, but she lives in San Diego now. People ask her: «Where are you {1}?» She says: «I'm Mexican, from Mexico City.» Her {2} is Spanish, but she also speaks English.", es: "Sofía es de México, pero vive en San Diego ahora. Le preguntan: «¿De dónde eres?» Ella dice: «Soy mexicana, de la Ciudad de México.» Su primer idioma es el español, pero también habla inglés." },
        { it: "In her English class, there are students from China, Brazil and Turkey. The teacher is American. Her {3} is Karen. The class is fun, and the students are {4} to be there. «English opens {5},» says Karen.", es: "En su clase de inglés hay estudiantes de China, Brasil y Turquía. La profesora es estadounidense. Se llama Karen. La clase es divertida y los estudiantes están contentos de estar ahí. «El inglés abre puertas», dice Karen." },
      ],
      gaps: [
        { options: ["from", "in", "for"], answer: 0, why: "\"Where are you FROM?\" = origen." },
        { options: ["first language", "last name", "phone number"], answer: 0, why: "El contexto habla de idiomas que habla." },
        { options: ["name", "city", "age"], answer: 0, why: "«Her ___ is Karen»: se llama Karen." },
        { options: ["happy", "late", "lost"], answer: 0, why: "La clase es divertida → están contentos." },
        { options: ["doors", "cars", "boxes"], answer: 0, why: "Metáfora fija: \"opens doors\" = abre puertas/oportunidades." },
      ],
    },
  ],

  "en-cu-a1-02": [
    {
      id: "cz-en-a1-02-1", title: "A big American family", titleEs: "Una familia americana grande", minutes: 2,
      paragraphs: [
        { it: "My family is big: my parents, my two sisters and me. My father's name is Carlos. He's a {1} at a hospital in Austin. My mother is a teacher; her {2} is Ana.", es: "Mi familia es grande: mis padres, mis dos hermanas y yo. Mi padre se llama Carlos. Es enfermero en un hospital de Austin. Mi madre es profesora; se llama Ana." },
        { it: "My sisters are students. Their names are Daniela and Valeria. We also have a cat: {3} name is Luna. In my family, pets are {4} too! On Sundays, we all have {5} together and talk for hours.", es: "Mis hermanas son estudiantes. Se llaman Daniela y Valeria. También tenemos una gata: se llama Luna. ¡En mi familia, las mascotas también son familia! Los domingos, todos cenamos juntos y hablamos por horas." },
      ],
      gaps: [
        { options: ["nurse", "movie", "banana"], answer: 0, why: "Trabaja en un hospital → profesión sanitaria." },
        { options: ["name", "car", "shoes"], answer: 0, why: "«Her ___ is Ana»: se llama Ana." },
        { options: ["Its", "Their", "Our"], answer: 0, why: "La gata (una cosa/animal) → its." },
        { options: ["family", "guests", "problems"], answer: 0, why: "«Pets are ___ too» = también son familia." },
        { options: ["dinner", "class", "work"], answer: 0, why: "Comida familiar del domingo = dinner." },
      ],
    },
    {
      id: "cz-en-a1-02-2", title: "The photo on the wall", titleEs: "La foto en la pared", minutes: 3,
      paragraphs: [
        { it: "In the living room, there is an old {1} of my grandparents' wedding. My grandma wears a white dress and my grandpa wears a {2}. They look so young!", es: "En la sala hay una foto vieja de la boda de mis abuelos. Mi abuela viste un vestido blanco y mi abuelo viste un traje. ¡Se ven tan jóvenes!" },
        { it: "Next to it, there is a photo of my parents in the 90s. My mom has long hair and my dad has a {3}. Behind them, an old car. Times change! My little brother looks {4} my father in that photo — same eyes, same {5}. «You are a copy of dad!» says my mom.", es: "Junto a ella, hay una foto de mis padres en los noventa. Mi mamá tiene el pelo largo y mi papá bigote. Detrás, un auto viejo. ¡Los tiempos cambian! Mi hermano menor se parece a mi padre en esa foto — mismos ojos, misma sonrisa. «Eres una copia de papá», dice mi mamá." },
      ],
      gaps: [
        { options: ["photo", "song", "book"], answer: 0, why: "Cuelga en la pared y muestra la boda." },
        { options: ["suit", "t-shirt", "uniform"], answer: 0, why: "En una boda formal se usa traje." },
        { options: ["mustache", "bicycle", "guitar"], answer: 0, why: "Es un rasgo facial de moda en los 90." },
        { options: ["like", "after", "for"], answer: 0, why: "\"Looks LIKE + persona\" = se parece a." },
        { options: ["smile", "job", "address"], answer: 0, why: "«Same eyes, same ___»: rasgo compartido en la foto." },
      ],
    },
    {
      id: "cz-en-a1-02-3", title: "Family video call", titleEs: "Videollamada familiar", minutes: 2,
      paragraphs: [
        { it: "Sunday evening: family {1} time on Zoom. My grandma in Lima asks a hundred questions: «Are you {2} well? Do you like the city?» I answer yes to everything.", es: "Domingo por la tarde: hora de videollamada familiar. Mi abuela en Lima hace cien preguntas: «¿Comes bien? ¿Te gusta la ciudad?» Respondo que sí a todo." },
        { it: "My uncle tells the same {3} as always, and everybody laughs. My cousin shows his new {4}. After an hour, grandma says: «I love you. Come {5} soon!» «I promise, grandma.»", es: "Mi tío cuenta el mismo chiste de siempre, y todos ríen. Mi primo muestra su nuevo tatuaje. Tras una hora, la abuela dice: «Te quiero. ¡Ven a casa pronto!» «Te lo prometo, abuela.»" },
      ],
      gaps: [
        { options: ["call", "bill", "game"], answer: 0, why: "Zoom en domingo = videollamada." },
        { options: ["eating", "sleeping", "driving"], answer: 0, why: "Las abuelas preguntan por la comida." },
        { options: ["joke", "exam", "tax"], answer: 0, why: "«As always… everybody laughs» = chiste repetido." },
        { options: ["tattoo", "law", "car"], answer: 0, why: "Los primos jóvenes muestran tatuajes." },
        { options: ["home", "school", "work"], answer: 0, why: "La abuela quiere verlo en casa." },
      ],
    },
  ],

  "en-cu-a1-03": [
    {
      id: "cz-en-a1-03-1", title: "The barista's morning", titleEs: "La mañana del barista", minutes: 3,
      paragraphs: [
        { it: "My mornings are fast. I get {1} at 5:45 a. m. and run in the park. At 6:30 I take a {2} and get dressed. I never watch TV in the morning — no {3}!", es: "Mis mañanas son rápidas. Me levanto a las 5:45 a. m. y corro en el parque. A las 6:30 me ducho y me visto. Nunca veo TV por la mañana — ¡no hay tiempo!" },
        { it: "I start {4} at 8:15 at a coffee shop. I'm a barista, so I make coffee all morning. At noon, I have lunch with my coworkers. I {5} at 4 p. m. — early enough for the gym!", es: "Empiezo a trabajar a las 8:15 en una cafetería. Soy barista, así que hago café toda la mañana. Al mediodía, almuerzo con mis compañeros. Termino a las 4 p. m. — ¡suficientemente temprano para el gimnasio!" },
      ],
      gaps: [
        { options: ["up", "off", "over"], answer: 0, why: "\"Get UP\" = levantarse." },
        { options: ["shower", "bus", "nap"], answer: 0, why: "Después de correr, uno se ducha." },
        { options: ["time", "money", "milk"], answer: 0, why: "La rutina rápida no deja tiempo para TV." },
        { options: ["work", "school", "dinner"], answer: 0, why: "Barista en cafeteria = trabajo." },
        { options: ["finish", "arrive", "pay"], answer: 0, why: "«At 4 p. m.» tras el turno = terminar." },
      ],
    },
    {
      id: "cz-en-a1-03-2", title: "Early bird or night owl?", titleEs: "¿Matutino o noctámbulo?", minutes: 2,
      paragraphs: [
        { it: "In the U.S., people ask: «Are you an early {1} or a night owl?» Early birds love the {2}; night owls love the night. My roommate is a night owl: he {3} at noon on weekends.", es: "En EE. UU. preguntan: «¿Eres matutino o noctámbulo?» Los matutinos aman la mañana; los noctámbulos aman la noche. Mi compañero de cuarto es noctámbulo: se despierta al mediodía los fines de semana." },
        { it: "I'm an early bird. I study at 6 a. m. when the house is {4}. «How do you do it?» he asks. «Your body learns your {5},» I say. «Mine learns the couch!» he laughs.", es: "Yo soy matutino. Estudio a las 6 a. m. cuando la casa está silenciosa. «¿Cómo lo haces?», pregunta. «Tu cuerpo aprende tu horario», digo. «¡El mío aprende el sofá!», ríe." },
      ],
      gaps: [
        { options: ["bird", "worm", "train"], answer: 0, why: "Expresión fija: \"early bird\"." },
        { options: ["morning", "invoice", "winter"], answer: 0, why: "Opuesto de night owl: la mañana." },
        { options: ["wakes up", "runs out", "cooks"], answer: 0, why: "El noctámbulo duerde hasta tarde → se despierta al mediodía." },
        { options: ["quiet", "noisy", "full"], answer: 0, why: "A las 6 a. m. la casa está en silencio." },
        { options: ["schedule", "name", "password"], answer: 0, why: "El cuerpo aprende el horario." },
      ],
    },
    {
      id: "cz-en-a1-03-3", title: "What time is it there?", titleEs: "¿Qué hora es allá?", minutes: 2,
      paragraphs: [
        { it: "My best friend lives in Tokyo. When I {1} up at 7 a. m. in Chicago, it's 9 p. m. there. We {2} on Sunday: my morning, his night.", es: "Mi mejor amigo vive en Tokio. Cuando yo me levanto a las 7 a. m. en Chicago, allí son las 9 p. m. Hablamos los domingos: mi mañana, su noche." },
        { it: "«Good {3}!» I say. «Good night!» he says, and we laugh. Time zones are funny: my breakfast is his {4}. He eats ramen when I eat pancakes. Same planet, different {5}!", es: "«¡Buenos días!», digo. «¡Buenas noches!», dice, y reímos. Las zonas horarias son graciosas: mi desayuno es su cena. Él come ramen cuando yo como panqueques. ¡Mismo planeta, diferentes relojes!" },
      ],
      gaps: [
        { options: ["wake", "give", "put"], answer: 0, why: "\"Wake up\" = despertarse." },
        { options: ["talk", "sleep", "drive"], answer: 0, why: "Los amigos se llaman por video." },
        { options: ["morning", "year", "luck"], answer: 0, why: "«Good morning» = saludo de día." },
        { options: ["dinner", "class", "tax"], answer: 0, why: "9 p. m. = hora de cenar." },
        { options: ["clocks", "shoes", "sizes"], answer: 0, why: "Diferentes horarios = diferentes relojes." },
      ],
    },
  ],

  "en-cu-a1-04": [
    {
      id: "cz-en-a1-04-1", title: "First time at Starbucks", titleEs: "Primera vez en Starbucks", minutes: 3,
      paragraphs: [
        { it: "My first day in the U.S. I go to a coffee shop. The menu is a {1}: tall, grande, venti? The barista asks: «What can I {2} you?» I freeze.", es: "Mi primer día en EE. UU. voy a una cafetería. El menú es un misterio: ¿tall, grande, venti? El barista pregunta: «¿Qué te preparo?» Me quedo en blanco." },
        { it: "«A… medium coffee, please?» — «For here or to {3}?» — «To go.» I {4} with my card and wait. Then, from the counter: «Alex!» They call my {5}! My coffee is ready. I feel like a local.", es: "«Un… café mediano, ¿por favor?» — «¿Para aquí o para llevar?» — «Para llevar.» Pago con tarjeta y espero. Entonces, desde el mostrador: «¡Alex!» ¡Dicen mi nombre! Mi café está listo. Me siento un local." },
      ],
      gaps: [
        { options: ["mystery", "movie", "mile"], answer: 0, why: "El menú con nombres raros es un misterio." },
        { options: ["get", "teach", "sell"], answer: 0, why: "\"What can I get you?\" = fórmula del barista." },
        { options: ["go", "stay", "come"], answer: 0, why: "\"For here or to go?\" = aquí o llevar." },
        { options: ["pay", "sing", "cook"], answer: 0, why: "Con tarjeta = pagar." },
        { options: ["name", "age", "city"], answer: 0, why: "Los baristas llaman por el nombre escrito en el vaso." },
      ],
    },
    {
      id: "cz-en-a1-04-2", title: "Coffee on the go", titleEs: "Café para llevar", minutes: 2,
      paragraphs: [
        { it: "Americans drink coffee on the {1}: on the subway, in the car, walking to class. The cups are {2}, and the sizes are crazy: tall is small!", es: "Los americanos beben café en movimiento: en el metro, en el auto, caminando a clase. Los vasos son grandes y los tamaños son una locura: ¡tall es el pequeño!" },
        { it: "In my country, coffee is a {3}: you sit, you talk, you relax. In the U.S., coffee is {4}. «Slow down!» I want to say. But then I try a pumpkin spice latte and… I {5} it. Sorry, Italy. Sorry, Peru.", es: "En mi país, el café es un ritual: te sientas, hablas, relajas. En EE. UU., el café es combustible. «¡Más despacio!», quiero decir. Pero entonces pruebo un latte de calabaza y… me encanta. Perdón, Italia. Perdón, Perú." },
      ],
      gaps: [
        { options: ["go", "moon", "phone"], answer: 0, why: "\"On the go\" = en movimiento." },
        { options: ["huge", "tiny", "wet"], answer: 0, why: "Los vasos americanos son enormes." },
        { options: ["ritual", "race", "tax"], answer: 0, why: "Sentarse y hablar = ritual." },
        { options: ["fuel", "art", "law"], answer: 0, why: "Café rápido = combustible." },
        { options: ["love", "hate", "sell"], answer: 0, why: "El giro final: le encanta el pumpkin spice." },
      ],
    },
    {
      id: "cz-en-a1-04-3", title: "The tip jar", titleEs: "El frasco de propinas", minutes: 2,
      paragraphs: [
        { it: "On the counter of every coffee shop there is a {1} jar. «Every dollar helps!» says the sign. The barista makes {2} dollars an hour — the rest comes from tips.", es: "En el mostrador de cada cafetería hay un frasco de propinas. «¡Cada dólar ayuda!», dice el cartel. El barista gana pocos dólares por hora — el resto viene de propinas." },
        { it: "Now I understand: in America, tipping is not {3}. It is part of the {4}. I put my change in the jar. «Have a nice day!» says the barista. «You {5}!» I say. Culture lesson learned.", es: "Ahora entiendo: en América, la propina no es opcional. Es parte de la cultura. Pongo mi cambio en el frasco. «¡Que tengas un buen día!», dice el barista. «¡Tú también!», digo. Lección de cultura aprendida." },
      ],
      gaps: [
        { options: ["tip", "jam", "pen"], answer: 0, why: "El texto habla de propinas (tipping)." },
        { options: ["few", "million", "zero"], answer: 0, why: "«The rest comes from tips» → sueldo base bajo." },
        { options: ["optional", "illegal", "free"], answer: 0, why: "La tesis: la propina NO es opcional." },
        { options: ["culture", "menu", "law"], answer: 0, why: "Es parte de la cultura americana." },
        { options: ["too", "late", "first"], answer: 0, why: "Respuesta a \"Have a nice day!\" = \"You too!\"." },
      ],
    },
  ],

  "en-cu-a1-05": [
    {
      id: "cz-en-a1-05-1", title: "The check arrives", titleEs: "Llega la cuenta", minutes: 3,
      paragraphs: [
        { it: "First dinner in New York. The food is great, the {1} is friendly. Then the check arrives: $42. «Plus {2},» I think, «and the tip…» Math at the table!", es: "Primera cena en Nueva York. La comida es genial, el camarero es amable. Entonces llega la cuenta: $42. «Más impuesto», pienso, «y la propina…» ¡Matemáticas en la mesa!" },
        { it: "In the U.S., the check does not {3} tax, and the tip is 18-20 %. My friend teaches me the trick: {4} the tax and double it. «$3.5 tax… so $7 tip!» I write it on the {5}. Learning to tip is learning to be a local.", es: "En EE. UU., la cuenta no incluye el impuesto y la propina es del 18-20 %. Mi amigo me enseña el truco: redondea el impuesto y duplícalo. «$3.5 de impuesto… ¡así que $7 de propina!» Lo escribo en el recibo. Aprender a dejar propina es aprender a ser local." },
      ],
      gaps: [
        { options: ["server", "dog", "bus"], answer: 0, why: "En un restaurante te atiende un server." },
        { options: ["tax", "love", "luck"], answer: 0, why: "La cuenta no incluye impuesto (tax)." },
        { options: ["include", "eat", "fly"], answer: 0, why: "El tax se suma después: no está incluido." },
        { options: ["round", "forget", "translate"], answer: 0, why: "El truco: redondear el tax y duplicarlo." },
        { options: ["receipt", "wall", "menu"], answer: 0, why: "La propina se escribe en el recibo." },
      ],
    },
    {
      id: "cz-en-a1-05-2", title: "Refills and ranch", titleEs: "Relleno y ranch", minutes: 2,
      paragraphs: [
        { it: "American restaurants have magic words: «Free {1}!» Soda and iced tea come back again and again. And the sauces! Ranch, ketchup, BBQ — a {2} of flavors on the table.", es: "Los restaurantes americanos tienen palabras mágicas: «¡Relleno gratis!». La gaseosa y el té helado vuelven una y otra vez. ¡Y las salsas! Ranch, ketchup, BBQ — un arcoíris de sabores en la mesa." },
        { it: "My first week, I ask for {3} for my fries. The server brings three cups. «Anything {4}?» she asks. «Just the check, please!» The portions are {5}: nobody leaves a U.S. restaurant hungry.", es: "Mi primera semana, pido salsa para mis papas. La camarera trae tres tazas. «¿Algo más?», pregunta. «¡Solo la cuenta, por favor!» Las porciones son enormes: nadie sale con hambre de un restaurante americano." },
      ],
      gaps: [
        { options: ["refills", "tickets", "rooms"], answer: 0, why: "\"Free refills\" = rellenos gratis." },
        { options: ["rainbow", "war", "test"], answer: 0, why: "Muchas salsas = un arcoíris de sabores." },
        { options: ["dipping sauce", "a passport", "the manager"], answer: 0, why: "Para las papas se pide salsa de untar." },
        { options: ["else", "wrong", "free"], answer: 0, why: "\"Anything else?\" = ¿algo más?" },
        { options: ["huge", "tiny", "cold"], answer: 0, why: "«Nobody leaves hungry» = porciones enormes." },
      ],
    },
    {
      id: "cz-en-a1-05-3", title: "Dinner with the Smiths", titleEs: "Cena con los Smith", minutes: 3,
      paragraphs: [
        { it: "My neighbor family invites me to {1}. «Bring nothing, just yourself!» says Mrs. Smith. At 6:30 p. m., their house smells like {2}: pot roast in the oven.", es: "La familia vecina me invita a cenar. «¡No traigas nada, solo tú!», dice la señora Smith. A las 6:30 p. m., su casa huele a hogar: pot roast al horno." },
        { it: "At the table, Mr. Smith asks: «So, where are you {3} from?» We talk about Peru, Texas and food. Their kids teach me a new {4}: «pass the salt, please». Dinner ends with apple {5}. «Come back any time!» they say. And they mean it.", es: "En la mesa, el señor Smith pregunta: «¿Y de dónde eres?» Hablamos de Perú, Texas y comida. Sus hijos me enseñan una nueva frase: «pásame la sal, por favor». La cena termina con pie de manzana. «¡Vuelve cuando quieras!», dicen. Y lo dicen en serio." },
      ],
      gaps: [
        { options: ["dinner", "court", "work"], answer: 0, why: "Invitación familiar de la tarde = cena." },
        { options: ["home", "smoke", "gas"], answer: 0, why: "\"Smells like ___\" con pot roast al horno = a hogar." },
        { options: ["originally", "never", "almost"], answer: 0, why: "\"Where are you originally from?\" = origen real." },
        { options: ["phrase", "song", "law"], answer: 0, why: "«Pass the salt, please» es una frase de mesa." },
        { options: ["pie", "soup", "rice"], answer: 0, why: "Postre típico americano: apple pie." },
      ],
    },
  ],

  "en-cu-a1-06": [
    {
      id: "cz-en-a1-06-1", title: "Size matters", titleEs: "La talla importa", minutes: 2,
      paragraphs: [
        { it: "At a store in Miami, I look for a jacket. «What {1} are you?» asks the salesperson. «Medium… I think.» She brings an M. It's {2} in the shoulders.", es: "En una tienda de Miami busco una chaqueta. «¿Qué talla usas?», pregunta la vendedora. «Mediana… creo.» Trae una M. Queda ajustada en los hombros." },
        { it: "«Let's try a {3},» she says. The L is perfect. «Sizes run {4} here,» she explains. «A European M is an American S sometimes.» I buy the jacket. Lesson: in the U.S., always {5} everything on.", es: "«Probemos una L», dice. La L queda perfecta. «Las tallas corren pequeñas aquí», explica. «Una M europea a veces es una S americana.» Compro la chaqueta. Lección: en EE. UU., pruébate todo." },
      ],
      gaps: [
        { options: ["size", "name", "major"], answer: 0, why: "\"What size are you?\" = talla." },
        { options: ["tight", "huge", "wet"], answer: 0, why: "Problema típico: queda ajustada." },
        { options: ["large", "small", "child"], answer: 0, why: "Si la M queda ajustada, se sube a la L." },
        { options: ["small", "fast", "cold"], answer: 0, why: "\"Sizes run small\" = las tallas salen pequeñas." },
        { options: ["try", "sell", "wash"], answer: 0, why: "\"Try everything on\" = probárselo todo." },
      ],
    },
    {
      id: "cz-en-a1-06-2", title: "The outlet marathon", titleEs: "El maratón del outlet", minutes: 3,
      paragraphs: [
        { it: "Outlets are a U.S. {1}: rows of stores, mountains of clothes, «70% off» signs everywhere. My aunt comes with a {2}: a list of stores, a plan, a mission.", es: "Los outlets son una institución americana: filas de tiendas, montañas de ropa, carteles de «70 % de descuento» por todas partes. Mi tía viene con una estrategia: lista de tiendas, plan, misión." },
        { it: "Two hours later, we have six {3}. «The price tag is not final,» she teaches me. «At the register, they add {4}.» I learn to read the tags: fabric, size, care. At the food court, we split a pretzel. Shopping is a {5} here — with strategy and a snack.", es: "Dos horas después, tenemos seis bolsas. «El precio de la etiqueta no es final», me enseña. «En la caja agregan el impuesto.» Aprendo a leer las etiquetas: tela, talla, cuidados. En la corte de comida, compartemos un pretzel. Comprar es un deporte aquí — con estrategia y un bocadillo." },
      ],
      gaps: [
        { options: ["institution", "accident", "island"], answer: 0, why: "Los outlets son parte de la cultura (institución)." },
        { options: ["strategy", "fever", "car"], answer: 0, why: "Lista + plan + misión = estrategia." },
        { options: ["bags", "cars", "pets"], answer: 0, why: "Tras dos horas de compras: bolsas." },
        { options: ["tax", "sugar", "salt"], answer: 0, why: "El impuesto se agrega en la caja." },
        { options: ["sport", "crime", "job"], answer: 0, why: "Estrategia + bocadillo = deporte." },
      ],
    },
    {
      id: "cz-en-a1-06-3", title: "Returns are easy", titleEs: "Devolver es fácil", minutes: 2,
      paragraphs: [
        { it: "Back home, I try the jacket again. It's too {1} now. No problem: in the U.S., {2} are easy. I go back to the store with the {3}.", es: "De vuelta en casa, me pruebo la chaqueta otra vez. Ahora me queda grande. Sin problema: en EE. UU., las devoluciones son fáciles. Vuelvo a la tienda con el recibo." },
        { it: "«Do you want {4} back or store credit?» asks the cashier. «Cash, please.» Two minutes, one signature, done. «Sorry it didn't {5} out,» she smiles. «No worries — I'll be back!» I say. Customer service, American style.", es: "«¿Quiere el reembolso o crédito de tienda?», pregunta la cajera. «Efectivo, por favor.» Dos minutos, una firma, listo. «Lástima que no resultó», sonríe. «¡Sin problema — volveré!», digo. Servicio al cliente, estilo americano." },
      ],
      gaps: [
        { options: ["big", "dark", "loud"], answer: 0, why: "Cambio de problema: ahora queda grande." },
        { options: ["returns", "taxes", "weddings"], answer: 0, why: "El texto trata de devoluciones (returns)." },
        { options: ["receipt", "uncle", "dog"], answer: 0, why: "Para devolver se necesita el recibo." },
        { options: ["cash", "hugs", "rice"], answer: 0, why: "\"Cash back or store credit?\": el reembolso." },
        { options: ["work", "sleep", "eat"], answer: 0, why: "\"Didn't work out\" = no resultó (la talla)." },
      ],
    },
  ],
  "en-cu-a1-07": [
    {
      id: "cz-en-a1-07-1", title: "Lost in the grid", titleEs: "Perdido en la cuadrícula", minutes: 3,
      paragraphs: [
        { it: "Downtown Austin, my phone dies. I need the public {1}. A man with a friendly face stops: «You look {2}. Need help?» «Yes — how do I get to the library?»", es: "En el centro de Austin, mi teléfono muere. Necesito la biblioteca pública. Un hombre de rostro amable se detiene: «Pareces perdido. ¿Necesitas ayuda?» «Sí — ¿cómo llego a la biblioteca?»" },
        { it: "«Easy! Go {3} for two blocks, turn {4} on 6th Street. It's next to the courthouse, {5} from a coffee shop.» «Thank you so much!» «No problem. Welcome to Austin!»", es: "«¡Fácil! Sigue recto dos cuadras, gira a la izquierda en la 6th Street. Está junto al juzgado, enfrente de una cafetería.» «¡Muchas gracias!» «No hay de qué. ¡Bienvenido a Austin!»" },
      ],
      gaps: [
        { options: ["library", "hospital", "airport"], answer: 0, why: "El destino es la biblioteca (lo repite)." },
        { options: ["lost", "rich", "fast"], answer: 0, why: "«You look lost» = pareces perdido." },
        { options: ["straight", "backwards", "home"], answer: 0, why: "Direcciones: go straight = sigue recto." },
        { options: ["left", "up", "inside"], answer: 0, why: "Turn left = gira a la izquierda." },
        { options: ["across", "under", "behind"], answer: 0, why: "«Across from» = enfrente de." },
      ],
    },
    {
      id: "cz-en-a1-07-2", title: "Blocks, not meters", titleEs: "Cuadras, no metros", minutes: 2,
      paragraphs: [
        { it: "In the U.S., distance is in {1}: «It's three blocks away», not «500 meters». My first week, I ask: «How many {2} to the station?»", es: "En EE. UU., la distancia se mide en cuadras: «Está a tres cuadras», no «a 500 metros». Mi primera semana, pregunto: «¿Cuántas cuadras hasta la estación?»" },
        { it: "«Ten blocks. Or a {3} ride.» «I'll walk — I need the exercise!» American cities are a {4}: numbered streets, easy logic. «You can't get {5} here,» laughs a local. «Just count the streets!»", es: "«Diez cuadras. O un viaje en taxi.» «Caminaré — ¡necesito el ejercicio!» Las ciudades americanas son una cuadrícula: calles numeradas, lógica fácil. «Aquí no puedes perderte», ríe un local. «¡Solo cuenta las calles!»" },
      ],
      gaps: [
        { options: ["blocks", "kilos", "gallons"], answer: 0, why: "La unidad urbana americana: blocks." },
        { options: ["blocks", "pounds", "degrees"], answer: 0, why: "Pregunta paralela: cuántas cuadras." },
        { options: ["cab", "plane", "ship"], answer: 0, why: "«A ___ ride» = viaje en taxi (cab)." },
        { options: ["grid", "forest", "river"], answer: 0, why: "Calles numeradas = cuadrícula (grid)." },
        { options: ["lost", "married", "paid"], answer: 0, why: "«You can't get lost» = no puedes perderte." },
      ],
    },
    {
      id: "cz-en-a1-07-3", title: "The friendly stranger", titleEs: "El desconocido amable", minutes: 2,
      paragraphs: [
        { it: "I stop a woman on the street: «Excuse me, do you know where the {1} is?» She doesn't just {2} — she walks me two blocks to the door!", es: "Detengo a una mujer en la calle: «Disculpe, ¿sabe dónde está el museo?» No solo responde — ¡me acompaña dos cuadras hasta la puerta!" },
        { it: "«We love {3} here,» she says. «Small talk opens doors.» At the museum door, she adds: «Talk to the {4}; they know everything.» Inside, a guard recommends the {5} wing. Strangers everywhere, friends everywhere.", es: "«Nos encanta conversar aquí», dice. «El small talk abre puertas.» En la puerta del museo, añade: «Habla con los guardias; lo saben todo.» Adentro, un guardia recomienda el ala de pintura. Desconocidos por todas partes, amigos por todas partes." },
      ],
      gaps: [
        { options: ["museum", "dentist", "bank"], answer: 0, why: "El destino cultural del relato." },
        { options: ["answer", "sleep", "run"], answer: 0, why: "No solo responde: me acompaña." },
        { options: ["talking", "silence", "rain"], answer: 0, why: "«We love talking» = les encanta conversar." },
        { options: ["guards", "mayor", "chef"], answer: 0, why: "En un museo, el personal es de guardias." },
        { options: ["painting", "plumbing", "pizza"], answer: 0, why: "En un museo: ala de pintura." },
      ],
    },
  ],

  "en-cu-a1-08": [
    {
      id: "cz-en-a1-08-1", title: "One way or round trip?", titleEs: "¿Solo ida o ida y vuelta?", minutes: 3,
      paragraphs: [
        { it: "At South Station, the agent asks the {1} question: «One way or {2} trip?» «Round trip, please. I come back on Sunday.»", es: "En South Station, el agente hace la pregunta eterna: «¿Solo ida o ida y vuelta?» «Ida y vuelta, por favor. Vuelvo el domingo.»" },
        { it: "«Coach or {3} class?» «Coach.» «That's $78. The train {4} at 9:10 from track 4.» On board, the {5} says: «Tickets, please!» I show my phone. Easy. The train slides out of the station.", es: "«¿Clase turista o business?» «Turista.» «Son $78. El tren sale a las 9:10 de la vía 4.» A bordo, el revisor dice: «¡Billetes, por favor!» Muestro el teléfono. Fácil. El tren se desliza fuera de la estación." },
      ],
      gaps: [
        { options: ["eternal", "private", "secret"], answer: 0, why: "La pregunta que siempre hacen: eterna." },
        { options: ["round", "square", "gold"], answer: 0, why: "Round trip = ida y vuelta." },
        { options: ["business", "economy", "first"], answer: 0, why: "Las clases del tren: coach o business." },
        { options: ["leaves", "arrives", "sleeps"], answer: 0, why: "El tren sale (leaves) a las 9:10." },
        { options: ["conductor", "doctor", "chef"], answer: 0, why: "A bordo revisa billetes el conductor." },
      ],
    },
    {
      id: "cz-en-a1-08-2", title: "Arriving at Penn", titleEs: "Llegando a Penn", minutes: 2,
      paragraphs: [
        { it: "The speaker says: «We are now {1} at New York Penn Station.» People stand up, bags in the {2}. Nobody pushes — there is a line for the door.", es: "El altavoz dice: «Estamos llegando a New York Penn Station». La gente se pone de pie, bolsas en la mano. Nadie empuja — hay fila para la puerta." },
        { it: "«Let the people {3} first,» a man says kindly. New York greets us with noise and light. Out of the station, the city is a {4} of yellow cabs. My cousin waits with a {5}: «Welcome to the city!»", es: "«Deja salir a la gente primero», dice un hombre amable. Nueva York nos recibe con ruido y luz. Al salir de la estación, la ciudad es un río de taxis amarillos. Mi primo espera con un cartel: «¡Bienvenido a la ciudad!»" },
      ],
      gaps: [
        { options: ["arriving", "leaving", "eating"], answer: 0, why: "Anuncio estándar: arriving at." },
        { options: ["hand", "soup", "car"], answer: 0, why: "Bags in the hand = bolsas en la mano." },
        { options: ["off", "in", "up"], answer: 0, why: "«Let the people off» = dejar salir." },
        { options: ["river", "wall", "cake"], answer: 0, why: "Río de taxis amarillos." },
        { options: ["sign", "tax", "song"], answer: 0, why: "Mi primo espera con un cartel de bienvenida." },
      ],
    },
    {
      id: "cz-en-a1-08-3", title: "The quiet car", titleEs: "El vagón silencioso", minutes: 2,
      paragraphs: [
        { it: "Amtrak has a gift for introverts: the {1} car. No phone calls, no loud {2}. Only keyboards and pages turning.", es: "Amtrak tiene un regalo para los introvertidos: el vagón silencioso. Sin llamadas, sin música alta. Solo teclados y páginas pasando." },
        { it: "I sit by the {3} with a book. Outside, Connecticut slides by: {4}, rivers, little stations. «This is better than wifi,» I think. Two hours of {5}. The quiet car should be a law.", es: "Me siento junto a la ventanilla con un libro. Afuera, Connecticut pasa: bosques, ríos, estaciones pequeñas. «Esto es mejor que el wifi», pienso. Dos horas de paz. El vagón silencioso debería ser una ley." },
      ],
      gaps: [
        { options: ["quiet", "party", "loud"], answer: 0, why: "El texto define silencio: quiet car." },
        { options: ["music", "news", "dogs"], answer: 0, why: "Lo prohibido: llamadas y música alta." },
        { options: ["window", "aisle", "roof"], answer: 0, why: "Se sienta junto a la ventanilla a mirar el paisaje." },
        { options: ["forests", "offices", "pizzas"], answer: 0, why: "El paisaje de Connecticut: bosques." },
        { options: ["peace", "chaos", "hunger"], answer: 0, why: "Dos horas de paz (quiet car)." },
      ],
    },
  ],

  "en-cu-a1-09": [
    {
      id: "cz-en-a1-09-1", title: "What do you do for fun?", titleEs: "¿Qué haces para divertirte?", minutes: 2,
      paragraphs: [
        { it: "At a party, Americans ask: «What do you {1} for fun?» It's not an interview; it's an {2}. They expect energy in the answer.", es: "En una fiesta, los americanos preguntan: «¿Qué haces para divertirte?» No es una entrevista; es una invitación. Esperan energía en la respuesta." },
        { it: "«I'm really {3} hiking,» I say. «Oh, you gotta try Colorado!» they answer. Ten minutes of trails and gear. Small talk about {4} opens everything. My strategy: listen more, {5} less, smile always.", es: "«Me va el senderismo», digo. «¡Tienes que probar Colorado!», responden. Diez minutos de rutas y equipo. El small talk sobre pasatiempos lo abre todo. Mi estrategia: escuchar más, hablar menos, sonreír siempre." },
      ],
      gaps: [
        { options: ["do", "pay", "read"], answer: 0, why: "«What do you do for fun?» = fórmula fija." },
        { options: ["invitation", "insult", "exam"], answer: 0, why: "La pregunta funciona como invitación a conversar." },
        { options: ["into", "under", "after"], answer: 0, why: "«I'm really into + hobby» = me apasiona." },
        { options: ["hobbies", "taxes", "weather"], answer: 0, why: "El tema de conversación: pasatiempos." },
        { options: ["talk", "eat", "sleep"], answer: 0, why: "Estrategia: escuchar más, hablar menos." },
      ],
    },
    {
      id: "cz-en-a1-09-2", title: "Sunday game day", titleEs: "Domingo de partido", minutes: 3,
      paragraphs: [
        { it: "Sunday in Denver: {1} day. The house smells like wings and popcorn. Friends arrive with {2} and jerseys — one Chiefs fan, one Bills fan.", es: "Domingo en Denver: día de partido. La casa huele a alitas y palomitas. Llegan amigos con seis paquetes de cerveza y camisetas — un fan de los Chiefs, una fan de los Bills." },
        { it: "The game starts at 2 p. m. First quarter: silence. Touchdown: {3}! High fives, shouts, salsa and chips everywhere. At {4}, the commercials are better than the game. We lose 21-24, but nobody is {5}: there is always next Sunday.", es: "El partido empieza a las 2 p. m. Primer cuarto: silencio. Touchdown: ¡explosión! Chocas las palmas, gritos, salsa y chips por todas partes. Al descanso, los anuncios son mejores que el juego. Perdemos 21-24, pero nadie está triste: siempre hay próximo domingo." },
      ],
      gaps: [
        { options: ["game", "cleaning", "voting"], answer: 0, why: "El texto describe un domingo de NFL." },
        { options: ["six-packs", "books", "lamps"], answer: 0, why: "Los invitados llegan con bebida." },
        { options: ["explosion", "whisper", "yawn"], answer: 0, why: "Touchdown = celebración ruidosa." },
        { options: ["halftime", "sunrise", "noon"], answer: 0, why: "Los anuncios famosos van al medio tiempo." },
        { options: ["sad", "fired", "paid"], answer: 0, why: "«There is always next Sunday» = consuelo." },
      ],
    },
    {
      id: "cz-en-a1-09-3", title: "Road trip!", titleEs: "¡Viaje en carretera!", minutes: 2,
      paragraphs: [
        { it: "Friday, 6 p. m.: the great American {1} begins. Snacks in the back seat, a playlist of 200 songs, and four friends with one {2}: the Grand Canyon by Sunday.", es: "Viernes, 6 p. m.: comienza el gran viaje americano. Bocadillos en el asiento trasero, una lista de 200 canciones y cuatro amigos con una meta: el Gran Cañón para el domingo." },
        { it: "«Are we there {3}?» is the joke of every trip. We stop at diners, gas stations and weird {4}. «Only in America!» we repeat. A road trip is not about the {5}; it's about the miles together.", es: "«¿Ya llegamos?» es el chiste de todo viaje. Paramos en diners, gasolineras y rarezas por la carretera. «¡Solo en América!», repetimos. Un viaje en carretera no va del destino: va de las millas compartidas." },
      ],
      gaps: [
        { options: ["road trip", "tax return", "class"], answer: 0, why: "Viernes con bocadillos y playlist = road trip." },
        { options: ["goal", "fee", "exam"], answer: 0, why: "Una meta: llegar al Gran Cañón." },
        { options: ["yet", "already", "never"], answer: 0, why: "«Are we there yet?» = ¿ya llegamos?" },
        { options: ["attractions", "offices", "banks"], answer: 0, why: "Rarezas por la carretera: atracciones." },
        { options: ["destination", "fuel", "hotel"], answer: 0, why: "La moraleja: no va del destino." },
      ],
    },
  ],

  "en-cu-a1-10": [
    {
      id: "cz-en-a1-10-1", title: "House hunting", titleEs: "Buscando casa", minutes: 3,
      paragraphs: [
        { it: "Apartment hunting in L.A. The ads say: «two-bed, two-{1}, washer and dryer in unit». The rent is… a lot. «Welcome to California,» sighs the agent.", es: "Búsqueda de apartamento en Los Ángeles. Los anuncios dicen: «dos dormitorios, dos baños, lavadora y secadora en el apto». El alquiler es… mucho. «Bienvenido a California», suspira el agente." },
        { it: "The first place is {2}: no parking, a kitchen from 1980. The second has a {3} with a view — and a better price. «There's even a small {4} for your bike,» says the agent. I sign the lease. New home, new {5}!", es: "El primer lugar es un desastre: sin estacionamiento, cocina de 1980. El segundo tiene un balcón con vista — y mejor precio. «Hasta hay una bodega pequeña para tu bici», dice el agente. Firmo el contrato. ¡Nueva casa, nueva vida!" },
      ],
      gaps: [
        { options: ["bath", "bathrooms", "pools"], answer: 0, why: "Los apartamentos se cuentan en bed/bath: two-bath." },
        { options: ["a disaster", "a palace", "closed"], answer: 0, why: "Sin parking y cocina vieja = desastre." },
        { options: ["balcony", "garage", "farm"], answer: 0, why: "Con vista y mejor precio: balcón." },
        { options: ["storage", "pool", "office"], answer: 0, why: "Espacio para guardar la bici: bodega." },
        { options: ["life", "tax", "boss"], answer: 0, why: "Nueva casa = nueva vida." },
      ],
    },
    {
      id: "cz-en-a1-10-2", title: "The garage mystery", titleEs: "El misterio del garaje", minutes: 2,
      paragraphs: [
        { it: "In America, the {1} is a magic room: it fits two cars… and zero cars. Boxes, bikes, tools, an old {2} from college — everything except the car!", es: "En América, el garaje es una habitación mágica: cabe para dos autos… y cero autos. Cajas, bicis, herramientas, un viejo sillón de la universidad — todo menos el auto." },
        { it: "The car sleeps on the {3}. «Why?» I ask my neighbor. «Where else?» he answers, like I'm the {4} one. The garage, he explains, is for weekend projects and stuff you {5} in ten years. «The American dream has a room for stuff,» he laughs.", es: "El auto duerme en la calle. «¿Por qué?», pregunto al vecino. «¿Dónde si no?», responde, como si yo fuera el raro. El garaje, explica, es para proyectos de fin de semana y cosas que usarás en diez años. «El sueño americano tiene una habitación para las cosas», ríe." },
      ],
      gaps: [
        { options: ["garage", "kitchen", "closet"], answer: 0, why: "El texto describe el garaje-bodega." },
        { options: ["couch", "jet", "piano"], answer: 0, why: "Recuerdo típico de universidad: un sillón." },
        { options: ["street", "roof", "lake"], answer: 0, why: "El auto duerme en la calle." },
        { options: ["strange", "tall", "paid"], answer: 0, why: "El vecino lo mira como si el raro fuera yo." },
        { options: ["use", "sell", "burn"], answer: 0, why: "Cosas que usarás en diez años." },
      ],
    },
    {
      id: "cz-en-a1-10-3", title: "Roommates", titleEs: "Compañeros de cuarto", minutes: 2,
      paragraphs: [
        { it: "Living with {1} is an art. We make a chore {2}: dishes, trash, bathroom. Magnet on the fridge, names in columns. Democracy!", es: "Vivir con compañeros de cuarto es un arte. Hacemos una tabla de quehaceres: platos, basura, baño. Imán en el refrigerador, nombres en columnas. ¡Democracia!" },
        { it: "The rules are simple: loud music after 10 p. m. is a {3}; the last slice of pizza is sacred; and {4} is a group activity. Six months later, we are not roommates anymore — we are {5}.", es: "Las reglas son simples: música alta después de las 10 es un crimen; la última rebanada de pizza es sagrada; y cocinar es actividad de grupo. Seis meses después, ya no somos compañeros de cuarto — somos familia." },
      ],
      gaps: [
        { options: ["roommates", "horses", "banks"], answer: 0, why: "Vivir con compañeros = roommates." },
        { options: ["chart", "song", "car"], answer: 0, why: "Tabla de quehaceres en el refrigerador." },
        { options: ["crime", "gift", "must"], answer: 0, why: "Regla 1: música alta = crimen." },
        { options: ["cooking", "boxing", "drilling"], answer: 0, why: "Actividad de grupo en la casa: cocinar." },
        { options: ["family", "strangers", "lawyers"], answer: 0, why: "La evolución: de roommates a familia." },
      ],
    },
  ],

  "en-cu-a1-11": [
    {
      id: "cz-en-a1-11-1", title: "Aisle by aisle", titleEs: "Pasillo por pasillo", minutes: 3,
      paragraphs: [
        { it: "The American supermarket is a small {1}: 40 aisles, a bakery, a pharmacy and a sushi bar. My list has eight {2}. Two hours later, I have forty things in the {3}.", es: "El supermercado americano es una pequeña ciudad: 40 pasillos, panadería, farmacia y bar de sushi. Mi lista tiene ocho productos. Dos horas después, tengo cuarenta cosas en el carrito." },
        { it: "Everything is {4}: a gallon of milk, a dozen eggs, a five-pound bag of rice. The checkout line asks: «Paper or {5}?» «Paper, please.» I bag my own groceries like a local.", es: "Todo es a escala mayor: un galón de leche, una docena de huevos, una bolsa de arroz de cinco libras. En la caja preguntan: «¿Papel o plástico?» «Papel, por favor.» Embolso mi propia compra como un local." },
      ],
      gaps: [
        { options: ["city", "boat", "desk"], answer: 0, why: "40 pasillos + panadería + sushi = una ciudad." },
        { options: ["items", "cars", "pets"], answer: 0, why: "Una shopping list tiene productos (items)." },
        { options: ["cart", "pool", "pocket"], answer: 0, why: "Cuarenta cosas van en el carrito." },
        { options: ["huge", "rare", "blue"], answer: 0, why: "Galón + docena + cinco libras = todo enorme." },
        { options: ["plastic", "wood", "gold"], answer: 0, why: "«Paper or plastic?» = papel o plástico." },
      ],
    },
    {
      id: "cz-en-a1-11-2", title: "Coupon queen", titleEs: "Reina de los cupones", minutes: 2,
      paragraphs: [
        { it: "In front of me at checkout: a woman with a {1} of coupons. «I have a coupon for the cereal, and one for the milk, and a {2} one…»", es: "Delante de mí en la caja: una mujer con una carpeta de cupones. «Tengo un cupón para el cereal, otro para la leche, y uno doble…»" },
        { it: "The register beeps like a {3} game. «You saved $23.50 today!» says the cashier. Applause in the line. Couponing is a {4} here — there are TV shows about it. «Teach me, master,» I whisper. She winks: «Sunday {5}, kid. That's where the coupons live.»", es: "La caja pita como juego de arcade. «¡Hoy ahorró $23.50!», dice la cajera. Aplausos en la fila. Los cupones son un deporte aquí — hay programas de TV al respecto. «Enseñe, maestra», susurro. Guiña el ojo: «El periódico del domingo, chico. Ahí viven los cupones.»" },
      ],
      gaps: [
        { options: ["folder", "car", "pool"], answer: 0, why: "Muchos cupones se llevan en una carpeta." },
        { options: ["double", "broken", "loud"], answer: 0, why: "Cupón doble = double coupon." },
        { options: ["video", "horror", "chess"], answer: 0, why: "Pita como arcade (juego)." },
        { options: ["sport", "crime", "secret"], answer: 0, why: "Hay programas de TV: es un deporte." },
        { options: ["paper", "exam", "lunch"], answer: 0, why: "Los cupones vienen en el periódico dominical." },
      ],
    },
    {
      id: "cz-en-a1-11-3", title: "Price per pound", titleEs: "Precio por libra", minutes: 2,
      paragraphs: [
        { it: "At the deli counter, everything is per {1}: turkey, ham, cheese. «Half a pound of turkey, {2} please,» I say, like a pro.", es: "En el mostrador de fiambres, todo va por libra: pavo, jamón, queso. «Media libra de pavo, rebanado, por favor», digo como un profesional." },
        { it: "The scale never {3}. A pound is 454 grams; my brain still thinks in kilos. «You'll get {4} to it,» says the clerk. He's right: by November, I ask for «two pounds of coffee» without {5}. Freedom units… but they work.", es: "La balanza nunca miente. Una libra son 454 gramos; mi cerebro sigue pensando en kilos. «Te acostumbrarás», dice el empleado. Tiene razón: para noviembre pido «dos libras de café» sin traducir. Unidades de libertad… pero funcionan." },
      ],
      gaps: [
        { options: ["pound", "block", "song"], answer: 0, why: "El deli vende por libra." },
        { options: ["sliced", "frozen", "whole"], answer: 0, why: "El fiambre se pide rebanado." },
        { options: ["lies", "flies", "sleeps"], answer: 0, why: "La balanza es exacta: nunca miente." },
        { options: ["used", "married", "lost"], answer: 0, why: "«Get used to it» = acostumbrarse." },
        { options: ["translating", "eating", "dancing"], answer: 0, why: "Sin traducir mentalmente: pensará en libras." },
      ],
    },
  ],

  "en-cu-a1-12": [
    {
      id: "cz-en-a1-12-1", title: "The bagel breakfast", titleEs: "El desayuno de bagel", minutes: 2,
      paragraphs: [
        { it: "8 a. m. in Manhattan. The {1} is around the block. «What can I get you?» «A bagel with {2} cheese, and a large coffee, please.»", es: "8 a. m. en Manhattan. La fila da la vuelta a la manzana. «¿Qué le preparo?» «Un bagel con queso crema y un café grande, por favor.»" },
        { it: "«For here or to go?» «To go — I have a {3} to catch!» On the sidewalk, the bagel is warm, the coffee is hot, and the city is waking up. «This is the best {4} of the city,» I think: breakfast walking. «{5} a nice day!» shouts the guy at the door. You too, New York. You too.", es: "«¿Para aquí o llevar?» «Llevar — ¡tengo que tomar un tren!» En la acera, el bagel está tibio, el café caliente, y la ciudad despierta. «Este es el mejor secreto de la ciudad», pienso: desayunar caminando. «¡Que tengas un buen día!», grita el de la puerta. Tú también, Nueva York. Tú también." },
      ],
      gaps: [
        { options: ["line", "river", "tax"], answer: 0, why: "La fila del deli da la vuelta a la manzana." },
        { options: ["cream", "blue", "shoe"], answer: 0, why: "El clásico: bagel con queso crema." },
        { options: ["train", "cold", "ball"], answer: 0, why: "To go porque tiene prisa: un tren." },
        { options: ["secret", "law", "tax"], answer: 0, why: "El hallazgo del viajero: el mejor secreto." },
        { options: ["Have", "Give", "Sell"], answer: 0, why: "«Have a nice day!» = despedida estándar." },
      ],
    },
    {
      id: "cz-en-a1-12-2", title: "Subway rules", titleEs: "Reglas del metro", minutes: 2,
      paragraphs: [
        { it: "The New York subway has {1} rules. Rule one: let people {2} the train first. Rule two: step aside, don't stop at the door.", es: "El metro de Nueva York tiene reglas no escritas. Regla uno: deja salir a la gente primero. Regla dos: hazte a un lado, no te pares en la puerta." },
        { it: "Rule three: no eye contact with the {3} dancers. Rule four: the pole is for hands, not {4}. On the platform, a sign says it best: «Ladies and gentlemen, backpacks are for {5}, not for the floor.» The train arrives. I'm a New Yorker now.", es: "Regla tres: sin contacto visual con los bailarines. Regla cuatro: el tubo es para las manos, no para la espalda. En el andén, un cartel lo resume: «Señoras y señores, las mochilas son para la espalda, no para el suelo.» Llega el tren. Ya soy neoyorquino." },
      ],
      gaps: [
        { options: ["unwritten", "legal", "secret"], answer: 0, why: "Reglas no escritas (etiqueta urbana)." },
        { options: ["off", "on", "in"], answer: 0, why: "Deja BAJAR (off) a la gente." },
        { options: ["breakdance", "ballet", "chess"], answer: 0, why: "En los trenes de NY: bailarines de breakdance." },
        { options: ["backs", "sale", "lunch"], answer: 0, why: "El tubo no es para apoyar la espalda." },
        { options: ["backs", "walls", "sale"], answer: 0, why: "Mochilas a la espalda, no al suelo." },
      ],
    },
    {
      id: "cz-en-a1-12-3", title: "One day in New York", titleEs: "Un día en Nueva York", minutes: 3,
      paragraphs: [
        { it: "A perfect day in N.Y.C.: bagel for {1}, pizza by the slice for lunch, and a Broadway show at night. Between them, miles of {2}.", es: "Un día perfecto en NYC: bagel de desayuno, pizza por porción al mediodía y una función de Broadway de noche. Entre medias, millas de caminata." },
        { it: "Times Square at night is an {3} of light. «The city that never {4},» I think — the subway runs 24/7. At 1 a. m., I eat a hot dog from a cart. $3, heaven. On the way «home» (a hostel bed), I smile: my A1 English survived the city. Tomorrow: {5} the Statue of Liberty!", es: "Times Square de noche es un incendio de luz. «La ciudad que nunca duerme», pienso — el metro funciona 24/7. A la 1 a. m., como un hot dog de un carrito. $3, el cielo. De camino «a casa» (una cama de hostal), sonrío: mi inglés A1 sobrevivió a la ciudad. ¡Mañana: la Estatua de la Libertad!" },
      ],
      gaps: [
        { options: ["breakfast", "dinner", "brunch"], answer: 0, why: "El bagel abre el día: desayuno." },
        { options: ["walking", "flying", "swimming"], answer: 0, why: "En NYC se camina millas." },
        { options: ["fire", "ocean", "office"], answer: 0, why: "Times Square de noche = incendio de luz." },
        { options: ["sleeps", "eats", "works"], answer: 0, why: "La ciudad que nunca duerme (sleeps)." },
        { options: ["the Statue of Liberty", "my homework", "the taxes"], answer: 0, why: "El plan turístico clásico del día siguiente." },
      ],
    },
  ],
};
