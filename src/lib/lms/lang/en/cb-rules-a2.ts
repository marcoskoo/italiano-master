import type { CbGrammarPack } from "../cb-rules";

/* ═══ EN A2 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════ */

export const EN_CB_RULES_A2: Record<string, CbGrammarPack> = {
  "en-cu-a2-01": {
    tables: [
      {
        title: "Past simple · -ed and the top irregulars",
        headers: ["Type", "Rule", "Examples"],
        rows: [
          ["Regular", "+ ed", "watch → watched · stay → stayed"],
          ["Regular: e → d", "live → lived · dance → danced", ""],
          ["Regular: consonant + y", "y → ied", "study → studied · try → tried"],
          ["Irregular (memorize!)", "no rule", "go → went · have → had · see → saw"],
          ["Negative / question", "didn't + base / Did + base?", "I didn't go. · Did you see it?"],
        ],
        note: "Como el pretérito: acción terminada con marcador de tiempo (yesterday, last Saturday). En negativas y preguntas el auxiliar did se lleva el pasado: «Did you went?» ✗ → Did you go?",
      },
    ],
    moreExamples: [
      { it: "I visited my cousins in Austin last weekend.", es: "Visité a mis primos en Austin el fin de semana pasado." },
      { it: "We didn't stay home — we went to a tailgate party.", es: "No nos quedamos en casa, fuimos a una fiesta tailgate." },
      { it: "Did you watch the game on Sunday?", es: "¿Viste el partido el domingo?" },
    ],
    drills: {
      transform: [
        { q: "Rewrite in the past: «We stay home and watch a movie.»", options: ["We stayed home and watched a movie.", "We stayed home and watch a movie.", "We were stay home and watch a movie."], answer: 0, explain: "stay → stayed; watch → watched (regulares en -ed)." },
        { q: "Make it negative: «I saw the game.»", options: ["I didn't see the game.", "I don't saw the game.", "I wasn't see the game."], answer: 0, explain: "didn't + base: see vuelve a su forma base." },
      ],
      errors: [
        { q: "Fix it: «Did you went to the brunch?»", options: ["Did you go to the brunch?", "Did you going to the brunch?", "Did you wented to the brunch?"], answer: 0, explain: "Con did, el verbo va en base: go." },
      ],
    },
  },
  "en-cu-a2-02": {
    tables: [
      {
        title: "Ordering politely in America",
        headers: ["Register", "Formula", "Example"],
        rows: [
          ["Neutral (friends)", "Can I have…?", "Can I have some sugar?"],
          ["Polite (anywhere)", "I'd like…, please", "I'd like a medium latte."],
          ["Very polite", "Could I get…?", "Could I get that to go, please?"],
          ["✗ Rude", "Give me… / I want…", "Give me a coffee. (sounds aggressive)"],
        ],
        note: "El español pide con «dame / quiero + por favor»; el inglés americano sin fórmula interrogativa suena a orden militar. La cortesía vive en el auxiliar: Can/Could/Would.",
      },
    ],
    moreExamples: [
      { it: "Could I get a large iced coffee with oat milk?", es: "¿Me podría dar un café helado grande con leche de avena?" },
      { it: "I'd like it with extra foam, please.", es: "Lo quisiera con espuma extra, por favor." },
      { it: "Do you have any gluten-free muffins?", es: "¿Tienen muffins sin gluten?" },
    ],
    drills: {
      transform: [
        { q: "Make it polite: «I want a muffin.»", options: ["I'd like a muffin, please.", "I want muffin, polite.", "Give me one muffin, thanks."], answer: 0, explain: "I'd like + please: el estándar cortés." },
        { q: "some or any? «There aren't ___ nuts in it.»", options: ["any", "some", "a"], answer: 0, explain: "Negativa → any." },
      ],
      errors: [
        { q: "Fix it: «Give me a tea.» (in a café)", options: ["Could I get a tea, please?", "You give me tea now.", "I will take tea immediately."], answer: 0, explain: "Give me… suena brusco; usa Could I get…, please?" },
      ],
    },
  },
  "en-cu-a2-03": {
    tables: [
      {
        title: "Comparatives & superlatives · build them",
        headers: ["Adjective", "Comparative", "Superlative"],
        rows: [
          ["short: cheap, nice", "+ er / + est", "cheaper than · the cheapest"],
          ["long: expensive, beautiful", "more… / the most…", "more expensive than · the most expensive"],
          ["irregular: good / bad", "better / worse", "the best / the worst"],
          ["irregular: far", "farther / further", "the farthest / the furthest"],
          ["exception: fun", "more fun (✗ funner)", "the most fun"],
        ],
        note: "Trampa: «more cheaper» ✗ — nunca -er y more juntos. Y el español dice «que» dos veces («más barato que»); el inglés usa than: cheaper THAN.",
      },
    ],
    moreExamples: [
      { it: "These gloves are nicer than those.", es: "Estos guantes son más bonitos que esos." },
      { it: "It was the best price at the outlet.", es: "Era el mejor precio del outlet." },
      { it: "That sweater is the most expensive, but this one is cheaper.", es: "Ese suéter es el más caro, pero este es más barato." },
    ],
    drills: {
      transform: [
        { q: "Build the comparative: «This scarf is ___ (cheap) than that one.»", options: ["cheaper", "more cheap", "cheapper"], answer: 0, explain: "Adjetivo corto → -er + than." },
        { q: "Build the superlative: «It's ___ (good) price at the outlet.»", options: ["the best", "the goodest", "the most good"], answer: 0, explain: "good → better → the best (irregular)." },
      ],
      errors: [
        { q: "Fix it: «This jacket is more cheaper than that one.»", options: ["This jacket is cheaper than that one.", "This jacket is more cheap than that one.", "This jacket is cheapest than that one."], answer: 0, explain: "Nunca more + -er juntos." },
      ],
    },
  },
  "en-cu-a2-04": {
    tables: [
      {
        title: "Past continuous vs past simple",
        headers: ["", "Past continuous", "Past simple"],
        rows: [
          ["Form", "was/were + -ing", "base + ed / irregular"],
          ["Job", "paints the scene (decorado)", "tells the event (evento)"],
          ["Example", "We were waiting for the subway…", "…when the doors closed."],
          ["Two parallel scenes", "I was taking photos while he was laughing", "—"],
          ["Interrupted formula", "was -ing + when + past simple", "I was losting my card ← ✗ I lost my MetroCard"],
        ],
        note: "Mientras + imperfecto español = while + past continuous. La acción que IRRUMPE siempre va en pasado simple, como el pretérito español.",
      },
    ],
    moreExamples: [
      { it: "I was taking photos when it started to rain.", es: "Estaba tomando fotos cuando empezó a llover." },
      { it: "While we were running back, a guy sold us two umbrellas.", es: "Mientras volvíamos corriendo, un tipo nos vendió dos paraguas." },
      { it: "They were arguing when the train arrived.", es: "Estaban discutiendo cuando llegó el tren." },
    ],
    drills: {
      transform: [
        { q: "Choose the interrupter: «We ___ for the bus when it ___ to rain.»", options: ["were waiting / started", "waited / was starting", "were waiting / was starting"], answer: 0, explain: "Escena → past continuous; evento que irrumpe → past simple." },
        { q: "Rewrite with while: «I was cooking. She called.»", options: ["She called while I was cooking.", "She was calling while I cooked.", "She called while I cooked dinner."], answer: 0, explain: "while + escena en -ing + evento en pasado simple." },
      ],
      errors: [
        { q: "Fix it: «I was losing my MetroCard when we ran.»", options: ["I lost my MetroCard when we were running.", "I was lose my MetroCard when we ran.", "I lost my MetroCard when we was running."], answer: 0, explain: "«Perder la tarjeta» es el evento (past simple); correr era la escena (-ing)." },
      ],
    },
  },
  "en-cu-a2-05": {
    tables: [
      {
        title: "be going to vs will",
        headers: ["Form", "Meaning", "Example"],
        rows: [
          ["be going to + base", "plan decided BEFORE speaking", "I'm going to watch the game at Joe's Bar."],
          ["will + base (I'll…)", "decision made NOW · promise", "I'll meet you there at 6:30."],
          ["be going to", "prediction with EVIDENCE", "Look at those clouds — it's going to rain."],
          ["will", "prediction / opinion", "It'll be a great game!"],
          ["✗ never", "will in the if-clause", "If it rains… (✗ If it will rain…)"],
        ],
        note: "«Voy a mirar el partido» (ya decidido) = I'm going to watch. «Vale, te veo allí» (lo decido al hablar) = I'll meet you. El español usa «ir a» para ambos; el inglés separa.",
      },
    ],
    moreExamples: [
      { it: "We're going to visit my in-laws this weekend.", es: "Vamos a visitar a mis suegros este fin de semana." },
      { it: "Don't worry — I'll text you when I'm on my way.", es: "No te preocupes, te escribo cuando vaya en camino." },
      { it: "She's going to love this gift.", es: "Le va a encantar este regalo." },
    ],
    drills: {
      transform: [
        { q: "Decide NOW: your friend offers tickets. «___ take them!»", options: ["I'll", "I'm going to", "I would"], answer: 0, explain: "Decisión del momento → will (I'll)." },
        { q: "Plan made before: «We ___ (watch) the game at Joe's tonight.»", options: ["are going to watch", "will watching", "watch will"], answer: 0, explain: "Plan previo → be going to + base." },
      ],
      errors: [
        { q: "Fix it: «If it will rain, I'm going to stay home.»", options: ["If it rains, I'm going to stay home.", "If it raining, I stay home.", "If it will raining, I'll stay."], answer: 0, explain: "Nunca will dentro del if: If it rains…." },
      ],
    },
  },
  "en-cu-a2-06": {
    tables: [
      {
        title: "there is / there are + place prepositions",
        headers: ["Preposition", "Meaning", "Example"],
        rows: [
          ["next to / by", "al lado de", "There's a balcony next to the kitchen."],
          ["across from", "enfrente de", "The gym is across from the lobby."],
          ["between X and Y", "entre", "The desk is between the bed and the window."],
          ["on / in / under", "sobre / dentro / debajo", "The keys are on the counter."],
          ["near / far from", "cerca de / lejos de", "It's far from downtown."],
        ],
        note: "«There's two bedrooms» ✗ — aunque escuches a nativos relajados, en escritura: there are + plural. Y «enfrente de» = across from (no «in front of» para edificios).",
      },
    ],
    moreExamples: [
      { it: "There are two desks by the window.", es: "Hay dos escritorios junto a la ventana." },
      { it: "Is there a laundry room in the basement?", es: "¿Hay una sala de lavandería en el sótano?" },
      { it: "There aren't any parking spots downtown.", es: "No hay estacionamientos en el centro." },
    ],
    drills: {
      transform: [
        { q: "is or are? «There ___ a balcony next to the kitchen.»", options: ["is", "are", "be"], answer: 0, explain: "a balcony = singular → there is (there's)." },
        { q: "Rewrite with across from: «The park is in front of the building.» (US)", options: ["The park is across from the building.", "The park is across of the building.", "The park is front across the building."], answer: 0, explain: "enfrente de (edificios, EE. UU.) = across from." },
      ],
      errors: [
        { q: "Fix it: «There's two bathrooms in the apartment.»", options: ["There are two bathrooms in the apartment.", "There is two bathroom in the apartment.", "There be two bathrooms in the apartment."], answer: 0, explain: "two bathrooms = plural → there are." },
      ],
    },
  },
  "en-cu-a2-07": {
    tables: [
      {
        title: "should / shouldn't + symptoms",
        headers: ["Pattern", "Example"],
        rows: [
          ["should + base (all persons, no -s)", "You should rest for a few days."],
          ["shouldn't + base", "You shouldn't go to work tomorrow."],
          ["have a + symptom", "I have a headache / a fever / a sore throat."],
          ["My X hurts", "My throat hurts. · My back hurts."],
          ["should + see", "You should see a doctor / go to urgent care."],
        ],
        note: "«Deberías» = should, igual para todas las personas (never «he shoulds»). Y en EE. UU. los síntomas se «tienen» (have a cold) o «duelen» (my throat hurts), no «estoy resfriado».",
      },
    ],
    moreExamples: [
      { it: "You should drink plenty of fluids.", es: "Deberías tomar muchos líquidos." },
      { it: "I have a runny nose and a cough.", es: "Tengo la nariz congestionada y tos." },
      { it: "She shouldn't lift anything heavy.", es: "No debería levantar nada pesado." },
    ],
    drills: {
      transform: [
        { q: "Give advice: «I have a fever.»", options: ["You should rest and drink fluids.", "You should to rest.", "You should resting."], answer: 0, explain: "should + verbo base (sin to, sin -ing)." },
        { q: "Make it negative advice: «Go to work tomorrow.» (bad idea)", options: ["You shouldn't go to work tomorrow.", "You don't should go to work.", "You shouldn't going to work."], answer: 0, explain: "Consejo negativo → shouldn't + base." },
      ],
      errors: [
        { q: "Fix it: «He shoulds see a doctor.»", options: ["He should see a doctor.", "He should seeing a doctor.", "He should to see a doctor."], answer: 0, explain: "should nunca lleva -s ni to." },
      ],
    },
  },
  "en-cu-a2-08": {
    tables: [
      {
        title: "Countable vs uncountable · measure it",
        headers: ["Type", "Article", "Question", "Measure"],
        rows: [
          ["Countable (carrot, egg)", "a carrot / two carrots", "How many…?", "a bag of carrots"],
          ["Uncountable (rice, water)", "✗ a rice · some rice", "How much…?", "a cup of rice · a bottle of water"],
          ["Both worlds", "a coffee (a cup) / some coffee (the stuff)", "—", "two coffees, please"],
          ["Negatives", "don't have any eggs / rice", "—", "We're out of milk."],
        ],
        note: "«Un café» puede ser una taza (a coffee, contable) o la sustancia (some coffee). El español dice «¿cuánto arroz?»; el inglés exige How much rice? porque rice no se cuenta.",
      },
    ],
    moreExamples: [
      { it: "How many people are coming to dinner?", es: "¿Cuántas personas vienen a cenar?" },
      { it: "We need two cups of rice and a pound of cheese.", es: "Necesitamos dos tazas de arroz y una libra de queso." },
      { it: "There's some rice left, but we don't have any meat.", es: "Queda algo de arroz, pero no tenemos carne." },
    ],
    drills: {
      transform: [
        { q: "much or many? «How ___ cheese did you buy?»", options: ["much", "many", "lot"], answer: 0, explain: "cheese = incontable → How much." },
        { q: "Rewrite with a measure: «I want water.» (a glass)", options: ["I want a glass of water.", "I want a glass water.", "I want a water glass of."], answer: 0, explain: "Contenedor + of + incontable." },
      ],
      errors: [
        { q: "Fix it: «There are some rice left.»", options: ["There is some rice left.", "There are rices left.", "There be some rice left."], answer: 0, explain: "rice = incontable → singular → there is." },
      ],
    },
  },
  "en-cu-a2-09": {
    tables: [
      {
        title: "Present perfect · the keyword map",
        headers: ["Keyword", "Position", "Example"],
        rows: [
          ["ever", "before the main verb", "Have you ever worked in retail?"],
          ["never", "before the main verb", "I've never worked in a store."],
          ["already", "between have and participle", "I've already submitted it."],
          ["just", "between have and participle", "I've just finished the interview."],
          ["yet", "END of questions / negatives", "Have you finished yet? · Not yet."],
        ],
        note: "Formación: have/has + participio (worked, gone, seen). «¿Alguna vez…?» = Have you ever…? — el español usa pretérito («¿trabajaste alguna vez?»), el inglés usa perfecto.",
      },
    ],
    moreExamples: [
      { it: "Have you ever lived in another state?", es: "¿Has vivido alguna vez en otro estado?" },
      { it: "I've just sent you an email.", es: "Acabo de enviarte un correo." },
      { it: "They haven't called me back yet.", es: "Todavía no me han devuelto la llamada." },
    ],
    drills: {
      transform: [
        { q: "Place «yet»: «Have you finished the application?»", options: ["Have you finished the application yet?", "Have you yet finished the application?", "Yet have you finished the application?"], answer: 0, explain: "yet va al final en preguntas y negativas." },
        { q: "Build the perfect: «I ___ (never / work) in a store.»", options: ["have never worked", "never have worked", "never worked ever"], answer: 0, explain: "never entre have y el participio." },
      ],
      errors: [
        { q: "Fix it: «Did you ever work in retail?» (interview question)", options: ["Have you ever worked in retail?", "Have you ever work in retail?", "Do you ever worked in retail?"], answer: 0, explain: "Experiencia sin tiempo definido → present perfect, no past simple." },
      ],
    },
  },
  "en-cu-a2-10": {
    tables: [
      {
        title: "will · weather predictions",
        headers: ["Form", "Example"],
        rows: [
          ["It'll + weather verb", "It'll snow all day."],
          ["It won't + weather verb", "It won't be cold on Friday."],
          ["Yes/no question", "Will it rain tomorrow?"],
          ["With a source", "The forecast says it'll be sunny."],
          ["Evidence right now", "Look at the sky — it's going to storm."],
        ],
        note: "Weather verbs del americano: snow, rain, drizzle, warm up, cool down, clear up. «Hace sol» = It's sunny (con it sujeto climático, no «makes sun»).",
      },
    ],
    moreExamples: [
      { it: "It'll warm up by Friday.", es: "Calentará para el viernes." },
      { it: "It won't rain during the game.", es: "No lloverá durante el partido." },
      { it: "They say it'll clear up in the afternoon.", es: "Dicen que aclarará por la tarde." },
    ],
    drills: {
      transform: [
        { q: "Predict with will: «Do you think it ___ (rain) tomorrow?»", options: ["will rain", "is raining tomorrow", "rains will"], answer: 0, explain: "Predicción sin evidencia → will + base." },
        { q: "Make it negative: «It'll be cold on Friday.»", options: ["It won't be cold on Friday.", "It willn't be cold on Friday.", "It doesn't will be cold."], answer: 0, explain: "Negativa de will = won't." },
      ],
      errors: [
        { q: "Fix it: «The forecast says it will to snow tonight.»", options: ["The forecast says it will snow tonight.", "The forecast says it wills snow tonight.", "The forecast say it will snowing tonight."], answer: 0, explain: "will + verbo base, sin to ni -s." },
      ],
    },
  },
  "en-cu-a2-11": {
    tables: [
      {
        title: "The politeness ladder + object pronouns",
        headers: ["Level", "Formula", "Example"],
        rows: [
          ["Neutral", "Can you + base…?", "Can you help us?"],
          ["Softer", "Could you + base…?", "Could you help me with these boxes?"],
          ["Most polite", "Would you mind + -ing…?", "Would you mind closing the window?"],
          ["Answer to mind", "No, not at all (= yes, I'll do it)", "Would you mind? — No, not at all."],
          ["Object pronouns", "me · you · him · her · us · them", "Tell her the truth. / Call me tomorrow."],
        ],
        note: "«Would you mind» pregunta '¿te molestaría?': responder «Yes» = 'sí, me molesta' — por eso se acepta con «No, not at all». Y «dile» = tell HIM/HER, nunca «tell to him».",
      },
    ],
    moreExamples: [
      { it: "Would you mind watching my bags for a minute?", es: "¿Te importaría vigilar mis maletas un minuto?" },
      { it: "Could you tell him I'm running late?", es: "¿Podrías decirle que voy tarde?" },
      { it: "Can you call us when you get home?", es: "¿Puedes llamarnos cuando llegues a casa?" },
    ],
    drills: {
      transform: [
        { q: "One step more polite: «Can you close the window?»", options: ["Would you mind closing the window?", "Would you mind to close the window?", "Do you mind close the window?"], answer: 0, explain: "Would you mind + -ing (nunca to)." },
        { q: "Replace the noun: «Could you help Maria and me?»", options: ["Could you help us?", "Could you help we?", "Could you help to us?"], answer: 0, explain: "Maria and me = us (pronombre objeto)." },
      ],
      errors: [
        { q: "Fix it: «Would you mind to open the door?»", options: ["Would you mind opening the door?", "Would you mind opens the door?", "Would you mind open the door?"], answer: 0, explain: "mind + verbo-ing." },
      ],
    },
  },
  "en-cu-a2-12": {
    tables: [
      {
        title: "Story connectors · the ladder of a narrative",
        headers: ["Connector", "Spanish", "Job"],
        rows: [
          ["First,", "primero", "opens the story"],
          ["Then / After that,", "luego / después de eso", "next steps"],
          ["Next,", "a continuación", "sequence"],
          ["Suddenly,", "de repente", "turning point"],
          ["Finally / In the end,", "finalmente / al final", "closes the story"],
        ],
        note: "Conecta con comas: «First, we drove to Springfield. Then we stopped at a diner». En narración, el pasado simple reina; los conectores dan el esqueleto.",
      },
    ],
    moreExamples: [
      { it: "First, we packed the car at dawn.", es: "Primero, empacamos el auto al amanecer." },
      { it: "After that, we drove for six hours straight.", es: "Después de eso, manejamos seis horas seguidas." },
      { it: "In the end, the Grand Canyon was the most amazing place.", es: "Al final, el Gran Cañón fue el lugar más increíble." },
    ],
    drills: {
      transform: [
        { q: "Order the story: «___, we had breakfast. ___, we hit the road.»", options: ["First / Then", "Then / First", "Finally / Suddenly"], answer: 0, explain: "First abre, Then continúa." },
        { q: "Build the superlative: «It was ___ (long) day of the trip.»", options: ["the longest", "the most long", "the longer"], answer: 0, explain: "long → the longest." },
      ],
      errors: [
        { q: "Fix it: «At first, we stopped at a diner. Then we drove.» (story order)", options: ["First, we stopped at a diner. Then we drove.", "In the end, we stopped at a diner.", "Finally, we stopped at a diner first."], answer: 0, explain: "«At first» significa 'al principio (pero cambió)'; para narrar usa First." },
      ],
    },
  },
};
