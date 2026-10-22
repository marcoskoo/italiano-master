/* ── PT · Notícias C2 · bloco B (v9.39) ────────────────────────────────
   Português europeu (Portugal), nível C2, método VOA Learning English.
   12 notícias novas (pt-news-c2-04 … pt-news-c2-15) que se juntam às 3
   da base (news-c.ts) → 15 notícias de C2. Corpo: 5-6 parágrafos, 315-370
   palavras, registo literário com ironia e retórica, idiomaticidade e
   matizes (concessivas, conjuntivo, ênclise/mesóclise). Léxico PT de
   Portugal (nunca formas do Brasil). Campos `.it` = português (língua de
   estudo), `.es` = espanhol. */

import type { NewsItem } from "../../news";

export const PT_NEWS_C2B: NewsItem[] = [

  /* ═══ C2 · 4 — Sociedade (Odemira) ═══ */
  {
    id: "pt-news-c2-04", cat: "societa", level: "C2", place: "Odemira", minutes: 6,
    title: "O concelho que fala vinte línguas",
    titleEs: "El municipio que habla veinte idiomas",
    lead: {
      it: "No litoral do Alentejo, um concelho de telhados brancos acordou um dia a falar vinte línguas. Quem trouxe os morangos não foi o destino: foi a estufa — e, com ela, uma vila que se encheu de sotaques vindos de todos os continentes.",
      es: "En el litoral del Alentejo, un municipio de tejados blancos despertó un día hablando veinte idiomas. Quien trajo las fresas no fue el destino: fue el invernadero — y, con él, un pueblo que se llenó de acentos venidos de todos los continentes.",
    },
    paragraphs: [
      { it: "Durante séculos, Odemira foi um concelho de gente escassa e horizonte comprido: montados de sobreiro, casas caiadas, uma estrada que se perdia na direção de Lisboa. A vida mudava ao ritmo das estações — até que a estufa chegou e inventou um verão que não acaba. Os frutos vermelhos, que antes pediam primavera, passaram a ser colhidos em qualquer mês do calendário; e a aldeia mais esquecida do mapa começou a aparecer nas páginas de economia.",
      es: "Durante siglos, Odemira fue un municipio de gente escasa y horizonte largo: dehesas de alcornoques, casas encaladas, una carretera que se perdía en dirección a Lisboa. La vida cambiaba al ritmo de las estaciones — hasta que el invernadero llegó e inventó un verano que no acaba. Las frutas rojas, que antes pedían primavera, pasaron a cosecharse en cualquier mes del calendario; y la aldea más olvidada del mapa empezó a aparecer en las páginas de economía." },
      { it: "A colheita pede mãos, e as mãos do concelho nunca chegaram. Vieram outras: do Nepal e da Ucrânia, da Índia, de Moçambique, do Brasil. Hoje, na feira semanal, convive-se em idiomas que a escola local nunca ensinou; o café que era terra de homens calados passou a ouvir-se de longe; e os miúdos que aqui nascem crescem trilingues por acidente — português na rua, a língua dos pais em casa, inglês no telemóvel.",
      es: "La cosecha pide manos, y las manos del municipio nunca llegaron. Vinieron otras: de Nepal y Ucrania, de India, Mozambique, Brasil. Hoy, en el mercado semanal, se convive en idiomas que la escuela local nunca enseñó; el café que era tierra de hombres callados se oye de lejos; y los niños que nacen aquí crecen trilingües por accidente — portugués en la calle, la lengua de los padres en casa, inglés en el móvil." },
      { it: "«Não é um caso de migração; é um caso de gramática», diz a socióloga Graça Vilarinho. «Uma aldeia aprende devagar o que as cidades tardam séculos a aprender: que a língua se usa, não se autoriza. Quem chega traz o dicionário dentro e ainda por cima se oferece para ensinar o que sabe. Ao fim de uma geração, o que era estranho passa a ser sotaque; ao fim de duas, passa a ser apelido.»",
      es: "«No es un caso de migración; es un caso de gramática», dice la socióloga Graça Vilarinho. «Una aldea aprende despacio lo que las ciudades tardan siglos en aprender: que la lengua se usa, no se autoriza. Quien llega trae el diccionario dentro y todavía encima se ofrece para enseñar lo que sabe. Al cabo de una generación, lo que era raro pasa a ser acento; al cabo de dos, pasa a ser apellido.»" },
      { it: "A integração não se faz por decreto; faz-se por receita. As aulas de português funcionam à noite, ao fim do turno, numa sala cedida pela escola primária: na parede, os verbos irregulares dividem o espaço com convites para o batizado do vizinho. Na tasca, pede-se em duas línguas; e o padeiro, que jurava nunca precisar de inglês, já escreve os preços em caracteres que não são os da escola dele.",
      es: "La integración no se hace por decreto; se hace por receta. Las clases de portugués funcionan de noche, al final del turno, en una sala cedida por la escuela primaria: en la pared, los verbos irregulares comparten espacio con invitaciones para el bautizo del vecino. En la tasca, se pide en dos lenguas; y el panadero, que juraba no necesitar nunca inglés, ya escribe los precios con caracteres que no son los de su escuela." },
      { it: "E se o concelho continua a perder habitantes como todo o interior — e continua —, ganha-os por outra porta. O que ninguém previu foi o contrário do previsto: o português voltou a ser estudado como língua estrangeira, dentro de casa, por adultos, à noite, depois do turno. Diz-se por aí que, daqui a vinte anos, o sotaque do litoral alentejano se ouvirá com trejeitos de Katmandu — e ninguém aposta contra.",
      es: "Y si el municipio sigue perdiendo habitantes como todo el interior — y sigue —, los gana por otra puerta. Lo que nadie previó fue lo contrario de lo previsto: el portugués volvió a estudiarse como lengua extranjera, dentro de casa, por adultos, de noche, después del turno. Se dice por ahí que, de aquí a veinte años, el acento del litoral alentejano se oirá con gestos de Katmandú — y nadie apuesta en contra." },
    ],
    words: [
      { it: "o concelho", es: "el municipio", note: "PT-PT: concelho = distrito municipal; «município» também existe, mas «concelho» é a palavra do dia a dia" },
      { it: "a estufa", es: "el invernadero" },
      { it: "a feira semanal", es: "el mercado semanal", note: "PT-PT: feira = mercado semanal das aldeias; «ir à feira» = ir al mercado" },
      { it: "a tasca", es: "la tasca, la taberna de barrio" },
      { it: "o turno", es: "el turno (de trabajo)" },
      { it: "o sotaque", es: "el acento", note: "PT-PT diz «sotaque» (BR também); ES «sotaque» não existe — é «acento»" },
    ],
    questions: [
      { q: "¿Quién trajo las fresas y los nuevos acentos al municipio?", options: ["O destino, que quis assim", "A estufa, que inventou um verão que não acaba", "A câmara municipal, por voto", "Os jornais de economia"], answer: 1, why: "«…até que a estufa chegou e inventou um verão que não acaba» — e os frutos vermelhos passaram a ser colhidos em qualquer mês do calendário." },
      { q: "¿Cómo crecen los niños que nacen allí, según la noticia?", options: ["Só em português, como sempre", "Trilingues por acidente: português na rua, a língua dos pais em casa, inglês no telemóvel", "Sem língua nenhuma até à escola", "Em inglês apenas"], answer: 1, why: "«…os miúdos que aqui nascem crescem trilingues por acidente — português na rua, a língua dos pais em casa, inglês no telemóvel.»" },
      { q: "¿Qué quiere decir Graça Vilarinho con «a língua se usa, não se autoriza»?", options: ["Que a escola deve aprovar cada palavra nova", "Que em Odemira está proibido falar", "Que a língua impõe-se pelo uso quotidiano, não por autorização oficial — e o que era estranho passa a ser sotaque, depois apelido", "Que só o português está autorizado na feira"], answer: 2, why: "«Uma aldeia aprende devagar o que as cidades tardam séculos a aprender: que a língua se usa, não se autoriza… o que era estranho passa a ser sotaque; ao fim de duas, passa a ser apelido.»" },
      { q: "¿Qué ironía destaca el último párrafo?", options: ["Que o interior ganhou habitantes", "Que o padeiro escreve em inglês", "Que a feira se ouve a cem metros", "O português voltou a ser estudado como língua estrangeira dentro de casa, por adultos, ao fim do turno"], answer: 3, why: "«O que ninguém previu foi o contrário do previsto: o português voltou a ser estudado como língua estrangeira, dentro de casa, por adultos, à noite, depois do turno.»" },
    ],
    discuss: [
      { it: "«A língua se usa, não se autoriza.» Concordas? Quem manda numa língua: os dicionários ou as feiras?", es: "«La lengua se usa, no se autoriza.» ¿Estás de acuerdo? ¿Quién manda en una lengua: los diccionarios o los mercados?" },
      { it: "Na tua terra, que palavras chegaram de fora e ficaram? Quais foram as que a tua geração já não usa?", es: "En tu tierra, ¿qué palabras llegaron de fuera y se quedaron? ¿Cuáles son las que tu generación ya no usa?" },
    ],
  },

  /* ═══ C2 · 5 — Tecnologia (Peniche) ═══ */
  {
    id: "pt-news-c2-05", cat: "tecnologia", level: "C2", place: "Peniche", minutes: 6,
    title: "A cidade que acende as luzes com o mar",
    titleEs: "La ciudad que enciende las luces con el mar",
    lead: {
      it: "Ao largo de Peniche, uma plataforma flutua há três invernos sem pedir abrigo. Os engenheiros chamam-lhe protótipo; os pescadores, com mais justeza, chamam-lhe cavalo — porque, como o mar, nunca se deixa montar à primeira.",
      es: "Frente a las costas de Peniche, una plataforma flota desde hace tres inviernos sin pedir refugio. Los ingenieros la llaman prototipo; los pescadores, con más razón, la llaman caballo — porque, como el mar, nunca se deja montar a la primera.",
    },
    paragraphs: [
      { it: "A ideia de tirar corrente às ondas é antiga em Portugal, quase tão antiga como a frustração de a ver falhar. O país tem costa feita de propósito: no inverno, o Atlântico chega aqui com a energia de uma central a céu aberto. O problema nunca foi a matéria-prima — foi sempre a engenharia, que tem de sobreviver a coisas que a terra não conhece: sal que corrói, vaivém que parte, e um inquilino que nunca dorme.",
      es: "La idea de sacar corriente a las olas es antigua en Portugal, casi tan antigua como la frustración de verla fracasar. El país tiene costa hecha a propósito: en invierno, el Atlántico llega aquí con la energía de una central al aire libre. El problema nunca fue la materia prima — fue siempre la ingeniería, que tiene que sobrevivir a cosas que la tierra no conoce: sal que corroe, vaivén que rompe, y un inquilino que nunca duerme." },
      { it: "A aposta atual é modesta e teimosa: uma plataforma experimental fundeada ao largo, geradores movidos pelo vai-e-vem das vagas, cabos que trazem a corrente até terra. Não ilumina a cidade; ilumina o caminho. Cada inverno que a máquina aguenta é um capítulo do manual que não precisará de ser escrito outra vez — e cada falha, bem anotada, é uma página que poupa a outrem.",
      es: "La apuesta actual es modesta y terca: una plataforma experimental fondeada mar adentro, generadores movidos por el vaivén de las olas, cables que traen la corriente hasta tierra. No ilumina la ciudad; ilumina el camino. Cada invierno que la máquina aguanta es un capítulo del manual que no hará falta escribir otra vez — y cada fallo, bien anotado, es una página que le ahorra a otro." },
      { it: "«O que fazemos é aprender a domar sem domar», diz o engenheiro Duarte Soveral, responsável pelo piloto. «O mar não assina contratos: promete tudo ao anoitecer e desdiz-se ao amanhecer. Conforme o aparelho resista, teremos a resposta que a Europa espera; e, se não resistir, teremos também — porque a falha, aqui, é um dado, não é uma desonra. Quem não se molha, não testa nada.»",
      es: "«Lo que hacemos es aprender a domar sin domar», dice el ingeniero Duarte Soveral, responsable del piloto. «El mar no firma contratos: lo promete todo al anochecer y se desdice al amanecer. Según resista el aparato, tendremos la respuesta que Europa espera; y, si no resiste, también la tendremos — porque el fallo, aquí, es un dato, no es una deshonra. Quien no se moja, no prueba nada.»" },
      { it: "Há quem tenha empurrado o projeto com a barriga durante anos — investigadores, municípios, oficinas da marinha grande que nunca tinham visto o mar de perto e passaram a soldar para ele. A cidade aprendeu a conviver com as ondas em dois registos: as que os surfistas esperam e as que os engenheiros recontam. No porto, diz-se já, a meio de brincadeira, que a fatura da luz terá um dia, escrita nas letras pequenas, um agradecimento ao nevoeiro.",
      es: "Hay quien ha ido sacando el proyecto adelante como buenamente ha podido durante años — investigadores, municipios, talleres del interior que nunca habían visto el mar de cerca y pasaron a soldar para él. La ciudad aprendió a convivir con las olas en dos registros: las que esperan los surfistas y las que recuentan los ingenieros. En el puerto ya se dice, en broma, que la factura de la luz tendrá un día, escrita en la letra pequeña, un agradecimiento a la niebla." },
      { it: "Ver-se-á. O que hoje é um brinquedo caro ao largo de uma vila de pescadores pode vir a ser, daqui a uma geração, o encanamento silencioso de um oceano inteiro. E haverá quem jure que, na noite da última tempestade, a luz da lâmpada tremia ao ritmo das vagas — como se a cidade tivesse acendido, por um instante e sem saber, o candeeiro com o próprio mar.",
      es: "Se verá. Lo que hoy es un juguete caro frente a un pueblo de pescadores puede llegar a ser, de aquí a una generación, la canalización silenciosa de un océano entero. Y habrá quien jure que, en la noche de la última tormenta, la luz de la bombilla temblaba al ritmo de las olas — como si la ciudad hubiera encendido, por un instante y sin saberlo, la lámpara con el propio mar." },
    ],
    words: [
      { it: "ao largo (de)", es: "mar adentro, frente a la costa", note: "«ao largo de Peniche» = frente a Peniche; «largo» aqui é substantivo, não é «amplo»" },
      { it: "a vaga", es: "la ola (grande), el oleaje" },
      { it: "o vaivém", es: "el vaivén" },
      { it: "a corrente", es: "la corriente", note: "«os cabos trazem a corrente até terra» = la corriente llega a tierra por cable" },
      { it: "empurrar com a barriga", es: "irse apañando, sacar adelante como se pueda", note: "expressão fixa: gerir sem meios, à espera de melhores dias" },
      { it: "a letra pequena", es: "la letra pequeña (del contrato)" },
    ],
    questions: [
      { q: "¿Qué tiene que sobrevivir la ingeniería, que la tierra no conoce?", options: ["Os impostos e as multas", "O frio da serra", "Sal que corrói, vaivém que parte e um inquilino que nunca dorme", "Os turistas de verão"], answer: 2, why: "«O problema nunca foi a matéria-prima — foi sempre a engenharia, que tem de sobreviver a coisas que a terra não conhece: sal que corrói, vaivém que parte, e um inquilino que nunca dorme.»" },
      { q: "¿Qué ilumina hoy la plataforma, según el segundo párrafo?", options: ["A cidade inteira", "O caminho: cada inverno que a máquina aguenta é um capítulo do manual que não precisará de ser escrito outra vez", "As ruas do porto", "Nada, é só decorativo"], answer: 1, why: "«Não ilumina a cidade; ilumina o caminho. Cada inverno que a máquina aguenta é um capítulo do manual que não precisará de ser escrito outra vez…»" },
      { q: "¿Por qué dice Duarte Soveral que la falha «é um dado, não é uma desonra»?", options: ["Porque ele gosta de falhar", "Porque o mar assina contratos", "Porque a falha não é admissível em engenharia", "Porque cada falha bem anotada poupa erros a outrem — o mar não assina contratos, e só o teste real dá a resposta"], answer: 3, why: "«O mar não assina contratos: promete tudo ao anoitecer e desdiz-se ao amanhecer… a falha, aqui, é um dado, não é uma desonra.»" },
      { q: "¿Qué imagen cierra la noticia?", options: ["A luz da lâmpada que tremia ao ritmo das vagas, como se a cidade tivesse acendido o candeeiro com o próprio mar", "Os pescadores a remarem para o largo", "A central a céu aberto", "A plataforma a voltar ao porto"], answer: 0, why: "«…a luz da lâmpada tremia ao ritmo das vagas — como se a cidade tivesse acendido, por um instante e sem saber, o candeeiro com o próprio mar.»" },
    ],
    discuss: [
      { it: "«A falha é um dado, não é uma desonra.» Em que área da tua vida aplicarias esta regra? E em que área te custa mais?", es: "«El fallo es un dato, no es una deshonra.» ¿En qué área de tu vida aplicarías esta regla? ¿Y en cuál te cuesta más?" },
      { it: "O mar não assina contratos. Que outra «fonte de energia» conheces que prometa tudo ao anoitecer e se desdiga ao amanhecer?", es: "El mar no firma contratos. ¿Qué otra «fuente de energía» conoces que lo prometa todo al anochecer y se desdiga al amanecer?" },
    ],
  },

  /* ═══ C2 · 6 — Ambiente (Monchique) ═══ */
  {
    id: "pt-news-c2-06", cat: "ambiente", level: "C2", place: "Monchique", minutes: 6,
    title: "A serra que voltou a nascer",
    titleEs: "La sierra que volvió a nacer",
    lead: {
      it: "Há uma serra entre o litoral e o barrocal que ardeu por inteiro e decidiu, com uma teimosia de gente do interior, renascer por inteiro. As ferramentas novas não trouxeram pressa; trouxeram paciência com raízes.",
      es: "Hay una sierra entre el litoral y el barrocal que ardió entera y decidió, con una terquedad de gente del interior, renacer entera. Las herramientas nuevas no trajeron prisa; trajeron paciencia con raíces.",
    },
    paragraphs: [
      { it: "O fogo de agosto subiu pela serra como sobe a maré: sem pedir licença e sem deixar bilhete. Em dois dias, a montanha perdeu a sombra; os sobreiros e os medronheiros ficaram de pé, enegrecidos, como velas de um bolo que ninguém encomendou. Quem viu a serra de longe, do mar ou da estrada, jurou que nunca mais verdeceria. A serra respondeu à sua maneira, que é a maneira das coisas lentas: por dentro.",
      es: "El fuego de agosto subió por la sierra como sube la marea: sin pedir licencia y sin dejar recado. En dos días, la montaña perdió la sombra; los alcornoques y los madroños quedaron de pie, ennegrecidos, como velas de un pastel que nadie encargó. Quien vio la sierra de lejos, desde el mar o desde la carretera, juró que nunca más reverdecería. La sierra respondió a su manera, que es la manera de las cosas lentas: por dentro." },
      { it: "A resposta não foi plantar em massa; foi plantar com juízo. Os viveiros passaram a produzir espécies autóctones — carvalhos, medronheiros, loureiros — criadas com semente colhida na própria serra, para que as árvores nascessem já com o sotaque da terra. As linhas de água, que o fogo respeitou mal, foram limpas à mão, metro a metro; e os donos dos terrenos, que durante anos recusaram ouvidos, começaram, um a um, a dar o braço a torcer.",
      es: "La respuesta no fue plantar en masa; fue plantar con sentido. Los viveros pasaron a producir especies autóctonas — robles, madroños, laureles — criadas con semilla recogida en la propia sierra, para que los árboles nacieran ya con el acento de la tierra. Las líneas de agua, que el fuego respetó mal, se limpiaron a mano, metro a metro; y los dueños de los terrenos, que durante años se negaron a escuchar, empezaron, uno a uno, a darse por vencidos." },
      { it: "«O que ardeu não foi só a mata; foi o vício de plantar o que cresce depressa», explica a engenheira florestal Dália Neves, que coordena a recuperação. «A serra precisa de árvores que saibam esperar, não de árvores que façam figura no relatório. Ainda que o resultado só se veja daqui a trinta anos, é esse o prazo que a montanha exige — e é com ele, não contra ele, que temos de contar.»",
      es: "«Lo que ardió no fue solo el monte; fue el vicio de plantar lo que crece deprisa», explica la ingeniera forestal Dália Neves, que coordina la recuperación. «La sierra necesita árboles que sepan esperar, no árboles que hagan buena figura en el informe. Aunque el resultado solo se vea de aquí a treinta años, ese es el plazo que la montaña exige — y es con él, no contra él, con el que tenemos que contar.»" },
      { it: "O medronho — o fruto que dá o aguardente da serra — veio a ser a moeda de troca inesperada. Como os medronheiros rebentam do próprio tronco queimado, a mata recuperada dá fruto antes de dar sombra; e os produtores que tinham desistido voltaram a acender os alambiques no outono. Até os apressados perceberam o cálculo: uma árvore que se recupera sozinha é o melhor dos empregados — não pede vencimento e chega sempre a horas.",
      es: "El madroño — el fruto que da el aguardiente de la sierra — resultó ser la moneda de cambio inesperada. Como los madroños rebrotan del propio tronco quemado, el monte recuperado da fruto antes de dar sombra; y los productores que habían desistido volvieron a encender los alambiques en otoño. Hasta los impacientes entendieron la cuenta: un árbol que se recupera solo es el mejor de los empleados — no pide sueldo y llega siempre puntual." },
      { it: "Aos poucos, a serra trocou o mapa: onde os incêndios desenhavam cicatrizes, desenham-se agora corredores de mato ralo que travam o fogo como uma trincheira. Os visitantes de outono, que sobem para ver as folhas, ouvem os mais velhos repetir uma frase que ficou: «A montanha não ardeu; apenas mudou de roupa devagar.» E, como toda a frase dos mais velhos, tem mais verdade do que parece à primeira.",
      es: "Poco a poco, la sierra cambió el mapa: donde los incendios dibujaban cicatrices, se dibujan ahora corredores de matorral ralo que frenan el fuego como una trinchera. Los visitantes de otoño, que suben a ver las hojas, oyen a los más viejos repetir una frase que se quedó: «La montaña no ardió; apenas se cambió de ropa despacio.» Y, como toda frase de los mayores, tiene más verdad de la que parece a primera vista." },
    ],
    words: [
      { it: "a mata", es: "el monte, la masa forestal", note: "PT-PT «mata» = bosque/monte; não confundir com ES «mata» (arbusto pequeno)" },
      { it: "o viveiro", es: "el vivero" },
      { it: "a semente", es: "la semilla", note: "«criadas com semente colhida na própria serra» = con semilla recogida en la propia sierra" },
      { it: "o medronheiro", es: "el madroño (árbol)" },
      { it: "dar o braço a torcer", es: "darse por vencido, ceder a regañadientes", note: "expressão fixa: «acabou por dar o braço a torcer» = acabó cediendo" },
      { it: "a linha de água", es: "el cauce, la línea de agua" },
    ],
    questions: [
      { q: "¿Cómo nacieron las nuevas árboles, según el plan de reforestación?", options: ["De sementes importadas do estrangeiro", "De estacas de eucalipto", "De semente colhida na própria serra, para que nascessem já com o sotaque da terra", "Por sementeira aérea"], answer: 2, why: "«Os viveiros passaram a produzir espécies autóctones — carvalhos, medronheiros, loureiros — criadas com semente colhida na própria serra, para que as árvores nascessem já com o sotaque da terra.»" },
      { q: "¿Qué fue lo que ardió, según Dália Neves?", options: ["Só a mata", "As casas todas", "Nada, foi um ensaio", "A mata e o vício de plantar o que cresce depressa"], answer: 3, why: "«O que ardeu não foi só a mata; foi o vício de plantar o que cresce depressa»" },
      { q: "¿Por qué se convirtió el madroño en «moneda de cambio inesperada»?", options: ["Porque o fruto vale ouro no mercado", "Porque os medronheiros rebentam do próprio tronco queimado: a mata recuperada dá fruto antes de dar sombra e os produtores voltaram a acender os alambiques", "Porque é uma espécie protegida", "Porque as folhas servem para chá caro"], answer: 1, why: "«Como os medronheiros rebentam do próprio tronco queimado, a mata recuperada dá fruto antes de dar sombra; e os produtores que tinham desistido voltaram a acender os alambiques no outono.»" },
      { q: "¿Qué significa la frase de los más viejos, «a montanha não ardeu; apenas mudou de roupa devagar»?", options: ["Que o fogo foi inventado", "Que a serra vai ser vendida", "Que os mais velhos nunca viram o fogo", "Que a serra segue viva e transforma-se por dentro, a ritmo lento — mais verdade do que parece à primeira"], answer: 3, why: "A frase dos mais velhos resume o tom da notícia: a serra não morreu; «apenas mudou de roupa devagar» — transforma-se devagar, por dentro." },
    ],
    discuss: [
      { it: "«Árvores que saibam esperar, não árvores que façam figura no relatório.» Onde viste tu, na tua vida, contas que faziam figura no relatório?", es: "«Árboles que sepan esperar, no árboles que hagan buena figura en el informe.» ¿Dónde viste tú, en tu vida, cuentas que hicieran buena figura en el informe?" },
      { it: "Que papel tem o fogo na paisagem que tu conheces melhor? É sempre inimigo, ou depende do que se plantou antes?", es: "¿Qué papel tiene el fuego en el paisaje que tú conoces mejor? ¿Es siempre enemigo, o depende de lo que se plantó antes?" },
    ],
  },

  /* ═══ C2 · 7 — Saúde (Guarda) ═══ */
  {
    id: "pt-news-c2-07", cat: "salute", level: "C2", place: "Guarda", minutes: 6,
    title: "O sono de quem vive acima das nuvens",
    titleEs: "El sueño de quien vive sobre las nubes",
    lead: {
      it: "Na cidade mais alta do país, os médicos decidiram estudar o sono como quem estuda um lago: de margem a margem. O que encontraram não cabe num comprimido — cabe, talvez, num horário.",
      es: "En la ciudad más alta del país, los médicos decidieron estudiar el sueño como quien estudia un lago: de orilla a orilla. Lo que encontraron no cabe en una pastilla — cabe, quizá, en un horario.",
    },
    paragraphs: [
      { it: "A Guarda vive a mil e cinquenta metros de altitude, com invernos que se esticam de novembro a abril e uma quietude que as capitais pagariam à hora. Foi essa combinação — ar frio, pouco barulho, noites longas — que levou o hospital a abrir uma consulta do sono de propósito. O raciocínio era simples: se o país tem insónia, a serra devia ter o contrário; e, se a serra tem o contrário, alguém tem de ir lá medir.",
      es: "Guarda vive a mil cincuenta metros de altitud, con inviernos que se estiran de noviembre a abril y una quietud que las capitales pagarían por hora. Fue esa combinación — aire frío, poco ruido, noches largas — la que llevó al hospital a abrir una consulta del sueño a propósito. El razonamiento era simple: si el país tiene insomnio, la sierra debía de tener lo contrario; y, si la sierra tiene lo contrario, alguien tiene que ir a medirlo." },
      { it: "Os números saíram teimosos. Quem dorme na serra adormece mais depressa e acorda menos vezes; os casos de apneia são metade dos do litoral; e os idosos que sempre viveram acima das nuvens apresentam, aos oitenta, um relógio interno que os consultórios da capital invejariam. Os médicos suspeitam do ar, do silêncio e de uma coisa mais difícil de receitar: a vida sem pressa, que cá se chama terça-feira.",
      es: "Los números salieron tercos. Quien duerme en la sierra se duerme más deprisa y se despierta menos veces; los casos de apnea son la mitad de los del litoral; y los ancianos que siempre han vivido sobre las nubes presentan, a los ochenta, un reloj interno que los consultorios de la capital envidiarían. Los médicos sospechan del aire, del silencio y de algo más difícil de recetar: la vida sin prisa, que aquí se llama martes." },
      { it: "«Não vendemos sonho; medimos descanso», avisa a médica Joana Sampaio, que dirige a consulta. «O que nos chega da cidade são pessoas que se deitam com o telemóvel e acordam com o telemóvel — dormem como quem vigia. Aqui, ainda há quem adormeça à boca da noite, com as galinhas a dar sinal. O que estraga o sono não é a altitude; é a urgência. E a urgência não se opera — desarma-se, hora a hora.»",
      es: "«No vendemos sueño; medimos descanso», advierte la médica Joana Sampaio, que dirige la consulta. «Lo que nos llega de la ciudad son personas que se acuestan con el móvil y se despiertan con el móvil — duermen como quien vigila. Aquí todavía hay quien se duerme al caer la noche, con las gallinas dando señal. Lo que estropea el sueño no es la altitud; es la urgencia. Y la urgencia no se opera — se desarma, hora a hora.»" },
      { it: "Há contradições, como em toda a cidade. O frio extremo obriga a aquecer quartos e encolher horários; o jantar às nove, sagrado como um sacramento, trava contra a melatonina; e a estação de esqui improvisada trouxe luz artificial até às aldeias mais escondidas. A consulta já propôs à cidade o que nenhum laboratório conseguiu patentear: jantar cedo, apagar cedo, caminhar de manhã — o chamado, nos papéis do serviço, «tratamento de horário», e chamado, na rua, simplesmente viver como os avós.",
      es: "Hay contradicciones, como en toda ciudad. El frío extremo obliga a calentar cuartos y encoger horarios; la cena a las nueve, sagrada como un sacramento, va contra la melatonina; y la estación de invierno improvisada trajo luz artificial hasta las aldeas más escondidas. La consulta ya le propuso a la ciudad lo que ningún laboratorio ha conseguido patentar: cenar pronto, apagar pronto, caminar por la mañana — llamado, en los papeles del servicio, «tratamiento de horario», y llamado, en la calle, simplemente vivir como los abuelos." },
      { it: "Daqui a uns anos, ver-se-á se a serra passa de acidente geográfico a prescrição médica. Os investigadores gostam de dizer que o melhor sonífero do país não se fabrica: cultiva-se a mil metros, com neve e sem sinal. E os guardenses, que nunca deram pelo milagre, respondem com a modéstia das montanhas: «Dormir bem não é sorte. É geografia com uma boa cama por cima.»",
      es: "Dentro de unos años, se verá si la sierra pasa de accidente geográfico a receta médica. A los investigadores les gusta decir que el mejor sonífero del país no se fabrica: se cultiva a mil metros, con nieve y sin cobertura. Y los guardenses, que nunca se dieron cuenta del milagro, responden con la modestia de las montañas: «Dormir bien no es suerte. Es geografía con una buena cama encima.»" },
    ],
    words: [
      { it: "a insónia", es: "el insomnio" },
      { it: "a apneia", es: "la apnea (del sueño)" },
      { it: "à boca da noite", es: "al caer la noche", note: "expressão fixa PT-PT: «ainda à boca da noite» = apenas anoitece" },
      { it: "o sonífero", es: "el somnífero", note: "falso amigo de grafia: PT «sonífero» (sem m) ~ ES «somnífero»; pronúncia igual" },
      { it: "a consulta", es: "la consulta (médica)", note: "PT «consulta» = consulta médica e também o gabinete do médico" },
      { it: "receitar", es: "recetar, prescribir" },
    ],
    questions: [
      { q: "¿Qué llevó al hospital a abrir una consulta del sueño?", options: ["Uma moda das capitais", "O barulho dos comboios", "A combinação de ar frio, pouco barulho e noites longas — se o país tem insónia, a serra devia ter o contrário", "Um pedido da UNESCO"], answer: 2, why: "«Foi essa combinação — ar frio, pouco barulho, noites longas — que levou o hospital a abrir uma consulta do sono de propósito… se o país tem insónia, a serra devia ter o contrário…»" },
      { q: "¿Qué encontraron los números de la sierra?", options: ["Que todos acordam às cinco", "Nada de especial", "Que os guardenses dormem pior", "Adormecem mais depressa, acordam menos vezes e a apneia é metade da do litoral"], answer: 3, why: "«Quem dorme na serra adormece mais depressa e acorda menos vezes; os casos de apneia são metade dos do litoral…»" },
      { q: "Según Joana Sampaio, ¿qué estraga el sueño?", options: ["A altitude", "A neve", "Não é a altitude; é a urgência — e a urgência desarma-se, hora a hora", "O café da serra"], answer: 2, why: "«O que estraga o sono não é a altitude; é a urgência. E a urgência não se opera — desarma-se, hora a hora.»" },
      { q: "¿Qué tratamiento «que nenhum laboratório conseguiu patentear» propone la consulta?", options: ["Jantar cedo, apagar cedo, caminhar de manhã — viver como os avós", "Um comprimido novo de três camadas", "Dormir com música", "Acordar à meia-noite para contar estrelas"], answer: 0, why: "«A consulta já propôs à cidade o que nenhum laboratório conseguiu patentear: jantar cedo, apagar cedo, caminhar de manhã… chamado, na rua, simplesmente viver como os avós.»" },
    ],
    discuss: [
      { it: "«Dormem como quem vigia.» Tu também? O que é que a tua cabeça vigia enquanto o corpo tentaria dormir?", es: "«Duermen como quien vigila.» ¿Tú también? ¿Qué es lo que tu cabeza vigila mientras el cuerpo intentaría dormir?" },
      { it: "A urgência não se opera; desarma-se, hora a hora. Que hora do teu dia escolherias para desarmar primeiro?", es: "La urgencia no se opera; se desarma, hora a hora. ¿Qué hora de tu día elegirías para desarmar primero?" },
    ],
  },

  /* ═══ C2 · 8 — História (Vila Nova de Foz Côa) ═══ */
  {
    id: "pt-news-c2-08", cat: "storia", level: "C2", place: "Vila Nova de Foz Côa", minutes: 6,
    title: "Os desenhos que travaram um rio",
    titleEs: "Los dibujos que detuvieron un río",
    lead: {
      it: "No vale de um rio que ia ser represa, alguém encontrou desenhos de vinte mil anos feitos na pedra viva. O projeto da barragem tinha estacas cravadas; os desenhos tinham mais tempo. Ganhou o tempo.",
      es: "En el valle de un río que iba a ser pantano, alguien encontró dibujos de veinte mil años hechos en la roca viva. El proyecto de la presa tenía estacas clavadas; los dibujos tenían más tiempo. Ganó el tiempo.",
    },
    paragraphs: [
      { it: "A história começou com um inventário de rotina, nos anos noventa: arqueólogos contratados para catalogar o que a barragem ia afogar. Esperava-se cerâmica romana, talvez um moinho, o costume. Encontrou-se outra coisa: cavalos gravados com duas linhas, auroques empinados, cabras em fuga — um bestiário inteiro riscado no xisto pelos caçadores que por ali passaram depois de o gelo recuar. Percebeu-se, antes dos chefes, que o inventário se tinha invertido: o que ia ser afogado afogava o projeto.",
      es: "La historia empezó con un inventario de rutina, en los años noventa: arqueólogos contratados para catalogar lo que la presa iba a ahogar. Se esperaba cerámica romana, quizá un molino, lo de siempre. Se encontró otra cosa: caballos grabados con dos líneas, uros encabritados, cabras en fuga — un bestiario entero rayado en la pizarra por los cazadores que por allí pasaron después de que el hielo retrocediera. Se entendió, antes que los jefes, que el inventario se había invertido: lo que iba a ser ahogado ahogaba el proyecto." },
      { it: "Seguiu-se um braço de ferro entre um país que precisava de eletricidade e um país que descobrira, da noite para a manhã, que tinha o museu mais antigo da Europa. As gravuras fizeram nas ruas o que não sabiam fazer na pedra: mover gente. Quando a UNESCO inscreveu o vale na lista do património, em 1998, a barragem já tinha sido engavetada — com os números feitos, os estudos pagos e a certeza, pouco confortável, de que quase ninguém soube o que ia perder.",
      es: "Siguió un pulso entre un país que necesitaba electricidad y un país que había descubierto, de la noche a la mañana, que tenía el museo más antiguo de Europa. Los grabados hicieron en las calles lo que no sabían hacer en la piedra: mover gente. Cuando la UNESCO inscribió el valle en la lista del patrimonio, en 1998, la presa ya había sido archivada — con las cuentas hechas, los estudios pagados y la certeza, poco confortable, de que casi nadie supo lo que iba a perder." },
      { it: "«Quem gravou não assinou», diz a arqueóloga Cláudia Meireles, que conhece o vale painel por painel. «Não sabemos os nomes, não sabemos as línguas; sabemos apenas que escolheram os sítios onde o cavalo bebia. É o arquivo mais antigo do país, e foi salvo por uma coincidência de calendário: se a barragem tivesse começado dois anos antes, nunca o teríamos visto. Agradece-se ao azar — mas o azar, para servir, precisa de alguém que o saiba ler.»",
      es: "«Quien grabó no firmó», dice la arqueóloga Cláudia Meireles, que conoce el valle panel por panel. «No sabemos los nombres, no sabemos las lenguas; solo sabemos que eligieron los lugares donde el caballo bebía. Es el archivo más antiguo del país, y fue salvado por una coincidencia de calendario: si la presa hubiera empezado dos años antes, nunca lo habríamos visto. Se agradece al azar — pero el azar, para servir, necesita a alguien que sepa leerlo.»" },
      { it: "O vale é hoje parque com horário e centro de estudos: os mesmos penedos que iam afogar-se recebem agora gente de meio mundo. Os pastores, que sempre viram os desenhos sem os ver, passaram a guardá-los como quem guarda cartas de família. E os arqueólogos aprenderam a lição de humildade que a profissão dá cedo ou tarde: cada inverno, o xisto solta um painel novo — como se o rio soltasse páginas à conta-gotas.",
      es: "El valle es hoy parque con horario y centro de estudios: los mismos peñascos que iban a ahogarse reciben ahora gente de medio mundo. Los pastores, que siempre vieron los dibujos sin verlos, pasaron a guardarlos como quien guarda cartas de familia. Y los arqueólogos aprendieron la lección de humildad que la profesión da tarde o temprano: cada invierno, la pizarra suelta un panel nuevo — como si el río soltara páginas gota a gota." },
      { it: "Há quem diga que os desenhos travaram um rio; a verdade é mais exata: travaram um calendário. O vale continua a correr, a barragem correu para outra parte, e os cavalos de pedra seguem a galope vinte mil anos depois — sem terem gasto uma perna.",
      es: "Hay quien dice que los dibujos detuvieron un río; la verdad es más exacta: detuvieron un calendario. El valle sigue corriendo, la presa corrió para otra parte, y los caballos de piedra siguen al galope veinte mil años después — sin haber gastado una pata." },
    ],
    words: [
      { it: "a gravura", es: "el grabado" },
      { it: "o xisto", es: "la pizarra", note: "PT «xisto» (rocha) ~ ES «esquisto»; aqui é a rocha dos penedos do vale" },
      { it: "a barragem", es: "la presa (de embalse)" },
      { it: "o auroque", es: "el uro (bisonte antigo)" },
      { it: "o bestiário", es: "el bestiario", note: "catálogo de bichos; aqui, o catálogo de gravados do vale" },
      { it: "o penedo", es: "el peñasco" },
    ],
    questions: [
      { q: "¿Qué esperaban encontrar los arqueólogos en el inventario de rutina?", options: ["Ouro perdido", "Cerâmica romana, talvez um moinho, o costume", "Caveiras de piratas", "Nada, era só um passeio"], answer: 1, why: "«Esperava-se cerâmica romana, talvez um moinho, o costume. Encontrou-se outra coisa: cavalos gravados com duas linhas, auroques empinados, cabras em fuga…»" },
      { q: "¿Qué hicieron las gravuras «nas ruas», según el texto?", options: ["O que não sabiam fazer na pedra: mover gente", "Nada, ficaram quietas", "Barulho de obra", "Uma exposição itinerante"], answer: 0, why: "«As gravuras fizeram nas ruas o que não sabiam fazer na pedra: mover gente.»" },
      { q: "¿Por qué fue salvado el archivo, según Cláudia Meireles?", options: ["Porque o estado era rico", "Porque os desenhos eram famosos no mundo", "Por uma coincidência de calendário — se a barragem tivesse começado dois anos antes, nunca o teríamos visto", "Porque o rio secou"], answer: 2, why: "«…foi salvo por uma coincidência de calendário: se a barragem tivesse começado dois anos antes, nunca o teríamos visto.»" },
      { q: "¿Qué significa que os desenhos «travaram um calendário», não um rio?", options: ["Que o rio parou de correr", "Que a barragem venceu no fim", "Que os cavalos de pedra nadam", "Que o rio continua a correr; o que parou, por engavetamento da barragem, foi o projeto — os gravados seguem «a galope» vinte mil anos depois"], answer: 3, why: "«O vale continua a correr, a barragem correu para outra parte, e os cavalos de pedra seguem a galope vinte mil anos depois — sem terem gasto uma perna.»" },
    ],
    discuss: [
      { it: "«O azar, para servir, precisa de alguém que o saiba ler.» Concordas? Que azar teu foi lido a tempo — e qual leste tarde?", es: "«El azar, para servir, necesita a alguien que sepa leerlo.» ¿Estás de acuerdo? ¿Qué azar tuyo fue leído a tiempo — y cuál leíste tarde?" },
      { it: "Quem gravou não assinou. Que obra anónima da tua cidade merecia, para ti, uma assinatura? Porquê?", es: "Quien grabó no firmó. ¿Qué obra anónima de tu ciudad merecería, para ti, una firma? ¿Por qué?" },
    ],
  },

  /* ═══ C2 · 9 — Desporto (Rio Maior) ═══ */
  {
    id: "pt-news-c2-09", cat: "sport", level: "C2", place: "Rio Maior", minutes: 6,
    title: "A vila que treina os avós",
    titleEs: "El pueblo que entrena a los abuelos",
    lead: {
      it: "Há uma vila do Ribatejo que se construiu para fabricar recordes e acabou, sem dar por isso, a treinar bisavós. A cidade desportiva, como lhe chamam por ali, olha hoje para a terceira idade como olhava para as finais: com plano de treino.",
      es: "Hay un pueblo del Ribatejo que se construyó para fabricar récords y acabó, sin darse cuenta, entrenando a bisabuelos. La ciudad deportiva, como la llaman por allí, mira hoy a la tercera edad como miraba a las finales: con plan de entrenamiento.",
    },
    paragraphs: [
      { it: "O complexo nasceu com vocação de campeão: piscinas olímpicas, pavilhões, pistas de atletismo, dormitórios para seleções. Durante décadas, por ali passaram os melhores do país em calções; a vila acostumou-se a acordar ao som de partidas. Quando as seleções partiram para centros maiores, ficou um património enorme — e uma pergunta que ninguém queria fazer em voz alta: para que serve uma cidade desportiva quando os recordes já não se fabricam ali?",
      es: "El complejo nació con vocación de campeón: piscinas olímpicas, pabellones, pistas de atletismo, dormitorios para selecciones. Durante décadas, por allí pasaron los mejores del país en pantalón corto; el pueblo se acostumbró a despertar al sonido de los partidos. Cuando las selecciones se fueron a centros mayores, quedó un patrimonio enorme — y una pregunta que nadie quería hacer en voz alta: ¿para qué sirve una ciudad deportiva cuando los récords ya no se fabrican allí?" },
      { it: "A resposta chegou por uma porta que ninguém vigiava: a dos reformados. Começou com um médico de família que receitou caminhadas como quem receita comprimidos; seguiu-se a ginástica na água para as articulações, o futebol sentado para quem já não corre e ainda discute os árbitros. As piscinas, que se esvaziavam de setembro a junho, passaram a ter fila pela manhã.",
      es: "La respuesta llegó por una puerta que nadie vigilaba: la de los jubilados. Empezó con un médico de familia que recetó caminatas como quien receta pastillas; siguió la gimnasia en el agua para las articulaciones, el fútbol sentado para quien ya no corre y todavía discute con los árbitros. Las piscinas, que se vaciaban de septiembre a junio, pasaron a tener cola por la mañana." },
      { it: "«Não estou a preparar atletas; estou a desoxidar vontades», diz o professor Rui Tomé, que dirige o programa. «Quem não tem cão, caça com gato; e quem não tem vinte anos, tem juízo. Um senhor de setenta que decide aprender a nadar demora o que demorar: o problema nunca foi o corpo — foi a vergonha, que não treina, não desiste e não envelhece. É a vergonha que temos de pôr a andar.»",
      es: "«No estoy preparando a atletas; estoy desoxidando voluntades», dice el profesor Rui Tomé, que dirige el programa. «Quien no tiene perro, caza con gato; y quien no tiene veinte años, tiene juicio. Un señor de setenta que decide aprender a nadar tarda lo que tarde: el problema nunca fue el cuerpo — fue la vergonha, que no entrena, no desiste y no envejece. Es la vergonha la que tenemos que poner a andar.»" },
      { it: "Os números ajudam a vila a respirar: as consultas de fisioterapia abriram ao lado dos ginásios, e o café da praça, que fechava em agosto, serve agora o pequeno-almoço a senhoras de fato de treino. O desporto, que parecia assunto de camisola, voltou a ser assunto de saúde pública — com uma vantagem que a medicina aprecia: nunca chama por ninguém às três da manhã. As netas, que antes iam ver os avós ao domingo, agora vão vê-los competir — e o largo da vila parece um estádio com carpete.",
      es: "Los números ayudan al pueblo a respirar: las consultas de fisioterapia se abrieron al lado de los gimnasios, y el café de la plaza, que cerraba en agosto, sirve ahora el desayuno a señoras de chándal. El deporte, que parecía asunto de camiseta, volvió a ser asunto de salud pública — con una ventaja que la medicina aprecia: nunca llama a nadie a las tres de la madrugada. Las nietas, que antes iban a ver a los abuelos el domingo, ahora van a verlos competir — y la plaza del pueblo parece un estadio con alfombra." },
      { it: "Ver-se-á se a moda fica; mas há sinais que não costumam mentir. Na cidade que fabricava recordes percebeu-se, afinal, qual era o recorde verdadeiro — o de ter feito do desporto um idioma que não envelhece. Ous escrever, no painel de entrada, uma frase que nenhum manual ousaria: «Aqui treina-se a vida, e a vida joga em casa.»",
      es: "Se verá si la moda se queda; pero hay señales que no suelen mentir. En la ciudad que fabricaba récords se entendió, al fin, cuál era el récord verdadero — el de haber hecho del deporte un idioma que no envejece. Se atrevieron a escribir, en el panel de entrada, una frase que ningún manual se atrevería: «Aquí se entrena la vida, y la vida juega en casa.»" },
    ],
    words: [
      { it: "o reformado", es: "el jubilado", note: "falso amigo: PT «reformado» = jubilado; ES «reformado» = modificado ou de obra feita" },
      { it: "a queda", es: "la caída" },
      { it: "o fato de treino", es: "el chándal", note: "PT-PT «fato» (de treino, de banho); BR diz «roupa de treino» — ES «fato» não existe neste sentido" },
      { it: "o pequeno-almoço", es: "el desayuno", note: "PT-PT: pequeno-almoço; BR «café da manhã» — aqui nunca" },
      { it: "quem não tem cão, caça com gato", es: "quien no tiene perro, caza con gato", note: "provérbio português: resolve-se com o que há" },
      { it: "a vergonha", es: "la vergüenza" },
    ],
    questions: [
      { q: "¿Qué quedó cuando las selecciones se fueron a centros maiores?", options: ["Um património enorme e uma pergunta: para que serve uma cidade desportiva quando os recordes já não se fabricam ali?", "Só ruínas", "Uma dívida e mais nada", "Um estádio fechado"], answer: 0, why: "«…ficou um património enorme — e uma pergunta que ninguém queria fazer em voz alta: para que serve uma cidade desportiva quando os recordes já não se fabricam ali?»" },
      { q: "¿Cómo empezó la respuesta, según el segundo párrafo?", options: ["Com um edito da câmara", "Com um médico de família que receitou caminhadas como quem receita comprimidos", "Com um patrocínio de marca", "Com uma ginástica televisionada"], answer: 1, why: "«Começou com um médico de família que receitou caminhadas como quem receita comprimidos; seguiu-se a ginástica na água…»" },
      { q: "¿Qué es, para Rui Tomé, el problema de un señor de setenta que aprende a nadar?", options: ["O corpo, que já não dá", "A natação, que é perigosa", "A água, que é fria", "Nunca foi o corpo — foi a vergonha, que não treina, não desiste e não envelhece"], answer: 3, why: "«…o problema nunca foi o corpo — foi a vergonha, que não treina, não desiste e não envelhece. É a vergonha que temos de pôr a andar.»" },
      { q: "¿Qué ventaja tiene el deporte sobre la medicina, según el cuarto párrafo?", options: ["É mais barato que os medicamentos", "Nunca chama por ninguém às três da manhã", "Cura mais depressa", "Dispensa os médicos"], answer: 1, why: "«…voltou a ser assunto de saúde pública — com uma vantagem que a medicina aprecia: nunca chama por ninguém às três da manhã.»" },
    ],
    discuss: [
      { it: "«A vergonha não treina, não desiste e não envelhece.» O que é que a tua vergonha te impediu de aprender? Ainda está a tempo?", es: "«La vergüenza no entrena, no desiste y no envejece.» ¿Qué fue lo que tu vergüenza te impidió aprender? ¿Todavía está a tiempo?" },
      { it: "Desporto como assinatura de saúde pública: o teu município investe em piscinas ou em estádios vazios? Vale a pena?", es: "Deporte como signo de salud pública: ¿tu municipio invierte en piscinas o en estadios vacíos? ¿Vale la pena?" },
    ],
  },

  /* ═══ C2 · 10 — Ciência (Furnas) ═══ */
  {
    id: "pt-news-c2-10", cat: "scienza", level: "C2", place: "Furnas", minutes: 6,
    title: "A cozinha que o vulcão tempera",
    titleEs: "La cocina que el volcán sazona",
    lead: {
      it: "Numa caldeira dos Açores, o almoço faz-se debaixo da terra, sem gás e sem pressa: um cozido que o vulcão tempera durante seis horas. Os cientistas que ali medem os gases são os únicos cozinheiros do mundo com a cozinha permanentemente a ferver.",
      es: "En una caldera de las Azores, la comida se hace bajo tierra, sin gas y sin prisa: un cocido que el volcán sazona durante seis horas. Los científicos que allí miden los gases son los únicos cocineros del mundo con la cocina permanentemente hirviendo.",
    },
    paragraphs: [
      { it: "As Furnas são uma freguesia construída dentro de uma panela. O chão ferve: fumarolas que soltam vapor, poças de água quente, ribeiros que fervem. Os habitantes aprenderam, há séculos, a tirar partido do fenómeno — e a maior expressão desse tratado é o cozido: carne, enchidos e legumes enterrados de manhã num buraco do solo, cozinhados pelo calor da própria terra, tirados à uma da tarde, pontualmente, como quem tira o pão do forno.",
      es: "Furnas es una feligresía construida dentro de una olla. El suelo hierve: fumarolas que sueltan vapor, charcos de agua caliente, arroyos que hierven. Los habitantes aprendieron, hace siglos, a sacar provecho del fenómeno — y la mayor expresión de ese tratado es el cocido: carne, embutidos y legumbres enterradas por la mañana en un hoyo del suelo, cocinadas por el calor de la propia tierra, sacadas a la una de la tarde, puntualmente, como quien saca el pan del horno." },
      { it: "O que os cozidos revelam, a vulcanologia confirma. A caldeira é um vulcão adormecido, não um apagado: o calor que cozinha o almoço é o mesmo que os sensores da ilha vigiam dia e noite. A rede de medição tem esta particularidade rara — nunca dorme e está instalada, em parte, nos sítios onde a terra cozinha melhor. Dizem os técnicos que é a única estação científica do país onde os instrumentos se calibram com garfo e colher.",
      es: "Lo que los cocidos revelan, la vulcanología lo confirma. La caldera es un volcán dormido, no uno apagado: el calor que cocina la comida es el mismo que los sensores de la isla vigilan día y noche. La red de medición tiene esta particularidad rara — nunca duerme y está instalada, en parte, en los lugares donde la tierra cocina mejor. Dicen los técnicos que es la única estación científica del país donde los instrumentos se calibran con tenedor y cuchara." },
      { it: "«Convive-se com o risco como se convive com um vizinho ruidoso: com respeito e porta aberta», compara a vulcanóloga Marta Simões. «O vulcão avisa sempre — em gás, em tremor, em cheiro. O nosso trabalho é ouvir o que ele diz e traduzi-lo sem dramas. Se o chão mudar de humor, as famílias serão as primeiras a saber.»",
      es: "«Se convive con el riesgo como se convive con un vecino ruidoso: con respeto y puerta abierta», compara la vulcanóloga Marta Simões. «El volcán avisa siempre — en gas, en temblor, en olor. Nuestro trabajo es oír lo que dice y traducirlo sin dramas. Si el suelo cambia de humor, las familias serán las primeras en saberlo.»" },
      { it: "O cozido acabou, sem ninguém planear, por se tornar instrumento científico. Como a demora do cozimento varia com o calor do solo, os restaurantes ajudam, sem saber, a datar as alterações da caldeira: uma panela que chega à mesa mal passada é um boletim do interior da terra. E há dias em que ciência e mesa trocam de lugar: os técnicos provam, no prato, o próprio trabalho; as cozinheiras pedem-lhes que expliquem aos turistas por que razão a terra demora seis horas no que o gás fazia em uma.",
      es: "El cocido acabó, sin que nadie lo planeara, por convertirse en instrumento científico. Como la demora de la cocción varía con el calor del suelo, los restaurantes ayudan, sin saberlo, a datar los cambios de la caldera: una olla que llega a la mesa poco hecha es un boletín del interior de la tierra. Y hay días en que ciencia y mesa intercambian su sitio: los técnicos prueban, en el plato, el propio trabajo; las cocineras les piden que expliquen a los turistas por qué la tierra tarda seis horas en lo que el gas hacía en una." },
      { it: "Por agora, o compromisso segue de pé — o de uma população que cozinha em cima de um fogão de dez quilómetros de profundidade, e o dos cientistas que, ao almoço, fazem o que quase ninguém faz: provam, no prato, o resultado do próprio trabalho. Como diz a placa da casa de chá, ao fim da estrada de ferro: aqui, até o tempo é cozinhado devagar.",
      es: "Por ahora, el compromiso sigue en pie — el de una población que cocina encima de un fogón de diez kilómetros de profundidad, y el de los científicos que, a la hora de comer, hacen lo que casi nadie hace: prueban, en el plato, el resultado del propio trabajo. Como dice el letrero de la casa de té, al final del camino de hierro: aquí, hasta el tiempo se cocina despacio." },
    ],
    words: [
      { it: "a fumarola", es: "la fumarola" },
      { it: "a caldeira", es: "la caldera (volcánica)", note: "PT «caldeira» = caldera volcânica e também caldeira de roupa; ES usa «caldera» para a roupa" },
      { it: "o vulcão adormecido", es: "el volcán dormido", note: "adormecido ≠ extinto: dorme, não morreu" },
      { it: "o tremor", es: "el temblor (sísmico)" },
      { it: "o cozido", es: "el cocido" },
      { it: "tirar partido", es: "sacar provecho" },
    ],
    questions: [
      { q: "¿Qué es el cozido das Furnas, según el primer párrafo?", options: ["Um guisado feito no fogão a gás", "Carne, enchidos e legumes enterrados de manhã, cozinhados pelo calor da própria terra e tirados à uma da tarde", "Um prato de restaurante de Lisboa", "Uma sopa fria de verão"], answer: 1, why: "«…carne, enchidos e legumes enterrados de manhã num buraco do solo, cozinhados pelo calor da própria terra, tirados à uma da tarde, pontualmente…»" },
      { q: "¿Cómo describe la noticia a la caldeira?", options: ["Um vulcão apagado, sem perigo", "Uma panela extinta", "Uma montanha comum", "Um vulcão adormecido, não um apagado: o calor que cozinha o almoço é o mesmo que os sensores vigiam"], answer: 3, why: "«A caldeira é um vulcão adormecido, não um apagado: o calor que cozinha o almoço é o mesmo que os sensores da ilha vigiam dia e noite…»" },
      { q: "¿Por qué se tornou o cozido «instrumento científico»?", options: ["Porque os restaurantes são laboratórios legalizados", "Porque o gás é caro", "Porque o sabor mudou de ano para ano", "Porque a demora do cozimento varia com o calor do solo — uma panela mal passada é um boletim do interior da terra"], answer: 3, why: "«Como a demora do cozimento varia com o calor do solo, os restaurantes ajudam, sem saber, a datar as alterações da caldeira: uma panela que chega à mesa mal passada é um boletim do interior da terra.»" },
      { q: "¿Qué ironía final cierra la noticia?", options: ["Os turistas cozinham mal", "A estrada de ferro fechou", "Os cientistas provam, no prato, o resultado do próprio trabalho — e até o tempo é cozinhado devagar", "Os turistas pedem tremores ao balcão"], answer: 2, why: "«…os cientistas que, ao almoço, fazem o que quase ninguém faz: provam, no prato, o resultado do próprio trabalho… aqui, até o tempo é cozinhado devagar.»" },
    ],
    discuss: [
      { it: "«O vulcão avisa sempre — em gás, em tremor, em cheiro.» Que sinais é que a tua terra dá antes de mudar de humor? Quem os sabe ler?", es: "«El volcán avisa siempre — en gas, en temblor, en olor.» ¿Qué señales da tu tierra antes de cambiar de humor? ¿Quién sabe leerlas?" },
      { it: "Ciência que se prova ao almoço: em que outro ofício se pode saborear o resultado do próprio trabalho? Qual nunca se pode provar?", es: "Ciencia que se prueba a la hora de comer: ¿en qué otro oficio se puede saborear el resultado del propio trabajo? ¿Cuál no se puede probar nunca?" },
    ],
  },

  /* ═══ C2 · 11 — Cultura (Arraiolos) ═══ */
  {
    id: "pt-news-c2-11", cat: "cultura", level: "C2", place: "Arraiolos", minutes: 6,
    title: "O tapete que se borda devagar",
    titleEs: "La alfombra que se borda despacio",
    lead: {
      it: "Há uma vila do Alentejo onde o tempo se conta em pontos de bordado. Os tapetes de Arraiolos levam séculos a encher casas de meio mundo — e continuam a levar meses cada um, porque a pressa, aqui, nunca aprendeu a bordar.",
      es: "Hay un pueblo del Alentejo donde el tiempo se cuenta en puntos de bordado. Las alfombras de Arraiolos llevan siglos llenando casas de medio mundo — y siguen llevando meses cada una, porque la prisa, aquí, nunca aprendió a bordar.",
    },
    paragraphs: [
      { it: "A técnica tem meio milénio: diz a lenda que a trouxeram tecelãs de além-mar, e o certo é que o ponto se adaptou a esta planície como se aqui tivesse nascido. O tapete faz-se em tela de linho ou de lã, borda-se com lãs tintas nas cores da terra e obedece a cartões que passam de geração em geração como se fossem escrituras. Quem os lê, lê desenhos de quinhentos anos assinados por gente que não sabia escrever.",
      es: "La técnica tiene medio milenio: cuenta la leyenda que la trajeron tejedoras de allende los mares, y lo cierto es que el punto se adaptó a esta llanura como si aquí hubiera nacido. La alfombra se hace en tela de lino o de lana, se borda con lanas teñidas en los colores de la tierra y obedece a cartones que pasan de generación en generación como si fueran escrituras. Quien los lee, lee dibujos de quinientos años firmados por gente que no sabía escribir." },
      { it: "O que distingue o tapete não é a lã; é a paciência. Uma peça grande pode levar um ano inteiro de pontos; as mestras bordadeiras trabalham com o tapete no regaço, à porta das casas, ao fim do dia. E há famílias em que a arte desce de avó para neta como desce um apelido.",
      es: "Lo que distingue a la alfombra no es la lana; es la paciencia. Una pieza grande puede llevar un año entero de puntos; las maestras bordadoras trabajan con la alfombra en el regazo, a la puerta de las casas, al final del día. Y hay familias en que el arte desciende de abuela a nieta como desciende un apellido." },
      { it: "«O tapete não se apressa; o tapete acaba-se», diz a mestra bordadeira Albertina Chaves, que tem meio século de ofício. «A pressa é inimiga do tapete, como do resto. Um ponto mal dado não se desmancha sozinho — fica ali, a anos-luz do próximo, a gritar. E, se me perguntam quanto tempo leva um tapete, respondo sempre o mesmo: o que ele quiser.»",
      es: "«La alfombra no se apresura; la alfombra se acaba», dice la maestra bordadora Albertina Chaves, que tiene medio siglo de oficio. «La prisa es enemiga de la alfombra, como del resto. Un punto mal dado no se deshace solo — se queda ahí, a años luz del siguiente, gritando. Y, si me preguntan cuánto tiempo lleva una alfombra, respondo siempre lo mismo: lo que ella quiera.»" },
      { it: "A vila trocou, no entanto, de mercado sem o querer: onde o tapete era dote, é hoje peça de museu e encomenda de arquiteto. As escolas de bordado enchem-se de adolescentes que vêm aprender o que as redes não ensinam. Os turistas partem com um número na cabeça que nenhum folheto publica: nove meses — o tempo que a terra leva a fazer um tapete grande e uma criança.",
      es: "El pueblo cambió, sin embargo, de mercado sin quererlo: donde la alfombra era dote, es hoy pieza de museo y encargo de arquitecto. Las escuelas de bordado se llenan de adolescentes que vienen a aprender lo que las redes no enseñan. Los turistas partem con un número en la cabeza que ningún folleto publica: nueve meses — el tiempo que la tierra tarda en hacer una alfombra grande y un niño." },
      { it: "Dir-se-ia que Arraiolos inventou, sem dar por isso, uma economia ao contrário: quanto mais depressa corre o mundo, mais vale o que demora. A frase que os cartões repetem já se borda, com trocadilho, nas paredes da vila: «Quem quer depressa, não quer tapete.» E continua a ser verdade quinhentos anos depois, ponto por ponto — a coisa mais lenta que há é também a mais difícil de imitar.",
      es: "Diríase que Arraiolos inventó, sin darse cuenta, una economía al revés: cuanto más deprisa corre el mundo, más vale lo que tarda. La frase que los cartones repiten ya se borda, con juego de palabras, en las paredes del pueblo: «Quien quiere deprisa, no quiere alfombra.» Y sigue siendo verdad quinientos años después, punto por punto — lo más lento que hay es también lo más difícil de imitar." },
    ],
    words: [
      { it: "o bordado", es: "el bordado" },
      { it: "a agulha", es: "la aguja" },
      { it: "a lã", es: "la lana" },
      { it: "o cartão", es: "el cartón (patrón de desenho)", note: "aqui «cartão» = folha de padrão; fora do bordado, «cartão» é a tarjeta de pagamento" },
      { it: "o dote", es: "la dote" },
      { it: "o regaço", es: "el regazo" },
    ],
    questions: [
      { q: "¿Qué distingue al tapete, según el segundo párrafo?", options: ["A lã, só a lã", "O preço, só o preço", "A paciência: uma peça grande pode levar um ano inteiro de pontos", "A marca, que é famosa"], answer: 2, why: "«O que distingue o tapete não é a lã; é a paciência. Uma peça grande pode levar um ano inteiro de pontos…»" },
      { q: "¿Qué pasa con un ponto mal dado, según Albertina Chaves?", options: ["Desmancha-se sozinho ao fim do ano", "Fica ali, a anos-luz do próximo, a gritar", "Não se nota em tapete grande", "É assinado à parte"], answer: 1, why: "«Um ponto mal dado não se desmancha sozinho — fica ali, a anos-luz do próximo, a gritar.»" },
      { q: "¿Qué número se llevan los turistas «na cabeça»?", options: ["Nove meses — o tempo que a terra leva a fazer um tapete grande e uma criança", "Quinhentos anos", "O preço do metro quadrado", "O número da feira"], answer: 0, why: "«…partem com um número na cabeça que nenhum folheto publica: nove meses — o tempo que a terra leva a fazer um tapete grande e uma criança.»" },
      { q: "¿Qué «economia ao contrário» inventó el pueblo, según el cierre?", options: ["Quanto mais depressa corre o mundo, mais vale o que demora — e o que é mais lento é também o mais difícil de imitar", "Vender tudo pela internet", "Fazer tapetes à máquina", "Baixar o preço para vender mais"], answer: 0, why: "«Arraiolos inventou, sem dar por isso, uma economia ao contrário: quanto mais depressa corre o mundo, mais vale o que demora… a coisa mais lenta que há é também a mais difícil de imitar.»" },
    ],
    discuss: [
      { it: "«O tapete não se apressa; o tapete acaba-se.» O que é que tu teimarias em acabar, sabendo que não se apressa?", es: "«La alfombra no se apresura; la alfombra se acaba.» ¿Qué es aquello en lo que tú te empeñarías en acabarlo, sabiendo que no se apresura?" },
      { it: "Arte que desce por via de sangue e por via de agulha: que ofício teve a tua família? Ficou em alguém?", es: "Arte que desciende por vía de sangre y por vía de aguja: ¿qué oficio tuvo tu familia? ¿Quedó en alguien?" },
    ],
  },

  /* ═══ C2 · 12 — Economia (Reguengos de Monsaraz) ═══ */
  {
    id: "pt-news-c2-12", cat: "economia", level: "C2", place: "Reguengos de Monsaraz", minutes: 6,
    title: "A casca que já foi ao espaço",
    titleEs: "La corteza que ya fue al espacio",
    lead: {
      it: "Há uma árvore que se despe sem morrer, uma colheita que se faz a cada nove anos e um país que veste metade do mundo com a mesma casca. A cortiça portuguesa saltou da garrafa para a indústria aeroespacial sem pedir licença ao calendário.",
      es: "Hay un árbol que se desnuda sin morir, una cosecha que se hace cada nueve años y un país que viste a medio mundo con la misma corteza. El corcho portugués saltó de la botella a la industria aeroespacial sin pedir permiso al calendario.",
    },
    paragraphs: [
      { it: "O montado é uma fábrica sem horário: sobreiros espaçados, pastagem por baixo, e uma regra que os agrónomos repetem como um credo — a árvore não se derruba, descasca-se. Cada nove anos, uma equipa tira a casca a um tronco que continua de pé; a árvore agradece à sua maneira: oferecendo, no nono ano seguinte, outra casca igual.",
      es: "La dehesa es una fábrica sin horario: alcornoques espaciados, pasto por debajo, y una regla que los agrónomos repiten como un credo — el árbol no se tala, se descorteza. Cada nueve años, un equipo quita la corteza a un tronco que sigue de pie; el árbol agradece a su manera: ofreciendo, en el noveno año siguiente, otra corteza igual." },
      { it: "Portugal é, nesta matéria, um país de peso: metade da cortiça do mundo sai daqui. O que começou como rolha de vinho passou a isolamento de casa, sola de sapato, parede de estúdio — e, nas últimas décadas, a componente de engenhos que sobem ao espaço: a casca que abafa o som abafa também o calor na reentrada, com uma vantagem que os metais não têm.",
      es: "Portugal es, en esta materia, un país de peso: la mitad del corcho del mundo sale de aquí. Lo que empezó como tapón de vino pasó a aislamiento de casa, suela de zapato, pared de estudio — y, en las últimas décadas, a componente de ingenios que suben al espacio: la corteza que amortigua el sonido amortigua también el calor en la reentrada, con una ventaja que los metales no tienen." },
      { it: "«A cortiça dá pano para mangas», diz o agrónomo Joaquim Barreto, que conhece os montados pelo nome. «O país ainda a olha para a garrafa, quando ela já vai ao espaço. Um sobreiro vive duzentos anos, sustenta três gerações e não pede folga para envelhecer. Há economias que se esgotam; esta renova-se a cada nove anos, como um contrato assinado com a árvore — e as árvores, ao contrário dos mercados, nunca pedem juros.»",
      es: "«El corcho da mucho que hablar — y para todo lo demás», dice el agrónomo Joaquim Barreto, que conoce las dehesas por su nombre. «El país todavía lo mira por la botella, cuando ya va al espacio. Un alcornoque vive doscientos años, sostiene a tres generaciones y no pide vacaciones para envejecer. Hay economías que se agotan; esta se renueva cada nueve años, como un contrato firmado con el árbol — y los árboles, al contrario que los mercados, nunca piden intereses.»" },
      { it: "A colheita é um ofício de precisão ancestral: o descortiçador abre a casca com um machado de cabo curto, num golpe que tem de ser firme sem ser fundo. Um mau golpe fere a árvore para sempre; um bom golpe deixa o tronco pronto para o próximo ciclo. Nos montados, o verão tem este ruído próprio — o toque do machado, o grito de aviso, a casca que cai inteira como um sobretudo velho. E o sobreiro, nu e de pé no meio do campo, tem o ar de quem acabou de se despir para um exame médico que passou.",
      es: "La cosecha es un oficio de precisión ancestral: el descortezador abre la corteza con un hacha de mango corto, en un golpe que tiene que ser firme sin ser hondo. Un mal golpe hiere al árbol para siempre; un buen golpe deja el tronco listo para el próximo ciclo. En las dehesas, el verano tiene este ruido propio — el toque del hacha, el grito de aviso, la corteza que cae entera como un abrigo viejo. Y el alcornoque, desnudo y de pie en medio del campo, tiene el aire de quien acaba de desvestirse para un examen médico que ha aprobado." },
      { it: "Economistas discutem se a cortiça é setor primário ou secundário; os montados respondem com uma terceira hipótese: é um património que trabalha. E a frase que corre entre os produtores já se borda em almofadas de cortiça: «O sobreiro dá duas colheitas — a cortiça e a sombra.» Como toda a frase verdadeira, não precisa de nota de rodapé.",
      es: "Los economistas discuten si el corcho es sector primario o secundario; las dehesas responden con una tercera hipótesis: es un patrimonio que trabaja. Y la frase que corre entre los productores ya se borda en almohadas de corcho: «El alcornoque da dos cosechas — el corcho y la sombra.» Como toda frase verdadera, no necesita nota al pie." },
    ],
    words: [
      { it: "o sobreiro", es: "el alcornoque" },
      { it: "o montado", es: "la dehesa (de alcornoques)", note: "PT-PT «montado» = dehesa de sobreiros; ES «montado» não existe neste sentido" },
      { it: "a cortiça", es: "el corcho" },
      { it: "a rolha", es: "el tapón (de corcho)" },
      { it: "o descortiçador", es: "el descortezador" },
      { it: "dar pano para mangas", es: "dar mucho que hablar / para rato", note: "expressão fixa: a cortiça «dá pano para mangas» = dá assunto para muito tempo" },
    ],
    questions: [
      { q: "¿Cuál es la regla del montado que los agrónomos repiten como un credo?", options: ["A árvore não se derruba, descasca-se — cada nove anos", "Cortar tudo de dez em dez anos", "Plantar só eucaliptos", "Não plantar nada"], answer: 0, why: "«…uma regra que os agrónomos repetem como um credo — a árvore não se derruba, descasca-se. Cada nove anos, uma equipa tira a casca a um tronco que continua de pé…»" },
      { q: "¿Adónde saltó la cortiça, según la noticia?", options: ["Da garrafa para a indústria aeroespacial — a casca que abafa o som abafa também o calor na reentrada", "Do vinho para o azeite", "De Portugal para a Espanha", "Do campo para o supermercado"], answer: 0, why: "«…passou a isolamento de casa, sola de sapato, parede de estúdio — e, nas últimas décadas, a componente de engenhos que sobem ao espaço: a casca que abafa o som abafa também o calor na reentrada, com uma vantagem que os metais não têm»" },
      { q: "¿Qué tiene que ser el golpe del descortiçador?", options: ["Fundo, para tirar tudo de uma vez", "Rápido e descuidado", "Firme sem ser fundo — um mau golpe fere a árvore para sempre", "Dado ao acaso"], answer: 2, why: "«…num golpe que tem de ser firme sem ser fundo. Um mau golpe fere a árvore para sempre; um bom golpe deixa o tronco pronto para o próximo ciclo.»" },
      { q: "¿Qué significa «o sobreiro dá duas colheitas — a cortiça e a sombra»?", options: ["Que a sombra se vende à parte", "Que o sobreiro dá fruto duas vezes", "Que a árvore rende em dinheiro e em qualidade de vida — um património que trabalha", "Que o corcho nasce da sombra"], answer: 2, why: "«…os montados respondem com uma terceira hipótese: é um património que trabalha… O sobreiro dá duas colheitas — a cortiça e a sombra.»" },
    ],
    discuss: [
      { it: "«As árvores, ao contrário dos mercados, nunca pedem juros.» Que outros «contratos» conhecem tu que não cobram juros? Duram mais?", es: "«Los árboles, al contrario que los mercados, nunca piden intereses.» ¿Qué otros «contratos» conoces tú que no cobren intereses? ¿Duran más?" },
      { it: "Cortiça: da rolha ao espaço. Que matéria-prima da tua região saltou de longe, sem dar por isso? Conta o salto.", es: "Corcho: del tapón al espacio. ¿Qué materia prima de tu región saltó lejos, sin darse cuenta? Cuenta el salto." },
    ],
  },

  /* ═══ C2 · 13 — Ambiente (Seia) ═══ */
  {
    id: "pt-news-c2-13", cat: "ambiente", level: "C2", place: "Seia", minutes: 6,
    title: "O gelo que se despediu da serra",
    titleEs: "El hielo que se despidió de la sierra",
    lead: {
      it: "A serra mais alta do país continental perdeu, sem ruído, o último glaciar. Os geógrafos foram ao funeral; os pastores, que já tinham visto partir outras coisas, ficaram com as lagoas. Uma história de gelo que se tornou, sem mudar de lugar, história de água.",
      es: "La sierra más alta del país continental perdió, sin ruido, el último glaciar. Los geógrafos fueron al funeral; los pastores, que ya habían visto marcharse otras cosas, se quedaron con los lagos. Una historia de hielo que se convirtió, sin cambiar de lugar, en historia de agua.",
    },
    paragraphs: [
      { it: "A Estrela já teve gelo de verdade. Até meados do século passado, o glaciar ainda mostrava os dentes; diz-se que nos anos quarenta os pastores lhe ouviam ranger à noite. Os vales têm a forma que o gelo lhes deu: o vale do Zêzere é um vale glaciário de manual, com moreias, ogivas e penedos que o gelo arrastou para baixo como quem muda mobília de casa. Quem estuda a serra estuda, afinal, o rasto de um animal que se foi há dez mil anos e ainda deixa pegadas.",
      es: "La Estrela ya tuvo hielo de verdad. Hasta mediados del siglo pasado, el glaciar todavía enseñaba los dientes; se dice que en los años cuarenta los pastores le oían crujir de noche. Los valles tienen la forma que el hielo les dio: el valle del Zêzere es un valle glaciar de manual, con morrenas, rocas aborregadas y peñascos que el hielo arrastró hacia abajo como quien muda los muebles de casa. Quien estudia la sierra estudia, al fin y al cabo, el rastro de un animal que se fue hace diez mil años y todavía deja huellas." },
      { it: "O fim chegou sem cerimónia: os últimos metros de gelo derreteram numa década em que ninguém estava a olhar. Os cientistas dataram o desaparecimento, e a serra seguiu o seu calendário — que agora tem menos neve e mais chuva. De nada serve chorar sobre o leite derramado; serve, isso sim, medir o que sobrou: as lagoas de altitude, os charcos das cabeceiras, as nascentes que abastecem as aldeias de baixo e os reservatórios que no verão já pedem paciência.",
      es: "El fin llegó sin ceremonia: los últimos metros de hielo se derritieron en una década en que nadie estaba mirando. Los científicos dataron la desaparición, y la sierra siguió su calendario — que ahora tiene menos nieve y más lluvia. De nada sirve llorar sobre la leche derramada; sirve, eso sí, medir lo que quedó: los lagos de altitud, los charcos de las cabeceras, los manantiales que abastecen a las aldeas de abajo y los embalses que en verano ya piden paciencia." },
      { it: "«Não vim enterrar o glaciar; vim aprender com ele», diz o geógrafo Afonso Sequeira. «O gelo esculpiu o reservatório que hoje usamos: sem o trabalho de dez mil anos, não haveria bacias onde a água se guarda. Ainda que cada verão seja um exame, é o único em que não se pode estudar na véspera.»",
      es: "«No vine a enterrar el glaciar; vine a aprender de él», dice el geógrafo Afonso Sequeira. «El hielo esculpió el embalse que hoy usamos: sin el trabajo de diez mil años, no habría cuencas donde el agua se guarda. Aunque cada verano sea un examen, es el único en que no se puede estudiar la víspera.»" },
      { it: "A vida da serra ajusta-se com a lentidão das coisas antigas. Os rebanhos subiram de quota; e as centrais de baixo aprenderam a contar com uma montanha que guarda menos neve. Quem tem cinquenta anos lembra-se de invernos de porta entupida; quem tem dez nem acredita — e é essa diferença, entre memórias, o mais fiel dos termómetros.",
      es: "La vida de la sierra se ajusta con la lentitud de las cosas antiguas. Los rebaños subieron de cuota; y las centrales de abajo aprendieron a contar con una montaña que guarda menos nieve. Quien tiene cincuenta años recuerda inviernos de puerta bloqueada; quien tiene diez ni se lo cree — y es esa diferencia, entre recuerdos, el más fiel de los termómetros." },
      { it: "Fica a ironia de sempre: o glaciar morreu e virou património. Há quem suba no verão para ver onde ele esteve, como quem visita a casa de um avô. E a frase que os guias repetem já não é de luto: «A serra não perdeu o gelo; guardou-o em outro estado — e agora dá-o de beber aos de baixo.» Como quase toda a frase dos guias, é meia verdade; como quase toda a meia verdade, é a metade que consola.",
      es: "Queda la ironía de siempre: el glaciar murió y se volvió patrimonio. Hay quien sube en verano para ver dónde estuvo, como quien visita la casa de un abuelo. Y la frase que repiten los guías ya no es de luto: «La sierra no perdió el hielo; lo guardó en otro estado — y ahora se lo da de beber a los de abajo.» Como casi toda frase de los guías, es media verdad; como casi toda media verdad, es la mitad que consuela." },
    ],
    words: [
      { it: "o glaciar", es: "el glaciar" },
      { it: "a moreia", es: "la morrena" },
      { it: "a lagoa", es: "el lago" },
      { it: "a nascente", es: "el manantial", note: "PT «nascente» = fonte de água e também o ponto cardeal Este; ES «naciente» é o adjetivo" },
      { it: "o reservatório", es: "el embalse / depósito", note: "PT «reservatório» = depósito de água; ES «reservatorio» não existe — em ES diz-se «embalse» ou «depósito»" },
      { it: "o rebanho", es: "el rebaño" },
    ],
    questions: [
      { q: "¿Qué forma tienen los valles, según el primer párrafo?", options: ["A forma que o gelo lhes deu — o vale do Zêzere é um vale glaciário de manual, com moreias e penedos arrastados", "A forma dos rios do sul", "A forma que o vento lhes deu", "Nenhuma, são todos iguais"], answer: 0, why: "«Os vales têm a forma que o gelo lhes deu: o vale do Zêzere é um vale glaciário de manual…»" },
      { q: "¿Qué sirve, en vez de llorar sobre la leche derramada?", options: ["Reclamar aos jornais", "Medir o que sobrou: as lagoas de altitude, os charcos das cabeceiras, as nascentes que abastecem as aldeias", "Construir um glaciar novo", "Fechar a serra a visitas"], answer: 1, why: "«De nada serve chorar sobre o leite derramado; serve, isso sim, medir o que sobrou: as lagoas de altitude, os charcos das cabeceiras, as nascentes que abastecem as aldeias de baixo e os reservatórios que no verão já pedem paciência.»" },
      { q: "¿Qué esculpió el reservatório que hoy usamos, según Afonso Sequeira?", options: ["Os engenheiros, na década passada", "As chuvas de março", "As centrals elétricas", "O gelo: sem o trabalho de dez mil anos, não haveria bacias onde a água se guarda"], answer: 3, why: "«O gelo esculpiu o reservatório que hoje usamos: sem o trabalho de dez mil anos, não haveria bacias onde a água se guarda.»" },
      { q: "¿Por qué es «a diferença entre memórias» o mais fiel dos termómetros?", options: ["Porque os termómetros avariaram todos", "Porque quem tem cinquenta anos lembra invernos de porta entupida e quem tem dez nem acredita", "Porque a serra não tem termómetros", "Porque os guias o dizem"], answer: 1, why: "«Quem tem cinquenta anos lembra-se de invernos de porta entupida; quem tem dez nem acredita — e é essa diferença, entre memórias, o mais fiel dos termómetros.»" },
    ],
    discuss: [
      { it: "«Não se pode estudar na véspera.» Que exames é que o clima te faz a ti, no teu sítio? Como vais de véspera?", es: "«No se puede estudiar la víspera.» ¿Qué exámenes te hace el clima a ti, en tu sitio? ¿Cómo vas de víspera?" },
      { it: "Fracasos que viram património: conheces algum «glaciar perdido» na tua região — uma coisa que só se explica a quem a viu?", es: "Fracasos que se vuelven patrimonio: ¿conoces algún «glaciar perdido» en tu región — algo que solo se puede explicar a quien lo vio?" },
    ],
  },

  /* ═══ C2 · 14 — Saúde (Amarante) ═══ */
  {
    id: "pt-news-c2-14", cat: "salute", level: "C2", place: "Amarante", minutes: 6,
    title: "A sopa que o país receita",
    titleEs: "La sopa que el país receta",
    lead: {
      it: "Na mesa dos portugueses há um prato que não pede carta: entra antes de tudo, despede-se por último. Uns nutricionistas decidiram estudá-lo como quem estuda um medicamento — e encontraram, na tigela, metade de um sistema de saúde.",
      es: "En la mesa de los portugueses hay un plato que no pide carta: entra antes que todo, se despide el último. Unos nutricionistas decidieron estudiarlo como quien estudia un medicamento — y encontraron, en el plato hondo, la mitad de un sistema de salud.",
    },
    paragraphs: [
      { it: "A sopa é a primeira receita do país e talvez a mais barata: couve, batata, azeite, água e tempo. Foi com ela que as avós atravessaram escassezes que os livros já esqueceram. Cada região tem a sua — o caldo verde no norte, a sopa de legumes da beira, o gaspacho do sul — mas a regra é uma só e não tem asterisco: come-se primeiro, discute-se depois.",
      es: "La sopa es la primera receta del país y quizá la más barata: col, patata, aceite de oliva, agua y tiempo. Fue con ella que las abuelas atravesaron escaseces que los libros ya olvidaron. Cada región tiene la suya — el caldo verde en el norte, la sopa de verduras de la beira, el gazpacho del sur — pero la regla es una sola y no tiene asterisco: se come primero, se discute después." },
      { it: "O estudo recente pôs números no costume. Quem come sopa ao almoço ingere menos no resto da refeição; os índices de peso melhoram sem que ninguém faça dieta; e nos hospitais, a tigela de entrada chegou a ser prescrita, literalmente, a doentes sem apetite. Os nutricionistas falam em efeito de saciedade prévia; as avós falavam, com menos ciência e mais exatidão, em «abrir o estômago».",
      es: "El estudio reciente puso números a la costumbre. Quien come sopa en el almuerzo ingiere menos en el resto de la comida; los índices de peso mejoran sin que nadie haga dieta; y en los hospitales, el plato de entrada llegó a ser prescrito, literalmente, a enfermos sin apetito. Los nutricionistas hablan de efecto de saciedad previa; las abuelas hablaban, con menos ciencia y más exactitud, de «abrir el estómago»." },
      { it: "«Não receitamos sopa; recomendamos o que sempre funcionou», diz o nutricionista Nuno Sarmento. «A sopa à moda da casa tem uma vantagem que a indústria não consegue copiar: leva o que a temporada dá. Um pacote de sopa instantânea resolve a pressa; a panela resolve o dia. E o sabor de infância, esse, não vem no rótulo — vem no caldo, que é onde os portugueses guardam a memória dos afetos.»",
      es: "«No recetamos sopa; recomendamos lo que siempre ha funcionado», dice el nutricionista Nuno Sarmento. «La sopa a la moda de la casa tiene una ventaja que la industria no consigue copiar: lleva lo que la temporada da. Un paquete de sopa instantánea resuelve la prisa; la olla resuelve el día. Y el sabor de infancia, ese, no viene en la etiqueta — viene en el caldo, que es donde los portugueses guardan la memoria de los afectos.»" },
      { it: "Há, como em toda a receita, pontos de discórdia. O sal, que a sopa pede e os médicos limitam; o azeite, que voltou a ser virtude depois de ter sido suspeito. A mesa portuguesa segue, no entanto, uma regra: onde há sopa, há casa — e onde há casa, há quem volte a horas certas para a comer. Os nutricionistas chamam-lhe adesão ao tratamento; o resto do país chama-lhe jantar.",
      es: "Hay, como en toda receta, puntos de discordia. La sal, que la sopa pide y los médicos limitan; el aceite, que volvió a ser virtud después de haber sido sospechoso. La mesa portuguesa sigue, sin embargo, una regla: donde hay sopa, hay casa — y donde hay casa, hay quien vuelva a horas exactas para comerla. Los nutricionistas lo llaman adherencia al tratamiento; el resto del país lo llama cena." },
      { it: "Ver-se-á se a sopa aguenta o passo do tempo; os sinais dizem que sim. As cantinas voltaram a cozinhar de manhã; e nas ementas novas, entre nomes de chef, aparece cada vez mais uma linha discreta: sopa do dia. O país, que já foi império, resolveu-se a ser panela — e, na questão da saúde, talvez tenha sido a melhor decisão que alguma vez tomou sem dar por isso.",
      es: "Se verá si la sopa aguanta el paso del tiempo; las señales dicen que sí. Los comedores volvieron a cocinar por la mañana; y en los menús nuevos, entre nombres de chef, aparece cada vez más una línea discreta: sopa del día. El país, que llegó a ser imperio, se resolvió a ser olla — y, en la cuestión de la salud, quizá haya sido la mejor decisión que haya tomado nunca sin darse cuenta." },
    ],
    words: [
      { it: "a couve", es: "la col" },
      { it: "o azeite", es: "el aceite (de oliva)", note: "PT «azeite» = aceite de oliva; em PT, «óleo» é de outros usos" },
      { it: "a saciedade", es: "la saciedad" },
      { it: "o caldo verde", es: "el caldo verde", note: "sopa do norte com couve-galega e chouriço — o nome não se traduz" },
      { it: "à moda da casa", es: "a la moda de la casa", note: "expressão fixa: feito como se faz naquela casa" },
      { it: "a ementa", es: "el menú, la carta", note: "PT «ementa» = carta de restaurante; ES «ementa» não existe" },
    ],
    questions: [
      { q: "¿Cuál es la única regla de la sopa, según el primer párrafo?", options: ["Serve-se fria", "Só se faz ao domingo", "Come-se primeiro, discute-se depois — não tem asterisco", "Leva sempre carne"], answer: 2, why: "«…a regra é uma só e não tem asterisco: come-se primeiro, discute-se depois.»" },
      { q: "¿Qué encontró el estudio reciente?", options: ["Que a sopa engorda", "Que os hospitais a proibiram", "Que ninguém a come mais", "Quem come sopa ao almoço ingere menos no resto da refeição e os índices de peso melhoram sem dieta"], answer: 3, why: "«Quem come sopa ao almoço ingere menos no resto da refeição; os índices de peso melhoram sem que ninguém faça dieta…»" },
      { q: "¿Qué ventaja tiene la sopa à moda da casa, según Nuno Sarmento?", options: ["É mais barata que o pão", "Cozinha-se sozinha", "Leva o que a temporada dá — e o sabor de infância não vem no rótulo, vem no caldo", "Pode ser congelada dez anos"], answer: 2, why: "«A sopa à moda da casa tem uma vantagem que a indústria não consegue copiar: leva o que a temporada dá… o sabor de infância, esse, não vem no rótulo — vem no caldo…»" },
      { q: "¿Cómo llama «o resto do país» ao que os nutricionistas chamam adesão ao tratamento?", options: ["Chama-lhe jantar — onde há sopa, há casa, e onde há casa, há quem volte a horas certas", "Chama-lhe dieta", "Chama-lhe receita médica", "Chama-lhe tradição perdida"], answer: 0, why: "«…onde há sopa, há casa — e onde há casa, há quem volte a horas certas para a comer. Os nutricionistas chamam-lhe adesão ao tratamento; o resto do país chama-lhe jantar.»" },
    ],
    discuss: [
      { it: "«Abrir o estômago»: que expressão usam os teus avós para o que a ciência explica? Qual te parece mais exata?", es: "«Abrir el estómago»: ¿qué expresión usan tus abuelos para lo que la ciencia explica? ¿Cuál te parece más exacta?" },
      { it: "Onde há sopa, há casa. Na tua casa, o que é que anuncia que há casa? Um cheiro, um ruído, uma hora?", es: "Donde hay sopa, hay casa. En tu casa, ¿qué es lo que anuncia que hay casa? ¿Un olor, un ruido, una hora?" },
    ],
  },

  /* ═══ C2 · 15 — Sociedade (Arganil) ═══ */
  {
    id: "pt-news-c2-15", cat: "societa", level: "C2", place: "Arganil", minutes: 6,
    title: "A escola que reabriu com cinco alunos",
    titleEs: "La escuela que reabrió con cinco alumnos",
    lead: {
      it: "Numa aldeia da serra que tinha perdido quase tudo, voltou a tocar o sino da escola. Vieram cinco alunos de fora — de fora do mapa, dizem os avós — e a aldeia, que se preparava para acabar, passou a ensaiar o contrário.",
      es: "En una aldea de la sierra que había perdido casi todo, volvió a sonar la campana de la escuela. Llegaron cinco alumnos de fuera — de fuera del mapa, dicen los abuelos — y la aldea, que se preparaba para terminar, empezó a ensayar lo contrario.",
    },
    paragraphs: [
      { it: "A aldeia tinha chegado a um acordo silencioso com o despovoamento: ia-se embora devagar, um casamento de cada vez. Quando a notícia correu — que havia casas baratas, ar e um largo onde as crianças podiam brincar sem faixa de rodagem — as famílias novas começaram a chegar: primeiro de fim de semana, depois de vez. Trouxeram livros, ferramentas e a certeza de que a serra também é um endereço.",
      es: "La aldea había llegado a un acuerdo silencioso con la despoblación: se iba poco a poco, una boda cada vez. Cuando la noticia corrió — que había casas baratas, aire y una plaza donde los niños podían jugar sin franja de carretera — las familias nuevas empezaron a llegar: primero los fines de semana, después para siempre. Trajeron libros, herramientas y la certeza de que la sierra también es una dirección." },
      { it: "A escola, encerrada havia anos, reabriu por teimosia dos pais e por uma carta que alguém teve a cuidado de escrever. A turma tem cinco alunos e três idades; o professor dá as disciplinas em rotação, e o recreio é do tamanho da aldeia. Nas aulas de ciências, as nuvens chegam à janela antes do manual.",
      es: "La escuela, cerrada desde hacía años, reabrió por terquedad de los padres y por una carta que alguien tuvo el cuidado de escribir. La clase tiene cinco alumnos y tres edades; el profesor da las asignaturas en rotación, y el recreo es del tamaño de la aldea. En las clases de ciencias, las nubes llegan a la ventana antes del manual." },
      { it: "«Não vim salvar a aldeia; vim dar-lhe ferramentas», diz a diretora Alda Videira. «Aqui, a escola é o último serviço público que restou: é correio, é jornal, é baile de fim de ano. Se ela fecha, a aldeia apaga-se num inverno. Se fica — e fica —, as famílias põem as mãos à obra: um telhado em abril, uma horta em maio, um filho em setembro. E quem vem de fora aprende depressa a regra da casa: na serra, ninguém se salva sozinho, porque sozinho nem se emigra já.»",
      es: "«No vine a salvar la aldea; vine a darle herramientas», dice la directora Alda Videira. «Aquí, la escuela es el último servicio público que queda: es correo, es periódico, es baile de fin de año. Si cierra, la aldea se apaga en un invierno. Si se queda — y se queda —, las familias se ponen manos a la obra: un tejado en abril, un huerto en mayo, un hijo en septiembre. Y quien viene de fuera aprende deprisa la regla de la casa: en la sierra, nadie se salva solo, porque solo ni siquiera se emigra ya.»" },
      { it: "Os números, ainda pequenos, desenham uma curva que os demógrafos reconhecem com espanto. As matrículas duplicaram em três anos; o café voltou a abrir de manhã; o autocarro já leva passageiros nos dois sentidos. E os antigos, que foram os últimos a acreditar, converteram-se nos primeiros professores: ensinam os que vieram a podar as oliveiras, a ler o tempo pela serra, a acender o forno a lenha. A escola ensina às crianças; a aldeia, por sua vez, ensina a escola.",
      es: "Los números, todavía pequeños, dibujan una curva que los demógrafos reconocen con asombro. Las matrículas se duplicaron en tres años; el café volvió a abrir por la mañana; el autobús ya lleva pasajeros en ambos sentidos. Y los antiguos, que fueron los últimos en creer, se convirtieron en los primeros maestros: enseñan a los que vinieron a podar los olivos, a leer el tiempo por la sierra, a encender el horno de leña. La escuela enseña a los niños; la aldea, a su vez, enseña a la escuela." },
      { it: "A montanha, que durante décadas só soube despachar gente, aprendeu a recebê-la. E a frase que ficou escrita na parede da escola, por mão anónima, já se cita nos congressos: «Enquanto houver escola, há aldeia; enquanto houver aldeia, há escola.» Não se sabe quem a escreveu. Sabe-se, cada vez melhor, para quem — e é essa, das duas perguntas, a que responde ao futuro.",
      es: "La montaña, que durante décadas solo supo despachar gente, aprendió a recibirla. Y la frase que quedó escrita en la pared de la escuela, por mano anónima, ya se cita en los congresos: «Mientras haya escuela, hay aldea; mientras haya aldea, hay escuela.» No se sabe quién la escribió. Se sabe, cada vez mejor, para quién — y es esa, de las dos preguntas, la que responde al futuro." },
    ],
    words: [
      { it: "o despovoamento", es: "la despoblación" },
      { it: "a matrícula", es: "la matrícula" },
      { it: "o largo", es: "la plaza (do pueblo)", note: "PT «o largo» = praça da aldeia; ES «largo» é só adjetivo — aqui é substantivo" },
      { it: "podar", es: "podar" },
      { it: "o forno a lenha", es: "el horno de leña" },
      { it: "pôr as mãos à obra", es: "ponerse manos a la obra", note: "expressão fixa: «as famílias põem as mãos à obra» = começam a trabalhar" },
    ],
    questions: [
      { q: "¿Cómo describe el primer párrafo el acuerdo de la aldea con el despovoamento?", options: ["Ia-se embora devagar, um casamento de cada vez", "Foi de uma vez, num verão", "Nunca ninguém partiu", "Foi por ordem da câmara"], answer: 0, why: "«A aldeia tinha chegado a um acordo silencioso com o despovoamento: ia-se embora devagar, um casamento de cada vez.»" },
      { q: "¿Qué es la escuela para la aldea, según Alda Videira?", options: ["Um edifício como os outros", "O último serviço público que restou: é correio, é jornal, é baile de fim de ano — se fecha, a aldeia apaga-se num inverno", "Uma sala de estudo silenciosa", "Um posto de turismo"], answer: 1, why: "«Aqui, a escola é o último serviço público que restou: é correio, é jornal, é baile de fim de ano. Se ela fecha, a aldeia apaga-se num inverno.»" },
      { q: "¿En qué se converteram os antigos da aldea?", options: ["Nos primeiros professores: ensinam a podar, a ler o tempo pela serra, a acender o forno a lenha", "Em turistas assíduos", "Em guardas noturnos", "Em caseiros das casas novas"], answer: 0, why: "«…os antigos, que foram os últimos a acreditar, converteram-se nos primeiros professores: ensinam os que vieram a podar as oliveiras, a ler o tempo pela serra, a acender o forno a lenha…»" },
      { q: "¿Qué significa el final «sabe-se, cada vez melhor, para quem»?", options: ["Que o autor da frase foi encontrado", "Que a frase vai ser impressa em livro", "Que a escola tem cinco alunos conhecidos", "Que a pergunta importante não é quem escreveu, mas para quem se escreve — a que responde ao futuro"], answer: 3, why: "«Não se sabe quem a escreveu. Sabe-se, cada vez melhor, para quem — e é essa, das duas perguntas, a que responde ao futuro.»" },
    ],
    discuss: [
      { it: "«Na serra, ninguém se salva sozinho.» Na tua cidade, alguém se salva sozinho? Onde é que a soalheira é partilhada?", es: "«En la sierra, nadie se salva solo.» En tu ciudad, ¿alguien se salva solo? ¿Dónde se comparte el calor?" },
      { it: "Escola que ensina crianças e aldeia que ensina escola: o que é que o teu bairro ensina à tua escola? E o que é que ela devia aprender dele?", es: "Escuela que enseña a niños y aldea que enseña a la escuela: ¿qué es lo que tu barrio enseña a tu escuela? ¿Y qué debería ella aprender de él?" },
    ],
  },
];
