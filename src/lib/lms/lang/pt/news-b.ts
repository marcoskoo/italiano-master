/* ── PT · Notícias B1 + B2 (v9.26) ────────────────────────────────────
   Português europeu, método VOA. B1 ≈ 160-180 palavras, B2 ≈ 250-300.
   Campos `.it` = português (língua de estudo), `.es` = espanhol. */

import type { NewsItem } from "../../news";

export const PT_NEWS_B: NewsItem[] = [

  /* ═══ B1 · 1 — Saúde ═══ */
  {
    id: "pt-news-b1-01", cat: "salute", level: "B1", place: "Coimbra", minutes: 3,
    title: "A dieta mediterrânica: o que os médicos de Coimbra dizem agora",
    titleEs: "La dieta mediterránea: lo que dicen ahora los médicos de Coimbra",
    lead: {
      it: "Os hospitais de Coimbra passaram a receitar algo invulgar: azeite, sopa e uma hora à mesa. Os pacientes estranharam; os resultados não.",
      es: "Los hospitales de Coimbra empezaron a recetar algo inusual: aceite de oliva, sopa y una hora en la mesa. Los pacientes se sorprendieron; los resultados no.",
    },
    paragraphs: [
      { it: "A ideia antiga era contar calorias como se contam as moedas. A nova geração de médicos acha esse método incompleto: as pessoas não são carteiras.",
      es: "La idea antigua era contar calorías como se cuentan las monedas. La nueva generación de médicos encuentra ese método incompleto: las personas no son carteras." },
      { it: "Em Coimbra, os nutricionistas mudaram de pergunta. Em vez de «quanto comes?», perguntam «como comes?». Jantar em vinte minutos, de pé, com o telemóvel na mão não é igual a uma hora à mesa com a família. Os números dizem que sim.",
      es: "En Coimbra, los nutricionistas cambiaron la pregunta. En vez de «¿cuánto comes?», preguntan «¿cómo comes?». Cenar en veinte minutos, de pie, con el móvil en la mano no es igual a una hora en la mesa con la familia. Los números dicen que no." },
      { it: "A receita nova tem três partes. Primeira: azeite em vez de manteiga, como no sul. Segunda: sopa no início do almoço, como as avós ensinaram. Terceira: fruta em vez de sobremesas doces — com uma exceção por semana, porque a perfeção também enjoa.",
      es: "La receta nueva tiene tres partes. Primera: aceite en vez de mantequilla, como en el sur. Segunda: sopa al inicio del almuerzo, como enseñaron las abuelas. Tercera: fruta en vez de postres dulces — con una excepción por semana, porque la perfección también cansa." },
      { it: "O resultado mais curioso veio dos pacientes mais velhos. Quem já comia assim toda a vida não precisou de mudar nada; só precisou de ser elogiado. Um senhor de oitenta anos resumiu: «Doutora, a senhora está a receitar-me a cozinha da minha mãe.»",
      es: "El resultado más curioso vino de los pacientes más viejos. Quien ya comía así toda la vida no necesitó cambiar nada; solo necesitó ser elogiado. Un señor de ochenta años resumió: «Doctora, me está recetando la cocina de mi madre.»" },
    ],
    words: [
      { it: "receitar", es: "recetar" },
      { it: "invulgar", es: "inusual" },
      { it: "o nutricionista", es: "el nutricionista" },
      { it: "o azeite", es: "el aceite de oliva" },
      { it: "a sobremesa", es: "el postre" },
      { it: "enjoar", es: "cansar, hartar" },
    ],
    questions: [
      { q: "¿Cuál era la idea antigua de la dieta?", options: ["Contar calorias como se contam as moedas", "Comer muito", "Não comer nada", "Só sopas"], answer: 0, why: "«A ideia antiga era contar calorias como se contam as moedas.»" },
      { q: "¿Cuál es la nueva pregunta de los nutricionistas?", options: ["«Quanto comes?»", "«Como comes?»", "«Onde comes?»", "«Quando comes?»"], answer: 1, why: "«Em vez de “quanto comes?”, perguntam “como comes?”.»" },
      { q: "¿Cuáles son las tres partes de la receta nueva?", options: ["Azeite, sopa no início e fruta — com uma exceção por semana", "Manteiga, bolos e refrigerantes", "Só carne", "Nada de cozinhado"], answer: 0, why: "«Azeite em vez de manteiga… sopa no início do almoço… fruta em vez de sobremesas doces — com uma exceção por semana.»" },
      { q: "¿Qué pasó con los pacientes más viejos?", options: ["Tiveram de mudar tudo", "Não precisaram de mudar nada; só precisaram de ser elogiados", "Reclamaram muito", "Deixaram de vir"], answer: 1, why: "«Quem já comia assim toda a vida não precisou de mudar nada; só precisou de ser elogiado.»" },
      { q: "¿Qué dijo el señor de ochenta años?", options: ["«Está a receitar-me a cozinha da minha mãe.»", "«Não gosto de sopa.»", "«Quero bolos.»", "«A dieta é caríssima.»"], answer: 0, why: "«Doutora, a senhora está a receitar-me a cozinha da minha mãe.»" },
    ],
    discuss: [
      { it: "Como comes: em pé, com pressa, ou à mesa com tempo? Descreve o teu jantar típico.", es: "¿Cómo comes: de pie, con prisa, o en la mesa con tiempo? Describe tu cena típica." },
      { it: "«A perfeição também enjoa.» Uma exceção por semana: boa ideia ou desculpa? Discute.", es: "«La perfección también cansa.» Una excepción por semana: ¿buena idea o excusa? Discútelo." },
    ],
  },

  /* ═══ B1 · 2 — Ambiente ═══ */
  {
    id: "pt-news-b1-02", cat: "ambiente", level: "B1", place: "Madeira", minutes: 3,
    title: "A floresta que nunca perdeu o tempo",
    titleEs: "El bosque que nunca perdió el tiempo",
    lead: {
      it: "Na Madeira existe uma floresta que os cientistas chamam «fóssil viva». Tem vinte milhões de anos e estava quase a desaparecer por causa de uma planta bonita.",
      es: "En Madeira existe un bosque que los científicos llaman «fósil vivo». Tiene veinte millones de años y estaba casi desapareciendo por causa de una planta bonita.",
    },
    paragraphs: [
      { it: "A laurissilva é uma floresta de névoa: as nuvens tocam as árvores e a água escorre pelos troncos. Quando a Europa arrefeceu, há milhões de anos, esta floresta refugiou-se nas ilhas. Ficou lá, esquecida, a crescer devagar.",
      es: "La laurisilva es un bosque de niebla: las nubes tocan los árboles y el agua escurre por los troncos. Cuando Europa se enfrió, hace millones de años, este bosque se refugió en las islas. Quedó allí, olvidado, creciendo despacio." },
      { it: "No século XX, chegou o inimigo: uma planta ornamental de jardim, bonita e resistente. Cresceu mais depressa do que os loureiros, roubou-lhes a luz e a água. Em trinta anos, cobriu encostas inteiras.",
      es: "En el siglo XX llegó el enemigo: una planta ornamental de jardín, bonita y resistente. Creció más rápido que los laureles, les robó la luz y el agua. En treinta años, cubrió laderas enteras." },
      { it: "O plano de salvação foi feito à mão. Voluntários sobem as encostas com foices e sacos; cortam a invasora planta por planta, no sítio exato onde ela nasceu. É trabalho de meses — e de gerações.",
      es: "El plan de salvación se hizo a mano. Voluntarios suben las laderas con hoces y bolsas; cortan la invasora planta por planta, en el sitio exacto donde nació. Es trabajo de meses — y de generaciones." },
      { it: "A floresta agradece à sua maneira: os ribeiros correm mais limpos, os pássaros raros voltaram e o nevoeiro continua a chegar, todas as manhãs, ao mesmo portão de árvores.",
      es: "El bosque agradece a su manera: los arroyos corren más limpios, los pájaros raros volvieron y la niebla sigue llegando, todas las mañanas, a la misma puerta de árboles." },
    ],
    words: [
      { it: "a laurissilva", es: "la laurisilva (bosque de laureles)" },
      { it: "a névoa", es: "la niebla" },
      { it: "o tronco", es: "el tronco" },
      { it: "arrefecer", es: "enfriarse" },
      { it: "a encosta", es: "la ladera" },
      { it: "a foice", es: "la hoz" },
    ],
    questions: [
      { q: "¿Por qué es la laurisilva un «fósil vivo»?", options: ["Porque tem vinte milhões de anos e refugiou-se nas ilhas quando a Europa arrefeceu", "Porque tem fósseis dentro", "Porque é feita de pedra", "Porque é nova"], answer: 0, why: "«Quando a Europa arrefeceu, há milhões de anos, esta floresta refugiou-se nas ilhas.»" },
      { q: "¿Cuál era el enemigo del siglo XX?", options: ["Uma planta ornamental de jardim, bonita e resistente", "O frio", "Os turistas", "Os pássaros"], answer: 0, why: "«Chegou o inimigo: uma planta ornamental de jardim, bonita e resistente.»" },
      { q: "¿Cómo se hizo el plan de salvación?", options: ["Com satélites", "À mão: voluntários cortam a invasora planta por planta", "Com fogo", "Não se fez nada"], answer: 1, why: "«Voluntários sobem as encostas com foices e sacos; cortam a invasora planta por planta.»" },
      { q: "¿Cómo «agradece» la floresta?", options: ["Os ribeiros correm mais limpos, os pássaros raros voltaram e o nevoeiro continua a chegar", "Cresce sem parar", "Fica em silêncio", "Muda de cor"], answer: 0, why: "«Os ribeiros correm mais limpos, os pássaros raros voltaram e o nevoeiro continua a chegar, todas as manhãs.»" },
    ],
    discuss: [
      { it: "Plantas bonitas que viram inimigas: conheces algum caso na tua região?", es: "¿Plantas bonitas que se vuelven enemigas: conoces algún caso en tu región?" },
      { it: "Trabalho «de meses e de gerações»: o que é que a tua geração deve continuar?", es: "Trabajo «de meses y de generaciones»: ¿qué debe continuar tu generación?" },
    ],
  },

  /* ═══ B1 · 3 — Tecnologia ═══ */
  {
    id: "pt-news-b1-03", cat: "tecnologia", level: "B1", place: "Braga", minutes: 3,
    title: "A cidade que programa jogos (e pessoas)",
    titleEs: "La ciudad que programa juegos (y personas)",
    lead: {
      it: "Braga tem mil anos de história e uma indústria de videojogos de vinte. Os programadores dizem que a idade da cidade é a sua melhor engine.",
      es: "Braga tiene mil años de historia y una industria de videojuegos de veinte. Los programadores dicen que la edad de la ciudad es su mejor motor.",
    },
    paragraphs: [
      { it: "Ninguém planeou isto. Nos anos noventa, uma pequena empresa abriu escritório perto da universidade. Contratou cinco estudantes. Hoje, o cluster emprega centenas de pessoas e exporta jogos para o mundo inteiro.",
      es: "Nadie planeó esto. En los años noventa, una pequeña empresa abrió oficina cerca de la universidad. Contrató a cinco estudiantes. Hoy, el clúster emplea a cientos de personas y exporta juegos al mundo entero." },
      { it: "Os estúdios descobriram uma vantagem esquisita: as ruas antigas são um nível de jogo pronto a usar. Pedras, escadas, sombras das tardes — os designers passeiam a cidade com um caderno e voltam ao escritório com ideias.",
      es: "Los estudios descubrieron una ventaja extraña: las calles antiguas são un nivel de juego listo para usar. Piedras, escaleras, sombras de la tarde — los diseñadores pasean la ciudad con un cuaderno y vuelven a la oficina con ideas." },
      { it: "A universidade entrou no jogo. Os cursos novos misturam programação, arte e psicologia — porque um jogo bom é uma máquina de emoções, dizem os professores, e as emoções têm regras que valem a pena estudar.",
      es: "La universidad entró en el juego. Los cursos nuevos mezclan programación, arte y psicología — porque un buen juego es una máquina de emociones, dicen los profesores, y las emociones tienen reglas que vale la pena estudiar." },
      { it: "A pergunta do público continua a mesma: os videojogos fazem mal? A resposta de Braga é calma: depends. Faz mal um mau jogo, como faz mal um mau livro. A cidade aposta que a próxima pergunta seja outra: quando é que o vosso estúdio abre?",
      es: "La pregunta del público sigue la misma: ¿los videojuegos hacen mal? La respuesta de Braga es calmada: depende. Hace mal un mal juego, como hace mal un mal libro. La ciudad apuesta a que la próxima pregunta sea otra: ¿cuándo abre vuestro estudio?" },
    ],
    words: [
      { it: "o videojogo", es: "el videojuego (também: jogo eletrónico)" },
      { it: "o estúdio", es: "el estudio (de desarrollo)" },
      { it: "o cluster", es: "el clúster (polo industrial)" },
      { it: "a engine", es: "el motor (de juego, anglicismo)" },
      { it: "misturar", es: "mezclar" },
      { it: "fazer mal", es: "hacer daño" },
    ],
    questions: [
      { q: "¿Cómo empezó el clúster de Braga?", options: ["Com uma pequena empresa dos anos noventa e cinco estudantes", "Com uma lei europeia", "Com um estúdio americano", "Por acaso, sem empresa"], answer: 0, why: "«Nos anos noventa, uma pequena empresa abriu escritório perto da universidade. Contratou cinco estudantes.»" },
      { q: "¿Cuál es la «ventaja extraña» de Braga?", options: ["O clima", "As ruas antigas são um nível de jogo pronto a usar", "Os comboios", "Os preços baixos"], answer: 1, why: "«As ruas antigas são um nível de jogo pronto a usar. Pedras, escadas, sombras das tardes.»" },
      { q: "¿Qué mezclan los cursos nuevos?", options: ["Programação, arte e psicologia", "Só matemática", "Só desenho", "Só história"], answer: 0, why: "«Os cursos novos misturam programação, arte e psicologia — porque um jogo bom é uma máquina de emoções.»" },
      { q: "¿Cuál es la respuesta de Braga sobre «¿los videojuegos hacen mal?»", options: ["«Sim, sempre.»", "«Depende: faz mal um mau jogo, como faz mal um mau livro.»", "«Nunca.»", "«Não sei.»"], answer: 1, why: "«A resposta de Braga é calma: depends. Faz mal um mau jogo, como faz mal um mau livro.»" },
    ],
    discuss: [
      { it: "Jogos: máquina de emoções ou perda de tempo? Qual é a tua experiência real?", es: "Juegos: ¿máquina de emociones o pérdida de tiempo? ¿Cuál es tu experiencia real?" },
      { it: "A tua cidade tem alguma «vantagem esquisita» que ninguém transformou ainda em projeto? Qual?", es: "¿Tu ciudad tiene alguna «ventaja extraña» que nadie ha transformado aún en proyecto? ¿Cuál?" },
    ],
  },

  /* ═══ B2 · 1 — Economia ═══ */
  {
    id: "pt-news-b2-01", cat: "economia", level: "B2", place: "Portugal", minutes: 4,
    title: "Os nómadas digitais escolheram o Atlântico",
    titleEs: "Los nómadas digitales eligieron el Atlántico",
    lead: {
      it: "Milhares de trabalhadores remotos trocaram escritórios caros por cidades à beira-mar. As cidades gostam do dinheiro; os moradores gostam das perguntas. Ninguém gosta da mesma resposta.",
      es: "Miles de trabajadores remotos cambiaron oficinas caras por ciudades junto al mar. A las ciudades les gusta el dinero; a los vecinos les gustan las preguntas. A nadie le gusta la misma respuesta.",
    },
    paragraphs: [
      { it: "A aritmética é simples. Um ordenador portátil em Lisboa ou no Porto vale o mesmo salário que em São Francisco, mas o aluguer custa metade e o café custa cinquenta cêntimos. Para quem trabalha para o estrangeiro, Portugal tornou-se, de repente, um desconto geográfico.",
      es: "La aritmética es simple. Un portátil en Lisboa o en Oporto vale el mismo salario que en San Francisco, pero el alquiler cuesta la mitad y el café cuesta cincuenta céntimos. Para quien trabaja para el extranjero, Portugal se volvió, de repente, un descuento geográfico." },
      { it: "O estado acompanhou com um visto especial e com cafés com boa internet. Os números chegaram depressa: bairros inteiros da Baixa e de Cedofelta encheram-se de teclados com luzes diferentes. Os jornais chamaram a isto «a nova golden visa do teclado».",
      es: "El estado acompañó con un visado especial y con cafés con buena internet. Los números llegaron rápido: barrios enteros del centro se llenaron de teclados con luces distintas. Los periódicos llamaron a esto «la nueva golden visa del teclado»." },
      { it: "Os moradores antigos têm outra conta. Os alugueres das suas casas subiram porque os senhorios descobriram um mercado novo; os cafés preferem clientes que passam a manhã inteira com um chá. Uma vizinha de oitenta anos fez o lamento do ano: «A minha rua fala inglês muito bem. Era bom que também falasse português.»",
      es: "Los vecinos antiguos tienen otra cuenta. Los alquileres de sus casas subieron porque los caseros descubrieron un mercado nuevo; los cafés prefieren clientes que pasan la mañana entera con un té. Una vecina de ochenta años hizo el lamento del año: «Mi calle habla inglés muy bien. Sería bueno que también hablase portugués.»" },
      { it: "Os economistas dividem-se, como sempre. Uns vêem a solução de um problema português antigo: a fuga de cérebros a troco de dinheiro que chega. Outros vêem a repetição de um padrão conhecido: uma economia que aluga o que tem — sol, mar e ruas bonitas — em vez de produzir o que ainda não tem.",
      es: "Los economistas se dividen, como siempre. Unos ven la solución de un problema portugués antiguo: la fuga de cerebros a cambio de dinero que llega. Otros ven la repetición de un patrón conocido: una economía que alquila lo que tiene — sol, mar y calles bonitas — en vez de producir lo que aún no tiene." },
      { it: "A resposta mais honesta talvez seja a de um nómada, num bar do Porto, ao terceiro dia de sol: «Vim por três meses. Fico por causa do pão. Mas sim: eu também sou o problema do aluguer. É incómodo ser, ao mesmo tempo, turista e vizinho.»",
      es: "La respuesta más honesta quizá sea la de un nómada, en un bar de Oporto, al tercer día de sol: «Vine por tres meses. Me quedo por el pan. Pero sí: yo también soy el problema del alquiler. Es incómodo ser, al mismo tiempo, turista y vecino.»" },
    ],
    words: [
      { it: "o nómada digital", es: "el nómada digital" },
      { it: "o aluguer", es: "el alquiler" },
      { it: "o senhorio", es: "el casero" },
      { it: "a fuga de cérebros", es: "la fuga de cerebros" },
      { it: "a troco de", es: "a cambio de" },
      { it: "incómodo", es: "incómodo" },
    ],
    questions: [
      { q: "¿Por qué Portugal se volvió un «descuento geográfico»?", options: ["Porque os salários baixaram", "Porque o mesmo salário compra o dobro: aluguer pela metade, café a cinquenta cêntimos", "Porque não há impostos", "Porque é mais perto de casa"], answer: 1, why: "«Um ordenador portátil em Lisboa… vale o mesmo salário que em São Francisco, mas o aluguer custa metade e o café custa cinquenta cêntimos.»" },
      { q: "¿Qué hicieron el estado y los cafés?", options: ["Nada", "O estado criou um visto especial; os cafés apostaram em boa internet", "Proibiram os nómadas", "Subiram os preços do café"], answer: 1, why: "«O estado acompanhou com um visto especial e com cafés com boa internet.»" },
      { q: "¿Cuál fue el «lamento del año» de la vecina?", options: ["«A minha rua fala inglês muito bem. Era bom que também falasse português.»", "«Odeio turistas.»", "«Quero silêncio.»", "«O café está caro.»"], answer: 0, why: "«A minha rua fala inglês muito bem. Era bom que também falasse português.»" },
      { q: "¿Qué ven los otros economistas?", options: ["Solução total, sem problemas", "A repetição de um padrão: uma economia que aluga o que tem em vez de produzir o que ainda não tem", "Uma moda passageira", "Um erro do estado"], answer: 1, why: "«Outros vêem a repetição de um padrão conhecido: uma economia que aluga o que tem — sol, mar e ruas bonitas — em vez de produzir o que ainda não tem.»" },
      { q: "¿Qué dijo el nómada en el bar de Oporto?", options: ["«Vou-me embora já.»", "«Vim por três meses. Fico por causa do pão. Mas eu também sou o problema do aluguer.»", "«Portugal é perfeito.»", "«Não falo com moradores.»"], answer: 1, why: "«Vim por três meses. Fico por causa do pão. Mas sim: eu também sou o problema do aluguer.»" },
    ],
    discuss: [
      { it: "Turista e vizinho ao mesmo tempo: já foste as duas coisas? Como se resolve?", es: "Turista y vecino a la vez: ¿has sido las dos cosas? ¿Cómo se resuelve?" },
      { it: "Alugar o que se tem ou produzir o que não se tem: que tipo de economia prefere a tua cidade? E tu?", es: "¿Alquilar lo que se tiene o producir lo que no se tiene: qué tipo de economía prefiere tu ciudad? ¿Y tú?" },
    ],
  },

  /* ═══ B2 · 2 — Ciência ═══ */
  {
    id: "pt-news-b2-02", cat: "scienza", level: "B2", place: "Açores", minutes: 4,
    title: "Vigiar vulcões: a ciência da paciência",
    titleEs: "Vigilar volcanes: la ciencia de la paciencia",
    lead: {
      it: "Nos Açores, nove ilhas vivem em cima de uma cozinha subterrânea. A tarefa dos cientistas é escutar o fogo antes de ele falar — e avisar sem assustar.",
      es: "En las Azores, nueve islas viven encima de una cocina subterránea. La tarea de los científicos es escuchar el fuego antes de que hable — y avisar sin asustar.",
    },
    paragraphs: [
      { it: "A geografia não podia ser mais dramática: as ilhas são os cumes de montanhas que nascem do fundo do Atlântico. Algumas dessas montanhas ainda têm fumo. Os habitantes aprenderam a conviver com vizigos de calor, com águas quentes na terra e, de vez em quando, com um dia em que o chão decide mudar de ideia.",
      es: "La geografía no podría ser más dramática: las islas son las cumbres de montañas que nacen del fondo del Atlántico. Algunas de esas montañas todavía tienen humo. Los habitantes aprendieron a convivir con vecindarios de calor, con aguas calientes en la tierra y, de vez en cuando, con un día en que el suelo decide cambiar de idea." },
      { it: "A monitorização é uma arte de detalhes. Sismógrafos medem os passos do chão; satélites medem a distância entre as ilhas ao milímetro — porque uma ilha que cresce está a preparar alguma coisa; gases são analisados como se fossem análises de sangue a um doente crónico.",
      es: "La monitorización es un arte de detalles. Sismógrafos miden los pasos del suelo; satélites miden la distancia entre las islas al milímetro — porque una isla que crece está preparando algo; gases son analizados como si fueran análisis de sangre de un paciente crónico." },
      { it: "A parte difícil não é técnica; é humana. Um aviso adiantado salva vidas mas destrói verões: o turismo não gosta da palavra «vulcão» na mesma frase que a palavra «férias». Os cientistas insistem na mesma regra: o pior aviso é o que não se dá; o segundo pior é o que ninguém acredita.",
      es: "La parte difícil no es técnica; es humana. Un aviso adelantado salva vidas pero destruye veranos: al turismo no le gusta la palabra «volcán» en la misma frase que la palabra «vacaciones». Los científicos insisten en la misma regla: el peor aviso es el que no se da; el segundo peor es el que nadie cree." },
      { it: "A última erupção deu a prova. A lava respeitou, de facto, o mapa que a ciência tinha desenhado décadas antes. As casas que foram construídas fora da linha ficaram de pé; as que estavam dentro da linha — construídas contra o conselho — não ficaram. A natureza leu os relatórios e cumpriu-os, com a letra miúda.",
      es: "La última erupción dio la prueba. La lava respetó, de hecho, el mapa que la ciencia había dibujado décadas antes. Las casas construidas fuera de la línea quedaron en pie; las que estaban dentro de la línea — construidas contra el consejo — no. La naturaleza leyó los informes y los cumplió, con letra pequeña." },
      { it: "Os vulcanólogos açorianos têm uma frase que repetem nas escolas, sorrindo: «Nós não prevemos o futuro. Nós lemos o passado — que é a única língua que o chão fala sem sotaque.»",
      es: "Los vulcanólogos azorianos tienen una frase que repiten en las escuelas, sonriendo: «Nosotros no predecimos el futuro. Leemos el pasado — que es la única lengua que el suelo habla sin acento.»" },
    ],
    words: [
      { it: "a erupção", es: "la erupción" },
      { it: "a lava", es: "la lava" },
      { it: "o sismógrafo", es: "el sismógrafo" },
      { it: "a monitorização", es: "la monitorización" },
      { it: "o aviso", es: "el aviso" },
      { it: "a letra miúda", es: "la letra pequeña (de un contrato)" },
    ],
    questions: [
      { q: "¿Qué son las islas, geográficamente?", options: ["Praias gigantes", "Os cumes de montanhas que nascem do fundo do Atlântico", "Rochas flutuantes", "Antigas cidades"], answer: 1, why: "«As ilhas são os cumes de montanhas que nascem do fundo do Atlântico.»" },
      { q: "¿Qué mide la monitorización?", options: ["Nada", "Sismógrafos, satélites ao milímetro, gases como análises de sangue", "Só a chuva", "Só a temperatura"], answer: 1, why: "«Sismógrafos medem os passos do chão; satélites medem a distância entre as ilhas ao milímetro; gases são analisados como se fossem análises de sangue.»" },
      { q: "¿Por qué es difícil la parte humana?", options: ["Porque ninguém quer saber", "Porque o turismo não gosta da palavra «vulcão» junto de «férias»", "Porque é cara", "Porque é ilegal avisar"], answer: 1, why: "«O turismo não gosta da palavra “vulcão” na mesma frase que a palavra “férias”.»" },
      { q: "¿Cuál es la regla que repiten los científicos?", options: ["«Nunca avisar.»", "«O pior aviso é o que não se dá; o segundo pior é o que ninguém acredita.»", "«Avisar uma vez por ano.»", "«Avisar só em caso de pânico.»"], answer: 1, why: "«O pior aviso é o que não se dá; o segundo pior é o que ninguém acredita.»" },
      { q: "¿Qué pasó con las casas de la última erupción?", options: ["Todas caíram", "As que estavam fora da linha do mapa ficaram de pé; as que estavam dentro, não", "A lava mudou de rumo sozinha", "Ninguém se lembra"], answer: 1, why: "«As casas que foram construídas fora da linha ficaram de pé; as que estavam dentro da linha — construídas contra o conselho — não ficaram.»" },
    ],
    discuss: [
      { it: "«Ler o passado, que é a única língua que o chão fala.» Onde mais vale ler o passado em vez de prever o futuro?", es: "«Leer el pasado, la única lengua que el suelo habla.» ¿Dónde más vale leer el pasado en vez de predecir el futuro?" },
      { it: "Aviso sem pânico: como se comunica um risco à tua família sem assustar ninguém?", es: "Aviso sin pánico: ¿cómo se comunica un riesgo a tu familia sin asustar a nadie?" },
    ],
  },

  /* ═══ B2 · 3 — Cultura ═══ */
  {
    id: "pt-news-b2-03", cat: "cultura", level: "B2", place: "Lisboa", minutes: 4,
    title: "O fado: a saudade com acompanhamento",
    titleEs: "El fado: la saudade con acompañamiento",
    lead: {
      it: "Há uma música em Portugal que se canta com os olhos fechados e o coração aberto. A UNESCO declarou-a património; os fadistas explicam-na com um encolher de ombros: é só a vida, com viola.",
      es: "Hay una música en Portugal que se canta con los ojos cerrados y el corazón abierto. La UNESCO la declaró patrimonio; los fadistas la explican encogiéndose de hombros: es solo la vida, con guitarra.",
    },
    paragraphs: [
      { it: "O fado nasceu nas ruas estreitas, entre marinheiros e costureiras, muito antes de ter nome. As letras falavam de partidas, de regressos e de uma palavra intradutível — saudade — que os dicionários tentam e não conseguem.",
      es: "El fado nació en las calles estrechas, entre marineros y costureras, mucho antes de tener nombre. Las letras hablaban de partidas, de regresos y de una palabra intraducible — saudade — que los diccionarios intentan y no consiguen." },
      { it: "A regra do género é estranha para quem vem de fora: quanto mais triste a letra, mais caloroso o público. Um fado sobre amores perdidos enche a casa; um fado alegre levanta suspeitas. Os velhos fadistas avisam: o fado não é tristeza; é a tristeza bem tratada, com dignidade — e às vezes até com ironia.",
      es: "La regla del género es extraña para quien viene de fuera: cuanto más triste la letra, más caluroso el público. Un fado sobre amores perdidos llena la casa; un fado alegre levanta sospechas. Los viejos fadistas avisan: el fado no es tristeza; es la tristeza bien tratada, con dignidad — y a veces hasta con ironía." },
      { it: "A voz mais famosa transformou tudo. Amália cantou nos maiores teatros do mundo e continuou a morar em Lisboa, na mesma rua. Quando morreu, o país chorou em silêncio, como nos seus próprios fados; o governo decretou três dias de luto — para uma cantora. Isso diz tudo sobre o lugar da música na alma do país.",
      es: "La voz más famosa transformó todo. Amália cantó en los mayores teatros del mundo y siguió viviendo en Lisboa, en la misma calle. Cuando murió, el país lloró en silencio, como en sus propios fados; el gobierno decretó tres días de luto — para una cantante. Eso dice todo sobre el lugar de la música en el alma del país." },
      { it: "Hoje, o fado sobrevive a uma nova vida: casas novas, cantores de vinte anos, turistas que fecham os olhos sem perceber uma palavra — e que percebem, ao mesmo tempo, tudo o que importa. A regra das casas continua sagrada: quando o fado começa, param as conversas, param os pratos. A voz canta; a casa escuta.",
      es: "Hoy, el fado sobrevive a una nueva vida: casas nuevas, cantores de veinte años, turistas que cierran los ojos sin entender una palabra — y que entienden, al mismo tiempo, todo lo que importa. La regla de las casas sigue sagrada: cuando el fado empieza, paran las conversaciones, paran los platos. La voz canta; la casa escucha." },
    ],
    words: [
      { it: "o fado", es: "el fado" },
      { it: "a saudade", es: "la saudade (nostalgia intraducible)" },
      { it: "o fadista", es: "el fadista (cantante de fado)" },
      { it: "a partida / o regresso", es: "la partida / el regreso" },
      { it: "o luto", es: "el luto" },
      { it: "sagrado", es: "sagrado" },
    ],
    questions: [
      { q: "¿Dónde nació el fado y de qué hablaban las letras?", options: ["Nos teatros, de política", "Nas ruas estreitas, entre marinheiros e costureiras: partidas, regressos e saudade", "Na corte, de reis", "Na rádio, de publicidade"], answer: 1, why: "«O fado nasceu nas ruas estreitas, entre marinheiros e costureiras… As letras falavam de partidas, de regressos e de uma palavra intradutível — saudade.»" },
      { q: "¿Cuál es la regla extraña del género?", options: ["Quanto mais triste a letra, mais caloroso o público; um fado alegre levanta suspeitas", "Tem de ser alegre sempre", "É proibido chorar", "Tem de durar dez minutos"], answer: 0, why: "«Quanto mais triste a letra, mais caloroso o público. Um fado alegre levanta suspeitas.»" },
      { q: "¿Cómo definen el fado los viejos fadistas?", options: ["É tristeza, só tristeza", "Não é tristeza; é a tristeza bem tratada, com dignidade — e às vezes com ironia", "É ópera popular", "É dança"], answer: 1, why: "«O fado não é tristeza; é a tristeza bem tratada, com dignidade — e às vezes até com ironia.»" },
      { q: "¿Qué pasó cuando murió Amália?", options: ["Nada de especial", "O governo decretou três dias de luto para uma cantora", "As casas fecharam para sempre", "O fado acabou"], answer: 1, why: "«O governo decretou três dias de luto — para uma cantora. Isso diz tudo sobre o lugar da música na alma do país.»" },
      { q: "¿Cuál es la regla sagrada de las casas de fado?", options: ["Bater palmas a cantar", "Quando o fado começa, param as conversas e os pratos: a voz canta, a casa escuta", "Fotografar tudo", "Cantar com o fadista"], answer: 1, why: "«A regra das casas continua sagrada: quando o fado começa, param as conversas, param os pratos.»" },
    ],
    discuss: [
      { it: "Saudade: tenta defini-la em português, sem usar a própria palavra. Consegues?", es: "Saudade: intenta definirla en portugués, sin usar la propia palabra. ¿Lo consigues?" },
      { it: "«Tristeza bem tratada, com dignidade.» Que música do teu país faz isso? Como se chama esse género?", es: "«Tristeza bien tratada, con dignidad.» ¿Qué música de tu país hace eso? ¿Cómo se llama ese género?" },
    ],
  },
];
