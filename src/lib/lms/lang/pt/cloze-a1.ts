import type { CbClozeText } from "../../cambridge";

/* ═══ PT A1 · Cloze readings — 3 por unidad (inferencia léxica) ══════
   Metodología v9.12: el texto en portugués lleva marcadores {1} {2}…
   que el reproductor convierte en huecos; el estudiante deduce la
   palabra por el contexto. Campos: `.it` = portugués, `.es` = español. */

export const PT_CLOZE_A1: Record<string, CbClozeText[]> = {
  "pt-cu-a1-01": [
    {
      id: "cz-pt-a1-01-1", title: "O e-mail de boas-vindas", titleEs: "El correo de bienvenida", minutes: 2,
      paragraphs: [
        { it: "Olá! Chamo-me Ana e sou {1} Coimbra. Tenho trinta anos e trabalho numa livraria do centro. Estudo inglês à noite porque o meu trabalho precisa dele. Adoro a comida {2}: o pastel de nata é o meu favorito!", es: "¡Hola! Me llamo Ana y soy de Coimbra. Tengo treinta años y trabajo en una librería del centro. Estudio inglés por la noche porque mi trabajo lo necesita. ¡Me encanta la comida portuguesa: el pastel de nata es mi favorito!" },
        { it: "Todas as manhãs tomo um {3} e leio as notícias. À noite vejo um filme ou {4} com os meus amigos ao telefone. Sou uma pessoa muito {5}: falo com toda a gente!", es: "Todas las mañanas tomo un café y leo las noticias. Por la noche veo una película o hablo con mis amigos por teléfono. ¡Soy una persona muy sociable: hablo con todo el mundo!" },
      ],
      gaps: [
        { options: ["de", "do", "em"], answer: 0, why: "\"Ser DE + ciudad\" = origen (sou de Coimbra)." },
        { options: ["portuguesa", "espanhola", "italiana"], answer: 0, why: "El pastel de nata indica comida portuguesa." },
        { options: ["café", "banho", "comboio"], answer: 0, why: "\"Tomar um café\" por la mañana, la rutina portuguesa." },
        { options: ["falo", "durmo", "choro"], answer: 0, why: "Contraste com \"vejo um filme\": actividades de la tarde-noche." },
        { options: ["sociável", "cansada", "tímida"], answer: 0, why: "\"Falo com toda a gente\" = sociable." },
      ],
    },
    {
      id: "cz-pt-a1-01-2", title: "Dois estudantes na receção", titleEs: "Dos estudiantes en la recepción", minutes: 2,
      paragraphs: [
        { it: "Na receção de boas-vindas, o Leo {1} a uma rapariga com sotaque do Porto. «Olá! Eu sou o Leo, sou de Braga.» A rapariga {2}: «Muito prazer! Sou a Marta.»", es: "En la recepción de bienvenida, Leo se acerca a una chica con acento de Oporto. «¡Hola! Yo soy Leo, soy de Braga.» La chica sonríe: «¡Mucho gusto! Soy Marta.»" },
        { it: "Falam dos cursos. O Leo estuda {3}; a Marta estuda arquitetura. Os dois são {4} na universidade. «Até já nas aulas!» diz a Marta. «Até já!» {5} o Leo, contente.", es: "Hablan de las carreras. Leo estudia economía; Marta estudia arquitectura. Los dos son nuevos en la universidad. «¡Hasta ahora en las clases!» dice Marta. «¡Hasta ahora!» responde Leo, contento." },
      ],
      gaps: [
        { options: ["aproxima-se", "foge", "dorme"], answer: 0, why: "Presentarse requiere acercarse (aproximar-se)." },
        { options: ["sorri", "chora", "sai"], answer: 0, why: "La respuesta a un saludo es una sonrisa." },
        { options: ["economia", "natação", "pastelaria"], answer: 0, why: "Se estudian carreras; natación y pastelería no son carreras universitarias aquí." },
        { options: ["novos", "velhos", "zangados"], answer: 0, why: "En una receção de boas-vindas, los estudiantes son nuevos." },
        { options: ["responde", "pergunta", "canta"], answer: 0, why: "Leo responde al saludo de despedida." },
      ],
    },
    {
      id: "cz-pt-a1-01-3", title: "De onde és?", titleEs: "¿De dónde eres?", minutes: 2,
      paragraphs: [
        { it: "A Sofia é de Espanha, de Madrid, mas agora mora em Lisboa. Perguntam-lhe: «De onde {1}?» Ela diz: «Sou espanhola, de Madrid.» A sua {2} é o castelhano, mas também fala português.", es: "Sofía es de España, de Madrid, pero ahora vive en Lisboa. Le preguntan: «¿De dónde eres?» Ella dice: «Soy española, de Madrid.» Su primer idioma es el castellano, pero también habla portugués." },
        { it: "Na aula de português há estudantes de Angola, do Brasil e de França. A professora é portuguesa. {3} nome é Dona Helena. A turma é divertida e os estudantes estão {4} por estar ali. «O português abre {5}», diz a Dona Helena.", es: "En la clase de portugués hay estudiantes de Angola, de Brasil y de Francia. La profesora es portuguesa. Se llama Doña Helena. La clase es divertida y los estudiantes están contentos de estar ahí. «El portugués abre puertas», dice Doña Helena." },
      ],
      gaps: [
        { options: ["és", "é", "somos"], answer: 0, why: "\"De onde ÉS?\" = ¿de dónde ERES? (tu)." },
        { options: ["língua materna", "apelido", "número"], answer: 0, why: "El contexto habla de los idiomas que habla." },
        { options: ["O seu", "A sua", "Os seus"], answer: 0, why: "nome es masculino → o seu nome (de ella)." },
        { options: ["contentes", "tristes", "perdidos"], answer: 0, why: "A turma é divertida → están contentos." },
        { options: ["portas", "carros", "caixas"], answer: 0, why: "Metáfora fija: \"abre portas\" = abre puertas/oportunidades." },
      ],
    },
  ],

  "pt-cu-a1-02": [
    {
      id: "cz-pt-a1-02-1", title: "Uma família portuguesa grande", titleEs: "Una familia portuguesa grande", minutes: 2,
      paragraphs: [
        { it: "A minha família é grande: os meus pais, os meus dois irmãos e eu. O meu pai chama-se Carlos. É {1} num hospital do Porto. A minha mãe é professora; {2} nome é Ana.", es: "Mi familia es grande: mis padres, mis dos hermanos y yo. Mi padre se llama Carlos. Es enfermero en un hospital de Oporto. Mi madre es profesora; se llama Ana." },
        { it: "Os meus irmãos são estudantes. Chamam-se Rodrigo e Vasco. Também temos um gato: {3} nome é Viriatos. Em Portugal, os animais {4} família! Ao domingo, almoçamos todos juntos na casa dos avós e conversamos {5} horas.", es: "Mis hermanos son estudiantes. Se llaman Rodrigo y Vasco. También tenemos un gato: se llama Viriatos. ¡En Portugal, los animales son familia! Los domingos, almorzamos todos juntos en casa de los abuelos y conversamos por horas." },
      ],
      gaps: [
        { options: ["enfermeiro", "filme", "banana"], answer: 0, why: "Trabaja en un hospital → profesión sanitaria." },
        { options: ["o seu", "a sua", "os seus"], answer: 0, why: "nome es masculino → o seu nome (de ella: se llama Ana)." },
        { options: ["o", "a", "os"], answer: 0, why: "gato es masculino → o nome dele." },
        { options: ["são", "estão ser", "têm"], answer: 0, why: "\"Os animais SÃO família\" = son (identidad, ser)." },
        { options: ["durante", "até", "desde"], answer: 0, why: "\"Conversamos DURANTE horas\" = por horas." },
      ],
    },
    {
      id: "cz-pt-a1-02-2", title: "A fotografia na parede", titleEs: "La fotografía en la pared", minutes: 3,
      paragraphs: [
        { it: "Na sala há uma {1} antiga do casamento dos meus avós. A minha avó veste um vestido branco e o meu avô veste um {2}. Parecem tão novos!", es: "En el salón hay una foto antigua de la boda de mis abuelos. Mi abuela viste un vestido blanco y mi abuelo viste un traje. ¡Parecen tan jóvenes!" },
        { it: "Ao lado há uma fotografia dos meus pais nos anos oitenta. A minha mãe tem o cabelo comprido e o meu pai tem {3}. Atrás deles, um carro velho. Os tempos mudam! O meu irmão {4} -se ao meu pai nessa fotografia — os mesmos olhos, o mesmo {5}. «És uma cópia do pai!», diz a minha mãe.", es: "Al lado hay una fotografía de mis padres en los años ochenta. Mi madre tiene el pelo largo y mi padre bigote. Detrás, un coche viejo. ¡Los tiempos cambian! Mi hermano se parece a mi padre en esa foto — los mismos ojos, la misma sonrisa. «Eres una copia de papá», dice mi madre." },
      ],
      gaps: [
        { options: ["fotografia", "fatura", "farmácia"], answer: 0, why: "Contexto: casamiento en la pared → fotografía." },
        { options: ["fato", "fada", "fala"], answer: 0, why: "En una boda, el novio veste um fato (traje)." },
        { options: ["bigode", "bicolor", "bicho"], answer: 0, why: "Contraste con \"cabelo comprido\": rasgo masculino clásico." },
        { options: ["parece", "parte", "passa"], answer: 0, why: "\"Parecer-se a\" = parecerse a." },
        { options: ["sorriso", "sono", "saldo"], answer: 0, why: "Ojos y... sonrisa: mismos rasgos de la cara." },
      ],
    },
    {
      id: "cz-pt-a1-02-3", title: "O almoço de domingo", titleEs: "El almuerzo de domingo", minutes: 2,
      paragraphs: [
        { it: "Ao domingo, a família do Rui almoça {1}. A avó Beatriz cozinha para todos: sopa, arroz e frango. A mesa é {2}: cabem doze pessoas!", es: "Los domingos, la familia de Rui almuerza junta. La abuela Beatriz cocina para todos: sopa, arroz y pollo. La mesa es grande: ¡caben doce personas!" },
        { it: "O avô conta histórias do {3}, quando era marinheiro. As crianças riem, os pais conversam. Depois do café, todos ficam à mesa a conversar. Em Portugal, o almoço de domingo {4} a tarde toda. É a tradição mais {5} da família.", es: "El abuelo cuenta historias del pasado, cuando era marinero. Los niños ríen, los padres conversan. Después del café, todos se quedan en la mesa conversando. En Portugal, el almuerzo de domingo dura la tarde entera. Es la tradición más querida de la familia." },
      ],
      gaps: [
        { options: ["junta", "julgada", "jogada"], answer: 0, why: "La tradición: almorzar juntos (junta)." },
        { options: ["grande", "estreita", "partida"], answer: 0, why: "Caben doce personas → mesa grande." },
        { options: ["passado", "presente", "futuro"], answer: 0, why: "\"Quando era marinheiro\" = antes, el pasado." },
        { options: ["dura", "ducha", "doa"], answer: 0, why: "\"Dura a tarde toda\" = dura toda la tarde." },
        { options: ["querida", "queimada", "quieta"], answer: 0, why: "La tradición más querida = amada por todos." },
      ],
    },
  ],

  "pt-cu-a1-03": [
    {
      id: "cz-pt-a1-03-1", title: "O dia de um padeiro", titleEs: "El día de un panadero", minutes: 2,
      paragraphs: [
        { it: "O Sr. Domingos é padeiro. Acorda às {1} da manhã, ainda é noite. Primeiro toma um café bem {2} para acordar. Depois vai para a padaria e acende o forno.", es: "El Sr. Domingos es panadero. Se despierta a las cuatro de la mañana, todavía es de noche. Primero toma un café bien cargado para despertar. Después va a la panadería y enciende el horno." },
        { it: "Às sete, a padaria {3} as portas. O cheiro a pão quente enche a rua! Os clientes habituais chegam às oito e pedem o {4}: pão, café e um croissant. O Sr. Domingos {5} ao meio-dia: o seu dia de trabalho começa quando o dos outros acaba de começar.", es: "A las siete, la panadería abre las puertas. ¡El olor a pan caliente llena la calle! Los clientes habituales llegan a las ocho y piden lo de siempre: pan, café y un croissant. El Sr. Domingos descansa al mediodía: su día de trabajo empieza cuando el de los otros apenas empieza." },
      ],
      gaps: [
        { options: ["quatro", "catorze", "quarenta"], answer: 0, why: "\"Ainda é noite\" → muito cedo: às quatro (4:00)." },
        { options: ["curto", "comprido", "frio"], answer: 0, why: "\"Café curto\" = espresso cargado portugués." },
        { options: ["abre", "fecha", "quebra"], answer: 0, why: "Los clientes llegan después → abre a las siete." },
        { options: ["habitual", "impossível", "internacional"], answer: 0, why: "Lo de siempre: pão, café, croissant = pedido habitual." },
        { options: ["descansa", "desenha", "desiste"], answer: 0, why: "Contraste: descansa al mediodía tras madrugar." },
      ],
    },
    {
      id: "cz-pt-a1-03-2", title: "Rotinas diferentes", titleEs: "Rutinas diferentes", minutes: 3,
      paragraphs: [
        { it: "O Miguel é músico: deita-se às {1} da manhã e acorda ao meio-dia. A Ana é médica: acorda às seis e deita-se às dez da noite. São {2}, mas vivem no mesmo apartamento!", es: "Miguel es músico: se acuesta a las cuatro de la madrugada y se despierta al mediodía. Ana es médica: se despierta a las seis y se acuesta a las diez de la noche. Son hermanos, ¡pero viven en el mismo apartamento!" },
        { it: "A Ana {3} o pequeno-almoço sozinha: café e tosta. O Miguel almoça sozinho às treze. Só se encontram à noite, para o jantar. «Vivemos na mesma casa mas quase não nos {4}!», brinca a Ana. «A nossa rotina é um {5}», responde o Miguel.", es: "Ana desayuna sola: café y tostada. Miguel almuerza solo a la una. Solo se encuentran por la noche, para la cena. «Vivimos en la misma casa ¡pero casi no nos vemos!», bromea Ana. «Nuestra rutina es un misterio», responde Miguel." },
      ],
      gaps: [
        { options: ["quatro", "quatorze horas", "quarenta"], answer: 0, why: "El músico tras el concierto: de madrugada, às quatro." },
        { options: ["irmãos", "colegas", "estranhos"], answer: 0, why: "Viven juntos y cenan juntos: son hermanos." },
        { options: ["toma", "toca", "tema"], answer: 0, why: "\"Tomar o pequeno-almoço\" = desayunar." },
        { options: ["vemos", "ouvimos", "falamos português"], answer: 0, why: "\"Não nos vemos\" = no nos vemos (reflexivo)." },
        { options: ["mistério", "mestre", "museu"], answer: 0, why: "Rutinas opuestas → casi no coincidir es un misterio." },
      ],
    },
    {
      id: "cz-pt-a1-03-3", title: "A que horas abre o banco?", titleEs: "¿A qué hora abre el banco?", minutes: 2,
      paragraphs: [
        { it: "Em Portugal, os bancos abrem às oito e meia e fecham às {1}. O almoço é sagrado: de uma às duas, quase tudo fecha! O João precisa de ir ao banco, mas chega às duas e um quarto. Está {2}.", es: "En Portugal, los bancos abren a las 8:30 y cierran a las quince. La comida es sagrada: ¡de una a dos, casi todo cierra! João necesita ir al banco, pero llega a las 2:15. Está cerrado." },
        { it: "Pergunta a um vizinho: «A que {3} abre de novo?» O vizinho responde: «Às duas e meia. Mas o correio fica aberto até às {4}». O João decide ir ao correio primeiro. Às duas e meia, volta ao banco. «Em Portugal, tudo tem a sua {5}», pensa ele.", es: "Pregunta a un vecino: «¿A qué hora abre de nuevo?» El vecino responde: «A las 2:30. Pero la oficina de correos sigue abierta hasta las 17:30». João decide ir a correos primero. A las 2:30, vuelve al banco. «En Portugal, todo tiene su hora», piensa." },
      ],
      gaps: [
        { options: ["quinze", "cinco", "cinquenta"], answer: 0, why: "Sistema 24h: cierran a las 15:00 (às quinze)." },
        { options: ["fechado", "aberto", "cheio"], answer: 0, why: "Llega a las 14:15, en la pausa del almuerzo → cerrado." },
        { options: ["horas", "horizonte", "hotel"], answer: 0, why: "\"A que HORAS?\" = ¿a qué hora?" },
        { options: ["dezassete e meia", "sete", "setenta"], answer: 0, why: "Por la tarde, 24h: 17:30 = dezassete e meia." },
        { options: ["hora", "hora de ponta", "horta"], answer: 0, why: "«Tudo tem a sua hora» = cada cosa su momento." },
      ],
    },
  ],

  "pt-cu-a1-04": [
    {
      id: "cz-pt-a1-04-1", title: "O café do Sr. Fonseca", titleEs: "El café del Sr. Fonseca", minutes: 2,
      paragraphs: [
        { it: "O Sr. Fonseca entra na pastelaria {1}: «Bom dia! O costume!» Não precisa de dizer mais nada: o empregado já sabe. Um café {2}, bem curto, e um copo de água.", es: "El Sr. Fonseca entra en la pastelería y saluda: «¡Buenos días! ¡Lo de siempre!» No necesita decir nada más: el camarero ya sabe. Un café solo, bien corto, y un vaso de agua." },
        { it: "Bebe o café no {3}, de pé, em dois minutos. «O café no balcão é mais {4}», explica. Depois paga e vai trabalhar. Em Portugal, o café é uma religião rápida: pequeno, forte e muitas {5} por dia.", es: "Bebe el café en el mostrador, de pie, en dos minutos. «El café en el mostrador es más barato», explica. Después paga y se va a trabajar. En Portugal, el café es una religión rápida: pequeño, fuerte y muchas veces al día." },
      ],
      gaps: [
        { options: ["e cumprimenta", "e dorme", "e grita"], answer: 0, why: "«Bom dia!» es un saludo (cumprimentar)." },
        { options: ["solo", "duplo de leite", "chá"], answer: 0, why: "\"Bem curto\" = espresso solo bien cargado." },
        { options: ["balcão", "banco", "barco"], answer: 0, why: "\"De pé, em dois minutos\" → no balcão (mostrador)." },
        { options: ["barato", "bonito", "bom"], answer: 0, why: "La ventaja del balcão: cuesta menos." },
        { options: ["vezes", "vitórias", "viagens"], answer: 0, why: "\"Muitas vezes por dia\" = muchas veces al día." },
      ],
    },
    {
      id: "cz-pt-a1-04-2", title: "Galão, meia de leite ou café?", titleEs: "Galão, meia de leite o café", minutes: 3,
      paragraphs: [
        { it: "Na pastelaria, as opções de café são muitas. O {1} é café com muito leite, num copo alto: é o pequeno-almoço de meio país. A {2} leva metade leite, metade café, numa chávena.", es: "En la pastelería, las opciones de café son muchas. El galão es café con mucha leche, en vaso alto: es el desayuno de medio país. La meia de leite lleva mitad leche, mitad café, en taza." },
        { it: "O {3} é pequeno e forte: bebe-se em dois goles. Há também o garoto, com um dedo de leite. Para os mais {4}, o café com cheirinho leva aguardente! Pergunte assim: «{5} um galão, por favor». Simples como deve ser.", es: "El café es pequeño y fuerte: se bebe en dos sorbos. También está o garoto, con un dedo de leche. ¡Para los más valientes, el café com cheirinho lleva aguardiente! Pregunte así: «Queria un galão, por favor». Simple como debe ser." },
      ],
      gaps: [
        { options: ["galão", "galope", "galo"], answer: 0, why: "Café con mucho leite en copo alto = galão." },
        { options: ["meia de leite", "mel de laranja", "máquina"], answer: 0, why: "Mitad y mitad, en taza: meia de leite." },
        { options: ["café", "comboio", "capuchino"], answer: 0, why: "Pequeño y fuerte en dos goles: o café." },
        { options: ["corajosos", "cansados", "cômodos"], answer: 0, why: "Aguardente no café → para los valientes." },
        { options: ["Queria", "Quero-agora", "Quanto"], answer: 0, why: "\"Queria…, por favor\" = pedir cortés." },
      ],
    },
    {
      id: "cz-pt-a1-04-3", title: "A fila da pastelaria", titleEs: "La cola de la pastelería", minutes: 2,
      paragraphs: [
        { it: "Sábado, nove da manhã. A {1} da pastelaria chega à porta: todos querem pastéis de nata quentes! A Dona Rosa espera com paciência. É a {2} da casa: vem aqui há quarenta anos.", es: "Sábado, nueve de la mañana. La cola de la pastelería llega a la puerta: ¡todos quieren pasteles de nata calientes! Doña Rosa espera con paciencia. Es la clienta de la casa: viene aquí desde hace cuarenta años." },
        { it: "«Antigamente, um pastel custava {3}», lembra ela. «Agora custa mais de um euro, mas o {4} é o mesmo: bom!» Chega a sua vez. «{5} meia dúzia de pastéis, um para agora e cinco para levar.» O ritual de sempre.", es: "«Antes, un pastel costaba tostões», recuerda. «Ahora cuesta más de un euro, pero el sabor es el mismo: ¡bueno!». Llega su turno. «Queria media docena de pastéis, uno para ahora y cinco para llevar». El ritual de siempre." },
      ],
      gaps: [
        { options: ["fila", "fita", "foto"], answer: 0, why: "Todos esperan → fila (cola)." },
        { options: ["cliente", "cozinheira", "chefe"], answer: 0, why: "Viene desde hace 40 años → clienta habitual." },
        { options: ["tostões", "tesouros", "tanques"], answer: 0, why: "Antes costaba casi nada: tostões (céntimos de antes)." },
        { options: ["sabor", "serviço", "segundo"], answer: 0, why: "Lo que importa del pastel: o sabor." },
        { options: ["Queria", "Estou", "Há"], answer: 0, why: "Pedir en la pastelaria: Queria…, por favor." },
      ],
    },
  ],

  "pt-cu-a1-05": [
    {
      id: "cz-pt-a1-05-1", title: "A tasca da esquina", titleEs: "La tasca de la esquina", minutes: 2,
      paragraphs: [
        { it: "A tasca da esquina é pequena: tem oito {1} e uma pizarra na parede. Não há ementa impressa: o empregado diz os pratos de {2}. «Hoje há sopa de couve e arroz de polvo!»", es: "La tasca de la esquina es pequeña: tiene ocho mesas y una pizarra en la pared. No hay menú impreso: el camarero dice los platos de memoria. «¡Hoy hay sopa de col y arroz de pulpo!»" },
        { it: "Os {3} habituais sabem o ritual: primeiro o couvert com pão e azeitonas, depois a sopa, depois o prato. No fim, um café e a {4}. «O serviço está {5}», avisa o empregado. Não é preciso deixar mais.", es: "Los clientes habituales saben el ritual: primero el couvert con pan y aceitunas, después la sopa, después el plato. Al final, un café y la cuenta. «El servicio está incluido», avisa el camarero. No hace falta dejar más." },
      ],
      gaps: [
        { options: ["mesas", "metros", "máquinas"], answer: 0, why: "Un restaurante pequeño tiene mesas." },
        { options: ["memória", "mentira", "mala"], answer: 0, why: "Sin ementa → dice los platos de memoria." },
        { options: ["fregueses", "foguetes", "filmes"], answer: 0, why: "Clientes habituales = fregueses." },
        { options: ["conta", "casa", "canção"], answer: 0, why: "Al final se pide a conta (la cuenta)." },
        { options: ["incluído", "impossível", "indisponível"], answer: 0, why: "En Portugal o serviço está incluído por lei." },
      ],
    },
    {
      id: "cz-pt-a1-05-2", title: "O jantar de negócios", titleEs: "La cena de negocios", minutes: 3,
      paragraphs: [
        { it: "O Sr. Bastos convida um cliente espanhol para jantar. «Temos bacalhau à Brás, polvo à lagareiro e {1} do dia.» O cliente pergunta: «O que é o couvert?» «É pão, {2} e azeitonas. Come-se se quiser… e paga-se se se comer!»", es: "El Sr. Bastos invita a un cliente español a cenar. «Tenemos bacalao à Brás, pulpo à lagareiro y el plato del día.» El cliente pregunta: «¿Qué es el couvert?» «Es pan, mantequilla y aceitunas. Se come si se quiere… ¡y se paga si se come!»" },
        { it: "O cliente escolhe o polvo e um vinho {3} do Minho. «Boa escolha!» diz o empregado. No fim, chega a conta: trinta e dois euros. «O {4} já está incluído», explica o Sr. Bastos. «Em Portugal não se {5} como em Nova Iorque. Redonde-se e pronto!»", es: "El cliente elige el pulpo y un vino verde del Miño. «¡Buena elección!» dice el camarero. Al final llega la cuenta: treinta y dos euros. «El servicio ya está incluido», explica el Sr. Bastos. «En Portugal no se deja propina como en Nueva York. Se redondea y listo.»" },
      ],
      gaps: [
        { options: ["prato", "preço", "plano"], answer: 0, why: "Bacalhau e polvo son platos: o prato do dia." },
        { options: ["manteiga", "manta", "mãe"], answer: 0, why: "O couvert: pão, manteiga e azeitonas." },
        { options: ["verde", "vermelho", "velho"], answer: 0, why: "El vino joven del Miño: vinho verde." },
        { options: ["serviço", "sobremesa", "seguro"], answer: 0, why: "\"Já está incluído\" → o serviço." },
        { options: ["deixa gorjeta", "dorme", "dança"], answer: 0, why: "Contraste con Nova Iorque: no se deja propina obligatoria." },
      ],
    },
    {
      id: "cz-pt-a1-05-3", title: "Comida de verdade", titleEs: "Comida de verdad", minutes: 2,
      paragraphs: [
        { it: "«O que é comida portuguesa de verdade?», pergunta a turista. «Primeiro, o {1}», responde o cozinheiro. «Bacalhau com batatas, ovos e azeitonas. Depois, o arroz de marisco e a sardinha {2} no carvão.»", es: "«¿Qué es comida portuguesa de verdad?», pregunta la turista. «Primero, el bacalao», responde el cocinero. «Bacalao con patatas, huevos y aceitunas. Después, el arroz con marisco y la sardina asada al carbón.»" },
        { it: "«E para sobremesa?» «O {3} de leite e o arroz doce. Mas atenção: em Portugal come-se {4}! O almoço é ao meio-dia e o jantar às oito ou nove. E há sempre {5}: a sopa é o início de todas as refeições.» A turista toma nota: em Portugal, a mesa é séria.", es: "«¿Y de postre?» «El flan de leche y el arroz con leche. Pero atención: ¡en Portugal se come en hora! El almuerzo es al mediodía y la cena a las ocho o nueve. Y siempre hay sopa: la sopa es el inicio de todas las comidas.» La turista toma nota: en Portugal, la mesa es seria." },
      ],
      gaps: [
        { options: ["bacalhau", "bife de novilho", "pizza"], answer: 0, why: "Plato nacional: bacalhau com batatas, ovos, azeitonas." },
        { options: ["assada", "crua", "doce"], answer: 0, why: "Sardinha assada no carvão: asada al carbón." },
        { options: ["pudim", "pão", "peixe"], answer: 0, why: "Postres clásicos: pudim de leite e arroz doce." },
        { options: ["em hora", "de pressa", "na rua"], answer: 0, why: "Horarios fijos: come-se em hora." },
        { options: ["sopa", "salada de fruta", "salsa"], answer: 0, why: "\"O início de todas as refeições\": a sopa." },
      ],
    },
  ],

  "pt-cu-a1-06": [
    {
      id: "cz-pt-a1-06-1", title: "Os saldos de janeiro", titleEs: "Las rebajas de enero", minutes: 2,
      paragraphs: [
        { it: "É janeiro e Lisboa está em {1}! As montras anunciam descontos de 50 e 70 por cento. A Inês precisa de um casaco novo: o dela já está {2} de tanto usar.", es: "Es enero y ¡Lisboa está en rebajas! Los escaparates anuncian descuentos del 50 y 70 por ciento. Inés necesita un abrigo nuevo: el suyo ya está gastado de tanto usar." },
        { it: "Na loja, experimenta três casacos. O primeiro fica {3}: é pequeno. O segundo fica-lhe bem, mas é caro. O terceiro é perfeito: azul-escuro, tamanho M, e custa só quarenta euros! «{4}!», pensa a Inês. Na caixa, paga com cartão. «Posso {5}?», pergunta. «Claro, tem sete dias», responde a empregada.", es: "En la tienda, se prueba tres abrigos. El primero le queda apretado: es pequeño. El segundo le queda bien, pero es caro. El tercero es perfecto: azul oscuro, talla M, ¡y cuesta solo cuarenta euros! «¡Me quedo con él!», piensa Inés. En caja, paga con tarjeta. «¿Puedo cambiarlo?», pregunta. «Claro, tiene siete días», responde la dependienta." },
      ],
      gaps: [
        { options: ["saldos", "sol", "silêncio"], answer: 0, why: "Descuentos de 50-70 % en enero: os saldos." },
        { options: ["gasto", "grande", "grelhado"], answer: 0, why: "\"De tanto usar\" → gastado (gasto)." },
        { options: ["apertado", "aberto", "amarelo"], answer: 0, why: "\"É pequeno\" → le queda apertado." },
        { options: ["Fico com ele", "Fico em casa", "Fico triste"], answer: 0, why: "Decisión de compra: fico com ele (me lo quedo)." },
        { options: ["trocar", "trabalhar", "tomar"], answer: 0, why: "Cambiar la prenda: trocar." },
      ],
    },
    {
      id: "cz-pt-a1-06-2", title: "A loja do bairro", titleEs: "La tienda del barrio", minutes: 3,
      paragraphs: [
        { it: "A Senhora Alice tem uma loja de roupa no bairro há trinta anos. «Antigamente, os clientes {1} conversar. Agora compram na internet», lamenta. Mas a sua loja ainda tem {2}: as clientas antigas.", es: "La Señora Alice tiene una tienda de ropa en el barrio desde hace treinta años. «Antes, los clientes paraban a conversar. Ahora compran en internet», lamenta. Pero su tienda todavía tiene fieles: las clientas de siempre." },
        { it: "A Dona Filomena entra: «Boa tarde, Alice! Preciso de um vestido para o casamento da neta.» «Que {3} usa? Temos o 42 e o 44.» A Dona Filomena experimenta o azul e o verde. «O azul {4} melhor», decide. «E o preço é {5}: trinta euros.» Trinta anos de loja, e o segredo é o mesmo: trato de confianza y paciencia.", es: "Entra Doña Filomena: «¡Buenas tardes, Alice! Necesito un vestido para la boda de la nieta.» «¿Qué talla usa? Tenemos el 42 y el 44.» Doña Filomena se prueba el azul y el verde. «El azul me queda mejor», decide. «Y el precio é razoável: treinta euros.» Treinta años de tienda, y el secreto es el mismo: trato de confianza y paciencia." },
      ],
      gaps: [
        { options: ["paravam para", "param com", "partiam de"], answer: 0, why: "\"Parar para conversar\" = parar a conversar." },
        { options: ["freguesas fiéis", "fotos famosas", "feiras francas"], answer: 0, why: "Las que siguen viniendo: clientas fieles." },
        { options: ["tamanho", "tempo", "tipo"], answer: 0, why: "\"Temos o 42 e o 44\" → tamanho (talla)." },
        { options: ["me fica", "me fica mal", "me faz"], answer: 0, why: "O azul fica melhor (me queda mejor)." },
        { options: ["razoável", "rico", "raro"], answer: 0, why: "30 € para um vestido: preço razoável." },
      ],
    },
    {
      id: "cz-pt-a1-06-3", title: "Como pedir num provador", titleEs: "Cómo pedir en un probador", minutes: 2,
      paragraphs: [
        { it: "Estás numa loja em Lisboa. Primeiro, a empregada pergunta: «Posso {1}?» Respondes: «Sim, obrigado. Preciso de uma camisa.» Ela mostra as opções: «Temos esta em {2}, em azul e em castanho.»", es: "Estás en una tienda en Lisboa. Primero, la dependienta pregunta: «¿Puedo ayudar?» Respondes: «Sí, gracias. Necesito una camisa.» Ella muestra las opciones: «Tenemos esta en blanco, en azul y en marrón.»" },
        { it: "Escolhes a azul. «Posso {3}?» perguntas. «Claro, o provador é ali.» No provador, descobres que a camisa fica pequena. Chamas a empregada: «Tem uma {4}?» «Sim, um momento!» A camisa nova fica perfeita. «{5}?» perguntas. «Vinte e cinco euros.» «Fico com ela!»", es: "Eliges la azul. «¿Puedo probármela?», preguntas. «¡Claro, el probador está allí!» En el probador, descubres que la camisa queda pequeña. Llamas a la dependienta: «¿Tiene una más grande?» «¡Sí, un momento!» La camisa nueva queda perfecta. «¿Cuánto cuesta?», preguntas. «Veinticinco euros.» «¡Me la quedo!»" },
      ],
      gaps: [
        { options: ["ajudar", "andar", "abrir"], answer: 0, why: "\"Posso ajudar?\" = ¿puedo ayudar?" },
        { options: ["branco", "bom dia", "breve"], answer: 0, why: "Cores: branco, azul, castanho." },
        { options: ["experimentar", "explicar", "empurrar"], answer: 0, why: "Probar ropa: experimentar." },
        { options: ["maior", "menor", "mais cara"], answer: 0, why: "Fica pequena → pedir uma maior." },
        { options: ["Quanto custa", "Que horas são", "Como está"], answer: 0, why: "Precio: Quanto custa?" },
      ],
    },
  ],

  "pt-cu-a1-07": [
    {
      id: "cz-pt-a1-07-1", title: "Perdido na Alfama", titleEs: "Perdido en la Alfama", minutes: 2,
      paragraphs: [
        { it: "A Alfama é um {1}: ruas estreitas, escadas e mais escadas. O turista pergunta: «Desculpe, como é que {2} para o castelo?» O senhor responde: «Suba esta rua, vire à esquerda e depois à direita.»", es: "La Alfama es un laberinto: calles estrechas, escaleras y más escaleras. El turista pregunta: «Disculpe, ¿cómo voy al castillo?» El señor responde: «Suba esta calle, gire a la izquierda y después a la derecha.»" },
        { it: "O turista agradece e {3}. Dez minutos depois, está outra vez perdido. Pergunta a uma senhora: «O castelo fica {4}?» «É muito perto! Está ali em cima, atrás da igreja.» Em Lisboa, perder-se {5}: cada esquina tem um miradouro novo.", es: "El turista agradece y camina. Diez minutos después, está otra vez perdido. Pregunta a una señora: «¿El castillo está lejos?» «¡Está muy cerca! Está allí arriba, detrás de la iglesia.» En Lisboa, perderse es un placer: cada esquina tiene un miradouro nuevo." },
      ],
      gaps: [
        { options: ["labirinto", "lago", "lugar"], answer: 0, why: "Ruas estreitas e escadas: un labirinto." },
        { options: ["vou", "vas", "vai"], answer: 0, why: "\"Como é que VOU\" (yo voy)." },
        { options: ["sobe a rua", "sai do país", "Segue"], answer: 0, why: "Sigue la instrucción: sube la calle." },
        { options: ["longe", "livre", "largo"], answer: 0, why: "Pregunta por la distancia: ¿está lejos?" },
        { options: ["é um prazer", "é proibido", "é caro"], answer: 0, why: "Cada esquina tiene un miradouro → perderse es un placer." },
      ],
    },
    {
      id: "cz-pt-a1-07-2", title: "O elétrico 28", titleEs: "El elétrico 28", minutes: 3,
      paragraphs: [
        { it: "O elétrico 28 é o mais {1} de Lisboa: passa pela Graça, pela Alfama, pela Baixa e pelo Estrela. Os turistas adoram-no; os locais usam-no para ir {2}.", es: "El elétrico 28 es el más famoso de Lisboa: pasa por la Graça, la Alfama, la Baixa y la Estrela. Los turistas lo adoran; los locales lo usan para ir a trabajar." },
        { it: "Às oito da manhã, o elétrico vai {3}: estudantes, empregadas e senhores com jornal. Às dez, vai cheio de câmaras fotográficas. «Uma senhora disse-me: vocês sobem e {4} todo o dia. Nós vamos ao trabalho!», conta o condutor. O bilhete custa {5} euros na máquina. Com o cartão Navegante, sai muito mais barato.", es: "A las ocho de la mañana, el elétrico va lleno: estudiantes, empleadas y señores con periódico. A las diez, va lleno de cámaras fotográficas. «Una señora me dijo: ustedes suben y bajan todo el día. ¡Nosotros vamos al trabajo!», cuenta el conductor. El bilhete cuesta tres euros en la máquina. Con la tarjeta Navegante, sale mucho más barato." },
      ],
      gaps: [
        { options: ["famoso", "feio", "frio"], answer: 0, why: "El tranvía más conocido: famoso." },
        { options: ["trabalhar", "viajar de férias", "turistar"], answer: 0, why: "Los locales lo usan para ir a trabajar." },
        { options: ["cheio de gente", "cheio de turistas", "vazio"], answer: 0, why: "A las 8: estudiantes y trabajadores → lleno de gente local." },
        { options: ["descem", "dormem", "dirigem"], answer: 0, why: "Los turistas suben y bajan (descem) todo o dia." },
        { options: ["três", "trezentos", "treze"], answer: 0, why: "Precio real aproximado del billete suelto: três euros." },
      ],
    },
    {
      id: "cz-pt-a1-07-3", title: "Direções no metro", titleEs: "Direcciones en el metro", minutes: 2,
      paragraphs: [
        { it: "O metro de Lisboa tem quatro {1}: azul, amarela, verde e vermelha. É rápido e limpo. «Desculpe, como é que vou para o {2} do Oriente?», perguntas a um passageiro.", es: "El metro de Lisboa tiene cuatro líneas: azul, amarilla, verde y roja. Es rápido y limpio. «Disculpe, ¿cómo voy a la estación de Oriente?», preguntas a un pasajero." },
        { it: "«É fácil: apanha a linha vermelha no {3} e desce no Oriente. São seis {4}.» «Obrigado!» «Não tem de quê!» No metro, as {5} anunciadas são em português e em inglês. Até os nomes das estações são uma aula de história: Restauradores, Marquês de Pombal, Santa Apolónia…", es: "«Es fácil: toma la línea roja en el aeroporto y baja en Oriente. Son seis paradas.» «¡Gracias!» «¡De nada!» En el metro, las paradas anunciadas son en portugués y en inglés. Hasta los nombres de las estaciones son una lección de historia: Restauradores, Marquês de Pombal, Santa Apolónia…" },
      ],
      gaps: [
        { options: ["linhas", "lojas", "línguas"], answer: 0, why: "Azul, amarela, verde, vermelha: quatro linhas." },
        { options: ["aeroporto", "aquário", "arquivo"], answer: 0, why: "La línea roja conecta el aeroporto con Oriente." },
        { options: ["aeroporto", "Alfama", "Algarve"], answer: 0, why: "La línea roja empieza en el aeroporto." },
        { options: ["estações", "escadas", "entradas"], answer: 0, why: "El trayecto cuenta paradas: estações." },
        { options: ["paragens", "pessoas", "portas"], answer: 0, why: "Lo que se anuncia por megafonía: as paragens (paradas)." },
      ],
    },
  ],

  "pt-cu-a1-08": [
    {
      id: "cz-pt-a1-08-1", title: "Bilhete para Coimbra", titleEs: "Bilhete a Coímbra", minutes: 2,
      paragraphs: [
        { it: "Na gare de Santa Apolónia, o estudante pergunta: «Queria um bilhete para Coimbra, {1} e volta.» «Para que dia?» «Para {2}, de manhã.»", es: "En la estación de Santa Apolónia, el estudiante pregunta: «Quería un billete a Coímbra, ida y vuelta.» «¿Para qué día?» «Para mañana por la mañana.»" },
        { it: "«Tem o Alfa às oito e dez ou o Intercidades às nove. O Alfa é mais {3}: chega às nove e cinquenta. O Intercidades chega às dez e meia.» «Qual é mais {4}?» «O Intercidades: vinte euros contra trinta.» «Então {5} o Intercidades!» O estudante guarda o bilhete e apanha o comboio com tempo.", es: "«Tiene el Alfa a las 8:10 o el Intercidades a las 9:00. El Alfa es más rápido: llega a las 9:50. El Intercidades llega a las 10:30.» «¿Cuál es más barato?» «El Intercidades: veinte euros contra treinta.» «¡Entonces tomo el Intercidades!» El estudiante guarda el bilhete y toma el tren con tiempo." },
      ],
      gaps: [
        { options: ["ida", "idade", "ilha"], answer: 0, why: "\"Ida e volta\" = ida y vuelta." },
        { options: ["amanhã", "antigamente", "agora mesmo"], answer: 0, why: "Compra para el día siguiente: amanhã." },
        { options: ["rápido", "raro", "romântico"], answer: 0, why: "Llega antes (9:50): mais rápido." },
        { options: ["barato", "bonito", "bom"], answer: 0, why: "20 € contra 30 €: mais barato." },
        { options: ["apanho", "apanhas", "apanham"], answer: 0, why: "Eu → apanho (tomo)." },
      ],
    },
    {
      id: "cz-pt-a1-08-2", title: "O comboio das praias", titleEs: "El tren de las playas", minutes: 3,
      paragraphs: [
        { it: "No verão, o comboio de Lisboa a Cascais fica {1} de turistas e de locais com toalha e chapéu. A linha segue {2} ao mar: à direita, as praias; à esquerda, as casas bonitas de Alcântara.", es: "En verano, el tren de Lisboa a Cascais se llena de turistas y de locales con toalla y sombrero. La línea sigue junto al mar: a la derecha, las playas; a la izquierda, las casas bonitas de Alcântara." },
        { it: "«Atenção: a próxima {3} é Oeiras», anuncia a voz. Uma senhora pergunta à neta: «Já {4} o protetor solar?» «Sim, avó! E os óculos de sol e o livro!» O comboio para em Cascais depois de trinta minutos. Todos descem {5}, em direção ao mar azul.", es: "«Atención: la próxima parada es Oeiras», anuncia la voz. Una señora pregunta a la nieta: «¿Ya tienes el protector solar?» «¡Sí, abuela! ¡Y las gafas de sol y el libro!» El tren para en Cascais después de treinta minutos. Todos bajan sonriendo, en dirección al mar azul." },
      ],
      gaps: [
        { options: ["cheio", "cozido", "coberto"], answer: 0, why: "Turistas y locales con toalla: lleno." },
        { options: ["junto", "justo", "longe"], answer: 0, why: "La línea va junto ao mar (pegada al mar)." },
        { options: ["paragem", "partida", "porta"], answer: 0, why: "Anuncio de estación: a próxima paragem." },
        { options: ["tens", "tem", "tenho"], answer: 0, why: "Abuela a nieta (tu): tens." },
        { options: ["sorrindo", "sondando", "suando"], answer: 0, why: "Vacación y mar: bajan sonriendo." },
      ],
    },
    {
      id: "cz-pt-a1-08-3", title: "O desconto de estudante", titleEs: "El descuento de estudiante", minutes: 2,
      paragraphs: [
        { it: "«Tem {1} de estudante?», pergunta a senhora da bilheteira. «Sim, tenho o cartão jovem.» «Então o bilhete do Alfa fica a {2} euros em vez de trinta.»", es: "«¿Tiene descuento de estudiante?», pregunta la señora de la taquilla. «Sí, tengo el carnet joven.» «Entonces el bilhete del Alfa queda a veinte euros en vez de treinta.»" },
        { it: "Em Portugal, os jovens até aos trinta anos podem ter o {3} jovem: dá descontos nos comboios, nos museus e até nos cinemas. «É um {4} excelente», diz a senhora. «O meu filho apanha o comboio todas as semanas para a universidade e paga {5}.» O estudante compra o bilhete contente: viajar barato também é saber português!", es: "En Portugal, los jóvenes hasta los treinta años pueden tener el carnet joven: da descuentos en trenes, museos y hasta cines. «Es un invento excelente», dice la señora. «Mi hijo toma el tren todas las semanas para la universidad y paga menos.» El estudiante compra el bilhete contente: ¡viajar barato también es saber portugués!" },
      ],
      gaps: [
        { options: ["desconto", "destino", "dinheiro"], answer: 0, why: "Cartão jovem → desconto." },
        { options: ["vinte", "trinta", "cinquenta"], answer: 0, why: "Menos que trinta: vinte euros." },
        { options: ["cartão", "comboio", "contrato"], answer: 0, why: "\"Cartão jovem\" mencionado en el contexto." },
        { options: ["invento", "incêndio", "idioma"], answer: 0, why: "\"É um … excelente\": invento (invenção ventajosa)." },
        { options: ["menos", "mais", "muito mais"], answer: 0, why: "El descuento hace que pague menos." },
      ],
    },
  ],

  "pt-cu-a1-09": [
    {
      id: "cz-pt-a1-09-1", title: "A casa de fado", titleEs: "La casa de fado", minutes: 2,
      paragraphs: [
        { it: "A casa de fado é pequena e escura. As mesas estão cheias; as luzes são {1}. «Regra número um», sussurra o guia: «quando o fadista canta, faz-se {2} absoluto.»", es: "La casa de fado es pequeña y oscura. Las mesas están llenas; las luces son bajas. «Regla número uno», susurra el guía: «cuando el fadista canta, se guarda silencio absoluto.»" },
        { it: "O fadista levanta-se. A guitarra portuguesa chora as primeiras notas. A voz sobe, forte e {3}: fala de amores perdidos e de saudade. Ninguém come; ninguém fala. Quando a canção acaba, a sala {4} em aplausos. «O fado é a música da {5}», explica o guia. Agora, todos entendem.", es: "El fadista se levanta. La guitarra portuguesa llora las primeras notas. La voz sube, fuerte y triste: habla de amores perdidos y de saudade. Nadie come; nadie habla. Cuando la canción acaba, la sala explota en aplausos. «El fado es la música de la saudade», explica el guía. Ahora, todos entienden." },
      ],
      gaps: [
        { options: ["baixas", "brancas", "baratas"], answer: 0, why: "Ambiente típico: luces bajas." },
        { options: ["silêncio", "som", "serviço"], answer: 0, why: "La regla del fado: silêncio absoluto." },
        { options: ["triste", "trémula", "trovadora"], answer: 0, why: "Amores perdidos y saudade: voz triste." },
        { options: ["explode", "espera", "enche"], answer: 0, why: "Acaba la canción → la sala explota en aplausos." },
        { options: ["saudade", "sardinha", "semana"], answer: 0, why: "La palabra-signo del fado: saudade." },
      ],
    },
    {
      id: "cz-pt-a1-09-2", title: "O clássico de domingo", titleEs: "El clásico de domingo", minutes: 3,
      paragraphs: [
        { it: "Domingo à tarde, e toda a cidade está diante da televisão: é o {1}! Benfica contra Porto, o estádio da Luz cheio, sessenta mil pessoas com a camisola {2}.", es: "Domingo por la tarde, y toda la ciudad está delante de la televisión: ¡es el clásico! Benfica contra Porto, el estadio da Luz lleno, sesenta mil personas con la camiseta roja." },
        { it: "No café do bairro, metade dos clientes aplaude o Benfica; a outra metade, o Porto. «Goloooo!», gritam todos ao mesmo tempo. Depois do jogo, as ruas {3} com buzinas e bandeiras. «Em Portugal há três {4}: Benfica, Sporting e Porto», explica o tio. «Escolher um é escolher uma família.» O sobrinho pergunta: «E se eu gostar dos {5}?» O tio ri: «Então és estrangeiro!»", es: "En el café del barrio, la mitad de los clientes aplaude al Benfica; la otra mitad, al Porto. «¡Goooool!», gritan todos al mismo tiempo. Después del partido, las calles se llenan de bocinas y banderas. «En Portugal hay tres grandes: Benfica, Sporting y Porto», explica el tío. «Elegir uno es elegir una familia.» El sobrino pregunta: «¿Y si me gustan los tres?» El tío ríe: «¡Entonces eres extranjero!»" },
      ],
      gaps: [
        { options: ["clássico", "concílio", "casamento"], answer: 0, why: "Benfica contra Porto: o clássico." },
        { options: ["vermelha", "verde", "azul"], answer: 0, why: "La camiseta del Benfica é vermelha." },
        { options: ["enchem-se", "esvaziam", "abrem"], answer: 0, why: "Buzinas e bandeiras: as ruas enchem-se." },
        { options: ["grandes", "golos", "guardiões"], answer: 0, why: "Benfica, Sporting e Porto: os três grandes." },
        { options: ["três", "dois", "nenhum"], answer: 0, why: "Sigue la lista: gostar dos três." },
      ],
    },
    {
      id: "cz-pt-a1-09-3", title: "Passatempos portugueses", titleEs: "Pasatiempos portugueses", minutes: 2,
      paragraphs: [
        { it: "O que fazem os portugueses no tempo livre? A pergunta tem {1} respostas. O Sr. Alberto pesca no rio todas as manhãs: «O peixe é um {2}; o que conta é a calma.»", es: "¿Qué hacen los portugueses en el tiempo libre? La pregunta tiene muitas respostas. El Sr. Alberto pesca en el río todas las mañanas: «El pez es un pretexto; lo que cuenta es la calma.»" },
        { it: "A Dona Celeste faz {3} com as vizinhas na varanda: «Bordamos e conversamos; é a nossa terapia.» O filho dela, o Nuno, faz {4} na serra: «A natureza é a minha igreja.» E há os que {5} o futebol, os que dançam o desgarrada e os que só conversam no café. O tempo livre português é sempre partilhado.", es: "Doña Celeste borda con las vecinas en el balcón: «Bordamos y conversamos; es nuestra terapia.» Su hijo, Nuno, hace senderismo en la sierra: «La naturaleza es mi iglesia.» Y están los que juegan al fútbol, los que bailan la desgarrada y los que solo conversan en el café. El tiempo libre portugués siempre se comparte." },
      ],
      gaps: [
        { options: ["muitas", "mil", "máximas"], answer: 0, why: "Pesca, bordado, senderismo…: muitas respostas." },
        { options: ["pretexto", "presente", "problema"], answer: 0, why: "\"O que conta é a calma\": el pez es un pretexto." },
        { options: ["bordado", "bola", "bolo"], answer: 0, why: "\"Bordamos e conversamos\": hace bordado." },
        { options: ["caminhadas", "compras", "cirurgias"], answer: 0, why: "\"Na serra\", \"a natureza\": caminhadas (senderismo)." },
        { options: ["jogam", "jantam", "julgam"], answer: 0, why: "Los que practican futebol: jogam." },
      ],
    },
  ],

  "pt-cu-a1-10": [
    {
      id: "cz-pt-a1-10-1", title: "O quarto da Sofia", titleEs: "El cuarto de Sofía", minutes: 2,
      paragraphs: [
        { it: "O quarto da Sofia é pequeno mas é {1}: tem uma janela grande com vista para o Tejo. A cama fica junto à {2}; de manhã, o sol entra e acorda-a.", es: "El cuarto de Sofía es pequeño pero es acogedor: tiene una ventana grande con vistas al Tajo. La cama está junto a la ventana; por la mañana, el sol entra y la despierta." },
        { it: "No quarto há uma estante com livros, uma {3} para estudar e uma fotografia da família. As paredes são brancas com um poster do Porto. «O meu quarto {4} muita coisa: livros, roupas, sonhos», ri a Sofia. «É pequeno, mas é {5}!»", es: "En el cuarto hay una estantería con libros, una mesa para estudiar y una fotografía de la familia. Las paredes son blancas con un póster de Oporto. «Mi cuarto tiene mucha cosa: libros, ropas, sueños», ríe Sofía. «¡Es pequeño, pero es mío!»" },
      ],
      gaps: [
        { options: ["acolhedor", "antigo", "aberto"], answer: 0, why: "Pequeno mas… com boa luz: acolhedor." },
        { options: ["janela", "porta", "parede"], answer: 0, why: "\"Com vista para o Tejo\": junto à janela." },
        { options: ["mesa", "mala", "máquina"], answer: 0, why: "Para estudiar: uma mesa." },
        { options: ["tem", "há", "é"], answer: 0, why: "Posesión/pertenencia de las cosas del cuarto: tem." },
        { options: ["meu", "mau", "mudo"], answer: 0, why: "«É pequeno, mas é MEU» = es mío." },
      ],
    },
    {
      id: "cz-pt-a1-10-2", title: "Procurar casa em Lisboa", titleEs: "Buscar casa en Lisboa", minutes: 3,
      paragraphs: [
        { it: "Procurar casa em Lisboa não é fácil. Os apartamentos do centro são {1}; os da periferia são mais baratos mas ficam longe. O agente mostra um T1 na Graça: «Tem sala, quarto, cozinha e casa de {2}.»", es: "Buscar casa en Lisboa no es fácil. Los apartamentos del centro son caros; los de la periferia son más baratos pero quedan lejos. El agente muestra un T1 en la Graça: «Tiene salón, dormitorio, cocina y cuarto de baño.»" },
        { it: "«O {3} é quinhentos euros com despesas incluídas.» «Não tem elevador?» «Tem, mas a máquina está avariada», admite o agente. «São {4} andares sem elevador…» A Sofia respira fundo. «A vista do terraço é {5}», insiste o agente. Do terraço vê-se todo o Tejo. A Sofia assina o contrato: as vistas valem os cinco andares!", es: "«El alquiler es de quinientos euros con gastos incluidos.» «¿No tiene ascensor?» «Tiene, pero la máquina está averiada», admite el agente. «Son cuatro pisos sin ascensor…» Sofía respira hondo. «La vista de la terraza es incrível», insiste el agente. Desde la terraza se ve todo el Tajo. Sofía firma el contrato: ¡las vistas valen los cuatro pisos!" },
      ],
      gaps: [
        { options: ["caros", "castanhos", "curtos"], answer: 0, why: "Contraste con la periferia mais barata: caros." },
        { options: ["banho", "barcos", "bombas"], answer: 0, why: "\"Casa de banho\" = cuarto de baño." },
        { options: ["arrendamento", "apetite", "apartamento"], answer: 0, why: "500 €/mes: o arrendamento (rent)." },
        { options: ["quatro", "quarenta", "quarto"], answer: 0, why: "Plural de andares: quatro (4 pisos)." },
        { options: ["incrível", "impossível", "invisível"], answer: 0, why: "Se ve todo el Tajo: vista incrível." },
      ],
    },
    {
      id: "cz-pt-a1-10-3", title: "A casa da avó", titleEs: "La casa de la abuela", minutes: 2,
      paragraphs: [
        { it: "A casa da avó Amélia é uma casa de família: tem três {1} e um quintal com laranjeiras. Na cozinha, os azulejos são do ano {2}: brancos e azuis, com cenas de pescadores.", es: "La casa de la abuela Amélia es una casa de familia: tiene tres generaciones y un patio con naranjos. En la cocina, los azulejos son del año mil: blancos y azules, con escenas de pescadores." },
        { it: "Na sala há fotos de todos: baptizados, casamentos, primeiras communhões. «Cada fotografia é uma {3}», diz a avó. No quintal, as {4} dão sombra no verão. As crianças brincam; os adultos conversam. «Esta casa não é grande, mas é {5}: aqui cabe toda a família», diz a avó Amélia. E ninguém discorda.", es: "En el salón hay fotos de todos: bautizos, bodas, primeras comuniones. «Cada fotografía es una historia», dice la abuela. En el patio, las laranjeiras dan sombra en verano. Los niños juegan; los adultos conversan. «Esta casa no es grande, pero es suficiente: aquí cabe toda la familia», dice la abuela Amélia. Y nadie discorda." },
      ],
      gaps: [
        { options: ["gerações", "gavetas", "gatos"], answer: 0, why: "Fotos de baptizados e casamentos: três gerações." },
        { options: ["mil novecentos", "mil milhões", "dois mil"], answer: 0, why: "Azulejos antigos: del siglo XX (mil novecentos)." },
        { options: ["história", "higiene", "hierba"], answer: 0, why: "Cada foto familiar guarda uma história." },
        { options: ["laranjeiras", "lavadoras", "lâmpadas"], answer: 0, why: "El texto dice que el quintal tiene laranjeiras." },
        { options: ["suficiente", "sofisticada", "solitária"], answer: 0, why: "\"Aqui cabe toda a família\": suficiente." },
      ],
    },
  ],

  "pt-cu-a1-11": [
    {
      id: "cz-pt-a1-11-1", title: "As mil receitas do bacalhau", titleEs: "Las mil recetas del bacalao", minutes: 2,
      paragraphs: [
        { it: "Diz-se que em Portugal há {1} receitas de bacalhau: uma para cada dia do ano! O bacalhau à Brás leva batata palha e {2}; o bacalhau com natas vai ao forno; o à Gomes de Sá leva azeitonas e ovo cozido.", es: "Se dice que en Portugal hay mil recetas de bacalao: ¡una para cada día del año! El bacalhau à Brás lleva patata paja y huevo; el bacalhau com natas va al horno; el à Gomes de Sá lleva aceitunas y huevo cocido." },
        { it: "Mas antes de cozinhar, é preciso {3} o bacalhau: vinte e quatro a quarenta e oito horas em água, trocando a água várias {4}. «O bacalhau salgado veio dos descobrimentos», explica o chef. «Os barcos precisavam de comida que {5} meses no mar. Hoje, o bacalhau é a paixão nacional: salgado, seco e delicioso.»", es: "Pero antes de cocinar, hay que desalar el bacalao: veinticuatro a cuarenta y ocho horas en agua, cambiando el agua varias veces. «El bacalao salado vino de los descubrimientos», explica el chef. «Los barcos necesitaban comida que durara meses en el mar. Hoy, el bacalao es la pasión nacional: salado, seco y delicioso.»" },
      ],
      gaps: [
        { options: ["mil", "cem", "um milhão"], answer: 0, why: "\"Uma para cada dia do ano\": mil (1000)." },
        { options: ["ovos", "óculos", "ovos moles"], answer: 0, why: "El à Brás leva batata palha e ovos." },
        { options: ["dessalgar", "descascar", "decorar"], answer: 0, why: "24-48 horas em água: dessalgar (desalar)." },
        { options: ["vezes", "vendas", "viagens"], answer: 0, why: "\"Várias vezes\" = varias veces." },
        { options: ["durasse", "doasse", "dividisse"], answer: 0, why: "Comida que durasse meses: durar." },
      ],
    },
    {
      id: "cz-pt-a1-11-2", title: "A sardinha de junho", titleEs: "La sardina de junio", minutes: 3,
      paragraphs: [
        { it: "Em junho, Lisboa cheira a sardinha {1}. É a festa de Santo António! Nas ruas dos bairros, há arcos de flores, {2} coloridas e grelhadas na rua.", es: "En junio, Lisboa huele a sardinha asada. ¡Es la fiesta de Santo António! En las calles de los barrios, hay arcos de flores, banderas coloridas y parrillas en la calle." },
        { it: "«Uma {3}, bem assada!», grita o vendedor. A sardinha come-se com pão de milho — a broa — e salada. «Antigamente, a sardinha era comida dos {4}», conta a Dona Rosa. «Hoje é festa: comes quatro ou cinco com a mão, na rua, junto aos teus vizinhos.» À noite, há {5} nas ruas e casamentos coletivos: as marchas populares. Lisboa inteira dança.", es: "«¡Una dollada, bien asada!», grita el vendedor. La sardina se come con pan de maíz — la broa — y ensalada. «Antes, la sardina era comida de los pobres», cuenta Doña Rosa. «Hoy es fiesta: comes cuatro o cinco con la mano, en la calle, junto a tus vecinos.» Por la noche, hay música en las calles y bodas colectivas: las marchas populares. Lisboa entera baila." },
      ],
      gaps: [
        { options: ["assada", "adocicada", "apanhada"], answer: 0, why: "La sardinha se hace na grelha: assada (asada)." },
        { options: ["bandeirinhas", "bancadas", "bombas"], answer: 0, why: "Decoración típica: bandeirinhas coloridas." },
        { options: ["dose", "dúzia", "dezena"], answer: 0, why: "\"Uma dose\" = una ración (en la calle se vende por dosis)." },
        { options: ["pobres", "pescadores ricos", "políticos"], answer: 0, why: "Contraste com \"hoje é festa\": antes era comida dos pobres." },
        { options: ["música e dança", "multas", "manifestações"], answer: 0, why: "Marchas populares: música e dança." },
      ],
    },
    {
      id: "cz-pt-a1-11-3", title: "No mercado com a lista", titleEs: "En el mercado con la lista", minutes: 2,
      paragraphs: [
        { it: "A mãe da Inês manda-a ao mercado com uma {1}: «Um quilo de laranjas, meia dúzia de ovos, meio quilo de queijo da serra e um {2} de bacalhau.»", es: "La madre de Inés la manda al mercado con una lista: «Un kilo de naranjas, media docena de huevos, medio kilo de queso da serra y una tajada de bacalao.»" },
        { it: "No mercado, a Inês vai de banca em banca. «As laranjas estão {3} hoje: dois euros o quilo!» O vendedor de queijo oferece uma prova: «A {4} é o que importa!» No peixe, escolhe uma posta grande. «É tudo, obrigada!» A Inês volta para casa com as {5} cheias e dois euros de troco para o café.", es: "En el mercado, Inés va de puesto en puesto. «¡Las naranjas están baratas hoy: dos euros el kilo!» El vendedor de queso ofrece una prueba: «¡El sabor es lo que importa!» En el pescado, elige una tajada grande. «¡Es todo, gracias!» Inés vuelve a casa con las bolsas llenas y dos euros de cambio para el café." },
      ],
      gaps: [
        { options: ["lista", "loja", "liteira"], answer: 0, why: "Compra programada: uma lista." },
        { options: ["posto", "pacote", "preço"], answer: 0, why: "Se compra por postas (tajadas)." },
        { options: ["baratas", "brigadas", "brancas"], answer: 0, why: "2 € o quilo: baratas." },
        { options: ["prova", "prancha", "prenda"], answer: 0, why: "\"Oferece uma prova\" = una degustación." },
        { options: ["mãos", "malas de viagem", "bolsas"], answer: 0, why: "Compra completada: bolsas cheias." },
      ],
    },
  ],

  "pt-cu-a1-12": [
    {
      id: "cz-pt-a1-12-1", title: "Chegada ao Porto", titleEs: "Llegada a Oporto", minutes: 2,
      paragraphs: [
        { it: "O comboio chega a Campanhã às dez e meia. «{1} ao Porto!», anuncia o altifalante. A ponte de Dom Luís aparece entre os {2}: ferro e azulejo sobre o rio Douro.", es: "El tren llega a Campanhã a las 10:30. «¡Llegamos a Oporto!», anuncia el altavoz. El puente de D. Luís aparece entre los tejados: hierro y azulejo sobre el río Douro." },
        { it: "Na Ribeira, as casas são {3}: amarelas, azuis, vermelhas, umas em cima das outras. Os barcos rabelo dormem no rio. «Esta cidade tem {4}», diz um velho portuense sentado ao sol. «Lisboa mostra-se; o Porto conquista.» O viajante sente-o: há qualquer coisa de {5} nestas ruas inclinadas.", es: "En la Ribeira, las casas son coloridas: amarillas, azules, rojas, unas encima de otras. Los barcos rabelo duermen en el río. «Esta ciudad tiene alma», dice un viejo portuense sentado al sol. «Lisboa se muestra; Oporto conquista.» El viajero lo siente: hay algo de mágico en estas calles inclinadas." },
      ],
      gaps: [
        { options: ["Chegámos", "Começamos", "Comprámos"], answer: 0, why: "El tren llega: Chegámos (hemos llegado)." },
        { options: ["telhados", "teatros", "túneis"], answer: 0, why: "Vista de la ciudad: entre os telhados (tejados)." },
        { options: ["coloridas", "cansadas", "cortadas"], answer: 0, why: "Amarelas, azuis, vermelhas: coloridas." },
        { options: ["alma", "altura", "água"], answer: 0, why: "\"Lisboa mostra-se; o Porto conquista\": alma." },
        { options: ["mágico", "médico", "mínimo"], answer: 0, why: "Calles inclinadas con encanto: mágico." },
      ],
    },
    {
      id: "cz-pt-a1-12-2", title: "A francesinha", titleEs: "La francesinha", minutes: 3,
      paragraphs: [
        { it: "«Não sais do Porto sem provar a {1}», avisa o Rui. «O que é?» «Um sanduíche gigante: pão, {2}, queijo, ovo e um molho picante secreto.»", es: "«No te vas de Oporto sin probar la francesinha», avisa Rui. «¿Qué es?» «Un sándwich gigante: pan, carne, queso, huevo y una salsa picante secreta.»" },
        { it: "A francesinha chega à mesa: é uma {3} de comida! O molho vermelho cobre tudo. O Alex corta o primeiro pedaço e prova. «Está… {4}!» «O molho é o segredo», sorri o empregado. «Cada casa tem a sua receita; ninguém a revela.» No fim, o Alex está {5}: «Só posso dormir!» «Bem-vindo ao Porto», ri o Rui.", es: "La francesinha llega a la mesa: ¡es una montaña de comida! La salsa roja lo cubre todo. Alex corta el primer trozo y prueba. «Está… ¡picante!» «La salsa es el secreto», sonríe el camarero. «Cada casa tiene su receta; nadie la revela.» Al final, Alex está cheio: «¡Solo puedo dormir!» «Bienvenido a Oporto», ríe Rui." },
      ],
      gaps: [
        { options: ["francesinha", "feijoada", "francesa"], answer: 0, why: "El plato típico do Porto: a francesinha." },
        { options: ["carne", "caldo", "canja"], answer: 0, why: "Sanduíche: pão, carne, queijo, ovo." },
        { options: ["montanha", "mesa", "maravilha"], answer: 0, why: "Gigante cubierto de salsa: una montaña de comida." },
        { options: ["picante", "parado", "perdido"], answer: 0, why: "El molho picante secreto: picante." },
        { options: ["cheio", "chateado", "choroso"], answer: 0, why: "Tras comer tanto: cheio (lleno)." },
      ],
    },
    {
      id: "cz-pt-a1-12-3", title: "O balão sobre o Douro", titleEs: "El globo sobre el Douro", minutes: 2,
      paragraphs: [
        { it: "Do alto da ponte, o Douro parece {1}: barcos rabelo, gaivotas e as caves de vinho do Porto na margem sul. «O vinho do Porto envelhece ali, em Vila Nova de {2}», explica o guia.", es: "Desde lo alto del puente, el Douro parece un cuadro: barcos rabelo, gaviotas y las bodegas de vino de Oporto en la orilla sur. «El vino de Oporto envejece allí, en Vila Nova de Gaia», explica el guía." },
        { it: "«Os barcos rabelo traziam o vinho do {3} Douro até aqui. Hoje passeiam turistas.» O Alex compra um copo de vinho branco e senta-se a olhar o rio. «{4} uma aventura», pensa. Amanhã, Lisboa outra vez; hoje, o Porto é dele. «Até já, cidade {5}!», diz o Alex, já com saudade.", es: "«Los barcos rabelo traían el vino del alto Douro hasta aquí. Hoy pasean turistas.» Alex compra una copa de vino blanco y se sienta a mirar el río. «Fue una aventura», piensa. Mañana, Lisboa otra vez; hoy, Oporto es suyo. «¡Hasta pronto, ciudad invicta!», dice Alex, ya con saudade." },
      ],
      gaps: [
        { options: ["um quadro", "uma questão", "um caso"], answer: 0, why: "Vista pintoresca: parece um quadro (un cuadro)." },
        { options: ["Gaia", "Guia", "Guarda"], answer: 0, why: "Las caves están em Vila Nova de Gaia." },
        { options: ["alto", "baixo", "antigo"], answer: 0, why: "\"O vinho vinha do ALTO Douro\": de las viñas altas." },
        { options: ["Foi", "Vai ser", "Era ser"], answer: 0, why: "La aventura concluida: Foi uma aventura." },
        { options: ["invicta", "invisível", "invertida"], answer: 0, why: "El apodo do Porto: a cidade invicta." },
      ],
    },
  ],
};
