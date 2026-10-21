import type { CbGrammarPack } from "../cb-rules";

/* ═══ PT A2 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════ */

export const PT_CB_RULES_A2: Record<string, CbGrammarPack> = {
  "pt-cu-a2-01": {
    tables: [
      {
        title: "Pretérito perfeito simples · os irregulares de ouro",
        headers: ["Infinitivo", "eu", "ele/ela", "nós"],
        rows: [
          ["ir", "fui", "foi", "fomos"],
          ["ter", "tive", "teve", "tivemos"],
          ["ver", "vi", "viu", "vimos"],
          ["fazer", "fiz", "fez", "fizemos"],
          ["estar", "estive", "esteve", "estivemos"],
          ["ser (igual a ir!)", "fui", "foi", "fomos"],
        ],
        note: "Cuidado: ser e ir partilham as mesmas formas no perfeito (fui, foi, fomos) — como «fui/era» em espanhol não: aqui o contexto decide. «Fizemos» com z, nunca «fizeramos» no perfeito simples.",
      },
    ],
    moreExamples: [
      { it: "No sábado fui a Sintra e almoçámos lá.", es: "El sábado fui a Sintra y almorzamos allí." },
      { it: "Tivemos um fim de semana calmo.", es: "Tuvimos un fin de semana tranquilo." },
      { it: "Fiz um bolo para os meus pais.", es: "Hice un pastel para mis padres." },
    ],
    drills: {
      transform: [
        { q: "Completa: «Eu ___ (fazer) um bolo.»", options: ["fiz", "fazia", "faria"], answer: 0, explain: "fazer → fiz (perfeito simples, com z)." },
        { q: "Passa para nós: «Eu tive um dia calmo.»", options: ["Nós tivemos um dia calmo.", "Nós tivémos um dia calmo.", "Nós tinhamos um dia calmo."], answer: 0, explain: "ter → tive → tivemos (PE grafa tivemos, sem acento)." },
      ],
      errors: [
        { q: "Corrige: «Nós fizeramos uma excursão.» (perfeito simples)", options: ["Nós fizemos uma excursão.", "Nós fizeramos uma excursão ontem sim.", "Nós fizémos uma excursão."], answer: 0, explain: "Perfeito simples de fazer, nós = fizemos." },
      ],
    },
  },
  "pt-cu-a2-02": {
    tables: [
      {
        title: "Pedir na pastelaria: queria, pode ser?",
        headers: ["Fórmula", "Registro", "Exemplo"],
        rows: [
          ["queria + substantivo", "cortês padrão", "Queria uma meia de leite."],
          ["pode ser + substantivo?", "informal, dúvida amável", "Pode ser um croissant misto?"],
          ["para mim + substantivo", "direto e neutro", "Para mim, um galão."],
          ["dava-me + substantivo", "coloquial", "Dava-me dois pastéis."],
          ["✗", "«eu quero!» ao garçom", "soa exigente"],
        ],
        note: "O português pede com o IMPERFEITO: queria, dava, podia — é o «quisiera» espanhol, mas muito mais frequente. «Pode ser?» é o jeitinho português de propor sem impor.",
      },
    ],
    moreExamples: [
      { it: "Queria um café duplo, se faz favor.", es: "Quisiera un café doble, por favor." },
      { it: "Pode ser à mesa, por favor?", es: "¿Puede ser en la mesa, por favor?" },
      { it: "Dava-me uma água fresca.", es: "Me daría un agua fresca." },
    ],
    drills: {
      transform: [
        { q: "Pede com cortesia: «Um cappuccino!»", options: ["Queria um cappuccino, se faz favor.", "Eu quero um cappuccino!", "Cappuccino para mim agora."], answer: 0, explain: "queria = imperfeito cortês." },
        { q: "Propõe sem impor: «___ uma torrada?»", options: ["Pode ser", "Poderá ser", "Vai ser"], answer: 0, explain: "Pode ser…? = proposta amável." },
      ],
      errors: [
        { q: "Corrige (registo): «Eu quero dois pastéis!»", options: ["Queria dois pastéis, se faz favor.", "Eu quero querendo dois pastéis.", "Tem de me dar dois pastéis."], answer: 0, explain: "quero soa exigente; queria é o padrão." },
      ],
    },
  },
  "pt-cu-a2-03": {
    tables: [
      {
        title: "Comparativos e superlativos + demonstrativos",
        headers: ["Grau", "Padrão", "Exemplo"],
        rows: [
          ["comparativo", "mais + adj + do que", "Esta camisa é mais barata do que essa."],
          ["igualdade", "tão + adj + como", "As lojas lá são tão modernas como as daqui."],
          ["superlativo relativo", "o mais + adj + de", "Aquele casaco é o mais caro da loja."],
          ["irregular: bom/mau", "melhor / pior", "Esta aqui é a melhor da loja."],
          ["3 distâncias", "este (aqui) · esse (aí) · aquele (lá)", "este casaco / essa camisa / aquele casaco"],
        ],
        note: "Mais fácil para hispanohablantes: a lógica é idêntica (más… que → mais… do que; tan… como → tão… como). Só o «do que» é a surpresa: em PE é obrigatório, não opcional.",
      },
    ],
    moreExamples: [
      { it: "Este bolo é tão bom como o da avó.", es: "Este pastel es tan bueno como el de la abuela." },
      { it: "Essa é a pior fila da cidade.", es: "Esa es la peor fila de la ciudad." },
      { it: "Aquele é o mais barato de todos.", es: "Aquel es el más barato de todos." },
    ],
    drills: {
      transform: [
        { q: "Completa: «Este casaco é mais caro ___ esse.»", options: ["do que", "que", "de que"], answer: 0, explain: "mais… do que (obrigatório em PE)." },
        { q: "Igualdade: «A loja é ___ grande ___ a daqui.»", options: ["tão / como", "mais / do que", "tão / do que"], answer: 0, explain: "tão + adj + como." },
      ],
      errors: [
        { q: "Corrige: «Aquele casaco é o mais caro que a loja.»", options: ["Aquele casaco é o mais caro da loja.", "Aquele casaco é o mais caro do que loja.", "Aquele casaco é mais o caro da loja."], answer: 0, explain: "Superlativo relativo: o mais… DE." },
      ],
    },
  },
  "pt-cu-a2-04": {
    tables: [
      {
        title: "Pretérito imperfeito vs perfeito simples",
        headers: ["", "Imperfeito", "Perfeito simples"],
        rows: [
          ["Trabalho", "decorado, hábito, descrição", "evento único, terminado"],
          ["Sinal", "quando, enquanto, sempre", "ontem, no sábado, às oito"],
          ["Chuva", "chovia muito (cenário)", "choveu às oito (evento)"],
          ["Ser/ir", "era linda · ia contente", "foi lindo · fui ao Porto"],
          ["Fórmula história", "imperfeito pinta, perfeito conta", "Quando cheguei, chovia muito."],
        ],
        note: "Espelho exato do imperfecto/pretérito espanhol: «cuando llegué, llovía» → quando cheguei, chovia. O imperfeito é a câmera lenta; o perfeito é o acontecimento. Havia muita gente = cenário.",
      },
    ],
    moreExamples: [
      { it: "O comboio partiu às oito, mas eu dormia.", es: "El tren partió a las ocho, pero yo dormía." },
      { it: "Havia muita gente na estação.", es: "Había mucha gente en la estación." },
      { it: "Eu ia contente; de repente, tudo mudou.", es: "Yo iba contento; de repente, todo cambió." },
    ],
    drills: {
      transform: [
        { q: "Imperfeito ou perfeito? «Quando cheguei ao Porto, ___ (chover) muito.»", options: ["chovia", "choveu", "chovido"], answer: 0, explain: "Cenário em curso → imperfeito chovia." },
        { q: "Escolhe: «O comboio ___ (partir) às oito.» (feito único)", options: ["partiu", "partia", "parte"], answer: 0, explain: "Evento terminado com hora → partiu." },
      ],
      errors: [
        { q: "Corrige: «A cidade foi linda e tinha muita gente.» (descrição)", options: ["A cidade era linda e havia muita gente.", "A cidade era linda e houve muita gente.", "A cidade era linda e tem muita gente."], answer: 0, explain: "Descrição → imperfeito: era, havia." },
      ],
    },
  },
  "pt-cu-a2-05": {
    tables: [
      {
        title: "Futuro próximo (ir + inf.) vs futuro simples",
        headers: ["Tempo", "Formação", "Exemplo", "Uso"],
        rows: [
          ["futuro próximo", "ir (presente) + infinitivo", "Vou ver o jogo do Benfica.", "plano decidido"],
          ["futuro simples", "infinitivo + ei/ás/á/emos/ão", "O tempo melhorará ao domingo.", "previsão, promessa"],
          ["futuro simples irregular", "ser → será · ter → terá", "Será difícil.", "—"],
          ["nós futuro", "emos (sem acento)", "Vamos jantar → jantaremos", "—"],
          ["✗", "«vou a ver»", "→ vou ver", "—"],
        ],
        note: "O futuro próximo português NÃO leva preposição: «vou ver» (o espanhol «voy a ver» é o calco a evitar). O futuro simples (melhorará) serve para previsões distantes e soa mais formal que o próximo.",
      },
    ],
    moreExamples: [
      { it: "Vamos jantar juntos na sexta?", es: "¿Vamos a cenar juntos el viernes?" },
      { it: "Vai chover no sábado, dizem.", es: "Va a llover el sábado, dicen." },
      { it: "Acho que o tempo melhorará.", es: "Creo que el tiempo mejorará." },
    ],
    drills: {
      transform: [
        { q: "Futuro próximo: «Eu ___ (ver) o jogo.»", options: ["vou ver", "vou a ver", "verei vou"], answer: 0, explain: "ir + infinitivo, SEM a (não é espanhol)." },
        { q: "Futuro simples: «O tempo ___ (melhorar) ao domingo.»", options: ["melhorará", "melhoraria", "vai melhorando"], answer: 0, explain: "infinitivo + á: melhorará." },
      ],
      errors: [
        { q: "Corrige: «Vou a viajar em julho.»", options: ["Vou viajar em julho.", "Vou viajando em julho.", "Vou para viajar em julho."], answer: 0, explain: "Sem preposição: vou viajar." },
      ],
    },
  },
  "pt-cu-a2-06": {
    tables: [
      {
        title: "haver (há) + preposições de lugar",
        headers: ["Preposição", "Exemplo", "Espanhol"],
        rows: [
          ["ao lado de", "A padaria fica ao lado do banco.", "al lado de"],
          ["em frente de", "O café fica em frente do teatro.", "enfrente de"],
          ["entre… e…", "entre o metro e o mercado", "entre… y…"],
          ["perto de / longe de", "É perto da praça.", "cerca de / lejos de"],
          ["atrás de", "O pátio fica atrás do prédio.", "detrás de"],
        ],
        note: "haver no presente é sempre «há» — nunca «han» (calco de «hay» + plural). «Há dois quartos» ✓, «han dois quartos» ✗. As preposições fundem-se com o artigo: de + o = DO.",
      },
    ],
    moreExamples: [
      { it: "Há uma varanda ao lado da cozinha.", es: "Hay un balcón al lado de la cocina." },
      { it: "Não há estacionamento perto do centro.", es: "No hay estacionamiento cerca del centro." },
      { it: "Há duas secretárias junto à janela.", es: "Hay dos escritorios junto a la ventana." },
    ],
    drills: {
      transform: [
        { q: "Completa: «___ dois quartos no andar.»", options: ["Há", "Han", "Hão"], answer: 0, explain: "haver presente = há, invariável." },
        { q: "Funde: «em frente ___ ___ teatro.» (de + o)", options: ["do", "de o", "no"], answer: 0, explain: "em frente do teatro (de + o = do)." },
      ],
      errors: [
        { q: "Corrige: «Han três mercados na zona.»", options: ["Há três mercados na zona.", "Hão três mercados na zona.", "Tem há três mercados."], answer: 0, explain: "haver → há (3ª pessoa singular sempre)." },
      ],
    },
  },
  "pt-cu-a2-07": {
    tables: [
      {
        title: "dever / deveria + infinitivo (saúde)",
        headers: ["Forma", "Força", "Exemplo"],
        rows: [
          ["deve + infinitivo", "conselho firme / dedução", "Deve descansar dois dias."],
          ["deveria + infinitivo", "conselho suave", "Deveria beber mais água."],
          ["não deveria", "advertência", "Não deveria ir trabalhar amanhã."],
          ["ter de + infinitivo", "obrigação", "Tenho de ir à consulta."],
          ["estou com + sintoma", "doença", "Estou com dor de garganta."],
        ],
        note: "«Deberías» = deveria (condicional suave); «debes» = deve. Novidade: em português os sintomas chegam com «estou com»: estou com febre, com tosse — o espanhol «tengo fiebre» não passa.",
      },
    ],
    moreExamples: [
      { it: "Deve tomar os comprimidos depois das refeições.", es: "Debe tomar las pastillas después de las comidas." },
      { it: "Não deveria levantar peso esta semana.", es: "No debería levantar peso esta semana." },
      { it: "Estou com febre desde ontem.", es: "Tengo fiebre desde ayer." },
    ],
    drills: {
      transform: [
        { q: "Conselho suave: «___ (dever) beber mais água.»", options: ["Deveria", "Deve", "Devo"], answer: 0, explain: "deveria = condicional, tom mais suave." },
        { q: "Sintoma em PE: «___ ___ febre.»", options: ["Estou com", "Tenho a", "Há"], answer: 0, explain: "estou com + sintoma." },
      ],
      errors: [
        { q: "Corrige: «Estou a dor de garganta.»", options: ["Estou com dor de garganta.", "Estou de dor de garganta.", "Tenho a dor estar garganta."], answer: 0, explain: "Sintomas: estar COM + substantivo (nunca «a»)." },
      ],
    },
  },
  "pt-cu-a2-08": {
    tables: [
      {
        title: "Contáveis e incontáveis + quanto/quantos",
        headers: ["Tipo", "Pergunta", "Exemplo"],
        rows: [
          ["contável", "quantos/quantas…?", "Quantas azeitonas queres?"],
          ["incontável", "quanto…?", "Quanto azeite precisa?"],
          ["medida + de + incontável", "um copo de vinho", "Meio litro de leite, se faz favor."],
          ["um pouco de / bastante", "incontáveis", "Um pouco de queijo, está bem."],
          ["✗", "«um azeite» (a menos que seja a garrafa)", "→ um (fio de) azeite"],
        ],
        note: "Igual ao espanhol: ¿cuántos? contável vs ¿cuánto? incontável — quantas cebolas / quanto arroz. Para contar o incontável, a medida: um copo DE vinho, meio quilo DE arroz.",
      },
    ],
    moreExamples: [
      { it: "Quantos ovos leva o bolo?", es: "¿Cuántos huevos lleva el pastel?" },
      { it: "Quanto sal puseste na sopa?", es: "¿Cuánta sal pusiste en la sopa?" },
      { it: "Um copo de vinho verde, por favor.", es: "Un vaso de vino verde, por favor." },
    ],
    drills: {
      transform: [
        { q: "quanto ou quantas? «___ laranjas levas?»", options: ["Quantas", "Quanto", "Quantos"], answer: 0, explain: "laranjas = f. contável → quantas." },
        { q: "Mede-o: «Quero arroz.» (um copo)", options: ["Quero um copo de arroz.", "Quero um copo arroz.", "Quero arroz um copo."], answer: 0, explain: "medida + de + incontável." },
      ],
      errors: [
        { q: "Corrige: «Preciso um azeite.»", options: ["Preciso de azeite.", "Preciso um de azeite.", "Preciso azeites."], answer: 0, explain: "azeite é incontável: (de) azeite, sem artigo." },
      ],
    },
  },
  "pt-cu-a2-09": {
    tables: [
      {
        title: "Pretérito perfeito + já / ainda não",
        headers: ["Palavra", "Posição", "Exemplo"],
        rows: [
          ["já", "antes do verbo", "Já entreguei o currículo."],
          ["ainda não", "antes do verbo", "Ainda não recebi resposta."],
          ["já… alguma vez", "experiência", "Já trabalhaste nalguma loja?"],
          ["acabar de + infinitivo", "ação recém-terminada", "Acabei de falar com o gerente."],
          ["há + tempo", "há duas semanas", "Falei com ele há duas semanas."],
        ],
        note: "«Ya me pasaron» → já me chamaram (já VAI ANTES do verbo, como siempre). «Acabo de falar» = acabar de + infinitivo, idêntico ao espanhol. E «há duas semanas» = hace dos semanas (para trás).",
      },
    ],
    moreExamples: [
      { it: "Já preenchi o formulário online.", es: "Ya rellené el formulario online." },
      { it: "Ainda não tive notícias da vaga.", es: "Todavía no tuve noticias de la vacante." },
      { it: "Acabei de sair da entrevista.", es: "Acabo de salir de la entrevista." },
    ],
    drills: {
      transform: [
        { q: "Ordena: «entreguei já o documento.» →", options: ["Já entreguei o documento.", "Entreguei já documento o.", "O já entreguei documento."], answer: 0, explain: "já antes do verbo." },
        { q: "«Hace una hora» em português:", options: ["há uma hora", "hace uma hora", "faz uma hora atrás"], answer: 0, explain: "há + tempo decorrido." },
      ],
      errors: [
        { q: "Corrige: «Não ainda recebi o email.»", options: ["Ainda não recebi o email.", "Não recebi ainda não o email.", "Ainda recebi não o email."], answer: 0, explain: "ainda não + verbo (bloco fixo)." },
      ],
    },
  },
  "pt-cu-a2-10": {
    tables: [
      {
        title: "Futuro simples para previsões + o tempo",
        headers: ["Frase", "Exemplo", "Espanhol"],
        rows: [
          ["fará + tempo", "Fará sol amanhã.", "Hará sol mañana."],
          ["vai chover / nevar", "Vai chover no norte.", "Va a llover."],
          ["está nublado / sol", "Hoje está nublado.", "Hoy está nublado."],
          ["faz frio / calor (está)", "Está frio para junho.", "Hace frío (está)."],
          ["dizem que + futuro", "Dizem que melhorará.", "Dicen que mejorará."],
        ],
        note: "Em Portugal o tempo «está», não «faz»: está frio, está calor, está nublado (o espanhol «hace frío» seria o calco). Para previsões distantes, o futuro simples (melhorará) é o rei.",
      },
    ],
    moreExamples: [
      { it: "Está quente hoje, não está?", es: "Hace calor hoy, ¿no?" },
      { it: "Amanhã fará vento no litoral.", es: "Mañana hará viento en la costa." },
      { it: "No inverno neva na Serra.", es: "En invierno nieva en la Serra." },
    ],
    drills: {
      transform: [
        { q: "Traduz: «Hace frío hoje.» → PE:", options: ["Está frio hoje.", "Faz frio hoje.", "Há frio hoje."], answer: 0, explain: "Em PE, o tempo meteorológico usa estar." },
        { q: "Previsão: «Amanhã ___ (estar) sol.»", options: ["estará", "estava", "vai estado"], answer: 0, explain: "Futuro simples: estará." },
      ],
      errors: [
        { q: "Corrige: «Faz calor em agosto no Algarve.» (PE)", options: ["Está calor em agosto no Algarve.", "Faz calor faz em agosto.", "Há calor em agosto."], answer: 0, explain: "está calor / está frio (nunca «faz»)." },
      ],
    },
  },
  "pt-cu-a2-11": {
    tables: [
      {
        title: "Pedir favores: querer/poder + clíticos",
        headers: ["Fórmula", "Força", "Exemplo"],
        rows: [
          ["podes + infinitivo?", "neutro", "Podes ajudar-me com as caixas?"],
          ["podias + infinitivo?", "mais suave", "Podias fechar a janela?"],
          ["importa-te de + infinitivo?", "muito cortês", "Importas-te de ligar mais tarde?"],
          ["clíticos: me, te, lhe, nos", "depois do verbo (PE)", "Diz-lhe a verdade. · Ajuda-nos!"],
          ["✗", "«Podes me ajudar» (isso é BR)", "→ Podes ajudar-ME"],
        ],
        note: "Na conversa informal portuguesa, o pronome gruda no fim do verbo (ênclise): podes ajudar-ME, diz-LHE — «podes me ajudar» soa brasileiro. Para suavizar, usa o imperfeito: podias…?",
      },
    ],
    moreExamples: [
      { it: "Podes dizer-lhe que cheguei?", es: "¿Puedes decirle que llegué?" },
      { it: "Importas-te de me esperar cinco minutos?", es: "¿Te importa esperarme cinco minutos?" },
      { it: "Liga-me amanhã, se puderes.", es: "Llámame mañana, si puedes." },
    ],
    drills: {
      transform: [
        { q: "Ênclise: «Podes ___ (ajudar + me)?»", options: ["ajudar-me", "me ajudar", "ajudar me"], answer: 0, explain: "PE informal: pronome depois do verbo." },
        { q: "Substitui: «Podes ligar à Marta?» (pronome)", options: ["Podes ligar-lhe?", "Podes lhe ligar?", "Podes a ligar?"], answer: 0, explain: "à Marta → lhe, enclítico: ligar-lhe." },
      ],
      errors: [
        { q: "Corrige (PE): «Me podes ajudar com isto?»", options: ["Podes ajudar-me com isto?", "Me podes ajudar-me com isto?", "Podes me ajudar isto com."], answer: 0, explain: "Nunca pronome no início em PE falado: podes ajudar-me." },
      ],
    },
  },
  "pt-cu-a2-12": {
    tables: [
      {
        title: "Narrar com conectores + superlativos",
        headers: ["Conector", "Espanhol", "Função"],
        rows: [
          ["primeiro", "primero", "abre a história"],
          ["depois / em seguida", "después", "passo seguinte"],
          ["entretanto", "mientras tanto", "paralelo"],
          ["finalmente / no fim", "finalmente", "fecha"],
          ["de repente", "de repente", "virada"],
          ["o mais + adj + de", "el más… de", "superlativo"],
        ],
        note: "O esqueleto narrativo é o mesmo do espanhol: primeiro… depois… de repente… finalmente. «Entretanto» = mientras tanto (não «entanto»). O superlativo fecha a história: foi o melhor dia de todos.",
      },
    ],
    moreExamples: [
      { it: "Primeiro, apanhámos o comboio às oito.", es: "Primero, tomamos el tren a las ocho." },
      { it: "Entretanto, comemos uma tosta mista.", es: "Mientras tanto, comimos una tosta mista." },
      { it: "Foi o dia mais bonito da viagem.", es: "Fue el día más bonito del viaje." },
    ],
    drills: {
      transform: [
        { q: "Ordena a história: «___ apanhámos o comboio; ___ comemos em Aveiro.»", options: ["Primeiro / depois", "Depois / primeiro", "Finalmente / primeiro"], answer: 0, explain: "primeiro abre, depois continua." },
        { q: "Superlativo: «Foi ___ (bom) dia ___ viagem.»", options: ["o melhor / da", "o mais bom / da", "o melhor / do que"], answer: 0, explain: "bom → melhor; superlativo com DE." },
      ],
      errors: [
        { q: "Corrige: «No fim, era o dia mais divertido de todos os tempos.» (evento pontual)", options: ["No fim, foi o dia mais divertido de todos.", "No fim, era o dia mais divertido.", "No fim, tem sido o dia mais divertido."], answer: 0, explain: "Conclusão única da história → perfeito: foi." },
      ],
    },
  },
};
