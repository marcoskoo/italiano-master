import type { CbGrammarPack } from "../cb-rules";

/* ═══ EN C2 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════ */

export const EN_CB_RULES_C2: Record<string, CbGrammarPack> = {
  "en-cu-c2-01": {
    tables: [
      {
        title: "Sentence rhythm · periodic vs cumulative",
        headers: ["Pattern", "Structure", "Effect", "Example"],
        rows: [
          ["periodic sentence", "modifiers FIRST, main clause LAST", "suspense", "Having lost the map, the light, and nearly hope, we walked on."],
          ["cumulative sentence", "main clause FIRST, modifiers after", "flow, expansion", "We walked on, having lost the map, the light, and nearly hope."],
          ["emphatic apposition", "X — restatement with a dash", "a punch of definition", "One thing mattered now — the deadline."],
          ["trailing participles", "…, -ing phrase", "momentum", "She opened the letter, already knowing."],
        ],
        note: "El ensayista elige la velocidad: la oración periódica retiene el sujeto hasta el final («De haber perdido… seguimos caminando»); la acumulativa declara y luego despliega. La raya — introduce la aposición que define.",
      },
    ],
    moreExamples: [
      { it: "Three things the city taught me: hurry, patience, and silence.", es: "Tres cosas me enseñó la ciudad: prisa, paciencia y silencio." },
      { it: "It was the kind of silence that listens.", es: "Era el tipo de silencio que escucha." },
      { it: "He said nothing — which, of course, said everything.", es: "No dijo nada, lo cual, por supuesto, lo decía todo." },
    ],
    drills: {
      transform: [
        { q: "Make it periodic: «We kept climbing, though we were exhausted and frozen.»", options: ["Exhausted and frozen as we were, we kept climbing.", "We kept climbing exhausted frozen although we.", "Though exhausted and frozen, climbing kept us."], answer: 0, explain: "Concesivos primero, cláusula principal al final." },
        { q: "Add emphatic apposition: «Only one rule survived the years.» (be kind)", options: ["Only one rule survived the years — be kind.", "Only one rule — be kind — survived the years it did.", "Be kind, only one rule survived the years."], answer: 0, explain: "La raya + aposición define o corrige el foco." },
      ],
      errors: [
        { q: "Fix it: «We — having finished — the report submitted late.»", options: ["Having finished the report, we submitted it late.", "Having finish, we the report submitted late.", "We submitted — the report having late — finished."], answer: 0, explain: "El participio abre, el sujeto y verbo cierran: orden periódico limpio." },
      ],
    },
  },
  "en-cu-c2-02": {
    tables: [
      {
        title: "The grammar of fast speech",
        headers: ["Device", "Full form", "Spoken form"],
        rows: [
          ["auxiliary elision", "Do you want…? / Have you seen it?", "You want…? / Seen it?"],
          ["gapping", "She took the train, and he took the bus.", "She took the train, and he the bus."],
          ["lexical contraction", "going to / want to / kind of", "gonna / wanna / kinda"],
          ["cliticization", "give it to me", "gimme / give it me"],
          ["fragment answers", "Yes, I have seen it.", "Yeah, seen it."],
        ],
        note: "El habla real desmonta la gramática del libro: auxiliares caen, gapping borra el verbo repetido («…and he the bus»). Escríbelo solo en diálogo; en narrativa formal, gapping sí, contracciones léxicas no.",
      },
    ],
    moreExamples: [
      { it: "You coming or what?", es: "¿Vienes o qué?" },
      { it: "She ordered the salad, and I the steak.", es: "Ella pidió la ensalada, y yo el bistec." },
      { it: "I shoulda known better.", es: "Debí haberlo sabido. (hablado)" },
    ],
    drills: {
      transform: [
        { q: "Apply gapping: «He pays cash, and she pays by card.»", options: ["He pays cash, and she by card.", "He pays cash, and she cards.", "He cash pays, and she by card pays too."], answer: 0, explain: "El verbo repetido se omite en la segunda mitad." },
        { q: "Write it as fast speech: «Do you want to get lunch?»", options: ["Wanna get lunch?", "Do you wanting lunch?", "You do want lunch, yes?"], answer: 0, explain: "want to → wanna + elisión de do you." },
      ],
      errors: [
        { q: "Register check — which belongs in a formal essay?", options: ["The data suggest a shift.", "The data kinda suggest a shift.", "Data's suggesting a shift, ya know?"], answer: 0, explain: "kinda / ya know son registro hablado, jamás ensayístico." },
      ],
    },
  },
  "en-cu-c2-03": {
    tables: [
      {
        title: "Garden paths & attachment ambiguity",
        headers: ["Sentence", "Trap", "The joke's engine"],
        rows: [
          ["I told her that jokes that fall flat bomb.", "that…that stack", "reader attaches the wrong that"],
          ["The horse raced past the barn fell.", "raced = verb? participle?", "garden-path classic"],
          ["I saw the man with the telescope.", "PP attaches to man or saw?", "who has the telescope?"],
          ["Visiting relatives can be boring.", "gerund or participle?", "ambiguity by design"],
          ["Time flies like an arrow; fruit flies like a banana.", "flies (v/n) · like (prep/v)", "double-category pun"],
        ],
        note: "El chiste gramatical nace cuando el oyente construye la estructura A y debe re-analizarla como B: «raced» como verbo y luego como participio. Diseñar ambigüedad = colocar la pieza ambigua justo antes del dato que la resuelve.",
      },
    ],
    moreExamples: [
      { it: "The old man the boats.", es: "Los viejos tripulan los botes. (man = verbo)" },
      { it: "The panda eats, shoots and leaves.", es: "El panda come, dispara y se va. (puntuación ambigua)" },
      { it: "We saw her duck.", es: "Vimos su pato / la vimos agacharse." },
    ],
    drills: {
      transform: [
        { q: "Disambiguate with commas: «I saw her duck (the bird).»", options: ["I saw her duck — the bird.", "I saw, her duck.", "I saw her, duck."], answer: 0, explain: "La aposición con raya fija la lectura deseada." },
        { q: "Spot the garden path: «The horse raced past the barn fell.» What is 'raced'?", options: ["a participle (the horse [that was] raced)", "the main verb", "a noun"], answer: 0, explain: "raced = participio: el caballo llevado a la carrera… cayó." },
      ],
      errors: [
        { q: "Which is intentionally ambiguous (for the punchline)?", options: ["Time flies like an arrow.", "The train arrives at nine.", "She studied all night."], answer: 0, explain: "flies/like tienen doble categoría: el chiste vive ahí." },
      ],
    },
  },
  "en-cu-c2-04": {
    tables: [
      {
        title: "Free indirect speech · the narrator's mind-meld",
        headers: ["Element", "Direct thought", "Free indirect"],
        rows: [
          ["backshift", "Am I ready?", "Was she ready?"],
          ["deixis shift", "this house, tomorrow", "that house, the next day"],
          ["pronouns", "I / my", "she / her"],
          ["no reporting verb", "—", "She stared at the letter. Could it really be over?"],
          ["keep exclamations", "How unfair!", "How unfair it all was!"],
        ],
        note: "El discurso indirecto libre funde narrador y personaje: la tercera persona del narrador con el TONO del personaje («Could it really be over?»). El español lo hace en Cervantes; el inglés lo perfeccionó en Austen y Joyce.",
      },
    ],
    moreExamples: [
      { it: "He would never apologize. Not now, not ever.", es: "Él nunca se disculparía. Ni ahora, ni nunca." },
      { it: "So this was Boston, she thought. So this was it.", es: "Así que esto era Boston, pensó. Así que esto era todo." },
      { it: "Why had she even opened the email?", es: "¿Por qué había abierto siquiera el correo?" },
    ],
    drills: {
      transform: [
        { q: "Free-indirect it: «I will never forgive him,» she thought.", options: ["She would never forgive him.", "She will never forgive him.", "She thought that never she forgives him."], answer: 0, explain: "Backshift will→would + tercera persona, sin verbo de reporte." },
        { q: "Shift the deixis: «I'll fix it tomorrow,» he decided.", options: ["He would fix it the next day.", "He will fix it tomorrow.", "He would fix it tomorrow same day."], answer: 0, explain: "tomorrow → the next day en el desplazamiento." },
      ],
      errors: [
        { q: "Fix it: «She wondered why did he leave.» (indirect)", options: ["She wondered why he had left.", "She wondered why did he left.", "She wondered why he did left?"], answer: 0, explain: "La interrogativa indirecta NO invierte: why + sujeto + verbo." },
      ],
    },
  },
  "en-cu-c2-05": {
    tables: [
      {
        title: "High-stakes hedging · modal distance",
        headers: ["Tool", "Function", "Example"],
        rows: [
          ["downtoner", "soften a claim", "somewhat · mildly · arguably · to an extent"],
          ["modal of distance", "avoid commitment", "I would suggest… · We might propose…"],
          ["conditional framing", "hypothetical, not factual", "Were we to proceed…"],
          ["institutional nominalization", "nobody acts, things happen", "a decision was taken · concerns were raised"],
          ["passive + agentless", "no blame assigned", "Mistakes were made."],
        ],
        note: "El inglés institucional esconde al actor: «Mistakes were made» — nadie las cometió. La diplomacia verbal usa would como escudo («I would suggest» = sugiero, pero sin firmar la sugerencia).",
      },
    ],
    moreExamples: [
      { it: "Concerns have been raised about the timeline.", es: "Se han planteado inquietudes sobre el cronograma." },
      { it: "This would arguably be the prudent course.", es: "Esta sería, cabe argumentar, la vía prudente." },
      { it: "It may be worth revisiting the assumption.", es: "Quizá valga la pena revisar el supuesto." },
    ],
    drills: {
      transform: [
        { q: "De-agent it: «We made mistakes.» (institutional)", options: ["Mistakes were made.", "Mistakes were made by we.", "Mistakes happened from us making them."], answer: 0, explain: "Pasiva sin agente: el clásico institucional." },
        { q: "Add modal distance: «I suggest we delay.»", options: ["I would suggest we delay.", "I am suggesting strongly we delay!", "I suggest that we must delay now."], answer: 0, explain: "would + suggest = sugerencia blindada." },
      ],
      errors: [
        { q: "Tone check — which fits a diplomatic cable?", options: ["We would view any delay as regrettable.", "A delay would totally infuriate us.", "Delay = war."], answer: 0, explain: "would + regrettable = dureza envuelta en cortesía." },
      ],
    },
  },
  "en-cu-c2-06": {
    tables: [
      {
        title: "Screenplay grammar",
        headers: ["Element", "Rule", "Example"],
        rows: [
          ["action lines", "present simple, 3rd person, no subject pronouns", "Maria opens the door. Rain. She smiles."],
          ["narrative present", "everything happens NOW", "The phone RINGS."],
          ["fragments allowed", "no verb needed for atmosphere", "Night. A rooftop. Wind."],
          ["ellipsis in dialogue", "… = trail-off · — = interruption", "I just thought maybe… / You thought what—"],
          ["CAPS for sound & first appearance", "sfx + new characters", "The DOOR CREAKS open."],
        ],
        note: "El guion es presente histórico extremo: nada «pasó», todo pasa. Los fragmentos pintan plano y ritmo; los puntos suspensivos y el guion de diálogo coreografian el silencio y el corte.",
      },
    ],
    moreExamples: [
      { it: "EXT. ROOFTOP — NIGHT. Rain hammers the city.", es: "EXT. AZOTEA — NOCHE. La lluvia golpea la ciudad." },
      { it: "He reaches for the gun. Stops. Walks away.", es: "Alarga la mano hacia el arma. Se detiene. Se va." },
      { it: "I wanted to tell you—  /  Then tell me.", es: "Quería decirte—  /  Pues dímelo." },
    ],
    drills: {
      transform: [
        { q: "Screenplay it: «Maria opened the door and she saw the rain.»", options: ["Maria opens the door. Rain.", "Maria opening door, rain was seen.", "The door was opened by Maria, rain happened."], answer: 0, explain: "Presente + sin pronombres sujeto + fragmentos." },
        { q: "Mark the interruption: «I wanted to explain, but she cut me off.»", options: ["I wanted to explain—  /  Save it.", "I wanted to explain…  /  Save it.", "I wanted — to explain. Save it."], answer: 0, explain: "— corta; … deja morir la frase." },
      ],
      errors: [
        { q: "Fix the slug line: «outside on the roof at night»", options: ["EXT. ROOFTOP — NIGHT", "EXT: OUTSIDE ROOF, NIGHT TIME.", "EXT. — THE ROOF AT THE NIGHT."], answer: 0, explain: "Formato estándar: INT./EXT. + LOCACIÓN — MOMENTO." },
      ],
    },
  },
  "en-cu-c2-07": {
    tables: [
      {
        title: "Political syntax · rhetoric of power",
        headers: ["Device", "Pattern", "Example"],
        rows: [
          ["anaphora", "same opening ×3+", "We will build it. We will fund it. We will finish it."],
          ["tricolon", "three balanced units", "government of the people, by the people, for the people"],
          ["agentless passive", "act without actor", "Decisions were taken."],
          ["policy nominalization", "verb → abstract noun", "the modernization of the grid (not: we modernized)"],
          ["negative parallelism", "not X, but Y", "not a handout, but a hand up"],
        ],
        note: "La política nominaliza para despersonalizar («the modernization of the grid» — ¿quién?) y usa la pasiva sin agente para repartir responsabilidad al vacío. Anáfora + tricolon = la música del mitin.",
      },
    ],
    moreExamples: [
      { it: "Not because it is easy, but because it is hard.", es: "No porque sea fácil, sino porque es difícil." },
      { it: "The reform was announced today.", es: "La reforma fue anunciada hoy. (¿por quién?)" },
      { it: "Hope over fear. Unity over division. Future over past.", es: "Esperanza sobre miedo. Unidad sobre división. Futuro sobre pasado." },
    ],
    drills: {
      transform: [
        { q: "Build the anaphora: «We will fight them ___, we will fight them ___, we will fight them ___.»", options: ["on the beaches / on the landing grounds / in the fields", "beaches / landing / fields fight", "on beaches, and landing grounds also, plus fields"], answer: 0, explain: "Mismo marco + tres lugares en paralelo." },
        { q: "Nominalize the policy: «We will modernize the grid.»", options: ["the modernization of the grid", "the grid modernizing by us", "modernize the grid's process"], answer: 0, explain: "Verbo → sustantivo abstracto + of." },
      ],
      errors: [
        { q: "Spot the agentless passive: which sentence hides the actor?", options: ["Mistakes were made in the rollout.", "The minister made mistakes in the rollout.", "I made a mistake in the rollout."], answer: 0, explain: "La pasiva sin agente elimina al responsable." },
      ],
    },
  },
  "en-cu-c2-08": {
    tables: [
      {
        title: "ES→EN contrastive traps · translation-level grammar",
        headers: ["Spanish", "English rule", "Example"],
        rows: [
          ["el informe de la empresa", "saxon genitive for people/animals only", "the company's report ✓ (or: the company report)"],
          ["se habla inglés", "medio 'se' ≠ passive: use passive or plural", "English is spoken here. / People speak English here."],
          ["se me olvidó", "NOT passive: subject = I", "I forgot (it)."],
          ["una casa grande y vieja", "adjective ORDER: opinion-size-age-shape-color", "a big old house · a lovely little old village"],
          ["más viejo que yo", "comparative + than (object form formal)", "older than I (formal) / older than me (standard)"],
        ],
        note: "El genitivo sajón ('s) es para poseedores vivos (people, animals, organizations); para cosas, of o sustantivo compuesto. Y el orden del adjetivo inglés (opinion-size-age…) es fijo: «a big old house», jamás «an old big house».",
      },
    ],
    moreExamples: [
      { it: "My sister's car vs. the door of the car", es: "El auto de mi hermana vs. la puerta del auto." },
      { it: "They speak Spanish in the Andes. (= se habla español)", es: "Se habla español en los Andes." },
      { it: "A charming little new café opened nearby.", es: "Abrió un café nuevo, pequeño y encantador cerca." },
    ],
    drills: {
      transform: [
        { q: "Order the adjectives: «a (red) (little) (beautiful) car»", options: ["a beautiful little red car", "a red little beautiful car", "a little red beautiful car"], answer: 0, explain: "opinion → size → color." },
        { q: "Translate the medio 'se': «Se venden casas.»", options: ["Houses are sold here. / They sell houses here.", "Houses sell themselves.", "It sells houses."], answer: 0, explain: "El se medio se vuelve pasiva o sujeto plural." },
      ],
      errors: [
        { q: "Fix it: «The report's conclusions of the committee»", options: ["The conclusions of the committee's report", "The conclusions' report of the committee", "The committee report's conclusions of it"], answer: 0, explain: "Cadena: committee's report → conclusions of THAT report." },
      ],
    },
  },
  "en-cu-c2-09": {
    tables: [
      {
        title: "Editing pass · deflate and compress",
        headers: ["Bloated", "Edited", "Technique"],
        rows: [
          ["conduct an investigation of", "investigate", "nominalization → verb"],
          ["the people who are responsible for", "those responsible for", "relatives compressed"],
          ["due to the fact that", "because", "phrase → word"],
          ["at this point in time", "now", "phrase → word"],
          ["It is essential that we examine…", "We must examine… / Let's examine…", "dummy subject cut"],
        ],
        note: "La revisión C2 desinfla: cada nominalización es un verbo esperando ser liberado (investigation → investigate). Prueba del ritmo: lee en voz alta; si te falta aire, la frase está gorda.",
      },
    ],
    moreExamples: [
      { it: "We made the decision to leave. → We decided to leave.", es: "Tomamos la decisión de irnos. → Decidimos irnos." },
      { it: "in the event that the plan fails → if the plan fails", es: "en el caso de que el plan falle → si el plan falla" },
      { it: "This is a subject that deserves study. → This subject deserves study.", es: "Este es un tema que merece estudio. → Este tema merece estudio." },
    ],
    drills: {
      transform: [
        { q: "Deflate it: «They conducted a review of the policy.»", options: ["They reviewed the policy.", "They did reviewing to the policy.", "A policy review was conducted by them."], answer: 0, explain: "review (sust.) → reviewed (verbo)." },
        { q: "Compress the relative: «the report that was released yesterday»", options: ["the report released yesterday", "the report was released yesterday one", "the yesterday released report"], answer: 0, explain: "Relativo + be → participio." },
      ],
      errors: [
        { q: "Fix it: «Due to the fact that demand increased, prices rose.»", options: ["Because demand increased, prices rose.", "Due to demand increased, prices rose.", "Because of demand increased, prices rose up."], answer: 0, explain: "because + oración; due to solo + sustantivo." },
      ],
    },
  },
  "en-cu-c2-10": {
    tables: [
      {
        title: "Living speech grammar · AAVE deep structures",
        headers: ["Feature", "Grammar", "Meaning"],
        rows: [
          ["habitual be", "be + -ing (not am/is/are)", "She be working nights. = she works nights regularly."],
          ["remote been", "been + past participle", "I been known that. = I've known it for ages."],
          ["zero copula", "Ø where is/are", "She Ø my sister. (present state)"],
          ["stressed BIN", "BIN + participle", "He BIN married. = married long ago, still true"],
          ["historical present", "narration in present", "So he walks in and says…"],
        ],
        note: "AAVE tiene su propio sistema aspectual: habitual be marca regularidad que el inglés estándar no distingue («she be working» ≠ «she's working»). been remoto (BIN) = 'desde hace siglos'. Es lingüística seria, no error — y C2 es saber describirla.",
      },
    ],
    moreExamples: [
      { it: "They be playing chess in the park on Sundays.", es: "Suelen jugar ajedrez en el parque los domingos." },
      { it: "She been done told you twice.", es: "Eso te lo dijo hace rato (y quedó dicho)." },
      { it: "He BIN retired — moved to Georgia years ago.", es: "Está jubilado desde hace un montón — se fue a Georgia hace años." },
    ],
    drills: {
      transform: [
        { q: "Standard-English the habitual: «They be playing ball on Fridays.»", options: ["They regularly play ball on Fridays.", "They are playing ball this Friday.", "They will play ball Friday once."], answer: 0, explain: "habitual be = regularidad, no acción en curso." },
        { q: "Interpret remote been: «I been known that.»", options: ["I've known it for a long time.", "I knew it once.", "I was known by people."], answer: 0, explain: "been remoto = conocimiento antiguo y vigente." },
      ],
      errors: [
        { q: "Which is zero copula?", options: ["She Ø my sister.", "She are my sister.", "She been my sister now today."], answer: 0, explain: "Cópula cero = ausencia de is/are en presente." },
      ],
    },
  },
  "en-cu-c2-11": {
    tables: [
      {
        title: "Designed ambiguity · the pun's blueprints",
        headers: ["Blueprint", "Mechanism", "Example"],
        rows: [
          ["double lexical category", "same word, noun & verb", "Time flies like an arrow. (flies = v/n)"],
          ["attachment shift", "PP or clause binds either way", "I shot an elephant in my pajamas."],
          ["zeugma", "one verb, two incompatible objects", "She broke his car and his heart."],
          ["syntactic blend", "two structures fused", "a bun in the oven is half-baked."],
          ["compounding pun", "hidden word inside a compound", "atheism is a non-prophet organization."],
        ],
        note: "El juego de palabras de calidad es INGENIERÍA: elige una palabra con doble categoría (flies, like, left), la coloca donde ambas lecturas encajen y deja que el contexto dispare la segunda. Zeugma: un verbo, dos objetos, un solo sentido literal.",
      },
    ],
    moreExamples: [
      { it: "He left his job and his inhibitions behind.", es: "Dejó atrás su trabajo y sus inhibiciones. (zeugma)" },
      { it: "I'm reading a book about anti-gravity — it's impossible to put down.", es: "Leo un libro sobre antigravedad: es imposible dejarlo. (doble sentido de put down)" },
      { it: "The pun is mightier than the word.", es: "El juego de palabras es más poderoso que la palabra. (paronomasia)" },
    ],
    drills: {
      transform: [
        { q: "Identify the zeugma: «She stole my heart and my parking spot.»", options: ["stole applies literally to one, figuratively to the other", "stole is literal for both", "there is no ambiguity"], answer: 0, explain: "Zeugma: un verbo, lectura literal + figurada." },
        { q: "Build a double-category pun with 'left': «The diplomat ___»", options: ["left the right turn, turned left, and left", "left left left the left", "the left left of the left"], answer: 0, explain: "left = se fue / izquierda — tres categorías en fila." },
      ],
      errors: [
        { q: "Which line contains a hidden-word pun?", options: ["Atheism is a non-prophet organization.", "He runs every morning.", "The report is on the table."], answer: 0, explain: "non-prophet esconde non-profit + prophet." },
      ],
    },
  },
  "en-cu-c2-12": {
    tables: [
      {
        title: "Oratory synthesis · the C2 closing toolkit",
        headers: ["Device", "Pattern", "Use it for"],
        rows: [
          ["parallelism", "same grammatical shape ×2+", "momentum, memory"],
          ["inversion", "negative/limiting adverb first + aux-subject", "Never have we needed this more."],
          ["emphatic do", "do/does/did + base", "We did make a difference."],
          ["ellipsis", "cut the repeated words", "To some, a symbol. To others, a scar."],
          ["closing tricolon", "short → shorter → shortest", "We came. We learned. We stayed."],
        ],
        note: "El discurso de graduación resume toda la retórica: inversión tras adverbio negativo (Never have we…), do enfático para contradecir la duda, y elipsis para dejar que el oyente complete. La tríada final DECRECE en longitud: cada golpe más corto.",
      },
    ],
    moreExamples: [
      { it: "Not once did we walk alone.", es: "Ni una sola vez caminamos solos. (inversión)" },
      { it: "You do have what it takes.", es: "Sí tienen lo que hace falta. (do enfático)" },
      { it: "For our parents, our teachers, ourselves.", es: "Por nuestros padres, nuestros maestros, nosotros mismos. (elipsis)" },
    ],
    drills: {
      transform: [
        { q: "Invert it: «We have never needed this more.»", options: ["Never have we needed this more.", "Never we have needed this more.", "Never did we needed this more."], answer: 0, explain: "Adverbio negativo primero + have + sujeto." },
        { q: "Add emphatic do: «I believe in you.» (contradicting doubt)", options: ["I do believe in you.", "I am believing in you truly.", "I did believe in you now."], answer: 0, explain: "do presente enfatiza la afirmación actual." },
      ],
      errors: [
        { q: "Fix the inversion: «Rarely I have seen such courage.»", options: ["Rarely have I seen such courage.", "Rarely I saw have such courage.", "Rarely did I saw such courage."], answer: 0, explain: "Rarely + have + sujeto + participio." },
      ],
    },
  },
};
