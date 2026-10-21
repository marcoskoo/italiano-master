import type { CbGrammarPack } from "../cb-rules";

/* ═══ PT B1 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════ */

export const PT_CB_RULES_B1: Record<string, CbGrammarPack> = {
  "pt-cu-b1-01": {
    tables: [
      {
        title: "Perfeito composto vs perfeito simples",
        headers: ["", "Perfeito composto", "Perfeito simples"],
        rows: [
          ["Forma", "ter + particípio (tenho feito)", "radical + -i/-ei (fiz)"],
          ["Valor", "repetição até agora", "evento único e terminado"],
          ["Exemplo", "Tenho feito muitos cursos.", "Fiz um curso em março."],
          ["Marcadores", "ultimamente, nos últimos anos", "ontem, em 2023, na sexta"],
          ["Já estive vs tenho estado", "—", "«Já estive em Coimbra» (experiência pontual)"],
        ],
        note: "¡Trampa mayor! O perfeito composto português NÃO é o «he hecho» espanhol: «tenho feito» = hei feito repetidamente (ação habitual até hoje). Para experiência única: perfeito simples — «já estive em Coimbra», nunca «já tenho estado».",
      },
    ],
    moreExamples: [
      { it: "Ultimamente tenho trabalhado demasiado.", es: "Últimamente he estado trabajando demasiado. (sentido: repetido)" },
      { it: "Tenho estudado português todas as semanas.", es: "He estudiado portugués todas las semanas. (repetido)" },
      { it: "Estive em Coimbra uma vez, em 2022.", es: "Estuve en Coimbra una vez, en 2022." },
    ],
    drills: {
      transform: [
        { q: "Composta ou simples? «___ em Coimbra três vezes este ano.» (repetido)", options: ["Tenho estado", "Estive", "Tenho estado sempre"], answer: 0, explain: "Repetição até agora → perfeito composto: tenho estado." },
        { q: "Composta ou simples? «___ em Coimbra na semana passada.» (uma vez)", options: ["Estive", "Tenho estado", "Estava"], answer: 0, explain: "Evento único com tempo definido → estive." },
      ],
      errors: [
        { q: "Corrige: «Já tenho visto esse filme.» (uma vez, pontual)", options: ["Já vi esse filme.", "Já via esse filme uma vez.", "Já tenho visto esse filme uma vez só exatamente."], answer: 0, explain: "Experiência única → perfeito simples: já vi." },
      ],
    },
  },
  "pt-cu-b1-02": {
    tables: [
      {
        title: "Concordar e discordar: também eu / nem eu",
        headers: ["Frase original", "Concordo", "Discordo"],
        rows: [
          ["Trabalho em casa.", "Também eu.", "Eu não."],
          ["Não gosto de reuniões.", "Também não. / Nem eu.", "Eu gosto."],
          ["Sou de Lima.", "Também eu.", "Eu não sou."],
          ["Posso chegar tarde.", "Também eu (posso).", "Eu não posso."],
          ["Vou concordar parcialmente…", "Até certo ponto, sim…", "Não necessariamente."],
        ],
        note: "«Yo también» = também eu; «yo tampoco» = também não / nem eu — ordem invertida ao espanhol («eu também» soa enfático). Para discordar com jeito: «não necessariamente», «até certo ponto» — os suavizantes do debate português.",
      },
    ],
    moreExamples: [
      { it: "Eu também acho. / Também eu.", es: "Yo también lo creo." },
      { it: "Nem eu — detesto segundas-feiras.", es: "Yo tampoco — odio los lunes." },
      { it: "Até certo ponto, mas há nuances.", es: "Hasta cierto punto, pero hay matices." },
    ],
    drills: {
      transform: [
        { q: "Concorda (negativo): «Não gosto de trânsito.» →", options: ["Nem eu.", "Eu também não gosto nem.", "Também eu."], answer: 0, explain: "nem eu = yo tampoco." },
        { q: "Discorda com jeito: «É o melhor da cidade.»", options: ["Não necessariamente.", "Está errado totalmente!", "Não! Absolutamente não!"], answer: 0, explain: "não necessariamente = discordância suave." },
      ],
      errors: [
        { q: "Corrige: «Eu também não gosto. (resposta curta natural)»", options: ["Nem eu.", "Também não eu gosto.", "Eu nem também."], answer: 0, explain: "Resposta curta: nem eu / também não." },
      ],
    },
  },
  "pt-cu-b1-03": {
    tables: [
      {
        title: "Condicional II: se + imperfeito do conjuntivo",
        headers: ["Cláusula", "Forma", "Exemplo"],
        rows: [
          ["se + imperfeito do conjuntivo", "falasse, fosse, tivesse", "Se ganhasse o Euromilhões…"],
          ["resultado: condicional", "-ia (faria, compraria)", "…compraria uma casa."],
          ["resultado: imperfeito (coloquial)", "era, tinha, ficava", "…eu ficava rico! (PE falado)"],
          ["«se eu fosse tu»", "conselho", "Se eu fosse tu, investia."],
          ["✗", "«se ganharia»", "o se nunca leva condicional"],
        ],
        note: "«Si ganara, compraría» → se ganhasse, compraria. Dois extras portugueses: (1) o condicional pode trocar-se pelo imperfeito na fala («eu investia»); (2) «se eu fosse tu» é o «yo que tú» — com imperfeito a seguir, bem português.",
      },
    ],
    moreExamples: [
      { it: "Se tivesse tempo, aprendia alemão também.", es: "Si tuviera tiempo, aprendería alemán también." },
      { it: "Se fosse mais barato, comprava dois.", es: "Si fuera más barato, compraría dos." },
      { it: "Se eu fosse tu, poupava um pouco.", es: "Yo que tú, ahorraría un poco." },
    ],
    drills: {
      transform: [
        { q: "Completa: «Se ___ (ganhar) o Euromilhões, comprava uma casa.»", options: ["ganhasse", "ganharia", "ganho"], answer: 0, explain: "se + imperfeito do conjuntivo: ganhasse." },
        { q: "Aconselha: «___ eu ___ tu, investia.»", options: ["Se / fosse", "Se / seria", "Se / for"], answer: 0, explain: "se eu fosse tu = yo que tú." },
      ],
      errors: [
        { q: "Corrige: «Se ganharia a sorteio, ficava rico.»", options: ["Se ganhasse o sorteio, ficava rico.", "Se ganharia, ficava seria rico.", "Se ganho o sorteio, ficava rico ontem."], answer: 0, explain: "Nunca condicional depois de se." },
      ],
    },
  },
  "pt-cu-b1-04": {
    tables: [
      {
        title: "O mais-que-perfeito (tinha feito)",
        headers: ["Situação", "Mais-que-perfeito", "Exemplo"],
        rows: [
          ["passado antes do passado", "tinha + particípio", "Quando cheguei, o comboio já tinha partido."],
          ["com antes de", "tinha + particípio", "Antes de mudar de cidade, tinha poupado muito."],
          ["3ª pessoa", "tinha / tinha", "Ela já tinha visto o filme."],
          ["nós", "tínhamos + particípio", "Já tínhamos jantado às oito."],
          ["vs simples (literário)", "fizera, partira", "O comboio partira (registro escrito)"],
        ],
        note: "«Cuando llegué, el tren ya había partido» → quando cheguei, o comboio já TINHA partido. Em português usa ter (nunca «haver» aqui). A forma simples «partira» é literária — reconheça, mas use a composta.",
      },
    ],
    moreExamples: [
      { it: "Quando acordámos, já tinha amanhecido.", es: "Cuando despertamos, ya había amanecido." },
      { it: "Ela tinha acabado o mestrado antes do primeiro emprego.", es: "Ella había terminado el máster antes del primer empleo." },
      { it: "Tínhamos reservado mesa, mas o restaurante fechou.", es: "Habíamos reservado mesa, pero el restaurante cerró." },
    ],
    drills: {
      transform: [
        { q: "Completa: «Quando cheguei, o comboio já ___ (partir).»", options: ["tinha partido", "partira só", "tem partido"], answer: 0, explain: "ter + particípio: tinha partido." },
        { q: "Passa para nós: «Eu tinha acabado o relatório.»", options: ["Nós tínhamos acabado o relatório.", "Nós tinhamos acabado o relatório.", "Nós tivemos acabado o relatório."], answer: 0, explain: "tínhamos (com acento) + particípio." },
      ],
      errors: [
        { q: "Corrige: «Quando cheguei, o comboio já havia partir.»", options: ["Quando cheguei, o comboio já tinha partido.", "Quando cheguei, o comboio já tinha partir.", "Quando cheguei, o comboio já havendo partido."], answer: 0, explain: "tinha + PARTICÍPIO (partido), não infinitivo." },
      ],
    },
  },
  "pt-cu-b1-05": {
    tables: [
      {
        title: "Reclamar com jeito + deveria ter + particípio",
        headers: ["Fórmula", "Efeito", "Exemplo"],
        rows: [
          ["lamento, mas… / desculpe incomodar", "suaviza a reclamação", "Lamento, mas o quarto não estava limpo."],
          ["não queria ser chato, mas…", "pré-desculpa coloquial", "Não queria ser chato, mas o wifi não funciona."],
          ["havia um problema com…", "impessoal, sem culpar", "Havia um problema com a fatura."],
          ["deveria ter + particípio", "crítica do passado", "Deveriam ter avisado."],
          ["não deveria ter + particípio", "repreensão", "Não deviam ter cobrado duas vezes."],
        ],
        note: "«Deberían haber avisado» = deveriam TER avisado — o «haber + participio» espanhol vira «ter + particípio». E antes de reclamar, o português pede desculpa DUAS vezes: «desculpe incomodar, mas…».",
      },
    ],
    moreExamples: [
      { it: "Desculpe insistir, mas a encomenda ainda não chegou.", es: "Perdone que insista, pero el paquete aún no llegó." },
      { it: "Deveria ter confirmado a reserva por escrito.", es: "Debería haber confirmado la reserva por escrito." },
      { it: "Não deviam ter fechado o balcão tão cedo.", es: "No deberían haber cerrado el mostrador tan temprano." },
    ],
    drills: {
      transform: [
        { q: "Crítica do passado: «Não avisaram.» →", options: ["Deveriam ter avisado.", "Deveriam de avisar ontem.", "Deviam avisarem já."], answer: 0, explain: "deveria ter + particípio." },
        { q: "Suaviza a reclamação: «O ar não funciona!»", options: ["Desculpe incomodar, mas o ar condicionado não funciona.", "O ar não funciona e é um escândalo!", "Vocês quebraram o ar!"], answer: 0, explain: "Pré-desculpa + fato, sem culpar direto." },
      ],
      errors: [
        { q: "Corrige: «Deveriam ter avizado antes.» (grafia)", options: ["Deveriam ter avisado antes.", "Deveriam ter avisou antes.", "Deveriam ter avizar antes."], answer: 0, explain: "avisar → avisado (particípio regular)." },
      ],
    },
  },
  "pt-cu-b1-06": {
    tables: [
      {
        title: "Discurso indireto: dizer que / perguntar se",
        headers: ["Direto", "Indireto", "Mudança"],
        rows: [
          ["«Estou cansado»", "Ele disse que estava cansado.", "presente → imperfeito"],
          ["«Vou sair»", "Ele disse que ia sair.", "vou → ia"],
          ["«Podes ajudar?»", "Ela perguntou se eu podia ajudar.", "pergunta → se"],
          ["«Quem telefonou?»", "Ela perguntou quem tinha telefonado.", "pretérito → mais-que-perfeito"],
          ["«Chega amanhã»", "Ele disse que chegava no dia seguinte.", "amanhã → no dia seguinte"],
        ],
        note: "O português recua os tempos como o espanhol («dijo que estaba»), mas com uma diferença: o «se» das perguntas sim/não («perguntou SE eu podia») — igual ao «si» espanhol, mas sem invertir a ordem das palavras.",
      },
    ],
    moreExamples: [
      { it: "Ela disse que ia chegar mais tarde.", es: "Ella dijo que iba a llegar más tarde." },
      { it: "Ele perguntou se tínhamos terminado.", es: "Él preguntó si habíamos terminado." },
      { it: "Avisaram que a reunião fora cancelada.", es: "Avisaron que la reunión había sido cancelada." },
    ],
    drills: {
      transform: [
        { q: "Indireto: «Estou com pressa», disse ele. →", options: ["Ele disse que estava com pressa.", "Ele disse que está com pressa.", "Ele disse que tenho pressa."], answer: 0, explain: "estou → estava (recuo temporal)." },
        { q: "Indireto: «Podes vir?» perguntou ela. →", options: ["Ela perguntou se eu podia ir.", "Ela perguntou se pode vir ela.", "Ela perguntou podia se vir."], answer: 0, explain: "pergunta sim/não → se + ordem afirmativa." },
      ],
      errors: [
        { q: "Corrige: «Ele perguntou se eu posso ontem ajudar.»", options: ["Ele perguntou se eu podia ajudar.", "Ele perguntou se posso ajudar ontem.", "Ele perguntou podia ajudar se."], answer: 0, explain: "No indireto, o presente recua: posso → podia." },
      ],
    },
  },
  "pt-cu-b1-07": {
    tables: [
      {
        title: "Infinitivo pessoal vs impessoal",
        headers: ["Sujeito", "Infinitivo", "Exemplo"],
        rows: [
          ["eu", "falar (inflexionado)", "É melhor eu falar primeiro."],
          ["tu", "falar (flexão -es rara: falares)", "Antes de tu falares…"],
          ["nós", "falarmos", "Chegámos antes de eles começarem. / É para falarmos."],
          ["eles/elas", "falarm / chegarem", "Espero que cheguem… / Apesar de chegarem tarde…"],
          ["impessoal (sem sujeito)", "falar", "É importante falar devagar."],
        ],
        note: "Exclusividade portuguesa! O infinitivo FLEXIONA quando tem sujeito próprio: «antes de chegarmos» (antes de que lleguemos nosotros). Regra de bolso: se o sujeito do infinitivo é diferente do principal (ou precisa ser nomeado), flexione: -mos, -em, -ares.",
      },
    ],
    moreExamples: [
      { it: "Apesar de estarmos cansados, continuámos.", es: "A pesar de estar cansados, continuamos." },
      { it: "É altura de partirmos.", es: "Es hora de que nos vayamos." },
      { it: "Vi-os saírem do escritório.", es: "Los vi salir de la oficina. (PT marca el sujeto: -em)" },
        ],
    drills: {
      transform: [
        { q: "Flexiona: «É importante ___ (nós: ler) os contratos.»", options: ["lermos", "ler", "lendo"], answer: 0, explain: "Sujeito nós → infinitivo pessoal: lermos." },
        { q: "Flexiona: «Espero por eles ___ (chegar).»", options: ["chegarem", "chegar", "chegados"], answer: 0, explain: "Sujeito eles → chegarem." },
      ],
      errors: [
        { q: "Corrige: «Apesar de chegar atrasados, entrámos.» (sujeito nós)", options: ["Apesar de chegarmos atrasados, entrámos.", "Apesar de chegarem atrasados, entrámos.", "Apesar de chegar atrasado, entrámos."], answer: 0, explain: "O sujeito é nós → chegarmos." },
      ],
    },
  },
  "pt-cu-b1-08": {
    tables: [
      {
        title: "Obrigação e proibição",
        headers: ["Fórmula", "Sentido", "Exemplo"],
        rows: [
          ["ter de + infinitivo", "obrigação", "Tenho de renovar a carta."],
          ["ter de (eles)", "têm de", "Têm de parar no sinal."],
          ["não poder", "proibição", "Não podes estacionar aqui."],
          ["é proibido / é obrigatório", "sinal, regra", "É proibido fumar na praia."],
          ["não é preciso", "não obrigatório", "Não é preciso fazer o check-in online."],
        ],
        note: "«Tener que» = ter DE em Portugal (a forma preferida, embora «ter que» exista). «É proibido + infinitivo» é a linguagem dos cartazes: É proibido fumar — como en español.",
      },
    ],
    moreExamples: [
      { it: "Tens de usar o cinto à frente.", es: "Tienes que usar el cinturón adelante." },
      { it: "É proibido ultrapassar pela direita.", es: "Está prohibido adelantar por la derecha." },
      { it: "Não precisas de pagar a portagem em dinheiro.", es: "No necesitas pagar el peaje en efectivo." },
    ],
    drills: {
      transform: [
        { q: "Completa: «___ de levar o cartão de cidadão.» (obrigação)", options: ["Tens", "Tens que obrigado", "É proibido"], answer: 0, explain: "ter de + infinitivo." },
        { q: "Proibição: «___ ___ fumar no interior.»", options: ["É proibido", "É obrigatório", "Não é preciso"], answer: 0, explain: "é proibido + infinitivo." },
      ],
      errors: [
        { q: "Corrige: «Tem de parar vocês aqui.» (grupo)", options: ["Têm de parar aqui.", "Tem de pararem aqui vocês.", "Tem parar de aqui."], answer: 0, explain: "vocês/eles → têm de (3ª plural)." },
      ],
    },
  },
  "pt-cu-b1-09": {
    tables: [
      {
        title: "Orações relativas: que, quem, onde, cujo",
        headers: ["Relativo", "Refere-se a", "Exemplo"],
        rows: [
          ["que", "pessoas e coisas", "o podcast que ouço / a pessoa que ligou"],
          ["quem", "pessoas (sem antecedente)", "Quem avisa amigo é."],
          ["onde", "lugares", "o café onde nos conhecemos"],
          ["cujo / cuja", "posse (concorda!)", "o autor cujo livro li"],
          ["o qual / a qual", "formal, após preposição", "o tema sobre o qual falámos"],
        ],
        note: "«cuyo» português = cujo, e CONCORDA com o que vem depois: o autor cujo LIVRO (m.), a autora cuja OBRA (f.) — nunca «que o livro» (calco do espanhol «que su libro»). quem sem antecedente = «quien».",
      },
    ],
    moreExamples: [
      { it: "O anfitrião que faz qualquer tema engraçado.", es: "El presentador que hace divertido cualquier tema." },
      { it: "É a app onde se ouve mais depressa.", es: "Es la app donde se escucha más rápido." },
      { it: "O autor cuja série ganhou prémios.", es: "El autor cuya serie ganó premios." },
    ],
    drills: {
      transform: [
        { q: "Escolhe o relativo: «o café ___ nos conhecemos»", options: ["onde", "que", "cujo"], answer: 0, explain: "Lugar → onde." },
        { q: "Concorda: «a autora ___ ___ escrevi» (posse, obra f.)", options: ["cuja obra", "cujo obra", "que obra"], answer: 0, explain: "cuja concorda com obra (feminino)." },
      ],
      errors: [
        { q: "Corrige: «O autor que o livro li.»", options: ["O autor cujo livro li.", "O autor cuja livro li.", "O autor quem livro li."], answer: 0, explain: "Posse → cujo (não «que o»)." },
      ],
    },
  },
  "pt-cu-b1-10": {
    tables: [
      {
        title: "Condicional I: futuro do conjuntivo",
        headers: ["Cláusula", "Forma", "Exemplo"],
        rows: [
          ["se + futuro do conjuntivo", "for, tiver, chegar", "Se eu for a Coimbra, visito a universidade."],
          ["resultado: futuro", "-ei / -á", "Se tiver tempo, farei um bolo."],
          ["quando + futuro do conj.", "quando chegares…", "Quando chegares, avisa-me."],
          ["a não ser que + presente conj.", "seja, tenha", "A não ser que chova, vamos a pé."],
          ["✗ (espanhol)", "«si iré / cuando llegaré»", "PT nunca futuro do indicativo após se/quando"],
        ],
        note: "A GRANDE diferença: português tem futuro do subjuntivo — «si voy» (ES futuro? no, presente) vira «se eu FOR»; «cuando llegues» = «quando cheGARES». Depois de se e quando referindo o futuro, NUNCA indicativo: se eu for, quando ela chegar.",
      },
    ],
    moreExamples: [
      { it: "Se puderes, traz o portátil.", es: "Si puedes, trae el portátil. (PT marca o futuro: puderes)" },
      { it: "Quando tivermos os resultados, avisamos.", es: "Cuando tengamos los resultados, avisamos." },
      { it: "A não ser que o voo atrase, chego às dez.", es: "A menos que el vuelo se retrase, llego a las diez." },
    ],
    drills: {
      transform: [
        { q: "Futuro do conjuntivo: «Se eu ___ (ir) a Coimbra…»", options: ["for", "vou", "irei"], answer: 0, explain: "se + futuro do conjuntivo: for." },
        { q: "Completa: «Quando ___ (chegar) a Marta, diz-lhe.»", options: ["chegar", "chegará", "vai chegar"], answer: 0, explain: "quando + futuro do conjuntivo: 3ª pessoa = chegar (a forma flexionada surge noutras pessoas: chegares, chegarmos)." },
      ],
      errors: [
        { q: "Corrige: «Quando ela chegará, avisamos.»", options: ["Quando ela chegar, avisamos.", "Quando ela chega, avisaremos ontem.", "Quando ela vai chegar, avisamos hoje já."], answer: 0, explain: "Nunca futuro do indicativo após quando." },
      ],
    },
  },
  "pt-cu-b1-11": {
    tables: [
      {
        title: "costumava + infinitivo · hábitos no imperfeito",
        headers: ["Estrutura", "Exemplo", "Espanhol"],
        rows: [
          ["costumar + infinitivo", "Costumava andar de bicicleta.", "solía ir en bici"],
          ["costumo (presente)", "Costumo tomar café duplo.", "suelo tomar"],
          ["não costumo", "Não costumo ver TV.", "no suelo ver"],
          ["imperfeito puro (hábito)", "Íamos à praia todo o verão.", "íbamos a la playa"],
          ["✗", "«solía» não existe em PT", "→ costumava"],
        ],
        note: "«solía» não passa para o português: costumava é o verbo (de costume!). E o imperfeito sozinho já expressa hábito: «íamos todo o verão» = íbamos todo el verano. Dupla ferramenta: costumava para o costume, imperfeito para o cenário repetido.",
      },
    ],
    moreExamples: [
      { it: "Costumávamos jantar fora às sextas.", es: "Solíamos cenar fuera los viernes." },
      { it: "Não costumo acordar cedo ao domingo.", es: "No suelo despertar temprano el domingo." },
      { it: "Antigamente, escrevia cartas à mão.", es: "Antes, escribía cartas a mano." },
    ],
    drills: {
      transform: [
        { q: "Traduz: «Solíamos jogar às cartas.»", options: ["Costumávamos jogar às cartas.", "Solíamos jogar às cartas.", "Costumamos jogado às cartas."], answer: 0, explain: "solía → costumava (+ infinitivo)." },
        { q: "Presente: «___ (costumar) ler antes de dormir.» (eu)", options: ["Costumo", "Costumava", "Costumei"], answer: 0, explain: "costumo = suelo (hábito atual)." },
      ],
      errors: [
        { q: "Corrige: «Eu solía morar aqui.» (calco)", options: ["Eu costumava morar aqui.", "Eu solía morava aqui.", "Eu costumo morar aqui antigamente."], answer: 0, explain: "«solía» não existe: costumava." },
      ],
    },
  },
  "pt-cu-b1-12": {
    tables: [
      {
        title: "Estrutura da opinião: tese · argumentos · consequência",
        headers: ["Momento", "Ferramenta", "Exemplo"],
        rows: [
          ["abrir", "na minha opinião / penso que", "Na minha opinião, a cidade está melhor."],
          ["argumentar 1", "primeiro, porque", "Primeiro, porque o metro ligou a zona."],
          ["argumentar 2", "além disso", "Além disso, há mais cultura gratuita."],
          ["conceder", "é verdade que… mas", "É verdade que o trânsito piorou, mas…"],
          ["concluir", "por isso / portanto", "Por isso, vale a pena viver aqui."],
        ],
        note: "O esqueleto persuasivo português: na minha opinião → primeiro → além disso → é verdade que… mas → por isso. «Penso que» leva indicativo (penso que É) — ao contrário do espanhol «pienso que sea» ✗ «pienso que es» ✓. Aqui os dois coincidem!",
      },
    ],
    moreExamples: [
      { it: "Penso que o transporte melhorou muito.", es: "Pienso que el transporte ha mejorado mucho." },
      { it: "É verdade que é caro, mas a qualidade compensa.", es: "Es cierto que es caro, pero la calidad compensa." },
      { it: "Por isso convido todos a visitar.", es: "Por eso invito a todos a visitarla." },
    ],
    drills: {
      transform: [
        { q: "Abre a opinião: «___ ___ ___, a cidade mudou.» (na minha…)", options: ["Na minha opinião", "Na opinião minha pessoal eu", "Segundo eu penso que"], answer: 0, explain: "na minha opinião = en mi opinión." },
        { q: "Concede e gira: «___ ___ que é caro, mas compensa.»", options: ["É verdade", "É mentira", "É impossível"], answer: 0, explain: "é verdade que… mas = concesión + giro." },
      ],
      errors: [
        { q: "Corrige: «Penso que seja melhor assim.»", options: ["Penso que é melhor assim.", "Penso que ser melhor assim.", "Penso de que é melhor."], answer: 0, explain: "Pensar que + INDICATIVO em português (é)." },
      ],
    },
  },
};
