import type { GrammarTopic } from "./types";

/* ── Grammatica · temas progresivos A1→C2 con soluciones paso a paso ── */

export const GRAMMAR: GrammarTopic[] = [
  /* ══════════ A1 ══════════ */
  {
    id: "g-a1-genero", level: "A1", title: "Género y número del sustantivo", titleIt: "Genere e numero del sostantivo",
    summary: "El sustantivo italiano cambia de terminación según género y número.",
    explanation: [
      "En italiano casi todo lo que termina en -o es masculino (il libro) y casi todo lo que termina en -a es femenino (la casa). Los sustantivos en -e pueden ser de cualquiera de los dos géneros (il pane, masculino; la chiave, femenino) y hay que memorizarlos.",
      "El plural se forma de forma regular: masculino -o → -i (libri), femenino -a → -e (case), y los que terminan en -e hacen -i en plural tanto en masculino como en femenino (pane → pani, chiavi). Ojo con las excepciones famosas: il problema es masculino (i problemi) y la mano es femenino (le mani).",
    ],
    examples: [
      { it: "il libro → i libri", es: "el libro → los libros" },
      { it: "la casa → le case", es: "la casa → las casas" },
      { it: "la chiave → le chiavi", es: "la llave → las llaves" },
    ],
    problems: [
      {
        title: "Poner en plural",
        question: "¿Cuál es el plural de “la città”?",
        steps: [
          "Primero identifico el género: la città → artículo la = femenino.",
          "Busco la terminación: città termina en -à con acento.",
          "Regla: las palabras terminadas en vocal tónica (con acento) NO cambian en plural.",
          "Solo cambia el artículo: la → le.",
        ],
        conclusion: "le città (las ciudades)",
      },
    ],
    exerciseIds: ["ex-a1-007", "ex-a1-008"],
  },
  {
    id: "g-a1-articoli", level: "A1", title: "Artículos determinados", titleIt: "Articoli determinati",
    summary: "il / lo / la / i / gli / le: elegir bien depende de la primera letra y el género.",
    explanation: [
      "El artículo masculino singular tiene tres formas: il delante de consonante normal (il libro), lo delante de s + consonante, z, ps, gn, y (lo studente, lo zaino), y l' delante de vocal (l'amico).",
      "El plural masculino es i (i libri) o gli (gli studenti, gli zaini, gli amici). El femenino es la (la casa) / l' (l'amica) en singular y siempre le en plural (le case, le amiche). La clave está en mirar la primera letra de la palabra, no su significado.",
    ],
    examples: [
      { it: "lo studente → gli studenti", es: "el estudiante → los estudiantes" },
      { it: "l'amico → gli amici", es: "el amigo → los amigos" },
      { it: "la zia → le zie", es: "la tía → las tías" },
    ],
    problems: [
      {
        title: "Elegir el artículo",
        question: "Completa: “___ zaino è pesante.” (la mochila es pesada)",
        steps: [
          "Miro la palabra: zaino. Es masculina (termina en -o).",
          "Miro la primera letra: z.",
          "Regla: ante z masculino singular se usa LO (no il).",
          "En plural sería gli zaini.",
        ],
        conclusion: "Lo zaino è pesante.",
      },
    ],
    exerciseIds: ["ex-a1-001", "ex-a1-002", "ex-a1-013", "ex-a1-018"],
  },
  {
    id: "g-a1-presente", level: "A1", title: "Presente indicativo regular", titleIt: "Presente indicativo regolare",
    summary: "Tres conjugaciones: -are, -ere, -ire (y el tipo -isc).",
    explanation: [
      "Los verbos regulares italianos se agrupan en tres conjugaciones. Para el presente basta quitar la terminación del infinitivo y añadir las desinencias: -are → parlo, parli, parla, parliamo, parlate, parlano; -ere → credo, credi, crede, crediamo, credete, credono.",
      "Los verbos en -ire se dividen en dos grupos: los normales como dormire (dormo, dormi, dorme, dormiamo, dormite, dormono) y los tipo -isc como capire, que insertan -isc- en las tres personas del singular y la 3ª del plural: capisco, capisci, capisce, capiamo, capite, capiscono.",
    ],
    examples: [
      { it: "Io parlo italiano.", es: "Yo hablo italiano." },
      { it: "Tu capisci tutto.", es: "Tú entiendes todo." },
      { it: "Noi dormiamo poco.", es: "Nosotros dormimos poco." },
    ],
    problems: [
      {
        title: "Conjugar en presente",
        question: "Completa: “Lei ___ all'università.” (frequentare)",
        steps: [
          "Infinitivo: frequentare → 1ª conjugación -are.",
          "Sujeto: Lei (3ª persona singular).",
          "Raíz frequent- + desinencia -a.",
          "Resultado: frequenta.",
        ],
        conclusion: "Lei frequenta all'università. (Asiste a la universidad.)",
      },
    ],
    exerciseIds: ["ex-a1-005", "ex-a1-006", "ex-a1-017"],
  },
  {
    id: "g-a1-essere-avere", level: "A1", title: "Essere y avere", titleIt: "Il verbo essere e avere",
    summary: "Los dos verbos irregulares más importantes del italiano.",
    explanation: [
      "essere (ser/estar): sono, sei, è, siamo, siete, sono. Nótese que io y loro comparten la forma sono.",
      "avere (tener/haber): ho, hai, ha, abbiamo, avete, hanno. La h es muda, un recuerdo latino. El italiano usa avere donde el español usa tener: ho fame (tengo hambre), ho 20 anni (tengo 20 años), ho freddo (tengo frío).",
    ],
    examples: [
      { it: "Io sono spagnolo.", es: "Yo soy español." },
      { it: "Noi abbiamo fame.", es: "Nosotros tenemos hambre." },
      { it: "Loro hanno due figli.", es: "Ellos tienen dos hijos." },
    ],
    problems: [
      {
        title: "ser o tener",
        question: "Completa: “Io ___ fame.” (tengo hambre)",
        steps: [
          "El español usa “tener” + hambre.",
          "El italiano usa avere + fame: la expresión es avere fame.",
          "Sujeto io → forma ho.",
          "Nunca “sono fame”: sería “soy hambre”.",
        ],
        conclusion: "Io ho fame.",
      },
    ],
    exerciseIds: ["ex-a1-003", "ex-a1-004", "ex-a1-015", "ex-a1-016"],
  },
  {
    id: "g-a1-aggettivi", level: "A1", title: "Adjetivos y concordancia", titleIt: "Aggettivi e concordanza",
    summary: "El adjetivo concuerda en género y número con el sustantivo.",
    explanation: [
      "Los adjetivos que terminan en -o tienen cuatro formas: alto, alta, alti, alte. Los que terminan en -e tienen solo dos: grande (sing.), grandi (pl.) para ambos géneros.",
      "Normalmente el adjetivo va DESPUÉS del sustantivo (una casa grande), pero los adjetivos más comunes como bello, buono, nuovo, vecchio suelen ir antes: una bella casa.",
    ],
    examples: [
      { it: "un ragazzo alto / una ragazza alta", es: "un chico alto / una chica alta" },
      { it: "dei libri interessanti", es: "unos libros interesantes" },
      { it: "una città grande", es: "una ciudad grande" },
    ],
    problems: [
      {
        title: "Concordar el adjetivo",
        question: "Completa: “Maria è ___.” (alto)",
        steps: [
          "Sujeto: Maria → femenino singular.",
          "El adjetivo alto termina en -o → forma masculina.",
          "Femenino singular → cambio -o por -a.",
          "Resultado: alta.",
        ],
        conclusion: "Maria è alta.",
      },
    ],
    exerciseIds: ["ex-a1-029"],
  },
  {
    id: "g-a1-domande", level: "A1", title: "Preguntas y negación", titleIt: "Domande e negazione",
    summary: "La entonación, las palabras interrogativas y el non delante del verbo.",
    explanation: [
      "Para preguntar basta la entonación ascendente: Hai fame? También se usan palabras interrogativas: chi (quién), che/cosa (qué), dove (dónde), quando (cuándo), perché (por qué), come (cómo), quanto (cuánto).",
      "La negación es sencilla: non delante del verbo. Non ho tempo. Non parlo russo. Para respuestas negativas cortas: No, grazie.",
    ],
    examples: [
      { it: "Dove abiti?", es: "¿Dónde vives?" },
      { it: "Perché studi l'italiano?", es: "¿Por qué estudias italiano?" },
      { it: "Non capisco.", es: "No entiendo." },
    ],
    problems: [
      {
        title: "Construir la pregunta",
        question: "¿Cómo se pregunta “¿Cómo te llamas?” en registro informal?",
        steps: [
          "El verbo es chiamarsi (llamarse), reflexivo.",
          "Informal (tu): pronombre reflexivo ti.",
          "chiamarsi en presente: ti chiami.",
          "Añado come: Come ti chiami?",
        ],
        conclusion: "Come ti chiami? (informal) / Come si chiama? (formal)",
      },
    ],
    exerciseIds: ["ex-a1-011", "ex-a1-014", "ex-a1-027"],
  },

  /* ══════════ A2 ══════════ */
  {
    id: "g-a2-passato-prossimo", level: "A2", title: "Passato prossimo", titleIt: "Il passato prossimo",
    summary: "El pasado perfecto italiano: auxiliar (essere/avere) + participio.",
    explanation: [
      "Se forma con el presente de avere o essere + el participio pasado (hablar → parlato; creer → creduto; dormir → dormito). La mayoría de verbos usan avere.",
      "Usan essere los verbos de movimiento e intrínsecamente intransitivos (andare, venire, partire, arrivare, tornare, restare, essere, nascere, morire) y todos los reflexivos. Con essere, el participio concuerda con el sujeto: Maria è andata, i ragazzi sono andati.",
    ],
    examples: [
      { it: "Ieri ho mangiato una pizza.", es: "Ayer comí una pizza." },
      { it: "Siamo andati al cinema.", es: "Fuimos al cine." },
      { it: "Maria è partita stamattina.", es: "María se fue esta mañana." },
    ],
    problems: [
      {
        title: "Auxiliar correcto",
        question: "Completa: “Ieri ___ al cinema.” (andare)",
        steps: [
          "Verbo: andare → movimiento.",
          "Regla: los verbos de movimiento usano ESSERE como auxiliar.",
          "Passato prossimo de andare: sono andato/andata.",
          "Con avere (“ho andato”) sería un error clásico.",
        ],
        conclusion: "Ieri sono andato al cinema.",
      },
      {
        title: "Concordancia del participio",
        question: "Completa: “Lei è ___ stamattina.” (partire, ella)",
        steps: [
          "partire usa essere.",
          "El sujeto es ella → femenino singular.",
          "participio: partito → femenino partita.",
          "Con essere el participio SIEMPRE concuerda.",
        ],
        conclusion: "Lei è partita stamattina.",
      },
    ],
    exerciseIds: ["ex-a2-001", "ex-a2-002", "ex-a2-009", "ex-a2-011", "ex-a2-012"],
  },
  {
    id: "g-a2-imperfetto", level: "A2", title: "Imperfetto vs passato prossimo", titleIt: "Imperfetto e passato prossimo",
    summary: "Descripción/hábito vs acción puntual: elegir el pasado correcto.",
    explanation: [
      "El imperfetto describe situaciones, hábitos y acciones en desarrollo: Da bambino giocavo sempre fuori. Se forma con raíz + -avo/-evo/-ivo.",
      "El passato prossimo cuenta hechos puntuales y terminados: Ieri ho giocato a calcio. La combinación clásica: mientras el imperfetto pone el escenario, el passato prossimo introduce el hecho: Mentre studiavo, è arrivato Marco.",
    ],
    examples: [
      { it: "Guardavo la TV quando è suonato il telefono.", es: "Veía la tele cuando sonó el teléfono." },
      { it: "Prima abitavo a Torino.", es: "Antes vivía en Turín." },
      { it: "Ho visto Maria ieri.", es: "Vi a María ayer." },
    ],
    problems: [
      {
        title: "Elegir el pasado",
        question: "Completa: “Da bambina ___ sempre felice.” (essere)",
        steps: [
          "“Da bambina” indica una descripción prolongada en el pasado.",
          "Las descripciones → imperfetto.",
          "essere en imperfetto: ero, eri, era…",
          "Sujeto io femenino → ero.",
        ],
        conclusion: "Da bambina ero sempre felice.",
      },
    ],
    exerciseIds: ["ex-a2-003", "ex-a2-010", "ex-a2-014", "ex-a2-015"],
  },
  {
    id: "g-a2-preposizioni", level: "A2", title: "Preposiciones articuladas", titleIt: "Preposizioni articolate",
    summary: "di, a, da, in, su, con + artículo = del, al, dal, nel, sul…",
    explanation: [
      "Cuando una preposición se encuentra con un artículo determinado, en italiano se funden en una sola palabra: di + il = del, a + il = al, da + il = dal, in + il = nel, su + il = sul.",
      "Cada preposición tiene su tabla con il/lo/la/l'/i/gli/le. Las más útiles para empezar: a (ciudades: a Roma), in (países y regiones: in Italia, in Toscana), da (de persona: dal dottore, da Maria).",
    ],
    examples: [
      { it: "Il libro è sul tavolo.", es: "El libro está sobre la mesa." },
      { it: "Vado dal dottore.", es: "Voy al médico." },
      { it: "Il telefono è nella borsa.", es: "El teléfono está en el bolso." },
    ],
    problems: [
      {
        title: "Fusión correcta",
        question: "Completa: “Abito ___ Italia, ___ Milano.”",
        steps: [
          "Italia = país → preposición in (sin artículo: in Italia).",
          "Milano = ciudad → preposición a (sin artículo: a Milano).",
          "Con países no se usa artículo, así que no hay fusión.",
          "Ojo: in + la = nella solo cuando hay artículo.",
        ],
        conclusion: "Abito in Italia, a Milano.",
      },
    ],
    exerciseIds: ["ex-a2-004", "ex-a2-005", "ex-a2-013", "ex-a2-024"],
  },
  {
    id: "g-a2-riflessivi", level: "A2", title: "Verbos reflexivos", titleIt: "Verbi riflessivi",
    summary: "chiamarsi, alzarsi, lavarsi: el pronombre reflexivo acompaña al verbo.",
    explanation: [
      "Los verbos reflexivos terminan en -si en infinitivo: alzarsi (levantarse), lavarsi (lavarse), chiamarsi (llamarse), sentirsi (sentirse). Se conjugan con los pronombres mi, ti, si, ci, vi, si: mi alzo, ti alzi, si alza…",
      "En los tiempos compuestos usan siempre ESSERE: mi sono alzato/a. Y el participio concuerda: Maria si è alzata.",
    ],
    examples: [
      { it: "Mi alzo alle sette.", es: "Me levanto a las siete." },
      { it: "Come ti chiami?", es: "¿Cómo te llamas?" },
      { it: "Ci siamo svegliati tardi.", es: "Nos despertamos tarde." },
    ],
    problems: [
      {
        title: "Conjugar un reflexivo",
        question: "Completa: “Io ___ alle sette.” (alzarsi)",
        steps: [
          "alzarsi = verbo reflexivo.",
          "Sujeto io → pronombre reflexivo mi.",
          "alzarsi en presente (conjugación -are): alzo.",
          "Orden: pronombre + verbo.",
        ],
        conclusion: "Io mi alzo alle sette.",
      },
    ],
    exerciseIds: ["ex-a2-008"],
  },
  {
    id: "g-a2-futuro", level: "A2", title: "Futuro simple y comparativos", titleIt: "Futuro semplice e comparativi",
    summary: "Il futuro (parlerò…) y più/meno… di per comparar.",
    explanation: [
      "El futuro simple se forma con la raíz del infinitivo + -ò, -ai, -à, -emo, -ete, -anno (parlare → parlerò). Los irregulares más frecuentes: essere→sarò, avere→avrò, andare→andrò, fare→farò, venire→verrò.",
      "Para comparar: più… di (más que), meno… di (menos que), (così) come (tan como). Los superlativos se forman con il più / il meno: Marco è il più alto della classe.",
    ],
    examples: [
      { it: "Domani andrò a Roma.", es: "Mañana iré a Roma." },
      { it: "Marco è più alto di Luca.", es: "Marco es más alto que Luca." },
      { it: "È il libro più bello dell'anno.", es: "Es el libro más bonito del año." },
    ],
    problems: [
      {
        title: "Futuro irregular",
        question: "Completa: “Domani ___ a Roma.” (andare)",
        steps: [
          "andare tiene futuro irregular.",
          "La raíz cambia: and- → andr-.",
          "Desinencias futuras: -ò, -ai, -à…",
          "io → andrò.",
        ],
        conclusion: "Domani andrò a Roma.",
      },
    ],
    exerciseIds: ["ex-a2-006", "ex-a2-007", "ex-a2-020"],
  },

  /* ══════════ B1 ══════════ */
  {
    id: "g-b1-condizionale", level: "B1", title: "Condizionale y cortesía", titleIt: "Il condizionale",
    summary: "Vorrei, potrei, dovrei: pedir con elegancia.",
    explanation: [
      "El condicional presente se forma como el futuro pero con -ei, -esti, -ebbe, -emmo, -este, -ebbero (parlerei, avrei, sarei).",
      "Es EL tiempo de la cortesía: Vorrei un caffè (querría un café) suena mucho mejor que Voglio un caffè (quiero). También expresa deseos y probabilidad: Sarebbe bello viaggiare di più. Con los modal: potrei (podría), dovrei (debería).",
    ],
    examples: [
      { it: "Vorrei prenotare una camera.", es: "Querría reservar una habitación." },
      { it: "Potresti aiutarmi?", es: "¿Podrías ayudarme?" },
      { it: "Dovremmo riposare.", es: "Deberíamos descansar." },
    ],
    problems: [
      {
        title: "Cortesía en el bar",
        question: "¿Qué es más cortés: “Voglio un caffè” o “Vorrei un caffè”?",
        steps: [
          "Voglio = presente indicativo: “quiero”, muy directo.",
          "Vorrei = condizionale di volere.",
          "El condicional suaviza la petición.",
          "En Italia el condicional es la forma estándar de pedir.",
        ],
        conclusion: "Vorrei un caffè, per favore. (más cortés)",
      },
    ],
    exerciseIds: ["ex-b1-001", "ex-b1-006", "ex-b1-009"],
  },
  {
    id: "g-b1-imperativo", level: "B1", title: "Imperativo formal e informal", titleIt: "L'imperativo",
    summary: "Senta, scusi, venga: el imperativo de Lei invierte las desinencias.",
    explanation: [
      "El imperativo informal (tu): parla!, scrivi!, dormi! Para la negación: non parlare! El imperativo de noi equivale a “vamos”: andiamo!",
      "El imperativo formal (Lei) usa la forma del subjuntivo presente: SentA → Senta!, ParlI → Parli!, Vada!, Si accomodi!. Es el rey del italiano de servicios: camareros, tiendas, oficinas.",
    ],
    examples: [
      { it: "Scusi, dov'è il bagno?", es: "Disculpe, ¿dónde está el baño?" },
      { it: "Si accomodi!", es: "¡Tómese asiento!" },
      { it: "Mi porti in centro, per favore.", es: "Lléveme al centro, por favor." },
    ],
    problems: [
      {
        title: "Imperativo formal",
        question: "Transforma en formal: “Siediti!” (siéntate)",
        steps: [
          "Informal tu: siediti.",
          "Formal Lei: se usa la forma del congiuntivo.",
          "sedersi → 3ª persona congiuntivo: sieda.",
          "Pronombre reflexivo si: Si sieda!",
        ],
        conclusion: "Si sieda! / Si accomodi! (formal)",
      },
    ],
    exerciseIds: ["ex-b1-004"],
  },
  {
    id: "g-b1-pronomi", level: "B1", title: "Pronombres directos e indirectos", titleIt: "Pronomi diretti e indiretti",
    summary: "mi, ti, lo/la, ci, vi, li/le (directos) — mi, ti, gli/le, ci, vi, loro (indirectos).",
    explanation: [
      "Los pronombres directos (¿qué? ¿a quién visto?) son: mi, ti, lo, la, ci, vi, li, le. Van delante del verbo: Vedo Maria → La vedo. Con infinitivo se unen al final: Vedere Maria → Vederla.",
      "Los indirectos (¿a quién?) son: mi, ti, gli (a él), le (a ella), ci, vi, gli/loro. Ho scritto a Maria → Le ho scritto. Cuando se combinan, el indirecto va primero: Me lo dici? (¿me lo dices?).",
    ],
    examples: [
      { it: "Questo libro? Lo leggo subito.", es: "¿Este libro? Lo leo enseguida." },
      { it: "Ho scritto a Maria. → Le ho scritto.", es: "Le escribí a María." },
      { it: "Me lo presti?", es: "¿Me lo prestas?" },
    ],
    problems: [
      {
        title: "Sustituir el objeto",
        question: "Sustituye: “Vedo Maria” → …",
        steps: [
          "El objeto directo es Maria (¿a quién veo? — la veo).",
          "María = femenino singular → pronombre LA.",
          "El pronombre va delante del verbo conjugado.",
          "Vedo Maria → La vedo.",
        ],
        conclusion: "La vedo.",
      },
    ],
    exerciseIds: ["ex-a2-025", "ex-b1-003", "ex-b1-007", "ex-b1-012"],
  },
  {
    id: "g-b1-congiuntivo", level: "B1", title: "Congiuntivo presente (introducción)", titleIt: "Il congiuntivo presente",
    summary: "penso che, credo che, spero che + subjuntivo.",
    explanation: [
      "El subjuntivo aparece tras verbos de opinión, deseo, duda y emoción cuando llevan “che”: penso che, credo che, spero che, mi pare che, è possibile che.",
      "Formas regulares: che io parli, che tu parli, che lui parli, che noi parliamo, che voi parliate, che loro parlino (¡las -are y -ere intercambian desinencias!). Irregulares clave: sia (essere), abbia (avere), vada (andare), faccia (fare), dia (dare), stia (stare).",
    ],
    examples: [
      { it: "Penso che sia tardi.", es: "Creo que es tarde." },
      { it: "Credo che Marco abbia ragione.", es: "Creo que Marco tiene razón." },
      { it: "Spero che tu stia bene.", es: "Espero que estés bien." },
    ],
    problems: [
      {
        title: "Activar el subjuntivo",
        question: "Completa: “Penso che ___ tardi.” (essere)",
        steps: [
          "Frase principal: penso (opinión).",
          "Nexo: che → activa el subjuntivo.",
          "essere en subjuntivo: sia.",
          "Resultado: Penso che sia tardi. (con “è” sonaría mal).",
        ],
        conclusion: "Penso che sia tardi.",
      },
    ],
    exerciseIds: ["ex-b1-002", "ex-b1-005", "ex-b1-008", "ex-b1-011"],
  },

  /* ══════════ B2 ══════════ */
  {
    id: "g-b2-ipotetico", level: "B2", title: "Il periodo ipotetico", titleIt: "Il periodo ipotetico",
    summary: "Los tres tipos de condicionales con se.",
    explanation: [
      "1º tipo (real): Se piove, resto a casa. (indicativo + indicativo/futuro). 2º tipo (hipotético presente): Se avessi tempo, viaggerei. (congiuntivo imperfetto + condizionale presente).",
      "3º tipo (irreal del pasado): Se avessi studiato, avrei passato l'esame. (congiuntivo trapassato + condizionale composto). El error más típico de los hispanohablantes es usar el condicional tras “se”: ❌ Se avrei — nunca. Tras “se” hipotético siempre subjuntivo.",
    ],
    examples: [
      { it: "Se piove, prendo l'ombrello.", es: "Si llueve, cojo el paraguas." },
      { it: "Se avessi più tempo, leggerei di più.", es: "Si tuviera más tiempo, leería más." },
      { it: "Se l'avessi saputo, sarei venuto.", es: "Si lo hubiera sabido, habría venido." },
    ],
    problems: [
      {
        title: "Hipótesis del pasado",
        question: "Completa: “Se ___ tempo, viaggerei di più.” (avere, hipótesis presente)",
        steps: [
          "Consecuencia en condicional (viaggerei) → hipótesis de 2º tipo.",
          "2º tipo: se + congiuntivo imperfetto.",
          "avere en subjuntivo imperfecto: avessi.",
          "Jamás “se avrei” (condicional tras se = error).",
        ],
        conclusion: "Se avessi tempo, viaggerei di più.",
      },
    ],
    exerciseIds: ["ex-b2-001", "ex-b2-002", "ex-b2-007", "ex-b2-009"],
  },
  {
    id: "g-b2-ci-ne", level: "B2", title: "Las partículas ci y ne", titleIt: "Le particelle ci e ne",
    summary: "ci = ahí / a esto; ne = de esto / de ellos (cantidades).",
    explanation: [
      "ci sustituye complementos de lugar con a/in: Vai a Roma? → Sì, ci vado. También sustituye “a esto/a ello” con verbos: Pensaci! (piénsalo).",
      "ne sustituye partitivos y cantidades: Quanti anni hai? → Ne ho ventitré. Quante mele vuoi? → Ne voglio tre. También “de esto”: Parliamo di questo → Ne parliamo domani.",
    ],
    examples: [
      { it: "Vai a Roma? Sì, ci vado domani.", es: "¿Vas a Roma? Sí, voy mañana." },
      { it: "Quanti anni hai? Ne ho ventitré.", es: "¿Cuántos años tienes? Tengo veintitrés." },
      { it: "Ne parliamo domani.", es: "Lo hablamos mañana (de esto)." },
    ],
    problems: [
      {
        title: "ne con cantidades",
        question: "Completa: “Quanti anni ___ hai?”",
        steps: [
          "La respuesta implícita es una cantidad (de años).",
          "Las cantidades con “di” se sustituyen con ne.",
          "ne + ho: Ne ho ventitré.",
          "ci sería para lugares; ne para partitivos.",
        ],
        conclusion: "Quanti anni ne hai? → Ne ho ventitré.",
      },
    ],
    exerciseIds: ["ex-b2-003", "ex-b2-004", "ex-b2-008"],
  },
  {
    id: "g-b2-discorso", level: "B2", title: "Estilo indirecto y registro", titleIt: "Il discorso indiretto",
    summary: "Reportar lo dicho: presente → imperfetto, y elegir entre tú y Lei.",
    explanation: [
      "Al reportar, los tiempos “dan un paso atrás”: Sono stanco → Ha detto che era stanco; Verrò → Ha detto che sarebbe venuto; Ho mangiato → Ha detto che aveva mangiato.",
      "El registro distingue informal (tu: dai, vieni, come stai?) de formal (Lei: Le do il benvenuto, come sta?). En contextos profesionales se prefiere el formal hasta que la otra persona propone pasar al tú (“Possiamo darci del tu?”).",
    ],
    examples: [
      { it: "“Sono stanco” → Ha detto che era stanco.", es: "«Estoy cansado» → Dijo que estaba cansado." },
      { it: "Le scrivo in merito alla Sua candidatura.", es: "Le escribo en relación a su candidatura." },
      { it: "Possiamo darci del tu?", es: "¿Podemos hablarnos de tú?" },
    ],
    problems: [
      {
        title: "Reportar al pasado",
        question: "“Sono stanco” → Ha detto che…",
        steps: [
          "Directo: presente (sono).",
          "Estilo indirecto con verbo principal en pasado → imperfetto.",
          "essere imperfetto: era.",
          "Concordancia de género: si habla un hombre, era stanco.",
        ],
        conclusion: "Ha detto che era stanco.",
      },
    ],
    exerciseIds: ["ex-b2-005", "ex-b2-006", "ex-b2-010"],
  },

  /* ══════════ C1 ══════════ */
  {
    id: "g-c1-concordanza", level: "C1", title: "Concordancia avanzada del participio", titleIt: "La concordanza del participio",
    summary: "Con avere el participio concuerda solo en casos precisos con el objeto antepuesto.",
    explanation: [
      "Con essere, el participio concuerda siempre con el sujeto (Maria è andata). Con avere, normalmente no concuerda (Ho visto Maria), PERO sí cuando el pronombre objeto va delante: L'ho vista (la he visto a ella), Li ho incontrati (los he encontrado).",
      "También en las oraciones relativas: La musica che ho ascoltata (en registro cuidado). En construcciones impersonales el participio va en masculino singular: È stato detto.",
    ],
    examples: [
      { it: "L'ho vista ieri.", es: "La vi ayer." },
      { it: "I libri? Li ho già letti.", es: "¿Los libros? Ya los he leído." },
      { it: "È stato un piacere.", es: "Ha sido un placer." },
    ],
    problems: [
      {
        title: "Concordar con objeto antepuesto",
        question: "Completa: “Maria? L'ho ___ ieri.” (vedere)",
        steps: [
          "El pronombre la (→ l') va delante del verbo.",
          "Regla C1: con avere + pronombre objeto antepuesto, el participio concuerda.",
          "Maria = femenino singular → visto → vista.",
          "Resultado: L'ho vista ieri.",
        ],
        conclusion: "Maria? L'ho vista ieri.",
      },
    ],
    exerciseIds: ["ex-c1-003", "ex-c1-005"],
  },
  {
    id: "g-c1-impersonali", level: "C1", title: "Construcciones impersonales y registro", titleIt: "Costruzioni impersonali",
    summary: "Si dice, bisogna, è necessario + subjuntivo: el italiano académico y profesional.",
    explanation: [
      "Las formas impersonales (si impersonal, bisogna, occorre, è opportuno) dominan el registro formal: Bisogna chiarire questo punto. Si ritiene opportuno…",
      "El si impersonal con verbos reflexivos se convierte en si ci (Ci si chiede se…). En textos académicos: Il presente studio si propone di analizzare…, si è proceduto a… Elegir el registro adecuado (dare del Lei, nominalizaciones, conectores como peraltro, pertanto, in merito a) es la marca del nivel C1.",
    ],
    examples: [
      { it: "Bisogna chiarire questo punto.", es: "Hay que aclarar este punto." },
      { it: "Si ritiene opportuno un incontro.", es: "Se considera oportuna una reunión." },
      { it: "In merito alla Sua richiesta…", es: "En relación a su solicitud…" },
    ],
    problems: [
      {
        title: "Registro académico",
        question: "¿Cuál suena más académica?",
        steps: [
          "Opción coloquial: “Voglio parlare di…”",
          "Opción académica: “Il presente studio si propone di analizzare…”",
          "La nominalización + si propone = registro formal.",
          "En C1 se espera controlar ambos registros.",
        ],
        conclusion: "Il presente studio si propone di analizzare…",
      },
    ],
    exerciseIds: ["ex-c1-001", "ex-c1-002", "ex-c1-004", "ex-c1-006"],
  },

  /* ══════════ C2 ══════════ */
  {
    id: "g-c2-stile", level: "C2", title: "Estilo, matices y variantes", titleIt: "Stile, sfumature e varianti",
    summary: "Del toscanismo fo al endecasílabo: dominar los matices de la lengua viva.",
    explanation: [
      "El italiano culto convive con variantes regionales riquísimas: el toscano fo (faccio), el uso meridional del passato remoto, el veneto que “calca” los pronombres. Reconocerlas enriquece la comprensión real.",
      "El dominio C2 se muestra en los matices: Non è che non voglia (no es que no quiera), el uso irónico de la litote, los conectores de refinamiento (peraltro, semmai, per l'appunto), y la competencia literaria: reconocer un endecasílabo, el ritmo de Montale o la ironía di Gadda.",
    ],
    examples: [
      { it: "Non è che non voglia, è che non posso.", es: "No es que no quiera, es que no puedo." },
      { it: "Semmai fosse il contrario…", es: "Más bien sería al contrario…" },
      { it: "Per l'appunto.", es: "Justamente / en efecto." },
    ],
    problems: [
      {
        title: "Matiz concesivo",
        question: "Traduce: “No es que no quiera, es que no puedo.”",
        steps: [
          "Estructura: non è che + subjuntivo.",
          "non voglia = subjuntivo presente de volere.",
          "Segunda parte en indicativo: non posso.",
          "El contraste subjuntivo/indicativo crea el matiz.",
        ],
        conclusion: "Non è che non voglia, è che non posso.",
      },
    ],
    exerciseIds: ["ex-c2-001", "ex-c2-003", "ex-c2-004"],
  },
  {
    id: "g-c2-idiomi", level: "C2", title: "Idiomaticidad y lengua literaria", titleIt: "Idiomi e lingua letteraria",
    summary: "Andare in porto, sprezzatura, endecasillabo: el italiano de la cultura.",
    explanation: [
      "Los modismos náuticos y culinarios dominan el italiano figurado: andare in porto (llegar a buen término), essere a cavallo (estar en buena situación), mettere le mani in pasta (meter mano en un asunto).",
      "La lengua literaria es patrimonio compartido: el endecasílabo de Dante y Petrarca, la prosa de Manzoni, el Novecento de Montale y Calvino. En C2 se espera leer textos literarios originales y captar el registro, la ironía y las alusiones culturales.",
    ],
    examples: [
      { it: "Il progetto è andato in porto.", es: "El proyecto se ha realizado." },
      { it: "La sprezzatura di Castiglione.", es: "La despreocupación estudida de Castiglione." },
      { it: "Nel mezzo del cammin di nostra vita…", es: "En mitad del camino de nuestra vida… (Dante)" },
    ],
    problems: [
      {
        title: "Descifrar un modismo",
        question: "¿Qué significa “andare in porto”?",
        steps: [
          "Contexto náutico: una nave que llega a puerto.",
          "Metáfora: un proyecto que llega a buen término.",
          "Uso: Il progetto è finalmente andato in porto.",
          "Los modismos náuticos son abundantísimos en italiano.",
        ],
        conclusion: "Llegar a buen término / realizarse.",
      },
    ],
    exerciseIds: ["ex-b2-011", "ex-c2-002"],
  },
];

export const GRAMMAR_BY_LEVEL = (level: string) => GRAMMAR.filter((g) => g.level === level);
