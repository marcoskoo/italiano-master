import type { Exercise } from "../../types";

/* ── EN · banco de ejercicios (v9.39 · ex-en) ─────────────────────────
   Cubre EXACTAMENTE los 33 ids en-ex-* referenciados por skills.ts
   (EN_LISTENING · EN_READINGS) y situations.ts (EN_SITUATIONS).
   Cada pregunta es de comprensión sobre el contenido real del
   diálogo/lectura/situación (qué pidió X, cuánto costó, dónde está Y).
   Convención del proyecto: prompt y explain en español con tuteo;
   options en inglés americano (la lengua de estudio). level = el del
   texto fuente. topic: “ascolto” (escucha), y para lecturas y
   situaciones, según el enfoque, “vocabolario” (comprensión léxica:
   textos personales y diálogos) o “cultura” (artículos culturales:
   Route 66, malls, melting pot, GAN). Nota: el union Topic de types.ts
   NO incluye “lettura”, por eso se reparte en vocabolario/cultura. El
   registro en el banco central lo hace el orquestador. Las citas
   internas usan comillas tipográficas “ ”, como en exercises.ts.   */

export const EN_EXERCISES: Exercise[] = [
  /* ═══ Escucha · EN_LISTENING (en-ex-ls-*) ═══ */

  /* en-ls-1 · At the coffee shop (A1) */
  { id: "en-ex-ls-1-1", type: "mc", level: "A1", topic: "ascolto",
    prompt: "Escucha “At the coffee shop”: ¿qué pide el cliente?",
    options: ["A large tea and a croissant", "A medium coffee and a blueberry muffin", "A small coffee and a bagel", "An orange juice and a sandwich"],
    answer: 1,
    explain: "El cliente pide “a medium coffee and a blueberry muffin, please”: un café mediano y un muffin de arándanos." },
  { id: "en-ex-ls-1-2", type: "mc", level: "A1", topic: "ascolto",
    prompt: "En el mismo diálogo, ¿cuánto cuesta el pedido?",
    options: ["Five seventy-five ($5.75)", "Four seventy-five ($4.75)", "Six seventy-five ($6.75)", "Fifty-seven fifty ($57.50)"],
    answer: 0,
    explain: "El barista dice “That's five seventy-five”: 5 dólares con 75. En inglés se leen primero los dólares y luego los centavos." },

  /* en-ls-2 · First words (A1) */
  { id: "en-ex-ls-2-1", type: "mc", level: "A1", topic: "ascolto",
    prompt: "En la lista “First words” que escuchas, ¿cuál de estas frases aparece?",
    options: ["I'm so sorry", "See you tomorrow", "Excuse me", "Good night"],
    answer: 2,
    explain: "La lista es: hello, good morning, thank you, please, excuse me, goodbye, “How are you?” y “My name is…”. “Excuse me” está; las otras no." },
  { id: "en-ex-ls-2-2", type: "mc", level: "A1", topic: "ascolto",
    prompt: "Según esa misma lista, ¿con qué frase te presentas?",
    options: ["My name is…", "Excuse me", "Thank you", "Goodbye"],
    answer: 0,
    explain: "Para presentarte usas “My name is…” (o “I'm…”). “Thank you” es gracias, “Goodbye” es adiós y “Excuse me” sirve para pedir permiso." },

  /* en-ls-3 · On the New York subway (A2) */
  { id: "en-ex-ls-3-1", type: "mc", level: "A2", topic: "ascolto",
    prompt: "Escucha “On the New York subway”: ¿qué tren necesita el turista para llegar a Brooklyn?",
    options: ["The 7, from Times Square", "The express, from Grand Central", "The L, from Union Square", "The shuttle, from Wall Street"],
    answer: 2,
    explain: "El vecino le dice: “No, you need the L. Take it from Union Square”: la línea L desde Union Square." },
  { id: "en-ex-ls-3-2", type: "mc", level: "A2", topic: "ascolto",
    prompt: "En el mismo diálogo, ¿qué tren le recomienda el vecino y a cuántas paradas está?",
    options: ["The express, five stops away", "The local, three stops away", "Any train, two stops away", "The bus, four stops away"],
    answer: 1,
    explain: "“Three stops, but watch out: you need the local, not the express”: el local para en todas las estaciones; el expreso se salta algunas." },

  /* en-ls-4 · At the doctor's office (A2) */
  { id: "en-ex-ls-4-1", type: "mc", level: "A2", topic: "ascolto",
    prompt: "Escucha “At the doctor's office”: ¿qué síntomas tiene Ana?",
    options: ["A stomachache and a cough", "A backache and a fever", "A toothache and dizziness", "A sore throat and a headache"],
    answer: 3,
    explain: "Ana dice: “I have a sore throat and my head hurts”: le duele la garganta y le duele la cabeza." },
  { id: "en-ex-ls-4-2", type: "mc", level: "A2", topic: "ascolto",
    prompt: "Según el médico, ¿qué tiene Ana y qué le recomienda?",
    options: ["It's just a cold: drink plenty of water and rest", "It's the flu: take antibiotics", "It's an allergy: avoid dust", "It's a throat infection: come back tomorrow"],
    answer: 0,
    explain: "El médico le toma la temperatura (100.4 °F, fiebre leve) y concluye “It's just a cold”: beber mucha agua y descansar." },

  /* en-ls-5 · A job interview (B1) */
  { id: "en-ex-ls-5-1", type: "mc", level: "B1", topic: "ascolto",
    prompt: "Escucha “A job interview”: ¿qué estudió Sofía en la universidad?",
    options: ["Marketing", "Business administration", "Communications", "Journalism"],
    answer: 2,
    explain: "Tiene “a degree in communications”. El curso de marketing digital es algo que hace ahora, no su carrera: escucha con atención." },
  { id: "en-ex-ls-5-2", type: "mc", level: "B1", topic: "ascolto",
    prompt: "En la misma entrevista, ¿por qué quiere trabajar en esa empresa?",
    options: ["Because it pays more than her current job", "Because it works with international clients and she speaks English and Spanish", "Because it's close to her home", "Because she wants to move abroad"],
    answer: 1,
    explain: "Sofía responde: “Because your company works with international clients, and I speak both English and Spanish”. El sueldo, la distancia o mudarse no se mencionan." },

  /* en-ls-6 · Calling the airline (B2) */
  { id: "en-ex-ls-6-1", type: "mc", level: "B2", topic: "ascolto",
    prompt: "Escucha “Calling the airline”: ¿por qué llama el pasajero?",
    options: ["To rebook a canceled flight to Denver", "To complain about lost luggage", "To ask for a refund", "To book a flight for next month"],
    answer: 0,
    explain: "Su vuelo a Denver de mañana fue cancelado y llama para cambiarlo: “I'm trying to rebook it”. Para confirmar su identidad, da el número B-4729." },
  { id: "en-ex-ls-6-2", type: "mc", level: "B2", topic: "ascolto",
    prompt: "¿Cuál de las dos opciones que ofrece el agente prefiere el pasajero?",
    options: ["The connection through Chicago at noon", "The red-eye to Denver", "The direct six thirty flight", "Waiting on the standby list"],
    answer: 2,
    explain: "El agente ofrece el vuelo de las 6:30 o la conexión por Chicago al mediodía; el pasajero responde “I'd rather take the direct one, if there are still seats available”." },

  /* ═══ Lectura · EN_READINGS (en-ex-rd-*) ═══ */

  /* en-rd-1 · A postcard from New York (A1) */
  { id: "en-ex-rd-1-1", type: "mc", level: "A1", topic: "vocabolario",
    prompt: "Lee “A postcard from New York”: ¿qué visitó la familia ayer?",
    options: ["The Statue of Liberty", "Central Park", "The Empire State Building", "Brooklyn Bridge"],
    answer: 0,
    explain: "“Yesterday the Statue of Liberty, today Central Park”: ayer la Estatua de la Libertad; hoy, Central Park." },
  { id: "en-ex-rd-1-2", type: "mc", level: "A1", topic: "vocabolario",
    prompt: "En la misma postal, ¿qué desayunan por las mañanas?",
    options: ["Pizza and soda", "Bagels and coffee", "Eggs and milk", "Pancakes and orange juice"],
    answer: 3,
    explain: "“In the morning we have breakfast at a diner: pancakes and orange juice”. La pizza es por la noche, en Brooklyn." },

  /* en-rd-2 · Saturday at the farmers market (A2) */
  { id: "en-ex-rd-2-1", type: "mc", level: "A2", topic: "vocabolario",
    prompt: "Lee “Saturday at the farmers market”: ¿qué habrá el próximo sábado y qué hizo Megan?",
    options: ["A bread-baking class, but she hasn't signed up", "An apple-pie cooking class, and she already signed up", "A pie contest, and she won first prize", "A farm tour, but she missed it"],
    answer: 1,
    explain: "“Next Saturday there will be a cooking class… how to make apple pie. Megan already signed up”: clase de pastel de manzana, y ya se apuntó." },

  /* en-rd-3 · Route 66 (B1) */
  { id: "en-ex-rd-3-1", type: "mc", level: "B1", topic: "cultura",
    prompt: "Lee “Route 66”: ¿de qué ciudad a qué ciudad iba la carretera?",
    options: ["From Chicago to Santa Monica", "From New York to Los Angeles", "From Chicago to Las Vegas", "From Santa Monica to Denver"],
    answer: 0,
    explain: "Iba de Chicago (Illinois) a Santa Mónica (California), casi cuatro mil kilómetros. La NY–LA es otra cosa: no la confundas." },
  { id: "en-ex-rd-3-2", type: "mc", level: "B1", topic: "cultura",
    prompt: "En el mismo artículo, ¿en qué año se eliminó la ruta 66 de la lista federal?",
    options: ["In 1950", "In 2000", "In 1985", "It was never removed"],
    answer: 2,
    explain: "“Route 66 was removed from the federal list in 1985”, cuando la sustituyó el sistema de interestatales. Los años cincuenta son su apogeo, no su fin." },

  /* en-rd-4 · The rise and fall of the American mall (B2) */
  { id: "en-ex-rd-4-1", type: "mc", level: "B2", topic: "cultura",
    prompt: "Lee “The rise and fall of the American mall”: ¿cuántos centros cerrados había en el país en su apogeo?",
    options: ["About two hundred", "More than twenty thousand", "Fewer than one thousand", "More than two thousand"],
    answer: 3,
    explain: "“At its peak, the country counted more than two thousand enclosed malls”. Ojo con los números: two thousand (2.000) no es twenty thousand." },
  { id: "en-ex-rd-4-2", type: "mc", level: "B2", topic: "cultura",
    prompt: "Según el artículo, ¿cómo se reinventan los centros que sobreviven?",
    options: ["As community spaces, with libraries, gyms and even apartments", "As bigger malls with more anchor stores", "As outlet villages with discounts", "As offices and warehouses only"],
    answer: 0,
    explain: "“Some surviving malls are reinventing themselves as community spaces”, con bibliotecas, gimnasios e incluso apartamentos donde antes estaban las tiendas." },

  /* en-rd-5 · The melting pot and the mosaic (C1) */
  { id: "en-ex-rd-5-1", type: "mc", level: "C1", topic: "cultura",
    prompt: "Lee “The melting pot and the mosaic”: ¿qué metáforas prefieren los sociólogos y por qué?",
    options: ["The melting pot, because immigrants assimilate fast", "The pressure cooker, because integration is stressful", "The patchwork, because the country is divided", "The salad bowl and the mosaic, because communities keep their languages and traditions"],
    answer: 3,
    explain: "Prefieren “the salad bowl” y “the mosaic”: lejos de fundirse, muchas comunidades conservan sus lenguas, cocinas y celebraciones durante generaciones (y simplemente se vuelven americanas)." },

  /* en-rd-6 · The Great American Novel (C2) */
  { id: "en-ex-rd-6-1", type: "mc", level: "C2", topic: "cultura",
    prompt: "Lee “The Great American Novel”: ¿qué candidatas se mencionan como ejemplos?",
    options: ["Hemingway's war novels, Steinbeck's grapes and Twain's river", "Melville's whaling ship, Fitzgerald's green light and Toni Morrison's ghosts", "Melville's whale, Harper Lee's mockingbird and Faulkner's county", "Fitzgerald's green light, Hemingway's sea and Twain's raft"],
    answer: 1,
    explain: "“Melville's whaling ship, Fitzgerald's green light, Toni Morrison's ghosts”: el ballenero de Moby-Dick, la luz verde de Gatsby y los fantasmas de Beloved. Cada generación reescribe la lista." },

  /* ═══ Situaciones · EN_SITUATIONS (en-ex-sit-*) ═══
     Enfoque léxico-comunicativo (topic "vocabolario"): comprensión de
     detalles concretos del diálogo (pedidos, precios, horarios).     */

  /* en-sit-diner · At the diner (A1) */
  { id: "en-ex-sit-diner-1", type: "mc", level: "A1", topic: "vocabolario",
    prompt: "Situación “At the diner”: ¿qué pide el cliente?",
    options: ["Pancakes with bacon, orange juice and a coffee", "Bacon and eggs with a soda", "Pancakes with a tea only", "Toast and orange juice"],
    answer: 0,
    explain: "Pide “pancakes with bacon, please” y, de beber, “orange juice and a coffee”." },
  { id: "en-ex-sit-diner-2", type: "mc", level: "A1", topic: "vocabolario",
    prompt: "En el mismo diner, ¿qué viene con recargas gratis?",
    options: ["The orange juice", "The pancakes", "The coffee", "The soda"],
    answer: 2,
    explain: "La camarera dice: “The coffee comes with free refills”. Refill = recarga: en muchos diners el café tiene recargas gratis." },

  /* en-sit-supermarket · At the supermarket (A1) */
  { id: "en-ex-sit-supermarket-1", type: "mc", level: "A1", topic: "vocabolario",
    prompt: "Situación “At the supermarket”: ¿dónde está el sirope de arce?",
    options: ["In aisle three, next to the jam", "In aisle seven, next to the peanut butter", "Next to the bread stand", "At the bakery counter"],
    answer: 1,
    explain: "El cajero dice: “It's in aisle seven, right next to the peanut butter”: pasillo siete, junto a la mantequilla de cacahuete." },
  { id: "en-ex-sit-supermarket-2", type: "mc", level: "A1", topic: "vocabolario",
    prompt: "En la misma situación, ¿cuánto cuesta todo junto?",
    options: ["Forty-two thirty ($42.30)", "Forty-two thirteen ($42.13)", "Thirty-two forty ($32.40)", "Twenty-four thirty ($24.30)"],
    answer: 0,
    explain: "“Forty-two thirty” = 42 dólares con 30. De regalo: el cliente elige bolsa de papel (“Paper, please”) y paga con tarjeta." },

  /* en-sit-subway · On the New York subway (A2) */
  { id: "en-ex-sit-subway-1", type: "mc", level: "A2", topic: "vocabolario",
    prompt: "Situación “On the New York subway”: ¿cómo llega el turista a Times Square?",
    options: ["He takes the L train directly", "He takes the express and gets off at Times Square", "He walks from Union Square", "He takes the 7 train and transfers at Grand Central"],
    answer: 3,
    explain: "“Take the 7 train and transfer at Grand Central”: tren 7 y transbordo en Grand Central. Fíjate: esta situación no es la del diálogo de escucha (allí era la L a Brooklyn)." },
  { id: "en-ex-sit-subway-2", type: "mc", level: "A2", topic: "vocabolario",
    prompt: "En la misma situación, ¿dónde puede comprar una MetroCard?",
    options: ["At the machine over there, or tap in with a credit card", "Only at the ticket office", "Only online, in advance", "From the conductor on the train"],
    answer: 0,
    explain: "“At the machine over there. Or just tap in with your credit card”: en la máquina o entrando sin contacto con la tarjeta de crédito." },

  /* en-sit-hotel · Checking in at the hotel (A2) */
  { id: "en-ex-sit-hotel-1", type: "mc", level: "A2", topic: "vocabolario",
    prompt: "Situación “Checking in at the hotel”: ¿qué habitación tiene reservada el huésped?",
    options: ["A single room for one night", "A double room for one night", "A double room for two nights", "A suite for a week"],
    answer: 2,
    explain: "La recepcionista confirma: “A double room for two nights”, a nombre de García." },
  { id: "en-ex-sit-hotel-2", type: "mc", level: "A2", topic: "vocabolario",
    prompt: "En el mismo check-in, ¿a qué hora hay que dejar la habitación (check-out)?",
    options: ["At ten a.m.", "At noon", "At eleven a.m.", "At six thirty a.m."],
    answer: 2,
    explain: "“What time is check-out? — Eleven a.m.”. Cuidado con las horas: el desayuno es de 6:30 a 10 y la habitación es la 1204, pero el check-out es a las 11." },

  /* en-sit-doctor · At the doctor's office (A2) */
  { id: "en-ex-sit-doctor-1", type: "mc", level: "A2", topic: "vocabolario",
    prompt: "Situación “At the doctor's office”: ¿qué síntomas describe Ana?",
    options: ["A sore throat, a headache and a little fever since yesterday", "A stomachache and dizziness", "A cough and back pain", "A sore throat and a broken arm"],
    answer: 0,
    explain: "“I have a sore throat and my head hurts”, y además “a little, since yesterday”: un poco de fiebre desde ayer." },
  { id: "en-ex-sit-doctor-2", type: "mc", level: "A2", topic: "vocabolario",
    prompt: "En la misma situación, ¿qué receta el médico y cada cuánto hay que tomarlo?",
    options: ["Two tablets every four hours", "One spoonful of syrup every six hours", "A shot and then nothing", "One tablet every eight hours, for the pain"],
    answer: 3,
    explain: "“I'll prescribe something for the pain: one tablet every eight hours. And get some rest!” Una pastilla cada ocho horas y descanso." },

  /* en-sit-ballpark · At the ballpark (B1) */
  { id: "en-ex-sit-ballpark-1", type: "mc", level: "B1", topic: "vocabolario",
    prompt: "Situación “At the ballpark”: ¿qué asientos elige el fan y cuánto cuestan?",
    options: ["Outfield, forty dollars each", "Infield, fourteen dollars each", "Infield, forty dollars each", "Outfield, fourteen dollars each"],
    answer: 2,
    explain: "Elige infield (campo interior) a cuarenta dólares por entrada. La distinción forty / fourteen es un clásico del oído en inglés." },
  { id: "en-ex-sit-ballpark-2", type: "mc", level: "B1", topic: "vocabolario",
    prompt: "En la misma situación, ¿qué van a comer antes del primer lanzamiento?",
    options: ["A hot dog, peanuts and a soda", "A burger with fries", "Popcorn and a slushie", "Nachos and a pretzel"],
    answer: 0,
    explain: "“Let's grab a hot dog before the first pitch!” y “Peanuts and a soda — the classic”: perrito caliente, cacahuetes y refresco, lo clásico del béisbol." },
];
