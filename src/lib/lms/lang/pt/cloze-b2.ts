import type { CbClozeText } from "../../cambridge";

/* ═══ PT B2 · Cloze readings — 3 por unidad (inferencia léxica) ══════
   Metodología v9.12: el texto en portugués lleva marcadores {1} {2}…
   que el reproductor convierte en huecos; el estudiante deduce la
   palabra por el contexto. Campos: `.it` = portugués europeo, `.es` =
   español. Los huecos se resuelven por INFERENCIA LÉXICA CONTEXTUAL,
   con distractores del mismo campo semántico. */

export const PT_CLOZE_B2: Record<string, CbClozeText[]> = {
  "pt-cu-b2-01": [
    {
      id: "cz-pt-b2-01-1", title: "A reunião do trabalho híbrido", titleEs: "La reunión del trabajo híbrido", minutes: 3,
      paragraphs: [
        { it: "Na quarta-feira, a empresa de software do Parque das Nações reuniu trinta colaboradores na sala grande para decidir uma única questão: o futuro do {1} nos próximos doze meses. A diretora abriu a sessão com os dados do inquérito interno e confessou, com um sorriso cansado, que metade da equipa queria dois dias em casa, enquanto a direção preferia a {2} total no escritório.", es: "El miércoles, la empresa de software del Parque das Nações reunió a treinta colaboradores en la sala grande para decidir una única cuestión: el futuro del teletrabajo en los próximos doce meses. La directora abrió la sesión con los datos de la encuesta interna y confesó, con una sonrisa cansada, que la mitad del equipo quería dos días en casa, mientras que la dirección prefería la presencia total en la oficina." },
        { it: "O debate durou duas horas. «Compreendo a vossa posição», disse o Ricardo, do apoio ao cliente, «mas os números não mostram qualquer quebra de {3} desde março». No fim, ninguém saiu da sala totalmente satisfeito: a diretora propôs um {4} experimental de três meses, com avaliação {5} dos resultados e uma nova reunião em janeiro. Em Lisboa, esse empate técnico é o começo de todos os bons acordos.", es: "El debate duró dos horas. «Comprendo vuestra postura», dijo Ricardo, de atención al cliente, «pero los números no muestran ninguna caída de productividad desde marzo». Al final, nadie salió de la sala totalmente satisfecho: la directora propuso un período experimental de tres meses, con evaluación mensual de los resultados y una nueva reunión en enero. En Lisboa, ese empate técnico es el comienzo de todos los buenos acuerdos." },
      ],
      gaps: [
        { options: ["orçamento", "teletrabalho", "teatro"], answer: 1, why: "«Dois dias em casa» frente a «presença total no escritório»: el debate gira en torno al trabajo a distancia." },
        { options: ["presença", "pressa", "paciência"], answer: 0, why: "El contrario de «dois dias em casa» es que todos estén en la oficina: presencia total." },
        { options: ["popularidade", "pontualidade", "produtividade"], answer: 2, why: "«Quebra de» + el argumento clásico del debate teletrabajo: los números de la productividad." },
        { options: ["prejuízo", "período", "bilhete"], answer: 1, why: "«Experimental de três meses»: un espacio de tiempo de prueba solo cabe en un período." },
        { options: ["mensal", "diária", "anual"], answer: 0, why: "Si el período experimental es de tres meses, la evaluación razonable es cada mês: mensal." },
      ],
    },
    {
      id: "cz-pt-b2-01-2", title: "Cafés cheios de portáteis", titleEs: "Cafés llenos de portátiles", minutes: 3,
      paragraphs: [
        { it: "O teletrabalho mudou a vida de Lisboa de uma forma visível ao olho nu: os cafés do centro encheram-se de {1} e as pastelarias viram escritórios improvisados entre o galão da manhã e a tosta do almoço. Quem pode trabalhar de qualquer lado já escolhe morar fora da cidade; quem não pode, paga {2} cada vez mais altas no centro histórico.", es: "El teletrabajo cambió la vida de Lisboa de una forma visible a simple vista: los cafés del centro se llenaron de portátiles y las pastelerías vieron oficinas improvisadas entre el galão de la mañana y la tostada del mediodía. Quien puede trabajar desde cualquier lado ya elige vivir fuera de la ciudad; quien no puede, paga alquileres cada vez más altos en el centro histórico." },
        { it: "A pressão dos nómadas digitais e da compra por estrangeiros fez disparar os preços, e muita gente atravessou o Tejo em busca de casa. Ao mesmo tempo, câmaras do {3} passaram a oferecer incentivos a quem se instalasse: o objetivo é {4} população em territórios que se esvaziavam. A vantagem silenciosa do teletrabalho é a possibilidade de {5} a vida profissional com a familiar, ainda que a cultura de presença continue forte nalguns setores.", es: "La presión de los nómadas digitales y de la compra por extranjeros disparó los precios, y mucha gente cruzó el Tajo en busca de casa. Al mismo tiempo, ayuntamientos del interior empezaron a ofrecer incentivos a quien se instalara: el objetivo es fijar población en territorios que se vaciaban. La ventaja silenciosa del teletrabajo es la posibilidad de conciliar la vida profesional con la familiar, aunque la cultura de presencia siga fuerte en algunos sectores." },
      ],
      gaps: [
        { options: ["pratos", "portáteis", "pombos"], answer: 1, why: "El teletrabajo convierte los cafés en oficinas improvisadas: se llenan de ordenadores portátiles." },
        { options: ["rendas", "rendimentos", "propinas"], answer: 0, why: "Falso amigo activo: quien se queda en el centro paga «rendas» (alquileres); «rendimentos» serían los ingresos." },
        { options: ["interior", "inverno", "inferior"], answer: 0, why: "Los municipios que ofrecen incentivos son los del interior despoblado, frente al centro costero." },
        { options: ["fixar", "fechar", "fugir"], answer: 0, why: "«Incentivos a quem se instalasse»: el objetivo es retener, fijar población." },
        { options: ["conciliar", "consumir", "comparar"], answer: 0, why: "«A vida profissional com a familiar»: el par clásico que se equilibra es conciliar." },
      ],
    },
    {
      id: "cz-pt-b2-01-3", title: "O email da diretora", titleEs: "El correo de la directora", minutes: 2,
      paragraphs: [
        { it: "Na quinta-feira de manhã, chegou a toda a equipa o email esperado. A diretora agradecia a participação de todos e resumia a decisão em três pontos: adoção de um modelo {1} durante três meses, um dia fixo de presença para «manter o {2} diário» e um inquérito mensal para acompanhar os resultados. Nada de vencedores nem vencidos, escrevia ela, apenas uma experiência séria.", es: "El jueves por la mañana llegó a todo el equipo el correo esperado. La directora agradecía la participación de todos y resumía la decisión en tres puntos: adopción de un modelo híbrido durante tres meses, un día fijo de presencia para «mantener el trato diario» y una encuesta mensual para seguir los resultados. Nada de vencedores ni vencidos, escribía ella, solo una experiencia seria." },
        { it: "O texto terminava com um pedido: «Conto com a vossa {3} para que a experiência funcione; respondam ao inquérito com franqueza». Havia também uma advertência bem-humorada: «espero que ninguém escolha o dia de teletrabalho para ir à praia, ainda que a praia esteja a dez minutos do {4}». Alguns colegas responderam com memes; outros, mais prudentes, limitaram-se a confirmar a {5} da mensagem.", es: "El texto terminaba con una petición: «Cuento con vuestra colaboración para que la experiencia funcione; respondan a la encuesta con franqueza». Había también una advertencia con humor: «espero que nadie elija el día de teletrabajo para ir a la playa, aunque la playa esté a diez minutos de la oficina». Algunos colegas respondieron con memes; otros, más prudentes, se limitaron a confirmar la recepción del mensaje." },
      ],
      gaps: [
        { options: ["híbrido", "honesto", "histórico"], answer: 0, why: "Un día fijo de presencia + días en casa: la fórmula intermedia es el modelo híbrido." },
        { options: ["convívio", "concurso", "cansaço"], answer: 0, why: "El día fijo existe para «manter o» trato, la relación diaria: convívio." },
        { options: ["contratação", "colaboração", "confrontação"], answer: 1, why: "«Conto com a vossa» + «para que a experiência funcione»: pide colaboración, no contratación ni confrontación." },
        { options: ["escritório", "estádio", "estacionamento"], answer: 0, why: "La playa está a diez minutos del lugar de trabajo: la oficina." },
        { options: ["receção", "recriação", "reclamação"], answer: 0, why: "Los prudentes solo confirmaron que el mensaje llegó: su recepción." },
      ],
    },
  ],

  "pt-cu-b2-02": [
    {
      id: "cz-pt-b2-02-1", title: "A conversa com o Sr. Fonseca", titleEs: "La conversación con el Sr. Fonseca", minutes: 3,
      paragraphs: [
        { it: "O Nuno trabalha no apoio ao cliente de uma empresa tradicional do Porto e há meses que chega aflito: o {1} das oito traz-o sempre ao limite. Na terça-feira, juntou coragem e bateu à porta do gabinete. «Sr. Fonseca, posso roubar-lhe cinco minutos? É sobre o horário de entrada». O {2}, correto mas de velha escola, apontou para a cadeira: «Diga, diga».", es: "Nuno trabaja en atención al cliente de una empresa tradicional de Oporto y hace meses que llega agobiado: el tren de las ocho lo lleva siempre al límite. El martes juntó valor y llamó a la puerta del despacho. «Sr. Fonseca, ¿puedo robarle cinco minutos? Es sobre el horario de entrada». El gestor, correcto pero de la vieja escuela, señaló la silla: «Diga, diga»." },
        { it: "O Nuno tinha ensaiado a conversa três vezes ao espelho: nada de exigências, apenas {3} bem penduradas em números. «Sugeria que fizéssemos uma experiência de horário {4} durante três meses. E se avaliássemos os resultados com os dados do trimestre?». O gestor hesitou, embora os números fossem claros, e acabou por preferir que a proposta viesse da equipa, não de cima para baixo. No fim, respondeu com a fórmula que o Nuno queria ouvir: «Pode deixar. Trate do assunto e traga-me o plano por {5}».", es: "Nuno había ensayado la conversación tres veces frente al espejo: nada de exigencias, solo sugerencias bien colgadas de números. «Sugería que hiciéramos una experiencia de horario flexible durante tres meses. ¿Y si evaluáramos los resultados con los datos del trimestre?». El gestor dudó, aunque los números fueran claros, y acabó prefiriendo que la propuesta viniera del equipo, no de arriba abajo. Al final respondió con la fórmula que Nuno quería oír: «Descuide. Ocupe del asunto y tráigame el plan por escrito»." },
      ],
      gaps: [
        { options: ["comboio", "camião", "carrinho"], answer: 0, why: "«Das oito»: el medio de transporte público de cercanías que trae aflito a Nuno es el comboio." },
        { options: ["cliente", "gestor", "vizinho"], answer: 1, why: "Quien responde desde el gabinete a quien pide «roubar cinco minutos» es el jefe: o gestor." },
        { options: ["sugestões", "críticas", "ameaças"], answer: 0, why: "«Nada de exigências, apenas»: lo contrario de exigir es sugerir; de ahí «sugeria que»." },
        { options: ["flexível", "fixa", "fria"], answer: 0, why: "El problema era la entrada rígida de las ocho; la experiencia propone un horario flexible." },
        { options: ["escrito", "recordado", "retirado"], answer: 0, why: "«Traga-me o plano por»: la forma formal de entregar un plan es por escrito." },
      ],
    },
    {
      id: "cz-pt-b2-02-2", title: "O inquérito interno", titleEs: "La encuesta interna", minutes: 2,
      paragraphs: [
        { it: "A experiência do horário flexível começou com um {1} anónimo: quarenta perguntas sobre hábitos de sono, comboios e horários preferidos. Responderam oitenta e sete colegas, uma {2} rara em documentos internos, e o resultado foi claro: a maioria preferia entradas entre as oito e as dez, com um dia fixo de presença para as reuniões de equipa.", es: "La experiencia del horario flexible empezó con una encuesta anónima: cuarenta preguntas sobre hábitos de sueño, trenes y horarios preferidos. Respondieron ochenta y siete colegas, una participación poco común en documentos internos, y el resultado fue claro: la mayoría prefería entradas entre las ocho y las diez, con un día fijo de presencia para las reuniones de equipo." },
        { it: "A direção ficou surpreendida com a franqueza das respostas: muitos confessavam que a pressa da manhã estragava o dia antes de começar. O documento final recomendava {3} rotativos que garantissem a cobertura telefónica desde as oito e uma avaliação ao fim de noventa dias. O passo seguinte dependia do gestor de cada área — e todos sabiam que o do apoio ao cliente era o mais {4} à mudança. O Nuno guardou o PDF com a sensação de quem finalmente fez algo mais do que {5} do comboio.", es: "La dirección se sorprendió con la franqueza de las respuestas: muchos confesaban que las prisas de la mañana estropeaban el día antes de empezar. El documento final recomendaba turnos rotativos que garantizaran la cobertura telefónica desde las ocho y una evaluación al final de noventa días. El paso siguiente dependía del gestor de cada área, y todos sabían que el de atención al cliente era el más reacio al cambio. Nuno guardó el PDF con la sensación de quien por fin hizo algo más que quejarse del tren." },
      ],
      gaps: [
        { options: ["inquérito", "ingrediente", "investimento"], answer: 0, why: "«Quarenta perguntas» y «responderam oitenta e sete colegas»: se trata de una encuesta." },
        { options: ["penalização", "punição", "participação"], answer: 2, why: "Ochenta y siete respuestas de una empresa entera es un nivel alto de participación." },
        { options: ["turnos", "trocos", "testes"], answer: 0, why: "«Rotativos» que garantizan cobertura desde las ocho: el reparto del trabajo se organiza en turnos." },
        { options: ["resistente", "dedicado", "desejoso"], answer: 0, why: "«Todos sabiam que o dele era o mais»: la dificultad del cambio lo pinta como el más reacio, resistente." },
        { options: ["queixar-se", "apegar-se", "apoiar-se"], answer: 0, why: "Hacer algo más que lamentarse del tren: queixar-se del comboio." },
      ],
    },
    {
      id: "cz-pt-b2-02-3", title: "A experiência de três meses", titleEs: "La experiencia de tres meses", minutes: 3,
      paragraphs: [
        { it: "De março a junho, o apoio ao cliente viveu a experiência mais comentada da empresa: {1} entre as oito e as dez e uma folha de cálculo gigante para acompanhar tudo. Nos primeiros dias, o telefone tocava às oito em ponto e ninguém parecia preocupado: a {2} telefónica estava garantida desde a primeira hora, como prometido.", es: "De marzo a junio, atención al cliente vivió la experiencia más comentada de la empresa: entradas entre las ocho y las diez y una hoja de cálculo gigante para seguirlo todo. En los primeros días, el teléfono sonaba a las ocho en punto y nadie parecía preocupado: la cobertura telefónica estaba garantizada desde la primera hora, como prometido." },
        { it: "No fim dos noventa dias, os números falaram: o tempo de {3} das chamadas desceu, a satisfação dos clientes subiu e, sobretudo, ninguém pediu a {4}. O Sr. Fonseca leu o relatório duas vezes, em silêncio, e devolveu-o com um sorriso seco: «Não estava mal, não». Para quem o conhecia, era o equivalente a uma {5} de pé em pé.", es: "Al final de los noventa días, los números hablaron: el tiempo de espera de las llamadas bajó, la satisfacción de los clientes subió y, sobre todo, nadie pidió la dimisión. El Sr. Fonseca leyó el informe dos veces, en silencio, y lo devolvió con una sonrisa seca: «No estaba mal, no». Para quien lo conocía, era el equivalente a una ovación de pie." },
      ],
      gaps: [
        { options: ["entradas", "saídas", "encomendas"], answer: 0, why: "«Entre as oito e as dez»: lo que se flexibiliza es la hora de llegar, las entradas." },
        { options: ["cobertura", "cobrança", "censura"], answer: 0, why: "El teléfono suena a las ocho «e ninguém parecia preocupado»: alguien atiende desde la primera hora, hay cobertura." },
        { options: ["espera", "espada", "estiva"], answer: 0, why: "«Das chamadas desceu»: la métrica telefónica que mejora es el tiempo de espera." },
        { options: ["demissão", "decoração", "demora"], answer: 0, why: "Que nadie renunciara durante una mudanza es el mejor indicador: nadie pidió la demissão." },
        { options: ["ovação", "operação", "objeção"], answer: 0, why: "«De pé em pé»: el gesto de aplaudir de pie a alguien que gustó." },
      ],
    },
  ],

  "pt-cu-b2-03": [
    {
      id: "cz-pt-b2-03-1", title: "O jantar de Alfama", titleEs: "La cena de Alfama", minutes: 3,
      paragraphs: [
        { it: "A tasca de Alfama tinha azulejos até ao teto, um galo de barro na montra e o fado ao fundo, baixinho, como manda a etiqueta. Era o jantar de {1} do fim do projeto e, à medida que o vinho subia, descia a cerimónia: os elogios começaram a sair tortos, à laia de {2}. «A tua apresentação estava incrível», pausa longa, «para quem a escreveu às quatro da manhã».", es: "La tasca de Alfama tenía azulejos hasta el techo, un gallo de barro en el escaparate y el fado al fondo, bajito, como manda la etiqueta. Era la cena de equipo del fin del proyecto y, a medida que el vino subía, bajaba la ceremonia: los elogios empezaron a salir torcidos, a modo de bromas. «Tu presentación estaba increíble», pausa larga, «para quien la escribió a las cuatro de la mañana»." },
        { it: "A Marta riu-se primeiro; o homenageado demorou dois segundos a perceber que o elogio era uma {3} e mais dois a responder à altura: «Estás-te a ver para o trabalho?». A mesa inteira caiu na risada. Quem não conhece o humor português perde estas {4} por levar tudo à letra; quem as apanha, ganha a mesa. No fim, ninguém precisou de pedir desculpa: «não fizemos por {5}», disse alguém, e o fado continuou, baixinho.", es: "Marta se rió primero; el homenajeado tardó dos segundos en entender que el elogio era una burla y dos más en responder a la altura: «¿Te estás viendo para el trabajo?». La mesa entera cayó en la risa. Quien no conoce el humor portugués pierde estas zancadillas por tomárselo todo al pie de la letra; quien las caza, gana la mesa. Al final, nadie tuvo que pedir disculpas: «no fue con mala intención», dijo alguien, y el fado continuó, bajito." },
      ],
      gaps: [
        { options: ["equipa", "escola", "editorial"], answer: 0, why: "Fim de projeto + colegas que gozam entre sí: es la cena de equipo." },
        { options: ["piadas", "pescarias", "palestras"], answer: 0, why: "«Elogios tortos» con pausa y segunda intención: funcionan como bromas." },
        { options: ["gozação", "generosidade", "gíria"], answer: 0, why: "El elogio con pausa y puñalada final es una burla: gozação." },
        { options: ["rasteiras", "rebeldias", "rancores"], answer: 0, why: "El humor seco tiende la pierna a quien lo toma al pie de la letra: zancadillas." },
        { options: ["mal", "mau", "manha"], answer: 0, why: "«Não fizemos por»: la fórmula de disculpa portuguesa es «não fizemos por mal»." },
      ],
    },
    {
      id: "cz-pt-b2-03-2", title: "O elogio tibio", titleEs: "El elogio tibio", minutes: 2,
      paragraphs: [
        { it: "Entre colegas portugueses, o elogio entusiasmado levanta {1}: quem diz «espetacular» sem provas é olhado com desconfiança. A moeda corrente é outra: «não está mal», dito com voz plana, que pode significar tudo entre o medíocre e o brilhante. Há uma gramática do tom que nenhum manual ensina: a {2} descendente, sem sublinhado, é a assinatura da ironia.", es: "Entre colegas portugueses, el elogio entusiasmado levanta cejas: quien dice «espectacular» sin pruebas es mirado con desconfianza. La moneda corriente es otra: «no está mal», dicho con voz plana, que puede significar todo lo que hay entre lo mediocre y lo brillante. Hay una gramática del tono que ningún manual enseña: la cadencia descendente, sin subrayado, es la firma de la ironía." },
        { it: "O truque para sobreviver é não levar nada à {3} nas primeiras vinte e quatro horas. Se o elogio traz uma pausa, espera pelo fim da frase antes de agradecer. E se ainda assim te apanharem à desprevenido, a saída elegante é a {4}: ri-te de ti mesmo antes que o façam os outros. Rir-se disso tudo é, no fundo, uma forma de dizer {5}.", es: "El truco para sobrevivir es no tomarse nada al pie de la letra en las primeras veinticuatro horas. Si el elogio trae una pausa, espera el final de la frase antes de agradecer. Y si aun así te Pillan desprevenido, la salida elegante es la autoironía: ríete de ti mismo antes de que lo hagan los demás. Reírse de todo eso es, en el fondo, una forma de decir que aguantamos." },
      ],
      gaps: [
        { options: ["sobrancelhas", "suspiros", "saudades"], answer: 0, why: "La desconfianza ante el entusiasmo excesivo se lee primero en la cara: levanta cejas." },
        { options: ["cadência", "canção", "culpa"], answer: 0, why: "«Descendente, sem sublinhado»: la melodía de la ironía es una cadencia." },
        { options: ["letra", "lei", "lente"], answer: 0, why: "«Levar tudo à»: la expresión fijada es levar à letra, tomárselo literalmente." },
        { options: ["autoironia", "autocrítica", "autopiedade"], answer: 0, why: "«Ri-te de ti mesmo antes que os outros»: la definición exacta de la autoironía." },
        { options: ["aguentamos", "desistimos", "recuamos"], answer: 0, why: "Reírse de las desgracias pequeñas es una forma de resistencia: aguantamos." },
      ],
    },
    {
      id: "cz-pt-b2-03-3", title: "O relato do grupo", titleEs: "El relato del grupo", minutes: 2,
      paragraphs: [
        { it: "Gente, relato do dia: derramei o café pela camisa branca mesmo antes da reunião com a diretora. Não ficou mal, não — ficou {1}. Estava a secar a camisa com o secador na casa de {2} quando a Marta bateu à porta para perguntar se estava tudo bem; respondi que sim, com a camisa às {3} e a dignidade por metade.", es: "Gente, relato del día: derramé el café por la camisa blanca justo antes de la reunión con la directora. No quedó mal, no — quedó histórico. Estaba secando la camisa con el secador en el cuarto de baño cuando Marta llamó a la puerta para preguntar si todo iba bien; respondí que sí, con la camisa a rayas y la dignidad por la mitad." },
        { it: "As respostas não se fizeram esperar. «Fica para o arquivo do ano», escreveu o Tiago. «Adotaste um novo {4} às riscas», acrescentou a Sofia. Ninguém perguntou se a diretora notou — sinal de que todos entenderam o código: quando o desastre é pequeno, trata-se com humor; quando é grande, trata-se com silêncio. O meu dia terminou bem, portanto: fiz rir a {5} inteira sem gastar um cêntimo.", es: "Las respuestas no se hicieron esperar. «Va para el archivo del año», escribió Tiago. «Adoptaste un nuevo patrón a rayas», añadió Sofia. Nadie preguntó si la directora se dio cuenta: señal de que todos entendieron el código: cuando el desastre es pequeño, se trata con humor; cuando es grande, se trata con silencio. Mi día terminó bien, por tanto: hice reír a la mesa entera sin gastar un céntimo." },
      ],
      gaps: [
        { options: ["histórico", "horrível", "harmónico"], answer: 0, why: "La litote «não ficou mal, não — ficou»: sube el desastre a categoría de histórico, con ironía." },
        { options: ["banho", "banca", "banda"], answer: 0, why: "El secador y la camisa mojada sitúan la escena en la casa de baño." },
        { options: ["riscas", "rasgas", "rosas"], answer: 0, why: "El café derramado dibuja rayas en la camisa blanca: às riscas." },
        { options: ["padrão", "perfume", "penteado"], answer: 0, why: "«Às riscas»: las manchas crean un estampado, un nuevo patrón." },
        { options: ["mesa", "multidão", "turma"], answer: 0, why: "En un grupo de compañeros que responden al mensaje, quien ríe es la mesa entera." },
      ],
    },
  ],

  "pt-cu-b2-04": [
    {
      id: "cz-pt-b2-04-1", title: "O concurso da «Sábado»", titleEs: "El concurso de la «Sábado»", minutes: 2,
      paragraphs: [
        { it: "A revista «Sábado» anunciou o concurso com uma página inteira: um {1} de opinião sobre a pergunta do ano — «as redes sociais melhoraram ou pioraram o debate público?». As regras eram simples e inflexíveis: trezentas {2}, tese clara, dois argumentos, uma refutação e uma conclusão que não fugisse do tema. O prazo: três semanas.", es: "La revista «Sábado» anunció el concurso con una página entera: un ensayo de opinión sobre la pregunta del año: «¿las redes sociales mejoraron o empeoraron el debate público?». Las reglas eran simples e inflexibles: trescientas palabras, tesis clara, dos argumentos, una refutación y una conclusión que no se desviara del tema. El plazo: tres semanas." },
        { it: "O júri, composto por três jornalistas e uma professora de filosofia, prometia ler todas as propostas sem saber o nome dos autores. O {3} seria publicado na edição de dezembro e o vencedor ganhava, além da glória, um jantar para duas pessoas em Lisboa. Milhares de leitores começaram a escrever nesse mesmo dia; a maioria descobriu, pela primeira vez, o quão difícil é defender uma {4} em trezentas palavras sem cair no {5} fácil.", es: "El jurado, compuesto por tres periodistas y una profesora de filosofía, prometía leer todas las propuestas sin saber el nombre de los autores. El texto ganador sería publicado en la edición de diciembre y el vencedor ganaba, además de la gloria, una cena para dos personas en Lisboa. Miles de lectores empezaron a escribir ese mismo día; la mayoría descubrió, por primera vez, lo difícil que es defender una tesis en trescientas palabras sin caer en el lugar común fácil." },
      ],
      gaps: [
        { options: ["ensaio", "entrevista", "email"], answer: 0, why: "«Tese, argumentos, refutação, conclusão»: la estructura pedida es la de un ensayo." },
        { options: ["palavras", "páginas", "fotografias"], answer: 0, why: "Trescientas de extensión en un texto breve: palabras." },
        { options: ["texto", "título", "troféu"], answer: 0, why: "Lo que se publica en la revista es la pieza ganadora: el texto." },
        { options: ["tese", "torrada", "tradição"], answer: 0, why: "«Com dois argumentos e uma refutação»: lo que se defiende es la tesis." },
        { options: ["lugar-comum", "louvor", "luto"], answer: 0, why: "El peligro de un texto corto sobre tema grande: caer en el cliché, el lugar común." },
      ],
    },
    {
      id: "cz-pt-b2-04-2", title: "Bolhas e algoritmos", titleEs: "Burbujas y algoritmos", minutes: 3,
      paragraphs: [
        { it: "O ensaio premiado abria com uma tese fina como um fio: «As redes sociais ampliaram o debate público, embora tenham empobrecido a sua qualidade». Em primeiro lugar, multiplicaram as {1}; além disso, aceleraram o escrutínio dos poderosos. Mas o leitor atento já suspeitava do que vinha a seguir: o {2}, escrevia a autora, tende a fechar os utilizadores em bolhas de opinião.", es: "El ensayo premiado abría con una tesis fina como un hilo: «Las redes sociales ampliaron el debate público, aunque empobrecieron su calidad». En primer lugar, multiplicaron las voces; además, aceleraron el escrutinio de los poderosos. Pero el lector atento ya sospechaba lo que venía después: el algoritmo, escribía la autora, tiende a encerrar a los usuarios en burbujas de opinión." },
        { it: "A refutação ocupava o parágrafo central. «É verdade que as redes democratizaram o {3} à discussão; contudo, democratizar o acesso não é democratizar a qualidade». A conclusão evitava o triunfalismo com um último gesto de {4}: «poder-se-á dizer que ganhámos em quantidade aquilo que perdemos em {5} — a tese permanece provável, não definitiva».", es: "La refutación ocupaba el párrafo central. «Es verdad que las redes democratizaron el acceso a la discusión; sin embargo, democratizar el acceso no es democratizar la calidad». La conclusión evitaba el triunfalismo con un último gesto de humildad: «podría decirse que ganamos en cantidad aquello que perdimos en escucha — la tesis sigue siendo probable, no definitiva»." },
      ],
      gaps: [
        { options: ["vozes", "vinhas", "variedades"], answer: 0, why: "«Multiplicaram as»: lo contrario de pocas voces en los medios tradicionales." },
        { options: ["algoritmo", "almanaque", "aldeão"], answer: 0, why: "Lo que «fecha os utilizadores em bolhas de opinião» es el algoritmo." },
        { options: ["acesso", "excesso", "apoio"], answer: 0, why: "«Democratizar o» + «à discussão»: lo que se abre a todos es el acceso." },
        { options: ["humildade", "hostilidade", "histeria"], answer: 0, why: "«La tesis permanece provável, não definitiva»: cerrar sin dogmatismo es un gesto de humildad." },
        { options: ["escuta", "escola", "espera"], answer: 0, why: "«Ganhámos em quantidade aquilo que perdemos em»: el par clásico cantidad/escucha del debate." },
      ],
    },
    {
      id: "cz-pt-b2-04-3", title: "A coluna de opinião", titleEs: "La columna de opinión", minutes: 3,
      paragraphs: [
        { it: "Nos grandes diários portugueses, a coluna de opinião reserva-se a quem assina com nome próprio: a opinião tem {1}. As páginas de opinião do «Público» e do «Expresso» vivem de firmas estáveis, colunistas que voltam todas as semanas ao mesmo combate. Escrever sobre ideias é, por cá, um desporto {2}, praticado em cafés, em blogues e na televisão.", es: "En los grandes diarios portugueses, la columna de opinión se reserva a quien firma con nombre propio: la opinión tiene dueño. Las páginas de opinión del «Público» y del «Expresso» viven de firmas estables, columnistas que vuelven todas las semanas al mismo combate. Escribir sobre ideas es, por aquí, un deporte nacional, practicado en cafés, en blogs y en la televisión." },
        { it: "Nas redes, porém, ninguém pede {3}: o espaço da opinião cresceu sem controlo editorial e a um ritmo que os jornais não acompanham. Dir-se-ia que a democracia ganhou; contudo, a {4} dos factos nem sempre chega a tempo. Daí a importância de ensaios bem argumentados: em tempos de ruído, a {5} é o argumento.", es: "En las redes, sin embargo, nadie pide credenciales: el espacio de la opinión creció sin control editorial y a un ritmo que los periódicos no acompañan. Diríase que la democracia ganó; sin embargo, la verificación de los hechos no siempre llega a tiempo. De ahí la importancia de los ensayos bien argumentados: en tiempos de ruido, la estructura es el argumento." },
      ],
      gaps: [
        { options: ["dono", "dote", "direção"], answer: 0, why: "«Quem assina com nome próprio»: la opinión comprometida tiene dueño." },
        { options: ["nacional", "natal", "nervoso"], answer: 0, why: "«Praticado em cafés, blogues e televisão»: la expresión fijada es desporto nacional." },
        { options: ["credenciais", "credores", "candeeiros"], answer: 0, why: "En las redes nadie exige acreditar quién eres: nadie pide credenciales." },
        { options: ["verificação", "vingança", "vinheta"], answer: 0, why: "«Dos factos»: el control de los datos es la verificación." },
        { options: ["estrutura", "estátua", "estrela"], answer: 0, why: "«Em tempos de ruído»: lo que ordena el ruido y sostiene el argumento es la estructura." },
      ],
    },
  ],

  "pt-cu-b2-05": [
    {
      id: "cz-pt-b2-05-1", title: "A visita ao T2", titleEs: "La visita al T2", minutes: 3,
      paragraphs: [
        { it: "O anúncio terminava com uma palavra mágica: «negociável». O T2 de Alvalade ficava num terceiro andar com {1}, tinha uma cozinha pequena mas bem distribuída e um quarto que precisava claramente de uma mão de {2}. O sr. Vasco, o senhorio, recebeu-me à hora marcada e conversou vinte minutos sobre o bairro antes de abrir a porta — bom sinal, pensei: quem gosta de conversar, negocia.", es: "El anuncio terminaba con una palabra mágica: «negociable». El T2 de Alvalade quedaba en un tercer piso con ascensor, tenía una cocina pequeña pero bien distribuida y un cuarto que necesitaba claramente una mano de pintura. El sr. Vasco, el casero, me recibió a la hora marcada y conversó veinte minutos sobre el barrio antes de abrir la puerta — buena señal, pensé: a quien le gusta conversar, negocia." },
        { it: "Lá dentro, a verdade: o {3} estava firme e as rendas da zona tinham subido, mas a casa era sólida e o {4} simpático. A caução seriam dois meses, entregues na assinatura. A meio da visita, o senhorio confessou que preferia «alguém que cuide da casa» a alguém que pagasse mais. Na escada, despedimo-nos com um aperto de mão e eu já sabia qual seria o assunto da próxima conversa: a {5} mensal.", es: "Dentro, la verdad: el mercado estaba firme y los alquileres de la zona habían subido, pero la casa era sólida y el vecino simpático. La fianza serían dos meses, entregados en la firma. A mitad de la visita, el casero confesó que prefería «alguien que cuide la casa» a alguien que pagara más. En la escalera nos despedimos con un apretón de manos y yo ya sabía cuál sería el asunto de la próxima conversación: la renta mensual." },
      ],
      gaps: [
        { options: ["elevador", "elétrico", "espelho"], answer: 0, why: "Un tercer piso se sube en ascensor: elevador (elétrico es el tranvía de Lisboa)." },
        { options: ["tinta", "toalha", "tarifa"], answer: 0, why: "«Uma mão de»: la expresión fijada para pintar una habitación es mão de tinta." },
        { options: ["mercado", "médico", "marco"], answer: 0, why: "«Estava firme» y «as rendas tinham subido»: quien fija precios es el mercado." },
        { options: ["vizinho", "verão", "vestíbulo"], answer: 0, why: "La casa era sólida y, en el típico retrato de barrio, el que es simpático es el vecino." },
        { options: ["renda", "rendimento", "rifa"], answer: 0, why: "Falso amigo: lo que se paga cada mes por la casa es la renda; rendimento sería el ingreso." },
      ],
    },
    {
      id: "cz-pt-b2-05-2", title: "A mensagem da noite", titleEs: "El mensaje de la noche", minutes: 3,
      paragraphs: [
        { it: "Naquela noite escrevi a mensagem que tinha ensaiado mentalmente três vezes. Depois de agradecer a visita, vinha a {1} condicional: «Se a renda fosse de oitocentos e noventa euros, assinava um contrato de dois {2} e entregava a caução na próxima semana». Reli o texto duas vezes antes de enviar: a pontuação tinha de estar perfeita, porque em Portugal até as vírgulas negociam.", es: "Aquella noche escribí el mensaje que había ensayado mentalmente tres veces. Después de agradecer la visita, venía la propuesta condicional: «Si la renta fuera de ochocientos noventa euros, firmaba un contrato de dos años y entregaba la fianza la próxima semana». Releí el texto dos veces antes de enviarlo: la puntuación tenía que estar perfecta, porque en Portugal hasta las comas negocian." },
        { it: "A resposta chegou na manhã seguinte, com a educação de quem não quer dizer não: «Receio que novecentos não me sejam {3}, mas talvez cheguemos a um meio-termo». Depois, a frase que mudou tudo: «Com {4}, o quarto fica pintado até sexta». Fechámos o negócio nesse mesmo dia, com um aperto de mão e a promessa de tudo por {5}: oitocentos e noventa e cinco euros, dois anos de contrato e o quarto renovado.", es: "La respuesta llegó la mañana siguiente, con la educación de quien no quiere decir no: «Temo que novecientos no me sean posibles, pero tal vez lleguemos a un punto intermedio». Después, la frase que lo cambió todo: «Con franqueza, el cuarto queda pintado para el viernes». Cerramos el trato ese mismo día, con un apretón de manos y la promesa de todo por escrito: ochocientos noventa y cinco euros, dos años de contrato y el cuarto renovado." },
      ],
      gaps: [
        { options: ["proposta", "prova", "pauta"], answer: 0, why: "«Se a renda fosse, assinava»: la frase condicional completa es una propuesta." },
        { options: ["anos", "asnos", "arcos"], answer: 0, why: "Un contrato de arrendamiento se mide en años: dois anos." },
        { options: ["possíveis", "passíveis", "prováveis"], answer: 0, why: "«Receio que não me sejam»: la negativa suavizada habla de viabilidad económica, possíveis." },
        { options: ["franqueza", "frequência", "freguesia"], answer: 0, why: "«Com», la muletilla del casero honesto para bajar el precio con educación: com franqueza." },
        { options: ["escrito", "estendido", "empurrado"], answer: 0, why: "La promesa que vale en una negociación es la de dejarlo todo por escrito." },
      ],
    },
    {
      id: "cz-pt-b2-05-3", title: "O contrato por escrito", titleEs: "El contrato por escrito", minutes: 2,
      paragraphs: [
        { it: "A papelada chegou na sexta-feira, como prometido: o contrato com o valor de oitocentos e noventa e cinco euros, o {1} de dois anos e a caução de dois meses já refletida. O quarto aparecia descrito como «recém-pintado» — e era verdade: até o rodapé tinha sido {2}. Faltava apenas a {3} das duas partes, marcada para o sábado de manhã no café da esquina.", es: "La documentación llegó el viernes, como prometido: el contrato con el valor de ochocientos noventa y cinco euros, el plazo de dos años y la fianza de dos meses ya reflejada. El cuarto aparecía descrito como «recién pintado», y era verdad: hasta el rodapié había sido pintado. Faltaba solo la firma de las dos partes, marcada para el sábado por la mañana en el café de la esquina." },
        { it: "O sr. Vasco chegou com a mulher, que inspecionou a casa com olho clínico e aprovou o cadeado novo da porta. Assinámos tudo sobre uma mesa de mármore, entre dois galões e um croissant. Na despedida, o senhorio deu-me o número da vizinha do rés do chão: «qualquer {4} na casa, ligue primeiro a ela». A mudança ficou marcada para o fim do mês, e o meu primeiro sábado como inquilino terminou com uma {5} no sofá ainda embrulhado em plástico.", es: "El sr. Vasco llegó con su mujer, que inspeccionó la casa con ojo clínico y aprobó el candado nuevo de la puerta. Firmamos todo sobre una mesa de mármol, entre dos galões y un croissant. En la despedida, el casero me dio el número de la vecina del bajo: «cualquier avería en la casa, llámala primero a ella». La mudanza quedó marcada para fin de mes, y mi primer sábado como inquilino terminó con una siesta en el sofá todavía envuelto en plástico." },
      ],
      gaps: [
        { options: ["prazo", "prémio", "programa"], answer: 0, why: "«De dois anos» en un contrato de arrendamiento: su duración es el prazo." },
        { options: ["pintado", "polido", "partido"], answer: 0, why: "«Recém-pintado» y «até o rodapé»: la confirmación es que todo estaba pintado." },
        { options: ["assinatura", "aventura", "amanhã"], answer: 0, why: "«Das duas partes, marcada para o sábado»: lo que se hace sobre una mesa de café es la firma." },
        { options: ["avaria", "avaliação", "aula"], answer: 0, why: "«Ligue primeiro à vizinha»: lo que una vecina del bajo resuelve primero es una avería." },
        { options: ["cochilo", "cavalo", "casamento"], answer: 0, why: "Tras la mudanza, en el sofá envuelto en plástico, llega la siesta: um cochilo." },
      ],
    },
  ],

  "pt-cu-b2-06": [
    {
      id: "cz-pt-b2-06-1", title: "O primeiro contacto na Tech Porto", titleEs: "El primer contacto en la Tech Porto", minutes: 3,
      paragraphs: [
        { it: "A Alfândega do Porto recebia a conferência com o rio de fundo e um cheiro suave a café torrado nos corredores. Com o {1} ainda impecável ao pescoço, olhei à minha volta: cem desconhecidos, todos com o mesmo sorriso profissional. A tática portuguesa para sobreviver a uma sala destas resume-se a três palavras: café, {2} e seguimento.", es: "La Alfândega do Porto recibía la conferencia con el río de fondo y un suave olor a café tostado en los pasillos. Con la acreditación todavía impecable al cuello, miré a mi alrededor: cien desconocidos, todos con la misma sonrisa profesional. La táctica portuguesa para sobrevivir a una sala como esta se resume en tres palabras: café, tarjeta y seguimiento." },
        { it: "Escolhi a Filipa, da empresa de logística verde, porque a ouvi queixar-se com humor dos preços dos {3} para a frota — paixão à primeira conversa. Aproximei-me com um elogio concreto sobre a apresentação dela e a pergunta clássica: «Posso roubar-lhe dois minutos?». Vinte minutos depois, trocámos cartões e prometi enviar-lhe o relatório de que falámos. Segundo a sabedoria das conferências, quem não segue o contacto em quarenta e oito horas perde o {4}; eu mandei a mensagem já no {5} de regresso ao hotel.", es: "Escogí a Filipa, de la empresa de logística verde, porque la oí quejarse con humor de los precios de los combustibles para la flota — pasión a primera conversación. Me acerqué con un elogio concreto sobre su presentación y la pregunta clásica: «¿Puedo robarle dos minutos?». Veinte minutos después, intercambiamos tarjetas y prometí enviarle el informe del que hablamos. Según la sabiduría de las conferencias, quien no sigue el contacto en cuarenta y ocho horas pierde el momento; yo mandé el mensaje ya de camino de regreso al hotel." },
      ],
      gaps: [
        { options: ["crachá", "craque", "cachecol"], answer: 0, why: "«Ao pescoço» en una conferencia: lo que identifica al participante es la acreditación, el crachá." },
        { options: ["cartão", "cartaz", "cortesia"], answer: 0, why: "La tríada táctica del networking portugués: café, cartão e seguimento." },
        { options: ["combustíveis", "cosméticos", "cursos"], answer: 0, why: "Una empresa de logística con flota se queja del precio de los combustibles." },
        { options: ["momento", "monumento", "molde"], answer: 0, why: "«Em quarenta e oito horas»: quien tarda en hacer seguimiento pierde el momento." },
        { options: ["caminho", "canário", "candeeiro"], answer: 0, why: "«De regresso ao hotel»: el mensaje se manda ya en el trayecto, de camino." },
      ],
    },
    {
      id: "cz-pt-b2-06-2", title: "A mesa de café", titleEs: "La mesa de café", minutes: 3,
      paragraphs: [
        { it: "Em Portugal, muitos negócios não nascem em salas de reunião: nascem em mesas de {1}, ao ritmo lento de um galão que arrefece. A pergunta «vamos tomar um café?» raramente é sobre café: é um convite a negociar devagar, sem {2} aparente, com tempo para ouvir a pessoa inteira e não apenas a proposta.", es: "En Portugal, muchos negocios no nacen en salas de reunión: nacen en mesas de café, al ritmo lento de un galão que se enfría. La pregunta «¿vamos a tomar un café?» rara vez va del café: es una invitación a negociar despacio, sin prisa aparente, con tiempo para escuchar a la persona entera y no solo la propuesta." },
        { it: "Na mesa com a Filipa, o segredo foi simples: ouvir mais do que apresentei e {3} o que interessava a cada interlocutor. Ela falou do piloto do Porto; eu tinha exatamente os dados de rotas de que ela precisava — a conversa veio mesmo a {4}. No fim, trocámos cartões com cerimónia, apesar do QR no crachá, porque o cartão ainda manda no mundo real. Fiquei a {5} uma apresentação prometida; em Portugal, essas dívidas pagam-se com juros de amizade.", es: "En la mesa con Filipa, el secreto fue simple: escuchar más de lo que presenté y anotar lo que le interesaba a cada interlocutor. Ella habló del piloto de Oporto; yo tenía exactamente los datos de rutas que ella necesitaba — la conversación vino de perlas. Al final, intercambiamos tarjetas con ceremonia, a pesar del QR en la acreditación, porque la tarjeta todavía manda en el mundo real. Quedé debiendo una presentación prometida; en Portugal, esas deudas se pagan con intereses de amistad." },
      ],
      gaps: [
        { options: ["café", "casa", "cadeira"], answer: 0, why: "«Um galão que arrefece»: los negocios nacen en mesas de café." },
        { options: ["pressa", "prenda", "prova"], answer: 0, why: "«Negociar devagar» y «com tempo»: lo que no se nota es la prisa." },
        { options: ["anotar", "acusar", "apertar"], answer: 0, why: "«Ouvir mais do que apresentei»: el buen networking toma nota de lo que interesa a cada uno." },
        { options: ["calhar", "custar", "cozinhar"], answer: 0, why: "«A conversa veio mesmo a»: la colocación fijada es vir a calhar, venir de perlas." },
        { options: ["dever", "deitar", "detestar"], answer: 0, why: "«Uma apresentação prometida» que se paga con intereses: la fórmula é ficar a dever." },
      ],
    },
    {
      id: "cz-pt-b2-06-3", title: "O seguimento em quarenta e oito horas", titleEs: "El seguimiento en cuarenta y ocho horas", minutes: 2,
      paragraphs: [
        { it: "A regra não escrita das conferências é severa: quem não segue o contacto em quarenta e oito horas deixa-o {1}. A mensagem de seguimento à portuguesa tem um molde: começar pelo momento partilhado, oferecer antes de pedir e terminar com um pedido pequeno e concreto. Nada de discursos; uma mensagem de cinco linhas vale por dez páginas de {2}.", es: "La regla no escrita de las conferencias es severa: quien no sigue el contacto en cuarenta y ocho horas lo deja enfriarse. El mensaje de seguimiento a la portuguesa tiene un molde: empezar por el momento compartido, ofrecer antes de pedir y terminar con una petición pequeña y concreta. Nada de discursos; un mensaje de cinco líneas vale por diez páginas de teoría." },
        { it: "A minha dizia: «Olá, Filipa! Sou o da pergunta sobre os quinze por cento, ontem na Tech Porto. Como prometido, envio em anexo o relatório de {3} de que falámos». Seguia-se a oferta desinteressada, o elogio sincero ao piloto da equipa dela e o fecho: «Se não for {4}, proponho um café de quinze minutos quando passar pelo Porto». A resposta chegou em duas horas. Ao seu dispor — e mais uma vez, muito {5}.", es: "El mío decía: «¡Hola, Filipa! Soy el de la pregunta sobre el quince por ciento, ayer en la Tech Porto. Como prometí, adjunto el informe de rutas del que hablamos». Seguía la oferta desinteresada, el elogio sincero al piloto de su equipo y el cierre: «Si no le resulta inconveniente, propongo un café de quince minutos cuando pase por Oporto». La respuesta llegó en dos horas. A su disposición — y una vez más, mucho gusto." },
      ],
      gaps: [
        { options: ["arrefecer", "aquecer", "aplaudir"], answer: 0, why: "Como el galão de la mesa, un contacto sin seguimiento se deja enfriar: arrefecer." },
        { options: ["teoria", "teatro", "tesoura"], answer: 0, why: "«Nada de discursos»: cinco líneas prácticas valen más que diez páginas de teoría." },
        { options: ["rotas", "roupas", "rendas"], answer: 0, why: "La empresa era de logística y el piloto hablaba de rutas: el informe es de rotas." },
        { options: ["inconveniente", "impossível", "inútil"], answer: 0, why: "«Se não for», la cortesía fijada para proponer un café es se não for inconveniente." },
        { options: ["gosto", "gala", "grito"], answer: 0, why: "«Mais uma vez, muito»: la fórmula de despedida es muito gosto." },
      ],
    },
  ],

  "pt-cu-b2-07": [
    {
      id: "cz-pt-b2-07-1", title: "O caso da Figueira da Foz", titleEs: "El caso de la Figueira da Foz", minutes: 3,
      paragraphs: [
        { it: "Segundo o episódio, a casa ficava sozinha desde 2009: o dono passava os outonos em Espanha e os vizinhos pouco o viam. Em outubro de 2011, alguém entrou sem arrombar a porta, desligou o alarme com o código certo e levou apenas a coleção de {1}. Não havia sinais de {2} nem testemunhas; o cão, um velho lagoto que dormia na cozinha, não ladrou.", es: "Según el episodio, la casa quedaba sola desde 2009: el dueño pasaba los otoños en España y los vecinos poco lo veían. En octubre de 2011, alguien entró sin forzar la puerta, apagó la alarma con el código correcto y se llevó solo la colección de relojes. No había señales de forzamiento ni testigos; el perro, un viejo lagoto que dormía en la cocina, no ladró." },
        { it: "A polícia concluiu que o ladrão conhecia a rotina da casa: sabia onde estava tudo, sabia quando o dono viajava. O sobrinho tinha o código da alarme e {3} de jogo; a empregada, vinte anos de casa. Cada ouvinte tem a sua teoria, e o episódio terminava com uma pergunta que ninguém conseguiu responder: quem quer que tenha sido, desapareceu sem deixar {4} — e o caso nunca chegou a {5}.", es: "La policía concluyó que el ladrón conocía la rutina de la casa: sabía dónde estaba todo, sabía cuándo viajaba el dueño. El sobrino tenía el código de la alarma y deudas de juego; la empleada, veinte años de casa. Cada oyente tiene su teoría, y el episodio terminaba con una pregunta que nadie pudo responder: quienquiera que fuera, desapareció sin dejar rastro — y el caso nunca llegó a resolverse." },
      ],
      gaps: [
        { options: ["relógios", "remédios", "roupas"], answer: 0, why: "La colección robada en un caso de true crime elegante: los relojes." },
        { options: ["arrombamento", "assobio", "aterramento"], answer: 0, why: "«Entrou sem forçar a porta»: no había señales de forzamiento, arrombamento." },
        { options: ["dúvidas", "dívidas", "discussões"], answer: 1, why: "El sospechoso clásico tenía el código y deudas de juego: dívidas, no dudas." },
        { options: ["rasto", "resto", "rosto"], answer: 0, why: "«Desapareceu sem deixar»: la expresión fijada es no dejar rastro." },
        { options: ["resolver-se", "rezar", "reabrir"], answer: 0, why: "Un caso policial que queda sin cerrar nunca llegó a resolverse." },
      ],
    },
    {
      id: "cz-pt-b2-07-2", title: "As teorias da mesa", titleEs: "Las teorías de la mesa", minutes: 3,
      paragraphs: [
        { it: "Na mesa do café de Braga, cada amigo defendia o seu suspeito com a paixão de quem lá estivera. «Eu digo que foi o sobrinho: tinha o {1} e as dívidas», insistia o Paulo. «A empregada conhecia a rotina melhor que o próprio dono», respondia a Catarina. O Zé, mais cético, resumia: «segundo o podcast, não há provas contra ninguém; tudo o resto é {2}».", es: "En la mesa del café de Braga, cada amigo defendía a su sospechoso con la pasión de quien hubiera estado allí. «Yo digo que fue el sobrino: tenía el código y las deudas», insistía Paulo. «La empleada conocía la rutina mejor que el propio dueño», respondía Catarina. Zé, más escéptico, resumía: «según el podcast, no hay pruebas contra nadie; todo lo demás es especulación»." },
        { it: "A conversa embalou nas hipóteses: o cão deve ter {3} quem entrou, porque não ladrou; podia ter havido um cúmplice por dentro; e se o alarme tivesse sido desligado de fora, alguém teria visto o {4} no jardim. Quando o café acabou, ninguém tinha mudado de opinião — como manda a tradição dos casos por resolver. A despedida foi a frase de sempre: «a minha {5} segura é que nunca vamos saber».", es: "La conversación se enganchó con las hipótesis: el perro debe de haber conocido a quien entró, porque no ladró; podría haber habido un cómplice por dentro; y si la alarma hubiera sido apagada desde fuera, alguien habría visto al ladrón en el jardín. Cuando el café se acabó, nadie había cambiado de opinión — como manda la tradición de los casos sin resolver. La despedida fue la frase de siempre: «mi apuesta segura es que nunca vamos a saber»." },
      ],
      gaps: [
        { options: ["código", "cachimbo", "carimbo"], answer: 0, why: "El sobrino era sospechoso porque conocía la clave de la alarma: el código." },
        { options: ["especulação", "escola", "esperteza"], answer: 0, why: "«Não há provas; tudo o resto é»: teorizar sin pruebas es especulación." },
        { options: ["conhecido", "condenado", "convidado"], answer: 0, why: "«Porque não ladrou»: la hipótesis es que el perro conocía al visitante." },
        { options: ["ladrão", "lados", "ladeira"], answer: 0, why: "Si la alarma se apagaba desde fuera, alguien habría visto al autor: el ladrón." },
        { options: ["aposta", "aposentação", "aplicação"], answer: 0, why: "«A minha, segura, é que nunca vamos saber»: la expresión es aposta segura." },
      ],
    },
    {
      id: "cz-pt-b2-07-3", title: "Porque gostamos de true crime", titleEs: "Por qué nos gusta el true crime", minutes: 3,
      paragraphs: [
        { it: "Os podcasts de crimes reais estão, em Portugal, entre os mais {1} das plataformas, e ninguém estranha: a mistura de mistério e vida quotidiana é irresistível. Há quem ouça à espera do {2}; há quem não consiga dormir depois. Nas redes, cada episódio gera centenas de teorias, algumas mais improváveis que o próprio crime.", es: "Los podcasts de crímenes reales están, en Portugal, entre los más escuchados de las plataformas, y a nadie le extraña: la mezcla de misterio y vida cotidiana es irresistible. Hay quien escucha esperando el autobús; hay quien no consigue dormir después. En las redes, cada episodio genera cientos de teorías, algunas más improbables que el propio crimen." },
        { it: "Os produtores caminham numa linha fina entre o respeito pelas {3} e a sede de audiência. Casos antigos, como desaparecimentos nunca resolvidos, voltam assim ao debate público décadas depois — para alegria de uns e desgosto de outros. Talvez por isso o género incomode e fascine ao mesmo tempo: recorda-nos que a vida real, ao contrário da ficção, não fecha {4} narrativos, e que a justiça, quando chega, chega quase sempre {5}.", es: "Los productores caminan en una línea fina entre el respeto a las víctimas y la sed de audiencia. Casos antiguos, como desapariciones nunca resueltas, vuelven así al debate público décadas después — para alegría de unos y disgusto de otros. Tal vez por eso el género incomode y fascine a la vez: nos recuerda que la vida real, al contrario que la ficción, no cierra arcos narrativos, y que la justicia, cuando llega, llega casi siempre tarde." },
      ],
      gaps: [
        { options: ["ouvidos", "orçados", "ordenados"], answer: 0, why: "Los podcasts de éxito son los más escuchados: os mais ouvidos." },
        { options: ["autocarro", "avião", "ascensor"], answer: 0, why: "«Há quem ouça à espera do»: la escucha cotidiana típica es esperando el autobús." },
        { options: ["vítimas", "visitas", "vitórias"], answer: 0, why: "La línea fina del género separa la audiencia del respeto a quienes sufrieron el crimen: las víctimas." },
        { options: ["arcos", "arquivos", "artistas"], answer: 0, why: "«Narrativos»: la ficción redondea sus historias cerrando arcos narrativos." },
        { options: ["tarde", "cedo", "farta"], answer: 0, why: "«Quando chega, chega quase sempre»: la justicia tardía es el lamento del género." },
      ],
    },
  ],

  "pt-cu-b2-08": [
    {
      id: "cz-pt-b2-08-1", title: "O concurso interno", titleEs: "El concurso interno", minutes: 3,
      paragraphs: [
        { it: "Quando a vaga de coordenador sénior abriu, o aviso interno teve quarenta e duas visualizações numa hora: era um {1} reservado a quem já trabalhava na casa. O João, engenheiro de marcações, leu o edital três vezes e decidiu candidatar-se — afinal, quem se apresenta já conhece a casa; o que se {2} é o modo de falar dela.", es: "Cuando la vacante de coordinador sénior se abrió, el aviso interno tuvo cuarenta y dos visualizaciones en una hora: era un concurso reservado a quien ya trabajaba en la casa. João, ingeniero de citas, leyó el edital tres veces y decidió presentarse — al fin y al cabo, quien se presenta ya conoce la casa; lo que se evalúa es el modo de hablar de ella." },
        { it: "A preparação durou duas semanas. Reuniu os {3} da migração de 2023, pediu feedback antigo aos colegas e escreveu uma página com a sua história: assumi, liderei, entregámos. Ensaio no espelho: sessenta segundos sobre um desafio real, com {4} e sem autobombo. A regra não escrita das entrevistas internas portuguesas dizia-lhe o que evitar: quem diz «fiz tudo sozinho» raramente {5}.", es: "La preparación duró dos semanas. Reunió los números de la migración de 2023, pidió feedback antiguo a los colegas y escribió una página con su historia: me hice cargo, lideré, entregamos. Ensayo frente al espejo: sesenta segundos sobre un desafío real, con pruebas y sin autobombo. La regla no escrita de las entrevistas internas portuguesas le decía qué evitar: quien dice «lo hice todo solo» raramente pasa." },
      ],
      gaps: [
        { options: ["concurso", "concelho", "concerto"], answer: 0, why: "Una vacante reservada a internos es un concurso interno (concelho es ayuntamiento y concerto, concierto)." },
        { options: ["avalia", "guarda", "vende"], answer: 0, why: "Quien ya conoce la casa: lo que se juzga en la entrevista es cómo habla de ella, se avalia." },
        { options: ["números", "nuvens", "nomes"], answer: 0, why: "La preparación de un logro profesional se apoya en los datos de la migración: los números." },
        { options: ["provas", "piadas", "preces"], answer: 0, why: "«E sem autobombo»: el equilibrio exige adjetivos con pruebas." },
        { options: ["passa", "promete", "perece"], answer: 0, why: "«Raramente» + la regla no escrita: quien no comparte mérito raramente pasa la prueba." },
      ],
    },
    {
      id: "cz-pt-b2-08-2", title: "A entrevista com a Dra. Helena", titleEs: "La entrevista con la Dra. Helena", minutes: 3,
      paragraphs: [
        { it: "A pergunta chegou como previsto, ao terceiro minuto: «Fala-me de um {1}». O João respirou fundo e começou pelo decorado: «A migração decorria com metade da equipa de origem». Depois, os factos pontuais: «Assumi a {2} em janeiro, liderei o planeamento em três fases e assegurei a comunicação com o hospital». A diretora anotava, sem levantar os olhos.", es: "La pregunta llegó como estaba previsto, al tercer minuto: «Háblame de un desafío». João respiró hondo y empezó por el decorado: «La migración transcurría con la mitad del equipo de origen». Después, los hechos puntuales: «Me hice cargo de la coordinación en enero, lideré la planificación en tres fases y aseguré la comunicación con el hospital». La directora anotaba, sin levantar la vista." },
        { it: "«E o resultado?», perguntou. «Trezentas e vinte {3} de trabalho manual poupadas por ano — e ninguém pediu a demissão, que para mim é o melhor indicador». A Dra. Helena sorriu pela primeira vez. «É importante que continues a dar {4} à equipa», disse ele no fecho, «o mérito da execução é deles». A última pergunta era a clássica: «E se algo correr {5}?». «Ouvindo primeiro», respondeu o João. Contratado.", es: "«¿Y el resultado?», preguntó. «Trescientas veinte horas de trabajo manual ahorradas al año — y nadie pidió la dimisión, que para mí es el mejor indicador». La Dra. Helena sonrió por primera vez. «Es importante que sigas dando crédito al equipo», dijo él en el cierre, «el mérito de la ejecución es de ellos». La última pregunta era la clásica: «¿Y si algo sale mal?». «Escuchando primero», respondió João. Contratado." },
      ],
      gaps: [
        { options: ["desafio", "desporto", "deserto"], answer: 0, why: "La pregunta clásica de entrevista es «fala-me de um desafío»." },
        { options: ["coordenação", "corrupção", "conversa"], answer: 0, why: "«Assumi a» + «liderei o planeamento»: lo que se asume es la coordinación." },
        { options: ["horas", "aulas", "áreas"], answer: 0, why: "«De trabalho manual poupadas por ano»: la métrica son horas." },
        { options: ["crédito", "cansaço", "casaco"], answer: 0, why: "«O mérito da execução é deles»: repartir el mérito es dar crédito al equipo." },
        { options: ["mal", "mau", "mel"], answer: 0, why: "«E se algo correr»: el adverbio de la pregunta clásica es correr mal." },
      ],
    },
    {
      id: "cz-pt-b2-08-3", title: "O feedback da diretora", titleEs: "El feedback de la directora", minutes: 2,
      paragraphs: [
        { it: "O resultado chegou por email, numa sexta-feira de tarde: promovido a partir de setembro. Mas o mais valioso veio depois, na conversa de feedback. «Alegra-me que tenhas {1} o projeto com esta seriedade», disse a Dra. Helena, «e é importante que continues a fazê-lo». O João agradeceu e guardou a frase seguinte, escrita à mão no caderno: «falas de {2} como quem partilha, não como quem se exibe — nunca percas isso».", es: "El resultado llegó por correo, un viernes por la tarde: ascendido a partir de septiembre. Pero lo más valioso vino después, en la conversación de feedback. «Me alegra que hayas asumido el proyecto con esta seriedad», dijo la Dra. Helena, «y es importante que sigas haciéndolo». João agradeció y guardó la frase siguiente, escrita a mano en el cuaderno: «hablas de resultados como quien comparte, no como quien se exhibe — nunca pierdas eso»." },
        { it: "Houve também conselho prático: escolher bem as primeiras semanas, proteger o {3} das pessoas e não prometer mudanças que não possa cumprir até dezembro. «A equipa confia em ti porque ouviste antes de decidir; mantém essa ordem». No corredor, um colega antigo resumiu a promoção à portuguesa, com um sorriso seco: «agora é que começam os {4}». Eram palavras de aviso e de parabéns ao mesmo tempo — o equivalente local a uma {5} de boas-vindas.", es: "Hubo también consejo práctico: elegir bien las primeras semanas, proteger el ritmo de las personas y no prometer cambios que no pueda cumplir hasta diciembre. «El equipo confía en ti porque escuchaste antes de decidir; mantén ese orden». En el pasillo, un colega antiguo resumió la promoción a la portuguesa, con una sonrisa seca: «ahora es que empiezan los problemas». Eran palabras de aviso y de enhorabuena a la vez — el equivalente local a una bienvenida." },
      ],
      gaps: [
        { options: ["assumido", "aceite", "acabado"], answer: 0, why: "«Que tenhas» + «com esta seriedade»: el proyecto se asumió, se hizo cargo de él." },
        { options: ["resultados", "resumos", "receios"], answer: 0, why: "«Como quem partilha, não como quem se exibe»: lo que se comparte con datos son los resultados." },
        { options: ["ritmo", "riscos", "regresso"], answer: 0, why: "«Das pessoas» + no prometer cambios bruscos: se protege su ritmo." },
        { options: ["problemas", "prémios", "passeios"], answer: 0, why: "«Palavras de aviso»: la broma del colega anticipa las dificultades, los problemas." },
        { options: ["homenagem", "hospitalidade", "hesitação"], answer: 0, why: "Aviso y parabéns juntos funcionan como saludo de entrada: una homenaje de bienvenida." },
      ],
    },
  ],

  "pt-cu-b2-09": [
    {
      id: "cz-pt-b2-09-1", title: "A fila do Chiado", titleEs: "La cola del Chiado", minutes: 3,
      paragraphs: [
        { it: "O restaurante do Chiado tinha uma fila na porta e 4,8 estrelas no Google, e a Marta desconfiou logo da mistura. «Meio ponto na {1} vale milhares de reservas por ano», avisou o Nuno, que é da área de marketing. Lá dentro, confirmámos a lei do género: o {2} espetacular com vista para os telhados e as mesas tão juntas que se ouvia a conversa do vizinho melhor que a nossa.", es: "El restaurante del Chiado tenía una cola en la puerta y 4,8 estrellas en Google, y Marta desconfió enseguida de la mezcla. «Medio punto en la media vale miles de reservas al año», avisó Nuno, que es del área de marketing. Dentro, confirmamos la ley del género: la terraza espectacular con vistas a los tejados y las mesas tan juntas que se oía la conversación del vecino mejor que la nuestra." },
        { it: "O jantar dividiu a mesa. O espaço «é» mesmo bonito, concedia a Marta, mas o polvo «estava» apenas {3} — e a diferença entre o ser e o estar nunca foi tão gastronómica. O pão cobrado à {4}, sem aviso, descontou pontos a olhos vistos. No fim, o Nuno resumiu para o grupo: «por dezanove euros, é francamente acessível para a zona; para mim, continua {5} pelo que dá».", es: "La cena dividió a la mesa. El local «es» realmente bonito, concedía Marta, pero el pulpo «estaba» apenas correcto — y la diferencia entre el ser y el estar nunca fue tan gastronómica. El pan cobrado aparte, sin aviso, restó puntos a ojos vistas. Al final, Nuno resumió para el grupo: «por diecinueve euros, es francamente accesible para la zona; para mí, sigue caro por lo que da»." },
      ],
      gaps: [
        { options: ["média", "medida", "meta"], answer: 0, why: "«Meio ponto na» + «4,8 estrelas»: la puntuación global es la média." },
        { options: ["terraço", "túnel", "trem"], answer: 0, why: "«Com vista para os telhados»: la parte espectacular con vistas es la terraza." },
        { options: ["razoável", "raivoso", "radiante"], answer: 0, why: "El elogio tibio portugués para aquella vez: o polvo estava apenas razoável." },
        { options: ["parte", "porta", "palma"], answer: 0, why: "«O pão cobrado à, sem aviso»: se cobró aparte, à parte." },
        { options: ["caro", "cansado", "curioso"], answer: 0, why: "«Acessível para a zona; para mim, continua»: el contraste personal lo declara caro." },
      ],
    },
    {
      id: "cz-pt-b2-09-2", title: "Cinco estrelas ou uma?", titleEs: "¿Cinco estrellas o una?", minutes: 3,
      paragraphs: [
        { it: "O debate acendeu-se no café, já com as contas pagas. A Marta defendia as cinco estrelas: «o {1} foi atencioso do início ao fim, e isso conta pontos». O Nuno ia na outra direção: «cinco estrelas sem texto são logo olhadas com {2}; aquilo foi um três com explicação». Eu tentava a posição do árbitro: «então e as estrelas do terraço, contam?».", es: "El debate se encendió en el café, ya con las cuentas pagadas. Marta defendía las cinco estrellas: «el servicio fue atento de principio a fin, y eso suma puntos». Nuno iba en la otra dirección: «cinco estrellas sin texto se miran enseguida con desconfianza; aquello fue un tres con explicación». Yo intentaba la posición del árbitro: «¿entonces las estrellas de la terraza, cuentan?»." },
        { it: "A questão de fundo era séria: no turismo português, as {3} movem multidões, meio ponto vale milhares de reservas e os donos já empregam alguém só para responder a comentários. «A review útil junta adjetivo e prova: não diz “péssimo”, diz “esperámos quarenta minutos pela {4}”», insistia o Nuno. Acabámos por concordar num ponto: avaliar bem é um ato de {5} — pesa o pão cobrado e o sorriso da empregada na mesma balança.", es: "La cuestión de fondo era seria: en el turismo portugués, las reseñas mueven multitudes, medio punto vale miles de reservas y los dueños ya emplean a alguien solo para responder a comentarios. «La reseña útil une adjetivo y prueba: no dice “pésimo”, dice “esperamos cuarenta minutos por el entrante”», insistía Nuno. Acabamos coincidiendo en un punto: evaluar bien es un acto de justicia — pesa el pan cobrado y la sonrisa de la camarera en la misma balanza." },
      ],
      gaps: [
        { options: ["serviço", "sobremesa", "silêncio"], answer: 0, why: "«Foi atencioso do início ao fim»: lo que suma puntos es el servicio." },
        { options: ["desconfiança", "descrição", "desatenção"], answer: 0, why: "«Cinco estrelas sem texto» se miran con recelo: desconfiança." },
        { options: ["reviews", "revistas", "revoltas"], answer: 0, why: "«Movem multidões» y «respondem a comentários»: las reseñas, as reviews." },
        { options: ["entrada", "escada", "escola"], answer: 0, why: "«Esperámos quarenta minutos pela»: el primer plato que se hace esperar es el entrante." },
        { options: ["justiça", "gentileza", "jornalista"], answer: 0, why: "«Pesa o pão e o sorriso na mesma balança»: evaluar con equilibrio es un acto de justicia." },
      ],
    },
    {
      id: "cz-pt-b2-09-3", title: "A crítica escrita", titleEs: "La reseña escrita", minutes: 2,
      paragraphs: [
        { it: "Chegada a casa, abri o portátil e encarei a página em branco da primeira {1} a sério da minha vida. As regras que o Nuno me tinha ensinado eram simples: um ponto forte com {2}, o «mas» no lugar certo e nenhuma frase que eu não assinasse. O veredicto já estava decidido: três estrelas, com explicação.", es: "Llegada a casa, abrí el portátil y me enfrenté a la página en blanco de la primera reseña en serio de mi vida. Las reglas que Nuno me había enseñado eran simples: un punto fuerte concreto, el «pero» en el lugar correcto y ninguna frase que no firmara. El veredicto ya estaba decidido: tres estrellas, con explicación." },
        { it: "Escrevi primeiro o ponto forte — o terraço sobre o Chiado ao pôr do sol —, depois o «mas» e a conta do pão. A conclusão saiu quase sozinha: «se não se importar de esperar, vá pelo terraço ao fim da tarde; vá pela {3}, não pela comida». Antes de publicar, relí duas vezes à procura de adjetivos sem {4}: encontrei um, apaguei, e a crítica ficou com exatamente noventa palavras — curta como toda a {5} útil deve ser.", es: "Escribí primero el punto fuerte — la terraza sobre el Chiado al atardecer —, después el «pero» y la cuenta del pan. La conclusión salió casi sola: «si no le importa esperar, vaya por la terraza al final de la tarde; vaya por la vista, no por la comida». Antes de publicar, releí dos veces en busca de adjetivos sin prueba: encontré uno, lo borré, y la reseña quedó con exactamente noventa palabras — corta como toda reseña útil debe ser." },
      ],
      gaps: [
        { options: ["crítica", "crise", "carta"], answer: 0, why: "«Três estrelas» y «antes de publicar»: lo que se escribe tras una cena es la reseña, a crítica." },
        { options: ["concreto", "construído", "concertado"], answer: 0, why: "El punto fuerte de una reseña útil va acompañado de detalle: concreto." },
        { options: ["vista", "vinha", "vela"], answer: 0, why: "«Vá pelo terraço; não pela comida»: lo que recomienda la terraza es la vista." },
        { options: ["prova", "pressa", "pauta"], answer: 0, why: "«Adjetivos sem»: la regla era unir cada adjetivo a su prueba." },
        { options: ["review", "revolução", "reza"], answer: 0, why: "«Curta como toda a útil deve ser»: la reseña en las plataformas es a review." },
      ],
    },
  ],

  "pt-cu-b2-10": [
    {
      id: "cz-pt-b2-10-1", title: "Um cimbalino na baixa", titleEs: "Un cimbalino en la baixa", minutes: 3,
      paragraphs: [
        { it: "O café da baixa do Porto tinha mesas de mármore e uma parede de espelhos onde a cidade se reveria entre chávenas. O Zé e a Teresa falavam a toda a velocidade e, a cada três frases, aparecia uma expressão que nenhum manual ensina: «mão na roda», «esticar o pé», «bué de fixe». Pedi um {1} e preparei-me para a lição mais útil do mestrado.", es: "El café de la baixa de Oporto tenía mesas de mármol y una pared de espejos donde la ciudad se revería entre tazas. Zé y Teresa hablaban a toda velocidad y, cada tres frases, aparecía una expresión que ningún manual enseña: «mão na roda», «esticar o pé», «bué de fixe». Pedí un cimbalino y me preparé para la lección más útil del máster." },
        { it: "«O vosso tradutor é mão na {2}», disse a Teresa, «sem isso, estávamos perdidos». O Zé acrescentou, com ar filosófico: «ontem estiquei o {3} às dez, porque o corpo pediu cama». A Teresa corrigiu-me a pronúncia do «cimbalino» com paciência de professora. Quando a conversa aqueceu, chegou o meu momento: arrisquei duas expressões seguidas e a mesa aplaudiu — perguntar se soara natural foi, segundo o Zé, «a jogada mais {4} do dia». Saí de lá com duas expressões novas e a certeza de que o Porto se aprende à mesa, com o {5} ainda quente na mão.", es: "«Vuestro traductor es mão na roda», dijo Teresa, «sin eso, estábamos perdidos». Zé añadió, con aire filosófico: «ayer me fui a dormir a las diez, porque el cuerpo pidió cama». Teresa me corrigió la pronunciación de «cimbalino» con paciencia de profesora. Cuando la conversación se calentó, llegó mi momento: arriesgué dos expresiones seguidas y la mesa aplaudió — preguntar si habían sonado naturales fue, según Zé, «la jugada más esperta del día». Salí de allí con dos expresiones nuevas y la certeza de que Oporto se aprende en la mesa, con el café todavía caliente en la mano." },
      ],
      gaps: [
        { options: ["cimbalino", "sumol", "salgado"], answer: 0, why: "En un café de la baixa do Porto, el espresso se pide como cimbalino." },
        { options: ["roda", "ronda", "régua"], answer: 0, why: "«O vosso tradutor é mão na»: la expresión fijada es mão na roda." },
        { options: ["pé", "mão", "braço"], answer: 0, why: "«Porque o corpo pediu cama»: la expresión para ir a dormir es esticar o pé." },
        { options: ["esperta", "estúpida", "estranha"], answer: 0, why: "«A mesa aplaudiu»: preguntar con elegancia fue la jugada más lista, esperta." },
        { options: ["café", "comboio", "caderno"], answer: 0, why: "El Porto se aprende a la mesa con la bebida del local en la mano: o café." },
      ],
    },
    {
      id: "cz-pt-b2-10-2", title: "O que é isso de «mão na roda»?", titleEs: "¿Qué es eso de «mão na roda»?", minutes: 3,
      paragraphs: [
        { it: "A expressão nasceu da técnica: quando uma roda de carroça atolava, qualquer ajuda era literalmente uma mão na roda. Hoje serve para tudo o que {1} o trabalho alheio: o tradutor nas aulas, o atalho que corta dez minutos, o colega que avisa do prazo. É mão na roda — diz-se de tudo o que ajuda, com uma imagem concreta por trás.", es: "La expresión nació de la técnica: cuando una rueda de carreta se atascaba, cualquier ayuda era literalmente una mano en la rueda. Hoy sirve para todo lo que facilita el trabajo ajeno: el traductor en las clases, el atajo que corta diez minutos, el colega que avisa del plazo. Es mão na roda — se dice de todo lo que ayuda, con una imagen concreta detrás." },
        { it: "A lição da Teresa continuou com a etiqueta das perguntas: «o que é isso de “esticar o pé”?» funciona sempre; «isso diz-se assim?» ganha {2}; «não conhecia essa!» abre explicações inteiras. Perguntar com humor faz parte do jogo — ninguém se {3} por uma dúvida bem-humorada. O perigo é o contrário: usar o calão no sítio errado, com o professor ou com a senhora da {4}, delata mais do que o sotaque. A regra prática resume-se numa linha: com desconhecidos, registo {5}; entre amigos, a porta abre-se.", es: "La lección de Teresa continuó con la etiqueta de las preguntas: «¿qué es eso de “esticar o pé”?» funciona siempre; «¿eso se dice así?» gana sonrisas; «¡no conocía esa!» abre explicaciones enteras. Preguntar con humor forma parte del juego — nadie se molesta por una duda bien humorada. El peligro es el contrario: usar la jerga en el sitio equivocado, con el profesor o con la señora de la pastelería, delata más que el acento. La regla práctica se resume en una línea: con desconocidos, registro neutro; entre amigos, la puerta se abre." },
      ],
      gaps: [
        { options: ["facilita", "fatiga", "fecha"], answer: 0, why: "«Diz-se de tudo o que ajuda»: el traductor, el atajo y el aviso facilitan el trabajo." },
        { options: ["sorrisos", "suspiros", "sermões"], answer: 0, why: "«Perguntar com humor faz parte do jogo»: la pregunta elegante gana sonrisas." },
        { options: ["zanga", "zomba", "zumba"], answer: 0, why: "«Ninguém se» + «por uma dúvida bem-humorada»: nadie se molesta, ninguém se zanga." },
        { options: ["pastelaria", "professora", "política"], answer: 0, why: "«Com o professor ou com a senhora da»: el contexto de bolleria señala la pastelaria." },
        { options: ["neutro", "noturno", "nutritivo"], answer: 0, why: "«Com desconhecidos»: la regla manda registro neutro." },
      ],
    },
    {
      id: "cz-pt-b2-10-3", title: "O registo certo", titleEs: "El registro correcto", minutes: 2,
      paragraphs: [
        { it: "A regra do registo aprende-se melhor por contraste. Ao professor, no email de sexta: «estive doente e deitei-me cedo» — registo {1}. No grupo dos colegas, no mesmo dia: «o corpo pediu cama e estiquei o pé às nove» — calão entre {2}. As duas frases dizem o mesmo; o que muda é a sala, a idade dos interlocutores e a {3} que já se tem com eles.", es: "La regla del registro se aprende mejor por contraste. Al profesor, en el correo del viernes: «estuve enfermo y me acosté temprano» — registro formal. En el grupo de los colegas, el mismo día: «el cuerpo pidió cama y me fui a dormir a las nueve» — jerga entre amigos. Las dos frases dicen lo mismo; lo que cambia es la sala, la edad de los interlocutores y la confianza que ya se tiene con ellos." },
        { it: "A Teresa tem um teste infalível em três perguntas: com quem falo, onde estamos e o que quero conseguir. Se uma das respostas for «desconhecido», «trabalho» ou «pedido formal», o calão fica fora. O Zé acrescenta a quarta pergunta, muito à sua maneira: «soa a nativo ou soa a turista a ler um dicionário de gíria?». A frase fez-nos rir, mas o aviso é sério: expressões {4} delatam mais que qualquer sotaque. No dia seguinte, na pastelaria da esquina, testei a teoria com um «muito obrigado, está tudo {5}» — e a senhora respondeu com um sorriso de aprovação.", es: "Teresa tiene un test infalible en tres preguntas: con quién hablo, dónde estamos y qué quiero conseguir. Si una de las respuestas es «desconocido», «trabajo» o «petición formal», la jerga queda fuera. Zé añade la cuarta pregunta, muy a su manera: «¿suena a nativo o suena a turista leyendo un diccionario de jerga?». La frase nos hizo reír, pero el aviso es serio: expresiones forzadas delatan más que cualquier acento. Al día siguiente, en la pastelería de la esquina, probé la teoría con un «muchas gracias, está todo bien» — y la señora respondió con una sonrisa de aprobación." },
      ],
      gaps: [
        { options: ["formal", "frio", "faminto"], answer: 0, why: "El email al profesor con «deitei-me cedo» usa el registro formal." },
        { options: ["amigos", "estranhos", "advogados"], answer: 0, why: "«O corpo pediu cama» en el grupo de colegas: jerga entre amigos." },
        { options: ["confiança", "consciência", "conformidade"], answer: 0, why: "Lo que cambia entre registro formal y calão es la relación: la confianza." },
        { options: ["forçadas", "fumadas", "fraseadas"], answer: 0, why: "«Soa a turista a ler um dicionário de gíria»: el aviso es contra expresiones forzadas." },
        { options: ["bem", "bom", "cedo"], answer: 0, why: "«Muito obrigado, está tudo»: la cortesía neutra cierra con está tudo bem." },
      ],
    },
  ],

  "pt-cu-b2-11": [
    {
      id: "cz-pt-b2-11-1", title: "A sessão da câmara", titleEs: "La sesión del ayuntamiento", minutes: 3,
      paragraphs: [
        { it: "A sala municipal de Évora enchia devagar para a audiência pública sobre o projeto de {1} solares junto à muralha. Do lado de cá, agricultores do montado; do lado de lá, técnicos de fato com maquetas debaixo do braço. O presidente da câmara abriu a sessão com a fórmula de sempre: «tem a palavra quem a pedir, dois minutos, e tudo fica registado em {2}».", es: "La sala municipal de Évora se llenaba despacio para la audiencia pública sobre el proyecto de paneles solares junto a la muralla. De este lado, agricultores de la dehesa; del otro, técnicos de traje con maquetas debajo del brazo. El presidente del ayuntamiento abrió la sesión con la fórmula de siempre: «tiene la palabra quien la pida, dos minutos, y todo queda registrado en acta»." },
        { it: "Falaram todos: a engenheira que garantiu que os corredores de passagem serão estudados pela equipa técnica; o pastor que lembrou que as veredas antigas são o {3} dos rebanhos; a vizinha que pediu sombra para o gado. Quando chegou a minha vez, o coração disparou — dois minutos é pouco para uma vida de terra — mas a frase ensaiada saiu inteira: «devido à cerca prevista, as {4} ficariam cortadas; como consequência, a pastorícia tradicional desapareceria em poucos anos». O presidente anotou e disse apenas: «fica {5} em ata».", es: "Hablaron todos: la ingeniera que garantizó que los corredores de paso serán estudiados por el equipo técnico; el pastor que recordó que las veredas antiguas son el camino de los rebaños; la vecina que pidió sombra para el ganado. Cuando llegó mi turno, el corazón se disparó — dos minutos son pocos para una vida de tierra — pero la frase ensayada salió entera: «debido a la valla prevista, las veredas quedarían cortadas; como consecuencia, la ganadería tradicional desaparecería en pocos años». El presidente anotó y dijo solo: «queda registrado en acta»." },
      ],
      gaps: [
        { options: ["painéis", "poemas", "pórticos"], answer: 0, why: "El proyecto junto a la muralla con técnicos y maquetas es de paneles solares." },
        { options: ["ata", "arte", "ataúde"], answer: 0, why: "«Tudo fica registado em»: el documento de una sesión pública es el acta." },
        { options: ["caminho", "condimento", "combustível"], answer: 0, why: "«As veredas antigas são o» + «dos rebanhos»: las veredas son el camino de los rebaños." },
        { options: ["veredas", "vinhas", "varandas"], answer: 0, why: "«Devido à cerca, as» + «ficariam cortadas»: lo que corta la valla son las veredas." },
        { options: ["registado", "repartido", "recusado"], answer: 0, why: "«Fica» + «em ata»: la fórmula institucional es fica registado em ata." },
      ],
    },
    {
      id: "cz-pt-b2-11-2", title: "O montado e os painéis", titleEs: "La dehesa y los paneles", minutes: 3,
      paragraphs: [
        { it: "O montado alentejano é uma invenção de paciência: azinheiras espaçadas, pasto à sombra, cereal ao fundo. Devido à {1} dos últimos anos, os pastos desapareceram mais cedo e os rebanhos descem cada vez mais à planície. Com os painéis solares, dizem os técnicos, a terra arrendada por proprietários privados renderia mais do que a {2} alguma vez rendeu.", es: "La dehesa alentejana es una invención de paciencia: encinas espaciadas, pasto a la sombra, cereal al fondo. Debido a la sequía de los últimos años, los pastos desaparecieron más pronto y los rebaños bajan cada vez más a la llanura. Con los paneles solares, dicen los técnicos, la tierra arrendada por propietarios privados rendiría más de lo que la ganadería rindió jamás." },
        { it: "A conta não fecha para todos. Como {3}, os rebanhos perderiam as veredas; a cerca levaria ao fim da transumância local e, com ela, um saber de séculos. A favor pesam os {4} da câmara e a renda fixa prometida às freguesias. No fim da sessão, o argumento que fechou a tarde não foi técnico nem financeiro: «a paisagem também é um {5} de todos», disse uma voz do fundo da sala, e ninguém respondeu.", es: "La cuenta no cuadra para todos. Como consecuencia, los rebaños perderían las veredas; la valla llevaría al fin de la trashumancia local y, con ella, un saber de siglos. A favor pesan los cofres del ayuntamiento y la renta fija prometida a las parroquias. Al final de la sesión, el argumento que cerró la tarde no fue técnico ni financiero: «el paisaje también es un bien de todos», dijo una voz del fondo de la sala, y nadie respondió." },
      ],
      gaps: [
        { options: ["seca", "serra", "sessão"], answer: 0, why: "«Os pastos desapareceram mais cedo»: la causa de los últimos años es la sequía." },
        { options: ["pastorícia", "pastelaria", "pescaria"], answer: 0, why: "«Os rebanhos» + lo que rendía la tierra antes: la ganadería, a pastorícia." },
        { options: ["consequência", "consciência", "curiosidade"], answer: 0, why: "«Os rebanhos perderiam as veredas» es el efecto: como consequência." },
        { options: ["cofres", "cadernos", "campos"], answer: 0, why: "«A renda fixa prometida»: lo que pesa a favor del proyecto es el dinero, los cofres." },
        { options: ["bem", "dote", "despesa"], answer: 0, why: "«A paisagem também é um» + «de todos»: el paisaje es un bien común." },
      ],
    },
    {
      id: "cz-pt-b2-11-3", title: "O pedido em ata", titleEs: "La petición en acta", minutes: 3,
      paragraphs: [
        { it: "«Subscrevo o projeto com uma {1}»: a frase do vizinho de Valverde ficou na ata e virou manchete regional na semana seguinte. O pedido era preciso: que os corredores de passagem fossem garantidos por {2} na assinatura do contrato, não em conversas de corredor. «A água e os caminhos são de todos», rematou, «o terreno foi {3} por privados, mas a paisagem não se arrenda».", es: "«Suscribo el proyecto con una condición»: la frase del vecino de Valverde quedó en acta y se convirtió en titular regional la semana siguiente. La petición era precisa: que los corredores de paso fueran garantizados por escrito en la firma del contrato, no en conversaciones de pasillo. «El agua y los caminos son de todos», remató, «el terreno fue arrendado por privados, pero el paisaje no se arrenda»." },
        { it: "A câmara respondeu como as câmaras respondem: um relatório será enviado à assembleia em sessão futura, e os corredores serão estudados pela equipa técnica. Para o vizinho, meia {4}; para os técnicos, meio compromisso. No dia seguinte, o café do vale discutia a frase do «filho da terra» com orgulho novo. A decisão foi {5} pela câmara em julho, e o projeto avançou — com corredores escritos, sombra para o gado e uma lição: pedir sem propor é só queixar-se.", es: "El ayuntamiento respondió como responden los ayuntamientos: un informe será enviado a la asamblea en sesión futura, y los corredores serán estudiados por el equipo técnico. Para el vecino, media victoria; para los técnicos, medio compromiso. Al día siguiente, el café del valle discutía la frase del «hijo de la tierra» con orgullo nuevo. La decisión fue tomada por el ayuntamiento en julio, y el proyecto avanzó — con corredores por escrito, sombra para el ganado y una lección: pedir sin proponer es solo quejarse." },
      ],
      gaps: [
        { options: ["condição", "conversa", "cobrança"], answer: 0, why: "«Subscrevo o projeto com uma»: la fórmula del acuerdo con reserva es con una condición." },
        { options: ["escrito", "empréstimo", "emocionado"], answer: 0, why: "«Na assinatura do contrato, não em conversas de corredor»: lo pedido es por escrito." },
        { options: ["arrendado", "adquirido", "avaliado"], answer: 0, why: "«O terreno foi» + «a paisagem não se arrenda»: la pista es el propio verbo arrendar." },
        { options: ["vitória", "verdade", "verba"], answer: 0, why: "«Para os técnicos, meio compromisso»: el paralelo es meia vitória." },
        { options: ["tomada", "tentada", "tapada"], answer: 0, why: "«A decisão foi» + «pela câmara»: la pasiva de decidir es foi tomada." },
      ],
    },
  ],

  "pt-cu-b2-12": [
    {
      id: "cz-pt-b2-12-1", title: "Três minutos no palco", titleEs: "Tres minutos en el escenario", minutes: 3,
      paragraphs: [
        { it: "A sala da aceleradora, junto ao Parque das Nações, estava cheia; o {1} de três minutos marcava o ritmo e a mesa de investidores tinha cara de ter visto duzentos pitches nesse dia. O meu abriu com gente, não com diapositivas: «A minha {2} Amélia cozinhava para dez pessoas num fogão de lenha; hoje mora sozinha num segundo andar sem elevador, em Viseu».", es: "La sala del acelerador, junto al Parque das Nações, estaba llena; el cronómetro de tres minutos marcaba el ritmo y la mesa de inversores tenía cara de haber visto doscientos pitches ese día. El mío abrió con gente, no con diapositivas: «Mi abuela Amélia cocinaba para diez personas en un fogón de leña; hoy vive sola en un segundo piso sin ascensor, en Viseu»." },
        { it: "Meio milhão de {3} portugueses mora sozinho, e a família só percebe quando a rotina muda: a luz que não se acende, o fogão que não se liga. A nossa app segue a rotina da casa, com acordo do idoso, e avisa a família quando algo foge ao {4} — sem câmaras, sem microfones. É a Amélia a mandar um sinal sem saber que manda. A sala silenciou meio segundo; o cronómetro não esperou, e eu {5}.", es: "Medio millón de mayores portugueses vive solo, y la familia solo se entera cuando la rutina cambia: la luz que no se enciende, el fogón que no se enciende. Nuestra app sigue la rutina de la casa, con el acuerdo del mayor, y avisa a la familia cuando algo se sale de lo normal — sin cámaras, sin micrófonos. Es Amélia mandando una señal sin saber que la manda. La sala enmudeció medio segundo; el cronómetro no esperó, y yo seguí." },
      ],
      gaps: [
        { options: ["cronómetro", "cartório", "cartaz"], answer: 0, why: "«De três minutos marcava o ritmo»: el instrumento del demo day es el cronómetro." },
        { options: ["avó", "avô", "afilhada"], answer: 0, why: "«A minha» + nombre femenino Amélia: la abuela es a avó (avô sería el abuelo, masculino)." },
        { options: ["idosos", "indícios", "idiomas"], answer: 0, why: "«Mora sozinho» + «com acordo do idoso»: la app trata de personas mayores, idosos." },
        { options: ["normal", "norte", "nível"], answer: 0, why: "«Quando algo foge ao»: la rutina avisa cuando algo se desvía de lo normal." },
        { options: ["continuei", "congelei", "desisti"], answer: 0, why: "«O cronómetro não esperou, e eu»: ante el silencio de la sala, el pitch bueno sigue." },
      ],
    },
    {
      id: "cz-pt-b2-12-2", title: "As perguntas dos investidores", titleEs: "Las preguntas de los inversores", minutes: 3,
      paragraphs: [
        { it: "Acabado o pitch, veio o fogo: «Vamos aos números. {1}: quantas famílias, que retenção, a que preço?». Mil e duzentas famílias pagantes em oito meses; noventa e dois por cento {2} aos seis; nove euros por mês por família. A Ana Rita anotou sem comentar — sinal bom, segundo os livros: quando a inversora quer {3}, é porque a história chegou.", es: "Terminado el pitch, llegó el fuego: «Vamos a los números. Tracción: ¿cuántas familias, qué retención, a qué precio?». Mil doscientas familias pagantes en ocho meses; el noventa y dos por ciento renueva a los seis; nueve euros al mes por familia. Ana Rita anotó sin comentar — señal buena, según los libros: cuando la inversora quiere detalle, es porque la historia llegó." },
        { it: "O Tomás foi à concorrência: «as operadoras já vendem teleassistência; porque é que a vossa ganha?». A resposta tinha sido ensaiada ao espelho: «as operadoras vendem botões de pânico; nós vendemos {4}. O botão tem de ser carregado no momento do pânico — a rotina não precisa de ser carregada». A última pergunta foi direta ao pedido: «quanto levantam e para chegar a quê?». Duzentos mil euros, dezoito meses, dez mil famílias: metade em engenharia, um terço em {5}, o resto em certificação clínica.", es: "Tomás fue a la competencia: «las operadoras ya venden teleasistencia; ¿por qué gana la vuestra?». La respuesta había sido ensayada frente al espejo: «las operadoras venden botones de pánico; nosotros vendemos tranquilidad. El botón tiene que ser pulsado en el momento del pánico — la rutina no necesita ser pulsada». La última pregunta fue directa a la petición: «¿cuánto levantáis y para llegar a qué?». Doscientos mil euros, dieciocho meses, diez mil familias: la mitad en ingeniería, un tercio en captación, el resto en certificación clínica." },
      ],
      gaps: [
        { options: ["Tração", "Tradução", "Tensão"], answer: 0, why: "«Quantas famílias, que retenção, a que preço»: los números de mercado del pitch son la tracción." },
        { options: ["renovam", "recusam", "reclamam"], answer: 0, why: "«Noventa e dois por cento» + «aos seis meses»: el indicador de fidelidad es que renuevan." },
        { options: ["detalhe", "desculpas", "demissão"], answer: 0, why: "«Anotou sem comentar — sinal bom»: cuando a la inversora le interesa la historia, pide detalle." },
        { options: ["sossego", "sucesso", "salto"], answer: 0, why: "«As operadoras vendem botões de pânico; nós vendemos»: el contraste del pitch es sossego." },
        { options: ["aquisição", "aventura", "arquitetura"], answer: 0, why: "«Metade em engenharia, um terço em»: el destino clásico del dinero es la captación de clientes." },
      ],
    },
    {
      id: "cz-pt-b2-12-3", title: "A avó que fez o pitch", titleEs: "La abuela que hizo el pitch", minutes: 2,
      paragraphs: [
        { it: "A história da Amélia não nasceu no escritório: nasceu numa chamada de vídeo de domingo. «Cozinhava para dez pessoas num {1} de lenha», contava ela, «agora faço o jantar para um». A família ligava todos os dias à mesma hora só para saber se estava tudo {2} — até que um dia a luz não se acendeu à hora habitual e ninguém soube durante horas.", es: "La historia de Amélia no nació en la oficina: nació en una videollamada de domingo. «Cocinaba para diez personas en un fogón de leña», contaba ella, «ahora hago la cena para uno». La familia llamaba todos los días a la misma hora solo para saber si todo estaba bien — hasta que un día la luz no se encendió a la hora habitual y nadie lo supo durante horas." },
        { it: "Dessa angústia nasceu a app: seguir a rotina da casa, com acordo do idoso, e avisar quando algo se desvia do {3}. Sem câmaras, sem microfones — a privacidade também é uma forma de {4}. A Amélia nunca soube que a sua história abriu o pitch da demo day, mas adivinharia a moral: é a avó a mandar um sinal sem saber que manda. No fim, o Tomás despediu-se com uma frase que a equipa imprimiu e colou na parede: «diga à Amélia que ela acabou de fazer o melhor {5} do dia».", es: "De esa angustia nació la app: seguir la rutina de la casa, con el acuerdo del mayor, y avisar cuando algo se desvía de lo habitual. Sin cámaras, sin micrófonos — la privacidad también es una forma de respeto. Amélia nunca supo que su historia abrió el pitch de la demo day, pero adivinaría la moraleja: es la abuela mandando una señal sin saber que la manda. Al final, Tomás se despidió con una frase que el equipo imprimió y pegó en la pared: «dígale a Amélia que acaba de hacer el mejor pitch del día»." },
      ],
      gaps: [
        { options: ["fogão", "farol", "formão"], answer: 0, why: "«De lenha» donde se cocinaba para diez: el fogón, fogão." },
        { options: ["bem", "mal", "cedo"], answer: 0, why: "La familia llamaba para saber si todo estaba bien." },
        { options: ["habitual", "horizontal", "hostil"], answer: 0, why: "«A rotina» + «algo se desvia do»: lo que se desvía es de lo habitual." },
        { options: ["respeito", "receio", "regresso"], answer: 0, why: "«Sem câmaras, sem microfones»: no grabar al mayor es una forma de respeto." },
        { options: ["pitch", "prato", "plano"], answer: 0, why: "«O melhor do dia» en una demo day: la palabra del cierre es pitch." },
      ],
    },
  ],
};
