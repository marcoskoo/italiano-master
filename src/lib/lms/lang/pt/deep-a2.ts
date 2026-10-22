import type { CbGrammarDeep } from "../../extra/grammar-deep";

/* ═══ PT A2 · Grammar deep — 12 unidades ═════════════════════════════
   Explicación amplia de la gramática de cada unidad, con las trampas
   específicas del hispanohablante en portugués europeo. Campos `.it` =
   portugués de Portugal. Secciones: Como funciona / Quando se usa /
   Atenção! (para hispanohablantes) / Na conversa real. */

export const PT_DEEP_A2: Record<string, CbGrammarDeep> = {
  "pt-cu-a2-01": {
    sezioni: [
      { t: "Como funciona", body: "El pretérito perfeito simple es el pariente directo del indefinido español: falei, falaste, falou, falámos, falaram; comi, comeste, comeu, comemos, comeram. La 1ª persona acaba en -i («comprei», «fiquei») y la 3ª en -ou («ficou»). En Portugal, la forma de «nós» lleva circunflejo para distinguirse del presente: «falámos» (pasado) frente a «falamos» (presente)." },
      { t: "Quando se usa", body: "Sirve para acciones terminadas, con principio y fin: contar el fin de semana («Fui a Sintra», «Vimos o Palácio da Pena»), lo que hiciste ayer («Fiz um bolo») o la semana pasada («Tive uma semana calma»). Marcadores típicos: ontem, no sábado, no domingo, na semana passada. La pregunta que abre todo lunes portugués es «Como foi o fim de semana?»." },
      { t: "Atenção! (para hispanohablantes)", body: "1) Los irregulares cambian de vocal: «estuve» → «estive», «hice» → «fiz», «tuve» → «tive», «dije» → «disse»; memorízalos en bloque: fui/foste/foi/fomos/foram, tive/tiveste/teve, fiz/fizeste/fez, vi/viste/viu, estive/esteve, fiquei/ficaste/ficou. 2) Nunca traduzcas el perfecto compuesto español: «he ido a Sintra» → «fui a Sintra» (el «tenho ido» portugués es para acciones repetidas, no lo uses aquí). 3) No olvides el circunflejo de «falámos»/«almoçámos» en pt-PT: sin él, lees presente." },
      { t: "Na conversa real", body: "El guion del lunes en la oficina: «Então, como foi o fim de semana?» → «Foi ótimo! Fui a Sintra com a Marta» → «E o que visitaram?» → «Primeiro o Palácio da Pena; depois almoçámos numa tasca». Para reaccionar, los portugueses encadenan «A sério?», «Que fixe!», «Que sorte tiveste!». Y para devolver la pregunta: «E tu, o que fizeste?»." },
    ],
    esempi: [
      { it: "No sábado fui ao mercado e comprei fruta para a semana.", es: "El sábado fui al mercado y compré fruta para la semana." },
      { it: "Tive um domingo muito calmo: fiquei em casa a ler.", es: "Tuve un domingo muy tranquilo: me quedé en casa leyendo." },
      { it: "Vimos um concerto de fado na Alfama.", es: "Vimos un concierto de fado en la Alfama." },
      { it: "Fiz um bolo de laranja para os meus pais.", es: "Hice un pastel de naranja para mis padres." },
      { it: "Eles foram ao Estádio da Luz ver o jogo do Benfica.", es: "Ellos fueron al Estádio da Luz a ver el partido del Benfica." },
    ],
    usi: [
      { q: "«El domingo me quedé en casa» →", options: ["No domingo fiquei em casa", "No domingo ficava em casa", "No domingo fico em casa"], answer: 0, explain: "Acción terminada y fechada: pretérito perfeito simples «fiquei»." },
      { q: "«Ayer hablamos con el jefe» — forma pt-PT correcta:", options: ["Ontem falamos com o chefe", "Ontem falámos com o chefe", "Ontem temos falado com o chefe"], answer: 1, explain: "La forma de «nós» en el pasado lleva circunflejo en pt-PT: «falámos»; sin él es presente, y «temos falado» es para acciones repetidas." },
    ],
  },

  "pt-cu-a2-02": {
    sezioni: [
      { t: "Como funciona", body: "«Queria» es el imperfecto de querer convertido en la fórmula educada para pedir: «Queria um galão, por favor». «Pode ser…?» acepta con flexibilidad la sugerencia del mostrador: «Pode ser uma meia de leite?». Y «gostar» exige siempre su preposición: «gosto de café», «gosto de tomar o pequeno-almoço fora» — nunca «gosto tomar»." },
      { t: "Quando se usa", body: "Es la gramática del balcão: pedir («Queria dois pastéis de nata»), aceptar propuestas («Pode ser, sim»), decir lo que te gusta comer y beber («Gosto de torradas; não gosto de café forte»). Funciona igual en la pastelaria de barrio, en la cafeteria de la esquina y en el quiosque de la playa." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «Quero um café» es gramaticalmente correcto pero suena seco en el mostrador: pide con «queria», como el «quisiera» español. 2) El «me gusta + infinitivo» español lleva «de» en portugués: «gosto DE comer aqui»; olvidar el «de» es el error nº 1. 3) Falso amigo: un «café» en Portugal es un espresso corto; para el café con leche largo pide «um galão» (en vaso) o «uma meia de leite» (en taza). 4) «Café da manhã» no existe en Portugal: el desayuno es «o pequeno-almoço»." },
      { t: "Na conversa real", body: "El guion completo de la pastelaria: «Bom dia, deseja?» → «Queria uma meia de leite e um croissant misto, por favor» → «Mais alguma coisa?» → «Era só isso, obrigado» → «Para beber aqui ou para levar?» → «Para levar» → «São dois e sessenta». En el balcão es más barato que en la mesa: los locales desayunan de pie, con el periódico abierto." },
    ],
    esempi: [
      { it: "Queria um galão e uma tosta mista, por favor.", es: "Quisiera un galão y una tosta mixta, por favor." },
      { it: "Pode ser um pastel de nata? Está com bom aspeto.", es: "¿Puede ser un pastel de nata? Tiene buena pinta." },
      { it: "Gosto de tomar o pequeno-almoço no balcão, como os locais.", es: "Me gusta desayunar en el mostrador, como los locales." },
      { it: "Não gosto de café muito forte; prefiro uma meia de leite.", es: "No me gusta el café muy fuerte; prefiero una meia de leite." },
      { it: "Para levar, por favor. Obrigado!", es: "Para llevar, por favor. ¡Gracias!" },
    ],
    usi: [
      { q: "La forma más educada de pedir en el balcão:", options: ["Quero um café", "Queria um café, por favor", "Queres um café"], answer: 1, explain: "«Queria» es el presente cortés para pedir; «quero» suena brusco y «queres» pregunta al otro." },
      { q: "«Me gusta desayunar fuera» →", options: ["Gosto tomar o pequeno-almoço fora", "Gosto de tomar o pequeno-almoço fora", "Gosto a tomar o pequeno-almoço fora"], answer: 1, explain: "«gostar» pide siempre «de» + infinitivo." },
    ],
  },

  "pt-cu-a2-03": {
    sezioni: [
      { t: "Como funciona", body: "El comparativo se forma con «mais + adjetivo + do que»: «mais barato do que», «mais moderno do que». La igualdad es «tão… como». El superlativo relativo: «o/a + mais + adjetivo + de»: «o mais caro da loja», «a mais bonita da rua». Tres irregulares: bom → melhor (o melhor), mau → pior (o pior), grande → maior (o maior)." },
      { t: "Quando se usa", body: "Es la gramática de las compras: comparar precios y calidad («Esta camisa é mais barata do que essa»), señalar con tres grados de distancia («este/esta» cerca de mí, «esse/essa» cerca de ti, «aquele/aquela» lejos de los dos) y preguntar («Quanto custa aquele casaco?»). El neutro «isto/isso/aquilo» vale para lo que todavía no tiene nombre." },
      { t: "Atenção! (para hispanohablantes)", body: "1) El español «más barato que» añade «do» en portugués: «mais barato DO que»; omitirlo es el error clásico. 2) «tan… como» → «tão… como», idéntico al español; no digas «tão… do que». 3) Los demostrativos portugueses distinguen tres distancias y el español solo dos: «ese abrigo tuyo» es «esse casaco», pero «aquel de la otra acera» es «aquele». 4) «melhor» ya es comparativo: «mais melhor» no existe, igual que en español." },
      { t: "Na conversa real", body: "En la tienda de Braga: «Posso ver aquela camisa da montra?» → «Qual? Esta?» → «Não, aquela ao fundo, a azul» → «Pois, fica-lhe muito bem» → «Quanto custa?» → «Trinta e cinco euros» → «Hmm, a da loja ao lado é mais barata». Comparar y dudar es un deporte nacional: el vendedor espera tu contraoferta con paciencia." },
    ],
    esempi: [
      { it: "Esta camisa é mais barata do que essa.", es: "Esta camisa es más barata que esa." },
      { it: "Aquele casaco é o mais caro da loja.", es: "Aquel abrigo es el más caro de la tienda." },
      { it: "O mercado de Braga é tão animado como o do Porto.", es: "El mercado de Braga es tan animado como el de Oporto." },
      { it: "Estes sapatos ficam-me melhor do que aqueles.", es: "Estos zapatos me quedan mejor que aquellos." },
      { it: "A minha rua é mais tranquila do que a tua.", es: "Mi calle es más tranquila que la tuya." },
    ],
    usi: [
      { q: "«Estas laranjas son más dulces que esas» →", options: ["Estas laranjas são mais doces que essas", "Estas laranjas são mais doces do que essas", "Estas laranjas são tão doces como essas"], answer: 1, explain: "El comparativo portugués exige «do que»; «que» a secas es marca del español trasladado, y «tão… como» es igualdad." },
      { q: "El abrigo que está lejos de los dos interlocutores:", options: ["este casaco", "esse casaco", "aquele casaco"], answer: 2, explain: "Tres distancias: este (cerca de mí), esse (cerca de ti), aquele (lejos de los dos)." },
    ],
  },

  "pt-cu-a2-04": {
    sezioni: [
      { t: "Como funciona", body: "Dos cámaras: el perfeito simple filma acciones terminadas, una a una («o comboio atrasou-se», «cheguei ao Porto»); el imperfeito describe el escenario y los hábitos («chovia muito», «a cidade era linda», «havia gente nas ruas»). El imperfeito regular acaba en -ava/-ia: «falava», «comia»; irregulares esenciales: era, tinha, ia, estava, fazia, havia." },
      { t: "Quando se usa", body: "Para narrar viajes e historias se combinan: la acción que interrumpe va en perfeito y lo que estaba en curso en imperfeito — «Dormia quando o telemóvel tocou», «Quando cheguei, chovia». Las descripciones (tiempo, ciudad, gente) van en imperfeito; los hechos puntuales (salida, llegada, atraso) en perfeito." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «Haver» en imperfeito es «havia» y es invariable: «Havia muita gente na ponte», nunca «houveram». 2) «era» vs «foi»: la descripción del escenario pide «era» («o dia era lindo»), la valoración de un hecho completo pide «foi» («foi um dia cansativo»). 3) La acción en curso usa «estar A + infinitivo» en Portugal: «estava a chover»; «estava chovendo» es brasileñismo. 4) «llovía» → «chovia» y «llovió» → «choveu»: la pareja funciona igual que en español, aprovéchalo." },
      { t: "Na conversa real", body: "Contar el viaje con el guion nacional: «Como foi a viagem?» → «Olha, saí de manhã; o dia estava lindo em Lisboa. Mas quando o comboio chegou ao Porto, chovia muito» → «E depois?» → «Corremos para uma tasca; a sopa estava quente e ótima». La pregunta «E depois?» es el motor que hace avanzar toda narración portuguesa." },
    ],
    esempi: [
      { it: "Quando cheguei ao Porto, chovia muito.", es: "Cuando llegué a Oporto, llovía mucho." },
      { it: "O comboio atrasou-se e chegámos tarde a Campanhã.", es: "El tren se retrasó y llegamos tarde a Campanhã." },
      { it: "A cidade era linda e havia muita gente nas ruas.", es: "La ciudad era preciosa y había mucha gente en las calles." },
      { it: "Eu dormia quando o telemóvel tocou.", es: "Yo dormía cuando sonó el móvil." },
      { it: "Fomos às caves; o guia era muito engraçado.", es: "Fuimos a las bodegas; el guía era muy gracioso." },
    ],
    usi: [
      { q: "«Cuando llegué a Oporto, llovía mucho» →", options: ["Quando cheguei ao Porto, choveu muito", "Quando cheguei ao Porto, chovia muito", "Quando chegava ao Porto, chovia muito"], answer: 1, explain: "Acción puntual «cheguei» + escenario en curso «chovia»; «choveu» sería una lluvia terminada y «chegava» un hábito." },
      { q: "«Había mucha gente en el puente» →", options: ["Havia muita gente na ponte", "Houveram muitas pessoas na ponte", "Haviam muita gente na ponte"], answer: 0, explain: "«haver» de existencia es invariable: «havia»; «houveram/haviam» no existen para este uso." },
    ],
  },

  "pt-cu-a2-05": {
    sezioni: [
      { t: "Como funciona", body: "El futuro próximo es «ir» conjugado + infinitivo: vou, vais, vai, vamos, vão + infinitivo — «vou ver o jogo», «vamos jantar», «vai chover». Es el «voy a…» español y manda en la conversación. El futuro simple se forma con infinitivo + -ei, -ás, -á, -emos, -ão («melhorará», «chegaremos»), con raíces contractas en algunos verbos: farei, direi, trarei, terei, serei, verei." },
      { t: "Quando se usa", body: "El futuro próximo para planes decididos e intenciones: el grupo de mensajes del sábado («Vou comprar os bilhetes», «Vamos lá ao café?»). El futuro simple para lo incierto, lo formal y las previsiones: «acho que o tempo melhorará». Para convites inmediatos, el portugués dice «Vamos jantar?» o «Vamos lá!» — siempre sin «a»." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «Voy a ir» se dice simplemente «vou»: evita el «vou ir», que suena redundante. 2) El convite español «¿vamos a cenar?» pierde la preposición: «Vamos jantar?». 3) Cuidado con la 2ª persona: tu → «vais» (con s), no «vás». 4) En el habla corriente el portugués casi nunca usa el futuro simple para planes: si dices «jantarei contigo» sonarás a boletín meteorológico." },
      { t: "Na conversa real", body: "El guion del grupo de mensajes: «Vamos lá ao café às cinco?» → «Não posso, vou estudar» → «Então e o jantar?» → «Jantamos às nove, está bem?» → «Combinado!». «Combinado» es la palabra que cierra los planes en Portugal; y «Vamos lá!» sirve para arrancar cualquier plan, desde la playa hasta la mudanza." },
    ],
    esempi: [
      { it: "Vou ver o jogo do Benfica com o meu pai.", es: "Voy a ver el partido del Benfica con mi padre." },
      { it: "Vais à praia no sábado?", es: "¿Vas a ir a la playa el sábado?" },
      { it: "Acho que o tempo melhorará ao domingo.", es: "Creo que el tiempo mejorará el domingo." },
      { it: "Vamos jantar juntos depois do jogo?", es: "¿Cenamos juntos después del partido?" },
      { it: "Eles vão apanhar o elétrico para o Rossio.", es: "Ellos van a tomar el eléctrico hasta el Rossio." },
    ],
    usi: [
      { q: "«¿Vas a venir al café?» (a un amigo) →", options: ["Vai vir ao café?", "Vais vir ao café?", "Vou vir ao café?"], answer: 1, explain: "tu → «vais» + infinitivo «vir»." },
      { q: "Invitas a los amigos a cenar ahora:", options: ["Vamos a jantar?", "Vamos jantar?", "Vamos comer a?"], answer: 1, explain: "El convite portugués no lleva «a»: «Vamos jantar?» / «Vamos lá!»." },
    ],
  },

  "pt-cu-a2-06": {
    sezioni: [
      { t: "Como funciona", body: "«haver» de existencia solo tiene tercera persona: «há» (y «havia» en el pasado), siempre singular: «Há dois quartos», «Há uma varanda». Las preposiciones de lugar son casi gemelas del español: ao lado de, em frente de, entre, perto de, longe de, atrás de, em cima de. Y el verbo estrella para localizar es «ficar»: «A pastelaria fica ao lado» (quedar)." },
      { t: "Quando se usa", body: "Para describir casas y barrios: «O T2 tem dois quartos; há um roupeiro embutido; a casa de banho fica entre os quartos». «Há» también mide tiempo transcurrido con el verbo en presente: «moro em Coimbra há dois anos». El vocabulario del arriendo: arrendar, renda, caução, despesas." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «hay dos cuartos» → «HÁ dois quartos»: nunca «hão» ni «havem»; «haver» no se pluraliza. 2) «hace dos años que vivo aquí» usa el verbo en presente: «moro aqui há dois anos» — el «há» va delante del tiempo, igual que el «hace» español. 3) Las contracciones son obligatorias: «em frente DO prédio» (de + o), «ao lado DA paragem» (de + a); sin contracción suena a extranjero de manual. 4) Falso amigo: «prédio» = edificio; y el cuarto de baño es «casa de banho», jamás «banheiro»." },
      { t: "Na conversa real", body: "La visita al piso con la mediadora: «O quarto principal tem roupeiro embutido» → «A cozinha é equipada?» → «É, e a casa de banho fica ao lado» → «Há paragem de autocarro perto?» → «Há, mesmo em frente do prédio» → «E a renda?» → «Quatrocentos euros, mais as despesas». Para cerrar: «Vou pensar e digo-lhe amanhã»." },
    ],
    esempi: [
      { it: "Há uma pastelaria ao lado do prédio.", es: "Hay una pastelería al lado del edificio." },
      { it: "A cozinha fica entre a sala e o corredor.", es: "La cocina queda entre el salón y el pasillo." },
      { it: "Há dois roupeiros no quarto principal.", es: "Hay dos armarios en el dormitorio principal." },
      { it: "Moro em Coimbra há dois anos.", es: "Vivo en Coimbra desde hace dos años." },
      { it: "Há uma paragem de autocarro em frente da casa.", es: "Hay una parada de autobús enfrente de la casa." },
    ],
    usi: [
      { q: "«Vivo en Oporto desde hace tres años» →", options: ["Moro no Porto faz três anos", "Moro no Porto há três anos", "Moro no Porto a três anos"], answer: 1, explain: "El tiempo transcurrido se mide con «há» + verbo en presente: «há três anos»." },
      { q: "«El mercado está enfrente de la estación» →", options: ["O mercado fica em frente a estação", "O mercado fica em frente da estação", "O mercado fica na frente da estação"], answer: 1, explain: "«em frente de + a estação» se contrae: «em frente da estação»." },
    ],
  },

  "pt-cu-a2-07": {
    sezioni: [
      { t: "Como funciona", body: "«dever + infinitivo» expresa obligación o consejo fuerte: devo, deves, deve, devemos, devem — «Deve descansar», «Deves beber água». «deveria + infinitivo» es el consejo suave, el «debería» español: «Deveria ficar em casa dois dias». Los síntomas se dicen con «tenho dor de…» (cabeça, garganta) o «dores nas costas»." },
      { t: "Quando se usa", body: "Es la gramática de la consulta: la doctora aconseja («Deve tomar o xarope três vezes ao dia»), sugiere («Deveria dormir oito horas») y pregunta («Desde quando tem dores?»). También sirve para aconsejar a amigos: «Não deves tomar café à noite»." },
      { t: "Atenção! (para hispanohablantes)", body: "1) Falso amigo estrella: «estou constipado/a» = estoy resfriado/a; estar hinchado es «estar inchado». 2) «me duele la cabeza» → «tenho dor de cabeça» o «doi-me a cabeça»: el posesivo desaparece, porque las partes del cuerpo llevan artículo: a cabeça, a garganta, os braços, as costas (plural siempre). 3) «receita médica» es la receta del médico, pero «receita» también es una receta de cocina: el contexto decide. 4) El «debería» español es «deveria» (eu/ele) o «deverias» (tu): no existe «debería» con esa forma." },
      { t: "Na conversa real", body: "El guion del centro de saúde: marca-se a hora por teléfono («Queria marcar uma consulta») → na sala de espera, «Diga, doutora» → «O que tem?» → «Tenho dor de garganta e tosse» → «Desde quando?» → «Desde terça-feira» → «Deve descansar e beber muitos líquidos» → «Aqui tem a receita». En la farmacia: «Tem este xarope?» → «Sim, quer a embalagem grande?»." },
    ],
    esempi: [
      { it: "Deve descansar e beber muitos líquidos.", es: "Debe descansar y beber muchos líquidos." },
      { it: "Deverias ficar em casa dois dias.", es: "Deberías quedarte en casa dos días." },
      { it: "Tenho dor de garganta e tosse seca.", es: "Tengo dolor de garganta y tos seca." },
      { it: "Não deves tomar café à noite quando estás doente.", es: "No debes tomar café por la noche cuando estás enfermo." },
      { it: "Devo ir ao centro de saúde ou espero mais um dia?", es: "¿Debo ir al centro de salud o espero un día más?" },
    ],
    usi: [
      { q: "«Estoy resfriado» en portugués:", options: ["Estou constipado", "Estou estreitado", "Estou inchado"], answer: 0, explain: "Falso amigo: «constipado» = resfriado; «inchado» = hinchado." },
      { q: "El consejo suave típico de los médicos («debería quedarse en casa»):", options: ["Deves ficar em casa dois dias", "Deveria ficar em casa dois dias", "Tens de ficar em casa dois dias"], answer: 1, explain: "«deveria» es la sugerencia suave; «deves» y «tens de» suenan a obligación." },
    ],
  },

  "pt-cu-a2-08": {
    sezioni: [
      { t: "Como funciona", body: "Los incontables (pão, vinho, água, arroz) no tienen plural y se miden con «de»: um copo de água, meio litro de vinho, um quilo de arroz. Los contables van con número: duas canjas, três copos, uma cesta. Se pregunta «quanto?» para incontables y precios («Quanto custa o prato do dia?», «Quanto pão quer?») y «quantos/quantas?» para contables («Quantas pessoas?»)." },
      { t: "Quando se usa", body: "Es la gramática de la tasca: pedir cantidades («Meio litro do vinho da casa»), elegir raciones («uma dose» entera o «meia entrada») y contar («Somos três»). «Meio» concuerda con el sustantivo: «meio litro» pero «meia entrada», «meia dose»." },
      { t: "Atenção! (para hispanohablantes)", body: "1) El español dice «media» siempre en femenino, pero el portugués concuerda: «meio litro» (masculino), «meia dose» (femenino). 2) «cuánto pan» → «Quanto pão»: no añadas -s al «quanto» de un incontable. 3) En la tasca el couvert (pão, azeite, manteiga) llega sin pedirlo y se cobra: si no lo quieres, «sem couvert, por favor». 4) Falso amigo del menú: «salsa» en Portugal es perejil; la salsa de la comida es «o molho»." },
      { t: "Na conversa real", body: "El guion del almuerzo: «Boa tarde! O prato do dia é bacalhau com grão. Deseja sopa?» → «Sim, uma canja, e meio litro do vinho da casa» → «Mais alguma coisa?» → «Não, era isso» → «A conta, por favor» → «São catorze euros». Y el elogio que abre todas las puertas: «Estava tudo muito bom!»." },
    ],
    esempi: [
      { it: "Quanto pão queres? Um, dois?", es: "¿Cuánto pan quieres? ¿Uno, dos?" },
      { it: "Meio litro do vinho da casa, por favor.", es: "Medio litro del vino de la casa, por favor." },
      { it: "Quantas pessoas são para o almoço?", es: "¿Cuántas personas son para el almuerzo?" },
      { it: "Sem couvert, por favor — só o prato do dia.", es: "Sin couvert, por favor — solo el plato del día." },
      { it: "Uma dose de bacalhau e dois copos de água.", es: "Una ración de bacalao y dos vasos de agua." },
    ],
    usi: [
      { q: "«¿Cuánto pan quiere?» →", options: ["Quantos pão quer?", "Quanto pão quer?", "Quantas pão quer?"], answer: 1, explain: "«pão» es incontable → «quanto» sin -s." },
      { q: "«Media ración, por favor» →", options: ["meio dose, por favor", "meia dose, por favor", "meias dose, por favor"], answer: 1, explain: "«dose» es femenino → «meia»; el portugués concuerda, a diferencia del «media» español." },
    ],
  },

  "pt-cu-a2-09": {
    sezioni: [
      { t: "Como funciona", body: "«já» se coloca antes del verbo en perfeito simple: «Já visitei o Porto» (acción ya hecha). «ainda não + perfeito» es el «todavía no»: «Ainda não trabalhei em Portugal». Las expresiones de tiempo del perfeito: ontem, na semana passada, no mês passado, durante seis meses, e «há dois anos» para el tiempo transcurrido: «comecei há dois anos»." },
      { t: "Quando se usa", body: "Es la gramática de la experiencia laboral y de la entrevista: «Já trabalhou numa loja antes?», «No mês passado comecei um curso», «Trabalhei durante seis meses em Madrid». También en la vida diaria: «Já almoçaste?» — «Ainda não» es el diálogo de todas las oficinas a mediodía." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «todavía no» es «ainda não», nunca «todavía não» (palabra inexistente). 2) «empecé hace dos años» → «comecei há dois anos»: el «hace» español es «há», no «faz». 3) El perfecto compuesto español con tiempo marcado se traduce por simple: «he trabajado seis meses» → «trabalhei seis meses»; el «tenho trabalhado» portugués indica acción repetida hasta ahora. 4) «já» lleva acento y se escribe con ç-é distinto del «ya»: cuida la ortografía al escribirlo." },
      { t: "Na conversa real", body: "La mini-entrevista de la librería: «Procura-se trabalhador estudante» → «Já tem experiência?» → «Sim, trabalhei numa cafetaria durante seis meses» → «E em Portugal?» → «Ainda não, mas aprendo depressa» → «Bom, começamos pelo período experimental». «Ainda não, mas aprendo depressa» es la frase que abre medio primer empleo." },
    ],
    esempi: [
      { it: "Já visitei o Porto três vezes.", es: "Ya he visitado Oporto tres veces." },
      { it: "Ainda não trabalhei em Portugal.", es: "Todavía no he trabajado en Portugal." },
      { it: "No mês passado comecei um curso de inglês.", es: "El mes pasado empecé un curso de inglés." },
      { it: "Trabalhei durante dois anos numa cafetaria.", es: "Trabajé durante dos años en una cafetería." },
      { it: "Comecei a estudar português há um ano.", es: "Empecé a estudiar portugués hace un año." },
    ],
    usi: [
      { q: "«Todavía no hice el examen» →", options: ["Já não fiz o exame", "Ainda não fiz o exame", "Não fiz já o exame"], answer: 1, explain: "«todavía no» = «ainda não» + perfeito simple." },
      { q: "«Empecé a trabajar hace dos años» →", options: ["Comecei a trabalhar faz dois anos", "Comecei a trabalhar há dois anos", "Comecei a trabalhar em dois anos"], answer: 1, explain: "Tiempo transcurrido: «há dois anos», como el «hace» español." },
    ],
  },

  "pt-cu-a2-10": {
    sezioni: [
      { t: "Como funciona", body: "El futuro simple se forma con infinitivo + -ei, -ás, -á, -emos, -ão: «fará», «estaremos», «choverá». Las raíces contractas: fazer → farei, dizer → direi, trazer → trarei, ter → terei, ser → serei, ver → verei. Para el tiempo meteorológico el portugués usa «fazer» como el español: «faz frio», «faz trinta graus», e «estar a + infinitivo» para lo que ocurre: «está a chover»." },
      { t: "Quando se usa", body: "El futuro simple es el tiempo de las previsiones y las promesas, a menudo con «acho que», «dizem que»: «Amanhã fará mais frio», «Choverá no norte». En la conversación del miradouro se mezcla con el futuro próximo: «Vai chover, dizem» / «Choverá, diz a previsão» — lo primero oral, lo segundo de boletín." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «está lloviendo» es «está A chover» en Portugal: «está chovendo» es brasileñismo. 2) «hace sol» puede ser «faz sol» o el más portugués «está um sol lindo!». 3) Falso amigo del cielo: «tempo» significa tiempo meteorológico y también tiempo cronológico; «hora» es solo la hora del reloj. 4) Para llevar el paraguas se dice «levar o guarda-chuva»; «pegar» no se usa en Portugal: se «apanha» o elétrico, mas o guarda-chuva leva-se." },
      { t: "Na conversa real", body: "Comentar el tiempo es el deporte nacional del miradouro: «Está um sol lindo, não está?» → «Pois, mas dizem que vai chover à tarde» → «O Atlântico é assim: quatro estações num dia» → «Vou levar o guarda-chuva, por causa do justo». Y el proverbio que todo portugués conoce: «Abril, águas mil»." },
    ],
    esempi: [
      { it: "Amanhã fará mais frio no Porto.", es: "Mañana hará más frío en Oporto." },
      { it: "Acho que choverá no norte ao sábado.", es: "Creo que lloverá en el norte el sábado." },
      { it: "Hoje faz trinta graus na Praça do Comércio!", es: "¡Hoy hace treinta grados en la Praça do Comércio!" },
      { it: "Está um sol lindo; não levo o guarda-chuva.", es: "Está un sol precioso; no llevo el paraguas." },
      { it: "Estaremos em Lisboa na sexta-feira.", es: "Estaremos en Lisboa el viernes." },
    ],
    usi: [
      { q: "«Está lloviendo» en portugués europeo:", options: ["Está chovendo", "Está a chover", "Está chover a"], answer: 1, explain: "La acción en curso en pt-PT es «estar A + infinitivo»; «chovendo» es Brasil." },
      { q: "La previsión formal del boletín («mañana hará frío»):", options: ["Amanhã vai fazendo frio", "Amanhã fará frio", "Amanhã faz frio"], answer: 1, explain: "Previsión = futuro simple «fará»; el presente «faz» describe el tiempo de hoy." },
    ],
  },

  "pt-cu-a2-11": {
    sezioni: [
      { t: "Como funciona", body: "Pronombres complemento: me, te, lhe (a él, a ella, a usted), nos, lhes (plural). En afirmativas van detrás del verbo unidos con guion (ênclise): «ajuda-me», «podes emprestar-me», «digo-lhe». Con negación pasan delante (próclise): «não te posso ajudar», «não me digas!». Para cosas directas se usan o/a/os/as: «alimento-o», «emprestamo-la»." },
      { t: "Quando se usa", body: "Es la gramática de los favores: abrir con «Podes fazer-me um favor?», pedir con «podes + infinitivo + pronome» («Podes guardar-me as chaves?», «Podes ficar com o gato?»), agradecer devolviendo: «ajudo-te sempre», «depois pago-te o almoço», «empresto-te a minha carrinha»." },
      { t: "Atenção! (para hispanohablantes)", body: "1) En afirmativa el pronombre va pegado al final: «Ajudamo-te no sábado»; decir «te ajudamos» con el pronombre suelto es orden brasileña. 2) La negación lo atrae hacia delante: «não te posso ajudar». 3) «lhe» equivale al «le» español de persona («digo-lhe que chegaste»), y su plural es «lhes»; para COSAS no uses «lhe»: «eu vejo-o» (lo veo). 4) «me lo» y compañía se estudian más adelante: en A2 basta me/te/lhe/nos." },
      { t: "Na conversa real", body: "El guion de la mudanza en Aveiro: «Podes ajudar-me a mover o sofá?» → «Claro! Empresto-te a carrinha do meu pai» → «Podes guardar-me as chaves até segunda?» → «Sem problema» → «Depois pago-te o almoço, prometo» → «Não precisas, homem! Bom vizinho, bom amigo». La generosidad portuguesa se agradece insistiendo dos veces." },
    ],
    esempi: [
      { it: "Podes fazer-me um favor?", es: "¿Puedes hacerme un favor?" },
      { it: "A Ana empresta-te as caixas da mudança.", es: "Ana te presta las cajas de la mudanza." },
      { it: "Não te posso emprestar a carrinha hoje.", es: "No te puedo prestar la furgoneta hoy." },
      { it: "Digam-me onde ponho estas caixas, por favor.", es: "Decidme dónde pongo estas cajas, por favor." },
      { it: "No sábado ajudamos-te a montar as prateleiras.", es: "El sábado te ayudamos a montar las estanterías." },
    ],
    usi: [
      { q: "«¿Puedes ayudarme?» en pt-PT:", options: ["Podes me ajudar?", "Podes ajudar-me?", "Podes ajudar-lhe?"], answer: 1, explain: "Frase afirmativa → ênclise: «ajudar-me»; «Podes me ajudar» es orden brasileña y «ajudar-lhe» sería «ayudarle»." },
      { q: "«Le devolveré las cajas al vecino» (a él) →", options: ["Devolvo-lhe as caixas amanhã", "Devolvo-te as caixas amanhã", "Devolvo-o as caixas amanhã"], answer: 0, explain: "«a ele» → pronombre indirecto «lhe», pegado al verbo en afirmativa." },
    ],
  },

  "pt-cu-a2-12": {
    sezioni: [
      { t: "Como funciona", body: "Los conectores de la narración se colocan al inicio de la frase seguidos de coma: «Primeiro, saí de casa. Depois, apanhei o comboio. Entretanto, li um livro. Finalmente, cheguei ao Porto». El superlativo relativo es «o/a + mais/menos + adjetivo + de»: «o comboio mais rápido de todos», «a cidade mais famosa do norte», con las contracciones do/da obligatorias." },
      { t: "Quando se usa", body: "Es la caja de herramientas para contar cualquier historia con orden: planeamiento («Primeiro, compro os bilhetes»), secuencia («Depois, arrumo a mochila»), tiempo intermedio («Entretanto, telefono à Beatriz») y cierre («Finalmente, apanho o comboio»). Los irregulares del superlativo: o melhor, o pior, o maior." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «mientras tanto» es «entretanto» o «enquanto isso» — pero cuidado: «entretanto» en registro culto también puede significar «sin embargo». 2) El superlativo portugués lleva «de», no «em»: «a livraria mais bonita DO mundo», nunca «do mundo em». 3) «finalmente» y «no fim» valen los dos; «afinal» en cambio significa «al final, después de todo». 4) No olvides la coma tras el conector: «Primeiro, compro os bilhetes» — sin coma se lee acelerado y atropellado." },
      { t: "Na conversa real", body: "El relato clásico del viaje: «Então, conta! Como foi ao Porto?» → «Primeiro apanhei o Alfa em Santa Apolónia; entretanto fui lendo um livro; quando cheguei a Campanhã, primeiro fui à Livraria Lello — a fila era enorme —, depois comi uma francesinha e finalmente vi o pôr do sol na Ribeira». Conectores + pasados: ya narras como un local." },
    ],
    esempi: [
      { it: "Primeiro, compro os bilhetes na máquina.", es: "Primero, compro los billetes en la máquina." },
      { it: "Depois, apanho o comboio das oito e meia.", es: "Después, tomo el tren de las ocho y media." },
      { it: "Entretanto, telefono à Beatriz para combinar o almoço.", es: "Mientras tanto, llamo a Beatriz para acordar el almuerzo." },
      { it: "O Alfa Pendular é o comboio mais rápido de todos.", es: "El Alfa Pendular es el tren más rápido de todos." },
      { it: "Finalmente, vejo o pôr do sol na Ribeira.", es: "Finalmente, veo la puesta de sol en la Ribeira." },
    ],
    usi: [
      { q: "«Mientras tanto, llamo a mi madre» →", options: ["Finalmente, telefono à minha mãe", "Entretanto, telefono à minha mãe", "Primeiro, telefono à minha mãe"], answer: 1, explain: "«entretanto» (o «enquanto isso») = mientras tanto; «finalmente» cierra y «primeiro» abre." },
      { q: "«La playa más bonita del país» →", options: ["a praia mais bonita do país", "a praia mais bonita no país", "a praia mais bonita em país"], answer: 0, explain: "Superlativo con «de» contraído: «do país» (de + o)." },
    ],
  },
};
