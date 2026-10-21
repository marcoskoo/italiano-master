import type { CbGrammarPack } from "../cb-rules";

/* ═══ PT B2 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════ */

export const PT_CB_RULES_B2: Record<string, CbGrammarPack> = {
  "pt-cu-b2-01": {
    tables: [
      {
        title: "Conectores contrastivos e concessivos",
        headers: ["Conector", "Estrutura", "Exemplo"],
        rows: [
          ["no entanto / contudo", "novo período", "O teletrabalho poupa tempo. No entanto, isola."],
          ["embora + conjuntivo", "embora + subjuntivo", "Embora goste de casa, sinto falta da equipa."],
          ["apesar de + infinitivo/sust.", "apesar de gostar / apesar do frio", "Apesar de estar longe, vou."],
          ["mesmo assim", "depois do contraste", "Fica caro; mesmo assim, vale a pena."],
          ["✗", "«apesar de que» (raro) · «a pesar de»", "→ apesar de, sem a"],
        ],
        note: "Três motores: no entanto (= sin embargo), embora + conjuntivo (embora GOSTE — subjuntivo obrigatório, como «aunque guste») e apesar de + infinitivo («a pesar de estar», igual ao espanhol). Não confundir: «a pesar» é espanhol; português é «apesar».",
      },
    ],
    moreExamples: [
      { it: "O relatório está pronto, embora falte a conclusão.", es: "El informe está listo, aunque falte la conclusión." },
      { it: "Apesar de trabalhar muito, não reclama.", es: "A pesar de trabajar mucho, no se queja." },
      { it: "Contudo, os dados dizem outra coisa.", es: "Sin embargo, los datos dicen otra cosa." },
    ],
    drills: {
      transform: [
        { q: "Conjuntivo depois de embora: «Embora ___ (ser) caro, compro.»", options: ["seja", "é", "será"], answer: 0, explain: "embora + presente do conjuntivo: seja." },
        { q: "Apesar de + ? «Apesar de ___ (chover), saí.»", options: ["chover", "chove", "choveu"], answer: 0, explain: "apesar de + infinitivo (invariável)." },
      ],
      errors: [
        { q: "Corrige: «A pesar de gostar, não vou.»", options: ["Apesar de gostar, não vou.", "Apezar de gostar, não vou.", "Em apesar de gostar, não vou."], answer: 0, explain: "Sem «a» inicial: apesar de." },
      ],
    },
  },
  "pt-cu-b2-02": {
    tables: [
      {
        title: "Persuasão suavizada + conjuntivo de influência",
        headers: ["Fórmula", "Exemplo", "Espanhol"],
        rows: [
          ["sugiro que + conjuntivo", "Sugiro que comecemos pelo orçamento.", "sugiero que empecemos"],
          ["achava que podíamos…", "Achava que podíamos adiar.", "creía que podíamos"],
          ["e se + imperfeito?", "E se adiassem a decisão?", "¿y si aplazaran?"],
          ["gostaria que + conjuntivo", "Gostaria que considerasse a opção B.", "me gustaría que considerara"],
          ["✗", "«sugiro começarmos» (ok mas formal)", "→ sugiro que comecemos (mais claro)"],
        ],
        note: "Verbos de vontade e influência (sugerir, querer, gostar, esperar) pedem conjuntivo: «sugiro que SEJA» = «sugiero que sea». Para suavizar, o português adora o condicional: «gostaria», «achava que» — a persuasão nunca grita.",
      },
    ],
    moreExamples: [
      { it: "Gostaria que reflectisse sobre a proposta.", es: "Me gustaría que reflexionara sobre la propuesta." },
      { it: "Sugiro que falemos primeiro com o cliente.", es: "Sugiero que hablemos primero con el cliente." },
      { it: "E se testássemos por um mês?", es: "¿Y si probáramos por un mes?" },
    ],
    drills: {
      transform: [
        { q: "Conjuntivo: «Sugiro que ___ (começar) pelo orçamento.»", options: ["comecemos", "começamos", "começaremos"], answer: 0, explain: "sugiro que + conjuntivo: comecemos (nós)." },
        { q: "Suaviza: «Quero que mudas a data.»", options: ["Gostaria que mudasses a data.", "Quero que mudas já a data!", "Muda a data, por favor agora."], answer: 0, explain: "gostaria + conjuntivo (mudasses) = persuasão suave." },
      ],
      errors: [
        { q: "Corrige: «Espero que chega a tempo.»", options: ["Espero que chegue a tempo.", "Espero que chegar a tempo.", "Espero que vai chegar tempo."], answer: 0, explain: "esperar que + conjuntivo: chegue." },
      ],
    },
  },
  "pt-cu-b2-03": {
    tables: [
      {
        title: "A gramática do humor português",
        headers: ["Ferramenta", "Como funciona", "Exemplo"],
        rows: [
          ["estar a gozar", "«¿te estás burlando?»", "Estás a gozar comigo, certo?"],
          ["imperfeito narrativo", "contar com distância cómica", "E ele a dizer que estava tudo bem…"],
          ["e o resultado? / e pronto", "timing de punchline", "Esqueci-me das chaves. E pronto."],
          ["olha… / pois…", "partículas de ironia", "Pois, e eu sou o primeiro-ministro."],
          ["«que eu saiba»", "ironia com subjuntivo", "É o melhor restaurante, que eu saiba."],
        ],
        note: "«Estar a gozar» = estar de broma: o gozo português é elogio e piada ao mesmo tempo. O imperfeito narrativo («e ele a dizer…») é câmera lenta cómica; as partículas «pois» e «e pronto» fazem o timing — o humor mora na pontuação falada.",
      },
    ],
    moreExamples: [
      { it: "Estás a gozar! Este preço é um roubo.", es: "¡Estás de broma! Este precio es un robo." },
      { it: "E eu a esperar duas horas. E pronto.", es: "Y yo esperando dos horas. Y ya." },
      { it: "Pois, claro, e eu sou o Ronaldo.", es: "Sí, claro, y yo soy Ronaldo." },
    ],
    drills: {
      transform: [
        { q: "Traduz a ironia: «¿Me estás tomando el pelo?» →", options: ["Estás a gozar comigo?", "Estás gozando de mim a?", "Estás de gozo comigo?"], answer: 0, explain: "estar a gozar (com alguém) = tomar el pelo." },
        { q: "Fecha a anedota com timing: «…e o elevador avariou. ___»", options: ["E pronto.", "E portanto assim consequentemente.", "Fim do parágrafo."], answer: 0, explain: "«E pronto» = cierre coloquial (y ya)." },
      ],
      errors: [
        { q: "Corrige: «Estou de gozar contigo.» (PE)", options: ["Estou a gozar contigo.", "Estou gozando de ti contigo.", "Tenho gozo com você."], answer: 0, explain: "estar A + infinitivo (nunca «de gozar»)." },
      ],
    },
  },
  "pt-cu-b2-04": {
    tables: [
      {
        title: "Hedging com futuro e condicional",
        headers: ["Ferramenta", "Efeito", "Exemplo"],
        rows: [
          ["poderá + infinitivo", "possibilidade formal", "Poderá dizer-se que foi um êxito parcial."],
          ["poder-se-á dizer (mesóclise)", "muito formal/escrito", "Poder-se-á afirmar que o efeito é real."],
          ["poderia ser", "atenuação", "Poderia ser uma fase transitória."],
          ["tender a + infinitivo", "tendência", "Os preços tendem a estabilizar."],
          ["em princípio / talvez", "matiz de dúvida", "Em princípio, funciona; talvez precise de ajustes."],
        ],
        note: "O futuro com valor modal (poderá, deverá) é o hedging institucional: «poderá dizer-se» = «podría decirse». A mesóclise (poder-SE-á) é literária e legal — reconheça em contratos, não a use no chat. Em princípio/talvez completam o kit da prudência.",
      },
    ],
    moreExamples: [
      { it: "O mercado deverá reagir na próxima semana.", es: "El mercado debería reaccionar la próxima semana." },
      { it: "Tende a ser assim nos setores novos.", es: "Suele ser así en los sectores nuevos. (tendência)" },
      { it: "Em princípio, a ideia é válida.", es: "En principio, la idea es válida." },
    ],
    drills: {
      transform: [
        { q: "Hedge formal: «___ dizer-se que o projeto é viável.»", options: ["Poderá", "Pode", "Pôde"], answer: 0, explain: "poderá = futuro modal de prudência." },
        { q: "Identifica a mesóclise: «Poder-se-á concluir que…» é:", options: ["futuro com pronome dentro do verbo", "erro de grafia", "passado simples"], answer: 0, explain: "mesóclise: o pronome «se» entra no futuro (poder-SE-á)." },
      ],
      errors: [
        { q: "Corrige: «Poderá ser dizer que foi um erro.»", options: ["Poderá dizer-se que foi um erro.", "Poderá dizer que foi um erro ser.", "Poderá se dizer que foi erro um."], answer: 0, explain: "poderá dizer-SE (pronome apôs o infinitivo)." },
      ],
    },
  },
  "pt-cu-b2-05": {
    tables: [
      {
        title: "Condicionais mistas + suavização negocial",
        headers: ["Tipo", "Padrão", "Exemplo"],
        rows: [
          ["causa passada → efeito presente", "se + mais-que-perfeito → condicional", "Se tivéssemos assinado em maio, já estaríamos operacionais."],
          ["causa presente → efeito passado", "se + imperfeito conj. → condicional composto", "Se eu fosse mais atento, não teria perdido o ficheiro."],
          ["receio que + conjuntivo", "diplomacia", "Receio que não seja possível."],
          ["em princípio / salvo imprevistos", "reserva formal", "Em princípio, aceitamos; salvo imprevistos."],
          ["talvez + conjuntivo", "dúvida", "Talvez consigamos rever os termos."],
        ],
        note: "O misto cruza tempos: «se tivéssemos assinado (passado), estarÍAMOS (presente)». E a negociação portuguesa fala com subjuntivo: «receio que NÃO SEJA possível» — o não já vai dentro, suavizado.",
      },
    ],
    moreExamples: [
      { it: "Se tivéssemos começado antes, teríamos terminado.", es: "Si hubiéramos empezado antes, habríamos terminado." },
      { it: "Receio que o prazo seja exíguo.", es: "Temo que el plazo sea exiguo." },
      { it: "Talvez consigamos chegar a um meio-termo.", es: "Quizá consigamos llegar a un punto medio." },
    ],
    drills: {
      transform: [
        { q: "Condicional mista: «Se ___ (assinar) em maio, já estaríamos operacionais.»", options: ["tivéssemos assinado", "assináramos só", "assinaríamos"], answer: 0, explain: "mais-que-perfeito (se) → condicional (resultado presente)." },
        { q: "Suaviza: «Não é possível.» (negociação)", options: ["Receio que não seja possível.", "É impossível e ponto.", "Não, jamás, nunca."], answer: 0, explain: "receio que + conjuntivo entrega o não com luvas." },
      ],
      errors: [
        { q: "Corrige: «Receio que não é possível.»", options: ["Receio que não seja possível.", "Receio que não ser possível.", "Receio de que não é possível."], answer: 0, explain: "recear que + conjuntivo: seja." },
      ],
    },
  },
  "pt-cu-b2-06": {
    tables: [
      {
        title: "Verbos preposicionados do networking",
        headers: ["Verbo + preposição", "Significado", "Exemplo"],
        rows: [
          ["deparar-se com", "encontrarse con", "Deparei-me com um problema."],
          ["dar-se bem com", "llevarse bien con", "Dou-me bem com toda a equipa."],
          ["pôr em contacto com", "poner en contacto con", "Pus-te em contacto com o João."],
          ["contar com", "contar con", "Contamos contigo para o projeto."],
          ["despedir-se de", "despedirse de", "Despediu-se da chefia."],
        ],
        note: "A preposição muda o mundo: «dar-se COM» (bien con alguien) vs «dar-se» só (darse). «Contar com» = contar con — mas cuidado com «depender DE» (depender de, igual). Guarde os pares como blocos: verbo + preposição + pronome grudo (dou-ME bem).",
      },
    ],
    moreExamples: [
      { it: "Preciso de me despedir da Marta.", es: "Necesito despedirme de Marta." },
      { it: "Ele deu-se mal com o novo diretor.", es: "Él se llevó mal con el nuevo director." },
      { it: "Podem contar connosco.", es: "Pueden contar con nosotros. (connosco = com nós)" },
    ],
    drills: {
      transform: [
        { q: "Completa: «Dou-me ___ bem com os colegas.»", options: ["muito", "de", "a"], answer: 0, explain: "dar-se MUITO bem com (intensificador no meio)." },
        { q: "Preposição: «Pôs-me ___ contacto com a empresa.»", options: ["em", "a", "de"], answer: 0, explain: "pôr ALGUÉM em contacto com." },
      ],
      errors: [
        { q: "Corrige: «Contamos com ti para o projeto? Sim, contamos de ti.»", options: ["Sim, contamos contigo.", "Sim, contamos com ti de.", "Sim, contamos a ti."], answer: 0, explain: "com + ti = contigo (contração obrigatória)." },
      ],
    },
  },
  "pt-cu-b2-07": {
    tables: [
      {
        title: "Tempos narrativos + especulação no passado",
        headers: ["Ferramenta", "Uso", "Exemplo"],
        rows: [
          ["perfeito simples", "evento principal", "O carro desapareceu à meia-noite."],
          ["imperfeito", "cenário", "Chovia quando ela saiu."],
          ["mais-que-perfeito", "passado anterior", "Já tinha saído quando chegámos."],
          ["deve ter + particípio", "dedução (quase certeza)", "Deve ter fugido com o carro."],
          ["podia ter / poderia ter", "possibilidade não realizada", "Podia ter sido o vigia."],
        ],
        note: "«Deve ter fugido» = «debe de haber huido» — a dedução com deve + ter + particípio é o mesmo dos podcasts de true crime espanhóis. «Podia ter sido» abre hipóteses: pudo haber sido. O mais-que-perfeito coloca o passado antes do passado.",
      },
    ],
    moreExamples: [
      { it: "Deve ter saído antes das dez.", es: "Debe de haber salido antes de las diez." },
      { it: "Podia ter havido uma testemunha.", es: "Podría haber habido un testigo." },
      { it: "Já tinha desligado o telemóvel de propósito.", es: "Ya había apagado el móvil a propósito." },
    ],
    drills: {
      transform: [
        { q: "Dedução: «O carro ___ ___ ___ (deve + ter + fugir).»", options: ["deve ter fugido", "deve ter fugar", "deve de ter fugido só"], answer: 0, explain: "deve ter + particípio: fugido." },
        { q: "Hipótese não realizada: «___ ___ sido o vizinho.» (podia)", options: ["Podia ter", "Podia", "Podia a ter"], answer: 0, explain: "podia ter + particípio." },
      ],
      errors: [
        { q: "Corrige: «Ele deve ter saiu cedo.»", options: ["Ele deve ter saído cedo.", "Ele deve ter sair cedo.", "Ele deve saiu ter cedo."], answer: 0, explain: "deve ter + PARTICÍPIO (saído)." },
      ],
    },
  },
  "pt-cu-b2-08": {
    tables: [
      {
        title: "Verbos de realização + conjuntivo de valoração",
        headers: ["Categoria", "Verbos", "Exemplo"],
        rows: [
          ["liderança", "liderar · coordenar · dirigir", "Liderei uma equipa de doze."],
          ["execução", "assegurar · implementar · entregar", "Assegurei a migração do sistema."],
          ["valor subjectiva", "é importante que + conj.", "É importante que haja métricas."],
          ["valor subjectiva", "é fundamental que + conj.", "É fundamental que acompanhes o processo."],
          ["vago ✗", "«fiz um bocadinho de tudo»", "→ verbos de realização concretos"],
        ],
        note: "Nas entrevistas portuguesas, troque «ayudé» por verbos de realização: assegurei, liderei, implementei. E as valorações subjetivas (é importante que…) pedem CONJUNTIVO: «é importante que HAJA» — como «es importante que haya».",
      },
    ],
    moreExamples: [
      { it: "Implementei um novo fluxo de atendimento.", es: "Implementé un nuevo flujo de atención." },
      { it: "É essencial que venhamos preparados.", es: "Es esencial que vengamos preparados." },
      { it: "Coordenei a campanha de inverno.", es: "Coordiné la campaña de invierno." },
    ],
    drills: {
      transform: [
        { q: "Substitui «ayudé»: «___ (assegurar) a logística do evento.»", options: ["Assegurei", "Ajudei a assegurar", "Fiz ajuda de"], answer: 0, explain: "Verbo de realização direto: assegurei." },
        { q: "Conjuntivo: «É fundamental que ___ (haver) métricas.»", options: ["haja", "há", "havera"], answer: 0, explain: "é fundamental que + conjuntivo: haja." },
      ],
      errors: [
        { q: "Corrige: «É importante que os dados estão limpos.»", options: ["É importante que os dados estejam limpos.", "É importante que os dados esteir limpos.", "É importante os dados estar limpos."], answer: 0, explain: "valor subjectiva → conjuntivo: estejam." },
      ],
    },
  },
  "pt-cu-b2-09": {
    tables: [
      {
        title: "Adjetivos avaliativos + advérbios de grau",
        headers: ["Grau", "Advérbios", "Exemplo"],
        rows: [
          ["suave", "ligeiramente · algo · um pouco", "ligeiramente caro"],
          ["neutro", "bastante · realmente", "bastante competente"],
          ["forte", "absolutamente · francamente", "absolutamente brilhante"],
          ["limitador", "até certo ponto · no conjunto", "até certo ponto eficaz"],
          ["conotação", "eficaz (neutro) vs eficiente (elogio técnico)", "uma solução eficiente"],
        ],
        note: "Os graus portugueses espelham o espanhol (ligeramente = ligeramente; bastante = bastante; absolutamente = absolutamente). A nuança: «eficaz» (consegue o efeito) vs «eficiente» (com os mínimos recursos) — elogio técnico mais preciso.",
      },
    ],
    moreExamples: [
      { it: "O serviço foi francamente excelente.", es: "El servicio fue francamente excelente." },
      { it: "A relação qualidade-preço é razoável.", es: "La relación calidad-precio es razonable." },
      { it: "Ficámos bastante satisfeitos, no conjunto.", es: "Quedamos bastante satisfechos, en conjunto." },
    ],
    drills: {
      transform: [
        { q: "Suaviza: «A comida foi má.» →", options: ["A comida foi algo dececionante.", "A comida foi absolutamente péssima!", "A comida foi muito má má."], answer: 0, explain: "algo + adjetivo negativo suave." },
        { q: "Elogio técnico: «o processo gasta poucos recursos» = ___", options: ["eficiente", "eficaz", "efetuoso"], answer: 0, explain: "eficiente = bom resultado com poucos recursos." },
      ],
      errors: [
        { q: "Corrige: «O jantar foi absolutamente razoável.» (mistura de graus)", options: ["O jantar foi bastante razoável.", "O jantar foi absolutamente espectacular.", "O jantar foi razoável absolutamente mesmo."], answer: 0, explain: "razoável é grau médio: emparelhe com bastante." },
      ],
    },
  },
  "pt-cu-b2-10": {
    tables: [
      {
        title: "Idiomatismos com verbos de alta frequência",
        headers: ["Verbo", "Expressão", "Significado"],
        rows: [
          ["ser", "estar à vontade", "sentirse cómodo (¡con estar!)"],
          ["estar", "estar com a corda toda", "estar en plena forma"],
          ["ficar", "ficar a dever", "quedar en deuda / deber"],
          ["pôr", "pôr as mãos à obra", "ponerse manos a la obra"],
          ["dar", "dar-se ao trabalho", "tomarse la molestia"],
        ],
        note: "Os portugueses vivem em SER/ESTAR/FICAR/PÔR/DAR como os españoles en ser/estar/quedar/poner/dar — mas os blocos mudam: «estás à vontade» (não «te sientes à vontade»), «fica a dever» (quedar en deuda com ficar!). Aprenda o bloco inteiro, nunca palavra a palavra.",
      },
    ],
    moreExamples: [
      { it: "Estou com a corda toda hoje!", es: "¡Estoy en plena forma hoy!" },
      { it: "Vamos pôr as mãos à obra.", es: "Vamos a ponernos manos a la obra." },
      { it: "Ficámos a dever uma explicação.", es: "Quedamos en deuda una explicación." },
    ],
    drills: {
      transform: [
        { q: "Completa o idiomatismo: «Estás ___ ___ ___?» (¿estás en forma?)", options: ["com a corda toda", "com a corda inteira", "de corda"], answer: 0, explain: "estar com a corda toda = estar en forma." },
        { q: "Traduz: «ponted manos a la obra»", options: ["pôr as mãos à obra", "pôr mãos na obra", "dar as mãos à obra"], answer: 0, explain: "pôr as mãos À obra (à, con acento)." },
      ],
      errors: [
        { q: "Corrige: «Fico a dever uma desculpa.» (contexto: quedamos en deuda)", options: ["Ficamos a dever uma desculpa.", "Fico a dar uma desculpa.", "Fico em dever uma desculpa."], answer: 0, explain: "fica(r) a dever = quedar en deuda (bloco fixo)." },
      ],
    },
  },
  "pt-cu-b2-11": {
    tables: [
      {
        title: "Passiva com agente + causa e consequência",
        headers: ["Estrutura", "Fórmula", "Exemplo"],
        rows: [
          ["passiva presente", "é/são + particípio", "O acordo é revisto anualmente."],
          ["passiva com agente", "… + por + agente", "O acordo foi escrito pela equipa jurídica."],
          ["causa", "devido a / por causa de + sust.", "Devido à procura, faltam bilhetes."],
          ["consequência", "levar a / resultar em", "O atraso levou a protestos."],
          ["como consequência", "novo período", "Como consequência, os preços subiram."],
        ],
        note: "A passiva com «por» marca quem agiu: «foi escrita PELA equipa» (por + a = pela). «Devido a» = debido a; «por causa de» tem tom mais negativo (por causa do atraso). «Levar a» = llevar a — mesmo motor causal.",
      },
    ],
    moreExamples: [
      { it: "A rede foi modernizada em 2020.", es: "La red fue modernizada en 2020." },
      { it: "Devido à seca, a produção caiu.", es: "Debido a la sequía, la producción cayó." },
      { it: "A mudança resultou em poupança.", es: "El cambio resultó en ahorro." },
    ],
    drills: {
      transform: [
        { q: "Passiviza: «A equipa jurídica escreveu o acordo.»", options: ["O acordo foi escrito pela equipa jurídica.", "O acordo foi escrito por a equipa jurídica.", "O acordo é escrito desde a equipa jurídica."], answer: 0, explain: "foi + particípio + por + agente (pela = por + a)." },
        { q: "Liga causa e efeito: «procura alta» → «falta de bilhetes»", options: ["Devido à procura alta, faltam bilhetes.", "Devido a procura alta, faltam bilhetes.", "Devido a procura, faltando bilhetes."], answer: 0, explain: "devido A + A procura = devido À (crase)." },
      ],
      errors: [
        { q: "Corrige: «O acordo foi escrevido pela equipa.»", options: ["O acordo foi escrito pela equipa.", "O acordo foi escrito pela equipe escrever.", "O acordo foi a escrever pela equipa."], answer: 0, explain: "escrever → escrito (particípio irregular)." },
      ],
    },
  },
  "pt-cu-b2-12": {
    tables: [
      {
        title: "A gramática do pitch",
        headers: ["Momento do pitch", "Tempo/estrutura", "Exemplo"],
        rows: [
          ["a proposta", "presente", "Somos uma plataforma que liga produtores a restaurantes."],
          ["a tração", "perfeito composto (repetição) / simples", "Crescemos 18% ao mês desde o arranque."],
          ["o motor", "passiva", "O crescimento é impulsionado pelo boca-a-boca."],
          ["o pedido (ask)", "condicional", "O financiamento seria usado para abrir duas cidades."],
          ["o fecho", "futuro", "Com o vosso apoio, chegaremos a dez cidades."],
        ],
        note: "O pitch português segue o mapa: proposta no presente, tração no perfeito (crescemos = hemos crecido), o ask no condicional (seria usado) e o fecho no futuro. «Boca-a-boca» com hífens — o marketing também é ortografia.",
      },
    ],
    moreExamples: [
      { it: "Assinámos doze produtores este trimestre.", es: "Firmamos doce productores este trimestre." },
      { it: "A procura é movida pelos clientes que repetem.", es: "La demanda la impulsan los clientes que repiten." },
      { it: "Esta ronda permitiria contratar dois engenheiros.", es: "Esta ronda permitiría contratar a dos ingenieros." },
    ],
    drills: {
      transform: [
        { q: "O ask do pitch: «Os fundos ___ (ser) usados para expandir.»", options: ["seriam", "serão", "são"], answer: 0, explain: "O pedido vai no condicional: seriam." },
        { q: "A tração: «___ (crescer) 18% ao mês desde o arranque.»", options: ["Crescemos", "Crescíamos", "Vamos crescendo sempre"], answer: 0, explain: "Perfeito simples com «desde o arranque»: crescemos." },
      ],
      errors: [
        { q: "Corrige: «Somos uma plataforma quem liga produtores.»", options: ["Somos uma plataforma que liga produtores.", "Somos uma plataforma quem liga a produtores.", "Somos plataforma a quem liga produtores."], answer: 0, explain: "plataforma = coisa → que (quem só para pessoas)." },
      ],
    },
  },
};
