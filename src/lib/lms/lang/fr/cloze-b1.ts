import type { CbClozeText } from "../../cambridge";

/* ═══ FR B1 · Cloze readings — 3 por unidad (inferencia léxica) ══════
   Metodología v9.12: el texto en francés lleva marcadores {1} {2}, etc.
   que el reproductor convierte en huecos; el estudiante deduce la
   palabra por el contexto. Campos `.it` = francés (lengua de estudio),
   `.es` = español. Escenarios en Francia: Paris, Nantes, Lyon,
   Toulouse, Lille, Montpellier, Marseille, Grenoble, Rennes, Bordeaux. */

export const FR_CLOZE_B1: Record<string, CbClozeText[]> = {
  "fr-cu-b1-01": [
    {
      id: "cz-fr-b1-01-1", title: "Le café philo du jeudi", titleEs: "El café philo de los jueves", minutes: 3,
      paragraphs: [
        { it: "Chaque jeudi soir, le café des Canotiers, au bord du canal Saint-Martin, accueille un débat public et gratuit : le célèbre café philo. Un {1} modère la discussion et distribue la parole avec douceur. Ce soir, le thème affiché sur la porte est le {2} : peut-on vraiment travailler de chez soi sans perdre le contact avec ses collègues ? Une trentaine de personnes ont pris place autour des petites tables, thé ou café à la main.", es: "Cada jueves por la noche, el café des Canotiers, a la orilla del canal Saint-Martin, acoge un debate público y gratuito: el célebre café philo. Un animador modera la discusión y reparte la palabra con dulzura. Esta noche, el tema anunciado en la puerta es el teletrabajo: ¿se puede de verdad trabajar desde casa sin perder el contacto con los compañeros? Una treintena de personas se ha sentado alrededor de las mesitas, té o café en mano." },
        { it: "Les {3} s'affrontent avec politesse. Une intervenante trouve que les réunions à distance fatiguent tout le monde ; un retraité pense au contraire que les bureaux vides appauvrissent les commerces du quartier. Chacun cherche le {4} juste : « je pense que », « je trouve que », « à mon avis ». Vers 21 heures, la séance se termine sans {5} : personne n'a convaincu personne, et tout le monde commande un dernier café en discutant encore.", es: "Las opiniones se enfrentan con cortesía. Una interviniente opina que las reuniones a distancia cansan a todo el mundo; un jubilado piensa, al contrario, que las oficinas vacías empobrecen los comercios del barrio. Cada uno busca la palabra justa: «je pense que», «je trouve que», «à mon avis». Hacia las 21, la sesión termina sin ganador: nadie ha convencido a nadie, y todo el mundo pide un último café mientras sigue conversando." },
      ],
      gaps: [
        { options: ["cuisinier", "animateur", "facteur"], answer: 1, why: "«Modère la discussion et distribue la parole»: quien modera y reparte la palabra es el animador." },
        { options: ["télétravail", "mariage", "tourisme"], answer: 0, why: "«Travailler de chez soi» define el tema del debate: el teletrabajo." },
        { options: ["panneaux", "tabourets", "avis"], answer: 2, why: "«S'affrontent avec politesse» tras las posturas de unos y otros: los puntos de vista." },
        { options: ["mot", "film", "bus"], answer: 0, why: "Busca la expresión exacta: «le mot juste», seguido de las fórmulas citadas." },
        { options: ["parapluie", "billet", "gagnant"], answer: 2, why: "«Personne n'a convaincu personne»: el debate termina sin vencedor." },
      ],
    },
    {
      id: "cz-fr-b1-01-2", title: "Le sondage du bureau lyonnais", titleEs: "La encuesta de la oficina lyonesa", minutes: 2,
      paragraphs: [
        { it: "Dans une agence de communication de Lyon, la directrice des ressources humaines veut connaître l'avis des salariés sur le télétravail. Elle prépare un court {1} de cinq questions et l'envoie par courriel le lundi matin. Les réponses arrivent vite : sur quarante employés, trente-cinq remplissent le questionnaire le jour même, ce qui prouve que le sujet intéresse vraiment les {2}.", es: "En una agencia de comunicación de Lyon, la directora de recursos humanos quiere conocer la opinión de los asalariados sobre el teletrabajo. Prepara una breve encuesta de cinco preguntas y la envía por correo el lunes por la mañana. Las respuestas llegan rápido: de cuarenta empleados, treinta y cinco rellenan el cuestionario el mismo día, lo que demuestra que el tema interesa de verdad a los asalariados." },
        { it: "Les résultats sont clairs. Soixante pour cent des salariés pensent que trois jours de télétravail par semaine sont {3} : on gagne du temps et on évite les embouteillages du matin. En revanche, vingt pour cent trouvent que les {4} à distance sont fatigantes et impersonnelles. La directrice tire la conclusion suivante : le modèle {5}, avec deux jours au bureau et trois à la maison, est peut-être la meilleure solution pour tout le monde.", es: "Los resultados son claros. El sesenta por ciento de los asalariados piensa que tres días de teletrabajo por semana son perfectos: se gana tiempo y se evitan los atascos de la mañana. En cambio, el veinte por ciento encuentra que las reuniones a distancia son cansadas e impersonales. La directora saca la siguiente conclusión: el modelo mixto, con dos días en la oficina y tres en casa, es quizá la mejor solución para todos." },
      ],
      gaps: [
        { options: ["contrat", "sondage", "spectacle"], answer: 1, why: "«De cinq questions» que se rellena como cuestionario: una encuesta." },
        { options: ["salariés", "vacanciers", "écoliers"], answer: 0, why: "«Sur quarante employés»: los que responden son los trabajadores de la agencia." },
        { options: ["parfaits", "interdits", "mouillés"], answer: 0, why: "«On gagne du temps et on évite les embouteillages»: ventajas → la valoración es positiva." },
        { options: ["siestes", "réunions", "moissons"], answer: 1, why: "«À distance sont fatigantes»: lo que se hace a distancia y cansa son las reuniones." },
        { options: ["unique", "mixte", "ancien"], answer: 2, why: "«Deux jours au bureau et trois à la maison»: una combinación de los dos mundos → mixto." },
      ],
    },
    {
      id: "cz-fr-b1-01-3", title: "Trois amis, deux opinions", titleEs: "Tres amigos, dos opiniones", minutes: 3,
      paragraphs: [
        { it: "Samedi après-midi, au bord du canal Saint-Martin, trois amis débattent autour d'un thé : Camille, Léo et moi. Le sujet, c'est le télétravail. Camille, dévelopseuse, l'adore : selon elle, on {1} du temps en évitant le métro aux heures de pointe. Léo, restaurateur, n'est pas d'accord du tout : il pense que les bureaux vides tuent la vie des {2} du centre-ville.", es: "El sábado por la tarde, a la orilla del canal Saint-Martin, tres amigos debaten alrededor de un té: Camille, Léo y yo. El tema es el teletrabajo. Camille, desarrolladora, lo adora: según ella, se gana tiempo evitando el metro en las horas punta. Léo, restaurador, no está nada de acuerdo: piensa que las oficinas vacías matan la vida de los barrios del centro." },
        { it: "Moi, je suis entre les deux. Je trouve que le télétravail est une chance, mais je reconnais que Léo a {3} sur un point : sans pauses café, on perd les discussions spontanées. Camille accorde aussi que certaines {4} à distance n'ont pas beaucoup de sens. À la fin de l'après-midi, personne n'a changé d'{5}, mais nous nous sommes quittés en riant, avec l'impression d'avoir bien débattu, comme le veulent les vrais amis.", es: "Yo estoy entre los dos. Me parece que el teletrabajo es una oportunidad, pero reconozco que Léo tiene razón en un punto: sin pausas de café se pierden las conversaciones espontáneas. Camille concede también que ciertas videoconferencias a distancia no tienen mucho sentido. Al final de la tarde, nadie ha cambiado de opinión, pero nos despedimos riendo, con la impresión de haber debatido bien, como quieren los verdaderos amigos." },
      ],
      gaps: [
        { options: ["gagne", "perd", "cuisine"], answer: 0, why: "«En évitant le métro aux heures de pointe»: evitar el metro hace ganar tiempo." },
        { options: ["quartiers", "cuisines", "grenouilles"], answer: 1, why: "«Les bureaux vides tuent la vie des» zonas del centro: los barrios." },
        { options: ["faim", "raison", "chance"], answer: 1, why: "«Je reconnais que Léo a» + «sur un point»: acuerdo parcial → tener razón." },
        { options: ["visios", "tartes", "vacances"], answer: 0, why: "«À distance n'ont pas beaucoup de sens»: las videollamadas del teletrabajo." },
        { options: ["adresse", "appétit", "avis"], answer: 2, why: "Tras un debate sin vencedores, nadie cambia de opinión: «changer d'avis»." },
      ],
    },
  ],

  "fr-cu-b1-02": [
    {
      id: "cz-fr-b1-02-1", title: "Le carnet de bord de Nicolas", titleEs: "El cuaderno de bitácora de Nicolas", minutes: 3,
      paragraphs: [
        { it: "Nicolas, étudiant à Nantes, écrit chaque soir dans son carnet de bord, le journal officiel de son {1} dans une entreprise de logistique. Le premier jour, il note qu'il était très stressé : avant cette expérience, il n'avait jamais visité un {2}, ni pris la parole devant une équipe de professionnels. Sa tutrice l'a rassuré : elle aussi avait eu peur lors de son propre premier jour, des années plus tôt.", es: "Nicolas, estudiante en Nantes, escribe cada noche en su cuaderno de bitácora, el diario oficial de sus prácticas en una empresa de logística. El primer día anota que estaba muy estresado: antes de esta experiencia, nunca había visitado un almacén ni había hablado ante un equipo de profesionales. Su tutora lo tranquilizó: ella también había tenido miedo en su propio primer día, años atrás." },
        { it: "Trois semaines plus tard, les pages du carnet racontent une autre histoire. Nicolas avait déjà rédigé deux rapports quand sa tutrice lui a confié une {3} plus importante : animer la réunion du lundi matin. Il se souvient surtout du jour où il a failli {4} son entretien avec le directeur à cause d'un embouteillage. Depuis ce petit incident, il prépare ses trajets la veille au soir, et il écrit en conclusion de son carnet : « Je n'avais jamais appris autant en aussi peu de {5}. »", es: "Tres semanas más tarde, las páginas del cuaderno cuentan otra historia. Nicolas ya había redactado dos informes cuando su tutora le confió una misión más importante: dinamizar la reunión del lunes por la mañana. Recuerda sobre todo el día en que estuvo a punto de perder su entrevista con el director por culpa de un atasco. Desde aquel pequeño incidente prepara sus trayectos la víspera por la noche, y escribe como conclusión de su cuaderno: «Nunca había aprendido tanto en tan poco tiempo»." },
      ],
      gaps: [
        { options: ["stage", "mariage", "voyage"], answer: 0, why: "«Carnet de bord» y «tutrice» en una empresa: el diario de las prácticas." },
        { options: ["aquarium", "château", "entrepôt"], answer: 2, why: "Empresa «de logistique»: el lugar que visita por primera vez es un almacén." },
        { options: ["mission", "punition", "sieste"], answer: 0, why: "«Plus importante : animer la réunion»: un encargo de mayor responsabilidad." },
        { options: ["louer", "cuisiner", "rater"], answer: 2, why: "«À cause d'un embouteillage»: por un atasco estuvo a punto de perderla." },
        { options: ["temps", "argent", "sucre"], answer: 0, why: "«En aussi peu de» + aprendizaje enorme: en tan poco tiempo." },
      ],
    },
    {
      id: "cz-fr-b1-02-2", title: "La première grande réunion", titleEs: "La primera reunión importante", minutes: 2,
      paragraphs: [
        { it: "Manon, la tutrice, adore raconter l'anecdote de sa première grande réunion, il y a cinq ans. Son train s'était arrêté vingt minutes avant la gare, et elle était arrivée en retard. Quand elle avait enfin poussé la porte de la salle, la {1} avait déjà commencé depuis un quart d'heure, et tous ses collègues étaient installés autour de la table. Elle n'avait jamais eu aussi honte de toute sa vie professionnelle.", es: "Manon, la tutora, adora contar la anécdota de su primera reunión importante, hace cinco años. Su tren se había parado veinte minutos antes de la estación y había llegado tarde. Cuando por fin empujó la puerta de la sala, la reunión ya había empezado desde hacía un cuarto de hora y todos sus compañeros estaban sentados alrededor de la mesa. Nunca había pasado tanta vergüenza en toda su vida profesional." },
        { it: "Le pire, dit-elle en riant, c'est que le responsable avait déjà présenté son {2} aux participants : tout le monde savait ce qu'elle avait préparé, sauf elle. Elle s'était levée à 5 heures ce matin-là pour relire ses {3}, mais les notes étaient restées sur la table de la {4}. Depuis cette journée, elle vérifie toujours son {5} avant de partir, et elle conseille à chaque stagiaire d'arriver avec une demi-heure d'avance.", es: "Lo peor, dice riendo, es que el responsable ya había presentado su proyecto a los participantes: todo el mundo sabía lo que ella había preparado, menos ella. Se había levantado a las 5 de la mañana aquel día para repasar sus notas, pero los apuntes se habían quedado en la mesa de la cocina. Desde aquel día comprueba siempre su bolso antes de salir, y aconseja a cada estudiante en prácticas que llegue con media hora de antelación." },
      ],
      gaps: [
        { options: ["fête", "réunion", "lessive"], answer: 1, why: "«Poussé la porte de la salle» con colegas alrededor de la mesa: la reunión." },
        { options: ["projet", "déjeuner", "vélo"], answer: 0, why: "«Ce qu'elle avait préparé»: lo que el responsable presentó es el proyecto." },
        { options: ["plantes", "notes", "clés"], answer: 1, why: "«Relire ses» antes de una reunión: sus apuntes." },
        { options: ["piscine", "gare", "cuisine"], answer: 2, why: "Se levantó en casa a las 5 h: la mesa donde olvidó los apuntes es la de la cocina." },
        { options: ["chapeau", "chat", "sac"], answer: 2, why: "Olvidó los apuntes en casa: desde entonces comprueba su bolso antes de salir." },
      ],
    },
    {
      id: "cz-fr-b1-02-3", title: "La convention de stage", titleEs: "El convenio de prácticas", minutes: 2,
      paragraphs: [
        { it: "Avant de commencer son stage à Nantes, Elena, étudiante espagnole, a dû remplir sa convention de stage, le document officiel qui lie l'école, l'entreprise et l'étudiant. Elle n'avait jamais signé de {1} administratif aussi long : trois pages d'articles, des signatures à obtenir partout. Elle avait déjà fait des stages en Espagne, mais là-bas, tout s'était réglé en une simple {2} avec le patron.", es: "Antes de empezar sus prácticas en Nantes, Elena, estudiante española, tuvo que rellenar su convenio de prácticas, el documento oficial que vincula a la escuela, la empresa y la estudiante. Nunca había firmado un documento administrativo tan largo: tres páginas de artículos y firmas que conseguir por todas partes. Ya había hecho prácticas en España, pero allí todo se había resuelto en una simple conversación con el jefe." },
        { it: "Le service des relations internationales de son école avait vérifié chaque ligne avant l'envoi. Quand le dossier complet est enfin arrivé à l'entreprise, la secrétaire a découvert qu'il manquait une {3} : celle du directeur. Elena a couru d'un bureau à l'autre pendant deux jours, car elle n'avait jamais rempli autant de {4} de sa vie. Elle garde de ces semaines un souvenir drôle : avant de déposer ses papiers, elle les avait relus dix {5}, comme une élève avant un examen. Aujourd'hui, quand un nouvel étudiant se plaint de la paperasse, elle sourit et lui prête son stylo.", es: "El servicio de relaciones internacionales de su escuela había verificado cada línea antes del envío. Cuando el expediente completo llegó por fin a la empresa, la secretaria descubrió que faltaba una firma: la del director. Elena corrió de un despacho a otro durante dos días, porque nunca había rellenado tantos formularios en su vida. Guarda de esas semanas un recuerdo gracioso: antes de entregar sus papeles, los había releído diez veces, como una alumna antes de un examen. Hoy, cuando un estudiante nuevo se queja del papeleo, ella sonríe y le presta su bolígrafo." },
      ],
      gaps: [
        { options: ["document", "gâteau", "maillot"], answer: 0, why: "«Administratif aussi long : trois pages d'articles»: un documento." },
        { options: ["compétition", "conversation", "célébration"], answer: 1, why: "En España todo se resolvió «con el jefe»: una simple conversación." },
        { options: ["photo", "signature", "chaise"], answer: 1, why: "«Il manquait une» + «celle du directeur»: la firma que falta." },
        { options: ["formulaires", "crêpes", "valises"], answer: 0, why: "«La paperasse» y los despachos: tantos formularios." },
        { options: ["francs", "kilos", "fois"], answer: 2, why: "«Relus dix» como una alumna antes de un examen: diez veces." },
      ],
    },
  ],

  "fr-cu-b1-03": [
    {
      id: "cz-fr-b1-03-1", title: "L'assemblée de quartier", titleEs: "La asamblea de barrio", minutes: 3,
      paragraphs: [
        { it: "Dans la salle des fêtes de la Guillotière, à Lyon, l'assemblée du conseil de quartier réunit une cinquantaine de personnes. Le thème de la soirée : « Si on rêvait notre quartier ? ». La présidente invite chacun à prendre la {1} : « Si le quartier vous appartenait, que changeriez-vous en premier ? » Les propositions fusent, sérieuses ou amusantes, et une bénévole les note toutes sur un grand tableau.", es: "En la sala de fiestas de la Guillotière, en Lyon, la asamblea del consejo de barrio reúne a unas cincuenta personas. El tema de la velada: «¿Y si soñáramos nuestro barrio?». La presidenta invita a cada uno a tomar la palabra: «Si el barrio fuera vuestro, ¿qué cambiaríais primero?». Las propuestas vuelan, serias o divertidas, y una voluntaria las apunta todas en una gran pizarra." },
        { it: "Inès, restauratrice, imagine la place du marché transformée en jardin : « Si on enlevait les voitures, les enfants pourraient jouer au milieu des oliviers en pots. » Thomas, lui, rêve de ruelles éclairées autrement : « Si les façades étaient peintes en couleurs, le quartier serait plus {2}, et il y aurait plus de monde le soir. » Une voix demande : « Et si on organisait des {3} gratuites pour apprendre le français ? » Tout le monde applaudit. À la fin de la soirée, la présidente annonce que les trois meilleures idées seront déposées dans la {4} à idées de la mairie : peut-être qu'un jour, l'une d'elles deviendra un vrai {5}.", es: "Inès, restauradora, imagina la plaza del mercado convertida en jardín: «Si quitaran los coches, los niños podrían jugar entre olivos en macetas». Thomas sueña con callejuelas iluminadas de otra manera: «Si las fachadas se pintaran de colores, el barrio sería más acogedor y habría más gente por la noche». Una voz pregunta: «¿Y si organizáramos talleres gratuitos para aprender francés?». Todo el mundo aplaude. Al final de la velada, la presidenta anuncia que las tres mejores ideas se depositarán en el buzón de ideas del ayuntamiento: quizá un día una de ellas se convierta en un verdadero proyecto." },
      ],
      gaps: [
        { options: ["parole", "porte", "pause"], answer: 0, why: "«La présidente invite chacun à prendre la» + pregunta abierta: tomar la palabra." },
        { options: ["humide", "chaleureux", "étroit"], answer: 1, why: "«Il y aurait plus de monde le soir»: fachadas de colores → un barrio más acogedor." },
        { options: ["ateliers", "pénalités", "poubelles"], answer: 0, why: "«Gratuites pour apprendre le français»: talleres gratuitos." },
        { options: ["poche", "boisson", "boîte"], answer: 2, why: "«À idées de la mairie»: el contenedor donde se depositan las propuestas." },
        { options: ["cauchemar", "projet", "dessert"], answer: 1, why: "Una idea depositada que se hace realidad: un proyecto." },
      ],
    },
    {
      id: "cz-fr-b1-03-2", title: "La boîte à idées", titleEs: "El buzón de ideas", minutes: 2,
      paragraphs: [
        { it: "Deux semaines après l'assemblée, la boîte à idées est installée à l'entrée de la mairie de quartier. C'est un grand cube en bois, avec une fente au-dessus et un petit {1} attaché par une corde pour écrire confortablement. La première semaine, quarante propositions tombent : plus d'arbres, moins de bruit, une fontaine place du Marché, des cours de danse pour les {2} du quartier.", es: "Dos semanas después de la asamblea, el buzón de ideas está instalado a la entrada del ayuntamiento de barrio. Es un gran cubo de madera, con una ranura arriba y un pequeño lápiz atado con una cuerda para escribir cómodamente. La primera semana caen cuarenta propuestas: más árboles, menos ruido, una fuente en la plaza del Mercado, clases de baile para los habitantes del barrio." },
        { it: "La gardienne du bâtiment vide la boîte chaque vendredi. Sa proposition préférée vient d'une enfant de huit ans : « Si j'étais maire, je transformerais le toit de l'école en {3}, avec un toboggan pour descendre à la récré. » Une autre lettre propose de peindre les passages piétons en {4} vives pour que les voitures ralentissent. La mairie répondra à chaque idée par courrier : même les rêves les plus grands méritent une {5}.", es: "La portera del edificio vacía el buzón cada viernes. Su propuesta favorita viene de una niña de ocho años: «Si fuera alcaldesa, transformaría el tejado de la escuela en un jardín, con un tobogán para bajar en el recreo». Otra carta propone pintar los pasos de peatones de colores vivos para que los coches aminoren la velocidad. El ayuntamiento responderá a cada idea por carta: incluso los sueños más grandes merecen una respuesta." },
      ],
      gaps: [
        { options: ["crayon", "marteau", "parapluie"], answer: 0, why: "«Attaché par une corde pour écrire»: el lápiz para anotar las ideas." },
        { options: ["cailloux", "ascenseurs", "habitants"], answer: 2, why: "Clases de baile para la gente del barrio: sus habitantes." },
        { options: ["jardin", "parking", "bureau"], answer: 0, why: "«Avec un toboggan pour descendre»: un tejado convertido en lugar de juego → jardín." },
        { options: ["couleurs", "savon", "ciment"], answer: 1, why: "«Vives pour que les voitures ralentissent»: colores vivos." },
        { options: ["amende", "facture", "réponse"], answer: 2, why: "«La mairie répondra à chaque idée par courrier»: cada sueño merece respuesta." },
      ],
    },
    {
      id: "cz-fr-b1-03-3", title: "Si j'étais maire de la Guillotière", titleEs: "Si yo fuera alcalde de la Guillotière", minutes: 3,
      paragraphs: [
        { it: "Monsieur Traoré habite la Guillotière depuis trente ans. Sur la lettre déposée dans la boîte à idées, il écrit : « Si j'étais maire de ce quartier, je commencerais par écouter. Si j'avais le {1}, je rouvrirais le bain-douches municipal et je remettrais des bancs sous les platanes. Si les habitants étaient associés aux décisions, la rue Jean Macé deviendrait un modèle de {2} urbaine. »", es: "El señor Traoré vive en la Guillotière desde hace treinta años. En la carta depositada en el buzón de ideas escribe: «Si yo fuera alcalde de este barrio, empezaría por escuchar. Si tuviera el poder, reabriría los baños públicos municipales y volvería a poner bancos bajo los plátanos. Si los vecinos estuvieran asociados a las decisiones, la calle Jean Macé se convertiría en un modelo de vida urbana»." },
        { it: "À la lecture de cette lettre, l'adjoint au maire a souri longtemps. Monsieur Traoré ne demande ni argent ni honneurs : il propose simplement de redonner la {3} aux gens. « Si on suivait toutes ses idées, avoue l'élu, le quartier serait invivable pour les voitures et merveilleux pour les {4}. » La lettre est maintenant affichée dans le hall de la mairie de quartier, et chaque visiteur peut la lire. Certains en repartent avec une idée en {5} : et si la boîte à idées devenait une vraie tradition lyonnaise ?", es: "Al leer esta carta, el teniente de alcalde sonrió durante un buen rato. El señor Traoré no pide dinero ni honores: simplemente propone devolver la confianza a la gente. «Si siguiéramos todas sus ideas, confiesa el edil, el barrio sería invivible para los coches y maravilloso para los peatones». La carta está ahora colgada en el vestíbulo del ayuntamiento de barrio y cada visitante puede leerla. Algunos se van con una idea en la cabeza: ¿y si el buzón de ideas se convirtiera en una verdadera tradición lyonesa?" },
      ],
      gaps: [
        { options: ["pouvoir", "permis", "vélo"], answer: 0, why: "«Si j'avais le» como alcalde: el poder de decidir." },
        { options: ["vente", "mort", "vie"], answer: 2, why: "«Modèle de» + bancos y vecinos escuchados: vida urbana." },
        { options: ["confiance", "monnaie", "punition"], answer: 0, why: "No pide dinero ni honores, solo escuchar a la gente: devolver la confianza." },
        { options: ["camions", "klaxons", "piétons"], answer: 2, why: "«Invivable pour les voitures et merveilleux pour les»: los peatones." },
        { options: ["tête", "panne", "retard"], answer: 0, why: "«Avec une idée en» + una pregunta final: la expresión «en tête»." },
      ],
    },
  ],

  "fr-cu-b1-04": [
    {
      id: "cz-fr-b1-04-1", title: "Les tracts dans l'escalier", titleEs: "Los octavillos en la escalera", minutes: 2,
      paragraphs: [
        { it: "Dans la résidence universitaire de Toulouse, les élections des deux délégués approchent. Ce lundi matin, les candidats ont collé leurs affiches dans l'escalier B et glissé leurs tracts sous les {1} des trois cents chambres. Chaque programme promet monts et merveilles : une salle de sport rénovée, des {2} de lavage supplémentaires, des cafés des voisins chaque mois et même un potager sur le toit.", es: "En la residencia universitaria de Toulouse se acercan las elecciones de los dos delegados. Este lunes por la mañana, los candidatos han pegado sus carteles en la escalera B y deslizado sus octavillos bajo las puertas de las trescientas habitaciones. Cada programa promete montes de maravillas: una sala de deporte renovada, más lavadoras, cafés de vecinos cada mes e incluso un huerto en la azotea." },
        { it: "Face à cette pluie de promesses, certains étudiants restent {3} : ils ont déjà vu des campagnes semblables l'an dernier, et la salle de sport n'a jamais été rénovée. « Avant de voter, je lirai chaque programme en détail », explique Rachid en redescendant l'escalier. Dès que nous aurons comparé les {4}, nous choisirons les deux candidats les plus sérieux. Le vote aura lieu jeudi et vendredi dans le hall, et dès que les {5} seront publiés, le nouveau conseil se réunira pour la première fois.", es: "Ante esta lluvia de promesas, algunos estudiantes siguen escépticos: ya vieron campañas parecidas el año pasado y la sala de deporte nunca se renovó. «Antes de votar, leeré cada programa con detalle», explica Rachid bajando la escalera. En cuanto hayamos comparado los programas, elegiremos a los dos candidatos más serios. La votación será el jueves y el viernes en el vestíbulo, y en cuanto se publiquen los resultados, el nuevo consejo se reunirá por primera vez." },
      ],
      gaps: [
        { options: ["paillasses", "portes", "vélos"], answer: 1, why: "Deslizan octavillos bajo las puertas de las habitaciones." },
        { options: ["machines", "étagères", "tables"], answer: 0, why: "«De lavage supplémentaires»: más máquinas de lavar." },
        { options: ["ravis", "sceptiques", "endormis"], answer: 1, why: "«La salle de sport n'a jamais été rénovée»: desconfianza → escépticos." },
        { options: ["menus", "vêtements", "programmes"], answer: 2, why: "«Je lirai chaque programme en détail»: comparar los programas." },
        { options: ["résultats", "plats", "bagages"], answer: 0, why: "Tras la votación del jueves y viernes: los resultados." },
      ],
    },
    {
      id: "cz-fr-b1-04-2", title: "Le discours dans le hall", titleEs: "El discurso en el vestíbulo", minutes: 3,
      paragraphs: [
        { it: "Jeudi soir, les quatre candidats aux élections de la résidence présentent leur programme dans le hall. Camille parle en dernier mais le plus sérieusement : « Si vous m'élisez, j'organiserai un café des voisins chaque mois. Dès que nous aurons obtenu le {1} de la direction, nous installerons des bornes de recharge pour les vélos électriques. Quand le budget sera validé, nous créerons une {2} de jeux commune au rez-de-chaussée. »", es: "El jueves por la noche, los cuatro candidatos a las elecciones de la residencia presentan su programa en el vestíbulo. Camille habla la última pero la más seriamente: «Si me elegís, organizaré un café de vecinos cada mes. En cuanto obtengamos el acuerdo de la dirección, instalaremos puntos de recarga para las bicis eléctricas. Cuando se valide el presupuesto, crearemos una sala de juegos común en la planta baja»." },
        { it: "Les électeurs écoutent, notent, sourient parfois. Un étudiant de première année pose une question redoutable : « Et si la direction refuse ? » Camille répond sans hésiter : « Alors nous organiserons des réunions avec elle jusqu'à ce qu'elle change d'{3}. Je tiendrai mes promesses une par une : dès que j'aurai affiché le compte rendu de nos réunions, vous pourrez vérifier chaque {4}. » Les applaudissements saluent la fin du discours. Vendredi soir, quand les voix seront {5}, chacun saura si les promesses ont convaincu.", es: "Los electores escuchan, toman notas, sonríen a veces. Un estudiante de primer año hace una pregunta temible: «¿Y si la dirección se niega?». Camille responde sin dudar: «Entonces organizaremos reuniones con ella hasta que cambie de opinión. Cumpliré mis promesas una por una: en cuanto haya colgado el acta de nuestras reuniones, podréis verificar cada decisión». Los aplausos saludan el final del discurso. El viernes por la noche, cuando se cuenten los votos, cada uno sabrá si las promesas han convencido." },
      ],
      gaps: [
        { options: ["accord", "refus", "billet"], answer: 0, why: "«De la direction» para instalar las bornes: su acuerdo." },
        { options: ["punition", "poubelle", "salle"], answer: 2, why: "«De jeux commune au rez-de-chaussée»: una sala de juegos." },
        { options: ["avis", "chambre", "métier"], answer: 0, why: "Reuniones hasta que la dirección cambie de opinión: «changer d'avis»." },
        { options: ["recette", "chanson", "décision"], answer: 2, why: "El acta permite verificar cada decisión tomada." },
        { options: ["chantées", "comptées", "repeintes"], answer: 1, why: "«Quand les voix seront» tras la votación: cuando se cuenten." },
      ],
    },
    {
      id: "cz-fr-b1-04-3", title: "Le soir des résultats", titleEs: "La noche de los resultados", minutes: 2,
      paragraphs: [
        { it: "Vendredi, à 20 heures, les résultats des élections tombent enfin : Camille est élue avec 58 % des voix, et son ami Mehdi la rejoindra comme deuxième {1}. Dans le hall, les partisans débouchent des jus de fruits et quelqu'un a même préparé un gâteau au yaourt en forme d'{2}. Camille remercie les électeurs avec un grand sourire : « Vous faites confiance à une équipe qui n'a encore rien prouvé ; je ferai tout pour la mériter. »", es: "El viernes, a las 20 horas, los resultados de las elecciones caen por fin: Camille resulta elegida con el 58 % de los votos y su amigo Mehdi se unirá a ella como segundo delegado. En el vestíbulo, los simpatizantes destilan zumos de frutas y alguien ha preparado incluso un bizcocho de yogur con forma de urna. Camille agradece a los electores con una gran sonrisa: «Confáis en un equipo que aún no ha demostrado nada; haré todo por merecerlo»." },
        { it: "Le lendemain, la réalité reprend ses droits : la première réunion du conseil aura lieu lundi à 18 heures. Camille a déjà promis d'afficher le {3} de chaque réunion à l'entrée. Quand le nouveau conseil aura rencontré la direction, on saura si les promesses de campagne tiendront face au {4} réel de la résidence. Les étudiants, eux, gardent un souvenir amusant de la semaine : ils ont découvert qu'un discours honnête vaut mieux que dix {5} impossibles.", es: "Al día siguiente, la realidad recupera sus derechos: la primera reunión del consejo tendrá lugar el lunes a las 18 horas. Camille ya ha prometido colgar el acta de cada reunión en la entrada. Cuando el nuevo consejo se haya reunido con la dirección, se sabrá si las promesas de campaña resistirán ante el presupuesto real de la residencia. Los estudiantes, por su parte, guardan un recuerdo divertido de la semana: han descubierto que un discurso honesto vale más que diez promesas imposibles." },
      ],
      gaps: [
        { options: ["professeur", "gardien", "délégué"], answer: 2, why: "Elecciones de los dos delegados: Mehdi será el segundo delegado." },
        { options: ["urne", "camion", "fourchette"], answer: 0, why: "Un pastel con forma de urna: el símbolo de la votación." },
        { options: ["compte rendu", "menu", "horoscope"], answer: 0, why: "Lo que se cuelga tras cada reunión para informar: el acta." },
        { options: ["soleil", "budget", "silence"], answer: 1, why: "Las promesas chocan con la realidad económica: el presupuesto real." },
        { options: ["vacances", "gaufres", "promesses"], answer: 2, why: "«Un discours honnête vaut mieux que dix» imposibles: promesas." },
      ],
    },
  ],

  "fr-cu-b1-05": [
    {
      id: "cz-fr-b1-05-1", title: "Dimanche à la piscine municipale", titleEs: "Domingo en la piscina municipal", minutes: 3,
      paragraphs: [
        { it: "Dimanche matin, à la piscine municipale de Lille, la file d'attente s'allonge dès 9 h 30. À l'entrée, un panneau rappelle le règlement : le bonnet de bain est {1}, les shorts sont interdits et il faut passer à la {2} avant d'accéder aux bassins. Une habituée sourit devant la pancarte : « Ici, même les nageurs du dimanche connaissent les règles par cœur. »", es: "El domingo por la mañana, en la piscina municipal de Lille, la cola se alarga desde las 9 h 30. En la entrada, un cartel recuerda el reglamento: el gorro de baño es obligatorio, los pantalones cortos están prohibidos y hay que pasar por la ducha antes de acceder a las piscinas. Una habitual sonríe ante el cartel: «Aquí incluso los nadadores de domingo se conocen las reglas de memoria»." },
        { it: "Dans le grand bassin, un maître-nageur surveille les vingt {3} qui nagent calmement, couloir par couloir. Au bord, un père explique à son fils que courir est interdit : « Tu vas glisser et te faire mal. » À 11 heures, le cours d'aquagym commence et une musique douce envahit la salle. À la sortie, personne ne se {4} : le règlement peut sembler strict, mais l'eau est propre, les couloirs sont calmes et chacun trouve sa {5}. Même les habitués du dimanche finissent par l'admettre : sans règles, la piscine deviendrait un chaos.", es: "En la piscina grande, un socorrista vigila a los veinte nadadores que nadan tranquilos, calle por calle. Al borde, un padre explica a su hijo que correr está prohibido: «Vas a resbalar y hacerte daño». A las 11 horas empieza la clase de aquagym y una música suave llena la sala. A la salida, nadie se queja: el reglamento puede parecer estricto, pero el agua está limpia, las calles están tranquilas y cada uno encuentra su sitio. Hasta las habituales del domingo acaban admitiéndolo: sin reglas, la piscina sería un caos." },
      ],
      gaps: [
        { options: ["obligatoire", "facultatif", "rigolo"], answer: 0, why: "El cartel del reglamento con el gorro: es obligatorio." },
        { options: ["caisse", "porte", "douche"], answer: 2, why: "«Avant d'accéder aux bassins»: hay que pasar por la ducha." },
        { options: ["nageurs", "mannequins", "bouées"], answer: 0, why: "«Qui nagent calmement, couloir par couloir»: los nadadores." },
        { options: ["réjouit", "plaint", "baigne"], answer: 1, why: "El reglamento parece estricto PERO el agua está limpia: nadie se queja." },
        { options: ["place", "voiture", "leçon"], answer: 0, why: "«Chacun trouve sa» entre calles tranquilas: su sitio." },
      ],
    },
    {
      id: "cz-fr-b1-05-2", title: "L'après-midi à la médiathèque", titleEs: "La tarde en la mediateca", minutes: 2,
      paragraphs: [
        { it: "L'après-midi, direction la médiathèque pour réviser. Le {1} y est impressionnant : pas un mot, pas un cri, seulement des lampes vertes sur les grandes tables et des rayonnages de livres jusqu'au plafond. Une pancarte indique : « Il est interdit de manger, de téléphoner et de parler {2} dans les salles de lecture. » Une étudiante a installé son ordinateur près de la fenêtre ; elle prépare un examen du lendemain.", es: "Por la tarde, rumbo a la mediateca para repasar. El silencio allí es impresionante: ni una palabra, ni un grito, solo lámparas verdes sobre las mesas grandes y estanterías de libros hasta el techo. Un cartel indica: «Está prohibido comer, telefonear y hablar alto en las salas de lectura». Una estudiante ha instalado su ordenador cerca de la ventana; prepara un examen del día siguiente." },
        { it: "Au deuxième étage, l'espace numérique fonctionne en libre accès : il faut réserver une {3} d'une heure sur la borne. Un retraité apprend à numériser ses photos anciennes avec l'aide d'une médiatrice patiente. Au {4} des livres, une mère et sa fille choisissent trois albums pour la nuit. Avant de partir, chacun reprend sa {5} à la machine : ici, même les retardataires attendent leur tour dans le calme.", es: "En la segunda planta, el espacio digital funciona en libre acceso: hay que reservar una sesión de una hora en el terminal. Un jubilado aprende a digitalizar sus fotos antiguas con la ayuda de una mediadora paciente. En la sección de los libros, una madre y su hija eligen tres álbumes para la noche. Antes de irse, cada uno recupera su tarjeta en la máquina: aquí hasta los rezagados esperan su turno con calma." },
      ],
      gaps: [
        { options: ["silence", "bruit", "désordre"], answer: 0, why: "«Pas un mot, pas un cri»: el silencio impresiona." },
        { options: ["bas", "vite", "fort"], answer: 2, why: "Prohibiciones de la sala de lectura: hablar alto está prohibido." },
        { options: ["séance", "chambre", "voiture"], answer: 0, why: "«D'une heure sur la borne»: una sesión reservada." },
        { options: ["grenier", "marché", "rayon"], answer: 2, why: "«Des livres» donde madre e hija eligen álbumes: la sección." },
        { options: ["carte", "clé", "veste"], answer: 0, why: "Se recupera en la máquina de la mediateca: la tarjeta." },
      ],
    },
    {
      id: "cz-fr-b1-05-3", title: "Est-ce qu'on a le droit de ?", titleEs: "¿Se puede o no se puede?", minutes: 2,
      paragraphs: [
        { it: "Mardi, à l'accueil de la piscine, un visiteur tente une négociation courtoise. « Bonjour madame, je viens de {1} mon maillot de bain à la maison, mais j'ai oublié mon bonnet. Est-ce qu'on a le droit de nager sans bonnet ? — Non, monsieur, c'est {2} même pour les bons nageurs. — Et est-ce que je peux en emprunter un ? — Oui, nous en {3} à l'accueil pour deux euros. »", es: "El martes, en el mostrador de la piscina, un visitante intenta una negociación cortés. «Buenos días, señora, acabo de buscar mi bañador en casa, pero he olvidado el gorro. ¿Se puede nadar sin gorro? — No, señor, está prohibido incluso para los buenos nadadores. — ¿Y puedo tomar uno prestado? — Sí, los vendemos en el mostrador por dos euros.»" },
        { it: "Le monsieur paie, remercie et s'installe. À côté, un groupe d'adolescents demande s'il est permis d'apporter un ballon : la réponse est non, évidemment. La règle d'or de la piscine tient en une {4} : tout ce qui dérange les autres nageurs doit rester au vestiaire. En échange, l'établissement garantit une eau propre et des {5} surveillés par des professionnels. Le visiteur, bonnet sur la tête, finit par trouver le système très raisonnable : après tout, on a le droit de nager en paix.", es: "El señor paga, da las gracias y se instala. Al lado, un grupo de adolescentes pregunta si se puede traer un balón: la respuesta es no, evidentemente. La regla de oro de la piscina cabe en una frase: todo lo que molesta a los demás nadadores debe quedarse en el vestuario. A cambio, el establecimiento garantiza agua limpia y piscinas vigiladas por profesionales. El visitante, con el gorro en la cabeza, acaba encontrando el sistema muy razonable: al fin y al cabo, se tiene derecho a nadar en paz." },
      ],
      gaps: [
        { options: ["chercher", "manger", "planter"], answer: 0, why: "«À la maison, mais j'ai oublié mon bonnet»: acaba de ir a buscarlo." },
        { options: ["permis", "conseillé", "interdit"], answer: 2, why: "La respuesta empieza con «Non»: nadar sin gorro está prohibido." },
        { options: ["cachons", "vendons", "jetons"], answer: 1, why: "«Pour deux euros»: los venden en el mostrador." },
        { options: ["chanson", "page", "phrase"], answer: 2, why: "«La règle d'or tient en une»: cabe en una frase." },
        { options: ["bassins", "rues", "toits"], answer: 0, why: "«Une eau propre et des» vigilados por profesionales: las piscinas." },
      ],
    },
  ],

  "fr-cu-b1-06": [
    {
      id: "cz-fr-b1-06-1", title: "Samedi matin à la salle de lavage", titleEs: "Sábado por la mañana en la sala de lavado", minutes: 3,
      paragraphs: [
        { it: "Dans la résidence universitaire de Montpellier, la salle de lavage est le vrai salon des nouvelles. Ce samedi matin, Chloé a installé son linge dans la machine numéro trois quand sa voisine du quatrième arrive avec un panier plein. « Il paraît que le {1} va encore augmenter au prochain semestre », lance celle-ci en versant la {2}. Chloé hoche la tête : elle a déjà entendu cette rumeur trois fois depuis septembre.", es: "En la residencia universitaria de Montpellier, la sala de lavado es el verdadero salón de las noticias. Este sábado por la mañana, Chloé ha metido su ropa en la máquina número tres cuando su vecina del cuarto llega con una cesta llena. «Parece que el alquiler va a subir otra vez el próximo semestre», suelta esta mientras echa el detergente. Chloé asiente: ya ha oído ese rumor tres veces desde septiembre." },
        { it: "Une heure plus tard, l'essorage tourne et les ragots aussi. « Sarah m'a dit que Léo {3} un appartement plus grand près de la gare », confie une autre résidente. « J'ai entendu dire que le {4} du rez-de-chaussée allait enfin être réparé. — Le responsable m'a demandé si tout allait bien, donc c'est peut-être vrai. » Chloé sourit derrière son livre : ici, chaque cycle de lavage produit trois nouvelles et une demi-{5}. Elle repartira avec son linge propre et les dernières informations du bâtiment.", es: "Una hora más tarde, el centrifugado gira y también los cotilleos. «Sarah me ha dicho que Léo buscaba un piso más grande cerca de la estación», confía otra residente. «He oído decir que la lavavajillas de la planta baja por fin se va a arreglar. — El responsable me preguntó si todo iba bien, así que puede que sea cierto». Chloé sonríe detrás de su libro: aquí, cada ciclo de lavado produce tres noticias y media verdad. Se irá con la ropa limpia y las últimas informaciones del edificio." },
      ],
      gaps: [
        { options: ["loyer", "dessert", "théâtre"], answer: 0, why: "Rumor de residencia estudiantil que «va augmenter»: el alquiler." },
        { options: ["lessive", "soupe", "sauce"], answer: 1, why: "En la sala de lavado, se echa el detergente." },
        { options: ["détestait", "repeignait", "cherchait"], answer: 2, why: "«Un appartement plus grand près de la gare»: lo estaba buscando." },
        { options: ["lave-linge", "lave-vaisselle", "four"], answer: 0, why: "La máquina averiada de la sala de lavado de la residencia: la lavadora." },
        { options: ["baguette", "vérité", "sieste"], answer: 1, why: "Tres noticias y rumor: una media verdad." },
      ],
    },
    {
      id: "cz-fr-b1-06-2", title: "De rumeur en rumeur", titleEs: "De rumor en rumor", minutes: 2,
      paragraphs: [
        { it: "L'histoire de la fête du troisième étage est un bon exemple de la façon dont une nouvelle se transforme en ragot. Au début, il s'agissait d'un simple anniversaire : vingt invités, un gâteau, de la musique douce jusqu'à 23 heures. Le lendemain, une résidente raconte que la fête avait été {1} et très bruyante ; trois jours plus tard, une autre affirme qu'il y avait eu cent personnes et des {2} cassés.", es: "La historia de la fiesta del tercer piso es un buen ejemplo de cómo una noticia se convierte en cotilleo. Al principio se trataba de un simple cumpleaños: veinte invitados, una tarta, música suave hasta las 23 horas. Al día siguiente, una residente cuenta que la fiesta había sido gigantesca y muy ruidosa; tres días más tarde, otra afirma que había habido cien personas y muebles rotos." },
        { it: "Quand la gardienne demande des explications aux étudiants du troisième, ils tombent des {3} : leur petite fête n'avait duré que trois heures et personne n'avait rien cassé. La leçon circule maintenant dans toute la résidence : avant de répéter une nouvelle, il faut vérifier sa {4}. Chloé a même inventé une règle personnelle : « Je ne répète que ce qu'on m'a {5} directement ; le reste, je le laisse dans le tambour de la machine. »", es: "Cuando la portera pide explicaciones a los estudiantes del tercero, se quedan pasmados: su pequeña fiesta solo había durado tres horas y nadie había roto nada. La lección corre ahora por toda la residencia: antes de repetir una noticia, hay que verificar su fuente. Chloé incluso ha inventado una regla personal: «Solo repito lo que me han dicho directamente; el resto lo dejo en el tambor de la máquina»." },
      ],
      gaps: [
        { options: ["gigantesque", "minuscule", "ennuyeuse"], answer: 0, why: "«Et très bruyante»: el rumor ya la agranda → gigantesca." },
        { options: ["meubles", "nuages", "bateaux"], answer: 1, why: "«Cassés» tras cien personas: los muebles rotos del rumor." },
        { options: ["nues", "chaises", "nuages"], answer: 0, why: "Los estudiantes se sorprenden al oír la versión exagerada: «tomber des nues»." },
        { options: ["couleur", "taille", "source"], answer: 2, why: "Antes de repetir una noticia: verificar su fuente." },
        { options: ["chanté", "dit", "offert"], answer: 1, why: "«Directement»: solo repite lo que le han dicho." },
      ],
    },
    {
      id: "cz-fr-b1-06-3", title: "Le journal de la résidence", titleEs: "El periódico de la residencia", minutes: 2,
      paragraphs: [
        { it: "À Montpellier, un groupe de résidences publie chaque mois un petit journal écrit par les habitants eux-mêmes. La règle de la rédaction est claire : on ne publie qu'après avoir vérifié auprès des {1}. « On m'a dit que le jardin partagé serait supprimé : nous avons demandé à la mairie avant d'écrire un seul mot », explique la rédactrice en {2}, une retraitée pleine d'énergie. Le journal sépare soigneusement les informations confirmées des simples rumeurs.", es: "En Montpellier, un grupo de residencias publica cada mes un pequeño periódico escrito por los propios habitantes. La regla de la redacción es clara: solo se publica después de haber verificado con las fuentes. «Me dijeron que el jardín compartido se iba a suprimir: preguntamos al ayuntamiento antes de escribir una sola palabra», explica la redactora jefe, una jubilada llena de energía. El periódico separa cuidadosamente la información confirmada de los simples rumores." },
        { it: "Le dernier numéro donne un bon exemple de méthode. Une habitante avait annoncé que la ligne de bus allait disparaître ; la rédaction a téléphoné à la {3} des transports et découvert que le bus serait simplement dévié pendant six semaines. L'article explique ensuite comment chacun peut {4} une information : contacter la mairie, demander un écrit, comparer les versions. Depuis la création du journal, les ragots circulent toujours, mais ils durent moins {5} qu'avant, et les habitants apprennent à séparer le certain du probable.", es: "El último número da un buen ejemplo de método. Una habitante había anunciado que la línea de autobús iba a desaparecer; la redacción telefoneó a la compañía de transportes y descubrió que el autobús solo se desviaría durante seis semanas. El artículo explica después cómo cada uno puede verificar una información: contactar con el ayuntamiento, pedir algo por escrito, comparar versiones. Desde la creación del periódico, los cotilleos siguen circulando, pero duran menos tiempo que antes y los vecinos aprenden a separar lo cierto de lo probable." },
      ],
      gaps: [
        { options: ["murs", "machines", "sources"], answer: 2, why: "«Nous avons demandé à la mairie avant d'écrire»: verificar con las fuentes." },
        { options: ["chef", "groupe", "page"], answer: 0, why: "«La rédactrice en» + una jubilada que dirige: redactora jefe." },
        { options: ["compagnie", "boulangerie", "discothèque"], answer: 0, why: "«Des transports»: la empresa que gestiona los autobuses." },
        { options: ["cacher", "inventer", "vérifier"], answer: 2, why: "«Contacter la mairie, demander un écrit»: el método para verificar." },
        { options: ["longtemps", "vite", "cher"], answer: 0, why: "Los cotilleos siguen pero duran menos tiempo gracias al periódico." },
      ],
    },
  ],

  "fr-cu-b1-07": [
    {
      id: "cz-fr-b1-07-1", title: "Une matinée dans le Panier", titleEs: "Una mañana en Le Panier", minutes: 3,
      paragraphs: [
        { it: "Samedi, Manon fait visiter son quartier à son amie espagnole. « Le Panier, c'est le plus ancien {1} de Marseille, explique-t-elle en montant la première ruelle. Ces pierres existaient déjà avant les voitures. » Les deux amies s'arrêtent devant une boutique de savon de Marseille, puis devant la {2} où l'on vend des navettes, les petits biscuits parfumés à la fleur d'oranger.", es: "El sábado, Manon enseña su barrio a su amiga española. «Le Panier es el barrio más antiguo de Marsella», explica subiendo la primera callejuela. «Estas piedras ya existían antes que los coches». Las dos amigas se detienen ante una tienda de jabón de Marsella y luego ante la panadería donde venden navettes, las pequeñas galletas perfumadas con azahar." },
        { it: "Plus haut, la place des Moulins raconte son histoire : au Moyen Âge, il y avait là des moulins dont il ne reste que le {3}. « Tu vois cette ruelle étroite ? C'est celle où j'ai appris à faire du vélo », dit Manon avec émotion. À midi, elles s'installent sur une terrasse ombragée d'où l'on voit le {4} et les toits blonds. « C'est un quartier dont tout le monde {5}, conclut Manon, mais il garde ses secrets pour ceux qui y vivent. »", es: "Más arriba, la plaza de los Molinos cuenta su historia: en la Edad Media había allí molinos de los que solo queda el nombre. «¿Ves esa callejuela estrecha? Es aquella en la que aprendí a montar en bici», dice Manon con emoción. A mediodía se instalan en una terraza sombreada desde donde se ve el puerto y los tejados dorados. «Es un barrio del que todo el mundo habla, concluye Manon, pero guarda sus secretos para quienes viven en él»." },
      ],
      gaps: [
        { options: ["quartier", "musée", "aéroport"], answer: 0, why: "«Le plus ancien» con ruelles y piedras de Marsella: el barrio." },
        { options: ["pharmacie", "boulangerie", "banque"], answer: 1, why: "Donde venden las navettes, unas galletas: la panadería." },
        { options: ["nom", "pain", "moteur"], answer: 0, why: "De los molinos medievales «il ne reste que le»: solo el nombre." },
        { options: ["désert", "port", "métro"], answer: 1, why: "Desde una terraza de Marsella se ven el puerto y los tejados." },
        { options: ["parle", "dort", "doute"], answer: 0, why: "«Un quartier dont tout le monde» + guarda secretos: del que todos hablan." },
      ],
    },
    {
      id: "cz-fr-b1-07-2", title: "L'article de « Marseille secret »", titleEs: "El artículo de «Marsella secreta»", minutes: 2,
      paragraphs: [
        { it: "Rentrée à la maison, l'amie espagnole rédige sa première entrée pour le guide « Marseille secret ». Elle décrit la Vieille Charité, un ancien {1} transformé en {2}, dont la cour tranquille contraste avec les ruelles animées. Elle note aussi la boutique de savon que les touristes photographient sans arrêt et le café où les artistes du coin prennent leur café le matin.", es: "De vuelta en casa, la amiga española redacta su primera entrada para la guía «Marsella secreta». Describe la Vieille Charité, un antiguo hospicio transformado en museo, cuyo patio tranquilo contrasta con las callejuelas animadas. Anota también la tienda de jabón que los turistas fotografían sin parar y el café donde los artistas de la zona toman su café por la mañana." },
        { it: "Son texte doit plaire aux lecteurs qui cherchent des adresses loin des foules. Elle conseille de venir le matin, quand la {3} est douce et les ruelles silencieuses, et de monter par l'escalier du coteau plutôt que par la grande rue. Elle termine par une adresse secrète : une minuscule épicerie où l'on vend du miel des {4} des Alpilles et où le patron raconte des histoires de quartier à qui veut les {5}. Selon elle, c'est exactement ce que les lecteurs d'un guide « secret » espèrent trouver.", es: "Su texto debe gustar a los lectores que buscan direcciones lejos de las multitudes. Aconseja venir por la mañana, cuando la luz es suave y las callejuelas silenciosas, y subir por la escalera de la colina más que por la calle grande. Termina con una dirección secreta: una minúscula tienda de ultramarinos donde venden miel de las colinas de las Alpillas y donde el dueño cuenta historias del barrio a quien quiera escucharlas. Según ella, es exactamente lo que los lectores de una guía «secreta» esperan encontrar." },
      ],
      gaps: [
        { options: ["hospice", "stade", "gare"], answer: 0, why: "La Vieille Charité de Marsella: un antiguo hospicio." },
        { options: ["prison", "musée", "piscine"], answer: 1, why: "«Transformé en» con patio tranquilo y visitas: un museo." },
        { options: ["lumière", "neige", "circulation"], answer: 0, why: "«Douce» por la mañana en el sur de Francia: la luz." },
        { options: ["caisses", "vitrines", "collines"], answer: 2, why: "Miel de las Alpillas: miel de las colinas." },
        { options: ["écouter", "acheter", "peindre"], answer: 0, why: "El dueño cuenta historias a quien quiera escucharlas." },
      ],
    },
    {
      id: "cz-fr-b1-07-3", title: "Le quartier des artistes", titleEs: "El barrio de los artistas", minutes: 3,
      paragraphs: [
        { it: "Dans les années 1990, le Panier était un quartier {1} que beaucoup de Marseillais évitaient. Puis des artistes s'y sont installés, attirés par les loyers bas et la lumière du sud. Les ateliers ont ouvert les uns après les autres, et une {2} nouvelle s'est créée : celle des créateurs, des peintres et des artisans d'art. Aujourd'hui, certaines galeries exposent des œuvres dont s'inspirent de jeunes designers.", es: "En los años noventa, Le Panier era un barrio abandonado que muchos marselleses evitaban. Luego artistas se instalaron allí, atraídos por los alquileres bajos y la luz del sur. Los talleres abrieron uno tras otro y se creó una comunidad nueva: la de los creadores, los pintores y los artesanos de arte. Hoy, algunas galerías exponen obras de las que se inspiran jóvenes diseñadores." },
        { it: "La transformation n'a pas fait disparaître les habitants historiques : les joueurs de pétanque du square gardent leur {3}, et les épiciers servent toujours le pastis aux mêmes habitués. Les nouveaux venus, eux, apprennent lentement les {4} du quartier : saluer les voisins, acheter chez les commerçants locaux, laisser la place aux anciens. Le Panier reste un endroit où l'on se connaît, une colline que le {5} n'a pas encore entièrement changée, et c'est peut-être cela, son vrai charme.", es: "La transformación no ha hecho desaparecer a los habitantes históricos: los jugadores de petanca de la placita conservan su terreno y los tenderos sirven siempre el pastís a los mismos habituales. Los recién llegados, por su parte, aprenden despacio las costumbres del barrio: saludar a los vecinos, comprar en los comercios locales, ceder el sitio a los antiguos. Le Panier sigue siendo un lugar donde la gente se conoce, una colina que el tiempo aún no ha cambiado del todo, y quizá eso sea su verdadero encanto." },
      ],
      gaps: [
        { options: ["délaissé", "animé", "moderne"], answer: 0, why: "«Que beaucoup de Marseillais évitaient»: un barrio abandonado." },
        { options: ["règle", "communauté", "facture"], answer: 1, why: "Creadores, pintores y artesanos juntos: una comunidad." },
        { options: ["terrain", "billet", "secret"], answer: 0, why: "Los jugadores de petanca conservan su terreno de juego." },
        { options: ["prix", "clés", "coutumes"], answer: 2, why: "«Saluer les voisins, acheter chez les commerçants»: las costumbres locales." },
        { options: ["temps", "thé", "tabac"], answer: 0, why: "«N'a pas encore entièrement changée»: lo que transforma todo es el tiempo." },
      ],
    },
  ],

  "fr-cu-b1-08": [
    {
      id: "cz-fr-b1-08-1", title: "L'atelier de la mobilité", titleEs: "El taller de la movilidad", minutes: 3,
      paragraphs: [
        { it: "Dans la maison des associations de Grenoble, l'atelier public sur la mobilité réunit une trentaine de personnes. À cause des {1} dans le centre, de la circulation devenue difficile et de l'air souvent pollué, la ville cherche des solutions. Émilie, de l'association cycliste, ouvre le débat : « Grâce aux nouvelles pistes, certains quartiers respirent déjà mieux. Nous devons donc {2} ce réseau. »", es: "En la casa de las asociaciones de Grenoble, el taller público sobre movilidad reúne a una treintena de personas. Por culpa de las obras en el centro, del tráfico vuelto difícil y del aire a menudo contaminado, la ciudad busca soluciones. Émilie, de la asociación ciclista, abre el debate: «Gracias a los nuevos carriles, algunos barrios ya respiran mejor. Por eso debemos extender esta red»." },
        { it: "Nicolas, commerçant de la rue Gambetta, répond avec prudence : « À cause des pistes, j'ai perdu des {3} de passage ; les voitures ne s'arrêtent plus devant ma boutique. » L'animateur cherche un compromis : « Parce que le débat nous {4}, nous allons organiser des visites de terrain. Chacun pourra mesurer le {5} réel du plan vélo sur son quartier. » La séance se termine dans un climat d'écoute, chose rare dans ce type de réunion.", es: "Nicolas, comerciante de la calle Gambetta, responde con prudencia: «Por culpa de los carriles he perdido clientes de paso; los coches ya no se detienen delante de mi tienda». El animador busca un compromiso: «Como el debate nos divide, vamos a organizar visitas sobre el terreno. Cada uno podrá medir el impacto real del plan bici en su barrio». La sesión termina en un clima de escucha, cosa rara en este tipo de reuniones." },
      ],
      gaps: [
        { options: ["travaux", "oiseaux", "mariages"], answer: 0, why: "«Circulation difficile» en el centro: por culpa de las obras." },
        { options: ["fermer", "peindre", "étendre"], answer: 2, why: "«Grâce aux nouvelles pistes, certains quartiers respirent»: ampliar la red." },
        { options: ["clients", "volets", "amis"], answer: 0, why: "«Les voitures ne s'arrêtent plus devant ma boutique»: pierde clientes." },
        { options: ["endort", "amuse", "divise"], answer: 2, why: "Émilie y Nicolas tienen opiniones opuestas: el debate los divide." },
        { options: ["impact", "poids", "prix"], answer: 0, why: "«Mesurer le» real del plan bici: su impacto." },
      ],
    },
    {
      id: "cz-fr-b1-08-2", title: "Le plan vélo, un an après", titleEs: "El plan bici, un año después", minutes: 2,
      paragraphs: [
        { it: "Un an après le lancement du plan vélo de Grenoble, le bilan présente deux visages. Grâce aux nouvelles pistes protégées, le {1} de cyclistes a augmenté de 30 % dans le centre. Les écoles signalent que plus d'élèves viennent à vélo, et les locations de vélos électriques affichent complet le {2}. En revanche, les automobilistes se plaignent de la place perdue sur certaines rues.", es: "Un año después del lanzamiento del plan bici de Grenoble, el balance presenta dos caras. Gracias a los nuevos carriles protegidos, el número de ciclistas ha aumentado un 30 % en el centro. Las escuelas señalan que más alumnos vienen en bici y los alquileres de bicis eléctricas muestran completo el fin de semana. En cambio, los automovilistas se quejan del espacio perdido en ciertas calles." },
        { it: "À cause de la {3} de voies, certaines rues sont devenues étroites pour les camions de livraison. Les commerçants du marché ont donc demandé des créneaux horaires {4} pour les livraisons du matin. La mairie a répondu favorablement, et depuis, grâce au dialogue, les livraisons se font sans bloquer les pistes. Somme toute, le plan vélo avance : parce que la ville a écouté, chacun a gagné un peu de {5} et beaucoup de calme.", es: "Por culpa de la reducción de carriles, ciertas calles se han vuelto estrechas para los camiones de reparto. Los comerciantes del mercado pidieron por ello franjas horarias reservadas para las entregas de la mañana. El ayuntamiento respondió favorablemente y desde entonces, gracias al diálogo, las entregas se hacen sin bloquear los carriles. En suma, el plan bici avanza: como la ciudad escuchó, cada uno ha ganado algo de espacio y mucha calma." },
      ],
      gaps: [
        { options: ["nombre", "bruit", "prix"], answer: 0, why: "«A augmenté de 30 %»: lo que sube es el número de ciclistas." },
        { options: ["janvier", "week-end", "jamais"], answer: 1, why: "Los alquileres de bicis completos: el fin de semana." },
        { options: ["réduction", "couleur", "fête"], answer: 0, why: "Calles estrechas para los camiones: por la reducción de carriles." },
        { options: ["interdits", "aléatoires", "réservés"], answer: 2, why: "Franjas horarias para las entregas: reservadas." },
        { options: ["place", "bruit", "vitesse"], answer: 0, why: "«Beaucoup de calme» tras escuchar a todos: algo de espacio." },
      ],
    },
    {
      id: "cz-fr-b1-08-3", title: "La lettre au journal local", titleEs: "La carta al periódico local", minutes: 2,
      paragraphs: [
        { it: "Dans le courrier des lecteurs du journal de Grenoble, une habitante de la Villeneuve écrit son opinion sur la mobilité. « Parce que je travaille de nuit, je rentre en voiture vers 3 heures du {1}. Depuis la piétonnisation de ma rue, je dois marcher quinze minutes depuis le parking. Je comprends les raisons de la mairie, mais personne n'a pensé aux {2} comme moi. »", es: "En el correo de los lectores del periódico de Grenoble, una habitante de la Villeneuve escribe su opinión sobre la movilidad. «Como trabajo de noche, vuelvo en coche hacia las 3 de la mañana. Desde la peatonalización de mi calle, tengo que andar quince minutos desde el aparcamiento. Entiendo las razones del ayuntamiento, pero nadie ha pensado en los trabajadores nocturnos como yo»." },
        { it: "Sa lettre a déclenché quarante réactions. Un cycliste répond que, grâce aux pistes, sa fille peut désormais aller au {3} à vélo sans danger. Une association de personnes âgées souligne que les bancs manquent le long des nouvelles rues piétonnes. La mairie, elle, annonce une étude : parce que les {4} ont parlé, elle installera des éclairages adaptés et testera une navette de nuit. La leçon de ce courrier est claire : une ville écologique doit {5} tous ses habitants, même ceux qui rentrent à 3 heures du matin.", es: "Su carta ha desencadenado cuarenta reacciones. Un ciclista responde que, gracias a los carriles, su hija ya puede ir al instituto en bici sin peligro. Una asociación de personas mayores señala que faltan bancos a lo largo de las nuevas calles peatonales. El ayuntamiento, por su parte, anuncia un estudio: como los habitantes han hablado, instalará alumbrados adaptados y probará una lanzadera nocturna. La lección de este correo es clara: una ciudad ecológica debe incluir a todos sus habitantes, incluso a los que vuelven a las 3 de la mañana." },
      ],
      gaps: [
        { options: ["matin", "soir", "mars"], answer: 0, why: "«Je travaille de nuit»: vuelve hacia las 3 de la mañana." },
        { options: ["touristes", "travailleurs de nuit", "retraités"], answer: 1, why: "«Comme moi»: nadie pensó en quienes trabajan de noche." },
        { options: ["collège", "casino", "cirque"], answer: 0, why: "Su hija va sin peligro en bici: al instituto." },
        { options: ["camions", "habitants", "pigeons"], answer: 1, why: "El correo de los lectores: porque los habitantes hablaron." },
        { options: ["exclure", "oublier", "inclure"], answer: 2, why: "«Tous ses habitants, même ceux qui rentrent tard»: incluirlos." },
      ],
    },
  ],

  "fr-cu-b1-09": [
    {
      id: "cz-fr-b1-09-1", title: "Mardi, 10 heures", titleEs: "Martes, 10 horas", minutes: 3,
      paragraphs: [
        { it: "Dans une agence de communication parisienne, Madame Rousseau reçoit les candidats pour un stage de six mois. À 10 heures précises, c'est le tour d'Elena, espagnole et diplômée depuis trois mois. « Parlez-moi de vous », lance la directrice avec un sourire professionnel. Elena respire un grand coup et commence : « J'ai d'abord suivi une formation en graphisme à Barcelone ; ensuite, j'ai travaillé un an dans une petite {1}, où j'ai appris à créer des logos et à respecter les délais. »", es: "En una agencia de comunicación parisina, Madame Rousseau recibe a los candidatos para unas prácticas de seis meses. A las 10 en punto, le toca a Elena, española y titulada desde hacía tres meses. «Hábleme de usted», lanza la directora con una sonrisa profesional. Elena respira hondo y empieza: «Primero seguí una formación en diseño gráfico en Barcelona; después trabajé un año en una pequeña agencia, donde aprendí a crear logotipos y a respetar los plazos»." },
        { it: "La directrice note des mots, hoche la tête, pose des questions précises : « Quelles sont vos compétences en {2} ? — Je me suis spécialisée en identité visuelle, je maîtrise deux logiciels de création, et je viens de terminer un projet personnel : une affiche pour un festival de {3} de mon quartier. » Vingt minutes plus tard, l'entretien s'achève. Madame Rousseau serre la main de la candidate : « Vous {4} bien vos idées. Nous vous répondrons avant vendredi. » Dans le couloir, Elena souffle : elle vient de passer l'entretien le plus important de sa {5}.", es: "La directora anota palabras, asiente, hace preguntas precisas: «¿Cuáles son sus competencias en diseño? — Me he especializado en identidad visual, domino dos programas de creación y acabo de terminar un proyecto personal: un cartel para un festival de música de mi barrio». Veinte minutos más tarde, la entrevista termina. Madame Rousseau estrecha la mano de la candidata: «Presenta bien sus ideas. Le responderemos antes del viernes». En el pasillo, Elena respira: acaba de pasar la entrevista más importante de su carrera." },
      ],
      gaps: [
        { options: ["agence", "ferme", "pharmacie"], answer: 0, why: "«Créer des logos et respecter les délais»: trabajó en una agencia." },
        { options: ["cuisine", "design", "sport"], answer: 1, why: "«Identité visuelle» y programas de creación: sus competencias en diseño." },
        { options: ["musique", "poubelles", "impôts"], answer: 0, why: "«Un festival de» con cartel del barrio: de música." },
        { options: ["cachez", "achetez", "présentez"], answer: 2, why: "Tras exponer su recorrido con claridad: presenta bien sus ideas." },
        { options: ["carrière", "voiture", "sieste"], answer: 0, why: "La entrevista más importante de su vida profesional: su carrera." },
      ],
    },
    {
      id: "cz-fr-b1-09-2", title: "La préparation", titleEs: "La preparación", minutes: 2,
      paragraphs: [
        { it: "Deux jours avant l'entretien, Elena avait préparé chaque détail. Elle avait relu son CV dix fois, imprimé sa lettre de {1} sur papier blanc et répété ses réponses à voix haute devant le miroir de la salle de bains. Sa colocataire avait joué le rôle de la directrice et lui avait posé les questions les plus {2} : « Pourquoi notre agence ? Quel est votre principal défaut ? Où vous voyez-vous dans cinq ans ? »", es: "Dos días antes de la entrevista, Elena había preparado cada detalle. Había releído su CV diez veces, impreso su carta de motivación en papel blanco y ensayado sus respuestas en voz alta delante del espejo del baño. Su compañera de piso había hecho el papel de la directora y le había hecho las preguntas más difíciles: «¿Por qué nuestra agencia? ¿Cuál es su principal defecto? ¿Dónde se ve dentro de cinco años?»" },
        { it: "Le matin du grand jour, Elena avait choisi une tenue simple : un pantalon sombre et des chaussures confortables pour marcher. Elle était arrivée avec vingt minutes d'{3}, juste le temps de respirer calmement dans la rue. Dans le hall, elle avait éteint son {4} avant d'entrer : rien ne doit sonner pendant un entretien. Quand la standardiste l'avait appelée, elle s'était redressée, avait souri et avait tendu une {5} ferme. Toutes ces répétitions, finalement, lui avaient donné un calme précieux.", es: "La mañana del gran día, Elena había elegido un conjunto sencillo: un pantalón oscuro y zapatos cómodos para caminar. Había llegado con veinte minutos de antelación, justo el tiempo de respirar con calma en la calle. En el vestíbulo, había apagado su teléfono antes de entrar: nada debe sonar durante una entrevista. Cuando la telefonista la llamó, se enderezó, sonrió y tendió una mano firme. Todos esos ensayos, al final, le habían dado una calma preciosa." },
      ],
      gaps: [
        { options: ["motivation", "félicitations", "plainte"], answer: 0, why: "Se imprime junto al CV para una candidatura: la carta de motivación." },
        { options: ["faciles", "absurdes", "difficiles"], answer: 2, why: "«Pourquoi notre agence ? Votre principal défaut ?»: las preguntas difíciles." },
        { options: ["avance", "retard", "été"], answer: 0, why: "«Juste le temps de respirer calmement»: llegó con antelación." },
        { options: ["ventilateur", "parapluie", "téléphone"], answer: 2, why: "«Rien ne doit sonner pendant un entretien»: el teléfono apagado." },
        { options: ["main", "langue", "épaule"], answer: 0, why: "«S'était redressée, avait souri et avait tendu une» firme: la mano." },
      ],
    },
    {
      id: "cz-fr-b1-09-3", title: "Les questions du candidat", titleEs: "Las preguntas de la candidata", minutes: 2,
      paragraphs: [
        { it: "À la fin de l'entretien, Madame Rousseau pose la question rituelle : « Avez-vous des questions ? » Elena en a préparé trois. La première concerne le {1} quotidien : travaillera-t-elle sur des projets réels ou seulement sur des tâches administratives ? La deuxième porte sur l'équipe : combien de personnes partagent l'atelier ? La troisième touche aux {2} : le stage sera-t-il payé au-delà du minimum légal ?", es: "Al final de la entrevista, Madame Rousseau hace la pregunta ritual: «¿Tiene alguna pregunta?». Elena ha preparado tres. La primera concierne al trabajo diario: ¿trabajará en proyectos reales o solo en tareas administrativas? La segunda trata del equipo: ¿cuántas personas comparten el taller? La tercera toca las condiciones: ¿se pagarán las prácticas por encima del mínimo legal?" },
        { it: "La directrice répond avec honnêteté : les stagiaires participent à deux projets réels par semestre, l'équipe compte neuf personnes et la {3} suit le barème officiel. Elle apprécie ces questions : « Un candidat qui ne pose aucune question me semble {4} », avoue-t-elle après le départ d'Elena. Trois jours plus tard, la candidate reçoit la réponse : elle est retenue. Dans son message de remerciement, elle écrit qu'elle vient de franchir la première grande {5} de sa vie professionnelle.", es: "La directora responde con honestidad: los estudiantes en prácticas participan en dos proyectos reales por semestre, el equipo cuenta con nueve personas y la gratificación sigue el baremo oficial. Ella valora estas preguntas: «Un candidato que no hace ninguna pregunta me parece desinteresado», confiesa tras la marcha de Elena. Tres días después, la candidata recibe la respuesta: queda seleccionada. En su mensaje de agradecimiento, escribe que acaba de cruzar el primer gran escalón de su vida profesional." },
      ],
      gaps: [
        { options: ["travail", "loisir", "voisinage"], answer: 0, why: "«Projets réels ou tâches administratives»: el trabajo diario." },
        { options: ["couleurs", "conditions", "voisins"], answer: 1, why: "«Le stage sera-t-il payé»: pregunta por las condiciones." },
        { options: ["gratification", "note", "baguette"], answer: 0, why: "«Suit le barème officiel» de las prácticas: la gratificación." },
        { options: ["curieux", "parfait", "désintéressé"], answer: 2, why: "Quien no pregunta nada parece no interesarse: desinteresado." },
        { options: ["chute", "étape", "porte"], answer: 1, why: "«La première grande» de su vida profesional: una etapa." },
      ],
    },
  ],

  "fr-cu-b1-10": [
    {
      id: "cz-fr-b1-10-1", title: "La conférence de rédaction", titleEs: "La conferencia de redacción", minutes: 3,
      paragraphs: [
        { it: "Chaque matin à 9 heures, la rédaction du journal rennais se réunit autour de la grande table pour la conférence. Julien, le rédacteur en chef, distribue les sujets : « Le nouveau tramway entre en service samedi ; tu couvriras la {1}. La piscine du centre a été {2} hier soir à cause d'une fuite ; quelqu'un doit appeler la mairie. Et il me faut un article léger sur le marché du samedi. »", es: "Cada mañana a las 9 horas, la redacción del periódico rennés se reúne alrededor de la mesa grande para la conferencia. Julien, el redactor jefe, reparte los temas: «El nuevo tranvía entra en servicio el sábado; cubrirás la ceremonia. La piscina del centro fue cerrada anoche por culpa de una fuga; alguien tiene que llamar al ayuntamiento. Y necesito un artículo ligero sobre el mercado del sábado»." },
        { it: "Les journalistes prennent des notes, proposent des angles, discutent. « Les titres seront {3} par la secrétaire de rédaction en début d'après-midi », rappelle Julien. Un jeune reporter demande à suivre l'histoire de la {4} : il veut interviewer les nageurs surpris par la fermeture. La réunion dure quarante minutes ; ensuite, chacun court à son sujet. Dans une rédaction, les journées sont {5} par cette réunion du matin : elle décide de la une du lendemain.", es: "Los periodistas toman notas, proponen enfoques, discuten. «Los titulares serán revisados por la secretaria de redacción a primera hora de la tarde», recuerda Julien. Un joven reportero pide seguir la historia de la fuga: quiere entrevistar a los nadadores sorprendidos por el cierre. La reunión dura cuarenta minutos; después, cada uno corre a su tema. En una redacción, las jornadas están ritmadas por esta reunión matinal: ella decide la portada del día siguiente." },
      ],
      gaps: [
        { options: ["cérémonie", "sieste", "grève"], answer: 0, why: "El tranvía entra en servicio el sábado y hay que cubrirla: la ceremonia." },
        { options: ["repeinte", "fermée", "agrandie"], answer: 1, why: "«À cause d'une fuite» anoche: fue cerrada." },
        { options: ["relus", "chantés", "oubliés"], answer: 0, why: "La secretaria de redacción revisa los titulares." },
        { options: ["fête", "mode", "fuite"], answer: 2, why: "«Les nageurs surpris par la fermeture»: la historia de la fuga." },
        { options: ["rythmées", "raccourcies", "gâchées"], answer: 0, why: "La reunión del mañana marca el ritmo de las jornadas." },
      ],
    },
    {
      id: "cz-fr-b1-10-2", title: "Le tramway est inauguré", titleEs: "El tranvía es inaugurado", minutes: 2,
      paragraphs: [
        { it: "Samedi matin, sous une pluie fine, la nouvelle ligne de tramway a été {1} par le maire de Rennes en présence de deux cents invités. Le premier trajet a été effectué par des habitants tirés au sort, et les discours ont été {2} par des applaudissements chaleureux. La ligne, longue de neuf kilomètres, a été construite en dix-huit mois, un record selon la mairie.", es: "El sábado por la mañana, bajo una lluvia fina, la nueva línea de tranvía fue inaugurada por el alcalde de Rennes en presencia de doscientos invitados. El primer trayecto fue realizado por vecinos sorteados y los discursos fueron saludados con aplausos calurosos. La línea, de nueve kilómetros, fue construida en dieciocho meses, un récord según el ayuntamiento." },
        { it: "Pendant la semaine suivante, la ligne a été {3} par des milliers de curieux : le tramway a été surnommé « la navette » par les usagers, et la fréquentation a été estimée à quarante mille voyages par jour. Quelques problèmes ont été {4} par les premiers voyageurs : des portes trop lentes, un abri manquant. Chaque remarque a été transmise à l'exploitant, et les ajustements seront {5} avant l'été. L'histoire de cette ligne illustre bien le quotidien d'une rédaction locale : suivre un chantier jusqu'au dernier boulon.", es: "Durante la semana siguiente, la línea fue probada por miles de curiosos: los usuarios apodaron al tranvía «la navette» y la frecuentación fue estimada en cuarenta mil viajes diarios. Algunos problemas fueron señalados por los primeros viajeros: puertas lentas, una marquesina que faltaba. Cada observación fue transmitida al operador y los ajustes serán realizados antes del verano. La historia de esta línea ilustra bien el cotidiano de una redacción local: seguir una obra hasta el último tornillo." },
      ],
      gaps: [
        { options: ["inaugurée", "interdite", "démolie"], answer: 0, why: "«Par le maire» ante doscientos invitados: fue inaugurada." },
        { options: ["ignorés", "salués", "critiqués"], answer: 1, why: "«Par des applaudissements chaleureux»: los discursos fueron aplaudidos." },
        { options: ["testée", "refusée", "peinte"], answer: 0, why: "«Par des milliers de curieux»: la línea fue probada." },
        { options: ["cachés", "pardonnés", "signalés"], answer: 2, why: "Puertas lentas y una marquesina ausente: problemas señalados." },
        { options: ["réalisés", "annulés", "oubliés"], answer: 0, why: "Cada observación transmitida al operador: ajustes realizados." },
      ],
    },
    {
      id: "cz-fr-b1-10-3", title: "La fuite de la piscine", titleEs: "La fuga de la piscina", minutes: 2,
      paragraphs: [
        { it: "Lundi soir, vers 21 heures, une fuite d'eau a été {1} par un agent d'entretien dans la chaufferie de la piscine municipale. L'alerte a été donnée immédiatement, et le bâtiment a été {2} par les pompiers en moins d'une heure. Heureusement, aucun baigneur ne se trouvait dans les bassins : l'incident a été découvert après la fermeture au public.", es: "El lunes por la noche, hacia las 21 horas, una fuga de agua fue detectada por un agente de mantenimiento en la sala de calderas de la piscina municipal. La alerta se dio de inmediato y el edificio fue inspeccionado por los bomberos en menos de una hora. Afortunadamente, ningún nadador se encontraba en las piscinas: el incidente fue descubierto después del cierre al público." },
        { it: "Le lendemain, l'information a été {3} par le journal local : « Piscine fermée jusqu'à nouvel ordre ». Les abonnés ont été prévenus par courriel, et les cours d'aquagym ont été {4} à la salle omnisports voisine. Selon la mairie, les réparations seront terminées en deux semaines. Dans ce genre d'article, le journaliste n'accuse personne : les faits sont {5} avec sobriété, et c'est le lecteur qui tire ses conclusions.", es: "Al día siguiente, la información fue publicada por el periódico local: «Piscina cerrada hasta nuevo aviso». Los abonados fueron avisados por correo electrónico y las clases de aquagym fueron trasladadas al polideportivo vecino. Según el ayuntamiento, las reparaciones estarán terminadas en dos semanas. En este tipo de artículo, el periodista no acusa a nadie: los hechos son presentados con sobriedad y es el lector quien saca sus conclusiones." },
      ],
      gaps: [
        { options: ["détectée", "organisée", "ignorée"], answer: 0, why: "«Par un agent d'entretien» en la sala de calderas: fue detectada." },
        { options: ["inondé", "décoré", "inspecté"], answer: 2, why: "«Par les pompiers en moins d'une heure»: fue inspeccionado." },
        { options: ["publiée", "cachée", "vendue"], answer: 0, why: "«Par le journal local» con titular: fue publicada." },
        { options: ["supprimés", "déplacés", "offerts"], answer: 1, why: "«À la salle omnisports voisine»: las clases fueron trasladadas." },
        { options: ["exagérés", "inventés", "présentés"], answer: 2, why: "«Avec sobriété», sin acusar a nadie: hechos presentados." },
      ],
    },
  ],

  "fr-cu-b1-11": [
    {
      id: "cz-fr-b1-11-1", title: "Le groupe « Opération M30 »", titleEs: "El grupo «Operación M30»", minutes: 3,
      paragraphs: [
        { it: "Depuis lundi, un groupe de messages s'est créé à Bordeaux : « Opération M30 », la fête surprise des trente ans de Manon. Léo, l'organisateur, écrit des consignes précises : « Il faut qu'on arrive avant 19 heures, il faut que la déco soit prête avant sa sortie du travail, et surtout, il faut que Manon reste dans l'{1} totale. Je veux que chacun apporte un plat, et je suis content que tout le monde soit aussi motivé. »", es: "Desde el lunes, se ha creado un grupo de mensajes en Burdeos: «Operación M30», la fiesta sorpresa de los treinta años de Manon. Léo, el organizador, escribe consignas precisas: «Hace falta que lleguemos antes de las 19, hace falta que la decoración esté lista antes de que salga del trabajo y, sobre todo, hace falta que Manon siga totalmente a ciegas. Quiero que cada uno traiga un plato y estoy contento de que todos estéis tan motivados»." },
        { it: "Les réponses pleuvent : « Je veux que le {2} soit au chocolat », « Il faut que quelqu'un achète les bougies », « J'ai peur que la voisine parle trop, alors je vais l'appeler en privé ». Chacun propose son talent : la musique sera mixée par le cousin, les photos seront prises par la {3} de Léo. Dans le groupe, on rit beaucoup, mais on reste discret : à Bordeaux, une fête surprise se prépare comme une {4} militaire, et le moindre indice peut tout {5}.", es: "Las respuestas llueven: «Quiero que la tarta sea de chocolate», «Hace falta que alguien compre las velas», «Temo que la vecina hable demasiado, así que la llamaré en privado». Cada uno ofrece su talento: la música será pinchada por el primo y las fotos serán hechas por la hermana de Léo. En el grupo se ríe mucho, pero se discreto: en Burdeos, una fiesta sorpresa se prepara como una operación militar y el menor indicio puede revelarlo todo." },
      ],
      gaps: [
        { options: ["ignorance", "cuisine", "colère"], answer: 0, why: "Manon no debe sospechar nada: que siga en la ignorancia total." },
        { options: ["journal", "gâteau", "parapluie"], answer: 1, why: "«Soit au chocolat»: la tarta de la fiesta." },
        { options: ["sœur", "lampe", "table"], answer: 0, why: "Quien hace las fotos es una persona: la hermana de Léo." },
        { options: ["sieste", "opération", "recette"], answer: 1, why: "«Militaire» + discreción total: una operación." },
        { options: ["révéler", "ranger", "cuire"], answer: 0, why: "«Le moindre indice peut tout»: el menor indicio lo revela todo." },
      ],
    },
    {
      id: "cz-fr-b1-11-2", title: "Le jour J", titleEs: "El día D", minutes: 2,
      paragraphs: [
        { it: "Samedi, 18 heures : le studio de Léo se remplit de ballons. La déco a été terminée à 17 heures par deux amies, la table a été garnie de plats apportés par chacun, et la {1} a été testée trois fois. À 18 h 45, le téléphone de Manon sonne : sa collègue doit la {2} au café jusqu'à 19 heures précises, le temps que tout le monde se taise et que les lampes s'éteignent.", es: "Sábado, 18 horas: el estudio de Léo se llena de globos. La decoración fue terminada a las 17 por dos amigas, la mesa fue cargada con platos traídos por cada uno y la música fue probada tres veces. A las 18 h 45, suena el teléfono de Manon: su compañera debe retenerla en el café hasta las 19 en punto, el tiempo para que todos se callen y las lámparas se apaguen." },
        { it: "19 h 03 : des pas dans l'escalier. Manon pousse la {3}, le noir total, puis « JOYEUX ANNIVERSAIRE ! » Sa réaction dépasse les espérances : elle reste sans voix une minute entière, les larmes aux yeux. « J'ai failli {4} au restaurant avec mes collègues ce soir ; si j'y étais allée, j'aurais raté ma propre fête ! » La soirée durera jusqu'à 2 heures du matin, et le lendemain, tout le monde s'endormira avec le sourire. Il faut dire que les surprises réussies sont rares : celle-ci a été {5} au millimètre.", es: "19 h 03: unos pasos en la escalera. Manon empuja la puerta, oscuridad total y luego «¡FELIZ CUMPLEAÑOS!». Su reacción supera las esperanzas: se queda sin palabras un minuto entero, con lágrimas en los ojos. «Estuve a punto de cenar en el restaurante con mis compañeras esta noche; ¡si hubiera ido, me habría perdido mi propia fiesta!». La velada durará hasta las 2 de la madrugada y al día siguiente todo el mundo se dormirá con una sonrisa. Hay que decirlo: las sorpresas logradas son raras, y esta fue calculada al milímetro." },
      ],
      gaps: [
        { options: ["musique", "télévision", "tondeuse"], answer: 0, why: "Se prueba tres veces antes de una fiesta: la música." },
        { options: ["presser", "retenir", "suivre"], answer: 1, why: "En el café hasta las 19 en punto: la colega debe retenerla." },
        { options: ["porte", "bouche", "pédale"], answer: 0, why: "«Des pas dans l'escalier» + oscuridad: empuja la puerta." },
        { options: ["dormir", "dîner", "nager"], answer: 1, why: "«Au restaurant avec mes collègues»: estuvo a punto de cenar." },
        { options: ["improvisée", "ratée", "calculée"], answer: 2, why: "«Les surprises réussies sont rares»: esta fue calculada al milímetro." },
      ],
    },
    {
      id: "cz-fr-b1-11-3", title: "Le lendemain de la fête", titleEs: "El día después de la fiesta", minutes: 2,
      paragraphs: [
        { it: "Dimanche midi, le groupe « Opération M30 » dort encore quand Manon écrit son premier message : « Je n'ai toujours pas réalisé. Je suis si {1} que vous ayez pensé à tout : même mes bougies préférées, celles dont je vous avais parlé il y a des mois ! » Léo répond en riant : « Il fallait qu'on trouve ces bougies. Nous avons visité quatre {2} pour les dénicher. »", es: "El domingo al mediodía, el grupo «Operación M30» todavía duerme cuando Manon escribe su primer mensaje: «Todavía no me lo creo. ¡Estoy tan conmovida de que hayáis pensado en todo: incluso mis velas favoritas, aquellas de las que os hablé hace meses!». Léo responde riendo: «Teníamos que encontrar esas velas. Visitamos cuatro tiendas para dar con ellas»." },
        { it: "La semaine suivante, les photos circulent : des images de Manon sans voix, prises par la sœur de Léo à la seconde exacte. Chacun {3} son moment préféré : le discours du cousin, la tarte aux fraises, la playlist des années 2000. Une tradition est née : la fête surprise de chaque anniversaire à venir sera organisée par le même {4}, avec le même secret. Et une règle a été ajoutée au règlement du groupe : il est {5} de parler de la prochaine fête devant Manon. Le subjonctif, le secret et les bougies ont gagné.", es: "La semana siguiente, las fotos circulan: imágenes de Manon sin palabras, tomadas por la hermana de Léo en el segundo exacto. Cada uno elige su momento favorito: el discurso del primo, la tarta de fresas, la lista de canciones de los años 2000. Ha nacido una tradición: la fiesta sorpresa de cada cumpleaños futuro será organizada por el mismo grupo, con el mismo secreto. Y se ha añadido una regla al reglamento del grupo: está prohibido hablar de la próxima fiesta delante de Manon. El subjuntivo, el secreto y las velas han ganado." },
      ],
      gaps: [
        { options: ["touchée", "pressée", "malade"], answer: 0, why: "«Que vous ayez pensé à tout»: está conmovida por el detalle." },
        { options: ["pharmacies", "boutiques", "mairies"], answer: 1, why: "«Pour les dénicher» (las velas): visitaron cuatro tiendas." },
        { options: ["refuse", "oublie", "choisit"], answer: 2, why: "«Son moment préféré»: cada uno elige el suyo." },
        { options: ["groupe", "quartier", "magazine"], answer: 0, why: "El mismo «Opération M30» con el mismo secreto: el grupo." },
        { options: ["permis", "conseillé", "interdit"], answer: 2, why: "El secreto se protege: está prohibido hablar de ello ante Manon." },
      ],
    },
  ],

  "fr-cu-b1-12": [
    {
      id: "cz-fr-b1-12-1", title: "Les préparatifs du grand débat", titleEs: "Los preparativos del gran debate", minutes: 3,
      paragraphs: [
        { it: "Vendredi soir, la maison de quartier prépare la salle pour le grand débat : « Faut-il interdire le téléphone portable à l'école ? » Nadia, la modératrice, dispose les {1} en demi-cercle pour que chacun se voie. Deux {2} trônent sur la table : « POUR » et « CONTRE ». Sur les murs, des affiches rappellent la règle d'or : une intervention, trois minutes, pas plus.", es: "El viernes por la noche, la casa de barrio prepara la sala para el gran debate: «¿Hay que prohibir el teléfono móvil en la escuela?». Nadia, la moderadora, coloca las sillas en semicírculo para que todos se vean. Dos paneles presiden la mesa: «A FAVOR» y «EN CONTRA». En las paredes, carteles recuerdan la regla de oro: una intervención, tres minutos, no más." },
        { it: "Nadia répète le protocole avec les deux orateurs. « Tu ouvres avec deux arguments : d'une part, d'autre part. Ensuite, je donne la {3} au public. Si quelqu'un t'interrompt, je te la rendrai. » Léo, qui défend l'interdiction, récite : « D'une part, le portable déconcentre ; d'autre part, il facilite la triche. En revanche, je reconnais qu'il rassure les parents. Somme toute, l'école doit protéger la {4}. » Camille prépare la réponse opposée, appuyée sur l'apprentissage numérique. Cinquante {5} sont attendus, et le café sera offert par la maison de quartier.", es: "Nadia repasa el protocolo con los dos oradores. «Abres con dos argumentos: por una parte, por otra. Después, doy la palabra al público. Si alguien te interrumpe, te la devolveré». Léo, que defiende la prohibición, recita: «Por una parte, el móvil desconcentra; por otra, facilita el copiado. En cambio, reconozco que tranquiliza a los padres. En suma, la escuela debe proteger la concentración». Camille prepara la respuesta opuesta, apoyada en el aprendizaje digital. Se esperan cincuenta personas y el café lo ofrecerá la casa de barrio." },
      ],
      gaps: [
        { options: ["chaises", "tapis", "échelles"], answer: 0, why: "«En demi-cercle pour que chacun se voie»: las sillas." },
        { options: ["oreillers", "panneaux", "cartables"], answer: 1, why: "«POUR» y «CONTRE» sobre la mesa: los paneles." },
        { options: ["parole", "monnaie", "clé"], answer: 0, why: "«Je te la rendrai» tras una interrupción: la palabra." },
        { options: ["nourriture", "concentration", "publicité"], answer: 1, why: "«Le portable déconcentre»: proteger la concentración." },
        { options: ["personnes", "kilos", "degrés"], answer: 0, why: "Se esperan asistentes al debate: cincuenta personas." },
      ],
    },
    {
      id: "cz-fr-b1-12-2", title: "Le grand débat", titleEs: "El gran debate", minutes: 3,
      paragraphs: [
        { it: "Samedi, 18 heures : la salle est pleine et le débat commence. Léo ouvre avec conviction : « D'une part, les écrans coupent les élèves du cours ; d'autre part, les notes baissent quand les téléphones restent allumés. » Une {1} dans le public applaudit trop tôt ; Nadia rappelle la règle avec diplomatie : « Merci, on garde les applaudissements pour la {2}. »", es: "Sábado, 18 horas: la sala está llena y el debate empieza. Léo abre con convicción: «Por una parte, las pantallas separan a los alumnos de la clase; por otra, las notas bajan cuando los teléfonos siguen encendidos». Una espectadora del público aplaude demasiado pronto; Nadia recuerda la regla con diplomacia: «Gracias, guardamos los aplausos para el final»." },
        { it: "Camille répond : « En revanche, le portable est un outil d'apprentissage : dictionnaire, calculatrice, révisions. Il n'empêche que certaines écoles l'ont interdit sans résultat visible. » Le public s'anime : une professeure raconte une expérience, un père parle de {3} avec son fils à propos des écrans. À 19 h 30, Nadia lance le tour de table final. Somme toute, la salle s'accorde sur une idée : le problème n'est pas le {4}, mais l'usage qu'on en fait. L'interdiction totale est {5} par la majorité, mais la régulation recueille tous les suffrages.", es: "Camille responde: «En cambio, el móvil es una herramienta de aprendizaje: diccionario, calculadora, repaso. No obstante, algunas escuelas lo han prohibido sin resultado visible». El público se anima: una profesora cuenta una experiencia, un padre habla de conflictos con su hijo por las pantallas. A las 19 h 30, Nadia lanza la ronda final. En suma, la sala coincide en una idea: el problema no es el teléfono, sino el uso que se hace de él. La prohibición total es rechazada por la mayoría, pero la regulación reúne todos los sufragios." },
      ],
      gaps: [
        { options: ["spectatrice", "colombe", "souris"], answer: 0, why: "«Dans le public» que aplaude: una espectadora." },
        { options: ["pause", "fin", "nuit"], answer: 1, why: "Los aplausos se guardan para el final del debate." },
        { options: ["conflits", "vacances", "recettes"], answer: 0, why: "Un padre, su hijo y las pantallas: conflictos." },
        { options: ["cahier", "cartable", "téléphone"], answer: 2, why: "«Mais l'usage qu'on en fait»: el problema es el teléfono." },
        { options: ["adoptée", "célébrée", "rejetée"], answer: 2, why: "La mayoría prefiere la regulación: la prohibición total es rechazada." },
      ],
    },
    {
      id: "cz-fr-b1-12-3", title: "Ce qu'on retient du débat", titleEs: "Lo que queda del debate", minutes: 2,
      paragraphs: [
        { it: "Après le débat, autour du café offert, les discussions continuent par petits groupes. Une retraitée avoue : « Je suis venue pour l'argumentation, je reste pour la {1}. Vous avez tous l'air si passionnés ! » Un lycéen prend des notes : il doit présenter le débat en cours de français et recopie les connecteurs : d'une part, en revanche, somme toute, il n'empêche que.", es: "Después del debate, alrededor del café ofrecido, las discusiones continúan en grupos pequeños. Una jubilada confiesa: «Vine por la argumentación, me quedo por el ambiente. ¡Parecéis todos tan entusiasmados!». Un estudiante de bachillerato toma notas: debe presentar el debate en clase de francés y copia los conectores: d'une part, en revanche, somme toute, il n'empêche que." },
        { it: "Nadia range la salle en souriant : ce débat a été suivi par un {2} curieux, un record pour la maison de quartier. Les idées principales ont été notées sur une grande feuille : l'école doit enseigner un usage raisonné des écrans ; les parents demandent des règles claires ; les élèves veulent être {3} dans les décisions. Une feuille de suggestions a même été remplie : le prochain débat portera sur les {4} de quartier ou sur le sport à l'école. Somme toute, la soirée prouve qu'un débat bien mené ne divise pas une {5} : il lui donne des idées à partager autour d'un café.", es: "Nadia ordena la sala sonriendo: este debate fue seguido por un público curioso, un récord para la casa de barrio. Las ideas principales fueron anotadas en una gran hoja: la escuela debe enseñar un uso razonado de las pantallas; los padres piden reglas claras; los alumnos quieren ser asociados a las decisiones. Incluso se rellenó una hoja de sugerencias: el próximo debate versará sobre los transportes del barrio o el deporte en la escuela. En suma, la velada demuestra que un debate bien llevado no divide a una comunidad: le da ideas para compartir alrededor de un café." },
      ],
      gaps: [
        { options: ["ambiance", "note", "porte"], answer: 0, why: "«Je suis venue pour l'argumentation, je reste pour»: el ambiente." },
        { options: ["chien", "public", "orage"], answer: 1, why: "«Un record pour la maison de quartier»: el público asistente." },
        { options: ["associés", "oubliés", "punis"], answer: 0, why: "«Dans les décisions»: los alumnos quieren ser tenidos en cuenta." },
        { options: ["lunes", "transports", "princesses"], answer: 1, why: "Tema de barrio debatible junto al deporte: los transportes." },
        { options: ["communauté", "écurie", "cantine"], answer: 0, why: "Un debate no divide a quienes comparten territorio: a la comunidad." },
      ],
    },
  ],
};
