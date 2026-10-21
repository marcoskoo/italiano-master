import type { CbGrammarPack } from "../cb-rules";

/* ═══ FR A1 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════ */

export const FR_CB_RULES_A1: Record<string, CbGrammarPack> = {
  "fr-cu-a1-01": {
    tables: [
      {
        title: "être · paradigme et salutations",
        headers: ["Personne", "être", "Exemple"],
        rows: [
          ["je", "je suis", "Je suis Alejandro."],
          ["tu", "tu es", "Tu es étudiant."],
          ["il / elle", "il est", "Camille est de Lyon."],
          ["nous", "nous sommes", "Nous sommes espagnols."],
          ["vous", "vous êtes", "Vous êtes français ?"],
          ["ils / elles", "ils sont", "Ils sont de Nantes."],
        ],
        note: "«Tu es» informal vs «Vous êtes» formal: el vous de cortesía es obligatorio con desconocidos en Francia — a diferencia de América Latina. Y nunca se omite el sujeto: el francés odia «suis Alejandro», siempre JE suis.",
      },
    ],
    moreExamples: [
      { it: "Je suis espagnol, de Madrid.", es: "Soy español, de Madrid." },
      { it: "Enchanté ! — Moi aussi !", es: "¡Encantado! — ¡Yo también!" },
      { it: "Comment allez-vous ? — Très bien, merci.", es: "¿Cómo está usted? — Muy bien, gracias." },
    ],
    drills: {
      transform: [
        { q: "Complète : «Vous ___ français ?»", options: ["êtes", "es", "sont"], answer: 0, explain: "vous → êtes (formel ou pluriel)." },
        { q: "Formalise : «Tu es espagnol ?» (à un inconnu)", options: ["Vous êtes espagnol ?", "Vous es espagnol ?", "Tu êtes espagnol, vous ?"], answer: 0, explain: "Cortesía → vous + êtes." },
      ],
      errors: [
        { q: "Corrige : «Suis Alejandro.»", options: ["Je suis Alejandro.", "Moi suis Alejandro.", "Suis-je Alejandro je."], answer: 0, explain: "El sujeto nunca se omite en francés: JE suis." },
      ],
    },
  },
  "fr-cu-a1-02": {
    tables: [
      {
        title: "avoir + possessifs mon/ma/mes",
        headers: ["Personne", "avoir", "Possessif"],
        rows: [
          ["j'", "j'ai", "mon frère / ma sœur / mes parents"],
          ["tu", "tu as", "ton frère / ta sœur / tes parents"],
          ["il / elle", "il a", "son frère / sa sœur / ses parents"],
          ["nous", "nous avons", "notre frère / notre sœur / nos parents"],
          ["vous", "vous avez", "votre frère / votre sœur / vos parents"],
          ["ils", "ils ont", "leur frère / leur sœur / leurs parents"],
        ],
        note: "El posesivo concuerda con la COSA, no con el dueño: son = su/su (de él O de ella), ma sœur = mi hermana. Como el italiano (y a diferencia del inglés his/her). avoir + edad: j'ai 20 ans = tengo 20 años.",
      },
    ],
    moreExamples: [
      { it: "J'ai vingt-deux ans.", es: "Tengo veintidós años." },
      { it: "Elle a un appartement à Lyon.", es: "Ella tiene un apartamento en Lyon." },
      { it: "Nos parents ont deux chats.", es: "Nuestros padres tienen dos gatos." },
    ],
    drills: {
      transform: [
        { q: "Complète : «Nous ___ un appartement.»", options: ["avons", "ont", "avez"], answer: 0, explain: "nous → avons." },
        { q: "Choisis : «___ sœur s'appelle Camille.» (ma sœur)", options: ["Ma", "Mon", "Mes"], answer: 0, explain: "sœur es femenino → ma." },
      ],
      errors: [
        { q: "Corrige : «Je suis vingt ans.»", options: ["J'ai vingt ans.", "Je suis 20 ans d'âge.", "J'ai vingt ans moi-même très."], answer: 0, explain: "La edad se TIENE: avoir (j'ai vingt ans), nunca être." },
      ],
    },
  },
  "fr-cu-a1-03": {
    tables: [
      {
        title: "Articles et partitif · le grand triage",
        headers: ["Type", "Singulier", "Pluriel", "Exemple"],
        rows: [
          ["défini", "le / la / l'", "les", "la tarte aux pommes"],
          ["indéfini", "un / une", "des", "un croissant · des madeleines"],
          ["partitif (une partie de)", "du (de+le) / de la / de l'", "—", "Je prends du pain. · du beurre, de la confiture"],
          ["négation du partitif", "de (o d')", "—", "Je ne veux pas de beurre."],
          ["✗", "«du pain» con contar", "—", "→ une baguette DE pain"],
        ],
        note: "El partitivo es el «un poco de» invisible del francés: du pain, de la confiture (algo de pan, algo de mermelada — lo que no se cuenta). En negativo, TODO partitivo se queda en «de»: je ne veux pas DE beurre.",
      },
    ],
    moreExamples: [
      { it: "Je voudrais du comté et du beurre.", es: "Quisiera queso comté y mantequilla." },
      { it: "Nous n'avons pas de lait.", es: "No tenemos leche." },
      { it: "Il y a des madeleines sur la table.", es: "Hay madeleines sobre la mesa." },
    ],
    drills: {
      transform: [
        { q: "Partitif : «Je prends ___ pain.»", options: ["du", "de la", "des"], answer: 0, explain: "pain masculino incontable → du." },
        { q: "Négation : «Je ne veux pas ___ beurre.»", options: ["de", "du", "de la"], answer: 0, explain: "negación + partitivo → de." },
      ],
      errors: [
        { q: "Corrige : «Je ne prends pas du pain.»", options: ["Je ne prends pas de pain.", "Je ne prends pas du de pain.", "Je ne prends pas le pain du."], answer: 0, explain: "Negativo: pas DE + sustantivo." },
      ],
    },
  },
  "fr-cu-a1-04": {
    tables: [
      {
        title: "il y a + prépositions de lieu",
        headers: ["Structure", "Exemple", "Español"],
        rows: [
          ["il y a + singulier", "Il y a une mairie dans le Marais.", "Hay una alcaldía."],
          ["il y a + pluriel", "Il y a des boulangeries ici.", "Hay panaderías."],
          ["il n'y a pas de", "Il n'y a pas de métro ici.", "No hay metro."],
          ["à côté de", "C'est à côté d'une boulangerie.", "al lado de"],
          ["en face de", "La mairie est en face du marché.", "enfrente de"],
          ["près de / loin de", "C'est près de la Seine.", "cerca de / lejos de"],
        ],
        note: "il y a = hay (invariable, como el español). Las preposiciones se funden con el artículo: à côté DE + UNE = à côté d'une; en face DE + LE = en face DU. La fusión (du, de la, des) es automática — hay que entrenarla.",
      },
    ],
    moreExamples: [
      { it: "Il y a un marché près de chez moi.", es: "Hay un mercado cerca de mi casa." },
      { it: "Le café est en face de la boulangerie.", es: "El café está enfrente de la panadería." },
      { it: "Il n'y a pas de pharmacie dans ce quartier.", es: "No hay farmacia en este barrio." },
    ],
    drills: {
      transform: [
        { q: "Fusionne : «en face de + le marché» =", options: ["en face du marché", "en face de le marché", "en face au marché"], answer: 0, explain: "de + le = du." },
        { q: "Complète : «___ ___ une boulangerie ici ?» (hay)", options: ["Il y a", "Il est a", "C'est a"], answer: 0, explain: "existencia → il y a." },
      ],
      errors: [
        { q: "Corrige : «Il n'y a pas du métro ici.»", options: ["Il n'y a pas de métro ici.", "Il n'y a pas le métro ici.", "Il n'y a pas métro de ici."], answer: 0, explain: "negativo → pas DE métro." },
      ],
    },
  },
  "fr-cu-a1-05": {
    tables: [
      {
        title: "Nombres, prix et partitif au marché",
        headers: ["Catégorie", "Règle", "Exemple"],
        rows: [
          ["cent / cents", "cents solo si no va otro número", "cent · deux cents · cinq cents euros"],
          ["soixante-dix / quatre-vingts", "70 = 60+10 · 80 = 4×20", "soixante-quinze (75) · quatre-vingt-dix (90)"],
          ["prix", "virgule para céntimos", "quatre euros quarante (4,40 €)"],
          ["poids", "une livre de… · deux cents grammes de…", "une livre de cerises"],
          ["partitif", "du / de la / de l'", "Je voudrais du comté et du beurre."],
        ],
        note: "Los números franceses cuentan en veintes: 80 = quatre-vingts (cuatro veintes), 90 = quatre-vingt-dix (4×20+10) — el sistema heredado del celta. «Une livre» = media kilo (500 g): el mercado francés no habla de kilos.",
      },
    ],
    moreExamples: [
      { it: "Ça fait combien ? — Douze euros cinquante.", es: "¿Cuánto es? — Doce euros cincuenta." },
      { it: "Deux cents grammes de jambon, s'il vous plaît.", es: "Doscientos gramos de jamón, por favor." },
      { it: "quatre-vingt-quinze (95)", es: "noventa y cinco (4×20+15)" },
    ],
    drills: {
      transform: [
        { q: "Écris 75 :", options: ["soixante-quinze", "septante-cinq", "soixante-dix-cinq"], answer: 0, explain: "75 = soixante (60) + quinze (15)." },
        { q: "Au marché : «une ___ de cerises» (500 g)", options: ["livre", "kilo", "demi"], answer: 0, explain: "une livre = 500 g en el mercado francés." },
      ],
      errors: [
        { q: "Corrige : «deux cent euros» (200 € solos)", options: ["deux cents euros", "deux centaine euros", "deux centaines d'euros une."], answer: 0, explain: "cents con -s cuando no sigue otro número." },
      ],
    },
  },
  "fr-cu-a1-06": {
    tables: [
      {
        title: "Verbes en -er + l'heure",
        headers: ["Personne", "Terminaison", "parler"],
        rows: [
          ["je", "-e", "je parle"],
          ["tu", "-es", "tu parles"],
          ["il / elle", "-e", "elle parle"],
          ["nous", "-ons", "nous parlons"],
          ["vous", "-ez", "vous parlez"],
          ["ils / elles", "-ent (muda!)", "ils parlent"],
        ],
        note: "La -ent final es MUDA: «ils parlent» suena igual que «il parle». Todos los verbos -er (el 90 % del francés) siguen esta tabla — una tabla, quinientos verbos. La hora: «à huit heures», «à midi».",
      },
    ],
    moreExamples: [
      { it: "Nous habitons à Lyon.", es: "Vivimos en Lyon." },
      { it: "Vous écoutez le prof.", es: "Ustedes escuchan al profesor." },
      { it: "Ils dînent à huit heures.", es: "Cenan a las ocho." },
    ],
    drills: {
      transform: [
        { q: "Conjugue : «Nous ___ (habiter) à Lyon.»", options: ["habitons", "habitons -ez", "habitent"], answer: 0, explain: "nous → -ons." },
        { q: "Conjugue : «Elles ___ (écouter) le prof.»", options: ["écoutent", "écoute", "écoutez"], answer: 0, explain: "elles → -ent (muda)." },
      ],
      errors: [
        { q: "Corrige : «Je parles français tous les jours.»", options: ["Je parle français tous les jours.", "Je parlent français tous les jours.", "Je parlez français tous les jours."], answer: 0, explain: "je → -e (sin -s): je parle." },
      ],
    },
  },
  "fr-cu-a1-07": {
    tables: [
      {
        title: "faire du/de la + aimer/détester + infinitif",
        headers: ["Structure", "Règle", "Exemple"],
        rows: [
          ["faire du + masculin", "deporte masculino", "Je fais du footing et du vélo."],
          ["faire de la + féminin", "deporte femenino", "Elle fait de la natation."],
          ["faire de l' + vocal", "deporte con vocal", "Je fais de l'escalade."],
          ["aimer / adorer / détester + inf.", "gustos con infinitivo", "J'adore courir le matin."],
          ["détester + inf.", "lo contrario", "Je déteste regarder la télé."],
        ],
        note: "El deporte se HACE (faire) con partitivo: du footing, de la natation — nunca «jouer» (que es para juegos con balón: jouer au foot). Y los gustos van con infinitivo: j'adore courir (como el español: adoro correr).",
      },
    ],
    moreExamples: [
      { it: "Je fais de la randonnée le week-end.", es: "Hago senderismo el fin de semana." },
      { it: "Tu aimes nager ?", es: "¿Te gusta nadar?" },
      { it: "Elle déteste perdre.", es: "Ella odia perder." },
    ],
    drills: {
      transform: [
        { q: "Complète : «Elle fait ___ natation.»", options: ["de la", "du", "de"], answer: 0, explain: "natation femenino → de la." },
        { q: "Complète : «Je fais ___ vélo.»", options: ["du", "de la", "des"], answer: 0, explain: "vélo masculino → du." },
      ],
      errors: [
        { q: "Corrige : «Je joue de la natation.»", options: ["Je fais de la natation.", "Je joue la natation du.", "Je nage faire de natation."], answer: 0, explain: "Los deportes sin balón: faire du/de la." },
      ],
    },
  },
  "fr-cu-a1-08": {
    tables: [
      {
        title: "vouloir / pouvoir + je voudrais (cortesía)",
        headers: ["Formule", "Effet", "Exemple"],
        rows: [
          ["je voudrais + subst.", "pedir con cortesía", "Je voudrais une table pour deux."],
          ["vous voulez + inf. ?", "invitar", "Vous voulez boire quelque chose ?"],
          ["je peux + inf. ?", "pedir permiso", "Je peux avoir la carte ?"],
          ["on peut + inf. ?", "proponer (nosotros)", "On peut manger en terrasse ?"],
          ["✗ directo", "«Donnez-moi…»", "suena a orden"],
        ],
        note: "je voudrais es el «quisiera» francés — condicional de cortesía, la llave mágica. pouvoir + infinitivo = poder hacer algo: «on peut manger» = podemos comer. Y «on» sustituye a nous en la Francia hablada.",
      },
    ],
    moreExamples: [
      { it: "Je voudrais réserver pour ce soir.", es: "Quisiera reservar para esta noche." },
      { it: "Est-ce qu'on peut payer par carte ?", es: "¿Se puede pagar con tarjeta?" },
      { it: "Vous voulez un apéritif ?", es: "¿Quieren un aperitivo?" },
    ],
    drills: {
      transform: [
        { q: "Cortesía : «___ une table pour deux.»", options: ["Je voudrais", "Je veux", "Donnez-moi"], answer: 0, explain: "je voudrais = quisiera (condicional de cortesía)." },
        { q: "Permission : «___ avoir la carte ?»", options: ["Je peux", "Je veux", "J'ai"], answer: 0, explain: "pouvoir + infinitivo: je peux avoir." },
      ],
      errors: [
        { q: "Corrige : «Je veux une table.» (en un restaurante)", options: ["Je voudrais une table.", "Je veux bien une table maintenant !", "Table pour deux, dépêchez-vous !"], answer: 0, explain: "je veux suena exigente; je voudrais es el estándar." },
      ],
    },
  },
  "fr-cu-a1-09": {
    tables: [
      {
        title: "aller / venir de + contractions à/de",
        headers: ["Verbe", "Aller (voy a)", "Venir (vengo de)"],
        rows: [
          ["je", "je vais", "je viens"],
          ["tu", "tu vas", "tu viens"],
          ["il/elle", "elle va", "elle vient"],
          ["nous", "nous allons", "nous venons"],
          ["destination", "à + le = au · à + les = aux", "Je vais au marché."],
          ["origine", "de + le = du · de + les = des", "Je viens du travail."],
        ],
        note: "«Voy al mercado» = je vais AU marché (à + le = au) — la contracción es obligatoria. «Vengo del trabajo» = je viens DU travail. La lógica de movimiento español se conserva; solo hay que fundir las preposiciones con el artículo.",
      },
    ],
    moreExamples: [
      { it: "Je vais à Lyon en TGV.", es: "Voy a Lyon en TGV." },
      { it: "Elle vient du travail.", es: "Ella viene del trabajo." },
      { it: "Nous allons aux Halles.", es: "Vamos a Les Halles. (à + les = aux)" },
    ],
    drills: {
      transform: [
        { q: "Contracción : «Je vais ___ marché.» (à + le)", options: ["au", "à le", "al"], answer: 0, explain: "à + le = au." },
        { q: "Origine : «Elle vient ___ travail.» (de + le)", options: ["du", "de le", "del"], answer: 0, explain: "de + le = du." },
      ],
      errors: [
        { q: "Corrige : «Tu vas à le marché.»", options: ["Tu vas au marché.", "Tu vas du marché.", "Tu vas al marché."], answer: 0, explain: "Jamás «à le»: siempre au." },
      ],
    },
  },
  "fr-cu-a1-10": {
    tables: [
      {
        title: "il fait + météo et saisons",
        headers: ["Structure", "Exemple", "Español"],
        rows: [
          ["il fait + adj", "Il fait beau / froid / chaud.", "hace bueno / frío / calor"],
          ["il pleut / il neige", "Il pleut et il fait humide.", "llueve / nieva"],
          ["en + saison", "En été, il fait chaud à Nantes.", "en verano"],
          ["au printemps / en automne", "Au printemps, il pleut.", "en primavera / otoño"],
          ["il y a du vent", "Il y a du vent aujourd'hui.", "hace viento"],
        ],
        note: "El tiempo meteorológico francés usa «il fait» (como el español «hace»): il fait froid. Pero llueve y nieva con su propio verbo: il pleut, il neige. Las estaciones: en été, en hiver, PERO au printemps, en automne — capricho histórico.",
      },
    ],
    moreExamples: [
      { it: "Il fait doux pour la saison.", es: "Hace suave para la temporada." },
      { it: "En hiver, il neige dans les Alpes.", es: "En invierno nieva en los Alpes." },
      { it: "Quel temps fait-il ? — Il fait gris.", es: "¿Qué tiempo hace? — Está nublado." },
    ],
    drills: {
      transform: [
        { q: "Complète : «___ froid en janvier.»", options: ["Il fait", "Il est", "Il a"], answer: 0, explain: "meteorología → il fait." },
        { q: "Saison : «___ printemps, il pleut.»", options: ["Au", "En", "À la"], answer: 0, explain: "au printemps (excepción de en)." },
      ],
      errors: [
        { q: "Corrige : «Il est beau aujourd'hui.» (tiempo)", options: ["Il fait beau aujourd'hui.", "Il est beau temps il.", "Il y a beau aujourd'hui."], answer: 0, explain: "El clima se hace: il FAIT beau." },
      ],
    },
  },
  "fr-cu-a1-11": {
    tables: [
      {
        title: "Adjectifs : avant ou après le nom",
        headers: ["Position", "Type", "Exemple"],
        rows: [
          ["BEFORE (BAGS)", "Beauty · Age · Goodness · Size", "une belle chemise blanche"],
          ["before", "beau, joli, jeune, vieux, grand, petit", "un grand manteau noir"],
          ["AFTER", "couleur, nationalité, forme, goût", "une chemise blanche · un manteau noir"],
          ["double", "before + after", "une petite taille · un vieux jean"],
          ["accord", "féminin + e · pluriel + s", "des chemises blanches"],
        ],
        note: "Regla BAGS: los adjetivos de Belleza, Edad, Bondad y Tamaño van ANTES (una hermosa camisa blanca); el resto va después (color, nacionalidad). «Un grand manteau noir» = un gran abrigo negro — dos adjetivos, dos posiciones.",
      },
    ],
    moreExamples: [
      { it: "un petit café sympathique", es: "un café pequeño y agradable" },
      { it: "une longue histoire intéressante", es: "una larga historia interesante" },
      { it: "des chaussures noires", es: "unos zapatos negros (f. pl. concuerda)" },
    ],
    drills: {
      transform: [
        { q: "Ordonne : «chemise (blanche) (belle)»", options: ["une belle chemise blanche", "une blanche chemise belle", "une chemise belle blanche"], answer: 0, explain: "belle (BAGS) antes, blanche (color) después." },
        { q: "Accorde : «des chaussures ___ (noir)»", options: ["noires", "noir", "noirs"], answer: 0, explain: "chaussures f. pl. → noires." },
      ],
      errors: [
        { q: "Corrige : «un noir grand manteau»", options: ["un grand manteau noir", "un manteau grand noir", "un noir manteau grand."], answer: 0, explain: "grand (BAGS) antes del nombre; noir (color) después." },
      ],
    },
  },
  "fr-cu-a1-12": {
    tables: [
      {
        title: "Le récit du jour · connecteurs",
        headers: ["Connecteur", "Espagnol", "Fonction"],
        rows: [
          ["d'abord", "primero", "abre"],
          ["ensuite", "luego", "continúa"],
          ["puis", "después", "encadena"],
          ["enfin", "finalmente", "cierra"],
          ["et puis…", "y luego…", "coloquial"],
        ],
        note: "El esqueleto del día parisino: d'abord… ensuite… puis… enfin — los cuatro peldaños del relato francés (primero, luego, después, finalmente). «Je dîne ENFIN sur la Seine»: la posición al final marca el cierre perfecto.",
      },
    ],
    moreExamples: [
      { it: "D'abord, je prends un café au lait.", es: "Primero, tomo un café con leche." },
      { it: "Puis, je déjeune dans un bistrot.", es: "Después, almuerzo en un bistrot." },
      { it: "Enfin, je rentre à l'hôtel.", es: "Finalmente, vuelvo al hotel." },
    ],
    drills: {
      transform: [
        { q: "Ordonne : «___ le Louvre. ___ un bistrot.» (visiter/déjeuner)", options: ["D'abord / Ensuite", "Ensuite / D'abord", "Enfin / D'abord"], answer: 0, explain: "d'abord abre, ensuite continúa." },
        { q: "Clôture : «___ je dîne sur la Seine.»", options: ["Enfin", "D'abord", "Puis"], answer: 0, explain: "enfin cierra el relato." },
      ],
      errors: [
        { q: "Corrige : «Premièrement, je prends un café.» (relato casual)", options: ["D'abord, je prends un café.", "Premier je prends un café.", "D'abordement je prends café."], answer: 0, explain: "En relato casual: d'abord (premièrement es formal/listas)." },
      ],
    },
  },
};
