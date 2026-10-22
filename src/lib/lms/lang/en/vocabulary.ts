import type { VocabWord, WordCategory } from "../../types";

/* ── Vocabulary · learning dictionary (EN→ES, inglés americano) ─────
   Convención del proyecto: `.it` = lengua de estudio (aquí inglés de
   EE. UU.), `.es` = español. `pron` = re-escritura fonética pensada
   para hispanohablantes (th → z/d, w → u, flapped t → d).          */

const W = (
  id: string, it: string, es: string, pron: string,
  type: VocabWord["type"], cat: WordCategory, level: VocabWord["level"],
  example: { it: string; es: string },
  extra?: Partial<Omit<VocabWord, "id" | "it" | "es" | "pron" | "type" | "cat" | "level" | "example">>
): VocabWord => ({ id, it, es, pron, type, cat, level, example, ...extra });

export const EN_VOCAB: VocabWord[] = [
  /* saluti */
  W("en-w-hello", "hello", "hola", "jelóu", "espressione", "saluti", "A1", { it: "Hello! Nice to meet you.", es: "¡Hola! Encantado de conocerte." }, { syn: ["hi"], related: ["goodbye"] }),
  W("en-w-good-morning", "good morning", "buenos días", "gud mórning", "espressione", "saluti", "A1", { it: "Good morning, everyone!", es: "¡Buenos días a todos!" }, { related: ["good night"] }),
  W("en-w-good-night", "good night", "buenas noches (al despedirse)", "gud náit", "espressione", "saluti", "A1", { it: "Good night! See you tomorrow.", es: "¡Buenas noches! Hasta mañana." }, { note: "Se dice al despedirse por la noche o antes de dormir; para saludar al llegar se usa good evening." }),
  W("en-w-goodbye", "goodbye", "adiós", "gudbái", "espressione", "saluti", "A1", { it: "Goodbye, have a great day!", es: "¡Adiós, que tengas un gran día!" }, { syn: ["bye"] }),
  W("en-w-thank-you", "thank you", "gracias", "zank iú", "espressione", "saluti", "A1", { it: "Thank you for your help!", es: "¡Gracias por tu ayuda!" }, { syn: ["thanks"], related: ["please"] }),
  W("en-w-please", "please", "por favor", "plíis", "espressione", "saluti", "A1", { it: "A coffee, please.", es: "Un café, por favor." }),

  /* famiglia */
  W("en-w-mother", "mother", "madre", "máder", "sostantivo", "famiglia", "A1", { it: "My mother cooks very well.", es: "Mi madre cocina muy bien." }, { syn: ["mom (coloquial)"], related: ["father"] }),
  W("en-w-father", "father", "padre", "fáder", "sostantivo", "famiglia", "A1", { it: "My father works in Chicago.", es: "Mi padre trabaja en Chicago." }, { syn: ["dad (coloquial)"], related: ["mother"] }),
  W("en-w-brother", "brother", "hermano", "bráder", "sostantivo", "famiglia", "A1", { it: "I have one brother and two sisters.", es: "Tengo un hermano y dos hermanas." }, { related: ["sister"] }),
  W("en-w-sister", "sister", "hermana", "síster", "sostantivo", "famiglia", "A1", { it: "My sister lives in Boston.", es: "Mi hermana vive en Boston." }, { related: ["brother"] }),
  W("en-w-son", "son", "hijo", "san", "sostantivo", "famiglia", "A1", { it: "Their son is five years old.", es: "Su hijo tiene cinco años." }, { ant: ["daughter"], related: ["sun (homófono: sol)"] }),
  W("en-w-daughter", "daughter", "hija", "dóter", "sostantivo", "famiglia", "A1", { it: "Her daughter goes to college.", es: "Su hija va a la universidad." }, { ant: ["son"] }),
  W("en-w-child", "child", "niño / niña", "cháild", "sostantivo", "famiglia", "A1", { it: "The child is playing in the park.", es: "El niño está jugando en el parque." }, { plural: "children", related: ["kid"] }),

  /* casa */
  W("en-w-house", "house", "casa", "jáus", "sostantivo", "casa", "A1", { it: "My house is small but cozy.", es: "Mi casa es pequeña pero acogedora." }, { syn: ["home (el hogar)"] }),
  W("en-w-kitchen", "kitchen", "cocina", "kíchén", "sostantivo", "casa", "A1", { it: "The kitchen is the heart of the house.", es: "La cocina es el corazón de la casa." }),
  W("en-w-bedroom", "bedroom", "dormitorio", "bédruum", "sostantivo", "casa", "A1", { it: "My bedroom has a big window.", es: "Mi dormitorio tiene una ventana grande." }, { syn: ["bedroom (room)"] }),
  W("en-w-bathroom", "bathroom", "baño", "bázruum", "sostantivo", "casa", "A1", { it: "Where is the bathroom, please?", es: "¿Dónde está el baño, por favor?" }, { syn: ["restroom (baño público)"] }),
  W("en-w-door", "door", "puerta", "dor", "sostantivo", "casa", "A1", { it: "Close the door, please!", es: "¡Cierra la puerta, por favor!" }, { ant: ["window"] }),
  W("en-w-key", "key", "llave", "kíi", "sostantivo", "casa", "A1", { it: "I lost my house keys!", es: "¡Perdí las llaves de mi casa!" }, { plural: "keys", related: ["lock"] }),

  /* alimentazione */
  W("en-w-bread", "bread", "pan", "bred", "sostantivo", "alimentazione", "A1", { it: "I buy fresh bread every morning.", es: "Compro pan fresco cada mañana." }),
  W("en-w-water", "water", "agua", "uóder", "sostantivo", "alimentazione", "A1", { it: "A glass of water, please.", es: "Un vaso de agua, por favor." }, { note: "Incontable: se pide a glass of water, nunca “a water” en registro cuidado." }),
  W("en-w-coffee", "coffee", "café", "kófi", "sostantivo", "alimentazione", "A1", { it: "I need coffee every morning.", es: "Necesito café cada mañana." }),
  W("en-w-cheese", "cheese", "queso", "chíis", "sostantivo", "alimentazione", "A1", { it: "This sandwich has cheese and ham.", es: "Este sándwich tiene queso y jamón." }),
  W("en-w-apple", "apple", "manzana", "ápol", "sostantivo", "alimentazione", "A1", { it: "An apple a day keeps the doctor away.", es: "Una manzana al día y no necesitarás médico." }, { note: "Se usa an por sonido vocal: an apple, pero a banana." }),
  W("en-w-meat", "meat", "carne", "míit", "sostantivo", "alimentazione", "A1", { it: "I don't eat meat.", es: "No como carne." }),

  /* ristorante */
  W("en-w-restaurant", "restaurant", "restaurante", "réstorant", "sostantivo", "ristorante", "A1", { it: "I have a table at the restaurant.", es: "Tengo una mesa en el restaurante." }),
  W("en-w-menu", "menu", "menú / carta", "méniu", "sostantivo", "ristorante", "A1", { it: "Can I see the menu, please?", es: "¿Puedo ver el menú, por favor?" }),
  W("en-w-waiter", "waiter", "camarero / mesero", "wéiter", "sostantivo", "ristorante", "A1", { it: "The waiter brought the check.", es: "El camarero trajo la cuenta." }, { ant: ["waitress (camarera)"] }),
  W("en-w-check", "check", "la cuenta", "chék", "sostantivo", "ristorante", "A2", { it: "Check, please!", es: "¡La cuenta, por favor!" }, { note: "En EE. UU. es check; en Reino Unido se dice bill. Check también significa comprobar." }),
  W("en-w-dessert", "dessert", "postre", "disért", "sostantivo", "ristorante", "A2", { it: "What's for dessert?", es: "¿Qué hay de postre?" }, { note: "No confundas dessert (postre) con desert (desierto): cambia una sola s." }),

  /* compras */
  W("en-w-store", "store", "tienda", "stor", "sostantivo", "compras", "A1", { it: "The store opens at nine.", es: "La tienda abre a las nueve." }, { note: "En EE. UU. se dice store; en Reino Unido, shop." }),
  W("en-w-price", "price", "precio", "práis", "sostantivo", "compras", "A1", { it: "What's the price of this shirt?", es: "¿Cuál es el precio de esta camisa?" }, { syn: ["cost"] }),
  W("en-w-buy", "buy", "comprar", "bái", "verbo", "compras", "A1", { it: "I want to buy a gift for my sister.", es: "Quiero comprar un regalo para mi hermana." }, { ant: ["sell"] }),
  W("en-w-pay", "pay", "pagar", "péi", "verbo", "compras", "A1", { it: "Can I pay with a card?", es: "¿Puedo pagar con tarjeta?" }, { related: ["cash", "credit card"] }),
  W("en-w-discount", "discount", "descuento", "dískaunt", "sostantivo", "compras", "B1", { it: "There's a 20% discount today.", es: "Hay un descuento del 20% hoy." }),

  /* transporte */
  W("en-w-train", "train", "tren", "tréin", "sostantivo", "transporte", "A1", { it: "The train to Chicago leaves at eight.", es: "El tren a Chicago sale a las ocho." }),
  W("en-w-bus", "bus", "autobús", "bas", "sostantivo", "transporte", "A1", { it: "The bus is late again.", es: "El autobús se retrasa otra vez." }, { plural: "buses" }),
  W("en-w-ticket", "ticket", "billete / boleto", "tíket", "sostantivo", "transporte", "A1", { it: "One ticket to the airport, please.", es: "Un boleto al aeropuerto, por favor." }),
  W("en-w-station", "station", "estación", "stéishon", "sostantivo", "transporte", "A1", { it: "The station is near the hotel.", es: "La estación está cerca del hotel." }),
  W("en-w-car", "car", "coche / carro", "kar", "sostantivo", "transporte", "A1", { it: "My car is parked outside.", es: "Mi coche está aparcado fuera." }, { note: "Coche se dice car también en GB; automobile en registro formal." }),

  /* viaggi */
  W("en-w-trip", "trip", "viaje", "trip", "sostantivo", "viaggi", "A2", { it: "We're planning a trip to California.", es: "Estamos planeando un viaje a California." }, { related: ["travel (viajar, verbo)"] }),
  W("en-w-airport", "airport", "aeropuerto", "érport", "sostantivo", "viaggi", "A2", { it: "The airport is far from downtown.", es: "El aeropuerto está lejos del centro." }),
  W("en-w-flight", "flight", "vuelo", "fláit", "sostantivo", "viaggi", "A2", { it: "My flight is delayed one hour.", es: "Mi vuelo se retrasa una hora." }),
  W("en-w-passport", "passport", "pasaporte", "pésport", "sostantivo", "viaggi", "A2", { it: "Your passport, please.", es: "Su pasaporte, por favor." }),

  /* hotel */
  W("en-w-hotel", "hotel", "hotel", "joutél", "sostantivo", "hotel", "A1", { it: "The hotel has a pool.", es: "El hotel tiene piscina." }),
  W("en-w-breakfast", "breakfast", "desayuno", "brékfast", "sostantivo", "hotel", "A1", { it: "Is breakfast included?", es: "¿Está incluido el desayuno?" }),
  W("en-w-reservation", "reservation", "reserva", "rezervéishon", "sostantivo", "hotel", "A2", { it: "I have a reservation under the name Garcia.", es: "Tengo una reserva a nombre de García." }, { note: "En Reino Unido se dice booking; en EE. UU., reservation." }),

  /* salud */
  W("en-w-doctor", "doctor", "médico / doctor", "dóktor", "sostantivo", "salud", "A1", { it: "I need to see a doctor.", es: "Necesito ir al médico." }, { related: ["nurse", "hospital"] }),
  W("en-w-pharmacy", "pharmacy", "farmacia", "fármasi", "sostantivo", "salud", "A2", { it: "Is there a pharmacy nearby?", es: "¿Hay una farmacia cerca?" }, { syn: ["drugstore (EE. UU.)"] }),
  W("en-w-sick", "sick", "enfermo", "sík", "aggettivo", "salud", "A2", { it: "I feel sick today, I'm staying home.", es: "Me siento enfermo hoy, me quedo en casa." }, { note: "Sick también es “mareado”: I get sick in cars. En GB, ill es más común como enfermo." }),
  W("en-w-pain", "pain", "dolor", "péin", "sostantivo", "salud", "B1", { it: "I have a sharp pain in my back.", es: "Tengo un dolor fuerte de espalda." }, { related: ["ache (dolor persistente)"] }),
  W("en-w-medicine", "medicine", "medicina (fármaco)", "médisin", "sostantivo", "salud", "A2", { it: "Take this medicine twice a day.", es: "Toma esta medicina dos veces al día." }, { note: "El fármaco también se llama medication en EE. UU." }),

  /* lavoro */
  W("en-w-job", "job", "trabajo (empleo)", "yób", "sostantivo", "lavoro", "A1", { it: "I'm looking for a job in New York.", es: "Busco trabajo en Nueva York." }, { syn: ["position", "work (como empleo)"] }),
  W("en-w-work", "work", "trabajar", "werk", "verbo", "lavoro", "A1", { it: "I work from home on Fridays.", es: "Trabajo desde casa los viernes." }, { related: ["job (sustantivo)"] }),
  W("en-w-meeting", "meeting", "reunión", "míiting", "sostantivo", "lavoro", "B1", { it: "The meeting starts at ten.", es: "La reunión empieza a las diez." }),
  W("en-w-salary", "salary", "sueldo / salario", "sálari", "sostantivo", "lavoro", "B1", { it: "The salary is negotiable.", es: "El sueldo es negociable." }),
  W("en-w-interview", "interview", "entrevista (de trabajo)", "ínterviú", "sostantivo", "lavoro", "B1", { it: "I have a job interview tomorrow.", es: "Mañana tengo una entrevista de trabajo." }),

  /* studi */
  W("en-w-school", "school", "escuela", "skúl", "sostantivo", "studi", "A1", { it: "The kids go to school by bus.", es: "Los niños van a la escuela en autobús." }),
  W("en-w-student", "student", "estudiante", "stiúdent", "sostantivo", "studi", "A1", { it: "I'm a student of English.", es: "Soy estudiante de inglés." }),
  W("en-w-teacher", "teacher", "maestro / profesor", "tíicher", "sostantivo", "studi", "A1", { it: "The teacher is very patient.", es: "El profesor es muy paciente." }, { syn: ["professor (universidad)"] }),
  W("en-w-exam", "exam", "examen", "igzám", "sostantivo", "studi", "A2", { it: "The grammar exam is hard.", es: "El examen de gramática es difícil." }, { syn: ["test"] }),
  W("en-w-book", "book", "libro", "buk", "sostantivo", "studi", "A1", { it: "This book is interesting.", es: "Este libro es interesante." }, { ant: ["book (reservar, verbo)"] }),

  /* citta */
  W("en-w-city", "city", "ciudad", "sídi", "sostantivo", "citta", "A1", { it: "New York is an amazing city.", es: "Nueva York es una ciudad increíble." }),
  W("en-w-park", "park", "parque", "park", "sostantivo", "citta", "A1", { it: "Let's walk in the park.", es: "Caminemos por el parque." }),
  W("en-w-museum", "museum", "museo", "miusíam", "sostantivo", "citta", "A1", { it: "The museum is free on Sundays.", es: "El museo es gratis los domingos." }),
  W("en-w-library", "library", "biblioteca", "láibreri", "sostantivo", "citta", "A1", { it: "I study at the city library.", es: "Estudio en la biblioteca municipal." }, { ff: true, note: "Falso amigo: library es biblioteca; la librería es bookstore." }),
  W("en-w-bridge", "bridge", "puente", "brídy", "sostantivo", "citta", "A2", { it: "The Golden Gate Bridge is in San Francisco.", es: "El puente Golden Gate está en San Francisco." }),

  /* clima */
  W("en-w-sun", "sun", "sol", "san", "sostantivo", "clima", "A1", { it: "The sun is really strong today.", es: "El sol está muy fuerte hoy." }, { related: ["sunny"] }),
  W("en-w-rain", "rain", "lluvia", "réin", "sostantivo", "clima", "A1", { it: "The rain came suddenly.", es: "La lluvia llegó de repente." }, { related: ["rainy"] }),
  W("en-w-wind", "wind", "viento", "wínd", "sostantivo", "clima", "A1", { it: "What a strong wind today!", es: "¡Qué viento tan fuerte hoy!" }, { related: ["windy"] }),
  W("en-w-hot", "hot", "caluroso / caliente", "jat", "aggettivo", "clima", "A1", { it: "It's so hot today! I'm thirsty.", es: "¡Hace tanto calor hoy! Tengo sed." }, { ant: ["cold"], note: "Para la temperatura ambiente se usa It's hot, con el sujeto it." }),
  W("en-w-cold", "cold", "frío", "kóuld", "aggettivo", "clima", "A1", { it: "It's very cold in winter here.", es: "Aquí hace mucho frío en invierno." }, { ant: ["hot"], related: ["a cold (resfriado)"] }),

  /* ropa */
  W("en-w-shirt", "shirt", "camisa", "shért", "sostantivo", "ropa", "A1", { it: "This shirt is made of cotton.", es: "Esta camisa es de algodón." }),
  W("en-w-pants", "pants", "pantalones", "pants", "sostantivo", "ropa", "A1", { it: "These pants are too tight.", es: "Estos pantalones están muy apretados." }, { note: "Siempre en plural en inglés: these pants ARE (nunca is). En GB se dice trousers." }),
  W("en-w-dress", "dress", "vestido", "drés", "sostantivo", "ropa", "A2", { it: "What a beautiful dress!", es: "¡Qué vestido tan bonito!" }, { related: ["to dress (vestirse)"] }),
  W("en-w-shoes", "shoes", "zapatos", "shúus", "sostantivo", "ropa", "A1", { it: "These shoes are very comfortable.", es: "Estos zapatos son muy cómodos." }, { plural: "shoes (par: a pair of shoes)" }),
  W("en-w-jacket", "jacket", "chaqueta", "yáket", "sostantivo", "ropa", "A1", { it: "Take a jacket, it's chilly.", es: "Lleva una chaqueta, hace fresquito." }),

  /* tecnologia */
  W("en-w-computer", "computer", "computadora / ordenador", "kompiúder", "sostantivo", "tecnologia", "A1", { it: "My computer is really slow.", es: "Mi computadora es muy lenta." }, { note: "En EE. UU. también se dice laptop (portátil)." }),
  W("en-w-phone", "phone", "teléfono", "fóun", "sostantivo", "tecnologia", "A1", { it: "My phone has no battery.", es: "Mi teléfono no tiene batería." }, { syn: ["cell phone (EE. UU.)", "mobile (GB)"] }),
  W("en-w-email", "email", "correo electrónico", "ímeil", "sostantivo", "tecnologia", "A1", { it: "Send me an email with the details.", es: "Envíame un correo con los detalles." }, { plural: "emails" }),
  W("en-w-password", "password", "contraseña", "pésuord", "sostantivo", "tecnologia", "A2", { it: "I forgot my password again.", es: "Olvidé mi contraseña otra vez." }),

  /* sport */
  W("en-w-soccer", "soccer", "fútbol", "sóker", "sostantivo", "sport", "A2", { it: "My son plays soccer every Saturday.", es: "Mi hijo juega al fútbol cada sábado." }, { note: "En EE. UU. soccer es el fútbol y football el fútbol americano." }),
  W("en-w-game", "game", "partido / juego", "guéim", "sostantivo", "sport", "A1", { it: "There's a big game tonight!", es: "¡Hay un partido grande esta noche!" }),
  W("en-w-play", "play", "jugar / tocar", "pléi", "verbo", "sport", "A1", { it: "The kids play in the park.", es: "Los niños juegan en el parque." }, { note: "Se juega A algo sin preposición: play soccer (no “play to soccer”)." }),
  W("en-w-run", "run", "correr", "ran", "verbo", "sport", "A1", { it: "I run in the park every morning.", es: "Corro en el parque cada mañana." }, { related: ["run out of (quedarse sin)"] }),

  /* musica */
  W("en-w-music", "music", "música", "miúsik", "sostantivo", "musica", "A1", { it: "I listen to American music.", es: "Escucho música americana." }, { note: "Siempre con the cuando hablamos del instrumento: play the guitar." }),
  W("en-w-song", "song", "canción", "song", "sostantivo", "musica", "A1", { it: "This song is stuck in my head.", es: "Esta canción se me quedó en la cabeza." }),
  W("en-w-listen", "listen", "escuchar", "lísen", "verbo", "musica", "A1", { it: "I listen to podcasts in English.", es: "Escucho podcasts en inglés." }, { note: "Lleva to: listen TO music (no “listen music”)." }),

  /* cinema */
  W("en-w-movie", "movie", "película", "múvi", "sostantivo", "cinema", "A1", { it: "Let's watch a movie tonight.", es: "Veamos una película esta noche." }, { note: "En GB se dice film; en EE. UU., movie." }),
  W("en-w-director", "director", "director (de cine)", "dirékter", "sostantivo", "cinema", "B1", { it: "The director won an Oscar.", es: "El director ganó un Óscar." }),
  W("en-w-subtitles", "subtitles", "subtítulos", "sábtaítels", "sostantivo", "cinema", "B1", { it: "I watch movies with English subtitles.", es: "Veo películas con subtítulos en inglés." }),

  /* relazioni */
  W("en-w-friend", "friend", "amigo", "frend", "sostantivo", "relazioni", "A1", { it: "My friend's name is Luke.", es: "Mi amigo se llama Luke." }, { ant: ["enemy"], related: ["friendly (amable)"] }),
  W("en-w-love", "love", "amor / amar", "lav", "sostantivo", "relazioni", "A1", { it: "Love is patient.", es: "El amor es paciente." }, { ant: ["hate"], related: ["to love (amar)"] }),
  W("en-w-boyfriend", "boyfriend", "novio", "bóifrend", "sostantivo", "relazioni", "A2", { it: "My boyfriend lives in Texas.", es: "Mi novio vive en Texas." }, { ant: ["girlfriend"] }),
  W("en-w-invite", "invite", "invitar", "inváit", "verbo", "relazioni", "A2", { it: "I'm inviting you to dinner.", es: "Te invito a cenar." }),

  /* finanze */
  W("en-w-money", "money", "dinero", "máni", "sostantivo", "finanze", "A1", { it: "I don't have enough money.", es: "No tengo suficiente dinero." }, { note: "Incontable: money IS, nunca “moneys” para efectivo." }),
  W("en-w-bank", "bank", "banco", "bank", "sostantivo", "finanze", "A2", { it: "I have to stop by the bank.", es: "Tengo que pasar por el banco." }),
  W("en-w-cash", "cash", "efectivo", "kash", "sostantivo", "finanze", "A2", { it: "I'll pay in cash.", es: "Pagaré en efectivo." }, { related: ["credit card", "ATM (cajero)"] }),
  W("en-w-save", "save", "ahorrar", "séiv", "verbo", "finanze", "B1", { it: "I'm saving for a trip.", es: "Estoy ahorrando para un viaje." }, { ant: ["spend (gastar)"], note: "Save también es salvar: to save a life." }),

  /* professioni */
  W("en-w-engineer", "engineer", "ingeniero", "enyinír", "sostantivo", "professioni", "A2", { it: "My brother is an engineer.", es: "Mi hermano es ingeniero." }, { note: "Profesiones con artículo: He is AN engineer." }),
  W("en-w-lawyer", "lawyer", "abogado", "lóier", "sostantivo", "professioni", "A2", { it: "The lawyer defends her client.", es: "La abogada defiende a su cliente." }),
  W("en-w-chef", "chef", "chef / cocinero", "shef", "sostantivo", "professioni", "A2", { it: "The chef prepares an amazing pasta.", es: "El chef prepara una pasta increíble." }),
  W("en-w-nurse", "nurse", "enfermero / enfermera", "nérs", "sostantivo", "professioni", "B1", { it: "The nurse works at the hospital.", es: "El enfermero trabaja en el hospital." }),

  /* attualita */
  W("en-w-news", "news", "noticias", "niúus", "sostantivo", "attualita", "A2", { it: "Have you heard the news?", es: "¿Has oído las noticias?" }, { note: "Aparentemente plural pero singular en gramática: the news IS good." }),
  W("en-w-newspaper", "newspaper", "periódico", "niúspeiper", "sostantivo", "attualita", "A2", { it: "I read the newspaper every morning.", es: "Leo el periódico cada mañana." }, { syn: ["paper (coloquial)"] }),
  W("en-w-environment", "environment", "medio ambiente", "inváironment", "sostantivo", "attualita", "B1", { it: "We must protect the environment.", es: "Debemos proteger el medio ambiente." }, { related: ["climate change"] }),

  /* scienza */
  W("en-w-science", "science", "ciencia", "sáiens", "sostantivo", "scienza", "B1", { it: "Science requires patience.", es: "La ciencia requiere paciencia." }),
  W("en-w-research", "research", "investigación", "rísértch", "sostantivo", "scienza", "B2", { it: "The research shows surprising results.", es: "La investigación muestra resultados sorprendentes." }, { note: "Incontable: a piece of research, nunca “researches”." }),
  W("en-w-scientist", "scientist", "científico", "sáientist", "sostantivo", "scienza", "B1", { it: "The scientist studies DNA.", es: "El científico estudia el ADN." }),

  /* letteratura */
  W("en-w-novel", "novel", "novela", "nóvel", "sostantivo", "letteratura", "B2", { it: "I just finished a great novel.", es: "Acabo de terminar una gran novela." }, { note: "Como adjetivo, novel significa novedoso: a novel idea." }),
  W("en-w-poem", "poem", "poema", "póuem", "sostantivo", "letteratura", "B2", { it: "She wrote a poem about the sea.", es: "Escribió un poema sobre el mar." }),
  W("en-w-writer", "writer", "escritor", "ráiter", "sostantivo", "letteratura", "B1", { it: "The writer won a big prize.", es: "El escritor ganó un gran premio." }),

  /* colori */
  W("en-w-red", "red", "rojo", "red", "aggettivo", "colori", "A1", { it: "She drives a red car.", es: "Ella conduce un coche rojo." }),
  W("en-w-blue", "blue", "azul", "blúu", "aggettivo", "colori", "A1", { it: "The sky is so blue today.", es: "El cielo está tan azul hoy." }),
  W("en-w-green", "green", "verde", "gríin", "aggettivo", "colori", "A1", { it: "Green is my favorite color.", es: "El verde es mi color favorito." }),
  W("en-w-white", "white", "blanco", "wáit", "aggettivo", "colori", "A1", { it: "He wears a white shirt.", es: "Él lleva una camisa blanca." }),

  /* corpo */
  W("en-w-head", "head", "cabeza", "jéd", "sostantivo", "corpo", "A1", { it: "My head hurts.", es: "Me duele la cabeza." }, { related: ["headache"] }),
  W("en-w-eye", "eye", "ojo", "ái", "sostantivo", "corpo", "A1", { it: "She has beautiful green eyes.", es: "Ella tiene unos ojos verdes preciosos." }, { plural: "eyes" }),
  W("en-w-heart", "heart", "corazón", "jart", "sostantivo", "corpo", "A1", { it: "My heart beats faster when I run.", es: "Mi corazón late más rápido cuando corro." }),
  W("en-w-foot", "foot", "pie", "fut", "sostantivo", "corpo", "A1", { it: "My left foot hurts after the game.", es: "Me duele el pie izquierdo después del partido." }, { plural: "feet" }),

  /* animali */
  W("en-w-dog", "dog", "perro", "dog", "sostantivo", "animali", "A1", { it: "The dog is barking at the mailman.", es: "El perro le ladra al cartero." }),
  W("en-w-cat", "cat", "gato", "kat", "sostantivo", "animali", "A1", { it: "The cat sleeps on my bed.", es: "El gato duerme en mi cama." }),
  W("en-w-bird", "bird", "pájaro", "berd", "sostantivo", "animali", "A1", { it: "A bird is singing outside.", es: "Un pájaro canta afuera." }),

  /* natura */
  W("en-w-tree", "tree", "árbol", "tríi", "sostantivo", "natura", "A1", { it: "This tree is a hundred years old.", es: "Este árbol tiene cien años." }),
  W("en-w-mountain", "mountain", "montaña", "máunten", "sostantivo", "natura", "A2", { it: "We hiked the tallest mountain in Colorado.", es: "Caminamos por la montaña más alta de Colorado." }),
  W("en-w-sea", "sea", "mar", "síi", "sostantivo", "natura", "A1", { it: "The sea is calm today.", es: "El mar está tranquilo hoy." }, { syn: ["ocean (océano)"] }),

  /* tempo */
  W("en-w-today", "today", "hoy", "tudéi", "avverbio", "tempo", "A1", { it: "Today is my birthday.", es: "Hoy es mi cumpleaños." }),
  W("en-w-tomorrow", "tomorrow", "mañana", "tumórou", "avverbio", "tempo", "A1", { it: "See you tomorrow!", es: "¡Hasta mañana!" }),
  W("en-w-yesterday", "yesterday", "ayer", "yésterdei", "avverbio", "tempo", "A1", { it: "Yesterday it rained all day.", es: "Ayer llovió todo el día." }),
  W("en-w-month", "month", "mes", "manz", "sostantivo", "tempo", "A1", { it: "I pay the rent every month.", es: "Pago la renta cada mes." }),
  W("en-w-year", "year", "año", "yíer", "sostantivo", "tempo", "A1", { it: "Happy New Year!", es: "¡Feliz Año Nuevo!" }),

  /* svago */
  W("en-w-weekend", "weekend", "fin de semana", "wíikénd", "sostantivo", "svago", "A1", { it: "What are you doing this weekend?", es: "¿Qué haces este fin de semana?" }),
  W("en-w-hobby", "hobby", "pasatiempo / afición", "jóbi", "sostantivo", "svago", "A1", { it: "My hobby is photography.", es: "Mi pasatiempo es la fotografía." }, { plural: "hobbies" }),
  W("en-w-vacation", "vacation", "vacaciones", "veikéishon", "sostantivo", "svago", "A2", { it: "I'm on vacation in Florida.", es: "Estoy de vacaciones en Florida." }, { note: "En EE. UU. vacation; en GB, holiday." }),
  W("en-w-free-time", "free time", "tiempo libre", "fríi táim", "espressione", "svago", "A1", { it: "I read a lot in my free time.", es: "Leo mucho en mi tiempo libre." }),

  /* emozioni */
  W("en-w-happy", "happy", "feliz / contento", "jápi", "aggettivo", "emozioni", "A1", { it: "I'm so happy for you!", es: "¡Estoy muy feliz por ti!" }, { ant: ["sad"], syn: ["glad"] }),
  W("en-w-sad", "sad", "triste", "sad", "aggettivo", "emozioni", "A1", { it: "The movie's ending made me sad.", es: "El final de la película me puso triste." }, { ant: ["happy"] }),
  W("en-w-tired", "tired", "cansado", "táiard", "aggettivo", "emozioni", "A1", { it: "I'm tired after work.", es: "Estoy cansado después del trabajo." }, { related: ["sleepy (con sueño)"] }),
  W("en-w-angry", "angry", "enojado / enfadado", "ángri", "aggettivo", "emozioni", "A2", { it: "Don't be angry with me.", es: "No estés enojado conmigo." }, { syn: ["mad (EE. UU.)"], note: "Mad en EE. UU. significa enojado, no loco." }),
  W("en-w-excited", "excited", "emocionado / ilusionado", "iksáitid", "aggettivo", "emozioni", "B1", { it: "I'm excited about the trip!", es: "¡Estoy ilusionado con el viaje!" }, { ff: true, note: "Falso amigo: excited es ilusionado/emocionado, no excitado." }),

  /* comunicazione */
  W("en-w-speak", "speak", "hablar", "spíik", "verbo", "comunicazione", "A1", { it: "Do you speak English?", es: "¿Hablas inglés?" }, { related: ["talk (hablar con)"] }),
  W("en-w-say", "say", "decir", "séi", "verbo", "comunicazione", "A1", { it: "Say that again, please.", es: "Di eso otra vez, por favor." }, { note: "Say algo; tell a alguien: say it / tell me." }),
  W("en-w-ask", "ask", "preguntar / pedir", "ask", "verbo", "comunicazione", "A1", { it: "Ask the teacher your question.", es: "Pregúntale al profesor tu duda." }, { ant: ["answer"] }),
  W("en-w-answer", "answer", "responder / respuesta", "ánser", "verbo", "comunicazione", "A1", { it: "Answer my question, please.", es: "Responde mi pregunta, por favor." }, { ant: ["ask"], note: "Se pronuncia “ánser”, con la t muda." }),

  /* connettivi */
  W("en-w-because", "because", "porque", "bikós", "congiunzione", "connettivi", "A1", { it: "I stayed home because it was raining.", es: "Me quedé en casa porque llovía." }, { note: "La pregunta es Why…? y la respuesta Because… (nunca “Why? Because…” con for)." }),
  W("en-w-however", "however", "sin embargo", "jauéver", "avverbio", "connettivi", "B1", { it: "I was tired; however, I finished the race.", es: "Estaba cansado; sin embargo, terminé la carrera." }, { note: "Va entre comas en mitad de frase: I agree, however, with you." }),
  W("en-w-although", "although", "aunque", "oldóu", "congiunzione", "connettivi", "B2", { it: "Although it was late, we went out.", es: "Aunque era tarde, salimos." }, { syn: ["though (menos formal)"] }),
  W("en-w-actually", "actually", "en realidad", "ékchuali", "avverbio", "connettivi", "B2", { it: "Actually, I've never been to Chicago.", es: "En realidad, nunca he estado en Chicago." }, { ff: true, note: "Falso amigo estrella: actually NO es actualmente (eso es currently)." }),

  /* astratto */
  W("en-w-time", "time", "tiempo / hora", "táim", "sostantivo", "astratto", "A1", { it: "What time is it?", es: "¿Qué hora es?" }, { related: ["o'clock"] }),
  W("en-w-life", "life", "vida", "láif", "sostantivo", "astratto", "A1", { it: "Life is beautiful.", es: "La vida es bella." }, { plural: "lives" }),
  W("en-w-way", "way", "manera / camino", "wéi", "sostantivo", "astratto", "A1", { it: "That's the right way to do it.", es: "Esa es la manera correcta de hacerlo." }),

  /* arte */
  W("en-w-art", "art", "arte", "art", "sostantivo", "arte", "A1", { it: "I love modern art.", es: "Me encanta el arte moderno." }),
  W("en-w-painting", "painting", "pintura / cuadro", "péinting", "sostantivo", "arte", "A2", { it: "This painting is from 1920.", es: "Esta pintura es de 1920." }),
  W("en-w-artist", "artist", "artista", "ártist", "sostantivo", "arte", "A2", { it: "The artist works with recycled materials.", es: "La artista trabaja con materiales reciclados." }),
];

