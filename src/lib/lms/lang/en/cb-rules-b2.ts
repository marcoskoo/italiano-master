import type { CbGrammarPack } from "../cb-rules";

/* ═══ EN B2 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════ */

export const EN_CB_RULES_B2: Record<string, CbGrammarPack> = {
  "en-cu-b2-01": {
    tables: [
      {
        title: "Contrast connectors · position and punctuation",
        headers: ["Connector", "Register", "Position", "Example"],
        rows: [
          ["however", "formal", "after . or ; + comma", "Remote work saves time. However, it can feel isolating."],
          ["although", "neutral", "start or middle of clause", "Although I love WFH, I miss my teammates."],
          ["whereas", "formal comparison", "between two clauses", "I value flexibility, whereas the old model valued presence."],
          ["on the other hand", "spoken + written", "new sentence", "Hybrid sounds balanced. On the other hand, someone picks the days."],
          ["while", "neutral", "start or middle", "While the commute is gone, boundaries are gone too."],
        ],
        note: "however SIEMPRE lleva punto y coma o punto antes y coma después: «…, however, …». although = «aunque» + oración (nunca + sustantivo: para eso está despite).",
      },
    ],
    moreExamples: [
      { it: "The office is quiet; however, nobody collaborates there anymore.", es: "La oficina está tranquila; sin embargo, ya nadie colabora allí." },
      { it: "Whereas Gen Z prefers remote, managers prefer visibility.", es: "Mientras que la Gen Z prefiere lo remoto, los gerentes prefieren visibilidad." },
      { it: "Although the data is clear, the decision is political.", es: "Aunque los datos son claros, la decisión es política." },
    ],
    drills: {
      transform: [
        { q: "Punctuate it: «It saves time however it isolates» →", options: ["It saves time. However, it isolates.", "It saves time, however it isolates.", "It saves time however, it isolates."], answer: 0, explain: "however abre oración nueva: punto + However + coma." },
        { q: "although or despite? «___ the cost, we'll proceed.»", options: ["Despite", "Although", "Whereas"], answer: 0, explain: "Despite + sustantivo; although + oración con sujeto y verbo." },
      ],
      errors: [
        { q: "Fix it: «Although the cost is high, but we'll proceed.»", options: ["Although the cost is high, we'll proceed.", "Although the cost is high. But we'll proceed, however.", "Despite the cost is high, we'll proceed."], answer: 0, explain: "although ya es concesivo: no se combina con but." },
      ],
    },
  },
  "en-cu-b2-02": {
    tables: [
      {
        title: "Persuasive frames + conditionals",
        headers: ["Frame", "Formula", "Example"],
        rows: [
          ["soft suggestion", "I'd suggest (that) we + base", "I'd suggest we run a six-month pilot."],
          ["open hypothesis", "What if we + past?", "What if we staggered the days off?"],
          ["2nd conditional", "If + past, would + base", "If we shortened the week, morale would improve."],
          ["1st conditional", "If + present, will + base", "If the pilot works, we'll take it company-wide."],
          ["✗ never", "suggest + -s / suggest to", "✗ I'd suggest we runs · ✗ suggest to run"],
        ],
        note: "Tras suggest, el verbo va en BASE sin -s («I suggest we run», no «we runs») — es un subjuntivo disfrazado. What if + pasado abre hipótesis sin comprometerte.",
      },
    ],
    moreExamples: [
      { it: "What if we tested this with one team first?", es: "¿Y si probáramos esto primero con un equipo?" },
      { it: "If we piloted it, we'd learn fast.", es: "Si lo pilotáramos, aprenderíamos rápido." },
      { it: "I'd suggest we revisit the numbers next week.", es: "Sugeriría que revisemos los números la próxima semana." },
    ],
    drills: {
      transform: [
        { q: "Fix the frame: «I'd suggest we ___ (run) a pilot.»", options: ["run", "runs", "running"], answer: 0, explain: "Tras suggest, la forma verbal va sin -s (subjuntivo)." },
        { q: "Open a hypothesis: «___ we staggered the days off?»", options: ["What if", "How about if we would", "What would if"], answer: 0, explain: "What if + pasado = hipótesis abierta." },
      ],
      errors: [
        { q: "Fix it: «If we would shorten the week, morale would improve.»", options: ["If we shortened the week, morale would improve.", "If we shorten the week, morale would improving.", "If we shortened the week, morale will improve."], answer: 0, explain: "would jamás en el if: If + past simple." },
      ],
    },
  },
  "en-cu-b2-03": {
    tables: [
      {
        title: "Irony toolkit · saying the opposite",
        headers: ["Device", "Signal", "Example"],
        rows: [
          ["sarcasm", "positive words + flat/stressed tone", "Oh great, the machine ate my dollar again."],
          ["understatement", "much less than the reality", "The meeting was not exactly a highlight."],
          ["overstatement", "impossible exaggeration", "You really outdid yourself with those forty slides."],
          ["rhetorical sure", "Sure, I'd love to… (= no way)", "Sure, I'd love to spend Saturday fixing the printer."],
          ["litotes", "not + opposite adjective", "Not bad! (= quite good)"],
        ],
        note: "El inglés americano modera con not: «not exactly», «not quite», «I don't disagree» (≈ estoy bastante de acuerdo). Decir menos de lo que se piensa es cortesía; el español tiende a exagerar («está increíble»).",
      },
    ],
    moreExamples: [
      { it: "Well, that went about as well as possible. (it went badly)", es: "Bueno, eso salió de maravilla. (salió mal)" },
      { it: "I don't disagree with your point.", es: "No estoy en desacuerdo con tu punto. (estoy de acuerdo)" },
      { it: "This is not the worst idea you've had.", es: "No es la peor idea que has tenido. (es buena)" },
    ],
    drills: {
      transform: [
        { q: "Understate it: «The report was a complete disaster.»", options: ["The report was not exactly a success.", "The report was a very big disaster indeed.", "The report was the most disaster."], answer: 0, explain: "Understatement: not exactly + contrario." },
        { q: "Read the litotes: «It's not unheard of.» =", options: ["It happens sometimes.", "It never happens.", "It is forbidden."], answer: 0, explain: "not unheard of = doble negación → «se da el caso»." },
      ],
      errors: [
        { q: "Interpret it: «Sure, I'd love to do your paperwork.» (flat tone) =", options: ["They refuse, politely.", "They accept happily.", "They love paperwork."], answer: 0, explain: "Sarcasmo: sure + entonación plana = negación cortés." },
      ],
    },
  },
  "en-cu-b2-04": {
    tables: [
      {
        title: "Academic hedging · calibrate your claims",
        headers: ["Strength", "Tool", "Example"],
        rows: [
          ["strong", "data shows / clearly", "This evidence shows that…"],
          ["medium", "tend to · often · in many cases", "Interns tend to find jobs faster."],
          ["cautious", "may / might / could", "Costs may rise in the first quarter."],
          ["distancing", "It could be argued that…", "It could be argued that internships benefit most students."],
          ["appearance", "appears to / seems to", "The intervention appears to have worked."],
        ],
        note: "El ensayo inglés odia los absolutos: «everyone knows» ✗. Hedge = freno de mano académico. to some extent, to a certain degree y overall son tus matices de bolsillo.",
      },
    ],
    moreExamples: [
      { it: "The results suggest that the effect is temporary.", es: "Los resultados sugieren que el efecto es temporal." },
      { it: "To some extent, the value depends on the field.", es: "Hasta cierto punto, el valor depende del campo." },
      { it: "Prices are likely to stabilize by June.", es: "Es probable que los precios se estabilicen para junio." },
    ],
    drills: {
      transform: [
        { q: "Hedge it: «Internships are essential for everyone.»", options: ["Internships tend to benefit most students.", "Internships are essential for everyone, maybe probably.", "Everyone essential internships benefits."], answer: 0, explain: "tend to + softer scope = afirmación defendible." },
        { q: "Pick the hedged verb: «The intervention ___ to have worked.»", options: ["appears", "is", "was proving certainly"], answer: 0, explain: "appears to = distancia prudente." },
      ],
      errors: [
        { q: "Fix it: «This proves absolutely that everyone learns online.»", options: ["This suggests that many students can learn online.", "This proves absolute everyone learn online.", "This is proving all people learns online for sure."], answer: 0, explain: " proofs absolutos ✗ → sugiere con may/tend to." },
      ],
    },
  },
  "en-cu-b2-05": {
    tables: [
      {
        title: "Mixed conditionals + polite objections",
        headers: ["Type", "Pattern", "Example"],
        rows: [
          ["past cause → present result", "If + past perfect, would + base", "If we had signed in May, we would be operational now."],
          ["present cause → past result", "If + past simple, would have + participle", "If I were more careful, I wouldn't have lost the file."],
          ["soft objection", "I see your point, but…", "I see your point, but the timeline is tight."],
          ["counter-propose", "Would you consider + -ing?", "Would you consider a shorter term?"],
          ["partial concede", "That's fair. At the same time, …", "That's fair. At the same time, demand has doubled."],
        ],
        note: "Condicionales mixtos cruzan tiempos: causa pasada con efecto presente (had signed → would BE). En negociación, objeción americana = validar + girar: «I see your point, but…».",
      },
    ],
    moreExamples: [
      { it: "If we had raised prices earlier, we wouldn't be losing money.", es: "Si hubiéramos subido precios antes, no estaríamos perdiendo dinero." },
      { it: "If I spoke better French, I would have taken the Paris call.", es: "Si hablara mejor francés, habría tomado la llamada de París." },
      { it: "Would you consider splitting the difference?", es: "¿Consideraría llegar a un punto intermedio?" },
    ],
    drills: {
      transform: [
        { q: "Complete the mix: «If we ___ (hire) her, we'd have the report by now.»", options: ["had hired", "hired", "would hire"], answer: 0, explain: "Causa pasada → had hired; resultado presente → would have." },
        { q: "Object politely: «Your price is too high.»", options: ["I see your point, but the price reflects the scope.", "Your price is wrong and too high.", "No, your price is bad."], answer: 0, explain: "Validar + but = objeción profesional." },
      ],
      errors: [
        { q: "Fix it: «If we would have signed, we would be operational.»", options: ["If we had signed, we would be operational.", "If we signed, we would been operational.", "If we had signed, we will be operational."], answer: 0, explain: "would never in if-clause: If + had + participio." },
      ],
    },
  },
  "en-cu-b2-06": {
    tables: [
      {
        title: "Phrasal verbs · separable vs inseparable",
        headers: ["Type", "Test", "Example"],
        rows: [
          ["separable", "object can go in the middle", "fill me in · pick you up · call them off"],
          ["separable + pronoun", "pronoun MUST go in the middle", "fill me in ✓ · fill in me ✗"],
          ["inseparable", "object stays after", "run into Chelsea · look after the kids"],
          ["three-word", "never separated", "put up with it · look forward to it"],
          ["social set", "—", "hit it off · catch up with · hang out with"],
        ],
        note: "Si el objeto es un PRONOMBRE (me, him, her), el separable lo obliga al medio: «fill me in», nunca «fill in me». Inseparables como run into nunca se parten: «run into her».",
      },
    ],
    moreExamples: [
      { it: "I ran into an old coworker at the airport.", es: "Me topé con un excompañero de trabajo en el aeropuerto." },
      { it: "She bailed on the team at the last minute.", es: "Dejó plantado al equipo a último minuto." },
      { it: "Let's catch up over coffee sometime.", es: "Pongámonos al día un día tomando un café." },
    ],
    drills: {
      transform: [
        { q: "Insert the pronoun: «Can you fill ___ in on the plan?» (me)", options: ["fill me in", "fill in me", "fill to me in"], answer: 0, explain: "Separable + pronombre → el pronombre va en el medio." },
        { q: "Separable or not? «I'll pick ___ at seven.» (her)", options: ["pick her up", "pick up her", "pick up to her"], answer: 0, explain: "pick up = separable → pick her up." },
      ],
      errors: [
        { q: "Fix it: «I ran into him into the conference.»", options: ["I ran into him at the conference.", "I ran him into at the conference.", "I ran at him the conference."], answer: 0, explain: "run into es inseparable; el lugar se une con at." },
      ],
    },
  },
  "en-cu-b2-07": {
    tables: [
      {
        title: "Narrative tenses + past speculation",
        headers: ["Form", "Meaning", "Example"],
        rows: [
          ["past simple", "main event", "She was driving home when the storm hit."],
          ["past continuous", "scene in progress", "It was raining hard around midnight."],
          ["past perfect", "earlier past (before another past point)", "By the time the police arrived, the car had been moved."],
          ["must have + participle", "logical conclusion", "He must have turned it off on purpose."],
          ["can't have + participle", "logically impossible", "He can't have turned off a phone he didn't own."],
          ["might have + participle", "possibility", "The valet might have moved it."],
        ],
        note: "Especular sobre el pasado: must have = «seguro que…»; can't have = «es imposible que…»; might have = «podría haber…». El español usa «debe de haber sido» — mismo raciocinio.",
      },
    ],
    moreExamples: [
      { it: "She must have left in a hurry — the door was open.", es: "Debe de haberse ido con prisa: la puerta estaba abierta." },
      { it: "They can't have known about the recall.", es: "No pueden haber sabido del retiro del producto." },
      { it: "The witness might have misheard the address.", es: "El testigo pudo haber escuchado mal la dirección." },
    ],
    drills: {
      transform: [
        { q: "Speculate: The lights were off and the car was gone. («seguro que salió»)", options: ["They must have gone out.", "They might have gone out for sure.", "They can't have gone out."], answer: 0, explain: "Conclusión lógica → must have + participio." },
        { q: "Order the past: «The police arrived. The car was already moved.» →", options: ["By the time the police arrived, the car had already been moved.", "The police arrived when the car was moving already.", "The police had arrived after the car moved already."], answer: 0, explain: "Anterioridad → past perfect (had been moved)." },
      ],
      errors: [
        { q: "Fix it: «He can't have turned off it, because it wasn't his phone.»", options: ["He can't have turned it off, because it wasn't his phone.", "He can't have turned off them phone.", "He couldn't have turned off it his phone."], answer: 0, explain: "turn off separable + pronombre → turned it off." },
      ],
    },
  },
  "en-cu-b2-08": {
    tables: [
      {
        title: "STAR answers · tense discipline",
        headers: ["STAR step", "Tense to use", "Example"],
        rows: [
          ["Situation", "past simple (set the scene)", "Last spring, our support queue exploded."],
          ["Task", "past simple / had to", "I had to cut response times."],
          ["Action", "past simple + achievement verbs", "I spearheaded a triage system."],
          ["Result", "present perfect (still true) / past simple", "The process I built is still in place today."],
          ["achievement verbs", "spearhead · deliver · streamline · lead", "We've delivered every milestone on schedule."],
        ],
        note: "Disciplina temporal del interview americano: situación/acción en past simple; resultados que siguen vigentes en present perfect («is still in place», «we've delivered»). Logros con verbos fuertes, nunca «I helped to do».",
      },
    ],
    moreExamples: [
      { it: "I streamlined the onboarding process.", es: "Optimicé el proceso de incorporación." },
      { it: "We've kept churn under 2% since then.", es: "Hemos mantenido la fuga bajo el 2 % desde entonces." },
      { it: "I coordinated a team of five volunteers.", es: "Coordiné un equipo de cinco voluntarios." },
    ],
    drills: {
      transform: [
        { q: "Pick the tense: «The system I ___ (build) is still in place.»", options: ["built", "have built", "build"], answer: 0, explain: "Acción pasada terminada → past simple (built)." },
        { q: "Make the result current: «We ___ (deliver) every milestone so far.»", options: ["have delivered", "delivered", "deliver"], answer: 0, explain: "so far + vigencia → present perfect." },
      ],
      errors: [
        { q: "Fix it (STAR): «Last spring I have spearheaded a triage system.»", options: ["Last spring I spearheaded a triage system.", "Last spring I spearhead a triage system.", "Last spring I was spearheading have a system."], answer: 0, explain: "Tiempo terminado (last spring) → past simple." },
      ],
    },
  },
  "en-cu-b2-09": {
    tables: [
      {
        title: "Gradable vs extreme adjectives",
        headers: ["Type", "Adverbs", "Examples"],
        rows: [
          ["gradable", "very · a bit · pretty · extremely", "very good · a bit pricey · pretty decent"],
          ["extreme", "absolutely · completely · totally (✗ very)", "absolutely stunning · totally exhausted"],
          ["✗ very + extreme", "✗ very stunning", "→ absolutely stunning"],
          ["downtoner", "slightly · somewhat · fairly", "slightly overpriced · fairly generous"],
          ["evaluative", "seriously · honestly (attitude)", "seriously overrated · honestly impressive"],
        ],
        note: "Los extremos ya contienen «muy»: stunning = muy impresionante → se intensifica con absolutely, no con very. «Muy agotado» = absolutely exhausted (✗ very exhausted).",
      },
    ],
    moreExamples: [
      { it: "The beignets were absolutely stunning.", es: "Los beignets estaban absolutamente impresionantes." },
      { it: "The place is a bit pricey, to be honest.", es: "El sitio es algo caro, la verdad." },
      { it: "That place is seriously overrated.", es: "Ese sitio está súper sobrevalorado." },
    ],
    drills: {
      transform: [
        { q: "Choose the adverb: «The view was ___ breathtaking.»", options: ["absolutely", "very", "a bit"], answer: 0, explain: "breathtaking es extremo → absolutely." },
        { q: "Soften it: «The service was slow.» →", options: ["The service was a bit slow.", "The service was absolutely slow.", "The service was completely slow."], answer: 0, explain: "Gradable → a bit para suavizar." },
      ],
      errors: [
        { q: "Fix it: «The gumbo was very delicious.»", options: ["The gumbo was absolutely delicious.", "The gumbo was very deliciouser.", "The gumbo was totally tasteful very."], answer: 0, explain: "delicious es extremo → absolutely." },
      ],
    },
  },
  "en-cu-b2-10": {
    tables: [
      {
        title: "Idioms & slang · fixed form, fluid register",
        headers: ["Category", "Rule", "Examples"],
        rows: [
          ["fixed form", "don't change a word", "a piece of cake · hit it off · bail on"],
          ["non-literal", "meaning ≠ words", "ghosted = disappeared on purpose"],
          ["slang agreement", "I'm down · down for it", "If she wants to hang out, I'm down."],
          ["register check", "casual ≠ workplace", "✗ «I'm down» in a job interview"],
          ["trend-aware", "slang expires fast", "ghost · vibe · low-key · salty"],
        ],
        note: "Un idiom es un ladrillo: no se conjugan sus piezas por dentro («they hit it off», no «they hit it on»). Y el slang caduca: lo que suena genial hoy, sonara raro en cinco años.",
      },
    ],
    moreExamples: [
      { it: "The exam was a piece of cake.", es: "El examen fue pan comido." },
      { it: "He low-key wants to be invited.", es: "En el fondo quiere que lo inviten." },
      { it: "We're on the same page about the budget.", es: "Estamos de acuerdo sobre el presupuesto." },
    ],
    drills: {
      transform: [
        { q: "Fix the idiom: «The recipe was a piece of a cake.»", options: ["The recipe was a piece of cake.", "The recipe was piece of cakes.", "The recipe was a cake piece."], answer: 0, explain: "Forma fija: a piece of cake." },
        { q: "Match the register: accepting plans with friends →", options: ["I'm down.", "I would be delighted to participate.", "I accept your proposal."], answer: 0, explain: "Casual con amigos → I'm down." },
      ],
      errors: [
        { q: "Fix it: «She ghosted me, so I will revenge her.»", options: ["She ghosted me, so I'm done with her.", "She ghosted me so I ghost back her.", "She was ghost me so I am ghosting she."], answer: 0, explain: "ghost = desaparecer; la reacción natural casual: I'm done with her." },
      ],
    },
  },
  "en-cu-b2-11": {
    tables: [
      {
        title: "Passive with agent + cause connectors",
        headers: ["Structure", "Formula", "Example"],
        rows: [
          ["passive, present", "am/is/are + participle", "The grid is inspected every year."],
          ["passive, past", "was/were + participle", "The grid was designed decades ago."],
          ["with agent", "…participle + by + doer", "The agreement was written by the attorney general's office."],
          ["cause → effect", "Due to / Because of + noun, …", "Due to rising demand, blackouts are more frequent."],
          ["effect ← cause", "…, which leads to / results in …", "This plan leads to lower risk."],
        ],
        note: "El agente con by importa cuando QUIÉN lo hizo es la noticia («was written by the AG's office»). due to + sustantivo; because of + sustantivo; because + oración completa.",
      },
    ],
    moreExamples: [
      { it: "The report was released by an independent lab.", es: "El informe fue publicado por un laboratorio independiente." },
      { it: "Because of the heat wave, demand surged.", es: "Debido a la ola de calor, la demanda se disparó." },
      { it: "Delaying maintenance results in higher costs.", es: "Posponer el mantenimiento resulta en costos más altos." },
    ],
    drills: {
      transform: [
        { q: "Passivize it: «The attorney general's office wrote the agreement.»", options: ["The agreement was written by the attorney general's office.", "The agreement was wrote by the office.", "The agreement is written from the office."], answer: 0, explain: "was + participio (written) + by + agente." },
        { q: "Link cause and effect: «rising demand» → «blackouts»", options: ["Due to rising demand, blackouts are becoming more frequent.", "Due rising demand, blackouts are frequenting.", "Because rising demand, blackouts is frequent."], answer: 0, explain: "Due to + sustantivo, + consecuencia." },
      ],
      errors: [
        { q: "Fix it: «The plan was lead to lower risk.»", options: ["The plan leads to lower risk.", "The plan is lead to lower risk.", "The plan was leading lower risk."], answer: 0, explain: "lead to es activo: leads (presente) — no confundas pasiva con verbo activo." },
      ],
    },
  },
  "en-cu-b2-12": {
    tables: [
      {
        title: "The pitch grammar map",
        headers: ["Pitch move", "Tense", "Example"],
        rows: [
          ["the what (proposal)", "present simple", "Vecino is a marketplace that connects…"],
          ["traction (evidence)", "present perfect", "We've grown 18% month over month since launch."],
          ["the engine", "passive (is driven by)", "Growth is driven by word of mouth."],
          ["the ask", "would + base (conditional)", "The funds would be used to launch in two cities."],
          ["the close", "will + base (commitment)", "With your support, we will be in ten cities by December."],
        ],
        note: "El pitch es un mapa de tiempos: propuesta en presente, tracción en perfecto («hemos crecido»), pedido en condicional («se usaría») y cierre con will. El español haría todo en futuro; el pitch americano muestra evidencia.",
      },
    ],
    moreExamples: [
      { it: "We've signed twelve restaurant partners so far.", es: "Hemos firmado doce restaurantes socios hasta ahora." },
      { it: "Demand is driven by repeat customers.", es: "La demanda la impulsan los clientes recurrentes." },
      { it: "This round would let us hire two engineers.", es: "Esta ronda nos permitiría contratar a dos ingenieros." },
    ],
    drills: {
      transform: [
        { q: "Pick the tense: «We ___ (grow) 18% since launch.»", options: ["have grown", "grow", "grew since launch"], answer: 0, explain: "since launch + tracción → present perfect." },
        { q: "Make the ask conditional: «The funds ___ (be) used to expand.»", options: ["would be", "will been", "are being would"], answer: 0, explain: "El ask va en condicional: would + base." },
      ],
      errors: [
        { q: "Fix it: «Vecino is a marketplace who connects restaurants.»", options: ["Vecino is a marketplace that connects restaurants.", "Vecino is a marketplace who it connects restaurants.", "Vecino is marketplace which connecting restaurants."], answer: 0, explain: "marketplace = cosa → that/which." },
      ],
    },
  },
};
