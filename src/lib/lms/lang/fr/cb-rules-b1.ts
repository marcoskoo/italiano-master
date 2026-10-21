import type { CbGrammarPack } from "../cb-rules";

/* ═══ FR B1 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════ */

export const FR_CB_RULES_B1: Record<string, CbGrammarPack> = {
  "fr-cu-b1-01": {
    tables: [
      {
        title: "Exprimer son opinion · je pense que + indicatif",
        headers: ["Formule", "Force", "Exemple"],
        rows: [
          ["je pense que + ind.", "neutre", "Je pense que c'est une bonne idée."],
          ["je trouve que + ind.", "impresión", "Je trouve que le film est long."],
          ["à mon avis / selon moi", "sin verbo", "À mon avis, c'est trop cher."],
          ["je ne pense pas que + subj. (¡cambio!)", "negación → subjuntivo", "Je ne pense pas que ce soit juste."],
          ["il me semble que + ind.", "suave", "Il me semble que tu as raison."],
        ],
        note: "Gran diferencia con el español: «je pense que» + INDICATIVO (je pense que c'EST) — el español «creo que sea» ✗ usa subjuntivo en la negación, y el francés también: «je ne pense pas que ce SOIT». Afirmativo = indicativo, negativo = subjuntivo.",
      },
    ],
    moreExamples: [
      { it: "Je crois que tu as raison.", es: "Creo que tienes razón. (indicativo)" },
      { it: "Je ne crois pas qu'il vienne.", es: "No creo que venga. (subjuntivo)" },
      { it: "Selon moi, le débat est mal posé.", es: "Según yo, el debate está mal planteado." },
    ],
    drills: {
      transform: [
        { q: "Choisis le mode : «Je pense que ce ___ (être) juste.»", options: ["est", "soit", "serait"], answer: 0, explain: "pensar que + INDICATIVO (afirmativo): est." },
        { q: "Choisis le mode : «Je ne pense pas que ce ___ (être) juste.»", options: ["soit", "est", "sera"], answer: 0, explain: "negación de pensamiento → subjuntivo: soit." },
      ],
      errors: [
        { q: "Corrige : «Je ne pense pas que c'est juste.»", options: ["Je ne pense pas que ce soit juste.", "Je ne pense pas que c'est pas juste.", "Je pense que ce n'est pas juste soit."], answer: 0, explain: "negar el pensamiento → subjuntivo: ce soit." },
      ],
    },
  },
  "fr-cu-b1-02": {
    tables: [
      {
        title: "Plus-que-parfait + n'avais jamais",
        headers: ["Structure", "Formule", "Exemple"],
        rows: [
          ["plus-que-parfait", "avais/étais + participe", "J'avais déjà visité Rome."],
          ["jamais (negativo)", "n'avais jamais + participe", "Je n'avais jamais vu ça."],
          ["anterioridad", "antes de otro pasado", "Quand je suis arrivé, ils avaient déjà mangé."],
          ["déjà / pas encore", "n'avais pas encore + participe", "Je n'avais pas encore répondu."],
          ["récit", "preparación del giro", "Tout avait commencé un mardi."],
        ],
        note: "El pluscuamperfecto = «había + participio»: j'avais visité. «Nunca había visto» = je n'avais JAMAIS vu — el jamais negativo (con ne…jamais) es el motor de las anécdotas: «¡nunca había visto eso!».",
      },
    ],
    moreExamples: [
      { it: "Je n'avais jamais mangé d'huîtres avant.", es: "Nunca había comido ostras antes." },
      { it: "Elle avait oublié son passeport.", es: "Había olvidado su pasaporte." },
      { it: "Tout était prêt : nous avions tout préparé.", es: "Todo estaba listo: lo habíamos preparado todo." },
    ],
    drills: {
      transform: [
        { q: "Plus-que-parfait : «Je ___ ___ ___ (voir / jamais) ça.»", options: ["n'avais jamais vu", "n'ai jamais vu", "n'avais jamais voir"], answer: 0, explain: "avais + jamais + vu (antes del pasado)." },
        { q: "Antériorité : «Quand je suis arrivé, ils ___ ___ ___ (manger / déjà).»", options: ["avaient déjà mangé", "ont déjà mangé", "avaient déjà manger"], answer: 0, explain: "antes de mi llegada → plus-que-parfait." },
      ],
      errors: [
        { q: "Corrige : «Je n'ai jamais vu ça avant ce jour-là.» (antes de otro pasado)", options: ["Je n'avais jamais vu ça avant ce jour-là.", "Je n'avais jamais vois ça ce jour.", "Je ne voyais jamais ça avant jour."], answer: 0, explain: "El «nunca antes» de una anécdota → plus-que-parfait." },
      ],
    },
  },
  "fr-cu-b1-03": {
    tables: [
      {
        title: "Hypothèse irréelle: si + imparfait → conditionnel",
        headers: ["Clause", "Forme", "Exemple"],
        rows: [
          ["si + imparfait", "si j'avais / si j'étais / si je pouvais", "Si j'avais le temps…"],
          ["résultat: conditionnel présent", "radical futur + -ais/-ais/-ait…", "…je voyagerais."],
          ["être → si j'étais", "si j'étais riche", "Si j'étais riche, j'achèterais un voilier."],
          ["inversion", "et si + imparfait ?", "Et si on allait à Paris ?"],
          ["✗", "«si + conditionnel»", "Si j'aurais ✗ → Si j'avais"],
        ],
        note: "«Si tuviera tiempo, viajaría» = si j'avais le temps, je voyagerais — calco casi perfecto del español. La única regla dura: JAMÁS «si + condicional»: «si j'aurais» es EL error infantil francés (Brégalade). «Et si on + imparfait» = ¿y si fuéramos…?",
      },
    ],
    moreExamples: [
      { it: "Si je gagnais au loto, je quitterais tout.", es: "Si ganara la lotería, lo dejaría todo." },
      { it: "Si tu étais à ma place, que ferais-tu ?", es: "Si estuvieras en mi lugar, ¿qué harías?" },
      { it: "Et si on restait à la maison ?", es: "¿Y si nos quedáramos en casa?" },
    ],
    drills: {
      transform: [
        { q: "Complète : «Si j'avais le temps, je ___ (voyager).»", options: ["voyagerais", "voyageais", "voyagerai"], answer: 0, explain: "resultado → conditionnel: voyagerais." },
        { q: "Complète : «Si je ___ (être) riche…»", options: ["étais", "serais", "suis"], answer: 0, explain: "si + imparfait: j'étais." },
      ],
      errors: [
        { q: "Corrige : «Si j'aurais le temps, je voyagerais.»", options: ["Si j'avais le temps, je voyagerais.", "Si j'aurai le temps, je voyageais.", "Si j'ai eu le temps, je voyagerais."], answer: 0, explain: "Nunca condicional tras si: si j'avais." },
      ],
    },
  },
  "fr-cu-b1-04": {
    tables: [
      {
        title: "Futur simple et futur antérieur",
        headers: ["Temps", "Formation", "Exemple"],
        rows: [
          ["futur simple", "radical + ai/as/a/ons/ez/ont", "Je te rappellerai demain."],
          ["futur antérieur", "aurai/serai + participe", "J'aurai fini avant midi."],
          ["promesse", "futur simple", "Tu recevras le dossier vendredi."],
          ["anticipation", "quand + futur ant., futur simple", "Quand tu auras lu le contrat, tu signeras."],
          ["dès que + futur ant.", "anterioridad futura", "Dès qu'il sera parti, on mangera."],
        ],
        note: "El futuro anterior es el «habré terminado» francés: j'aurai fini. Vive con quand/dès que: «quand tu AURAS LIDO el contrato, firmarás» — la acción futura que debe ocurrir antes de otra futura. Promesas = futur simple; plazos = futur antérieur.",
      },
    ],
    moreExamples: [
      { it: "Quand tu auras reçu l'offre, réponds vite.", es: "Cuando hayas recibido la oferta, responde rápido." },
      { it: "Nous serons partis avant votre arrivée.", es: "Nos habremos ido antes de su llegada." },
      { it: "Elle aura terminé le rapport pour vendredi.", es: "Ella habrá terminado el informe para el viernes." },
    ],
    drills: {
      transform: [
        { q: "Futur antérieur : «J'___ ___ fini avant midi.»", options: ["aurai", "aurais", "avais"], answer: 0, explain: "aurai fini = habré terminado (futuro anterior)." },
        { q: "Complète : «Quand tu ___ ___ (lire) le contrat, tu signeras.»", options: ["auras lu", "as lu", "aurais lu"], answer: 0, explain: "quand + futur antérieur: auras lu." },
      ],
      errors: [
        { q: "Corrige : «Quand tu liras le contrat, tu signeras.» (la lectura ocurre antes)", options: ["Quand tu auras lu le contrat, tu signeras.", "Quand tu as lu le contrat, tu signeras.", "Quand tu lis le contrat, tu signeras déjà."], answer: 0, explain: "Anterioridad futura: quand + futur antérieur (auras lu)." },
      ],
    },
  },
  "fr-cu-b1-05": {
    tables: [
      {
        title: "Obligation, interdiction, permission",
        headers: ["Formule", "Sens", "Exemple"],
        rows: [
          ["devoir + inf.", "obligation", "Vous devez porter la ceinture."],
          ["il faut + inf. / il faut que + subj.", "obligación impersonal", "Il faut s'arrêter. · Il faut que tu viennes."],
          ["interdit de / défense de", "prohibición (cartel)", "Il est interdit de fumer."],
          ["pouvoir + inf.", "permission", "Vous pouvez entrer."],
          ["ne pas avoir à", "no obligatorio", "Tu n'as pas à t'excuser."],
        ],
        note: "il faut es el «hay que» francés: il faut + infinitivo, o il faut QUE + subjuntivo (il faut que tu VIENNES). «Il est interdit de + infinitivo» es el lenguaje de los carteles: prohibido fumar. «Défense d'entrer» = prohibido entrar (muy oficial).",
      },
    ],
    moreExamples: [
      { it: "Il faut que je parte avant dix heures.", es: "Tengo que irme antes de las diez. (il faut que + subj)" },
      { it: "Il est interdit de stationner ici.", es: "Está prohibido estacionar aquí." },
      { it: "Vous pouvez utiliser votre téléphone.", es: "Puede usar su teléfono." },
    ],
    drills: {
      transform: [
        { q: "Impersonnel : «Il faut que tu ___ (venir).»", options: ["viennes", "viens", "viendras"], answer: 0, explain: "il faut que + subjuntivo: viennes." },
        { q: "Cartel : «Il est ___ de fumer.» (prohibido)", options: ["interdit", "défendu à fumer", "pas pouvoir"], answer: 0, explain: "il est interdit de + infinitivo." },
      ],
      errors: [
        { q: "Corrige : «Il faut que tu viens maintenant.»", options: ["Il faut que tu viennes maintenant.", "Il faut que tu venir maintenant.", "Il faut tu viennes maintenant que."], answer: 0, explain: "il faut que + subjuntivo: viennes." },
      ],
    },
  },
  "fr-cu-b1-06": {
    tables: [
      {
        title: "Discours indirect: dire que / demander si",
        headers: ["Direct", "Indirect", "Changement"],
        rows: [
          ["«Je suis fatigué»", "Il a dit qu'il était fatigué.", "présent → imparfait"],
          ["«Je viendrai»", "Elle a dit qu'elle viendrait.", "futur → conditionnel"],
          ["«Tu viens ?»", "Il m'a demandé si je venais.", "question si → imparfait"],
          ["«J'ai fini»", "Il a dit qu'il avait fini.", "PC → plus-que-parfait"],
          ["demander + pronom", "Je lui ai demandé.", "dire à qqn → lui"],
        ],
        note: "La concordancia de tiempos francesa recula un paso: présent→imparfait, futur→conditionnel, passé composé→plus-que-parfait. Las preguntas sí/no se reportan con «si» (igual que el español «si»). «Je LUI ai demandé» = le pregunté (à + persona → lui).",
      },
    ],
    moreExamples: [
      { it: "Elle a annoncé que la réunion était annulée.", es: "Anunció que la reunión estaba cancelada." },
      { it: "Il m'a demandé si j'avais le temps.", es: "Me preguntó si tenía tiempo." },
      { it: "Ils ont dit qu'ils arriveraient tard.", es: "Dijeron que llegarían tarde." },
    ],
    drills: {
      transform: [
        { q: "Indirect : «Je suis fatigué», a-t-il dit. →", options: ["Il a dit qu'il était fatigué.", "Il a dit qu'il est fatigué.", "Il a dit qu'il a été fatigué."], answer: 0, explain: "présent → imparfait (était)." },
        { q: "Indirect : «Viendras-tu ?» m'a-t-elle demandé. →", options: ["Elle m'a demandé si je viendrais.", "Elle m'a demandé si je viens.", "Elle m'a demandé que je vienne."], answer: 0, explain: "futur → conditionnel (viendrais); pregunta → si." },
      ],
      errors: [
        { q: "Corrige : «Elle m'a dit que elle viendra.»", options: ["Elle m'a dit qu'elle viendrait.", "Elle m'a dit qu'elle viendra demain sûr.", "Elle me dit que elle viendrait hier."], answer: 0, explain: "que (elisión) + futur→conditionnel: viendrait." },
      ],
    },
  },
  "fr-cu-b1-07": {
    tables: [
      {
        title: "Relatifs: qui, que, où, dont",
        headers: ["Relatif", "Fonction", "Exemple"],
        rows: [
          ["qui", "SUJET (persona o cosa)", "le prof qui explique"],
          ["que", "COD (objeto directo)", "le livre que je lis"],
          ["où", "lieu / temps", "le café où on s'est vus · le jour où"],
          ["dont", "complément avec DE", "le film dont je parle"],
          ["✗", "«que» como sujeto", "le prof que explique ✗ → qui"],
        ],
        note: "La prueba del algodón: si después del relativo hay VERBO sin sujeto → qui (le prof qui explique); si hay sujeto+verbo → que (le livre que JE LIS). dont = «del/de la que»: le film DONT je parle = la película DE LA QUE hablo (con «de» escondido).",
      },
    ],
    moreExamples: [
      { it: "C'est le restaurant dont tout le monde parle.", es: "Es el restaurante del que todo el mundo habla." },
      { it: "La ville où je suis né a changé.", es: "La ciudad donde nací ha cambiado." },
      { it: "Le collègue qui remplace Marc est sympa.", es: "El colega que reemplaza a Marcos es simpático." },
    ],
    drills: {
      transform: [
        { q: "Choisis : «le livre ___ je lis»", options: ["que", "qui", "dont"], answer: 0, explain: "hay sujeto (je) + verbo → COD: que." },
        { q: "Choisis : «le film ___ je parle» (parler DE)", options: ["dont", "que", "où"], answer: 0, explain: "parler DE + cosa → dont." },
      ],
      errors: [
        { q: "Corrige : «le prof que explique la leçon.»", options: ["le prof qui explique la leçon.", "le prof dont explique la leçon.", "le prof où explique la leçon."], answer: 0, explain: "Sujeto del verbo explicar → qui." },
      ],
    },
  },
  "fr-cu-b1-08": {
    tables: [
      {
        title: "Cause et conséquence",
        headers: ["Linker", "Structure", "Exemple"],
        rows: [
          ["parce que + phrase", "causa (respuesta)", "Je reste parce qu'il pleut."],
          ["à cause de + nom (négatif)", "por culpa de", "À cause du retard, j'ai raté le train."],
          ["grâce à + nom (positif)", "gracias a", "Grâce à toi, j'ai réussi."],
          ["donc", "consecuencia (conclusión)", "Il pleut, donc je reste."],
          ["car + phrase", "porque (explicación)", "Je reste, car il pleut."],
        ],
        note: "El francés separa la culpa de la gracia: à cause de = por culpa de (negativo); grâce à = gracias a (positivo). parce que responde «¿por qué?»; car explica en segunda posición, más elegante. donc = luego/pues, conclusión.",
      },
    ],
    moreExamples: [
      { it: "Grâce au nouveau tram, tout est plus simple.", es: "Gracias al nuevo tranvía, todo es más simple." },
      { it: "À cause de la grève, la ligne 4 est fermée.", es: "Por culpa de la huelga, la línea 4 está cerrada." },
      { it: "Il était malade, donc il n'est pas venu.", es: "Estaba enfermo, así que no vino." },
    ],
    drills: {
      transform: [
        { q: "Choisis : «___ ton aide, j'ai tout compris.» (positivo)", options: ["Grâce à", "À cause de", "Parce que"], answer: 0, explain: "ayuda positiva → grâce à." },
        { q: "Choisis : «Je reste ___ il pleut.» (respuesta directa)", options: ["parce que", "grâce à", "donc"], answer: 0, explain: "respuesta al porqué → parce que + oración." },
      ],
      errors: [
        { q: "Corrige : «Grâce à la grève, j'ai raté mon train.»", options: ["À cause de la grève, j'ai raté mon train.", "Grâce à la grève raté, j'ai train.", "Parce que la grève, raté train."], answer: 0, explain: "consecuencia negativa → à cause de." },
      ],
    },
  },
  "fr-cu-b1-09": {
    tables: [
      {
        title: "Se présenter: parcours + venir de",
        headers: ["Outil", "Formule", "Exemple"],
        rows: [
          ["venir de + inf. (passé récent)", "acaba de + inf.", "Je viens de terminer un master."],
          ["depuis…, je + présent", "trayectoria continua", "Depuis trois ans, je gère des projets."],
          ["avoir + durée + d'expérience", "experiencia", "J'ai cinq ans d'expérience."],
          ["compétences: gérer, mener, coordonner", "verbos de gestión", "J'ai coordonné une équipe de huit."],
          ["en charge de", "responsable de", "Je suis en charge du secteur sud."],
        ],
        note: "El passé récent «venir de + infinitivo» = «acabar de»: je viens DE terminer = acabo de terminar (¡ojo, DE sin contracción con verbo!). El CV francés evita «j'ai aidé»: gérer, mener, coordonner, être en charge de — verbos de responsabilidad.",
      },
    ],
    moreExamples: [
      { it: "Je viens d'obtenir ma certification.", es: "Acabo de obtener mi certificación." },
      { it: "Je suis en charge de la clientèle ibérique.", es: "Estoy a cargo de la clientela ibérica." },
      { it: "J'ai mené trois projets de A à Z.", es: "He liderado tres proyectos de la A a la Z." },
    ],
    drills: {
      transform: [
        { q: "Passé récent : «Je viens ___ ___ (finir) mon master.»", options: ["de finir", "finir", "à finir"], answer: 0, explain: "venir DE + infinitivo (acabo de terminar)." },
        { q: "CV : «Je suis ___ ___ du marketing.» (a cargo)", options: ["en charge", "au charge", "en chargé"], answer: 0, explain: "être en charge de = estar a cargo de." },
      ],
      errors: [
        { q: "Corrige : «Je viens finir mon master.» (hace un momento)", options: ["Je viens de finir mon master.", "Je viens à finir mon master.", "Je viens le finir master."], answer: 0, explain: "acaba de ocurrir → venir DE + infinitivo." },
      ],
    },
  },
  "fr-cu-b1-10": {
    tables: [
      {
        title: "La voix passive",
        headers: ["Temps", "Formule", "Exemple"],
        rows: [
          ["présent", "est/sont + participe", "Le pont est visité par des millions."],
          ["passé composé", "a été + participe", "La loi a été adoptée hier."],
          ["agent", "par + auteur", "écrit par Camus"],
          ["passif impersonnel", "il est dit que…", "Il est dit que le vin est bon pour le cœur."],
          ["sens", "el foco en el objeto", "La tour est gardée (par qui? peu importe)"],
        ],
        note: "La pasiva francesa es gemela de la española: être + participio (es adoptada = est adoptée). El agente con «par»: écrit PAR Camus. El participio concuerda: la loi a été adoptéE (femenina). El francés científico y periodístico la adora.",
      },
    ],
    moreExamples: [
      { it: "Le vaccin a été développé en un temps record.", es: "La vacuna fue desarrollada en tiempo récord." },
      { it: "Ces fromages sont affinés dans des caves.", es: "Estos quesos son añejados en bodegas." },
      { it: "Le vol a été annulé par la compagnie.", es: "El vuelo fue cancelado por la compañía." },
    ],
    drills: {
      transform: [
        { q: "Passif : «La loi ___ ___ ___ (adopter) hier.»", options: ["a été adoptée", "est adopté", "a adoptée"], answer: 0, explain: "passé composé pasivo: a été + adoptée (f.)." },
        { q: "Passivise : «Camus a écrit ce livre.»", options: ["Ce livre a été écrit par Camus.", "Ce livre est écrit de Camus.", "Ce livre a écrit par Camus."], answer: 0, explain: "a été + escrit + PAR + autor." },
      ],
      errors: [
        { q: "Corrige : «La décision a été annoncé hier.» (la décision)", options: ["La décision a été annoncée hier.", "La décision a annoncée hier été.", "La décision est annoncé hier."], answer: 0, explain: "décision femenina → annoncée (con -e)." },
      ],
    },
  },
  "fr-cu-b1-11": {
    tables: [
      {
        title: "Le subjonctif présent · los disparadores",
        headers: ["Déclencheur", "Structure", "Exemple"],
        rows: [
          ["il faut que", "il faut que + subj.", "Il faut qu'on parte."],
          ["vouloir que", "voudrais que + subj.", "Je voudrais que tu viennes."],
          ["être content/triste que", "émotion + subj.", "Je suis content que tu sois là."],
          ["bien que / pour que / avant que", "conjunción + subj.", "avant qu'il parte"],
          ["espérer que (¡excepción!)", "espérer que + INDICATIF", "J'espère que tu vas bien."],
        ],
        note: "La regla de las 3 palabras clave: WISH — Will (vouloir que), Emotion (être content que), Skepticism/doubt (bien que, avant que). Espérer es la EXCEPCIÓN que confunde a todos: j'espère que tu VAS bien (indicativo) — querer que sí, esperar que ¡no!",
      },
    ],
    moreExamples: [
      { it: "Je veux que tu saches la vérité.", es: "Quiero que sepas la verdad. (subj)" },
      { it: "Elle est ravie que nous soyons là.", es: "Está encantada de que estemos allí." },
      { it: "Prends un parapluie avant qu'il ne pleuve.", es: "Toma un paraguas antes de que llueva. (ne explétif)" },
    ],
    drills: {
      transform: [
        { q: "Subjonctif : «Il faut qu'on ___ (partir).»", options: ["parte", "part", "partons"], answer: 0, explain: "il faut que + subjuntivo: parte (3ª plural = base)." },
        { q: "Choisis le mode : «J'espère que tu ___ (aller) bien.»", options: ["vas", "ailles", "iras bien peut-être"], answer: 0, explain: "espérer que + INDICATIVO: vas (excepción)." },
      ],
      errors: [
        { q: "Corrige : «Je veux que tu sais la vérité.»", options: ["Je veux que tu saches la vérité.", "Je veux que tu vas savoir la vérité.", "Je veux que tu sauras vérité."], answer: 0, explain: "vouloir que + subjuntivo: saches." },
      ],
    },
  },
  "fr-cu-b1-12": {
    tables: [
      {
        title: "Connecteurs argumentatifs",
        headers: ["Connecteur", "Fonction", "Exemple"],
        rows: [
          ["d'une part… d'autre part", "por un lado… por otro", "D'une part c'est cher, d'autre part c'est loin."],
          ["en revanche", "en cambio (contraste)", "Le nord est froid; en revanche, le sud…"],
          ["par ailleurs", "por otra parte (añade)", "Par ailleurs, le coût a augmenté."],
          ["en effet", "en efecto (confirma)", "C'est cher, en effet."],
          ["somme toute / tout compte fait", "en suma", "Somme toute, ça vaut le coup."],
        ],
        note: "La caja de herramientas del ensayo: d'une part…d'autre part abre el debate; en revanche opone; par ailleurs suma; en effet confirma; somme toute cierra. «En revanche» NO es «en revancha» española — es «en cambio», falso amigo del día.",
      },
    ],
    moreExamples: [
      { it: "En revanche, le service était impeccable.", es: "En cambio, el servicio fue impecable." },
      { it: "Par ailleurs, la demande a doublé.", es: "Por otra parte, la demanda se duplicó." },
      { it: "Tout compte fait, je recommande l'endroit.", es: "Considerándolo todo, recomiendo el lugar." },
    ],
    drills: {
      transform: [
        { q: "Oppose : «Le nord est froid; ___ le sud est doux.»", options: ["en revanche", "en effet", "d'ailleurs"], answer: 0, explain: "contraste → en revanche (en cambio)." },
        { q: "Conclus : «___ , ça vaut le voyage.»", options: ["Somme toute", "D'une part", "En effet"], answer: 0, explain: "somme toute = en suma, cierre." },
      ],
      errors: [
        { q: "Corrige : «En revanche de mon ami, j'ai payé.» (falso amigo)", options: ["En échange, mon ami a payé.", "En revanche, mon ami a payé.", "À la revanche de mon ami payé."], answer: 0, explain: "«en revanche» = en cambio, NO revancha; para un intercambio: en échange." },
      ],
    },
  },
};
