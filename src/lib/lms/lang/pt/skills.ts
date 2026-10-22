import type {
  ListeningTask, ReadingText, WritingPrompt, ConversationScenario,
} from "../../types";

/* ═══ PT · Destrezas: escucha, lectura, escritura y conversación ═════
   Português EUROPEO de Portugal (v9.39 · PARTE 3c). Convención de
   campos: `.it` = texto en portugués (lengua de estudio), `.es` =
   español. Escenarios portugueses: pastelaria do Chiado, comboio
   Porto-Lisboa, Universidade de Coimbra, fado em Alfama, Costa
   Vicentina, feira de Barcelos. `questions` enlaza cada tarea/texto con
   el banco de ejercicios PT (lang/pt/exercises.ts, ids pt-ex-*); su
   registro en el resolvedor global lo cablea el orquestador.          */

/* ── Escucha · tareas con TTS ─────────────────────────────────────── */

export const PT_LISTENING: ListeningTask[] = [
  {
    id: "pt-ls-1", level: "A1", title: "Na pastelaria", kind: "dialogo",
    dialogue: [
      { speaker: "Funcionária", it: "Bom dia! Diga, por favor.", es: "¡Buenos días! Diga, por favor." },
      { speaker: "Cliente", it: "Bom dia! Um café e um pastel de nata, se faz favor.", es: "¡Buenos días! Un café y un pastel de nata, por favor." },
      { speaker: "Funcionária", it: "Para aqui ou para levar?", es: "¿Para aquí o para llevar?" },
      { speaker: "Cliente", it: "Para aqui. Quanto é?", es: "Para aquí. ¿Cuánto es?" },
      { speaker: "Funcionária", it: "São dois euros e oitenta cêntimos.", es: "Son dos euros con ochenta céntimos." },
      { speaker: "Cliente", it: "Posso pagar com multibanco?", es: "¿Puedo pagar con tarjeta?" },
      { speaker: "Funcionária", it: "Pode, sim. Aqui tem o talão.", es: "Puede, sí. Aquí tiene el recibo." },
      { speaker: "Cliente", it: "Obrigado! Bom dia!", es: "¡Gracias! ¡Buenos días!" },
    ],
    questions: ["pt-ex-ls-1-1", "pt-ex-ls-1-2", "pt-ex-ls-1-3"],
  },
  {
    id: "pt-ls-2", level: "A2", title: "No comboio do Porto para Lisboa", kind: "dialogo",
    dialogue: [
      { speaker: "Revisor", it: "Os bilhetes, se faz favor.", es: "Los billetes, por favor." },
      { speaker: "Passageira", it: "Aqui está o meu. O comboio chega a que horas a Lisboa?", es: "Aquí está el mío. ¿A qué hora llega el tren a Lisboa?" },
      { speaker: "Revisor", it: "Chega ao Santa Apolónia às vinte e trinta, se não houver atrasos na linha.", es: "Llega a Santa Apolónia a las veinte treinta, si no hay retrasos en la línea." },
      { speaker: "Passageira", it: "E o carro-restaurante já está aberto?", es: "¿Y el coche-restaurante ya está abierto?" },
      { speaker: "Revisor", it: "Está, mas encerra às sete. Se quiser jantar, convém ir já.", es: "Está, pero cierra a las siete. Si quiere cenar, conviene ir ya." },
      { speaker: "Passageira", it: "Obrigada pelo aviso. Há tomadas junto aos lugares?", es: "Gracias por el aviso. ¿Hay enchufes junto a los asientos?" },
      { speaker: "Revisor", it: "Há em todos os lugares do Alfa Pendular. Boa viagem!", es: "Hay en todos los asientos del Alfa Pendular. ¡Buen viaje!" },
    ],
    questions: ["pt-ex-ls-2-1", "pt-ex-ls-2-2", "pt-ex-ls-2-3"],
  },
  {
    id: "pt-ls-3", level: "B1", title: "Erasmus em Coimbra", kind: "dialogo",
    dialogue: [
      { speaker: "Locutor", it: "Está connosco a Inés Ortega, estudante espanhola de mestrado em Coimbra. Inés, como é que surgiu esta aventura?", es: "Está con nosotros Inés Ortega, estudiante española de máster en Coimbra. Inés, ¿cómo surgió esta aventura?" },
      { speaker: "Inés", it: "Surgiu por acaso: encontrei o programa na internet, candidatei-me e, dois meses depois, estava instalada numa residência junto ao Mondego.", es: "Surgió por casualidad: encontré el programa en internet, solicité plaza y, dos meses después, estaba instalada en una residencia junto al Mondego." },
      { speaker: "Locutor", it: "E o português? Sentiste muitas dificuldades no início?", es: "¿Y el portugués? ¿Sentiste muchas dificultades al principio?" },
      { speaker: "Inés", it: "No início, muitas. Os professores falavam depressa e o sotaque do norte pareceu-me difícil. Mas, como os colegas me corrigiam sempre, em três meses já seguia as aulas sem problemas.", es: "Al principio, muchas. Los profesores hablaban rápido y el acento del norte me pareció difícil. Pero, como los compañeros siempre me corregían, en tres meses ya seguía las clases sin problemas." },
      { speaker: "Locutor", it: "O que aconselhas a quem quer vir estudar para cá?", es: "¿Qué aconsejas a quien quiera venir a estudiar aquí?" },
      { speaker: "Inés", it: "Aconselho que venham em setembro, quando a cidade ainda está calma, e que participem na recepção aos caloiros: é a forma mais rápida de fazer amizades.", es: "Aconsejo que vengan en septiembre, cuando la ciudad aún está tranquila, y que participen en la recepción a los novatos: es la forma más rápida de hacer amistades." },
      { speaker: "Locutor", it: "Palavras sábias. Obrigado, Inés, e boa sorte no mestrado.", es: "Palabras sabias. Gracias, Inés, y buena suerte en el máster." },
    ],
    questions: ["pt-ex-ls-3-1", "pt-ex-ls-3-2", "pt-ex-ls-3-3"],
  },
  {
    id: "pt-ls-4", level: "B2", title: "Fado em Alfama", kind: "dialogo",
    dialogue: [
      { speaker: "Turista", it: "Desculpe, é a primeira vez que ouço fado ao vivo. Como se chama aquela guitarra de som tão brilhante?", es: "Disculpe, es la primera vez que escucho fado en vivo. ¿Cómo se llama esa guitarra de sonido tan brillante?" },
      { speaker: "Fadista", it: "É a guitarra portuguesa, a de Lisboa; a de Coimbra é ligeiramente diferente. Acompanha-a a viola, que sustenta o ritmo.", es: "Es la guitarra portuguesa, la de Lisboa; la de Coimbra es ligeramente distinta. La acompaña la viola, que sostiene el ritmo." },
      { speaker: "Turista", it: "E porque é que quase todas as canções falam de saudade?", es: "¿Y por qué casi todas las canciones hablan de saudade?" },
      { speaker: "Fadista", it: "Porque a saudade é o motor do fado: é a falta de alguém, de um tempo, de um destino que podia ter acontecido e não aconteceu.", es: "Porque la saudade es el motor del fado: es la falta de alguien, de un tiempo, de un destino que pudo haber ocurrido y no ocurrió." },
      { speaker: "Turista", it: "Então o fado é uma música triste?", es: "Entonces, ¿el fado es una música triste?" },
      { speaker: "Fadista", it: "É triste e consolador ao mesmo tempo. Diz o povo que se canta para curar, não para chorar — por isso o silêncio na casa é sagrado.", es: "Es triste y consolador a la vez. Dice el pueblo que se canta para curar, no para llorar; por eso el silencio en la sala es sagrado." },
    ],
    questions: ["pt-ex-ls-4-1", "pt-ex-ls-4-2", "pt-ex-ls-4-3"],
  },
  {
    id: "pt-ls-5", level: "C1", title: "Mesa-redonda: que turismo quer Lisboa?", kind: "dialogo",
    dialogue: [
      { speaker: "Locutor", it: "Boa noite. Na nossa mesa-redonda de hoje discutimos uma pergunta que divide a cidade: que turismo quer Lisboa?", es: "Buenas noches. En nuestra mesa redonda de hoy discutimos una pregunta que divide la ciudad: ¿qué turismo quiere Lisboa?" },
      { speaker: "Urbanista", it: "Antes de mais, convém não esquecer que, sem os visitantes, boa parte do casario histórico se teria degradado há décadas.", es: "Antes que nada, conviene no olvidar que, sin los visitantes, buena parte del caserío histórico se habría degradado hace décadas." },
      { speaker: "Historiadora", it: "Será verdade, mas o turismo de hoje pouco tem a ver com o de antigamente: fala-se de autocarros inteiros que passam o dia a circular entre a Praça do Comércio e a Torre de Belém.", es: "Será verdad, pero el turismo de hoy poco tiene que ver con el de antes: se habla de autobuses enteros que pasan el día circulando entre la Praça do Comércio y la Torre de Belém." },
      { speaker: "Locutor", it: "E os residentes? O que dizem os estudos recentes?", es: "¿Y los residentes? ¿Qué dicen los estudios recientes?" },
      { speaker: "Urbanista", it: "Dizem que, entre 2011 e 2021, o centro perdeu milhares de moradores. Se as rendas continuarem a subir, restará aos bairros uma beleza de fachada, sem a vida que a sustentava.", es: "Dicen que, entre 2011 y 2021, el centro perdió miles de residentes. Si los alquileres siguen subiendo, a los barrios les quedará una belleza de fachada, sin la vida que la sostenía." },
      { speaker: "Historiadora", it: "Nesse ponto concordo consigo. Só espero que a cidade saiba equilibrar o que recebe com o que preserva: Lisboa não é um cenário, é uma casa.", es: "En ese punto concuerdo con usted. Solo espero que la ciudad sepa equilibrar lo que recibe con lo que preserva: Lisboa no es un decorado, es una casa." },
    ],
    questions: ["pt-ex-ls-5-1", "pt-ex-ls-5-2", "pt-ex-ls-5-3"],
  },
  {
    id: "pt-ls-6", level: "C2", title: "Ditado: a língua da saudade", kind: "dictato",
    words: [
      "A saudade é, segundo os dicionários, uma nostalgia doce acompanhada de desejo.",
      "Não obstante os avanços da técnica, o fado continua a ser o espelho da alma lisboeta.",
      "Tivesse eu tempo, percorreria a Costa Vicentina a pé, de Sagres até Odeceixe.",
      "Quem não tem cão caça com gato, diz o provérbio, e quem não tem mestre aprende sozinho.",
    ],
    questions: ["pt-ex-ls-6-1", "pt-ex-ls-6-2", "pt-ex-ls-6-3"],
  },
];

