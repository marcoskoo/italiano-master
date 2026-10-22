import type { CbGrammarDeep } from "../../extra/grammar-deep";

/* ═══ PT B1 · Grammar deep — 12 unidades ═════════════════════════════
   Explicación amplia de la gramática de cada unidad, con las trampas
   específicas del hispanohablante en portugués europeo. Campos `.it` =
   portugués de Portugal. Secciones: Como funciona / Quando se usa /
   Atenção! (para hispanohablantes) / Na conversa real. */

export const PT_DEEP_B1: Record<string, CbGrammarDeep> = {
  "pt-cu-b1-01": {
    sezioni: [
      { t: "Como funciona", body: "El perfeito composto se forma con ter conjugado (tenho, tens, tem, temos, tendes, têm) + participio invariable: «tenho feito», «tens estudado», «têm ido». El participio nunca concuerda: «tenho visto» vale para eu, tu, ele, eles. Frente a él, el perfeito simples (fiz, estive, fui) cuenta acciones cerradas. La pareja portuguesa NO reparte el trabajo como la española: «he ido» (una vez, hoy) → «fui»; «he ido» (muchas veces, hasta ahora) → «tenho ido»." },
      { t: "Quando se usa", body: "El composto aparece con marcadores de continuidad o repetición: «ultimamente», «este ano», «nas últimas semanas», «muitas vezes» — «Tenho ido muitas vezes a Coimbra este ano». El simples va con momento definido o número cerrado: «Fui em março», «Estive lá duas vezes», «Já estive em Coimbra». Para estados que empezaron en el pasado y siguen, manda el presente: «Moro em Lisboa desde 2019», igual que en español con «desde hace»." },
      { t: "Atenção! (para hispanohablantes)", body: "1) No traduzcas automáticamente «he estado» por «tenho estado»: el compuesto español cuenta experiencias puntuales («he estado dos veces en Coimbra»), y ahí el portugués exige «Já estive duas vezes em Coimbra». 2) «Tenho estado» solo vale si es un hábito continuado: «Tenho estado muito cansado ultimamente» (llevo cansado). 3) El participio es invariable: nunca «tenho feitas» ni «têm idos». 4) Con «desde 2019» el verbo se queda en presente: «moro», nunca «tenho morado» — el composto aquí suena a error." },
      { t: "Na conversa real", body: "El guion de la tertulia de viajes: «Já estiveste em Coimbra?» → «Já estive, sim: fui em março» → «E gostaste?» → «Adorei. A Biblioteca Joanina deixou-me de boca aberta». Cuando alguien repite visitas, sale el composto: «Tenho ido muitas vezes este ano porque a minha prima estuda lá». Y la pregunta que lo abre todo en mayo: «Vais à Queima das Fitas? Tens de ir: é uma semana inteira de concertos e desfiles»." },
    ],
    esempi: [
      { it: "Já estive em Coimbra duas vezes: a última foi em março.", es: "Ya estuve dos veces en Coimbra: la última fue en marzo." },
      { it: "Ultimamente tenho estudado muito para os exames.", es: "Últimamente he estado estudiando mucho para los exámenes." },
      { it: "Este ano tenho feito desporto três vezes por semana.", es: "Este año he estado haciendo deporte tres veces por semana." },
      { it: "Fui à Queima das Fitas em maio e foi incrível.", es: "Fui a la Queima das Fitas en mayo y fue increíble." },
      { it: "Ainda não conheço o Porto, mas tenho pensado ir em junho.", es: "Todavía no conozco Oporto, pero he estado pensando en ir en junio." },
    ],
    usi: [
      { q: "«Este año he viajado mucho (varias veces, hasta hoy)» →", options: ["Este ano viajo muito", "Este ano tenho viajado muito", "Este ano viajei muito"], answer: 1, explain: "Repetición continuada hasta el presente → perfeito composto «tenho viajado»; «viajei» suena a temporada cerrada y «viajo» es hábito presente sin matiz de balance." },
      { q: "«¿Ya has estado en la Biblioteca Joanina? (una visita concreta)» →", options: ["Já tens estado na Biblioteca Joanina?", "Já estiveste na Biblioteca Joanina?", "Já estavas na Biblioteca Joanina?"], answer: 1, explain: "Experiencia puntual que se pregunta una vez → perfeito simples «estiveste»; «tens estado» implicaría visitas repetidas y «estavas» es descripción." },
    ],
  },

  "pt-cu-b1-02": {
    sezioni: [
      { t: "Como funciona", body: "Concordar y discordar rigen «com»: «concordo com a ideia», «discordo dos meus colegas». Las respuestas cortas fijas son «Também eu!» (yo también, tras frase afirmativa) y «Nem eu!» (yo tampoco, tras negativa). Y el debate civilizado tiene su bisagra: «mas», precedido de suavizantes — «Concordo até certo ponto, mas…», «Pode ser, mas…», «Pois… mas» con el pois alargado y una pausa." },
      { t: "Quando se usa", body: "En cualquier conversa de opinión: el café del escritório («Eu adoro o teletrabalho»), la esplanada, la sobremesa familiar. El matiz es el nivel B1: «concordo totalmente», «concordo em parte», «vejo o teu ponto, mas…», «por outro lado…». Discrepar con «Pois… eu não concordo» + una razón es socialmente perfecto en Portugal: se discute la idea, nunca a la persona." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «Concordo» nunca va sin preposición: necesita «com» («concordo com você»), como «estar de acuerdo con». 2) «Yo también no» no existe: la respuesta a una negación compartida es «Nem eu!». 3) «Também eu» solo con el mismo sujeto y frase afirmativa; si el sujeto cambia, se repite el verbo: «Eu também trabalho em casa». 4) Cuidado con el «pois» alargado: «Pois…» (con pausa) suaviza la discordancia; «Pois é!» con entonación descendente concuerda con resignación." },
      { t: "Na conversa real", body: "O debate clássico do café em Lisboa: «O teletrabalho é o futuro!» → «Concordo até certo ponto, mas sinto falta dos colegas» → «Também eu! Mas poupas duas horas de comboio» → «Pode ser. Por outro lado, as reuniões por videochamada cansam» → «Pois é… cada um tem a sua». Se cierra con una sonrisa y nadie pierde: en Portugal, discrepar bien es casi un deporte de equipo." },
    ],
    esempi: [
      { it: "Concordo contigo até certo ponto, mas há outra questão.", es: "Estoy de acuerdo contigo hasta cierto punto, pero hay otra cuestión." },
      { it: "Eu não aguento o comboio lotado de manhã. — Nem eu!", es: "Yo no aguanto el tren abarrotado por la mañana. — ¡Yo tampoco!" },
      { it: "Pode ser, mas prefiro trabalhar com gente à volta.", es: "Puede ser, pero prefiero trabajar con gente alrededor." },
      { it: "Discordo dessa opinião, mas respeito-a muito.", es: "No comparto esa opinión, pero la respeto mucho." },
      { it: "Pois… eu vejo o teu ponto; por outro lado, poupo tempo em casa.", es: "Pues… veo tu punto; por otra parte, ahorro tiempo en casa." },
    ],
    usi: [
      { q: "«Odio madrugar.» — ¿Cómo responde quien tampoco soporta madrugar?", options: ["Também eu!", "Nem eu!", "Pois é!"], answer: 1, explain: "Concordancia con frase negativa → «Nem eu!» (= yo tampoco); «Também eu» responde a una afirmativa y «Pois é» concorda com resignação." },
      { q: "«Estoy de acuerdo con tu propuesta» →", options: ["Concordo a tua proposta", "Concordo de a tua proposta", "Concordo com a tua proposta"], answer: 2, explain: "concordar rige «com»: «concordo com a proposta», como «estar de acuerdo con»." },
    ],
  },

  "pt-cu-b1-03": {
    sezioni: [
      { t: "Como funciona", body: "El imperfeito do conjuntivo se forma a partir del imperfecto de indicativo: se quita la terminación -va y se añade -sse — «tinha → tivesse», «podia → pudesse», «ia → fosse», «estava → estivesse», «fazia → fizesse». La hipótesis irreal se une con «se»: «Se ganhasse o Euromilhões…». La consecuencia lleva condicional (infinitivo + -ia: compraria, viajaria, pagaria) o, en el habla, el propio imperfecto: «comprava», «viajava»." },
      { t: "Quando se usa", body: "Para soñar con lo que no es real: la suerte («E se nos calhasse a nós?»), o tempo («Se tivesse mais tempo, aprenderia alemão»), las condiciones imposibles («Se fosses rico, vinhas cá almoçar todos os domingos»). La pregunta que abre el juego: «O que farias tu se ganhasses dois milhões?». Alternar condicional e imperfecto en la respuesta es perfectamente natural y hasta elegante." },
      { t: "Atenção! (para hispanohablantes)", body: "1) Después de un «se» irreal solo hay formas en -sse: «se ganhasse»; las formas españolas en -ra («si ganara») corresponden en portugués al mais-que-perfeito simples («ganara» = tinha ganado), nunca al conjuntivo. 2) Nunca condicional tras «se»: «Se ganharia» es error de principiante. 3) «Comprava» en la hipótesis irreal no es pasado: es el «compraria» coloquial. 4) «Se me calhar» (si me toca) es la promesa condicional: «se me calhar, levo-a comigo ao Brasil»." },
      { t: "Na conversa real", body: "La sobremesa de domingo en la Alfama: «O Euromilhões está em 60 milhões! E se nos calhasse a nós?» → «Se ganhasses, compravas um descapotável» → «Comprava, sim! E levava-vos todos ao Algarve num hotel de cinco estrelas» → «Se eu ganhasse, deixava de trabalhar durante um ano». La abuela cierra con la mejor hipótesis: «Se fosses rico, vinhas cá almoçar todos os domingos — isso é que era prémio»." },
    ],
    esempi: [
      { it: "Se tivesses um mês de férias, para onde ias?", es: "Si tuvieras un mes de vacaciones, ¿a dónde irías?" },
      { it: "Se eu ganhasse o prémio, pagava a casa dos meus pais.", es: "Si yo ganara el premio, pagaría la casa de mis padres." },
      { it: "Se fosses mais alto, jogavas basquetebol?", es: "Si fueras más alto, ¿jugarías a baloncesto?" },
      { it: "Se pudesses mudar de cidade, escolhias Braga ou o Porto?", es: "Si pudieras cambiar de ciudad, ¿elegirías Braga u Oporto?" },
      { it: "Se me calhasse a sorte grande, oferecia um jantar a toda a gente.", es: "Si me tocara el gran premio, invitaría a cenar a todo el mundo." },
    ],
    usi: [
      { q: "«Si tuviera más tiempo, viajaría más» →", options: ["Se teria mais tempo, viajava mais", "Se tinha mais tempo, viajava mais", "Se tivesse mais tempo, viajava mais"], answer: 2, explain: "Hipótese irreal: «se + tivesse» (imperfeito do conjuntivo); «teria» é condicional (proibido após se) e «tinha» é indicativo de passado." },
      { q: "En la frase «Se ganhasse, comprava uma casa», «comprava» vale por…", options: ["compraba (pasado)", "compraría", "compro"], answer: 1, explain: "Na hipótese irreal coloquial, o imperfeito faz de condicional: «comprava» = «compraria»; é una alternativa natural, no un pasado." },
    ],
  },

  "pt-cu-b1-04": {
    sezioni: [
      { t: "Como funciona", body: "El mais-que-perfeito composto se forma con ter en imperfecto (tinha, tinhas, tinha, tínhamos, tinham) + participio invariable: «tinha feito», «tínhamos tentado», «tinham assinado». Coloca una acción antes de otra acción pasada: «Quando entrei, a equipa já tinha tentado duas soluções». Existe todavía el mais-que-perfeito simples («tentara», «fizera»), literário y formal: reconócelo al leer, usa el compuesto al hablar." },
      { t: "Quando se usa", body: "En narrativas y entrevistas: el contexto previo («Antes da entrevista, tinha estudado toda a informação»), la explicación de un estado pasado («Não me lembrava do nome porque não tinha estudado a empresa»), el flashback del método STAR — situação, tarefa, ação, resultado. Es el «pasado antes del pasado»: exactamente el pluscuamperfecto español, sin sorpresas en la forma." },
      { t: "Atenção! (para hispanohablantes)", body: "1) La forma simple en -ra («tentara») NO es conjuntivo como el «si ganara» español: es mais-que-perfeito de indicativo (= tinha tentado), hoy literário — no la uses en la entrevista. 2) El ter concuerda con el sujeto: «tinha preparado» (eu/ele) vs. «tínhamos preparado» (nós). 3) En discurso indireto, el perfeito retrocede a mais-que-perfeito: «assinou» → «tinha assinado». 4) El participio es invariable: «tinha visto», nunca «tinha vistos»." },
      { t: "Na conversa real", body: "La entrevista de prácticas en la tecnológica de Lisboa: «Já tinhas feito algum estágio antes de te candidatares?» → «Sim, no ano passado trabalhei seis meses numa start-up do Porto» → «Conta-me um desafio» → «Quando entrei, a equipa já tinha tentado duas soluções e o prazo era curto. A minha tarefa era automatizar os testes». El mais-que-perfeito da el escenario, el perfeito simples cuenta tus acciones y el resultado cierra con números: «os erros desceram 40%»." },
    ],
    esempi: [
      { it: "Quando cheguei, o comboio já tinha partido.", es: "Cuando llegué, el tren ya había partido." },
      { it: "Antes da entrevista, tinha preparado três exemplos concretos.", es: "Antes de la entrevista, había preparado tres ejemplos concretos." },
      { it: "Ela disse que nunca tinha visto um estágio tão bem organizado.", es: "Ella dijo que nunca había visto unas prácticas tan bien organizadas." },
      { it: "Tínhamos entregado o projeto antes do prazo.", es: "Habíamos entregado el proyecto antes del plazo." },
      { it: "Não conhecia o Porto porque nunca tinha lá estado.", es: "No conocía Oporto porque nunca había estado allí." },
    ],
    usi: [
      { q: "«Cuando llegamos, el jefe ya había firmado los papeles» → (na conversa)", options: ["Quando chegámos, o chefe já assinava os papéis", "Quando chegámos, o chefe já assinaria os papéis", "Quando chegámos, o chefe já tinha assinado os papéis"], answer: 2, explain: "Ação anterior a outra ação passada → «tinha assinado»; «assinava» é cenário/hábito e «assinaria» é condicional." },
      { q: "Na escrita formal, «Quando chegámos, o comboio já ___. (partir)» pede o mais-que-perfeito simples:", options: ["partira", "partia", "partisse"], answer: 0, explain: "«partira» é o mais-que-perfeito simples (= tinha partido), literário; «partia» é imperfeito e «partisse» é conjuntivo." },
    ],
  },

  "pt-cu-b1-05": {
    sezioni: [
      { t: "Como funciona", body: "La reclamação portuguesa eficaz abre con un suavizante: «Peço desculpa, mas…», «Lamento incomodar, mas…», «Há aqui um pequeno problema…». La crítica del pasado usa «deveria ter + participio»: «Deviam ter avisado» (deberían haber avisado); la variante «podiam ter avisado» es el reproche más suave, muy portugués. Y la pregunta mágica para pedir solución: «Será que podiam verificar…?»." },
      { t: "Quando se usa", body: "En el hotel («Deveria estar registado; recebi um e-mail de confirmação»), en el restaurante, con la compañía aérea. La estructura importa: primero la bondad, después el hecho, al final la petición concreta. Si nada funciona, hay una frase con fuerza de ley: «Onde está o livro de reclamações, por favor?» — en Portugal, pedirla es un derecho del consumidor." },
      { t: "Atenção! (para hispanohablantes)", body: "1) El «ter» nunca desaparece: «deveria ter avisado», nunca «deveria avizado»; es igual al «debería haber avisado», pero el portugués conjuga ter + participio. 2) Empezar con «Isto está mal!» cierra puertas: el suavizante las abre. 3) «Peço desculpa» (eu peço) es la fórmula fija: «peço a desculpa» no existe. 4) Falso amigo a la vista: «esquisito» en portugués significa «raro, extraño», no «exquisito» — un «que esquisito!» del recepcionista no es un elogio al hotel." },
      { t: "Na conversa real", body: "La recepción del hotel de Évora, después de cinco horas de carretera: «Peço desculpa, mas parece que há um problema com a minha reserva» → «Diga-me, por favor. O nome?» → «Ruiz. Reservei um quarto duplo para duas noites» → «Deixe-me ver… não aparece nada. Que estranho!» → «Recebi um e-mail de confirmação ontem à noite. Deveria estar registado». Media hora después: «Ah, aqui está! O sistema tinha duplicado o registo» — y todo se resuelve con un «que alívio!»." },
    ],
    esempi: [
      { it: "Peço desculpa, mas o meu quarto dá para um pátio muito ruidoso.", es: "Disculpe, pero mi habitación da a un patio muy ruidoso." },
      { it: "Deviam ter avisado que a piscina estava fechada.", es: "Deberían haber avisado de que la piscina estaba cerrada." },
      { it: "Lamento incomodar, mas a conta tem um erro.", es: "Lamento molestar, pero la cuenta tiene un error." },
      { it: "Será que podiam verificar a minha reserva, por favor?", es: "¿Podrían verificar mi reserva, por favor?" },
      { it: "O vosso sistema deveria ter guardado o pedido.", es: "Vuestro sistema debería haber guardado la petición." },
    ],
    usi: [
      { q: "«Deberían haber avisado de la obra» →", options: ["Deviam avisado da obra", "Deveriam de avisar da obra", "Deviam ter avisado da obra"], answer: 2, explain: "Crítica do passado: «deviam/deveriam TER + participio (avisado)»; sem o «ter» a frase não existe, e «deveriam de avisar» é calco do español." },
      { q: "La forma más cortés de abrir una queja en la recepción:", options: ["Isto está mal, o quarto não está pronto", "Onde está o gerente?!", "Peço desculpa, mas há um problema com o quarto"], answer: 2, explain: "O suavizante «Peço desculpa, mas…» abre a conversa sem atacar; gritar pelo gerente fecha portas em Portugal." },
    ],
  },

  "pt-cu-b1-06": {
    sezioni: [
      { t: "Como funciona", body: "Las afirmaciones se transmiten com dizer, contar, avisar + que: «A Andreia disse-me que uma jornalista vem amanhã». Las preguntas sí/no llevan «se»: «Perguntou-me se eu tinha visto a notícia»; las preguntas con palabra interrogativa la mantienen: «Quis saber onde eu trabalhava». Órdenes y peticiones usan «para + infinitivo»: «Avisou-nos para chegarmos cedo»." },
      { t: "Quando se usa", body: "Para contar rumores y noticias («Ouviste falar? Contaram-me que…»), resumir conversas, repetir instrucciones. El backshift es el motor: presente → imperfeito («vem» → «vinha»), perfeito → mais-que-perfeito («assinou» → «tinha assinado»). Pero si la información sigue vigente, el presente se queda: «Disse-me que a jornalista vem amanhã» (y sigue siendo verdad)." },
      { t: "Atenção! (para hispanohablantes)", body: "1) El pronombre va detrás en pt-PT: «disse-me», «perguntou-lhe» — «me disse» suena a brasileñismo. 2) El «si» español de las preguntas indirectas es «se»: «perguntou SE eu ia». 3) No olvides el backshift: «Vou sair mais cedo» → «Disse que IA sair mais cedo». 4) Las órdenes no usan «que + conjuntivo» como el español «que venga»: usan «para + infinitivo (pessoal)» — «Disse-me para ir no dia seguinte»." },
      { t: "Na conversa real", body: "La cocina de la empresa, lunes en Oporto: «Ouviste falar? A nossa empresa vai sair na televisão!» → «Quem te disse isso?» → «A Andreia. Disse-me que uma jornalista vem amanhã de Lisboa» → «Perguntaste-lhe se podemos assistir à entrevista?» → «Perguntei. Ela respondeu que sim, desde que não façamos barulho». En tres frases, la noticia recorrió el edificio entero — el cotilleo matinal es más rápido que cualquier periódico." },
    ],
    esempi: [
      { it: "O Ricardo disse-me que a reunião começava às dez.", es: "Ricardo me dijo que la reunión empezaba a las diez." },
      { it: "Ela perguntou-me se eu tinha visto o e-mail.", es: "Ella me preguntó si yo había visto el correo." },
      { it: "Perguntou-nos onde almoçávamos normalmente.", es: "Nos preguntó dónde almorzábamos normalmente." },
      { it: "O chefe avisou-nos para chegarmos quinze minutos antes.", es: "El jefe nos avisó de que llegáramos quince minutos antes." },
      { it: "Contaram-me que a empresa ganhou um prémio de inovação.", es: "Me contaron que la empresa ganó un premio de innovación." },
    ],
    usi: [
      { q: "«¿Viste la noticia?» → Ele perguntou-me…", options: ["onde eu vi a notícia", "se eu via a notícia", "se eu tinha visto a notícia"], answer: 2, explain: "Pergunta sim/não com «se» + backshift: o perfeito «viste» recua para «tinha visto»; «via» seria o presente «ves»." },
      { q: "«Ven mañana» (ordem) → Ele disse-me…", options: ["que venha amanhã", "para ir no dia seguinte", "para vou amanhã"], answer: 1, explain: "As ordens em discurso indireto usam «para + infinitivo»: «disse-me para ir»; «que venha» é o calco do español «que venga»." },
    ],
  },

  "pt-cu-b1-07": {
    sezioni: [
      { t: "Como funciona", body: "El infinitivo portugués se conjuga: falar (eu), falares (tu), falar (ele), falarmos (nós), falarem (eles). Las desinencias -es, -mos, -em marcan el sujeto del infinitivo cuando es diferente o necesita relieve: «É importante chegarmos cedo» (= que nós cheguemos), «Ao chegarem, pedem um colete» (= al llegar ellos). El infinitivo impessoal, sin desinencia, sirve cuando el sujeto es el mismo de la frase principal o es genérico." },
      { t: "Quando se usa", body: "Los tres detonantes clásicos: preposiciones («antes de sairmos», «depois de empilharem», «ao chegarem os outros»), finalidad con «para» («caixas para empilharmos ao fundo») y «pedir para» («pediu para ajudarmos»). En cualquier coordinación de grupo — voluntariado, trabajo en equipo, mudanza — el infinitivo pessoal dice quién hace qué." },
      { t: "Atenção! (para hispanohablantes)", body: "1) El español no tiene infinitivo conjugado: traduce con «que + subjuntivo» («antes de que salgamos») o con «al + infinitivo» — la flexión portuguesa es una pieza única. 2) Si el sujeto del infinitivo es el mismo de la principal, queda impessoal: «Antes de sair, lavou as mãos» (ele). 3) La forma «nós» se oye «chegarmosh» /-muʃ/: no la cortes, es la marca del sujeto. 4) «É importante chegarmos» ≠ «É importante chegar»: la segunda es consejo general para cualquiera, la primera habla de nosotros." },
      { t: "Na conversa real", body: "El coordinador del banco alimentar en Braga: «Hoje temos de preparar duzentos cabazes. É importante chegarmos cedo às zonas de carga» → «Ao chegarem os outros voluntários, pedem-me um colete e formam-se as equipas» → «Antes de sairmos para os supermercados, temos de carregar as carrinhas» → «E antes de publicares as fotos, pede autorização às pessoas». Todo organizado con infinitivos conjugados: quién hace qué, sin ambigüedad." },
    ],
    esempi: [
      { it: "É importante chegarmos a tempo à zona de carga.", es: "Es importante que lleguemos a tiempo a la zona de carga." },
      { it: "Ao chegarem os outros, formam-se as equipas de recolha.", es: "Al llegar los otros, se forman los equipos de recogida." },
      { it: "Trouxemos luvas para empilharmos as caixas ao fundo.", es: "Trajimos guantes para que apilemos las cajas al fondo." },
      { it: "Antes de sairmos, verificamos todas as portas.", es: "Antes de salir, verificamos todas las puertas." },
      { it: "O Paulo pediu para ajudarmos na recolha.", es: "Paulo pidió que ayudáramos en la recogida." },
    ],
    usi: [
      { q: "«Trajeron cajas para que (nós) apilemos ao fundo» →", options: ["Trouxeram caixas para empilharmos ao fundo", "Trouxeram caixas para empilhávamos ao fundo", "Trouxeram caixas para empilhar ao fundo — referindo-se a nós"], answer: 0, explain: "Sujeito nós marcado no infinitivo → «empilharmos»; «empilhávamos» é indicativo e a forma impessoal não marca o sujeito." },
      { q: "«Antes de salir, él lavó las manos» (o mesmo sujeito) →", options: ["Antes de sairmos, lavou as mãos", "Antes de sair, lavou as mãos", "Antes de sair, lavámos as mãos"], answer: 1, explain: "Sujeito único (ele): infinitivo impessoal «sair»; «sairmos» marcaria nós como sujeito do infinitivo e «lavámos» mudaria o sujeito principal." },
    ],
  },

  "pt-cu-b1-08": {
    sezioni: [
      { t: "Como funciona", body: "La obligación estándar del pt-PT es «ter de + infinitivo»: «tens de pagar portagem», «temos de respeitar o limite». La prohibición práctica: «não podes usar o telemóvel ao volante»; las normas de tablero: «É proibido + infinitivo» («É proibido ultrapassar pela direita») y «É obrigatório» («É obrigatório usar o cinto»). «Dever» añade norma o consejo fuerte: «deves descansar a cada duas horas»." },
      { t: "Quando se usa", body: "En las reglas de la carretera (límites 120/90/50, peajes electrónicos, radares de velocidad media, tasa de alcohol 0,5 — y 0,2 en los primeros tres años de carné), en las normas de casa, en las instrucciones de trabajo. «É proibido» y «é obrigatório» van seguidos de infinitivo impessoal, exactamente como «está prohibido» y «es obligatorio» en español." },
      { t: "Atenção! (para hispanohablantes)", body: "1) En Portugal se prefiere «ter de» a «ter que»: usa «ter de» en el habla y en la escrita culta. 2) La negación va antes del verbo: «não podes estacionar»; «podes não estacionar» significaría «puedes no aparcar», otra cosa. 3) «Obrigatório» (adjetivo de norma) vs. «obrigado» (agradecimiento): «É obrigatório usar o cinto», nunca «é obrigado usar». 4) La señal de stop portuguesa se escribe «PARE» — e «levar uma coima» es recibir una multa, no llevarla de recuerdo." },
      { t: "Na conversa real", body: "La llamada antes de arrancar en Faro: «Nas autoestradas tens de pagar portagem; algumas são eletrónicas, sem cabine» → «E se eu não pagar?» → «A fatura chega a casa, com a multa ao lado — as multas são salgadas» → «E o telemóvel?» → «Só com sistema mãos-livres, senão levas uma coima» → «Percebido» → «Agora vai com calma: a estrada não foge». Un amigo que explica las reglas vale por diez señales." },
    ],
    esempi: [
      { it: "Nas autoestradas tens de respeitar o limite de cento e vinte.", es: "En las autopistas tienes que respetar el límite de ciento veinte." },
      { it: "É proibido ultrapassar pela direita.", es: "Está prohibido adelantar por la derecha." },
      { it: "É obrigatório usar o cinto, também nos bancos de trás.", es: "Es obligatorio usar el cinturón, también en los asientos de atrás." },
      { it: "Não podes estacionar em cima do passeio no centro.", es: "No puedes aparcar encima de la acera en el centro." },
      { it: "Se passares numa portagem eletrónica, paga nos dias seguintes.", es: "Si pasas por un peaje electrónico, paga en los días siguientes." },
    ],
    usi: [
      { q: "«Es obligatorio llevar el chaleco reflectante» →", options: ["É obrigado levar o colete refletor", "É obrigatório levar o colete refletor", "É obrigação levar o colete refletor"], answer: 1, explain: "«obrigatório» é o adjetivo de norma («é obrigatório + infinitivo»); «obrigado» é o agradecimento e «obrigação» é o substantivo: não encaixam na estrutura." },
      { q: "La frase correcta para una prohibición práctica:", options: ["Podes não usar o telemóvel ao volante", "Não podes a usar o telemóvel ao volante", "Não podes usar o telemóvel ao volante"], answer: 2, explain: "A negação vem antes do verbo: «não podes + infinitivo»; «podes não usar» diria «puedes no usar» y o infinitivo nunca leva «a» aqui." },
    ],
  },

  "pt-cu-b1-09": {
    sezioni: [
      { t: "Como funciona", body: "«Que» es la llave maestra: sirve para cosas y personas, como sujeto o complemento — «um podcast que fala de História», «a jornalista que faz as perguntas». «Onde» es para lugares («o estúdio onde gravam»), «quem» es el «quien» sin antecedente («quem procura, encontra») y «cujo/cuja/cujos/cujas» expresa posesión: «um podcast cujos episódios duram vinte minutos»." },
      { t: "Quando se usa", body: "Para definir y recomendar: «É um programa que vale a pena», «a cidade onde nasci», «a apresentadora cujo programa ouço todas as manhãs». Con preposición, el portugués culto usa «quem» u «o qual»: «a pessoa de quem falo», «o tema sobre o qual discutimos»; en el habla corriente se reorganiza la frase y se deja todo con «que»." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «Cujo» nunca lleva artículo ni posesivo después — el error clásico es «cujo o seu episódio»; lo correcto: «cujo episódio», «cujos episódios». 2) Concuerda con lo poseído, no con el poseedor: «a autora cujoS livroS…». 3) El «donde» español es «onde» portugués: «a casa onde moro». 4) «Em que» = «en el que»: «um programa em que se fala de política» — mucho más común que «no qual» en el habla." },
      { t: "Na conversa real", body: "El café cerca del Chiado: «Há um podcast que fala de História de Portugal e é completamente viciante» → «Eu ouço um de atualidade cujos episódios duram vinte minutos — perfeito para o pequeno-almoço» → «Como se chama?» → «Prefiro não fazer publicidade… mas quem procura no nome do jornal encontra-o logo» → «O estúdio onde gravam fica mesmo no Porto, sabias?». Recomendar con relativas es el deporte local." },
    ],
    esempi: [
      { it: "Este é o podcast que ouço todas as manhãs.", es: "Este es el pódcast que escucho todas las mañanas." },
      { it: "O estúdio onde gravam fica no Porto.", es: "El estudio donde graban está en Oporto." },
      { it: "Quem gosta de histórias reais vai adorar este programa.", es: "Quien guste de historias reales va a adorar este programa." },
      { it: "É um programa cujos episódios duram apenas quinze minutos.", es: "Es un programa cuyos episodios duran solo quince minutos." },
      { it: "A jornalista que entrevista os convidados faz perguntas duríssimas.", es: "La periodista que entrevista a los invitados hace preguntas durísimas." },
    ],
    usi: [
      { q: "«Es un programa ___ episodios duran veinte minutos» →", options: ["cujo os episódios", "que os episódios", "cujos episódios"], answer: 2, explain: "Posse: «cujoS» concorda com o possuído (episódios) e nunca leva artículo — «cujo os» é o erro clássico." },
      { q: "«Quien busca, encuentra» →", options: ["Que procura, encontra", "Onde procura, encontra", "Quem procura, encontra"], answer: 2, explain: "«Quem» é o relativo sem antecedente para pessoas (= quien); «que» precisaria de antecedente e «onde» é só para lugares." },
    ],
  },

  "pt-cu-b1-10": {
    sezioni: [
      { t: "Como funciona", body: "El futuro do conjuntivo tiene formas iguales al infinitivo pessoal: se eu dormir, se tu correres, se ele partir, se nós esperarmos, se eles pagarem. Es la forma propia para condiciones reales de futuro: «Se correres cinco quilómetros, pago-te o jantar». La consecuencia lleva futuro o presente: «se esperarmos até janeiro, poupamos cinquenta euros»." },
      { t: "Quando se usa", body: "En promesas y apuestas («Se treinares, vais ver resultados»), planes con condiciones («se eu dormir menos de sete horas, não corro»), excepciones com «a não ser que + presente do conjuntivo» («a não ser que a piscina esteja fechada»). Para condiciones generales que valen siempre, sirve el presente de indicativo: «se chove, levo guarda-chuva»." },
      { t: "Atenção! (para hispanohablantes)", body: "1) El español prohíbe el futuro después de «si» («si tendré» es imposible) y usa el presente; el portugués tiene, precisamente ahí, el futuro do conjuntivo: «se eu tiver tempo, telefono-te». 2) No lo confundas com «se calhar» (= tal vez, quizás): «se calhar chove» es una suposición en presente. 3) «A não ser que» pide conjuntivo presente: «a não ser que chova». 4) La negación se repite antes de cada verbo: «Se não correres, não melhoras»." },
      { t: "Na conversa real", body: "El plan de salud en Matosinhos: «Ora, o plano: correr junto ao mar três vezes por semana. Aceitas?» → «Aceito, com uma condição: se eu dormir menos de sete horas, não corro» → «Justo. Se esperarmos até janeiro, poupamos cinquenta euros cada um» → «Vale. A não ser que apareça um desafio melhor, fecho já o plano por escrito» → «Fechado! E em junho, se correres cinco quilómetros sem parar, pago-te o jantar»." },
    ],
    esempi: [
      { it: "Se treinares três vezes por semana, vais ver resultados.", es: "Si entrenas tres veces por semana, vas a ver resultados." },
      { it: "Se esperarmos pela promoção, poupamos dinheiro.", es: "Si esperamos la promoción, ahorramos dinero." },
      { it: "Vou correr amanhã, a não ser que chova muito.", es: "Voy a correr mañana, a menos que llueva mucho." },
      { it: "Se eu dormir bem esta noite, treino contigo de manhã.", es: "Si duermo bien esta noche, entreno contigo por la mañana." },
      { it: "A não ser que a piscina esteja fechada, nado terças e quintas.", es: "A menos que la piscina esté cerrada, nado martes y jueves." },
    ],
    usi: [
      { q: "«Si comes así todo el verano, ganarás dos kilos» →", options: ["Se comeres assim todo o verão, ganharás dois quilos", "Se comer assim todo o verão, ganharias dois quilos", "Se comias assim todo o verão, ganhas dois quilos"], answer: 0, explain: "Condição real de futuro: «se + comeres» (futuro do conjuntivo, tu) + «ganharás» (futuro); as outras misturam tempos que não encaixam." },
      { q: "«Voy a nadar, ___ esté cerrada la piscina» (excepción):", options: ["se calhar", "a não ser que", "porque"], answer: 1, explain: "«A não ser que + presente do conjuntivo (esteja)» é a exceção; «se calhar» é «quizás» e «porque» exprime causa." },
    ],
  },

  "pt-cu-b1-11": {
    sezioni: [
      { t: "Como funciona", body: "Los hábitos del pasado tienen dos vías: «costumava + infinitivo» (solía + infinitivo) — «costumava ir a pé para a escola» — o simplemente el imperfecto: «íamos todos juntos», «apanhávamos castanhas». El imperfeito regular termina en -ava (1.ª conjugación) y -ia (2.ª y 3.ª): «falava», «comia», «partia»; irregulares essenciais: era, tinha, ia, estava, fazia, havia, podia." },
      { t: "Quando se usa", body: "Con los marcadores de la memoria: antigamente, dantes, naquela época, todos os dias, no inverno. El contraste com el perfeito simples es la clave: «Íamos ao rio todos os domingos» (hábito) vs. «Num domingo especial, fomos ao rio» (uma vez). Las descripciones — la escuela, la aldea, las personas — viven en el imperfeito: «havia quarenta crianças», «a aldeia vivia do campo»." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «Costumava» nunca lleva preposición: «costumava ir», no «costumava a ir» — el error típico por analogía con el español. 2) No lo confundas com «acostumar-se a» (acostumbrarse a): «acostumei-me a acordar cedo» es otra idea. 3) «Haver» impersonal es invariable: «havia quarenta crianças», nunca «haviam». 4) «Dantes» (antes, en el pasado) es palabra viva en Portugal — no es un error, es oro léxico del abuelo." },
      { t: "Na conversa real", body: "El abuelo a la puerta de la casa, al fresco: «Antigamente esta aldeia era outra coisa. Havia quarenta crianças na escola; agora são três» → «E tu, avô?» → «Costumava ir a pé para a escola: três quilómetros, chuva ou sol. No inverno, cada um levava um feixe de lenha para a sala» → «E ao fim de semana?» → «No verão íamos nadar ao rio; no outono apanhávamos castanhas para assar na eira»." },
    ],
    esempi: [
      { it: "Antigamente costumava ir a pé para a escola.", es: "Antiguamente solía ir a pie a la escuela." },
      { it: "No inverno, levávamos lenha para a sala de aula.", es: "En invierno, llevábamos leña para el aula." },
      { it: "Dantes havia quarenta crianças na aldeia.", es: "Antes había cuarenta niños en la aldea." },
      { it: "Um domingo, fomos todos nadar ao rio.", es: "Un domingo, fuimos todos a nadar al río." },
      { it: "A minha avó fazia o pão no forno de lenha todas as semanas.", es: "Mi abuela hacía el pan en el horno de leña todas las semanas." },
    ],
    usi: [
      { q: "«Mi padre ___ contar historias al fresco» (hábito del pasado) →", options: ["costumava a contar histórias ao fresco", "costuma contar histórias ao fresco", "costumava contar histórias ao fresco"], answer: 2, explain: "«costumava + infinitivo», sem preposição, é o hábito del pasado; «costumava a» é o erro clássico e «costuma» é o hábito presente." },
      { q: "La frase que cuenta un HÁBITO (no una acción única):", options: ["Fomos todos ao rio num domingo especial", "Íamos todos ao rio ao domingo", "Um dia fomos todos ao rio"], answer: 1, explain: "O hábito pede imperfeito «íamos»; «fomos» marca ações únicas e fechadas de um dia concreto." },
    ],
  },

  "pt-cu-b1-12": {
    sezioni: [
      { t: "Como funciona", body: "La apresentação persuasiva tiene cuatro tiempos: tesis («Na minha opinião…», «Para mim…»), argumentos ordenados («primeiro… além disso… por fim…»), consecuencia («por isso», «é por isso que…») y apelación final con imperativo tu — en Portugal, «vem», «experimenta», «visita» son la forma cariñosa de invitar: «Vem visitar!»." },
      { t: "Quando se usa", body: "Para defender una ciudad, un producto, una idea: tres minutos con estructura valen más que diez de improvisación. El B1 entero cabe en una apresentação: opinión («na minha opinião»), hipótesis real («se vieres em junho…»), relativa («quem visita prova pratos que…»), pasado («quando estive lá…») y consecuencia («é por isso que…»)." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «Además» es «além disso»: para añadir argumentos usa «além disso»; «além de + infinitivo» es «además de». 2) «Por isso» va delante del verbo y «é por isso que» introduce la conclusión: «É por isso que eu vivo lá». 3) Las objeciones se responden, no se ignoran: «Pode ser, mas…», «É verdade que…, no entanto…», «Vejo o teu ponto, mas…». 4) El imperativo tu de «vir» es «vem» (nunca «ven»): «Vem visitar!»." },
      { t: "Na conversa real", body: "La última clase del B1: «Vende-me a tua cidade». El candidato se levanta: «Na minha opinião, não existe região melhor que a minha — e vou provar-vos isso. Primeiro, a gastronomia: quem visita prova pratos que não existem em mais nenhum sítio. Além disso, come-se bem por vinte euros. Por fim, as festas: se vieres em junho, danças na rua até às tantas» → «Pode ser, mas eu odeio multidões» → «Traz um casaco! Os museus ficam vazios, só para ti». Votos garantidos." },
    ],
    esempi: [
      { it: "Na minha opinião, esta é a melhor região do país.", es: "En mi opinión, esta es la mejor región del país." },
      { it: "Primeiro a gastronomia; além disso, os preços são justos; por fim, as festas.", es: "Primero la gastronomía; además, los precios son justos; por último, las fiestas." },
      { it: "É por isso que recomendo esta cidade a toda a gente.", es: "Por eso recomiendo esta ciudad a todo el mundo." },
      { it: "Pode ser, mas os museus de inverno ficam vazios.", es: "Puede ser, pero los museos en invierno quedan vacíos." },
      { it: "Vem visitar em junho: danças na rua até às tantas.", es: "Ven a visitar en junio: bailas en la calle hasta las tantas." },
    ],
    usi: [
      { q: "El conector que añade un segundo argumento en la apresentação:", options: ["por fim", "por isso", "além disso"], answer: 2, explain: "«Além disso» acrescenta um argumento («además»); «por fim» fecha a lista e «por isso» tira a consequência." },
      { q: "«Ven a conocer mi ciudad» (imperativo tu) →", options: ["Ven conhecer a minha cidade", "Vai conhecer a minha cidade", "Vem conhecer a minha cidade"], answer: 2, explain: "O imperativo tu de «vir» é «vem»; «ven» não existe em português e «vai» é o imperativo de «ir» (para ele/ela ou você)." },
    ],
  },
};
