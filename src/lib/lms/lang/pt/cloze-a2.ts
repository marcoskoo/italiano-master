import type { CbClozeText } from "../../cambridge";

/* ═══ PT A2 · Cloze readings — 3 por unidade (inferencia léxica) ════
   Metodología v9.12: el texto en portugués lleva marcadores {1} {2}…
   que el reproductor convierte en huecos; el estudiante deduce la
   palabra por el contexto. Campos: `.it` = portugués de Portugal,
   `.es` = español. */

export const PT_CLOZE_A2: Record<string, CbClozeText[]> = {
  "pt-cu-a2-01": [
    {
      id: "cz-pt-a2-01-1", title: "Segunda-feira no escritório", titleEs: "Lunes en la oficina", minutes: 2,
      paragraphs: [
        { it: "Segunda-feira de manhã, no escritório de Lisboa, ninguém trabalha antes das dez. O Tiago pergunta: «Como foi o fim de {1}?» A Marta responde: «Foi ótimo! Fui a Sintra com o meu namorado.» Todos querem ouvir a história.", es: "Lunes por la mañana, en la oficina de Lisboa, nadie trabaja antes de las diez. Tiago pregunta: «¿Cómo fue el fin de semana?» Marta responde: «¡Fue genial! Fui a Sintra con mi novio.» Todos quieren oír la historia." },
        { it: "«Visitámos o Palácio da Pena de manhã. De tarde, almoçámos numa {2} típica, com toalhas xadrez. Depois comemos um {3} de nata na vila. À noite estávamos cansados, mas muito {4}.» O Tiago sorri: «Vocês aproveitam mesmo a vida!» O chefe chega e todos voltam ao {5}.", es: "«Visitamos el Palácio da Pena por la mañana. Por la tarde, almorzamos en una tasca típica, con manteles de cuadros. Después comimos un pastel de nata en el pueblo. Por la noche estábamos cansados, pero muy contentos.» Tiago sonríe: «¡Vosotros aprovecháis de verdad la vida!» Llega el jefe y todos vuelven al trabajo." },
      ],
      gaps: [
        { options: ["semana", "mês", "dia"], answer: 0, why: "«Como foi o fim de ___?»: la pregunta clásica del lunes portugués." },
        { options: ["padaria", "tasca", "pastelaria"], answer: 1, why: "Se almorza (comida completa) en una tasca típica." },
        { options: ["pastel", "prato", "copo"], answer: 0, why: "«um ___ de nata» = el pastel de nata, el dulzón típico." },
        { options: ["tristes", "zangados", "contentes"], answer: 2, why: "Día genial pero cansado → muy contentos." },
        { options: ["trabalho", "jantar", "comboio"], answer: 0, why: "Llega el jefe → todos vuelven al trabajo." },
      ],
    },
    {
      id: "cz-pt-a2-01-2", title: "O sábado em Sintra", titleEs: "El sábado en Sintra", minutes: 3,
      paragraphs: [
        { it: "No sábado, o Rui e a Inês acordaram às oito e apanharam o comboio de Sintra na estação do Rossio. O dia estava {1}: sol e pouco vento. Na vila, subiram a pé até ao Palácio da Pena, porque a {2} para o autocarro era enorme.", es: "El sábado, Rui e Inês despertaron a las ocho y tomaron el tren de Sintra en la estación del Rossio. El día estaba lindo: sol y poco viento. En el pueblo, subieron a pie hasta el Palácio da Pena, porque la fila del autobús era enorme." },
        { it: "Lá cima, a vista era incrível: viam-se Lisboa, o {3} e o mar. «Isto é o palácio mais bonito de Portugal», disse a Inês. Tiraram muitas {4}. Ao fim da tarde, desceram e comeram um travesseiro, o doce {5} de Sintra, antes de voltarem de comboio.", es: "Arriba, la vista era increíble: se veían Lisboa, el Tajo y el mar. «Este es el palacio más bonito de Portugal», dijo Inês. Tomaron muchas fotografías. Al final de la tarde, bajaron y comieron un travesseiro, el dulce típico de Sintra, antes de volver en tren." },
      ],
      gaps: [
        { options: ["feio", "lindo", "chuvoso"], answer: 1, why: "«sol e pouco vento» → día lindo." },
        { options: ["fila", "porta", "mesa"], answer: 0, why: "Subieron a pie porque la ___ del autobús era enorme → fila." },
        { options: ["Danúbio", "Ebro", "Tejo"], answer: 2, why: "Desde Sintra se ven Lisboa, el río de la ciudad (Tejo) y el mar." },
        { options: ["fotografias", "prendas", "chapéus"], answer: 0, why: "Vista increíble → tomaron muchas fotos." },
        { options: ["típico", "salgado", "caro"], answer: 0, why: "El travesseiro es el dulce típico de Sintra." },
      ],
    },
    {
      id: "cz-pt-a2-01-3", title: "Um domingo calmo", titleEs: "Un domingo tranquilo", minutes: 2,
      paragraphs: [
        { it: "O domingo do Vasco foi calmo: não saiu de casa. De manhã, fez um {1} de iogurte para o pequeno-almoço e ouviu fado na rádio, bem baixinho. Ao almoço, foi comer com os avós, como todos os {2} do ano.", es: "El domingo de Vasco fue tranquilo: no salió de casa. Por la mañana, hizo un pastel de yogur para el desayuno y escuchó fado en la radio, bajito. En el almuerzo, fue a comer con los abuelos, como todos los domingos del año." },
        { it: "À tarde, voltou para casa e viu um {3} antigo de cowboys na televisão, com o avô. Escreveu uma mensagem à mãe, telefonou à irmã e leu trinta páginas de um livro. À noite, preparou a mochila para a {4} de trabalho. «Um domingo em casa é um {5}», pensou, antes de adormecer.", es: "Por la tarde, volvió a casa y vio una película antigua de vaqueros en la tele, con el abuelo. Escribió un mensaje a su madre, llamó por teléfono a su hermana y leyó treinta páginas de un libro. Por la noche, preparó la mochila para la semana de trabajo. «Un domingo en casa es un regalo», pensó, antes de dormirse." },
      ],
      gaps: [
        { options: ["bolo", "sopa", "chá"], answer: 0, why: "«fez um ___ de iogurte» para desayunar: un pastel." },
        { options: ["feriados", "domingos", "aniversários"], answer: 1, why: "La rutina familiar que se repite cada domingo." },
        { options: ["filme", "jogo", "exame"], answer: 0, why: "«antigo de cowboys» en la tele con el abuelo → película." },
        { options: ["semana", "férias", "mudança"], answer: 0, why: "Mochila lista para el lunes: la semana de trabajo." },
        { options: ["castigo", "presente", "trabalho"], answer: 1, why: "Un domingo tranquilo en casa es un regalo." },
      ],
    },
  ],

  "pt-cu-a2-02": [
    {
      id: "cz-pt-a2-02-1", title: "O balcão da pastelaria", titleEs: "El mostrador de la pastelería", minutes: 2,
      paragraphs: [
        { it: "Sábado, oito e meia da manhã. A pastelaria do bairro está cheia. No balcão, os clientes comem de pé: um café e uma {1}, rapidinho. «Deseja?», pergunta a senhora do balcão. Um homem responde: «Queria um galão e um {2} misto, por favor.»", es: "Sábado, ocho y media de la mañana. La pastelería del barrio está llena. En el mostrador, los clientes comen de pie: un café y una tosta, rapidito. «¿Desea algo?», pregunta la señora del mostrador. Un hombre responde: «Quisiera un galão y un croissant mixto, por favor.»" },
        { it: "«Para beber aqui ou para levar?» — «Para levar.» O homem paga e sai. Uma rapariga nova pergunta: «Pode ser uma {3} de leite? Não gosto de café forte.» Ao fundo, um grupo de amigos ri; o cheiro a {4} quente enche a loja. A senhora do balcão sorri: é só o início do {5}.", es: "«¿Para tomar aquí o para llevar?» — «Para llevar.» El hombre paga y sale. Una chica joven pregunta: «¿Puede ser una meia de leite? No me gusta el café fuerte.» Al fondo, un grupo de amigos ríe; el olor a pan caliente llena la tienda. La señora del mostrador sonríe: es solo el inicio del día." },
      ],
      gaps: [
        { options: ["tosta", "bife", "sopa"], answer: 0, why: "En el mostrador de mañana: un café y una tosta." },
        { options: ["croissant", "bife", "frango"], answer: 0, why: "«um ___ misto» = croissant mixto, el clásico del balcão." },
        { options: ["meia", "chávena", "garrafa"], answer: 0, why: "Quiere café suave con leche: una meia de leite." },
        { options: ["pão", "peixe", "flores"], answer: 0, why: "El olor que llena una pastelería por la mañana: pan caliente." },
        { options: ["dia", "inverno", "jantar"], answer: 0, why: "Ocho y media de la mañana → solo el inicio del día." },
      ],
    },
    {
      id: "cz-pt-a2-02-2", title: "A primeira vez que pedi um galão", titleEs: "La primera vez que pedí un galão", minutes: 3,
      paragraphs: [
        { it: "A Elena é espanhola e mora em Lisboa. Na primeira semana, entrou numa pastelaria e pediu «um café com leite», como em Espanha. A senhora do balcão olhou-a com {1}: aqui ninguém pede assim. «Quer dizer um galão?», perguntou. A Elena disse que sim, um pouco {2}.", es: "Elena es española y vive en Lisboa. En la primera semana, entró en una pastelería y pidió «un café con leche», como en España. La señora del mostrador la miró con sorpresa: aquí nadie pide así. «¿Quiere decir un galão?», preguntó. Elena dijo que sí, un poco avergonzada." },
        { it: "O galão chegou num copo alto, com leite quente e só um pouco de café. Estava {3}: a Elena tornou-se fã. Agora, meses depois, pede como uma local: «Um galão no {4}, por favor.» Os falsos amigos entre o espanhol e o português existem — «esquisito» aqui é «estranho», não «delicioso» —, mas o gosto pelo café é mais {5}: agora toma o pequeno-almoço no balcão todas as manhãs.", es: "El galão llegó en un vaso alto, con leche caliente y solo un poco de café. Estaba delicioso: Elena se hizo fan. Ahora, meses después, pide como una local: «Un galão en vaso, por favor.» Los falsos amigos entre el español y el portugués existen — «esquisito» aquí es «raro», no «delicioso» —, pero el gusto por el café es más fuerte: ahora desayuna en el mostrador todas las mañanas." },
      ],
      gaps: [
        { options: ["raiva", "espanto", "fome"], answer: 1, why: "Nadie pide así → mirada de sorpresa." },
        { options: ["contente", "envergonhada", "zangada"], answer: 1, why: "No saber pedir en el país nuevo → un poco avergonzada." },
        { options: ["amargo", "estragado", "delicioso"], answer: 2, why: "Se hizo fan → estaba delicioso." },
        { options: ["copo", "prato", "saco"], answer: 0, why: "El galão se sirve en copo alto (vaso)." },
        { options: ["fraco", "forte", "barato"], answer: 1, why: "Nada la separa ya del café: el gusto es más fuerte." },
      ],
    },
    {
      id: "cz-pt-a2-02-3", title: "A fila de sábado", titleEs: "La fila del sábado", minutes: 2,
      paragraphs: [
        { it: "Ao sábado, a Pastelaria São Roque tem fila na porta. Os vizinhos esperam pela {1} das nove: os pastéis de nata saem do forno e desaparecem em vinte minutos. A Dona Idalina chega sempre às oito e cinquenta e diz, a rir para a fila inteira: «Cheguei a {2}!»", es: "Los sábados, la Pastelaria São Roque tiene fila en la puerta. Los vecinos esperan la hornada de las nueve: los pasteles de nata salen del horno y desaparecen en veinte minutos. Doña Idalina llega siempre a las ocho y cincuenta y dice, riendo para toda la fila: «¡Llegué a tiempo!»" },
        { it: "Dentro, o balcão é um espetáculo: bolo-rei, bolinhos de coco, {3} de nata com canela. O senhor António pede o mesmo há trinta anos: «Uma meia de leite e um pastel, como sempre.» A jovem do balcão responde: «Já sei, senhor António!» Quando a fila anda, a {4} entre todos também anda. Em Portugal, o sábado começa assim: com {5} e conversa.", es: "Dentro, el mostrador es un espectáculo: roscón de reyes, bolitas de coco, pasteles de nata con canela. Don Antonio pide lo mismo desde hace treinta años: «Una meia de leite y un pastel, como siempre.» La joven del mostrador responde: «¡Ya lo sé, don Antonio!» Cuando la fila avanza, la conversación entre todos también avanza. En Portugal, el sábado empieza así: con paciencia y conversación." },
      ],
      gaps: [
        { options: ["fornada", "roupa", "mesa"], answer: 0, why: "Los pasteles salen del horno a las nueve: la hornada." },
        { options: ["horas", "tempo", "casa"], answer: 1, why: "Llega a las 8:50, antes de las nueve: llega a tiempo." },
        { options: ["guardanapos", "saquinhos", "pastéis"], answer: 2, why: "En el mostrador hay dulces: pastéis de nata con canela." },
        { options: ["briga", "conversa", "pressa"], answer: 1, why: "Fila que avanza y charla que avanza entre vecinos." },
        { options: ["pressa", "paciência", "tristeza"], answer: 1, why: "Fila que espera la hornada con conversación: paciencia." },
      ],
    },
  ],

  "pt-cu-a2-03": [
    {
      id: "cz-pt-a2-03-1", title: "As lojas do centro de Braga", titleEs: "Las tiendas del centro de Braga", minutes: 3,
      paragraphs: [
        { it: "O centro de Braga tem duas almas. A Rua do Souto é moderna: lojas de {1}, telefones, cafés chiques. Mas nas ruelas ao lado ficam as lojas tradicionais: o talho do senhor Fontes, a peixaria da Dona Alda, a {2} onde ainda se vende a peso e a retalho.", es: "El centro de Braga tiene dos almas. La Rua do Souto es moderna: tiendas de ropa, teléfonos, cafés chics. Pero en las callejuelas de al lado quedan las tiendas tradicionales: la carnicería del señor Fontes, la pescadería de doña Alda, la ultramarinos donde todavía se vende a peso y al detalle." },
        { it: "Nas lojas antigas, o atendimento é mais {3} do que no centro comercial: perguntam pelo nome do cliente e pela família. Os preços não são os mais {4}, mas a qualidade é melhor e o comércio do {5} agradece. Quem mora em Braga sabe: as compras da semana fazem-se nas duas Bragas.", es: "En las tiendas antiguas, la atención es más personal que en el centro comercial: preguntan por el nombre del cliente y por su familia. Los precios no son los más bajos, pero la calidad es mejor y el comercio del barrio lo agradece. Quien vive en Braga lo sabe: las compras de la semana se hacen en las dos Bragas." },
      ],
      gaps: [
        { options: ["roupa", "chuva", "terra"], answer: 0, why: "Calle comercial moderna: tiendas de ropa (y teléfonos)." },
        { options: ["discoteca", "mercearia", "estação"], answer: 1, why: "Tienda tradicional que vende a peso y al detalle: mercearia." },
        { options: ["impessoal", "pessoal", "rápido"], answer: 1, why: "Preguntan por el nombre y la familia → trato personal." },
        { options: ["baixos", "altos", "justos"], answer: 0, why: "No son los más baratos → los precios no son los más bajos." },
        { options: ["bairro", "futuro", "online"], answer: 0, why: "Tiendas antiguas del barrio → el comercio del barrio agradece." },
      ],
    },
    {
      id: "cz-pt-a2-03-2", title: "No centro comercial", titleEs: "En el centro comercial", minutes: 2,
      paragraphs: [
        { it: "A Catarina odeia o centro comercial ao sábado: há demasiado {1} e as filas dos balcões são mais longas do que as da pastelaria. Mas a amiga dela adora: «Aqui está mais quente do que lá fora», diz, enquanto sobem as {2} rolantes com os sacos na mão.", es: "Catarina odia el centro comercial los sábados: hay demasiado movimiento y las filas de los mostradores son más largas que las de la pastelería. Pero su amiga lo adora: «Aquí hace más calor que afuera», dice, mientras suben las escaleras mecánicas con las bolsas en la mano." },
        { it: "Na loja de roupas, a Catarina experimenta três {3}: uma verde, uma branca e uma azul. «Esta branca fica-te melhor do que aquela verde», diz a amiga. A branca também é a mais {4} das três, e é essa que sai da loja no saco. À saída, as duas tomam um galão na esplanada: as compras merecem o {5}.", es: "En la tienda de ropa, Catarina se prueba tres camisas: una verde, una blanca y una azul. «Esta blanca te queda mejor que aquella verde», dice la amiga. La blanca también es la más barata de las tres, y esa es la que sale de la tienda en la bolsa. A la salida, las dos toman un galão en la terraza: las compras merecen el premio." },
      ],
      gaps: [
        { options: ["movimento", "silêncio", "tempo"], answer: 0, why: "Filas largas y bullicio del sábado: demasiado movimiento." },
        { options: ["ruas", "escadas", "mesas"], answer: 1, why: "En el centro comercial suben las escaleras mecánicas." },
        { options: ["camisas", "vestidos", "cintos"], answer: 0, why: "«uma verde, uma branca e uma azul»: sustantivo femenino singular → camisas." },
        { options: ["elegante", "barata", "cara"], answer: 1, why: "Es la que sale en la bolsa → la más barata de las tres." },
        { options: ["prémio", "castigo", "desconto"], answer: 0, why: "Después de comprar, un galão: las compras merecen el premio." },
      ],
    },
    {
      id: "cz-pt-a2-03-3", title: "A camisa perfeita", titleEs: "La camisa perfecta", minutes: 2,
      paragraphs: [
        { it: "O Bruno precisa de uma camisa para o casamento do primo. Na montra da loja vê duas: esta branca, de {1} fino, e aquela azul, mais quente. A branca é a mais elegante, mas também é a mais {2} — custa mais de sessenta euros.", es: "Bruno necesita una camisa para la boda del primo. En el escaparate de la tienda ve dos: esta blanca, de tejido fino, y aquella azul, más abrigada. La blanca es la más elegante, pero también la más cara — cuesta más de sesenta euros." },
        { it: "O vendedor aproxima-se: «Pode experimentar {3}, se quiser.» O Bruno prova a branca: fica-lhe {4} no corpo, mas o colarinho aperta. A azul é mais larga e mais barata — e o espelho não mente. «Levo {5}», decide o Bruno, sorrindo. Às vezes, a opção prática ganha à opção bonita.", es: "El vendedor se acerca: «Puede probar ambas, si quiere.» Bruno se prueba la blanca: le queda bien en el cuerpo, pero el cuello aprieta. La azul es más holgada y más barata — y el espejo no miente. «Me llevo la azul», decide Bruno, sonriendo. A veces, la opción práctica gana a la opción bonita." },
      ],
      gaps: [
        { options: ["tecido", "couro", "papel"], answer: 0, why: "Material fino de una camisa: tejido." },
        { options: ["suave", "cara", "leve"], answer: 1, why: "«custa mais de sessenta euros» → la más cara." },
        { options: ["janelas", "ambas", "sacos"], answer: 1, why: "Está dudando entre dos camisas: puede probar ambas." },
        { options: ["mal", "bem", "apertada"], answer: 1, why: "Le queda ___ en el cuerpo, pero el cuello aprieta → bien." },
        { options: ["a branca", "a azul", "as duas"], answer: 1, why: "La azul es más holgada y más barata → se lleva la azul." },
      ],
    },
  ],

  "pt-cu-a2-04": [
    {
      id: "cz-pt-a2-04-1", title: "O comboio das oito", titleEs: "El tren de las ocho", minutes: 3,
      paragraphs: [
        { it: "Na sexta-feira, o Francisco saiu de casa às sete e meia para apanhar o comboio das oito, em Santa Apolónia. O dia estava lindo: o sol {1} e o céu estava limpo. Comprou o bilhete na {2} automática da CP e sentou-se à janela.", es: "El viernes, Francisco salió de casa a las siete y media para tomar el tren de las ocho, en Santa Apolónia. El día estaba precioso: el sol brillaba y el cielo estaba limpio. Compró el billete en la máquina automática de la CP y se sentó junto a la ventana." },
        { it: "O comboio partiu em ponto. Durante a viagem, o Francisco ia a ler um livro quando, de repente, o comboio {3} numa estação pequena. Um aviso explicou o problema: havia uma {4} na linha e os comboios iam atrasados. «Bem-vindo ao Porto», pensou ele, duas horas depois. Lá fora, {5} muito e o vento era forte.", es: "El tren salió puntual. Durante el viaje, Francisco iba leyendo un libro cuando, de repente, el tren paró en una estación pequeña. Un aviso explicó el problema: había una avería en la vía y los trenes iban retrasados. «Bienvenido a Oporto», pensó, dos horas después. Afuera llovía mucho y el viento era fuerte." },
      ],
      gaps: [
        { options: ["brilhava", "choveu", "sumiu"], answer: 0, why: "Cielo limpio y día precioso: el sol brillaba (descripción)." },
        { options: ["máquina", "porta", "mesa"], answer: 0, why: "Billete en la máquina automática de la CP." },
        { options: ["parou", "parava", "partiu"], answer: 0, why: "«De repente» + aviso de problema → acción puntual: parou." },
        { options: ["avaria", "festa", "praia"], answer: 0, why: "Trenes retrasados por la línea: una avería." },
        { options: ["brilhava", "chovia", "nevou"], answer: 1, why: "Escenario de llegada con viento fuerte: llovía (descripción)." },
      ],
    },
    {
      id: "cz-pt-a2-04-2", title: "A chegada ao Porto", titleEs: "La llegada a Oporto", minutes: 2,
      paragraphs: [
        { it: "A chegada ao Porto não foi como o Francisco imaginava. Ele sonhava com um pôr do sol {1} sobre o rio; em vez disso, recebeu chuva e vento. Mas quando o táxi atravessou a {2} Dom Luís I, o Francisco esqueceu o tempo: as casas desciam até ao Douro, {3} e antigas, como num postal.", es: "La llegada a Oporto no fue como Francisco imaginaba. Él soñaba con un atardecer dorado sobre el río; en cambio, recibió lluvia y viento. Pero cuando el taxi atravesó el puente Dom Luís I, Francisco olvidó el tiempo: las casas bajaban hasta el Duero, coloridas y antiguas, como en una postal." },
        { it: "Na Ribeira, entrou numa tasca pequena, de paredes forradas com azulejos antigos, para escapar à chuva. O {4} do dia era tripas à moda do Porto, e o Francisco pediu meia dose. Enquanto comia, via os {5} rabelo no rio, através da janela embaciada. «Chove lá fora», pensou, «mas o Porto é lindo em qualquer tempo.»", es: "En la Ribeira, entró en una tasca pequeña, de paredes forradas con azulejos antiguos, para escapar de la lluvia. El plato del día era tripas a la moda de Oporto, y Francisco pidió media ración. Mientras comía, veía los barcos rabelo en el río, a través de la ventana empañada. «Llueve afuera», pensó, «pero Oporto es precioso con cualquier tiempo.»" },
      ],
      gaps: [
        { options: ["nublado", "dourado", "molhado"], answer: 1, why: "Soñaba con un atardecer dorado sobre el río." },
        { options: ["ponte", "rua", "loja"], answer: 0, why: "El taxi cruzó el puente Dom Luís I sobre el Duero." },
        { options: ["modernas", "escuras", "coloridas"], answer: 2, why: "Las casas de la Ribeira, antiguas y como en una postal: coloridas." },
        { options: ["empregado", "prato", "guardanapo"], answer: 1, why: "«era tripas à moda do Porto»: el plato del día." },
        { options: ["barcos", "carros", "comboios"], answer: 0, why: "En el Duero se ven los barcos rabelo." },
      ],
    },
    {
      id: "cz-pt-a2-04-3", title: "O dia da tormenta", titleEs: "El día de la tormenta", minutes: 3,
      paragraphs: [
        { it: "A Marta também viajou para o Porto nesse fim de semana. Quando o comboio dela chegou, o céu estava {1} e troava ao longe. Ela não tinha guarda-chuva, porque em Lisboa a manhã {2} quente e limpa. «Regra número um do norte», disse um senhor simpático: «leva-se sempre {3}.»", es: "Marta también viajó a Oporto ese fin de semana. Cuando su tren llegó, el cielo estaba oscuro y tronaba a lo lejos. Ella no tenía paraguas, porque en Lisboa la mañana estaba cálida y limpia. «Regla número uno del norte», dijo un señor simpático: «siempre se lleva paraguas.»" },
        { it: "Meia hora depois, a tormenta chegou ao máximo: a chuva batia nas janelas do café e as ruas ficaram como {4}. Depois, tão depressa como chegou, a tormenta {5}. A Marta saiu: o ar estava fresco, lavado, e um arco-íris duplo atravessava o céu. O Porto tem destas coisas: quatro estações num dia.", es: "Media hora después, la tormenta llegó a su máximo: la lluvia golpeaba las ventanas del café y las calles quedaron como ríos. Después, tan rápido como llegó, la tormenta paró. Marta salió: el aire estaba fresco, lavado, y un doble arcoíris cruzaba el cielo. Oporto tiene estas cosas: cuatro estaciones en un día." },
      ],
      gaps: [
        { options: ["escuro", "azul", "limpo"], answer: 0, why: "Tronaba a lo lejos → cielo oscuro." },
        { options: ["estava", "esteve", "estará"], answer: 0, why: "Descripción de la mañana lisboeta: imperfecto «estava»." },
        { options: ["guarda-chuva", "biquíni", "chapéu de sol"], answer: 0, why: "En el norte llueve sin aviso: siempre se lleva paraguas." },
        { options: ["rias", "novas", "desertas"], answer: 0, why: "Lluvia fuerte → calles como ríos." },
        { options: ["continuou", "parou", "nasceu"], answer: 1, why: "«Tan rápido como llegó» → la tormenta paró." },
      ],
    },
  ],

  "pt-cu-a2-05": [
    {
      id: "cz-pt-a2-05-1", title: "O grupo do sábado", titleEs: "El grupo del sábado", minutes: 2,
      paragraphs: [
        { it: "Quinta-feira à noite. No grupo «Amigos do Bairro», os mensagens voam: «O Benfica joga às três. Vamos?» — «Claro! Vou comprar os {1} amanhã.» — «Eu vou chegar cedo, para apanhar um bom {2} no estádio», escreve o Nuno, que nunca perde um aquecimento.", es: "Jueves por la noche. En el grupo «Amigos del Barrio», los mensajes vuelan: «El Benfica juega a las tres. ¿Vamos?» — «¡Claro! Voy a comprar los billetes mañana.» — «Yo voy a llegar temprano, para conseguir un buen lugar en el estadio», escribe Nuno, que nunca pierde un calentamiento." },
        { it: "Depois do jogo, o plano continua: se fizer sol, vão {3} junto ao Tejo; se chover, ficam num café da Baixa a ver o {4} em repetição. A Sofia propõe: «Jantamos às nove no Ramiro?» Todos respondem com a mesma {5}: «Combinado!» O sábado já está completo — e ainda é quinta-feira.", es: "Después del partido, el plan continúa: si hace sol, van a pasear junto al Tajo; si llueve, se quedan en un café de la Baixa viendo el partido en repetición. Sofia propone: «¿Cenamos a las nueve en el Ramiro?» Todos responden con la misma palabra: «¡Combinado!» El sábado ya está completo — y todavía es jueves." },
      ],
      gaps: [
        { options: ["bilhetes", "desportos", "fones"], answer: 0, why: "Ir al partido → comprar los billetes." },
        { options: ["lugar", "comboio", "cachorro"], answer: 0, why: "Llegar temprano al estadio: para conseguir un buen lugar." },
        { options: ["passear", "nadar", "trabalhar"], answer: 0, why: "Si hace sol, pasear junto al río." },
        { options: ["jogo", "filme", "desfile"], answer: 0, why: "Si llueven, ven el partido en repetición." },
        { options: ["pergunta", "palavra", "mentira"], answer: 1, why: "«Combinado!» es la palabra que cierra los planes." },
      ],
    },
    {
      id: "cz-pt-a2-05-2", title: "O dia do jogo", titleEs: "El día del partido", minutes: 3,
      paragraphs: [
        { it: "Sábado, meio-dia. O Zé e o irmão já estão à {1} do estádio da Luz. Compram duas imperiais e um cachorro-quente e procuram o {2} na bancada. Ainda faltam duas horas, mas o estádio vai enchendo: hoje o Benfica, um dos três grandes, joga pelo campeonato.", es: "Sábado, mediodía. Zé y su hermano ya están en la puerta del estadio da Luz. Compran dos cervezas imperial y un perrito caliente y buscan su lugar en la grada. Faltan dos horas, pero el estadio se va llenando: hoy el Benfica, uno de los tres grandes, juega por el campeonato." },
        { it: "Às três em ponto, o jogo {3}. O ambiente é incrível: as luzes, os cânticos, o barulho da {4}. No fim, vitória por dois a zero. Saem do estádio a cantar; o Zé e o irmão decidem continuar a {5} na cidade: primeiro um café, depois o passeio junto ao Tejo ao pôr do sol. «Foi o sábado perfeito», diz o Zé. E ainda faltava o jantar.", es: "A las tres en punto, el partido empezó. El ambiente es increíble: las luces, los cánticos, el ruido de la multitud. Al final, victoria por dos a cero. Salen del estadio cantando; Zé y su hermano deciden continuar la fiesta en la ciudad: primero un café, después el paseo junto al Tajo al atardecer. «Fue el sábado perfecto», dice Zé. Y todavía faltaba la cena." },
      ],
      gaps: [
        { options: ["porta", "chuva", "mesa"], answer: 0, why: "Esperan en la puerta del estadio dos horas antes." },
        { options: ["palco", "lugar", "balcão"], answer: 1, why: "En la grada buscan su lugar." },
        { options: ["acabou", "adiou", "começou"], answer: 2, why: "A la hora marcada, el partido empezó." },
        { options: ["multidão", "televisão", "máquina"], answer: 0, why: "Luces, cánticos y ruido: de la multitud." },
        { options: ["aula", "festa", "soneca"], answer: 1, why: "Victoria y cantos → continuar la fiesta en la ciudad." },
      ],
    },
    {
      id: "cz-pt-a2-05-3", title: "Planos com o Rui", titleEs: "Planes con Rui", minutes: 2,
      paragraphs: [
        { it: "O Rui odeia planos. A namorada, a Inês, adora. Na sexta-feira, ela manda uma {1} com três propostas para o sábado: museu de manhã, piquenique no parque ao {2} e um concerto de fado à noite.", es: "Rui odia los planes. Su novia, Inês, los adora. El viernes, ella manda un mensaje con tres propuestas para el sábado: museo por la mañana, pícnic en el parque al mediodía y un concierto de fado por la noche." },
        { it: "O Rui responde com um emoji e uma pergunta: «E se chover?» A Inês, que conhece o {3} do Porto melhor do que ninguém, já tem resposta: «Plano B: pastelaria, cinema e um café com {4} de fado para o fim da noite.» O Rui sorri: ela pensa em tudo. «Vou buscar-te às dez», responde. Há casais que se completam: um faz os {5}, o outro aproveita-os.", es: "Rui responde con un emoji y una pregunta: «¿Y si llueve?» Inês, que conoce el clima de Oporto mejor que nadie, ya tiene respuesta: «Plan B: pastelería, cine y un café con música de fado para el final de la noche.» Rui sonríe: ella piensa en todo. «Voy a buscarte a las diez», responde. Hay parejas que se complementan: uno hace los planes, el otro los aprovecha." },
      ],
      gaps: [
        { options: ["encomenda", "mensagem", "multa"], answer: 1, why: "La manda por el móvil: un mensaje con propuestas." },
        { options: ["meio-dia", "jantar", "luar"], answer: 0, why: "Pícnic entre el museo y la noche: al mediodía." },
        { options: ["tempo", "idioma", "trânsito"], answer: 0, why: "«¿Y si llueve?» → ella conoce el clima (tempo) de Oporto." },
        { options: ["música", "vinho", "fotos"], answer: 0, why: "Café con música de fado para el final de la noche." },
        { options: ["erros", "planos", "jantares"], answer: 1, why: "Uno hace los planes, el otro los aprovecha." },
      ],
    },
  ],

  "pt-cu-a2-06": [
    {
      id: "cz-pt-a2-06-1", title: "A visita ao T2", titleEs: "La visita al T2", minutes: 3,
      paragraphs: [
        { it: "A mediadora mostra o T2 em Coimbra: «Há uma {1} grande com varanda, dois quartos e uma cozinha equipada. A casa de banho fica entre os quartos. O quarto principal tem roupeiro embutido e uma janela para o {2}.»", es: "La mediadora muestra el T2 en Coimbra: «Hay un salón grande con balcón, dos dormitorios y una cocina equipada. El cuarto de baño queda entre los dormitorios. El dormitorio principal tiene armario empotrado y una ventana al jardín.»" },
        { it: "«Há alguma coisa que precise de {3}?», pergunta o visitante. «Nada de importante: uma torneira na cozinha», responde ela. Do quarto vê-se um jardim; ao lado do prédio há uma {4} aberta até à meia-noite, o que para um estudante é ouro. «Vou pensar», diz ele. Mas no fundo já sabe: é {5}.", es: "«¿Hay algo que necesite reparación?», pregunta el visitante. «Nada importante: un grifo en la cocina», responde ella. Desde el dormitorio se ve un jardín; al lado del edificio hay una pastelería abierta hasta la medianoche, que para un estudiante es oro. «Lo voy a pensar», dice él. Pero en el fondo ya lo sabe: es este." },
      ],
      gaps: [
        { options: ["garagem", "sala", "cave"], answer: 1, why: "T2: dos dormitorios + salón grande con balcón." },
        { options: ["jardim", "telhado", "vizinho"], answer: 0, why: "Desde el dormitorio se ve un jardín: ventana al jardín." },
        { options: ["reparação", "festa", "sorte"], answer: 0, why: "Un grifo averiado → necesita reparación." },
        { options: ["piscina", "escola", "pastelaria"], answer: 2, why: "Abierta hasta la medianoche, oro para el estudiante: pastelería." },
        { options: ["longe", "este", "caro"], answer: 1, why: "Le gustó todo: ya sabe que es este (el piso correcto)." },
      ],
    },
    {
      id: "cz-pt-a2-06-2", title: "O bairro de Santa Clara", titleEs: "El barrio de Santa Clara", minutes: 2,
      paragraphs: [
        { it: "O bairro de Santa Clara fica perto do rio Mondego, em Coimbra. Há uma {1} de autocarros mesmo em frente do prédio, um supermercado ao lado e uma feira ao sábado de manhã. A {2} para o centro passa a cem metros: os estudantes atravessam a ponte com as mochilas às costas.", es: "El barrio de Santa Clara queda cerca del río Mondego, en Coimbra. Hay una parada de autobuses justo enfrente del edificio, un supermercado al lado y un mercado los sábados por la mañana. La calle hacia el centro pasa a cien metros: los estudiantes cruzan el puente con las mochilas a la espalda." },
        { it: "Há dois cafés na praça: um para os {3} do bairro, com jornais e dominó, e outro para os estudantes, com portáteis e wifi. À tarde, os reformados jogam cartas à {4} do café; de noite, o silêncio só é cortado pelos comboios. «Aqui há tudo o que {5}», diz a mediadora. E é verdade: até um jardim às portas de casa.", es: "Hay dos cafés en la plaza: uno para los jubilados del barrio, con periódicos y dominó, y otro para los estudiantes, con portátiles y wifi. Por la tarde, los jubilados juegan a las cartas en la puerta del café; de noche, el silencio solo lo cortan los trenes. «Aquí hay todo lo que necesitas», dice la mediadora. Y es verdad: hasta un jardín a las puertas de casa." },
      ],
      gaps: [
        { options: ["paragem", "oficina", "livraria"], answer: 0, why: "Autobuses: una parada enfrente del edificio." },
        { options: ["tabela", "rua", "porta"], answer: 1, why: "Una calle hacia el centro pasa a cien metros." },
        { options: ["turistas", "reformados", "estudantes"], answer: 1, why: "Café de periódicos y dominó: para los jubilados (reformados)." },
        { options: ["chuva", "espera", "porta"], answer: 2, why: "Juegan a las cartas en la puerta del café." },
        { options: ["odeias", "perdes", "precisas"], answer: 2, why: "«Aquí hay todo lo que necesitas»." },
      ],
    },
    {
      id: "cz-pt-a2-06-3", title: "A decisão", titleEs: "La decisión", minutes: 2,
      paragraphs: [
        { it: "De volta à agência, a mediadora faz as contas: a renda é de quatrocentos {1}, a caução de dois meses e o condomínio de vinte e cinco por mês. «As {2} incluem a água, mas não incluem a eletricidade», explica ela.", es: "De vuelta a la agencia, la mediadora hace las cuentas: la renta es de cuatrocientos euros, la fianza de dos meses y la comunidad de veinticinco al mes. «Los gastos incluyen el agua, pero no incluyen la electricidad», explica ella." },
        { it: "O estudante faz as suas contas na calculadora do telemóvel: com o ordenado do part-time, dá para {3} a renda e ainda sobra para a pastelaria. «Vou assinar o {4}», decide. «Boa escolha», responde a mediadora. «A casa é pequena, mas o {5} compensa: rio, pastelaria e autocarro à porta.» Três dias depois, as chaves eram dele.", es: "El estudiante hace sus cuentas en la calculadora del móvil: con el sueldo del part-time, da para pagar la renta y todavía sobra para la pastelería. «Voy a firmar el contrato», decide. «Buena elección», responde la mediadora. «La casa es pequeña, pero la ubicación compensa: río, pastelería y autobús en la puerta.» Tres días después, las llaves eran suyas." },
      ],
      gaps: [
        { options: ["dólares", "euros", "quilos"], answer: 1, why: "La renta en Portugal se paga en euros." },
        { options: ["despesas", "presentes", "juros"], answer: 0, why: "Agua incluida, electricidad no: los gastos (despesas)." },
        { options: ["aumentar", "adiar", "pagar"], answer: 2, why: "Con el sueldo, da para pagar la renta." },
        { options: ["cheque", "contrato", "diploma"], answer: 1, why: "Arrendar: se firma el contrato." },
        { options: ["tamanho", "preço", "local"], answer: 2, why: "Casa pequeña pero río, pastelería y autobús: la ubicación compensa." },
      ],
    },
  ],

  "pt-cu-a2-07": [
    {
      id: "cz-pt-a2-07-1", title: "A consulta", titleEs: "La consulta", minutes: 3,
      paragraphs: [
        { it: "O Rafael está constipado há três dias: tem dor de garganta, tosse seca e um pouco de {1}. Liga para o centro de saúde de Setúbal e marca a {2} para as onze e meia. Na sala de espera, ouve-se tossir de todo o lado: o {3} também mudou de estação.", es: "Rafael está resfriado desde hace tres días: tiene dolor de garganta, tos seca y algo de fiebre. Llama al centro de salud de Setúbal y pide cita para las once y media. En la sala de espera, se oye toser por todas partes: el clima también cambió de estación." },
        { it: "«Diga, doutora», cumprimenta ele. A médica examina-o: «A garganta está vermelha, mas não é nada de {4}. Deve descansar, beber muitos líquidos e não deve ir trabalhar amanhã.» Passa-lhe uma {5} para o xarope e recomenda chá com mel e limão. «Se em três dias não melhorar, volte cá», diz. O Rafael sai aliviado.", es: "«Dígame, doctora», la saluda él. La doctora lo examina: «La garganta está roja, pero no es nada grave. Debe descansar, beber muchos líquidos y no debe ir a trabajar mañana.» Le extiende una receta para el jarabe y recomienda té con miel y limón. «Si en tres días no mejora, vuelva», dice. Rafael sale aliviado." },
      ],
      gaps: [
        { options: ["fome", "febre", "frio"], answer: 1, why: "Resfriado con dolor de garganta y tos: algo de fiebre." },
        { options: ["festa", "reunião", "consulta"], answer: 2, why: "En el centro de salud se pide cita para la consulta." },
        { options: ["tempo", "comboio", "relógio"], answer: 0, why: "Sala llena de tosidos: el clima también cambió de estación." },
        { options: ["bonito", "grave", "novo"], answer: 1, why: "Garganta roja pero tranquilizadora: nada de grave." },
        { options: ["receita", "multa", "prova"], answer: 0, why: "La doctora extiende una receta para el jarabe." },
      ],
    },
    {
      id: "cz-pt-a2-07-2", title: "A farmácia de serviço", titleEs: "La farmacia de guardia", minutes: 2,
      paragraphs: [
        { it: "A farmácia de serviço fica na avenida principal, com uma cruz {1} acesa na montra. O farmacêutico lê a receita do Rafael e traz o xarope. «Deve tomá-lo três vezes ao dia, depois das {2}, e terminar o frasco inteiro», explica.", es: "La farmacia de guardia queda en la avenida principal, con una cruz verde encendida en el escaparate. El farmacéutico lee la receta de Rafael y trae el jarabe. «Debe tomarlo tres veces al día, después de las comidas, y terminar el frasco entero», explica." },
        { it: "O Rafael compra também pastilhas para a garganta e um pacote de {3} para o chá. «Está constipado, não é? Pois este inverno há muita {4} por aí», diz o farmacêutico. «Descanse este fim de semana: o corpo tem as suas {5}.» Na rua, o Rafael tosse, mas sorri: em Portugal, até a farmácia tem conversa.", es: "Rafael compra también pastillas para la garganta y un paquete de miel para el té. «Está resfriado, ¿verdad? Pues este invierno hay mucha gripe por ahí», dice el farmacéutico. «Descanse este fin de semana: el cuerpo tiene sus leyes.» En la calle, Rafael tose, pero sonríe: en Portugal, hasta la farmacia tiene conversación." },
      ],
      gaps: [
        { options: ["encarnada", "verde", "amarela"], answer: 1, why: "En Portugal la cruz de las farmacias es verde." },
        { options: ["aulas", "provas", "refeições"], answer: 2, why: "Jarabe tres veces al día, después de las comidas." },
        { options: ["mel", "arroz", "café"], answer: 0, why: "Para el té de la garganta: un paquete de miel." },
        { options: ["gripe", "música", "chuva"], answer: 0, why: "Resfriados del invierno: mucha gripe por ahí." },
        { options: ["leis", "férias", "contas"], answer: 0, why: "Descansar: el cuerpo tiene sus leyes." },
      ],
    },
    {
      id: "cz-pt-a2-07-3", title: "O conselho da médica", titleEs: "El consejo de la doctora", minutes: 2,
      paragraphs: [
        { it: "A médica do Rafael é famosa no bairro pelos seus conselhos. «Deveria dormir oito horas, como toda a gente», diz a todos. Ao Rafael, acrescentou: «Não deveria tomar café à noite, nem à {1}: a cafeína rouba o sono e o sono cura.»", es: "La doctora de Rafael es famosa en el barrio por sus consejos. «Debería dormir ocho horas, como todo el mundo», les dice a todos. A Rafael, añadió: «No debería tomar café por la noche, ni por la tarde: la cafeína roba el sueño y el sueño cura.»" },
        { it: "E ainda: «Deve beber água, comer {2} com vitamina C e sair a andar quando o sol aparecer. O corpo não é uma {3}: é um jardim. Rega-o todos os dias.» O Rafael segue o conselho à letra: chá de limão à noite, uma sopa ao meio-dia e uma {4} ao sol. Três dias depois, a tosse desapareceu. «Aquela médica devia ter um programa na {5}», diz a mãe dele, orgulhosa. «Já cura só de ouvir.»", es: "Y aún más: «Debe beber agua, comer naranjas con vitamina C y salir a caminar cuando salga el sol. El cuerpo no es una máquina: es un jardín. Riega todos los días.» Rafael sigue el consejo a rajatabla: té de limón por la noche, una sopa al mediodía y una caminata al sol. Tres días después, la tos desapareció. «Aquella doctora debería tener un programa en la televisión», dice su madre, orgullosa. «Ya cura solo de oírla.»" },
      ],
      gaps: [
        { options: ["manhã", "tarde", "noite"], answer: 1, why: "Café de noche ni por la tarde: la cafeína roba el sueño." },
        { options: ["bifes", "pães", "laranjas"], answer: 2, why: "Con vitamina C: naranjas." },
        { options: ["máquina", "flor", "ferramenta"], answer: 0, why: "«No es una máquina: es un jardín»." },
        { options: ["caminhada", "prova", "casa"], answer: 0, why: "«Salir a caminar al sol» → una caminata." },
        { options: ["farmácia", "televisão", "escola"], answer: 1, why: "Un programa en la televisión: cura solo de oírla." },
      ],
    },
  ],

  "pt-cu-a2-08": [
    {
      id: "cz-pt-a2-08-1", title: "O almoço na tasca", titleEs: "El almuerzo en la tasca", minutes: 3,
      paragraphs: [
        { it: "Meio-dia e meia, tasca da Baixa, em Lisboa. A {1} na porta anuncia: «Prato do dia: bacalhau com grão». O empregado, de lenço ao pescoço, pergunta: «Deseja {2}? A de hoje é de legumes.» — «Sim, e meio litro do vinho da casa.»", es: "Doce y media, tasca de la Baixa, en Lisboa. La carta en la puerta anuncia: «Plato del día: bacalao con garbanzos». El camarero, con pañuelo al cuello, pregunta: «¿Desea sopa? La de hoy es de verduras.» — «Sí, y medio litro del vino de la casa.»" },
        { it: "O couvert chega sem pedir: pão, {3} e azeite. O cliente come devagar, como manda a regra. Quando o empregado passa de novo, pergunta pela {4}: «E para sobremesa? Tem doce da casa e marmelada com queijo.» — «Só o café, obrigado.» — «Vou trazer a {5}.» A tasca esvazia devagar: em Portugal, almoçar é um assunto demorado.", es: "El couvert llega sin pedirlo: pan, mantequilla y aceite. El cliente come despacio, como manda la regla. Cuando el camarero vuelve a pasar, pregunta por el postre: «¿Y de postre? Hay dulce de la casa y dulce de membrillo con queso.» — «Solo el café, gracias.» — «Voy a traer la cuenta.» La tasca se vacía despacio: en Portugal, almorzar es un asunto que lleva tiempo." },
      ],
      gaps: [
        { options: ["ementa", "fatura", "planta"], answer: 0, why: "Anuncia el plato del día en la puerta: la ementa (carta)." },
        { options: ["conta", "sopa", "mesa"], answer: 1, why: "«La de hoy es de verduras» → la sopa." },
        { options: ["manteiga", "carne", "fruta"], answer: 0, why: "El couvert clásico: pan, mantequilla y aceite." },
        { options: ["bebida", "conta", "sobremesa"], answer: 2, why: "«¿Y de postre?» → pregunta por la sobremesa." },
        { options: ["conta", "sopa", "bicha"], answer: 0, why: "Solo el café, final del almuerzo: la cuenta." },
      ],
    },
    {
      id: "cz-pt-a2-08-2", title: "O prato do dia da tia Graça", titleEs: "El plato del día de tía Graça", minutes: 2,
      paragraphs: [
        { it: "O bacalhau com grão é o prato de terça-feira da tia Graça, dona da {1} há vinte anos. «Cozinho para quarenta pessoas todos os dias, nem uma mais: quem chega tarde, come o que sobra», diz. O bacalhau dessala três dias, o grão cozinha devagar: não há {2} na cozinha dela.", es: "El bacalao con garbanzos es el plato del martes de tía Graça, dueña de la tasca desde hace veinte años. «Cocino para cuarenta personas cada día, ni una más: quien llega tarde, come lo que sobra», dice. El bacalao se desala tres días, el garbanzo se cuece despacio: no hay prisa en su cocina." },
        { it: "«Quantas {3} quer?», pergunta ela ao cliente novo. «Uma dá para mim.» O cliente come o pão com azeite à espera, feliz. Ao fundo, dois amigos partilham uma {4} de vinho tinto e um queijo. Quando o cliente paga, o troco vem com um {5} de bom apetite: «Amanhã tem polvo à lagareiro. Volte cá.» Ele vai voltar: ninguém resiste à tia Graça.", es: "«¿Cuántas raciones quiere?», le pregunta al cliente nuevo. «Una me llega.» El cliente come pan con aceite esperando, feliz. Al fondo, dos amigos comparten una botella de vino tinto y un queso. Cuando el cliente paga, el cambio viene con un recado de buen apetito: «Mañana hay pulpo a la lagareiro. Vuelva.» Él va a volver: nadie se resiste a tía Graça." },
      ],
      gaps: [
        { options: ["tasca", "livraria", "banco"], answer: 0, why: "Donde se sirve el plato del día: la tasca." },
        { options: ["pressa", "sal", "fogo"], answer: 0, why: "Bacalao tres días, garbanzo despacio: sin prisa." },
        { options: ["doses", "contas", "mesas"], answer: 0, why: "«Una me llega» → ¿cuántas raciones (doses)?" },
        { options: ["garrafa", "frota", "fila"], answer: 0, why: "Dos amigos comparten una botella de vino tinto." },
        { options: ["recado", "desconto", "bilhete"], answer: 0, why: "El cambio viene con un recado de buen apetito." },
      ],
    },
    {
      id: "cz-pt-a2-08-3", title: "A conta, por favor", titleEs: "La cuenta, por favor", minutes: 2,
      paragraphs: [
        { it: "Fim de almoço na tasca. O cliente pede a {1} com a frase mágica: «A conta, por favor.» O empregado traz o papel: couvert, sopa, prato do dia e meio litro de vinho somam catorze euros. «Está barato para a {2}», pensa o cliente, que veio de Paris.", es: "Fin del almuerzo en la tasca. El cliente pide la cuenta con la frase mágica: «La cuenta, por favor.» El camarero trae el papel: couvert, sopa, plato del día y medio litro de vino suman catorce euros. «Está barato para la Baixa», piensa el cliente, que vino de París." },
        { it: "O cliente paga com uma nota de {3} euros e diz para ficar com o troco. «O serviço está incluído», avisa o empregado: em Portugal, a {4} não é obrigatória como nos Estados Unidos — arredonda-se ou deixa-se o troco pequeno. «Muito obrigado e boa {5}!», despede-se o empregado. «Até amanhã!» — na tasca do bairro, todo o cliente é um cliente para voltar.", es: "El cliente paga con un billete de veinte euros y dice que se quede con el cambio. «El servicio está incluido», avisa el camarero: en Portugal, la propina no es obligatoria como en Estados Unidos — se redondea o se deja el cambio pequeño. «¡Muchas gracias y buena digestión!», se despide el camarero. «¡Hasta mañana!» — en la tasca del barrio, todo cliente es un cliente para volver." },
      ],
      gaps: [
        { options: ["sopa", "chave", "conta"], answer: 2, why: "«La cuenta, por favor» = la frase mágica para pedir la cuenta." },
        { options: ["Baixa", "Moda", "Boavista"], answer: 0, why: "La tasca está en el centro turístico: barato para la Baixa." },
        { options: ["vinte", "duas", "duzentos"], answer: 0, why: "Cuenta de 14 €: paga con un billete de veinte." },
        { options: ["renda", "gorjeta", "caução"], answer: 1, why: "No obligatoria como en EE. UU.: la propina." },
        { options: ["sorte", "digestão", "viagem"], answer: 1, why: "Despedida después de almorzar: buena digestión." },
      ],
    },
  ],

  "pt-cu-a2-09": [
    {
      id: "cz-pt-a2-09-1", title: "O cartaz na montra", titleEs: "El cartel en el escaparate", minutes: 2,
      paragraphs: [
        { it: "A Sofia estuda em Lisboa e procura um part-time. Ao passar em frente da {1} do bairro, vê um cartaz na montra: «Procura-se: trabalhador estudante para part-time. Experiência {2}: sim.» Ela entra, com o coração a bater.", es: "Sofía estudia en Lisboa y busca un part-time. Al pasar frente a la librería del barrio, ve un cartel en el escaparate: «Se busca: estudiante trabajador para part-time. Experiencia necesaria: sí.» Entra, con el corazón acelerado." },
        { it: "A dona da loja, a Dona Lurdes, recebe-a com um sorriso: «Já {3} em livrarias?» — «Ainda não, mas leio muito e gosto de {4} pessoas.» — «Para começar chega», diz a Dona Lurdes. «Ainda não sei se levas o emprego, mas já sei que levas um livro de graça.» A Sofia saiu da loja com o emprego quase {5} — e com o «quase» cheio de esperança.", es: "La dueña de la tienda, doña Lurdes, la recibe con una sonrisa: «¿Ya trabajaste en librerías?» — «Todavía no, pero leo mucho y me gusta atender a la gente.» — «Para empezar basta», dice doña Lurdes. «Todavía no sé si te llevas el empleo, pero ya sé que te llevas un libro gratis.» Sofía salió de la tienda con el empleo casi seguro — y con el «casi» lleno de esperanza." },
      ],
      gaps: [
        { options: ["peixaria", "livraria", "sapataria"], answer: 1, why: "Cartaz numa loja de livros: livraria." },
        { options: ["proibida", "impossível", "necessária"], answer: 2, why: "Anuncio de empleo: experiencia necessária." },
        { options: ["trabalhaste", "trabalhas", "trabalharás"], answer: 0, why: "«Já + ação feita» no perfeito: já trabalhaste." },
        { options: ["ignorar", "atender", "cobrar"], answer: 1, why: "Trabajo de tienda: gusta atender a la gente." },
        { options: ["perdido", "adiado", "certo"], answer: 2, why: "Salió con el empleo casi seguro, lleno de esperanza." },
      ],
    },
    {
      id: "cz-pt-a2-09-2", title: "A entrevista", titleEs: "La entrevista", minutes: 3,
      paragraphs: [
        { it: "A entrevista com o gerente é na quinta às dezasseis horas. A Sofia chega quinze minutos {1}, como manda a etiqueta: melhor cedo do que atrasado. O gerente começa com a pergunta clássica: «Fale-me da sua {2}.»", es: "La entrevista con el gerente es el jueves a las dieciséis horas. Sofía llega quince minutos antes, como manda la etiqueta: mejor temprano que tarde. El gerente empieza con la pregunta clásica: «Hábleme de su experiencia.»" },
        { it: "A Sofia respira fundo: «No ano passado trabalhei seis meses numa cafetaria em Madrid. Ainda não trabalhei em Portugal, mas já {3} o curso de português nível A2.» O gerente sorri com a resposta. Depois falam de horários: vinte horas por semana, das dez até ao {4}, compatíveis com as aulas. «Quando pode começar?» — «Já na segunda-feira», responde a Sofia. «Então está {5}», diz o gerente, estendendo a mão.", es: "Sofía respira hondo: «El año pasado trabajé seis meses en una cafetería de Madrid. Todavía no he trabajado en Portugal, pero ya terminé el curso de portugués nivel A2.» El gerente sonríe con la respuesta. Después hablan de horarios: veinte horas por semana, de diez hasta el almuerzo, compatibles con las clases. «¿Cuándo puede empezar?» — «Ya el lunes», responde Sofía. «Entonces está contratada», dice el gerente, extendiendo la mano." },
      ],
      gaps: [
        { options: ["antes", "depois", "tarde"], answer: 0, why: "Etiqueta de entrevista: llega antes, mejor temprano." },
        { options: ["família", "experiência", "férias"], answer: 1, why: "La pregunta clásica: hableme de su experiencia." },
        { options: ["começo", "vou fazer", "terminei"], answer: 2, why: "«Já + feito»: ya terminó el curso de A2." },
        { options: ["almoço", "fim de semana", "jantar"], answer: 0, why: "Turno de mañana: de diez hasta el almuerzo." },
        { options: ["dispensada", "despedida", "contratada"], answer: 2, why: "Apretón de manos: está contratada." },
      ],
    },
    {
      id: "cz-pt-a2-09-3", title: "O primeiro dia", titleEs: "El primer día", minutes: 2,
      paragraphs: [
        { it: "Segunda-feira, dez em ponto. A Sofia recebe o crachá e a {1} da caixa registadora. O gerente apresenta-a à equipa: «A Sofia é a nossa nova trabalhadora estudante.» A Dona Lurdes ensina-lhe o essencial: «O cliente chega, {2}, pergunta. Tu sorris, respondes, ajudas.»", es: "Lunes, diez en punto. Sofía recibe la credencial y la llave de la caja registradora. El gerente la presenta al equipo: «Sofía es nuestra nueva estudiante trabajadora.» Doña Lurdes le enseña lo esencial: «El cliente llega, mira, pregunta. Tú sonríes, respondes, ayudas.»" },
        { it: "No primeiro dia, a Sofia arruma livros, encontra uma primeira {3} perdida atrás das prateleiras e recomenda três {4} policiais a uma cliente. Ao fim do dia, os pés doem, mas ela sorri: para quem gosta de livros, nem um dia difícil parece {5}.", es: "En su primer día, Sofía ordena libros, encuentra a una primera cliente perdida detrás de las estanterías y recomienda tres novelas policíacas a una clienta. Al final del día, los pies le duelen, pero sonríe: para quien le gustan los libros, ni un día difícil parece trabajo." },
      ],
      gaps: [
        { options: ["conta", "chave", "multa"], answer: 1, why: "De la caja registradora recibe la llave." },
        { options: ["olha", "sai", "paga"], answer: 0, why: "Secuencia del cliente: llega, mira, pregunta." },
        { options: ["encomenda", "cliente", "nota"], answer: 1, why: "Perdida detrás de las estanterías: una cliente (la primera)." },
        { options: ["fiscalidades", "telefones", "romances"], answer: 2, why: "Recomienda tres novelas (romances) policíacas." },
        { options: ["trabalho", "férias", "castigo"], answer: 0, why: "Ni un día difícil parece trabajo para quien ama los libros." },
      ],
    },
  ],

  "pt-cu-a2-10": [
    {
      id: "cz-pt-a2-10-1", title: "O dia louco do Porto", titleEs: "El día loco de Oporto", minutes: 2,
      paragraphs: [
        { it: "O Porto tem um ditado: «Aqui fazem-se quatro estações num dia.» O Tomás comprova-o: às nove, um {1} lindo sobre o Douro; às onze, nuvens; ao meio-dia, uma chuva rápida; à uma, sol de novo, como se nada tivesse {2}.", es: "Oporto tiene un dicho: «Aquí se hacen cuatro estaciones en un día.» Tomás lo comprueba: a las nueve, un sol precioso sobre el Duero; a las once, nubes; al mediodía, una lluvia rápida; a la una, sol de nuevo, como si nada hubiera pasado." },
        { it: "No miradouro, um vizinho passeava o cão e comentou o tempo com o Tomás: «O Atlântico é quem {3}: nós só assistimos.» Às cinco da tarde, o vento aumentou e a {4} baixou dez graus; às sete, outro aguaceiro. «Previsão para amanhã», riu o vizinho: «mais do mesmo.» O Tomás aprendeu a lição do norte: sai-se sempre com guarda-chuva e óculos de sol — às vezes, os dois ao mesmo {5}.", es: "En el mirador, un vecino paseaba al perro y comentó el clima con Tomás: «El Atlántico es quien manda: nosotros solo miramos.» A las cinco de la tarde, el viento aumentó y la temperatura bajó diez grados; a las siete, otro chubasco. «Previsión para mañana», rió el vecino: «más de lo mismo.» Tomás aprendió la lección del norte: siempre se sale con paraguas y gafas de sol — a veces, los dos al mismo tiempo." },
      ],
      gaps: [
        { options: ["sol", "tempestade", "nevoeiro"], answer: 0, why: "A las nueve, un sol lindo sobre el Duero." },
        { options: ["partido", "acontecido", "chovido"], answer: 1, why: "Sol de nuevo, como si nada hubiera pasado (acontecido)." },
        { options: ["manda", "serve", "estuda"], answer: 0, why: "«El Atlántico es quien manda: nosotros solo miramos.»" },
        { options: ["maré", "temperatura", "renda"], answer: 1, why: "Bajó diez grados: la temperatura." },
        { options: ["tempo", "preço", "sítio"], answer: 0, why: "Paraguas y gafas de sol al mismo tiempo." },
      ],
    },
    {
      id: "cz-pt-a2-10-2", title: "O boletim meteorológico", titleEs: "El boletín meteorológico", minutes: 3,
      paragraphs: [
        { it: "«Boa noite. No boletim do tempo: amanhã, no norte do país, o dia começa nublado, mas a {1} melhorará ao fim da manhã. No litoral, o vento será forte e haverá {2} ao fim da tarde. A temperatura máxima será de dezassete graus.»", es: "«Buenas noches. En el boletín del tiempo: mañana, en el norte del país, el día empieza nublado, pero el tiempo mejorará al final de la mañana. En el litoral, el viento será fuerte y habrá chubascos al final de la tarde. La temperatura máxima será de diecisiete grados.»" },
        { it: "«No {3}, sol e calor: vinte e seis graus no Algarve. Em Lisboa, um dia ameno, com {4} suave a vir do Tejo. E atenção: de terça para quarta, choverá com força no norte.» A esposa do Manuel desliga a televisão: «Resumindo: leva o guarda-chuva e os óculos de sol — {5} sempre.»", es: "«En el sur, sol y calor: veintiséis grados en el Algarve. En Lisboa, un día templado, con brisa suave viniendo del Tajo. Y atención: del martes al miércoles, lloverá con fuerza en el norte.» La esposa de Manuel apaga la televisión: «Resumiendo: lleva el paraguas y las gafas de sol — como siempre.»" },
      ],
      gaps: [
        { options: ["conta", "tempo", "audição"], answer: 1, why: "Boletín del tiempo: el tiempo mejorará." },
        { options: ["aguaceiros", "descontos", "espetáculos"], answer: 0, why: "Viento fuerte en el litoral: habrá chubascos." },
        { options: ["sul", "norte", "centro"], answer: 0, why: "Sol y 26 grados en el Algarve → en el sur." },
        { options: ["tempestade", "nevasca", "brisa"], answer: 2, why: "Día templado en Lisboa: brisa suave del Tajo." },
        { options: ["como", "nunca", "talvez"], answer: 0, why: "«Lleva paraguas y gafas — como siempre.»" },
      ],
    },
    {
      id: "cz-pt-a2-10-3", title: "Os provérbios do tempo", titleEs: "Los proverbios del tiempo", minutes: 2,
      paragraphs: [
        { it: "Os portugueses têm provérbios para tudo, sobretudo para o tempo. «Abril, {1} mil», avisa a avó do Miguel: em abril chove à vontade. «Março marçagão: manhãs de inverno e {2} de verão», ensina ela: no norte, o dia muda em questões de horas.", es: "Los portugueses tienen proverbios para todo, sobre todo para el tiempo. «Abril, aguas mil», avisa la abuela de Miguel: en abril llueve a gusto. «Marzo marzagueño: mañanas de invierno y tardes de verano», enseña ella: en el norte, el día cambia en cuestión de horas." },
        { it: "O Miguel duvida dos provérbios, mas rende-se: «A avó acerta mais do que a {3} da televisão», admite. Neste sábado, a avó olhou para o céu, viu as {4} altas e disse: «Amanhã faz sol.» O boletim dizia chuva. Quem acertou? A avó, claro. «Os provérbios são a {5} de quem viveu», resume ela, sorrindo. «A televisão ainda está a aprender.»", es: "Miguel duda de los proverbios, pero se rinde: «La abuela acierta más que la previsión de la tele», admite. Este sábado, la abuela miró el cielo, vio las nubes altas y dijo: «Mañana hace sol.» El boletín decía lluvia. ¿Quién acertó? La abuela, claro. «Los proverbios son la sabiduría de quien ha vivido», resume ella, sonriendo. «La televisión todavía está aprendiendo.»" },
      ],
      gaps: [
        { options: ["águas", "fogueiras", "flores"], answer: 0, why: "«Abril, aguas mil»: en abril llueve sin parar." },
        { options: ["noites", "tardes", "semanas"], answer: 1, why: "Mañanas de invierno y tardes de verano." },
        { options: ["atriz", "ficha", "previsão"], answer: 2, why: "La abuela acierta más que la previsión de la tele." },
        { options: ["gaivotas", "marés", "nuvens"], answer: 2, why: "Miró el cielo y vio las nubes altas: buen tiempo." },
        { options: ["sabedoria", "preguiça", "sorte"], answer: 0, why: "Proverbios: la sabiduría de quien ha vivido." },
      ],
    },
  ],

  "pt-cu-a2-11": [
    {
      id: "cz-pt-a2-11-1", title: "A mudança", titleEs: "La mudanza", minutes: 3,
      paragraphs: [
        { it: "Sábado de manhã, Aveiro. A carrinha do Francisco está estacionada à {1} do prédio da Inês, cheia de caixas até ao teto. «Podes ajudar-me a levar o sofá?», pergunta a Inês. «Claro! Tu {2} as caixas leves, eu levo as pesadas.»", es: "Sábado por la mañana, Aveiro. La furgoneta de Francisco está aparcada en la puerta del edificio de Inês, llena de cajas hasta el techo. «¿Puedes ayudarme a llevar el sofá?», pregunta Inês. «¡Claro! Tú llevas las cajas ligeras, yo llevo las pesadas.»" },
        { it: "Os vizinhos aparecem um a um: a Dona Maria traz {3} para todos, o senhor Abílio empresta o carrinho de mão, e a Ana do segundo andar fica com o {4} da Inês durante o fim de semana. Ao fim da tarde, a casa nova já tem sofá, cama e um cheiro a café. «Como é que te {5}?», pergunta a Inês. «Com um jantar, claro!», responde o Francisco.", es: "Los vecinos aparecen uno a uno: doña María trae café para todos, el señor Abílio presta el carrito de mano, y Ana del segundo piso se queda con el gato de Inês durante el fin de semana. Al final de la tarde, la casa nueva ya tiene sofá, cama y olor a café. «¿Cómo te lo pago?», pregunta Inês. «¡Con una cena, claro!», responde Francisco." },
      ],
      gaps: [
        { options: ["cobertura", "porta", "varanda"], answer: 1, why: "La furgoneta de la mudanza, aparcada en la puerta del edificio." },
        { options: ["levas", "dou", "achas"], answer: 0, why: "Reparto del trabajo: tú llevas las ligeras, yo las pesadas." },
        { options: ["café", "chaves", "livros"], answer: 0, why: "En los días de mudanza, siempre alguien trae café." },
        { options: ["gato", "carro", "televisão"], answer: 0, why: "Cuidarlo durante el fin de semana: el gato, pedido clásico." },
        { options: ["conheço", "pago", "chamo"], answer: 1, why: "Agradecer el favor: «¿cómo te lo pago?»" },
      ],
    },
    {
      id: "cz-pt-a2-11-2", title: "O gato da vizinha", titleEs: "El gato de la vecina", minutes: 2,
      paragraphs: [
        { it: "A Inês viaja a trabalho por três dias e pede um {1} à vizinha: «Podes alimentar o gato na sexta e no sábado? Ele é fácil: come, faz {2} e não mexe no sofá.» A vizinha aceita na hora: adora gatos.", es: "Inês viaja por trabajo tres días y le pide un favor a la vecina: «¿Puedes alimentar al gato el viernes y el sábado? Es fácil: come, se echa siestas y no toca el sofá.» La vecina acepta en el momento: adora los gatos." },
        { it: "Na sexta, a vizinha entra com o saco de {3} e encontra o gato à espera, sentado como um rei. Serve a comida, muda a {4} e rega as plantas — o favor cresceu. Ao domingo, a Inês volta e recebe um relatório completo: «Comeu tudo, dormiu no teu {5} e nem sentiu a tua falta.» Os dois riem: para isso servem os bons vizinhos.", es: "El viernes, la vecina entra con la bolsa de pienso y encuentra al gato esperando, sentado como un rey. Le sirve la comida, le cambia el agua y riega las plantas — el favor creció. El domingo, Inês vuelve y recibe un informe completo: «Comió todo, durmió en tu almohada y ni sintió tu falta.» Los dos ríen: para eso sirven los buenos vecinos." },
      ],
      gaps: [
        { options: ["castigo", "favor", "emprestimo"], answer: 1, why: "«¿Puedes alimentar al gato?» = pedir un favor." },
        { options: ["barulho", "limpeza", "sestas"], answer: 2, why: "Rutina del gato: come, se echa siestas." },
        { options: ["ração", "roupa", "cartas"], answer: 0, why: "Para alimentar al gato: la bolsa de pienso (ração)." },
        { options: ["água", "fechadura", "cortina"], answer: 0, why: "Cuidar del gato: cambiarle el agua." },
        { options: ["travesseiro", "óculos", "casaco"], answer: 0, why: "Durmió en tu almohada (travesseiro)." },
      ],
    },
    {
      id: "cz-pt-a2-11-3", title: "Bom vizinho, bom amigo", titleEs: "Buen vecino, buen amigo", minutes: 2,
      paragraphs: [
        { it: "Em Portugal há um ditado: «Bom vizinho, bom {1}.» No prédio da Inês, em Aveiro, todos seguem a regra. Emprestam-se {2} e ferramentas, guardam-se encomendas, regam-se as plantas das férias alheias.", es: "En Portugal hay un dicho: «Buen vecino, buen amigo.» En el edificio de Inês, en Aveiro, todos siguen la regla. Se prestan huevos y herramientas, se guardan paquetes, se riegan las plantas de las vacaciones ajenas." },
        { it: "No domingo, a Dona Maria bate à porta com um tabuleiro: «Fiz {3} a mais. Comam!» É assim desde sempre: o favor pequeno de hoje é a {4} de amanhã. A Inês, que se mudou há pouco, ainda não fez nada de grande pelo prédio — mas já guardou o lugar do {5} do senhor Abílio numa tarde de chuva. «Já és da família», disse ele. E era verdade.", es: "El domingo, doña María llama a la puerta con una bandeja: «Hice bolos de más. ¡Coman!» Es así desde siempre: el favor pequeño de hoy es la amistad de mañana. Inês, que se mudó hace poco, todavía no ha hecho nada grande por el edificio — pero ya guardó el sitio del coche del señor Abílio en una tarde de lluvia. «Ya eres de la familia», dijo él. Y era verdad." },
      ],
      gaps: [
        { options: ["negócio", "amigo", "advogado"], answer: 1, why: "El dicho: «Bom vizinho, bom amigo.»" },
        { options: ["ovos", "carros", "apartamentos"], answer: 0, why: "Clásico de vecindario: prestar huevos (y herramientas)." },
        { options: ["trabalho", "bolos", "barulho"], answer: 1, why: "Llega con una bandeja: «hice bolos de más»." },
        { options: ["fatura", "multa", "amizade"], answer: 2, why: "El favor de hoy, la amistad de mañana." },
        { options: ["cão", "carro", "livro"], answer: 1, why: "Guardar el sitio del coche: el favor pequeño." },
      ],
    },
  ],

  "pt-cu-a2-12": [
    {
      id: "cz-pt-a2-12-1", title: "De Santa Apolónia a Campanhã", titleEs: "De Santa Apolónia a Campanhã", minutes: 3,
      paragraphs: [
        { it: "Plano da viagem: apanhar o Alfa Pendular das oito e trinta em Santa Apolónia. Primeiro, o bilhete na aplicação da CP; depois, chegar à estação com meia hora de {1}. O Alfa é o comboio mais rápido de todos: Lisboa–Porto em menos de três horas.", es: "Plan del viaje: tomar el Alfa Pendular de las ocho y treinta en Santa Apolónia. Primero, el billete en la aplicación de la CP; después, llegar a la estación con media hora de antelación. El Alfa es el tren más rápido de todos: Lisboa–Oporto en menos de tres horas." },
        { it: "À hora marcada, o comboio parte. Entretanto, a paisagem corre: pinheiros, arrozais, o {2} Mondego em Coimbra. Na carruagem, faz-se a vida portuguesa: estudantes, executivos, avós com netos. Ao meio-dia, chega a {3}: fim da linha. Primeiro, uma foto com a ponte ao fundo; depois, o {4} para o centro da cidade. Finalmente, o hotel. A viagem perfeita tem três horas, um café a bordo e zero {5}.", es: "A la hora marcada, el tren sale. Mientras tanto, el paisaje corre: pinos, arrozales, el río Mondego en Coimbra. En el vagón, se vive la vida portuguesa: estudiantes, ejecutivos, abuelos con nietos. Al mediodía, llega a Campanhã: fin de línea. Primero, una foto con el puente al fondo; después, el metro hacia el centro. Finalmente, el hotel. El viaje perfecto tiene tres horas, un café a bordo y cero imprevistos." },
      ],
      gaps: [
        { options: ["antecedência", "atraso", "sono"], answer: 0, why: "Llegar con tiempo: con media hora de antelación." },
        { options: ["rio", "comboio", "jardim"], answer: 0, why: "El río Mondego atraviesa Coimbra." },
        { options: ["Rossio", "Santa Apolónia", "Campanhã"], answer: 2, why: "Fin de línea en Oporto: la estación de Campanhã." },
        { options: ["metro", "barco", "foguete"], answer: 0, why: "De Campanhã al centro: el metro." },
        { options: ["imprevistos", "descontos", "desportistas"], answer: 0, why: "El viaje perfecto: cero imprevistos." },
      ],
    },
    {
      id: "cz-pt-a2-12-2", title: "A história completa", titleEs: "La historia completa", minutes: 2,
      paragraphs: [
        { it: "No jantar de domingo, a avó pede a história completa da viagem ao Porto. O neto conta: «Primeiro, levantei-me às seis e apanhei o comboio em Santa Apolónia. O comboio partiu em {1}; entretanto, fui lendo um livro. Quando o aviso de chegada soou, já víamos as {2} do Douro.»", es: "En la cena del domingo, la abuela pide la historia completa del viaje a Oporto. El nieto cuenta: «Primero, me levanté a las seis y tomé el tren en Santa Apolónia. El tren salió puntual; mientras tanto, fui leyendo un libro. Cuando sonó el aviso de llegada, ya veíamos las aguas del Duero.»" },
        { it: "«Depois, a Livraria Lello: a fila era enorme, mas valeu a pena. Entretanto, chovia um pouco — só um pouco, avó! Ao fim da tarde, comi uma {3} numa tasca da Baixa. Finalmente, o {4} do sol na Ribeira, com os rabelos no rio. Foi o dia mais {5} do ano.» A avó sorri: «Contas-me tudo, menos a parte em que dormiste na viagem de volta.»", es: "«Después, la Librería Lello: la fila era enorme, pero valió la pena. Mientras tanto, llovía un poco — ¡solo un poco, abuela! Al final de la tarde, comí una francesinha en una tasca de la Baixa. Finalmente, la puesta de sol en la Ribeira, con los rabelos en el río. Fue el día más lleno del año.» La abuela sonríe: «Me cuentas todo, menos la parte en que dormiste en el viaje de vuelta.»" },
      ],
      gaps: [
        { options: ["chamas", "ponto", "silêncio"], answer: 1, why: "«Salió puntual»: partiu em ponto." },
        { options: ["nuvens", "ruas", "águas"], answer: 2, why: "Llegando a Oporto: las aguas del Duero." },
        { options: ["francesinha", "sardinha", "canja"], answer: 0, why: "El sándwich típico de Oporto: la francesinha." },
        { options: ["pôr", "nascer", "disco"], answer: 0, why: "Al final de la tarde: la puesta de sol." },
        { options: ["chuvoso", "cheio", "vazio"], answer: 1, why: "Día completo de viaje: el más lleno del año." },
      ],
    },
    {
      id: "cz-pt-a2-12-3", title: "O regresso", titleEs: "El regreso", minutes: 2,
      paragraphs: [
        { it: "Domingo à noite, o regresso. A estação de Campanhã está cheia de gente com {1}: sacos de compras, malas pequenas e caras de despedida. O comboio das vinte e quinze parte com cinco minutos de {2}. «O Porto não gosta de se despedir», diz uma senhora ao lado.", es: "Domingo por la noche, el regreso. La estación de Campanhã está llena de gente con prisa: bolsas de compras, maletas pequeñas y caras de despedida. El tren de las veinte quince sale con cinco minutos de retraso. «A Oporto no le gusta despedirse», dice una señora al lado." },
        { it: "Na viagem de volta, o neto faz o balanço: três dias, duas tascas, uma francesinha e zero saudades para guardar — porque o Porto fica sempre a pedir {3}. Chega a Lisboa à meia-noite menos um {4}: a cidade dorme, mas os táxis esperam. Finalmente, em casa, a mochila fica no corredor e a {5} também: só na semana que vem é que se arruma tudo. Assim são as viagens perfeitas: acabam devagar.", es: "En el viaje de vuelta, el nieto hace balance: tres días, dos tascas, una francesinha y cero nostalgias que guardar — porque Oporto siempre queda pidiendo regreso. Llega a Lisboa a la medianoche menos cuarto: la ciudad duerme, pero los taxis esperan. Finalmente, en casa, la mochila queda en el pasillo y la pereza también: solo la semana que viene se ordena todo. Así son los viajes perfectos: terminan despacio." },
      ],
      gaps: [
        { options: ["pressa", "fome", "raiva"], answer: 0, why: "Domingo noche, regreso: gente con prisa." },
        { options: ["vantagem", "atraso", "férias"], answer: 1, why: "Sale con cinco minutos de retraso." },
        { options: ["desculpas", "conta", "regresso"], answer: 2, why: "Oporto queda siempre pidiendo regreso." },
        { options: ["meio", "quarto", "terço"], answer: 1, why: "Medianoche menos cuarto: 23:45." },
        { options: ["conta", "chave", "preguiça"], answer: 2, why: "La mochila queda en el pasillo y la pereza también." },
      ],
    },
  ],
};
