import type { CbGrammarPack } from "../cb-rules";

/* ═══ FR C2 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════ */

export const FR_CB_RULES_C2: Record<string, CbGrammarPack> = {
  "fr-cu-c2-01": {
    tables: [
      {
        title: "Inversion, ellipse, chiasme · el ritmo del pensamiento",
        headers: ["Procédé", "Schéma", "Exemple"],
        rows: [
          ["inversion", "adverbe + verbe + sujeto", "Rare fut une telle clarté."],
          ["ellipse", "cortar lo repetido", "Les uns cèdent ; les autres, non."],
          ["chiasme", "AB / BA", "Il faut écrire pour penser, et penser pour écrire."],
          ["anacoluthe (maîtrisée)", "ruptura deliberada", "Moi, ma mère, on ne m'a jamais rien dit."],
          ["rythme binaire/ternaire", "2 o 3 miembros", "Lire, relire ; écrire, réécrire."],
        ],
        note: "El ensayista C2 toca el piano sintáctico: inversión (rare fut… — raro fue), elipsis (les autres, NON — el verbo ya se cortó) y quiasmo (escribir para pensar, pensar para escribir). La anacoluto deliberada («moi, ma mère…») es el fruto prohibido: solo tras dominar la norma.",
      },
    ],
    moreExamples: [
      { it: "Jamais ne fut plus vif le débat.", es: "Nunca fue más vivo el debate. (inversión)" },
      { it: "Les uns croient ; les autres, doutent.", es: "Unos creen; otros dudan. (elipsis)" },
      { it: "On ne pense bien que ce qu'on écrit bien.", es: "Solo se piensa bien lo que se escribe bien." },
    ],
    drills: {
      transform: [
        { q: "Inverse : «Une telle clarté fut rare.» (literario)", options: ["Rare fut une telle clarté.", "Rare une telle clarté fut.", "Fut rare une telle clarté fut."], answer: 0, explain: "adjetivo predicativo primero: rare FUT…" },
        { q: "Chiasme : «vivir para comer, comer para vivir» →", options: ["vivre pour manger, manger pour vivre", "vivre pour manger et pour manger vivre", "manger pour vivre et vivre pour manger aussi"], answer: 0, explain: "AB/BA: la segunda mitad invierte la primera." },
      ],
      errors: [
        { q: "Corrige : «Rare fut une telle clarté, non fut-elle pas ?» (estilo)", options: ["Rare fut une telle clarté.", "Rare fut-elle une telle clarté pas.", "Une telle clarté rare fut non."], answer: 0, explain: "La inversión literaria no se mezcla con preguntas coloquiales." },
      ],
    },
  },
  "fr-cu-c2-02": {
    tables: [
      {
        title: "Métrique: l'alexandrin et ses coupes",
        headers: ["Terme", "Définition", "Exemple"],
        rows: [
          ["alexandrin", "12 sílabas (6+6)", "Et la mer et l'amour / ont l'amer pour partage"],
          ["césure", "pausa tras la 6ª sílaba", "//"],
          ["hémistiche", "cada mitad (6 sílabas)", "Et la mer et l'amour (6)"],
          ["rime plates/croisées", "AABB / ABAB", "plates: aimons/aimons"],
          ["diérèse", "vocal desdoblada", "li-on (2 sílabas)"],
        ],
        note: "El alejandrino francés respira en 6+6: «Et la mer et l'amour (6) / ont l'amer pour partage (6)» — y el juego mer/amer/amar(en) es la poesía haciendo gramática. La dièresis (li-on) estira la vocal para contar: el oído francés cuenta sílabas, no acentos, a diferencia del español.",
      },
    ],
    moreExamples: [
      { it: "Et la mer et l'amour ont l'amer pour partage.", es: "Y el mar y el amor tienen lo amargo por herencia. (mer/amer juego)" },
      { it: "Musique du vers : la diérèse «li-on» compte pour deux.", es: "La diéresis «li-on» cuenta por dos sílabas." },
      { it: "Sois sage, ô ma douleur, et tiens-toi plus tranquille.", es: "Sé sabia, oh mi dolor, y quédate más tranquila. (Baudelaire, alejandrino)" },
    ],
    drills: {
      transform: [
        { q: "Compte : «Sois sage, ô ma douleur» = combien de syllabes ?", options: ["6", "7", "12"], answer: 0, explain: "6 sílabas = primer hemistiquio del alejandrino." },
        { q: "Le jeu de «la mer et l'amour ont l'amer…» repose sur :", options: ["mer / amer (paronomase)", "la rima en -our", "la cesura"], answer: 0, explain: "mer y amer suenan casi igual: el juego es fonético." },
      ],
      errors: [
        { q: "Corrige : «l'alexandrin compte 12 syllabes sans pause.»", options: ["12 sílabas con césura tras la 6ª", "12 sílabas con pausa libre", "6 sílabas sin pausa"], answer: 0, explain: "El alejandrino clásico: 6 // 6, la césura es su firma." },
      ],
    },
  },
  "fr-cu-c2-03": {
    tables: [
      {
        title: "Les mécanismes de l'humour français",
        headers: ["Mécanisme", "Définition", "Exemple"],
        rows: [
          ["antiphrase", "decir lo contrario", "Bravo ! Superbe ! (catástrofe)"],
          ["litote", "decir menos", "Ce n'est pas génial (= malo)"],
          ["paronomase", "sonidos vecinos", "Il faut tourner la page / la poule"],
          ["chute", "remate inesperado", "…et le lendemain, plus rien."],
          ["calembour", "juego de palabras doble", "Un avocat avocat (abogado/aguacate)"],
        ],
        note: "El humor francés es técnico: antífrasis (decir bravo por desastre), litote (ce n'est pas génial = pésimo), y la chute — el remate que reinterpreta todo lo anterior. El calembour (avocat/avocat) reina en la prensa: «la une» del Canard Enchaîné vive de ellos.",
      },
    ],
    moreExamples: [
      { it: "Bravo ! Magnifique ! Qui dit mieux ?", es: "¡Bravo! ¡Magnífico! ¿Quién da más? (ironía: desastre)" },
      { it: "Ce n'est pas complètement faux.", es: "No es completamente falso. (litote: es verdad)" },
      { it: "Il pratiquait le jeûne… conjugal.", es: "Practicaba el ayuno… conyugal. (chute)" },
    ],
    drills: {
      transform: [
        { q: "Identifie : «Ce n'est pas la mer à boire.» =", options: ["une litote", "une antiphrase", "un calembour"], answer: 0, explain: "Litote: decir menos (no es para tanto = es fácil)." },
        { q: "Crée la chute : «Il jeûne…» (humor conyugal)", options: ["…conjugally", "…parfaitement", "…avec appétit"], answer: 0, explain: "La chute reinterpreta: jeûne conjugal = ayuno conyugal." },
      ],
      errors: [
        { q: "Corrige l'analyse : «Bravo !» dit sur un échec est une litote.", options: ["C'est une antiphrase (ironie).", "C'est une paronomase.", "C'est une diérèse."], answer: 0, explain: "Decir lo contrario = antífrasis; decir menos = litote." },
      ],
    },
  },
  "fr-cu-c2-04": {
    tables: [
      {
        title: "Discours indirect libre et focalisation",
        headers: ["Élément", "Direct", "Indirect libre"],
        rows: [
          ["temps", "«Je viendrai demain.»", "Elle viendrait le lendemain. (condicional)"],
          ["deixis", "«ici, maintenant»", "là-bas, à ce moment-là"],
          ["pronoms", "je / me", "elle / se"],
          ["sans intro", "—", "Demain, tout serait fini. (voz del personaje sola)"],
          ["focalisation interne", "ver desde dentro", "Le salon lui parut immense."],
        ],
        note: "El discours indirect libre es la tercera voz: ni cita ni reporte — «Demain, tout serait fini» es el pensamiento del personaje con los tiempos del narrador. Flaubert lo patentó. La focalisation interne (le salon LUI PARUT) filtra el mundo por la percepción del personaje: eso es estilo.",
      },
    ],
    moreExamples: [
      { it: "Demain, tout serait fini, pensait-elle.", es: "Mañana, todo estaría terminado, pensaba ella." },
      { it: "La pièce lui sembla plus petite qu'autrefois.", es: "La habitación le pareció más pequeña que antes. (foco interno)" },
      { it: "Pourquoi avait-il dit cela ?", es: "¿Por qué había dicho él eso? (pregunta del personaje, sin marco)" },
    ],
    drills: {
      transform: [
        { q: "Indirect libre : «Je pars demain.» (pensamiento de elle) →", options: ["Elle partirait le lendemain.", "Elle part demain.", "Elle est partie hier même."], answer: 0, explain: "futur→conditionnel; demain→le lendemain." },
        { q: "Focalisation interne : «La maison était grande.» (desde su percepción)", options: ["La maison lui parut grande.", "La maison est grande objectivement.", "La grande maison était vue."], answer: 0, explain: "lui parut = percepción del personaje, no dato del narrador." },
      ],
      errors: [
        { q: "Corrige : «Demain, tout serait fini» pensa-t-elle demain.", options: ["Demain, tout serait fini, pensait-elle.", "Demain, tout sera fini pense-t-elle hier.", "Le lendemain, tout serait fini demain."], answer: 0, explain: "El marco (pensait-elle) va en imperfecto; el deixis interior queda." },
      ],
    },
  },
  "fr-cu-c2-05": {
    tables: [
      {
        title: "La langue du matiz diplomatique",
        headers: ["Procédé", "Littéral", "Diplomatique"],
        rows: [
          ["conditionnel de prudence", "ce serait", "es (pero no lo firmo)"],
          ["litote diplomatique", "on ne peut exclure", "probablemente ocurrirá"],
          ["imparfait de politesse", "je voulais vous dire", "quiero decirle"],
          ["périphrase atténuante", "un différend de lecture", "una pelea brutal"],
          ["futur de réserve", "il sera examiné", "lo miraremos (o no)"],
        ],
        note: "El diplomático francés nunca firma sus frases: conditionnel de prudence (ce SERAIT un problème), litote (on ne peut EXCLURE) e imperfecto de cortesía (je VOULAIS vous signaler = quiero decirle, pero suave). «Un différend de lecture» = dos países que se odian — la perífrasis es el arte de la guerra evitada.",
      },
    ],
    moreExamples: [
      { it: "Je voulais simplement attirer votre attention sur…", es: "Quería simplemente atraer su atención sobre… (imperfecto de cortesía)" },
      { it: "On ne peut exclure une aggravation.", es: "No se puede excluir un agravamiento. (= ocurrirá)" },
      { it: "Ce serait une erreur de sous-estimer le délai.", es: "Sería un error subestimar el plazo. (= lo es)" },
    ],
    drills: {
      transform: [
        { q: "Prudence : «C'est un problème.» (diplomático)", options: ["Ce serait un problème.", "C'est un GROS problème !", "Il y a un problème énorme, hélas."], answer: 0, explain: "conditionnel de prudence: ce serait." },
        { q: "Litote : «Cela provoquera une crise» →", options: ["On ne peut exclure une crise.", "Une crise va exploser !", "Ce sera la crise du siècle !"], answer: 0, explain: "on ne peut exclure = anuncio suave de lo probable." },
      ],
      errors: [
        { q: "Corrige : «Je veux vous dire que c'est inacceptable.» (diplomático)", options: ["Je voulais vous signaler que ce serait difficilement acceptable.", "Je veux que vous sachiez c'est inacceptable !", "C'est inacceptable, je le veux."], answer: 0, explain: "Imperfecto de cortesía + conditionnel: suaviza sin mentir." },
      ],
    },
  },
  "fr-cu-c2-06": {
    tables: [
      {
        title: "Le présent de scénario",
        headers: ["Élément", "Règle", "Exemple"],
        rows: [
          ["didascalies", "sin sujeto, presente", "Elle entre. Le téléphone sonne."],
          ["présent de narration", "el pasado como presente", "En 1944, la ville se libère."],
          ["action lines", "verbos cortos", "Il s'assoit. Regarde. Sourit."],
          ["dialogue coupé", "— réplique / — réponse", "— Tu viens ? — J'arrive."],
          ["INT./EXT. + lieu", "encabezado de escena", "INT. CAFÉ — JOUR"],
        ],
        note: "El guion francés es presente sin sujeto: «elle entre» (jamás «elle entre elle»). Las didascalias pintan sin adjetivos: «il s'assoit. Regarde. Sourit.» — tres golpes, cine puro. El présent de narration («en 1944, la ville se libère») trae el archivo a la sala.",
      },
    ],
    moreExamples: [
      { it: "Il ouvre la porte. Silence. Il entre.", es: "Abre la puerta. Silencio. Entra." },
      { it: "— Tu viens ? — J'arrive.", es: "— ¿Vienes? — Ya voy. (diálogo cortado)" },
      { it: "EXT. PONT — NUIT. La pluie.", es: "EXT. PUENTE — NOCHE. La lluvia. (didascalia)" },
    ],
    drills: {
      transform: [
        { q: "Didascalie : «Ella entra y ve la carta» (guion)", options: ["Elle entre. Elle voit la lettre.", "Elle entra et vit la lettre.", "Elle est entrée voyant la lettre."], answer: 0, explain: "Presente, sin sujeto explícito extra, frases cortas." },
        { q: "Présent de narration : «En 1968, les murs ___ (parler).»", options: ["parlent", "parlaient", "ont parlé"], answer: 0, explain: "El presente histórico anima: parlent." },
      ],
      errors: [
        { q: "Corrige : «Elle est entrant dans la pièce et regarde.» (didascalie)", options: ["Elle entre dans la pièce et regarde.", "Elle entrait et a regardé.", "Elle est entrée regardante."], answer: 0, explain: "Didascalia = presente simple: elle entre." },
      ],
    },
  },
  "fr-cu-c2-07": {
    tables: [
      {
        title: "Le futur de promesse et la syntaxe du meeting",
        headers: ["Procédé", "Schéma", "Exemple"],
        rows: [
          ["futur de promesse", "nous serons", "Nous serons ce que nous déciderons d'être."],
          ["anaphore", "même ouverture", "La France sera… La France fera…"],
          ["tricolon", "3 membres croissants", "du travail, du pain, de la dignité"],
          ["question oratoire", "sans réponse", "Combien de temps encore ?"],
          ["impératif collectif", "allons / votons", "Allons voter !"],
        ],
        note: "El mitin francés promete en futuro: «la France sera, la France fera» — anáfora sobre futur. El tricolon creciente (trabajo, pan, dignidad) es la escalera emocional; la pregunta oratoria («¿cuánto tiempo más?») abre el pecho sin pedir respuesta. «Allons voter» cierra con imperativo de primera persona plural.",
      },
    ],
    moreExamples: [
      { it: "La République sera fidèle à ses promesses.", es: "La República será fiel a sus promesas." },
      { it: "Combien de temps encore accepterons-nous cela ?", es: "¿Cuánto tiempo más aceptaremos esto?" },
      { it: "Allons chercher la victoire !", es: "¡Vamos a buscar la victoria!" },
    ],
    drills: {
      transform: [
        { q: "Anaphore + futur : «La France ___ juste. La France ___ forte.»", options: ["sera / sera", "est / sera", "sera / est"], answer: 0, explain: "Anáfora: misma apertura + futuro de promesa." },
        { q: "Tricolon croissant :", options: ["du pain, du travail, de la dignité", "du pain et du travail et la dignité aussi", "du pain, ou du travail, ou de la dignité"], answer: 0, explain: "Tres miembros sin conjunción, intensidad creciente." },
      ],
      errors: [
        { q: "Corrige : «La France sera juste, la France sera forte, et la France sera unie aussi probablement.»", options: ["La France sera juste. La France sera forte. La France sera unie.", "La France sera juste et forte et unie aussi peut-être.", "La France est juste forte unie, elle sera."], answer: 0, explain: "El tricolon no se diluye: tres golpes limpios, sin «también probablemente»." },
      ],
    },
  },
  "fr-cu-c2-08": {
    tables: [
      {
        title: "Faux amis ES→FR · el diccionario del traductor",
        headers: ["Español", "Trampa (faux ami)", "El término correcto"],
        rows: [
          ["embarazada", "embarrassée (= avergonzada)", "enceinte"],
          ["constipado", "constipé (= estreñido)", "enrhumé"],
          ["gato", "un gâteau (= un pastel)", "un chat"],
          ["éxito", "✗ «un exito» no existe", "un succès · une réussite"],
          ["dejar a alguien", "sortir avec (= salir con alguien)", "quitter"],
        ],
        note: "Los falsos amigos muerden en ambos sentidos: «embarrassée» = avergonzada (no embarazada: enceinte); «une réussite» = éxito. Y calcos sintácticos: el español «es que…» no se traduce literalmente («c'est que…» existe pero suena pobre: mejor explicar la causa). Traducir sin traicionar = desconfiar de las palabras gemelas.",
      },
    ],
    moreExamples: [
      { it: "Elle est enceinte de trois mois.", es: "Está embarazada de tres meses. (enceinte, no embarrassée)" },
      { it: "Le film a été un succès inattendu.", es: "La película fue un éxito inesperado. (succès)" },
      { it: "Actuellement, nous étudions la question.", es: "Actualmente estudiamos la cuestión." },
    ],
    drills: {
      transform: [
        { q: "Traduis : «está embarazada» →", options: ["elle est enceinte", "elle est embarrassée", "elle est embarazada"], answer: 0, explain: "embarrassée = avergonzada; embarazada = enceinte." },
        { q: "Traduis : «fue un éxito» →", options: ["ce fut un succès", "ce fut un exito", "ce fut une réussite d'exito"], answer: 0, explain: "éxito = succès / réussite." },
      ],
      errors: [
        { q: "Corrige : «Elle est embarrassée de trois mois.»", options: ["Elle est enceinte de trois mois.", "Elle est embarrassante trois mois.", "Elle a trois mois d'embarras."], answer: 0, explain: "Avergonzada ≠ embarazada: enceinte es la palabra." },
      ],
    },
  },
  "fr-cu-c2-09": {
    tables: [
      {
        title: "Désinfler le style administratif",
        headers: ["Style administratif", "Style sobre", "Gain"],
        rows: [
          ["il appartient à", "il faut / vous devez", "claridad"],
          ["dans le cadre de", "dans / pour", "preposiciones"],
          ["proceder à une vérification", "vérifier", "verbo"],
          ["est susceptible de", "peut", "verbo modal"],
          ["de nature à", "pour", "preposición"],
        ],
        note: "El estilo administrativo francés ha hecho del «proceder à» un deporte: «proceder à une vérification» = vérifier. El C2 desinfla: cada sustantivo verbal esconde su verbo, cada «de nature à» es un «pour». Después de la cirugía, el texto respira y el lector agradece.",
      },
    ],
    moreExamples: [
      { it: "Nous devons vérifier les comptes. (no: procéder à une vérification)", es: "Debemos verificar las cuentas." },
      { it: "Cette mesure peut réduire les délais. (no: est susceptible de)", es: "Esta medida puede reducir los plazos." },
      { it: "pour améliorer le service (no: de nature à améliorer)", es: "para mejorar el servicio." },
    ],
    drills: {
      transform: [
        { q: "Désinfler : «Nous procéderons à une réforme.» →", options: ["Nous réformerons.", "Nous ferons une réforme procédurale.", "La réforme sera procédée."], answer: 0, explain: "proceder à une réforme → réformer." },
        { q: "Désinfler : «dans le cadre de la réforme» →", options: ["dans la réforme / avec la réforme", "dans le cadre réformé", "cadre de la dans réforme"], answer: 0, explain: "dans le cadre de = dans / avec." },
      ],
      errors: [
        { q: "Corrige : «Le dossier est susceptible d'être en mesure d'évoluer.»", options: ["Le dossier peut évoluer.", "Le dossier est susceptible d'évoluer en mesure.", "Le dossier en mesure est susceptible."], answer: 0, explain: "Doble inflación: susceptible + en mesure de = simplemente peut." },
      ],
    },
  },
  "fr-cu-c2-10": {
    tables: [
      {
        title: "Passé simple / imparfait · el relato de archivo",
        headers: ["Temps", "Fonction", "Exemple"],
        rows: [
          ["passé simple", "los hitos del documento", "Le décret fut signé le 14 mars."],
          ["imparfait", "el contexto de época", "La ville vivait au rythme des foires."],
          ["plus-que-parfait", "los antecedentes", "La guerre avait tout changé."],
          ["présent historique", "acercar el archivo", "En 1789, le peuple prend la Bastille."],
          ["marques régionales", "le passé simple survit au Sud", "occitan: passé simple oral"],
        ],
        note: "El relato de archivo alterna: passé simple para los hitos («le décret FUT signé»), imperfecto para la época («la ville vivait»), y présent historique para acercar («en 1789, le peuple PREND la Bastille»). Curiosidad: en el sur de Francia y Occitania, el passé simple sobrevivió en la lengua hablada más que en el norte.",
      },
    ],
    moreExamples: [
      { it: "Le roi arriva au printemps ; la disette sévissait.", es: "El rey llegó en primavera; el hambre azotaba." },
      { it: "Tout avait commencé par une lettre anonyme.", es: "Todo había empezado por una carta anónima." },
      { it: "En 1515, François Ier gagne Marignan.", es: "En 1515, Francisco I gana Marignan. (presente histórico)" },
    ],
    drills: {
      transform: [
        { q: "Choisis : «Le décret ___ (être) signé le 14 mars.» (hito de archivo)", options: ["fut", "était", "a été toujours"], answer: 0, explain: "Hito fechado → passé simple: fut." },
        { q: "Choisis : «La ville ___ (vivre) au rythme des foires.» (contexto)", options: ["vivait", "vécut", "vit"], answer: 0, explain: "Decorado de época → imparfait: vivait." },
      ],
      errors: [
        { q: "Corrige : «Le décret était signé le 14 mars.» (hito único y fechado)", options: ["Le décret fut signé le 14 mars.", "Le décret fut signant le 14 mars.", "Le décret est signé le 14 mars là-bas."], answer: 0, explain: "Acción fechada = passé simple (fut), no imperfecto." },
      ],
    },
  },
  "fr-cu-c2-11": {
    tables: [
      {
        title: "La fabrication ludique: calembour, mot-valise, verlan",
        headers: ["Procédé", "Mécanisme", "Exemple"],
        rows: [
          ["calembour", "doble sentido", "Il est passé à table (comer/rendirse)"],
          ["mot-valise", "dos palabras fundidas", "franglais (français + anglais)"],
          ["verlan", "sílabas invertidas", "femme → meuf · fou → ouf"],
          ["apocope", "corte final", "frigo (réfrigérateur) · apéro (apéritif)"],
          ["dérivation ludique", "sufijo inesperado", "une béatitude → un béat"],
        ],
        note: "El francés fabrica palabras por diversión: verlan invierte (femme→meuf: la palabra llega al revés), el mot-valise fusiona (franglais), la apocope recorta (apéro). El calembour es el rey: «passer à table» = sentarse a comer O rendirse. La lengua como juguete es el nivel C2.",
      },
    ],
    moreExamples: [
      { it: "On se fait un apéro ? (apéritif)", es: "¿Nos tomamos un aperitivo? (apocope)" },
      { it: "Elle est superrelou, cette histoire. (relou = lourd inverso)", es: "Esta historia es superpesada. (verlan)" },
      { it: "Le franglais gagne du terrain.", es: "El franglais gana terreno. (mot-valise)" },
    ],
    drills: {
      transform: [
        { q: "Décodage verlan : «meuf» =", options: ["femme", "mouf", "feume"], answer: 0, explain: "Verlan invierte: femme → meuf." },
        { q: "Apocope : «apéro» viene de :", options: ["apéritif", "apocalypse", "apogée"], answer: 0, explain: "apéritif recortado: apéro." },
      ],
      errors: [
        { q: "Corrige : «le verlan de fou est fo u.»", options: ["le verlan de fou est ouf.", "le verlan de fou est ufo.", "le fou est verlan ouf de."], answer: 0, explain: "fou → ouf (inversión silábica)." },
      ],
    },
  },
  "fr-cu-c2-12": {
    tables: [
      {
        title: "L'éloge: gradation et péroraison",
        headers: ["Mouvement", "Outil", "Exemple"],
        rows: [
          ["entrée en matière", "il fut un temps où…", "hubo un tiempo en que…"],
          ["éloge gradué", "non seulement… mais encore…", "no solo… sino además…"],
          ["superlatif d'éloge", "le plus… que", "le plus juste des hommes"],
          ["climax", "et par-dessus tout…", "y por encima de todo…"],
          ["péroraison", "qu'il repose en paix / que dure son œuvre", "el legado permanece"],
        ],
        note: "El elogio fúnebre francés (éloge) gradúa: «non seulement il fut juste, mais encore il fut bon» — la escala retórica sube hacia el climax «et par-dessus tout». La péroraison del elogio sella con legado: «que dure son œuvre». Gradación = respiración emocional: cada golpe más alto que el anterior.",
      },
    ],
    moreExamples: [
      { it: "Non seulement il a bâti, mais il a transmis.", es: "No solo construyó, sino que además transmitió." },
      { it: "Et par-dessus tout, il savait écouter.", es: "Y por encima de todo, sabía escuchar." },
      { it: "Que son œuvre lui survive.", es: "Que su obra le sobreviva." },
    ],
    drills: {
      transform: [
        { q: "Gradue : «Il fut juste. Il fut bon.» (non seulement)", options: ["Non seulement il fut juste, mais encore il fut bon.", "Il fut juste et il fut bon aussi non seulement.", "Il fut non seulement juste mais encore bon peut-être."], answer: 0, explain: "non seulement… mais encore…: la escala del elogio." },
        { q: "Climax : «…, et ___ ___ ___, il savait pardonner.»", options: ["par-dessus tout", "au-dessous de tout", "à côté de tout"], answer: 0, explain: "par-dessus tout = el pico del elogio." },
      ],
      errors: [
        { q: "Corrige : «Non seulement il fut juste, mais il fut bon aussi un peu.»", options: ["Non seulement il fut juste, mais encore il fut bon.", "Il fut juste et un peu bon quand même.", "Il fut non seulement un peu juste mais bon."], answer: 0, explain: "La gradación no se desinfla: mais encore (no «aussi un poco»)." },
      ],
    },
  },
};
