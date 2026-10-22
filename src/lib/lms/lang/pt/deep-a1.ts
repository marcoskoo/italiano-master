import type { CbGrammarDeep } from "../../extra/grammar-deep";

/* ═══ PT A1 · Grammar deep — 12 unidades ═════════════════════════════
   Explicación amplia de la gramática de cada unidad, con las trampas
   específicas del hispanohablante en portugués europeo. Campos `.it` =
   portugués. Secciones: How it works / When to use it / Watch out (ES) /
   In real conversation. */

export const PT_DEEP_A1: Record<string, CbGrammarDeep> = {
  "pt-cu-a1-01": {
    sezioni: [
      { t: "Como funciona", body: "El verbo ser: eu sou, tu és, ele/ela é, nós somos, vós sois, vocês são. El reflexivo chamar-se conjuga con el pronombre: chamo-me, chamas-te, chama-se, chamamo-nos, chamam-se. En Portugal, el pronombre va detrás del verbo (enclítico): «Chamo-me Alex», no «Me chamo Alex» — esa orden es brasileña." },
      { t: "Quando se usa", body: "ser sirve para identidad, origen y profesión: «Sou estudante», «Sou do Peru», «É professora». Para el origen: ser de + ciudad/país, con contração si el nombre lleva artículo: «Sou do Brasil» (de + o), «Sou da França» (de + a). Y para presentarse: «Eu sou a Marta» — el portugués añade artículo al nombre propio: o Rui, a Marta." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «Me llamo Alex» → «Chamo-me Alex»: el pronombre va DESPUÉS del verbo en pt-PT. 2) El «tu» portugués es la norma entre jóvenes (más que en España): «Como te chamas?» a un desconocido de tu edad es correcto. 3) Con mayores o en tiendas: «o senhor / a senhora» + tercera persona («A senhora é de Espanha?»). 4) «Obrigado» (hombre) / «obrigada» (mujer): concuerda con quien HABLA, no con quien escucha." },
      { t: "Na conversa real", body: "Los portugueses encadenan saludo y pregunta: «Olá! Tudo bem?» no siempre espera respuesta — es como «¿qué tal?». La respuesta rápida: «Tudo bem, e contigo?». Para despedirse: «Até logo!» (hasta ahora), «Até amanhã!» (hasta mañana), «Adeus» (más definitivo). Y el relleno nacional es «então»: «Então, como é que te chamas?»." },
    ],
    esempi: [
      { it: "Olá! Chamo-me Alejandro, mas todos me chamam de Alex.", es: "¡Hola! Me llamo Alejandro, pero todos me dicen Alex." },
      { it: "Sou do Peru, de Lima. E tu?", es: "Soy de Perú, de Lima. ¿Y tú?" },
      { it: "Muito prazer! Eu sou a Marta e este é o Rui.", es: "¡Mucho gusto! Yo soy Marta y este es Rui." },
      { it: "O senhor é de Espanha?", es: "¿Usted es de España?" },
      { it: "Tudo bem, obrigado! Até logo!", es: "¡Todo bien, gracias! ¡Hasta ahora!" },
    ],
    usi: [
      { q: "En una fiesta conoces a alguien. ¿Cómo te presentas?", options: ["Me chamo Alex", "Chamo-me Alex", "Eu chamo-me Alex"], answer: 1, explain: "pt-PT: pronombre enclítico → Chamo-me Alex." },
      { q: "¿Cuál es correcta para un hombre que agradece?", options: ["Obrigada!", "Obrigado!", "Gracias!"], answer: 1, explain: "El hablante es hombre → obrigado." },
    ],
  },

  "pt-cu-a1-02": {
    sezioni: [
      { t: "Como funciona", body: "El verbo ter: eu tenho, tu tens, ele/ela tem, nós temos, vocês têm (¡ojo al circunflejo!). Los posesivos portugueses llevan artículo delante y concuerdan con la COSA poseída, no con el poseedor: o meu irmão, a minha irmã, os meus pais, as minhas tias." },
      { t: "Quando se usa", body: "ter expresa posesión, familia y edad: «Tenho dois irmãos», «Tenho vinte anos». Los posesivos: o meu / a minha (mi), o teu / a tua (tu), o seu / a sua (su, de usted/de él), o nosso / a nossa (nuestro), o vosso? — en Portugal se usa «o vosso» poco; el plural de tratamiento normal es vocês + o seu." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «mi hermano» → «o meu irmão»: NUNCA «meu irmão» a secas en conversación (suena telegráfico o brasileño). 2) El posesivo concuerda con la cosa: «o meu irmão» pero «a minha irmã» — aunque el poseedor sea el mismo. 3) «têm» (ellos tienen) lleva circunflejo; «tem» (él tiene) no. 4) Falso amigo: «pais» = padres, pero «país» (con acento) = nación." },
      { t: "Na conversa real", body: "Pregunta por la familia con «Tens irmãos?». Respuestas típicas: «Tenho um irmão e duas irmãs» o «Sou filho único / filha única» (hijo/a único/a). Los portugueses hablan de «os meus avós» con cariño: «Vou almoçar com os meus avós» es frase de todos los domingos. Y «Dona / Seu» + nombre es el trato respetuoso cariñoso: «a Dona Helena», «o Sr. Costa»." },
    ],
    esempi: [
      { it: "Tenho dois irmãos e uma irmã.", es: "Tengo dos hermanos y una hermana." },
      { it: "O meu pai chama-se Carlos; a minha mãe é professora.", es: "Mi padre se llama Carlos; mi madre es profesora." },
      { it: "Os meus avós moram em Vila Nova de Gaia.", es: "Mis abuelos viven en Vila Nova de Gaia." },
      { it: "Ela tem dezanove anos e estuda medicina.", es: "Ella tiene diecinueve años y estudia medicina." },
      { it: "Sou filha única.", es: "Soy hija única." },
    ],
    usi: [
      { q: "«___ irmã chama-se Valentina.» (mi hermana)", options: ["O meu", "A minha", "As minhas"], answer: 1, explain: "irmã es femenino singular → a minha." },
      { q: "«Ellos tienen dos hijos» se dice…", options: ["Eles tem dois filhos", "Eles têm dois filhos", "Eles tenho dois filhos"], answer: 1, explain: "3ª persona plural → têm (con circunflejo)." },
    ],
  },

  "pt-cu-a1-03": {
    sezioni: [
      { t: "Como funciona", body: "Presente regular de 1ª conjugación (-ar): eu levanto, tu levantas, ele levanta, nós levantamos, vocês levantam. La -s de la 2ª persona es la marca del «tu». Los verbos en -ar son la gran mayoría del portugués: trabalhar, estudar, almoçar, jantar, comprar, falar." },
      { t: "Quando se usa", body: "Rutinas y horarios: «Levanto-me às sete», «As aulas começam às nove». Adverbios de frecuencia: sempre (100 %), quase sempre, às vezes (a veces), quase nunca, nunca (0 %) — entre sujeto y verbo: «Eu sempre tomo café», nunca «Eu tomo sempre café» (eso es castellano trasladado)." },
      { t: "Atenção! (para hispanohablantes)", body: "1) Las horas: Portugal usa el sistema de 24 horas SIEMPRE en la vida diaria: «às catorze», «às vinte e uma» — decir «dos de la tarde» (às duas da tarde) existe pero se usa menos. 2) La preposición de las horas es «às» (a + as): «levanto-me ÀS sete». «Ao meio-dia» (a + o), «à meia-noite». 3) «desayunar» = tomar o pequeno-almoço (nunca «desayunar» que no existe: falso amigo ¡«estar desejando»!). 4) Reflexivos con enclítico: «levanto-ME», «deito-ME»." },
      { t: "Na conversa real", body: "Pregunta «A que horas te levantas?» y «A que horas almoças?». El día portugués: pequeno-almoço (7-9h), almoço (12:30-14h), lanche (merienda, ~17h, para niños), jantar (20-21:30h). «Ir dormir» = acostarse: «Vou deitar-me à meia-noite». Y ojo: «almoçar» (almorzar) tiene ç; «amanhecer» = amanecer." },
    ],
    esempi: [
      { it: "Levanto-me às sete e meia e tomo o pequeno-almoço.", es: "Me levanto a las 7:30 y desayuno." },
      { it: "Trabalho das nove às dezassete, de segunda a sexta.", es: "Trabajo de 9:00 a 17:00, de lunes a viernes." },
      { it: "Ao domingo, almoço com a família.", es: "Los domingos, almuerzo con la familia." },
      { it: "Nunca janto antes das vinte horas.", es: "Nunca ceno antes de las 20:00." },
      { it: "Deito-me à uma da manhã.", es: "Me acuesto a la 1:00." },
    ],
    usi: [
      { q: "«Siempre desayuno en casa» se dice…", options: ["Eu sempre tomo o pequeno-almoço em casa", "Eu tomo sempre o pequeno-almoço", "Sempre eu almoço em casa"], answer: 0, explain: "Adverbio entre sujeto y verbo + «pequeno-almoço» es el desayuno." },
      { q: "«Ceno a las 21:00» →", options: ["Janto às vinte e uma", "Janto às nove da noite sempre", "Ceio às vinte uma"], answer: 0, explain: "Sistema 24h + às: às vinte e uma." },
    ],
  },

  "pt-cu-a1-04": {
    sezioni: [
      { t: "Como funciona", body: "El cortés «queria» es el imperfecto de querer (eu queria, tu querias, ele queria) usado para pedir: «Queria um galão, por favor». La acción en curso usa estar a + infinitivo: «estou a beber» (estoy bebiendo) — la construcción estrella del portugués europeo." },
      { t: "Quando se usa", body: "queria para TODAS las peticiones en tiendas y cafés: suena cortés y natural («Queria dois pastéis»). estar a + infinitivo para lo que ocurre ahora: «O pastel está a aquecer». También con «continuar a»: «continuo a estudar». Contrações de em: em + o = no (no balcão), em + a = na (na pastelaria), em + um = num, em + uma = numa." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «Estou bebendo» NO existe en Portugal: es brasileño. En pt-PT: «estou A beber». 2) «Queria» no es pasado aquí: es el presente cortés (como «quisiera» español). 3) Falso amigo: «empanada» no existe; y cuidado con «café»: un «café» portugués es un espresso corto, no un desayuno. 4) «Para levar» = para llevar; «para beber aqui» = para tomar aquí — la pregunta del mostrador siempre llega." },
      { t: "Na conversa real", body: "El diálogo tipo: «Deseja algo?» → «Queria um café e um pastel de nata, por favor» → «Para levar?» → «Não, para beber aqui». El pago: «Quanto é?» o «Quanto custa?» → «São dois euros e oitenta». Y el truco local: en el balcão es más barato que en la mesa. Los números con dinero: «dois euros e oitenta (cêntimos)»." },
    ],
    esempi: [
      { it: "Queria um galão e uma tosta mista, por favor.", es: "Quería un galão y una tosta mixta, por favor." },
      { it: "Estou à espera do café: está a aquecer no forno.", es: "Estoy esperando el café: se está calentando en el horno." },
      { it: "Para beber aqui ou para levar?", es: "¿Para tomar aquí o para llevar?" },
      { it: "O café no balcão é mais barato.", es: "El café en el mostrador es más barato." },
      { it: "São dois euros e oitenta cêntimos.", es: "Son 2,80 €." },
    ],
    usi: [
      { q: "¿Cómo pides cortésmente en una pastelaria?", options: ["Quero um café", "Queria um café, por favor", "Dá-me um café"], answer: 1, explain: "queria + por favor = petición cortés estándar." },
      { q: "«Estoy bebiendo café» en pt-PT:", options: ["Estou bebendo café", "Estou a beber café", "Estou bebo café"], answer: 1, explain: "estar A + infinitivo (el gerundio es brasileño)." },
    ],
  },

  "pt-cu-a1-05": {
    sezioni: [
      { t: "Como funciona", body: "haver impersonal: «há» = hay, para todo singular: «Há sopa?», «Não há lugar». El objeto directo lleva artículo: «quero O bacalhau», «bebo UM vinho verde». «Para mim» (para mí) usa el pronombre tónico tras preposición." },
      { t: "Quando se usa", body: "En el restaurante, há pregunta por lo que existe: «O que há hoje?». Para elegir: «Eu quero o prato do dia» / «Para mim, a sopa». La cuenta: «A conta, por favor». «estar incluído» para el servicio: «O serviço está incluído» — por ley en Portugal." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «Quiero el bacalao» → «Quero O bacalhau»: el artículo definido con objetos es obligatorio en portugués (omitiéndolo suena a lista). 2) «Para mí» = «para mim», nunca «para eu» (que sería sujeto). 3) Falsos amigos del menú: «polvo» = pulpo (bien), pero ojo con «tapa» que no existe; «entrar» no; «couvert» se pronuncia «curvert» y SE PAGA. 4) «conta» (cuenta) vs «canta» (canta): la pronunciación nasal distingue." },
      { t: "Na conversa real", body: "El flujo del restaurante: «Mesa para dois» → «A ementa, por favor» → «O que há de hoje?» → «Para mim, o bacalhau à Brás» → «A conta, por favor». Si no quieres el couvert: «Não quero o couvert, obrigado» y lo retiran sin problema. El vino: «um vinho verde» (joven, del Miño) o «um vinho tinto» (tinto). Propina: no es obligatoria, se redondea." },
    ],
    esempi: [
      { it: "Boa noite! Mesa para dois, por favor.", es: "¡Buenas noches! Mesa para dos, por favor." },
      { it: "O que há de hoje? Há bacalhau à Brás?", es: "¿Qué hay hoy? ¿Hay bacalao à Brás?" },
      { it: "Para mim, a sopa; para ele, o polvo.", es: "Para mí, la sopa; para él, el pulpo." },
      { it: "Não quero o couvert, obrigado.", es: "No quiero el couvert, gracias." },
      { it: "A conta, por favor. O serviço está incluído?", es: "La cuenta, por favor. ¿El servicio está incluido?" },
    ],
    usi: [
      { q: "«¿Hay sopa hoy?» se dice…", options: ["Há sopa hoje?", "Tem sopa?", "Hão sopa?"], answer: 0, explain: "haver impersonal → há (aunque «tem sopa?» también se oye, lo estándar es há)." },
      { q: "«Para ___ , o arroz de marisco.» (para mí)", options: ["eu", "mim", "meu"], answer: 1, explain: "Tras preposición: mim (para mim)." },
    ],
  },

  "pt-cu-a1-06": {
    sezioni: [
      { t: "Como funciona", body: "Demostrativos: este casaco (este), esta camisa, estes sapatos, estas calças; esse/essa (ese, cerca del oyente), aquele/aquela (aquel, lejos de ambos). Ojo: «isto/isso/aquilo» son las formas neutras (para cosas sin nombre): «O que é isto?»." },
      { t: "Quando se usa", body: "ficar es el verbo de cómo queda la ropa: «fica-me bem» (me queda bien), «fica grande» (queda grande), «ficam apertadas» (quedan estrechas — calças siempre plural). Los precios: custar (costar): «custa oitenta euros», «custam cinquenta». precisar de + sustantivo: «Preciso de um casaco»." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «calças» (pantalones) SIEMPRE plural, como el español «pantalones» pero en singular también: umas calças. 2) «camisa» = camisa (formal); «camisola» = jersey/sudadera; «T-shirt» = camiseta. 3) Falsos amigos: «largo» portugués = ANCHO (no largo: «comprido»); «rápido» bien. 4) El pronombre con ficar: fica-ME bem, fica-TE bem, fica-LHE bem (le queda) — enclítico otra vez." },
      { t: "Na conversa real", body: "En la tienda: «Posso ajudar?» → «Sim, obrigado. Preciso de um casaco de inverno» → «Que tamanho usa?» → «Uso M» → «O provador é ali» → «Fica-me um pouco grande; tem um S?». El pago: «Vai querer saco?» (¿quiere bolsa?). Y los saldos: «Está em saldos» = está en rebajas." },
    ],
    esempi: [
      { it: "Quanto custa este casaco azul?", es: "¿Cuánto cuesta este abrigo azul?" },
      { it: "Estas botas custam cinquenta euros.", es: "Estas botas cuestan cincuenta euros." },
      { it: "O casaco fica-me bem, mas as calças ficam apertadas.", es: "El abrigo me queda bien, pero los pantalones quedan estrechos." },
      { it: "Preciso de uma camisola para o inverno.", es: "Necesito un jersey para el invierno." },
      { it: "O provador é ali, à direita.", es: "El probador está allí, a la derecha." },
    ],
    usi: [
      { q: "«¿Cuánto cuestan estas botas?» →", options: ["Quanto custa estas botas?", "Quanto custam estas botas?", "Quanto é estas botas?"], answer: 1, explain: "botas plural → custam." },
      { q: "«El vestido me queda bien» →", options: ["O vestido fica-me bem", "O vestido fico-me bem", "O vestido fica bem-me"], answer: 0, explain: "o vestido (3ª sing.) → fica-me bem." },
    ],
  },

  "pt-cu-a1-07": {
    sezioni: [
      { t: "Como funciona", body: "El imperativo cortés (você/o senhor): siga (siga), vire (gire), suba (suba), desça (baje), apanhe (tome), pare (pare) — formas de 3ª persona del subjuntivo/presente. La pregunta de direcciones por excelencia: «Como é que vou para…?» (¿cómo voy a…?)." },
      { t: "Quando se usa", body: "Preposiciones de lugar con contração: em + o = no (no fim da rua), em + a = na (na esquina), a + o = ao (ao lado do banco), a + a = à (à direita), de + o = do (atrás do correio), de + a = da (em frente da igreja). «entre X e Y» (entre X y Y). Distancia: «É longe? — São dez minutos a pé» (a pie)." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «Como é que…?»: el «é que» es el marcaje portugués de las preguntas — no existe en español pero es omnipresente en Portugal. 2) «ao lado de» = al lado de, pero «ao lado do» si el nombre es masculino: ao lado do banco. 3) Los medios: DE comboio, DE metro, DE autocarro, A pé (a pie) — nunca «en tren». 4) «apanhar» = coger/tomar (transporte): «apanho o elétrico» — en español «coger» vale para todo, elige bien entre apanhar (transporte) e ir a pé." },
      { t: "Na conversa real", body: "El intercambio completo: «Desculpe, como é que vou para o miradouro?» → «Siga em frente, vire à direita na próxima rua e suba até ao fim» → «É longe?» → «São dez minutos a pé. Ou apanha o elétrico 28» → «Muito obrigado!» → «Não tem de quê!». Las calles de Lisboa suben y bajan: «suba a rua» (calle arriba) y «desça a rua» (calle abajo) son direcciones reales, no adornos." },
    ],
    esempi: [
      { it: "Desculpe, como é que vou para a estação?", es: "Disculpe, ¿cómo voy a la estación?" },
      { it: "Siga em frente e vire à esquerda na próxima rua.", es: "Siga recto y gire a la izquierda en la próxima calle." },
      { it: "O café fica ao lado do correio, no fim da rua.", es: "El café está al lado de correos, al final de la calle." },
      { it: "São dez minutos a pé, ou apanha o autocarro.", es: "Son diez minutos a pie, o toma el autobús." },
      { it: "O elétrico 28 passa pela Alfama e pelo Bairro Alto.", es: "El elétrico 28 pasa por la Alfama y por el Bairro Alto." },
    ],
    usi: [
      { q: "«¿Cómo llego al castillo?» →", options: ["Como vou ao castelo?", "Como é que vou para o castelo?", "Como eu vou no castelo?"], answer: 1, explain: "La fórmula natural pt-PT: Como é que vou para…?" },
      { q: "«___ lado do banco» (al lado del banco)", options: ["Ao", "No", "Do"], answer: 0, explain: "a + o = ao: ao lado de." },
    ],
  },

  "pt-cu-a1-08": {
    sezioni: [
      { t: "Como funciona", body: "Futuro próximo: ir a + infinitivo — vou partir, vais viajar, vamos chegar. El verbo ir: vou, vais, vai, vamos, vão. Comparaciones: mais + adjetivo (mais rápido), o mais + adjetivo + de todos (el más … de todos); igual: «tão rápido como» (tan rápido como)." },
      { t: "Quando se usa", body: "Para planes inmediatos y horarios: «Vou partir às oito». En la estación: comprar «um bilhete de ida e volta» (ida y vuelta) ou «só a ida» (solo ida); preguntar «A que horas parte o comboio?» y «De que cais parte?» (¿de qué andén sale?). «chegar a / partir de»: «O comboio chega a Campanhã»." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «tren» = comboio en Portugal («trem» es brasileño). 2) «andén» = cais (¡como el «muelle»!): «do cais três». 3) Se viaja DE comboio, DE metro — no «en comboio». 4) «demorar» = tardar (duración): «A viagem demora três horas» — no confundir con «esperar». 5) «ida e volta» = ida y vuelta; «volta» sola = vuelta." },
      { t: "Na conversa real", body: "En la ventanilla: «Queria um bilhete para o Porto, ida e volta» → «Para que dia?» → «Para sábado de manhã» → «Tem o Alfa às oito e dez ou o Intercidades às nove» → «Qual é mais rápido?» → «O Alfa, mas é mais caro» → «Então quero o Intercidades. De que cais parte?» → «Do cais três. Boa viagem!». El descuento joven: «Tem desconto de estudante?»." },
    ],
    esempi: [
      { it: "Vou viajar de comboio para o Porto no sábado.", es: "Voy a viajar en tren a Oporto el sábado." },
      { it: "O Alfa Pendular é mais rápido, mas também é mais caro.", es: "El Alfa Pendular es más rápido, pero también más caro." },
      { it: "Queria um bilhete de ida e volta, com desconto de estudante.", es: "Quería un bilhete de ida y vuelta, con descuento de estudiante." },
      { it: "O comboio parte de Santa Apolónia e chega a Campanhã.", es: "El tren sale de Santa Apolónia y llega a Campanhã." },
      { it: "A viagem demora cerca de três horas.", es: "El viaje dura unas tres horas." },
    ],
    usi: [
      { q: "«Voy a salir a las 8:10» →", options: ["Vou partir às oito e dez", "Vou parto às oito e dez", "Vou partir as oito e dez"], answer: 0, explain: "ir a + infinitivo + às (horas)." },
      { q: "«El Alfa es el más rápido de todos» →", options: ["O Alfa é mais rápido de todos", "O Alfa é o mais rápido de todos", "O Alfa é o mais rápido que todos"], answer: 1, explain: "Superlativo: o mais rápido DE todos." },
    ],
  },

  "pt-cu-a1-09": {
    sezioni: [
      { t: "Como funciona", body: "gostar de + sustantivo/infinitivo: «gosto de música», «gosto de ouvir fado». Grados: adoro > gosto muito de > gosto de > não gosto de > detesto. jogar para deportes de equipo y juegos (jogar futebol, jogar cartas); fazer para actividades (fazer ioga, fazer desporto); andar de para vehículos (andar de bicicleta)." },
      { t: "Quando se usa", body: "La obligación suave: ter de / ter que + infinitivo: «Tens de ouvir a Amália!». Oir/escuchar: ouvir. El futebol: «ver um jogo» (ver un partido), «os três grandes» (los tres grandes). El finde: «ao fim de semana» (portugués europeo; «no fim de semana» también se oye)." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «gostar» SIEMPRE lleva «de»: «gosto DE fado» — el español «me gusta el fado» no tiene preposición, el portugués sí. 2) «jogar» no es «jugar» en general: se jogam deportes y juegos, pero «brincar» es jugar (niños). 3) «fazer desporto» = hacer deporte; «praticar desporto» más formal. 4) Falso amigo: «gimnasio» = ginásio, pero «academia» en Portugal NO es gimnasio (es academia de estudios o sociedad)." },
      { t: "Na conversa real", body: "La conversación del ocio: «O que gostas de fazer ao fim de semana?» → «Gosto de ouvir música e de andar de bicicleta. E tu?» → «Eu adoro futebol! Vamos ver o Benfica?» → «Boa!». Para recomendar con pasión: «Tens de ouvir a Amália!» (tienes que escuchar a Amália). Y el fado tiene regla: quando canta o fadista, silêncio absoluto." },
    ],
    esempi: [
      { it: "Gosto muito de ouvir fado ao sábado à noite.", es: "Me gusta mucho escuchar fado los sábados por la noche." },
      { it: "Adoro jogar futebol com os amigos.", es: "Adoro jugar al fútbol con los amigos." },
      { it: "Faço ioga de manhã e ando de bicicleta à tarde.", es: "Hago yoga por la mañana y monto en bici por la tarde." },
      { it: "Tens de ver um jogo no estádio da Luz!", es: "¡Tienes que ver un partido en el estadio da Luz!" },
      { it: "Detesto acordar cedo ao domingo.", es: "Detesto despertar temprano el domingo." },
    ],
    usi: [
      { q: "«Me gusta viajar» →", options: ["Gosto viajar", "Gosto de viajar", "Gosto a viajar"], answer: 1, explain: "gostar DE + infinitivo." },
      { q: "«Jugamos al baloncesto los sábados» →", options: ["Fazemos basquetebol ao sábado", "Jogamos basquetebol ao sábado", "Brincamos basquetebol"], answer: 1, explain: "Deporte de equipo → jogar." },
    ],
  },

  "pt-cu-a1-10": {
    sezioni: [
      { t: "Como funciona", body: "ser vs estar funciona casi como en español: ser para lo esencial (é grande, é barato, é tranquila), estar para estados (está limpa, está aberta) y UBICACIÓN (está no corredor — en español también «está»). há para existencia impersonal: «Há muito luz» — y «ter» para lo que el sujeto posee: «A casa tem dois quartos»." },
      { t: "Quando se usa", body: "Vocabulario de vivienda: a casa, o apartamento, um T2 (dos dormitorios), a sala, o quarto, a cozinha, a casa de banho, o corredor, a varanda, a janela. Alquiler: o arrendamento, a renda (alquiler mensual), o andar (piso), o elevador, sem elevador." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «baño» = casa de banho (¡nunca «banheiro», brasileño!). 2) «piso» (vivienda) = apartamento; «piso» (altura) = andar: «moram no terceiro andar». 3) La ubicación usa estar en portugués Y en español — pero la nacionalidad usa ser en ambos: no intentes «estou espanhol». 4) Falso amigo: «prédio» portugués = edificio (no «predio» rural). 5) «moro em Lisboa» = vivo en Lisboa: morar (residir) es el verbo cotidiano; viver = vivir (existir)." },
      { t: "Na conversa real", body: "La visita de piso: «Quantos quartos tem?» → «Tem dois quartos, sala, cozinha e casa de banho» → «Onde está a casa de banho?» → «Está no corredor» → «Não tem elevador? São cinco andares!» → «Mas a vista é incrível». Los anuncios: «T2 na Graça, renda 600 €, azulejos originais» — y el truco: «com despesas incluídas» = con gastos incluidos." },
    ],
    esempi: [
      { it: "A casa é pequena mas tem muita luz.", es: "La casa es pequeña pero tiene mucha luz." },
      { it: "A cozinha está limpa e há azulejos na parede.", es: "La cocina está limpia y hay azulejos en la pared." },
      { it: "Onde está a casa de banho? Está no corredor.", es: "¿Dónde está el baño? Está en el pasillo." },
      { it: "Moro num T2 na Graça, no terceiro andar, sem elevador.", es: "Vivo en un T2 en la Graça, en el tercer piso, sin ascensor." },
      { it: "A renda é quinhentos euros com despesas incluídas.", es: "El alquiler es de quinientos euros con gastos incluidos." },
    ],
    usi: [
      { q: "«El salón es grande» (característica) →", options: ["A sala está grande", "A sala é grande", "A sala há grande"], answer: 1, explain: "Característica esencial → é." },
      { q: "«Vivo en Lisboa» →", options: ["Vivo em Lisboa", "Moro em Lisboa", "Moro no Lisboa"], answer: 1, explain: "morar em = residir en (el cotidiano); «vivo» se reserva para existir." },
    ],
  },

  "pt-cu-a1-11": {
    sezioni: [
      { t: "Como funciona", body: "Numerales y medidas: um/uma, dois/duas (femenino!), três, quatro…; meio quilo (medio kilo, masc.) vs meia dúzia (media docena, fem.); um litro, meio litro; uma dúzia; uma posta (una tajada); o quilo, ao litro (a + o = ao). levar = llevar(se): «levo um quilo de laranjas»." },
      { t: "Quando se usa", body: "En el mercado: «Queria um quilo de laranjas», «meia dúzia de ovos», «meio litro de azeite», «duas postas de bacalhau». Preguntar: «Quanto custa o quilo?», «Está doce?» (¿está dulce?), «Posso provar?» (¿puedo probar?). Cerrar: «É tudo, obrigado!»." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «duas» para femenino: «duas postas», «duas laranjas» — «dois» solo masculino. 2) «meio/meia» concuerda: meio quilo pero meia dúzia, meia hora. 3) Falsos amigos gastronómicos: «polvo» = pulpo ✓; pero «salsa» = perejil (¡la salsa es «molho»!); «atún» = atum; «taza» = chávena. 4) «É tudo» = es todo (para cerrar la compra); «tem tudo» también funciona." },
      { t: "Na conversa real", body: "El mercado en acción: «Bom dia! O que deseja?» → «Queria um quilo de laranjas, meia dúzia de ovos e duas postas de bacalhau» → «Mais alguma coisa?» → «Não, é tudo, obrigado!» → «São sete euros e cinquenta». Los vendedores ofrecen prueba: «Prove, está doce!». Y el pescado rey: bacalhau salgado (se dessalga 24-48h), sardinha assada en junio." },
    ],
    esempi: [
      { it: "Queria um quilo de laranjas e meia dúzia de ovos.", es: "Quería un kilo de naranjas y media docena de huevos." },
      { it: "Meio litro de azeite, por favor.", es: "Medio litro de aceite, por favor." },
      { it: "Levo também duas postas de bacalhau.", es: "Llevo también dos tajadas de bacalao." },
      { it: "Quanto custa o quilo do queijo?", es: "¿Cuánto cuesta el kilo del queso?" },
      { it: "É tudo, obrigado! Quanto é?", es: "¡Es todo, gracias! ¿Cuánto es?" },
    ],
    usi: [
      { q: "«___ dúzia de ovos» (media docena)", options: ["Meio", "Meia", "Meias"], answer: 1, explain: "dúzia es femenino → meia." },
      { q: "«Llevo dos tajadas de bacalao» →", options: ["Levo dois postas de bacalhau", "Levo duas postas de bacalhau", "Compro duas postas de bacalhau agora"], answer: 1, explain: "postas fem. → duas; levar es el verbo natural de compra." },
    ],
  },

  "pt-cu-a1-12": {
    sezioni: [
      { t: "Como funciona", body: "estar com + sustantivo para sensaciones y estados: estou com fome (tengo hambre), está com razão (tiene razón), estou com sono (tengo sueño), com pressa (prisa), com frio/calor (frío/calor), com medo (miedo). Es LA estructura que el español no tiene: el español «tiene», el portugués «está con»." },
      { t: "Quando se usa", body: "Recapitulación A1 para la misión final: ser (identidad), estar com (estados), ter (posesión), há (existencia), queria (pedir), quanto custa (precios), como é que vou para (direcciones), gostar de (gustos), levanto-me às (rutina + horas), estou a + infinitivo (acción en curso). Con estas diez herramientas, cualquier viaje funciona." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «Tengo hambre» → «Estou com fome»: NUNCA «tenho fome» (se entiende pero no es lo natural en pt-PT). 2) «Tengo razón» → «está com razão». 3) Pero «Tengo 25 años» → «tenho 25 anos» (a edad sí se usa ter). 4) «bem-vindo» (bienvenido) concuerda: bem-vindo (hombre)/bem-vinda (mujer)/bem-vindos (grupo). 5) «Foi uma aventura» = fue una aventura — el passado de ser: fui, foste, foi." },
      { t: "Na conversa real", body: "El kit completo del viajero en Oporto: «Chegámos! Bem-vindo ao Porto!» → «Estou com fome: onde se come uma francesinha?» → «Há um café famoso ali em frente» → «Queria uma francesinha e um sumo, por favor» → «Quanto custa?» → «Oito euros» → «Como é que vamos para a Ribeira?» → «Descemos a rua e apanhamos o barco rabelo» → «Foi uma aventura!»." },
    ],
    esempi: [
      { it: "Estou com fome e com sede!", es: "¡Tengo hambre y sed!" },
      { it: "Ela está com razão: o molho é picante.", es: "Ella tiene razón: la salsa es picante." },
      { it: "Bem-vindo ao Porto, a cidade invicta!", es: "¡Bienvenido a Oporto, la ciudad invicta!" },
      { it: "Chegámos de comboio e apanhamos o barco rabelo.", es: "Llegamos en tren y tomamos el barco rabelo." },
      { it: "Foi uma aventura incrível!", es: "¡Fue una aventura increíble!" },
    ],
    usi: [
      { q: "«Tengo sueño» →", options: ["Tenho sono", "Estou com sono", "Estou sono"], answer: 1, explain: "estar com + sono: la estructura natural pt-PT." },
      { q: "«¡Bienvenida a Oporto!» (a una mujer) →", options: ["Bem-vindo ao Porto!", "Bem-vinda ao Porto!", "Bem-vindas ao Porto!"], answer: 1, explain: "Concuerda con la destinataria → bem-vinda." },
    ],
  },
};
