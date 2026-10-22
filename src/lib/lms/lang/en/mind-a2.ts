import type { MindReading } from "../../cambridge-mind";

/* ═══ EN A2 · Mind readings (temáticas de conciencia) — 3 por unidad ══
   Metodología v9.13: 7 estrategias de comprensión lectora y de
   escucha. Textos en inglés americano A2, traducción española a la
   vista. Campos `.it` = inglés (lengua de estudio), `.es` = español.
   Estrategia por posición: L1 = predict + quiz (lit/inf/crít) + V/F
   con justificación; L2 = predict + ideas + intruso; L3 = predict +
   secuencia + escucha. Temas rotados: meditazione, spiritualità,
   qui e ora, relax fisico, relax mentale. */

export const EN_MIND_A2: Record<string, MindReading[]> = {
  "en-cu-a2-01": [
    {
      id: "md-en-a2-01-1", theme: "meditazione",
      title: "Count to four", titleEs: "Contar hasta cuatro",
      minutes: 2,
      paragraphs: [
        { it: "Sit comfortably and breathe normally. Now count your breaths: one as you breathe in, two as you breathe out, up to four. When you lose the count — and you will — just start again at one. This is the whole practice.", es: "Siéntate cómodo y respira normal. Ahora cuenta tus respiraciones: uno al inhalar, dos al exhalar, hasta cuatro. Cuando pierdas la cuenta — y la perderás — solo empieza de nuevo en uno. Esa es toda la práctica." },
        { it: "Counting gives your mind a small job. While you count, thoughts still come, but they have to wait their turn. Three minutes of counting is enough to feel a little quieter inside.", es: "Contar le da a tu mente un trabajito. Mientras cuentas, los pensamientos siguen llegando, pero tienen que esperar su turno. Tres minutos de conteo bastan para sentirse un poco más tranquilo por dentro." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un examen de matemáticas", "Una técnica de meditación contando respiraciones", "Una clase de natación"],
        answer: 1,
        why: "El título «Count to four» junto a un texto de meditación apunta a contar respiraciones, no a un examen.",
      },
      quiz: [
        { q: "What do you count?", kind: "literal", options: ["Your breaths", "Your steps", "Your bills"], answer: 0, why: "«Count your breaths: one as you breathe in»." },
        { q: "What happens when you lose the count?", kind: "inferencial", options: ["You start again at one", "You stop the practice", "You count faster"], answer: 0, why: "«Just start again at one»: se infiere que no hay castigo, solo empezar de nuevo." },
        { q: "Why does counting help, according to the text?", kind: "critica", options: ["It gives the mind a small job, so thoughts wait their turn", "It makes thoughts disappear forever", "It replaces sleep at night"], answer: 0, why: "La idea central: «Counting gives your mind a small job»." },
      ],
      vf: [
        { text: "You count up to four and then start again at one.", value: true, why: "«Up to four… start again at one»." },
        { text: "Thoughts stop completely when you count.", value: false, why: "El texto dice que siguen llegando, pero esperan su turno." },
        { text: "Three minutes of counting is enough.", value: true, why: "«Three minutes of counting is enough»." },
      ],
    },
    {
      id: "md-en-a2-01-2", theme: "qui e ora",
      title: "Two minutes before the meeting", titleEs: "Dos minutos antes de la reunión",
      minutes: 2,
      paragraphs: [
        { it: "You arrive early and sit down. The room is quiet for two more minutes. You feel the chair under you and hear the soft noise of the air conditioner. For a moment, nothing is missing here.", es: "Llegas temprano y te sientas. La sala está en silencio dos minutos más. Sientes la silla bajo ti y oyes el ruido suave del aire acondicionado. Por un momento, nada falta aquí." },
        { it: "These small pockets of time are gifts. Instead of scrolling on your phone, you can just sit and breathe. The here and now does not need a special place; it waits for you in ordinary rooms.", es: "Estos bolsillos de tiempo son regalos. En vez de deslizar el teléfono, puedes simplemente sentarte y respirar. El aquí y el ahora no necesita un lugar especial: te espera en salas ordinarias." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una agenda de reuniones laborales", "Estar presente en los minutos antes de una reunión", "Un manual de aire acondicionado"],
        answer: 1,
        why: "El título apunta al momento previo a la reunión, no a la agenda ni a la máquina.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Small waiting moments can become a quiet practice of presence",
          "Meetings are always boring and useless",
          "Air conditioners make too much noise",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "You feel the chair under you",
          "You hear the air conditioner",
          "The here and now waits in ordinary rooms",
        ],
        distractors: [
          "You answer emails during the meeting",
          "The room has a view of the mountains",
          "You buy coffee before work",
        ],
      },
      intruder: {
        instr: "Una de estas frases NO encaja con el texto. ¿Cuál es el intruso?",
        sentences: [
          "You arrive early and sit down.",
          "You feel the chair under you.",
          "The air conditioner makes a soft noise.",
          "Meetings usually last three long hours.",
          "For a moment, nothing is missing here.",
        ],
        intruder: 3,
        why: "La duración de las reuniones no pertenece a la experiencia de presencia del texto: es el intruso.",
      },
    },
    {
      id: "md-en-a2-01-3", theme: "relax fisico",
      title: "The jaw check", titleEs: "La revisión de la mandíbula",
      minutes: 2,
      paragraphs: [
        { it: "During the day, your jaw tightens without asking permission. Teeth together, muscles hard. Now check your jaw: if your teeth are touching, let them separate a little. Feel the small release.", es: "Durante el día, tu mandíbula se tensa sin pedir permiso. Dientes juntos, músculos duros. Ahora revisa tu mandíbula: si tus dientes se tocan, déjalos separar un poco. Siente la pequeña liberación." },
        { it: "The jaw holds stress like a jar holds water — quietly and completely. Check it three times a day: at a red light, at your desk, before sleep. Soft jaw, soft breath, softer day.", es: "La mandíbula guarda el estrés como un frasco guarda agua: en silencio y por completo. Revísala tres veces al día: en un semáforo, en tu escritorio, antes de dormir. Mandíbula suave, respiración suave, día más suave." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un tratamiento dental costoso", "Soltar la tensión de la mandíbula durante el día", "Un ejercicio de masticación"],
        answer: 1,
        why: "«The jaw check» sugiere revisar y soltar tensión, no un tratamiento ni masticar.",
      },
      sequence: {
        instr: "Ordena los pasos del hábito:",
        events: ["Check your jaw during the day", "Notice your teeth are touching", "Let them separate a little", "Feel the small release", "Repeat three times a day"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Welcome to the jaw check. Touch your jaw with one finger. Are your teeth together? Let them part, just a little. Now breathe out slowly through your nose. Feel the muscle go soft under your finger. Do this at every red light today. Soft jaw, soft breath, softer day.",
        questions: [
          { q: "Where do you put your finger?", kind: "literal", options: ["On your jaw", "On your knee", "On your phone"], answer: 0, why: "«Touch your jaw with one finger»." },
          { q: "What do your teeth do?", kind: "literal", options: ["They bite down harder", "They part a little", "They stay together"], answer: 1, why: "«Let them part, just a little»." },
          { q: "How do you breathe out?", kind: "literal", options: ["Slowly through your nose", "Fast through your mouth", "You hold your breath"], answer: 0, why: "«Breathe out slowly through your nose»." },
          { q: "Where can you practice this today?", kind: "inferencial", options: ["At every red light", "Only at the dentist", "Only before breakfast"], answer: 0, why: "«Do this at every red light today»: se infiere el lugar cotidiano." },
        ],
      },
    },
  ],

  "en-cu-a2-02": [
    {
      id: "md-en-a2-02-1", theme: "spiritualità",
      title: "A moment before the meal", titleEs: "Un momento antes de la comida",
      minutes: 2,
      paragraphs: [
        { it: "Before you eat today, stop for three seconds. Look at your plate: the colors, the steam, the work of many hands behind it. Somebody planted it, somebody carried it, somebody cooked it.", es: "Antes de comer hoy, detente tres segundos. Mira tu plato: los colores, el vapor, el trabajo de muchas manos detrás. Alguien lo plantó, alguien lo cargó, alguien lo cocinó." },
        { it: "This small pause is a quiet thank-you. You do not need words or a special ritual. When you eat with attention, the food tastes better and the meal becomes a moment of gratitude.", es: "Esta pequeña pausa es un gracias silencioso. No necesitas palabras ni un ritual especial. Cuando comes con atención, la comida sabe mejor y la comida se convierte en un momento de gratitud." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una receta de cocina rápida", "Un pequeño gesto de gratitud antes de comer", "Una crítica de restaurantes caros"],
        answer: 1,
        why: "El título habla del momento previo a la comida, no de recetas ni críticas.",
      },
      quiz: [
        { q: "How long do you stop before eating?", kind: "literal", options: ["Three seconds", "Three minutes", "Three hours"], answer: 0, why: "«Stop for three seconds»." },
        { q: "Who is behind your plate, according to the text?", kind: "inferencial", options: ["Many hands: people who planted, carried and cooked the food", "Only the cook", "Nobody — food appears in the fridge"], answer: 0, why: "Se infiere de «Somebody planted it, somebody carried it, somebody cooked it»." },
        { q: "What is the best title for this idea?", kind: "critica", options: ["Eating with attention turns a meal into gratitude", "Fast food is always cheaper", "Rituals need special words"], answer: 0, why: "La idea central: comer con atención convierte la comida en gratitud." },
      ],
      vf: [
        { text: "You need special words for the thank-you.", value: false, why: "«You do not need words or a special ritual»." },
        { text: "Somebody planted and cooked your food.", value: true, why: "«Somebody planted it… somebody cooked it»." },
        { text: "Food tastes better when you eat with attention.", value: true, why: "«The food tastes better»." },
      ],
    },
    {
      id: "md-en-a2-02-2", theme: "relax mentale",
      title: "Trains in the station", titleEs: "Trenes en la estación",
      minutes: 2,
      paragraphs: [
        { it: "Your mind is a train station. Thoughts arrive like trains: some are old and noisy, some are new and shiny. You do not have to board every train that stops in front of you.", es: "Tu mente es una estación de trenes. Los pensamientos llegan como trenes: algunos son viejos y ruidosos, otros nuevos y brillantes. No tienes que subir a cada tren que se detiene frente a ti." },
        { it: "Watch the trains come and go from your seat on the platform. The worry train can pass without you. This is mental relaxation: you are not the trains — you are the one who watches them pass.", es: "Mira los trenes ir y venir desde tu asiento en el andén. El tren de la preocupación puede pasar sin ti. Esta es la relajación mental: tú no eres los trenes; eres quien los ve pasar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un horario de trenes de Chicago", "Una metáfora para soltar pensamientos: no subir a todos los trenes", "Una guía de viajes en tren por EE. UU."],
        answer: 1,
        why: "La metáfora mente-estación es un clásico de la relajación; el título lo anticipa.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "You can watch your thoughts pass without boarding every one",
          "You must fight every noisy thought",
          "Train stations are too crowded in summer",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Thoughts arrive like trains",
          "Some trains are old and noisy",
          "The worry train can pass without you",
        ],
        distractors: [
          "You buy a ticket for every train",
          "The station closes at midnight",
          "Trains are faster than buses",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Your mind is a train station.",
          "Some thought-trains are old and noisy.",
          "You do not have to board every train.",
          "The express train to Boston leaves at 9 a. m.",
          "You are the one who watches the trains pass.",
        ],
        intruder: 3,
        why: "El horario del expreso a Boston es un dato de viaje real, ajeno a la metáfora mental: es el intruso.",
      },
    },
    {
      id: "md-en-a2-02-3", theme: "meditazione",
      title: "Coffee and breath", titleEs: "Café y respiración",
      minutes: 2,
      paragraphs: [
        { it: "Your morning coffee can be a meditation. Hold the cup with both hands and feel the warmth. Breathe in the smell before the first sip. For these ten seconds, just drink coffee — do not plan the day.", es: "Tu café de la mañana puede ser una meditación. Sostén la taza con las dos manos y siente el calor. Inhala el aroma antes del primer sorbo. Durante estos diez segundos, solo bebe café: no planifiques el día." },
        { it: "Meditation does not always need a quiet room. A warm cup, a slow breath and your full attention are enough. The practice lives inside ordinary things.", es: "La meditación no siempre necesita una sala silenciosa. Una taza caliente, una respiración lenta y toda tu atención bastan. La práctica vive dentro de las cosas ordinarias." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los beneficios del café para la salud", "Convertir el café de la mañana en una mini meditación", "Las mejores cafeterías de Seattle"],
        answer: 1,
        why: "El título une café y respiración: apunta a la práctica, no a la salud ni a cafeterías.",
      },
      sequence: {
        instr: "Ordena la práctica del café consciente:",
        events: ["Hold the cup with both hands", "Feel the warmth", "Breathe in the smell", "Take the first sip", "Do not plan the day for ten seconds"],
      },
      listen: {
        intro: "Escucha y responde:",
        audioIt: "Good morning. Let's make your coffee a meditation. Hold the cup with both hands. Feel the heat through your fingers. Now smell it — one slow breath in. Take a small sip and notice the taste. Ten seconds, that is all. Your day can wait; your coffee cannot.",
        questions: [
          { q: "What do you do with both hands?", kind: "literal", options: ["Hold the cup", "Type a message", "Wash the dishes"], answer: 0, why: "«Hold the cup with both hands»." },
          { q: "How do you breathe in the smell?", kind: "literal", options: ["One slow breath in", "Ten fast breaths", "You do not breathe"], answer: 0, why: "«One slow breath in»." },
          { q: "How long does the practice last?", kind: "literal", options: ["Ten minutes", "Ten seconds", "All morning"], answer: 1, why: "«Ten seconds, that is all»." },
          { q: "What can wait, according to the audio?", kind: "inferencial", options: ["Your day", "Your coffee", "Your breakfast"], answer: 0, why: "«Your day can wait; your coffee cannot»: se infiere que el día puede esperar." },
        ],
      },
    },
  ],

  "en-cu-a2-03": [
    {
      id: "md-en-a2-03-1", theme: "qui e ora",
      title: "The red light", titleEs: "El semáforo en rojo",
      minutes: 2,
      paragraphs: [
        { it: "You are driving and the light turns red. Instead of sighing, try this: feel your hands on the wheel, drop your shoulders and take one slow breath. The red light just became your friend.", es: "Vas manejando y el semáforo se pone en rojo. En vez de suspirar, prueba esto: siente tus manos en el volante, suelta los hombros y da una respiración lenta. El semáforo en rojo acaba de volverse tu amigo." },
        { it: "There are red lights everywhere in a day: the elevator, the checkout line, the loading screen. Each one is a small invitation to return to the present moment. Traffic stops; your attention does not have to.", es: "Hay semáforos en rojo por todo el día: el elevador, la fila del súper, la pantalla de carga. Cada uno es una pequeña invitación a volver al momento presente. El tráfico se detiene; tu atención no tiene por qué." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de tráfico urbano", "Usar las pausas cotidianas (semáforos, filas) para volver al presente", "Un artículo sobre señales de tránsito"],
        answer: 1,
        why: "El título apunta a transformar la espera del semáforo, no a normas de tráfico.",
      },
      quiz: [
        { q: "What do you feel first at the red light?", kind: "literal", options: ["Your hands on the wheel", "The radio", "The engine"], answer: 0, why: "«Feel your hands on the wheel»." },
        { q: "What are other 'red lights' in a day?", kind: "inferencial", options: ["The elevator, the checkout line, the loading screen", "Only traffic lights", "Problems at work"], answer: 0, why: "El segundo párrafo los nombra como pausas equivalentes." },
        { q: "What is the text really about?", kind: "critica", options: ["Turning small waits into moments of presence", "Driving faster in the city", "Avoiding red lights"], answer: 0, why: "La idea central: cada pausa es una invitación al presente." },
      ],
      vf: [
        { text: "The text says you should sigh at red lights.", value: false, why: "Dice «instead of sighing»: en vez de suspirar." },
        { text: "Each wait can be an invitation to return to the present.", value: true, why: "«Each one is a small invitation to return to the present moment»." },
        { text: "Traffic stops, but your attention does not have to.", value: true, why: "Frase final del segundo párrafo." },
      ],
    },
    {
      id: "md-en-a2-03-2", theme: "relax fisico",
      title: "Soft hands", titleEs: "Manos suaves",
      minutes: 2,
      paragraphs: [
        { it: "Look at your hands right now. Are the fingers curled like little fists? While you type or scroll, your hands work hard and hold tension. Let them rest on your legs for one moment, open and soft.", es: "Mira tus manos ahora mismo. ¿Tienes los dedos encogidos como pequeños puños? Mientras escribes o deslizas, tus manos trabajan duro y guardan tensión. Déjalas descansar sobre tus piernas un momento, abiertas y suaves." },
        { it: "The hands are a small map of the whole body: when they relax, the shoulders and jaw often follow. Three soft-hand breaks a day can change how your body feels by dinner.", es: "Las manos son un pequeño mapa del cuerpo entero: cuando se relajan, los hombros y la mandíbula suelen seguirlas. Tres pausas de manos suaves al día pueden cambiar cómo se siente tu cuerpo a la hora de la cena." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un tutorial de mecanografía rápida", "Soltar la tensión de las manos mientras trabajas", "Una reseña de teléfonos nuevos"],
        answer: 1,
        why: "«Soft hands» apunta a relajar las manos, no a escribir más rápido ni a comprar aparatos.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Relaxing the hands invites the rest of the body to follow",
          "Strong hands are better for typing",
          "You should buy a softer keyboard",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Fingers often curl like little fists",
          "Hands hold tension while you type",
          "Three breaks a day can change how you feel",
        ],
        distractors: [
          "Hands can type two hundred words a minute",
          "You must soak your hands in ice water",
          "Phones are bad for your eyes",
        ],
      },
      intruder: {
        instr: "Una de estas frases NO encaja con el texto. ¿Cuál es el intruso?",
        sentences: [
          "Look at your hands right now.",
          "The fingers often curl like little fists.",
          "Let them rest on your legs, open and soft.",
          "Smartphones cost more every year.",
          "When the hands relax, the shoulders follow.",
        ],
        intruder: 3,
        why: "El precio de los teléfonos no pertenece a la práctica de relajación: es el intruso.",
      },
    },
    {
      id: "md-en-a2-03-3", theme: "relax mentale",
      title: "The two-minute vacation", titleEs: "Las mini vacaciones de dos minutos",
      minutes: 2,
      paragraphs: [
        { it: "Close your eyes for a moment and picture a place where you feel safe: a beach at sunset, a quiet library, your grandmother's kitchen. See the colors and hear the sounds of that place.", es: "Cierra los ojos un momento e imagina un lugar donde te sientes seguro: una playa al atardecer, una biblioteca silenciosa, la cocina de tu abuela. Ve los colores y escucha los sonidos de ese lugar." },
        { it: "Your mind can travel without a ticket. Two minutes inside a good memory can slow your heartbeat and soften your thoughts. Then open your eyes and bring a little of that calm back with you.", es: "Tu mente puede viajar sin boleto. Dos minutos dentro de un buen recuerdo pueden frenar tu corazón y suavizar tus pensamientos. Luego abre los ojos y trae un poco de esa calma de vuelta contigo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un paquete turístico barato", "Un ejercicio de imaginación calmada en dos minutos", "Una novela de aventuras"],
        answer: 1,
        why: "«Two-minute vacation» es una metáfora de imaginación guiada, no un viaje real.",
      },
      sequence: {
        instr: "Ordena los pasos de la mini vacación:",
        events: ["Close your eyes", "Picture a safe place", "See the colors and hear the sounds", "Stay inside the memory for two minutes", "Open your eyes and bring the calm back"],
      },
      listen: {
        intro: "Escucha el mini-audio de imaginación:",
        audioIt: "This is your two-minute vacation. Close your eyes. Picture a quiet beach in the evening. Hear the slow waves. Feel the warm air on your face. There is nothing to do here and nowhere to go. Stay for two minutes. When you open your eyes, bring the calm with you.",
        questions: [
          { q: "What place does the audio describe?", kind: "literal", options: ["A quiet beach in the evening", "A busy airport", "A shopping mall"], answer: 0, why: "«Picture a quiet beach in the evening»." },
          { q: "What do you hear?", kind: "literal", options: ["Slow waves", "Loud traffic", "A ringing phone"], answer: 0, why: "«Hear the slow waves»." },
          { q: "What is there to do in this place?", kind: "inferencial", options: ["Nothing — there is nowhere to go", "Surfing and swimming", "Taking photos"], answer: 0, why: "«There is nothing to do here and nowhere to go»: se infiere el reposo total." },
          { q: "What do you bring back?", kind: "literal", options: ["A little calm", "A seashell", "A sunburn"], answer: 0, why: "«Bring the calm with you»." },
        ],
      },
    },
  ],

  "en-cu-a2-04": [
    {
      id: "md-en-a2-04-1", theme: "meditazione",
      title: "A five-step body scan", titleEs: "Un escaneo corporal de cinco pasos",
      minutes: 3,
      paragraphs: [
        { it: "Sit still and close your eyes. Move your attention slowly from your feet to your head: feet, legs, belly, shoulders, jaw. At each stop, notice what you feel — warmth, tension, maybe nothing at all.", es: "Siéntate quieto y cierra los ojos. Mueve tu atención lentamente de los pies a la cabeza: pies, piernas, vientre, hombros, mandíbula. En cada parada, nota lo que sientes: calor, tensión, quizás nada en absoluto." },
        { it: "A body scan is a tour of yourself without moving an inch. When you find a tight spot, do not fight it; just notice it and keep breathing. Attention is like sunlight: what it touches, it often softens.", es: "Un escaneo corporal es un tour por ti mismo sin moverte ni un centímetro. Cuando encuentres un punto tenso, no luches contra él; solo nótalo y sigue respirando. La atención es como la luz del sol: lo que toca, casi siempre lo ablanda." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una rutina de gimnasio intensa", "Un escaneo corporal de cinco pasos para relajar", "Un examen médico anual"],
        answer: 1,
        why: "El título anuncia un recorrido corporal de cinco pasos, típico de la meditación.",
      },
      quiz: [
        { q: "Where does the scan start?", kind: "literal", options: ["At your feet", "At your head", "At your hands"], answer: 0, why: "«From your feet to your head»." },
        { q: "What do you do when you find a tight spot?", kind: "inferencial", options: ["You notice it and keep breathing", "You push it hard", "You stop the scan"], answer: 0, why: "«Do not fight it; just notice it and keep breathing»." },
        { q: "What does 'attention is like sunlight' mean?", kind: "critica", options: ["What attention touches, it often softens", "Attention can burn your skin", "Sunlight is bad for meditation"], answer: 0, why: "La metáfora se explica sola: la atención ablanda lo que toca." },
      ],
      vf: [
        { text: "You move your body a lot during the scan.", value: false, why: "«Without moving an inch»: sin moverte nada." },
        { text: "You may feel warmth, tension or nothing at all.", value: true, why: "«Warmth, tension, maybe nothing at all»." },
        { text: "The scan visits five stops, from feet to jaw.", value: true, why: "Feet, legs, belly, shoulders, jaw: cinco paradas." },
      ],
    },
    {
      id: "md-en-a2-04-2", theme: "spiritualità",
      title: "The sound of the bell", titleEs: "El sonido de la campana",
      minutes: 2,
      paragraphs: [
        { it: "In many traditions, a bell marks a pause. When you hear a bell — a doorbell, a wind chime, a notification — you can stop for one conscious breath. The sound passes; the pause is yours.", es: "En muchas tradiciones, una campana marca una pausa. Cuando oyes una campana — el timbre, una campana de viento, una notificación — puedes detenerte una respiración consciente. El sonido pasa; la pausa es tuya." },
        { it: "Some people call this a mindfulness bell. The outside world offers the signal, but the stillness is your answer. Three pauses a day, and the hours start to feel different: less rush, more room.", es: "Algunos llaman a esto una campana de atención plena. El mundo exterior ofrece la señal, pero la quietud es tu respuesta. Tres pausas al día, y las horas empiezan a sentirse distintas: menos prisa, más espacio." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La historia de las campanas de iglesia", "Convertir sonidos cotidianos en campanas de atención plena", "Un catálogo de campanas de viento"],
        answer: 1,
        why: "El título apunta a usar el sonido como señal para pausar, no a historia ni productos.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Everyday sounds can become invitations to pause and breathe",
          "Bells are only for churches",
          "Notifications should always be silenced",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "A bell marks a pause",
          "The sound passes, but the pause is yours",
          "Three pauses a day change the hours",
        ],
        distractors: [
          "Bells ring only on Sundays",
          "You must buy an expensive bell",
          "Silence is impossible in the city",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "A bell can mark a pause.",
          "You hear bells in many places: doorbells, wind chimes.",
          "The sound passes; the pause is yours.",
          "Bronze bells are made of copper and tin.",
          "Three pauses a day make the hours feel different.",
        ],
        intruder: 3,
        why: "La composición del bronce es un dato de metalurgia, ajeno a la práctica: es el intruso.",
      },
    },
    {
      id: "md-en-a2-04-3", theme: "relax fisico",
      title: "The morning stretch", titleEs: "El estiramiento matinal",
      minutes: 2,
      paragraphs: [
        { it: "Before you check your phone, try this: reach your arms above your head and stretch like a cat in the sun. Yawn if a yawn wants to come. Your body was still for hours; say good morning to it.", es: "Antes de mirar el teléfono, prueba esto: levanta los brazos sobre la cabeza y estírate como un gato al sol. Bosteza si un bostezo quiere salir. Tu cuerpo estuvo quieto horas: dale los buenos días." },
        { it: "A stretch is a conversation with your muscles. You do not need a gym or a mat — the first three minutes out of bed are enough. Start the day loose, and the day starts kind.", es: "Un estiramiento es una conversación con tus músculos. No necesitas gimnasio ni tapete: los primeros tres minutos fuera de la cama bastan. Empieza el día suelto, y el día empieza amable." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Rutinas de famosos", "Un estiramiento de gato por la mañana, antes del celular", "Una clase de yoga avanzada"],
        answer: 1,
        why: "El título apunta a un gesto simple al despertar, no a famosos ni a yoga avanzado.",
      },
      sequence: {
        instr: "Ordena la rutina de la mañana:",
        events: ["Wake up without checking your phone", "Reach your arms above your head", "Stretch like a cat in the sun", "Let a yawn come", "Start the day loose and kind"],
      },
      listen: {
        intro: "Escucha y responde:",
        audioIt: "Good morning. Before the phone, your body. Sit on the edge of the bed. Reach both arms up, high, and stretch like a cat. Breathe in as you reach. Now let your arms fall slowly as you breathe out. One more time: reach up, and drop down. Your day starts kind when your body starts loose.",
        questions: [
          { q: "Where do you sit?", kind: "literal", options: ["On the edge of the bed", "On the floor", "On a chair"], answer: 0, why: "«Sit on the edge of the bed»." },
          { q: "What animal do you imitate?", kind: "literal", options: ["A cat", "A dog", "A bird"], answer: 0, why: "«Stretch like a cat»." },
          { q: "When do your arms fall?", kind: "inferencial", options: ["As you breathe out", "As you breathe in", "Before you stretch"], answer: 0, why: "«Let your arms fall slowly as you breathe out»: se infiere la coordinación." },
          { q: "How does the day start when the body starts loose?", kind: "literal", options: ["Kind", "Late", "Cold"], answer: 0, why: "«Your day starts kind»." },
        ],
      },
    },
  ],

  "en-cu-a2-05": [
    {
      id: "md-en-a2-05-1", theme: "relax mentale",
      title: "Name the feeling", titleEs: "Poner nombre a lo que sientes",
      minutes: 2,
      paragraphs: [
        { it: "When a strong feeling arrives, try naming it quietly: 'frustration', 'worry', 'excitement'. A name is like a small label on a jar: the feeling does not disappear, but it stops spilling everywhere.", es: "Cuando llega un sentimiento fuerte, prueba a nombrarlo en silencio: 'frustración', 'preocupación', 'emoción'. Un nombre es como una etiqueta en un frasco: el sentimiento no desaparece, pero deja de derramarse por todas partes." },
        { it: "You can even name the intensity: 'a big worry', 'a small worry'. Strange but true: putting feelings into words makes them a little lighter. Name it to tame it.", es: "Incluso puedes nombrar la intensidad: 'una preocupación grande', 'una preocupación pequeña'. Extraño pero cierto: poner los sentimientos en palabras los vuelve un poco más ligeros. Nómbralo para domarlo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un test de vocabulario en inglés", "Poner nombre a las emociones para calmarlas", "Un parte meteorológico"],
        answer: 1,
        why: "El título apunta a nombrar lo que sientes, técnica clásica de relajación mental.",
      },
      quiz: [
        { q: "What do you do with a strong feeling?", kind: "literal", options: ["You name it quietly", "You hide it in a jar", "You ignore it completely"], answer: 0, why: "«Try naming it quietly»." },
        { q: "What happens when you name a feeling?", kind: "inferencial", options: ["It does not disappear, but it stops spilling everywhere", "It disappears immediately", "It gets much stronger"], answer: 0, why: "«The feeling does not disappear, but it stops spilling everywhere»." },
        { q: "What does 'name it to tame it' mean?", kind: "critica", options: ["Naming emotions helps you manage them", "Feelings are dangerous animals", "Words are useless for emotions"], answer: 0, why: "La idea central: nombrar ayuda a domar lo que se siente." },
      ],
      vf: [
        { text: "The feeling disappears completely when you name it.", value: false, why: "El texto dice que no desaparece, pero deja de derramarse." },
        { text: "A name works like a label on a jar.", value: true, why: "«A name is like a small label on a jar»." },
        { text: "You can also name the intensity of the feeling.", value: true, why: "«'A big worry', 'a small worry'»." },
      ],
    },
    {
      id: "md-en-a2-05-2", theme: "qui e ora",
      title: "The first bite", titleEs: "El primer bocado",
      minutes: 2,
      paragraphs: [
        { it: "Today, pay full attention to the first bite of one meal. Notice the temperature, the texture, the first flavor and the aftertaste. Chew slowly, just for this first bite, as if you had never eaten it before.", es: "Hoy, presta toda tu atención al primer bocado de una comida. Nota la temperatura, la textura, el primer sabor y el dejo que deja. Mastica despacio, solo este primer bocado, como si nunca lo hubieras probado." },
        { it: "One mindful bite will not change your diet, but it changes your attention. Many people eat in front of screens and never taste their food at all. The first bite is a small door into the present.", es: "Un bocado consciente no cambiará tu dieta, pero cambia tu atención. Mucha gente come frente a pantallas y nunca saborea su comida. El primer bocado es una pequeña puerta al presente." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una dieta de moda", "Prestar atención plena al primer bocado de una comida", "Una receta de un chef famoso"],
        answer: 1,
        why: "El título se enfoca en un solo bocado: es atención, no dieta ni receta.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Tasting the first bite with full attention opens a door to the present",
          "Eating fast is healthier",
          "Screens make food taste better",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "You notice temperature, texture and flavor",
          "Many people eat in front of screens",
          "The first bite is a small door into the present",
        ],
        distractors: [
          "You must cook every meal at home",
          "Dessert should always come first",
          "Restaurants are too expensive",
        ],
      },
      intruder: {
        instr: "Una de estas frases NO encaja con el texto. ¿Cuál es el intruso?",
        sentences: [
          "Pay attention to the first bite of one meal.",
          "Notice the temperature and the texture.",
          "Chew slowly, as if you had never eaten it before.",
          "This restaurant has fifty tables upstairs.",
          "The first bite is a small door into the present.",
        ],
        intruder: 3,
        why: "El número de mesas del restaurante es ajeno a la práctica del bocado consciente: es el intruso.",
      },
    },
    {
      id: "md-en-a2-05-3", theme: "spiritualità",
      title: "The gift of listening", titleEs: "El regalo de escuchar",
      minutes: 2,
      paragraphs: [
        { it: "Real listening is a quiet gift. Today, give one person three minutes without interrupting, without advising, without waiting for your turn to speak. Just listen, with your eyes and your whole attention.", es: "Escuchar de verdad es un regalo silencioso. Hoy, dale a una persona tres minutos sin interrumpir, sin aconsejar, sin esperar tu turno para hablar. Solo escucha, con los ojos y toda tu atención." },
        { it: "Many traditions put listening before speaking. When you listen completely, you honor the person in front of you. Presence, offered to another, is also a practice.", es: "Muchas tradiciones ponen el escuchar antes del hablar. Cuando escuchas por completo, honras a la persona frente a ti. La presencia, ofrecida a otro, también es una práctica." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de debate", "Escuchar de verdad a alguien como práctica espiritual", "Un curso de oratoria"],
        answer: 1,
        why: "El título presenta escuchar como un regalo: atención plena hacia otro.",
      },
      sequence: {
        instr: "Ordena la práctica del regalo de escuchar:",
        events: ["Choose one person", "Give them three minutes", "Listen without interrupting or advising", "Offer your whole attention", "Notice how the conversation changes"],
      },
      listen: {
        intro: "Escucha el mini-audio del regalo:",
        audioIt: "Today's practice is the gift of listening. Choose one person. When they speak, put your phone face down. Do not interrupt. Do not fix. Just listen, and when they finish, say thank you. That is all. Three minutes of real attention can change a whole conversation.",
        questions: [
          { q: "What do you do with your phone?", kind: "literal", options: ["Put it face down", "Turn the volume up", "Give it away"], answer: 0, why: "«Put your phone face down»." },
          { q: "What do you NOT do while listening?", kind: "literal", options: ["Interrupt or fix", "Breathe", "Look at them"], answer: 0, why: "«Do not interrupt. Do not fix»." },
          { q: "What do you say when they finish?", kind: "literal", options: ["Thank you", "Goodbye", "Nothing ever"], answer: 0, why: "«When they finish, say thank you»." },
          { q: "What can three minutes of attention change?", kind: "inferencial", options: ["A whole conversation", "The weather", "Your salary"], answer: 0, why: "«Can change a whole conversation»: se infiere el efecto en la charla." },
        ],
      },
    },
  ],

  "en-cu-a2-06": [
    {
      id: "md-en-a2-06-1", theme: "meditazione",
      title: "The anchor of the breath", titleEs: "El ancla de la respiración",
      minutes: 2,
      paragraphs: [
        { it: "When the day gets windy — busy messages, loud noises, too many plans — your breath is an anchor. It is always with you, always available, and it never needs batteries.", es: "Cuando el día se vuelve ventoso — mensajes ocupados, ruidos fuertes, demasiados planes — tu respiración es un ancla. Siempre está contigo, siempre disponible, y nunca necesita baterías." },
        { it: "Anchoring is simple: one long breath out, then feel the next breath in. Boats do not stop storms, but they stay steady in the water. You can stay steady in your day the same way.", es: "Anclarse es simple: una exhalación larga, luego siente la siguiente inhalación. Los botes no detienen las tormentas, pero se mantienen firmes en el agua. Puedes mantenerte firme en tu día de la misma manera." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un artículo sobre navegación", "La respiración como ancla en días agitados", "Una tienda de baterías"],
        answer: 1,
        why: "El título usa ancla como metáfora de calma; el texto de meditación lo confirma.",
      },
      quiz: [
        { q: "What is the anchor?", kind: "literal", options: ["Your breath", "Your phone", "A boat"], answer: 0, why: "«Your breath is an anchor»." },
        { q: "Why does the breath never need batteries?", kind: "inferencial", options: ["Because it is always with you and always available", "Because it is electronic", "Because batteries are expensive"], answer: 0, why: "«It is always with you, always available»: no depende de nada externo." },
        { q: "What does the boat metaphor teach?", kind: "critica", options: ["You cannot stop storms, but you can stay steady", "Boats are better than anchors", "Storms are enjoyable"], answer: 0, why: "«Boats do not stop storms, but they stay steady»." },
      ],
      vf: [
        { text: "One long breath out can start the anchoring.", value: true, why: "«One long breath out, then feel the next breath in»." },
        { text: "The anchor needs batteries.", value: false, why: "«It never needs batteries»." },
        { text: "Boats stay steady in the water during storms.", value: true, why: "«They stay steady in the water»." },
      ],
    },
    {
      id: "md-en-a2-06-2", theme: "relax fisico",
      title: "Feet on the floor", titleEs: "Pies en el suelo",
      minutes: 2,
      paragraphs: [
        { it: "Sit down and put both feet flat on the floor. Feel the four corners of each foot: heel, little toe, big toe, and the ball behind the toes. Press down gently, then release.", es: "Siéntate y apoya bien los dos pies en el suelo. Siente las cuatro esquinas de cada pie: talón, dedo pequeño, dedo gordo y la planta detrás de los dedos. Presiona suave y luego suelta." },
        { it: "Grounding your feet tells your body: 'we are here, we are safe'. It takes twenty seconds and you can do it anywhere — at your desk, on the bus, in a waiting room. Calm often starts from the ground up.", es: "Aterrizar los pies le dice a tu cuerpo: 'estamos aquí, estamos a salvo'. Toma veinte segundos y puedes hacerlo en cualquier parte: en tu escritorio, en el autobús, en una sala de espera. La calma suele empezar desde el suelo hacia arriba." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una revisión de podología", "Apoyar bien los pies en el suelo para bajar la ansiedad", "Una clase de ballet"],
        answer: 1,
        why: "«Feet on the floor» es una técnica de aterrizaje corporal, no medicina ni danza.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Feeling your feet on the floor brings calm from the ground up",
          "Standing all day is healthy",
          "Shoes are the most important part of grounding",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "You feel the four corners of each foot",
          "It takes twenty seconds",
          "You can do it at your desk or on the bus",
        ],
        distractors: [
          "You must take off your shoes",
          "Grounding requires a garden",
          "Feet have twenty toes",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Put both feet flat on the floor.",
          "Feel the four corners of each foot.",
          "Press down gently, then release.",
          "The average shoe size in the U.S. is between 9 and 10.",
          "Grounding tells your body: we are here, we are safe.",
        ],
        intruder: 3,
        why: "La estadística de tallas de calzado no pertenece a la práctica de aterrizaje: es el intruso.",
      },
    },
    {
      id: "md-en-a2-06-3", theme: "qui e ora",
      title: "The waiting line", titleEs: "La fila de espera",
      minutes: 2,
      paragraphs: [
        { it: "You are in line at the coffee shop and the line is long. You can check your phone for the ninth time — or you can feel your feet, soften your shoulders and look around the room.", es: "Estás en la fila de la cafetería y la fila es larga. Puedes mirar el teléfono por novena vez — o puedes sentir tus pies, suavizar tus hombros y mirar la sala a tu alrededor." },
        { it: "Waiting is only lost time if you fight it. A line can be a small room of presence: the smell of coffee, the sound of the machine, the people around you. Two quiet minutes, free of charge.", es: "Esperar es tiempo perdido solo si lo peleas. Una fila puede ser una pequeña sala de presencia: el olor a café, el sonido de la máquina, la gente a tu alrededor. Dos minutos tranquilos, gratis." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Trucos para saltarte las filas", "Convertir la fila de la cafetería en un momento de presencia", "Una queja sobre el servicio"],
        answer: 1,
        why: "El título apunta a la experiencia de esperar, no a evitarla ni a quejarse.",
      },
      sequence: {
        instr: "Ordena los pasos de la fila consciente:",
        events: ["You are in line at the coffee shop", "Feel your feet on the floor", "Soften your shoulders", "Look around the room", "Enjoy two quiet minutes"],
      },
      listen: {
        intro: "Escucha el audio de la fila:",
        audioIt: "You are in line, and the line is long. Perfect. Feel your feet on the floor. Drop your shoulders. Now find three sounds around you: maybe the machine, a laugh, the door. The line will move when it moves. Right now, you have two quiet minutes, and they are free.",
        questions: [
          { q: "What do you feel on the floor?", kind: "literal", options: ["Your feet", "Your bags", "Your phone"], answer: 0, why: "«Feel your feet on the floor»." },
          { q: "How many sounds do you find?", kind: "literal", options: ["Three", "Nine", "None"], answer: 0, why: "«Find three sounds around you»." },
          { q: "When will the line move?", kind: "inferencial", options: ["When it moves — not before", "When you complain", "When you pay more"], answer: 0, why: "«The line will move when it moves»: se infiere aceptar el ritmo." },
          { q: "How much do the two quiet minutes cost?", kind: "literal", options: ["Nothing — they are free", "Two dollars", "A coffee"], answer: 0, why: "«They are free»." },
        ],
      },
    },
  ],

  "en-cu-a2-07": [
    {
      id: "md-en-a2-07-1", theme: "relax mentale",
      title: "The snow globe", titleEs: "La bola de nieve",
      minutes: 2,
      paragraphs: [
        { it: "Your busy mind is like a snow globe after shaking: a thousand white pieces flying everywhere. You cannot grab the pieces with your hands, and you do not need to.", es: "Tu mente ocupada es como una bola de nieve después de agitarla: mil pedazos blancos volando por todas partes. No puedes atrapar los pedazos con las manos, y no necesitas hacerlo." },
        { it: "Just set the globe down on the table. Do not shake it again with more thinking. Watch the snow settle, slowly, by itself. A quiet mind is not empty; it is settled.", es: "Solo deja la bola sobre la mesa. No la agites de nuevo con más pensamientos. Mira la nieve asentarse, despacio, sola. Una mente tranquila no está vacía: está asentada." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un juguete navideño", "Dejar que los pensamientos se asienten como la nieve de una bola de cristal", "Una guía de fotografía de invierno"],
        answer: 1,
        why: "La bola de nieve es la metáfora clásica de la mente agitada que se calma sola.",
      },
      quiz: [
        { q: "What is flying in the snow globe?", kind: "literal", options: ["A thousand white pieces", "A flock of birds", "A swarm of bees"], answer: 0, why: "«A thousand white pieces flying everywhere»." },
        { q: "What should you do with the globe?", kind: "inferencial", options: ["Set it down and stop shaking it", "Shake it harder", "Open it and clean it"], answer: 0, why: "«Set the globe down… do not shake it again»." },
        { q: "What is a quiet mind, according to the text?", kind: "critica", options: ["Not empty, but settled", "Completely empty", "Frozen like ice"], answer: 0, why: "«A quiet mind is not empty; it is settled»." },
      ],
      vf: [
        { text: "You can calm the mind by grabbing each thought with your hands.", value: false, why: "«You cannot grab the pieces with your hands»." },
        { text: "More thinking often shakes the globe again.", value: true, why: "«Do not shake it again with more thinking»." },
        { text: "The snow settles slowly by itself.", value: true, why: "«Watch the snow settle, slowly, by itself»." },
      ],
    },
    {
      id: "md-en-a2-07-2", theme: "spiritualità",
      title: "The evening sky", titleEs: "El cielo del atardecer",
      minutes: 2,
      paragraphs: [
        { it: "Once a week, watch the sunset without your phone, without talking. The sky changes color slowly, from orange to pink to a deep quiet blue. You do not have to do anything with this beauty.", es: "Una vez por semana, mira el atardecer sin teléfono, sin hablar. El cielo cambia de color lentamente, del naranja al rosa y a un azul profundo y callado. No tienes que hacer nada con esta belleza." },
        { it: "People have paused at the evening sky for thousands of years. It is one of the oldest human prayers: no words, just attention. Ten minutes of sky can make your problems feel the right size.", es: "La gente se ha detenido ante el cielo del atardecer durante miles de años. Es una de las oraciones humanas más antiguas: sin palabras, solo atención. Diez minutos de cielo pueden hacer que tus problemas sientan su tamaño correcto." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un pronóstico del tiempo", "Contemplar el atardecer en silencio como práctica espiritual", "Una clase de astronomía"],
        answer: 1,
        why: "El título apunta a la contemplación del atardecer, no a meteorología ni astronomía.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Watching the sunset in silence is an old, wordless practice of attention",
          "Sunsets are only for photographers",
          "The phone makes sunsets better",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "The sky changes from orange to pink to deep blue",
          "You do not have to do anything with the beauty",
          "Ten minutes of sky can size your problems right",
        ],
        distractors: [
          "Sunsets last exactly one hour",
          "You must travel to the desert to see one",
          "Stars are visible at noon",
        ],
      },
      intruder: {
        instr: "Una de estas frases NO encaja con el texto. ¿Cuál es el intruso?",
        sentences: [
          "Watch the sunset once a week without your phone.",
          "The sky changes color slowly.",
          "You do not have to do anything with this beauty.",
          "Pink sunsets happen because of dust in the air.",
          "Ten minutes of sky can make problems feel the right size.",
        ],
        intruder: 3,
        why: "La explicación científica del color rosado es un dato físico, ajeno a la contemplación: es el intruso.",
      },
    },
    {
      id: "md-en-a2-07-3", theme: "meditazione",
      title: "Three sounds", titleEs: "Tres sonidos",
      minutes: 2,
      paragraphs: [
        { it: "Close your eyes and listen for three sounds. The first one is easy: traffic, music, a fan. The second one is harder: your own breath. The third one is the hardest: the quiet underneath all the sound.", es: "Cierra los ojos y busca tres sonidos. El primero es fácil: tráfico, música, un ventilador. El segundo es más difícil: tu propia respiración. El tercero es el más difícil: el silencio debajo de todo el sonido." },
        { it: "Listening meditation uses your ears instead of your breath as the door. Sounds come and go, near and far. You do not name them or judge them; you just let them pass through the room of your attention.", es: "La meditación de escucha usa tus oídos en lugar de tu respiración como puerta. Los sonidos van y vienen, cerca y lejos. No los nombras ni los juzgas; solo los dejas pasar por la sala de tu atención." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una app de música", "Una meditación de escucha: encontrar tres sonidos", "Un examen de audición"],
        answer: 1,
        why: "El título anuncia una práctica de escucha en tres pasos.",
      },
      sequence: {
        instr: "Ordena la meditación de escucha:",
        events: ["Close your eyes", "Listen for an easy outer sound", "Notice your own breath", "Listen for the quiet underneath", "Let sounds pass without naming them"],
      },
      listen: {
        intro: "Escucha el minuto de escucha:",
        audioIt: "Let's try a listening minute. Close your eyes. Find one easy sound around you — a car, a fan, a voice. Now find a second sound, farther away. And now, the hardest one: the sound of your own breath. Stay there. Sounds come and go like waves. You are the beach, not the waves.",
        questions: [
          { q: "What do you find first?", kind: "literal", options: ["One easy sound around you", "A hidden treasure", "A favorite song"], answer: 0, why: "«Find one easy sound around you»." },
          { q: "Which sound is the hardest to find?", kind: "literal", options: ["Your own breath", "Traffic", "Music"], answer: 0, why: "«The hardest one: the sound of your own breath»." },
          { q: "What do sounds do, according to the audio?", kind: "literal", options: ["They come and go like waves", "They stay forever", "They get louder each minute"], answer: 0, why: "«Sounds come and go like waves»." },
          { q: "What are you, in the metaphor?", kind: "inferencial", options: ["The beach, not the waves", "The waves", "A boat in the storm"], answer: 0, why: "«You are the beach, not the waves»: se infiere el papel del observador." },
        ],
      },
    },
  ],

  "en-cu-a2-08": [
    {
      id: "md-en-a2-08-1", theme: "relax fisico",
      title: "Belly breathing", titleEs: "Respiración con el vientre",
      minutes: 2,
      paragraphs: [
        { it: "Put one hand on your chest and one on your belly. Breathe so that only the belly hand moves, rising as air comes in and falling as air goes out. The chest hand stays almost still.", es: "Pon una mano en el pecho y otra en el vientre. Respira de modo que solo se mueva la mano del vientre, subiendo cuando entra el aire y bajando cuando sale. La mano del pecho queda casi quieta." },
        { it: "Belly breathing tells your body that everything is OK. It is how babies breathe and how you breathe when you sleep. Five slow belly breaths can lower your heart rate in about a minute.", es: "La respiración del vientre le dice a tu cuerpo que todo está bien. Es como respiran los bebés y como respiras cuando duermes. Cinco respiraciones lentas de vientre pueden bajar tu ritmo cardíaco en un minuto." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ejercicio abdominal de gimnasio", "Respirar con el vientre para calmar el cuerpo", "Una clase de canto"],
        answer: 1,
        why: "El título nombra la técnica de respiración ventral, típica del relax físico.",
      },
      quiz: [
        { q: "Which hand moves?", kind: "literal", options: ["The belly hand", "The chest hand", "Both hands"], answer: 0, why: "«Only the belly hand moves»." },
        { q: "Why does belly breathing calm the body?", kind: "inferencial", options: ["It tells the body that everything is OK", "It burns a lot of calories", "It makes the heart race"], answer: 0, why: "«Belly breathing tells your body that everything is OK»." },
        { q: "What do babies and sleep have in common here?", kind: "critica", options: ["They both use belly breathing naturally", "They both need music", "They both avoid breathing deep"], answer: 0, why: "«It is how babies breathe and how you breathe when you sleep»." },
      ],
      vf: [
        { text: "The chest hand should move more than the belly hand.", value: false, why: "La mano del pecho «stays almost still»." },
        { text: "Babies breathe this way.", value: true, why: "«It is how babies breathe»." },
        { text: "Five slow breaths can lower your heart rate.", value: true, why: "«Five slow belly breaths can lower your heart rate»." },
      ],
    },
    {
      id: "md-en-a2-08-2", theme: "qui e ora",
      title: "Washing the dishes", titleEs: "Lavar los platos",
      minutes: 2,
      paragraphs: [
        { it: "Tonight, wash one dish as if it were the most important task in the world. Feel the warm water, the soap bubbles, the weight of the plate. Do not hurry to the next thing.", es: "Esta noche, lava un plato como si fuera la tarea más importante del mundo. Siente el agua tibia, las burbujas del jabón, el peso del plato. No te apures hacia lo siguiente." },
        { it: "Any ordinary activity can become presence practice: sweeping, walking, peeling an orange. The secret is not the activity — it is the attention you bring to it. A sink full of dishes can be a sanctuary.", es: "Cualquier actividad ordinaria puede volverse práctica de presencia: barrer, caminar, pelar una naranja. El secreto no es la actividad: es la atención que le llevas. Un fregadero lleno de platos puede ser un santuario." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Consejos para ahorrar agua", "Lavar un plato con atención plena como práctica", "Una comparación de detergentes"],
        answer: 1,
        why: "El título apunta a la experiencia consciente de una tarea doméstica.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Any ordinary activity becomes presence when you bring full attention to it",
          "Dishwashers are bad for plates",
          "You should only wash dishes once a week",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "You feel the warm water and the bubbles",
          "You do not hurry to the next thing",
          "Peeling an orange can also be practice",
        ],
        distractors: [
          "Hot water kills all germs instantly",
          "Bubbles are made of plastic",
          "You need special gloves for mindfulness",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Wash one dish as if it were the most important task.",
          "Feel the warm water and the soap bubbles.",
          "Do not hurry to the next thing.",
          "Ceramic plates were invented in China centuries ago.",
          "Any ordinary activity can become presence practice.",
        ],
        intruder: 3,
        why: "La historia de la cerámica es un dato cultural ajeno a la práctica: es el intruso.",
      },
    },
    {
      id: "md-en-a2-08-3", theme: "meditazione",
      title: "The candle flame", titleEs: "La llama de la vela",
      minutes: 2,
      paragraphs: [
        { it: "Light a candle in a dark room and sit comfortably. Let your eyes rest on the flame — its color, its small dance, its steady base. When your mind wanders, come back to the light.", es: "Enciende una vela en una sala oscura y siéntate cómodo. Deja que tus ojos descansen en la llama: su color, su pequeña danza, su base firme. Cuando tu mente se vaya, vuelve a la luz." },
        { it: "A flame is a wonderful teacher of attention: it moves, but it stays. Ten minutes of watching can feel like a short nap for the mind. When you finish, close your eyes and keep the little light inside.", es: "Una llama es una maestra maravillosa de la atención: se mueve, pero permanece. Diez minutos de observación pueden sentirse como una siesta corta para la mente. Al terminar, cierra los ojos y guarda la lucecita por dentro." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Seguridad contra incendios en casa", "Contemplar la llama de una vela como meditación", "Una receta con velas aromáticas"],
        answer: 1,
        why: "El título apunta a la contemplación de la llama, práctica clásica de meditación.",
      },
      sequence: {
        instr: "Ordena la meditación de la vela:",
        events: ["Light a candle in a dark room", "Sit comfortably", "Rest your eyes on the flame", "Come back to the light when your mind wanders", "Close your eyes and keep the light inside"],
      },
      listen: {
        intro: "Escucha y responde:",
        audioIt: "Find a candle and turn off the lights. Sit down and simply watch the flame. Notice its color at the center. Notice how it dances but never leaves. When a thought pulls you away, do not worry — the flame is still here. Come back to the light. Stay for five calm minutes.",
        questions: [
          { q: "What do you do with the lights?", kind: "literal", options: ["Turn them off", "Turn them on", "Change their color"], answer: 0, why: "«Turn off the lights»." },
          { q: "What does the flame do?", kind: "literal", options: ["It dances but never leaves", "It sleeps quietly", "It sings softly"], answer: 0, why: "«How it dances but never leaves»." },
          { q: "What happens when a thought pulls you away?", kind: "inferencial", options: ["You come back to the light", "You blow out the candle", "You leave the room"], answer: 0, why: "«The flame is still here. Come back to the light»." },
          { q: "How long do you stay?", kind: "literal", options: ["Five calm minutes", "All night", "Ten seconds"], answer: 0, why: "«Stay for five calm minutes»." },
        ],
      },
    },
  ],

  "en-cu-a2-09": [
    {
      id: "md-en-a2-09-1", theme: "spiritualità",
      title: "Three good things", titleEs: "Tres cosas buenas",
      minutes: 2,
      paragraphs: [
        { it: "Tonight, before sleep, remember three good things from your day. They can be tiny: a warm shower, a message from a friend, the first coffee of the morning. Say them quietly, one by one.", es: "Esta noche, antes de dormir, recuerda tres cosas buenas de tu día. Pueden ser diminutas: una ducha caliente, un mensaje de un amigo, el primer café de la mañana. Dítelas en silencio, una por una." },
        { it: "This old practice trains the heart to notice. Days are not perfect, but they always carry small gifts. People who count them often sleep a little better — gratitude is a soft pillow.", es: "Esta práctica antigua entrena al corazón para notar. Los días no son perfectos, pero siempre traen pequeños regalos. Quien los cuenta suele dormir un poco mejor: la gratitud es una almohada suave." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una lista de compras", "Recordar tres cosas buenas del día antes de dormir", "Un test de memoria"],
        answer: 1,
        why: "El título anuncia una práctica nocturna de gratitud en tres pasos.",
      },
      quiz: [
        { q: "When do you remember the three good things?", kind: "literal", options: ["Tonight, before sleep", "During lunch", "Right after waking up"], answer: 0, why: "«Tonight, before sleep»." },
        { q: "How big can the good things be?", kind: "inferencial", options: ["Tiny things, like a warm shower", "Only big achievements", "Only expensive gifts"], answer: 0, why: "«They can be tiny: a warm shower, a message from a friend»." },
        { q: "Why do people sleep better, according to the text?", kind: "critica", options: ["Gratitude works like a soft pillow", "They drink warm milk", "They exercise at night"], answer: 0, why: "«Gratitude is a soft pillow»: la metáfora central del cierre." },
      ],
      vf: [
        { text: "The good things must be big achievements.", value: false, why: "«They can be tiny»: pueden ser diminutas." },
        { text: "You say them quietly, one by one.", value: true, why: "«Say them quietly, one by one»." },
        { text: "Days always carry small gifts.", value: true, why: "«They always carry small gifts»." },
      ],
    },
    {
      id: "md-en-a2-09-2", theme: "qui e ora",
      title: "The first step outside", titleEs: "El primer paso afuera",
      minutes: 2,
      paragraphs: [
        { it: "This morning, stop right outside your door for three seconds. Feel the air: is it cool, warm, moving? Take one breath of the new day before you hurry to the car or the bus.", es: "Esta mañana, detente justo afuera de tu puerta tres segundos. Siente el aire: ¿está fresco, tibio, en movimiento? Da una respiración del día nuevo antes de apurarte hacia el auto o el autobús." },
        { it: "Doorways are natural thresholds — the end of one space and the start of another. A small pause there connects the two. Step out, breathe, and only then begin the day's race.", es: "Los umbrales son fronteras naturales: el final de un espacio y el inicio de otro. Una pequeña pausa ahí conecta los dos. Sal, respira y solo entonces empieza la carrera del día." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un catálogo de puertas", "Una pausa de tres segundos al salir de casa cada mañana", "Un artículo sobre transporte público"],
        answer: 1,
        why: "El título apunta al momento de salir de casa, no a puertas ni transporte.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "A tiny pause at the doorway connects home with the day ahead",
          "Doors are too expensive",
          "You should never leave home without coffee",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "You feel if the air is cool or warm",
          "You take one breath of the new day",
          "A pause connects one space with another",
        ],
        distractors: [
          "Doorways must be painted blue",
          "Buses are faster than cars",
          "Morning air is dangerous",
        ],
      },
      intruder: {
        instr: "Una de estas frases NO encaja con el texto. ¿Cuál es el intruso?",
        sentences: [
          "Stop right outside your door.",
          "Feel the air: cool, warm, moving.",
          "Take one breath of the new day.",
          "Most front doors in America are made of wood or steel.",
          "Then begin the day's race.",
        ],
        intruder: 3,
        why: "El material de las puertas es un dato de construcción, ajeno a la pausa consciente: es el intruso.",
      },
    },
    {
      id: "md-en-a2-09-3", theme: "relax fisico",
      title: "The neck release", titleEs: "La liberación del cuello",
      minutes: 2,
      paragraphs: [
        { it: "After an hour at the computer, your neck gets stiff. Slowly drop your right ear toward your right shoulder and breathe three times. Then change sides. No forcing — the head is heavy enough.", es: "Tras una hora frente a la computadora, el cuello se pone rígido. Deja caer despacio la oreja derecha hacia el hombro derecho y respira tres veces. Luego cambia de lado. Sin forzar: la cabeza ya pesa bastante." },
        { it: "The neck carries your head and a lot of your stress. Two or three gentle releases a day keep it friendly. If you feel dizzy, stop: gentle means gentle, always.", es: "El cuello carga tu cabeza y buena parte de tu estrés. Dos o tres liberaciones suaves al día lo mantienen amigable. Si sientes mareo, detente: suave significa suave, siempre." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Ejercicios con pesas para el cuello", "Una liberación suave de cuello tras la computadora", "Un diagnóstico médico"],
        answer: 1,
        why: "El título anuncia un ejercicio suave de cuello, no pesas ni diagnóstico.",
      },
      sequence: {
        instr: "Ordena la liberación de cuello:",
        events: ["Notice your neck is stiff", "Drop your right ear toward your right shoulder", "Breathe three times", "Change sides", "Stop if you feel dizzy"],
      },
      listen: {
        intro: "Escucha el descanso de cuello:",
        audioIt: "Computer break. Sit tall and let your shoulders drop. Now slowly drop your right ear toward your right shoulder. Do not push with your hand; gravity is doing the work. Breathe in and out, three times. Come back to center. Now the left side, same slow movement. Feel the neck say thank you.",
        questions: [
          { q: "Where do you drop your ear?", kind: "literal", options: ["Toward your shoulder", "Toward your chest", "Toward the screen"], answer: 0, why: "«Drop your right ear toward your right shoulder»." },
          { q: "What does the work of the stretch?", kind: "inferencial", options: ["Gravity, not your hand", "Your hand pushing hard", "A friend pulling"], answer: 0, why: "«Do not push with your hand; gravity is doing the work»." },
          { q: "How many breaths on each side?", kind: "literal", options: ["Three", "Ten", "One"], answer: 0, why: "«Breathe in and out, three times»." },
          { q: "How does the neck feel at the end?", kind: "literal", options: ["It says thank you", "It hurts more", "It falls asleep"], answer: 0, why: "«Feel the neck say thank you»." },
        ],
      },
    },
  ],

  "en-cu-a2-10": [
    {
      id: "md-en-a2-10-1", theme: "relax mentale",
      title: "The mental backpack", titleEs: "La mochila mental",
      minutes: 2,
      paragraphs: [
        { it: "At the end of the workday, imagine taking off a backpack. Inside are the meetings, the emails, the small problems of the day. Picture yourself placing it by the door of the office.", es: "Al final de la jornada, imagina que te quitas una mochila. Adentro están las reuniones, los correos, los problemas pequeños del día. Imagínate dejándola junto a la puerta de la oficina." },
        { it: "The worries will still be there tomorrow morning, but you do not have to carry them home. This mental backpack exercise takes one minute and gives you back your evening. Travel light.", es: "Las preocupaciones seguirán ahí mañana en la mañana, pero no tienes que cargarlas a casa. Este ejercicio de la mochila mental toma un minuto y te devuelve la tarde. Viaja ligero." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Equipo de camping ligero", "Dejarse el trabajo 'en la mochila mental' al salir de la oficina", "Una revisión de mochilas escolares"],
        answer: 1,
        why: "La mochila es metáfora del estrés laboral que no hay que llevar a casa.",
      },
      quiz: [
        { q: "What is inside the backpack?", kind: "literal", options: ["Meetings, emails and small problems", "Sandwiches and water", "Old photos"], answer: 0, why: "«Inside are the meetings, the emails, the small problems»." },
        { q: "Where do you place the backpack?", kind: "inferencial", options: ["By the office door — you leave it there", "In your car", "Under your bed"], answer: 0, why: "«Placing it by the door of the office»: se queda en el trabajo." },
        { q: "What does 'travel light' mean here?", kind: "critica", options: ["Carry fewer worries into your evening", "Take a small suitcase", "Walk faster home"], answer: 0, why: "La idea central: no cargar las preocupaciones a casa." },
      ],
      vf: [
        { text: "The worries disappear forever with this exercise.", value: false, why: "«The worries will still be there tomorrow morning»." },
        { text: "The exercise takes one minute.", value: true, why: "«Takes one minute»." },
        { text: "You do not have to carry the worries home.", value: true, why: "«You do not have to carry them home»." },
      ],
    },
    {
      id: "md-en-a2-10-2", theme: "spiritualità",
      title: "The tree outside the window", titleEs: "El árbol fuera de la ventana",
      minutes: 2,
      paragraphs: [
        { it: "There is a tree outside your window — maybe far, maybe near. It stands there in every season, in sun and in storm, without complaining and without hurrying. Watch it for one minute.", es: "Hay un árbol fuera de tu ventana — quizás lejos, quizás cerca. Está ahí en cada estación, bajo el sol y bajo la tormenta, sin quejarse y sin apurarse. Obsérvalo un minuto." },
        { it: "Trees teach a slow kind of wisdom: roots first, then growth. You cannot see a tree growing, but it grows. Some part of you grows the same way, quietly, even on hard days.", es: "Los árboles enseñan una sabiduría lenta: primero las raíces, luego el crecimiento. No puedes ver crecer un árbol, pero crece. Alguna parte de ti crece igual, en silencio, incluso en los días difíciles." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Botánica para principiantes", "Contemplar un árbol como lección de calma y crecimiento", "Cómo plantar un árbol"],
        answer: 1,
        why: "El título apunta a la contemplación del árbol y su lección, no a botánica.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "A tree's quiet steadiness can teach you patience and trust in slow growth",
          "Trees must be cut in winter",
          "Windows should always stay closed",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "The tree stands in every season",
          "You cannot see a tree growing, but it grows",
          "Some part of you grows quietly too",
        ],
        distractors: [
          "Trees grow one meter per day",
          "Only fruit trees are wise",
          "Storms kill every tree",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Watch the tree outside your window.",
          "It stands in sun and in storm.",
          "You cannot see a tree growing, but it grows.",
          "Oak trees can live for hundreds of years.",
          "Some part of you grows quietly too.",
        ],
        intruder: 3,
        why: "La longevidad de los robles es un dato de naturaleza, ajeno a la lección contemplativa: es el intruso.",
      },
    },
    {
      id: "md-en-a2-10-3", theme: "meditazione",
      title: "The 4-6 breath", titleEs: "La respiración 4-6",
      minutes: 2,
      paragraphs: [
        { it: "Here is a simple rhythm: breathe in while you count to four, then breathe out while you count to six. The long, slow out-breath is the secret — it tells your heart to slow down.", es: "Aquí hay un ritmo simple: inhala mientras cuentas hasta cuatro, luego exhala mientras cuentas hasta seis. La exhalación larga y lenta es el secreto: le dice a tu corazón que se calme." },
        { it: "Do four rounds of the 4-6 breath whenever the day gets loud. No cushion, no app, no special place needed. Counting in English is optional — your heart understands every language.", es: "Haz cuatro rondas de la respiración 4-6 cuando el día se vuelva ruidoso. Sin cojín, sin app, sin lugar especial. Contar en inglés es opcional: tu corazón entiende todos los idiomas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una clase de matemáticas", "Un patrón de respiración 4-6 para calmar el corazón", "Un entrenamiento de corredores"],
        answer: 1,
        why: "El título nombra el patrón de conteo de la respiración, típico de meditación.",
      },
      sequence: {
        instr: "Ordena la respiración 4-6:",
        events: ["Breathe in while counting to four", "Breathe out while counting to six", "Feel the slow out-breath calm your heart", "Repeat four rounds", "Return to normal breathing"],
      },
      listen: {
        intro: "Escucha la respiración 4-6:",
        audioIt: "Let's practice the four-six breath. Get comfortable. Breathe in through your nose: one, two, three, four. Now out, slow and long: one, two, three, four, five, six. Again — in for four, out for six. One more round. Notice how your shoulders drop on the long breath out. This is your portable calm.",
        questions: [
          { q: "How long is the breath in?", kind: "literal", options: ["Four counts", "Six counts", "Ten counts"], answer: 0, why: "«Breathe in… one, two, three, four»." },
          { q: "How long is the breath out?", kind: "literal", options: ["Six counts", "Four counts", "Two counts"], answer: 0, why: "«Out, slow and long: one… six»." },
          { q: "What happens to your shoulders on the long breath out?", kind: "literal", options: ["They drop", "They rise", "They hurt"], answer: 0, why: "«Your shoulders drop on the long breath out»." },
          { q: "Why is the calm 'portable'?", kind: "inferencial", options: ["Because you can take it anywhere, with no app or cushion", "Because it fits in a suitcase", "Because it only works at home"], answer: 0, why: "«No cushion, no app, no special place needed»: se infiere que va contigo." },
        ],
      },
    },
  ],

  "en-cu-a2-11": [
    {
      id: "md-en-a2-11-1", theme: "relax mentale",
      title: "The pause before you speak", titleEs: "La pausa antes de hablar",
      minutes: 2,
      paragraphs: [
        { it: "In your next conversation, try a one-second pause before you answer. Not silence for its own sake — just a small space between their words and yours. In that space, you can actually choose your answer.", es: "En tu próxima conversación, prueba una pausa de un segundo antes de responder. No silencio por gusto: solo un pequeño espacio entre sus palabras y los tuyos. En ese espacio, puedes de verdad elegir tu respuesta." },
        { it: "Fast answers are often old answers: habits, defenses, half-listened words. The pause gives you a moment to really hear the question. Better listening and better speaking start in the same tiny place.", es: "Las respuestas rápidas suelen ser respuestas viejas: hábitos, defensas, palabras medio escuchadas. La pausa te da un momento para oír de verdad la pregunta. Escuchar mejor y hablar mejor nacen en el mismo lugar diminuto." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de debate rápido", "La pausa de un segundo antes de responder", "Un curso de hablar en público"],
        answer: 1,
        why: "El título anuncia la micro pausa conversacional, práctica de relajación mental.",
      },
      quiz: [
        { q: "How long is the pause?", kind: "literal", options: ["One second", "One minute", "One hour"], answer: 0, why: "«A one-second pause»." },
        { q: "What lives in that small space?", kind: "inferencial", options: ["The chance to actually choose your answer", "Your next meal", "Nothing at all"], answer: 0, why: "«In that space, you can actually choose your answer»." },
        { q: "Why are fast answers often 'old answers'?", kind: "critica", options: ["They are habits and half-heard words, not fresh choices", "Because old people speak slowly", "Because speed means wisdom"], answer: 0, why: "«Habits, defenses, half-listened words»." },
      ],
      vf: [
        { text: "The pause is silence for its own sake.", value: false, why: "«Not silence for its own sake»: no es silencio por gusto." },
        { text: "The pause helps you really hear the question.", value: true, why: "«A moment to really hear the question»." },
        { text: "Better listening and speaking start in the same tiny place.", value: true, why: "Frase final del segundo párrafo." },
      ],
    },
    {
      id: "md-en-a2-11-2", theme: "qui e ora",
      title: "Rain on the window", titleEs: "Lluvia en la ventana",
      minutes: 2,
      paragraphs: [
        { it: "It is raining and you are inside. Instead of complaining about the weather, listen to it: the rain has a hundred small voices on the window, the roof, the street.", es: "Está lloviendo y estás adentro. En vez de quejarte del clima, escúchalo: la lluvia tiene cien voces pequeñas en la ventana, el techo, la calle." },
        { it: "Rain sounds are a free concert of the present moment. You cannot stop the rain and you do not need to. Watch one drop travel down the glass, and for a few seconds, be exactly where you are.", es: "Los sonidos de la lluvia son un concierto gratis del momento presente. No puedes detener la lluvia y no necesitas hacerlo. Mira una gota viajar por el vidrio y, por unos segundos, sé exactamente donde estás." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un pronóstico de lluvias", "Escuchar la lluvia como presencia en el aquí y ahora", "Cómo impermeabilizar ventanas"],
        answer: 1,
        why: "El título apunta a la experiencia auditiva de la lluvia, no al clima ni al mantenimiento.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Rain can become free music that anchors you in the present",
          "Rain is always bad news",
          "Windows should stay open in storms",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "The rain has a hundred small voices",
          "You cannot stop the rain and do not need to",
          "Watch one drop travel down the glass",
        ],
        distractors: [
          "Raindrops fall at one kilometer per hour",
          "Umbrellas are useless",
          "Rain only happens in April",
        ],
      },
      intruder: {
        instr: "Una de estas frases NO encaja con el texto. ¿Cuál es el intruso?",
        sentences: [
          "Listen to the rain on the window.",
          "The rain has a hundred small voices.",
          "Watch one drop travel down the glass.",
          "Seattle gets about thirty-seven inches of rain a year.",
          "For a few seconds, be exactly where you are.",
        ],
        intruder: 3,
        why: "La estadística de lluvias de Seattle es un dato climático, ajeno a la experiencia presente: es el intruso.",
      },
    },
    {
      id: "md-en-a2-11-3", theme: "relax fisico",
      title: "Legs up the wall", titleEs: "Piernas en la pared",
      minutes: 2,
      paragraphs: [
        { it: "Lie on your back near a wall and let your legs go up, resting against it. Arms open by your sides. Stay there for five minutes and simply breathe. It looks strange; it feels wonderful.", es: "Acuéstate boca arriba cerca de una pared y deja que tus piernas suban, apoyadas contra ella. Brazos abiertos a los costados. Quédate ahí cinco minutos y simplemente respira. Se ve raro; se siente maravilloso." },
        { it: "This gentle position helps tired legs and a busy head after a long day. Blood flows back toward your heart, and the body reads the message: the day is over. Read a few pages if you like — this rest is flexible.", es: "Esta postura suave ayuda a las piernas cansadas y a la cabeza ocupada tras un día largo. La sangre regresa hacia el corazón y el cuerpo lee el mensaje: el día terminó. Lee unas páginas si quieres: este descanso es flexible." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una acrobacia circense", "Poner las piernas en la pared para descansar el cuerpo", "Un ejercicio de abdominales"],
        answer: 1,
        why: "El título nombra la postura restaurativa clásica de relajación física.",
      },
      sequence: {
        instr: "Ordena la postura de piernas en la pared:",
        events: ["Lie on your back near a wall", "Let your legs rest up against the wall", "Open your arms by your sides", "Breathe and stay five minutes", "Feel the day come to an end"],
      },
      listen: {
        intro: "Escucha el descanso de piernas:",
        audioIt: "Time to rest those legs. Sit down next to a wall and lie back. Now swing your legs up, letting them rest against the wall. Let your arms fall open. Close your eyes and breathe normally. Feel the weight of the day flow down and out. Five minutes here is like a small vacation for your whole body.",
        questions: [
          { q: "What rests against the wall?", kind: "literal", options: ["Your legs", "Your head", "Your backpack"], answer: 0, why: "«Letting them rest against the wall» (las piernas)." },
          { q: "Where do your arms go?", kind: "literal", options: ["Open by your sides", "Behind your head", "On your chest"], answer: 0, why: "«Let your arms fall open»." },
          { q: "How long do you stay?", kind: "literal", options: ["Five minutes", "Five seconds", "Fifty minutes"], answer: 0, why: "«Five minutes here»." },
          { q: "What is this rest like, according to the audio?", kind: "inferencial", options: ["A small vacation for your whole body", "A long night of sleep", "A hard workout"], answer: 0, why: "«Like a small vacation for your whole body»." },
        ],
      },
    },
  ],

  "en-cu-a2-12": [
    {
      id: "md-en-a2-12-1", theme: "spiritualità",
      title: "The quiet morning hour", titleEs: "La hora silenciosa de la mañana",
      minutes: 2,
      paragraphs: [
        { it: "Some people call it the golden hour: the first minutes of the day, before the phone, before the noise. The light is soft, the house is quiet, and your mind is still clean like a new page.", es: "Algunos la llaman la hora dorada: los primeros minutos del día, antes del teléfono, antes del ruido. La luz es suave, la casa está callada y tu mente sigue limpia como una página nueva." },
        { it: "You do not need a full hour. Ten quiet minutes — tea, breath, window — change the tone of the whole day. The first moments set the melody; the day just follows the song.", es: "No necesitas una hora completa. Diez minutos de silencio — té, respiración, ventana — cambian el tono de todo el día. Los primeros momentos fijan la melodía; el día solo sigue la canción." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La hora dorada de los fotógrafos", "Los primeros minutos del día en silencio, antes del teléfono", "Una rutina de gimnasio temprano"],
        answer: 1,
        why: "La «golden hour» aquí es la del silencio matinal, no la fotográfica.",
      },
      quiz: [
        { q: "What comes before the phone in the golden hour?", kind: "literal", options: ["The first quiet minutes of the day", "Breakfast TV", "The morning news"], answer: 0, why: "«The first minutes of the day, before the phone»." },
        { q: "How many quiet minutes do you really need?", kind: "inferencial", options: ["About ten", "A full hour always", "Three hours"], answer: 0, why: "«You do not need a full hour. Ten quiet minutes»." },
        { q: "What does 'the first moments set the melody' mean?", kind: "critica", options: ["The start of the day gives its tone to the rest", "Mornings need music", "Days are literally songs"], answer: 0, why: "La metáfora: el inicio del día marca el tono del día entero." },
      ],
      vf: [
        { text: "You always need a full quiet hour.", value: false, why: "«You do not need a full hour»." },
        { text: "The mind in the morning is like a new page.", value: true, why: "«Clean like a new page»." },
        { text: "Ten minutes can change the tone of the whole day.", value: true, why: "«Change the tone of the whole day»." },
      ],
    },
    {
      id: "md-en-a2-12-2", theme: "relax mentale",
      title: "Closing the doors", titleEs: "Cerrando las puertas",
      minutes: 2,
      paragraphs: [
        { it: "At the end of the day, your mind can feel like a hallway with every door open: work, errands, plans, conversations. Tonight, imagine closing one door at a time, slowly, with a soft click.", es: "Al final del día, tu mente puede sentirse como un pasillo con todas las puertas abiertas: trabajo, pendientes, planes, conversaciones. Esta noche, imagina que cierras una puerta a la vez, despacio, con un clic suave." },
        { it: "You are not locking anything forever — just for the night. A mind with closed doors can finally rest. Sleep loves an orderly hallway; tomorrow you can open the doors you truly need.", es: "No estás cerrando nada para siempre: solo por esta noche. Una mente con puertas cerradas por fin puede descansar. El sueño ama un pasillo ordenado; mañana abrirás las puertas que de verdad necesites." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Consejos de seguridad del hogar", "Cerrar mentalmente las puertas del día para dormir mejor", "Una guía de interiorismo"],
        answer: 1,
        why: "Cerrar puertas es la metáfora de dejar los pendientes fuera del descanso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Imagining you close the day's doors one by one helps the mind rest",
          "You should never close doors at home",
          "Sleep is impossible without medicine",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: [
          "Every open door is a task or worry",
          "You close one door at a time",
          "Tomorrow you open only the doors you need",
        ],
        distractors: [
          "Hallways must be very long",
          "Doors click only in old houses",
          "You need a real key for this exercise",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Your mind can feel like a hallway with every door open.",
          "Imagine closing one door at a time.",
          "Each door closes with a soft click.",
          "Interior doors are usually eighty inches tall.",
          "A mind with closed doors can finally rest.",
        ],
        intruder: 3,
        why: "La medida de las puertas interiores es un dato de carpintería, ajeno a la visualización: es el intruso.",
      },
    },
    {
      id: "md-en-a2-12-3", theme: "relax fisico",
      title: "Scan and soften", titleEs: "Escanea y ablanda",
      minutes: 2,
      paragraphs: [
        { it: "Lie in bed and travel through your body one more time: feet, legs, belly, chest, arms, neck, face. At each stop, ask: 'can you be a little softer?' Often the answer is yes.", es: "Acuéstate en la cama y recorre tu cuerpo una vez más: pies, piernas, vientre, pecho, brazos, cuello, cara. En cada parada, pregunta: '¿puedes ser un poco más suave?'. Casi siempre la respuesta es sí." },
        { it: "This evening scan is a goodnight letter to your body. You worked all day; now everything can let go. Many people fall asleep before they reach their shoulders — the softest problem in the world.", es: "Este escaneo nocturno es una carta de buenas noches a tu cuerpo. Trabajaste todo el día; ahora todo puede soltar. Mucha gente se duerme antes de llegar a los hombros: el problema más suave del mundo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un chequeo médico nocturno", "Un escaneo corporal suave para dormir (ablandar cada parte)", "Un entrenamiento antes de dormir"],
        answer: 1,
        why: "«Scan and soften» anuncia el escaneo relajante de fin de día.",
      },
      sequence: {
        instr: "Ordena el escaneo de buenas noches:",
        events: ["Lie in bed", "Travel from your feet to your face", "Ask each part: can you be softer?", "Let everything let go", "Drift into sleep"],
      },
      listen: {
        intro: "Escucha la carta de buenas noches:",
        audioIt: "Goodnight body. Lie down and get comfortable. We will travel from your feet to your face. Feet — soften. Legs — soften. Belly — soften. Chest — soften. Arms and hands — soften. Neck — soften. Face — soften. If you are still awake, start again at your feet. Sweet dreams.",
        questions: [
          { q: "Where does the goodnight scan start?", kind: "literal", options: ["At your feet", "At your face", "At your hands"], answer: 0, why: "«We will travel from your feet to your face»." },
          { q: "What word does the audio repeat?", kind: "literal", options: ["Soften", "Hurry", "Count"], answer: 0, why: "«Feet — soften. Legs — soften»." },
          { q: "What do you do if you are still awake?", kind: "literal", options: ["Start again at your feet", "Check your phone", "Get up and work"], answer: 0, why: "«If you are still awake, start again at your feet»." },
          { q: "What is the tone of this practice?", kind: "inferencial", options: ["A goodnight letter to your body", "An emergency alarm", "A morning workout"], answer: 0, why: "«Goodnight body»: el tono es de despedida afectuosa al cuerpo." },
        ],
      },
    },
  ],
};