/* ── Lectura · textos graduados ───────────────────────────────────── */

export const PT_READINGS: ReadingText[] = [
  {
    id: "pt-rd-1", level: "A1", title: "Una postal desde Oporto", titleIt: "Um postal do Porto",
    genre: "Postal", minutes: 2,
    paragraphs: [
      { it: "Olá, Beatriz! Cheguei ao Porto ontem com o meu irmão. A cidade é linda!", es: "¡Hola, Beatriz! Llegué ayer a Oporto con mi hermano. ¡La ciudad es preciosa!" },
      { it: "De manhã tomamos o pequeno-almoço numa pastelaria da Rua das Flores: café, sumo de laranja e tostas.", es: "Por la mañana desayunamos en una pastelería de la Rua das Flores: café, zumo de naranja y tostadas." },
      { it: "Ontem à tarde atravessámos a ponte de D. Luís e visitámos as caves do vinho do Porto, em Vila Nova de Gaia.", es: "Ayer por la tarde cruzamos el puente de D. Luís y visitamos las cavas del vino de Oporto, en Vila Nova de Gaia." },
      { it: "Amanhã apanhamos o comboio para Lisboa. Um abraço, — Susana", es: "Mañana cogemos el tren para Lisboa. Un abrazo, — Susana" },
    ],
    glossary: [
      { it: "o pequeno-almoço", es: "el desayuno" },
      { it: "a pastelaria", es: "la pastelería-cafetería" },
      { it: "a cave", es: "la bodega" },
    ],
    questions: ["pt-ex-rd-1-1", "pt-ex-rd-1-2"],
  },
  {
    id: "pt-rd-2", level: "A2", title: "El mercado de Barcelos", titleIt: "A feira de Barcelos",
    genre: "Crónica", minutes: 3,
    paragraphs: [
      { it: "Todas as quintas-feiras, a cidade de Barcelos, no Minho, acorda mais cedo: é dia de feira, uma das mais antigas de Portugal, com sete séculos de história.", es: "Todos los jueves, la ciudad de Barcelos, en el Miño, se despierta más temprano: es día de mercado, uno de los más antiguos de Portugal, con siete siglos de historia." },
      { it: "Os produtores chegam de madrugada com as camionetas carregadas de couve, galinhas, queijo da serra e louça pintada à mão.", es: "Los productores llegan de madrugada con las camionetas cargadas de col, gallinas, queso de la sierra y loza pintada a mano." },
      { it: "No campo da feira, os vendedores apregoam a mercadoria e os compradores regateiam os preços, uma arte que passa de avós a netos.", es: "En el recinto del mercado, los vendedores pregonan la mercancía y los compradores regatean los precios, un arte que pasa de abuelos a nietos." },
      { it: "Ao fim da manhã, as tasucas enchem-se: come-se caldo verde e bebe-se vinho verde. E, em quase todas as bancas, vigia o galo de Barcelos: conta a lenda que um galo assado cantou para salvar um inocente.", es: "Al final de la mañana, los mesones se llenan: se come caldo verde y se bebe vino verde. Y, en casi todos los puestos, vigila el gallo de Barcelos: cuenta la leyenda que un gallo asado cantó para salvar a un inocente." },
    ],
    glossary: [
      { it: "a feira", es: "el mercado (semanal)" },
      { it: "regatear", es: "regatear" },
      { it: "o galo de Barcelos", es: "el gallo de Barcelos (símbolo de Portugal)" },
    ],
    questions: ["pt-ex-rd-2-1", "pt-ex-rd-2-2"],
  },
  {
    id: "pt-rd-3", level: "B1", title: "La Costa Vicentina", titleIt: "A Costa Vicentina",
    genre: "Reportaje", minutes: 4,
    paragraphs: [
      { it: "Entre Sines e o Cabo de São Vicente estende-se um dos troços de litoral melhor conservados da Europa: o Parque Natural do Sudoeste Alentejano e Costa Vicentina.", es: "Entre Sines y el Cabo de San Vicente se extiende uno de los tramos de litoral mejor conservados de Europa: el Parque Natural del Suroeste Alentejano y Costa Vicentina." },
      { it: "Aqui manda o Atlântico: praias de areia dourada escondidas entre falésias, como Odeceixe, Zambujeira do Mar ou a Praia do Amado, conhecidas pelos surfistas há décadas.", es: "Aquí manda el Atlántico: playas de arena dorada escondidas entre acantilados, como Odeceixe, Zambujeira do Mar o la Praia do Amado, conocidas por los surfistas desde hace décadas." },
      { it: "Os antigos caminhos de pesca tornaram-se trilhos pedestres: a Rota Vicentina, com mais de trezentos e quarenta quilómetros, liga Santiago do Cacém a São Vicente por aldeias de pescadores e casas caiadas de branco.", es: "Los antiguos caminos de pesca se han convertido en senderos para caminar: la Rota Vicentina, con más de trescientos cuarenta kilómetros, une Santiago do Cacém con São Vicente pasando por aldeas de pescadores y casas encaladas de blanco." },
      { it: "Quem percorre a costa devagar descobre o maior luxo da região: o silêncio, cada vez mais raro, interrompido apenas pelo vento e pelas gaivotas.", es: "Quien recorre la costa despacio descubre el mayor lujo de la región: el silencio, cada vez más raro, interrumpido solo por el viento y las gaviotas." },
    ],
    glossary: [
      { it: "a falésia", es: "el acantilado" },
      { it: "o trilho", es: "el sendero" },
      { it: "caado / caiada", es: "encalado / encalada (pintado con cal)" },
    ],
    questions: ["pt-ex-rd-3-1", "pt-ex-rd-3-2"],
  },
  {
    id: "pt-rd-4", level: "B2", title: "Los azulejos: la piel azul de las ciudades", titleIt: "Os azulejos: a pele azul das cidades",
    genre: "Artículo de divulgación", minutes: 5,
    paragraphs: [
      { it: "Passear por uma cidade portuguesa é caminhar dentro de um museu de geometria e cor: fachadas, estações e igrejas inteiras revestidas de azulejo, uma palavra que vem do árabe al-zulaic, «pedra polida».", es: "Pasear por una ciudad portuguesa es caminar dentro de un museo de geometría y color: fachadas, estaciones e iglesias enteras revestidas de azulejo, una palabra que viene del árabe al-zulaic, «piedra pulida»." },
      { it: "A técnica chegou com os mouros e os primeiros exemplares entraram em Portugal no século XV, vindos de Sevilha. Depois, as oficinas lisboetas criaram padrões próprios: da geometria mudejar às cenas azuis e brancas do século XVIII.", es: "La técnica llegó con los moros y los primeros ejemplares entraron en Portugal en el siglo XV, venidos de Sevilla. Después, los talleres lisboetas crearon patrones propios: de la geometría mudéjar a las escenas azules y blancas del siglo XVIII." },
      { it: "O terramoto de 1755 deu aos azulejos um papel inesperado: como revestimento barato e resistente, reconstruiu a cara de Lisboa. Na estação de São Bento, no Porto, vinte mil peças pintadas por Jorge Colaço contam a história do país numa só parede.", es: "El terremoto de 1755 dio a los azulejos un papel inesperado: como revestimiento barato y resistente, reconstruyó la cara de Lisboa. En la estación de São Bento, en Oporto, veinte mil piezas pintadas por Jorge Colaço cuentan la historia del país en una sola pared." },
      { it: "Hoje a arte continua viva: dos painéis do metropolitano de Lisboa, desenhados por artistas contemporâneos, ao Museu Nacional do Azulejo, que conta oito séculos desta tradição. Beleza com função, dizem os portugueses: os azulejos protegem as paredes da humidade e da luz brutal do Atlântico.", es: "Hoy el arte sigue vivo: de los paneles del metro de Lisboa, diseñados por artistas contemporáneos, al Museo Nacional del Azulejo, que narra ocho siglos de esta tradición. Belleza con función, dicen los portugueses: los azulejos protegen las paredes de la humedad y de la luz brutal del Atlántico." },
    ],
    glossary: [
      { it: "o revestimento", es: "el revestimiento" },
      { it: "a fachada", es: "la fachada" },
      { it: "o painel de azulejos", es: "el panel de azulejos" },
    ],
    questions: ["pt-ex-rd-4-1", "pt-ex-rd-4-2"],
  },
  {
    id: "pt-rd-5", level: "C1", title: "Los heterónimos de Pessoa", titleIt: "Os heterónimos de Pessoa",
    genre: "Crítica literaria", minutes: 6,
    paragraphs: [
      { it: "Numa tarde de março de 1914, um poeta de Lisboa decidiu não ser um só: Fernando Pessoa inventou os heterónimos, poetas completos, com biografia, estética e até mapas astrais próprios.", es: "En una tarde de marzo de 1914, un poeta de Lisboa decidió no ser uno solo: Fernando Pessoa inventó los heterónimos, poetas completos, con biografía, estética e incluso mapas astrales propios." },
      { it: "Álvaro de Campos, engenheiro naval e poeta de máquina e tédio, grita na «Tabacaria»: «Não sou nada. Nunca serei nada.» Alberto Caeiro, o mestre camponês, ensina a ver sem pensar; Ricardo Reis, médico monárquico, escreve odes à medida de Horácio.", es: "Álvaro de Campos, ingeniero naval y poeta de la máquina y del tedio, grita en «Tabacaria»: «No soy nada. Nunca seré nada.» Alberto Caeiro, el maestro campesino, enseña a ver sin pensar; Ricardo Reis, médico monárquico, escribe odas a la medida de Horacio." },
      { it: "Em vez de máscaras, críticos falam de «dramas em gente»: cada heterónimo é uma filosofia encarnada, e o próprio Pessoa, o «ortónimo», fica com a melancolia lucida de quem observa.", es: "En lugar de máscaras, los críticos hablan de «dramas en personas»: cada heterónimo es una filosofía encarnada, y el propio Pessoa, el «ortónimo», se queda con la melancolía lúcida de quien observa." },
      { it: "Para o estudante avançado, Pessoa é um ginásio de português: cada heterónimo escreve numa língua diferente, do registo coloquial de Campos à sintaxe clássica de Reis. «O poeta é um fingidor», escreveu — e nunca a ficção deu tanta verdade.", es: "Para el estudiante avanzado, Pessoa es un gimnasio de portugués: cada heterónimo escribe en una lengua distinta, del registro coloquial de Campos a la sintaxis clásica de Reis. «El poeta es un fingidor», escribió, y nunca la ficción dio tanta verdad." },
    ],
    glossary: [
      { it: "o heterónimo", es: "el heterónimo" },
      { it: "o fingidor", es: "el fingidor (que finge)" },
      { it: "a ode", es: "la oda" },
    ],
    questions: ["pt-ex-rd-5-1", "pt-ex-rd-5-2"],
  },
  {
    id: "pt-rd-6", level: "C2", title: "La sintaxis de Saramago", titleIt: "A sintaxe de Saramago",
    genre: "Ensayo crítico", minutes: 6,
    paragraphs: [
      { it: "O Nobel de 1998 não tornou José Saramago um escritor fácil: a sua prosa é uma montanha-russa sintáctica de frases intermináveis, pontuadas apenas por vírgulas, em que as maiúsculas anunciam quem fala.", es: "El Nobel de 1998 no hizo de José Saramago un escritor fácil: su prosa es una montaña rusa sintáctica de frases interminables, puntuadas solo por comas, en la que las mayúsculas anuncian quién habla." },
      { it: "Em «Ensaio sobre a Cegueira», uma cidade inteira perde a vista e os travessões desaparecem com a luz: o leitor ouve as vozes grudadas umas às outras, como numa sala escura.", es: "En «Ensayo sobre la ceguera», una ciudad entera pierde la vista y los guiones desaparecen con la luz: el lector oye las voces pegadas unas a otras, como en una sala oscura." },
      { it: "Ler Saramago em voz alta é a melhor receita para o aluno C2: a pontuação incomum obriga a respirar com o texto, e a ironia demora a disparar — quando se dá conta, a frase virou do avesso.", es: "Leer a Saramago en voz alta es la mejor receta para el alumno C2: la puntuación inusual obliga a respirar con el texto, y la ironía tarda en dispararse; cuando te das cuenta, la frase se ha dado la vuelta." },
      { it: "«Se podes olhar, vê. Se podes ver, repara», aconselha o romance. É também um programa de leitura: o estilo de Saramago não se decora, contempla-se.", es: "«Si puedes mirar, mira. Si puedes ver, repara», aconseja la novela. Es también un programa de lectura: el estilo de Saramago no se memoriza, se contempla." },
    ],
    glossary: [
      { it: "a pontuação", es: "la puntuación" },
      { it: "o travessão", es: "el guion largo (—) de diálogo" },
      { it: "virar do avesso", es: "dar la vuelta, trastocar" },
    ],
    questions: ["pt-ex-rd-6-1", "pt-ex-rd-6-2"],
  },
];

