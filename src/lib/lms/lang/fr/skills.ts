import type { ListeningTask, ReadingText, WritingPrompt, ConversationScenario } from "../../types";

/* ── Destrezas FR · escucha, lectura, escritura y conversación ──────
   Français de France (convención del proyecto: el campo `.it` contiene
   el francés y `.es` el español). Tipografía francesa: espacio fino
   antes de ? ! : ; y comillas « » con espacios. Escenarios parisinos y
   lyoneses: boulangerie de quartier, marché de Lyon, TGV Paris-Lyon,
   Louvre, terrasse de café, entretien d'embauche. Las consignas,
   tips y checklists van en español con tuteo.                    */

/* ═══ Escucha · FR_LISTENING (6 tareas, A1→C1) ═══ */

export const FR_LISTENING: ListeningTask[] = [
  {
    id: "fr-ls-1", level: "A1", title: "À la boulangerie", kind: "dialogo",
    dialogue: [
      { speaker: "Boulangère", it: "Bonjour ! Vous désirez ?", es: "¡Buenos días! ¿Qué desea?" },
      { speaker: "Client", it: "Bonjour madame ! Une baguette tradition, s'il vous plaît.", es: "¡Buenos días, señora! Una baguette tradition, por favor." },
      { speaker: "Boulangère", it: "Et avec ça ?", es: "¿Algo más?" },
      { speaker: "Client", it: "Un croissant et un pain au chocolat.", es: "Un croissant y un pain au chocolat." },
      { speaker: "Boulangère", it: "Ce sera tout ?", es: "¿Será todo?" },
      { speaker: "Client", it: "Oui. Combien je vous dois ?", es: "Sí. ¿Cuánto le debo?" },
      { speaker: "Boulangère", it: "Quatre euros soixante, s'il vous plaît.", es: "Cuatro euros con sesenta, por favor." },
      { speaker: "Client", it: "Voilà. Merci, bonne journée !", es: "Aquí tiene. ¡Gracias, buen día!" },
    ],
    questions: ["fr-ex-ls-1-1", "fr-ex-ls-1-2", "fr-ex-ls-1-3"],
  },
  {
    id: "fr-ls-2", level: "A1", title: "Les mots de politesse", kind: "parole",
    words: ["bonjour", "merci", "s'il vous plaît", "au revoir", "excusez-moi", "de rien", "bonne journée", "à bientôt"],
    questions: ["fr-ex-ls-2-1", "fr-ex-ls-2-2"],
  },
  {
    id: "fr-ls-3", level: "A2", title: "Au marché de Lyon", kind: "dialogo",
    dialogue: [
      { speaker: "Productrice", it: "Bonjour monsieur, qu'est-ce qu'il vous faut aujourd'hui ?", es: "Buenos días, señor, ¿qué necesita hoy?" },
      { speaker: "Client", it: "Bonjour madame ! Un kilo de pommes, s'il vous plaît.", es: "¡Buenos días, señora! Un kilo de manzanas, por favor." },
      { speaker: "Productrice", it: "Les Gala ou les Reinettes ? Elles viennent de la Drôme.", es: "¿Gala o Reineta? Vienen de la Drôme." },
      { speaker: "Client", it: "Les Gala. Et avec ça, un poulet fermier.", es: "Las Gala. Y con eso, un pollo de corral." },
      { speaker: "Productrice", it: "Il est de Bresse, il est excellent. Voulez-vous goûter une pomme ?", es: "Es de Bresse, es excelente. ¿Quiere probar una manzana?" },
      { speaker: "Client", it: "Volontiers… Délicieuse ! Combien ça fait en tout ?", es: "Con gusto… ¡Deliciosa! ¿Cuánto es en total?" },
      { speaker: "Productrice", it: "Douze euros cinquante. Merci et bonne journée !", es: "Doce euros con cincuenta. ¡Gracias y buen día!" },
    ],
    questions: ["fr-ex-ls-3-1", "fr-ex-ls-3-2"],
  },
  {
    id: "fr-ls-4", level: "B1", title: "L'entretien d'embauche", kind: "dialogo",
    dialogue: [
      { speaker: "Recruteuse", it: "Bonjour, entrez. Asseyez-vous. Vous pouvez vous présenter ?", es: "Buenos días, pase. Siéntese. ¿Puede presentarse?" },
      { speaker: "Candidat", it: "Bonjour. Je m'appelle Daniel Rojas, je suis espagnol et je vis à Lyon depuis deux ans.", es: "Buenos días. Me llamo Daniel Rojas, soy español y vivo en Lyon desde hace dos años." },
      { speaker: "Recruteuse", it: "Pourquoi avez-vous postulé dans notre entreprise ?", es: "¿Por qué se presentó a nuestra empresa?" },
      { speaker: "Candidat", it: "Parce que vous êtes leaders dans le secteur et je souhaite développer mes compétences.", es: "Porque son líderes del sector y deseo desarrollar mis competencias." },
      { speaker: "Recruteuse", it: "Quelles sont vos qualités et vos défauts ?", es: "¿Cuáles son sus cualidades y sus defectos?" },
      { speaker: "Candidat", it: "Je suis organisé et persévérant, mais je suis parfois trop exigeant envers moi-même.", es: "Soy organizado y perseverante, pero a veces soy demasiado exigente conmigo mismo." },
      { speaker: "Recruteuse", it: "Parfait. Nous vous rappellerons la semaine prochaine.", es: "Perfecto. Le llamaremos la semana que viene." },
    ],
    questions: ["fr-ex-ls-4-1", "fr-ex-ls-4-2", "fr-ex-ls-4-3"],
  },
  {
    id: "fr-ls-5", level: "B2", title: "Sur la terrasse d'un café", kind: "dialogo",
    dialogue: [
      { speaker: "Serveur", it: "Bonjour ! Vous avez choisi ? Qu'est-ce que je vous sers ?", es: "¡Buenos días! ¿Ya eligió? ¿Qué le sirvo?" },
      { speaker: "Cliente", it: "Un café allongé et un croissant, s'il vous plaît.", es: "Un café alargado y un croissant, por favor." },
      { speaker: "Serveur", it: "Très bien. Vous savez que le tarif n'est pas le même au comptoir et en terrasse ?", es: "Muy bien. ¿Sabe que la tarifa no es la misma en la barra y en la terraza?" },
      { speaker: "Cliente", it: "Ah bon ? Je préfère rester en terrasse quand même, le soleil est trop agréable.", es: "¿Ah sí? Aun así prefiero quedarme en la terraza, el sol es demasiado agradable." },
      { speaker: "Serveur", it: "Comme vous voulez. Ce sera trois euros quatre-vingts.", es: "Como quiera. Serán tres euros con ochenta." },
      { speaker: "Cliente", it: "Voilà cinq euros, gardez la monnaie.", es: "Aquí tiene cinco euros, quédese el cambio." },
      { speaker: "Serveur", it: "C'est très gentil, je vous apporte ça tout de suite !", es: "Es muy amable, ¡se lo traigo enseguida!" },
    ],
    questions: ["fr-ex-ls-5-1", "fr-ex-ls-5-2"],
  },
  {
    id: "fr-ls-6", level: "C1", title: "Dictée : la France en phrases", kind: "dictato",
    words: [
      "La Joconde attire des millions de visiteurs au musée du Louvre chaque année.",
      "Le TGV relie Paris à Lyon en moins de deux heures.",
      "Les impressionnistes ont révolutionné la peinture à la fin du dix-neuvième siècle.",
      "La laïcité garantit la liberté de conscience dans les écoles publiques.",
    ],
    questions: ["fr-ex-ls-6-1", "fr-ex-ls-6-2"],
  },
];

