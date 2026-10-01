import type { CbUnit } from "../cambridge";

/* ═══ A1 · Sopravvivere in italiano — 12 unità comunicative ══════════ */

export const CB_A1: CbUnit[] = [
  {
    id: "cu-a1-01", n: 1, level: "A1",
    title: "¡Hola! Me presento", titleIt: "Ciao! Mi presento",
    img: "/images/conversazione/cs-1.jpg",
    goal: "Presentarte y conocer a alguien en una fiesta o en clase",
    goals: ["Saludar de forma formal e informal", "Decir tu nombre, nacionalidad y de dónde eres", "Preguntar el nombre a otra persona"],
    scenario: "Es tu primera noche en Bolonia. Un grupo de estudiantes internacionales organiza una bienvenida en un bar. No conoces a nadie: tendrás que presentarte y conocer a los demás.",
    dialogue: [
      { speaker: "Giulia", it: "Ciao! Io sono Giulia. E tu?", es: "¡Hola! Yo soy Giulia. ¿Y tú?" },
      { speaker: "Tu", it: "Ciao Giulia! Mi chiamo Alejandro.", es: "¡Hola Giulia! Me llamo Alejandro." },
      { speaker: "Giulia", it: "Piacere, Alejandro! Di dove sei?", es: "¡Encantada, Alejandro! ¿De dónde eres?" },
      { speaker: "Tu", it: "Sono peruviano, di Lima. E tu?", es: "Soy peruano, de Lima. ¿Y tú?" },
      { speaker: "Giulia", it: "Sono italiana, di Bologna. Studi qui?", es: "Soy italiana, de Bolonia. ¿Estudias aquí?" },
      { speaker: "Tu", it: "Sì, studio italiano. Sono studente.", es: "Sí, estudio italiano. Soy estudiante." },
      { speaker: "Giulia", it: "Perfetto! Lei è Marta, è spagnola.", es: "¡Perfecto! Ella es Marta, es española." },
      { speaker: "Marta", it: "Piacere! Sei di Lima? Che bello!", es: "¡Encantada! ¿Eres de Lima? ¡Qué bonito!" },
      { speaker: "Tu", it: "Grazie! Sono molto contento di essere qui.", es: "¡Gracias! Estoy muy contento de estar aquí." },
    ],
    comprehension: [
      { q: "¿De dónde es Alejandro?", options: ["De España", "De Perú", "De Italia"], answer: 1, explain: "Dice: «Sono peruviano, di Lima»." },
      { q: "¿Qué estudia Alejandro?", options: ["Historia del arte", "Cocina italiana", "Italiano"], answer: 2, explain: "«Studio italiano. Sono studente»." },
      { q: "¿Quién es Marta?", options: ["La profesora", "Una estudiante española", "La hermana de Giulia"], answer: 1, explain: "Giulia la presenta: «Lei è Marta, è spagnola»." },
    ],
    chunks: [
      { it: "Mi chiamo…", es: "Me llamo…" },
      { it: "Piacere!", es: "¡Encantado/a!" },
      { it: "Di dove sei?", es: "¿De dónde eres?" },
      { it: "Sono di Lima.", es: "Soy de Lima." },
      { it: "Sono peruviano / peruviana.", es: "Soy peruano / peruana." },
      { it: "Lei è… / Lui è…", es: "Ella es… / Él es…" },
      { it: "Che bello!", es: "¡Qué bonito!" },
      { it: "Molto contento di essere qui.", es: "Muy contento de estar aquí." },
    ],
    grammar: {
      focus: "El verbo essere y las nacionalidades",
      inductive: [
        { it: "Io sono Alejandro.", es: "Yo soy Alejandro." },
        { it: "Lei è Marta.", es: "Ella es Marta." },
        { it: "Noi siamo studenti.", es: "Nosotros somos estudiantes." },
      ],
      rule: [
        "essere (ser/estar) es el verbo de la identidad: io sono, tu sei, lui/lei è, noi siamo, voi siete, loro sono. Fíjate: io y loro tienen la misma forma, sono.",
        "Las nacionalidades son adjetivos y concuerdan en género y número: spagnolo/spagnola, italiani/italiane. Y siempre van en minúscula: Sono peruviano, no «Peruviano».",
      ],
      topicId: "g-a1-essere-avere",
      gaps: [
        { q: "Io ___ studente.", options: ["sono", "sei", "è"], answer: 0 },
        { q: "Lei ___ spagnola.", options: ["sono", "è", "siamo"], answer: 1 },
        { q: "Noi ___ amici.", options: ["è", "siete", "siamo"], answer: 2 },
      ],
    },
    pronunciation: {
      focus: "La e abierta y cerrada",
      tip: "El italiano distingue é cerrada (sonido más cerrado, como en «me») y è abierta (más abierta, como en «mei»). Se escribe con acento solo en sílaba final: perché, caffè. En el resto, no te obsesiones: con la variante neutra te entienden perfectamente.",
      pairs: [
        { a: "è (es)", b: "e (y)", note: "è con acento = verbo essere" },
        { a: "perché", b: "caffè", note: "ambas con acento final" },
        { a: "sei", b: "sette", note: "misma e, contexto distinto" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite en voz alta: «Ciao! Mi chiamo… Sono di… Sono studente/studentessa»." },
        { kind: "semi", task: "Completa con tus datos: nombre, ciudad, nacionalidad y profesión. Dilo en voz alta dos veces." },
        { kind: "comunicativo", task: "Imagina que llegas a la fiesta de bienvenida: preséntate y pregunta a un compañero imaginario cómo se llama y de dónde es." },
        { kind: "autentico", task: "Misión real: preséntate en italiano a una persona real esta semana (compañero de clase, intercambio de idiomas o el Tutor IA de la app)." },
      ],
    },
    reading: {
      sourceId: "rd-5",
      question: "¿Cómo se presenta el autor del texto y de dónde dice que es?",
    },
    writing: {
      task: "Escribe una ficha de presentación para el grupo de estudiantes de Bolonia: nombre, ciudad, nacionalidad, profesión y una cosa que te gusta.",
      minWords: 25,
      tips: ["Empieza cada frase con Mi chiamo / Sono di / Sono…", "Usa el verbo essere: sono, è…"],
      model: [
        "Ciao a tutti! Mi chiamo Alejandro e sono peruviano, di Lima.",
        "Sono studente e studio italiano a Bologna.",
        "Sono molto contento di essere qui con voi. A presto!",
      ],
    },
    culture: {
      title: "El «piacere» italiano",
      text: "Al conocer a alguien, los italianos dicen «Piacere!» (literalmente «placer»). El saludo depende de la hora: buongiorno hasta media tarde, buonasera después. Con amigos, siempre ciao. Dar la mano es normal al conocerse; entre jóvenes que ya se conocen, dos besos.",
    },
    finalTask: {
      title: "La festa di benvenuto",
      brief: "Graba o ensaya un autorretrato de 30 segundos: te presentas, dices de dónde eres, qué haces y presentas a un amigo imaginario («Lui è… è…»).",
      checklist: ["Usé Mi chiamo / Sono di", "Usé lui è / lei è para presentar", "Saludé con ciao o buongiorno según la hora"],
    },
    review: [
      { q: "¿Cómo se dice «Encantado»?", options: ["Prego", "Piacere", "Grazie"], answer: 1 },
      { q: "«Di dove sei?» significa…", options: ["¿Cómo estás?", "¿De dónde eres?", "¿Qué estudias?"], answer: 1 },
      { q: "Io ___ di Lima.", options: ["sono", "è", "siamo"], answer: 0 },
      { q: "«Lei è spagnola» = ", options: ["Él es español", "Ella es española", "Ellas son españolas"], answer: 1 },
    ],
    cando: [
      "Puedo presentarme diciendo nombre, origen y ocupación",
      "Puedo presentar a otra persona (lui è / lei è)",
      "Puedo saludar de forma formal e informal",
    ],
  },

  {
    id: "cu-a1-02", n: 2, level: "A1",
    title: "Mi familia", titleIt: "La mia famiglia",
    img: "/images/vocab/famiglia.webp",
    goal: "Hablar de tu familia y describir a las personas",
    goals: ["Nombrar a los miembros de la familia", "Usar mio / mia / tuoi / tue", "Decir la edad"],
    scenario: "Un compañero italiano te enseña una foto de la comunión de su sobrino. Toda la familia está reunida: te toca preguntar quién es cada uno y contarle cómo es tu familia.",
    dialogue: [
      { speaker: "Marco", it: "Guarda, questa è la foto della mia famiglia!", es: "¡Mira, esta es la foto de mi familia!" },
      { speaker: "Tu", it: "Che bella foto! Chi è questa signora?", es: "¡Qué foto más bonita! ¿Quién es esta señora?" },
      { speaker: "Marco", it: "È mia madre, si chiama Anna. E questo è mio padre, Pietro.", es: "Es mi madre, se llama Anna. Y este es mi padre, Pietro." },
      { speaker: "Tu", it: "E la ragazza con il vestito blu?", es: "¿Y la chica del vestido azul?" },
      { speaker: "Marco", it: "È mia sorella Chiara. Ha diciannove anni.", es: "Es mi hermana Chiara. Tiene diecinueve años." },
      { speaker: "Tu", it: "Hai anche fratelli?", es: "¿Tienes también hermanos?" },
      { speaker: "Marco", it: "Sì, ho un fratello e due sorelle. E tu?", es: "Sí, tengo un hermano y dos hermanas. ¿Y tú?" },
      { speaker: "Tu", it: "Io ho due fratelli. Mio fratello maggiore ha trent'anni.", es: "Yo tengo dos hermanos. Mi hermano mayor tiene treinta años." },
    ],
    comprehension: [
      { q: "¿Quién es Chiara?", options: ["La madre de Marco", "La hermana de Marco", "La abuela de Marco"], answer: 1, explain: "«È mia sorella Chiara»." },
      { q: "¿Cuántos años tiene Chiara?", options: ["Nueve", "Diecinueve", "Veintinueve"], answer: 1, explain: "«Ha diciannove anni»." },
      { q: "¿Cuántos hermanos tiene Marco?", options: ["Uno", "Dos", "Tres (un fratello e due sorelle)"], answer: 2 },
    ],
    chunks: [
      { it: "Questa è mia madre.", es: "Esta es mi madre." },
      { it: "Chi è questo?", es: "¿Quién es este?" },
      { it: "Ho un fratello e due sorelle.", es: "Tengo un hermano y dos hermanas." },
      { it: "Mia sorella ha diciannove anni.", es: "Mi hermana tiene diecinueve años." },
      { it: "il mio fratello maggiore", es: "mi hermano mayor" },
      { it: "Che bella foto!", es: "¡Qué foto más bonita!" },
      { it: "E tu?", es: "¿Y tú?" },
    ],
    grammar: {
      focus: "El verbo avere y los posesivos",
      inductive: [
        { it: "Ho un fratello.", es: "Tengo un hermano." },
        { it: "Mia sorella ha diciannove anni.", es: "Mi hermana tiene diecinueve años." },
        { it: "Abbiamo due gatti.", es: "Tenemos dos gatos." },
      ],
      rule: [
        "avere (tener): io ho, tu hai, lui/lei ha, noi abbiamo, voi avete, loro hanno. Para la edad, Italia y España coinciden: «Ho vent'anni» = tengo veinte años.",
        "Los posesivos concuerdan con la cosa poseída, no con el poseedor: mio fratello / mia sorella / i miei genitori. Y ante parientes singulares no llevan artículo: mia madre, mio zio.",
      ],
      topicId: "g3-a1-possessivi",
      gaps: [
        { q: "Io ___ due fratelli.", options: ["ho", "hai", "ha"], answer: 0 },
        { q: "___ sorella si chiama Anna.", options: ["Mio", "Mia", "Miei"], answer: 1 },
        { q: "Loro ___ trent'anni.", options: ["ho", "ha", "hanno"], answer: 2 },
      ],
    },
    pronunciation: {
      focus: "La doble consonante",
      tip: "En italiano, la consonante doble se alarga de verdad: nonno (abuelo) suena más largo que nono (noveno). Para un hispanohablante el truco es «detenerse» un instante sobre la consonante.",
      pairs: [
        { a: "nonno", b: "nono", note: "abuelo ≠ noveno" },
        { a: "pala", b: "palla", note: "pala ≠ pelota" },
        { a: "casa", b: "cassa", note: "casa ≠ caja" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Ho un fratello. Mia madre si chiama… Mio padre ha … anni»." },
        { kind: "semi", task: "Dibuja mentalmente tu árbol genealógico y presenta a cuatro personas con su nombre y edad." },
        { kind: "comunicativo", task: "Tu compañero muestra una foto familiar imaginaria: pregunta qui è questo / chi è quella y responde presentando a cada uno." },
        { kind: "autentico", task: "Enséñale una foto real de tu familia a alguien (o al Tutor IA) y presenta a cada persona en italiano." },
      ],
    },
    reading: {
      lines: [
        { it: "La mia famiglia è numerosa: siamo in sei. Mio padre Pietro ha sessant'anni e mia madre Anna cinquantotto.", es: "Mi familia es numerosa: somos seis. Mi padre Pietro tiene sesenta años y mi madre Anna cincuenta y ocho." },
        { it: "Ho due sorelle e un fratello. La mia sorella maggiore si chiama Chiara e lavora a Milano.", es: "Tengo dos hermanas y un hermano. Mi hermana mayor se llama Chiara y trabaja en Milán." },
      ],
      question: "¿Cuántos sois en la familia de Marco y quién trabaja en Milán?",
    },
    writing: {
      task: "Describe a tu familia en 4-5 frases: cuántos sois, nombres, edades y una característica de cada uno.",
      minWords: 30,
      tips: ["Usa abbiamo siamo + número para decir cuántos sois", "Posesivos sin artículo con parientes: mia madre, mio fratello"],
      model: [
        "La mia famiglia è piccola: siamo in quattro.",
        "Mia madre si chiama Rosa e ha cinquant'anni. È molto simpatica.",
        "Ho un fratello, si chiama Diego. Ha ventidue anni ed è studente.",
      ],
    },
    culture: {
      title: "La familia en Italia",
      text: "La familia sigue siendo el centro de la vida social italiana: la sobremesa del domingo con nonni, zii e cuginos es casi sagrada. Y ojo: los italianos viven con los padres más tiempo que la media europea — el famoso fenómeno de los «bamboccioni».",
    },
    finalTask: {
      title: "L'albero genealogico",
      brief: "Prepara la presentación de tu árbol genealógico (4-6 personas): quién es, cómo se llama, qué edad tiene y una cualidad. Preséntala en voz alta como si enseñaras una foto.",
      checklist: ["Presenté al menos a 4 personas", "Usé possessivos corretti (mio/mia)", "Dije al menos dos edades con avere"],
    },
    review: [
      { q: "«Tengo dos hermanas» =", options: ["Ho due sorelle", "Sono due sorelle", "Ho due fratelli"], answer: 0 },
      { q: "___ madre si chiama Anna.", options: ["Mio", "Mia", "Miei"], answer: 1 },
      { q: "¿Quién es más viejo?", options: ["il nonno", "il nipote", "la sorella"], answer: 0 },
      { q: "Mio fratello ___ venticinque anni.", options: ["ho", "è", "ha"], answer: 2 },
    ],
    cando: [
      "Puedo presentar a mi familia con nombres y edades",
      "Puedo usar possessivos corretti",
      "Puedo preguntar quién es una persona",
    ],
  },

  {
    id: "cu-a1-03", n: 3, level: "A1",
    title: "Mi día a día", titleIt: "La mia giornata",
    img: "/images/vocab/tempo.webp",
    goal: "Contar tu rutina diaria y decir la hora",
    goals: ["Conjugar verbos regulares en presente", "Usar verbos reflexivos (mi sveglio…)", "Preguntar y decir la hora"],
    scenario: "En el desayuno del hostal, una señora italiana te pregunta a qué hora abren los museos y cómo es tu día de estudiante en Italia. Tendrás que contar tu rutina desde la mañana hasta la noche.",
    dialogue: [
      { speaker: "Signora", it: "Buongiorno! A che ora apre il museo?", es: "¡Buenos días! ¿A qué hora abre el museo?" },
      { speaker: "Tu", it: "Buongiorno! Alle nove, credo. Io mi sveglio alle sette e mezza.", es: "¡Buenos días! A las nueve, creo. Yo me despierto a las siete y media." },
      { speaker: "Signora", it: "Così presto! E poi cosa fa?", es: "¡Tan pronto! ¿Y luego qué hace?" },
      { speaker: "Tu", it: "Faccio colazione, poi vado a scuola in autobus. Le lezioni cominciano alle nove.", es: "Desayuno, luego voy a la escuela en autobús. Las clases empiezan a las nueve." },
      { speaker: "Signora", it: "E il pomeriggio?", es: "¿Y por la tarde?" },
      { speaker: "Tu", it: "Pranzo con gli amici, studio in biblioteca e alle sei vado in palestra.", es: "Almuerzo con los amigos, estudio en la biblioteca y a las seis voy al gimnasio." },
      { speaker: "Signora", it: "Bravo! E la sera?", es: "¡Bravo! ¿Y por la noche?" },
      { speaker: "Tu", it: "La sera ceno alle otto e vado a letto verso mezzanotte.", es: "Por la noche ceno a las ocho y me acuesto hacia medianoche." },
    ],
    comprehension: [
      { q: "¿A qué hora se despierta el estudiante?", options: ["A las siete", "A las siete y media", "A las nueve"], answer: 1, explain: "«Mi sveglio alle sette e mezza»." },
      { q: "¿Cómo va a la escuela?", options: ["A pie", "En autobús", "En bici"], answer: 1, explain: "«Vado a scuola in autobus»." },
      { q: "¿Qué hace a las seis?", options: ["Estudia", "Cena", "Va al gimnasio"], answer: 2 },
    ],
    chunks: [
      { it: "Mi sveglio alle sette e mezza.", es: "Me despierto a las siete y media." },
      { it: "Faccio colazione.", es: "Desayuno." },
      { it: "Vado a scuola in autobus.", es: "Voy a la escuela en autobús." },
      { it: "Le lezioni cominciano alle nove.", es: "Las clases empiezan a las nueve." },
      { it: "A che ora…?", es: "¿A qué hora…?" },
      { it: "Vado a letto verso mezzanotte.", es: "Me acuesto hacia medianoche." },
    ],
    grammar: {
      focus: "Presente indicativo regular y verbos reflexivos",
      inductive: [
        { it: "Io studio, tu studi, lui studia.", es: "Yo estudio, tú estudias, él estudia." },
        { it: "Noi mangiamo, voi mangiate.", es: "Nosotros comemos, vosotros coméis." },
        { it: "Mi sveglio, ti svegli, si sveglia.", es: "Me despierto, te despiertas, se despierta." },
      ],
      rule: [
        "Tres conjugaciones: -are (studiare → studio, studi, studia, studiamo, studiate, studiano), -ere (prendere → prendo, prendi…) e -ire (dormire → dormo, dormi…; finire → finisco, finisci… con -isc-).",
        "Los reflexivos se conjugan con el pronombre delante: mi sveglio, ti svegli, si sveglia, ci svegliamo, vi svegliate, si svegliano. Svegliarsi = despertarse.",
      ],
      topicId: "gx-a1-are",
      gaps: [
        { q: "Io ___ (studiare) italiano.", options: ["studio", "studi", "studia"], answer: 0 },
        { q: "Noi ___ (mangiare) alle otto.", options: ["mangia", "mangiamo", "mangiate"], answer: 1 },
        { q: "Maria si ___ (svegliare) presto.", options: ["sveglio", "svegli", "sveglia"], answer: 2 },
      ],
    },
    pronunciation: {
      focus: "El acento tónico",
      tip: "El italiano marca el acento en la escritura solo cuando cae en la última sílaba (città, caffè, però). En el resto hay que saberlo: la mayoría de palabras lo llevan en la penúltima (sve-glio), pero algunas en la antepenúltima (tavolo). Escucha y repite.",
      pairs: [
        { a: "tavolo", b: "città", note: "penúltima vs última" },
        { a: "però", b: "pero", note: "sin acento = peral" },
        { a: "sabato", b: "caffè", note: "antepenúltima vs última" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite la escalera: «Mi sveglio… Mi alzo… Faccio colazione… Vado a…»." },
        { kind: "semi", task: "Cuenta tu rutina de mañana en 5 frases con horas concretas." },
        { kind: "comunicativo", task: "Entrevista mutua: pregunta «A che ora ti svegli? / A che ora pranzi?» y responde con tu rutina real." },
        { kind: "autentico", task: "Describe tu día típico de domingo en italiano, en voz alta, sin leer. Grábate si puedes." },
      ],
    },
    reading: {
      lines: [
        { it: "La mattina mi sveglio alle sette, faccio colazione con cappuccio e cornetto e leggo le notizie.", es: "Por la mañana me despierto a las siete, desayuno con capuchino y cruasán y leo las noticias." },
        { it: "Il pomeriggio studio, ma il sabato incontro gli amici: andiamo in piazza e parliamo per ore.", es: "Por la tarde estudio, pero el sábado quedo con los amigos: vamos a la plaza y hablamos durante horas." },
      ],
      question: "¿Qué hace los sábados por la tarde y con quién?",
    },
    writing: {
      task: "Escribe tu rutina de un día laborable (6 frases): mañana, tarde y noche, con horas.",
      minWords: 40,
      tips: ["Une frases con poi (luego), verso (hacia), alle + hora", "Usa al menos dos reflexivos: mi sveglio, mi alzo…"],
      model: [
        "La mattina mi sveglio alle sette e faccio colazione velocemente.",
        "Poi vado al lavoro: comincio alle nove e finisco alle cinque.",
        "La sera ceno con la mia famiglia e verso le undici vado a letto.",
      ],
    },
    culture: {
      title: "Los horarios italianos",
      text: "El día italiano tiene ritmos propios: colazione dulce de pie en el bar (cappuccino + cornetto), pranzo hacia las 13:00, merienda rara en adultos y cena temprana para ser mediterráneos: 20:00-20:30. El cappuccino se toma solo por la mañana: pedirlo después de comer delata al turista.",
    },
    finalTask: {
      title: "Una giornata a Roma",
      brief: "Planifica un día perfecto en Roma: a qué hora te despiertas, qué haces por la mañana, dónde almuerzas, qué visitas por la tarde y cómo termina la noche. Cuéntalo en 8 frases.",
      checklist: ["Usé horas con alle/verso", "Usé al menos 2 verbos reflexivos", "La secuencia tiene mañana, tarde y noche"],
    },
    review: [
      { q: "«Me despierto a las 7:30» =", options: ["Mi sveglio alle sette e mezza", "Sveglia alle sette e mezza", "Mi sveglio alle sette e mezzo"], answer: 0 },
      { q: "Tu ___ (alzarsi) presto.", options: ["mi alzo", "ti alzi", "si alza"], answer: 1 },
      { q: "«Le lezioni cominciano» significa…", options: ["Las clases terminan", "Las clases empiezan", "Las clases continúan"], answer: 1 },
      { q: "Noi ___ (andare) a letto tardi.", options: ["ando", "andiamo", "andate"], answer: 1 },
    ],
    cando: [
      "Puedo contar mi rutina con horas",
      "Puedo conjugar verbos regulares en presente",
      "Puedo preguntar la hora y los horarios",
    ],
  },

  {
    id: "cu-a1-04", n: 4, level: "A1",
    title: "En el bar", titleIt: "Al bar",
    img: "/images/ascolto/ls-1.jpg",
    goal: "Pedir café y desayuno en un bar italiano como un local",
    goals: ["Pedir bebidas y comida con cortesía", "Preguntar precios y pagar", "Entender el ritual del café italiano"],
    scenario: "Entras al bar de la esquina en Roma a las 8:00. Hay que pedir en la barra, pagar primero o después según el local, y beber el espresso de pie en dos minutos. El camarero te mira: ¡tú puedes!",
    dialogue: [
      { speaker: "Barista", it: "Buongiorno! Dica!", es: "¡Buenos días! ¡Dígame!" },
      { speaker: "Tu", it: "Buongiorno! Un caffè e un cornetto, per favore.", es: "¡Buenos días! Un café y un cruasán, por favor." },
      { speaker: "Barista", it: "Subito! Lo vuole macchiato o normale?", es: "¡Ahora mismo! ¿Lo quiere macchiato o normal?" },
      { speaker: "Tu", it: "Normale, grazie. Quanto costa?", es: "Normal, gracias. ¿Cuánto cuesta?" },
      { speaker: "Barista", it: "Il caffè è un euro e dieci, il cornetto un euro e trenta.", es: "El café es un euro diez, el cruasán un euro treinta." },
      { speaker: "Tu", it: "Perfetto, ecco cinque euro.", es: "Perfecto, aquí tiene cinco euros." },
      { speaker: "Barista", it: "Grazie! Il resto è suo. Buona giornata!", es: "¡Gracias! Su cambio. ¡Buen día!" },
      { speaker: "Tu", it: "Grazie, altrettanto!", es: "¡Gracias, igualmente!" },
    ],
    comprehension: [
      { q: "¿Qué pide el cliente?", options: ["Un cappuccino y un cornetto", "Un café y un cornetto", "Un té y un croissant"], answer: 1 },
      { q: "¿Cuánto paga en total?", options: ["Un euro diez", "Un euro treinta", "Dos euros cuarenta"], answer: 2, explain: "1,10 + 1,30 = 2,40 €." },
      { q: "«Lo vuole macchiato?» significa…", options: ["¿Lo quiere con leche?", "¿Lo quiere frío?", "¿Lo quiere grande?"], answer: 0 },
    ],
    chunks: [
      { it: "Un caffè, per favore.", es: "Un café, por favor." },
      { it: "Quanto costa?", es: "¿Cuánto cuesta?" },
      { it: "Quanto fa in tutto?", es: "¿Cuánto es en total?" },
      { it: "Ecco cinque euro.", es: "Aquí tiene cinco euros." },
      { it: "Il resto è suo.", es: "Su cambio (le devuelvo)." },
      { it: "Buona giornata! — Altrettanto!", es: "¡Buen día! — ¡Igualmente!" },
      { it: "Subito!", es: "¡Ahora mismo!" },
    ],
    grammar: {
      focus: "C'è / ci sono y el artículo indeterminado",
      inductive: [
        { it: "C'è un tavolo libero.", es: "Hay una mesa libre." },
        { it: "Ci sono due persone al banco.", es: "Hay dos personas en la barra." },
        { it: "Vorrei un caffè e un cornetto.", es: "Querría un café y un cruasán." },
      ],
      rule: [
        "C'è (hay, singular) y ci sono (hay, plural) para existencias: C'è un bar vicino? Ci sono posti a sedere?",
        "El artículo indeterminado: un (masculino), uno ante s+z+gn+ps (uno spritz), una (femenino), un' ante vocal (un'acqua). Para pedir con elegancia, vorrei = querría.",
      ],
      topicId: "g3-a1-ce-sono",
      gaps: [
        { q: "___ un bar qui vicino?", options: ["C'è", "Ci sono", "È"], answer: 0 },
        { q: "___ molti tavoli liberi.", options: ["C'è", "Ci sono", "Sono"], answer: 1 },
        { q: "Vorrei ___ acqua, per favore.", options: ["un", "uno", "un'"], answer: 2 },
      ],
    },
    pronunciation: {
      focus: "gli y gn",
      tip: "gn suena como ñ española: lasagne, bagno. gli suena como «lli» de millón: famiglia, figlio. Son dos sonidos que el español ya tiene con otra ortografía.",
      pairs: [
        { a: "bagno", b: "famiglia", note: "ñ y lli" },
        { a: "lasagne", b: "agneLLi", note: "misma gn" },
        { a: "figlio", b: "filo", note: "gli ≠ li simple" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite el pedido: «Buongiorno! Un caffè macchiato e un cornetto, per favore»." },
        { kind: "semi", task: "Cambia el pedido: hoy quieres un cappuccino, una brioche y un vaso de agua. Pide y pregunta el precio." },
        { kind: "comunicativo", task: "Roleplay: tú eres el cliente, el barista te pregunta «macchiato o normale?», «altro?», tú pagas con un billete de diez euros." },
        { kind: "autentico", task: "Misión real: la próxima vez que vayas a un bar italiano (o al Tutor IA simulando uno), pide tu desayuno entero en italiano." },
      ],
    },
    reading: {
      lines: [
        { it: "Al bar italiano si beve il caffè al banco, in piedi, in due minuti. Al tavolo lo stesso caffè costa il doppio.", es: "En el bar italiano se bebe el café en la barra, de pie, en dos minutos. En la mesa el mismo café cuesta el doble." },
        { it: "Il cappuccino si prende solo la mattina: dopo pranzo, gli italiani ordinano solo caffè o macchiato.", es: "El capuchino se toma solo por la mañana: después de comer, los italianos piden solo café o macchiato." },
      ],
      question: "¿Por qué cuesta más el café en la mesa y cuándo se toma el cappuccino?",
    },
    writing: {
      task: "Escribe el diálogo completo de tu desayuno ideal en el bar (6-8 líneas), con saludo, pedido, precio, pago y despedida.",
      minWords: 35,
      tips: ["Usa per favore y grazie para ser cortés", "Vorrei… para pedir con elegancia"],
      model: [
        "«Buongiorno!» «Buongiorno! Dica!»",
        "«Vorrei un cappuccino e un cornetto alla crema, per favore.»",
        "«Subito! Altro?» «No, grazie. Quanto fa in tutto?» «Tre euro.» «Ecco, grazie. Buona giornata!»",
      ],
    },
    culture: {
      title: "El rito del caffè",
      text: "El espresso italiano es «un caffè»: pedirlo «espresso» ya delata turista. Se bebe de pie en la barra, rápido y sin leche después de las 11:00. El macchiato lleva una gota de leche; el cappuccino es desayuno. Y ojo: en muchos bares se paga primero en la caja (la cassa) y se muestra el ticket al barista.",
      cultureId: "cul-3",
    },
    finalTask: {
      title: "Colazione al banco",
      brief: "Simulación completa: entra al bar, saluda, pide desayuno y bebida, responde a «altro?», pregunta el total, paga y despídete. Ensáyalo hasta que fluya sin pensar.",
      checklist: ["Saludé y usé per favore / grazie", "Pregunté el precio con quanto fa / quanto costa", "Respondí a al menos una pregunta del barista"],
    },
    review: [
      { q: "«Quanto costa?» =", options: ["¿Dónde está?", "¿Cuánto cuesta?", "¿Qué hora es?"], answer: 1 },
      { q: "Vorrei ___ spritz.", options: ["un", "uno", "una"], answer: 1 },
      { q: "El café «macchiato» lleva…", options: ["chocolate", "una gota de leche", "hielo"], answer: 1 },
      { q: "___ due camerieri al banco.", options: ["C'è", "Ci sono", "Sono"], answer: 1 },
    ],
    cando: [
      "Puedo pedir desayuno en un bar con cortesía",
      "Puedo preguntar precios y pagar",
      "Entiendo el ritual del café italiano",
    ],
  },

  {
    id: "cu-a1-05", n: 5, level: "A1",
    title: "En el restaurante", titleIt: "Al ristorante",
    img: "/images/situazioni/sit-ristorante.jpg",
    goal: "Cenar en una trattoria: leer el menú, pedir y pedir la cuenta",
    goals: ["Leer un menú italiano", "Pedir platos y bebidas", "Pedir la cuenta y dejar propina (o no)"],
    scenario: "Has reservado en una trattoria típica de Trastevere. El camarero trae el menú y recita los platos del día. Tienes hambre de verdad: antipasto, primo, secondo… y por supuesto, il conto.",
    dialogue: [
      { speaker: "Cameriere", it: "Buonasera! Ha prenotato?", es: "¡Buenas noches! ¿Ha reservado?" },
      { speaker: "Tu", it: "Buonasera! Sì, un tavolo per due, a nome García.", es: "¡Buenas noches! Sí, una mesa para dos, a nombre García." },
      { speaker: "Cameriere", it: "Perfetto. Ecco il menù. Desidera anche dell'acqua?", es: "Perfecto. Aquí el menú. ¿Desea también agua?" },
      { speaker: "Tu", it: "Sì, una bottiglia di acqua naturale, grazie.", es: "Sí, una botella de agua sin gas, gracias." },
      { speaker: "Cameriere", it: "Oggi abbiamo come primo le tagliatelle al ragù. Come secondo, branzino al forno.", es: "Hoy tenemos como primero tagliatelle al ragú. Como segundo, lubina al horno." },
      { speaker: "Tu", it: "Per me le tagliatelle, poi il branzino con contorno di patate.", es: "Para mí las tagliatelle, luego la lubina con guarnición de patatas." },
      { speaker: "Cameriere", it: "Ottima scelta! Da bere?", es: "¡Excelente elección! ¿De beber?" },
      { speaker: "Tu", it: "Mezzo litro di vino rosso della casa. E dopo, il conto, per favore!", es: "Medio litro de vino tinto de la casa. ¡Y después, la cuenta, por favor!" },
    ],
    comprehension: [
      { q: "¿Para cuántas personas era la reserva?", options: ["Una", "Dos", "Cuatro"], answer: 1 },
      { q: "¿Qué pide de primero?", options: ["Branzino al forno", "Tagliatelle al ragù", "Patate"], answer: 1 },
      { q: "«Acqua naturale» es agua…", options: ["con gas", "sin gas", "del grifo"], answer: 1 },
    ],
    chunks: [
      { it: "Un tavolo per due.", es: "Una mesa para dos." },
      { it: "A nome García.", es: "A nombre García." },
      { it: "Per me le tagliatelle.", es: "Para mí las tagliatelle." },
      { it: "Da bere?", es: "¿De beber?" },
      { it: "Una bottiglia di acqua naturale / frizzante.", es: "Una botella de agua sin gas / con gas." },
      { it: "Il conto, per favore.", es: "La cuenta, por favor." },
      { it: "Ottima scelta!", es: "¡Excelente elección!" },
    ],
    grammar: {
      focus: "El partitivo: del, dello, della, dei…",
      inductive: [
        { it: "Vorrei del pane.", es: "Querría (algo de) pan." },
        { it: "Prendo della frutta.", es: "Tomaré (algo de) fruta." },
        { it: "Compriamo dei biscotti.", es: "Compramos (algunos) biscotti." },
      ],
      rule: [
        "Para cantidades indefinidas, el italiano usa di + artículo: del pane, dello zucchero, della carne, dei pomodori, degli amici, delle mele. Corresponde al «algún/un poco de» español.",
        "En el restaurante lo necesitas constantemente: «Vorrei dell'acqua», «Prendiamo del vino bianco». También con mucho/tanto: molto del pane → y ante sustantivo sin artículo: molto pane.",
      ],
      topicId: "g3-a1-articoli-ind",
      gaps: [
        { q: "Vorrei ___ pane, per favore.", options: ["del", "di", "il"], answer: 0 },
        { q: "Prendo ___ acqua frizzante.", options: ["del", "della", "delle"], answer: 1 },
        { q: "Compro ___ pomodori.", options: ["del", "dello", "dei"], answer: 2 },
      ],
    },
    pronunciation: {
      focus: "z: ts o dz",
      tip: "La z italiana suena ts (pizza, stazione) o dz (zero, zaino). No existe regla fija: se aprende palabra por palabra. Para el restaurante: pizza (ts), pranzo (dz), zucchero (ts-dz según región).",
      pairs: [
        { a: "pizza", b: "zero", note: "ts vs dz" },
        { a: "stazione", b: "zaino", note: "ts vs dz" },
        { a: "pranzo", b: "grazzo→grazie", note: "dz en ambas" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Per me le tagliatelle al ragù. Da bere, mezzo litro di vino rosso»." },
        { kind: "semi", task: "Crea tu menú ideal: antipasto, primo, secondo, contorno, postre y bebida. Dilo en voz alta." },
        { kind: "comunicativo", task: "Roleplay completo: reserva, pide, pregunta un ingrediente («Scusi, c'è carne nel ragù?») y pide la cuenta." },
        { kind: "autentico", task: "Misión real: la próxima cena italiana, pide tú todo el menú. El camarero lo agradecerá." },
      ],
    },
    reading: {
      lines: [
        { it: "Il menù italiano tradizionale ha un ordine preciso: antipasto, primo (pasta o riso), secondo (carne o pesce) con contorno, poi dolce e caffè.", es: "El menú italiano tradicional tiene un orden preciso: entrante, primero (pasta o arroz), segundo (carne o pescado) con guarnición, luego postre y café." },
        { it: "Il servizio è spesso incluso («coperto»), e la mancia non è obbligatoria: si lasciano solo gli spicci.", es: "El servicio suele estar incluido («coperto»), y la propina no es obligatoria: se dejan solo las monedas sueltas." },
      ],
      question: "¿Qué es el «coperto» y es obligatoria la propina en Italia?",
    },
    writing: {
      task: "Escribe la reseña breve (4-5 frases) de tu cena imaginaria en la trattoria: qué pediste, qué estaba rico, el precio y si volverías.",
      minWords: 35,
      tips: ["Usa partitivos: del vino, della pasta", "Adjetivos conissimo: buonissimo, ottimo"],
      model: [
        "Ieri sera ho mangiato in una trattoria a Trastevere.",
        "Ho preso del pane, le tagliatelle al ragù e del vino rosso della casa.",
        "Era tutto buonissimo! Il conto era di trenta euro. Tornerò di sicuro!",
      ],
    },
    culture: {
      title: "La estructura de la comida",
      text: "La comida italiana es arquitectura: primo (pasta/riso) y secondo (carne/pesce) son platos distintos, no «guarnición». La pizza suele ser plato único. El cappuccino después de comer, jamás; el espresso, siempre. El «coperto» (1-3 € por persona) no es una estafa: es el pan y el servicio.",
    },
    finalTask: {
      title: "La cena perfetta",
      brief: "Simula la cena completa: saludo, reserva, pedido estructurado (primo + secondo + contorno), bebida, pregunta por un plato y la cuenta. Graba o ensaya hasta dominarlo.",
      checklist: ["Pedí con Per me… / Vorrei…", "Usé el partitivo al menos dos veces", "Pedí la cuenta con Il conto, per favore"],
    },
    review: [
      { q: "«Il conto, per favore» =", options: ["La carta, por favor", "La cuenta, por favor", "El vino, por favor"], answer: 1 },
      { q: "Vorrei ___ vino rosso.", options: ["del", "della", "dei"], answer: 0 },
      { q: "El «primo» en un menú italiano suele ser…", options: ["carne", "pasta o riso", "postre"], answer: 1 },
      { q: "«Acqua frizzante» = agua…", options: ["sin gas", "con gas", "helada"], answer: 1 },
    ],
    cando: [
      "Puedo leer un menú y pedir un menú completo",
      "Puedo pedir la cuenta y entender el coperto",
      "Puedo usar el partitivo para cantidades",
    ],
  },

  {
    id: "cu-a1-06", n: 6, level: "A1",
    title: "Ir de compras", titleIt: "Fare shopping",
    img: "/images/situazioni/sit-negozio.jpg",
    goal: "Comprar ropa: tallas, colores, probarse y pagar",
    goals: ["Preguntar tallas y colores", "Probarte ropa y decidir", "Pagar con tarjeta o efectivo"],
    scenario: "Ves un abrigo precioso en el escaparate de una boutique de Milán. La dependienta se acerca. Necesitas saber si hay tu talla, cuánto cuesta y si puedes pagarlo con tarjeta.",
    dialogue: [
      { speaker: "Commessa", it: "Buongiorno! Posso aiutarla?", es: "¡Buenos días! ¿Puedo ayudarla?" },
      { speaker: "Tu", it: "Buongiorno! Quanto costa questo cappotto?", es: "¡Buenos días! ¿Cuánto cuesta este abrigo?" },
      { speaker: "Commessa", it: "Costa centoventinove euro. È di lana, molto caldo.", es: "Cuesta ciento veintinueve euros. Es de lana, muy abrigado." },
      { speaker: "Tu", it: "È bello! Avete la taglia media, colore blu?", es: "¡Es bonito! ¿Tienen la talla media, color azul?" },
      { speaker: "Commessa", it: "Solo nero e grigio, mi dispiace. Vuole provarlo?", es: "Solo negro y gris, lo siento. ¿Quiere probárselo?" },
      { speaker: "Tu", it: "Sì, provo quello grigio. Dov'è il camerino?", es: "Sí, me pruebo el gris. ¿Dónde está el probador?" },
      { speaker: "Commessa", it: "Laggiù, a destra. Come va? Le sta bene?", es: "Allí, a la derecha. ¿Cómo le va? ¿Le queda bien?" },
      { speaker: "Tu", it: "Mi sta un po' largo, ma lo prendo. Posso pagare con la carta?", es: "Me queda un poco largo, pero me lo llevo. ¿Puedo pagar con tarjeta?" },
    ],
    comprehension: [
      { q: "¿Cuánto cuesta el abrigo?", options: ["112 €", "129 €", "192 €"], answer: 1 },
      { q: "¿Qué colores hay disponibles?", options: ["Azul y gris", "Negro y gris", "Negro y azul"], answer: 1 },
      { q: "¿Qué problema tiene el abrigo?", options: ["Es pequeño", "Es largo", "Es caro"], answer: 1 },
    ],
    chunks: [
      { it: "Posso aiutarla?", es: "¿Puedo ayudarle?" },
      { it: "Quanto costa?", es: "¿Cuánto cuesta?" },
      { it: "Avete la taglia media?", es: "¿Tienen la talla media?" },
      { it: "Vuole provarlo?", es: "¿Quiere probárselo?" },
      { it: "Dov'è il camerino?", es: "¿Dónde está el probador?" },
      { it: "Mi sta bene / un po' lungo.", es: "Me queda bien / un poco largo." },
      { it: "Posso pagare con la carta?", es: "¿Puedo pagar con tarjeta?" },
    ],
    grammar: {
      focus: "Questo / quello y los adjetivos",
      inductive: [
        { it: "Questo cappotto è di lana.", es: "Este abrigo es de lana." },
        { it: "Quella maglia è troppo grande.", es: "Esa camiseta es demasiado grande." },
        { it: "Quanti euro sono? Sono trenta.", es: "¿Cuántos euros son? Son treinta." },
      ],
      rule: [
        "questo/questa (este/esta) y quello/quella (ese/esa) concuerdan con el sustantivo. Questo va delante normal; quello se combina como artículo: quel cappotto, quello zaino, quell'abito, quei pantaloni.",
        "Los adjetivos concuerdan y casi siempre van detrás del sustantivo: un cappotto grigio, una gonna blu. Los colores que terminan en -e (verde, blu) no cambian de género.",
      ],
      topicId: "g-a1-aggettivi",
      gaps: [
        { q: "___ maglia è molto bella.", options: ["Questa", "Questo", "Questi"], answer: 0 },
        { q: "___ pantaloni sono troppo lunghi.", options: ["Questa", "Quei", "Quella"], answer: 1 },
        { q: "Un cappotto ___.", options: ["grigia", "grigio", "grigie"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "c y g duras y suaves",
      tip: "c y g son duras ante a/o/u (casa, gamba) y suaves ante e/i (cena, gelato). Para hacerlas duras ante e/i se añade h (chiave, spaghetti); para suavizarlas ante a/o/u se añade e (ciao, giostra).",
      pairs: [
        { a: "cena", b: "canna", note: "c suave vs dura" },
        { a: "gelato", b: "gatto", note: "g suave vs dura" },
        { a: "chiave", b: "ciao", note: "ch dura, ci suave" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Quanto costa questo cappotto? Avete la taglia media?»." },
        { kind: "semi", task: "Describe lo que llevas puesto hoy: camisa, pantalones, zapatos, con colores y adjetivos." },
        { kind: "comunicativo", task: "Roleplay de tienda: pregunta por dos prendas, tallas, colores, pruébatelas y decide." },
        { kind: "autentico", task: "En tu próxima compra real (o imaginada con el Tutor IA), negocia y pregunta todo en italiano." },
      ],
    },
    reading: {
      lines: [
        { it: "In Italia le taglie sono diverse: la S spagnola è spesso una M italiana, e le scarpe hanno un numero in più.", es: "En Italia las tallas son distintas: la S española suele ser una M italiana, y los zapatos tienen un número más." },
        { it: "Nei mercati si può contrattare un po', nei negozi no: il prezzo è il prezzo.", es: "En los mercados se puede regatear un poco, en las tiendas no: el precio es el precio." },
      ],
      question: "¿Qué diferencia hay entre tallas españolas e italianas, y dónde se puede regatear?",
    },
    writing: {
      task: "Escribe un mensaje a un amigo contando tu tarde de compras: qué tienda, qué probaste, qué compraste y cuánto gastaste (5 frases).",
      minWords: 35,
      tips: ["Usé questo/quello y colores", "Concordé adjetivos con el sustantivo"],
      model: [
        "Ciao! Oggi sono andato in centro a fare shopping.",
        "Ho provato un cappotto grigio, ma era troppo caro.",
        "Alla fine ho comprato una sciarpa blu e due maglie: sessanta euro in tutto!",
      ],
    },
    culture: {
      title: "El made in Italy y las tallas",
      text: "Italia es sinónimo de moda, pero cuidado: «made in Italy» garantiza diseño y fabricación local. Las tallas italianas son generosas en número: si usas M española, pide una L o pruébate siempre. En outlets y mercados de pueblo se encuentran gangos reales.",
    },
    finalTask: {
      title: "Il guardaroba perfetto",
      brief: "Presenta tu armario ideal: describe 5 prendas con color, material y una opinión («è elegante, mi sta bene…»). Hazlo en voz alta como un mini podcast de moda.",
      checklist: ["Describí 5 prendas con adjetivos concordados", "Usé questo/quello al menos dos veces", "Dije un precio o una valoración"],
    },
    review: [
      { q: "«Avete la taglia media?» =", options: ["¿Tienen cambio?", "¿Tienen la talla M?", "¿Dónde está el probador?"], answer: 1 },
      { q: "___ scarpe sono eleganti.", options: ["Questa", "Questo", "Queste"], answer: 2 },
      { q: "«Mi sta bene» significa…", options: ["Me gusta", "Me queda bien", "Me lo llevo"], answer: 1 },
      { q: "El color «blu»…", options: ["cambia a femenino: blua", "no cambia de género", "solo va con zapatos"], answer: 1 },
    ],
    cando: [
      "Puedo comprar ropa preguntando tallas y colores",
      "Puedo probarme prendas y dar mi opinión",
      "Puedo pagar con tarjeta o efectivo",
    ],
  },

  {
    id: "cu-a1-07", n: 7, level: "A1",
    title: "La ciudad y las direcciones", titleIt: "La città e le indicazioni",
    img: "/images/vocab/citta.webp",
    goal: "Orientarte en una ciudad italiana y preguntar direcciones",
    goals: ["Nombrar lugares de la ciudad", "Preguntar y entender direcciones", "Usar a, in, su + artículo (preposiciones articuladas)"],
    scenario: "Buscas la Pinacoteca de Brera en Milán y el móvil se ha quedado sin batería. Tendrás que preguntar a un transeúnte y entender su respuesta llena de «giri a destra, sempre dritto…».",
    dialogue: [
      { speaker: "Tu", it: "Scusi, dov'è la Pinacoteca di Brera?", es: "Disculpe, ¿dónde está la Pinacoteca de Brera?" },
      { speaker: "Passante", it: "È qui vicino. Vada sempre dritto, poi giri a destra.", es: "Está aquí cerca. Siga todo recto, luego gire a la derecha." },
      { speaker: "Tu", it: "Sempre dritto e poi a destra. Quanto è lontano?", es: "Todo recto y luego a la derecha. ¿Cuánto hay?" },
      { speaker: "Passante", it: "Cinque minuti a piedi. Vede quella piazza? Il museo è nella piazza.", es: "Cinco minutos a pie. ¿Ve esa plaza? El museo está en la plaza." },
      { speaker: "Tu", it: "E scusi, c'è un bar nella zona?", es: "Y disculpe, ¿hay un bar por la zona?" },
      { speaker: "Passante", it: "Sì, c'è un bar all'angolo, davanti alla chiesa.", es: "Sí, hay un bar en la esquina, delante de la iglesia." },
      { speaker: "Tu", it: "Perfetto! E la fermata della metro?", es: "¡Perfecto! ¿Y la parada del metro?" },
      { speaker: "Passante", it: "La metro è sotto la piazza, accanto alla fontana.", es: "El metro está bajo la plaza, junto a la fuente." },
    ],
    comprehension: [
      { q: "¿Qué hay que hacer primero?", options: ["Girar a la derecha", "Ir todo recto", "Cross la plaza"], answer: 1, explain: "«Vada sempre dritto, poi giri a destra»." },
      { q: "¿Cuánto se tarda a pie?", options: ["Cinco minutos", "Quince minutos", "Una hora"], answer: 0 },
      { q: "¿Dónde está la parada del metro?", options: ["Delante de la iglesia", "Bajo la plaza, junto a la fuente", "En la esquina"], answer: 1 },
    ],
    chunks: [
      { it: "Scusi, dov'è…?", es: "Disculpe, ¿dónde está…?" },
      { it: "Vada sempre dritto.", es: "Siga todo recto." },
      { it: "Giri a destra / a sinistra.", es: "Gire a la derecha / a la izquierda." },
      { it: "Quanto è lontano?", es: "¿Cuánto hay (a qué distancia)?" },
      { it: "A piedi / in macchina", es: "A pie / en coche" },
      { it: "accanto alla chiesa", es: "junto a la iglesia" },
      { it: "davanti alla scuola", es: "delante de la escuela" },
    ],
    grammar: {
      focus: "Preposiciones articuladas: al, alla, nel, nella…",
      inductive: [
        { it: "Il museo è nella piazza.", es: "El museo está en la plaza." },
        { it: "Il bar è all'angolo.", es: "El bar está en la esquina." },
        { it: "Andiamo al mercato.", es: "Vamos al mercado." },
      ],
      rule: [
        "di + il = del, a + il = al, in + il = nel, su + il = sul, con + il = col. Con femeninos: alla, nella, sulla. Con plurales: ai, nei, sui.",
        "Son automáticas: cada vez que una preposición choca con un artículo, se funden. alla stazione, in banca (sin artículo en lugares públicos frecuentes), a casa.",
      ],
      topicId: "g-a2-preposizioni",
      gaps: [
        { q: "Vado ___ mercato.", options: ["a il", "al", "allo"], answer: 1 },
        { q: "Il bar è ___ piazza.", options: ["in la", "nella", "nel"], answer: 1 },
        { q: "La metro è ___ fontana.", options: ["accanto", "accanto alla", "accanto alla la"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "r simple y vibrante",
      tip: "La r italiana es vibrante como la española, pero nunca se aspira ni se «come». Al principio (Roma, radio) y entre vocales (caro, arte). Dobles: carro ≠ caro.",
      pairs: [
        { a: "caro", b: "carro", note: "caro ≠ carro" },
        { a: "destra", b: "sinistra", note: "r en grupo consonántico" },
        { a: "Roma", b: "radio", note: "r inicial e intervocálica" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite las instrucciones: «Sempre dritto, poi a destra, accanto alla chiesa»." },
        { kind: "semi", task: "Explica cómo llegar de tu casa al supermercado más cercano en 4 frases." },
        { kind: "comunicativo", task: "Roleplay: pregunta dónde están tres lugares distintos (museo, farmacia, estación) y confirma entendiendo la respuesta." },
        { kind: "autentico", task: "La próxima vez que te pierdas de verdad en Italia (¡sucederá!), pregunta en italiano antes de mirar el móvil." },
      ],
    },
    reading: {
      lines: [
        { it: "Il centro storico italiano è un labirinto di vicoli e piazze: perdersi è parte del viaggio.", es: "El centro histórico italiano es un laberinto de callejones y plazas: perderse es parte del viaje." },
        { it: "Le vie sono piene di vita: il bar in piazza, la chiesa all'angolo, il mercato sotto i portici.", es: "Las calles están llenas de vida: el bar en la plaza, la iglesia en la esquina, el mercado bajo los pórticos." },
      ],
      question: "¿Por qué dice el texto que perderse es parte del viaje?",
    },
    writing: {
      task: "Escribe las instrucciones (5-6 frases) para ir desde la estación de tren hasta tu hotel imaginario en el centro histórico.",
      minWords: 40,
      tips: ["Usa el imperativo formal: vada, giri, prenda", "Preposiciones articuladas: alla, nel, davanti alla"],
      model: [
        "Dalla stazione, vada sempre dritto per duecento metri.",
        "Alla fontana, giri a sinistra e passi davanti alla chiesa.",
        "L'albergo è nella piazza, accanto al bar con i tavolini rossi.",
      ],
    },
    culture: {
      title: "20 regioni, 20 Italias",
      text: "Italia es joven como país (1861) y vieja como civilizaciones: cada región tiene dialecto, cocina y carácter propios. La piazza es el salón de la ciudad: allí se está, se ve y se habla. Y en los centros históricos, la ZTL (Zona a Traffico Limitato) prohíbe coches: se camina.",
      cultureId: "cul-2",
    },
    finalTask: {
      title: "Caccia al tesoro urbana",
      brief: "Diseña una mini-ruta de 4 puntos de tu ciudad (o de una ciudad italiana): nombra los lugares y da las instrucciones para llegar de uno a otro. Preséntala en voz alta.",
      checklist: ["Nombré al menos 4 lugares de ciudad", "Di instrucciones con vada/giri/ sempre dritto", "Usé preposiciones articuladas correctamente"],
    },
    review: [
      { q: "«Sempre dritto» =", options: ["A la derecha", "Todo recto", "Cerca"], answer: 1 },
      { q: "Vado ___ banca.", options: ["alla", "al", "allo"], answer: 0 },
      { q: "Il museo è ___ piazza.", options: ["nel", "nella", "sul"], answer: 1 },
      { q: "«Accanto alla chiesa» significa…", options: ["detrás de la iglesia", "junto a la iglesia", "dentro de la iglesia"], answer: 1 },
    ],
    cando: [
      "Puedo preguntar direcciones y entender la respuesta",
      "Puedo dar instrucciones simples",
      "Uso bien las preposiciones articuladas básicas",
    ],
  },

  {
    id: "cu-a1-08", n: 8, level: "A1",
    title: "Viajar en tren", titleIt: "Viaggiare in treno",
    img: "/images/situazioni/sit-treno.jpg",
    goal: "Comprar billetes de tren y moverte por Italia",
    goals: ["Comprar un billete en la taquilla o máquina", "Entender horarios, andenes y validación", "Usar números y horas con soltura"],
    scenario: "Quieres ir de Roma a Florencia en alta velocidad, pero el precio te asusta: preguntas por el regional, más lento y barato. En la estación hay taquilla, máquinas y la validación que jamás debes olvidar.",
    dialogue: [
      { speaker: "Tu", it: "Buongiorno, un biglietto per Firenze, per favore.", es: "Buenos días, un billete para Florencia, por favor." },
      { speaker: "Impiegato", it: "Frecciarossa o treno regionale?", es: "¿Frecciarossa o tren regional?" },
      { speaker: "Tu", it: "Qual è la differenza?", es: "¿Cuál es la diferencia?" },
      { speaker: "Impiegato", it: "La Frecciarossa arriva in un'ora e mezza e costa cinquanta euro. Il regionale impiega quasi quattro ore ma costa solo quattordici.", es: "La Frecciarossa llega en hora y media y cuesta cincuenta euros. El regional tarda casi cuatro horas pero cuesta solo catorce." },
      { speaker: "Tu", it: "Allora prendo il regionale. A che ora parte il prossimo?", es: "Entonces tomo el regional. ¿A qué hora sale el próximo?" },
      { speaker: "Impiegato", it: "Alle dieci e dieci, dal binario sette. Ricordi di convalidare il biglietto!", es: "A las diez y diez, del andén siete. ¡Recuerde validar el billete!" },
      { speaker: "Tu", it: "Dov'è la macchina per convalidare?", es: "¿Dónde está la máquina para validar?" },
      { speaker: "Impiegato", it: "All'inizio del binario, verde e bianca. Buon viaggio!", es: "Al principio del andén, verde y blanca. ¡Buen viaje!" },
    ],
    comprehension: [
      { q: "¿Cuánto cuesta el billete regional?", options: ["14 €", "40 €", "50 €"], answer: 0 },
      { q: "¿A qué hora sale el próximo regional?", options: ["9:10", "10:10", "10:50"], answer: 1, explain: "«Alle dieci e dieci»." },
      { q: "¿Qué hay que hacer con el billete regional?", options: ["Nada", "Validarlo en la máquina verde", "Imprimirlo otra vez"], answer: 1 },
    ],
    chunks: [
      { it: "Un biglietto per Firenze.", es: "Un billete para Florencia." },
      { it: "A che ora parte il prossimo?", es: "¿A qué hora sale el próximo?" },
      { it: "Dal binario sette.", es: "Del andén siete." },
      { it: "Andata e ritorno.", es: "Ida y vuelta." },
      { it: "Devo convalidare il biglietto.", es: "Debo validar el billete." },
      { it: "Quanto costa il ritorno?", es: "¿Cuánto cuesta la vuelta?" },
      { it: "Buon viaggio!", es: "¡Buen viaje!" },
    ],
    grammar: {
      focus: "Números, horas y el verbo partire",
      inductive: [
        { it: "Il treno parte alle dieci e dieci.", es: "El tren sale a las diez y diez." },
        { it: "Arriva a mezzogiorno e mezza.", es: "Llega a las doce y media." },
        { it: "Il biglietto costa quattordici euro.", es: "El billete cuesta catorce euros." },
      ],
      rule: [
        "Las horas: è l'una / sono le due / alle tre e mezza / alle otto meno un quarto. Para los horarios de tren, minutos con «e»: le dieci e dieci.",
        "Números clave: venti, trenta, quaranta… cento, mille. Billetes y precios: costa/t costa + número + euro (invariable: cinquanta euro).",
      ],
      topicId: "g3-a1-ora",
      gaps: [
        { q: "Il treno ___ alle nove.", options: ["parte", "parti", "partono"], answer: 0 },
        { q: "Sono le tre e ___. (3:30)", options: ["mezzo", "mezza", "medio"], answer: 1 },
        { q: "Due biglietti ___ Venezia.", options: ["a", "per", "in"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "Los números difíciles",
      tip: "Ojo con los parecidos: sei (6) vs sette (7), sedici (16) vs diciassette (17), venti (20) vs ventotto (28). Y las apócopes: un amico, vent'anni.",
      pairs: [
        { a: "sei", b: "sette", note: "6 vs 7" },
        { a: "sedici", b: "diciassette", note: "16 vs 17" },
        { a: "venti", b: "trenta", note: "20 vs 30" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Un biglietto per Roma, andata e ritorno. A che ora parte?»." },
        { kind: "semi", task: "Compra imaginaria: ida y vuelta a Venecia para mañana, pregunta precio, horario y andén." },
        { kind: "comunicativo", task: "Roleplay: el empleado te ofrece dos trenes (rápido caro vs lento barato), elige y pregunta los detalles." },
        { kind: "autentico", task: "Planifica un viaje real en trenrentali.it: mira horarios y precios y explica tu elección en italiano." },
      ],
    },
    reading: {
      lines: [
        { it: "In Italia esistono due mondi: i treni ad alta velocità (Frecciarossa, Italo) veloci ed eleganti, e i regionali, lenti ma economici e panoramici.", es: "En Italia existen dos mundos: los trenes de alta velocidad (Frecciarossa, Italo) rápidos y elegantes, y los regionales, lentos pero económicos y panorámicos." },
        { it: "Sui regionali il biglietto di carta va convalidato prima di salire: la multa è cara!", es: "En los regionales el billete de papel hay que validarlo antes de subir: ¡la multa es cara!" },
      ],
      question: "¿Qué dos mundos ferroviarios hay en Italia y qué hay que hacer con el billete de papel?",
    },
    writing: {
      task: "Escribe un plan de viaje en tren (5 frases): destino, tipo de tren, hora de salida, hora de llegada, precio y qué verás por la ventana.",
      minWords: 35,
      tips: ["Usa parte/arriva + alle + hora", "Números en letras: quattordici euro"],
      model: [
        "Sabato vado a Firenze con il treno regionale.",
        "Parto alle otto e dieci e arrivo a mezzogiorno.",
        "Il biglietto costa quattordici euro solo andata. Dalla finestra vedo l'Umbria: che bello!",
      ],
    },
    culture: {
      title: "La Italia en tren",
      text: "La alta velocidad italiana es de las mejores de Europa: Milán-Roma en 3 horas. Pero el regional tiene su encanto: va despacio, para en pueblos y cuesta poco. Si viajas con backpack, el Interrail italiano es una joya. Y en las estaciones: «convalidare» el billete regional antes de subir, siempre.",
    },
    finalTask: {
      title: "Il viaggio perfetto in treno",
      brief: "Planifica y presenta un itinerario de 3 días en tren por Italia (2 ciudades): billetes, horarios, precios y una visita estrella por ciudad.",
      checklist: ["Usé horas y números correctamente", "Comparé dos tipos de tren", "Presenté el itinerario en voz alta"],
    },
    review: [
      { q: "«Andata e ritorno» =", options: ["Solo ida", "Ida y vuelta", "Billete abierto"], answer: 1 },
      { q: "Il treno parte ___ binario sette.", options: ["in", "dal", "al"], answer: 1 },
      { q: "¿«Quattordici» es…?", options: ["14", "40", "44"], answer: 0 },
      { q: "Antes de subir al regional hay que…", options: ["pagar otra vez", "convalidar el billete", "reservar asiento"], answer: 1 },
    ],
    cando: [
      "Puedo comprar billetes y entender horarios",
      "Puedo usar números y horas en contexto real",
      "Sé qué es la validación del billete",
    ],
  },

  {
    id: "cu-a1-09", n: 9, level: "A1",
    title: "El tiempo libre", titleIt: "Il tempo libero",
    img: "/images/vocab/svago.webp",
    goal: "Hablar de aficiones, gustos y planes de fin de semana",
    goals: ["Expresar gustos con mi piace / mi piacciono", "Hablar de aficiones con verbos en -are/-ere/-ire", "Proponer planes"],
    scenario: "Viernes por la tarde en la residencia de estudiantes. El grupo planea el finde. A ti te gusta el cine, a otros la playa, alguien propone un partido de fútbol. Toca negociar en italiano.",
    dialogue: [
      { speaker: "Luca", it: "Che fai sabato? Noi andiamo al mare!", es: "¿Qué haces el sábado? ¡Nosotros vamos a la playa!" },
      { speaker: "Tu", it: "Mi piacerebbe, ma sabato gioco a calcetto con gli amici.", es: "Me gustaría, pero el sábado juego al futbito con los amigos." },
      { speaker: "Luca", it: "Calcetto! Anche a me piace il calcio. E la domenica?", es: "¡Futbito! A mí también me gusta el fútbol. ¿Y el domingo?" },
      { speaker: "Tu", it: "La domenica mattina leggo o ascolto musica. Mi piace la musica italiana.", es: "El domingo por la mañana leo o escucho música. Me gusta la música italiana." },
      { speaker: "Luca", it: "Allora domenica pomeriggio andiamo al cinema? C'è un film di Sorrentino.", es: "¿Entonces el domingo por la tarde vamos al cine? Hay una película de Sorrentino." },
      { speaker: "Tu", it: "Ottima idea! Mi piacciono i suoi film. A che ora ci vediamo?", es: "¡Buena idea! Me gustan sus películas. ¿A qué hora nos vemos?" },
      { speaker: "Luca", it: "Alle sei davanti al cinema. Poi mangiamo una pizza tutti insieme!", es: "A las seis delante del cine. ¡Luego comemos una pizza todos juntos!" },
      { speaker: "Tu", it: "Perfetto! Ci vediamo domenica!", es: "¡Perfecto! ¡Nos vemos el domingo!" },
    ],
    comprehension: [
      { q: "¿Qué hace el estudiante el sábado?", options: ["Va a la playa", "Juega al futbito", "Va al cine"], answer: 1 },
      { q: "¿Qué le gusta hacer el domingo por la mañana?", options: ["Leer y escuchar música", "Nadar", "Dormir"], answer: 0 },
      { q: "¿A qué hora quedan el domingo?", options: ["A las cinco", "A las seis", "A las siete"], answer: 1 },
    ],
    chunks: [
      { it: "Mi piace il calcio.", es: "Me gusta el fútbol." },
      { it: "Mi piacciono i suoi film.", es: "Me gustan sus películas." },
      { it: "Anche a me piace…", es: "A mí también me gusta…" },
      { it: "Che fai sabato?", es: "¿Qué haces el sábado?" },
      { it: "Ci vediamo alle sei.", es: "Nos vemos a las seis." },
      { it: "Ottima idea!", es: "¡Buena idea!" },
      { it: "Tutti insieme.", es: "Todos juntos." },
    ],
    grammar: {
      focus: "Mi piace / mi piacciono",
      inductive: [
        { it: "Mi piace la musica.", es: "Me gusta la música." },
        { it: "Mi piacciono i film.", es: "Me gustan las películas." },
        { it: "Ti piace leggere?", es: "¿Te gusta leer?" },
      ],
      rule: [
        "El verbo piacere funciona al revés que «gustar»: el sujeto es la cosa que gusta. Singular → piace (mi piace il calcio); plural → piacciono (mi piacciono i gatti).",
        "Pronombres de interés: mi, ti, gli/le, ci, vi, gli. «A Luca piace…» / «Anche a me piace…». Con infinitivos siempre singular: mi piace viaggiare.",
      ],
      topicId: "g-a1-domande",
      gaps: [
        { q: "Mi ___ la pizza.", options: ["piace", "piacciono", "piaci"], answer: 0 },
        { q: "Mi ___ gli spaghetti.", options: ["piace", "piacciono", "piacevano"], answer: 1 },
        { q: "Anche ___ ___ ballare. (a mí también)", options: ["mi piace", "me piace", "io piace"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "s y z sonoras/sordas",
      tip: "La s puede ser sorda (sole, casa) o sonora como z española suave (rosa, uso). La diferencia a veces cambia la palabra: uso (sorda, «uso») vs uso (sonora, «yo uso») — el contexto lo aclara.",
      pairs: [
        { a: "sole", b: "rosa", note: "s sorda vs sonora" },
        { a: "casa", b: "caso", note: "misma s sorda" },
        { a: "musica", b: "museo", note: "ambas sordas" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Mi piace il cinema. Mi piacciono i film italiani. Anche a me piace leggere»." },
        { kind: "semi", task: "Di 5 cosas que te gustan (singulares) y 5 que te gustan (plurales) con mi piace / mi piacciono." },
        { kind: "comunicativo", task: "Conversación de planes: propone un plan de finde, rechaza una parte con cortesía y llega a un acuerdo." },
        { kind: "autentico", task: "Escribe a un amigo italiano (real o al Tutor IA) y organiza un plan real en italiano." },
      ],
    },
    reading: {
      lines: [
        { it: "Il sabato degli italiani è sacro: sport, gite fuori porta, pranzi lunghi e passeggiata.", es: "El sábado de los italianos es sagrado: deporte, excursiones fuera de la ciudad, comidas largas y paseo." },
        { it: "La domenica si mangia insieme: la pasta della nonna e la partita in TV. Poi, un gelato.", es: "El domingo se come junto: la pasta de la nonna y el partido en TV. Luego, un helado." },
      ],
      question: "¿Cómo es un domingo típico italiano según el texto?",
    },
    writing: {
      task: "Escribe un mensaje (5 frases) proponiendo un finde a un amigo: qué te gusta hacer, dos planes posibles, hora y lugar de encuentro.",
      minWords: 40,
      tips: ["Mi piace / mi piacciono para tus gustos", "Ci vediamo + lugar y hora para cerrar el plan"],
      model: [
        "Ciao Marco! Che fai sabato?",
        "A me piace camminare: andiamo ai giardini?",
        "Mi piacciono anche i mercati: prima mercato, poi caffè! Ci vediamo alle dieci in piazza.",
      ],
    },
    culture: {
      title: "El sábado y el domingo italianos",
      text: "El finde italiano tiene sus ritos: el calcetto del sábado entre amigos, la comida familiar del domingo (pranzo della domenica), la partita en TV y la passeggiata del domingo por la tarde. El deporte más visto es el fútbol, y el café después de comer no se discute.",
    },
    finalTask: {
      title: "Il fine settimana ideale",
      brief: "Presenta tu finde ideal en 8 frases: qué te gusta hacer, con quién, un plan de sábado y uno de domingo, y una invitación a un amigo.",
      checklist: ["Usé mi piace / mi piacciono al menos 3 veces", "Propuse planes con andiamo / vuoi…?", "Di hora y lugar de encuentro"],
    },
    review: [
      { q: "«Mi piacciono i gatti» =", options: ["Me gusta el gato", "Me gustan los gatos", "Me gustan los perros"], answer: 1 },
      { q: "___ ___ la pizza margherita. (a ti)", options: ["Ti piace", "Tu piace", "Ti piacciono"], answer: 0 },
      { q: "«Ci vediamo alle sei» significa…", options: ["Nos llamamos a las seis", "Nos vemos a las seis", "Salimos a las seis"], answer: 1 },
      { q: "Mi piace ___ (leggere).", options: ["leggere", "leggo", "leggi"], answer: 0 },
    ],
    cando: [
      "Puedo expresar gustos con piacere",
      "Puedo proponer planes y quedar con alguien",
      "Puedo hablar de mis aficiones en presente",
    ],
  },

  {
    id: "cu-a1-10", n: 10, level: "A1",
    title: "Mi casa", titleIt: "La mia casa",
    img: "/images/vocab/casa.webp",
    goal: "Describir tu casa: habitaciones, muebles y ubicación",
    goals: ["Describir habitaciones y muebles", "Usar preposiciones de lugar", "Alquilar: entender un anuncio simple"],
    scenario: "Buscas piso compartido en Bolonia. Visitas uno con la casera: salotto con balcony, cucina piccola, camera da letto con vista. Tendrás que describirlo todo y decir qué te gusta.",
    dialogue: [
      { speaker: "Proprietaria", it: "Benvenuto! Questo è il salotto, c'è anche un balcone piccolo.", es: "¡Bienvenido! Este es el salón, hay también un balcón pequeño." },
      { speaker: "Tu", it: "Che bello! E la cucina dov'è?", es: "¡Qué bonito! ¿Y la cocina dónde está?" },
      { speaker: "Proprietaria", it: "La cucina è là, dietro il salotto. È piccola ma completa.", es: "La cocina está allí, detrás del salón. Es pequeña pero completa." },
      { speaker: "Tu", it: "Perfetto. La camera da letto è grande?", es: "Perfecto. ¿El dormitorio es grande?" },
      { speaker: "Proprietaria", it: "Abbastanza: c'è un letto, un armadio e una scrivania sotto la finestra.", es: "Bastante: hay una cama, un armario y un escritorio bajo la ventana." },
      { speaker: "Tu", it: "Il bagno ha la doccia o la vasca?", es: "¿El baño tiene ducha o bañera?" },
      { speaker: "Proprietaria", it: "La doccia. L'affitto è di cinquecento euro al mese, spese escluse.", es: "Ducha. El alquiler es de quinientos euros al mes, gastos aparte." },
      { speaker: "Tu", it: "Capisco. Posso pensarci un giorno?", es: "Entiendo. ¿Puedo pensarlo un día?" },
    ],
    comprehension: [
      { q: "¿Qué hay en el salotto?", options: ["Solo un sofá", "También un balcón", "Una cocina"], answer: 1 },
      { q: "¿Dónde está el escritorio?", options: ["Junto a la puerta", "Bajo la ventana", "En el balcón"], answer: 1 },
      { q: "¿Qué incluye el alquiler de 500 €?", options: ["Gastos incluidos", "Gastos aparte", "Solo agua"], answer: 1, explain: "«Spese escluse» = gastos excluidos." },
    ],
    chunks: [
      { it: "La cucina è dietro il salotto.", es: "La cocina está detrás del salón." },
      { it: "c'è anche un balcone", es: "hay también un balcón" },
      { it: "sotto la finestra", es: "bajo la ventana" },
      { it: "L'affitto è di …euro al mese.", es: "El alquiler es de … euros al mes." },
      { it: "spese escluse / incluse", es: "gastos aparte / incluidos" },
      { it: "Posso pensarci un giorno?", es: "¿Puedo pensarlo un día?" },
    ],
    grammar: {
      focus: "Artículos determinados y preposiciones de lugar",
      inductive: [
        { it: "Il letto è nella camera da letto.", es: "La cama está en el dormitorio." },
        { it: "La lavatrice è in bagno.", es: "La lavadora está en el baño." },
        { it: "Il divano è davanti alla TV.", es: "El sofá está delante de la tele." },
      ],
      rule: [
        "Artículos: il/lo/la/i/gli/le. Ojo con lo ante s impura (lo scaffale) y gli ante z, gn, ps (gli scaffali).",
        "Lugares: davanti a (delante), dietro (detrás), sopra (encima), sotto (debajo), vicino a (cerca), lontano da (lejos). Con habitaciones: in cucina, in bagno, in salotto — sin artículo.",
      ],
      topicId: "g-a1-articoli",
      gaps: [
        { q: "___ scrivania è sotto la finestra.", options: ["Il", "Lo", "La"], answer: 2 },
        { q: "Il bagno è ___ camera. (al lado)", options: ["vicino alla", "vicino alla la", "vicino a la"], answer: 0 },
        { q: "La pentola è ___ cucina.", options: ["nella", "in", "a"], answer: 1, explain: "Con habitaciones de la casa se usa in sin artículo." },
      ],
    },
    pronunciation: {
      focus: "grupos consonánticos",
      tip: "Los grupos come scr-, sp-, st- existen solo al principio de palabra o tras consonante: scrivania, scaffale, stanza. Nunca «escribania»: la s inicial del grupo no lleva vocal de apoyo.",
      pairs: [
        { a: "scrivania", b: "scaffale", note: "scr y sc impura" },
        { a: "stanza", b: "spesa", note: "st y sp" },
        { a: "spazio", b: "specchio", note: "sp inicial" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Il divano è davanti alla TV. Il letto è sotto la finestra»." },
        { kind: "semi", task: "Describe tu habitación actual: 5 muebles/objetos con su ubicación exacta." },
        { kind: "comunicativo", task: "Roleplay de visita: describe tu piso ideal a la hora de visitarlo y pregunta por alquiler, gastos y habitaciones." },
        { kind: "autentico", task: "Mira un anuncio real de piso en italiano (Subito.it, Idealista.it) y explícalo con tus palabras." },
      ],
    },
    reading: {
      lines: [
        { it: "Gli appartamenti italiani sono spesso piccoli ma ben organizzati: salotto, cucina, camera da letto e bagno.", es: "Los pisos italianos suelen ser pequeños pero bien organizados: salón, cocina, dormitorio y baño." },
        { it: "Nei contratti, attenzione alla formula «spese escluse»: luce, gas e condominio si pagano a parte.", es: "En los contratos, cuidado con la fórmula «gastos excluidos»: luz, gas y comunidad se pagan aparte." },
      ],
      question: "¿Qué significa «spese escluse» y qué se paga aparte?",
    },
    writing: {
      task: "Escribe un anuncio breve (5-6 frases) para alquilar tu habitación imaginaria: tamaño, muebles, ubicación, precio y qué se incluye.",
      minWords: 40,
      tips: ["Empieza con Affittasi camera…", "Usa preposiciones de lugar para ubicar todo"],
      model: [
        "Affittasi camera singola in appartamento condiviso.",
        "La camera è luminosa: c'è un letto, un armadio e una scrivania sopra il balcone.",
        "L'affitto è di quattrocento euro, spese incluse. Vicino all'università!",
      ],
    },
    culture: {
      title: "Vivir en Italia: el contrato",
      text: "El alquiler italiano tiene dos regímenes: transitorio (menos de 18 meses, típico de estudiantes) y 4+4 (largo plazo). El «caparra» (fianza) suele ser 2-3 meses. La «spese» (condominio, calefacción) puede duplicar el precio real: pregunta siempre si son incluse o escluse.",
    },
    finalTask: {
      title: "Casa dolce casa",
      brief: "Presenta tu casa actual o ideal en 8 frases: estancias, muebles con ubicación, qué te gusta más y por qué. Hazlo como si le enseñaras el piso a un amigo por videollamada.",
      checklist: ["Describí al menos 4 estancias o muebles", "Usé preposiciones de lugar", "Di una opinión con mi piace"],
    },
    review: [
      { q: "«Spese escluse» =", options: ["Gastos incluidos", "Gastos aparte", "Sin fianza"], answer: 1 },
      { q: "Il bagno è ___ cucina. (entre)", options: ["tra la", "tra", "intra"], answer: 0 },
      { q: "La camera ___ letto è grande.", options: ["di", "da", "della"], answer: 1 },
      { q: "___ finestra è aperta.", options: ["Il", "Lo", "La"], answer: 2 },
    ],
    cando: [
      "Puedo describir una casa con estancias y muebles",
      "Puedo entender un anuncio de alquiler simple",
      "Uso preposiciones de lugar con precisión",
    ],
  },

  {
    id: "cu-a1-11", n: 11, level: "A1",
    title: "En el supermercado", titleIt: "Al supermercato",
    img: "/images/situazioni/sit-supermercato.jpg",
    goal: "Hacer la compra: productos, cantidades y pagar",
    goals: ["Nombrar productos básicos", "Pedir cantidades con un chilo di / mezzo / un quarto", "Entender el ticket y las ofertas"],
    scenario: "Cocinas para tus amigos esta noche: pasta al pomodoro. En el supermercado buscas los ingredientes, comparas precios y en la caja… la famosa domanda: «Ha la busta?».",
    dialogue: [
      { speaker: "Tu", it: "Scusi, dove c'è il pangrattato?", es: "Disculpe, ¿dónde está el pan rallado?" },
      { speaker: "Commesso", it: "Corridoio tre, accanto alla farina.", es: "Pasillo tres, junto a la harina." },
      { speaker: "Tu", it: "Grazie! E il parmigiano?", es: "¡Gracias! ¿Y el parmesano?" },
      { speaker: "Commesso", it: "Reparto formaggi, in fondo a destra. Quanto ne vuole?", es: "Sección quesos, al fondo a la derecha. ¿Cuánto quiere?" },
      { speaker: "Tu", it: "Mezzo chilo, grazie. E vorrei anche due chili di pomodori.", es: "Medio kilo, gracias. Y querría también dos kilos de tomates." },
      { speaker: "Cassiera", it: "Buonasera! Ha la busta o la compra?", es: "¡Buenas noches! ¿Tiene bolsa o la compra?" },
      { speaker: "Tu", it: "La compro, grazie. Quanto fa in tutto?", es: "La compro, gracias. ¿Cuánto es en total?" },
      { speaker: "Cassiera", it: "Undici euro e cinquanta. Carta o contanti?", es: "Once euros con cincuenta. ¿Tarjeta o efectivo?" },
    ],
    comprehension: [
      { q: "¿Dónde está el parmesano?", options: ["Pasillo tres", "Sección quesos, al fondo a la derecha", "Junto a la harina"], answer: 1 },
      { q: "¿Cuánto parmesano pide?", options: ["Un kilo", "Medio kilo", "Un cuarto"], answer: 1 },
      { q: "¿Cuánto paga en total?", options: ["11,15 €", "11,50 €", "15,50 €"], answer: 1 },
    ],
    chunks: [
      { it: "Dove c'è il…?", es: "¿Dónde está el/la…?" },
      { it: "Mezzo chilo di parmigiano.", es: "Medio kilo de parmesano." },
      { it: "Un quarto di melone.", es: "Un cuarto de melón." },
      { it: "Quanto ne vuole?", es: "¿Cuánto quiere (de eso)?" },
      { it: "Quanto fa in tutto?", es: "¿Cuánto es en total?" },
      { it: "Carta o contanti?", es: "¿Tarjeta o efectivo?" },
      { it: "Ha la busta?", es: "¿Tiene bolsa?" },
    ],
    grammar: {
      focus: "El pronombre ne y las cantidades",
      inductive: [
        { it: "Quanto pane vuole? — Ne voglio mezzo chilo.", es: "¿Cuánto pan quiere? — Quiero medio kilo (de eso)." },
        { it: "I pomodori? Ne prendo due chili.", es: "¿Los tomates? Tomo dos kilos (de ellos)." },
        { it: "Quanti ne restano?", es: "¿Cuántos quedan?" },
      ],
      rule: [
        "ne sustituye a la cosa contada: «de eso/de ellos». Con cantidades es inevitable: Ne vorrei un chilo.",
        "Pesos y medidas: un chilo (kg), mezzo chilo, un etto (100 g), due etti, un litro, una bottiglia, una scatola, un pacchetto. Los precios: euro invariable + centesimi.",
      ],
      topicId: "g-b2-ci-ne",
      gaps: [
        { q: "Quanta farina vuoi? — ___ voglio un chilo.", options: ["Ne", "Ci", "La"], answer: 0 },
        { q: "Vorrei mezzo ___ di prosciutto.", options: ["etto", "chilo", "litro"], answer: 1, explain: "medio chilo = 500 g" },
        { q: "Quanto ___ in tutto?", options: ["fa", "è", "costano"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "El acento de los alimentos",
      tip: "Muchos alimentos tienen acento en la antepenúltima (àntipasto no: antipàsto… no existe regla). Escucha y repite los básicos: pomodoro, parmigiano, prosciutto, mozzarella.",
      pairs: [
        { a: "pomodoro", b: "formaggio", note: "penúltima sílaba" },
        { a: "prosciutto", b: "salame", note: "sci = sh" },
        { a: "mozzarella", b: "parmigiano", note: "zz ts vs gn ñ" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Mezzo chilo di pane, due etti di prosciutto e una bottiglia d'acqua»." },
        { kind: "semi", task: "Haz la lista de la compra para una cena con 4 amigos: 8 productos con cantidades." },
        { kind: "comunicativo", task: "Roleplay: pregunta dónde están 3 productos, pide cantidades en el mostrador y paga en caja." },
        { kind: "autentico", task: "Misión real: la próxima compra, piensa cada producto en italiano con su cantidad." },
      ],
    },
    reading: {
      lines: [
        { it: "Il supermercato italiano ha i suoi riti: pesare la frutta, stampare lo scontrino, portare la borsa da casa.", es: "El supermercado italiano tiene sus ritos: pesar la fruta, imprimir el ticket, llevar la bolsa de casa." },
        { it: "Al banco gastronomia si può chiedere «un etto di prosciutto» o «mezzo chilo di mozzarella»: pesano loro.", es: "En el mostrador de gastronomía se puede pedir «un etto de jamón» o «medio kilo de mozzarella»: pesan ellos." },
      ],
      question: "¿Qué se pide en el banco gastronomia y quién pesa?",
    },
    writing: {
      task: "Escribe la lista de la compra completa para tu cena italiana ideal (8-10 productos con cantidades) y el total estimado.",
      minWords: 40,
      tips: ["Usa un chilo di / mezzo / due etti di", "ne: Ne compro anche un pacchetto"],
      model: [
        "Per la cena di stasera compro:",
        "un chilo di pomodori, mezzo chilo di spaghetti e un etto di parmigiano.",
        "Poi mezzo chilo di mozzarella e una bottiglia di vino rosso. Ne compro anche il pane!",
      ],
    },
    culture: {
      title: "El supermercado vs el mercado",
      text: "Los italianos compran en ambos: supermercado para lo diario y mercato rional para fruta, verdura y queso. La fruta se toca con guantes de plástico (guanti), el pan se pide «non affettato» si no lo quieres cortado, y el parmesano se compra al pezzo o grattugiato.",
    },
    finalTask: {
      title: "La spesa perfetta",
      brief: "Simula la compra completa: lista con cantidades, 2 preguntas de ubicación, pedido en el mostrador, bolsa y pago. Preséntalo en voz alta como un mini-vlog de supermercado.",
      checklist: ["Usé cantidades correctas (chilo/etto/litro)", "Usé ne al menos una vez", "Pagué preguntando quanto fa in tutto"],
    },
    review: [
      { q: "«Un etto» =", options: ["1 kg", "100 g", "50 g"], answer: 1 },
      { q: "___ vorrei due chili di arance.", options: ["Ne", "Ci", "Li"], answer: 0 },
      { q: "«Carta o contanti?» pregunta si pagas con…", options: ["tarjeta o efectivo", "devolución o cambio", "bolsa o caja"], answer: 0 },
      { q: "Mezzo ___ di vino rosso.", options: ["litro", "etto", "chilo"], answer: 0 },
    ],
    cando: [
      "Puedo hacer la compra con cantidades exactas",
      "Puedo preguntar dónde están los productos",
      "Entiendo el ticket y las formas de pago",
    ],
  },

  {
    id: "cu-a1-12", n: 12, level: "A1",
    title: "Misión: ¡Roma!", titleIt: "Missione: Roma!",
    img: "/images/letture/it-roma-08.jpg",
    goal: "Repaso final A1: sobrevivir un día entero en Roma solo en italiano",
    goals: ["Repasar todas las funciones A1", "Encadenar situaciones reales", "Autoevaluarte con el can-do A1"],
    scenario: "Última parada del nivel: un día entero en Roma, de la mañana a la noche. Desayuno en el bar, dirección al Coliseo, compra de billetes, pranzo en trattoria, compras y cena. Todo en italiano, tú solo. Buon viaggio!",
    dialogue: [
      { speaker: "Barista", it: "Buongiorno! Cosa le do?", es: "¡Buenos días! ¿Qué le sirvo?" },
      { speaker: "Tu", it: "Buongiorno! Un cappuccino e un cornetto, quanto fa?", es: "¡Buenos días! Un capuchino y un cruasán, ¿cuánto es?" },
      { speaker: "Passante", it: "Per il Colosseo? Vada dritto, poi giri a sinistra: cinque minuti.", es: "¿Para el Coliseo? Vaya recto, luego gire a la izquierda: cinco minutos." },
      { speaker: "Biglietteria", it: "Biglietto per il Colosseo: sedici euro. Vuole anche il Foro?", es: "Billete para el Coliseo: dieciséis euros. ¿Quiere también el Foro?" },
      { speaker: "Tu", it: "Sì, tutti e due, grazie. A che ora chiude?", es: "Sí, ambos, gracias. ¿A qué hora cierra?" },
      { speaker: "Cameriere", it: "Il menù del giorno: pasta cacio e pepe o carbonara. Da bere?", es: "El menú del día: pasta cacio e pepe o carbonara. ¿De beber?" },
      { speaker: "Tu", it: "Carbonara per me, e mezzo litro di acqua frizzante.", es: "Carbonara para mí, y medio litro de agua con gas." },
      { speaker: "Tu", it: "(a sera, sul diario) Che giornata fantastica! Domani: Firenze!", es: "(por la noche, en el diario) ¡Qué día tan fantástico! ¡Mañana: Florencia!" },
    ],
    comprehension: [
      { q: "¿Cuánto cuesta el billete del Coliseo?", options: ["6 €", "16 €", "60 €"], answer: 1 },
      { q: "¿Qué pide de comer?", options: ["Cacio e pepe", "Carbonara", "Pizza"], answer: 1 },
      { q: "¿Qué hace falta entender para llegar al Coliseo?", options: ["Sempre dritto y giri a sinistra", "Prenda il treno", "Scusi, quanto costa"], answer: 0 },
    ],
    chunks: [
      { it: "Cosa le do?", es: "¿Qué le sirvo?" },
      { it: "Quanto fa?", es: "¿Cuánto es?" },
      { it: "Vada dritto, poi giri a sinistra.", es: "Vaya recto, luego gire a la izquierda." },
      { it: "Tutti e due.", es: "Ambos." },
      { it: "A che ora chiude?", es: "¿A qué hora cierra?" },
      { it: "Che giornata fantastica!", es: "¡Qué día tan fantástico!" },
      { it: "Domani: Firenze!", es: "¡Mañana: Florencia!" },
    ],
    grammar: {
      focus: "Repaso A1: essere, avere, presente, piacere",
      inductive: [
        { it: "Sono turista, ma parlo un po' d'italiano.", es: "Soy turista, pero hablo un poco de italiano." },
        { it: "Ho un biglietto per il Colosseo.", es: "Tengo un billete para el Coliseo." },
        { it: "Mi piace Roma: è fantastica!", es: "Me gusta Roma: ¡es fantástica!" },
      ],
      rule: [
        "Repaso exprés: essere (identidad) y avere (posesión/edad); presente regular de las tres conjugaciones; reflexivos (mi sveglio); mi piace/piacciono; c'è/ci sono; partitivo (del pane); preposiciones articuladas (al, nel, dalla); questo/quello; posesivos (mio, mia).",
        "Si algo no sale, vuelve a la unidad correspondiente: cada punto del repaso enlaza con su tema en la Gramática de la app.",
      ],
      topicId: "g-a1-presente",
      gaps: [
        { q: "Io ___ un biglietto per Roma.", options: ["sono", "ho", "c'è"], answer: 1 },
        { q: "Mi ___ le fontane di Roma.", options: ["piace", "piacciono", "piaci"], answer: 1 },
        { q: "Il treno ___ alle nove.", options: ["parte", "parto", "parti"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "Repaso fonético A1",
      tip: "Repaso rápido: vocales puras siempre; gn = ñ (bagno); gli = lli (famiglia); c/g según vocal; dobles largas de verdad (nonno); z = ts/dz (pizza/zero).",
      pairs: [
        { a: "Colosseo", b: "carbonara", note: "vocales claras" },
        { a: "spaghetti", b: "gnocchi", note: "gh dura, gn ñ" },
        { a: "pizza", b: "zero", note: "z ts vs dz" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Recita tu kit de supervivencia: saludar, pedir, preguntar precio, dirección y hora de cierre." },
        { kind: "semi", task: "Narra tu día romano en 8 frases: mañana, mediodía, tarde y noche." },
        { kind: "comunicativo", task: "Simulación integral: bar + calle + taquilla + trattoria, sin salir del italiano." },
        { kind: "autentico", task: "Misión final real: un día completo en Italia (o un día «solo italiano» en casa) usando solo lo aprendido." },
      ],
    },
    reading: {
      sourceId: "rd-1",
      question: "¿Qué lugares de Roma menciona la postal y qué le parece cada uno?",
    },
    writing: {
      task: "Escribe tu diario de viaje romano (8-10 frases): qué hiciste, qué comiste, a quién conociste y cómo te sentiste.",
      minWords: 60,
      tips: ["Encadena el día con prima, poi, dopo, alla sera", "Cierra con una valoración: che giornata…!"],
      model: [
        "Oggi è stata una giornata fantastica!",
        "La mattina ho preso un cappuccino al bar vicino all'albergo.",
        "Poi ho visitato il Colosseo: è impressionante!",
        "Alla sera ho mangiato una carbonara buonissima. Mi piace Roma!",
      ],
    },
    culture: {
      title: "Roma en un día",
      text: "Roma no se hace en un día, pero se prueba: espresso en pie, Colosseo y Foro por la mañana, un gelato en el Pincio al atardecer y trattoria en Trastevere de noche. La ciudad es un museo a cielo abierto donde cada calle guarda dos mil años de historia.",
    },
    finalTask: {
      title: "Un giorno a Roma — simulazione finale",
      brief: "La simulación final del nivel: encadena las 4 escenas (bar, calle, taquilla, trattoria) en un solo monólogo de 2 minutos, con saludos, peticiones, preguntas y despedidas. Es tu examen de supervivencia A1.",
      checklist: ["Completé las 4 escenas sin cambiar a español", "Usé al menos 10 chunks del nivel", "Mi pronunciación es comprensible"],
    },
    review: [
      { q: "«A che ora chiude?» =", options: ["¿A qué hora abre?", "¿A qué hora cierra?", "¿Cuánto cuesta?"], answer: 1 },
      { q: "Vorrei ___ carbonara.", options: ["una", "un", "uno"], answer: 0 },
      { q: "Il Colosseo ___ alle sedici e trenta.", options: ["chiudo", "chiudi", "chiude"], answer: 2 },
      { q: "Mi ___ la carbonara.", options: ["piace", "piacciono", "piaci"], answer: 0 },
    ],
    cando: [
      "Puedo sobrevivir un día entero en italiano",
      "Puedo encadenar presentaciones, pedidos y direcciones",
      "Estoy listo/a para el nivel A2",
    ],
  },
];