/* ── Escritura · consignas por nivel ──────────────────────────────── */

export const PT_WRITINGS: WritingPrompt[] = [
  {
    id: "pt-wr-1", level: "A1", title: "Presentarme", task: "Preséntate: nombre, edad, nacionalidad, ciudad, familia y algo que te guste.",
    minWords: 30,
    tips: ["Usa ser (sou) y ter (tenho)", "Frase modelo: Chamo-me…, tenho … anos, sou de…", "La edad se dice con ter: tenho vinte e três anos"],
    model: [
      "Chamo-me Inés e tenho vinte e três anos.",
      "Sou espanhola e moro em Madrid com a minha família.",
      "Tenho um irmão que se chama Diego.",
      "Gosto de música portuguesa e de café.",
    ],
    checklist: ["¿Concuerdas los adjetivos (espanhola, não espanhol)?", "¿Usas ter para la edad (tenho … anos)?", "¿Cierras con gosto de…?"],
  },
  {
    id: "pt-wr-2", level: "A2", title: "Mi semana pasada", task: "Cuenta en pretérito perfeito simple lo que hiciste la semana pasada: trabajo, estudios y ocio.",
    minWords: 50,
    tips: ["Perfeito simple: trabalhei, visitei, fomos (raíces irregulares: fiz, fui, teve)", "Marcadores: na segunda-feira, na passada sexta, o mês passado", "En Portugal las acciones concretas van en simple: comi, no «tenho comido»"],
    model: [
      "A semana passada foi muito intensa.",
      "Na segunda-feira trabalhei o dia todo e à noite cozinhei para os meus amigos.",
      "Na quarta-feira fui à piscina e depois vi um filme português.",
      "No sábado fomos à praia de Carcavelos: comi uma bifana fantástica!",
    ],
    checklist: ["¿Usaste el perfeito simple (-ei, -ou, -amos)?", "¿Empleaste al menos 4 verbos distintos?", "¿Los marcadores temporales están bien colocados?"],
  },
  {
    id: "pt-wr-3", level: "B1", title: "Un correo formal a la casera", task: "Escribe un correo formal a la casera de una habitación que quieres alquilar en Coimbra: preséntate, pregunta por la renta y las condiciones.",
    minWords: 60,
    tips: ["Apertura: Minha Senhora, / Cara Senhora D. Maria,", "Cortesía: gostaria de, poderia dizer-me, seria possível", "Cierre portugués: Com os melhores cumprimentos"],
    model: [
      "Minha Senhora,",
      "O meu nome é Alejandro Pérez e sou estudante de mestrado na Universidade de Coimbra.",
      "Escrevo em relação ao anúncio do quarto na Rua Ferreira Borges: gostaria de o visitar na próxima semana, se fosse possível.",
      "Poderia dizer-me, além da renda mensal, se as despesas de água e luz estão incluídas?",
      "Agradeço desde já a atenção dispensada. Com os melhores cumprimentos, — A. Pérez",
    ],
    checklist: ["¿Tratamiento formal (Minha Senhora, tercera persona)?", "¿Condicional de cortesía (gostaria, poderia)?", "¿Cierre con «com os melhores cumprimentos»?"],
  },
  {
    id: "pt-wr-4", level: "B2", title: "Opinión: el turismo en Lisboa", task: "Redacta un texto argumentativo: ¿el turismo masivo arruina Lisboa? Presenta la tesis, un argumento a favor, otro en contra y una conclusión.",
    minWords: 100,
    tips: ["Conectores: em primeiro lugar, além disso, no entanto, por conseguinte", "Hipótesis: se + conjuntivo (se o turismo não fosse gerido…)", "Conclusión: em conclusão / em suma"],
    model: [
      "Nos últimos anos, o turismo explodiu em Lisboa: hotéis, tuk-tuks e apartamentos turísticos por toda a parte.",
      "Em primeiro lugar, é inegável que o turismo trouxe riqueza e emprego a milhares de famílias.",
      "No entanto, o reverso da medalha preocupa: rendas a subir, vizinhos que deixam o centro histórico, lojas de recordações no lugar das mercearias de bairro.",
      "Se o turismo não fosse regulado com regras claras, o risco seria transformar Lisboa num museu a céu aberto, bonito mas sem vida própria.",
      "Em suma, penso que a solução não passa por fechar a cidade aos visitantes, mas por encontrar um equilíbrio entre quem passa e quem fica.",
    ],
    checklist: ["¿Hay una tesis clara en la apertura?", "¿Conectores variados (no entanto, por conseguinte)?", "¿Se + conjuntivo en la hipótesis?", "¿Conclusión que sintetiza?"],
  },
  {
    id: "pt-wr-5", level: "C1", title: "Ensayo breve: ¿una lengua, dos orillas?", task: "Ensayo de 150 palabras: ¿hablan Portugal y Brasil la misma lengua? Reflexiona con registro académico y una imagen final.",
    minWords: 150,
    tips: ["Impersonales: é costume dizer-se, é sabido que", "Conectores académicos: convém sublinhar, importa notar, à primeira vista", "Matiz: não é bem assim, digamos"],
    model: [
      "É lugar-comum afirmar que Portugal e o Brasil falam a mesma língua; e, no entanto, convém sublinhar que a unidade do português assenta mais na escrita do que na fala.",
      "À primeira vista, bastam cinco minutos de uma telenovela brasileira para lembrar ao telespectador português as distâncias fonéticas e lexicais que separam as duas margens do Atlântico.",
      "Importa notar, porém, que a ortografia comum sustenta a ilusão de uma língua única, quando a realidade é mais rica: dois padrões com pretensões de igual dignidade.",
      "Digamos que o português é menos uma ilha do que um arquipélago: sotaques irmãos, banhados pelo mesmo mar e não inteiramente coincidentes.",
      "Em conclusão, mais do que uma língua comum, os povos lusófonos partilham a capacidade de se entenderem — e de se estranharem — na mesma casa.",
    ],
    checklist: ["¿Registro académico sostenido?", "¿Conectores de refinamiento («convém sublinhar», «digamos»)?", "¿Matiz con «não é bem assim»?", "¿Tesis-antítesis-síntesis?"],
  },
  {
    id: "pt-wr-6", level: "C2", title: "Crónica literaria: una noche de fado", task: "Escribe el inicio de una crónica literaria (unas 150 palabras) sobre una noche de fado en Alfama, con estilo cuidado, ritmo variado y alguna imagen original.",
    minWords: 150,
    tips: ["Subordinación elegante: gerundios, oraciones relativas, participios", "Sensaciones cruzadas: sonido, luz, olor, sabor", "Evita los adjetivos obvios; prefiere verbos fuertes"],
    model: [
      "Subia a noite pelos becos de Alfama quando a primeira guitarra desatou a chorar.",
      "Na tasca, o vinho era tartamudo e a luz, uma vela que tremia como quem não acredita no próprio brilho.",
      "A fadista, xaile negro e voz de sal, cantou a saudade com tal propriedade que os turistas calaram e os velhos fecharam os olhos.",
      "Não era um espetáculo: era uma confissão pública, dessas que só quem perdeu muito sabe fazer.",
      "Quando saí, a rua continuava íngreme, mas eu já não tinha pressa de descer.",
    ],
    checklist: ["¿Imágenes originales y no clichés?", "¿Ritmo variado entre frases largas y cortas?", "¿Sensaciones cruzadas (sonido, luz, olor)?", "¿Vocabulario preciso y sin coloquialismos?"],
  },
];