/* ═══ Lectura · FR_READINGS (6 textos, A1→C1) ═══ */

export const FR_READINGS: ReadingText[] = [
  {
    id: "fr-rd-1", level: "A1", title: "Una postal desde París", titleIt: "Une carte postale de Paris",
    genre: "Postal", minutes: 2,
    paragraphs: [
      { it: "Salut Léa ! Je suis arrivée à Paris hier avec ma famille. Nous sommes en vacances pour une semaine.", es: "¡Hola Léa! Llegué a París ayer con mi familia. Estamos de vacaciones una semana." },
      { it: "La ville est magnifique. Hier, nous avons visité la tour Eiffel ; aujourd'hui, c'est le Louvre. La Joconde est plus petite que je pensais !", es: "La ciudad es magnífica. Ayer visitamos la torre Eiffel; hoy toca el Louvre. ¡La Gioconda es más pequeña de lo que pensaba!" },
      { it: "Le matin, nous prenons un café et un croissant à la boulangerie du quartier. Le soir, nous dînons dans un petit restaurant du Marais.", es: "Por la mañana tomamos un café y un croissant en la boulangerie del barrio. Por la noche cenamos en un pequeño restaurante del Marais." },
      { it: "Il fait beau : il y a du soleil ! Et toi, comment vas-tu ? À bientôt, je t'embrasse — Carmen", es: "Hace buen tiempo: ¡hay sol! ¿Y tú, cómo estás? Hasta pronto, un abrazo — Carmen" },
    ],
    glossary: [
      { it: "la boulangerie", es: "la panadería" },
      { it: "le quartier", es: "el barrio" },
      { it: "je t'embrasse", es: "un abrazo (cierre informal de carta)" },
    ],
    questions: ["fr-ex-rd-1-1", "fr-ex-rd-1-2"],
  },
  {
    id: "fr-rd-2", level: "A1", title: "Me presento", titleIt: "Je me présente",
    genre: "Autopresentación", minutes: 1,
    paragraphs: [
      { it: "Je m'appelle Hugo et j'ai vingt-deux ans. Je suis étudiant à l'université de Lyon, en troisième année de droit.", es: "Me llamo Hugo y tengo veintidós años. Soy estudiante en la universidad de Lyon, en tercer año de derecho." },
      { it: "J'habite avec deux amis dans un appartement du Vieux Lyon, au cinquième étage. Il est petit, mais la vue sur les toits est magnifique.", es: "Vivo con dos amigos en un apartamento del Vieux Lyon, en el quinto piso. Es pequeño, pero la vista a los tejados es magnífica." },
      { it: "Le samedi, je travaille dans une boulangerie du quartier : je sers les clients et j'arrange les vitrines. Le patron est sympathique et les croissants sont gratuits !", es: "Los sábados trabajo en una boulangerie del barrio: atiendo a los clientes y ordeno los escaparates. El jefe es simpático y ¡los croissants son gratis!" },
      { it: "Le week-end, je joue au foot avec mes amis et j'écoute de la chanson française : j'adore Zaz !", es: "El fin de semana juego al fútbol con mis amigos y escucho chanson française: ¡adoro a Zaz!" },
    ],
    glossary: [
      { it: "le droit", es: "el derecho (carrera)" },
      { it: "le Vieux Lyon", es: "el casco antiguo de Lyon" },
      { it: "la vitrine", es: "el escaparate" },
    ],
    questions: ["fr-ex-rd-2-1", "fr-ex-rd-2-2"],
  },
  {
    id: "fr-rd-3", level: "A2", title: "La boulangerie del barrio", titleIt: "La boulangerie du quartier",
    genre: "Relato", minutes: 3,
    paragraphs: [
      { it: "Tous les matins, à sept heures, Monsieur Fabre ouvre sa boulangerie. L'odeur du pain chaud envahit toute la rue.", es: "Todas las mañanas, a las siete, el señor Fabre abre su boulangerie. El olor a pan caliente invade toda la calle." },
      { it: "Les clients arrivent vite, avant le bureau : « Une tradition, s'il vous plaît ! », « Deux croissants et un pain au chocolat ! »", es: "Los clientes llegan rápido, antes del trabajo: «¡Una tradition, por favor!», «¡Dos croissants y un pain au chocolat!»" },
      { it: "Monsieur Fabre connaît tout le monde. Il demande des nouvelles des enfants, il plaisante avec les retraités. Sa boulangerie est le cœur du quartier.", es: "El señor Fabre conoce a todo el mundo. Pregunta por los niños, bromea con los jubilados. Su boulangerie es el corazón del barrio." },
      { it: "À midi, il ne reste presque rien sur les étagères. « C'est ma plus belle récompense », dit-il en souriant.", es: "Al mediodía casi no queda nada en las estanterías. «Es mi mejor recompensa», dice sonriendo." },
    ],
    glossary: [
      { it: "la tradition", es: "la baguette tradition (pan de masa tradicional)" },
      { it: "l'étagère", es: "la estantería" },
      { it: "la récompense", es: "la recompensa" },
    ],
    questions: ["fr-ex-rd-3-1", "fr-ex-rd-3-2"],
  },
  {
    id: "fr-rd-4", level: "B1", title: "El TGV: de París a Lyon en dos horas", titleIt: "Le TGV : de Paris à Lyon en deux heures",
    genre: "Noticia adaptada", minutes: 4,
    paragraphs: [
      { it: "Depuis 1981, le TGV relie Paris à Lyon. Au début, le trajet durait deux heures et quarante minutes ; aujourd'hui, il prend moins de deux heures.", es: "Desde 1981, el TGV conecta París con Lyon. Al principio, el trayecto duraba dos horas y cuarenta minutos; hoy tarda menos de dos horas." },
      { it: "Le train à grande vitesse a changé la vie des Français : beaucoup habitent à Lyon et travaillent à Paris, ou l'inverse. On les appelle les « grands navetteurs ».", es: "El tren de gran velocidad cambió la vida de los franceses: muchos viven en Lyon y trabajan en París, o al revés. Se los llama «grands navetteurs»." },
      { it: "À la gare de Lyon, on descend du train, on avale un expresso au comptoir et on saute dans le métro. La grande vitesse a tellement rapproché les villes que Lyon semble être devenue un quartier lointain de la capitale.", es: "En la gare de Lyon, uno baja del tren, se toma un espresso en la barra y salta al metro. La alta velocidad ha acercado tanto las ciudades que Lyon parece haberse convertido en un barrio lejano de la capital." },
      { it: "Pourtant, le TGV fait débat : les petites gares perdent des trains et les billets restent chers. La mobilité rapide a un prix, et tout le monde ne peut pas le payer.", es: "Sin embargo, el TGV genera debate: las estaciones pequeñas pierden trenes y los billetes siguen caros. La movilidad rápida tiene un precio, y no todos pueden pagarlo." },
    ],
    glossary: [
      { it: "le trajet", es: "el trayecto" },
      { it: "le navetteur", es: "el viajero pendular" },
      { it: "faire débat", es: "generar debate" },
    ],
    questions: ["fr-ex-rd-4-1", "fr-ex-rd-4-2", "fr-ex-rd-4-3"],
  },
  {
    id: "fr-rd-5", level: "B2", title: "El Louvre: el museo más visitado del mundo", titleIt: "Le Louvre : le musée le plus visité du monde",
    genre: "Artículo", minutes: 5,
    paragraphs: [
      { it: "Avec plus de huit millions de visiteurs par an, le Louvre est le musée le plus visité du monde. La Pyramide de verre de Ieoh Ming Pei, inaugurée en 1989, est devenue un symbole de Paris presque aussi fort que la tour Eiffel.", es: "Con más de ocho millones de visitantes al año, el Louvre es el museo más visitado del mundo. La pirámide de cristal de Ieoh Ming Pei, inaugurada en 1989, se ha convertido en un símbolo de París casi tan fuerte como la torre Eiffel." },
      { it: "Pourtant, le palais n'était pas destiné à l'art : pendant des siècles, ce fut la résidence des rois de France. Ce n'est qu'après la Révolution, en 1793, que le Louvre est devenu un musée national, ouvert à tous les citoyens.", es: "Sin embargo, el palacio no estaba destinado al arte: durante siglos fue la residencia de los reyes de Francia. Solo después de la Revolución, en 1793, el Louvre se convirtió en museo nacional, abierto a todos los ciudadanos." },
      { it: "Aujourd'hui, le défi est autant touristique qu'artistique : les files d'attente s'étirent sous la Pyramide et La Joconde, derrière sa vitre blindée, reçoit plus de regards en un jour que certains tableaux en un siècle.", es: "Hoy el reto es tan turístico como artístico: las colas se estiran bajo la Pirámide y La Gioconda, tras su vitrina blindada, recibe más miradas en un día que ciertos cuadros en un siglo." },
      { it: "Faut-il limiter l'accès pour protéger les œuvres ? Le débat est ouvert. En attendant, le conseil des habitués reste le même : venir un mercredi soir, passer par la Porte des Lions… et laisser La Joconde aux amateurs de selfies.", es: "¿Hay que limitar el acceso para proteger las obras? El debate está abierto. Mientras tanto, el consejo de los habituales sigue siendo el mismo: venir un miércoles por la tarde, entrar por la Porte des Lions… y dejarle la Gioconda a los aficionados a los selfies." },
    ],
    glossary: [
      { it: "la vitre blindée", es: "la vitrina blindada" },
      { it: "s'étirer", es: "estirarse / alargarse" },
      { it: "un habitué", es: "un habitual" },
    ],
    questions: ["fr-ex-rd-5-1", "fr-ex-rd-5-2"],
  },
  {
    id: "fr-rd-6", level: "C1", title: "Lyon, capital de la gastronomía", titleIt: "Lyon, capitale de la gastronomie",
    genre: "Ensayo", minutes: 6,
    paragraphs: [
      { it: "Lyon ne se visite pas seulement avec les yeux : elle se déguste. Au confluent du Rhône et de la Saône, la ville a fait de la cuisine une identité, au point que l'on parle d'elle comme de la « capitale mondiale de la gastronomie ».", es: "Lyon no solo se visita con los ojos: se saborea. En la confluencia del Ródano y el Saona, la ciudad ha hecho de la cocina una identidad, hasta el punto de que se la llama «capital mundial de la gastronomía»." },
      { it: "L'histoire commence avec les « mères lyonnaises », cuisinières d'origine modeste qui, entre le XIXe et le XXe siècle, transformèrent la cuisine bourgeoise en art populaire. La plus célèbre, la mère Brazier, obtint six étoiles — un record qui impressionna même le Tout-Paris.", es: "La historia comienza con las «mères lyonnaises», cocineras de origen humilde que, entre el siglo XIX y el XX, transformaron la cocina burguesa en arte popular. La más célebre, la mère Brazier, obtuvo seis estrellas: un récord que impresionó incluso al Tout-Paris." },
      { it: "Le samedi matin, le marché de la Croix-Rousse poursuit la tradition : les producteurs y vendent le poulet de Bresse, les saint-marcellin et les pommes de la Drôme. On y discute, on y goûte, on y prend son temps — le terroir en version vivante.", es: "El sábado por la mañana, el mercado de la Croix-Rousse continúa la tradición: los productores venden allí el pollo de Bresse, los saint-marcellin y las manzanas de la Drôme. Allí se conversa, se degusta, se toma el tiempo: el terroir en versión viva." },
      { it: "Apprendre le français à Lyon, c'est donc apprendre aussi un vocabulaire du goût : un « tablier de sapeur », un « coussin de Lyon », des « quenelles »… Des mots qui ne se traduisent pas : ils se goûtent.", es: "Aprender francés en Lyon es aprender también un vocabulario del gusto: un «tablier de sapeur», un «coussin de Lyon», unas «quenelles»… Palabras que no se traducen: se saborean." },
    ],
    glossary: [
      { it: "le terroir", es: "el terroir (territorio y saber hacer)" },
      { it: "se déguster", es: "saborearse / degustarse" },
      { it: "la quenelle", es: "la ñocla (dumpling lyonesa)" },
    ],
    questions: ["fr-ex-rd-6-1", "fr-ex-rd-6-2", "fr-ex-rd-6-3"],
  },
];

