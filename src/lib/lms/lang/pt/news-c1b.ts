/* ── PT · Notícias C1 · bloco B (v9.39) ────────────────────────────────
   Português europeu (Portugal), nível C1, método VOA Learning English.
   12 notícias novas (pt-news-c1-04 … pt-news-c1-15) que se juntam às 3
   da base (news-c.ts) → 15 notícias de C1. Corpo: 5-6 parágrafos, 245-330
   palavras, conjuntivo (presente/imperfeito/composto) + condicional +
   discurso indireto, registo formal com notas coloquiais. Léxico PT de
   Portugal (nunca formas do Brasil). Campos `.it` = português (língua de
   estudo), `.es` = espanhol. */

import type { NewsItem } from "../../news";

export const PT_NEWS_C1B: NewsItem[] = [

  /* ═══ C1 · 4 — Ciência (Monsaraz) ═══ */
  {
    id: "pt-news-c1-04", cat: "scienza", level: "C1", place: "Monsaraz", minutes: 5,
    title: "A aldeia que apagou as luzes para ver melhor",
    titleEs: "El pueblo que apagó las luces para ver mejor",
    lead: {
      it: "No alto de uma colina do Alentejo, Monsaraz desligou metade das suas lanternas — de propósito. Não foi poupança: foi astronomia. Hoje, quem passa de noite percebe logo porque é que os mapas chamam a esta região o céu mais escuro da Europa.",
      es: "En lo alto de una colina del Alentejo, Monsaraz apagó la mitad de sus faroles — a propósito. No fue ahorro: fue astronomía. Hoy, quien pasa de noche entiende enseguida por qué los mapas llaman a esta región el cielo más oscuro de Europa.",
    },
    paragraphs: [
      { it: "Durante anos, a aldeia iluminava-se como qualquer outra: lanternas de sódio viradas para cima, fachadas lavadas de luz, um brilho que se via a quilómetros. Ninguém dava pelo desperdício, porque a escuridão nunca foi considerada um bem comum. Foi preciso que um grupo de astrónomos medisse o céu com aparelhos para que a câmara municipal percebesse o que estava a perder.",
      es: "Durante años, el pueblo se iluminaba como cualquier otro: faroles de sodio orientados hacia arriba, fachadas lavadas de luz, un resplandor que se veía a kilómetros. Nadie notaba el desperdicio, porque la oscuridad nunca se consideró un bien común. Hizo falta que un grupo de astrónomos midiera el cielo con aparatos para que el ayuntamiento entendiera lo que estaba perdiendo." },
      { it: "A poluição luminosa avança sem fazer barulho. Nas cidades, uma criança cresce sem ter visto a Via Láctea; em Monsaraz, pelo contrário, contam-se mais de dois mil estrelas em noites limpas. Para que o certificado de reserva de céu escuro se mantenha, cada luminária teve de ser substituída por outra que aponte para o chão, embora os mais cépticos garantissem que a aldeia ia ficar às escuras e perigosa.",
      es: "La contaminación lumínica avanza sin hacer ruido. En las ciudades, un niño crece sin haber visto la Vía Láctea; en Monsaraz, por el contrario, se cuentan más de dos mil estrellas en noches limpias. Para que el certificado de reserva de cielo oscuro se mantenga, cada farol tuvo que ser sustituido por otro que apunte al suelo, aunque los más escépticos aseguraran que el pueblo iba a quedar a oscuras y peligroso." },
      { it: "«Não se trata de apagar a aldeia, trata-se de a iluminar com juízo», explica o astrónomo Miguel Esteves, que coordena as sessões de observação no miradouro. «Se cada lampião desperdiçar luz para cima, em vinte anos deixaria de haver céu. Se a apontar para o chão, veremos o mesmo e as estrelas agradecem.»",
      es: "«No se trata de apagar el pueblo, se trata de iluminarlo con sentido», explica el astrónomo Miguel Esteves, que coordina las sesiones de observación en el mirador. «Si cada farol desperdicia luz hacia arriba, en veinte años dejaría de haber cielo. Si lo apunta al suelo, veremos lo mismo y las estrellas lo agradecen.»" },
      { it: "O turismo seguiu as estrelas. Hotéis rurais compraram telescópios, guias aprenderam os nomes das constelações em três línguas e, no verão, as sessões esgotam com semanas de antecedência. A escuridão, que parecia um atraso, tornou-se o produto mais rentável da planície — e não custa um cêntimo a fabricar.",
      es: "El turismo siguió a las estrellas. Hoteles rurales compraron telescopios, guías aprendieron los nombres de las constelaciones en tres idiomas y, en verano, las sesiones se agotan con semanas de antelación. La oscuridad, que parecía un atraso, se convirtió en el producto más rentable de la llanura — y no cuesta un céntimo fabricarla." },
      { it: "Ainda há ajustes: a igreja mantém a fachada iluminada por razões de memória, e o cemitério recusou-se a mudar. Mas o equilíbrio acalma os nerviosos — caso a fórmula se repita noutras freguesias, o Alentejo poderia tornar-se referência mundial. Quem diria que apagar seria, nesta terra, a maneira mais luminosa de aparecer no mapa?",
      es: "Todavía hay ajustes: la igreja mantiene la fachada iluminada por razones de memoria y el cementerio se negó a cambiar. Pero el equilibrio calma a los nerviosos — si la fórmula se repitiera en otras feligresías, el Alentejo podría convertirse en referencia mundial. Quién diría que apagar sería, en esta tierra, la manera más luminosa de aparecer en el mapa." },
    ],
    words: [
      { it: "a poluição luminosa", es: "la contaminación lumínica" },
      { it: "a luminária", es: "el farol, el punto de luz", note: "PT-PT: luminária = farola; o ES «luminaria» suena a adorno festivo" },
      { it: "os telescópios", es: "los telescopios" },
      { it: "a escuridão", es: "la oscuridad", note: "escuridão = oscuridad; a expressão «às escuras» = a oscuras" },
      { it: "as constelações", es: "las constelaciones" },
      { it: "a Via Láctea", es: "la Vía Láctea" },
    ],
    questions: [
      { q: "¿Por qué tuvieron que cambiarse los faroles de la aldea?", options: ["Para gastarem menos eletricidade", "Para que o certificado de reserva de céu escuro se mantenha, com luminárias que apontam para o chão", "Porque os turistas o exigiram", "Porque as lanternas antigas avariaram todas"], answer: 1, why: "«Para que o certificado de reserva de céu escuro se mantenha, cada luminária teve de ser substituída por outra que aponte para o chão»." },
      { q: "¿Cuántas estrellas se cuentan en Monsaraz en noches limpias?", options: ["Mais de dois mil", "Cerca de cem", "Nenhuma, há sempre nuvens", "Só as da bandeira"], answer: 0, why: "«em Monsaraz, pelo contrário, contam-se mais de dois mil estrelas em noites limpas»." },
      { q: "¿Qué afirma Miguel Esteves que pasaría en veinte años?", options: ["Que a aldeia ficaria mais rica", "Que nada mudaria no céu", "Que, se cada lampião desperdiçar luz para cima, deixaria de haver céu", "Que os hotéis fechariam"], answer: 2, why: "«Se cada lampião desperdiçar luz para cima, em vinte anos deixaria de haver céu.»" },
      { q: "¿Qué ironía señala el cierre de la noticia?", options: ["A igreja recusou qualquer luz", "O cemitério ficou todo iluminado", "Os turistas trouxeram mais poluição", "Apagar tornou-se a maneira mais luminosa de aparecer no mapa"], answer: 3, why: "«Quem diria que apagar seria, nesta terra, a maneira mais luminosa de aparecer no mapa?»" },
    ],
    discuss: [
      { it: "Vives num sítio com céu escuro? O que verias se as luzes da tua rua baixassem?", es: "¿Vives en un lugar con cielo oscuro? ¿Qué verías si las luces de tu calle bajaran?" },
      { it: "A escuridão como bem comum: quem deve decidir quanto se ilumina uma cidade?", es: "La oscuridad como bien común: ¿quién debe decidir cuánto se ilumina una ciudad?" },
    ],
  },

  /* ═══ C1 · 5 — Tecnologia (Marinha Grande) ═══ */
  {
    id: "pt-news-c1-05", cat: "tecnologia", level: "C1", place: "Marinha Grande", minutes: 5,
    title: "A cidade do vidro reimprime o futuro",
    titleEs: "La ciudad del vidrio reimprime el futuro",
    lead: {
      it: "A Marinha Grande sopra vidro há duzentos e cinquenta anos. Quando a indústria parecia condenada, os operários não pediram pena: pediram impressoras. O resultado é uma fábrica onde os moldes nascem de máquinas que trabalham a partir de um desenho.",
      es: "Marinha Grande sopla vidrio desde hace doscientos cincuenta años. Cuando la industria parecía condenada, los operarios no pidieron clemencia: pidieron impresoras. El resultado es una fábrica donde los moldes nacen de máquinas que trabajan a partir de un dibujo.",
    },
    paragraphs: [
      { it: "A história local resume-se numa rua: fornalhas acesas desde o século XVIII, vidro soprado à boca, uma escola de mestres vidreiros que formava artesãos para o país inteiro. Durante décadas, quem nascia aqui sabia que o futuro tinha a forma de um copo — até que a concorrência estrangeira e a energia cara partiram o hábito.",
      es: "La historia local se resume en una calle: hornos encendidos desde el siglo XVIII, vidrio soplado a boca, una escuela de maestros vidrieros que formaba artesanos para el país entero. Durante décadas, quien nacía aquí sabía que el futuro tenía forma de vaso — hasta que la competencia extranjera y la energía cara rompieron la costumbre." },
      { it: "Duas fábricas fecharam, mas a terceira recusou o obituário. A direção convenceu-se de que seria impossível competir por preço e decidiu competir por precisão: vidro para laboratórios, para placas de indução, para ecrãs finos. Os moldes de metal, que demoravam semanas a fabricar, passaram a sair de impressoras tridimensionais em três dias.",
      es: "Dos fábricas cerraron, pero la tercera se negó al obituario. La dirección se convenció de que sería imposible competir por precio y decidió competir por precisión: vidrio para laboratorios, para placas de inducción, para pantallas finas. Los moldes de metal, que tardaban semanas en fabricarse, empezaron a salir de impresoras tridimensionales en tres días." },
      { it: "«Um molde impresso não substitui o mestre; liberta-o», defende a engenheira Fernanda Correia, responsável pela inovação. «É fundamental que os vidros suportem choques térmicos e pressões extremas, e para isso precisamos de quem conheça o vidro como quem conhece um cavalo. Caso os ensaios corram como esperamos, a nova linha arranca no outono.»",
      es: "«Un molde impreso no sustituye al maestro; lo libera», defiende la ingeniera Fernanda Correia, responsable de la innovación. «Es fundamental que los vidrios soporten choques térmicos y presiones extremas, y para eso necesitamos a quien conozca el vidrio como quien conoce un caballo. Si las pruebas salen como esperamos, la nueva línea arranca en otoño.»" },
      { it: "A escola de vidreiros, que esteve prestes a fechar, reabriu com cursos de mecatrónica ao lado do sopro à boca. Os miúdos aprendem a programar um braço robótico de manhã e a moldar um cântaro à tarde; os mais velhos resmungam, mas depois pedem ajuda para as fórmulas. «O vidro não mudou, foi a janela que se mudou», resume um dos professores.",
      es: "La escuela de vidrieros, que estuvo a punto de cerrar, reabrió con cursos de mecatrónica junto al soplado a boca. Los chavales aprenden a programar un brazo robótico por la mañana y a moldear un cántaro por la tarde; los mayores refunfuñan, pero después piden ayuda con las fórmulas. «El vidrio no cambió, fue la ventana la que se mudó», resume uno de los profesores." },
      { it: "Resta a pergunta que os sindicatos fazem em voz baixa: e se a moda dos vidros finos passar? A cidade responde com uma humildade aprendida: embora ninguém possa garantir o futuro, é preciso que a indústria volte a fabricá-lo aqui — porque o vidro, como se sabe, se recicla infinitas vezes.",
      es: "Queda la pregunta que los sindicatos hacen en voz baja: ¿y si la moda de los vidrios finos pasa? La ciudad responde con una humildad aprendida: aunque nadie pueda garantizar el futuro, es preciso que la industria vuelva a fabricarlo aquí — porque el vidrio, como se sabe, se recicla infinitas veces." },
    ],
    words: [
      { it: "o vidro", es: "el vidrio" },
      { it: "as fornalhas", es: "los hornos" },
      { it: "o molde", es: "el molde, la plantilla", note: "molde = molde (de fábrica o de bolo); mesma palavra que em ES" },
      { it: "o sopro", es: "el soplado", note: "vidro soprado = vidrio soplado; «sopro» é o nome do gesto" },
      { it: "os vidreiros", es: "los vidrieros" },
      { it: "as impressoras tridimensionais", es: "las impresoras tridimensionales" },
    ],
    questions: [
      { q: "¿Cuánto tardan ahora en salir los moldes que antes llevaban semanas?", options: ["Três dias", "Três semanas", "Três meses", "Três horas"], answer: 0, why: "«Os moldes de metal, que demoravam semanas a fabricar, passaram a sair de impressoras tridimensionais em três dias.»" },
      { q: "¿Por qué decidió la fábrica competir por precisión y no por precio?", options: ["Porque os clientes eram todos estrangeiros", "Porque o metal tinha ficado caro", "Porque o governo lhe deu um prémio", "Porque seria impossível competir por preço, com a concorrência estrangeira e a energia cara"], answer: 3, why: "«A direção convenceu-se de que seria impossível competir por preço e decidiu competir por precisão»." },
      { q: "¿Qué defiende Fernanda Correia sobre los moldes impresos?", options: ["Que substituem os mestres vidreiros", "«Um molde impresso não substitui o mestre; liberta-o»", "Que são mais bonitos que os antigos", "Que deviam ser proibidos"], answer: 1, why: "«Um molde impresso não substitui o mestre; liberta-o», defende a engenheira Fernanda Correia." },
      { q: "¿Qué significa «o vidro não mudou, foi a janela que se mudou»?", options: ["Que as janelas da escola foram trocadas", "Que o vidro já não se fabrica na cidade", "Que o material é o mesmo; o que mudou foi o uso e a tecnologia à volta", "Que os professores se reformaram"], answer: 2, why: "O resumo do professor: «O vidro não mudou, foi a janela que se mudou» — o material continua o mesmo; mudou o contexto." },
    ],
    discuss: [
      { it: "Que ofícios antigos da tua terra mereciam uma segunda vida com tecnologia nova? Como?", es: "¿Qué oficios antiguos de tu tierra merecerían una segunda vida con tecnología nueva? ¿Cómo?" },
      { it: "«Um molde impresso não substitui o mestre; liberta-o.» Concordas? Em que trabalhos já viste máquinas libertarem pessoas?", es: "«Un molde impreso no sustituye al maestro; lo libera.» ¿Estás de acuerdo? ¿En qué trabajos has visto máquinas liberar a personas?" },
    ],
  },

  /* ═══ C1 · 6 — Ambiente (Castro Verde) ═══ */
  {
    id: "pt-news-c1-06", cat: "ambiente", level: "C1", place: "Castro Verde", minutes: 5,
    title: "A planície onde o trigo e as aves fizeram as pazes",
    titleEs: "La llanura donde el trigo y las aves hicieron las paces",
    lead: {
      it: "Em Castro Verde, o cereal criou uma paisagem que quase desapareceu da Europa: a estepe. Nela vive a abetarda, uma das aves voadoras mais pesadas do mundo. Que a terra continue a dar pão e dança ao mesmo tempo é um acordo que se renova todos os anos.",
      es: "En Castro Verde, el cereal creó un paisaje que casi desapareció de Europa: la estepa. En ella vive el avutarda, una de las aves voladoras más pesadas del mundo. Que la tierra siga dando pan y danza al mismo tiempo es un acuerdo que se renueva cada año.",
    },
    paragraphs: [
      { it: "A estepe cerealífera não é natureza selvagem: é natureza negociada. Séculos de rotações de culturas deixaram aqui manchas de pousio, terra descansada onde as aves nidificam longe dos olhos humanos. Foi esta combinação improvável — agricultura e biodiversidade — que salvou a abetarda da extinção no país.",
      es: "La estepa cerealísta no es naturaleza salvaje: es naturaleza negociada. Siglos de rotaciones de cultivos dejaron aquí manchas de barbecho, tierra descansada donde las aves anidan lejos de ojos humanos. Fue esa combinación improbable — agricultura y biodiversidad — la que salvó al avutarda de la extinción en el país." },
      { it: "Nos anos noventa, a lógica agrícola ia noutra direção: regadio intensivo, arbustos arrancados, campos limpos como mesas de operação. Caso o plano avançasse como estava previsto, a planície teria perdido metade das espécies em duas décadas. Os agricultores e os ambientalistas, que raramente se davam bem, descobriram que precisavam uns dos outros.",
      es: "En los años noventa, la lógica agrícola iba en otra dirección: regadío intensivo, arbustos arrancados, campos limpios como mesas de operación. Si el plan hubiera avanzado como estaba previsto, la llanura habría perdido la mitad de las especies en dos décadas. Los agricultores y los ambientalistas, que raramente se llevaban bien, descubrieron que se necesitaban unos a otros." },
      { it: "«A abetarda não precisa de muito: precisa de sossego», explica a bióloga Sofia Brandão, que coordena as contagens de primavera. «É essencial que os pousios se mantenham e que os pastores não mexam nos ninhos. Embora os números oscilem com a seca, a população tem aguentado — e isso, nesta Europa, é uma vitória.»",
      es: "«El avutarda no necesita mucho: necesita sosiego», explica la bióloga Sofia Brandão, que coordina los recuentos de primavera. «Es esencial que los barbechos se mantengan y que los pastores no toquen los nidos. Aunque las cifras oscilen con la sequía, la población ha aguantado — y eso, en esta Europa, es una victoria.»" },
      { it: "O acordo paga-se: os agricultores recebem uma compensação por cada hectare gerido a favor das aves, e a planície tornou-se destino de observadores de toda a Europa, que chegam em abril para ver os machos a fazer a sua dança nupcial, o pescoço inchado como um balão branco.",
      es: "El acuerdo se paga: los agricultores reciben una compensación por cada hectárea gestionada a favor de las aves, y la llanura se convirtió en destino de observadores de toda Europa, que llegan en abril para ver a los machos hacer su danza nupcial, el cuello hinchado como un globo blanco." },
      { it: "A seca é a nova adversária. Convém que a água chegue às charcas artificiais, senão os pintainhos não sobrevivem ao verão; e é preciso que o modelo económico continue a fazer sentido para quem semeia. Um velho pastor resume a filosofia da planície: «A terra não é só minha. Empresto-lhe a paz e ela paga-me em pão.»",
      es: "La sequía es la nueva adversaria. Conviene que el agua llegue a las charcas artificiales, si no los polluelos no sobreviven al verano; y es preciso que el modelo económico siga teniendo sentido para quien siembra. Un viejo pastor resume la filosofía de la llanura: «La tierra no es solo mía. Le presto la paz y ella me paga en pan.»" },
    ],
    words: [
      { it: "a estepe", es: "la estepa" },
      { it: "o pousio", es: "el barbecho", note: "pousio = terra deixada a descansar entre culturas (ES: barbecho)" },
      { it: "a abetarda", es: "el avutarda", note: "ave de grande porte; em ES o nome é igual (el avutarda)" },
      { it: "os ninhos", es: "los nidos" },
      { it: "a dança nupcial", es: "la danza nupcial" },
      { it: "os observadores de aves", es: "los observadores de aves" },
    ],
    questions: [
      { q: "¿Qué habría pasado si el plan de los noventa hubiera avanzado?", options: ["Nada de especial, a planície estava protegida", "A planície teria ficado mais verde", "A planície teria perdido metade das espécies em duas décadas", "As aves ter-se-iam mudado para Espanha"], answer: 2, why: "«Caso o plano avançasse como estava previsto, a planície teria perdido metade das espécies em duas décadas.»" },
      { q: "¿Qué necesita la abetarda, según la bióloga?", options: ["Comida suplementar no inverno", "Sossego, pousios mantidos e ninhos intocados", "Cercas elétricas à volta dos campos", "Turistas durante todo o ano"], answer: 1, why: "La bióloga resume: a abetarda «precisa de sossego» e «É essencial que os pousios se mantenham e que os pastores não mexam nos ninhos»." },
      { q: "¿Cuándo llegan los observadores y para qué?", options: ["Em abril, para ver os machos a fazer a dança nupcial", "No verão, para ver as charcas", "Em dezembro, para contar pintainhos", "Nunca chegam à planície"], answer: 0, why: "«que chegam em abril para ver os machos a fazer a sua dança nupcial, o pescoço inchado como um balão branco»." },
      { q: "¿Cómo resume el pastor la relación con la tierra?", options: ["«A terra é minha e ninguém mexe.»", "«A terra devia ser vendida.»", "«A terra já não dá nada.»", "«A terra não é só minha. Empresto-lhe a paz e ela paga-me em pão.»"], answer: 3, why: "«A terra não é só minha. Empresto-lhe a paz e ela paga-me em pão.»" },
    ],
    discuss: [
      { it: "Pode a agricultura proteger a natureza sem perder dinheiro? Como convencerias um agricultor céptico?", es: "¿Puede la agricultura proteger la naturaleza sin perder dinero? ¿Cómo convencerías a un agricultor escéptico?" },
      { it: "Já viste uma dança nupcial de animais? Descreve o que sentiste — ou o que gostarias de ver.", es: "¿Has visto alguna vez una danza nupcial de animales? Describe lo que sentiste — o lo que te gustaría ver." },
    ],
  },

  /* ═══ C1 · 7 — Saúde (Caldas da Rainha) ═══ */
  {
    id: "pt-news-c1-07", cat: "salute", level: "C1", place: "Caldas da Rainha", minutes: 5,
    title: "O hospital termal mais antigo do mundo reinventa-se",
    titleEs: "El hospital termal más antiguo del mundo se reinventa",
    lead: {
      it: "Há mais de quinhentos anos, a rainha Dona Leonor mandou construir em Caldas da Rainha um hospital aquecido por nascentes de água quente. O edifício nunca fechou. Agora, a medicina devolve-lhe o lugar que as pressas do século XX lhe tinham tirado.",
      es: "Hace más de quinientos años, la reina Dona Leonor mandó construir en Caldas da Rainha un hospital calentado por manantiales de agua termal. El edificio nunca cerró. Ahora, la medicina le devuelve el lugar que las prisas del siglo XX le habían quitado.",
    },
    paragraphs: [
      { it: "Durante séculos, a água foi remédio antes de haver comprimidos. Doentes reumáticos vinham de todo o país fazer a estação termal: três semanas de banhos, lama e rotina, com receita assinada pelo médico. Depois o sistema de saúde foi-se esquecendo das termas, como quem guarda um casaco velho no fundo do armário.",
      es: "Durante siglos, el agua fue remedio antes de que hubiera pastillas. Pacientes reumáticos venían de todo el país a hacer la estación termal: tres semanas de baños, lodo y rutina, con receta firmada por el médico. Después, el sistema de salud fue olvidándose de las termas, como quien guarda un abrigo viejo al fondo del armario." },
      { it: "A reaprendizagem começou pela dor. As listas de espera para a reabilitação cresceram, e os fisiatras lembraram-se de que a piscina quente faz parte do tratamento de muita gente. O hospital termal modernizou os balneários, contratou fisioterapeutas e passou a receber utentes enviados pelos centros de saúde, sem que ninguém tenha de pagar do bolso.",
      es: "El reaprendizaje empezó por el dolor. Las listas de espera para rehabilitación crecieron y los fisiatras se acordaron de que la piscina caliente forma parte del tratamiento de mucha gente. El hospital termal modernizó los baños, contrató fisioterapeutas y pasó a recibir pacientes enviados por los centros de salud, sin que nadie tenga que pagar de su bolsillo." },
      { it: "«A água não cura por si; prepara o corpo para se curar», avisa o fisiatra Duarte Melo. «Convém que o doente chegue cedo, antes de a artrose o prender de vez. Embora ninguém espere milagres, há melhora real na marcha e no sono. Para que os ganhos se mantenham, o exercício tem de continuar em casa.»",
      es: "«El agua no cura por sí sola; prepara el cuerpo para curarse», avisa el fisiatra Duarte Melo. «Conviene que el paciente llegue pronto, antes de que la artrosis lo ate del todo. Aunque nadie espere milagros, hay mejora real en la marcha y en el sueño. Para que las ganancias se mantengan, el ejercicio tiene que continuar en casa.»" },
      { it: "Há um efeito que os relatórios não medem: a conversa. Três semanas de balneoterapia juntam gente que vivia sozinha; entre um banho e outro, trocam-se queixas, receitas e números de telefone. As enfermeiras dizem que metade da terapia acontece na fila, e que seria injusto reduzi-la a litros de água quente.",
      es: "Hay un efecto que los informes no miden: la conversación. Tres semanas de balneoterapia juntan a gente que vivía sola; entre un baño y otro se intercambian quejas, recetas y números de teléfono. Las enfermeras dicen que la mitad de la terapia ocurre en la fila y que sería injusto reducirla a litros de agua caliente." },
      { it: "O próximo passo é a investigação: um estudo acompanhará duzentos utentes durante dois anos para medir o que a tradição intui. A rainha que fundou o hospital, dizem os guias, não pediu agradecimentos; pediu apenas que a porta nunca se fechasse. Ao quinto século, a promessa mantém-se de pé.",
      es: "El próximo paso es la investigación: un estudio seguirá a doscientos pacientes durante dos años para medir lo que la tradición intuye. La reina que fundó el hospital, dicen los guías, no pidió agradecimientos; pidió solo que la puerta nunca se cerrara. En el quinto siglo, la promesa sigue en pie." },
    ],
    words: [
      { it: "as termas", es: "las termas, el balneario", note: "fazer a estação termal = hacer la cura termal" },
      { it: "o doente", es: "el paciente" },
      { it: "a dor", es: "el dolor" },
      { it: "a reabilitação", es: "la rehabilitación" },
      { it: "os fisioterapeutas", es: "los fisioterapeutas" },
      { it: "a artrose", es: "la artrosis" },
    ],
    questions: [
      { q: "¿Qué efecto dicen las enfermeras que los informes no miden?", options: ["A temperatura da água", "O custo dos tratamentos", "A velocidade da recuperação", "A conversa: metade da terapia acontece na fila"], answer: 3, why: "«As enfermeiras dizem que metade da terapia acontece na fila, e que seria injusto reduzi-la a litros de água quente.»" },
      { q: "¿Cuánto duraba la estación termal tradicional?", options: ["Três semanas", "Uma semana", "Um mês inteiro", "Quinze dias"], answer: 0, why: "«três semanas de banhos, lama e rotina, com receita assinada pelo médico»." },
      { q: "¿Por qué 'la medicina le devuelve el lugar' a las termas?", options: ["Porque as termas ficaram mais baratas", "Porque os hotéis as compraram", "Porque as listas de espera para a reabilitação cresceram e os fisiatras lembraram o valor da piscina quente", "Porque a rainha o exigiu por carta"], answer: 2, why: "«As listas de espera para a reabilitação cresceram, e os fisiatras lembraram-se de que a piscina quente faz parte do tratamento de muita gente.»" },
      { q: "¿Qué aconseja Duarte Melo para que los beneficios se mantengan?", options: ["Que o doente descanse sempre sem esforço", "Que o exercício continue em casa depois da estação termal", "Que volte às termas todos os meses", "Que deixe de tomar toda a medicação"], answer: 1, why: "«Para que os ganhos se mantenham, o exercício tem de continuar em casa.»" },
    ],
    discuss: [
      { it: "A água como medicina: confias mais num tratamento antigo ou num comprimido moderno? Porquê?", es: "El agua como medicina: ¿confías más en un tratamiento antiguo o en una pastilla moderna? ¿Por qué?" },
      { it: "Três semanas de rotina com desconhecidos: para ti, isso é terapia ou castigo?", es: "Tres semanas de rutina con desconocidos: para ti, ¿eso es terapia o castigo?" },
    ],
  },

  /* ═══ C1 · 8 — História (Alcobaça) ═══ */
  {
    id: "pt-news-c1-08", cat: "storia", level: "C1", place: "Alcobaça", minutes: 5,
    title: "O mosteiro de Alcobaça devolve o que a poeira guardou",
    titleEs: "El monasterio de Alcobaça devuelve lo que el polvo guardó",
    lead: {
      it: "Nos claustros do mosteiro de Alcobaça, uma obra de restauro descobriu canos, ânforas e uma latrina do século XIII. Os monges cistercienses foram famosos pela engenharia; agora, o chão mostra como viviam — e o que jantavam.",
      es: "En los claustros del monasterio de Alcobaça, una obra de restauración descubrió tuberías, ánforas y una letrina del siglo XIII. Los monjes cistercienses fueron famosos por su ingeniería; ahora, el suelo muestra cómo vivían — y qué cenaban.",
    },
    paragraphs: [
      { it: "A obra começou por motivos modestos: substituir tubagens e reforçar fundações junto ao claustro do lavatório. Mal a picareta tocou o chão, apareceram tijolos que ninguém esperava. A direção do monumento suspendeu a empreitada e chamou arqueólogos, como manda a lei — e como raramente se agradece, até se ver o que aparece.",
      es: "La obra empezó por motivos modestos: sustituir tuberías y reforzar cimientos junto al claustro del lavatorio. Apenas el pico tocó el suelo, aparecieron ladrillos que nadie esperaba. La dirección del monumento suspendió el contrato y llamó a arqueólogos, como manda la ley — y como raramente se agradece, hasta verse lo que aparece." },
      { it: "O achado mais falado é uma latrina coletiva com canal de escoamento inclinado, prova de que a higiene cisterciense ia muito além do costume da época. Ao lado, uma fossa cheia de restos: ossos de sardinha, cascas de fruta, cacos de cerâmica de três séculos diferentes. O lixo, em arqueologia, é biografia.",
      es: "El hallazgo más comentado es una letrina colectiva con canal de desagüe inclinado, prueba de que la higiene cisterciense iba mucho más allá de la costumbre de la época. Al lado, un foso lleno de restos: espinas de sardina, cáscaras de fruta, pedazos de cerámica de tres siglos diferentes. La basura, en arqueología, es biografía." },
      { it: "«É como se o mosteiro nos deixasse um caderno de contas aberto», entusiasma-se o arqueólogo Tomás Avelar. «Só com ossos de peixe já temos o cardápio de um inverno inteiro. Para que nada se perca, cada camada é fotografada, desenhada e catalogada antes de ser removida.»",
      es: "«Es como si el monasterio nos dejara un cuaderno de cuentas abierto», se entusiasma el arqueólogo Tomás Avelar. «Solo con espinas de pescado ya tenemos el menú de un invierno entero. Para que nada se pierda, cada capa es fotografiada, dibujada y catalogada antes de ser removida.»" },
      { it: "A leitura dos restos reescreve detalhes. O peixe salgado chegava de longe, o que confirma o comércio com a costa; as cascas de noz aparecem em quantidade, o que sugere pomares ordenados. Não é provável que os monges suspeitassem que a sua cozinha viraria documento — mas é exatamente isso que acontece a quem escreve no chão.",
      es: "La lectura de los restos reescribe detalles. El pescado salado llegaba de lejos, lo que confirma el comercio con la costa; las cáscaras de nuez aparecen en cantidad, lo que sugiere huertos ordenados. No es probable que los monjes sospecharan que su cocina se convertiría en documento — pero es exactamente eso lo que les pasa a quienes escriben en el suelo." },
      { it: "A visita ao mosteiro ganhará um novo percurso subterrâneo, com vidro sobre as escavações. Os restauros estão marcados para o próximo ano, embora os prazos em património sejam, como se sabe, mais elásticos do que as promessas. A eternidade, afinal, também se agenda.",
      es: "La visita al monasterio ganará un nuevo recorrido subterráneo, con vidrio sobre las excavaciones. Las restauraciones están previstas para el próximo año, aunque los plazos en patrimonio sean, como se sabe, más elásticos que las promesas. La eternidad, al fin y al cabo, también se agenda." },
    ],
    words: [
      { it: "o mosteiro", es: "el monasterio" },
      { it: "o claustro", es: "el claustro" },
      { it: "as escavações", es: "las excavaciones" },
      { it: "a fossa", es: "el foso, la fosa", note: "fossa = hueco excavado; também «fossa séptica» (fosa séptica)" },
      { it: "a cerâmica", es: "la cerámica" },
      { it: "os restauros", es: "las restauraciones", note: "PT-PT: restauro; ES más habitual «restauración»" },
    ],
    questions: [
      { q: "¿Cuál fue el hallazgo más comentado?", options: ["Um túmulo real", "Uma latrina coletiva com canal de escoamento inclinado", "Uma moeda de ouro", "Um mosaico romano"], answer: 1, why: "«O achado mais falado é uma latrina coletiva com canal de escoamento inclinado»." },
      { q: "¿Qué debe hacerse con cada capa antes de removerla?", options: ["Ser queimada para evitar cheiros", "Ficar escondida sob o vidro", "Ser fotografada, desenhada e catalogada", "Ser vendida a colecionadores"], answer: 2, why: "«cada camada é fotografada, desenhada e catalogada antes de ser removida»." },
      { q: "¿Qué sugiere la abundancia de cáscaras de nuez?", options: ["Que havia fome no mosteiro", "Que os monges não comiam fruta", "Que a cozinha foi incendiada", "Pomares ordenados na quinta do mosteiro"], answer: 3, why: "«as cascas de noz aparecem em quantidade, o que sugere pomares ordenados»." },
      { q: "¿Qué significa «o lixo, em arqueologia, é biografia»?", options: ["Que os restos descartados contam a vida quotidiana de quem os deixou", "Que a arqueologia é um ofício sujo", "Que o mosteiro era pouco limpo", "Que o lixo moderno vale ouro"], answer: 0, why: "«O lixo, em arqueologia, é biografia» — os restos descartados contam a vida de quem os deixou." },
    ],
    discuss: [
      { it: "Que diriam de nós os arqueólogos de daqui a oitocentos anos, ao escavarem o nosso lixo?", es: "¿Qué dirían de nosotros los arqueólogos de aquí a ochocientos años, al excavar nuestra basura?" },
      { it: "Vale a pena atrasar uma obra para estudar o que o chão esconde? Até onde?", es: "¿Merece la pena retrasar una obra para estudar lo que esconde el suelo? ¿Hasta dónde?" },
    ],
  },

  /* ═══ C1 · 9 — Desporto (Ericeira) ═══ */
  {
    id: "pt-news-c1-09", cat: "sport", level: "C1", place: "Ericeira", minutes: 5,
    title: "A reserva mundial de surf que começa na escola",
    titleEs: "La reserva mundial de surf que empieza en la escuela",
    lead: {
      it: "Ericeira foi a primeira reserva mundial de surf da Europa: sete ondas protegidas como se fossem monumentos. Mas o projeto mais sério da vila não acontece no mar — acontece às terças-feiras, numa sala com quadro e giz.",
      es: "Ericeira fue la primera reserva mundial de surf de Europa: siete olas protegidas como si fueran monumentos. Pero el proyecto más serio del pueblo no ocurre en el mar — ocurre los martes, en un aula con pizarra y tiza.",
    },
    paragraphs: [
      { it: "A academia municipal recebe miúdos dos nove aos dezasseis anos, metade dos quais nunca tinha posto um fato de neopreno. A regra é simples: primeiro a segurança, depois a técnica, só depois a competição. Nas aulas teóricas aprende-se a ler a ondulação, a conhecer as marés e a respeitar as correntes de retorno — a ressaca que arrasta para o largo quem nada onde não deve.",
      es: "La academia municipal recibe a chavales de nueve a dieciséis años, la mitad de los cuales nunca se había puesto un traje de neopreno. La regla es simple: primero la seguridad, después la técnica, solo después la competición. En las clases teóricas se aprende a leer el oleaje, a conocer las mareas y a respetar las corrientes de retorno — la resaca que arrastra hacia el mar abierto a quien nada donde no debe." },
      { it: "«Não me interessa fabricar campeões; interessa-me fabricar nadadores que cheguem à idade adulta», resume a treinadora Rita Fonseca. «Para que os miúdos respeitem o mar, têm de o conhecer por dentro. Embora a vila viva do mar, só uma minoria sabe o que fazer quando a maré vira.»",
      es: "«No me interesa fabricar campeones; me interesa fabricar nadadores que lleguen a la edad adulta», resume la entrenadora Rita Fonseca. «Para que los chavales respeten el mar, tienen que conocerlo por dentro. Aunque el pueblo viva del mar, solo una minoría sabe qué hacer cuando la marea gira.»" },
      { it: "Os números dão-lhe razão: nos últimos cinco anos, os salvamentos na praia desceram para metade, e os miúdos da academia começam a ser requisitados como nadadores-socorristas. A freguesia nota o efeito colateral: famílias que passavam o verão de passagem ficaram a morar, porque os filhos não querem largar as aulas.",
      es: "Las cifras le dan la razón: en los últimos cinco años, los rescates en la playa bajaron a la mitad, y los chavales de la academia empiezan a ser requeridos como socorristas. La feligresía nota el efecto colateral: familias que pasaban el verano de paso se quedaron a vivir, porque los hijos no quieren soltar las clases." },
      { it: "A reserva traz obrigações. As ondas classificadas não podem ser alteradas por esporões ou descargas, e qualquer obra na costa precisa de provar que não mexe com a ondulação. É uma ideia estranha e bonita: proteger um movimento da água como se protege um edifício.",
      es: "La reserva trae obligaciones. Las olas clasificadas no pueden ser alteradas por espigones o descargas, y cualquier obra en la costa necesita demostrar que no interfiere con el oleaje. Es una idea extraña y bonita: proteger un movimiento del agua como se protege un edificio." },
      { it: "No fim do ano, a academia faz a sua festa na praia: os mais pequenos mostram remadas, os mais velhos simulam um salvamento com prancha. Depois, todos comem arroz de marisco em mesas compridas. «O mar devolve o que lhe damos», diz a placa na porta. Quem diria que a frase era literal?",
      es: "Al final del año, la academia hace su fiesta en la playa: los más pequeños muestran remadas, los mayores simulan un rescate con tabla. Después, todos comen arroz de marisco en mesas largas. «El mar devuelve lo que le damos», dice el cartel en la puerta. Quién diría que la frase era literal." },
    ],
    words: [
      { it: "a ondulação", es: "el oleaje" },
      { it: "o fato de neopreno", es: "el traje de neopreno", note: "fato = traje (fato de banho, fato de neopreno); falso amigo: nada que ver com ES «hecho»" },
      { it: "a maré", es: "la marea" },
      { it: "a ressaca", es: "la resaca, la corriente de retorno", note: "ressaca = corriente que arrastra al largo; também «ressaca» do vinho (resaca)" },
      { it: "os salvamentos", es: "los rescates" },
      { it: "a prancha", es: "la tabla" },
    ],
    questions: [
      { q: "¿Cuál es la regla de la academia?", options: ["Primeiro a segurança, depois a técnica, só depois a competição", "Só competição desde o primeiro dia", "Primeiro a competição, depois a segurança", "Não há regras escritas"], answer: 0, why: "«A regra é simples: primeiro a segurança, depois a técnica, só depois a competição.»" },
      { q: "¿Qué pasó con los rescates en la playa en cinco años?", options: ["Triplicaram", "Desceram para metade", "Mantiveram-se iguais", "Acabaram por completo"], answer: 1, why: "«nos últimos cinco anos, os salvamentos na praia desceram para metade»." },
      { q: "¿Qué idea «extraña y bonita» menciona la noticia?", options: ["Dar aulas de surf numa sala com giz", "Comer arroz de marisco em mesas compridas", "Fazer exames no meio do verão", "Proteger um movimento da água como se protege um edifício"], answer: 3, why: "«É uma ideia estranha e bonita: proteger um movimento da água como se protege um edifício.»" },
      { q: "¿Por qué se quedaron a vivir algunas familias?", options: ["Porque as rendas da vila baixaram", "Porque havia mais empregos no verão", "Porque os filhos não queriam largar as aulas da academia", "Porque a escola pública melhorou"], answer: 2, why: "«famílias que passavam o verão de passagem ficaram a morar, porque os filhos não querem largar as aulas»." },
    ],
    discuss: [
      { it: "Sabes nadar no mar ou só na piscina? O que muda, na tua experiência?", es: "¿Sabes nadar en el mar o solo en la piscina? ¿Qué cambia, en tu experiencia?" },
      { it: "«O mar devolve o que lhe damos»: que te parece esta ideia aplicada à tua região?", es: "«El mar devuelve lo que le damos»: ¿qué te parece esta idea aplicada a tu región?" },
    ],
  },

  /* ═══ C1 · 10 — Sociedade (Chaves) ═══ */
  {
    id: "pt-news-c1-10", cat: "societa", level: "C1", place: "Chaves", minutes: 5,
    title: "Chaves troca os adeuses por vizinhos novos",
    titleEs: "Chaves cambia los adioses por vecinos nuevos",
    lead: {
      it: "A fronteira que durante um século empurrou gente para fora começou a puxá-la de volta. Em Chaves compram-se casas por preço de garagem, chegam famílias com computadores, e a vila termal aprende a dizer bem-vindo em duas línguas.",
      es: "La frontera que durante un siglo empujó gente hacia fuera empezó a atraerla de vuelta. En Chaves se compran casas a precio de garaje, llegan familias con ordenadores y el pueblo termal aprende a decir bienvenido en dos idiomas.",
    },
    paragraphs: [
      { it: "O alto Tâmega foi durante décadas um mapa de partidas: comboios de emigrantes, aldeias de velhos, escolas fechadas por falta de alunos. O despovoamento parecia uma sentença sem apelo, como a chuva do inverno — um facto com que se aprende a conviver.",
      es: "El alto Tâmega fue durante décadas un mapa de partidas: trenes de emigrantes, aldeas de viejos, escuelas cerradas por falta de alumnos. El despoblamiento parecía una sentencia sin apelación, como la lluvia del invierno — un hecho con el que se aprende a convivir." },
      { it: "A sentença, porém, ganhou um advogado inesperado: a internet de fibra. Instalada até nas aldeias mais pequenas, permitiu que programadores do Porto e de Lisboa se instalassem nas terras onde os avós tinham nascido. A seguir vieram os espanhóis: galegos que descobriram que, a meia hora de Verín, se vive melhor por metade do preço.",
      es: "La sentencia, sin embargo, ganó un abogado inesperado: la internet de fibra. Instalada hasta en las aldeas más pequeñas, permitió que programadores de Oporto y Lisboa se instalaran en las tierras donde habían nacido los abuelos. Después llegaron los españoles: gallegos que descubrieron que, a media hora de Verín, se vive mejor por la mitad del precio." },
      { it: "«O interior não precisa de pena, precisa de serviços», corta o sociólogo Alberto Pinho, que estuda a região há vinte anos. «É preciso que a escola siga as pessoas, e não o contrário. Caso o centro de saúde feche, parte tudo o que a fibra trouxe — embora ninguém goste de dizer isto em voz alta.»",
      es: "«El interior no necesita lástima, necesita servicios», corta el sociólogo Alberto Pinho, que estudia la región desde hace veinte años. «Es preciso que la escuela siga a las personas, y no al revés. Si el centro de salud cierra, se va todo lo que trajo la fibra — aunque a nadie le guste decirlo en voz alta.»" },
      { it: "Os sinais são ainda frágeis, mas visíveis: a escola básica reabriu uma turma, o mercado vende pão galego ao lado do de centeio, e o correio voltou a passar cinco dias por semana. Nada disto alimenta manchetes; alimenta, isso sim, o café das sete, onde agora se ouve mais de uma língua.",
      es: "Las señales son aún frágiles, pero visibles: la escuela básica reabrió un aula, el mercado vende pan gallego junto al de centeno y el correo volvió a pasar cinco días por semana. Nada de esto alimenta titulares; alimenta, eso sí, el café de las siete, donde ahora se oye más de un idioma." },
      { it: "Há quem tema a gentrificação rural — cascos velhos comprados por gente de fora, filhos da terra sem poder comprar nada. É um risco real, admite o município. Mas o velho relojoeiro da rua principal prefere outra contabilidade: «Passei trinta anos a ver partir autocarros. Ver chegar camiões de mudança é melhor, ainda que me custe acreditar.»",
      es: "Hay quien teme la gentrificación rural — cascos viejos comprados por forasteros, hijos de la tierra sin poder comprar nada. Es un riesgo real, admite el ayuntamiento. Pero el viejo relojero de la calle principal prefiere otra contabilidad: «Pasé treinta años viendo partir autobuses. Ver llegar camiones de mudanza es mejor, aunque me cueste creerlo.»" },
    ],
    words: [
      { it: "o despovoamento", es: "el despoblamiento" },
      { it: "os emigrantes", es: "los emigrantes" },
      { it: "as aldeias", es: "las aldeas" },
      { it: "o centro de saúde", es: "el centro de salud" },
      { it: "a fibra", es: "la fibra" },
      { it: "a mudança", es: "la mudanza, el traslado", note: "camião de mudança = camión de mudanzas; «mudar» = cambiarse (de casa)" },
    ],
    questions: [
      { q: "¿Qué permitió la fibra instalada en las aldeas?", options: ["Ver televisão em melhor qualidade", "Que programadores do Porto e de Lisboa se instalassem nas terras onde os avós tinham nascido", "Atrair fábricas de componentes", "Baratear as rendas na cidade"], answer: 1, why: "«permitiu que programadores do Porto e de Lisboa se instalassem nas terras onde os avós tinham nascido»." },
      { q: "¿Qué quiere decir el sociólogo con que el interior 'no necesita lástima, necesita servicios'?", options: ["Que a região precisa de mais compaixão", "Que as pessoas se devem mudar todas para a costa", "Que o problema do interior é o clima", "Que adianta pouco lamentar sem escola, saúde e correio a funcionar"], answer: 3, why: "Diz que o interior «não precisa de pena, precisa de serviços» e que «É preciso que a escola siga as pessoas, e não o contrário»." },
      { q: "¿Qué se oye ahora en el café de las siete?", options: ["Só silêncio de manhã cedo", "Mais de uma língua", "Uma rádio espanhola", "Música tradicional galega"], answer: 1, why: "«alimenta, isso sim, o café das sete, onde agora se ouve mais de uma língua»." },
      { q: "¿Qué dice el viejo relojero?", options: ["«Passei trinta anos a ver partir autocarros. Ver chegar camiões de mudança é melhor, ainda que me custe acreditar.»", "«As casas deviam ser todas vendidas a estrangeiros.»", "«Prefiro os autocarros de antigamente.»", "«Vou fechar a loja este ano.»"], answer: 0, why: "«Passei trinta anos a ver partir autocarros. Ver chegar camiões de mudança é melhor, ainda que me custe acreditar.»" },
    ],
    discuss: [
      { it: "Teletrabalho: viverias longe da cidade com boa internet? Que perderias, que ganharias?", es: "Teletrabajo: ¿vivirías lejos de la ciudad con buena internet? ¿Qué perderías, qué ganarías?" },
      { it: "Gentrificação rural: como proteger quem fica quando chegam os de fora?", es: "Gentrificación rural: ¿cómo proteger a quien se queda cuando llegan los de fuera?" },
    ],
  },

  /* ═══ C1 · 11 — Economia (Sines) ═══ */
  {
    id: "pt-news-c1-11", cat: "economia", level: "C1", place: "Sines", minutes: 5,
    title: "O porto de Sines quer encurtar a Europa",
    titleEs: "El puerto de Sines quiere acortar Europa",
    lead: {
      it: "A uma semana de navegação da América do Norte, Sines é o porto português com águas profundas para os maiores navios de contentores do mundo. A aposta agora é terrestre: fazer com que a carga continue de comboio até Madrid e além.",
      es: "A una semana de navegación de América del Norte, Sines es el puerto portugués con aguas profundas para los mayores buques de contenedores del mundo. La apuesta ahora es terrestre: conseguir que la carga siga en tren hasta Madrid y más allá.",
    },
    paragraphs: [
      { it: "A geografia fez o primeiro favor: uma costa virada ao Atlântico, uma baía funda que não precisa de dragagens constantes, vento favorável a quem vem do oeste. O porto nasceu nos anos setenta com o ambicioso projeto de servir uma refinaria e navios-tanque; os contentores chegaram depois e mudaram-lhe a vocação.",
      es: "La geografía hizo el primer favor: una costa vuelta al Atlántico, una bahía honda que no necesita dragados constantes, viento favorable para quien viene del oeste. El puerto nació en los años setenta con el ambicioso proyecto de servir a una refinería y a buques tanque; los contenedores llegaron después y le cambiaron la vocación." },
      { it: "O gargalo nunca foi o mar: foi a partir daí. Com o corredor ferroviário incompleto, a mercadoria seguia por camião, mais cara e mais suja. Um relatório da associação de armadores calculou que, caso o comboio estivesse operacional, milhares de viagens de estrada desapareceriam por ano — e as emissões cairiam com elas.",
      es: "El cuello de botella nunca fue el mar: fue a partir de ahí. Con el corredor ferroviario incompleto, la mercadería seguía en camión, más cara y más sucia. Un informe de la asociación de navieras calculó que, si el tren estuviera operativo, miles de viajes por carretera desaparecerían al año — y las emisiones caerían con ellas." },
      { it: "«Temos de ser honestos: ninguém muda de rota por simpatia», admite o economista Jorge Mascarenhas. «Os armadores trocam de porto por meia hora de ganho. Para que a carga portuguesa compita, é preciso que o caminho de ferro seja tão fiável como a grua. Embora o investimento seja pesado, o custo de não o fazer é maior.»",
      es: "«Tenemos que ser honestos: nadie cambia de ruta por simpatía», admite el economista Jorge Mascarenhas. «Las navieras cambian de puerto por media hora de ganancia. Para que la carga portuguesa compita, hace falta que el ferrocarril sea tan fiable como la grúa. Aunque la inversión sea pesada, el coste de no hacerla es mayor.»" },
      { it: "A cidade sente o porto na conta bancária e no trânsito. Os estaleiros de reparação naval expandiram-se, o instituto profissional formou uma geração de operadores de gruas, e as rendas dispararam — o lado menos simpático da prosperidade.",
      es: "La ciudad siente el puerto en la cuenta bancaria y en el tráfico. Los astilleros de reparación naval se expandieron, el instituto profesional formó una generación de operadores de grúas y los alquileres se dispararon — la cara menos simpática de la prosperidad." },
      { it: "Falta saber se a aposta paga: os portos do norte da Europa são rivais velhos e ricos, e a burocracia da fronteira não se apaga com um decreto. Mas a ideia mantém-se de pé: Portugal como porta de entrada curta do Atlântico. O mar não tem atalhos — os portos, esses, podem ser o atalho.",
      es: "Falta saber si la apuesta paga: los puertos del norte de Europa son rivales viejos y ricos, y la burocracia de la frontera no se borra con un decreto. Pero la idea sigue en pie: Portugal como puerta de entrada corta del Atlántico. El mar no tiene atajos — los puertos, esos sí, pueden ser el atajo." },
    ],
    words: [
      { it: "os contentores", es: "los contenedores" },
      { it: "o comboio", es: "el tren", note: "comboio = tren (PT-PT; no Brasil diz-se «trem»)" },
      { it: "a grua", es: "la grúa" },
      { it: "o porto", es: "el puerto" },
      { it: "a carga", es: "la carga, la mercancía" },
      { it: "o camião", es: "el camión" },
    ],
    questions: [
      { q: "¿Qué calcularía el informe con el tren operacional?", options: ["Que o porto fecharia em dez anos", "Que os navios ficariam mais rápidos", "Que nada mudaria nos preços", "Que milhares de viagens de estrada desapareceriam por ano"], answer: 3, why: "«caso o comboio estivesse operacional, milhares de viagens de estrada desapareceriam por ano»." },
      { q: "¿Qué pasó con los alquileres en la ciudad?", options: ["Desceram devagar", "Congelaram por lei", "Dispararam", "Foram subsidiados"], answer: 2, why: "«as rendas dispararam — o lado menos simpático da prosperidade»." },
      { q: "¿Qué idea resume la posición de Portugal según el cierre?", options: ["Portugal como porta de entrada curta do Atlântico; os portos podem ser o atalho", "Portugal tem o porto mais barato da Europa", "Os portos do norte da Europa são fracos", "A burocracia é a maior riqueza do país"], answer: 0, why: "«Portugal como porta de entrada curta do Atlântico. O mar não tem atalhos — os portos, esses, podem ser o atalho.»" },
      { q: "¿Qué hace falta, según Mascarenhas, para que la carga portuguesa compita?", options: ["Mais subsídios dos contribuintes", "Menos trabalhadores no cais", "Navios cada vez maiores", "Que o caminho de ferro seja tão fiável como a grua"], answer: 3, why: "«Para que a carga portuguesa compita, é preciso que o caminho de ferro seja tão fiável como a grua.»" },
    ],
    discuss: [
      { it: "Comboio ou camião para atravessar a península? No teu argumento, o que pesa mais: preço, tempo ou ambiente?", es: "¿Tren o camión para cruzar la península? En tu argumento, ¿qué pesa más: precio, tiempo o ambiente?" },
      { it: "A tua região tem um «portal» logístico? Como mudou a vida local — para bem e para mal?", es: "¿Tu región tiene un «portal» logístico? ¿Cómo cambió la vida local — para bien y para mal?" },
    ],
  },

  /* ═══ C1 · 12 — Cultura (Serpa) ═══ */
  {
    id: "pt-news-c1-12", cat: "cultura", level: "C1", place: "Serpa", minutes: 5,
    title: "O cante alentejano ensaia o futuro",
    titleEs: "El cante alentejano ensaya el futuro",
    lead: {
      it: "Em Serpa, os coros de cante alentejano têm uma média de idade que assusta os cartórios. Mas aos sábados de manhã, numa sala de aula da vila, ensaia-se o contrário: vozes de criança a aprender o repertório que os avós levaram a património da humanidade.",
      es: "En Serpa, los coros de cante alentejano tienen una media de edad que asusta a los registros civiles. Pero los sábados por la mañana, en un aula del pueblo, se ensaya lo contrario: voces de niño aprendiendo el repertorio que los abuelos llevaron a patrimonio de la humanidad.",
    },
    paragraphs: [
      { it: "O cante canta-se a vozes, sem instrumentos, em roda e de chapéu na cabeça. Em 2014, a UNESCO classificou-o como património cultural imaterial; a decisão chegou quando os coros mais antigos já tinham dificuldade em encher um autocarro para os festivais.",
      es: "El cante se canta a voces, sin instrumentos, en corro y con sombrero en la cabeza. En 2014, la Unesco lo clasificó como patrimonio cultural inmaterial; la decisión llegó cuando los coros más antiguos ya tenían dificultad para llenar un autobús para los festivales." },
      { it: "O problema não era a falta de público — era a falta de cantores. Os filhos foram para Lisboa ou para o estrangeiro, os ensaios ficaram para os reformados, e as vozes mais agudas morreram com os seus donos. «Havia coros que cantavam com dez homens quando o repertório pedia trinta», lembra a regente Emília Relvas.",
      es: "El problema no era la falta de público — era la falta de cantores. Los hijos se fueron a Lisboa o al extranjero, los ensayos quedaron para los jubilados y las voces más agudas murieron con sus dueños. «Había coros que cantaban con diez hombres cuando el repertorio pedía treinta», recuerda la directora Emília Relvas." },
      { it: "Foi Emília quem propôs o impensável: levar o cante à escola, e às raparigas. «Para que a tradição viva, tem de incomodar um pouco», defende. «É preciso que os miúdos sintam que o cante também é deles, e não um museu dos avós. Embora os puristas resmunguem, já temos três coros femininos no concelho.»",
      es: "Fue Emília quien propuso lo impensable: llevar el cante a la escuela, y a las chicas. «Para que la tradición viva, tiene que incomodar un poco», defiende. «Es preciso que los chavales sientan que el cante también es suyo, y no un museo de los abuelos. Aunque los puristas refunfuñen, ya tenemos tres coros femeninos en el municipio.»" },
      { it: "A aposta começa a dar frutos audíveis. O coro infantil atuou no festival da vila com uma versão em que as vozes brancas seguram as notas que os velhos já não aguentam; houve quem chorasse na plateia e quem gravasse com o telemóvel. A taberna onde os coros ensaiam voltou a abrir ao jantar.",
      es: "La apuesta empieza a dar frutos audibles. El coro infantil actuó en el festival del pueblo con una versión en la que las voces blancas sostienen las notas que los viejos ya no aguantan; hubo quien lloró en el público y quien grabó con el móvil. La taberna donde ensayan los coros volvió a abrir por las noches." },
      { it: "Ninguém promete que todos estes miúdos continuem a cantar aos quarenta anos. Mas a cadeia deixou de estar partida: há quem aprenda, quem ensine e uma taberna com a porta aberta. No Alentejo, como diz um velho ditado local, canta-se porque não se sabe estar calado — e parece que se vai continuar a não saber.",
      es: "Nadie promete que todos estos chavales sigan cantando a los cuarenta años. Pero la cadena dejó de estar rota: hay quien aprende, quien enseña y una taberna con la puerta abierta. En el Alentejo, como dice un viejo dicho local, se canta porque no se sabe estar callado — y parece que se va a seguir sin saber." },
    ],
    words: [
      { it: "o cante", es: "el cante", note: "cante = canto coral alentejano; substantivo do verbo «cantar»" },
      { it: "o coro", es: "el coro" },
      { it: "as vozes", es: "las voces" },
      { it: "os ensaios", es: "los ensayos" },
      { it: "a taberna", es: "la taberna" },
      { it: "o repertório", es: "el repertorio" },
    ],
    questions: [
      { q: "¿Cuál era el problema de los coros más antiguos?", options: ["Falta de público nos festivais", "Falta de cantores: os filhos partiram e as vozes mais agudas morreram", "Falta de chapéus para o palco", "Falta de dinheiro para os deslocamentos"], answer: 1, why: "«O problema não era a falta de público — era a falta de cantores» e «as vozes mais agudas morreram com os seus donos»." },
      { q: "¿Qué propuso Emília Relvas?", options: ["Levar o cante à escola, e às raparigas", "Fechar os coros mais antigos", "Cantar só em Lisboa e no estrangeiro", "Gravar discos com orquestra"], answer: 0, why: "«Foi Emília quem propôs o impensável: levar o cante à escola, e às raparigas.»" },
      { q: "¿Por qué dice que la tradición 'tiene que incomodar un poco'?", options: ["Porque o cante é sempre desafinado", "Porque as aulas são muito difíceis", "Porque os ensaios acabam tarde", "Porque mexer com a tradição (escola, raparigas) gera protesto — e é assim que ela se renova"], answer: 3, why: "«Para que a tradição viva, tem de incomodar um pouco» e, apesar dos puristas, «já temos três coros femininos no concelho»." },
      { q: "¿Qué señal muestra que la cadena dejó de estar rota?", options: ["O festival da vila foi cancelado", "Os coros femininos foram proibidos", "Há quem aprenda, quem ensine e uma taberna com a porta aberta", "A UNESCO retirou a classificação"], answer: 2, why: "«a cadeia deixou de estar partida: há quem aprenda, quem ensine e uma taberna com a porta aberta»." },
    ],
    discuss: [
      { it: "Que tradição da tua terra corre o risco de se apagar? Como a salvarias?", es: "¿Qué tradición de tu tierra corre el riesgo de apagarse? ¿Cómo la salvarías?" },
      { it: "As tradições devem mudar (raparigas no cante, instrumentos novos) ou ficar intocáveis? Onde pões o limite?", es: "¿Las tradiciones deben cambiar (chicas en el cante, instrumentos nuevos) o permanecer intocables? ¿Dónde pones el límite?" },
    ],
  },

  /* ═══ C1 · 13 — Ciência (Idanha-a-Nova) ═══ */
  {
    id: "pt-news-c1-13", cat: "scienza", level: "C1", place: "Idanha-a-Nova", minutes: 5,
    title: "As pedras de Idanha-a-Nova contam quinhentos milhões de anos",
    titleEs: "Las piedras de Idanha-a-Nova cuentan quinientos millones de años",
    lead: {
      it: "Em Idanha-a-Nova, uma pedra comum pode ser um animal com quinhentos milhões de anos. O geoparque que atravessa a região é um arquivo aberto do tempo — e os geólogos pedem aos visitantes que o leiam sem o roubar.",
      es: "En Idanha-a-Nova, una piedra cualquiera puede ser un animal de quinientos millones de años. El geoparque que atraviesa la región es un archivo abierto del tiempo — y los geólogos piden a los visitantes que lo lean sin robarlo.",
    },
    paragraphs: [
      { it: "A paisagem parece um mar que desistiu de ser mar: ondulações de xisto, afloramentos de quartzito, povoações de pedra escurecida. Foi mar de verdade — duas vezes. As rochas guardam fósseis de trilobites e de criaturas que só existiram nos oceanos antigos, antes de existirem plantas em terra firme.",
      es: "El paisaje parece un mar que desistió de ser mar: ondulaciones de pizarra, afloramientos de cuarcita, pueblos de piedra oscurecida. Fue mar de verdad — dos veces. Las rocas guardan fósiles de trilobites y de criaturas que solo existieron en los océanos antiguos, antes de que existieran plantas en tierra firme." },
      { it: "O geoparque, reconhecido pela UNESCO, funciona como um museu sem teto: trilhos interpretativos levam o visitante aos afloramentos, e placas explicam cada camada. A regra é dura e simples: os fósseis ficam onde estão. Embora a tentação exista — há quem encha sacos de pedra de recordação —, a maioria respeita.",
      es: "El geoparque, reconocido por la Unesco, funciona como un museo sin techo: senderos interpretativos llevan al visitante a los afloramientos y carteles explican cada capa. La regla es dura y simple: los fósiles se quedan donde están. Aunque exista la tentación — hay quien llena bolsas de piedra de recuerdo —, la mayoría respeta." },
      { it: "«Cada fóssil fora de sítio é uma página arrancada», avisa a geóloga Clara Nabais. «Se um espécime desaparecer, perde-se a informação do onde e do quando. Para que a ciência avance, é preciso que os achados fiquem documentados. Não é por serem velhos que são menos precisos.»",
      es: "«Cada fósil fuera de lugar es una página arrancada», avisa la geóloga Clara Nabais. «Si un espécimen desaparece, se pierde la información del dónde y del cuándo. Para que la ciencia avance, es preciso que los hallazgos queden documentados. No por ser viejos son menos precisos.»" },
      { it: "A ciência local não vive só de defesa: a cada primavera, as chuvas escavam e entregam espécimes novos, e as universidades organizam campanhas com voluntários. Um desses achados — uma nova espécie de trilobite — foi descrita este ano por investigadores portugueses e espanhóis, com o nome da aldeia onde foi encontrado.",
      es: "La ciencia local no vive solo de defensa: cada primavera, las lluvias excavan y entregan especímenes nuevos, y las universidades organizan campañas con voluntarios. Uno de esos hallazgos — una nueva especie de trilobite — fue descrita este año por investigadores portugueses y españoles, con el nombre de la aldea donde fue encontrado." },
      { it: "O turismo científico paga as contas: quartos ocupados em abril, guias formados, lojas que vendem réplicas em vez de originais. Idanha faz-se assim à ideia de que o subsolo é um trunfo e não um atraso. Como resume um dos técnicos do geoparque: «Por aqui, quem remexe o chão encontra história — e mais vale sabê-la ler.»",
      es: "El turismo científico paga las cuentas: habitaciones ocupadas en abril, guías formados, tiendas que venden réplicas en lugar de originales. Idanha se hace así a la idea de que el subsuelo es una baza y no un retraso. Como resume uno de los técnicos del geoparque: «Por aquí, quien remueve el suelo encuentra historia — y más vale saber leerla.»" },
    ],
    words: [
      { it: "o fóssil", es: "el fósil" },
      { it: "o geoparque", es: "el geoparque" },
      { it: "as rochas", es: "las rocas" },
      { it: "o trilobite", es: "el trilobite" },
      { it: "a camada", es: "la capa, el estrato" },
      { it: "os achados", es: "los hallazgos", note: "achado = hallazgo, do verbo «achar» (encontrar)" },
    ],
    questions: [
      { q: "¿Por qué es importante que los fósiles no se muevan de su sitio?", options: ["Porque são demasiado frágeis para viajar", "Porque pertencem ao estado por lei", "Porque se perde a informação do onde e do quando", "Porque pesam demasiadas toneladas"], answer: 2, why: "«Se um espécime desaparecer, perde-se a informação do onde e do quando.»" },
      { q: "¿Qué entregan las lluvias cada primavera?", options: ["Turistas sem bilhete", "Espécimes novos", "Inundações nas aldeias", "Sementes de plantas raras"], answer: 1, why: "«a cada primavera, as chuvas escavam e entregam espécimes novos»." },
      { q: "¿Qué venden las tiendas del geoparque?", options: ["Réplicas em vez de originais", "Fósseis verdadeiros com certificado", "Pedras sem classificar", "Mapas do século XIX"], answer: 0, why: "«lojas que vendem réplicas em vez de originais»." },
      { q: "¿Qué significa que o subsolo é «um trunfo e não um atraso»?", options: ["Que a região devia construir mais túneis", "Que o solo não presta para agricultura", "Que o património geológico é uma vantagem económica e não um estorvo", "Que o turismo científico é caro demais"], answer: 2, why: "«o subsolo é um trunfo e não um atraso» — o património geológico tornou-se vantagem económica da região." },
    ],
    discuss: [
      { it: "Já encontraste um fóssil ou uma pedra «especial»? Conta a história — ou inventa uma plausível.", es: "¿Has encontrado alguna vez un fósil o una piedra «especial»? Cuenta la historia — o inventa una plausible." },
      { it: "Museus sem teto: deve poder levar-se um pedacinho de história para casa? Porquê?", es: "Museos sin techo: ¿debería poder llevarse uno un trocito de historia a casa? ¿Por qué?" },
    ],
  },

  /* ═══ C1 · 14 — Ambiente (Sagres) ═══ */
  {
    id: "pt-news-c1-14", cat: "ambiente", level: "C1", place: "Sagres", minutes: 5,
    title: "Sagres: o funil de asas entre dois continentes",
    titleEs: "Sagres: el embudo de alas entre dos continentes",
    lead: {
      it: "Todos os outonos, a Europa alada passa por Sagres. Milhares de aves de rapina juntam-se no promontório mais a sudoeste do continente antes de saltarem para África. Uma vila de pescadores transforma-se, por duas semanas, em capital mundial da observação.",
      es: "Todos los otoños, la Europa alada pasa por Sagres. Miles de aves rapaces se reúnen en el promontorio más al suroeste del continente antes de saltar a África. Un pueblo de pescadores se transforma, durante dos semanas, en capital mundial de la observación.",
    },
    paragraphs: [
      { it: "A geografia explica o espetáculo. As aves que descem da Escandinávia e da Europa central evitam o mar aberto, onde não há correntes térmicas para as sustentar. Então seguem a costa para sudoeste, até a terra acabar. Sagres é o funil: quem chega aqui tem de atravessar o estreito, mesmo que o vento diga o contrário.",
      es: "La geografía explica el espectáculo. Las aves que descienden de Escandinavia y de Europa central evitan el mar abierto, donde no hay corrientes térmicas que las sostengan. Entonces siguen la costa hacia el suroeste, hasta que la tierra se acaba. Sagres es el embudo: quien llega aquí tiene que cruzar el estrecho, aunque el viento diga lo contrario." },
      { it: "Desde há uma década, uma equipa conta tudo o que passa. Os observadores instalam-se ao amanhecer num posto acima da fortaleza, com binóculos e caderneta, e os números alimentam uma base de dados europeia: sem eles, ninguém saberia se as populações vão bem ou mal — e seria impossível proteger as rotas.",
      es: "Desde hace una década, un equipo cuenta todo lo que pasa. Los observadores se instalan al amanecer en un puesto sobre la fortaleza, con prismáticos y libreta, y las cifras alimentan una base de datos europea: sin ellas, nadie sabría si las poblaciones van bien o mal — y sería imposible proteger las rutas." },
      { it: "«É a maior concentração de aves de rapina da península», explica o ornitólogo Vasco Peixoto. «Caso o vento norte esteja forte, elas esperam dias inteiros nas árvores, e a vila enche-se de binóculos. Convém que os planeadores saibam por onde as aves passam, antes de aprovarem estruturas altas na rota.»",
      es: "«Es la mayor concentración de aves rapaces de la península», explica el ornitólogo Vasco Peixoto. «Si el viento del norte está fuerte, esperan días enteros en los árboles, y el pueblo se llena de prismáticos. Conviene que los planificadores sepan por dónde pasan las aves antes de aprobar estructuras altas en la ruta.»" },
      { it: "A feira de observação nasceu desses contadores e é hoje um dos maiores encontros do género: tendas de equipamento, passeios guiados, conferências à noite no salão paroquial. Os hotéis, que em outubro fechavam, agora são os primeiros a torcer por vento forte — cada dia de espera significa hóspedes extra.",
      es: "La feria de observación nació de esos contadores y es hoy uno de los mayores encuentros del género: carpas de equipamiento, paseos guiados, conferencias por la noche en el salón parroquial. Los hoteles, que en octubre cerraban, ahora son los primeros que desean viento fuerte — cada día de espera significa huéspedes extra." },
      { it: "O mar também tem a sua agenda: baleias e golfinhos passam ao largo, e os barcos de observação juntam-se aos de pesca. Há quem diga que Sagres é um fim de mundo; as aves discordam. Para elas, é uma porta — e o outono é a hora de ponta.",
      es: "El mar también tiene su agenda: ballenas y delfines pasan mar adentro, y los barcos de observación se suman a los de pesca. Hay quien dice que Sagres es un fin del mundo; las aves discrepan. Para ellas, es una puerta — y el otoño es la hora punta." },
    ],
    words: [
      { it: "as aves de rapina", es: "las aves rapaces" },
      { it: "os observadores", es: "los observadores" },
      { it: "os binóculos", es: "los prismáticos" },
      { it: "o vento", es: "el viento" },
      { it: "o estreito", es: "el estrecho", note: "o Estreito = o de Gibraltar; adjetivo: estreito = estrecho" },
      { it: "a rota", es: "la ruta" },
    ],
    questions: [
      { q: "¿Por qué evitan las aves el mar abierto?", options: ["Porque não há correntes térmicas para as sustentar", "Porque há demasiados barcos de pesca", "Por causa dos predadores marinhos", "Porque a água é demasiado fria"], answer: 0, why: "«evitam o mar aberto, onde não há correntes térmicas para as sustentar»." },
      { q: "¿Por qué los hoteles son ahora los primeros que desean viento fuerte?", options: ["Porque o vento faz voar os chapéus dos turistas", "Porque limpa as ruas da vila", "Porque os barcos de pesca não podem sair", "Porque cada dia de espera das aves significa hóspedes extra"], answer: 3, why: "«cada dia de espera significa hóspedes extra»." },
      { q: "¿Qué conviene, según Vasco Peixoto, antes de aprobar estructuras altas?", options: ["Um estudo de custos e benefícios", "Uma votação popular na vila", "Que os planeadores saibam por onde as aves passam", "A aprovação da UNESCO"], answer: 2, why: "«Convém que os planeadores saibam por onde as aves passam, antes de aprovarem estruturas altas na rota.»" },
      { q: "¿Por qué Sagres es una 'puerta' para las aves?", options: ["Porque a vila tem um portão antigo", "Porque é o ponto de passagem obrigatória entre dois continentes na viagem para África", "Porque as aves ficam ali a viver todo o ano", "Porque só lá existem ninhos protegidos"], answer: 1, why: "«Sagres é o funil: quem chega aqui tem de atravessar o estreito» — passagem obrigatória entre os dois continentes." },
    ],
    discuss: [
      { it: "Já viste uma migração de animais? Descreve o momento — ou diz a que gostarias de assistir.", es: "¿Has visto alguna vez una migración de animales? Describe el momento — o di a cuál te gustaría asistir." },
      { it: "Economia e conservação: pode uma vila viver dos visitantes sem assustar as aves? Como?", es: "Economía y conservación: ¿puede un pueblo vivir de los visitantes sin asustar a las aves? ¿Cómo?" },
    ],
  },

  /* ═══ C1 · 15 — Saúde (Ponte de Lima) ═══ */
  {
    id: "pt-news-c1-15", cat: "salute", level: "C1", place: "Ponte de Lima", minutes: 5,
    title: "Receita médica: quarenta minutos junto ao Lima",
    titleEs: "Receta médica: cuarenta minutos junto al Lima",
    lead: {
      it: "Em Ponte de Lima, alguns médicos passam uma receita invulgar: caminhadas em grupo, três vezes por semana, junto à ponte romana. O objetivo é tratar o corpo; o efeito colateral, descobriram os pacientes, é tratar a solidão.",
      es: "En Ponte de Lima, algunos médicos recetan algo insólito: caminatas en grupo, tres veces por semana, junto al puente romano. El objetivo es tratar el cuerpo; el efecto colateral, descubrieron los pacientes, es tratar la soledad.",
    },
    paragraphs: [
      { it: "O programa começou com uma queixa repetida nos centros de saúde: utentes sedentários, com a pressão alta e o humor baixo, para quem os comprimidos faziam metade do caminho. Faltava a outra metade — o movimento — e faltava alguém com quem o fazer.",
      es: "El programa empezó con una queja repetida en los centros de salud: pacientes sedentarios, con la presión alta y el ánimo bajo, para quienes las pastillas hacían la mitad del camino. Faltaba la otra mitad — el movimiento — y faltaba alguien con quien hacerlo." },
      { it: "A resposta saiu barata. A ecovia que segue o rio Lima já existia; faltava organizá-la em grupos. As terças, as quintas e os sábados de manhã, a coluna sai da igreja matriz e desce até à margem; quem chega atrasado corre — para chegar a tempo de caminhar devagar. Cada turma reúne quinze pessoas, a maioria com mais de sessenta anos, e caminha quarenta minutos ao ritmo do mais lento — regra inegociável, avisam os instrutores.",
      es: "La respuesta salió barata. La vía verde que sigue al río Lima ya existía; faltaba organizarla en grupos. Los martes, jueves y sábados por la mañana, la columna sale de la iglesia matriz y baja hasta la orilla; quien llega tarde corre — para llegar a tiempo de caminar despacio. Cada clase reúne a quince personas, la mayoría con más de sesenta años, y camina cuarenta minutos al ritmo del más lento — regla innegociable, avisan los instructores." },
      { it: "«Para que o exercício vire hábito, tem de dar gozo e ter hora marcada», resume a médica de família Teresa Amorim. «Convém que o doente se sinta esperado. Embora ninguém vença aqui nenhum recorde, há quem já não falhe um único encontro — e é esse o resultado que me interessa.»",
      es: "«Para que el ejercicio se vuelva hábito, tiene que dar placer y tener hora fija», resume la médica de familia Teresa Amorim. «Conviene que el paciente se sienta esperado. Aunque nadie bata aquí ningún récord, hay quien ya no falla ni un solo encuentro — y ese es el resultado que me interesa.»" },
      { it: "Ao fim de seis meses, os números saíram dos cadernos para os relatórios: pressão arterial mais estável, menos dores e uma métrica inesperada — o número de telefonemas ao serviço de saúde caiu. «Metade das chamadas era de gente que só queria conversar», admite uma enfermeira. A receita, afinal, escrevia-se sozinha.",
      es: "Al cabo de seis meses, las cifras salieron de los cuadernos a los informes: presión arterial más estable, menos dolores y una métrica inesperada — el número de llamadas al servicio de salud bajó. «La mitad de las llamadas era de gente que solo quería conversar», admite una enfermera. La receta, al fin y al cabo, se escribía sola." },
      { it: "O município quer estender o modelo às freguesias do interior, embora faltem instrutores e, dizem os mais velhos, falte a vista da ponte — que, com novecentos anos, já viu passar exércitos, peregrinos e feiras. Agora vê passar a caminhada da saúde, de manhã, ao ritmo do mais lento.",
      es: "El ayuntamiento quiere extender el modelo a las feligresías del interior, aunque falten instructores y, dicen los mayores, falte la vista del puente — que, con novecientos años, ya vio pasar ejércitos, peregrinos y ferias. Ahora ve pasar la caminata de la salud, por la mañana, al ritmo del más lento." },
    ],
    words: [
      { it: "a receita", es: "la receta", note: "receita = receta (médica ou culinária); BR «Receita Federal» = hacienda" },
      { it: "a caminhada", es: "la caminata" },
      { it: "os utentes", es: "los pacientes, los usuarios" },
      { it: "os grupos", es: "los grupos" },
      { it: "a ecovia", es: "la vía verde" },
      { it: "a pressão arterial", es: "la presión arterial" },
    ],
    questions: [
      { q: "¿Qué métrica inesperada apareció en los informes?", options: ["O peso médio dos participantes", "O número de utentes inscritos", "O custo dos comprimidos receitados", "O número de telefonemas ao serviço de saúde caiu"], answer: 3, why: "«o número de telefonemas ao serviço de saúde caiu» — e «Metade das chamadas era de gente que só queria conversar», admite uma enfermeira." },
      { q: "¿Cuál es la regla innegociable de las caminatas?", options: ["Caminhar sempre à noite", "Caminhar quarenta minutos ao ritmo do mais lento", "Chegar sempre atrasado a propósito", "Deixar os mais velhos em casa"], answer: 1, why: "«caminha quarenta minutos ao ritmo do mais lento — regra inegociável, avisam os instrutores»." },
      { q: "¿Cuándo salen las columnas de caminantes?", options: ["As terças, as quintas e os sábados de manhã", "Todos os dias ao meio-dia", "Só ao domingo depois do almoço", "Uma vez por mês, por sorteio"], answer: 0, why: "«As terças, as quintas e os sábados de manhã, a coluna sai da igreja matriz»." },
      { q: "¿Por qué dice Teresa Amorim que el ejercicio debe 'ter hora marcada'?", options: ["Porque os relógios da vila são muito precisos", "Porque o rio muda de altura", "Para que o exercício vire hábito e o doente se sinta esperado", "Porque os instrutores cobram por hora"], answer: 2, why: "«Para que o exercício vire hábito, tem de dar gozo e ter hora marcada» e «Convém que o doente se sinta esperado»." },
    ],
    discuss: [
      { it: "Caminhar sozinho ou em grupo? O que preferes para pensar — e o que preferes para descomprimir?", es: "¿Caminar solo o en grupo? ¿Qué prefieres para pensar — y qué para desahogarte?" },
      { it: "O teu médico podia receitar-te «natureza»? Que atividade te receitarias a ti próprio?", es: "¿Tu médico podría recetarte «naturaleza»? ¿Qué actividad te recetarías a ti mismo?" },
    ],
  },
];
