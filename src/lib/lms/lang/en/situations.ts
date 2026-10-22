import type { Situation } from "../../types";

/* ── Situaciones reales EN · vocabulario → diálogo → role-play ──────
   Escenarios estadounidenses (diner, subway, ballpark…). Convención:
   `.it` = inglés americano, `.es` = español. exerciseIds en el espacio
   en-ex-* (cableado a cargo del orquestador). */

export const EN_SITUATIONS: Situation[] = [
  {
    id: "en-sit-diner", emoji: "🥞", title: "En el diner", titleIt: "At the diner", level: "A1",
    intro: "El desayuno clásico americano: pedir, pedir recargas y pagar la cuenta sin perder la sonrisa.",
    vocab: [
      { it: "the menu", es: "la carta" }, { it: "to order", es: "pedir" },
      { it: "the waitress / the waiter", es: "la camarera / el camarero" }, { it: "the check", es: "la cuenta" },
      { it: "the tip", es: "la propina" }, { it: "a refill", es: "una recarga (de café)" },
      { it: "the booth", es: "el reservado (banqueta acolchada)" }, { it: "to go", es: "para llevar" },
    ],
    dialogue: [
      { speaker: "Waitress", it: "Good morning! What can I get you?", es: "¡Buenos días! ¿Qué les traigo?" },
      { speaker: "Customer", it: "Hi! I'll have pancakes with bacon, please.", es: "¡Hola! Quiero tortitas con tocino, por favor." },
      { speaker: "Waitress", it: "Great choice. Anything to drink?", es: "Buena elección. ¿Algo de beber?" },
      { speaker: "Customer", it: "Orange juice and a coffee, please.", es: "Zumo de naranja y un café, por favor." },
      { speaker: "Waitress", it: "Sure. The coffee comes with free refills!", es: "Claro. ¡El café viene con recargas gratis!" },
      { speaker: "Customer", it: "Awesome. Can we get the check later? We're in no hurry.", es: "Genial. ¿Nos trae la cuenta luego? No tenemos prisa." },
    ],
    exerciseIds: ["en-ex-sit-diner-1", "en-ex-sit-diner-2"],
    roleplay: { it: "Role-play: I'm a customer at an American diner, you're the waiter or waitress. Greet me and take my order.", es: "Role-play: soy un cliente en un diner americano, tú eres el camarero o la camarera. Salúdame y toma mi pedido." },
  },
  {
    id: "en-sit-supermarket", emoji: "🛒", title: "En el supermercado", titleIt: "At the supermarket", level: "A1",
    intro: "Pasillos, cupones y la pregunta eterna de la caja: ¿bolsa de papel o de plástico?",
    vocab: [
      { it: "the aisle", es: "el pasillo" }, { it: "the cart", es: "el carrito" },
      { it: "the checkout", es: "la caja" }, { it: "the receipt", es: "el recibo" },
      { it: "the cashier", es: "el cajero / la cajera" }, { it: "on sale", es: "en oferta" },
      { it: "the coupon", es: "el cupón de descuento" }, { it: "paper or plastic", es: "¿bolsa de papel o de plástico?" },
    ],
    dialogue: [
      { speaker: "Cashier", it: "Hi! Did you find everything okay?", es: "¡Hola! ¿Encontró todo bien?" },
      { speaker: "Customer", it: "Yes, thanks. I couldn't find the maple syrup, though.", es: "Sí, gracias. Aunque no encontré el sirope de arce." },
      { speaker: "Cashier", it: "It's in aisle seven, right next to the peanut butter.", es: "Está en el pasillo siete, justo al lado de la mantequilla de cacahuete." },
      { speaker: "Customer", it: "Got it, thanks! How much is it all together?", es: "Entendido, ¡gracias! ¿Cuánto es todo junto?" },
      { speaker: "Cashier", it: "Forty-two thirty. Do you want paper or plastic?", es: "Cuarenta y dos con treinta. ¿Quiere bolsa de papel o de plástico?" },
      { speaker: "Customer", it: "Paper, please. Here's my card.", es: "De papel, por favor. Aquí tiene mi tarjeta." },
    ],
    exerciseIds: ["en-ex-sit-supermarket-1", "en-ex-sit-supermarket-2"],
    roleplay: { it: "Role-play: I'm at the checkout of an American supermarket, you're the cashier. Ask me about bags and payment.", es: "Role-play: estoy en la caja de un supermercado americano, tú eres el cajero o la cajera. Pregúntame por las bolsas y el pago." },
  },
  {
    id: "en-sit-subway", emoji: "🚇", title: "En el metro de Nueva York", titleIt: "On the New York subway", level: "A2",
    intro: "Líneas, transbordos y la diferencia entre local y express: el metro visto en inglés.",
    vocab: [
      { it: "the subway", es: "el metro" }, { it: "the line / the train", es: "la línea / el tren" },
      { it: "the MetroCard", es: "la tarjeta del metro" }, { it: "the stop", es: "la parada" },
      { it: "to transfer", es: "hacer transbordo" }, { it: "the platform", es: "el andén" },
      { it: "local / express", es: "tren local / tren expreso" }, { it: "rush hour", es: "la hora punta" },
    ],
    dialogue: [
      { speaker: "Tourist", it: "Excuse me, how do I get to Times Square?", es: "Perdone, ¿cómo llego a Times Square?" },
      { speaker: "Local", it: "Take the 7 train and transfer at Grand Central.", es: "Tome el tren 7 y haga transbordo en Grand Central." },
      { speaker: "Tourist", it: "Is it far?", es: "¿Está lejos?" },
      { speaker: "Local", it: "Not at all. Three stops from here. But don't take the express — you need the local.", es: "Para nada. Tres paradas desde aquí. Pero no tome el expreso: necesita el local." },
      { speaker: "Tourist", it: "Where do I buy a MetroCard?", es: "¿Dónde compro una MetroCard?" },
      { speaker: "Local", it: "At the machine over there. Or just tap in with your credit card.", es: "En la máquina de allí. O entre tocando con su tarjeta de crédito." },
    ],
    exerciseIds: ["en-ex-sit-subway-1", "en-ex-sit-subway-2"],
    roleplay: { it: "Role-play: I'm a confused tourist on the New York subway, you're a helpful local. Give me directions to Brooklyn.", es: "Role-play: soy un turista confundido en el metro de Nueva York, tú eres un neoyorquino amable. Indícame cómo llegar a Brooklyn." },
  },
  {
    id: "en-sit-hotel", emoji: "🏨", title: "Check-in en el hotel", titleIt: "Checking in at the hotel", level: "A2",
    intro: "Reservar, registrarse y resolver imprevistos con la amabilidad estándar del front desk.",
    vocab: [
      { it: "the front desk", es: "la recepción" }, { it: "the reservation", es: "la reserva" },
      { it: "the key card", es: "la tarjeta llave" }, { it: "the elevator", es: "el ascensor" },
      { it: "the floor", es: "la planta / el piso" }, { it: "the luggage", es: "el equipaje" },
      { it: "the amenities", es: "los servicios del hotel" }, { it: "to check out", es: "hacer la salida (check-out)" },
    ],
    dialogue: [
      { speaker: "Guest", it: "Good evening, I have a reservation under the name Garcia.", es: "Buenas noches, tengo una reserva a nombre de García." },
      { speaker: "Receptionist", it: "Welcome! A double room for two nights, right?", es: "¡Bienvenido! Una habitación doble por dos noches, ¿verdad?" },
      { speaker: "Guest", it: "That's right. Is breakfast included?", es: "Así es. ¿Está incluido el desayuno?" },
      { speaker: "Receptionist", it: "Yes, from six thirty to ten, on the second floor.", es: "Sí, de seis y media a diez, en la segunda planta." },
      { speaker: "Guest", it: "Perfect. What time is check-out?", es: "Perfecto. ¿A qué hora hay que dejar la habitación?" },
      { speaker: "Receptionist", it: "Eleven a.m. Here's your key card — room 1204, twelfth floor. The elevator is to your right.", es: "A las once de la mañana. Aquí tiene su tarjeta llave: habitación 1204, planta doce. El ascensor está a su derecha." },
    ],
    exerciseIds: ["en-ex-sit-hotel-1", "en-ex-sit-hotel-2"],
    roleplay: { it: "Role-play: I'm checking in at a hotel in Chicago, you're the receptionist. Confirm my reservation and tell me about breakfast.", es: "Role-play: estoy haciendo el check-in en un hotel de Chicago, tú eres el recepcionista. Confirma mi reserva y cuéntame lo del desayuno." },
  },
  {
    id: "en-sit-doctor", emoji: "🩺", title: "En el consultorio médico", titleIt: "At the doctor's office", level: "A2",
    intro: "Citas, seguros y síntomas: el inglés que esperas no necesitar nunca en EE. UU.",
    vocab: [
      { it: "the appointment", es: "la cita" }, { it: "the insurance card", es: "la tarjeta del seguro médico" },
      { it: "the copay", es: "el copago" }, { it: "a sore throat", es: "el dolor de garganta" },
      { it: "the prescription", es: "la receta" }, { it: "the drugstore", es: "la farmacia (drugstore)" },
      { it: "to hurt", es: "doler" }, { it: "the shot", es: "la inyección" },
    ],
    dialogue: [
      { speaker: "Receptionist", it: "Good morning! Do you have an appointment?", es: "¡Buenos días! ¿Tiene cita?" },
      { speaker: "Patient", it: "Yes, at ten fifteen. My name is Ana Garcia.", es: "Sí, a las diez y cuarto. Me llamo Ana García." },
      { speaker: "Doctor", it: "So, Ana, what seems to be the problem?", es: "Bien, Ana, ¿cuál parece ser el problema?" },
      { speaker: "Patient", it: "I have a sore throat and my head hurts.", es: "Me duele la garganta y me duele la cabeza." },
      { speaker: "Doctor", it: "Any fever?", es: "¿Alguna fiebre?" },
      { speaker: "Patient", it: "A little, since yesterday.", es: "Un poco, desde ayer." },
      { speaker: "Doctor", it: "It looks like a cold. I'll prescribe something for the pain: one tablet every eight hours. And get some rest!", es: "Parece un resfriado. Le recetaré algo para el dolor: una pastilla cada ocho horas. ¡Y descanse!" },
    ],
    exerciseIds: ["en-ex-sit-doctor-1", "en-ex-sit-doctor-2"],
    roleplay: { it: "Role-play: I'm the patient, you're the doctor at an American clinic. Ask me about my symptoms and give me advice.", es: "Role-play: soy el paciente, tú eres el médico de una clínica americana. Pregúntame por mis síntomas y dame consejos." },
  },
  {
    id: "en-sit-ballpark", emoji: "⚾", title: "En el estadio de béisbol", titleIt: "At the ballpark", level: "B1",
    intro: "Entradas, asientos y perritos calientes: una tarde de béisbol en inglés americano.",
    vocab: [
      { it: "the ticket", es: "la entrada / el boleto" }, { it: "the seats", es: "los asientos" },
      { it: "the score", es: "el marcador" }, { it: "a home run", es: "un home run (cuadrangular)" },
      { it: "the inning", es: "la entrada (inning)" }, { it: "the crowd", es: "el público / la afición" },
      { it: "the hot dog", es: "el perrito caliente" }, { it: "the team merchandise", es: "los artículos del equipo" },
    ],
    dialogue: [
      { speaker: "Fan", it: "Two tickets for tonight's game, please.", es: "Dos entradas para el partido de esta noche, por favor." },
      { speaker: "Seller", it: "Infield or outfield seats? Infield is forty dollars each.", es: "¿Asientos en el campo interior o en el exterior? Los interiores son cuarenta dólares cada uno." },
      { speaker: "Fan", it: "Infield, please. Are the seats close to the field?", es: "Interiores, por favor. ¿Los asientos están cerca del campo?" },
      { speaker: "Seller", it: "Row twelve, right behind home plate. Great view!", es: "Fila doce, justo detrás del home. ¡Gran vista!" },
      { speaker: "Friend", it: "Let's grab a hot dog before the first pitch!", es: "¡Vamos a tomar un perrito caliente antes del primer lanzamiento!" },
      { speaker: "Fan", it: "Sure. Peanuts and a soda — the classic. The crowd is going to be wild tonight!", es: "Claro. Cacahuetes y un refresco, lo clásico. ¡El público se va a desatar esta noche!" },
    ],
    exerciseIds: ["en-ex-sit-ballpark-1", "en-ex-sit-ballpark-2"],
    roleplay: { it: "Role-play: I'm buying tickets at a baseball stadium, you're the ticket seller. Ask me what seats I want and tell me the prices.", es: "Role-play: estoy comprando entradas en un estadio de béisbol, tú eres el vendedor. Pregúntame qué asientos quiero y dime los precios." },
  },
];
