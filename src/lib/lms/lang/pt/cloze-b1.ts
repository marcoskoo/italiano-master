import type { CbClozeText } from "../../cambridge";

/* ═══ PT B1 · Cloze readings — 3 por unidade (inferência léxica) ═══
   Metodología v9.12: el texto en portugués lleva marcadores {1} {2}…
   que el reproductor convierte en huecos; el estudiante deduce la
   palabra por el contexto. Campos: `.it` = portugués europeo, `.es` =
   español. Escenarios casados con las 12 unidades del curso B1. */

export const PT_CLOZE_B1: Record<string, CbClozeText[]> = {
  "pt-cu-b1-01": [
    {
      id: "cz-pt-b1-01-1", title: "Duas vezes em Coimbra", titleEs: "Dos veces en Coimbra", minutes: 2,
      paragraphs: [
        { it: "O Alejandro está de intercâmbio em Lisboa e adora contar viagens. Já esteve em Coimbra duas vezes: a primeira em janeiro e a {1} em março, para ver a universidade. Na visita, os amigos subiram a pé até à Alta e entraram na Biblioteca Joanina, que os deixou de {2} aberta.", es: "Alejandro está de intercambio en Lisboa y adora contar viajes. Ya estuvo dos veces en Coimbra: la primera en enero y la segunda en marzo, para ver la universidad. En la visita, los amigos subieron a pie hasta la Alta y entraron en la Biblioteca Joanina, que los dejó boquiabiertos." },
        { it: "Este ano, a rotina dele mudou: tem {3} muitas vezes a Sintra, porque adora os palácios e a viagem de comboio é curta. Ultimamente tem gasto muito {4} em bilhetes, mas não se arrepende. Ainda não conhece o Porto, a cidade que lhe {5} na lista.", es: "Este año, su rutina cambió: ha ido muchas veces a Sintra, porque adora los palacetes y el viaje en tren es corto. Últimamente ha estado gastando mucho dinero en billetes, pero no se arrepiente. Todavía no conoce Oporto, la ciudad que le falta en la lista." },
      ],
      gaps: [
        { options: ["segunda", "última", "primeira"], answer: 0, why: "Después de «a primeira em janeiro», la visita de marzo es la segunda." },
        { options: ["mão", "boca", "porta"], answer: 1, why: "«Deixar de boca aberta» = dejar boquiabierto; la Biblioteca Joanina impresiona." },
        { options: ["sido", "ido", "feito"], answer: 1, why: "«Tem + ido»: visitas repetidas a Sintra este año (perfeito composto)." },
        { options: ["tempo", "sono", "dinheiro"], answer: 2, why: "Se gasta en billetes → dinero." },
        { options: ["sobra", "falta", "escapa"], answer: 1, why: "No conoce Oporto → es la ciudad que le falta por conocer." },
      ],
    },
    {
      id: "cz-pt-b1-01-2", title: "O ano da Inês", titleEs: "El año de Inês", minutes: 3,
      paragraphs: [
        { it: "A Inês é de Lisboa, mas a prima estuda em Coimbra. Por isso, tem ido muitas vezes este ano à cidade dos estudantes. Cada visita é diferente: já viu a Queima das Fitas, já ouviu o fado de Coimbra, cantado com {1} e guitarra, e já se perdeu duas vezes nas ruelas da Baixa.", es: "Inês es de Lisboa, pero su prima estudia en Coimbra. Por eso ha ido muchas veces este año a la ciudad de los estudiantes. Cada visita es diferente: ya vio la Queima das Fitas, ya oyó el fado de Coimbra, cantado con capa y guitarra, y ya se perdió dos veces en las callejuelas de la Baixa." },
        { it: "«Quando foi a primeira vez?», pergunta o Tiago na {2} do Bairro Alto, com um café na mão. «Fui em janeiro, com o meu irmão. Foi ele que me mostrou a {3} da coroa da universidade: a Biblioteca Joanina.» A Inês sorri e bebe o seu {4} devagar, como quem sabe que ainda vai {5} em maio, à grande festa académica.", es: "«¿Cuándo fue la primera vez?», pregunta Tiago en la terraza del Bairro Alto, con un café en la mano. «Fui en enero, con mi hermano. Fue él quien me mostró la joya de la corona de la universidad: la Biblioteca Joanina.» Inês sonríe y bebe su galão despacio, como quien sabe que todavía volverá en mayo, a la gran fiesta académica." },
      ],
      gaps: [
        { options: ["capa", "fita", "festa"], answer: 0, why: "El fado de Coimbra se canta con capa y guitarra (traje académico)." },
        { options: ["cozinha", "esplanada", "biblioteca"], answer: 1, why: "Terraza del Bairro Alto → esplanada." },
        { options: ["porta", "história", "joia"], answer: 2, why: "«A joia da coroa» = la joya de la corona, expresión fija para lo mejor." },
        { options: ["vinho", "caldo", "galão"], answer: 2, why: "Café con leche en vaso, la bebida típica de la mañana lisboeta → galão." },
        { options: ["voltar", "ficar", "partir"], answer: 0, why: "Volverá en mayo a la fiesta académica → voltar." },
      ],
    },
    {
      id: "cz-pt-b1-01-3", title: "A Queima das Fitas", titleEs: "La Queima das Fitas", minutes: 3,
      paragraphs: [
        { it: "Em maio, Coimbra transforma-se durante uma semana inteira: os estudantes vestem o traje {1} de capa e batina, as fitas coloridas de cada faculdade enchem as montras e a cidade vive para os concertos. Ao fim da semana há uma cerimónia solene em que se {2} as fitas, memória do tempo em que se queimavam as dos livros no fim do curso.", es: "En mayo, Coimbra se transforma durante una semana entera: los estudiantes visten el traje negro de capa y beca, las cintas de colores de cada facultad llenan los escaparates y la ciudad vive para los conciertos. Al final de la semana hay una ceremonia solemne en la que se queman las cintas, memoria del tiempo en que se quemaban las de los libros al terminar la carrera." },
        { it: "O Tiago já lá esteve três vezes, porque o irmão {3} o curso na Universidade de Coimbra. A Inês, essa, tem {4} a todas as festas académicas deste ano — a prima dela é caloira. Os dois concordam numa coisa: quem nunca foi, tem de ir pelo menos uma {5} na vida.", es: "Tiago ya estuvo allí tres veces, porque su hermano hizo la carrera en la Universidad de Coimbra. Inês, esa, ha ido a todas las fiestas académicas de este año: su prima es novata. Los dos están de acuerdo en algo: quien nunca ha ido, tiene que ir al menos una vez en la vida." },
      ],
      gaps: [
        { options: ["branco", "preto", "encarnado"], answer: 1, why: "El traje académico de Coimbra es negro (capa y batina)." },
        { options: ["compram", "guardam", "queimam"], answer: 2, why: "La Queima das Fitas: se queman las cintas («queimar»)." },
        { options: ["faz", "fez", "faria"], answer: 1, why: "El hermano ya terminó la carrera allí → perfeito simples «fez»." },
        { options: ["ido", "estado", "sido"], answer: 0, why: "«Tem ido» = ha ido: fiestas repetidas este año (perfeito composto)." },
        { options: ["semana", "tarde", "vez"], answer: 2, why: "«Pelo menos uma vez» = al menos una vez, expresión fija." },
      ],
    },
  ],

  "pt-cu-b1-02": [
    {
      id: "cz-pt-b1-02-1", title: "O café das opiniões", titleEs: "El café de las opiniones", minutes: 2,
      paragraphs: [
        { it: "Na pausa das onze, a esplanada do café em Lisboa enche-se de colegas. O tema do dia é o {1}: uns adoram trabalhar em casa, outros preferem o escritório. O Rui abre o debate: «Em casa ninguém me interrompe e trabalho melhor.» A Catarina responde depressa: «Também {2}! Além disso poupo duas horas por dia.»", es: "En el descanso de las once, la terraza del café de Lisboa se llena de colegas. El tema del día es el teletrabajo: unos adoran trabajar en casa, otros prefieren la oficina. Rui abre el debate: «En casa nadie me interrumpe y trabajo mejor.» Catarina responde rápido: «¡Yo también! Además ahorro dos horas al día.»" },
        { it: "O Alejandro, que é espanhol, concorda só em parte: «Concordo até certo {3}, mas por outro lado sinto falta dos colegas.» A discussão continua animada, mas ninguém se zanga, porque em Portugal se discute a ideia e nunca a {4}. Quando a conta chega, a Catarina fecha: «Está visto: discordamos todos, mas o café sabe melhor {5}!»", es: "Alejandro, que es español, está de acuerdo solo en parte: «Estoy de acuerdo hasta cierto punto, pero por otra parte echo de menos a los colegas.» La discusión sigue animada, pero nadie se enfada, porque en Portugal se discute la idea y nunca a la persona. Cuando llega la cuenta, Catarina cierra: «Está visto: discrepamos todos, ¡pero el café sabe mejor así!»" },
      ],
      gaps: [
        { options: ["futebol", "teletrabalho", "tempo"], answer: 1, why: "Trabajar en casa vs. oficina → el tema es el teletrabajo." },
        { options: ["eu", "nós", "você"], answer: 0, why: "Concordancia con frase afirmativa → «Também eu!» (yo también)." },
        { options: ["dia", "ponto", "preço"], answer: 1, why: "«Concordo até certo ponto» = estar de acuerdo hasta cierto punto." },
        { options: ["empresa", "cidade", "pessoa"], answer: 2, why: "Se discute la idea, nunca a la persona: la regla del debate portugués." },
        { options: ["assim", "ontem", "frio"], answer: 0, why: "Discrepan, pero el café sabe mejor así → assim (de este modo)." },
      ],
    },
    {
      id: "cz-pt-b1-02-2", title: "Também eu, nem eu", titleEs: "Yo también, yo tampoco", minutes: 2,
      paragraphs: [
        { it: "Aprender a concordar e a discordar é aprender a conviver. Com frases afirmativas, a resposta curta é «Também eu!»; com frases negativas, «Nem eu!». Se o {1} é diferente, repete-se o verbo: «Eu também trabalho em casa». E para discordar com educação, nada como um «Pois…» alargado antes do {2} «mas».", es: "Aprender a estar de acuerdo y en desacuerdo es aprender a convivir. Con frases afirmativas, la respuesta corta es «¡Yo también!»; con frases negativas, «¡Yo tampoco!». Si el sujeto es diferente, se repite el verbo: «Yo también trabajo en casa». Y para discrepar con educación, nada como un «Pois…» alargado antes del «mas»." },
        { it: "No comboio das oito da manhã, a conversa entre desconhecidos é um curso acelerado: «Eu não aguento o comboio {3}.» — «Nem eu! Todos os dias a mesma coisa.» — «Pode ser, mas ao menos chego a horas.» — «Isso é verdade.» Concordar em {4} também é uma arte; o importante é que ninguém perca a {5} num debate amável.", es: "En el tren de las ocho de la mañana, la conversación entre desconocidos es un curso acelerado: «Yo no aguanto el tren abarrotado.» — «¡Yo tampoco! Todos los días lo mismo.» — «Puede ser, pero al menos llego a tiempo.» — «Eso es verdad.» Concordar en parte también es un arte; lo importante es que nadie pierda la paciencia en un debate amable." },
      ],
      gaps: [
        { options: ["verbo", "sujeito", "tempo"], answer: 1, why: "Si el que actúa es otro, se repite el verbo → sujeto diferente." },
        { options: ["não", "e", "mas"], answer: 2, why: "El «Pois…» alargado va antes del «mas» que introduce la discordancia." },
        { options: ["lotado", "vazio", "rápido"], answer: 0, why: "«Não aguento o comboio lotado»: abarrotado, lleno de gente." },
        { options: ["parte", "tudo", "silêncio"], answer: 0, why: "«Pode ser, mas…»: concordar en parte, con matiz." },
        { options: ["carteira", "paciência", "boca"], answer: 1, why: "Nadie pierde la paciencia en un debate amable." },
      ],
    },
    {
      id: "cz-pt-b1-02-3", title: "Pois… mas", titleEs: "Pois… mas", minutes: 3,
      paragraphs: [
        { it: "Há palavras que valem frases inteiras. O «Pois…» português, dito devagar e com uma pausa, suaviza qualquer desacordo: «Pois… eu não concordo.» Já o «Pois é!», com a voz a {1}, aceita o destino com resignação. E o «Pode ser, mas…» é a ponte perfeita entre a {2} do outro e a tua opinião.", es: "Hay palabras que valen frases enteras. El «Pois…» portugués, dicho despacio y con una pausa, suaviza cualquier desacuerdo: «Pois… yo no estoy de acuerdo.» El «Pois é!», con la voz bajando, acepta el destino con resignación. Y el «Pode ser, mas…» es el puente perfecto entre la razón del otro y tu opinión." },
        { it: "Numa mesa de café, uma turma discute futebol, política e {3} — os três temas clássicos. Quando alguém levanta a voz, o mais velho sorri e lembra a regra de ouro: «Discute-se a ideia, nunca a pessoa.» Ao fim de uma hora, ninguém convenceu ninguém e todos ficam {4}. No dia seguinte, a conversa recomeça exatamente onde tinha {5}.", es: "En una mesa de café, un grupo discute fútbol, política y precios — los tres temas clásicos. Cuando alguien levanta la voz, el mayor sonríe y recuerda la regla de oro: «Se discute la idea, nunca a la persona.» Al cabo de una hora, nadie convenció a nadie y todos quedan contentos. Al día siguiente, la conversación empieza de nuevo exactamente donde había parado." },
      ],
      gaps: [
        { options: ["subir", "descer", "tremer"], answer: 1, why: "«Pois é!» con la voz descendente: acepta con resignación." },
        { options: ["razão", "causa", "festa"], answer: 0, why: "El puente entre la razón del otro y tu opinión." },
        { options: ["preços", "línguas", "máquinas"], answer: 0, why: "Los tres temas clásicos del café portugués: fútbol, política y precios." },
        { options: ["zangados", "contentes", "cansados"], answer: 1, why: "Nadie convenció a nadie, pero el debate amable deja a todos contentos." },
        { options: ["começado", "acabado", "parado"], answer: 2, why: "Recomeça exatamente onde tinha parado → donde había parado." },
      ],
    },
  ],

  "pt-cu-b1-03": [
    {
      id: "cz-pt-b1-03-1", title: "A sobremesa dos sonhos", titleEs: "El postre de los sueños", minutes: 3,
      paragraphs: [
        { it: "Domingo, restaurante familiar na Alfama. Depois do assado, o tio Fernando tira o {1} do bolso e anuncia: «O Euromilhões está em 60 milhões!» A sobremesa transforma-se: cada um sonha em voz alta com o que faria se o prémio {2} à família.", es: "Domingo, restaurante familiar en la Alfama. Tras el asado, el tío Fernando saca el boleto del bolsillo y anuncia: «¡El Euromilhões está en 60 millones!» El postre se transforma: cada uno sueña en voz alta con lo que haría si el premio cayera a la familia." },
        { it: "«Se ganhasse, comprava um descapotável», diz o tio. «Comprava, sim! E levava-vos todos ao {3} de férias, num hotel de cinco estrelas à beira-mar.» A avó Rosa é a mais prática: «Se fosses rico, vinhas cá almoçar todos os {4} — isso é que era prémio.» Todos se riem, mas ninguém discute: por dois euros, sonhar em {5} é o melhor investimento da semana.", es: "«Si ganara, compraba un descapotable», dice el tío. «¡Compraba, sí! Y os llevaba a todos al Algarve de vacaciones, a un hotel de cinco estrellas junto al mar.» La abuela Rosa es la más práctica: «Si fueras rico, venías a almorzar todos los domingos: eso sí que sería premio.» Todos se ríen, pero nadie discute: por dos euros, soñar en grupo es la mejor inversión de la semana." },
      ],
      gaps: [
        { options: ["boleto", "guardanapo", "telemóvel"], answer: 0, why: "Saca del bolsillo el boleto del Euromilhões." },
        { options: ["calhou", "calharia", "calhasse"], answer: 2, why: "«Se o prémio calhasse»: hipótesis irreal → imperfeito do conjuntivo." },
        { options: ["Alentejo", "Algarve", "Trás-os-Montes"], answer: 1, why: "Hotel de cinco estrellas à beira-mar → el Algarve, destino clásico de playa." },
        { options: ["domingos", "dias", "anos"], answer: 0, why: "«Vinhas cá almoçar todos os domingos»: la comida familiar semanal." },
        { options: ["conjunto", "segredo", "voz baixa"], answer: 0, why: "Sonhar em conjunto: soñar juntos, el verdadero premio." },
      ],
    },
    {
      id: "cz-pt-b1-03-2", title: "Se eu ganhasse…", titleEs: "Si yo ganara…", minutes: 2,
      paragraphs: [
        { it: "Cada membro da família tem o seu sonho. A Beatriz é clara: «Se o tio ganhasse, o primeiro que ele fazia era comprar um {1} vermelho.» O Alejandro, o espanhol da mesa, prefere viajar: «Se eu ganhasse, deixava de trabalhar durante um ano e {2} pela América do Sul, só com uma mochila.»", es: "Cada miembro de la familia tiene su sueño. Beatriz es clara: «Si el tío ganara, lo primero que hacía era comprar un descapotable rojo.» Alejandro, el español de la mesa, prefiere viajar: «Si yo ganara, dejaba de trabajar durante un año y viajaba por América del Sur, solo con una mochila.»" },
        { it: "A avó Rosa guarda o seu {3} para o fim: «Eu aplicava o dinheiro e ficava quietinha. Guardava pelo menos {4}.» O tio Fernando ri: «A avó é a única que pensa como um banco!» A conversa acaba quando o {5} sai na televisão: ninguém ganhou, mas a família inteira passou a melhor hora do domingo.", es: "La abuela Rosa guarda su consejo para el final: «Yo invertía el dinero y me quedaba tranquila. Guardaría al menos la mitad.» El tío Fernando ríe: «¡La abuela es la única que piensa como un banco!» La conversación acaba cuando el sorteo sale en la televisión: nadie ganó, pero la familia entera pasó la mejor hora del domingo." },
      ],
      gaps: [
        { options: ["descapotável", "barco", "avião"], answer: 0, why: "El sueño del tío: comprar un descapotable (coche sin techo)." },
        { options: ["viajou", "viajava", "viaja"], answer: 1, why: "Consecuencia de la hipótesis → imperfeito/condicional «viajava» (= viajaría)." },
        { options: ["prémio", "segredo", "conselho"], answer: 2, why: "La abuela guarda su consejo para el final: sabiduría práctica." },
        { options: ["a dívida", "a metade", "a sorte"], answer: 1, why: "«Guardava pelo menos a metade»: guardaría al menos la mitad." },
        { options: ["sorteio", "jogo", "jornal"], answer: 0, why: "Cuando el sorteo sale en televisión: martes y viernes." },
      ],
    },
    {
      id: "cz-pt-b1-03-3", title: "Dois euros para sonhar", titleEs: "Dos euros para soñar", minutes: 3,
      paragraphs: [
        { it: "O Euromilhões chegou a Portugal em 2004 e logo se tornou um jogo {1}. Os sorteios são às terças e às sextas-feiras, e jogar custa pouco mais de dois euros. Muitos portugueses jogam sempre os mesmos números: {2} de família, como aniversários e casamentos.", es: "El Euromilhões llegó a Portugal en 2004 y enseguida se convirtió en un juego nacional. Los sorteos son los martes y los viernes, y jugar cuesta poco más de dos euros. Muchos portugueses juegan siempre los mismos números: fechas familiares, como aniversarios y bodas." },
        { it: "Os sociólogos chamam-lhe «esperança a prestações»: por dois euros compra-se o direito de {3} em voz alta — uma casa na praia, deixar de trabalhar, viajar. Quando sai um prémio grande em Portugal, as conversas de {4} duram semanas. E, como diz a avó Rosa, o verdadeiro prémio não engorda e não custa nada: {5} em conjunto.", es: "Los sociólogos lo llaman «esperanza a plazos»: por dos euros se compra el derecho de soñar en voz alta — una casa en la playa, dejar de trabajar, viajar. Cuando sale un premio grande en Portugal, las conversaciones de café duran semanas. Y, como dice la abuela Rosa, el verdadero premio no engorda y no cuesta nada: soñar en grupo." },
      ],
      gaps: [
        { options: ["proibido", "nacional", "antigo"], answer: 1, why: "Se convirtió en un juego nacional: todo el país juega." },
        { options: ["datas", "números", "letras"], answer: 0, why: "Aniversarios y bodas son fechas familiares → datas." },
        { options: ["trabalhar", "sonhar", "comprar"], answer: 1, why: "«El derecho de soñar en voz alta»: la esperanza a plazos." },
        { options: ["café", "trabalho", "jantar"], answer: 0, why: "Las conversas de café duran semanas: el cotilleo portugués." },
        { options: ["gastar", "jogar", "sonhar"], answer: 2, why: "El verdadero premio es soñar en conjunto, como dice la abuela." },
      ],
    },
  ],

  "pt-cu-b1-04": [
    {
      id: "cz-pt-b1-04-1", title: "Antes de entrar na sala", titleEs: "Antes de entrar a la sala", minutes: 3,
      paragraphs: [
        { it: "O Alejandro chegou quinze minutos antes da entrevista na tecnológica de Lisboa. Na sala de espera, repassou mentalmente tudo o que tinha {1}: estudara o site da empresa, preparara três exemplos concretos e treinara as respostas em voz alta diante do {2}. Quando a Dra. Sónia apareceu, ele já tinha assinado a {3} na receção.", es: "Alejandro llegó quince minutos antes de la entrevista a la tecnológica de Lisboa. En la sala de espera, repasó mentalmente todo lo que había preparado: había estudiado la web de la empresa, había preparado tres ejemplos concretos y había ensayado las respuestas en voz alta frente al espejo. Cuando apareció la Dra. Sónia, él ya había firmado la hoja de presencias en la recepción." },
        { it: "«Já tinhas feito algum {4} antes de te candidatares a este?», perguntou ela. «Sim: no ano passado trabalhei seis meses numa start-up do Porto.» A pergunta seguinte era a que ele mais temia, mas também a que tinha {5} melhor: «Conta-me um desafio concreto.»", es: "«¿Ya habías hecho unas prácticas antes de presentarte a estas?», preguntó ella. «Sí: el año pasado trabajé seis meses en una start-up de Oporto.» La pregunta siguiente era la que más temía, pero también la que había preparado mejor: «Cuéntame un reto concreto.»" },
      ],
      gaps: [
        { options: ["preparado", "comprado", "esquecido"], answer: 0, why: "Estudió, preparó ejemplos, ensayó → todo lo que había preparado." },
        { options: ["professor", "espelho", "chefe"], answer: 1, why: "Ensayar las respuestas en voz alta frente al espejo." },
        { options: ["folha", "conta", "fotografia"], answer: 0, why: "Firmó la hoja de presencias/registro en la recepción." },
        { options: ["estágio", "exame", "jantar"], answer: 0, why: "«Já tinhas feito algum estágio»: unas prácticas, el tema de la unidad." },
        { options: ["adiado", "estudado", "preparado"], answer: 2, why: "La pregunta temida era también la que había preparado mejor." },
      ],
    },
    {
      id: "cz-pt-b1-04-2", title: "O método STAR", titleEs: "El método STAR", minutes: 3,
      paragraphs: [
        { it: "Os recrutadores portugueses adoram perguntas comportamentais: «Conta-me uma vez em que {1} um problema em equipa.» A resposta brilhante segue o método STAR: primeiro a situação, depois a {2}, em seguida a ação e, no fim, o resultado — de preferência com números.", es: "Los reclutadores portugueses adoran las preguntas comportamentales: «Cuéntame una vez en que tuviste un problema en equipo.» La respuesta brillante sigue el método STAR: primero la situación, luego la tarea, después la acción y, al final, el resultado — preferiblemente con números." },
        { it: "O Alejandro contou a história da start-up: «Quando entrei, a equipa já tinha {3} duas soluções e o prazo era curto. A minha tarefa era automatizar os testes. Primeiro reorganizei o planeamento; depois escrevi os testes com um {4}. Entregámos tudo a tempo e os erros desceram 40%.» A Dra. Sónia anotou qualquer coisa e {5}: «É exatamente o tipo de resposta que procuramos.»", es: "Alejandro contó la historia de la start-up: «Cuando entré, el equipo ya había intentado dos soluciones y el plazo era corto. Mi tarea era automatizar los tests. Primero reorganicé la planificación; luego escribí los tests con un colega. Lo entregamos todo a tiempo y los errores bajaron un 40 %.» La Dra. Sónia anotó algo y sonrió: «Es exactamente el tipo de respuesta que buscamos.»" },
      ],
      gaps: [
        { options: ["tiveste", "tens", "terias"], answer: 0, why: "«Uma vez em que tiveste um problema»: perfeito simples de ter (tu)." },
        { options: ["tarefa", "tela", "tarde"], answer: 0, why: "STAR: situação, tarefa, ação, resultado → tarefa." },
        { options: ["tentado", "achado", "vendido"], answer: 0, why: "El equipo ya había intentado dos soluciones → tinha tentado." },
        { options: ["professor", "colega", "cliente"], answer: 1, why: "Escribió los tests con un colega: trabajo en equipo." },
        { options: ["sorriu", "chorou", "saiu"], answer: 0, why: "Anotó algo y sonrió: la reacción positiva del final." },
      ],
    },
    {
      id: "cz-pt-b1-04-3", title: "O primeiro dia na start-up", titleEs: "El primer día en la start-up", minutes: 3,
      paragraphs: [
        { it: "A start-up do Porto ficava num edifício restaurado na Rua das Flores. No primeiro dia, o Alejandro percebeu depressa que sabia pouco: os colegas já tinham {1} o projeto havia dois meses, o sistema era novo e ninguém tinha {2} para o receber — todos corriam de um lado para o outro.", es: "La start-up de Oporto estaba en un edificio restaurado en la Rua das Flores. El primer día, Alejandro se dio cuenta enseguida de que sabía poco: los colegas ya habían empezado el proyecto dos meses antes, el sistema era nuevo y nadie tenía tiempo para recibirlo: todos corrían de un lado para otro." },
        { it: "Ao fim da semana, tudo mudou. Ele tinha estudado o sistema sozinho até tarde e, na sexta-feira, apresentou uma {3} de testes que ninguém tinha pedido. O chefe leu, releu e disse: «Quando chegaste, já tínhamos tentado duas soluções e estava tudo {4}. Isto pode funcionar.» Tinha razão: três meses depois, os erros tinham {5} quase metade.", es: "Al final de la semana, todo cambió. Él había estudiado el sistema solo hasta tarde y, el viernes, presentó una serie de tests que nadie había pedido. El jefe leyó, releyó y dijo: «Cuando llegaste, ya habíamos intentado dos soluciones y todo estaba bloqueado. Esto puede funcionar.» Tenía razón: tres meses después, los errores habían bajado casi la mitad." },
      ],
      gaps: [
        { options: ["acabado", "começado", "vendido"], answer: 1, why: "El proyecto estaba en marcha desde hacía dos meses → tinham começado." },
        { options: ["tempo", "fome", "medo"], answer: 0, why: "Todos corrían de un lado a otro → nadie tenía tiempo." },
        { options: ["série", "festa", "carta"], answer: 0, why: "Presentó una serie de tests: una batería de pruebas." },
        { options: ["bloqueado", "perdido", "cheio"], answer: 0, why: "Dos soluciones intentadas sin éxito → todo estaba bloqueado." },
        { options: ["subido", "custado", "descido"], answer: 2, why: "El resultado positivo: los errores habían bajado casi la mitad." },
      ],
    },
  ],

  "pt-cu-b1-05": [
    {
      id: "cz-pt-b1-05-1", title: "A reserva desaparecida", titleEs: "La reserva desaparecida", minutes: 3,
      paragraphs: [
        { it: "Depois de cinco horas de carro desde Lisboa, o Alejandro chegou ao hotel de Évora ao fim da tarde. Estava cansado e só pensava num {1}. «Boa tarde. Peço desculpa, mas parece que há um problema com a minha reserva», disse ao rececionista, com a voz mais calma possível.", es: "Después de cinco horas de coche desde Lisboa, Alejandro llegó al hotel de Évora al final de la tarde. Estaba cansado y solo pensaba en un baño. «Buenas tardes. Disculpe, pero parece que hay un problema con mi reserva», dijo al recepcionista, con la voz más calmada posible." },
        { it: "«Deixe-me ver… Não aparece {2} no sistema. Que estranho!», respondeu o homem. «Recebi um e-mail de confirmação ontem à {3}. Deveria estar registado», explicou o Alejandro. Dez minutos depois, o mistério resolveu-se: o sistema tinha {4} o registo com outro nome. «Que alívio!», disseram os dois ao mesmo tempo — e o quarto {5} mesmo para o pátio, como pedido.", es: "«Déjeme ver… No aparece nada en el sistema. ¡Qué raro!», respondió el hombre. «Recibí un correo de confirmación ayer por la noche. Debería estar registrado», explicó Alejandro. Diez minutos después, el misterio se resolvió: el sistema había duplicado el registro con otro nombre. «¡Qué alivio!», dijeron los dos a la vez — y la habitación daba precisamente al patio, como pidió." },
      ],
      gaps: [
        { options: ["banho", "jantar", "táxi"], answer: 0, why: "Cansado tras cinco horas de carretera → solo piensa en un baño." },
        { options: ["tudo", "nada", "algo"], answer: 1, why: "«Não aparece nada no sistema»: la reserva desaparecida." },
        { options: ["manhã", "tarde", "noite"], answer: 2, why: "«Ontem à noite»: recibió la confirmación la noche anterior." },
        { options: ["apagado", "impresso", "duplicado"], answer: 2, why: "El sistema había duplicado el registro con otro nombre." },
        { options: ["dava", "negava", "fechava"], answer: 0, why: "«O quarto dava para o pátio»: la habitación daba al patio." },
      ],
    },
    {
      id: "cz-pt-b1-05-2", title: "Deviam ter avisado", titleEs: "Deberían haber avisado", minutes: 2,
      paragraphs: [
        { it: "No dia seguinte, nova deceção: a piscina do hotel estava {1}, coberta de tábuas e placas de obra. «Lamento incomodar, mas ninguém me avisou disto quando reservei», disse o Alejandro. «Deviam ter {2} que a piscina estava fechada. Não acha?»", es: "Al día siguiente, nueva decepción: la piscina del hotel estaba cerrada, cubierta de tablones y carteles de obra. «Lamento molestar, pero nadie me avisó de esto cuando reservé», dijo Alejandro. «Deberían haber avisado de que la piscina estaba cerrada. ¿No le parece?»" },
        { it: "O gerente apareceu com a resposta pronta: «Tem toda a razão. Peço {3} pelo incómodo. A obra atrasou e nós devíamos ter enviado um e-mail a todos os hóspedes.» Como compensação, ofereceram o {4} dos dois dias e um jantar no restaurante do hotel. O Alejandro aceitou com um sorriso: reclamar com {5} tinha funcionado melhor do que gritar.", es: "El gerente apareció con la respuesta lista: «Tiene toda la razón. Pido disculpas por la molestia. La obra se retrasó y nosotros debíamos haber enviado un correo a todos los huéspedes.» Como compensación, ofrecieron el reembolso de los dos días y una cena en el restaurante del hotel. Alejandro aceptó con una sonrisa: reclamar con educación había funcionado mejor que gritar." },
      ],
      gaps: [
        { options: ["fechada", "cheia", "limpa"], answer: 0, why: "Cubierta de tablones y carteles de obra → cerrada." },
        { options: ["avisado", "pedido", "vendido"], answer: 0, why: "«Deviam ter avisado»: deberían haber avisado." },
        { options: ["conta", "desculpa", "saída"], answer: 1, why: "«Peço desculpa pelo incómodo»: la fórmula del gerente." },
        { options: ["reembolso", "pequeno-almoço", "comboio"], answer: 0, why: "Compensación por la piscina: el reembolso de los dos días." },
        { options: ["força", "pressa", "educação"], answer: 2, why: "Reclamar con educación funcionó mejor que gritar: la regla portuguesa." },
      ],
    },
    {
      id: "cz-pt-b1-05-3", title: "O livro de reclamações", titleEs: "El libro de reclamaciones", minutes: 3,
      paragraphs: [
        { it: "Em Portugal, o consumidor tem uma arma silenciosa: o livro de reclamações. Todas as empresas que tratam com o público são {1} por lei a tê-lo — hoje em versão eletrónica. Basta pedir: «Onde está o {2} de reclamações, por favor?», e o estabelecimento deve entregar o formulário sem discussão.", es: "En Portugal, el consumidor tiene un arma silenciosa: el libro de reclamaciones. Todas las empresas que tratan con el público están obligadas por ley a tenerlo — hoy en versión electrónica. Basta pedir: «¿Dónde está el libro de reclamaciones, por favor?», y el establecimiento debe entregar el formulario sin discusión." },
        { it: "A empresa responde por escrito dentro de um prazo {3}; se não o fizer, entram em cena entidades públicas como a ASAE. A regra prática dos portugueses é outra: firmeza nos factos, {4} na forma. Como dizem por aí, «reclamar com educação abre portas; gritar fecha-as» — e o livro de reclamações fica para quando as portas não se {5}.", es: "La empresa responde por escrito dentro de un plazo legal; si no lo hace, entran en escena entidades públicas como la ASAE. La regla práctica de los portugueses es otra: firmeza en los hechos, dulzura en la forma. Como dicen por ahí, «reclamar con educación abre puertas; gritar las cierra» — y el libro de reclamaciones queda para cuando las puertas no se abren." },
      ],
      gaps: [
        { options: ["obrigadas", "livres", "proibidas"], answer: 0, why: "«São obrigadas por lei»: obligadas por ley a tenerlo." },
        { options: ["jornal", "livro", "caderno de notas"], answer: 1, why: "«O livro de reclamações»: la frase mágica del consumidor." },
        { options: ["legal", "curto", "secreto"], answer: 0, why: "Responde dentro de um prazo legal: plazo legal." },
        { options: ["raiva", "voz", "doçura"], answer: 2, why: "«Firmeza nos factos, doçura na forma»: la regla de oro." },
        { options: ["abrem", "fecham", "trancam"], answer: 0, why: "El libro queda para cuando las puertas no se abren." },
      ],
    },
  ],

  "pt-cu-b1-06": [
    {
      id: "cz-pt-b1-06-1", title: "Segunda-feira na cozinha", titleEs: "Lunes en la cocina", minutes: 2,
      paragraphs: [
        { it: "Segunda-feira, nove da manhã, cozinha da empresa no Porto. O Ricardo chega com cara de quem traz novidades: «Ouviste {1}? A nossa empresa vai sair na televisão!» O Alejandro quase deixa cair a {2} na pia. «Não! Quem te disse isso?»", es: "Lunes, nueve de la mañana, cocina de la empresa en Oporto. Ricardo llega con cara de quien trae novedades: «¿Te enteraste? ¡Nuestra empresa va a salir en la televisión!» Alejandro casi deja caer la taza en el fregadero. «¡No! ¿Quién te dijo eso?»" },
        { it: "«A Andreia. Ela disse-me que uma {3} vem amanhã de Lisboa para gravar uma entrevista», explicou o Ricardo. «Contaram-me que ganhámos um prémio de inovação, mas ainda não é oficial.» A notícia espalhou-se num {4}: ao meio-dia, já toda a empresa sabia, e o chefe ainda não tinha dito {5}.", es: "«Andreia. Ella me dijo que una periodista viene mañana de Lisboa para grabar una entrevista», explicó Ricardo. «Me contaron que ganamos un premio de innovación, pero todavía no es oficial.» La noticia se extendió en un instante: al mediodía, ya toda la empresa lo sabía, y el jefe todavía no había dicho nada." },
      ],
      gaps: [
        { options: ["falar", "cantar", "queixar"], answer: 0, why: "«Ouviste falar?»: la pregunta que abre todo cotilleo portugués." },
        { options: ["chave", "tassa", "pasta"], answer: 1, why: "Casi deja caer la taza en el fregadero (sorpresa)." },
        { options: ["professora", "jornalista", "cantora"], answer: 1, why: "Viene de Lisboa a grabar una entrevista → periodista." },
        { options: ["instante", "mês", "comboio"], answer: 0, why: "Se extendió en un instante: como la pólvora." },
        { options: ["nada", "tudo", "adeus"], answer: 0, why: "El jefe aún no había dicho nada: aún no era oficial." },
      ],
    },
    {
      id: "cz-pt-b1-06-2", title: "A cadeia de notícias", titleEs: "La cadena de noticias", minutes: 3,
      paragraphs: [
        { it: "O rumor cresce a cada passagem. A Andreia disse que a jornalista vem amanhã; o Ricardo acrescentou que ela vem de {1}; alguém garantiu que o prémio vale cinquenta mil euros; e, quando a notícia chegou ao último gabinete, a empresa já ia {2} em direto no canal nacional.", es: "El rumor crece en cada pasada. Andreia dijo que la periodista viene mañana; Ricardo añadió que viene de Lisboa; alguien garantizó que el premio vale cincuenta mil euros; y, cuando la noticia llegó al último despacho, la empresa ya iba a salir en directo en el canal nacional." },
        { it: "O Alejandro, prudente, perguntou: «Alguém confirmou? Perguntaste-lhe {3} podemos assistir à entrevista?» O Ricardo respondeu que sim, que tinha perguntado, e que a Andreia dissera que sim, desde que não {4} barulho. No fim do dia, a verdade era mais simples: havia uma jornalista, sim — mas a reportagem só sairia no {5} seguinte.", es: "Alejandro, prudente, preguntó: «¿Alguien confirmó? ¿Le preguntaste si podemos asistir a la entrevista?» Ricardo respondió que sí, que había preguntado, y que Andreia había dicho que sí, siempre que no hiciéramos ruido. Al final del día, la verdad era más simple: había una periodista, sí — pero el reportaje solo saldría al mes siguiente." },
      ],
      gaps: [
        { options: ["Lisboa", "Madrid", "Braga"], answer: 0, why: "La periodista viene de Lisboa: la capital." },
        { options: ["sair", "saiu", "saía"], answer: 0, why: "El rumor exagerado: ya iba a salir en directo (ir + infinitivo)." },
        { options: ["que", "se", "onde"], answer: 1, why: "«Perguntaste-lhe SE podemos assistir»: pregunta sí/no indirecta." },
        { options: ["fizéssemos", "fizemos", "faremos"], answer: 0, why: "«Desde que não fizéssemos barulho»: condición en conjuntivo." },
        { options: ["mês", "dia", "ano"], answer: 0, why: "La verdad: el reportaje saldría al mes siguiente → mês." },
      ],
    },
    {
      id: "cz-pt-b1-06-3", title: "Era verdade, afinal", titleEs: "Era verdad, al fin", minutes: 3,
      paragraphs: [
        { it: "Na terça-feira de manhã, o chefe reuniu a equipa e confirmou tudo: «Quero ser eu a anunciar: ganhámos o {1} de inovação da região Norte. Uma jornalista do Porto vem amanhã entrevistar-nos.» A cozinha tinha {2} certa: só os detalhes estavam errados.", es: "El martes por la mañana, el jefe reunió al equipo y confirmó todo: «Quiero ser yo quien anuncie: ganamos el premio de innovación de la región Norte. Una periodista de Oporto viene mañana a entrevistarnos.» La cocina tenía razón: solo los detalles estaban equivocados." },
        { it: "O Alejandro contou depois aos colegas de Lisboa, por mensagem: «O chefe disse que tínhamos {3} um prémio; avisou-nos para chegarmos cedo; e perguntou se alguém queria {4} à entrevista.» A resposta de Lisboa chegou em segundos: «Parabéns! Onde se pode ver a reportagem?» — «No site do jornal, na semana {5}», respondeu ele, já em discurso indireto profissional.", es: "Alejandro contó después a los colegas de Lisboa, por mensaje: «El jefe dijo que habíamos ganado un premio; nos avisó para que llegáramos temprano; y preguntó si alguien quería asistir a la entrevista.» La respuesta de Lisboa llegó en segundos: «¡Enhorabuena! ¿Dónde se puede ver el reportaje?» — «En la web del periódico, la semana próxima», respondió él, ya en discurso indirecto profesional." },
      ],
      gaps: [
        { options: ["prémio", "castigo", "cliente"], answer: 0, why: "«Ganhámos o prémio de inovação»: el premio de la región Norte." },
        { options: ["razão", "culpa", "pressa"], answer: 0, why: "La cocina tenía razón: solo los detalles estaban equivocados." },
        { options: ["perdido", "ganhado", "recusado"], answer: 1, why: "«O chefe disse que tínhamos ganhado»: backshift a mais-que-perfeito." },
        { options: ["assistir", "comprar", "fugir"], answer: 0, why: "Preguntó si alguien quería asistir a la entrevista." },
        { options: ["passada", "próxima", "primeira"], answer: 1, why: "El reportaje saldría la semana siguiente → a semana próxima." },
      ],
    },
  ],

  "pt-cu-b1-07": [
    {
      id: "cz-pt-b1-07-1", title: "Sábado no armazém", titleEs: "Sábado en el almacén", minutes: 3,
      paragraphs: [
        { it: "Sábado, oito da manhã, armazém do banco alimentar em Braga. O Paulo, coordenador, dá as boas-vindas: «Somos quinze {1} hoje, entre estudantes da universidade do Minho e vizinhos. Antes de começarmos, uma regra: é importante chegarmos cedo às zonas de {2}, porque os camiões não esperam.»", es: "Sábado, ocho de la mañana, almacén del banco alimentar en Braga. Paulo, el coordinador, da la bienvenida: «Somos quince voluntarios hoy, entre estudiantes de la universidad del Minho y vecinos. Antes de empezar, una regla: es importante que lleguemos temprano a las zonas de carga, porque los camiones no esperan.»" },
        { it: "O Alejandro pergunta se pode fotografar tudo para o grupo da faculdade. «Claro», responde o Paulo. «Mas antes de {3} as fotos, pede autorização às pessoas — há regras de {4}.» Ao chegarem os outros voluntários, cada um pede um colete e formam-se as {5} de recolha: três grupos, três supermercados, um objetivo.", es: "Alejandro pregunta si puede fotografiarlo todo para el grupo de la facultad. «Claro», responde Paulo. «Pero antes de publicar las fotos, pide autorización a las personas: hay normas de privacidad.» Al llegar los otros voluntarios, cada uno pide un chaleco y se forman los equipos de recogida: tres grupos, tres supermercados, un objetivo." },
      ],
      gaps: [
        { options: ["professores", "voluntários", "cozinheiros"], answer: 1, why: "Estudiantes y vecinos que ayudan → voluntarios." },
        { options: ["carga", "descanso", "passagem"], answer: 0, why: "Los camiones cargan → zonas de carga." },
        { options: ["publicares", "publicar", "publicamos"], answer: 0, why: "«Antes de publicares»: infinitivo pessoal (tu), la regla del coordinador." },
        { options: ["trânsito", "cocina", "privacidade"], answer: 2, why: "Pedir autorización por las fotos → normas de privacidad." },
        { options: ["equipas", "filas", "aulas"], answer: 0, why: "Cada uno pide un chaleco y se forman los equipos de recogida." },
      ],
    },
    {
      id: "cz-pt-b1-07-2", title: "Duzentos cabazes", titleEs: "Doscientas cestas", minutes: 3,
      paragraphs: [
        { it: "«Hoje temos de preparar duzentos {1} de alimentos», anuncia o Paulo. A matemática é simples: quinze voluntários, duzentas cestas, cinco horas. Primeiro, separar os alimentos por {2}: o que expira logo vai para a frente da fila; o arroz e o azeite aguentam semanas.", es: "«Hoy tenemos que preparar doscientas cestas de alimentos», anuncia Paulo. La matemática es simple: quince voluntarios, doscientas cestas, cinco horas. Primero, separar los alimentos por fecha de caducidad: lo que caduca pronto pasa al frente de la fila; el arroz y el aceite aguantan semanas." },
        { it: "Trouxeram caixas reforçadas para {3} ao fundo do armazém e luvas para todos. «É importante {4} as caixas pela base», avisa a Filipa. Ao meio-dia, o balanço: os voluntários tinham preparado cento e vinte cabazes e ainda tinham {5} para rir — trabalhar em grupo, com regras claras, dá fome e dá boa disposição.", es: "Trajeron cajas reforzadas para apilar al fondo del almacén y guantes para todos. «Es importante levantar las cajas por la base», avisa Filipa. Al mediodía, el balance: los voluntarios habían preparado ciento veinte cestas y todavía tenían ganas de reír — trabajar en grupo, con reglas claras, da hambre y da buen humor." },
      ],
      gaps: [
        { options: ["cabazes", "brinquedos", "livros"], answer: 0, why: "Cestas de alimentos → cabazes, la palabra del banco alimentar." },
        { options: ["cor", "validade", "peso"], answer: 1, why: "Lo que caduca pronto → separar por fecha de validez." },
        { options: ["empilharmos", "empilhamos", "empilhar — nós"], answer: 0, why: "«Caixas para empilharmos»: finalidad + infinitivo pessoal (nós)." },
        { options: ["deitar", "levantar", "empurrar"], answer: 1, why: "Levantar las cajas por la base: seguridad al cargar." },
        { options: ["medo", "pressa", "vontade"], answer: 2, why: "«Tinham vontade para rir»: aún tenían ganas de reír." },
      ],
    },
    {
      id: "cz-pt-b1-07-3", title: "Antes de sairmos", titleEs: "Antes de salir", minutes: 2,
      paragraphs: [
        { it: "Uma da tarde: hora de carregar as carrinhas. «Antes de {1} para os supermercados, verificamos as listas duas vezes», lembra o Paulo. Cada equipa leva um mapa, um carrinho de mão e um {2} para recolher donativos à porta do supermercado.", es: "Una de la tarde: hora de cargar las furgonetas. «Antes de salir hacia los supermercados, verificamos las listas dos veces», recuerda Paulo. Cada equipo lleva un mapa, un carrito de mano y una bolsa para recoger donativos en la puerta del supermercado." },
        { it: "Ao {3} ao supermercado, os voluntários instalam-se à entrada: «Boa tarde! Ajude a encher esta carrinha!» Ao fim de três horas, a carrinha está {4} e a fome dos voluntários também. No regresso, o Paulo agradece: «Antes de nos {5} todos, uma foto de grupo — com autorização de todos, claro!»", es: "Al llegar al supermercado, los voluntarios se instalan en la entrada: «¡Buenas tardes! ¡Ayude a llenar esta furgoneta!» Al cabo de tres horas, la furgoneta está llena y el hambre de los voluntarios también. A la vuelta, Paulo agradece: «¡Antes de separarnos todos, una foto de grupo — con autorización de todos, claro!»" },
      ],
      gaps: [
        { options: ["sairmos", "sair", "saímos"], answer: 0, why: "«Antes de sairmos»: nosotros salimos → infinitivo pessoal -mos." },
        { options: ["sofá", "saco", "sítio"], answer: 1, why: "Para recoger donativos → una bolsa (saco)." },
        { options: ["chegarem", "chegar", "chegado"], answer: 0, why: "«Ao chegarem»: al llegar ellos (el equipo) → infinitivo pessoal -em." },
        { options: ["vazia", "perdida", "cheia"], answer: 2, why: "«Ajude a encher esta carrinha» → al final está llena." },
        { options: ["separarmos", "separar", "separamos"], answer: 0, why: "«Antes de nos separarmos»: antes de separarnos todos → infinitivo pessoal." },
      ],
    },
  ],

  "pt-cu-b1-08": [
    {
      id: "cz-pt-b1-08-1", title: "O carro de aluguer", titleEs: "El coche de alquiler", minutes: 3,
      paragraphs: [
        { it: "O balcão da aluguer de carros em Faro já fechou, mas o Alejandro tem as chaves na mão e o {1} ligado. Ao telefone, o Miguel faz uma lista: «Nas autoestradas tens de pagar {2}; algumas são eletrónicas, sem cabine — pagas nos CTT ou na Multibanco nos dias seguintes.»", es: "El mostrador del alquiler de coches en Faro ya cerró, pero Alejandro tiene las llaves en la mano y el móvil encendido. Al teléfono, Miguel hace una lista: «En las autopistas tienes que pagar peaje; algunas son electrónicas, sin cabina: pagas en los CTT o en el Multibanco en los días siguientes.»" },
        { it: "«E os limites de velocidade?», pergunta o Alejandro. «Cento e vinte na {3}, noventa fora das localidades, cinquenta dentro. E há muitos radares de velocidade {4}, que medem o tempo entre dois pontos.» O Alejandro anota tudo no mapa. A última resposta do amigo é filosófica: «Agora vai com {5}: a estrada não foge.»", es: "«¿Y los límites de velocidad?», pregunta Alejandro. «Ciento veinte en autopista, noventa fuera de las localidades, cincuenta dentro. Y hay muchos radares de velocidad media, que miden el tiempo entre dos puntos.» Alejandro anota todo en el mapa. La última respuesta del amigo es filosófica: «Ahora ve con calma: la carretera no se escapa.»" },
      ],
      gaps: [
        { options: ["telemóvel", "computador", "rádio"], answer: 0, why: "Habla por teléfono con el amigo → el móvil encendido (telemóvel)." },
        { options: ["gasolina", "portagem", "coima"], answer: 1, why: "En las autopistas se paga peaje → portagem." },
        { options: ["cidade", "rotunda", "autoestrada"], answer: 2, why: "Los 120 se refieren a la autopista → autoestrada." },
        { options: ["mínima", "média", "máxima"], answer: 1, why: "Radares de velocidad media: miden el tiempo entre dos puntos." },
        { options: ["calma", "pressa", "fome"], answer: 0, why: "«Vai com calma: a estrada não foge»: el consejo final." },
      ],
    },
    {
      id: "cz-pt-b1-08-2", title: "A portagem eletrónica", titleEs: "El peaje electrónico", minutes: 3,
      paragraphs: [
        { it: "As antigas SCUT — autoestradas «sem custos para o utilizador» — passaram a cobrar {1} eletrónicas: não há cabine, uma câmara lê a matrícula e o condutor paga depois. Quem anda sempre na estrada usa o {2}, o pequeno aparelho do para-brisas que abre as barreiras e desconta o valor automaticamente.", es: "Las antiguas SCUT —autopistas «sin costes para el usuario»— pasaron a cobrar peajes electrónicos: no hay cabina, una cámara lee la matrícula y el conductor paga después. Quien vive en la carretera usa el Via Verde, el pequeño aparato del parabrisas que abre las barreras y descuenta el valor automáticamente." },
        { it: "O turista de aluguer tem de pagar nos dias seguintes: nos {3}, no Multibanco ou online. Se não pagar, a fatura chega a casa — com a {4} ao lado, porque as multas são salgadas. O Miguel avisa o Alejandro: «Guarda o papel do aluguer, paga antes de {5} dias e não penses que a câmara não te viu.»", es: "El turista con coche de alquiler tiene que pagar en los días siguientes: en los CTT, en el Multibanco o online. Si no paga, la factura llega a casa — con la multa al lado, porque las multas son saladas. Miguel avisa a Alejandro: «Guarda el papel del alquiler, paga antes de cinco días y no pienses que la cámara no te vio.»" },
      ],
      gaps: [
        { options: ["propinas", "passes", "portagens"], answer: 2, why: "Cobrar peajes electrónicos → portagens." },
        { options: ["Via Verde", "Multibanco", "PARE"], answer: 0, why: "El aparato del parabrisas que abre barreras: el Via Verde." },
        { options: ["CTT", "GNR", "CP"], answer: 0, why: "Se paga nos CTT (los correos), no Multibanco ou online." },
        { options: ["carta", "multa", "festa"], answer: 1, why: "La factura llega con la multa al lado." },
        { options: ["cinco", "cinquenta", "quinhentos"], answer: 0, why: "Paga antes de cinco días: el plazo típico." },
      ],
    },
    {
      id: "cz-pt-b1-08-3", title: "As regras do jantar", titleEs: "Las reglas de la cena", minutes: 2,
      paragraphs: [
        { it: "«E o álcool? Hoje tenho um {1} de empresa», pergunta o Alejandro. «Zero vírgula cinco em geral; zero vírgula dois nos primeiros três anos de {2}», responde o Miguel. «Se fores jantar, não bebas. É proibido ultrapassar pela {3} e não podes usar o telemóvel ao volante, senão levas uma coima.»", es: "«¿Y el alcohol? Hoy tengo una cena de empresa», pregunta Alejandro. «Cero coma cinco en general; cero coma dos en los primeros tres años de carné», responde Miguel. «Si vas a cenar, no bebas. Está prohibido adelantar por la derecha y no puedes usar el móvil al volante, si no te llevas una multa.»" },
        { it: "«Última pergunta: onde posso estacionar no centro?» «Nas zonas de estacionamento {4} — e nunca em cima do passeio!» O Alejandro despede-se, liga o motor e lembra-se da regra de ouro do condutor português: a pressa é a inimiga da {5}.", es: "«Última pregunta: ¿dónde puedo aparcar en el centro?» «En las zonas de estacionamiento pagado — ¡y nunca encima de la acera!» Alejandro se despide, arranca el motor y recuerda la regla de oro del conductor portugués: las prisas son enemigas del carné." },
      ],
      gaps: [
        { options: ["jantar", "almoço", "casamento"], answer: 0, why: "«Hoje tenho um jantar de empresa»: la cena de empresa." },
        { options: ["escola", "carta", "vida"], answer: 1, why: "Los primeros tres años de carné (de conducir) → carta." },
        { options: ["esquerda", "frente", "direita"], answer: 2, why: "«É proibido ultrapassar pela direita»: adelantar por la derecha." },
        { options: ["livre", "pago", "duplo"], answer: 1, why: "Zonas de estacionamiento pagado en el centro → pago." },
        { options: ["família", "saúde", "carteira"], answer: 2, why: "«A pressa é a inimiga da carteira»: las prisas, enemigas del carné y de la cartera." },
      ],
    },
  ],

  "pt-cu-b1-09": [
    {
      id: "cz-pt-b1-09-1", title: "O podcast que fala de História", titleEs: "El pódcast que habla de Historia", minutes: 2,
      paragraphs: [
        { it: "Cafetaria perto do Chiado, fim de tarde. O Nuno está sem séries para ouvir no comboio e pede {1} ao Alejandro. «Há um podcast que fala de {2} de Portugal e é completamente viciante», responde ele. «Episódios de meia hora, linguagem clara, histórias que parecem romances.»", es: "Cafetería cerca del Chiado, final de la tarde. Nuno se quedó sin series para oír en el tren y pide recomendaciones a Alejandro. «Hay un pódcast que habla de Historia de Portugal y es completamente adictivo», responde él. «Episodios de media hora, lenguaje claro, historias que parecen novelas.»" },
        { it: "A Luísa, que bebe um galão ao {3}, junta-se à conversa: «Eu ouço um de atualidade cujos episódios duram vinte minutos — perfeito para o pequeno-almoço.» «Como se chama?», pergunta o Nuno. «Prefiro não fazer {4}… mas quem procura no nome do {5} encontra-o logo.»", es: "Luísa, que bebe un galão en el mostrador, se une a la conversación: «Yo oigo uno de actualidad cuyos episodios duran veinte minutos: perfecto para el desayuno.» «¿Cómo se llama?», pregunta Nuno. «Prefiero no hacer publicidad… pero quien busca con el nombre del periódico lo encuentra enseguida.»" },
      ],
      gaps: [
        { options: ["recomendações", "desculpas", "dinheiro"], answer: 0, why: "Sin series para el trayecto → pide recomendaciones al amigo." },
        { options: ["receitas", "História", "desporto"], answer: 1, why: "«Que fala de História de Portugal»: el pódcast recomendado." },
        { options: ["balcão", "sofá", "televisão"], answer: 0, why: "Bebe un galão de pie en el mostrador (balcão), como los locales." },
        { options: ["publicidade", "gostos", "planos"], answer: 0, why: "«Prefiro não fazer publicidade»: no quiere hacer publicidad." },
        { options: ["mapa", "comboio", "jornal"], answer: 2, why: "Quien busca con el nombre del periódico lo encuentra enseguida." },
      ],
    },
    {
      id: "cz-pt-b1-09-2", title: "Perguntas duríssimas", titleEs: "Preguntas durísimas", minutes: 3,
      paragraphs: [
        { it: "O Nuno gosta sobretudo de entrevistas: «Adoro a jornalista que conversa com os {1} e faz perguntas duríssimas. Ela não deixa ninguém escapar.» A Luísa concorda: «O estúdio {2} gravam fica mesmo no Porto, sabias? A cidade tem mais estúdios do que parece.»", es: "A Nuno le gustan sobre todo las entrevistas: «Adoro a la periodista que conversa con los invitados y hace preguntas durísimas. No deja escapar a nadie.» Luísa está de acuerdo: «El estudio donde graban está precisamente en Oporto, ¿sabías? La ciudad tiene más estudios de lo que parece.»" },
        { it: "«E a rádio?», pergunta o Alejandro. «A TSF e a Antena 1 põem os {3} online a pedido. Para quem estuda português, ouvir podcasts devagar é uma {4} grátis de sotaque europeu.» O Nuno sorri e guarda o {5} com as recomendações: «Vamos trocar listas no próximo café?»", es: "«¿Y la radio?», pregunta Alejandro. «La TSF y la Antena 1 ponen los archivos online a demanda. Para quien estudia portugués, oír pódcasts despacio es una academia gratis de acento europeo.» Nuno sonríe y guarda el telemóvel con las recomendaciones: «¿Intercambiamos listas en el próximo café?»" },
      ],
      gaps: [
        { options: ["convidados", "estudantes", "fãs"], answer: 0, why: "La periodista conversa con los invitados del programa." },
        { options: ["onde", "que", "cujo"], answer: 0, why: "«O estúdio ONDE gravam»: lugar → onde." },
        { options: ["arquivos", "estúdios", "jornais"], answer: 0, why: "Los archivos de la radio, online a demanda → arquivos." },
        { options: ["multa", "academia", "fábrica"], answer: 1, why: "«Uma academia grátis de sotaque»: escuela gratuita de acento." },
        { options: ["casaco", "mapa", "telemóvel"], answer: 2, why: "Guarda el móvil con las recomendaciones anotadas." },
      ],
    },
    {
      id: "cz-pt-b1-09-3", title: "Vinte minutos só teus", titleEs: "Veinte minutos solo tuyos", minutes: 3,
      paragraphs: [
        { it: "Desde 2018, os podcasts portugueses deixaram de ser nicho e passaram a rotina. Os jornais {1} entraram a sério: atualidade, entrevistas e humor em episódios curtos. Programas de conversa matinal tornaram-se parte do pequeno-almoço de muitos portugueses, como as {2} de nata.", es: "Desde 2018, los pódcasts portugueses dejaron de ser nicho y pasaron a ser rutina. Los diarios digitales entraron en serio: actualidad, entrevistas y humor en episodios cortos. Los programas de conversa matinal se volvieron parte del desayuno de muchos portugueses, como los pasteles de nata." },
        { it: "Para quem estuda a língua, o conselho é prático: começa por episódios {3} sobre temas que já conheces — o cérebro adivinha o resto. O Nuno, que é do Porto, jura que vinte minutos no {4} passam num instante: «É o meu momento do dia em que não faço {5} — só ouço.»", es: "Para quien estudia el idioma, el consejo es práctico: empieza por episodios cortos sobre temas que ya conoces — el cerebro adivina el resto. Nuno, que es de Oporto, jura que veinte minutos en el tren pasan en un instante: «Es mi momento del día en el que no hago nada — solo escucho.»" },
      ],
      gaps: [
        { options: ["digitais", "impressos", "desportivos"], answer: 0, why: "Los diarios digitales entraron en serio en los pódcasts." },
        { options: ["bifanas", "pastéis", "sardinhas"], answer: 1, why: "Parte del desayuno portugués, como los pasteles de nata." },
        { options: ["longos", "silenciosos", "curtos"], answer: 2, why: "«Episódios curtos (15-20 min) sobre temas conocidos»." },
        { options: ["ginásio", "comboio", "estúdio"], answer: 1, why: "Nuno oye pódcasts en el trayecto: en el tren (comboio)." },
        { options: ["nada", "tudo", "festa"], answer: 0, why: "«Não faço nada — só ouço»: su momento de solo escuchar." },
      ],
    },
  ],

  "pt-cu-b1-10": [
    {
      id: "cz-pt-b1-10-1", title: "O contrato de saúde", titleEs: "El contrato de salud", minutes: 3,
      paragraphs: [
        { it: "O Diogo, colega de Matosinhos, propõe um desafio de três meses: correr junto ao mar três vezes por semana, nadar e comer como manda a dieta {1}. «Aceito, com uma condição», responde o Alejandro: «Se eu dormir menos de sete horas, não {2}. O sono vem primeiro.»", es: "Diogo, colega de Matosinhos, propone un reto de tres meses: correr junto al mar tres veces por semana, nadar y comer como manda la dieta mediterránea. «Acepto, con una condición», responde Alejandro: «Si duermo menos de siete horas, no corro. El sueño viene primero.»" },
        { it: "«Justo», diz o Diogo. «E o ginásio novo junto ao {3}? Entram dois pelo preço de um em janeiro.» «Se esperarmos até janeiro, poupamos cinquenta {4} cada um. Vale a pena?» «Vale. A não ser que apareça um desafio melhor, fecho já o plano por escrito.» O contrato fica assinado na ponta de um {5} — o mais sério do mundo.", es: "«Justo», dice Diogo. «¿Y el gimnasio nuevo junto al mercado? Entran dos por el precio de uno en enero.» «Si esperamos hasta enero, ahorramos cincuenta euros cada uno. ¿Vale la pena?» «Vale. A menos que aparezca un reto mejor, cierro ya el plan por escrito.» El contrato queda firmado en la punta de una servilleta — el más serio del mundo." },
      ],
      gaps: [
        { options: ["mediterrânica", "vegetariana", "asiática"], answer: 0, why: "Aceite, pescado y verduras: la dieta mediterránea." },
        { options: ["durmo", "corro", "como"], answer: 1, why: "«Se eu dormir menos de sete horas, não corro»: la condición del corredor." },
        { options: ["aeroporto", "estádio", "mercado"], answer: 2, why: "El gimnasio nuevo junto al mercado de Matosinhos." },
        { options: ["quilómetros", "minutos", "euros"], answer: 2, why: "Ahorrar dinero: cincuenta euros cada uno." },
        { options: ["guardanapo", "contrato", "cartaz"], answer: 0, why: "Firmado en la punta de una servilleta: el gesto espontáneo." },
      ],
    },
    {
      id: "cz-pt-b1-10-2", title: "A não ser que chova", titleEs: "A menos que llueva", minutes: 2,
      paragraphs: [
        { it: "Cinco e meia da manhã em Matosinhos: a marginal ainda está {1} e o cheiro a mar enche tudo. O plano diz «terças, quintas e sábados», e o Alejandro cumpre. A não ser que chova muito ou a piscina esteja {2}, a rotina não se discute: correr até ao farol, voltar, esticar, trabalhar.", es: "Cinco y media de la mañana en Matosinhos: el paseo marítimo todavía está vacío y el olor a mar lo llena todo. El plan dice «martes, jueves y sábados», y Alejandro cumple. A menos que llueva mucho o la piscina esté cerrada, la rutina no se discute: correr hasta el faro, volver, estirar, trabajar." },
        { it: "O Diogo aparece às sextas para acompanhar o {3} do amigo. «Se correres comigo cinco quilómetros sem parar em junho, pago-te o {4}», desafia. O Alejandro ri: «Se tu esperares por mim no farol, aceito!» Aos sábados, o prémio é outro: um {5} na esplanada, olhando as ondas — a recompensa mais portuguesa do mundo.", es: "Diogo aparece los viernes para acompañar el ritmo del amigo. «Si corres conmigo cinco kilómetros sin parar en junio, te pago la cena», desafía. Alejandro ríe: «¡Si tú me esperas en el faro, acepto!» Los sábados, el premio es otro: un galão en la terraza, mirando las olas — la recompensa más portuguesa del mundo." },
      ],
      gaps: [
        { options: ["vazia", "cheia", "fechada"], answer: 0, why: "A las 5:30 de la mañana la marginal está vacía." },
        { options: ["aberta", "fechada", "limpa"], answer: 1, why: "«A não ser que a piscina esteja fechada»: la excepción del plan." },
        { options: ["ritmo", "carro", "cão"], answer: 0, why: "Acompañar el ritmo del amigo corredor." },
        { options: ["emprego", "comboio", "jantar"], answer: 2, why: "«Pago-te o jantar»: la apuesta de junio." },
        { options: ["vinho", "refrigerante", "galão"], answer: 2, why: "La recompensa portuguesa en la esplanada: un galão." },
      ],
    },
    {
      id: "cz-pt-b1-10-3", title: "Três vezes por semana", titleEs: "Tres veces por semana", minutes: 3,
      paragraphs: [
        { it: "Em Matosinhos, a marginal enche-se de corredores ao {1}, todo o ano. Nos últimos anos abriram ginásios de baixo custo em quase todas as cidades, mas o pescado do {2} continua a ser o melhor «suplemento» da região: barato, fresco, grelhado na hora.", es: "En Matosinhos, el paseo marítimo se llena de corredores al amanecer, todo el año. En los últimos años abrieron gimnasios de bajo coste en casi todas las ciudades, pero el pescado del mercado sigue siendo el mejor «suplemento» de la región: barato, fresco, a la plancha en el momento." },
        { it: "Diz-se que o segredo não é o desporto {3}, mas a constância: três vezes por semana, sem falta, com chuva ou sol. E junto ao mar há um extra que nenhum ginásio tem: o ar {4} e o som das ondas. A Meia Maratona de Lisboa move milhares de aficionados que correm «pela medalha e pelo pastel de nata» — o {5} é quase literal.", es: "Se dice que el secreto no es el deporte heroico, sino la constancia: tres veces por semana, sin falta, lloviera o hiciera sol. Y junto al mar hay un extra que ningún gimnasio tiene: el aire salado y el sonido de las olas. La Media Maratón de Lisboa mueve a miles de aficionados que corren «por la medalla y por el pastel de nata» — la broma es casi literal." },
      ],
      gaps: [
        { options: ["amanhecer", "jantar", "meio-dia"], answer: 0, why: "Corredores al amanecer: la hora de la marginal." },
        { options: ["ginásio", "mercado", "restaurante"], answer: 1, why: "El pescado del mercado de Matosinhos: el mejor suplemento." },
        { options: ["heróico", "radical", "competitivo"], answer: 0, why: "«Não é o desporto heróico, mas a constância»: el secreto." },
        { options: ["salgado", "poluído", "frio"], answer: 0, why: "«O ar salgado e o som das ondas»: el extra del mar." },
        { options: ["gracejo", "regra", "mentira"], answer: 0, why: "Correr por la medalla y el pastel: el gracejo (broma) portugués." },
      ],
    },
  ],

  "pt-cu-b1-11": [
    {
      id: "cz-pt-b1-11-1", title: "Antigamente, esta aldeia…", titleEs: "Antiguamente, esta aldea…", minutes: 3,
      paragraphs: [
        { it: "Verão em Trás-os-Montes. O avô Joaquim chega da eira ao fim da tarde, senta-se à porta de casa ao {1} e começa a frase mais portuguesa do mundo: «Antigamente…». O Alejandro senta-se ao lado, e a noite inteira se prepara para ouvir.", es: "Verano en Trás-os-Montes. El abuelo Joaquim llega de la era al final de la tarde, se sienta a la puerta de casa al fresco y empieza la frase más portuguesa del mundo: «Antiguamente…». Alejandro se sienta a su lado, y la noche entera se prepara para escuchar." },
        { it: "«Antigamente esta aldeia era outra coisa. Havia {2} crianças na escola; agora são três. Nós costumávamos ir a pé, três quilómetros, chuva ou {3}. No inverno, cada um levava um feixe de lenha para a sala de aula.» A tia Maria corrige, de dentro de casa: «Ele é romântico! Também havia {4}, miúdo.» O avô ri e continua: «É verdade. Mas era uma vida simples, e éramos {5}.»", es: "«Antiguamente esta aldea era otra cosa. Había cuarenta niños en la escuela; ahora son tres. Nosotros solíamos ir a pie, tres kilómetros, lloviera o hiciera sol. En invierno, cada uno llevaba un haz de leña para el aula.» La tía María corrige, desde dentro de la casa: «¡Él es romántico! También había hambre, chico.» El abuelo ríe y sigue: «Es verdad. Pero era una vida simple, y éramos felices.»" },
      ],
      gaps: [
        { options: ["fresco", "sol", "trabalho"], answer: 0, why: "Sentarse a la puerta al fresco por la tarde: la escena clásica." },
        { options: ["quatro", "quarenta", "quatrocentas"], answer: 1, why: "«Havia quarenta crianças; agora são três»: cuarenta niños." },
        { options: ["neve", "vento", "sol"], answer: 2, why: "«Chuva ou sol»: lloviera o hiciera sol, expresión fija." },
        { options: ["festa", "fortuna", "fome"], answer: 2, why: "La tía corrige el romanticismo: «Também havia fome», también había hambre." },
        { options: ["felizes", "ricos", "livres"], answer: 0, why: "«Era uma vida simples, e éramos felizes»: el final clásico del avô." },
      ],
    },
    {
      id: "cz-pt-b1-11-2", title: "As castanhas da eira", titleEs: "Las castañas de la era", minutes: 3,
      paragraphs: [
        { it: "No outono, a aldeia mudava de cheiro. Apanhávamos {1} no souto, carregávamos os cestos e, ao fim da tarde, acendíamos o forno de {2}. As castanhas assavam devagar, e as crianças faziam fila com as mãos atrás das costas — quem se queimava, esperava a próxima fornada.", es: "En otoño, la aldea cambiaba de olor. Recogíamos castañas en el souto, cargábamos las cestas y, al final de la tarde, encendíamos el horno de leña. Las castañas se asaban despacio, y los niños hacían fila con las manos a la espalda — quien se quemaba, esperaba la siguiente hornada." },
        { it: "A tia Maria conta que a mãe dela {3} o pão todas as semanas no mesmo forno, e que os vizinhos combinavam os dias para não faltar lenha a ninguém. Ao domingo, íamos todos à {4} da meia-noite e, depois, dançava-se na eira até o galo cantar. Hoje o forno continua lá, mas só acende quando os {5} voltam de França e de Lisboa, no verão.", es: "La tía María cuenta que su madre hacía el pan todas las semanas en el mismo horno, y que los vecinos acordaban los días para que no faltara leña a nadie. El domingo, íbamos todos a la misa del medianoche y, después, se bailaba en la era hasta que cantaba el gallo. Hoy el horno sigue allí, pero solo se enciende cuando los nietos vuelven de Francia y de Lisboa, en verano." },
      ],
      gaps: [
        { options: ["laranjas", "castanhas", "azeitonas"], answer: 1, why: "Otoño en Trás-os-Montes: se recogen castañas para asar." },
        { options: ["carvão", "gás", "lenha"], answer: 2, why: "El horno de leña (forno de lenha) de la aldea." },
        { options: ["fazia", "fez", "faria"], answer: 0, why: "Hábito del pasado → imperfeito «fazia» (todas as semanas)." },
        { options: ["missa", "feira", "escola"], answer: 0, why: "«À missa da meia-noite»: la misa del medianoche dominical." },
        { options: ["professores", "netos", "avós"], answer: 1, why: "Los nietos vuelven de Francia y Lisboa en verano." },
      ],
    },
    {
      id: "cz-pt-b1-11-3", title: "Os que partiram", titleEs: "Los que se fueron", minutes: 3,
      paragraphs: [
        { it: "Nos anos sessenta e setenta, meio milhão de portugueses {1}. Muitos saíram destas aldeias de Trás-os-Montes rumo a França, ao Luxemburgo, à Alemanha; outros desceram para Lisboa e para a costa. Ficaram os mais velhos, as casas de {2} e um sentimento a que chamam saudade.", es: "En los años sesenta y setenta, medio millón de portugueses emigró. Muchos salieron de estas aldeas de Trás-os-Montes rumbo a Francia, Luxemburgo, Alemania; otros bajaron a Lisboa y a la costa. Quedaron los mayores, las casas de granito y un sentimiento al que llaman saudade." },
        { it: "O avô Joaquim não partiu: ficou a tratar da terra e dos pais. «Os meus irmãos {3} em França; eu fiquei. Costumava escrever-lhes cartas e esperava a resposta durante semanas.» Hoje a aldeia renasce no {4}: os netos chegam em julho, a eira enche-se de música e o forno acende outra vez. No fim de agosto, a mesma pergunta paira no ar: «Ficas ou {5}?»", es: "El abuelo Joaquim no partió: se quedó a cuidar la tierra y a los padres. «Mis hermanos criaron familia en Francia; yo me quedé. Solía escribirles cartas y esperaba la respuesta durante semanas.» Hoy la aldea renace en verano: los nietos llegan en julio, la era se llena de música y el horno se enciende otra vez. A finales de agosto, la misma pregunta flota en el aire: «¿Te quedas o vuelves?»" },
      ],
      gaps: [
        { options: ["emigrou", "viajou", "morreu"], answer: 0, why: "Éxodo rural: medio millón de portugueses emigró." },
        { options: ["madeira", "granito", "vidro"], answer: 1, why: "Las casas de granito de las aldeas del norte." },
        { options: ["criaram família", "perderam-se", "mudaram de nome"], answer: 0, why: "Los hermanos se fueron a Francia y criaron familia allí." },
        { options: ["inverno", "verão", "Natal"], answer: 1, why: "La aldea renace en verano, cuando vuelven los nietos en julio." },
        { options: ["voltas", "partes", "chegas"], answer: 0, why: "«Ficas ou voltas?»: ¿te quedas o vuelves? La pregunta del final del verano." },
      ],
    },
  ],

  "pt-cu-b1-12": [
    {
      id: "cz-pt-b1-12-1", title: "Três minutos para vencer", titleEs: "Tres minutos para vencer", minutes: 3,
      paragraphs: [
        { it: "Última aula do B1: a professora anuncia o jogo. Cada estudante tem três minutos para «vender» a sua cidade ou {1} à turma — quem convence mais votos ganha. O Alejandro levanta a mão primeiro: «Eu! Na minha opinião, não existe região melhor que a minha — e vou provar-vos {2}.»", es: "Última clase del B1: la profesora anuncia el juego. Cada estudiante tiene tres minutos para «vender» su ciudad o región a la clase — quien convenza más votos gana. Alejandro levanta la mano primero: «¡Yo! En mi opinión, no existe región mejor que la mía, y os lo voy a demostrar.»" },
        { it: "A Inês, colega de turma, faz de advogada do {3}: «Convence-nos! Quais são os teus três argumentos?» «Primeiro, a gastronomia: quem visita prova pratos que não existem em mais nenhum {4}. Além disso, come-se bem por vinte euros. Por fim, as festas: se vieres em junho, danças na rua até às tantas.» A turma aplaude antes de o {5} terminar.", es: "Inês, compañera de clase, hace de abogada del diablo: «¡Convéncenos! ¿Cuáles son tus tres argumentos?» «Primero, la gastronomía: quien visita prueba platos que no existen en ningún otro sitio. Además, se come bien por veinte euros. Por último, las fiestas: si vienes en junio, bailas en la calle hasta las tantas.» La clase aplaude antes de que termine el cronómetro." },
      ],
      gaps: [
        { options: ["região", "escola", "equipa"], answer: 0, why: "«Vender» su ciudad o región: la presentación final." },
        { options: ["nada", "isso", "adeus"], answer: 1, why: "«Vou provar-vos isso»: os lo voy a demostrar." },
        { options: ["anjo", "diabo", "juiz"], answer: 1, why: "Faz de advogada do diabo: la que pone objeciones." },
        { options: ["sítio", "país", "prato"], answer: 0, why: "«Não existem em mais nenhum sítio»: en ningún otro lugar." },
        { options: ["comboio", "cronómetro", "professor"], answer: 1, why: "Aplaude antes de que termine el cronómetro: los tres minutos del juego." },
      ],
    },
    {
      id: "cz-pt-b1-12-2", title: "As objecções da turma", titleEs: "Las objeciones de la clase", minutes: 3,
      paragraphs: [
        { it: "A apresentação perfeita tem quatro tempos: tese, argumentos, {1} e apelo final. Mas a turma não perdoa nada. A Inês ataca: «Pode ser, mas eu odeio {2}. E se eu for em janeiro?» O Alejandro não se perde: «Traz um casaco! Os museus ficam {3}, só para ti — e a cidade vale todas as estações.»", es: "La presentación perfecta tiene cuatro tiempos: tesis, argumentos, conclusión y apelación final. Pero la clase no perdona nada. Inês ataca: «Puede ser, pero yo odio las multitudes. ¿Y si voy en enero?» Alejandro no se pierde: «¡Trae un abrigo! Los museos quedan vacíos, solo para ti — y la ciudad vale todas las estaciones.»" },
        { it: "Outro colega pergunta pelos {4} — «e se não tiver carro?». «Há comboios a todas as horas; e quem chega de comboio não paga estacionamento», responde o Alejandro, citando a sua região de cor. A professora sorri: «Excelente: opinião, argumentos e {5}. Só falta saber: quando vamos?»", es: "Otro compañero pregunta por los transportes — «¿y si no tengo coche?». «Hay trenes a todas horas; y quien llega en tren no paga estacionamiento», responde Alejandro, citando su región de memoria. La profesora sonríe: «Excelente: opinión, argumentos e hipótesis. Solo falta saber: ¿cuándo vamos?»" },
      ],
      gaps: [
        { options: ["consequência", "despedida", "canção"], answer: 0, why: "Tesis, argumentos, consecuencia y apelo: la estructura de cuatro tiempos." },
        { options: ["multidões", "museus", "montanhas"], answer: 0, why: "«Eu odeio multidões»: la objeción contra las fiestas de junio." },
        { options: ["cheios", "fechados", "vazios"], answer: 2, why: "En enero los museos quedan vacíos, solo para ti." },
        { options: ["transportes", "impostos", "bolsas"], answer: 0, why: "«E se não tiver carro?» → pregunta por los transportes." },
        { options: ["gramática", "hipótese", "sorte"], answer: 1, why: "Opinião, argumentos e hipótese: el elogio final de la profesora." },
      ],
    },
    {
      id: "cz-pt-b1-12-3", title: "Quem nasce ali, volta sempre", titleEs: "Quien nace allí, vuelve siempre", minutes: 3,
      paragraphs: [
        { it: "Em Portugal, o orgulho pela {1} é quase um desporto regional: cada região tem o seu traje, as suas festas, a sua comida e, claro, o seu {2}. O Minho gaba-se dos seus verdes; o Alentejo, do pão e do canto; o Porto, da ponte e do vinho.", es: "En Portugal, el orgullo por la tierra es casi un deporte regional: cada región tiene su traje, sus fiestas, su comida y, claro, su acento. El Minho presume de sus verdes; el Alentejo, del pan y del canto; Oporto, del puente y del vino." },
        { it: "As festas dos {3} populares enchem Lisboa e o Porto em junho, com sardinhas assadas e manjericos nas janelas. A apresentação do Alejandro termina com o voto da turma: doze votos de quinze. A frase final é dele e já ninguém a {4}: «É por isso que eu vivo lá: quem nasce ali, {5} sempre.»", es: "Las fiestas de los santos populares llenan Lisboa y Oporto en junio, con sardinas asadas y albahacas en las ventanas. La presentación de Alejandro termina con el voto de la clase: doce votos de quince. La frase final es suya y ya nadie la discute: «Por eso vivo yo allí: quien nace allí, vuelve siempre.»" },
      ],
      gaps: [
        { options: ["terra", "língua", "moeda"], answer: 0, why: "El orgullo pela terra: por la tierra natal." },
        { options: ["hino", "clima", "sotaque"], answer: 2, why: "Traje, fiestas, comida y, claro, su acento (sotaque)." },
        { options: ["santos", "touros", "avós"], answer: 0, why: "As festas dos santos populares: sardinas y albahacas en junio." },
        { options: ["discute", "aplaude", "traduz"], answer: 0, why: "Ya nadie la discute: la frase final convenció a todos." },
        { options: ["parte", "fica", "volta"], answer: 2, why: "«Quem nasce ali, volta sempre»: quien nace allí, vuelve siempre." },
      ],
    },
  ],
};
