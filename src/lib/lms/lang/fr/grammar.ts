import type { GrammarTopic } from "../../types";

/* ── Grammaire · temas progresivos FR (Francia) A1→C2 con soluciones
   paso a paso. `titleIt` = título técnico en francés ; tipografía
   francesa: espacio antes de ? ! : ; y comillas « » con espacios. ── */

export const FR_GRAMMAR: GrammarTopic[] = [
  /* ══════════ A1 ══════════ */
  {
    id: "fr-g-a1-articles", level: "A1", title: "Artículos definidos e indefinidos", titleIt: "Les articles définis et indéfinis",
    summary: "le, la, l', les, un, une, des : el artículo depende del género y de la primera letra.",
    explanation: [
      "El artículo definido masculino es le (le livre) y el femenino la (la maison). Delante de vocal o h muda ambos se convierten en l' : l'ami, l'école, l'hôtel. El plural es siempre les (les livres, les maisons).",
      "El indefinido es un (m.), une (f.) y des en plural (des fleurs = unas flores). Recuerda que el género hay que aprenderlo con cada palabra : une voiture, un problème (que es masculino pese a la -a final).",
    ],
    examples: [
      { it: "le livre → les livres", es: "el libro → los libros" },
      { it: "la maison → les maisons", es: "la casa → las casas" },
      { it: "L'école est fermée.", es: "La escuela está cerrada." },
      { it: "un ami, une amie", es: "un amigo, una amiga" },
      { it: "Il y a des fleurs sur la table.", es: "Hay flores sobre la mesa." },
    ],
    problems: [
      {
        title: "Elegir el artículo",
        question: "Completa : « ___ école est fermée aujourd'hui. »",
        steps: [
          "École es femenino en francés (la escuela).",
          "Empieza por vocal : la + vocal no pueden quedar juntas.",
          "Regla : le/la se convierten en l' delante de vocal o h muda.",
          "Femenino singular → l'école.",
        ],
        conclusion: "L'école est fermée aujourd'hui.",
      },
      {
        title: "¿Un o une ?",
        question: "Completa : « C'est ___ voiture rouge. »",
        steps: [
          "Voiture (coche) es un sustantivo femenino.",
          "El indefinido femenino singular es une.",
          "Se pronuncia « ün », igual que un, pero se escribe con -e.",
        ],
        conclusion: "C'est une voiture rouge.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Le / la / les et un / une / des",
        headers: ["", "Masculin", "Féminin", "Pluriel"],
        rows: [
          ["défini", "le / l'", "la / l'", "les"],
          ["indéfini", "un", "une", "des"],
        ],
        note: "La elisión l' es obligatoria ante vocal o h muda : l'ami, l'université, l'hôtel.",
      },
    ],
  },
  {
    id: "fr-g-a1-present", level: "A1", title: "El presente de los verbos en -er", titleIt: "Le présent des verbes en -er",
    summary: "El grupo más numeroso de verbos sigue un patrón fijo ; la -ent final es muda.",
    explanation: [
      "La gran mayoría de los verbos franceses terminan en -er. Para el presente se quita -er y se añaden las terminaciones -e, -es, -e, -ons, -ez, -ent : je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent.",
      "Ojo con la pronunciación : je parle, tu parles, il parle e ils parlent suenan exactamente igual, porque la -ent de la 3.ª persona del plural es muda. Solo nous y vous se distinguen claramente en la oralidad (-ons, -ez).",
      "Los verbos en -ir se dividen en dos grupos : dormir (je dors, nous dormons) y el tipo finir, que inserta -iss- en singular y 3.ª plural : je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent.",
    ],
    examples: [
      { it: "Je parle français.", es: "Hablo francés." },
      { it: "Tu habites où ?", es: "¿Dónde vives?" },
      { it: "Nous travaillons beaucoup.", es: "Trabajamos mucho." },
      { it: "Vous écoutez la radio.", es: "Escucháis la radio." },
      { it: "Ils finissent à six heures.", es: "Terminan a las seis." },
    ],
    problems: [
      {
        title: "Conjugar en presente",
        question: "Completa : « Vous ___ beaucoup. » (travailler)",
        steps: [
          "Infinitivo : travailler, verbo regular en -er.",
          "Sujeto vous → desinencia -ez.",
          "Raíz travaill- + -ez.",
        ],
        conclusion: "Vous travaillez beaucoup.",
      },
      {
        title: "La terminación muda",
        question: "¿Cómo se pronuncia la -ent de « ils parlent » ?",
        steps: [
          "Las terminaciones de la 3.ª persona del plural en -ent son mudas.",
          "Ils parlent se pronuncia igual que il parle.",
          "La diferencia de número solo la marca el pronombre.",
        ],
        conclusion: "Ils parlent suena « il parl » : la -ent es muda.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "parler au présent",
        headers: ["Personne", "Terminaison", "Exemple"],
        rows: [
          ["je", "-e", "je parle"],
          ["tu", "-es", "tu parles"],
          ["il / elle", "-e", "il parle"],
          ["nous", "-ons", "nous parlons"],
          ["vous", "-ez", "vous parlez"],
          ["ils / elles", "-ent", "ils parlent"],
        ],
        note: "Mismo patrón para habiter, écouter, donner, penser, chercher…",
      },
    ],
  },
  {
    id: "fr-g-a1-etre-avoir", level: "A1", title: "Être y avoir : presente y expresiones", titleIt: "Être et avoir : présent et expressions",
    summary: "Los dos auxiliares esenciales y las expresiones donde el francés usa avoir.",
    explanation: [
      "être (ser/estar) : je suis, tu es, il est, nous sommes, vous êtes, ils sont. avoir (tener/haber) : j'ai, tu as, il a, nous avons, vous avez, ils ont. Como en español con « tengo », el francés usa avoir donde podrías esperar être : j'ai faim (tengo hambre), j'ai froid (tengo frío), j'ai peur (tengo miedo), j'ai vingt ans (tengo veinte años).",
      "También con avoir : avoir raison / avoir tort (tener o no razón), avoir soif (tener sed), avoir besoin (necesitar). En negación, un, une, des se convierten en de : je n'ai pas de frère (no tengo hermanos).",
    ],
    examples: [
      { it: "Je suis espagnol.", es: "Soy español." },
      { it: "Vous êtes prêt ?", es: "¿Estás listo?" },
      { it: "Elle a vingt ans.", es: "Ella tiene veinte años." },
      { it: "Nous avons faim.", es: "Tenemos hambre." },
      { it: "Il a froid.", es: "Él tiene frío." },
      { it: "Ils ont raison.", es: "Ellos tienen razón." },
    ],
    problems: [
      {
        title: "Tener años",
        question: "Completa : « J'___ vingt-cinq ans. »",
        steps: [
          "En español decimos « tengo 25 años » con tener.",
          "El francés también usa avoir, nunca être.",
          "Je + avoir → j'ai (elisión ante vocal).",
        ],
        conclusion: "J'ai vingt-cinq ans.",
      },
      {
        title: "Tener frío",
        question: "Completa : « Nous ___ froid. »",
        steps: [
          "La expresión es avoir froid (tener frío).",
          "Sujeto nous → forma avons.",
          "Nunca « nous sommes froid » : sería « estamos fríos ».",
        ],
        conclusion: "Nous avons froid.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "être et avoir au présent",
        headers: ["Personne", "être", "avoir"],
        rows: [
          ["je", "je suis", "j'ai"],
          ["tu", "tu es", "tu as"],
          ["il / elle", "il est", "il a"],
          ["nous", "nous sommes", "nous avons"],
          ["vous", "vous êtes", "vous avez"],
          ["ils / elles", "ils sont", "ils ont"],
        ],
        note: "La h de j'ai, tu as… es muda ; en ils ont se hace la liaison : « il-zon ».",
      },
    ],
  },
  {
    id: "fr-g-a1-genre-nombre", level: "A1", title: "Género y número del sustantivo", titleIt: "Le genre et le nombre des noms",
    summary: "El femenino suele terminar en -e y el plural en -s (muda), con trampas célebres.",
    explanation: [
      "Muchos femeninos se forman añadiendo -e al masculino : un ami → une amie. La -e final suele indicar femenino, pero hay excepciones famosas que hay que memorizar : un problème, un musée, une idée.",
      "El plural regular añade -s, que es muda : des fleurs, des maisons. Dos excepciones importantes : los sustantivos en -al hacen el plural en -aux (cheval → chevaux, journal → journaux) y algunos plurales son irreconocibles, como l'œil → les yeux o monsieur → messieurs.",
    ],
    examples: [
      { it: "un ami → une amie", es: "un amigo → una amiga" },
      { it: "le cheval → les chevaux", es: "el caballo → los caballos" },
      { it: "le journal → les journaux", es: "el periódico → los periódicos" },
      { it: "l'œil → les yeux", es: "el ojo → los ojos" },
      { it: "la fleur → les fleurs", es: "la flor → las flores" },
    ],
    problems: [
      {
        title: "El plural de cheval",
        question: "¿Cuál es el plural de « le cheval » ?",
        steps: [
          "Cheval termina en -al.",
          "Regla : los sustantivos en -al hacen el plural en -aux.",
          "cheval → chevaux, pronunciado « shevó ».",
        ],
        conclusion: "les chevaux (los caballos)",
      },
      {
        title: "Un plural irreconocible",
        question: "¿Cuál es el plural de « l'œil » (el ojo) ?",
        steps: [
          "Œil tiene un plural totalmente irregular.",
          "No se añade -s : cambia la palabra entera.",
          "l'œil → les yeux, pronunciado « lé-yö ».",
        ],
        conclusion: "les yeux (los ojos)",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "fr-g-a1-c-est-il-est", level: "A1", title: "C'est o il est", titleIt: "C'est ou il est ?",
    summary: "C'est presenta y señala ; il est describe y clasifica.",
    explanation: [
      "c'est (= esto es / él es) se usa delante de sustantivos con artículo, posesivo o demostrativo : c'est un ami, c'est ma sœur, c'est ce livre. También con días, precios y enfático : c'est lundi, c'est cher.",
      "il est (+ elle est) acompaña a adjetivos y a profesiones o nacionalidades sin artículo : il est professeur, elle est italienne. Y ojo : nunca « il est » + artículo. Con plural formal se usa ce sont : ce sont mes amis (aunque el francés hablado dice a menudo c'est mes amis).",
    ],
    examples: [
      { it: "C'est un ami de mon frère.", es: "Es un amigo de mi hermano." },
      { it: "Il est professeur.", es: "Es profesor." },
      { it: "C'est difficile.", es: "Es difícil." },
      { it: "Il est tard.", es: "Es tarde." },
      { it: "C'est moi !", es: "¡Soy yo!" },
      { it: "Ce sont des touristes.", es: "Son turistas." },
    ],
    problems: [
      {
        title: "C'est o il est",
        question: "Completa : « ___ un ami de mon frère. »",
        steps: [
          "Delante va un sustantivo con artículo (un ami).",
          "Ante sustantivo se usa c'est, no il est.",
          "il est se reserva para adjetivos y profesiones sin artículo.",
        ],
        conclusion: "C'est un ami de mon frère.",
      },
      {
        title: "Con profesión",
        question: "Completa : « Mon voisin ___ professeur. »",
        steps: [
          "Professeur va sin artículo : es una profesión.",
          "Con profesión sin artículo se usa il est.",
          "« C'est un professeur » sería « es un profesor » señalándolo.",
        ],
        conclusion: "Mon voisin est professeur.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "fr-g-a1-interrogation-negation", level: "A1", title: "Preguntas y negación", titleIt: "L'interrogation et la négation",
    summary: "Tres registros para preguntar y la negación ne… pas alrededor del verbo.",
    explanation: [
      "Para preguntar hay tres vías : la entonación (Tu viens avec nous ?), la partícula est-ce que (Est-ce que tu parles français ?) y la inversión formal (Parlez-vous français ?). Con verbos que terminan en vocal, la inversión añade -t- : Aime-t-elle Paris ? Va-t-on au marché ?",
      "La negación rodea al verbo con ne… pas : je ne parle pas espagnol. Delante de vocal, ne se convierte en n' : elle n'est pas là, je n'ai pas le temps. El « no » de respuesta es non.",
    ],
    examples: [
      { it: "Tu viens avec nous ?", es: "¿Vienes con nosotros?" },
      { it: "Est-ce que tu parles français ?", es: "¿Hablas francés?" },
      { it: "Où habites-tu ?", es: "¿Dónde vives?" },
      { it: "Je ne comprends pas.", es: "No entiendo." },
      { it: "Elle n'est pas là.", es: "Ella no está." },
      { it: "Je n'ai pas le temps.", es: "No tengo tiempo." },
    ],
    problems: [
      {
        title: "La negación",
        question: "Pon en negativo : « Je parle espagnol. »",
        steps: [
          "La negación rodea al verbo : ne + verbo + pas.",
          "Je empieza por consonante : ne se mantiene.",
          "Hablo español → je ne parle pas espagnol.",
        ],
        conclusion: "Je ne parle pas espagnol.",
      },
      {
        title: "La elisión",
        question: "Pon en negativo : « Elle est là. »",
        steps: [
          "Ne va delante del verbo être.",
          "Delante de vocal, ne se convierte en n'.",
          "Est empieza por vocal : elle n'est pas là.",
        ],
        conclusion: "Elle n'est pas là.",
      },
    ],
    exerciseIds: [],
  },

  /* ══════════ A2 ══════════ */
  {
    id: "fr-g-a2-partitifs", level: "A2", title: "El partitivo : du, de la, de l', des", titleIt: "Les articles partitifs",
    summary: "Para cantidades indeterminadas de comida, bebida o ideas ; de en la negación.",
    explanation: [
      "El francés no puede dejar el sustantivo « desnudo » : para cantidades indeterminadas usa el partitivo du (de + le), de la, de l' (ante vocal) y des : je bois du café, elle mange de la soupe, il achète de l'eau, nous avons des amis.",
      "En negación, todos los partitivos (y un, une, des) se convierten en de/d' : je ne bois pas de thé, elle n'a pas de chance. Otra regla de oro : cuando el plural lleva adjetivo delante, des se convierte en de : de belles choses, de vieux amis.",
    ],
    examples: [
      { it: "Le matin, je bois du café.", es: "Por la mañana bebo café." },
      { it: "Elle mange de la soupe.", es: "Ella come sopa." },
      { it: "Il achète de l'eau.", es: "Él compra agua." },
      { it: "Tu veux du vin ?", es: "¿Quieres vino?" },
      { it: "Je ne bois pas de vin.", es: "No bebo vino." },
      { it: "Nous avons de bons amis.", es: "Tenemos buenos amigos." },
    ],
    problems: [
      {
        title: "El partitivo",
        question: "Completa : « Le matin, je bois ___ café. »",
        steps: [
          "Café es masculino singular.",
          "Para una cantidad indeterminada se usa el partitivo.",
          "de + le → du.",
        ],
        conclusion: "Le matin, je bois du café.",
      },
      {
        title: "El partitivo en negativo",
        question: "Pon en negativo : « Je bois du vin. »",
        steps: [
          "La negación convierte du, de la, de l' y des en de.",
          "Je ne bois pas de vin.",
          "Ante vocal, de se convierte en d' : je n'ai pas d'argent.",
        ],
        conclusion: "Je ne bois pas de vin.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Les articles partitifs",
        headers: ["", "Masculin", "Féminin", "Pluriel", "Négation"],
        rows: [
          ["partitif", "du", "de la", "des", "de / d'"],
          ["exemple", "du pain", "de la bière", "des amis", "pas de pain"],
        ],
        note: "de l' ante vocal o h muda : de l'eau, de l'argent.",
      },
    ],
  },
  {
    id: "fr-g-a2-passe-compose", level: "A2", title: "El passé composé", titleIt: "Le passé composé avec avoir et être",
    summary: "avoir o être + participio ; con être el participio concuerda con el sujeto.",
    explanation: [
      "La mayoría de los verbos forma el passé composé con avoir + participio : j'ai parlé, tu as fini, il a vendu. Los participios de los verbos en -er acaban en -é : parler → parlé.",
      "Un grupo de verbos de movimiento y cambio de estado usa être : aller, venir, arriver, partir, sortir, monter, descendre, naître, mourir, rester, tomber, retourner, devenir… y todos los pronominales. Con être, el participio concuerda en género y número con el sujeto : elle est allée, ils sont partis, nous sommes rentrés.",
      "Participios irregulares que hay que saber de memoria : avoir → eu, être → été, faire → fait, mettre → mis, prendre → pris, voir → vu, lire → lu, boire → bu, ouvrir → ouvert, pouvoir → pu, vouloir → voulu, devoir → dû.",
    ],
    examples: [
      { it: "J'ai visité le Louvre.", es: "He visitado el Louvre." },
      { it: "Elle a fini son roman.", es: "Ha terminado su novela." },
      { it: "Nous sommes allés au cinéma.", es: "Hemos ido al cine." },
      { it: "Ils sont arrivés en retard.", es: "Han llegado tarde." },
      { it: "Marie est tombée dans l'escalier.", es: "Marie se ha caído en la escalera." },
      { it: "Il a fait beau hier.", es: "Ayer hizo buen tiempo." },
    ],
    problems: [
      {
        title: "Elegir el auxiliar",
        question: "Completa : « Hier, nous ___ allés au cinéma. »",
        steps: [
          "Aller es un verbo de movimiento : usa être.",
          "Nous + être (passé composé) → sommes.",
          "Con être, el participio concuerda : nous masculino → allés.",
        ],
        conclusion: "Hier, nous sommes allés au cinéma.",
      },
      {
        title: "El acuerdo con être",
        question: "Completa : « Marie ___ arrivée à huit heures. »",
        steps: [
          "Arriver usa être como auxiliar.",
          "Marie es femenino singular.",
          "El participio concuerda con el sujeto : arrivé → arrivée.",
        ],
        conclusion: "Marie est arrivée à huit heures.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Participes passés irréguliers",
        headers: ["Infinitif", "Participe passé", "Exemple"],
        rows: [
          ["avoir", "eu", "j'ai eu peur"],
          ["être", "été", "elle a été malade"],
          ["faire", "fait", "on a fait un gâteau"],
          ["prendre", "pris", "j'ai pris le bus"],
          ["voir / lire", "vu / lu", "j'ai vu, j'ai lu"],
          ["boire / pouvoir", "bu / pu", "tu as bu, il a pu"],
        ],
        note: "Con être el participio lleva -e / -s de concordancia : elle est venue, ils sont venus.",
      },
    ],
  },
  {
    id: "fr-g-a2-imparfait", level: "A2", title: "Imparfait frente a passé composé", titleIt: "L'imparfait et le passé composé",
    summary: "El imparfait pinta el decorado ; el passé composé cuenta los hechos.",
    explanation: [
      "El imparfait se forma sobre el radical del presente de nous + -ais, -ais, -ait, -ions, -iez, -aient : nous parlons → je parlais, tu parlais, il parlait, nous parlions, vous parliez, ils parlaient. Única excepción del idioma : être, que toma el radical ét- (j'étais).",
      "El imparfait describe situaciones, costumbres y acciones en desarrollo ( Quand j'étais petit, j'habitais à Nice ), mientras el passé composé narra los hechos puntuales ( un jour, nous avons déménagé ). La combinación clásica : « Il pleuvait quand je suis sorti. » — llovía (fondo) cuando salí (acontecimiento).",
    ],
    examples: [
      { it: "Quand j'étais petit, j'habitais à Nice.", es: "Cuando era pequeño, vivía en Niza." },
      { it: "Il pleuvait ce jour-là.", es: "Ese día llovía." },
      { it: "Je faisais mes devoirs quand elle est arrivée.", es: "Hacía mis deberes cuando ella llegó." },
      { it: "Nous regardions la télé tous les soirs.", es: "Veíamos la tele todas las noches." },
      { it: "Elle avait dix ans en 2010.", es: "Tenía diez años en 2010." },
    ],
    problems: [
      {
        title: "Formar el imparfait",
        question: "Completa : « Quand j'étais petit, je ___ au foot. » (jouer)",
        steps: [
          "Radical del presente de nous : nous jouons → jou-.",
          "Terminaciones : -ais, -ais, -ait, -ions, -iez, -aient.",
          "Je → jouais.",
        ],
        conclusion: "Quand j'étais petit, je jouais au foot.",
      },
      {
        title: "Imparfait o passé composé",
        question: "Completa : « Il ___ quand je suis sorti. » (pleuvoir)",
        steps: [
          "La lluvia es el fondo, la circunstancia.",
          "El hecho nuevo es mi salida : je suis sorti (passé composé).",
          "El fondo va en imparfait : il pleuvait.",
        ],
        conclusion: "Il pleuvait quand je suis sorti.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "fr-g-a2-futur", level: "A2", title: "Futur proche y futur simple", titleIt: "Le futur proche et le futur simple",
    summary: "aller + infinitivo para lo inmediato ; raíz + -ai, -as, -a… para el futuro simple.",
    explanation: [
      "El futur proche expresa una acción inminente o decidida : je vais partir (voy a salir), il va pleuvoir (va a llover). Se forma con aller en presente + infinitivo, igual que en español.",
      "El futur simple se forma con el infinitivo + las terminaciones -ai, -as, -a, -ons, -ez, -ont : je parlerai, tu finiras. Los verbos irregulares cambian la raíz pero conservan las terminaciones : être → je serai, avoir → j'aurai, aller → j'irai, faire → je ferai, venir → je viendrai, pouvoir → je pourrai, voir → je verrai. Nunca añadas -s a la 1.ª persona : je viendrai, no *viendrais.",
    ],
    examples: [
      { it: "Je vais acheter du pain.", es: "Voy a comprar pan." },
      { it: "Il va pleuvoir.", es: "Va a llover." },
      { it: "Je partirai en juin.", es: "Me iré en junio." },
      { it: "Tu seras là ?", es: "¿Estarás allí?" },
      { it: "Nous aurons le temps.", es: "Tendremos tiempo." },
      { it: "Ils feront un gâteau.", es: "Harán un pastel." },
    ],
    problems: [
      {
        title: "El futuro simple",
        question: "Completa : « Demain, je ___ à la plage. » (être)",
        steps: [
          "Raíz irregular de être : ser-.",
          "Terminaciones del futuro : -ai, -as, -a, -ons, -ez, -ont.",
          "Je → serai.",
        ],
        conclusion: "Demain, je serai à la plage.",
      },
      {
        title: "Futur proche",
        question: "Traduce : « Voy a comprar pan. »",
        steps: [
          "Acción inminente : aller en presente + infinitivo.",
          "Je vais + acheter.",
          "El infinitivo nunca cambia.",
        ],
        conclusion: "Je vais acheter du pain.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Futur simple : terminaisons et racines irrégulières",
        headers: ["Personne", "Terminaison", "Verbe", "Futur"],
        rows: [
          ["je", "-ai", "être", "je serai"],
          ["tu", "-as", "avoir", "tu auras"],
          ["il / elle", "-a", "aller", "il ira"],
          ["nous", "-ons", "faire", "nous ferons"],
          ["vous", "-ez", "venir", "vous viendrez"],
          ["ils / elles", "-ont", "pouvoir", "ils pourront"],
        ],
        note: "Mismas terminaciones para todos los verbos ; solo cambia la raíz en los irregulares.",
      },
    ],
  },
  {
    id: "fr-g-a2-pronominaux", level: "A2", title: "Verbos pronominales", titleIt: "Les verbes pronominaux",
    summary: "Los verbos de la vida diaria que se conjugan con me, te, se, nous, vous.",
    explanation: [
      "Los verbos pronominales llevan un pronombre reflexivo : je me lève (me levanto), tu t'appelles (te llamas), il se couche (se acuesta), nous nous dépêchons (nos damos prisa), vous vous reposez.",
      "En passé composé usan être y el participio concuerda con el sujeto : elle s'est levée, ils se sont rencontrés. En el imperativo afirmativo, el pronombre va detrás con guion y cambia de forma : Lève-toi ! Levons-nous ! Levez-vous ! Y en negativo, delante : Ne te lève pas tard !",
    ],
    examples: [
      { it: "Je m'appelle Léa.", es: "Me llamo Léa." },
      { it: "Elle se lève à sept heures.", es: "Ella se levanta a las siete." },
      { it: "Nous nous dépêchons.", es: "Nos damos prisa." },
      { it: "Tu te reposes le dimanche ?", es: "¿Descansas los domingos?" },
      { it: "Je me suis réveillé très tôt.", es: "Me desperté muy temprano." },
      { it: "Ils se sont rencontrés à Lille.", es: "Se conocieron en Lille." },
    ],
    problems: [
      {
        title: "Me llamo",
        question: "Traduce : « Me llamo Paul. »",
        steps: [
          "Llamarse = s'appeler, verbo pronominal.",
          "El pronombre reflexivo para je es me.",
          "Je me + apóstrofo ante vocal : je m'appelle.",
        ],
        conclusion: "Je m'appelle Paul.",
      },
      {
        title: "El acuerdo",
        question: "Completa : « Elle ___ levée tard. » (se lever, passé composé)",
        steps: [
          "Los pronominales forman el passé composé con être.",
          "Elle s'est + participio.",
          "El participio concuerda : elle → levée.",
        ],
        conclusion: "Elle s'est levée tard.",
      },
    ],
    exerciseIds: [],
  },

  /* ══════════ B1 ══════════ */
  {
    id: "fr-g-b1-cod-coi", level: "B1", title: "Pronombres complemento COD y COI", titleIt: "Les pronoms compléments d'objet (COD et COI)",
    summary: "le, la, les, lui, leur : el pronombre se coloca delante del verbo conjugado.",
    explanation: [
      "El COD (complemento directo) usa me, te, le, la, nous, vous, les : je vois Marie → je la vois ; j'aime ce livre → je l'aime. Responde a la pregunta « qui ? quoi ? » sin preposición.",
      "El COI (complemento con à) usa me, te, lui, nous, vous, leur para personas : je parle à Paul → je lui parle ; j'écris à mes parents → je leur écris. Lui sirve para « a él » y « a ella » : no distingue el género. Para cosas se usan y y en (ver tema siguiente).",
      "El pronombre va siempre delante del verbo conjugado — a diferencia del español con complementos de persona : « Lo veo » = je le vois ; « Le escribo » = je lui écris. Con infinitivo va delante del infinitivo : je vais le voir.",
    ],
    examples: [
      { it: "Je te vois demain.", es: "Te veo mañana." },
      { it: "Elle m'aide beaucoup.", es: "Ella me ayuda mucho." },
      { it: "Nous le connaissons bien.", es: "Lo conocemos bien." },
      { it: "Je lui parle souvent.", es: "Le hablo a menudo." },
      { it: "Tu leur écris ce soir ?", es: "¿Les escribes esta noche?" },
      { it: "Je ne la comprends pas.", es: "No la entiendo." },
    ],
    problems: [
      {
        title: "El pronombre COD",
        question: "Sustituye el complemento : « Je vois Marie. » → « Je ___ vois. »",
        steps: [
          "Marie es COD femenino singular.",
          "El pronombre COD correspondiente es la.",
          "Va delante del verbo : je la vois.",
        ],
        conclusion: "Je la vois.",
      },
      {
        title: "El pronombre COI",
        question: "Sustituye : « J'écris à mes parents. » → « Je ___ écris. »",
        steps: [
          "El complemento lleva à y es de persona : es COI.",
          "Mes parents es plural : leur.",
          "Lui para el singular, leur para el plural.",
        ],
        conclusion: "Je leur écris.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "fr-g-b1-y-en", level: "B1", title: "Los pronombres y y en", titleIt: "Les pronoms adverbiaux y et en",
    summary: "Dos pronombres pequeños que sustituyen lugares (y) y cantidades o de (en).",
    explanation: [
      "y sustituye complementos introducidos por à, sobre todo lugares y cosas : je vais à Paris → j'y vais ; tu penses à ton avenir → tu y penses. Con lugares de persona se usa chez : je vais chez Marie → j'y vais también, porque « chez Marie » funciona como lugar.",
      "en sustituye complementos con de y las cantidades o partitivos : je reviens de Lyon → j'en reviens ; tu bois du café → tu en bois ; j'ai deux frères → j'en ai deux. Es el famoso « de eso » : tu veux du gâteau ? — j'en veux bien !",
    ],
    examples: [
      { it: "Tu vas au marché ? — J'y vais tout de suite.", es: "¿Vas al mercado? — Voy ahora mismo." },
      { it: "Tu penses à ton examen ?", es: "¿Piensas en tu examen?" },
      { it: "Tu veux du café ? — J'en bois déjà.", es: "¿Quieres café? — Ya estoy bebiendo (de eso)." },
      { it: "Nous en avons besoin.", es: "Lo necesitamos (de eso)." },
      { it: "Elle en a acheté trois.", es: "Ella compró tres (de eso)." },
      { it: "J'en ai marre !", es: "¡Estoy harto (de eso)!" },
    ],
    problems: [
      {
        title: "El pronombre y",
        question: "Sustituye : « Je vais à Paris. » → « J'___ vais demain. »",
        steps: [
          "À Paris es un complemento de lugar.",
          "El lugar con à se sustituye por y.",
          "El pronombre va tras el sujeto : j'y vais.",
        ],
        conclusion: "J'y vais demain.",
      },
      {
        title: "El pronombre en",
        question: "Traduce : « Quiero dos. » (croissants) → « J'___ veux deux. »",
        steps: [
          "Con cantidades, el sustantivo se sustituye por en.",
          "El número se queda : en dos → j'en veux deux.",
          "Nunca « je veux deux » a secas en francés hablado.",
        ],
        conclusion: "J'en veux deux.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "fr-g-b1-relatifs", level: "B1", title: "Los relativos qui, que, où, dont", titleIt: "Les pronoms relatifs (qui, que, où, dont)",
    summary: "Enlazan frases sin repetir el nombre : sujeto, complemento, lugar y de.",
    explanation: [
      "qui es sujeto del verbo que sigue : la femme qui habite ici (la mujer que vive aquí). que es complemento directo : le livre que je lis (el libro que leo). où indica lugar o tiempo : la ville où je suis né, l'année où tout a changé.",
      "dont sustituye un complemento con de : le film dont je parle (la película de la que hablo), l'ami dont je t'ai parlé, la fille dont le père est médecin. Si la preposición es otra (à, avec, pour…), se usan los relativos compuestos : la femme à laquelle je pense (C1).",
    ],
    examples: [
      { it: "C'est le film qui a gagné le prix.", es: "Es la película que ganó el premio." },
      { it: "Le livre que tu m'as offert est génial.", es: "El libro que me regalaste es genial." },
      { it: "Voici le café où nous nous sommes rencontrés.", es: "Este es el café donde nos conocimos." },
      { it: "C'est l'amie dont je t'ai parlé.", es: "Es la amiga de la que te hablé." },
      { it: "L'année où tout a changé.", es: "El año en que todo cambió." },
    ],
    problems: [
      {
        title: "Qui o que",
        question: "Completa : « C'est le film ___ a gagné le prix. »",
        steps: [
          "El relativo hace de sujeto : el sujeto de a gagné es el propio film.",
          "Sujeto → qui.",
          "Complemento → que : le film que j'ai vu.",
        ],
        conclusion: "C'est le film qui a gagné le prix.",
      },
      {
        title: "Dont",
        question: "Completa : « C'est le livre ___ je t'ai parlé. » (parler de)",
        steps: [
          "Hablar DE algo : parler de quelque chose.",
          "El relativo que sustituye a de es dont.",
          "le livre dont je t'ai parlé = el libro del que te hablé.",
        ],
        conclusion: "C'est le livre dont je t'ai parlé.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "fr-g-b1-conditionnel", level: "B1", title: "El condicional y la cortesía", titleIt: "Le conditionnel présent et la politesse",
    summary: "El tiempo de je voudrais, vous pourriez… : pedir, aconsejar, imaginar.",
    explanation: [
      "El condicional se forma con la raíz del futuro + las terminaciones del imparfait : je parlerais, tu voudrais. Los irregulares comparten la raíz del futuro : je serais, j'aurais, je ferais, je pourrais, je viendrais.",
      "Es el tiempo de la cortesía por excelencia : je voudrais un café (querría un café), vous pourriez répéter ? (¿podría repetir?), j'aimerais visiter la Provence. También expresa consejo ( à ta place, je m'inscrirais ) y la hipótesis con si : si j'avais le temps, je voyagerais (B2).",
    ],
    examples: [
      { it: "Je voudrais un café, s'il vous plaît.", es: "Querría un café, por favor." },
      { it: "Vous pourriez répéter, s'il vous plaît ?", es: "¿Podría repetir, por favor?" },
      { it: "J'aimerais visiter la Provence.", es: "Me gustaría visitar la Provenza." },
      { it: "À ta place, je m'excuserais.", es: "En tu lugar, me disculparía." },
      { it: "On devrait partir tôt.", es: "Deberíamos salir temprano." },
    ],
    problems: [
      {
        title: "Pedir con cortesía",
        question: "Traduce : « Querría una mesa para dos. »",
        steps: [
          "Vouloir en condicional : je voudrais.",
          "Raíz voudr- + terminación -ais.",
          "Es la fórmula ideal en restaurantes y tiendas.",
        ],
        conclusion: "Je voudrais une table pour deux, s'il vous plaît.",
      },
      {
        title: "Pedir un favor",
        question: "Traduce : « ¿Podría repetir, por favor ? » (usted)",
        steps: [
          "Pouvoir en condicional : vous pourriez.",
          "Pregunta formal con vous.",
          "Pourriez-vous… ? es la fórmula de cortesía con inversión.",
        ],
        conclusion: "Pourriez-vous répéter, s'il vous plaît ?",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "fr-g-b1-imperatif", level: "B1", title: "El imperativo", titleIt: "L'impératif",
    summary: "El presente sin sujeto : habla, hablemos, hablad ; con trampas de -s y de pronombres.",
    explanation: [
      "El imperativo usa las formas del presente sin sujeto : parle ! parlons ! parlez ! Los verbos en -er pierden la -s de la forma de tu : tu manges → Mange ! (pero los demás verbos la conservan : Finis ! Vends !).",
      "Los irregulares hay que memorizarlos : être → sois, soyons, soyez ; avoir → aie ; savoir → sache. Con los pronombres en/y la -s de tu reaparece por la liaison : Vas-y ! Manges-en ! En imperativo pronominal, el pronombre va detrás con guion ( Lève-toi ! ) y en negativa delante ( Ne t'inquiète pas ! ).",
    ],
    examples: [
      { it: "Viens ici !", es: "¡Ven aquí!" },
      { it: "Écoutons-la.", es: "Escuchémosla." },
      { it: "Parlez plus fort, s'il vous plaît.", es: "Hable más alto, por favor." },
      { it: "Sois prudent !", es: "¡Sé prudente!" },
      { it: "Ne t'inquiète pas !", es: "¡No te preocupes!" },
      { it: "Vas-y !", es: "¡Anda / adelante!" },
    ],
    problems: [
      {
        title: "El imperativo de aller",
        question: "Traduce : « ¡Ve ! » (a un amigo)",
        steps: [
          "Imperativo de tu de aller : va.",
          "Ojo : se escribe va sin -s.",
          "Pero delante de y la -s vuelve : vas-y.",
        ],
        conclusion: "Va !",
      },
      {
        title: "Imperativo negativo",
        question: "Traduce : « No te preocupes. » (tú)",
        steps: [
          "Preocuparse = s'inquiéter, verbo pronominal.",
          "Negativo : ne + pronombre + verbo + pas.",
          "El pronombre va delante : ne t'inquiète pas.",
        ],
        conclusion: "Ne t'inquiète pas !",
      },
    ],
    exerciseIds: [],
  },

  /* ══════════ B2 ══════════ */
  {
    id: "fr-g-b2-subjonctif", level: "B2", title: "El subjuntivo presente", titleIt: "Le subjonctif présent",
    summary: "El modo de la necesidad, el deseo, la duda y la emoción : il faut que tu viennes.",
    explanation: [
      "Se forma sobre el radical de la 3.ª persona del plural del presente + -e, -es, -e, -ions, -iez, -ent : ils parlent → que je parle ; ils finissent → que je finisse. Las formas de nous y vous salen del radical de nous : que nous parlions, que vous finissiez.",
      "Lo exigen expresiones de necesidad y voluntad ( il faut que, je veux que ), emoción y juicio ( je suis content que, c'est dommage que ), duda ( je doute que ), y las conjunciones bien que, pour que, avant que, jusqu'à ce que. Ojo : espérer que va con indicativo, y con craindre o éviter que aparece un ne sin valor negativo ( ne explétif ) : je crains qu'il ne pleuve.",
      "Los subjuntivos irregulares que hay que dominar : que je sois (être), que j'aie (avoir), que j'aille (aller), que je fasse (faire), que je puisse (pouvoir), que je sache (savoir), que je veuille (vouloir), que je voie (voir).",
    ],
    examples: [
      { it: "Il faut que tu viennes.", es: "Es necesario que vengas." },
      { it: "Je veux que tu sois heureux.", es: "Quiero que seas feliz." },
      { it: "Bien qu'il soit tard, on continue.", es: "Aunque sea tarde, seguimos." },
      { it: "Je doute qu'il ait le temps.", es: "Dudo que tenga tiempo." },
      { it: "Avant qu'elle parte, dis-lui au revoir.", es: "Antes de que se vaya, dile adiós." },
      { it: "C'est le meilleur film que je connaisse.", es: "Es la mejor película que conozco." },
    ],
    problems: [
      {
        title: "Il faut que",
        question: "Completa : « Il faut que tu ___ . » (venir)",
        steps: [
          "Il faut que + subjuntivo, siempre.",
          "Radical de la 3.ª plural del presente : vienn-.",
          "que tu viennes.",
        ],
        conclusion: "Il faut que tu viennes.",
      },
      {
        title: "Un subjuntivo irregular",
        question: "Completa : « Je doute qu'il ___ raison. » (avoir)",
        steps: [
          "Avoir tiene subjuntivo irregular : que j'aie, qu'il ait.",
          "Je doute que + subjuntivo (dudar).",
          "qu'il ait raison = que tenga razón.",
        ],
        conclusion: "Je doute qu'il ait raison.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Subjonctif présent irrégulier",
        headers: ["Verbe", "Subjonctif", "Exemple"],
        rows: [
          ["être", "que je sois", "il faut que je sois là"],
          ["avoir", "que j'aie", "je doute qu'il ait faim"],
          ["aller", "que j'aille", "je veux que tu y ailles"],
          ["faire", "que je fasse", "bien qu'il fasse froid"],
          ["pouvoir", "que je puisse", "pour que je puisse venir"],
          ["savoir", "que je sache", "avant qu'il ne le sache"],
        ],
        note: "El ne de « avant qu'il ne le sache » es explétivo : no niega nada.",
      },
    ],
  },
  {
    id: "fr-g-b2-conditionnelles", level: "B2", title: "Las frases condicionales con si", titleIt: "Les phrases conditionnelles avec si",
    summary: "si + presente, imperfecto o pluscuamperfecto : nunca condicional tras si.",
    explanation: [
      "Condición real (futuro posible) : si + présent → futur simple. Si tu viens, je serai content. La consecuencia también puede ser un imperativo : si tu sors, prends ton parapluie !",
      "Hipótesis irreal del presente : si + imparfait → conditionnel présent : si j'avais le temps, je voyagerais (si tuviera tiempo, viajaría). Hipótesis irreal del pasado : si + plus-que-parfait → conditionnel passé : si j'avais su, je serais venu (si lo hubiera sabido, habría venido).",
      "Regla de oro : la oración con si nunca lleva condicional — « si j'aurais su » es el error infantil más famoso del cine francés (La guerre des boutons). Se dice si j'avais su.",
    ],
    examples: [
      { it: "Si tu sors, prends ton parapluie !", es: "¡Si sales, coge el paraguas!" },
      { it: "Si tu viens, je serai content.", es: "Si vienes, estaré contento." },
      { it: "Si nous avions une voiture, nous irions à la mer.", es: "Si tuviéramos coche, iríamos al mar." },
      { it: "Si j'étais toi, je m'inscrirais.", es: "Si fuera tú, me inscribiría." },
      { it: "S'il avait étudié, il aurait réussi.", es: "Si hubiera estudiado, habría aprobado." },
    ],
    problems: [
      {
        title: "La condición real",
        question: "Traduce : « Si tengo tiempo, iré. »",
        steps: [
          "Condición real : si + presente.",
          "Consecuencia en futuro simple : j'irai.",
          "Nunca condicional después de si.",
        ],
        conclusion: "Si j'ai le temps, j'irai.",
      },
      {
        title: "La irreal del pasado",
        question: "Traduce : « Si lo hubiera sabido, habría venido. »",
        steps: [
          "Irreal del pasado : si + pluscuamperfecto (j'avais su).",
          "Consecuencia : condicional pasado (je serais venu).",
          "El mismo esquema que el español « hubiera + habría ».",
        ],
        conclusion: "Si j'avais su, je serais venu.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Les trois systèmes conditionnels",
        headers: ["Type", "Protase (si…)", "Apodose", "Exemple"],
        rows: [
          ["réel", "présent", "futur simple", "si tu viens, j'irai"],
          ["irréel du présent", "imparfait", "conditionnel présent", "si j'avais le temps, je viendrais"],
          ["irréel du passé", "plus-que-parfait", "conditionnel passé", "si j'avais su, je serais venu"],
        ],
        note: "El verbo tras si jamás va en condicional.",
      },
    ],
  },
  {
    id: "fr-g-b2-accord-participe", level: "B2", title: "El acuerdo del participio pasado", titleIt: "L'accord du participe passé",
    summary: "être concuerda siempre ; avoir solo si el COD va delante ; pronominales, con truco.",
    explanation: [
      "Con être, el participio concuerda con el sujeto : elle est arrivée, elles sont parties. Con avoir, el participio no cambia si el COD va después : j'ai acheté des fleurs. Pero si el COD precede al verbo, concuerda con él : les fleurs que j'ai achetées ; je les ai achetées (fleurs femenino plural → achetées).",
      "En los verbos pronominales, el participio concuerda con el pronombre reflexivo solo cuando este funciona como COD : elle s'est lavée (se = COD), pero elle s'est lavé les mains (el COD es les mains, que va detrás). Y si el reflexivo es COI, nada de acuerdo : ils se sont téléphoné (se = a ellos, COI), elles se sont parlé.",
    ],
    examples: [
      { it: "Elle est arrivée la première.", es: "Ella llegó la primera." },
      { it: "Les lettres que j'ai écrites sont longues.", es: "Las cartas que he escrito son largas." },
      { it: "Je les ai vues au marché.", es: "Las vi en el mercado." },
      { it: "Elle s'est coupée en cuisinant.", es: "Se cortó (a sí misma) cocinando." },
      { it: "Elle s'est coupé les cheveux.", es: "Se cortó el pelo." },
      { it: "Ils se sont téléphoné hier soir.", es: "Se telefonearon anoche." },
    ],
    problems: [
      {
        title: "El COD antepuesto",
        question: "Completa : « les fleurs que j'ai ___ » (acheter)",
        steps: [
          "Con avoir el participio normalmente no concuerda.",
          "Pero aquí el COD (que = les fleurs) va delante del verbo.",
          "Fleurs es femenino plural : achetées.",
        ],
        conclusion: "les fleurs que j'ai achetées",
      },
      {
        title: "Un pronominal tramposo",
        question: "Completa : « Elle s'est ___ les mains. » (laver)",
        steps: [
          "En los pronominales el acuerdo es con el COD.",
          "Aquí el COD es les mains, que va después del verbo.",
          "El pronombre se es COI : sin acuerdo, lavé.",
        ],
        conclusion: "Elle s'est lavé les mains.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "L'accord du participe passé : les trois cas",
        headers: ["Auxiliaire", "Règle", "Exemple"],
        rows: [
          ["être", "acuerdo con el sujeto", "elle est partie / ils sont partis"],
          ["avoir + COD delante", "acuerdo con el COD", "les fleurs que j'ai cueillies"],
          ["pronominal", "acuerdo solo si se = COD", "elle s'est lavée / elle s'est lavé les mains"],
        ],
        note: "Truco : pregunta « ¿quién/qué recibe la acción y dónde está ? » antes de concordar.",
      },
    ],
  },
  {
    id: "fr-g-b2-discours-indirect", level: "B2", title: "El estilo indirecto en pasado", titleIt: "Le discours indirect au passé",
    summary: "Citar en pasado obliga a retroceder los tiempos : presente → imparfait, futuro → conditionnel.",
    explanation: [
      "Cuando el verbo principal está en pasado ( il a dit que… ), los tiempos de la cita retroceden : présent → imparfait ( il a dit qu'il était fatigué ), passé composé → plus-que-parfait ( il a dit qu'il avait fini ), futur → conditionnel ( il a promis qu'il viendrait ).",
      "También cambian los marcadores temporales y espaciales : demain → le lendemain, hier → la veille, aujourd'hui → ce jour-là, ici → là. En las preguntas sí/no se usa si : elle m'a demandé si j'avais le temps ; y las interrogativas se adaptan : qu'est-ce que → ce que, quand → quand : il m'a demandé ce que je faisais.",
    ],
    examples: [
      { it: "Il a dit qu'il était fatigué.", es: "Dijo que estaba cansado." },
      { it: "Elle a annoncé qu'elle avait fini son livre.", es: "Anunció que había terminado su libro." },
      { it: "Il a promis qu'il viendrait le lendemain.", es: "Prometió que vendría al día siguiente." },
      { it: "Elle m'a demandé si je viendrais.", es: "Me preguntó si iría." },
      { it: "Il m'a demandé ce que je faisais.", es: "Me preguntó qué estaba haciendo." },
      { it: "Il voulait savoir où j'habitais.", es: "Quería saber dónde vivía." },
    ],
    problems: [
      {
        title: "Del presente al pasado",
        question: "Transforma : « Je suis fatigué », dit Paul. → Paul a dit que…",
        steps: [
          "Estilo indirecto en pasado : présent → imparfait.",
          "Je suis fatigué → il était fatigué.",
          "que introduce la subordinada.",
        ],
        conclusion: "Paul a dit qu'il était fatigué.",
      },
      {
        title: "El futuro",
        question: "Transforma : « Je viendrai demain », dit-elle. → Elle a dit que…",
        steps: [
          "Futuro → condicional : viendrai → viendrait.",
          "demain → le lendemain.",
          "Elle a dit qu'elle viendrait le lendemain.",
        ],
        conclusion: "Elle a dit qu'elle viendrait le lendemain.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "fr-g-b2-passif", level: "B2", title: "La voz pasiva y sus alternativas", titleIt: "La voix passive et ses tournures de remplacement",
    summary: "être + participio con par, aunque el francés hablado prefiere on y las formas pronominales.",
    explanation: [
      "La pasiva se forma con être conjugado + participio (que concuerda con el sujeto paciente) : la tour Eiffel a été construite en 1889 ; ce roman a été écrit par Camus. Solo verbos transitivos pueden pasivizarse, y el agente va con par (de en algunos casos sentidos y literarios : aimé de tous).",
      "El francés hablado evita la pasiva : usa on ( « on parle français ici », « on m'a volé mon vélo » ) o la construcción pronominal neutra con sentido pasivo ( ça se dit, ce plat se mange froid ). En la prensa escrita, en cambio, la pasiva es frecuente y elegante : le suspect a été interpellé hier soir.",
    ],
    examples: [
      { it: "La tour Eiffel a été construite en 1889.", es: "La torre Eiffel fue construida en 1889." },
      { it: "Ce roman a été écrit par Camus.", es: "Esta novela fue escrita por Camus." },
      { it: "On parle français ici.", es: "Aquí se habla francés." },
      { it: "La chambre sera nettoyée demain.", es: "La habitación será limpiada mañana." },
      { it: "Ce plat se mange froid.", es: "Este plato se come frío." },
      { it: "Il s'est fait voler son vélo.", es: "Le robaron la bici." },
    ],
    problems: [
      {
        title: "De activa a pasiva",
        question: "Transforma : « Camus a écrit ce roman. »",
        steps: [
          "El COD (ce roman) pasa a sujeto paciente.",
          "Auxiliar être en el mismo tiempo : a été.",
          "El participio concuerda : roman → écrit.",
        ],
        conclusion: "Ce roman a été écrit par Camus.",
      },
      {
        title: "La pasiva a la francesa",
        question: "Traduce : « Aquí se habla francés. »",
        steps: [
          "La pasiva con on es lo más natural en francés.",
          "on + verbo en 3.ª persona singular.",
          "Ici on parle français.",
        ],
        conclusion: "Ici, on parle français.",
      },
    ],
    exerciseIds: [],
  },

  /* ══════════ C1 ══════════ */
  {
    id: "fr-g-c1-subjonctif-passe", level: "C1", title: "El subjuntivo pasado", titleIt: "Le subjonctif passé",
    summary: "que j'aie fait, qu'il soit parti : la anterioridad dentro del modo subjuntivo.",
    explanation: [
      "El subjuntivo pasado se forma con avoir o être en subjuntivo + participio : que j'aie fait, que tu aies dit, qu'il soit parti, que nous soyons venus. Elige el auxiliar exactamente como en el passé composé.",
      "Expresa una acción anterior al verbo principal, siempre que este exija subjuntivo : je regrette qu'il soit parti sans dire au revoir (lamento que se haya ido), c'est dommage que tu aies perdu ton temps. Con los principales en pasado, el subjuntivo NO retrocede (a diferencia del italiano) : je voulais qu'il vienne — el llamado subjuntivo imperfecto solo pervive en la lengua literaria (C2).",
    ],
    examples: [
      { it: "Je suis ravi que tu sois venu.", es: "Estoy encantado de que hayas venido." },
      { it: "Elle regrette qu'il ait dit ça.", es: "Lamenta que haya dicho eso." },
      { it: "C'est dommage que nous ayons perdu.", es: "Es una lástima que hayamos perdido." },
      { it: "Je doute qu'il ait compris la règle.", es: "Dudo que haya entendido la regla." },
      { it: "Je ne crois pas qu'ils soient déjà arrivés.", es: "No creo que ya hayan llegado." },
    ],
    problems: [
      {
        title: "Anterioridad",
        question: "Completa : « Je regrette qu'il ___ ___ sans dire au revoir. » (partir)",
        steps: [
          "La acción de partir es anterior a regretter.",
          "Subjuntivo pasado : être en subjuntivo + participio.",
          "Partir usa être : qu'il soit parti.",
        ],
        conclusion: "Je regrette qu'il soit parti sans dire au revoir.",
      },
      {
        title: "Con avoir",
        question: "Completa : « C'est dommage que tu ___ ___ ton temps. » (perdre)",
        steps: [
          "Perdre forma el passé composé con avoir.",
          "Subjuntivo de avoir : que tu aies.",
          "que tu aies perdu.",
        ],
        conclusion: "C'est dommage que tu aies perdu ton temps.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "fr-g-c1-concordance", level: "C1", title: "La concordancia de los tiempos", titleIt: "La concordance des temps",
    summary: "Tras un pasado : imparfait para lo simultáneo, plus-que-parfait para lo anterior, conditionnel para lo posterior.",
    explanation: [
      "Cuando el verbo principal está en pasado, la subordinada se adapta : simultaneidad → imparfait ( il pensait que j'étais au courant ) ; anterioridad → plus-que-parfait ( elle savait que j'avais déjà mangé ) ; posterioridad → conditionnel présent ( il promettait qu'il reviendrait ).",
      "El « futuro en el pasado » también se expresa con aller en imparfait + infinitivo : j'allais partir quand il est arrivé (iba a salir cuando llegó). Y recuerda : con los verbos que rigen subjuntivo, el subjuntivo no retrocede ( je voulais qu'il vienne ), salvo en la concordancia clásica literaria, que usa el subjuntivo imperfecto ( je voulais qu'il vînt ).",
    ],
    examples: [
      { it: "Il pensait que j'étais au courant.", es: "Pensaba que yo estaba al corriente." },
      { it: "Elle savait que j'avais déjà mangé.", es: "Sabía que yo ya había comido." },
      { it: "Il promettait qu'il reviendrait.", es: "Prometía que volvería." },
      { it: "J'allais partir quand il est arrivé.", es: "Iba a salir cuando él llegó." },
      { it: "Je voulais qu'il vienne avec nous.", es: "Quería que viniera con nosotros." },
    ],
    problems: [
      {
        title: "Simultaneidad en el pasado",
        question: "Transforma : « Je suis occupé », pensait-elle. → Elle pensait que…",
        steps: [
          "Tras un verbo en pasado, el presente pasa a imparfait.",
          "suis occupé → était occupé.",
          "El sujeto je pasa a ser elle : elle était occupée (con acuerdo).",
        ],
        conclusion: "Elle pensait qu'elle était occupée.",
      },
      {
        title: "Posterioridad",
        question: "Transforma : « Je te rappellerai », a-t-il promis. → Il a promis que…",
        steps: [
          "El futuro se convierte en condicional : rappellerai → rappellerait.",
          "El pronombre te se mantiene en la subordinada : me.",
          "Il a promis qu'il me rappellerait.",
        ],
        conclusion: "Il a promis qu'il me rappellerait.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "fr-g-c1-passe-simple", level: "C1", title: "El passé simple y el passé antérieur", titleIt: "Le passé simple et le passé antérieur",
    summary: "El pasado de los libros : reconocer sus formas es la clave para leer literatura.",
    explanation: [
      "El passé simple es el tiempo narrativo de la escritura. Los verbos en -er toman -ai, -as, -a, -âmes, -âtes, -èrent ( je parlai, il parla ) ; muchos -ir y -re toman -is, -it, -îmes, -îtes, -irent ( il finit, il vendit ) y otros -us, -ut ( il courut, il voulut ).",
      "Formas que hay que reconocer : il fut (être), il eut (avoir), il fit (faire), il alla (aller), il vint (venir), il naquit (naître), il mourut (mourir). El passé antérieur ( il eut fini, il fut parti ) expresa anterioridad inmediata con quand, dès que, après que en la narración clásica : quand il eut signé, il partit.",
    ],
    examples: [
      { it: "Le roi construisit le château.", es: "El rey construyó el castillo." },
      { it: "Elle descendit l'escalier.", es: "Ella bajó la escalera." },
      { it: "Il fut maire de Paris.", es: "Fue alcalde de París." },
      { it: "Quand il eut signé, il sortit.", es: "Cuando hubo firmado, salió." },
      { it: "Ils vinrent en nombre.", es: "Vinieron en gran número." },
      { it: "Naquit alors une nouvelle ère.", es: "Nació entonces una nueva era." },
    ],
    problems: [
      {
        title: "Reconocer el passé simple",
        question: "¿Qué forma es « il fut » y de qué verbo viene ?",
        steps: [
          "Fut con acento circunflejo.",
          "Es el passé simple de être.",
          "Equivale a il a été / il era en la narración literaria.",
        ],
        conclusion: "il fut = passé simple de être (il a été).",
      },
      {
        title: "El passé antérieur",
        question: "Completa : « Quand il ___ ___ , il partit. » (finir)",
        steps: [
          "El passé antérieur se forma con eut / fut + participio.",
          "Marca anterioridad inmediata respecto a un passé simple.",
          "Finir usa avoir : il eut fini.",
        ],
        conclusion: "Quand il eut fini, il partit.",
      },
    ],
    exerciseIds: [],
    tables: [
      {
        title: "Passé simple : verbes irréguliers fréquents",
        headers: ["Verbe", "Passé simple (il)", "Passé antérieur (il)"],
        rows: [
          ["être", "il fut", "il fut parti"],
          ["avoir", "il eut", "il eut fini"],
          ["faire", "il fit", "il eut fait"],
          ["aller", "il alla", "il fut allé"],
          ["venir", "il vint", "il fut venu"],
          ["mourir", "il mourut", "il fut mort"],
        ],
        note: "El acento circunflejo de nous/vous (nous aimâmes, vous partîtes) delata al passé simple ; el il estándar no lo lleva : il aima, il partit."
      },
    ],
  },
  {
    id: "fr-g-c1-relatifs-composes", level: "C1", title: "Los relativos compuestos", titleIt: "Les relatifs composés (lequel, ce dont)",
    summary: "Tras preposición : lequel, auquel, duquel ; y las formas neutras ce qui, ce que, ce dont.",
    explanation: [
      "Después de una preposición, qui/que dejan paso a lequel, laquelle, lesquels, lesquelles, con contracciones : la femme à laquelle je pense, le projet auquel je travaille, les raisons pour lesquelles il a démissionné, le dossier sur lequel nous revenons.",
      "Las formas neutras se refieren a ideas o cosas no nombradas : ce qui (sujeto : ce qui m'étonne), ce que (complemento : ce que je veux), ce dont (con de : ce dont j'ai besoin, ce dont tu parles). La preposición con personas usa qui : la personne avec qui je voyage.",
    ],
    examples: [
      { it: "Voici la raison pour laquelle il est parti.", es: "He aquí la razón por la cual se fue." },
      { it: "Le projet auquel je participe est immense.", es: "El proyecto en el que participo es enorme." },
      { it: "Dis-moi ce que tu penses.", es: "Dime lo que piensas." },
      { it: "Je ne sais pas ce dont tu parles.", es: "No sé de qué hablas." },
      { it: "Il ne comprend pas ce qui se passe.", es: "No entiende lo que pasa." },
    ],
    problems: [
      {
        title: "Tras preposición",
        question: "Completa : « la raison ___ ___ il est parti » (pour)",
        steps: [
          "Tras preposición se usa lequel y familia, no qui/que.",
          "pour + laquelle → pour laquelle.",
          "« La razón por la cual se fue ».",
        ],
        conclusion: "la raison pour laquelle il est parti",
      },
      {
        title: "Ce dont",
        question: "Traduce : « No entiendo de qué hablas. »",
        steps: [
          "Hablar DE algo : parler de.",
          "« De qué » con valor neutro = ce dont.",
          "Je ne comprends pas ce dont tu parles.",
        ],
        conclusion: "Je ne comprends pas ce dont tu parles.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "fr-g-c1-registre", level: "C1", title: "El registro sostenido", titleIt: "Le registre soutenu",
    summary: "nous frente a on, inversión interrogativa y conectores de gala : néanmoins, en outre.",
    explanation: [
      "El francés cuidado prefiere nous a on ( nous avons décidé… ), la inversión interrogativa a est-ce que ( pourriez-vous m'indiquer… ? ) y el futuro simple al futur proche en la escritura. En la correspondencia formal se fijan fórmulas : nous vous prions d'agréer, je vous saurais gré de…",
      "Los conectores marcan el registro : mais/pourtant (corriente) frente a néanmoins, toutefois, en revanche (sostenido) ; et aussi frente a en outre, de surcroît ; donc frente a par conséquent, dès lors. La puntuación hace el resto : el punto y coma y los dos puntos con espacio anterior son señales de escritura cuidada.",
    ],
    examples: [
      { it: "Nous vous prions d'agréer nos salutations.", es: "Le rogamos que acepte nuestros saludos." },
      { it: "Pourriez-vous m'indiquer la sortie ?", es: "¿Podría indicarme la salida?" },
      { it: "Néanmoins, la situation demeure tendue.", es: "No obstante, la situación sigue tensa." },
      { it: "En outre, ce point mérite réflexion.", es: "Además, este punto merece reflexión." },
      { it: "Par conséquent, nous avons annulé la réunion.", es: "Por consiguiente, hemos anulado la reunión." },
    ],
    problems: [
      {
        title: "Elevar el registro",
        question: "Reescribe en registro sostenido : « On n'a pas compris la question. »",
        steps: [
          "En registro formal se prefiere nous a on.",
          "La negación se mantiene : n'avons pas.",
          "Nous n'avons pas compris la question.",
        ],
        conclusion: "Nous n'avons pas compris la question.",
      },
      {
        title: "Un conector formal",
        question: "Sustituye « mais » en : « Le projet est bon, ___ il est coûteux. »",
        steps: [
          "En un texto formal, « pero » se dice néanmoins o toutefois.",
          "Van precedidos de punto y coma o coma.",
          "Le projet est bon ; néanmoins, il est coûteux.",
        ],
        conclusion: "Le projet est bon ; néanmoins, il est coûteux.",
      },
    ],
    exerciseIds: [],
  },

  /* ══════════ C2 ══════════ */
  {
    id: "fr-g-c2-subjonctif-imparfait", level: "C2", title: "El subjuntivo imperfecto y pluscuamperfecto", titleIt: "Le subjonctif imparfait et plus-que-parfait",
    summary: "qu'il fût, qu'il eût fini : el subjuntivo literario y sus fósiles vivos.",
    explanation: [
      "El subjuntivo imperfecto se forma con el radical del passé simple + -sse, -sses, -ˆt, -ssions, -ssiez, -ssent : que je parlasse, qu'il parlât ; être → que je fusse, qu'il fût ; avoir → que j'eusse, qu'il eût. El subjuntivo pluscuamperfecto añade el participio : qu'il eût fini, qu'il fût parti.",
      "Hoy es puro estilo literario (o irónico) : « Bien qu'il fût tard, ils continuèrent. » Pero sobrevive vivo en fórmulas fijas : fût-il (aunque fuera), dût-il (aunque tuviera que), ne fût-ce que (aunque no fuera más que), encore eût-il fallu (todavía habría hecho falta). Reconocerlo es imprescindible para leer a Proust o a Camus sin diccionario de formas.",
    ],
    examples: [
      { it: "Bien qu'il fût tard, ils continuèrent.", es: "Aunque fuera tarde, continuaron." },
      { it: "Je doutais qu'il fût au courant.", es: "Dudaba de que estuviera al corriente." },
      { it: "Fût-il riche, il ne serait pas heureux.", es: "Aunque fuera rico, no sería feliz." },
      { it: "Ne fût-ce qu'une minute, reste encore.", es: "Aunque no fuera más que un minuto, quédate." },
      { it: "Il craignait qu'elle n'eût tout compris.", es: "Temía que ella lo hubiera entendido todo." },
    ],
    problems: [
      {
        title: "Reconocer el subjuntivo imperfecto",
        question: "¿Qué forma es « qu'il fût » y a qué corresponde hoy ?",
        steps: [
          "Fût es el subjuntivo imperfecto de être.",
          "Hoy diríamos qu'il soit (subjuntivo presente).",
          "Solo pervive en la lengua literaria y en fórmulas fijas.",
        ],
        conclusion: "qu'il fût = subjuntivo imperfecto de être (hoy : qu'il soit).",
      },
      {
        title: "Una expresión fija",
        question: "¿Qué significa « ne fût-ce que » ?",
        steps: [
          "Contiene el subjuntivo imperfecto de être : fût.",
          "Ne… que funciona aquí como restrictivo : « solo ».",
          "Ne fût-ce qu'une minute = aunque solo fuera un minuto.",
        ],
        conclusion: "ne fût-ce que = aunque no fuera más que…",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "fr-g-c2-conditionnel-nuances", level: "C2", title: "Matices del condicional", titleIt: "Les emplois nuancés du conditionnel",
    summary: "Rumor de prensa, atenuación e hipótesis sin si ; y la segunda forma del condicional pasado.",
    explanation: [
      "El condicional hace mucho más que las hipótesis : es el tiempo del rumor y de la información no confirmada ( le ministre serait malade, según fuentes ), de la atenuación cortés ( je dirais que c'est une erreur ), de la concesión hipotética ( à ta place, j'accepterais ) y de la predicción prudente ( un orage éclaterait en fin de journée ).",
      "El llamado imparfait hypocoristique narra en pasado como si fuera una hipótesis : un pas de plus, il tombait (un paso más y caía). Y el condicional pasado 2.ª forma coincide formalmente con el subjuntivo pluscuamperfecto : il eût aimé venir = il aurait aimé venir, con su sabor de novela clásica.",
    ],
    examples: [
      { it: "Le président serait en route pour Genève.", es: "El presidente estaría (según dicen) de camino a Ginebra." },
      { it: "On aurait vu des loups dans le secteur.", es: "Según se dice, se habrían visto lobos en la zona." },
      { it: "Il eût fallu davantage de temps.", es: "Habría hecho falta más tiempo." },
      { it: "À sa place, j'aurais refusé.", es: "En su lugar, habría rechazado." },
      { it: "Je dirais que c'est une erreur.", es: "Diría que es un error." },
      { it: "Un pas de plus, il tombait.", es: "Un paso más y caía." },
    ],
    problems: [
      {
        title: "El condicional de rumor",
        question: "¿Qué valor tiene « serait » en « Le ministre serait malade » ?",
        steps: [
          "No es futuro ni condición hipotética.",
          "Es el condicional de rumor, típico de la prensa.",
          "El diario no confirma : atribuye la información a una fuente.",
        ],
        conclusion: "serait = condicional de rumor : « según dicen, está enfermo ».",
      },
      {
        title: "La 2.ª forma del condicional pasado",
        question: "Reescribe con la 2.ª forma : « Il aurait aimé venir. »",
        steps: [
          "La 2.ª forma usa el subjuntivo pluscuamperfecto.",
          "aurait → eût : il eût aimé.",
          "Mismo significado, registro literario.",
        ],
        conclusion: "Il eût aimé venir.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "fr-g-c2-style", level: "C2", title: "Estilo literario : énfasis, inversión y litote", titleIt: "Le style littéraire : emphase, inversion et litote",
    summary: "C'est…que, peut-être viendra-t-il y ce n'est pas mauvais : el arsenal del escritor.",
    explanation: [
      "La énfasis escinde la frase para realzar un elemento : c'est Marie que j'ai vue, c'est à Paris que je suis né, ce qu'il veut, c'est dormir. La inversión literaria adelanta adverbios o complementos con verbo + sujeto : peut-être viendra-t-il demain, rarement j'ai vu un tel talent, tel fut son destin.",
      "La litote dice menos para dar a entender más : ce n'est pas mauvais (= es excelente), il n'est pas bête (= es listo) ; la ironía elogia para castigar : quel talent ! (dicho con sarcasmo). Conocer estos mecanismos es la llave del subtexto en la novela y el ensayo franceses.",
    ],
    examples: [
      { it: "C'est à Paris que je suis né.", es: "Es en París donde nací." },
      { it: "Peut-être viendra-t-il demain.", es: "Quizá venga mañana." },
      { it: "Rarement j'ai vu un tel talent.", es: "Rara vez he visto un talento así." },
      { it: "Ce n'est pas mauvais, ce petit vin.", es: "No está nada mal este vinillo." },
      { it: "Tel fut son destin.", es: "Tal fue su destino." },
    ],
    problems: [
      {
        title: "La énfasis con c'est…que",
        question: "Pon énfasis en el complemento : « J'ai vu Marie. »",
        steps: [
          "La estructura c'est…que realza un elemento de la frase.",
          "El elemento destacado va entre c'est y que.",
          "Con COD antepuesto, el participio concuerda : vue.",
        ],
        conclusion: "C'est Marie que j'ai vue.",
      },
      {
        title: "Leer una litote",
        question: "¿Qué significa realmente « Ce n'est pas mauvais » ?",
        steps: [
          "La litote dice menos para sugerir más.",
          "No significa « es regular », sino todo lo contrario.",
          "Es una alabanza por atenuación, muy francesa.",
        ],
        conclusion: "Significa « es muy bueno » : decir menos para sugerir más.",
      },
    ],
    exerciseIds: [],
  },
  {
    id: "fr-g-c2-connecteurs", level: "C2", title: "Conectores del registro sostenido", titleIt: "Les connecteurs logiques du registre soutenu",
    summary: "En revanche, en outre, quand bien même : articular el discurso con precisión y elegancia.",
    explanation: [
      "Oposición y concesión : en revanche (por el contrario), néanmoins / toutefois (no obstante), quand bien même (incluso si / aunque fuera, con condicional o subjuntivo). Adición : en outre, de surcroît (además, por si fuera poco). Causa y consecuencia : du fait que, dès lors que, de sorte que, par conséquent.",
      "Precisión y matiz : en l'occurrence (en este caso), à tout le moins (como mínimo), quitte à (aunque haya que), d'ailleurs (por otra parte). El dominio de estos conectores distingue el C2 : no basta con conocerlos, hay que calibrar su fuerza — en revanche opone dos datos paralelos, tandis que simplemente sitúa en el tiempo, quand bien même concede una hipótesis para rechazarla.",
    ],
    examples: [
      { it: "Les ventes ont progressé ; en revanche, les marges ont fondu.", es: "Las ventas han progresado; en cambio, los márgenes se han desplomado." },
      { it: "Il est compétent ; de surcroît, il est disponible.", es: "Es competente; además, está disponible." },
      { it: "Quand bien même tu paierais, je n'irais pas.", es: "Incluso si pagaras, no iría." },
      { it: "Dès lors que le contrat est signé, tout est réglé.", es: "Una vez que el contrato está firmado, todo está resuelto." },
      { it: "En l'occurrence, nous ne pouvons rien faire.", es: "En este caso, no podemos hacer nada." },
    ],
    problems: [
      {
        title: "Oposición formal",
        question: "Elige el conector : « Les ventes ont progressé ; ___ les marges ont fondu. »",
        steps: [
          "Se oponen dos datos paralelos de un mismo balance.",
          "El conector de oposición en espejo es en revanche.",
          "Néanmoins valdría, pero expresa concesión, no contraste espejo.",
        ],
        conclusion: "Les ventes ont progressé ; en revanche, les marges ont fondu.",
      },
      {
        title: "Concesión extrema",
        question: "¿Qué expresa « quand bien même » en « Quand bien même tu paierais, je n'irais pas » ?",
        steps: [
          "Quand bien même = « incluso si / aunque fuera ».",
          "Va seguido de condicional (o subjuntivo).",
          "Expresa una hipótesis concedida para rechazar la conclusión.",
        ],
        conclusion: "Expresa concesión extrema : « incluso si pagaras, no iría ».",
      },
    ],
    exerciseIds: [],
  },
];
