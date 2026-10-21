import type { CbGrammarPack } from "../cb-rules";

/* ═══ PT A1 · Regras + ejemplos (v9.36) — 12 unidades · portugués europeo ══
   `.it` = portugués (lengua de estudio), `.es` = español.                */

export const PT_CB_RULES_A1: Record<string, CbGrammarPack> = {
  "pt-cu-a1-01": {
    tables: [
      {
        title: "O verbo ser + chamar-se (reflexivo)",
        headers: ["Pessoa", "ser", "chamar-se"],
        rows: [
          ["eu", "sou", "chamo-me"],
          ["tu", "és", "chamas-te"],
          ["ele / ela", "é", "chama-se"],
          ["nós", "somos", "chamamo-nos"],
          ["eles / elas", "são", "chamam-se"],
        ],
        note: "Ojo con «ele é portuguesa… não! português»: o adjetivo concorda com o género da pessoa, como em espanhol. E o pronome reflexivo vem grudado: chamo-ME (nunca «me chamo» em PE).",
      },
    ],
    moreExamples: [
      { it: "Ela é espanhola e é professora.", es: "Ella es española y es profesora." },
      { it: "Como te chamas? — Chamo-me Rodrigo.", es: "¿Cómo te llamas? — Me llamo Rodrigo." },
      { it: "Eles são brasileiros, mas moram em Lisboa.", es: "Ellos son brasileños, pero viven en Lisboa." },
    ],
    drills: {
      transform: [
        { q: "Completa: «Tu ___ (ser) a Marta?»", options: ["és", "sou", "são"], answer: 0, explain: "tu → és (2ª pessoa de ser)." },
        { q: "Riscreve com a 3ª pessoa: «Eu chamo-me Sofia.»", options: ["Ela chama-se Sofia.", "Ela chamo-se Sofia.", "Ela se chama Sofia."], answer: 0, explain: "Reflexivo grudo ao verbo em PE: chama-se." },
      ],
      errors: [
        { q: "Corrige: «Ele é portuguesa.» (homem)", options: ["Ele é português.", "Ele é portuguessa.", "Ele está português."], answer: 0, explain: "O adjetivo concorda com o género: português." },
      ],
    },
  },
  "pt-cu-a1-02": {
    tables: [
      {
        title: "ter + possessivos com artigo",
        headers: ["Pessoa", "ter", "Possessivo (m./f.)"],
        rows: [
          ["eu", "tenho", "o meu / a minha"],
          ["tu", "tens", "o teu / a tua"],
          ["ele / ela", "tem", "o seu / a sua"],
          ["nós", "temos", "o nosso / a nossa"],
          ["eles / elas", "têm (com acento!)", "o seu / a sua"],
        ],
        note: "Diferença-chave com o espanhol: em português o possessivo normal LEVA artigo (o meu irmão). «Têm» leva circunflexo na 3ª pessoa do plural; «tem» (singular) nunca.",
      },
    ],
    moreExamples: [
      { it: "O meu irmão tem vinte anos.", es: "Mi hermano tiene veinte años." },
      { it: "A tua irmã tem um gato?", es: "¿Tu hermana tiene un gato?" },
      { it: "Os nossos pais têm uma casa no Algarve.", es: "Nuestros padres tienen una casa en el Algarve." },
    ],
    drills: {
      transform: [
        { q: "Completa: «Eles ___ (ter) uma família grande.»", options: ["têm", "tem", "ténem"], answer: 0, explain: "3ª pessoa do plural de ter = têm (com circunflexo)." },
        { q: "Traduz com possessivo correto: «mi hermana»", options: ["a minha irmã", "meu a irmã", "a irmã minha só"], answer: 0, explain: "Artigo + possessivo: a minha irmã." },
      ],
      errors: [
        { q: "Corrige: «Meu irmão tem dezanove anos.» (padrão PE)", options: ["O meu irmão tem dezanove anos.", "O meu irmão têm dezanove anos.", "Meu o irmão tem dezanove anos."], answer: 0, explain: "Em PE, o possessivo leva artigo: o meu irmão." },
      ],
    },
  },
  "pt-cu-a1-03": {
    tables: [
      {
        title: "Presente regular em -ar + as horas",
        headers: ["Pessoa", "Terminação", "levantar (levantar-se)"],
        rows: [
          ["eu", "-o", "levanto (-me)"],
          ["tu", "-as", "levantas (-te)"],
          ["ele / ela", "-a", "levanta (-se)"],
          ["nós", "-amos", "levantamos (-nos)"],
          ["eles / elas", "-am", "levantam (-se)"],
        ],
        note: "A hora usa «às + número»: às sete, às nove. «Da… às…» para intervalos: trabalho das quinze às dezanove. Ao meio-dia / à meia-noite levam «a», não «às».",
      },
    ],
    moreExamples: [
      { it: "Trabalho num escritório no centro.", es: "Trabajo en una oficina en el centro." },
      { it: "O almoço é ao meio-dia.", es: "El almuerzo es al mediodía." },
      { it: "Eles estudam português às segundas.", es: "Ellos estudian portugués los lunes." },
    ],
    drills: {
      transform: [
        { q: "Completa: «Eu ___ (trabalhar) das nove às cinco.»", options: ["trabalho", "trabalha", "trabalham"], answer: 0, explain: "eu + -ar → -o: trabalho." },
        { q: "Riscreve com «nós»: «Tu começas às nove.»", options: ["Nós começamos às nove.", "Nós começa às nove.", "Nós começamos às nove horas sim."], answer: 0, explain: "nós → -amos." },
      ],
      errors: [
        { q: "Corrige: «As aulas começam em nove horas.»", options: ["As aulas começam às nove.", "As aulas começam em às nove.", "As aulas começam a nove horas da manhã cedo."], answer: 0, explain: "Hora exata = às + número (sem «horas»)." },
      ],
    },
  },
  "pt-cu-a1-04": {
    tables: [
      {
        title: "queria (cortesia) + estar a + infinitivo",
        headers: ["Estrutura", "Uso", "Exemplo"],
        rows: [
          ["queria + substantivo", "pedir com educação", "Queria um galão, por favor."],
          ["estou a + infinitivo", "ação em curso (PE)", "Estou a esperar o café."],
          ["está a + infinitivo", "3ª pessoa em curso", "O pastel está a aquecer."],
          ["estamos a + infinitivo", "nós em curso", "Estamos a comer."],
          ["✗ PE", "«estou esperando» (isso é BR)", "→ estou a esperar"],
        ],
        note: "Dois câmbios com o espanhol: (1) o pretérito imperfeito «queria» é o cortês de pedir («quisiera»); (2) o gerúndio espanhol vira «a + infinitivo» em Portugal: «estou esperando» → estou a esperar.",
      },
    ],
    moreExamples: [
      { it: "Queria dois pastéis de nata, se faz favor.", es: "Quisiera dos pastéis de nata, por favor." },
      { it: "A Maria está a preparar o chá.", es: "María está preparando el té." },
      { it: "Estamos a esperar pelo trem... digo, pelo comboio.", es: "Estamos esperando el tren... digo, el comboio." },
    ],
    drills: {
      transform: [
        { q: "Passa para PE: «Estou esperando o café.»", options: ["Estou a esperar o café.", "Estou esperando ao café.", "Tenho esperado o café agora."], answer: 0, explain: "estar a + infinitivo (gerúndio é BR)." },
        { q: "Pede com cortesia: «Um galão!»", options: ["Queria um galão, por favor.", "Eu quero um galão agora.", "Dá-me um galão!"], answer: 0, explain: "queria = o imperfeito cortês." },
      ],
      errors: [
        { q: "Corrige: «Os clientes estão comendo.» (PE)", options: ["Os clientes estão a comer.", "Os clientes estão a comendo.", "Os clientes têm a comer."], answer: 0, explain: "Em PE: estar a + infinitivo, nunca gerúndio." },
      ],
    },
  },
  "pt-cu-a1-05": {
    tables: [
      {
        title: "há (existir) + objeto direto com artigo",
        headers: ["Estrutura", "Exemplo", "Espanhol"],
        rows: [
          ["há + substantivo", "Há sopa hoje?", "¿Hay sopa hoy?"],
          ["não há + substantivo", "Não há lugar na tasca.", "No hay sitio."],
          ["verbo + o/a + comida", "Quero o bacalhau.", "Quiero el bacalao."],
          ["para mim, …", "Para mim, a sopa.", "Para mí, la sopa."],
          ["há + tempo", "Há duas pessoas à espera.", "Hay dos personas esperando."],
        ],
        note: "O verbo há é invariável (nunca «han»): hay espanhol = há português, em tudo o mais. E na tasca, o prato leva artigo definido: quero O bacalhau — como em espanhol.",
      },
    ],
    moreExamples: [
      { it: "Há mesa para dois?", es: "¿Hay mesa para dos?" },
      { it: "Não há vacancies... digo, não há lugares.", es: "No hay lugares." },
      { it: "Para mim, o polvo à lagareiro.", es: "Para mí, el pulpo à lagareiro." },
    ],
    drills: {
      transform: [
        { q: "Completa: «___ sopa hoje?» (existir)", options: ["Há", "Hão", "Tem há"], answer: 0, explain: "há = hay (invariável)." },
        { q: "Encomenda com artigo: «Quero ___ arroz de marisco.»", options: ["o", "um", "no article needed"], answer: 0, explain: "Na mesa portuguesa, o pedido leva artigo definido: o arroz." },
      ],
      errors: [
        { q: "Corrige: «Não han lugar na tasca.»", options: ["Não há lugar na tasca.", "Não há lugar na tasca há.", "Não tem lugar na tasca não."], answer: 0, explain: "haver → há, sempre singular." },
      ],
    },
  },
  "pt-cu-a1-06": {
    tables: [
      {
        title: "Demonstrativos + ficar (roupa)",
        headers: ["", "Masculino", "Feminino"],
        rows: [
          ["este/a (aqui)", "este casaco", "esta bota"],
          ["estes/as (aqui, plural)", "estes casacos", "estas botas"],
          ["esse/a (aí)", "esse casaco", "essa camisola"],
          ["aquele/a (lá)", "aquele casaco", "aquela camisola"],
          ["ficar + bem/graúdo", "O casaco fica-me bem.", "As calças ficam-te grandes."],
        ],
        note: "Três graus de distância (este/esse/aquele) como em espanhol (este/ese/aquel). A joia da loja: ficar serve para a roupa — «ficar-me bem» = me queda bien, com pronome grudo: fica-ME.",
      },
    ],
    moreExamples: [
      { it: "Estas botas são caras, mas ficam-me bem.", es: "Estas botas son caras, pero me quedan bien." },
      { it: "Aquela camisola é mais barata.", es: "Aquella camiseta es más barata." },
      { it: "Este casaco fica-te ótimo.", es: "Este abrigo te queda genial." },
    ],
    drills: {
      transform: [
        { q: "Completa: «Quanto custa ___ casaco?» (o que tens na mão)", options: ["este", "esse", "aquele"], answer: 0, explain: "Perto de mim → este." },
        { q: "A roupa: «As calças ___ grandes.» (para ti)", options: ["ficam-te", "te ficam", "ficam você"], answer: 0, explain: "ficar + pronome enclítico: ficam-te." },
      ],
      errors: [
        { q: "Corrige: «Esta botas são caras.»", options: ["Estas botas são caras.", "Esta botas são caros.", "Estes botas é caras."], answer: 0, explain: "Plural feminino: estas botas." },
      ],
    },
  },
  "pt-cu-a1-07": {
    tables: [
      {
        title: "Imperativo formal + preposições de lugar",
        headers: ["Forma", "Exemplo", "Espanhol"],
        rows: [
          ["imperativo 3ª pessoa", "Siga em frente.", "Siga recto."],
          ["vire à direita/esquerda", "Vire à direita.", "Gire a la derecha."],
          ["entre X e Y", "O café fica entre o banco e o correio.", "entre el banco y correos"],
          ["atrás de / à frente de", "O miradouro fica atrás da igreja.", "detrás de la iglesia"],
          ["em frente de / defronte de", "A farmácia fica defronte do teatro.", "enfrente del teatro"],
        ],
        note: "O imperativo formal (você) usa a 3ª pessoa do presente do conjuntivo: siga, vire, tome. Ao dar indicações em Portugal, ouve-se «siga sempre em frente» — o «sempre» é puramente português.",
      },
    ],
    moreExamples: [
      { it: "Siga sempre em frente até ao semáforo.", es: "Siga recto hasta el semáforo." },
      { it: "Vire à esquerda na segunda rua.", es: "Gire a la izquierda en la segunda calle." },
      { it: "A estação fica perto da praça.", es: "La estación está cerca de la plaza." },
    ],
    drills: {
      transform: [
        { q: "Imperativo formal: «___ (seguir) em frente.»", options: ["Siga", "Segue", "Seguir"], answer: 0, explain: "Formal = 3ª pessoa: siga (como subjuntivo)." },
        { q: "Preposição: «O correio fica ___ (detrás de) o banco.»", options: ["atrás de", "atrás do", "atrás o"], answer: 0, explain: "atrás de + artigo: atrás do banco." },
      ],
      errors: [
        { q: "Corrige: «Vire na direita no cruzamento.»", options: ["Vire à direita no cruzamento.", "Vire a direita à cruzamento.", "Vire na direita à cruzamento."], answer: 0, explain: "Virar à direita/à esquerda (nunca «na»)." },
      ],
    },
  },
  "pt-cu-a1-08": {
    tables: [
      {
        title: "ir + a (futuro próximo) + comparativo com mais",
        headers: ["Estrutura", "Exemplo"],
        rows: [
          ["ir (presente) + infinitivo", "Vou partir às oito."],
          ["vamos + infinitivo", "Vamos viajar no sábado."],
          ["vai + infinitivo", "O comboio vai chegar tarde."],
          ["mais + adjetivo + do que", "O Alfa é mais rápido do que o Intercidades."],
          ["mais barato / mais caro", "O Intercidades é mais barato."],
        ],
        note: "Como o espanhol «voy a + infinitivo». Atenção à comparação: português exige «do que» depois do adjetivo (mais rápido DO QUE), enquanto o espanhol só tem «que».",
      },
    ],
    moreExamples: [
      { it: "Vou apanhar o Alfa das dez.", es: "Voy a tomar el Alfa de las diez." },
      { it: "Vamos comprar os billetes online.", es: "Vamos a comprar los billetes online." },
      { it: "O Alfa é mais caro do que o regional.", es: "El Alfa es más caro que el regional." },
    ],
    drills: {
      transform: [
        { q: "Futuro próximo: «Eu ___ (partir) às oito.»", options: ["vou partir", "vou a partir", "partirei agora mesmo já"], answer: 0, explain: "ir + infinitivo sem preposição (ao contrário do espanhol: voy a partir)." },
        { q: "Completa a comparação: «O Alfa é mais rápido ___ o regional.»", options: ["do que", "que só", "de que"], answer: 0, explain: "mais… do que em português europeu." },
      ],
      errors: [
        { q: "Corrige: «Vou a viajar no sábado.»", options: ["Vou viajar no sábado.", "Vou viajar a no sábado.", "Vou viajando no sábado."], answer: 0, explain: "Sem «a»: vou viajar (não é espanhol!)." },
      ],
    },
  },
  "pt-cu-a1-09": {
    tables: [
      {
        title: "gostar de + fazer/jogar",
        headers: ["Estrutura", "Exemplo", "Espanhol"],
        rows: [
          ["gostar de + substantivo", "Gosto de música fadista.", "Me gusta la música de fado."],
          ["gostar de + infinitivo", "Gosto de ouvir fado.", "Me gusta escuchar fado."],
          ["fazer desporto", "Ela faz desporto todos os dias.", "hace deporte"],
          ["jogar + desporto/jogo", "Jogamos basquetebol ao sábado.", "jugamos al básquet"],
          ["✗", "«gosto ouvir» sem de", "→ gosto DE ouvir"],
        ],
        note: "gostar SEMPRE leva «de» — o espanhol «me gusta escuchar» não tem preposição, o português exige: gosto DE ouvir. E o desporto se «faz»; jogos se «jogam».",
      },
    ],
    moreExamples: [
      { it: "Gosto de jogar futebol com os amigos.", es: "Me gusta jugar fútbol con los amigos." },
      { it: "Ele não gosta de fazer desporto.", es: "A él no le gusta hacer deporte." },
      { it: "Gostas de tocar guitarra?", es: "¿Te gusta tocar guitarra?" },
    ],
    drills: {
      transform: [
        { q: "Completa: «Gosto ___ ouvir fado.»", options: ["de", "a", "—"], answer: 0, explain: "gostar de + infinitivo." },
        { q: "Escolhe o verbo: «___ basquetebol ao sábado.»", options: ["Jogamos", "Fazemos", "Jogamos fazemos"], answer: 0, explain: "Jogos e desportos com bola → jogar." },
      ],
      errors: [
        { q: "Corrige: «Ela gosta muito.» (escuchar música)", options: ["Ela gosta muito de ouvir música.", "Ela gosta muito ouvir a música.", "Ela gusta muito de música."], answer: 0, explain: "Sempre «de» depois de gostar." },
      ],
    },
  },
  "pt-cu-a1-10": {
    tables: [
      {
        title: "ser vs estar + há",
        headers: ["Verbo", "Para quê", "Exemplo"],
        rows: [
          ["ser", "natureza, caráter, origem", "A casa é tranquila."],
          ["estar", "estado temporário", "A casa está limpa (hoje)."],
          ["ser", "profissão e posse", "A cozinha é nova."],
          ["estar", "posição temporária", "A janela está aberta."],
          ["há", "existência", "Há um quarto livre."],
        ],
        note: "A mesma fronteira do espanhol ser/estar — a tentação é usar só «ser». Teste: se pode mudar amanhã, use está: a janela ESTÁ aberta (depois fecha-se).",
      },
    ],
    moreExamples: [
      { it: "O Porto é bonito e está ensolarado hoje.", es: "O Porto es bonito y está soleado hoy." },
      { it: "A sopa está fria.", es: "La sopa está fría." },
      { it: "Há um mercado ali.", es: "Hay un mercado allí." },
    ],
    drills: {
      transform: [
        { q: "ser ou estar? «A casa ___ vazia.» (os saíram agora)", options: ["está", "é", "há"], answer: 0, explain: "Estado temporário → está." },
        { q: "ser ou estar? «A cozinha ___ nova.»", options: ["é", "está", "há"], answer: 0, explain: "Característica permanente → é." },
      ],
      errors: [
        { q: "Corrige: «A janela é aberta.» (agora mesmo)", options: ["A janela está aberta.", "A janela há aberta.", "A janela tem aberta."], answer: 0, explain: "Estado do momento → estar." },
      ],
    },
  },
  "pt-cu-a1-11": {
    tables: [
      {
        title: "Numerales e medidas + levar",
        headers: ["Padrão", "Exemplo"],
        rows: [
          ["levar + quantidade", "Levo um quilo de laranjas."],
          ["meia dúzia de", "Levo meia dúzia de ovos."],
          ["o meio quilo de", "O meio quilo de queijo custa cinco euros."],
          ["números compostos com e", "trinta e dois · cento e cinquenta"],
          ["preço: custar", "Quanto custam as laranjas?"],
        ],
        note: "«Llevar» = levar em português: levo um quilo (me lo llevo). Os números ligam-se com «e» como em espanhol (treinta y dos → trinta e dois). E atenção: meia dúzia, meio quilo — meia concorda em feminino!",
      },
    ],
    moreExamples: [
      { it: "Levo duas dúzias de ameixas.", es: "Llevo dos docenas de ciruelas." },
      { it: "Quanto custa o meio quilo de azeite?", es: "¿Cuánto cuesta el medio kilo de aceite?" },
      { it: "Compro tudo na feira ao sábado.", es: "Compro todo en la feria el sábado." },
    ],
    drills: {
      transform: [
        { q: "Completa: «___ dúzia de ovos, por favor.» (6)", options: ["Meia", "Meio", "Metida"], answer: 0, explain: "dúzia é feminina → meia dúzia." },
        { q: "Pergunta o preço: «___ ___ as laranjas?»", options: ["Quanto custam", "Quantos custa", "Como custam"], answer: 0, explain: "Preço = custar; plural → custam." },
      ],
      errors: [
        { q: "Corrige: «Levo meio dúzia de ovos.»", options: ["Levo meia dúzia de ovos.", "Levo meia dúzias de ovos.", "Levo um meia dúzia ovo."], answer: 0, explain: "meia (f.) + dúzia (f.)." },
      ],
    },
  },
  "pt-cu-a1-12": {
    tables: [
      {
        title: "Recapitulação A1: os cinco motores",
        headers: ["Motor", "Para quê", "Exemplo"],
        rows: [
          ["ser/estar", "identidade e estado", "O Porto é lindo e estou com fome."],
          ["estou com + substantivo", "sensações físicas", "Estou com fome / pressa / sono."],
          ["ter", "posse e idade", "Tenho dezanove anos."],
          ["estar a + infinitivo", "ação em curso", "Estou a jantar."],
          ["há", "existência", "Há vinho verde na mesa."],
        ],
        note: "«Estou com fome» substitui o espanhol «tengo hambre»: em português, a fome É COMIGO (estou com) — não se «tem». O mesmo: estou com pressa, com sono, com razão.",
      },
    ],
    moreExamples: [
      { it: "Estou com sono — vamos jantar?", es: "Tengo sueño, ¿vamos a cenar?" },
      { it: "Estamos com pressa, se faz favor.", es: "Tenemos prisa, por favor." },
      { it: "Ele está com razão, como sempre.", es: "Él tiene razón, como siempre." },
    ],
    drills: {
      transform: [
        { q: "Traduz para PE: «Tengo hambre.»", options: ["Estou com fome.", "Tenho fome.", "Há fome em mim."], answer: 0, explain: "Sensações físicas: estar com + substantivo." },
        { q: "Escolhe o motor: «___ muito vinho no Douro.»", options: ["Há", "Está", "Tem há"], answer: 0, explain: "Existência → há." },
      ],
      errors: [
        { q: "Corrige: «Tenho pressa, o comboio parte!» (PE natural)", options: ["Estou com pressa, o comboio parte!", "Estou a pressa, o comboio parte!", "Tenho com pressa o comboio!"], answer: 0, explain: "Pressa, sono, fome → estar com." },
      ],
    },
  },
};
