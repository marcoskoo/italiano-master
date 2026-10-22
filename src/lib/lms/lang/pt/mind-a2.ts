import type { MindReading } from "../../cambridge-mind";

/* ═══ PT A2 · Mind readings (temáticas de conciencia) — 3 por unidade ═
   Metodología idéntica a las italianas (v9.13): 7 estrategias de
   comprensión lectora y de escucha. Textos en portugués de Portugal A2,
   traducción española a la vista. Campos `.it` = portugués (lengua de
   estudio), `.es` = español. Estrategia por índice: L1 = predict +
   quiz (lit/inf/crít) + V/F con justificación; L2 = predict + ideas +
   intruso; L3 = predict + secuencia + escucha. */

export const PT_MIND_A2: Record<string, MindReading[]> = {
  "pt-cu-a2-01": [
    {
      id: "md-pt-a2-01-1", theme: "meditazione",
      title: "O fim de semana respira", titleEs: "El fin de semana respira",
      minutes: 2,
      paragraphs: [
        { it: "O fim de semana acabou, mas ainda vive em ti. Fecha os olhos um minuto. Respira uma vez, devagar, e deixa o sábado e o domingo passarem como um filme: os lugares, as pessoas, o riso.", es: "El fin de semana terminó, pero sigue vivo en ti. Cierra los ojos un minuto. Respira una vez, despacio, y deja que el sábado y el domingo pasen como una película: los lugares, las personas, la risa." },
        { it: "A memória boa também se saboreia. Não agarres nas lembranças com força; apenas olha-as, como quem olha o rio Tejo de uma margem. Depois agradece. Um fim de semana vivido com atenção é um presente que continua a dar.", es: "El buen recuerdo también se saborea. No agarres los recuerdos con fuerza; solo míralos, como quien mira el río Tajo desde la orilla. Después agradece. Un fin de semana vivido con atención es un regalo que sigue dando." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de turismo de fin de semana", "Saborear con calma los recuerdos del fin de semana", "Cómo trabajar más rápido los lunes"],
        answer: 1,
        why: "El título «respira» + fin de semana apunta a revisar los recuerdos con calma, no a turismo ni a trabajo.",
      },
      quiz: [
        { q: "O que fazes no primeiro minuto?", kind: "literal", options: ["Fecho os olhos e respiro devagar", "Escrevo uma lista de tarefas", "Ligo a um amigo"], answer: 0, why: "«Fecha os olhos um minuto. Respira uma vez, devagar»." },
        { q: "Como deves olhar as lembranças?", kind: "inferencial", options: ["Com força, para não as perder", "Como quem olha o Tejo de uma margem, sem agarrar", "Com medo de as esquecer"], answer: 1, why: "«Não agarres com força; apenas olha-as, como quem olha o Tejo»: mirar sin agarrar." },
        { q: "Qual é a melhor ideia para este texto?", kind: "critica", options: ["Os fins de semana passam depressa demais", "Viver com atenção transforma a memória em presente", "É melhor esquecer o fim de semana"], answer: 1, why: "«Um fim de semana vivido com atenção é um presente que continua a dar»." },
      ],
      vf: [
        { text: "Deves agarrar as lembranças com força.", value: false, why: "El texto dice que no hay que agarrarlas: solo mirarlas, como el Tajo desde la orilla." },
        { text: "O texto usa o rio Tejo como imagem para olhar sem agarrar.", value: true, why: "«como quem olha o rio Tejo de uma margem»." },
        { text: "Um fim de semana vivido com atenção continua a dar.", value: true, why: "«é um presente que continua a dar»." },
      ],
    },
    {
      id: "md-pt-a2-01-2", theme: "qui e ora",
      title: "A segunda-feira começa devagar", titleEs: "El lunes empieza despacio",
      minutes: 2,
      paragraphs: [
        { it: "Segunda-feira de manhã. O escritório ainda está quieto e o computador demora a acordar, como tu. Em vez de correr, para. Sente os pés no chão, o peso do corpo na cadeira, o ar a entrar pelo nariz.", es: "Lunes por la mañana. La oficina todavía está en silencio y el ordenador tarda en despertar, como tú. En vez de correr, para. Siente los pies en el suelo, el peso del cuerpo en la silla, el aire entrando por la nariz." },
        { it: "A semana não é uma corrida: é uma caminhada. Um minuto de presença ao começar o dia muda as horas seguintes. O trabalho espera — o trabalho espera sempre — mas este minuto é só teu, e ninguém to tira.", es: "La semana no es una carrera: es un paseo. Un minuto de presencia al empezar el día cambia las horas siguientes. El trabajo espera — el trabajo siempre espera — pero este minuto es solo tuyo, y nadie te lo quita." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un horario de oficina moderno", "Empezar la semana con un minuto de presencia", "Cómo arreglar un ordenador lento"],
        answer: 1,
        why: "«Começa devagar» apunta a empezar la semana con calma, no a horarios ni a ordenadores.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Sentes os pés no chão e o ar a entrar pelo nariz.",
          "O computador demora a acordar, como tu.",
          "A semana é uma caminhada, não uma corrida.",
          "Os escritórios modernos têm cafeteiras italianas.",
          "Um minuto de presença muda as horas seguintes.",
        ],
        intruder: 3,
        why: "Las cafeteras de oficina no aparecen en el texto: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["A semana é uma corrida para chegar primeiro", "Um minuto de presença ao começar o dia muda as horas seguintes", "Os computadores demoram sempre a acordar"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Sentes os pés no chão e o ar a entrar pelo nariz", "O trabalho espera sempre", "A semana é uma caminhada, não uma corrida"],
        distractors: ["O escritório fica em Lisboa", "Segunda-feira é o melhor dia para férias", "O computador é novo"],
      },
    },
    {
      id: "md-pt-a2-01-3", theme: "relax fisico",
      title: "Descansar as pernas", titleEs: "Descansar las piernas",
      minutes: 2,
      paragraphs: [
        { it: "Andaste o fim de semana inteiro: subiste a serra, visitaste palácios, fizeste quilómetros. Agora as pernas pesam. Deita-te no sofá e levanta as pernas, um minuto só. Sente o peso a sair devagarinho.", es: "Caminaste el fin de semana entero: subiste a la sierra, visitaste palacios, hiciste kilómetros. Ahora las piernas pesan. Túmbate en el sofá y levanta las piernas, solo un minuto. Siente el peso salir despacito." },
        { it: "O corpo guarda tudo o que andou. Para o agradecer, aperta os pés, conta até três e larga-os. Do calcanhar à ponta dos dedos, um de cada vez. Depois bebe água e dorme cedo: o melhor alongamento é o descanso.", es: "El cuerpo guarda todo lo que caminó. Para agradecérselo, aprieta los pies, cuenta hasta tres y suéltalos. Del talón a la punta de los dedos, uno cada vez. Después bebe agua y duerme temprano: el mejor estiramiento es el descanso." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un entrenamiento de running para la montaña", "Relajar las piernas después de un fin de semana caminando", "Cómo visitar palacios en un día"],
        answer: 1,
        why: "«Descansar as pernas» tras «subiste a serra» apunta a relajación física, no a deporte ni a turismo.",
      },
      sequence: {
        instr: "Ordena los pasos del descanso:",
        events: [
          "Deitas-te no sofá e levantas as pernas",
          "Sentes o peso a sair devagarinho",
          "Apertas os pés e contas até três",
          "Largas os dedos, um a um",
          "Bebes água e dormes cedo",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "As tuas pernas andaram muito este fim de semana. Deita-te um minuto. Levanta as pernas e aperta os pés: um, dois, três. Agora larga devagarinho. Sente o descanso a subir do calcanhar até aos joelhos. O corpo agradece. O melhor alongamento é o descanso.",
        questions: [
          { q: "O que fazes com as pernas no sofá?", kind: "literal", options: ["Levantas as pernas", "Escondes as pernas", "Cruzas os braços"], answer: 0, why: "«Levanta as pernas»: literal en el audio." },
          { q: "Até onde contas ao apertar os pés?", kind: "literal", options: ["Até três", "Até dez", "Até cem"], answer: 0, why: "«um, dois, três»: cuenta hasta tres." },
          { q: "De onde até onde sobe o descanso?", kind: "inferencial", options: ["Do calcanhar até aos joelhos", "Dos joelhos até à cabeça", "Da cabeça até aos pés"], answer: 0, why: "«do calcanhar até aos joelhos»." },
          { q: "O que é «o melhor alongamento»?", kind: "inferencial", options: ["O descanso", "Uma corrida lenta", "Um café forte"], answer: 0, why: "El audio cierra diciendo que el mejor estiramiento es el descanso." },
        ],
      },
    },
  ],

  "pt-cu-a2-02": [
    {
      id: "md-pt-a2-02-1", theme: "spiritualità",
      title: "O milagre pequeno do pão", titleEs: "El milagro pequeño del pan",
      minutes: 3,
      paragraphs: [
        { it: "Na pastelaria do bairro, o pão sai do forno às sete. Quem o faz acordou às quatro, quando a cidade dormia. Quando partes o pão quente, partes também este trabalho silencioso: é um milagre pequeno e diário.", es: "En la pastelería del barrio, el pan sale del horno a las siete. Quien lo hace despertó a las cuatro, cuando la ciudad dormía. Cuando partes el pan caliente, partes también este trabajo silencioso: es un milagro pequeño y diario." },
        { it: "A gratidão começa no pequeno-almoço. Antes da primeira dentada, para um segundo. Pensa nas mãos que amassaram, no forno que acordou primeiro, no trigo que cresceu ao sol. Comer com gratidão transforma a pastelaria num lugar sagrado — sem incenso, só com cheiro a canela.", es: "La gratitud empieza en el desayuno. Antes del primer bocado, para un segundo. Piensa en las manos que amasaron, en el horno que despertó primero, en el trigo que creció al sol. Comer con gratitud transforma la pastelería en un lugar sagrado — sin incienso, solo con olor a canela." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una receta de pan casero", "La gratitud por el trabajo escondido detrás del pan", "Los horarios de las pastelerías"],
        answer: 1,
        why: "«Milagre pequeno» apunta al sentido profundo del pan diario, no a recetas ni a horarios.",
      },
      quiz: [
        { q: "A que horas acorda quem faz o pão?", kind: "literal", options: ["Às quatro da manhã", "Às sete", "Ao meio-dia"], answer: 0, why: "«acordou às quatro, quando a cidade dormia»." },
        { q: "O que fazes antes da primeira dentada?", kind: "inferencial", options: ["Paras um segundo e pensas nas mãos que amassaram", "Comes depressa para chegar cedo", "Pagas primeiro"], answer: 0, why: "«Antes da primeira dentada, para um segundo. Pensa nas mãos que amassaram»." },
        { q: "Qual é a ideia principal do texto?", kind: "critica", options: ["O pão está caro nas pastelarias", "Comer com gratidão transforma o quotidiano em algo sagrado", "O forno é a máquina mais importante"], answer: 1, why: "«Comer com gratidão transforma a pastelaria num lugar sagrado»." },
      ],
      vf: [
        { text: "O pão sai do forno às nove da manhã.", value: false, why: "Sale a las siete; el panadero despierta a las cuatro." },
        { text: "O texto chama o pão de «milagre pequeno e diário».", value: true, why: "«é um milagre pequeno e diário»." },
        { text: "A gratidão começa no pequeno-almoço.", value: true, why: "«A gratidão começa no pequeno-almoço»." },
      ],
    },
    {
      id: "md-pt-a2-02-2", theme: "relax fisico",
      title: "As mãos na chávena quente", titleEs: "Las manos en la taza caliente",
      minutes: 2,
      paragraphs: [
        { it: "Esperas a vez no balcão e as mãos estão frias. Enrola-as à volta da chávena, sem apertar. O calor entra devagar pela pele e sobe pelos braços. Não é só o café que aquece: é o contacto, o cheiro, a pausa.", es: "Esperas tu turno en el mostrador y las manos están frías. Envuélvelas alrededor de la taza, sin apretar. El calor entra despacio por la piel y sube por los brazos. No es solo el café que calienta: es el contacto, el aroma, la pausa." },
        { it: "Enquanto esperas, solta os dedos um a um: polegar, indicador, os outros. A mão que trabalha a semana toda merece este minuto de forno. Quando chegar a tua vez, já não estás só à espera: estás a descansar.", es: "Mientras esperas, suelta los dedos uno a uno: pulgar, índice, los demás. La mano que trabaja la semana entera merece este minuto de horno. Cuando llegue tu turno, ya no estás solo esperando: estás descansando." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo preparar café con leche", "Relajar las manos con el calor de la taza mientras esperas", "Los precios del café en Lisboa"],
        answer: 1,
        why: "El título apunta al contacto físico con la taza, no a recetas ni a precios.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Enrolas as mãos à volta da chávena.",
          "O calor entra devagar pela pele.",
          "Soltas os dedos um a um: polegar, indicador, os outros.",
          "O açúcar faz mal aos dentes.",
          "A mão que trabalha merece um minuto de forno.",
        ],
        intruder: 3,
        why: "El azúcar no aparece en el texto: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["O café é a bebida mais popular de Portugal", "A espera pode ser um descanso se usares o calor da chávena", "As mãos frias são um problema de saúde"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Enrolas as mãos à volta da chávena", "O calor entra devagar pela pele", "Soltas os dedos um a um"],
        distractors: ["O café custa dois euros", "A pastelaria abre às oito", "As luvas são a melhor solução"],
      },
    },
    {
      id: "md-pt-a2-02-3", theme: "meditazione",
      title: "Uma respiração antes de pedir", titleEs: "Una respiración antes de pedir",
      minutes: 2,
      paragraphs: [
        { it: "A fila do balcão anda devagar. Há gente à tua frente, cheiro a canela, barulho de chávenas. Em vez de olhar o telemóvel, olha a tua respiração: entra pelo nariz, sai pela boca, quatro vezes.", es: "La fila del mostrador avanza despacio. Hay gente delante de ti, olor a canela, ruido de tazas. En vez de mirar el móvil, mira tu respiración: entra por la nariz, sale por la boca, cuatro veces." },
        { it: "Quando chegar a tua vez, pede com calma: «Queria um galão, por favor.» As palavras ditas devagar sabem melhor. A fila não é um obstáculo: é um lugar de treino. Meditar também se faz de pé, à espera do café.", es: "Cuando llegue tu turno, pide con calma: «Quisiera un galão, por favor.» Las palabras dichas despacio saben mejor. La fila no es un obstáculo: es un lugar de entrenamiento. Meditar también se hace de pie, esperando el café." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual del barista profesional", "Usar la fila de la pastelería como momento de meditación", "Cómo pedir más rápido en portugués"],
        answer: 1,
        why: "«Antes de pedir» + fila apuntan a la espera consciente, no a la velocidad.",
      },
      sequence: {
        instr: "Ordena los pasos de la fila consciente:",
        events: [
          "Olhas a tua respiração em vez do telemóvel",
          "A respiração entra pelo nariz e sai pela boca",
          "Contas quatro respirações",
          "Chega a tua vez e pedes com calma",
          "Dizes «Queria um galão, por favor»",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "Estás à espera no balcão. Não olhes o telemóvel. Olha a respiração: entra pelo nariz, sai pela boca. Quatro vezes, devagar. Quando chegar a tua vez, pede com calma e com um sorriso: queria um galão, por favor. A fila é o teu lugar de treino. Meditar também se faz de pé.",
        questions: [
          { q: "O que deves olhar em vez do telemóvel?", kind: "literal", options: ["A respiração", "O relógio", "A vitrina"], answer: 0, why: "«Não olhes o telemóvel. Olha a respiração»." },
          { q: "Quantas respirações contas?", kind: "literal", options: ["Duas", "Quatro", "Sete"], answer: 1, why: "«Quatro vezes, devagar»." },
          { q: "Como pedes quando chega a tua vez?", kind: "inferencial", options: ["Com calma e um sorriso", "Aos gritos", "Sem falar"], answer: 0, why: "«pede com calma e com um sorriso»." },
          { q: "Onde se pode meditar, segundo o áudio?", kind: "inferencial", options: ["Também de pé, à espera", "Só em casa", "Só num templo"], answer: 0, why: "«Meditar também se faz de pé»." },
        ],
      },
    },
  ],

  "pt-cu-a2-03": [
    {
      id: "md-pt-a2-03-1", theme: "relax fisico",
      title: "Os pés na loja", titleEs: "Los pies en la tienda",
      minutes: 2,
      paragraphs: [
        { it: "Estás à terceira loja do sábado e os pés já sabem mais do que tu: doem. Pára um momento entre as prateleiras. Sente o chão: é de madeira? De mármore? O peso está nos calcanhares ou na ponta dos dedos?", es: "Estás en la tercera tienda del sábado y los pies ya saben más que tú: duelen. Para un momento entre las estanterías. Siente el suelo: ¿es de madera? ¿De mármol? ¿El peso está en los talones o en la punta de los dedos?" },
        { it: "Dá três passos muito lentos, como se fosses o primeiro ser humano a pisar aquela loja. Os pés carregaram-te a vida inteira; merecem este respeito. Depois continua as compras — mas com pés despertos, cada passo sabe melhor.", es: "Da tres pasos muy lentos, como si fueras el primer ser humano en pisar esa tienda. Los pies te cargaron la vida entera; merecen este respeto. Después sigue con las compras — pero con pies despiertos, cada paso sabe mejor." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de compras de sábado", "Cuidar los pies durante un día de compras", "Los mejores suelos de las tiendas"],
        answer: 1,
        why: "Los pies que duelen en la tercera tienda apuntan al cuidado físico, no a una guía de compras.",
      },
      quiz: [
        { q: "O que sabem os pés à terceira loja?", kind: "literal", options: ["Doem", "Dançam", "Cantam"], answer: 0, why: "«os pés já sabem mais do que tu: doem»." },
        { q: "Como são os três passos lentos?", kind: "inferencial", options: ["Como se fosses o primeiro a pisar a loja", "Como se estivesses a fugir", "Como um soldado"], answer: 0, why: "«como se fosses o primeiro ser humano a pisar aquela loja»." },
        { q: "Qual é a ideia principal do texto?", kind: "critica", options: ["Comprar ao sábado é um erro", "Dar atenção aos pés muda até as compras", "As lojas deviam ter mais cadeiras"], answer: 1, why: "«com pés despertos, cada passo sabe melhor»." },
      ],
      vf: [
        { text: "Deves correr entre as prateleiras.", value: false, why: "El texto pide tres passos muito lentos." },
        { text: "Os pés carregaram-te a vida inteira.", value: true, why: "«Os pés carregaram-te a vida inteira»." },
        { text: "O texto pergunta se o chão é de madeira ou de mármore.", value: true, why: "«é de madeira? De mármore?»." },
      ],
    },
    {
      id: "md-pt-a2-03-2", theme: "meditazione",
      title: "Escolher com calma", titleEs: "Elegir con calma",
      minutes: 2,
      paragraphs: [
        { it: "Duas camisas: esta e aquela. Uma é mais barata, a outra é mais bonita. A mente salta de uma para outra como um gato entre móveis. Para. Fecha os olhos. Respira. Pergunta ao corpo, não à pressa.", es: "Dos camisas: esta y aquella. Una es más barata, la otra más bonita. La mente salta de una a otra como un gato entre muebles. Para. Cierra los ojos. Respira. Pregúntale al cuerpo, no a la prisa." },
        { it: "A escolha com calma tem um segredo: não existe a camisa perfeita, existe a camisa suficiente. Depois de escolher, não olhes para trás. Quem escolhe com presença não se arrepende — porque escolheu com atenção, não com medo.", es: "La elección con calma tiene un secreto: no existe la camisa perfecta, existe la camisa suficiente. Después de elegir, no mires atrás. Quien elige con presencia no se arrepiente — porque eligió con atención, no con miedo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Trucos para ahorrar comprando ropa", "Elegir entre dos opciones con calma y sin arrepentirse", "El cuidado de los gatos en las tiendas"],
        answer: 1,
        why: "Dos camisas y la mente que salta: el tema es elegir con calma.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "A mente salta como um gato entre móveis.",
          "Perguntas ao corpo, não à pressa.",
          "Não existe a camisa perfeita.",
          "Os gatos preferem caixas de cartão.",
          "Quem escolhe com presença não se arrepende.",
        ],
        intruder: 3,
        why: "Las cajas de cartón no aparecen en el texto: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["A camisa mais barata é sempre a melhor", "Escolher com presença evita o arrependimento", "Os gatos escolhem melhor que as pessoas"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A mente salta de uma camisa para a outra", "Perguntas ao corpo, não à pressa", "Não existe a camisa perfeita, existe a suficiente"],
        distractors: ["A camisa cara é a mais bonita", "Devolver compras é proibido", "O texto fala de um fato de casamento"],
      },
    },
    {
      id: "md-pt-a2-03-3", theme: "spiritualità",
      title: "O suficiente", titleEs: "Lo suficiente",
      minutes: 2,
      paragraphs: [
        { it: "Depois de três lojas e duas sacolas, senta-te num banco do centro comercial. Olha para as sacolas e pergunta: o que é suficiente? O corpo precisa de pouco; o desejo pede sempre mais, como o mar pede rios.", es: "Después de tres tiendas y dos bolsas, siéntate en un banco del centro comercial. Mira las bolsas y pregúntate: ¿qué es suficiente? El cuerpo necesita poco; el deseo pide siempre más, como el mar pide ríos." },
        { it: "Há uma liberdade escondida em dizer «chega». Não é pobreza: é sabedoria. Quem sabe o que é suficiente compra menos, escolhe melhor e agradece o dobro. Esta também é uma compra que se faz nas compras.", es: "Hay una libertad escondida en decir «suficiente». No es pobreza: es sabiduría. Quien sabe qué es suficiente compra menos, elige mejor y agradece el doble. Esta también es una compra que se hace de compras." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un catálogo de ofertas del centro comercial", "La sabiduría de reconocer lo suficiente al comprar", "Cómo llevar más bolsas sin cansarse"],
        answer: 1,
        why: "«O suficiente» apunta a la medida justa, no a ofertas ni a bolsas.",
      },
      sequence: {
        instr: "Ordena los pasos de la reflexión:",
        events: [
          "Sentas-te num banco do centro comercial",
          "Olhas para as sacolas",
          "Perguntas o que é suficiente",
          "Dizes «chega» com liberdade",
          "Agradeces o que já tens",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "Depois das compras, senta-te num banco. Olha as sacolas devagar e pergunta: o que é suficiente? O corpo precisa de pouco; o desejo pede sempre mais. Há liberdade na palavra chega. Não é pobreza, é sabedoria. Quem sabe o que chega, agradece o dobro.",
        questions: [
          { q: "Onde te sentas depois das compras?", kind: "literal", options: ["Num banco do centro comercial", "No chão da loja", "Num café do Porto"], answer: 0, why: "«senta-te num banco» del centro comercial." },
          { q: "O que perguntas a olhar as sacolas?", kind: "literal", options: ["O que é suficiente", "Quanto custa tudo", "Onde está o carro"], answer: 0, why: "«pergunta: o que é suficiente?»." },
          { q: "O que pede sempre o desejo?", kind: "literal", options: ["Sempre mais", "Sempre menos", "O mesmo"], answer: 0, why: "«o desejo pede sempre mais»." },
          { q: "O que significa dizer «chega»?", kind: "inferencial", options: ["Liberdade e sabedoria, não pobreza", "Que não tens dinheiro", "Que odeias compras"], answer: 0, why: "«Não é pobreza, é sabedoria»." },
        ],
      },
    },
  ],

  "pt-cu-a2-04": [
    {
      id: "md-pt-a2-04-1", theme: "spiritualità",
      title: "A janela do comboio", titleEs: "La ventana del tren",
      minutes: 3,
      paragraphs: [
        { it: "No comboio para o Porto, escolhe uma janela e fica. As vinhas passam, as casas passam, as estações pequenas passam. Tudo o que passa te ensina uma coisa: tu também passas, e nem por isso deves fugir do lugar onde estás.", es: "En el tren hacia Oporto, elige una ventana y quédate. Las viñas pasan, las casas pasan, las estaciones pequeñas pasan. Todo lo que pasa te enseña una cosa: tú también pasas, y no por eso debes huir del lugar donde estás." },
        { it: "Contemplar é viajar duas vezes: uma com o corpo, outra com a atenção. O comboio faz o caminho; tu fazes o milagre de o ver. Quando chegares ao Porto, a cidade será diferente — porque os teus olhos viajaram descansados.", es: "Contemplar es viajar dos veces: una con el cuerpo, otra con la atención. El tren hace el camino; tú haces el milagro de verlo. Cuando llegues a Oporto, la ciudad será diferente — porque tus ojos viajaron descansados." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los horarios de la línea Lisboa–Porto", "Contemplar el paisaje desde la ventana del tren", "Cómo dormir bien en los trenes"],
        answer: 1,
        why: "La ventana del comboio apunta a mirar el paisaje, no a horarios ni a dormir.",
      },
      quiz: [
        { q: "O que escolhes no comboio, segundo o texto?", kind: "literal", options: ["Uma janela", "Um livro", "Um lugar sem gente"], answer: 0, why: "«escolhe uma janela e fica»." },
        { q: "O que ensina tudo o que passa?", kind: "inferencial", options: ["Que tu também passas, sem fugir do lugar onde estás", "Que as estações são pequenas", "Que o comboio é rápido"], answer: 0, why: "«tudo o que passa te ensina: tu também passas, e nem por isso deves fugir»." },
        { q: "O que significa «contemplar é viajar duas vezes»?", kind: "critica", options: ["Ver o mesmo caminho com atenção é viajar de novo", "Comprar dois bilhetes", "Viajar cansa o dobro"], answer: 0, why: "La segunda vuelta es con la atención: ver el camino conscientemente." },
      ],
      vf: [
        { text: "As vinhas e as casas passam pela janela.", value: true, why: "«As vinhas passam, as casas passam»." },
        { text: "O texto manda fugir do lugar onde estás.", value: false, why: "Dice «não deves fugir do lugar onde estás»." },
        { text: "Os teus olhos também viajam.", value: true, why: "«os teus olhos viajaram descansados»." },
      ],
    },
    {
      id: "md-pt-a2-04-2", theme: "relax mentale",
      title: "A tempestade passa", titleEs: "La tormenta pasa",
      minutes: 2,
      paragraphs: [
        { it: "No Porto, a chuva chegou de repente, como chegam os maus pensamentos: sem avisar e toda de uma vez. Mas repara: nenhuma tempestade durou para sempre. Os pensamentos escuros também têm a duração de um aguaceiro.", es: "En Oporto, la lluvia llegó de repente, como llegan los malos pensamientos: sin avisar y de golpe. Pero fíjate: ninguna tormenta duró para siempre. Los pensamientos oscuros también duran lo que un chubasco." },
        { it: "Não lutes contra a chuva — abriga-te e espera. Com um pensamento triste é igual: não o alimentes com histórias, apenas deixa-o cair. Ao fim de alguns minutos, o céu abre. Dentro de ti também há um céu, e ele é maior do que qualquer nuvem.", es: "No luches contra la lluvia — refúgiate y espera. Con un pensamiento triste es igual: no lo alimentes con historias, solo déjalo caer. Al cabo de unos minutos, el cielo se abre. Dentro de ti también hay un cielo, y es más grande que cualquier nube." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["El pronóstico del tiempo del norte", "Los pensamientos oscuros son como tormentas: pasan", "Cómo reparar paraguas rotos"],
        answer: 1,
        why: "La tormenta que llega como los malos pensamientos apunta a la metáfora interior.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Nenhuma tempestade durou para sempre.",
          "Os pensamentos escuros têm a duração de um aguaceiro.",
          "Não alimentes o pensamento triste com histórias.",
          "Os guarda-chuvas do Porto são pretos.",
          "Dentro de ti há um céu maior do que qualquer nuvem.",
        ],
        intruder: 3,
        why: "El color de los paraguas no aparece en el texto: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["A chuva do Porto é a pior do mundo", "Os pensamentos escuros passam como aguaceiros se não os alimentamos", "É preciso lutar contra a chuva"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A chuva chegou sem avisar, toda de uma vez", "Não alimentes o pensamento triste com histórias", "Dentro de ti há um céu maior do que qualquer nuvem"],
        distractors: ["A tempestade durou três dias", "O guarda-chuva custou dez euros", "O Porto tem cem chuvas por ano"],
      },
    },
    {
      id: "md-pt-a2-04-3", theme: "qui e ora",
      title: "Chegar ao Porto", titleEs: "Llegar a Oporto",
      minutes: 2,
      paragraphs: [
        { it: "Campanhã, meio-dia. A viagem acabou e a cidade começa. Antes de tirar fotografias, fica um minuto na plataforma. Sente os pés na terra do norte, o ar fresco, o barulho das malas e dos avisos. Acabaste de chegar: é um momento raro.", es: "Campanhã, mediodía. El viaje terminó y la ciudad empieza. Antes de hacer fotos, quédate un minuto en el andén. Siente los pies en la tierra del norte, el aire fresco, el ruido de las maletas y de los avisos. Acabas de llegar: es un momento raro." },
        { it: "Chegar bem vale mais do que chegar rápido. A cidade não foge: as pontes, as escadas, o rio — tudo espera por ti. Respira uma vez, pega na mochila e dá o primeiro passo devagar. A viagem continua, mas agora a pé e com atenção.", es: "Llegar bien vale más que llegar rápido. La ciudad no se escapa: los puentes, las escaleras, el río — todo te espera. Respira una vez, coge la mochila y da el primer paso despacio. El viaje continúa, pero ahora a pie y con atención." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de los monumentos de Oporto", "Llegar con presencia: el primer minuto en la nueva ciudad", "Cómo facturar maletas en el tren"],
        answer: 1,
        why: "«Chegar» + un minuto en la plataforma apuntan a la llegada consciente, no al turismo.",
      },
      sequence: {
        instr: "Ordena los pasos de la llegada:",
        events: [
          "Ficas um minuto na plataforma",
          "Sentes os pés na terra e o ar fresco",
          "Respiras uma vez",
          "Pegas na mochila",
          "Dás o primeiro passo devagar",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "Chegaste ao Porto. A viagem acabou; a cidade começa. Não corras para as fotografias. Fica um momento na plataforma: sente o ar fresco do norte e o barulho das malas. Respira uma vez, devagar. Agora pega na mochila e dá o primeiro passo com calma. A cidade espera por ti.",
        questions: [
          { q: "O que fazes antes das fotografias?", kind: "literal", options: ["Fico um minuto na plataforma", "Tiro vinte fotos", "Ligo a um amigo"], answer: 0, why: "«Não corras para as fotografias. Fica um momento na plataforma»." },
          { q: "Como é o ar do norte?", kind: "literal", options: ["Fresco", "Quente", "Seco como o deserto"], answer: 0, why: "«sente o ar fresco do norte»." },
          { q: "Como é o primeiro passo?", kind: "inferencial", options: ["Devagar, com calma", "A correr", "Para trás"], answer: 0, why: "«dá o primeiro passo com calma»." },
          { q: "O que faz a cidade, segundo o áudio?", kind: "inferencial", options: ["Espera por ti", "Foge de ti", "Dorme"], answer: 0, why: "«A cidade espera por ti»." },
        ],
      },
    },
  ],

  "pt-cu-a2-05": [
    {
      id: "md-pt-a2-05-1", theme: "relax mentale",
      title: "O amanhã pode esperar", titleEs: "El mañana puede esperar",
      minutes: 2,
      paragraphs: [
        { it: "Sexta-feira à noite e a cabeça já vive no sábado: o jogo, o café, o passeio junto ao rio. Fazes planos como quem foge do presente. Mas o presente também é sexta: está aqui, a pedir um pouco da tua atenção.", es: "Viernes por la noche y la cabeza ya vive en el sábado: el partido, el café, el paseo junto al río. Haces planes como quien huye del presente. Pero el presente también es viernes: está aquí, pidiendo un poco de tu atención." },
        { it: "Os planos são mapas, não são países. Prepara o sábado sem deixar de morar na sexta. Uma respiração, duas, três — e o amanhã deixa de apertar. Quem descansa hoje faz planos melhores amanhã.", es: "Los planes son mapas, no son países. Prepara el sábado sin dejar de vivir el viernes. Una respiración, dos, tres — y el mañana deja de apretar. Quien descansa hoy hace mejores planes mañana." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una agenda para el fin de semana", "Los planes futuros no deben robarse el presente", "Cómo jugar al fútbol los sábados"],
        answer: 1,
        why: "«O amanhã pode esperar» apunta a soltar los planes y habitar el presente.",
      },
      quiz: [
        { q: "Onde vive a cabeça na sexta-feira à noite?", kind: "literal", options: ["Já no sábado", "No trabalho", "No ano passado"], answer: 0, why: "«a cabeça já vive no sábado»." },
        { q: "O que são os planos, segundo o texto?", kind: "inferencial", options: ["Mapas, não países", "Países inteiros", "Uma perda de tempo"], answer: 0, why: "«Os planos são mapas, não são países»." },
        { q: "Qual é o conselho principal?", kind: "critica", options: ["Fazer planos só aos domingos", "Preparar o futuro sem deixar de morar no presente", "Não fazer planos nunca"], answer: 1, why: "«Prepara o sábado sem deixar de morar na sexta»." },
      ],
      vf: [
        { text: "Fazes planos como quem foge do presente.", value: true, why: "«Fazes planos como quem foge do presente»." },
        { text: "O texto manda morar no sábado o mais depressa possível.", value: false, why: "Al revés: «sem deixar de morar na sexta»." },
        { text: "Quem descansa hoje faz planos melhores amanhã.", value: true, why: "Es la frase final del texto." },
      ],
    },
    {
      id: "md-pt-a2-05-2", theme: "spiritualità",
      title: "Confiança no caminho", titleEs: "Confianza en el camino",
      minutes: 2,
      paragraphs: [
        { it: "O grupo combina tudo: hora, café, restaurante, plano B para a chuva. Mas há coisas que nenhum grupo planeia: o sol que aparece à hora certa, o amigo que chega atrasado com uma história boa. A vida guarda surpresas para quem confia.", es: "El grupo lo combina todo: hora, café, restaurante, plan B para la lluvia. Pero hay cosas que ningún grupo planea: el sol que aparece a tiempo, el amigo que llega tarde con una buena historia. La vida guarda sorpresas para quien confía." },
        { it: "Confiança não é preguiça: é fazer a tua parte e deixar o resto caminhar. Combina os planos, marca as horas — e depois abre as mãos. As melhores tardes de sábado são metade planeadas, metade recebidas.", es: "La confianza no es pereza: es hacer tu parte y dejar que el resto camine. Combina los planes, marca las horas — y después abre las manos. Las mejores tardes de sábado son mitad planeadas, mitad recibidas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Las mejores apps para organizar planes", "Planear con calma y confiar en lo que la vida trae", "Por qué llegar tarde es de mala educación"],
        answer: 1,
        why: "«Confiança no caminho» apunta a hacer tu parte y abrir las manos, no a apps ni a la puntualidad.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Nenhum grupo planeia o sol à hora certa.",
          "Confiança não é preguiça.",
          "Fazes a tua parte e deixas o resto caminhar.",
          "Os grupos têm cinco aplicações para planear tudo.",
          "As melhores tardes são metade recebidas.",
        ],
        intruder: 3,
        why: "Las cinco aplicaciones no aparecen en el texto: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Os grupos deviam planeá-lo tudo ao minuto", "As melhores tardes são metade planeadas, metade recebidas", "As surpresas estragam os planos"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Há coisas que nenhum grupo planeia", "Confiança é fazer a tua parte e deixar o resto caminhar", "Depois de marcar as horas, abres as mãos"],
        distractors: ["O amigo chegou três horas atrasado", "O café fechou para sempre", "Ninguém gosta de surpresas"],
      },
    },
    {
      id: "md-pt-a2-05-3", theme: "relax fisico",
      title: "O corpo antes do jogo", titleEs: "El cuerpo antes del partido",
      minutes: 2,
      paragraphs: [
        { it: "Antes do jogo das três, o corpo também precisa de aquecimento — e não falamos dos jogadores. No banco do estádio, roda os ombros para trás, três vezes. Solta o pescoço para a direita, para a esquerda. A espera também se vive no corpo.", es: "Antes del partido de las tres, el cuerpo también necesita calentamiento — y no hablamos de los jugadores. En el banco del estadio, gira los hombros hacia atrás, tres veces. Suelta el cuello a la derecha, a la izquierda. La espera también se vive en el cuerpo." },
        { it: "Quando o estádio cantar, sente a vibração no peito e deixa-a subir e descer como uma onda. Palmas, pés no chão, voz na garganta: torcer é um desporto completo. Partilha o entusiasmo, mas bebe água a meio: o segundo tempo também é teu.", es: "Cuando el estadio cante, siente la vibración en el peito y déjala subir y bajar como una onda. Palmas, pies en el suelo, voz en la garganta: animar es un deporte completo. Comparte el entusiasmo, pero bebe agua a mitad: el segundo tiempo también es tuyo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["El calentamiento de los futbolistas profesionales", "Preparar el propio cuerpo para disfrutar del partido", "Las canciones de los aficionados"],
        answer: 1,
        why: "«O corpo antes do jogo» habla del cuerpo del espectador, no de los jugadores.",
      },
      sequence: {
        instr: "Ordena los pasos del aficionado consciente:",
        events: [
          "Rodas os ombros para trás três vezes",
          "Soltas o pescoço para os dois lados",
          "Sentes a vibração do estádio no peito",
          "Deixas a vibração subir e descer como uma onda",
          "Bebes água a meio do jogo",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "O jogo começa às três, mas o teu corpo começa antes. Roda os ombros para trás, devagar, três vezes. Solta o pescoço para a direita e para a esquerda. Quando o estádio cantar, sente a vibração no peito e deixa-a passar como uma onda. E a meio do jogo, bebe água: o segundo tempo também é teu.",
        questions: [
          { q: "Para onde rodas os ombros?", kind: "literal", options: ["Para trás", "Para a frente", "Para cima"], answer: 0, why: "«Roda os ombros para trás»." },
          { q: "Quantas vezes rodas os ombros?", kind: "literal", options: ["Três", "Dez", "Cem"], answer: 0, why: "«três vezes»." },
          { q: "Como é a vibração do estádio?", kind: "inferencial", options: ["Como uma onda que passa", "Como um trovão que assusta", "Como um motor que falha"], answer: 0, why: "«deixa-a passar como uma onda»." },
          { q: "Porque bebes água a meio do jogo?", kind: "inferencial", options: ["Porque o segundo tempo também é teu", "Porque o estádio é frio", "Porque o árbitro manda"], answer: 0, why: "«o segundo tempo também é teu»." },
        ],
      },
    },
  ],

  "pt-cu-a2-06": [
    {
      id: "md-pt-a2-06-1", theme: "meditazione",
      title: "O canto da casa", titleEs: "El rincón de la casa",
      minutes: 2,
      paragraphs: [
        { it: "Toda a casa nova precisa de um canto para respirar: uma cadeira, uma luz suave, um canto do quarto onde ninguém mora senão tu. Não precisa de almofadas caras nem de velas importadas — precisa de silêncio marcado na agenda.", es: "Toda casa nueva necesita un rincón para respirar: una silla, una luz suave, un rincón del cuarto donde nadie vive sino tú. No necesita cojines caros ni velas importadas — necesita silencio marcado en la agenda." },
        { it: "Vai a esse canto todos os dias, cinco minutos, à mesma hora. Sentas-te, respiras e deixas a casa respirar contigo. Ao fim de um mês, o canto deixa de ser um canto: passa a ser o teu lugar no mundo. As casas fazem-se assim, minuto a minuto.", es: "Ve a ese rincón todos los días, cinco minutos, a la misma hora. Te sientas, respiras y dejas que la casa respire contigo. Al cabo de un mes, el rincón deja de ser un rincón: pasa a ser tu lugar en el mundo. Las casas se hacen así, minuto a minuto." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Decoración de interiores barata", "Crear un rincón de meditación en la casa nueva", "Cómo organizar la mudanza"],
        answer: 1,
        why: "El rincón para respirar apunta a un espacio de silencio diario, no a decoración.",
      },
      quiz: [
        { q: "Do que precisa toda a casa nova?", kind: "literal", options: ["De um canto para respirar", "De uma televisão grande", "De um sofá novo"], answer: 0, why: "«Toda a casa nova precisa de um canto para respirar»." },
        { q: "O que se marca na agenda do canto?", kind: "inferencial", options: ["O silêncio, cinco minutos por dia", "As visitas da família", "O horário do correio"], answer: 0, why: "«precisa de silêncio marcado na agenda» + cinco minutos à mesma hora." },
        { q: "O que acontece ao fim de um mês?", kind: "critica", options: ["O canto passa a ser o teu lugar no mundo", "Mudas-te para outra casa", "Compras almofadas caras"], answer: 0, why: "«o canto deixa de ser um canto: passa a ser o teu lugar no mundo»." },
      ],
      vf: [
        { text: "O canto precisa de velas importadas.", value: false, why: "«Não precisa de almofadas caras nem de velas importadas»." },
        { text: "Vais ao canto todos os dias, à mesma hora.", value: true, why: "«todos os dias, cinco minutos, à mesma hora»." },
        { text: "As casas fazem-se minuto a minuto.", value: true, why: "Es la frase final del texto." },
      ],
    },
    {
      id: "md-pt-a2-06-2", theme: "qui e ora",
      title: "A casa vazia", titleEs: "La casa vacía",
      minutes: 2,
      paragraphs: [
        { it: "Ainda não há mobília: só tu, o eco dos passos e a luz da tarde no soalho. Senta-te no chão, mesmo no centro da sala. Uma casa vazia fala mais do que uma casa cheia: ouve-se o bairro, os pássaros, a própria respiração.", es: "Todavía no hay muebles: solo tú, el eco de los pasos y la luz de la tarde en el suelo. Siéntate en el suelo, justo en el centro del salón. Una casa vacía habla más que una casa llena: se oye el barrio, los pájaros, la propia respiración." },
        { it: "Amanhã chegam as caixas, os móveis, a confusão. Hoje, a casa é só espaço e possibilidade — como uma página em branco. Fica aí um pouco. Não é atraso na mudança: é a primeira memória do teu novo lar, e as primeiras memórias são as que ficam.", es: "Mañana llegan las cajas, los muebles, el caos. Hoy, la casa es solo espacio y posibilidad — como una página en blanco. Quédate ahí un rato. No es retraso en la mudanza: es el primer recuerdo de tu nuevo hogar, y los primeros recuerdos son los que quedan." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un inventario de muebles para el salón", "Vivir el momento de la casa aún vacía", "Cómo ahorrar en el alquiler"],
        answer: 1,
        why: "La casa sin mobília y la luz de la tarde apuntan a habitar el momento, no a los muebles.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Só tu, o eco dos passos e a luz da tarde.",
          "A casa vazia fala mais do que a casa cheia.",
          "A casa é como uma página em branco.",
          "As caixas de cartão custam dois euros cada.",
          "As primeiras memórias são as que ficam.",
        ],
        intruder: 3,
        why: "El precio de las cajas no aparece en el texto: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["As casas vazias são tristes", "A casa vazia é uma página em branco a aproveitar antes da mudança", "Os pássaros entram nas casas novas"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Sentas-te no chão, no centro da sala", "A casa vazia fala mais do que a casa cheia", "A primeira memória do novo lar fica"],
        distractors: ["Os móveis chegam amanhã de manhã cedo", "O soalho é de mármore italiano", "A renda custa mil euros"],
      },
    },
    {
      id: "md-pt-a2-06-3", theme: "relax mentale",
      title: "As paredes brancas", titleEs: "Las paredes blancas",
      minutes: 2,
      paragraphs: [
        { it: "Paredes brancas, quarto vazio, cabeça cheia: «falta tudo», «está nu», «vai custar muito». A mente odeia os espaços vazios — preenche-os logo com preocupações. Mas as paredes brancas não são um problema: são um descanso para os olhos.", es: "Paredes blancas, cuarto vacío, cabeza llena: «falta todo», «está pelado», «va a costar mucho». La mente odia los espacios vacíos — los llena enseguida de preocupaciones. Pero las paredes blancas no son un problema: son un descanso para los ojos." },
        { it: "Quando o pensamento «falta tudo» aparecer, olha-o como olharias uma nuvem: ali, mas a caminho. Depois volta às paredes, ao chão, ao silêncio. A casa nasce devagar, como tudo o que é verdadeiro. Não corras atrás dos móveis; deixa-os chegar.", es: "Cuando aparezca el pensamiento «falta todo», míralo como mirarías una nube: ahí, pero de camino. Después vuelve a las paredes, al suelo, al silencio. La casa nace despacio, como todo lo que es verdadero. No corras detrás de los muebles; deja que lleguen." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo pintar paredes de colores", "Tranquilizar la mente ante la casa vacía", "Los mejores muebles de Coimbra"],
        answer: 1,
        why: "Paredes blancas y cabeza llena de preocupaciones: el tema es calmar la mente.",
      },
      sequence: {
        instr: "Ordena los pasos del ejercicio:",
        events: [
          "Notas o pensamento «falta tudo»",
          "Olhas o pensamento como uma nuvem",
          "Voltas às paredes e ao silêncio",
          "Lembras que a casa nasce devagar",
          "Deixas os móveis chegar",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "O teu quarto novo tem paredes brancas e a tua cabeça tem pensamentos cheios: falta tudo, está nu, vai custar muito. Não corras atrás dos móveis. Olha cada pensamento como uma nuvem que passa. Depois volta ao silêncio do quarto. A casa nasce devagar, como tudo o que é verdadeiro.",
        questions: [
          { q: "Como são as paredes do quarto novo?", kind: "literal", options: ["Brancas", "Azuis", "Verdes"], answer: 0, why: "«tem paredes brancas»." },
          { q: "Como olhas cada pensamento?", kind: "literal", options: ["Como uma nuvem que passa", "Como um inimigo", "Como uma conta"], answer: 0, why: "«como uma nuvem que passa»." },
          { q: "Como nascem as casas, segundo o áudio?", kind: "inferencial", options: ["Devagar, como tudo o que é verdadeiro", "Da noite para o dia", "Por sorte"], answer: 0, why: "«A casa nasce devagar, como tudo o que é verdadeiro»." },
          { q: "O que fazes com os móveis?", kind: "inferencial", options: ["Deixas-os chegar", "Compras todos hoje", "Rejeitas-os todos"], answer: 0, why: "«deixa-os chegar»." },
        ],
      },
    },
  ],

  "pt-cu-a2-07": [
    {
      id: "md-pt-a2-07-1", theme: "qui e ora",
      title: "O corpo fala", titleEs: "El cuerpo habla",
      minutes: 2,
      paragraphs: [
        { it: "A garganta arranha há três dias e tu continuas a falar, a trabalhar, a correr. O corpo fala baixinho primeiro: uma dor, um cansaço, uma tosse. Se ninguém ouve, fala mais alto. Escutar cedo é poupar febres.", es: "La garganta rasca desde hace tres días y tú sigues hablando, trabajando, corriendo. El cuerpo habla bajito primero: un dolor, un cansancio, una tos. Si nadie lo oye, habla más alto. Escuchar pronto ahorra fiebres." },
        { it: "Agora, fecha os olhos e pergunta: onde estás tu a pedir descanso? Talvez a garganta, talvez os ombros, talvez o sono. O corpo não é adversário: é o mensageiro mais fiel que tens. Trata-o como tal.", es: "Ahora, cierra los ojos y pregúntate: ¿dónde estás pidiendo descanso? Quizá la garganta, quizá los hombros, quizá el sueño. El cuerpo no es adversario: es el mensajero más fiel que tienes. Trátalo como tal." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un anuncio de pastillas para la garganta", "Escuchar las señales del cuerpo antes de que griten", "Cómo hablar más bajo"],
        answer: 1,
        why: "La garganta que rasca y el cuerpo que habla apuntan a escuchar las señales, no a remedios.",
      },
      quiz: [
        { q: "Como fala o corpo primeiro?", kind: "literal", options: ["Baixinho: uma dor, um cansaço", "Com mensagens no telemóvel", "Aos gritos"], answer: 0, why: "«O corpo fala baixinho primeiro»." },
        { q: "O que perguntas de olhos fechados?", kind: "inferencial", options: ["Onde o corpo pede descanso", "Que horas são", "Onde está o remédio"], answer: 0, why: "«pergunta: onde estás tu a pedir descanso?»." },
        { q: "O que é o corpo, segundo o texto?", kind: "critica", options: ["O mensageiro mais fiel que tens", "Uma máquina sem sentimentos", "Um adversário a vencer"], answer: 0, why: "«é o mensageiro mais fiel que tens»." },
      ],
      vf: [
        { text: "Se ninguém ouve, o corpo fala mais alto.", value: true, why: "«Se ninguém ouve, fala mais alto»." },
        { text: "O corpo é um adversário.", value: false, why: "«O corpo não é adversário: é o mensageiro mais fiel»." },
        { text: "Escutar cedo é poupar febres.", value: true, why: "Es la frase que cierra el primer párrafo." },
      ],
    },
    {
      id: "md-pt-a2-07-2", theme: "relax fisico",
      title: "A garganta e o sossego", titleEs: "La garganta y la calma",
      minutes: 2,
      paragraphs: [
        { it: "Quando a garganta dói, o corpo pede menos voz e mais calma. Experimenta: fala baixo dez minutos, como quem conta um segredo. Sente como o pescoço descansa quando a voz desce. O silêncio também é um remédio antigo.", es: "Cuando la garganta duele, el cuerpo pide menos voz y más calma. Prueba: habla bajo diez minutos, como quien cuenta un secreto. Siente cómo el cuello descansa cuando la voz baja. El silencio también es un remedio antiguo." },
        { it: "Agora deixa cair os ombros e estica o pescoço para o lado direito, devagar, contando até cinco. Depois para o esquerdo. A garganta agradece cada gesto suave: menos telefone, mais chá, mais sono. A cura gosta de casas tranquilas.", es: "Ahora deja caer los hombros y estira el cuello hacia el lado derecho, despacio, contando hasta cinco. Después hacia el izquierdo. La garganta agradece cada gesto suave: menos teléfono, más té, más sueño. La curación gusta de casas tranquilas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Ejercicios de canto profesional", "Suavizar voz, cuello y hombros cuando duele la garganta", "Recetas de té portugués"],
        answer: 1,
        why: "La garganta que duele pide menos voz y gestos suaves, no canto ni recetas.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Falas baixo, como quem conta um segredo.",
          "O pescoço descansa quando a voz desce.",
          "O silêncio é um remédio antigo.",
          "Os hospitais de Coimbra são famosos.",
          "A cura gosta de casas tranquilas.",
        ],
        intruder: 3,
        why: "Los hospitales de Coimbra no aparecen en el texto: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Falar alto cura a garganta", "Menos voz, gestos suaves e sossego ajudam a curar", "O chá é o único remédio"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Falas baixo dez minutos", "O pescoço descansa quando a voz desce", "A cura gosta de casas tranquilas"],
        distractors: ["O médico chega amanhã de manhã", "A garganta dói desde terça", "O chá é de camomila"],
      },
    },
    {
      id: "md-pt-a2-07-3", theme: "spiritualità",
      title: "Cuidar é uma prática", titleEs: "Cuidar es una práctica",
      minutes: 2,
      paragraphs: [
        { it: "Na sala de espera, uma senhora de idade pergunta onde é a consulta. Acompanhas-a até à porta certa. Foi um minuto teu — e uma ponte entre dois desconhecidos. Cuidar de outros é a prática mais antiga do mundo.", es: "En la sala de espera, una señora mayor pregunta dónde es la consulta. La acompañas hasta la puerta correcta. Fue un minuto tuyo — y un puente entre dos desconocidos. Cuidar a otros es la práctica más antigua del mundo." },
        { it: "Quem cuida também precisa de cuidado: descansa, come a sopa, aceita ajuda. Não és um herói de filme; és um humano que dá e recebe. No fim do dia, põe a mão no peito e agradece: estiveste vivo para os outros hoje. Isso chega.", es: "Quien cuida también necesita cuidado: descansa, cómete la sopa, acepta ayuda. No eres un héroe de película; eres un humano que da y recibe. Al final del día, pon la mano en el pecho y agradece: hoy estuviste vivo para los demás. Eso basta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los horarios del centro de salud", "Ayudar a otros y cuidarse a uno mismo como práctica espiritual", "Cómo pedir cita por teléfono"],
        answer: 1,
        why: "Acompañar a la señora y cuidar del que cuida apuntan a la práctica de cuidar.",
      },
      sequence: {
        instr: "Ordena los pasos:",
        events: [
          "Uma senhora pergunta onde é a consulta",
          "Acompanhas-a até à porta certa",
          "Descansas e comes a sopa",
          "Aceitas ajuda quando precisas",
          "Agradeces com a mão no peito",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "Cuidar de outros é a prática mais antiga do mundo. Hoje, uma senhora perguntou o caminho e tu acompanhaste-a. Foi um minuto teu e uma ponte entre dois desconhecidos. Lembra-te: quem cuida também precisa de cuidado. Descansa, come a sopa, aceita ajuda. No fim do dia, põe a mão no peito e agradece.",
        questions: [
          { q: "O que pergunta a senhora?", kind: "literal", options: ["Onde é a consulta", "Que horas são", "Onde fica o autocarro"], answer: 0, why: "«uma senhora perguntou o caminho» até à consulta." },
          { q: "O que é o minuto teu, segundo o áudio?", kind: "inferencial", options: ["Uma ponte entre dois desconhecidos", "Uma perda de tempo", "Uma obrigação"], answer: 0, why: "«Foi um minuto teu e uma ponte entre dois desconhecidos»." },
          { q: "Do que precisa quem cuida?", kind: "literal", options: ["Também de cuidado", "Só de trabalho", "Só de dinheiro"], answer: 0, why: "«quem cuida também precisa de cuidado»." },
          { q: "Como agradeces no fim do dia?", kind: "literal", options: ["Com a mão no peito", "Com um bolo", "Com uma mensagem"], answer: 0, why: "«põe a mão no peito e agradece»." },
        ],
      },
    },
  ],

  "pt-cu-a2-08": [
    {
      id: "md-pt-a2-08-1", theme: "relax fisico",
      title: "Comer devagar", titleEs: "Comer despacio",
      minutes: 2,
      paragraphs: [
        { it: "Na tasca, tudo chega ao mesmo tempo: o pão, a fome, a conversa. Antes do primeiro garfo, pousa as mãos na mesa e alonga a coluna, como um gato preguiçoso. O estômago agradece: a digestão começa na postura.", es: "En la tasca, todo llega a la vez: el pan, el hambre, la conversación. Antes del primer tenedor, apoya las manos en la mesa y estira la columna, como un gato perezoso. El estómago lo agradece: la digestión empieza en la postura." },
        { it: "Mastiga devagar, conta vinte mastigações se precisares. Entre o prato e a sobremesa, espera. O corpo precisa de vinte minutos para saber que está satisfeito; quem come devagar come menos e goza o dobro.", es: "Mastica despacio, cuenta veinte masticadas si lo necesitas. Entre el plato y el postre, espera. El cuerpo necesita veinte minutos para saber que está satisfecho; quien come despacio come menos y disfruta el doble." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Las mejores tascas de Lisboa", "La postura y el ritmo lento al comer", "Recetas de bacalao rápido"],
        answer: 1,
        why: "El primer tenedor y el gato perezoso apuntan a la postura y al ritmo, no a restaurantes ni recetas.",
      },
      quiz: [
        { q: "O que fazes antes do primeiro garfo?", kind: "literal", options: ["Pousas as mãos na mesa e alongas a coluna", "Bebes vinho depressa", "Chamas o empregado"], answer: 0, why: "«pousa as mãos na mesa e alonga a coluna»." },
        { q: "Onde começa a digestão, segundo o texto?", kind: "inferencial", options: ["Na postura", "No café", "Na conta"], answer: 0, why: "«a digestão começa na postura»." },
        { q: "Quanto tempo precisa o corpo para saber que está satisfeito?", kind: "literal", options: ["Vinte minutos", "Dois minutos", "Duas horas"], answer: 0, why: "«O corpo precisa de vinte minutos»." },
      ],
      vf: [
        { text: "Quem come devagar come menos e goza o dobro.", value: true, why: "Es la frase final del texto." },
        { text: "Deves contar vinte mastigações se precisares.", value: true, why: "«conta vinte mastigações se precisares»." },
        { text: "A digestão começa no café depois do almoço.", value: false, why: "Empieza na postura." },
      ],
    },
    {
      id: "md-pt-a2-08-2", theme: "relax mentale",
      title: "A mesa sem pressa", titleEs: "La mesa sin prisa",
      minutes: 2,
      paragraphs: [
        { it: "Ao almoço de terça, a cabeça ainda está no escritório: nos e-mails, nas reuniões, nas contas. O prato esfria enquanto o pensamento corre. Para. Olha o prato: as cores, o vapor, o cheiro. Um almoço com atenção vale uma soneca.", es: "En el almuerzo del martes, la cabeza sigue en la oficina: en los correos, en las reuniones, en las cuentas. El plato se enfría mientras el pensamiento corre. Para. Mira el plato: los colores, el vapor, el aroma. Un almuerzo con atención vale una siesta." },
        { it: "A mesa é um lugar de treino: cada garfada é uma oportunidade para voltar. Quando a mente fugir para o escritório, traz-a de volta pelo cheiro da sopa. Não é preciso comer em silêncio total — é preciso comer onde estás.", es: "La mesa es un lugar de entrenamiento: cada tenedorada es una oportunidad para volver. Cuando la mente huya hacia la oficina, tráela de vuelta por el olor de la sopa. No hace falta comer en silencio total — hace falta comer donde estás." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo organizar la pausa del trabajo", "Volver al presente en el almuerzo de entresemana", "Recetas de sopa para la oficina"],
        answer: 1,
        why: "El plato que se enfría mientras la cabeza trabaja apunta a volver al presente en la mesa.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "O prato esfria enquanto o pensamento corre.",
          "Olha as cores, o vapor e o cheiro.",
          "Cada garfada é uma oportunidade para voltar.",
          "Os talheres de prata são caros.",
          "É preciso comer onde estás.",
        ],
        intruder: 3,
        why: "Los cubiertos de plata no aparecen en el texto: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Os e-mails são mais importantes que o almoço", "Cada garfada é uma oportunidade para voltar ao presente", "A sopa é o melhor prato de inverno"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["O prato esfria enquanto o pensamento corre", "Olhas as cores, o vapor e o cheiro", "Traz a mente de volta pelo cheiro da sopa"],
        distractors: ["O almoço dura dez minutos", "O escritório fica na Baixa", "A sopa é de legumes"],
      },
    },
    {
      id: "md-pt-a2-08-3", theme: "meditazione",
      title: "O sabor do pão", titleEs: "El sabor del pan",
      minutes: 2,
      paragraphs: [
        { it: "O couvert chega: pão, azeite, manteiga. Escolhe o pão e come um bocado só — devagar, sem nada na boca a competir. O trigo tem história: sol, chuva, forno. Numa dentada atenta cabe um campo inteiro.", es: "Llega el couvert: pan, aceite, mantequilla. Elige el pan y come un solo bocado — despacio, sin nada en la boca que compita. El trigo tiene historia: sol, lluvia, horno. En un bocado atento cabe un campo entero." },
        { it: "Esta é a meditação do primeiro bocado: uma coisa de cada vez, sem pressa e sem julgamento. Quem saboreia o primeiro bocado come melhor o resto do almoço — porque começou por acordar a língua e a atenção juntas.", es: "Esta es la meditación del primer bocado: una cosa cada vez, sin prisa y sin juicio. Quien saborea el primer bocado come mejor el resto del almuerzo — porque empezó despertando la lengua y la atención juntas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La historia de la agricultura portuguesa", "Comer el primer bocado de pan con plena atención", "Los diferentes tipos de aceite"],
        answer: 1,
        why: "El bocado solo y el trigo con historia apuntan a la atención al primer sabor.",
      },
      sequence: {
        instr: "Ordena los pasos:",
        events: [
          "Chega o couvert à mesa",
          "Escolhes o pão",
          "Comes um bocado devagar",
          "Sentes o trigo, o sol e o forno",
          "Continuas o almoço com a atenção acordada",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "O couvert chegou: pão, azeite e manteiga. Pausa. Escolhe um bocado de pão e come-o devagar, sem pressa, sem mais nada na boca. Sente o trigo: houve sol, houve chuva, houve forno. Numa dentada atenta cabe um campo inteiro. Depois continua o almoço, mas começa sempre pelo primeiro bocado.",
        questions: [
          { q: "O que chega primeiro à mesa?", kind: "literal", options: ["O couvert", "O prato do dia", "A sobremesa"], answer: 0, why: "«O couvert chegou»." },
          { q: "Como comes o primeiro bocado?", kind: "literal", options: ["Devagar, sem mais nada na boca", "Depressa, com fome", "Com azeite e manteiga juntos"], answer: 0, why: "«come-o devagar, sem pressa, sem mais nada na boca»." },
          { q: "O que cabe numa dentada atenta?", kind: "inferencial", options: ["Um campo inteiro", "Um oceano", "Uma cidade"], answer: 0, why: "«cabe um campo inteiro»." },
          { q: "Pelo que se começa sempre, segundo o áudio?", kind: "literal", options: ["Pelo primeiro bocado", "Pelo café", "Pela conta"], answer: 0, why: "«começa sempre pelo primeiro bocado»." },
        ],
      },
    },
  ],
  "pt-cu-a2-09": [
    {
      id: "md-pt-a2-09-1", theme: "spiritualità",
      title: "Cada começo é pequeno", titleEs: "Cada comienzo es pequeño",
      minutes: 2,
      paragraphs: [
        { it: "O primeiro emprego não é o emprego dos sonhos — é o primeiro degrau. Todo o mestre já foi aprendiz. O começo pequeno não é vergonha: é a tradição de todas as coisas grandes, das livrarias de esquina às pontes mais famosas.", es: "El primer empleo no es el empleo de los sueños — es el primer escalón. Todo maestro fue aprendiz. El comienzo pequeño no es vergüenza: es la tradición de todas las cosas grandes, de las librerías de esquina a los puentes más famosos." },
        { it: "Quando o trabalho for repetitivo — arrumar livros, atender clientes, contar caixa — lembra-te: as mãos que repetem ficam sábias. Espírito não é só rezar: é fazer bem o que está à frente, com atenção e com cuidado.", es: "Cuando el trabajo sea repetitivo — ordenar libros, atender clientes, contar caja — recuerda: las manos que repiten se vuelven sabias. El espíritu no es solo rezar: es hacer bien lo que está delante, con atención y con cuidado." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo encontrar el empleo perfecto", "El valor de los comienzos pequeños y del trabajo bien hecho", "Los salarios de las librerías"],
        answer: 1,
        why: "«Cada começo é pequeno» apunta al valor del primer escalón, no al empleo ideal.",
      },
      quiz: [
        { q: "O que é o primeiro emprego, segundo o texto?", kind: "literal", options: ["O primeiro degrau", "O emprego dos sonhos", "Uma perda de tempo"], answer: 0, why: "«é o primeiro degrau»." },
        { q: "O que acontece às mãos que repetem?", kind: "inferencial", options: ["Ficam sábias", "Ficam cansadas para sempre", "Esquecem tudo"], answer: 0, why: "«as mãos que repetem ficam sábias»." },
        { q: "O que é ter espírito, segundo o texto?", kind: "critica", options: ["Fazer bem o que está à frente, com atenção", "Só rezar todos os dias", "Ganhar muito dinheiro"], answer: 0, why: "«Espírito não é só rezar: é fazer bem o que está à frente»." },
      ],
      vf: [
        { text: "Todo o mestre já foi aprendiz.", value: true, why: "«Todo o mestre já foi aprendiz»." },
        { text: "O começo pequeno é uma vergonha.", value: false, why: "«O começo pequeno não é vergonha»." },
        { text: "O texto fala de arrumar livros e atender clientes.", value: true, why: "«arrumar livros, atender clientes, contar caixa»." },
      ],
    },
    {
      id: "md-pt-a2-09-2", theme: "meditazione",
      title: "Uma respiração antes da entrevista", titleEs: "Una respiración antes de la entrevista",
      minutes: 2,
      paragraphs: [
        { it: "Cinco minutos antes da entrevista, no passeio em frente da livraria: três respirações. Inspira devagar, solta mais devagar ainda. O nervosismo não desaparece — mas desce de degrau, como quem acalma uma escada.", es: "Cinco minutos antes de la entrevista, en la acera frente a la librería: tres respiraciones. Inspira despacio, suelta todavía más despacio. Los nervios no desaparecen — pero bajan un escalón, como quien calma una escalera." },
        { it: "Depois lembra-te: a entrevista é uma conversa, não um exame. Do outro lado da mesa está um ser humano que também já teve medo. Diz a verdade, com calma: «Ainda não trabalhei em Portugal, mas aprendo depressa.» A honestidade tranquila é a melhor apresentação.", es: "Después recuerda: la entrevista es una conversación, no un examen. Al otro lado de la mesa hay un ser humano que también tuvo miedo. Di la verdad, con calma: «Todavía no he trabajado en Portugal, pero aprendo rápido.» La honestidad tranquila es la mejor presentación." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Preguntas típicas de las entrevistas", "Calmar los nervios con la respiración antes de una entrevista", "Cómo vestirse para una entrevista"],
        answer: 1,
        why: "«Uma respiração antes» apunta a calmar el cuerpo, no a preguntas ni a ropa.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Faz três respirações no passeio.",
          "O nervosismo desce de degrau.",
          "A entrevista é uma conversa, não um exame.",
          "O ordenado é de oitocentos euros.",
          "A honestidade tranquila é a melhor apresentação.",
        ],
        intruder: 3,
        why: "El salario de ochocientos euros no aparece en el texto: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["O nervosismo é impossível de controlar", "Três respirações e a verdade tranquila valem mais que decorar respostas", "As entrevistas são sempre injustas"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Inspiras devagar e soltas mais devagar", "A entrevista é uma conversa, não um exame", "Do outro lado está alguém que também já teve medo"],
        distractors: ["A entrevista é na terça-feira", "A livraria fica em Braga", "A resposta decorada é a melhor"],
      },
    },
    {
      id: "md-pt-a2-09-3", theme: "qui e ora",
      title: "Uma tarefa de cada vez", titleEs: "Una tarea a la vez",
      minutes: 2,
      paragraphs: [
        { it: "Primeiro dia na livraria: arrumar livros, atender a senhora, responder ao telefone, encontrar a chave da caixa. A cabeça quer fazer tudo ao mesmo tempo e acaba por não fazer nada. Escolhe uma coisa: a pilha de livros, só ela.", es: "Primer día en la librería: ordenar libros, atender a la señora, responder al teléfono, encontrar la llave de la caja. La cabeza quiere hacerlo todo a la vez y acaba no haciendo nada. Elige una cosa: la pila de libros, solo ella." },
        { it: "Um livro de cada vez, um lugar de cada vez. Quando o telefone tocar, deixa a pilha — o telefone é agora. Quando desligares, volta à pilha — a pilha também é agora. Trabalhar assim é mais lento no relógio e mais rápido na vida: repara no fim do dia.", es: "Un libro cada vez, un lugar cada vez. Cuando suene el teléfono, deja la pila — el teléfono es ahora. Cuando cuelgues, vuelve a la pila — la pila también es ahora. Trabajar así es más lento en el reloj y más rápido en la vida: fíjate al final del día." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de multitarea", "La atención de una sola tarea en el primer día de trabajo", "Cómo arreglar teléfonos"],
        answer: 1,
        why: "«Uma tarefa de cada vez» apunta a la atención plena, no a hacer todo a la vez.",
      },
      sequence: {
        instr: "Ordena los pasos:",
        events: [
          "Escolhes uma só tarefa: a pilha de livros",
          "Arrumas um livro de cada vez",
          "O telefone toca e deixas a pilha",
          "Atendes o telefone com atenção",
          "Desligas e voltas à pilha",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "Primeiro dia de trabalho: livros, telefone, clientes, chaves. A cabeça quer tudo ao mesmo tempo. Devagar. Escolhe uma tarefa só: a pilha de livros. Um livro, um lugar. Se o telefone tocar, deixa a pilha e atende — o telefone é agora. Quando desligares, volta aos livros. Uma coisa de cada vez: é mais lento no relógio e mais rápido na vida.",
        questions: [
          { q: "O que escolhes primeiro?", kind: "literal", options: ["A pilha de livros", "O telefone", "As chaves"], answer: 0, why: "«Escolhe uma tarefa só: a pilha de livros»." },
          { q: "O que fazes quando o telefone toca?", kind: "literal", options: ["Deixas a pilha e atendes", "Ignoras o telefone", "Desligas o telefone"], answer: 0, why: "«deixa a pilha e atende»." },
          { q: "O que é «agora», segundo o áudio?", kind: "inferencial", options: ["A tarefa que estás a fazer neste momento", "Só o amanhã", "Só as férias"], answer: 0, why: "«o telefone é agora» y también la pila al volver: el momento presente." },
          { q: "Como é trabalhar assim no relógio e na vida?", kind: "inferencial", options: ["Mais lento no relógio, mais rápido na vida", "Lento em tudo", "Rápido em tudo"], answer: 0, why: "«é mais lento no relógio e mais rápido na vida»." },
        ],
      },
    },
  ],

  "pt-cu-a2-10": [
    {
      id: "md-pt-a2-10-1", theme: "relax mentale",
      title: "O tempo lá dentro", titleEs: "El tiempo allá dentro",
      minutes: 2,
      paragraphs: [
        { it: "Lá fora, o tempo muda: sol, nuvens, chuva, sol outra vez. Lá dentro também. As emoções são o tempo interior: há manhãs de névoa, tardes de tempestade, noites claras de estrelas. Não escolhes o céu; escolhes como o olhas.", es: "Afuera, el tiempo cambia: sol, nubes, lluvia, sol otra vez. Adentro también. Las emociones son el clima interior: hay mañanas de niebla, tardes de tormenta, noches claras de estrellas. No eliges el cielo; eliges cómo lo miras." },
        { it: "Quando a tristeza chegar como chuva do norte, não a condenes: diz «hoje está triste lá dentro» e continua o teu dia com guarda-chuva. As emoções, como o tempo do Porto, passam. O céu de fundo — tu — fica sempre.", es: "Cuando llegue la tristeza como lluvia del norte, no la condenes: di «hoy está triste allá dentro» y sigue tu día con paraguas. Las emociones, como el tiempo de Oporto, pasan. El cielo de fondo — tú — siempre queda." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["El pronóstico del tiempo de Oporto", "Las emociones son como el clima interior: mirarlas sin condenarlas", "Cómo protegerse de la lluvia"],
        answer: 1,
        why: "«O tempo lá dentro» convierte el clima en metáfora emocional.",
      },
      quiz: [
        { q: "O que são as emoções, segundo o texto?", kind: "literal", options: ["O tempo interior", "Erros a corrigir", "Doenças"], answer: 0, why: "«As emoções são o tempo interior»." },
        { q: "O que dizes quando a tristeza chega?", kind: "inferencial", options: ["«Hoje está triste lá dentro» — e continuas o dia", "«Sou uma pessoa triste»", "Nada, foges de casa"], answer: 0, why: "«diz «hoje está triste lá dentro» e continua o teu dia com guarda-chuva»." },
        { q: "O que fica sempre?", kind: "critica", options: ["O céu de fundo — tu", "A chuva", "As nuvens"], answer: 0, why: "«O céu de fundo — tu — fica sempre»." },
      ],
      vf: [
        { text: "Não escolhes o céu, mas escolhes como o olhas.", value: true, why: "Es la frase que cierra el primer párrafo." },
        { text: "As emoções, como o tempo do Porto, nunca passam.", value: false, why: "Al revés: «As emoções, como o tempo do Porto, passam»." },
        { text: "Há manhãs de névoa lá dentro.", value: true, why: "«há manhãs de névoa, tardes de tempestade»." },
      ],
    },
    {
      id: "md-pt-a2-10-2", theme: "qui e ora",
      title: "O sol de agora", titleEs: "El sol de ahora",
      minutes: 2,
      paragraphs: [
        { it: "No miradouro, o sol abre entre duas nuvens e ninguém olha: estão todos com o nariz no telemóvel. Ergue o rosto. Sente o calor na pele do rosto, o vento parado, o brilho nas pedras. O sol de agora não se guarda para depois.", es: "En el mirador, el sol se abre entre dos nubes y nadie mira: todos están con la nariz en el móvil. Alza la cara. Siente el calor en la piel del rostro, el viento quieto, el brillo en las piedras. El sol de ahora no se guarda para después." },
        { it: "Os momentos de sol — lá fora e cá dentro — são curtos por natureza. Não precisam de fotografia: precisam de testemunha. Fica aí, olhos fechados, dois minutos. O corpo sabe há milhões de anos que o sol é um presente; tu só estavas distraído.", es: "Los momentos de sol — afuera y adentro — son cortos por naturaleza. No necesitan fotografía: necesitan testigo. Quédate ahí, ojos cerrados, dos minutos. El cuerpo sabe desde hace millones de años que el sol es un regalo; tú solo estabas distraído." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo tomar buenas fotos del atardecer", "Disfrutar del sol del momento en el mirador", "Los mejores miradores de Portugal"],
        answer: 1,
        why: "El sol que se abre y nadie mira apunta a la presencia, no a la fotografía.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "O sol abre entre duas nuvens.",
          "Ninguém olha: estão com o nariz no telemóvel.",
          "Os momentos de sol são curtos por natureza.",
          "As câmaras fotográficas custam trezentos euros.",
          "O sol de agora não se guarda para depois.",
        ],
        intruder: 3,
        why: "El precio de las cámaras no aparece en el texto: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Os telemóveis estragam os miradouros", "O sol de agora pede testemunho, não fotografia", "As nuvens são perigosas"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Ninguém olha: estão com o nariz no telemóvel", "Sentes o calor na pele do rosto", "Ficas dois minutos de olhos fechados"],
        distractors: ["O miradouro fica em Lisboa", "O sol aparece às cinco", "A fotografia é proibida"],
      },
    },
    {
      id: "md-pt-a2-10-3", theme: "relax fisico",
      title: "O vento no rosto", titleEs: "El viento en la cara",
      minutes: 2,
      paragraphs: [
        { it: "O vento do Atlântico chega ao miradouro com cheiro a maresia. Em vez de o aguentar de cara fechada, abre os braços e recebe-o. Sente onde toca primeiro: a testa? As orelhas? O cabelo? O vento é uma massagem que o mar manda.", es: "El viento del Atlántico llega al mirador con olor a maresía. En vez de aguantarlo con la cara cerrada, abre los brazos y recíbelo. Siente dónde toca primero: ¿la frente? ¿Las orejas? ¿El pelo? El viento es un masaje que el mar envía." },
        { it: "Deixa os ombros soltos e o corpo como uma vela ao vento: firme no chão, macio por fora. Respira fundo três vezes. O vento viajou mil quilómetros para te tocar: é uma forma antiga de o mundo dizer que existes.", es: "Deja los hombros sueltos y el cuerpo como una vela al viento: firme en el suelo, blando por fuera. Respira hondo tres veces. El viento viajó mil kilómetros para tocarte: es una forma antigua que tiene el mundo de decir que existes." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La energía eólica del Atlántico", "Sentir el viento del mar como masaje y presencia", "Cómo abrigarse en el mirador"],
        answer: 1,
        why: "El viento como masaje del mar apunta a la sensación física consciente.",
      },
      sequence: {
        instr: "Ordena los pasos:",
        events: [
          "O vento chega ao miradouro",
          "Abres os braços e recebes o vento",
          "Sentes onde ele toca primeiro",
          "Deixas os ombros soltos como uma vela",
          "Respiras fundo três vezes",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "O vento do Atlântico chegou ao miradouro. Não feches a cara. Abre os braços e recebe-o. Sente onde toca primeiro: a testa, as orelhas, o cabelo. Deixa os ombros soltos, o corpo como uma vela: firme no chão, macio por fora. Respira fundo três vezes. O vento viajou mil quilómetros para te tocar.",
        questions: [
          { q: "Que cheiro traz o vento do Atlântico?", kind: "literal", options: ["A maresia", "A pastelaria", "A gasolina"], answer: 0, why: "El texto abre con el olor a maresía del viento." },
          { q: "Como recebes o vento?", kind: "literal", options: ["De braços abertos", "De costas", "De cara fechada"], answer: 0, why: "«Abre os braços e recebe-o»." },
          { q: "Como é o corpo como uma vela?", kind: "inferencial", options: ["Firme no chão, macio por fora", "Duro como pedra", "Leve como uma folha ao vento"], answer: 0, why: "«firme no chão, macio por fora»." },
          { q: "Quanto viajou o vento para te tocar?", kind: "literal", options: ["Mil quilómetros", "Cem metros", "Dez mil anos"], answer: 0, why: "«viajou mil quilómetros»." },
        ],
      },
    },
  ],

  "pt-cu-a2-11": [
    {
      id: "md-pt-a2-11-1", theme: "meditazione",
      title: "Ajudar sem peso", titleEs: "Ayudar sin peso",
      minutes: 2,
      paragraphs: [
        { it: "Ajudar numa mudança pode ser um peso ou uma prática: decides tu. Antes de pegar na primeira caixa, uma respiração. Sente as mãos, os braços, o chão. Depois pega — devagar, com atenção. A caixa pesa o mesmo; em ti pesa menos.", es: "Ayudar en una mudanza puede ser un peso o una práctica: tú decides. Antes de coger la primera caja, una respiración. Siente las manos, los brazos, el suelo. Después coge — despacio, con atención. La caja pesa lo mismo; en ti pesa menos." },
        { it: "Entre caixa e caixa, bebe água, alonga as costas, ri com os amigos. Quem ajuda com presença não fica vazio: no fim do dia, o corpo cansa e o coração enche. Ajudar descansado é a melhor forma de ajudar duas vezes.", es: "Entre caja y caja, bebe agua, estira la espalda, ríe con los amigos. Quien ayuda con presencia no queda vacío: al final del día, el cuerpo cansa y el corazón se llena. Ayudar descansado es la mejor forma de ayudar dos veces." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo levantar cajas pesadas sin lesionarse", "Convertir la ayuda en la mudanza en una práctica consciente", "Los precios de las empresas de mudanzas"],
        answer: 1,
        why: "«Ajudar sem peso» apunta a la actitud con la que se ayuda, no a la técnica.",
      },
      quiz: [
        { q: "O que fazes antes de pegar na primeira caixa?", kind: "literal", options: ["Uma respiração", "Uma corrida", "Um café"], answer: 0, why: "«Antes de pegar na primeira caixa, uma respiração»." },
        { q: "O que acontece com o peso quando ajudas com atenção?", kind: "inferencial", options: ["A caixa pesa o mesmo, mas em ti pesa menos", "O peso desaparece", "O peso duplica"], answer: 0, why: "«A caixa pesa o mesmo; em ti pesa menos»." },
        { q: "Como fica quem ajuda com presença?", kind: "critica", options: ["O corpo cansa e o coração enche", "Fica zangado", "Fica sem nada"], answer: 0, why: "«o corpo cansa e o coração enche»." },
      ],
      vf: [
        { text: "Ajudar pode ser um peso ou uma prática.", value: true, why: "«pode ser um peso ou uma prática: decides tu»." },
        { text: "Entre caixa e caixa, deves beber água e alongar as costas.", value: true, why: "«Entre caixa e caixa, bebe água, alonga as costas»." },
        { text: "Quem ajuda com presença fica cansado e vazio.", value: false, why: "Queda lleno: «o corpo cansa e o coração enche»." },
      ],
    },
    {
      id: "md-pt-a2-11-2", theme: "relax fisico",
      title: "Mover o sofá, respirar", titleEs: "Mover el sofá, respirar",
      minutes: 2,
      paragraphs: [
        { it: "O sofá é o momento mais pesado da mudança — e o mais espiritual. Dobra os joelhos, endireita as costas e solta o ar ao levantar: o corpo sabe, ouve-o. Empurra com as pernas, não com a coluna.", es: "El sofá es el momento más pesado de la mudanza — y el más espiritual. Dobla las rodillas, endereza la espalda y suelta el aire al levantar: el cuerpo sabe, escúchalo. Empuja con las piernas, no con la columna." },
        { it: "A cada degrau da escada, um passo e uma respiração. Quando o vizinho disser «aguenta aí», aguenta — mas respira. O sofá sobe a escada devagar, como sobem as coisas que duram. No fim, estica as costas no chão da casa nova: cinco minutos, e a casa já é tua.", es: "En cada peldaño de la escalera, un paso y una respiración. Cuando el vecino diga «aguanta ahí», aguanta — pero respira. El sofá sube la escalera despacio, como suben las cosas que duran. Al final, estira la espalda en el suelo de la casa nueva: cinco minutos, y la casa ya es tuya." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Manual de fisioterapia avanzada", "Respirar y usar el cuerpo bien al subir muebles", "Los sofás más cómodos del mercado"],
        answer: 1,
        why: "Doblar rodillas, soltar el aire y subir despacio: el cuerpo en la mudanza.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Dobras os joelhos e endireitas as costas.",
          "Empurram com as pernas, não com a coluna.",
          "Cada degrau pede um passo e uma respiração.",
          "Os sofás de pele são os mais caros.",
          "No fim, esticas as costas no chão.",
        ],
        intruder: 3,
        why: "Los sofás de piel no aparecen en el texto: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["O sofá é impossível de subir", "Cada degrau pede um passo e uma respiração", "As mudanças devem ser feitas por empresas"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Dobras os joelhos e endireitas as costas", "Empurram com as pernas, não com a coluna", "No fim, esticas as costas no chão"],
        distractors: ["O sofá custa mil euros", "A escada tem vinte degraus", "O vizinho é fisioterapeuta"],
      },
    },
    {
      id: "md-pt-a2-11-3", theme: "relax mentale",
      title: "Pedir é humano", titleEs: "Pedir es humano",
      minutes: 2,
      paragraphs: [
        { it: "Há quem prefira carregar o mundo a pedir um favor. Mas pedir não é fraqueza: é confiança. Quando dizes «podes guardar-me as chaves?», estás a dizer «acredito em ti». O medo de incomodar constrói muros; os pedidos constroem pontes.", es: "Hay quien prefiere cargar el mundo antes que pedir un favor. Pero pedir no es debilidad: es confianza. Cuando dices «¿puedes guardarme las llaves?», estás diciendo «creo en ti». El miedo a molestar construye muros; los pedidos construyen puentes." },
        { it: "E quando pedires, pede claro e sem desculpas longas: «Podes ficar com o gato no sábado? Obrigado, eu devolvo o favor.» A mente descansa quando deixa de fingir que consegue tudo sozinha. Ninguém é uma ilha — nem no Atlântico, nem em Aveiro.", es: "Y cuando pidas, pide claro y sin excusas largas: «¿Puedes quedarte con el gato el sábado? Gracias, yo te devuelvo el favor.» La mente descansa cuando deja de fingir que lo logra todo sola. Nadie es una isla — ni en el Atlántico, ni en Aveiro." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo guardar llaves de vecinos", "Pedir ayuda con claridad fortalece los vínculos", "La historia de la isla de Aveiro"],
        answer: 1,
        why: "«Pedir é humano» apunta al valor de pedir ayuda, no a llaves ni a islas.",
      },
      sequence: {
        instr: "Ordena los pasos del buen pedido:",
        events: [
          "Reconheces que não consegues tudo sozinho",
          "Pedes claro e sem desculpas longas",
          "Dizes «obrigado» de coração",
          "Ficas à espera de devolver o favor",
          "A mente descansa",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "Pedir um favor não é fraqueza: é confiança. Quando dizes podes guardar-me as chaves, estás a dizer acredito em ti. Pede claro, sem desculpas longas: podes ficar com o gato no sábado? Obrigado, eu devolvo o favor. A mente descansa quando deixa de fingir que consegue tudo sozinha. Ninguém é uma ilha.",
        questions: [
          { q: "O que é pedir um favor, segundo o áudio?", kind: "literal", options: ["Confiança", "Fraqueza", "Educação"], answer: 0, why: "«Pedir um favor não é fraqueza: é confiança»." },
          { q: "Como pedes?", kind: "literal", options: ["Claro e sem desculpas longas", "Com uma carta", "Aos gritos"], answer: 0, why: "«Pede claro, sem desculpas longas»." },
          { q: "O que dizes ao pedir as chaves guardadas?", kind: "inferencial", options: ["Acredito em ti", "Não confio em ti", "Não sei quem és"], answer: 0, why: "«estás a dizer acredito em ti»." },
          { q: "Quando descansa a mente?", kind: "inferencial", options: ["Quando deixa de fingir que consegue tudo sozinha", "Quando trabalha mais", "Quando não fala com ninguém"], answer: 0, why: "«quando deixa de fingir que consegue tudo sozinha»." },
        ],
      },
    },
  ],

  "pt-cu-a2-12": [
    {
      id: "md-pt-a2-12-1", theme: "spiritualità",
      title: "A viagem como prática", titleEs: "El viaje como práctica",
      minutes: 3,
      paragraphs: [
        { it: "Desde sempre, os humanos viajam para se encontrarem: os peregrinos iam a pé, os marinheiros iam ao mar, e tu apanhas o Alfa Pendular. O meio muda; a alma da viagem é a mesma: sair de casa para voltar diferente.", es: "Desde siempre, los humanos viajan para encontrarse: los peregrinos iban a pie, los marineros iban al mar, y tú tomas el Alfa Pendular. El medio cambia; el alma del viaje es la misma: salir de casa para volver diferente." },
        { it: "Uma viagem com atenção é uma prática completa: vês paisagens novas (e as tuas reações), conheces pessoas novas (e os teus limites), comes sabores novos (e a tua sorte). No fim, o destino é um detalhe: a viagem acontece dentro do viajante.", es: "Un viaje con atención es una práctica completa: ves paisajes nuevos (y tus reacciones), conoces personas nuevas (y tus límites), comes sabores nuevos (y tu suerte). Al final, el destino es un detalle: el viaje ocurre dentro del viajero." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los horarios del Alfa Pendular", "El viaje como camino de transformación interior", "La historia de los peregrinos de Santiago"],
        answer: 1,
        why: "«A viagem como prática» apunta a la transformación, no a horarios ni a historia.",
      },
      quiz: [
        { q: "Quem viaja para se encontrar, segundo o texto?", kind: "literal", options: ["Os humanos, desde sempre", "Só os peregrinos", "Só os turistas"], answer: 0, why: "«Desde sempre, os humanos viajam para se encontrarem»." },
        { q: "O que é a alma da viagem?", kind: "inferencial", options: ["Sair de casa para voltar diferente", "Chegar o mais depressa possível", "Comprar recordações"], answer: 0, why: "«a alma da viagem é a mesma: sair de casa para voltar diferente»." },
        { q: "Onde acontece a viagem, no fundo?", kind: "critica", options: ["Dentro do viajante", "No mapa", "Na estação"], answer: 0, why: "«a viagem acontece dentro do viajante»." },
      ],
      vf: [
        { text: "O meio de transporte muda, mas a alma da viagem é a mesma.", value: true, why: "«O meio muda; a alma da viagem é a mesma»." },
        { text: "O destino é a coisa mais importante da viagem.", value: false, why: "«o destino é um detalhe»." },
        { text: "Na viagem com atenção conheces os teus limites.", value: true, why: "«conheces pessoas novas (e os teus limites)»." },
      ],
    },
    {
      id: "md-pt-a2-12-2", theme: "relax mentale",
      title: "As estações passam", titleEs: "Las estaciones pasan",
      minutes: 2,
      paragraphs: [
        { it: "Da janela do comboio, as estações passam: Santarém, Coimbra, Aveiro. Os teus pensamentos são estações: alguns são bonitos, alguns têm nome de saudade. O comboio segue — e tu não tens de parar em todos os cais da cabeça.", es: "Desde la ventana del tren, las estaciones pasan: Santarém, Coimbra, Aveiro. Tus pensamientos son estaciones: algunos son bonitos, algunos tienen nombre de nostalgia. El tren sigue — y tú no tienes que parar en todos los andenes de la cabeza." },
        { it: "Não desças em cada estação de tristeza que aparecer à janela. Desce só nas que valem a viagem: a do almoço, a do amigo que espera em Campanhã, a do hotel. Entre elas, deixa o comboio correr. Chegar descansado também é uma forma de chegar.", es: "No bajes en cada estación de tristeza que aparezca en la ventana. Baja solo en las que valen el viaje: la del almuerzo, la del amigo que espera en Campanhã, la del hotel. Entre ellas, deja que el tren corra. Llegar descansado también es una forma de llegar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los horarios de las estaciones del norte", "Los pensamientos son como estaciones: no hay que bajarse en todas", "Cómo encontrar hoteles en Campanhã"],
        answer: 1,
        why: "Las estaciones que pasan por la ventana son metáfora de los pensamientos.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "As estações passam: Santarém, Coimbra, Aveiro.",
          "Os teus pensamentos são estações.",
          "Alguns pensamentos têm nome de saudade.",
          "Os bilhetes de comboio são mais baratos ao sábado.",
          "Chegar descansado também é chegar.",
        ],
        intruder: 3,
        why: "El precio de los billetes no aparece en el texto: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Devemos descer em todas as estações", "Os pensamentos são estações: só desces nas que valem a pena", "Os comboios portugueses são sempre pontuais"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["As estações passam da janela do comboio", "Alguns pensamentos têm nome de saudade", "Chegar descansado também é uma forma de chegar"],
        distractors: ["O comboio atrasou uma hora", "A estação de Aveiro é antiga", "O almoço é às doze"],
      },
    },
    {
      id: "md-pt-a2-12-3", theme: "qui e ora",
      title: "A última estação", titleEs: "La última estación",
      minutes: 2,
      paragraphs: [
        { it: "O comboio desacelera; os postes tornam-se casas; as casas tornam-se ruas. É a última estação. Os viajantes apressados levantam-se antes de parar; tu esperas sentado até a porta abrir. Quem espera sentado chega igual — mas chega inteiro.", es: "El tren desacelera; los postes se vuelven casas; las casas se vuelven calles. Es la última estación. Los viajeros apurados se levantan antes de parar; tú esperas sentado hasta que la puerta se abra. Quien espera sentado llega igual — pero llega entero." },
        { it: "Na plataforma de Campanhã, não corras para a saída. Duas respirações com os pés na terra do Porto. Hoje, primeiro, só chega: é a última estação desta história, e as últimas estações merecem atenção inteira.", es: "En el andén de Campanhã, no corras hacia la salida. Dos respiraciones con los pies en la tierra de Oporto. Hoy, primero, solo llega: es la última estación de esta historia, y las últimas estaciones merecen atención entera." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo recoger equipaje rápidamente", "Llegar con calma a la última estación del viaje", "Las conexiones de Campanhã"],
        answer: 1,
        why: "«A última estação» + esperar sentado apuntan a la llegada consciente.",
      },
      sequence: {
        instr: "Ordena los pasos:",
        events: [
          "O comboio desacelera",
          "Os postes tornam-se casas e as casas ruas",
          "Esperas sentado até a porta abrir",
          "Ficas na plataforma com os pés na terra",
          "Dás duas respirações antes da saída",
        ],
      },
      listen: {
        intro: "Escucha el audio y responde:",
        audioIt: "O comboio desacelera. Ao fundo, já se vê a estação de Campanhã. Os apressados levantam-se logo; tu não. Espera sentado até a porta abrir. Depois, na plataforma, dois minutos: os pés na terra do Porto, duas respirações. Chegar com calma é a última etapa da viagem. Só depois procuras a saída.",
        questions: [
          { q: "O que faz o comboio ao aproximar-se?", kind: "literal", options: ["Desacelera", "Acelera", "Apita três vezes"], answer: 0, why: "«O comboio desacelera»." },
          { q: "Quanto tempo ficas na plataforma?", kind: "literal", options: ["Dois minutos", "Duas horas", "Nenhum"], answer: 0, why: "«na plataforma, dois minutos»." },
          { q: "Quem se levanta antes de parar?", kind: "inferencial", options: ["Os apressados", "Os calmos", "O maquinista"], answer: 0, why: "«Os apressados levantam-se logo; tu não»." },
          { q: "O que é a última etapa da viagem, segundo o áudio?", kind: "inferencial", options: ["Chegar com calma", "Comer uma francesinha", "Comprar lembranças"], answer: 0, why: "«Chegar com calma é a última etapa da viagem»." },
        ],
      },
    },
  ],
};