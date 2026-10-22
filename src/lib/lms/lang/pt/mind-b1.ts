import type { MindReading } from "../../cambridge-mind";

/* ═══ PT B1 · Mind readings (temáticas de conciencia) — 3 por unidade ═
   Metodología idéntica a las italianas (v9.13): 7 estrategias de
   comprensión lectora y de escucha. Textos en portugués europeo B1,
   traducción española a la vista. Campos `.it` = portugués (lengua de
   estudio), `.es` = español. Estrategia por índice: L1 = predict +
   quiz (lit/inf/crít) + V/F con justificación; L2 = predict + ideas +
   intruso; L3 = predict + secuencia + escucha. */

export const PT_MIND_B1: Record<string, MindReading[]> = {
  "pt-cu-b1-01": [
    {
      id: "md-pt-b1-01-1", theme: "meditazione",
      title: "A respiração do viajante", titleEs: "La respiración del viajero",
      minutes: 2,
      paragraphs: [
        { it: "Chegas a uma cidade nova e o corpo chega contigo, cansado de comboios e de malas. Antes de sair do quarto, senta-te na beira da cama. Três respirações lentas: inspira pelo nariz, deixa o ar descer até à barriga, solta devagar.", es: "Llegas a una ciudad nueva y el cuerpo llega contigo, cansado de trenes y de maletas. Antes de salir de la habitación, siéntate en el borde de la cama. Tres respiraciones lentas: inspira por la nariz, deja que el aire baje hasta la barriga, suelta despacio." },
        { it: "Meditar não exige um templo nem uma hora livre: exige um minuto de atenção. O viajante que respira antes de explorar Coimbra vê melhor os azulejos, ouve melhor os sinos e guarda memórias mais vivas do que o turista apressado.", es: "Meditar no exige un templo ni una hora libre: exige un minuto de atención. El viajero que respira antes de explorar Coimbra ve mejor los azulejos, oye mejor las campanas y guarda recuerdos más vivos que el turista apurado." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de monumentos de Coimbra", "Un minuto de respiración antes de explorar una ciudad nueva", "Cómo ahorrar en billetes de tren"],
        answer: 1,
        why: "El título une «respiração» y «viajante»: apunta a la calma antes de recorrer la ciudad, no a turismo ni a precios.",
      },
      quiz: [
        { q: "O que fazes antes de sair do quarto?", kind: "literal", options: ["Sento-me na beira da cama e respiro três vezes", "Abro a janela e grito", "Ligo a televisão"], answer: 0, why: "«Senta-te na beira da cama. Três respirações lentas»: está literal en el primer párrafo." },
        { q: "Porque é que o viajante que respira guarda memórias mais vivas?", kind: "inferencial", options: ["Porque anda mais depressa", "Porque a atenção aprofunda o que se vê e se ouve", "Porque compra bilhetes melhores"], answer: 1, why: "El texto contrapone el viajero atento al turista apressado: la atención hace más vivos los recuerdos." },
        { q: "Qual é a melhor ideia para resumir o texto?", kind: "critica", options: ["Meditar precisa de condições perfeitas", "Um minuto de atenção transforma a viagem", "Os turistas apressados nunca veem nada"], answer: 1, why: "La idea central: no hacen falta templos ni una hora; un minuto de atención basta y mejora el viaje." },
      ],
      vf: [
        { text: "Meditar exige um templo e uma hora livre.", value: false, why: "«Não exige um templo nem uma hora livre»: basta un minuto de atención." },
        { text: "O ar deve descer até à barriga.", value: true, why: "«Deixa o ar descer até à barriga»." },
        { text: "O turista apressado guarda memórias mais vivas.", value: false, why: "El texto dice lo contrario: es el viajante que respira quien las guarda." },
      ],
    },
    {
      id: "md-pt-b1-01-2", theme: "qui e ora",
      title: "A esplanada e o Tejo", titleEs: "La terraza y el Tajo",
      minutes: 2,
      paragraphs: [
        { it: "Na esplanada do Bairro Alto, o copo suado e o ruído da rua pedem-te pressa. Resiste. Olha primeiro o rio lá em baixo, a luz que muda a cada minuto nos telhados, o sino que toca noutra colina. Este minuto não se repete.", es: "En la terraza del Bairro Alto, el vaso sudado y el ruido de la calle te piden prisa. Resiste. Mira primero el río allá abajo, la luz que cambia cada minuto en los tejados, la campana que suena en otra colina. Este minuto no se repite." },
        { it: "Estar aqui e agora é isto: notar o que já está a acontecer à tua volta. A conversa pode esperar, o telemóvel também. Quando beberes o próximo gole, bebe-o mesmo — não em pensamento noutra cidade, não no próximo plano da tarde.", es: "Estar aquí y ahora es esto: notar lo que ya está ocurriendo a tu alrededor. La conversación puede esperar, el móvil también. Cuando bebas el próximo sorbo, bébelo de verdad — no en pensamiento en otra ciudad, no en el siguiente plan de la tarde." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La historia de un bar famoso de Lisboa", "Estar presente en una terraza mirando el Tajo", "Una guía de bares del Bairro Alto"],
        answer: 1,
        why: "El título une la terraza y el río: apunta a la experiencia presente del momento, no a historia ni a guía.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "O copo está suado e o ruído da rua pede pressa.",
          "Olhas o rio lá em baixo e a luz nos telhados.",
          "A conversa pode esperar, o telemóvel também.",
          "As esplanadas do Bairro Alto fecham à meia-noite em outubro.",
          "Bebes o próximo gole de verdade, não em pensamento.",
        ],
        intruder: 3,
        why: "El horario de cierre de las terrazas es un dato práctico ajeno a la experiencia presente del texto: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["O aqui e agora acontece à tua volta, na esplanada", "As esplanadas de Lisboa são caras", "O Tejo é o rio mais bonito de Portugal"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Olhas o rio lá em baixo e a luz nos telhados", "A conversa pode esperar, o telemóvel também", "O próximo gole deve ser bebido de verdade"],
        distractors: ["O copo está cheio de vinho do Porto", "A esplanada fica em Belém", "O sino toca todas as horas certas"],
      },
    },
    {
      id: "md-pt-b1-01-3", theme: "relax fisico",
      title: "As pernas depois da Alta", titleEs: "Las piernas después de la Alta",
      minutes: 2,
      paragraphs: [
        { it: "Coimbra é uma cidade de escadas: subiste até à Universidade e agora as pernas pesam como pedra. Deita-te no quarto, levanta as pernas contra a parede e fecha os olhos. Deixa o sangue descer, os músculos largarem o peso do dia.", es: "Coimbra es una ciudad de escaleras: subiste hasta la Universidad y ahora las piernas pesan como piedra. Túmbate en la habitación, levanta las piernas contra la pared y cierra los ojos. Deja que la sangre baje, que los músculos suelten el peso del día." },
        { it: "Depois de cinco minutos assim, aperta os pés com as mãos, um de cada vez, e larga devagarinho. O corpo que andou o dia inteiro merece este mimo: é assim que se prepara para voltar a subir amanhã.", es: "Después de cinco minutos así, aprieta los pies con las manos, uno cada vez, y suelta despacito. El cuerpo que caminó todo el día merece este mimo: así se prepara para volver a subir mañana." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un entrenamiento intenso de gimnasio", "Relajar las piernas después de subir a pie por Coimbra", "Una ruta de senderismo por el Duero"],
        answer: 1,
        why: "El título habla de las piernas «después da Alta»: apunta a soltar el cansancio, no a entrenar ni a rutas.",
      },
      sequence: {
        instr: "Ordena los pasos del descanso según el texto:",
        events: ["Deitas-te no quarto e levantas as pernas contra a parede", "Ficas cinco minutos com os olhos fechados", "Apertas cada pé com as mãos", "Largas devagarinho", "O corpo prepara-se para subir amanhã"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Boa noite, viajante. As tuas pernas andaram o dia todo por escadas de Coimbra. Deita-te e levanta as pernas contra a parede. Sente o peso a descer, músculo por músculo. Agora aperta um pé com as duas mãos, conta até três e larga. Depois o outro. O descanso também se treina.",
        questions: [
          { q: "Onde pousas as pernas?", kind: "literal", options: ["Contra a parede", "Debaixo da mesa", "No peitoril da janela"], answer: 0, why: "«Levanta as pernas contra a parede»: literal en el audio." },
          { q: "Até onde contas ao apertar cada pé?", kind: "literal", options: ["Até três", "Até dez", "Até cem"], answer: 0, why: "«Conta até três e larga»." },
          { q: "Como desce o peso?", kind: "inferencial", options: ["Músculo por músculo", "De uma vez só", "Não desce"], answer: 0, why: "«Sente o peso a descer, músculo por músculo»." },
          { q: "«O descanso também se treina» quer dizer que…", kind: "inferencial", options: ["descansar é uma prática que se aprende", "só atletas precisam de descanso", "o descanso não é importante"], answer: 0, why: "Se deduce que descansar bien es también una habilidad que se practica." },
        ],
      },
    },
  ],

  "pt-cu-b1-02": [
    {
      id: "md-pt-b1-02-1", theme: "spiritualità",
      title: "Ouvir sem atacar", titleEs: "Escuchar sin atacar",
      minutes: 3,
      paragraphs: [
        { it: "Quando alguém discorda de ti, o corpo prepara-se para a guerra: o coração acelera, os maxilares fecham-se. Experimenta o contrário: respira fundo e ouve a frase até ao fim. A opinião do outro não é uma pedra atirada — é uma janela aberta.", es: "Cuando alguien discrepa de ti, el cuerpo se prepara para la guerra: el corazón se acelera, las mandíbulas se cierran. Prueba lo contrario: respira hondo y escucha la frase hasta el final. La opinión del otro no es una piedra tirada — es una ventana abierta." },
        { it: "Ouvir com o coração é uma prática antiga: procurar o que há de humano por trás de cada argumento. Quem discorda de ti sobre o teletrabalho está, quase sempre, a contar-te a sua solidão ou a sua pressa. Escuta essa história, e a conversa muda de nível.", es: "Escuchar con el corazón es una práctica antigua: buscar lo humano que hay detrás de cada argumento. Quien discrepa de ti sobre el teletrabajo está, casi siempre, contándote su soledad o su prisa. Escucha esa historia, y la conversación cambia de nivel." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo ganar cualquier debate", "Escuchar con el corazón a quien piensa distinto", "Los horarios del teletrabajo en Lisboa"],
        answer: 1,
        why: "El título «Ouvir sem atacar» apunta a la escucha amable del que discrepa, no a ganar ni a horarios.",
      },
      quiz: [
        { q: "O que faz o corpo quando alguém discorda?", kind: "literal", options: ["O coração acelera e os maxilares fecham-se", "O corpo adormece", "O corpo começa a rir"], answer: 0, why: "«O coração acelera, os maxilares fecham-se»: literal en el inicio." },
        { q: "O que está quase sempre por trás de um argumento sobre o teletrabalho?", kind: "inferencial", options: ["Uma história de solidão ou de pressa", "Um problema de matemática", "Uma discussão de futebol"], answer: 0, why: "«Está a contar-te a sua solidão ou a sua pressa»: se infiere lo humano detrás del argumento." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["Discordar é sempre mau", "Ouvir o humano por trás do argumento eleva a conversa", "É melhor não falar de teletrabalho"], answer: 1, why: "Escuchar la historia detrás del argumento hace que a conversa mude de nível." },
      ],
      vf: [
        { text: "O texto aconselha a responder antes de ouvir o fim da frase.", value: false, why: "Al contrario: «ouve a frase até ao fim»." },
        { text: "A opinião do outro é comparada a uma janela aberta.", value: true, why: "«Não é uma pedra atirada — é uma janela aberta»." },
        { text: "Ouvir com o coração é uma prática antiga.", value: true, why: "«Ouvir com o coração é uma prática antiga»." },
      ],
    },
    {
      id: "md-pt-b1-02-2", theme: "relax mentale",
      title: "A opinião que passa como um comboio", titleEs: "La opinión que pasa como un tren",
      minutes: 2,
      paragraphs: [
        { it: "Na mente, as opiniões chegam como comboios numa gare: uma após outra, apinhadas de vozes. «Tens de ter razão!» apita uma. «Aquilo foi uma ofensa!» anuncia outra. Tu não és os comboios — és a estação, parada e silenciosa por onde eles passam.", es: "En la mente, las opiniones llegan como trenes en una estación: una tras otra, atestadas de voces. «¡Tienes que tener razón!» pita una. «¡Aquello fue una ofensa!» anuncia otra. Tú no eres los trenes — eres la estación, quieta y silenciosa por donde pasan." },
        { it: "Quando um pensamento ruidoso chegar, não saltes para dentro dele. Vê-o partir da plataforma, como quem vê o comboio das oito para o Porto. Ele segue viagem; tu ficas. Este é o relaxamento mental mais difícil e mais simples que existe.", es: "Cuando llegue un pensamiento ruidoso, no saltes dentro de él. Míralo partir del andén, como quien ve el tren de las ocho hacia Oporto. Él sigue viaje; tú te quedas. Este es el relax mental más difícil y más simple que existe." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un horario de la CP", "Una metáfora para no engancharse a los pensamientos", "Cómo viajar en tren por el norte"],
        answer: 1,
        why: "El título compara las opiniones con trenes: apunta a la metáfora mental, no a horarios ni viajes.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "As opiniões chegam como comboios numa gare.",
          "«Tens de ter razão!» apita um pensamento.",
          "Um bilhete para o Porto custa dez euros.",
          "Tu és a estação, parada e silenciosa.",
          "Vê o pensamento partir, como o comboio das oito.",
        ],
        intruder: 2,
        why: "El precio del billete es información práctica ajena a la metáfora mental: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Os comboios de Lisboa são muito ruidosos", "Tu és a estação quieta: deixa passar os pensamentos como comboios", "É preciso saltar dentro dos pensamentos"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["As opiniões chegam como comboios numa gare", "Um pensamento grita «Tens de ter razão!»", "Vês o pensamento partir da plataforma"],
        distractors: ["O comboio das oito parte para Braga", "As estações portuguesas são antigas", "É proibido viajar sem bilhete"],
      },
    },
    {
      id: "md-pt-b1-02-3", theme: "meditazione",
      title: "Três respirações antes de responder", titleEs: "Tres respiraciones antes de responder",
      minutes: 3,
      paragraphs: [
        { it: "O debate aqueceu, a resposta já está feita na tua boca, pronta a disparar. Antes de a soltares, conta três respirações. Uma: inspira o que sentes. Duas: solta metade da pressão. Três: escolhe as palavras com que gostarias de ser recordado.", es: "El debate se caldeó, la respuesta ya está hecha en tu boca, lista para disparar. Antes de soltarla, cuenta tres respiraciones. Una: inspira lo que sientes. Dos: suelta la mitad de la presión. Tres: elige las palabras con las que te gustaría ser recordado." },
        { it: "Esta pequena pausa não é fraqueza — é técnica. Os melhores debatedores de café de Lisboa sabem-no: quem respira antes de responder, responde melhor e zanga-se menos. A frase escolhida em três respirações vale por dez atiradas à pressa.", es: "Esta pequeña pausa no es debilidad — es técnica. Los mejores debatientes de café de Lisboa lo saben: quien respira antes de responder, responde mejor y se enfada menos. La frase elegida en tres respiraciones vale por diez lanzadas a la carrera." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo hablar más rápido en un debate", "La pausa de tres respiraciones antes de responder", "Una clase de oratoria profesional"],
        answer: 1,
        why: "El título anuncia literalmente la técnica: pausa y respiración antes de la respuesta, no velocidad ni oratoria.",
      },
      sequence: {
        instr: "Ordena la técnica según el texto:",
        events: ["O debate aquece e a resposta forma-se na boca", "Respiração um: inspiras o que sentes", "Respiração dois: soltas metade da pressão", "Respiração três: escolhes as palavras", "Respondes com calma e zangas-te menos"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Repara no debate que tens dentro de ti. Duas vozes discutem e cada uma quer ganhar. Não julgues nenhuma: respira uma vez por voz. Sente o ar a entrar, sente-o a sair. Quando as vozes baixarem o tom, agradece-lhes por te avisarem e deixa-as descansar. Assim se acalma uma mente que debate.",
        questions: [
          { q: "Quantas vozes discutem dentro de ti?", kind: "literal", options: ["Duas", "Dez", "Nenhuma"], answer: 0, why: "«Duas vozes discutem e cada uma quer ganhar»." },
          { q: "O que fazes por cada voz?", kind: "literal", options: ["Respiro uma vez", "Grito com ela", "Escrevo uma carta"], answer: 0, why: "«Respira uma vez por voz»." },
          { q: "Quando as vozes baixarem o tom, o que fazes?", kind: "inferencial", options: ["Agradeço e deixo-as descansar", "Volto a discutir mais forte", "Chamo uma terceira voz"], answer: 0, why: "«Agradece-lhes por te avisarem e deixa-as descansar»." },
          { q: "Qual é o objetivo do áudio?", kind: "inferencial", options: ["Acalmar a mente que debate", "Ganhar uma discussão externa", "Adormecer imediatamente"], answer: 0, why: "El cierre «assim se acalma uma mente que debate» lo resume." },
        ],
      },
    },
  ],

  "pt-cu-b1-03": [
    {
      id: "md-pt-b1-03-1", theme: "qui e ora",
      title: "O prémio já está na mesa", titleEs: "El premio ya está en la mesa",
      minutes: 3,
      paragraphs: [
        { it: "Sonhar com o Euromilhões é um desporto de domingo: casas, viagens, descapotáveis. Sonhar é bom — mas o verdadeiro prémio já está na mesa: o assado, o riso da família, o café a cheirar ao lado do boleto.", es: "Soñar con el Euromilhões es un deporte de domingo: casas, viajes, descapotables. Soñar es bueno — pero el verdadero premio ya está en la mesa: el asado, la risa de la familia, el café oloroso junto al boleto." },
        { it: "Quando sonhares com o que não tens, volta depressa ao que tens. A fortuna imaginária não aquece as mãos; a chávena quente, sim. Diz-se que a gratidão é a lotaria que todos os dias se ganha — basta conferir o bilhete certo.", es: "Cuando sueñes con lo que no tienes, vuelve rápido a lo que tienes. La fortuna imaginaria no calienta las manos; la taza caliente, sí. Se dice que la gratitud es la lotería que todos los días se gana — basta con comprobar el billete correcto." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los números más premiados del Euromilhões", "La gratitud como premio cotidiano frente al sueño de la lotería", "Cómo investir dois milhões de euros"],
        answer: 1,
        why: "El título «o prémio já está na mesa» apunta a lo que ya se tiene, no a estadísticas ni inversiones.",
      },
      quiz: [
        { q: "O que está na mesa ao lado do boleto?", kind: "literal", options: ["O assado, o riso da família e o café", "O bilhete do comboio", "O jornal desportivo"], answer: 0, why: "«O assado, o riso da família, o café»: literal en el primer párrafo." },
        { q: "«A fortuna imaginária não aquece as mãos» quer dizer que…", kind: "inferencial", options: ["o dinheiro de mentira não consola no presente", "as mãos estão sempre frias", "o café é caro"], answer: 0, why: "Se infiere que lo imaginario no da calor real; la taza caliente, sí." },
        { q: "Qual é a conclusão do texto?", kind: "critica", options: ["Quem não joga nunca sonha", "A gratidão é um prémio quotidiano", "O Euromilhões é uma fraude"], answer: 1, why: "«A gratidão é a lotaria que todos os dias se ganha»: la idea final." },
      ],
      vf: [
        { text: "Sonhar com o Euromilhões é proibido pelo texto.", value: false, why: "El texto dice que sonhar é bom; solo pide volver rápido a lo que se tiene." },
        { text: "A chávena quente aquece as mãos.", value: true, why: "«A fortuna imaginária não aquece as mãos; a chávena quente, sim»." },
        { text: "A gratidão é comparada a uma lotaria que se ganha todos os dias.", value: true, why: "«A gratidão é a lotaria que todos os dias se ganha»." },
      ],
    },
    {
      id: "md-pt-b1-03-2", theme: "relax fisico",
      title: "As mãos abertas", titleEs: "Las manos abiertas",
      minutes: 2,
      paragraphs: [
        { it: "Fecha os punhos com força, como quem agarra um prémio que não quer perder. Sentiste os braços tensos, os ombros a subir? Agora abre as mãos devagar, palma por palma, e deixa cair o peso que nem sabias que carregavas.", es: "Cierra los puños con fuerza, como quien agarra un premio que no quiere perder. ¿Sentiste los brazos tensos, los hombros subiendo? Ahora abre las manos despacio, palma a palma, y deja caer el peso que ni sabías que cargabas." },
        { it: "Muita da nossa tensão é um aperto: agarramos planos, medos e lotarias imaginárias como se deles dependesse a respiração. Abrir as mãos é um gesto mínimo e ensina uma lição máxima: há coisas que se seguram melhor soltas.", es: "Mucha de nuestra tensión es un apretón: agarramos planes, miedos y loterías imaginarias como si de ellos dependiera la respiración. Abrir las manos es un gesto mínimo y enseña una lección máxima: hay cosas que se sostienen mejor sueltas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ejercicio de boxeo", "Soltar la tensión abriendo las manos", "Cómo ganar um prémio com a lotaria"],
        answer: 1,
        why: "El título «mãos abertas» y la mención del prémio apuntan a soltar la tensión del agarre, no al deporte ni a la suerte.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Fechas os punhos com força, como quem agarra um prémio.",
          "Os braços ficam tensos e os ombros sobem.",
          "Abres as mãos devagar, palma por palma.",
          "As mãos abertas ganham mais vezes no Euromilhões.",
          "Há coisas que se seguram melhor soltas.",
        ],
        intruder: 3,
        why: "La suerte en el Euromilhões no aparece en el texto: es información ajena al gesto de relajación y funciona de intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Abrir as mãos ensina a segurar melhor o que importa", "Os punhos fechados dão sorte", "Os braços tensos são sempre um problema médico"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Fechaste os punhos com força", "Os ombros sobem quando apertas", "Há coisas que se seguram melhor soltas"],
        distractors: ["As lotarias portuguesas pagam em euros", "O texto ensina a escrever com as mãos abertas", "Os punhos fechados pesam dez quilos"],
      },
    },
    {
      id: "md-pt-b1-03-3", theme: "spiritualità",
      title: "A riqueza de pouco", titleEs: "La riqueza de poco",
      minutes: 3,
      paragraphs: [
        { it: "Há uma pergunta antiga que vale mais do que qualquer sorteio: o que é suficiente para ti? Um prato quente, um telhado sem chuveiros, uma voz que te espera — quase toda a gente tem mais do que isso e sente que tem menos.", es: "Hay una pregunta antigua que vale más que cualquier sorteo: ¿qué es suficiente para ti? Un plato caliente, un techo sin goteras, una voz que te espera — casi todo el mundo tiene más que eso y siente que tiene menos." },
        { it: "A sabedoria das aldeias sabia contar doutro modo: pão na mesa, saúde na família e paz na eira. Quem sabe o que é suficiente dorme melhor do que quem conta milhões imaginários. Não é pobreza — é uma forma calma de ser rico.", es: "La sabiduría de las aldeas sabía contar de otro modo: pan en la mesa, salud en la familia y paz en la era. Quien sabe qué es suficiente duerme mejor que quien cuenta millones imaginarios. No es pobreza — es una forma tranquila de ser rico." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo ganhar a lotaria", "La antigua sabiduría de lo suficiente", "Consejos de investimento imobiliário"],
        answer: 1,
        why: "«Riqueza de pouco» apunta a la sabiduría de lo suficiente, no a la suerte ni al dinero.",
      },
      sequence: {
        instr: "Ordena el razonamiento del texto:",
        events: ["Fazes a pergunta: o que é suficiente para ti?", "Reconheces o que já tens: prato, telhado, voz que espera", "Lembras a sabedoria das aldeias: pão, saúde, paz", "Comparas com os milhões imaginários", "Dormes melhor com o suficiente"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Pensa no que tens na despensa e no coração. Um saco de arroz, uma janela com sol, alguém que te conhece pelo nome. Nomeia cada coisa em voz baixa, como quem reza uma lista simples. Ao fim da lista, diz obrigado. A riqueza de pouco cabe sempre numa frase.",
        questions: [
          { q: "O que há na janela?", kind: "literal", options: ["Sol", "Uma cortina nova", "Um cartaz"], answer: 0, why: "«Uma janela com sol»: literal en el audio." },
          { q: "Como nomeias cada coisa?", kind: "literal", options: ["Em voz baixa", "Aos gritos", "Por escrito"], answer: 0, why: "«Nomeia cada coisa em voz baixa»." },
          { q: "Como terminas a lista?", kind: "inferencial", options: ["Dizendo obrigado", "Recomeçando a lista", "Fazendo silêncio"], answer: 0, why: "«Ao fim da lista, diz obrigado»: se infiere el cierre en gratitud." },
          { q: "«A riqueza de pouco cabe sempre numa frase» sugere que…", kind: "inferencial", options: ["a simplicidade cabe por completo num gesto pequeno", "as frases são sempre ricas", "é preciso escrever um livro"], answer: 0, why: "Lo esencial se puede abrazar entero: cabe en una frase." },
        ],
      },
    },
  ],

  "pt-cu-b1-04": [
    {
      id: "md-pt-b1-04-1", theme: "relax mentale",
      title: "O passado já preparou", titleEs: "El pasado ya preparó",
      minutes: 3,
      paragraphs: [
        { it: "Estás à porta da sala de entrevista e a mente faz contas: o que disseste, o que devias ter dito, o que podia correr mal. Pausa. O passado já trabalhou por ti: estudaste, treinaste, preparaste. Agora só tens de chegar.", es: "Estás a la puerta de la sala de la entrevista y la mente hace cuentas: lo que dijiste, lo que deberías haber dicho, lo que podía salir mal. Pausa. El pasado ya trabajó por ti: estudiaste, entrenaste, preparaste. Ahora solo tienes que llegar." },
        { it: "A ansiedade gosta de rever o que já está feito. Responde-lhe com uma frase simples: «Estou pronto porque estive ocupado a preparar-me.» Depois leva a atenção para os pés no chão e para a maçaneta da porta. O presente é o único sítio donde uma porta se abre.", es: "La ansiedad gusta de revisar lo que ya está hecho. Respóndele con una frase simple: «Estoy listo porque estuve ocupado preparándome.» Después lleva la atención a los pies en el suelo y al pomo de la puerta. El presente es el único sitio donde una puerta se abre." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Consejos para mentir numa entrevista", "Calmar la mente antes de una entrevista confiando en la preparación", "El historial laboral de um candidato"],
        answer: 1,
        why: "El título «o passado já preparou» apunta a confiar en lo ya estudiado para calmar la mente, no a trucos ni historiales.",
      },
      quiz: [
        { q: "Onde estás quando a mente faz contas?", kind: "literal", options: ["À porta da sala de entrevista", "No comboio", "Em casa"], answer: 0, why: "«Estás à porta da sala de entrevista»: literal en el inicio." },
        { q: "«O passado já trabalhou por ti» refere-se a…", kind: "inferencial", options: ["ao estudo e treino já feitos", "à sorte do candidato", "ao apoio da família"], answer: 0, why: "«Estudaste, treinaste, preparaste»: se infiere que se refiere a la preparación hecha." },
        { q: "Qual é a lição do texto?", kind: "critica", options: ["A ansiedade resolve o passado", "O presente é o único sítio donde se age", "As entrevistas são sempre injustas"], answer: 1, why: "«O presente é o único sítio donde uma porta se abre»: la conclusión." },
      ],
      vf: [
        { text: "A mente, à porta, faz contas do que podia correr mal.", value: true, why: "«O que podia correr mal»: literal en el texto." },
        { text: "O texto manda rever mais uma vez tudo o que disseste.", value: false, why: "Al contrario: la ansiedade gosta de rever, pero hay que responderle y volver al presente." },
        { text: "A atenção deve ir para os pés no chão.", value: true, why: "«Leva a atenção para os pés no chão»." },
      ],
    },
    {
      id: "md-pt-b1-04-2", theme: "meditazione",
      title: "A respiração antes do currículo", titleEs: "La respiración antes del currículo",
      minutes: 2,
      paragraphs: [
        { it: "Antes de abrires o currículo ou a carta de motivação, respira. Uma inspiração para a coragem que já usaste noutras salas; uma expiração para o medo que sobrou. O papel não conhece o teu valor — tu conheces.", es: "Antes de abrir el currículo o la carta de motivación, respira. Una inspiración para el coraje que ya usaste en otras salas; una espiración para el miedo que sobró. El papel no conoce tu valor — tú lo conoces." },
        { it: "Meditar antes de escrever é afinar o instrumento. As palavras escolhidas depois de três respirações caem mais certas: descrevem o que fizeste sem exagero e sem medo. A serenidade é o melhor corretor de estilo.", es: "Meditar antes de escribir es afinar el instrumento. Las palabras elegidas tras tres respiraciones caen más certeras: describen lo que hiciste sin exagero y sin miedo. La serenidad es el mejor corrector de estilo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo redactar um currículo perfeito", "La serenidad al respirar antes de presentar la candidatura", "Erros comuns em cartas de motivação"],
        answer: 1,
        why: "El título une respiración y currículo: apunta a la calma antes de escribir, no a técnicas de redacción.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Respiras uma inspiração pela coragem já usada.",
          "Soltas uma expiração pelo medo que sobrou.",
          "O currículo deve ser impresso em papel azul escuro.",
          "As palavras após três respirações caem mais certas.",
          "A serenidade é o melhor corretor de estilo.",
        ],
        intruder: 2,
        why: "El color del papel es un detalle práctico ajeno a la calma del texto: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Respirar antes de escrever afina as palavras e traz serenidade", "Os currículos devem ter sempre fotografia", "O medo é útil para escrever melhor"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Uma inspiração pela coragem já usada", "Uma expiração pelo medo que sobrou", "As palavras após três respirações caem mais certas"],
        distractors: ["A serenidade aumenta os erros de ortografia", "As cartas de motivação devem ter três páginas", "O papel conhece o teu valor melhor do que tu"],
      },
    },
    {
      id: "md-pt-b1-04-3", theme: "qui e ora",
      title: "O minuto antes de falar", titleEs: "El minuto antes de hablar",
      minutes: 3,
      paragraphs: [
        { it: "Falta um minuto para te apresentares. O coração bate no pescoço, as mãos procuram papéis que não precisam. Nesse minuto exato mora uma escolha: fugir para o ensaio de ontem ou habitar a cadeira onde estás.", es: "Falta un minuto para presentarte. El corazón late en el cuello, las manos buscan papeles que no necesitan. En ese minuto exacto vive una elección: huir hacia el ensayo de ayer o habitar la silla donde estás." },
        { it: "Habitar é simples: sente o peso do corpo, o apoio das costas, o chão debaixo dos sapatos. Deixa que a primeira frase seja «bom dia» — dita de verdade, olhando os olhos à tua frente. O resto da apresentação segue esse primeiro passo presente.", es: "Habitar es simple: siente el peso del cuerpo, el apoyo de la espalda, el suelo debajo de los zapatos. Deja que la primera frase sea «bom dia» — dicha de verdad, mirando los ojos que tienes delante. El resto de la presentación sigue ese primer paso presente." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de memorização para discursos", "Estar presente en el minuto anterior a presentarte", "A história de uma cadeira famosa"],
        answer: 1,
        why: "«O minuto antes de falar» apunta al momento presente antes de la presentación, no a memoria ni a historias.",
      },
      sequence: {
        instr: "Ordena los pasos del minuto presente:",
        events: ["Reparas no coração a bater no pescoço", "Sentes o peso do corpo e o apoio das costas", "Notas o chão debaixo dos sapatos", "Dizes «bom dia» olhando os olhos", "A apresentação segue o primeiro passo presente"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "O teu minuto chegou. Antes de abrires a boca, sente a cadeira a segurar-te. Deixa o ar entrar pelo nariz até ao fundo do peito e sair pela boca, lento. Conta dois ciclos assim. Quando falares, a tua voz sai de um corpo firme — e toda a sala ouve a diferença.",
        questions: [
          { q: "O que segura o teu corpo?", kind: "literal", options: ["A cadeira", "A mesa", "A parede"], answer: 0, why: "«Sente a cadeira a segurar-te»: literal en el audio." },
          { q: "Quantos ciclos contas?", kind: "literal", options: ["Dois", "Dez", "Vinte"], answer: 0, why: "«Conta dois ciclos assim»." },
          { q: "Como sai a tua voz depois da pausa?", kind: "inferencial", options: ["De um corpo firme", "Num sussurro", "De um corpo trémulo"], answer: 0, why: "«A tua voz sai de um corpo firme»: se infiere el efecto de la pausa." },
          { q: "O que ouve toda a sala?", kind: "inferencial", options: ["A diferença de uma voz firme", "O estômago a fazer barulho", "Um silêncio constrangedor"], answer: 0, why: "«Toda a sala ouve a diferença»: la diferencia de la voz asentada." },
        ],
      },
    },
  ],

  "pt-cu-b1-05": [
    {
      id: "md-pt-b1-05-1", theme: "relax fisico",
      title: "O pescoço depois da estrada", titleEs: "El cuello después de la carretera",
      minutes: 2,
      paragraphs: [
        { it: "Cinco horas de estrada até Évora deixaram marcas: o pescoço rígido, os ombros colados às orelhas, os maxilares apertados contra o volante. Estaciona, desliga o motor e dá ao corpo os primeiros três minutos do descanso.", es: "Cinco horas de carretera hasta Évora dejaron marcas: el cuello rígido, los hombros pegados a las orejas, las mandíbulas apretadas contra el volante. Aparca, apaga el motor y dale al cuerpo los primeros tres minutos del descanso." },
        { it: "Roda a cabeça devagar para a direita, conta até três, volta ao centro. O mesmo para a esquerda. Desce os ombros como quem puxa um casaco pesado e abre a mandíbula num bocejo comprido. O corpo que chegou cansado pode jantar tranquilo.", es: "Gira la cabeza despacio hacia la derecha, cuenta hasta tres, vuelve al centro. Lo mismo hacia la izquierda. Baja los hombros como quien quita un abrigo pesado y abre la mandíbula en un bostezo largo. El cuerpo que llegó cansado puede cenar tranquilo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Um manual de mecânica do carro", "Relajar cuello y hombros después de cinco horas de carretera", "As melhores estradas do Alentejo"],
        answer: 1,
        why: "El título habla del cuello «depois da estrada»: apunta a soltar el cuerpo tras el viaje, no a mecánica ni rutas.",
      },
      quiz: [
        { q: "Como ficaram os ombros depois da estrada?", kind: "literal", options: ["Colados às orelhas", "Mais baixos do que nunca", "Dentro de um saco"], answer: 0, why: "«Os ombros colados às orelhas»: literal en el primer párrafo." },
        { q: "«Desce os ombros como quem puxa um casaco pesado» descreve…", kind: "inferencial", options: ["Um movimento lento de soltar tensão", "Uma forma de vestir roupa", "Um exercício de força"], answer: 0, why: "Se infiere que la comparación describe soltar la tensión con lentitud." },
        { q: "Qual é o conselho geral do texto?", kind: "critica", options: ["Dar ao corpo os primeiros minutos do descanso ao chegar", "Conduzir sempre cinco horas seguidas", "Jantar sem parar"], answer: 0, why: "La regla: al llegar, los primeros tres minutos son del cuerpo." },
      ],
      vf: [
        { text: "A cabeça roda devagar e conta-se até três.", value: true, why: "«Roda a cabeça devagar, conta até três»." },
        { text: "O texto manda fazer estes gestos enquanto se conduz.", value: false, why: "Al contrario: primero se estaciona y se apaga el motor." },
        { text: "O corpo que chegou cansado pode jantar tranquilo.", value: true, why: "Es la frase final del texto." },
      ],
    },
    {
      id: "md-pt-b1-05-2", theme: "spiritualità",
      title: "Firmeza e doçura", titleEs: "Firmeza y dulzura",
      minutes: 3,
      paragraphs: [
        { it: "Há uma arte espiritual em reclamar bem: firmeza nos factos, doçura na forma. Antes de falar com o rececionista, olha para dentro e pergunta: quero vitória ou quero solução? A resposta muda o tom de voz e o resultado da conversa.", es: "Hay un arte espiritual en reclamar bien: firmeza en los hechos, dulzura en la forma. Antes de hablar con el recepcionista, mira hacia dentro y pregúntate: ¿quiero victoria o quiero solución? La respuesta cambia el tono de voz y el resultado de la conversación." },
        { it: "A doçura não é submissão; é força que escolhe o caminho mais longo para chegar mais longe. Quem reclama com calma descobre que a pessoa à frente — também humana, também cansada — se torna aliada em vez de muralha.", es: "La dulzura no es sumisión; es fuerza que elige el camino más largo para llegar más lejos. Quien reclama con calma descubre que la persona delante — también humana, también cansada — se vuelve aliada en lugar de muralla." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo discutir mais alto", "Firmeza en los hechos y dulzura en la forma al reclamar", "Os direitos do consumidor em Portugal"],
        answer: 1,
        why: "El título anuncia las dos cualidades del reclamo elegante, no el volumen ni la ley.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Perguntas a ti mesmo se queres vitória ou solução.",
          "A firmeza pertence aos factos.",
          "A doçura não é submissão.",
          "Os hotéis de Évora têm cinco estrelas.",
          "A pessoa à frente torna-se aliada.",
        ],
        intruder: 3,
        why: "La clasificación por estrellas de los hoteles es un dato turístico ajeno a la lección de firmeza y dulzura: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Reclamar bem une firmeza nos factos e doçura na forma", "Reclamar é sempre uma perda de tempo", "A doçura é sinal de fraqueza"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Perguntas a ti mesmo: quero vitória ou solução?", "A doçura não é submissão", "A pessoa à frente torna-se aliada em vez de muralha"],
        distractors: ["O livro de reclamações custa cinco euros", "Reclamar de manhã tem mais sucesso", "Os rececionistas nunca ajudam ninguém"],
      },
    },
    {
      id: "md-pt-b1-05-3", theme: "relax mentale",
      title: "O problema atrás do problema", titleEs: "El problema detrás del problema",
      minutes: 2,
      paragraphs: [
        { it: "A reserva desapareceu e a mente desapareceu com ela: viaja agora pelo pior fim de semana da história. Pausa. O problema real ocupa uma frase: a reserva não está no sistema. O resto — a raiva, as hipóteses negras — é o problema atrás do problema.", es: "La reserva desapareció y la mente desapareció con ella: viaja ahora por el peor fin de semana de la historia. Pausa. El problema real ocupa una frase: la reserva no está en el sistema. El resto — la rabia, las hipótesis negras — es el problema detrás del problema." },
        { it: "Resolve a frase e o resto dissipa-se. Uma mente calma pergunta «o que se pode fazer nos próximos dez minutos?» e põe mãos à obra; uma mente agitada ensaia desgraças. Nos dois casos passa o mesmo tempo — mas só num deles se resolve o quarto.", es: "Resuelve la frase y el resto se disipa. Una mente tranquila pregunta «¿qué se puede hacer en los próximos diez minutos?» y se pone manos a la obra; una mente agitada ensaya desgracias. En ambos casos pasa el mismo tiempo — pero solo en uno se resuelve la habitación." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Os erros informáticos dos hotéis", "Separar el problema real de las historias que crea la mente", "Como escolher hotel em Évora"],
        answer: 1,
        why: "«O problema atrás do problema» apunta a distinguir el hecho de la rumiación, no a fallos informáticos ni hoteles.",
      },
      sequence: {
        instr: "Ordena el proceso según el texto:",
        events: ["A reserva desaparece do sistema", "A mente viaja para o pior cenário", "Fazes uma pausa e resumes o problema numa frase", "Perguntas o que se pode fazer em dez minutos", "Pões mãos à obra e resolves o quarto"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Quando um problema chegar ao balcão da tua vida, respira antes de reagir. Um problema é uma frase curta; a nossa cabeça transforma-a num romance de medo. Fecha o romance. Lê a frase. Pergunta qual é o próximo passo pequeno e dá-o. A calma é o atalho mais rápido.",
        questions: [
          { q: "O que fazes quando chega um problema?", kind: "literal", options: ["Respiro antes de reagir", "Grito logo", "Fujo"], answer: 0, why: "«Respira antes de reagir»: literal en el audio." },
          { q: "Em que transforma a cabeça a frase curta?", kind: "literal", options: ["Num romance de medo", "Numa canção", "Numa lista de compras"], answer: 0, why: "«A nossa cabeça transforma-a num romance de medo»." },
          { q: "Qual é o atalho mais rápido?", kind: "inferencial", options: ["A calma", "A pressa", "O silêncio total"], answer: 0, why: "«A calma é o atalho mais rápido»: se infiere del cierre." },
          { q: "O conselho final é dar…", kind: "inferencial", options: ["O próximo passo pequeno", "Uma volta de carro", "A razão ao outro"], answer: 0, why: "«Pergunta qual é o próximo passo pequeno e dá-o»." },
        ],
      },
    },
  ],

  "pt-cu-b1-06": [
    {
      id: "md-pt-b1-06-1", theme: "meditazione",
      title: "O rumor e o rio", titleEs: "El rumor y el río",
      minutes: 3,
      paragraphs: [
        { it: "Uma notícia chegou à cozinha da empresa e quer alugar a tua cabeça o dia todo. Trata-a como um barco no Douro: vê-la passar, sem saltar para dentro. «Disseram que…» passa; «Perguntaram se…» passa também; a margem és tu.", es: "Una noticia llegó a la cocina de la empresa y quiere alquilar tu cabeza el día entero. Trátala como un barco en el Duero: verla pasar, sin saltar dentro. «Dijeron que…» pasa; «Preguntaron si…» pasa también; la orilla eres tú." },
        { it: "Meditar é treinar esta margem. Os rumores precisam de passageiros para continuar a viagem; quando ninguém salta, ficam sem combustível. Ao fim de um dia sem saltos, reparas que a água do rio continua a correr — e tu continuas intacto.", es: "Meditar es entrenar esta orilla. Los rumores necesitan pasajeros para continuar el viaje; cuando nadie salta, se quedan sin combustible. Al final de un día sin saltos, notas que el agua del río sigue corriendo — y tú sigues intacto." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Os rumores mais famosos do Porto", "Dejar pasar los rumores como barcos en el río", "Como espalhar notícias com segurança"],
        answer: 1,
        why: "El título une rumor y río: apunta a no subirse a los rumores, no a cronistas ni a difusión.",
      },
      quiz: [
        { q: "Como é tratada a notícia que chega à cozinha?", kind: "literal", options: ["Como um barco no Douro", "Como um presente", "Como uma dívida"], answer: 0, why: "«Trata-a como um barco no Douro»: literal en el texto." },
        { q: "Porque é que os rumores ficam sem combustível?", kind: "inferencial", options: ["Porque ninguém salta para dentro deles", "Porque o rio seca", "Porque a cozinha fecha"], answer: 0, why: "«Os rumores precisam de passageiros; quando ninguém salta, ficam sem combustível»." },
        { q: "Qual é a lição do texto?", kind: "critica", options: ["Manter-se como a margem intacta enquanto tudo passa", "Ouvir rumores e repeti-los", "Não trabalhar em cozinhas"], answer: 0, why: "La imagen de la margem intacta resume la práctica." },
      ],
      vf: [
        { text: "«A margem és tu» é a imagem central do texto.", value: true, why: "«A margem és tu»: la orilla que permanece." },
        { text: "O texto aconselha saltar para dentro do rumor.", value: false, why: "Al contrario: «sem saltar para dentro»." },
        { text: "Ao fim de um dia sem saltos, a água continua a correr.", value: true, why: "«A água do rio continua a correr»: literal." },
      ],
    },
    {
      id: "md-pt-b1-06-2", theme: "qui e ora",
      title: "A notícia de agora", titleEs: "La noticia de ahora",
      minutes: 2,
      paragraphs: [
        { it: "O mundo inteiro cabe no telemóvel: guerras longínquas, vizinhos famosos, prémios de empresas. A cabeça quer saber tudo ao mesmo tempo e perde o único sítio onde realmente vive: este café, esta mesa, esta luz de manhã no Porto.", es: "El mundo entero cabe en el móvil: guerras lejanas, vecinos famosos, premios de empresas. La cabeza quiere saberlo todo a la vez y pierde el único sitio donde realmente vive: este café, esta mesa, esta luz de mañana en Oporto." },
        { it: "Estar informado não é viver informado. Podes ler a notícia uma vez com atenção — e depois devolver o mundo ao bolso. O aqui e agora também tem manchetes: o cheiro do café, a voz do colega, o minuto que só se publica uma vez.", es: "Estar informado no es vivir informado. Puedes leer la noticia una vez con atención — y después devolver el mundo al bolsillo. El aquí y ahora también tiene titulares: el olor del café, la voz del colega, el minuto que solo se publica una vez." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Como escolher um telemóvel", "Recuperar el aquí y ahora frente al bombardeo de noticias", "O horário dos jornais portugueses"],
        answer: 1,
        why: "«A notícia de agora» juega con el presente: apunta a presencia frente a información, no a aparatos ni horarios.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "O mundo inteiro cabe no telemóvel.",
          "A cabeça quer saber tudo ao mesmo tempo.",
          "Lês a notícia uma vez com atenção.",
          "As manchetes de manhã custam dois euros.",
          "O aqui e agora também tem manchetes.",
        ],
        intruder: 3,
        why: "El precio de los periódicos es un dato periodístico ajeno a la lección de presencia: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Ler a notícia uma vez e voltar ao presente da mesa", "Eliminar todas as notícias para sempre", "Ler o jornal durante todo o café"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A cabeça quer saber tudo ao mesmo tempo", "O aqui e agora também tem manchetes", "O minuto só se publica uma vez"],
        distractors: ["O telemóvel deve ficar sempre desligado", "Os jornais digitais são gratuitos", "A luz da manhã é má para a leitura"],
      },
    },
    {
      id: "md-pt-b1-06-3", theme: "relax fisico",
      title: "O peso do telemóvel", titleEs: "El peso del móvil",
      minutes: 3,
      paragraphs: [
        { it: "O telemóvel pesa duzentos gramas e a postura que ele obriga pesa muito mais: pescoço inclinado, ombros encurvados, respiração curta. Duas horas de notícias e rumores depois, o corpo parece ter carregado caixas num armazém.", es: "El móvil pesa doscientos gramos y la postura que obliga pesa mucho más: cuello inclinado, hombros encorvados, respiración corta. Dos horas de noticias y rumores después, el cuerpo parece haber cargado cajas en un almacén." },
        { it: "Contrapõe-lhe o gesto contrário: telemóvel na mesa, queixo paralelo ao chão, ombros a descer com cada expiração. Abre os braços como quem abre cortinas e respira fundo três vezes. O pescoço agradece em silêncio — e a próxima notícia pode esperar.", es: "Contrapónle el gesto contrario: móvil en la mesa, mentón paralelo al suelo, hombros que bajan con cada espiración. Abre los brazos como quien abre cortinas y respira hondo tres veces. El cuello agradece en silencio — y la próxima noticia puede esperar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Uma análise do telemóvel mais leve", "Corregir la postura del cuello tras mirar el móvil", "Exercícios de força para os braços"],
        answer: 1,
        why: "El título juega con el «peso» del móvil y su postura: apunta a aliviar el cuerpo, no a análisis ni pesas.",
      },
      sequence: {
        instr: "Ordena el gesto contrario según el texto:",
        events: ["Pousas o telemóvel na mesa", "Alinhas o queixo paralelo ao chão", "Desces os ombros a cada expiração", "Abres os braços como cortinas", "Respiras fundo três vezes"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "O teu pescoço passou a manhã curvado sobre um ecrã pequenino. Pousa o aparelho. Olha em frente, para o ponto mais longe que vires. Devagar, inclina a orelha direita ao ombro direito e conta até quatro. Repete do outro lado. No fim, dá uma volta de ombros para trás. O mundo continua lá — mas agora vês-o de frente.",
        questions: [
          { q: "Para onde olhas depois de pousar o aparelho?", kind: "literal", options: ["Para o ponto mais longe que vejo", "Para a mesa", "Para os sapatos"], answer: 0, why: "«Olha em frente, para o ponto mais longe que vires»." },
          { q: "Até onde contas ao inclinar a orelha?", kind: "literal", options: ["Até quatro", "Até dez", "Até cem"], answer: 0, why: "«Conta até quatro»." },
          { q: "O que dás no fim?", kind: "literal", options: ["Uma volta de ombros para trás", "Um salto", "Uma corrida"], answer: 0, why: "«Dá uma volta de ombros para trás»." },
          { q: "«O mundo continua lá — mas agora vês-o de frente» sugere que…", kind: "inferencial", options: ["A postura muda a relação com o que nos rodeia", "O mundo desapareceu", "Devemos fechar os olhos sempre"], answer: 0, why: "Se infiere que enderezar la mirada cambia el encuentro con el entorno." },
        ],
      },
    },
  ],

  "pt-cu-b1-07": [
    {
      id: "md-pt-b1-07-1", theme: "spiritualità",
      title: "Ajudar devagar", titleEs: "Ayudar despacio",
      minutes: 3,
      paragraphs: [
        { it: "Há quem ajude a correr: caixas para cima, caixas para baixo, lista de tarefas na cabeça. Experimenta ajudar devagar. Cada cabaz que passas para a frente é uma pequena bênção: alguém vai comer porque as tuas mãos chegaram.", es: "Hay quien ayuda a la carrera: cajas arriba, cajas abajo, lista de tareas en la cabeza. Prueba a ayudar despacio. Cada cesta que pasas hacia delante es una pequeña bendición: alguien va a comer porque tus manos llegaron." },
        { it: "A ajuda atenta é uma prática antiga: fazer por fazer, sem plateia nem pressa. Ao fim do sábado, não ficas apenas cansado — ficas cheio. Dizem os mais velhos que dar alimento é a forma mais direta de alimentar a própria alma.", es: "La ayuda atenta es una práctica antigua: hacer por hacer, sin público ni prisa. Al final del sábado, no quedas solo cansado — quedas lleno. Dicen los mayores que dar alimento es la forma más directa de alimentar el propio alma." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["A logística de um armazém", "Ayudar con plena atención como práctica que alimenta", "As regras do banco alimentar"],
        answer: 1,
        why: "«Ajudar devagar» apunta a la calidad de la ayuda, no a la logística ni a las reglas.",
      },
      quiz: [
        { q: "O que é cada cabaz que passas para a frente?", kind: "literal", options: ["Uma pequena bênção", "Uma dívida", "Um problema"], answer: 0, why: "«Cada cabaz é uma pequena bênção»: literal en el texto." },
        { q: "Porque é que ao fim do sábado «ficas cheio»?", kind: "inferencial", options: ["Porque a ajuda atenta alimenta por dentro", "Porque comeste muito ao almoço", "Porque dormiste no armazém"], answer: 0, why: "Se infiere que la ayuda hecha con atención llena interiormente." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["Ajudar sem plateia nem pressa tem valor próprio", "Só se ajuda quando há câmaras", "O cansaço é sempre mau"], answer: 0, why: "«Sem plateia nem pressa»: la ayuda atenta como práctica antigua." },
      ],
      vf: [
        { text: "O texto defende ajudar a correr e com pressa.", value: false, why: "Al contrario: «experimenta ajudar devagar»." },
        { text: "Dar alimento alimenta a própria alma, dizem os mais velhos.", value: true, why: "«Dar alimento é a forma mais direta de alimentar a própria alma»." },
        { text: "A ajuda atenta é descrita como prática antiga.", value: true, why: "«A ajuda atenta é uma prática antiga»." },
      ],
    },
    {
      id: "md-pt-b1-07-2", theme: "relax mentale",
      title: "Empilhar caixas, empilhar pensamentos", titleEs: "Apilar cajas, apilar pensamientos",
      minutes: 2,
      paragraphs: [
        { it: "Empilhar caixas no armazém ensina mais do que parece: as peças iguais juntas, as frágeis em cima, um nível de cada vez. A mente agradece a mesma ordem: pensamentos do mesmo tema juntos, os delicados com cuidado, uma preocupação de cada vez.", es: "Apilar cajas en el almacén enseña más de lo que parece: las piezas iguales juntas, las frágiles arriba, un nivel cada vez. La mente agradece el mismo orden: pensamientos del mismo tema juntos, los delicados con cuidado, una preocupación cada vez." },
        { it: "Quando a cabeça parecer um armazém revirado, não procures resolver tudo. Escolhe uma caixa — um único assunto — e arruma-o. Depois outra. A calma não é ter a mente vazia; é saber onde está guardado cada coisa.", es: "Cuando la cabeza parezca un almacén patas arriba, no busques resolverlo todo. Elige una caja — un único asunto — y arréglalo. Después otra. La calma no es tener la mente vacía; es saber dónde está guardada cada cosa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Um curso de gestão de armazéns", "Ordenar la mente como se ordenan las cajas del almacén", "Instruções para embalar material frágil"],
        answer: 1,
        why: "El título empareja cajas y pensamientos: apunta a la metáfora del orden mental, no a logística.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Empilhar caixas ensina ordem: iguais com iguais.",
          "Os pensamentos do mesmo tema ficam juntos.",
          "Escolhes uma caixa e arrumas esse assunto.",
          "Cada caixa reforçada custa dois euros.",
          "A calma é saber onde está guardado cada coisa.",
        ],
        intruder: 3,
        why: "El precio de las cajas es logística práctica, ajena a la metáfora mental: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Ordenar a mente um assunto de cada vez, como caixas", "Os armazéns estão sempre revirados", "É preciso esvaziar a mente por completo"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["As peças iguais ficam juntas", "Os delicados arrumam-se com cuidado", "A calma é saber onde está cada coisa"],
        distractors: ["As caixas reforçadas aguentam cinquenta quilos", "Os armazéns abrem ao sábado", "Cada caixa tem um número de série"],
      },
    },
    {
      id: "md-pt-b1-07-3", theme: "meditazione",
      title: "A respiração da equipa", titleEs: "La respiración del equipo",
      minutes: 3,
      paragraphs: [
        { it: "Antes de as carrinhas partirem para os supermercados, a equipa junta-se um momento: quinze voluntários, quinze respirações. Ninguém manda; o ar entra e sai ao mesmo tempo, como se o grupo tivesse um só pulmão grande e cansado.", es: "Antes de que las furgonetas partan hacia los supermercados, el equipo se reúne un momento: quince voluntarios, quince respiraciones. Nadie manda; el aire entra y sale al mismo tiempo, como si el grupo tuviera un solo pulmón grande y cansado." },
        { it: "Respirar juntos é a meditação mais antiga das comunidades: ceifas, procissões, remos no mesmo compasso. Quando o grupo respira, o cansaço reparte-se e a alegria multiplica-se. Depois de um minuto assim, o trabalho leve fica leve — e o pesado fica possível.", es: "Respirar juntos es la meditación más antigua de las comunidades: siegas, procesiones, remos en el mismo compás. Cuando el grupo respira, el cansancio se reparte y la alegría se multiplica. Después de un minuto así, el trabajo ligero queda ligero — y el pesado queda posible." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Um treino de corrida de equipa", "Respirar juntos antes del trabajo en grupo", "A história dos remos do Douro"],
        answer: 1,
        why: "«A respiração da equipa» apunta a la sintonía del grupo antes de la tarea, no a entrenamiento ni historia.",
      },
      sequence: {
        instr: "Ordena lo que ocurre según el texto:",
        events: ["A equipa junta-se antes das carrinhas partirem", "Cada um respira sem ninguém mandar", "O ar entra e sai ao mesmo tempo", "O cansaço reparte-se e a alegria multiplica-se", "O trabalho pesado fica possível"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Deixa o teu fôlego juntar-se ao fôlego de quem está ao teu lado. Não sincronizes à força: apenas escuta as respirações à volta, como quem escuta ondas. Ao fim de um minuto, os fôlegos encontram-se sozinhos. É assim que um grupo de pessoas se torna uma equipa — primeiro o ar, depois a obra.",
        questions: [
          { q: "Como sincronizas a respiração?", kind: "literal", options: ["Escutando as respirações à volta", "À força", "Contando em voz alta"], answer: 0, why: "«Não sincronizes à força: apenas escuta as respirações à volta»." },
          { q: "A que compara as respirações à volta?", kind: "literal", options: ["A ondas", "A motores", "A sinos"], answer: 0, why: "«Como quem escuta ondas»." },
          { q: "Quando é que os fôlegos se encontram?", kind: "inferencial", options: ["Sozinhos, ao fim de um minuto", "Nunca", "Quando alguém grita"], answer: 0, why: "«Ao fim de um minuto, os fôlegos encontram-se sozinhos»." },
          { q: "«Primeiro o ar, depois a obra» quer dizer que…", kind: "inferencial", options: ["A sintonia do grupo nasce antes do trabalho", "É preciso respirar em vez de trabalhar", "A obra é mais importante que as pessoas"], answer: 0, why: "Se infiere que la comunión precede a la tarea." },
        ],
      },
    },
  ],

  "pt-cu-b1-08": [
    {
      id: "md-pt-b1-08-1", theme: "qui e ora",
      title: "A estrada não foge", titleEs: "La carretera no se escapa",
      minutes: 3,
      paragraphs: [
        { it: "No Algarve interior, a estrada desenrola-se entre sobreiros e o velocímetro pede pressa. Não cedas. A condução atenta é uma meditação a oitenta à hora: mãos no volante, olhos no horizonte, a curva que chega é a única curva do mundo.", es: "En el Algarve interior, la carretera se desenrolla entre alcornoques y el velocímetro pide prisa. No cedas. La conducción atenta es una meditación a ochenta por hora: manos en el volante, ojos en el horizonte, la curva que llega es la única curva del mundo." },
        { it: "Quando a pressa bater no peito, lembra a frase do amigo: a estrada não foge. Nem o destino, nem o jantar, nem a vida. Chega-se melhor a todo o lado quando se chega inteiro — e quem conduz presente chega inteiro quase sempre.", es: "Cuando la prisa golpee en el pecho, recuerda la frase del amigo: la carretera no se escapa. Ni el destino, ni la cena, ni la vida. Se llega mejor a todas partes cuando se llega entero — y quien conduce presente llega entero casi siempre." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Multas no Algarve", "Conducir con presencia: la curva de ahora es la única", "As melhores praias do sul"],
        answer: 1,
        why: "El título usa la frase del amigo del curso: apunta a la calma al volante, no a multas ni playas.",
      },
      quiz: [
        { q: "O que pede o velocímetro?", kind: "literal", options: ["Pressa", "Calma", "Silêncio"], answer: 0, why: "«O velocímetro pede pressa»: literal en el texto." },
        { q: "«A curva que chega é a única curva do mundo» exprime…", kind: "inferencial", options: ["Atenção plena ao momento presente", "Desconhecimento da estrada", "Medo de conduzir"], answer: 0, why: "Se infiere la atención total al instante, como en meditación." },
        { q: "Qual é a conclusão do texto?", kind: "critica", options: ["Quem conduz presente chega inteiro", "É melhor chegar sempre tarde", "O velocímetro é inútil"], answer: 0, why: "«Quem conduz presente chega inteiro»: la frase final resume la idea." },
      ],
      vf: [
        { text: "A condução atenta é comparada a uma meditação.", value: true, why: "«Uma meditação a oitenta à hora»." },
        { text: "O texto diz que a estrada foge de quem tem pressa.", value: false, why: "Al contrario: «a estrada não foge»." },
        { text: "Chega-se melhor a todo o lado quando se chega inteiro.", value: true, why: "Literal en el párrafo final." },
      ],
    },
    {
      id: "md-pt-b1-08-2", theme: "relax fisico",
      title: "As mãos no volante", titleEs: "Las manos en el volante",
      minutes: 2,
      paragraphs: [
        { it: "Repara nas tuas mãos: agarram o volante como se a estrada fosse cair. Os dedos brancos, os pulsos tensos, os ombros junto às orelhas. Solta um dedo de cada vez até a mão repousar — o volante segura-se, não se estrangula.", es: "Fíjate en tus manos: agarran el volante como si la carretera fuera a caerse. Los dedos blancos, las muñecas tensas, los hombros junto a las orejas. Suelta un dedo cada vez hasta que la mano repose — el volante se sujeta, no se estrangula." },
        { it: "Faz o mesmo com a mandíbula: separa os dentes de leve, deixa a língua descansar. E com o pé direito: acelera como quem acaricia, não como quem foge. Conduzir com o corpo mole de calma é mais seguro do que qualquer radar o saberá medir.", es: "Haz lo mismo con la mandíbula: separa los dientes suavemente, deja descansar la lengua. Y con el pie derecho: acelera como quien acaricia, no como quien huye. Conducir con el cuerpo blando de calma es más seguro de lo que cualquier radar sabrá medir." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Um curso de condução defensiva", "Soltar manos, mandíbula y pie mientras conduces", "A ergonomia dos volantes modernos"],
        answer: 1,
        why: "El título apunta al cuerpo al volante: relajar el agarre y la tensión, no a técnica de curso.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Os dedos ficam brancos de agarrar o volante.",
          "Soltas um dedo de cada vez até a mão repousar.",
          "Separas os dentes de leve e a língua descansa.",
          "Os volantes de pele custam mais nos acessórios.",
          "Aceleras como quem acaricia, não como quem foge.",
        ],
        intruder: 3,
        why: "El precio de los volantes de piel es un dato comercial ajeno a la relajación al volante: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Conduzir soltando a tensão das mãos, mandíbula e pé", "Os volantes modernos são macios", "Acelerar forte é mais seguro"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["As mãos agarram o volante como se a estrada fosse cair", "Separas os dentes de leve", "Aceleras como quem acaricia"],
        distractors: ["Os radares medem a pressão das mãos", "A língua deve ficar colada ao céu da boca", "Os dedos brancos são sinal de boa condução"],
      },
    },
    {
      id: "md-pt-b1-08-3", theme: "spiritualità",
      title: "Chegar são e salvo", titleEs: "Llegar sano y salvo",
      minutes: 3,
      paragraphs: [
        { it: "Há uma oração laica que muitos condutores pronunciam ao estacionar sem saber: «cheguei». Duas palavras que carregam gratidão — pela estrada, pelo reflexo que travou a tempo, pela paciência que evitou a ultrapassagem proibida.", es: "Hay una oración laica que muchos conductores pronuncian al aparcar sin saberlo: «llegué». Dos palabras que llevan gratitud — por la carretera, por el reflejo que frenó a tiempo, por la paciencia que evitó el adelantamiento prohibido." },
        { it: "Agradecer a chegada é um ritual pequeno e poderoso: fecha a viagem com chave de ouro e ensina o corpo a descer do carro sem levar a estrada às costas. Quem agradece o chegar prepara, sem saber, um partir mais leve na manhã seguinte.", es: "Agradecer la llegada es un ritual pequeño y poderoso: cierra el viaje con broche de oro y enseña al cuerpo a bajar del coche sin llevarse la carretera a cuestas. Quien agradece el llegar prepara, sin saberlo, una partida más ligera a la mañana siguiente." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Seguros de viagem", "La gratitud al llegar como ritual que cierra el viaje", "As melhores autoestradas"],
        answer: 1,
        why: "«Chegar são e salvo» apunta al agradecimiento por la llegada, no a seguros ni autopistas.",
      },
      sequence: {
        instr: "Ordena el ritual según el texto:",
        events: ["Estacionas o carro", "Pronuncias por dentro: «cheguei»", "Agradeces a estrada e os reflexos", "O corpo desce do carro sem levar a estrada às costas", "Preparas um partir mais leve no dia seguinte"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Desligaste o motor. Antes de sair, fica ainda um momento. As mãos pousam no colo. Reconhece o corpo que te trouxe até aqui: os olhos que viram, os pés que travaram. Dize por dentro obrigado — à estrada, ao corpo, ao dia. Agora sim, podes abrir a porta e chegar.",
        questions: [
          { q: "Onde pousam as mãos no fim?", kind: "literal", options: ["No colo", "Na buzina", "No teto"], answer: 0, why: "«As mãos pousam no colo»: literal en el audio." },
          { q: "A quem agradeces?", kind: "literal", options: ["À estrada, ao corpo, ao dia", "Aos outros condutores apenas", "À rádio"], answer: 0, why: "«Obrigado — à estrada, ao corpo, ao dia»." },
          { q: "Quando podes abrir a porta?", kind: "inferencial", options: ["Depois do obrigado", "Antes de desligar o motor", "Nunca"], answer: 0, why: "«Agora sim, podes abrir a porta»: después del agradecimiento." },
          { q: "Qual é o objetivo do áudio?", kind: "inferencial", options: ["Fechar a viagem com gratidão antes de sair", "Ensinar a estacionar melhor", "Avisar do trânsito"], answer: 0, why: "El audio prepara la llegada consciente con gratitud." },
        ],
      },
    },
  ],

  "pt-cu-b1-09": [
    {
      id: "md-pt-b1-09-1", theme: "relax mentale",
      title: "Ouvir sem pressa", titleEs: "Escuchar sin prisa",
      minutes: 3,
      paragraphs: [
        { it: "A tentação do ouvinte moderno é dobrar a velocidade: dois podcasts de uma vez, uma série no ecrã, o comboio a chegar. Ouve devagar o contrário: uma voz, um episódio, sem mais nada. A pressa apressada ouve tudo e não guarda nada.", es: "La tentación del oyente moderno es doblar la velocidad: dos pódcasts a la vez, una serie en la pantalla, el tren por llegar. Escucha despacio lo contrario: una voz, un episodio, sin nada más. La prisa apurada lo oye todo y no guarda nada." },
        { it: "O ouvido calmo funciona como uma sala de concertos: cada palavra senta-se no lugar dela. Quando a mente fugir para o ecrã, traz o som de volta com a mesma gentileza com que se traz um gato para o colo. Ouvir é meditar com os ouvidos.", es: "El oído tranquilo funciona como una sala de conciertos: cada palabra se sienta en su lugar. Cuando la mente huya hacia la pantalla, trae el sonido de vuelta con la misma gentileza con que se trae un gato al regazo. Escuchar es meditar con los oídos." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Equipamento de áudio profissional", "Escuchar despacio: oír es meditar con los oídos", "Os podcasts mais ouvidos de Portugal"],
        answer: 1,
        why: "El título apunta a la calidad de la escucha, no al equipo ni a las listas de popularidad.",
      },
      quiz: [
        { q: "Qual é a tentação do ouvinte moderno?", kind: "literal", options: ["Dobrar a velocidade e fazer duas coisas", "Ouvir em silêncio", "Desligar tudo"], answer: 0, why: "«Dobrar a velocidade: dois podcasts de uma vez»: literal en el inicio." },
        { q: "«A pressa apressada ouve tudo e não guarda nada» significa que…", kind: "inferencial", options: ["Sem atenção não há memória do que se ouviu", "Os podcasts são curtos", "A velocidade dobra o som"], answer: 0, why: "Se infiere que oír sin atención no deja recuerdo." },
        { q: "A comparação final diz que ouvir é…", kind: "critica", options: ["Meditar com os ouvidos", "Um dever", "Uma perda de tempo"], answer: 0, why: "«Ouvir é meditar com os ouvidos»: la frase de cierre." },
      ],
      vf: [
        { text: "A mente que foge deve ser trazida com gentileza, como um gato para o colo.", value: true, why: "«Com a mesma gentileza com que se traz um gato para o colo»." },
        { text: "O texto manda ouvir três podcasts ao mesmo tempo.", value: false, why: "Al contrario: «uma voz, um episódio, sem mais nada»." },
        { text: "O ouvido calmo é comparado a uma sala de concertos.", value: true, why: "«O ouvido calmo funciona como uma sala de concertos»." },
      ],
    },
    {
      id: "md-pt-b1-09-2", theme: "meditazione",
      title: "A voz que guia", titleEs: "La voz que guía",
      minutes: 2,
      paragraphs: [
        { it: "Todo o podcast tem uma voz que guia; a meditação também. Fecha os olhos e escolhe a tua: pode ser a respiração, um som distante, o peso da cabeça. Deixa que essa âncora fale contigo nos momentos em que a mente se perde nos anúncios internos.", es: "Todo pódcast tiene una voz que guía; la meditación también. Cierra los ojos y elige la tuya: puede ser la respiración, un sonido lejano, el peso de la cabeza. Deja que ese ancla hable contigo en los momentos en que la mente se pierde en los anuncios internos." },
        { it: "Regra antiga: quando te aperceberes que fugiste — e vais fugir —, não critiques a fuga. Volta à âncora com o alívio de quem regressa a casa. Cada regresso é um músculo que se treina; ao fim de semanas, a mente obedece melhor à voz que guia.", es: "Regla antigua: cuando notes que te fuiste — y te irás —, no critiques la huida. Vuelve al ancla con el alivio de quien regresa a casa. Cada regreso es un músculo que se entrena; al cabo de semanas, la mente obedece mejor a la voz que guía." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Como gravar um podcast", "La respiración o un sonido como ancla que guía la meditación", "A voz do apresentador da TSF"],
        answer: 1,
        why: "El título habla de la voz que guía: apunta al ancla de la meditación, no a la producción ni a la radio.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Escolhes uma âncora: a respiração, um som, o peso da cabeça.",
          "A âncora fala contigo quando a mente se perde.",
          "Não critiques a fuga quando te aperceberes dela.",
          "As âncoras de bronze eram usadas pelos fenícios.",
          "Cada regresso treina um músculo da atenção.",
        ],
        intruder: 3,
        why: "La historia de las anclas de bronce fenicias es cultura general ajena a la práctica: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Escolher uma âncora e voltar a ela sem autocrítica", "É preciso uma voz gravada para meditar", "A mente nunca se perde"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A âncora pode ser a respiração ou um som distante", "Quando foges, não critiques a fuga", "Cada regresso é um músculo que se treina"],
        distractors: ["Os podcasts de meditação duram sempre vinte minutos", "A âncora tem de ser um mantra antigo", "A mente obedece logo na primeira semana"],
      },
    },
    {
      id: "md-pt-b1-09-3", theme: "qui e ora",
      title: "Vinte minutos só teus", titleEs: "Veinte minutos solo tuyos",
      minutes: 3,
      paragraphs: [
        { it: "No comboio da manhã, entre duas estações do Norte, tens vinte minutos que ninguém reclama. Podem ser notícias, podem ser ruído — ou podem ser teus: olhos fechados, a ouvir o vagão, o ritmo dos trilhos, o corpo sentado que não chega a sítio nenhum.", es: "En el tren de la mañana, entre dos estaciones del Norte, tienes veinte minutos que nadie reclama. Pueden ser noticias, pueden ser ruido — o pueden ser tuyos: ojos cerrados, escuchando el vagón, el ritmo de los raíles, el cuerpo sentado que no llega a ningún sitio." },
        { it: "Estes minutos são o aqui e agora de bolso: a carruagem balança, alguém tosse, o Douro aparece de surpresa na janela. Nada disto se repete amanhã. Quem ocupa o seu minuto em vez de o distrair chega ao Porto com qualquer coisa que o dia não tira.", es: "Estos minutos son el aquí y ahora de bolsillo: el vagón se balancea, alguien tose, el Duero aparece de sorpresa en la ventana. Nada de esto se repite mañana. Quien ocupa su minuto en lugar de distraerlo llega a Oporto con algo que el día no le quita." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Os horários da linha do Norte", "Hacer tuyos los veinte minutos del trayecto en tren", "Como dormir no comboio sem perder a estação"],
        answer: 1,
        why: "«Vinte minutos só teus» apunta a apropiarse del rato del trayecto, no a horarios ni a dormir.",
      },
      sequence: {
        instr: "Ordena la escena según el texto:",
        events: ["Entras no comboio da manhã", "Fecha os olhos entre duas estações", "Ouves o vagão e o ritmo dos trilhos", "O Douro aparece de surpresa na janela", "Chegas ao Porto com algo que o dia não tira"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Aviso aos passageiros de si próprios: este comboio não para nos pensamentos de ontem nem nas preocupações de amanhã. Segue direto pela via do presente. Repara no balançar da carruagem, no ritmo constante dos trilhos. É a estação de agora — a única onde se pode descer. Boa viagem dentro de ti.",
        questions: [
          { q: "Onde não para este comboio?", kind: "literal", options: ["Nos pensamentos de ontem", "No Porto", "Na estação central"], answer: 0, why: "«Não para nos pensamentos de ontem»: literal en el audio." },
          { q: "Qual é a via que o comboio segue?", kind: "literal", options: ["A via do presente", "A via rápida", "A via antiga"], answer: 0, why: "«Segue direto pela via do presente»." },
          { q: "Qual é a única estação onde se pode descer?", kind: "inferencial", options: ["A estação de agora", "A estação de amanhã", "A estação de ontem"], answer: 0, why: "«É a estação de agora — a única onde se pode descer»." },
          { q: "«Boa viagem dentro de ti» despede o áudio com…", kind: "inferencial", options: ["Um convite à presença interior", "Um aviso de atraso", "Um anúncio comercial"], answer: 0, why: "La despedida invita al viaje interior, no a un aviso ni a un anuncio." },
        ],
      },
    },
  ],

  "pt-cu-b1-10": [
    {
      id: "md-pt-b1-10-1", theme: "relax fisico",
      title: "Correr com o corpo", titleEs: "Correr con el cuerpo",
      minutes: 2,
      paragraphs: [
        { it: "Há duas maneiras de correr junto ao mar em Matosinhos: com a cabeça, ensaiando conversas e contas, ou com o corpo — o pé que aterra, o ar que entra, o sal no lábio. A segunda é desporto; a primeira é reunião em movimento.", es: "Hay dos maneras de correr junto al mar en Matosinhos: con la cabeza, ensayando conversaciones y cuentas, o con el cuerpo — el pie que aterriza, el aire que entra, la sal en el labio. La segunda es deporte; la primera es reunión en movimiento." },
        { it: "Corre um quilómetro só com o corpo: sente o calcanhar, o joelho, o quadril, a expiração a dois passos. Quando a mente quiser pauta, devolve-a aos pés — eles têm sempre música. O corredor presente cansa-se menos e desfruta o dobro.", es: "Corre un kilómetro solo con el cuerpo: siente el talón, la rodilla, la cadera, la espiración a dos pasos. Cuando la mente quiera partitura, devuélvela a los pies — ellos siempre tienen música. El corredor presente se cansa menos y disfruta el doble." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Um calendário de provas de atletismo", "Correr sintiendo el cuerpo y no la cabeza", "Técnicas de corrida profissional"],
        answer: 1,
        why: "El título opone cuerpo y cabeza al correr: apunta a la sensación, no al calendario ni a la técnica.",
      },
      quiz: [
        { q: "O que sente o corredor no segundo modo?", kind: "literal", options: ["O pé que aterra e o sal no lábio", "As contas por pagar", "A lista de compras"], answer: 0, why: "«O pé que aterra, o ar que entra, o sal no lábio»: literal en el texto." },
        { q: "«Devolve-a aos pés — eles têm sempre música» quer dizer…", kind: "inferencial", options: ["O ritmo do corpo substitui os pensamentos", "Os pés cantam mesmo", "Corre-se descalço"], answer: 0, why: "Se infiere que el ritmo corporal reemplaza el diálogo mental." },
        { q: "O texto defende que…", kind: "critica", options: ["O corredor presente cansa-se menos e desfruta o dobro", "A cabeça deve mandar sempre na corrida", "Correr é uma reunião"], answer: 0, why: "«Cansa-se menos e desfruta o dobro»: la frase final." },
      ],
      vf: [
        { text: "Correr com a cabeça cheia de conversas é comparado a uma reunião em movimento.", value: true, why: "«A primeira é reunião em movimento»." },
        { text: "O texto manda correr um quilómetro só com o corpo.", value: true, why: "«Corre um quilómetro só com o corpo»." },
        { text: "O corredor presente cansa-se mais.", value: false, why: "Al contrario: «cansa-se menos»." },
      ],
    },
    {
      id: "md-pt-b1-10-2", theme: "spiritualità",
      title: "O corpo como casa", titleEs: "El cuerpo como casa",
      minutes: 3,
      paragraphs: [
        { it: "Trata o teu corpo como casa onde vives, não como hotel de passagem: limpa-o com boa comida, areja-o com ar de manhã, repara-o quando uma janela range. A dieta mediterrânica é isso: cuidado quotidiano disfarçado de receita.", es: "Trata tu cuerpo como la casa donde vives, no como un hotel de paso: límpialo con buena comida, ventílalo con aire de mañana, repáralo cuando una ventana cruje. La dieta mediterránea es eso: cuidado cotidiano disfrazado de receta." },
        { it: "Há quem chame templo ao corpo e quem chame casa — a palavra não importa. Importa o respeito: dormir as horas, beber a água, andar o passo. Quem cuida da casa ouve-a melhor: ela avisa antes de a parede cair.", es: "Hay quien llame templo al cuerpo y quien llame casa — la palabra no importa. Importa el respeto: dormir las horas, beber el agua, andar el paso. Quien cuida la casa la oye mejor: ella avisa antes de que caiga la pared." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Receitas mediterrânicas detalhadas", "Cuidar el cuerpo como la casa en la que vives", "Hotéis de bem-estar no Algarve"],
        answer: 1,
        why: "El título compara cuerpo y casa: apunta al cuidado cotidiano, no a recetas ni a hoteles.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Tratas o corpo como casa onde vives.",
          "Limpas-o com boa comida e arejas-o de manhã.",
          "Reparas a janela que range.",
          "Os hotéis de bem-estar custam cem euros por noite.",
          "O corpo avisa antes de a parede cair.",
        ],
        intruder: 3,
        why: "El precio de los hoteles de bienestar es un dato turístico ajeno al cuidado del propio cuerpo: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Cuidar o corpo com hábitos pequenos e quotidianos", "O corpo é um hotel de passagem", "Só o desporto de competição vale a pena"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Limpas o corpo com boa comida", "A dieta mediterrânica é cuidado disfarçado de receita", "O corpo avisa antes de a parede cair"],
        distractors: ["A dieta mediterrânica foi inventada em 2010", "Os hotéis do Algarve têm spa", "Dormir é uma perda de tempo"],
      },
    },
    {
      id: "md-pt-b1-10-3", theme: "relax mentale",
      title: "Constância sem chicote", titleEs: "Constancia sin látigo",
      minutes: 2,
      paragraphs: [
        { it: "O plano diz «três vezes por semana» e a tua cabeça diz «senão és um fracasso». Conheces esta voz? É o chicote interno: promete disciplina e entrega desgosto. Há outro caminho para a constância — a gentileza de recomeçar.", es: "El plan dice «tres veces por semana» y tu cabeza dice «si no, eres un fracaso». ¿Conoces esta voz? Es el látigo interno: promete disciplina y entrega disgusto. Hay otro camino para la constancia — la gentileza de recomenzar." },
        { it: "Quem falha uma terça-feira e volta na quinta com paz na alma acumula mais quilómetros do que quem se castiga até desistir. A constância não é uma cadeia: é um fio que se volta a atar todos os dias, com um nó macio e sem chicote.", es: "Quien falla un martes y vuelve el jueves con paz en el alma acumula más kilómetros que quien se castiga hasta abandonar. La constancia no es una cadena: es un hilo que se vuelve a atar cada día, con un nudo suave y sin látigo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Um plano de treino rígido", "La constancia que nace de la gentileza y no del castigo", "Como falhar menos vezes por semana"],
        answer: 1,
        why: "«Constância sem chicote» opone constancia amable a castigo: no es un plan rígido ni un manual de fallos.",
      },
      sequence: {
        instr: "Ordena el proceso según el texto:",
        events: ["O plano pede três treinos por semana", "Falhas uma terça-feira", "O chicote interno chama-te ao fracasso", "Voltas na quinta com paz na alma", "Atas o fio da constância com um nó macio"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "O teu plano de saúde tem uma cláusula escondida: o direito a falhar e voltar. Se falhares um dia, não assines a sentença à noite. De manhã, lava a cara, calça os ténis e recomeça como quem dá o primeiro passo de sempre. A constância gosta de quem volta — não de quem nunca cai.",
        questions: [
          { q: "Que cláusula escondida tem o plano?", kind: "literal", options: ["O direito a falhar e voltar", "A obrigação de nunca falhar", "O dever de treinar de noite"], answer: 0, why: "«O direito a falhar e voltar»: literal en el audio." },
          { q: "Quando recomeças?", kind: "literal", options: ["De manhã, como quem dá o primeiro passo", "À meia-noite", "No mês seguinte"], answer: 0, why: "«De manhã, lava a face e recomeça»." },
          { q: "De quem gosta a constância?", kind: "literal", options: ["De quem volta", "De quem nunca cai", "De quem treina sozinho"], answer: 0, why: "«A constância gosta de quem volta»." },
          { q: "A mensagem central do áudio é…", kind: "inferencial", options: ["Recomeçar com gentileza sustenta o hábito", "Falhar é motivo de castigo", "O plano deve ser abandonado"], answer: 0, why: "Se infiere que volver sin castigo mantiene la constancia." },
        ],
      },
    },
  ],

  "pt-cu-b1-11": [
    {
      id: "md-pt-b1-11-1", theme: "meditazione",
      title: "A memória como rio", titleEs: "La memoria como río",
      minutes: 3,
      paragraphs: [
        { it: "O avô fala da escola a pé e das castanhas na eira, e a tua mente quer agarrar cada palavra com medo de a perder. Deixa a memória ser rio: as histórias passam por ti como a água passa pela pedra — e a pedra fica mais lisa, mais sábia.", es: "El abuelo habla de la escuela a pie y de las castañas en la era, y tu mente quiere agarrar cada palabra por miedo a perderla. Deja que la memoria sea río: las historias pasan por ti como el agua pasa por la piedra — y la piedra queda más lisa, más sabia." },
        { it: "Não precisas de reter tudo; precisas de estar. Quando o avô falar, ouve com o corpo inteiro — é assim que as histórias escolhem ficar. E quando ele se calar, guarda o silêncio também: nele continua o que as palavras não disseram.", es: "No necesitas retenerlo todo; necesitas estar. Cuando el abuelo hable, escucha con el cuerpo entero — así es como las historias eligen quedarse. Y cuando él se calle, guarda también el silencio: en él sigue lo que las palabras no dijeron." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Como gravar entrevistas", "Escuchar los recuerdos del abuelo dejándolos fluir como un río", "A história do rio de Trás-os-Montes"],
        answer: 1,
        why: "El título compara memoria y río: apunta a escuchar sin aferrar, no a grabar ni a geografía.",
      },
      quiz: [
        { q: "O que faz a tua mente com cada palavra do avô?", kind: "literal", options: ["Quer agarrá-la com medo de a perder", "A traduz", "A esquece"], answer: 0, why: "«Quer agarrar cada palavra com medo de a perder»: literal." },
        { q: "«A pedra fica mais lisa, mais sábia» sugere que…", kind: "inferencial", options: ["Ouvir histórias nos transforma suavemente", "A água é perigosa", "As pedras têm memória própria"], answer: 0, why: "Se infiere que escuchar con calma pule y enseña, como el agua a la piedra." },
        { q: "O texto ensina que guardar o silêncio é…", kind: "critica", options: ["Parte da escuta: nele continua o não dito", "Uma falta de respeito", "Uma perda de tempo"], answer: 0, why: "«Guarda o silêncio também: nele continua o que as palavras não disseram»." },
      ],
      vf: [
        { text: "A memória é comparada a um rio.", value: true, why: "«Deixa a memória ser rio»." },
        { text: "O texto diz que é preciso reter todas as palavras.", value: false, why: "Al contrario: «não precisas de reter tudo; precisas de estar»." },
        { text: "Ouvir com o corpo inteiro faz as histórias escolherem ficar.", value: true, why: "«É assim que as histórias escolhem ficar»." },
      ],
    },
    {
      id: "md-pt-b1-11-2", theme: "qui e ora",
      title: "A eira ao anoitecer", titleEs: "La era al atardecer",
      minutes: 2,
      paragraphs: [
        { it: "Ao anoitecer, a eira fica dourada e o calor recolhe às casas. Este é o momento mais antigo do mundo: gente sentada à porta, cadeiras tortas, o cão a suspirar. Não vás para lado nenhum — este momento não se repete nem se fotografa melhor.", es: "Al atardecer, la era queda dorada y el calor se recoge en las casas. Este es el momento más antiguo del mundo: gente sentada a la puerta, sillas cojas, el perro suspirando. No vayas a ningún lado — este momento no se repite ni se fotografía mejor." },
        { it: "O aqui e agora das aldeias ensina-se assim: cheiro a lenha que arde ao longe, o sino que já não dá horas, uma voz que chama alguém para o jantar. Se estiveres presente, este momento é teu; se estiveres no telemóvel, é só de quem ficou.", es: "El aquí y ahora de las aldeas se enseña así: olor a leña que arde a lo lejos, la campana que ya no da horas, una voz que llama a alguien a cenar. Si estás presente, este momento es tuyo; si estás en el móvil, es solo de quien se quedó." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["A história da agricultura", "El aquí y ahora de una tarde en la aldea", "Fotografia de paisagens rurais"],
        answer: 1,
        why: "«A eira ao anoitecer» pinta una escena presente: apunta a habitar la tarde, no a historia ni fotos.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "A eira fica dourada e o calor recolhe às casas.",
          "Gente sentada à porta, o cão a suspirar.",
          "Cheira a lenha que arde ao longe.",
          "Uma voz chama alguém para o jantar.",
          "As cadeiras tortas têm cem anos de idade.",
        ],
        intruder: 4,
        why: "La edad exacta de las sillas es un dato que el texto no da ni necesita: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["A tarde na aldeia só é tua se estiveres presente", "As eiras deviam ter museus", "O telemóvel tira as melhores fotos"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A eira fica dourada ao anoitecer", "Cheira a lenha que arde ao longe", "Uma voz chama alguém para o jantar"],
        distractors: ["As cadeiras tortas têm cem anos", "O sino está avariado desde 1990", "O cão pertence ao vizinho da direita"],
      },
    },
    {
      id: "md-pt-b1-11-3", theme: "relax fisico",
      title: "O fresco da porta de casa", titleEs: "El fresco de la puerta de casa",
      minutes: 3,
      paragraphs: [
        { it: "Depois do dia na eira, o corpo pede o ritual antigo: cadeira baixa à porta, costas encostadas à pedra fresca, pés descalços no chão que ainda guarda o calor do sol. Sentir o arrefecer é um alongamento que a pele faz sozinha.", es: "Después del día en la era, el cuerpo pide el ritual antiguo: silla baja a la puerta, espalda recostada en la piedra fresca, pies descalzos en el suelo que aún guarda el calor del sol. Sentir el enfriamiento es un estiramiento que la piel hace sola." },
        { it: "Deixa os ombros descerem ao ritmo da tarde que termina. Espreguiça-te como o gato da aldeia — sem pressa nem vergonha — e boceja comprido. O corpo que descansa à porta dorme com a terra: por isso os avós adormeciam antes do primeiro sino.", es: "Deja que los hombros bajen al ritmo de la tarde que termina. Estírate como el gato de la aldea — sin prisa ni vergüenza — y bosteza largo. El cuerpo que descansa a la puerta duerme con la tierra: por eso los abuelos se dormían antes de la primera campanada." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Móveis de exterior", "El descanso del cuerpo en la puerta al final del día", "Como cuidar de gatos na aldeia"],
        answer: 1,
        why: "El título evoca el fresco de la puerta al final del día: apunta al descanso corporal, no a muebles ni gatos.",
      },
      sequence: {
        instr: "Ordena el ritual según el texto:",
        events: ["Pousas o corpo na cadeira baixa à porta", "Encostas as costas à pedra fresca", "Sentes o chão que guarda o calor do sol", "Espreguiças-te sem pressa como o gato", "Adormeces com a terra, antes do sino"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "A tarde termina na aldeia. Pousa o corpo na cadeira, encosta as costas à pedra que guarda o fresco. Os pés descalços sentem o chão tépido, ainda com sol dentro. Agora deixa os ombros irem abaixo, devagar, como o sol atrás do morro. Respira o ar novo da tarde. Já podes descansar.",
        questions: [
          { q: "O que sentem os pés descalços?", kind: "literal", options: ["O chão tépido, ainda com sol", "A chuva da manhã", "As botas de trabalho"], answer: 0, why: "«Os pés descalços sentem o chão tépido, ainda com sol dentro»." },
          { q: "Para onde vai o sol na imagem?", kind: "literal", options: ["Atrás do morro", "Para o rio", "Para a eira"], answer: 0, why: "«Como o sol atrás do morro»." },
          { q: "A que ritmo descem os ombros?", kind: "inferencial", options: ["Devagar, como o sol", "De repente", "Ao ritmo da música"], answer: 0, why: "Se infiere la lentitud del gesto del sol poniente." },
          { q: "O áudio convida no fim a…", kind: "inferencial", options: ["Descansar", "Trabalhar mais", "Caminhar até à eira"], answer: 0, why: "«Já podes descansar»: el cierre del audio." },
        ],
      },
    },
  ],

  "pt-cu-b1-12": [
    {
      id: "md-pt-b1-12-1", theme: "spiritualità",
      title: "Falar da terra com amor", titleEs: "Hablar de la tierra con amor",
      minutes: 3,
      paragraphs: [
        { it: "Quando apresentares a tua cidade, não recites números: conta histórias. A rua onde o pão cheira às sete, a festa que te molhou os pés, o miradouro que viu os teus amores. Quem fala da terra com amor não precisa de argumentos — tem testemunho.", es: "Cuando presentes tu ciudad, no recites números: cuenta historias. La calle donde el pan huele a las siete, la fiesta que te mojó los pies, el mirador que vio tus amores. Quien habla de la tierra con amor no necesita argumentos — tiene testimonio." },
        { it: "Há uma espiritualidade do pertencer: reconhecer que um pedaço do mundo te conhece pelo nome. Ao defenderes a tua região, defendes esse reconhecimento. E quem ouve sente-o — porque o amor pela terra é a única propaganda que ninguém desconfia.", es: "Hay una espiritualidad del pertenecer: reconocer que un pedazo del mundo te conoce por tu nombre. Al defender tu región, defiendes ese reconocimiento. Y quien escucha lo siente — porque el amor por la tierra es la única propaganda de la que nadie desconfía." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de marketing urbano", "Presentar tu ciudad contando historias con amor", "Estatísticas de turismo regional"],
        answer: 1,
        why: "El título anuncia el amor por la tierra al presentarla, no el marketing ni las cifras.",
      },
      quiz: [
        { q: "O que deves contar ao apresentar a tua cidade?", kind: "literal", options: ["Histórias, não números", "Números, não histórias", "Só o mapa"], answer: 0, why: "«Não recites números: conta histórias»: literal en el inicio." },
        { q: "«Um pedaço do mundo te conhece pelo nome» exprime…", kind: "inferencial", options: ["O sentimento de pertencer a um lugar", "A fama do orador", "O tamanho da cidade"], answer: 0, why: "Se infiere el vínculo de pertenencia con el lugar." },
        { q: "«A única propaganda que ninguém desconfia» é…", kind: "critica", options: ["O amor pela terra", "O desconto de janeiro", "O mapa turístico"], answer: 0, why: "«O amor pela terra é a única propaganda que ninguém desconfia»." },
      ],
      vf: [
        { text: "Quem fala da terra com amor tem testemunho, segundo o texto.", value: true, why: "«Não precisa de argumentos — tem testemunho»." },
        { text: "O texto manda decorar estatísticas de turismo.", value: false, why: "Al contrario: «não recites números»." },
        { text: "Defender a região é defender o reconhecimento de pertencer.", value: true, why: "«Ao defenderes a tua região, defendes esse reconhecimento»." },
      ],
    },
    {
      id: "md-pt-b1-12-2", theme: "relax mentale",
      title: "A mente antes do discurso", titleEs: "La mente antes del discurso",
      minutes: 2,
      paragraphs: [
        { it: "Três minutos de apresentação e uma mente com sessenta diapositivos abertos: o medo de falhar, a cara da professora, a palavra que se esqueceu. Fecha tudo. Um discurso presente cabe num gesto: pés no chão, ar nos pulmões, a primeira frase.", es: "Tres minutos de presentación y una mente con sesenta diapositivas abiertas: el miedo a fallar, la cara de la profesora, la palabra que se olvidó. Cierra todo. Un discurso presente cabe en un gesto: pies en el suelo, aire en los pulmones, la primera frase." },
        { it: "A mente antes do discurso é uma sala cheia de gente a falar ao mesmo tempo. Pede silêncio com três respirações e escolhe a única voz que importa — a que diz a primeira frase. As outras vozes calam-se quando a tua começa; é assim desde o primeiro «bom dia» do mundo.", es: "La mente antes del discurso es una sala llena de gente hablando a la vez. Pide silencio con tres respiraciones y elige la única voz que importa — la que dice la primera frase. Las otras voces se callan cuando la tuya empieza; es así desde el primer «bom dia» del mundo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Como fazer diapositivos perfeitos", "Silenciar la mente antes de hablar en público", "Exercícios de voz para oradores"],
        answer: 1,
        why: "El título apunta a la mente antes de hablar: calma interior, no técnica de diapositivas ni de voz.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "A mente abre sessenta diapositivos de medo.",
          "Pés no chão e ar nos pulmões.",
          "Pedes silêncio com três respirações.",
          "Os diapositivos com letra grande vendem melhor a cidade.",
          "A tua voz começa e as outras calam-se.",
        ],
        intruder: 3,
        why: "El consejo sobre la letra de los diapositivos es técnica de presentación, ajeno a la calma mental: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Silenciar a mente com três respirações e escolher a primeira frase", "Decorar sessenta diapositivos", "Falar mais alto que o medo"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A mente abre sessenta diapositivos de medo", "Pedes silêncio com três respirações", "As outras vozes calam-se quando a tua começa"],
        distractors: ["Os diapositivos devem ter letra grande", "A professora vai avaliar com nota máxima", "A primeira frase deve ser um provérbio"],
      },
    },
    {
      id: "md-pt-b1-12-3", theme: "meditazione",
      title: "A última respiração do curso", titleEs: "La última respiración del curso",
      minutes: 3,
      paragraphs: [
        { it: "O nível B1 termina como termina um bom concerto: com silêncio antes da última nota. Senta-te onde estudaste, respira fundo e deixa passar o semestre inteiro — os erros que ensinaram, as frases que já dizes sem pensar, a tua voz em português.", es: "El nivel B1 termina como termina un buen concierto: con silencio antes de la última nota. Siéntate donde estudiaste, respira hondo y deja pasar el semestre entero — los errores que enseñaron, las frases que ya dices sin pensar, tu voz en portugués." },
        { it: "A última respiração é de gratidão: por cada palavra nova que ficou, por cada medo antigo que saiu. Não é o fim — é o portão do próximo nível. Quem respira fundo ao fechar uma porta abre a seguinte com mais força.", es: "La última respiración es de gratitud: por cada palabra nueva que quedó, por cada miedo antiguo que salió. No es el fin — es el portón del siguiente nivel. Quien respira hondo al cerrar una puerta abre la siguiente con más fuerza." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["O exame final do B1", "Una respiración de gratitud al cerrar el nivel", "Como inscrever-se no próximo nível"],
        answer: 1,
        why: "El título anuncia la respiración de cierre del curso: gratitud, no examen ni matrícula.",
      },
      sequence: {
        instr: "Ordena el cierre según el texto:",
        events: ["Senta-te onde estudaste", "Respiras fundo e deixas passar o semestre", "Agradeces cada palavra nova que ficou", "Reconheces que não é o fim, é o portão", "Abres a seguinte porta com mais força"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Fim do nível. Antes de arrumares os cadernos, uma respiração de fecho: inspira tudo o que aprendeste — as palavras, os erros, as risadas. Soltas o cansaço. Guardas o resto. Quando estiveres pronto para o próximo passo, o teu corpo saberá primeiro: respira fundo e vai. Até já.",
        questions: [
          { q: "O que inspiras na respiração de fecho?", kind: "literal", options: ["Tudo o que aprendi", "O ar da rua", "O medo"], answer: 0, why: "«Inspira tudo o que aprendeste»: literal en el audio." },
          { q: "O que soltas?", kind: "literal", options: ["O cansaço", "As palavras novas", "Os cadernos"], answer: 0, why: "«Soltas o cansaço»." },
          { q: "Quem sabe primeiro que estás pronto?", kind: "inferencial", options: ["O corpo", "O professor", "O calendário"], answer: 0, why: "«O teu corpo saberá primeiro»: se infiere del audio." },
          { q: "O áudio termina com…", kind: "inferencial", options: ["Um convite a continuar: «até já»", "Uma despedida definitiva", "Um aviso de exame"], answer: 0, why: "«Respira fundo e vai. Até já»: despedida que promete continuidad." },
        ],
      },
    },
  ],
};
