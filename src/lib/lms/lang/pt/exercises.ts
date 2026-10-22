import type { Exercise } from "../../types";

/* ═══ PT · Banco de ejercicios de comprensión (v9.39 · ex-pt) ═══════
   Português EUROPEO de Portugal. 42 preguntas de comprensión atadas al
   contenido real de lang/pt: 3 por tarea de PT_LISTENING, 2 por texto
   de PT_READINGS y 2 por situación de PT_SITUATIONS. Convención de ids
   (espejo del espacio EN): pt-ex-ls-<nº>-<n> para escucha, pt-ex-rd-<nº>-<n>
   para lectura y pt-ex-sit-<slug>-<n> para situaciones. prompt/explain
   en español con tuteo; options en portugués de Portugal; answer 0-3
   con la solución citada del propio texto. getExercises (banco IT) aún
   no conoce estos ids: el registro de PT_EXERCISES en el resolvedor
   global lo cablea el orquestador.                                   */

export const PT_EXERCISES: Exercise[] = [
  /* ═══ Escucha · pt-ls-1 · Na pastelaria (A1) ═══ */
  { id: "pt-ex-ls-1-1", type: "mc", level: "A1", topic: "ascolto", prompt: "En el diálogo de la pastelería: ¿qué pide el cliente?",
    options: ["Um chá e uma tosta mista", "Um sumo de laranja e um croissant", "Um café e um pastel de nata", "Dois cafés e um croissant"], answer: 2,
    explain: "Dice: «Um café e um pastel de nata, se faz favor». Se faz favor es el «por favor» suave y cotidiano de Portugal." },
  { id: "pt-ex-ls-1-2", type: "mc", level: "A1", topic: "ascolto", prompt: "¿Cuánto cuesta el pedido del cliente?",
    options: ["Dois euros e dezoito cêntimos", "Dois euros e oitenta cêntimos", "Quatro euros e vinte cêntimos", "Três euros e oitenta cêntimos"], answer: 1,
    explain: "«São dois euros e oitenta cêntimos». Ojo: 4,20 € es lo que cuesta el café con tosta mista de la situación de la pastelería." },
  { id: "pt-ex-ls-1-3", type: "mc", level: "A1", topic: "ascolto", prompt: "Con «Posso pagar com multibanco?», el cliente pregunta si…",
    options: ["O café é grande ou pequeno", "Pode sentar-se ao balcão", "O pastel está quente", "Pode pagar com cartão"], answer: 3,
    explain: "Multibanco es la red de tarjetas portuguesa: pregunta si puede pagar con tarjeta. La funcionaria responde «Pode, sim» y le da el talão (el recibo)." },

  /* ═══ Escucha · pt-ls-2 · No comboio do Porto para Lisboa (A2) ═══ */
  { id: "pt-ex-ls-2-1", type: "mc", level: "A2", topic: "ascolto", prompt: "En el comboio Porto–Lisboa: ¿a qué hora llega el tren a Lisboa?",
    options: ["Às vinte e trinta", "Às sete em ponto", "Às cinco e meia", "Às dezanove horas"], answer: 0,
    explain: "«Chega ao Santa Apolónia às vinte e trinta, se não houver atrasos na linha»: a las 20:30, si no hay retrasos." },
  { id: "pt-ex-ls-2-2", type: "mc", level: "A2", topic: "ascolto", prompt: "El revisor aconseja ir ya al coche-restaurante porque…",
    options: ["Está cheio de passageiros", "Só serve bebidas", "Encerra às sete", "Fica noutro comboio"], answer: 2,
    explain: "«Está, mas encerra às sete. Se quiser jantar, convém ir já»: cierra a las siete, así que conviene cenar pronto." },
  { id: "pt-ex-ls-2-3", type: "mc", level: "A2", topic: "ascolto", prompt: "Según el revisor, ¿qué tienen todos los asientos del Alfa Pendular?",
    options: ["Um carro-restaurante aberto toda a noite", "Tomadas junto aos lugares", "Lugares sempre à janela", "Um revisor em cada carro"], answer: 1,
    explain: "«Há tomadas em todos os lugares do Alfa Pendular»: hay enchufes junto a todos los asientos de ese tren." },

  /* ═══ Escucha · pt-ls-3 · Erasmus em Coimbra (B1) ═══ */
  { id: "pt-ex-ls-3-1", type: "mc", level: "B1", topic: "ascolto", prompt: "En la entrevista radiofónica: ¿cómo surgió la aventura de Inés en Coimbra?",
    options: ["Com uma bolsa da universidade", "Por convite de uma amiga portuguesa", "Através do programa Erasmus da faculdade", "Encontrou o programa na internet"], answer: 3,
    explain: "«Surgiu por acaso: encontrei o programa na internet, candidatei-me e, dois meses depois, estava instalada numa residência junto ao Mondego»." },
  { id: "pt-ex-ls-3-2", type: "mc", level: "B1", topic: "ascolto", prompt: "¿Qué le resultó difícil a Inés al principio?",
    options: ["Os professores falavam depressa e o sotaque do norte", "A residência ficava longe da universidade", "As aulas eram todas em inglês", "Os colegas nunca a corrigiam"], answer: 0,
    explain: "«Os professores falavam depressa e o sotaque do norte pareceu-me difícil». Con las correcciones de los colegas, en tres meses ya seguía las clases sin problemas." },
  { id: "pt-ex-ls-3-3", type: "mc", level: "B1", topic: "ascolto", prompt: "¿Qué aconseja Inés a quien quiera venir a estudiar?",
    options: ["Vir em setembro e participar na recepção aos caloiros", "Vir em janeiro, no início do semestre", "Ficar na residência até conhecer gente", "Falar só com espanhóis no primeiro mês"], answer: 0,
    explain: "«Aconselho que venham em setembro (…) e que participem na recepção aos caloiros»: es la forma más rápida de hacer amistades. Caloiros = novatos." },

  /* ═══ Escucha · pt-ls-4 · Fado em Alfama (B2) ═══ */
  { id: "pt-ex-ls-4-1", type: "mc", level: "B2", topic: "ascolto", prompt: "En la conversación sobre fado: ¿cómo se llama la guitarra de sonido tan brillante?",
    options: ["A viola", "A guitarra portuguesa", "A gaita de foles", "O bandolim"], answer: 1,
    explain: "«É a guitarra portuguesa, a de Lisboa; a de Coimbra é ligeiramente diferente»: la de Coimbra es ligeramente distinta." },
  { id: "pt-ex-ls-4-2", type: "mc", level: "B2", topic: "ascolto", prompt: "¿Qué instrumento acompaña a la guitarra y sostiene el ritmo?",
    options: ["O piano", "A guitarra de Coimbra", "O contrabaixo", "A viola"], answer: 3,
    explain: "«Acompanha-a a viola, que sustenta o ritmo». Trampa clásica del fado: la guitarra portuguesa lleva la melodía; a viola, el ritmo." },
  { id: "pt-ex-ls-4-3", type: "mc", level: "B2", topic: "ascolto", prompt: "Según la fadista, la saudade es…",
    options: ["A falta de alguém, de um tempo, de um destino que podia ter acontecido", "Uma festa popular do mês de junho", "Um instrumento de doze cordas", "A nostalgia dos descobrimentos"], answer: 0,
    explain: "«A saudade é o motor do fado: é a falta de alguém, de um tempo, de um destino que podia ter acontecido e não aconteceu». Por eso el fado «se canta para curar, não para chorar»." },

  /* ═══ Escucha · pt-ls-5 · Mesa-redonda: que turismo quer Lisboa? (C1) ═══ */
  { id: "pt-ex-ls-5-1", type: "mc", level: "C1", topic: "ascolto", prompt: "Según el urbanista, sin los visitantes…",
    options: ["Os museus fechariam ao público", "Boa parte do casario histórico se teria degradado", "Os hotéis do centro iriam à falência", "A cidade perderia os autocarros de turismo"], answer: 1,
    explain: "«Sem os visitantes, boa parte do casario histórico se teria degradado há décadas». Fíjate en la mesóclise culta «se teria degradado»." },
  { id: "pt-ex-ls-5-2", type: "mc", level: "C1", topic: "ascolto", prompt: "¿Qué dicen los estudios recientes sobre el centro de Lisboa?",
    options: ["O centro perdeu milhares de moradores entre 2011 e 2021", "O centro ganhou milhares de moradores", "As rendas desceram no centro histórico", "Os turistas passaram a morar no centro"], answer: 0,
    explain: "«Entre 2011 e 2021, o centro perdeu milhares de moradores». Si las rentas siguen subiendo, a los barrios solo les quedará «uma beleza de fachada»." },
  { id: "pt-ex-ls-5-3", type: "mc", level: "C1", topic: "ascolto", prompt: "¿Cómo concluye la historiadora el debate?",
    options: ["Lisboa deve fechar-se aos visitantes", "Lisboa é um cenário para fotografar", "Lisboa não é um cenário, é uma casa", "Lisboa vive apenas do turismo"], answer: 2,
    explain: "«Lisboa não é um cenário, é uma casa»: hay que saber equilibrar lo que la ciudad recibe con lo que preserva." },

  /* ═══ Escucha · pt-ls-6 · Ditado: a língua da saudade (C2) ═══ */
  { id: "pt-ex-ls-6-1", type: "mc", level: "C2", topic: "ascolto", prompt: "Según la primera frase del dictado, la saudade es…",
    options: ["Uma nostalgia doce acompanhada de desejo", "Uma tristeza profunda sem consolo", "Um sentimento de culpa", "Uma alegria repentina"], answer: 0,
    explain: "«A saudade é, segundo os dicionários, uma nostalgia doce acompanhada de desejo»." },
  { id: "pt-ex-ls-6-2", type: "mc", level: "C2", topic: "ascolto", prompt: "«Tivesse eu tempo…»: ¿qué haría el hablante?",
    options: ["Ficaria em Lisboa a ouvir fado", "Viajaria de comboio até ao Porto", "Escreveria um livro sobre a saudade", "Percorreria a Costa Vicentina a pé, de Sagres até Odeceixe"], answer: 3,
    explain: "«Tivesse eu tempo, percorreria a Costa Vicentina a pé»: hipótesis irreal con el conjuntivo-imperfeito antepuesto + condicional, sin la conjunción «se»." },
  { id: "pt-ex-ls-6-3", type: "mc", level: "C2", topic: "ascolto", prompt: "El proverbio del dictado «Quem não tem cão caça com gato» significa que…",
    options: ["Quem não tem sorte não deve insistir", "Quem não tem os meios ideais arranja-se com o que tem", "Quem não tem cão deve comprar um", "Quem caça sozinho apanha mais"], answer: 2,
    explain: "Si te faltan los medios ideales, te las arreglas con lo que tienes. El dictado lo remata: «e quem não tem mestre aprende sozinho»." },

  /* ═══ Lectura · pt-rd-1 · Um postal do Porto (A1) ═══ */
  { id: "pt-ex-rd-1-1", type: "mc", level: "A1", topic: "vocabolario", prompt: "En la postal de Susana: ¿con quién llegó a Oporto?",
    options: ["Com o irmão", "Com a Beatriz", "Sozinha", "Com um grupo de amigos"], answer: 0,
    explain: "«Cheguei ao Porto ontem com o meu irmão». Ojo: Beatriz es la destinataria de la postal, no su compañera de viaje." },
  { id: "pt-ex-rd-1-2", type: "mc", level: "A1", topic: "vocabolario", prompt: "¿Qué visitaron en Vila Nova de Gaia?",
    options: ["A Rua das Flores", "A ponte de D. Luís", "As caves do vinho do Porto", "A estação de São Bento"], answer: 2,
    explain: "«Atravessámos a ponte de D. Luís e visitámos as caves do vinho do Porto, em Vila Nova de Gaia». Al día siguiente cogen el comboio para Lisboa." },

  /* ═══ Lectura · pt-rd-2 · A feira de Barcelos (A2) ═══ */
  { id: "pt-ex-rd-2-1", type: "mc", level: "A2", topic: "vocabolario", prompt: "Según el texto, ¿cuándo hay mercado en Barcelos?",
    options: ["Todos os sábados", "Todas as quintas-feiras", "Uma vez por mês", "Só no verão"], answer: 1,
    explain: "«Todas as quintas-feiras, a cidade de Barcelos acorda mais cedo: é dia de feira», uno de los más antiguos de Portugal, con siete siglos de historia." },
  { id: "pt-ex-rd-2-2", type: "mc", level: "A2", topic: "vocabolario", prompt: "Según la leyenda, el gallo asado…",
    options: ["Guiou os peregrinos até ao Porto", "Foi o primeiro animal vendido na feira", "Deu sorte a um rei de Portugal", "Cantou para salvar um inocente"], answer: 3,
    explain: "«Conta a lenda que um galo assado cantou para salvar um inocente»: por eso o galo de Barcelos vigila en casi todas las bancas." },

  /* ═══ Lectura · pt-rd-3 · A Costa Vicentina (B1) ═══ */
  { id: "pt-ex-rd-3-1", type: "mc", level: "B1", topic: "vocabolario", prompt: "¿Cuántos kilómetros tiene la Rota Vicentina?",
    options: ["Mais de trezentos e quarenta quilómetros", "Cento e quarenta quilómetros", "Trinta e quatro quilómetros", "Setecentos quilómetros"], answer: 0,
    explain: "«A Rota Vicentina, com mais de trezentos e quarenta quilómetros, liga Santiago do Cacém a São Vicente» por aldeas de pescadores y casas encaladas." },
  { id: "pt-ex-rd-3-2", type: "mc", level: "B1", topic: "vocabolario", prompt: "Para quien recorre la costa despacio, el mayor lujo de la región es…",
    options: ["O silêncio", "As praias de areia dourada", "Os restaurantes de peixe", "Os hotéis de luxo"], answer: 0,
    explain: "«O maior luxo da região: o silêncio, cada vez mais raro, interrompido apenas pelo vento e pelas gaivotas»." },

  /* ═══ Lectura · pt-rd-4 · Os azulejos (B2) ═══ */
  { id: "pt-ex-rd-4-1", type: "mc", level: "B2", topic: "vocabolario", prompt: "La palabra «azulejo» viene del árabe al-zulaic y significa…",
    options: ["Pedra pintada", "Azul fixo", "Pedra polida", "Casa brilhante"], answer: 2,
    explain: "Viene del árabe «al-zulaic», «pedra polida». La técnica llegó con los mouros y los primeros ejemplares entraron en el siglo XV, venidos de Sevilha." },
  { id: "pt-ex-rd-4-2", type: "mc", level: "B2", topic: "vocabolario", prompt: "¿Qué papel inesperado tuvieron los azulejos tras el terremoto de 1755?",
    options: ["Passaram a ser importados de Sevilha", "Foram proibidos nas fachadas", "Desapareceram das estações", "Reconstruíram a cara de Lisboa, por serem um revestimento barato e resistente"], answer: 3,
    explain: "«Como revestimento barato e resistente, reconstruiu a cara de Lisboa». En São Bento, no Porto, veinte mil piezas de Jorge Colaço cuentan la historia del país." },

  /* ═══ Lectura · pt-rd-5 · Os heterónimos de Pessoa (C1) ═══ */
  { id: "pt-ex-rd-5-1", type: "mc", level: "C1", topic: "vocabolario", prompt: "¿Qué heterónimo grita en «Tabacaria» «Não sou nada. Nunca serei nada.»?",
    options: ["Ricardo Reis", "Alberto Caeiro", "O próprio Pessoa, o «ortónimo»", "Álvaro de Campos"], answer: 3,
    explain: "Álvaro de Campos, el ingeniero naval «poeta de máquina e tédio». Caeiro enseña a ver sin pensar; Reis escribe odas a la medida de Horácio." },
  { id: "pt-ex-rd-5-2", type: "mc", level: "C1", topic: "vocabolario", prompt: "En el texto, Ricardo Reis es…",
    options: ["Um engenheiro naval fascinado pela máquina", "Um médico monárquico que escreve odes à medida de Horácio", "Um mestre camponês que ensina a ver sem pensar", "Um crítico literário de Lisboa"], answer: 1,
    explain: "«Ricardo Reis, médico monárquico, escreve odes à medida de Horácio». Cada heterónimo encarna una filosofía: los críticos hablan de «dramas em gente»." },

  /* ═══ Lectura · pt-rd-6 · A sintaxe de Saramago (C2) ═══ */
  { id: "pt-ex-rd-6-1", type: "mc", level: "C2", topic: "vocabolario", prompt: "En la prosa de Saramago, las mayúsculas anuncian…",
    options: ["O início de uma citação", "Quem fala", "Uma pausa longa", "O fim do parágrafo"], answer: 1,
    explain: "Frases interminables puntuadas solo con comas: «as maiúsculas anunciam quem fala», porque los travessões de diálogo desaparecen." },
  { id: "pt-ex-rd-6-2", type: "mc", level: "C2", topic: "vocabolario", prompt: "«Se podes olhar, vê. Se podes ver, repara» es, según el ensayo…",
    options: ["Uma crítica aos maus leitores", "Uma regra de boa educação", "Um conselho médico", "Um programa de leitura do próprio estilo"], answer: 3,
    explain: "«É também um programa de leitura: o estilo de Saramago não se decora, contempla-se». Leerlo en voz alta obliga a respirar con el texto." },

  /* ═══ Situación · pt-sit-pastelaria · Na pastelaria (A1) ═══ */
  { id: "pt-ex-sit-pastelaria-1", type: "mc", level: "A1", topic: "situazioni", prompt: "En la situación de la pastelería: ¿qué quiere el cliente?",
    options: ["Um chá e um sumo de laranja", "Um café e um pastel de nata", "Um café e uma tosta mista", "Uma tosta mista e um sumo de laranja"], answer: 2,
    explain: "«Queria um café e uma tosta mista, se faz favor». Quería + infinitivo es la forma cortés de pedir: aquí, café + tosta mixta." },
  { id: "pt-ex-sit-pastelaria-2", type: "mc", level: "A1", topic: "situazioni", prompt: "El cliente quiere el pedido…",
    options: ["Para levar", "Para comer na pastelaria", "Para entregar em casa", "Para comer amanhã"], answer: 0,
    explain: "«Para levar, por favor». En la escucha A1 era «para aqui»: la pregunta del mostrador siempre es «para aqui ou para levar?»." },

  /* ═══ Situación · pt-sit-comboio · Na bilheteira do comboio (A2) ═══ */
  { id: "pt-ex-sit-comboio-1", type: "mc", level: "A2", topic: "situazioni", prompt: "¿De qué andén sale el próximo Alfa Pendular?",
    options: ["Da plataforma dois", "Da plataforma seis", "Da plataforma cinco", "Da plataforma dez"], answer: 1,
    explain: "«O próximo Alfa Pendular sai às cinco e meia, da plataforma seis»: a las 17:30 desde el andén seis." },
  { id: "pt-ex-sit-comboio-2", type: "mc", level: "A2", topic: "situazioni", prompt: "El billete de ida y vuelta cuesta…",
    options: ["Trinta e dois euros", "Vinte e seis euros", "Setenta e dois euros", "Sessenta e dois euros"], answer: 3,
    explain: "«São sessenta e dois euros, lugar junto à janela no carro seis», con regreso el domingo por la tarde y llegada a las 20:30." },

  /* ═══ Situación · pt-sit-feira · Na feira de Barcelos (A2) ═══ */
  { id: "pt-ex-sit-feira-1", type: "mc", level: "A2", topic: "situazioni", prompt: "En el puesto de loza: ¿cuánto cuesta el conjunto de dos platos grandes y el gallo?",
    options: ["Dez euros", "Quinze euros", "Vinte e dois euros", "Dezoito euros"], answer: 2,
    explain: "«Faço-lhe o conjunto — dois pratos e o galo — por vinte e dois»: dos platos (15 € con descuento) más el galo (10 €), todo por 22 €." },
  { id: "pt-ex-sit-feira-2", type: "mc", level: "A2", topic: "situazioni", prompt: "Al final, la clienta pide a la vendedora que…",
    options: ["Faça um desconto maior", "Pague com multibanco", "Embrulhe tudo para viagem", "Guarde o galo para a neta"], answer: 2,
    explain: "«Pode embrulhar para viagem, se faz favor?». El galo se lo lleva porque a su nieta le encanta la lenda." },

  /* ═══ Situación · pt-sit-farmacia · Na farmácia (A2) ═══ */
  { id: "pt-ex-sit-farmacia-1", type: "mc", level: "A2", topic: "situazioni", prompt: "Según la farmacéutica, ¿cómo debe tomar el jarabe el cliente?",
    options: ["Um comprimido de manhã em jejum", "Uma colher de sopa, três vezes ao dia, depois das refeições", "Duas colheres antes de dormir", "Meio copo ao almoço"], answer: 1,
    explain: "«Uma colher de sopa, três vezes ao dia, depois das refeições», junto con un analgésico. Colher de sopa = cuchara sopera." },
  { id: "pt-ex-sit-farmacia-2", type: "mc", level: "A2", topic: "situazioni", prompt: "Si no mejora en dos días, el cliente debe…",
    options: ["Voltar à farmácia no dia seguinte", "Tomar o dobro da dose", "Ligar para o médico de família", "Ir ao centro de saúde"], answer: 3,
    explain: "«Se não melhorar em dois dias, vá ao centro de saúde». Y recuerda la trampa del falso amigo: «constipação» en Portugal es el resfriado." },

  /* ═══ Situación · pt-sit-coimbra · Na Universidade de Coimbra (B1) ═══ */
  { id: "pt-ex-sit-coimbra-1", type: "mc", level: "B1", topic: "situazioni", prompt: "Después de la matrícula, ¿qué único trámite le falta al estudiante?",
    options: ["Pagar a propina do primeiro semestre", "Escolher as disciplinas no portal até sexta-feira", "Entregar a carta de aceitação", "Pedir uma bolsa Erasmus"], answer: 1,
    explain: "«Falta-lhe apenas escolher as disciplinas no portal até sexta-feira»: la propina la pagó la semana pasada y la carta ya está entregada." },
  { id: "pt-ex-sit-coimbra-2", type: "mc", level: "B1", topic: "situazioni", prompt: "Después de inscribir las asignaturas, el estudiante va a…",
    options: ["Visitar a Biblioteca Joanina", "Ir à praxe dos caloiros", "Tomar um café no bar da faculdade", "Conhecer o centro de Coimbra"], answer: 0,
    explain: "«Vou já inscrever as disciplinas e depois visitar a Biblioteca Joanina», la biblioteca barroca más famosa de la universidad." },

  /* ═══ Situación · pt-sit-aluguer · Arrendar um quarto em Lisboa (B1) ═══ */
  { id: "pt-ex-sit-aluguer-1", type: "mc", level: "B1", topic: "situazioni", prompt: "La renta de 500 euros incluye…",
    options: ["Todas as despesas, água e luz", "As despesas de água", "O internet e o gás", "Nenhuma despesa"], answer: 1,
    explain: "«Certo, com as despesas de água incluídas»: solo el agua. El cuarto está mobiliado y tiene vista para o rio." },
  { id: "pt-ex-sit-aluguer-2", type: "mc", level: "B1", topic: "situazioni", prompt: "El cuarto de baño de la habitación de Alfama es…",
    options: ["Privativo, só para o quarto", "Partilhado com a senhoria", "Inexistente no andar", "Partilhado com mais dois inquilinos"], answer: 3,
    explain: "«É partilhada com mais dois inquilinos». Además: caução de dos meses y contrato de un año renovable." },
];