/* ═══ Escritura · FR_WRITINGS (6 consignas, A1→C1) ═══ */

export const FR_WRITINGS: WritingPrompt[] = [
  {
    id: "fr-wr-1", level: "A1", title: "Presentarme",
    task: "Preséntate: nombre, edad, nacionalidad, ciudad, familia y algo que te gusta.",
    minWords: 30,
    tips: [
      "Usa être para la nacionalidad (je suis espagnol(e)) y avoir para la edad (j'ai vingt ans)",
      "Frase modelo: Je m'appelle…, j'ai … ans, je suis de…",
      "Gustos: j'aime le cinéma / j'adore voyager",
    ],
    model: [
      "Je m'appelle Ana et j'ai vingt-trois ans.",
      "Je suis espagnole et j'habite à Madrid avec ma famille.",
      "J'ai un frère qui s'appelle Diego.",
      "J'aime la musique française et le café.",
    ],
    checklist: [
      "¿Concuerdas el adjetivo (espagnole si eres mujer, espagnol si eres hombre)?",
      "¿Usas avoir para la edad (j'ai … ans)?",
      "¿Cierras con un gusto (j'aime…)?",
    ],
  },
  {
    id: "fr-wr-2", level: "A2", title: "Mi última semana",
    task: "Cuenta en passé composé lo que hiciste la semana pasada: trabajo, estudios, ocio.",
    minWords: 50,
    tips: [
      "Passé composé con avoir (j'ai mangé) y être (je suis allé(e))",
      "Los verbos de movimiento (aller, venir, partir) van con être y el participio concuerda",
      "Marcadores: lundi, la semaine dernière, samedi soir",
    ],
    model: [
      "La semaine dernière a été très chargée.",
      "Lundi, j'ai travaillé toute la journée et le soir j'ai cuisiné pour mes amis.",
      "Mercredi, je suis allée à la salle de sport et après j'ai regardé un film français.",
      "Samedi, nous sommes allés au marché de Lyon : j'ai acheté un fromage délicieux !",
    ],
    checklist: [
      "¿Elegiste bien el auxiliar avoir/être?",
      "¿El participio concuerda con être (allée, allés)?",
      "¿Usaste al menos 4 verbos distintos?",
    ],
  },
  {
    id: "fr-wr-3", level: "A2", title: "Una postal desde Lyon",
    task: "Escribe una postal desde una ciudad francesa: dónde estás, el clima, qué visitas.",
    minWords: 40,
    tips: [
      "Presente para el «ahora» de las vacaciones",
      "El clima: il fait beau / il pleut / il y a du soleil",
      "Cierre afectuoso: Bises / Je t'embrasse",
    ],
    model: [
      "Salut maman ! Je suis à Lyon et la ville est merveilleuse.",
      "Aujourd'hui, il y a du soleil et nous nous promenons le long de la Saône.",
      "Hier, nous avons visité la basilique de Fourvière : quelle vue !",
      "Demain, nous allons prendre le TGV pour Paris. Bises, Anna",
    ],
    checklist: [
      "¿Describes el clima con il fait… / il y a…?",
      "¿Mencionas un monumento real?",
      "¿Cierre afectuoso informal (Bises, Je t'embrasse)?",
    ],
  },
  {
    id: "fr-wr-4", level: "B1", title: "Un correo formal al hotel",
    task: "Escribe un correo para confirmar la reserva, pedir una habitación tranquila y preguntar por el desayuno.",
    minWords: 60,
    tips: [
      "Apertura: Madame, Monsieur,",
      "Cortesía: je voudrais, pourriez-vous, je vous serais reconnaissant(e)",
      "Cierre: Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées",
    ],
    model: [
      "Madame, Monsieur,",
      "Je vous écris au sujet de ma réservation (n° 37B) pour le prochain week-end.",
      "Je voudrais confirmer mon arrivée pour le vendredi soir et vous demander, si possible, une chambre calme aux étages supérieurs.",
      "Par ailleurs, pourriez-vous me confirmer que le petit déjeuner est compris dans le tarif ?",
      "Dans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées. — A. García",
    ],
    checklist: [
      "¿Usaste vous (nunca tu) en todo el correo?",
      "¿Condicional de cortesía (je voudrais, pourriez-vous)?",
      "¿Fórmulas de apertura y cierre formales?",
    ],
  },
  {
    id: "fr-wr-5", level: "B2", title: "Opinión: el turismo masivo",
    task: "Redacta un texto argumentativo: ¿el turismo masivo arruina París? Tesis, un argumento a favor, uno en contra y una conclusión.",
    minWords: 100,
    tips: [
      "Conectores: d'abord, cependant, par conséquent, en conclusion",
      "Hipótesis: si + imparfait → conditionnel présent (si le tourisme diminuait…)",
      "Subjuntivo tras bien que (bien que la ville perde son charme)",
    ],
    model: [
      "Ces dernières années, le débat sur le tourisme de masse à Paris est devenu brûlant.",
      "D'abord, il est indéniable que le tourisme apporte de la richesse : des milliers d'emplois en dépendent, des musées aux cafés.",
      "Cependant, le revers de la médaille inquiète : loyers qui flambent, boutiques de souvenirs à la place des commerces de quartier, habitants qui quittent le centre.",
      "Si le flux des visiteurs n'était pas mieux régulé, la capitale risquerait de devenir un décor sans Parisiens, belle mais inanimée.",
      "En conclusion, je pense que la solution n'est pas de fermer la ville, mais de trouver un équilibre : moins de quantité, plus de qualité.",
    ],
    checklist: [
      "¿Hay una tesis clara en la apertura?",
      "¿Conectores variados (d'abord, cependant, par conséquent)?",
      "¿Condicional tras si + imparfait?",
      "¿Conclusión que sintetiza?",
    ],
  },
  {
    id: "fr-wr-6", level: "C1", title: "Ensayo breve: lengua e identidad",
    task: "Ensayo de 150 palabras: ¿la lengua que hablamos moldea nuestro pensamiento? Usa registro académico.",
    minWords: 150,
    tips: [
      "Impersonales: il est courant d'affirmer, il convient de rappeler que",
      "Conectores académicos: en effet, toutefois, il n'en demeure pas moins que",
      "Matiz: ce n'est pas que…, du moins",
    ],
    model: [
      "Il est courant d'affirmer que la langue façonne la pensée ; toutefois, il convient de rappeler que ce déterminisme a ses limites.",
      "On cite souvent Wittgenstein : les limites de mon langage sont les limites de mon monde.",
      "Le français, avec sa clarté célébrée et sa tradition cartésienne, encourage une certaine rigueur de l'expression.",
      "Cela dit, quiconque parle plusieurs langues sait que chacune éclaire des angles différents de la réalité : ce n'est pas une prison, du moins une lentille.",
      "En définitive, la langue n'enferme pas la pensée : elle la colore, et parfois même elle l'élargit.",
    ],
    checklist: [
      "¿Registro académico sostenido?",
      "¿Conectores de refinamiento (toutefois, cela dit, en définitive)?",
      "¿Matiz con du moins / ce n'est pas que…?",
      "¿Estructura tesis-antítesis-síntesis?",
    ],
  },
];

