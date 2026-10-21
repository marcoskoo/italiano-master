import type { CbGrammarPack } from "../cb-rules";

/* ═══ PT C1 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════ */

export const PT_CB_RULES_C1: Record<string, CbGrammarPack> = {
  "pt-cu-c1-01": {
    tables: [
      {
        title: "Marcadores de estruturação + conjuntivo académico",
        headers: ["Marcador", "Fórmula", "Exemplo"],
        rows: [
          ["em primeiro lugar / seguidamente", "ordena o discurso", "Em primeiro lugar, os dados; seguidamente, a leitura."],
          ["caso + conjuntivo", "condição formal", "Caso subsistam dúvidas, retomaremos o ponto."],
          ["que eu saiba + conjuntivo", "reserva de conhecimento", "Que eu saiba, a amostra é representativa."],
          ["salvo se + conjuntivo", "ressalva", "Salvo se me engano, o efeito é marginal."],
          ["em síntese / em jeito de conclusão", "fecha", "Em síntese, a hipótese confirma-se."],
        ],
        note: "O académico português estrutura com marcadores e reserves o conjuntivo para as fórmulas: «caso subsistam», «que eu saiba» — iguais ao espanhol «caso subsistan», «que yo sepa». «Em jeito de» é PE puro (= a modo de).",
      },
    ],
    moreExamples: [
      { it: "Caso persistam as dúvidas, vejo-me obrigado a repetir.", es: "Caso persistan las dudas, me veo obligado a repetir." },
      { it: "Que eu saiba, nenhum estudo replicou o resultado.", es: "Que yo sepa, ningún estudio replicó el resultado." },
      { it: "Em jeito de conclusão, propomos três vias.", es: "A modo de conclusión, proponemos tres vías." },
    ],
    drills: {
      transform: [
        { q: "Conjuntivo académico: «Caso ___ (subsistir) dúvidas, retomaremos.»", options: ["subsistam", "subsistem", "subsistirão"], answer: 0, explain: "caso + conjuntivo: subsistam." },
        { q: "Fórmula de reserva: «___ ___ ___, o efeito é real.»", options: ["Que eu saiba", "Que eu sei", "Como eu sabia"], answer: 0, explain: "que eu saiba + conjuntivo implícito." },
      ],
      errors: [
        { q: "Corrige: «Caso subsistem dúvidas, retomo o ponto.»", options: ["Caso subsistam dúvidas, retomo o ponto.", "Caso subsistem dúvidas, retomarei agora já.", "Caso subsistindo dúvidas, retomo."], answer: 0, explain: "caso pede conjuntivo: subsistam." },
      ],
    },
  },
  "pt-cu-c1-02": {
    tables: [
      {
        title: "Nominalização + hedging académico",
        headers: ["Estilo verbal", "Estilo nominal", "Ferramenta de hedge"],
        rows: [
          ["Implementámos a política depressa.", "a implementação rápida da política", "—"],
          ["Os preços oscilaram.", "as oscilações dos preços", "—"],
          ["A intervenção funcionou.", "—", "parece ter funcionado"],
          ["Os dados mostram…", "—", "sugerem / indiciam"],
          ["—", "a fluctuação acentuada", "poderá reflectir"],
        ],
        note: "O abstract português nominaliza como o inglês: verbo → substantivo (implementar → implementação), advérbio → adjetivo (depressa → rápida). Contrapeso: verbos tentativos — «sugerem», «indiciam», «parece ter» — nunca «provam» fora do rigor absoluto.",
      },
    ],
    moreExamples: [
      { it: "A análise dos dados sugere uma correlação.", es: "El análisis de los datos sugiere una correlación." },
      { it: "É provável que o efeito seja transitório.", es: "Es probable que el efecto sea transitorio." },
      { it: "Os resultados indiciam uma tendência de longo prazo.", es: "Los resultados indican una tendencia de largo plazo." },
    ],
    drills: {
      transform: [
        { q: "Nominaliza: «Os custos aumentaram subitamente.» →", options: ["o aumento súbito dos custos", "os custos' aumento súbito", "o subitamente aumento custos"], answer: 0, explain: "aumento (sust.) + adj + de + tema." },
        { q: "Hedge: «Os dados ___ uma ligação.» (verbo tentativo)", options: ["sugerem", "provam certamente", "mostram absolutamente"], answer: 0, explain: "sugerir = o verbo da prudência académica." },
      ],
      errors: [
        { q: "Corrige: «É provável que o efeito é transitório.»", options: ["É provável que o efeito seja transitório.", "É provável que o efeito ser transitório.", "É provável o efeito é transitório."], answer: 0, explain: "é provável que + conjuntivo: seja." },
      ],
    },
  },
  "pt-cu-c1-03": {
    tables: [
      {
        title: "Condicionais formais e cortesia negocial",
        headers: ["Fórmula", "Registro", "Exemplo"],
        rows: [
          ["caso se verifique + conj.", "contrato", "Caso se verifique atraso, aplica-se a cláusula 4."],
          ["deverá V. Ex.ª + infinitivo", "diplomacia", "Deverá V. Ex.ª enviar a documentação."],
          ["desde que + conjuntivo", "condição", "Aceitamos, desde que o prazo seja respeitado."],
          ["salvo acordo em contrário", "ressalva", "Salvo acordo em contrário, o valor é final."],
          ["ficará + particípio (futuro passivo)", "compromisso", "A entrega ficará assegurada até março."],
        ],
        note: "A negociação portuguesa esconde o imperativo no «deverá» («Deverá enviar» = envie, por favor, mas com gravata). «V. Ex.ª» (Vossa Excelência) abre correspondência formal. desde que + conjuntivo = siempre que + subjuntivo.",
      },
    ],
    moreExamples: [
      { it: "Desde que a cláusula seja revista, assinamos.", es: "Siempre que la cláusula sea revisada, firmamos." },
      { it: "Caso se confirme o adiamento, será notificado.", es: "Caso se confirme el aplazamiento, será notificado." },
      { it: "Deverá V. Ex.ª confirmar a data da reunião.", es: "Debe usted confirmar la fecha de la reunión." },
    ],
    drills: {
      transform: [
        { q: "Cortesia negocial: «Envie a documentação.» → formal:", options: ["Deverá V. Ex.ª enviar a documentação.", "Envie V. Ex. já a documentação!", "Tem de enviar documentação imediatamente."], answer: 0, explain: "deverá + V. Ex.ª = imperativo com gravata." },
        { q: "Condicional formal: «___ se ___ (verificar-se) atraso…»", options: ["Caso / verifique", "Caso / verifica", "Se / verificar-se-á"], answer: 0, explain: "caso + se verifique (conjuntivo)." },
      ],
      errors: [
        { q: "Corrige: «Desde que o prazo é respeitado, aceitamos.»", options: ["Desde que o prazo seja respeitado, aceitamos.", "Desde que o prazo ser respeitado, aceitamos.", "Desde o prazo respeitado, aceitamos."], answer: 0, explain: "desde que + conjuntivo: seja." },
      ],
    },
  },
  "pt-cu-c1-04": {
    tables: [
      {
        title: "Clivagem (frases fendidas): o que… é…",
        headers: ["Tipo", "Padrão", "Exemplo"],
        rows: [
          ["o que… é…", "O que + frase + é + foco", "O que precisamos é de tempo."],
          ["é… que…", "É + foco + que + resto", "É a Marta que decide."],
          ["foi… que…", "passado", "Foi em Lisboa que nos conhecemos."],
          ["não é… que…", "negativa enfática", "Não é o preço que me preocupa."],
          ["é… quem…", "pessoas", "É você quem manda."],
        ],
        note: "La clivagem es el «lo que… es…» / «es… quien…» español, pero el portugués la usa aún más: «É a Marta QUE decide» (foco en Marta). Fórmula de bolso: é/foi + foco + que/quem + resto de la frase.",
      },
    ],
    moreExamples: [
      { it: "O que me intriga é o silêncio.", es: "Lo que me intriga es el silencio." },
      { it: "Foi então que tudo mudou.", es: "Fue entonces cuando todo cambió." },
      { it: "Não é o custo que importa; é o risco.", es: "No es el costo lo que importa; es el riesgo." },
    ],
    drills: {
      transform: [
        { q: "Cliva: «Precisamos de tempo.» (foco: tempo)", options: ["O que precisamos é de tempo.", "É tempo que precisamos o que.", "Precisamos é o que de tempo."], answer: 0, explain: "O que… é + foco." },
        { q: "Cliva (pessoa): «A Marta decide.»", options: ["É a Marta que decide.", "É a Marta quem decide também.", "A Marta é que a decide."], answer: 0, explain: "É + foco + que." },
      ],
      errors: [
        { q: "Corrige: «O que preciso é tempo.» (complemento com preposição)", options: ["O que preciso é DE tempo.", "O que preciso é ao tempo.", "O que preciso é no tempo."], answer: 0, explain: "precisar DE: o foco mantém a preposição." },
      ],
    },
  },
  "pt-cu-c1-05": {
    tables: [
      {
        title: "Preposições de tendência + vir a + infinitivo",
        headers: ["Estrutura", "Valor", "Exemplo"],
        rows: [
          ["tender para + sust./inf.", "tendência", "O mercado tende para a estabilização."],
          ["evoluir de… para…", "mudança", "Evoluiu de local para nacional."],
          ["vir a + infinitivo", "resultado futuro (formal)", "Veio a tornar-se um clássico."],
          ["pôr-se a + infinitivo", "começar a", "Pôs-se a chover."],
          ["andar a + infinitivo", "atividade recente contínua", "Ando a estudar para o exame."],
        ],
        note: "«Vir a + infinitivo» é joia do registro formal: «veio a tornar-se» = llegó a ser — futuro retrospectivo, muito jornalístico. «Andar a + infinitivo» (= ando estudando/últimamente) é PE puro: ação recente e contínua.",
      },
    ],
    moreExamples: [
      { it: "A empresa veio a dominar o mercado ibérico.", es: "La empresa llegó a dominar el mercado ibérico." },
      { it: "Ando a ler um ensaio sobre o Douro.", es: "Últimamente leo un ensayo sobre el Duero." },
      { it: "O setor tende para a concentração.", es: "El sector tiende a la concentración." },
    ],
    drills: {
      transform: [
        { q: "Formal: «A startup ___ ___ ___ tornar-se referência.» (llegó a ser)", options: ["veio a", "veio de", "vai a vir"], answer: 0, explain: "vir a + infinitivo = chegar a ser." },
        { q: "PE coloquial: «___ a estudar muito.» (últimamente)", options: ["Ando", "Venho andar", "Estou andado"], answer: 0, explain: "andar a + infinitivo = atividade recente." },
      ],
      errors: [
        { q: "Corrige: «A empresa veio de dominar o mercado.» (resultado final)", options: ["A empresa veio a dominar o mercado.", "A empresa veio dominando o mercado.", "A empresa andou a dominar final o mercado."], answer: 0, explain: "resultado final = vir A + infinitivo." },
      ],
    },
  },
  "pt-cu-c1-06": {
    tables: [
      {
        title: "Hipóteses verbalizadas (raciocínio de caso)",
        headers: ["Movimento", "Fórmula", "Exemplo"],
        rows: [
          ["abrir hipótese", "partindo do princípio de que…", "Partindo do princípio de que os dados são fiáveis…"],
          ["hipótese condicional", "supondo que + conjuntivo", "Supondo que fosse verdade, o que esperaríamos?"],
          ["expectativa", "deveríamos esperar + sust.", "Deveríamos esperar uma quebra nas queixas."],
          ["contraprova", "ainda que + conjuntivo", "Ainda que fosse assim, não explicaria o pico."],
          ["concluir", "neste cenário", "Neste cenário, a causa é estrutural."],
        ],
        note: "A entrevista de caso raciocina em voz alta: «partindo do princípio de que» (= partiendo del supuesto de que), «supondo que + conjuntivo» (suponiendo que fuera). «Ainda que» sempre com conjuntivo — mesmo + ainda que custe.",
      },
    ],
    moreExamples: [
      { it: "Supondo que a queixa seja sazonal, repetir-se-á em julho.", es: "Suponiendo que la queja sea estacional, se repetirá en julio." },
      { it: "Partindo do princípio de que a amostra é válida…", es: "Partiendo del supuesto de que la muestra es válida…" },
      { it: "Ainda que assim seja, falta explicar o pico.", es: "Aun siendo así, falta explicar el pico." },
    ],
    drills: {
      transform: [
        { q: "Abre a hipótese: «___ ___ ___ ___ ___ que a procura dobra…»", options: ["Partindo do princípio de", "Partir o princípio que", "Partindo a princípio de que"], answer: 0, explain: "partindo do princípio de que = bloco fixo." },
        { q: "Conjuntivo: «Supondo que ___ (ser) verdade…»", options: ["fosse", "é", "seria"], answer: 0, explain: "supondo que + conjuntivo (imperfeito): fosse." },
      ],
      errors: [
        { q: "Corrige: «Ainda que é assim, não explica o pico.»", options: ["Ainda que seja assim, não explica o pico.", "Ainda que é assim mesmo, não explica.", "Ainda assim é, não explica o pico."], answer: 0, explain: "ainda que + conjuntivo: seja." },
      ],
    },
  },
  "pt-cu-c1-07": {
    tables: [
      {
        title: "Futuro modal, mesóclise e passiva jurídica",
        headers: ["Fórmula", "Uso", "Exemplo"],
        rows: [
          ["será + particípio (sem agente)", "norma impessoal", "A entrega será efetuada em 30 dias."],
          ["deverá / poderá + infinitivo", "previsão normativa", "O contrato deverá vigorar até dezembro."],
          ["mesóclise: aplicar-se-á", "futuro + pronome", "Aplicar-se-á a cláusula 4."],
          ["considera-se + adj/sust.", "definição legal", "Considera-se mora o atraso superior a 15 dias."],
          ["✗ na fala", "«aplicar-se-á»", "→ vai aplicar-se / aplicar-se-á só em contrato"],
        ],
        note: "O jurídico português esconde atores: «será efetuada», «considera-se mora» — ninguém age, tudo acontece. A mesóclise (aplicar-SE-á) é o futuro com pronome dentro: é a assinatura visual da lei. Na fala, fuja dela: «vai aplicar-se».",
      },
    ],
    moreExamples: [
      { it: "Os prazos contar-se-ão em dias úteis.", es: "Los plazos se contarán en días hábiles. (mesóclise)" },
      { it: "Considera-se aceite a proposta não respondida em 10 dias.", es: "Se considera aceptada la propuesta no respondida en 10 días." },
      { it: "A multa será aplicada automaticamente.", es: "La multa será aplicada automáticamente." },
    ],
    drills: {
      transform: [
        { q: "Passiva jurídica: «O contrato ___ ___ (vigorar) até dezembro.»", options: ["deverá vigorar", "deve vigorando", "vigor será"], answer: 0, explain: "deverá + infinitivo = previsão normativa." },
        { q: "Identifica: «Aplicar-se-á a cláusula 4.» A forma é:", options: ["mesóclise (pronome dentro do futuro)", "erro ortográfico", "infinitivo pessoal"], answer: 0, explain: "aplicar-SE-á = futuro com mesóclise." },
      ],
      errors: [
        { q: "Corrige: «A entrega será efetuar em 30 dias.»", options: ["A entrega será efetuada em 30 dias.", "A entrega será efetuar-se em 30 dias.", "A entrega será de efetuada 30 dias."], answer: 0, explain: "ser + PARTICÍPIO: efetuada." },
      ],
    },
  },
  "pt-cu-c1-08": {
    tables: [
      {
        title: "Narrativa erudita: mais-que-perfeito simples e presente histórico",
        headers: ["Tempo", "Forma", "Efeito"],
        rows: [
          ["mais-que-perfeito simples", "-ra (fizera, partira)", "passado anterior, tom literário"],
          ["mais-que-perfeito composto", "tinha feito", "o mesmo, registro neutro"],
          ["presente histórico", "chega, olha, decide", "traz o passado para agora"],
          ["exemplo duplo", "Quando chegara, o palco estava vazio.", "—"],
          ["cláusula absoluta", "terminada a sessão, …", "gerúndio latino: al terminar la sesión"],
        ],
        note: "O «fizera» é o pluscuamperfecto de subjuntivo reconvertido: em português é INDICATIVO com valor de «tinha feito» — Cervantes em português. O presente histórico («Em 1974, o país desperta») anima o arquivo; a cláusula absoluta («terminada a cena») comprime tempo com elegância clássica.",
      },
    ],
    moreExamples: [
      { it: "Mal chegara a Lisboa, soube da notícia.", es: "Apenas había llegado a Lisboa, supo la noticia." },
      { it: "Terminada a sessão, todos se levantam.", es: "Terminada la sesión, todos se levantan." },
      { it: "Em 1986, Portugal entra na Europa.", es: "En 1986, Portugal entra en Europa. (presente histórico)" },
    ],
    drills: {
      transform: [
        { q: "Mais-que-perfeito simples de fazer (ele):", options: ["fizera", "tinha fazer", "faria sido"], answer: 0, explain: "fazer → fizera (= tinha feito)." },
        { q: "Presente histórico: «Em 1498, Vasco da Gama ___ (chegar) a Calecute.»", options: ["chega", "chegou tinha", "chegaria chegado"], answer: 0, explain: "presente histórico: chega." },
      ],
      errors: [
        { q: "Corrige: «Quando chegou, já escrevera tinha a carta.»", options: ["Quando chegou, já escrevera a carta.", "Quando chegou, já escreveu a carta escrevera.", "Quando chegara, escreveu já tinha carta."], answer: 0, explain: "escrevera sozinho já = tinha escrito." },
      ],
    },
  },
  "pt-cu-c1-09": {
    tables: [
      {
        title: "Litote, condicional de cortesia e conjuntivo atenuante",
        headers: ["Ferramenta", "Diz", "Quer dizer"],
        rows: [
          ["litote", "não é mau", "é excelente"],
          ["litote", "não deixa de ser estranho", "é bem estranho"],
          ["condicional de cortesia", "gostaria de sugerir", "sugiro (sem gravata)"],
          ["conjuntivo atenuante", "se me permite", "con su permiso"],
          ["conjuntivo atenuante", "que eu saiba", "hasta donde sé"],
        ],
        note: "A litote portuguesa elogia negando o contrário: «não é mau» = está muy bueno. O condicional desarma («gostaria DE sugerir» — sempre «de»!). E «se me permite» + conjuntivo é a frase que abre qualquer crítica em Portugal.",
      },
    ],
    moreExamples: [
      { it: "Não é nada mau, este vinho.", es: "No está nada mal, este vino. (= está muy bueno)" },
      { it: "Gostaria de acrescentar um pormenor.", es: "Me gustaría añadir un detalle." },
      { it: "Se me permite, há outro ângulo.", es: "Si me lo permite, hay otro ángulo." },
    ],
    drills: {
      transform: [
        { q: "Descodifica a litote: «Não é mal pensado.» =", options: ["Está bien pensado.", "Está mal pensado.", "É ilegal."], answer: 0, explain: "litote: negar o contrário = elogio." },
        { q: "Cortesia: «Sugiro uma alteração.» → suaviza:", options: ["Gostaria de sugerir uma alteração.", "Sugiro fortemente uma alteração!", "Alterem já, se faz favor."], answer: 0, explain: "gostaria de + infinitivo." },
      ],
      errors: [
        { q: "Corrige: «Gostaria sugerir uma alteração.»", options: ["Gostaria de sugerir uma alteração.", "Gostaria a sugerir uma alteração.", "Gostaria em sugerindo alteração."], answer: 0, explain: "gostar DE + infinitivo (a preposição é obrigatória)." },
      ],
    },
  },
  "pt-cu-c1-10": {
    tables: [
      {
        title: "Colocação dos clíticos em PE",
        headers: ["Contexto", "Colocação", "Exemplo"],
        rows: [
          ["início de frase", "ênclise (depois)", "Digo-te amanhã. (✗ «Te digo» é BR/espanhol)"],
          ["após advérbio sim/não", "ênclise", "Sim, digo-to. · Não, digo-to."],
          ["futuro do indicativo", "mesóclise", "Direi-to → Dir-to-ei (clássico) / Vou dizer-to."],
          ["conjuntivo", "ênclise", "Que digam-no eles."],
          ["infinitivo + pronome", "ênclise", "para dizê-lo / dizê-lo-ei (literário)"],
        ],
        note: "Regra de ouro PE: frases nunca começam com pronome átono. «Te digo» ✗ → «Digo-te» ✓. As contrações dobram: dizer-to (dizer + te + o), dar-mo, dizer-no-lo. No futuro clássico, o pronome ENTRA no verbo: vê-LO-ei (o verei).",
      },
    ],
    moreExamples: [
      { it: "Escrevo-te quando chegar.", es: "Te escribo cuando llegue. (PT: pronome depois)" },
      { it: "Não to posso dizer agora.", es: "No te lo puedo decir ahora. (to = te+o)" },
      { it: "Vê-lo-ei amanhã. (literário)", es: "Lo veré mañana. (mesóclise clássica)" },
    ],
    drills: {
      transform: [
        { q: "Reordena (PE): «Te empresto o livro.»", options: ["Empresto-to.", "Empresto-te-o o livro.", "To empresto livro."], answer: 0, explain: "ênclise + contração: emprestar + te + o = empresto-to." },
        { q: "Contração: dizer + te + o =", options: ["dizer-to", "dizer-te-o separado", "dizer-o-te"], answer: 0, explain: "te + o fundem-se em TO." },
      ],
      errors: [
        { q: "Corrige: «Me dá um café, por favor.» (PE)", options: ["Dá-me um café, por favor.", "Me dá café dá-me.", "Dá um café me por favor."], answer: 0, explain: "Nunca pronome átono a abrir frase em PE: dá-me." },
      ],
    },
  },
  "pt-cu-c1-11": {
    tables: [
      {
        title: "Concessivas avançadas",
        headers: ["Concessiva", "Estrutura", "Exemplo"],
        rows: [
          ["por mais que + conjuntivo", "por más que…", "Por mais que insistas, não mudo de ideias."],
          ["por muito que + conjuntivo", "por mucho que…", "Por muito que custe, vale a pena."],
          ["não obstante + sustantivo", "no obstante + sust.", "Não obstante o atraso, entregámos."],
          ["mesmo que + conjuntivo", "aunque… (hipotético)", "Mesmo que chova, vamos."],
          ["ainda quando + conjuntivo", "aun cuando…", "Ainda quando fosse fácil, recusaria."],
        ],
        note: "«Por mais que + conjuntivo» é o «por más que» espanhol — e admite variação: por muito que. «Não obstante» rege substantivo (não obstante o atraso = no obstante el retraso), mais formal que «apesar de».",
      },
    ],
    moreExamples: [
      { it: "Por mais que estude, o article fica difícil.", es: "Por más que estudie, el artículo queda difícil." },
      { it: "Não obstante as críticas, a obra vingou.", es: "No obstante las críticas, la obra prosperó." },
      { it: "Mesmo que me peças, não vou.", es: "Aunque me lo pidas, no voy." },
    ],
    drills: {
      transform: [
        { q: "Concessiva: «___ ___ que ___ (insistir), não mudo.»", options: ["Por mais / insistas", "Por mais / insistes", "Por más / insistir"], answer: 0, explain: "por mais que + conjuntivo: insistas." },
        { q: "Formal com substantivo: «___ ___ o atraso, entregámos.»", options: ["Não obstante", "Nao obstante", "Apesar de"], answer: 0, explain: "não obstante + o + sustantivo (grafia: -nte; «apesar de» pediria «do»)." },
      ],
      errors: [
        { q: "Corrige: «Por mais que custa, vale a pena.»", options: ["Por mais que custe, vale a pena.", "Por mais que custará, vale.", "Por mais custando, vale a pena."], answer: 0, explain: "por mais que + conjuntivo: custe." },
      ],
    },
  },
  "pt-cu-c1-12": {
    tables: [
      {
        title: "Síntese C1: os três motores retóricos",
        headers: ["Motor", "Ferramenta", "Efeito"],
        rows: [
          ["nominalização", "a implementação da política", "densidade, tom académico"],
          ["clivagem", "É a política que falhou.", "foco cirúrgico"],
          ["conjuntivo retórico", "que eu saiba · caso subsista", "prudência elegante"],
          ["combinação", "O que falhou foi a implementação.", "clivagem + nominalização"],
          ["fecho", "Em síntese, …", "sela o argumento"],
        ],
        note: "O C1 português mobiliza os três motores em cadeia: nominaliza (a implementação), cliva (é… que) e matiza com conjuntivo (que eu saiba). «O que falhou foi a implementação» — dez palavras, dois motores, um argumento fechado.",
      },
    ],
    moreExamples: [
      { it: "O que a análise revela é uma falha estrutural.", es: "Lo que el análisis revela es una falla estructural." },
      { it: "É nesse contexto que a proposta ganha sentido.", es: "Es en ese contexto donde la propuesta cobra sentido." },
      { it: "Em síntese, cabe repensar o modelo.", es: "En síntesis, cabe repensar el modelo." },
    ],
    drills: {
      transform: [
        { q: "Combina: «A política falhou.» (clivagem, foco na política)", options: ["É a política que falhou.", "A política é que falhou-a.", "Foi a política que falhou ontem sim."], answer: 0, explain: "É + foco + que + verbo." },
        { q: "Nominaliza: «Decidimos rapidamente.» →", options: ["a decisão rápida", "o rápido decidir nosso", "a rapidamente decisão"], answer: 0, explain: "decisão (sust.) + rápida (adj.)." },
      ],
      errors: [
        { q: "Corrige: «O que a análise revela são uma falha.»", options: ["O que a análise revela é uma falha.", "O que a análise revela são falhas duas.", "O que revela a análise é falha uma."], answer: 0, explain: "O verbo ser concorda com o foco: é UMA falha." },
      ],
    },
  },
};
