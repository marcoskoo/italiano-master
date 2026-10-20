import type { MindReading } from "../../cambridge-mind";

/* ═══ PT A1 · Mind readings (temáticas de conciencia) — 3 por unidade ═
   Metodología idéntica a las italianas (v9.13): 7 estrategias de
   comprensión lectora y de escucha. Textos en portugués de Portugal A1,
   traducción española a la vista. Campos `.it` = portugués (lengua de
   estudio), `.es` = español. Estrategia por índice: L1 = predict +
   quiz (lit/inf/crít) + V/F con justificación; L2 = predict + ideas +
   intruso; L3 = predict + secuencia + escucha. */

export const PT_MIND_A1: Record<string, MindReading[]> = {
  "pt-cu-a1-01": [
    {
      id: "md-pt-a1-01-1", theme: "meditazione",
      title: "A primeira respiração", titleEs: "La primera respiración",
      minutes: 2,
      paragraphs: [
        { it: "Senta-te. Fecha os olhos. Dá uma respiração lenta. Esta é a tua primeira respiração da prática. Estás aqui, e isto chega.", es: "Siéntate. Cierra los ojos. Da una respiración lenta. Esta es tu primera respiración de la práctica. Estás aquí, y esto basta." },
        { it: "A meditação é simples. Respiras para dentro, respiras para fora. A tua mente fala, e está tudo bem. Voltas à respiração. Outra vez e outra vez, como um amigo.", es: "La meditación es simple. Inhalas, exhalas. Tu mente habla, y está bien. Vuelves a la respiración. Una y otra vez, como un amigo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de yoga avanzado", "Una introducción sencilla a meditar con la respiración", "Una clase de gimnasia"],
        answer: 1,
        why: "El título «A primeira respiração» apunta a un primer acercamiento a la respiración, no a algo avanzado.",
      },
      quiz: [
        { q: "O que fazes primeiro?", kind: "literal", options: ["Corres", "Sentas-te e fechas os olhos", "Falas"], answer: 1, why: "«Senta-te. Fecha os olhos»: está literal en la primera frase." },
        { q: "O que acontece com a tua mente?", kind: "inferencial", options: ["A mente fala, e está tudo bem", "A mente fica calada imediatamente", "Paras os teus pensamentos"], answer: 0, why: "«A tua mente fala, e está tudo bem. Voltas»: se infiere que no hay que bloquear la mente." },
        { q: "Qual é a melhor ideia para este texto?", kind: "critica", options: ["A meditação é trabalho duro para atletas", "A meditação é simples: respirar e voltar", "A meditação é só para especialistas"], answer: 1, why: "La idea central del texto es la simplicidad: respirar y volver." },
      ],
      vf: [
        { text: "Dás uma respiração rápida.", value: false, why: "El texto dice «uma respiração lenta»: lenta, no rápida." },
        { text: "Está tudo bem se a tua mente fala.", value: true, why: "«A tua mente fala, e está tudo bem»." },
        { text: "Voltas à respiração muitas vezes.", value: true, why: "«Outra vez e outra vez»: una y otra vez." },
      ],
    },
    {
      id: "md-pt-a1-01-2", theme: "qui e ora",
      title: "O café está quente", titleEs: "El café está caliente",
      minutes: 2,
      paragraphs: [
        { it: "Seguras a chávena com as duas mãos. O café está quente. O cheiro é forte. Neste momento, mais nada existe: só tu, a chávena e este instante.", es: "Sostienes la taza con las dos manos. El café está caliente. El aroma es fuerte. En este momento, nada más existe: solo tú, la taza y este instante." },
        { it: "Esta é a prática do aqui e agora. Não pensas no ontem. Não te preocupas com o amanhã. O café está quente, e tu estás aqui.", es: "Esta es la práctica del aquí y el ahora. No piensas en el ayer. No te preocupas por el mañana. El café está caliente y estás aquí." },
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
          "Seguras a chávena com as duas mãos.",
          "O café está quente e o cheiro é forte.",
          "Neste momento, mais nada existe.",
          "As máquinas de café custam duzentos euros.",
          "Não te preocupas com o amanhã.",
        ],
        intruder: 3,
        why: "El precio de las máquinas no pertenece a la experiencia sensorial del momento: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["O café é barato em Portugal", "O momento presente está aqui, nas tuas mãos", "O café tem demasiada cafeína"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Seguras a chávena com as duas mãos", "O cheiro é forte", "Não pensas no ontem"],
        distractors: ["Bebes três chávenas todos os dias", "O café é do Brasil", "Pagas com cartão"],
      },
    },
    {
      id: "md-pt-a1-01-3", theme: "relax fisico",
      title: "Os ombros para baixo", titleEs: "Los hombros abajo",
      minutes: 2,
      paragraphs: [
        { it: "Olha para os teus ombros. Estão perto das orelhas? Deixa-os cair. Sente a diferença. O teu corpo diz obrigado.", es: "Mira tus hombros. ¿Están cerca de las orejas? Déjalos caer. Siente la diferencia. Tu cuerpo dice gracias." },
        { it: "Levamos o stress nos ombros o dia todo. Cinco vezes por dia, verifica os teus ombros: para baixo, suaves, relaxados. É um hábito pequeno com um grande presente.", es: "Cargamos el estrés en los hombros todo el día. Cinco veces al día, revisa tus hombros: abajo, suaves, relajados. Es un hábito pequeño con un gran regalo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ejercicio de gimnasio con pesas", "Relajar los hombros durante el día", "Una clase de natación"],
        answer: 1,
        why: "«Os ombros para baixo» sugiere soltar tensión, no ejercicio físico intenso.",
      },
      sequence: {
        instr: "Ordena los pasos del ejercicio:",
        events: [
          "Olhas para os teus ombros",
          "Reparas que estão perto das orelhas",
          "Deixas os ombros cair",
          "Sentes a diferença",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde: ¿cuántas veces al día hay que revisar los hombros?",
        audioIt: "Cinco vezes por dia, verifica os teus ombros. Para baixo, suaves, relaxados. O teu corpo diz obrigado. É um hábito pequeno com um grande presente.",
        questions: [
          { q: "Quantas vezes por dia verificas os ombros?", kind: "literal", options: ["Três", "Cinco", "Dez"], answer: 1, why: "«Cinco vezes por dia»: literal en el audio." },
          { q: "Como ficam os ombros no fim?", kind: "literal", options: ["Para baixo, suaves, relaxados", "Para cima e tensos", "Duros como pedra"], answer: 0, why: "«Para baixo, suaves, relaxados»." },
        ],
      },
    },
  ],

  "pt-cu-a1-02": [
    {
      id: "md-pt-a1-02-1", theme: "meditazione",
      title: "A respiração da família", titleEs: "La respiración de la familia",
      minutes: 2,
      paragraphs: [
        { it: "A família também respira. Quando estás zangado com um irmão, para. Respira uma vez, devagar. Depois falas.", es: "La familia también respira. Cuando estás enfadado con un hermano, para. Respira una vez, despacio. Después hablas." },
        { it: "A família é o nosso primeiro mosteiro. É fácil meditar sozinho numa montanha; o difícil é meditar à mesa, com toda a gente a falar. Começa com uma respiração antes de responder.", es: "La familia es nuestro primer monasterio. Es fácil meditar solo en una montaña; lo difícil es meditar en la mesa, con todos hablando. Empieza con una respiración antes de responder." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de montañismo", "Llevar la calma a la vida familiar", "Cómo cocinar para la familia"],
        answer: 1,
        why: "El título une «respiração» y «família»: calma en casa, no deporte ni cocina.",
      },
      quiz: [
        { q: "O que fazes antes de responder quando estás zangado?", kind: "literal", options: ["Gritas mais alto", "Paras e respiras uma vez", "Saís de casa"], answer: 1, why: "«Para. Respira uma vez, devagar. Depois falas.»" },
        { q: "Porque é a família «o nosso primeiro mosteiro»?", kind: "inferencial", options: ["Porque é fácil meditar em casa", "Porque é difícil estar calmo com toda a gente a falar", "Porque a família reza junto"], answer: 1, why: "El texto contrasta la montaña solitaria (fácil) con la mesa familiar (difícil): ahí está la práctica real." },
        { q: "Qual é a ideia principal?", kind: "critica", options: ["Meditar em família é impossível", "Uma respiração antes de responder transforma a casa", "A família nunca se zanga"], answer: 1, why: "La propuesta central: una respiración antes de responder." },
      ],
      vf: [
        { text: "É fácil meditar numa montanha solitária.", value: true, why: "«É fácil meditar sozinho numa montanha»." },
        { text: "O texto manda gritar primeiro e respirar depois.", value: false, why: "Al revés: primero respirar, después hablar." },
        { text: "O difícil é meditar à mesa com gente a falar.", value: true, why: "«o difícil é meditar à mesa, com toda a gente a falar»." },
      ],
    },
    {
      id: "md-pt-a1-02-2", theme: "spiritualità",
      title: "A mesa como altar", titleEs: "La mesa como altar",
      minutes: 3,
      paragraphs: [
        { it: "Em Portugal, o almoço de domingo é sagrado. E se a mesa fosse um altar? Colocas o pão, o azeite, a fruta. Cada gesto é lento. Cada pessoa é bem-vinda.", es: "En Portugal, el almuerzo de domingo es sagrado. ¿Y si la mesa fuera un altar? Colocas el pan, el aceite, la fruta. Cada gesto es lento. Cada persona es bienvenida." },
        { it: "As tradições não são só memória: são treino de presença. Quando a avó cozinha com calma, está a meditar. Quando a família espera por todos para comer, está a rezar — sem palavras.", es: "Las tradiciones no son solo memoria: son entrenamiento de presencia. Cuando la abuela cocina con calma, está meditando. Cuando la familia espera a todos para comer, está rezando — sin palabras." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Recetas de cocina portuguesa", "El valor espiritual de la comida en familia", "Cómo servir la mesa rápido"],
        answer: 1,
        why: "«Mesa como altar» apunta al sentido profundo de comer juntos, no a recetas.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Cada gesto é lento.",
          "Cada pessoa é bem-vinda.",
          "As tradições são treino de presença.",
          "O forno novo cozinha em dez minutos.",
          "Esperar por todos para comer é rezar sem palavras.",
        ],
        intruder: 3,
        why: "La velocidad del horno es un dato técnico ajeno al sentido espiritual de la mesa.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Cozinhar devagar é meditação", "A mesa pode ser um altar de presença", "As avós cozinham melhor"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Colocas o pão, o azeite, a fruta", "Cada gesto é lento", "As tradições são treino de presença"],
        distractors: ["O almoço dura dez minutos", "Só os avós rezam", "A mesa é de mármore"],
      },
    },
    {
      id: "md-pt-a1-02-3", theme: "relax mentale",
      title: "A mente como o rio Tejo", titleEs: "La mente como el río Tajo",
      minutes: 2,
      paragraphs: [
        { it: "A tua mente é como o Tejo: nunca para. Barcos vêm, barcos vão. Tu não és o rio; tu estás na margem a olhar.", es: "Tu mente es como el Tajo: nunca para. Barcos vienen, barcos van. Tú no eres el río; estás en la orilla mirando." },
        { it: "Os pensamentos são barcos. Alguns são bonitos; alguns são velhos e enferrujados. Todos passam. Não tens de saltar para dentro de cada um. Fica na margem. Respira. O rio continua.", es: "Los pensamientos son barcos. Algunos son bonitos; algunos son viejos y oxidados. Todos pasan. No tienes que saltar dentro de cada uno. Quédate en la orilla. Respira. El río sigue." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de barcos de Lisboa", "Observar los pensamientos sin ser arrastrado por ellos", "La contaminación del río"],
        answer: 1,
        why: "La comparación mente-rio apunta a observar los pensamientos pasar.",
      },
      sequence: {
        instr: "Ordena la metáfora del texto:",
        events: [
          "A tua mente é como o Tejo",
          "Os pensamentos são barcos que passam",
          "Ficas na margem sem saltar para dentro",
          "Respiras e o rio continua",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde: ¿qué hay que hacer cuando pasan los pensamientos-barco?",
        audioIt: "Os pensamentos são barcos. Alguns são bonitos; alguns são velhos. Todos passam. Não tens de saltar para dentro de cada um. Fica na margem. Respira. O rio continua.",
        questions: [
          { q: "O que tens de fazer com cada barco-pensamento?", kind: "literal", options: ["Saltar para dentro", "Não saltar para dentro; ficar na margem", "Afundá-lo"], answer: 1, why: "«Não tens de saltar para dentro de cada um. Fica na margem.»" },
          { q: "Os barcos-pensamentos…", kind: "literal", options: ["Passam todos", "Ficam parados", "Nunca aparecem"], answer: 0, why: "«Todos passam»." },
        ],
      },
    },
  ],

  "pt-cu-a1-03": [
    {
      id: "md-pt-a1-03-1", theme: "qui e ora",
      title: "Sete e meia da manhã", titleEs: "Siete y media de la mañana",
      minutes: 2,
      paragraphs: [
        { it: "O despertador toca às sete e meia. Neste momento, tens duas possibilidades: saltar da cama com pressa, ou acordar devagar, um minuto só para ti.", es: "El despertador suena a las 7:30. En este momento tienes dos posibilidades: saltar de la cama con prisa, o despertar despacio, un minuto solo para ti." },
        { it: "Um minuto é pouco? Um minuto é um treino. Sentes o corpo na cama. Ouves os sons da casa. Depois levantas-te, e o dia já é diferente: começou com paz, não com pressa.", es: "¿Un minuto es poco? Un minuto es un entrenamiento. Sientes el cuerpo en la cama. Oyes los sonidos de la casa. Después te levantas, y el día ya es diferente: empezó con paz, no con prisa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo llegar temprano al trabajo", "Empezar el día con un minuto de calma", "Los mejores despertadores"],
        answer: 1,
        why: "La hora del título + «possibilidades» apuntan al ritual de despertar.",
      },
      quiz: [
        { q: "Quantas possibilidades tens ao acordar?", kind: "literal", options: ["Uma", "Duas", "Sete"], answer: 1, why: "«tens duas possibilidades»." },
        { q: "O que fazes no minuto só para ti?", kind: "inferencial", options: ["Vês o telemóvel", "Sentes o corpo e ouves os sons da casa", "Planeias todo o dia"], answer: 1, why: "«Sentes o corpo na cama. Ouves os sons da casa»: presencia, no planificación." },
        { q: "Qual é a ideia principal?", kind: "critica", options: ["Um minuto de paz muda o dia inteiro", "Dormir mais é melhor", "A pressa é boa"], answer: 0, why: "«o dia já é diferente: começou com paz, não com pressa»." },
      ],
      vf: [
        { text: "O despertador toca às oito.", value: false, why: "Toca às sete e meia." },
        { text: "Um minuto é um treino.", value: true, why: "«Um minuto é um treino.»" },
        { text: "O dia começa melhor com pressa.", value: false, why: "Al revés: «começou com paz, não com pressa»." },
      ],
    },
    {
      id: "md-pt-a1-03-2", theme: "relax fisico",
      title: "A pausa do meio-dia", titleEs: "La pausa del mediodía",
      minutes: 3,
      paragraphs: [
        { it: "Ao meio-dia, para. Mesmo cinco minutos. Levanta-te da mesa, abre a janela, olha o céu. O trabalho espera; o céu também — mas o céu é maior.", es: "Al mediodía, para. Aunque sea cinco minutos. Levántate de la mesa, abre la ventana, mira el cielo. El trabajo espera; el cielo también — pero el cielo es más grande." },
        { it: "O corpo não foi feito para três horas seguidas na mesma posição. A pausa não é preguiça: é manutenção. Como o pão precisa de descansar para crescer, tu precisas de parar para continuar.", es: "El cuerpo no fue hecho para tres horas seguidas en la misma posición. La pausa no es pereza: es mantenimiento. Como el pan necesita descansar para crecer, tú necesitas parar para continuar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Recetas de pan casero", "La importancia de la pausa del mediodía", "Horarios de trabalho em Portugal"],
        answer: 1,
        why: "«A pausa do meio-dia» + la mención del trabajo apuntan al descanso laboral.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Levanta-te da mesa e abre a janela.",
          "O céu também espera — mas é maior.",
          "A pausa não é preguiça: é manutenção.",
          "O pão custa um euro na padaria.",
          "Precisas de parar para continuar.",
        ],
        intruder: 3,
        why: "El precio del pan es un dato comercial ajeno al sentido de la pausa.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Trabalhar três horas seguidas é saudável", "Parar cinco minutos é manutenção, não preguiça", "O céu é azul"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Abres a janela e olhas o céu", "O corpo não foi feito para horas na mesma posição", "O pão precisa de descansar para crescer"],
        distractors: ["A pausa dura uma hora", "Trabalhas melhor sem janelas", "O pão deixa de crescer"],
      },
    },
    {
      id: "md-pt-a1-03-3", theme: "meditazione",
      title: "Contar até dez", titleEs: "Contar hasta diez",
      minutes: 2,
      paragraphs: [
        { it: "O dia corre, o telemóvel toca, o metro está cheio. Antes de explodir, conta até dez. Não é para crianças: é para ti, agora.", es: "El día corre, el móvil suena, el metro está lleno. Antes de explotar, cuenta hasta diez. No es para niños: es para ti, ahora." },
        { it: "Um: respiras. Três: os ombros para baixo. Cinco: olhas à tua volta. Sete: o nome do que sentes. Dez: decides com calma. A raiva passa; o que dizes com raiva fica.", es: "Uno: respiras. Tres: los hombros abajo. Cinco: miras alrededor. Siete: el nombre de lo que sientes. Diez: decides con calma. La rabia pasa; lo que dices con rabia se queda." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Matemáticas básicas", "Una técnica de autocontrol en diez pasos cortos", "El horario del metro"],
        answer: 1,
        why: "«Contar até dez» como técnica ante el estrés, no aritmética.",
      },
      sequence: {
        instr: "Ordena los pasos del conteo:",
        events: [
          "Respiras",
          "Os ombros para baixo",
          "Olhas à tua volta",
          "Dizes o nome do que sentes",
          "Decides com calma",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde: ¿qué queda después de que pasa la rabia?",
        audioIt: "A raiva passa; o que dizes com raiva fica. Por isso, conta até dez. Um: respiras. Dez: decides com calma. É simples, e muda tudo.",
        questions: [
          { q: "O que fica, quando a raiva passa?", kind: "literal", options: ["As palavras ditas com raiva", "Nada", "A calma"], answer: 0, why: "«O que dizes com raiva fica»." },
          { q: "No passo dez, o que fazes?", kind: "literal", options: ["Explodes", "Decides com calma", "Fugas"], answer: 1, why: "«Dez: decides com calma»." },
        ],
      },
    },
  ],

  "pt-cu-a1-04": [
    {
      id: "md-pt-a1-04-1", theme: "qui e ora",
      title: "O café de hoje", titleEs: "El café de hoy",
      minutes: 2,
      paragraphs: [
        { it: "O café de hoje não é o café de ontem. Hoje a chávena está diferente, o som da pastelaria está diferente, tu estás diferente.", es: "El café de hoy no es el café de ayer. Hoy la taza es diferente, el sonido de la pastelería es diferente, tú eres diferente." },
        { it: "Beber o café sem provar é desperdício. Uma chávena, três minutos: cheira, bebe um gole, deixa o telemóvel na mesa. O café é uma pequena meditação com sabor.", es: "Beber el café sin saborearlo es desperdicio. Una taza, tres minutos: huele, bebe un sorbo, deja el móvil en la mesa. El café es una pequeña meditación con sabor." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los tipos de café portugueses", "Beber el café con atención plena", "El precio del café"],
        answer: 1,
        why: "«O café de hoje» + «meditação com sabor» apuntan a la atención al momento.",
      },
      quiz: [
        { q: "Onde fica o telemóvel durante o café?", kind: "literal", options: ["Na mão", "Na mesa", "No bolso"], answer: 1, why: "«deixa o telemóvel na mesa»." },
        { q: "O que significa «o café de hoje não é o de ontem»?", kind: "inferencial", options: ["A receita muda", "Cada momento é novo e único", "O café fica velho"], answer: 1, why: "La idea de impermanencia: cada experiencia es nueva." },
        { q: "Qual é a melhor definição do texto?", kind: "critica", options: ["O café é uma pequena meditação com sabor", "Beber café rápido poupa tempo", "O telemóvel combina com café"], answer: 0, why: "La frase final resume la propuesta del texto." },
      ],
      vf: [
        { text: "O café de hoje é igual ao de ontem.", value: false, why: "«O café de hoje não é o café de ontem»." },
        { text: "Beber sem provar é desperdício.", value: true, why: "«Beber o café sem provar é desperdício»." },
        { text: "O texto aconselha três minutos para a chávena.", value: true, why: "«Uma chávena, três minutos»." },
      ],
    },
    {
      id: "md-pt-a1-04-2", theme: "spiritualità",
      title: "O balcão como mosteiro", titleEs: "El mostrador como monasterio",
      minutes: 3,
      paragraphs: [
        { it: "O empregado serve cem cafés por dia. Cada cliente é único. Quando serve com atenção, o café vira oração; quando serve com pressa, o café vira só café.", es: "El camarero sirve cien cafés al día. Cada cliente es único. Cuando sirve con atención, el café se vuelve oración; cuando sirve con prisa, el café es solo café." },
        { it: "O trabalho manual tem segredos: as mãos que repetem com amor ficam sábias. Em Portugal diz-se «trabalho bem feito, alma descansada». Serve o te próximo café como se fosse o primeiro.", es: "El trabajo manual tiene secretos: las manos que repiten con amor se vuelven sabias. En Portugal se dice «trabajo bien hecho, alma descansada». Sirve tu próximo café como si fuera el primero." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo abrir una cafetería", "El sentido espiritual del trabajo repetido", "Los sueldos de los camareros"],
        answer: 1,
        why: "«Balcão como mosteiro» une trabajo y espíritu.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "O empregado serve cem cafés por dia.",
          "Cada cliente é único.",
          "Servir com atenção transforma o café em oração.",
          "As máquinas novas fazem café sozinhas.",
          "Serve o próximo café como se fosse o primeiro.",
        ],
        intruder: 3,
        why: "La automatización de las máquinas rompe la propuesta humana del texto.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["A atenção transforma o trabalho repetido", "Cem cafés por dia são demais", "As mãos ficam cansadas"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Cada cliente é único", "As mãos que repetem com amor ficam sábias", "«Trabalho bem feito, alma descansada»"],
        distractors: ["O empregado ganha pouco", "O café de máquina é melhor", "O mosteiro fica no balcão do café"],
      },
    },
    {
      id: "md-pt-a1-04-3", theme: "relax mentale",
      title: "Três minutos sem telemóvel", titleEs: "Tres minutos sin móvil",
      minutes: 2,
      paragraphs: [
        { it: "Experiência: três minutos sem telemóvel, à mesa do café. Primeiro minuto: ansiedade. Segundo minuto: olhas à volta. Terceiro minuto: o mundo aparece.", es: "Experiencia: tres minutos sin móvil, en la mesa del café. Primer minuto: ansiedad. Segundo minuto: miras alrededor. Tercer minuto: el mundo aparece." },
        { it: "Há pessoas, luz, o som da máquina, uma conversa ao lado. Nada disto é novo; o novo és tu, a olhar. O telemóvel mostra-te o mundo dos outros. A mesa mostra-te o teu.", es: "Hay personas, luz, el sonido de la máquina, una conversación al lado. Nada de esto es nuevo; lo nuevo eres tú, mirando. El móvil te enseña el mundo de los otros. La mesa te enseña el tuyo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una nueva aplicación móvil", "Un experimento de atención sin móvil", "Cómo pedir café"],
        answer: 1,
        why: "«Três minutos sem telemóvel» es claramente un experimento.",
      },
      sequence: {
        instr: "Ordena la experiencia de los tres minutos:",
        events: [
          "Primeiro minuto: ansiedade",
          "Segundo minuto: olhas à volta",
          "Terceiro minuto: o mundo aparece",
          "Descobres o teu mundo na mesa",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde: ¿qué enseña el móvil y qué enseña la mesa?",
        audioIt: "O telemóvel mostra-te o mundo dos outros. A mesa mostra-te o teu. Três minutos sem ecrã: primeiro a ansiedade, depois o mundo. Experimenta amanhã à manhã.",
        questions: [
          { q: "O que mostra o telemóvel?", kind: "literal", options: ["O mundo dos outros", "O teu mundo", "Nada"], answer: 0, why: "«O telemóvel mostra-te o mundo dos outros»." },
          { q: "Quando é que o mundo aparece?", kind: "literal", options: ["No primeiro minuto", "No terceiro minuto", "Nunca"], answer: 1, why: "«Terceiro minuto: o mundo aparece»." },
        ],
      },
    },
  ],

  "pt-cu-a1-05": [
    {
      id: "md-pt-a1-05-1", theme: "meditazione",
      title: "Comer devagar", titleEs: "Comer despacio",
      minutes: 2,
      paragraphs: [
        { it: "Na tasca, tudo corre depressa. Desafio: come o primeiro garfo devagar. Mastiga vinte vezes. Sente o sabor, o calor, a textura.", es: "En la tasca, todo corre deprisa. Desafío: come el primer tenedor despacio. Mastica veinte veces. Siente el sabor, el calor, la textura." },
        { it: "O corpo precisa de tempo para entender que comeu. Comer devagar é respeito: pelo alimento, pelo cozinheiro, por ti. Um garfo atento vale mais que dez garfos rápidos.", es: "El cuerpo necesita tiempo para entender que comió. Comer despacio es respeto: por la comida, por el cocinero, por ti. Un tenedor atento vale más que diez tenedores rápidos." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Recetas de la tasca", "Comer con atención y despacio", "La historia del garfo"],
        answer: 1,
        why: "«Comer devagar» + el desafío del primer tenedor apuntan a comer consciente.",
      },
      quiz: [
        { q: "Quantas vezes mastigas no desafio?", kind: "literal", options: ["Dez", "Vinte", "Cem"], answer: 1, why: "«Mastiga vinte vezes»." },
        { q: "Porque é comer devagar «respeito»?", kind: "inferencial", options: ["Porque é educação na mesa", "Porque honra o alimento, o cozinheiro e tu", "Porque a tasca manda"], answer: 1, why: "«pelo alimento, pelo cozinheiro, por ti»: las tres direcciones del respeto." },
        { q: "Qual é a ideia principal?", kind: "critica", options: ["Um garfo atento vale mais que dez rápidos", "Comer rápido é melhor", "A tasca é lenta"], answer: 0, why: "La frase final resume la propuesta." },
      ],
      vf: [
        { text: "O corpo precisa de tempo para entender que comeu.", value: true, why: "Está literal en el texto." },
        { text: "O desafio é comer tudo devagar.", value: false, why: "El desafío es solo el PRIMER garfo." },
        { text: "Dez garfos rápidos valem mais que um atento.", value: false, why: "Al revés: «Um garfo atento vale mais que dez garfos rápidos»." },
      ],
    },
    {
      id: "md-pt-a1-05-2", theme: "qui e ora",
      title: "A sopa ensina", titleEs: "La sopa enseña",
      minutes: 3,
      paragraphs: [
        { it: "A sopa é paciente. Legumes, água, fogo lento, tempo. Ninguém apressa uma sopa. Em Portugal, todas as refeições começam por ela: é a professora da calma.", es: "La sopa es paciente. Verduras, agua, fuego lento, tiempo. Nadie apresura una sopa. En Portugal, todas las comidas empiezan con ella: es la profesora de la calma." },
        { it: "Há coisas que o fogo rápido não coze: os sabores fundem-se devagar, como as amizades. Quando esperas pela sopa, aprendes a esperar pelo resto. A mesa ensina o que o relógio não ensina.", es: "Hay cosas que el fuego rápido no cuece: los sabores se funden despacio, como las amistades. Cuando esperas la sopa, aprendes a esperar el resto. La mesa enseña lo que el reloj no enseña." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un libro de recetas de sopa", "La paciencia que enseña cocinar y esperar", "Os horários das refeições"],
        answer: 1,
        why: "«A sopa ensina» apunta a la lección, no a la receta.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "A sopa é paciente: fogo lento, tempo.",
          "Ninguém apressa uma sopa.",
          "Os sabores fundem-se devagar, como as amizades.",
          "A sopa de micro-ondas fica pronta em três minutos.",
          "A mesa ensina o que o relógio não ensina.",
        ],
        intruder: 3,
        why: "El microondas contradice la paciencia que el texto ensalza.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["A sopa portuguesa é deliciosa", "Esperar pela sopa treina a paciência para a vida", "O fogo rápido é mais prático"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Legumes, água, fogo lento, tempo", "Os sabores fundem-se devagar", "Todas as refeições começam pela sopa"],
        distractors: ["A sopa fica pronta em três minutos", "O relógio ensina paciência", "As amizades são rápidas"],
      },
    },
    {
      id: "md-pt-a1-05-3", theme: "relax fisico",
      title: "O cheiro da cozinha", titleEs: "El olor de la cocina",
      minutes: 2,
      paragraphs: [
        { it: "Fecha os olhos no restaurante. O que ouves? Conversas, pratos, a cozinha. O que cheiras? Caldo, pão quente, café. Os sentidos são portas para o presente.", es: "Cierra los ojos en el restaurante. ¿Qué oyes? Conversaciones, platos, la cocina. ¿Qué hueles? Caldo, pan caliente, café. Los sentidos son puertas al presente." },
        { it: "A mente viaja para o ontem e o amanhã; o nariz fica sempre aqui. Usa o cheiro como âncora: três respirações com atenção ao aroma da comida. O jantar torna-se um lugar, não só uma hora.", es: "La mente viaja al ayer y al mañana; la nariz siempre se queda aquí. Usa el olor como ancla: tres respiraciones atendiendo al aroma de la comida. La cena se vuelve un lugar, no solo una hora." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Crítica de restaurantes", "Usar los sentidos (el olfato) para estar presente", "Técnicas de cocina"],
        answer: 1,
        why: "«O cheiro da cozinha» + «âncora» apuntan al olfato como práctica.",
      },
      sequence: {
        instr: "Ordena la práctica del texto:",
        events: [
          "Fecha os olhos no restaurante",
          "Ouves as conversas e os pratos",
          "Cheiras o caldo e o pão quente",
          "Três respirações com atenção ao aroma",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde: ¿qué hace la mente y qué hace la nariz?",
        audioIt: "A mente viaja para o ontem e o amanhã; o nariz fica sempre aqui. Usa o cheiro como âncora. Três respirações com atenção ao aroma, e o jantar torna-se um lugar, não só uma hora.",
        questions: [
          { q: "Para onde viaja a mente?", kind: "literal", options: ["Para o ontem e o amanhã", "Para a cozinha", "Para o futuro próximo"], answer: 0, why: "«A mente viaja para o ontem e o amanhã»." },
          { q: "Quantas respirações com atenção ao aroma?", kind: "literal", options: ["Duas", "Três", "Dez"], answer: 1, why: "«Três respirações»." },
        ],
      },
    },
  ],

  "pt-cu-a1-06": [
    {
      id: "md-pt-a1-06-1", theme: "spiritualità",
      title: "Menos roupa, mais eu", titleEs: "Menos ropa, más yo",
      minutes: 2,
      paragraphs: [
        { it: "No provador, olhas o espelho: «fica-me bem?» Outra pergunta: «preciso mesmo disto?» O armário cheio não enche a vida.", es: "En el probador, miras el espejo: «¿me queda bien?» Otra pregunta: «¿de verdad necesito esto?» El armario lleno no llena la vida." },
        { it: "As compras podem ser fome disfarçada: fome de calma, de carinho, de novidade. Antes de comprar, respira. Pergunta: «isto serve o meu corpo ou a minha ansiedade?» A resposta poupa dinheiro e paz.", es: "Las compras pueden ser hambre disfrazada: hambre de calma, de cariño, de novedad. Antes de comprar, respira. Pregunta: «¿esto sirve a mi cuerpo o a mi ansiedad?» La respuesta ahorra dinero y paz." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Tendências de moda", "Comprar con conciencia: necesidad real vs ansiedad", "Cómo ahorrar dinero"],
        answer: 1,
        why: "«Menos roupa, mais eu» apunta al consumo consciente, no a la moda.",
      },
      quiz: [
        { q: "Qual é a segunda pergunta no provador?", kind: "literal", options: ["«Fica-me bem?»", "«Preciso mesmo disto?»", "«Quanto custa?»"], answer: 1, why: "«Outra pergunta: “preciso mesmo disto?”»." },
        { q: "O que pode ser a «fome disfarçada»?", kind: "inferencial", options: ["Fome de comida", "Necessidade emocional de calma, carinho ou novidade", "Fome de exercício"], answer: 1, why: "«fome de calma, de carinho, de novidade»: necesidades emocionales." },
        { q: "Qual é a ideia principal?", kind: "critica", options: ["Comprar mais traz felicidade", "Perguntar a verdadeira necessidade poupa dinheiro e paz", "A moda é inútil"], answer: 1, why: "La frase final: «A resposta poupa dinheiro e paz»." },
      ],
      vf: [
        { text: "O armário cheio enche a vida.", value: false, why: "«O armário cheio não enche a vida»." },
        { text: "Antes de comprar, o texto manda respirar.", value: true, why: "«Antes de comprar, respira»." },
        { text: "As compras nunca escondem emoções.", value: false, why: "«As compras podem ser fome disfarçada»." },
      ],
    },
    {
      id: "md-pt-a1-06-2", theme: "relax mentale",
      title: "O espelho gentil", titleEs: "El espejo amable",
      minutes: 3,
      paragraphs: [
        { it: "Diante do espelho, a lista de defeitos começa sozinha: «as pernas, a barriga, o nariz». Exercício: diz três coisas boas. Começa pelo obrigado.", es: "Frente al espejo, la lista de defectos empieza sola: «las piernas, la barriga, la nariz». Ejercicio: di tres cosas buenas. Empieza por el gracias." },
        { it: "«Obrigado, pernas, por me levarem todos os dias. Obrigado, corpo, por respirar sem eu mandar.» O corpo é o único que está contigo desde o primeiro dia. Trata-o como tratas um amigo — não como um inimigo que se veste mal.", es: "«Gracias, piernas, por llevarme todos los días. Gracias, cuerpo, por respirar sin que yo mande.» El cuerpo es el único que está contigo desde el primer día. Trátalo como tratas a un amigo — no como a un enemigo que se viste mal." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Rutinas de belleza", "La relación amable con el propio cuerpo", "Cómo vestir bem"],
        answer: 1,
        why: "«O espelho gentil» apunta a la amabilidad con uno mismo.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Diante do espelho, a lista de defeitos começa sozinha.",
          "O exercício é dizer três coisas boas.",
          "«Obrigado, pernas, por me levarem todos os dias.»",
          "O espelho da loja amplia e ilumina melhor.",
          "Trata o corpo como tratas um amigo.",
        ],
        intruder: 3,
        why: "La calidad técnica del espejo no pertenece al ejercicio de amabilidad.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["O corpo é um inimigo", "A gratidão ao corpo muda a relação com o espelho", "Os espelhos são mágicos"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A lista de defeitos começa sozinha", "Dizer três coisas boas", "O corpo respira sem tu mandares"],
        distractors: ["O corpo precisa de roupa nova", "Os amigos criticam o corpo", "O espelho mente sempre"],
      },
    },
    {
      id: "md-pt-a1-06-3", theme: "meditazione",
      title: "Toque no tecido", titleEs: "Toca la tela",
      minutes: 2,
      paragraphs: [
        { it: "Exercício de loja: toca o tecido devagar. Frio ou quente? Leve ou pesado? Áspero ou suave? Só a mão e o tecido, mais nada.", es: "Ejercicio de tienda: toca la tela despacio. ¿Fría o cálida? ¿Ligera o pesada? ¿Áspera o suave? Solo la mano y la tela, nada más." },
        { it: "As mãos vivem no presente: não lembram ontem nem têm pressa do amanhã. Um minuto de toque ativo acalma mais que dez minutos de pensar. Prova na próxima peça de roupa. A loja vira sala de meditação.", es: "Las manos viven en el presente: no recuerdan ayer ni tienen prisa por mañana. Un minuto de tacto activo calma más que diez minutos de pensar. Prueba en la próxima prenda. La tienda se vuelve sala de meditación." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Guía de tecidos", "El tacto como meditación en la tienda", "Como lavar roupa"],
        answer: 1,
        why: "«Toque no tecido» + exercício = práctica de atención táctil.",
      },
      sequence: {
        instr: "Ordena el ejercicio del texto:",
        events: [
          "Tocas o tecido devagar",
          "Perguntas: frio ou quente?",
          "Perguntas: áspero ou suave?",
          "Um minuto só de mão e tecido",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde: ¿dónde viven las manos?",
        audioIt: "As mãos vivem no presente: não lembram ontem nem têm pressa do amanhã. Um minuto de toque ativo acalma mais que dez minutos de pensar. Prova na próxima peça de roupa.",
        questions: [
          { q: "Onde vivem as mãos?", kind: "literal", options: ["No presente", "No ontem", "No amanhã"], answer: 0, why: "«As mãos vivem no presente»." },
          { q: "O que acalma mais?", kind: "literal", options: ["Dez minutos de pensar", "Um minuto de toque ativo", "Comprar depressa"], answer: 1, why: "«Um minuto de toque ativo acalma mais que dez minutos de pensar»." },
        ],
      },
    },
  ],

  "pt-cu-a1-07": [
    {
      id: "md-pt-a1-07-1", theme: "qui e ora",
      title: "Caminhar como visita", titleEs: "Caminar como visita",
      minutes: 2,
      paragraphs: [
        { it: "Andas na mesma rua todos os dias, mas vês mesmo essa rua? Hoje, caminha como uma visita: olha para cima, para os telhados, para as varandas.", es: "Caminas por la misma calle todos los días, ¿pero de verdad ves esa calle? Hoy, camina como un visitante: mira hacia arriba, a los tejados, a los balcones." },
        { it: "Os moradores nunca olham para cima; os turistas olham sempre. A atenção transforma o caminho de sempre numa viagem. A tua cidade tem segredos para quem levanta a cabeça.", es: "Los vecinos nunca miran hacia arriba; los turistas siempre. La atención transforma el camino de siempre en un viaje. Tu ciudad tiene secretos para quien levanta la cabeza." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Guía turística de Lisboa", "Mirar lo cotidiano con ojos nuevos", "Como fotografar telhados"],
        answer: 1,
        why: "«Caminhar como visita» = mirar lo conocido como si fuera nuevo.",
      },
      quiz: [
        { q: "O que faz a visita que o morador não faz?", kind: "literal", options: ["Olha para cima", "Anda depressa", "Fala ao telefone"], answer: 0, why: "«olha para cima, para os telhados» / «Os moradores nunca olham para cima»." },
        { q: "O que transforma o caminho de sempre?", kind: "inferencial", options: ["Um mapa novo", "A atenção", "Um guia turístico"], answer: 1, why: "«A atenção transforma o caminho de sempre numa viagem»." },
        { q: "Qual é a ideia principal?", kind: "critica", options: ["É preciso viajar para descobrir", "A tua cidade tem segredos para quem levanta a cabeça", "Os turistas são melhores"], answer: 1, why: "La frase final resume la propuesta." },
      ],
      vf: [
        { text: "Andas na mesma rua todos os dias.", value: true, why: "«Andas na mesma rua todos os dias»." },
        { text: "Os moradores olham sempre para cima.", value: false, why: "«Os moradores nunca olham para cima»." },
        { text: "A atenção transforma o caminho numa viagem.", value: true, why: "Está literal en el texto." },
      ],
    },
    {
      id: "md-pt-a1-07-2", theme: "relax fisico",
      title: "A subida da Graça", titleEs: "La subida de la Graça",
      minutes: 3,
      paragraphs: [
        { it: "Lisboa tem sete colinas — e tu tens duas pernas. Na subida da Graça, o coração acelera, a respiração fica pesada. Perfeito: o corpo está vivo.", es: "Lisboa tiene siete colinas — y tú tienes dos piernas. En la subida de la Graça, el corazón acelera, la respiración se hace pesada. Perfecto: el cuerpo está vivo." },
        { it: "Em vez de amaldiçoar o desnível, usa-o: três passos com atenção à respiração, um passo com atenção aos pés. Chegas ao miradouro cansado — e cheio de vida. A cidade vista de cima é o prémio; a subida atenta é o treino.", es: "En vez de maldecir el desnivel, úsalo: tres pasos atendiendo a la respiración, un paso atendiendo a los pies. Llegas al miradouro cansado — y lleno de vida. La ciudad vista desde arriba es el premio; la subida atenta es el entrenamiento." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Horários do elétrico 28", "Caminar cuestas arriba como práctica de atención", "A história dos miradouros"],
        answer: 1,
        why: "«A subida da Graça» + treino apuntan al ejercicio consciente.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "O coração acelera na subida.",
          "A respiração fica pesada: o corpo está vivo.",
          "Três passos com atenção à respiração.",
          "O elétrico 28 demora vinte minutos até ao topo.",
          "A cidade vista de cima é o prémio.",
        ],
        intruder: 3,
        why: "El horario del elétrico es logística, no la práctica atenta de subir.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["As subidas de Lisboa são um treino de atenção", "É melhor apanhar o elétrico", "Os miradouros são turísticos"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["O coração acelera, o corpo está vivo", "Três passos com atenção à respiração", "A subida atenta é o treino"],
        distractors: ["A subida dura cinco minutos", "As colinas são um problema", "O elétrico substitui o treino"],
      },
    },
    {
      id: "md-pt-a1-07-3", theme: "meditazione",
      title: "A fila como meditação", titleEs: "La cola como meditación",
      minutes: 2,
      paragraphs: [
        { it: "Fila do autocarro, fila do correio, fila do pão. Podes esperar com raiva ou esperar a respirar. A fila não muda; tu podes mudar.", es: "Cola del autobús, cola de correos, cola del pan. Puedes esperar con rabia o esperar respirando. La cola no cambia; tú puedes cambiar." },
        { it: "Exercício: cada expiração deixa cair os ombros um milímetro. Quando chega a tua vez, chegas mais leve. As filas são o mosteiro gratuito da cidade: ninguém escolhe, todos praticam.", es: "Ejercicio: cada exhalación deja caer los hombros un milímetro. Cuando llega tu turno, llegas más ligero. Las colas son el monasterio gratuito de la ciudad: nadie las elige, todos practican." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Como evitar filas", "Convertir la espera en práctica de calma", "Os horários do correio"],
        answer: 1,
        why: "«A fila como meditação» lo dice directamente.",
      },
      sequence: {
        instr: "Ordena la práctica de la fila:",
        events: [
          "Entras na fila do pão",
          "Cada expiração deixa cair os ombros",
          "Esperas a respirar, não com raiva",
          "Chega a tua vez e chegas mais leve",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde: ¿qué son las filas para la ciudad?",
        audioIt: "As filas são o mosteiro gratuito da cidade: ninguém escolhe, todos praticam. Cada expiração deixa cair os ombros um milímetro. Quando chega a tua vez, chegas mais leve.",
        questions: [
          { q: "O que são as filas?", kind: "literal", options: ["O mosteiro gratuito da cidade", "Uma perda de tempo", "Um castigo"], answer: 0, why: "«As filas são o mosteiro gratuito da cidade»." },
          { q: "O que faz cada expiração?", kind: "literal", options: ["Deixa cair os ombros um milímetro", "Aumenta a raiva", "Acelera o tempo"], answer: 0, why: "«Cada expiração deixa cair os ombros um milímetro»." },
        ],
      },
    },
  ],

  "pt-cu-a1-08": [
    {
      id: "md-pt-a1-08-1", theme: "qui e ora",
      title: "A janela do comboio", titleEs: "La ventana del tren",
      minutes: 2,
      paragraphs: [
        { it: "No comboio para o Porto, a janela é um ecrã melhor que o telemóvel: campos, casas, o rio, o mar. Tudo passa — e tu ficas.", es: "En el tren a Oporto, la ventana es una pantalla mejor que el móvil: campos, casas, el río, el mar. Todo pasa — y tú te quedas." },
        { it: "Olhar pela janela sem fazer nada é treino raro. A paisagem muda a cada minuto; a tua atenção pode descansar em cada minuto. Chegas ao Porto com os olhos limpos — e a alma também.", es: "Mirar por la ventana sin hacer nada es un entrenamiento raro. El paisaje cambia cada minuto; tu atención puede descansar en cada minuto. Llegas a Oporto con los ojos limpios — y el alma también." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Os horários da CP", "Mirar por la ventana del tren como práctica", "Como dormir no comboio"],
        answer: 1,
        why: "«A janela do comboio» como «ecrã melhor»: la ventana como objeto de contemplación.",
      },
      quiz: [
        { q: "O que é «um ecrã melhor que o telemóvel»?", kind: "literal", options: ["A janela do comboio", "O computador portátil", "A televisão do comboio"], answer: 0, why: "«a janela é um ecrã melhor que o telemóvel»." },
        { q: "Porque é «treino raro» olhar sem fazer nada?", kind: "inferencial", options: ["Porque ninguém viaja", "Porque estamos sempre ocupados com ecrãs e tarefas", "Porque é proibido"], answer: 1, why: "Se infiere la rareza de no hacer nada en la época de pantallas y ocupación." },
        { q: "Qual é a ideia principal?", kind: "critica", options: ["A paisagem muda e a atenção descansa", "O telemóvel é inútil", "O comboio é lento"], answer: 0, why: "«A paisagem muda a cada minuto; a tua atenção pode descansar»." },
      ],
      vf: [
        { text: "Tudo passa pela janela e tu ficas.", value: true, why: "«Tudo passa — e tu ficas»." },
        { text: "Olhar pela janela é treino comum.", value: false, why: "«é treino RARO»." },
        { text: "Chegas ao Porto com a alma limpa.", value: true, why: "«com os olhos limpos — e a alma também»." },
      ],
    },
    {
      id: "md-pt-a1-08-2", theme: "spiritualità",
      title: "Partir e chegar", titleEs: "Partir y llegar",
      minutes: 3,
      paragraphs: [
        { it: "Toda a viagem tem dois rituais: partir e chegar. Na gare, despedes-te; na chegada, procuras rostos conhecidos. Entre os dois, o comboio: tempo que não é casa nem destino.", es: "Todo viaje tiene dos rituales: partir y llegar. En la estación, te despides; en la llegada, buscas rostros conocidos. Entre los dos, el tren: tiempo que no es casa ni destino." },
        { it: "Os antigos peregrinos chamavam a isto «o caminho»: o espaço sagrado entre deixar e encontrar. Não tenhas pressa de chegar. A viagem é a vida entre dois pontos — e os pontos são pequenos.", es: "Los antiguos peregrinos llamaban a esto «el camino»: el espacio sagrado entre dejar y encontrar. No tengas prisa por llegar. El viaje es la vida entre dos puntos — y los puntos son pequeños." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Bilhetes e descontos", "El valor del camino entre salir y llegar", "A história dos peregrinos"],
        answer: 1,
        why: "«Partir e chegar» apunta a los rituales del viaje, no a la logística.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Toda a viagem tem dois rituais: partir e chegar.",
          "Na gare, despedes-te.",
          "O caminho é o espaço sagrado entre deixar e encontrar.",
          "O bilhete do Alfa Pendular custa trinta euros.",
          "Não tenhas pressa de chegar.",
        ],
        intruder: 3,
        why: "El precio del bilhete es logística pura, ajena al sentido del camino.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["O caminho entre partir e chegar é sagrado", "Chegar é o único que importa", "As gares são tristes"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Na gare, despedes-te", "O comboio é tempo que não é casa nem destino", "Os pontos são pequenos"],
        distractors: ["Os peregrinos viajavam de comboio", "Partir é melhor que chegar", "O caminho dura uma hora"],
      },
    },
    {
      id: "md-pt-a1-08-3", theme: "relax mentale",
      title: "Mala leve", titleEs: "Equipaje ligero",
      minutes: 2,
      paragraphs: [
        { it: "A mala cheia pesa nos braços e na cabeça. Exercício de viagem: tira uma coisa. Depois outra. O que sobra é o necessário.", es: "La maleta llena pesa en los brazos y en la cabeza. Ejercicio de viaje: saca una cosa. Después otra. Lo que sobra es lo necesario." },
        { it: "A vida também: medos antigos, opiniões velhas, mágoas do ontem — tudo vai na mesma mala. Viaja leve: o necessário cabe sempre. Quem parte com menos, chega com mais.", es: "La vida también: miedos antiguos, opiniones viejas, penas del ayer — todo va en la misma maleta. Viaja ligero: lo necesario siempre cabe. Quien parte con menos, llega con más." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Como arrumar uma mala", "Viajar ligero como metáfora de vida", "As malas mais leves do mercado"],
        answer: 1,
        why: "«Mala leve» + a vida también: metáfora del equipaje vital.",
      },
      sequence: {
        instr: "Ordena el ejercicio de la maleta:",
        events: [
          "A mala cheia pesa nos braços e na cabeça",
          "Tiras uma coisa",
          "Tiras outra",
          "O que sobra é o necessário",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde: ¿qué viaja en la misma maleta de la vida?",
        audioIt: "A vida também é uma mala: medos antigos, opiniões velhas, mágoas do ontem — tudo vai na mesma mala. Viaja leve. Quem parte com menos, chega com mais.",
        questions: [
          { q: "O que vai na mala da vida?", kind: "literal", options: ["Roupa e sapatos", "Medos, opiniões velhas e mágoas", "Presentes"], answer: 1, why: "«medos antigos, opiniões velhas, mágoas do ontem»." },
          { q: "Quem chega com mais?", kind: "literal", options: ["Quem parte com menos", "Quem parte com mais", "Quem não viaja"], answer: 0, why: "«Quem parte com menos, chega com mais»." },
        ],
      },
    },
  ],

  "pt-cu-a1-09": [
    {
      id: "md-pt-a1-09-1", theme: "spiritualità",
      title: "A saudade", titleEs: "La saudade",
      minutes: 2,
      paragraphs: [
        { it: "Saudade: sentir a falta de algo ou de alguém — com amor. Os portugueses não fogem da saudade; cantam-na no fado, dizem-na em cada despedida.", es: "Saudade: sentir la falta de algo o de alguien — con amor. Los portugueses no huyen de la saudade; la cantan en el fado, la dicen en cada despedida." },
        { it: "A saudade dói e aquece ao mesmo tempo. É a prova de que amaste. Quem não sente saudade, não despediu; quem sente, guardou. Deixa a saudade passar como música: sente-a, não a mates.", es: "La saudade duele y calienta a la vez. Es la prueba de que amaste. Quien no siente saudade, no se despidió; quien la siente, guardó. Deja que la saudade pase como música: siéntela, no la mates." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La gramática de «saudade»", "El significado emocional de la saudade", "O fado para principiantes"],
        answer: 1,
        why: "«A saudade» como sentimiento nacional: su sentido, no su gramática.",
      },
      quiz: [
        { q: "O que é a saudade?", kind: "literal", options: ["Sentir a falta com amor", "Uma comida doce", "Uma cidade do norte"], answer: 0, why: "«sentir a falta de algo ou de alguém — com amor»." },
        { q: "Porque é a saudade «a prova de que amaste»?", kind: "inferencial", options: ["Porque dói sempre", "Porque só sente falta quem guardou amor", "Porque é obrigatória"], answer: 1, why: "«quem sente, guardou»: la falta implica el amor guardado." },
        { q: "Qual é o conselho final?", kind: "critica", options: ["Fugir da saudade", "Sentir a saudade sem a matar", "Cantar fado profissionalmente"], answer: 1, why: "«sente-a, não a mates»." },
      ],
      vf: [
        { text: "Os portugueses fogem da saudade.", value: false, why: "«Os portugueses não fogem da saudade; cantam-na»." },
        { text: "A saudade dói e aquece ao mesmo tempo.", value: true, why: "Está literal en el texto." },
        { text: "A saudade é a prova de que amaste.", value: true, why: "«É a prova de que amaste»." },
      ],
    },
    {
      id: "md-pt-a1-09-2", theme: "meditazione",
      title: "Ouvir como prática", titleEs: "Escuchar como práctica",
      minutes: 3,
      paragraphs: [
        { it: "Numa casa de fado, o silêncio é sagrado. Ouvir é a prática mais difícil e mais simples: não falar, não julgar, não preparar a resposta. Só receber.", es: "En una casa de fado, el silencio es sagrado. Escuchar es la práctica más difícil y más simple: no hablar, no juzgar, no preparar la respuesta. Solo recibir." },
        { it: "Prova com a próxima canção — ou com a próxima pessoa. Três minutos de ouvir sem interromper. O fado ensina: quando a voz para, o silêncio também é música. Quem ouve bem, ama bem.", es: "Prueba con la próxima canción — o con la próxima persona. Tres minutos de escuchar sin interrumpir. El fado enseña: cuando la voz para, el silencio también es música. Quien escucha bien, ama bien." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["A história do fado", "Escuchar de verdad como práctica", "Como cantar fado"],
        answer: 1,
        why: "«Ouvir como prática»: el foco es la escucha, no la música en sí.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Ouvir é não falar, não julgar, não preparar a resposta.",
          "Só receber.",
          "Três minutos de ouvir sem interromper.",
          "O fado nasceu em Lisboa no século dezanove.",
          "Quando a voz para, o silêncio também é música.",
        ],
        intruder: 3,
        why: "El dato histórico del fado no pertenece a la práctica de escuchar.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Ouvir bem é amar bem", "O fado é antigo", "O silêncio é obrigatório por lei"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Não julgar nem preparar a resposta", "Três minutos de ouvir sem interromper", "O silêncio também é música"],
        distractors: ["Ouvir é fácil", "O fado canta-se em inglês", "Responder depressa é bom"],
      },
    },
    {
      id: "md-pt-a1-09-3", theme: "relax fisico",
      title: "Dançar na cozinha", titleEs: "Bailar en la cocina",
      minutes: 2,
      paragraphs: [
        { it: "Não precisas de palco. A cozinha chega. Põe uma canção — fado, pimba, o que for — e mexe o corpo enquanto a sopa ferve.", es: "No necesitas escenario. La cocina basta. Pon una canción — fado, pimba, lo que sea — y mueve el cuerpo mientras la sopa hierve." },
        { it: "O corpo que dança libera o que a boca não diz. Três minutos de movimento valem por uma conversa difícil. Ninguém está a olhar; e mesmo que estivessem, dançava igual.", es: "El cuerpo que baila libera lo que la boca no dice. Tres minutos de movimiento valen por una conversación difícil. Nadie está mirando; y aunque miraran, bailaba igual." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Aulas de dança", "Bailar libremente en casa como liberación", "Receitas de sopa"],
        answer: 1,
        why: "«Dançar na cozinha» = baile doméstico y libre.",
      },
      sequence: {
        instr: "Ordena la práctica del texto:",
        events: [
          "Pões uma canção na cozinha",
          "Mexes o corpo enquanto a sopa ferve",
          "O corpo libera o que a boca não diz",
          "Três minutos valem por uma conversa difícil",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde: ¿qué libera el cuerpo que baila?",
        audioIt: "O corpo que dança libera o que a boca não diz. Três minutos de movimento valem por uma conversa difícil. Ninguém está a olhar; e mesmo que estivessem, dançava igual.",
        questions: [
          { q: "O que o corpo que dança libera?", kind: "literal", options: ["O que a boca não diz", "Gases", "O jantar"], answer: 0, why: "«libera o que a boca não diz»." },
          { q: "Quanto valem três minutos de movimento?", kind: "literal", options: ["Nada", "Uma conversa difícil", "Três euros"], answer: 1, why: "«valem por uma conversa difícil»." },
        ],
      },
    },
  ],

  "pt-cu-a1-10": [
    {
      id: "md-pt-a1-10-1", theme: "qui e ora",
      title: "Casa limpa, mente clara", titleEs: "Casa limpia, mente clara",
      minutes: 2,
      paragraphs: [
        { it: "Arrumar a casa também arruma a cabeça. Começa pelo espaçinho: uma gaveta, uma prateleira. O exterior e o interior conversam.", es: "Ordenar la casa también ordena la cabeza. Empieza por lo pequeño: un cajón, un estante. El exterior y el interior conversan." },
        { it: "Quando limpas com atenção, cada objeto pergunta: «ficas comigo?» Alguns dizem adeus, e está bem. O espaço que sobra é espaço para respirar. Uma gaveta arrumada é um pensamento arrumado.", es: "Cuando limpias con atención, cada objeto pregunta: «¿te quedas conmigo?» Algunos se despiden, y está bien. El espacio que sobra es espacio para respirar. Un cajón ordenado es un pensamiento ordenado." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Servicios de limpieza", "Ordenar la casa como práctica mental", "O móveis da moda"],
        answer: 1,
        why: "«Casa limpa, mente clara» une orden exterior e interior.",
      },
      quiz: [
        { q: "Por onde começas?", kind: "literal", options: ["Pela casa toda", "Por uma gaveta ou prateleira", "Pelo quintal"], answer: 1, why: "«Começa pelo espaçinho: uma gaveta, uma prateleira»." },
        { q: "O que pergunta cada objeto?", kind: "inferencial", options: ["«Quanto custo?»", "«Ficas comigo?»", "«Onde estou?»"], answer: 1, why: "«cada objeto pergunta: “ficas comigo?”»." },
        { q: "O que é «uma gaveta arrumada»?", kind: "critica", options: ["Um pensamento arrumado", "Uma perda de tempo", "Um presente para a casa"], answer: 0, why: "La frase final: «Uma gaveta arrumada é um pensamento arrumado»." },
      ],
      vf: [
        { text: "Arrumar a casa arruma a cabeça.", value: true, why: "«Arrumar a casa também arruma a cabeça»." },
        { text: "Todos os objetos têm de ficar.", value: false, why: "«Alguns dizem adeus, e está bem»." },
        { text: "O espaço que sobra é para respirar.", value: true, why: "Está literal en el texto." },
      ],
    },
    {
      id: "md-pt-a1-10-2", theme: "relax mentale",
      title: "A janela das sete", titleEs: "La ventana de las siete",
      minutes: 3,
      paragraphs: [
        { it: "Às sete da tarde, o sol entra pela janela da sala e pinta a parede. Este espetáculo é grátis e acontece todos os dias — para quem olha.", es: "A las siete de la tarde, el sol entra por la ventana del salón y pinta la pared. Este espectáculo es gratis y sucede todos los días — para quien mira." },
        { it: "Chama-se hora dourada. A luz atravessa o vidro, os azulejos brilham, e por cinco minutos a casa é outra. Pára. Não fotografies. Os olhos guardam melhor que as câmaras.", es: "Se llama hora dorada. La luz atraviesa el vidrio, los azulejos brillan, y por cinco minutos la casa es otra. Para. No fotografíes. Los ojos guardan mejor que las cámaras." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Fotografía de interiores", "Contemplar la luz dorada del atardecer en casa", "Como limpar janelas"],
        answer: 1,
        why: "«A janela das sete» + luz del sol = contemplación de la hora dorada.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "O sol entra pela janela e pinta a parede.",
          "O espetáculo é grátis e acontece todos os dias.",
          "A luz atravessa o vidro e os azulejos brilham.",
          "As cortinas novas bloqueiam melhor a luz.",
          "Os olhos guardam melhor que as câmaras.",
        ],
        intruder: 3,
        why: "Las cortinas que bloquean la luz contradicen la contemplación del texto.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["A hora dourada é um espetáculo grátis para quem olha", "É preciso comprar cortinas", "Fotografar é a melhor forma de guardar"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["O sol pinta a parede", "A casa parece outra por cinco minutos", "Não fotografies: os olhos guardam melhor"],
        distractors: ["A hora dourada dura uma hora", "Os azulejos são caros", "A câmara guarda melhor"],
      },
    },
    {
      id: "md-pt-a1-10-3", theme: "meditazione",
      title: "O canto dos azulejos", titleEs: "El canto de los azulejos",
      minutes: 2,
      paragraphs: [
        { it: "Os azulejos da cozinha têm cem anos. Alguém os pintou, alguém os colocou, alguém os limpou durante gerações. Hoje, olha-os durante um minuto.", es: "Los azulejos de la cocina tienen cien años. Alguien los pintó, alguien los colocó, alguien los limpió durante generaciones. Hoy, míralos durante un minuto." },
        { it: "Cada casa carrega mãos antigas. Sentir isso é gratidão sem palavras: a parede também é família. Quando cozinhas, cozinhas sobre histórias. Fervem juntas.", es: "Cada casa carga manos antiguas. Sentir eso es gratitud sin palabras: la pared también es familia. Cuando cocinas, cocinas sobre historias. Hierven juntas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["A história dos azulejos", "Sentir la historia y la gratitud en la propia casa", "Como limpar azulejos"],
        answer: 1,
        why: "«O canto dos azulejos» apunta a la contemplación, no a la técnica.",
      },
      sequence: {
        instr: "Ordena la reflexión del texto:",
        events: [
          "Os azulejos têm cem anos",
          "Alguém os pintou, colocou e limpou",
          "Olhas-os durante um minuto",
          "A parede também é família",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde: ¿qué hierven juntas?",
        audioIt: "Cada casa carrega mãos antigas. A parede também é família. Quando cozinhas, cozinhas sobre histórias. Fervem juntas.",
        questions: [
          { q: "O que carrega cada casa?", kind: "literal", options: ["Mãos antigas", "Móveis novos", "Problemas"], answer: 0, why: "«Cada casa carrega mãos antigas»." },
          { q: "O que ferve junto?", kind: "literal", options: ["A sopa e o arroz", "A comida e as histórias", "A água e o vinho"], answer: 1, why: "«cozinhas sobre histórias. Fervem juntas»." },
        ],
      },
    },
  ],

  "pt-cu-a1-11": [
    {
      id: "md-pt-a1-11-1", theme: "spiritualità",
      title: "Abençoar o alimento", titleEs: "Bendecir el alimento",
      minutes: 2,
      paragraphs: [
        { it: "Antes de comer, um segundo de gratidão: pelo sol que amadureceu o tomate, pela terra, pelas mãos que apanharam. Não precisas de rezar — basta reconhecer.", es: "Antes de comer, un segundo de gratitud: por el sol que maduró el tomate, por la tierra, por las manos que lo recogieron. No necesitas rezar — basta reconocer." },
        { it: "A comida é um milagre comum: mil fatores se juntaram para chegar ao teu prato. Quando reconheces, comes diferente: mais devagar, com mais gosto. Gratução é o tempero que não se compra.", es: "La comida es un milagro común: mil factores se juntaron para llegar a tu plato. Cuando reconoces, comes diferente: más despacio, con más gusto. La gratitud es el condimento que no se compra." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Rezas obrigatórias", "La gratitud antes de comer", "O temperos portugueses"],
        answer: 1,
        why: "«Abençoar o alimento» = gratitud, no religión formal.",
      },
      quiz: [
        { q: "O que basta, em vez de rezar?", kind: "literal", options: ["Cantar", "Reconhecer", "Cozinhar"], answer: 1, why: "«Não precisas de rezar — basta reconhecer»." },
        { q: "Porque é a comida «um milagre comum»?", kind: "inferencial", options: ["Porque é barata", "Porque mil fatores se juntaram para chegar ao prato", "Porque aparece na mesa"], answer: 1, why: "«mil fatores se juntaram para chegar ao teu prato»." },
        { q: "O que é «o tempero que não se compra»?", kind: "critica", options: ["A gratidão", "O sal grosso", "O azeite"], answer: 0, why: "«Gratução é o tempero que não se compra» — la gratitud." },
      ],
      vf: [
        { text: "Precisas de rezar antes de comer.", value: false, why: "«Não precisas de rezar — basta reconhecer»." },
        { text: "Quem reconhece, come mais devagar.", value: true, why: "«comes diferente: mais devagar, com mais gosto»." },
        { text: "A gratidão é um tempero caro.", value: false, why: "É o tempero que NÃO se compra." },
      ],
    },
    {
      id: "md-pt-a1-11-2", theme: "qui e ora",
      title: "O mercado dos sentidos", titleEs: "El mercado de los sentidos",
      minutes: 3,
      paragraphs: [
        { it: "O mercado é um templo de sentidos: o vermelho dos tomates, o cheiro do pão, a voz da peixeira, o fresco da fruta na mão. Tudo ao mesmo tempo, tudo à vista.", es: "El mercado es un templo de sentidos: el rojo de los tomates, el olor del pan, la voz de la pescadera, el frescor de la fruta en la mano. Todo a la vez, todo a la vista." },
        { it: "Exercício: escolhe a fruta como meditação. Toca três pêssegos. Cheira um. Decide com calma. Não é sobre a fruta — é sobre a atenção. Levas para casa um saco de comida e uma mente mais presente.", es: "Ejercicio: elige la fruta como meditación. Toca tres melocotones. Huele uno. Decide con calma. No va de la fruta — va de la atención. Llevas a casa una bolsa de comida y una mente más presente." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Precos do mercado", "Los sentidos como puerta al presente en el mercado", "Como escolher pêssegos maduros"],
        answer: 1,
        why: "«O mercado dos sentidos» + meditación: la práctica atenta.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "O mercado é um templo de sentidos.",
          "O vermelho dos tomates, o cheiro do pão, a voz da peixeira.",
          "Tocas três pêssegos e cheiras um.",
          "O estacionamento do mercado é gratuito ao sábado.",
          "Levas uma mente mais presente para casa.",
        ],
        intruder: 3,
        why: "El aparcamiento es logística, no la experiencia sensorial del mercado.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Escolher fruta com atenção treina a presença", "O mercado é barato", "Os pêssegos são a melhor fruta"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["O mercado é um templo de sentidos", "Tocas três pêssegos e cheiras um", "Não é sobre a fruta — é sobre a atenção"],
        distractors: ["A fruta do mercado é mais cara", "Só se compram pêssegos", "O mercado abre às dez"],
      },
    },
    {
      id: "md-pt-a1-11-3", theme: "relax fisico",
      title: "O peso dos sacos", titleEs: "El peso de las bolsas",
      minutes: 2,
      paragraphs: [
        { it: "Voltas do mercado com dois sacos pesados. Em vez de correr, caminha devagar. O peso treina o corpo; a caminhada treina a paciência.", es: "Vuelves del mercado con dos bolsas pesadas. En vez de correr, camina despacio. El peso entrena el cuerpo; la caminata entrena la paciencia." },
        { it: "Sente o peso nas mãos, os passos no chão, o ar nos pulmões. Vais a pé, como se fosse uma peregrinação pequena: da praça à mesa. Trinta minutos de vida simples.", es: "Siente el peso en las manos, los pasos en el suelo, el aire en los pulmones. Vas a pie, como en una pequeña peregrinación: de la plaza a la mesa. Treinta minutos de vida simple." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Como carregar mais peso", "Caminar con las bolsas como práctica", "Os sacos reutilizáveis"],
        answer: 1,
        why: "«O peso dos sacos» + peregrinación pequeña: la caminata consciente.",
      },
      sequence: {
        instr: "Ordena la caminata del texto:",
        events: [
          "Voltas do mercado com dois sacos",
          "Caminhas devagar em vez de correr",
          "Sentes o peso nas mãos e os passos no chão",
          "Chegas à mesa: uma peregrinação pequena",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde: ¿qué entrenan el peso y la caminata?",
        audioIt: "O peso treina o corpo; a caminhada treina a paciência. Sente o peso nas mãos, os passos no chão, o ar nos pulmões. Da praça à mesa: uma peregrinação pequena.",
        questions: [
          { q: "O que treina o peso?", kind: "literal", options: ["O corpo", "A paciência", "A memória"], answer: 0, why: "«O peso treina o corpo»." },
          { q: "O que treina a caminhada?", kind: "literal", options: ["O corpo", "A paciência", "A força"], answer: 1, why: "«a caminhada treina a paciência»." },
        ],
      },
    },
  ],

  "pt-cu-a1-12": [
    {
      id: "md-pt-a1-12-1", theme: "spiritualità",
      title: "O rio não tem pressa", titleEs: "El río no tiene prisa",
      minutes: 2,
      paragraphs: [
        { it: "O Douro desagua devagar, como sempre desaguou. Em frente a ele, os teus problemas medem-se melhor: pequenos, como barcos rabelo.", es: "El Douro desemboca despacio, como siempre desembocó. Frente a él, tus problemas se miden mejor: pequeños, como barcos rabelo." },
        { it: "As cidades ensinam pressa; os rios ensinam tempo. Senta-te na margem cinco minutos: o rio não te cura, mas ordena. O que parecia urgente afrouxa; o que é importante aparece.", es: "Las ciudades enseñan prisa; los ríos enseñan tiempo. Siéntate en la orilla cinco minutos: el río no te cura, pero ordena. Lo que parecía urgente afloja; lo que es importante aparece." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["A geografia do Douro", "Contemplar el río para ordenar la vida", "Barcos de turismo"],
        answer: 1,
        why: "«O rio não tem pressa» apunta a la lección del tiempo del río.",
      },
      quiz: [
        { q: "O que ensinam os rios?", kind: "literal", options: ["Pressa", "Tempo", "Navegação"], answer: 1, why: "«as cidades ensinam pressa; os rios ensinam tempo»." },
        { q: "O que faz o rio contigo?", kind: "inferencial", options: ["Cura tudo", "Ordena os pensamentos", "Aumenta a pressa"], answer: 1, why: "«o rio não te cura, mas ordena»." },
        { q: "O que acontece com o urgente?", kind: "critica", options: ["Afrouxa: o importante aparece", "Fica urgente para sempre", "Desaparece todo"], answer: 0, why: "«O que parecia urgente afrouxa; o que é importante aparece»." },
      ],
      vf: [
        { text: "O Douro desagua devagar.", value: true, why: "«O Douro desagua devagar, como sempre desaguou»." },
        { text: "O rio cura todos os problemas.", value: false, why: "«o rio não te cura, mas ordena»." },
        { text: "Cinco minutos na margem bastam para ordenar.", value: true, why: "«Senta-te na margem cinco minutos»." },
      ],
    },
    {
      id: "md-pt-a1-12-2", theme: "qui e ora",
      title: "A última tarde", titleEs: "La última tarde",
      minutes: 3,
      paragraphs: [
        { it: "Última tarde no Porto. O comboio parte às dezoito. Em vez de correr para ver tudo, escolhe uma coisa: a ponte, a Ribeira, ou um café com vista.", es: "Última tarde en Oporto. El tren sale a las 18:00. En vez de correr para verlo todo, elige una cosa: el puente, la Ribeira, o un café con vistas." },
        { it: "Uma coisa feita com atenção vale mais que dez feitas com pressa. A cidade não foge: fica aqui, à tua espera. A despedida também é viagem — e as melhores despedidas são lentas.", es: "Una cosa hecha con atención vale más que diez hechas con prisa. La ciudad no se escapa: se queda aquí, esperándote. La despedida también es viaje — y las mejores despedidas son lentas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Horários da CP", "Cómo despedirse de un lugar con calma", "Os melhores cafés do Porto"],
        answer: 1,
        why: "«A última tarde» + despedida lenta: el cierre consciente del viaje.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Escolhe uma coisa para a última tarde.",
          "Uma coisa com atenção vale mais que dez com pressa.",
          "A cidade não foge: fica à tua espera.",
          "O comboio para Madrid parte às dezanove.",
          "As melhores despedidas são lentas.",
        ],
        intruder: 3,
        why: "El horario del comboio a Madrid es logística ajena a la despedida atenta.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Ver tudo antes de partir", "Uma coisa com atenção vale mais que dez com pressa", "As despedidas são tristes"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Escolhe uma coisa: ponte, Ribeira ou café", "A cidade fica à tua espera", "As melhores despedidas são lentas"],
        distractors: ["Corres para ver tudo", "O comboio parte de madrugada", "A despedida é rápida"],
      },
    },
    {
      id: "md-pt-a1-12-3", theme: "meditazione",
      title: "Voltar a casa", titleEs: "Volver a casa",
      minutes: 2,
      paragraphs: [
        { it: "O comboio de volta é diferente: já não és quem chegou. Levas o rio nos olhos, o molho picante na memória, uma palavra nova na boca.", es: "El tren de vuelta es diferente: ya no eres quien llegó. Llevas el río en los ojos, la salsa picante en la memoria, una palabra nueva en la boca." },
        { it: "Viajar muda; voltar integra. Deixa a viagem assentar: três dias sem contar a toda a gente. Guarda um pouco só para ti. Quem digere bem as viagens, viaja duas vezes.", es: "Viajar cambia; volver integra. Deja que el viaje se asiente: tres días sin contárselo a todo el mundo. Guarda un poco solo para ti. Quien digiere bien los viajes, viaja dos veces." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Bilhetes de volta", "Integrar lo vivido al volver de viaje", "Como dormir no comboio"],
        answer: 1,
        why: "«Voltar a casa» + integrar: la digestión del viaje.",
      },
      sequence: {
        instr: "Ordena la vuelta del texto:",
        events: [
          "O comboio de volta: já não és quem chegou",
          "Levas o rio nos olhos e uma palavra nova",
          "Deixas a viagem assentar três dias",
          "Guardas um pouco só para ti",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde: ¿cuántas veces viaja quien digiere bien?",
        audioIt: "Viajar muda; voltar integra. Deixa a viagem assentar: três dias sem contar a toda a gente. Guarda um pouco só para ti. Quem digere bem as viagens, viaja duas vezes.",
        questions: [
          { q: "Quantas vezes viaja quem digere bem?", kind: "literal", options: ["Uma", "Duas", "Nenhuma"], answer: 1, why: "«viaja duas vezes»." },
          { q: "Quanto tempo deixas a viagem assentar?", kind: "literal", options: ["Três dias", "Uma semana", "Uma hora"], answer: 0, why: "«três dias sem contar a toda a gente»." },
        ],
      },
    },
  ],
};
