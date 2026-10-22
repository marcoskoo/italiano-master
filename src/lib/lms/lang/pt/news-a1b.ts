/* ── PT · Notícias A1 · bloco B (v9.39) ────────────────────────────────
   Português europeu (Portugal), nível A1, método VOA Learning English.
   12 notícias novas (pt-news-a1-04 … pt-news-a1-15) que se juntam às 3
   da base (news-a.ts) → 15 notícias de A1. Corpo: 4 parágrafos, 70-95
   palavras, presente do indicativo. Léxico PT de Portugal (autocarro,
   telemóvel, pequeno-almoço…, nunca formas do Brasil). Campos `.it` =
   português (língua de estudo), `.es` = espanhol. */

import type { NewsItem } from "../../news";

export const PT_NEWS_A1B: NewsItem[] = [

  /* ═══ A1 · 4 — Tecnologia (Braga) ═══ */
  {
    id: "pt-news-a1-04", cat: "tecnologia", level: "A1", place: "Braga", minutes: 2,
    title: "Internet grátis no autocarro",
    titleEs: "Internet gratis en el autobús",
    lead: {
      it: "Em Braga, os autocarros da cidade têm uma novidade: internet grátis e tomadas para carregar o telemóvel. Os passageiros aprovam.",
      es: "En Braga, los autobuses de la ciudad tienen una novedad: internet gratis y enchufes para cargar el móvil. Los pasajeros lo aprueban.",
    },
    paragraphs: [
      { it: "Os autocarros de Braga têm internet grátis desde este mês. Agora, os passageiros leem notícias e falam com a família durante a viagem.",
      es: "Los autobuses de Braga tienen internet gratis desde este mes. Ahora, los pasajeros leen noticias y hablan con la familia durante el viaje." },
      { it: "Cada autocarro tem também quatro tomadas para carregar o telemóvel. «É uma grande ajuda», diz João Ferreira, um estudante de vinte anos.",
      es: "Cada autobús tiene también cuatro enchufes para cargar el móvil. «Es una gran ayuda», dice João Ferreira, un estudiante de veinte años." },
      { it: "A câmara municipal paga o serviço. O objetivo é simples: as pessoas usam mais os autocarros e menos o carro. A cidade respira melhor.",
      es: "El ayuntamiento paga el servicio. El objetivo es simple: la gente usa más los autobuses y menos el coche. La ciudad respira mejor." },
      { it: "Os motoristas também estão contentes: o autocarro fica mais silencioso. Agora, todos olham para o ecrã — e ninguém se queixa do trânsito.",
      es: "Los conductores también están contentes: el autobús queda más silencioso. Ahora, todos miran la pantalla — y nadie se queja del tráfico." },
    ],
    words: [
      { it: "o autocarro", es: "el autobús", note: "Portugués de Portugal; no Brasil se dice «ônibus»." },
      { it: "as tomadas", es: "los enchufes" },
      { it: "o telemóvel", es: "el móvil", note: "No Brasil se dice «celular»." },
      { it: "carregar", es: "cargar (la batería)" },
      { it: "os passageiros", es: "los pasajeros" },
      { it: "o trânsito", es: "el tráfico" },
    ],
    questions: [
      { q: "¿Qué tienen los autobuses de Braga desde este mes?", options: ["Ar condicionado novo", "Internet grátis", "Bilhetes grátis", "Cadeiras novas"], answer: 1, why: "El texto dice: «Os autocarros de Braga têm internet grátis desde este mês.»" },
      { q: "¿Para qué sirven las tomas del autobús?", options: ["Para carregar o telemóvel", "Para a luz do teto", "Para o motorista", "Para a música"], answer: 0, why: "«Cada autocarro tem também quatro tomadas para carregar o telemóvel.»" },
      { q: "¿Cuál es el objetivo del ayuntamiento?", options: ["Ganhar dinheiro com a internet", "Vender telemóveis novos", "As pessoas usarem mais os autocarros e menos o carro", "Ter autocarros mais rápidos"], answer: 2, why: "«O objetivo é simples: as pessoas usam mais os autocarros e menos o carro.»" },
      { q: "¿Qué sugiere la última frase sobre los pasajeros?", options: ["Estão zangados com o serviço", "Estão tranquilos, ocupados com o ecrã", "Reclamam muito do trânsito", "Não gostam de internet"], answer: 1, why: "«Agora, todos olham para o ecrã — e ninguém se queixa do trânsito.»" },
    ],
    discuss: [
      { it: "Usas a internet nos transportes públicos? Para quê?", es: "¿Usas internet en el transporte público? ¿Para qué?" },
      { it: "A internet grátis é um direito ou um luxo? O que pensas?", es: "¿El internet gratis es un derecho o un lujo? ¿Qué piensas?" },
    ],
  },

  /* ═══ A1 · 5 — Saúde (Coimbra) ═══ */
  {
    id: "pt-news-a1-05", cat: "salute", level: "A1", place: "Coimbra", minutes: 2,
    title: "O médico manda passear no parque",
    titleEs: "El médico manda pasear en el parque",
    lead: {
      it: "Em Coimbra, os médicos têm uma receita nova, sem comprimidos: um passeio de trinta minutos no parque. Os doentes adoram.",
      es: "En Coimbra, los médicos tienen una receta nueva, sin pastillas: un paseo de treinta minutos en el parque. A los enfermos les encanta.",
    },
    paragraphs: [
      { it: "O centro de saúde de Coimbra tem um projeto novo: receitas sem remédios. Os médicos mandam os doentes passear no parque.",
      es: "El centro de salud de Coimbra tiene un proyecto nuevo: recetas sin medicamentos. Los médicos mandan a los enfermos pasear por el parque." },
      { it: "O passeio dura trinta minutos, todos os dias. Os grupos caminham devagar junto ao rio Mondego. Falam de plantas, de família e de futebol.",
      es: "El paseo dura treinta minutos, todos los días. Los grupos caminan despacio junto al río Mondego. Hablan de plantas, de familia y de fútbol." },
      { it: "«Caminhar faz bem ao coração e à cabeça», explica a doutora Ana Silva. «E o parque é grátis.» Os pacientes gostam da ideia.",
      es: "«Caminar hace bien al corazón y a la cabeza», explica la doctora Ana Silva. «Y el parque es gratis». A los pacientes les gusta la idea." },
      { it: "Depois de três meses, os resultados são bons: as pessoas dormem melhor e sorriem mais. Agora, outros centros querem copiar o projeto.",
      es: "Después de tres meses, los resultados son buenos: la gente duerme mejor y sonríe más. Ahora, otros centros quieren copiar el proyecto." },
    ],
    words: [
      { it: "os remédios", es: "los medicamentos" },
      { it: "passear", es: "pasear" },
      { it: "os doentes", es: "los enfermos, los pacientes" },
      { it: "o coração", es: "el corazón" },
      { it: "caminhar", es: "caminar", note: "«Caminhar» es caminar; «passear» es pasear por placer." },
      { it: "o parque", es: "el parque" },
    ],
    questions: [
      { q: "¿Qué mandan los médicos a los enfermos?", options: ["Tomar comprimidos novos", "Passear no parque", "Ficar na cama", "Correr uma hora"], answer: 1, why: "«Os médicos mandam os doentes passear no parque.»" },
      { q: "¿Cuánto dura el paseo?", options: ["Trinta minutos, todos os dias", "Duas horas", "Uma vez por mês", "Dez minutos"], answer: 0, why: "«O passeio dura trinta minutos, todos os dias.»" },
      { q: "Según la doctora, ¿por qué funciona la receta?", options: ["Porque custa dinheiro", "Porque caminhar faz bem ao coração e à cabeça", "Porque os médicos vão também", "Porque é rápida"], answer: 1, why: "«Caminhar faz bem ao coração e à cabeça», dice la doctora Ana Silva." },
      { q: "¿Qué muestran los resultados después de tres meses?", options: ["O projeto é caro", "O projeto não funciona", "A vida das pessoas melhora: dormem e sorriem mais", "O parque fecha à noite"], answer: 2, why: "Los resultados son buenos: «as pessoas dormem melhor e sorriem mais»." },
    ],
    discuss: [
      { it: "Caminhas todos os dias? Onde gostas mais de caminhar?", es: "¿Caminas todos los días? ¿Dónde te gusta más caminar?" },
      { it: "O que é melhor para a saúde: remédios ou hábitos saudáveis? Porquê?", es: "¿Qué es mejor para la salud: medicamentos o hábitos saludables? ¿Por qué?" },
    ],
  },

  /* ═══ A1 · 6 — Cultura (Guimarães) ═══ */
  {
    id: "pt-news-a1-06", cat: "cultura", level: "A1", place: "Guimarães", minutes: 2,
    title: "O castelo onde nasce Portugal",
    titleEs: "El castillo donde nace Portugal",
    lead: {
      it: "Em Guimarães há um castelo pequeno com uma história enorme: os livros de escola dizem que Portugal nasce ali, há quase mil anos.",
      es: "En Guimarães hay un castillo pequeño con una historia enorme: los libros de escuela dicen que Portugal nace allí, hace casi mil años.",
    },
    paragraphs: [
      { it: "O castelo fica no alto de uma colina verde. É pequeno, com oito torres. Mas os livros de escola dizem: Portugal nasce aqui.",
      es: "El castillo está en lo alto de una colina verde. Es pequeño, con ocho torres. Pero los libros de escuela dicen: Portugal nace aquí." },
      { it: "A lenda conta a história de D. Afonso Henriques, o primeiro rei do país. Os guias mostram a torre onde, talvez, ele nasce.",
      es: "La leyenda cuenta la historia de D. Afonso Henriques, el primer rey del país. Los guías muestran la torre donde, tal vez, él nace." },
      { it: "«Isto é o berço de Portugal», diz Joana Costa, guia do castelo. Nas ruas, o apelido aparece em todo o lado.",
      es: "«Esto es la cuna de Portugal», dice Joana Costa, guía del castillo. En las calles, el apodo aparece en todas partes." },
      { it: "O castelo recebe milhares de visitantes todos os anos. Em junho, a festa da cidade enche as ruas de música. A história continua viva.",
      es: "El castillo recibe miles de visitantes todos los años. En junio, la fiesta de la ciudad llena las calles de música. La historia sigue viva." },
    ],
    words: [
      { it: "o castelo", es: "el castillo" },
      { it: "a torre", es: "la torre" },
      { it: "o rei", es: "el rey" },
      { it: "o berço", es: "la cuna" },
      { it: "a lenda", es: "la leyenda" },
      { it: "a festa", es: "la fiesta" },
    ],
    questions: [
      { q: "¿Qué dicen los libros de escuela sobre el castillo?", options: ["É a casa do presidente", "Portugal nasce ali", "É o maior castelo da Europa", "É moderno"], answer: 1, why: "El texto dice: «os livros de escola dizem: Portugal nasce aqui»." },
      { q: "¿Quién es D. Afonso Henriques?", options: ["O primeiro rei do país", "Um guia do castelo", "Um turista famoso", "O presidente da câmara"], answer: 0, why: "«A lenda conta a história de D. Afonso Henriques, o primeiro rei do país.»" },
      { q: "¿Por qué aparece el apodo en todas partes de la ciudad?", options: ["Porque a cidade tem orgulho da sua história", "Porque é obrigatório por lei", "Porque dá sorte", "Porque é um jogo popular"], answer: 0, why: "«Isto é o berço de Portugal», diz Joana Costa, guia do castelo." },
      { q: "¿Qué significa «a história continua viva»?", options: ["Ainda há pessoas a morar no castelo", "Os livros de escola estão errados", "A cidade celebra e cuida a sua história", "A festa de junho é aborrecida"], answer: 2, why: "«Em junho, a festa da cidade enche as ruas de música.»" },
    ],
    discuss: [
      { it: "Há um monumento importante na tua cidade? Qual?", es: "¿Hay un monumento importante en tu ciudad? ¿Cuál?" },
      { it: "As lendas ajudam a aprender história ou confundem? O que pensas?", es: "¿Las leyendas ayudan a aprender historia o confunden? ¿Qué piensas?" },
    ],
  },

  /* ═══ A1 · 7 — História (Évora) ═══ */
  {
    id: "pt-news-a1-07", cat: "storia", level: "A1", place: "Évora", minutes: 2,
    title: "Duas mil anos no centro de Évora",
    titleEs: "Dos mil años en el centro de Évora",
    lead: {
      it: "No centro de Évora, entre casas brancas e lojas, está um templo romano com duas mil anos. Os moradores passam por ele todos os dias.",
      es: "En el centro de Évora, entre casas blancas y tiendas, está un templo romano de dos mil años. Los vecinos pasan junto a él todos los días.",
    },
    paragraphs: [
      { it: "O templo romano de Évora tem catorze colunas de mármore e duas mil anos. Está no meio da cidade, entre cafés e lojas de sapatos.",
      es: "El templo romano de Évora tiene catorce columnas de mármol y dos mil años. Está en medio de la ciudad, entre cafés y zapaterías." },
      { it: "Évora é uma cidade-museu. Tem muralhas antigas, ruas estreitas e uma catedral grande. Tudo fica junto, no mesmo lugar.",
      es: "Évora es una ciudad-museo. Tiene murallas antiguas, calles estrechas y una catedral grande. Todo queda junto, en el mismo lugar." },
      { it: "Os turistas passam o dia a fotografar. «As pedras contam histórias», diz Maria Costa, professora de história. «É impressionante.»",
      es: "Los turistas pasan el día fotografiando. «Las piedras cuentan historias», dice Maria Costa, profesora de historia. «Es impresionante.»" },
      { it: "A cidade é património mundial. À noite, as colunas ficam iluminadas — e Évora continua um pouquinho romana.",
      es: "La ciudad es patrimonio mundial. Por la noche, las columnas quedan iluminadas — y Évora sigue siendo un poquito romana." },
    ],
    words: [
      { it: "as colunas", es: "las columnas" },
      { it: "o mármore", es: "el mármol" },
      { it: "as muralhas", es: "las murallas" },
      { it: "a catedral", es: "la catedral" },
      { it: "as pedras", es: "las piedras" },
      { it: "o património", es: "el patrimonio", note: "En Portugal se escribe «património», con circunflejo." },
    ],
    questions: [
      { q: "¿Cuántas columnas tiene el templo romano?", options: ["Doze", "Catorze", "Vinte", "Seis"], answer: 1, why: "«O templo romano de Évora tem catorze colunas de mármore e duas mil anos.»" },
      { q: "¿Qué más tiene Évora, además del templo?", options: ["Muralhas antigas, ruas estreitas e uma catedral", "Praias e portos", "Um estádio novo", "Fábricas modernas"], answer: 0, why: "«Tem muralhas antigas, ruas estreitas e uma catedral grande.»" },
      { q: "¿Por qué se llama a Évora «cidade-museu»?", options: ["Porque a entrada é paga", "Porque a história está por toda a cidade", "Porque não há carros", "Porque os museus são grátis"], answer: 1, why: "«Tudo fica junto, no mesmo lugar.»" },
      { q: "¿Qué quiere decir la profesora con «as pedras contam histórias»?", options: ["As pedras falam mesmo", "Os monumentos guardam a memória do passado", "A cidade precisa de obras", "As pedras têm letras"], answer: 1, why: "«As pedras contam histórias», diz Maria Costa, professora de história." },
    ],
    discuss: [
      { it: "Preferes cidades antigas ou modernas? Porquê?", es: "¿Prefieres ciudades antiguas o modernas? ¿Por qué?" },
      { it: "Há ruínas romanas no teu país? Conheces alguma?", es: "¿Hay ruinas romanas en tu país? ¿Conoces alguna?" },
    ],
  },

  /* ═══ A1 · 8 — Economia (Faro) ═══ */
  {
    id: "pt-news-a1-08", cat: "economia", level: "A1", place: "Faro", minutes: 2,
    title: "As ostras da Ria Formosa",
    titleEs: "Las ostras de la Ría Formosa",
    lead: {
      it: "Na Ria Formosa, perto de Faro, os produtores cultivam ostras pequenas e saborosas. Metade viaja para França e Espanha — e o negócio cresce.",
      es: "En la Ría Formosa, cerca de Faro, los productores cultivan ostras pequeñas y sabrosas. La mitad viaja a Francia y España — y el negocio crece.",
    },
    paragraphs: [
      { it: "A Ria Formosa é uma zona de água limpa e calma, entre a terra e o mar. É perfeita para as ostras.",
      es: "La Ría Formosa es una zona de agua limpia y tranquila, entre la tierra y el mar. Es perfecta para las ostras." },
      { it: "Os produtores põem as ostras pequenas em redes, presas a paus de madeira. Dois anos depois, as ostras estão prontas.",
      es: "Los productores ponen las ostras pequeñas en redes, atadas a postes de madera. Dos años después, las ostras están listas." },
      { it: "Uma dúzia custa nove euros no mercado. Em França e em Espanha, o preço é maior. Por isso, metade da produção viaja para fora do país.",
      es: "Una docena cuesta nueve euros en el mercado. En Francia y en España, el precio es mayor. Por eso, la mitad de la producción viaja al extranjero." },
      { it: "«A água é a nossa fábrica», diz António Costa, um produtor. Este ano, a Ria Formosa vende mais ostras do que nunca.",
      es: "«El agua es nuestra fábrica», dice António Costa, un productor. Este año, la Ría Formosa vende más ostras que nunca." },
    ],
    words: [
      { it: "as ostras", es: "las ostras" },
      { it: "as redes", es: "las redes" },
      { it: "a dúzia", es: "la docena" },
      { it: "o preço", es: "el precio" },
      { it: "a produção", es: "la producción" },
      { it: "o produtor", es: "el productor" },
    ],
    questions: [
      { q: "¿Por qué la Ría Formosa es perfecta para las ostras?", options: ["Porque a água é limpa e calma", "Porque é muito funda", "Porque é muito fria", "Porque há muitos turistas"], answer: 0, why: "«A Ria Formosa é uma zona de água limpa e calma» y «É perfeita para as ostras»." },
      { q: "¿Cuánto tiempo necesitan las ostras para estar listas?", options: ["Seis meses", "Um ano", "Dois anos", "Cinco anos"], answer: 2, why: "«Dois anos depois, as ostras estão prontas.»" },
      { q: "¿Por qué viaja la mitad de la producción al extranjero?", options: ["Porque lá o preço é maior", "Porque ninguém gosta de ostras", "Porque as ostras são pequenas", "Porque o transporte é grátis"], answer: 0, why: "«Em França e em Espanha, o preço é maior.»" },
      { q: "¿Qué significa «a água é a nossa fábrica»?", options: ["A água está suja", "O mar limpo é a base do negócio", "A fábrica fica em França", "As ostras vivem numa fábrica"], answer: 1, why: "«A água é a nossa fábrica», diz António Costa, um produtor." },
    ],
    discuss: [
      { it: "Gostas de marisco? O que gostas mais?", es: "¿Te gusta el marisco? ¿Qué es lo que más te gusta?" },
      { it: "O mar dá trabalho à tua região? Dá um exemplo.", es: "¿El mar da trabajo a tu región? Da un ejemplo." },
    ],
  },

  /* ═══ A1 · 9 — Desporto (Leiria) ═══ */
  {
    id: "pt-news-a1-09", cat: "sport", level: "A1", place: "Leiria", minutes: 2,
    title: "O futebol dos avós",
    titleEs: "El fútbol de los abuelos",
    lead: {
      it: "Em Leiria, um grupo de reformados joga futebol com uma regra especial: é proibido correr. O «futebol caminhado» já tem fãs de todas as idades.",
      es: "En Leiria, un grupo de jubilados juega al fútbol con una regla especial: está prohibido correr. El «fútbol caminado» ya tiene fans de todas las edades.",
    },
    paragraphs: [
      { it: "Todas as terças-feiras de manhã, um campo de Leiria enche-se de avós. Jogam futebol com uma regra especial: é proibido correr.",
      es: "Todos los martes por la mañana, un campo de Leiria se llena de abuelos. Juegan al fútbol con una regla especial: está prohibido correr." },
      { it: "O jogo é devagar, mas a competição é a sério. Há equipas, árbitro e uma tabela de pontos. Os netos vêm ver e torcem muito.",
      es: "El juego es lento, pero la competición va en serio. Hay equipos, árbitro y una tabla de posiciones. Los nietos vienen a ver y animan mucho." },
      { it: "«Aqui ninguém se magoa. O importante é a alegria», diz o treinador, Sr. Ferreira, setenta anos. «Ganhar é bom; rir é melhor.»",
      es: "«Aquí nadie se lastima. Lo importante es la alegría», dice el entrenador, Sr. Ferreira, setenta años. «Ganar es bueno; reír es mejor.»" },
      { it: "Os médicos apoiam a ideia: o desporto faz bem ao coração e aos amigos. O grupo quer crescer e já pensa num campeonato nacional.",
      es: "Los médicos apoyan la idea: el deporte hace bien al corazón y a los amigos. El grupo quiere crecer y ya piensa en un campeonato nacional." },
    ],
    words: [
      { it: "os avós", es: "los abuelos", note: "«Avô» = abuelo; «avó» = abuela: el acento cambia el significado." },
      { it: "o campo", es: "el campo (deportivo)" },
      { it: "a regra", es: "la regla" },
      { it: "o árbitro", es: "el árbitro" },
      { it: "os netos", es: "los nietos" },
      { it: "o desporto", es: "el deporte", note: "Portugués de Portugal; no Brasil se dice «esporte»." },
    ],
    questions: [
      { q: "¿Cuál es la regla especial de este fútbol?", options: ["É proibido correr", "É proibido marcar golos", "Só jogam mulheres", "O jogo dura cinco minutos"], answer: 0, why: "«Jogam futebol com uma regra especial: é proibido correr.»" },
      { q: "¿Quién es el Sr. Ferreira?", options: ["Um médico", "O treinador da equipa", "Um neto", "O presidente da câmara"], answer: 1, why: "«O importante é a alegria», diz o treinador, Sr. Ferreira, setenta anos." },
      { q: "¿Por qué apoyan los médicos la idea?", options: ["Porque é barato", "Porque o desporto faz bem ao coração e aos amigos", "Porque os avós são lentos", "Porque o campo está vazio"], answer: 1, why: "El texto lo resume: «o desporto faz bem ao coração e aos amigos»." },
      { q: "¿Qué muestra el plan de un campeonato nacional?", options: ["Que o projeto está a crescer", "Que o projeto acaba este ano", "Que ninguém gosta do jogo", "Que jogar é obrigatório"], answer: 0, why: "«O grupo quer crescer e já pensa num campeonato nacional.»" },
    ],
    discuss: [
      { it: "Os teus avós fazem desporto? Qual?", es: "¿Tus abuelos hacen deporte? ¿Cuál?" },
      { it: "Competir é bom em todas as idades? Porquê?", es: "¿Competir es bueno a todas las edades? ¿Por qué?" },
    ],
  },

  /* ═══ A1 · 10 — Ambiente (Figueira da Foz) ═══ */
  {
    id: "pt-news-a1-10", cat: "ambiente", level: "A1", place: "Figueira da Foz", minutes: 2,
    title: "Uma manhã a limpar a praia",
    titleEs: "Una mañana limpiando la playa",
    lead: {
      it: "Na Figueira da Foz, cento e cinquenta voluntários levantam-se de madrugada com um objetivo: deixar a praia sem plástico antes do almoço.",
      es: "En Figueira da Foz, ciento cincuenta voluntarios se levantan de madrugada con un objetivo: dejar la playa sin plástico antes del almuerzo.",
    },
    paragraphs: [
      { it: "Sábado, sete da manhã. A praia da Figueira da Foz está fria e vazia. Os voluntários recebem luvas e sacos de lixo. Trabalham duas horas.",
      es: "Sábado, siete de la mañana. La playa de Figueira da Foz está fría y vacía. Los voluntarios reciben guantes y bolsas de basura. Trabajan dos horas." },
      { it: "O que encontram? Garrafas de plástico, tampas, cigarros e um sapato velho. Um grupo de crianças encontra uma rede de pesca enorme.",
      es: "¿Qué encuentran? Botellas de plástico, tapas, cigarros y un zapato viejo. Un grupo de niños encuentra una red de pesca enorme." },
      { it: "No fim, pesam o lixo: cento e vinte quilos. «O mar agradece», brinca a bióloga Marta Silva. «Mas o melhor é a prevenção.»",
      es: "Al final, pesan la basura: ciento veinte kilos. «El mar lo agradece», bromea la bióloga Marta Silva. «Pero lo mejor es la prevención.»" },
      { it: "A campanha repete-se todos os meses. O objetivo não é só limpar: é ensinar. Menos plástico na rua é menos plástico no mar.",
      es: "La campaña se repite todos los meses. El objetivo no es solo limpiar: es enseñar. Menos plástico en la calle es menos plástico en el mar." },
    ],
    words: [
      { it: "os voluntários", es: "los voluntarios" },
      { it: "o lixo", es: "la basura" },
      { it: "as garrafas", es: "las botellas" },
      { it: "as luvas", es: "los guantes" },
      { it: "o plástico", es: "el plástico" },
      { it: "a rede de pesca", es: "la red de pesca" },
    ],
    questions: [
      { q: "¿A qué hora empiezan los voluntarios?", options: ["Ao meio-dia", "Às sete da manhã", "À noite", "Às dez horas"], answer: 1, why: "«Sábado, sete da manhã. A praia da Figueira da Foz está fria e vazia.»" },
      { q: "¿Qué encuentran los niños?", options: ["Um sapato velho", "Uma rede de pesca enorme", "Uma garrafa pequena", "Uma bicicleta"], answer: 1, why: "«Um grupo de crianças encontra uma rede de pesca enorme.»" },
      { q: "¿Para qué pesan la basura al final?", options: ["Para saber a quantidade e perceber o problema", "Para vender o lixo", "Para brincar com as crianças", "Porque a lei manda"], answer: 0, why: "«No fim, pesam o lixo: cento e vinte quilos.»" },
      { q: "¿Qué enseña la frase final del texto?", options: ["A praia está sempre suja", "A poluição começa na rua e chega ao mar", "O plástico desaparece sozinho", "Só os voluntários podem limpar"], answer: 1, why: "«Menos plástico na rua é menos plástico no mar.»" },
    ],
    discuss: [
      { it: "Fazes algo pelo ambiente? O quê?", es: "¿Haces algo por el medio ambiente? ¿Qué?" },
      { it: "Praias limpas: responsabilidade de quem — dos turistas, dos moradores ou do Estado?", es: "Playas limpias: ¿responsabilidad de quién — de los turistas, de los vecinos o del Estado?" },
    ],
  },

  /* ═══ A1 · 11 — Saúde (Porto) ═══ */
  {
    id: "pt-news-a1-11", cat: "salute", level: "A1", place: "Porto", minutes: 2,
    title: "As crianças que dormem bem",
    titleEs: "Los niños que duermen bien",
    lead: {
      it: "Um estudo da Universidade do Porto mostra uma coisa simples: as crianças que dormem dez horas prestam mais atenção e têm notas melhores.",
      es: "Un estudio de la Universidad de Oporto muestra algo simple: los niños que duermen diez horas prestan más atención y tienen mejores notas.",
    },
    paragraphs: [
      { it: "Os investigadores da Universidade do Porto seguem quinhentas crianças durante um ano. Um grupo dorme pouco; outro dorme dez horas ou mais.",
      es: "Los investigadores de la Universidad de Oporto siguen a quinientos niños durante un año. Un grupo duerme poco; otro duerme diez horas o más." },
      { it: "O resultado é claro: dormir bem ajuda a aprender. As crianças descansadas prestam mais atenção e têm notas melhores.",
      es: "El resultado es claro: dormir bien ayuda a aprender. Los niños descansados prestan más atención y tienen mejores notas." },
      { it: "O doutor Rui Martins aconselha uma rotina simples: «Jantar leve, sem ecrãs, e sempre à mesma hora. O corpo gosta de horários.»",
      es: "El doctor Rui Martins aconseja una rutina simple: «Cena ligera, sin pantallas, y siempre a la misma hora. Al cuerpo le gustan los horarios.»" },
      { it: "Os pais têm razão, afinal: ir para a cama cedo faz bem. Agora, os investigadores querem repetir o estudo com adolescentes.",
      es: "Los padres tienen razón, al fin y al cabo: irse a la cama temprano hace bien. Ahora, los investigadores quieren repetir el estudio con adolescentes." },
    ],
    words: [
      { it: "as crianças", es: "los niños" },
      { it: "dormir", es: "dormir" },
      { it: "a atenção", es: "la atención" },
      { it: "as notas", es: "las notas (escolares)" },
      { it: "os pais", es: "los padres" },
      { it: "a cama", es: "la cama" },
    ],
    questions: [
      { q: "¿A quiénes siguieron los investigadores durante un año?", options: ["Quinhentas crianças", "Cem adolescentes", "Mil pais", "Vinte professores"], answer: 0, why: "«Os investigadores da Universidade do Porto seguem quinhentas crianças durante um ano.»" },
      { q: "¿Qué aconseja el doctor Rui Martins?", options: ["Jantar pesado e televisão", "Jantar leve, sem ecrãs, sempre à mesma hora", "Dormir tarde aos fins de semana", "Estudar de noite"], answer: 1, why: "«Jantar leve, sem ecrãs, e sempre à mesma hora.»" },
      { q: "¿Qué consiguen los niños que duermen bien?", options: ["Nada de especial", "Prestam mais atenção e têm notas melhores", "Ficam cansadas à tarde", "Brigam menos em casa"], answer: 1, why: "«As crianças descansadas prestam mais atenção e têm notas melhores.»" },
      { q: "¿Qué sugiere la frase «os pais têm razão, afinal»?", options: ["Os pais gostam de dar ordens", "O conselho antigo tem agora apoio científico", "Os investigadores são pais", "As crianças mentem sempre"], answer: 1, why: "Como dice el texto: «ir para a cama cedo faz bem»." },
    ],
    discuss: [
      { it: "Dormes bem? Quantas horas precisas?", es: "¿Duermes bien? ¿Cuántas horas necesitas?" },
      { it: "Ecrãs antes de dormir: sim ou não? Porquê?", es: "¿Pantallas antes de dormir: sí o no? ¿Por qué?" },
    ],
  },

  /* ═══ A1 · 12 — Cultura (Lisboa) ═══ */
  {
    id: "pt-news-a1-12", cat: "cultura", level: "A1", place: "Lisboa", minutes: 2,
    title: "O fado canta em Lisboa",
    titleEs: "El fado canta en Lisboa",
    lead: {
      it: "Nas ruas estreitas de Alfama, em Lisboa, ouve-se uma guitarra e uma voz triste e bonita. É o fado, a canção da alma portuguesa.",
      es: "En las calles estrechas de Alfama, en Lisboa, se oye una guitarra y una voz triste y bonita. Es el fado, la canción del alma portuguesa.",
    },
    paragraphs: [
      { it: "O fado nasce nas ruas de Lisboa, há mais de duzentos anos. Os marinheiros cantam a saudade das mulheres e do mar.",
      es: "El fado nace en las calles de Lisboa, hace más de doscientos años. Los marineros cantan la saudade de las mujeres y del mar." },
      { it: "Numa casa de fado, a regra é simples: silêncio. A luz é baixa, a guitarra toca devagar. Quando a voz começa, ninguém fala — só se ouve.",
      es: "En una casa de fado, la regla es simple: silencio. La luz es baja, la guitarra toca despacio. Cuando empieza la voz, nadie habla — solo se escucha." },
      { it: "«O fado é sentimento», explica Carolina Costa, uma fadista jovem. «Cantamos a vida: o amor, a perda e a esperança.»",
      es: "«El fado es sentimiento», explica Carolina Costa, una fadista joven. «Cantamos la vida: el amor, la pérdida y la esperanza.»" },
      { it: "Hoje, o fado é património mundial e as escolas têm alunos novos. A voz continua triste — e continua bonita.",
      es: "Hoy, el fado es patrimonio mundial y las escuelas tienen alumnos nuevos. La voz sigue triste — y sigue bonita." },
    ],
    words: [
      { it: "o fado", es: "el fado" },
      { it: "a guitarra", es: "la guitarra", note: "La «guitarra portuguesa» tiene doce cuerdas." },
      { it: "a saudade", es: "la saudade", note: "Sin traducción exacta: nostalgia dulce, añoranza." },
      { it: "os marinheiros", es: "los marineros" },
      { it: "o silêncio", es: "el silencio" },
      { it: "a voz", es: "la voz" },
    ],
    questions: [
      { q: "¿Dónde nace el fado?", options: ["No Porto", "Nas ruas de Lisboa", "Em Coimbra", "No Algarve"], answer: 1, why: "«O fado nasce nas ruas de Lisboa, há mais de duzentos anos.»" },
      { q: "¿Cuál es la regla en una casa de fado?", options: ["Falar alto", "Cantar todos juntos", "Silêncio", "Dançar"], answer: 2, why: "«Numa casa de fado, a regra é simples: silêncio.»" },
      { q: "¿Por qué el fado es una música triste?", options: ["Porque ninguém gosta dele", "Porque canta a saudade: o amor e a perda", "Porque os cantores estão doentes", "Porque a guitarra é velha"], answer: 1, why: "«Cantamos a vida: o amor, a perda e a esperança.»" },
      { q: "¿Qué significa que el fado sea hoy patrimonio mundial?", options: ["Que está em perigo", "Que o mundo reconhece o seu valor cultural", "Que é um desporto nacional", "Que só se canta em Portugal"], answer: 1, why: "«Hoje, o fado é património mundial e as escolas têm alunos novos.»" },
    ],
    discuss: [
      { it: "Há uma música típica no teu país? Qual?", es: "¿Hay una música típica en tu país? ¿Cuál?" },
      { it: "Tens saudade de alguma coisa ou de alguém? De quê?", es: "¿Tienes saudade de algo o de alguien? ¿De qué?" },
    ],
  },

  /* ═══ A1 · 13 — História (Tomar) ═══ */
  {
    id: "pt-news-a1-13", cat: "storia", level: "A1", place: "Tomar", minutes: 2,
    title: "O castelo dos templários",
    titleEs: "El castillo de los templarios",
    lead: {
      it: "No alto de uma colina em Tomar está um castelo com oitocentos e cinquenta anos. Os seus donos antigos são lendários: os cavaleiros templários.",
      es: "En lo alto de una colina en Tomar está un castillo de ochocientos cincuenta años. Sus antiguos dueños son legendarios: los caballeros templarios.",
    },
    paragraphs: [
      { it: "Os templários são cavaleiros-monges: protegem peregrinos e tesouros. Em Tomar, constroem um castelo enorme com uma igreja redonda no centro.",
      es: "Los templarios son caballeros-monjes: protegen peregrinos y tesoros. En Tomar, construyen un castillo enorme con una iglesia redonda en el centro." },
      { it: "A janela mais famosa chama-se janela do capítulo. É cheia de pedras esculpidas com cordas, raízes e corais do mar.",
      es: "La ventana más famosa se llama ventana del capítulo. Está llena de piedras esculpidas con cuerdas, raíces y corales del mar." },
      { it: "Os guias contam histórias de tesouros escondidos. «Ninguém encontra nada», diz Ricardo Ferreira, um guia jovem. «Mas todos continuam a procurar.»",
      es: "Los guías cuentan historias de tesoros escondidos. «Nadie encuentra nada», dice Ricardo Ferreira, un guía joven. «Pero todos siguen buscando.»" },
      { it: "O castelo é património mundial desde 1983 e recebe milhares de visitantes por ano. No verão, as encenações históricas levam os turistas ao tempo dos templários.",
      es: "El castillo es patrimonio mundial desde 1983 y recibe miles de visitantes al año. En verano, las recreaciones históricas llevan a los turistas al tiempo de los templarios." },
    ],
    words: [
      { it: "os cavaleiros", es: "los caballeros" },
      { it: "a janela", es: "la ventana" },
      { it: "os tesouros", es: "los tesoros" },
      { it: "o guia", es: "el guía" },
      { it: "a igreja", es: "la iglesia" },
      { it: "os visitantes", es: "los visitantes" },
    ],
    questions: [
      { q: "¿Quiénes son los templarios?", options: ["Soldados do exército moderno", "Cavaleiros-monges que protegem peregrinos e tesouros", "Reis de Portugal", "Pescadores do rio"], answer: 1, why: "«Os templários são cavaleiros-monges: protegem peregrinos e tesouros.»" },
      { q: "¿Cómo se llama la ventana famosa del castillo?", options: ["Janela do mar", "Janela do capítulo", "Janela do rei", "Janela redonda"], answer: 1, why: "«A janela mais famosa chama-se janela do capítulo.»" },
      { q: "¿Por qué la gente sigue buscando tesoros en el castillo?", options: ["Porque os guias contam histórias de tesouros escondidos", "Porque há mapas novos", "Porque é fácil encontrar", "Porque o castelo vende pás"], answer: 0, why: "«Os guias contam histórias de tesouros escondidos.»" },
      { q: "¿Qué aportan las recreaciones históricas del verano?", options: ["Dinheiro aos cavaleiros", "Fazem os visitantes viver o passado", "São aulas de dança antiga", "Protegem o castelo da chuva"], answer: 1, why: "El texto explica: «as encenações históricas levam os turistas ao tempo dos templários»." },
    ],
    discuss: [
      { it: "Gostas de histórias de tesouros escondidos? Porquê?", es: "¿Te gustan las historias de tesoros escondidos? ¿Por qué?" },
      { it: "Como é o castelo ideal para ti? Descreve-o.", es: "¿Cómo es el castillo ideal para ti? Descríbelo." },
    ],
  },

  /* ═══ A1 · 14 — Sociedade (Beja) ═══ */
  {
    id: "pt-news-a1-14", cat: "societa", level: "A1", place: "Beja", minutes: 2,
    title: "A biblioteca que viaja",
    titleEs: "La biblioteca que viaja",
    lead: {
      it: "No Alentejo, algumas aldeias não têm livraria nem biblioteca. A solução chega de autocarro: o bibliomóvel, uma biblioteca com rodas.",
      es: "En el Alentejo, algunos pueblos no tienen librería ni biblioteca. La solución llega en autobús: el bibliomóvil, una biblioteca con ruedas.",
    },
    paragraphs: [
      { it: "O bibliomóvel é um autocarro transformado em biblioteca. Dentro, há estantes com três mil livros: romances, livros de receitas e livros para crianças.",
      es: "El bibliomóvil es un autobús transformado en biblioteca. Dentro hay estanterías con tres mil libros: novelas, libros de recetas y libros para niños." },
      { it: "Todas as semanas, o autocarro visita vinte aldeias do Alentejo. Para os moradores mais velhos, é também uma visita de amizade.",
      es: "Todas las semanas, el autobús visita veinte pueblos del Alentejo. Para los vecinos mayores, es también una visita de amistad." },
      { it: "«Leio um livro por semana», diz Dona Rosa, setenta e dois anos. «Espero pelo autocarro como quem espera um amigo.»",
      es: "«Leo un libro por semana», dice Dona Rosa, setenta y dos años. «Espero el autobús como quien espera a un amigo.»" },
      { it: "O motorista empresta os livros com um caderno e um lápis — o computador avaria com o calor. «O simples funciona melhor», diz ele.",
      es: "El conductor presta los libros con un cuaderno y un lápiz — el ordenador se avería con el calor. «Lo simple funciona mejor», dice él." },
    ],
    words: [
      { it: "o bibliomóvel", es: "el bibliomóvil" },
      { it: "o autocarro", es: "el autobús" },
      { it: "as aldeias", es: "los pueblos" },
      { it: "os moradores", es: "los vecinos, los habitantes" },
      { it: "os livros", es: "los libros" },
      { it: "o caderno", es: "el cuaderno" },
    ],
    questions: [
      { q: "¿Qué es el bibliomóvel?", options: ["Uma livraria nova", "Um autocarro transformado em biblioteca", "Um cinema portátil", "Uma escola de música"], answer: 1, why: "«O bibliomóvel é um autocarro transformado em biblioteca.»" },
      { q: "¿Cuántas aldeias visita cada semana?", options: ["Cinco", "Dez", "Vinte", "Cem"], answer: 2, why: "«Todas as semanas, o autocarro visita vinte aldeias do Alentejo.»" },
      { q: "¿Por qué el autobús es como un amigo para Dona Rosa?", options: ["Porque traz livros e companhia todas as semanas", "Porque é rápido e novo", "Porque dorme nele às vezes", "Porque a leva à cidade"], answer: 0, why: "«Espero pelo autocarro como quem espera um amigo.»" },
      { q: "¿Qué enseña el sistema del cuaderno y el lápiz?", options: ["Que a tecnologia é sempre a melhor solução", "Que as soluções simples às vezes funcionam melhor", "Que os livros são caros", "Que o calor é bom para os livros"], answer: 1, why: "El motorista lo resume: «O simples funciona melhor»." },
    ],
    discuss: [
      { it: "Lês muitos livros? Preferes papel ou ecrã?", es: "¿Lees muchos libros? ¿Prefieres papel o pantalla?" },
      { it: "Como levar livros e cultura a quem vive longe das cidades? Dá ideias.", es: "¿Cómo llevar libros y cultura a quienes viven lejos de las ciudades? Da ideas." },
    ],
  },

  /* ═══ A1 · 15 — Ciência (Alqueva) ═══ */
  {
    id: "pt-news-a1-15", cat: "scienza", level: "A1", place: "Alqueva", minutes: 2,
    title: "O céu mais escuro de Portugal",
    titleEs: "El cielo más oscuro de Portugal",
    lead: {
      it: "No Alqueva, no Alentejo, as noites são mesmo escuras. As estrelas brilham tantas que os turistas viajam só para as ver.",
      es: "En Alqueva, en el Alentejo, las noches son de verdad oscuras. Las estrellas brillan tanto que los turistas viajan solo para verlas.",
    },
    paragraphs: [
      { it: "A região do Alqueva tem poucas cidades e poucas luzes. À noite, o céu fica escuro e as estrelas aparecem aos milhares.",
      es: "La región de Alqueva tiene pocas ciudades y pocas luces. Por la noche, el cielo queda oscuro y las estrellas aparecen a miles." },
      { it: "Os astrónomos dizem: aqui vê-se a Via Láctea a olho nu. Em Lisboa ou no Porto é impossível — há demasiada luz.",
      es: "Los astrónomos dicen: aquí se ve la Vía Láctea a simple vista. En Lisboa o en Oporto es imposible — hay demasiada luz." },
      { it: "A região é uma reserva de céu escuro. As aldeias usam candeeiros especiais para não poluir o céu. O objetivo é proteger as estrelas — e os morcegos.",
      es: "La región es una reserva de cielo oscuro. Los pueblos usan farolas especiales para no contaminar el cielo. El objetivo es proteger las estrellas — y los murciélagos." },
      { it: "Os turistas chegam com telescópios e câmaras. «Cada estrela conta uma história. Aqui lemos o livro inteiro», diz Tiago Costa, astrónomo amador.",
      es: "Los turistas llegan con telescopios y cámaras. «Cada estrella cuenta una historia. Aquí leemos el libro entero», dice Tiago Costa, astrónomo aficionado." },
    ],
    words: [
      { it: "as estrelas", es: "las estrellas" },
      { it: "o céu", es: "el cielo" },
      { it: "escuro", es: "oscuro" },
      { it: "os morcegos", es: "los murciélagos" },
      { it: "os telescópios", es: "los telescopios" },
      { it: "a luz", es: "la luz" },
    ],
    questions: [
      { q: "¿Por qué el cielo de Alqueva es tan oscuro?", options: ["Porque chove muito", "Porque há poucas cidades e poucas luzes", "Porque as estrelas são enormes", "Porque as noites são compridas"], answer: 1, why: "«A região do Alqueva tem poucas cidades e poucas luzes.»" },
      { q: "¿Qué se puede ver en Alqueva a simple vista?", options: ["A Via Láctea", "Foguetões", "Nada de especial", "Fogos de artifício"], answer: 0, why: "Los astrónomos dicen: «aqui vê-se a Via Láctea a olho nu»." },
      { q: "¿Para qué sirven las farolas especiales?", options: ["Para iluminar mais as aldeias", "Para não poluir o céu e proteger as estrelas", "Para assustar os morcegos", "Para economizar água"], answer: 1, why: "«As aldeias usam candeeiros especiais para não poluir o céu.»" },
      { q: "¿Qué significa «aqui lemos o livro inteiro»?", options: ["Que há muitas livrarias na aldeia", "Que se vê o céu completo, sem luz artificial", "Que os astrónomos gostam de ler", "Que a noite é muito comprida"], answer: 1, why: "El astrónomo dice: «Cada estrela conta uma história. Aqui lemos o livro inteiro»." },
    ],
    discuss: [
      { it: "Vês muitas estrelas onde vives? Porquê?", es: "¿Ves muchas estrellas donde vives? ¿Por qué?" },
      { it: "As luzes da cidade: conforto ou poluição? O que pensas?", es: "¿Las luces de la ciudad: comodidad o contaminación? ¿Qué piensas?" },
    ],
  },
];
