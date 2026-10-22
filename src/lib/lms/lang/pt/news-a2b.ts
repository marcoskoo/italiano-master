/* ── PT · Notícias A2 · bloco B (v9.39) ────────────────────────────────
   Português europeu (Portugal), nível A2, método VOA Learning English.
   12 notícias novas (pt-news-a2-04 … pt-news-a2-15) que se juntam às 3
   da base (news-a.ts) → 15 notícias de A2. Corpo: 4 parágrafos, 90-125
   palavras, pretérito perfeito simples + futuro ir+infinitivo. Léxico
   PT de Portugal (autocarro, pequeno-almoço, comboio, telemóvel…, nunca
   formas do Brasil). Campos `.it` = português (língua de estudo), `.es`
   = espanhol. */

import type { NewsItem } from "../../news";

export const PT_NEWS_A2B: NewsItem[] = [

  /* ═══ A2 · 4 — Ciência (Coimbra) ═══ */
  {
    id: "pt-news-a2-04", cat: "scienza", level: "A2", place: "Coimbra", minutes: 3,
    title: "Duzentas abelhas ao serviço da ciência",
    titleEs: "Doscientas abejas al servicio de la ciencia",
    lead: {
      it: "Em Coimbra, cientistas da universidade puseram sensores muito pequenos em abelhas urbanas. Querem saber onde as abelhas encontram comida — e a resposta surpreendeu toda a gente.",
      es: "En Coimbra, científicos de la universidad pusieron sensores muy pequeños en abejas urbanas. Quieren saber dónde encuentran comida las abejas — y la respuesta sorprendió a todos.",
    },
    paragraphs: [
      { it: "No mês passado, os investigadores da Universidade de Coimbra colaram pequenos sensores nas costas das abelhas de cinco jardins da cidade. Cada sensor pesa menos do que um grão de arroz.",
      es: "El mes pasado, los investigadores de la Universidad de Coimbra pegaron pequeños sensores en el lomo de las abejas de cinco jardines de la ciudad. Cada sensor pesa menos que un grano de arroz." },
      { it: "Cada sensor serviu para gravar a viagem da abelha. Os primeiros resultados mostraram uma surpresa: as abelhas ignoraram os canteiros bonitos e preferiram as flores pequenas dos baldios.",
      es: "Cada sensor sirvió para grabar el viaje de la abeja. Los primeros resultados mostraron una sorpresa: las abejas ignoraron los arriates bonitos y prefirieron las flores pequeñas de los terrenos baldíos." },
      { it: "«A cidade tem mais comida para as abejas do que nós pensávamos», explicou a bióloga Helena Marques. «Basta deixar crescer as ervas simples.»",
      es: "«La ciudad tiene más comida para las abejas de lo que pensábamos», explicó la bióloga Helena Marques. «Basta dejar crecer las hierbas simples.»" },
      { it: "A equipa vai repetir a experiência na primavera e vai comparar os dados com os do Porto. No fim, vai publicar um guia com as plantas favoritas das abelhas portuguesas.",
      es: "El equipo va a repetir el experimento en primavera y va a comparar los datos con los de Oporto. Al final, va a publicar una guía con las plantas favoritas de las abejas portuguesas." },
    ],
    words: [
      { it: "a abelha", es: "la abeja" },
      { it: "o sensor", es: "el sensor" },
      { it: "gravar", es: "grabar, registrar", note: "en PT, grabar sonidos o datos; el español «gravar» (imponer un impuesto) se dice «tributar»" },
      { it: "as flores", es: "las flores" },
      { it: "a viagem", es: "el viaje" },
      { it: "a primavera", es: "la primavera" },
    ],
    questions: [
      { q: "¿Dónde pegaron los sensores los investigadores?", options: ["Nas costas das abelhas de cinco jardins", "Nos peixes do rio Mondego", "Nos carros da cidade", "Nos pombos da praça"], answer: 0, why: "«…colaram pequenos sensores nas costas das abelhas de cinco jardins da cidade»." },
      { q: "¿Cuánto pesa cada sensor?", options: ["Duas gramas", "Menos do que um grão de arroz", "Cinquenta gramas", "O peso de uma moeda"], answer: 1, why: "«Cada sensor pesa menos do que um grão de arroz.»" },
      { q: "¿Qué eligieron las abejas, según los primeros resultados?", options: ["Os canteiros bonitos dos jardins", "Fugir para o campo", "As flores pequenas dos baldios", "Ficar na colmeia"], answer: 2, why: "«…as abelhas ignoraram os canteiros bonitos e preferiram as flores pequenas dos baldios»." },
      { q: "¿Qué hará el equipo al final del proyecto?", options: ["Vai vender os sensores", "Vai fechar o laboratório", "Vai mudar as abelhas de cidade", "Vai publicar um guia com as plantas favoritas das abelhas"], answer: 3, why: "«…vai publicar um guia com as plantas favoritas das abelhas portuguesas»." },
    ],
    discuss: [
      { it: "Há muitas abelhas na tua cidade? Onde costumam aparecer?", es: "¿Hay muchas abejas en tu ciudad? ¿Dónde suelen aparecer?" },
      { it: "Os jardins das cidades devem ter flores perfeitas ou ervas simples? Porquê?", es: "¿Los jardines de las ciudades deben tener flores perfectas o hierbas simples? ¿Por qué?" },
    ],
  },

  /* ═══ A2 · 5 — Ambiente (Ponta Delgada) ═══ */
  {
    id: "pt-news-a2-05", cat: "ambiente", level: "A2", place: "Ponta Delgada", minutes: 3,
    title: "A grande limpeza da costa açoriana",
    titleEs: "La gran limpieza de la costa azoriana",
    lead: {
      it: "No mês passado, quatrocentos voluntários percorreram a costa de São Miguel, nos Açores, com luvas e sacos. Recolheram plástico, redes de pesca — e uma ideia nova.",
      es: "El mes pasado, cuatrocientos voluntarios recorrieron la costa de São Miguel, en las Azores, con guantes y bolsas. Recogieron plástico, redes de pesca — y una idea nueva.",
    },
    paragraphs: [
      { it: "A operação começou às oito da manhã em Ponta Delgada. Os voluntários dividiram-se em vinte grupos e trabalharam cinco horas para recolher o lixo das praias, dos portos e das falésias.",
      es: "La operación empezó a las ocho de la mañana en Ponta Delgada. Los voluntarios se dividieron en veinte grupos y trabajaron cinco horas para recoger la basura de las playas, los puertos y los acantilados." },
      { it: "No fim do dia, os grupos contaram o lixo: duas toneladas de plástico, mais de trezentas redes de pesca e milhares de garrafas de água.",
      es: "Al final del día, los grupos contaron la basura: dos toneladas de plástico, más de trescientas redes de pesca y miles de botellas de agua." },
      { it: "«O mar traz o lixo de muitos países até aqui», disse o pescador José Nunes. «A ilha não o produz, mas recebe-o todos os dias.»",
      es: "«El mar trae la basura de muchos países hasta aquí», dijo el pescador José Nunes. «La isla no la produce, pero la recibe todos los días.»" },
      { it: "A câmara municipal vai instalar um contentor novo em cada praia e vai repetir a operação em setembro. Os voluntários vão voltar — e vão trazer amigos.",
      es: "El ayuntamiento va a instalar un contenedor nuevo en cada playa y va a repetir la operación en septiembre. Los voluntarios van a volver — y van a traer amigos." },
    ],
    words: [
      { it: "os voluntários", es: "los voluntarios" },
      { it: "o lixo", es: "la basura", note: "en Portugal también se oye «resíduos» para la basura reciclable" },
      { it: "recolher", es: "recoger" },
      { it: "o plástico", es: "el plástico" },
      { it: "a praia", es: "la playa" },
      { it: "o contentor", es: "el contenedor", note: "en PT europeo, contenedor de basura; en Brasil se dice «lixeira»" },
    ],
    questions: [
      { q: "¿En cuántos grupos se dividieron los voluntarios?", options: ["Dois", "Vinte", "Duzentos", "Nenhum"], answer: 1, why: "«Os voluntários dividiram-se em vinte grupos…»" },
      { q: "¿Cuánto plástico contaron al final del día?", options: ["Duzentos quilos", "Vinte toneladas", "Duas toneladas", "Nada"], answer: 2, why: "Contaram o lixo: «duas toneladas de plástico, mais de trezentas redes de pesca e milhares de garrafas de água»." },
      { q: "¿De dónde llega la basura, según el pescador José Nunes?", options: ["Dos turistas das praias", "O mar traz o lixo de muitos países", "Das fábricas da ilha", "Dos hotéis"], answer: 1, why: "«O mar traz o lixo de muitos países até aqui», disse o pescador José Nunes." },
      { q: "¿Qué harán los voluntarios en septiembre?", options: ["Vão voltar e vão trazer amigos", "Vão sair da ilha", "Vão parar de limpar", "Vão fechar as praias"], answer: 0, why: "«Os voluntários vão voltar — e vão trazer amigos.»" },
    ],
    discuss: [
      { it: "Já participaste numa limpeza de praia ou de parque? Como foi?", es: "¿Has participado alguna vez en una limpieza de playa o de parque? ¿Cómo fue?" },
      { it: "O lixo do mar é um problema de todos os países? Porquê?", es: "¿La basura del mar es un problema de todos los países? ¿Por qué?" },
    ],
  },

  /* ═══ A2 · 6 — Saúde (Lisboa) ═══ */
  {
    id: "pt-news-a2-06", cat: "salute", level: "A2", place: "Lisboa", minutes: 3,
    title: "Uma horta dentro do hospital",
    titleEs: "Un huerto dentro del hospital",
    lead: {
      it: "No hospital de Santa Maria, em Lisboa, nasceu uma horta improvável entre edifícios brancos. Os médicos gostaram tanto que agora receitam tempo lá fora — a sério.",
      es: "En el hospital de Santa María, en Lisboa, nació un huerto improbable entre edificios blancos. A los médicos les gustó tanto que ahora recetan tiempo al aire libre — en serio.",
    },
    paragraphs: [
      { it: "No ano passado, um grupo de enfermeiros transformou um pátio esquecido do hospital num canteiro enorme. Decidiram plantar alfaces, cenouras, tomates e ervas aromáticas.",
      es: "El año pasado, un grupo de enfermeros transformó un patio olvidado del hospital en un enorme arriate. Decidieron plantar lechugas, zanahorias, tomates y hierbas aromáticas." },
      { it: "Os doentes mais fortes trabalham na horta duas vezes por semana. Os médicos notaram mudanças: menos stress, mais apetite e conversas mais longas à mesa.",
      es: "Los enfermos más fuertes trabajan en el huerto dos veces por semana. Los médicos notaron cambios: menos estrés, más apetito y conversaciones más largas en la mesa." },
      { it: "«A horta não cura sozinha, mas ajuda muito», explicou a médica Ana Ribeiro. «Aqui, os doentes mexem o corpo e descansam a cabeça.»",
      es: "«El huerto no cura solo, pero ayuda mucho», explicó la médica Ana Ribeiro. «Aquí, los enfermos mueven el cuerpo y descansan la cabeza.»" },
      { it: "O projeto vai crescer: no próximo ano, a equipa vai construir uma estufa maior e vai organizar aulas de cozinha com os legumes da horta.",
      es: "El proyecto va a crecer: el próximo año, el equipo va a construir un invernadero más grande y va a organizar clases de cocina con las legumbres del huerto." },
    ],
    words: [
      { it: "a horta", es: "el huerto", note: "en Portugal, «horta» es el huerto familiar" },
      { it: "os doentes", es: "los enfermos, los pacientes", note: "en PT europeo se dice «doentes»; en Brasil, «pacientes»" },
      { it: "plantar", es: "plantar" },
      { it: "o stress", es: "el estrés", note: "el PT escribe stress, con s doble" },
      { it: "o apetite", es: "el apetito", note: "se escribe «apetite», sin o final" },
      { it: "a estufa", es: "el invernadero" },
    ],
    questions: [
      { q: "¿Quién transformó el patio olvidado del hospital?", options: ["Um grupo de enfermeiros", "Os próprios doentes", "Uma empresa de jardinagem", "Os estudantes"], answer: 0, why: "«…um grupo de enfermeiros transformou um pátio esquecido do hospital num canteiro enorme»." },
      { q: "¿Qué cambios notaron los médicos?", options: ["Nenhum", "Menos stress, mais apetite e conversas mais longas", "Mais stress", "Menos fome"], answer: 1, why: "«Os médicos notaram mudanças: menos stress, mais apetite e conversas mais longas à mesa.»" },
      { q: "¿Qué quieren decir los médicos con «a horta não cura sozinha»?", options: ["A horta substitui os remédios", "A horta é inútil", "A horta é uma ajuda, não um tratamento completo", "Os doentes não precisam de médicos"], answer: 2, why: "«A horta não cura sozinha, mas ajuda muito», explicou a médica Ana Ribeiro." },
      { q: "¿Qué hará el equipo el próximo año?", options: ["Vai fechar a horta", "Vai vender os legumes", "Vai mudar de hospital", "Vai construir uma estufa e organizar aulas de cozinha"], answer: 3, why: "«…a equipa vai construir uma estufa maior e vai organizar aulas de cozinha com os legumes da horta.»" },
    ],
    discuss: [
      { it: "Fazer jardinagem acalma as pessoas? O que te acalma a ti?", es: "¿Jardinar calma a las personas? ¿Qué te calma a ti?" },
      { it: "Os hospitais da tua cidade têm espaços verdes? Deviam ter?", es: "¿Los hospitales de tu ciudad tienen espacios verdes? ¿Deberían tenerlos?" },
    ],
  },

  /* ═══ A2 · 7 — Cultura (Évora) ═══ */
  {
    id: "pt-news-a2-07", cat: "cultura", level: "A2", place: "Évora", minutes: 3,
    title: "As vozes do canto alentejano",
    titleEs: "Las voces del canto alentejano",
    lead: {
      it: "Em Évora, um coro de estudantes gravou um disco de canto alentejano e ganhou fãs inesperados: os próprios jovens da cidade, que antes não ligavam à tradição.",
      es: "En Évora, un coro de estudiantes grabó un disco de canto alentejano y ganó seguidores inesperados: los propios jóvenes de la ciudad, que antes no hacían caso a la tradición.",
    },
    paragraphs: [
      { it: "O coro da escola secundária começou como uma brincadeira, há três anos. Cantavam só nos festivais da escola, sem microfones e sem ensaios sérios.",
      es: "El coro del instituto empezó como un juego, hace tres años. Cantaban solo en los festivales del colegio, sin micrófonos y sin ensayos serios." },
      { it: "No ano passado, um professor de música levou o grupo a sério: marcou um ensaio por semana e escolheu canções tradicionais do Alentejo, a região das planícies e do trigo.",
      es: "El año pasado, un profesor de música se tomó el grupo en serio: fijó un ensayo por semana y eligió canciones tradicionales del Alentejo, la región de las llanuras y del trigo." },
      { it: "Em junho, o coro entrou num estúdio para gravar um disco com catorze canções. Vendeu oito mil exemplares — um número enorme para um coro escolar.",
      es: "En junio, el coro entró en un estudio para grabar un disco con catorce canciones. Vendió ocho mil ejemplares — un número enorme para un coro escolar." },
      { it: "«O canto alentejano é a voz da nossa terra», disse a professora Teresa Pinto. Agora, o coro vai atuar em Espanha e vai preparar um segundo disco.",
      es: "«El canto alentejano es la voz de nuestra tierra», dijo la profesora Teresa Pinto. Ahora, el coro va a actuar en España y va a preparar un segundo disco." },
    ],
    words: [
      { it: "o coro", es: "el coro" },
      { it: "o ensaio", es: "el ensayo", note: "también significa prueba o test: um ensaio geral" },
      { it: "gravar", es: "grabar" },
      { it: "o disco", es: "el disco" },
      { it: "o trigo", es: "el trigo" },
      { it: "atuar", es: "actuar" },
    ],
    questions: [
      { q: "¿Cómo empezó el coro hace tres años?", options: ["Como uma brincadeira, nos festivais da escola", "Como um negócio profissional", "Com um contrato de uma editora", "Com aulas pagas"], answer: 0, why: "«O coro da escola secundária começou como uma brincadeira, há três anos.»" },
      { q: "¿Qué hizo el profesor de música el año pasado?", options: ["Desistiu do grupo", "Marcou um ensaio por semana e escolheu canções tradicionais", "Comprou microfones caros", "Mudou o coro para Lisboa"], answer: 1, why: "«…marcou um ensaio por semana e escolheu canções tradicionais do Alentejo…»" },
      { q: "¿Cuántos ejemplares vendió el disco?", options: ["Oitocentos", "Oitenta mil", "Oito mil", "Oito"], answer: 2, why: "Vendió mucho: «Vendeu oito mil exemplares — um número enorme para um coro escolar»." },
      { q: "¿Qué planes tiene el coro ahora?", options: ["Vai parar de cantar", "Vai cantar só na escola", "Vai mudar de estilo", "Vai atuar em Espanha e preparar um segundo disco"], answer: 3, why: "«…o coro vai atuar em Espanha e vai preparar um segundo disco.»" },
    ],
    discuss: [
      { it: "Há tradições musicais na tua região? Quais conheces?", es: "¿Hay tradiciones musicales en tu región? ¿Cuáles conoces?" },
      { it: "As tradições precisam de jovens para sobreviver? Como atraí-los?", es: "¿Las tradiciones necesitan jóvenes para sobrevivir? ¿Cómo atraerlos?" },
    ],
  },

  /* ═══ A2 · 8 — Economia (Coruche) ═══ */
  {
    id: "pt-news-a2-08", cat: "economia", level: "A2", place: "Coruche", minutes: 3,
    title: "A vila que vive da cortiça",
    titleEs: "La villa que vive del corcho",
    lead: {
      it: "Em Coruche, no Alentejo, as conversas giram à volta de uma árvore: o sobreiro. A sua casca transforma-se em cortiça — e este ano valeu mais do que nunca.",
      es: "En Coruche, en el Alentejo, las conversaciones giran en torno a un árbol: el alcornoque. Su corteza se transforma en corcho — y este año valió más que nunca.",
    },
    paragraphs: [
      { it: "Coruche chama-se a capital da cortiça. Aqui, cada sobreiro é uma pequena poupança da família: a casca transforma-se em rolhas, chapéus e até pisos de casas.",
      es: "Coruche se llama la capital del corcho. Aquí, cada alcornoque es un pequeño ahorro de la familia: la corteza se transforma en tapones, sombreros e incluso suelos de casas." },
      { it: "Este ano, a apanha da cortiça correu bem. As empresas pagaram mais aos trabalhadores e contrataram cinquenta pessoas vindas de outras terras do sul.",
      es: "Este año, la recolección del corcho fue bien. Las empresas pagaron más a los trabajadores y contrataron a cincuenta personas venidas de otras tierras del sur." },
      { it: "«A cortiça portuguesa vai para o mundo inteiro», explicou Elsa Correia, dona de uma fábrica pequena. «Metade da rolha dos vinhos finos nasce aqui.»",
      es: "«El corcho portugués va al mundo entero», explicó Elsa Correia, dueña de una fábrica pequeña. «La mitad del tapón de los vinos finos nace aquí.»" },
      { it: "O futuro parece sólido: a fábrica de Elsa vai contratar mais vinte trabalhadores e vai abrir uma loja de lembranças para os turistas que passam na estrada.",
      es: "El futuro parece sólido: la fábrica de Elsa va a contratar a veinte trabajadores más y va a abrir una tienda de recuerdos para los turistas que pasan por la carretera." },
    ],
    words: [
      { it: "a cortiça", es: "el corcho", note: "Portugal es el mayor productor mundial de corcho" },
      { it: "o sobreiro", es: "el alcornoque" },
      { it: "a casca", es: "la corteza" },
      { it: "a rolha", es: "el corcho (tapón)", note: "en PT, «rolha» es el tapón; el material es «cortiça»" },
      { it: "a apanha", es: "la recolección" },
      { it: "contratar", es: "contratar" },
    ],
    questions: [
      { q: "¿Por qué se dice que cada alcornoque es un pequeño ahorro?", options: ["Porque a casca se transforma em rolhas e outros produtos", "Porque dá frutos para comer", "Porque é uma árvore bonita", "Porque dá sombra às casas"], answer: 0, why: "«Aqui, cada sobreiro é uma pequena poupança da família: a casca transforma-se em rolhas, chapéus e até pisos de casas.»" },
      { q: "¿Cómo fue la cosecha de corcho este año?", options: ["Correu bem", "Correu mal", "Não houve apanha", "Foi cancelada"], answer: 0, why: "«Este ano, a apanha da cortiça correu bem.»" },
      { q: "¿Qué pasó con las cincuenta personas venidas de otras tierras?", options: ["Foram despedidas", "As empresas contrataram-nas", "Voltaram logo para casa", "Abriram fábricas novas"], answer: 1, why: "«As empresas pagaram mais aos trabalhadores e contrataram cinquenta pessoas vindas de outras terras do sul.»" },
      { q: "¿Qué hará la fábrica de Elsa en el futuro?", options: ["Vai fechar as portas", "Vai vender a empresa", "Vai trocar a cortiça pelo plástico", "Vai contratar mais vinte trabalhadores e abrir uma loja"], answer: 3, why: "«…a fábrica de Elsa vai contratar mais vinte trabalhadores e vai abrir uma loja de lembranças…»" },
    ],
    discuss: [
      { it: "Tens objetos de cortiça em casa? Quais?", es: "¿Tienes objetos de corcho en casa? ¿Cuáles?" },
      { it: "Viver do campo ou viver da cidade: qual escolhes? Porquê?", es: "¿Vivir del campo o vivir de la ciudad: cuál eliges? ¿Por qué?" },
    ],
  },

  /* ═══ A2 · 9 — Sociedade (Setúbal) ═══ */
  {
    id: "pt-news-a2-09", cat: "societa", level: "A2", place: "Setúbal", minutes: 3,
    title: "Os pescadores que trocaram as redes pelos golfinhos",
    titleEs: "Los pescadores que cambiaron las redes por los delfines",
    lead: {
      it: "No estuário do Sado, em Setúbal, vive uma comunidade de golfinhos. Quem os conhece melhor do que ninguém? Os antigos pescadores — agora, guias de barcos de turismo.",
      es: "En el estuario del Sado, en Setúbal, vive una comunidad de delfines. ¿Quién los conoce mejor que nadie? Los antiguos pescadores — ahora, guías de barcos turísticos.",
    },
    paragraphs: [
      { it: "Durante décadas, cada pescador de Setúbal viveu da pesca no estuário. Há cinco anos, a regra mudou e muitos barcos ficaram sem trabalho.",
      es: "Durante décadas, cada pescador de Setúbal vivió de la pesca en el estuario. Hace cinco años, la regla cambió y muchos barcos se quedaron sin trabajo." },
      { it: "A câmara municipal criou então cursos de turismo. Trinta pescadores aprenderam inglês, história dos golfinhos e noções de primeiros socorros.",
      es: "El ayuntamiento creó entonces cursos de turismo. Treinta pescadores aprendieron inglés, historia de los delfines y nociones de primeros auxilios." },
      { it: "Hoje, eles levam famílias e escolas para ver os golfinhos de perto. «Conheço cada golfinho pelo nome», disse o guia Manuel Santos, de cinquenta e oito anos.",
      es: "Hoy, ellos llevan a familias y escuelas a ver los delfines de cerca. «Conozco cada delfín por su nombre», dijo el guía Manuel Santos, de cincuenta y ocho años." },
      { it: "O projeto deu nova vida à cidade: este ano passaram doze mil visitantes. No verão, os barcos vão sair todos os dias e a equipa vai contratar dois jovens guias.",
      es: "El proyecto dio nueva vida a la ciudad: este año pasaron doce mil visitantes. En verano, los barcos van a salir todos los días y el equipo va a contratar a dos jóvenes guías." },
    ],
    words: [
      { it: "o pescador", es: "el pescador" },
      { it: "o golfinho", es: "el delfín" },
      { it: "o estuário", es: "el estuario" },
      { it: "o guia", es: "el guía / la guía", note: "en PT, «guia» es común: o guia (hombre) / a guia (mujer)" },
      { it: "a regra", es: "la regla" },
      { it: "os primeiros socorros", es: "los primeros auxilios" },
    ],
    questions: [
      { q: "¿Qué pasó hace cinco años en el estuario?", options: ["Os golfinhos foram embora", "A regra mudou e muitos barcos ficaram sem trabalho", "O rio secou", "Os turistas chegaram em massa"], answer: 1, why: "«Há cinco anos, a regra mudou e muitos barcos ficaram sem trabalho.»" },
      { q: "¿Qué aprendieron los treinta pescadores en los cursos?", options: ["Só navegação", "Inglês, história dos golfinhos e primeiros socorros", "Cozinha de peixe", "Nada de novo"], answer: 1, why: "«Trinta pescadores aprenderam inglês, história dos golfinhos e noções de primeiros socorros.»" },
      { q: "¿Por qué son los antiguos pescadores buenos guías de delfines?", options: ["Porque têm barcos luxuosos", "Porque falam cinco línguas", "Porque conhecem cada golfinho pelo nome", "Porque a câmara lhes pagou tudo"], answer: 2, why: "«Conheço cada golfinho pelo nome», disse o guia Manuel Santos, de cinquenta e oito anos." },
      { q: "¿Qué pasará en verano?", options: ["Os barcos vão parar", "Os golfinhos vão mudar de rio", "A cidade vai fechar o porto", "Os barcos vão sair todos os dias e a equipa vai contratar dois jovens guias"], answer: 3, why: "«No verão, os barcos vão sair todos os dias e a equipa vai contratar dois jovens guias.»" },
    ],
    discuss: [
      { it: "Já viste golfinhos ou outros animais no mar? Onde e quando?", es: "¿Has visto delfines u otros animales en el mar? ¿Dónde y cuándo?" },
      { it: "Mudar de profissão é fácil ou difícil? Que profissão gostarias de experimentar?", es: "¿Cambiar de profesión es fácil o difícil? ¿Qué profesión te gustaría probar?" },
    ],
  },

  /* ═══ A2 · 10 — História (Braga) ═══ */
  {
    id: "pt-news-a2-10", cat: "storia", level: "A2", place: "Braga", minutes: 3,
    title: "Um mosaico romano debaixo da rua",
    titleEs: "Un mosaico romano debajo de la calle",
    lead: {
      it: "Em Braga, os operários de uma obra fizeram uma descoberta inesperada: um chão romano com dois mil anos. A cidade parou para olhar o passado a seus pés.",
      es: "En Braga, los operarios de una obra hicieron un descubrimiento inesperado: un suelo romano de dos mil años. La ciudad se detuvo a mirar el pasado a sus pies.",
    },
    paragraphs: [
      { it: "Há dois meses, uma escavadora encontrou pedras coloridas debaixo de uma rua do centro. Os arqueólogos chegaram depressa e assumiram o controlo da obra.",
      es: "Hace dos meses, una excavadora encontró piedras de colores debajo de una calle del centro. Los arqueólogos llegaron rápido y tomaron el control de la obra." },
      { it: "A descoberta foi impressionante: um mosaico romano quase completo, com desenhos de peixes e ondas. Braga chamava-se Bracara Augusta e foi cidade importante do império.",
      es: "El descubrimiento fue impresionante: un mosaico romano casi completo, con dibujos de peces y olas. Braga se llamaba Bracara Augusta y fue una ciudad importante del imperio." },
      { it: "«Caminhamos todos os dias por cima da história», disse a arqueóloga Marta Fernandes. «A cidade tem mais segredos debaixo dos pés.»",
      es: "«Caminamos todos los días por encima de la historia», dijo la arqueóloga Marta Fernandes. «La ciudad tiene más secretos bajo los pies.»" },
      { it: "A câmara municipal vai mudar o projeto da rua: o mosaico vai ficar no sítio e os visitantes vão poder vê-lo através de um vidro especial.",
      es: "El ayuntamiento va a cambiar el proyecto de la calle: el mosaico va a quedarse en su sitio y los visitantes van a poder verlo a través de un vidrio especial." },
    ],
    words: [
      { it: "o mosaico", es: "el mosaico" },
      { it: "a descoberta", es: "el descubrimiento" },
      { it: "a obra", es: "la obra", note: "en PT, «obra» es construcción, obra de arte o labor (obras na estrada)" },
      { it: "o arqueólogo / a arqueóloga", es: "el arqueólogo / la arqueóloga" },
      { it: "o império", es: "el imperio" },
      { it: "o vidro", es: "el vidrio", note: "el material; el vaso para beber es «copo»" },
    ],
    questions: [
      { q: "¿Qué encontró la excavadora hace dos meses?", options: ["Um tesouro de ouro", "Pedras coloridas debaixo de uma rua do centro", "Uma cidade inteira", "Ossos de dinossauro"], answer: 1, why: "«…uma escavadora encontrou pedras coloridas debaixo de uma rua do centro»." },
      { q: "¿Cómo se llamaba Braga en la época romana?", options: ["Bracara Augusta", "Portus Cale", "Olisipo", "Conimbriga"], answer: 0, why: "«Braga chamava-se Bracara Augusta e foi cidade importante do império.»" },
      { q: "¿Qué dibujos aparecen en el mosaico?", options: ["Leões e tigres", "Navios de guerra", "Retratos de imperadores", "Peixes e ondas"], answer: 3, why: "«…um mosaico romano quase completo, com desenhos de peixes e ondas»." },
      { q: "¿Qué decisión tomó el ayuntamiento sobre el mosaico?", options: ["Vai destruí-lo", "Vai levá-lo para um museu", "O mosaico vai ficar no sítio, protegido por um vidro especial", "Vai cobri-lo com betão"], answer: 2, why: "«…o mosaico vai ficar no sítio e os visitantes vão poder vê-lo através de um vidro especial»." },
    ],
    discuss: [
      { it: "Há ruínas antigas na tua cidade ou perto dela? Já as visitaste?", es: "¿Hay ruinas antiguas en tu ciudad o cerca? ¿Las has visitado?" },
      { it: "É melhor deixar as descobertas no sítio ou levá-las para museus? Porquê?", es: "¿Es mejor dejar los descubrimientos en su lugar o llevarlos a museos? ¿Por qué?" },
    ],
  },

  /* ═══ A2 · 11 — Tecnologia (Funchal) ═══ */
  {
    id: "pt-news-a2-11", cat: "tecnologia", level: "A2", place: "Funchal", minutes: 3,
    title: "Os drones que vigiam as florestas da Madeira",
    titleEs: "Los drones que vigilan los bosques de Madeira",
    lead: {
      it: "Na Madeira, os guardas da natureza ganharam um aliado voador: um drone que percorre as montanhas e deteta os incêndios no primeiro minuto.",
      es: "En Madeira, los guardas de la naturaleza ganaron un aliado volador: un dron que recorre las montañas y detecta los incendios en el primer minuto.",
    },
    paragraphs: [
      { it: "No verão passado, a região testou dois drones durante três meses. Eles voaram sobre a floresta de laurissilva, Património Mundial da UNESCO.",
      es: "El verano pasado, la región probó dos drones durante tres meses. Volaron sobre el bosque de laurisilva, Patrimonio Mundial de la UNESCO." },
      { it: "Os aparelhos levam uma câmara térmica e detetam o calor estranho desde o primeiro minuto de um incêndio. Os guardas chegaram ao fogo muito mais depressa do que antes.",
      es: "Los aparatos llevan una cámara térmica y detectan el calor extraño desde el primer minuto de un incendio. Los guardas llegaron al fuego mucho más rápido que antes." },
      { it: "«Antes, dependíamos dos telefonemas dos turistas», contou o guarda Ricardo Almeida. «Agora, o drone avisa-nos primeiro — e de noite também.»",
      es: "«Antes, dependíamos de las llamadas de los turistas», contó el guarda Ricardo Almeida. «Ahora, el dron nos avisa primero — y de noche también.»" },
      { it: "A região vai comprar quatro drones novos e vai formar mais operadores. O objetivo é simples: proteger as montanhas verdes que dão água à ilha.",
      es: "La región va a comprar cuatro drones nuevos y va a formar a más operadores. El objetivo es simple: proteger las montañas verdes que dan agua a la isla." },
    ],
    words: [
      { it: "o drone", es: "el dron" },
      { it: "o incêndio", es: "el incendio" },
      { it: "o guarda", es: "el guarda, el guardia", note: "en PT, «o guarda» (hombre) y «a guarda» (mujer)" },
      { it: "a câmara térmica", es: "la cámara térmica", note: "«câmara» también es el ayuntamiento: câmara municipal" },
      { it: "a floresta", es: "el bosque" },
      { it: "proteger", es: "proteger" },
    ],
    questions: [
      { q: "¿Cuántos drones probó la región el verano pasado?", options: ["Quatro", "Dois", "Doze", "Nenhum"], answer: 1, why: "«…a região testou dois drones durante três meses»." },
      { q: "¿Qué llevan los aparatos para detectar el calor?", options: ["Espelhos", "Rádios antigos", "Câmaras térmicas", "Telemóveis"], answer: 2, why: "«Os aparelhos levam uma câmara térmica e detetam o calor estranho…»" },
      { q: "¿Cómo recibían antes los avisos de incendio?", options: ["Por satélite", "Pelos telefonemas dos turistas", "Por carta", "Pelos jornais"], answer: 1, why: "«Antes, dependíamos dos telefonemas dos turistas», contou o guarda Ricardo Almeida." },
      { q: "¿Cuál es el objetivo del proyecto?", options: ["Vender drones aos turistas", "Tirar fotografias para revistas", "Voar só em festas", "Proteger as montanhas verdes que dão água à ilha"], answer: 3, why: "«O objetivo é simples: proteger as montanhas verdes que dão água à ilha.»" },
    ],
    discuss: [
      { it: "A tecnologia ajuda a proteger a natureza ou afasta-nos dela? Dá exemplos.", es: "¿La tecnología ayuda a proteger la naturaleza o nos aleja de ella? Da ejemplos." },
      { it: "Como é o clima na tua região? Há incêndios, cheias ou tempestades?", es: "¿Cómo es el clima en tu región? ¿Hay incendios, inundaciones o tormentas?" },
    ],
  },

  /* ═══ A2 · 12 — Desporto (Nazaré) ═══ */
  {
    id: "pt-news-a2-12", cat: "sport", level: "A2", place: "Nazaré", minutes: 3,
    title: "Os pilotos das ondas gigantes",
    titleEs: "Los pilotos de las olas gigantes",
    lead: {
      it: "Na Nazaré, as ondas do inverno chegam a vinte metros. Quando um surfista cai, tem de sair da água em segundos. Quem o salva? Os pilotos de jet-ski.",
      es: "En Nazaré, las olas del invierno llegan a veinte metros. Cuando un surfista cae, tiene que salir del agua en segundos. ¿Quién lo salva? Los pilotos de jet-ski.",
    },
    paragraphs: [
      { it: "A vila tornou-se famosa pelas ondas gigantes. Os melhores surfistas do mundo viajam até à Nazaré todos os anos para as enfrentar no inverno.",
      es: "La villa se hizo famosa por las olas gigantes. Los mejores surfistas del mundo viajan a Nazaré todos los años para enfrentarse a ellas en invierno." },
      { it: "Mas cair numa onda de vinte metros é perigoso: um surfista que desaparece precisa de ajuda em segundos. Por isso, existe uma equipa de resgate com pilotos de jet-ski.",
      es: "Pero caer en una ola de veinte metros es peligroso: un surfista que desaparece necesita ayuda en segundos. Por eso existe un equipo de rescate con pilotos de jet-ski." },
      { it: "«Temos de chegar antes da segunda onda», explicou Sofia Matos, piloto de jet-ski há seis anos. «A água não espera.»",
      es: "«Tenemos que llegar antes de la segunda ola», explicó Sofia Matos, piloto de jet-ski desde hace seis años. «El agua no espera.»" },
      { it: "Este inverno, a equipa fez oitenta resgates sem nenhum ferido grave. No próximo ano, vai treinar pilotos espanhóis e vai comprar dois jet-skis mais rápidos.",
      es: "Este invierno, el equipo hizo ochenta rescates sin ningún herido grave. El próximo año, va a entrenar a pilotos españoles y va a comprar dos jet-skis más rápidos." },
    ],
    words: [
      { it: "a onda", es: "la ola" },
      { it: "o resgate", es: "el rescate" },
      { it: "o piloto", es: "el piloto" },
      { it: "o surfista", es: "el surfista" },
      { it: "o jet-ski", es: "el jet-ski" },
      { it: "treinar", es: "entrenar", note: "en PT se dice «treinar»; «entrenar» no existe en portugués" },
    ],
    questions: [
      { q: "¿Por qué se hizo famosa la villa?", options: ["Pelo castelo antigo", "Pelas ondas gigantes", "Pelo futebol", "Pelas praias calmas de verão"], answer: 1, why: "«A vila tornou-se famosa pelas ondas gigantes.»" },
      { q: "¿Por qué es peligroso caer en una ola de veinte metros?", options: ["Porque a água é muito fria", "Porque há tubarões", "Porque um surfista que desaparece precisa de ajuda em segundos", "Porque as praias estão fechadas"], answer: 2, why: "«…um surfista que desaparece precisa de ajuda em segundos»." },
      { q: "¿Qué explica Sofia Matos sobre su trabajo?", options: ["Que é um trabalho fácil", "Que têm de chegar antes da segunda onda", "Que nunca salvou ninguém", "Que só trabalha no verão"], answer: 1, why: "«Temos de chegar antes da segunda onda», explicou Sofia Matos." },
      { q: "¿Cómo fue el balance de este invierno?", options: ["Oitenta resgates sem nenhum ferido grave", "Muitos feridos graves", "Poucos resgates", "Nenhum resgate"], answer: 0, why: "«Este inverno, a equipa fez oitenta resgates sem nenhum ferido grave.»" },
    ],
    discuss: [
      { it: "Praticas desporto radical ou preferes desporto tranquilo? Qual?", es: "¿Practicas deporte extremo o prefieres deporte tranquilo? ¿Cuál?" },
      { it: "As pessoas que arriscam a vida para salvar os outros merecem mais reconhecimento? Porquê?", es: "¿Las personas que arriesgan su vida para salvar a otros merecen más reconocimiento? ¿Por qué?" },
    ],
  },

  /* ═══ A2 · 13 — Ciência (Faro) ═══ */
  {
    id: "pt-news-a2-13", cat: "scienza", level: "A2", place: "Faro", minutes: 3,
    title: "Os cavalos-marinhos voltam à Ria Formosa",
    titleEs: "Los caballitos de mar vuelven a la Ría Formosa",
    lead: {
      it: "Na Ria Formosa, perto de Faro, os cavalos-marinhos quase desapareceram. Os cientistas do laboratório local criaram-nos em aquários e, este mês, devolveram-nos ao mar.",
      es: "En la Ría Formosa, cerca de Faro, los caballitos de mar casi desaparecieron. Los científicos del laboratorio local los criaron en acuarios y, este mes, los devolvieron al mar.",
    },
    paragraphs: [
      { it: "Há dez anos, os investigadores receberam uma má notícia: restavam muito poucos cavalos-marinhos na ria. A poluição e a pesca ilegal quase os eliminaram.",
      es: "Hace diez años, los investigadores recibieron una mala noticia: quedaban muy pocos caballitos de mar en la ría. La contaminación y la pesca ilegal casi los eliminaron." },
      { it: "O laboratório marinho de Faro decidiu agir. Durante cinco anos, os biólogos estudaram a espécie e aprenderam a criar milhares de crias em aquários.",
      es: "El laboratorio marino de Faro decidió actuar. Durante cinco años, los biólogos estudiaron la especie y aprendieron a criar miles de crías en acuarios." },
      { it: "Este mês, os cientistas libertaram quinhentos animais na ria. Cada cavalo-marinho recebeu um pequeno marcador colorido na cauda.",
      es: "Este mes, los científicos liberaron quinientos animales en la ría. Cada caballito de mar recibió un pequeño marcador de color en la cola." },
      { it: "«Foi o dia mais feliz do meu trabalho», disse a bióloga Inês Tavares. A equipa vai repetir a libertação no próximo ano e vai levar escolas aos mergulhos.",
      es: "«Fue el día más feliz de mi trabajo», dijo la bióloga Inês Tavares. El equipo va a repetir la liberación el próximo año y va a llevar a escuelas a los buceos." },
    ],
    words: [
      { it: "o cavalo-marinho", es: "el caballito de mar", note: "literalmente, «caballo de mar»" },
      { it: "a ria", es: "la ría" },
      { it: "a poluição", es: "la contaminación" },
      { it: "a pesca", es: "la pesca" },
      { it: "criar", es: "criar, reproducir" },
      { it: "a cauda", es: "la cola" },
    ],
    questions: [
      { q: "¿Por qué casi desaparecieron los caballitos de mar en la ría?", options: ["Por causa do frio do inverno", "Por causa da poluição e da pesca ilegal", "Porque os turistas os apanharam", "Por causa dos golfinhos"], answer: 1, why: "«A poluição e a pesca ilegal quase os eliminaram.»" },
      { q: "¿Qué aprendieron a hacer los biólogos en cinco años?", options: ["A criar milhares de crias em aquários", "A nadar mais depressa", "A falar com os pescadores", "A pescar cavalos-marinhos"], answer: 0, why: "«…os biólogos estudaram a espécie e aprenderam a criar milhares de crias em aquários»." },
      { q: "¿Para qué sirve el marcador de color en la cola?", options: ["Para decorar o animal", "Para os turistas fotografarem", "Para os cientistas identificarem cada animal", "Para o proteger dos peixes"], answer: 2, why: "El marcador sirve para identificar: «Cada cavalo-marinho recebeu um pequeno marcador colorido na cauda»." },
      { q: "¿Cómo se sintió la bióloga Inês Tavares ese día?", options: ["Triste", "Indiferente", "Cansada", "Foi o dia mais feliz do seu trabalho"], answer: 3, why: "«Foi o dia mais feliz do meu trabalho», disse a bióloga Inês Tavares." },
    ],
    discuss: [
      { it: "Devemos interferir na natureza para salvar uma espécie? Onde está o limite?", es: "¿Debemos interferir en la naturaleza para salvar una especie? ¿Dónde está el límite?" },
      { it: "Qual é o teu animal marinho preferido? Porquê?", es: "¿Cuál es tu animal marino preferido? ¿Por qué?" },
    ],
  },

  /* ═══ A2 · 14 — Ambiente (Viseu) ═══ */
  {
    id: "pt-news-a2-14", cat: "ambiente", level: "A2", place: "Viseu", minutes: 3,
    title: "Viseu pedala para o futuro",
    titleEs: "Viseu pedalea hacia el futuro",
    lead: {
      it: "Viseu ganhou um título novo: «a cidade das bicicletas». Em dez anos, as ruas mudaram de cara e os habitantes mudaram de hábitos.",
      es: "Viseu ganó un título nuevo: «la ciudad de las bicicletas». En diez años, las calles cambiaron de cara y los habitantes cambiaron de hábitos.",
    },
    paragraphs: [
      { it: "Há dez anos, Viseu tinha poucas ciclovias e muito trânsito no centro. O ar pesava e o peão disputava o espaço com os carros.",
      es: "Hace diez años, Viseu tenía pocos carriles bici y mucho tráfico en el centro. El aire pesaba y el peatón disputaba el espacio con los coches." },
      { it: "A câmara municipal mudou a cidade devagar: fechou várias ruas ao trânsito, plantou uma árvore em cada esquina e construiu quarenta quilómetros de ciclovias.",
      es: "El ayuntamiento cambió la ciudad despacio: cerró varias calles al tráfico, plantó un árbol en cada esquina y construyó cuarenta kilómetros de carriles bici." },
      { it: "Os resultados chegaram: hoje, um em cada dez habitantes vai trabalhar de bicicleta. As lojas do centro venderam mais bicicletas do que nunca.",
      es: "Los resultados llegaron: hoy, uno de cada diez habitantes va a trabajar en bicicleta. Las tiendas del centro vendieron más bicicletas que nunca." },
      { it: "«A cidade ficou mais silenciosa e mais limpa», disse o estudante Tomás Lopes. No próximo ano, Viseu vai ligar a ciclovia às aldeias vizinhas e vai criar um sistema de partilha de bicicletas elétricas.",
      es: "«La ciudad se quedó más silenciosa y más limpia», dijo el estudiante Tomás Lopes. El próximo año, Viseu va a conectar el carril bici con las aldeas vecinas y va a crear un sistema de bicicletas eléctricas compartidas." },
    ],
    words: [
      { it: "a bicicleta", es: "la bicicleta" },
      { it: "a ciclovia", es: "el carril bici" },
      { it: "o trânsito", es: "el tráfico" },
      { it: "o peão", es: "el peatón", note: "en PT europeo, peatón; también significa peón de ajedrez" },
      { it: "a árvore", es: "el árbol", note: "en PT es femenino: a árvore" },
      { it: "limpo / limpa", es: "limpio / limpia" },
    ],
    questions: [
      { q: "¿Cómo era Viseu hace diez años?", options: ["Tinha poucas ciclovias e muito trânsito no centro", "Tinha muitos parques novos", "Não tinha carros", "Era famosa pelo futebol"], answer: 0, why: "«Há dez anos, Viseu tinha poucas ciclovias e muito trânsito no centro.»" },
      { q: "¿Qué hizo el ayuntamiento con la ciudad?", options: ["Construiu um aeroporto", "Abriu mais ruas aos carros", "Fechou ruas ao trânsito, plantou árvores e construiu ciclovias", "Não fez nada"], answer: 2, why: "«…fechou várias ruas ao trânsito, plantou uma árvore em cada esquina e construiu quarenta quilómetros de ciclovias»." },
      { q: "¿Qué muestran los resultados de hoy?", options: ["Ninguém usa a bicicleta", "Um em cada dez habitantes vai trabalhar de bicicleta", "As lojas do centro fecharam", "O trânsito aumentou"], answer: 1, why: "«…hoje, um em cada dez habitantes vai trabalhar de bicicleta»." },
      { q: "¿Qué hará Viseu el próximo año?", options: ["Vai fechar as ciclovias", "Vai construir mais estradas para carros", "Vai proibir as bicicletas", "Vai ligar a ciclovia às aldeias vizinhas e criar partilha de bicicletas elétricas"], answer: 3, why: "«…Viseu vai ligar a ciclovia às aldeias vizinhas e vai criar um sistema de partilha de bicicletas elétricas»." },
    ],
    discuss: [
      { it: "Usas a bicicleta na tua cidade? É fácil ou perigoso andar nela? Porquê?", es: "¿Usas la bicicleta en tu ciudad? ¿Es fácil o peligroso ir en ella? ¿Por qué?" },
      { it: "As cidades devem dar mais espaço aos carros ou às pessoas? Argumenta.", es: "¿Las ciudades deben dar más espacio a los coches o a las personas? Argumenta." },
    ],
  },

  /* ═══ A2 · 15 — Cultura (Viana do Castelo) ═══ */
  {
    id: "pt-news-a2-15", cat: "cultura", level: "A2", place: "Viana do Castelo", minutes: 3,
    title: "O museu do ouro de Viana do Castelo",
    titleEs: "El museo del oro de Viana do Castelo",
    lead: {
      it: "Em Viana do Castelo abriu um museu dedicado ao ouro tradicional do Minho. As peças contam histórias de noivas, pescadores e festas de há duzentos anos.",
      es: "En Viana do Castelo abrió un museo dedicado al oro tradicional del Miño. Las piezas cuentan historias de novias, pescadores y fiestas de hace doscientos años.",
    },
    paragraphs: [
      { it: "O Museu do Ouro abriu portas no mês passado, num palácio antigo do centro. A coleção tem mais de seiscentas peças: colares, brincos e corações de filigrana.",
      es: "El Museo del Oro abrió sus puertas el mes pasado, en un palacio antiguo del centro. La colección tiene más de seiscientas piezas: collares, pendientes y corazones de filigrana." },
      { it: "No Minho, o ouro era a poupança das famílias. As mulheres usavam as peças nas festas grandes e passavam-nas de mãe para filha durante gerações.",
      es: "En el Miño, el oro era el ahorro de las familias. Las mujeres usaban las piezas en las fiestas grandes y las pasaban de madre a hija durante generaciones." },
      { it: "«Cada peça fala de amor e de trabalho», disse a conservadora Luísa Barbosa. «A filigrana exige paciência e mãos muito firmes.»",
      es: "«Cada pieza habla de amor y de trabajo», dijo la conservadora Luísa Barbosa. «La filigrana exige paciencia y manos muy firmes.»" },
      { it: "O museu vai montar oficinas de ourivesaria para jovens e vai receber, em outubro, uma exposição de joias de outras regiões de Portugal.",
      es: "El museo va a montar talleres de orfebrería para jóvenes y va a recibir, en octubre, una exposición de joyas de otras regiones de Portugal." },
    ],
    words: [
      { it: "o ouro", es: "el oro" },
      { it: "a peça", es: "la pieza" },
      { it: "a poupança", es: "el ahorro", note: "viene del verbo «poupar» (ahorrar)" },
      { it: "a filigrana", es: "la filigrana", note: "técnica de hilos de oro o plata retorcidos" },
      { it: "o museu", es: "el museo" },
      { it: "a ourivesaria", es: "la orfebrería" },
    ],
    questions: [
      { q: "¿Dónde abrió el Museo del Oro?", options: ["Num palácio antigo do centro de Viana do Castelo", "Numa escola", "Numa praia", "No Porto"], answer: 0, why: "«O Museu do Ouro abriu portas no mês passado, num palácio antigo do centro.»" },
      { q: "¿Cuántas piezas tiene la colección?", options: ["Sessenta", "Seis", "Seis mil", "Mais de seiscentas"], answer: 3, why: "«A coleção tem mais de seiscentas peças: colares, brincos e corações de filigrana.»" },
      { q: "¿Qué hacían las mujeres con las piezas en las fiestas grandes?", options: ["Escondiam-nas em casa", "Usavam-nas e passavam-nas de mãe para filha", "Vendiam-nas", "Guardavam-nas no banco"], answer: 1, why: "«As mulheres usavam as peças nas festas grandes e passavam-nas de mãe para filha durante gerações.»" },
      { q: "¿Qué hará el museo en octubre?", options: ["Vai fechar para férias", "Vai vender a coleção", "Vai receber uma exposição de joias de outras regiões de Portugal", "Vai mudar de cidade"], answer: 2, why: "«…vai receber, em outubro, uma exposição de joias de outras regiões de Portugal»." },
    ],
    discuss: [
      { it: "A tua família tem objetos passados de geração em geração? Quais?", es: "¿Tu familia tiene objetos pasados de generación en generación? ¿Cuáles?" },
      { it: "Os museus pequenos das cidades pequenas são importantes? Porquê?", es: "¿Los museos pequeños de las ciudades pequeñas son importantes? ¿Por qué?" },
    ],
  },
];
