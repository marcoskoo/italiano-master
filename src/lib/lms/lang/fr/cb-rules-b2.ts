import type { CbGrammarPack } from "../cb-rules";

/* ═══ FR B2 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════ */

export const FR_CB_RULES_B2: Record<string, CbGrammarPack> = {
  "fr-cu-b2-01": {
    tables: [
      {
        title: "Articulateurs du discours",
        headers: ["Articulateur", "Position", "Exemple"],
        rows: [
          ["tout d'abord", "abre", "Tout d'abord, examinons les faits."],
          ["en outre / de surcroît", "añade (formal)", "En outre, les coûts ont chuté."],
          ["par ailleurs", "añade (otro plano)", "Par ailleurs, la demande a bougé."],
          ["dès lors / par conséquent", "deduce", "Dès lors, la question se pose."],
          ["en somme / en définitive", "cierra", "En somme, le bilan est positif."],
        ],
        note: "La escalera formal: tout d'abord → en outre → par ailleurs → dès lors → en somme. «En outre» = además (muy escrito); «de surcroît» es aún más elegante. La puntuación francesa exige coma tras el articulador — sin coma, no articula.",
      },
    ],
    moreExamples: [
      { it: "Tout d'abord, rappelons le contexte.", es: "Ante todo, recordemos el contexto." },
      { it: "Dès lors, deux scénarios sont possibles.", es: "Por consiguiente, dos escenarios son posibles." },
      { it: "En définitive, le choix nous appartient.", es: "En definitiva, la elección nos pertenece." },
    ],
    drills: {
      transform: [
        { q: "Choisis : «___ , les ventes ont augmenté de 12 %.» (además, formal)", options: ["En outre", "En somme", "Tout d'abord"], answer: 0, explain: "en outre = además (añade argumento)." },
        { q: "Déduis : «Les coûts ont chuté; ___ la marge s'améliore.»", options: ["dès lors", "en outre", "par ailleurs"], answer: 0, explain: "consecuencia lógica → dès lors." },
      ],
      errors: [
        { q: "Corrige : «Tout d'abord les coûts. En outre tout d'abord la marge.»", options: ["Tout d'abord les coûts; ensuite la marge.", "En outre d'abord tout les coûts marge.", "Tout d'abord les coûts en outre d'abord."], answer: 0, explain: "No se apilan articuladores de apertura: tout d'abord abre UNA vez, luego ensuite/en outre." },
      ],
    },
  },
  "fr-cu-b2-02": {
    tables: [
      {
        title: "Nominalisation + subjonctif des locutions",
        headers: ["Verbal", "Nominal", "Español"],
        rows: [
          ["Le gouvernement a réduit les dépenses.", "la réduction des dépenses", "la reducción del gasto"],
          ["On a mis en œuvre la réforme.", "la mise en œuvre de la réforme", "la puesta en marcha"],
          ["bien que + subj.", "bien qu'il soit tard", "aunque sea tarde"],
          ["pour que + subj.", "pour que chacun comprenne", "para que cada cual entienda"],
          ["avant que + subj. (ne explétif)", "avant qu'il ne parte", "antes de que se vaya"],
        ],
        note: "La nominalización francesa convierte verbos en sustantivos de dossier: mise en œuvre, réduction, hausse. Y las locuciones concessivas/finales exigen subjuntivo: bien que ce SOIT, pour qu'il VIENNE. El «ne explétif» (avant qu'il NE parte) es un ne de elegancia — sin valor negativo.",
      },
    ],
    moreExamples: [
      { it: "La mise en place du dispositif prendra un mois.", es: "La puesta en marcha del dispositivo tomará un mes." },
      { it: "Bien que le budget soit serré, on continue.", es: "Aunque el presupuesto sea ajustado, continuamos." },
      { it: "Il est parti avant que nous ne puissions répondre.", es: "Se fue antes de que pudiéramos responder." },
    ],
    drills: {
      transform: [
        { q: "Nominalise : «On a augmenté les tarifs.» →", options: ["l'augmentation des tarifs", "l'augmenter des tarifs", "les tarifs' augmentation"], answer: 0, explain: "augmenter → augmentation + de." },
        { q: "Subjonctif : «pour que chacun ___ (comprendre).»", options: ["comprenne", "comprend", "comprendra"], answer: 0, explain: "pour que + subjuntivo: comprenne." },
      ],
      errors: [
        { q: "Corrige : «Bien que le budget est serré, on continue.»", options: ["Bien que le budget soit serré, on continue.", "Bien que le budget sera serré, on continue.", "Bien que le budget serré est, on continue."], answer: 0, explain: "bien que + subjuntivo: soit." },
      ],
    },
  },
  "fr-cu-b2-03": {
    tables: [
      {
        title: "Hypothèse irréelle du passé",
        headers: ["Clause", "Forme", "Exemple"],
        rows: [
          ["si + plus-que-parfait", "si j'avais su / si j'étais allé", "Si j'avais su…"],
          ["résultat: conditionnel passé", "j'aurais fait / je serais allé", "…je serais venu."],
          ["regret", "j'aurais dû + inf.", "J'aurais dû t'écouter."],
          ["reproche", "tu n'aurais pas dû + inf.", "Tu n'aurais pas dû dire ça."],
          ["variante parlée", "si j'aurais su (familier ✗ écrit)", "→ si j'avais su"],
        ],
        note: "«Si hubiera sabido, habría venido» = si j'avais su, je serais venu — calco exacto del pluscuamperfecto de subjuntivo español. La forma hablada «si j'aurais su» existe en la calle pero está proscrita en escritura. El reproche elegante: «tu n'aurais pas dû».",
      },
    ],
    moreExamples: [
      { it: "Si tu m'avais prévenu, j'aurais annulé mes projets.", es: "Si me hubieras avisado, habría anulado mis planes." },
      { it: "On n'aurait jamais dû accepter ce marché.", es: "Nunca deberíamos haber aceptado ese trato." },
      { it: "Elle serait restée si le salaire avait suivi.", es: "Ella se habría quedado si el salario hubiera seguido." },
    ],
    drills: {
      transform: [
        { q: "Complète : «Si j'avais su, je ___ ___ venu.» (ser)", options: ["serais", "serai", "étais"], answer: 0, explain: "resultado → conditionnel passé: je serais venu." },
        { q: "Regret : «J'___ ___ t'écouter.» (devoir)", options: ["aurais dû", "avais dû", "aurai dû"], answer: 0, explain: "aurais dû + infinitivo = debería haber." },
      ],
      errors: [
        { q: "Corrige : «Si j'aurais su, je serais venu.» (escrito)", options: ["Si j'avais su, je serais venu.", "Si j'ai su, je serais venu.", "Si je saurais, j'étais venu."], answer: 0, explain: "si + plus-que-parfait (jamás conditionnel en escrito)." },
      ],
    },
  },
  "fr-cu-b2-04": {
    tables: [
      {
        title: "Discours indirect au passé · la cascade",
        headers: ["Direct", "Indirect (passé)", "Règle"],
        rows: [
          ["«Je pars» → présent", "il a dit qu'il partait", "présent → imparfait"],
          ["«Je partirai» → futur", "elle a dit qu'elle partirait", "futur → conditionnel"],
          ["«J'ai fini» → PC", "il a dit qu'il avait fini", "PC → plus-que-parfait"],
          ["«J'avais fini» → PQP", "il a dit qu'il avait eu fini…", "PQP se mantiene (rare)"],
          ["commande", "il m'a dit de venir", "de + infinitif"],
        ],
        note: "La cascada de la concordancia: cada tiempo retrocede un escalón. Las órdenes indirectas usan «de + infinitivo»: «il m'a dit DE venir» = me dijo que viniera. Preguntas con «si» (sí/no) o con el interrogativo conservado (quand, pourquoi).",
      },
    ],
    moreExamples: [
      { it: "Il a promis qu'il rappellerait le lendemain.", es: "Prometió que llamaría al día siguiente." },
      { it: "Elle m'a demandé de patienter.", es: "Me pidió que esperara. (de + infinitivo)" },
      { it: "Ils ont expliqué pourquoi ils avaient refusé.", es: "Explicaron por qué habían rechazado." },
    ],
    drills: {
      transform: [
        { q: "Indirect : «Je viendrai demain», a-t-elle dit. →", options: ["Elle a dit qu'elle viendrait le lendemain.", "Elle a dit qu'elle viendra demain.", "Elle a dit qu'elle vient lendemain."], answer: 0, explain: "futur→conditionnel; demain→le lendemain." },
        { q: "Ordre indirect : «Attends !» m'a-t-il dit. →", options: ["Il m'a dit d'attendre.", "Il m'a dit que j'attends.", "Il m'a dit attendre je."], answer: 0, explain: "orden indirecta = de + infinitivo." },
      ],
      errors: [
        { q: "Corrige : «Il a dit que il viendra demain.»", options: ["Il a dit qu'il viendrait le lendemain.", "Il a dit qu'il viendra demain hier.", "Il a dit que lui viendra lendemain."], answer: 0, explain: "Elisión que + futur→conditionnel + demain→le lendemain." },
      ],
    },
  },
  "fr-cu-b2-05": {
    tables: [
      {
        title: "La concession · quatre outils",
        headers: ["Outil", "Structure", "Exemple"],
        rows: [
          ["bien que + subj.", "bien qu'il soit cher", "aunque sea caro"],
          ["malgré + nom", "malgré le prix", "a pesar del precio"],
          ["quoique + subj.", "quoique ce soit difficile", "aunque sea difícil (literario)"],
          ["certes… mais", "Certes, c'est cher, mais…", "cierto que es caro, pero…"],
          ["sans que + subj.", "sans qu'on le demande", "sin que se pida"],
        ],
        note: "La concesión francesa tiene cuatro niveles: bien que + subjuntivo (aunque), malgré + SUSTANTIVO (a pesar del), quoique (variante literaria) y el par certes…mais (cierto… pero) que concede antes de girar. «Malgré que» (calco de «a pesar de que») existe en el habla pero se evita en escritura.",
      },
    ],
    moreExamples: [
      { it: "Malgré la pluie, la foule était là.", es: "A pesar de la lluvia, la multitud estaba allí." },
      { it: "Certes, l'addition est salée, mais le repas vaut le détour.", es: "Cierto que la cuenta es salada, pero la comida vale la pena." },
      { it: "Il est parti sans que personne ne le remarque.", es: "Se fue sin que nadie lo notara." },
    ],
    drills: {
      transform: [
        { q: "Choisis : «___ le retard, on a commencé.» (con sustantivo)", options: ["Malgré", "Bien que", "Quoique"], answer: 0, explain: "malgré + sustantivo (le retard)." },
        { q: "Subjonctif : «Bien qu'il ___ (être) tard, on continue.»", options: ["soit", "est", "sera"], answer: 0, explain: "bien que + subjuntivo: soit." },
      ],
      errors: [
        { q: "Corrige : «Bien que le retard, on a commencé.»", options: ["Bien que le retard soit là, on a commencé.", "Bien que le retard, on a commencé hier.", "Malgré bien que le retard on commencé."], answer: 0, explain: "bien que + ORACIÓN con subjuntivo; para sustantivo: malgré le retard." },
      ],
    },
  },
  "fr-cu-b2-06": {
    tables: [
      {
        title: "Second degré, atténuation, euphémismes",
        headers: ["Outil", "Littéral", "Réel"],
        rows: [
          ["pas mal (du tout)", "no está mal", "está muy bien"],
          ["c'est pas terrible", "no es terrible", "es bastante flojo"],
          ["je ne suis pas contre", "no estoy en contra", "me parece bien"],
          ["il y a mieux", "hay mejor", "no me gusta"],
          ["conditionnel d'atténuation", "je dirais que…", "digo que… (con cuidado)"],
        ],
        note: "El «second degré» francés dice menos para significar más: «pas mal» = bravo; «c'est pas terrible» = malo. La ironía de salón parisino — el antónimo literal. Y el condicional de atenuación (je dirais, on pourrait) es la corbata de cualquier opinión en la oficina.",
      },
    ],
    moreExamples: [
      { it: "Alors ça, c'est pas mal du tout !", es: "¡Vaya, eso no está nada mal! (= ¡está muy bien!)" },
      { it: "Le film est… comment dire… pas indispensable.", es: "La película es… cómo decirlo… no imprescindible." },
      { it: "On pourrait peut-être envisager une autre piste.", es: "Podríamos quizá considerar otra pista. (atenuación)" },
    ],
    drills: {
      transform: [
        { q: "Décode : «C'est pas terrible, ce resto.» =", options: ["Está flojo.", "Está increíble.", "Es terrible."], answer: 0, explain: "pas terrible = eufemismo negativo: flojo." },
        { q: "Aténue : «Ton plan est mauvais.» (bureau)", options: ["On pourrait peut-être revoir le plan.", "Ton plan est très mauvais !", "Je déteste ton plan !"], answer: 0, explain: "condicional + peut-être = crítica con guantes." },
      ],
      errors: [
        { q: "Interprète : «Pas mal !» après une performance =", options: ["Éloge (está muy bien)", "Insulte", "Neutral: la mediocridad"], answer: 0, explain: "En contexto positivo, «pas mal» es aplauso atenuado." },
      ],
    },
  },
  "fr-cu-b2-07": {
    tables: [
      {
        title: "La restriction: ne… que, seulement, à peine",
        headers: ["Structure", "Sens", "Exemple"],
        rows: [
          ["ne… que", "solo (limitación)", "Je ne mange que le soir."],
          ["ne… pas encore", "todavía no", "Il n'est pas encore arrivé."],
          ["seulement / uniquement", "solamente", "Uniquement sur rendez-vous."],
          ["du moins", "al menos (rectifica)", "Du moins, c'est ce qu'il dit."],
          ["à peine + inversion", "apenas… cuando", "À peine assis, il a rappelé."],
        ],
        note: "«ne…que» es el «no…más que» español: ne + verbo + que = SOLO («no como más que por la noche» → je ne mange QUE le soir). Con «à peine», la inversión literaria: «à peine assis» = apenas se sentó. Y «du moins» rectifica lo anterior: al menos eso dice.",
      },
    ],
    moreExamples: [
      { it: "Elle ne parle qu'avec les clients importants.", es: "Solo habla con los clientes importantes. (ne…qu')" },
      { it: "À peine arrivée, elle a repris le dossier.", es: "Apenas llegada, retomó el expediente." },
      { it: "Ouvert uniquement le matin.", es: "Abierto únicamente por la mañana." },
    ],
    drills: {
      transform: [
        { q: "Restreins : «Je mange seulement le soir.» (avec ne…que)", options: ["Je ne mange que le soir.", "Je ne mange que seulement le soir.", "Je ne que mange le soir."], answer: 0, explain: "ne + verbo + que = solo." },
        { q: "Traduis : «apenas salió, llamó»", options: ["À peine sorti, il a appelé.", "À peine il est sorti, appelé.", "Peut sorti, il a appelé."], answer: 0, explain: "à peine + participio + oración." },
      ],
      errors: [
        { q: "Corrige : «Je ne mange que seulement le soir.»", options: ["Je ne mange que le soir.", "Je mange que le soir seulement que.", "Je ne que seulement mange soir."], answer: 0, explain: "ne…que YA significa solo: no se apila con seulement." },
      ],
    },
  },
  "fr-cu-b2-08": {
    tables: [
      {
        title: "Passive étendue + mise en relief (c'est… que)",
        headers: ["Structure", "Exemple", "Espagnol"],
        rows: [
          ["être + participe + par", "signé par le notaire", "firmado por el notario"],
          ["se faire + inf. (sens passif)", "il s'est fait avoir", "se dejaron engañar"],
          ["c'est X qui…", "C'est elle qui décide.", "es ella quien decide"],
          ["c'est X que…", "C'est ça que je veux.", "eso es lo que quiero"],
          ["c'est en/à/dans X que…", "C'est à Lyon que tout a commencé.", "fue en Lyon donde todo empezó"],
        ],
        note: "La mise en relief francesa cliva la frase como el inglés: c'est + foco + qui/que. «C'est À LYON que tout a commencé» = fue en Lyon donde todo empezó. Qui para personas-sujeto, que para todo lo demás. La pasiva con «se faire» es coloquial: «s'est fait avoir» = se dejaron timar.",
      },
    ],
    moreExamples: [
      { it: "C'est lui qui a signé le contrat.", es: "Es él quien firmó el contrato." },
      { it: "C'est ce que je disais !", es: "¡Eso es lo que decía!" },
      { it: "Elle s'est fait voler son sac.", es: "Le robaron su bolso. (se faire + voler)" },
    ],
    drills: {
      transform: [
        { q: "Clive : «Elle décide.» (foco: elle)", options: ["C'est elle qui décide.", "C'est elle que décide.", "Elle c'est qui décide."], answer: 0, explain: "persona sujeto → c'est… qui." },
        { q: "Clive : «Je veux ça.» (foco: ça)", options: ["C'est ça que je veux.", "C'est ça qui je veux.", "Ça c'est je veux que."], answer: 0, explain: "objeto → c'est… que." },
      ],
      errors: [
        { q: "Corrige : «C'est elle que décide.»", options: ["C'est elle qui décide.", "C'est elle quoi décide.", "Elle que c'est décide."], answer: 0, explain: "Sujeto persona → qui (nunca que)." },
      ],
    },
  },
  "fr-cu-b2-09": {
    tables: [
      {
        title: "La lettre formelle · rituel",
        headers: ["Bloc", "Formule", "Exemple"],
        rows: [
          ["appel", "Madame, Monsieur,", "quando se desconoce el nombre"],
          ["ouverture", "Je me permets de vous écrire…", "me tomo la libertad de escribirle"],
          ["objet", "l'objet de ma lettre est…", "el objeto de mi carta es…"],
          ["demande", "Je vous saurais gré de…", "le agradecería que…"],
          ["clôture", "Je vous prie d'agréer…", "le ruego aceptar mis saludos"],
        ],
        note: "La carta formal francesa es un ritual codificado: «Je vous prie d'agréer, Madame, l'expression de mes salutations distinguées» — 14 palabras para decir «saludos». «Je vous saurais gré de» = condicional de cortesía máxima para pedir. Copiar el molde es la clave: la originalidad aquí es un error.",
      },
    ],
    moreExamples: [
      { it: "Dans l'attente de votre réponse, je vous…", es: "En espera de su respuesta, le…" },
      { it: "Je vous saurais gré de bien vouloir examiner ma demande.", es: "Le agradecería que quisiera examinar mi solicitud." },
      { it: "Veuillez trouver ci-joint mon CV.", es: "Encuentre adjunto mi CV." },
    ],
    drills: {
      transform: [
        { q: "Formule la demande : «J'attends votre réponse rapide.» (cortesía)", options: ["Je vous saurais gré de me répondre rapidement.", "Répondez vite, s'il vous plaît.", "Je veux une réponse rapide maintenant."], answer: 0, explain: "je vous saurais gré de + infinitivo." },
        { q: "Appel correcto (destinatario desconocido):", options: ["Madame, Monsieur,", "Cher Monsieur inconnu,", "Salut l'équipe,"], answer: 0, explain: "Madame, Monsieur, — el estándar formal." },
      ],
      errors: [
        { q: "Corrige : «Je vous prie de agréer mes salutations.»", options: ["Je vous prie d'agréer mes salutations.", "Je vous prie à agréer mes salutations.", "Je vous pries d'agréer salutations."], answer: 0, explain: "prier D'agréer (elisión de de + a)." },
      ],
    },
  },
  "fr-cu-b2-10": {
    tables: [
      {
        title: "La réfutation élégante",
        headers: ["Mouvement", "Formule", "Exemple"],
        rows: [
          ["concede", "certes / il est vrai que", "Certes, le projet coûte cher."],
          ["concede con subj.", "en admettant que + subj.", "En admettant que ce soit vrai…"],
          ["pivot", "cependant / néanmoins / toutefois", "…, toutefois, le gain est réel."],
          ["nuance", "reste à savoir si…", "Reste à savoir si cela suffit."],
          ["conclut", "force est de constater que…", "Force est de constater qu'il a échoué."],
        ],
        note: "La refutación elegante: concede (certes…), gira (toutefois…) y remata (force est de constater…). «En admettant que» + subjuntivo = admitiendo que sea. «Force est de constater» = hay que constatar — el mazo de terciopelo del ensayo francés.",
      },
    ],
    moreExamples: [
      { it: "Néanmoins, les résultats parlent d'eux-mêmes.", es: "No obstante, los resultados hablan por sí solos." },
      { it: "En admettant que le coût baisse, le délai reste serré.", es: "Admitiendo que el costo baje, el plazo sigue ajustado." },
      { it: "Reste à savoir si le public suivra.", es: "Queda por saber si el público seguirá." },
    ],
    drills: {
      transform: [
        { q: "Concède : «___ , le projet coûte cher. Toutefois…»", options: ["Certes", "Certes que si", "Certainement pas"], answer: 0, explain: "certes abre la concesión." },
        { q: "Subjonctif : «En admettant que ce ___ (être) vrai…»", options: ["soit", "est", "sera"], answer: 0, explain: "en admettant que + subjuntivo: soit." },
      ],
      errors: [
        { q: "Corrige : «En admettant que c'est vrai, toutefois ça change rien.»", options: ["En admettant que ce soit vrai, cela ne change rien.", "En admettant que c'est vrai, certes rien change.", "En admis que c'est vrai, rien change toutefois."], answer: 0, explain: "subjuntivo (soit) + registro (cela ne change rien)." },
      ],
    },
  },
  "fr-cu-b2-11": {
    tables: [
      {
        title: "Le français de réunion",
        headers: ["Intention", "Formule", "Exemple"],
        rows: [
          ["faire le point", "situarse", "Commençons par faire le point."],
          ["acter", "acordar (neologismo de oficina)", "On acte la décision."],
          ["proposer", "je propose que + subj.", "Je propose qu'on avance la date."],
          ["reformuler", "si je comprends bien…", "Si je comprends bien, on reporte ?"],
          ["conclure", "on peut considérer que…", "On peut considérer le sujet clos."],
        ],
        note: "«Acter» es el verbo estrella de las reuniones francesas: «on acte» = queda acordado (antes era solo jurídico). «Je propose que» + subjuntivo: propose qu'on AVANCE. Y «faire le point» = hacer balance/situarse — la frase que abre toda reunión gala.",
      },
    ],
    moreExamples: [
      { it: "On peut considérer que le sujet est clos.", es: "Podemos considerar el tema cerrado." },
      { it: "Je propose qu'on revienne aux chiffres.", es: "Propongo que volvamos a las cifras." },
      { it: "Avant de conclure, faisons le point.", es: "Antes de concluir, hagamos balance." },
    ],
    drills: {
      transform: [
        { q: "Subjonctif : «Je propose qu'on ___ (avancer) la date.»", options: ["avance", "avance -s", "avancera"], answer: 0, explain: "proposer que + subjuntivo: on avance (base)." },
        { q: "Verbe de réunion : «La décision est prise.» → «On ___ la décision.»", options: ["acte", "actionne", "active"], answer: 0, explain: "on acte = queda acordado (lenguaje de reunión)." },
      ],
      errors: [
        { q: "Corrige : «Je propose qu'on avances la date.»", options: ["Je propose qu'on avance la date.", "Je propose qu'on avancent la date.", "Je propose qu'on avancez la date."], answer: 0, explain: "Subjuntivo 3ª singular: avance (sin -s; -ent es para ils/elles: avancent)." },
      ],
    },
  },
  "fr-cu-b2-12": {
    tables: [
      {
        title: "La rhétorique du plaidoyer",
        headers: ["Partie", "Outil", "Exemple"],
        rows: [
          ["exorde (accroche)", "Mesdames, messieurs…", "apertura solemne"],
          ["exposé", "d'abord… ensuite… enfin", "estructura ternaria"],
          ["argument", "car / en effet / de plus", "encadena pruebas"],
          ["pathos", "comment accepter que… ?", "pregunta retórica"],
          ["péroraison", "il est temps de + inf.", "Il est temps d'agir."],
        ],
        note: "El alegato francés sigue la retórica clásica: exorde (captar), exposé (ordenar con d'abord/ensuite/enfin), argumentación (car, en effet), pathos (la pregunta retórica: «¿cómo aceptar que…?») y péroraison (remate con «il est temps d'agir»). La tríada es la respiración del discurso.",
      },
    ],
    moreExamples: [
      { it: "Comment accepter qu'on nous impose ce silence ?", es: "¿Cómo aceptar que se nos imponga este silencio?" },
      { it: "Il est temps de tourner la page.", es: "Es hora de pasar la página." },
      { it: "Car, en effet, les faits sont têtus.", es: "Porque, en efecto, los hechos son tercos." },
    ],
    drills: {
      transform: [
        { q: "Pathos : «___ ___ qu'on en arrive là ?» (pregunta retórica)", options: ["Comment accepter", "Pourquoi on accepte", "On accepte comment"], answer: 0, explain: "comment accepter que + subjuntivo = indignación elegante." },
        { q: "Péroraison : «Il est ___ d'agir.»", options: ["temps", "heure de l'heure", "moment le"], answer: 0, explain: "il est temps de + infinitivo." },
      ],
      errors: [
        { q: "Corrige : «Il est temps de qu'on agisse.»", options: ["Il est temps d'agir.", "Il est temps que on agisse.", "Il est temps qu'agir on."], answer: 0, explain: "il est temps DE + infinitivo (para subjuntivo: il est temps QU'on agisse)." },
      ],
    },
  },
};
