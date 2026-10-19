import type { MindReading } from "../../cambridge-mind";

/* ═══ EN A1 · Mind readings (temáticas de conciencia) — 3 por unidad ══
   Metodología idéntica a las italianas (v9.13): 7 estrategias de
   comprensión lectora y de escucha. Textos en inglés americano A1,
   traducción española a la vista. Campos `.it` = inglés (lengua de
   estudio), `.es` = español. Estrategia por índice: L1 = predict +
   quiz (lit/inf/crít) + V/F con justificación; L2 = predict + ideas +
   intruso; L3 = predict + secuencia + escucha. */

export const EN_MIND_A1: Record<string, MindReading[]> = {
  "en-cu-a1-01": [
    {
      id: "md-en-a1-01-1", theme: "meditazione",
      title: "My first breath", titleEs: "Mi primera respiración",
      minutes: 2,
      paragraphs: [
        { it: "Sit down. Close your eyes. Take one slow breath. This is your first breath of the practice. You are here, and this is enough.", es: "Siéntate. Cierra los ojos. Da una respiración lenta. Esta es tu primera respiración de la práctica. Estás aquí, y esto es suficiente." },
        { it: "Meditation is simple. You breathe in, you breathe out. Your mind talks, and that is okay. You come back to the breath. Again and again, like a friend.", es: "La meditación es simple. Inhalas, exhalas. Tu mente habla, y está bien. Vuelves a la respiración. Una y otra vez, como un amigo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de yoga avanzado", "Una introducción sencilla a meditar con la respiración", "Una clase de gimnasia"],
        answer: 1,
        why: "El título «My first breath» apunta a un primer acercamiento a la respiración, no a algo avanzado.",
      },
      quiz: [
        { q: "What do you do first?", kind: "literal", options: ["You run", "You sit down and close your eyes", "You talk"], answer: 1, why: "«Sit down. Close your eyes»: está literal en la primera frase." },
        { q: "What happens with your mind?", kind: "inferencial", options: ["Your mind talks, and that is okay", "Your mind is quiet immediately", "You stop your thoughts"], answer: 0, why: "«Your mind talks, and that is okay. You come back»: se infiere que no hay que bloquear la mente." },
        { q: "What is the best title for this idea?", kind: "critica", options: ["Meditation is hard work for athletes", "Meditation is simple: breathe and come back", "Meditation is only for experts"], answer: 1, why: "La idea central del texto es la simplicidad: respirar y volver." },
      ],
      vf: [
        { text: "You take one fast breath.", value: false, why: "El texto dice «one slow breath»: lenta, no rápida." },
        { text: "It is okay if your mind talks.", value: true, why: "«Your mind talks, and that is okay»." },
        { text: "You come back to the breath many times.", value: true, why: "«Again and again»: una y otra vez." },
      ],
    },
    {
      id: "md-en-a1-01-2", theme: "qui e ora",
      title: "The coffee is warm", titleEs: "El café está caliente",
      minutes: 2,
      paragraphs: [
        { it: "You hold your coffee with two hands. The cup is warm. The smell is strong. Right now, nothing else exists: only you, the cup, and this moment.", es: "Sostienes tu café con dos manos. La taza está tibia. El aroma es fuerte. Ahora mismo, nada más existe: solo tú, la taza y este momento." },
        { it: "This is the practice of the here and now. You do not think about yesterday. You do not worry about tomorrow. The coffee is warm, and you are here.", es: "Esta es la práctica del aquí y el ahora. No piensas en el ayer. No te preocupas por el mañana. El café está caliente y estás aquí." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una receta de café", "Estar presente con una taza de café (aquí y ahora)", "Una crítica de cafeterías"],
        answer: 1,
        why: "El título apunta a la experiencia sensorial del café, no a recetas ni críticas.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "You hold the coffee with two hands.",
          "The cup is warm and the smell is strong.",
          "Right now, nothing else exists.",
          "Espresso machines cost two hundred dollars.",
          "You do not think about yesterday.",
        ],
        intruder: 3,
        why: "El precio de las máquinas no pertenece a la experiencia sensorial del momento: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Coffee is cheap in the U.S.", "The present moment is here, in your hands", "Coffee has too much caffeine"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["You hold the cup with two hands", "The smell is strong", "You do not think about yesterday"],
        distractors: ["You drink three cups every day", "The coffee is from Seattle", "You pay with a card"],
      },
    },
    {
      id: "md-en-a1-01-3", theme: "relax fisico",
      title: "Shoulders down", titleEs: "Hombros abajo",
      minutes: 2,
      paragraphs: [
        { it: "Look at your shoulders. Are they up near your ears? Let them down. Feel the difference. Your body says thank you.", es: "Mira tus hombros. ¿Están arriba, cerca de las orejas? Déjalos caer. Siente la diferencia. Tu cuerpo dice gracias." },
        { it: "We carry stress in our shoulders all day. Five times a day, check your shoulders: down, soft, relaxed. This is a small habit with a big gift.", es: "Cargamos el estrés en los hombros todo el día. Cinco veces al día, revisa tus hombros: abajo, suaves, relajados. Es un hábito pequeño con un gran regalo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ejercicio de gimnasio con pesas", "Relajar los hombros durante el día", "Una clase de natación"],
        answer: 1,
        why: "«Shoulders down» sugiere soltar tensión, no ejercicio físico intenso.",
      },
      sequence: {
        instr: "Ordena los pasos del hábito:",
        events: ["Look at your shoulders", "Notice they are up near your ears", "Let them down slowly", "Feel the difference", "Repeat five times a day"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Welcome to your body break. Sit tall. Take one breath. Now drop your shoulders down. Soft. Easy. Feel the space between your ears and your shoulders. Stay here for three breaths. This is your body saying thank you.",
        questions: [
          { q: "What do you do with your shoulders?", kind: "literal", options: ["You lift them up", "You drop them down", "You shake them"], answer: 1, why: "«Drop your shoulders down»." },
          { q: "How long do you stay there?", kind: "inferencial", options: ["Three breaths", "One hour", "All day"], answer: 0, why: "«Stay here for three breaths»: se infiere del cierre del audio." },
        ],
      },
    },
  ],

  "en-cu-a1-02": [
    {
      id: "md-en-a1-02-1", theme: "spiritualità",
      title: "The family of the world", titleEs: "La familia del mundo",
      minutes: 3,
      paragraphs: [
        { it: "Spirituality is not far away. It is in the kitchen, in a call with your mom, in the laugh of a child. When you love, you practice spirituality.", es: "La espiritualidad no está lejos. Está en la cocina, en una llamada con tu mamá, en la risa de un niño. Cuando amas, practicas espiritualidad." },
        { it: "Today, call one person you love. Listen to their voice. This is enough. In many traditions, service and love are the first practice.", es: "Hoy, llama a una persona que amas. Escucha su voz. Esto es suficiente. En muchas tradiciones, el servicio y el amor son la primera práctica." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Religiones comparadas", "Espiritualidad cotidiana en la familia y el amor", "Un anuncio de telefonía"],
        answer: 1,
        why: "El título «family of the world» apunta a vínculos humanos, no a teología ni productos.",
      },
      quiz: [
        { q: "Where is spirituality, according to the text?", kind: "literal", options: ["In the kitchen and in a call", "Only in temples", "In books"], answer: 0, why: "«It is in the kitchen, in a call with your mom»." },
        { q: "What do you do today?", kind: "inferencial", options: ["You call one person you love", "You travel to a temple", "You buy a book"], answer: 0, why: "Se infiere de «Today, call one person you love»." },
        { q: "Which idea fits the text best?", kind: "critica", options: ["Love and service are a spiritual practice", "Spirituality needs special clothes", "Family calls are a waste of time"], answer: 0, why: "La idea central: amar y servir ya es práctica espiritual." },
      ],
      vf: [
        { text: "Spirituality is only in special places.", value: false, why: "El texto dice que está en la cocina y en una llamada: en lo cotidiano." },
        { text: "Listening to a loved voice is enough.", value: true, why: "«Listen to their voice. This is enough»." },
        { text: "Many traditions put love and service first.", value: true, why: "«Service and love are the first practice»." },
      ],
    },
    {
      id: "md-en-a1-02-2", theme: "relax mentale",
      title: "A mind like the sky", titleEs: "Una mente como el cielo",
      minutes: 2,
      paragraphs: [
        { it: "Your mind is like the sky. Thoughts are clouds. Some clouds are dark; some are white and fast. The sky stays. The sky is always there, quiet and open.", es: "Tu mente es como el cielo. Los pensamientos son nubes. Algunas nubes son oscuras; otras, blancas y veloces. El cielo permanece. El cielo siempre está ahí, quieto y abierto." },
        { it: "When a bad thought arrives, do not fight it. Watch the cloud pass. Behind every cloud, the sky is still blue. This is mental relaxation: you are the sky, not the cloud.", es: "Cuando llega un mal pensamiento, no luches contra él. Observa la nube pasar. Detrás de cada nube, el cielo sigue azul. Esta es la relajación mental: tú eres el cielo, no la nube." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Pronóstico del tiempo", "Una metáfora para relajar la mente: pensamientos como nubes", "Un texto de astronomía"],
        answer: 1,
        why: "La metáfora cielo-mente es un clásico de la relajación; el título «mind like the sky» lo anticipa.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Thoughts are clouds, some dark and some white.",
          "The sky stays, quiet and open.",
          "When a bad thought arrives, you watch the cloud pass.",
          "Clouds bring rain for the farmers on Mondays.",
          "You are the sky, not the cloud.",
        ],
        intruder: 3,
        why: "El dato meteorológico agrícola es ajeno a la metáfora mental: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Thoughts are clouds; you are the sky that stays open", "Clouds predict rain for tomorrow", "You must fight your thoughts"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Thoughts are clouds", "You watch the cloud pass", "The sky is always there"],
        distractors: ["You paint the clouds white", "The sky is angry today", "Clouds are dangerous for pilots"],
      },
    },
    {
      id: "md-en-a1-02-3", theme: "meditazione",
      title: "Three breaths with grandma", titleEs: "Tres respiraciones con la abuela",
      minutes: 3,
      paragraphs: [
        { it: "My grandmother sits in her chair every morning. She drinks her tea in silence. She says three words: «Sit, breathe, smile.» That is her whole practice.", es: "Mi abuela se sienta en su sillón cada mañana. Bebe su té en silencio. Dice tres palabras: «Siéntate, respira, sonríe». Esa es toda su práctica." },
        { it: "She is eighty years old, and her mind is calm like a lake in the morning. Grandmothers know: happiness is simple, and it lives in small moments.", es: "Tiene ochenta años, y su mente está serena como un lago de mañana. Las abuelas saben: la felicidad es simple y vive en momentos pequeños." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una biografía completa", "La práctica simple de una abuela: sentarse, respirar, sonreír", "Una receta de té"],
        answer: 1,
        why: "El título une tres respiraciones con la figura de la abuela: apunta a una práctica cotidiana." ,
      },
      sequence: {
        instr: "Ordena la práctica de la abuela según el texto:",
        events: ["She sits in her chair", "She drinks her tea in silence", "She says three words", "She smiles", "Her mind is calm like a lake"],
      },
      listen: {
        intro: "Escucha y responde:",
        audioIt: "Good morning. This is your three-breath practice. Sit like my grandma in her old chair. Breathe in slowly. Breathe out slowly. Now smile, just a little. Feel your face relax. Three breaths, one smile. Your day starts soft.",
        questions: [
          { q: "Who sits like this, in the story?", kind: "literal", options: ["A grandma in her chair", "A teacher at school", "A baby in a car"], answer: 0, why: "«Sit like my grandma in her old chair»." },
          { q: "What comes after the three breaths?", kind: "inferencial", options: ["You open your phone", "You smile a little", "You run to work"], answer: 1, why: "«Now smile, just a little»: se infiere el orden final." },
          { q: "How does your day start?", kind: "literal", options: ["Soft", "Angry", "Late"], answer: 0, why: "«Your day starts soft»." },
        ],
      },
    },
  ],

  "en-cu-a1-03": [
    {
      id: "md-en-a1-03-1", theme: "qui e ora",
      title: "One morning, one moment", titleEs: "Una mañana, un momento",
      minutes: 3,
      paragraphs: [
        { it: "This morning, you wake up. The window is open. You hear one bird. For two seconds, there is no yesterday and no tomorrow. There is only this sound.", es: "Esta mañana despiertas. La ventana está abierta. Escuchas un pájaro. Por dos segundos, no hay ayer ni mañana. Solo existe este sonido." },
        { it: "The here and now is a room. You enter it many times a day: with your coffee, with your breath, with the first word of a friend. Presence is free, and it is always open.", es: "El aquí y el ahora es una habitación. Entras en ella muchas veces al día: con tu café, con tu respiración, con la primera palabra de un amigo. La presencia es gratis y siempre está abierta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Rutinas matinales de famosos", "El presente como espacio al que se entra a diario", "Un texto sobre relojes"],
        answer: 1,
        why: "El título «one morning, one moment» apunta al instante presente, no a biografías ni objetos.",
      },
      quiz: [
        { q: "What do you hear?", kind: "literal", options: ["One bird", "Traffic", "The radio"], answer: 0, why: "«You hear one bird»." },
        { q: "How long does the moment without yesterday or tomorrow last?", kind: "inferencial", options: ["Two seconds", "Two hours", "All morning"], answer: 0, why: "«For two seconds»: se infiere que es breve." },
        { q: "What does «presence is free» mean here?", kind: "critica", options: ["Being present costs no money and is always available", "Presence is a paid app", "Only rich people can be present"], answer: 0, why: "«Free» = sin costo; «always open» = disponible siempre." },
      ],
      vf: [
        { text: "The here and now is a room you enter many times a day.", value: true, why: "Metáfora literal del segundo párrafo." },
        { text: "You enter presence only with coffee.", value: false, why: "El café es un ejemplo; también con la respiración o la palabra de un amigo." },
        { text: "For two seconds, there is no yesterday and no tomorrow.", value: true, why: "Está literal en el primer párrafo." },
      ],
    },
    {
      id: "md-en-a1-03-2", theme: "relax fisico",
      title: "Walk like a cat", titleEs: "Camina como un gato",
      minutes: 2,
      paragraphs: [
        { it: "Cats walk slowly. They put one paw in front of the other. They are not in a hurry. Watch a cat for five minutes and you learn a master class in calm.", es: "Los gatos caminan despacio. Ponen una pata delante de la otra. No tienen prisa. Observa un gato cinco minutos y aprendes una clase magistral de calma." },
        { it: "Today, walk like a cat for one minute. Slow steps. Soft knees. Quiet breath. Your body relaxes, and your mind follows the body.", es: "Hoy camina como un gato durante un minuto. Pasos lentos. Rodillas suaves. Respiración silenciosa. Tu cuerpo se relaja, y tu mente sigue al cuerpo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo adoptar una mascota", "Caminar despacio como práctica de calma corporal", "Un documental de felinos"],
        answer: 1,
        why: "El título «walk like a cat» es una invitación a imitar la calma, no a hablar de mascotas.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: [
          "Cats teach calm: slow steps, no hurry",
          "Cats sleep sixteen hours a day",
          "You must adopt a cat today",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen:",
        secondary: [
          "One paw in front of the other",
          "They are not in a hurry",
          "Your mind follows your body",
        ],
        distractors: [
          "Cats hunt at night",
          "Slow walking burns more calories",
          "Cats hate water",
        ],
      },
      intruder: {
        instr: "Una de estas frases NO encaja con el texto. ¿Cuál es el intruso?",
        sentences: [
          "Cats walk slowly, one paw in front of the other.",
          "They are not in a hurry.",
          "Slow steps relax your body and your mind follows.",
          "Cats sleep twenty hours a day and hunt at night.",
          "Soft knees and quiet breath are the practice.",
        ],
        intruder: 3,
        why: "El dato biológico de dormir/cazar es cierto para gatos, pero no pertenece a la práctica de calma del texto: es el intruso.",
      },
    },
    {
      id: "md-en-a1-03-3", theme: "relax mentale",
      title: "The phone is quiet now", titleEs: "El teléfono está en silencio ahora",
      minutes: 3,
      paragraphs: [
        { it: "Turn your phone face down. Look around the room. What do you see? A chair. A plant. Light on the wall. Without the noise, the world speaks softly.", es: "Pon el teléfono boca abajo. Mira alrededor de la habitación. ¿Qué ves? Una silla. Una planta. Luz en la pared. Sin ruido, el mundo habla suave." },
        { it: "Ten minutes without screens is a gift for your mind. Your thoughts slow down. Your breath finds its natural rhythm. Silence is not empty; it is full of peace.", es: "Diez minutos sin pantallas es un regalo para tu mente. Tus pensamientos se ralentizan. Tu respiración encuentra su ritmo natural. El silencio no está vacío; está lleno de paz." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una reseña de teléfonos", "Un descanso mental sin pantallas", "Un tutorial de fotografía"],
        answer: 1,
        why: "«The phone is quiet now» apunta a desenchufarse, no a comparar dispositivos.",
      },
      sequence: {
        instr: "Ordena los pasos del descanso digital:",
        events: ["Turn your phone face down", "Look around the room", "Notice the chair, the plant, the light", "Breathe in your natural rhythm", "Enjoy ten minutes without screens"],
      },
      listen: {
        intro: "Escucha el mini-audio de desenchufe:",
        audioIt: "This is your ten-minute break. Put your phone face down. Take one breath and look around. Find three things: one chair, one plant, one light. Say their names in your mind. Now close your eyes for three slow breaths. Silence is full of peace.",
        questions: [
          { q: "What do you find in the room?", kind: "literal", options: ["A chair, a plant and a light", "A TV and a console", "Three phones"], answer: 0, why: "«One chair, one plant, one light»." },
          { q: "What do you do after finding them?", kind: "inferencial", options: ["You close your eyes for three breaths", "You check your messages", "You call a friend"], answer: 0, why: "Se infiere: «Now close your eyes for three slow breaths»." },
        ],
      },
    },
  ],

  "en-cu-a1-04": [
    {
      id: "md-en-a1-04-1", theme: "meditazione",
      title: "Coffee shop meditation", titleEs: "Meditación en la cafetería",
      minutes: 3,
      paragraphs: [
        { it: "You wait for your coffee. One minute. Instead of your phone, watch the barista. Her hands move like a slow dance. The machine sings.", es: "Esperas tu café. Un minuto. En lugar del teléfono, observa a la barista. Sus manos se mueven como una danza lenta. La máquina canta." },
        { it: "Waiting time is meditation time. Every line, every red light, every delay is a door to presence. You do not need a quiet room; you need one awake breath.", es: "El tiempo de espera es tiempo de meditación. Cada fila, cada luz roja, cada retraso es una puerta a la presencia. No necesitas una sala silenciosa; necesitas una respiración despierta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una queja por las filas", "Convertir la espera del café en meditación", "Un menú de bebidas"],
        answer: 1,
        why: "El título une cafetería y meditación: la espera como práctica.",
      },
      quiz: [
        { q: "What do you watch instead of your phone?", kind: "literal", options: ["The barista", "The door", "Your shoes"], answer: 0, why: "«Watch the barista»." },
        { q: "What is «a door to presence»?", kind: "inferencial", options: ["Every wait and delay", "Only quiet rooms", "A special app"], answer: 0, why: "Se infiere: cada fila o luz roja es oportunidad." },
        { q: "What do you really need for meditation?", kind: "critica", options: ["One awake breath, anywhere", "A temple and one hour", "Complete silence"], answer: 0, why: "«You need one awake breath», dice el texto: no condiciones ideales." },
      ],
      vf: [
        { text: "The machine sings in the text.", value: true, why: "Personificación literal: «The machine sings»." },
        { text: "You need a quiet room to meditate.", value: false, why: "El texto niega esto: basta una respiración despierta." },
        { text: "Every red light can be a door to presence.", value: true, why: "«Every red light… is a door to presence»." },
      ],
    },
    {
      id: "md-en-a1-04-2", theme: "spiritualità",
      title: "Gratitude with cream", titleEs: "Gratitud con crema",
      minutes: 2,
      paragraphs: [
        { it: "Before your first sip, say thank you. Thank you to the farmer. Thank you to the rain. Thank you to the hands that carry the coffee to your cup.", es: "Antes del primer sorbo, da las gracias. Gracias al agricultor. Gracias a la lluvia. Gracias a las manos que llevan el café a tu taza." },
        { it: "Gratitude is a spiritual practice of one second. It connects you to thousands of people you never meet. Your coffee is a small miracle of cooperation.", es: "La gratitud es una práctica espiritual de un segundo. Te conecta con miles de personas que nunca conocerás. Tu café es un pequeño milagro de cooperación." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo preparar café con crema", "Gratitud por el café y la cadena humana detrás", "Los precios del café"],
        answer: 1,
        why: "«Gratitude with cream» mezcla el gesto cotidiano con el agradecimiento.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Before your first sip, you say thank you.",
          "Thank you to the farmer and to the rain.",
          "Gratitude takes one second.",
          "Thank you to the hands that carry the coffee.",
          "Cappuccino is illegal after eleven in Italy.",
        ],
        intruder: 4,
        why: "La «norma del capuchino» es una curiosidad cultural, no parte de la práctica de gratitud: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Coffee is expensive in big cities", "Gratitude connects you to the whole chain of hands behind your cup", "Cream is better than milk"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen:",
        secondary: ["You thank the farmer and the rain", "Gratitude takes one second", "Your cup is a small miracle of cooperation"],
        distractors: ["You tip the barista twenty percent", "Coffee comes from Seattle only", "You must pray before drinking"],
      },
    },
    {
      id: "md-en-a1-04-3", theme: "relax fisico",
      title: "Hands on the warm cup", titleEs: "Manos en la taza tibia",
      minutes: 2,
      paragraphs: [
        { it: "Put both hands around the cup. Feel the warmth. Close your eyes for three breaths. The warmth travels from your palms to your chest.", es: "Rodea la taza con ambas manos. Siente el calor. Cierra los ojos tres respiraciones. El calor viaja de tus palmas a tu pecho." },
        { it: "Warm hands, warm heart. This is the practice. Your nervous system calms down with warmth and with slow touch. You carry a little spa in every coffee cup.", es: "Manos cálidas, corazón cálido. Esta es la práctica. Tu sistema nervioso se calma con el calor y el toque lento. Llevas un pequeño spa en cada taza de café." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Ejercicio con pesas", "Relajación física con el calor de la taza", "Cómo elegir una taza"],
        answer: 1,
        why: "El título describe un gesto: manos alrededor de la taza, apunta a relajación.",
      },
      sequence: {
        instr: "Ordena la práctica de la taza:",
        events: ["Put both hands around the cup", "Feel the warmth", "Close your eyes for three breaths", "Notice the warmth travel to your chest", "Enjoy the calm"],
      },
      listen: {
        intro: "Escucha la práctica guiada:",
        audioIt: "Take your cup. Put both hands around it. Feel the warm surface. Now breathe in slowly. Breathe out slowly. Imagine the warmth moving from your palms to your chest, and from your chest to your whole body. Warm hands, warm heart. Stay here for two more breaths.",
        questions: [
          { q: "Where does the warmth travel?", kind: "literal", options: ["From your palms to your chest", "From your feet to your head", "From the cup to the table"], answer: 0, why: "«From your palms to your chest»." },
          { q: "What is the final image?", kind: "inferencial", options: ["A cold morning", "Warm hands, warm heart", "A broken cup"], answer: 1, why: "La frase clave aparece al final del audio." },
        ],
      },
    },
  ],

  "en-cu-a1-05": [
    {
      id: "md-en-a1-05-1", theme: "relax mentale",
      title: "The pause before the menu", titleEs: "La pausa antes del menú",
      minutes: 3,
      paragraphs: [
        { it: "Restaurants are noisy. Menus are long. Before you order, take one silent pause. One breath in, one breath out. The noise continues, but inside you there is a quiet room.", es: "Los restaurantes son ruidosos. Los menús son largos. Antes de pedir, haz una pausa silenciosa. Una inhalación, una exhalación. El ruido sigue, pero dentro de ti hay una habitación silenciosa." },
        { it: "This is the practice of the island: you do not stop the waves, you become the island. The waves are the noise; the island is your calm attention.", es: "Esta es la práctica de la isla: no detienes las olas, te conviertes en la isla. Las olas son el ruido; la isla es tu atención calmada." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo pedir en un restaurante", "Encontrar calma mental en el ruido del restaurante", "Una crítica de menús"],
        answer: 1,
        why: "El título marca una pausa interior antes de la acción externa.",
      },
      quiz: [
        { q: "What do you do before you order?", kind: "literal", options: ["One silent pause, one breath", "You call the manager", "You read the menu twice"], answer: 0, why: "«Take one silent pause. One breath in, one breath out»." },
        { q: "What are the waves in the metaphor?", kind: "inferencial", options: ["The noise of the restaurant", "The sea food", "The waiters"], answer: 0, why: "«The waves are the noise»: se infiere de la metáfora." },
        { q: "What does «become the island» teach?", kind: "critica", options: ["You do not need to stop the noise to stay calm", "You must leave noisy places", "Islands are quiet because of the sea"], answer: 0, why: "La lección: la calma no depende de silenciar afuera, sino de estabilizarse adentro." },
      ],
      vf: [
        { text: "Inside you there is a quiet room.", value: true, why: "Metáfora literal del primer párrafo." },
        { text: "You stop the waves of noise.", value: false, why: "«You do not stop the waves, you become the island»." },
        { text: "The pause is one breath long.", value: true, why: "«One breath in, one breath out»." },
      ],
    },
    {
      id: "md-en-a1-05-2", theme: "qui e ora",
      title: "The first bite", titleEs: "El primer bocado",
      minutes: 2,
      paragraphs: [
        { it: "Your food arrives. Stop. Look at the plate: colors, steam, the little story of the kitchen. Then take the first bite with full attention.", es: "Tu comida llega. Detente. Mira el plato: colores, vapor, la pequeña historia de la cocina. Luego da el primer bocado con toda la atención." },
        { it: "The here and now has a taste. For thirty seconds, there is no phone, no hurry, no next task. Only warm bread and you. This is a feast in miniature.", es: "El aquí y el ahora tiene un sabor. Por treinta segundos, no hay teléfono, ni prisa, ni tarea siguiente. Solo pan tibio y tú. Es un banquete en miniatura." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Recetas de pan", "Comer el primer bocado con presencia", "Etiqueta en la mesa"],
        answer: 1,
        why: "El título foca el primer bocado como ritual de atención.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Your food arrives and you stop.",
          "You look at the colors and the steam.",
          "For thirty seconds there is no phone and no hurry.",
          "The here and now has a taste.",
          "The waiter sings opera every Friday night.",
        ],
        intruder: 4,
        why: "La ópera del camarero es color local, no la práctica del primer bocado: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["The first bite, with attention, is a small feast of presence", "Fast food is cheaper", "You must photograph your plate"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen:",
        secondary: ["You look at the colors and the steam", "There is no phone for thirty seconds", "The here and now has a taste"],
        distractors: ["You ask for the check immediately", "The kitchen is closed", "Warm bread is bad for you"],
      },
    },
    {
      id: "md-en-a1-05-3", theme: "spiritualità",
      title: "Bless the hands that cook", titleEs: "Bendice las manos que cocinan",
      minutes: 3,
      paragraphs: [
        { it: "Behind your plate there are hands: the cook with tired eyes, the farmer under the sun, the driver on the highway at dawn. A meal is a chain of invisible work.", es: "Detrás de tu plato hay manos: el cocinero de ojos cansados, el agricultor bajo el sol, el camionero en la carretera al alba. Una comida es una cadena de trabajo invisible." },
        { it: "In many traditions, people bless the food before eating. You do not need a religion for this: two seconds of respect are a spiritual act. «Thank you, hands» is a complete prayer.", es: "En muchas tradiciones, la gente bendice la comida antes de comer. No necesitas una religión para esto: dos segundos de respeto son un acto espiritual. «Gracias, manos» es una oración completa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Oraciones de una religión específica", "Agradecer a las manos invisibles detrás de la comida", "Consejos de nutrición"],
        answer: 1,
        why: "El título apunta a las personas, no a doctrinas ni dietas.",
      },
      sequence: {
        instr: "Ordena la cadena detrás del plato:",
        events: ["The farmer works under the sun", "The driver travels at dawn", "The cook prepares the plate", "The server brings the food", "You bless the hands before eating"],
      },
      listen: {
        intro: "Escucha la bendición laica:",
        audioIt: "Your food is here. Before the first bite, take two seconds. Think of the farmer under the sun. Think of the driver on the road at dawn. Think of the cook with tired eyes. Say thank you, hands. Now eat slowly. This is a complete prayer, and it takes two seconds.",
        questions: [
          { q: "Who works under the sun?", kind: "literal", options: ["The farmer", "The server", "The cashier"], answer: 0, why: "«Think of the farmer under the sun»." },
          { q: "How long does the complete prayer take?", kind: "inferencial", options: ["Two seconds", "Two hours", "The whole meal"], answer: 0, why: "«It takes two seconds»: se infiere del cierre." },
          { q: "What do you say?", kind: "literal", options: ["Thank you, hands", "Sorry, hands", "Goodbye, hands"], answer: 0, why: "«Say thank you, hands»." },
        ],
      },
    },
  ],

  "en-cu-a1-06": [
    {
      id: "md-en-a1-06-1", theme: "meditazione",
      title: "Breathing room in the fitting room", titleEs: "Respiración en el probador",
      minutes: 3,
      paragraphs: [
        { it: "The fitting room is a small box of mirrors and light. Perfect for a mini-retreat! Sit down. One breath. Look at your face in the mirror: hello, friend.", es: "El probador es una pequeña caja de espejos y luz. ¡Perfecto para un mini-retiro! Siéntate. Una respiración. Mira tu cara en el espejo: hola, amigo." },
        { it: "Meditation does not need a temple. It needs one conscious moment. Even between a blue shirt and a gray jacket, you can find the quiet center.", es: "La meditación no necesita un templo. Necesita un momento consciente. Incluso entre una camisa azul y una chaqueta gris, puedes encontrar el centro quieto." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Consejos de moda", "Un mini-momento de meditación en el probador", "Cómo elegir tallas"],
        answer: 1,
        why: "«Breathing room» juega con espacio para respirar: atención, no ropa.",
      },
      quiz: [
        { q: "What is the fitting room, in the text?", kind: "literal", options: ["A small box of mirrors and light", "A temple in India", "A big store"], answer: 0, why: "Está literal en la primera frase." },
        { q: "What do you say to your face in the mirror?", kind: "literal", options: ["Hello, friend", "I hate this", "Where is the exit?"], answer: 0, why: "«Hello, friend»." },
        { q: "What does meditation really need?", kind: "critica", options: ["One conscious moment, anywhere", "A special cushion", "One free hour"], answer: 0, why: "«It needs one conscious moment», no condiciones externas." },
      ],
      vf: [
        { text: "You can meditate between two shirts.", value: true, why: "«Even between a blue shirt and a gray jacket…»." },
        { text: "Meditation needs a temple.", value: false, why: "El texto lo niega explícitamente." },
        { text: "The fitting room has mirrors and light.", value: true, why: "Primera frase literal." },
      ],
    },
    {
      id: "md-en-a1-06-2", theme: "relax fisico",
      title: "Soft knees at the mall", titleEs: "Rodillas suaves en el mall",
      minutes: 2,
      paragraphs: [
        { it: "Walking for hours at the mall, we lock our knees and hold our breath. Unlock the knees. Let the arms swing. Walk like water, not like wood.", es: "Al caminar horas en el mall, bloqueamos las rodillas y contenemos la respiración. Desbloquea las rodillas. Deja balancear los brazos. Camina como agua, no como madera." },
        { it: "Every thirty minutes, a body check: jaws, shoulders, knees. Three soft spots, three deep breaths. Shopping day, calm body.", es: "Cada treinta minutos, un chequeo corporal: mandíbula, hombros, rodillas. Tres puntos suaves, tres respiraciones profundas. Día de compras, cuerpo calmado." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Rutina de gimnasio", "Relajación física mientras caminas de compras", "Los mejores malls"],
        answer: 1,
        why: "El título junta un gesto corporal (rodillas) con el contexto del mall.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: [
          "A body check every thirty minutes keeps shopping calm",
          "Malls are the best place for cardio",
          "Wood is better than water",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen:",
        secondary: [
          "Unlock the knees and let the arms swing",
          "Walk like water, not like wood",
          "Three soft spots, three deep breaths",
        ],
        distractors: [
          "Escalators are dangerous",
          "Malls close at nine",
          "Shopping bags build muscle",
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Unlock your knees while you walk.",
          "Let the arms swing like water.",
          "Every thirty minutes, check jaws, shoulders and knees.",
          "Malls close at nine on Sundays.",
          "Three soft spots, three deep breaths.",
        ],
        intruder: 3,
        why: "El horario del mall es irrelevante para la práctica corporal: es el intruso.",
      },
    },
    {
      id: "md-en-a1-06-3", theme: "qui e ora",
      title: "Blue or gray?", titleEs: "¿Azul o gris?",
      minutes: 2,
      paragraphs: [
        { it: "Two jackets. One hour. «Which one?» You ask your mind, your mother, the mirror. The mind runs to the past and to the future. Come back to the present question.", es: "Dos chaquetas. Una hora. «¿Cuál?» Preguntas a tu mente, a tu madre, al espejo. La mente corre al pasado y al futuro. Vuelve a la pregunta presente." },
        { it: "Here and now, try both. Feel the fabric. Look at the color in natural light. Then decide — or decide tomorrow. A calm decision is better than a fast one.", es: "Aquí y ahora, pruébate ambas. Siente la tela. Mira el color con luz natural. Luego decide — o decide mañana. Una decisión calmada es mejor que una rápida." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Guía de colores de moda", "Decidir con calma en el presente", "Psicología del consumismo"],
        answer: 1,
        why: "El título plantea una elección; el texto la convierte en práctica de presencia.",
      },
      sequence: {
        instr: "Ordena la decisión calmada:",
        events: ["You notice your mind running to past and future", "You come back to the present question", "You try both jackets", "You feel the fabric in natural light", "You decide calmly (or tomorrow)"],
      },
      listen: {
        intro: "Escucha el método:",
        audioIt: "Two options, one decision. First, notice your breath. Second, try both. Feel the fabric on your shoulders. Third, step to the window: natural light tells the truth about color. Fourth, sleep on it if you are not sure. A calm decision today is better than a fast regret tomorrow.",
        questions: [
          { q: "What tells the truth about color?", kind: "literal", options: ["Natural light", "The store lights", "The mirror"], answer: 0, why: "«Natural light tells the truth»." },
          { q: "What is better than a fast decision?", kind: "inferencial", options: ["A calm decision", "No decision", "Asking ten friends"], answer: 0, why: "Se infiere: «A calm decision today is better than a fast regret tomorrow»." },
        ],
      },
    },
  ],

  "en-cu-a1-07": [
    {
      id: "md-en-a1-07-1", theme: "relax mentale",
      title: "The map is not the street", titleEs: "El mapa no es la calle",
      minutes: 3,
      paragraphs: [
        { it: "You look at the map, then at the street, then at the map. Anxiety grows. Stop. The map is an idea; the street is real. Put the phone in your pocket and walk one block with your senses open.", es: "Miras el mapa, luego la calle, luego el mapa. La ansiedad crece. Detente. El mapa es una idea; la calle es real. Guarda el teléfono en el bolsillo y camina una cuadra con los sentidos abiertos." },
        { it: "The mind loves plans and hates uncertainty. But life happens on the street, not on the map. Mental relaxation is trusting the walk more than the plan.", es: "La mente ama los planes y odia la incertidumbre. Pero la vida ocurre en la calle, no en el mapa. La relajación mental es confiar más en el caminar que en el plan." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Tutorial de mapas", "Soltar la ansiedad del plan y confiar en el paseo", "Historia de los GPS"],
        answer: 1,
        why: "«The map is not the street» es una adaptación de la famosa máxima «el mapa no es el territorio».",
      },
      quiz: [
        { q: "What is real, the map or the street?", kind: "literal", options: ["The street", "The map", "Both equally"], answer: 0, why: "«The map is an idea; the street is real»." },
        { q: "What does the mind hate?", kind: "literal", options: ["Uncertainty", "Sandwiches", "Weekends"], answer: 0, why: "«The mind… hates uncertainty»." },
        { q: "What is mental relaxation here?", kind: "critica", options: ["Trusting the walk more than the plan", "Buying a better map", "Never planning again"], answer: 0, why: "El texto pide confianza en la experiencia, no abandonar todo plan." },
      ],
      vf: [
        { text: "Anxiety grows when you check the map again and again.", value: true, why: "«You look at the map… Anxiety grows»." },
        { text: "You must throw your phone away.", value: false, why: "El texto pide guardarlo en el bolsillo por una cuadra, no desecharlo." },
        { text: "Life happens on the street, not on the map.", value: true, why: "Literal en el segundo párrafo." },
      ],
    },
    {
      id: "md-en-a1-07-2", theme: "spiritualità",
      title: "Strangers are friends", titleEs: "Los desconocidos son amigos",
      minutes: 3,
      paragraphs: [
        { it: "You ask a stranger for directions. He stops. He thinks. He draws a little map with his hands. In that minute, two lives touch softly.", es: "Pides una dirección a un desconocido. Se detiene. Piensa. Dibuja un pequeño mapa con las manos. En ese minuto, dos vidas se tocan suavemente." },
        { it: "Every city is a web of small kindness. The spiritual path of the street is simple: receive help with gratitude, give help with patience. «Thank you» is a bridge between strangers.", es: "Cada ciudad es una red de pequeñas amabilidades. El camino espiritual de la calle es simple: recibe ayuda con gratitud, da ayuda con paciencia. «Thank you» es un puente entre desconocidos." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Miedos urbanos", "La amabilidad como camino espiritual en la ciudad", "Cómo dibujar mapas"],
        answer: 1,
        why: "El título invierte el miedo al desconocido en conexión.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "You ask a stranger for directions.",
          "He stops, thinks and draws a little map.",
          "In that minute, two lives touch softly.",
          "Every city is a web of small kindness.",
          "Subway maps were designed in 1972.",
        ],
        intruder: 4,
        why: "La fecha del diseño de mapas es un dato histórico, no la amabilidad de la calle: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Small acts of kindness connect strangers in the city", "Cities are dangerous at night", "Never talk to strangers"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen:",
        secondary: ["The stranger stops and thinks", "Two lives touch softly for a minute", "«Thank you» is a bridge"],
        distractors: ["The stranger asks for money", "Cities have no kindness", "You must run away"],
      },
    },
    {
      id: "md-en-a1-07-3", theme: "meditazione",
      title: "Walking meditation, two blocks", titleEs: "Meditación caminando, dos cuadras",
      minutes: 3,
      paragraphs: [
        { it: "Meditation is not only sitting. Walking can be meditation: slow steps, attention in the feet, eyes soft. Two blocks are enough for a session.", es: "La meditación no es solo sentarse. Caminar puede ser meditación: pasos lentos, atención en los pies, mirada suave. Dos cuadras bastan para una sesión." },
        { it: "Feel the heel, then the sole, then the toes. The city gives you sounds and smells for free. You walk without arriving anywhere: the walk is the destination.", es: "Siente el talón, luego la planta, luego los dedos. La ciudad te regala sonidos y olores. Caminas sin llegar a ninguna parte: el caminar es el destino." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Ejercicio cardio", "Meditación caminando por dos cuadras", "Turismo a pie"],
        answer: 1,
        why: "El título define dosis (dos cuadras) y práctica (meditación).",
      },
      sequence: {
        instr: "Ordena la pisada consciente:",
        events: ["You slow down", "You feel the heel touch the ground", "You feel the sole and the toes", "You notice the sounds of the city", "You walk with no destination"],
      },
      listen: {
        intro: "Escucha la guía de caminata:",
        audioIt: "Now we walk. Slower than normal. First, feel your heel touch the ground. Then the sole. Then your toes push off. The city sounds come and go like clouds. You do not walk to arrive. You walk to walk. Two blocks of pure attention. This is your session.",
        questions: [
          { q: "What touches the ground first?", kind: "literal", options: ["The heel", "The toes", "The knee"], answer: 0, why: "«First, feel your heel»." },
          { q: "Why do you walk?", kind: "inferencial", options: ["To arrive faster", "To walk with attention", "To buy something"], answer: 1, why: "«You do not walk to arrive. You walk to walk»." },
          { q: "How are the city sounds?", kind: "literal", options: ["Like clouds, coming and going", "Like an alarm", "Silent"], answer: 0, why: "«The city sounds come and go like clouds»." },
        ],
      },
    },
  ],

  "en-cu-a1-08": [
    {
      id: "md-en-a1-08-1", theme: "relax fisico",
      title: "Seat 12A, body check", titleEs: "Asiento 12A, chequeo corporal",
      minutes: 3,
      paragraphs: [
        { it: "You sit for four hours on a train or a plane. Your body becomes a question mark. Answer it: feet on the floor, back long, shoulders down, jaw soft.", es: "Te sientas cuatro horas en un tren o avión. Tu cuerpo se convierte en un signo de interrogación. Respóndele: pies en el suelo, espalda larga, hombros abajo, mandíbula suave." },
        { it: "Every hour of travel, one minute of movement: ankles, neck, hands. Arrive fresh: your vacation starts on the vehicle, not at the hotel.", es: "Cada hora de viaje, un minuto de movimiento: tobillos, cuello, manos. Llega fresco: tus vacaciones empiezan en el vehículo, no en el hotel." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Reseña de asientos", "Cuidado corporal durante viajes largos sentado", "Cómo conseguir ventanilla"],
        answer: 1,
        why: "«Seat 12A» + «body check»: ergonomía de viaje, no reseñas.",
      },
      quiz: [
        { q: "What does your back do?", kind: "literal", options: ["It stays long", "It curves like a comma", "It disappears"], answer: 0, why: "«Back long»." },
        { q: "When does your vacation start?", kind: "inferencial", options: ["On the vehicle", "At the hotel", "Next week"], answer: 0, why: "«Your vacation starts on the vehicle»: se infiere del cierre." },
        { q: "Why move every hour?", kind: "critica", options: ["Because long sitting hurts and movement resets the body", "Because the captain says so", "To bother other passengers"], answer: 0, why: "La razón es fisiológica: el cuerpo responde al movimiento." },
      ],
      vf: [
        { text: "Your body becomes a question mark when you sit for hours.", value: true, why: "Metáfora literal del primer párrafo." },
        { text: "You move one minute every hour.", value: true, why: "«Every hour of travel, one minute of movement»." },
        { text: "Your vacation starts at the hotel.", value: false, why: "El texto dice que empieza en el vehículo." },
      ],
    },
    {
      id: "md-en-a1-08-2", theme: "qui e ora",
      title: "The window seat", titleEs: "El asiento de ventanilla",
      minutes: 2,
      paragraphs: [
        { it: "The window is a movie that nobody programs: fields, rivers, little towns with water towers. For ten minutes, watch it without your phone.", es: "La ventanilla es una película que nadie programa: campos, ríos, pueblos con tanques de agua. Por diez minutos, mírala sin teléfono." },
        { it: "Traveling in the present is a gift: no work, no chores, no hurry. The train goes, and you simply are. Some people pay for retreats to learn this. You have it for the price of a ticket.", es: "Viajar en el presente es un regalo: sin trabajo, sin tareas, sin prisa. El tren avanza y tú simplemente eres. Algunos pagan retiros para aprender esto. Tú lo tienes por el precio de un billete." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los mejores asientos", "Contemplar por la ventanilla como retiro accidental", "Quejas del transporte"],
        answer: 1,
        why: "«The window seat» como pantalla gratuita: atención, no logística.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The window is a movie that nobody programs.",
          "Fields, rivers and little towns pass by.",
          "For ten minutes you watch it without your phone.",
          "Some people pay for retreats to learn this.",
          "Amtrak serves pizza on the quiet car.",
        ],
        intruder: 4,
        why: "La pizza del vagón es anecdota de viaje, no la práctica contemplativa: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["The window is a free movie that brings you to the present", "Window seats cost more", "Trains are always late"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen:",
        secondary: ["You watch fields, rivers and towns", "No phone for ten minutes", "People pay for retreats to learn this"],
        distractors: ["You work on your laptop the whole trip", "The train sells popcorn", "Water towers are dangerous"],
      },
    },
    {
      id: "md-en-a1-08-3", theme: "meditazione",
      title: "Arriving early is a temple", titleEs: "Llegar temprano es un templo",
      minutes: 3,
      paragraphs: [
        { it: "Arrive twenty minutes early. Find a quiet corner. Sit. People run around you with bags and stress. You are the still point of the station.", es: "Llega veinte minutos antes. Encuentra un rincón quieto. Siéntate. La gente corre a tu alrededor con bolsas y estrés. Tú eres el punto quieto de la estación." },
        { it: "Stations and airports are the temples of the modern world: everyone passes, everyone wants to arrive. Practice the opposite: arrive first inside, then outside.", es: "Estaciones y aeropuertos son los templos del mundo moderno: todos pasan, todos quieren llegar. Practica lo contrario: llega primero adentro, luego afuera." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Trucos para no perder el tren", "Convertir la espera de la estación en práctica de calma", "Historia de las estaciones"],
        answer: 1,
        why: "«Temple» convierte la llegada temprana en práctica interior.",
      },
      sequence: {
        instr: "Ordena la práctica de la estación:",
        events: ["You arrive twenty minutes early", "You find a quiet corner", "You sit and breathe", "People run around you", "You arrive first inside, then outside"],
      },
      listen: {
        intro: "Escucha el ritual de llegada:",
        audioIt: "Today, arrive early. Twenty minutes before everyone else. Find a corner with a wall behind you. Sit. Let the river of people flow in front of you. You do not move; you watch. One breath in. One breath out. You arrive first inside. Then the train arrives outside.",
        questions: [
          { q: "How early do you arrive?", kind: "literal", options: ["Twenty minutes", "Two minutes", "One hour"], answer: 0, why: "«Twenty minutes before everyone else»." },
          { q: "What flows in front of you?", kind: "inferencial", options: ["A river of people", "A real river", "The train"], answer: 0, why: "«Let the river of people flow»: metáfora." },
          { q: "What arrives last?", kind: "literal", options: ["The train outside", "Your breakfast", "Your luggage"], answer: 0, why: "«Then the train arrives outside»." },
        ],
      },
    },
  ],

  "en-cu-a1-09": [
    {
      id: "md-en-a1-09-1", theme: "spiritualità",
      title: "Play is a prayer", titleEs: "Jugar es una oración",
      minutes: 3,
      paragraphs: [
        { it: "Children do not watch a clock when they play. An hour disappears. This disappearance is the old feeling of the sacred: full attention, zero ego, pure joy.", es: "Los niños no miran el reloj cuando juegan. Una hora desaparece. Esa desaparición es el viejo sentimiento de lo sagrado: atención plena, cero ego, alegría pura." },
        { it: "You can practice this too. This week, play one game with your full heart: cards, soccer in the park, a puzzle. When you play like a child, time becomes soft.", es: "Tú también puedes practicar esto. Esta semana, juega un juego con todo el corazón: cartas, fútbol en el parque, un rompecabezas. Cuando juegas como un niño, el tiempo se vuelve suave." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Juegos para niños", "El juego como experiencia espiritual de atención plena", "Una guía de juguetes"],
        answer: 1,
        why: "«Play is a prayer» equipara juego y experiencia sagrada.",
      },
      quiz: [
        { q: "What happens to the hour when children play?", kind: "literal", options: ["It disappears", "It slows down", "It hurts"], answer: 0, why: "«An hour disappears»." },
        { q: "What is the old feeling of the sacred, in the text?", kind: "inferencial", options: ["Full attention, zero ego, pure joy", "A quiet church", "A long prayer"], answer: 0, why: "Se infiere de la definición dada." },
        { q: "What happens to time when you play like a child?", kind: "literal", options: ["Time becomes soft", "Time stops completely", "Time is money"], answer: 0, why: "«Time becomes soft»." },
      ],
      vf: [
        { text: "Children watch the clock when they play.", value: false, why: "El texto dice que NO lo hacen." },
        { text: "You can practice sacred attention in a game of cards.", value: true, why: "«Play one game with your full heart: cards…»." },
        { text: "The ego disappears in pure play.", value: true, why: "«Zero ego» está en la definición." },
      ],
    },
    {
      id: "md-en-a1-09-2", theme: "qui e ora",
      title: "The game, not the phone", titleEs: "El partido, no el teléfono",
      minutes: 2,
      paragraphs: [
        { it: "Game day. Wings on the table, friends on the couch. The phone stays in the pocket for one quarter. Watch the game with your whole face: shout, laugh, suffer.", es: "Día de partido. Alitas en la mesa, amigos en el sofá. El teléfono queda en el bolsillo por un cuarto de tiempo. Mira el juego con toda la cara: grita, ríe, sufre." },
        { it: "Shared presence is twice as strong. Sixty minutes of real attention with friends are worth more than six hours of half-watching. Be there, body and soul.", es: "La presencia compartida es dos veces más fuerte. Sesenta minutos de atención real con amigos valen más que seis horas de mirada a medias. Está ahí, cuerpo y alma." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Reglas del fútbol americano", "Presencia plena compartida viendo el partido", "Los mejores TV para deportes"],
        answer: 1,
        why: "El contraste juego/teléfono apunta a atención, no a técnica deportiva.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The phone stays in the pocket for one quarter.",
          "You watch the game with your whole face.",
          "Shared presence is twice as strong.",
          "Sixty minutes of real attention are worth more.",
          "The halftime show costs millions of dollars.",
        ],
        intruder: 4,
        why: "El costo del espectáculo es dato financiero, no la presencia compartida: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Shared presence with friends beats half-watching for hours", "American football is complicated", "Phones are expensive"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen:",
        secondary: ["The phone stays in the pocket for one quarter", "You shout, laugh and suffer with your whole face", "Sixty minutes of real attention are worth more"],
        distractors: ["You record the game for social media", "The referee is your uncle", "Wings are unhealthy"],
      },
    },
    {
      id: "md-en-a1-09-3", theme: "relax fisico",
      title: "Couch stretch at halftime", titleEs: "Estiramiento en el sofá al descanso",
      minutes: 2,
      paragraphs: [
        { it: "Halftime: three minutes of commercials. Use them! Sit forward, touch your toes, roll your shoulders. Your body loves commercial breaks more than the commercials.", es: "Descanso: tres minutos de anuncios. ¡Aprovéchalos! Siéntate al borde, toca tus pies, rueda los hombros. Tu cuerpo ama los cortes más que los anuncios." },
        { it: "Stretch during halftime, breathe during the game. Small movements, many times: this is how your body survives the Sunday marathon on the couch.", es: "Estira en el descanso, respira durante el partido. Movimientos pequeños, muchas veces: así sobrevive tu cuerpo al maratón dominical del sofá." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Publicidad de TV", "Estiramientos en los cortes del partido", "Cómo jugar fútbol"],
        answer: 1,
        why: "«Couch stretch at halftime» define el momento y el gesto.",
      },
      sequence: {
        instr: "Ordena el estiramiento del descanso:",
        events: [
          "Halftime starts: three minutes of commercials",
          "You sit forward and touch your toes",
          "You roll your shoulders slowly",
          "You feel the difference in your back",
          "The second half begins, body awake",
        ],
      },
      listen: {
        intro: "Escucha el mini-audio del descanso:",
        audioIt: "Halftime. Three minutes of commercials. Use them well. Sit forward on the couch. Reach for your toes, slow and easy. Now roll your shoulders, one, two, three. Feel your back say thank you. The second half starts in one minute, and your body is already winning.",
        questions: [
          { q: "What do you do at halftime?", kind: "literal", options: ["Stretch and roll your shoulders", "Check your phone", "Order pizza"], answer: 0, why: "«Sit forward… roll your shoulders»." },
          { q: "How is your body at the end?", kind: "inferencial", options: ["Already winning", "Asleep", "Angry"], answer: 0, why: "«Your body is already winning»: se infiere del cierre." },
        ],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Sit forward and touch your toes.",
          "Roll your shoulders slowly.",
          "Stretch during halftime, breathe during the game.",
          "The Chiefs win the Super Bowl every year.",
          "Small movements, many times, survive the Sunday marathon.",
        ],
        intruder: 3,
        why: "La afirmación deportiva es ajena a la práctica corporal: es el intruso (¡y además discutible!).",
      },
    },
  ],

  "en-cu-a1-10": [
    {
      id: "md-en-a1-10-1", theme: "relax mentale",
      title: "The quiet room inside", titleEs: "La habitación silenciosa interior",
      minutes: 3,
      paragraphs: [
        { it: "When your home is loud — TV, music, family — remember: you carry a quiet room inside. The door is your breath. Three slow breaths open it.", es: "Cuando tu casa es ruidosa —TV, música, familia— recuerda: llevas una habitación silenciosa adentro. La puerta es tu respiración. Tres respiraciones lentas la abren." },
        { it: "You do not need silence outside to find silence inside. Ten minutes of inner quiet in a noisy house is a superpower. Train it like a muscle.", es: "No necesitas silencio afuera para encontrar silencio adentro. Diez minutos de quietud interior en una casa ruidosa son un superpoder. Entrénalo como un músculo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Insonorización de casas", "Encontrar silencio interior en una casa ruidosa", "Reglas de convivencia"],
        answer: 1,
        why: "«The quiet room inside» traslada la quietud al interior de uno.",
      },
      quiz: [
        { q: "What is the door of the quiet room?", kind: "literal", options: ["Your breath", "A real door", "The window"], answer: 0, why: "«The door is your breath»." },
        { q: "How many breaths open the door?", kind: "literal", options: ["Three slow ones", "Thirty fast ones", "None"], answer: 0, why: "«Three slow breaths open it»." },
        { q: "What is the superpower?", kind: "critica", options: ["Inner quiet even in a noisy house", "Sleeping anywhere", "Ignoring your family"], answer: 0, why: "El texto propone calma interna, no ignorar a los demás." },
      ],
      vf: [
        { text: "You need total silence outside to relax.", value: false, why: "El texto dice lo contrario: no necesitas silencio afuera." },
        { text: "Inner quiet can be trained like a muscle.", value: true, why: "«Train it like a muscle»." },
        { text: "The door of the quiet room is your breath.", value: true, why: "Literal en el primer párrafo." },
      ],
    },
    {
      id: "md-en-a1-10-2", theme: "spiritualità",
      title: "Home is the first temple", titleEs: "La casa es el primer templo",
      minutes: 3,
      paragraphs: [
        { it: "Every tradition says: the altar begins at home. Wash one dish with attention. Fold one shirt with care. Small acts of order are small acts of love.", es: "Toda tradición dice: el altar empieza en casa. Lava un plato con atención. Dobla una camisa con cuidado. Los pequeños actos de orden son pequeños actos de amor." },
        { it: "When you cook for your family or water a plant, you repeat the oldest human ritual: taking care of life. Spirituality is not only in books; it is also in the kitchen and the balcony.", es: "Cuando cocinas para tu familia o riegas una planta, repites el ritual humano más antiguo: cuidar la vida. La espiritualidad no está solo en libros; también está en la cocina y el balcón." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Limpieza profunda", "Los quehaceres como práctica espiritual de cuidado", "Feng shui"],
        answer: 1,
        why: "«The first temple» eleva la casa a espacio sagrado del cuidado.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The altar begins at home.",
          "You wash one dish with attention.",
          "Small acts of order are small acts of love.",
          "You water a plant on the balcony.",
          "Marble altars are sold in Florence.",
        ],
        intruder: 4,
        why: "Los altares de mármol son merchandising turístico, no la práctica doméstica: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Small acts of care at home are a spiritual practice", "Cleaning services are cheap", "Plants need water on Sundays"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen:",
        secondary: ["You wash one dish with attention", "Cooking repeats the oldest ritual: taking care of life", "Spirituality is also in the kitchen and the balcony"],
        distractors: ["You must clean the whole house every day", "Altars require candles", "Books are useless"],
      },
    },
    {
      id: "md-en-a1-10-3", theme: "meditazione",
      title: "Three breaths before bed", titleEs: "Tres respiraciones antes de dormir",
      minutes: 2,
      paragraphs: [
        { it: "The day is over. You are in bed. Do not open the phone. Instead: three breaths. On each breath, say one word inside: thank you… for this day… good night.", es: "El día terminó. Estás en la cama. No abras el teléfono. En cambio: tres respiraciones. En cada una, di una palabra adentro: gracias… por este día… buenas noches." },
        { it: "This micro-meditation of thirty seconds cleans the mind like a small rain cleans the street. Sleep arrives faster, and the night is deeper.", es: "Esta micromeditación de treinta segundos limpia la mente como una lluvia pequeña limpia la calle. El sueño llega más rápido y la noche es más profunda." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Consejos de insomnio", "Una micromeditación de 3 respiraciones al acostarse", "Crítica de las pantallas"],
        answer: 1,
        why: "El título define dosis (tres) y momento (antes de dormir).",
      },
      sequence: {
        instr: "Ordena el ritual de sueño:",
        events: ["The day is over and you are in bed", "You leave the phone closed", "You take the first breath: thank you", "You take the second: for this day", "You take the third: good night"],
      },
      listen: {
        intro: "Escucha el ritual:",
        audioIt: "The day is over. Your head is on the pillow. No phone tonight. Just three breaths. Breathe in… and out. In your mind, say: thank you. Breathe in… and out. Say: for this day. One more breath. Say: good night. Now let your body get heavy, like a stone in warm water. Sleep comes to you.",
        questions: [
          { q: "What do you say on the first breath?", kind: "literal", options: ["Thank you", "Good morning", "Where is my phone"], answer: 0, why: "«Say: thank you»." },
          { q: "How does the body feel at the end?", kind: "inferencial", options: ["Heavy, like a stone in warm water", "Light like a balloon", "Itchy"], answer: 0, why: "Se infiere de la imagen final del audio." },
          { q: "How long is the micro-meditation?", kind: "inferencial", options: ["Thirty seconds", "Three hours", "All night"], answer: 0, why: "El texto la define de 30 segundos." },
        ],
      },
    },
  ],

  "en-cu-a1-11": [
    {
      id: "md-en-a1-11-1", theme: "relax mentale",
      title: "The list and the mind", titleEs: "La lista y la mente",
      minutes: 3,
      paragraphs: [
        { it: "You hold the shopping list. Your mind makes another list: emails, worries, memories. Two lists, one brain. Put the mind-list down for ten minutes.", es: "Sostienes la lista del mercado. Tu mente fabrica otra lista: correos, preocupaciones, recuerdos. Dos listas, un cerebro. Baja la lista mental por diez minutos." },
        { it: "Supermarkets are designed to excite your mind: colors, offers, music. Answer with the oldest trick: follow your list, breathe slowly, walk calmly. You are the calm inside the storm of products.", es: "Los supermercados están diseñados para excitar la mente: colores, ofertas, música. Responde con el truco más antiguo: sigue tu lista, respira lento, camina tranquilo. Tú eres la calma dentro de la tormenta de productos." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo ahorrar en el súper", "Calma mental frente al diseño del supermercado", "Una lista de compras modelo"],
        answer: 1,
        why: "El título opone la lista física a la lista mental.",
      },
      quiz: [
        { q: "What does your mind do while you shop?", kind: "literal", options: ["It makes another list of worries", "It goes blank", "It falls asleep"], answer: 0, why: "«Your mind makes another list: emails, worries, memories»." },
        { q: "Why do supermarkets use colors, offers and music?", kind: "inferencial", options: ["To excite your mind and your buying", "To help you relax", "To save electricity"], answer: 0, why: "Se infiere: «designed to excite your mind»." },
        { q: "What is the healthiest answer, according to the text?", kind: "critica", options: ["Follow your list and breathe slowly", "Buy everything on sale", "Shop without a list"], answer: 0, why: "El texto recomienda la lista propia y el ritmo lento." },
      ],
      vf: [
        { text: "You have two lists: one on paper and one in your mind.", value: true, why: "«Two lists, one brain»." },
        { text: "You must buy everything on sale.", value: false, why: "El texto propone lo contrario: seguir tu propia lista." },
        { text: "You are the calm inside the storm of products.", value: true, why: "Metáfora literal del cierre." },
      ],
    },
    {
      id: "md-en-a1-11-2", theme: "qui e ora",
      title: "Choosing an apple", titleEs: "Elegir una manzana",
      minutes: 2,
      paragraphs: [
        { it: "The apple section. Red, green, big, small. Normally you grab one and run. Today, choose like a ritual: look at the skin, feel the weight, smell it.", es: "La sección de manzanas. Rojas, verdes, grandes, pequeñas. Normalmente tomas una y corres. Hoy elige como un ritual: mira la piel, siente el peso, huélela." },
        { it: "Fruit is the present moment in a bowl. Two minutes of attention turn a boring errand into a small meditation. Yes, even at the supermarket. Especially at the supermarket.", es: "La fruta es el momento presente en un tazón. Dos minutos de atención convierten un recado aburrido en una pequeña meditación. Sí, incluso en el súper. Sobre todo en el súper." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Dieta de frutas", "Elegir fruta con atención como micro-práctica", "Precios de manzanas"],
        answer: 1,
        why: "El título convierte un gesto mínimo en ritual.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The apple section is red and green.",
          "Today you choose like a ritual.",
          "You look at the skin and feel the weight.",
          "Fruit is the present moment in a bowl.",
          "Apples contain twenty percent water.",
        ],
        intruder: 4,
        why: "El dato nutricional es científico, no la práctica de presencia: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Attention turns a boring errand into a small meditation", "Apples are the best fruit", "Supermarkets are boring places"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen:",
        secondary: ["You look at the skin and feel the weight", "Fruit is the present moment in a bowl", "Two minutes of attention change the errand"],
        distractors: ["You must buy organic only", "Green apples are healthier", "You smell the money"],
      },
    },
    {
      id: "md-en-a1-11-3", theme: "relax fisico",
      title: "Breathing in the checkout line", titleEs: "Respirando en la fila de caja",
      minutes: 2,
      paragraphs: [
        { it: "The line is long. The candy shelf screams. Stand like a mountain: weight on both feet, knees soft, shoulders down. The line moves; you do not move inside.", es: "La fila es larga. El estante de dulces grita. Párate como una montaña: peso en ambos pies, rodillas suaves, hombros abajo. La fila avanza; tú no te mueves por dentro." },
        { it: "Waiting lines are free gyms of patience. Two minutes of standing meditation: feel your feet, follow your breath, smile inside. Your turn arrives — and you arrive with it, calm.", es: "Las filas son gimnasios gratuitos de paciencia. Dos minutos de meditación de pie: siente tus pies, sigue tu respiración, sonríe por dentro. Llega tu turno — y tú llegas con él, tranquilo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Trucos para evitar filas", "Meditación de pie mientras esperas en la fila", "Quejas del servicio"],
        answer: 1,
        why: "El título traslada la práctica a la espera inevitable.",
      },
      sequence: {
        instr: "Ordena la práctica de la fila:",
        events: ["The line is long and the candy shelf screams", "You stand like a mountain", "You feel your feet on the floor", "You follow your breath and smile inside", "Your turn arrives and you arrive calm"],
      },
      listen: {
        intro: "Escucha la postura de la fila:",
        audioIt: "Welcome to the free gym of patience. Feel both feet on the floor. Let your knees be soft. Drop your shoulders. Now follow your breath: in… and out. The line moves, but you stay still inside. When your turn arrives, you arrive with it — calm, awake, and maybe smiling.",
        questions: [
          { q: "What do you feel on the floor?", kind: "literal", options: ["Both feet", "One foot", "A coin"], answer: 0, why: "«Feel both feet on the floor»." },
          { q: "How do you arrive at your turn?", kind: "inferencial", options: ["Calm, awake, maybe smiling", "Angry and tired", "Hungry for candy"], answer: 0, why: "Se infiere del cierre del audio." },
        ],
      },
    },
  ],

  "en-cu-a1-12": [
    {
      id: "md-en-a1-12-1", theme: "spiritualità",
      title: "The city as a teacher", titleEs: "La ciudad como maestra",
      minutes: 3,
      paragraphs: [
        { it: "In a big city you see everything: generosity and hurry, smiles and sirens. The city is a teacher with a hard method and a soft heart. Every street asks you a question.", es: "En una gran ciudad ves todo: generosidad y prisa, sonrisas y sirenas. La ciudad es una maestra de método duro y corazón blando. Cada calle te hace una pregunta." },
        { it: "Travelers learn fast: the answer to the noise is not more noise. Walk slower than the city, and the city opens. The oldest spiritual rule works even in Times Square: peace begins with one person.", es: "Los viajeros aprenden rápido: la respuesta al ruido no es más ruido. Camina más lento que la ciudad, y la ciudad se abre. La regla espiritual más antigua funciona incluso en Times Square: la paz empieza con una persona." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Guía turística de NYC", "La ciudad como maestra espiritual", "Estadísticas de ruido"],
        answer: 1,
        why: "«The city as a teacher» es la tesis del texto.",
      },
      quiz: [
        { q: "What is the city, in the text?", kind: "literal", options: ["A teacher with a hard method and a soft heart", "A dangerous machine", "A quiet village"], answer: 0, why: "Literal en el primer párrafo." },
        { q: "What is the answer to the noise?", kind: "inferencial", options: ["Not more noise: walk slower and stay calm", "Shout louder", "Wear headphones always"], answer: 0, why: "«The answer to the noise is not more noise»." },
        { q: "Where does peace begin?", kind: "literal", options: ["With one person", "With the government", "In quiet villages only"], answer: 0, why: "«Peace begins with one person»." },
      ],
      vf: [
        { text: "Every street asks you a question.", value: true, why: "Metáfora literal del primer párrafo." },
        { text: "You must walk faster than the city.", value: false, why: "El texto pide caminar más lento que la ciudad." },
        { text: "The oldest spiritual rule works even in Times Square.", value: true, why: "Literal en el cierre." },
      ],
    },
    {
      id: "md-en-a1-12-2", theme: "relax mentale",
      title: "Quiet inside the sirens", titleEs: "Silencio dentro de las sirenas",
      minutes: 3,
      paragraphs: [
        { it: "Sirens, horns, millions of steps. The city sounds like a river of steel. You cannot silence Manhattan, but you can silence the small room between your ears.", es: "Sirenas, bocinas, millones de pasos. La ciudad suena como un río de acero. No puedes silenciar Manhattan, pero puedes silenciar la pequeña habitación entre tus orejas." },
        { it: "Close your eyes for ten seconds in a safe corner. One breath. The noise continues outside, and that is fine. Calm is not the absence of sound; it is the presence of attention.", es: "Cierra los ojos diez segundos en un rincón seguro. Una respiración. El ruido sigue afuera, y está bien. La calma no es la ausencia de sonido; es la presencia de atención." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Tapones para los oídos", "Calma interior en la ciudad ruidosa", "Una denuncia por ruido"],
        answer: 1,
        why: "El título opone el silencio interior a las sirenas exteriores.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The city sounds like a river of steel.",
          "You close your eyes for ten seconds.",
          "The noise continues outside, and that is fine.",
          "Calm is the presence of attention.",
          "Times Square has forty billboards.",
        ],
        intruder: 4,
        why: "El número de pantallas es estadística urbana, no la calma interior: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Calm is the presence of attention, not the absence of sound", "New York is the noisiest city", "You must leave the city to relax"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen:",
        secondary: ["The city sounds like a river of steel", "You close your eyes for ten seconds in a safe corner", "The noise continues outside and that is fine"],
        distractors: ["You buy special headphones", "Steel rivers are dangerous", "Manhattan is silent at night"],
      },
    },
    {
      id: "md-en-a1-12-3", theme: "relax fisico",
      title: "Tourist feet, monk breath", titleEs: "Pies de turista, respiración de monje",
      minutes: 3,
      paragraphs: [
        { it: "A tourist day in the city is a marathon: ten thousand steps, stairs, subway. Treat your feet like friends. At every bench, sit and take the weight off.", es: "Un día de turista en la ciudad es un maratón: diez mil pasos, escaleras, metro. Trata tus pies como amigos. En cada banca, siéntate y quítale el peso de encima." },
        { it: "Monk breath, tourist feet: walk with joy, stop with peace. Every two hours, one bench, three breaths, some water. You will arrive at midnight with energy for one more story.", es: "Respiración de monje, pies de turista: camina con alegría, detente con paz. Cada dos horas, una banca, tres respiraciones, un poco de agua. Llegarás a medianoche con energía para una historia más." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Calzado deportivo", "Cuidar el cuerpo durante un día largo de turismo", "Hoteles con spa"],
        answer: 1,
        why: "El título combina movimiento (pies) y calma (respiración).",
      },
      sequence: {
        instr: "Ordena el ritual del viajero:",
        events: ["You walk the city with joy", "Every two hours you find a bench", "You sit and take the weight off your feet", "You take three breaths and drink water", "You arrive at midnight with energy"],
      },
      listen: {
        intro: "Escucha el ritmo del viajero:",
        audioIt: "This is the traveler's rhythm. Walk with joy, like the city is a museum and you have all day. Every two hours, find a bench. Sit. Take the weight off your feet. Three slow breaths. Some water. Look at the sky for five seconds. Now stand up. The city is waiting, and so is your calm.",
        questions: [
          { q: "How often do you find a bench?", kind: "literal", options: ["Every two hours", "Every five minutes", "Only at midnight"], answer: 0, why: "«Every two hours, find a bench»." },
          { q: "What do you do for five seconds?", kind: "literal", options: ["Look at the sky", "Check your phone", "Count tourists"], answer: 0, why: "«Look at the sky for five seconds»." },
          { q: "What waits for you at the end?", kind: "inferencial", options: ["The city and your calm", "A taxi only", "Nothing"], answer: 0, why: "«The city is waiting, and so is your calm»." },
        ],
      },
    },
  ],
};
