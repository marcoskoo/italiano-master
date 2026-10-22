import type { MindReading } from "../../cambridge-mind";

/* ═══ PT B2 · Mind readings (temáticas de conciencia) — 3 por unidade ══
   Metodología v9.13: 7 estrategias de comprensión lectora y de escucha.
   Textos em português europeu B2 (ensaio reflexivo admitido), tradução
   espanhola à vista. Campos `.it` = português, `.es` = español. Temas
   com as cinco chaves italianas fixas: meditazione · spiritualità ·
   qui e ora · relax fisico · relax mentale. Estratégia por índice:
   L1 = predict + quiz (lit/inf/crít) + V/F; L2 = predict + ideas +
   intruso; L3 = predict + sequência + escuta. */

export const PT_MIND_B2: Record<string, MindReading[]> = {
  "pt-cu-b2-01": [
    {
      id: "md-pt-b2-01-1", theme: "meditazione",
      title: "A respiração antes da reunião", titleEs: "La respiración antes de la reunión", minutes: 2,
      paragraphs: [
        { it: "Antes de entrar na sala de reuniões, há um gesto que ninguém vê: três respirações contadas junto à porta. Não é um ritual de produtividade, embora os manuais de gestão o vendam como tal; é apenas uma forma de chegar inteiro ao que vem a seguir. Respiras, soltas, e a agenda deixa de ser uma ameaça para voltar a ser papel.", es: "Antes de entrar en la sala de reuniones, hay un gesto que nadie ve: tres respiraciones contadas junto a la puerta. No es un ritual de productividad, aunque los manuales de gestión lo vendan como tal; es solo una forma de llegar entero a lo que viene después. Respiras, sueltas, y la agenda deja de ser una amenaza para volver a ser papel." },
        { it: "Meditar, no fundo, é isto: preparar o corpo para o momento seguinte sem o antecipar. O teletrabalho apagou a fronteira entre a cozinha e o escritório, e a reunião entrou em casa sem pedir licença. Se não fores tu a decidir com que respiração ela começa, decide-o o calendário. Três respirações são pouco; são, porém, tuas.", es: "Meditar, en el fondo, es esto: preparar el cuerpo para el momento siguiente sin anticiparlo. El teletrabajo borró la frontera entre la cocina y la oficina, y la reunión entró en casa sin pedir permiso. Si no eres tú quien decide con qué respiración empieza, lo decide el calendario. Tres respiraciones son poco; son, sin embargo, tuyas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de gestión de la productividad", "Un gesto breve de respiración para llegar en calma a una reunión", "Una crítica del teletrabajo"],
        answer: 1,
        why: "El título une respiración y reunión: apunta a una práctica breve, no a un manual ni a un debate.",
      },
      quiz: [
        { q: "O que se faz junto à porta antes de entrar?", kind: "literal", options: ["Três respirações contadas", "Uma chamada telefónica", "A leitura da agenda"], answer: 0, why: "«Três respirações contadas junto à porta» está literal en la primera frase." },
        { q: "Porque é que o texto diz que a respiração é uma forma de «chegar inteiro»?", kind: "inferencial", options: ["Porque a reunião é perigosa", "Porque prepara o corpo para o momento sem o antecipar", "Porque substitui a agenda"], answer: 1, why: "Se infiere de «preparar o corpo para o momento seguinte sem o antecipar»." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["A produtividade depende dos manuais", "A fronteira entre casa e trabalho exige gestos conscientes", "As reuniões deviam ser abolidas"], answer: 1, why: "El texto reflexiona sobre la frontera doméstica borrada y la respuesta consciente de un gesto propio." },
      ],
      vf: [
        { text: "O texto defende que meditar é um ritual de produtividade.", value: false, why: "Dice que no lo es, aunque los manuales lo vendan como tal." },
        { text: "O teletrabalho apagou a fronteira entre a cozinha e o escritório.", value: true, why: "Está literal en el segundo párrafo." },
        { text: "Quem decide a respiração da reunião devia ser o calendário, segundo o texto.", value: false, why: "Es una advertencia: si no lo decides tú, lo decide el calendario; el texto invita a decidirla uno mismo." },
      ],
    },
    {
      id: "md-pt-b2-01-2", theme: "qui e ora",
      title: "O ecrã e a janela", titleEs: "La pantalla y la ventana", minutes: 2,
      paragraphs: [
        { it: "Entre dois emails, a janela da cozinha oferece um pedaço de céu que ninguém comprou. O ecrã exige urgência; a janela, pelo contrário, não pede nada. Se reparares bem, há sempre um minuto de silêncio entre a última notificação e a próxima — e nesse minuto cabe uma vida inteira, se tiveres a coragem de a habitar.", es: "Entre dos correos, la ventana de la cocina ofrece un pedazo de cielo que nadie compró. La pantalla exige urgencia; la ventana, por el contrario, no pide nada. Si te fijas bien, siempre hay un minuto de silencio entre la última notificación y la siguiente — y en ese minuto cabe una vida entera, si tienes el valor de habitarla." },
        { it: "O aqui e o agora não são um retiro nas montanhas: são uma escolha repetida ao balcão da própria cozinha. A cidade não precisa de desaparecer; basta que, durante um café inteiro, nenhum ecrã seja mais real do que a chávena. Chama-se presença, é gratuita e, ainda que o teletrabalho a tenha complicado, continua a ser o único luxo que não se compra.", es: "El aquí y el ahora no son un retiro en la montaña: son una elección repetida en la barra de la propia cocina. La ciudad no necesita desaparecer; basta que, durante un café entero, ninguna pantalla sea más real que la taza. Se llama presencia, es gratis y, aunque el teletrabajo la haya complicado, sigue siendo el único lujo que no se compra." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una comparación entre teletrabajadores y oficinistas", "La presencia en el momento frente a la pantalla, desde la ventana de la cocina", "Una guía de decoración de cocinas"],
        answer: 1,
        why: "El título opone pantalla y ventana: apunta a la atención al momento, no a decoración ni a estadísticas.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "O ecrã exige urgência; a janela não pede nada.",
          "Há um minuto de silêncio entre a última notificação e a próxima.",
          "A presença é uma escolha repetida ao balcão da própria cozinha.",
          "As rendas do centro de Lisboa subiram trinta por cento este ano.",
          "Nenhum ecrã devia ser mais real do que a chávena durante um café.",
        ],
        intruder: 3,
        why: "El dato del mercado inmobiliario es información práctica ajena a la reflexión sobre la presencia: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["A janela é mais útil do que o ecrã", "A presença é uma escolha gratuita que se pode fazer na própria cozinha", "As notificações deviam ser desligadas de manhã"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Há sempre um minuto de silêncio entre duas notificações", "A janela não pede nada, ao contrário do ecrã", "A presença é o único luxo que não se compra"],
        distractors: ["O autor comprou uma casa nas montanhas", "O pequeno-almoço foi servido às oito", "A cidade desapareceu durante a manhã"],
      },
    },
    {
      id: "md-pt-b2-01-3", theme: "relax fisico",
      title: "Os ombros do escritório caseiro", titleEs: "Los hombros de la oficina casera", minutes: 2,
      paragraphs: [
        { it: "A cadeira da cozinha não foi desenhada para oito horas de trabalho, e o corpo avisa primeiro pelos ombros. Sobem devagar, encostam-se às orelhas e ficam por ali, como hóspedes que ninguém convidou. Se trabalhas em casa, provavelmente tens agora os ombros mais altos do que quando começaste a ler este parágrafo.", es: "La silla de la cocina no fue diseñada para ocho horas de trabajo, y el cuerpo avisa primero por los hombros. Suben despacio, se acercan a las orejas y se quedan por ahí, como huéspedes que nadie invitó. Si trabajas en casa, probablemente tengas ahora los hombros más altos que cuando empezaste a leer este párrafo." },
        { it: "A correção é simples e cabe numa pausa de dois minutos: deixa cair os ombros, roda-os para trás três vezes e sente o pescoço a alongar. Repete sempre que o telefone tocar. Embora pareça pouco, é a diferença entre acabar o dia cansado e acabar o dia dolorido — e nenhum relatório paga uma consulta de fisioterapia.", es: "La corrección es simple y cabe en una pausa de dos minutos: deja caer los hombros, rótalos hacia atrás tres veces y siente el cuello alargarse. Repite cada vez que suene el teléfono. Aunque parezca poco, es la diferencia entre acabar el día cansado y acabar el día dolorido — y ningún informe paga una consulta de fisioterapia." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de ergonomía de oficina clásica", "Soltar la tensión de los hombros trabajando desde casa", "Una publicidad de sillas caras"],
        answer: 1,
        why: "«Escritório caseiro» + hombros: el texto va de la tensión física del teletrabajo, no del mobiliario.",
      },
      sequence: {
        instr: "Ordena los pasos del hábito según el texto:",
        events: ["Os ombros sobem devagar até às orelhas", "Notas a tensão durante o trabalho", "Deixas cair os ombros numa pausa", "Roda-os para trás três vezes", "Sentes o pescoço a alongar"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Pausa de dois minutos. Senta-te com os pés no chão e solta o ar devagar. Agora deixa cair os ombros, um e outro, sem força. Roda-os para trás, devagar, três vezes. Repara no espaço novo entre as orelhas e os ombros: esse espaço é teu. Guarda-o até ao fim do dia, mesmo que o trabalho continue o mesmo.",
        questions: [
          { q: "O que se faz com os ombros, segundo o áudio?", kind: "literal", options: ["Deixam-se cair sem força", "Levantam-se devagar", "Cruzam-se à frente do peito"], answer: 0, why: "«Deixa cair os ombros, sem força» está literal en el audio." },
          { q: "Para onde se rodam os ombros?", kind: "literal", options: ["Para trás, três vezes", "Para a frente, uma vez", "Para os lados, dez vezes"], answer: 0, why: "«Roda-os para trás, devagar, três vezes»." },
          { q: "O que se deve guardar até ao fim do dia?", kind: "inferencial", options: ["O espaço novo entre as orelhas e os ombros", "O número de pausas feitas", "A lista de tarefas pendentes"], answer: 0, why: "«Esse espaço é teu. Guarda-o até ao fim do dia»: se infiere la continuación de la sensación." },
          { q: "Que relação o áudio estabelece entre o espaço e o trabalho?", kind: "inferencial", options: ["O espaço mantém-se embora o trabalho continue igual", "O trabalho melhora quando as pausas aumentam", "O espaço desaparece quando o trabalho é muito"], answer: 0, why: "«Guarda-o até ao fim do dia, mesmo que o trabalho continue o mesmo»: el bienestar no depende de la carga." },
        ],
      },
    },
  ],

  "pt-cu-b2-02": [
    {
      id: "md-pt-b2-02-1", theme: "spiritualità",
      title: "Ouvir antes de pedir", titleEs: "Escuchar antes de pedir", minutes: 3,
      paragraphs: [
        { it: "Antes de convencer alguém, é preciso ter ouvido essa pessoa duas vezes: uma com os ouvidos e outra com o silêncio. A persuasão à portuguesa não começa com argumentos; começa com um café e com uma pergunta sincera sobre o dia do outro. Há quem chame a isto técnica; há quem lhe chame respeito — e, ainda que os manuais prefiram a primeira palavra, a segunda é a que abre portas.", es: "Antes de convencer a alguien, hay que haber escuchado a esa persona dos veces: una con los oídos y otra con el silencio. La persuasión a la portuguesa no empieza con argumentos; empieza con un café y con una pregunta sincera sobre el día del otro. Hay quien lo llama técnica; hay quien lo llama respeto — y, aunque los manuales prefieran la primera palabra, la segunda es la que abre puertas." },
        { it: "Escutar é uma prática espiritual disfarçada de educação. Quando ouves sem preparar a resposta, ofereces ao outro um terreno raro: atenção sem pressa. As melhores propostas nascem desses silêncios, porque respondem a necessidades que ninguém tinha posto por escrito. Se algum dia duvidares do poder de ouvir, lembra-te de que toda a gente fala; quase ninguém escuta.", es: "Escuchar es una práctica espiritual disfrazada de educación. Cuando escuchas sin preparar la respuesta, le ofreces al otro un terreno raro: atención sin prisa. Las mejores propuestas nacen de esos silencios, porque responden a necesidades que nadie había puesto por escrito. Si algún día dudas del poder de escuchar, recuerda que todo el mundo habla; casi nadie escucha." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso de técnicas de venta", "Escuchar de verdad como primer paso para persuadir y como práctica de respeto", "Una historia sobre los cafés de Oporto"],
        answer: 1,
        why: "El título ordena las acciones: primero escuchar, después pedir; apunta a la escucha como base.",
      },
      quiz: [
        { q: "Com o que começa a persuasão à portuguesa, segundo o texto?", kind: "literal", options: ["Com argumentos fortes", "Com um café e uma pergunta sincera", "Com uma apresentação de diapositivas"], answer: 1, why: "«Começa com um café e com uma pergunta sincera sobre o dia do outro»." },
        { q: "Porque é que as melhores propostas nascem dos silêncios?", kind: "inferencial", options: ["Porque respondem a necessidades que ninguém pôs por escrito", "Porque o silêncio impõe respeito", "Porque ninguém gosta de falar"], answer: 0, why: "Se infiere: escuchar revela lo que no está escrito y la buena propuesta responde a eso." },
        { q: "Qual destas ideias resume o texto?", kind: "critica", options: ["Ouvir sem pressa é uma forma de respeito que precede qualquer proposta", "A persuasão é uma técnica de manipulação", "O café é a única ferramenta de negociação"], answer: 0, why: "La idea central: escuchar sin prisa es respeto y precede a la propuesta." },
      ],
      vf: [
        { text: "O texto diz que escutar é uma prática espiritual disfarçada de educação.", value: true, why: "Está literal al abrir el segundo párrafo." },
        { text: "Segundo o texto, toda a gente escuta e quase ninguém fala.", value: false, why: "Es al revés: «toda a gente fala; quase ninguém escuta»." },
        { text: "Ouvir sem preparar a resposta oferece atenção sem pressa.", value: true, why: "«Ofereces ao outro um terreno raro: atenção sem pressa»." },
      ],
    },
    {
      id: "md-pt-b2-02-2", theme: "relax mentale",
      title: "A mente que ensaia objeções", titleEs: "La mente que ensaya objeciones", minutes: 2,
      paragraphs: [
        { it: "Há uma mente que trabalha mais do que nós: a que ensaia objeções antes de qualquer conversa. Enquanto o corpo espera no banco da estação, ela já está no gabinete do chefe a responder a perguntas que ninguém fez. Chama-se antecipação; devia chamar-se cansaço antecipado.", es: "Hay una mente que trabaja más que nosotros: la que ensaya objeciones antes de cualquier conversación. Mientras el cuerpo espera en el banco de la estación, ella ya está en el despacho del jefe respondiendo a preguntas que nadie hizo. Se llama anticipación; debería llamarse cansancio anticipado." },
        { it: "A relaxação mental começa por reconhecer este ensaio sem o levar à letra. Os pensamentos são como ensaios de teatro: mostram intenções, não estreias. Observa a objeção imaginária, dá-lhe um lugar na plateia e deixa que a conversa real escreva o seu próprio texto. Ainda que a mente continue a propor cenários, tu podes escolher em qual deles ficas.", es: "La relajación mental empieza por reconocer este ensayo sin tomárselo al pie de la letra. Los pensamientos son como ensayos de teatro: muestran intenciones, no estrenos. Observa la objeción imaginaria, dale un lugar en la platea y deja que la conversación real escriba su propio texto. Aunque la mente siga proponiendo escenarios, tú puedes elegir en cuál de ellos te quedas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un método para responder mejor a las objeciones", "Soltar el ensayo mental constante de conversaciones que aún no han pasado", "Una crítica de los jefes tradicionales"],
        answer: 1,
        why: "El título presenta a la mente como protagonista que ensaya: el texto va de observar ese hábito, no de perfeccionarlo.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "A mente ensaia objeções antes de qualquer conversa.",
          "Os pensamentos são ensaios de teatro: mostram intenções, não estreias.",
          "Podes escolher em qual dos cenários ficas.",
          "A linha do Porto a Braga custa doze euros e cinquenta.",
          "A conversa real escreve o seu próprio texto.",
        ],
        intruder: 3,
        why: "El precio del billete es un dato de transporte ajeno a la reflexión mental: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["As objeções imaginárias cansam mais do que as conversas reais", "Deves ensaiar todas as perguntas antes de uma reunião", "A mente que antecipa nunca descansa porque é útil"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A mente ensaia objeções antes de qualquer conversa", "Os pensamentos são ensaios de teatro, não estreias", "Podes escolher em que cenário ficas"],
        distractors: ["O chefe respondeu mal à proposta", "A estação estava cheia de manhã", "O teatro estreou na sexta-feira"],
      },
    },
    {
      id: "md-pt-b2-02-3", theme: "meditazione",
      title: "Dez minutos antes das nove", titleEs: "Diez minutos antes de las nueve", minutes: 3,
      paragraphs: [
        { it: "No Porto, antes das nove da manhã, a cidade ainda respira de janelas abertas. Dez minutos de silêncio sentado não mudam o horário de entrada, mas mudam quem entra: em vez de chegar arrastado pelo dia, chegas tu, inteiro, com a cabeça ainda tua. A meditação não precisa de almofadas especiais; precisa de uma cadeira, de uma porta fechada e de uma decisão pequena repetida.", es: "En Oporto, antes de las nueve de la mañana, la ciudad todavía respira con las ventanas abiertas. Diez minutos de silencio sentado no cambian el horario de entrada, pero cambian a quien entra: en vez de llegar arrastrado por el día, llegas tú, entero, con la cabeza todavía tuya. La meditación no necesita cojines especiales; necesita una silla, una puerta cerrada y una decisión pequeña repetida." },
        { it: "Começa por contar as respirações até dez e recomeçar quando te perderes — e perdes-te, todas as manhãs, porque a lista de tarefas também medita, à sua maneira insistente. Não importa. Voltar é a prática; perder-se faz parte do caminho de volta. Ao fim de algumas semanas, os mesmos dez minutos parecem maiores, e o dia, ainda que igual, passa a caber dentro deles.", es: "Empieza por contar las respiraciones hasta diez y volver a empezar cuando te pierdas — y te pierdes, todas las mañanas, porque la lista de tareas también medita, a su manera insistente. No importa. Volver es la práctica; perderse forma parte del camino de vuelta. Al final de unas semanas, los mismos diez minutos parecen más grandes, y el día, aunque igual, pasa a caber dentro de ellos." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los horarios de las empresas de Oporto", "Una práctica de diez minutos de meditación matinal antes del trabajo", "Una guía de transporte urbano"],
        answer: 1,
        why: "«Dez minutos antes das nove» apunta al hueco de calma antes de la jornada, no a horarios ni transporte.",
      },
      sequence: {
        instr: "Ordena la práctica según el texto:",
        events: ["Sentas-te numa cadeira com a porta fechada", "Contas as respirações até dez", "Perdes a conta com a lista de tarefas", "Recomeças sem te zangares contigo", "Ao fim de semanas, o dia cabe nos mesmos dez minutos"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Bom dia. Antes do primeiro email, senta-te. Não é preciso almofada nem aplicação: uma cadeira e uma porta fechada chegam. Conta dez respirações, devagar. Se a lista de tarefas aparecer, deixa-a sentar-se ao teu lado, sem a convidares para a conversa. Perdeste a conta? Recomeça. Voltar é a prática. Quando te levantares, o dia continua teu por uns minutos ainda.",
        questions: [
          { q: "O que é preciso para esta prática, segundo o áudio?", kind: "literal", options: ["Uma cadeira e uma porta fechada", "Uma almofada especial", "Uma aplicação de meditação"], answer: 0, why: "«Uma cadeira e uma porta fechada chegam»." },
          { q: "O que se faz quando a lista de tarefas aparece?", kind: "literal", options: ["Deixa-se sentar ao lado, sem a convidar", "Escreve-se tudo num papel", "Abre-se logo o email"], answer: 0, why: "«Deixa-a sentar-se ao teu lado, sem a convidares para a conversa»." },
          { q: "Qual é a prática, segundo o áudio?", kind: "inferencial", options: ["Voltar", "Contar sem se perder nunca", "Limpar a mente de pensamentos"], answer: 0, why: "«Perdeste a conta? Recomeça. Voltar é a prática»: lo esencial es regresar." },
          { q: "O que significa «o dia continua teu por uns minutos»?", kind: "inferencial", options: ["A calma da manhã prolonga-se no dia", "O dia de trabalho foi cancelado", "Os minutos podem ser comprados"], answer: 0, why: "Se infiere que el sosiego guardado al empezar acompaña el resto del día." },
        ],
      },
    },
  ],

  "pt-cu-b2-03": [
    {
      id: "md-pt-b2-03-1", theme: "qui e ora",
      title: "Rir sem pressa", titleEs: "Reírse sin prisa", minutes: 2,
      paragraphs: [
        { it: "A gargalhada rápida é um reflexo; o sorriso demorado é uma presença. No humor seco português, a piada exige tempo: há que ouvir a frase inteira, esperar a pausa e só depois decidir se se ri — o que significa, na prática, estar inteiro no momento em que o outro fala. Quem está mentalmente na resposta não apanha o giro.", es: "La carcajada rápida es un reflejo; la sonrisa demorada es una presencia. En el humor seco portugués, el chiste exige tiempo: hay que oír la frase entera, esperar la pausa y solo después decidir si uno se ríe — lo que significa, en la práctica, estar entero en el momento en que el otro habla. Quien está mentalmente en la respuesta no caza el giro." },
        { it: "Rir-se bem é, portanto, um exercício de escuta disfarçado de diversão. A mesa do jantar é um lugar de treino melhor do que qualquer aplicação: exige presença, tolerância à surpresa e a coragem de não levar o próprio ego à letra. Quando a gozação chega, respira, deixa a frase assentar e responde à altura — o aqui e o agora também se pratica a rir.", es: "Reírse bien es, por tanto, un ejercicio de escucha disfrazado de diversión. La mesa de la cena es un lugar de entrenamiento mejor que cualquier aplicación: exige presencia, tolerancia a la sorpresa y el valor de no tomarse al pie de la letra el propio ego. Cuando llega la burla, respira, deja que la frase se asiente y responde a la altura — el aquí y el ahora también se practica riendo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una teoría sobre el humor portugués", "Reírse bien como ejercicio de presencia y escucha en el momento", "Un manual de chistes para cenas"],
        answer: 1,
        why: "«Rir sem pressa» apunta a la calidad de la atención al reír, no a una teoría ni a un repertorio.",
      },
      quiz: [
        { q: "O que exige a piada de humor seco, segundo o texto?", kind: "literal", options: ["Tempo: ouvir a frase, esperar a pausa, decidir", "Voz alta e gestos largos", "Conhecimento prévio da pessoa"], answer: 0, why: "«Há que ouvir a frase inteira, esperar a pausa e só depois decidir»." },
        { q: "Porque é que quem está mentalmente na resposta não apanha o giro?", kind: "inferencial", options: ["Porque não ouve a frase inteira nem a pausa", "Porque não conhece o humor português", "Porque fala muito alto"], answer: 0, why: "Se infiere: estar en la respuesta impide la presencia que el giro requiere." },
        { q: "Qual é a ideia principal?", kind: "critica", options: ["Rir bem exige presença e escuta, não velocidade", "O humor seco é difícil para estrangeiros", "As mesas de jantar são locais ruidosos"], answer: 0, why: "El texto sostiene que reír bien es escucha con presencia, no rapidez." },
      ],
      vf: [
        { text: "O sorriso demorado é apresentado como uma forma de presença.", value: true, why: "«A gargalhada rápida é um reflexo; o sorriso demorado é uma presença»." },
        { text: "O texto recomenda responder antes de a frase terminar.", value: false, why: "Recomienda oír la frase entera y esperar la pausa antes de decidir." },
        { text: "A mesa do jantar é descrita como um lugar de treino de presença.", value: true, why: "«A mesa do jantar é um lugar de treino melhor do que qualquer aplicação»." },
      ],
    },
    {
      id: "md-pt-b2-03-2", theme: "relax fisico",
      title: "A mesa posta", titleEs: "La mesa puesta", minutes: 2,
      paragraphs: [
        { it: "O corpo também janta. Enquanto a conversa ocupa a boca, os ombros descem, os maxilares se soltam e as mãos desaceleram sobre o pão. Uma mesa posta é um convite à lentidão: o calor dos pratos, o peso dos talheres reais, o copo que pousa com um som pequeno — tudo isso acalma por baixo das palavras.", es: "El cuerpo también cena. Mientras la conversación ocupa la boca, los hombros bajan, las mandíbulas se sueltan y las manos desaceleran sobre el pan. Una mesa puesta es una invitación a la lentitud: el calor de los platos, el peso de los cubiertos de verdad, el vaso que se posa con un sonido pequeño — todo eso calma por debajo de las palabras." },
        { it: "Depois de um dia de ecrãs, o jantar de equipa pode ser uma sessão de relaxamento disfarçada. Não pela comida, mas pelo ritmo: sentar, cortar, servir o vizinho, esperar. Se o corpo ainda vier tenso, começa pelo maxilar — solta-o antes da primeira garfada — e deixa que a mesa faça o resto. Nenhuma postura perfeita substitui o pão partido devagar.", es: "Después de un día de pantallas, la cena de equipo puede ser una sesión de relajación disfrazada. No por la comida, sino por el ritmo: sentarse, cortar, servir al vecino, esperar. Si el cuerpo llega todavía tenso, empieza por la mandíbula — suéltala antes del primer bocado — y deja que la mesa haga el resto. Ninguna postura perfecta sustituye el pan partido despacio." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Recetas de cocina portuguesa", "El relax físico del cuerpo sentado a una mesa, por el ritmo de la cena", "Ejercicios para hacer antes de cenar"],
        answer: 1,
        why: "«A mesa posta» con cuerpo y ritmo apunta a la calma física de la cena, no a recetas ni gimnasia.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Os ombros descem e os maxilares se soltam à mesa.",
          "O calor dos pratos e o peso dos talheres reais acalmam.",
          "O copo pousa com um som pequeno.",
          "O grupo deixou quinze por cento de gorjeta na conta.",
          "O pão partido devagar acalma o corpo.",
        ],
        intruder: 3,
        why: "La propina de la cuenta es un dato práctico de restaurante ajeno a la calma corporal: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["O jantar relaxa pelo ritmo do corpo, não só pela comida", "A comida portuguesa é a mais calma do mundo", "Os ecrãs deviam ser proibidos às refeições"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Os ombros descem e os maxilares se soltam à mesa", "O peso dos talheres reais acalma por baixo das palavras", "Soltar o maxilar antes da primeira garfada ajuda"],
        distractors: ["O vinho foi servido às nove em ponto", "A empregada trouxe o polvo à mesa", "O grupo reservou a mesa da esquina"],
      },
    },
    {
      id: "md-pt-b2-03-3", theme: "spiritualità",
      title: "A gozação gentil", titleEs: "La broma gentil", minutes: 3,
      paragraphs: [
        { it: "Há uma forma de humor que aproxima e outra que afasta; a diferença cabe numa preposição. Gozar com alguém é caminhar ao lado; gozar de alguém é apontar o dedo. Em Portugal, a gozação entre colegas é, quase sempre, um ritual de afeto — uma maneira de dizer «és dos nossos» que nenhum protocolo consegue traduzir.", es: "Hay una forma de humor que acerca y otra que aleja; la diferencia cabe en una preposición. Gozar con alguien es caminar al lado; gozar de alguien es señalar con el dedo. En Portugal, la burla entre colegas es, casi siempre, un ritual de afecto — una manera de decir «eres de los nuestros» que ningún protocolo consigue traducir." },
        { it: "Receber uma gozação com serenidade é, por isso, uma prática espiritual de rua: exige humildade para não responder ao ego, presença para apanhar o tom e generosidade para devolver na mesma moeda. Quem se ri de si próprio antes que os outros faz um retiro inteiro sem sair da mesa. O humor que une é uma forma discreta de amor ao próximo — ainda que ninguém o diga em voz alta.", es: "Recibir una burla con serenidad es, por eso, una práctica espiritual de calle: exige humildad para no responder al ego, presencia para cazar el tono y generosidad para devolver con la misma moneda. Quien se ríe de sí mismo antes que los demás hace un retiro entero sin salir de la mesa. El humor que une es una forma discreta de amor al prójimo — aunque nadie lo diga en voz alta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía para contar chistes", "La burla afectuosa como ritual de pertenencia y práctica de humildad", "Una crítica del humor en el trabajo"],
        answer: 1,
        why: "«Gozação gentil» apunta a la broma que une, no a técnicas ni a críticas.",
      },
      sequence: {
        instr: "Ordena la experiencia según el texto:",
        events: ["Recebes uma gozação à mesa", "Reconheces o tom afetuoso por trás da frase", "Respiras sem responder ao ego", "Devolves a gozação na mesma moeda", "A mesa fica mais unida do que antes"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Se hoje te gozarem com carinho, experimenta isto: primeiro, respira uma vez antes de responder. Segundo, procura o afeto escondido na frase — quase sempre está lá. Terceiro, devolve com leveza, sem ferir. A gozação gentil é uma conversa de confiança: quem a recebe bem diz ao outro que a amizade aguenta brincadeira. E quem brinca connosco, quase sempre, é porque gosta de nós.",
        questions: [
          { q: "O que se faz primeiro, segundo o áudio?", kind: "literal", options: ["Respirar uma vez antes de responder", "Responder com uma piada maior", "Sair da mesa"], answer: 0, why: "«Primeiro, respira uma vez antes de responder»." },
          { q: "O que se deve procurar na frase do outro?", kind: "literal", options: ["O afeto escondido", "Um erro de gramática", "Uma segunda intenção maldosa"], answer: 0, why: "«Procura o afeto escondido na frase»." },
          { q: "O que significa «quem a recebe bem diz ao outro que a amizade aguenta»?", kind: "inferencial", options: ["Receber a brincadeira com leveza reforça a confiança", "A amizade depende de brincar sempre", "Quem não brinca não tem amigos"], answer: 0, why: "Se infiere que recibir bien la broma confirma la solidez del vínculo." },
          { q: "Que conclusão o áudio tira sobre quem brinca connosco?", kind: "inferencial", options: ["Quase sempre gosta de nós", "Quase sempre quer ofender-nos", "Quase sempre nos inveja"], answer: 0, why: "«Quem brinca connosco, quase sempre, é porque gosta de nós»." },
        ],
      },
    },
  ],

  "pt-cu-b2-04": [
    {
      id: "md-pt-b2-04-1", theme: "relax mentale",
      title: "Escrever devagar", titleEs: "Escribir despacio", minutes: 2,
      paragraphs: [
        { it: "Escrever um ensaio é, antes de tudo, um ato de lentidão. A primeira frase raramente é a primeira: é a décima, disfarçada de começo. Quem escreve com pressa produz opiniões; quem escreve devagar produz pensamento — e a diferença nota-se na primeira vírgula, que é onde o escritor decidiu respirar.", es: "Escribir un ensayo es, ante todo, un acto de lentitud. La primera frase rara vez es la primera: es la décima, disfrazada de comienzo. Quien escribe con prisa produce opiniones; quien escribe despacio produce pensamiento — y la diferencia se nota en la primera coma, que es donde el escritor decidió respirar." },
        { it: "A mente precisa do mesmo respeito que o texto: rascunhos, hesitações, parágrafos que se apagam sem drama. Deixa a frase mal acabada seguir o teu dia; o inconsciente continua o trabalho enquanto lavas a loiça. Quando voltas, a frase certa costuma estar à espera, ainda que o computador não tenha registado a viagem. Escrever devagar não é perder tempo: é confiar em quem escreve.", es: "La mente necesita el mismo respeto que el texto: borradores, vacilaciones, párrafos que se borran sin drama. Deja que la frase mal acabada siga tu día; el inconsciente continúa el trabajo mientras lavas los platos. Cuando vuelves, la frase correcta suele estar esperando, aunque el ordenador no haya registrado el viaje. Escribir despacio no es perder el tiempo: es confiar en quien escribe." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Trucos para escribir más rápido", "La lentitud como parte del proceso de escribir y pensar", "Una crítica de los ensayos académicos"],
        answer: 1,
        why: "El título nombra directamente el tema: escribir despacio como condición del pensamiento.",
      },
      quiz: [
        { q: "Onde se nota a diferença entre escrever com pressa e escrever devagar?", kind: "literal", options: ["Na primeira vírgula", "No número de páginas", "Na capa do ensaio"], answer: 0, why: "«A diferença nota-se na primeira vírgula, que é onde o escritor decidiu respirar»." },
        { q: "Porque é que a frase certa costuma estar à espera quando se volta?", kind: "inferencial", options: ["Porque o inconsciente continua o trabalho enquanto se faz outra coisa", "Porque o computador regista tudo", "Porque lavar a loiça inspira ideias"], answer: 0, why: "Se infiere de «o inconsciente continua o trabalho enquanto lavas a loiça»." },
        { q: "Qual ideia resume o texto?", kind: "critica", options: ["Escrever devagar é confiar no próprio processo", "Os bons escritores nunca apagam nada", "O computador estragou a escrita"], answer: 0, why: "El cierre lo afirma: «escrever devagar não é perder tempo: é confiar em quem escreve»." },
      ],
      vf: [
        { text: "A primeira frase de um ensaio é, quase sempre, a décima disfarçada.", value: true, why: "«A primeira frase raramente é a primeira: é a décima, disfarçada de começo»." },
        { text: "O texto recomenda apagar os parágrafos com drama para aprender.", value: false, why: "Recomienda apagá-los «sem drama»." },
        { text: "O inconsciente continua a trabalhar enquanto se lavam os pratos.", value: true, why: "«O inconsciente continua o trabalho enquanto lavas a loiça»." },
      ],
    },
    {
      id: "md-pt-b2-04-2", theme: "meditazione",
      title: "A pausa entre dois argumentos", titleEs: "La pausa entre dos argumentos", minutes: 2,
      paragraphs: [
        { it: "Um ensaio bem escrito respira como quem medita: argumento, pausa, argumento. A pausa entre dois parágrafos não é vazia; é o lugar onde o leitor digere o que leu e onde o autor, se for sábio, também descansa. Escrever sem pausas é gritar durante três páginas — ninguém ouve nada.", es: "Un ensayo bien escrito respira como quien medita: argumento, pausa, argumento. La pausa entre dos párrafos no es vacía; es el lugar donde el lector digiere lo que leyó y donde el autor, si es sabio, también descansa. Escribir sin pausas es gritar durante tres páginas — nadie oye nada." },
        { it: "Na meditação, chama-se a isto o espaço entre duas respirações: nem inspiração nem expiração, apenas presença. No texto, é o ponto final antes da ideia nova. Pratica-o ao ler em voz alta: onde precisares de respirar, o leitor também precisará. O silêncio bem colocado faz metade do argumento; a outra metade faz-se com palavras que não tenham medo dele.", es: "En meditación, esto se llama el espacio entre dos respiraciones: ni inspiración ni espiración, solo presencia. En el texto, es el punto final antes de la idea nueva. Practícalo leyendo en voz alta: donde necesites respirar, el lector también lo necesitará. El silencio bien colocado hace la mitad del argumento; la otra mitad se hace con palabras que no le tengan miedo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de respiración deportiva", "La pausa como parte esencial del ritmo de un texto, como en la meditación", "Cómo elegir títulos de ensayos"],
        answer: 1,
        why: "El título une argumento y pausa: el texto trata del ritmo reflexivo de la escritura.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "A pausa entre dois parágrafos não é vazia.",
          "O silêncio bem colocado faz metade do argumento.",
          "O ponto final antes da ideia nova é presença.",
          "A revista recebeu mil e duzentos ensaios este ano.",
          "Onde precisares de respirar, o leitor também precisará.",
        ],
        intruder: 3,
        why: "El número de ensayos recibidos pertenece al concurso, no a la reflexión sobre el ritmo del texto: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["As pausas bem colocadas fazem metade do argumento", "Os ensaios deviam ser mais curtos", "Ler em voz alta estraga os textos"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A pausa entre parágrafos é onde o leitor digere", "O ponto final antes da ideia nova é como o espaço entre respirações", "Onde o autor respira, o leitor também respira"],
        distractors: ["O ensaio tinha trezentas palavras", "O júri publicou a lista de vencedores", "As redes sociais encurtam a atenção"],
      },
    },
    {
      id: "md-pt-b2-04-3", theme: "qui e ora",
      title: "As notificações e o momento", titleEs: "Las notificaciones y el momento", minutes: 3,
      paragraphs: [
        { it: "Há duas maneiras de estar num momento: habitá-lo ou fotografá-lo para o partilhar. As redes sociais vendem a segunda como se fosse a primeira, e a confusão instalou-se de tal forma que já há quem peça desculpa por estar offline. O momento presente, contudo, continua à espera: não notifica, não dá pontos, não tem contadores.", es: "Hay dos maneras de estar en un momento: habitarlo o fotografiarlo para compartirlo. Las redes sociales venden la segunda como si fuera la primera, y la confusión se instaló de tal forma que ya hay quien pida disculpas por estar sin conexión. El momento presente, sin embargo, sigue esperando: no notifica, no da puntos, no tiene contadores." },
        { it: "Desligar as notificações durante uma hora não é uma declaração de guerra ao mundo; é um convite ao mundo. A rua cheira a outra coisa quando o telemóvel dorme; a conversa ganha silêncios que dizem mais. Ainda que a bolha de opiniões seja o tema do ensaio, a única bolha que podes escolher hoje é a desta hora, deste lugar, desta respiração — e dessa ninguém publicou ainda nada.", es: "Apagar las notificaciones durante una hora no es una declaración de guerra al mundo; es una invitación al mundo. La calle huele a otra cosa cuando el móvil duerme; la conversación gana silencios que dicen más. Aunque la burbuja de opiniones sea el tema del ensayo, la única burbuja que puedes elegir hoy es la de esta hora, de este lugar, de esta respiración — y de esa nadie ha publicado todavía nada." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de redes sociales", "Elegir habitar el momento presente frente a fotografiarlo para compartirlo", "Un ensayo sobre la burbuja de las opiniones"],
        answer: 1,
        why: "El título enfrenta notificaciones y momento: el texto defiende la presencia frente a la conexión continua.",
      },
      sequence: {
        instr: "Ordena la experiencia según el texto:",
        events: ["Recebes uma notificação no meio de uma conversa", "Notas o impulso de a abrir", "Deixas o telemóvel a dormir durante uma hora", "A rua passa a cheirar a outra coisa", "A conversa ganha silêncios que dizem mais"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Um pequeno ensaio falado. Se hoje escolheres uma hora sem notificações, não a chames de fuga: chama-lhe presença. O mundo não vai embora; apenas espera. Nessa hora, a conversa tem pausas que valerão mais do que qualquer publicação. E quando voltares ao ecrã, os mesmos avisos lá estarão, pobres de urgência. O momento, esse, não fica em fila de espera: passa-se agora, com ou sem testemunhas.",
        questions: [
          { q: "Como se deve chamar a hora sem notificações?", kind: "literal", options: ["Presença, não fuga", "Fuga, não presença", "Produção, não distração"], answer: 0, why: "«Não a chames de fuga: chama-lhe presença»." },
          { q: "O que acontece quando se volta ao ecrã?", kind: "literal", options: ["Os mesmos avisos lá estão, pobres de urgência", "Tudo mudou de lugar", "As mensagens desapareceram"], answer: 0, why: "«Os mesmos avisos lá estarão, pobres de urgência»." },
          { q: "O que se conclui sobre «o momento»?", kind: "inferencial", options: ["Passa-se agora, com ou sem testemunhas", "Só existe quando é partilhado", "Depende da rede social"], answer: 0, why: "«Passa-se agora, com ou sem testemunhas»." },
          { q: "Que relação o áudio estabelece entre o mundo e a hora offline?", kind: "inferencial", options: ["O mundo espera em vez de ir embora", "O mundo pune quem desaparece", "O mundo acaba nessa hora"], answer: 0, why: "«O mundo não vai embora; apenas espera»." },
        ],
      },
    },
  ],

  "pt-cu-b2-05": [
    {
      id: "md-pt-b2-05-1", theme: "relax fisico",
      title: "A casa por dentro", titleEs: "La casa por dentro", minutes: 2,
      paragraphs: [
        { it: "Visitar uma casa com intenção de morar é um exercício dos sentidos: os pés medem a temperatura do soalho, as mãos seguem a luz das janelas, os ouvidos testam o silêncio da rua. O corpo decide muito antes do contrato; a cabeça limita-se a assinar o que aquele já escolheu.", es: "Visitar una casa con intención de vivir en ella es un ejercicio de los sentidos: los pies miden la temperatura del suelo, las manos siguen la luz de las ventanas, los oídos prueban el silencio de la calle. El cuerpo decide mucho antes del contrato; la cabeza se limita a firmar lo que aquel ya eligió." },
        { it: "Deixa a visita ser lenta. Toca nas paredes, abre a janela do quarto, escuta o prédio inteiro a respirar — há casas que acolhem e casas que apressam. Se o corpo descontrair enquanto imaginas a mesa do jantar naquele canto, esse é um dado tão sério como a renda. Nenhuma negociação devia começar antes de saberes como os teus ombros se sentem naquela cozinha.", es: "Deja que la visita sea lenta. Toca las paredes, abre la ventana del dormitorio, escucha el edificio entero respirar — hay casas que acogen y casas que apresuran. Si el cuerpo se relaja mientras imaginas la mesa de la cena en aquel rincón, ese es un dato tan serio como la renta. Ninguna negociación debería empezar antes de saber cómo se sienten tus hombros en aquella cocina." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un contrato de arrendamiento explicado", "Recorrer una casa con los sentidos antes de decidir", "Una guía de decoración barata"],
        answer: 1,
        why: "«A casa por dentro» con visita lenta y sentidos apunta a la percepción corporal del espacio, no al contrato.",
      },
      quiz: [
        { q: "O que medem os pés na visita, segundo o texto?", kind: "literal", options: ["A temperatura do soalho", "A altura do teto", "A largura das portas"], answer: 0, why: "«Os pés medem a temperatura do soalho»." },
        { q: "Porque é que o texto diz que a cabeça «limita-se a assinar»?", kind: "inferencial", options: ["Porque o corpo já decidiu antes do contrato", "Porque a cabeça não entende de casas", "Porque os contratos assinam-se sozinhos"], answer: 0, why: "Se infiere de «o corpo decide muito antes do contrato»." },
        { q: "Qual é o conselho central do texto?", kind: "critica", options: ["A negociação devia começar pelo bem-estar do corpo na casa", "A renda é o único dado sério", "As visitas deviam ser rápidas"], answer: 0, why: "El cierre lo pide: sentir los hombros en la cocina antes de negociar." },
      ],
      vf: [
        { text: "O texto aconselha tocar nas paredes e abrir a janela do quarto.", value: true, why: "«Toca nas paredes, abre a janela do quarto»." },
        { text: "Segundo o texto, a renda é mais séria do que o bem-estar do corpo.", value: false, why: "Dice que sentirse bien en la cocina es «um dado tão sério como a renda»." },
        { text: "Há casas que acolhem e casas que apressam, segundo o texto.", value: true, why: "«Há casas que acolhem e casas que apressam»." },
      ],
    },
    {
      id: "md-pt-b2-05-2", theme: "spiritualità",
      title: "Mais que quatro paredes", titleEs: "Más que cuatro paredes", minutes: 3,
      paragraphs: [
        { it: "Há uma oração laica que se diz ao fechar a porta de uma casa nova: que estas paredes nos guardem o que de melhor trouxermos. Um lar não se mede em metros quadrados nem se negocia em cêntimos; constrói-se todos os dias, com o pequeno-almoço no mesmo sítio e a janela que se abre primeiro.", es: "Hay una oración laica que se dice al cerrar la puerta de una casa nueva: que estas paredes nos guarden lo mejor que traigamos. Un hogar no se mide en metros cuadrados ni se negocia en céntimos; se construye todos los días, con el desayuno en el mismo sitio y la ventana que se abre primero." },
        { it: "A gratidão por um teto é uma prática espiritual antiga e discreta. Quem já mudou de casa sabe: as primeiras noites são de estranho, e é preciso inaugurar o espaço com gestos pequenos — a caneca preferida à frente, o casaco no sítio de sempre — para que a casa comece a reconhecer-nos. Ainda que o contrato tenha prazo, o pertencer não o tem; esse assina-se por dentro.", es: "La gratitud por un techo es una práctica espiritual antigua y discreta. Quien ya se ha mudado de casa lo sabe: las primeras noches son de extraño, y hace falta inaugurar el espacio con gestos pequeños — la taza preferida delante, el abrigo en el sitio de siempre — para que la casa empiece a reconocernos. Aunque el contrato tenga plazo, el pertenecer no lo tiene; ese se firma por dentro." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un anuncio inmobiliario", "La gratitud por un hogar y los gestos que lo fundan más allá del contrato", "Una guía de mudanzas eficaces"],
        answer: 1,
        why: "El título contrasta paredes y algo más: el texto va de fundar un hogar con gestos, no de contratos ni mudanzas.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Um lar constrói-se todos os dias com gestos pequenos.",
          "A gratidão por um teto é uma prática antiga e discreta.",
          "As primeiras noites numa casa nova são de estranho.",
          "A renda mensal custava oitocentos e noventa euros.",
          "O pertencer não tem prazo; assina-se por dentro.",
        ],
        intruder: 3,
        why: "El importe de la renta es un dato del contrato, ajeno a la reflexión sobre fundar un hogar: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Um lar constrói-se com gestos pequenos repetidos, não com contratos", "As casas novas são sempre frias", "Os contratos de arrendamento deviam ser mais curtos"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["O pequeno-almoço no mesmo sítio constrói o lar", "A caneca preferida à frente inaugura o espaço", "O pertencer assina-se por dentro"],
        distractors: ["A caução foi de dois meses", "O elevador do prédio era antigo", "O senhorio morava em Setúbal"],
      },
    },
    {
      id: "md-pt-b2-05-3", theme: "relax mentale",
      title: "Negociar sem aperto", titleEs: "Negociar sin opresión", minutes: 2,
      paragraphs: [
        { it: "A ansiedade de perder a casa faz da negociação um combate; a calma faz dela uma conversa. Antes de propor valor algum, vale a pena um minuto de respiração: o número que se diz com o peito fechado soa a desespero, e o desespero, em Portugal, nunca teve bom desconto.", es: "La ansiedad por perder la casa convierte la negociación en un combate; la calma la convierte en conversación. Antes de proponer valor alguno, vale la pena un minuto de respiración: el número que se dice con el pecho cerrado suena a desesperación, y la desesperación, en Portugal, nunca tuvo buen descuento." },
        { it: "A mente serena negoceia melhor porque consegue ouvir: percebe quando o senhorio hesita, quando a pausa dele é convite, quando o silêncio vale dez euros. Soltar o resultado antes de entrar na conversa não é resignação; é estratégia de quem sabe que haverá outras casas, mas não outros nervos. Se a proposta não chegar, chega-se a um meio-termo ou chega-se a outra porta — em ambos os casos, chega-se inteiro.", es: "La mente serena negocia mejor porque consigue escuchar: percibe cuándo el casero duda, cuándo su pausa es una invitación, cuándo el silencio vale diez euros. Soltar el resultado antes de entrar en la conversación no es resignación; es estrategia de quien sabe que habrá otras casas, pero no otros nervios. Si la propuesta no llega, se llega a un punto intermedio o se llega a otra puerta — en ambos casos, se llega entero." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de descuento agresivas", "La calma mental como ventaja en una negociación", "El mercado inmobiliario de Lisboa"],
        answer: 1,
        why: "«Negociar sem aperto» apunta al estado mental del que negocia, no al mercado ni a tácticas de presión.",
      },
      sequence: {
        instr: "Ordena la negociación serena según el texto:",
        events: ["Respiras um minuto antes da conversa", "Propões o número com o peito aberto", "Ouves a hesitação do senhorio", "Valoras a pausa dele como convite", "Chegas a um meio-termo ou a outra porta, inteiro"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Antes da próxima negociação, experimenta este minuto. Respira pelo nariz, solta pela boca, três vezes. Diz a ti mesmo: haverá outras casas, mas não outros nervos. Quando o número for dito, deixa uma pausa antes de responder — a pausa não é fraqueza, é equilíbrio. E se o acordo não vier, virá uma porta nova. Sai da conversa como entraste: inteiro.",
        questions: [
          { q: "Quantas respirações se fazem no minuto?", kind: "literal", options: ["Três", "Dez", "Nenhuma"], answer: 0, why: "«Respira pelo nariz, solta pela boca, três vezes»." },
          { q: "O que se faz quando o número é dito?", kind: "literal", options: ["Deixa-se uma pausa antes de responder", "Responde-se imediatamente", "Levanta-se e sai-se"], answer: 0, why: "«Deixa uma pausa antes de responder»." },
          { q: "O que a pausa representa, segundo o áudio?", kind: "inferencial", options: ["Equilíbrio, não fraqueza", "Fraqueza disfarçada", "Falta de interesse"], answer: 0, why: "«A pausa não é fraqueza, é equilíbrio»." },
          { q: "O que significa «sai da conversa como entraste»?", kind: "inferencial", options: ["Sair com a mesma integridade e calma", "Sair sem responder", "Sair com o mesmo contrato"], answer: 0, why: "Se infiere del cierre «inteiro»: conservar la integridad sea cual sea el resultado." },
        ],
      },
    },
  ],

  "pt-cu-b2-06": [
    {
      id: "md-pt-b2-06-1", theme: "meditazione",
      title: "Respirar numa sala cheia", titleEs: "Respirar en una sala llena", minutes: 2,
      paragraphs: [
        { it: "Cem desconhecidos numa sala são cem convites à pressa: a mão estendida, o cartão pronto, a frase de abertura ensaiada. Antes de tudo isso, porém, há uma respiração — a que decide se entras na sala a correr ou a chegar. Ninguém repara nela; todos reparam na diferença.", es: "Cien desconocidos en una sala son cien invitaciones a la prisa: la mano extendida, la tarjeta lista, la frase de apertura ensayada. Antes de todo eso, sin embargo, hay una respiración — la que decide si entras en la sala corriendo o llegando. Nadie la nota; todos notan la diferencia." },
        { it: "Meditar numa conferência não exige almofada nem retiro: exige trinta segundos junto ao café, a respiração contada e a decisão de ver pessoas em vez de contactos. Ainda que o objetivo sejam três cartões, cada conversa é um momento que se passa uma única vez. Quem respira antes de abordar ouve melhor, pergunta melhor — e, por estranho que pareça, é lembrado melhor.", es: "Meditar en una conferencia no exige cojín ni retiro: exige treinta segundos junto al café, la respiración contada y la decisión de ver personas en lugar de contactos. Aunque el objetivo sean tres tarjetas, cada conversación es un momento que se pasa una única vez. Quien respira antes de abordar escucha mejor, pregunta mejor — y, por extraño que parezca, es recordado mejor." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de networking", "Respirar antes de trabajar una sala: presencia antes que contactos", "Una crítica de las conferencias técnicas"],
        answer: 1,
        why: "El título une respiración y sala llena: apunta a la calma interior antes del contacto social.",
      },
      quiz: [
        { q: "O que se faz junto ao café, segundo o texto?", kind: "literal", options: ["Trinta segundos de respiração contada", "Um café duplo", "A leitura do programa"], answer: 0, why: "«Exige trinta segundos junto ao café, a respiração contada»." },
        { q: "Porque é que todos reparam na diferença, embora ninguém repare na respiração?", kind: "inferencial", options: ["Porque a calma muda a forma de chegar e de ouvir", "Porque a respiração é invisível por natureza", "Porque o café disfarça tudo"], answer: 0, why: "Se infiere: la respiración previa cambia cómo se llega y cómo se escucha." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["Ver pessoas em vez de contactos transforma o networking", "Três cartões é o objetivo de qualquer conferência", "As conferências são demasiado grandes"], answer: 0, why: "El texto propone tratar cada conversa como momento único: personas, no contactos." },
      ],
      vf: [
        { text: "O texto descreve cem desconhecidos como cem convites à pressa.", value: true, why: "«Cem desconhecidos numa sala são cem convites à pressa»." },
        { text: "Meditar numa conferência exige uma almofada especial, segundo o texto.", value: false, why: "Dice que no exige almofada ni retiro: bastan treinta segundos junto al café." },
        { text: "Quem respira antes de abordar é lembrado melhor.", value: true, why: "«Quem respira antes de abordar ouve melhor, pergunta melhor — e é lembrado melhor»." },
      ],
    },
    {
      id: "md-pt-b2-06-2", theme: "qui e ora",
      title: "O café que arrefece", titleEs: "El café que se enfría", minutes: 2,
      paragraphs: [
        { it: "Na mesa de café portuguesa, o galão chega quente e arrefece sem pressa — como a conversa que o acompanha. Há quem beba o primeiro gole já a olhar para o relógio; há quem aprenda, com o tempo, a acompanhar a temperatura do café: quente, morno, quase frio, e só então a conta. O tempo do café é o tempo da confiança.", es: "En la mesa de café portuguesa, el galão llega caliente y se enfría sin prisa — como la conversación que lo acompaña. Hay quien bebe el primer sorbo ya mirando el reloj; hay quien aprende, con el tiempo, a acompañar la temperatura del café: caliente, tibio, casi frío, y solo entonces la cuenta. El tiempo del café es el tiempo de la confianza." },
        { it: "Estar presente numa conversa é deixá-la arrefecer devagar: sem a acelerar com perguntas de entrevista, sem a desviar para a própria agenda. A pergunta certa espera pela sua temperatura; a proposta chega quando o copo está vazio, nunca quando ainda fumega. Nos negócios como no café, quem não tem pressa bebe melhor.", es: "Estar presente en una conversación es dejarla enfriarse despacio: sin acelerarla con preguntas de entrevista, sin desviarla hacia la propia agenda. La pregunta correcta espera su temperatura; la propuesta llega cuando el vaso está vacío, nunca cuando todavía humea. En los negocios como en el café, quien no tiene prisa bebe mejor." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La receta del galão portugués", "El ritmo lento de la conversa de café como forma de presencia", "Cómo pedir la cuenta rápido"],
        answer: 1,
        why: "El café que se enfría es la metáfora del ritmo de la conversación: el texto va de presencia, no de recetas.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "O galão chega quente e arrefece sem pressa.",
          "A conversa acompanha a temperatura do café.",
          "A pergunta certa espera pela sua temperatura.",
          "O crachá da conferência trazia um código QR novo.",
          "Quem não tem pressa bebe melhor.",
        ],
        intruder: 3,
        why: "El detalle técnico del crachá pertenece a la conferencia, no a la reflexión sobre el ritmo de la conversa: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["A conversa de negócios tem o tempo do café: não se apressa", "O café português é melhor que o expresso", "Os negócios fecham-se sempre à primeira hora"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["O galão arrefece sem pressa como a conversa", "A pergunta certa espera pela sua temperatura", "A proposta chega quando o copo está vazio"],
        distractors: ["O galão custava um euro e dez", "A mesa estava reservada às dez", "O empregado trouxe duas tostas"],
      },
    },
    {
      id: "md-pt-b2-06-3", theme: "relax fisico",
      title: "O peso do crachá", titleEs: "El peso del crachá", minutes: 3,
      paragraphs: [
        { it: "No fim de uma conferência, o corpo sabe antes da cabeça: os pés doem de mármore, os ombros carregam o peso da mochila e do crachá, os olhos pedem horizonte depois de horas de ecrãs e corredores. Desfazer o dia começa por desfazer o corpo: sapatos fora, pés no chão frio do quarto, uma posição em que nada tenha de ser mantido.", es: "Al final de una conferencia, el cuerpo sabe antes que la cabeza: los pies duelen de mármol, los hombros cargan el peso de la mochila y de la acreditación, los ojos piden horizonte después de horas de pantallas y pasillos. Deshacer el día empieza por deshacer el cuerpo: zapatos fuera, pies en el suelo frío del cuarto, una posición en la que nada tenga que ser mantenido." },
        { it: "Deita-te no chão, se puderes, dois minutos, braços abertos, e deixa o piso receber o peso que a postura profissional segurou. Respira para o dorso e sente as costas contar o dia: a pessoa interessante da fila, a pergunta que correu bem, o cartão entregue. O corpo arquiva tudo; ao fim do dia, pede apenas que o ouças arquivar.", es: "Túmbate en el suelo, si puedes, dos minutos, brazos abiertos, y deja que el pavimento reciba el peso que la postura profesional sostuvo. Respira hacia la espalda y siente la espalda contar el día: la persona interesante de la fila, la pregunta que salió bien, la tarjeta entregada. El cuerpo archiva todo; al final del día, solo pide que lo oigas archivar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un catálogo de ejercicios de gimnasio", "Descargar el cuerpo al final de una jornada de conferencia", "Una reseña del catering del evento"],
        answer: 1,
        why: "«O peso do crachá» resume la carga física del día: el texto va de soltar el cuerpo, no de deporte ni catering.",
      },
      sequence: {
        instr: "Ordena la descarga física según el texto:",
        events: ["Notas os pés e os ombros cansados no fim do dia", "Tiras os sapatos e pousas os pés no chão", "Deitas-te no chão dois minutos com os braços abertos", "Respiras para o dorso", "Ouves o corpo arquivar o dia"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Fim de conferência. Chegaste ao quarto: tira os sapatos primeiro, devagar, como quem despede o dia. Agora deita-te no chão, braços abertos, dois minutos apenas. Deixa o peso descer das costas para o piso: o crachá, a mochila, a postura atenta — tudo isso pode pousar. Respira para as costas três vezes. Amanhã há mais uma sala; esta noite, o chão é teu.",
        questions: [
          { q: "O que se tira primeiro ao chegar ao quarto?", kind: "literal", options: ["Os sapatos, devagar", "O casaco às pressas", "O telemóvel do bolso"], answer: 0, why: "«Tira os sapatos primeiro, devagar, como quem despede o dia»." },
          { q: "Durante quanto tempo se está deitado no chão?", kind: "literal", options: ["Dois minutos", "Vinte minutos", "Dez segundos"], answer: 0, why: "«Dois minutos apenas»." },
          { q: "O que pode pousar no chão, segundo o áudio?", kind: "literal", options: ["O peso do crachá, da mochila e da postura", "A mala de roupa", "O programa do evento"], answer: 0, why: "«O crachá, a mochila, a postura atenta — tudo isso pode pousar»." },
          { q: "Para onde se respira?", kind: "literal", options: ["Para as costas, três vezes", "Para o teto, uma vez", "Para a porta, sempre"], answer: 0, why: "«Respira para as costas três vezes»." },
          { q: "O que significa «esta noite, o chão é teu»?", kind: "inferencial", options: ["A noche ofrece descanso sin exigencias", "El suelo pertenece al hotel", "Hay que dormir en el suelo"], answer: 0, why: "Se infiere: la noche devuelve al cuerpo un lugar propio donde nada debe sostenerse." },
        ],
      },
    },
  ],

  "pt-cu-b2-07": [
    {
      id: "md-pt-b2-07-1", theme: "spiritualità",
      title: "O que não sabemos", titleEs: "Lo que no sabemos", minutes: 3,
      paragraphs: [
        { it: "Os casos por resolver ensinam uma lição espiritual incómoda: há coisas que não se sabem, e continuarão sem se saber por mais teorias que se acumulem. Viver com essa ausência — sem a fechar com a resposta mais confortável — é uma forma de maturidade. O mistério não é um erro a corrigir; é uma dimensão a habitar.", es: "Los casos sin resolver enseñan una lección espiritual incómoda: hay cosas que no se saben, y seguirán sin saberse por más teorías que se acumulen. Vivir con esa ausencia — sin cerrarla con la respuesta más cómoda — es una forma de madurez. El misterio no es un error a corregir; es una dimensión a habitar." },
        { it: "Há uma diferença entre especular e precisar: especular é brincar com hipóteses à mesa do café; precisar é fechar a vida real numa frase. Quem convive com o desconhecido sem o domesticar aprende a tolerância própria de quem já percebeu que a verdade, quando chega, chega devagar e por caminhos que ninguém anunciou. A humildade é isso: abrir espaço para o que ainda não se sabe.", es: "Hay una diferencia entre especular y precisar: especular es jugar con hipótesis en la mesa del café; precisar es cerrar la vida real en una frase. Quien convive con lo desconocido sin domesticarlo aprende la tolerancia propia de quien ya entendió que la verdad, cuando llega, llega despacio y por caminos que nadie anunció. La humildad es eso: abrir espacio para lo que todavía no se sabe." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un episodio de true crime resumido", "Convivir con el misterio y lo desconocido como práctica de humildad", "Una teoría sobre un robo de 2011"],
        answer: 1,
        why: "El título apunta a la aceptación de lo no sabido, no a resolver un caso concreto.",
      },
      quiz: [
        { q: "O que ensinam os casos por resolver, segundo o texto?", kind: "literal", options: ["Que há coisas que não se sabem", "Que a polícia trabalha pouco", "Que os podcasts mentem"], answer: 0, why: "«Há coisas que não se sabem, e continuarão sem se saber»." },
        { q: "Qual é a diferença entre especular e precisar?", kind: "inferencial", options: ["Especular brinca com hipóteses; precisar fecha a vida real numa frase", "Especular é crime; precisar é ciência", "Não há diferença entre as duas"], answer: 0, why: "Se infiere de la pareja de definiciones del segundo párrafo." },
        { q: "Como define o texto a humildade?", kind: "critica", options: ["Abrir espaço para o que ainda não se sabe", "Dizer sempre a verdade", "Não ter opinião sobre nada"], answer: 0, why: "El cierre lo define así: humildad es hacer espacio para lo no sabido." },
      ],
      vf: [
        { text: "O texto diz que o mistério é um erro a corrigir.", value: false, why: "Afirma lo contrario: «o mistério não é um erro a corrigir; é uma dimensão a habitar»." },
        { text: "A verdade, quando chega, chega devagar e por caminhos não anunciados.", value: true, why: "Está literal en el segundo párrafo." },
        { text: "Especular à mesa do café é apresentado como um jogo de hipóteses.", value: true, why: "«Especular é brincar com hipóteses à mesa do café»." },
      ],
    },
    {
      id: "md-pt-b2-07-2", theme: "relax mentale",
      title: "Teorias como nuvens", titleEs: "Teorías como nubes", minutes: 2,
      paragraphs: [
        { it: "Depois de um episódio de true crime, a cabeça enche-se de teorias como um céu de outubro: umas escuras, outras brilhantes, todas a passar. A mente construtora adora este jogo — cada indício é tijolo, cada silêncio é cimento — e, se não a vigiares, passa a noite a construir casos que ninguém lhe pediu.", es: "Después de un episodio de true crime, la cabeza se llena de teorías como un cielo de octubre: unas oscuras, otras brillantes, todas pasando. La mente constructora adora este juego — cada indicio es ladrillo, cada silencio es cemento — y, si no la vigilas, pasa la noche construyendo casos que nadie le pidió." },
        { it: "A relaxação mental começa por dar às teorias o estatuto certo: são nuvens, não edifícios. Observa-as a passar — «e se fosse o sobrinho? e se fosse a empregada?» — sem as deixar chover sobre o teu sono. Amanhã, o próximo episódio traz céu novo; as hipóteses de hoje raramente sobrevivem à próxima investigação. Deixa-as passar: passam.", es: "La relajación mental empieza por dar a las teorías el estatus correcto: son nubes, no edificios. Óbralas pasar — «¿y si fuera el sobrino? ¿y si fuera la empleada?» — sin dejar que lluevan sobre tu sueño. Mañana, el próximo episodio trae cielo nuevo; las hipótesis de hoy rara vez sobreviven a la próxima investigación. Deja que pasen: pasan." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un análisis del episodio de un pódcast", "Tratar las teorías de la mente como nubes que pasan, sin dejarlas quitar el sueño", "La biografía de un investigador"],
        answer: 1,
        why: "La metáfora del título anticipa el tratamiento ligero de las teorías mentales.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "A cabeça enche-se de teorias como um céu de outubro.",
          "Cada indício é tijolo, cada silêncio é cimento.",
          "As teorias são nuvens, não edifícios.",
          "O caso da Figueira da Foz aconteceu em outubro de 2011.",
          "Deixa as hipóteses passar: passam.",
        ],
        intruder: 3,
        why: "La fecha del caso es un dato del podcast, ajeno a la metáfora de las teorías como nubes: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["As teorias mentais são nuvens que passam, não edifícios", "As teorias precisam de provas para serem úteis", "O true crime prejudica o sono de todos"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A cabeça enche-se de teorias como um céu de outubro", "Cada indício é tijolo para a mente construtora", "As hipóteses de hoje raramente sobrevivem à próxima investigação"],
        distractors: ["O episódio durou cinquenta minutos", "O sobrinho tinha dívidas de jogo", "O podcast era o mais ouvido da semana"],
      },
    },
    {
      id: "md-pt-b2-07-3", theme: "meditazione",
      title: "O silêncio depois do episódio", titleEs: "El silencio después del episodio", minutes: 3,
      paragraphs: [
        { it: "Há um silêncio específico que se segue a um episódio de true crime: o do quarto onde a narração parou e o mundo real ainda não voltou a fazer barulho. Esse silêncio não é vazio; é o lugar onde a escuta se despede da história. Meditar é, aqui, simplesmente ficar: não ligar a música, não abrir a próxima sugestão, deixar o ouvido regressar sozinho aos sons de sempre.", es: "Hay un silencio específico que sigue a un episodio de true crime: el del cuarto donde la narración se detuvo y el mundo real todavía no volvió a hacer ruido. Ese silencio no es vacío; es el lugar donde la escucha se despide de la historia. Meditar es, aquí, simplemente quedarse: no poner música, no abrir la siguiente sugerencia, dejar que el oído vuelva solo a los sonidos de siempre." },
        { it: "O ouvido que escutou um crime durante uma hora precisa de desintoxicação: o frigorífico, a rua, o vizinho que tossiu. São sons pobres de enredo e ricos em paz — o único mistério que comportam é o de ainda estarem lá. Da próxima vez que acabares um episódio, conta dez respirações nesse silêncio; o mundo real agradece ser reencontrado sem pressa.", es: "El oído que escuchó un crimen durante una hora necesita desintoxicación: el frigorífico, la calle, el vecino que tosió. Son sonidos pobres de trama y ricos en paz — el único misterio que contienen es el de seguir ahí. La próxima vez que termines un episodio, cuenta diez respiraciones en ese silencio; el mundo real agradece que lo reencuentres sin prisa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La banda sonora de un pódcast", "Quedarse en el silencio tras un episodio para volver a escuchar el mundo real", "Cómo elegir el mejor pódcast"],
        answer: 1,
        why: "El título nombra el momento exacto: el silencio posterior, como práctica de escucha.",
      },
      sequence: {
        instr: "Ordena la práctica según el texto:",
        events: ["O episódio acaba e a narração para", "Ficas no quarto sem ligar a música", "O ouvido regressa aos sons de sempre", "Ouves o frigorífico, a rua, o vizinho", "Contas dez respirações nesse silêncio"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "O episódio acabou. Não toques no próximo ainda. Senta-te apenas e escuta o quarto: o frigorífico, um carro na rua, talvez um pássaro tarde. Estes sons não têm enredo, e é isso que os torna bons para ti. Conta dez respirações enquanto o ouvido se despede da história. Quando te levantares, o mundo real continua aí — inteiro, sem mistério, à tua espera.",
        questions: [
          { q: "O que se faz quando o episódio acaba?", kind: "literal", options: ["Não se toca no próximo episódio", "Liga-se logo a música", "Fecha-se a janela"], answer: 0, why: "«Não toques no próximo ainda»." },
          { q: "Que sons o quarto oferece?", kind: "literal", options: ["O frigorífico, um carro, talvez um pássaro", "Uma sirene e um helicóptero", "A narração seguinte"], answer: 0, why: "«O frigorífico, um carro na rua, talvez um pássaro tarde»." },
          { q: "Porque são bons esses sons, segundo o áudio?", kind: "inferencial", options: ["Não têm enredo", "São mais altos", "Foram gravados em estúdio"], answer: 0, why: "«Estes sons não têm enredo, e é isso que os torna bons para ti»." },
          { q: "Como está o mundo real, segundo o fecho?", kind: "inferencial", options: ["Inteiro e sem mistério, à espera", "Cheio de novos crimes", "Diferente do que se deixou"], answer: 0, why: "«O mundo real continua aí — inteiro, sem mistério, à tua espera»." },
        ],
      },
    },
  ],

  "pt-cu-b2-08": [
    {
      id: "md-pt-b2-08-1", theme: "qui e ora",
      title: "Falar de si sem fugir", titleEs: "Hablar de uno mismo sin huir", minutes: 3,
      paragraphs: [
        { it: "Falar de si numa entrevista é um equilíbrio raro: nem catálogo de vitórias, nem modestia que esconde tudo. O segredo não está nos adjetivos, está na presença — estar na frase que se diz, e não já na resposta seguinte. Quem descreve o seu trabalho com atenção descreve-o melhor: os detalhes certos aparecem sozinhos, como convidados pontuais.", es: "Hablar de uno mismo en una entrevista es un equilibrio raro: ni catálogo de victorias, ni modestia que lo esconde todo. El secreto no está en los adjetivos, está en la presencia — estar en la frase que se dice, y no ya en la respuesta siguiente. Quien describe su trabajo con atención lo describe mejor: los detalles correctos aparecen solos, como invitados puntuales." },
        { it: "Ainda que a pergunta seja «fala-me de um desafio», a resposta honesta é sempre uma forma de estar: contar o que se passou sem decorar o papel nem recitar o currículo. Estar presente na própria história — com as hesitações úteis, os números reais, o crédito dado à equipa — é a forma mais elegante de não fugir de si. A entrevista é uma conversa; quem conversa presente, convence.", es: "Aunque la pregunta sea «háblame de un desafío», la respuesta honesta es siempre una forma de estar: contar lo que pasó sin memorizar el papel ni recitar el currículo. Estar presente en la propia historia — con las vacilaciones útiles, los números reales, el crédito dado al equipo — es la forma más elegante de no huir de uno mismo. La entrevista es una conversación; quien conversa presente, convence." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un listado de respuestas de entrevista", "Hablar de la propia experiencia con presencia y honestidad, sin recitar", "Cómo decorar un currículo"],
        answer: 1,
        why: "«Falar de si sem fugir» apunta a la manera de hablar, no a un repertorio de respuestas.",
      },
      quiz: [
        { q: "Onde está o segredo de falar de si, segundo o texto?", kind: "literal", options: ["Na presença: estar na frase que se diz", "Nos adjetivos escolhidos", "No tom de voz grave"], answer: 0, why: "«O segredo não está nos adjetivos, está na presença»." },
        { q: "Porque é que os detalhes certos aparecem sozinhos?", kind: "inferencial", options: ["Porque a atenção ao que se diz seleciona o que importa", "Porque a memória trabalha ao acaso", "Porque as entrevistas são fáceis"], answer: 0, why: "Se infiere: la atención describe mejor y filtra lo esencial." },
        { q: "Qual destas ideias resume o texto?", kind: "critica", options: ["Contar a própria história com presença é mais convincente que recitar", "A modestia é sempre a melhor política", "Os números não importam nas entrevistas"], answer: 0, why: "El cierre: la entrevista es conversación y quien conversa presente convence." },
      ],
      vf: [
        { text: "O texto descreve falar de si como um catálogo de vitórias.", value: false, why: "Lo descarta: «nem catálogo de vitórias, nem modestia que esconde tudo»." },
        { text: "Dar crédito à equipa faz parte da resposta honesta, segundo o texto.", value: true, why: "«Com as hesitações úteis, os números reais, o crédito dado à equipa»." },
        { text: "Para o texto, a entrevista é uma conversa.", value: true, why: "«A entrevista é uma conversa; quem conversa presente, convence»." },
      ],
    },
    {
      id: "md-pt-b2-08-2", theme: "relax fisico",
      title: "A respiração antes da porta", titleEs: "La respiración antes de la puerta", minutes: 2,
      paragraphs: [
        { it: "Do lado de fora do gabinete, trinta segundos de corpo: pés no chão, ombros a descer, uma respiração que entra pelo nariz e sai devagar. Não é encenação; é preparação. A voz que sai de um peito tranquilo soa diferente da que sai de um peito apertado — e os ouvidos do outro notam a diferença antes de qualquer palavra.", es: "Del lado de fuera del despacho, treinta segundos de cuerpo: pies en el suelo, hombros que bajan, una respiración que entra por la nariz y sale despacio. No es teatro; es preparación. La voz que sale de un peito tranquilo suena distinta de la que sale de un pecho apretado — y los oídos del otro notan la diferencia antes de cualquier palabra." },
        { it: "Se a mão tremer ao bater, tudo bem: bate com a mão que treme. A coragem não é a ausência de tremor; é a respiração que o acompanha. Depois, senta-te como quem chega a uma conversa e não a um julgamento — as costas direitas, mas os ombros soltos. O corpo que entra sereno sai com as respostas dele; o corpo que entra em aperto sai com as respostas do medo.", es: "Si la mano tiembla al llamar, está bien: llama con la mano que tiembla. El valor no es la ausencia de temblor; es la respiración que lo acompaña. Después, siéntate como quien llega a una conversación y no a un juicio — la espalda recta, pero los hombros sueltos. El cuerpo que entra sereno sale con sus propias respuestas; el cuerpo que entra apretado sale con las respuestas del miedo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un test de ansiedad laboral", "Preparar el cuerpo y la respiración antes de llamar a una puerta importante", "Una guía de postura de oficina"],
        answer: 1,
        why: "El título sitúa la respiración justo antes de la puerta: preparación corporal puntual, no un test general.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "A voz de um peito tranquilo soa diferente.",
          "A coragem é a respiração que acompanha o tremor.",
          "Costas direitas, ombros soltos.",
          "O candidato entregou o currículo em papel, não em PDF.",
          "O corpo que entra sereno sai com as respostas dele.",
        ],
        intruder: 3,
        why: "El formato del currículo es un detalle práctico ajeno a la preparación corporal: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["O corpo sereno muda a voz e a conversa que se tem", "A coragem é a ausência de tremor", "As entrevistas decidem-se só pelas respostas"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A voz de um peito tranquilo soa diferente", "Bate-se com a mão que treme", "Costas direitas, ombros soltos"],
        distractors: ["A entrevista estava marcada para as dez", "A diretora chegou atrasada", "O gabinete ficava no terceiro andar"],
      },
    },
    {
      id: "md-pt-b2-08-3", theme: "spiritualità",
      title: "O trabalho como oferta", titleEs: "El trabajo como ofrenda", minutes: 3,
      paragraphs: [
        { it: "Há uma pergunta antiga que atravessa as entrevistas: para quê trabalho? Quem responde só com o ordenado não mente, mas fica-se a meio; quem responde com o efeito do seu trabalho nos outros — o doente atendido, a equipa que aprendeu, o serviço que melhorou — toca qualquer coisa que os números não medem.", es: "Hay una pregunta antigua que atraviesa las entrevistas: ¿para qué trabajo? Quien responde solo con el sueldo no miente, pero se queda a medias; quien responde con el efecto de su trabajo en los demás — el paciente atendido, el equipo que aprendió, el servicio que mejoró — toca algo que los números no miden." },
        { it: "Chamar-lhe espiritualidade não obriga a templo nenhum: basta reconhecer que servir bem, com atenção, é uma forma de cuidado pelo mundo. O coordenador que protege o ritmo das pessoas está a fazer, em linguagem de gestão, o mesmo que as tradições antigas chamavam guardar o rebanho. Ainda que o título mude, a essência não: trabalhar é, também, dar-se — e quem se dá com presença recebe o dia de volta.", es: "Llamarlo espiritualidad no obliga a ningún templo: basta reconocer que servir bien, con atención, es una forma de cuidar el mundo. El coordinador que protege el ritmo de las personas está haciendo, en lenguaje de gestión, lo mismo que las tradiciones antiguas llamaban guardar el rebaño. Aunque el título cambie, la esencia no: trabajar es, también, darse — y quien se da con presencia recibe el día de vuelta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Salarios y carrera profesional", "El efecto del trabajo en los demás como dimensión de sentido y cuidado", "Cómo pedir un aumento"],
        answer: 1,
        why: "«O trabalho como oferta» apunta al sentido del trabajo más allá del salario.",
      },
      sequence: {
        instr: "Ordena la reflexión según el texto:",
        events: ["Perguntas a ti mesmo para que trabalhas", "Recordas o efeito do teu trabalho nos outros", "Reconheces o cuidado escondido em servir bem", "Proteges o ritmo das pessoas que lideras", "Recebes o dia de volta, com presença"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Antes de falar do teu trabalho a alguém, experimenta esta pergunta em silêncio: a quem serviu hoje o que eu faço? Não é preciso nome grandioso. A marcação que correu bem, o colega que aprendeu, o cliente que desligou o telefone mais descansado: tudo isso é serviço. Quando encontrares a resposta, guarda-a numa frase. Ela valerá mais, na próxima entrevista, do que qualquer adjetivo que decresses decorar.",
        questions: [
          { q: "Qual é a pergunta a fazer em silêncio?", kind: "literal", options: ["A quem serviu hoje o que eu faço?", "Quanto ganho por mês?", "O que dirá o júri?"], answer: 0, why: "«A quem serviu hoje o que eu faço?»." },
          { q: "Que exemplos o áudio dá de serviço?", kind: "literal", options: ["A marcação que correu bem, o colega que aprendeu", "O ordenado depositado, o título conquistado", "A nova sala de reuniões"], answer: 0, why: "«A marcação que correu bem, o colega que aprendeu, o cliente mais descansado»." },
          { q: "Onde se guarda a resposta?", kind: "literal", options: ["Numa frase", "Num documento", "Numa apresentação"], answer: 0, why: "«Guarda-a numa frase»." },
          { q: "Que valerá a frase na entrevista, segundo o áudio?", kind: "inferencial", options: ["Mais do que qualquer adjetivo decorado", "Menos do que o currículo", "O mesmo que uma pausa"], answer: 0, why: "«Ela valerá mais, na próxima entrevista, do que qualquer adjetivo que decresses decorar»." },
        ],
      },
    },
  ],

  "pt-cu-b2-09": [
    {
      id: "md-pt-b2-09-1", theme: "relax mentale",
      title: "Julgar com leveza", titleEs: "Juzgar con ligereza", minutes: 3,
      paragraphs: [
        { it: "Avaliar tornou-se desporto nacional digital: estrelas para o jantar, estrelas para o motorista, estrelas para a vida. A mente crítica, entretanto, cansa-se do seu próprio tribunal: cada julgamento é um processo que exige provas, e o dia tem horas para outras coisas. Julgar com leveza não é desistir da opinião; é recusar o emprego de juiz a tempo inteiro.", es: "Valorar se ha convertido en deporte nacional digital: estrellas para la cena, estrellas para el conductor, estrellas para la vida. La mente crítica, entretanto, se cansa de su propio tribunal: cada juicio es un proceso que exige pruebas, y el día tiene horas para otras cosas. Juzgar con ligereza no es renunciar a la opinión; es rechazar el empleo de juez a tiempo completo." },
        { it: "A próxima refeição oferece um treino: começa pelos factos — o pão chegou, a mesa era pequena — e só depois, se ainda houver energia, avança para os veredictos. Notarás uma coisa curiosa: os factos bem descritos dispensam metade das estrelas. E o jantar, esse, fica mais gostoso sem o tribunal a funcionar entre o prato e o copo.", es: "La próxima comida ofrece un entrenamiento: empieza por los hechos — el pan llegó, la mesa era pequeña — y solo después, si todavía hay energía, avanza hacia los veredictos. Notarás algo curioso: los hechos bien descritos dispensan la mitad de las estrellas. Y la cena, esa, queda más sabrosa sin el tribunal funcionando entre el plato y la copa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo escribir mejores reseñas", "Soltar el juicio constante: describir con ligereza en vez de sentenciar", "Una crítica de las apps de reseñas"],
        answer: 1,
        why: "«Julgar com leveza» apunta a la relación con el propio juicio, no a la técnica de reseñar.",
      },
      quiz: [
        { q: "Com o que se começa o treino da próxima refeição?", kind: "literal", options: ["Pelos factos", "Pelas estrelas", "Pela reclamação"], answer: 0, why: "«Começa pelos factos — o pão chegou, a mesa era pequena»." },
        { q: "Porque é que os factos bem descritos dispensam metade das estrelas?", kind: "inferencial", options: ["Porque a descrição já informa sem precisar de sentenciar", "Porque as estrelas são inúteis", "Porque os restaurantes preferem factos"], answer: 0, why: "Se infiere: la buena descripción ya comunica y el veredicto sobra." },
        { q: "Qual é a ideia principal do texto?", kind: "critica", options: ["Julgar tudo a tempo inteiro cansa; a leveza devolve o gosto às coisas", "As reviews deviam ser proibidas", "Os críticos profissionais têm razão"], answer: 0, why: "El texto sostiene que el juicio permanente agota y la ligereza libera." },
      ],
      vf: [
        { text: "Julgar com leveza é, segundo o texto, desistir da opinião.", value: false, why: "«Não é desistir da opinião; é recusar o emprego de juiz a tempo inteiro»." },
        { text: "Cada julgamento é comparado a um processo que exige provas.", value: true, why: "«Cada julgamento é um processo que exige provas»." },
        { text: "O texto diz que o jantar fica mais gostoso sem o tribunal a funcionar.", value: true, why: "«O jantar, esse, fica mais gostoso sem o tribunal a funcionar»." },
      ],
    },
    {
      id: "md-pt-b2-09-2", theme: "meditazione",
      title: "A refeição como prática", titleEs: "La comida como práctica", minutes: 2,
      paragraphs: [
        { it: "Comer devagar é uma meditação disfarçada de almoço: o primeiro garfo atendido por inteiro vale por dez engolidos à pressa. Num restaurante cheio, com a conversa boa e o pão à frente, a prática não exige silêncio — exige apenas que, uma vez por refeição, o sabor seja a única coisa que acontece.", es: "Comer despacio es una meditación disfrazada de comida: el primer tenedor atendido por entero vale por diez tragados con prisa. En un restaurante lleno, con la conversación buena y el pan delante, la práctica no exige silencio — exige solo que, una vez por comida, el sabor sea lo único que ocurre." },
        { it: "Escolhe um bocadinho — o polvo, a sobremesa, o café final — e dá-lhe os primeiros trinta segundos sem companhia: sem falar, sem telefone, sem planear a frase seguinte. Trinta segundos são nada e são tudo: ensinam a diferença entre alimentar-se e comer. Depois, a conversa retoma; a atenção, se a treinares, fica à mesa como um convité discreto.", es: "Elige un bocadito — el pulpo, el postre, el café final — y dale los primeros treinta segundos sin compañía: sin hablar, sin teléfono, sin planear la frase siguiente. Treinta segundos no son nada y son todo: enseñan la diferencia entre alimentarse y comer. Después, la conversación retoma; la atención, si la entrenas, se queda en la mesa como una invitación discreta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una dieta saludable", "Darle treinta segundos de atención plena a un solo bocado de la comida", "Un manual de etiqueta en restaurantes"],
        answer: 1,
        why: "«A refeição como prática» convierte comer en ejercicio de atención, no en dieta ni etiqueta.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "O primeiro garfo atendido por inteiro vale por dez.",
          "A prática não exige silêncio, exige atenção.",
          "Trinta segundos ensinam a diferença entre alimentar-se e comer.",
          "O terraço do restaurante tinha vista para os telhados do Chiado.",
          "A atenção treinada fica à mesa como um convité discreto.",
        ],
        intruder: 3,
        why: "La vista de la terraza es un dato del restaurante, ajeno a la práctica de comer con atención: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Um único bocadinho atendido por inteiro transforma a refeição", "As conversas de mesa atrapalham a comida", "O café final é a parte mais importante"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["O primeiro garfo atendido vale por dez engolidos", "A prática não exige silêncio, exige atenção", "Trinta segundos ensinam a diferença entre alimentar-se e comer"],
        distractors: ["O polvo estava razoável", "A conta chegou aos vinte euros", "A mesa ficou reservada duas horas"],
      },
    },
    {
      id: "md-pt-b2-09-3", theme: "qui e ora",
      title: "O último café do dia", titleEs: "El último café del día", minutes: 3,
      paragraphs: [
        { it: "O último café do dia tem um estatuto que nenhum outro goza: não abre trabalho, não fecha contas, não acompanha pressa. É só um café — e essa é a sua luxúria escondida. Quem o bebe a olhar para a rua, sem ecrã nem desculpa, está a fazer a coisa mais antiga do mundo: estar onde está.", es: "El último café del día tiene un estatus que ningún otro goza: no abre trabajo, no cierra cuentas, no acompaña prisa. Es solo un café — y esa es su lujuria escondida. Quien lo bebe mirando la calle, sin pantalla ni excusa, está haciendo la cosa más antigua del mundo: estar donde está." },
        { it: "As cidades ensinam presença a quem as observa sem objetivo. Ao fim da tarde, a luz dos telhados muda de cor devagar, os empregados recolhem as esplanadas, um elétrico passa com o seu barulho de sempre. Nada disto é conteúdo: não se partilha, não se guarda, não se pontua. Passa — e é exatamente por passar que precisa de ti inteiro, agora, enquanto se passa.", es: "Las ciudades enseñan presencia a quien las observa sin objetivo. Al final de la tarde, la luz de los tejados cambia de color despacio, los camareros recogen las terrazas, un tranvía pasa con su ruido de siempre. Nada de esto es contenido: no se comparte, no se guarda, no se puntúa. Pasa — y es justamente por pasar que te necesita entero, ahora, mientras pasa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una publicidad de cafés", "El último café del día como ritual de presencia junto a la ciudad", "La historia del café en Portugal"],
        answer: 1,
        why: "El título señala un momento ritual: el café final como excusa para estar presente.",
      },
      sequence: {
        instr: "Ordena el ritual según el texto:",
        events: ["Pedes o último café do dia", "Bebe-lo a olhar para a rua, sem ecrã", "Vês a luz dos telhados mudar de cor", "Ouves o elétrico passar com o seu barulho de sempre", "Deixas o momento passar com atenção inteira"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "O último café do dia. Se puderes, bebe-o junto à janela, sem pressa nem ecrã. Repara: a luz da tarde está a mudar nos telhados, e ninguém vai fotografar isso por ti. O empregado recolhe as cadeiras devagar. Um elétrico passa. Este momento não pontua, não se partilha, não fica guardado: passa. E é teu, inteiramente, enquanto se passa. Quando acabares o café, levanta-te sem pressa — a noite também sabe esperar.",
        questions: [
          { q: "Onde se bebe o café, se puderes?", kind: "literal", options: ["Junto à janela", "No balcão, de pé", "Em frente ao televisor"], answer: 0, why: "«Bebe-o junto à janela»." },
          { q: "O que ninguém fará por ti, segundo o áudio?", kind: "literal", options: ["Fotografar a mudança da luz", "Trazer a conta", "Servir o café"], answer: 0, why: "«Ninguém vai fotografar isso por ti»." },
          { q: "Que características tem este momento?", kind: "literal", options: ["Não pontua, não se partilha, não fica guardado", "É partilhável e pontuado", "Fica guardado para sempre"], answer: 0, why: "«Este momento não pontua, não se partilha, não fica guardado»." },
          { q: "O que se faz quando o café acaba?", kind: "inferencial", options: ["Levanta-se sem pressa", "Pede-se logo outro", "Abre-se o telemóvel"], answer: 0, why: "«Levanta-te sem pressa — a noite também sabe esperar»." },
        ],
      },
    },
  ],

  "pt-cu-b2-10": [
    {
      id: "md-pt-b2-10-1", theme: "relax fisico",
      title: "O banco do café", titleEs: "El banco del café", minutes: 2,
      paragraphs: [
        { it: "O banco de mármore de uma casa de café é frio no primeiro toque e arruma a cidade para quem se senta direito. Aos poucos, o corpo lembra-se de como se está numa mesa: as costas procuram o apoio, os pés assentam no chão, as mãos descansam à volta da chávena como se esta fosse o centro da conversa — porque, muitas vezes, é.", es: "El banco de mármol de una casa de café es frío al primer contacto y ordena la ciudad para quien se sienta derecho. Poco a poco, el cuerpo recuerda cómo se está en una mesa: la espalda busca el apoyo, los pies se asientan en el suelo, las manos descansan alrededor de la taza como si esta fuera el centro de la conversación — porque, muchas veces, lo es." },
        { it: "Depois de uma manhã de ecrãs, sentar num banco destes é fisioterapia de bairro: o mármore não cede, o corpo tem de se organizar sozinho, e a postura que sai de lá é outra. Não é preciso exercício; é preciso estar. Quando a conversa embalar, repara de vez em quando nos ombros — se subiram para as orelhas, deixa-os descer sem avisar ninguém. Estar bem sentado também se aprende aos bocados, entre um café e um tema novo.", es: "Después de una mañana de pantallas, sentarse en un banco como este es fisioterapia de barrio: el mármol no cede, el cuerpo tiene que organizarse solo, y la postura que sale de ahí es otra. No hace falta ejercicio; hace falta estar. Cuando la conversación se enganche, fíjate de vez en cuando en los hombros — si subieron hacia las orejas, déjalos bajar sin avisar a nadie. Estar bien sentado también se aprende a trocitos, entre un café y un tema nuevo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una reseña de un café de Oporto", "El cuerpo en el banco de un café: postura y presencia entre conversaciones", "Cómo elegir la mejor pastelaria"],
        answer: 1,
        why: "«O banco do café» pone el foco en el cuerpo sentado, no en el local ni en la repostería.",
      },
      quiz: [
        { q: "O que fazem as mãos à volta da chávena, segundo o texto?", kind: "literal", options: ["Descansam, como se a chávena fosse o centro da conversa", "Escrevem mensagens", "Batem no mármore"], answer: 0, why: "«As mãos descansam à volta da chávena como se esta fosse o centro da conversa»." },
        { q: "Porque é que o banco de mármore é comparado a fisioterapia de bairro?", kind: "inferencial", options: ["Porque não cede e obriga o corpo a organizar-se sozinho", "Porque é macio e relaxa as costas", "Porque aquece os músculos"], answer: 0, why: "Se infiere de «o mármore não cede, o corpo tem de se organizar sozinho»." },
        { q: "Qual é o conselho final do texto?", kind: "critica", options: ["Verificar os ombros de vez em quando e deixá-los descer", "Mudar de café a cada meia hora", "Evitar conversas longas"], answer: 0, why: "El cierre: mirar los hombros y dejarlos bajar sin avisar." },
      ],
      vf: [
        { text: "O mármore do banco cede ao corpo, segundo o texto.", value: false, why: "«O mármore não cede, o corpo tem de se organizar sozinho»." },
        { text: "O texto diz que não é preciso exercício; é preciso estar.", value: true, why: "«Não é preciso exercício; é preciso estar»." },
        { text: "Estar bem sentado aprende-se aos bocados, entre um café e um tema novo.", value: true, why: "Está literal en el cierre del texto." },
      ],
    },
    {
      id: "md-pt-b2-10-2", theme: "spiritualità",
      title: "A língua como casa", titleEs: "La lengua como casa", minutes: 3,
      paragraphs: [
        { it: "Uma língua estrangeira deixa de ser matéria no dia em que passa a ser casa: quando a expressão idiomática sai certa sem esforço, quando o café se pede como o pediria um vizinho. Há um momento preciso — poucos o notam — em que se deixa de traduzir e se começa a habitar. Não é fluência total; é pertença a meio caminho, e já é muito.", es: "Una lengua extranjera deja de ser materia el día en que pasa a ser casa: cuando la expresión idiomática sale correcta sin esfuerzo, cuando el café se pide como lo pediría un vecino. Hay un momento preciso — pocos lo notan — en que se deja de traducir y se empieza a habitar. No es fluidez total; es pertenencia a medio camino, y ya es mucho." },
        { it: "Há uma espiritualidade discreta em aprender a falar como falam os outros: é aceitar ver o mundo por outra janela, gastar anos a escutar, errar em público com humildade. Cada expressão local que se adota é um tijolo dessa casa comum — «mão na roda», «bué de fixe», o «se faz favor» que abre portas. Ainda que o sotaque denuncie a origem, a vontade de habitar a língua já é uma forma de gratidão ao lugar.", es: "Hay una espiritualidad discreta en aprender a hablar como hablan los otros: es aceptar ver el mundo por otra ventana, gastar años escuchando, equivocarse en público con humildad. Cada expresión local que se adopta es un ladrillo de esa casa común — «mão na roda», «bué de fixe», el «se faz favor» que abre puertas. Aunque el acento delate el origen, la voluntad de habitar la lengua ya es una forma de gratitud hacia el lugar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso de expresiones portuguesas", "El momento en que una lengua extranjera se vuelve casa y pertenencia", "La historia del café en Oporto"],
        answer: 1,
        why: "La metáfora del título apunta a habitar la lengua, no a un listado de expresiones.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Deixar de traduzir e começar a habitar marca a diferença.",
          "Errar em público com humildade faz parte do caminho.",
          "Cada expressão local adotada é um tijolo da casa comum.",
          "O cimbalino do Porto equivale à bica de Lisboa.",
          "A vontade de habitar a língua é gratidão ao lugar.",
        ],
        intruder: 3,
        why: "La equivalencia cimbalino/bica es un dato léxico, no forma parte de la reflexión sobre la pertenencia: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Habitar uma língua é mais que fluência: é pertença construída com escuta e humildade", "O sotaque impede sempre a integração", "As expressões idiomáticas são desnecessárias"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Há um momento em que se deixa de traduzir e se começa a habitar", "Errar em público com humildade faz parte", "Cada expressão local adotada é um tijolo da casa comum"],
        distractors: ["O curso de português durou dois anos", "O professor era de Braga", "O exame oral foi na terça-feira"],
      },
    },
    {
      id: "md-pt-b2-10-3", theme: "relax mentale",
      title: "Quando não percebemos", titleEs: "Cuando no entendemos", minutes: 2,
      paragraphs: [
        { it: "Há uma frustração específica do estrangeiro: a conversa embala, todos riem, e a expressão que mudou tudo passou por ti como um comboio sem paragem. A mente reage com pressa — «devia ter percebido, sou lento» — e é aqui que a prática mental começa: não é lento quem está a aprender; está a aprender quem ainda ouve o mundo a outra velocidade.", es: "Hay una frustración específica del extranjero: la conversación se engancha, todos se ríen, y la expresión que lo cambió todo pasó por ti como un tren sin parada. La mente reacciona con prisa — «debería haberlo entendido, soy lento» — y es aquí donde empieza la práctica mental: no es lento quien está aprendiendo; está aprendiendo quien todavía oye el mundo a otra velocidad." },
        { it: "Soltar a frustração faz-se com uma pergunta bem colocada: «o que é isso de “mão na roda”?». Em Portugal, perguntar assim abre explicações inteiras e sorrisos de aprovação. A mente que aceita não entender tudo liberta energia para entender o essencial; a que exige entender tudo não entende nada do jantar. Entre o orgulho e a curiosidade, escolhe a curiosidade: é ela que te senta à mesa seguinte.", es: "Soltar la frustración se hace con una pregunta bien puesta: «¿qué es eso de “mão na roda”?». En Portugal, preguntar así abre explicaciones enteras y sonrisas de aprobación. La mente que acepta no entenderlo todo libera energía para entender lo esencial; la que exige entenderlo todo no entiende nada de la cena. Entre el orgullo y la curiosidad, elige la curiosidad: es ella la que te sienta en la mesa siguiente." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un test de comprensión auditiva", "Soltar la frustración de no entenderlo todo y preguntar con curiosidad", "Por qué el portugués es difícil"],
        answer: 1,
        why: "El título nombra la situación y el texto propone soltar la autocrítica y preguntar.",
      },
      sequence: {
        instr: "Ordena la experiencia según el texto:",
        events: ["Uma expressão passa por ti como um comboio sem paragem", "A mente reage com pressa e autocrítica", "Reconheces que estás a aprender, não a falhar", "Perguntas «o que é isso?» com curiosidade", "A mesa abre explicações e sorrisos"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Aconteceu outra vez: toda a gente riu e tu ficaste a meio. Primeiro, respira — não é lento quem aprende. Segundo, escolhe a frase: «o que é isso de mão na roda?», dita com um sorriso. Terceiro, escuta a explicação como quem recebe um presente: os portugueses adoram explicar a própria língua a quem a quer habitar. Ao fim de alguns jantares, terás expressões tuas — e histórias para as usar.",
        questions: [
          { q: "O que se faz primeiro quando toda a gente ri e tu ficas a meio?", kind: "literal", options: ["Respira-se", "Sai-se da mesa", "Finge-se que se percebeu"], answer: 0, why: "«Primeiro, respira — não é lento quem aprende»." },
          { q: "Que frase se escolhe, segundo o áudio?", kind: "literal", options: ["«O que é isso de mão na roda?»", "«Podem repetir mais devagar?»", "«Não percebo nada disto.»"], answer: 0, why: "«Escolhe a frase: “o que é isso de mão na roda?”»." },
          { q: "Como se escuta a explicação?", kind: "literal", options: ["Como quem recebe um presente", "Como quem perde tempo", "Como quem faz um teste"], answer: 0, why: "«Escuta a explicação como quem recebe um presente»." },
          { q: "O que se ganha ao fim de alguns jantares?", kind: "inferencial", options: ["Expressões próprias e histórias para as usar", "Um convite para morar no Porto", "Um certificado de fluência"], answer: 0, why: "«Terás expressões tuas — e histórias para as usar»." },
        ],
      },
    },
  ],

  "pt-cu-b2-11": [
    {
      id: "md-pt-b2-11-1", theme: "meditazione",
      title: "A voz antes da palavra", titleEs: "La voz antes de la palabra", minutes: 3,
      paragraphs: [
        { it: "Numa audiência pública, o coração dispara antes do microfone. Dois minutos de palavra esperam por ti, e o corpo, que não conhece atas, prepara-se como para uma emergência. É aqui que a meditação faz o seu trabalho modesto: não acalma o tema, acalma quem o vai dizer. Uma respiração funda antes de falar não muda o argumento; muda a voz que o transporta.", es: "En una audiencia pública, el corazón se dispara antes del micrófono. Dos minutos de palabra te esperan, y el cuerpo, que no conoce actas, se prepara como para una emergencia. Es aquí donde la meditación hace su trabajo modesto: no calma el tema, calma a quien lo va a decir. Una respiración profunda antes de hablar no cambia el argumento; cambia la voz que lo transporta." },
        { it: "A voz tranquila tem uma vantagem política escondida: as salas ouvem-na até ao fim. Quem grita perde metade da sala; quem fala com o peito aberto ganha os dois lados do corredor. Antes do teu turno, senta-te com os pés no chão, conta duas respirações e deixa a frase ensaiada assentar. Quando chegares ao microfone, não recites: chega. Chegar inteiro é a melhor forma de começar a falar.", es: "La voz tranquila tiene una ventaja política escondida: las salas la escuchan hasta el final. Quien grita pierde media sala; quien habla con el pecho abierto gana los dos lados del pasillo. Antes de tu turno, siéntate con los pies en el suelo, cuenta dos respiraciones y deja que la frase ensayada se asiente. Cuando llegues al micrófono, no recites: llega. Llegar entero es la mejor forma de empezar a hablar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de debate público", "Acalmar el cuerpo y la voz antes de hablar en una audiencia", "Cómo escribir un discurso político"],
        answer: 1,
        why: "«A voz antes da palavra» prioriza el instrumento personal frente al contenido del discurso.",
      },
      quiz: [
        { q: "O que faz a meditação, segundo o texto?", kind: "literal", options: ["Acalma quem vai dizer o tema, não o tema", "Escreve o discurso", "Elimina o nervosismo para sempre"], answer: 0, why: "«Não acalma o tema, acalma quem o vai dizer»." },
        { q: "Porque é que a voz tranquila tem vantagem política?", kind: "inferencial", options: ["Porque as salas a ouvem até ao fim", "Porque é mais alta que o grito", "Porque dispensa argumentos"], answer: 0, why: "«As salas ouvem-na até ao fim»." },
        { q: "Qual é o conselho final?", kind: "critica", options: ["Chegar inteiro ao microfone em vez de recitar decorado", "Falar o mais rápido possível", "Evitar audiências públicas"], answer: 0, why: "«Não recites: chega. Chegar inteiro é a melhor forma de começar a falar»." },
      ],
      vf: [
        { text: "O corpo prepara-se para falar em público como para uma emergência, segundo o texto.", value: true, why: "«O corpo, que não conhece atas, prepara-se como para uma emergência»." },
        { text: "Quem grita ganha os dois lados do corredor, segundo o texto.", value: false, why: "«Quem grita perde metade da sala; quem fala com o peito aberto ganha os dois lados»." },
        { text: "Duas respirações antes do turno fazem parte da preparação sugerida.", value: true, why: "«Conta duas respirações e deixa a frase ensaiada assentar»." },
      ],
    },
    {
      id: "md-pt-b2-11-2", theme: "qui e ora",
      title: "O montado ao fim da tarde", titleEs: "La dehesa al final de la tarde", minutes: 3,
      paragraphs: [
        { it: "Ao fim da tarde, o montado alentejano desacelera com um cuidado que nenhum relógio explica: a sombra das azinheiras cresce para leste, os rebanhos conhecem o caminho sem placas e o calor larga o chão aos poucos. Estar presente nesta hora é receber uma aula de paciência dada por uma paisagem que tem séculos de prática.", es: "Al final de la tarde, la dehesa alentejana desacelera con un cuidado que ningún reloj explica: la sombra de las encinas crece hacia el este, los rebaños conocen el camino sin señales y el calor suelta el suelo poco a poco. Estar presente en esta hora es recibir una clase de paciencia dada por un paisaje que tiene siglos de práctica." },
        { it: "Não é preciso entender de pastorícia para aprender com ela: basta sentar num muro baixo e assistir. A terra não notifica; a luz não argumenta; o silêncio aqui não é ausência de som, é presença de tempo. Quem fica quinze minutos sem fazer nada repara nas coisas que os apressados nunca veem — o voo pousado, a formiga em serviço, a mudança exata da cor da erva. O aqui e o agora, no montado, chama-se simplesmente fim de tarde.", es: "No hace falta entender de ganadería para aprender de ella: basta sentarse en un muro bajo y asistir. La tierra no notifica; la luz no argumenta; el silencio aquí no es ausencia de sonido, es presencia de tiempo. Quien se queda quince minutos sin hacer nada se fija en las cosas que los apurados nunca ven — el vuelo posado, la hormiga en servicio, el cambio exacto del color de la hierba. El aquí y el ahora, en la dehesa, se llama simplemente final de tarde." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La ganadería extensiva explicada", "Contemplar la tarde en la dehesa como lección de presencia y paciencia", "Un informe sobre paneles solares"],
        answer: 1,
        why: "El título nombra el momento contemplativo: la tarde del paisaje, no su explotación.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "A sombra das azinheiras cresce para leste ao fim da tarde.",
          "O silêncio no montado é presença de tempo.",
          "O voo pousado e a formiga em serviço só se veem sem pressa.",
          "A cerca do projeto solar media dois metros de altura.",
          "O fim de tarde é o aqui e o agora da paisagem.",
        ],
        intruder: 3,
        why: "La altura de la valla es un dato del proyecto, ajeno a la contemplación del paisaje: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["A tarde no montado é uma aula de presença dada pela paisagem", "A pastorícia é uma profissão em extinção", "O Alentejo precisa de mais turistas"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A sombra das azinheiras cresce para leste", "O silêncio é presença de tempo, não ausência de som", "Quinze minutos sem fazer nada revelam o que a pressa esconde"],
        distractors: ["Os painéis cobriam duzentos hectares", "O rebanho tinha oitenta ovelhas", "A sessão foi marcada para julho"],
      },
    },
    {
      id: "md-pt-b2-11-3", theme: "relax fisico",
      title: "Os pés no chão da sala", titleEs: "Los pies en el suelo de la sala", minutes: 2,
      paragraphs: [
        { it: "Uma sala de audiências é feita de cadeiras duras e assuntos que apertam; o corpo, esperto, sobe aos ombros tudo o que a cabeça não aguenta. O remédio é antigo e gratuito: os pés no chão. Sentir a sola inteira a tocar o chão devolve ao corpo o seu peso verdadeiro e à cabeça um chão onde apoiar as ideias.", es: "Una sala de audiencias está hecha de sillas duras y asuntos que aprietan; el cuerpo, listo, sube a los hombros todo lo que la cabeza no aguanta. El remedio es antiguo y gratuito: los pies en el suelo. Sentir la planta entera tocando el suelo devuelve al cuerpo su peso verdadero y a la cabeza un suelo donde apoyar las ideas." },
        { it: "Antes de o teu nome ser chamado, faz a ronda completa: pés no chão, costas afastadas do encosto, mãos pousadas — uma em cada coxa, sem se agarrarem. Respira para o baixo ventre duas vezes. Esta disposição não vence debates; impede que o debate te vença por dentro. E se a voz tremer quando chegares ao microfone, os pés, esses, continuam no chão — por eles se começa sempre outra vez.", es: "Antes de que llamen tu nombre, haz la ronda completa: pies en el suelo, espalda separada del respaldo, manos posadas — una en cada muslo, sin agarrarse. Respira hacia el bajo vientre dos veces. Esta disposición no gana debates; impide que el debate te gane por dentro. Y si la voz tiembla cuando llegues al micrófono, los pies, esos, siguen en el suelo — por ellos se empieza siempre otra vez." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Ejercicios de calentamiento", "Anclarse con los pies en el suelo antes de hablar en una sala pública", "Cómo sentarse durante horas"],
        answer: 1,
        why: "«Os pés no chão da sala» apunta al anclaje físico concreto en la audiencia, no a gimnasia general.",
      },
      sequence: {
        instr: "Ordena la ronda de anclaje según el texto:",
        events: ["Notas o corpo a subir aos ombros na sala", "Pousas a sola inteira dos pés no chão", "Afastas as costas do encosto e pousas as mãos", "Respiras para o baixo ventre duas vezes", "Se a voz tremer, recomeças pelos pés"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Estás na sala, à espera do teu turno. Faz isto em silêncio: pousa os dois pés no chão, a sola inteira, sem pressa. Solta o encosto das costas e pousa as mãos, uma em cada coxa. Agora respira duas vezes para o baixo ventre, devagar. Se o coração continuar rápido, tudo bem: ele também tem o seu lugar na sala. Quando te levantares, leva os pés contigo — por eles se começa sempre.",
        questions: [
          { q: "Onde se pousam os pés?", kind: "literal", options: ["No chão, a sola inteira", "No degrau da cadeira", "Em cima da pasta"], answer: 0, why: "«Pousa os dois pés no chão, a sola inteira»." },
          { q: "Onde se pousam as mãos?", kind: "literal", options: ["Uma em cada coxa", "Nos bolsos", "Uma sobre a outra na nuca"], answer: 0, why: "«Pousa as mãos, uma em cada coxa»." },
          { q: "Para onde se respira?", kind: "literal", options: ["Para o baixo ventre, duas vezes", "Para o teto da sala", "Para o microfone"], answer: 0, why: "«Respira duas vezes para o baixo ventre»." },
          { q: "O que se leva ao levantar, segundo o fecho?", kind: "inferencial", options: ["Os pés, como base de recomeço", "A cadeira consigo", "O ritmo do coração alheio"], answer: 0, why: "«Quando te levantares, leva os pés contigo — por eles se começa sempre»." },
        ],
      },
    },
  ],

  "pt-cu-b2-12": [
    {
      id: "md-pt-b2-12-1", theme: "spiritualità",
      title: "A avó e o fogão de lenha", titleEs: "La abuela y el fogón de leña", minutes: 3,
      paragraphs: [
        { it: "Há histórias de família que são herança espiritual: a avó que cozinhava para dez num fogão de lenha não ensinou apenas receitas — ensinou que alimentar gente é um ofício sagrado, mesmo sem a palavra. Quando um neto conta essa história a uma sala de desconhecidos, está a fazer algo mais antigo que qualquer pitch: está a agradecer em voz alta.", es: "Hay historias de familia que son herencia espiritual: la abuela que cocinaba para diez en un fogón de leña no enseñó solo recetas — enseñó que alimentar gente es un oficio sagrado, incluso sin la palabra. Cuando un nieto cuenta esa historia a una sala de desconocidos, está haciendo algo más antiguo que cualquier pitch: está agradeciendo en voz alta." },
        { it: "A gratidão pelas gerações não precisa de cerimónia: basta lembrar de onde veio o que se sabe — as mãos que ensinaram, a mesa que alimentou, a casa que guardou. Ainda que o mundo mude de velocidade, essa cadeia de cuidados continua por baixo das apps e das rondas de investimento. Quem a reconhece, mesmo num palco de tecnologia, fala com um chão por baixo dos pés; e as salas, sem saber explicar porquê, confiam mais em quem tem chão.", es: "La gratitud por las generaciones no necesita ceremonia: basta recordar de dónde vino lo que se sabe — las manos que enseñaron, la mesa que alimentó, la casa que guardó. Aunque el mundo cambie de velocidad, esa cadena de cuidados sigue por debajo de las apps y de las rondas de inversión. Quien la reconoce, incluso en un escenario de tecnología, habla con un suelo bajo los pies; y las salas, sin saber explicar por qué, confían más en quien tiene suelo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La biografía de una cocinera", "La gratitud por las generaciones anteriores como suelo interior", "Cómo presentar una app"],
        answer: 1,
        why: "La abuela del título es el símbolo: el texto trata de la herança y la gratitud, no de biografía ni producto.",
      },
      quiz: [
        { q: "O que ensinou a avó, segundo o texto?", kind: "literal", options: ["Que alimentar gente é um ofício sagrado", "A receita do pão caseiro", "A gerir uma empresa"], answer: 0, why: "«Ensinou que alimentar gente é um ofício sagrado, mesmo sem a palavra»." },
        { q: "Porque é que as salas confiam mais em quem tem chão?", kind: "inferencial", options: ["Porque reconhecer a cadeia de cuidados dá verdade à história", "Porque o chão é um bom investimento", "Porque a tecnologia assusta"], answer: 0, why: "Se infiere: quien reconoce de dónde viene habla con base y eso genera confianza." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["A gratidão pelas gerações sustenta, por baixo, até os palcos de tecnologia", "As avós deviam fazer pitch", "O fogão de lenha é melhor que o gás"], answer: 0, why: "El texto sostiene que la cadena de cuidados sigue viva incluso bajo las apps." },
      ],
      vf: [
        { text: "Contar a história da avó é descrito como agradecer em voz alta.", value: true, why: "«Está a fazer algo mais antigo que qualquer pitch: está a agradecer em voz alta»." },
        { text: "O texto diz que a cadeia de cuidados parou com a tecnologia.", value: false, why: "Dice que «continua por baixo das apps e das rondas de investimento»." },
        { text: "As salas confiam mais em quem tem chão, segundo o texto.", value: true, why: "«As salas, sem saber explicar porquê, confiam mais em quem tem chão»." },
      ],
    },
    {
      id: "md-pt-b2-12-2", theme: "relax mentale",
      title: "Antes do cronómetro", titleEs: "Antes del cronómetro", minutes: 2,
      paragraphs: [
        { it: "Nos minutos antes de um pitch, a mente ensaia desastres com um luxo de detalhe que nenhum argumentário merece: o silêncio da sala, a pergunta impossível, o apontador que não abre. Chama-se medo de palco; devia chamar-se imaginação a trabalhar no turno errado. A energia é a mesma do entusiasmo — está apenas vestida de preto.", es: "En los minutos antes de un pitch, la mente ensaya desastres con un lujo de detalle que ningún argumentario merece: el silencio de la sala, la pregunta imposible, el puntero que no abre. Se llama miedo escénico; debería llamarse imaginación trabajando en el turno equivocado. La energía es la misma del entusiasmo — solo que está vestida de negro." },
        { it: "Descansar a mente antes dos três minutos é simples e chato: conta as respirações, sente os pés, olha a sala sem a conquistar ainda. Ninguém te julga nos primeiros trinta segundos com a severidade com que te julgas tu. E se o medo aparecer mesmo assim, deixa-o sentar-se na primeira fila — contigo é que ele não sobe ao palco.", es: "Descansar la mente antes de los tres minutos es simple y aburrido: cuenta las respiraciones, siente los pies, mira la sala sin conquistarla todavía. Nadie te juzga en los primeros treinta segundos con la severidad con que te juzgas tú. Y si el miedo aparece igualmente, déjalo sentarse en la primera fila — contigo es que no sube al escenario." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de presentación", "Calmar el ensayo mental de desastres antes de salir al escenario", "Cómo responder a inversores"],
        answer: 1,
        why: "«Antes do cronómetro» sitúa la práctica en los minutos previos: calma mental, no oratoria.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "A mente ensaia desastres com luxo de detalhe.",
          "A energia do medo é a mesma do entusiasmo.",
          "Conta as respirações e olha a sala sem a conquistar ainda.",
          "A apresentação tinha doze diapositivas e um vídeo.",
          "O medo fica na primeira fila; contigo não sobe ao palco.",
        ],
        intruder: 3,
        why: "El número de diapositivas es un dato de producción, ajeno a la calma mental previa: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["O medo de palco é imaginação no turno errado, e prepara-se com respiração e pés no chão", "Os pitch devem ser decorados palavra por palavra", "O medo desaparece com a experiência"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A mente ensaia desastres com luxo de detalhe", "A energia do medo é a mesma do entusiasmo", "O medo pode sentar-se na primeira fila, mas não sobe ao palco"],
        distractors: ["O cronómetro estava programado para três minutos", "A sala tinha duzentas pessoas", "Os investidores vieram de Lisboa"],
      },
    },
    {
      id: "md-pt-b2-12-3", theme: "meditazione",
      title: "Três minutos de presença", titleEs: "Tres minutos de presencia", minutes: 3,
      paragraphs: [
        { it: "Um pitch bem dado assemelha-se a uma meditação em pé: um começo, um meio, um fim, e a atenção inteira em cada parte enquanto ela acontece. Quem está no cronómetro não está na sala; quem está na sala não sente o cronómetro. Três minutos de presença valem mais do que doze de recitação — e as mesas de investidores sabem disto há muito tempo.", es: "Un pitch bien dado se parece con una meditación de pie: un principio, un medio, un final, y la atención entera en cada parte mientras ocurre. Quien está en el cronómetro no está en la sala; quien está en la sala no siente el cronómetro. Tres minutos de presencia valen más que doce de recitación — y las mesas de inversores saben esto desde hace mucho tiempo." },
        { it: "A prática cabe em qualquer dia: escolhe uma tarefa curta — três minutos de conversa, de escrita, de escuta — e dá-lhe o estatuto de pitch: começo, meio, fim, presença inteira. Perdeste o fio? Volta, como se volta à respiração. Ao fim de algumas semanas, esta atenção de três minutos começa a aparecer sozinha nas horas maiores. O palco, afinal, é treino disfarçado de apresentação.", es: "La práctica cabe en cualquier día: elige una tarea corta — tres minutos de conversación, de escritura, de escucha — y dale el estatus de pitch: principio, medio, final, presencia entera. ¿Perdiste el hilo? Vuelve, como se vuelve a la respiración. Al final de unas semanas, esta atención de tres minutos empieza a aparecer sola en las horas grandes. El escenario, al final, es entrenamiento disfrazado de presentación." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo montar diapositivas", "Tratar cada tarea breve como un pequeño pitch con atención plena", "El miedo escénico y sus causas"],
        answer: 1,
        why: "«Três minutos de presença» propone un entrenamiento cotidiano de atención, no técnicas de presentación.",
      },
      sequence: {
        instr: "Ordena el entrenamiento según el texto:",
        events: ["Escolhes uma tarefa curta de três minutos", "Dás-lhe começo, meio e fim", "Entregas presença inteira a cada parte", "Perdes o fio e voltas, como à respiração", "A atenção de três minutos aparece nas horas maiores"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Três minutos. É só isto que te peço hoje: escolhe uma conversa, uma página, um café, e trata-o como um pitch. Começo, meio, fim — presença inteira em cada parte. Quando a mente fugir para a pergunta seguinte, volta ao momento, como quem volta à respiração. Ninguém vai aplaudir, e está certo: o treino é teu. Mas ao fim de alguns dias, a atenção de três minutos começa a aparecer sozinha — nas horas grandes, quando mais precisas dela.",
        questions: [
          { q: "O que se escolhe para o treino, segundo o áudio?", kind: "literal", options: ["Uma conversa, uma página ou um café", "Uma maratona de trabalho", "Um dia inteiro de silêncio"], answer: 0, why: "«Escolhe uma conversa, uma página, um café»." },
          { q: "O que se faz quando a mente foge?", kind: "literal", options: ["Volta-se ao momento, como à respiração", "Muda-se de tarefa", "Desiste-se do treino"], answer: 0, why: "«Volta ao momento, como quem volta à respiração»." },
          { q: "Porque é que ninguém vai aplaudir?", kind: "inferencial", options: ["Porque o treino é interior e pessoal", "Porque o treino correu mal", "Porque a sala está vazia"], answer: 0, why: "«Ninguém vai aplaudir, e está certo: o treino é teu»." },
          { q: "Quando aparece a atenção de três minutos, segundo o fecho?", kind: "inferencial", options: ["Nas horas grandes, quando mais se precisa", "Só em palco", "Nunca, sem treino diário"], answer: 0, why: "«Começa a aparecer sozinha — nas horas grandes, quando mais precisas dela»." },
        ],
      },
    },
  ],
};
