import type { CbGrammarPack } from "../cb-rules";

/* ═══ PT C2 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════ */

export const PT_CB_RULES_C2: Record<string, CbGrammarPack> = {
  "pt-cu-c2-01": {
    tables: [
      {
        title: "Inversão enfática e elipse · o ritmo do ensaísta",
        headers: ["Dispositivo", "Padrão", "Exemplo"],
        rows: [
          ["inversão com advérbio negativo", "Nunca/Raramente + verbo + sujeito", "Raramente se viu tamanha clareza."],
          ["inversão com adjetivo", "Adj + verbo + sujeito", "Verdadeira é esta preocupação."],
          ["elipse do verbo", "corte do repetido", "Uns leem; outros, não."],
          ["elipse nominal", "só o modificador", "Prefiro o segundo capítulo ao primeiro."],
          ["zeugma", "um verbo, dois regimes", "Amo Lisboa e a tua impaciência."],
        ],
        note: "A inversão portuguesa soa literária mas segue regra: advérbio negativo ou adjetivo em foco primeiro, depois verbo e sujeito — «Verdadeira É esta preocupação». A elipse corta o óbvio: o leitor completa o ritmo.",
      },
    ],
    moreExamples: [
      { it: "Nunca me esquecerei daquela tarde.", es: "Jamás olvidaré aquella tarde. (PT pode inverter: Nunca me esquecerei)" },
      { it: "Talvez o tempo; talvez, apenas, o rio.", es: "Quizá el tiempo; quizá, apenas, el río. (elipse)" },
      { it: "Raramente um livro me deixou tão inquieto.", es: "Rara vez un libro me dejó tan inquieto." },
    ],
    drills: {
      transform: [
        { q: "Inverte com ênfase: «Vi tamanho talento muito raramente.»", options: ["Raramente se viu tamanho talento.", "Raramente viu-se talento tamanho muito.", "Se viu raramente tamanho o talento."], answer: 0, explain: "Advérbio raro primeiro + verbo + sujeito." },
        { q: "Completa a elipse: «Uns defendem a tese; outros, ___»", options: ["não", "não defendem a tese também não eles", "defendem também a tese outros não"], answer: 0, explain: "elipse: o verbo já foi dito, basta «não»." },
      ],
      errors: [
        { q: "Corrige: «Raramente viu-se.» (o sujeito é «um livro»)", options: ["Raramente se viu um livro assim.", "Raramente viu-se um livro raramente.", "Raramente um livro se viu raro."], answer: 0, explain: "viu-se impessoal («se viu») com o sujeito real depois." },
      ],
    },
  },
  "pt-cu-c2-02": {
    tables: [
      {
        title: "Clivagem de foco: é… que/quem · foi… em",
        headers: ["Foco", "Padrão", "Exemplo"],
        rows: [
          ["sujeito", "É X que + verbo", "É o silêncio que fala."],
          ["pessoa", "É X quem + verbo", "É ela quem decide."],
          ["tempo/lugar", "Foi em X que…", "Foi em junho que tudo mudou."],
          ["ação", "O que ele fez foi…", "O que fez foi recusar."],
          ["dupla clivagem", "não é X que… é Y", "Não é a forma que importa; é o ritmo."],
        ],
        note: "O ensaísta português cliva para cirurgia: «Foi EM JUNHO que tudo mudou» (foco temporal), «O que fez FOI RECUSAR» (foco verbal). A dupla negativa clivada («não é X; é Y») é o esqueleto de toda antítese elegante.",
      },
    ],
    moreExamples: [
      { it: "Foi no Douro que aprendi a esperar.", es: "Fue en el Duero donde aprendí a esperar." },
      { it: "O que ela queria era ser ouvida.", es: "Lo que ella quería era ser escuchada." },
      { it: "Não é o que se diz; é como se diz.", es: "No es lo que se dice; es cómo se dice." },
    ],
    drills: {
      transform: [
        { q: "Cliva o tempo: «Tudo mudou em junho.»", options: ["Foi em junho que tudo mudou.", "Foi junho que em tudo mudou.", "Em junho foi que tudo ele mudou."], answer: 0, explain: "Foi em + foco + que." },
        { q: "Cliva a ação: «Ela recusou o prémio.» (foco: recusar)", options: ["O que ela fez foi recusar o prémio.", "O que ela fez o prémio recusou.", "Foi recusada o que ela fez."], answer: 0, explain: "O que X fez foi + infinitivo." },
      ],
      errors: [
        { q: "Corrige: «Foi em junho que tudo mudou-se.» (PE formal escrito)", options: ["Foi em junho que tudo se mudou.", "Foi em junho que tudo mudou.", "Foi em junho tudo que mudou-se."], answer: 0, explain: "Com «tudo» como sujeito, preferência PE: tudo mudou (sem clítico)." },
      ],
    },
  },
  "pt-cu-c2-03": {
    tables: [
      {
        title: "Condicional de conjetura e subjuntivo irónico",
        headers: ["Fórmula", "Efeito", "Exemplo"],
        rows: [
          ["dir-se-ia (mesóclise)", "conjetura elegante", "Dir-se-ia que o país parou."],
          ["diria-se (equivalente)", "menos literário", "Diria que sim."],
          ["que eu saiba", "ironia polida", "É o melhor, que eu saiba."],
          ["não me conste", "distância irónica", "Não me conste que tenha pedido desculpa."],
          ["como se + conjuntivo", "mundo ao contrário", "Fala como se tivesse razão."],
        ],
        note: "«Dir-se-ia» = «se diría» com mesóclise real: o condicional mora DENTRO do verbo. «Que eu saiba» e «não me conste» são o sorriso fino português: elogiam ou criticam sem assinar. «Como se + imperfeito do conjuntivo» constrói o mundo fingido.",
      },
    ],
    moreExamples: [
      { it: "Dir-se-ia que nada aconteceu.", es: "Se diría que nada pasó." },
      { it: "Como se isso resolvesse alguma coisa!", es: "¡Como si eso resolviera algo!" },
      { it: "Não me conste que tenha estudado muito.", es: "No me consta que haya estudiado mucho." },
    ],
    drills: {
      transform: [
        { q: "Conjetura com mesóclise: «___ ___ ___ que o tempo parou.»", options: ["Dir-se-ia", "Diria-se-lo", "Se diria"], answer: 0, explain: "dir-se-ia: pronome «se» dentro do condicional." },
        { q: "Ironia: «Fala como se ___ (ter) razão.»", options: ["tivesse", "tem", "teria"], answer: 0, explain: "como se + imperfeito do conjuntivo: tivesse." },
      ],
      errors: [
        { q: "Corrige: «Não me consta que estudou muito.»", options: ["Não me consta que tenha estudado muito.", "Não me consta que estuda muito ontem.", "Não me conste que estuda muito sempre."], answer: 0, explain: "não constar que + conjuntivo perfeito: tenha estudado." },
      ],
    },
  },
  "pt-cu-c2-04": {
    tables: [
      {
        title: "Discurso indireto livre · tempos que deslizam",
        headers: ["Pensamento direto", "Indireto livre", "Mudança"],
        rows: [
          ["«Será que ele voltará?»", "Será que ele voltaria?", "futuro → condicional"],
          ["«Hoje estou cansada.»", "Naquele dia, estava cansada.", "hoje → naquele dia"],
          ["«Porque é que cedi?»", "Porque cedera ela?", "pretérito → mais-que-perfeito"],
          ["«Que injustiça!»", "Que injustiça, pensava ela.", "exclamação mantida"],
          ["marcador", "pensava ela / dizia consigo", "ancora a voz"],
        ],
        note: "O indireto livre funde narrador e personagem: a pergunta da personagem aparece SEM «ela perguntou», mas com os tempos deslizados («voltaria» em vez de «voltará»). A ironia nasce quando a frase da personagem é boa demais para ser do narrador.",
      },
    ],
    moreExamples: [
      { it: "Voltaria ele, afinal? Nunca o admitiria.", es: "¿Volvería él, al final? Nunca lo admitiría." },
      { it: "Que ingénua fora, pensava.", es: "Qué ingenua había sido, pensaba." },
      { it: "Naquela manhã, tudo parecia possível.", es: "Aquel mañana, todo parecía posible." },
    ],
    drills: {
      transform: [
        { q: "Indireto livre: «Voltarei?» (pensamento dela, ontem)", options: ["Voltaria ele/ela?", "Voltará ele?", "Voltou ele seria?"], answer: 0, explain: "futuro do pensamento → condicional no deslizamento." },
        { q: "Desliza: «Hoje estou cansada.» →", options: ["Naquele dia, estava cansada.", "Hoje ela está cansada ontem.", "Está cansada hoje mesma aquele."], answer: 0, explain: "hoje → naquele dia; estou → estava." },
      ],
      errors: [
        { q: "Corrige: «Será que ele virá?, pensava ela.» (indireto livre)", options: ["Será que ele viria?, pensava ela.", "Será que ele vem?, pensava ela ontem.", "Virá ele?, pensava ela virá."], answer: 0, explain: "No indireto livre, o futuro recua: virá → viria." },
      ],
    },
  },
  "pt-cu-c2-05": {
    tables: [
      {
        title: "O impessoal institucional",
        headers: ["Fórmula", "Efeito", "Exemplo"],
        rows: [
          ["recomenda-se que + conjuntivo", "norma sem autor", "Recomenda-se que se proceda à audição."],
          ["não deixará de + infinitivo", "predição insidiosa", "Não deixará de causar perplexidade."],
          ["estaria em causa", "problema flutuante", "Estaria em causa a credibilidade do processo."],
          ["torna-se necessário", "obrigação difusa", "Torna-se necessário reavaliar os critérios."],
          ["não será despiciendo", "lítotes burocrática", "Não será despiciendo recordar o regulamento."],
        ],
        note: "O comunicado português nunca tem sujeito: «recomenda-se que se proceda» — dois «se» na mesma frase, nenhum culpado. «Não deixará de causar perplexidade» = 'vai causar escândalo', dito com luvas de seda.",
      },
    ],
    moreExamples: [
      { it: "Considera-se que a medida é urgente.", es: "Se considera que la medida es urgente." },
      { it: "Não deixará de ser notado o esforço.", es: "No dejará de ser notado el esfuerzo." },
      { it: "Estará em causa o cumprimento do prazo.", es: "Estará en juego el cumplimiento del plazo." },
    ],
    drills: {
      transform: [
        { q: "Conjuntivo: «Recomenda-se que ___ (proceder) à audição.»", options: ["se proceda", "se procede", "se procederá"], answer: 0, explain: "recomendar que + conjuntivo: se proceda." },
        { q: "Descodifica: «Não deixará de causar perplexidade.» =", options: ["Vai causar perplexidade.", "Não causará nada.", "Deixará de ser estranho."], answer: 0, explain: "«não deixará de» = dupla negação → certamente." },
      ],
      errors: [
        { q: "Corrige: «Recomenda-se que se procede à audição.»", options: ["Recomenda-se que se proceda à audição.", "Recomenda-se que se proceder à audição.", "Recomenda-se de que se procede audição."], answer: 0, explain: "recomendar que + conjuntivo: proceda." },
      ],
    },
  },
  "pt-cu-c2-06": {
    tables: [
      {
        title: "Presente narrativo e orações absolutas",
        headers: ["Dispositivo", "Padrão", "Exemplo"],
        rows: [
          ["presente histórico", "passado contado no presente", "Em 1910, cai a monarquia."],
          ["oração absoluta (particípio)", "particípio + sujeito próprio", "Terminada a cena, o público demora a aplaudir."],
          ["oração absoluta (gerúndio)", "gerúndio com sujeito", "Aproximando-se o fim, todos se levantam."],
          ["transição de tempos", "presente → imperfeito (memória)", "Corre para a porta. Era sempre assim."],
          ["efeito", "câmera ao ombro", "o leitor caminha dentro da cena"],
        ],
        note: "O presente narrativo é câmera ao ombro: «cai a monarquia» em vez de «caiu». A oração absoluta («terminada a cena») é o gerúndio latino do português — sujeito próprio, sem conjunção: «terminada la escena…». Duas ferramentas de cinema.",
      },
    ],
    moreExamples: [
      { it: "Terminada a guerra, começa a reconstrução.", es: "Terminada la guerra, comienza la reconstrucción." },
      { it: "Soa o telefone. Ninguém atende.", es: "Suena el teléfono. Nadie contesta." },
      { it: "Chegada a hora, todos sabiam o que fazer.", es: "Llegada la hora, todos sabían qué hacer." },
    ],
    drills: {
      transform: [
        { q: "Presente narrativo: «Em 1994, Saramago ___ (ganhar) o Camões.»", options: ["ganha", "ganhou tinha", "ganharia ganho"], answer: 0, explain: "presente histórico: ganha." },
        { q: "Oração absoluta: «___ ___ sessão, todos saíram.» (terminar)", options: ["Terminada a", "Terminando a sessão todos saíram a", "A terminar sessão"], answer: 0, explain: "particípio + sujeito: terminada a sessão." },
      ],
      errors: [
        { q: "Corrige: «Terminando a cena, o público aplaudiu.» (a cena terminou, não o público)", options: ["Terminada a cena, o público aplaudiu.", "Terminando o público, a cena aplaudiu.", "A cena terminando público aplaudiu."], answer: 0, explain: "O particípio concorda com QUEM terminou (a cena): terminada." },
      ],
    },
  },
  "pt-cu-c2-07": {
    tables: [
      {
        title: "Futuro de promessa e anáfora política",
        headers: ["Dispositivo", "Padrão", "Exemplo"],
        rows: [
          ["futuro de promessa", "será + nome", "Portugal será mais justo."],
          ["haver de + infinitivo", "promessa com destino", "Há de voltar a ser grande."],
          ["anáfora", "repetir a abertura", "Seremos nós. Seremos todos."],
          ["tríade", "três membros crescentes", "Mais escolas, mais saúde, mais futuro."],
          ["imperativo coletivo", "vamos + infinitivo", "Vamos construir isso juntos."],
        ],
        note: "O futuro português promete por definição: «Portugal SERÁ» — campanha em uma palavra. «Haver de + infinitivo» é a promessa teimosa: «há de voltar» = va a volver, sin duda (fé incluída). Anáfora + tríade = a música do comício.",
      },
    ],
    moreExamples: [
      { it: "Este país há de florescer de novo.", es: "Este país ha de florecer de nuevo." },
      { it: "Seremos a geração que mudou tudo.", es: "Seremos la generación que lo cambió todo." },
      { it: "Vamos escrever o próximo capítulo.", es: "Vamos a escribir el próximo capítulo." },
    ],
    drills: {
      transform: [
        { q: "Promessa com destino: «O país ___ ___ florescer.»", options: ["há de", "há a", "vai haver"], answer: 0, explain: "haver de + infinitivo = promessa teimosa." },
        { q: "Anáfora: «___ nós. ___ todos.»", options: ["Seremos / Seremos", "Somos / Seremos todos nós", "Seremos / Somos todos"], answer: 0, explain: "anáfora: mesma abertura repetida." },
      ],
      errors: [
        { q: "Corrige: «Portugal haverá ser mais justo.»", options: ["Portugal será mais justo.", "Portugal há de ser mais justo.", "Portugal haverá ser justo mais."], answer: 0, explain: "O futuro direto promete: será. (Alternativa correta: há de ser.)" },
      ],
    },
  },
  "pt-cu-c2-08": {
    tables: [
      {
        title: "Clíticos: ênclise próclipe e a mesóclise clássica",
        headers: ["Registro", "Padrão", "Exemplo"],
        rows: [
          ["ênclise padrão (PE)", "verbo + pronome", "Não o vejo. → Vejo-o raramente."],
          ["próclise literária", "pronome + verbo (com atrator)", "Raramente o vejo. · Sempre me disseste."],
          ["mesóclise clássica", "futuro + pronome dentro", "vê-lo-ei · dir-to-ei"],
          ["contrações", "mo, to, lho, no-lo", "deram-mo · digo-to"],
          ["infinitivo pessoal + clítico", "vermos + o → vê-lo-emos", "ao vermo-lo…"],
        ],
        note: "O C2 domina as três posições: próclise com palavra atratora (nunca, raramente, que), ênclise padrão (vejo-o) e mesóclise clássica no futuro (vê-LO-ei = lo veré). «Dir-to-ei» empacota direi+te+o — gramática como quebra-cabeça.",
      },
    ],
    moreExamples: [
      { it: "Ninguém no-lo disse, mas sabíamos.", es: "Nadie nos lo dijo, pero sabíamos. (no-lo = nos+lo)" },
      { it: "Sempre te direi a verdade.", es: "Siempre te diré la verdad." },
      { it: "Vê-lo-ei na próxima sessão.", es: "Lo veré en la próxima sesión. (mesóclise)" },
    ],
    drills: {
      transform: [
        { q: "Mesóclise: «ver + o + ei (eu verei o)» =", options: ["vê-lo-ei", "verei-o-lo", "o verei ei"], answer: 0, explain: "o pronome entra no futuro: vê-LO-ei." },
        { q: "Contração: «dei + te + o» =", options: ["dei-to", "dei-te-o separado", "dei-o-te"], answer: 0, explain: "te + o = to: dei-to." },
      ],
      errors: [
        { q: "Corrige: «Raramente vejo-o.» (com atrator)", options: ["Raramente o vejo.", "Raramente vejo-o também assim.", "Raramente vejo ele o."], answer: 0, explain: "Com atrator (raramente), o pronome vem antes: o vejo." },
      ],
    },
  },
  "pt-cu-c2-09": {
    tables: [
      {
        title: "Desinflar: de substantivo a verbo",
        headers: ["Inchado", "Desinflado", "Técnica"],
        rows: [
          ["efetuar a análise de", "analisar", "nominalização → verbo"],
          ["proceder à implementação de", "implementar", "proceder a + sust → verbo"],
          ["realizar uma visita a", "visitar", "realizar + sust → verbo"],
          ["no âmbito de", "em / para", "frase → preposição"],
          ["com o objetivo de", "para", "frase → preposição"],
        ],
        note: "O burocratês português incha com «efetuar», «proceder a», «no âmbito de». O estilo C2 desinfla: cada substantivo abstrato esconde um verbo (análise → analisar). Depois do desinflado, corte o resto: paralelismo e elipse fazem o acabamento.",
      },
    ],
    moreExamples: [
      { it: "Vamos analisar os dados. (não: efetuar a análise)", es: "Vamos a analizar los datos. (no: efectuar el análisis)" },
      { it: "Implementámos a política. (não: procedemos à implementação)", es: "Implementamos la política." },
      { it: "Para reduzir custos. (não: com o objetivo de reduzir)", es: "Para reducir costos." },
    ],
    drills: {
      transform: [
        { q: "Desinfla: «Efetuámos a verificação dos dados.»", options: ["Verificámos os dados.", "Fizemos verificação de dados verificação.", "Os dados foram por nós verificados efetuadamente."], answer: 0, explain: "verificação → verificar." },
        { q: "Desinfla: «com o objetivo de melhorar»", options: ["para melhorar", "com objetivo melhorando", "no âmbito de melhorar"], answer: 0, explain: "com o objetivo de = para." },
      ],
      errors: [
        { q: "Corrige (estilo): «Procedemos à implementação da política.»", options: ["Implementámos a política.", "Implementamos à política procedida.", "A política foi por nós implementada por procedimento."], answer: 0, explain: "proceder à implementação de = implementar." },
      ],
    },
  },
  "pt-cu-c2-10": {
    tables: [
      {
        title: "Mais-que-perfeito simples vs composto",
        headers: ["", "Simples (-ra)", "Composto (tinha + part.)"],
        rows: [
          ["forma", "falara, dissera", "tinha falado, tinha dito"],
          ["registro", "literário, jornalístico", "neutro, falado"],
          ["exemplo", "Mal dissera isto, arrependeu-se.", "Mal tinha dito isto, arrependeu-se."],
          ["na condição irreal", "se falara… (arcaico ✗)", "se tivesse falado… ✓"],
          ["dica", "reconhecer: sim · produzir: composto", "—"],
        ],
        note: "O simples «dissera» é o pluscuamperfecto literário: vive em Saramago e nos despachos; na fala, «tinha dito» reina. ATENÇÃO: nas condicionais irreais, o «-ra» NÃO serve: «se tivesse falado», nunca «se falara» (aqui seria conjuntivo).",
      },
    ],
    moreExamples: [
      { it: "Chegara tarde, como sempre.", es: "Había llegado tarde, como siempre. (literário)" },
      { it: "Tinha chegado tarde, como sempre.", es: "Había llegado tarde, como siempre. (neutro)" },
      { it: "Quem lho dissera, não acreditaria.", es: "Quien se lo hubiera dicho, no lo habría creído. (literário)" },
    ],
    drills: {
      transform: [
        { q: "Mais-que-perfeito simples de dizer (ele):", options: ["dissera", "tinha dizer", "dira tinha"], answer: 0, explain: "dizer → dissera (= tinha dito)." },
        { q: "Condicional irreal: «Se ___ (falar), teria ficado.»", options: ["tivesse falado", "falara", "tinha falado"], answer: 0, explain: "se + conjuntivo mais-que-perfeito: tivesse falado (nunca -ra aqui)." },
      ],
      errors: [
        { q: "Corrige: «Se falara mais cedo, teria evitado.» (condição irreal)", options: ["Se tivesse falado mais cedo, teria evitado.", "Se falasse mais cedo, teria evitado já agora.", "Se falara tinha, teria evitado."], answer: 0, explain: "Condicional irreal do passado: se + TIVESSE falado." },
      ],
    },
  },
  "pt-cu-c2-11": {
    tables: [
      {
        title: "Homofonia, paronímia e derivação jocosa",
        headers: ["Fenómeno", "Exemplo", "O efeito cómico"],
        rows: [
          ["homofonia", "sessão / seção · conserte /concerte", "troca de ouvido"],
          ["paronímia", "iminente / eminente", "vizinhos perigosos"],
          ["sufixo jocoso -ice", "medricice", "o defeito virado substantivo"],
          ["sufixo -astro", "poetastro", "o quase-poeta"],
          ["sufixo -arrão", "sabicharrão", "o sabihondo de opereta"],
        ],
        note: "O humor português fabrica palavras com sufixos: -ice («medricice», cobardía), -astro («poetastro», poetastro también en ES), -arrão («sabicharrão»). A paronímia (iminente/em inente) é a mina dos trocadilhos de jornal.",
      },
    ],
    moreExamples: [
      { it: "A sessão de autógrafos foi um concerto de gargalhadas.", es: "La sesión de autógrafos fue un concierto de risas. (jogo sessão/concerto)" },
      { it: "O poeta? Um poetastro, dizia o tio.", es: "¿El poeta? Un poetastro, decía el tío." },
      { it: "Que medricice a dele!", es: "¡Qué cobardía la suya!" },
    ],
    drills: {
      transform: [
        { q: "O sufixo do quase-poeta: poet + ___", options: ["-astro", "-ice", "-arrão"], answer: 0, explain: "-astro = falsificador de ofício: poetastro." },
        { q: "Paronímia: «perigo ___» (iminente)", options: ["iminente", "eminente", "imigrante"], answer: 0, explain: "iminente = que vai acontecer; eminente = ilustre." },
      ],
      errors: [
        { q: "Corrige: «Um escritor eminente ameaça publicar.» (ilustre)", options: ["Um escritor eminente ameaça publicar.", "Um escritor iminente ameaça publicar.", "Um escritor eminarrão ameaça."], answer: 0, explain: "eminente = ilustre (iminente = urgente)." },
      ],
    },
  },
  "pt-cu-c2-12": {
    tables: [
      {
        title: "A peroração: tríades, «é que» enfático e elipse final",
        headers: ["Dispositivo", "Padrão", "Exemplo"],
        rows: [
          ["tríade crescente", "curto → mais curto → mínimo", "Amámos. Lutámos. Vencemos."],
          ["é que enfático", "X é que + verbo", "Foi o povo que lutou. / O povo é que lutou."],
          ["elipse final", "cortar o óbvio", "E o resto é história… ou será que é?"],
          ["anáfora de fecho", "repetição final", "Este é o nosso tempo. O nosso único tempo."],
          ["pergunta retórica", "sem resposta esperada", "Que mais podemos pedir?"],
        ],
        note: "A peroração fecha com música: tríade decrescente («Amámos. Lutámos. Vencemos.»), «é que» para bater o punho («O povo É QUE lutou») e elipse final — o público completa a última palavra na cabeça. Retórica é ritmo.",
      },
    ],
    moreExamples: [
      { it: "Foi a rua que venceu. Foi a rua.", es: "Fue la calle la que venció. Fue la calle." },
      { it: "Resta-nos uma coisa: esperança.", es: "Nos queda una cosa: esperanza." },
      { it: "Que mais queremos nós?", es: "¿Qué más queremos?" },
    ],
    drills: {
      transform: [
        { q: "Ênfase com «é que»: «O povo lutou.»", options: ["O povo é que lutou.", "É o povo que lutou-o.", "O povo lutou é que."], answer: 0, explain: "X é que + verbo = foco enfático." },
        { q: "Fecha com tríade: «Sonhámos. ___. ___.»", options: ["Trabalhámos. Vencemos.", "E trabalhámos muito vencemos também.", "Trabalhávamos e vencíamos sempre muito."], answer: 0, explain: "Tríade: três perfeitos simples, cada vez mais curto." },
      ],
      errors: [
        { q: "Corrige: «O povo é que lutou-o.»", options: ["O povo é que lutou.", "O povo lutou é que-o.", "É que o povo o lutou é."], answer: 0, explain: "«é que» enfático não muda o resto: O povo é que lutou." },
      ],
    },
  },
};
