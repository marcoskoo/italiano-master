import type { CbGrammarPack } from "../cb-rules";

/* ═══ FR C1 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════ */

export const FR_CB_RULES_C1: Record<string, CbGrammarPack> = {
  "fr-cu-c1-01": {
    tables: [
      {
        title: "Reformulation: trois leviers",
        headers: ["Levier", "Opération", "Exemple"],
        rows: [
          ["sinonimia", "échanger le mot", "un problème → une difficulté"],
          ["nominalisation", "verbe → nom", "on a réduit → la réduction"],
          ["changement de voix", "actif ↔ passif", "on a constaté → il a été constaté"],
          ["montée lexicale", "spécifique → général", "un frigo → un appareil de froid"],
          ["anaphore de liaison", "reprendre le mot-clé", "… cette réduction, justement, …"],
        ],
        note: "Parafrasear a la francesa = tres palancas: sinónimo, nominalización y cambio de voz. La sintesis académica exige «reformuler sans répéter»: la técnica de la «reprise nominale» (cette réduction, cette baisse…) encadena párrafos sin repetir la frase literal — plagio evitado con gramática.",
      },
    ],
    moreExamples: [
      { it: "Cette hausse, précisément, interroge les économistes.", es: "Este aumento, precisamente, cuestiona a los economistas. (reprise nominal)" },
      { it: "Il a été constaté que les ventes progressaient.", es: "Se ha constatado que las ventas progresaban. (pasiva)" },
      { it: "Autrement dit, la marge reste sous pression.", es: "Dicho de otro modo, el margen sigue presionado." },
    ],
    drills: {
      transform: [
        { q: "Nominalise : «On a modernisé l'usine.» →", options: ["la modernisation de l'usine", "le moderniser de l'usine", "l'usine modernisation"], answer: 0, explain: "moderniser → modernisation." },
        { q: "Passe au passif : «On a constaté une baisse.»", options: ["Une baisse a été constatée.", "Une baisse a constaté été.", "Il a une baisse constaté."], answer: 0, explain: "a été + constatéE (femenino)." },
      ],
      errors: [
        { q: "Corrige : «Cette hausse, les économistes il interroge.»", options: ["Cette hausse interroge les économistes.", "Cette hausse est interroge les économistes.", "Il interroge cette hausse les économistes."], answer: 0, explain: "La reprise nominal abre; el sujeto sigue: cette hausse interroge…" },
      ],
    },
  },
  "fr-cu-c1-02": {
    tables: [
      {
        title: "Thèse / antithèse / synthèse",
        headers: ["Mouvement", "Connecteurs", "Exemple"],
        rows: [
          ["thèse", "d'emblée, il apparaît que…", "D'emblée, la thèse libérale séduit."],
          ["antithèse", "or, pourtant, néanmoins", "Or, l'expérience en dit autre."],
          ["nuance", "certes… mais", "Certes efficace, mais à quel prix ?"],
          ["synthèse", "in fine, en définitive", "En définitive, il faut composer."],
          ["opposition de haut vol", "là où… , …", "Là où l'un voit un coût, l'autre voit un pari."],
        ],
        note: "La arquitectura dialéctica francesa: thèse (d'emblée…), antithèse (or… pourtant) y synthèse (en définitive). «Là où l'un voit X, l'autre voit Y» es el molde de oposición elegante — el ensayo C1 lo usa como firma.",
      },
    ],
    moreExamples: [
      { it: "Or, les chiffres racontent une autre histoire.", es: "Pero los números cuentan otra historia." },
      { it: "Là où l'un voit une défaite, l'autre voit un sursaut.", es: "Donde uno ve una derrota, el otro ve un rebrote." },
      { it: "En définitive, le compromis s'impose.", es: "En definitiva, el compromiso se impone." },
    ],
    drills: {
      transform: [
        { q: "Antithèse : «___ , les faux frais grimpent.» (giro)", options: ["Or", "En effet", "De plus"], answer: 0, explain: "or introduce la oposición (pero/ahora bien)." },
        { q: "Opposition : «___ l'un voit un coût, l'autre voit un pari.»", options: ["Là où", "Partout où", "Comme où"], answer: 0, explain: "là où X, Y = molde de oposición." },
      ],
      errors: [
        { q: "Corrige : «D'emblée la thèse séduit. Or l'expérience en dit autre, certes mais.»", options: ["Certes, la thèse séduit; or, l'expérience en dit autre.", "D'emblée or certes la thèse autre.", "Or certes d'emblée en dit autre séduit."], answer: 0, explain: "No se apilan: certes concede, or opone — uno por oración." },
      ],
    },
  },
  "fr-cu-c1-03": {
    tables: [
      {
        title: "Figures de style: anaphore, gradation, triade",
        headers: ["Figure", "Schéma", "Exemple"],
        rows: [
          ["anaphore", "même début ×2+", "Nous voulons du pain. Nous voulons des droits."],
          ["gradation", "croissante", "C'est dommage, c'est grave, c'est inacceptable."],
          ["triade", "trois membres", "du pain, des roses, du temps"],
          ["interrogation rhétorique", "question sans réponse", "Jusqu'où irons-nous ?"],
          ["chiasme", "AB BA", "Il faut manger pour vivre, non pas vivre pour manger."],
        ],
        note: "El discurso francés respira en tres: la tríada (du pain, des roses, du temps), la gradación (dommage → grave → inacceptable) y el quiasmo (comer para vivir, no vivir para comer — Molière). La anáfora («nous voulons… nous voulons…») es el motor del manifiesto.",
      },
    ],
    moreExamples: [
      { it: "Jusqu'où irons-nous, si ce n'est pas nous de décider ?", es: "¿Hasta dónde iremos, si no nos toca decidir?" },
      { it: "C'est déplaisant, c'est inquiétant, c'est intolérable.", es: "Es desagradable, es inquietante, es intolerable. (gradación)" },
      { it: "Vivre pour travailler, ou travailler pour vivre ?", es: "¿Vivir para trabajar, o trabajar para vivir? (quiasmo)" },
    ],
    drills: {
      transform: [
        { q: "Complète la gradation : «C'est dommage, c'est grave, c'est ___.»", options: ["inacceptable", "sympa", "minuscule"], answer: 0, explain: "gradación creciente: el tercer golpe es el más fuerte." },
        { q: "Repère la figure : «Manger pour vivre, non pas vivre pour manger.»", options: ["un chiasme (AB/BA)", "une anaphore", "une litote"], answer: 0, explain: "inversión simétrica = quiasmo." },
      ],
      errors: [
        { q: "Corrige la triade : «du pain, et des roses, et aussi du temps peut-être.»", options: ["du pain, des roses, du temps", "du pain et roses temps aussi", "du pain, puis des roses, puis du temps encore"], answer: 0, explain: "La tríada es asindeton: tres golpes sin conjunciones." },
      ],
    },
  },
  "fr-cu-c1-04": {
    tables: [
      {
        title: "Subjonctif plus-que-parfait + échelles de probabilité",
        headers: ["Degré", "Formule", "Exemple"],
        rows: [
          ["certitude", "il est certain que + ind.", "Il est certain qu'il a menti."],
          ["probabilité", "il est probable que + ind.", "Il est probable qu'elle savait."],
          ["doute", "il est possible que + subj.", "Il est possible qu'il ait agi seul."],
          ["hypothesise sur le passé", "subj. plus-que-parfait", "…qu'il ait eu des complices (rare, écrit)"],
          ["polémique", "il est impensable que + subj.", "Il est impensable qu'ils aient oublié."],
        ],
        note: "Escalera de probabilidad: certain/probable + indicativo; possible/impensable + subjuntivo (qu'il AIT menti). El subjuntivo pluscuamperfecto (qu'il EÛT menti) es C1 escrito — lo reconoces en Proust, no lo usas en la reunión. La duda cambia de modo, la certeza no.",
      },
    ],
    moreExamples: [
      { it: "Il est possible qu'il ait menti depuis le début.", es: "Es posible que haya mentido desde el principio." },
      { it: "Il est certain que les comptes étaient faux.", es: "Es cierto que las cuentas eran falsas. (indicativo)" },
      { it: "Il est impensable qu'elle ait participé.", es: "Es impensable que ella haya participado." },
    ],
    drills: {
      transform: [
        { q: "Choisis le mode : «Il est possible qu'il ___ (avoir) raison.»", options: ["ait", "a", "aura"], answer: 0, explain: "possible que + subjuntivo: ait." },
        { q: "Choisis le mode : «Il est certain qu'elle ___ (savoir).»", options: ["savait", "sache", "saurait"], answer: 0, explain: "certain que + indicativo: savait." },
      ],
      errors: [
        { q: "Corrige : «Il est impensable qu'ils ont oublié.»", options: ["Il est impensable qu'ils aient oublié.", "Il est impensable qu'ils oubliaient hier.", "Il est impensable qu'ils vont oublier déjà."], answer: 0, explain: "impensable que + subjuntivo: aient oublié." },
      ],
    },
  },
  "fr-cu-c1-05": {
    tables: [
      {
        title: "La passive scientifique et la nominalisation technique",
        headers: ["Style", "Exemple", "Effet"],
        rows: [
          ["actif «faux»", "Nous avons chauffé l'échantillon.", "demasiado personal"],
          ["passif", "L'échantillon a été chauffé à 80 °C.", "protocolo objetivo"],
          ["pronominal", "La température s'élève à 80 °C.", "fenómeno autónomo"],
          ["impersonnel", "Il a été observé une réaction.", "peso institucional"],
          ["nominalisé", "Le chauffage de l'échantillon…", "densidad técnica"],
        ],
        note: "El artículo científico francés elimina al experimentador: pasiva (l'échantillon a été chauffé), pronominal (la température S'élève — el fenómeno se hace solo) e impersonal (il a été observé). La nominalización técnica condensa: «le chauffage de l'échantillon» = una frase entera en tres palabras.",
      },
    ],
    moreExamples: [
      { it: "Les mesures ont été répétées trois fois.", es: "Las medidas fueron repetidas tres veces." },
      { it: "La réaction s'est produite à pH neutre.", es: "La reacción se produjo a pH neutro. (se + producir)" },
      { it: "L'analyse des données révèle une corrélation.", es: "El análisis de los datos revela una correlación." },
    ],
    drills: {
      transform: [
        { q: "Passivise : «Nous avons chauffé l'échantillon.»", options: ["L'échantillon a été chauffé.", "L'échantillon s'est chauffé nous.", "Il a l'échantillon chauffé."], answer: 0, explain: "a été + chauffé (protocolo)." },
        { q: "Pronominalise : «La température augmente.»", options: ["La température s'élève.", "La température est élève.", "La température a élève."], answer: 0, explain: "se + verbo: s'élève (fenómeno autónomo)." },
      ],
      errors: [
        { q: "Corrige : «Nous avons conclue que la réaction fut rapide.» (estilo científico)", options: ["Il a été conclu que la réaction était rapide.", "On a conclu que la réaction s'est rapide.", "Il conclut que la réaction est rapide fut."], answer: 0, explain: "Pasiva impersonal + imperfecto: il a été conclu… était." },
      ],
    },
  },
  "fr-cu-c1-06": {
    tables: [
      {
        title: "Rhétorique orale: accroche, plan, pauses",
        headers: ["Moment", "Outil", "Exemple"],
        rows: [
          ["accroche", "question / chiffre choc", "Savez-vous ce que contient votre assiette ?"],
          ["annonce du plan", "en trois temps : d'abord… ensuite… enfin", "Je procéderai en trois temps."],
          ["signposting", "j'en viens à… · cela nous amène à…", "J'en viens au second point."],
          ["pause active", "— et voilà le paradoxe —", "inciso con guiones"],
          ["conclusion", "reprenez l'accroche", "Alors, que contient votre assiette ?"],
        ],
        note: "La conferencia francesa se ancla: accroche (¿saben qué contiene su plato?), plan anunciado en tres tiempos, señalización (j'en viens à…), y el cierre RETOMA la accroche — el círculo retórico. Las pausas marcadas con incisos — voilà le paradoxe — son puntuación hablada.",
      },
    ],
    moreExamples: [
      { it: "J'en viens maintenant aux solutions.", es: "Paso ahora a las soluciones." },
      { it: "Cela nous amène à la question centrale.", es: "Esto nos lleva a la pregunta central." },
      { it: "Et voilà, précisément, tout le paradoxe.", es: "Y he aquí, precisamente, toda la paradoja." },
    ],
    drills: {
      transform: [
        { q: "Signale : «Passo al segundo punto» →", options: ["J'en viens au second point.", "Je viens le second point.", "Je vais deuxième point."], answer: 0, explain: "en venir à: j'en viens au…" },
        { q: "Annonce : «Je vais exposer en trois parties.» (elegante)", options: ["Je procéderai en trois temps.", "Je fais trois parties oui.", "Il y aura trois choses."], answer: 0, explain: "procéder en trois temps = fórmula de conferencia." },
      ],
      errors: [
        { q: "Corrige : «Je viens à la question maintenant en.»", options: ["J'en viens maintenant à la question.", "J'en viens maintenant à la question en.", "Je viens en à maintenant question la."], answer: 0, explain: "El pronombre EN precede al verbo: j'en viens à…" },
      ],
    },
  },
  "fr-cu-c1-07": {
    tables: [
      {
        title: "Les tournures administratives",
        headers: ["Tournure", "Sens courant", "Exemple"],
        rows: [
          ["il appartient à qqn de + inf.", "corresponde a alguien", "Il vous appartient de répondre."],
          ["l'administration est en mesure de", "puede (con pompas)", "Nous sommes en mesure de traiter."],
          ["dans les délais impartis", "en plazo", "répondre dans les délais impartis"],
          ["sous couvert de", "por conducto (reglamentario)", "sous couvert du service compétent"],
          ["je vous prie de trouver ci-dessous", "abajo encontrará", "vous trouverez ci-dessous les pièces"],
        ],
        note: "El francés administrativo es una lengua dentro de la lengua: «il appartient à» (corresponde a), «en mesure de» (en condiciones de), «sous couvert de» (por conducto de). No hay creatividad posible: el ritual protege al funcionario y al usuario. Reconocer = poder responder.",
      },
    ],
    moreExamples: [
      { it: "Il vous appartient de fournir les justificatifs.", es: "Le corresponde a usted aportar los justificantes." },
      { it: "Nous ne sommes pas en mesure de donner suite.", es: "No estamos en condiciones de dar curso." },
      { it: "Votre demande a été transmise au service compétent.", es: "Su solicitud fue remitida al servicio competente." },
    ],
    drills: {
      transform: [
        { q: "Admin : «Corresponde a usted responder.» →", options: ["Il vous appartient de répondre.", "Vous devez répondre administrativement.", "Il faut que vous répondez, monsieur l'admin."], answer: 0, explain: "il appartient à qqn de + infinitivo." },
        { q: "Admin : «Podemos tramitar su solicitud.» →", options: ["Nous sommes en mesure de traiter votre demande.", "On peut traiter votre demande peut-être.", "Nous traitons votre demande, c'est sûr."], answer: 0, explain: "être en mesure de = estar en condiciones de." },
      ],
      errors: [
        { q: "Corrige : «Il vous appartient de répondre dans les délais imbibés.»", options: ["Il vous appartient de répondre dans les délais impartis.", "…dans les délais imparties.", "…dans les délais despartis."], answer: 0, explain: "délais impartis (impartir: concedidos) — no «imbibés» (empapados)." },
      ],
    },
  },
  "fr-cu-c1-08": {
    tables: [
      {
        title: "Questions indirectes, subj. d'opinion, mise en relief",
        headers: ["Structure", "Règle", "Exemple"],
        rows: [
          ["question indirecte", "SIN inversión", "Je me demande quand il viendra. (✗ viendra-t-il)"],
          ["subj. d'opinion (neg.)", "ne pas penser que + subj.", "Je ne crois pas que ce soit juste."],
          ["mise en relief", "c'est… que/qui", "C'est en 1968 que tout a basculé."],
          ["ce qui / ce que", "lo que", "Ce qui m'étonne, c'est le silence."],
          ["tout ce qui", "todo lo que", "tout ce qui compte"],
        ],
        note: "La pregunta indirecta NO invierte: «je me demande QUAND il VIENDRA» (jamás viendra-t-il). Y el molde C1: «ce qui m'étonne, c'est…» — lo que me sorprende es… La mise en relief temporal («c'est en 1968 que…») instala el foco histórico antes del verbo.",
      },
    ],
    moreExamples: [
      { it: "Je me demande si elle viendra.", es: "Me pregunto si vendrá. (sin inversión)" },
      { it: "Ce qui me gêne, c'est l'absence de chiffres.", es: "Lo que me molesta es la ausencia de cifras." },
      { it: "C'est là que tout se joue.", es: "Es allí donde todo se decide." },
    ],
    drills: {
      transform: [
        { q: "Indirecte : «Quand viendra-t-il ?» Je me demande… →", options: ["Je me demande quand il viendra.", "Je me demande quand viendra-t-il.", "Je me demande quand il viendra-t-il ?"], answer: 0, explain: "Pregunta indirecta: sujeto antes del verbo." },
        { q: "Mise en relief : «Tout a basculé en 1968.» (foco: 1968)", options: ["C'est en 1968 que tout a basculé.", "C'est 1968 quand tout basculé.", "En 1968 c'est que tout bascule."], answer: 0, explain: "c'est en + foco + que." },
      ],
      errors: [
        { q: "Corrige : «Je ne crois pas que c'est juste.»", options: ["Je ne crois pas que ce soit juste.", "Je ne crois pas que c'est pas juste.", "Je crois pas que c'est juste soit."], answer: 0, explain: "negar la creencia → subjuntivo: ce soit." },
      ],
    },
  },
  "fr-cu-c1-09": {
    tables: [
      {
        title: "La phrase publicitaire",
        headers: ["Procédé", "Schéma", "Exemple"],
        rows: [
          ["ellipse", "corta el verbo", "Parce que vous le valez bien (L'Oréal)"],
          ["paronomase", "sonidos vecinos", "C'est sec, mais c'est chic."],
          ["jeu de mots lexical", "doble sentido", "Il n'y a que Maille qui m'aille."],
          ["règle de trois mots", "el eslogan respira en 3", "Liberté. Égalité. Mutualité."],
          ["impératif + promesse", "haz + futuro", "Osez le fromage."],
        ],
        note: "El eslogan francés comprime: elipsis (sans verbe), paronomasa (sec/chic) y juego de palabras (Maille/m'aille — la mostaza que me va). El ritmo de tres palabras es el estándar de oro: el eslogan se recuerda como un haiku comercial.",
      },
    ],
    moreExamples: [
      { it: "Parce que je le vaux bien.", es: "Porque yo lo valgo. (variante del eslogan)" },
      { it: "C'est sec, mais c'est chic.", es: "Es seco, pero es chic. (paronomasa)" },
      { it: "Osez l'inattendu.", es: "Atrévase a lo inesperado. (imperativo + promesa)" },
    ],
    drills: {
      transform: [
        { q: "Repère : «Il n'y a que Maille qui m'aille.» — le jeu repose sur…", options: ["Maille / m'aille (sonido)", "la moutarde", "la rime en -eux"], answer: 0, explain: "Paronomasa: Maille suena como m'aille (me va)." },
        { q: "Slogan en 3 mots :", options: ["Liberté. Égalité. Mutualité.", "La liberté, l'égalité et aussi la mutualité ensemble.", "Liberté et égalité, voilà la mutualité."], answer: 0, explain: "Tres golpes, sin conjunción: el ritmo memorable." },
      ],
      errors: [
        { q: "Corrige le procédé : «Parce que tu le vaux bien.» (eslogan original)", options: ["Parce que vous le valez bien.", "Parce que tu le vaux bien, toi.", "Parce que vous valez le bien."], answer: 0, explain: "El eslogan canónico usa vous: parce que VOUS le valez bien." },
      ],
    },
  },
  "fr-cu-c1-10": {
    tables: [
      {
        title: "Réfutation structurée",
        headers: ["Étape", "Formule", "Exemple"],
        rows: [
          ["reformuler l'adversaire", "selon vous, … / vous soutenez que…", "Vous soutenez que le coût est prohibitif."],
          ["concéder le réel", "il est exact que…", "Il est exact que l'investissement est lourd."],
          ["renverser", "mais la vraie question est de savoir si…", "La vraie question est de savoir si l'on peut s'en passer."],
          ["démonter", "or / en réalité / de fait", "Or, l'étude de 2023 montre l'inverse."],
          ["clouer", "ainsi donc", "Ainsi donc, l'argument s'effondre."],
        ],
        note: "La refutación C1 es un ritual de cinco pasos: reformular al adversario (según usted…), conceder lo cierto (il est exact que…), girar (la vraie question est de savoir si…), desmontar con datos (or, l'étude montre) y clavar (ainsi donc). Refutar sin este orden suena a pelea; con él, a filosofía.",
      },
    ],
    moreExamples: [
      { it: "Vous soutenez que le marché sature. Soit.", es: "Usted sostiene que el mercado se satura. Sea." },
      { it: "La vraie question est de savoir si l'on peut s'en passer.", es: "La verdadera pregunta es saber si podemos prescindir de ello." },
      { it: "De fait, les données de 2024 infirment ce scénario.", es: "De hecho, los datos de 2024 desmienten ese escenario." },
    ],
    drills: {
      transform: [
        { q: "Reformule l'adversaire : «Para usted, el costo es alto.» →", options: ["Selon vous, le coût est élevé.", "Vous dites le coût est élevé, n'est-ce pas ?", "Le coût est élevé selon votre opinion à vous."], answer: 0, explain: "selon vous + aserción (reformulación neutra)." },
        { q: "Renverse : «Mais la vraie question est ___ ___ si l'on peut s'en passer.»", options: ["de savoir", "à savoir de", "savoir"], answer: 0, explain: "la vraie question est de savoir si…" },
      ],
      errors: [
        { q: "Corrige : «Or, l'étude montre l'inverse, ainsi donc peut-être l'argument s'effondre peut-être.»", options: ["Or, l'étude montre l'inverse. Ainsi donc, l'argument s'effondre.", "Or l'inverse ainsi donc s'effondre l'étude.", "Ainsi or donc l'inverse l'argument montre."], answer: 0, explain: "Un conector por paso: or desmonta, ainsi donc clava." },
      ],
    },
  },
  "fr-cu-c1-11": {
    tables: [
      {
        title: "Passé simple et imparfait narratifs",
        headers: ["Temps", "Emploi", "Exemple"],
        rows: [
          ["passé simple", "acción cortada, hito", "Il ouvrit la porte et vit la lumière."],
          ["imparfait", "decorado, costumbre", "La pluie tombait depuis l'aube."],
          ["plus-que-parfait", "pre-historia", "Elle avait promis de revenir."],
          ["passé simple → PS", "il ouvrit / il vit / il prit", "irregulares: il prit, il fit, il alla"],
          ["architecture", "PS avanza, imparfait pinta", "Le train partit; la guerre continuait."],
        ],
        note: "El passé simple es el pretérito del NOVELA: il ouvrit, il vit, il prit (nunca en la conversación: «j'ouvris» sería pedante). La pareja narrativa: passé simple avanza la trama, imparfait pinta el decorado — «le train partit (hito); la guerre continuait (fondo)».",
      },
    ],
    moreExamples: [
      { it: "Elle descendit l'escalier sans un mot.", es: "Bajó la escalera sin una palabra. (passé simple)" },
      { it: "Le vent soufflait; les volets claquaient.", es: "El viento soplaba; las persianas golpeaban. (imperfecto)" },
      { it: "Il fit un pas, puis un autre.", es: "Dio un paso, luego otro. (passé simple: fit)" },
    ],
    drills: {
      transform: [
        { q: "Passé simple de prendre (il) :", options: ["il prit", "il prendit", "il prenait"], answer: 0, explain: "prendre → il prit (irregular literario)." },
        { q: "Choisis : «La porte ___ (s'ouvrir).» (hito narrativo)", options: ["s'ouvrit", "s'ouvrait", "s'est ouverte toujours"], answer: 0, explain: "acción única del relato → passé simple." },
      ],
      errors: [
        { q: "Corrige : «Il a vu la lumière et il ouvrit la porte.» (coherencia literaria)", options: ["Il vit la lumière et ouvrit la porte.", "Il ouvrit la lumière et a vu la porte.", "Il voit la lumière et ouvre la porte hier."], answer: 0, explain: "En novela, passé simple en ambas acciones: vit… ouvrit." },
      ],
    },
  },
  "fr-cu-c1-12": {
    tables: [
      {
        title: "L'exposé académique: plan et gestion du tour",
        headers: ["Moment", "Formule", "Exemple"],
        rows: [
          ["cadrage", "la question que je poserai est la suivante", "La question sera la suivante : …"],
          ["problématique", "en quoi… ?", "En quoi ce modèle résiste-t-il ?"],
          ["transition", "ce premier constat posé, …", "Ce constat posé, j'en viens à…"],
          ["concession d'auditoire", "on pourrait m'objecter que…", "On pourrait m'objecter le coût."],
          ["tour de parole", "je vous cède la parole / si vous permettez", "Si vous me permettez, je conclus."],
        ],
        note: "El exposé francés se arma con «problématique» (¿en qué…?) y se defiende anticipando objeciones: «on pourrait m'objecter que…». «Ce constat posé» (absoluta participial) es la transición elegante. Y el turno se cede con fórmula: «si vous me permettez, je conclus».",
      },
    ],
    moreExamples: [
      { it: "En quoi ce modèle résiste-t-il à la crise ?", es: "¿En qué resiste este modelo a la crisis? (problématique)" },
      { it: "Ce premier constat posé, j'en viens aux limites.", es: "Hecho este primer balance, paso a los límites." },
      { it: "On pourrait m'objecter le coût ; j'y répondrai.", es: "Se me podría objetar el costo; responderé a ello." },
    ],
    drills: {
      transform: [
        { q: "Problématique : «___ ___ ce dispositif change-t-il la donne ?»", options: ["En quoi", "Comment ça", "Pourquoi est-ce"], answer: 0, explain: "en quoi + inversión sujeto: en quoi… change-t-il ?" },
        { q: "Transition absolue : «___ ___ posé, j'en viens aux limites.»", options: ["Ce constat", "Le constat que", "Cela constat"], answer: 0, explain: "Ce constat posé = absoluta participial (dicho esto)." },
      ],
      errors: [
        { q: "Corrige : «On pourrait me objecter que le coût est haut.» (registro académico)", options: ["On pourrait m'objecter le coût.", "On peut m'objecter que le coût haut.", "On m'objectera le coût est haut."], answer: 0, explain: "objecter algo A alguien: m'objecter LE COÛT (sin que)." },
      ],
    },
  },
};
