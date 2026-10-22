/* ── PT · Notícias B2 · bloco B (v9.39) ────────────────────────────────
   Português europeu (Portugal), nível B2, método VOA Learning English.
   12 notícias novas (pt-news-b2-04 … pt-news-b2-15) que se juntam às 3
   da base (news-b.ts) → 15 notícias de B2. Corpo: 4-5 parágrafos, 195-255
   palavras, condicional + conjuntivo + discurso indireto. Léxico PT de
   Portugal (nunca formas do Brasil). Campos `.it` = português (língua de
   estudo), `.es` = espanhol. */

import type { NewsItem } from "../../news";

export const PT_NEWS_B2B: NewsItem[] = [

  /* ═══ B2 · 4 — Tecnologia (Ílhavo) ═══ */
  {
    id: "pt-news-b2-04", cat: "tecnologia", level: "B2", place: "Ílhavo", minutes: 4,
    title: "Drones e inteligência artificial contam as aves da Ria de Aveiro",
    titleEs: "Drones e inteligencia artificial cuentan las aves de la Ría de Aveiro",
    lead: {
      it: "Em Ílhavo, os contadores de aves trocaram os binóculos por drones. Uma hora de voo devolve o que antes custava um mês de cadernos — e a ciência da ria nunca foi tão rápida.",
      es: "En Ílhavo, los contadores de aves cambiaron los prismáticos por drones. Una hora de vuelo devuelve lo que antes costaba un mes de cuadernos — y la ciencia de la ría nunca fue tan rápida.",
    },
    paragraphs: [
      { it: "Durante décadas, os cientistas da Ria de Aveiro contaram aves com binóculos, caderno e muita paciência. O trabalho demorava semanas e dependia do tempo: se chovesse, o recenseamento adiava-se e os dados chegavam atrasados ao laboratório.",
      es: "Durante décadas, los científicos de la Ría de Aveiro contaron aves con prismáticos, cuaderno y mucha paciencia. El trabajo duraba semanas y dependía del tiempo: si llovía, el censo se aplazaba y los datos llegaban tarde al laboratorio." },
      { it: "A solução chegou por ar. Uma equipa do laboratório marítimo de Ílhavo passou a sobrevoar as salinas com drones equipados com câmaras de alta resolução. O algoritmo reconhece cada espécie e devolve em duas horas o que antes demorava um mês inteiro.",
      es: "La solución llegó por aire. Un equipo del laboratorio marítimo de Ílhavo empezó a sobrevolar las salinas con drones equipados con cámaras de alta resolución. El algoritmo reconoce cada especie y devuelve en dos horas lo que antes tardaba un mes entero." },
      { it: "«No início, nenhum de nós acreditaria que a máquina fosse tão precisa», admite o biólogo Tiago Nogueira. «O computador já distingue um flamingo de uma garça a trezentos metros — e não se cansa nunca, ao contrário dos meus olhos.»",
      es: "«Al principio, ninguno de nosotros creería que la máquina fuera tan precisa», admite el biólogo Tiago Nogueira. «El ordenador ya distingue un flamenco de una garza a trescientos metros — y no se cansa nunca, al contrario que mis ojos.»" },
      { it: "A tecnologia levantou perguntas novas. Os responsáveis exigem que os aparelhos voem alto o suficiente, para que as colónias não sejam incomodadas na época de nidificação. Embora o método seja mais barato, alguns ornitólogos preferem manter a observação humana, que treina o olho e o ouvido.",
      es: "La tecnología planteó preguntas nuevas. Los responsables exigen que los aparatos vuelen lo bastante alto, para que las colonias no sean molestadas en la época de nidificación. Aunque el método sea más barato, algunos ornitólogos prefieren mantener la observación humana, que entrena el ojo y el oído." },
      { it: "Os coordenadores garantem que, se o projeto se estender a toda a costa, os mapas de migração serão redesenhados em poucos anos e Ílhavo ficaria na primeira linha desse trabalho. O próximo grande teste está marcado para setembro, quando milhares de aves passarem a caminho de África.",
      es: "Los coordinadores garantizan que, si el proyecto se extiende a toda la costa, los mapas de migración serán rediseñados en pocos años e Ílhavo quedaría en primera línea de ese trabajo. La próxima gran prueba está fijada para septiembre, cuando miles de aves pasen camino de África." },
    ],
    words: [
      { it: "os drones", es: "los drones" },
      { it: "o algoritmo", es: "el algoritmo" },
      { it: "o recenseamento", es: "el censo", note: "recenseamento = censo de población o de animais; verbo relacionado: recensear" },
      { it: "as salinas", es: "las salinas" },
      { it: "a nidificação", es: "la nidificación" },
      { it: "a migração", es: "la migración" },
    ],
    questions: [
      { q: "¿Cómo trabajaban los científicos hasta ahora?", options: ["Com satélites emprestados", "Com binóculos, caderno e muita paciência", "Só com câmaras fixas", "A pedir ajuda aos turistas"], answer: 1, why: "«os cientistas da Ria de Aveiro contaram aves com binóculos, caderno e muita paciência»." },
      { q: "¿Cuánto tarda ahora el trabajo completo?", options: ["Em duas horas", "Em duas semanas", "Em um mês inteiro", "Depende da chuva"], answer: 0, why: "«O algoritmo reconhece cada espécie e devolve em duas horas o que antes demorava um mês inteiro.»" },
      { q: "¿Por qué deben volar alto los drones?", options: ["Para gastarem menos bateria", "Para filmarem melhor as salinas", "Para que as colónias não sejam incomodadas na época de nidificação", "Porque a lei proíbe voos baixos"], answer: 2, why: "«Os responsáveis exigem que os aparelhos voem alto o suficiente, para que as colónias não sejam incomodadas na época de nidificação.»" },
      { q: "¿Qué prefieren algunos ornitólogos y por qué?", options: ["Os drones, porque são mais baratos", "As máquinas, porque não se cansam", "Os mapas, porque são mais bonitos", "A observação humana, porque treina o olho e o ouvido"], answer: 3, why: "«alguns ornitólogos preferem manter a observação humana, que treina o olho e o ouvido.»" },
    ],
    discuss: [
      { it: "Confias mais nos dados de uma máquina ou no olho de um especialista? Porquê?", es: "¿Confías más en los datos de una máquina o en el ojo de un especialista? ¿Por qué?" },
      { it: "Que outras contagens demoradas (árvores, peixes, pessoas) podiam ser entregues a drones? Que problemas poderias imaginar?", es: "¿Qué otros recuentos lentos (árboles, peces, personas) podrían encargarse a drones? ¿Qué problemas podrías imaginar?" },
    ],
  },

  /* ═══ B2 · 5 — Ambiente (Manteigas) ═══ */
  {
    id: "pt-news-b2-05", cat: "ambiente", level: "B2", place: "Manteigas", minutes: 4,
    title: "Na Serra da Estrela, o inverno encolhe e a floresta responde",
    titleEs: "En la Serra da Estrela, el invierno se encoge y el bosque responde",
    lead: {
      it: "Em Manteigas, os mais velhos lembram-se de invernos que duravam meio ano. A neve rareou, mas a montanha não desistiu: prepara-se para o clima que vem aí.",
      es: "En Manteigas, los mayores recuerdan inviernos que duraban medio año. La nieve se hizo más escasa, pero la montaña no se rindió: se prepara para el clima que viene.",
    },
    paragraphs: [
      { it: "Os mais velhos de Manteigas garantem que a serra já teve invernos de outro século: nevava em novembro e o gelo guardava-se em poços de neve, que abasteciam as cidades do litoral antes de existirem frigoríficos.",
      es: "Los mayores de Manteigas garantizan que la sierra tuvo inviernos de otro siglo: nevaba en noviembre y el hielo se guardaba en pozos de nieve, que abastecían a las ciudades del litoral antes de que existieran neveras." },
      { it: "Os registos do observatório confirmam a memória. Em trinta anos, a linha de neve subiu dezenas de metros e as semanas brancas reduziram-se a metade. As pistas de esqui abriram cada vez mais tarde, e quem vive do inverno sentiu a diferença na carteira.",
      es: "Los registros del observatorio confirman la memoria. En treinta años, la línea de nieve subió decenas de metros y las semanas blancas se redujeron a la mitad. Las pistas de esquí abrieron cada vez más tarde, y quien vive del invierno sintió la diferencia en el bolsillo." },
      { it: "«Se a tendência continuasse, em poucas décadas seria difícil explicar a um miúdo o que era um boneco de neve», avisou a engenheira florestal Helena Sá, que estuda o planalto há vinte anos. «Convém que nos habituemos a um inverno mais curto — sem desistir de o defender.»",
      es: "«Si la tendencia continuara, en pocas décadas sería difícil explicar a un niño qué era un muñeco de nieve», avisó la ingeniera forestal Helena Sá, que estudia la meseta desde hace veinte años. «Conviene que nos acostumbremos a un invierno más corto — sin renunciar a defenderlo.»" },
      { it: "A equipa de Helena Sá explicou que a resposta não está em lamentar: a serra está a ganhar um cinturão de bétulas e carvalhos nativos, plantados em antigas áreas ardidas. As árvores seguram a água, abrandam o vento e devolveriam à montanha a humidade que ela perdeu, se o clima lhes desse tempo.",
      es: "El equipo de Helena Sá explicó que la respuesta no está en lamentarse: la sierra está ganando un cinturón de abedules y robles autóctonos, plantados en antiguas zonas quemadas. Los árboles retienen el agua, frenan el viento y devolverían a la montaña la humedad que perdió, si el clima les diera tiempo." },
      { it: "O plano ambiciona que as encostas voltem a ser floresta em vez de mato seco, embora ninguém prometa milagres: os técnicos admitem que levaria uma geração inteira. Se a serra conseguir metade disso, o ano de 2050 ainda terá lugares para ter frio — e para o contar.",
      es: "El plan ambiciona que las laderas vuelvan a ser bosque en lugar de matorral seco, aunque nadie prometa milagros: los técnicos admiten que llevaría una generación entera. Si la sierra consigue la mitad de eso, el año 2050 todavía tendrá lugares para pasar frío — y para contarlo." },
    ],
    words: [
      { it: "a neve", es: "la nieve" },
      { it: "o inverno", es: "el invierno" },
      { it: "os poços de neve", es: "los pozos de nieve", note: "construções antigas onde o gelo era guardado para vender no verão" },
      { it: "as bétulas", es: "los abedules" },
      { it: "o mato", es: "el matorral" },
      { it: "a humidade", es: "la humedad", note: "PT-PT escreve humidade (com h), como o espanhol humedad" },
    ],
    questions: [
      { q: "¿Para qué servían los pozos de nieve?", options: ["Para guardar as sementes", "Para abastecer as cidades do litoral antes de existirem frigoríficos", "Para dar de beber aos rebanhos", "Para guardar os esquis antigos"], answer: 1, why: "«o gelo guardava-se em poços de neve, que abasteciam as cidades do litoral antes de existirem frigoríficos»." },
      { q: "¿Qué muestran los registros del observatorio?", options: ["A linha de neve subiu dezenas de metros e as semanas brancas reduziram-se a metade", "A neve aumentou nos últimos anos", "O observatório fechou por falta de fundos", "As pistas abriram mais cedo"], answer: 0, why: "«a linha de neve subiu dezenas de metros e as semanas brancas reduziram-se a metade»." },
      { q: "¿Qué papel cumplen los árboles nuevos en el plan de Helena Sá?", options: ["Enfeitam as encostas para os turistas", "Produzem madeira para vender depressa", "Substituem as pistas de esqui", "Seguram a água, abrandam o vento e devolveriam a humidade à montanha"], answer: 3, why: "«As árvores seguram a água, abrandam o vento e devolveriam à montanha a humidade que ela perdeu»." },
      { q: "¿Qué admiten los técnicos sobre el plazo del plan?", options: ["Que termina no próximo inverno", "Que já está concluído", "Que levaria uma geração inteira", "Que é impossível de medir"], answer: 2, why: "«os técnicos admitem que levaria uma geração inteira»." },
    ],
    discuss: [
      { it: "Tens memória de um inverno muito diferente dos de agora? Conta o que mudou.", es: "¿Tienes memoria de un invierno muy diferente de los de ahora? Cuenta qué cambió." },
      { it: "Plantar árvores nativas é a melhor resposta ao clima que conheces? Que outras propostas defenderias?", es: "¿Plantar árboles autóctonas es la mejor respuesta al clima que conoces? ¿Qué otras propuestas defenderías?" },
    ],
  },

  /* ═══ B2 · 6 — Saúde (Elvas) ═══ */
  {
    id: "pt-news-b2-06", cat: "salute", level: "B2", place: "Elvas", minutes: 4,
    title: "O hospital de Elvas trata doentes de dois países",
    titleEs: "El hospital de Elvas atiende a pacientes de dos países",
    lead: {
      it: "A cidade mais fortificada da Europa tornou-se também numa surpresa médica: o hospital de Elvas recebe utentes portugueses e espanhóis nas mesmas salas. A fronteira, dentro do consultório, deixou de existir.",
      es: "La ciudad más fortificada de Europa se convirtió también en una sorpresa médica: el hospital de Elvas recibe a pacientes portugueses y españoles en las mismas salas. La frontera, dentro de la consulta, dejó de existir.",
    },
    paragraphs: [
      { it: "Elvas fica a vinte minutos de Badajoz, mas durante anos a fronteira funcionou como válvula de escape: muitos utentes portugueses atravessavam-na para tratar dos dentes e dos olhos em Espanha, mais depressa e por vezes mais barato. O hospital local perdia médicos e dignidade ao mesmo tempo.",
      es: "Elvas está a veinte minutos de Badajoz, pero durante años la frontera funcionó como válvula de escape: muchos pacientes portugueses la cruzaban para tratarse los dientes y los ojos en España, más rápido y a veces más barato. El hospital local perdía médicos y dignidad al mismo tiempo." },
      { it: "A resposta foi virar o mapa do avesso. O hospital assinou acordos com a região espanhola vizinha, contratou especialistas que tinham emigrado e passou a receber doentes do outro lado da raia, sobretudo para consultas, análises e pequenas cirurgias.",
      es: "La respuesta fue darle la vuelta al mapa. El hospital firmó acuerdos con la región española vecina, contrató a especialistas que habían emigrado y pasó a recibir a pacientes del otro lado de la raya, sobre todo para consultas, análisis y pequeñas cirugías." },
      { it: "«O primeiro dia em que a sala de espera ouviu mais castelhano do que português foi estranho», reconheceu a diretora de enfermagem Alda Marques. Ela contou que muitos colegas se inscreveram em aulas de espanhol, porque seria pena que a fronteira entrasse numa consulta.",
      es: "«El primer día en que la sala de espera oyó más castellano que portugués fue extraño», reconoció la directora de enfermería Alda Marques. Ella contó que muchos colegas se apuntaron a clases de español, porque sería una pena que la frontera entrara en una consulta." },
      { it: "Os números do primeiro ano surpreenderam os próprios responsáveis: milhares de utentes espanhóis escolheram Elvas, e o hospital recuperou serviços que estavam prestes a fechar. Embora o projeto exija burocracia, as duas administrações já o apresentam como modelo de cooperação.",
      es: "Los números del primer año sorprendieron a los propios responsables: miles de pacientes españoles eligieron Elvas, y el hospital recuperó servicios que estaban a punto de cerrar. Aunque el proyecto exija burocracia, las dos administraciones ya lo presentan como modelo de cooperación." },
      { it: "Há quem veja nestes corredores uma lição que ultrapassa a medicina: as fronteiras dividem mapas, não doenças. Se a fórmula se repetir noutros hospitais do interior, a raia deixaria de ser um obstáculo — e Elvas deixaria de ser um fim de linha.",
      es: "Hay quien ve en estos pasillos una lección que va más allá de la medicina: las fronteras dividen mapas, no enfermedades. Si la fórmula se repitiera en otros hospitales del interior, la raya dejaría de ser un obstáculo — y Elvas dejaría de ser un punto final." },
    ],
    words: [
      { it: "a fronteira", es: "la frontera" },
      { it: "os utentes", es: "los pacientes, los usuarios", note: "«utente» é a palavra habitual em Portugal para o utilizador de um serviço público" },
      { it: "a raia", es: "la raya", note: "a raia = a fronteira entre Portugal e Espanha" },
      { it: "os acordos", es: "los acuerdos" },
      { it: "as consultas", es: "las consultas" },
      { it: "as cirurgias", es: "las cirugías" },
    ],
    questions: [
      { q: "¿Qué hacían antes muchos pacientes portugueses?", options: ["Atravessavam a fronteira para tratar dos dentes e dos olhos em Espanha", "Ficavam em casa sem tratamentos", "Viam-se obrigados a viajar até Lisboa", "Pagavam tratamentos privados na cidade"], answer: 0, why: "«muitos utentes portugueses atravessavam-na para tratar dos dentes e dos olhos em Espanha, mais depressa e por vezes mais barato»." },
      { q: "¿Qué servicios reciben los pacientes del otro lado de la raya?", options: ["Apenas tratamentos de dentes", "Consultas, análises e pequenas cirurgias", "Só exames de rotina", "Apenas partos"], answer: 1, why: "«passou a receber doentes do outro lado da raia, sobretudo para consultas, análises e pequenas cirurgias»." },
      { q: "¿Por qué se apuntaron los profesionales a clases de español?", options: ["Porque era obrigatório por contrato", "Porque o hospital ia mudar de país", "Porque seria pena que a fronteira entrasse numa consulta", "Porque queriam trabalhar em Espanha"], answer: 2, why: "«Ela contou que muitos colegas se inscreveram em aulas de espanhol, porque seria pena que a fronteira entrasse numa consulta.»" },
      { q: "¿Qué lección ven algunos en esos pasillos?", options: ["Que os hospitais antigos não prestam", "Que a medicina espanhola é superior", "Que as fronteiras devem ser fechadas", "As fronteiras dividem mapas, não doenças"], answer: 3, why: "«as fronteiras dividem mapas, não doenças»." },
    ],
    discuss: [
      { it: "Usarias um hospital do país vizinho se a espera fosse mais curta? O que te faria hesitar?", es: "¿Usarías un hospital del país vecino si la espera fuera más corta? ¿Qué te haría dudar?" },
      { it: "Em que outras áreas (educação, transportes, cultura) faria sentido cooperação transfronteiriça na tua região?", es: "¿En qué otras áreas (educación, transportes, cultura) tendría sentido la cooperación transfronteriza en tu región?" },
    ],
  },

  /* ═══ B2 · 7 — História (Batalha) ═══ */
  {
    id: "pt-news-b2-07", cat: "storia", level: "B2", place: "Batalha", minutes: 4,
    title: "No Mosteiro da Batalha, as marcas dos pedreiros falam",
    titleEs: "En el Monasterio de Batalha, las marcas de los canteros hablan",
    lead: {
      it: "Os pedreiros que ergueram o Mosteiro da Batalha assinavam a obra com sinais riscados na pedra. Cinco séculos depois, alguém leu finalmente o livro deles — pedra por pedra.",
      es: "Los canteros que levantaron el Monasterio de Batalha firmaban la obra con signos grabados en la piedra. Cinco siglos después, alguien leyó por fin su libro — piedra a piedra.",
    },
    paragraphs: [
      { it: "O mosteiro levou mais de um século a construir, e cada geração de pedreiros deixou a assinatura no trabalho: marcas geométricas riscadas na pedra, sinais que indicavam quais os blocos já estavam pagos. Durante décadas, ninguém as tinha lido com atenção.",
      es: "El monasterio tardó más de un siglo en construirse, y cada generación de canteros dejó su firma en el trabajo: marcas geométricas grabadas en la piedra, signos que indicaban qué bloques ya estaban pagados. Durante décadas, nadie las había leído con atención." },
      { it: "Uma equipa da universidade decidiu mapeá-las, parede por parede. O levantamento confirmou que a obra reuniu oficinas com costumes diferentes e que cada mestre marcava a pedra à sua maneira, como quem assina um capítulo de um livro escrito por muitas mãos.",
      es: "Un equipo de la universidad decidió cartografiarlas, pared por pared. El levantamiento confirmó que la obra reunió talleres con costumbres diferentes y que cada maestro marcaba la piedra a su manera, como quien firma un capítulo de un libro escrito por muchas manos." },
      { it: "«Estas marcas são os cheques da Idade Média», explicou a historiadora Graça Furtado. A investigadora acrescentou que, se um pedreiro não visse o seu sinal na parede, reclamaria o pagamento — e que os documentos da coroa guardam queixas dessas discussões.",
      es: "«Estas marcas son los cheques de la Edad Media», explicó la historiadora Graça Furtado. La investigadora añadió que, si un cantero no viera su signo en la pared, reclamaría el pago — y que los documentos de la corona guardan quejas de esas discusiones." },
      { it: "As descobertas mudaram a visita. Embora os turistas procurem sobretudo os túmulos dos fundadores, os novos painéis explicam pela primeira vez a vida do estaleiro: as casas dos trabalhadores, as faltas castigadas e os acidentes mortais registados nas contas da obra.",
      es: "Los descubrimientos cambiaron la visita. Aunque los turistas busquen sobre todo las tumbas de los fundadores, los nuevos paneles explican por primera vez la vida del obrador: las casas de los trabajadores, las faltas castigadas y los accidentes mortales anotados en las cuentas de la obra." },
      { it: "Há quem diga que a parte mais bonita não está nos vitrais, mas na pedra anónima. Se os visitantes aprendessem a ler os sinais, o mosteiro contaria também as histórias que os livros esqueceram — as dos homens que o fizeram, pedra a pedra.",
      es: "Hay quien dice que la parte más bonita no está en las vidrieras, sino en la piedra anónima. Si los visitantes aprendieran a leer los signos, el monasterio contaría también las historias que los libros olvidaron — las de los hombres que lo hicieron, piedra a piedra." },
    ],
    words: [
      { it: "as marcas", es: "las marcas" },
      { it: "o pedreiro", es: "el cantero" },
      { it: "o levantamento", es: "el levantamiento" },
      { it: "a parede", es: "la pared" },
      { it: "o estaleiro", es: "el obrador, el lugar de la obra", note: "em Portugal, estaleiro é também o local de uma construção; não apenas de navios" },
      { it: "os vitrais", es: "las vidrieras" },
    ],
    questions: [
      { q: "¿Qué indicaban las marcas geométricas en la piedra?", options: ["O nome do santo protetor", "Quais os blocos já estavam pagos", "A data de cada visita real", "O peso de cada bloco"], answer: 1, why: "«sinais que indicavam quais os blocos já estavam pagos»." },
      { q: "¿Cómo define la historiadora esas marcas?", options: ["Como assinaturas de artistas famosos", "Como decoração religiosa", "Como erros de medição", "Como os cheques da Idade Média"], answer: 3, why: "«Estas marcas são os cheques da Idade Média»." },
      { q: "¿Qué haría un cantero si no viera su signo en la pared, según la investigadora?", options: ["Reclamaria o pagamento", "Pediria outro sinal", "Abandonaria a religião", "Pintaria por cima do muro"], answer: 0, why: "«se um pedreiro não visse o seu sinal na parede, reclamaria o pagamento»." },
      { q: "¿Qué aprenderían los visitantes si supieran leer los signos?", options: ["A biografia dos reis", "As técnicas modernas de restauro", "As histórias dos homens que fizeram o mosteiro", "As receitas dos antigos cozinheiros"], answer: 2, why: "«o mosteiro contaria também as histórias que os livros esqueceram — as dos homens que o fizeram»." },
    ],
    discuss: [
      { it: "Se trabalhasses num monumento, que sinal pessoal deixarias para o futuro? Descreve-o.", es: "Si trabajaras en un monumento, ¿qué señal personal dejarías para el futuro? Descríbela." },
      { it: "Os monumentos devem contar a vida dos que os construíram ou apenas a dos que os mandaram construir? Justifica.", es: "¿Los monumentos deben contar la vida de quienes los construyeron o solo la de quienes ordenaron construirlos? Justifícalo." },
    ],
  },

  /* ═══ B2 · 8 — Desporto (Esposende) ═══ */
  {
    id: "pt-news-b2-08", cat: "sport", level: "B2", place: "Esposende", minutes: 4,
    title: "Em Esposende, o surf adaptado ensina a levantar",
    titleEs: "En Esposende, el surf adaptado enseña a levantarse",
    lead: {
      it: "A praia do Minho recebe todas as semanas surfistas que o mar não esperava: cadeiras de rodas, lesões antigas e medos novos. Ao fim de duas sessões, ninguém quer sair da água.",
      es: "La playa del Miño recibe cada semana a surfistas que el mar no esperaba: sillas de ruedas, lesiones antiguas y miedos nuevos. Al cabo de dos sesiones, nadie quiere salir del agua.",
    },
    paragraphs: [
      { it: "O projeto nasceu num clube local, quando uma mãe perguntou se o mar teria lugar também para o filho dela, que perdeu os movimentos das pernas num acidente de mota. Os treinadores responderam que sim antes de saber como — e o «como» levou três anos a afinar.",
      es: "El proyecto nació en un club local, cuando una madre preguntó si el mar tendría sitio también para su hijo, que perdió el movimiento de las piernas en un accidente de moto. Los entrenadores respondieron que sí antes de saber cómo — y el «cómo» llevó tres años de ajustes." },
      { it: "Hoje, miúdos e adultos com deficiência recebem pranchas adaptadas de vários tamanhos e acompanhamento de monitores dentro e fora da água. As sessões começam na areia, com exercícios de respiração, e acabam sempre com o mesmo ritual: aplausos para quem tentou.",
      es: "Hoy, niños y adultos con discapacidad reciben tablas adaptadas de varios tamaños y el acompañamiento de monitores dentro y fuera del agua. Las sesiones empiezan en la arena, con ejercicios de respiración, y acaban siempre con el mismo ritual: aplausos para quien lo intentó." },
      { it: "«A primeira queda é sempre o momento do teste», descreveu o monitor Rui Alcobia. Ele contou que muitos alunos chegam com medo de cair e descobrem, ao fim de duas sessões, que a queda faz parte do desporto — e que levantar-se também.",
      es: "«La primera caída es siempre el momento de la prueba», describió el monitor Rui Alcobia. Él contó que muchos alumnos llegan con miedo a caer y descubren, al cabo de dos sesiones, que la caída forma parte del deporte — y que levantarse también." },
      { it: "Os resultados excederam o desporto. Os fisioterapeutas que acompanham o programa afirmam que a força do tronco e o equilíbrio melhoraram mais depressa do que em ginásio. Embora as ondas do Minho sejam modestas, servem perfeitamente para a lição principal: o mar derruba todos por igual.",
      es: "Los resultados superaron el deporte. Los fisioterapeutas que acompañan el programa afirman que la fuerza del tronco y el equilibrio mejoraron más rápido que en gimnasio. Aunque las olas del Miño sean modestas, sirven perfectamente para la lección principal: el mar tumba a todos por igual." },
      { it: "Se o clube tivesse mais pranchas, dizem os responsáveis, poderia dobrar as turmas: a lista de espera já obrigou a criar um grupo só para irmãos e amigos. Ninguém devia ver esta praia apenas a partir da areia.",
      es: "Si el club tuviera más tablas, dicen los responsables, podría duplicar los grupos: la lista de espera ya obligó a crear un grupo solo para hermanos y amigos. Nadie debería ver esta playa solo desde la arena." },
    ],
    words: [
      { it: "as pranchas", es: "las tablas de surf" },
      { it: "o monitor", es: "el monitor" },
      { it: "a queda", es: "la caída" },
      { it: "o equilíbrio", es: "el equilibrio" },
      { it: "a areia", es: "la arena" },
      { it: "a lista de espera", es: "la lista de espera" },
    ],
    questions: [
      { q: "¿Cómo nació el proyecto?", options: ["Por uma ideia da câmara municipal", "Por um convite de uma escola de desporto", "Depois de uma competição internacional", "Quando uma mãe perguntou se o mar teria lugar para o filho dela"], answer: 3, why: "«uma mãe perguntou se o mar teria lugar também para o filho dela»." },
      { q: "¿Qué descubren muchos alumnos al cabo de dos sesiones?", options: ["Que nunca conseguem surfar", "Que a queda faz parte do desporto — e que levantar-se também", "Que o mar é perigoso demais", "Que preferem o ginásio"], answer: 1, why: "«descobrem, ao fim de duas sessões, que a queda faz parte do desporto — e que levantar-se também»." },
      { q: "¿Qué lección principal dan las modestas olas del Miño?", options: ["Só servem para nadar", "Fazem as aulas mais perigosas", "O mar derruba todos por igual", "Ajudam a competir a nível internacional"], answer: 2, why: "«Embora as ondas do Minho sejam modestas, servem perfeitamente para a lição principal: o mar derruba todos por igual.»" },
      { q: "¿Qué pasaría con más tablas, según los responsables?", options: ["O clube poderia dobrar as turmas", "As sessões ficariam mais curtas", "A praia fecharia ao público", "Os monitores receberiam ordenados"], answer: 0, why: "«Se o clube tivesse mais pranchas, dizem os responsáveis, poderia dobrar as turmas»." },
    ],
    discuss: [
      { it: "Que desporto adaptado gostarias de experimentar? Que obstáculo prevês?", es: "¿Qué deporte adaptado te gustaría probar? ¿Qué obstáculo prevés?" },
      { it: "«O mar derruba todos por igual»: o que significa, para ti, esta frase fora do desporto?", es: "«El mar tumba a todos por igual»: ¿qué significa para ti esta frase fuera del deporte?" },
    ],
  },

  /* ═══ B2 · 9 — Sociedade (Miranda do Douro) ═══ */
  {
    id: "pt-news-b2-09", cat: "societa", level: "B2", place: "Miranda do Douro", minutes: 4,
    title: "Miranda do Douro fala a língua que quase desapareceu",
    titleEs: "Miranda do Douro habla la lengua que casi desapareció",
    lead: {
      it: "O mirandês sobreviveu nos planaltos do nordeste quando ninguém o protegia — nem o escrevia. Hoje tem aulas, livros e um exame de oralidade, e as crianças voltaram a discutir no recreio na língua dos avós.",
      es: "El mirandés sobrevivió en las mesetas del nordeste cuando nadie lo protegía — ni lo escribía. Hoy tiene clases, libros y un examen de oralidad, y los niños volvieron a discutir en el recreo en la lengua de los abuelos.",
    },
    paragraphs: [
      { it: "No extremo nordeste do país, as crianças de Miranda do Douro crescem com duas línguas: o português chega pela televisão e o mirandês, língua irmã do asturiano, fica nas conversas dos avós. Há trinta anos, dizia-se que o mirandês morreria com essa geração.",
      es: "En el extremo noreste del país, los niños de Miranda do Douro crecen con dos lenguas: el portugués llega por la televisión y el mirandés, lengua hermana del asturiano, queda en las conversaciones de los abuelos. Hace treinta años, se decía que el mirandés moriría con esa generación." },
      { it: "A queda travou-se na escola. O mirandês ganhou estatuto de língua oficial, entrou nas aulas como disciplina optativa e recebeu gramáticas, dicionários e concursos de oralidade. Os professores garantem que os miúdos falam melhor do que os pais supõem — alguns até discutem em mirandês no recreio.",
      es: "La caída se frenó en la escuela. El mirandés obtuvo estatuto de lengua oficial, entró en las clases como asignatura optativa y recibió gramáticas, diccionarios y concursos de oralidad. Los profesores garantizan que los niños hablan mejor de lo que los padres suponen — algunos hasta discuten en mirandés en el recreo." },
      { it: "«Quando era pequeno, esconder o sotaque parecia mais seguro», confessou o poeta Amílcar Paulo, que publica em mirandês. Ele lembrou que os avós teriam ficado espantados ao ver as ruas cheias de cartazes bilíngues e um auditório cheio para ouvir poesia na língua deles.",
      es: "«Cuando era pequeño, esconder el acento parecía más seguro», confesó el poeta Amílcar Paulo, que publica en mirandés. Él recordó que los abuelos se habrían quedado asombrados al ver las calles llenas de carteles bilingües y un auditorio lleno para oír poesía en su lengua." },
      { it: "A vida local segue bilíngue. Os editais da câmara municipal aparecem nas duas línguas, a rádio emite programas em mirandês e, ao fim de semana, a feira anuncia os preços como sempre se anunciou — devagar, para que todos entendam.",
      es: "La vida local sigue bilingüe. Los edictos del ayuntamiento aparecen en las dos lenguas, la radio emite programas en mirandés y, el fin de semana, el mercado anuncia los precios como siempre se anunció — despacio, para que todos entiendan." },
      { it: "Embora faltem professores qualificados, a comunidade está otimista: calcula-se que o número de falantes jovens cresceu pela primeira vez em cem anos. Se a tendência se mantiver, o mirandês deixará de ser memória para voltar a ser futuro.",
      es: "Aunque falten profesores cualificados, la comunidad está optimista: se calcula que el número de hablantes jóvenes creció por primera vez en cien años. Si la tendencia se mantiene, el mirandés dejará de ser recuerdo para volver a ser futuro." },
    ],
    words: [
      { it: "o mirandês", es: "el mirandés", note: "língua minoritária do nordeste de Portugal, reconhecida como oficial" },
      { it: "a língua", es: "la lengua" },
      { it: "o sotaque", es: "el acento" },
      { it: "os avós", es: "los abuelos", note: "o avô = el abuelo; a avó = la abuela" },
      { it: "o recreio", es: "el recreo" },
      { it: "os falantes", es: "los hablantes" },
    ],
    questions: [
      { q: "¿Cómo se reparten las dos lenguas en la infancia local?", options: ["Pela televisão, enquanto o mirandês fica nas conversas dos avós", "Pela escola apenas", "Pelos livros importados", "Pela igreja"], answer: 0, why: "«o mirandês, língua irmã do asturiano, fica nas conversas dos avós»." },
      { q: "¿Qué se decía hace treinta años del mirandés?", options: ["Que se ensinava em todo o país", "Que era língua oficial da União Europeia", "Que morreria com a geração dos avós", "Que já tinha desaparecido"], answer: 2, why: "«dizia-se que o mirandês morreria com essa geração»." },
      { q: "¿Qué habría espantado a los abuelos, según el poeta?", options: ["Saber que a televisão fala português", "Ver um auditório cheio para ouvir poesia na língua deles", "Ouvir castelhano na feira", "Descobrir que há rádio em inglês"], answer: 1, why: "«os avós teriam ficado espantados ao ver as ruas cheias de cartazes bilíngues e um auditório cheio para ouvir poesia na língua deles»." },
      { q: "¿Qué significaría que la tendencia se mantenga?", options: ["Que o mirandês desapareceria em breve", "Que a escola deixaria de o ensinar", "Que só os mais velhos o falariam", "Que o mirandês deixaria de ser memória para voltar a ser futuro"], answer: 3, why: "«Se a tendência se mantiver, o mirandês deixará de ser memória para voltar a ser futuro»." },
    ],
    discuss: [
      { it: "Há uma língua ou um sotaque da tua família que gostarias de ver protegido? Qual e porquê?", es: "¿Hay una lengua o un acento de tu familia que te gustaría ver protegido? ¿Cuál y por qué?" },
      { it: "As línguas minoritárias salvam-se na escola ou em casa? O que pesa mais, na tua opinião?", es: "¿Las lenguas minoritarias se salvan en la escuela o en casa? ¿Qué pesa más, en tu opinión?" },
    ],
  },

  /* ═══ B2 · 10 — Economia (Castelo Branco) ═══ */
  {
    id: "pt-news-b2-10", cat: "economia", level: "B2", place: "Castelo Branco", minutes: 4,
    title: "As colchas de Castelo Branco voltam a sair da moldura",
    titleEs: "Las colchas de Castelo Branco vuelven a salir del marco",
    lead: {
      it: "Durante séculos, as noivas do interior recebiam colchas de seda bordadas com flores impossíveis. O século vinte quase as levou; o século vinte e um devolveu-lhes as encomendas — e uma escola de bordadeiras.",
      es: "Durante siglos, las novias del interior recibían colchas de seda bordadas con flores imposibles. El siglo veinte casi se las llevó; el veintiuno les devolvió los encargos — y una escuela de bordadoras.",
    },
    paragraphs: [
      { it: "As colchas de Castelo Branco eram dotes, heranças e objetos de sono ao mesmo tempo: seda bordada com linha amarela, flores do oriente, aves que ninguém viu na Beira Baixa. Cada peça podia demorar um ano de agulha e de conversas.",
      es: "Las colchas de Castelo Branco eran dotes, herencias y objetos de sueño al mismo tiempo: seda bordada con hilo amarillo, flores de oriente, aves que nadie vio en la Beira Baixa. Cada pieza podía tardar un año de aguja y de conversaciones." },
      { it: "O século vinte quase acabou com o ofício: as bordadeiras envelheceram e o bordado foi para museus, atrás de vidros. Uma colcha verdadeira continuava a demorar um ano, mas poucos estariam dispostos a pagar o preço justo de tanto tempo.",
      es: "El siglo veinte casi acabó con el oficio: las bordadoras envejecieron y el bordado se fue a museos, detrás de vidrios. Una colcha verdadera seguía tardando un año, pero pocos estarían dispuestos a pagar el precio justo de tanto tiempo." },
      { it: "A recuperação começou pela formação. A escola profissional abriu um curso de bordado e as mestres mais velhas aceitaram ensinar, desde que a técnica fosse respeitada fio a fio. Hoje há dezenas de bordadeiras novas, e as encomendas voltaram de fora do país.",
      es: "La recuperación empezó por la formación. La escuela profesional abrió un curso de bordado y las maestras más mayores aceptaron enseñar, siempre que la técnica fuera respetada hilo a hilo. Hoy hay decenas de bordadoras nuevas, y los encargos volvieron de fuera del país." },
      { it: "«Uma colcha destas não se comprava, herdava-se e dava-se», explicou a mestre Rosa Carrilho, que aprendeu o ofício com a mãe. «Digo às aprendizes que a mão tem de ir devagar; se o bordado fosse rápido, não valeria nada.»",
      es: "«Una colcha de estas no se compraba: se heredaba y se regalaba», explicó la maestra Rosa Carrilho, que aprendió el oficio con su madre. «A las aprendices les digo que la mano tiene que ir despacio; si el bordado fuera rápido, no valdría nada.»" },
      { it: "A câmara municipal calcula que o bordado movimente já algumas centenas de milhares de euros por ano, entre peças, cursos e turismo de oficina. Se o fio não se romper de novo, a cidade quer transformar os quartos de hotel em vitrinas — e o dote antigo em rendimento.",
      es: "El ayuntamiento calcula que el bordado ya mueve algunos cientos de miles de euros al año, entre piezas, cursos y turismo de taller. Si el hilo no se rompe de nuevo, la ciudad quiere convertir los cuartos de hotel en vitrinas — y el dote antiguo en ingresos." },
    ],
    words: [
      { it: "o bordado", es: "el bordado" },
      { it: "a colcha", es: "la colcha" },
      { it: "a seda", es: "la seda" },
      { it: "as bordadeiras", es: "las bordadoras" },
      { it: "a mestre", es: "la maestra", note: "«mestre» é comum de dois géneros: o mestre, a mestre" },
      { it: "o rendimento", es: "el ingreso, la rentabilidad", note: "o rendimento ≠ a renda (o aluguer de uma casa)" },
    ],
    questions: [
      { q: "¿Qué eran las colchas además de objetos de sueño?", options: ["Apenas decoração de museu", "Dotes e heranças de família", "Presentes comprados em lojas", "Peças exportadas para o oriente"], answer: 1, why: "«As colchas de Castelo Branco eram dotes, heranças e objetos de sono ao mesmo tempo»." },
      { q: "¿Por qué casi muere el oficio?", options: ["Porque a seda desapareceu", "Porque as máquinas ficaram proibidas", "Porque a moda mudou", "As bordadeiras envelheceram e o bordado foi para museus"], answer: 3, why: "«as bordadeiras envelheceram e o bordado foi para museus, atrás de vidros»." },
      { q: "¿Qué condición pusieron las maestras para enseñar?", options: ["Que a técnica fosse respeitada fio a fio", "Que o curso fosse pago por aluno", "Que só raparigas pudessem inscrever-se", "Que as aulas fossem em Lisboa"], answer: 0, why: "«as mestres mais velhas aceitaram ensinar, desde que a técnica fosse respeitada fio a fio»." },
      { q: "¿Qué les dice la maestra a las aprendices sobre la lentitud?", options: ["Que a lentidão arruína o negócio", "Que é melhor bordar sem regras", "Se o bordado fosse rápido, não valeria nada", "Que as máquinas fazem melhor"], answer: 2, why: "«se o bordado fosse rápido, não valeria nada»." },
    ],
    discuss: [
      { it: "Comprarias uma peça que demora um ano a fazer, mesmo que custasse o dobro? Justifica a tua decisão.", es: "¿Comprarías una pieza que tarda un año en hacerse, aunque costara el doble? Justifica tu decisión." },
      { it: "Que ofícios antigos da tua região mereciam uma escola como esta? Quais e porquê?", es: "¿Qué oficios antiguos de tu región merecerían una escuela como esta? ¿Cuáles y por qué?" },
    ],
  },

  /* ═══ B2 · 11 — Ciência (Bragança) ═══ */
  {
    id: "pt-news-b2-11", cat: "scienza", level: "B2", place: "Bragança", minutes: 4,
    title: "O lobo ibérico regressa aos montes de Bragança",
    titleEs: "El lobo ibérico regresa a los montes de Bragança",
    lead: {
      it: "Cinquenta anos depois de ser tratado como praga, o lobo aparece nas câmaras fotográficas de Bragança em ninhadas inteiras. Os cientistas leram as imagens e declararam: a montanha mudou de dono.",
      es: "Cincuenta años después de ser tratado como plaga, el lobo aparece en las cámaras fotográficas de Bragança en camadas enteras. Los científicos leyeron las imágenes y declararon: la montaña cambió de dueño.",
    },
    paragraphs: [
      { it: "Nos anos setenta, ver um lobo em Trás-os-Montes valia uma recompensa da câmara municipal: o animal era caçado como praga e o medo fazia parte da paisagem. Hoje, as câmaras escondidas nos carvalhais contam uma história inversa, e muito mais animada.",
      es: "En los años setenta, ver un lobo en Trás-os-Montes valía una recompensa del ayuntamiento: el animal era cazado como plaga y el miedo formaba parte del paisaje. Hoy, las cámaras escondidas en los robledales cuentan una historia inversa, y mucho más animada." },
      { it: "Os investigadores do parque natural de Montesinho instalaram dezenas de armadilhas fotográficas e recolheram imagens de ninhadas onde ninguém as esperava. A análise genética das amostras confirmou que os grupos são famílias estáveis e que a população do nordeste cresceu de forma sustentada.",
      es: "Los investigadores del parque natural de Montesinho instalaron decenas de trampas fotográficas y recogieron imágenes de camadas donde nadie las esperaba. El análisis genético de las muestras confirmó que los grupos son familias estables y que la población del nordeste creció de forma sostenida." },
      { it: "«O lobo é um desconfiado profissional», brincou a bióloga Sara Paiva. Ela explicou que o regresso depende de duas condições: floresta com presas e pastores que aceitem partilhar o território, porque sem gado defendido com cães o conflito seria inevitável.",
      es: "«El lobo es un desconfiado profesional», bromeó la bióloga Sara Paiva. Ella explicó que el regreso depende de dos condiciones: bosque con presas y pastores que acepten compartir el territorio, porque sin ganado defendido con perros el conflicto sería inevitable." },
      { it: "Os programas de compensação pagam as perdas de gado e oferecem cães de guarda aos pastores, para que a convivência custe menos paciência. Embora os ataques tenham diminuído, a desconfiança demora mais a tratar-se do que as ovelhas.",
      es: "Los programas de compensación pagan las pérdidas de ganado y ofrecen perros de guarda a los pastores, para que la convivencia cueste menos paciencia. Aunque los ataques hayan disminuido, la desconfianza tarda más en tratarse que las ovejas." },
      { it: "Se as florestas continuarem a recuperar, os cientistas admitem que o mapa da espécie se redesenharia sozinho. Em Bragança já se preparam trilhos de observação: ninguém promete avistar um lobo, mas as pegadas prometem histórias suficientes para voltar. O próximo censo nacional está marcado para o inverno.",
      es: "Si los bosques siguen recuperándose, los científicos admiten que el mapa de la especie se rediseñaría solo. En Bragança ya se preparan senderos de observación: nadie promete avistar un lobo, pero las huellas prometen historias suficientes para volver. El próximo censo nacional está fijado para el invierno." },
    ],
    words: [
      { it: "o lobo", es: "el lobo" },
      { it: "as armadilhas fotográficas", es: "las trampas fotográficas" },
      { it: "o gado", es: "el ganado" },
      { it: "os pastores", es: "los pastores" },
      { it: "as pegadas", es: "las huellas" },
      { it: "os trilhos", es: "los senderos", note: "trilho é a palavra habitual em Portugal; no Brasil diz-se «trilha»" },
    ],
    questions: [
      { q: "¿Cómo se trataba al lobo en los años setenta?", options: ["Como símbolo turístico da região", "Como espécie protegida", "Como praga, com recompensa da câmara para quem o caçasse", "Como animal de estimação"], answer: 2, why: "«ver um lobo em Trás-os-Montes valia uma recompensa da câmara municipal: o animal era caçado como praga»." },
      { q: "¿Qué confirmó el análisis genético?", options: ["Os grupos são famílias estáveis e a população cresceu de forma sustentada", "Os lobos vieram de Espanha recentemente", "A população diminuiu no nordeste", "As amostras estavam contaminadas"], answer: 0, why: "«confirmou que os grupos são famílias estáveis e que a população do nordeste cresceu de forma sustentada»." },
      { q: "¿Por qué sería inevitable el conflicto sin perros de guarda?", options: ["Porque os pastores abandonariam a região", "Porque as florestas desapareceriam", "Porque as câmaras deixariam de funcionar", "Porque os lobos atacariam o gado indefeso"], answer: 3, why: "«sem gado defendido com cães o conflito seria inevitável»." },
      { q: "¿Qué prometen las huellas a los visitantes de Bragança?", options: ["Avistamentos garantidos de lobos", "Histórias suficientes para voltar", "Fotografias obrigatórias da espécie", "Compensações para os turistas"], answer: 1, why: "«ninguém promete avistar um lobo, mas as pegadas prometem histórias suficientes para voltar»." },
    ],
    discuss: [
      { it: "Deve o estado compensar sempre os prejuízos dos pastores, mesmo quando o lobo é apenas suspeito? Discute.", es: "¿Debe el estado compensar siempre las pérdidas de los pastores, incluso cuando el lobo es solo sospechoso? Discútelo." },
      { it: "Medo e respeito andam juntos quando falamos de lobos? O que sentes ao pensar num encontro destes?", es: "¿El miedo y el respeto van juntos cuando hablamos de lobos? ¿Qué sientes al pensar en un encuentro así?" },
    ],
  },

  /* ═══ B2 · 12 — Tecnologia (Oeiras) ═══ */
  {
    id: "pt-news-b2-12", cat: "tecnologia", level: "B2", place: "Oeiras", minutes: 4,
    title: "Nasceu em Oeiras um satélite do tamanho de uma caixa de sapatos",
    titleEs: "Nació en Oeiras un satélite del tamaño de una caja de zapatos",
    lead: {
      it: "No parque tecnológico de Oeiras, trinta engenheiros acabaram de apertar o último parafuso de um nanossatélite português. Pesa menos do que uma mala cheia — e vai vigiar a costa inteira a partir do espaço.",
      es: "En el parque tecnológico de Oeiras, treinta ingenieros acababan de apretar el último tornillo de un nanosatélite portugués. Pesa menos que una maleta llena — y va a vigilar toda la costa desde el espacio.",
    },
    paragraphs: [
      { it: "A montagem durou catorze meses num laboratório limpo onde ninguém entra sem fato branco. O nanossatélite é um cubo de metal do tamanho de uma caixa de sapatos, com antenas que se desdobram no espaço como uma flor impaciente.",
      es: "El montaje duró catorce meses en un laboratorio limpio donde nadie entra sin bata blanca. El nanosatélite es un cubo de metal del tamaño de una caja de zapatos, con antenas que se despliegan en el espacio como una flor impaciente." },
      { it: "A missão é vigiar a costa: a temperatura do mar, a cor das rias e as nuvens baixas que os satélites grandes raramente apanham. Os dados serão abertos a qualquer laboratório ou escola que os peça, sem custo e sem perguntas.",
      es: "La misión es vigilar la costa: la temperatura del mar, el color de las rías y las nubes bajas que los satélites grandes rara vez capturan. Los datos serán abiertos a cualquier laboratorio o escuela que los pida, sin coste y sin preguntas." },
      { it: "«Construir algo tão pequeno obriga a escolher o essencial», resumiu a engenheira Marta Leite. Ela contou que a equipa cortou instrumentos durante meses e que, no dia da entrega, todos fotografaram o satélite como quem se despede de um filho.",
      es: "«Construir algo tan pequeño obliga a elegir lo esencial», resumió la ingeniera Marta Leite. Ella contó que el equipo recortó instrumentos durante meses y que, el día de la entrega, todos fotografiaron el satélite como quien se despide de un hijo." },
      { it: "O lançamento está marcado para o próximo ano, a boleia de um foguetão que leva carga de vários países. Se tudo correr bem, o satélite passará a mandar imagens diárias, e as escolas portuguesas poderão pedir a fotografia da sua praia.",
      es: "El lanzamiento está previsto para el próximo año, a bordo de un cohete que lleva carga de varios países. Si todo sale bien, el satélite pasará a enviar imágenes diarias, y los colegios portugueses podrán pedir la fotografía de su playa." },
      { it: "A agência afirma que seria possível montar um destes aparelhos por ano sem aumentar a equipa. Embora Portugal não tenha plataforma de lançamento, o país já projeta o que lança — e, no espaço, isso também é soberania. O próximo modelo já está na mesa de desenho.",
      es: "La agencia afirma que sería posible montar uno de estos aparatos al año sin ampliar el equipo. Aunque Portugal no tenga plataforma de lanzamiento, el país ya diseña lo que lanza — y, en el espacio, eso también es soberanía. El próximo modelo ya está en la mesa de dibujo." },
    ],
    words: [
      { it: "o nanossatélite", es: "el nanosatélite" },
      { it: "o fato branco", es: "la bata blanca", note: "o fato = el traje (falso amigo: nada que ver com o «hecho» espanhol)" },
      { it: "o foguetão", es: "el cohete", note: "PT-PT: foguetão; no Brasil, «foguete»" },
      { it: "a boleia", es: "el aventón", note: "a boleia de um foguetão = a bordo de um lançamento partilhado" },
      { it: "o lançamento", es: "el lanzamiento" },
      { it: "a engenheira", es: "la ingeniera" },
    ],
    questions: [
      { q: "¿Qué obliga a hacer construir algo tan pequeño, según la ingeniera?", options: ["Gastar mais dinheiro", "Escolher o essencial", "Desistir da missão", "Comprar peças estrangeiras"], answer: 1, why: "«Construir algo tão pequeno obriga a escolher o essencial»." },
      { q: "¿Quién podrá pedir los datos del satélite?", options: ["Apenas a agência espacial", "Só laboratórios pagantes", "Qualquer laboratório ou escola que os peça, sem custo e sem perguntas", "Apenas o governo"], answer: 2, why: "«Os dados serão abertos a qualquer laboratório ou escola que os peça, sem custo e sem perguntas»." },
      { q: "¿Qué pasará si todo sale bien?", options: ["O satélite passará a mandar imagens diárias", "As escolas perderão o interesse", "A costa ficará sem vigília", "O foguetão será cancelado"], answer: 0, why: "«Se tudo correr bem, o satélite passará a mandar imagens diárias»." },
      { q: "¿Qué significa para Portugal diseñar lo que lanza?", options: ["Que precisa de comprar foguetões maiores", "Que a engenharia portuguesa está atrasada", "Que os dados ficarão secretos", "No espaço, isso também é soberania"], answer: 3, why: "«o país já projeta o que lança — e, no espaço, isso também é soberania»." },
    ],
    discuss: [
      { it: "Se pudesses pedir uma fotografia do espaço de um lugar especial para ti, qual escolherias e porquê?", es: "Si pudieras pedir una fotografía desde el espacio de un lugar especial para ti, ¿cuál elegirías y por qué?" },
      { it: "Os países pequenos deviam investir em tecnologia espacial ou em problemas terrestres? Justifica.", es: "¿Deberían los países pequeños invertir en tecnología espacial o en problemas terrenos? Justifícalo." },
    ],
  },

  /* ═══ B2 · 13 — Ambiente (Tavira) ═══ */
  {
    id: "pt-news-b2-13", cat: "ambiente", level: "B2", place: "Tavira", minutes: 4,
    title: "As salinas de Tavira voltam a ser casa de aves",
    titleEs: "Las salinas de Tavira vuelven a ser casa de aves",
    lead: {
      it: "As salinas antigas de Tavira estiveram décadas meio abandonadas, vistas como terreno à espera de melhor uso. Um grupo decidiu que o melhor uso era o antigo: produzir sal — e devolver o sapal às aves.",
      es: "Las salinas antiguas de Tavira pasaron décadas medio abandonadas, vistas como terreno a la espera de un uso mejor. Un grupo decidió que el uso mejor era el antiguo: producir sal — y devolver la marisma a las aves.",
    },
    paragraphs: [
      { it: "A poucos minutos do centro de Tavira, os muros das salinas caíam, a água estagnava e quem passava na estrada via apenas um descampado com cheiro a lama. Os mapas turísticos já nem marcavam o sítio.",
      es: "A pocos minutos del centro de Tavira, los muros de las salinas se caían, el agua se estancaba y quien pasaba por la carretera veía solo un terreno baldío con olor a barro. Los mapas turísticos ya ni señalaban el lugar." },
      { it: "Salineiros e biólogos propuseram o contrário do óbvio: recuperar a exploração artesanal do sal para, ao mesmo tempo, devolver as casas às aves. As salinas, explicaram, funcionam como berçários naturais quando a gestão tem mãos humanas e paciência de maré.",
      es: "Salineros y biólogos propusieron lo contrario de lo obvio: recuperar la explotación artesanal de la sal para, al mismo tiempo, devolver las casas a las aves. Las salinas, explicaron, funcionan como viveros naturales cuando la gestión tiene manos humanas y paciencia de marea." },
      { it: "«O sapal não é um descampado, é uma cidade com bairros», descreveu o salineiro Vasco Coutinho. Ele garantiu que as aves perceberam a mudança antes dos humanos: no primeiro inverno já lá nidificavam espécies que tinham desaparecido havia vinte anos.",
      es: "«La marisma no es un baldío, es una ciudad con barrios», describió el salinero Vasco Coutinho. Él garantizó que las aves entendieron el cambio antes que los humanos: en el primer invierno ya nidificaban allí especies que habían desaparecido hacía veinte años." },
      { it: "A colheita do sal flor, feita à mão com a técnica de sempre e vendida a doceiros de todo o país, pagou parte do investimento. Embora o rendimento nunca iguale o do turismo de praias, os responsáveis dizem que a conta do sapal se faz em décadas, não em verões.",
      es: "La cosecha de la flor de sal, hecha a mano con la técnica de siempre y vendida a confiteros de todo el país, pagó parte de la inversión. Aunque el rendimiento nunca iguale al del turismo de playas, los responsables dicen que la cuenta de la marisma se hace en décadas, no en veranos." },
      { it: "Se as salinas vizinhas aderirem ao projeto, a ria ganharia um mosaico de águas que nem os planos de ordenamento desenharam. E a cidade aprenderia o que os salineiros sempre souberam: que o mar se cultiva, não se guarda atrás de vidro.",
      es: "Si las salinas vecinas se suman al proyecto, la ría ganaría un mosaico de aguas que ni los planes de ordenación dibujaron. Y la ciudad aprendería lo que los salineros siempre supieron: que el mar se cultiva, no se guarda detrás de un vidrio." },
    ],
    words: [
      { it: "as salinas", es: "las salinas" },
      { it: "o salineiro", es: "el salinero" },
      { it: "o sapal", es: "la marisma", note: "sapal é a palavra portuguesa para o humedal salgado do sul do país" },
      { it: "o sal flor", es: "la flor de sal" },
      { it: "a lama", es: "el barro, el lodo" },
      { it: "a colheita", es: "la cosecha" },
    ],
    questions: [
      { q: "¿Cómo se veían las salinas desde la carretera?", options: ["Como um descampado com cheiro a lama", "Como um parque de aves próspero", "Como um hotel de luxo", "Como um campo de golfe"], answer: 0, why: "«quem passava na estrada via apenas um descampado com cheiro a lama»." },
      { q: "¿Qué propusieron salineros y biólogos?", options: ["Construir hotéis nas salinas", "Fechar a área ao público", "Drenar o sapal para agricultura", "Recuperar a exploração artesanal do sal e devolver as casas às aves"], answer: 3, why: "«recuperar a exploração artesanal do sal para, ao mesmo tempo, devolver as casas às aves»." },
      { q: "¿Qué entendieron las aves antes que los humanos?", options: ["Que o sal ia subir de preço", "Que o sapal voltou a ser seguro para nidificar", "Que a estrada ia fechar", "Que o turismo ia acabar"], answer: 1, why: "«as aves perceberam a mudança antes dos humanos: no primeiro inverno já lá nidificavam espécies que tinham desaparecido havia vinte anos»." },
      { q: "¿Qué sabían siempre los salineros, según el cierre?", options: ["Que as aves gostam de sal", "Que o mar precisa de planos de ordenamento", "Que o mar se cultiva, não se guarda atrás de vidro", "Que o turismo paga todas as contas"], answer: 2, why: "«o mar se cultiva, não se guarda atrás de vidro»." },
    ],
    discuss: [
      { it: "Preferias um sapal produtivo com salineiros ou uma reserva fechada sem gente? Argumenta.", es: "¿Preferirías una marisma productiva con salineros o una reserva cerrada sin gente? Argumenta." },
      { it: "«A conta do sapal faz-se em décadas»: que outros projetos deviam ser medidos assim?", es: "«La cuenta de la marisma se hace en décadas»: ¿qué otros proyectos deberían medirse así?" },
    ],
  },

  /* ═══ B2 · 14 — Saúde (Covilhã) ═══ */
  {
    id: "pt-news-b2-14", cat: "salute", level: "B2", place: "Covilhã", minutes: 4,
    title: "Na Covilhã, as escolas aprendem a falar de ansiedade",
    titleEs: "En Covilhã, los colegios aprenden a hablar de ansiedad",
    lead: {
      it: "Os professores da serra começaram a ver um aluno invisível: o que estuda, chega a horas e não consegue falar à frente da turma. A resposta não veio em comprimidos nem em castigos — veio com psicólogos dentro das salas.",
      es: "Los profesores de la sierra empezaron a ver un alumno invisible: el que estudia, llega puntual y no consigue hablar delante de la clase. La respuesta no llegó en pastillas ni en castigos — llegó con psicólogos dentro de las aulas.",
    },
    paragraphs: [
      { it: "O aluno chega a horas, entrega os trabalhos e estuda nos fins de semana. Mas, quando tem de apresentar um tema à frente da turma, as mãos tremem e a voz desaparece. Os boletins chamam-lhe falta de confiança; os especialistas chamam-lhe ansiedade.",
      es: "El alumno llega puntual, entrega los trabajos y estudia los fines de semana. Pero, cuando tiene que presentar un tema delante de la clase, las manos tiemblan y la voz desaparece. Las actas lo llaman falta de confianza; los especialistas lo llaman ansiedad." },
      { it: "Os serviços de saúde responderam com um programa invulgar: em vez de esperar pelas consultas, levaram psicólogos às aulas. Os miúdos treinam exercícios de respiração, discutem o perfeccionismo e aprendem a arte de meia entrega — entregar um trabalho razoável a tempo.",
      es: "Los servicios de salud respondieron con un programa inusual: en vez de esperar las consultas, llevaron psicólogos a las clases. Los niños entrenan ejercicios de respiración, discuten el perfeccionismo y aprenden el arte de la entrega a medias — entregar un trabajo razonable a tiempo." },
      { it: "«Antes, um aluno assim seria rotulado de tímido e ficaria por aí», contou a psicóloga Filomena Andrade. Ela acrescentou que metade dos casos se resolve sem terapia formal, desde que alguém pergunte a tempo e sem pressa.",
      es: "«Antes, a un alumno así lo llamarían tímido y ahí se quedaría», contó la psicóloga Filomena Andrade. Ella añadió que la mitad de los casos se resuelve sin terapia formal, siempre que alguien pregunte a tiempo y sin prisa." },
      { it: "Os pais entraram no programa com sessões à noite e conversas sem presença de professores. As escolas garantem que as faltas por mal-estar psicológico diminuíram e que os conselhos de turma já distinguem preguiça de medo, embora ninguém as confunda com facilidade.",
      es: "Los padres entraron en el programa con sesiones nocturnas y conversaciones sin profesores delante. Las escuelas garantizan que las faltas por malestar psicológico disminuyeron y que los consejos de clase ya distinguen pereza de miedo, aunque nadie las confunda con facilidad." },
      { it: "A região quer que o modelo se estenda a todos os agrupamentos da serra, e o ministério já pediu os números para estudo. Se as salas de aula continuarem a falar disto abertamente, talvez a próxima geração precise de menos coragem para pedir ajuda.",
      es: "La región quiere que el modelo se extienda a todos los centros de la sierra, y el ministerio ya pidió los números para estudiarlo. Si las aulas siguen hablando de esto abiertamente, quizá la próxima generación necesite menos valor para pedir ayuda." },
    ],
    words: [
      { it: "a ansiedade", es: "la ansiedad" },
      { it: "a turma", es: "la clase" },
      { it: "os psicólogos", es: "los psicólogos" },
      { it: "os miúdos", es: "los niños", note: "miúdo é a palavra de Portugal; no Brasil diz-se «menino»" },
      { it: "a respiração", es: "la respiración" },
      { it: "o medo", es: "el miedo" },
    ],
    questions: [
      { q: "¿Qué le pasa al alumno cuando presenta un trabajo?", options: ["Copia o tema de um colega", "Falta à escola nesse dia", "As mãos tremem e a voz desaparece", "Adormece na aula"], answer: 2, why: "«quando tem de apresentar um tema à frente da turma, as mãos tremem e a voz desaparece»." },
      { q: "¿Qué es «a arte de meia entrega»?", options: ["Entregar só metade dos trabalhos", "Entregar um trabalho razoável a tempo", "Entregar tudo em atraso", "Nunca entregar trabalhos"], answer: 1, why: "«aprendem a arte de meia entrega — entregar um trabalho razoável a tempo»." },
      { q: "¿Qué habría pasado antes con ese alumno?", options: ["Seria rotulado de tímido e ficaria por aí", "Receberia apoio imediato", "Mudaria de escola", "Seria premiado pela coragem"], answer: 0, why: "«Antes, um aluno assim seria rotulado de tímido e ficaria por aí»." },
      { q: "¿Qué se espera del futuro si las aulas siguen hablando abiertamente?", options: ["Que os exames fiquem mais fáceis", "Que os psicólogos desapareçam das escolas", "Que ninguém precise de ajuda", "Que a próxima geração precise de menos coragem para pedir ajuda"], answer: 3, why: "«talvez a próxima geração precise de menos coragem para pedir ajuda»." },
    ],
    discuss: [
      { it: "Já tiveste medo de falar em público? O que te ajudou (ou ajudaria) nessas alturas?", es: "¿Has tenido miedo de hablar en público? ¿Qué te ayudó (o te ayudaría) en esos momentos?" },
      { it: "As escolas deviam avaliar apresentações orais de todos os alunos? Há alternativas justas? Propõe uma.", es: "¿Deberían los colegios evaluar presentaciones orales de todos los alumnos? ¿Hay alternativas justas? Propón una." },
    ],
  },

  /* ═══ B2 · 15 — Sociedade (Estremoz) ═══ */
  {
    id: "pt-news-b2-15", cat: "societa", level: "B2", place: "Estremoz", minutes: 4,
    title: "A rádio comunitária que liga as aldeias de Estremoz",
    titleEs: "La radio comunitaria que conecta las aldeas de Estremoz",
    lead: {
      it: "Todas as manhãs, uma frequência pequena acorda com o Alentejo: feiras, geadas, aniversários e o pedido de uma canção para a senhora da aldeia vizinha. Ninguém recebe ordenado — e ninguém quer o lugar de ninguém.",
      es: "Todas las mañanas, una frecuencia pequeña despierta con el Alentejo: ferias, heladas, cumpleaños y la petición de una canción para la señora del pueblo vecino. Nadie cobra sueldo — y nadie quiere el puesto de nadie.",
    },
    paragraphs: [
      { it: "O estúdio funciona numa casa emprestada no centro de Estremoz e vive de voluntários: reformados que foram operários, estudantes de comunicação e uma professora de música que sempre sonhou apresentar um programa. O pagamento, explicam todos, chega de outra maneira.",
      es: "El estudio funciona en una casa prestada en el centro de Estremoz y vive de voluntarios: jubilados que fueron operarios, estudiantes de comunicación y una profesora de música que siempre soñó con presentar un programa. El pago, explican todos, llega de otra manera." },
      { it: "«Há ouvintes que ligam só para confirmar que continuamos no ar», contou o coordenador José Moitas. Ele disse que o programa mais ouvido é aquele em que os mais velhos contam histórias da terra, gravadas na cozinha de cada um.",
      es: "«Hay oyentes que llaman solo para confirmar que seguimos en el aire», contó el coordinador José Moitas. Él dijo que el programa más escuchado es aquel en el que los mayores cuentan historias del pueblo, grabadas en la cocina de cada uno." },
      { it: "A rádio ganhou funções que os algoritmos não copiam: avisa os agricultores das geadas, liga aldeias separadas por quilómetros de estrada branca e despede as figuras que o concelho inteiro conheceu, com música escolhida pela família e um minuto de silêncio.",
      es: "La radio ganó funciones que los algoritmos no copian: avisa a los agricultores de las heladas, conecta aldeas separadas por kilómetros de carretera blanca y despide a las figuras que todo el municipio conoció, con música elegida por la familia y un minuto de silencio." },
      { it: "Os jovens trouxeram as redes sociais e a emissora respondeu com podcasts. José Moitas garante que, se a emissora fechasse, metade do concelho ficaria sem saber o dia da feira do gado ou o horário do centro de saúde.",
      es: "Los jóvenes trajeron las redes sociales y la emisora respondió con pódcast. José Moitas garantiza que, si la emisora cerrara, la mitad del municipio se quedaría sin saber el día del mercado de ganado o el horario del centro de salud." },
      { it: "Embora o sinal alcance apenas uma dúzia de freguesias, os responsáveis acreditam que o modelo se replicaria em todo o interior. Se cada concelho tivesse a sua frequência, ninguém precisaria de ir à cidade para ser ouvido — e ninguém morreria sem o último adeus no ar.",
      es: "Aunque la señal alcance apenas una docena de parroquias, los responsables creen que el modelo se replicaría en todo el interior. Si cada municipio tuviera su frecuencia, nadie necesitaría ir a la ciudad para ser escuchado — y nadie moriría sin el último adiós en el aire." },
    ],
    words: [
      { it: "a rádio", es: "la radio", note: "em português, a rádio é feminina, como no espanhol" },
      { it: "o estúdio", es: "el estudio" },
      { it: "os voluntários", es: "los voluntarios" },
      { it: "os ouvintes", es: "los oyentes" },
      { it: "as aldeias", es: "las aldeas" },
      { it: "as geadas", es: "las heladas" },
    ],
    questions: [
      { q: "¿Quiénes son los voluntarios de la radio?", options: ["Funcionários da câmara", "Reformados, estudantes de comunicação e uma professora de música", "Apenas jovens desempregados", "Técnicos enviados de Lisboa"], answer: 1, why: "«vive de voluntários: reformados que foram operários, estudantes de comunicação e uma professora de música»." },
      { q: "¿Cuál es el programa más escuchado?", options: ["Aquele em que os mais velhos contam histórias da terra, gravadas na cozinha de cada um", "As notícias desportivas da tarde", "O programa de música estrangeira", "Os anúncios da feira"], answer: 0, why: "«o programa mais ouvido é aquele em que os mais velhos contam histórias da terra, gravadas na cozinha de cada um»." },
      { q: "¿Qué funciones cumplen los algoritmos que no copian... y la radio sí?", options: ["Recomenda músicas por perfil", "Publicita produtos nacionais", "Transmite futebol ao vivo", "Avisa os agricultores das geadas e despede as figuras do concelho"], answer: 3, why: "«avisa os agricultores das geadas, liga aldeias separadas por quilómetros de estrada branca e despede as figuras que o concelho inteiro conheceu»." },
      { q: "¿Qué pasaría si cada municipio tuviera su frecuencia?", options: ["As cidades ficariam mais populosas", "Os algoritmos substituiriam os voluntários", "Ninguém precisaria de ir à cidade para ser ouvido", "As rádios nacionais fechariam"], answer: 2, why: "«Se cada concelho tivesse a sua frequência, ninguém precisaria de ir à cidade para ser ouvido»." },
    ],
    discuss: [
      { it: "Se tivesses uma hora de rádio só tua, que programa farias? Descreve o formato e os convidados.", es: "Si tuvieras una hora de radio solo para ti, ¿qué programa harías? Describe el formato y los invitados." },
      { it: "As redes sociais substituíram as rádios locais ou completam-nas? Dá exemplos que conheças.", es: "¿Las redes sociales reemplazaron a las radios locales o las complementan? Da ejemplos que conozcas." },
    ],
  },
];
