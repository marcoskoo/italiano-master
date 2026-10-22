import type { MindReading } from "../../cambridge-mind";

/* ═══ PT C1 · Mind readings (temáticas de conciencia) — 3 por unidade ══
   Metodología v9.13: 7 estrategias de comprensión lectora y de escucha.
   Textos em português europeu C1 (ensaio reflexivo), tradução espanhola
   à vista. Campos `.it` = português, `.es` = español. Temas com as cinco
   chaves italianas fixas: meditazione · spiritualità · qui e ora ·
   relax fisico · relax mentale. Estratégia por índice: L1 = predict +
   quiz (lit/inf/crít) + V/F; L2 = predict + ideas + intruso;
   L3 = predict + sequência + escuta. */

export const PT_MIND_C1: Record<string, MindReading[]> = {
  "pt-cu-c1-01": [
    {
      id: "md-pt-c1-01-1", theme: "meditazione",
      title: "Três respirações no anfiteatro", titleEs: "Tres respiraciones en el anfiteatro", minutes: 2,
      paragraphs: [
        { it: "O anfiteatro enche-se aos poucos e há um gesto que ninguém vê: três respirações contadas antes de o professor abrir a boca. Não é superstição nem técnica de produtividade; é apenas a forma de chegar inteiro ao que vem a seguir. Quem respira antes de ouvir, ouve melhor — e quem ouve melhor, pergunta melhor.", es: "El anfiteatro se llena poco a poco y hay un gesto que nadie ve: tres respiraciones contadas antes de que el profesor abra la boca. No es superstición ni técnica de productividad; es solo la forma de llegar entero a lo que viene después. Quien respira antes de escuchar, escucha mejor — y quien escucha mejor, pregunta mejor." },
        { it: "Meditar, em contexto académico, não é fugir da aula: é preparar a atenção que a aula merece. Caso subsistam dúvidas no fim, o silêncio também pergunta; e que eu saiba, nenhum apontamento substituiu nunca uma mente presente. Três respirações são pouco; são, porém, tuas — e a aula começa nelas.", es: "Meditar, en contexto académico, no es huir de la clase: es preparar la atención que la clase merece. Si persistieran dudas al final, el silencio también pregunta; y que yo sepa, ningún apunte sustituyó nunca a una mente presente. Tres respiraciones son poco; son, sin embargo, tuyas — y la clase empieza en ellas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de técnicas de estudio", "Un gesto breve de respiración para llegar presente a la clase", "Una crítica a las clases magistrales"],
        answer: 1,
        why: "El título une respiración y anfiteatro: apunta a una práctica breve, no a un manual ni a un debate.",
      },
      quiz: [
        { q: "O que se faz antes de o professor abrir a boca?", kind: "literal", options: ["Três respirações contadas", "Uma chamada telefónica", "A leitura dos apontamentos"], answer: 0, why: "«Três respirações contadas» está literal en la primera frase." },
        { q: "Porque é que o texto diz que o silêncio também pergunta?", kind: "inferencial", options: ["Porque a dúvida pode ser formulada sem pressa", "Porque o professor proíbe perguntas", "Porque o silêncio é sinal de erro"], answer: 0, why: "Se infiere de «caso subsistam dúvidas no fim, o silêncio também pergunta»: la duda puede madurar sin urgencia." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["A presença prepara a escuta e a pergunta", "Os apontamentos são inúteis", "As aulas deviam ser mais curtas"], answer: 0, why: "La idea central es que la respiración prepara la presencia, y la presencia la escucha y la pregunta." },
      ],
      vf: [
        { text: "O gesto de respirar é visível para toda a gente.", value: false, why: "El texto dice que es «um gesto que ninguém vê»." },
        { text: "Quem respira antes de ouvir ouve melhor, segundo o texto.", value: true, why: "«Quem respira antes de ouvir, ouve melhor» está literal." },
        { text: "O texto defende que os apontamentos substituem a mente presente.", value: false, why: "Dice lo contrario: «nenhum apontamento substituiu nunca uma mente presente»." },
      ],
    },
    {
      id: "md-pt-c1-01-2", theme: "qui e ora",
      title: "O caderno e a sala", titleEs: "El cuaderno y la sala", minutes: 2,
      paragraphs: [
        { it: "Há quem transcreva a aula palavra por palavra e saia da sala sem ter estado nela. O caderno pode ser uma ponte ou uma parede: ponte quando recolhe o essencial, parede quando se interpõe entre ti e a voz que fala. Estar na aula é mais do que ocupar a cadeira — é habitar o que se diz enquanto se diz.", es: "Hay quien transcribe la clase palabra por palabra y sale del aula sin haber estado en ella. El cuaderno puede ser un puente o una pared: puente cuando recoge lo esencial, pared cuando se interpone entre tú y la voz que habla. Estar en la clase es más que ocupar el asiento — es habitar lo que se dice mientras se dice." },
        { it: "O aqui e o agora académicos cabem numa prática simples: olhar para quem fala, deixar o telemóvel de lado durante cinquenta minutos e confiar na memória para o resto. A aula não se repete; o caderno, sim. Por isso, o presente é o único apontamento que não se perde.", es: "El aquí y el ahora académicos caben en una práctica simple: mirar a quien habla, dejar el móvil a un lado durante cincuenta minutos y confiar en la memoria para el resto. La clase no se repite; el cuaderno, sí. Por eso, el presente es el único apunte que no se pierde." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de caligrafía y apuntes", "La presencia en clase frente a la transcripción total", "Un anuncio de cuadernos"],
        answer: 1,
        why: "El título opone cuaderno y sala: apunta a la presencia frente a la transcripción, no a material ni a publicidad.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Há quem transcreva a aula e saia sem ter estado nela.",
          "O caderno pode ser uma ponte ou uma parede.",
          "Estar na aula é habitar o que se diz enquanto se diz.",
          "O preço dos cadernos subiu trinta por cento este ano.",
          "O presente é o único apontamento que não se perde.",
        ],
        intruder: 3,
        why: "El precio del material escolar es un dato de mercado ajeno a la reflexión sobre la presencia: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Transcrever tudo é a melhor técnica", "A presença na aula vale mais do que a transcrição total", "O telemóvel ajuda a concentrar-se"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["O caderno pode ser uma ponte ou uma parede", "Estar na aula é mais do que ocupar a cadeira", "A aula não se repete, o caderno sim"],
        distractors: ["O professor proibiu os cadernos", "A caneta foi um presente do avô", "Os exames foram adiados"],
      },
    },
    {
      id: "md-pt-c1-01-3", theme: "relax fisico",
      title: "As costas do anfiteatro", titleEs: "La espalda del anfiteatro", minutes: 2,
      paragraphs: [
        { it: "Passada a primeira hora de aula, o corpo já contou o que ninguém perguntou: os ombros subiram, o pescoço encolheu e a respiração ficou curta. As cadeiras do anfiteatro não foram desenhadas para corpos inteiros, e o estudante que não se mexe paga o preço em costas. O corpo também toma apontamentos — e toma-os em tensão.", es: "Pasada la primera hora de clase, el cuerpo ya contó lo que nadie preguntó: los hombros subieron, el cuello se encogió y la respiración quedó corta. Las sillas del anfiteatro no fueron diseñadas para cuerpos enteros, y el estudiante que no se mueve lo paga con la espalda. El cuerpo también toma apuntes — y los toma en tensión." },
        { it: "A correção cabe numa pausa de dois minutos: pés no chão, coluna a alongar-se, ombros a descer devagar, como quem pousa uma mochila invisível. Repete-se a cada intervalo, sem chamar a atenção. Embora pareça pouco, é a diferença entre sair dolorido da aula e sair apenas com a cabeça cheia — o que, sendo muito, não dói.", es: "La corrección cabe en una pausa de dos minutos: pies en el suelo, columna estirándose, hombros bajando despacio, como quien suelta una mochila invisible. Se repite en cada descanso, sin llamar la atención. Aunque parezca poco, es la diferencia entre salir dolorido de clase y salir solo con la cabeza llena — que, siendo mucho, no duele." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una crítica às universidades antigas", "Soltar la tensión física durante las clases largas", "Un manual de ergonomía de escritório"],
        answer: 1,
        why: "El título señala la espalda del estudiante: apunta a la tensión física en el anfiteatro, no a la institución ni al mobiliario de oficina.",
      },
      sequence: {
        instr: "Ordena los pasos de la práctica según el texto:",
        events: ["O corpo conta a tensão acumulada", "Pousas os pés no chão", "A coluna alonga-se devagar", "Os ombros descem como uma mochila invisível", "Repetes a prática a cada intervalo"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Pausa de dois minutos no anfiteatro. Pousa os pés no chão e deixa o ar sair devagar. Agora deixa cair os ombros, sem força, e sente a coluna a esticar-se para cima. Há um espaço novo entre as orelhas e os ombros: guarda-o até ao fim da aula. O corpo que respira presta atenção por mais tempo — e o resto é matéria, que a matéria volta sempre.",
        questions: [
          { q: "O que se faz com os pés, segundo o áudio?", kind: "literal", options: ["Pousam-se no chão", "Cruzam-se debaixo da cadeira", "Levantam-se devagar"], answer: 0, why: "«Pousa os pés no chão» está literal en el audio." },
          { q: "O que acontece com a coluna?", kind: "literal", options: ["Estica-se para cima", "Dobra-se para a frente", "Fica imóvel"], answer: 0, why: "«Sente a coluna a esticar-se para cima»." },
          { q: "Para que serve o espaço novo entre as orelhas e os ombros?", kind: "inferencial", options: ["Para guardar a sensação até ao fim da aula", "Para colocar os livros", "Para medir a altura"], answer: 0, why: "«Guarda-o até ao fim da aula»: se infiere que la sensación se conserva durante la clase." },
          { q: "Que relação o áudio estabelece entre respiração e atenção?", kind: "inferencial", options: ["O corpo que respira presta atenção por mais tempo", "A respiração substitui o estudo", "A atenção depende dos livros"], answer: 0, why: "«O corpo que respira presta atenção por mais tempo»: el cuerpo relajado sostiene la atención." },
        ],
      },
    },
  ],

  "pt-cu-c1-02": [
    {
      id: "md-pt-c1-02-1", theme: "spiritualità",
      title: "A honestidade como prática", titleEs: "La honestidad como práctica", minutes: 3,
      paragraphs: [
        { it: "Escrever as limitações de um estudo é um ato de honestidade que ninguém aplaude — e talvez por isso seja quase espiritual. O investigador que admite «é provável que a amostra esteja enviesada» pratica uma forma de humildade que não sai nos índices de citação, mas dorme melhor. A verdade não se defende escondendo-lhe os pés de barro.", es: "Escribir las limitaciones de un estudio es un acto de honestidad que nadie aplaude — y quizá por eso sea casi espiritual. El investigador que admite «es probable que la muestra esté sesgada» practica una forma de humildad que no sale en los índices de citas, pero duerme mejor. La verdad no se defiende escondiéndole los pies de barro." },
        { it: "Há uma reverência discreta em tratar os dados com delicadeza: não os forçar a dizer o que não dizem, não vestir de certeza o que é apenas hipótese. Quem escreve «os resultados sugerem» em vez de «provam» está, sem o saber, a fazer um exercício espiritual: reconhecer os próprios limites antes que os encontre outro. Os revisores chamam-lhe método; a vida chama-lhe integridade.", es: "Hay una reverencia discreta en tratar los datos con delicadeza: no forzarlos a decir lo que no dicen, no vestir de certeza lo que es apenas hipótesis. Quien escribe «los resultados sugieren» en vez de «prueban» está, sin saberlo, haciendo un ejercicio espiritual: reconocer los propios límites antes de que los encuentre otro. Los revisores lo llaman método; la vida lo llama integridad." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un tratado de teología comparada", "La honestidad metodológica como práctica casi espiritual", "Una guía para publicar más rápido"],
        answer: 1,
        why: "El título anuncia la honestidad como práctica; el contexto científico del nivel apunta al método, no a la teología.",
      },
      quiz: [
        { q: "O que admite o investigador do exemplo?", kind: "literal", options: ["Que a amostra pode estar enviesada", "Que o estudo foi roubado", "Que os dados são perfeitos"], answer: 0, why: "«É provável que a amostra esteja enviesada» está literal en el primer párrafo." },
        { q: "Porque é que o texto compara a honestidade a um exercício espiritual?", kind: "inferencial", options: ["Porque exige reconhecer os próprios limites", "Porque é obrigatória por regulamento", "Porque rende mais citações"], answer: 0, why: "Se infiere de «reconhecer os próprios limites antes que os encontre outro»: la humildad como disciplina interior." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["Publicar depressa é o que mais importa", "A integridade começa por não forçar os dados", "Os revisores nunca têm razão"], answer: 1, why: "La idea central es que no forzar los datos y admitir límites es la forma más alta del oficio." },
      ],
      vf: [
        { text: "O texto diz que a honestidade sai nos índices de citação.", value: false, why: "Dice lo contrario: «não sai nos índices de citação»." },
        { text: "Escrever «os resultados sugerem» é descrito como humildade.", value: true, why: "«Pratica uma forma de humildade» al describir al investigador prudente." },
        { text: "O investigador honesto dorme melhor, segundo o texto.", value: true, why: "«Mas dorme melhor» está literal en el primer párrafo." },
      ],
    },
    {
      id: "md-pt-c1-02-2", theme: "relax mentale",
      title: "O revisor interior", titleEs: "El revisor interior", minutes: 2,
      paragraphs: [
        { it: "Todo o escritor científico tem um revisor interior que acorda antes da primeira frase: «isto já está dito», «a amostra é pequena», «o revisor 2 vai odiar». Esta voz não é má conselheira — é má companheira de primeira hora. Usada cedo demais, apaga o texto antes de ele existir; usada a seu tempo, afina-o como um instrumento.", es: "Todo escritor científico tiene un revisor interior que despierta antes de la primera frase: «esto ya está dicho», «la muestra es pequeña», «el revisor 2 lo va a odiar». Esta voz no es mala consejera — es mala compañera de primera hora. Usada demasiado pronto, apaga el texto antes de que exista; usada a su tiempo, lo afina como un instrumento." },
        { it: "O relaxamento mental do escritor consiste em marcar reuniões com essa voz: primeiro escreve-se, sem julgamento, uma versão inteira; só depois se convida o revisor interior a sentar-se à mesa. Surpreendentemente, ele comporta-se melhor quando é chamado do que quando se intromete. E o texto ganha duas vidas: a espontânea e a lapidada.", es: "La relajación mental del escritor consiste en concertar reuniones con esa voz: primero se escribe, sin juicio, una versión entera; solo después se invita al revisor interior a sentarse a la mesa. Sorprendentemente, se comporta mejor cuando se le llama que cuando se entremete. Y el texto gana dos vidas: la espontánea y la pulida." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo responder a um revisor real", "Silenciar al crítico interior mientras se escribe la primera versión", "Una historia da revisão por pares"],
        answer: 1,
        why: "El título habla del revisor «interior»: apunta a la voz propia, no al revisor de la revista.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "O revisor interior acorda antes da primeira frase.",
          "Usada cedo demais, a voz crítica apaga o texto antes de ele existir.",
          "O relaxamento consiste em marcar reuniões com essa voz.",
          "A revista aceitou o artigo em três dias úteis.",
          "O texto ganha duas vidas: a espontânea e a lapidada.",
        ],
        intruder: 3,
        why: "La decisión editorial de la revista es un hecho externo ajeno a la dinámica del crítico interior: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Escrever e corrigir são dois momentos diferentes", "O revisor interior deve ser expulso para sempre", "A primeira versão é sempre a melhor"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A voz crítica não é má conselheira, é má companheira de primeira hora", "Primeiro escreve-se uma versão inteira sem julgamento", "A voz comporta-se melhor quando é chamada"],
        distractors: ["O revisor interior foi despedido por e-mail", "O artigo versava sobre geologia marinha", "O escritor publicou dez livros num ano"],
      },
    },
    {
      id: "md-pt-c1-02-3", theme: "meditazione",
      title: "Uma página de cada vez", titleEs: "Una página cada vez", minutes: 2,
      paragraphs: [
        { it: "Um artigo científico escreve-se como se medita: uma página de cada vez, uma frase de cada vez, sem a cabeça inteira a correr para a conclusão. A ansiedade do autor nasce de tentar habitar as cem páginas futuras ao mesmo tempo; a paz nasce de voltar à única que existe — esta, com o cursor a piscar.", es: "Un artículo científico se escribe como se medita: una página cada vez, una frase cada vez, sin la cabeza entera corriendo hacia la conclusión. La ansiedad del autor nace de intentar habitar las cien páginas futuras a la vez; la paz nace de volver a la única que existe — esta, con el cursor parpadeando." },
        { it: "A prática é simples e difícil, como todas as práticas: quando o pensamento fugir para o índice, para a defesa, para o prémio, trazê-lo de volta à frase. Se a frase estiver difícil, vem à palavra; se a palavra estiver difícil, vem à respiração. Dizem os orientadores que os doutoramentos se escrevem em dias iguais; meditá-los é, apenas, escrever o dia de hoje.", es: "La práctica es simple y difícil, como todas las prácticas: cuando el pensamiento huya hacia el índice, hacia la defensa, hacia el premio, traerlo de vuelta a la frase. Si la frase está difícil, vienes a la palabra; si la palabra está difícil, vienes a la respiración. Dicen los directores que los doctorados se escriben en días iguales; meditarlos es, apenas, escribir el día de hoy." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un plan de publicación acelerada", "Escribir y meditar página a página, volviendo a la frase presente", "Una crítica a los directores de tesis"],
        answer: 1,
        why: "El título apunta al método de una página por vez: presencia en la escritura, no velocidad ni crítica.",
      },
      sequence: {
        instr: "Ordena los pasos de la práctica según el texto:",
        events: ["O pensamento foge para o índice ou para a defesa", "Notas a fuga e voltas à frase", "Se a frase estiver difícil, vens à palavra", "Se a palavra estiver difícil, vens à respiração", "Escreves apenas o dia de hoje"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Uma página de cada vez — é assim que se escreve e é assim que se respira. Fecha os olhos um instante e deixa vir à memória a única frase que precisas de escrever hoje. Não o artigo inteiro: só esta frase, só este parágrafo, só este dia. Quando o pensamento fugir para o fim, traz-o devagar ao início. O resto do livro é feito de páginas como esta — e cada página cabe num segundo de coragem.",
        questions: [
          { q: "O que vem à memória, segundo o áudio?", kind: "literal", options: ["A única frase de hoje", "O índice do livro", "Os agradecimentos"], answer: 0, why: "«Deixa vir à memória a única frase que precisas de escrever hoje»." },
          { q: "Para onde foge o pensamento?", kind: "literal", options: ["Para o fim", "Para o início", "Para o rodapé"], answer: 0, why: "«Quando o pensamento fugir para o fim» está literal." },
          { q: "O que se faz quando o pensamento foge?", kind: "inferencial", options: ["Traz-se devagar ao início", "Apaga-se a frase", "Muda-se de capítulo"], answer: 0, why: "«Traz-o devagar ao início»: se infiere el retorno a la frase presente." },
          { q: "Que relação o áudio estabelece entre as páginas e a coragem?", kind: "inferencial", options: ["Cada página cabe num segundo de coragem", "A coragem substitui a escrita", "As páginas precisam de um livro inteiro"], answer: 0, why: "El cierre iguala cada página a un segundo de coraje: escribir hoy es suficiente." },
        ],
      },
    },
  ],

  "pt-cu-c1-03": [
    {
      id: "md-pt-c1-03-1", theme: "qui e ora",
      title: "O café antes da cláusula", titleEs: "El café antes de la cláusula", minutes: 2,
      paragraphs: [
        { it: "Antes de falar de preços, o negociador português pergunta pela família. Não é perda de tempo: é a forma de colocar a pessoa à frente da folha de cálculo. O café que antecede a cláusula diz ao outro, sem palavras, que a relação não acabará quando o contrato for assinado — e quem se sente pessoa antes de se sentir parte negocia melhor.", es: "Antes de hablar de precios, el negociador portugués pregunta por la familia. No es pérdida de tiempo: es la forma de poner a la persona por delante de la hoja de cálculo. El café que precede a la cláusula le dice al otro, sin palabras, que la relación no terminará cuando el contrato se firme — y quien se siente persona antes de sentirse parte negocia mejor." },
        { it: "Estar presente na negociação é olhar quem fala e não apenas o que se quer dele. Os números dizem-nos o que é possível; a presença diz-nos com quem é possível. Quando a conversa esquentar, o aqui e o agora cabem numa pausa: beber um gole devagar, deixar o silêncio trabalhar — porque os acordos que duram não são os mais rápidos, são os mais inteiros.", es: "Estar presente en la negociación es mirar a quien habla y no solo lo que se quiere de él. Los números nos dicen qué es posible; la presencia nos dice con quién es posible. Cuando la conversación se caliente, el aquí y el ahora caben en una pausa: beber un sorbo despacio, dejar trabajar al silencio — porque los acuerdos que duran no son los más rápidos, son los más enteros." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una receta de café portugués", "La relación antes del contrato: presencia en la negociación", "Un manual de finanzas corporativas"],
        answer: 1,
        why: "El título opone café y cláusula: la relación humana antes del texto legal, no una receta ni un manual.",
      },
      quiz: [
        { q: "O que faz o negociador antes de falar de preços?", kind: "literal", options: ["Pergunta pela família", "Abre a folha de cálculo", "Liga o cronómetro"], answer: 0, why: "«Pergunta pela família» está literal en la primera frase." },
        { q: "Porque é que os acordos duradouros são «os mais inteiros»?", kind: "inferencial", options: ["Porque envolvem a relação inteira, não só o preço", "Porque são assinados depressa", "Porque têm mais páginas"], answer: 0, why: "Se infiere del contraste entre números y presencia: el acuerdo entero incluye a la persona." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["A relação precede a transação", "O café é obrigatório por contrato", "Os números não importam"], answer: 0, why: "La idea central resume la cultura negociadora: primero la persona, después el negocio." },
      ],
      vf: [
        { text: "O texto defende que a relação acaba quando o contrato é assinado.", value: false, why: "Dice lo contrario: «a relação não acabará quando o contrato for assinado»." },
        { text: "A presença diz-nos com quem é possível negociar.", value: true, why: "«A presença diz-nos com quem é possível» está literal." },
        { text: "Os acordos que duram são os mais rápidos, segundo o texto.", value: false, why: "«Não são os mais rápidos, são os mais inteiros»." },
      ],
    },
    {
      id: "md-pt-c1-03-2", theme: "meditazione",
      title: "A pausa que vale um desconto", titleEs: "La pausa que vale un descuento", minutes: 2,
      paragraphs: [
        { it: "Na negociação, o silêncio é uma ferramenta tão precisa como um número. A pausa antes de responder a uma proposta não é hesitação: é o tempo em que a cabeça calcula o que a pressa ia perder. Quem respira entre a oferta e a resposta ganha, muitas vezes, o desconto que a ansiedade teria entregado.", es: "En la negociación, el silencio es una herramienta tan precisa como un número. La pausa antes de responder a una propuesta no es hesitación: es el tiempo en que la cabeza calcula lo que la prisa iba a perder. Quien respira entre la oferta y la respuesta gana, muchas veces, el descuento que la ansiedad habría entregado." },
        { it: "Meditar a resposta não é adiá-la para sempre: é dar-lhe a estação de origem certa. Três respirações entre o «cento e oitenta e cinco euros» e o «e se ficássemos» — e a frase sai firme sem sair agressiva. Os negociadores experientes sabem-no há séculos: a pausa não enfraquece o argumento; prepara-o.", es: "Meditar la respuesta no es aplazarla para siempre: es darle la estación de origen correcta. Tres respiraciones entre el «ciento ochenta y cinco euros» y el «¿y si nos quedáramos» — y la frase sale firme sin salir agresiva. Los negociadores experimentados lo saben desde hace siglos: la pausa no debilita el argumento; lo prepara." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de descuento agresivo", "La pausa consciente entre la oferta y la respuesta", "Una historia do comércio da cortiça"],
        answer: 1,
        why: "El título valora la pausa en términos de negociación: apunta al silencio consciente, no a la agresividad ni a la historia comercial.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "A pausa antes de responder não é hesitação.",
          "Quem respira entre a oferta e a resposta ganha o que a pressa ia perder.",
          "A frase sai firme sem sair agressiva.",
          "O corcho português exporta-se para cinquenta países.",
          "A pausa não enfraquece o argumento; prepara-o.",
        ],
        intruder: 3,
        why: "El dato exportador pertenece a la industria del corcho, no a la reflexión sobre la pausa: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["A pressa é a melhor conselheira", "A pausa consciente prepara uma resposta firme", "O silêncio deve durar minutos inteiros"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["O silêncio é uma ferramenta tão precisa como um número", "A pausa é o tempo em que a cabeça calcula o que a pressa ia perder", "A frase sai firme sem sair agressiva"],
        distractors: ["O desconto foi de sete por cento", "A reunião terminou ao meio-dia", "O negociador contratou um coach"],
      },
    },
    {
      id: "md-pt-c1-03-3", theme: "spiritualità",
      title: "Ganhar sem vencer", titleEs: "Ganar sin vencer", minutes: 3,
      paragraphs: [
        { it: "Há uma forma de fechar um acordo que deixa as duas partes inteiras: chama-se ganho mútuo e tem qualquer coisa de espiritual. Não é fraqueza nem ingenuidade — é a convicção de que a mesa não é um campo de batalha e que o outro não é um adversário a dobrar, mas uma pessoa com quem se vai voltar a almoçar.", es: "Hay una forma de cerrar un acuerdo que deja a las dos partes enteras: se llama ganancia mutua y tiene algo de espiritual. No es debilidad ni ingenuidad — es la convicción de que la mesa no es un campo de batalla y de que el otro no es un adversario al que doblegar, sino una persona con la que se va a volver a almorzar." },
        { it: "Quem negocia para vencer ganha o contrato e perde o cliente; quem negocia para resolver ganha os dois. A frase «ficam convictos de que chegaremos a uma solução de ganho mútuo» não é etiqueta comercial: é uma declaração de confiança nas pessoas. E a palavra dada — o combinado — vale, em Portugal, tanto como a assinatura: talvez seja essa a mais antiga das tecnologias de confiança.", es: "Quien negocia para vencer gana el contrato y pierde al cliente; quien negocia para resolver gana los dos. La frase «queden convencidos de que llegaremos a una solución de ganancia mutua» no es etiqueta comercial: es una declaración de confianza en las personas. Y la palabra dada — lo acordado — vale, en Portugal, tanto como la firma: quizá sea esa la más antigua de las tecnologías de confianza." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo derrotar al adversário comercial", "El ganho mútuo como ética serena de la negociación", "Un contrato de exportación de corcho"],
        answer: 1,
        why: "El título anuncia la paradoja ganar-sin-vencer: ética del acuerdo, no estrategia de derrota.",
      },
      sequence: {
        instr: "Ordena los momentos según el texto:",
        events: ["As duas partes sentam-se à mesa", "Cada uma expõe o que precisa", "A conversa procura o que serve as duas", "Fecha-se o acordo de ganho mútuo", "Volta-se a almoçar juntos"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Antes da próxima negociação, um exercício simples. Respira uma vez e lembra-te de quem está do outro lado da mesa: uma pessoa, com prazos, com chefias, com um almoço à espera. Pergunta a ti próprio o que precisa essa pessoa de levar para casa hoje. Não é fraqueza preparar a pergunta: é a forma mais antiga de construir acordos que duram. Quando abrires a boca, fala de ganho — o teu e o dela.",
        questions: [
          { q: "O que se faz antes da próxima negociação?", kind: "literal", options: ["Um exercício simples de respiração e memória", "Uma chamada ao advogado", "A leitura do contrato em voz alta"], answer: 0, why: "«Respira uma vez e lembra-te de quem está do outro lado da mesa»." },
          { q: "O que se pergunta a ti próprio?", kind: "literal", options: ["O que a outra pessoa precisa de levar para casa", "Quanto vale a empresa dela", "Quem vai pagar o almoço"], answer: 0, why: "«Pergunta a ti próprio o que precisa essa pessoa de levar para casa hoje»." },
          { q: "Porque é que preparar a pergunta não é fraqueza?", kind: "inferencial", options: ["Porque constrói acordos que duram", "Porque impressiona o cliente", "Porque encurta a reunião"], answer: 0, why: "«É a forma mais antiga de construir acordos que duram»: la pregunta preparada sostiene el acuerdo." },
          { q: "Como se deve falar, segundo o fecho do áudio?", kind: "inferencial", options: ["De ganho, o meu e o dela", "Só do meu lucro", "Do preço mais alto possível"], answer: 0, why: "«Fala de ganho — o teu e o dela»: el cierre invita al lenguaje de ganancia mutua." },
        ],
      },
    },
  ],

  "pt-cu-c1-04": [
    {
      id: "md-pt-c1-04-1", theme: "relax fisico",
      title: "A voz descansa nos ombros", titleEs: "La voz descansa en los hombros", minutes: 2,
      paragraphs: [
        { it: "Nos minutos antes de subir ao palco, a voz não mora apenas na garganta: assenta nos ombros, no queixo, na respiração. Quando o nervoso aperta, os ombros sobem até às orelhas e a voz sai fina, uma voz emprestada. O corpo que fala em público precisa de ser preparado como o microfone: testado e solto.", es: "En los minutos antes de subir al escenario, la voz no vive solo en la garganta: se apoya en los hombros, en la mandíbula, en la respiración. Cuando el nervio aprieta, los hombros suben hasta las orejas y la voz sale fina, una voz prestada. El cuerpo que habla en público necesita ser preparado como el micrófono: probado y suelto." },
        { it: "O aquecimento cabe em dois minutos: pés firmes no chão, ombros a rolar para trás, queixo a largar, três respirações compridas. Fala-se depois uma frase qualquer em voz baixa, só para ouvir a própria voz já descansada. Nenhum público confia numa voz tensa — e nenhum orador sustenta vinte minutos com o corpo fechado.", es: "El calentamiento cabe en dos minutos: pies firmes en el suelo, hombros rodando hacia atrás, mandíbula soltándose, tres respiraciones largas. Después se dice una frase cualquiera en voz baja, solo para oír la propia voz ya descansada. Ningún público confía en una voz tensa — y ningún orador sostiene veinte minutos con el cuerpo cerrado." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de canto profissional", "Preparar el cuerpo y la voz antes de hablar en público", "Una crítica às conferências longas"],
        answer: 1,
        why: "El título relaciona voz y hombros: el soporte físico del habla, no el canto ni la crítica.",
      },
      quiz: [
        { q: "Onde assenta a voz, segundo o texto?", kind: "literal", options: ["Nos ombros, no queixo e na respiração", "Só na garganta", "Nas mãos"], answer: 0, why: "«Assenta nos ombros, no queixo, na respiração» está literal." },
        { q: "Porque é que a voz sai fina quando o nervoso aperta?", kind: "inferencial", options: ["Porque os ombros sobem e o corpo fecha", "Porque o microfone está desligado", "Porque a sala é grande"], answer: 0, why: "Se infiere de «os ombros sobem até às orelhas e a voz sai fina»: la tensión física estrecha la voz." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["O corpo preparado sustenta a voz em público", "A voz não se pode treinar", "O microfone resolve tudo"], answer: 0, why: "La idea central: preparar el cuerpo es preparar la voz; el micrófono es solo tecnología." },
      ],
      vf: [
        { text: "O aquecimento do texto dura dez minutos.", value: false, why: "«Cabe em dois minutos»: la práctica es de dos minutos." },
        { text: "O corpo que fala em público é comparado ao microfone.", value: true, why: "«Preparado como o microfone: testado e solto»." },
        { text: "Nenhum público confia numa voz tensa, segundo o texto.", value: true, why: "Está literal en el segundo párrafo." },
      ],
    },
    {
      id: "md-pt-c1-04-2", theme: "qui e ora",
      title: "Os primeiros vinte segundos", titleEs: "Los primeros veinte segundos", minutes: 2,
      paragraphs: [
        { it: "O público decide nos primeiros vinte segundos — e o orador também. Quem sobe ao palco a recitar o ensaio de cabeça perde o momento em que a sala decide se o ouve ou se o tolera. Os primeiros vinte segundos não são de conteúdo: são de encontro; o conteúdo vem depois, quando já há quem o queira ouvir.", es: "El público decide en los primeros veinte segundos — y el orador también. Quien sube al escenario recitando el ensayo de memoria pierde el momento en que la sala decide si lo escucha o si lo tolera. Los primeros veinte segundos no son de contenido: son de encuentro; el contenido viene después, cuando ya hay quien quiera escucharlo." },
        { it: "A prática é esta: em vez de decorar a primeira frase, decide apenas o primeiro olhar. Procurar um rosto na terceira fila, respirar uma vez, e só então começar. O aqui e o agora de uma palestra cabem nesse intervalo mínimo entre subir e falar. Quem começa presente, recupera; quem começa ausente, ensaia — e a sala nota a diferença.", es: "La práctica es esta: en vez de memorizar la primera frase, decide solo la primera mirada. Buscar un rostro en la tercera fila, respirar una vez, y solo entonces empezar. El aquí y el ahora de una charla caben en ese intervalo mínimo entre subir y hablar. Quien empieza presente, recupera; quien empieza ausente, ensaya — y la sala nota la diferencia." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo memorizar um discurso inteiro", "La presencia en la apertura: el primer momento de una charla", "Un curso de design de diapositivas"],
        answer: 1,
        why: "El título marca la ventana temporal de la apertura: presencia, no memorización ni diseño.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "O público decide nos primeiros vinte segundos.",
          "Os primeiros vinte segundos são de encontro.",
          "Decide-se o primeiro olhar, não a frase decorada.",
          "As diapositivas devem ter letra vinte e quatro no mínimo.",
          "Quem começa presente, recupera; quem começa ausente, ensaia.",
        ],
        intruder: 3,
        why: "La regla tipográfica de las diapositivas es técnica de presentación, ajena a la reflexión sobre la presencia: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["O decoro perfeito é o mais importante", "A abertura é um encontro antes de ser conteúdo", "O público nunca decide nada"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Quem sobe a recitar perde o momento do encontro", "Procura-se um rosto na terceira fila e respira-se uma vez", "Quem começa ausente, ensaia"],
        distractors: ["O orador usou um teleponto", "A palestra durou quarenta minutos", "A terceira fila estava vazia"],
      },
    },
    {
      id: "md-pt-c1-04-3", theme: "relax mentale",
      title: "O medo é um hóspede", titleEs: "El miedo es un huésped", minutes: 2,
      paragraphs: [
        { it: "O medo de palco chega sempre sem convite: conhecem-no os principiantes e os veteranos, os atores e os professores. A diferença não está em o não ter — está em o alojar. Quem luta contra o medo gasta nele a energia que o discurso precisava; quem lhe dá um lugar transforma-o em combustível.", es: "El miedo escénico llega siempre sin invitación: lo conocen los principiantes y los veteranos, los actores y los profesores. La diferencia no está en no tenerlo — está en alojarlo. Quien lucha contra el miedo gasta en él la energía que el discurso necesitaba; quien le da un lugar lo transforma en combustible." },
        { it: "A técnica mental é hospitalidade: reconhecer o medo quando entra, dar-lhe uma cadeira e não o microfone. «Estás cá? Pois estou a ver-te; agora escuta.» O coração acelera porque o corpo se prepara para algo importante — a energia é a mesma; muda-lhe apenas o nome. Quem sobe ao palco com o medo sentado ao lado, fala; quem sobe com ele agarrado à garganta, engasga.", es: "La técnica mental es hospitalidad: reconocer el miedo cuando entra, darle una silla y no el micrófono. «¿Estás aquí? Pues te estoy viendo; ahora escucha.» El corazón acelera porque el cuerpo se prepara para algo importante — la energía es la misma; solo le cambia el nombre. Quien sube al escenario con el miedo sentado al lado, habla; quien sube con él agarrado a la garganta, se atraganta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo evitar hablar en público", "Alojar el miedo escénico en lugar de pelear con él", "Uma biografia de um ator famoso"],
        answer: 1,
        why: "La metáfora del huésped anuncia la hospitalidad con el miedo, no su evitación ni la biografía de nadie.",
      },
      sequence: {
        instr: "Ordena los pasos de la hospitalidad mental:",
        events: ["O medo chega sem convite", "Reconheces que ele entrou", "Dás-lhe uma cadeira, não o microfone", "O coração acelera e chamas-lhe energia", "Sobes ao palco com ele ao lado"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Vais subir ao palco daqui a pouco. Fecha os olhos e dá as boas-vindas ao que sentes: o coração rápido, as mãos frias, a cabeça cheia. Tudo isso é o corpo a dizer que o momento importa. Diz-lhe obrigado, uma vez, em silêncio. Agora respira três vezes, devagar, e deixa o medo sentar-se ao teu lado — não à frente de ti. Ele é mau condutor, mas é excelente passageiro. Quando entrares, entra a falar.",
        questions: [
          { q: "O que o corpo está a dizer quando o coração acelera?", kind: "literal", options: ["Que o momento importa", "Que estás doente", "Que devias fugir"], answer: 0, why: "«Tudo isso é o corpo a dizer que o momento importa»." },
          { q: "Onde se deixa sentar o medo?", kind: "literal", options: ["Ao teu lado, não à frente", "No palco", "Na primeira fila"], answer: 0, why: "«Deixa o medo sentar-se ao teu lado — não à frente de ti»." },
          { q: "Porque é que o medo é «mau condutor, excelente passageiro»?", kind: "inferencial", options: ["Porque não deve dirigir, apenas acompanhar", "Porque nunca aparece", "Porque gosta de carros"], answer: 0, why: "Se infiere: al lado (no al volante) el miedo acompaña sin controlar el discurso." },
          { q: "Como se deve entrar em palco, segundo o fecho?", kind: "inferencial", options: ["A falar", "Em silêncio total", "A correr"], answer: 0, why: "«Quando entrares, entra a falar»: entrar hablando evita que el miedo tome la delantera." },
        ],
      },
    },
  ],

  "pt-cu-c1-05": [
    {
      id: "md-pt-c1-05-1", theme: "meditazione",
      title: "Respirar entre dois números", titleEs: "Respirar entre dos números", minutes: 2,
      paragraphs: [
        { it: "Entre uma percentagem e a seguinte existe um espaço que nenhuma folha de cálculo regista: a respiração de quem apresenta. O analista que dispara números sem respirar contagia a sala com a própria pressa; o que respira entre dois valores dá a cada número o tempo de assentar. Os dados não têm ritmo — o ritmo dá-lho o corpo.", es: "Entre un porcentaje y el siguiente existe un espacio que ninguna hoja de cálculo registra: la respiración de quien presenta. El analista que dispara números sin respirar contagia a la sala con su propia prisa; el que respira entre dos valores le da a cada número el tiempo de asentarse. Los datos no tienen ritmo — el ritmo se lo da el cuerpo." },
        { it: "A prática cabe numa regra: uma frase, uma respiração; um gráfico, uma pausa. «As receitas subiram para 8,4 milhões» — pausa — «em termos homólogos». Quem medita assim a apresentação descobre que os números respiram melhor e que as perguntas difíceis assustam menos: já lá estava a calma, à espera de ser usada.", es: "La práctica cabe en una regla: una frase, una respiración; un gráfico, una pausa. «Los ingresos subieron a 8,4 millones» — pausa — «en términos interanuales». Quien medita así la presentación descubre que los números respiran mejor y que las preguntas difíciles asustan menos: la calma ya estaba ahí, esperando a ser usada." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso de Excel avançado", "Dar ritmo y calma a la presentación de datos", "Uma crítica aos relatórios financeiros"],
        answer: 1,
        why: "El título une respiración y números: el ritmo corporal del analista, no la herramienta de cálculo.",
      },
      quiz: [
        { q: "O que existe entre uma percentagem e a seguinte, segundo o texto?", kind: "literal", options: ["Um espaço que nenhuma folha de cálculo regista", "Um novo gráfico", "Uma pausa publicitária"], answer: 0, why: "«Existe um espaço que nenhuma folha de cálculo regista» está literal." },
        { q: "Porque é que o analista que respira dá a cada número «o tempo de assentar»?", kind: "inferencial", options: ["Porque a calma ajuda a sala a absorver o dado", "Porque os números mudam com o tempo", "Porque a folha de cálculo o exige"], answer: 0, why: "Se infiere del contraste: el que no respira contagia la prisa; el que respira asienta el dato." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["O ritmo da apresentação vem do corpo, não dos dados", "Os gráficos são dispensáveis", "Falar depressa impressiona mais"], answer: 0, why: "«Os dados não têm ritmo — o ritmo dá-lho o corpo» resume la tesis del texto." },
      ],
      vf: [
        { text: "O texto diz que os dados têm ritmo próprio.", value: false, why: "Dice lo contrario: «os dados não têm ritmo»." },
        { text: "A regra da prática é «uma frase, uma respiração».", value: true, why: "Está literal en el segundo párrafo." },
        { text: "As perguntas difíceis assustam menos quando já há calma.", value: true, why: "«Já lá estava a calma, à espera de ser usada»." },
      ],
    },
    {
      id: "md-pt-c1-05-2", theme: "spiritualità",
      title: "A verdade não precisa de adjetivos", titleEs: "La verdad no necesita adjetivos", minutes: 2,
      paragraphs: [
        { it: "Há uma ética discreta em apresentar resultados: dizer «a margem estabilizou» quando estabilizou e «a margem pressionou» quando pressionou, sem escolher adjetivos que disfarçem a verdade. Quem maquilha os números com adjetivos bonitos ganha a reunião e perde a confiança; quem os apresenta nus ganha algo mais raro — o crédito de quem decide.", es: "Hay una ética discreta en presentar resultados: decir «el margen se estabilizó» cuando se estabilizó y «el margen fue presionado» cuando fue presionado, sin elegir adjetivos que disfracen la verdad. Quien maquilla los números con adjetivos bonitos gana la reunión y pierde la confianza; quien los presenta desnudos gana algo más raro — el crédito de quien decide." },
        { it: "Esta limpidez tem qualquer coisa de espiritual porque exige coragem sem espetáculo: admitir que o trimestre apertou, que a energia custou, que a previsão é prudente. A mesa de administração não precisa de animadores; precisa de adultos que digam o que é, para decidir o que fazer. E a frase mais difícil, dita com calma, é muitas vezes a mais útil — a verdade não precisa de adjetivos; precisa de testemunhas.", es: "Esta limpidez tiene algo de espiritual porque exige valentía sin espectáculo: admitir que el trimestre apretó, que la energía costó, que la previsión es prudente. La mesa de administración no necesita animadores; necesita adultos que digan qué es, para decidir qué hacer. Y la frase más difícil, dicha con calma, es muchas veces la más útil — la verdad no necesita adjetivos; necesita testigos." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Um manual de retórica financeira", "La honestidad serena al presentar resultados", "Como animar uma reunião chata"],
        answer: 1,
        why: "El título anuncia la desnudez de la verdad: honestidad en la presentación, no oratoria ni animación.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Dizer «a margem estabilizou» quando estabilizou é ética discreta.",
          "Quem maquilha os números ganha a reunião e perde a confiança.",
          "Admitir que o trimestre apertou exige coragem sem espetáculo.",
          "O buffet da reunião tinha pastéis de nata.",
          "A verdade não precisa de adjetivos; precisa de testemunhas.",
        ],
        intruder: 3,
        why: "El buffet es un detalle material ajeno a la reflexión sobre la honestidad en los datos: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Os adjetivos tornam tudo mais claro", "Apresentar a verdade nua constrói confiança", "As reuniões deviam ser mais curtas"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Quem maquilha os números perde a confiança", "A mesa de administração precisa de adultos que digam o que é", "A frase mais difícil, dita com calma, é a mais útil"],
        distractors: ["A diretora pediu mais gráficos", "A margem subiu para trinta por cento", "O buffet foi cancelado"],
      },
    },
    {
      id: "md-pt-c1-05-3", theme: "qui e ora",
      title: "O gráfico e a janela de Braga", titleEs: "El gráfico y la ventana de Braga", minutes: 2,
      paragraphs: [
        { it: "No meio da apresentação dos resultados, atrás do portátil, há uma janela com o tempo de Braga: uma pessoa a passar com o cão, um autocarro, uma nuvem. O analista que a vê sem a ver perde o único descanso que a sala oferece; o que a nota, um segundo inteiro, regressa aos números como quem regressa de uma pequena viagem.", es: "En medio de la presentación de resultados, detrás del portátil, hay una ventana con el tiempo de Braga: una persona pasando con el perro, un autobús, una nube. El analista que la ve sin verla pierde el único descanso que la sala ofrece; el que la nota, un segundo entero, vuelve a los números como quien vuelve de un pequeño viaje." },
        { it: "O aqui e o agora não pedem que abandones o gráfico: pedem que o gráfico caiba dentro do mundo. Um EBITDA é uma fotografia; a janela é o filme. Entre uma coluna e a seguinte, olhar para fora não é distração — é lembrar para quem existem afinal os números: para as pessoas que passam na rua, com as suas contas, os seus cães e os seus comboios.", es: "El aquí y el ahora no piden que abandones el gráfico: piden que el gráfico quepa dentro del mundo. Un EBITDA es una fotografía; la ventana es la película. Entre una columna y la siguiente, mirar hacia fuera no es distracción — es recordar para quién existen al fin los números: para las personas que pasan por la calle, con sus cuentas, sus perros y sus trenes." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Uma guía turística de Braga", "La ventana como pausa presente entre los números", "Uma análise do mercado imobiliário"],
        answer: 1,
        why: "El título opone gráfico y ventana: la pausa presente durante la presentación, no turismo ni mercado.",
      },
      sequence: {
        instr: "Ordena los pasos según el texto:",
        events: ["Estás a apresentar os resultados", "Notas a janela atrás do portátil", "Olhas para fora um segundo inteiro", "Regressas aos números como de uma pequena viagem", "Lembras para quem existem os números"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Pausa entre dois números. Olha agora para a janela — sim, essa mesmo que está atrás do ecrã — e encontra uma coisa viva: uma pessoa, uma árvore, um pássaro. Fica com ela durante uma respiração inteira. Não estás a perder tempo: estás a lembrar o tamanho real das coisas. O gráfico mede a empresa; a janela mede o mundo. Quando voltares às colunas, volta inteiro — e diz o próximo número como se ele importasse a alguém, porque importa.",
        questions: [
          { q: "O que se procura na janela?", kind: "literal", options: ["Uma coisa viva", "Um número exato", "Um horário de comboios"], answer: 0, why: "«Encontra uma coisa viva: uma pessoa, uma árvore, um pássaro»." },
          { q: "Quanto tempo se fica com ela?", kind: "literal", options: ["Uma respiração inteira", "Uma hora", "O resto da reunião"], answer: 0, why: "«Fica com ela durante uma respiração inteira»." },
          { q: "O que mede o gráfico e o que mede a janela?", kind: "inferencial", options: ["O gráfico mede a empresa; a janela mede o mundo", "Os dois medem o mesmo", "A janela mede a empresa"], answer: 0, why: "«O gráfico mede a empresa; a janela mede o mundo»: se infiere la escala distinta de cada uno." },
          { q: "Como se diz o próximo número ao voltar?", kind: "inferencial", options: ["Como se ele importasse a alguém", "Com voz muito alta", "Sem pausas nenhumas"], answer: 0, why: "«Diz o próximo número como se ele importasse a alguém, porque importa»." },
        ],
      },
    },
  ],

  "pt-cu-c1-06": [
    {
      id: "md-pt-c1-06-1", theme: "relax mentale",
      title: "Descompor o medo", titleEs: "Descomponer el miedo", minutes: 2,
      paragraphs: [
        { it: "Um caso de estimação assusta como assusta qualquer problema grande: pela sua sombra, não pelo seu tamanho. A técnica da consultoria serve para a vida: decompõe o que assusta em partes navegáveis e cada parte revela-se menor do que o medo que a precedeu. Ninguém estima uma cidade inteira de uma vez; ninguém atravessa uma semana inteira de uma vez.", es: "Un caso de estimación asusta como asusta cualquier problema grande: por su sombra, no por su tamaño. La técnica de la consultoría sirve para la vida: descompone lo que asusta en partes navegables y cada parte se revela menor que el miedo que la precedió. Nadie estima una ciudad entera de una vez; nadie atraviesa una semana entera de una vez." },
        { it: "A mente relaxa quando estrutura: parte do princípio de que o medo também se decompõe — uma parte é informação que falta, outra é imaginação a mais. Pergunta a ti próprio, como faria um consultor: qual é a parte desta ansiedade que é um dado? Qual é a premissa conservadora que me permite avançar? O resto é ruído — e o ruído não se resolve, escuta-se até passar.", es: "La mente se relaja cuando estructura: parte del principio de que el miedo también se descompone — una parte es información que falta, otra es imaginación de más. Pregúntate, como haría un consultor: ¿cuál es la parte de esta ansiedad que es un dato? ¿Cuál es la premisa conservadora que me permite avanzar? El resto es ruido — y el ruido no se resuelve, se escucha hasta que pasa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Um método de consultoria financeira", "Descomponer la ansiedad como se descompone un caso", "Como evitar problemas no trabalho"],
        answer: 1,
        why: "El título traslada la técnica del caso a la vida interior: descomponer el miedo, no las finanzas.",
      },
      quiz: [
        { q: "Porque é que um problema grande assusta, segundo o texto?", kind: "literal", options: ["Pela sua sombra, não pelo seu tamanho", "Porque nunca tem solução", "Porque é sempre matemático"], answer: 0, why: "«Pela sua sombra, não pelo seu tamanho» está literal." },
        { q: "O que revela cada parte quando se decompõe o problema?", kind: "inferencial", options: ["Que é menor do que o medo que a precedeu", "Que o problema cresceu", "Que não há dados"], answer: 0, why: "«Cada parte revela-se menor do que o medo que a precedeu»: se infiere el alivio de estructurar." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["Estruturar acalma: decompor o medo em partes tratáveis", "A ansiedade é uma doença sem remédio", "Os consultores nunca têm medo"], answer: 0, why: "La idea central: la estructura de la consultoría, aplicada a la ansiedad, la vuelve tratable." },
      ],
      vf: [
        { text: "O texto diz que se atravessa uma semana inteira de uma vez.", value: false, why: "Dice lo contrario: «ninguém atravessa uma semana inteira de uma vez»." },
        { text: "Parte da ansiedade é imaginação a mais, segundo o texto.", value: true, why: "«Outra é imaginação a mais» está literal." },
        { text: "O ruído resolve-se com cálculo, segundo o texto.", value: false, why: "«O ruído não se resolve, escuta-se até passar»." },
      ],
    },
    {
      id: "md-pt-c1-06-2", theme: "relax fisico",
      title: "Os pés debaixo da mesa", titleEs: "Los pies debajo de la mesa", minutes: 2,
      paragraphs: [
        { it: "Na entrevista de caso, debaixo da mesa, acontece um diálogo que ninguém vê: o dos pés com o chão. Quando a pergunta difícil chega, os pés levantam-se sem licença — o corpo prepara-se para fugir de uma sala onde não se pode fugir. Pousá-los de novo é a forma silenciosa de dizer ao sistema nervoso: ficamos, não há perigo aqui.", es: "En la entrevista de caso, debajo de la mesa, ocurre un diálogo que nadie ve: el de los pies con el suelo. Cuando llega la pregunta difícil, los pies se levantan sin permiso — el cuerpo se prepara para huir de una sala donde no se puede huir. Posarlos de nuevo es la forma silenciosa de decirle al sistema nervioso: nos quedamos, no hay peligro aquí." },
        { it: "A âncora física é a mais confiável das técnicas: as mãos pousadas na mesa, as costas apoiadas, os dois pés inteiros no chão. Com o corpo ancorado, a cabeça pensa melhor — e a estimativa sai em voz alta, uma premissa de cada vez. Os entrevistadores ouvem o que dizes; o corpo, esse, está sempre a dizer se confias no que dizes.", es: "El ancla física es la más confiable de las técnicas: las manos posadas en la mesa, la espalda apoyada, los dos pies enteros en el suelo. Con el cuerpo anclado, la cabeza piensa mejor — y la estimación sale en voz alta, una premisa cada vez. Los entrevistadores oyen lo que dices; el cuerpo, ese, está siempre diciendo si confías en lo que dices." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Uma guía de calçado profissional", "El anclaje físico bajo la mesa en una entrevista", "Como falar mais alto nas reuniões"],
        answer: 1,
        why: "El título señala los pies bajo la mesa: la técnica física discreta de la entrevista, no el calzado.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Os pés levantam-se sem licença quando chega a pergunta difícil.",
          "Pousá-los de novo diz ao sistema nervoso: ficamos.",
          "As mãos pousadas e as costas apoiadas são âncoras físicas.",
          "A empresa recrutou duzentos analistas este ano.",
          "O corpo está sempre a dizer se confias no que dizes.",
        ],
        intruder: 3,
        why: "El dato de reclutamiento es información corporativa ajena a la técnica de anclaje: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["O corpo ancorado sustenta o pensamento", "Há que esconder as mãos na entrevista", "A entrevista ganha-se a falar depressa"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Os pés pousados dizem ao sistema nervoso que não há perigo", "A âncora física é a mais confiável das técnicas", "Com o corpo ancorado, a cabeça pensa melhor"],
        distractors: ["A entrevista durou duas horas", "O candidato usou uma calculadora", "Os pés eram do tamanho quarenta e dois"],
      },
    },
    {
      id: "md-pt-c1-06-3", theme: "meditazione",
      title: "A estimativa interior", titleEs: "La estimación interior", minutes: 3,
      paragraphs: [
        { it: "Fazemos estimativas todos os dias sem lhes chamar assim: quantos minutos faltam, quantas pessoas cabem, quanto aguenta a paciência. O caso de consultoria não ensina só a contar cafés — ensina a habitar a incerteza com método. Entre o número exato, que não existe, e o palpite cego, existe uma terceira arte: a estimativa, que é o palpite com espinha dorsal.", es: "Hacemos estimaciones todos los días sin llamarlas así: cuántos minutos faltan, cuántas personas caben, cuánto aguanta la paciencia. El caso de consultoría no enseña solo a contar cafés — enseña a habitar la incertidumbre con método. Entre el número exacto, que no existe, y el palpite a ciegas, existe un tercer arte: la estimación, que es el palpite con columna vertebral." },
        { it: "Meditar é, neste terreno, aceitar a ordem de grandeza como forma de paz: saber que «na casa dos oitocentos mil» basta, e que a vida raramente exige mais precisão do que a nossa atenção consegue dar. Quem pede certezas absolutas a si próprio vive sempre abaixo do resultado; quem estima respira — e corrige pelo caminho, que é como a vida gosta de ser vivida.", es: "Meditar es, en este terreno, aceptar el orden de magnitud como forma de paz: saber que «en torno a los ochocientos mil» basta, y que la vida raramente exige más precisión que la que nuestra atención puede dar. Quien se pide certezas absolutas vive siempre por debajo del resultado; quien estima respira — y corrige por el camino, que es como a la vida le gusta ser vivida." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Um tratado de estatística", "La estimación como arte de habitar la incertidumbre", "Como abrir um café em Lisboa"],
        answer: 1,
        why: "El título interioriza la técnica del caso: estimar como forma de paz, no como estadística ni negocio.",
      },
      sequence: {
        instr: "Ordena los pasos de la estimación serena:",
        events: ["Reconheces que o número exato não existe", "Decompões o problema em partes", "Assumes premissas conservadoras", "Chegas a uma ordem de grandeza", "Corrige-se pelo caminho, sem culpa"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Exercício de estimativa interior. Pergunta a ti próprio, sem pressa: quantas chávenas de café já bebi nesta vida? Não precisas do número certo — precisas é do caminho: uma por dia, durante quantos anos, quantas por semana. Deixa a aritmética andar devagar e observa o teu corpo enquanto conta. Se aparecer a pressa, respira uma vez e continua. O número final importa pouco; o que treinas é a calma de pensar em voz alta com o que tens.",
        questions: [
          { q: "O que se pergunta no exercício?", kind: "literal", options: ["Quantas chávenas de café já bebi nesta vida", "Quantos países visitei", "Quanto custa um café em Lisboa"], answer: 0, why: "«Quantas chávenas de café já bebi nesta vida?» está literal." },
          { q: "O que se faz se aparecer a pressa?", kind: "literal", options: ["Respira-se uma vez e continua-se", "Para-se o exercício", "Muda-se de pergunta"], answer: 0, why: "«Se aparecer a pressa, respira uma vez e continua»." },
          { q: "Porque é que o número final importa pouco?", kind: "inferencial", options: ["Porque o que se treina é a calma de pensar com o que se tem", "Porque ninguém gosta de café", "Porque o número é sempre zero"], answer: 0, why: "«O que treinas é a calma de pensar em voz alta com o que tens»." },
          { q: "Que relação o áudio estabelece entre o caminho e o número?", kind: "inferencial", options: ["O caminho importa mais do que o número exato", "O número justifica o caminho", "Nenhum dos dois importa"], answer: 0, why: "Se infiere de «não precisas do número certo — precisas é do caminho»." },
        ],
      },
    },
  ],

  "pt-cu-c1-07": [
    {
      id: "md-pt-c1-07-1", theme: "spiritualità",
      title: "A clareza é uma forma de respeito", titleEs: "La claridad es una forma de respeto", minutes: 3,
      paragraphs: [
        { it: "O juridiquês esconde; o português claro respeita. Quando a jurista traduz «o primeiro outorgante» por «a empresa», não está a simplificar por preguiça: está a devolver ao leitor o lugar de interlocutor que a tradição lhe roubou. A clareza é uma forma discreta de generosidade — e, talvez por isso, uma prática com qualquer coisa de espiritual.", es: "El juridiquês esconde; el portugués claro respeta. Cuando la jurista traduce «el primer otorgante» por «la empresa», no está simplificando por pereza: está devolviendo al lector el lugar de interlocutor que la tradición le robó. La claridad es una forma discreta de generosidad — y, quizá por eso, una práctica con algo de espiritual." },
        { it: "Escrever claro exige mais esforço que escrever denso: cada fórmula sacrificada é um pequeno ato de humildade. «Sem prejuízo do disposto na lei» poderia ser «além do que a lei manda»; o ofício está em dizer o que manda sem esconder quem manda. A frase simples, que qualquer pessoa entende à primeira, é a mais difícil de escrever — como a bondade simples, que todos reconhecem e poucos praticam.", es: "Escribir claro exige más esfuerzo que escribir denso: cada fórmula sacrificada es un pequeño acto de humildad. «Sin perjuicio de lo dispuesto en la ley» podría ser «además de lo que la ley manda»; el oficio está en decir lo que manda sin esconder quién manda. La frase simple, que cualquiera entiende a la primera, es la más difícil de escribir — como la bondad simple, que todos reconocen y pocos practican." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Uma crítica aos juristas", "La claridad como generosidad y respeto al lector", "Um glossário de termos legais"],
        answer: 1,
        why: "El título iguala claridad y respeto: la ética del lenguaje claro, no una crítica ni un glosario.",
      },
      quiz: [
        { q: "O que faz a jurista ao traduzir «o primeiro outorgante»?", kind: "literal", options: ["Devolve ao leitor o lugar de interlocutor", "Esconde a responsabilidade", "Encurta o contrato por lei"], answer: 0, why: "«Está a devolver ao leitor o lugar de interlocutor» está literal." },
        { q: "Porque é que a frase simples é a mais difícil de escrever?", kind: "inferencial", options: ["Porque exige mais esforço e humildade que a densa", "Porque a lei a proíbe", "Porque ninguém a lê"], answer: 0, why: "Se infiere de «cada fórmula sacrificada é um pequeno ato de humildade»." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["A clareza é uma prática de respeito e generosidade", "O juridiquês é mais eficiente", "Os contratos deviam ser mais longos"], answer: 0, why: "La idea central: escribir claro es un acto de generosidad hacia el lector." },
      ],
      vf: [
        { text: "O texto diz que escrever claro exige menos esforço que escrever denso.", value: false, why: "Dice lo contrario: «exige mais esforço que escrever denso»." },
        { text: "A clareza é comparada a uma prática espiritual.", value: true, why: "«Uma prática com qualquer coisa de espiritual» está literal." },
        { text: "«Sem prejuízo do disposto na lei» poderia ser «além do que a lei manda», segundo o texto.", value: true, why: "La traducción propuesta aparece en el segundo párrafo." },
      ],
    },
    {
      id: "md-pt-c1-07-2", theme: "meditazione",
      title: "Ler devagar o que assinamos", titleEs: "Leer despacio lo que firmamos", minutes: 2,
      paragraphs: [
        { it: "Assinamos mais do que lemos — e essa desproporção é a porta por onde entram os problemas. Ler devagar um contrato é uma prática de atenção parecida com a meditação: cada cláusula uma respiração, cada período uma pergunta («o que é que isto me obriga a fazer?»). O papel não foge; a pressa, essa, sim.", es: "Firmamos más de lo que leemos — y esa desproporción es la puerta por donde entran los problemas. Leer despacio un contrato es una práctica de atención parecida a la meditación: cada cláusula una respiración, cada período una pregunta («¿qué es lo que esto me obliga a hacer?»). El papel no huye; la prisa, esa, sí." },
        { it: "A técnica chama-se leitura presente: pousar o dedo na linha, sublinhar o que não se entende à primeira e parar aí — não continuar por educação. Perguntar «o que quer dizer exatamente esta cláusula?» é um ato de cuidado próprio que nenhum jurista despreza. A assinatura assenta melhor sobre uma leitura inteira; a pressa assina por nós coisas que nunca dissemos.", es: "La técnica se llama lectura presente: posar el dedo en la línea, subrayar lo que no se entiende a la primera y parar ahí — no continuar por educación. Preguntar «¿qué quiere decir exactamente esta cláusula?» es un acto de cuidado propio que ningún jurista desprecia. La firma se asienta mejor sobre una lectura entera; la prisa firma por nosotros cosas que nunca dijimos." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Como assinar contratos mais depressa", "Leer con presencia lo que vamos a firmar", "Uma história do notariado português"],
        answer: 1,
        why: "El título opone lentitud y firma: la lectura presente del contrato, no la velocidad ni la historia notarial.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Assinamos mais do que lemos.",
          "Cada cláusula uma respiração, cada período uma pergunta.",
          "Perguntar o que quer dizer a cláusula é cuidado próprio.",
          "O contrato de arrendamento tinha doze páginas de anexos.",
          "A assinatura assenta melhor sobre uma leitura inteira.",
        ],
        intruder: 3,
        why: "El número de anexos es un detalle material del documento, ajeno a la práctica de la lectura presente: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Ler devagar o que assinas é cuidado próprio", "Os contratos não devem ser lidos", "Perguntar incomoda os juristas"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Cada cláusula uma respiração, cada período uma pergunta", "Sublinha-se o que não se entende à primeira e para-se aí", "A pressa assina por nós coisas que nunca dissemos"],
        distractors: ["O dedo estava com tinta", "A leitura durou três dias", "O jurista recusou responder"],
      },
    },
    {
      id: "md-pt-c1-07-3", theme: "relax mentale",
      title: "A mente que pergunta sem medo", titleEs: "La mente que pregunta sin miedo", minutes: 2,
      paragraphs: [
        { it: "Diante de uma jurista, o leigo hesita em perguntar o óbvio: «o que é um outorgante?». A mente que teme parecer ignorante fica duplamente ignorante — não sabe e não pergunta. O relaxamento mental começa aqui: aceitar que não saber é a condição normal de quem lê um contrato e que a pergunta é o único atalho honesto.", es: "Ante una jurista, el lego duda en preguntar lo obvio: «¿qué es un otorgante?». La mente que teme parecer ignorante queda doblemente ignorante — no sabe y no pregunta. La relajación mental empieza aquí: aceptar que no saber es la condición normal de quien lee un contrato y que la pregunta es el único atajo honesto." },
        { it: "A prática é simples: transformar cada dúvida em pergunta escrita, sem a editar para soar inteligente. «Não entendi a cláusula sete» já é uma frase perfeita. As respostas esclarecem; a vergonha, essa, só ensaia. E quando a cabeça ensaiar a pergunta pela terceira vez sem a fazer, respira fundo e faz-na: as perguntas não feitas pagam juros.", es: "La práctica es simple: transformar cada duda en pregunta escrita, sin editarla para sonar inteligente. «No entendí la cláusula séptima» ya es una frase perfecta. Las respuestas aclaran; la vergüenza, esa, solo ensaya. Y cuando la cabeza ensaye la pregunta por tercera vez sin hacerla, respira hondo y hazla: las preguntas no hechas pagan intereses." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Um curso de direito contratual", "Preguntar sin miedo lo que no se entiende", "Como evitar contratos de trabalho"],
        answer: 1,
        why: "El título anuncia la mente que pregunta: vencer el miedo al ridículo, no el derecho contractual.",
      },
      sequence: {
        instr: "Ordena los pasos de la práctica:",
        events: ["Surge a dúvida diante da cláusula", "A mente ensaia a pergunta para soar inteligente", "Reconheces que não saber é a condição normal", "Transformas a dúvida em pergunta escrita", "Fazes a pergunta e recebes a resposta"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Tens um contrato à tua frente e uma dúvida no meio do peito. Respira uma vez e olha para a cláusula que não entendeste. Lê-a em voz alta, devagar, como quem lê um poema desconhecido. Depois formula, em voz alta também, a pergunta mais simples que ela te desperta — sem adornos, sem desculpas. «O que me obriga esta cláusula?» já chega. A pergunta simples é a chave que abre as portas dos contratos e, muitas vezes, das conversas.",
        questions: [
          { q: "O que está à tua frente e no meio do peito?", kind: "literal", options: ["Um contrato e uma dúvida", "Uma fatura e um café", "Uma carteira e um lápis"], answer: 0, why: "«Um contrato à tua frente e uma dúvida no meio do peito»." },
          { q: "Como se lê a cláusula?", kind: "literal", options: ["Em voz alta, devagar", "Em silêncio, depressa", "Ao contrário"], answer: 0, why: "«Lê-a em voz alta, devagar, como quem lê um poema desconhecido»." },
          { q: "Porque é que a pergunta simples «já chega»?", kind: "inferencial", options: ["Porque abre as portas dos contratos e das conversas", "Porque impressiona o jurista", "Porque substitui a leitura"], answer: 0, why: "«A pergunta simples é a chave que abre as portas»." },
          { q: "Que imagem o áudio associa à pergunta?", kind: "inferencial", options: ["Uma chave que abre portas", "Uma pedra que fecha caminhos", "Uma janela que se parte"], answer: 0, why: "Se infiere de la metáfora de la clave y las puertas." },
        ],
      },
    },
  ],

  "pt-cu-c1-08": [
    {
      id: "md-pt-c1-08-1", theme: "qui e ora",
      title: "O repórter presente", titleEs: "El reportero presente", minutes: 3,
      paragraphs: [
        { it: "O repórter que chega, gravadora na mão, já a fazer perguntas, perde a matéria: o que só se vê quando se está inteiro. A reportagem nasce nos primeiros minutos de nada — o café aceitado, a rede remendada à frente de nós, o silêncio em que o pescador decide se fala. Presença é a técnica mais antiga do jornalismo e a única que não se ensina em manual.", es: "El reportero que llega, grabadora en mano, ya haciendo preguntas, pierde la materia: lo que solo se ve cuando se está entero. El reportaje nace en los primeros minutos de nada — el café aceptado, la red remendada delante de nosotros, el silencio en que el pescador decide si habla. Presencia es la técnica más antigua del periodismo y la única que no se enseña en manual." },
        { it: "Estar no terreno é deixar-se ficar: olhar as mãos, o cais, o cheiro que o caderno não regista. A cena escreve-se depois, mas só se escreve se antes for vivida. Quando o repórter pergunta a si próprio «o que é que aqui respira?», a resposta — o mar, a fadiga, a esperança — é o fio condutor que nenhum arquivo fornece.", es: "Estar en el terreno es quedarse: mirar las manos, el muelle, el olor que el cuaderno no registra. La escena se escribe después, pero solo se escribe si antes fue vivida. Cuando el reportero se pregunta «¿qué es lo que aquí respira?», la respuesta — el mar, el cansancio, la esperanza — es el hilo conductor que ningún archivo proporciona." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Um manual de gravação", "La presencia del periodista en el terreno", "A história de um pescador famoso"],
        answer: 1,
        why: "El título anuncia al reportero presente: la técnica de la presencia, no el equipo ni la biografía.",
      },
      quiz: [
        { q: "Quando nasce a reportagem, segundo o texto?", kind: "literal", options: ["Nos primeiros minutos de nada", "Na redação, ao escrever", "No arquivo do jornal"], answer: 0, why: "«A reportagem nasce nos primeiros minutos de nada» está literal." },
        { q: "Porque é que a cena «só se escreve se antes for vivida»?", kind: "inferencial", options: ["Porque a presença é a fonte da narrativa", "Porque a redação proíbe imaginação", "Porque os leitores exigem factos"], answer: 0, why: "Se infiere: sin presencia no hay escena, y sin escena no hay reportaje." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["A presença é a técnica mais antiga do jornalismo", "As perguntas devem vir sempre primeiro", "O caderno regista tudo o que importa"], answer: 0, why: "«Presença é a técnica mais antiga do jornalismo» resume la tesis." },
      ],
      vf: [
        { text: "O texto diz que a presença se ensina em manual.", value: false, why: "Dice lo contrario: «a única que não se ensina em manual»." },
        { text: "O silêncio é o momento em que o pescador decide se fala.", value: true, why: "Está literal en el primer párrafo." },
        { text: "O caderno regista o cheiro, segundo o texto.", value: false, why: "«O cheiro que o caderno não regista»." },
      ],
    },
    {
      id: "md-pt-c1-08-2", theme: "relax fisico",
      title: "Caminhar devagar pela Costa Nova", titleEs: "Caminar despacio por la Costa Nova", minutes: 2,
      paragraphs: [
        { it: "Caminhar devagar junto ao mar é uma lição de ritmo: o corpo afrouxa ao ritmo das ondas, os ombros descem como a maré, e a respiração encontra, sem mandar, o compasso da água. Quem caminha a correr pela Costa Nova não vê a costa nem a si — vê quilómetros. Quem caminha devagar vê tudo: as redes a secar, o cão do pescador, a luz a mudar de humor.", es: "Caminar despacio junto al mar es una lección de ritmo: el cuerpo afloja al ritmo de las olas, los hombros bajan como la marea, y la respiración encuentra, sin mandarlo, el compás del agua. Quien camina corriendo por la Costa Nova no ve la costa ni se ve a sí mismo — ve kilómetros. Quien camina despacio lo ve todo: las redes secándose, el perro del pescador, la luz cambiando de humor." },
        { it: "A prática física cabe no passo: pés que sentem o chão, mandíbula que larga, ombros que descem a cada onda ouvida. Vinte minutos de caminhada lenta valem, para o corpo, o que a sesta vale para a cabeça. E ao fim do percurso, o músculo que mais descansa é o mais esquecido: o que aperta o dia inteiro sem ninguém dar por isso.", es: "La práctica física cabe en el paso: pies que sienten el suelo, mandíbula que suelta, hombros que bajan con cada ola oída. Veinte minutos de caminata lenta valen, para el cuerpo, lo que la siesta vale para la cabeza. Y al final del recorrido, el músculo que más descansa es el más olvidado: el que aprieta el día entero sin que nadie lo note." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Um treino desportivo intenso", "Caminar despacio junto al mar para soltar el cuerpo", "Uma guía de restaurantes de Aveiro"],
        answer: 1,
        why: "El título anuncia el paseo lento: relajación física junto al mar, no deporte ni gastronomía.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "O corpo afrouxa ao ritmo das ondas.",
          "Quem caminha devagar vê as redes a secar e a luz a mudar.",
          "Os ombros descem a cada onda ouvida.",
          "As casas listadas da Costa Nova foram pintadas em 1930.",
          "O músculo que mais descansa é o mais esquecido.",
        ],
        intruder: 3,
        why: "La fecha de pintura de las casas es un dato histórico ajeno a la práctica del paseo consciente: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Caminhar devagar junto ao mar relaxa o corpo e o ritmo", "Correr é a melhor forma de conhecer um lugar", "O mar deve evitar-se no inverno"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A respiração encontra o compasso da água", "Quem caminha a correr vê quilómetros, não a costa", "Vinte minutos de caminhada lenta valem uma sesta para o corpo"],
        distractors: ["O passeio terminou com um mergulho", "As redes eram de nylon azul", "O cão do pescador chamava-se Bolinha"],
      },
    },
    {
      id: "md-pt-c1-08-3", theme: "spiritualità",
      title: "Ouvir a voz dos que ficam", titleEs: "Escuchar la voz de los que se quedan", minutes: 3,
      paragraphs: [
        { it: "Dar voz aos protagonistas é quase um ato sagrado do ofício: o repórter cala-se para que outro fale, e o que regressa no caderno não é a voz do repórter — é a do Sr. Joaquim, com o seu «não é profissão, é uma doença». Escutar sem adjetivos de autor é reverência: a vida do outro não precisa de maquilhagem jornalística para ser digna.", es: "Dar voz a los protagonistas es casi un acto sagrado del oficio: el reportero se calla para que otro hable, y lo que regresa en el cuaderno no es la voz del reportero — es la del Sr. Joaquim, con su «no es profesión, es una enfermedad». Escuchar sin adjetivos de autor es reverencia: la vida del otro no necesita maquillaje periodístico para ser digna." },
        { it: "Há uma dimensão espiritual nesta escuta: reconhecer que toda a vida encerra uma história que merece ser contada com exatidão. O pescador que ficou quando todos partiram, a aldeia que se esvazia, o ofício que morre — ouvi-los é recusar que desapareçam duas vezes. Escrever o que se ouviu, sem enfeitar, é a forma mais simples de gratidão: a de testemunhar.", es: "Hay una dimensión espiritual en esta escucha: reconocer que toda vida encierra una historia que merece ser contada con exactitud. El pescador que se quedó cuando todos se fueron, la aldea que se vacía, el oficio que muere — escucharlos es negarse a que desaparezcan dos veces. Escribir lo que se oyó, sin adornar, es la forma más simple de gratitud: la de testimoniar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Como entrevistar celebridades", "Escuchar y testimoniar la voz de los que se quedan", "A história da pesca industrial"],
        answer: 1,
        why: "El título anuncia la escucha de quienes quedan: testimonio y respeto, no fama ni historia industrial.",
      },
      sequence: {
        instr: "Ordena los pasos del ofício según el texto:",
        events: ["O repórter chega e cala-se", "O protagonista fala da própria vida", "O repórter escuta sem adjetivos de autor", "Escreve o que ouviu, sem enfeitar", "A história testemunhada sobrevive à partida"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Exercício de escuta antes da próxima entrevista. Escolhe uma pessoa mais velha que conheças e faz-lhe uma pergunta única: como era um dia normal na tua vida aos vinte anos? Depois, cala-te. Não anotes nada nos primeiros minutos: escuta apenas, com o corpo virado para a pessoa. Quando ela parar, espera três segundos antes de falar — muitas vezes é aí que vem a frase que valia a viagem. A escuta é a entrevista mais antiga do mundo; a pergunta é só o convite.",
        questions: [
          { q: "Que pergunta se faz no exercício?", kind: "literal", options: ["Como era um dia normal na tua vida aos vinte anos", "Quanto ganhavas por mês", "Porque é que não saíste do país"], answer: 0, why: "«Como era um dia normal na tua vida aos vinte anos?» está literal." },
          { q: "O que se faz quando a pessoa para?", kind: "literal", options: ["Espera-se três segundos", "Interrompe-se com outra pergunta", "Liga-se o gravador"], answer: 0, why: "«Espera três segundos antes de falar»." },
          { q: "Porque é que não se anota nada nos primeiros minutos?", kind: "inferencial", options: ["Para escutar com o corpo inteiro", "Porque a tinta seca devagar", "Porque é proibido"], answer: 0, why: "Se infiere de «escuta apenas, com o corpo virado para a pessoa»: la escucha primero, la nota después." },
          { q: "Que relação o áudio estabelece entre pergunta e escuta?", kind: "inferencial", options: ["A pergunta é só o convite; a escuta é a entrevista", "A pergunta é a entrevista inteira", "A escuta substitui a pessoa"], answer: 0, why: "«A escuta é a entrevista mais antiga do mundo; a pergunta é só o convite»." },
        ],
      },
    },
  ],

  "pt-cu-c1-09": [
    {
      id: "md-pt-c1-09-1", theme: "meditazione",
      title: "O silêncio depois do «vamos vendo»", titleEs: "El silencio después del «vamos vendo»", minutes: 2,
      paragraphs: [
        { it: "Depois de um «vamos vendo», o silêncio da sala diz mais do que a frase. Quem aprende português numa empresa aprende também a habitá-lo sem pânico: nem tudo o que é ambíguo é mau, nem toda a ausência de sim é um não. Meditar sobre esta incerteza é aceitar que as línguas — como as vidas — têm velocidades diferentes de resposta.", es: "Después de un «vamos vendo», el silencio de la sala dice más que la frase. Quien aprende portugués en una empresa aprende también a habitarlo sin pánico: no todo lo que es ambiguo es malo, ni toda ausencia de sí es un no. Meditar sobre esta incertidumbre es aceptar que las lenguas — como las vidas — tienen velocidades diferentes de respuesta." },
        { it: "A prática é nomear sem dramatizar: «recebi um talvez», ponto final. O «talvez» não é um inimigo a decifrar nas próximas vinte e quatro horas; é um hóspede que dorme no sofá e sai de manhã. Quando a cabeça montar o cenário catástrofe, trazê-la de volta ao fato: o que foi dito, por quem, em que tom. O resto é ficção — e a ficção cansa mais do que o trabalho.", es: "La práctica es nombrar sin dramatizar: «recibí un quizá», punto final. El «quizá» no es un enemigo a descifrar en las próximas veinticuatro horas; es un huésped que duerme en el sofá y se va por la mañana. Cuando la cabeza monte el escenario catastrófico, traerla de vuelta al hecho: qué se dijo, quién, en qué tono. El resto es ficción — y la ficción cansa más que el trabajo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Um manual de negociação", "Convivir en calma com a ambiguidade do «vamos vendo»", "Como exigir respostas claras"],
        answer: 1,
        why: "El título une silencio y «vamos vendo»: convivir con la ambigüedad, no forzar respuestas.",
      },
      quiz: [
        { q: "O que diz mais do que a frase, segundo o texto?", kind: "literal", options: ["O silêncio da sala depois de um «vamos vendo»", "O e-mail de resposta", "A ata da reunião"], answer: 0, why: "«O silêncio da sala diz mais do que a frase» está literal." },
        { q: "Porque é que o «talvez» é comparado a um hóspede?", kind: "inferencial", options: ["Porque fica algum tempo e depois sai", "Porque paga renda", "Porque nunca desaparece"], answer: 0, why: "Se infiere de «dorme no sofá e sai de manhã»: la incertidumbre es pasajera." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["Nomear a incerteza sem dramatizar acalma a mente", "Todas as respostas devem ser imediatas", "A ambiguidade é sempre má notícia"], answer: 0, why: "La idea central: nombrar el talvez y volver a los hechos evita la ficción que agota." },
      ],
      vf: [
        { text: "O texto diz que toda a ausência de sim é um não.", value: false, why: "Dice lo contrario: «nem toda a ausência de sim é um não»." },
        { text: "O «talvez» é comparado a um hóspede que dorme no sofá.", value: true, why: "La metáfora está literal en el segundo párrafo." },
        { text: "A ficção cansa mais do que o trabalho, segundo o texto.", value: true, why: "«O resto é ficção — e a ficção cansa mais do que o trabalho»." },
      ],
    },
    {
      id: "md-pt-c1-09-2", theme: "relax mentale",
      title: "Não decodificar tudo", titleEs: "No descodificarlo todo", minutes: 2,
      paragraphs: [
        { it: "A mente treinada em subtextos corre um risco novo: decodificar tudo. Cada «pois», cada pausa, cada «interessante» vira matéria de análise — e a reunião transforma-se num exame permanente. A leitura do subtexto é uma competência; a sua aplicação em tempo real a cada palavra é uma prisão. Há silêncios que são apenas silêncios.", es: "La mente entrenada en subtextos corre un riesgo nuevo: descodificarlo todo. Cada «pois», cada pausa, cada «interessante» se vuelve materia de análisis — y la reunión se transforma en un examen permanente. La lectura del subtexto es una competencia; su aplicación en tiempo real a cada palabra es una prisión. Hay silencios que son solo silencios." },
        { it: "O descanso mental está em definir horários para o radar: ligado na reunião, meio desligado no café, desligado em casa. Perguntar pelo concreto («então, avançamos segunda?») resolve em dez segundos o que a interpretação levaria dez dias a construir. E se a resposta continuar ambígua, há uma arte final: deixar a ambiguidade fora da porta, como se deixa o guarda-chuva a secar.", es: "El descanso mental está en definir horarios para el radar: encendido en la reunión, medio apagado en el café, apagado en casa. Preguntar por lo concreto («¿entonces, avanzamos el lunes?») resuelve en diez segundos lo que la interpretación tardaría diez días en construir. Y si la respuesta sigue ambigua, hay un arte final: dejar la ambigüedad fuera de la puerta, como se deja el paraguas a secar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Como ler melhor as intenções alheias", "Descansar del análisis constante del subtexto", "Uma crítica às reuniões portuguesas"],
        answer: 1,
        why: "El título avisa del exceso: descansar del radar interpretativo, no afinarlo.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "A mente treinada em subtextos corre o risco de decodificar tudo.",
          "A aplicação do radar em tempo real é uma prisão.",
          "Há silêncios que são apenas silêncios.",
          "O radar foi inventado durante a segunda guerra.",
          "Perguntar pelo concreto resolve em dez segundos.",
        ],
        intruder: 3,
        why: "La historia del radar es un dato técnico ajeno a la reflexión sobre el descanso mental: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Analisar tudo é a melhor estratégia", "O radar do subtexto precisa de descanso e perguntas concretas", "As reuniões devem ser evitadas"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A leitura do subtexto é uma competência, não um dever permanente", "Perguntar pelo concreto resolve o que a interpretação demoraria dias", "A ambiguidade pode ficar fora da porta, como o guarda-chuva"],
        distractors: ["O guarda-chuva era azul", "A reunião foi gravada", "O café foi servido às onze"],
      },
    },
    {
      id: "md-pt-c1-09-3", theme: "qui e ora",
      title: "A palavra «talvez» no ar", titleEs: "La palabra «talvez» en el aire", minutes: 2,
      paragraphs: [
        { it: "Viver com um «talvez» pendente é a condição de quase toda a gente, embora poucos o confessem. O aqui e o agora não exigem que o talvez se resolva: exigem apenas que não seja a única mobília da sala. Há uma diferença enorme entre uma vida adiada e uma vida que aguarda — a primeira parou; a segunda continua a fazer o jantar.", es: "Vivir con un «quizá» pendiente es la condición de casi todo el mundo, aunque pocos lo confiesen. El aquí y el ahora no exigen que el quizá se resuelva: exigen solo que no sea el único mobiliario de la sala. Hay una diferencia enorme entre una vida aplazada y una vida que aguarda — la primera se paró; la segunda sigue haciendo la cena." },
        { it: "A prática da presença com assuntos abertos é humilde: escolher a tarefa pequena que é possível agora — a resposta ao e-mail, a caminhada das sete, a loiça lavada — e fazê-la inteira. Os «talvez» assentam melhor numa vida em movimento do que numa vida à espera. E quando a resposta chegar, encontra-nos ocupados a viver, que é o melhor lugar para ser encontrado.", es: "La práctica de la presencia con asuntos abiertos es humilde: elegir la tarea pequeña posible ahora — la respuesta al correo, el paseo de las siete, la loza lavada — y hacerla entera. Los «quizá» se asientan mejor en una vida en movimiento que en una vida a la espera. Y cuando llegue la respuesta, nos encuentre ocupados viviendo, que es el mejor lugar para ser encontrado." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Como forçar decisões rápidas", "Vivir el presente con asuntos pendientes", "Um tratado sobre procrastinação"],
        answer: 1,
        why: "El título deja el quizá «en el aire»: presencia con lo pendiente, no decisiones forzadas.",
      },
      sequence: {
        instr: "Ordena los pasos de la práctica:",
        events: ["Reconheces o «talvez» pendente", "Aceitas que não se resolve agora", "Escolhes a tarefa pequena possível", "Fazes essa tarefa inteira", "A resposta encontra-te a viver"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Um «talvez» pendente não é uma ordem para parar. Respira e olha à tua volta: que coisa pequena é possível agora, nesta hora, com as tuas mãos? Talvez a loiça, talvez a resposta a um e-mail de duas linhas, talvez dez minutos de caminhada. Escolhe uma e faz essa coisa como se fosse a única do dia. Quando terminares, repara no corpo: mais leve, não porque o «talvez» se resolveu, mas porque tu voltaste a estar onde a vida está.",
        questions: [
          { q: "O que se escolhe no exercício?", kind: "literal", options: ["Uma coisa pequena possível agora", "Uma decisão grande", "Um novo «talvez»"], answer: 0, why: "«Que coisa pequena é possível agora, nesta hora, com as tuas mãos?»." },
          { q: "Como se faz essa coisa?", kind: "literal", options: ["Como se fosse a única do dia", "Ao mesmo tempo que outra", "Com pressa para acabar"], answer: 0, why: "«Faz essa coisa como se fosse a única do dia»." },
          { q: "Porque é que o corpo fica mais leve, segundo o áudio?", kind: "inferencial", options: ["Porque voltaste a estar onde a vida está", "Porque o «talvez» se resolveu", "Porque a loiça estava suja"], answer: 0, why: "«Não porque o «talvez» se resolveu, mas porque tu voltaste a estar onde a vida está»." },
          { q: "Que relação o áudio estabelece entre o «talvez» e a paragem?", kind: "inferencial", options: ["O «talvez» não é uma ordem para parar", "O «talvez» obriga a parar tudo", "A paragem resolve o «talvez»"], answer: 0, why: "«Um “talvez” pendente não é uma ordem para parar»." },
        ],
      },
    },
  ],

  "pt-cu-c1-10": [
    {
      id: "md-pt-c1-10-1", theme: "relax fisico",
      title: "A boca que muda de sotaque", titleEs: "La boca que cambia de acento", minutes: 2,
      paragraphs: [
        { it: "Imitar um sotaque novo é um desporto da boca: o maxilar defende posições que nunca precisou de defender. Os sons de outra variedade pedem músculos novos — o lh palatal, as vogais fechadas — e a boca, como um atleta estreante, responde primeiro com tensão. Soltar é treino, não talento.", es: "Imitar un acento nuevo es un deporte de la boca: la mandíbula defiende posiciones que nunca necesitó defender. Los sonidos de otra variedad piden músculos nuevos — la lh palatal, las vocales cerradas — y la boca, como un atleta novato, responde primero con tensión. Soltar es entrenamiento, no talento." },
        { it: "O exercício físico é mímica sem som: bocejar, massajar o maxilar, repetir «olá» em dez melodias diferentes, exagerar de propósito. O exagero é a porta: quem consegue dizer «está fixe, pá» com sobra de comicidade consegue depois dizê-lo com sobriedade. Os lábios que se atrevem aprendem; os que se contêm decoram — e decorar sotaque é a forma mais lenta de o ter.", es: "El ejercicio físico es mímica sin sonido: bostezar, masajear la mandíbula, repetir «olá» en diez melodías diferentes, exagerar a propósito. El exagero es la puerta: quien consigue decir «está fixe, pá» con sobra de comicidad consigue después decirlo con sobriedad. Los labios que se atreven aprenden; los que se contienen memorizan — y memorizar el acento es la forma más lenta de tenerlo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Uma aula teórica de fonética", "Soltar la boca y la mandíbula al imitar acentos nuevos", "Um dicionário de regionalismos"],
        answer: 1,
        why: "El título señala la boca que cambia: entrenamiento físico del acento, no teoría ni léxico.",
      },
      quiz: [
        { q: "Como responde a boca aos sons novos, no início?", kind: "literal", options: ["Com tensão", "Com alegria imediata", "Com indiferença"], answer: 0, why: "«Responde primeiro com tensão» está literal." },
        { q: "Porque é que o exagero é chamado «a porta»?", kind: "inferencial", options: ["Porque permite chegar depois à sobriedade", "Porque impressiona os amigos", "Porque é a forma correta de falar"], answer: 0, why: "Se infiere: quien exagera consigue después decirlo con sobriedad; el exceso entrena el rango." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["Soltar a boca é treino, não talento", "Os sotaques não se imitam", "Só os atletas mudam de sotaque"], answer: 0, why: "«Soltar é treino, não talento» resume la tesis del texto." },
      ],
      vf: [
        { text: "O texto diz que decorar sotaque é a forma mais rápida de o ter.", value: false, why: "Dice lo contrario: «a forma mais lenta de o ter»." },
        { text: "O exagero de propósito faz parte do exercício.", value: true, why: "«Repetir “olá” em dez melodias, exagerar de propósito»." },
        { text: "Os sons de outra variedade pedem músculos novos.", value: true, why: "Está literal en el primer párrafo." },
      ],
    },
    {
      id: "md-pt-c1-10-2", theme: "spiritualità",
      title: "Cada voz é uma casa", titleEs: "Cada voz es una casa", minutes: 3,
      paragraphs: [
        { it: "Cada sotaque é uma casa onde alguém cresceu: o minhoto que come os finais das palavras, o alentejano que as alonga como a planície, o açoriano que guarda o mar nas vogais. Respeitar essas casas é uma forma calma de espiritualidade sem religião — reconhecer que a variedade não é defeito da língua, mas a língua a viver em família numerosa.", es: "Cada acento es una casa donde alguien creció: el minhoto que se come los finales de las palabras, el alentejano que las alarga como la llanura, el açoriano que guarda el mar en las vocales. Respetar esas casas es una forma calma de espiritualidad sin religión — reconocer que la variedad no es defecto de la lengua, sino la lengua viviendo en familia numerosa." },
        { it: "Quem aprende português numa cidade e depois ouve o país inteiro percebe que a norma é só uma das casas, nem melhor nem pior — apenas a que saiu mais vezes na televisão. A reverência pela diferença começa na escuta: ouvir a voz alheia sem a traduzir logo para a nossa. E quando alguém diz «não tem sotaque», sorri-se por dentro: é a casa dele a falar da própria.", es: "Quien aprende portugués en una ciudad y después escucha el país entero entiende que la norma es solo una de las casas, ni mejor ni peor — apenas la que salió más veces en la televisión. La reverencia por la diferencia empieza en la escucha: oír la voz ajena sin traducirla de inmediato a la nuestra. Y cuando alguien dice «no tiene acento», se sonríe por dentro: es su casa hablando de sí misma." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Uma teoria linguística académica", "Cada acento como uma casa digna de respeito", "Como perder o sotaque próprio"],
        answer: 1,
        why: "El título anuncia la metáfora de la casa: respeto por las voces, no teoría ni corrección.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Cada sotaque é uma casa onde alguém cresceu.",
          "A variedade não é defeito da língua, mas a língua em família numerosa.",
          "A reverência pela diferença começa na escuta.",
          "O português tem cerca de duzentos e sessenta milhões de falantes.",
          "«Não tem sotaque» é a casa dele a falar da própria.",
        ],
        intruder: 3,
        why: "La cifra demográfica es un dato externo ajeno a la reflexión sobre las voces como casas: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Só um acento é o correto", "A variedade é a língua viva e merece escuta", "A televisão define o melhor português"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Cada sotaque é uma casa onde alguém cresceu", "A norma é apenas a casa que saiu mais na televisão", "A reverência pela diferença começa na escuta"],
        distractors: ["O minhoto fala mais devagar do que todos", "O açoriano inventou dez vogais", "A televisão foi desligada em 1990"],
      },
    },
    {
      id: "md-pt-c1-10-3", theme: "relax mentale",
      title: "Uma mente com muitas casas", titleEs: "Una mente con muchas casas", minutes: 2,
      paragraphs: [
        { it: "Quem brinca com sotaques — imita o minhoto, ensaia o alentejano, arrisca o açoriano — conhece um descanso estranho: a mente que troca de voz sai da troca mais leve. Não é fuga de si: é descobrir que o «eu» tem mais quartos do que pensava. A imitação, feita com respeito, é uma ginástica interior que alarga sem partir.", es: "Quien juega con acentos — imita al minhoto, ensaya al alentejano, arriesga al açoriano — conoce un descanso extraño: la mente que cambia de voz sale del cambio más ligera. No es huida de sí: es descubrir que el «yo» tiene más cuartos de los que pensaba. La imitación, hecha con respeto, es una gimnasia interior que ensancha sin romper." },
        { it: "O relaxamento mental está em voltar ao centro depois de cada viagem: imitar, rir, e regressar à própria voz, que soa — curiosamente — mais tranquila. A mente com muitas casas não se perde nelas; escolhe-as. E quando o dia exigir a voz de serviço, o português claro, sai-se dessa também: a variedade treinada é liberdade, não confusão.", es: "La relajación mental está en volver al centro después de cada viaje: imitar, reír, y regresar a la propia voz, que suena — curiosamente — más tranquila. La mente con muchas casas no se pierde en ellas; las elige. Y cuando el día exija la voz de servicio, el portugués claro, se sale de esa también: la variedad entrenada es libertad, no confusión." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Perder a própria identidade ao imitar", "A mente que brinca com vozes e volta ao centro", "Um exame de dialetologia"],
        answer: 1,
        why: "El título anuncia la mente con muchas casas: jugar con voces y regresar al centro, no perderse.",
      },
      sequence: {
        instr: "Ordena los pasos según el texto:",
        events: ["Imitas uma voz diferente com respeito", "Reparas no efeito: a mente mais leve", "Regressas à própria voz", "Descobres que o «eu» tem mais quartos", "Escolhes a voz de serviço quando o dia a exige"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Exercício de vozes. Vais dizer a mesma frase três vezes: «hoje o dia está fixe». A primeira, à tua maneira natural. A segunda, imaginando que nasceste em Braga e falas depressa, a comer os finais das palavras. A terceira, imaginando o Alentejo, vogais compridas, tempo largo. Entre cada versão, uma respiração. No fim, volta à tua voz e nota como ela soa: mais tua do que nunca. As outras vozes não te roubam; devolvem-te com outra margem.",
        questions: [
          { q: "Que frase se diz três vezes?", kind: "literal", options: ["«Hoje o dia está fixe»", "«Quantas línguas cabem numa cabeça?»", "«Bom dia a todos»"], answer: 0, why: "«Vais dizer a mesma frase três vezes: “hoje o dia está fixe”»." },
          { q: "Como é a segunda versão?", kind: "literal", options: ["À maneira de Braga, depressa", "Ao estilo de Lisboa, neutra", "Em castelhano"], answer: 0, why: "«Imaginando que nasceste em Braga e falas depressa»." },
          { q: "Para que serve a respiração entre cada versão?", kind: "inferencial", options: ["Para separar as vozes e voltar a si", "Porque o exercício cansa", "Para contar o tempo"], answer: 0, why: "Se infiere: la respiración marca la frontera entre voces y facilita el regreso." },
          { q: "Que efeito têm as outras vozes, segundo o fecho?", kind: "inferencial", options: ["Não roubam; devolvem com outra margem", "Roubam a voz própria", "Não têm qualquer efeito"], answer: 0, why: "«As outras vozes não te roubam; devolvem-te com outra margem»." },
        ],
      },
    },
  ],

  "pt-cu-c1-11": [
    {
      id: "md-pt-c1-11-1", theme: "qui e ora",
      title: "A cidade aos quarenta minutos", titleEs: "La ciudad a cuarenta minutos", minutes: 3,
      paragraphs: [
        { it: "A Joana sai de casa às sete e quarenta; a cidade começa, para ela, a quarenta minutos de distância. Quem vive longe do centro conhece esta hora diária de comboio — e a tentação de a apagar com o telemóvel. Mas o comboio também pode ser outra coisa: a única sala silenciosa que o dia concede, paga com a mensalidade do tempo.", es: "Joana sale de casa a las siete y cuarenta; la ciudad empieza, para ella, a cuarenta minutos de distancia. Quien vive lejos del centro conoce esta hora diaria de tren — y la tentación de borrarla con el móvil. Pero el tren también puede ser otra cosa: la única sala silenciosa que el día concede, pagada con la mensualidad del tiempo." },
        { it: "O aqui e o agora não dependem do código postal: dependem do uso da hora. Olhar a cidade a passar pela janela — os telhados que se aproximam, o rio que aparece de surpresa — é uma forma de estar nela antes de a trabalhar. Quando o comboio abrandar na estação, a Joana já terá feito a sua prática: trinta minutos de mundo visto devagar, sem notificação nenhuma.", es: "El aquí y el ahora no dependen del código postal: dependen del uso de la hora. Mirar la ciudad pasar por la ventana — los tejados que se acercan, el río que aparece de sorpresa — es una forma de estar en ella antes de trabajarla. Cuando el tren frene en la estación, Joana ya habrá hecho su práctica: treinta minutos de mundo visto despacio, sin ninguna notificación." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Uma crítica ao transporte público", "Vivir el presente en el trayecto diario de quarenta minutos", "Como encontrar casa barata"],
        answer: 1,
        why: "El título marca la distancia de la ciudad: la hora del trayecto como espacio propio, no crítica ni vivienda.",
      },
      quiz: [
        { q: "A que distância começa a cidade para a Joana?", kind: "literal", options: ["A quarenta minutos de distância", "À porta de casa", "A dez minutos de comboio"], answer: 0, why: "«A cidade começa, para ela, a quarenta minutos de distância» está literal." },
        { q: "Porque é que o comboio é «a única sala silenciosa que o dia concede»?", kind: "inferencial", options: ["Porque é tempo próprio, sem interrupções impostas", "Porque é proibido falar", "Porque está sempre vazio"], answer: 0, why: "Se infiere del contraste con el telemóvil: el trayecto como tiempo no reclamado." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["O presente não depende do código postal, mas do uso da hora", "Os subúrbios são um erro", "O telemóvel resolve a viagem"], answer: 0, why: "La tesis: la presencia es una cuestión de uso del tiempo, no de lugar." },
      ],
      vf: [
        { text: "O texto defende que o telemóvel é a melhor companhia de comboio.", value: false, why: "Lo presenta como «a tentação de a apagar»: justo lo que hay que resistir." },
        { text: "A prática da Joana é trinta minutos de mundo visto devagar.", value: true, why: "«Trinta minutos de mundo visto devagar, sem notificação nenhuma»." },
        { text: "O aqui e o agora dependem do uso da hora, segundo o texto.", value: true, why: "«Não dependem do código postal: dependem do uso da hora»." },
      ],
    },
    {
      id: "md-pt-c1-11-2", theme: "relax fisico",
      title: "O pescoço do comboio da manhã", titleEs: "El cuello del tren de la mañana", minutes: 2,
      paragraphs: [
        { it: "O comboio das oito aperta como uma mão fechada: o pescoço encolhe para caber no lugar, o queixo desce ao telemóvel, os ombros sobem para suportar a mochila e o dia. Ninguém escolheu esta estátua — foi-se-lhe compondo ao longo de vinte minutos de curvas. O corpo do passageiro é um mapa da pressa, lido em músculos.", es: "El tren de las ocho aprieta como una mano cerrada: el cuello se encoge para caber en el sitio, la barbilla baja al móvil, los hombros suben para soportar la mochila y el día. Nadie eligió esta estatua — se le fue componiendo a lo largo de veinte minutos de curvas. El cuerpo del pasajero es un mapa de la prisa, leído en músculos." },
        { it: "A contra-relógica do comboio é discreta: um movimento de ombros para trás sem chamar a atenção do vizinho, o queixo que sobe um centímetro, o maxilar que larga a mordida. Três paragens, três lembranças. Ao sair na estação, a diferença nota-se nos primeiros dez passos: quem se mexeu durante a viagem desce como quem chega; quem não se mexeu desce como quem escapa.", es: "La contrarrutina del tren es discreta: un movimiento de hombros hacia atrás sin llamar la atención del vecino, la barbilla que sube un centímetro, la mandíbula que suelta la mordida. Tres paradas, tres recordatorios. Al salir en la estación, la diferencia se nota en los primeros diez pasos: quien se movió durante el viaje baja como quien llega; quien no se movió baja como quien escapa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Uma guía de exercícios de ginásio", "Micro-movimientos para soltar el cuerpo en el tren", "Uma história de comboios de suburbo"],
        answer: 1,
        why: "El título señala el cuello del viajero: micro-movimientos discretos, no gimnasio ni historia ferroviaria.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "O corpo do passageiro é um mapa da pressa.",
          "Um movimento de ombros para trás sem chamar a atenção.",
          "Três paragens, três lembranças.",
          "O comboio atrasou-se doze minutos na ponte.",
          "Quem se mexeu desce como quem chega.",
        ],
        intruder: 3,
        why: "El retraso del tren es un hecho externo ajeno a la práctica de los micro-movimientos: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["O corpo da viagem merece pequenos movimentos", "Há que viajar sempre de pé", "O telemóvel é a melhor postura"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["O pescoço encolhe, o queixo desce, os ombros sobem", "A contra-relógica do comboio é discreta", "Quem não se mexeu desce como quem escapa"],
        distractors: ["O vizinho era um antigo colega", "A mochila pesava dez quilos", "O comboio ia cheio de turistas"],
      },
    },
    {
      id: "md-pt-c1-11-3", theme: "relax mentale",
      title: "Escrever sem raiva", titleEs: "Escribir sin ira", minutes: 3,
      paragraphs: [
        { it: "O artigo de opinião nascido da raiva escreve-se em vinte minutos e arrepende-se em vinte anos. A indignação é combustível legítimo; o problema é deixá-la ao volante. Quem escreve furioso escolhe os adjetivos que a fúria dita, e a fúria tem um vocabulário curto: tudo é «escandaloso», «absurdo», «inadmissível» — e o leitor, que já leu mil fúrias, boceja.", es: "El artículo de opinión nacido de la ira se escribe en veinte minutos y se arrepiente en veinte años. La indignación es combustible legítimo; el problema es dejarla al volante. Quien escribe furioso elige los adjetivos que dicta la furia, y la furia tiene un vocabulario corto: todo es «escandaloso», «absurdo», «inadmisible» — y el lector, que ya leyó mil furias, bosteza." },
        { it: "O descanso mental do colunista está em separar as temperaturas: sentir a raiva na primeira hora, escrever com ela já arrefecida. A firmeza não precisa de calor para ser firme — «firme sem ser agressivo» é a fórmula da casa. Deixa o rascunho dormir uma noite; de manhã, com a cabeça serena, corta-se o excesso e fica o essencial. O texto calmo dura mais porque o leitor o pode levar a sério sem se defender.", es: "El descanso mental del columnista está en separar las temperaturas: sentir la ira en la primera hora, escribir con ella ya enfriada. La firmeza no necesita calor para ser firme — «firme sin ser agresivo» es la fórmula de la casa. Deja el borrador dormir una noche; por la mañana, con la cabeza serena, se corta el exceso y queda lo esencial. El texto tranquilo dura más porque el lector puede tomarlo en serio sin defenderse." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Como escrever mais depressa", "Escribir con firmeza sin dejar que la ira conduzca", "Porque não se deve ter opinião"],
        answer: 1,
        why: "El título anuncia la escritura sin ira: firmeza serena, no velocidad ni silencio.",
      },
      sequence: {
        instr: "Ordena los pasos del columnista sereno:",
        events: ["Sentes a indignação na primeira hora", "Deixas o rascunho dormir uma noite", "Regressas com a cabeça serena", "Cortas o excesso de adjetivos", "Publicas o essencial, firme sem agressividade"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Antes de enviares o artigo, uma pausa de honestidade. Lê o primeiro parágrafo em voz alta e ouve-te: quantos adjetivos estão a fazer o trabalho que cabia aos factos? Cada vez que a frase grita, experimenta dizê-la mais baixa — se ela continuar a dizer o mesmo, fica; se desaparecer, é porque só havia volume. A raiva pode assinar o artigo contigo, mas não pode escolher as palavras. Escolhe-as tu, devagar, uma a uma.",
        questions: [
          { q: "O que se lê em voz alta?", kind: "literal", options: ["O primeiro parágrafo", "O artigo inteiro duas vezes", "O título apenas"], answer: 0, why: "«Lê o primeiro parágrafo em voz alta» está literal." },
          { q: "O que se experimenta quando a frase grita?", kind: "literal", options: ["Dizê-la mais baixa", "Apagá-la logo", "Mandá-la ao editor"], answer: 0, why: "«Experimenta dizê-la mais baixa»." },
          { q: "O que acontece se a frase só tinha volume?", kind: "inferencial", options: ["Desaparece ao dizê-la baixa", "Fica ainda mais forte", "Muda de assunto"], answer: 0, why: "«Se desaparecer, é porque só havia volume»." },
          { q: "Que papel o áudio dá à raiva?", kind: "inferencial", options: ["Pode assinar, mas não escolher as palavras", "Deve escolher todas as palavras", "Não tem lugar nenhum"], answer: 0, why: "«A raiva pode assinar o artigo contigo, mas não pode escolher as palavras»." },
        ],
      },
    },
  ],

  "pt-cu-c1-12": [
    {
      id: "md-pt-c1-12-1", theme: "relax fisico",
      title: "O corpo antes do palco", titleEs: "El cuerpo antes del escenario", minutes: 2,
      paragraphs: [
        { it: "Antes de subir ao palco, o corpo sabe o caminho melhor do que a cabeça: por isso o escaneamos dos pés para cima. Pés no chão — alicerces. Joelhos soltos — não travados à espera. Quadril neutro, coluna a crescer, ombros a descer, mandíbula em férias. Cada peça verificada é uma peça que não falará nos cinco minutos seguintes.", es: "Antes de subir al escenario, el cuerpo conoce el camino mejor que la cabeza: por eso lo escaneamos de los pies hacia arriba. Pies en el suelo — cimientos. Rodillas sueltas — no bloqueadas a la espera. Cadera neutra, columna creciendo, hombros bajando, mandíbula de vacaciones. Cada pieza verificada es una pieza que no hablará en los cinco minutos siguientes." },
        { it: "A verificação demora um minuto e poupa uma vida: quem sobe com o corpo fechado gasta metade da palestra a descobrir-lhe a fechadura. O escaneamento termina na testa — «está tranquila?» — e na respiração, três vezes compridas. Depois disto, o microfone é só tecnologia: o instrumento já está afinado, de baixo para cima.", es: "La verificación dura un minuto y ahorra una vida: quien sube con el cuerpo cerrado gasta media charla en descubrirle la cerradura. El escaneo termina en la frente — «¿está tranquila?» — y en la respiración, tres veces largas. Después de esto, el micrófono es solo tecnología: el instrumento ya está afinado, de abajo hacia arriba." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Um manual de som e microfones", "El escaneo corporal de un minuto antes de salir al escenario", "Como disfarçar os nervos"],
        answer: 1,
        why: "El título señala el cuerpo antes del palco: preparación física, no tecnología ni disfraz.",
      },
      quiz: [
        { q: "Por onde começa o escaneamento?", kind: "literal", options: ["Nos pés", "Na testa", "Nas mãos"], answer: 0, why: "«Escaneamos dos pés para cima» está literal." },
        { q: "Porque é que a verificação «poupa uma vida»?", kind: "inferencial", options: ["Porque quem sobe fechado gasta a palestra a descobrir a fechadura", "Porque o palco é perigoso", "Porque o microfone falha"], answer: 0, why: "Se infiere de la metáfora: el cuerpo cerrado roba tiempo y soltura a la charla." },
        { q: "Qual é a ideia central do texto?", kind: "critica", options: ["O corpo afinado sustenta a fala antes do microfone", "O escaneamento substitui o ensaio", "Os nervos eliminam-se com força de vontade"], answer: 0, why: "La tesis: afinar el instrumento corporal es la preparación real; el micrófono es solo tecnología." },
      ],
      vf: [
        { text: "O scan começa na testa e desce aos pés, segundo o texto.", value: false, why: "Dice lo contrario: «dos pés para cima»." },
        { text: "O escaneamento termina com três respirações compridas.", value: true, why: "«E na respiração, três vezes compridas» está literal." },
        { text: "Quem sobe com o corpo fechado gasta metade da palestra a descobrir-lhe a fechadura.", value: true, why: "Está literal en el segundo párrafo." },
      ],
    },
    {
      id: "md-pt-c1-12-2", theme: "meditazione",
      title: "A pausa dramática", titleEs: "La pausa dramática", minutes: 2,
      paragraphs: [
        { it: "Um segundo de silêncio antes da ideia-chave vale mais do que qualquer adjetivo — mas só para quem o souber habitar. A pausa dramática não é ausência de fala: é fala em modo silencioso, o momento em que o público inteiro respira com o orador. Meditar é treinar exatamente isso: estar confortável dentro do vazio que os outros sentem como espera.", es: "Un segundo de silencio antes de la idea clave vale más que cualquier adjetivo — pero solo para quien sepa habitarlo. La pausa dramática no es ausencia de habla: es habla en modo silencioso, el momento en que el público entero respira con el orador. Meditar es entrenar exactamente eso: estar cómodo dentro del vacío que los demás sienten como espera." },
        { it: "A prática diária cabe em qualquer conversa: responder um segundo depois, não um segundo antes. Nesse intervalo mora a diferença entre reagir e falar — e, em palco, entre recitar e dizer. Quem domina a pausa não a usa sempre; usa-a quando a frase a merece. O silêncio partilhado é a única frase que quinhentas pessoas escrevem ao mesmo tempo.", es: "La práctica diaria cabe en cualquier conversación: responder un segundo después, no un segundo antes. En ese intervalo vive la diferencia entre reaccionar y hablar — y, en el escenario, entre recitar y decir. Quien domina la pausa no la usa siempre; la usa cuando la frase lo merece. El silencio compartido es la única frase que quinientas personas escriben al mismo tiempo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Como construir frases longas", "La pausa compartida como herramienta de presencia", "Como falar sem nunca calar"],
        answer: 1,
        why: "El título anuncia la pausa dramática: el silencio compartido como técnica, no la frase larga.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "A pausa dramática é fala em modo silencioso.",
          "Treina-se respondendo um segundo depois, não antes.",
          "Nesse intervalo mora a diferença entre reagir e falar.",
          "O microfone sem fios custa trezentos euros.",
          "O silêncio partilhado é escrito por quinhentas pessoas ao mesmo tempo.",
        ],
        intruder: 3,
        why: "El precio del equipo técnico es un dato material ajeno a la reflexión sobre la pausa: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["A pausa treina-se na conversa diária e usa-se quando a frase o merece", "Há que pausar depois de cada palavra", "O silêncio incomoda sempre"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["A pausa é o momento em que o público respira com o orador", "Estar confortável dentro do vazio treina-se na conversa diária", "Quem domina a pausa não a usa sempre"],
        distractors: ["O orador esqueceu a frase seguinte", "A pausa durou três minutos", "O público saiu da sala"],
      },
    },
    {
      id: "md-pt-c1-12-3", theme: "spiritualità",
      title: "Uma ideia que merece ser espalhada", titleEs: "Una idea que merece ser difundida", minutes: 3,
      paragraphs: [
        { it: "O lema da TED tem uma etiqueta espiritual escondida: «ideias que merecem ser espalhadas» — não ideias que precisam de vencer. Há uma diferença serena entre plantar e impor: quem planta oferece a semente e confia no terreno; quem impõe arrasa o terreno e chama-lhe concordância. Falar para dar é uma forma calma de generosidade pública.", es: "El lema de la TED tiene una etiqueta espiritual escondida: «ideas que merecen ser difundidas» — no ideas que necesitan vencer. Hay una diferencia serena entre plantar e imponer: quien planta ofrece la semilla y confía en el terreno; quien impone arrasa el terreno y lo llama concordancia. Hablar para dar es una forma calma de generosidad pública." },
        { it: "O orador que sobe ao palco para oferecer — e não para vencer — sai do palco mais leve, aconteça o que acontecer. A ideia que merece ser espalhada não exige conversões imediatas; pede apenas clareza e um pouco de coragem. E se, no fim, uma única pessoa na sobremesa repetir a frase ao lado, o círculo fechou-se: uma ideia plantada é uma ideia que já viaja sozinha.", es: "El orador que sube al escenario para ofrecer — y no para vencer — baja del escenario más ligero, pase lo que pase. La idea que merece ser difundida no exige conversiones inmediatas; pide solo claridad y un poco de valentía. Y si, al final, una única persona en el postre repite la frase al lado, el círculo se ha cerrado: una idea plantada es una idea que ya viaja sola." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Como convencer um público difícil", "Ofrecer ideas en lugar de imponerlas", "A história completa da TED"],
        answer: 1,
        why: "El título retoma el lema TED: la oferta serena de ideas, no la persuasión ni la historia.",
      },
      sequence: {
        instr: "Ordena los momentos según el texto:",
        events: ["Preparas a ideia com clareza", "Sobes ao palco para oferecer", "Dizes a frase central sem pedir conversões", "Uma pessoa repete a frase na sobremesa", "A ideia passa a viajar sozinha"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Antes de subires, pergunta-te em silêncio: o que é que eu gostava de oferecer hoje a esta sala? Não o que quero que pensem de mim — o que quero que levem para casa. Uma frase, um número, uma imagem; o resto é embalagem. Respira uma vez e escolhe essa coisa com cuidado, como quem escolhe um presente: com o outro em mente, não com o espelho. Quando falares, fala dessa oferta. As ideias que são oferecidas não precisam de ser empurradas — caem sozinhas no chão certo.",
        questions: [
          { q: "Que pergunta se faz antes de subir?", kind: "literal", options: ["O que é que eu gostava de oferecer hoje a esta sala", "Quanto me vão pagar", "O que dirão os críticos"], answer: 0, why: "«O que é que eu gostava de oferecer hoje a esta sala?» está literal." },
          { q: "Como se escolhe essa coisa?", kind: "literal", options: ["Como quem escolhe um presente, com o outro em mente", "Ao acaso, sem pensar", "Pelo que é mais fácil de dizer"], answer: 0, why: "«Como quem escolhe um presente: com o outro em mente, não com o espelho»." },
          { q: "Porque é que se distingue «o que pensem de mim» de «o que levem para casa»?", kind: "inferencial", options: ["Porque a oferta centra-se no outro, não no espelho", "Porque a opinião não importa nunca", "Porque a casa fica longe"], answer: 0, why: "Se infiere del contraste: la oferta piensa en el público, no en la propia imagen." },
          { q: "Que imagem encerra o áudio sobre as ideias oferecidas?", kind: "inferencial", options: ["Caem sozinhas no chão certo, sem serem empurradas", "Precisam de empurrões fortes", "Nunca chegam ao chão"], answer: 0, why: "«Não precisam de ser empurradas — caem sozinhas no chão certo»." },
        ],
      },
    },
  ],
};
