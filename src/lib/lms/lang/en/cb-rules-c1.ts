import type { CbGrammarPack } from "../cb-rules";

/* ═══ EN C1 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════ */

export const EN_CB_RULES_C1: Record<string, CbGrammarPack> = {
  "en-cu-c1-01": {
    tables: [
      {
        title: "Cleft sentences · steering attention",
        headers: ["Cleft", "Formula", "Example"],
        rows: [
          ["what-clause", "What + S + V + is/was + X", "What we're looking at today is the link between trade and wages."],
          ["it-cleft", "It is/was + X + that/who…", "It's the data that I'd like to turn to now."],
          ["all-cleft", "All (that) + S + V + is + X", "All you need to remember is this."],
          ["reason-cleft", "The reason (why)… is that…", "The reason I mention this is that the midterm emphasizes frameworks."],
          ["fronting for focus", "This / That + is/was…", "That was the moment everything changed."],
        ],
        note: "El español enfoca con «lo que… es…» (cleft natural) — el inglés lo copia con What… is…. Úsalas para señalizar al oyente qué pedazo de la frase importa antes de decirlo.",
      },
    ],
    moreExamples: [
      { it: "What surprised me was the silence.", es: "Lo que me sorprendió fue el silencio." },
      { it: "It was in Boston that the idea took shape.", es: "Fue en Boston donde la idea tomó forma." },
      { it: "All I'm asking is five minutes.", es: "Todo lo que pido son cinco minutos." },
    ],
    drills: {
      transform: [
        { q: "Cleft it: «I'd like to turn to the data now.» (focus: the data)", options: ["It's the data that I'd like to turn to now.", "What the data is that I'd like to turn now.", "It's the data what I'd like to turn."], answer: 0, explain: "It-cleft: It's + foco + that + resto." },
        { q: "Build the what-cleft: «We're looking at the wage gap.» (focus: the wage gap)", options: ["What we're looking at is the wage gap.", "What is the wage gap we're looking at.", "The wage gap is what we looking at it."], answer: 0, explain: "What + sujeto + verbo + is + foco." },
      ],
      errors: [
        { q: "Fix it: «The reason I mention this is because the exam matters.»", options: ["The reason I mention this is that the exam matters.", "The reason why is because the exam matters that.", "The reason of this mention is the exam matters."], answer: 0, explain: "the reason… is THAT (never is because: redundante)." },
      ],
    },
  },
  "en-cu-c1-02": {
    tables: [
      {
        title: "Nominalization + academic hedging",
        headers: ["Verbal style", "Nominal style", "Register"],
        rows: [
          ["They implemented the policy rapidly.", "the rapid implementation of the policy", "formal, written"],
          ["Prices fluctuated sharply.", "sharp fluctuations in prices", "compact, academic"],
          ["The intervention worked.", "The intervention appears to have worked.", "hedged"],
          ["Our data show a link.", "Our data may suggest a link.", "cautious"],
          ["We analyzed the samples.", "the analysis of the samples", "impersonal"],
        ],
        note: "El abstract en inglés nominaliza: verbo → sustantivo (implement → implementation) y su adverbio → adjetivo (rapidly → rapid). Contrapesa con hedging: may suggest, appears to — nunca afirmes lo que tus datos no sostienen.",
      },
    ],
    moreExamples: [
      { it: "The introduction of the levy led to a decline in imports.", es: "La introducción del arancel llevó a una caída de las importaciones." },
      { it: "These findings appear to support the hypothesis.", es: "Estos hallazgos parecen respaldar la hipótesis." },
      { it: "Further research may be required.", es: "Podría requerirse investigación adicional." },
    ],
    drills: {
      transform: [
        { q: "Nominalize it: «Costs increased sharply.» →", options: ["a sharp increase in costs", "a sharply costs' increase", "the increase sharply of costs"], answer: 0, explain: "increase (sust.) + adjetivo sharp + in + tema." },
        { q: "Hedge it: «Our data prove the theory.»", options: ["Our data may support the theory.", "Our data prove maybe the theory possibly.", "Our data are proving totally the theory."], answer: 0, explain: "prove → may support (distancia académica)." },
      ],
      errors: [
        { q: "Fix it: «The implementation rapid of the policy failed.»", options: ["The rapid implementation of the policy failed.", "The implementation of rapid the policy failed.", "The policy's rapid implementation failed it."], answer: 0, explain: "Orden: artículo + adjetivo + sustantivo + of + complemento." },
      ],
    },
  },
  "en-cu-c1-03": {
    tables: [
      {
        title: "Inverted conditionals + formal conditions",
        headers: ["Standard if…", "Inversion", "Register"],
        rows: [
          ["If you should agree…", "Should you agree…", "very formal"],
          ["If we were to lower the price…", "Were we to lower the price…", "formal, hypothetical"],
          ["If we had known…", "Had we known…", "formal, past"],
          ["if + condition met", "provided (that) / as long as", "We can be flexible, provided we close this quarter."],
          ["on condition that", "only if (stronger)", "We'll sign on condition that the clause is removed."],
        ],
        note: "La inversión condicional elimina if y sube el auxiliar: Had we known = «de haber sabido». Es contrato, diplomacia y discurso — no café con amigos. provided that / as long as = «siempre que».",
      },
    ],
    moreExamples: [
      { it: "Should you have any questions, do not hesitate to contact us.", es: "Si tuviera cualquier pregunta, no dude en contactarnos." },
      { it: "Were the deal to collapse, we would pursue other buyers.", es: "Si el acuerdo llegara a colapsar, buscaríamos otros compradores." },
      { it: "We'll proceed as long as the audit is clean.", es: "Procederemos siempre que la auditoría esté limpia." },
    ],
    drills: {
      transform: [
        { q: "Invert it: «If we had known the risks, we would have walked away.»", options: ["Had we known the risks, we would have walked away.", "We had known the risks, we would walk away.", "Have we known the risks, we would had walked."], answer: 0, explain: "Had + sujeto + participio (sin if)." },
        { q: "Make it formal: «If you agree, we could talk exclusivity.»", options: ["Should you agree, we could talk exclusivity.", "Agreeing you, we could talk exclusivity.", "You should agree, we could talk exclusivity."], answer: 0, explain: "Should you agree = inversión formal de if you should." },
      ],
      errors: [
        { q: "Fix it: «Were we to would lower the price, we'd lose money.»", options: ["Were we to lower the price, we'd lose money.", "Were we lowering the price, we'd lose money.", "We were to lower the price, we'd lose money."], answer: 0, explain: "Inversión: Were + sujeto + to + base (una sola marca)." },
      ],
    },
  },
  "en-cu-c1-04": {
    tables: [
      {
        title: "Rhetorical parallelism · the orator's toolkit",
        headers: ["Device", "Pattern", "Example"],
        rows: [
          ["tricolon (triada)", "X, Y, and Z (same shape)", "of the people, by the people, for the people"],
          ["not only…but also", "not only + inversion, but also + …", "Not only did we survive, but we also thrived."],
          ["emphatic do", "do/does/did + base", "We DO deliver — every single time."],
          ["antithesis", "X vs Y, balanced", "Ask not what your country can do for you…"],
          ["anaphora", "same opening, repeated", "We will build. We will teach. We will heal."],
        ],
        note: "El paralelismo exige misma forma gramatical: tres gerundios, tres sustantivos, tres cláusulas. not only al inicio fuerza inversión: «Not only did we…» — el auxiliar sube antes del sujeto.",
      },
    ],
    moreExamples: [
      { it: "Not only did she lead the team, but she also trained her successor.", es: "No solo dirigió el equipo, sino que también formó a su sucesora." },
      { it: "We do have a plan, and the plan does work.", es: "Sí tenemos un plan, y el plan sí funciona." },
      { it: "It was the best of pitches; it was the worst of timing.", es: "Fue la mejor de las presentaciones; fue el peor de los momentos." },
    ],
    drills: {
      transform: [
        { q: "Complete the triad: «We came, we saw, we ___»", options: ["delivered", "to deliver", "delivering"], answer: 0, explain: "Paralelismo: tres pasados simples iguales." },
        { q: "Invert it: «We not only survived, but we also grew.»", options: ["Not only did we survive, but we also grew.", "Not only we survived, but also grew.", "Not only survived we, but we grew also."], answer: 0, explain: "Not only al inicio → do-support invertido." },
      ],
      errors: [
        { q: "Fix it: «Not only we did win, but we also broke the record.»", options: ["Not only did we win, but we also broke the record.", "Not only we won, but also broke we the record.", "Not only won we did, but the record broke."], answer: 0, explain: "La inversión es did + sujeto + base." },
      ],
    },
  },
  "en-cu-c1-05": {
    tables: [
      {
        title: "Change: by vs to · magnitudes and shares",
        headers: ["Pattern", "Meaning", "Example"],
        rows: [
          ["rise/fall BY + amount", "the size of the change", "Sales rose by 12%."],
          ["rise/fall TO + level", "the final level", "Unemployment fell to 4%."],
          ["double / triple", "×2 / ×3", "Revenue doubled in a year."],
          ["threefold / tenfold", "×3 / ×10 (adverb)", "Costs increased tenfold."],
          ["account for / one in three", "share of a total", "Housing accounts for 40% of spending."],
        ],
        note: "«Subió un 12 %» = rose BY 12 % (cuánto cambió); «subió al 12 %» = rose TO 12 % (dónde quedó). El español suele fundir ambos; el inglés los distingue con cirugía.",
      },
    ],
    moreExamples: [
      { it: "Traffic fell by a third after the toll.", es: "El tráfico cayó un tercio tras el peaje." },
      { it: "Remote work rose to 28% of all jobs.", es: "El trabajo remoto subió al 28 % de todos los empleos." },
      { it: "One in four students reports anxiety.", es: "Uno de cada cuatro estudiantes reporta ansiedad." },
    ],
    drills: {
      transform: [
        { q: "by or to? «Prices rose ___ 8%.» (final level)", options: ["to", "by", "at"], answer: 0, explain: "Nivel final → to 8%." },
        { q: "Say ×3 formally: «Enrollment has increased ___ since 2019.»", options: ["threefold", "thirdly", "by three times more"], answer: 0, explain: "threefold = ×3 (adverbio de magnitud)." },
      ],
      errors: [
        { q: "Fix it: «Exports account 22% of the total.»", options: ["Exports account for 22% of the total.", "Exports account of 22% the total.", "Exports are account for the 22%."], answer: 0, explain: "account FOR + proporción." },
      ],
    },
  },
  "en-cu-c1-06": {
    tables: [
      {
        title: "Hypothetical-deductive reasoning",
        headers: ["Move", "Formula", "Example"],
        rows: [
          ["set hypothesis", "If X were true, we'd expect to see Y", "If the churn were pricing-driven, we'd expect complaints at renewal."],
          ["check evidence", "In fact / In practice, …", "In fact, complaints spike mid-cycle."],
          ["necessity", "must be / has to be", "So the cause has to be onboarding."],
          ["impossibility", "can't be / couldn't be", "It can't be the UI — no redesign shipped."],
          ["alternative", "might be / could still be", "It might be expectations set too high."],
        ],
        note: "El caso de consultoría razona en cadena: hipótesis → predicción → dato → conclusión. must be = «tiene que ser» (deducción); can't be = «no puede ser» (imposibilidad lógica).",
      },
    ],
    moreExamples: [
      { it: "If the bottleneck were capacity, queues would grow linearly.", es: "Si el cuello de botella fuera la capacidad, las colas crecerían linealmente." },
      { it: "That rules out pricing as the driver.", es: "Eso descarta el precio como motor." },
      { it: "The data points to onboarding, not pricing.", es: "Los datos apuntan a la incorporación, no al precio." },
    ],
    drills: {
      transform: [
        { q: "Deduce: no UI changes shipped, so the UI ___ the cause.", options: ["can't be", "must be", "might be"], answer: 0, explain: "Imposibilidad lógica → can't be." },
        { q: "Set up the hypothesis: «___ the drop were seasonal, we'd see it every July.»", options: ["If", "Were", "Unless"], answer: 0, explain: "If + were (subjuntivo) + would en la predicción." },
      ],
      errors: [
        { q: "Fix it: «If the churn was pricing-driven, we would expected complaints.»", options: ["If the churn were pricing-driven, we'd expect complaints.", "If the churn were pricing, we'd expected complaints.", "If churn was pricing-driven, we will expect complaints."], answer: 0, explain: "were formal + would + base (expect)." },
      ],
    },
  },
  "en-cu-c1-07": {
    tables: [
      {
        title: "Contract language · modals and archaisms",
        headers: ["Term", "Plain English", "Job"],
        rows: [
          ["shall", "will / must (obligation)", "The Provider shall deliver…"],
          ["may", "is allowed to", "The Client may audit the records."],
          ["must not", "is forbidden to", "The parties must not disclose…"],
          ["hereby", "by this document", "The parties hereby agree…"],
          ["herein / therein / whereby", "in this / in that / by which", "the terms set forth herein"],
          ["notwithstanding", "despite", "Notwithstanding section 4, …"],
        ],
        note: "shall no es futuro en contratos: es obligación («el proveedor se obliga a…»). hereby = «por la presente». Este inglés es una lengua muerta viva: reconócela, no la inventes — y nunca la uses en el chat de la oficina.",
      },
    ],
    moreExamples: [
      { it: "This Agreement shall commence on the Effective Date.", es: "Este acuerdo comenzará (se obliga a comenzar) en la Fecha de Efecto." },
      { it: "Either party may terminate with thirty days' notice.", es: "Cualquier parte puede (se le permite) rescindir con treinta días de aviso." },
      { it: "The obligations set forth herein survive termination.", es: "Las obligaciones aquí establecidas sobreviven a la rescisión." },
    ],
    drills: {
      transform: [
        { q: "Translate to plain English: «The Provider shall deliver monthly reports.»", options: ["The Provider is obligated to deliver monthly reports.", "The Provider will maybe deliver reports.", "The Provider delivers reports if it wants."], answer: 0, explain: "shall en contrato = obligación." },
        { q: "Pick the permission modal: «The Client ___ audit the records.» (allowed)", options: ["may", "shall", "must not"], answer: 0, explain: "may = permiso contractual." },
      ],
      errors: [
        { q: "Plain-English it: «notwithstanding the foregoing» =", options: ["despite what was said above", "because of the above", "before what follows"], answer: 0, explain: "notwithstanding = a pesar de; the foregoing = lo anterior." },
      ],
    },
  },
  "en-cu-c1-08": {
    tables: [
      {
        title: "Long-form narrative tempo",
        headers: ["Device", "Effect", "Example"],
        rows: [
          ["past perfect", "backstory before the action", "She had promised to call. She never did."],
          ["participial clause", "compress two actions", "Grabbing her coat, she left."],
          ["historical present", "bring the past alive", "It's 1963, and the march begins."],
          ["short sentence after long ones", "punch", "Then silence."],
          ["free indirect speech", "character's voice in narration", "What was the point of trying again?"],
        ],
        note: "El reportaje largo alterna velocidades: la cláusula participial («Grabbing her coat, she left») comprime; el presente histórico («It's 1963…») proyecta al lector al escenario; la frase corta golpea después de las largas.",
      },
    ],
    moreExamples: [
      { it: "Having lost the file twice, she started printing everything.", es: "Tras perder el archivo dos veces, empezó a imprimirlo todo." },
      { it: "It's 2008, and the market is falling.", es: "Estamos en 2008 y el mercado se desploma." },
      { it: "The city had never seen anything like it. Never.", es: "La ciudad nunca había visto algo así. Nunca." },
    ],
    drills: {
      transform: [
        { q: "Compress with a participle: «She grabbed her coat and left.»", options: ["Grabbing her coat, she left.", "Grabbed her coat, she left.", "She grabbing her coat, left."], answer: 0, explain: "Participio presente + coma + oración principal." },
        { q: "Add backstory: «He knew the house. (his father built it in 1920)»", options: ["He knew the house — his father had built it in 1920.", "He knew the house — his father built it in 1920 before.", "He knew the house, his father has built it in 1920."], answer: 0, explain: "Anterioridad respecto al pasado → past perfect." },
      ],
      errors: [
        { q: "Fix it: «Walking down the street, the café appeared.» (she was walking)", options: ["Walking down the street, she spotted the café.", "Walking the street, the café was appearing.", "She walking, the café appeared to her."], answer: 0, explain: "El sujeto del participio debe ser el sujeto de la oración." },
      ],
    },
  },
  "en-cu-c1-09": {
    tables: [
      {
        title: "Understatement & implicature",
        headers: ["Device", "Literal meaning", "Intended meaning"],
        rows: [
          ["litotes", "not unreasonable", "quite reasonable"],
          ["hardly / barely", "almost not", "a strong softened no"],
          ["I don't disagree", "I don't disagree", "I largely agree"],
          ["no small feat", "not small", "a huge achievement"],
          ["not exactly thrilled", "not exactly…", "quite unhappy"],
        ],
        note: "El británico y el académico americano bajan el volumen para subir el énfasis: «not unreasonable» = «bastante razonable». Lee el hueco entre lo dicho y lo querido — ahí vive la implicatura.",
      },
    ],
    moreExamples: [
      { it: "The results were not unimpressive.", es: "Los resultados no fueron nada impresionables. (fueron buenos)" },
      { it: "I hardly think that's the issue.", es: "Difícilmente creo que ese sea el problema. (no lo es)" },
      { it: "That's no small achievement.", es: "Eso no es un logro menor. (es enorme)" },
    ],
    drills: {
      transform: [
        { q: "Decode the litotes: «The proposal is not without merit.» =", options: ["It has some merit.", "It has no merit.", "It is illegal."], answer: 0, explain: "not without = doble negación → tiene mérito." },
        { q: "Understate it: «The results were terrible.»", options: ["The results were not exactly encouraging.", "The results were very terrible extremely.", "The results were absolutely catastrophic."], answer: 0, explain: "not exactly + contrario = atenuación." },
      ],
      errors: [
        { q: "Interpret it: «I don't disagree with your reading.» =", options: ["Broad agreement, politely stated.", "Complete disagreement.", "Total enthusiastic agreement."], answer: 0, explain: "Doble negación suave = acuerdo matizado." },
      ],
    },
  },
  "en-cu-c1-10": {
    tables: [
      {
        title: "Varieties of English · grammar with an accent",
        headers: ["Feature", "Where", "Standard equivalent", "Example"],
        rows: [
          ["y'all", "US South", "you (plural)", "Y'all coming to the potluck?"],
          ["invariant be", "AAVE", "is/are (habitual)", "She be working nights. (regularly)"],
          ["double modals", "Southern US", "might be able to", "might could help you"],
          ["ain't", "widespread informal", "am not / isn't / aren't", "That ain't right."],
          ["past participle leveling", "various", "seen/saw distinction", "I seen it happen."],
        ],
        note: "Estas formas son SISTEMA, no error: invariant be marca hábito en AAVE (she be working = trabaja habitualmente de noche). Como C1, reconócelas y decide tu registro: entenderlas todas no significa usarlas en una entrevista.",
      },
    ],
    moreExamples: [
      { it: "Y'all let me know if you need anything.", es: "Avísenme (ustedes) si necesitan algo." },
      { it: "He be playing ball every Saturday.", es: "Juega básquet todos los sábados (habitual)." },
      { it: "I might could swing by after work.", es: "Quizás pueda pasar después del trabajo." },
    ],
    drills: {
      transform: [
        { q: "Standardize it: «She be working nights.» =", options: ["She regularly works nights.", "She is working tonight only.", "She works at night never."], answer: 0, explain: "invariant be marca hábito, no acción en curso." },
        { q: "Standardize it: «Might could you help?» =", options: ["Might you be able to help?", "You can help might.", "Could you might help?"], answer: 0, explain: "Doble modal → might be able to." },
      ],
      errors: [
        { q: "Register check: which belongs in a cover letter?", options: ["I have consistently delivered results.", "I done delivered results every time.", "I be delivering results, y'all."], answer: 0, explain: "El registro estándar escrito es el del trabajo formal." },
      ],
    },
  },
  "en-cu-c1-11": {
    tables: [
      {
        title: "Concede, then refute",
        headers: ["Move", "Formula", "Example"],
        rows: [
          ["concede", "Granted, … / Admittedly, …", "Granted, remote work saves commuting time."],
          ["concede clause", "While it is true that…, …", "While it is true that costs rise, productivity rises faster."],
          ["pivot", "That said, … / However, …", "That said, isolation is a real cost."],
          ["strong concede", "Much as I admire…, …", "Much as I admire the plan, it ignores demand."],
          ["refute", "The evidence, however, points elsewhere.", "The evidence, however, points to the opposite."],
        ],
        note: "El ensayo de opinión C1 concede ANTES de refutar: concede créditos («Granted…») y luego gira («That said…»). Refutar sin conceder suena dogmático en inglés académico.",
      },
    ],
    moreExamples: [
      { it: "Admittedly, the sample was small.", es: "Es cierto que la muestra era pequeña." },
      { it: "While it is true that prices fell, wages fell faster.", es: "Si bien es cierto que los precios bajaron, los salarios cayeron más rápido." },
      { it: "That said, the benefits outweigh the risks.", es: "Dicho esto, los beneficios superan los riesgos." },
    ],
    drills: {
      transform: [
        { q: "Concede first: «The plan is expensive. (still worth it)»", options: ["Granted, the plan is expensive — and still worth it.", "The plan is expensive but obviously worth it, obviously.", "The plan is so expensive, no worth."], answer: 0, explain: "Granted + concesión + giro." },
        { q: "Pick the pivot: «…, isolation remains a real cost.»", options: ["That said,", "For example,", "In other words,"], answer: 0, explain: "That said = pivote concesión→refutación." },
      ],
      errors: [
        { q: "Fix it: «Granted the plan is expensive, but however it works.»", options: ["Granted, the plan is expensive. That said, it works.", "Granted the plan expensive, but however works it.", "But however granted, the plan works expensive."], answer: 0, explain: "Un conector por oración: Granted… + That said… (no apiles but y however)." },
      ],
    },
  },
  "en-cu-c1-12": {
    tables: [
      {
        title: "TED talk grammar · speaker's toolkit",
        headers: ["Tool", "Pattern", "Effect"],
        rows: [
          ["inclusive we", "we / our (not «you should»)", "We all face this moment."],
          ["generalized you", "you know when…", "You know that feeling when…"],
          ["deictic this", "this + idea just introduced", "This is what changes everything."],
          ["rhetorical question", "question that needs no answer", "What if we had started ten years earlier?"],
          ["sentence-length swing", "long → very short", "…and it worked. (punch)"],
        ],
        note: "El orador mueve la cámara con la gramática: we incluye, this señala, la pregunta retórica abre un hueco y la frase corta lo cierra de golpe. La variedad de longitud de frase ES retórica, no azar.",
      },
    ],
    moreExamples: [
      { it: "This is the idea I want you to remember.", es: "Esta es la idea que quiero que recuerden." },
      { it: "So what do we do with this?", es: "Entonces, ¿qué hacemos con esto?" },
      { it: "We can wait. Or we can act.", es: "Podemos esperar. O podemos actuar." },
    ],
    drills: {
      transform: [
        { q: "Make it inclusive: «People should care about data privacy.»", options: ["We all have a stake in data privacy.", "You people must care about privacy now.", "One should be caring about the privacy."], answer: 0, explain: "we/all incluye al público en lugar de señalarlo." },
        { q: "Point back with deixis: «I discovered one habit that changed my career. ___ changed everything.»", options: ["That one habit", "This habit changing", "A such habit"], answer: 0, explain: "El deíctico that/this retoma el referente y lo enfoca." },
      ],
      errors: [
        { q: "Fix it: «We should of started ten years earlier.»", options: ["We should have started ten years earlier.", "We should started ten years earlier.", "We must of start ten years earlier."], answer: 0, explain: "should have + participio (shoulda es solo hablado)." },
      ],
    },
  },
};
