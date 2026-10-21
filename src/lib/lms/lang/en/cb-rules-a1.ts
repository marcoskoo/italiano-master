import type { CbGrammarPack } from "../cb-rules";

/* ═══ EN A1 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════
   Mismo estándar que la vista Grammatica (v9.35): tabla de reglas de
   construcción, ejemplos ampliados (4→7) y drills generados de las
   tablas. `.it` = inglés, `.es` = español.                                */

export const EN_CB_RULES_A1: Record<string, CbGrammarPack> = {
  "en-cu-a1-01": {
    tables: [
      {
        title: "to be · paradigm and contractions",
        headers: ["Subject", "Full form", "Contraction", "Negative"],
        rows: [
          ["I", "I am", "I'm", "I'm not"],
          ["you", "you are", "you're", "you aren't"],
          ["he / she / it", "he is", "he's", "he isn't"],
          ["we", "we are", "we're", "we aren't"],
          ["they", "they are", "they're", "they aren't"],
        ],
        note: "En español «soy/eres» nunca se contrae. En inglés americano la forma plena (I am, he is) suena enfática o muy formal: úsala solo para contradecir: «I AM a student».",
      },
    ],
    moreExamples: [
      { it: "He's my new roommate.", es: "Él es mi nuevo compañero de cuarto." },
      { it: "They're from Brazil.", es: "Ellos son de Brasil." },
      { it: "I'm not from Chicago — I'm from Lima.", es: "No soy de Chicago, soy de Lima." },
    ],
    drills: {
      transform: [
        { q: "Contract it: «I am from Peru.»", options: ["I'm from Peru.", "I'mn from Peru.", "I amn't from Peru."], answer: 0, explain: "I am → I'm (la contracción estándar del americano casual)." },
        { q: "Make it negative: «She's American.»", options: ["She isn't American.", "She's not American.", "Both are correct."], answer: 2, explain: "Las dos negativas valen: she isn't = she's not." },
      ],
      errors: [
        { q: "Fix it: «You're name is Jake.»", options: ["Your name is Jake.", "You name is Jake.", "You're the name Jake."], answer: 0, explain: "«Your» es el posesivo; «you're» = you are." },
      ],
    },
  },
  "en-cu-a1-02": {
    tables: [
      {
        title: "Possessives + have · who owns what",
        headers: ["Person", "Possessive", "have"],
        rows: [
          ["I", "my", "I have"],
          ["you", "your", "you have"],
          ["he", "his ← gender of the OWNER", "he has"],
          ["she", "her ← gender of the OWNER", "she has"],
          ["we", "our", "we have"],
          ["they", "their", "they have"],
        ],
        note: "Trampa 1: «su» español = his/her/their según el poseedor. «her father» = el padre DE ELLA. Trampa 2: he/she → HAS, no «have».",
      },
    ],
    moreExamples: [
      { it: "Our apartment is small, but it's cheap.", es: "Nuestro apartamento es pequeño, pero es barato." },
      { it: "Their names are Emma and Jake.", es: "Ellos se llaman Emma y Jake." },
      { it: "My sister has two cats.", es: "Mi hermana tiene dos gatos." },
    ],
    drills: {
      transform: [
        { q: "Rewrite with «they»: «He has one brother.»", options: ["They have one brother.", "They has one brother.", "They having one brother."], answer: 0, explain: "they → have (la -s solo va con he/she/it)." },
        { q: "Rewrite with «her»: «This is Ana's phone.»", options: ["This is her phone.", "This is hers phone.", "This is she phone."], answer: 0, explain: "Poseedor mujer → her + sustantivo." },
      ],
      errors: [
        { q: "Fix it: «My brother have a car.»", options: ["My brother has a car.", "My brother haves a car.", "My brother is have a car."], answer: 0, explain: "My brother = he → has." },
      ],
    },
  },
  "en-cu-a1-03": {
    tables: [
      {
        title: "Present simple · I / you (build it)",
        headers: ["Function", "Formula", "Example"],
        rows: [
          ["Affirmative", "subject + base verb", "I get up at 6:30."],
          ["Negative", "subject + don't + base verb", "I don't get up early."],
          ["Question", "Do + subject + base verb?", "Do you have breakfast?"],
          ["Short answer", "Yes, I do. / No, I don't.", "— Do you start at 8? — Yes, I do."],
        ],
        note: "El español niega con «no»: «no me levanto». El inglés necesita el auxiliar don't: «I don't get up». Nunca «I get not up».",
      },
    ],
    moreExamples: [
      { it: "I don't work on weekends.", es: "No trabajo los fines de semana." },
      { it: "Do you take the bus or the subway?", es: "¿Tomas el autobús o el metro?" },
      { it: "Classes start at 8 a.m. and finish at 2 p.m.", es: "Las clases empiezan a las 8 a. m. y terminan a las 2 p. m." },
    ],
    drills: {
      transform: [
        { q: "Make it a question: «I get up at 6:30.»", options: ["Do you get up at 6:30?", "Are you get up at 6:30?", "You get up at 6:30?"], answer: 0, explain: "Presente simple → Do + sujeto + verbo base." },
        { q: "Make it negative: «I have breakfast at home.»", options: ["I don't have breakfast at home.", "I not have breakfast at home.", "I doesn't have breakfast at home."], answer: 0, explain: "I/you → don't + verbo base." },
      ],
      errors: [
        { q: "Fix it: «I no study in the morning.»", options: ["I don't study in the morning.", "I no studies in the morning.", "I am not study in the morning."], answer: 0, explain: "La negación del presente simple usa don't." },
      ],
    },
  },
  "en-cu-a1-04": {
    tables: [
      {
        title: "a / an + the politeness ladder",
        headers: ["Rule", "Example"],
        rows: [
          ["a + consonant SOUND", "a coffee · a large latte · a university (/j/ sound)"],
          ["an + vowel SOUND", "an orange juice · an espresso · an hour (/aʊ/ sound)"],
          ["I'd like… (polite order)", "I'd like a large coffee, please."],
          ["I want… (direct)", "I want a coffee. (correct, but blunt)"],
        ],
        note: "«an» depende del SONIDO, no de la letra: a university (suena /iu/), an hour (la h es muda). Y en EE. UU. se pide con I'd like + please, nunca «Give me…».",
      },
    ],
    moreExamples: [
      { it: "I'd like an iced tea, please.", es: "Quisiera un té helado, por favor." },
      { it: "Can I have a muffin with that?", es: "¿Me puedes dar un muffin con eso?" },
      { it: "Do you want an extra shot?", es: "¿Quieres un shot extra?" },
    ],
    drills: {
      transform: [
        { q: "Make it polite: «I want a coffee.»", options: ["I'd like a coffee, please.", "I would a coffee, please.", "Give me a coffee, politely."], answer: 0, explain: "I'd like (= I would like) es el «quisiera» del inglés." },
        { q: "Choose the article: «___ espresso, please.»", options: ["an", "a", "the a"], answer: 0, explain: "espresso empieza con sonido de vocal → an." },
      ],
      errors: [
        { q: "Fix it: «I'd like an large coffee.»", options: ["I'd like a large coffee.", "I'd like the large coffee, please now.", "I'd like large coffee."], answer: 0, explain: "large empieza con sonido consonante → a." },
      ],
    },
  },
  "en-cu-a1-05": {
    tables: [
      {
        title: "some / any · the full matrix",
        headers: ["Sentence type", "Word", "Example"],
        rows: [
          ["Affirmative", "some", "I'd like some water."],
          ["Negative", "any", "I don't want any onions."],
          ["Question", "any", "Do you have any gluten-free options?"],
          ["Offer / invitation", "some", "Would you like some more coffee?"],
        ],
        note: "Como «algo de / algún»: afirmativo → some; duda o negación → any. Pero si ofreces algo que sabes que existe, la pregunta lleva some: «Would you like some tea?».",
      },
    ],
    moreExamples: [
      { it: "Could you bring us some napkins?", es: "¿Nos podría traer unas servilletas?" },
      { it: "We don't have any tables by the window.", es: "No tenemos mesas junto a la ventana." },
      { it: "Would you like some dessert?", es: "¿Quieres algo de postre?" },
    ],
    drills: {
      transform: [
        { q: "Make it a polite request: «Give me the check.»", options: ["Could we get the check, please?", "The check, now.", "You can give me the check."], answer: 0, explain: "Could we get…, please? = el estándar americano para pedir la cuenta." },
        { q: "some or any? «I don't want ___ onions.»", options: ["any", "some", "a"], answer: 0, explain: "Negativa → any." },
      ],
      errors: [
        { q: "Fix it: «I'd like any water.»", options: ["I'd like some water.", "I'd like an water.", "I'd like waters."], answer: 0, explain: "Afirmativa → some (water es incontable)." },
      ],
    },
  },
  "en-cu-a1-06": {
    tables: [
      {
        title: "this / that / these / those + adjective order",
        headers: ["", "Near (aquí)", "Far (allí)"],
        rows: [
          ["Singular", "this shirt", "that shirt"],
          ["Plural", "these shirts", "those shirts"],
          ["Adjective", "BEFORE the noun: a gray jacket", "✗ a jacket gray"],
        ],
        note: "En español el adjetivo va después («una chaqueta gris»); en inglés siempre antes del sustantivo. Y this/these cambian la vocal: /ɪs/ → /iːz/.",
      },
    ],
    moreExamples: [
      { it: "Do you have these sneakers in black?", es: "¿Tienes estas zapatillas en negro?" },
      { it: "That jacket over there is on sale.", es: "Aquella chaqueta de allá está en oferta." },
      { it: "I like this one, not that one.", es: "Me gusta este, no ese." },
    ],
    drills: {
      transform: [
        { q: "Rewrite in the plural: «Do you have this jacket in a large?»", options: ["Do you have these jackets in a large?", "Do you have this jackets in a large?", "Do you have those jacket in a large?"], answer: 0, explain: "this → these + sustantivo plural." },
        { q: "Put the adjective in the right place: «It's a jacket gray.»", options: ["It's a gray jacket.", "It's gray a jacket.", "It's a jacket of gray."], answer: 0, explain: "El adjetivo va antes del sustantivo." },
      ],
      errors: [
        { q: "Fix it: «How much is these pants?»", options: ["How much are these pants?", "How much is this pants?", "How much is pant?"], answer: 0, explain: "pants = plural (pantalones) → are + these." },
      ],
    },
  },
  "en-cu-a1-07": {
    tables: [
      {
        title: "Imperatives + prepositions of place",
        headers: ["Rule", "Example"],
        rows: [
          ["Affirmative: base verb, no subject", "Turn left. / Go straight."],
          ["Negative: Don't + base verb", "Don't turn here — it's one-way."],
          ["Polite softener", "Go straight, and then turn left, okay?"],
          ["next to / across from", "It's next to the courthouse."],
          ["between X and Y / on the corner of", "The bank is between the park and the library."],
        ],
        note: "Como el imperativo español: sin sujeto. «Sigue recto» → Go straight (nunca «Go to straight»: las direcciones no llevan to).",
      },
    ],
    moreExamples: [
      { it: "Go straight for two blocks.", es: "Sigue recto dos cuadras." },
      { it: "The pharmacy is across from the park.", es: "La farmacia está enfrente del parque." },
      { it: "Don't turn right on Main Street.", es: "No gires a la derecha en Main Street." },
    ],
    drills: {
      transform: [
        { q: "Make it an imperative: «You have to turn left at the light.»", options: ["Turn left at the light.", "You turn to left at the light.", "To turn left at the light."], answer: 0, explain: "Imperativo = verbo base sin sujeto: Turn left." },
        { q: "Make it negative: «Stop here.»", options: ["Don't stop here.", "No stop here.", "Doesn't stop here."], answer: 0, explain: "Imperativo negativo → Don't + verbo base." },
      ],
      errors: [
        { q: "Fix it: «The store is in front from the station.»", options: ["The store is across from the station.", "The store is in front of from the station.", "The store is front the station."], answer: 0, explain: "«enfrente de» americano = across from." },
      ],
    },
  },
  "en-cu-a1-08": {
    tables: [
      {
        title: "Third person -s · spelling rules",
        headers: ["Verb ends in…", "Rule", "Example"],
        rows: [
          ["most verbs", "+ s", "leave → leaves · cost → costs"],
          ["-ch, -sh, -s, -x, -o", "+ es", "watch → watches · go → goes"],
          ["consonant + y", "y → ies", "study → studies · carry → carries"],
          ["Questions / negatives", "does + BASE (no -s!)", "Does the train stop here? · It doesn't stop."],
        ],
        note: "La -s solo vive en la afirmativa: the train leaves… pero does the train leave…? Doble marca de tercera persona = error clásico: «Does it stops?» ✗.",
      },
    ],
    moreExamples: [
      { it: "The train arrives at 1:30 p.m.", es: "El tren llega a la 1:30 p. m." },
      { it: "Does this train go to Boston?", es: "¿Este tren va a Boston?" },
      { it: "The trip doesn't take four hours.", es: "El viaje no tarda cuatro horas." },
    ],
    drills: {
      transform: [
        { q: "Make it a question: «The train leaves at 9:10.»", options: ["Does the train leave at 9:10?", "Does the train leaves at 9:10?", "Do the train leave at 9:10?"], answer: 0, explain: "does + verbo base: la -s desaparece." },
        { q: "Rewrite with «she»: «I want a window seat.»", options: ["She wants a window seat.", "She want a window seat.", "She does want a seat."], answer: 0, explain: "she → want + s." },
      ],
      errors: [
        { q: "Fix it: «Does the subway stops here?»", options: ["Does the subway stop here?", "Does the subway stopping here?", "Do the subway stops here?"], answer: 0, explain: "Con does, el verbo va en base: stop." },
      ],
    },
  },
  "en-cu-a1-09": {
    tables: [
      {
        title: "like / love / hate + -ing",
        headers: ["Pattern", "Example"],
        rows: [
          ["like / love / hate / enjoy + -ing", "I like playing soccer."],
          ["also: don't mind / can't stand + -ing", "I can't stand waiting in line."],
          ["-ing spelling: e → drop e + ing", "make → making · dance → dancing"],
          ["short vowel + consonant → double it", "swim → swimming · run → running"],
        ],
        note: "En español «me gusta jugar» usa infinitivo; el inglés casual usa -ing: «I like playing». Con like + to + infinitivo suena a propósito puntual.",
      },
    ],
    moreExamples: [
      { it: "She loves cooking on Sundays.", es: "Le encanta cocinar los domingos." },
      { it: "I hate waking up early.", es: "Odio despertarme temprano." },
      { it: "Do you enjoy watching horror movies?", es: "¿Disfrutas ver películas de terror?" },
    ],
    drills: {
      transform: [
        { q: "Complete with the -ing form: «I like ___ (play) soccer.»", options: ["playing", "to play only", "play"], answer: 0, explain: "like + verbo-ing (estándar casual americano)." },
        { q: "Fix the spelling: «I love ___ (swim) in the lake.»", options: ["swimming", "swiming", "swim"], answer: 0, explain: "Vocal breve + consonante → duplica la consonante: swimming." },
      ],
      errors: [
        { q: "Fix it: «She loves cook Italian food.»", options: ["She loves cooking Italian food.", "She loves to cooking Italian food.", "She love cook Italian food."], answer: 0, explain: "Tras loves, el verbo va con -ing." },
      ],
    },
  },
  "en-cu-a1-10": {
    tables: [
      {
        title: "there is / there are · all forms",
        headers: ["", "Singular", "Plural"],
        rows: [
          ["Affirmative", "There's a fridge.", "There are two bedrooms."],
          ["Negative", "There isn't a yard.", "There aren't any parking spots."],
          ["Question", "Is there a garden?", "Are there any closets?"],
          ["Short answer", "Yes, there is. / No, there isn't.", "Yes, there are. / No, there aren't."],
        ],
        note: "«Hay» español no distingue número; el inglés sí: there is + singular, there are + plural. Contracción solo existe there's (nunca «there're» en escritura).",
      },
    ],
    moreExamples: [
      { it: "There's a balcony next to the kitchen.", es: "Hay un balcón junto a la cocina." },
      { it: "Are there any stores near your place?", es: "¿Hay tiendas cerca de tu casa?" },
      { it: "There aren't any elevators in the building.", es: "No hay ascensores en el edificio." },
    ],
    drills: {
      transform: [
        { q: "Rewrite in the plural: «There's a window in the kitchen.»", options: ["There are two windows in the kitchen.", "There's two windows in the kitchen.", "There is windows in the kitchen."], answer: 0, explain: "Plural → there are." },
        { q: "Make it a question: «There's a laundry room.»", options: ["Is there a laundry room?", "There is a laundry room?", "Does there is a laundry room?"], answer: 0, explain: "Inversión: Is there…?" },
      ],
      errors: [
        { q: "Fix it: «There are a balcony in my apartment.»", options: ["There's a balcony in my apartment.", "There are balcony in my apartment.", "There is balconys in my apartment."], answer: 0, explain: "balcony = singular → there is." },
      ],
    },
  },
  "en-cu-a1-11": {
    tables: [
      {
        title: "how much / how many + containers",
        headers: ["Countable?", "Question word", "Example"],
        rows: [
          ["Countable (eggs, apples)", "How many…?", "How many eggs do we need?"],
          ["Uncountable (milk, bread, rice)", "How much…?", "How much is a gallon of milk?"],
          ["Count the uncountable", "container + of", "a loaf of bread · a gallon of milk · a dozen eggs"],
          ["Price", "How much is/are…?", "How much are the strawberries?"],
        ],
        note: "El español pregunta «¿cuánto/ cuántos?» según el sustantivo; el inglés según si SE PUEDE CONTAR: milk no se cuenta → How much milk?",
      },
    ],
    moreExamples: [
      { it: "How much is a loaf of whole-grain bread?", es: "¿Cuánto cuesta una barra de pan integral?" },
      { it: "We need a dozen eggs and two gallons of water.", es: "Necesitamos una docena de huevos y dos galones de agua." },
      { it: "How many coupons do you have?", es: "¿Cuántos cupones tienes?" },
    ],
    drills: {
      transform: [
        { q: "how much or how many? «___ eggs do we need?»", options: ["How many", "How much", "How lots"], answer: 0, explain: "eggs = contable → How many." },
        { q: "Rewrite with a container: «I need milk.» (a gallon)", options: ["I need a gallon of milk.", "I need a milk gallon.", "I need a gallon milk."], answer: 0, explain: "Contenedor + of + incontable: a gallon of milk." },
      ],
      errors: [
        { q: "Fix it: «How much strawberries are these?»", options: ["How much are these strawberries?", "How many is these strawberries?", "How much is these strawberry?"], answer: 0, explain: "Strawberries contables, pero aquí preguntas el PRECIO → How much is/are…?" },
      ],
    },
  },
  "en-cu-a1-12": {
    tables: [
      {
        title: "A1 survival grammar · the four engines",
        headers: ["Engine", "Use it for", "Example"],
        rows: [
          ["to be (I'm, she's…)", "identity · nationality · location", "I'm a student. She's from Texas."],
          ["present simple (do/does)", "routines · schedules", "The subway leaves every five minutes."],
          ["there is / there are", "what exists", "There's a discount for students."],
          ["some / any · I'd like", "quantities · polite orders", "I don't have any cash, but I'd like a hot dog."],
        ],
        note: "Antes de hablar, pregúntate: ¿es identidad (to be), rutina (presente simple), existencia (there is) o cantidad (some/any)? Esa es la decisión A1.",
      },
    ],
    moreExamples: [
      { it: "I'm not from here — where's the Empire State Building?", es: "No soy de aquí, ¿dónde está el Empire State Building?" },
      { it: "There are some street food carts near Times Square.", es: "Hay algunos carritos de comida callejera cerca de Times Square." },
      { it: "Does this train go to Brooklyn?", es: "¿Este tren va a Brooklyn?" },
    ],
    drills: {
      transform: [
        { q: "Choose the engine: «___ a student discount at the museum?»", options: ["Is there", "There is", "Is it"], answer: 0, explain: "Existencia → Is there…?" },
        { q: "Make it polite: «I want two tickets.»", options: ["I'd like two tickets, please.", "I want two tickets, please politely.", "Give two tickets."], answer: 0, explain: "I'd like + please = pedir con cortesía." },
      ],
      errors: [
        { q: "Fix it: «I no have any cash.»", options: ["I don't have any cash.", "I have no any cash.", "I doesn't have cash."], answer: 0, explain: "Negativa del presente simple → don't have." },
      ],
    },
  },
};
