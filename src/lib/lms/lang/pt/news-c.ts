/* ── PT · Notícias C1 + C2 (v9.26) ────────────────────────────────────
   Português europeu avançado, método VOA. C1: argumentação matizada;
   C2: registo literário, ironia e retórica. `.it` = português, `.es` = espanhol. */

import type { NewsItem } from "../../news";

export const PT_NEWS_C: NewsItem[] = [

  /* ═══ C1 · 1 — Sociedade ═══ */
  {
    id: "pt-news-c1-01", cat: "societa", level: "C1", place: "Lisboa", minutes: 5,
    title: "A geração que voltou",
    titleEs: "La generación que volvió",
    lead: {
      it: "Durante trinta anos, o tema português era a despedida: a fuga de cérebros, os aeroportos com lágrimas. O século inverteu a corrente — e os que partiram começaram, devagar, a regressar a casa.",
      es: "Durante treinta años, el tema portugués era la despedida: la fuga de cerebros, los aeropuertos con lágrimas. El siglo invirtió la corriente — y los que se fueron empezaron, despacio, a regresar a casa.",
    },
    paragraphs: [
      { it: "A primeira vaga partiu nos anos oitenta, com mala de cartão e endereço na Alemanha, na França ou na Suíça. A segunda vaga partiu já com licenciatura: engenheiros para o Luxemburgo, médicos para Inglaterra, programadores para tudo o que tivesse servidor. O país tornou-se perito em exportar aquilo em que mais investia.",
      es: "La primera ola se fue en los años ochenta, con maleta de cartón y dirección en Alemania, Francia o Suiza. La segunda ola se fue ya con título: ingenieros a Luxemburgo, médicos a Inglaterra, programadores a todo lo que tuviera servidor. El país se volvió experto en exportar aquello en lo que más invertía." },
      { it: "O regresso começou sem cerimónia. Primeiro vieram os que perderam o emprego nas crises alheias; depois, os que se cansaram de pagar rendas impossíveis por janelas sem sol; por fim — e esta é a parte nova — vieram os que descobriram que o trabalho remoto lhes permitia escolher o sítio onde vivem, e escolheram o sítio onde eram felizes.",
      es: "El regreso empezó sin ceremonia. Primero vinieron los que perdieron el empleo en las crisis ajenas; después, los que se cansaron de pagar rentas imposibles por ventanas sin sol; al fin — y esta es la parte nueva — vinieron los que descubrieron que el trabajo remoto les permitía elegir el lugar donde viven, y eligieron el lugar donde eran felices." },
      { it: "Os números chamam-lhe «migração de retorno»; as famícias chamam-lhe outra coisa. Os filhos que voltam trazem sotaques novos e filhos com dois passaportes; os avós recebem-nos com o almoço pronto e uma pergunta discreta: «e ficas para ficar, ou ficas para partir outra vez?»",
      es: "Los números lo llaman «migración de retorno»; las familias lo llaman otra cosa. Los hijos que vuelven traen acentos nuevos e hijos con dos pasaportes; los abuelos los reciben con el almuerzo listo y una pregunta discreta: «¿y te quedas para quedarte, o te quedas para irte otra vez?»" },
      { it: "Os economistas discutem se o regresso é um sintoma ou uma cura. Os regressados têm outra opinião, mais prática: nem uma coisa nem outra. É uma escolha — e as escolhas não curam países; mudam-nos de dentro, um regressado de cada vez, uma rua de cada vez, uma padaria que reabre de cada vez.",
      es: "Los economistas discuten si el regreso es un síntoma o una cura. Los regresados tienen otra opinión, más práctica: ni una cosa ni la otra. Es una elección — y las elecciones no curan países; los cambian desde dentro, un regresado a la vez, una calle a la vez, una panadería que reabre a la vez." },
      { it: "A frase do ano saiu de um regressado de Genebra, ao terceiro copo, num casamento no Minho: «Passei vinte anos a aprender a dizer Guten Tag e Bonjour. Agora quero só aprender a dizer bom dia a quem passa na rua — e que me responda.»",
      es: "La frase del año salió de un regresado de Ginebra, en la tercera copa, en una boda en el Miño: «Pasé veinte años aprendiendo a decir Guten Tag y Bonjour. Ahora solo quiero aprender a decir buenos días a quien pasa por la calle — y que me responda.»" },
    ],
    words: [
      { it: "a fuga de cérebros", es: "la fuga de cerebros" },
      { it: "a mala de cartão", es: "la maleta de cartón" },
      { it: "inverter a corrente", es: "invertir la corriente" },
      { it: "o regresso / regressado", es: "el regreso / regresado" },
      { it: "a renda", es: "la renta, el alquiler" },
      { it: "sem cerimónia", es: "sin ceremonia" },
    ],
    questions: [
      { q: "¿Cómo era la segunda ola de emigración?", options: ["Com mala de cartão", "Já com licenciatura: engenheiros, médicos, programadores", "Só estudantes", "Só reformados"], answer: 1, why: "«A segunda vaga partiu já com licenciatura: engenheiros para o Luxemburgo, médicos para Inglaterra, programadores para tudo o que tivesse servidor.»" },
      { q: "¿Quiénes volvieron primero y quiénes al final?", options: ["Primeiro os que quiseram; último os que não quiseram", "Primeiro os que perderam o emprego; depois os cansados das rendas; por fim os que escolheram o sítio onde eram felizes", "Todos voltaram ao mesmo tempo", "Ninguém voltou"], answer: 1, why: "«Primeiro vieram os que perderam o emprego nas crises alheias; depois, os que se cansaram de pagar rendas impossíveis; por fim… os que escolheram o sítio onde eram felizes.»" },
      { q: "¿Qué pregunta discreta hacen los abuelos?", options: ["«Quando voltas a partir?»", "«Ficas para ficar, ou ficas para partir outra vez?»", "«Quanto ganhas?»", "«Trouxeste presentes?»"], answer: 1, why: "«E ficas para ficar, ou ficas para partir outra vez?»" },
      { q: "¿Síntoma o cura? ¿Qué responden los regresados?", options: ["É uma cura", "É um sintoma", "Nem uma coisa nem outra: é uma escolha que muda o país de dentro, um regressado de cada vez", "É um acaso"], answer: 2, why: "«As escolhas não curam países; mudam-nos de dentro, um regressado de cada vez, uma rua de cada vez.»" },
      { q: "¿Cuál fue la frase del año (regresado de Genebra)?", options: ["«Quero é aprender a dizer bom dia a quem passa na rua — e que me responda.»", "«Genebra é melhor.»", "«Não volto nunca.»", "«Portugal mudou pouco.»"], answer: 0, why: "«Passei vinte anos a aprender a dizer Guten Tag e Bonjour. Agora quero só aprender a dizer bom dia a quem passa na rua — e que me responda.»" },
    ],
    discuss: [
      { it: "Na tua família, quem partiu e quem voltou? Conta a corrente.", es: "En tu familia, ¿quién se fue y quién volvió? Cuenta la corriente." },
      { it: "«As escolhas não curam países; mudam-nos de dentro.» Concordas? Que escolha mudou a tua rua?", es: "«Las elecciones no curan países; los cambian desde dentro.» ¿Estás de acuerdo? ¿Qué elección cambió tu calle?" },
    ],
  },

  /* ═══ C1 · 2 — Cultura ═══ */
  {
    id: "pt-news-c1-02", cat: "cultura", level: "C1", place: "Lisboa", minutes: 5,
    title: "A livraria mais antiga do mundo ainda abre à porta",
    titleEs: "La librería más antigua del mundo todavía abre sus puertas",
    lead: {
      it: "Em 1732, uma livraria abriu num beco de Lisboa. Duzentos e noventa anos depois, continua aberta — e o mesmo balcão vende agora livros que falam dele próprio.",
      es: "En 1732, una librería abrió en un callejón de Lisboa. Doscientos noventa años después, sigue abierta — y el mismo mostrador vende ahora libros que hablan de él mismo.",
    },
    paragraphs: [
      { it: "A livraria Bertrand sobreviveu a terramotos, a guerras, a incêndios e a três revoluções de regime. Sobreviveu, sobretudo, a todas as profecias do seu próprio fim: o fim anunciado pelo jornal, depois pelo rádio, depois pela televisão, depois pela internet — que, dizem os livreiros, é a profecia que mais se repete e que menos se cumpre.",
      es: "La librería Bertrand sobrevivió a terremotos, guerras, incendios y tres revoluciones de régimen. Sobrevivió, sobre todo, a todas las profecías de su propio fin: el fin anunciado por el periódico, luego por la radio, luego por la televisión, luego por internet — que, dicen los libreros, es la profecía que más se repite y que menos se cumple." },
      { it: "O segredo, se é que existe, não é o mais antigo nem o mais glamouroso. As livrarias pequenas transformaram-se em sítios de encontro: quem entra para um livro fica para uma conversa; quem entra para a chuva sai com um romance. Os livreiros portugueses chamam a isto «o efeito abrigo» — e vendem-se livros à conta dele, sem pressa e sem culpa.",
      es: "El secreto, si existe, no es el más antiguo ni el más glamuroso. Las librerías pequeñas se transformaron en lugares de encuentro: quien entra por un libro se queda por una conversación; quien entra por la lluvia sale con una novela. Los libreros portugueses llaman a esto «el efecto refugio» — y se venden libros a cuenta de él, sin prisa y sin culpa." },
      { it: "Os números do país são, de resto, surpreendentes para quem julga que o sul só lê à beira da praia. Portugal edita milhares de títulos por ano; os prémios literários enchem os noticiários; e as feiras do livro ocupam, durante meses, as praças mais bonitas das cidades — com filas de crianças a exigir o próximo capítulo da vida.",
      es: "Los números del país son, por lo demás, sorprendentes para quien cree que el sur solo lee a la orilla de la playa. Portugal edita miles de títulos por año; los premios literarios llenan los noticiarios; y las ferias del libro ocupan, durante meses, las plazas más bonitas de las ciudades — con filas de niños exigiendo el próximo capítulo de la vida." },
      { it: "Os escritores fazem a sua parte com teimosia. Um dos mais famosos nunca saiu do bairro e escreveu sobre ele uma obra inteira; um outro, morto há um século, voltou a ficar jovem nas mãos dos leitores novos. Os editores resumem com uma regra de casa: em Portugal, um livro raramente fica órfão; fica, quando muito, adiado.",
      es: "Los escritores hacen su parte con terquedad. Uno de los más famosos nunca salió del barrio y escribió sobre él una obra entera; otro, muerto hace un siglo, volvió a ponerse joven en manos de los lectores nuevos. Los editores resumen con una regla de casa: en Portugal, un libro raramente queda huérfano; queda, cuando mucho, aplazado." },
      { it: "E a livraria do beco? Continua a abrir de manhã, com as mesmas meias-houras de cheiro a papel. No balcão, um cartaz avisa, sem dramatismo: «Não somos a livraria mais antiga porque somos os melhores. Somos os melhores porque somos a mais antiga: já vimos todos os fins — e ainda aqui estamos.»",
      es: "¿Y la librería del callejón? Sigue abriendo por la mañana, con las mismas medias horas de olor a papel. En el mostrador, un cartel avisa, sin dramatismo: «No somos la librería más antigua porque somos los mejores. Somos los mejores porque somos la más antigua: ya vimos todos los fines — y seguimos aquí.»" },
    ],
    words: [
      { it: "a livraria", es: "la librería" },
      { it: "o livreiro", es: "el librero" },
      { it: "o terramoto", es: "el terremoto" },
      { it: "a profecia", es: "la profecía" },
      { it: "o efeito abrigo", es: "el efecto refugio (figurado)" },
      { it: "à conta de", es: "a cuenta de" },
      { it: "órfão", es: "huérfano" },
    ],
    questions: [
      { q: "¿A qué sobrevivió la livraria Bertrand?", options: ["Só ao tempo", "A terramotos, guerras, incêndios, três revoluções — e a todas as profecias do seu próprio fim", "A nada, é nova", "A uma crise"], answer: 1, why: "«Sobreviveu a terramotos, a guerras, a incêndios e a três revoluções de regime. Sobreviveu, sobretudo, a todas as profecias do próprio fim.»" },
      { q: "¿Cuál es la profecía «que más se repite y menos se cumple»?", options: ["A do fim anunciado pela internet (antes: jornal, rádio, televisão)", "A do fim do papel moeda", "A do fim dos jornais", "A do fim das férias"], answer: 0, why: "«O fim anunciado pelo jornal, depois pelo rádio, depois pela televisão, depois pela internet — a profecia que mais se repete e que menos se cumpre.»" },
      { q: "¿Qué es el «efeito abrigo»?", options: ["Um imposto sobre livros", "As livrarias como sítios de encontro: quem entra pela chuva sai com um romance", "Um tipo de estante", "Um clube de leitura"], answer: 1, why: "«Quem entra para um livro fica para uma conversa; quem entra para a chuva sai com um romance… o efeito abrigo.»" },
      { q: "¿Qué regla resumen los editores?", options: ["«Um livro fica órfão com facilidade.»", "«Em Portugal, um livro raramente fica órfão; fica, quando muito, adiado.»", "«Livros só em Natal.»", "«Ninguém lê no sul.»"], answer: 1, why: "«Em Portugal, um livro raramente fica órfão; fica, quando muito, adiado.»" },
      { q: "¿Qué dice el cartel del mostrador?", options: ["«Somos a melhor do mundo.»", "«Não somos a mais antiga porque somos os melhores. Somos os melhores porque somos a mais antiga: já vimos todos os fins — e ainda aqui estamos.»", "«Fechado para obras.»", "«Descontos de Janeiro.»"], answer: 1, why: "«Já vimos todos os fins — e ainda aqui estamos.»" },
    ],
    discuss: [
      { it: "O «efeito abrigo»: já te aconteceu numa livraria? Conta o livro que compraste sem planear.", es: "El «efecto refugio»: ¿te pasó en una librería? Cuenta el libro que compraste sin planearlo." },
      { it: "Livro de papel: adiado ou órfão? Qual é o teu veredito, e porquê?", es: "Libro de papel: ¿aplazado o huérfano? ¿Cuál es tu veredicto, y por qué?" },
    ],
  },

  /* ═══ C1 · 3 — Economia ═══ */
  {
    id: "pt-news-c1-03", cat: "economia", level: "C1", place: "Porto", minutes: 5,
    title: "O rio que se tornou uma marca registada",
    titleEs: "El río que se convirtió en marca registrada",
    lead: {
      it: "O vinho do Porto nasceu de um acidente diplomático e de um rio navegável. Duzentos anos depois, o vale do Douro é uma paisagem inventada pela economia — e a economia agora depende de a conservar.",
      es: "El vino de Oporto nació de un accidente diplomático y de un río navegable. Doscientos años después, el valle del Duero es un paisaje inventado por la economía — y la economía ahora depende de conservarlo.",
    },
    paragraphs: [
      { it: "A história começa com um embargo. Mercadores ingleses, proibidos de comprar vinho francês, procuraram alternativas do outro lado da fronteira — e encontraram, num vale agreste, um vinho que aguentava a viagem de barco até Londres, desde que se lhe acrescentasse aguardente. O império do gosto fez o resto: o «Port» tornou-se o vinho dos jantares de Londres, e o vale transformou-se em horta vertical.",
      es: "La historia empieza con un embargo. Mercaderes ingleses, prohibidos de comprar vino francés, buscaron alternativas al otro lado de la frontera — y encontraron, en un valle agreste, un vino que aguantaba el viaje en barco hasta Londres, siempre que se le añadiera aguardiente. El imperio del gusto hizo el resto: el «Port» se volvió el vino de las cenas de Londres, y el valle se transformó en huerta vertical." },
      { it: "Os terraços são a maravilha esquecida da engenharia pré-industrial. Gerações de camponeses abriram, na pedra, escadas gigantes onde só cabia uma vinha — e o rio levava as barricas até ao mar. A UNESCO classificou a paisagem; os economistas classificaram-na também, com outra palavra: ativo. Um ativo, como se sabe, depreciates se não for mantido.",
      es: "Los bancales son la maravilla olvidada de la ingeniería preindustrial. Generaciones de campesinos abrieron, en la piedra, escaleras gigantes donde solo cabía una viña — y el río llevaba las barricas hasta el mar. La UNESCO clasificó el paisaje; los economistas lo clasificaron también, con otra palabra: activo. Un activo, como se sabe, se deprecia si no se mantiene." },
      { it: "O século XX quase partiu a herança. A filoxera matou as vinhas velhas; o caminho-de-ferro e as estradas tiraram o trabalho ao rio; os lados das encostas despovoaram-se, como despovoou o interior todo. Quem salvou o vale foi, em parte, o mesmo mercado que o criara: a moda dos vinhos «de terroir» valorizou o exacto contrário da produção industrial — o sítio único, a vinha velha, o lagar de pedra.",
      es: "El siglo XX casi partió la herencia. La filoxera mató las viñas viejas; el ferrocarril y las carreteras quitaron el trabajo al río; los lados de las laderas se despoblaron, como se despobló el interior entero. Quien salvó el valle fue, en parte, el mismo mercado que lo había creado: la moda de los vinos «de terroir» valorizó lo exacto contrario de la producción industrial — el sitio único, la viña vieja, el lagar de piedra." },
      { it: "Hoje, o vale vive um equilíbrio novo. O enoturismo enche os hotéis antigos; as quintas contratam enólogos com salários de cidade; mas a vindima continua a fazer-se a mão, nas encostas onde nenhuma máquina sobe. Os donos das quintas repetem a mesma conta, entre o orgulhoso e o assustado: sem gente no vale, o vinho é só uma paisagem bonita com uma etiqueta.",
      es: "Hoy, el valle vive un equilibrio nuevo. El enoturismo llena los hoteles antiguos; las quintas contratan enólogos con sueldos de ciudad; pero la vendimia sigue haciéndose a mano, en las laderas donde ninguna máquina sube. Los dueños de las quintas repiten la misma cuenta, entre el orgullo y el susto: sin gente en el valle, el vino es solo un paisaje bonito con una etiqueta." },
      { it: "E o rio? Continua lá, agora com cruzeiros em vez de barricas. Um velho barqueiro fez o resumo que os relatórios não conseguem: «Antigamente, o rio levava o vinho para o mundo. Agora traz o mundo até ao vinho. Tenho sessenta anos e, a valer bem as contas, a segunda viagem paga melhor — mas a primeira tinha mais alma.»",
      es: "¿Y el río? Sigue allí, ahora con cruceros en vez de barricas. Un viejo barquero hizo el resumen que los informes no consiguen: «Antes, el río llevaba el vino al mundo. Ahora trae el mundo hasta el vino. Tengo sesenta años y, saliendo bien las cuentas, el segundo viaje paga mejor — pero el primero tenía más alma.»" },
    ],
    words: [
      { it: "o embargo", es: "el embargo" },
      { it: "o terraço", es: "el bancal, el terraplén" },
      { it: "a barrica", es: "la barrica" },
      { it: "a vindima", es: "la vendimia" },
      { it: "a quinta", es: "la quinta (finca)" },
      { it: "o enoturismo", es: "el enoturismo" },
      { it: "depreciate", es: "depreciarse (anglicismo financeiro)" },
    ],
    questions: [
      { q: "¿Cómo nació el vino de Oporto, según la noticia?", options: ["De um embargo: mercadores ingleses proibidos de comprar vinho francês encontraram um vinho no vale que aguentava a viagem, com aguardente", "De uma ordem real", "De um concurso", "De uma moda"], answer: 0, why: "«Mercadores ingleses, proibidos de comprar vinho francês, procuraram alternativas… e encontraram, num vale agreste, um vinho que aguentava a viagem… desde que se lhe acrescentasse aguardente.»" },
      { q: "¿Qué son los terraços?", options: ["Hotéis no rio", "Escadas gigantes abertas na pedra pelas gerações de camponeses, onde só cabia uma vinha", "Barcos antigos", "Caves de Lisboa"], answer: 1, why: "«Gerações de camponeses abriram, na pedra, escadas gigantes onde só cabia uma vinha.»" },
      { q: "¿Qué casi partió la herencia en el siglo XX?", options: ["A filoxera, o caminho-de-ferro e o despovoamento", "A moda", "A UNESCO", "O clima"], answer: 0, why: "«A filoxera matou as vinhas velhas; o caminho-de-ferro e as estradas tiraram o trabalho ao rio; as encostas despovoaram-se.»" },
      { q: "¿Qué valorizó la moda del «terroir»?", options: ["A produção industrial", "O contrário da produção industrial: o sítio único, a vinha velha, o lagar de pedra", "Os vinhos baratos", "As garrafas grandes"], answer: 1, why: "«A moda dos vinhos “de terroir” valorizou o exacto contrário da produção industrial — o sítio único, a vinha velha, o lagar de pedra.»" },
      { q: "¿Qué resumen hacen los dueños de las quintas?", options: ["«Sem gente no vale, o vinho é só uma paisagem bonita com uma etiqueta.»", "«O vinho vende-se sozinho.»", "«As máquinas fazem tudo.»", "«Não há futuro.»"], answer: 0, why: "«Sem gente no vale, o vinho é só uma paisagem bonita com uma etiqueta.»" },
    ],
    discuss: [
      { it: "«A primeira viagem tinha mais alma»: progresso ou nostalgia? O que faria tu com o rio?", es: "«El primer viaje tenía más alma»: ¿progreso o nostalgia? ¿Qué harías tú con el río?" },
      { it: "Um produto que salvou uma paisagem: conheces outro caso assim no teu país? Qual?", es: "Un producto que salvó un paisaje: ¿conoces otro caso así en tu país? ¿Cuál?" },
    ],
  },

  /* ═══ C2 · 1 — Cultura ═══ */
  {
    id: "pt-news-c2-01", cat: "cultura", level: "C2", place: "Coimbra", minutes: 6,
    title: "A universidade que veste de negro para protestar a cores",
    titleEs: "La universidad que viste de negro para protestar a colores",
    lead: {
      it: "Há uma cidade onde os estudantes desfilam de capa preta, queimam as notas em festas de maio e cantam, à guitarra, despedidas com setecentos anos. A tradição, lá, não é museu: é barricada.",
      es: "Hay una ciudad donde los estudiantes desfilan con capa negra, queman las notas en fiestas de mayo y cantan, a la guitarra, despedidas con setecientos años. La tradición, allí, no es museo: es barricada.",
    },
    paragraphs: [
      { it: "Coimbra ensina desde 1290, o que a torna mais velha que a maioria das fronteiras europeias. A Universidade nasceu em Lisboa, mudou-se para o norte como quem muda de casa para fugir aos credores, e acabou por instalar-se num palácio no alto de uma colina, de onde domina a cidade como um rei cansado domina o seu reino: sem fazer muito, mas sendo impossível de ignorar.",
      es: "Coimbra enseña desde 1290, lo que la hace más vieja que la mayoría de las fronteras europeas. La Universidad nació en Lisboa, se mudó al norte como quien muda de casa para huir de los acreedores, y acabó instalándose en un palacio en lo alto de una colina, desde donde domina la ciudad como un rey cansado domina su reino: sin hacer mucho, pero siendo imposible de ignorar." },
      { it: "O traje académico é a ironia vestida. A capa e a batina pretas foram, durante séculos, uniforme de pobreza estudantil — os filhos de camponeses que subiam a colina com uma vida a cavalo no lombo; os ricos, no rés-do-chão, vestiam de seda. O tempo trocou os papéis: hoje a capa preta é usada com orgulho de classe, e os que a vestem sabem, sem precisar de o dizer, que estão a vestir a miséria dos avós como quem veste uma medalha.",
      es: "El traje académico es la ironía vestida. La capa y la batina negras fueron, durante siglos, uniforme de pobreza estudiantil — los hijos de campesinos que subían la colina con una vida a caballo en el lomo; los ricos, en la planta baja, vestían de seda. El tiempo trocó los papeles: hoy la capa negra se usa con orgullo de clase, y quienes la visten saben, sin necesitar decirlo, que están vistiendo la miseria de los abuelos como quien viste una medalla." },
      { it: "A cidade tem uma liturgia própria, com datas que os forasteiros confundem com folclore. Em maio, os finalistas queimam as fitas — a Queima — num fogo que é, ao mesmo tempo, festa de despedida e exorcismo de notas; ao longo do ano, a guitarra acompanha o fado de Coimbra, que é o primo lisboeta depois de estudar: as mesmas saudades, com mais latim e menos mar.",
      es: "La ciudad tiene una liturgia propia, con fechas que los forasteros confunden con folclore. En mayo, los finalistas queman las cintas — la Queima — en un fuego que es, al mismo tiempo, fiesta de despedida y exorcismo de notas; a lo largo del año, la guitarra acompaña el fado de Coimbra, que es el primo lisboeta después de estudiar: las mismas saudades, con más latín y menos mar." },
      { it: "E, no entanto, o essencial não está nas cerimónias; está numa coisa mais difícil de fotografar. Coimbra mantém, entre cidade e universidade, uma desavença produtiva: a cidade reclama do barulho, a universidade reclama da cidade, e desta fricção de sete séculos sai, todos os anos, alguma coisa nova — uma biblioteca que cresce, um curso que ainda não existe em mais lado nenhum, um costume inventado na terça-feira e tratado como milenar na sexta.",
      es: "Y, sin embargo, lo esencial no está en las ceremonias; está en algo más difícil de fotografiar. Coimbra mantiene, entre ciudad y universidad, una desavenencia productiva: la ciudad se queja del ruido, la universidad se queja de la ciudad, y de esa fricción de siete siglos sale, cada año, algo nuevo — una biblioteca que crece, un curso que todavía no existe en más ningún lugar, una costumbre inventada el martes y tratada como milenaria el viernes." },
      { it: "Um reitor antigo deixou a frase que os cartazes repetem em tempo de exames: «A universidade não guarda o passado. Guarda o direito de o contradizer — e ensina os alunos a exercê-lo.» Em Coimbra, até a tradição é obrigada a passar exame.",
      es: "Un rector antiguo dejó la frase que los carteles repiten en época de exámenes: «La universidad no guarda el pasado. Guarda el derecho de contradecirlo — y enseña a los alumnos a ejercerlo.» En Coimbra, hasta la tradición está obligada a pasar examen." },
    ],
    words: [
      { it: "a batina", es: "la sotana, la batina" },
      { it: "o rés-do-chão", es: "la planta baja" },
      { it: "a Queima (das fitas)", es: "la Queima (quema de cintas)" },
      { it: "o exorcismo", es: "el exorcismo (figurado)" },
      { it: "a desavença", es: "la desavenencia" },
      { it: "a fricção", es: "la fricción, la fricción productiva" },
      { it: "milenar", es: "milenario" },
    ],
    questions: [
      { q: "¿Cómo se instaló la universidad en la colina, según la imagen de la noticia?", options: ["Como um rei que foge de credores, num palácio no alto, dominando a cidade sem fazer muito, mas impossível de ignorar", "Como um hotel de luxo", "Como uma fábrica", "Por ordem da UNESCO"], answer: 0, why: "«Acabou por instalar-se num palácio no alto de uma colina, de onde domina a cidade como um rei cansado domina o seu reino.»" },
      { q: "¿Qué fue el traje académico durante sigculos y qué es hoy?", options: ["Foi uniforme de pobreza estudantil; hoje é usado com orgulho de classe — vestir a miséria dos avós como quem veste uma medalha", "Foi sempre luxo; hoje é luxo", "Foi uniforme militar; hoje é festa", "Foi proibido; hoje é obrigatório"], answer: 0, why: "«A capa e a batina pretas foram, durante séculos, uniforme de pobreza estudantil… hoje a capa preta é usada com orgulho de classe… vestir a miséria dos avós como quem veste uma medalha.»" },
      { q: "¿Qué es el fado de Coimbra, en la metáfora de la noticia?", options: ["O primo lisboeta depois de estudar: as mesmas saudades, com mais latim e menos mar", "Uma cópia do fado de Lisboa", "Ópera alemã", "Música sem palavras"], answer: 0, why: "«O fado de Coimbra, que é o primo lisboeta depois de estudar: as mesmas saudades, com mais latim e menos mar.»" },
      { q: "¿Dónde está «lo esencial» de Coimbra?", options: ["Nas cerimónias", "Na desavença produtiva entre cidade e universidade, de onde sai sempre alguma coisa nova", "Nos cartazes", "No silêncio"], answer: 1, why: "«O essencial não está nas cerimónias; está… numa desavença produtiva: a cidade reclama do barulho, a universidade reclama da cidade, e desta fricção sai alguma coisa nova.»" },
      { q: "¿Qué frase dejó el rector antiguo?", options: ["«A universidade não guarda o passado. Guarda o direito de o contradizer — e ensina os alunos a exercê-lo.»", "«A tradição não se discute.»", "«O exame é a vida.»", "«Coimbra é um museu.»"], answer: 0, why: "«A universidade não guarda o passado. Guarda o direito de o contradizer — e ensina os alunos a exercê-lo. Em Coimbra, até a tradição é obrigada a passar exame.»" },
    ],
    discuss: [
      { it: "«Vestir a miséria dos avós como uma medalha.» Que tradição da tua família funciona assim?", es: "«Vestir la miseria de los abuelos como una medalla.» ¿Qué tradición de tu familia funciona así?" },
      { it: "Tradição que passa exame ou tradição que não se discute: qual das duas sobrevive melhor? E qual merece?", es: "Tradición que pasa examen o tradición que no se discute: ¿cuál de las dos sobrevive mejor? ¿Y cuál merece?" },
    ],
  },

  /* ═══ C2 · 2 — Ciência ═══ */
  {
    id: "pt-news-c2-02", cat: "scienza", level: "C2", place: "Lisboa", minutes: 6,
    title: "O país que olha o mar com bisturi",
    titleEs: "El país que mira el mar con bisturí",
    lead: {
      it: "Portugal tem a extensão de mar de um continente e a população de uma cidade grande. A ciência que aí se faz tem, por isso, uma especialidade invulgar: procurar na vastidão o que é pequeno, preciso e decisivo.",
      es: "Portugal tiene la extensión de mar de un continente y la población de una ciudad grande. La ciencia que allí se hace tiene, por eso, una especialidad inusual: buscar en la vastedad lo que es pequeño, preciso y decisivo.",
    },
    paragraphs: [
      { it: "O mapa mental de um país faz-se por terra firme: fronteiras, capitais, rios. O mapa real de Portugal é quase todo azul. A zona económica exclusiva portuguesa — a fatia de oceano que o direito internacional atribui ao país — seria, se fosse terra, um dos maiores estados da Europa. Os cartógrafos não sabem onde a pôr; os cientistas decidiram onde a estudar: em todo o lado, e ao mesmo tempo.",
      es: "El mapa mental de um país se hace por tierra firme: fronteras, capitales, ríos. El mapa real de Portugal es casi todo azul. La zona económica exclusiva portuguesa — la porción de océano que el derecho internacional asigna al país — sería, si fuera tierra, uno de los mayores estados de Europa. Los cartógrafos no saben dónde ponerla; los científicos decidieron dónde estudiarla: en todas partes, y al mismo tiempo." },
      { it: "A aposta científica do país tem a ver com escala. Um estado pequeno não consegue competir em tudo; consegue, isso sim, ser o melhor do mundo em meia dúzia de coisas impossíveis de fazer sem o mar: a observação dos fundos com robôs que descem onde nenhum mergulhador desce; a prossecução de vulcões submarinos que ainda ninguém cartografou; a contabilidade do carbono que o oceano paga em silêncio por todos nós.",
      es: "La apuesta científica del país tiene que ver con escala. Un estado pequeño no consigue competir en todo; consigue, eso sí, ser el mejor del mundo en media docena de cosas imposibles de hacer sin el mar: la observación de los fondos con robots que bajan donde ningún buzo baja; el seguimiento de volcanes submarinos que nadie ha cartografiado; la contabilidad del carbono que el océano paga en silencio por todos nosotros." },
      { it: "Os resultados têm uma propriedade rara em ciência: são úteis até para quem não percebe nada de ciência. Os modelos de ondas que servem os surfistas servem os portos; os sensores que contam plásticos contam também sardinhas; e o sistema que avisa um tsunami com minutos de antecedência é o mesmo que, anos antes, registou o terramoto no outro lado do mundo, a tremer de propósito, para ver se alguém estava a escutar.",
      es: "Los resultados tienen una propiedad rara en ciencia: son útiles hasta para quien no entiende nada de ciencia. Los modelos de olas que sirven a los surfistas sirven a los puertos; los sensores que cuentan plásticos cuentan también sardinas; y el sistema que avisa de un tsunami con minutos de antelación es el mismo que, años antes, registró el terremoto al otro lado del mundo, temblando a propósito, para ver si alguien estaba escuchando." },
      { it: "A parte poética — e é uma parte científica, porque os dados a sustentam — é o azul como arquivo. O Atlântico guarda, nas suas correntes, a história do clima do planeta: camadas de água fria e de água quente são páginas escritas por séculos de invernos e de verões. Ler esse arquivo é o ofício de uma geração de cientistas portugueses que se descrevem, com ironia, como «arquivistas de uma biblioteca que ninguém pode devolver».",
      es: "La parte poética — y es una parte científica, porque los datos la sustentan — es el azul como archivo. El Atlántico guarda, en sus corrientes, la historia del clima del planeta: capas de agua fría y de agua caliente son páginas escritas por siglos de inviernos y veranos. Leer ese archivo es el oficio de una generación de científicos portugueses que se describen, con ironía, como «archiveros de una biblioteca que nadie puede devolver»." },
      { it: "A frase final saiu de uma investigadora, num congresso, depois de uma tarde de gráficos: «O mar não é de ninguém, e é por isso que é de todos. Nós, os portugueses, não o possuímos. Temos apenas, ainda por alguns anos, o melhor lugar da sala para o ver a mudar.»",
      es: "La frase final salió de una investigadora, en un congreso, después de una tarde de gráficos: «El mar no es de nadie, y es por eso que es de todos. Nosotros, los portugueses, no lo poseemos. Tenemos apenas, todavía por unos años, el mejor lugar de la sala para verlo cambiar.»" },
    ],
    words: [
      { it: "a zona económica exclusiva", es: "la zona económica exclusiva (ZEE)" },
      { it: "o fundo (do mar)", es: "el fondo (del mar)" },
      { it: "cartografar", es: "cartografiar" },
      { it: "a contabilidade do carbono", es: "la contabilidad del carbono" },
      { it: "o arquivo", es: "el archivo" },
      { it: "sustentar", es: "sustentar" },
      { it: "o arquivista", es: "el archivero" },
    ],
    questions: [
      { q: "¿Por qué el mapa real de Portugal es «casi todo azul»?", options: ["Porque chove muito", "Porque a zona económica exclusiva seria, se fosse terra, um dos maiores estados da Europa", "Porque as fronteiras são azuis", "Porque o mapa está errado"], answer: 1, why: "«A zona económica exclusiva portuguesa… seria, se fosse terra, um dos maiores estados da Europa.»" },
      { q: "¿Cuál es la estrategia de un estado pequeño, según la noticia?", options: ["Competir em tudo", "Ser o melhor do mundo em meia dúzia de coisas impossíveis de fazer sem o mar", "Não fazer ciência", "Comprar tecnologia"], answer: 1, why: "«Um estado pequeno não consegue competir em tudo; consegue, isso sim, ser o melhor do mundo em meia dúzia de coisas impossíveis de fazer sem o mar.»" },
      { q: "¿Qué propiedad rara tienen los resultados?", options: ["São secretos", "São úteis até para quem não percebe nada de ciência: modelos de ondas, sensores, aviso de tsunamis", "São caros", "São inúteis"], answer: 1, why: "«Os modelos de ondas que servem os surfistas servem os portos; os sensores que contam plásticos contam também sardinhas; e o sistema que avisa um tsunami…»" },
      { q: "¿Qué guarda el Atlántico, «en sus corrientes»?", options: ["Tesouros afundados, só isso", "A história do clima do planeta: camadas de água fria e quente são páginas escritas por séculos", "Nada", "Peixes apenas"], answer: 1, why: "«O Atlântico guarda, nas suas correntes, a história do clima do planeta: camadas de água fria e de água quente são páginas escritas por séculos de invernos e de verões.»" },
      { q: "¿Cómo se describen los científicos, con ironía?", options: ["«Donos do mar.»", "«Arquivistas de uma biblioteca que ninguém pode devolver.»", "«Pescadores de dados.»", "«Guardiões do azul.»"], answer: 1, why: "«Arquivistas de uma biblioteca que ninguém pode devolver.»" },
      { q: "¿Qué dijo la investigadora al final del congreso?", options: ["«O mar é nosso.»", "«O mar não é de ninguém, e é por isso que é de todos. Temos apenas, ainda por alguns anos, o melhor lugar da sala para o ver a mudar.»", "«A ciência não serve para nada.»", "«O oceano acabou.»"], answer: 1, why: "«Nós, os portugueses, não o possuímos. Temos apenas, ainda por alguns anos, o melhor lugar da sala para o ver a mudar.»" },
    ],
    discuss: [
      { it: "«O melhor lugar da sala para o ver a mudar»: o que é que o teu país vê melhor do que os outros? Porquê?", es: "«El mejor lugar de la sala para verlo cambiar»: ¿qué ve tu país mejor que los demás? ¿Por qué?" },
      { it: "Biblioteca que ninguém pode devolver: metáfora do oceano. Que metáfora usarias tu, em português?", es: "Biblioteca que nadie puede devolver: metáfora del océano. ¿Qué metáfora usarías tú, en portugués?" },
    ],
  },

  /* ═══ C2 · 3 — Economia ═══ */
  {
    id: "pt-news-c2-03", cat: "economia", level: "C2", place: "Lisboa", minutes: 6,
    title: "O bacalhau: um império que se salgou a si mesmo",
    titleEs: "El bacalao: un imperio que se saló a sí mismo",
    lead: {
      it: "Há um peixe que não vive em Portugal e define Portugal. A economia que ele criou cruzou o Atlântico durante quinhentos anos — e o sal que a conservava conserva, hoje, a melhor história de negócios do país.",
      es: "Hay un pez que no vive en Portugal y define a Portugal. La economía que él creó cruzó el Atlántico durante quinientos años — y la sal que la conservaba conserva, hoy, la mejor historia de negocios del país.",
    },
    paragraphs: [
      { it: "O paradoxo é de manual. Um país católico que precisava de peixe para os dias de preceito; um banco de peixe que ficava do outro lado do oceano, nos mares frios da Terra Nova; e uma técnica — o sal — que transformava a perecível carne do mar numa moeda que não apodrecia. Juntou-se tudo, e durante meio milénio, uma frota inteira partiu de Lisboa, da Nazaré e de Setúbal para ir buscar, a quatro mil quilómetros, o jantar de sexta-feira santa.",
      es: "La paradoja es de manual. Un país católico que necesitaba pescado para los días de precepto; un banco de pesca que quedaba al otro lado do océano, en los mares fríos de Terranova; y una técnica — la sal — que transformaba la perecedera carne del mar en una moneda que no se pudría. Se juntó todo, y durante medio milenio, una flota entera salía de Lisboa, de Nazaré y de Setúbal para ir a buscar, a cuatro mil kilómetros, la cena del viernes santo." },
      { it: "A operação era, para a época, uma multinacional com cheiro. Os arrais comandavam navios de madeira pelo mapa do mundo; os sócios de Lisboa financiavam as campanhas com o risco calculado de quem jogava metade do capital no mar; e a indústria da salga criou, em terra, uma classe inteira — as mulheres que abriam, limpalavam e empilhavam o peixe salgado nas casas de salga, com as mãos brancas de sal e as costas curvas de um ofício que não aparece nos retratos oficiais.",
      es: "La operación era, para la época, una multinacional con olor. Los patrones mandaban barcos de madera por el mapa del mundo; los socios de Lisboa financiaban las campañas con el riesgo calculado de quien apostaba la mitad del capital al mar; y la industria de la salazón creó, en tierra, una clase entera — las mujeres que abrían, limpiaban y apilaban el pescado salado en las casas de salazón, con las manos blancas de sal y las espaldas curvas de un oficio que no aparece en los retratos oficiales." },
      { it: "Como todas as economias construídas sobre um só músculo, esta também envelheceu. A frota foi reduzindo; os mares mudaram de dono; e o bacalhau salgado deixou de ser uma necessidade litúrgica para se tornar uma nostalgia gastronómica — coisa que, em economia, nem é mau nem é bom: é apenas outro mercado, com outras margens e outros clientes, que pagam mais por quilograma e exigem menos por tonelada.",
      es: "Como todas las economías construidas sobre un solo músculo, esta también envejeció. La flota fue reduciéndose; los mares cambiaron de dueño; y el bacalao salado dejó de ser una necesidad litúrgica para volverse una nostalgia gastronómica — cosa que, en economía, ni es mala ni es buena: es apenas otro mercado, con otros márgenes y otros clientes, que pagan más por kilogramo y exigen menos por tonelada." },
      { it: "A sobrevivência fez-se por mímese: a indústria portuguesa passou a salgar, em terra, bacalhau pescado por outros — e a vender, com a mesma etiqueta, a memória do império. Os economistas chamam a isto «importação-transformação»; os consumidores chamam-lhe, simplesmente, o prato de Natal, e não querem saber de mapas: querem saber se a cebola está caramelizada e se o azeite é do bom.",
      es: "La supervivencia se hizo por mimesis: la industria portuguesa pasó a salar, en tierra, bacalao pescado por otros — y a vender, con la misma etiqueta, la memoria del imperio. Los economistas llaman a esto «importación-transformación»; los consumidores lo llaman, simplemente, el plato de Navidad, y no quieren saber de mapas: quieren saber si la cebolla está caramelizada y si el aceite es del bueno." },
      { it: "Fica a frase de um velho arrais, num museu do norte, diante de um retrato do seu navio: «O bacalhau deu-nos tudo, menos rico: deu-nos mar. Um país pequeno que passou quinhentos anos a ir buscar o jantar ao outro lado do mundo não é pobre. É só impossível de resumir.»",
      es: "Queda la frase de un viejo patrón, en un museo del norte, frente al retrato de su barco: «El bacalao nos dio todo, menos ricos: nos dio mar. Un país pequeño que pasó quinientos años yendo a buscar la cena al otro lado del mundo no es pobre. Es solo imposible de resumir.»" },
    ],
    words: [
      { it: "o bacalhau", es: "el bacalao" },
      { it: "a salga / salgado", es: "la salazón / salado" },
      { it: "o arrais", es: "el patrón de barco" },
      { it: "o preceito", es: "el precepto (religioso)" },
      { it: "perecível", es: "perecedero" },
      { it: "a nostalgia gastronómica", es: "la nostalgia gastronómica" },
      { it: "a mímese", es: "la mimesis (imitación)" },
    ],
    questions: [
      { q: "¿Cuál es el paradoxo «de manual» del bacalao?", options: ["Um peixe caro vendido barato", "Um país que precisava de peixe para os dias de preceito, um banco de peixe do outro lado do oceano e uma técnica — o sal — que o transformava numa moeda que não apodrecia", "Um peixe que nada até Portugal", "Uma moda moderna"], answer: 1, why: "«Um país católico que precisava de peixe para os dias de preceito; um banco de peixe que ficava do outro lado do oceano… e uma técnica — o sal — que transformava a perecível carne do mar numa moeda que não apodrecia.»" },
      { q: "¿Qué clase creó en tierra la industria de la salazón?", options: ["Os capitães", "As mulheres das casas de salga: abriam, limpavam e empilhavam o peixe, com as mãos brancas de sal e as costas curvas", "Os cozinheiros de Lisboa", "Ninguém"], answer: 1, why: "«A indústria da salga criou, em terra, uma classe inteira — as mulheres… com as mãos brancas de sal e as costas curvas de um ofício que não aparece nos retratos oficiais.»" },
      { q: "¿En qué se convirtió el bacalao salado al envejecer la economía?", options: ["Necessidade litúrgica, como sempre", "Nostalgia gastronómica: outro mercado, com outras margens e outros clientes", "Um produto proibido", "Uma espécie extinta"], answer: 1, why: "«Deixou de ser uma necessidade litúrgica para se tornar uma nostalgia gastronómica — outro mercado, com outras margens e outros clientes, que pagam mais por quilograma e exigem menos por tonelada.»" },
      { q: "¿Cómo sobrevivió la industria?", options: ["Fechou", "Por mímese: passou a salgar, em terra, bacalhau pescado por outros, vendendo com a mesma etiqueta a memória do império", "Vendendo navios", "Com subsídios eternos"], answer: 1, why: "«A sobrevivência fez-se por mímese: a indústria portuguesa passou a salgar, em terra, bacalhau pescado por outros — e a vender, com a mesma etiqueta, a memória do império.»" },
      { q: "¿Qué dijo el viejo arrais en el museo?", options: ["«O bacalhau deu-nos tudo, menos rico: deu-nos mar… Um país pequeno que passou quinhentos anos a ir buscar o jantar ao outro lado do mundo não é pobre. É só impossível de resumir.»", "«Devíamos ter ficado em terra.»", "«O mar não paga.»", "«Os mapas mentem.»"], answer: 0, why: "«Não é pobre. É só impossível de resumir.»" },
    ],
    discuss: [
      { it: "«Não é pobre: é impossível de resumir.» Aplica essa frase a um produto do teu país. Qual escolhes?", es: "«No es pobre: es imposible de resumir.» Aplica esa frase a un producto de tu país. ¿Cuál eliges?" },
      { it: "Ofícios que não aparecem nos retratos oficiais: qual merece um museu? Justifica.", es: "Oficios que no aparecen en los retratos oficiales: ¿cuál merece un museo? Justifica." },
    ],
  },
];
