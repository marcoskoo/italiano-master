import type { GrammarTopic } from "../../types";

/* ── Grammar · inglés americano · temas progresivos A1→C2 ───────────
   Convención: `title` en español, `titleIt` = título técnico EN
   INGLÉS (lengua de estudio), explicaciones en español con ejemplos
   inline en inglés, soluciones paso a paso estilo del archivo IT.  */

export const EN_GRAMMAR: GrammarTopic[] = [
  /* ══════════ A1 ══════════ */
  {
    id: "en-g-a1-articles", level: "A1", title: "Artículos: a, an, the", titleIt: "Articles: a, an, the",
    summary: "a/an para algo no conocido; the para algo concreto; a veces nada.",
    explanation: [
      "El inglés tiene dos artículos. El indeterminado tiene dos formas: a delante de sonido consonante (a book, a car) y an delante de sonido vocal (an apple, an hour). Lo importante es el SONIDO, no la letra: se dice a university (porque university empieza con sonido /iu/) pero an hour (la h es muda).",
      "El artículo the es el determinado: equivale a el/la/los/las y es igual para masculino, femenino, singular y plural (the book, the books). Además, el inglés deja de usar artículo donde el español lo pone: con generalizaciones en plural se dice I like dogs (nunca “I like the dogs”) y con comidas se dice have breakfast, have lunch.",
    ],
    examples: [
      { it: "I have a dog and a cat.", es: "Tengo un perro y un gato." },
      { it: "She is an engineer.", es: "Ella es ingeniera." },
      { it: "The dog in the yard is mine.", es: "El perro del patio es mío." },
      { it: "I like coffee, but I don't like tea.", es: "Me gusta el café, pero no me gusta el té." },
    ],
    problems: [
      {
        title: "Elegir entre a y an",
        question: "Completa: “I need ___ hour to finish.” (una hora)",
        steps: [
          "hour se escribe con h, pero la h es muda.",
          "La palabra empieza con sonido vocal /áuer/.",
          "Regla: an delante de sonido vocal.",
          "Por eso se dice an hour pero a house (la h de house SÍ suena).",
        ],
        conclusion: "I need an hour to finish.",
      },
      {
        title: "Cuándo NO usar the",
        question: "Corrige si hace falta: “I love the music.” (me encanta la música)",
        steps: [
          "Hablas de la música en general, no de una música concreta.",
          "Las generalizaciones van SIN the en inglés.",
          "El español dice “amo la música”, pero el inglés quita el artículo.",
          "Con “my favorite song” sí iría the: I love the song.",
        ],
        conclusion: "I love music. (sin the)",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "El artículo de un vistazo",
        headers: ["Situación", "Forma", "Ejemplo"],
        rows: [
          ["Indeterminado + sonido consonante", "a", "a book, a university"],
          ["Indeterminado + sonido vocal", "an", "an apple, an hour"],
          ["Determinado (el/la/los/las)", "the", "the book, the books"],
          ["Generalizaciones (en plural)", "sin artículo", "I like dogs."],
          ["Comidas y rutinas", "sin artículo", "have breakfast"],
        ],
        note: "En español “me gusta el café” lleva artículo; en inglés no: I like coffee.",
      },
    ],
  },
  {
    id: "en-g-a1-to-be", level: "A1", title: "El verbo to be (ser y estar)", titleIt: "The verb to be",
    summary: "am / is / are: un solo verbo para ser y estar, con contracciones.",
    explanation: [
      "El inglés usa UN solo verbo donde el español usa dos: I am soy Y estoy (I am happy = estoy feliz; I am Mexican = soy mexicano). Las formas son: I am, you are, he/she/it is, we are, they are.",
      "En conversación casi siempre se contrae: I'm, you're, he's, she's, it's, we're, they're. Para negar se añade not: I'm not, he isn't (o he's not), they aren't. Y para preguntar basta invertir: Are you ready? Is she your sister?",
    ],
    examples: [
      { it: "I'm from Spain, but I live in Texas.", es: "Soy de España, pero vivo en Texas." },
      { it: "She is a nurse.", es: "Ella es enfermera." },
      { it: "We aren't tired.", es: "No estamos cansados." },
      { it: "Is it cold outside?", es: "¿Hace frío afuera?" },
      { it: "They're at home.", es: "Están en casa." },
    ],
    problems: [
      {
        title: "Elegir la forma correcta",
        question: "Completa: “My parents ___ from Chicago.”",
        steps: [
          "Sujeto: my parents = 3ª persona del plural.",
          "El plural de to be es are.",
          "Con contracción: They're from Chicago.",
        ],
        conclusion: "My parents are from Chicago.",
      },
      {
        title: "Ser o estar",
        question: "Traduce: “Estoy muy cansado hoy.”",
        steps: [
          "¿Ser o estar? En inglés da igual: mismo verbo to be.",
          "Sujeto I → am.",
          "cansado = tired; hoy = today.",
          "No hace falta distinguir nada más.",
        ],
        conclusion: "I am very tired today. (I'm very tired today.)",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Paradigma de to be",
        headers: ["Afirmación", "Contracción", "Negación", "Pregunta"],
        rows: [
          ["I am", "I'm", "I'm not", "Am I…?"],
          ["You are", "You're", "You aren't", "Are you…?"],
          ["He / She / It is", "He's / She's / It's", "isn't", "Is he…?"],
          ["We / You / They are", "We're / They're", "aren't", "Are they…?"],
        ],
        note: "En preguntas nunca se contrae: Are you ready? (no “You're ready?” para preguntar).",
      },
    ],
  },
  {
    id: "en-g-a1-present-simple", level: "A1", title: "Presente simple y el famoso do/does", titleIt: "Present simple: the auxiliary do/does",
    summary: "-s en la 3ª persona y do/does para negar y preguntar.",
    explanation: [
      "El presente simple describe hábitos y verdades generales. En afirmativo es el verbo en infinitivo SIN to (I work, we play), pero la 3ª persona del singular añade -s: he works, she plays, it rains.",
      "La gran diferencia con el español está en negaciones y preguntas: el inglés necesita el auxiliar do (o does con he/she/it) y el verbo vuelve a su forma base. Se dice I don't work y Does she work? (nunca “She doesn't works”: la -s la lleva does). Los adverbios de frecuencia (always, usually, never) van delante del verbo: I always drink coffee.",
    ],
    examples: [
      { it: "I work in a hospital.", es: "Trabajo en un hospital." },
      { it: "He works from home on Fridays.", es: "Él trabaja desde casa los viernes." },
      { it: "We don't watch TV in the morning.", es: "No vemos tele por la mañana." },
      { it: "Does she speak Spanish?", es: "¿Ella habla español?" },
      { it: "I never drink soda.", es: "Nunca bebo refresco." },
    ],
    problems: [
      {
        title: "Negar bien",
        question: "Corrige: “She doesn't likes coffee.”",
        steps: [
          "does ya marca la 3ª persona.",
          "El verbo principal vuelve a la forma base, SIN -s.",
          "La -s solo puede aparecer una vez: o en does o en el verbo, nunca en ambos.",
        ],
        conclusion: "She doesn't like coffee.",
      },
      {
        title: "Preguntar con does",
        question: "Ordena la pregunta: “your brother / does / soccer / play / ?”",
        steps: [
          "Pregunta en presente simple con he → auxiliar Does al principio.",
          "Después el sujeto: Does your brother…",
          "Después el verbo en forma base + complemento.",
          "Does your brother play soccer?",
        ],
        conclusion: "Does your brother play soccer?",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Presente simple: afirmación, negación y pregunta",
        headers: ["Tipo", "I / You / We / They", "He / She / It"],
        rows: [
          ["Afirmación", "I work", "He works"],
          ["Negación", "I don't work", "He doesn't work"],
          ["Pregunta", "Do you work?", "Does he work?"],
          ["Respuesta corta", "Yes, I do. / No, I don't.", "Yes, he does. / No, he doesn't."],
        ],
        note: "don't = do not; doesn't = does not. Tras do/does el verbo SIEMPRE va en forma base.",
      },
    ],
  },
  {
    id: "en-g-a1-have-got", level: "A1", title: "Tener: have, has y have got", titleIt: "Have and have got",
    summary: "have/has para poseer; have got como variante coloquial.",
    explanation: [
      "Para decir “tener” el inglés americano usa sobre todo have (I have a car) y has para 3ª persona (She has a dog). En preguntas y negaciones funciona como cualquier verbo: Do you have a car? / I don't have time.",
      "También existe la forma have got (I've got a car, she's got a dog), muy común en el inglés británico y en frases hechas. En americano coloquial se oye, pero para preguntar y negar es más natural con do: Do you have a pen? Ojo: got nunca va solo (“I got a car” en presente cuidado es mejor evitarlo; sí es correcto como pasado: I got = recibí).",
    ],
    examples: [
      { it: "I have two brothers.", es: "Tengo dos hermanos." },
      { it: "She has a meeting at noon.", es: "Ella tiene una reunión al mediodía." },
      { it: "Do you have a reservation?", es: "¿Tienes reserva?" },
      { it: "He's got a new phone.", es: "Él tiene un teléfono nuevo." },
      { it: "We don't have time.", es: "No tenemos tiempo." },
    ],
    problems: [
      {
        title: "have o has",
        question: "Completa: “My sister ___ a job in Austin.”",
        steps: [
          "Sujeto: my sister = 3ª persona singular.",
          "3ª persona de have = has.",
          "En negativo sería doesn't have (el have vuelve a base).",
        ],
        conclusion: "My sister has a job in Austin.",
      },
      {
        title: "Preguntar por posesión",
        question: "Completa la pregunta: “___ you ___ a pen?”",
        steps: [
          "Es presente simple con you.",
          "Auxiliar Do + sujeto + have en forma base.",
          "La alternativa con have got sería Have you got a pen?, más británica.",
        ],
        conclusion: "Do you have a pen?",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "en-g-a1-plurals", level: "A1", title: "El plural de los sustantivos", titleIt: "Singular and plural nouns",
    summary: "-s, -es, -ies y los plurales irregulares de libro de texto.",
    explanation: [
      "La regla general es añadir -s (book → books, car → cars). Si la palabra termina en -s, -sh, -ch, -x o -o se añade -es (bus → buses, watch → watches, box → boxes, potato → potatoes). Si termina en consonante + y, la y se convierte en -ies (city → cities, hobby → hobbies), pero si la y va tras vocal solo se añade -s (boy → boys, key → keys).",
      "Los irregulares de sangre: man → men, woman → women, child → children, foot → feet, tooth → teeth, person → people, mouse → mice. Y hay palabras que no cambian: fish, sheep, deer (one fish, two fish). En español “el pelo” es singular, pero hair también es incontable en inglés: I need to cut my hair.",
    ],
    examples: [
      { it: "I have three children.", es: "Tengo tres hijos." },
      { it: "These watches are expensive.", es: "Estos relojes son caros." },
      { it: "There are two buses on this street.", es: "Hay dos autobuses en esta calle." },
      { it: "My feet hurt.", es: "Me duelen los pies." },
      { it: "How many people live here?", es: "¿Cuánta gente vive aquí?" },
    ],
    problems: [
      {
        title: "Plural regular con truco",
        question: "¿Cuál es el plural de “city”?",
        steps: [
          "Termina en consonante + y.",
          "Regla: la y se convierte en -ies.",
          "city → cities (como hobby → hobbies).",
          "Si fuera vocal + y (boy), sería boys.",
        ],
        conclusion: "cities",
      },
      {
        title: "Plural irregular",
        question: "Completa: “One child, two ___.”",
        steps: [
          "child es uno de los plurales irregulares clásicos.",
          "No se dice “childs”.",
          "child → children (pronunciado “chíldren”).",
        ],
        conclusion: "One child, two children.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Plurales de un vistazo",
        headers: ["Terminación", "Plural", "Ejemplo"],
        rows: [
          ["General", "+ s", "book → books"],
          ["-s, -sh, -ch, -x, -o", "+ es", "bus → buses, watch → watches"],
          ["consonante + y", "-ies", "city → cities"],
          ["vocal + y", "+ s", "boy → boys"],
          ["Irregulares", "cambio", "man → men, foot → feet, person → people"],
          ["Invariables", "nada", "fish, sheep, deer"],
        ],
        note: "people va con verbo plural: people ARE (nunca “people is”).",
      },
    ],
  },
  {
    id: "en-g-a1-there-is", level: "A1", title: "Hay: there is / there are", titleIt: "There is and there are",
    summary: "El “hay” inglés sí concuerda: there is singular, there are plural.",
    explanation: [
      "Para decir “hay” el inglés usa there + to be. A diferencia del español (hay un libro, hay dos libros), el verbo concuerda con lo que viene después: There is a book on the table, There are two books on the table.",
      "La negación es there isn't / there aren't (There isn't a bank near here) y para preguntar se invierte: Is there a pharmacy nearby? Are there any restaurants? Con las cantidades se usa How many… are there? Ojo con el españolismo “it has books”: para existir algo NUNCA se usa have, siempre there is/are.",
    ],
    examples: [
      { it: "There is a big park in my neighborhood.", es: "Hay un parque grande en mi barrio." },
      { it: "There are many stores on this street.", es: "Hay muchas tiendas en esta calle." },
      { it: "There isn't a hospital in this town.", es: "No hay hospital en este pueblo." },
      { it: "Are there any ATMs near here?", es: "¿Hay cajeros cerca de aquí?" },
      { it: "How many stops are there to downtown?", es: "¿Cuántas paradas hay hasta el centro?" },
    ],
    problems: [
      {
        title: "is o are",
        question: "Completa: “___ there any coffee shops open?”",
        steps: [
          "coffee shops está en plural.",
          "Plural → there are.",
          "En pregunta: Are there…?",
        ],
        conclusion: "Are there any coffee shops open?",
      },
      {
        title: "Evitar el españolismo",
        question: "Corrige: “It has a pool in this hotel.”",
        steps: [
          "Quieres decir “hay una piscina en este hotel”.",
          "Para existencia se usa there is/are, no have.",
          "Singular (a pool) → there is.",
          "Con have solo se expresaría posesión: This hotel HAS a pool.",
        ],
        conclusion: "There is a pool in this hotel.",
      },
    ],
    exerciseIds: [],
  },

  /* ══════════ A2 ══════════ */
  {
    id: "en-g-a2-past-simple", level: "A2", title: "Pasado simple: was/were y los verbos en -ed", titleIt: "Past simple",
    summary: "was/were para to be, -ed para regulares e irregulares que hay que estudiar.",
    explanation: [
      "El pasado simple cuenta acciones terminadas: ayer, la semana pasada, en 2019. El verbo to be tiene dos formas: was (I, he, she, it) y were (you, we, they): I was tired, we were at home. Para negar y preguntar no usa did: I wasn't tired, Were you home?",
      "Los verbos regulares añaden -ed (work → worked, play → played, study → studied) y los irregulares cambian de raíz: go → went, have → had, see → saw, buy → bought, take → took. La trampa es que en negaciones y preguntas el verbo SIEMPRE vuelve a la forma base con did: I didn't go, Did you see that? (nunca “I didn't went”). La -ed se pronuncia /t/ (worked), /d/ (played) o /id/ (wanted, needed).",
    ],
    examples: [
      { it: "I was at the beach last weekend.", es: "Estuve en la playa el fin de semana pasado." },
      { it: "We watched a movie last night.", es: "Vimos una película anoche." },
      { it: "She went to Chicago in 2019.", es: "Ella fue a Chicago en 2019." },
      { it: "I didn't know about the party.", es: "No sabía lo de la fiesta." },
      { it: "Did you buy the tickets?", es: "¿Compraste los boletos?" },
      { it: "They weren't happy with the service.", es: "No estuvieron contentos con el servicio." },
    ],
    problems: [
      {
        title: "did + forma base",
        question: "Corrige: “I didn't went to the gym yesterday.”",
        steps: [
          "didn't ya marca el pasado.",
          "El verbo principal vuelve a la forma base: go.",
          "El error “didn't went” es calco del español “no fui”.",
        ],
        conclusion: "I didn't go to the gym yesterday.",
      },
      {
        title: "Irregular o regular",
        question: "Completa: “I ___ a new jacket last month.” (buy)",
        steps: [
          "buy es irregular.",
          "Pasado de buy = bought (se pronuncia “bót”).",
          "En negativo sería didn't buy.",
        ],
        conclusion: "I bought a new jacket last month.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Pasado simple: las tres familias",
        headers: ["Tipo", "Afirmación", "Negación", "Pregunta"],
        rows: [
          ["to be", "I was / They were", "I wasn't / weren't", "Were you…?"],
          ["Regular", "We worked", "We didn't work", "Did you work?"],
          ["Irregular", "She went", "She didn't go", "Did she go?"],
        ],
        note: "Con to be NO se usa did; con todos los demás sí. Irregulares clave: go/went, have/had, see/saw, do/did, make/made, take/took.",
      },
    ],
  },
  {
    id: "en-g-a2-present-continuous", level: "A2", title: "Presente continuo vs presente simple", titleIt: "Present continuous vs present simple",
    summary: "am/is/are + -ing para lo que pasa AHORA; presente simple para hábitos.",
    explanation: [
      "El presente continuo se forma con am/is/are + verbo-ing y describe lo que está pasando en este momento o un período actual: I'm studying English (ahora), She's living in Boston this year. El presente simple queda para hábitos y verdades permanentes: I study English on Mondays, She lives in Chicago.",
      "Marcadores típicos: now, right now, today (continuo) vs always, usually, every day (simple). Cuidado con la ortografía del -ing: run → running (duplica la consonante), make → making (pierde la e), write → writing. Y los verbos de estado (know, like, want, need, understand) casi nunca van en continuo: I know (no “I'm knowing”).",
    ],
    examples: [
      { it: "I'm reading a great novel right now.", es: "Estoy leyendo una gran novela ahora mismo." },
      { it: "I read every night before bed.", es: "Leo cada noche antes de dormir." },
      { it: "It's raining again.", es: "Está lloviendo otra vez." },
      { it: "She's working from home this month.", es: "Está trabajando desde casa este mes." },
      { it: "They aren't answering the phone.", es: "No están contestando el teléfono." },
      { it: "What are you doing?", es: "¿Qué estás haciendo?" },
    ],
    problems: [
      {
        title: "Elegir el presente",
        question: "Completa: “Be quiet! The baby ___ (sleep).”",
        steps: [
          "La acción está pasando ahora mismo (be quiet!).",
          "Ahora → presente continuo.",
          "is + sleep + ing, con consonante simple: sleeping.",
        ],
        conclusion: "The baby is sleeping.",
      },
      {
        title: "Verbo de estado",
        question: "Corrige: “I'm understanding the lesson.”",
        steps: [
          "understand es un verbo de estado (saber/comprender).",
          "Los verbos de estado no suelen ir en continuo.",
          "Se usa presente simple aunque sea “en este momento”.",
        ],
        conclusion: "I understand the lesson.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Contraste de presentes",
        headers: ["Uso", "Tiempo", "Marcadores", "Ejemplo"],
        rows: [
          ["Acción en curso", "continuo", "now, right now, at the moment", "I'm cooking dinner."],
          ["Período actual", "continuo", "this week, today", "She's training for a race."],
          ["Hábito", "simple", "always, usually, every day", "I cook dinner at home."],
          ["Verdad permanente", "simple", "siempre", "Water boils at 212F."],
        ],
        note: "Estados mentales (know, want, like) y posesión (have = tener) van en simple.",
      },
    ],
  },
  {
    id: "en-g-a2-future", level: "A2", title: "Futuro: will y be going to", titleIt: "Future: will and be going to",
    summary: "will para decisiones y predicciones; be going to para planes.",
    explanation: [
      "will + verbo base expresa decisiones del momento, predicciones y promesas: I'll help you (decisión espontánea), It will rain tomorrow (predicción). La forma negativa es won't: I won't be late. En americano coloquial will se contrae siempre: I'll, you'll, she'll.",
      "be going to (am/is/are + going to + verbo) expresa planes ya decididos e intenciones, o predicciones con evidencia delante: I'm going to visit my grandma this weekend (plan), Look at those clouds, it's going to rain (evidencia). También puedes usar el presente continuo para citas cerradas: I'm flying to Miami on Friday.",
    ],
    examples: [
      { it: "I'll call you tonight, I promise.", es: "Te llamaré esta noche, lo prometo." },
      { it: "It will probably snow in Denver.", es: "Probablemente nevará en Denver." },
      { it: "We're going to buy a house next year.", es: "Vamos a comprar una casa el año que viene." },
      { it: "She isn't going to work tomorrow.", es: "Ella no va a trabajar mañana." },
      { it: "I'm meeting the doctor at four.", es: "Veo al médico a las cuatro (cita cerrada)." },
    ],
    problems: [
      {
        title: "Plan o decisión",
        question: "Elige: “The phone is ringing. I ___ answer it. (will / am going to)”",
        steps: [
          "Decisión en el momento de hablar, sin plan previo.",
          "Las decisiones espontáneas usan will.",
          "Si fuera un plan ya pensado, sería I'm going to answer it.",
        ],
        conclusion: "I'll answer it.",
      },
      {
        title: "Predicción con evidencia",
        question: "Elige: “Look at the sky! It ___ storm. (will / is going to)”",
        steps: [
          "Ves las nubes: hay evidencia delante de ti.",
          "Predicción con evidencia → be going to.",
          "will sería para predicción sin evidencia u opinión.",
        ],
        conclusion: "It's going to storm.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "en-g-a2-comparatives", level: "A2", title: "Comparativos y superlativos", titleIt: "Comparatives and superlatives",
    summary: "-er/-est para adjetivos cortos; more/most para largos; good→better→best.",
    explanation: [
      "Con adjetivos de una sílaba se añade -er para comparar y the -est para el superlativo: cold → colder → the coldest, big → bigger → the biggest (duplica la g), easy → easier → the easiest. Con adjetivos de dos o más sílabas se usa more y the most: more expensive, the most beautiful.",
      "Para comparar se usa than (bigger than), y para decir “tan… como” se usa as…as (as cold as Chicago). Los irregulares que no fallan: good → better → the best, bad → worse → the worst, far → farther → the farthest. En inglés el comparativo nunca lleva más marcas: se dice more interesting (no “more interestinger”).",
    ],
    examples: [
      { it: "Texas is bigger than Spain.", es: "Texas es más grande que España." },
      { it: "This coffee is better than that one.", es: "Este café es mejor que aquel." },
      { it: "It's the most expensive restaurant in town.", es: "Es el restaurante más caro de la ciudad." },
      { it: "Winter in Chicago is as cold as in Boston.", es: "El invierno en Chicago es tan frío como en Boston." },
      { it: "My commute is worse in the winter.", es: "Mi trayecto al trabajo es peor en invierno." },
    ],
    problems: [
      {
        title: "Comparativo correcto",
        question: "Completa: “Today is ___ than yesterday.” (hot)",
        steps: [
          "hot: adjetivo de una sílaba.",
          "Una sílaba → -er, duplicando la t final: hotter.",
          "Comparación con than.",
        ],
        conclusion: "Today is hotter than yesterday.",
      },
      {
        title: "Adjetivo largo",
        question: "Corrige: “This hotel is comfortabler than the other.”",
        steps: [
          "comfortable tiene cuatro sílabas: adjetivo largo.",
          "Los largos usan more, nunca -er.",
          "more comfortable than.",
        ],
        conclusion: "This hotel is more comfortable than the other.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Comparativos y superlativos",
        headers: ["Adjetivo", "Comparativo", "Superlativo"],
        rows: [
          ["cold (1 sílaba)", "colder", "the coldest"],
          ["big (1 sílaba, CVC)", "bigger", "the biggest"],
          ["easy (y final)", "easier", "the easiest"],
          ["expensive (largo)", "more expensive", "the most expensive"],
          ["good (irregular)", "better", "the best"],
          ["bad (irregular)", "worse", "the worst"],
        ],
        note: "El español dice “más grande que”; el inglés bigger than: nunca “more bigger than”.",
      },
    ],
  },
  {
    id: "en-g-a2-countable", level: "A2", title: "Contables e incontables: some, any, much, many", titleIt: "Countable and uncountable nouns",
    summary: "Contar lo contable y medir lo incontable: a piece of, a glass of.",
    explanation: [
      "Los sustantivos contables tienen plural (a book, two books). Los incontables no se cuentan y van en singular: water, money, information, advice, rice, time. Para cantidades se usan expresiones de medida: a glass of water, a piece of advice, a bowl of rice.",
      "some se usa en afirmativas (I have some money) y any en preguntas y negativas (Do you have any questions? I don't have any cash). Con incontables se usa much / How much (How much time do we have?) y con contables many / How many (How many tickets?). a lot of vale para ambos. Little/few significan “poco”: a little money (un poco de dinero), a few friends (unos pocos amigos).",
    ],
    examples: [
      { it: "I need some information about the flight.", es: "Necesito algo de información sobre el vuelo." },
      { it: "Do we have any milk?", es: "¿Tenemos leche?" },
      { it: "How much does it cost?", es: "¿Cuánto cuesta?" },
      { it: "How many people are coming?", es: "¿Cuántas personas vienen?" },
      { it: "She has a few friends in Dallas.", es: "Ella tiene unos pocos amigos en Dallas." },
      { it: "Can I have a cup of coffee?", es: "¿Puedo tomar una taza de café?" },
    ],
    problems: [
      {
        title: "Clasificar el sustantivo",
        question: "Elige: “There aren't ___ seats left. (much / many)”",
        steps: [
          "seats es contable (seat → seats).",
          "Contable plural → many.",
          "much se reserva para incontables: much time, much money.",
        ],
        conclusion: "There aren't many seats left.",
      },
      {
        title: "El plural imposible",
        question: "Corrige: “She gave me two advices.”",
        steps: [
          "advice es incontable: no tiene plural.",
          "Para contar se usa piece: two pieces of advice.",
          "Otros incontables trampa: information, luggage, furniture, homework.",
        ],
        conclusion: "She gave me two pieces of advice.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Cuantificadores según el sustantivo",
        headers: ["", "Contable (books)", "Incontable (money)"],
        rows: [
          ["Afirmativa", "some / a lot of / many", "some / a lot of / much"],
          ["Pregunta", "any / how many", "any / how much"],
          ["Negativa", "any / many / a few", "any / much / a little"],
          ["Contar", "two books", "two pieces / bills"],
        ],
        note: "news parece plural pero es incontable: the news IS good.",
      },
    ],
  },

  /* ══════════ B1 ══════════ */
  {
    id: "en-g-b1-present-perfect", level: "B1", title: "Presente perfecto: have/has + participio", titleIt: "Present perfect",
    summary: "Experiencias y pasado con eco en el presente: ever, never, just, already, yet.",
    explanation: [
      "Se forma con have/has + participio pasado (worked, gone, seen, eaten). El participio de los regulares es igual al pasado (-ed); los irregulares hay que estudiarlos: go → gone, see → seen, do → done, eat → eaten, write → written.",
      "Sus usos estrella: experiencias de vida sin decir cuándo (I have been to New York twice, She has never eaten sushi), acciones recientes con efecto presente (I have lost my keys = y sigo sin ellas) y acciones que continúan con for y since (I have lived here for five years / since 2019). Los marcadores: ever, never, just, already, yet (en preguntas y negativas: Have you finished yet?).",
    ],
    examples: [
      { it: "I have visited ten states.", es: "He visitado diez estados." },
      { it: "She has just arrived.", es: "Ella acaba de llegar." },
      { it: "Have you ever tried grits?", es: "¿Has probado alguna vez los grits?" },
      { it: "They haven't finished yet.", es: "Todavía no han terminado." },
      { it: "We have lived in Austin since 2020.", es: "Vivimos en Austin desde 2020." },
      { it: "He has already paid the bill.", es: "Él ya ha pagado la cuenta." },
    ],
    problems: [
      {
        title: "Participio correcto",
        question: "Completa: “I have never ___ sushi. (eat)”",
        steps: [
          "Presente perfecto → have + participio.",
          "eat es irregular: eat → ate (pasado) → eaten (participio).",
          "never va entre have y el participio.",
        ],
        conclusion: "I have never eaten sushi.",
      },
      {
        title: "for o since",
        question: "Elige: “I've worked here ___ three years. (for / since)”",
        steps: [
          "three years es un PERÍODO de duración.",
          "for + período (for three years, for a long time).",
          "since + punto de inicio (since 2019, since Monday).",
        ],
        conclusion: "I've worked here for three years.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Marcadores del presente perfecto",
        headers: ["Marcador", "Posición", "Ejemplo"],
        rows: [
          ["just / already", "entre have y participio", "She has just left."],
          ["never / ever", "entre have y participio", "Have you ever seen it?"],
          ["yet", "final (preguntas/negativas)", "Has he called yet?"],
          ["for", "antes del período", "for two months"],
          ["since", "antes del punto inicial", "since last summer"],
        ],
        note: "yet suele ir al final y se usa en negativas/preguntas: not yet.",
      },
    ],
  },
  {
    id: "en-g-b1-perfect-vs-past", level: "B1", title: "Presente perfecto vs pasado simple", titleIt: "Present perfect vs past simple",
    summary: "¿El tiempo terminó o sigue abierto? Ahí está la clave.",
    explanation: [
      "La decisión depende de si el momento está cerrado o abierto. Presente perfecto para tiempo NO terminado o sin especificar: today, this week, ever, already (I have had two coffees today). Pasado simple para tiempo terminado y concreto: yesterday, last night, two hours ago, in 2019 (I had two coffees this morning, si la mañana ya acabó).",
      "El escollo del hispanohablante es el pretérito: donde el español dice “esta mañana he visto a María”, el inglés prefiere This morning I saw Maria (una vez la mañana termina). Y para preguntar por el momento exacto se cambia de tiempo: Where have you been? (sin especificar) frente a Where were you at five? (momento cerrado). Con la pregunta Have you ever been to California? la respuesta con momento concreto salta al pasado: Yes, I went there in 2018.",
    ],
    examples: [
      { it: "I have finished my homework. (sin cuándo)", es: "He terminado mi tarea." },
      { it: "I finished my homework an hour ago.", es: "Terminé mi tarea hace una hora." },
      { it: "Have you ever been to New Orleans?", es: "¿Has estado alguna vez en Nueva Orleans?" },
      { it: "Yes, I went there last spring.", es: "Sí, fui allí la primavera pasada." },
      { it: "She has worked here since March.", es: "Trabaja aquí desde marzo." },
      { it: "She worked here in 2015.", es: "Trabajó aquí en 2015." },
    ],
    problems: [
      {
        title: "Cerrar el tiempo",
        question: "Elige: “I ___ my keys yesterday. (lost / have lost)”",
        steps: [
          "yesterday es tiempo terminado.",
          "Tiempo cerrado → pasado simple.",
          "Sin marcador temporal sería I have lost my keys (y sigo sin ellas).",
        ],
        conclusion: "I lost my keys yesterday.",
      },
      {
        title: "Pregunta y respuesta",
        question: "Completa la respuesta: “Have you seen the new movie?” “Yes, I ___ it last weekend.”",
        steps: [
          "La pregunta va en perfecto (experiencia sin cuándo).",
          "La respuesta trae momento concreto: last weekend.",
          "Momento cerrado → pasado simple de see: saw.",
        ],
        conclusion: "Yes, I saw it last weekend.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "¿Perfecto o pasado?",
        headers: ["Marcador", "Tiempo", "Ejemplo"],
        rows: [
          ["today, this week (abiertos)", "presente perfecto", "I've had a busy day."],
          ["ever, never, already, yet", "presente perfecto", "She has never flown."],
          ["yesterday, last…, ago, in 2019", "pasado simple", "We met two years ago."],
          ["pregunta por el CUÁNDO", "pasado simple", "When did you arrive?"],
        ],
        note: "Nunca pregunnes When have you arrived?: el When cierra el tiempo y exige When did you arrive?",
      },
    ],
  },
  {
    id: "en-g-b1-modals", level: "B1", title: "Verbos modales: can, could, should, must", titleIt: "Modal verbs",
    summary: "Habilidad, permiso, consejo y obligación, todos sin to.",
    explanation: [
      "Los modales se unen directamente al verbo base, sin to: can swim (no “can to swim”), should go, must see. No añaden -s en 3ª persona (she can, he must) y para negar y preguntar no necesitan do: Can you help? You shouldn't worry.",
      "can = habilidad y permiso (I can drive); could = pasado de can y peticiones más suaves (Could you repeat that?); should = consejo (You should rest); must = obligación fuerte que viene del hablante o deducción segura (You must stop! / She must be tired). La obligación externa se dice have to (I have to work tomorrow) y aquí está la trampa famosa: mustn't es PROHIBICIÓN (You mustn't smoke here) mientras don't have to es falta de obligación (You don't have to come).",
    ],
    examples: [
      { it: "I can play the guitar.", es: "Sé tocar la guitarra." },
      { it: "Could you open the window, please?", es: "¿Podrías abrir la ventana, por favor?" },
      { it: "You should drink more water.", es: "Deberías beber más agua." },
      { it: "You must wear a helmet on a motorcycle.", es: "Debes usar casco en la moto." },
      { it: "I have to wake up at six.", es: "Tengo que despertarme a las seis." },
      { it: "You don't have to pay now.", es: "No tienes que pagar ahora (no es necesario)." },
    ],
    problems: [
      {
        title: "mustn't vs don't have to",
        question: "Elige: “It's a secret. You ___ tell anyone. (mustn't / don't have to)”",
        steps: [
          "Decirlo está PROHIBIDO.",
          "mustn't = prohibición.",
          "don't have to sería “no es necesario” (pero podrías).",
        ],
        conclusion: "You mustn't tell anyone.",
      },
      {
        title: "Consejo con should",
        question: "Traduce: “Deberías llamar a tu madre.”",
        steps: [
          "Consejo → should.",
          "should + verbo base, sin to y sin -s.",
          "call = llamar; your mother.",
        ],
        conclusion: "You should call your mother.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Los modales de un vistazo",
        headers: ["Modal", "Significado", "Ejemplo"],
        rows: [
          ["can", "habilidad / permiso", "She can swim."],
          ["could", "petición cortés / pasado", "Could you help me?"],
          ["should", "consejo", "You should sleep more."],
          ["must", "obligación fuerte / deducción", "You must be hungry."],
          ["have to", "obligación externa", "I have to study."],
          ["mustn't", "prohibición", "You mustn't be late."],
          ["don't have to", "no es necesario", "You don't have to wait."],
        ],
        note: "Los modales nunca llevan to ni -s: she can, he should.",
      },
    ],
  },
  {
    id: "en-g-b1-gerund-infinitive", level: "B1", title: "Gerundio e infinitivo tras los verbos", titleIt: "Gerunds and infinitives",
    summary: "Unos verbos piden -ing y otros piden to: enjoy -ing, want to.",
    explanation: [
      "Algunos verbos van seguidos de gerundio (-ing): enjoy, finish, mind, keep, suggest (I enjoy cooking, She finished reading). Otros van con infinitivo (to + base): want, need, decide, hope, plan, promise (I want to travel, We decided to stay).",
      "Preposiciones siempre con -ing: interested in learning, good at singing, before going. Y hay verbos que aceptan los dos con cambio de sentido: stop to smoke (parar para fumar) vs stop smoking (dejar de fumar); remember to lock the door (acordarse de hacer algo) vs remember locking it (recordar haberlo hecho). like + -ing es gusto general; like to + infinitivo, hábito razonado.",
    ],
    examples: [
      { it: "I enjoy cooking on weekends.", es: "Disfruto cocinando los fines de semana." },
      { it: "We decided to move to Denver.", es: "Decidimos mudarnos a Denver." },
      { it: "She's good at fixing things.", es: "Ella es buena arreglando cosas." },
      { it: "Don't forget to call your grandma.", es: "No olvides llamar a tu abuela." },
      { it: "He stopped drinking coffee at night.", es: "Él dejó de tomar café de noche." },
      { it: "I keep making the same mistake.", es: "Sigo cometiendo el mismo error." },
    ],
    problems: [
      {
        title: "Grupo correcto",
        question: "Completa: “I'm tired of ___ (cook) every day.”",
        steps: [
          "of es una preposición.",
          "Tras preposición SIEMPRE gerundio -ing.",
          "cook → cooking.",
        ],
        conclusion: "I'm tired of cooking every day.",
      },
      {
        title: "Sentido que cambia",
        question: "Elige: “We stopped ___ a coffee on the road. (to get / getting)”",
        steps: [
          "Queremos decir que paramos el coche PARA tomar un café.",
          "stop + to + infinitivo = parar con un propósito.",
          "stop + -ing sería dejar de hacer algo.",
        ],
        conclusion: "We stopped to get a coffee on the road.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Verbos que mandan",
        headers: ["+ gerundio (-ing)", "+ infinitivo (to…)", "Los dos, cambia el sentido"],
        rows: [
          ["enjoy, finish, mind, keep, avoid", "want, need, decide, hope, plan", "stop, remember, forget, try"],
          ["I enjoy reading.", "I want to read.", "I remembered to lock / locking the door."],
        ],
        note: "Tras preposición (of, in, at, for, about) siempre -ing: before leaving.",
      },
    ],
  },
  {
    id: "en-g-b1-conditionals", level: "B1", title: "Condicionales 0, 1 y 2", titleIt: "Conditionals: zero, first and second",
    summary: "Cero para verdades, primero para futuro real, segundo para sueños.",
    explanation: [
      "El condicional cero expresa verdades generales: If + presente, presente (If you heat ice, it melts). El primer condicional habla de futuros reales y probables: If + presente simple, will + base (If it rains tomorrow, we'll stay home). Nótese que la parte con if NUNCA lleva will.",
      "El segundo condicional imagina presentes irreales: If + pasado simple, would + base (If I had more time, I would travel). Para todos usa were: If I were you, I'd take the job. La diferencia con el primero es la probabilidad: If I win the lottery (creo que puede pasar) vs If I won the lottery (sueño). would contraído 'd es lo más natural al hablar: I'd travel.",
    ],
    examples: [
      { it: "If you heat water to 212F, it boils.", es: "Si calientas agua a 100 grados, hierve." },
      { it: "If it rains, we'll cancel the picnic.", es: "Si llueve, cancelaremos el pícnic." },
      { it: "If I have time, I'll call you.", es: "Si tengo tiempo, te llamaré." },
      { it: "If I were rich, I would buy a ranch.", es: "Si fuera rico, compraría un rancho." },
      { it: "She would travel more if she didn't work so much.", es: "Ella viajaría más si no trabajara tanto." },
      { it: "What would you do if you won a million dollars?", es: "¿Qué harías si ganaras un millón de dólares?" },
    ],
    problems: [
      {
        title: "Nunca will tras if",
        question: "Corrige: “If it will rain, we'll stay home.”",
        steps: [
          "La cláusula del if va en presente simple.",
          "will SOLO aparece en la otra mitad de la frase.",
          "Es el error más típico: el español “si lloverá” no existe, pero el calco se cuela.",
        ],
        conclusion: "If it rains, we'll stay home.",
      },
      {
        title: "Segundo condicional",
        question: "Completa: “If I ___ you, I would apologize. (be)”",
        steps: [
          "Es una situación irreal del presente.",
          "Segundo condicional: If + pasado simple.",
          "Con be se usa were para todas las personas.",
        ],
        conclusion: "If I were you, I would apologize.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Los tres condicionales",
        headers: ["Tipo", "Fórmula", "Ejemplo"],
        rows: [
          ["0 (verdad)", "If + presente, presente", "If you press this, the light turns on."],
          ["1 (futuro real)", "If + presente, will + base", "If you come, I'll cook."],
          ["2 (irreal presente)", "If + pasado, would + base", "If I lived near, I would visit more."],
        ],
        note: "Sin will tras if; en el tipo 2, were para todas las personas: If she were here…",
      },
    ],
  },

  /* ══════════ B2 ══════════ */
  {
    id: "en-g-b2-passive", level: "B2", title: "La voz pasiva", titleIt: "The passive voice",
    summary: "be + participio: el inglés prefiere pasivas cuando el agente no importa.",
    explanation: [
      "La pasiva se forma con be (en el tiempo que toque) + participio: The letter was written in 1990, English is spoken here, The house has been sold. Si quieres nombrar al agente, se añade by: This song was written by Dolly Parton.",
      "Se usa cuando la acción importa más que quien la hace: noticias (Three people were injured), instrucciones (The form must be filled in black ink) y cortesía (You've been promoted). Para pasar una activa a pasiva: el objeto pasa a sujeto, el verbo a be + participio y el sujeto original a by. Los modales también la forman: must be sent, can be seen. En pasiva con dos objetos, el indirecto suele encabezar: I was given a book.",
    ],
    examples: [
      { it: "The vaccine was discovered in 1955.", es: "La vacuna fue descubierta en 1955." },
      { it: "My car is being repaired.", es: "Mi coche está siendo reparado." },
      { it: "The results have been published.", es: "Los resultados han sido publicados." },
      { it: "This bridge was built in 1937.", es: "Este puente fue construido en 1937." },
      { it: "You must be vaccinated to travel.", es: "Debes estar vacunado para viajar." },
      { it: "She was offered a great job.", es: "Le ofrecieron un gran trabajo." },
    ],
    problems: [
      {
        title: "Construir la pasiva",
        question: "Pasa a pasiva: “They built this school in 1965.”",
        steps: [
          "Objeto: this school pasa a sujeto.",
          "Tiempo: pasado simple → was + participio.",
          "build → built.",
          "El agente (they) desaparece porque no interesa.",
        ],
        conclusion: "This school was built in 1965.",
      },
      {
        title: "Pasiva con modal",
        question: "Completa: “The report ___ by Friday. (must / send)”",
        steps: [
          "modal must + be + participio.",
          "send → sent.",
          "La pasiva de modal es: modal + be + participio.",
        ],
        conclusion: "The report must be sent by Friday.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Pasivas en cada tiempo",
        headers: ["Tiempo", "Pasiva", "Ejemplo"],
        rows: [
          ["Presente simple", "am/is/are + pp", "It is made in Japan."],
          ["Pasado simple", "was/were + pp", "It was made in 1990."],
          ["Presente perfecto", "has/have been + pp", "It has been made twice."],
          ["Futuro", "will be + pp", "It will be made next year."],
          ["Modal", "modal + be + pp", "It can be made cheaper."],
        ],
        note: "El español abusa del “se”: se habla inglés aquí = English is spoken here.",
      },
    ],
  },
  {
    id: "en-g-b2-third-conditional", level: "B2", title: "Tercer condicional y condicionales mixtas", titleIt: "Third and mixed conditionals",
    summary: "El pasado que no se puede cambiar: if + had + participio, would have + participio.",
    explanation: [
      "El tercer condicional habla del pasado irreal, de los arrepentimientos: If + had + participio, would have + participio (If I had studied, I would have passed the exam). Ambas partes son imposibles de cambiar ya, por eso se usa para la culpa, la nostalgia y el análisis del pasado.",
      "Las mixtas cruzan tiempos: una condición del pasado con consecuencia presente (If I had taken that job, I would be in Seattle now) o viceversa (If I weren't so shy back then… ). Y ojo: nunca would dentro de la cláusula del if. En inglés coloquial americano se oye “If I would have known”, pero en escritura y exámenes la forma correcta es If I had known. La contracción I'd puede esconder I had o I would: I'd known = I had known; I'd have gone = I would have gone.",
    ],
    examples: [
      { it: "If I had known, I would have told you.", es: "Si lo hubiera sabido, te lo habría dicho." },
      { it: "She wouldn't have missed the flight if she had left earlier.", es: "No habría perdido el vuelo si hubiera salido antes." },
      { it: "If we had bought that house, we would be rich now.", es: "Si hubiéramos comprado esa casa, ahora seríamos ricos." },
      { it: "If you hadn't helped me, I would have failed.", es: "Si no me hubieras ayudado, habría suspendido." },
      { it: "I wish I had studied abroad. (variante con wish)", es: "Ojalá hubiera estudiado en el extranjero." },
    ],
    problems: [
      {
        title: "Arrepentimiento estándar",
        question: "Completa: “If I ___ earlier, I would have caught the train. (leave)”",
        steps: [
          "Consecuencia: would have caught (3º condicional).",
          "Cláusula del if: had + participio.",
          "leave → left (pasado y participio iguales).",
          "Nunca “if I would have left”.",
        ],
        conclusion: "If I had left earlier, I would have caught the train.",
      },
      {
        title: "Mixta pasado-presente",
        question: "Completa: “If I had gone to bed earlier, I ___ so tired now. (not be)”",
        steps: [
          "Condición pasada (had gone) con resultado AHORA (now).",
          "Consecuencia presente irreal → would + base.",
          "Negativo: would not be / wouldn't be.",
        ],
        conclusion: "If I had gone to bed earlier, I wouldn't be so tired now.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "en-g-b2-reported-speech", level: "B2", title: "Estilo indirecto", titleIt: "Reported speech",
    summary: "Al reportar, los tiempos dan un paso atrás: am → was, will → would.",
    explanation: [
      "Para reportar lo que alguien dijo, el inglés retrocede los tiempos: “I am tired” → He said (that) he was tired; “I will call you” → She said she would call me; “I have finished” → He said he had finished. Los pronombres y los marcadores de tiempo también se ajustan: now → then, today → that day, tomorrow → the next day, yesterday → the day before.",
      "say y tell no son intercambiables: tell lleva persona (He told ME the truth) y say no (He said that…). Las preguntas reportadas pierden el auxiliar y el orden de pregunta: “Where do you live?” → She asked where I lived (nunca “asked where did I live”). Las órdenes se reportan con told/asked + objeto + to + infinitivo: “Sit down” → He told me to sit down; la negativa: told me not to worry.",
    ],
    examples: [
      { it: "“I'm tired.” → He said he was tired.", es: "«Estoy cansado» → Dijo que estaba cansado." },
      { it: "“I'll help you.” → She said she would help me.", es: "«Te ayudaré» → Dijo que me ayudaría." },
      { it: "“I saw the movie.” → He said he had seen the movie.", es: "«Vi la película» → Dijo que había visto la película." },
      { it: "“Where do you work?” → She asked where I worked.", es: "«¿Dónde trabajas?» → Preguntó dónde trabajaba." },
      { it: "“Call me later.” → He told me to call him later.", es: "«Llámame luego» → Me dijo que lo llamara luego." },
      { it: "“Are you coming?” → She asked if I was coming.", es: "«¿Vienes?» → Preguntó si iba." },
    ],
    problems: [
      {
        title: "Reportar una pregunta",
        question: "Reporta: “Where do you live?” → She asked…",
        steps: [
          "Pregunta con do/does: el auxiliar desaparece al reportar.",
          "El orden pasa a afirmativo: where I lived.",
          "El tiempo retrocede: do you live → I lived.",
        ],
        conclusion: "She asked where I lived.",
      },
      {
        title: "say o tell",
        question: "Corrige: “He said me the truth.”",
        steps: [
          "say va SIN persona: He said that…",
          "tell va CON persona: He told me…",
          "Aquí hay un “me”, así que el verbo correcto es tell.",
        ],
        conclusion: "He told me the truth.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "El paso atrás de los tiempos",
        headers: ["Directo", "Reportado"],
        rows: [
          ["am / is", "was"],
          ["are", "were"],
          ["presente simple / continuo", "pasado simple / continuo"],
          ["pasado simple", "pasado perfecto"],
          ["presente perfecto", "pasado perfecto"],
          ["will / can", "would / could"],
        ],
        note: "Marcadores: now→then, today→that day, tomorrow→the next day, yesterday→the day before.",
      },
    ],
  },
  {
    id: "en-g-b2-relative-clauses", level: "B2", title: "Oraciones de relativo", titleIt: "Relative clauses",
    summary: "who para personas, which para cosas, that para ambas… y comas decisivas.",
    explanation: [
      "Los relativos enlazan información: who/that para personas (The man who called you), which/that para cosas (The book which I read), whose para posesión (The girl whose father is a pilot), where para lugares (The city where I was born).",
      "La gran distinción es entre especificativas (sin comas) y explicativas (con comas). Las especificativas identifican y no se pueden quitar: My brother who lives in Texas (tengo varios hermanos, este es el de Texas). Las explicativas añaden un detalle y van entre comas, y ahí that está PROHIBIDO: My brother, who lives in Texas, is a nurse. Cuando el relativo es objeto se puede omitir: The movie (that) we saw was great. En registro formal, whom sigue vivo: The client whom we met.",
    ],
    examples: [
      { it: "The woman who lives next door is a lawyer.", es: "La mujer que vive al lado es abogada." },
      { it: "This is the app that I told you about.", es: "Esta es la app de la que te hablé." },
      { it: "My car, which is ten years old, still runs great.", es: "Mi coche, que tiene diez años, aún funciona de maravilla." },
      { it: "He's the author whose book won the prize.", es: "Es el autor cuyo libro ganó el premio." },
      { it: "That's the bar where we first met.", es: "Ese es el bar donde nos conocimos." },
    ],
    problems: [
      {
        title: "who o which",
        question: "Completa: “The novel ___ won the award is fantastic.”",
        steps: [
          "Hablamos de una novela, una cosa.",
          "Cosas → which (o that).",
          "who es solo para personas.",
        ],
        conclusion: "The novel which/that won the award is fantastic.",
      },
      {
        title: "Comas que cambian el sentido",
        question: "¿Qué oración dice que tengo UN solo hermano: “My brother, who lives in Texas, is a nurse” o “My brother who lives in Texas is a nurse”?",
        steps: [
          "Las comas hacen la cláusula explicativa: información extra, no identificación.",
          "Si la cláusula explicativa se quita, sigue siendo claro quién es.",
          "Con comas = un solo hermano (el detalle de Texas es anecdótico).",
          "Sin comas identificaría a UNO de varios hermanos.",
        ],
        conclusion: "My brother, who lives in Texas, is a nurse. (un hermano)",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Relativos según su función",
        headers: ["Relativo", "Uso", "Ejemplo"],
        rows: [
          ["who / that", "personas (sujeto u objeto)", "the man who called"],
          ["which / that", "cosas", "the song which I heard"],
          ["whose", "posesión", "the boy whose bike"],
          ["where", "lugar", "the school where I studied"],
          ["whom", "objeto formal", "the client whom we called"],
        ],
        note: "En explicativas (con comas) nunca that: My laptop, which… (no “My laptop, that…”).",
      },
    ],
  },
  {
    id: "en-g-b2-phrasal-verbs", level: "B2", title: "Phrasal verbs: verbos con partícula", titleIt: "Phrasal verbs",
    summary: "give up, find out, run out of: la partícula cambia el significado.",
    explanation: [
      "Un phrasal verb es verbo + partícula (up, off, out, on…) con significado propio: give up = rendirse, look for = buscar, find out = averiguar, put off = posponer, run out of = quedarse sin. No se traducen literalmente: look up no es “mirar arriba”, es buscar (una palabra).",
      "Hay separables e inseparables. Los separables admiten el objeto en medio: turn off the TV o turn the TV off, y con pronombre OBLIGAN a la separación: turn it off (nunca “turn off it”). Los inseparables van siempre juntos delante del objeto: look after the kids, look after them. Y los intransitivos no se separan nunca: grow up, show up. Dominar get y sus partículas es media batalla: get up (levantarse), get along (llevarse bien), get over (superar), get by (arreglárselas).",
    ],
    examples: [
      { it: "Don't give up! You're almost there.", es: "¡No te rindas! Ya casi estás." },
      { it: "I found out that the store closes at nine.", es: "Averigüé que la tienda cierra a las nueve." },
      { it: "We ran out of milk.", es: "Nos quedamos sin leche." },
      { it: "They put off the meeting until Friday.", es: "Pospusieron la reunión hasta el viernes." },
      { it: "Can you turn it down, please?", es: "¿Puedes bajarlo, por favor?" },
      { it: "I get along well with my coworkers.", es: "Me llevo bien con mis colegas." },
    ],
    problems: [
      {
        title: "Separar o no separar",
        question: "Corrige: “Turn off it, please.”",
        steps: [
          "turn off es separable.",
          "Con pronombre (it), el pronombre va OBLIGATORIAMENTE en medio.",
          "Con sustantivo ambas órdenes valen: turn off the TV / turn the TV off.",
        ],
        conclusion: "Turn it off, please.",
      },
      {
        title: "Significado idiomático",
        question: "¿Qué significa “I'm looking forward to the weekend”?",
        steps: [
          "look forward to = esperar con ilusión.",
          "No es “mirar adelante”: la partícula crea significado nuevo.",
          "Se usa mucho para cerrar correos: I look forward to hearing from you.",
        ],
        conclusion: "Espero con ilusión el fin de semana.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Phrasal verbs esenciales",
        headers: ["Phrasal verb", "Significado", "Tipo"],
        rows: [
          ["give up", "rendirse", "separable"],
          ["find out", "averiguar", "separable"],
          ["put off", "posponer", "separable"],
          ["look for", "buscar", "inseparable"],
          ["look after", "cuidar de", "inseparable"],
          ["run out of", "quedarse sin", "inseparable"],
          ["grow up", "crecer", "intransitivo"],
        ],
        note: "Con pronombre: turn it off (separable) pero look after them (inseparable).",
      },
    ],
  },

  /* ══════════ C1 ══════════ */
  {
    id: "en-g-c1-perfect-modals", level: "C1", title: "Modales perfectos", titleIt: "Perfect modals",
    summary: "must/might/can't/should + have + participio: deducciones y arrepentimientos.",
    explanation: [
      "Los modales perfectos comentan el pasado. must have + participio = deducción segura (The lights are off; they must have left). might/may have = posibilidad (She might have missed the bus). can't have = deducción negativa (He can't have finished already!). should/shouldn't have = crítica o arrepentimiento (I should have studied more; You shouldn't have said that).",
      "En americano coloquial, la pronunciación aplasta estas formas: musta, mighta, shoulda (I shoulda known). Y hay matices de registro: would have es la pieza del tercer condicional; needn't have = no hacía falta (británico elegante) frente a didn't need to = no era necesario (y no lo hiciste). La diferencia entre must have (95% de certeza) y might have (30%) es exactamente la que un C1 maneja sin pensar.",
    ],
    examples: [
      { it: "The road is wet. It must have rained last night.", es: "La calle está mojada. Debe haber llovido anoche." },
      { it: "She might have forgotten about the meeting.", es: "Puede que haya olvidado la reunión." },
      { it: "He can't have seen us; he drove right by.", es: "No puede habernos visto; pasó de largo." },
      { it: "I should have taken that job in Austin.", es: "Debería haber aceptado aquel trabajo en Austin." },
      { it: "You shouldn't have spent so much on dinner.", es: "No deberías haber gastado tanto en la cena." },
      { it: "She would have called, but her phone died.", es: "Habría llamado, pero su teléfono se quedó sin batería." },
    ],
    problems: [
      {
        title: "Deducir el pasado",
        question: "Completa: “She's not answering. She ___ fallen asleep. (deducción segura)”",
        steps: [
          "Deducción con casi total seguridad.",
          "must have + participio.",
          "fall → fallen.",
        ],
        conclusion: "She must have fallen asleep.",
      },
      {
        title: "Crítica retrospectiva",
        question: "Completa: “You ___ told me earlier! (crítica)”",
        steps: [
          "Reproche por algo que NO pasó.",
          "should have + participio (o shouldn't have si pasó).",
          "tell → told.",
        ],
        conclusion: "You should have told me earlier!",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Modal + have + participio",
        headers: ["Forma", "Grado de certeza / matiz", "Ejemplo"],
        rows: [
          ["must have", "deducción segura (~95%)", "They must have left."],
          ["may/might have", "posibilidad (~30-50%)", "He might have forgotten."],
          ["can't have", "deducción negativa", "She can't have lied."],
          ["should have", "crítica o arrepentimiento", "I should have waited."],
          ["would have", "condicional pasado", "I would have gone."],
        ],
        note: "Coloquial: shoulda, coulda, woulda. Formal: should have.",
      },
    ],
  },
  {
    id: "en-g-c1-inversion", level: "C1", title: "Inversión enfática", titleIt: "Inversion after negative adverbials",
    summary: "Never have I seen…: la inversión da drama y formalidad al inglés.",
    explanation: [
      "Para enfatizar, el inglés puede invertir sujeto y auxiliar tras expresiones negativas o restrictivas al inicio de la frase: Never have I seen such a mess, Not only did she win, but she also broke the record, Rarely do we get the chance to…, Hardly had I sat down when the phone rang.",
      "La regla práctica: si la frase empieza con la expresión negativa, se invierte como en una pregunta (auxiliar + sujeto + verbo). Si la frase va en tiempo simple sin auxiliar, se recluta do/does/did: Not only does he cook, he also cleans. En condicionales formales la inversión SUSTITUYE al if: Had I known (If I had known), Were I you (If I were you), Should you need anything (If you should need). Es el inglés de discursos, ensayos y contratos: poco frecuente en el bar, imprescindible en C1.",
    ],
    examples: [
      { it: "Never have I tasted anything like this.", es: "Nunca he probado nada igual." },
      { it: "Not only did they apologize, they also refunded us.", es: "No solo se disculparon, sino que además nos reembolsaron." },
      { it: "Hardly had we arrived when the show started.", es: "Apenas habíamos llegado cuando empezó el espectáculo." },
      { it: "Little did she know what was waiting for her.", es: "Poco sospechaba ella lo que la esperaba." },
      { it: "Had I known, I would have stayed home.", es: "Si lo hubiera sabido, me habría quedado en casa." },
      { it: "Should you have questions, feel free to call.", es: "Si tuvieras preguntas, no dudes en llamar." },
    ],
    problems: [
      {
        title: "Invertir con did",
        question: "Reescribe con inversión: “I have never heard such an excuse.”",
        steps: [
          "La expresión negativa (never) pasa al principio.",
          "Se invierte auxiliar y sujeto: Never have I…",
          "have es ya auxiliar aquí, así que se usa directamente.",
        ],
        conclusion: "Never have I heard such an excuse.",
      },
      {
        title: "Condicional invertido",
        question: "Reescribe sin if: “If I had known earlier, I would have called.”",
        steps: [
          "Condicional con had: se elimina if.",
          "had pasa delante del sujeto: Had I known…",
          "El resto no cambia: would have called.",
        ],
        conclusion: "Had I known earlier, I would have called.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Expresiones que disparan la inversión",
        headers: ["Apertura", "Ejemplo"],
        rows: [
          ["Never / Rarely / Seldom", "Rarely do we see that."],
          ["Not only…", "Not only did he apologize…"],
          ["Hardly / Scarcely … when", "Hardly had I left when…"],
          ["No sooner … than", "No sooner had we sat down than…"],
          ["Condicional: Had / Were / Should", "Were I in charge…"],
        ],
        note: "Sin apertura negativa no hay inversión: I have never… (orden normal).",
      },
    ],
  },
  {
    id: "en-g-c1-wish", level: "C1", title: "Deseos y quejas: wish e if only", titleIt: "wish and if only",
    summary: "Un tiempo verbal atrás de la realidad: desear el presente, el pasado o cambiar a otros.",
    explanation: [
      "wish funciona como un condicional sin if: siempre empuja el verbo un paso atrás de la realidad. Para el presente: wish + pasado simple (I wish I had more time = en realidad no lo tengo). Para el pasado: wish + pasado perfecto (I wish I hadn't said that = lo dije y me arrepiento). if only es la versión más dramática: If only I knew!",
      "wish + would es especial: se usa para quejarse del comportamiento de OTRAS personas o de situaciones que quieres que cambien (I wish you would stop smoking; I wish it would stop raining), pero nunca de ti mismo (nunca “I wish I would”). Y no confundas wish con hope: hope va con tiempos reales (I hope you feel better soon, I hope she calls) porque expresa expectativa posible; wish expresa deseo irreal.",
    ],
    examples: [
      { it: "I wish I had a bigger apartment.", es: "Ojalá tuviera un apartamento más grande." },
      { it: "I wish I hadn't eaten so much.", es: "Ojalá no hubiera comido tanto." },
      { it: "I wish you would listen to me.", es: "Ojalá me escucharas." },
      { it: "If only she were here!", es: "¡Si al menos estuviera ella aquí!" },
      { it: "I hope the flight isn't delayed.", es: "Espero que el vuelo no se retrase." },
      { it: "It's time we left.", es: "Ya es hora de que nos vayamos (mismo subjuntivo implícito)." },
    ],
    problems: [
      {
        title: "Desear el presente",
        question: "Completa: “I wish I ___ (speak) Japanese.”",
        steps: [
          "Realidad: no hablo japonés (presente).",
          "Deseo del presente → wish + pasado simple.",
          "spoke.",
        ],
        conclusion: "I wish I spoke Japanese.",
      },
      {
        title: "wish o hope",
        question: "Elige: “I ___ you pass your exam. (wish / hope)”",
        steps: [
          "El examen aún puede ir bien: expectativa posible.",
          "hope va con la realidad (presente o futuro real).",
          "wish sería para lo imposible o irreal.",
        ],
        conclusion: "I hope you pass your exam.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "en-g-c1-cleft", level: "C1", title: "Oraciones hendidas: dar foco", titleIt: "Cleft sentences",
    summary: "It was John who… / What I need is…: maquinaria para enfatizar una pieza.",
    explanation: [
      "Las oraciones hendidas parten una frase en dos para proyectar el foco. El patrón it-cleft: It + be + elemento destacado + who/that + resto (It was Sarah who called you, no Tom; It's in Austin that everything happened). El patrón wh-cleft: What + cláusula + be + lo importante (What I need is a vacation; What surprises me is the price).",
      "Sirven para corregir (It wasn't me…), enfatizar (All I want is some quiet) y estructurar el discurso (The reason why I called is…). En registro escrito y formal son marca de elegancia; en conversación dan énfasis emotivo: You're the one who knows this city. La concordancia depende de la pieza enfatizada: What I need IS, pero What we need ARE more hands.",
    ],
    examples: [
      { it: "It was the manager who signed the check.", es: "Fue el gerente quien firmó la cuenta." },
      { it: "What I love about this city is the food.", es: "Lo que amo de esta ciudad es la comida." },
      { it: "All you have to do is press this button.", es: "Lo único que tienes que hacer es pulsar este botón." },
      { it: "It's not the price that bothers me, it's the color.", es: "No es el precio lo que me molesta, es el color." },
      { it: "The reason why she left is still a mystery.", es: "La razón por la que se fue sigue siendo un misterio." },
    ],
    problems: [
      {
        title: "Construir un it-cleft",
        question: "Da foco a “the rain”: “We canceled the picnic because of the rain.”",
        steps: [
          "Elemento destacado: the rain.",
          "Patrón: It + was + the rain + that…",
          "El resto de la frase va tras that.",
        ],
        conclusion: "It was the rain that made us cancel the picnic.",
      },
      {
        title: "Concordancia en wh-cleft",
        question: "Completa: “What we need ___ more time.”",
        steps: [
          "La pieza final es more time, singular.",
          "En wh-cleft el verbo concuerda con lo que va después de be.",
          "more time = singular → is.",
        ],
        conclusion: "What we need is more time.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "en-g-c1-linkers", level: "C1", title: "Conectores avanzados y registro", titleIt: "Advanced linking devices",
    summary: "Nevertheless, hence, provided that: la tornillería del inglés académico.",
    explanation: [
      "El salto a C1 se nota en los conectores: nevertheless y nonetheless (sin embargo, formal), hence y thus (por lo tanto, académico), furthermore y moreover (además), inasmuch as (en la medida en que), provided that y as long as (siempre que), in spite of / despite + sustantivo o gerundio (a pesar de), for fear of + gerundio (por miedo a).",
      "La puntuación manda: however va entre comas (I agree; however, there's a problem), while mientras que nevertheless se pega con punto y coma o abre párrafo. Despite va SIN of (despite the rain), mientras in spite of lo lleva. Y hence puede ir pegado al sustantivo con article: hence the delay. Elegir el conector exacto no es adorno: because da la causa, since la causa conocida, as la causa obvia, for la causa literaria.",
    ],
    examples: [
      { it: "The results were poor; nevertheless, the team continued.", es: "Los resultados fueron pobres; sin embargo, el equipo continuó." },
      { it: "The data was incomplete; hence the delays.", es: "Los datos estaban incompletos; de ahí los retrasos." },
      { it: "We'll leave early, provided that the weather holds.", es: "Saldré temprano, siempre que el tiempo aguante." },
      { it: "Despite the traffic, we arrived on time.", es: "A pesar del tráfico, llegamos a tiempo." },
      { it: "She whispered for fear of waking the baby.", es: "Susurraba por miedo a despertar al bebé." },
      { it: "Moreover, the study was never replicated.", es: "Además, el estudio nunca fue replicado." },
    ],
    problems: [
      {
        title: "A pesar de: puntuación y preposición",
        question: "Corrige: “Despite of the rain, we hiked all day.”",
        steps: [
          "despite NUNCA lleva of.",
          "in spite of sí lleva of: in spite of the rain.",
          "Ambos van seguidos de sustantivo o gerundio, nunca de cláusula con sujeto.",
        ],
        conclusion: "Despite the rain, we hiked all day.",
      },
      {
        title: "Conector de consecuencia formal",
        question: "Elige el más formal para un ensayo: “The sample was small; ___, the findings are tentative. (so / hence / so that)”",
        steps: [
          "so es coloquial y so that expresa propósito.",
          "En ensayo académico se pide hence o thus.",
          "Van con punto y coma y coma: “; hence,”.",
        ],
        conclusion: "The sample was small; hence, the findings are tentative.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "La caja de conectores C1",
        headers: ["Relación", "Coloquial", "Formal C1"],
        rows: [
          ["Contraste", "but", "nevertheless, nonetheless"],
          ["Causa", "because", "since, inasmuch as"],
          ["Consecuencia", "so", "hence, thus, therefore"],
          ["Adición", "and, also", "moreover, furthermore"],
          ["Condición", "if", "provided that, as long as"],
          ["Concesión", "even though", "despite, in spite of"],
        ],
        note: "despite + sustantivo; although + cláusula completa con sujeto y verbo.",
      },
    ],
  },

  /* ══════════ C2 ══════════ */
  {
    id: "en-g-c2-articles", level: "C2", title: "El artículo en nivel nativo", titleIt: "Advanced article usage",
    summary: "Go to school vs go to the school: cero artículo, instituciones y matices.",
    explanation: [
      "El cero artículo es el territorio avanzado: comidas (have dinner), idiomas (She speaks Spanish), deportes (play basketball), meses y días (on Monday), instituciones usadas por su función (go to school, be in prison, go to bed). Cuando la misma palabra se usa como edificio o lugar concreto, vuelve el artículo: The school my kids go to is old, I visited the prison museum.",
      "The aparece con: objetos únicos (the sun, the internet), superlativos (the best), ríos y mares (the Mississippi, the Gulf), cadenas montañosas (the Rockies), países en plural o compuestos (the Netherlands, the United States), instrumentos con play (play the piano) y adjetivos sustantivados (the rich, the unknown). Y el clásico AmE/BrE: los americanos van to the hospital; los británicos, to hospital. Con a/an quedan profesiones (She's a lawyer) y cifras aproximadas (about a hundred, a few, a lot).",
    ],
    examples: [
      { it: "The kids are at school until three.", es: "Los niños están en la escuela hasta las tres." },
      { it: "We visited the school where she teaches.", es: "Visitamos la escuela donde ella enseña." },
      { it: "He plays the saxophone in a jazz band.", es: "Toca el saxofón en una banda de jazz." },
      { it: "The Mississippi is the second-longest river.", es: "El Misisipi es el segundo río más largo." },
      { it: "The rich are getting richer.", es: "Los ricos se hacen más ricos." },
      { it: "After church, we had lunch at a diner.", es: "Después de la iglesia, almorzamos en un diner." },
    ],
    problems: [
      {
        title: "Institución o edificio",
        question: "Elige: “My grandfather is in ___ hospital.” (EE. UU.)",
        steps: [
          "En americano, hospital como institución suele llevar the.",
          "El británico diría in hospital.",
          "Como C1/C2 conviene dominar ambas y ser coherente.",
        ],
        conclusion: "My grandfather is in the hospital. (EE. UU.)",
      },
      {
        title: "El artículo con generalizaciones",
        question: "Corrige si hace falta: “The life is hard sometimes.”",
        steps: [
          "life en general no es único ni concreto.",
          "Las abstracciones generalizadas van sin artículo.",
          "Con “the life” nos referiríamos a una vida concreta: the life of a pilot.",
        ],
        conclusion: "Life is hard sometimes.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "en-g-c2-subjunctive", level: "C2", title: "Subjuntivo y estructuras mandativas", titleIt: "The subjunctive and mandative structures",
    summary: "I suggest he go: el subjuntivo de base pura sigue vivo en el inglés formal.",
    explanation: [
      "El subjuntivo inglés usa la forma base del verbo, sin -s y sin tiempo: después de verbos como suggest, recommend, insist, demand, request y adjetivos como essential, vital, crucial, en estructuras mandativas (I suggest that he GO; It's essential that she BE here; They demanded that the company PAY). El americano lo conserva con orgullo; el británico a veces intercala should (I suggest that he should go).",
      "El subjuntivo también vive en fosas fijas: if I were you (irreal), as if/as though + pasado (He acts as if he owned the place), God save the King, heaven forbid, come what may, be that as it may, far be it from me, lest we forget (lest + subjuntivo, arcaizante y elegante). after would rather + sujeto se usa el pasado para el presente (I'd rather you didn't smoke). Reconocer y usar estas formas es la marca del C2: nadie las dice por accidente.",
    ],
    examples: [
      { it: "The doctor recommended that he take a break.", es: "El médico recomendó que descansara." },
      { it: "It's vital that everyone be on time.", es: "Es vital que todos sean puntuales." },
      { it: "I insisted that she keep the change.", es: "Insistí en que se quedara con el cambio." },
      { it: "He spends as if he were a millionaire.", es: "Gasta como si fuera millonario." },
      { it: "Be that as it may, the deadline stands.", es: "Sea como sea, la fecha límite se mantiene." },
      { it: "I'd rather you didn't mention it.", es: "Preferiría que no lo mencionaras." },
    ],
    problems: [
      {
        title: "Mandativa con suggest",
        question: "Completa: “I suggest that he ___ the manager. (call)”",
        steps: [
          "suggest + that activa el subjuntivo mandativo.",
          "El verbo va en forma base, SIN -s aunque el sujeto sea he.",
          "call (no “calls”, no “to call”).",
        ],
        conclusion: "I suggest that he call the manager.",
      },
      {
        title: "as if irreal",
        question: "Completa: “She talks as if she ___ the boss. (be)”",
        steps: [
          "No es la boss: situación irreal.",
          "as if + pasado simple; con be se usa were.",
          "were para todas las personas.",
        ],
        conclusion: "She talks as if she were the boss.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Disparadores del subjuntivo",
        headers: ["Disparador", "Ejemplo"],
        rows: [
          ["suggest / insist / demand", "I insist that he leave now."],
          ["It's essential / vital", "It's essential that she be informed."],
          ["if I were you", "If I were you, I'd wait."],
          ["as if / as though", "as though he knew everything"],
          ["would rather + sujeto", "I'd rather you came later."],
          ["fósiles: lest, come what may…", "Lest we forget."],
        ],
        note: "Forma base pura: he go, she be, it have. Sin -s, sin to.",
      },
    ],
  },
  {
    id: "en-g-c2-ellipsis", level: "C2", title: "Elipsis y sustitución", titleIt: "Ellipsis and substitution",
    summary: "I can swim but she can't: el inglés odia repetir lo ya dicho.",
    explanation: [
      "El inglés advanced borra lo redundante. Elipsis de verbos tras auxiliares: I can swim, but she can't (swim). So/neither para eco: So do I (yo también), Neither do I (yo tampoco), So have we, Nor will they. Sustitución con do so y do it: She promised to help and she did so; one/ones para sustantivos: the red one, the small ones.",
      "Otras maquinarias: cláusulas de relativo reducidas (The man standing there = who is standing; a book written in 1950 = which was written), infinitivo sin repetir (I'd love to), gapping en paralelos (She ordered tea, and he coffee), y reduced clauses after while/when/once/if (While walking home, I saw it = While I was walking…). Elipsis mal usada suena a extranjero avanzado; bien usada, a nativo culto.",
    ],
    examples: [
      { it: "I love jazz. — So do I.", es: "Me encanta el jazz. — A mí también." },
      { it: "I can't drive. — Neither can I.", es: "No sé conducir. — Yo tampoco." },
      { it: "He said he'd call, and he did so at noon.", es: "Dijo que llamaría, y lo hizo al mediodía." },
      { it: "The train leaving at nine is the express.", es: "El tren que sale a las nueve es el exprés." },
      { it: "Would you like to join us? — I'd love to.", es: "¿Te gustaría acompañarnos? — Me encantaría." },
      { it: "When finished, the bridge will be the longest in the state.", es: "Cuando esté terminado, el puente será el más largo del estado." },
    ],
    problems: [
      {
        title: "Eco con so/neither",
        question: "Responde: “I've never been to Alaska.” (yo tampoco)",
        steps: [
          "Frase negativa con have (presente perfecto).",
          "Eco negativo → Neither (Nor).",
          "Inversión: Neither have I.",
        ],
        conclusion: "Neither have I.",
      },
      {
        title: "Relativa reducida",
        question: "Reduce: “The woman who is waiting outside is my aunt.”",
        steps: [
          "who is + -ing se reduce a -ing.",
          "La cláusula reducida no lleva who ni be.",
          "The woman waiting outside…",
        ],
        conclusion: "The woman waiting outside is my aunt.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "en-g-c2-idioms-register", level: "C2", title: "Idiomaticidad, colocaciones y registro", titleIt: "Idioms, collocations and register",
    summary: "Make a decision, take a risk, a blessing in disguise: hablar como los nativos.",
    explanation: [
      "El nivel C2 es colocación más que vocabulario: en inglés se make a decision (no “do”), take a risk, take a photo, do a favor, have an effect, make progress, pay attention, meet a deadline. Los binomios fijos suenan a nativo: odds and ends, safe and sound, now and then, back and forth. Y los idioms con cuerpo: pull someone's leg (tomar el pelo), break a leg (mucha suerte), a piece of cake (facilísimo), under the weather (indispuesto).",
      "El registro se ajusta con precisión: children (neutral) → kids (coloquial) → kiddos (familiar americano); purchase (formal) vs buy (neutral); reside vs live. El verbo camaleónico get cubre media lengua: get up, get over it, get it, get going, get together. Y las variantes de EE. UU. frente a GB: elevator/lift, apartment/flat, fall/autumn, faucet/tap, soccer/football. Un C2 juega con estos matices: usa el idiom correcto, en el registro correcto, del lado correcto del Atlántico.",
    ],
    examples: [
      { it: "We need to make a decision by Friday.", es: "Tenemos que tomar una decisión antes del viernes." },
      { it: "You're pulling my leg! That can't be true.", es: "¡Me estás tomando el pelo! Eso no puede ser cierto." },
      { it: "The exam was a piece of cake.", es: "El examen fue facilísimo." },
      { it: "After two flat tires, our trip was back on track.", es: "Tras dos llantas ponchadas, nuestro viaje volvió a encarrilarse." },
      { it: "She's a bit under the weather today.", es: "Hoy está un poco indispuesta." },
      { it: "I'll grab my keys and then we can head out.", es: "Tomo mis llaves y entonces podemos salir." },
    ],
    problems: [
      {
        title: "Colocación exacta",
        question: "Elige: “Can you ___ me a favor? (make / do)”",
        steps: [
          "favor se combina con do.",
          "make es para crear cosas: make a cake, make money, make a mistake.",
          "do es para tareas y favores: do homework, do the dishes, do a favor.",
        ],
        conclusion: "Can you do me a favor?",
      },
      {
        title: "Descifrar un idiom",
        question: "¿Qué significa “it's a blessing in disguise”?",
        steps: [
          "blessing = bendición; disguise = disfraz.",
          "Imagen: una bendición vestida de problema.",
          "Significado: algo que parece malo pero resulta bueno.",
          "Ejemplo: Losing that job was a blessing in disguise.",
        ],
        conclusion: "Una bendición disfrazada: algo que parece malo pero acaba siendo bueno.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Colocaciones make vs do vs take vs have",
        headers: ["Verbo", "Colocaciones estrella"],
        rows: [
          ["make", "a decision, a mistake, money, progress, plans"],
          ["do", "a favor, homework, the dishes, business"],
          ["take", "a risk, a photo, a break, notes, time"],
          ["have", "an effect, fun, lunch, a look, a seat"],
        ],
        note: "En español “tomar una decisión”; en inglés make a decision: las colocaciones no se traducen, se aprenden.",
      },
    ],
  },
];
