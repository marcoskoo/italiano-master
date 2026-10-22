import type { MindReading } from "../../cambridge-mind";

/* ═══ EN B1 · Mind readings (temáticas de conciencia) — 3 por unidad ══
   Metodología v9.13: 7 estrategias de comprensión lectora y de
   escucha. Textos en inglés americano B1 (subordinadas reales),
   traducción española a la vista. Campos `.it` = inglés (lengua de
   estudio), `.es` = español. Estrategia por índice: L1 = predict +
   quiz (lit/inf/crít) + V/F con justificación; L2 = predict + ideas +
   intruso; L3 = predict + secuencia + escucha. */

export const EN_MIND_B1: Record<string, MindReading[]> = {
  "en-cu-b1-01": [
    {
      id: "md-en-b1-01-1", theme: "meditazione",
      title: "Three breaths before the booth", titleEs: "Tres respiraciones antes del stand",
      minutes: 2,
      paragraphs: [
        { it: "The gym is full of recruiters, and your heart is beating fast. Before you walk up to the next booth, find a quiet corner. Stand still, close your eyes if you feel comfortable, and take three slow breaths. Nobody will notice, and your body will thank you.", es: "El gimnasio está lleno de reclutadores y tu corazón late rápido. Antes de acercarte al siguiente stand, busca un rincón tranquilo. Quédate quieto, cierra los ojos si te sientes cómodo y da tres respiraciones lentas. Nadie lo notará y tu cuerpo te lo agradecerá." },
        { it: "This is a meditation in motion. You are not trying to erase the nerves; you are giving them room to settle. When you open your eyes, you will still be in the same gym, with the same résumé in your hand. But you will arrive at the booth as yourself, not as a bundle of nerves.", es: "Esta es una meditación en movimiento. No intentas borrar los nervios: les das espacio para asentarse. Cuando abras los ojos, seguirás en el mismo gimnasio, con el mismo currículum en la mano. Pero llegarás al stand siendo tú, no un manojo de nervios." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de reclutamiento para empresas", "Una técnica de respiración para calmar los nervios en la feria de empleo", "Una guía para escribir currículums"],
        answer: 1,
        why: "El título une la respiración con el stand de la feria: apunta a calmar los nervios, no a consejos de contratación.",
      },
      quiz: [
        { q: "Where do you go before the next booth?", kind: "literal", options: ["To a quiet corner", "To the parking lot", "To the food court"], answer: 0, why: "«Find a quiet corner»: está literal en el primer párrafo." },
        { q: "What happens with your nerves after the three breaths?", kind: "inferencial", options: ["They disappear completely", "They settle because you give them room", "They get worse"], answer: 1, why: "«You are giving them room to settle»: se infiere que los nervios se asientan, no que desaparecen." },
        { q: "Which idea fits the text best?", kind: "critica", options: ["Meditation only works in total silence", "Meditation in motion helps you arrive as yourself", "Recruiters notice everything"], answer: 1, why: "La idea central: meditar en movimiento te permite llegar al stand siendo tú mismo." },
      ],
      vf: [
        { text: "You take three slow breaths in a quiet corner.", value: true, why: "«Stand still and take three slow breaths»." },
        { text: "You are trying to erase the nerves completely.", value: false, why: "El texto dice que no intentas borrarlos, sino darles espacio." },
        { text: "After the exercise, you arrive at the booth as yourself.", value: true, why: "«You will arrive at the booth as yourself»." },
      ],
    },
    {
      id: "md-en-b1-01-2", theme: "qui e ora",
      title: "The pen, the badge, the moment", titleEs: "El bolígrafo, la credencial, el momento",
      minutes: 2,
      paragraphs: [
        { it: "At a career fair, everything moves fast: hands to shake, booths to visit, names to remember. But you can only do one thing at a time. Feel the pen in your hand. Notice the weight of your badge around your neck. This moment, right here, is the only one you actually own.", es: "En una feria de empleo todo se mueve rápido: manos que estrechar, stands que visitar, nombres que recordar. Pero solo puedes hacer una cosa a la vez. Siente el bolígrafo en tu mano. Nota el peso de tu credencial en tu cuello. Este momento, aquí mismo, es el único que realmente posees." },
        { it: "The here and now is not a vacation from your goals. It is the place where your goals actually happen. When you talk to a recruiter, talk. When you wait in line, wait. Presence is not doing less; it is doing one thing completely, and then moving to the next.", es: "El aquí y el ahora no son unas vacaciones de tus metas. Son el lugar donde tus metas realmente suceden. Cuando hablas con un reclutador, habla. Cuando esperas en la fila, espera. La presencia no es hacer menos: es hacer una cosa por completo y luego pasar a la siguiente." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una crítica de las ferias de empleo", "Estar presente: una cosa a la vez en la feria", "Cómo coleccionar bolígrafos gratis"],
        answer: 1,
        why: "El título enumera objetos pequeños del momento presente; apunta a la atención plena, no a una crítica del evento.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Career fairs are too fast for most people", "The present moment is where your goals actually happen", "Pens and badges are the most important tools"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["You can only do one thing at a time", "Notice the weight of your badge", "Presence is doing one thing completely"],
        distractors: ["Recruiters prefer students who speak fast", "You should visit every booth in one hour", "Badges are expensive this year"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Feel the pen in your hand.",
          "Notice the weight of your badge around your neck.",
          "When you talk to a recruiter, talk.",
          "The average career fair has forty booths.",
          "When you wait in line, wait.",
        ],
        intruder: 3,
        why: "El dato estadístico de los stands es información práctica ajena a la práctica de presencia: es el intruso.",
      },
    },
    {
      id: "md-en-b1-01-3", theme: "relax fisico",
      title: "Shake out the nerves", titleEs: "Sacudirse los nervios",
      minutes: 3,
      paragraphs: [
        { it: "Your body keeps the score at a career fair. Shoulders up to the ears, tight hands, quick breathing. Good news: tension is reversible. Stand in that quiet corner and shake out your hands, slowly, like you are flicking water off your fingers. Then roll your shoulders back twice. Feel the tension leave through your fingertips.", es: "Tu cuerpo lleva la cuenta en una feria de empleo. Hombros hasta las orejas, manos tensas, respiración rápida. Buena noticia: la tensión es reversible. Quédate en ese rincón tranquilo y sacude las manos lentamente, como si te quitaras el agua de los dedos. Después gira los hombros hacia atrás dos veces. Siente la tensión irse por las puntas de los dedos." },
        { it: "This works because movement tells your nervous system that the emergency is over. Three minutes of shaking, rolling and breathing cost nothing, and they change the way you walk up to a booth. Relaxed body, clearer words. Your three minutes with the recruiter start here.", es: "Funciona porque el movimiento le dice a tu sistema nervioso que la emergencia terminó. Tres minutos de sacudir, girar y respirar no cuestan nada y cambian la forma en que te acercas a un stand. Cuerpo relajado, palabras más claras. Tus tres minutos con el reclutador empiezan aquí." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un entrenamiento de boxeo para entrevistas", "Liberar la tensión física del cuerpo antes de hablar con reclutadores", "Cómo vestirse para una feria de empleo"],
        answer: 1,
        why: "«Shake out the nerves» apunta a soltar la tensión corporal, no al vestuario ni al ejercicio competitivo.",
      },
      sequence: {
        instr: "Ordena los pasos del ejercicio:",
        events: ["Stand in a quiet corner", "Shake out your hands slowly", "Roll your shoulders back twice", "Breathe and feel the tension leave", "Walk up to the booth relaxed"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Welcome to your body break before the booth. Stand tall and let your arms hang. Now shake your hands gently, like water off your fingertips. Roll your shoulders back, one and two. Take a slow breath in, and let it go. Notice how your body feels lighter. You are ready now. Walk up to that booth as yourself.",
        questions: [
          { q: "What do you do with your hands?", kind: "literal", options: ["You squeeze them tight", "You shake them gently", "You hide them"], answer: 1, why: "«Shake your hands gently»." },
          { q: "How does your body feel after the exercise?", kind: "inferencial", options: ["Lighter and ready", "Heavier and tired", "Exactly the same"], answer: 0, why: "«Your body feels lighter. You are ready now»: se infiere del cierre." },
          { q: "How many shoulder rolls do you do?", kind: "literal", options: ["Two", "Ten", "None"], answer: 0, why: "«Roll your shoulders back, one and two»." },
          { q: "What is the final advice?", kind: "inferencial", options: ["Go home and rest", "Skip the fair this year", "Walk up to the booth as yourself"], answer: 2, why: "«Walk up to that booth as yourself»: se infiere la recomendación final." },
        ],
      },
    },
  ],

  "en-cu-b1-02": [
    {
      id: "md-en-b1-02-1", theme: "relax mentale",
      title: "Calm inside the argument", titleEs: "Calma dentro de la discusión",
      minutes: 2,
      paragraphs: [
        { it: "When someone disagrees with you, your body reacts before your brain: hot face, fast words, closed hands. Mental relaxation starts with noticing. «My jaw is tight. My breath is short.» You do not need to win the next sentence. You only need to stay in the conversation.", es: "Cuando alguien discrepa contigo, tu cuerpo reacciona antes que tu cerebro: cara caliente, palabras rápidas, puños cerrados. La relajación mental empieza por notar: «Mi mandíbula está tensa. Mi respiración es corta». No necesitas ganar la siguiente frase. Solo necesitas quedarte en la conversación." },
        { it: "Try this in your next debate: after the other person finishes, count one breath before you answer. One breath is four seconds. In those four seconds, the heat goes down and your best argument has time to find you. Calm is not the absence of opinions; it is the space where your opinions get sharper.", es: "Prueba esto en tu próximo debate: cuando la otra persona termine, cuenta una respiración antes de responder. Una respiración son cuatro segundos. En esos cuatro segundos, el calor baja y tu mejor argumento tiene tiempo de encontrarte. La calma no es la ausencia de opiniones: es el espacio donde tus opiniones se afilan." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo ganar cualquier discusión", "Una pausa de respiración para discutir con calma", "La historia de un debate famoso"],
        answer: 1,
        why: "El título apunta a la calma interior durante el argumento, no a técnicas para ganar ni a historia.",
      },
      quiz: [
        { q: "What does your body do when someone disagrees?", kind: "literal", options: ["It reacts before your brain", "It falls asleep", "It starts laughing"], answer: 0, why: "«Your body reacts before your brain»: está literal en la primera frase." },
        { q: "How long is one breath, according to the text?", kind: "inferencial", options: ["About four seconds", "About one minute", "About ten seconds"], answer: 0, why: "«One breath is four seconds»." },
        { q: "What is calm, according to the text?", kind: "critica", options: ["The absence of opinions", "The space where your opinions get sharper", "A trick to end debates early"], answer: 1, why: "«Calm is the space where your opinions get sharper»." },
      ],
      vf: [
        { text: "You need to win the next sentence in a debate.", value: false, why: "El texto dice que solo necesitas quedarte en la conversación." },
        { text: "A one-breath pause helps the heat go down.", value: true, why: "«In those four seconds, the heat goes down»." },
        { text: "Mental relaxation starts with noticing your body.", value: true, why: "«Mental relaxation starts with noticing»." },
      ],
    },
    {
      id: "md-en-b1-02-2", theme: "spiritualità",
      title: "The other person's light", titleEs: "La luz de la otra persona",
      minutes: 3,
      paragraphs: [
        { it: "Every person in a debate carries a whole life you cannot see: worries at home, a difficult week, a dream they are protecting. When Jordan argues about phones, he is also arguing from his experience. Spiritual practice begins exactly there: recognizing the light in the person who disagrees with you.", es: "Cada persona en un debate carga una vida entera que no puedes ver: preocupaciones en casa, una semana difícil, un sueño que protege. Cuando Jordan discute sobre los teléfonos, también discute desde su experiencia. La práctica espiritual comienza justo ahí: reconocer la luz en la persona que discrepa contigo." },
        { it: "This does not mean you give up your opinion. It means you argue with a person, not against a monster. «I see your point» is more than good manners; it is a small act of respect that keeps the human being visible. The best debaters are not the loudest. They are the ones who never forget who they are talking to.", es: "Esto no significa que renuncies a tu opinión. Significa que discutes con una persona, no contra un monstruo. «Entiendo tu punto» es más que buenos modales: es un pequeño acto de respeto que mantiene visible al ser humano. Los mejores en el debate no son los más ruidosos. Son los que nunca olvidan con quién están hablando." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas para gritar más fuerte en debates", "Ver a la persona humana detrás de la opinión contraria", "Un curso de modales para cenas formales"],
        answer: 1,
        why: "El título habla de la luz del otro: reconocer a la persona, no vencerla ni etiquetarla.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Winning is all that matters in a debate", "Recognizing the human being in your opponent is a spiritual practice", "Phones should be banned from classrooms"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Everyone carries a life you cannot see", "«I see your point» is an act of respect", "The best debaters are not the loudest"],
        distractors: ["Debates should last only two minutes", "Jordan never changes his mind about phones", "Only quiet people can debate well"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Every person carries a whole life you cannot see.",
          "When Jordan argues, he argues from his experience.",
          "«I see your point» is a small act of respect.",
          "The class debate lasted forty-five minutes on Friday.",
          "The best debaters never forget who they are talking to.",
        ],
        intruder: 3,
        why: "La duración del debate es un dato logístico ajeno a la reflexión espiritual: es el intruso.",
      },
    },
    {
      id: "md-en-b1-02-3", theme: "qui e ora",
      title: "One breath before you answer", titleEs: "Una respiración antes de responder",
      minutes: 2,
      paragraphs: [
        { it: "In a fast conversation, the pause feels dangerous, so we interrupt, finish other people's sentences and answer before the question ends. Try the opposite game today: every time someone asks you a question, take one full breath before answering. The world will not end. The other person will feel something rare: being truly heard.", es: "En una conversación rápida, la pausa se siente peligrosa, así que interrumpimos, terminamos las frases de otros y respondemos antes de que la pregunta termine. Prueba hoy el juego contrario: cada vez que alguien te haga una pregunta, da una respiración completa antes de responder. El mundo no se acabará. La otra persona sentirá algo raro: ser escuchada de verdad." },
        { it: "That breath is the here and now in action. For four seconds you are not preparing your answer; you are receiving the question. Presence, it turns out, is mostly listening — not with polite silence, but with real attention, the kind that changes your answer because it actually heard the question.", es: "Esa respiración es el aquí y el ahora en acción. Durante cuatro segundos no estás preparando tu respuesta: estás recibiendo la pregunta. La presencia, resulta, es sobre todo escuchar, no con silencio cortés, sino con atención real, la que cambia tu respuesta porque de verdad oyó la pregunta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso de oratoria rápida", "Pausar y respirar antes de responder para escuchar de verdad", "Cómo evitar las preguntas difíciles"],
        answer: 1,
        why: "El título describe la pausa consciente antes de responder: escucha, no oratoria ni evasión.",
      },
      sequence: {
        instr: "Ordena el juego de la pausa consciente:",
        events: ["Someone asks you a question", "You take one full breath", "You receive the question without preparing an answer", "Your answer changes because you listened", "The other person feels truly heard"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Let's practice the pause together. Think of the last question somebody asked you. Now breathe in slowly, and breathe out. In that space, do not prepare your answer. Just hold the question, like a warm cup in your hands. When you are ready, answer. Notice how different your words feel when they come after a real pause.",
        questions: [
          { q: "What do you hold in that space?", kind: "literal", options: ["Your phone", "The question", "A pen"], answer: 1, why: "«Just hold the question»." },
          { q: "How do your words feel after a real pause?", kind: "inferencial", options: ["Different", "Louder", "Shorter"], answer: 0, why: "«Notice how different your words feel»." },
          { q: "What should you NOT do in the pause?", kind: "literal", options: ["Prepare your answer", "Breathe", "Relax"], answer: 0, why: "«Do not prepare your answer»." },
          { q: "What is the question compared to?", kind: "inferencial", options: ["A cold shower", "A long exam", "A warm cup in your hands"], answer: 2, why: "«Like a warm cup in your hands»." },
        ],
      },
    },
  ],

  "en-cu-b1-03": [
    {
      id: "md-en-b1-03-1", theme: "qui e ora",
      title: "The $500 million daydream", titleEs: "El sueño despierto de los 500 millones",
      minutes: 2,
      paragraphs: [
        { it: "The jackpot number glows on the TV, and your mind launches a movie: the house, the trip, the goodbye email to your boss. Daydreams are not the enemy. They are clouds in the sky of your attention — beautiful, passing, and not you. Watch the movie for a moment. Enjoy it. Then notice where your feet actually are.", es: "El número del premio brilla en la tele y tu mente lanza una película: la casa, el viaje, el correo de despedida al jefe. Los sueños despiertos no son el enemigo. Son nubes en el cielo de tu atención: hermosas, pasajeras, y no eres tú. Mira la película un momento. Disfrútala. Después nota dónde están realmente tus pies." },
        { it: "This is the practice of the here and now: you can visit the $500 million dream without moving in. Your coffee is still warm. Your friends are still laughing at the diner in Ohio. The riches of this moment are smaller, it is true — but they are real, they are here, and unlike the lottery, you have already won them.", es: "Esta es la práctica del aquí y el ahora: puedes visitar el sueño de los 500 millones sin mudarte a él. Tu café sigue tibio. Tus amigos siguen riendo en el diner de Ohio. Las riquezas de este momento son más pequeñas, es cierto, pero son reales, están aquí y, a diferencia de la lotería, ya las ganaste." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo invertir un premio de lotería", "Observar los sueños despiertos y volver al momento presente", "Una crítica de los juegos de azar"],
        answer: 1,
        why: "El título llama al premio «daydream» (sueño despierto): el foco es observar la fantasía y volver al ahora.",
      },
      quiz: [
        { q: "What does your mind launch when you see the jackpot?", kind: "literal", options: ["A movie", "A car", "A website"], answer: 0, why: "«Your mind launches a movie»." },
        { q: "What are daydreams compared to?", kind: "inferencial", options: ["Clouds passing in the sky", "Stones at the bottom of a river", "Walls around a garden"], answer: 0, why: "«They are clouds in the sky of your attention»." },
        { q: "What is the message about the present moment?", kind: "critica", options: ["You have already won its riches", "It is worth less than the jackpot", "It should be avoided"], answer: 0, why: "«Unlike the lottery, you have already won them»: la riqueza del presente ya es tuya." },
      ],
      vf: [
        { text: "Daydreams are the enemy.", value: false, why: "El texto dice que no son el enemigo: son nubes que pasan." },
        { text: "You can visit the dream without moving in.", value: true, why: "«You can visit the $500 million dream without moving in»." },
        { text: "Your friends are still laughing at the diner.", value: true, why: "Aparece literal en el segundo párrafo." },
      ],
    },
    {
      id: "md-en-b1-03-2", theme: "meditazione",
      title: "The riches you already have", titleEs: "Las riquezas que ya tienes",
      minutes: 3,
      paragraphs: [
        { it: "Sit comfortably and bring to mind three things you already have that money cannot buy. A person who makes you laugh. A body that carries you everywhere. The ability to learn a language, which is exactly what you are doing right now. Stay with each one for three breaths. This is not positive thinking; it is accurate thinking.", es: "Siéntate cómodo y trae a la mente tres cosas que ya tienes y que el dinero no puede comprar. Una persona que te hace reír. Un cuerpo que te lleva a todas partes. La capacidad de aprender un idioma, que es exactamente lo que estás haciendo ahora. Quédate con cada una por tres respiraciones. Esto no es pensamiento positivo: es pensamiento preciso." },
        { it: "Meditation on enough is a quiet rebellion. The jackpot on TV says you are missing something; your breath says you are holding plenty. Both messages are loud, but only one of them is true tonight. Practice seeing your riches, and the day a real prize arrives, you will already know how to hold it without dropping yourself.", es: "La meditación sobre lo suficiente es una rebelión tranquila. El premio de la tele dice que te falta algo; tu respiración dice que sostienes mucho. Ambos mensajes son ruidosos, pero solo uno es verdad esta noche. Practica ver tus riquezas y, el día que llegue un premio real, ya sabrás sostenerlo sin soltarte a ti mismo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de inversiones personales", "Meditar sobre lo que ya tienes y no se puede comprar", "Cómo pedir un ascenso en el trabajo"],
        answer: 1,
        why: "El título habla de las riquezas que ya posees: gratitud meditativa, no finanzas.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Money is the only real riches", "Recognizing what you already have is a form of meditation", "Lotteries should be illegal"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A person who makes you laugh", "A body that carries you everywhere", "Only one of the two loud messages is true tonight"],
        distractors: ["You should stop buying lottery tickets forever", "Learning a language takes only three months", "Rich people never meditate"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Bring to mind three things money cannot buy.",
          "Stay with each one for three breaths.",
          "The jackpot on TV says you are missing something.",
          "Powerball tickets cost two dollars at the gas station.",
          "You will know how to hold a real prize without dropping yourself.",
        ],
        intruder: 3,
        why: "El precio del boleto es un dato práctico del juego, ajeno a la meditación sobre lo suficiente: es el intruso.",
      },
    },
    {
      id: "md-en-b1-03-3", theme: "spiritualità",
      title: "Enough", titleEs: "Lo suficiente",
      minutes: 2,
      paragraphs: [
        { it: "There is a quiet spiritual question under every lottery dream: how much is enough? A bigger house? A second house? The question never ends, because «more» is a direction, not a place. The people who look peaceful are not the ones who have everything. They are the ones who decided, on purpose, what enough looks like.", es: "Hay una pregunta espiritual tranquila bajo cada sueño de lotería: ¿cuánto es suficiente? ¿Una casa más grande? ¿Una segunda casa? La pregunta nunca termina, porque «más» es una dirección, no un lugar. Las personas que se ven en paz no son las que lo tienen todo. Son las que decidieron, a propósito, cómo se ve lo suficiente." },
        { it: "Enough is not a number; it is a decision you can make tonight, at this table, with these friends and this pie. The soul does not grow by addition. It grows by attention — by noticing what is already in front of you and letting it be exactly what it is.", es: "Lo suficiente no es un número: es una decisión que puedes tomar esta noche, en esta mesa, con estos amigos y este pastel. El alma no crece por adición. Crece por atención: por notar lo que ya está frente a ti y dejar que sea exactamente lo que es." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ensayo sobre economía doméstica", "La pregunta espiritual de cuánto es suficiente", "Una receta de pastel de manzana"],
        answer: 1,
        why: "El título de una sola palabra, «Enough», apunta a la pregunta espiritual del cuánto basta.",
      },
      sequence: {
        instr: "Ordena el camino del texto:",
        events: ["You ask the question: how much is enough?", "You notice that «more» is a direction, not a place", "You decide, on purpose, what enough looks like", "You pay attention to what is in front of you", "You let it be exactly what it is"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Tonight, try a small practice. Look around the table where you are sitting. Pick one ordinary thing: a cup, a chair, a face. Say quietly in your mind: this is enough for now. Breathe in, and let the idea land. Enough is not the end of dreaming. It is the ground you dream from. Stay here for one more breath.",
        questions: [
          { q: "What do you pick?", kind: "literal", options: ["One ordinary thing", "A lottery ticket", "A new car"], answer: 0, why: "«Pick one ordinary thing: a cup, a chair, a face»." },
          { q: "What is enough, according to the audio?", kind: "inferencial", options: ["The ground you dream from", "The end of dreaming", "A prize you win"], answer: 0, why: "«It is the ground you dream from»." },
          { q: "What do you say quietly in your mind?", kind: "literal", options: ["This is enough for now", "I need more money", "Tomorrow will be better"], answer: 0, why: "«Say quietly in your mind: this is enough for now»." },
          { q: "How long do you stay?", kind: "inferencial", options: ["One more breath", "One hour", "Until midnight"], answer: 0, why: "«Stay here for one more breath»." },
        ],
      },
    },
  ],

  "en-cu-b1-04": [
    {
      id: "md-en-b1-04-1", theme: "spiritualità",
      title: "A quiet trust", titleEs: "Una confianza tranquila",
      minutes: 3,
      paragraphs: [
        { it: "The waiting room before an interview is a strange chapel: soft chairs, a water fountain, five strangers checking their phones. You cannot control the questions behind that door. You cannot control the résumé of the other candidates. You can only trust the work you have already done, and let it speak for you.", es: "La sala de espera antes de una entrevista es una extraña capilla: sillas suaves, un bebedero, cinco desconocidos revisando sus teléfonos. No puedes controlar las preguntas detrás de esa puerta. No puedes controlar el currículum de los otros candidatos. Solo puedes confiar en el trabajo que ya hiciste y dejar que hable por ti." },
        { it: "Trust is a spiritual muscle: it grows every time you use it. You prepared. You showed up. You are here, and being here is already an act of courage. Whatever happens in that room, you will walk out having done your part. Some things are yours to control; the rest belongs to the day.", es: "La confianza es un músculo espiritual: crece cada vez que la usas. Te preparaste. Llegaste. Estás aquí, y estar aquí ya es un acto de valentía. Pase lo que pase en esa sala, saldrás habiendo hecho tu parte. Algunas cosas son tuyas de controlar; el resto pertenece al día." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas para manipular al entrevistador", "Confiar en tu preparación mientras esperas la entrevista", "Cómo decorar una sala de espera"],
        answer: 1,
        why: "El título habla de una confianza tranquila en la sala de espera, no de tácticas de entrevista.",
      },
      quiz: [
        { q: "What is the waiting room compared to?", kind: "literal", options: ["A chapel", "A stadium", "A market"], answer: 0, why: "«The waiting room is a strange chapel»." },
        { q: "What can you control?", kind: "inferencial", options: ["The work you have already done", "The questions behind the door", "The other candidates"], answer: 0, why: "«You can only trust the work you have already done»." },
        { q: "What is trust, according to the text?", kind: "critica", options: ["A muscle that grows when you use it", "A gift some people are born with", "A trick to get any job"], answer: 0, why: "«Trust is a spiritual muscle: it grows every time you use it»." },
      ],
      vf: [
        { text: "You can control the questions behind the door.", value: false, why: "El texto dice explícitamente que no puedes controlarlas." },
        { text: "Being in the waiting room is an act of courage.", value: true, why: "«Being here is already an act of courage»." },
        { text: "You will walk out having done your part.", value: true, why: "Aparece literal en el cierre del segundo párrafo." },
      ],
    },
    {
      id: "md-en-b1-04-2", theme: "relax fisico",
      title: "Warm hands, slow heart", titleEs: "Manos calientes, corazón lento",
      minutes: 2,
      paragraphs: [
        { it: "Cold hands before an interview are not a character flaw; they are blood leaving your fingers to serve your muscles. Your body is preparing for a lion that does not exist. Help it stand down: press your palms together for ten seconds, then let them rest. Rub them slowly, as if you were warming them over a small fire.", es: "Las manos frías antes de una entrevista no son un defecto de carácter: es sangre que deja tus dedos para servir a tus músculos. Tu cuerpo se prepara para un león que no existe. Ayúdalo a retirarse: presiona las palmas una contra otra durante diez segundos y luego déjalas descansar. Frótalas despacio, como si las calentaras sobre un fuego pequeño." },
        { it: "Warm hands send a message back to the brain: the emergency is over. This is why your grandmother gave you a warm cup before hard conversations. Physical relaxation is not decoration; it is information. Your heart slows down, your voice finds its low notes, and the handshake — when the door opens — feels like a handshake, not like a frozen fish.", es: "Las manos calientes mandan un mensaje de vuelta al cerebro: la emergencia terminó. Por eso tu abuela te daba una taza caliente antes de las conversaciones difíciles. La relajación física no es decoración: es información. Tu corazón baja de ritmo, tu voz encuentra sus notas bajas y el apretón de manos, cuando la puerta se abre, se siente como un apretón y no como un pescado congelado." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un tratamiento médico para la circulación", "Calentar las manos para calmar el cuerpo antes de la entrevista", "La historia de las tazas de té de las abuelas"],
        answer: 1,
        why: "El título une manos calientes con corazón lento: relajación física antes de la entrevista.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Cold hands mean you are a weak person", "Warming your hands tells your brain the emergency is over", "Interviews should always happen in summer"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Blood leaves your fingers to serve your muscles", "Press your palms together for ten seconds", "Physical relaxation is information"],
        distractors: ["You should run a mile before every interview", "Warm cups were invented in the 1990s", "A firm handshake requires gloves"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Press your palms together for ten seconds.",
          "Rub your hands slowly, like over a small fire.",
          "Warm hands send a message back to the brain.",
          "Engineering managers earn six-figure salaries.",
          "Your voice finds its low notes.",
        ],
        intruder: 3,
        why: "El salario de los gerentes es un dato laboral ajeno al ejercicio de relajación: es el intruso.",
      },
    },
    {
      id: "md-en-b1-04-3", theme: "relax mentale",
      title: "The story you tell yourself", titleEs: "La historia que te cuentas",
      minutes: 3,
      paragraphs: [
        { it: "After the interview, the mind starts editing the movie: «I should have said this. Why did I say that?» Watch the director work. The movie is not the interview; the movie is your mind's version, filmed with the camera of worry. You can watch it once, if you must. Then put the camera down.", es: "Después de la entrevista, la mente empieza a editar la película: «Debí decir esto. ¿Por qué dije aquello?». Mira al director trabajar. La película no es la entrevista: es la versión de tu mente, filmada con la cámara de la preocupación. Puedes verla una vez, si es necesario. Después baja la cámara." },
        { it: "Mental relaxation after effort is a skill that nobody teaches: close the file, thank yourself for showing up, and let the result arrive when it arrives. Rumination feels like productivity, but it is a treadmill in a dark room. The interview is over. Your job now is dinner, a walk, and a good night of sleep.", es: "La relajación mental después del esfuerzo es una habilidad que nadie enseña: cierra el archivo, agradécete haber llegado y deja que el resultado llegue cuando llegue. Rumiar se siente como productividad, pero es una caminadora en un cuarto oscuro. La entrevista terminó. Tu trabajo ahora es la cena, una caminata y una buena noche de sueño." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo pedir retroalimentación al entrevistador", "Soltar la autocrítica después de la entrevista", "Una guía de edición de video"],
        answer: 1,
        why: "El título habla de la historia interna post-entrevista: soltar la autocrítica, no pedir feedback.",
      },
      sequence: {
        instr: "Ordena la secuencia del texto:",
        events: ["The interview ends", "Your mind starts editing a movie of worry", "You watch the movie once, if you must", "You put the camera down and close the file", "You enjoy dinner, a walk and sleep"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "The interview is over, and your mind wants to review every answer. Not yet. First, place one hand on your chest and feel your heartbeat. Say to yourself: I showed up, and that counts. The result will come when it comes. Tonight there is nothing to fix, nothing to edit. Let your shoulders drop. You did your part today.",
        questions: [
          { q: "What does your mind want to do first?", kind: "literal", options: ["Review every answer", "Forget everything", "Write a letter"], answer: 0, why: "«Your mind wants to review every answer»." },
          { q: "What do you say to yourself?", kind: "inferencial", options: ["I showed up, and that counts", "I failed completely", "I must call the manager"], answer: 0, why: "«Say to yourself: I showed up, and that counts»." },
          { q: "Where do you place your hand?", kind: "literal", options: ["On your chest", "On the table", "On the door"], answer: 0, why: "«Place one hand on your chest»." },
          { q: "When will the result come?", kind: "inferencial", options: ["When it comes", "Tonight at midnight", "After you edit the movie"], answer: 0, why: "«The result will come when it comes»: no hay que forzarlo." },
        ],
      },
    },
  ],

  "en-cu-b1-05": [
    {
      id: "md-en-b1-05-1", theme: "relax fisico",
      title: "Arriving: unclench the trip", titleEs: "Llegar: soltar el viaje",
      minutes: 2,
      paragraphs: [
        { it: "Five hours of highway live in your body: gripping hands, a locked jaw, eyes still scanning the road. You have arrived, but your muscles do not know it yet. Sit in the car for one extra minute before unpacking. Unclench your jaw. Let go of the steering wheel. Drop your shoulders. Tell your body out loud: «We're here.»", es: "Cinco horas de carretera viven en tu cuerpo: manos aferradas, mandíbula trabada, ojos todavía escaneando el camino. Ya llegaste, pero tus músculos no lo saben. Quédate en el auto un minuto extra antes de bajar las maletas. Suelta la mandíbula. Suelta el volante. Baja los hombros. Dile a tu cuerpo en voz alta: «Ya llegamos»." },
        { it: "The transition matters. If you jump out of the car and straight into problem-solving mode — the reservation, the luggage, the kids — the trip's tension moves into the hotel with you. One minute of softening is a border crossing: on this side, the road; on the other side, your evening. Guard the border.", es: "La transición importa. Si saltas del auto directo al modo solución de problemas —la reserva, el equipaje, los niños—, la tensión del viaje se muda contigo al hotel. Un minuto de soltar es un paso por la frontera: de este lado, la carretera; del otro, tu noche. Cuida la frontera." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Ejercicios para manejar más rápido", "Soltar la tensión del cuerpo al llegar después del viaje", "Cómo empacar maletas ligeras"],
        answer: 1,
        why: "El título une la llegada con soltar el cuerpo: descargar la tensión del viaje, no consejos de manejo.",
      },
      quiz: [
        { q: "How long do you stay in the car before unpacking?", kind: "literal", options: ["One extra minute", "One hour", "Ten seconds"], answer: 0, why: "«Sit in the car for one extra minute before unpacking»." },
        { q: "What happens if you jump straight into problem-solving mode?", kind: "inferencial", options: ["The trip's tension moves into the hotel with you", "The reservation disappears", "The kids fall asleep"], answer: 0, why: "«The trip's tension moves into the hotel with you»." },
        { q: "What is the «border» in the text?", kind: "critica", options: ["The line between the road and your evening", "The state line of Nevada", "The hotel reception desk"], answer: 0, why: "«On this side, the road; on the other side, your evening»: la frontera es simbólica." },
      ],
      vf: [
        { text: "Your muscles know immediately that you have arrived.", value: false, why: "«Your muscles do not know it yet», dice el texto." },
        { text: "You tell your body out loud: «We're here».", value: true, why: "Aparece literal al final del primer párrafo." },
        { text: "One minute of softening is compared to a border crossing.", value: true, why: "«One minute of softening is a border crossing»." },
      ],
    },
    {
      id: "md-en-b1-05-2", theme: "relax mentale",
      title: "The complaint that breathes", titleEs: "La queja que respira",
      minutes: 3,
      paragraphs: [
        { it: "There is a problem with your reservation, and your mind is writing angry speeches. Notice them rise. A complaint that breathes is different: it has facts, not fireworks. «I booked a double room two weeks ago. The system canceled it. We drove five hours.» Say the facts slowly, inside first. Anger shrinks when facts get full sentences.", es: "Hay un problema con tu reserva y tu mente está escribiendo discursos furiosos. Nota cómo suben. Una queja que respira es distinta: tiene hechos, no fuegos artificiales. «Reservé una habitación doble hace dos semanas. El sistema la canceló. Manejamos cinco horas». Di los hechos despacio, primero por dentro. La ira se encoge cuando los hechos consiguen frases completas." },
        { it: "Mental relaxation is not pretending you are not upset. It is giving your upset a job: to protect your evening, not to burn the lobby. Breathe once before each sentence at the front desk. You will ask for the manager at the same volume you would order ice cream. The calm voice, not the loud one, is the one that opens better doors.", es: "La relajación mental no es fingir que no estás molesto. Es darle a tu molestia un trabajo: proteger tu noche, no incendiar el vestíbulo. Respira una vez antes de cada frase en la recepción. Pedirás al gerente con el mismo volumen con que pedirías un helado. La voz tranquila, no la fuerte, es la que abre mejores puertas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo evitar toda queja en los viajes", "Quejarse con hechos y calma en vez de furia", "Una guía de hoteles de Las Vegas"],
        answer: 1,
        why: "El título describe una queja que respira: hechos y calma en el mostrador del hotel.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Anger is the best tool to solve problems", "A calm complaint with facts opens more doors than anger", "Hotel reservations never fail"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A complaint that breathes has facts, not fireworks", "Say the facts slowly, inside first", "Breathe once before each sentence at the front desk"],
        distractors: ["Managers only listen to guests who shout", "Ice cream solves every travel problem", "You should never mention the five-hour drive"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "There is a problem with your reservation.",
          "Your mind is writing angry speeches.",
          "Say the facts slowly, inside first.",
          "Breathe once before each sentence.",
          "The hotel pool closes at ten p.m.",
        ],
        intruder: 4,
        why: "El horario de la piscina es un dato logístico ajeno al manejo mental de la queja: es el intruso.",
      },
    },
    {
      id: "md-en-b1-05-3", theme: "meditazione",
      title: "Neon and quiet", titleEs: "Neón y quietud",
      minutes: 3,
      paragraphs: [
        { it: "Las Vegas glows outside the window: neon, music, fountains. Inside your room, silence. Meditation does not require a mountain; it requires one minute of choice. Sit by the window. Let the lights be loud. Close your eyes and follow your breath instead, the way a driver follows a quiet road at night.", es: "Las Vegas brilla fuera de la ventana: neón, música, fuentes. Dentro de tu habitación, silencio. La meditación no requiere una montaña; requiere un minuto de decisión. Siéntate junto a la ventana. Deja que las luces sean ruidosas. Cierra los ojos y sigue tu respiración, como un conductor sigue un camino tranquilo de noche." },
        { it: "The city will still be there when you open your eyes, and that is the beauty of it: you did not have to escape it to find quiet. You only had to choose your object of attention. Bright lights outside, steady breath inside. This is the whole practice, tonight and anywhere: one object, one minute, one you.", es: "La ciudad seguirá ahí cuando abras los ojos, y esa es la belleza: no tuviste que escapar de ella para encontrar la quietud. Solo tuviste que elegir tu objeto de atención. Luces brillantes afuera, respiración estable adentro. Esta es toda la práctica, esta noche y en cualquier parte: un objeto, un minuto, un tú." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de casinos de Las Vegas", "Encontrar quietud interior entre las luces de la ciudad", "Una historia sobre un conductor nocturno"],
        answer: 1,
        why: "El título opone el neón exterior a la quietud interior: meditar en la ciudad.",
      },
      sequence: {
        instr: "Ordena la práctica de la ventana:",
        events: ["You sit by the hotel window", "You let the lights be loud", "You close your eyes and follow your breath", "You find quiet without escaping the city", "You open your eyes and the city is still there"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Sit by the window and get comfortable. The neon outside is bright, and that is fine. Take a slow breath in through your nose. Let it out through your mouth. Again: in, and out. You do not need to turn the city off. You only need to turn your attention toward the breath. One object, one minute. This is your quiet inside the noise.",
        questions: [
          { q: "What do you do with the neon lights?", kind: "literal", options: ["You unplug them", "You let them be bright", "You complain about them"], answer: 1, why: "«The neon outside is bright, and that is fine»." },
          { q: "Where do you turn your attention?", kind: "inferencial", options: ["Toward the breath", "Toward the fountain show", "Toward the TV"], answer: 0, why: "«Turn your attention toward the breath»." },
          { q: "How do you breathe in?", kind: "literal", options: ["Slowly, through your nose", "Quickly, through your mouth", "You hold your breath"], answer: 0, why: "«Take a slow breath in through your nose»." },
          { q: "What is «your quiet inside the noise»?", kind: "inferencial", options: ["The calm you find without leaving the city", "A soundproof room", "A pair of headphones"], answer: 0, why: "Se infiere del cierre: la quietud no exige apagar la ciudad." },
        ],
      },
    },
  ],

  "en-cu-b1-06": [
    {
      id: "md-en-b1-06-1", theme: "qui e ora",
      title: "Monday morning, one cup", titleEs: "Lunes por la mañana, una taza",
      minutes: 2,
      paragraphs: [
        { it: "Monday morning at the office kitchen: the coffee machine hums, and gossip is already in the air. Before the news finds you, find your cup. Feel its warmth. Smell the coffee. For thirty seconds, let the cup be the only headline. The office news can wait; your morning cannot.", es: "Lunes por la mañana en la cocina de la oficina: la máquina de café zumba y el cotilleo ya está en el aire. Antes de que la noticia te encuentre, encuentra tu taza. Siente su calor. Huele el café. Durante treinta segundos, deja que la taza sea el único titular. Las noticias de la oficina pueden esperar; tu mañana no." },
        { it: "This is not rudeness; it is order. You choose what enters your attention first: a rumor about the company next door, or the simple fact of a warm cup in your hands. The here and now is made of small facts like this one. Start with them, and the big news will arrive in its right size — information, not alarm.", es: "Esto no es descortesía: es orden. Tú eliges qué entra primero en tu atención: un rumor sobre la empresa de al lado o el hecho simple de una taza caliente en tus manos. El aquí y el ahora está hecho de hechos pequeños como este. Empieza con ellos y las noticias grandes llegarán en su tamaño correcto: información, no alarma." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo hacer el mejor café de oficina", "Elegir el momento presente antes que el rumor del lunes", "Los chismes más famosos de Austin"],
        answer: 1,
        why: "El título opone la taza de café al cotilleo: elige la presencia antes que la noticia.",
      },
      quiz: [
        { q: "What hums in the kitchen?", kind: "literal", options: ["The coffee machine", "The printer", "The refrigerator"], answer: 0, why: "«The coffee machine hums»." },
        { q: "What is the right size for big news?", kind: "inferencial", options: ["Information, not alarm", "A headline on TV", "A Monday emergency"], answer: 0, why: "«The big news will arrive in its right size — information, not alarm»." },
        { q: "Why start with the cup?", kind: "critica", options: ["Because small facts put the day in order", "Because coffee is more important than people", "Because gossip is illegal"], answer: 0, why: "El texto lo llama orden: elegir qué entra primero en tu atención." },
      ],
      vf: [
        { text: "You let the cup be the only headline for thirty seconds.", value: true, why: "«Let the cup be the only headline»." },
        { text: "Starting with the cup is rude to your coworkers.", value: false, why: "El texto dice que no es descortesía, sino orden." },
        { text: "The office news can wait.", value: true, why: "«The office news can wait; your morning cannot»." },
      ],
    },
    {
      id: "md-en-b1-06-2", theme: "spiritualità",
      title: "Kind words about absent friends", titleEs: "Palabras amables sobre los ausentes",
      minutes: 3,
      paragraphs: [
        { it: "Gossip is easy because the absent person cannot answer. Almost every wisdom tradition arrives at the same door: speak about others as if they were listening — because in a way, they are. The person you describe at the coffee machine is shaped by your words, in your own mind, every single time.", es: "El cotilleo es fácil porque la persona ausente no puede responder. Casi todas las tradiciones de sabiduría llegan a la misma puerta: habla de otros como si estuvieran escuchando, porque en cierto modo lo están. La persona que describes en la máquina de café toma forma con tus palabras, en tu propia mente, cada vez." },
        { it: "Try one spiritual exercise this week: every time you are about to share office news, ask two questions. Is it true? Is it kind? News that passes both filters — «the company is moving», «she got promoted» — is safe to share. News that fails either one belongs to the trash can, not to the kitchen.", es: "Prueba un ejercicio espiritual esta semana: cada vez que estés por compartir una noticia de oficina, hazte dos preguntas. ¿Es verdad? ¿Es amable? La noticia que pasa los dos filtros —«la empresa se muda», «la ascendieron»— es segura de compartir. La que falla en cualquiera de los dos pertenece al basurero, no a la cocina." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas para cotillear sin que te descubran", "Filtrar lo que dices de los demás: verdad y amabilidad", "Una historia de ascensos en Austin"],
        answer: 1,
        why: "El título habla de palabras amables sobre quienes no están presentes: un filtro espiritual del habla.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Gossip is fine if it is funny", "Words shape people, so filter them with truth and kindness", "Offices should ban coffee machines"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["The absent person cannot answer", "Speak as if they were listening", "Ask: is it true? Is it kind?"],
        distractors: ["Good news always spreads faster than gossip", "Promotions should be kept secret forever", "Kind people never discuss work news"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Gossip is easy because the absent person cannot answer.",
          "Speak about others as if they were listening.",
          "Ask two questions: is it true, is it kind?",
          "The office kitchen has two coffee machines.",
          "News that fails either filter belongs in the trash.",
        ],
        intruder: 3,
        why: "El número de máquinas de café es un detalle logístico ajeno a la reflexión espiritual: es el intruso.",
      },
    },
    {
      id: "md-en-b1-06-3", theme: "relax mentale",
      title: "Let the rumor pass", titleEs: "Deja pasar el rumor",
      minutes: 2,
      paragraphs: [
        { it: "A rumor is a thought with a passport: it travels from desk to desk looking for a home in your mind. You do not have to host it. When «I heard they're firing people» knocks on your attention, treat it like weather in the window: visible, moving, not yours. Rumors feed on repetition, and they starve on patience.", es: "Un rumor es un pensamiento con pasaporte: viaja de escritorio en escritorio buscando un hogar en tu mente. No tienes que hospedarlo. Cuando «oí que van a despedir gente» toca tu atención, trátalo como el clima en la ventana: visible, en movimiento, no tuyo. Los rumores se alimentan de repetición y se mueren de hambre con paciencia." },
        { it: "Mental relaxation at the office is mostly this: not carrying thoughts that belong to the hallway. Let the rumor pass. If the news is real, you will hear it from a source with a name and a date. Until then, your mind has better things to hold — your work, your lunch, the tree outside the window that has been quietly growing all year.", es: "La relajación mental en la oficina es sobre todo esto: no cargar pensamientos que pertenecen al pasillo. Deja pasar el rumor. Si la noticia es real, la oirás de una fuente con nombre y fecha. Hasta entonces, tu mente tiene mejores cosas que sostener: tu trabajo, tu almuerzo, el árbol de la ventana que ha estado creciendo en silencio todo el año." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo difundir noticias rápido en la oficina", "Dejar pasar los rumores sin hospedarlos en la mente", "La vida de un árbol junto a la ventana"],
        answer: 1,
        why: "El título pide dejar pasar el rumor: higiene mental en la oficina.",
      },
      sequence: {
        instr: "Ordena el paso del rumor:",
        events: ["A rumor travels from desk to desk", "It knocks on your attention", "You treat it like weather in the window", "You let the rumor pass without hosting it", "You hold your work, your lunch and the tree instead"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Close your eyes for a moment and picture the office hallway. A rumor walks by, looking for attention. You can see it, and you can let it keep walking. Take one breath. Rumors pass; your work stays. If the news is real, it will arrive with a name and a date. Until then, return to the tree outside your window, growing quietly all year.",
        questions: [
          { q: "What does the rumor do in the hallway?", kind: "literal", options: ["It looks for attention", "It waters the plants", "It fixes the printer"], answer: 0, why: "«A rumor walks by, looking for attention»." },
          { q: "What will real news have?", kind: "inferencial", options: ["A name and a date", "A loud voice", "No source at all"], answer: 0, why: "«It will arrive with a name and a date»." },
          { q: "What is outside your window?", kind: "literal", options: ["A tree", "A billboard", "A parking lot"], answer: 0, why: "«The tree outside your window»." },
          { q: "What do you do with the rumor?", kind: "inferencial", options: ["Invite it for coffee", "Let it keep walking", "Write it down"], answer: 1, why: "«You can let it keep walking»." },
        ],
      },
    },
  ],

  "en-cu-b1-07": [
    {
      id: "md-en-b1-07-1", theme: "meditazione",
      title: "Moving boxes, quiet mind", titleEs: "Mover cajas, mente quieta",
      minutes: 2,
      paragraphs: [
        { it: "The food bank line moves: lift, check, place, repeat. Repetition is a door to meditation. After the first hour, the boxes stop being boxes and become a rhythm, and the rhythm becomes a breath. You are not thinking about your résumé or your phone. You are sorting cans, and the cans are sorting you.", es: "La línea del banco de alimentos se mueve: levantar, revisar, colocar, repetir. La repetición es una puerta a la meditación. Después de la primera hora, las cajas dejan de ser cajas y se vuelven un ritmo, y el ritmo se vuelve una respiración. Ya no piensas en tu currículum ni en tu teléfono. Estás clasificando latas, y las latas te están clasificando a ti." },
        { it: "This is meditation in action, the oldest kind there is. The hands do the work; the mind follows the hands. Somewhere between the second and third hour, a quiet arrives that the couch has never given you. Service, it turns out, is not only for the people who receive the box.", es: "Esta es la meditación en acción, la más antigua que existe. Las manos hacen el trabajo; la mente sigue a las manos. En algún punto entre la segunda y la tercera hora llega una quietud que el sofá nunca te ha dado. El servicio, resulta, no es solo para quienes reciben la caja." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de ergonomía laboral", "Meditar a través del trabajo repetitivo del voluntariado", "Cómo conseguir empleo en un almacén"],
        answer: 1,
        why: "El título une mover cajas con la mente quieta: meditación en acción.",
      },
      quiz: [
        { q: "What does the line do?", kind: "literal", options: ["Lift, check, place, repeat", "Sit, wait, sign, leave", "Talk, text, eat, nap"], answer: 0, why: "«Lift, check, place, repeat»: está literal al inicio." },
        { q: "What happens between the second and third hour?", kind: "inferencial", options: ["A quiet arrives", "Everyone goes home", "The cans disappear"], answer: 0, why: "«Somewhere between the second and third hour, a quiet arrives»." },
        { q: "Who is service for, according to the text?", kind: "critica", options: ["For those who give and those who receive", "Only for the hungry families", "Only for the volunteers"], answer: 0, why: "«Service is not only for the people who receive the box»: también es para quien da." },
      ],
      vf: [
        { text: "You think about your résumé while sorting cans.", value: false, why: "El texto dice que ya no piensas en tu currículum ni en tu teléfono." },
        { text: "The cans are sorting you.", value: true, why: "Aparece literal al cerrar el primer párrafo." },
        { text: "The couch has never given you that kind of quiet.", value: true, why: "«A quiet that the couch has never given you»." },
      ],
    },
    {
      id: "md-en-b1-07-2", theme: "qui e ora",
      title: "One can at a time", titleEs: "Una lata a la vez",
      minutes: 3,
      paragraphs: [
        { it: "Forty volunteers, one conveyor belt, thousands of cans. The mind wants to count them all, finish them all, worry about the ones still in the truck. The practice pulls you back: one can at a time. Check this label. Place this can. The mountain of donations is not yours to lift; this single can is.", es: "Cuarenta voluntarios, una banda transportadora, miles de latas. La mente quiere contarlas todas, terminarlas todas, preocuparse por las que siguen en el camión. La práctica te regresa: una lata a la vez. Revisa esta etiqueta. Coloca esta lata. La montaña de donaciones no es tuya de levantar; esta sola lata sí." },
        { it: "Here and now is not a slogan at the food bank; it is the only possible method. Attention that splits between the truck, the clock and the lunch break drops cans. Attention that stays with one can at a time builds a mountain — the same mountain, but built by forty people building it one can at a time.", es: "El aquí y el ahora no es un eslogan en el banco de alimentos: es el único método posible. La atención que se reparte entre el camión, el reloj y el descanso deja caer latas. La atención que se queda con una lata a la vez construye una montaña: la misma montaña, pero construida por cuarenta personas que la construyen una lata a la vez." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un plan logístico de almacenes", "Trabajar con plena atención: una lata a la vez", "Una crítica al desperdicio de comida"],
        answer: 1,
        why: "El título resume el método: atención completa en una sola lata cada vez.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Worry helps you finish faster", "Full attention on one can at a time is the only possible method", "Volunteers should always work alone"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["The mind wants to count them all", "This single can is yours to lift", "Split attention drops cans"],
        distractors: ["The conveyor belt moves at 50 miles per hour", "Lunch break lasts three hours", "Only strong people can volunteer"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "The mind wants to count them all.",
          "Check this label. Place this can.",
          "The mountain of donations is not yours to lift.",
          "Volunteers get free parking on Saturdays.",
          "Attention that stays with one can builds a mountain.",
        ],
        intruder: 3,
        why: "El estacionamiento gratis es un beneficio logístico ajeno a la práctica de atención plena: es el intruso.",
      },
    },
    {
      id: "md-en-b1-07-3", theme: "relax fisico",
      title: "The body that helps", titleEs: "El cuerpo que ayuda",
      minutes: 2,
      paragraphs: [
        { it: "By afternoon, your body knows it has worked: warm shoulders, honest hunger, that good weight in the legs. Volunteering is physical relaxation in disguise. Tension from sitting all week dissolves into lifting, walking and carrying. The body was built to be useful, and it relaxes most deeply when it has been useful.", es: "Por la tarde, tu cuerpo sabe que trabajó: hombros calientes, hambre honesta, ese buen peso en las piernas. El voluntariado es relajación física disfrazada. La tensión de estar sentado toda la semana se disuelve en levantar, caminar y cargar. El cuerpo fue hecho para ser útil, y se relaja más profundamente cuando ha sido útil." },
        { it: "Tonight, when you sit on the couch, notice the difference between the tiredness of a stressful day and the tiredness of a helping day. They feel nothing alike. One drains; the other settles. Let your muscles thank you the way muscles do: with heavy, sweet, earned rest.", es: "Esta noche, cuando te sientes en el sofá, nota la diferencia entre el cansancio de un día de estrés y el cansancio de un día de ayuda. No se parecen en nada. Uno desgasta; el otro se asienta. Deja que tus músculos te lo agradezcan como lo hacen los músculos: con un descanso pesado, dulce y ganado." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los riesgos del ejercicio intenso", "El buen cansancio del cuerpo después de ayudar", "Una comparación entre sofás y camas"],
        answer: 1,
        why: "El título celebra el cuerpo que trabajó: el descanso ganado tras el voluntariado.",
      },
      sequence: {
        instr: "Ordena el descanso ganado:",
        events: ["You spend the morning lifting and carrying", "Your shoulders feel warm and your legs feel heavy", "You notice the difference between two kinds of tiredness", "The helping tiredness settles instead of draining", "Your muscles rest, sweet and earned"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Notice your body after a day of helping. Your shoulders are warm. Your legs carry a good weight. This is not the tiredness of stress; it is the tiredness of use. Take a breath and let yourself sink into the couch. One more breath. Feel the rest arriving in your muscles, heavy and sweet. You earned it today.",
        questions: [
          { q: "What do your shoulders feel?", kind: "literal", options: ["Warm", "Cold", "Nothing at all"], answer: 0, why: "«Your shoulders are warm»." },
          { q: "Which tiredness is this?", kind: "inferencial", options: ["The tiredness of use", "The tiredness of stress", "The tiredness of boredom"], answer: 0, why: "«It is the tiredness of use»." },
          { q: "Where do you sink?", kind: "literal", options: ["Into the couch", "Into a cold pool", "Into a meeting"], answer: 0, why: "«Let yourself sink into the couch»." },
          { q: "How does the rest arrive?", kind: "inferencial", options: ["Heavy and sweet", "Loud and fast", "Never at all"], answer: 0, why: "«Feel the rest arriving in your muscles, heavy and sweet»." },
        ],
      },
    },
  ],

  "en-cu-b1-08": [
    {
      id: "md-en-b1-08-1", theme: "relax mentale",
      title: "Patience at the four-way stop", titleEs: "Paciencia en la intersección de cuatro paradas",
      minutes: 2,
      paragraphs: [
        { it: "Four cars, four stops, one question: who goes first? Traffic is a laboratory of patience. Somebody will hesitate; somebody will wave you through when it is not your turn. You cannot control the intersection. You can only control the four seconds between their mistake and your reaction.", es: "Cuatro autos, cuatro paradas, una pregunta: ¿quién pasa primero? El tráfico es un laboratorio de paciencia. Alguien dudará; alguien te cederá el paso cuando no es tu turno. No puedes controlar la intersección. Solo puedes controlar los cuatro segundos entre el error del otro y tu reacción." },
        { it: "Mental relaxation on the road is measured in honks not honked. Each one is a small victory of imagination: you will never know what kind of day the other driver is having. Maybe a lost job, a new baby, a long drive home. Patience is not slow driving. It is fast empathy, applied at exactly the right moment.", es: "La relajación mental en la carretera se mide en claxonazos no dados. Cada uno es una pequeña victoria de la imaginación: nunca sabrás qué clase de día tiene el otro conductor. Quizá un empleo perdido, un bebé recién nacido, un largo regreso a casa. La paciencia no es manejar lento. Es empatía rápida, aplicada justo en el momento correcto." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Las reglas de tránsito de California", "Paciencia y empatía al volante", "Cómo tocar el claxon correctamente"],
        answer: 1,
        why: "El título sitúa la paciencia en la intersección: manejo emocional, no reglamento.",
      },
      quiz: [
        { q: "What is traffic compared to?", kind: "literal", options: ["A laboratory of patience", "A race track", "A parking lot"], answer: 0, why: "«Traffic is a laboratory of patience»." },
        { q: "What can you control?", kind: "inferencial", options: ["The four seconds between their mistake and your reaction", "The other drivers", "The traffic lights"], answer: 0, why: "«You can only control the four seconds between their mistake and your reaction»." },
        { q: "What is patience, according to the text?", kind: "critica", options: ["Fast empathy at the right moment", "Slow driving in the left lane", "Never leaving home"], answer: 0, why: "«Patience is fast empathy, applied at exactly the right moment»." },
      ],
      vf: [
        { text: "Somebody will wave you through when it is not your turn.", value: true, why: "«Somebody will wave you through when it is not your turn»." },
        { text: "You will always know what kind of day the other driver is having.", value: false, why: "«You will never know what kind of day the other driver is having»." },
        { text: "Patience is slow driving.", value: false, why: "El texto dice que la paciencia no es manejar lento, sino empatía rápida." },
      ],
    },
    {
      id: "md-en-b1-08-2", theme: "meditazione",
      title: "The highway breath", titleEs: "La respiración de la carretera",
      minutes: 3,
      paragraphs: [
        { it: "Long highways have a rhythm: the hum of the wheels, the line of the road, the breath in your chest. Match them. Breathe in for four dashes of the lane line, out for four. This is driving meditation, eyes open, hands at ten and two. The road gives you a metronome; you only have to follow it.", es: "Las carreteras largas tienen un ritmo: el zumbido de las ruedas, la línea del camino, la respiración en el pecho. Hazlos coincidir. Inhala cuatro rayas de la línea del carril, exhala cuatro. Esta es la meditación al volante, con los ojos abiertos y las manos en las diez y las dos. La carretera te da un metrónomo; solo tienes que seguirlo." },
        { it: "Boredom on a long drive is really an untrained attention, jumping from billboard to clock to snack. Give it the breath instead. Drivers who breathe with the road arrive less tired, because the mind that follows one rhythm stops fighting the sixty other ones. Same highway, different driver.", es: "El aburrimiento en un viaje largo es en realidad una atención sin entrenar, que salta del anuncio al reloj y del reloj a la botana. Dale la respiración. Los conductores que respiran con la carretera llegan menos cansados, porque la mente que sigue un ritmo deja de pelearse con los otros sesenta. Misma carretera, otro conductor." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de mecánica automotriz", "Respirar con el ritmo de la carretera al manejar", "Cómo elegir la mejor estación de radio"],
        answer: 1,
        why: "El título une la respiración con la carretera: meditación al volante.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Boredom makes you a better driver", "Following one rhythm, the breath, calms the drive", "Highways should be shorter"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Breathe in for four dashes of the lane line", "The road gives you a metronome", "Drivers who breathe with the road arrive less tired"],
        distractors: ["You should close your eyes while driving", "Snacks are forbidden on road trips", "Billboards help you concentrate"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Match the rhythm of the road with your breath.",
          "Breathe in for four dashes of the lane line.",
          "The road gives you a metronome.",
          "Gas is cheaper in Nevada than in California.",
          "The mind that follows one rhythm stops fighting the others.",
        ],
        intruder: 3,
        why: "El precio de la gasolina es información práctica del viaje, ajena a la meditación: es el intruso.",
      },
    },
    {
      id: "md-en-b1-08-3", theme: "spiritualità",
      title: "The courtesy of the road", titleEs: "La cortesía de la carretera",
      minutes: 3,
      paragraphs: [
        { it: "The polite wave between two strangers at a four-way stop is a tiny sacred thing: it says «I see you, and I choose to yield». Road courtesy is a spiritual practice disguised as traffic rules. Every merge, every let-in, every thank-you wave is a small offering of respect to the shared asphalt.", es: "El saludo cortés entre dos desconocidos en una intersección de cuatro paradas es una pequeñísima cosa sagrada: dice «te veo y elijo ceder». La cortesía al volante es una práctica espiritual disfrazada de reglas de tránsito. Cada incorporación, cada espacio cedido, cada saludo de gracias es una pequeña ofrenda de respeto al asfalto compartido." },
        { it: "You will never meet most of these drivers again; that is exactly what makes the courtesy real. Kindness with an audience can be performance. Kindness inside a moving car, to a stranger you will never see, is the pure kind — quick, free, and quietly sacred in the best sense: it connects strangers into a temporary community on wheels.", es: "Nunca volverás a ver a la mayoría de esos conductores, y eso es justamente lo que hace real la cortesía. La amabilidad con público puede ser actuación. La amabilidad dentro de un auto en movimiento, hacia un desconocido que no verás jamás, es la pura: rápida, gratis y silenciosamente sagrada en el mejor sentido: conecta a desconocidos en una comunidad temporal sobre ruedas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Las multas por mala conducta al volante", "La cortesía al volante como práctica espiritual", "Cómo ahorrar gasolina en la carretera"],
        answer: 1,
        why: "El título llama espiritual a la cortesía vial: el saludo entre desconocidos como ofrenda.",
      },
      sequence: {
        instr: "Ordena el intercambio de cortesía:",
        events: ["Two strangers arrive at a four-way stop", "One driver waves the other through", "The other driver answers with a thank-you wave", "Both cars continue in opposite directions", "The intersection returns to silence"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "At the next stop sign, try the practice of the polite wave. Let somebody go first, even when it is your turn. Watch their thank-you wave in the mirror. Two strangers, one small exchange of respect, and then the road goes quiet again. This is spirituality at fifteen miles per hour: seeing the other driver, and choosing kindness.",
        questions: [
          { q: "What do you let the other driver do?", kind: "literal", options: ["Go first", "Park in your spot", "Change your radio station"], answer: 0, why: "«Let somebody go first»." },
          { q: "Where do you watch their thank-you wave?", kind: "inferencial", options: ["In the mirror", "On your phone", "In the glove box"], answer: 0, why: "«Watch their thank-you wave in the mirror»." },
          { q: "When do you let them go first?", kind: "literal", options: ["Even when it is your turn", "Only on Mondays", "Never"], answer: 0, why: "«Even when it is your turn»." },
          { q: "What is spirituality at fifteen miles per hour?", kind: "inferencial", options: ["Seeing the other driver and choosing kindness", "Driving as fast as possible", "Winning every intersection"], answer: 0, why: "«Seeing the other driver, and choosing kindness»." },
        ],
      },
    },
  ],

  "en-cu-b1-09": [
    {
      id: "md-en-b1-09-1", theme: "relax fisico",
      title: "Ears at rest", titleEs: "Oídos en descanso",
      minutes: 2,
      paragraphs: [
        { it: "Headphones on, episode playing, jaw clenched. Sound familiar? Deep listening is a physical act, and it starts with a face scan. Unclench your jaw. Let your tongue rest at the bottom of your mouth. Soften the small muscles around your eyes. Your ears are not the problem; the armored face around them is.", es: "Audífonos puestos, episodio sonando, mandíbula apretada. ¿Te suena? Escuchar profundo es un acto físico y empieza con un escaneo del rostro. Suelta la mandíbula. Deja que tu lengua descanse en la parte baja de la boca. Suaviza los pequeños músculos alrededor de los ojos. El problema no son tus oídos: es el rostro blindado que los rodea." },
        { it: "Try it now, while your podcast plays. Relax the face, and notice how the sound opens: voices get warmer, pauses get interesting. A relaxed listener hears more of the episode and skips fewer seconds of it. Physical rest is not the opposite of attention; it is the container that holds it.", es: "Pruébalo ahora, mientras suena tu pódcast. Relaja el rostro y nota cómo se abre el sonido: las voces se vuelven más cálidas, las pausas se vuelven interesantes. Un oyente relajado escucha más del episodio y salta menos segundos. El descanso físico no es lo contrario de la atención: es el recipiente que la sostiene." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una reseña de audífonos caros", "Relajar el rostro para escuchar mejor", "Los mejores pódcasts de comedia"],
        answer: 1,
        why: "El título pone los oídos en descanso: relajación física para la escucha.",
      },
      quiz: [
        { q: "Where does your tongue rest?", kind: "literal", options: ["At the bottom of your mouth", "Against your teeth", "On the roof of your mouth"], answer: 0, why: "«Let your tongue rest at the bottom of your mouth»." },
        { q: "What happens when you relax the face?", kind: "inferencial", options: ["The sound opens and voices get warmer", "The episode downloads faster", "You fall asleep immediately"], answer: 0, why: "«Notice how the sound opens: voices get warmer»." },
        { q: "What is physical rest for attention?", kind: "critica", options: ["Its container", "Its enemy", "Its replacement"], answer: 0, why: "«It is the container that holds it»: el descanso sostiene la atención." },
      ],
      vf: [
        { text: "The ears are the problem for deep listening.", value: false, why: "«Your ears are not the problem; the armored face around them is»." },
        { text: "A relaxed listener skips fewer seconds of the episode.", value: true, why: "«Hears more of the episode and skips fewer seconds of it»." },
        { text: "Deep listening is a physical act.", value: true, why: "«Deep listening is a physical act»." },
      ],
    },
    {
      id: "md-en-b1-09-2", theme: "relax mentale",
      title: "Deep listening", titleEs: "Escucha profunda",
      minutes: 3,
      paragraphs: [
        { it: "Most of us listen like we scroll: waiting for the next thing, half-holding the present one. True crime hosts know this and slow down on purpose. Deep listening is a vacation for the mind: for forty minutes, you follow one voice, one story, one question at a time. Nothing to answer, nothing to fix, nothing to scroll.", es: "La mayoría escucha como desplaza la pantalla: esperando lo siguiente, sosteniendo a medias lo presente. Los presentadores de crímenes reales lo saben y aminoran a propósito. La escucha profunda es unas vacaciones para la mente: durante cuarenta minutos sigues una voz, una historia, una pregunta a la vez. Nada que responder, nada que arreglar, nada que desplazar." },
        { it: "Here is the mental relaxation no app sells: while you listen, let the future take care of itself. The grocery list can wait until the episode ends. When your mind wanders to the errand, gently return it to the voice — the same return, a thousand times, that makes meditation meditation. Listening practice and meditation practice, it turns out, are neighbors.", es: "He aquí la relajación mental que ninguna app vende: mientras escuchas, deja que el futuro se las arregle solo. La lista del súper puede esperar a que termine el episodio. Cuando tu mente se vaya al pendiente, devuélvela con suavidad a la voz: el mismo retorno, mil veces, que convierte a la meditación en meditación. La práctica de escuchar y la de meditar, resulta, son vecinas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Publicidad de una app de pódcasts", "Escuchar sin prisa como forma de relajar la mente", "Cómo resolver crímenes reales"],
        answer: 1,
        why: "El título nombra la escucha profunda: la mente que descansa siguiendo una sola voz.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Listening is just waiting for your turn to talk", "Deep listening is a vacation for the mind, one voice at a time", "Podcasts are always better at double speed"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Most of us listen like we scroll", "Let the future take care of itself while you listen", "The return to the voice is what makes meditation meditation"],
        distractors: ["Grocery lists should be banned forever", "True crime hosts speak too slowly on purpose", "Meditation requires complete silence"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Most of us listen like we scroll.",
          "For forty minutes, you follow one voice.",
          "Nothing to answer, nothing to fix, nothing to scroll.",
          "Premium subscriptions cost five dollars a month.",
          "The return to the voice is what makes meditation.",
        ],
        intruder: 3,
        why: "El precio de la suscripción es un dato comercial ajeno a la escucha consciente: es el intruso.",
      },
    },
    {
      id: "md-en-b1-09-3", theme: "qui e ora",
      title: "The voice in your ears", titleEs: "La voz en tus oídos",
      minutes: 2,
      paragraphs: [
        { it: "Rain on the window, one earbud shared with a friend, a voice telling a story slowly. This moment will never be repeated: this episode, this rain, this exact tiredness after class. The here and now is not always dramatic. Sometimes it is just a Tuesday, a podcast and a window seat at the coffee shop.", es: "Lluvia en la ventana, un audífono compartido con una amiga, una voz contando una historia despacio. Este momento no se repetirá: este episodio, esta lluvia, este cansancio exacto después de clase. El aquí y el ahora no siempre es dramático. A veces es solo un martes, un pódcast y un asiento junto a la ventana en la cafetería." },
        { it: "Presence is the art of noticing that an ordinary hour is quietly unique. The episode will be there next year; the rain will fall again; but you, at this window, with this tea going lukewarm, exist exactly once. Stay one extra minute after the episode ends. Listen to the rain finish its own story.", es: "La presencia es el arte de notar que una hora ordinaria es silenciosamente única. El episodio estará ahí el año próximo; la lluvia volverá a caer; pero tú, en esta ventana, con este té volviéndose tibio, existes exactamente una vez. Quédate un minuto extra cuando termine el episodio. Escucha la lluvia terminar su propia historia." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una crítica de la lluvia de Chicago", "Notar lo único de un momento ordinario con un pódcast", "Cómo grabar tu propio episodio"],
        answer: 1,
        why: "El título trae la voz del episodio al aquí y ahora: presencia en un martes cualquiera.",
      },
      sequence: {
        instr: "Ordena el momento de la ventana:",
        events: ["You sit at the window seat after class", "You share one earbud with a friend", "A voice tells a story slowly while it rains", "The episode ends", "You stay one extra minute listening to the rain"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "The episode is over, but do not move yet. The rain is still telling its own story against the glass. Feel the cup in your hands, still a little warm. Notice the chair holding you, the friend beside you, the quiet of the coffee shop. Ordinary moments like this one exist exactly once. Stay for one more minute, and let the rain finish.",
        questions: [
          { q: "What is still telling its story?", kind: "literal", options: ["The rain", "The barista", "Your phone"], answer: 0, why: "«The rain is still telling its own story»." },
          { q: "How does the cup feel?", kind: "inferencial", options: ["A little warm", "Frozen", "Empty"], answer: 0, why: "«Still a little warm»." },
          { q: "How long do you stay?", kind: "literal", options: ["One more minute", "Until closing time", "All night"], answer: 0, why: "«Stay for one more minute»." },
          { q: "What do ordinary moments do?", kind: "inferencial", options: ["They exist exactly once", "They repeat every Tuesday", "They never end"], answer: 0, why: "«Ordinary moments like this one exist exactly once»." },
        ],
      },
    },
  ],

  "en-cu-b1-10": [
    {
      id: "md-en-b1-10-1", theme: "meditazione",
      title: "The walk you already take", titleEs: "La caminata que ya haces",
      minutes: 2,
      paragraphs: [
        { it: "You do not need a mountaintop to meditate this week. You need the walk to the printer, the stairs to the parking garage, the two blocks to the sandwich place. Pick one walk you already take every day and give it fully to your senses: the weight of your steps, the temperature of the air, the sounds arriving and leaving.", es: "No necesitas una cima de montaña para meditar esta semana. Necesitas la caminata a la impresora, las escaleras al estacionamiento, las dos cuadras hasta la sandwichería. Elige una caminata que ya hagas cada día y dásela por completo a tus sentidos: el peso de tus pasos, la temperatura del aire, los sonidos que llegan y se van." },
        { it: "Walking meditation is the friendliest kind: eyes open, no cushion, no bell. The trick is single-tasking. The walk to lunch is not a phone call, not a mental email, not a replay of the morning meeting. It is a walk. Do it for three days, and you will start to notice that your body loves being where you are.", es: "La meditación caminando es la más amable: ojos abiertos, sin cojín, sin campana. El truco es una sola tarea. La caminata al almuerzo no es una llamada, no es un correo mental, no es una repetición de la reunión de la mañana. Es una caminata. Hazlo tres días y empezarás a notar que a tu cuerpo le encanta estar donde estás." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Rutas de senderismo en Colorado", "Meditar en las caminatas diarias que ya haces", "Cómo comprar el calzado perfecto"],
        answer: 1,
        why: "El título habla de la caminata cotidiana convertida en meditación.",
      },
      quiz: [
        { q: "What do you give to your senses?", kind: "literal", options: ["One walk you already take", "A new treadmill", "Your lunch break"], answer: 0, why: "«Pick one walk you already take every day»." },
        { q: "What is the trick of walking meditation?", kind: "inferencial", options: ["Single-tasking", "Walking faster", "Closing your eyes"], answer: 0, why: "«The trick is single-tasking»." },
        { q: "Why is walking meditation called friendly?", kind: "critica", options: ["Because it needs no cushion or bell, just an ordinary walk", "Because it is easier than breathing", "Because friends must join you"], answer: 0, why: "«Eyes open, no cushion, no bell»: se adapta a cualquier caminata diaria." },
      ],
      vf: [
        { text: "You need a mountaintop to meditate.", value: false, why: "«You do not need a mountaintop to meditate»." },
        { text: "The walk to lunch is not a mental email.", value: true, why: "«The walk to lunch is not a phone call, not a mental email»." },
        { text: "Your body loves being where you are.", value: true, why: "Aparece literal al final del segundo párrafo." },
      ],
    },
    {
      id: "md-en-b1-10-2", theme: "spiritualità",
      title: "Your body is a home", titleEs: "Tu cuerpo es una casa",
      minutes: 3,
      paragraphs: [
        { it: "Cholesterol numbers, five extra pounds, a doctor's warning: the body becomes a list of problems. Turn the list over. This body has carried you through every single day so far. It heals your cuts, fights your colds, and keeps your heart beating while you sleep, without being asked.", es: "Números de colesterol, cinco libras de más, la advertencia de un médico: el cuerpo se vuelve una lista de problemas. Dale la vuelta a la lista. Este cuerpo te ha llevado a través de cada día hasta ahora. Sana tus cortes, pelea tus resfriados y mantiene tu corazón latiendo mientras duermes, sin que se lo pidas." },
        { it: "Gratitude for the body is not giving up on health; it is the soil where health grows. You do not renovate a house you hate. «Thank you, legs» is a strange sentence, but so is «thank you», and both work. This week, before every workout, place a hand on your chest and say nothing — or say thanks. Your body will hear you either way.", es: "La gratitud por el cuerpo no es renunciar a la salud: es el suelo donde la salud crece. No renovas una casa que odias. «Gracias, piernas» es una frase rara, pero «gracias» también lo es, y las dos funcionan. Esta semana, antes de cada entrenamiento, pon una mano en tu pecho y no digas nada, o da las gracias. Tu cuerpo te oirá de cualquier manera." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una dieta milagrosa de treinta días", "La gratitud por el cuerpo como base de la salud", "Cómo leer análisis médicos"],
        answer: 1,
        why: "El título llama casa al cuerpo: gratitud, no dieta ni diagnósticos.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["The body is a problem to fix", "Gratitude for the body is the soil where health grows", "Doctors should never give warnings"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["This body has carried you through every single day", "You do not renovate a house you hate", "Your body will hear you either way"],
        distractors: ["Workouts only work on Mondays", "Five pounds is the same as fifty", "Sleeping is bad for the heart"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "This body has carried you through every day so far.",
          "It heals your cuts and fights your colds.",
          "You do not renovate a house you hate.",
          "A gym membership in Denver costs forty dollars a month.",
          "Place a hand on your chest and say thanks.",
        ],
        intruder: 3,
        why: "El costo de la membresía es un dato comercial ajeno a la gratitud corporal: es el intruso.",
      },
    },
    {
      id: "md-en-b1-10-3", theme: "relax fisico",
      title: "Stretch like the Colorado sky", titleEs: "Estirarse como el cielo de Colorado",
      minutes: 3,
      paragraphs: [
        { it: "End of the day in Denver. Stand by the window and stretch your arms toward the ceiling, fingers wide, like you are trying to touch the famous blue sky. Hold it for five seconds. Feel the sides of your body wake up — the long muscles that sit all day at a desk and quietly protest at night.", es: "Fin del día en Denver. Quédate junto a la ventana y estira los brazos hacia el techo, con los dedos abiertos, como si intentaras tocar el famoso cielo azul. Sosténlo cinco segundos. Siente los costados de tu cuerpo despertar: los músculos largos que se sientan todo el día en un escritorio y protestan en silencio por la noche." },
        { it: "Now fold forward slowly, letting your head hang, and feel your back lengthen like dough. No bouncing, no forcing. Physical relaxation in the evening is a message to your whole system: the workday is over, the night has begun. Five stretches, five breaths, and the day closes as gently as the Colorado sun goes down.", es: "Ahora dóblate hacia adelante despacio, dejando colgar la cabeza, y siente tu espalda alargarse como masa. Sin rebotar, sin forzar. La relajación física de la noche es un mensaje para todo tu sistema: la jornada terminó, la noche comenzó. Cinco estiramientos, cinco respiraciones, y el día se cierra con la misma suavidad con que se pone el sol de Colorado." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un entrenamiento de alta intensidad", "Estiramientos suaves al final del día", "Cómo fotografiar atardeceres"],
        answer: 1,
        why: "El título invita a estirarse con la amplitud del cielo: relajación física nocturna.",
      },
      sequence: {
        instr: "Ordena la rutina nocturna:",
        events: ["You stand by the window in the evening", "You stretch your arms toward the ceiling for five seconds", "You fold forward slowly, head hanging", "You feel your back lengthen without forcing", "The day closes gently like the sunset"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Evening stretch, guided. Stand tall and reach both arms up, fingers wide, toward the sky. Hold for five seconds, breathing easily. Now fold forward slowly and let your head hang heavy. Feel your back lengthen. Stay for two breaths. Roll up gently, one bone at a time. Notice how your shoulders sit lower now. The workday is over. Good night, body.",
        questions: [
          { q: "Where do you reach your arms?", kind: "literal", options: ["Up toward the sky", "Down to your toes", "Out the window"], answer: 0, why: "«Reach both arms up, fingers wide, toward the sky»." },
          { q: "How do you roll up?", kind: "inferencial", options: ["Gently, one bone at a time", "As fast as possible", "You do not roll up"], answer: 0, why: "«Roll up gently, one bone at a time»." },
          { q: "How long do you hold the stretch?", kind: "literal", options: ["Five seconds", "One hour", "You do not hold it"], answer: 0, why: "«Hold for five seconds»." },
          { q: "How do your shoulders sit at the end?", kind: "inferencial", options: ["Lower", "Higher", "The same"], answer: 0, why: "«Notice how your shoulders sit lower now»." },
        ],
      },
    },
  ],

  "en-cu-b1-11": [
    {
      id: "md-en-b1-11-1", theme: "spiritualità",
      title: "The grandchild's question", titleEs: "La pregunta del nieto",
      minutes: 3,
      paragraphs: [
        { it: "«Grandpa, how was it when you were a kid?» The question is small; the door it opens is enormous. Listening to an elder is a spiritual practice of time: you sit inside someone's memory, the way you sit inside their kitchen. The stories about Main Street and the nickel float are not entertainment. They are inheritance.", es: "«Abuelo, ¿cómo era cuando eras niño?». La pregunta es pequeña; la puerta que abre es enorme. Escuchar a un mayor es una práctica espiritual del tiempo: te sientas dentro de la memoria de alguien, como te sientas dentro de su cocina. Las historias de Main Street y el float de níquel no son entretenimiento. Son herencia." },
        { it: "The practice has rules: no phone, no corrections, no «that's not how it was». Your job is only to keep the door open with small questions. Someday you will tell these stories to someone who never met Grandpa Joe. That is how a family becomes longer than a lifetime — someone listens, and then someone repeats.", es: "La práctica tiene reglas: sin teléfono, sin correcciones, sin «no fue así». Tu trabajo es solo mantener la puerta abierta con preguntas pequeñas. Algún día contarás estas historias a alguien que nunca conoció al abuelo Joe. Así es como una familia se vuelve más larga que una vida: alguien escucha y luego alguien repite." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Juegos de mesa para Acción de Gracias", "Escuchar las historias de los mayores como práctica espiritual", "La historia monetaria del nickel"],
        answer: 1,
        why: "El título parte de la pregunta del nieto: escuchar al abuelo como práctica de tiempo y herencia.",
      },
      quiz: [
        { q: "What does the question open?", kind: "literal", options: ["An enormous door", "A window", "A business"], answer: 0, why: "«The door it opens is enormous»." },
        { q: "What is your job in the practice?", kind: "inferencial", options: ["To keep the door open with small questions", "To correct the details", "To check the facts online"], answer: 0, why: "«Your job is only to keep the door open with small questions»." },
        { q: "How does a family become longer than a lifetime?", kind: "critica", options: ["Someone listens, and then someone repeats the stories", "By taking photos of everything", "By writing legal documents"], answer: 0, why: "«Someone listens, and then someone repeats»: la cadena de la memoria." },
      ],
      vf: [
        { text: "The stories about Main Street are entertainment.", value: false, why: "«They are not entertainment. They are inheritance»." },
        { text: "You sit inside someone's memory the way you sit inside their kitchen.", value: true, why: "El símil aparece literal en el primer párrafo." },
        { text: "The practice allows phone checks.", value: false, why: "Las reglas dicen «no phone, no corrections»." },
      ],
    },
    {
      id: "md-en-b1-11-2", theme: "qui e ora",
      title: "Memory lane is now", titleEs: "La calle de los recuerdos es ahora",
      minutes: 2,
      paragraphs: [
        { it: "Nostalgia is a warm house with two rooms. In one, you visit the drive-in and the soda fountain, and everything smells like popcorn. In the other, you notice the grandkid next to you, the fire crackling, the pie still warm on the table. The trick of a good Thanksgiving is to visit the first room and live in the second.", es: "La nostalgia es una casa cálida con dos cuartos. En uno, visitas el autocine y la fuente de sodas, y todo huele a palomitas. En el otro, notas al nieto a tu lado, el fuego crepitando, el pastel todavía tibio en la mesa. El truco de un buen Acción de Gracias es visitar el primer cuarto y vivir en el segundo." },
        { it: "Grandpa Joe knows this without knowing it. He tells the story, and then he stops telling it, and looks at the faces around the fire. The past cannot be lived in, only visited. The present, tonight, is where his family is actually sitting — and one day, a grandkid will remember this exact fire, and be nostalgic about now.", es: "El abuelo Joe lo sabe sin saberlo. Cuenta la historia, luego deja de contarla y mira los rostros alrededor del fuego. El pasado no se puede habitar, solo visitar. El presente, esta noche, es donde su familia está realmente sentada, y algún día un nieto recordará este fuego exacto y sentirá nostalgia de ahora." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los precios de los autocines en los años sesenta", "Visitar la nostalgia pero vivir el momento presente", "Cómo encender una chimenea"],
        answer: 1,
        why: "El título dice que la calle de los recuerdos es ahora: presencia frente a nostalgia.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Nostalgia is a disease to cure", "Visit the past but live in the present, where your people are", "Thanksgiving should be about old movies only"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["The trick is to visit the first room and live in the second", "The past cannot be lived in, only visited", "One day a grandkid will be nostalgic about now"],
        distractors: ["Fireplaces are dangerous on Thanksgiving", "Grandpa Joe never tells stories", "Popcorn was invented in 1990"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Nostalgia is a warm house with two rooms.",
          "You visit the drive-in and the soda fountain.",
          "You notice the grandkid next to you and the fire crackling.",
          "Drive-in tickets used to cost one dollar per car.",
          "The present is where your family is actually sitting.",
        ],
        intruder: 3,
        why: "El precio histórico de las entradas pertenece a la anécdota, no a la reflexión sobre presencia: es el intruso.",
      },
    },
    {
      id: "md-en-b1-11-3", theme: "relax mentale",
      title: "Let the past rest", titleEs: "Dejar descansar el pasado",
      minutes: 3,
      paragraphs: [
        { it: "«Those were the days,» sighs Grandpa Joe, and for a second his face travels far away. Regret and longing are heavy luggage; at seventy-nine, Joe has decided to travel light. «I miss the drive-in,» he says, «but I wouldn't trade this fire for any Friday night in 1962.» He holds the memory like a photograph: looked at, loved, put back on the shelf.", es: "«Aquellos eran los tiempos», suspira el abuelo Joe, y por un segundo su rostro viaja muy lejos. El arrepentimiento y la añoranza son equipaje pesado; a los setenta y nueve, Joe decidió viajar ligero. «Extraño el autocine», dice, «pero no cambiaría este fuego por ninguna noche de viernes de 1962». Sostiene el recuerdo como una fotografía: lo mira, lo ama y lo devuelve a la repisa." },
        { it: "Letting the past rest does not mean forgetting it. It means giving it a shelf instead of a throne. Mental relaxation, in the long run, is mostly this: carrying your memories as a photo album, not as a backpack of stones. Joe can tell the drive-in story a hundred times precisely because he does not live inside it.", es: "Dejar descansar el pasado no significa olvidarlo. Significa darle una repisa en lugar de un trono. La relajación mental, a la larga, es sobre todo esto: cargar los recuerdos como un álbum de fotos, no como una mochila de piedras. Joe puede contar la historia del autocine cien veces precisamente porque no vive dentro de ella." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una biografía completa del abuelo Joe", "Soltar el peso del pasado sin olvidar los recuerdos", "Los mejores autos de 1962"],
        answer: 1,
        why: "El título pide dejar descansar el pasado: recuerdos en la repisa, no en el trono.",
      },
      sequence: {
        instr: "Ordena el gesto de Joe con el recuerdo:",
        events: ["Joe's face travels far away for a second", "He admits he misses the drive-in", "He says he wouldn't trade this fire for 1962", "He holds the memory like a photograph", "He puts it back on the shelf and stays in the present"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Picture a shelf above the fireplace. On it, one photograph of a summer night at the drive-in. Take it down and look at it for a moment. Remember the popcorn, the speaker crackling, the stars. Now smile, and put it back on the shelf. The fire in front of you is real and warm. The people around it are alive. Stay here tonight.",
        questions: [
          { q: "What is on the shelf?", kind: "literal", options: ["A photograph of a drive-in night", "A stack of old newspapers", "A trophy from 1962"], answer: 0, why: "«One photograph of a summer night at the drive-in»." },
          { q: "What do you do with the photograph?", kind: "inferencial", options: ["Look at it, then put it back", "Throw it in the fire", "Take it home"], answer: 0, why: "«Now smile, and put it back on the shelf»." },
          { q: "What is real and warm?", kind: "literal", options: ["The fire in front of you", "The drive-in screen", "The old speaker"], answer: 0, why: "«The fire in front of you is real and warm»." },
          { q: "Where do you stay tonight?", kind: "inferencial", options: ["Here, with the people around the fire", "At the drive-in", "In 1962"], answer: 0, why: "«The people around it are alive. Stay here tonight»." },
        ],
      },
    },
  ],

  "en-cu-b1-12": [
    {
      id: "md-en-b1-12-1", theme: "relax fisico",
      title: "Ground your feet", titleEs: "Aterriza en tus pies",
      minutes: 2,
      paragraphs: [
        { it: "Two minutes before your final presentation, your energy is in the ceiling: racing thoughts, high breath, sweaty palms. Bring it down to the floor. Press both feet into the ground. Feel the four corners of each foot: heel, outer edge, ball, toes. The floor is holding you. It has been holding you all semester.", es: "Dos minutos antes de tu presentación final, tu energía está en el techo: pensamientos acelerados, respiración alta, palmas sudadas. Bájala al piso. Presiona ambos pies contra el suelo. Siente las cuatro esquinas de cada pie: talón, borde externo, metatarso, dedos. El piso te sostiene. Te ha estado sosteniendo todo el semestre." },
        { it: "Public speakers use this trick before every talk, and they call it grounding. The energy does not disappear; it drops from your spinning head into your legs, where it becomes presence. When you walk to the front of the class, walk like someone the floor is holding. The audience will not know why you look steady. You will.", es: "Los oradores usan este truco antes de cada plática, y lo llaman aterrizar la energía. La energía no desaparece: baja de la cabeza que gira hacia las piernas, donde se vuelve presencia. Cuando camines al frente de la clase, camina como alguien a quien el piso sostiene. La audiencia no sabrá por qué te ves firme. Tú sí lo sabrás." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de baile escénico", "Aterrizar la energía en los pies antes de hablar en público", "Cómo construir un escenario"],
        answer: 1,
        why: "El título lleva la energía de la cabeza a los pies: grounded antes de presentar.",
      },
      quiz: [
        { q: "Where is your energy before the presentation?", kind: "literal", options: ["In the ceiling", "In the floor", "In your résumé"], answer: 0, why: "«Your energy is in the ceiling»." },
        { q: "Where does the energy go with grounding?", kind: "inferencial", options: ["From the spinning head into the legs", "Out of the body completely", "Into the audience"], answer: 0, why: "«It drops from your spinning head into your legs»." },
        { q: "What does grounding give the speaker?", kind: "critica", options: ["Steadiness and presence", "A louder voice", "Longer presentations"], answer: 0, why: "La energía baja a las piernas, donde se vuelve presencia y firmeza." },
      ],
      vf: [
        { text: "You feel the four corners of each foot.", value: true, why: "«Feel the four corners of each foot»." },
        { text: "The energy disappears with grounding.", value: false, why: "«The energy does not disappear; it drops» hacia las piernas." },
        { text: "The audience will know exactly why you look steady.", value: false, why: "«The audience will not know why you look steady. You will»." },
      ],
    },
    {
      id: "md-en-b1-12-2", theme: "meditazione",
      title: "Two minutes of stillness", titleEs: "Dos minutos de quietud",
      minutes: 3,
      paragraphs: [
        { it: "The night before the final presentation, do not rehearse one more time. Rehearsal has done its work; now let stillness do its own. Sit in your chair for two minutes. Do nothing. No slides in your head, no imaginary audience, no «what if they ask about the numbers». Just sit, and let your mind settle like flour in water.", es: "La noche antes de la presentación final, no ensayas una vez más. El ensayo ya hizo su trabajo; ahora deja que la quietud haga el suyo. Siéntate en tu silla dos minutos. No hagas nada. Sin diapositivas en la cabeza, sin audiencia imaginaria, sin «¿y si preguntan por los números?». Solo siéntate y deja que tu mente se asiente como la harina en el agua." },
        { it: "This is the most misunderstood meditation: it looks like nothing, and it consolidates everything. The brain that rehearses all night performs worse than the brain that rehearsed well and then rested. Tomorrow your words need a quiet room inside you. Build the room tonight; the words will move in by morning.", es: "Esta es la meditación más incomprendida: parece nada y lo consolida todo. El cerebro que ensaya toda la noche rinde peor que el cerebro que ensayó bien y luego descansó. Mañana tus palabras necesitan un cuarto tranquilo dentro de ti. Construye el cuarto esta noche; las palabras se mudarán antes del amanecer." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Ensayar toda la noche antes de presentar", "La quietud de la víspera: descansar la mente después de ensayar", "Cómo diseñar diapositivas perfectas"],
        answer: 1,
        why: "El título opone dos minutos de quietud al ensayo infinito de la víspera.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Rehearsing all night is the best strategy", "Stillness the night before consolidates everything rehearsal built", "Presentations should be canceled"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Do not rehearse one more time that night", "Let your mind settle like flour in water", "Your words need a quiet room inside you"],
        distractors: ["Meditation replaces rehearsal completely", "Slides should be read word by word", "Imaginary audiences ask real questions"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Sit in your chair for two minutes.",
          "No slides in your head, no imaginary audience.",
          "Let your mind settle like flour in water.",
          "The presentation is worth forty percent of the grade.",
          "Build the quiet room tonight.",
        ],
        intruder: 3,
        why: "El porcentaje de la calificación es un dato académico ajeno a la práctica de quietud: es el intruso.",
      },
    },
    {
      id: "md-en-b1-12-3", theme: "relax mentale",
      title: "The audience is human", titleEs: "La audiencia es humana",
      minutes: 2,
      paragraphs: [
        { it: "Fear of public speaking is really fear of eyes: thirty pairs, all on you. Here is the mental shift that changes everything: those thirty people are not judges; they are guests. They came because they have to, yes — but each of them secretly hopes you do well. Nobody wants to watch a classmate fail. Everyone wants a good show.", es: "El miedo a hablar en público es en realidad miedo a los ojos: treinta pares, todos sobre ti. He aquí el giro mental que lo cambia todo: esas treinta personas no son jueces; son invitadas. Vinieron porque deben, sí, pero cada una secretamente espera que te vaya bien. Nadie quiere ver fracasar a un compañero. Todos quieren un buen espectáculo." },
        { it: "Relax your mind by relaxing your story about the room. The audience is not a wall of critics; it is a group of humans who also get nervous when they present. Look for the friendly face — every room has one — and speak to it. Then find another. By the third friendly face, you will not be performing anymore. You will be talking with people.", es: "Relaja tu mente relajando tu historia sobre el salón. La audiencia no es un muro de críticos; es un grupo de humanos que también se ponen nerviosos al presentar. Busca el rostro amable —todo salón tiene uno— y háblale. Después busca otro. Para el tercer rostro amable ya no estarás actuando. Estarás hablando con personas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo evitar presentar en público", "Cambiar la historia mental: la audiencia está de tu lado", "Los castigos por hablar mal en clase"],
        answer: 1,
        why: "El título humaniza a la audiencia: invitados que desean que te vaya bien.",
      },
      sequence: {
        instr: "Ordena el giro mental antes de presentar:",
        events: ["You fear the thirty pairs of eyes", "You change the story: the audience are guests, not judges", "You find the first friendly face and speak to it", "You find a second and a third friendly face", "You stop performing and start talking with people"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Before you walk to the front, close your eyes and picture the classroom. Thirty chairs, thirty people, thirty ordinary mornings behind each face. Every one of them hopes you do well today. Find the friendly face in your mind. Now take one breath, open your eyes, and go. Speak to the people, not to the room. They are guests, and guests want a good show.",
        questions: [
          { q: "What does every person in the room hope?", kind: "literal", options: ["That you do well", "That you fail fast", "That class ends early"], answer: 0, why: "«Every one of them hopes you do well today»." },
          { q: "What do you find in your mind before walking up?", kind: "inferencial", options: ["The friendly face", "Your slides", "A mirror"], answer: 0, why: "«Find the friendly face in your mind»." },
          { q: "How many breaths do you take?", kind: "literal", options: ["One", "Ten", "None"], answer: 0, why: "«Now take one breath»." },
          { q: "Who do you speak to?", kind: "inferencial", options: ["To the people, not to the room", "To the clock", "To the floor"], answer: 0, why: "«Speak to the people, not to the room»." },
        ],
      },
    },
  ],
};
