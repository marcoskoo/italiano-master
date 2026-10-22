/* ── PT · Notícias B1 · bloco B (v9.39) ────────────────────────────────
   Português europeu (Portugal), nível B1, método VOA Learning English.
   12 notícias novas (pt-news-b1-04 … pt-news-b1-15) que se juntam às 3
   da base (news-b.ts) → 15 notícias de B1. Corpo: 4-5 parágrafos, 125-165
   palavras, pretérito perfeito vs imperfeito + presente do conjuntivo
   básico. Léxico PT de Portugal (nunca formas do Brasil). Campos `.it`
   = português (língua de estudo), `.es` = espanhol. */

import type { NewsItem } from "../../news";

export const PT_NEWS_B1B: NewsItem[] = [

  /* ═══ B1 · 4 — Ciência (Mourão) ═══ */
  {
    id: "pt-news-b1-04", cat: "scienza", level: "B1", place: "Mourão", minutes: 3,
    title: "A aldeia alentejana que protege o céu escuro",
    titleEs: "El pueblo alentejano que protege el cielo oscuro",
    lead: {
      it: "Em Mourão, no Alentejo, as luzes da rua apagam-se mais cedo do que noutros sítios. Não é uma avaria: é a primeira reserva de céu escuro certificada da Europa a pedir silêncio à eletricidade.",
      es: "En Mourão, en el Alentejo, las luces de la calle se apagan antes que en otros sitios. No es una avería: es la primera reserva de cielo oscuro certificada de Europa pidiendo silencio a la electricidad.",
    },
    paragraphs: [
      { it: "Durante séculos, o Alentejo escurecia cedo e ninguém dava valor a isso. Há dez anos, uma equipa de astrónomos mediu a escuridão do Alqueva e confirmou o que os moradores suspeitavam: poucos céus europeus estavam tão limpos.",
      es: "Durante siglos, el Alentejo se oscurecía pronto y nadie le daba valor. Hace diez años, un equipo de astrónomos midió la oscuridad del Alqueva y confirmó lo que los habitantes sospechaban: pocos cielos europeos estaban tan limpios." },
      { it: "As câmaras municipais trocaram os candeeiros antigos por luzes que apontam para o chão. Os hotéis puseram cortinas espessas nas janelas, para que a claridade não se perca lá fora. As ruas ficaram mais escuras — e o céu, muito maior.",
      es: "Los ayuntamientos cambiaron las farolas antiguas por luces que apuntan al suelo. Los hoteles pusieron cortinas gruesas en las ventanas, para que la claridad no se pierda allá afuera. Las calles quedaron más oscuras — y el cielo, mucho más grande." },
      { it: "«Antes, a poluição luminosa roubava-nos metade do espetáculo», explica a astrónoma Vera Cardoso. «Hoje, quem sobe ao miradouro vê a Via Láctea a olho nu.»",
      es: "«Antes, la contaminación luminosa nos robaba la mitad del espectáculo», explica la astrónoma Vera Cardoso. «Hoy, quien sube al mirador ve la Vía Láctea a simple vista.»" },
      { it: "A ciência virou economia: os telescópios chegaram às quintas, os guias noturnos multiplicaram-se e os hotéis enchem nas noites de estrelas cadentes. Os visitantes aprendem a reconhecer planetas e provam os vinhos da região.",
      es: "La ciencia se convirtió en economía: los telescopios llegaron a las fincas, los guías nocturnos se multiplicaron y los hoteles se llenan en las noches de estrellas fugaces. Los visitantes aprenden a reconocer planetas y prueban los vinos de la región." },
      { it: "Os responsáveis querem que a reserva cresça e que outras aldeias adiram. Só pedem que cada luz nova respeite regras simples: o céu também é património.",
      es: "Los responsables quieren que la reserva crezca y que otros pueblos se sumen. Solo piden que cada luz nueva respete reglas simples: el cielo también es patrimonio." },
    ],
    words: [
      { it: "a escuridão", es: "la oscuridad" },
      { it: "os candeeiros", es: "las farolas" },
      { it: "a poluição luminosa", es: "la contaminación luminosa" },
      { it: "o miradouro", es: "el mirador" },
      { it: "os telescópios", es: "los telescopios" },
      { it: "o património", es: "el patrimonio" },
    ],
    questions: [
      { q: "¿Qué confirmó el equipo de astrónomos hace diez años?", options: ["Que poucos céus europeus estavam tão limpos como o do Alqueva", "Que as noites do Alentejo eram demasiado frias", "Que os moradores nunca olhavam para o céu", "Que a região precisava de mais luzes"], answer: 0, why: "«…mediu a escuridão do Alqueva e confirmou o que os moradores suspeitavam: poucos céus europeus estavam tão limpos»." },
      { q: "¿Qué hicieron los ayuntamientos con las farolas antiguas?", options: ["Pintaram-nas de cores vivas", "Trocaram-nas por luzes que apontam para o chão", "Apagaram-nas completamente", "Venderam-nas aos hotéis"], answer: 1, why: "«As câmaras municipais trocaram os candeeiros antigos por luzes que apontam para o chão.»" },
      { q: "¿Qué significa que «a ciência virou economia»?", options: ["Que os cientistas ficaram ricos com os estudos", "Que os hotéis deixaram de receber hóspedes", "Que a astronomia trouxe turismo e trabalho à região", "Que a ciência parou de ser necessária"], answer: 2, why: "«os telescópios chegaram às quintas, os guias noturnos multiplicaram-se e os hotéis enchem nas noites de estrelas cadentes»." },
      { q: "¿Qué piden los responsables a cada luz nueva?", options: ["Que mude de cor todas as noites", "Que fique acesa até de manhã", "Que se apague aos domingos", "Que respeite regras simples"], answer: 3, why: "«Só pedem que cada luz nova respeite regras simples»." },
    ],
    discuss: [
      { it: "Aceitarias morar numa aldeia onde as luzes se apagam cedo para proteger o céu? Porquê?", es: "¿Aceptarías vivir en un pueblo donde las luces se apagan pronto para proteger el cielo? ¿Por qué?" },
      { it: "Que medidas funcionam melhor contra a poluição luminosa: menos candeeiros, luzes mais inteligentes ou fachadas apagadas à noite?", es: "¿Qué medidas funcionan mejor contra la contaminación luminosa: menos farolas, luces más inteligentes o fachadas apagadas por la noche?" },
    ],
  },

  /* ═══ B1 · 5 — Cultura (Óbidos) ═══ */
  {
    id: "pt-news-b1-05", cat: "cultura", level: "B1", place: "Óbidos", minutes: 3,
    title: "A vila murada que se transformou em livraria",
    titleEs: "La villa amurallada que se convirtió en librería",
    lead: {
      it: "Óbidos tem muralhas medievais, ruas de pedra — e livros em todos os cantos, até na igreja. A vila das rainhas escolheu a literatura e não quer mais parar.",
      es: "Óbidos tiene murallas medievales, calles de piedra — y libros en todos los rincones, hasta en la iglesia. La villa de las reinas eligió la literatura y no quiere parar más.",
    },
    paragraphs: [
      { it: "Até há poucos anos, Óbidos vivia do turismo de um dia: os visitantes fotografavam as muralhas, provavam a ginjinha e seguiam viagem. As livrarias eram duas, pequenas e discretas.",
      es: "Hasta hace pocos años, Óbidos vivía del turismo de un día: los visitantes fotografiaban las murallas, probaban la ginja y seguían viaje. Había dos librerías, pequeñas y discretas." },
      { it: "Tudo mudou quando a câmara municipal e os livreiros apostaram na literatura. Abriram espaços de leitura em capelas, em adegas e até num antigo celeiro; o festival literário internacional já traz escritores de muitos países.",
      es: "Todo cambió cuando el ayuntamiento y los libreros apostaron por la literatura. Abrieron espacios de lectura en capillas, en bodegas y hasta en un antiguo granero; el festival literario internacional ya trae escritores de muchos países." },
      { it: "«O segredo foi não pôr os livros num sítio só», conta o livreiro António Brasil. «Queremos que o visitante encontre um livro onde menos espera.»",
      es: "«El secreto fue no poner los libros en un solo sitio», cuenta el librero António Brasil. «Queremos que el visitante encuentre un libro donde menos lo espera.»" },
      { it: "Os números deram razão à ideia: os hóspedes ficam mais noites, os voluntários jovens do festival multiplicaram-se e as escolas da região visitam a vila todas as primaveras.",
      es: "Los números dieron la razón a la idea: los huéspedes se quedan más noches, los jóvenes voluntarios del festival se multiplicaron y las escuelas de la región visitan la villa todas las primaveras." },
      { it: "Para o ano, os organizadores preparam uma praça dedicada à poesia. O objetivo é simples: que a literatura faça parte da paisagem, como as flores nos muros.",
      es: "Para el año que viene, los organizadores preparan una plaza dedicada a la poesía. El objetivo es simple: que la literatura forme parte del paisaje, como las flores en los muros." },
    ],
    words: [
      { it: "as muralhas", es: "las murallas" },
      { it: "a ginjinha", es: "la ginja", note: "licor de guindas típico de Óbidos; se bebe en vaso pequeño, a veces de chocolate" },
      { it: "as livrarias", es: "las librerías" },
      { it: "o celeiro", es: "el granero" },
      { it: "o festival literário", es: "el festival literario" },
      { it: "a paisagem", es: "el paisaje" },
    ],
    questions: [
      { q: "¿Cómo era el turismo en Óbidos hasta hace pocos años?", options: ["Os visitantes ficavam uma semana inteira", "Os visitantes fotografavam as muralhas, provavam a ginjinha e seguiam viagem", "Os visitantes vinham só comprar livros", "Não havia visitantes"], answer: 1, why: "«os visitantes fotografavam as muralhas, provavam a ginjinha e seguiam viagem»." },
      { q: "¿Dónde se abrieron espacios de lectura?", options: ["Em capelas, em adegas e até num antigo celeiro", "Só num centro comercial novo", "Nas escolas da região", "No castelo da vila"], answer: 0, why: "«Abriram espaços de leitura em capelas, em adegas e até num antigo celeiro»." },
      { q: "¿Cuál fue «el secreto», según el librero?", options: ["Vender os livros mais baratos", "Abrir uma única grande livraria", "Traduzir todos os livros", "Não pôr os livros num sítio só"], answer: 3, why: "«O segredo foi não pôr os livros num sítio só»." },
      { q: "¿Cuál es el objetivo de la futura plaza de poesía?", options: ["Que a poesia substitua os livros", "Que os poetas morem na vila", "Que a literatura faça parte da paisagem, como as flores nos muros", "Que a vila receba menos turistas"], answer: 2, why: "«O objetivo é simples: que a literatura faça parte da paisagem, como as flores nos muros»." },
    ],
    discuss: [
      { it: "Já compraste um livro por causa da capa ou do sítio onde o encontraste? Conta a história.", es: "¿Has comprado alguna vez un libro por su portada o por el lugar donde lo encontraste? Cuenta la historia." },
      { it: "As vilas pequenas deviam apostar na literatura, no desporto ou na gastronomia para atrair visitantes? Discute.", es: "¿Deberían los pueblos pequeños apostar por la literatura, el deporte o la gastronomía para atraer visitantes? Discútelo." },
    ],
  },

  /* ═══ B1 · 6 — Saúde (Guimarães) ═══ */
  {
    id: "pt-news-b1-06", cat: "salute", level: "B1", place: "Guimarães", minutes: 3,
    title: "Em Guimarães, os médicos receitam caminhadas",
    titleEs: "En Guimarães, los médicos recetan caminatas",
    lead: {
      it: "Os centros de saúde de Guimarães começaram a receitar uma coisa que não se compra na farmácia: uma caminhada de trinta minutos no monte. Os utentes estranham; depois agradecem.",
      es: "Los centros de salud de Guimarães empezaron a recetar algo que no se compra en la farmacia: una caminata de treinta minutos en el monte. Los pacientes se extrañan; luego lo agradecen.",
    },
    paragraphs: [
      { it: "O programa nasceu de uma conversa entre médicos de família. Muitos doentes queixavam-se de cansaço, de peso a mais e de ideias negras; os exames, no entanto, não mostravam nada de grave.",
      es: "El programa nació de una conversación entre médicos de familia. Muchos enfermos se quejaban de cansancio, de sobrepeso y de ideas negras; los análisis, sin embargo, no mostraban nada grave." },
      { it: "A resposta não veio em comprimidos. Os médicos inscreveram os utentes num plano de caminhadas no monte da Penha, três vezes por semana, em grupos acompanhados por uma enfermeira e por um treinador.",
      es: "La respuesta no llegó en pastillas. Los médicos inscribieron a los pacientes en un plan de caminatas por el monte da Penha, tres veces por semana, en grupos acompañados por una enfermera y un entrenador." },
      { it: "«O remédio mais antigo do mundo é o movimento», defende a médica Paula Seixas. «Mas é preciso que cada pessoa encontre o seu ritmo, senão desiste ao fim de duas semanas.»",
      es: "«El remedio más antiguo del mundo es el movimiento», defiende la médica Paula Seixas. «Pero es necesario que cada persona encuentre su ritmo; si no, abandona al cabo de dos semanas.»" },
      { it: "Os primeiros resultados apareceram ao fim de três meses: os utentes dormiam melhor, chegavam às consultas com cara de férias e alguns trocaram o elevador pelas escadas sem ninguém lho pedir.",
      es: "Los primeros resultados aparecieron al cabo de tres meses: los pacientes dormían mejor, llegaban a las consultas con cara de vacaciones y algunos cambiaron el ascensor por las escaleras sin que nadie se lo pidiera." },
      { it: "O próximo passo é levar o programa aos jardins do centro histórico, para que os mais velhos participem sem precisar de transporte. A lista de espera já tem cem nomes.",
      es: "El siguiente paso es llevar el programa a los jardines del centro histórico, para que los mayores participen sin necesidad de transporte. La lista de espera ya tiene cien nombres." },
    ],
    words: [
      { it: "os doentes", es: "los enfermos", note: "en el portugués de Portugal se dice «doentes»; en Brasil, «pacientes»" },
      { it: "os utentes", es: "los pacientes, los usuarios", note: "«utente» es el usuario de un servicio público; en sanidad es la palabra habitual en Portugal" },
      { it: "as caminhadas", es: "las caminatas" },
      { it: "o remédio", es: "el remedio" },
      { it: "o ritmo", es: "el ritmo" },
      { it: "as escadas", es: "las escaleras" },
    ],
    questions: [
      { q: "¿De qué se quejaban muchos pacientes?", options: ["Das filas do centro de saúde", "Do preço dos comprimidos", "De cansaço, de peso a mais e de ideias negras", "Da falta de transportes"], answer: 2, why: "«Muitos doentes queixavam-se de cansaço, de peso a mais e de ideias negras»." },
      { q: "¿En qué consistió el plan de los médicos?", options: ["Em caminhadas no monte da Penha, três vezes por semana", "Em comprimidos novos importados", "Em dieta rigorosa sem sopa", "Em sessões de ginásio ao domingo"], answer: 0, why: "«Os médicos inscreveram os utentes num plano de caminhadas no monte da Penha, três vezes por semana»." },
      { q: "¿Qué es necesario para no desistir, según la médica Paula Seixas?", options: ["Que os grupos caminhem mais depressa", "Que cada pessoa encontre o seu ritmo", "Que as caminhadas sejam de manhã", "Que todos usem o mesmo calçado"], answer: 1, why: "«é preciso que cada pessoa encontre o seu ritmo, senão desiste ao fim de duas semanas»." },
      { q: "¿Por qué llevarán el programa a los jardins del centro histórico?", options: ["Porque o monte fica fechado no inverno", "Para atrair mais turistas", "Porque os jardins são mais bonitos", "Para que os mais velhos participem sem precisar de transporte"], answer: 3, why: "«para que os mais velhos participem sem precisar de transporte»." },
    ],
    discuss: [
      { it: "Caminhas, corres ou evitas o desporto? Que desculpas usas mais vezes?", es: "¿Caminas, corres o evitas el deporte? ¿Qué excusas usas más a menudo?" },
      { it: "Os médicos deviam poder receitar passeios, hortas ou aulas de música, pagados pelo serviço de saúde? Porquê?", es: "¿Deberían poder los médicos recetar paseos, huertos o clases de música, pagados por el sistema de salud? ¿Por qué?" },
    ],
  },

  /* ═══ B1 · 7 — Economia (Lousã) ═══ */
  {
    id: "pt-news-b1-07", cat: "economia", level: "B1", place: "Lousã", minutes: 3,
    title: "As aldeias do xisto querem voltar a ter crianças",
    titleEs: "Los pueblos de pizarra quieren volver a tener niños",
    lead: {
      it: "Na Lousã, as casas de pedra escura voltaram a acender chaminés. As aldeias do xisto, que perdiam habitantes havia trinta anos, viraram destino — e agora discutem como guardar as famílias.",
      es: "En Lousã, las casas de piedra oscura volvieron a encender chimeneas. Los pueblos de pizarra, que perdían habitantes desde hacía treinta años, se convirtieron en destino — y ahora discuten cómo retener a las familias.",
    },
    paragraphs: [
      { it: "Nos anos oitenta, as aldeias do xisto esvaziavam-se devagar. As escolas fechavam, os jovens partiam para a costa e as casas caíam aos bocados. Quem ficava era, quase sempre, gente de idade.",
      es: "En los años ochenta, los pueblos de pizarra se vaciaban despacio. Las escuelas cerraban, los jóvenes se marchaban a la costa y las casas se caían a pedazos. Quien se quedaba era, casi siempre, gente mayor." },
      { it: "A recuperação começou pelos telhados e pelas portas: as câmaras recuperaram as casas com materiais tradicionais, abriram trilhos para caminhantes e criaram uma marca comum para todas as aldeias.",
      es: "La recuperación empezó por los tejados y las puertas: los ayuntamientos restauraron las casas con materiales tradicionales, abrieron senderos para senderistas y crearon una marca común para todos los pueblos." },
      { it: "O turismo cresceu, mas os responsáveis perceberam que os hotéis não fazem aldeia. «Uma aldeia vive quando tem crianças», afirma o gestor Rui Figueiredo. «Por isso criamos um programa que ajuda as famílias a fixar-se.»",
      es: "El turismo creció, pero los responsables entendieron que los hoteles no hacen pueblo. «Un pueblo vive cuando tiene niños», afirma el gestor Rui Figueiredo. «Por eso creamos un programa que ayuda a las familias a establecerse.»" },
      { it: "As medidas são concretas: rendas baixas nas casas recuperadas, uma creche itinerante e apoio a quem queira abrir um pequeno negócio local. Dez famílias já assinaram contrato.",
      es: "Las medidas son concretas: alquileres bajos en las casas restauradas, una guardería itinerante y apoyo a quien quiera abrir un pequeño negocio local. Diez familias ya firmaron contrato." },
      { it: "O objetivo é que as crianças voltem a aprender os nomes das fontes e dos atalhos. O xisto aguenta o peso dos séculos; falta saber se aguenta o barulho do recreio.",
      es: "El objetivo es que los niños vuelvan a aprender los nombres de las fuentes y de los senderos. La pizarra aguanta el peso de los siglos; falta saber si aguanta el ruido del recreo." },
    ],
    words: [
      { it: "o xisto", es: "la pizarra", note: "las «aldeias do xisto» son una red de pueblos restaurados del centro de Portugal" },
      { it: "os trilhos", es: "los senderos" },
      { it: "a creche", es: "la guardería" },
      { it: "as rendas", es: "los alquileres", note: "en PT, «renda» es el alquiler; el ingreso se dice «rendimento»" },
      { it: "as crianças", es: "los niños" },
      { it: "os atalhos", es: "los atajos" },
    ],
    questions: [
      { q: "¿Qué pasaba en los años ochenta en las aldeias do xisto?", options: ["As escolas fechavam e os jovens partiam para a costa", "As aldeias recebiam milhares de turistas", "Os jovens construíam casas novas", "As escolas abriam todos os dias"], answer: 0, why: "«As escolas fechavam, os jovens partiam para a costa e as casas caíam aos bocados»." },
      { q: "¿Cuáles son las medidas concretas del programa?", options: ["Hotéis de luxo nas aldeias", "Autocarros gratuitos para a costa", "Publicidade na televisão", "Rendas baixas, uma creche itinerante e apoio a pequenos negócios"], answer: 3, why: "«rendas baixas nas casas recuperadas, uma creche itinerante e apoio a quem queira abrir um pequeno negócio local»." },
      { q: "¿Qué significa que «os hotéis não fazem aldeia»?", options: ["Que os hotéis são proibidos na região", "Que uma aldeia só vive de verdade quando tem famílias e crianças", "Que os turistas não gostam de hotéis", "Que os hotéis ganham pouco dinheiro"], answer: 1, why: "El gestor lo resume así: «Uma aldeia vive quando tem crianças»." },
      { q: "¿Cuál es el objetivo del programa para las crianças?", options: ["Que estudem todas na costa", "Que trabalhem nos hotéis", "Que voltem a aprender os nomes das fontes e dos atalhos", "Que fiquem em casa nos dias de chuva"], answer: 2, why: "«O objetivo é que as crianças voltem a aprender os nomes das fontes e dos atalhos»." },
    ],
    discuss: [
      { it: "Preferias viver numa cidade grande ou numa aldeia tranquila do interior? Justifica com três razões.", es: "¿Preferirías vivir en una ciudad grande o en un pueblo tranquilo del interior? Justifícalo con tres razones." },
      { it: "O que faz falta para que os jovens fiquem nas terras onde nasceram?", es: "¿Qué hace falta para que los jóvenes se queden en las tierras donde nacieron?" },
    ],
  },

  /* ═══ B1 · 8 — História (Tomar) ═══ */
  {
    id: "pt-news-b1-08", cat: "storia", level: "B1", place: "Tomar", minutes: 3,
    title: "Os templários deixaram um enigma de pedra em Tomar",
    titleEs: "Los templarios dejaron un enigma de piedra en Tomar",
    lead: {
      it: "Em Tomar, um convento enorme cresceu durante séculos por cima de uma fortaleza de templários. Os arqueólogos ainda discutem pormenores — e os visitantes continuam a deslumbrar-se.",
      es: "En Tomar, un enorme convento creció durante siglos sobre una fortaleza de templarios. Los arqueólogos aún discuten detalles — y los visitantes siguen deslumbrándose.",
    },
    paragraphs: [
      { it: "Os cavaleiros templários chegaram a Tomar no século doze. Escolheram uma colina sobre o rio Nabão e ergueram uma fortaleza redonda, inspirada nos edifícios sagrados que conheciam de longe.",
      es: "Los caballeros templarios llegaron a Tomar en el siglo doce. Eligieron una colina sobre el río Nabão y erigieron una fortaleza redonda, inspirada en los edificios sagrados que conocían de lejos." },
      { it: "Quando a ordem dos templários se extinguiu na Europa, em Portugal nasceu uma nova ordem que herdou o castelo. Durante quatro séculos, cada geração de monges acrescentou claustros, janelas e corredores.",
      es: "Cuando la orden de los templarios se extinguió en Europa, en Portugal nació una nueva orden que heredó el castillo. Durante cuatro siglos, cada generación de monjes añadió claustros, ventanas y pasillos." },
      { it: "A peça mais famosa é a janela do capítulo, um emaranhado de pedra com cordas, raízes e figuras que ninguém interpreta com certeza. Há quem veja símbolos de navegação; há quem defenda que é decoração.",
      es: "La pieza más famosa es la ventana del capítulo, un enredo de piedra con cuerdas, raíces y figuras que nadie interpreta con certeza. Hay quien ve símbolos de navegación; hay quien defiende que es decoración." },
      { it: "«Cada geração inventou a sua explicação», admite a historiadora Margarida Pinto. «O que sabemos é que os pedreiros trabalhavam com uma liberdade rara para a época.»",
      es: "«Cada generación inventó su explicación», admite la historiadora Margarida Pinto. «Lo que sabemos es que los canteros trabajaban con una libertad rara para la época.»" },
      { it: "O convento tornou-se património mundial e recebe meio milhão de visitantes por ano. A câmara prepara uma visita noturna, para que os turistas sintam o silêncio que os monges conheciam.",
      es: "El convento se convirtió en patrimonio de la humanidad y recibe medio millón de visitantes al año. El ayuntamiento prepara una visita nocturna, para que los turistas sientan el silencio que los monjes conocían." },
    ],
    words: [
      { it: "os templários", es: "los templarios" },
      { it: "a fortaleza", es: "la fortaleza" },
      { it: "o convento", es: "el convento" },
      { it: "os claustros", es: "los claustros" },
      { it: "os pedreiros", es: "los canteros" },
      { it: "o património mundial", es: "el patrimonio de la humanidad" },
    ],
    questions: [
      { q: "¿Dónde erigieron los templarios su fortaleza?", options: ["Junto ao mar, na costa", "Numa colina sobre o rio Nabão", "No centro do Porto", "Nas montanhas do Gerês"], answer: 1, why: "«Escolheram uma colina sobre o rio Nabão e ergueram uma fortaleza redonda»." },
      { q: "¿Qué ocurrió cuando la orden de los templarios se extinguió?", options: ["O castelo foi imediatamente abandonado", "Os monges venderam a fortaleza à coroa", "Em Portugal nasceu uma nova ordem que herdou o castelo", "O castelo virou paço real"], answer: 2, why: "«Quando a ordem dos templários se extinguiu na Europa, em Portugal nasceu uma nova ordem que herdou o castelo»." },
      { q: "¿Qué se dice de la janela do capítulo?", options: ["Ninguém a interpreta com certeza", "Que é fácil de explicar", "Que foi construída no século vinte", "Que não tem nenhuma decoração"], answer: 0, why: "«um emaranhado de pedra com cordas, raízes e figuras que ninguém interpreta com certeza»." },
      { q: "¿Con qué finalidad se prepara la visita nocturna?", options: ["Para aumentar o preço dos bilhetes", "Para evitar a multidão da manhã", "Para filmar um documentário", "Para que os turistas sintam o silêncio que os monges conheciam"], answer: 3, why: "«A câmara prepara uma visita noturna, para que os turistas sintam o silêncio que os monges conheciam»." },
    ],
    discuss: [
      { it: "Gostas de visitar castelos e conventos? Qual te marcou mais e porquê?", es: "¿Te gusta visitar castillos y conventos? ¿Cuál te marcó más y por qué?" },
      { it: "Os enigmas históricos, como a janela de Tomar, devem ser explicados com uma teoria oficial ou deixados abertos? Discute.", es: "Los enigmas históricos, como la ventana de Tomar, ¿deben explicarse con una teoría oficial o dejarse abiertos? Discútelo." },
    ],
  },

  /* ═══ B1 · 9 — Sociedade (Leiria) ═══ */
  {
    id: "pt-news-b1-09", cat: "societa", level: "B1", place: "Leiria", minutes: 3,
    title: "Os avós de Leiria voltaram às salas de aula",
    titleEs: "Los abuelos de Leiria volvieron a las aulas",
    lead: {
      it: "Em Leiria, dezenas de avós entram nas escolas para ler histórias em voz alta. Os professores chamam-lhes «leitores de bolso»; os meninos tratam-nos por tu desde o primeiro dia.",
      es: "En Leiria, decenas de abuelos entran en las escuelas para leer historias en voz alta. Los profesores los llaman «lectores de bolsillo»; los niños les tutean desde el primer día.",
    },
    paragraphs: [
      { it: "O programa começou pequeno: oito voluntários, um agrupamento escolar, uma hora por semana. Os professores pediam aos avós histórias verdadeiras e tempo para as contar.",
      es: "El programa empezó pequeño: ocho voluntarios, un centro escolar, una hora por semana. Los profesores pedían a los abuelos historias verdaderas y tiempo para contarlas." },
      { it: "A resposta ultrapassou as expectativas: inscreveram-se sessenta avós no primeiro semestre. Uns liam contos antigos; outros contavam a vida nas aldeias, as feiras de outrora e os jogos de rua que os netos já não conhecem.",
      es: "La respuesta superó las expectativas: se inscribieron sesenta abuelos en el primer semestre. Unos leían cuentos antiguos; otros contaban la vida en las aldeas, las ferias de antaño y los juegos de calle que los nietos ya no conocen." },
      { it: "«Um avô é uma biblioteca ambulante», diz a coordenadora Susana Amorim. «É importante que os meninos percebam que os mais velhos também foram crianças.»",
      es: "«Un abuelo es una biblioteca ambulante», dice la coordinadora Susana Amorim. «Es importante que los niños entiendan que los mayores también fueron niños.»" },
      { it: "Os efeitos apareceram nas duas turmas piloto: as crianças chegaram a escrever cartas aos «seus» leitores e duas famílias passaram a jantar sem telemóveis, por imitação dos avós.",
      es: "Los efectos aparecieron en las dos aulas piloto: los niños llegaron a escribir cartas a «sus» lectores y dos familias empezaron a cenar sin móviles, por imitación de los abuelos." },
      { it: "No próximo ano letivo, o programa vai chegar a todas as escolas do concelho. O único requisito é ter tempo e vontade; a voz, garantem os professores, afina-se sozinha.",
      es: "El próximo curso, el programa llegará a todas las escuelas del municipio. El único requisito es tener tiempo y ganas; la voz, garantizan los profesores, se afina sola." },
    ],
    words: [
      { it: "o avô", es: "el abuelo", note: "avô (con circunflejo) = abuelo; avó (sin él) = abuela: el tilde cambia el sonido y el significado" },
      { it: "os voluntários", es: "los voluntarios" },
      { it: "os contos", es: "los cuentos" },
      { it: "os netos", es: "los nietos" },
      { it: "a biblioteca", es: "la biblioteca" },
      { it: "as cartas", es: "las cartas" },
    ],
    questions: [
      { q: "¿Cómo empezó el programa de lectura?", options: ["Com oito voluntários, um agrupamento escolar e uma hora por semana", "Com cem avós em todas as escolas", "Só com professores reformados", "Com uma biblioteca móvel nova"], answer: 0, why: "«O programa começou pequeno: oito voluntários, um agrupamento escolar, uma hora por semana.»" },
      { q: "¿Qué hacían algunos abuelos en las aulas?", options: ["Distribuíam livros pelos corredores", "Liam contos antigos e contavam a vida nas aldeias", "Davam aulas de matemática", "Organizavam jogos de rua no pátio"], answer: 1, why: "«Uns liam contos antigos; outros contavam a vida nas aldeias, as feiras de outrora e os jogos de rua»." },
      { q: "¿Qué quiere decir «um avô é uma biblioteca ambulante»?", options: ["Que os avós emprestam livros aos meninos", "Que os avós leem mais depressa do que os jovens", "Que os avós guardam histórias e memórias que podem partilhar", "Que as bibliotecas vão desaparecer"], answer: 2, why: "Porque un abuelo guarda y comparte historias: «Um avô é uma biblioteca ambulante»." },
      { q: "¿Cuál es el único requisito para participar?", options: ["Saber contar histórias de memória", "Ser professor reformado", "Ter netos na escola", "Ter tempo e vontade"], answer: 3, why: "«O único requisito é ter tempo e vontade; a voz, garantem os professores, afina-se sozinha.»" },
    ],
    discuss: [
      { it: "Quem te lia histórias em pequeno? Que história recordas melhor?", es: "¿Quién te leía historias de pequeño? ¿Qué historia recuerdas mejor?" },
      { it: "Os avós deviam entrar nas escolas para contar histórias de vida? Que podiam aprender os meninos com eles?", es: "¿Deberían los abuelos entrar en las escuelas para contar historias de vida? ¿Qué podrían aprender los niños con ellos?" },
    ],
  },

  /* ═══ B1 · 10 — Ambiente (Mértola) ═══ */
  {
    id: "pt-news-b1-10", cat: "ambiente", level: "B1", place: "Mértola", minutes: 3,
    title: "O lince-ibérico regressou ao vale do Guadiana",
    titleEs: "El lince ibérico volvió al valle del Guadiana",
    lead: {
      it: "Depois de décadas de ausência, os linces voltaram a caçar nos montes de Mértola. Os técnicos soltaram os primeiros animais há poucos anos; agora nascem cá as crias.",
      es: "Después de décadas de ausencia, los linces volvieron a cazar en las sierras de Mértola. Los técnicos soltaron los primeros animales hace pocos años; ahora nacen allí las crías.",
    },
    paragraphs: [
      { it: "Há cinquenta anos, o lince-ibérico desaparecia de Portugal. Restavam poucos exemplares no sul, a caça ilegal dizimava as presas e as matas estavam cada vez mais vazias.",
      es: "Hace cincuenta años, el lince ibérico desaparecía de Portugal. Quedaban pocos ejemplares en el sur, la caza ilegal diezmaba las presas y los bosques estaban cada vez más vacíos." },
      { it: "O caminho de volta começou em Espanha e entrou pelo Alentejo. Os técnicos escolheram o vale do Guadiana, junto a Mértola, porque a água e os matos sustentam coelhos em abundância. Soltaram os primeiros animais numa manhã de inverno.",
      es: "El camino de regreso empezó en España y entró por el Alentejo. Los técnicos eligieron el valle del Guadiana, junto a Mértola, porque el agua y las malezas sostienen conejos en abundancia. Soltaron los primeros animales en una mañana de invierno." },
      { it: "Os resultados chegaram sem pressa. Os rastros multiplicaram-se, as armadilhas fotográficas registaram fêmeas com crias e, no ano passado, os cientistas confirmaram o nascimento de várias ninhadas em liberdade.",
      es: "Los resultados llegaron sin prisa. Los rastros se multiplicaron, las cámaras trampa registraron hembras con crías y, el año pasado, los científicos confirmaron el nacimiento de varias camadas en libertad." },
      { it: "«O lince não pede muito: quer coelhos, água e sossego», explica a bióloga Catarina Rocha. «É fundamental que os agricultores nos ajudem a guardar essas três coisas.»",
      es: "«El lince no pide mucho: quiere conejos, agua y tranquilidad», explica la bióloga Catarina Rocha. «Es fundamental que los agricultores nos ayuden a guardar esas tres cosas.»" },
      { it: "O concelho prepara agora um centro de interpretação, para que os visitantes conheçam o lince sem o incomodar. A estrela nova do Baixo Alentejo, dizem os moradores, caça de novo como há cem anos.",
      es: "El municipio prepara ahora un centro de interpretación, para que los visitantes conozcan al lince sin molestarlo. La nueva estrella del Bajo Alentejo, dicen los habitantes, caza de nuevo como hace cien años." },
    ],
    words: [
      { it: "o lince-ibérico", es: "el lince ibérico" },
      { it: "as presas", es: "las presas (de caza)", note: "en PT, «presa» es el animal cazado; la presa de un río se dice «barragem»" },
      { it: "os rastros", es: "los rastros, las huellas" },
      { it: "as armadilhas fotográficas", es: "las cámaras trampa" },
      { it: "os coelhos", es: "los conejos" },
      { it: "as ninhadas", es: "las camadas" },
    ],
    questions: [
      { q: "¿Por qué eligieron los técnicos el valle del Guadiana?", options: ["Porque fica perto de Lisboa", "Porque a água e os matos sustentam coelhos em abundância", "Porque lá não há agricultores", "Porque o clima é mais frio"], answer: 1, why: "«Os técnicos escolheram o vale do Guadiana, junto a Mértola, porque a água e os matos sustentam coelhos em abundância»." },
      { q: "¿Qué registraron las cámaras trampa?", options: ["Fêmeas com crias", "Caçadores ilegais", "Animais doentes", "Nada de novo"], answer: 0, why: "«as armadilhas fotográficas registaram fêmeas com crias»." },
      { q: "¿Qué tres cosas necesita el lince, según la bióloga?", options: ["Florestas densas, frio e silêncio", "Turistas, cercas e comida", "Carne, sal e sombra", "Coelhos, água e sossego"], answer: 3, why: "«O lince não pede muito: quer coelhos, água e sossego»." },
      { q: "¿Con qué objetivo se prepara el centro de interpretación?", options: ["Para criar linces em cativeiro", "Para vender bilhetes mais caros", "Para que os visitantes conheçam o lince sem o incomodar", "Para substituir as visitas ao campo"], answer: 2, why: "«O concelho prepara agora um centro de interpretação, para que os visitantes conheçam o lince sem o incomodar»." },
    ],
    discuss: [
      { it: "Já viste um animal selvagem raro na natureza? Como foi o momento?", es: "¿Has visto alguna vez un animal salvaje raro en la naturaleza? ¿Cómo fue el momento?" },
      { it: "Devem-se soltar mais animais em liberdade, mesmo onde há aldeias e agricultores? Porquê?", es: "¿Se deberían soltar más animales en libertad, incluso donde hay pueblos y agricultores? ¿Por qué?" },
    ],
  },

  /* ═══ B1 · 11 — Economia (Matosinhos) ═══ */
  {
    id: "pt-news-b1-11", cat: "economia", level: "B1", place: "Matosinhos", minutes: 3,
    title: "A sardinha em lata conquistou os jovens (e o mundo)",
    titleEs: "La sardina en lata conquistó a los jóvenes (y al mundo)",
    lead: {
      it: "Em Matosinhos, as conserveiras antigas voltaram a encher as fábricas. A geração que desprezava a lata redescobriu-a — primeiro no estrangeiro, depois em casa.",
      es: "En Matosinhos, las conserveras antiguas volvieron a llenar las fábricas. La generación que despreciaba la lata la redescubrió — primero en el extranjero, después en casa.",
    },
    paragraphs: [
      { it: "Durante décadas, a conserva foi comida de despensa: barata, discreta, esquecida. As fábricas fechavam uma atrás da outra e os mestres conserveiros aposentavam-se sem alunos.",
      es: "Durante décadas, la conserva fue comida de despensa: barata, discreta, olvidada. Las fábricas cerraban una tras otra y los maestros conserveros se jubilaban sin aprendices." },
      { it: "A viragem começou nos mercados estrangeiros. Compradores de países sem mar pagavam bem pela sardinha portuguesa; as empresas recuperaram receitas antigas, trocaram o óleo por azeite e chamaram ilustradores para redesenhar as etiquetas.",
      es: "El giro empezó en los mercados extranjeros. Compradores de países sin mar pagaban bien por la sardina portuguesa; las empresas recuperaron recetas antiguas, cambiaron el aceite por aceite de oliva y llamaron a ilustradores para rediseñar las etiquetas." },
      { it: "«O produto é o mesmo de há cinquenta anos; mudou a forma de o contar», afirma a gestora Ana Bastos. «Queremos que os jovens vejam uma lata bonita e fiquem curiosos.»",
      es: "«El producto es el mismo de hace cincuenta años; cambió la forma de contarlo», afirma la gestora Ana Bastos. «Queremos que los jóvenes vean una lata bonita y se queden curiosos.»" },
      { it: "Os números confirmaram a aposta: as exportações bateram recordes, três fábricas reabriram na região e os cursos de mestre conserveiro voltaram a ter lista de espera.",
      es: "Los números confirmaron la apuesta: las exportaciones batieron récords, tres fábricas reabrieron en la región y los cursos de maestro conservero volvieron a tener lista de espera." },
      { it: "O desafio seguinte é o mar: para que a fileira sobreviva, é preciso que as capturas respeitem os limites. A sardinha, dizem os patrões velhos, ensina paciência.",
      es: "El siguiente desafío es el mar: para que el sector sobreviva, es necesario que las capturas respeten los límites. La sardina, dicen los patrones viejos, enseña paciencia." },
    ],
    words: [
      { it: "a conserva", es: "la conserva", note: "en PT es la palabra normal para el pescado enlatado; «em conserva» = en conserva" },
      { it: "as fábricas", es: "las fábricas" },
      { it: "o azeite", es: "el aceite de oliva" },
      { it: "as etiquetas", es: "las etiquetas" },
      { it: "as exportações", es: "las exportaciones" },
      { it: "a lata", es: "la lata" },
    ],
    questions: [
      { q: "¿Cómo se veía la conserva durante décadas?", options: ["Como produto de luxo", "Como comida de festa", "Como comida de despensa: barata, discreta, esquecida", "Como medicinal caseiro"], answer: 2, why: "«a conserva foi comida de despensa: barata, discreta, esquecida»." },
      { q: "¿Qué cambios hicieron las empresas?", options: ["Recuperaram receitas antigas, trocaram o óleo por azeite e redesenharam as etiquetas", "Baixaram os preços e nada mais", "Fecharam todas as fábricas antigas", "Passaram a vender só para Portugal"], answer: 0, why: "«as empresas recuperaram receitas antigas, trocaram o óleo por azeite e chamaram ilustradores para redesenhar as etiquetas»." },
      { q: "Según la gestora, ¿qué mudó?", options: ["O tamanho da lata", "A forma de contar o produto", "O nome das marcas", "O sabor da sardinha"], answer: 1, why: "«O produto é o mesmo de há cinquenta anos; mudou a forma de o contar»." },
      { q: "¿Qué es necesario para que la industria sobreviva?", options: ["Que as latas fiquem mais baratas", "Que a sardinha seja importada", "Que as fábricas fechem ao domingo", "Que as capturas respeitem os limites"], answer: 3, why: "«para que a fileira sobreviva, é preciso que as capturas respeitem os limites»." },
    ],
    discuss: [
      { it: "Tinhas uma despensa com latas em casa? Que comida te lembra a infância?", es: "¿Tenías una despensa con latas en casa? ¿Qué comida te recuerda la infancia?" },
      { it: "O desenho das embalagens muda o sabor do que comemos? Discute com exemplos.", es: "¿El diseño de los envases cambia el sabor de lo que comemos? Discútelo con ejemplos." },
    ],
  },

  /* ═══ B1 · 12 — Ciência (Porto) ═══ */
  {
    id: "pt-news-b1-12", cat: "scienza", level: "B1", place: "Porto", minutes: 3,
    title: "Falar duas línguas treina o cérebro, diz estudo do Porto",
    titleEs: "Hablar dos idiomas entrena el cerebro, dice un estudio de Oporto",
    lead: {
      it: "Investigadores da Universidade do Porto seguiram centenas de pessoas durante sete anos. A conclusão: quem fala duas línguas desde criança resiste melhor ao tempo.",
      es: "Investigadores de la Universidad de Oporto siguieron a cientos de personas durante siete años. La conclusión: quien habla dos idiomas desde niño resiste mejor al paso del tiempo.",
    },
    paragraphs: [
      { it: "Durante muito tempo, acreditou-se que o bilinguismo confundia as crianças e atrasava a escola. Os estudos antigos comparavam resultados sem olhar para a idade em que os meninos tinham aprendido a segunda língua.",
      es: "Durante mucho tiempo, se creyó que el bilingüismo confundía a los niños y retrasaba la escuela. Los estudios antiguos comparaban resultados sin mirar la edad en la que los niños habían aprendido la segunda lengua." },
      { it: "A equipa do Porto seguiu um caminho diferente: comparou adultos com o mesmo nível de escolaridade e mediu a rapidez com que mudavam de tarefa. Os bilíngues mudavam mais depressa e cometiam menos erros.",
      es: "El equipo de Oporto siguió un camino diferente: comparó adultos con el mismo nivel de estudios y midió la rapidez con la que cambiaban de tarea. Los bilingües cambiaban más rápido y cometían menos errores." },
      { it: "«Duas línguas são dois armários de ideias que se abrem ao mesmo tempo», explica o neurocientista Vasco Teixeira. «Essa ginástica mental parece proteger a memória.»",
      es: "«Dos idiomas son dos armarios de ideas que se abren al mismo tiempo», explica el neurocientífico Vasco Teixeira. «Ese ejercicio mental parece proteger la memoria.»" },
      { it: "Os investigadores defendem que as escolas comecem as línguas estrangeiras mais cedo e que as famílias mantenham a língua de casa sem medo. Embora o estudo seja recente, os resultados apontam na mesma direção.",
      es: "Los investigadores defienden que las escuelas empiecen las lenguas extranjeras más pronto y que las familias mantengan la lengua de casa sin miedo. Aunque el estudio es reciente, los resultados apuntan en la misma dirección." },
      { it: "A próxima fase vai observar irmãos gémeos educados de forma diferente. O objetivo é separar o efeito da língua do efeito da genética, um enigma que ainda dá que falar.",
      es: "La próxima fase observará a hermanos gemelos educados de forma diferente. El objetivo es separar el efecto de la lengua del efecto de la genética, un enigma que aún da que hablar." },
    ],
    words: [
      { it: "o bilinguismo", es: "el bilingüismo" },
      { it: "a língua", es: "la lengua, el idioma" },
      { it: "a tarefa", es: "la tarea" },
      { it: "os erros", es: "los errores" },
      { it: "a memória", es: "la memoria" },
      { it: "os gémeos", es: "los gemelos", note: "se pronuncia «guémeyus»; la g inicial es fricativa, no explosiva" },
    ],
    questions: [
      { q: "¿Qué se creyó durante mucho tiempo sobre el bilingüismo?", options: ["Que confundia as crianças e atrasava a escola", "Que deixava as crianças mais inteligentes", "Que só funcionava com o inglês", "Que era obrigatório em toda a Europa"], answer: 0, why: "«acreditou-se que o bilinguismo confundia as crianças e atrasava a escola»." },
      { q: "¿Qué midió el equipo de Oporto?", options: ["O número de palavras que cada pessoa conhecia", "A altura e o peso dos voluntários", "A rapidez com que mudavam de tarefa", "As notas escolares dos filhos"], answer: 2, why: "«mediu a rapidez com que mudavam de tarefa»." },
      { q: "¿Qué significa la metáfora de los «dois armários de ideias»?", options: ["Que os bilíngues têm memória fraca", "Que as duas línguas ficam ativas ao mesmo tempo", "Que é preciso arrumar as ideias por ordem", "Que os idiomas se atrapalham uns aos outros"], answer: 1, why: "«Duas línguas são dois armários de ideias que se abrem ao mesmo tempo»." },
      { q: "¿Qué defienden los investigadores para las escuelas?", options: ["Que as aulas de línguas sejam opcionais", "Que só os adultos estudem idiomas", "Que as famílias falem só português em casa", "Que as escolas comecem as línguas estrangeiras mais cedo"], answer: 3, why: "«Os investigadores defendem que as escolas comecem as línguas estrangeiras mais cedo»." },
    ],
    discuss: [
      { it: "Aprender línguas é um treino para o cérebro ou uma perda de tempo? Que benefícios sentiste tu?", es: "¿Aprender idiomas es un entrenamiento para el cerebro o una pérdida de tiempo? ¿Qué beneficios has sentido tú?" },
      { it: "Devem as escolas começar as línguas estrangeiras no primeiro ano? Que línguas escolherias e porquê?", es: "¿Deberían las escuelas empezar las lenguas extranjeras en el primer curso? ¿Qué idiomas elegirías y por qué?" },
    ],
  },

  /* ═══ B1 · 13 — Desporto (Paredes) ═══ */
  {
    id: "pt-news-b1-13", cat: "sport", level: "B1", place: "Paredes", minutes: 3,
    title: "Em Paredes, o hóquei em patins passa de pais para filhos",
    titleEs: "En Paredes, el hockey patines pasa de padres a hijos",
    lead: {
      it: "Paredes não tem mar nem montanha alta, mas tem pavilhões cheios ao fim de semana. O hóquei em patins, que em muitos países ninguém conhece, é ali desporto de família.",
      es: "Paredes no tiene mar ni montaña alta, pero tiene pabellones llenos el fin de semana. El hockey patines, que en muchos países nadie conoce, es allí deporte de familia.",
    },
    paragraphs: [
      { it: "Há trinta anos, os pais dos atuais jogadores enchiam as mesmas bancadas. A vila vivia o hóquei como outras vivem o futebol: os miúdos trocavam os cadernos pelos patins mal a escola fechava.",
      es: "Hace treinta años, los padres de los actuales jugadores llenaban las mismas gradas. La villa vivía el hockey como otras viven el fútbol: los chavales cambiaban los cuadernos por los patines nada más cerrar la escuela." },
      { it: "A crise levou alguns clubes ao encerramento, mas a escola de hóquei sobreviveu: inscreveram-se mais de duzentas crianças e metade são raparigas.",
      es: "La crisis llevó a algunos clubes al cierre, pero la escuela de hockey sobrevivió: se inscribieron más de doscientos niños y la mitad son chicas." },
      { it: "«Antes diziam que o hóquei era só para meninos», conta a treinadora Sónia Ribeiro. «Nós queremos é que as crianças se divirtam; a vitória vem depois.»",
      es: "«Antes decían que el hockey era solo para chicos», cuenta la entrenadora Sónia Ribeiro. «Nosotras queremos que los niños se diviertan; la victoria viene después.»" },
      { it: "Os resultados desportivos apareceram sem pressa: as camadas jovens ganharam torneios nacionais e dois jogadores da terra estrearam-se na seleção. O pavilhão municipal, antes silencioso às terças, voltou a ter fila à porta.",
      es: "Los resultados deportivos llegaron sin prisa: las categorías juveniles ganaron torneos nacionales y dos jugadores de la tierra debutaron en la selección. El pabellón municipal, antes silencioso los martes, volvió a tener cola en la puerta." },
      { it: "O clube prepara agora um torneio de veteranos, para que os pais voltem a patinar com os filhos. A regra da casa é antiga: quem entra no pavilhão, joga.",
      es: "El club prepara ahora un torneo de veteranos, para que los padres vuelvan a patinar con los hijos. La regla de la casa es antigua: quien entra en el pabellón, juega." },
    ],
    words: [
      { it: "o hóquei em patins", es: "el hockey patines", note: "deporte muy popular en Portugal; se juega con bola, no con disco" },
      { it: "as bancadas", es: "las gradas" },
      { it: "os patins", es: "los patines" },
      { it: "as crianças", es: "los niños" },
      { it: "o pavilhão", es: "el pabellón" },
      { it: "a seleção", es: "la selección" },
    ],
    questions: [
      { q: "¿Cómo vivía Paredes el hockey hace treinta años?", options: ["Como um desporto importado", "Como outras vilas vivem o futebol", "Como uma novidade estranha", "Como um desporto só para adultos"], answer: 1, why: "«A vila vivia o hóquei como outras vivem o futebol»." },
      { q: "¿Cuántos niños se inscribieron en la escuela de hockey?", options: ["Mais de duzentas, e metade são raparigas", "Cinquenta, todas meninos", "Umas dezenas, sem raparigas", "Nenhuma, porque a escola fechou"], answer: 0, why: "«inscreveram-se mais de duzentas crianças e metade são raparigas»." },
      { q: "¿Qué quieren las entrenadoras antes de la victoria?", options: ["Que os miúdos treinem todos os dias", "Que os jogos sejam televisionados", "Que os pais patinem também", "Que as crianças se divirtam"], answer: 3, why: "«Nós queremos é que as crianças se divirtam; a vitória vem depois»." },
      { q: "¿Con qué finalidad organizan el torneo de veteranos?", options: ["Para ganhar dinheiro para o clube", "Para lembrar antigos rivais", "Para que os pais voltem a patinar com os filhos", "Para fechar o pavilhão no verão"], answer: 2, why: "«O clube prepara agora um torneio de veteranos, para que os pais voltem a patinar com os filhos»." },
    ],
    discuss: [
      { it: "Qual é o desporto da tua terra? Como se vive lá uma final?", es: "¿Cuál es el deporte de tu tierra? ¿Cómo se vive allí una final?" },
      { it: "No desporto de crianças, o que vale mais: divertir-se ou ganhar? Até onde deve ir a competição?", es: "En el deporte infantil, ¿qué vale más: divertirse o ganar? ¿Hasta dónde debe llegar la competición?" },
    ],
  },

  /* ═══ B1 · 14 — História (Almeida) ═══ */
  {
    id: "pt-news-b1-14", cat: "storia", level: "B1", place: "Almeida", minutes: 3,
    title: "Almeida, a fortaleza com forma de estrela",
    titleEs: "Almeida, la fortaleza con forma de estrella",
    lead: {
      it: "Vista do céu, a praça de Almeida parece um sol de pedra com doze pontas. A vila da fronteira guarda a maior fortaleza em estrela do país — e os segredos de quem a construiu.",
      es: "Vista desde el cielo, la plaza de Almeida parece un sol de piedra con doce puntas. La villa fronteriza guarda la mayor fortaleza en estrella del país — y los secretos de quienes la construyeron.",
    },
    paragraphs: [
      { it: "A fortaleza medieval, quadrada, não resistia à artilharia nova. Entre os séculos dezassete e dezoito, os engenheiros militares redesenharam tudo: muralhas baixas e grossas, em forma de estrela, difíceis de acertar e fáceis de defender.",
      es: "La fortaleza medieval, cuadrada, no resistía a la nueva artillería. Entre los siglos diecisiete y dieciocho, los ingenieros militares lo rediseñaron todo: murallas bajas y gruesas, en forma de estrella, difíciles de acertar y fáciles de defender." },
      { it: "Sob a vila cresceu uma cidade subterrânea: casernas, armazéns e túneis onde os soldados se moviam sem serem vistos. Os guias garantem que, no inverno, a temperatura lá no fundo não passa dos dez graus.",
      es: "Bajo la villa creció una ciudad subterránea: cuarteles, almacenes y túneles donde los soldados se movían sin ser vistos. Los guías garantizan que, en invierno, la temperatura allá abajo no pasa de los diez grados." },
      { it: "«Cada pedra aqui tem função e história», explica o guia Fernando Bastos. «Quando os visitantes percebem a lógica da estrela, o labirinto passa a ser um mapa.»",
      es: "«Cada piedra aquí tiene función e historia», explica el guía Fernando Bastos. «Cuando los visitantes entienden la lógica de la estrella, el laberinto pasa a ser un mapa.»" },
      { it: "Durante o século vinte, a fortaleza adormeceu: as casas esvaziavam-se e os fossos serviam de hortas. A classificação como monumento nacional trouxe verbas, e as muralhas recuperaram o aspecto original, pedra por pedra.",
      es: "Durante el siglo veinte, la fortaleza se durmió: las casas se vaciaban y los fosos servían de huertos. La clasificación como monumento nacional trajo fondos, y las murallas recuperaron el aspecto original, piedra por piedra." },
      { it: "Hoje há visitas teatralizadas e uma festa da muralha em agosto. Para que a estrela continue viva, é preciso que os jovens fiquem — e alguns já abriram cafés dentro das casernas.",
      es: "Hoy hay visitas teatralizadas y una fiesta de la muralla en agosto. Para que la estrella siga viva, es necesario que los jóvenes se queden — y algunos ya abrieron cafés dentro de los cuarteles." },
    ],
    words: [
      { it: "a fortaleza", es: "la fortaleza" },
      { it: "as muralhas", es: "las murallas" },
      { it: "os túneis", es: "los túneles" },
      { it: "as casernas", es: "los cuarteles" },
      { it: "os fossos", es: "los fosos" },
      { it: "o guia", es: "el guía", note: "o guia = el guía (persona); a guia = la guía (documento)" },
    ],
    questions: [
      { q: "¿Por qué se rediseñó la fortaleza medieval?", options: ["Porque os reis gostavam de estrelas", "Porque a vila cresceu demais", "Porque a fortaleza quadrada não resistia à artilharia nova", "Porque as pedras antigas eram fracas"], answer: 2, why: "«A fortaleza medieval, quadrada, não resistia à artilharia nova»." },
      { q: "¿Qué creció bajo la villa?", options: ["Uma cidade subterrânea com casernas, armazéns e túneis", "Uma linha de comboio escondida", "Um rio subterrâneo", "Minas de ouro antigas"], answer: 0, why: "«Sob a vila cresceu uma cidade subterrânea: casernas, armazéns e túneis»." },
      { q: "Según el guía, ¿qué pasa cuando se entiende la lógica de la estrella?", options: ["Os visitantes perdem-se mais depressa", "O labirinto passa a ser um mapa", "As visitas ficam mais curtas", "As muralhas parecem mais altas"], answer: 1, why: "«Quando os visitantes percebem a lógica da estrela, o labirinto passa a ser um mapa»." },
      { q: "¿Qué hace falta para que «a estrela continue viva»?", options: ["Que as muralhas fiquem mais altas", "Que os turistas visitem só em agosto", "Que os cafés fechem à noite", "Que os jovens fiquem na vila"], answer: 3, why: "«Para que a estrela continue viva, é preciso que os jovens fiquem»." },
    ],
    discuss: [
      { it: "Prefieres fortalezas, palácios ou ruínas antigas? Porquê?", es: "¿Prefieres fortalezas, palacios o ruinas antiguas? ¿Por qué?" },
      { it: "Como se convence uma pessoa jovem a ficar numa vila histórica? Que ideias sugerias tu?", es: "¿Cómo se convence a una persona joven para quedarse en una villa histórica? ¿Qué ideas sugerías tú?" },
    ],
  },

  /* ═══ B1 · 15 — Cultura (Barcelos) ═══ */
  {
    id: "pt-news-b1-15", cat: "cultura", level: "B1", place: "Barcelos", minutes: 3,
    title: "O galo de Barcelos aprende cores novas",
    titleEs: "El gallo de Barcelos aprende colores nuevos",
    lead: {
      it: "O galo de cerâmica é um símbolo de Portugal, mas em Barcelos não parou no tempo. As oficinas antigas ensinam o ofício aos netos — e os netos trazem ideias novas.",
      es: "El gallo de cerámica es un símbolo de Portugal, pero en Barcelos no se quedó en el tiempo. Los talleres antiguos enseñan el oficio a los nietos — y los nietos traen ideas nuevas.",
    },
    paragraphs: [
      { it: "A lenda conta que um galo morto cantou para salvar um peregrino injustamente acusado. Durante séculos, o galo pintado foi sobretudo preto: os oleiros faziam-no à mão, cada um com o seu traço.",
      es: "La leyenda cuenta que un gallo muerto cantó para salvar a un peregrino injustamente acusado. Durante siglos, el gallo pintado fue sobre todo negro: los alfareros lo hacían a mano, cada uno con su trazo." },
      { it: "O século vinte transformou o galo em lembrança de feira: os moldes substituíram o torno e as famílias de oleiros diminuíram de dezenas para meia dúzia.",
      es: "El siglo veinte transformó el gallo en recuerdo de feria: los moldes sustituyeron al torno y las familias de alfareros disminuyeron de decenas a media docena." },
      { it: "«Meu avô dizia que o galo tem de parecer que está a cantar», explica a ceramista Beatriz Novais. «Queremos que os clientes sintam isso quando pegam numa peça.»",
      es: "«Mi abuelo decía que el gallo tiene que parecer que está cantando», explica la ceramista Beatriz Novais. «Queremos que los clientes lo sientan cuando cogen una pieza.»" },
      { it: "A nova geração recuperou o torno e abriu a paleta: há galos azuis, verdes e dourados ao lado dos pretos. As encomendas chegam de meio mundo e os vídeos do fabrico, pincelada a pincelada, fizeram sucesso.",
      es: "La nueva generación recuperó el torno y abrió la paleta: hay gallos azules, verdes y dorados junto a los negros. Los encargos llegan de medio mundo y los vídeos de la fabricación, pincelada a pincelada, tuvieron éxito." },
      { it: "A câmara prepara um museu do galo, para que a lenda e o ofício tenham casa própria. O pássaro, dizem os oleiros, já cantou em muitas línguas — e não pensa parar.",
      es: "El ayuntamiento prepara un museo del gallo, para que la leyenda y el oficio tengan casa propia. El pájaro, dicen los alfareros, ya cantó en muchas lenguas — y no piensa parar." },
    ],
    words: [
      { it: "o galo", es: "el gallo", note: "o galo de Barcelos es el recuerdo típico de Portugal, símbolo de buena suerte" },
      { it: "a lenda", es: "la leyenda" },
      { it: "os oleiros", es: "los alfareros" },
      { it: "o torno", es: "el torno (de alfarero)" },
      { it: "a peça", es: "la pieza" },
      { it: "as encomendas", es: "los encargos, los pedidos" },
    ],
    questions: [
      { q: "¿Qué cuenta la leyenda del gallo de Barcelos?", options: ["Um galo morto cantou para salvar um peregrino injustamente acusado", "Um galo guiou um rei perdido", "Um galo ganhou uma corrida", "Um galo deixou Barcelos e voltou rico"], answer: 0, why: "«A lenda conta que um galo morto cantou para salvar um peregrino injustamente acusado»." },
      { q: "¿Qué ocurrió con el oficio en el siglo veinte?", options: ["O torno substituiu os moldes", "Os moldes substituíram o torno e as famílias de oleiros diminuíram", "As oficinas exportaram tudo para Espanha", "O galo deixou de ser produzido"], answer: 1, why: "«os moldes substituíram o torno e as famílias de oleiros diminuíram de dezenas para meia dúzia»." },
      { q: "¿Qué regla dejó el abuelo de la ceramista?", options: ["Que o galo é sempre preto", "Que cada peça vale muito dinheiro", "Que o galo tem de parecer que está a cantar", "Que o torno não se pode tocar"], answer: 2, why: "«Meu avô dizia que o galo tem de parecer que está a cantar»." },
      { q: "¿Para qué servirá el museo del gallo?", options: ["Para vender galos mais baratos", "Para substituir as oficinas antigas", "Para guardar apenas os moldes antigos", "Para que a lenda e o ofício tenham casa própria"], answer: 3, why: "«A câmara prepara um museu do galo, para que a lenda e o ofício tenham casa própria»." },
    ],
    discuss: [
      { it: "Há um objeto artesanal que te lembre a tua família ou a tua região? Descreve-o.", es: "¿Hay algún objeto artesanal que te recuerde a tu familia o a tu región? Descríbelo." },
      { it: "As tradições devem mudar com o tempo ou ficar sempre iguais? Usa o exemplo do galo de Barcelos.", es: "¿Las tradiciones deben cambiar con el tiempo o quedarse siempre iguales? Usa el ejemplo del gallo de Barcelos." },
    ],
  },
];