/* ═══ Conversación · FR_CONVERSATION (2 A1, 2 A2, 1 B1, 1 B2) ═══ */

export const FR_CONVERSATION: ConversationScenario[] = [
  {
    id: "fr-cs-1", emoji: "👋", title: "Conocer a alguien", level: "A1",
    phrases: [
      { it: "Salut ! Enchanté(e) de te rencontrer.", es: "¡Hola! Encantado/a de conocerte." },
      { it: "Comment tu t'appelles ? — Je m'appelle…", es: "¿Cómo te llamas? — Me llamo…" },
      { it: "Tu es d'où ? — Je suis de Madrid.", es: "¿De dónde eres? — Soy de Madrid." },
      { it: "Tu fais quoi dans la vie ? — Je suis ingénieur.", es: "¿A qué te dedicas? — Soy ingeniero." },
      { it: "Tu parles anglais ? — Oui, un peu.", es: "¿Hablas inglés? — Sí, un poco." },
    ],
    tips: [
      "Entre jóvenes el tuteo (tu) es inmediato; con desconocidos mayores o en tiendas usa vous",
      "Enchanté(e) = encantado/a: añade la -e si hablas en femenino",
      "Para despedirte informalmente: À bientôt ! o Salut !",
    ],
    tutorSeed: "Simulons une conversation informelle : nous faisons connaissance à une fête à Lyon. Tu es français(e) et je me présente. Commence par me saluer.",
  },
  {
    id: "fr-cs-2", emoji: "🥖", title: "En la boulangerie", level: "A1",
    phrases: [
      { it: "Bonjour ! Je voudrais une baguette, s'il vous plaît.", es: "¡Buenos días! Querría una baguette, por favor." },
      { it: "Vous avez des croissants ?", es: "¿Tiene croissants?" },
      { it: "C'est combien ? — Trois euros quatre-vingts.", es: "¿Cuánto es? — Tres euros con ochenta." },
      { it: "Je peux payer par carte ?", es: "¿Puedo pagar con tarjeta?" },
      { it: "Ce sera tout, merci. Bonne journée !", es: "Será todo, gracias. ¡Buen día!" },
    ],
    tips: [
      "En la boulangerie se entra siempre con «Bonjour !»: omitirlo es casi una ofensa",
      "Je voudrais (querría) suena más educado que je veux (quiero)",
      "Ce sera tout ? = ¿será todo?; la respuesta amable es «Oui, merci»",
    ],
    tutorSeed: "Faisons un jeu de rôle : tu es le boulanger d'une boulangerie de quartier à Paris et je suis le client. Commence par me saluer et me demander ce que je désire.",
  },
  {
    id: "fr-cs-3", emoji: "🗺️", title: "Pedir direcciones", level: "A2",
    phrases: [
      { it: "Excusez-moi, où est le musée du Louvre ?", es: "Disculpe, ¿dónde está el museo del Louvre?" },
      { it: "Il y a une pharmacie près d'ici ?", es: "¿Hay una farmacia cerca de aquí?" },
      { it: "C'est loin ? — Non, à dix minutes à pied.", es: "¿Está lejos? — No, a diez minutos a pie." },
      { it: "Continuez tout droit, puis tournez à gauche.", es: "Siga todo recto, luego gire a la izquierda." },
      { it: "Merci beaucoup ! — Je vous en prie.", es: "¡Muchísimas gracias! — De nada." },
    ],
    tips: [
      "Excusez-moi para llamar la atención antes de preguntar",
      "En París el metro lo es todo: «Quelle ligne pour la tour Eiffel ?»",
      "No confundas tout droit (todo recto) con à droite (a la derecha)",
    ],
    tutorSeed: "Jeu de rôle : je suis un(e) touriste perdu(e) dans le centre de Paris et tu es un(e) passant(e) sympathique. Je vais te demander mon chemin pour le musée d'Orsay.",
  },
  {
    id: "fr-cs-4", emoji: "🚄", title: "El TGV París-Lyon", level: "A2",
    phrases: [
      { it: "Bonjour, un billet pour Lyon, s'il vous plaît.", es: "Buenos días, un billete para Lyon, por favor." },
      { it: "Vous voulez un aller simple ou un aller-retour ?", es: "¿Quiere ida sola o ida y vuelta?" },
      { it: "À quelle heure part le prochain TGV ?", es: "¿A qué hora sale el próximo TGV?" },
      { it: "C'est quel quai ? — Le quai numéro douze.", es: "¿Qué andén es? — El andén número doce." },
      { it: "Il y a une voiture-bar dans le train ?", es: "¿Hay coche-bar en el tren?" },
    ],
    tips: [
      "El TGV París-Lyon sale de la gare de Lyon y llega a la Part-Dieu en menos de dos horas",
      "Aller simple = ida; aller-retour = ida y vuelta",
      "En el TGV el asiento está reservado: la voiture (coche) y la place (asiento) van en el billete",
    ],
    tutorSeed: "Jeu de rôle : je suis à la gare de Lyon et tu es l'agent au guichet. Je voudrais acheter un billet de TGV pour Lyon.",
  },
  {
    id: "fr-cs-5", emoji: "💼", title: "La entrevista de trabajo", level: "B1",
    phrases: [
      { it: "Bonjour, merci de m'avoir invité à cet entretien.", es: "Buenos días, gracias por invitarme a esta entrevista." },
      { it: "J'ai un master en commerce et trois ans d'expérience.", es: "Tengo un máster en comercio y tres años de experiencia." },
      { it: "Je suis quelqu'un de rigoureux et de motivé.", es: "Soy una persona rigurosa y motivada." },
      { it: "Quelles seraient mes responsabilités ?", es: "¿Cuáles serían mis responsabilidades?" },
      { it: "Quand pourrais-je avoir un retour ?", es: "¿Cuándo podría tener una respuesta?" },
    ],
    tips: [
      "En la entrevista se usa vous de principio a fin, hasta que propongan lo contrario",
      "El condicional (seraient, pourrais-je) suena profesional y modesto",
      "Preguntar al final demuestra interés: en Francia está muy bien visto",
    ],
    tutorSeed: "Jeu de rôle : tu es recruteur (recruteuse) dans une entreprise lyonnaise et je suis candidat(e). Commence par m'accueillir et me demander de me présenter.",
  },
  {
    id: "fr-cs-6", emoji: "🌍", title: "Debate: gastronomía y terroir", level: "B2",
    phrases: [
      { it: "À mon sens, le terroir est un patrimoine vivant.", es: "En mi opinión, el terroir es un patrimonio vivo." },
      { it: "Si la mondialisation uniformisait les goûts, le terroir disparaîtrait.", es: "Si la globalización uniformara los gustos, el terroir desaparecería." },
      { it: "Je suis d'accord jusqu'à un certain point, cependant…", es: "Estoy de acuerdo hasta cierto punto, sin embargo…" },
      { it: "Il faut distinguer entre…", es: "Hay que distinguir entre…" },
      { it: "En conclusion, je considère que…", es: "En conclusión, considero que…" },
    ],
    tips: [
      "La marca del B2: si + imparfait → conditionnel présent (si… uniformisait, … disparaîtrait)",
      "Matiza tus afirmaciones: jusqu'à un certain point, en un sens",
      "Articula tus argumentos con d'abord, ensuite, enfin: los franceses premian la lógica",
    ],
    tutorSeed: "Débattons en français : la gastronomie française et le terroir face à la mondialisation. Je vais exposer ma thèse et tu la discuteras avec moi.",
  },
];