/* ── Léxico cerrado para el Analizador de frases ─────────────────────
   Palabras funcionales (artículos, preposiciones, pronombres, auxi-
   liares, modales, adverbios frecuentes) con su traducción española.
   Espejo del objeto CLOSED del analizador italiano.                */
export const EN_CLOSED: Record<string, string> = {
  /* artículos y determinantes */
  the: "el/la/los/las", a: "un/una", an: "un/una (ante sonido vocal)",
  this: "este/esta/esto", that: "ese/esa/eso; aquel",
  these: "estos/estas", those: "esos/esas; aquellos",
  some: "algunos/algo de", any: "alguno; ninguno (en negativas)",
  /* pronombres personales y posesivos */
  i: "yo", you: "tú; usted; ustedes", he: "él", she: "ella",
  it: "ello (cosa, animal)", we: "nosotros", they: "ellos/ellas",
  me: "me/mí (a mí)", him: "lo/le (a él)", her: "la/le (a ella)",
  us: "nos (a nosotros)", them: "los/las/les (a ellos)",
  my: "mi", your: "tu; su", his: "su (de él)", its: "su (de cosa/animal)",
  our: "nuestro/nuestra", their: "su (de ellos)",
  /* pronombres interrogativos */
  who: "quién; que (persona)", what: "qué", where: "dónde",
  when: "cuándo; cuando", how: "cómo", why: "por qué",
  /* preposiciones */
  of: "de", to: "a; para; hacia", in: "en; dentro de",
  on: "sobre; en (superficie)", at: "en (lugar exacto, hora)",
  by: "por; cerca de; antes de", for: "para; por (duración)",
  with: "con", about: "sobre; acerca de; aproximadamente",
  from: "de; desde", before: "antes de", after: "después de",
  /* conjunciones */
  and: "y", or: "o", but: "pero", so: "así que; entonces",
  if: "si", while: "mientras", than: "que (comparaciones)",
  /* verbos be, do y have */
  am: "soy/estoy (to be)", is: "es/está (3ª sing.)",
  are: "eres/son/están", was: "era/estuvo/fui (pasado sing.)",
  were: "eras/estuviste (pasado)", be: "ser/estar (infinitivo)",
  do: "hacer; auxiliar presente", does: "auxiliar 3ª sing.",
  did: "auxiliar/hizo (pasado)",
  have: "haber/tener", has: "ha/tiene (3ª sing.)", had: "había/tenía",
  /* modales */
  will: "futuro (will + verbo)", would: "condicional (would + verbo)",
  can: "poder (abilidad)", could: "podía/podría",
  should: "debería", must: "deber (obligación fuerte)",
  might: "podría; quizá",
  /* adverbios y negación */
  not: "no (negación)", yes: "sí", no: "no",
  never: "nunca", always: "siempre",
  now: "ahora", then: "entonces; luego",
  there: "allí; allí hay (there is/are)",
  very: "muy", too: "también; demasiado", just: "justo; acabar de",
  /* expresiones y contracciones frecuentes */
  "there is": "hay (singular)", "there are": "hay (plural)",
  "don't": "no… (do + not)", "doesn't": "no… (3ª sing.)",
  "isn't": "no es/no está", "can't": "no puede",
  "i'm": "yo soy/estoy", "it's": "es",
};
