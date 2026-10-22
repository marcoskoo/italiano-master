import type { MindReading } from "../../cambridge-mind";

/* ═══ PT C2 · Mind readings (temáticas de conciencia) — 3 por unidade ══
   Metodología v9.13: 7 estrategias de comprensión lectora y de escucha.
   Textos em português europeu C2 (ensaio reflexivo com ironia serena),
   tradução espanhola à vista. Campos `.it` = português, `.es` = español.
   Temas com as cinco chaves italianas fixas: meditazione · spiritualità
   · qui e ora · relax fisico · relax mentale. Estratégia por índice:
   L1 = predict + quiz (lit/inf/crít) + V/F; L2 = predict + ideas +
   intruso; L3 = predict + sequência + escuta. */

export const PT_MIND_C2: Record<string, MindReading[]> = {
  "pt-cu-c2-01": [
    {
      id: "md-pt-c2-01-1", theme: "meditazione",
      title: "O risco como respiração", titleEs: "El tachón como respiración", minutes: 2,
      paragraphs: [
        { it: "Na oficina do Chiado, cortar adjetivos é uma forma de meditação: cada risco a lápis obriga a perguntar se a palavra trabalha ou apenas enfeita. Quem corta devagar descobre que a maioria dos enfeites era medo — medo de que a frase nua não bastasse. A atenção que se pede ao texto é a mesma que se pede à respiração: notar o que entra, notar o que sai, largar o que sobra.", es: "En el taller del Chiado, cortar adjetivos es una forma de meditación: cada tachón a lápiz obliga a preguntar si la palabra trabaja o solo adorna. Quien corta despacio descubre que la mayoría de los adornos era miedo — miedo a que la frase desnuda no bastase. La atención que se pide al texto es la misma que se pide a la respiración: notar lo que entra, notar lo que sale, soltar lo que sobra." },
        { it: "Meditar sobre o próprio texto ensina uma humildade ativa: o que fica tem de merecer o lugar que ocupa. O formador dizia que o texto bom é o que sobrevive ao corte — e o mesmo se podia dizer do pensamento. Quando o lápis duvida, corta-se e respira-se; quando o lápis hesita duas vezes, a palavra já estava a pedir saída. O risco, afinal, é a frase a aprender a respirar sem ajuda.", es: "Meditar sobre el propio texto enseña una humildad activa: lo que queda tiene que merecer el lugar que ocupa. El formador decía que el texto bueno es el que sobrevive al corte — y lo mismo se podía decir del pensamiento. Cuando el lápiz duda, se corta y se respira; cuando el lápiz titubea dos veces, la palabra ya estaba pidiendo salir. El tachón, al fin y al cabo, es la frase aprendiendo a respirar sin ayuda." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de lápices de colección", "Cortar adjetivos como práctica de atención y desapego", "Un ensayo sobre la historia del papel"],
        answer: 1,
        why: "El título une tachón y respiración: apunta a la escritura como práctica atenta, no al material ni a la historia del soporte.",
      },
      quiz: [
        { q: "O que se pergunta quando se risca uma palavra?", kind: "literal", options: ["Se trabalha ou apenas enfeita", "Se está escrita sem erros", "Se é portuguesa ou castelhana"], answer: 0, why: "«Cada risco a lápis obriga a perguntar se a palavra trabalha ou apenas enfeita» está literal en el primer párrafo." },
        { q: "Porque é que o texto diz que a maioria dos enfeites era medo?", kind: "inferencial", options: ["Porque o escritor receia que a frase nua não baste", "Porque os adjetivos são sempre errados", "Porque o lápis obriga a cortar"], answer: 0, why: "Se infiere de «medo de que a frase nua não bastesse»: el adorno nace del miedo a la frase desnuda." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["Cortar com atenção é uma forma de meditação ativa sobre o próprio texto", "Todos os adjetivos devem ser eliminados", "O lápis é mais importante que a escrita"], answer: 0, why: "La idea central iguala cortar y meditar: la atención al texto es la misma que la de la respiración." },
      ],
      vf: [
        { text: "Segundo o texto, a maioria dos enfeites era vaidade.", value: false, why: "El texto dice que era miedo: «medo de que a frase nua não bastasse»." },
        { text: "O que fica no texto tem de merecer o lugar que ocupa.", value: true, why: "«O que fica tem de merecer o lugar que ocupa» está literal." },
        { text: "Quando o lápis hesita duas vezes, a palavra já estava a pedir saída.", value: true, why: "«Quando o lápis hesita duas vezes, a palavra já estava a pedir saída» está literal." },
      ],
    },
    {
      id: "md-pt-c2-01-2", theme: "qui e ora",
      title: "O café frio na mesa", titleEs: "El café frío sobre la mesa", minutes: 2,
      paragraphs: [
        { it: "Sobrou café frio na mesa da oficina e o grupo já desceu; a página em branco ainda lá está, à espera. O aqui e o agora de quem escreve cabem nesse intervalo: a casa sossegada depois de todos saírem, a luz das cinco sobre os telhados do Chiado, a folha que existe — esta, não a de amanhã. A ansiedade do escritor mora sempre noutra página: na que ainda não escreveu ou na que já entregou.", es: "Quedó café frío sobre la mesa del taller y el grupo ya bajó; la página en blanco sigue ahí, esperando. El aquí y el ahora de quien escribe caben en ese intervalo: la casa tranquila después de que todos se fueron, la luz de las cinco sobre los tejados del Chiado, la hoja que existe — esta, no la de mañana. La ansiedad del escritor vive siempre en otra página: en la que aún no escribió o en la que ya entregó." },
        { it: "A prática serena é voltar à única página que existe: a de hoje, com o seu café frio e o seu lápis. Escrever no presente não é escrever depressa; é escrever onde se está — com a cidade lá em baixo a fazer o seu barulho de sempre e a mão a seguir o pensamento ao ritmo que o pensamento pede. Quando a cabeça fugir para o livro inteiro, traz-se devagar à frase de agora.", es: "La práctica serena es volver a la única página que existe: la de hoy, con su café frío y su lápiz. Escribir en presente no es escribir deprisa; es escribir donde se está — con la ciudad allá abajo haciendo su ruido de siempre y la mano siguiendo al pensamiento al ritmo que el pensamiento pide. Cuando la cabeza huya hacia el libro entero, se la trae despacio a la frase de ahora." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un catálogo de cafés de Lisboa", "Escribir en la página presente, con la ciudad debajo", "Una crítica a los grupos de escritura"],
        answer: 1,
        why: "El título une café frío y mesa de taller: apunta a la presencia en la página de hoy, no al café ni a la crítica.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Escrever onde se está: a única página que existe é a de hoje", "O café de Lisboa é o melhor da Europa", "Os grupos de escritura deviam ser mais silenciosos"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A ansiedade do escritor mora sempre noutra página", "A luz das cinco sobre os telhados do Chiado", "Quando a cabeça fugir para o livro inteiro, traz-se à frase de agora"],
        distractors: ["A oficina termina sempre às nove", "O formador Vasco publicou dez romances", "O café frio faz mal à digestão"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Sobrou café frio na mesa da oficina e o grupo já desceu.",
          "A ansiedade do escritor mora sempre noutra página.",
          "A prática serena é voltar à única página que existe.",
          "A renda do sótão do Chiado subiu no ano passado.",
          "Escrever no presente é escrever onde se está.",
        ],
        intruder: 3,
        why: "El precio del alquiler es un dato inmobiliario ajeno a la reflexión sobre la presencia: es el intruso.",
      },
    },
    {
      id: "md-pt-c2-01-3", theme: "relax fisico",
      title: "A mão que escreve", titleEs: "La mano que escribe", minutes: 2,
      paragraphs: [
        { it: "Escrever é um trabalho de mão, e a mão cansa antes do pensamento. Depois de uma hora de riscos e reescritas, o punho fecha-se, o polegar endurece e o ombro sobe sem pedir licença — o corpo paga a conta que a página não mostra. Quem escreve muito devia tratar a mão como um músico trata o instrumento: aquecê-la, ouvi-la, pousá-la a tempo.", es: "Escribir es un trabajo de mano, y la mano se cansa antes que el pensamiento. Después de una hora de tachones y reescrituras, la muñeca se cierra, el pulgar se endurece y el hombro sube sin pedir licencia — el cuerpo paga la cuenta que la página no muestra. Quien escribe mucho debería tratar la mano como un músico trata el instrumento: calentarla, escucharla, posarla a tiempo." },
        { it: "A pausa de dois minutos faz-se sem sair da mesa: abrem-se os dedos como um leque, roda-se o punho devagar para os dois lados, alonga-se o polegar puxado com suavidade pela outra mão. O ombro desce numa expiração longa, como quem pousa uma mochila invisível. E a mão, pousada sobre a folha um instante sem escrever, descansa do ofício — para o retomar inteira.", es: "La pausa de dos minutos se hace sin salir de la mesa: se abren los dedos como un abanico, se gira la muñeca despacio hacia los dos lados, se estira el pulgar tirado con suavidad por la otra mano. El hombro baja en una espiración larga, como quien suelta una mochila invisible. Y la mano, posada sobre la hoja un instante sin escribir, descansa del oficio — para retomarlo entera." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un tratado de caligrafía profesional", "Cuidar la mano que escribe: pausas y estiramientos", "La historia del lápiz de dos puntas"],
        answer: 1,
        why: "El título anuncia la mano del escritor: apunta al cuidado físico, no a la caligrafía ni a la historia del instrumento.",
      },
      sequence: {
        instr: "Ordena los pasos de la pausa según el texto:",
        events: ["O punho fecha-se e o ombro sobe sem pedir licença", "Abres os dedos como um leque", "Rodas o punho devagar para os dois lados", "Alongas o polegar com suavidade", "O ombro desce numa expiração longa"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Pousa o lápis um instante e olha para a tua mão: foi ela que escreveu tudo o que está na folha. Abre os dedos devagar, como um leque ao contrário, e deixa o ar sair até ao fim. Roda o punho duas vezes para cada lado, sem pressa nenhuma. Agora desce o ombro numa expiração comprida — o corpo que escreve também merece o seu obrigado. Quando voltares à página, a mão há de agradecer a pausa: escreve uma linha e sente a diferença.",
        questions: [
          { q: "O que se faz com os dedos, segundo o áudio?", kind: "literal", options: ["Abrem-se devagar, como um leque ao contrário", "Cruzam-se debaixo da mesa", "Batem no tampo da mesa"], answer: 0, why: "«Abre os dedos devagar, como um leque ao contrário» está literal en el audio." },
          { q: "Como desce o ombro?", kind: "literal", options: ["Numa expiração comprida", "Num salto rápido", "Numa inspiração funda"], answer: 0, why: "«Desce o ombro numa expiração comprida» está literal." },
          { q: "Porque é que o corpo merece o seu obrigado?", kind: "inferencial", options: ["Porque a mão escreveu tudo o que está na folha", "Porque o corpo é mais rápido que a mente", "Porque a folha pesa demasiado"], answer: 0, why: "Se infiere de la apertura: la mano escribió todo lo que está en la hoja, el cuerpo también trabaja." },
          { q: "Que diferença se espera ao voltar à página?", kind: "inferencial", options: ["A mão agradece a pausa e escreve com menos tensão", "A página fica mais branca", "O lápis muda de cor"], answer: 0, why: "«A mão há de agradecer a pausa: escreve uma linha e sente a diferença»: la pausa se nota en la escritura." },
        ],
      },
    },
  ],

  "pt-cu-c2-02": [
    {
      id: "md-pt-c2-02-1", theme: "meditazione",
      title: "O fôlego antes da frase", titleEs: "El aliento antes de la frase", minutes: 2,
      paragraphs: [
        { it: "Na cabina de gravação, antes de a luz vermelha acender, há um gesto que ninguém vê: uma inspiração funda e uma expiração contada. O off pede fôlego de sobra — quem começa a frase sem ar acaba-a com pressa, e a pressa ouve-se. Respirar antes de falar é preparar o corpo para a cadência, como o fadista prepara o peito antes da primeira nota.", es: "En la cabina de grabación, antes de que se encienda la luz roja, hay un gesto que nadie ve: una inspiración honda y una espiración contada. El off pide aliento de sobra — quien empieza la frase sin aire la termina con prisa, y la prisa se oye. Respirar antes de hablar es preparar el cuerpo para la cadencia, como el fadista prepara el pecho antes de la primera nota." },
        { it: "A respiração é o metrónomo escondido da narração: inspira-se onde o texto pede pausa, expira-se sobre a vogal tónica que se quer esticar. A preparadora de voz dizia que a frase se canta por dentro antes de se dizer por fora — e é verdade: quem ouve a frase na respiração já a disse meia. Um fôlego tranquilo não é técnica de estúdio; é a forma mais antiga de a voz se preparar para ser ouvida.", es: "La respiración es el metrónomo escondido de la narración: se inspira donde el texto pide pausa, se espira sobre la vocal tónica que se quiere estirar. La preparadora de voz decía que la frase se canta por dentro antes de decirse por fuera — y es verdad: quien oye la frase en la respiración ya la ha dicho a medias. Un aliento tranquilo no es técnica de estudio; es la forma más antigua de preparar la voz para ser oída." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de técnica vocal para cantantes", "La respiración como preparación de la voz narrada", "La historia del microfone de estúdio"],
        answer: 1,
        why: "El título une aliento y frase: apunta a la respiración del narrador, no al manual ni al equipo.",
      },
      quiz: [
        { q: "O que se faz antes de a luz vermelha acender?", kind: "literal", options: ["Uma inspiração funda e uma expiração contada", "Um copo de água fria", "A leitura do contrato"], answer: 0, why: "«Uma inspiração funda e uma expiração contada» está literal en el primer párrafo." },
        { q: "Porque é que a frase começada sem ar acaba com pressa?", kind: "inferencial", options: ["Porque o fôlego falta no fim — e a pressa ouve-se", "Porque o texto é sempre comprido", "Porque o microfone corta a voz"], answer: 0, why: "Se infiere de «quem começa a frase sem ar acaba-a com pressa, e a pressa ouve-se»: el aire se agota antes del final." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["A respiração é o metrónomo escondido da narração", "Os narradores deviam cantar fado", "O estúdio é um lugar silencioso"], answer: 0, why: "La idea central: la respiración organiza la cadencia de la voz, como el fado prepara el pecho." },
      ],
      vf: [
        { text: "Quem começa a frase sem ar acaba-a com calma.", value: false, why: "Dice lo contrario: «acaba-a com pressa, e a pressa ouve-se»." },
        { text: "A frase canta-se por dentro antes de se dizer por fora.", value: true, why: "«A frase se canta por dentro antes de se dizer por fora» está literal." },
        { text: "No texto, o fôlego tranquilo é apenas uma técnica moderna de estúdio.", value: false, why: "«Não é técnica de estúdio; é a forma mais antiga de a voz se preparar para ser ouvida»." },
      ],
    },
    {
      id: "md-pt-c2-02-2", theme: "relax fisico",
      title: "A boca depois das nasais", titleEs: "La boca después de las nasales", minutes: 2,
      paragraphs: [
        { it: "Depois de uma sessão de vogais nasais, a boca inteira fica quente: «manhã», «saudade», «ao fundo» são palavras que ocupam o rosto todo. A nasal pede o palato, os lábios e o maxilar ao mesmo tempo — e quem as treina ao espelho sente o cansaço do pequeno ginásio escondido dentro da cabeça. A voz portuguesa mora no corpo, e o corpo precisa de arrefecer.", es: "Después de una sesión de vocales nasales, la boca entera queda caliente: «manhã», «saudade», «ao fundo» son palabras que ocupan toda la cara. La nasal pide el paladar, los labios y la mandíbula a la vez — y quien las entrena frente al espejo siente el cansancio del pequeño gimnasio escondido dentro de la cabeza. La voz portuguesa vive en el cuerpo, y el cuerpo necesita enfriarse." },
        { it: "A pausa do locutor faz-se em três tempos: massagem suave no maxilar com a ponta dos dedos, bocejo lento que destende a garganta e um sorriso exagerado que alonga os lábios como cortina de teatro. Nada disto se filma; tudo isto se ouve na frase seguinte, que sai mais solta e mais redonda. A boca que descansa diz melhor o que a boca cansada apenas pronuncia.", es: "La pausa del locutor se hace en tres tiempos: masaje suave en la mandíbula con la punta de los dedos, bostezo lento que destensa la garganta y una sonrisa exagerada que estira los labios como telón de teatro. Nada de esto se filma; todo esto se oye en la frase siguiente, que sale más suelta y más redonda. La boca que descansa dice mejor lo que la boca cansada apenas pronuncia." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una receta de cocina con sabores nasales", "Relajar boca y maxilar después de entrenar las vocales nasales", "Un anuncio de pasta de dientes"],
        answer: 1,
        why: "El título señala la boca después del entrenamiento nasal: apunta al relax físico del locutor, no a la cocina ni a la publicidad.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["A voz descansa na boca: o relaxamento do maxilar e dos lábios faz-se ouvir", "As vogais nasais devem ser evitadas por cansativas", "O espelho é a ferramenta mais importante do estúdio"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["As nasais pedem palato, lábios e maxilar ao mesmo tempo", "O bocejo lento destende a garganta", "A frase seguinte sai mais solta e mais redonda"],
        distractors: ["O realizador Rui gravou dez documentários no Tejo", "A sessão de gravação custou duzentos euros", "A preparadora de voz estudou canto em Madrid"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "A nasal pede o palato, os lábios e o maxilar ao mesmo tempo.",
          "A pausa do locutor faz-se em três tempos.",
          "Nada disto se filma; tudo isto se ouve na frase seguinte.",
          "O contrato do estúdio prevê uma hora de gravação.",
          "A boca que descansa diz melhor o que a boca cansada apenas pronuncia.",
        ],
        intruder: 3,
        why: "El contrato y el tiempo de estudio son logística ajena al cuidado de la voz: es el intruso.",
      },
    },
    {
      id: "md-pt-c2-02-3", theme: "qui e ora",
      title: "De olhos fechados na cabina", titleEs: "Con los ojos cerrados en la cabina", minutes: 2,
      paragraphs: [
        { it: "No fim da sessão, a preparadora de voz manda fechar os olhos e ouvir a própria voz gravada, do início ao fim, sem fazer nada — apenas ouvir. É um exercício de presença estranho: a voz que sai da coluna de som é nossa e é outra, e escutá-la sem corrigir nada é uma forma serena de habitar o momento. Quem se ouve com indulgência aprende mais do que quem se ouve com tribunal.", es: "Al final de la sesión, la preparadora de voz manda cerrar los ojos y escuchar la propia voz grabada, del principio al fin, sin hacer nada — solo escuchar. Es un ejercicio de presencia extraño: la voz que sale de la columna de sonido es nuestra y es otra, y escucharla sin corregir nada es una forma serena de habitar el momento. Quien se escucha con indulgencia aprende más que quien se escucha con tribunal." },
        { it: "O aqui e o agora da cabina são simples: a luz baixa, o texto marcado a lápis, o silêncio entre duas tomadas. Nesse silêncio não há voz passada nem gravação futura — há o ar do estúdio e a respiração que volta ao seu lugar. E quando a voz própria já não assusta, o locutor pode enfim servir o texto: dizer o que está escrito sem se defender de quem o diz.", es: "El aquí y el ahora de la cabina son simples: la luz baja, el texto marcado a lápiz, el silencio entre dos tomas. En ese silencio no hay voz pasada ni grabación futura — está el aire del estudio y la respiración que vuelve a su lugar. Y cuando la voz propia ya no asusta, el locutor puede por fin servir al texto: decir lo que está escrito sin defenderse de quien lo dice." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ensayo sobre equipos de sonido", "Escucharse con presencia e indulgencia en el estudio", "Cómo escribir un documental del Tejo"],
        answer: 1,
        why: "El título anuncia los ojos cerrados en la cabina: apunta a la escucha serena de la propia voz, no al equipo ni al guion.",
      },
      sequence: {
        instr: "Ordena los momentos del ejercicio según el texto:",
        events: ["Fechas os olhos e ouves a própria voz gravada", "Notas que a voz é tua e é outra", "Ouves sem corrigir nada, com indulgência", "Reencontras o silêncio entre duas tomadas", "Servir o texto sem te defenderes de quem o diz"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Fecha os olhos e ouve a tua voz como se fosse de outra pessoa: sem tribunal, sem desculpa. Deixa a frase correr até ao fim e nota só onde o fôlego fugiu. Não corriges nada agora — o corpo já ouviu o que a cabeça ainda não entendeu. Na próxima tomada, o ar chega mais depressa ao sítio certo e a vogal estica-se sem esforço. A voz que se ouve com calma aprende sozinha o caminho mais curto.",
        questions: [
          { q: "Como se ouve a própria voz, segundo o áudio?", kind: "literal", options: ["Como se fosse de outra pessoa", "Com o tribunal ligado", "Aos gritos"], answer: 0, why: "«Ouve a tua voz como se fosse de outra pessoa» está literal." },
          { q: "O que se nota ao deixar a frase correr?", kind: "literal", options: ["Onde o fôlego fugiu", "O preço do estúdio", "A cor da luz vermelha"], answer: 0, why: "«Nota só onde o fôlego fugiu» está literal." },
          { q: "Porque é que não se corrige nada nesse momento?", kind: "inferencial", options: ["Porque o corpo já ouviu o que a cabeça ainda não entendeu", "Porque o texto é perfeito", "Porque o realizador o proíbe"], answer: 0, why: "Se infiere de que el cuerpo ya registró el error: la corrección consciente puede esperar." },
          { q: "O que se espera na próxima tomada?", kind: "inferencial", options: ["O ar chega mais depressa ao sítio certo", "A voz muda de timbre", "O texto encurta"], answer: 0, why: "«Na próxima tomada, o ar chega mais depressa ao sítio certo»: la escucha calmada educa al cuerpo." },
        ],
      },
    },
  ],

  "pt-cu-c2-03": [
    {
      id: "md-pt-c2-03-1", theme: "relax mentale",
      title: "O silêncio depois do remate", titleEs: "El silencio después del remate", minutes: 2,
      paragraphs: [
        { it: "Depois do punchline, o comediante fica no silêncio como quem fica no escuro: sem confirmar, sem pedir, sem explicar. Esse vazio de dois segundos é o lugar mais desconfortável do espetáculo — e o mais necessário. O amador preenche-o com um «entenderam?»; o comediante sabe que a pausa é do público: é lá que o riso nasce, ou a piada morre.", es: "Después del remate, el comediante se queda en el silencio como quien se queda a oscuras: sin confirmar, sin pedir, sin explicar. Ese vacío de dos segundos es el lugar más incómodo del espectáculo — y el más necesario. El amateur lo rellena con un «¿entendieron?»; el comediante sabe que la pausa es del público: es ahí donde nace la risa, o muere el chiste." },
        { it: "Sustentar o silêncio sem se encher de ansiedade é um treino de relaxamento mental. A mente quer logo explicar, justificar, acrescentar — e cada uma dessas manobras rouba ao público o espaço de reagir. Dizer a frase, largá-la e ficar quieto é uma forma de confiança: confiança na piada, no timing e na sala. O silêncio bem aguentado é, no fundo, o comediante a respirar pelo público.", es: "Sostener el silencio sin llenarse de ansiedad es un entrenamiento de relajación mental. La mente quiere enseguida explicar, justificar, añadir — y cada una de esas maniobras le roba al público el espacio de reaccionar. Decir la frase, soltarla y quedarse quieto es una forma de confianza: confianza en el chiste, en el timing y en la sala. El silencio bien sostenido es, al final, el comediante respirando por el público." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un tratado de acústica teatral", "Sostener el silencio tras el remate sin ansiedad", "Cómo escribir remates más rápidos"],
        answer: 1,
        why: "El título une silencio y remate: apunta al vacío que el comediante debe habitar, no a la acústica ni a la escritura.",
      },
      quiz: [
        { q: "Com o que preenche o amador o silêncio?", kind: "literal", options: ["Com um «entenderam?»", "Com dois minutos de pausa", "Com uma saída do palco"], answer: 0, why: "«O amador preenche-o com um 'entenderam?'» está literal." },
        { q: "Porque é que a pausa é do público?", kind: "inferencial", options: ["Porque é lá que o riso nasce, ou a piada morre", "Porque o contrato do teatro o exige", "Porque o comediante precisa de descanso"], answer: 0, why: "Se infiere de «é lá que o riso nasce, ou a piada morre»: la reacción pertenece a la sala." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["Sustentar o silêncio com confiança é ofício e relaxamento mental", "As piadas deviam ser explicadas", "O riso deve ser pedido com insistência"], answer: 0, why: "La idea central: aguantar el vacío sin ansiedad es parte del oficio y un descanso mental." },
      ],
      vf: [
        { text: "O silêncio depois do remate é o lugar mais confortável do espetáculo.", value: false, why: "«É o lugar mais desconfortável do espetáculo — e o mais necessário»." },
        { text: "Explicar a piada rouba ao público o espaço de reagir.", value: true, why: "«Cada uma dessas manobras rouba ao público o espaço de reagir» está literal." },
        { text: "O silêncio bem aguentado é o comediante a respirar pelo público.", value: true, why: "La frase de cierre del segundo párrafo está literal." },
      ],
    },
    {
      id: "md-pt-c2-03-2", theme: "meditazione",
      title: "A pausa de dois segundos", titleEs: "La pausa de dos segundos", minutes: 2,
      paragraphs: [
        { it: "A pausa certa antes do remate dura dois segundos — e meditar é, também, aprender a habitar esses dois segundos sem fugir. Contar um, contar dois, com a sala inteira suspensa, é uma experiência de tempo puro: nada acontece, tudo se prepara. Quem treina a pausa treina a própria atenção, porque só está em pausa quem está inteiro no momento.", es: "La pausa justa antes del remate dura dos segundos — y meditar es, también, aprender a habitar esos dos segundos sin huir. Contar uno, contar dos, con la sala entera en suspenso, es una experiencia de tiempo puro: nada ocurre, todo se prepara. Quien entrena la pausa entrena la propia atención, porque solo está en pausa quien está entero en el momento." },
        { it: "O cronómetro do curso ensina a medida; a meditação ensina a estadia. Um segundo, e o riso chega cedo; três, e a tensão arrefece; dois, e a sala cai — o número importa menos do que a qualidade da espera. Estar dentro da pausa sem ansiedade é estar dentro de si: o comediante que aguenta os dois segundos em paz oferece à plateia o melhor presente do humor — o tempo de pensar.", es: "El cronómetro del curso enseña la medida; la meditación enseña la estancia. Un segundo, y la risa llega pronto; tres, y la tensión se enfría; dos, y la sala cae — el número importa menos que la calidad de la espera. Estar dentro de la pausa sin ansiedad es estar dentro de sí: el comediante que aguanta los dos segundos en paz ofrece al público el mejor regalo del humor — el tiempo de pensar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de cronómetros deportivos", "Habitar la pausa de dos segundos como experiencia de tiempo puro", "Por qué los teatros son fríos"],
        answer: 1,
        why: "El título anuncia la pausa medida: apunta a la experiencia del tiempo en el humor, no al instrumental ni al edificio.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["A pausa certa habitá-la em paz: dois segundos de tempo puro", "A pausa devia durar pelo menos dez segundos", "O cronómetro substitui o talento do comediante"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A pausa é uma experiência de tempo puro: nada acontece, tudo se prepara", "Um segundo e o riso chega cedo; três e a tensão arrefece", "O comediante em pausa oferece à plateia o tempo de pensar"],
        distractors: ["O comediante gravou o espetáculo em vídeo", "A bilheteira esgotou em duas horas", "O camarim do teatro foi pintado de vermelho"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Nada acontece, tudo se prepara: a pausa é tempo puro.",
          "Quem treina a pausa treina a própria atenção.",
          "Um segundo e o riso chega cedo; três e a tensão arrefece.",
          "A sessão de estreia começou às vinte e uma horas.",
          "Estar dentro da pausa sem ansiedade é estar dentro de si.",
        ],
        intruder: 3,
        why: "El horário de la función es logística del espectáculo, ajena a la reflexión sobre la pausa: es el intruso.",
      },
    },
    {
      id: "md-pt-c2-03-3", theme: "spiritualità",
      title: "Gozar primeiro consigo", titleEs: "Burlarse primero de sí", minutes: 3,
      paragraphs: [
        { it: "A autoironia portuguesa é uma forma suave de espiritualidade doméstica: os portugueses gozam primeiro consigo, para que ninguém chegue antes. Rir de si com bondade — sem tribunal, sem castigo — é um exercício de humildade que não humilha; quem o pratica fica mais leve, porque já não precisa de defender a própria imagem. A tia que aparece ao domingo e a morte tratada como familiar são o mesmo gesto: domesticar o que assusta.", es: "La autoironía portuguesa es una forma suave de espiritualidad doméstica: los portugueses se burlan primero de sí, para que nadie llegue antes. Reírse de uno con bondad — sin tribunal, sin castigo — es un ejercicio de humildad que no humilla; quien lo practica queda más ligero, porque ya no necesita defender la propia imagen. La tía que aparece el domingo y la muerte tratada como familiar son el mismo gesto: domesticar lo que asusta." },
        { it: "Há uma generosidade escondida em começar por si: quem se ri primeiro abre espaço para que os outros se riam sem ferir. O humor negro português, esse primo pobre do riso que chega vestido de luto, só é suportável porque assenta nessa brandura consigo. E no fim, o riso que pensa — o que demora, o que se entende na rua — deixa um resto de ternura: o espetáculo acaba e a pessoa fica um pouco mais amiga de si.", es: "Hay una generosidad escondida en empezar por uno mismo: quien se ríe primero abre espacio para que los demás se rían sin herir. El humor negro portugués, ese primo pobre de la risa que llega vestido de luto, solo es soportable porque se apoya en esa blandura consigo. Y al final, la risa que piensa — la que tarda, la que se entiende en la calle — deja un resto de ternura: el espectáculo acaba y la persona queda un poco más amiga de sí." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de chistes sobre tías", "La autoironía como práctica serena de bondad consigo mismo", "Un estudio sobre el luto portugués"],
        answer: 1,
        why: "El título anuncia la burla que empieza en uno mismo: apunta a la autoironía bondadosa, no al repertorio ni al luto.",
      },
      sequence: {
        instr: "Ordena los momentos según el texto:",
        events: ["Os portugueses gozam primeiro consigo", "Riem de si com bondade, sem tribunal", "O que assusta domestica-se com humor", "Os outros podem rir sem ferir", "Fica um resto de ternura consigo próprio"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Lembra-te da última vez que te riste de ti sem te magoares: a piada era tua, o alvo eras tu — e ninguém se feriu. Esse riso é um treino de brandura: começa por ti para não ter de começar pelos outros. Quando o medo aparecer disfarçado de assunto sério, trata-o como a tia que chega ao domingo: serve-lhe café e não lhe dês o assento do meio. O riso que pensa demora — espera por ele, porque chega sempre com ternura atrasada.",
        questions: [
          { q: "De quem era a piada e o alvo?", kind: "literal", options: ["A piada era tua e o alvo eras tu", "A piada era do público", "O alvo era o humorista famoso"], answer: 0, why: "«A piada era tua, o alvo eras tu» está literal." },
          { q: "Como se trata o medo disfarçado de assunto sério?", kind: "literal", options: ["Como a tia que chega ao domingo: café e sem assento do meio", "Com um discurso solene", "Com um silêncio comprido"], answer: 0, why: "«Serve-lhe café e não lhe dês o assento do meio» está literal." },
          { q: "Porque é que o riso brando começa por si mesmo?", kind: "inferencial", options: ["Para não ter de começar pelos outros", "Porque os outros não gostam de rir", "Porque o café se serve primeiro"], answer: 0, why: "«Começa por ti para não ter de começar pelos outros»: la burla propia protege la ajena." },
          { q: "Que característica tem o riso que pensa?", kind: "inferencial", options: ["Demora e chega com ternura atrasada", "É imediato e alto", "Nasce sempre no palco"], answer: 0, why: "«O riso que pensa demora — chega sempre com ternura atrasada»." },
        ],
      },
    },
  ],

  "pt-cu-c2-04": [
    {
      id: "md-pt-c2-04-1", theme: "qui e ora",
      title: "Ler devagar no Chiado", titleEs: "Leer despacio en el Chiado", minutes: 2,
      paragraphs: [
        { it: "No clube de leitura, ler devagar é um ato de presença: fechar o livro e deixar a frase ficar no ar, como manda a moderadora, exige habitar o que acabou de ser lido. A pressa de chegar ao capítulo seguinte rouba ao texto o seu tempo — e o tempo do texto é também o do leitor. Ler no presente é ouvir a frase enquanto ela ainda respira.", es: "En el club de lectura, leer despacio es un acto de presencia: cerrar el libro y dejar la frase en el aire, como manda la moderadora, exige habitar lo que acaba de ser leído. La prisa por llegar al capítulo siguiente le roba al texto su tiempo — y el tiempo del texto es también el del lector. Leer en presente es oír la frase mientras todavía respira." },
        { it: "O aqui e o agora da leitura fazem-se com o corpo também: o peso do livro nas mãos, a página que se dobra, a luz da livraria sobre o papel. Quando o pensamento foge para o fim da novela — para o desfecho, para a discussão da semana seguinte — traz-se devagar à linha atual. A frase presente é a única que se pode ler inteira; as outras são memória ou previsão.", es: "El aquí y el ahora de la lectura se hacen también con el cuerpo: el peso del libro en las manos, la página que se dobla, la luz de la librería sobre el papel. Cuando el pensamiento huye hacia el final de la novela — hacia el desenlace, hacia la discusión de la semana siguiente — se lo trae despacio a la línea actual. La frase presente es la única que se puede leer entera; las otras son memoria o previsión." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un listado de librerías del Chiado", "Leer despacio como acto de presencia en el club", "Cómo escribir novelas largas"],
        answer: 1,
        why: "El título une lectura lenta y lugar del club: apunta a la presencia del lector, no al comercio ni a la escritura.",
      },
      quiz: [
        { q: "O que manda fazer a moderadora do clube?", kind: "literal", options: ["Fechar o livro e deixar a frase no ar", "Ler dois capítulos por sessão", "Citar sempre com número de página"], answer: 0, why: "«Fechar o livro e deixar a frase ficar no ar, como manda a moderadora» está literal." },
        { q: "Porque é que as outras frases são memória ou previsão?", kind: "inferencial", options: ["Porque só a frase presente se pode ler inteira", "Porque a novela não tem fim", "Porque a livraria fecha cedo"], answer: 0, why: "Se infiere del cierre: la frase presente es la única legible entera; las otras se recuerdan o se imaginan." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["Ler devagar é habitar o tempo do texto, que é também o do leitor", "Os clubes deviam proibir a discussão", "As novelas portuguesas são lentas"], answer: 0, why: "La idea central iguala el tiempo del texto y el del lector: leer despacio es presencia." },
      ],
      vf: [
        { text: "A pressa de chegar ao capítulo seguinte rouba tempo ao texto.", value: true, why: "«A pressa de chegar ao capítulo seguinte rouba ao texto o seu tempo» está literal." },
        { text: "O tempo do texto não tem nada a ver com o do leitor, segundo o texto.", value: false, why: "Dice lo contrario: «o tempo do texto é também o do leitor»." },
        { text: "O peso do livro nas mãos faz parte do aqui e agora da leitura.", value: true, why: "«O aqui e o agora da leitura fazem-se com o corpo: o peso do livro nas mãos»." },
      ],
    },
    {
      id: "md-pt-c2-04-2", theme: "spiritualità",
      title: "A voz emprestada", titleEs: "La voz prestada", minutes: 3,
      paragraphs: [
        { it: "Escrever em discurso indireto livre é um exercício de empatia quase espiritual: o narrador empresta a boca à personagem e cala-se, como quem cede a cadeira a alguém mais cansado. Para escrever a voz do outro é preciso ouvi-la primeiro — não a imitar, ouvi-la de verdade, até a dúvida dela caber dentro da nossa frase. A terceira pessoa com a primeira por dentro é uma forma de hospitalidade gramatical.", es: "Escribir en estilo indirecto libre es un ejercicio de empatía casi espiritual: el narrador le presta la boca al personaje y calla, como quien cede la silla a alguien más cansado. Para escribir la voz del otro hay que oírla primero — no imitarla, oírla de verdad, hasta que la duda de él quepa dentro de nuestra frase. La tercera persona con la primera por dentro es una forma de hospitalidad gramatical." },
        { it: "Essa hospitalidade treina-se fora da página: escutar sem interromper, dar ao outro o tempo de terminar o pensamento, notar a pergunta que ninguém formula. Quem sabe ouvir escreve personagens que parecem pessoas; quem só se ouve a si escreve fantasmas com o nosso sotaque. E no fim, o leitor também é recebido: entra na cabeça da personagem sem bater, porque alguém lhe abriu a porta por dentro.", es: "Esa hospitalidad se entrena fuera de la página: escuchar sin interrumpir, dar al otro el tiempo de terminar el pensamiento, notar la pregunta que nadie formula. Quien sabe oír escribe personajes que parecen personas; quien solo se oye a sí mismo escribe fantasmas con nuestro acento. Y al final, el lector también es recibido: entra en la cabeza del personaje sin llamar, porque alguien le abrió la puerta por dentro." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso de técnicas narrativas avanzadas", "Prestar la voz como práctica de escucha y hospitalidad", "Una historia de fantasmas con acento"],
        answer: 1,
        why: "El título anuncia la voz que se presta: apunta a la hospitalidad del narrador, no al temario ni al fantasma (que es metáfora).",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Escrever a voz do outro é uma hospitalidade que se treina ouvindo", "O narrador deve falar mais alto que as personagens", "O discurso indireto livre é um erro de principiantes"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["O narrador empresta a boca e cala-se, como quem cede a cadeira", "Escutar sem interromper treina a empatia da escrita", "O leitor entra na cabeça da personagem sem bater"],
        distractors: ["O clube comprou vinte exemplares do romance", "O advogado do clube tem trinta anos de ofício", "A livraria abre ao domingo de manhã"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "O narrador empresta a boca à personagem e cala-se.",
          "Para escrever a voz do outro é preciso ouvi-la primeiro.",
          "Quem sabe ouvir escreve personagens que parecem pessoas.",
          "O clube de leitura reúne na primeira terça de cada mês.",
          "O leitor entra na cabeça da personagem sem bater.",
        ],
        intruder: 3,
        why: "La periodicidad de las reuniones es organización del club, ajena a la reflexión sobre la escucha: es el intruso.",
      },
    },
    {
      id: "md-pt-c2-04-3", theme: "meditazione",
      title: "Uma frase de cada vez", titleEs: "Una frase cada vez", minutes: 3,
      paragraphs: [
        { it: "Ler Saramago sem ponto durante duas páginas ensina uma meditação involuntária: a respiração segue a vírgula, e o pensamento aprende a esperar. A frase longa é um rio — não se atravessa a saltar, atravessa-se a nadar, um braço de cada vez. Quem resiste à pressa do ponto final descobre que a atenção também tem fôlego, e que o fôlego se treina.", es: "Leer a Saramago sin punto durante dos páginas enseña una meditación involuntaria: la respiración sigue a la coma, y el pensamiento aprende a esperar. La frase larga es un río — no se cruza a saltos, se cruza nadando, un brazo cada vez. Quien resiste a la prisa del punto final descubre que la atención también tiene aliento, y que el aliento se entrena." },
        { it: "A prática serena da leitura difícil faz-se assim: uma frase de cada vez, sem olhar o fim da página, sem contar o que falta. Quando o pensamento se perde — e perde-se sempre — volta-se à vírgula onde a voz ainda era nossa. Um romancista demora a sair da frase; uma poetisa diz tudo em dez palavras: entre os dois extremos, o leitor aprende o seu próprio ritmo, que é o único que a leitura pede.", es: "La práctica serena de la lectura difícil se hace así: una frase cada vez, sin mirar el final de la página, sin contar lo que falta. Cuando el pensamiento se pierde — y se pierde siempre — se vuelve a la coma donde la voz todavía era nuestra. Un novelista tarda en salir de la frase; una poetisa lo dice todo en diez palabras: entre los dos extremos, el lector aprende su propio ritmo, que es el único que la lectura pide." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una biografía de Saramago", "Leer la frase larga como práctica de atención y aliento", "Un análisis de la industria editorial"],
        answer: 1,
        why: "El título anuncia la frase por vez: apunta al método de lectura atenta, no a la biografía ni a la industria.",
      },
      sequence: {
        instr: "Ordena los pasos de la práctica según el texto:",
        events: ["Lês a frase longa sem ponto, seguindo a vírgula", "A respiração acompanha o ritmo da frase", "O pensamento perde-se no meio do rio", "Voltas à vírgula onde a voz ainda era tua", "Descobres o teu próprio ritmo de leitura"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Escolhe uma frase comprida de um livro que ames e lê-a em voz alta, devagar, como quem atravessa um rio a nado. Não saltes nenhuma vírgula: cada uma é um lugar onde a respiração pode pousar. Se o fôlego faltar, para e volta à vírgula anterior — o rio não foge, o livro é paciente. No fim, repara como a atenção ficou mais larga: a frase inteira coube dentro de ti de uma vez. Ler assim é dar ao pensamento o tempo que ele pede.",
        questions: [
          { q: "Como se lê a frase comprida, segundo o áudio?", kind: "literal", options: ["Em voz alta, devagar, como quem atravessa um rio a nado", "Em silêncio, o mais depressa possível", "Saltando as vírgulas"], answer: 0, why: "«Lê-a em voz alta, devagar, como quem atravessa um rio a nado» está literal." },
          { q: "O que é cada vírgula?", kind: "literal", options: ["Um lugar onde a respiração pode pousar", "Um sinal de fim de frase", "Uma ordem para parar de ler"], answer: 0, why: "«Cada uma é um lugar onde a respiração pode pousar» está literal." },
          { q: "Porque é que se volta à vírgula anterior se o fôlego faltar?", kind: "inferencial", options: ["Porque o rio não foge e o livro é paciente", "Porque a frase é impossível", "Porque a vírgula anterior é mais bonita"], answer: 0, why: "«O rio não foge, o livro é paciente»: la relectura no es fracaso, es volver al paso." },
          { q: "Que efeito tem a leitura devagar sobre a atenção?", kind: "inferencial", options: ["Fica mais larga: a frase inteira cabe de uma vez", "Fica mais curta e dispersa", "Desaparece depois de duas frases"], answer: 0, why: "«A atenção ficou mais larga: a frase inteira coube dentro de ti de uma vez»." },
        ],
      },
    },
  ],

  "pt-cu-c2-05": [
    {
      id: "md-pt-c2-05-1", theme: "relax mentale",
      title: "Duas horas antes do plenário", titleEs: "Dos horas antes del plenario", minutes: 2,
      paragraphs: [
        { it: "Faltam duas horas para o plenário e a cabeça do redator tende a virar um salão de delegações: cada frase convoca um país imaginário que se ofende, cada adjetivo promete uma crise. O trabalho mental começa por reconhecer essa multidão como ilusória — o comunicado escreve-se uma linha de cada vez, como quem respira um fôlego de cada vez. Quem escreve para nove países não está a escrever para nove países; está a escrever para a frase seguinte.", es: "Faltan dos horas para el plenario y la cabeza del redactor tiende a convertirse en un salón de delegaciones: cada frase convoca a un país imaginario que se ofende, cada adjetivo promete una crisis. El trabajo mental empieza por reconocer esa multitud como ilusoria — el comunicado se escribe una línea cada vez, como quien respira un aliento cada vez. Quien escribe para nueve países no está escribiendo para nueve países; está escribiendo para la frase siguiente." },
        { it: "A prática serena é devolver a atenção à linha presente: o plenário ainda não chegou, e as reações indignadas vivem apenas na imaginação, que é uma fábrica de futuros que nunca saem da linha de montagem. Quando o pensamento correr para o que dirá a outra delegação, traz-se devagar à vírgula mais próxima. Escrever devagar o que ninguém quer ouvir depressa — como diria a embaixadora — é, também, uma forma de descanso.", es: "La práctica serena es devolver la atención a la línea presente: el plenario todavía no llegó, y las reacciones indignadas viven solo en la imaginación, que es una fábrica de futuros que nunca salen de la cadena de montaje. Cuando el pensamiento corra hacia lo que dirá la otra delegación, se lo trae despacio a la coma más cercana. Escribir despacio lo que nadie quiere oír deprisa — como diría la embajadora — es, también, una forma de descanso." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de protocolo diplomático", "La calma mental del redactor antes del plenario", "Una crónica de una cumbre de jefes de Estado"],
        answer: 1,
        why: "El título anuncia la cuenta atrás antes del plenario: apunta a la cabeza de quien redacta, no al protocolo ni a la crónica.",
      },
      quiz: [
        { q: "Em que tende a transformar-se a cabeça do redator a duas horas do plenário?", kind: "literal", options: ["Num salão de delegações que se ofendem", "Num dicionário de sinónimos", "Num boletim de votos"], answer: 0, why: "«A cabeça do redator tende a virar um salão de delegações» está literal en el primer párrafo." },
        { q: "Porque é que a multidão de países ofendidos é ilusória?", kind: "inferencial", options: ["Porque só existe a frase seguinte, como um fôlego de cada vez", "Porque os delegados já assinaram tudo", "Porque o comunicado está em inglês"], answer: 0, why: "Se infiere de la comparación con la respiración: quien escribe para nueve países solo escribe, de verdad, la línea siguiente." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["Voltar à linha presente acalma a fábrica de futuros da imaginação", "Os comunicados deviam ser escritos por votação", "A pressa é a melhor conselheira do diplomata"], answer: 0, why: "La idea central: el plenario es hipótesis y la línea es real; la serenidad consiste en volver a la coma más cercana." },
      ],
      vf: [
        { text: "As reações indignadas vivem apenas na imaginação do redator.", value: true, why: "«As reações indignadas vivem apenas na imaginação, que é uma fábrica de futuros» está literal." },
        { text: "A imaginação do redator é descrita como um arquivo de declarações antigas.", value: false, why: "La imagen es otra: una fábrica de futuros que nunca salen de la cadena de montaje." },
        { text: "Escrever devagar o que ninguém quer ouvir depressa é uma forma de descanso.", value: true, why: "«Escrever devagar o que ninguém quer ouvir depressa — como diria a embaixadora — é, também, uma forma de descanso»." },
      ],
    },
    {
      id: "md-pt-c2-05-2", theme: "spiritualità",
      title: "A escuta por baixo do eufemismo", titleEs: "La escucha debajo del eufemismo", minutes: 3,
      paragraphs: [
        { it: "O eufemismo diplomático costuma ler-se como evasão, mas exige uma escuta quase monástica: para dizer «avultam dificuldades» é preciso ter ouvido a dificuldade inteira, com nomes, cifras e rostos, antes de a vestir de calma. Quem coleciona fórmulas como quem coleciona selos — «salvo melhor juízo», «em ambiente de compreensão mútua» — na verdade coleciona silêncios alheios: aquilo que as delegações não conseguiram dizer em voz alta.", es: "El eufemismo diplomático suele leerse como evasión, pero exige una escucha casi monástica: para decir «avultam dificuldades» hay que haber oído la dificultad entera, con nombres, cifras y rostros, antes de vestirla de calma. Quien colecciona fórmulas como quien colecciona sellos — «salvo mejor parecer», «en ambiente de comprensión mutua» — en realidad colecciona silencios ajenos: aquello que las delegaciones no consiguieron decir en voz alta." },
        { it: "Essa escuta é uma forma discreta de espiritualidade de ofício: dar abrigo, dentro de uma frase, ao que ninguém ousou formular. O redator que ouve por baixo das palavras escreve menos e entende mais; o que só se ouve a si produz comunicados que soam a cartaz eleitoral. E há um resto de ternura no ofício: reconhecer a dificuldade do outro com brandura, sem o denunciar nem o corrigir — apenas a acomodar, como quem arruma um hóspede cansado na palavra certa.", es: "Esa escucha es una forma discreta de espiritualidad del oficio: dar cobijo, dentro de una frase, a lo que nadie se atrevió a formular. El redactor que oye por debajo de las palabras escribe menos y entiende más; el que solo se oye a sí mismo produce comunicados que suenan a cartel electoral. Y queda un resto de ternura en el oficio: reconocer la dificultad del otro con blandura, sin denunciarlo ni corregirlo — solo acomodarlo, como quien acomoda a un huésped cansado en la palabra justa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un catálogo de sellos y fórmulas oficiales", "Escuchar lo que las delegaciones no dicen, como espiritualidad del oficio", "Una historia del correo diplomático"],
        answer: 1,
        why: "El título anuncia la escucha debajo del eufemismo: apunta a oír lo no dicho, no a la filatelia ni a la historia postal.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Ouvir por baixo das palavras é o núcleo sereno do ofício diplomático", "Os eufemismos existem para enganar o público", "Os comunicados deviam ser escritos em verso"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Dizer «avultam dificuldades» exige ter ouvido a dificuldade inteira", "Quem coleciona fórmulas coleciona silêncios alheios", "Reconhecer a dificuldade do outro com brandura é acomodar um hóspede cansado"],
        distractors: ["A declaração final tem de estar impressa antes das seis", "O delegado angolano coleciona selos desde a infância", "A sede da cimeira fica junto ao Tejo"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Para dizer «avultam dificuldades» é preciso ter ouvido a dificuldade inteira.",
          "Quem coleciona fórmulas coleciona silêncios alheios.",
          "O redator que ouve por baixo das palavras escreve menos e entende mais.",
          "A sessão do plenário está marcada para as dezoito horas.",
          "Reconhecer a dificuldade do outro com brandura é acomodar um hóspede cansado.",
        ],
        intruder: 3,
        why: "El horario de la sesión es logística de la cumbre, ajena a la reflexión sobre la escucha: es el intruso.",
      },
    },
    {
      id: "md-pt-c2-05-3", theme: "qui e ora",
      title: "A linha que existe", titleEs: "La línea que existe", minutes: 2,
      paragraphs: [
        { it: "Na sede da cimeira já se acendem as luzes da cidade e a declaração final tem vinte e sete parágrafos — nenhum deles existe tão plenamente como aquele que está a ser escrito agora. O aqui e o agora do redator cabem numa secretária: o candeeiro de luz branca, o rascunho com margens cheias de anotações, a frase que ainda procura o seu fim. A inquietação mora sempre noutro sítio: no plenário de amanhã, no parágrafo que ontem foi rejeitado.", es: "En la sede de la cumbre ya se encienden las luces de la ciudad y la declaración final tiene veintisiete párrafos — ninguno existe tan plenamente como el que está siendo escrito ahora. El aquí y el ahora del redactor caben en un escritorio: la lámpara de luz blanca, el borrador con los márgenes llenos de anotaciones, la frase que todavía busca su final. La inquietud vive siempre en otro sitio: en el plenario de mañana, en el párrafo que ayer fue rechazado." },
        { it: "A prática é simples de escrever e difícil de cumprir: quando a cabeça fugir para os aplausos finais ou para a crise da manhã, traz-se devagar à linha que existe. Cada frase é um fôlego — inspira-se no início, expira-se no ponto final. Amanhã a declaração será lida em nove bocados de mundo; esta noite é apenas uma linha na secretária, e é nela que se está.", es: "La práctica es sencilla de escribir y difícil de cumplir: cuando la cabeza huya hacia los aplausos finales o hacia la crisis de la mañana, se la trae despacio a la línea que existe. Cada frase es un aliento — se inspira al comienzo, se espira en el punto final. Mañana la declaración será leída en nueve pedazos de mundo; esta noche es solo una línea en el escritorio, y es en ella donde se está." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["El acta de una sesión plenaria", "Escribir la línea presente de una declaración que se leerá mañana", "Una guía de estilo para comunicados oficiales"],
        answer: 1,
        why: "El título opone la línea única que existe a los veintisiete párrafos: apunta a la presencia del redactor, no al acta ni a la guía.",
      },
      sequence: {
        instr: "Ordena los momentos según el texto:",
        events: ["Acendem-se as luzes da cidade na sede da cimeira", "Contas os vinte e sete parágrafos da declaração", "A cabeça foge para o plenário de amanhã", "Trazes devagar a atenção à linha que existe", "Cada frase é um fôlego, do início ao ponto final"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Deixa por um momento os vinte e sete parágrafos e olha só para a linha que escreves agora. Amanhã, esta frase será lida em salas que ainda não conheces, em sotaques que não podes prever; esta noite é apenas tua, ao alcance da tua mão e da tua lâmpada. Respira no início da frase e expira no ponto final: o comunicado inteiro não cabe num único fôlego — mas a linha sim, a linha cabe sempre. Quando o pensamento fugir para o plenário, trá-lo de volta à vírgula mais próxima: é nela que se está.",
        questions: [
          { q: "Onde será a frase lida amanhã, segundo o áudio?", kind: "literal", options: ["Em salas que ainda não conheces", "Na tua própria casa", "Numa escola de Lisboa"], answer: 0, why: "«Esta frase será lida em salas que ainda não conheces, em sotaques que não podes prever» está literal." },
          { q: "O que se faz no ponto final, segundo o áudio?", kind: "literal", options: ["Expira-se", "Recomeça-se a declaração", "Levanta-se a sessão"], answer: 0, why: "«Respira no início da frase e expira no ponto final» está literal." },
          { q: "Porque é que se volta à vírgula mais próxima?", kind: "inferencial", options: ["Porque é nela que se está: a linha é o único presente", "Porque a vírgula corrige o texto sozinha", "Porque o plenário já terminou"], answer: 0, why: "«Quando o pensamento fugir para o plenário, trá-lo de volta à vírgula mais próxima: é nela que se está»: la coma es el lugar del presente." },
          { q: "O que cabe num único fôlego, segundo o áudio?", kind: "inferencial", options: ["A linha", "Os vinte e sete parágrafos", "Todas as salas de amanhã"], answer: 0, why: "«O comunicado inteiro não cabe num único fôlego — mas a linha sim»: solo la línea cabe entera." },
        ],
      },
    },
  ],

  "pt-cu-c2-06": [
    {
      id: "md-pt-c2-06-1", theme: "relax mentale",
      title: "O presente acalma", titleEs: "El presente calma", minutes: 2,
      paragraphs: [
        { it: "Escrever «ela entra» em vez de «ela entrará» tem um efeito que os manuais não contam: a mente descansa. O guião é o único texto que acontece agora e ao mesmo tempo — nele não há anteontem nem depois, há um plano que começa e um plano que acaba. Quem escreve no presente deixa de ensaiar futuros por antecipação, que é o desgaste mais silencioso que se conhece.", es: "Escribir «ela entra» en lugar de «ela entrará» tiene un efecto que los manuales no cuentan: la mente descansa. El guion es el único texto que ocurre ahora y al mismo tiempo — en él no hay antier ni después, hay un plano que empieza y un plano que acaba. Quien escribe en presente deja de ensayar futuros por anticipación, que es el desgaste más silencioso que se conoce." },
        { it: "A disciplina do guião é uma forma de higiene mental: descreve-se apenas o que a câmara vê, e o resto não nos pertence. Essa limitação é uma libertação — quem aceita que a personagem não explica os seus motivos deixa de os vigiar noite fora. Escrever no presente aquilo que se filma no presente ensina, sem dar por isso, a habitar o único tempo que não engana.", es: "La disciplina del guion es una forma de higiene mental: se describe solo lo que la cámara ve, y lo demás no nos pertenece. Esa limitación es una liberación — quien acepta que el personaje no explica sus motivos deja de vigilarlos toda la noche. Escribir en presente aquello que se filma en presente enseña, sin darse cuenta, a habitar el único tiempo que no engaña." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de tiempos verbales", "Escribir en presente como descanso de la mente", "La historia del cine portugués"],
        answer: 1,
        why: "El título une presente y calma: apunta al efecto sereno del tiempo del guion, no al manual ni a la historia del cine.",
      },
      quiz: [
        { q: "Que efeito tem escrever «ela entra» em vez de «ela entrará», segundo o texto?", kind: "literal", options: ["A mente descansa", "O guião fica mais comprido", "A personagem muda de nome"], answer: 0, why: "«Escrever 'ela entra' em vez de 'ela entrará' tem um efeito que os manuais não contam: a mente descansa» está literal." },
        { q: "O que é, no texto, «o desgaste mais silencioso que se conhece»?", kind: "inferencial", options: ["Ensaiar futuros por antecipação", "Escrever cenas de madrugada", "Gravar sem descanso"], answer: 0, why: "Se infiere de la frase: quien escribe en presente deja de ensayar futuros por anticipación, y ese ensayo era el desgaste." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["A limitação de escrever só o que a câmara vê é uma libertação", "Os guiões deviam descrever os pensamentos das personagens", "O presente é o tempo mais difícil da língua"], answer: 0, why: "La idea central: aceptar el encuadre de la cámara libera de vigilar los motivos del personaje y enseña a habitar el tiempo real." },
      ],
      vf: [
        { text: "No guião, descreve-se apenas o que a câmara vê.", value: true, why: "«Descreve-se apenas o que a câmara vê, e o resto não nos pertence» está literal." },
        { text: "Segundo o texto, quem escreve no presente ensaia futuros por antecipação.", value: false, why: "Dice lo contrario: «quem escreve no presente deixa de ensaiar futuros por antecipação»." },
        { text: "Aceitar que a personagem não explica os seus motivos é descrito como uma libertação.", value: true, why: "«Essa limitação é uma libertação — quem aceita que a personagem não explica os seus motivos deixa de os vigiar noite fora»." },
      ],
    },
    {
      id: "md-pt-c2-06-2", theme: "meditazione",
      title: "A câmara não julga", titleEs: "La cámara no juzga", minutes: 2,
      paragraphs: [
        { it: "Meditar pode ser olhar uma tarde inteira como quem olha um plano-sequência: a câmara não julga, não interpreta, não tem pressa — regista o gesto e deixa a intenção em silêncio. «Ela enrola o fio do telefone no dedo, dez voltas, sem falar»: visto sem tribunal, o gesto é apenas um gesto, e a atenção que o acompanha fica limpa. A câmara é a meditadora perfeita porque não acrescenta nada ao que vê.", es: "Meditar puede ser mirar una tarde entera como quien mira un plano secuencia: la cámara no juzga, no interpreta, no tiene prisa — registra el gesto y deja la intención en silencio. «Ella enrolla el hilo del teléfono en el dedo, diez vueltas, sin hablar»: visto sin tribunal, el gesto es solo un gesto, y la atención que lo acompaña queda limpia. La cámara es la meditadora perfecta porque no añade nada a lo que ve." },
        { it: "O treino dura dois minutos: observa-se uma pessoa, uma rua, as próprias mãos, sem lhes acrescentar história nem sentença. Quando a narração interior começar — «ele devia», «eu nunca consigo» — corta-se, como quem corta para outro plano, e recomeça-se a olhar. É assim que se aprende a ver o pensamento como a câmara vê a personagem: presente, inteiro, sem ser acusado de nada.", es: "El entrenamiento dura dos minutos: se observa a una persona, una calle, las propias manos, sin añadirles historia ni sentencia. Cuando la narración interior empiece — «él debería», «yo nunca consigo» — se corta, como quien corta a otro plano, y se vuelve a mirar. Es así como se aprende a ver el pensamiento como la cámara ve al personaje: presente, entero, sin ser acusado de nada." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso de técnica de cámara", "Mirar sin juzgar, como una cámara que registra sin interpretar", "Una crítica a las películas largas"],
        answer: 1,
        why: "El título da a la cámara una virtud humana: apunta a la mirada meditativa, no a la técnica ni a la crítica.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Olhar sem julgar, como uma câmara, é uma forma de meditação", "As câmaras modernas substituem os atores", "Todo o plano-sequência é aborrecido"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A câmara regista o gesto e deixa a intenção em silêncio", "Quando a narração interior começar, corta-se e recomeça-se a olhar", "Vê-se o pensamento presente, inteiro, sem o acusar de nada"],
        distractors: ["A cena foi gravada em cinco dias de rodagem", "A atriz principal estudou em Madrid", "O filme custou dois milhões de euros"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "A câmara da oficina pesa seis quilos.",
          "A câmara não julga, não interpreta, não tem pressa.",
          "O treino dura dois minutos, sem história nem sentença.",
          "Corta-se a narração interior como quem corta para outro plano.",
          "O pensamento vê-se presente, inteiro, sem acusação.",
        ],
        intruder: 0,
        why: "El peso del equipo es un dato técnico del rodaje, ajeno a la mirada meditativa: es el intruso.",
      },
    },
    {
      id: "md-pt-c2-06-3", theme: "relax fisico",
      title: "Antes de «ação»", titleEs: "Antes de «acción»", minutes: 2,
      paragraphs: [
        { it: "Antes de o realizador dizer «ação», o corpo do ator contrai-se todo: o maxilar fecha, os ombros sobem até às orelhas, as mãos apertam um objeto que nem sabiam estar a segurar. Essa tensão antecipada gasta a cena antes de ela começar — a câmara não filma o esforço, mas filma os seus efeitos. O corpo descansado entra no plano como quem entra em casa: sem anúncio.", es: "Antes de que el director diga «acción», el cuerpo del actor se contrae entero: la mandíbula se cierra, los hombros suben hasta las orejas, las manos aprietan un objeto que ni sabían estar sujetando. Esa tensión anticipada gasta la escena antes de que empiece — la cámara no filma el esfuerzo, pero filma sus efectos. El cuerpo descansado entra en el plano como quien entra en casa: sin anunciarse." },
        { it: "A preparação física é curta e discreta: três respirações contadas, o maxilar que se abre como uma porta lenta, os ombros que caem numa expiração, as mãos sacudidas com preguiça de quem vai pintar. Os pés assentam no chão do estúdio — a terra mais firme que há num plano. Quando o corpo deixa de se anunciar, o ator pode simplesmente estar, que é o que a cena lhe pedia desde o princípio.", es: "La preparación física es corta y discreta: tres respiraciones contadas, la mandíbula que se abre como una puerta lenta, los hombros que caen en una espiración, las manos sacudidas con pereza de quien va a pintar. Los pies se asientan en el suelo del estudio — la tierra más firme que hay en un plano. Cuando el cuerpo deja de anunciarse, el actor puede simplemente estar, que es lo que la escena le pedía desde el principio." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un diccionario de términos de rodaje", "Soltar el cuerpo del actor antes de que empiece el plano", "La biografía de un actor famoso"],
        answer: 1,
        why: "El título marca el instante previo a la orden de rodaje: apunta a la preparación física, no al vocabulario ni a la biografía.",
      },
      sequence: {
        instr: "Ordena los pasos de la preparación según el texto:",
        events: ["O corpo contrai-se todo: maxilar fechado, ombros nas orelhas", "Dás três respirações contadas", "Abres o maxilar como uma porta lenta", "Deixas cair os ombros numa expiração", "Sacodes as mãos e assentas os pés no chão"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Antes de ouvires «ação», dispõe o corpo como quem dispõe a mesa: sem pressa, sem ruído. Fecha os olhos uma vez e abre o maxilar devagar, como uma porta que não range. Nos ombros, deixa cair o que lá estava — ninguém precisa de saber o que era. Sacode as mãos e sente os pés no chão frio do estúdio. Agora já não tens de te preparar para a cena: já estás nela, e é isso que a câmara quer filmar.",
        questions: [
          { q: "Como se abre o maxilar, segundo o áudio?", kind: "literal", options: ["Devagar, como uma porta que não range", "Com um estalo rápido", "Com a ajuda das duas mãos"], answer: 0, why: "«Abre o maxilar devagar, como uma porta que não range» está literal." },
          { q: "O que se faz com os ombros, segundo o áudio?", kind: "literal", options: ["Deixa-se cair o que lá estava", "Empurram-se para trás com força", "Sobem até às orelhas"], answer: 0, why: "«Nos ombros, deixa cair o que lá estava» está literal." },
          { q: "Porque é que já não é preciso preparar-se no fim?", kind: "inferencial", options: ["Porque já se está dentro da cena, e é isso que a câmara quer filmar", "Porque o realizador desistiu do plano", "Porque a cena foi cortada do guião"], answer: 0, why: "«Já estás nela, e é isso que a câmara quer filmar»: la preparación termina cuando comienza la presencia." },
          { q: "Que papel tem o chão frio do estúdio na preparação?", kind: "inferencial", options: ["É a base firme onde os pés assentam antes da cena", "É o sinal para começar a falar", "É o lugar onde se deixa o guião"], answer: 0, why: "Se infiere de «sente os pés no chão frio do estúdio»: la base firme sostiene al cuerpo presente." },
        ],
      },
    },
  ],

  "pt-cu-c2-07": [
    {
      id: "md-pt-c2-07-1", theme: "relax fisico",
      title: "A noite em que se contam anáforas", titleEs: "La noche en que se cuentan anáforas", minutes: 2,
      paragraphs: [
        { it: "Na noite do debate, a redação vira um corpo só de olhos secos e pescoços presos: rebobinar respostas, contar anáforas, sublinhar palavras-armadilha — tudo isso mora no punho, na vista e na nuca. A jornalista que se esquece do próprio corpo às três da manhã tem a memória do texto, mas perde a do pescoço. Entre dois replays, o corpo pede o seu minuto, e convém dar-lho.", es: "En la noche del debate, la redacción se convierte en un solo cuerpo de ojos secos y cuellos agarrotados: rebobinar respuestas, contar anáforas, subrayar palabras-trampa — todo eso vive en la muñeca, en la vista y en la nuca. La periodista que se olvida del propio cuerpo a las tres de la mañana tiene la memoria del texto, pero pierde la del cuello. Entre dos repeticiones, el cuerpo pide su minuto, y conviene dárselo." },
        { it: "A pausa cabe num intervalo de publicidade: olha-se pela janela vinte segundos, para longe dos ecrãs; roda-se o pescoço devagar, como quem mexe numa dobradiça antiga; abre-se a mão que sublinha e alonga-se o polegar, cansado de tanto «mérito». Uma expiração comprida a cada repetição — «Portugal merece», outra vez, «Portugal merece» — e o corpo volta a ser um instrumento afinado, capaz de ouvir o que a retórica esconde.", es: "La pausa cabe en un intervalo de publicidad: se mira por la ventana veinte segundos, lejos de las pantallas; se gira el cuello despacio, como quien mueve una bisagra antigua; se abre la mano que subraya y se estira el pulgar, cansado de tanto «mérito». Una espiración larga con cada repetición — «Portugal merece», otra vez, «Portugal merece» — y el cuerpo vuelve a ser un instrumento afinado, capaz de oír lo que la retórica esconde." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una crónica electoral con sondeos", "El cuerpo del periodista durante la noche del debate", "Un tutorial de edición de vídeo"],
        answer: 1,
        why: "El título une la noche de trabajo con la cuenta de anáforas: apunta al cuerpo de la redacción, no a los sondeos ni al montaje.",
      },
      quiz: [
        { q: "Onde mora o trabalho de rebobinar, contar e sublinhar?", kind: "literal", options: ["No punho, na vista e na nuca", "No arquivo do jornal", "No estúdio de gravação"], answer: 0, why: "«Tudo isso mora no punho, na vista e na nuca» está literal en el primer párrafo." },
        { q: "Porque é que a jornalista perde a memória do pescoço?", kind: "inferencial", options: ["Porque o corpo foi esquecido enquanto a cabeça trabalhava", "Porque o pescoço não serve para o ofício", "Porque o debate durou pouco"], answer: 0, why: "Se infiere del contraste: recordó el texto, pero el cuerpo quedó olvidado; por eso pierde la memoria del cuello." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["Dar ao corpo o seu minuto entre replays devolve ao ouvido a precisão", "Os jornalistas deviam dormir durante os debates", "As anáforas deviam ser proibidas por lei"], answer: 0, why: "La idea central: la micropausa convierte de nuevo el cuerpo en un instrumento afinado que oye lo que la retórica esconde." },
      ],
      vf: [
        { text: "Na noite do debate, a redação vira um corpo só de olhos secos e pescoços presos.", value: true, why: "«A redação vira um corpo só de olhos secos e pescoços presos» está literal." },
        { text: "A pausa da noite exige sair do edifício e caminhar meia hora.", value: false, why: "Dice lo contrario: «a pausa cabe num intervalo de publicidade», son micropausas junto a la mesa." },
        { text: "Uma expiração comprida acompanha cada repetição do candidato.", value: true, why: "«Uma expiração comprida a cada repetição — 'Portugal merece', outra vez» está literal." },
      ],
    },
    {
      id: "md-pt-c2-07-2", theme: "qui e ora",
      title: "O monge e a anáfora", titleEs: "El monje y la anáfora", minutes: 2,
      paragraphs: [
        { it: "Contar anáforas é um trabalho de monge: «Portugal merece» quatro vezes, «não vou desistir» duas, e cada uma pede para ser contada uma vez só, como quem conta fôlegos numa meditação sentada. A retórica gosta de contabilidade — mas a contabilidade, essa, gosta de presença. Quem conta depressa engana-se; quem conta presente ouve a repetição a ganhar sentido ou a perder o que nunca teve.", es: "Contar anáforas es un trabajo de monje: «Portugal merece» cuatro veces, «no voy a desistir» dos, y cada una pide ser contada una sola vez, como quien cuenta alientos en una meditación sentada. La retórica gusta de contabilidad — pero la contabilidad, esa, gusta de presencia. Quien cuenta deprisa se equivoca; quien cuenta presente oye la repetición ganar sentido o perder lo que nunca tuvo." },
        { it: "A prática cabe numa regra curta: uma repetição de cada vez, sem saltar para a manchete antes do fim da contagem. A palavra que está a ser rebobinada neste instante é a única da noite; a análise que corre à frente da transcrição é opinião com pressa. Contar devagar é uma forma respeitosa de ouvir o que os políticos dizem — e também o que a própria cabeça diz enquanto conta.", es: "La práctica cabe en una regla corta: una repetición cada vez, sin saltar al titular antes de acabar la cuenta. La palabra que está siendo rebobinada en este instante es la única de la noche; el análisis que corre por delante de la transcripción es opinión con prisa. Contar despacio es una forma respetuosa de oír lo que dicen los políticos — y también lo que dice la propia cabeza mientras cuenta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un tratado de métrica poética", "Contar repeticiones, una a una, como práctica de presencia", "Cómo escribir titulares virales"],
        answer: 1,
        why: "El título une el oficio monástico y la figura retórica: apunta a la presencia de quien cuenta, no a la métrica ni al titular.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Contar repetições devagar, no presente, é a disciplina do analista", "As anáforas deviam ser cortadas dos debates", "A contabilidade é inútil para a retórica"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A retórica gosta de contabilidade e a contabilidade gosta de presença", "Quem conta presente ouve a repetição ganhar sentido ou perder o que nunca teve", "A análise que corre à frente da transcrição é opinião com pressa"],
        distractors: ["O debate começou às vinte e uma horas", "A transcrição tem quarenta páginas", "A jornalista Helena escreveu três livros"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Contar anáforas é um trabalho de monge.",
          "Quem conta depressa engana-se; quem conta presente, ouve.",
          "A palavra rebobinada neste instante é a única da noite.",
          "Contar devagar é uma forma respeitosa de ouvir.",
          "O estúdio do debate tem lugar para quinhentos convidados.",
        ],
        intruder: 4,
        why: "El aforo del estudio es un dato del evento, ajeno a la presencia de quien cuenta: es el intruso.",
      },
    },
    {
      id: "md-pt-c2-07-3", theme: "spiritualità",
      title: "O futuro que promete", titleEs: "El futuro que promete", minutes: 3,
      paragraphs: [
        { it: "Há um risco espiritual no futuro de promessa: «Portugal será», «há de acontecer» — o anseio muda-se para um tempo verbal que nunca chega, e a pessoa fica à espera na gare de um comboio sem horário. Analisar esse futuro é um ofício; habitá-lo é uma forma fina de desespero. A promessa quer ser ouvida, não acreditada às cegas: entre as duas atitudes cabe uma vida inteira de serenidade.", es: "Hay un riesgo espiritual en el futuro de promesa: «Portugal será», «habrá de suceder» — el anhelo se muda a un tiempo verbal que nunca llega, y la persona queda esperando en la estación de un tren sin horario. Analizar ese futuro es un oficio; habitarlo es una forma fina de desesperación. La promesa quiere ser oída, no creída a ciegas: entre las dos actitudes cabe una vida entera de serenidad." },
        { it: "A prática serena faz-se com os pés no chão do presente: enquanto os ouvidos escutam o amanhã da promessa, os olhos leem o país que existe hoje, com os seus números e as suas filas. Distinguir promessa de descrição é uma forma de respeito — pelo eleitor e pela língua. E a esperança não desaparece por isso: muda de casa, deixa o futuro que foi prometido e passa a morar na pergunta honesta do presente.", es: "La práctica serena se hace con los pies en el suelo del presente: mientras los oídos escuchan el mañana de la promesa, los ojos leen el país que existe hoy, con sus números y sus colas. Distinguir promesa de descripción es una forma de respeto — por el elector y por la lengua. Y la esperanza no desaparece por eso: cambia de casa, deja el futuro que fue prometido y pasa a vivir en la pregunta honesta del presente." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un análisis de resultados electorales", "El futuro de promesa como trampa y la serenidad del presente", "Una historia de los ferrocarriles portugueses"],
        answer: 1,
        why: "El título pone la promesa en el tiempo verbal: apunta al riesgo de habitar el futuro, no al escrutinio ni al ferrocarril.",
      },
      sequence: {
        instr: "Ordena los momentos según el texto:",
        events: ["O político promete: «Portugal será»", "O anseio muda-se para um tempo verbal que nunca chega", "Ficas à espera na gare de um comboio sem horário", "Pousas os olhos no país que existe hoje", "A esperança muda de casa e mora na pergunta do presente"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Quando ouvires um futuro de promessa — «será», «há de vir» — conta até dois antes de acreditares. Pergunta ao texto do discurso: isto é uma promessa ou uma descrição? Ninguém te pede que desconfies de tudo; pede-se-te apenas que saibas onde estás quando ouves. Os pés no dia de hoje, os ouvidos no amanhã prometido: essa distância é o teu lugar de trabalho. E se a promessa for generosa, deixa-a ser ouvida — promessa boa não tem medo de perguntas.",
        questions: [
          { q: "Até onde se conta antes de acreditar num futuro de promessa?", kind: "literal", options: ["Até dois", "Até dez", "Até ao fim do discurso"], answer: 0, why: "«Conta até dois antes de acreditares» está literal." },
          { q: "Onde estão os pés, segundo o áudio?", kind: "literal", options: ["No dia de hoje", "No amanhã prometido", "Na gare de comboio"], answer: 0, why: "«Os pés no dia de hoje, os ouvidos no amanhã prometido» está literal." },
          { q: "Que distância é chamada «o teu lugar de trabalho»?", kind: "inferencial", options: ["A que separa os pés de hoje dos ouvidos do amanhã", "A que separa dois partidos", "A que separa o estúdio da redação"], answer: 0, why: "Se infiere del audio: esa distancia entre el hoy y el mañana prometido es donde trabaja el analista sereno." },
          { q: "Porque é que a promessa boa não tem medo de perguntas?", kind: "inferencial", options: ["Porque aguenta ser ouvida com serenidade, sem cegueira", "Porque já foi aprovada por lei", "Porque o orador a repetiu quatro vezes"], answer: 0, why: "«Deixa-a ser ouvida — promessa boa não tem medo de perguntas»: la promesa honesta sobrevive al escrutinio." },
        ],
      },
    },
  ],

  "pt-cu-c2-08": [
    {
      id: "md-pt-c2-08-1", theme: "relax fisico",
      title: "As costas do tradutor", titleEs: "La espalda del traductor", minutes: 2,
      paragraphs: [
        { it: "Diz o revisor, com quarenta anos de ofício nas costas, que um tradutor se mede pela coluna: horas dobradas sobre a raia, o pescoço adiantado como quem quer ouvir melhor a frase, os olhos cansados de transportar palavras de uma margem para a outra. O corpo do tradutor é um animal de secretária — e os animais de secretária precisam de alongamentos como os cães precisam de passeio.", es: "Dice el revisor, con cuarenta años de oficio a la espalda, que a un traductor se lo mide por la columna: horas dobladas sobre la raya, el cuello adelantado como quien quiere oír mejor la frase, los ojos cansados de transportar palabras de una margen a la otra. El cuerpo del traductor es un animal de escritorio — y los animales de escritorio necesitan estiramientos como los perros necesitan paseo." },
        { it: "A pausa faz-se sem perder o lugar no texto: recosta-se, abre-se o peito como quem abre um livro pelo meio, rodam-se os ombros duas vezes. O lápis azul pousa na página e espera — não é ele que se cansa, somos nós. Um olhar pela janela ao fundo da rua, uma expiração comprida, e a frase espanhola volta a ser uma frase e não um enigma: o corpo descansado traduz melhor porque já não tem medo da página.", es: "La pausa se hace sin perder el lugar en el texto: uno se recuesta, se abre el pecho como quien abre un libro por la mitad, se giran los hombros dos veces. El lápiz azul se posa en la página y espera — no es él quien se cansa, somos nosotros. Una mirada por la ventana al fondo de la calle, una espiración larga, y la frase española vuelve a ser una frase y no un enigma: el cuerpo descansado traduce mejor porque ya no le teme a la página." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un tratado de ergonomía de oficina", "Cuidar el cuerpo del traductor entre líneas", "La historia del lápiz azul"],
        answer: 1,
        why: "El título anuncia la espalda del oficio: apunta al cuidado físico del traductor, no a la ergonomía general ni al instrumento.",
      },
      quiz: [
        { q: "Como se mede um tradutor, segundo o revisor?", kind: "literal", options: ["Pela coluna", "Pelo número de livros", "Pelo sotaque"], answer: 0, why: "«Um tradutor se mede pela coluna» está literal en la apertura." },
        { q: "Porque é que o lápis azul pousa na página e espera?", kind: "inferencial", options: ["Porque quem se cansa é o corpo, não o lápis", "Porque o lápis está partido", "Porque a página está molhada"], answer: 0, why: "«Não é ele que se cansa, somos nós»: la fatiga es del traductor, no del instrumento." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["O corpo descansado traduz melhor porque perde o medo da página", "A tradução é um ofício impossível", "Os revisores deviam alongar os tradutores à força"], answer: 0, why: "La idea central: la pausa física devuelve a la frase su condición de frase y quita el miedo a la página." },
      ],
      vf: [
        { text: "O corpo do tradutor é comparado a um animal de secretária.", value: true, why: "«O corpo do tradutor é um animal de secretária» está literal." },
        { text: "A pausa faz-se perdendo o lugar no texto.", value: false, why: "Dice lo contrario: «a pausa faz-se sem perder o lugar no texto»." },
        { text: "Depois da expiração comprida, a frase espanhola volta a ser uma frase e não um enigma.", value: true, why: "«A frase espanhola volta a ser uma frase e não um enigma» está literal." },
      ],
    },
    {
      id: "md-pt-c2-08-2", theme: "meditazione",
      title: "Duas línguas, um fôlego", titleEs: "Dos lenguas, un aliento", minutes: 3,
      paragraphs: [
        { it: "Meditar na raia é reconhecer que se habita duas casas sem trair nenhuma: inspira-se numa língua, expira-se na outra, e o fôlego — esse — pertence às duas. O falso amigo é o porteiro que avisa: cuidado, esta palavra que parece tua não é tua. «Esquisitíssimo» não é «exquisitísimo», e a confusão, em vez de humilhar, ensina: quem traduz vive descalço entre duas alcatifas, e é essa a sua riqueza.", es: "Meditar en la raya es reconocer que se habitan dos casas sin traicionar ninguna: se inspira en una lengua, se espira en la otra, y el aliento — ese — pertenece a ambas. El falso amigo es el portero que avisa: cuidado, esta palabra que parece tuya no es tuya. «Esquisitíssimo» no es «exquisitísimo», y la confusión, en vez de humillar, enseña: quien traduce vive descalzo entre dos alfombras, y esa es su riqueza." },
        { it: "A prática serena faz-se quando as duas vozes discutem lá dentro — a que leu o conto e a que o vai reescrever: não se julga nenhuma, observam-se como duas pessoas de família à mesa, cada uma com a sua razão e o seu sotaque. A tradução boa não vence a discussão; acontece quando a discussão se cansa. Quem espera por esse cansaço tranquilo entrega o texto no prazo — e entrega-se inteiro sem se perder.", es: "La práctica serena se hace cuando las dos voces discuten ahí dentro — la que leyó el cuento y la que lo va a reescribir: no se juzga a ninguna, se las observa como a dos personas de familia en la mesa, cada una con su razón y su acento. La traducción buena no gana la discusión; sucede cuando la discusión se cansa. Quien espera ese cansancio tranquilo entrega el texto en plazo — y se entrega entero sin perderse." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un diccionario de falsos amigos", "Habitar dos lenguas sin traicionar ninguna, con calma", "Una guía de alfombras persas"],
        answer: 1,
        why: "El título reparte el aliento entre dos lenguas: apunta a la convivencia serena, no al diccionario ni a la decoración.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Habitar duas línguas com serenidade é a riqueza e o treino do tradutor", "O tradutor deve escolher uma língua e esquecer a outra", "Os falsos amigos deviam ser banidos dos dicionários"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Inspira-se numa língua e expira-se na outra: o fôlego pertence às duas", "O falso amigo é o porteiro que avisa que a palavra não é tua", "A tradução acontece quando a discussão entre as vozes se cansa"],
        distractors: ["O conto tem cento e vinte páginas", "A editora Rosário fundou a casa editora em mil novecentos e oitenta", "A tradução foi encomendada em fevereiro"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Habitar duas casas não é trair nenhuma.",
          "O falso amigo é o porteiro que avisa.",
          "As duas vozes observam-se como pessoas de família à mesa.",
          "O revisor Mário recebeu um prémio de tradução em Madrid.",
          "A tradução boa acontece quando a discussão se cansa.",
        ],
        intruder: 3,
        why: "El premio del revisor es una distinción biográfica ajena a la meditación entre lenguas: es el intruso.",
      },
    },
    {
      id: "md-pt-c2-08-3", theme: "relax mentale",
      title: "O erro que passou", titleEs: "El error que pasó", minutes: 2,
      paragraphs: [
        { it: "O erro escapou, a editora leu-o em voz alta, e a cabeça do tradutor passou a repeti-lo toda a noite, como um disco que só sabe uma canção: ali estava o elogio, e eu fiz uma ofensa. O relaxamento mental começa por desligar esse disco. O erro já passou pela sala, foi visto, será corrigido a lápis; repeti-lo por dentro não o corrige — apenas o multiplica.", es: "El error se escapó, la editora lo leyó en voz alta, y la cabeza del traductor se puso a repetirlo toda la noche, como un disco que solo sabe una canción: ahí estaba el elogio, y yo hice un insulto. La relajación mental empieza por apagar ese disco. El error ya pasó por la sala, fue visto, será corregido a lápiz; repetirlo por dentro no lo corrige — solo lo multiplica." },
        { it: "A prática tem a simplicidade das coisas difíceis: nomeia-se o erro uma vez, faz-se-lhe uma vénia breve e volta-se à linha seguinte. Quarenta anos de lápis azul ensinaram ao revisor que todo o tradutor carrega uma lista de erros — e que a lista é um jardim, não um tribunal: rega-se, poda-se, segue-se em frente. Esta noite, o tradutor pode dormir com as duas línguas a dormir também, cada uma na sua casa, sem discussão.", es: "La práctica tiene la sencillez de las cosas difíciles: se nombra el error una vez, se le hace una reverencia breve y se vuelve a la línea siguiente. Cuarenta años de lápiz azul enseñaron al revisor que todo traductor carga una lista de errores — y que la lista es un jardín, no un tribunal: se riega, se poda, se sigue adelante. Esta noche, el traductor puede dormir con las dos lenguas durmiendo también, cada una en su casa, sin discusión." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de corrección de pruebas", "Soltar el error cometido y dormir en paz", "La historia del disco de vinilo"],
        answer: 1,
        why: "El título anuncia el error que ya pasó: apunta a soltarlo, no a la corrección profesional ni al objeto.",
      },
      sequence: {
        instr: "Ordena los momentos según el texto:",
        events: ["O erro escapa-te e a editora lê-o em voz alta", "A cabeça repete o erro toda a noite, como um disco", "Desligas o disco e nomeias o erro uma vez", "Fazes-lhe uma vénia breve e voltas à linha seguinte", "Dormes com as duas línguas a dormir na sua casa"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "O erro já foi visto, já foi lido em voz alta, já tem lápis azul por cima: agora pertence ao papel, não a ti. Deixa-o ficar lá uma noite inteira, sem o levares para a cama. Se ele vier ter contigo ao escurecer, diz-lhe apenas: amanhã corrigo-te, hoje descanso. Há uma forma boa de se ser imperfeito — chama-se ofício. Dorme; as duas línguas dormem também, cada uma na sua casa, e de manhã a frase certa chega com o café.",
        questions: [
          { q: "A quem pertence agora o erro, segundo o áudio?", kind: "literal", options: ["Ao papel", "Ao café", "Ao revisor de Madrid"], answer: 0, why: "«Agora pertence ao papel, não a ti» está literal." },
          { q: "O que se diz ao erro se ele vier ao escurecer?", kind: "literal", options: ["Amanhã corrigo-te, hoje descanso", "Nunca mais te quero ver", "Vai pedir desculpa à editora"], answer: 0, why: "«Diz-lhe apenas: amanhã corrigo-te, hoje descanso» está literal." },
          { q: "Porque é que ser imperfeito é chamado ofício?", kind: "inferencial", options: ["Porque o erro faz parte do trabalho e corrige-se de manhã, com descanso", "Porque ninguém traduz bem em português", "Porque o papel aceita qualquer erro"], answer: 0, why: "Se infiere del audio: el error se corrige mañana; el descanso pertenece al oficio, no a la culpa." },
          { q: "Quando chega a frase certa, segundo o áudio?", kind: "inferencial", options: ["De manhã, com o café", "À meia-noite", "No dia da entrega"], answer: 0, why: "«De manhã a frase certa chega com o café»: el descanso nocturno trae la solución." },
        ],
      },
    },
  ],

  "pt-cu-c2-09": [
    {
      id: "md-pt-c2-09-1", theme: "meditazione",
      title: "Desinflar", titleEs: "Desinflar", minutes: 2,
      paragraphs: [
        { it: "Há uma meditação escondida no ofício de desinflar: transformar «a realização de uma análise» em «analisamos» é esvaziar de ar não só o texto, mas também quem o escreveu. A prosa inchada é ansiedade com acento gráfico — medo de que o verbo simples não pareça suficiente. Cortar devagar, com o lápis de dois bicos, é uma prática de humildade: a cada substantivo abatido, o corpo inteiro desinfla um pouco e a respiração desce.", es: "Hay una meditación escondida en el oficio de desinflar: transformar «a realização de uma análise» em «analisamos» es vaciar de aire no solo el texto, sino también a quien lo escribió. La prosa hinchada es ansiedad con acento gráfico — miedo de que el verbo simple no parezca suficiente. Cortar despacio, con el lápiz de dos puntas, es una práctica de humildad: con cada sustantivo abatido, el cuerpo entero se desinfla un poco y la respiración baja." },
        { it: "No gabinete do editor, uma primeira edição emoldurada olha para a mesa onde o rascunho morre aos bocados — e a cena tem qualquer coisa de cerimónia serena. Medita-se cortando: o que sobra tem de ser músculo, não enfeite; o verbo que substitui três substantivos é uma respiração completa. Quem desinfla o texto aprende, sem dar por isso, a desinflar-se a si.", es: "En el despacho del editor, una primera edición enmarcada mira la mesa donde el borrador muere a pedazos — y la escena tiene algo de ceremonia serena. Se medita cortando: lo que sobra tiene que ser músculo, no adorno; el verbo que sustituye tres sustantivos es una respiración completa. Quien desinfla el texto aprende, sin darse cuenta, a desinflarse a sí mismo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un tratado de análisis sintáctico", "Cortar y desinflar la prosa como práctica de humildad", "Cómo enmarcar primeras ediciones"],
        answer: 1,
        why: "El título nombra el gesto de quitar aire: apunta a la prosa y a quien la escribe, no a la sintaxis ni al marco.",
      },
      quiz: [
        { q: "Em que se transforma «a realização de uma análise», segundo o texto?", kind: "literal", options: ["Analisamos", "Um substantivo maior", "Uma nota de rodapé"], answer: 0, why: "«Transformar 'a realização de uma análise' em 'analisamos'» está literal." },
        { q: "Porque é que a prosa inchada é ansiedade com acento gráfico?", kind: "inferencial", options: ["Porque incha o texto com medo de o verbo simples não parecer suficiente", "Porque os substantivos são proibidos", "Porque o editor gosta de frases compridas"], answer: 0, why: "Se infiere de la definición: la prosa se hincha por miedo a que el verbo simple no parezca suficiente." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["Quem desinfla o texto aprende a desinflar-se a si", "Todo o texto devia ter oitenta palavras", "Os editores existem para humilhar estreantes"], answer: 0, why: "La idea central: cortar con lápiz desinfla el texto y al propio cuerpo; el músculo queda, el aire se va." },
      ],
      vf: [
        { text: "A prosa inchada é descrita como ansiedade com acento gráfico.", value: true, why: "«A prosa inchada é ansiedade com acento gráfico» está literal." },
        { text: "O que sobra depois do corte tem de ser enfeite, não músculo.", value: false, why: "Dice lo contrario: «o que sobra tem de ser músculo, não enfeite»." },
        { text: "O verbo que substitui três substantivos é chamado uma respiração completa.", value: true, why: "«O verbo que substitui três substantivos é uma respiração completa» está literal." },
      ],
    },
    {
      id: "md-pt-c2-09-2", theme: "relax fisico",
      title: "A mão e o lápis de dois bicos", titleEs: "La mano y el lápiz de dos puntas", minutes: 2,
      paragraphs: [
        { it: "O lápis de dois bicos trava-se na mão como um remo, e a mão que corta aperta-se a cada supressão — o dedo médio encurva, o polegar empalidece, o pulso endurece sem pedir licença. O editor vê aquilo à mesa toda: a ansiedade da revisão mora na mão antes de chegar à página. Quem corta trinta por cento do próprio texto devia ter o aquecimento de um desportista.", es: "El lápiz de dos puntas se aferra a la mano como un remo, y la mano que corta se aprieta con cada supresión — el dedo medio se curva, el pulgar se pone pálido, la muñeca se endurece sin pedir licencia. El editor lo ve desde la mesa entera: la ansiedad de la revisión vive en la mano antes de llegar a la página. Quien corta el treinta por ciento de su propio texto debería tener el calentamiento de un deportista." },
        { it: "A pausa faz-se a cada página: pousa-se o lápis, abre-se a mão como uma concha, tocam-se as teclas invisíveis de um piano que não está lá. Roda-se o pulso devagar e respira-se uma vez comprida em honra das palavras que partiram. A mão que descansa corta com mais precisão — e o texto perde o que lhe sobra sem perder o que lhe é essencial.", es: "La pausa se hace en cada página: se posa el lápiz, se abre la mano como una concha, se tocan las teclas invisibles de un piano que no está ahí. Se gira la muñeca despacio y se respira una vez larga en honor de las palabras que partieron. La mano que descansa corta con más precisión — y el texto pierde lo que le sobra sin perder lo que le es esencial." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una reseña de instrumentos de dibujo", "La mano del escritor durante la revisión con lápiz", "Un método de mecanografía rápida"],
        answer: 1,
        why: "El título une la mano y el lápiz de la revisión: apunta al cuerpo que corta, no al instrumento ni a la máquina de escribir.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["A mão que corta precisa de pausas: a ansiedade da revisão mora-lhe antes de chegar à página", "Os lápis de dois bicos são uma invenção inútil", "Cortar trinta por cento arruína qualquer romance"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["O dedo médio encurva e o polegar empalidece a cada supressão", "Pousa-se o lápis e tocam-se as teclas invisíveis de um piano", "A mão que descansa corta com mais precisão"],
        distractors: ["O editor Nuno usa óculos redondos", "O rascunho tem duzentas e quarenta páginas", "A editora abre ao sábado de manhã"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "A ansiedade da revisão mora na mão antes de chegar à página.",
          "O gabinete do editor fica no terceiro andar.",
          "Pousa-se o lápis e abre-se a mão como uma concha.",
          "Respira-se uma vez comprida em honra das palavras que partiram.",
          "A mão que descansa corta com mais precisão.",
        ],
        intruder: 1,
        why: "El piso del despacho es un dato del edificio, ajeno al cuidado de la mano: es el intruso.",
      },
    },
    {
      id: "md-pt-c2-09-3", theme: "relax mentale",
      title: "O ritual da página limpa", titleEs: "El ritual de la página limpia", minutes: 3,
      paragraphs: [
        { it: "Passar a limpo é o ritual mais sossegado da escrita: o rascunho coberto de riscos fica para trás e a página nova recebe só o que sobreviveu. A cabeça devia passar a limpo com o texto — deixar no papel velho as hesitações, as três aberturas que não vingaram, o medo de cada corte. Há quem copie a frase e leve consigo a dúvida; passar a limpo a sério é copiar a frase e deixar a dúvida ficar.", es: "Pasar a limpio es el ritual más sosegado de la escritura: el borrador cubierto de tachones queda atrás y la página nueva recibe solo lo que sobrevivió. La cabeza debería pasar a limpio con el texto — dejar en el papel viejo las vacilaciones, las tres aperturas que no prosperaron, el miedo de cada corte. Hay quien copia la frase y se lleva consigo la duda; pasar a limpio de verdad es copiar la frase y dejar que la duda se quede." },
        { it: "A prática é simples: copia-se devagar, um parágrafo de cada vez, sem voltar a discutir o que já foi decidido. A página limpa não é um julgamento — é um presente que se faz a si mesmo ao fim de uma manhã de tesoura. O texto que sai mais leve leva o escritor mais leve pela mão; e o cesto do papel fica com a parte ansiosa do ofício, essa que nunca mereceu ser publicada.", es: "La práctica es sencilla: se copia despacio, un párrafo cada vez, sin volver a discutir lo ya decidido. La página limpia no es un juicio — es un regalo que uno se hace al final de una mañana de tijera. El texto que sale más ligero lleva al escritor más ligero de la mano; y la papelera se queda con la parte ansiosa del oficio, esa que nunca mereció ser publicada." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un tutorial de caligrafía", "Pasar a limpio el texto y la mente: dejar atrás la duda", "La historia del papel de estraza"],
        answer: 1,
        why: "El título nombra el ritual de la copia limpia: apunta a texto y mente a la vez, no a la letra ni al soporte.",
      },
      sequence: {
        instr: "Ordena los pasos del ritual según el texto:",
        events: ["O rascunho coberto de riscos fica para trás", "Copias devagar um parágrafo de cada vez", "Deixas a dúvida no papel velho", "A página limpa recebe só o que sobreviveu", "O cesto fica com a parte ansiosa do ofício"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Vais passar a limpo agora: escolhe a página mais arriscada e copia-a devagar, letra a letra, sem discutires outra vez com o lápis. Enquanto copias, repara no que não estás a levar: as hesitações ficam no papel velho, tu não precisas de as carregar. A página nova não julga ninguém — recebe o que venceu e pronto. No fim, dobra o rascunho com respeito e deixa-o descansar no cesto: ele fez o seu trabalho, que era ficar para trás.",
        questions: [
          { q: "Que página se escolhe, segundo o áudio?", kind: "literal", options: ["A mais arriscada", "A mais curta", "A última do capítulo"], answer: 0, why: "«Escolhe a página mais arriscada e copia-a devagar» está literal." },
          { q: "O que fica no papel velho?", kind: "literal", options: ["As hesitações", "As palavras bonitas", "O título do livro"], answer: 0, why: "«As hesitações ficam no papel velho» está literal." },
          { q: "Porque é que o rascunho é dobrado com respeito?", kind: "inferencial", options: ["Porque fez o seu trabalho, que era ficar para trás", "Porque vai ser enviado ao editor", "Porque tem a assinatura do autor"], answer: 0, why: "«Ele fez o seu trabalho, que era ficar para trás»: el borrador cumplió su función y merece descanso." },
          { q: "O que significa «a página nova não julga ninguém»?", kind: "inferencial", options: ["Que recebe o que venceu sem transformar a cópia em julgamento", "Que está em branco e ninguém a lê", "Que a limpeza dispensa o editor"], answer: 0, why: "Se infiere del audio: la copia limpia es regalo, no juicio; recibir lo que venció basta." },
        ],
      },
    },
  ],

  "pt-cu-c2-10": [
    {
      id: "md-pt-c2-10-1", theme: "spiritualità",
      title: "A voz de oitenta e sete anos", titleEs: "La voz de ochenta y siete años", minutes: 3,
      paragraphs: [
        { it: "Ouvir uma voz de oitenta e sete anos é um ato espiritual que não precisa de religião: nela cabe um mundo — a bouça de madrugada, o gado que se contava ao romper do dia, o mirandês que se dizia lá em cima e se calava cá em baixo. A gravadora não guarda apenas palavras: guarda um tempo inteiro de respiração. Quem escuta assim, sem pressa e sem perguntas a mais, aprende uma forma rara de respeito.", es: "Escuchar una voz de ochenta y siete años es un acto espiritual que no necesita religión: en ella cabe un mundo — la mata de madrugada, el ganado que se contaba al romper el día, el mirandés que se hablaba allá arriba y se callaba aquí abajo. La grabadora no guarda solo palabras: guarda un tiempo entero de respiración. Quien escucha así, sin prisa y sin preguntas de más, aprende una forma rara de respeto." },
        { it: "A escuta faz-se como quem recebe um mais velho à mesa: atenção inteira, nenhuma correção, pressa nenhuma. Quando o provérbio chega — «que a terra era pouca e a fome era grande» — não se pede fonte nem data; agradece-se por dentro, como quem agradece o pão. Essa gratidão sem destinatário é a forma mais antiga de espiritualidade doméstica: ninguém a ouve, e toda a sala fica melhor.", es: "La escucha se hace como quien recibe a un mayor en la mesa: atención entera, ninguna corrección, prisa ninguna. Cuando llega el refrán — «que la tierra era poca y el hambre era grande» — no se pide fuente ni fecha; se agradece por dentro, como quien agradece el pan. Esa gratitud sin destinatario es la forma más antigua de espiritualidad doméstica: nadie la oye, y toda la sala queda mejor." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un estudio fonético del mirandés", "Escuchar una voz mayor como acto de respeto y gratitud", "Un inventario de proverbios transmontanos"],
        answer: 1,
        why: "El título anuncia la edad de la voz: apunta a la escucha respetuosa, no a la fonética ni al inventario.",
      },
      quiz: [
        { q: "O que guarda a gravadora, além de palavras?", kind: "literal", options: ["Um tempo inteiro de respiração", "Fotografias da bouça", "O mapa de Miranda"], answer: 0, why: "«A gravadora não guarda apenas palavras: guarda um tempo inteiro de respiração» está literal." },
        { q: "Porque é que não se pede fonte nem data ao provérbio?", kind: "inferencial", options: ["Porque o provérbio se recebe como o pão: agradece-se por dentro", "Porque os provérbios não têm autores", "Porque a gravadora está avariada"], answer: 0, why: "Se infiere de la comparación con el pan: el refrán se recibe y se agradece, no se documenta." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["Escutar sem pressa nem correção é uma forma rara de respeito — e de espiritualidade doméstica", "O mirandês devia ser ensinado em todo o país", "As entrevistas deviam ser mais curtas"], answer: 0, why: "La idea central: la escucha íntegra del mayor es un acto espiritual laico que mejora la sala entera." },
      ],
      vf: [
        { text: "A escuta faz-se como quem recebe um mais velho à mesa.", value: true, why: "«A escuta faz-se como quem recebe um mais velho à mesa» está literal." },
        { text: "O texto defende corrigir as formas antigas que o entrevistado usa.", value: false, why: "Dice lo contrario: la escucha se hace con «atenção inteira, nenhuma correção, pressa nenhuma»." },
        { text: "A gratidão sem destinatário é chamada a forma mais antiga de espiritualidade doméstica.", value: true, why: "«Essa gratidão sem destinatário é a forma mais antiga de espiritualidade doméstica» está literal." },
      ],
    },
    {
      id: "md-pt-c2-10-2", theme: "qui e ora",
      title: "A gravadora a rolar", titleEs: "La grabadora rodando", minutes: 2,
      paragraphs: [
        { it: "Quando a gravadora começa a rolar, o presente fica mais nítido: a frase que está a ser dita é a única que existe — a anterior já é arquivo, a seguinte ainda é possibilidade. «Fale como fala em casa», pede a arquivista, e o pedido é um convite à presença: ninguém conta bem a própria vida a representar. A cerimónia estorva; a voz a sério, essa, chega inteira ao arquivo.", es: "Cuando la grabadora empieza a rodar, el presente se vuelve más nítido: la frase que está siendo dicha es la única que existe — la anterior ya es archivo, la siguiente todavía es posibilidad. «Hable como habla en casa», pide la archivera, y la petición es una invitación a la presencia: nadie cuenta bien su propia vida actuando. La ceremonia estorba; la voz de verdad, esa, llega entera al archivo." },
        { it: "Também quem pergunta treina o aqui e o agora: ouvir a resposta até ao fim, sem preparar a pergunta seguinte enquanto a voz do outro ainda vive. O silêncio depois da resposta não é vazio — é o lugar onde a história se lembra do resto. As melhores perguntas de um arquivo oral nascem do que se acabou de ouvir, não do papel preparado na véspera.", es: "También quien pregunta entrena el aquí y el ahora: oír la respuesta hasta el final, sin preparar la pregunta siguiente mientras la voz del otro todavía vive. El silencio después de la respuesta no es vacío — es el lugar donde la historia se acuerda del resto. Las mejores preguntas de un archivo oral nacen de lo que se acaba de oír, no del papel preparado la víspera." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de equipos de grabación", "Presencia ante la grabadora: solo existe la frase que se dice ahora", "Cómo archivar cintas magnéticas"],
        answer: 1,
        why: "El título fija el instante de la grabación: apunta a la presencia, no al equipo ni al almacenaje.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["A gravação pede presença: só a frase dita agora existe, sem cerimónia", "As entrevistas deviam ser decoradas de memória", "O arquivo oral é inútil sem vídeo"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A frase anterior já é arquivo e a seguinte ainda é possibilidade", "O silêncio depois da resposta é onde a história se lembra do resto", "As melhores perguntas nascem do que se acabou de ouvir"],
        distractors: ["O microfone foi comprado em Bragança", "A entrevista termina às cinco da tarde", "O arquivo tem quatrocentas horas de gravação"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "A frase que está a ser dita é a única que existe.",
          "A cerimónia estorva; a voz a sério chega inteira.",
          "O silêncio depois da resposta é onde a história se lembra do resto.",
          "A estrada até Miranda fecha no inverno.",
          "As melhores perguntas nascem do que se acabou de ouvir.",
        ],
        intruder: 3,
        why: "El estado de la carretera es geografía ajena a la escucha presente: es el intruso.",
      },
    },
    {
      id: "md-pt-c2-10-3", theme: "relax fisico",
      title: "O corpo que pergunta", titleEs: "El cuerpo que pregunta", minutes: 2,
      paragraphs: [
        { it: "O corpo de quem entrevista tende a inclinar-se todo para a frente, como se a atenção fosse uma questão de equilíbrio: ombros curvados, respiração suspensa, a mão paralisada a meio caminho do copo de água. Ao fim de meia hora, a tensão muda de dono — o mais velho sente-a e começa a falar mais depressa, para não incomodar. O arquivo quer a voz a seu ritmo; o corpo tenso rouba-lhe o tempo.", es: "El cuerpo de quien entrevista tiende a inclinarse entero hacia delante, como si la atención fuera una cuestión de equilibrio: hombros encorvados, respiración suspendida, la mano paralizada a medio camino del vaso de agua. Al cabo de media hora, la tensión cambia de dueño — el mayor la siente y empieza a hablar más deprisa, para no molestar. El archivo quiere la voz a su ritmo; el cuerpo tenso le roba el tiempo." },
        { it: "A pausa do entrevistador é discreta: recosta-se devagar, os dois pés no chão de madeira, a respiração a descer para a barriga, como quem pousa as mãos nos joelhos de quem espera sem pressa. O corpo descansado dá licença — e o mais velho, sentindo que ninguém tem pressa, estica a história, acha o provérbio certo, demora-se no que importa. Quem quer ouvir uma vida inteira começa por afrouxar os ombros.", es: "La pausa del entrevistador es discreta: se recuesta despacio, los dos pies en el suelo de madera, la respiración bajando hacia el vientre, como quien posa las manos en las rodillas de quien espera sin prisa. El cuerpo descansado da permiso — y el mayor, sintiendo que nadie tiene prisa, estira la historia, encuentra el refrán justo, se demora en lo que importa. Quien quiere oír una vida entera empieza por aflojar los hombros." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de sillas ergonómicas", "El cuerpo del entrevistador y el ritmo de la voz que habla", "Un tratado de fonética articulatoria"],
        answer: 1,
        why: "El título da cuerpo a quien pregunta: apunta a la postura del entrevistador, no al mobiliario ni a la fonética.",
      },
      sequence: {
        instr: "Ordena los momentos según el texto:",
        events: ["Inclinas-te para a frente e prendes a respiração", "O mais velho sente a tensão e começa a falar depressa", "Recostas-te devagar com os dois pés no chão", "A respiração desce para a barriga", "O mais velho demora-se no que importa"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Antes da próxima pergunta, recosta-te um dedo: só um dedo, ninguém dá por isso. Deixa os pés assentarem no chão de madeira e a respiração descer, devagar, até ao fundo. Quando o mais velho falar, não o acompanhes com a cabeça — fica quieto e deixa a frase chegar-te. Se o silêncio vier, não o enchas: é nele que a história acha o resto. Quem pergunta com o corpo tranquilo ouve respostas mais compridas.",
        questions: [
          { q: "Quanto se recosta o entrevistador, segundo o áudio?", kind: "literal", options: ["Um dedo", "Meio corpo", "Nada"], answer: 0, why: "«Recosta-te um dedo: só um dedo, ninguém dá por isso» está literal." },
          { q: "O que se faz quando vem o silêncio?", kind: "literal", options: ["Não se enche: é nele que a história acha o resto", "Põe-se outra pergunta", "Desliga-se a gravadora"], answer: 0, why: "«Se o silêncio vier, não o enchas: é nele que a história acha o resto» está literal." },
          { q: "Porque é que o corpo tranquilo ouve respostas mais compridas?", kind: "inferencial", options: ["Porque o mais velho sente que ninguém tem pressa e se demora", "Porque a gravadora corre mais devagar", "Porque as perguntas ficam mais curtas"], answer: 0, why: "Se infiere del audio: el cuerpo descansado da permiso, y quien no siente prisa estira la historia." },
          { q: "Que papel tem a cabeça na escuta, segundo o áudio?", kind: "inferencial", options: ["Acompanhar com a cabeça é dispensável: basta ficar quieto a receber a frase", "Mover a cabeça acelera a resposta", "A cabeça deve inclinar-se sempre para a esquerda"], answer: 0, why: "«Não o acompanhes com a cabeça — fica quieto e deixa a frase chegar-te»: la quietud basta." },
        ],
      },
    },
  ],

  "pt-cu-c2-11": [
    {
      id: "md-pt-c2-11-1", theme: "relax mentale",
      title: "Aceitar e acrescentar", titleEs: "Aceptar y añadir", minutes: 2,
      paragraphs: [
        { it: "A primeira lei do improviso — aceitar e acrescentar, nunca corrigir — é, vista de dentro, uma lei de descanso mental. A cabeça que corrige vive em tensão: vigia o parceiro, defende a própria piada, compara. A cabeça que aceita está livre para brincar: recebe o «que comprimento!», soma-lhe o cumprimento e segue. Entre as duas cabeças vai a diferença entre um emprego e um jogo.", es: "La primera ley de la improvisación — aceptar y añadir, nunca corregir — es, vista desde dentro, una ley de descanso mental. La cabeza que corrige vive en tensión: vigila al compañero, defiende el propio chiste, compara. La cabeza que acepta está libre para jugar: recibe el «¡qué comprimento!», le suma el saludo y sigue. Entre las dos cabezas va la diferencia entre un empleo y un juego." },
        { it: "O treino continua fora do palco: receber o dia como o parceiro o entrega — trânsito na ponte, chuva na Ribeira — e acrescentar-lhe qualquer coisa de bom tamanho. Não é resignação, é composição: o «sim, e» transforma o imprevisto em cena. A cabeça descansa quando deixa de editar a realidade ao minuto; e o improviso, como a vida, sai melhor a quem não está a corrigi-lo por dentro.", es: "El entrenamiento continúa fuera del escenario: recibir el día como lo entrega el compañero — atasco en el puente, lluvia en la Ribeira — y añadirle algo de buen tamaño. No es resignación, es composición: el «sí, y» transforma lo imprevisto en escena. La cabeza descansa cuando deja de editar la realidad al minuto; y la improvisación, como la vida, sale mejor a quien no la está corrigiendo por dentro." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un reglamento de teatro de improvisación", "Aceptar y añadir como descanso de la mente que corrige", "Una guía del tráfico de Oporto"],
        answer: 1,
        why: "El título nombra la regla del improviso: apunta a su efecto en la mente, no al reglamento ni al tráfico.",
      },
      quiz: [
        { q: "Qual é a primeira lei do improviso, segundo o texto?", kind: "literal", options: ["Aceitar e acrescentar, nunca corrigir", "Falar alto e depressa", "Ensaiar tudo de véspera"], answer: 0, why: "«A primeira lei do improviso — aceitar e acrescentar, nunca corrigir» está literal." },
        { q: "Porque é que a cabeça que aceita está livre para brincar?", kind: "inferencial", options: ["Porque deixou de vigiar e defender: soma e segue", "Porque nunca ouve o parceiro", "Porque decora mais piadas"], answer: 0, why: "Se infiere del contraste: la cabeza que corrige vigila y defiende; la que acepta solo suma." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["O «sim, e» transforma o imprevisto em cena — dentro e fora do palco", "O improviso é para portuenses natos", "Corrigir o parceiro é sinal de talento"], answer: 0, why: "La idea central: aceptar lo que llega y añadir es descanso mental y composición, dentro y fuera del escenario." },
      ],
      vf: [
        { text: "A cabeça que corrige vive em tensão: vigia, defende, compara.", value: true, why: "«A cabeça que corrige vive em tensão: vigia o parceiro, defende a própria piada, compara» está literal." },
        { text: "O texto chama resignação ao «sim, e».", value: false, why: "Dice lo contrario: «não é resignação, é composição»." },
        { text: "A cabeça descansa quando deixa de editar a realidade ao minuto.", value: true, why: "«A cabeça descansa quando deixa de editar a realidade ao minuto» está literal." },
      ],
    },
    {
      id: "md-pt-c2-11-2", theme: "spiritualità",
      title: "A sala que dá o riso", titleEs: "La sala que da la risa", minutes: 3,
      paragraphs: [
        { it: "A garagem da Ribeira ainda não tem público de verdade — o público é uma parede com pano preto —, mas o riso que ali nasce já é comunitário: quando dois jogadores se atrevem à mesma tolice, quem assiste reconhece-se nela. O riso partilhado é a forma mais antiga de pertença: quem ri junto com estranhos deixa de os ter por estranhos. Por isso se diz que uma sala que ri junto faz-se irmandade por uma noite.", es: "El garaje de la Ribeira todavía no tiene público de verdad — el público es una pared con tela negra —, pero la risa que allí nace ya es comunitaria: cuando dos jugadores se atreven a la misma tontería, quien asiste se reconoce en ella. La risa compartida es la forma más antigua de pertenencia: quien ríe junto con desconocidos deja de tenerlos por desconocidos. Por eso se dice que una sala que ríe junta se hace hermandad por una noche." },
        { it: "Há uma economia de oferta no improviso: cada frase é um presente que se estende com a palma aberta, e o parceiro a aceita por lei. Rir primeiro de si — como manda a brandura — desarma a sala antes que a sala tenha de desarmar ninguém. Nada ali se acumula: o riso gasta-se no ato, e por isso não faz mal a ninguém. Ao fim da noite, a garagem devolve as pessoas mais leves — e o pano preto, esse, já não parece uma parede.", es: "Hay una economía de la oferta en la improvisación: cada frase es un regalo que se tiende con la palma abierta, y el compañero lo acepta por ley. Reír primero de uno — como manda la blandura — desarma la sala antes de que la sala tenga que desarmar a nadie. Nada allí se acumula: la risa se gasta en el acto, y por eso no hace daño a nadie. Al final de la noche, el garaje devuelve a las personas más ligeras — y la tela negra, esa, ya no parece una pared." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La construcción de salas de teatro", "La risa compartida como pertenencia y regalo en la improvisación", "Un ensayo sobre el color negro en la decoración"],
        answer: 1,
        why: "El título da a la sala la facultad de reír: apunta a la comunidad de la risa, no a la construcción ni al color.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["O riso partilhado é oferta e pertença: a sala que ri junto faz-se irmandade por uma noite", "O improviso só funciona com público pagante", "Os trocadilhos arruínam a comédia séria"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Cada frase é um presente de palma aberta que o parceiro aceita por lei", "Rir primeiro de si desarma a sala", "O riso gasta-se no ato e não faz mal a ninguém"],
        distractors: ["A garagem foi alugada por cem euros por mês", "O Miguel estudou em Coimbra", "A peça estreia no Coliseu do Porto"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "O riso partilhado é a forma mais antiga de pertença.",
          "Cada frase é um presente de palma aberta.",
          "O ensaio de quinta-feira durou três horas.",
          "O riso gasta-se no ato e não faz mal a ninguém.",
          "Rir primeiro de si desarma a sala.",
        ],
        intruder: 2,
        why: "La duración del ensayo es logística del grupo, ajena a la espiritualidad de la risa: es el intruso.",
      },
    },
    {
      id: "md-pt-c2-11-3", theme: "qui e ora",
      title: "A palavra ao minuto", titleEs: "La palabra al minuto", minutes: 2,
      paragraphs: [
        { it: "O trocadilho pedido ao minuto não se planeia: prepara-se toda a vida e chega sempre agora. «Que comprimento!» abre a porta, e a palavra que soma — cumprimento — já estava na sala, à espera de ser ouvida. Quem caça sons iguais em palavras diferentes treina uma atenção de festa: o jogo é ver o presente a oferecer duas faces da mesma vogal.", es: "El retruécano pedido al minuto no se planea: se prepara toda la vida y llega siempre ahora. «¡Qué comprimento!» abre la puerta, y la palabra que suma — saludo — ya estaba en la sala, esperando ser oída. Quien caza sonidos iguales en palabras distintas entrena una atención de fiesta: el juego es ver el presente ofrecer dos caras de la misma vocal." },
        { it: "A prática é uma só: ouvir a frase até ao fim, porque o trocadilho mora quase sempre na vogal tónica da última palavra — e quem tem pressa de chegar à própria piada passa por ele sem o ver. O arquivo mental de piadas de repartição é um tesouro de domingo; a cena de hoje pede a palavra de hoje. Entre o preparado e o presente, o improviso escolhe sempre o presente — e é por isso que se chama improviso.", es: "La práctica es una sola: oír la frase hasta el final, porque el retruécano vive casi siempre en la vocal tónica de la última palabra — y quien tiene prisa por llegar a su propio chiste pasa de largo sin verlo. El archivo mental de chistes de repartimiento es un tesoro de domingo; la escena de hoy pide la palabra de hoy. Entre lo preparado y lo presente, la improvisación elige siempre lo presente — y por eso se llama improvisación." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un archivo de chistes portuenses", "El juego de palabras que nace en el instante, al escuchar hasta el final", "Un curso de fonética de la vocal tónica"],
        answer: 1,
        why: "El título une palabra y minuto: apunta al juego que nace ahora, no al archivo ni al curso.",
      },
      sequence: {
        instr: "Ordena los momentos del juego según el texto:",
        events: ["O parceiro abre a porta: «que comprimento!»", "Ouves a frase até à vogal tónica da última palavra", "Vês que a palavra que soma já estava na sala", "Somas o «cumprimento» sem corrigir o parceiro", "A sala ri com as tripas, no presente"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Vais jogar ao minuto: o parceiro diz uma frase qualquer e a tua parte é ouvi-la até ao fim, sem a corrigeres por dentro. A palavra que fecha a frase é uma porta; a tua resposta é a chave que já estava no bolso. Não cries a piada de véspera — ela nunca chega a tempo. Se nada vier, soma o óbvio com bondade: o óbvio bem dito também faz rir. E quando a sala rir, ri com ela: o riso é a forma de a sala dizer obrigado.",
        questions: [
          { q: "Qual é a tua parte no jogo, segundo o áudio?", kind: "literal", options: ["Ouvir a frase até ao fim", "Contar uma piada decorada", "Avaliar o parceiro"], answer: 0, why: "«A tua parte é ouvi-la até ao fim» está literal." },
          { q: "O que é a palavra que fecha a frase, segundo o áudio?", kind: "literal", options: ["Uma porta", "Um sinal de fim", "Uma armadilha"], answer: 0, why: "«A palavra que fecha a frase é uma porta» está literal." },
          { q: "Porque é que a piada de véspera nunca chega a tempo?", kind: "inferencial", options: ["Porque o jogo é com a palavra de agora, não com a preparada", "Porque o público muda de humor", "Porque o relógio da garagem atrasa"], answer: 0, why: "Se infiere del audio: la escena de hoy pide la palabra de hoy; lo preparado pertenece al tesoro de domingo." },
          { q: "O que faz o óbvio bem dito, segundo o áudio?", kind: "inferencial", options: ["Também faz rir", "Mata a cena", "Substitui o parceiro"], answer: 0, why: "«Se nada vier, soma o óbvio com bondade: o óbvio bem dito também faz rir»." },
        ],
      },
    },
  ],

  "pt-cu-c2-12": [
    {
      id: "md-pt-c2-12-1", theme: "spiritualità",
      title: "O obrigado que não acaba", titleEs: "El agradecimiento que no termina", minutes: 3,
      paragraphs: [
        { it: "Um discurso de prémio é, no fundo, um ato de gratidão em voz alta — e a gratidão é a espiritualidade dos que não precisam de religião: não pede nada, apenas reconhece. O obrigado que não acaba é o que sai da lista e vai ter com o anónimo: à professora que emprestou o primeiro livro, ao leitor desconhecido que o guardou no bolso do casaco. Agradecer assim é abrir a porta de casa e deixá-la aberta.", es: "Un discurso de premio es, en el fondo, un acto de gratitud en voz alta — y la gratitud es la espiritualidad de quienes no necesitan religión: no pide nada, solo reconoce. El agradecimiento que no termina es el que sale de la lista y va a parar al anónimo: a la profesora que prestó el primer libro, al lector desconocido que lo guardó en el bolsillo del abrigo. Agradecer así es abrir la puerta de casa y dejarla abierta." },
        { it: "A prática cabe num minuto de silêncio antes de subir ao palco: deixam-se passar os nomes como convidados que entram sem ser anunciados, sem ranking e sem dívida — a gratidão não paga nada a ninguém, apenas nota. Depois disso, o discurso pode ser breve: verdade, brevidade e a coragem de se sentar, como pede a regra antiga dos brindes. Quem agradece inteiro não precisa de mais de cinco minutos.", es: "La práctica cabe en un minuto de silencio antes de subir al escenario: se dejan pasar los nombres como invitados que entran sin ser anunciados, sin ranking y sin deuda — la gratitud no le paga nada a nadie, solo toma nota. Después de eso, el discurso puede ser breve: verdad, brevedad y el valor de sentarse, como pide la regla antigua de los brindis. Quien agradece entero no necesita más de cinco minutos." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un listado de premios literarios portugueses", "La gratitud como práctica serena del discurso de agradecimiento", "Cómo improvisar brindes de boda"],
        answer: 1,
        why: "El título anuncia el agradecimiento sin fin: apunta a la gratitud serena, no al palmarés ni al brindis.",
      },
      quiz: [
        { q: "O que é o obrigado que não acaba, segundo o texto?", kind: "literal", options: ["O que sai da lista e vai ter com o anónimo", "O que se repete três vezes no fim", "O que se escreve no papel"], answer: 0, why: "«O obrigado que não acaba é o que sai da lista e vai ter com o anónimo» está literal." },
        { q: "Porque é que a gratidão não paga nada a ninguém?", kind: "inferencial", options: ["Porque apenas reconhece, sem ranking nem dívida", "Porque os prémios já pagam em dinheiro", "Porque os agradecimentos são obrigatórios"], answer: 0, why: "Se infiere del minuto de silencio: los nombres pasan sin jerarquía ni deuda, la gratitud solo toma nota." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["Agradecer inteiro, um minuto em silêncio, torna o discurso breve e verdadeiro", "Os discursos deviam ser longos e solenes", "A gratidão exige uma religião definida"], answer: 0, why: "La idea central: la gratitud sin destinatario concreto hace posible la tríada breve — verdad, brevidad y coraje de sentarse." },
      ],
      vf: [
        { text: "No minuto de silêncio, os nomes passam como convidados sem serem anunciados.", value: true, why: "«Deixam-se passar os nomes como convidados que entram sem ser anunciados» está literal." },
        { text: "O texto diz que a gratidão é a espiritualidade dos que precisam de religião.", value: false, why: "Dice lo contrario: «a gratidão é a espiritualidade dos que não precisam de religião»." },
        { text: "Quem agradece inteiro não precisa de mais de cinco minutos.", value: true, why: "«Quem agradece inteiro não precisa de mais de cinco minutos» está literal." },
      ],
    },
    {
      id: "md-pt-c2-12-2", theme: "relax mentale",
      title: "O papel que foi para o lixo", titleEs: "El papel que fue a la papelera", minutes: 2,
      paragraphs: [
        { it: "Rasgar o discurso preparado é um gesto de saúde mental que os protocolos não preveem: o papel que ia ser lido soava a outra pessoa, e lê-lo seria recitar-se a si mesmo diante de uma sala inteira. Ficam cinco minutos e um coração aos pulos — e uma estranha leveza: já não há texto a defender, há apenas uma coisa a dizer. A cabeça que larga o papel ganha, de repente, o presente inteiro para falar.", es: "Rasgar el discurso preparado es un gesto de salud mental que los protocolos no prevén: el papel que iba a ser leído sonaba a otra persona, y leerlo sería recitarse a sí mismo delante de una sala entera. Quedan cinco minutos y un corazón a saltos — y una extraña ligereza: ya no hay texto que defender, hay solo una cosa que decir. La cabeza que suelta el papel gana, de repente, el presente entero para hablar." },
        { it: "A preparação cabe em três respirações no camarim e nos pés bem assentes no chão da coxia: quando o nome soar, sobe-se um degrau por fôlego, sem correr. O discurso falado respira com quem o diz — pausa onde o corpo pede, ênfase onde o coração sobe. E se uma frase se perder, perde-se: a sala nunca soube que ela existia. Quem fala de rasgão fica, como diz o formador; quem lê, esquece.", es: "La preparación cabe en tres respiraciones en el camerino y en los pies bien asentados en el suelo de los bastidores: cuando suene el nombre, se sube un escalón por aliento, sin correr. El discurso hablado respira con quien lo dice — pausa donde el cuerpo pide, énfasis donde el corazón sube. Y si una frase se pierde, se pierde: la sala nunca supo que existía. Quien habla desde el rasgón queda, como dice el formador; quien lee, olvida." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ensayo sobre residuos de papel", "La calma de hablar sin papel, cinco minutos antes del discurso", "La historia de los camerinos de teatro"],
        answer: 1,
        why: "El título anuncia el discurso rasgado por decisión propia: apunta a la calma sin papel, no al residuo ni al camerino.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Largar o papel preparado liberta a cabeça para falar no presente", "Os discursos deviam ser todos escritos e lidos", "O pânico de palco cura-se com papel"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Já não há texto a defender, há apenas uma coisa a dizer", "Sobe-se um degrau por fôlego, sem correr", "Se uma frase se perde, a sala nunca soube que ela existia"],
        distractors: ["O auditório tem trezentos lugares", "O prémio vale dez mil euros", "O júri deliberou durante duas horas"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Já não há texto a defender, há apenas uma coisa a dizer.",
          "Sobe-se um degrau por fôlego, sem correr.",
          "O discurso falado respira com quem o diz.",
          "Quem fala de rasgão fica; quem lê, esquece.",
          "O cocktail de celebração começa às vinte e três horas.",
        ],
        intruder: 4,
        why: "El cóctel posterior es logística de la gala, ajena a la calma del orador: es el intruso.",
      },
    },
    {
      id: "md-pt-c2-12-3", theme: "meditazione",
      title: "Verdade, brevidade, coragem", titleEs: "Verdad, brevedad, valentía", minutes: 3,
      paragraphs: [
        { it: "A tríade do discurso de prémio — verdade, brevidade e a coragem de se sentar — é também um programa de meditação. Verdade: dizer o que é, não o que soa bem. Brevidade: cada frase tem de merecer o lugar, como na página que se corta. Coragem de se sentar: acabar, largar o microfone, deixar o aplauso pertencer à sala. Três tempos de um mesmo fôlego — e o discurso todo cabe num único ciclo de respiração bem gasto.", es: "La tríada del discurso de premio — verdad, brevedad y el valor de sentarse — es también un programa de meditación. Verdad: decir lo que es, no lo que suena bien. Brevedad: cada frase tiene que merecer su lugar, como en la página que se corta. Valor de sentarse: terminar, soltar el micrófono, dejar que el aplauso pertenezca a la sala. Tres tiempos de un mismo aliento — y el discurso entero cabe en un único ciclo de respiración bien gastado." },
        { it: "Depois do aplauso há um silêncio que ninguém programa: o orador senta-se, a sala respira, e a última imagem do discurso — como a última imagem de uma cena — é a que cada um leva para casa. Sentar-se é voltar ao comum, que é o melhor lugar para se estar depois de estar em palco. O discurso acaba; a presença fica. E no fim da noite, quem agradeceu com verdade e brevidade pode finalmente descansar, que é também uma forma de dizer obrigado.", es: "Después del aplauso hay un silencio que nadie programa: el orador se sienta, la sala respira, y la última imagen del discurso — como la última imagen de una escena — es la que cada uno se lleva a casa. Sentarse es volver a lo común, que es el mejor lugar para estar después de estar en escena. El discurso acaba; la presencia queda. Y al final de la noche, quien agradeció con verdad y brevedad puede por fin descansar, que es también una forma de decir gracias." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de oratoria clásica", "La tríada del discurso como meditación: verdad, brevidad, coraje de sentarse", "La vida de los jurados literarios"],
        answer: 1,
        why: "El título enuncia la tríada del brindis: apunta a su lectura meditativa, no al manual ni al jurado.",
      },
      sequence: {
        instr: "Ordena los momentos del discurso según el texto:",
        events: ["Dizes o que é, não o que soa bem", "Cada frase merece o lugar, como na página que se corta", "Acabas e largas o microfone", "O aplauso pertence à sala, no silêncio que ninguém programa", "Sentas-te e voltas ao comum, com a presença que fica"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Antes de dizeres a última frase, lembra-te da tríade: verdade, brevidade e a coragem de te sentares. Diz o que é verdadeiro, mesmo que seja pequeno — as salas gostam de verdades do tamanho certo. Não somas minutos com palavras de enfeite: o discurso bom cabe num fôlego. E quando acabares, acabas: larga o microfone, agradece ao júri com os olhos e senta-te devagar. O aplauso já não é teu — é o presente que a sala te faz. Deixa-o existir sem o empurares.",
        questions: [
          { q: "De que tamanho são as verdades que as salas gostam, segundo o áudio?", kind: "literal", options: ["Do tamanho certo", "Do tamanho de um livro", "Do tamanho do prémio"], answer: 0, why: "«As salas gostam de verdades do tamanho certo» está literal." },
          { q: "O que se faz quando se acaba, segundo o áudio?", kind: "literal", options: ["Larga-se o microfone e senta-se devagar", "Recomeça-se a falar", "Pede-se outro minuto"], answer: 0, why: "«Larga o microfone, agradece ao júri com os olhos e senta-te devagar» está literal." },
          { q: "Porque é que o aplauso já não é do orador?", kind: "inferencial", options: ["Porque é o presente que a sala lhe faz, e deixá-lo existir é respeitá-lo", "Porque o júri o proíbe de aplaudir", "Porque o microfone está desligado"], answer: 0, why: "«O aplauso já não é teu — é o presente que a sala te faz»: pertenece a la sala." },
          { q: "O que significa «não somas minutos com palavras de enfeite»?", kind: "inferencial", options: ["Que o discurso bom cabe num fôlego, sem ornato a esticá-lo", "Que o orador deve falar baixinho", "Que o tempo do palco é sempre curto demais"], answer: 0, why: "Se infiere del audio: el ornamento alarga el discurso; la brevedad lo deja entero en un aliento." },
        ],
      },
    },
  ],
};
