import type { CbGrammarPack } from "../cb-rules";

/* ═══ EN B1 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════ */

export const EN_CB_RULES_B1: Record<string, CbGrammarPack> = {
  "en-cu-b1-01": {
    tables: [
      {
        title: "Present perfect vs past simple + for/since",
        headers: ["", "Present perfect", "Past simple"],
        rows: [
          ["Time", "unfinished / no time given", "finished time (yesterday, in 2023)"],
          ["Example", "I've been in Boston since 2023.", "I moved to Boston in 2023."],
          ["Experience", "Have you ever worked abroad?", "Yes, I did an internship last summer."],
          ["Duration", "for + period · since + starting point", "for two years · since January"],
          ["Question", "How long have you…?", "When did you…?"],
        ],
        note: "«Llevo dos años aquí» = I've been here FOR two years (perfecto). «Vine en 2023» = I came in 2023 (pretérito). for = duración; since = punto de inicio.",
      },
    ],
    moreExamples: [
      { it: "I've worked here since March.", es: "Trabajo aquí desde marzo." },
      { it: "I ran the club's accounts for two years.", es: "Llevé las cuentas del club durante dos años." },
      { it: "How long have you been in the U.S.?", es: "¿Cuánto tiempo llevas en EE. UU.?" },
    ],
    drills: {
      transform: [
        { q: "for or since? «I've been in Boston ___ 2023.»", options: ["since", "for", "from"], answer: 0, explain: "Punto de inicio → since." },
        { q: "Choose the tense: «I ___ (work) on that project last year.»", options: ["worked", "have worked", "work"], answer: 0, explain: "Tiempo terminado (last year) → past simple." },
      ],
      errors: [
        { q: "Fix it: «I live here since 2023.»", options: ["I've lived here since 2023.", "I live here for 2023.", "I'm living here since 2023."], answer: 0, explain: "since + presente perfecto (acción que continúa)." },
      ],
    },
  },
  "en-cu-b1-02": {
    tables: [
      {
        title: "So / Neither · echo the auxiliary",
        headers: ["Original tense", "Agree (+)", "Agree (−)"],
        rows: [
          ["present simple (do)", "So do I.", "Neither do I."],
          ["be", "So am I.", "Neither am I."],
          ["can", "So can I.", "Neither can I."],
          ["past simple (did)", "So did I.", "Neither did I."],
          ["present perfect", "So have I.", "Neither have I."],
        ],
        note: "La fórmula copia el AUXILIAR de la frase original: So/Neither + auxiliar + sujeto. «Yo también» nunca es «Me too» en negativas: «Yo tampoco» = Neither do I.",
      },
    ],
    moreExamples: [
      { it: "I don't check my phone in class. — Neither do I.", es: "No miro el teléfono en clase. — Yo tampoco." },
      { it: "I'm a night owl. — So am I.", es: "Soy noctámbulo. — Yo también." },
      { it: "I've never been to Vegas. — Neither have I.", es: "Nunca he estado en Las Vegas. — Yo tampoco." },
    ],
    drills: {
      transform: [
        { q: "Agree: «I use social media every day.» (+ you)", options: ["So do I.", "So am I.", "So I do."], answer: 0, explain: "Presente simple → auxiliar do: So do I." },
        { q: "Agree: «I can't live without my phone.» (− you)", options: ["Neither can I.", "Neither do I.", "So can't I."], answer: 0, explain: "can → Neither can I." },
      ],
      errors: [
        { q: "Fix it: «I don't like Mondays. — Me too.» (you don't either)", options: ["— Neither do I.", "— Me neither do.", "— So don't I."], answer: 0, explain: "Concordar en negativo → Neither + auxiliar + sujeto." },
      ],
    },
  },
  "en-cu-b1-03": {
    tables: [
      {
        title: "Second conditional · If I won…, I would…",
        headers: ["Clause", "Form", "Example"],
        rows: [
          ["if-clause", "If + past simple", "If I won the lottery,"],
          ["result", "would / 'd + base", "I'd quit my job."],
          ["be → were (all persons)", "If I were you, …", "If I were rich, I'd build a school."],
          ["question", "What would you do if…?", "What would you do if you didn't have to work?"],
          ["✗ never", "would in the if-clause", "✗ If I would win…"],
        ],
        note: "«Si ganara, dejaría» — hipótesis irreal. El español usa imperfecto de subjuntivo; el inglés usa pasado simple + would. Y con be, lo formal es were hasta con I/he.",
      },
    ],
    moreExamples: [
      { it: "If we had millions, we would never fly economy.", es: "Si tuviéramos millones, nunca volaríamos en económica." },
      { it: "If I were you, I'd take the job.", es: "Yo en tu lugar aceptaría el trabajo." },
      { it: "If she spoke English, she'd get the promotion.", es: "Si ella hablara inglés, conseguiría el ascenso." },
    ],
    drills: {
      transform: [
        { q: "Build it: «If I ___ (win), I ___ (travel) the world.»", options: ["won / would travel", "would win / traveled", "win / will travel"], answer: 0, explain: "If + past simple, would + base." },
        { q: "Make it about you: «If I were you…» — continue: «take the job.»", options: ["If I were you, I'd take the job.", "If I was you, I'll take the job.", "If I am you, I would take the job."], answer: 0, explain: "were formal en todas las personas + would." },
      ],
      errors: [
        { q: "Fix it: «If I would have time, I would learn French.»", options: ["If I had time, I would learn French.", "If I have time, I would learn French.", "If I had time, I will learn French."], answer: 0, explain: "would nunca entra en el if." },
      ],
    },
  },
  "en-cu-b1-04": {
    tables: [
      {
        title: "Present perfect continuous · have been -ing",
        headers: ["Person", "Form", "Example"],
        rows: [
          ["I / you / we / they", "have been + -ing", "I've been studying CS for three years."],
          ["he / she / it", "has been + -ing", "She's been working here since May."],
          ["Question", "How long + have/has…been -ing?", "How long have you been building the app?"],
          ["Signal words", "for · since · all week · lately", "It's been raining all week."],
          ["vs present perfect", "I've painted the kitchen. (done) / I've been painting. (activity)", ""],
        ],
        note: "«Llevo tres años estudiando» — el español no tiene este tiempo: se traduce con «llevo + gerundio». Resultado terminado → perfecto simple; actividad en curso → perfecto continuo.",
      },
    ],
    moreExamples: [
      { it: "I've been building a mobile app since January.", es: "Llevo desde enero construyendo una app móvil." },
      { it: "She's been learning Spanish for six months.", es: "Lleva seis meses aprendiendo español." },
      { it: "How long have you been waiting?", es: "¿Cuánto tiempo llevas esperando?" },
    ],
    drills: {
      transform: [
        { q: "Build it: «I ___ (study) computer science for three years.»", options: ["have been studying", "am studying since", "study for"], answer: 0, explain: "for + duración que continúa → perfecto continuo." },
        { q: "Rewrite with she: «I've been working here since May.»", options: ["She's been working here since May.", "She been working here since May.", "She's been work here since May."], answer: 0, explain: "she → has been ('s been) + -ing." },
      ],
      errors: [
        { q: "Fix it: «I am studying here since 2023.»", options: ["I've been studying here since 2023.", "I study here since 2023.", "I was studying here since 2023."], answer: 0, explain: "since + acción en curso → present perfect continuous." },
      ],
    },
  },
  "en-cu-b1-05": {
    tables: [
      {
        title: "should have · judging the past",
        headers: ["Form", "Meaning", "Example"],
        rows: [
          ["should have + participle", "it was a good idea, but it didn't happen", "You should have told us."],
          ["shouldn't have + participle", "it happened, but it shouldn't have", "They shouldn't have canceled it."],
          ["could have + participle", "it was possible, but didn't happen", "We could have booked earlier."],
          ["must have + participle", "logical conclusion about the past", "They must have forgotten."],
        ],
        note: "«Deberías haber avisado» = should have told — el haber + participio español se expresa con have + participio inglés. En conversación se oye «shoulda», pero se escribe should have.",
      },
    ],
    moreExamples: [
      { it: "We should have booked the tickets earlier.", es: "Deberíamos haber reservado los billetes antes." },
      { it: "I shouldn't have paid in advance.", es: "No debería haber pagado por adelantado." },
      { it: "You should have seen their faces!", es: "¡Deberías haber visto sus caras!" },
    ],
    drills: {
      transform: [
        { q: "Reproach the past: «They didn't tell us about the problem.»", options: ["They should have told us.", "They should tell us.", "They must have told us yesterday."], answer: 0, explain: "Reproche → should have + participio." },
        { q: "Regret: «I paid in advance.» (bad idea)", options: ["I shouldn't have paid in advance.", "I didn't should pay in advance.", "I shouldn't pay in advance."], answer: 0, explain: "Pasado que no debió ocurrir → shouldn't have + participio." },
      ],
      errors: [
        { q: "Fix it: «You should have told to us.»", options: ["You should have told us.", "You should have say us.", "You should had told us."], answer: 0, explain: "tell lleva persona directa (told us), sin to." },
      ],
    },
  },
  "en-cu-b1-06": {
    tables: [
      {
        title: "say vs tell · reported speech basics",
        headers: ["Verb", "Pattern", "Example"],
        rows: [
          ["say", "say (that) + clause — NO person", "She said (that) the employees were nervous."],
          ["say + person", "say TO me that…", "She said to me that…"],
          ["tell", "tell + person + clause", "Marcus told me the news."],
          ["✗ classic error", "«She said me…»", "→ She told me… / She said to me…"],
          ["backshift", "present → past in reports", "«I am tired» → He said he was tired."],
        ],
        note: "«Me dijo» = told me (decir + persona = tell). En estilo indirecto el inglés retrocede el tiempo (backshift): «quiero» → he said he WANTED.",
      },
    ],
    moreExamples: [
      { it: "He said that the meeting was at noon.", es: "Dijo que la reunión era al mediodía." },
      { it: "She told me that she loved the city.", es: "Me dijo que le encantaba la ciudad." },
      { it: "They told us the flight had been delayed.", es: "Nos dijeron que el vuelo se había retrasado." },
    ],
    drills: {
      transform: [
        { q: "say or tell? «Marcus ___ me the news this morning.»", options: ["told", "said", "said to"], answer: 0, explain: "Persona directa → tell." },
        { q: "Report it: «I'm nervous», she said.", options: ["She said she was nervous.", "She said she is nervous.", "She told that she was nervous."], answer: 0, explain: "Backshift: am → was; say sin persona." },
      ],
      errors: [
        { q: "Fix it: «He said me that he was tired.»", options: ["He told me that he was tired.", "He told that he was tired.", "He said me he was tiring."], answer: 0, explain: "say nunca lleva persona directa: told me." },
      ],
    },
  },
  "en-cu-b1-07": {
    tables: [
      {
        title: "Gerund or infinitive · verb menus",
        headers: ["+ -ing", "+ to + base", "Either, meaning shift"],
        rows: [
          ["enjoy · avoid · mind · keep · finish · suggest", "decide · need · want · offer · promise · hope · plan", "stop smoking ≠ stop to smoke"],
          ["I enjoy helping.", "I decided to volunteer.", "I stopped drinking coffee. (quit)"],
          ["Do you mind lifting boxes?", "We're planning to have pizza.", "I stopped to drink coffee. (in order to)"],
        ],
        note: "Trampa 1: «suggest to go» ✗ → suggest going. Trampa 2: stop/go on/remember cambian de significado: I remembered locking (recordé haber cerrado) vs I remembered to lock (recordé que debía cerrar).",
      },
    ],
    moreExamples: [
      { it: "I avoid driving during rush hour.", es: "Evito manejar en hora punta." },
      { it: "She offered to drive us home.", es: "Se ofreció a llevarnos a casa." },
      { it: "We finished packing the boxes at six.", es: "Terminamos de empacar las cajas a las seis." },
    ],
    drills: {
      transform: [
        { q: "enjoy or decide? «I decided ___ (volunteer).»", options: ["to volunteer", "volunteering", "volunteer"], answer: 0, explain: "decide + to + base." },
        { q: "Complete: «Do you mind ___ (lift) heavy boxes?»", options: ["lifting", "to lift", "lift"], answer: 0, explain: "mind + -ing." },
      ],
      errors: [
        { q: "Fix it: «She suggested to order pizza.»", options: ["She suggested ordering pizza.", "She suggested orders pizza.", "She suggested for order pizza."], answer: 0, explain: "suggest + -ing (nunca to)." },
      ],
    },
  },
  "en-cu-b1-08": {
    tables: [
      {
        title: "have to / must / can't · obligation map",
        headers: ["Form", "Meaning", "Example"],
        rows: [
          ["must + base", "strong rule (written, formal)", "You must stop for a school bus."],
          ["have to + base", "obligation (everyday, external)", "You have to wear a seatbelt in California."],
          ["can't / mustn't", "prohibition", "You can't use the carpool lane alone."],
          ["don't have to", "NOT necessary (≠ mustn't!)", "You don't have to pay — it's free."],
          ["question", "Do I have to…?", "Do I have to stop here?"],
        ],
        note: "«No tienes que» español es ambiguo; el inglés separa: mustn't = prohibido; don't have to = opcional. Y en preguntas, have to se conjuga con do: Do I have to…?",
      },
    ],
    moreExamples: [
      { it: "You have to renew your license every five years.", es: "Tienes que renovar tu licencia cada cinco años." },
      { it: "You mustn't park in front of the hydrant.", es: "No debes estacionarte frente al hidrante." },
      { it: "You don't have to tip, but it's customary.", es: "No tienes que dar propina, pero es costumbre." },
    ],
    drills: {
      transform: [
        { q: "Prohibit it: «You can use your phone while driving.»", options: ["You can't use your phone while driving.", "You don't have to use your phone.", "You must using your phone."], answer: 0, explain: "Prohibición → can't / mustn't + base." },
        { q: "Make it optional: «You must pay for the shuttle.» (actually free)", options: ["You don't have to pay for the shuttle.", "You mustn't pay for the shuttle.", "You can't pay for the shuttle."], answer: 0, explain: "don't have to = no es necesario." },
      ],
      errors: [
        { q: "Fix it: «Do you must stop at the sign?»", options: ["Do you have to stop at the sign?", "Must you to stop at the sign?", "Do you must stopping?"], answer: 0, explain: "En preguntas, have to toma do: Do you have to…?" },
      ],
    },
  },
  "en-cu-b1-09": {
    tables: [
      {
        title: "Relative clauses · who, which, that, where, whose",
        headers: ["Relative", "Refers to", "Example"],
        rows: [
          ["who / that", "people", "The hosts are the guys who make any topic funny."],
          ["which / that", "things", "It's a show which explains how things work."],
          ["where", "places", "There's an app where you can speed up audio."],
          ["whose", "possession", "That's the show whose host answers letters."],
          ["omit that?", "only as OBJECT", "The podcast (that) I listen to… ✓"],
        ],
        note: "«El podcast que escucho» — en inglés americano that cubre personas y cosas en conversación. whose = «cuyo»: nunca empiezas la frase con él, pero dentro es oro formal.",
      },
    ],
    moreExamples: [
      { it: "She's the engineer who designed the bridge.", es: "Ella es la ingeniera que diseñó el puente." },
      { it: "This is the app that I told you about.", es: "Esta es la app de la que te hablé." },
      { it: "That's the café where we first met.", es: "Ese es el café donde nos conocimos." },
    ],
    drills: {
      transform: [
        { q: "Join them: «a podcast + it explains science»", options: ["a podcast that explains science", "a podcast who explains science", "a podcast where explains science"], answer: 0, explain: "Cosas → that/which." },
        { q: "Choose the relative: «the host ___ car is a classic»", options: ["whose", "who's", "which"], answer: 0, explain: "Posesión → whose (cuyo)." },
      ],
      errors: [
        { q: "Fix it: «The app which I can listen faster» (about a place inside the app)", options: ["The app where I can listen faster", "The app whose I listen faster", "The app who I listen faster"], answer: 0, explain: "Lugar dentro de la app → where." },
      ],
    },
  },
  "en-cu-b1-10": {
    tables: [
      {
        title: "First conditional + unless",
        headers: ["Clause", "Form", "Example"],
        rows: [
          ["if-clause", "If + present simple", "If you join the gym,"],
          ["result", "will + base", "I'll go with you."],
          ["unless = if… not", "Unless + present, will…", "Unless you keep it fun, I won't join."],
          ["imperative result", "If + present, imperative", "If you see him, tell him to call me."],
          ["✗ never", "will in the if-clause", "✗ If you will join…"],
        ],
        note: "Casi un calco del español «si presente, futuro». La joya: unless = «a menos que» — lleva presente, no futuro: «Unless you keep it fun…», nunca «Unless you'll keep…».",
      },
    ],
    moreExamples: [
      { it: "If we bring lunch from home, we'll save money.", es: "Si llevamos almuerzo de casa, ahorraremos dinero." },
      { it: "If I keep eating fast food, I'll gain weight.", es: "Si sigo comiendo comida rápida, subiré de peso." },
      { it: "Unless it rains, we'll walk the trail.", es: "A menos que llueva, caminaremos por el sendero." },
    ],
    drills: {
      transform: [
        { q: "Build it: «If we ___ (stick) to the plan, we ___ (celebrate).»", options: ["stick / will celebrate", "will stick / celebrate", "stick / celebrate will"], answer: 0, explain: "If + presente, will + base." },
        { q: "Rewrite with unless: «If you don't keep it fun, I won't join.»", options: ["Unless you keep it fun, I won't join.", "Unless you don't keep it fun, I won't join.", "Unless you'll keep it fun, I won't join."], answer: 0, explain: "unless ya contiene la negación + presente." },
      ],
      errors: [
        { q: "Fix it: «If it will rain, we'll stay home.»", options: ["If it rains, we'll stay home.", "If it rain, we'll stay home.", "If it will raining, we stay home."], answer: 0, explain: "will jamás dentro del if." },
      ],
    },
  },
  "en-cu-b1-11": {
    tables: [
      {
        title: "used to / would · past habits",
        headers: ["Form", "Meaning", "Example"],
        rows: [
          ["used to + base", "past habit or state, now gone", "We used to live three blocks from Main Street."],
          ["didn't use to + base", "negative (no -d!)", "We didn't use to watch TV."],
          ["Did (you) use to…?", "question (no -d!)", "Did you use to have a TV?"],
          ["would + base", "repeated ACTION in the past (not states)", "We would listen to the radio every night."],
          ["✗ would + state", "✗ We would live there", "→ We used to live there."],
        ],
        note: "«Antes vivíamos allí» = We used to live there — el español usa imperfecto; el inglés usa used to. Y en preguntas/negativas la -d desaparece: Did you use to…?",
      },
    ],
    moreExamples: [
      { it: "I used to play outside until dark.", es: "Antes jugaba afuera hasta que oscurecía." },
      { it: "We would swim in the river every summer.", es: "Nadábamos en el río todos los veranos." },
      { it: "She didn't use to like coffee.", es: "Antes no le gustaba el café." },
    ],
    drills: {
      transform: [
        { q: "Past habit: «I ___ (play) soccer every day as a kid.»", options: ["used to play", "use to play", "used to playing"], answer: 0, explain: "Hábito pasado → used to + base." },
        { q: "Make it negative: «We used to watch TV.»", options: ["We didn't use to watch TV.", "We didn't used to watch TV.", "We use not to watch TV."], answer: 0, explain: "Negativa: didn't use to (sin -d)." },
      ],
      errors: [
        { q: "Fix it: «I didn't used to like vegetables.»", options: ["I didn't use to like vegetables.", "I don't used to like vegetables.", "I used not to liked vegetables."], answer: 0, explain: "Tras didn't, use vuelve a base: didn't use to." },
      ],
    },
  },
  "en-cu-b1-12": {
    tables: [
      {
        title: "Persuasive structures with data",
        headers: ["Structure", "Formula", "Example"],
        rows: [
          ["comparative + than", "short → -er than · long → more … than", "Lima is bigger than Chicago."],
          ["superlative", "the -est / the most…", "It's one of the best food cities in the world."],
          ["double comparative", "the + comparative, the + comparative", "The more you walk, the more you discover."],
          ["data opener", "With almost 10 million people, …", "With almost 10 million people, Lima never sleeps."],
          ["not as … as", "inferiority", "The traffic isn't as bad as in Cairo."],
        ],
        note: "«Cuanto más caminas, más descubres» = The more you walk, the more you discover — el doble comparativo inglés copia la estructura española, solo cambia «cuanto» por the.",
      },
    ],
    moreExamples: [
      { it: "The weather is milder than in Denver.", es: "El clima es más templado que en Denver." },
      { it: "The more you practice, the easier it gets.", es: "Cuanto más practicas, más fácil se vuelve." },
      { it: "It's not as expensive as you think.", es: "No es tan caro como crees." },
    ],
    drills: {
      transform: [
        { q: "Build the double comparative: «___ (much) you walk, ___ (much) you discover.»", options: ["The more / the more", "More / more", "The most / the most"], answer: 0, explain: "the + comparativo en ambas mitades." },
        { q: "Inferiority: «Denver is cold. Lima is less cold.»", options: ["Lima isn't as cold as Denver.", "Lima is as cold than Denver.", "Lima isn't so cold than Denver."], answer: 0, explain: "not as + adj + as." },
      ],
      errors: [
        { q: "Fix it: «It's one of the better food cities in the world.»", options: ["It's one of the best food cities in the world.", "It's one of the most good food cities.", "It's one of the better city of food."], answer: 0, explain: "Superlativo en la lista: the best." },
      ],
    },
  },
};