/* ── Conversación · escenarios con frases útiles + tutor IA ───────── */

export const PT_CONVERSATION: ConversationScenario[] = [
  {
    id: "pt-cs-1", emoji: "👋", title: "Conocer a alguien", level: "A1",
    phrases: [
      { it: "Olá! Muito prazer em conhecer-te.", es: "¡Hola! Mucho gusto en conocerte." },
      { it: "Como te chamas? — Chamo-me…", es: "¿Cómo te llamas? — Me llamo…" },
      { it: "De onde és? — Sou de Madrid.", es: "¿De dónde eres? — Soy de Madrid." },
      { it: "Qual é o teu trabalho? — Sou engenheira.", es: "¿Cuál es tu trabajo? — Soy ingeniera." },
      { it: "Falas inglês? — Sim, um pouco.", es: "¿Hablas inglés? — Sí, un poco." },
    ],
    tips: ["En Portugal el tu es normal entre jóvenes desde el primer minuto", "Muito prazer = encantado/a (acompañado de una sonrisa)", "Para despedirte informalmente: Até logo! (nos vemos)"],
    tutorSeed: "Vamos simular uma conversa informal: conhecemo-nos numa festa de estudantes em Lisboa. Tu és português/portuguesa e eu apresento-me em português. Começa tu por saudar.",
  },
  {
    id: "pt-cs-2", emoji: "☕", title: "En la pastelería", level: "A1",
    phrases: [
      { it: "Bom dia! Um café, se faz favor.", es: "¡Buenos días! Un café, por favor." },
      { it: "E um pastel de nata, por favor.", es: "Y un pastel de nata, por favor." },
      { it: "Quanto é?", es: "¿Cuánto es?" },
      { it: "Posso pagar com multibanco?", es: "¿Puedo pagar con tarjeta?" },
      { it: "Obrigado! / Obrigada!", es: "¡Gracias! (hombre: obrigado; mujer: obrigada)" },
    ],
    tips: ["Obrigado si eres hombre y obrigada si eres mujer: la palabra concuerda contigo", "Un café solo se pide «um café»; um «pingado» lleva un chorrito de leche", "Se faz favor es el por favor de cada día, más suave que se faz o favor"],
    tutorSeed: "Vamos fazer um role-play: eu sou o cliente e tu és o funcionário de uma pastelaria do Chiado, em Lisboa. Cumprimenta-me e pergunta-me o que quero.",
  },
  {
    id: "pt-cs-3", emoji: "🚆", title: "En el tren", level: "A2",
    phrases: [
      { it: "Desculpe, este lugar está ocupado?", es: "Disculpe, ¿está ocupado este sitio?" },
      { it: "Este comboio para em Coimbra?", es: "¿Este tren para en Coimbra?" },
      { it: "A que horas chegamos ao Porto?", es: "¿A qué hora llegamos a Oporto?" },
      { it: "Podia guardar-me o lugar um momento?", es: "¿Podría guardarme el sitio un momento?" },
      { it: "Os bilhetes, se faz favor.", es: "Los billetes, por favor (dice el revisor)." },
    ],
    tips: ["El tren se dice sempre comboio en Portugal: apréndelo desde el primer día", "El revisor pedirá os bilhetes, se faz favor: tenlo a mano", "Está ocupado? es la fórmula para preguntar por un asiento"],
    tutorSeed: "Role-play: eu viajo no Alfa Pendular do Porto para Lisboa e tu és o revisor da CP. Pede-me o bilhete e responde às minhas perguntas sobre a viagem.",
  },
  {
    id: "pt-cs-4", emoji: "📱", title: "Por teléfono: quedar", level: "A2",
    phrases: [
      { it: "Está? — Olá, é a Marta?", es: "¿Diga? — Hola, ¿eres la Marta?" },
      { it: "Queres dar uma volta no sábado?", es: "¿Quieres dar una vuelta el sábado?" },
      { it: "Combinamos às seis no Rossio?", es: "¿Quedamos a las seis en el Rossio?" },
      { it: "Desculpa, só posso depois do trabalho.", es: "Perdona, solo puedo después del trabajo." },
      { it: "Então fica combinado. Até sábado!", es: "Entonces, queda dicho. ¡Hasta el sábado!" },
    ],
    tips: ["Al teléfono los portugueses contestan com Está? ou Estou", "Combinar es quedar de acuerdo para verse: palabra muy portuguesa", "Fica combinado = queda acordado, se dice al colgar"],
    tutorSeed: "Role-play ao telemóvel: eu ligo-te para combinarmos um passeio no fim de semana em Lisboa. Atende em português e propõe dia, hora e lugar.",
  },
  {
    id: "pt-cs-5", emoji: "💼", title: "Entrevista de trabajo en Lisboa", level: "B1",
    phrases: [
      { it: "Bom dia, obrigado pela oportunidade.", es: "Buenos días, gracias por la oportunidad." },
      { it: "Tenho uma licenciatura em economia e três anos de experiência.", es: "Tengo una licenciatura en economía y tres años de experiencia." },
      { it: "Gosto de trabalhar em equipa e de aprender coisas novas.", es: "Me gusta trabajar en equipo y aprender cosas nuevas." },
      { it: "Quais seriam as minhas responsabilidades?", es: "¿Cuáles serían mis responsabilidades?" },
      { it: "Quando posso ter uma resposta?", es: "¿Cuándo puedo tener una respuesta?" },
    ],
    tips: ["En la entrevista usa el tratamiento formal (o senhor/a senhora + tercera persona) hasta que te propongan el tu", "El condicional (seriam, poderia) suena profesional", "Preguntar al final demuestra interés"],
    tutorSeed: "Role-play: tu és a responsável de recursos humanos de uma empresa em Lisboa e eu sou candidato. Recebe-me e pede-me para me apresentar.",
  },
  {
    id: "pt-cs-6", emoji: "🌍", title: "Debate: centros históricos y turismo", level: "B2",
    phrases: [
      { it: "A meu ver, o problema é estrutural.", es: "En mi opinión, el problema es estructural." },
      { it: "Se as rendas não fossem tão altas, os moradores não sairiam do bairro.", es: "Si los alquileres no fueran tan altos, los residentes no dejarían el barrio." },
      { it: "Concordo até certo ponto, no entanto…", es: "Estoy de acuerdo hasta cierto punto, sin embargo…" },
      { it: "É preciso distinguir entre…", es: "Hay que distinguir entre…" },
      { it: "Em conclusão, penso que…", es: "En conclusión, considero que…" },
    ],
    tips: ["El conjuntivo tras se hipotético es la marca del nivel B2", "Matiza con «até certo ponto» y «num certo sentido»", "En Portugal interrumpir en conversaciones animadas es normal: no es descortesía"],
    tutorSeed: "Debate: falamos sobre turismo e habitação nos centros históricos portugueses, de Lisboa ao Porto. Expõe a tua tese e eu discuto-a contigo em português.",
  },
];
