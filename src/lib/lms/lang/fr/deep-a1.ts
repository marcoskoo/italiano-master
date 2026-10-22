import type { CbGrammarDeep } from "../../extra/grammar-deep";

/* ═══ FR A1 · Grammaire en profondeur — 12 unités ════════════════════
   Explicación amplia de la gramática de cada unidad, con las trampas
   específicas del hispanohablante en francés de Francia. Campos `.it` =
   francés. Secciones: Comment ça marche / Quand l'utiliser / Attention !
   (pour hispanophones) / Dans la vraie conversation. */

export const FR_DEEP_A1: Record<string, CbGrammarDeep> = {
  "fr-cu-a1-01": {
    sezioni: [
      { t: "Comment ça marche", body: "être es el verbo clave del A1 y cubre SOLO lo que en español son dos verbos: ser y estar. Sus formas: je suis, tu es, il/elle est, nous sommes, vous êtes, ils sont. «Je suis étudiant» = 'soy estudiante', pero «Je suis content» = 'estoy contento': un mismo verbo francés, dos traducciones españolas según el contexto." },
      { t: "Quand l'utiliser", body: "Sirve para presentarte («Je m'appelle Alex, je suis mexicain»), decir tu origen («Je suis du Mexique», «Je suis de Lyon»), tu profesión SIN artículo («Je suis étudiant», «Je suis médecin») y tu estado («Je suis fatigué»). Las nacionalidades van en minúscula, igual que en español: «Je suis français». Y «Ça va ?» funciona como pregunta Y como respuesta: «Ça va ? — Ça va, et toi ?»." },
      { t: "Attention ! (pour hispanophones)", body: "1) tu/vous no es opcional: con desconocidos, mayores y en tiendas se usa vous («Comment vous appelez-vous ?»); entre estudiantes, tu es inmediato. 2) c'est vs il est: «Il est étudiant» (sin artículo), pero «C'est un bon étudiant» (con artículo y adjetivo); nunca «C'est étudiant». 3) La tipografía: en francés hay un espacio fino antes de ? ! y : — escribe «Comment ça va ?», nunca «Comment ça va?»." },
      { t: "Dans la vraie conversation", body: "El guion de la fiesta de bienvenida: «Bonjour ! Je m'appelle Camille. Et toi, comment tu t'appelles ?» → «Je m'appelle Alex. Enchanté !» → «Tu es étudiant ici ?» → «Oui, je suis étudiant. Je suis du Mexique». Para despedirte: «Au revoir !» o «Bonne journée !». Si dudas entre tu y vous, empieza con vous: te propondrán el tu («On se tutoie ?»)." },
    ],
    esempi: [
      { it: "Bonjour ! Je m'appelle Valentina et je suis argentine.", es: "¡Hola! Me llamo Valentina y soy argentina." },
      { it: "Nous sommes étudiants de français à la Sorbonne.", es: "Somos estudiantes de francés en la Sorbona." },
      { it: "Vous êtes français, Monsieur ? — Non, je suis belge.", es: "¿Es usted francés, señor? — No, soy belga." },
      { it: "Il est professeur et elle est médecin à Marseille.", es: "Él es profesor y ella es médica en Marsella." },
      { it: "Ça va ? — Ça va très bien, merci ! Et vous ?", es: "¿Qué tal? — Muy bien, ¡gracias! ¿Y usted?" },
    ],
    usi: [
      { q: "En la fiesta de bienvenida, ¿cómo dices 'soy estudiante'?", options: ["Je suis étudiant", "J'ai étudiant", "Il suis étudiant"], answer: 0, explain: "Identidad y profesión con être, sin artículo: je suis étudiant." },
      { q: "«Usted es francés» se dice…", options: ["Vous es français", "Vous êtes français", "Ils est français"], answer: 1, explain: "Usted → vous: vous êtes." },
    ],
  },

  "fr-cu-a1-02": {
    sezioni: [
      { t: "Comment ça marche", body: "avoir = 'tener': j'ai, tu as, il/elle a, nous avons, vous avez, ils ont. La edad se dice con avoir, exactamente como en español: «J'ai vingt-cinq ans», «Ma sœur a dix-neuf ans». También para sensaciones: «J'ai faim» (tengo hambre), «J'ai froid» (tengo frío), «J'ai peur» (tengo miedo)." },
      { t: "Quand l'utiliser", body: "Para la familia («J'ai une sœur et un frère»), las posesiones («Nous avons un appartement») y las fotos («Tu as une photo de ta famille ?»). Los posesivos acompañan: mon/ma/mes, ton/ta/tes, son/sa/ses — concuerdan con la COSA poseída, no con el poseedor: «mon frère», «ma sœur», «mes parents»." },
      { t: "Attention ! (pour hispanophones)", body: "1) Ante vocal, el posesivo es mon/ton/son incluso para femenino: «mon amie Camille» (la amiga), «son école» (la escuela). 2) Falso amigo: «chambre» es la habitación de dormir y «salle» la sala o el espacio funcional (salle de bain, salle de séjour) — no las mezcles. 3) «Tu leur manques» significa 'te extrañan': el verbo manquer invierte los papeles respecto al español ('a mí me faltas tú')." },
      { t: "Dans la vraie conversation", body: "El domingo por la mañana llega el «appel vidéo» con México: «Tu as des frères et sœurs ? — Oui, j'ai une sœur et un frère». Por la tarde, en el apéro de Camille, las fotos del móvil hacen de puente: «Voici mon père, ma mère et mes grands-parents». Y la pregunta que lo resume todo: «Tu leur manques, non ?»." },
    ],
    esempi: [
      { it: "J'ai vingt-cinq ans et mon frère a trente ans.", es: "Tengo veinticinco años y mi hermano tiene treinta." },
      { it: "Ma sœur s'appelle Lucie et mes parents habitent à Marseille.", es: "Mi hermana se llama Lucie y mis padres viven en Marsella." },
      { it: "Nous avons un chat très calme à la maison.", es: "Tenemos un gato muy tranquilo en casa." },
      { it: "Ton amie a une jolie maison à Bordeaux.", es: "Tu amiga tiene una casa bonita en Burdeos." },
      { it: "Vous avez des enfants, Madame Dubois ?", es: "¿Tiene usted hijos, señora Dubois?" },
    ],
    usi: [
      { q: "«Mi hermana tiene 19 años»:", options: ["Ma sœur est dix-neuf ans", "Ma sœur a dix-neuf ans", "Ma sœur as dix-neuf ans"], answer: 1, explain: "La edad con avoir: ma sœur a + número + ans." },
      { q: "«___ amie s'appelle Camille» (mi amiga):", options: ["Ma", "Mon", "Mes"], answer: 1, explain: "amie es femenino pero empieza por vocal → mon." },
    ],
  },

  "fr-cu-a1-03": {
    sezioni: [
      { t: "Comment ça marche", body: "El género del nombre francés se ve en el artículo: le pain, la tarte, l'éclair (ante vocal), les croissants. Los indefinidos cuentan: un croissant, une baguette, des madeleines. Y el partitivo expresa 'una parte de' algo no contable: du beurre (masc.), de la confiture (fem.), de l'eau (ante vocal)." },
      { t: "Quand l'utiliser", body: "En la boulangerie se combinan los tres: «Je voudrais une baguette et deux croissants» (contables), «Je prends du pain» (cantidad vaga), «La tarte aux pommes est très bonne» (categoría con definido). Con cantidad expresa, el partitivo desaparece: «deux cents grammes de pain», igual que 'doscientos gramos de pan'." },
      { t: "Attention ! (pour hispanophones)", body: "1) 'Como pan' sin artículo es imposible: el francés exige «Je mange du pain»; «Je mange pain» suena a telegrama. 2) Aprende cada nombre CON su artículo: «une voiture» es femenina aunque en español 'el coche' sea masculino — el género no siempre coincide. 3) En negación, un/une/des se reducen a de: «Je ne prends pas de pain» = 'no tomo pan'." },
      { t: "Dans la vraie conversation", body: "El guion completo de la boulangerie de Burdeos: «Bonjour Madame ! — Bonjour ! Vous désirez ? — Je voudrais une baguette tradition, s'il vous plaît. — Et avec ça ? — Deux croissants et un pain au chocolat. — Ce sera tout ? — Oui, merci. — Ça fait huit euros soixante. Bonne journée !». El «Bonjour» inicial es OBLIGATORIO: sin él, el pedido entero suena maleducado." },
    ],
    esempi: [
      { it: "Le matin, je mange du pain avec de la confiture.", es: "Por la mañana como pan con mermelada." },
      { it: "Je voudrais deux pains au chocolat, s'il vous plaît.", es: "Quisiera dos panes de chocolate, por favor." },
      { it: "Les éclairs au chocolat de cette boulangerie sont excellents.", es: "Los éclairs de chocolate de esta panadería son excelentes." },
      { it: "Nous achetons une tarte aux pommes pour le dimanche.", es: "Compramos una tarta de manzana para el domingo." },
      { it: "Je ne prends pas de viennoiserie le soir.", es: "No tomo bollería por la noche." },
    ],
    usi: [
      { q: "«Como queso» se dice…", options: ["Je mange fromage", "Je mange du fromage", "Je mange un fromage"], answer: 1, explain: "Cantidad vaga de no contable → partitivo du." },
      { q: "«Quisiera ___ baguette, por favor»:", options: ["du", "une", "de la"], answer: 1, explain: "baguette es contable singular → une." },
    ],
  },

  "fr-cu-a1-04": {
    sezioni: [
      { t: "Comment ça marche", body: "il y a = 'hay' y es invariable: «Il y a une mairie ici ?», «Il y a deux boulangeries dans le quartier». Negativo: «Il n'y a pas de métro ici». Las preposiciones de lugar: à côté de (al lado de), en face de (enfrente de), près de (cerca de), loin de (lejos de), devant (delante de), derrière (detrás de)." },
      { t: "Quand l'utiliser", body: "Para pedir ayuda con cortesía: «Excusez-moi de vous déranger, je cherche la mairie». Para dar el itinerario: «Vous allez tout droit, puis à gauche au carrefour». Y para situar: «La mairie est en face du marché, à côté d'une boulangerie», «C'est à deux minutes à pied»." },
      { t: "Attention ! (pour hispanophones)", body: "1) Las contracciones: de + le = du («en face du marché») y de + les = des («à côté des écoles») — nunca «de le» ni «de les». 2) No lances un «Où est la gare ?» a un desconocido sin envoltorio: primero «Excusez-moi de vous déranger» o como mínimo «Bonjour, excusez-moi». 3) il y a nunca concuerda en plural: «il y a deux marchés», jamás «il y ont»." },
      { t: "Dans la vraie conversation", body: "Los parisinos dan indicaciones en tres pasos: dirección («Vous allez tout droit»), giro («à gauche au carrefour») y referencia visual («en face du marché des Enfants Rouges, à côté d'une boulangerie»). Tú repites el itinerario para confirmar («Tout droit, puis à gauche») y cierras con «Merci beaucoup, Madame ! — Bonne journée !»." },
    ],
    esempi: [
      { it: "Excusez-moi de vous déranger : il y a une pharmacie près d'ici ?", es: "Disculpe que le moleste: ¿hay una farmacia cerca de aquí?" },
      { it: "La banque est en face de la boulangerie, à droite.", es: "El banco está enfrente de la panadería, a la derecha." },
      { it: "Vous allez tout droit jusqu'au carrefour, puis vous tournez à gauche.", es: "Vaya todo recto hasta el cruce y luego gire a la izquierda." },
      { it: "Il y a deux marchés couverts dans ce quartier ancien.", es: "Hay dos mercados cubiertos en este barrio antiguo." },
      { it: "Le café est à côté des boutiques, près de la petite place.", es: "El café está al lado de las tiendas, cerca de la placita." },
    ],
    usi: [
      { q: "«¿Hay un mercado aquí?» se dice…", options: ["Il est un marché ici ?", "Il y a un marché ici ?", "C'est un marché ici ?"], answer: 1, explain: "Existencia → il y a; il est y c'est describen identidad." },
      { q: "«El ayuntamiento está enfrente ___ mercado»:", options: ["de le", "du", "des"], answer: 1, explain: "en face de + le mercado → du." },
    ],
  },

  "fr-cu-a1-05": {
    sezioni: [
      { t: "Comment ça marche", body: "Del 70 al 99 los números son compuestos: soixante-dix (70), soixante-quinze (75), quatre-vingts (80), quatre-vingt-dix (90), quatre-vingt-douze (92). cents toma -s en plural («deux cents») pero no ante otro número («deux cent trente»). Los precios se dicen sin coma: «quatre euros quarante» = 4,40 €." },
      { t: "Quand l'utiliser", body: "En el marché d'Aligre: pedir con peso («Deux cents grammes de comté, s'il vous plaît»), con la medida del mercado («une livre de cerises» = 500 g, «une barquette de fraises») y preguntar el precio («C'est combien ?», «Ça fait combien en tout ?»). Con cantidad expresa, el partitivo queda en de: «une livre de cerises»." },
      { t: "Attention ! (pour hispanophones)", body: "1) No busques 'ochenta' ni 'noventa' como palabras únicas: el francés de Francia calcula (80 = 'cuatro-veintes'); en Bélgica y Suiza sí existen septante y huitante. 2) Falso amigo: «une prune» es una ciruela y «un pruneau» una ciruela pasa — nada que ver con una falsa 'pruna'. 3) «la cave» donde madura el queso es una bodega: el comté «vieillit dans une cave», no en una caja." },
      { t: "Dans la vraie conversation", body: "El fromager presume de su puesto: «Nous avons du camembert, du comté et de la mozzarella. Lequel préférez-vous ?». La frutera canta: «Les cerises et les fraises sont très bonnes aujourd'hui !». Y el cierre del mercado: «Autre chose ? — Non merci, ce sera tout. — Ça fait six euros quatre-vingt-dix. Merci et bonne journée !»." },
    ],
    esempi: [
      { it: "Une livre de cerises et deux cents grammes de jambon, s'il vous plaît.", es: "Una libra de cerezas y doscientos gramos de jamón, por favor." },
      { it: "Ça fait quatre-vingt-dix euros en tout.", es: "Son noventa euros en total." },
      { it: "Le comté vieillit douze mois dans une cave de montagne.", es: "El comté madura doce meses en una bodega de montaña." },
      { it: "Au marché d'Aligre, il y a du fromage, des fruits et des fleurs.", es: "En el mercado de Aligre hay queso, fruta y flores." },
      { it: "Je voudrais de la mozzarella et du beurre salé.", es: "Quisiera mozzarella y mantequilla salada." },
    ],
    usi: [
      { q: "El número 90 en el francés de Francia:", options: ["neufante", "quatre-vingt-dix", "huitante"], answer: 1, explain: "90 = 'cuatro-veinte-diez'; huitante es suizo y neufante no existe." },
      { q: "«Doscientos gramos ___ queso»:", options: ["de", "du", "des"], answer: 0, explain: "Con cantidad expresa, el partitivo se reduce a de." },
    ],
  },

  "fr-cu-a1-06": {
    sezioni: [
      { t: "Comment ça marche", body: "Los verbos del 1er grupo (-er) son la mayoría del francés: raíz + -e, -es, -e, -ons, -ez, -ent → je parle, tu parles, il/elle parle, nous parlons, vous parlez, ils parlent. Ojo: je e il/elle comparten forma («je parle» = «il parle»), y la -ent final es muda: «ils parlent» suena exactamente igual que «il parle»." },
      { t: "Quand l'utiliser", body: "Para tu jornada: «Je me lève à six heures et quart», «Je prends le métro à huit heures moins le quart», «Je déjeune au resto U», «Je rentre vers dix-huit heures». La hora: «Il est huit heures» (son las ocho) vs «à huit heures» (a las ocho); et quart, et demie, moins le quart, pile; y el reloj oficial de 24 h: «à dix-neuf heures trente»." },
      { t: "Attention ! (pour hispanophones)", body: "1) El sujeto je e il/elle se distingue solo por contexto o pronombre: escucha bien «je travaille» vs «il travaille», idénticas para un oído español. 2) 'A las ocho y media' es «à huit heures et demie»: la hora femenina pide demie, salvo midi y minuit («midi et demi»). 3) midi y minuit van sin artículo: «à midi», nunca «à le midi»." },
      { t: "Dans la vraie conversation", body: "El desayuno con Inès es un interrogatorio simpático: «Tu déjeunes au resto U ? — Oui, à midi et demi avec Thomas. — Et le soir, tu dînes à quelle heure ? — À sept heures et demie avec ma famille d'accueil». El ritmo francés sorprende: se cena a las 19 h 30, cuando en México apenas es la merienda." },
    ],
    esempi: [
      { it: "Je travaille le matin et j'étudie le soir.", es: "Trabajo por la mañana y estudio por la noche." },
      { it: "Nous habitons près de la gare à Lyon.", es: "Vivimos cerca de la estación en Lyon." },
      { it: "Tu écoutes la radio pendant le petit-déjeuner ?", es: "¿Escuchas la radio durante el desayuno?" },
      { it: "Le train arrive à quatorze heures pile.", es: "El tren llega a las catorce horas en punto." },
      { it: "Ils dînent tôt en France, vers dix-neuf heures.", es: "Cenan temprano en Francia, hacia las diecinueve." },
    ],
    usi: [
      { q: "«Nous ___ (habiter) à Lyon»:", options: ["habite", "habitons", "habitez"], answer: 1, explain: "nous → terminación -ons." },
      { q: "19 h 30 en el reloj oficial:", options: ["neuf heures et demie", "dix-neuf heures trente", "sept heures trente du soir"], answer: 1, explain: "El reloj de 24 h lee las horas completas: dix-neuf heures trente." },
    ],
  },

  "fr-cu-a1-07": {
    sezioni: [
      { t: "Comment ça marche", body: "Los deportes y actividades van con faire + partitivo: faire du footing, du vélo, du ski (masc.), de la natation, de la randonnée (fem.), de l'équitation (ante vocal). Los gustos: aimer, adorer, détester, préférer + infinitivo («J'adore courir», «Je déteste me lever tôt») o + artículo definido con sustantivo («J'aime le sport»)." },
      { t: "Quand l'utiliser", body: "Para cerrar planes: «Qu'est-ce que tu fais ce week-end ?», «On fait un pique-nique au parc ?», «On peut faire du bateau ? C'est gratuit !». La escala de intensidad: je déteste < je n'aime pas < j'aime < j'adore. Y para proponer con ganas: «J'ai envie de faire un grand dîner !»." },
      { t: "Attention ! (pour hispanophones)", body: "1) Falso amigo: «avoir envie de» = 'tener ganas de', no 'tener envidia': «J'ai envie de dormir» = tengo ganas de dormir. 2) El español invierte ('me gusta correr'): el francés pone el sujeto delante («J'aime courir», literalmente 'yo amo correr'). 3) faire nunca va desnudo: es «faire du sport», jamás «faire sport»." },
      { t: "Dans la vraie conversation", body: "En el parc de la Tête d'Or las propuestas vuelan: «On fait du bateau sur le lac ?», «Les enfants regardent les animaux du zoo, c'est gratuit !». Y cuidado con «Fais attention, tu vas te blesser !»: blesser es 'herir' o 'lesionarse', NO 'bendecir' — en el parque se lesionan las rodillas, no se bendicen." },
    ],
    esempi: [
      { it: "Ce week-end, je fais de la randonnée avec mes amis.", es: "Este fin de semana hago senderismo con mis amigos." },
      { it: "Elle fait de l'équitation le dimanche matin.", es: "Ella monta a caballo los domingos por la mañana." },
      { it: "J'adore me promener au bord du lac.", es: "Me encanta pasear por la orilla del lago." },
      { it: "Je déteste regarder le foot à la télé.", es: "Odio ver fútbol por la tele." },
      { it: "Nous aimons pique-niquer sur l'herbe au printemps.", es: "Nos gusta hacer pícnic sobre la hierba en primavera." },
    ],
    usi: [
      { q: "«Hago natación» se dice…", options: ["Je fais natation", "Je fais de la natation", "Je fais du natation"], answer: 1, explain: "natation es femenino → de la." },
      { q: "«Me encanta nadar»:", options: ["M'adore nager", "J'adore nager", "Nager adore"], answer: 1, explain: "Sujeto + adorer + infinitivo: J'adore nager." },
    ],
  },

  "fr-cu-a1-08": {
    sezioni: [
      { t: "Comment ça marche", body: "vouloir (querer): je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent. pouvoir (poder): je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent. Ambos son irregulares y van seguidos de infinitivo: «je veux manger», «on peut manger en terrasse ?»." },
      { t: "Quand l'utiliser", body: "El condicional je voudrais ('quisiera') es LA fórmula de cortesía para pedir: «Je voudrais les quenelles». Peticiones suaves: «Je peux avoir la carte ?», «Vous pouvez nous apporter de l'eau ?». En el bouchon: «Une table pour deux, s'il vous plaît», «Vous voulez boire quelque chose ?»." },
      { t: "Attention ! (pour hispanophones)", body: "1) «Je veux un café» suena a exigencia: en español 'quiero un café' es normal en un bar, pero en francés suena brusco — pide con «je voudrais». 2) El agua: «une carafe d'eau» (jarra de agua del grifo) es gratis en Francia: pídela sin miedo. 3) La cuenta es «l'addition» y el servicio ya está incluido («service compris»): la propina es un extra opcional, no una obligación social." },
      { t: "Dans la vraie conversation", body: "El serveur del bouchon lleva el guion: «Bonjour ! Vous êtes prêts à commander ? — Je voudrais la formule du soir. — Vous voulez boire quelque chose ? — Une carafe d'eau, s'il vous plaît». Al empezar, todos dicen «Bon appétit !». Y el cierre perfecto: «C'était délicieux ! L'addition, s'il vous plaît»." },
    ],
    esempi: [
      { it: "Je voudrais la formule du soir, s'il vous plaît.", es: "Quisiera el menú de la noche, por favor." },
      { it: "Vous pouvez m'apporter l'addition ?", es: "¿Puede traerme la cuenta?" },
      { it: "On peut manger en terrasse ce soir ?", es: "¿Se puede comer en la terraza esta noche?" },
      { it: "Je veux goûter la spécialité de la maison.", es: "Quiero probar la especialidad de la casa." },
      { it: "Nous voulons réserver une table pour ce soir.", es: "Queremos reservar una mesa para esta noche." },
    ],
    usi: [
      { q: "El pedido más cortés en un restaurante:", options: ["Je veux les quenelles", "Je voudrais les quenelles, s'il vous plaît", "Donnez-moi les quenelles"], answer: 1, explain: "je voudrais + s'il vous plaît: el estándar cortés francés." },
      { q: "«¿Puedo tener la carta?»:", options: ["Je veux la carte ?", "Je peux avoir la carte ?", "Je prends la carte ?"], answer: 1, explain: "Petición de permiso con pouvoir: je peux avoir ?" },
    ],
  },

  "fr-cu-a1-09": {
    sezioni: [
      { t: "Comment ça marche", body: "aller (ir): je vais, tu vas, il va, nous allons, vous allez, ils vont. venir (venir): je viens, tu viens, il vient, nous venons, vous venez, ils viennent. Destino con aller + à: «à Paris», «au marché» (à + le = au), «aux Halles» (à + les). Origen con venir + de: «de Paris», «du travail» (de + le = du), «des États-Unis» (de + les)." },
      { t: "Quand l'utiliser", body: "En el guichet de la gare de Lyon: «Un billet pour Marseille, s'il vous plaît», «un aller simple» (solo ida) o «un aller-retour» (ida y vuelta), «Le trajet dure combien de temps ?», «C'est quel quai ?». Y la regla SNCF: antes de subir, composte (valide) tu billete de papel en la máquina naranja." },
      { t: "Attention ! (pour hispanophones)", body: "1) Falso amigo: «quitter» = 'salir de' o 'dejar' un lugar, no 'quitar': «Le train quitte Paris à huit heures». 2) Falso amigo: «attendre» = 'esperar', no 'atender': «J'attends le TGV au quai 12». 3) En aller simple, 'simple' significa 'de ida': no busques ahí la idea de 'sencillo'." },
      { t: "Dans la vraie conversation", body: "El guion del guichet: «Bonjour, un aller-retour pour Marseille, s'il vous plaît. — Pour quel jour ? — Vendredi, et je reviens dimanche soir. — Le TGV part à neuf heures et demie, quai 12. — Ça dure combien de temps ? — Environ trois heures. — Parfait, merci !». El empleado cierra con un «Bon voyage !» de manual." },
    ],
    esempi: [
      { it: "Je vais à Marseille en TGV vendredi matin.", es: "Voy a Marsella en TGV el viernes por la mañana." },
      { it: "Elle vient du travail et elle va au marché.", es: "Ella viene del trabajo y va al mercado." },
      { it: "Nous allons aux puces de Saint-Ouen le dimanche.", es: "Vamos al mercadillo de Saint-Ouen el domingo." },
      { it: "Le train part du quai numéro dix.", es: "El tren sale del andén número diez." },
      { it: "Je reviens de Lille lundi soir.", es: "Vuelvo de Lille el lunes por la noche." },
    ],
    usi: [
      { q: "«Voy al mercado»:", options: ["Je vais à le marché", "Je vais au marché", "Je vais aux marché"], answer: 1, explain: "à + le = au: Je vais au marché." },
      { q: "Un billete de ida y vuelta:", options: ["un aller simple", "un aller-retour", "un double billet"], answer: 1, explain: "aller simple = solo ida; aller-retour = ida y vuelta." },
    ],
  },

  "fr-cu-a1-10": {
    sezioni: [
      { t: "Comment ça marche", body: "El tiempo se describe con il fait + adjetivo: il fait beau / mauvais, chaud / froid, doux / frais, gris, humide. Sin adjetivo: il pleut (llueve), il neige (nieva), il y a du vent, il y a du soleil. La temperatura se pregunta con «Il fait combien de degrés ?» o «Quelle température fait-il ?»." },
      { t: "Quand l'utiliser", body: "Las estaciones: le printemps, l'été, l'automne, l'hiver — con la trampa de preposiciones: AU printemps, pero EN été, EN automne, EN hiver. Los meses van en minúscula: janvier, février. La météo es conversación nacional: el bulletin llega a las 20 h, tras el journal, y todo el mundo lo comenta." },
      { t: "Attention ! (pour hispanophones)", body: "1) 'Hace sol' no se dice calcando un supuesto 'faire sol': el francés dice «il y a du soleil» (o «il fait soleil», menos frecuente): para el sol, la fórmula usual es 'hay sol'. 2) Solo la primavera lleva au: «au printemps», pero «en été», «en automne», «en hiver». 3) El clima y la temperatura van con faire, nunca con être: «Il fait dix degrés», jamás «Il est dix degrés»." },
      { t: "Dans la vraie conversation", body: "La météo abre cualquier conversación, incluso con desconocidos: «Il fait gris aujourd'hui, non ? — Oui, il pleut encore à Nantes !». Chloé defiende su ciudad: «En hiver, il fait humide, mais grâce à l'océan, jamais très froid». Y los planes nacionales: «en février au ski, en été à la mer»." },
    ],
    esempi: [
      { it: "En automne, il pleut beaucoup à Nantes.", es: "En otoño llueve mucho en Nantes." },
      { it: "Au printemps, les jardins sont pleins de fleurs.", es: "En primavera los jardines están llenos de flores." },
      { it: "Il fait dix degrés et il y a du vent.", es: "Hace diez grados y hay viento." },
      { it: "En été, il fait très chaud dans le sud de la France.", es: "En verano hace mucho calor en el sur de Francia." },
      { it: "Quelle température fait-il à Lyon aujourd'hui ?", es: "¿Qué temperatura hace hoy en Lyon?" },
    ],
    usi: [
      { q: "«En primavera» se dice…", options: ["en printemps", "au printemps", "à printemps"], answer: 1, explain: "Solo la primavera lleva au; el resto de estaciones van con en." },
      { q: "«¿Cuántos grados hace?»:", options: ["Il est combien de degrés ?", "Il fait combien de degrés ?", "Il a combien de degrés ?"], answer: 1, explain: "El tiempo y la temperatura se construyen con faire: il fait." },
    ],
  },

  "fr-cu-a1-11": {
    sezioni: [
      { t: "Comment ça marche", body: "Casi todos los adjetivos van DETRÁS del nombre: «une chemise blanche», «une ceinture en cuir». Los cortos y muy frecuentes van ANTES: beau, joli, grand, petit, bon, mauvais, jeune, vieux, nouveau → «un beau sac». Los especiales cambian en femenino (beau → belle, nouveau → nouvelle, vieux → vieille) y ante vocal (bel homme, vieil homme, nouvel an)." },
      { t: "Quand l'utiliser", body: "El lenguaje de compras: «Je cherche une chemise blanche, taille M», «Je peux l'essayer ?», «la cabine d'essayage est au fond, à droite», «Je la prends», «C'est combien ?». Tallas de ropa con letras (S, M, L) o números (38, 40, 42); para zapatos: «Quelle est votre pointure ?». Y las rebajas oficiales: les soldes, menos 30 %, 50 % o 70 %." },
      { t: "Attention ! (pour hispanophones)", body: "1) Falso amigo: «une robe» es un vestido, no 'una ropa': la ropa en general es «les vêtements». 2) «une blanche chemise» es agramatical: los colores van siempre detrás; solo los adjetivos cortos van delante («une belle chemise blanche»). 3) No mezcles taille (talla de ropa) con pointure (talla de zapato)." },
      { t: "Dans la vraie conversation", body: "La vendeuse del Marais arranca: «Bonjour Monsieur ! Vous cherchez quelque chose en particulier ? — Une chemise blanche en coton, taille M. — Voici une belle chemise, et celle-ci est en lin. — Je peux l'essayer ? — Bien sûr, la cabine est au fond». Si solo quieres mirar: «Je regarde seulement, merci»." },
    ],
    esempi: [
      { it: "Elle achète un beau sac en cuir marron.", es: "Ella compra un bonito bolso de cuero marrón." },
      { it: "Ce pull est trop grand : vous avez une taille plus petite ?", es: "Este jersey queda muy grande: ¿tiene una talla más pequeña?" },
      { it: "Il porte un vieux manteau gris et un chapeau noir.", es: "Él lleva un abrigo viejo gris y un sombrero negro." },
      { it: "Quelle est votre pointure, Monsieur ?", es: "¿Cuál es su talla de zapato, señor?" },
      { it: "Pendant les soldes, cette robe coûte moitié prix.", es: "Durante las rebajas, este vestido cuesta mitad de precio." },
    ],
    usi: [
      { q: "Orden correcto:", options: ["une robe noire", "une noire robe", "noire une robe"], answer: 0, explain: "Los colores van detrás del nombre: une robe noire." },
      { q: "«Un bonito abrigo negro»:", options: ["un manteau beau noir", "un beau manteau noir", "un manteau noir beau"], answer: 1, explain: "beau es corto → delante; noir → detrás." },
    ],
  },

  "fr-cu-a1-12": {
    sezioni: [
      { t: "Comment ça marche", body: "Los conectores ordenan el relato: d'abord (primero), ensuite (luego), puis (después), enfin (por último). Van al inicio de la frase y se separan con coma, exactamente como 'primero, luego' en español. Otros útiles: après (después), avant de + infinitivo (antes de), vers + hora (hacia), et puis (y después, coloquial)." },
      { t: "Quand l'utiliser", body: "La estructura de oro para narrar un día: conector + hora + acción → «D'abord, à huit heures, je prends un croissant. Ensuite, je visite le Louvre. Puis, vers midi et demi, je déjeune dans un bistrot. Enfin, le soir, je fais un tour en bateau sur la Seine». Con esta plantilla repasas todo el A1: être, avoir, verbos -er, il y a, je voudrais, il fait." },
      { t: "Attention ! (pour hispanophones)", body: "1) Falso amigo: «faire une gaffe» es cometer una metedura de pata; las gafas son «des lunettes». 2) ensuite y puis son intercambiables como 'luego/después', mais enfin marca el CIERRE del relato, no la conclusión lógica de un argumento. 3) La liaison encadena palabras: «nous‿avons», «dix‿euros» (/di.zø.ʁo/) — no separes el francés palabra por palabra." },
      { t: "Dans la vraie conversation", body: "El reto final de Camille y Léo: «Raconte-nous ta journée parfaite à Paris ! — D'abord, le matin, je prends un café dans une boulangerie du Marais. Ensuite, je visite le Louvre et je regarde la Joconde. Puis, vers midi et demi, un croque-monsieur dans un bistrot. Enfin, le soir, un bateau mouche sur la Seine. — Parfait, mission accomplie !»." },
    ],
    esempi: [
      { it: "D'abord, je me promène dans le jardin des Tuileries.", es: "Primero paseo por el jardín de las Tullerías." },
      { it: "Ensuite, nous visitons le musée d'Orsay.", es: "Luego visitamos el museo de Orsay." },
      { it: "Puis, vers quatorze heures, je fais une pause au café.", es: "Después, hacia las catorce, hago una pausa en el café." },
      { it: "Enfin, le soir, nous dînons dans une petite brasserie.", es: "Por último, por la noche, cenamos en una pequeña brasserie." },
      { it: "Attention de ne pas faire une gaffe avec les liaisons !", es: "¡Cuidado de no meter la pata con las liaisons!" },
    ],
    usi: [
      { q: "El conector que abre el relato (el primer paso):", options: ["Ensuite", "D'abord", "Enfin"], answer: 1, explain: "d'abord = primero; ensuite y puis continúan, enfin cierra." },
      { q: "«Hacia las doce y media»:", options: ["à midi et demi", "vers midi et demi", "sur midi et demi"], answer: 1, explain: "Hora aproximada → vers; à sería la hora exacta." },
    ],
  },
};
