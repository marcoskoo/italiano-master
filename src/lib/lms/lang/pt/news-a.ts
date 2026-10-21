/* ── PT · Notícias A1 + A2 (v9.26) ────────────────────────────────────
   Notícias em português europeu, nível adaptado, método VOA Learning
   English. Conteúdo 100% original didático. Corpo: A1 ≈ 80 palavras,
   A2 ≈ 130-150. Léxico controlado, presente (A1) / pretérito e futuro
   (A2). Campos `.it` = português (língua de estudo), `.es` = espanhol. */

import type { NewsItem } from "../../news";

export const PT_NEWS_A: NewsItem[] = [

  /* ═══ A1 · 1 — Ciência ═══ */
  {
    id: "pt-news-a1-01", cat: "scienza", level: "A1", place: "Lisboa", minutes: 2,
    title: "A sesta de vinte minutos",
    titleEs: "La siesta de veinte minutos",
    lead: {
      it: "Um estudo em Lisboa tem boas notícias para quem trabalha muito: uma sesta curta depois do almoço ajuda o coração e a cabeça.",
      es: "Un estudio en Lisboa tiene buenas noticias para quien trabaja mucho: una siesta corta después del almuerzo ayuda al corazón y a la cabeza.",
    },
    paragraphs: [
      { it: "Cientistas portugueses têm uma boa notícia. Uma sesta de vinte minutos depois do almoço faz bem. Mais do que isso já não faz.",
      es: "Científicos portugueses tienen una buena noticia. Una siesta de veinte minutos después del almuerzo hace bien. Más que eso ya no." },
      { it: "O estudo diz assim: vinte minutos, três vezes por semana. Não é preciso dormir uma hora. O corpo precisa de descanso, não de férias.",
      es: "El estudio dice así: veinte minutos, tres veces por semana. No hace falta dormir una hora. El cuerpo necesita descanso, no vacaciones." },
      { it: "Na sesta, a memória organiza as ideias. O coração desacelera. Depois, a pessoa acorda com energia para a tarde.",
      es: "En la siesta, la memoria organiza las ideas. El corazón desacelera. Después, la persona despierta con energía para la tarde." },
      { it: "Os médicos dizem uma coisa simples: a sesta é grátis, é fácil e é boa para todos. Só precisa de um sofá e de vinte minutos.",
      es: "Los médicos dicen algo simple: la siesta es gratis, es fácil y es buena para todos. Solo necesita un sofá y veinte minutos." },
    ],
    words: [
      { it: "a sesta", es: "la siesta" },
      { it: "o estudo", es: "el estudio (científico)" },
      { it: "o descanso", es: "el descanso" },
      { it: "a memória", es: "la memoria" },
      { it: "desacelerar", es: "desacelerar, bajar el ritmo" },
      { it: "acordar", es: "despertar" },
    ],
    questions: [
      { q: "¿Cuánto debe durar la siesta, según el estudio?", options: ["Vinte minutos", "Duas horas", "Uma hora", "Nada"], answer: 0, why: "«Uma sesta de vinte minutos depois do almoço faz bem. Mais do que isso já não faz.»" },
      { q: "¿Cuántas veces por semana?", options: ["Três vezes", "Todos os dias", "Nunca", "Dez vezes"], answer: 0, why: "«Vinte minutos, três vezes por semana.»" },
      { q: "¿Qué hace la memoria durante la siesta?", options: ["Descansa sem fazer nada", "Organiza as ideias", "Trabalha muito", "Esquece tudo"], answer: 1, why: "«Na sesta, a memória organiza as ideias.»" },
      { q: "¿Qué se necesita para la siesta perfecta?", options: ["Um sofá e vinte minutos", "Um hotel", "Um médico", "Muito dinheiro"], answer: 0, why: "«Só precisa de um sofá e de vinte minutos.»" },
    ],
    discuss: [
      { it: "Costumas fazer sesta? Quantos minutos? Sê honesto!", es: "¿Sueles echar la siesta? ¿Cuántos minutos? ¡Sé honesto!" },
      { it: "No teu país, a sesta é normal ou é motivo de piada? Porquê?", es: "En tu país, ¿la siesta es normal o motivo de broma? ¿Por qué?" },
    ],
  },

  /* ═══ A1 · 2 — Ambiente ═══ */
  {
    id: "pt-news-a1-02", cat: "ambiente", level: "A1", place: "Porto", minutes: 2,
    title: "Os peixes voltam ao Douro",
    titleEs: "Los peces vuelven al Duero",
    lead: {
      it: "Há trinta anos, o rio Douro estava sujo. Hoje os peixes voltam e os barcos rápidos já não passam. Um rio pode mudar de vida.",
      es: "Hace treinta años, el río Duero estaba sucio. Hoy los peces vuelven y las lanchas rápidas ya no pasan. Un río puede cambiar de vida.",
    },
    paragraphs: [
      { it: "Antigamente, o Douro recebia água suja das fábricas. Os peixes iam embora. O rio cheirava mal.",
      es: "Antes, el Duero recibía agua sucia de las fábricas. Los peces se iban. El río olía mal." },
      { it: "A cidade mudou de ideias. As fábricas fecharam ou limparam. O rio ganhou um novo tratamento de água.",
      es: "La ciudad cambió de idea. Las fábricas cerraron o se limpiaron. El río ganó una nueva depuración de agua." },
      { it: "Agora os barcos rápidos têm regras: passam longe da margem, devagar. O barulho assustava os peixes.",
      es: "Ahora las lanchas rápidas tienen reglas: pasan lejos de la orilla, despacio. El ruido asustaba a los peces." },
      { it: "Este ano, os cientistas contaram mais peixes. Os pescadores sorriem. Um rio limpo é bom para todos — e é também bonito.",
      es: "Este año, los científicos contaron más peces. Los pescadores sonríen. Un río limpio es bueno para todos — y también es bonito." },
    ],
    words: [
      { it: "o rio", es: "el río" },
      { it: "sujo / limpo", es: "sucio / limpio" },
      { it: "a margem", es: "la orilla" },
      { it: "assustar", es: "asustar" },
      { it: "o barulho", es: "el ruido" },
      { it: "a fábrica", es: "la fábrica" },
    ],
    questions: [
      { q: "¿Por qué se iban los peces antes?", options: ["Porque o rio estava sujo", "Porque chovia", "Porque os peixes gostavam do mar", "Sem razão"], answer: 0, why: "«Antigamente, o Douro recebia água suja das fábricas. Os peixes iam embora.»" },
      { q: "¿Qué reglas tienen ahora las lanchas rápidas?", options: ["Passam longe da margem, devagar", "Passam dentro de casa", "Não passam nunca", "Passam a toda a velocidade"], answer: 0, why: "«Os barcos rápidos têm regras: passam longe da margem, devagar.»" },
      { q: "¿Qué asustaba a los peces?", options: ["O barulho", "A música", "A chuva", "O sol"], answer: 0, why: "«O barulho assustava os peixes.»" },
      { q: "¿Qué pasó este año?", options: ["Os cientistas contaram mais peixes", "Os peixes foram embora", "O rio fechou", "As fábricas voltaram"], answer: 0, why: "«Este ano, os cientistas contaram mais peixes. Os pescadores sorriem.»" },
    ],
    discuss: [
      { it: "Há um rio na tua cidade? Está limpo ou sujo? Como sabes?", es: "¿Hay un río en tu ciudad? ¿Está limpio o sucio? ¿Cómo lo sabes?" },
      { it: "O que é mais difícil: limpar um rio ou mantê-lo limpo? Porquê?", es: "¿Qué es más difícil: limpiar un río o mantenerlo limpio? ¿Por qué?" },
    ],
  },

  /* ═══ A1 · 3 — Sociedade ═══ */
  {
    id: "pt-news-a1-03", cat: "societa", level: "A1", place: "Lisboa", minutes: 2,
    title: "Uma bica, por favor",
    titleEs: "Un café, por favor",
    lead: {
      it: "Em Lisboa, o café tem regras simples e uma palavra mágica: bica. Quem pede «espresso» é turista — e toda a gente percebe.",
      es: "En Lisboa, el café tiene reglas simples y una palabra mágica: bica. Quien pide «espresso» es turista — y todos lo notan.",
    },
    paragraphs: [
      { it: "De manhã, as padarias enchem-se. As pessoas bebem o café ao balcão, em pé. Duas goladas e está feito.",
      es: "Por la mañana, las panaderías se llenan. La gente bebe el café en el mostrador, de pie. Dos sorbos y listo." },
      { it: "O café pequeno chama-se bica. O café com mais leite chama-se galão. Palavras novas, receitas antigas.",
      es: "El café pequeño se llama bica. El café con más leche se llama galão. Palabras nuevas, recetas antiguas." },
      { it: "O balcão é também um sítio de conversa. Os vizinhos falam do tempo, do trânsito e do futebol. O café fica frio, mas ninguém tem pressa.",
      es: "El mostrador es también un lugar de conversación. Los vecinos hablan del clima, del tráfico y del fútbol. El café se enfría, pero nadie tiene prisa." },
      { it: "Os lisboetas dizem: o café não é só café. É uma pausa de dois minutos com amigos — e custa menos de um euro.",
      es: "Los lisboetas dicen: el café no es solo café. Es una pausa de dos minutos con amigos — y cuesta menos de un euro." },
    ],
    words: [
      { it: "a bica", es: "el café expreso (lisboeta)" },
      { it: "o galão", es: "el galão (café con leche en vaso)" },
      { it: "o balcão", es: "el mostrador, la barra" },
      { it: "a golada", es: "el sorbo" },
      { it: "a padaria", es: "la panadería" },
      { it: "em pé", es: "de pie" },
    ],
    questions: [
      { q: "¿Cómo se llama el café pequeño en Lisboa?", options: ["Espresso", "Bica", "Cortado", "Galão"], answer: 1, why: "«O café pequeno chama-se bica.»" },
      { q: "¿Qué es un galão?", options: ["Um café sem leite", "Um café com mais leite", "Um chá", "Um bolo"], answer: 1, why: "«O café com mais leite chama-se galão.»" },
      { q: "¿Dónde beben el café los lisboetas?", options: ["Ao balcão, em pé", "Sentados, à mesa", "Em casa", "No autocarro"], answer: 0, why: "«As pessoas bebem o café ao balcão, em pé. Duas goladas e está feito.»" },
      { q: "¿De qué hablan los vecinos en el mostrador?", options: ["Do tempo, do trânsito e do futebol", "De política séria", "De nada", "De trabalho sempre"], answer: 0, why: "«Os vizinhos falam do tempo, do trânsito e do futebol.»" },
    ],
    discuss: [
      { it: "Como se pede um café no teu país? Que palavras usas?", es: "¿Cómo se pide un café en tu país? ¿Qué palabras usas?" },
      { it: "Café de pé e rápido ou à mesa com tempo? Qual é o teu estilo?", es: "¿Café de pie y rápido o en mesa con tiempo? ¿Cuál es tu estilo?" },
    ],
  },

  /* ═══ A2 · 1 — História ═══ */
  {
    id: "pt-news-a2-01", cat: "storia", level: "A2", place: "Sintra", minutes: 3,
    title: "O palácio das cores",
    titleEs: "El palacio de los colores",
    lead: {
      it: "No alto de uma serra, perto de Lisboa, há um palácio que parece um brinquedo: vermelho, amarelo e cheio de torres. A história por trás dele é ainda mais estranha.",
      es: "En lo alto de una sierra, cerca de Lisboa, hay un palacio que parece un juguete: rojo, amarillo y lleno de torres. La historia detrás de él es aún más extraña.",
    },
    paragraphs: [
      { it: "Em 1838, um rei chamado Fernando comprou um mosteiro em ruínas. Ninguém percebeu para quê. A resposta demorou quarenta anos: ele queria construir um sonho.",
      es: "En 1838, un rey llamado Fernando compró un monasterio en ruinas. Nadie entendió para qué. La respuesta tardó cuarenta años: él quería construir un sueño." },
      { it: "O rei viajou muito. Gostava dos castelos da Alemanha, dos azulejos mouros e das cores de Génova. Mandou misturar tudo isso numa só casa, no meio da serra de Sintra.",
      es: "El rey viajó mucho. Le gustaban los castillos de Alemania, los azulejos moros y los colores de Génova. Ordenó mezclar todo eso en una sola casa, en medio de la sierra de Sintra." },
      { it: "Hoje, o Palácio da Pena é um dos monumentos mais visitados de Portugal. Dois milhões de pessoas sobem a serra todos os anos para fotografar as torres coloridas.",
      es: "Hoy, el Palacio da Pena es uno de los monumentos más visitados de Portugal. Dos millones de personas suben la sierra todos los años para fotografiar las torres coloreadas." },
      { it: "Os guias contam um segredo com orgulho: o palácio não é de um estilo só. É uma mistura — como Portugal, dizem eles, que é feito de muitas histórias vindas do mar.",
      es: "Los guías cuentan un secreto con orgullo: el palacio no es de un solo estilo. Es una mezcla — como Portugal, dicen ellos, que está hecho de muchas historias venidas del mar." },
    ],
    words: [
      { it: "o palácio", es: "el palacio" },
      { it: "a serra", es: "la sierra, la montaña" },
      { it: "as ruínas", es: "las ruinas" },
      { it: "mandar + infinitivo", es: "mandar hacer (ordenar)" },
      { it: "a torre", es: "la torre" },
      { it: "o guia", es: "el guía (turístico)" },
    ],
    questions: [
      { q: "¿Qué compró el rey Fernando en 1838?", options: ["Um mosteiro em ruínas", "Uma praia", "Um navio", "Uma cidade"], answer: 0, why: "«Um rei chamado Fernando comprou um mosteiro em ruínas.»" },
      { q: "¿Cuál era el sueño del rey?", options: ["Construir uma mistura de estilos: castelos alemães, azulejos mouros, cores de Génova", "Ter um jardim só", "Ficar rico", "Voltar para a Alemanha"], answer: 0, why: "«Gostava dos castelos da Alemanha, dos azulejos mouros e das cores de Génova. Mandou misturar tudo isso numa só casa.»" },
      { q: "¿Cuántas personas suben la sierra cada año?", options: ["Dois milhões", "Duas mil", "Ninguém", "Cem"], answer: 0, why: "«Dois milhões de pessoas sobem a serra todos os anos.»" },
      { q: "¿Qué secreto cuentan los guías?", options: ["O palácio é falso", "O palácio não é de um estilo só: é uma mistura, como Portugal", "O rei nunca existiu", "As torres são novas"], answer: 1, why: "«O palácio não é de um estilo só. É uma mistura — como Portugal… feito de muitas histórias vindas do mar.»" },
    ],
    discuss: [
      { it: "Já visitaste um monumento que parecia um sonho? Conta.", es: "¿Ya visitaste un monumento que pareciera un sueño? Cuenta." },
      { it: "Misturas de estilos: arquitectura ou confusão? O que preferes num edifício?", es: "Mezclas de estilos: ¿arquitectura o confusión? ¿Qué prefieres en un edificio?" },
    ],
  },

  /* ═══ A2 · 2 — Tecnologia ═══ */
  {
    id: "pt-news-a2-02", cat: "tecnologia", level: "A2", place: "Aveiro", minutes: 3,
    title: "A cidade que ensina os autocarros a andar sozinhos",
    titleEs: "La ciudad que enseña a los autobuses a caminar solos",
    lead: {
      it: "Em Aveiro, um autocarro novo já não tem condutor. Tem sensores, câmaras e uma pergunta difícil: e se aparecer uma bicicleta?",
      es: "En Aveiro, un autobús nuevo ya no tiene conductor. Tiene sensores, cámaras y una pregunta difícil: ¿y si aparece una bicicleta?",
    },
    paragraphs: [
      { it: "Aveiro é plana e cheia de bicicletas. Por isso, a cidade escolheu-se para testar um autocarro elétrico sem condutor. Ele anda devagar, num circuito curto, perto da universidade.",
      es: "Aveiro es plana y llena de bicicletas. Por eso, la ciudad fue elegida para probar un autobús eléctrico sin conductor. Anda despacio, en un circuito corto, cerca de la universidad." },
      { it: "O veículo tem doze sensores e seis câmaras. Vê os peões, os carros e — o teste mais difícil — as bicicletas, que aparecem de repente e sem aviso.",
      es: "El vehículo tiene doce sensores y seis cámaras. Ve a los peatones, los coches y — la prueba más difícil — las bicicletas, que aparecen de repente y sin avisar." },
      { it: "Dentro do autocarro há sempre um engenheiro. Ele não toca em nada; só observa e aponta os erros num caderno. O caderno é a parte mais importante da experiência.",
      es: "Dentro del autobús siempre hay un ingeniero. No toca nada; solo observa y anota los errores en un cuaderno. El cuaderno es la parte más importante del experimento." },
      { it: "Os habitantes gostam da ideia, mas fazem perguntas práticas: quanto custa? Que acontece com os motoristas? A resposta honesta ainda é: estamos a aprender — o autocarro também.",
      es: "Los habitantes gustan de la idea, pero hacen preguntas prácticas: ¿cuánto cuesta? ¿Qué pasa con los conductores? La respuesta honesta aún es: estamos aprendiendo — el autobús también." },
    ],
    words: [
      { it: "o autocarro", es: "el autobús (português europeu)" },
      { it: "o condutor", es: "el conductor" },
      { it: "o peão", es: "el peatón" },
      { it: "o sensor", es: "el sensor" },
      { it: "de repente", es: "de repente" },
      { it: "estamos a aprender", es: "estamos aprendiendo (estar a + inf.)" },
    ],
    questions: [
      { q: "¿Por qué eligieron Aveiro para el test?", options: ["Porque é plana e cheia de bicicletas", "Porque é muito grande", "Porque não tem ruas", "Porque é a capital"], answer: 0, why: "«Aveiro é plana e cheia de bicicletas. Por isso, a cidade escolheu-se para testar.»" },
      { q: "¿Qué es lo más difícil para el autobús?", options: ["Os carros", "As bicicletas, que aparecem de repente", "Os semáforos", "A chuva"], answer: 1, why: "«O teste mais difícil — as bicicletas, que aparecem de repente e sem aviso.»" },
      { q: "¿Qué hace el ingeniero dentro del autobús?", options: ["Conduz", "Observa e aponta os erros num caderno", "Dorme", "Vende bilhetes"], answer: 1, why: "«Ele não toca em nada; só observa e aponta os erros num caderno.»" },
      { q: "¿Cuál es la respuesta honesta de la ciudad?", options: ["Já está pronto", "Estamos a aprender — o autocarro também", "É muito barato", "Não há perguntas"], answer: 1, why: "«A resposta honesta ainda é: estamos a aprender — o autocarro também.»" },
    ],
    discuss: [
      { it: "Confiarias num autocarro sem condutor? Em que condições?", es: "¿Confiarías en un autobús sin conductor? ¿Bajo qué condiciones?" },
      { it: "O que é mais importante num teste: a tecnologia ou o caderno de erros? Porquê?", es: "¿Qué es más importante en un test: la tecnología o el cuaderno de errores? ¿Por qué?" },
    ],
  },

  /* ═══ A2 · 3 — Desporto ═══ */
  {
    id: "pt-news-a2-03", cat: "sport", level: "A2", place: "Algarve", minutes: 3,
    title: "O mar é para todos",
    titleEs: "El mar es para todos",
    lead: {
      it: "No Algarve, uma escola de surf recebe alunos especiais: pessoas que nunca pensaram que podiam andar em cima de uma onda. Aprenderam em três semanas.",
      es: "En el Algarve, una escuela de surf recibe alumnos especiales: personas que nunca pensaron que podrían estar sobre una ola. Aprendieron en tres semanas.",
    },
    paragraphs: [
      { it: "A escola fica numa praia pequena, entre falésias. De manhã cedo, o mar está calmo. É a hora perfeita para os principiantes.",
      es: "La escuela está en una playa pequeña, entre acantilados. De madrugada, el mar está calmado. Es la hora perfecta para los principiantes." },
      { it: "Os professores não gritam. Explicam devagar, primeiro na areia, depois na água. Cada aluno tem o seu ritmo, e o ritmo é respeitado.",
      es: "Os professores não gritam. Explicam despacio, primero en la arena, después en el agua. Cada alumno tiene su ritmo, y el ritmo se respeta." },
      { it: "Este ano, a escola convidou pessoas com medo de água e pessoas com dificuldades motoras. Três semanas depois, todos apanharam, pelo menos, uma onda — e alguns apanharam dez.",
      es: "Este año, la escuela invitó a personas con miedo al agua y personas con dificultades motoras. Tres semanas después, todos cogieron al menos una ola — y algunos cogieron diez." },
      { it: "Uma aluna de sessenta anos fez a frase do ano: «Levantei-me de manhã com medo. À tarde, levantei-me em cima de uma onda.»",
      es: "Una alumna de sesenta años hizo la frase del año: «Me levanté por la mañana con miedo. Por la tarde, me levanté sobre una ola.»" },
    ],
    words: [
      { it: "a onda", es: "la ola" },
      { it: "a falésia", es: "el acantilado" },
      { it: "o principiante", es: "el principiante" },
      { it: "apanhar uma onda", es: "coger una ola" },
      { it: "de manhã cedo", es: "de madrugada" },
      { it: "o ritmo", es: "el ritmo" },
    ],
    questions: [
      { q: "¿Cuándo es la hora perfecta para los principiantes?", options: ["De manhã cedo, quando o mar está calmo", "À noite", "Ao meio-dia", "Quando há tempestade"], answer: 0, why: "«De manhã cedo, o mar está calmo. É a hora perfeita para os principiantes.»" },
      { q: "¿Cómo explican los profesores?", options: ["Devagar: primeiro na areia, depois na água", "A gritar", "Só na água", "Com livros"], answer: 0, why: "«Explicam devagar, primeiro na areia, depois na água.»" },
      { q: "¿A quiénes invitó la escuela este año?", options: ["Pessoas com medo de água e com dificuldades motoras", "Só surfistas profissionais", "Só jovens", "Ninguém"], answer: 0, why: "«A escola convidou pessoas com medo de água e pessoas com dificuldades motoras.»" },
      { q: "¿Cuál fue la frase del año?", options: ["«Levantei-me de manhã com medo. À tarde, levantei-me em cima de uma onda.»", "«O mar é frio.»", "«Nunca mais volto.»", "«Surf é impossível.»"], answer: 0, why: "La alumna de sesenta años: «Levantei-me de manhã com medo. À tarde, levantei-me em cima de uma onda.»" },
    ],
    discuss: [
      { it: "Tens medo de alguma coisa que gostarias de experimentar? Qual?", es: "¿Tienes miedo de algo que te gustaría probar? ¿Qué?" },
      { it: "«Cada aluno tem o seu ritmo.» Como é que isso funciona na tua vida — no desporto, no trabalho, nos estudos?", es: "«Cada alumno tiene su ritmo.» ¿Cómo funciona eso en tu vida — en el deporte, el trabajo, los estudios?" },
    ],
  },
];
