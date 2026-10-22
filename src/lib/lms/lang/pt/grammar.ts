import type { GrammarTopic } from "../../types";

/* ── Gramática do português EUROPEU · PT_GRAMMAR · v9.39 ─────────────
   Temas progresivos A1→C2 con soluciones paso a paso. `title` = español,
   `titleIt` = título técnico em português (lengua de estudio, por la
   convención histórica del campo). Explicaciones en español (con tuteo)
   y ejemplos em português de Portugal inline. Gramática propia: perfeito
   vs imperfeito, conjuntivo (presente/imperfeito/futuro), infinitivo
   pessoal, colocação pronominal (próclise/ênclise/mesóclise), estar a +
   infinitivo, regência, perfeito composto…                             */

export const PT_GRAMMAR: GrammarTopic[] = [
  /* ══════════ A1 ══════════ */
  {
    id: "pt-g-a1-genero-numero", level: "A1", title: "Género y número del sustantivo", titleIt: "Género e número dos substantivos",
    summary: "-o masculino, -a femenino, -e ambiguo; plurales regulares y la trampa de las palabras en -ão.",
    explanation: [
      "Como en español, la mayoría de los sustantivos en -o son masculinos (o livro, o comboio) y los que acaban en -a femeninos (a casa, a camisa). Los terminados en -e pueden ser de ambos géneros: o peixe y o café son masculinos, a chave y a noite femeninos. Excepciones compartidas con tu lengua: o problema es masculino y a mão femenino (as mãos).",
      "El plural es muy regular: -o → -os (livros), -a → -as (casas), -e → -es (chaves, cafés), -l → -is (papel → papeis). La gran trampa son las palabras en -ão: hacen -ões (coração → corações, estação → estações), -ães (pão → pães, cão → cães) o -ãos (irmão → irmãos, mão → mãos). No hay regla infalible: apréndelas con cada palabra.",
    ],
    examples: [
      { it: "o livro → os livros", es: "el libro → los libros" },
      { it: "a chave → as chaves", es: "la llave → las llaves" },
      { it: "o papel → os papeis", es: "el papel → los papeles" },
      { it: "o coração → os corações", es: "el corazón → los corazones" },
      { it: "a mão → as mãos", es: "la mano → las manos" },
    ],
    problems: [
      {
        title: "Poner en plural",
        question: "¿Cuál es el plural de “o pão”?",
        steps: [
          "Miro la terminación: -ão.",
          "Los tres plurales posibles son -ões, -ães y -ãos.",
          "pão pertenece al grupo de -ães (como cão → cães).",
          "Solo queda ajustar el artículo: o → os.",
        ],
        conclusion: "os pães (los panes)",
      },
      {
        title: "Género sorprendente",
        question: "¿Cuál es correcto: “a problema” u “o problema”?",
        steps: [
          "Aunque termina en -a, problema es masculino (como en español).",
          "Con artículo definido: o problema.",
          "En plural: os problemas.",
          "Cuidado también con a mão: termina en -o pero es femenino.",
        ],
        conclusion: "o problema (el problema)",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Plurales de las palabras en -ão",
        headers: ["Plural", "Ejemplos"],
        rows: [
          ["-ões", "coração → corações, estação → estações"],
          ["-ães", "pão → pães, cão → cães"],
          ["-ãos", "irmão → irmãos, mão → mãos"],
        ],
        note: "No existe una regla segura para elegir el grupo: memoriza el plural junto a cada palabra nueva.",
      },
    ],
  },
  {
    id: "pt-g-a1-artigos", level: "A1", title: "Artículos definidos e indefinidos", titleIt: "Artigos definidos e indefinidos",
    summary: "o / a / os / as y um / uma / uns / umas: solo dos formas por género, más simple que el italiano.",
    explanation: [
      "El artículo definido portugués tiene cuatro formas: o (m. sing.), a (f. sing.), os (m. pl.), as (f. pl.). Los indefinidos son um, uma, uns, umas. Ejemplos: o comboio, a casa, os livros, as chaves, um café, uma mensagem.",
      "Dos peculiaridades que sorprenden al hispanohablante: el artículo aparece con normalidad delante de nombres propios (A Maria chega às oito, O João trabalha no Porto) y delante de posesivos (o meu quarto), opcional pero muy frecuente en Portugal. Además, el artículo se contrae con las preposiciones (do, da, no, na…), un tema que verás en A2.",
    ],
    examples: [
      { it: "o autocarro / a estação", es: "el autobús / la estación" },
      { it: "os comboios / as casas", es: "los trenes / las casas" },
      { it: "um pequeno-almoço / uma mensagem", es: "un desayuno / un mensaje" },
      { it: "A Maria mora em Lisboa.", es: "María vive en Lisboa." },
      { it: "O meu quarto é pequeno.", es: "Mi habitación es pequeña." },
    ],
    problems: [
      {
        title: "Elegir el artículo",
        question: "Completa: “___ casa de banho é pequena.”",
        steps: [
          "casa de banho es femenino singular (termina en -a).",
          "El artículo definido femenino singular es a.",
          "En plural sería as casas de banho.",
          "Se pronuncia igual que la preposición a: el contexto distingue.",
        ],
        conclusion: "A casa de banho é pequena. (El baño es pequeño.)",
      },
      {
        title: "Artículo ante nombre propio",
        question: "¿Por qué se dice “O João trabalha no Porto”?",
        steps: [
          "En el portugués de Portugal es normal usar artículo con nombres de persona: o João, a Maria.",
          "no es la contracción em + o (en el).",
          "Traducción natural: «João trabaja en Oporto».",
          "El español no lo permite: nunca «el João trabaja en el Oporto».",
        ],
        conclusion: "João trabaja en Oporto (literal: el João trabaja en el Oporto).",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Artigos definidos e indefinidos",
        headers: ["", "Masculino", "Femenino"],
        rows: [
          ["Singular definido", "o (o livro)", "a (a casa)"],
          ["Plural definido", "os (os livros)", "as (as casas)"],
          ["Singular indefinido", "um (um livro)", "uma (uma casa)"],
          ["Plural indefinido", "uns (uns livros)", "umas (umas casas)"],
        ],
      },
    ],
  },
  {
    id: "pt-g-a1-presente", level: "A1", title: "Presente de indicativo regular", titleIt: "O presente do indicativo",
    summary: "Tres conjugaciones (-ar, -er, -ir) con desinencias casi gemelas de las españolas.",
    explanation: [
      "Los verbos regulares se agrupan en tres conjugaciones: falar (-ar), comer (-er), partir (-ir). El presente se forma con la raíz más las desinencias: eu falo, tu falas, ele fala, nós falámos, vocês falam; eu como, tu comes, ele come, nós comemos, vocês comem; eu parto, tu partes, ele parte, nós partimos, vocês partem.",
      "Fíjate en tres rasgos del portugués de Portugal: el pronombre suele omitirse (falo português basta); para el plural neutro o de cortesía se usa vocês con las formas de 3ª persona (vocês falam); y el tuteo tu (tu falas) es la forma normal de tratarse en Portugal. La grafía nós falámos lleva acento en el presente europeo, detalle que retomarás en A2.",
    ],
    examples: [
      { it: "Eu falo português todos os dias.", es: "Hablo portugués todos los días." },
      { it: "Tu bebes muito café.", es: "Tú bebes mucho café." },
      { it: "Ela parte às oito.", es: "Ella sale a las ocho." },
      { it: "Nós moramos em Lisboa.", es: "Nosotros vivimos en Lisboa." },
      { it: "Vocês comem peixe?", es: "¿Vosotros coméis pescado?" },
    ],
    problems: [
      {
        title: "Conjugar en presente",
        question: "Completa: “Nós ___ (estudar) no Porto.”",
        steps: [
          "estudar → primera conjugación -ar.",
          "Sujeto nós → desinencia -amos.",
          "Raíz estud- + -amos: estudamos.",
          "En Portugal se oye esTUDamos con la a tónica bien marcada.",
        ],
        conclusion: "Nós estudamos no Porto.",
      },
      {
        title: "Reconocer la persona",
        question: "¿A quién se refiere la forma “bebes”?",
        steps: [
          "bebes termina en -es: segunda persona del singular.",
          "Corresponde a tu: tu bebes.",
          "En español: «tú bebes».",
          "Sin pronombre, el contexto decide: Bebes muito café!",
        ],
        conclusion: "A ti (tu bebes = tú bebes).",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Presente do indicativo: as três conjugações",
        headers: ["Pessoa", "falar (-ar)", "comer (-er)", "partir (-ir)"],
        rows: [
          ["eu", "falo", "como", "parto"],
          ["tu", "falas", "comes", "partes"],
          ["ele/ela", "fala", "come", "parte"],
          ["nós", "falámos", "comemos", "partimos"],
          ["vocês", "falam", "comem", "partem"],
        ],
        note: "En el portugués europeo, el presente nós falámos lleva acento por su vocal abierta; el pretérito se escribe falamos (ver A2).",
      },
    ],
  },
  {
    id: "pt-g-a1-ser-estar-ter", level: "A1", title: "Ser, estar y ter: el corazón del portugués", titleIt: "Os verbos ser, estar e ter",
    summary: "Tres irregulares esenciales; ter ocupa el lugar del tener español en las expresiones de estado.",
    explanation: [
      "ser: eu sou, tu és, ele é, nós somos, vocês são. estar: eu estou, tu estás, ele está, nós estamos, vocês estão. ter: eu tenho, tu tens, ele tem, nós temos, vocês têm. Grábate ter, porque el portugués lo usa donde el español usa tener: tenho fome (tengo hambre), tenho frio (tengo frío), tenho vinte anos (tengo veinte años), tenho pressa (tengo prisa).",
      "La frontera ser/estar funciona como en tu lengua: ser para identidad y características (sou espanhol, a casa é grande), estar para estados y ubicación (estou cansado, o café está quente, o João está em casa). Y para «hay», el portugués usa haver: há um problema, há muitos turistas no Chiado.",
    ],
    examples: [
      { it: "Eu sou de Madrid.", es: "Yo soy de Madrid." },
      { it: "O Pedro está cansado.", es: "Pedro está cansado." },
      { it: "Nós temos duas casas.", es: "Nosotros tenemos dos casas." },
      { it: "Tenho muito frio!", es: "¡Tengo mucho frío!" },
      { it: "Há um problema com a reserva.", es: "Hay un problema con la reserva." },
    ],
    problems: [
      {
        title: "ser o estar",
        question: "Completa: “A sopa ___ fria.” (la sopa está fría)",
        steps: [
          "La temperatura de ahora es un estado momentáneo.",
          "Los estados llevan estar.",
          "Tercera persona del singular: está.",
          "Si fuera una característica fija diríamos a sopa é leve.",
        ],
        conclusion: "A sopa está fria.",
      },
      {
        title: "tener a la portuguesa",
        question: "Completa: “___ fome.” (tengo hambre)",
        steps: [
          "El español usa tener en estas expresiones.",
          "El portugués también, pero con ter: ter fome.",
          "Primera persona del singular: tenho.",
          "Nunca «sou fome» ni «estou fome».",
        ],
        conclusion: "Tenho fome.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "ser · estar · ter · haver (presente)",
        headers: ["Pessoa", "ser", "estar", "ter"],
        rows: [
          ["eu", "sou", "estou", "tenho"],
          ["tu", "és", "estás", "tens"],
          ["ele/ela", "é", "está", "tem"],
          ["nós", "somos", "estamos", "temos"],
          ["vocês", "são", "estão", "têm"],
        ],
        note: "haver impersonal: há = hay (Há um problema). ter cubre las expresiones que en italiano usan avere.",
      },
    ],
  },
  {
    id: "pt-g-a1-adjetivos", level: "A1", title: "Adjetivos y concordancia", titleIt: "Adjetivos e concordância",
    summary: "Cuatro formas (alto/alta/altos/altas) o dos (grande/grandes); comparativos irregulares gemelos.",
    explanation: [
      "El adjetivo portugués concuerda en género y número con el sustantivo: um rapaz alto, uma rapariga alta, uns livros caros, umas casas caras. Los acabados en -e o en consonante tienen solo dos formas: um livro grande, uma casa grande, livros grandes, casas grandes.",
      "Rasgos a observar: los adjetivos de nacionalidad van en minúscula (é português, é espanhol); muito funciona como intensificador delante de adjetivo (muito bom = muy bueno); y los comparativos de primer nivel son irregulares como en español: maior (mayor), menor (menor), melhor (mejor), pior (peor).",
    ],
    examples: [
      { it: "uma camisa branca", es: "una camisa blanca" },
      { it: "os sapatos novos", es: "los zapatos nuevos" },
      { it: "O comboio é rápido.", es: "El tren es rápido." },
      { it: "A Maria é muito simpática.", es: "María es muy simpática." },
      { it: "Este hotel é melhor.", es: "Este hotel es mejor." },
    ],
    problems: [
      {
        title: "Concordar el adjetivo",
        question: "Completa: “as casas ___ (branco)”",
        steps: [
          "casas es femenino plural.",
          "blanco → femenino branca (cambia la vocal de la raíz).",
          "Plural: brancas.",
          "El artículo as ya anticipa el femenino plural.",
        ],
        conclusion: "as casas brancas (las casas blancas)",
      },
      {
        title: "Mejor o más bueno",
        question: "¿Cómo se dice «mejor» en portugués?",
        steps: [
          "bueno = bom.",
          "El comparativo no es «mais bom».",
          "Es irregular: melhor, como el español mejor.",
          "Plural melhores; el contrario es pior (peor).",
        ],
        conclusion: "melhor (mejor) · pior (peor)",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "pt-g-a1-perguntas-negacao", level: "A1", title: "Preguntas y negación", titleIt: "Perguntas e negação",
    summary: "Entonación sin inversión, interrogativos con acento y la doble negación correcta y normal.",
    explanation: [
      "Para preguntar basta la entonación ascendente, sin invertir nada: Tens tempo? Estás em casa? Las palabras interrogativas: quem (quién), o que (qué), onde (dónde), quando (cuándo), como (cómo), quanto (cuánto), qual (cuál). Muy portugués: el refuerzo é que — O que é que queres? (¿qué es lo que quieres?).",
      "La negación é não delante del verbo, como en español: Não tenho tempo. Y el portugués ama la doble negación exactamente igual: Não vi nada, Nunca digo nada, Não conheço ninguém. No las evites: son correctas y normales.",
    ],
    examples: [
      { it: "Onde moras?", es: "¿Dónde vives?" },
      { it: "Quem é essa rapariga?", es: "¿Quién es esa chica?" },
      { it: "Quanto custa o bilhete?", es: "¿Cuánto cuesta el billete?" },
      { it: "Não entendo nada.", es: "No entiendo nada." },
      { it: "O que é que estudas?", es: "¿Qué es lo que estudias?" },
    ],
    problems: [
      {
        title: "Construir la pregunta",
        question: "¿Cómo preguntas «¿Qué quieres beber?» en registro informal?",
        steps: [
          "querer con tu: queres.",
          "Qué cosa = o que.",
          "Orden natural: O que queres beber?",
          "Con el refuerzo típico: O que é que queres beber?",
        ],
        conclusion: "O que queres beber? / O que é que queres beber?",
      },
      {
        title: "La doble negación",
        question: "Traduce: «No vi a nadie.»",
        steps: [
          "no = não, delante del verbo.",
          "a nadie = ninguém.",
          "El portugués acepta (y prefiere) la doble negación.",
          "Não + vi + ninguém.",
        ],
        conclusion: "Não vi ninguém.",
      },
    ],
    exerciseIds: [],
  },

  /* ══════════ A2 ══════════ */
  {
    id: "pt-g-a2-contracoes", level: "A2", title: "Contracciones de preposición + artículo", titleIt: "As contrações preposição + artigo",
    summary: "ao, à, do, da, no, na, pelo, pela: la contracción es obligatoria, también con nombres propios.",
    explanation: [
      "El portugués contrae preposición + artículo SIEMPRE (no es opcional como en italiano): a + o = ao, a + a = à (con acento grave), de + o/a = do/da, em + o/a = no/na, por + o/a = pelo/pela. En plural: aos/às, dos/das, nos/nas, pelos/pelas.",
      "Dos avisos útiles: el acento de à es puramente ortográfico (se pronuncia igual que a); y la contracción ocurre también con nombres propios y de lugar (Vou ao Porto, Sou de Coimbra, Estou na Baixa), algo impensable en español («voy el Oporto» nunca). Con verbos de movimiento, para + contracción es también habitual: vou para o Algarve.",
    ],
    examples: [
      { it: "Vou ao mercado.", es: "Voy al mercado." },
      { it: "Sou da Galiza.", es: "Soy de Galicia." },
      { it: "Estou no comboio.", es: "Estoy en el tren." },
      { it: "Vamos à praia.", es: "Vamos a la playa." },
      { it: "Falámos com o pai da Maria.", es: "Hablamos con el padre de María." },
    ],
    problems: [
      {
        title: "Formar la contracción",
        question: "Completa: “O livro é ___ professora.” (de + a)",
        steps: [
          "de + a = da.",
          "professora es femenino singular.",
          "Resultado: da professora.",
          "El acento grave solo aparece en à (a + a).",
        ],
        conclusion: "O livro é da professora. (El libro es de la profesora.)",
      },
      {
        title: "Elegir entre à e ao",
        question: "Completa: “Vou ___ praia de Carcavelos.” (a + a)",
        steps: [
          "Verbo de movimiento: ir a.",
          "a praia lleva artículo femenino: a + a.",
          "La contracción es à, con acento grave.",
          "Si el destino fuera masculino: Vou ao Rossio.",
        ],
        conclusion: "Vou à praia de Carcavelos.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Contrações preposição + artigo",
        headers: ["Preposição", "+ o / a", "+ os / as"],
        rows: [
          ["a", "ao / à", "aos / às"],
          ["de", "do / da", "dos / das"],
          ["em", "no / na", "nos / nas"],
          ["por", "pelo / pela", "pelos / pelas"],
        ],
        note: "La contracción es obligatoria: em + o mercado = no mercado, nunca «em o mercado».",
      },
    ],
  },
  {
    id: "pt-g-a2-perfeito", level: "A2", title: "El pretérito perfeito simple", titleIt: "O pretérito perfeito simples",
    summary: "El pasado de hechos puntuales: falei, comi, parti… y los irregulares fue/fiz/disse.",
    explanation: [
      "Es el pasado de los hechos terminados (ontem, na semana passada): eu falei, tu falaste, ele falou, nós falamos, vocês falaram. Los verbos en -er e -ir hacen la primera persona en -i: comi, parti. Matiz europeo: el presente se escribe nós falámos (con acento y vocal abierta) y el perfeito nós falamos (sin acento y vocal cerrada): la diferencia se oye, no solo se ve.",
      "Los irregulares esenciales: ser/ir → fui, foste, foi, fomos, foram; ter → tive; fazer → fiz; dizer → disse; dar → dei; ver → vi; vir → veio; poder → pude; saber → soube; pôr → pôs; trazer → trouxe; querer → quis. Muchos coinciden con el español (fui, di, vi), otros sorprenden (fiz, disse, veio).",
    ],
    examples: [
      { it: "Ontem falei com o João.", es: "Ayer hablé con João." },
      { it: "Comi uma bifana no Rossio.", es: "Comí una bifana (bocadillo de cerdo) en el Rossio." },
      { it: "Fomos ao concerto de fado.", es: "Fuimos al concierto de fado." },
      { it: "Ela fez o jantar ontem.", es: "Ella hizo la cena ayer." },
      { it: "Trouxe um pastel de nata para ti.", es: "Trajo un pastel de nata para ti." },
    ],
    problems: [
      {
        title: "Conjugar el pasado",
        question: "Completa: “No sábado ___ (jogar) futebol.” (eu)",
        steps: [
          "jogar → conjugación -ar, pretérito perfeito.",
          "Primera persona: raíz jog- + -uei (cambio ortográfico con gu).",
          "Ojo: joguei, nunca «jogei».",
          "No sábado joguei futebol.",
        ],
        conclusion: "No sábado joguei futebol. (El sábado jugué al fútbol.)",
      },
      {
        title: "El irregular de fazer",
        question: "Completa: “Ele ___ (fazer) os bilhetes ontem.”",
        steps: [
          "fazer es irregular en el perfeito.",
          "Tercera persona: fez.",
          "La misma raíz sirve para fizeste, fizemos, fizeram.",
          "Ele fez os bilhetes ontem.",
        ],
        conclusion: "Ele fez os bilhetes ontem. (Él hizo los billetes ayer.)",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Pretérito perfeito simples",
        headers: ["Pessoa", "falar", "comer", "partir"],
        rows: [
          ["eu", "falei", "comi", "parti"],
          ["tu", "falaste", "comeste", "partiste"],
          ["ele/ela", "falou", "comeu", "partiu"],
          ["nós", "falamos", "comemos", "partimos"],
          ["vocês", "falaram", "comeram", "partiram"],
        ],
        note: "Contraste europeo: presente nós falámos (vocal abierta) frente a perfeito nós falamos (vocal cerrada).",
      },
    ],
  },
  {
    id: "pt-g-a2-imperfeito", level: "A2", title: "El pretérito imperfeito", titleIt: "O pretérito imperfeito",
    summary: "El pasado que pinta el fondo: descripciones, hábitos y solo cinco irregulares.",
    explanation: [
      "El imperfeito describe escenas, costumbres y acciones en desarrollo. Se forma con raíz + -ava (-ar) o + -ia (-er/-ir): falava, comia, partia; nós falávamos, comíamos, partíamos. La tilde cae siempre en el grupo -va-/-ía-.",
      "Solo cinco verbos se salen de la norma: ser → era, estar → estava, ter → tinha, vir → vinha, pôr → punha (fazer → fazia y trazer → trazia son regulares a su manera). Era, estava e tinha son omnipresentes: Quando era criança, estava em casa e tinha muito tempo.",
    ],
    examples: [
      { it: "Quando era criança, jogava na rua.", es: "Cuando era niño, jugaba en la calle." },
      { it: "Estava a chover.", es: "Estaba lloviendo." },
      { it: "Antigamente íamos ao cinema ao domingo.", es: "Antes íbamos al cine los domingos." },
      { it: "Ele tinha uma casa em Sintra.", es: "Él tenía una casa en Sintra." },
    ],
    problems: [
      {
        title: "Describir el pasado",
        question: "Completa: “O tempo ___ (ser) bom naquele dia.”",
        steps: [
          "Es una descripción en el pasado → imperfeito.",
          "ser → era (irregular).",
          "O tempo era bom.",
          "Con el perfeito (foi) sonaría a hecho puntual y cerrado.",
        ],
        conclusion: "O tempo era bom. (El tiempo estaba bueno.)",
      },
      {
        title: "Hábito o hecho",
        question: "¿Cuál suena a costumbre: “lia todos os dias” o “li todos os dias”?",
        steps: [
          "lia es imperfeito de ler.",
          "todos os dias indica repetición → imperfeito.",
          "li es perfeito: un hecho concreto de una vez.",
          "La costumbre es lia todos os dias.",
        ],
        conclusion: "lia todos os dias (leía todos los días)",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "pt-g-a2-futuro", level: "A2", title: "El futuro simple", titleIt: "O futuro simples",
    summary: "Infinitivo + -ei, -ás, -á, -emos, -ão; cinco verbos acortan la raíz (farei, direi…).",
    explanation: [
      "El futuro se forma sobre el infinitivo completo: falar → falarei, falarás, falará, falaremos, falarão. Igual con -er e -ir: comerei, partirei. Reconocerás la tercera persona en -á y el plural en -ão.",
      "Cinco verbos acortan la raíz: fazer → farei, dizer → direi, trazer → trarei, pôr → porei, ver → verei. En la lengua hablada, el futuro próximo con ir + infinitivo gana casi siempre, como en español: amanhã vou telefonar (mañana llamaré / voy a llamar).",
    ],
    examples: [
      { it: "Um dia comprarei uma casa no Algarve.", es: "Un día compraré una casa en el Algarve." },
      { it: "Eles virão ao jantar.", es: "Ellos vendrán a cenar." },
      { it: "Farei o possível.", es: "Haré lo posible." },
      { it: "Vou reservar uma mesa para as oito.", es: "Voy a reservar una mesa para las ocho." },
    ],
    problems: [
      {
        title: "Futuro con raíz corta",
        question: "Completa: “Não te ___ (dizer) nada.” (eu)",
        steps: [
          "dizer acorta la raíz: dir-.",
          "Futuro primera persona: direi.",
          "No te direi nada.",
          "Ojo: nunca «dizerei».",
        ],
        conclusion: "Não te direi nada.",
      },
      {
        title: "Futuro simple o próximo",
        question: "Traduce: «Mañana llamaremos a la Maria.»",
        steps: [
          "Futuro simple: telefonaremos (ir es regular: irei, irás…).",
          "Futuro próximo, más hablado: vamos + infinitivo.",
          "Amanhã vamos telefonar à Maria.",
          "Ambas son correctas; la segunda suena más natural en Portugal.",
        ],
        conclusion: "Amanhã telefonaremos à Maria. / Amanhã vamos telefonar à Maria.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "pt-g-a2-estar-a", level: "A2", title: "Estar a + infinitivo: el presente continuo de Portugal", titleIt: "A construção estar a + infinitivo",
    summary: "Estou a estudar: la construcción continua que identifica al portugués europeo.",
    explanation: [
      "El portugués de Portugal construye el presente continuo con estar a + infinitivo: Estou a estudar português, O João está a dormir, O que estás a fazer? También en pasado: Estava a jantar quando telefonaste. Es la marca sonora del portugués europeo: si la usas, suenas de Portugal.",
      "Contraste con tu español: donde dices «estoy estudiando», el europeo dice estou a estudar. La construcción se extiende a otros verbos: continuar a (continuo a gostar), começar a (começo a entender), acabar de (acabo de chegar = acabo de llegar). Y para el futuro próximo basta ir + infinitivo: vou sair agora.",
    ],
    examples: [
      { it: "Estou a aprender português.", es: "Estoy aprendiendo portugués." },
      { it: "Eles estão a jantar.", es: "Ellos están cenando." },
      { it: "Estava a chover quando saí.", es: "Estaba lloviendo cuando salí." },
      { it: "O que estás a fazer?", es: "¿Qué estás haciendo?" },
    ],
    problems: [
      {
        title: "Construir el continuo",
        question: "Completa: “A Maria ___ ___ ___.” (estar + a + ler)",
        steps: [
          "Presente de estar, tercera persona: está.",
          "Preposición a.",
          "El infinitivo ler queda igual.",
          "Está a ler.",
        ],
        conclusion: "A Maria está a ler. (María está leyendo.)",
      },
      {
        title: "Preguntar como un portugués",
        question: "¿Cómo preguntas «¿Qué estás haciendo?» en el portugués de Portugal?",
        steps: [
          "estás = segunda persona de estar.",
          "a + infinitivo: a fazer.",
          "Qué cosa = o que delante.",
          "O que estás a fazer?",
        ],
        conclusion: "O que estás a fazer?",
      },
    ],
    exerciseIds: [],
  },

  /* ══════════ B1 ══════════ */
  {
    id: "pt-g-b1-perfeito-vs-imperfeito", level: "B1", title: "Perfeito vs imperfeito: la gran elección del pasado", titleIt: "Pretérito perfeito vs imperfeito",
    summary: "Hecho cerrado frente a escenario: y ojo, «hoy he comido» se dice Hoje comi.",
    explanation: [
      "El perfeito simple corresponde al indefinido español (comí) Y al perfecto compuesto (he comido): para acciones de hoy, esta mañana o esta semana, el portugués europeo usa casi siempre el simple: Hoje comi peixe (hoy he comido pescado), Esta semana falei com ele (esta semana he hablado con él).",
      "El imperfeito es el escenario: descripciones, costumbres y acciones en curso interrumpidas por un hecho en perfeito: Enquanto jantava, o telefone tocou (mientras cenaba, sonó el teléfono). Pregúntate siempre: ¿cuento un hecho cerrado (perfeito) o pinto un fondo (imperfeito)?",
    ],
    examples: [
      { it: "Estudava em Coimbra quando conheci a Marta.", es: "Estudiaba en Coimbra cuando conocí a Marta." },
      { it: "Ontem estive doente.", es: "Ayer estuve/he estado enfermo." },
      { it: "Sempre almoçava na cantina.", es: "Siempre almorzaba en la cantina." },
      { it: "Choveu toda a noite.", es: "Llovió toda la noche." },
    ],
    problems: [
      {
        title: "Elegir el pasado",
        question: "Completa: “Quando era pequeno, ___ (ir) todos os verões à praia.”",
        steps: [
          "Es un hábito de la infancia → imperfeito.",
          "ir → ia (irregular del imperfeito).",
          "ia todos os verões à praia.",
          "El perfeito fui marcaría un viaje concreto.",
        ],
        conclusion: "ia todos os verões à praia (iba todos los veranos a la playa)",
      },
      {
        title: "El perfecto español no es el compuesto portugués",
        question: "Traduce: «Hoy he comprado pan.»",
        steps: [
          "Acción de hoy, terminada.",
          "El europeo usa el perfeito simple, no tenho comprado.",
          "comprar → eu comprei.",
          "Hoje comprei pão.",
        ],
        conclusion: "Hoje comprei pão.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "pt-g-b1-colocacao", level: "B1", title: "La colocación de los pronombres: próclise y ênclise", titleIt: "A colocação pronominal: próclise e ênclise",
    summary: "En Portugal el pronombre va DESPUÉS del verbo (dou-te), salvo tras negación y subordinantes.",
    explanation: [
      "Los pronombres átonos (me, te, se, o/a/os/as, lhe) se colocan al revés que en español: en Portugal la posición neutra es DESPUÉS del verbo (ênclise): Dou-te o livro (te doy), Vemo-nos às seis (nos vemos). Al principio de frase o tras pausa, la ênclise es la norma europea.",
      "La próclise (delante) es obligatoria con palabras negativas, interrogativas, relativos y subordinantes: Não te vejo, Quem te disse?, Quando te vir, aviso. Con infinitivo el pronombre se pega al final: vou dar-te o livro. Regla de oro: donde el español pone el pronombre delante, el portugués europeo suele ponerlo detrás.",
    ],
    examples: [
      { it: "Dou-te a chave.", es: "Te doy la llave." },
      { it: "Não te esqueças!", es: "¡No te olvides!" },
      { it: "Dá-me isso, por favor.", es: "Dame eso, por favor." },
      { it: "Quando a vir, digo-lhe.", es: "Cuando la vea, le digo." },
      { it: "Vemo-nos às seis.", es: "Nos vemos a las seis." },
    ],
    problems: [
      {
        title: "Posición del pronombre",
        question: "Elige la forma de Portugal: «Vou dar-te o livro» o «Vou te dar o livro».",
        steps: [
          "Tenemos vou + infinitivo dar.",
          "Con infinitivo, el pronombre se pega al final: dar-te.",
          "Vou dar-te o livro.",
          "La otra orden pertenece a otras variantes del portugués.",
        ],
        conclusion: "Vou dar-te o livro. (Voy a darte el libro.)",
      },
      {
        title: "Próclise obligatoria",
        question: "Corrige si hace falta: “Não vejo-te.”",
        steps: [
          "Não es palabra negativa.",
          "Con negación, el pronombre va delante: próclise.",
          "Não te vejo.",
          "La ênclise tras não suena marcada en Portugal.",
        ],
        conclusion: "Não te vejo.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "pt-g-b1-conjuntivo-presente", level: "B1", title: "El presente de conjuntivo", titleIt: "O presente do conjuntivo",
    summary: "Se forma desde la 1ª persona del presente: falo → que eu fale; irregulares seja, tenha, faça.",
    explanation: [
      "El conjuntivo portugués (tu subjuntivo) se forma desde la primera persona del presente de indicativo: falo → que eu fale, fales, fale, falemos, falem; como → coma; parto → parta. Irregulares esenciales: ser → seja, estar → esteja, ter → tenha, ir → vá, fazer → faça, dar → dê, saber → saiba, haver → haja.",
      "Se usa como el subjuntivo español tras querer que, esperar que, embora, talvez, ainda que, é importante que e dúvida: Talvez venha amanhã, Quero que venhas, Espero que gostes do bolo. La correspondencia con tu lengua es casi pieza a pieza: apréciala mientras dure.",
    ],
    examples: [
      { it: "Quero que saibas a verdade.", es: "Quiero que sepas la verdad." },
      { it: "Talvez ele tenha razão.", es: "Tal vez él tenga razón." },
      { it: "Embora seja caro, vale a pena.", es: "Aunque sea caro, vale la pena." },
      { it: "Espero que gostes do bolo.", es: "Espero que te guste el pastel." },
    ],
    problems: [
      {
        title: "Formar el conjuntivo",
        question: "Completa: “É importante que tu ___ (falar) devagar.”",
        steps: [
          "Primera persona del presente: falo.",
          "Cambio la -o por -e: fale.",
          "Segunda persona: fales.",
          "É importante que fales devagar.",
        ],
        conclusion: "É importante que fales devagar. (Es importante que hables despacio.)",
      },
      {
        title: "El conjuntivo de ter",
        question: "Completa: “Talvez ele não ___ (ter) tempo.”",
        steps: [
          "ter → tenho.",
          "Raíz del conjuntivo: tenh-.",
          "Tercera persona: tenha.",
          "Talvez ele não tenha tempo.",
        ],
        conclusion: "Talvez ele não tenha tempo.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Presente do conjuntivo: fale · coma · parta",
        headers: ["Pessoa", "falar", "comer", "partir"],
        rows: [
          ["que eu", "fale", "coma", "parta"],
          ["que tu", "fales", "comas", "partas"],
          ["que ele/ela", "fale", "coma", "parta"],
          ["que nós", "falemos", "comamos", "partamos"],
          ["que vocês", "falem", "comam", "partam"],
        ],
        note: "La receta es única: 1ª persona del presente sin -o, más -e (verbos en -ar) o -a (-er/-ir).",
      },
    ],
  },
  {
    id: "pt-g-b1-condicional", level: "B1", title: "El condicional", titleIt: "O condicional (futuro do pretérito)",
    summary: "Infinitivo + -ía (falaria); las mismas raíces cortas del futuro; cortesía con gostaria.",
    explanation: [
      "El condicional —también llamado futuro do pretérito— se forma con infinitivo + -ía: falaria, comeria, partiria. Las raíces cortas son las mismas del futuro: faria, diria, traria, poria. Es el rey de la cortesía: Gostaria de um café (me gustaría un café), Poderia repetir? (¿podría repetir?).",
      "En las condicionales hipotéticas aparece con se + imperfeito do conjuntivo: Se tivesse tempo, viajaria. Y un matiz coloquial delicioso: el portugués hablado cambia a veces el condicional por el imperfeito: Se tivesse dinheiro, comprava uma casa (comprava en lugar de compraria).",
    ],
    examples: [
      { it: "Gostaria de reservar uma mesa.", es: "Querría reservar una mesa." },
      { it: "Se tivesse dinheiro, compraria uma casa no Douro.", es: "Si tuviera dinero, compraría una casa en el Duero." },
      { it: "Poderia dizer-me as horas?", es: "¿Podría decirme la hora?" },
      { it: "Eu seria mais paciente.", es: "Yo sería más paciente." },
    ],
    problems: [
      {
        title: "Cortesía al pedir",
        question: "Pide un café con cortesía.",
        steps: [
          "gostar en condicional: gostaria.",
          "gostar de + nombre o infinitivo.",
          "Gostaria de um café, se faz favor.",
          "Coloquial: Podia trazer-me um café?",
        ],
        conclusion: "Gostaria de um café, se faz favor.",
      },
      {
        title: "La raíz corta de fazer",
        question: "Completa: “Se pudesse, ___ (fazer) a viagem.”",
        steps: [
          "fazer → far- (raíz corta).",
          "Condicional: faria.",
          "Se pudesse, faria a viagem.",
          "Nunca «fazeria».",
        ],
        conclusion: "Se pudesse, faria a viagem.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "pt-g-b1-perfeito-composto", level: "B1", title: "El pretérito perfeito compuesto: tenho estudado", titleIt: "O pretérito perfeito composto",
    summary: "ter + participio expresa acciones repetidas hasta hoy; el perfecto puntual español es simple.",
    explanation: [
      "El perfeito composto (ter + participio: tenho falado) NO equivale al perfecto compuesto español. Expresa acciones repetidas o continuadas que llegan hasta el presente: Tenho estudado muito este mês (este mes he estudiado mucho, una y otra vez), Temos jantado tarde (últimamente hemos cenado tarde).",
      "Para hechos concretos de hoy o de un momento cerrado, el europeo prefiere el simple: Hoje falei com ele (hoy he hablado con él). Participios regulares -ado/-ido; irregulares de alta frecuencia: feito (hecho), dito (dicho), visto, posto (puesto), aberto, escrito, morto, pago, ganho.",
    ],
    examples: [
      { it: "Tenho trabalhado muito ultimamente.", es: "Últimamente he trabajado mucho (seguido)." },
      { it: "Temos jantado tarde.", es: "Hemos cenado tarde (por estos días)." },
      { it: "Hoje almocei no Chiado.", es: "Hoy he almorzado en el Chiado." },
      { it: "Tens feito progressos.", es: "Has hecho progresos." },
    ],
    problems: [
      {
        title: "Simple o compuesto",
        question: "Completa: “Este ano ___ (ler) muitos livros.” (acción repetida)",
        steps: [
          "Repetición a lo largo del año → compuesto.",
          "ter + participio: tenho lido.",
          "Este ano tenho lido muitos livros.",
          "Si fuera un libro concreto de hoy: Hoje li um livro.",
        ],
        conclusion: "Este ano tenho lido muitos livros.",
      },
      {
        title: "El participio irregular",
        question: "Completa: “O que tens ___ (fazer)?”",
        steps: [
          "fazer → participio feito.",
          "Segunda persona de ter: tens.",
          "O que tens feito?",
          "Equivale a «¿qué has estado haciendo?».",
        ],
        conclusion: "O que tens feito? (¿Qué has estado haciendo?)",
      },
    ],
    exerciseIds: [],
  },

  /* ══════════ B2 ══════════ */
  {
    id: "pt-g-b2-conjuntivo-imperfeito", level: "B2", title: "El imperfeito do conjuntivo", titleIt: "O imperfeito do conjuntivo",
    summary: "Desde la 3ª persona del perfeito: falou → falasse, foi → fosse, teve → tivesse.",
    explanation: [
      "Se forma desde la tercera persona del perfeito simple, cambiando la terminación: falou → que eu falasse, falasses, falasse, falássemos, falassem; foi → fosse; teve → tivesse; fez → fizesse; veio → viesse; disse → dissesse. Si dominas el perfeito, el imperfeito do conjuntivo te sale gratis.",
      "Usos paralelos al español -ra/-se: hipótesis con se (Se eu fosse rico…), deseos (Oxalá estivesses aqui), cortesía en pasado (Gostaria que viesses ao jantar) y tras como se (Ele fala como se soubesse tudo). Además, si el verbo principal está en pasado, el subordinado pasa a conjuntivo imperfeito: Queria que fosses comigo.",
    ],
    examples: [
      { it: "Se eu fosse tu, não faria isso.", es: "Si yo fuera tú, no haría eso." },
      { it: "Ele falou como se tivesse razão.", es: "Habló como si tuviera razón." },
      { it: "Gostaria que viesses ao jantar.", es: "Me gustaría que vinieras a la cena." },
      { it: "Oxalá não chovesse amanhã.", es: "Ojalá no lloviera mañana." },
    ],
    problems: [
      {
        title: "Formar el imperfeito do conjuntivo",
        question: "Completa: “Se ela ___ (ter) tempo, viria.”",
        steps: [
          "Tercera persona del perfeito de ter: teve.",
          "Cambio la terminación: teve → tivesse.",
          "Se ela tivesse tempo, viria.",
          "Primera y tercera persona comparten la forma: tivesse.",
        ],
        conclusion: "Se ela tivesse tempo, viria.",
      },
      {
        title: "Como si",
        question: "Traduce: «Habla como si lo supiera todo.»",
        steps: [
          "como si = como se.",
          "El verbo tras como se va en conjuntivo.",
          "saber → soube → soubesse.",
          "Ele fala como se soubesse tudo.",
        ],
        conclusion: "Ele fala como se soubesse tudo.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "pt-g-b2-infinitivo-pessoal", level: "B2", title: "El infinitivo personal", titleIt: "O infinitivo pessoal",
    summary: "Un infinitivo que se conjuga: falares, falarmos, falarem; único entre las lenguas romances.",
    explanation: [
      "El portugués tiene un infinitivo flexionado por personas —algo que ni el español ni las demás lenguas romances conservan—: falar → eu falar, tu falares, ele falar, nós falarmos, vocês falarem. Se usa cuando el infinitivo tiene sujeto propio, distinto del verbo principal: Antes de saíres, fecha a porta (antes de que TÚ salgas).",
      "Contextos típicos: tras preposición con sujeto diferente (Apesar de estarem cansados, continuaram), con verbo + objeto (Vi-os chegarem, los vi llegar) y con é + adjetivo (É importante chegarmos cedo). Cuando el sujeto es el mismo, el infinitivo queda impersonal: Antes de sair, apaguei a luz (antes de salir, apagué la luz).",
    ],
    examples: [
      { it: "Antes de saíres, apaga a luz.", es: "Antes de salir (tú), apaga la luz." },
      { it: "Apesar de estarem cansados, continuaram.", es: "A pesar de estar cansados, continuaron." },
      { it: "Vi-os chegarem à estação.", es: "Los vi llegar a la estación." },
      { it: "É melhor ires tu.", es: "Es mejor que vayas tú." },
    ],
    problems: [
      {
        title: "Elegir la persona del infinitivo",
        question: "Completa: “É importante ___ (nós: chegar) cedo.”",
        steps: [
          "Sujeto del infinitivo: nós.",
          "Infinitivo pessoal de nós: chegarmos.",
          "É importante chegarmos cedo.",
          "El español lo expresa con subjuntivo: «es importante que lleguemos temprano».",
        ],
        conclusion: "É importante chegarmos cedo.",
      },
      {
        title: "Personal o impersonal",
        question: "¿Cuál es correcta para ti (sujeto tu): “depois de jantar” o “depois de jantares”?",
        steps: [
          "Si comes tú y el pronóstico es de ti: infinitivo pessoal de tu.",
          "jantar → jantares (2ª persona).",
          "Depois de jantares, telefonaste? — melhor: Depois de jantares, saíste.",
          "Con eu o ele, la forma no cambia: depois de jantar (eu/ele).",
        ],
        conclusion: "depois de jantares (tú) · depois de jantar (yo/él)",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "O infinitivo pessoal de falar",
        headers: ["Pessoa", "Infinitivo"],
        rows: [
          ["eu", "falar"],
          ["tu", "falares"],
          ["ele/ela", "falar"],
          ["nós", "falarmos"],
          ["vocês", "falarem"],
        ],
        note: "eu y ele/ela comparten la forma sin desinencia: el contexto aclara la persona.",
      },
    ],
  },
  {
    id: "pt-g-b2-voz-passiva", level: "B2", title: "La voz pasiva y la pasiva con se", titleIt: "A voz passiva e a passiva com se",
    summary: "ser + participio para la acción; a passiva com se (vendeu-se a casa) manda en el día a día.",
    explanation: [
      "La pasiva de acción usa ser + participio, como en español: Os Lusíadas foram escritos por Camões. El participio concuerda con el sujeto. Para estados resultantes se usa estar: A porta está fechada (la puerta está cerrada), O bilhete já foi comprado (ya fue/comprado el billete).",
      "La gran alternativa portuguesa es la passiva com se: Vendeu-se a casa (se vendió la casa), Alugam-se quartos (se alquilan habitaciones). Regla fina: el verbo concuerda con el sujeto paciente — Vendeu-se o carro pero Venderam-se os carros. En la lengua de cada día esta construcción gana a la pasiva con ser.",
    ],
    examples: [
      { it: "O livro foi traduzido em espanhol.", es: "El libro fue traducido al español." },
      { it: "Vendeu-se o carro.", es: "Se vendió el coche." },
      { it: "Alugam-se apartamentos no centro.", es: "Se alquilan pisos en el centro." },
      { it: "A conta já foi paga.", es: "La cuenta ya está pagada." },
    ],
    problems: [
      {
        title: "Concordancia en la pasiva com se",
        question: "Completa: “___-se casas na praia.” (alugar)",
        steps: [
          "Sujeto paciente: casas (plural).",
          "El verbo concuerda con el sujeto: alugam.",
          "Alugam-se casas na praia.",
          "Con un solo objeto: Aluga-se uma casa.",
        ],
        conclusion: "Alugam-se casas na praia.",
      },
      {
        title: "ser o estar",
        question: "Para decir que la acción de abrir ocurrió: ¿“A janela foi aberta” o “A janela estava aberta”?",
        steps: [
          "fue abierta = acción → ser + participio.",
          "estaba abierta = estado resultante → estar + participio.",
          "La acción es A janela foi aberta.",
          "El estado que sigue: A janela está aberta.",
        ],
        conclusion: "A janela foi aberta (acción).",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "pt-g-b2-condicionais", level: "B2", title: "Las oraciones condicionales", titleIt: "As orações condicionais",
    summary: "Real (se + presente), hipotética (se + conjuntivo imperfeito + condicional) e irreal del pasado.",
    explanation: [
      "Tres niveles: real — se + presente → futuro (Se chove, fico em casa); hipotética — se + imperfeito do conjuntivo → condicional (Se tivesse tempo, viajaria); irreal del pasado — se + conjuntivo composto → condicional composto (Se tivesse estudado, teria passado).",
      "La peculiaridad portuguesa: cuando la condicional mira a una ocasión futura concreta, el portugués usa el futuro do conjuntivo: Se eu for a Lisboa, visito-te (si voy a Lisboa, te visito); Quando tiver tempo, telefono-te (cuando tenga tiempo, te llamo). El español usa presente de subjuntivo; el portugués tiene un tiempo propio que dominarás en C1.",
    ],
    examples: [
      { it: "Se chove, fico em casa.", es: "Si llue, me quedo en casa." },
      { it: "Se tivesse dinheiro, compraria um telemóvel novo.", es: "Si tuviera dinero, compraría un móvil nuevo." },
      { it: "Se tivesses chegado mais cedo, terias visto o fado.", es: "Si hubieras llegado más pronto, habrías visto el fado." },
      { it: "Se eu for ao Porto, levo o vinho.", es: "Si voy a Oporto, llevo el vino." },
    ],
    problems: [
      {
        title: "Condicional real",
        question: "Completa: “Se ___ (ter) tempo amanhã, dou um passeio.” (eu)",
        steps: [
          "Condicional abierta con valor futuro.",
          "Con presente: Se tenho tempo amanhã…",
          "Todavía más portugués, con futuro do conjuntivo: Se tiver tempo…",
          "Ambas miran al mañana; la segunda marca la ocasión concreta.",
        ],
        conclusion: "Se tenho / Se tiver tempo amanhã, dou um passeio.",
      },
      {
        title: "Hipótesis pasada",
        question: "Traduce: «Si hubieras venido, habrías visto a la Maria.»",
        steps: [
          "se + conjuntivo composto: tivesses vindo.",
          "Consecuencia: condicional composto: terias visto.",
          "Se tivesses vindo, terias visto a Maria.",
          "El ter + participio hace el papel del «haber» español.",
        ],
        conclusion: "Se tivesses vindo, terias visto a Maria.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "pt-g-b2-perifrases", level: "B2", title: "Perífrasis verbales: ter de, acabar de, voltar a…", titleIt: "As perífrases verbais",
    summary: "ir a, ter de, estar a, acabar de, voltar a, começar a, andar a, deixar de, passar a.",
    explanation: [
      "El portugués vive de perífrasis: ir a + infinitivo (futuro: vou viajar), ter de / ter que + infinitivo (obligación: tenho de sair), estar a + infinitivo (continuo: estou a escrever), acabar de (acabo de chegar), voltar a (voltei a ligar, volví a llamar), começar a / pôr-se a (comecei a chorar), andar a (ando a procurar casa, ando buscando casa), deixar de (deixei de fumar, dejé de fumar) e passar a (passou a trabalhar em Braga, pasó a trabajar en Braga).",
      "Matiz para hispanohablantes: «volver a + infinitivo» existe tal cual (voltar a + inf) y «acabar de» también; pero cuidado, estar a NO significa «estar a punto de» — para eso existe estar prestes a (estava prestes a sair, estaba a punto de salir). Con estas diez piezas tu portugués da un salto de naturalidad.",
    ],
    examples: [
      { it: "Tenho de falar com o gerente.", es: "Tengo que hablar con el gerente." },
      { it: "Acabámos de jantar.", es: "Acabamos de cenar." },
      { it: "Voltei a ler o Saramago.", es: "Volví a leer a Saramago." },
      { it: "Ando a aprender a cozinhar.", es: "Ando aprendiendo a cocinar." },
      { it: "Deixei de beber café à noite.", es: "Dejé de tomar café por la noche." },
    ],
    problems: [
      {
        title: "Obligación",
        question: "Traduce: «Tengo que comprar los billetes.»",
        steps: [
          "Obligación: ter de / ter que + infinitivo.",
          "tenho de comprar.",
          "Tenho de comprar os bilhetes.",
          "También: Tenho que comprar os bilhetes (igual de correcto).",
        ],
        conclusion: "Tenho de comprar os bilhetes.",
      },
      {
        title: "Acción reciente",
        question: "¿Cómo dices «acabo de llegar»?",
        steps: [
          "acabar de + infinitivo.",
          "chegar queda igual.",
          "Acabo de chegar.",
          "No lo confundas com estou a chegar (estoy llegando, en camino).",
        ],
        conclusion: "Acabo de chegar.",
      },
    ],
    exerciseIds: [],
  },

  /* ══════════ C1 ══════════ */
  {
    id: "pt-g-c1-futuro-conjuntivo", level: "C1", title: "El futuro do conjuntivo", titleIt: "O futuro do conjuntivo",
    summary: "La joya que el español perdió: se eu falar, quando tu vieres, se ele tiver.",
    explanation: [
      "El futuro do conjuntivo es un subjuntivo con valor futuro que las demás lenguas romances perdieron. Se forma sobre el infinitivo: falar → se eu falar, se tu falares, se ele falar, se nós falarmos, se vocês falarem. Irregulares: ser/ir → for, ter → tiver, fazer → fizer, vir → vier, pôr → puser, poder → puder, saber → souber, estar → estiver, haver → houver.",
      "Aparece tras se, quando, assim que, logo que, depois que, enquanto e caso, exactamente donde el español usa presente de subjuntivo: Quando eu for a Lisboa… (cuando vaya a Lisboa), Se tiveres dúvidas, pergunta (si tienes dudas, pregunta). Para acciones habituales se usa el presente: Quando vou a Lisboa, visito o Chiado; el futuro do conjuntivo mira una ocasión futura concreta.",
    ],
    examples: [
      { it: "Quando for ao Porto, bebo um café na Ribeira.", es: "Cuando vaya a Oporto, bebo un café en la Ribeira." },
      { it: "Se tiveres tempo, ajuda-me.", es: "Si tienes tiempo, ayúdame." },
      { it: "Assim que chegarem, avisamos.", es: "En cuanto lleguen, avisamos." },
      { it: "Caso chova, o concerto é dentro.", es: "En caso de que llueva, el concierto es dentro." },
    ],
    problems: [
      {
        title: "Elegir la forma",
        question: "Completa: “Quando ___ (eu: ir) a Coimbra, visito a universidade.”",
        steps: [
          "Acción futura concreta tras quando.",
          "ir → futuro do conjuntivo: for.",
          "Quando for a Coimbra…",
          "El presente (vou) marcaría un hábito.",
        ],
        conclusion: "Quando for a Coimbra, visito a universidade.",
      },
      {
        title: "El irregular de ter",
        question: "Completa: “Se ___ (tu: ter) fome, come qualquer coisa.”",
        steps: [
          "ter → tiver.",
          "Segunda persona: tiveres.",
          "Se tiveres fome, come qualquer coisa.",
          "Ojo con haver: se houver problemas, liga-me.",
        ],
        conclusion: "Se tiveres fome, come qualquer coisa.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "O futuro do conjuntivo",
        headers: ["Pessoa", "falar", "ser/ir", "ter"],
        rows: [
          ["eu", "falar", "for", "tiver"],
          ["tu", "falares", "fores", "tiveres"],
          ["ele/ela", "falar", "for", "tiver"],
          ["nós", "falarmos", "formos", "tivermos"],
          ["vocês", "falarem", "forem", "tiverem"],
        ],
        note: "Se forma sobre el infinitivo; eu y ele/ella comparten la forma corta (falar, for, tiver).",
      },
    ],
  },
  {
    id: "pt-g-c1-conjuntivo-composto", level: "C1", title: "El conjuntivo compuesto", titleIt: "O conjuntivo composto",
    summary: "tenha/tivesse/tiver + participio: anterioridad en subjuntivo, condicionales y temporales perfectas.",
    explanation: [
      "Los tres tiempos compuestos del conjuntivo: presente composto (que eu tenha falado — que yo haya hablado), imperfeito composto (que eu tivesse falado — que yo hubiera hablado) y futuro composto (se eu tiver falado — si yo hubiera hablado [con miras al futuro]). Todos se forman con ter + participio.",
      "Usos: anterioridad respecto al verbo principal (Lamento que não tenhas vindo), condicionales pasadas (Se tivesse sabido, teria dito) y temporales futuras perfectas (Quando tiver acabado, descanso — cuando haya acabado, descanso). El español usa haber + participio; el portugués, ter + participio.",
    ],
    examples: [
      { it: "Lamento que não tenhas gostado.", es: "Lamento que no te haya gustado." },
      { it: "Se tivesses avisado, teríamos esperado.", es: "Si hubieras avisado, habríamos esperado." },
      { it: "Quando tiver terminado, saímos.", es: "Cuando haya terminado, salimos." },
      { it: "Duvido que tenha sido fácil.", es: "Dudo que haya sido fácil." },
    ],
    problems: [
      {
        title: "Anterioridad en el pasado",
        question: "Completa: “Foi uma pena que não ___ (vir) ontem.” (ter + vir)",
        steps: [
          "Pena por algo ya pasado: conjuntivo composto.",
          "Presente composto de ter: tenha.",
          "Participio de vir: vindo.",
          "que não tenha vindo ontem.",
        ],
        conclusion: "Foi uma pena que não tenha vindo ontem.",
      },
      {
        title: "Temporal futura",
        question: "Completa: “Quando ___ (acabar) o trabalho, descansas.” (tu)",
        steps: [
          "Temporal con valor futuro perfecto.",
          "Futuro do conjuntivo composto: tiveres + participio.",
          "acabar → acabado.",
          "Quando tiveres acabado o trabalho, descansas.",
        ],
        conclusion: "Quando tiveres acabado o trabalho, descansas.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "pt-g-c1-regencia", level: "C1", title: "La regência verbal: preposiciones que cambian", titleIt: "A regência verbal",
    summary: "precisar de, gostar de, confiar em, casar com, sonhar com, assistir a: las trampas del avanzado.",
    explanation: [
      "La regência es la gran trampa del hispanohablante avanzado. Verbos que en español van sin preposición y en portugués la exigen: precisar de (preciso de ajuda), gostar de, necessitar de, depender de, confiar em (confio em ti), acreditar em, insistir em, consistir em, morar em (moro em Lisboa), casar com (casei com ela), sonhar com (sonho com férias), desconfiar de, rir-se de, zangar-se com.",
      "Y el caso estrella: assistir a = ser espectador (assisti ao filme no cinema, assisti à aula), NO ayudar — para ayudar se usa ajudar sem preposição (ajudo o meu irmão). Otros com a: obedecer a (obedeço aos pais), pertencer a (a casa pertence ao João), renunciar a. Regla práctica: cuando traduzcas literalmente del español y suene raro, sospecha de la preposición.",
    ],
    examples: [
      { it: "Preciso de falar contigo.", es: "Necesito hablar contigo." },
      { it: "Assisti a um concerto no Coliseu.", es: "Presencié un concierto en el Coliseo." },
      { it: "Ela sonha com as férias.", es: "Ella sueña con las vacaciones." },
      { it: "Casei com uma portuguesa.", es: "Me casé con una portuguesa." },
    ],
    problems: [
      {
        title: "La preposición correcta",
        question: "Completa: “Gosto ___ fado.”",
        steps: [
          "gostar pide de.",
          "Gosto de fado.",
          "Con pronombre demostrativo: gosto disso.",
          "Nunca «gosto o fado».",
        ],
        conclusion: "Gosto de fado.",
      },
      {
        title: "Assistir no es ayudar",
        question: "Traduce: «Vi la película en el cine.»",
        steps: [
          "«ver/presenciar» = assistir a.",
          "a + o filme → ao filme.",
          "Assisti ao filme no cinema.",
          "Si quisieras decir «ayudar»: ajudar sin preposição (ajudo o meu irmão).",
        ],
        conclusion: "Assisti ao filme no cinema.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "pt-g-c1-colocacao-formal", level: "C1", title: "La colocación pronominal en registro formal", titleIt: "A colocação pronominal em registo formal",
    summary: "Ênclise tras pausa, próclise tras subordinantes y mesóclise culta: dir-lhe-ei, far-se-á.",
    explanation: [
      "En el registro formal escrito la colocación se afina: la ênclise domina tras pausa inicial (Respondeu-me com sinceridade), la próclise sigue siendo obligatoria tras negación y subordinantes (Não me respondeu; Quando me respondeu…), y con futuro o condicional el portugués culto puede usar la mesóclise: dir-se-á, far-se-ia, ter-me-iam dito — el pronombre se incrusta dentro del verbo.",
      "En la escritura moderna la mesóclise es rara pero viva en textos jurídicos, administrativos y literarios: Dir-se-ia que…, Far-se-á o possível. Aprende a reconocerla y a producir las formas frecuentes: dir-lhe-ei (le diré), ver-nos-emos (nos veremos), dir-se-ia (se diría).",
    ],
    examples: [
      { it: "Dir-se-ia que está tudo feito.", es: "Se diría que todo está hecho." },
      { it: "Far-se-á o possível.", es: "Se hará lo posible." },
      { it: "Dir-lhe-ei tudo amanhã.", es: "Le diré todo mañana." },
      { it: "Respondendo à sua carta…", es: "Respondiendo a su carta…" },
    ],
    problems: [
      {
        title: "Reconocer la mesóclise",
        question: "¿Qué significa «Ter-se-ia evitado o problema»?",
        steps: [
          "ter-se-ia equivale a teria con el se incrustado.",
          "Significa: o problema se teria evitado.",
          "Equivalencia española: «Se habría evitado el problema».",
          "La mesóclise solo ocurre con futuro y condicional.",
        ],
        conclusion: "Se habría evitado el problema.",
      },
      {
        title: "Reescribir con mesóclise",
        question: "Pasa a registro formal: «Eu te direi tudo.»",
        steps: [
          "te en registro formal culto puede pasar a te o lhe según la variedad; mantenemos te.",
          "Futuro: direi.",
          "Mesóclise: intercalar -te- antes de la desinencia: dir-te-ei.",
          "Forma equivalente moderna: Eu dir-te-ei tudo / Vou dizer-te tudo.",
        ],
        conclusion: "Eu dir-te-ei tudo.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "pt-g-c1-reduzidas", level: "C1", title: "Las oraciones subordinadas reducidas", titleIt: "As orações subordinadas reduzidas",
    summary: "Ao chegar, terminado o jantar, sendo tarde: infinitivo, participio y gerundio sin conjunción.",
    explanation: [
      "Las orações reduzidas condensan subordinadas sin conjunción: de infinitivo (Ao chegar a casa, telefonei — al llegar a casa, llamé), de participio (Terminado o jantar, saímos — terminada la cena, salimos) y de gerúndio (Sendo tarde, fomos embora — siendo tarde, nos fuimos). El portugués europeo prefiere las de infinitivo y las de participio; el gerundio suena a texto escrito.",
      "La reducida de infinitivo puede ser pessoal: Ao chegarmos, o filme já tinha começado (al llegar nosotros, la película ya había empezado). Truco de reescritura elegante: sustituye quando + futuro do conjuntivo por ao + infinitivo: Quando acabares, avisa → Ao acabares, avisa.",
    ],
    examples: [
      { it: "Ao sair de casa, encontrou o vizinho.", es: "Al salir de casa, se encontró al vecino." },
      { it: "Terminado o trabalho, fomos beber um café.", es: "Terminado el trabajo, fuimos a tomar un café." },
      { it: "Sendo sábado, o centro estava cheio.", es: "Siendo sábado, el centro estaba lleno." },
      { it: "Apesar de ter chovido, fomos à praia.", es: "A pesar de haber llovido, fuimos a la playa." },
    ],
    problems: [
      {
        title: "Compactar la subordinada",
        question: "Reescribe con reducida: «Quando acabou o jantar, fomos passear.»",
        steps: [
          "Quando + verbo puede pasar a ao + infinitivo.",
          "acabou o jantar → ao acabar o jantar.",
          "También con participio: Terminado o jantar, fomos passear.",
          "Ambas suenan más elegantes que la original.",
        ],
        conclusion: "Ao acabar o jantar / Terminado o jantar, fomos passear.",
      },
      {
        title: "Infinitivo pessoal en la reducida",
        question: "Completa: “Ao ___ (nós: chegar), o comboio já partira.”",
        steps: [
          "Sujeto nós → infinitivo pessoal: chegarmos.",
          "Ao chegarmos, o comboio já partira.",
          "Sin sujeto distinto: Ao chegar, vi tudo.",
          "El portugués marca la persona incluso dentro de la reducida.",
        ],
        conclusion: "Ao chegarmos, o comboio já partira.",
      },
    ],
    exerciseIds: [],
  },

  /* ══════════ C2 ══════════ */
  {
    id: "pt-g-c2-mesoclise", level: "C2", title: "La mesóclise y el estilo clásico", titleIt: "A mesóclise e o estilo clássico",
    summary: "dir-se-ia, amar-te-ei: el fósil vivo del portugués literario y sus condicionales sin se.",
    explanation: [
      "La mesóclise (dir-lhe-ei, amar-te-ei) es el fósil vivo del portugués literario: el pronombre se incrusta entre la raíz del futuro o del condicional y la desinencia. La encontrarás en Camões, en la prosa formal moderna (Dir-se-ia que…, Far-se-á justiça) y en la lengua jurídica.",
      "El estilo clásico añade otras piezas: o mais-que-perfeito simples (fizera, dissera — equivalente al pluscuamperfecto, hoy literario pero imprescindible para leer narrativa), las condicionales sin se (Tivesse eu tempo, viajaria — hubiera yo tiempo, viajaría) y las desiderativas (Quem me dera ter vinte anos outra vez!).",
    ],
    examples: [
      { it: "Dir-se-ia que o outono chegou.", es: "Se diría que el otoño llegó." },
      { it: "Tivesse eu sabido, teria vindo.", es: "Hubiera yo sabido, habría venido." },
      { it: "Quem me dera ter vinte anos outra vez!", es: "¡Quién me diera veinte años otra vez!" },
      { it: "Amor é fogo que arde sem se ver.", es: "El amor es fuego que arde sin verse. (Camões)" },
    ],
    problems: [
      {
        title: "La condicional sin se",
        question: "¿Qué significa «Tivesse dinheiro, comprava a casa.»?",
        steps: [
          "Se omite la conjunción se: empieza directamente por el conjuntivo.",
          "tivesse = imperfeito do conjuntivo de ter.",
          "comprava = condicional coloquial (imperfeito con valor hipotético).",
          "Significa: si tuviera dinero, compraría la casa.",
        ],
        conclusion: "Si tuviera dinero, compraría la casa.",
      },
      {
        title: "El mais-que-perfeito literario",
        question: "¿Qué tiempo es «fizera»?",
        steps: [
          "Raíz del perfeito: fez → fizer-.",
          "Con la desinencia -a: mais-que-perfeito simples.",
          "Equivale a tinha feito (había hecho).",
          "Es literario y muy frecuente en narrativa clásica.",
        ],
        conclusion: "fizera = había hecho (mais-que-perfeito simples)",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "pt-g-c2-modo-matizes", level: "C2", title: "Matices del modo: indicativo y conjuntivo", titleIt: "Matizes do modo: indicativo e conjuntivo",
    summary: "Penso que é / Não penso que seja; se bem que + indicativo; não é que seja mau, é que…",
    explanation: [
      "En el nivel más alto, elegir indicativo o conjuntivo es una cuestión de matiz. Penso que é verdade (creo que ES verdad: el portugués afirma con indicativo, como el español) frente a Não penso que seja verdade (no creo que SEA verdad: conjuntivo tras negación). Talvez venha suena más hipotético que talvez vem.",
      "Matices finos: embora + conjuntivo (concesión hipotética) frente a se bem que + indicativo (hecho concedido); caso + conjuntivo (en caso de que); que eu saiba (que yo sepa); não é que seja mau, é que não vale a pena (no es que sea malo, es que no vale la pena). Domina estos contrastes y tu portugués gana precisión quirúrgica.",
    ],
    examples: [
      { it: "Não creio que seja assim.", es: "No creo que sea así." },
      { it: "Se bem que tens razão…", es: "Aunque en realidad tienes razón…" },
      { it: "Que eu saiba, sim.", es: "Que yo sepa, sí." },
      { it: "Não é que seja caro, é que não vale a pena.", es: "No es que sea caro, es que no vale la pena." },
    ],
    problems: [
      {
        title: "El modo tras la negación",
        question: "Completa: “Não acho que ___ (valer) a pena.”",
        steps: [
          "acho que + indicativo expresa creencia afirmativa.",
          "Negada, la creencia pasa a conjuntivo.",
          "valer → valha.",
          "Não acho que valha a pena.",
        ],
        conclusion: "Não acho que valha a pena.",
      },
      {
        title: "Concesiva con indicativo",
        question: "Elige el modo: “Se bem que ___ (estar) caro, comprei-o.”",
        steps: [
          "se bem que acepta indicativo: el hecho se concede como real.",
          "está caro es un hecho comprobado.",
          "Se bem que está caro, comprei-o.",
          "Con embora sería conjuntivo: embora esteja caro.",
        ],
        conclusion: "Se bem que está caro, comprei-o.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "pt-g-c2-sintaxe-literaria", level: "C2", title: "Sintaxis literaria: lectura avanzada", titleIt: "A sintaxe literária",
    summary: "Hipérbaton camoniano, clíticos incrustados y el mais-que-perfeito: desmontar a Camões y Pessoa.",
    explanation: [
      "Leer literatura portuguesa en original exige desmontar sintaxis arcaizantes: el hipérbaton de Camões (Amor é fogo que arde sem se ver), la pregunta retórica de Pessoa (Mar salgado, quanto do teu sal são as lágrimas de Portugal!), las estructuras elípticas y el mais-que-perfeito simples (fora, tivera) como señal de época.",
      "Estrategias de análisis: localiza primero el verbo conjugado, luego los clíticos incrustados (dir-se-ia, tinha-se-lhe dito), reconoce el infinitivo (pessoal o no) tras preposición (sem se ver) y no traduzcas palabra a palabra: re-arma la frase en español. La puntuación dialógica de Saramago (comas en lugar de puntos y sin comillas de diálogo) es otro reto típico de la novela portuguesa contemporánea.",
    ],
    examples: [
      { it: "Amor é fogo que arde sem se ver.", es: "El amor es fuego que arde sin ser visto. (Camões)" },
      { it: "Tudo vale a pena se a alma não é pequena.", es: "Todo vale la pena si el alma no es pequeña. (Pessoa)" },
      { it: "Mar salgado, quanto do teu sal são as lágrimas de Portugal!", es: "¡Mar salado, cuánto de tu sal son las lágrimas de Portugal! (Pessoa)" },
      { it: "Se o souberes, dize-lho.", es: "Si llegas a saberlo, díselo." },
    ],
    problems: [
      {
        title: "Desmontar un verso",
        question: "Analiza «sem se ver» en el verso de Camões.",
        steps: [
          "sem = sin (preposición).",
          "se = pronombre reflexivo (a sí).",
          "ver = infinitivo impersonal tras preposición.",
          "Literal: sin verse / sin ser visto.",
        ],
        conclusion: "sem se ver = sin verse (infinitivo tras preposición).",
      },
      {
        title: "Reconstruir la frase",
        question: "¿Cómo re-armas «quanto do teu sal são as lágrimas de Portugal»?",
        steps: [
          "do = de + o (contracción obligatoria).",
          "teu sal = tu sal.",
          "Orden normal: as lágrimas de Portugal são (tanto) do teu sal.",
          "Es una exclamativa elíptica: ¡cuánto de tu sal son…!",
        ],
        conclusion: "«¡Cuánto de tu sal son las lágrimas de Portugal!» (Pessoa)",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "pt-g-c2-portugues-europeu", level: "C2", title: "El portugués europeo: registro y variación", titleIt: "O português europeu: registo e variação",
    summary: "Ênclise neutra, o senhor/a senhora, coloquialismos lisboetas y la escritura administrativa.",
    explanation: [
      "El portugués de Portugal tiene señales de identidad que conviene dominar para sonar auténtico: la ênclise como posición neutra (dou-te, vemo-nos), la construcción estar a + infinitivo, vocês como plural neutro de cortesía, la cortesía con o senhor/a senhora + tercera persona (O senhor deseja?), el consigo de Portugal (Quer vir consigo? = ¿quiere venir con usted?) y las contracciones hasta con nombres propios (no Porto, da Maria).",
      "Los registros: coloquial (fixe = genial, giro = guay, bué = muchísimo, lisboetas puros), neutro de conversación y formal (cartas administrativas: Exmos. Senhores, Acuso a receção…, Com os melhores cumprimentos). El portugués europeo convive con variantes del portugués de otros países; este curso enseña la norma de Portugal: vocales átonas muy cerradas, s finales suaves, ênclise generalizada y vocabulario propio (autocarro, comboio, pequeno-almoço, telemóvel).",
    ],
    examples: [
      { it: "O senhor quer café?", es: "¿El señor quiere café? (cortesía)" },
      { it: "Isto está fixe!", es: "¡Esto está genial! (coloquial)" },
      { it: "Acuso a receção do seu email.", es: "Acuso recibo de su correo. (formal)" },
      { it: "Estou a tentar ligar-lhe desde ontem.", es: "Estoy intentando llamarle desde ayer." },
    ],
    problems: [
      {
        title: "Cortesía europea",
        question: "¿Cómo te diriges formalmente a un cliente en Lisboa?",
        steps: [
          "o senhor / a senhora + tercera persona.",
          "desejar → deseja.",
          "O senhor deseja? / A senhora deseja?",
          "Remate: deseja mais alguma coisa?",
        ],
        conclusion: "O senhor deseja mais alguma coisa?",
      },
      {
        title: "Registro escrito formal",
        question: "Elige la apertura formal de una carta: «Oi pessoal» o «Exmos. Senhores».",
        steps: [
          "Exmos. = Excelentíssimos (abreviatura formal).",
          "Carta formal: Exmos. Senhores, seguido de vírgula.",
          "Oi pessoal es coloquial, solo para amigos.",
          "El cierre: Com os melhores cumprimentos.",
        ],
        conclusion: "Exmos. Senhores, (…) Com os melhores cumprimentos.",
      },
    ],
    exerciseIds: [],
  },
];
