/* ── FR · Notizie A2 — lote b (v9.39) ─────────────────────────────────
   Actualités en français de France, niveau A2 (suite) : 12 items,
   ids fr-news-a2-04 … fr-news-a2-15. Méthode VOA Learning English :
   corps de 4 paragraphes ≈ 105-150 mots au passé composé avec futur
   proche, minutes 3. Champs `.it` = français (langue étudiée), `.es`
   = espagnol. Avec news-a.ts, le niveau A2 couvre les 9 catégories. */

import type { NewsItem } from "../../news";

export const FR_NEWS_A2B: NewsItem[] = [

  /* ═══ A2 · 4 — Sciences · Grenoble ═══ */
  {
    id: "fr-news-a2-04", cat: "scienza", level: "A2", place: "Grenoble", minutes: 3,
    title: "Les marmottes des Alpes intéressent la médecine",
    titleEs: "Las marmotas de los Alpes interesan a la medicina",
    lead: {
      it: "Dans les montagnes près de Grenoble, des chercheurs ont passé trois étés à regarder des marmottes dormir. Leur travail va peut-être changer la médecine.",
      es: "En las montañas cerca de Grenoble, unos investigadores han pasado tres veranos mirando dormir a marmotas. Su trabajo quizá cambie la medicina.",
    },
    paragraphs: [
      { it: "Dans les Alpes, près de Grenoble, les marmottes hibernent six mois par an. Pendant ce long sommeil, leur corps refroidit, leur cœur bat lentement et elles ne mangent rien. Et pourtant, elles se réveillent en pleine santé.",
      es: "En los Alpes, cerca de Grenoble, las marmotas hibernan seis meses al año. Durante ese largo sueño, su cuerpo se enfría, su corazón late despacio y no comen nada. Y sin embargo, despiertan en plena salud." },
      { it: "Les biologistes de l'université de Grenoble ont suivi une colonie pendant trois étés. Ils ont mesuré la température des animaux avec une petite sonde et ils ont enregistré des résultats étonnants.",
      es: "Los biólogos de la universidad de Grenoble han seguido una colonia durante tres veranos. Han medido la temperatura de los animales con una pequeña sonda y han registrado resultados sorprendentes." },
      { it: "Pendant l'hibernation, les muscles des marmottes ne faiblissent pas et leur mémoire reste parfaite. Chaque printemps, elles sortent minces et fortes de leur terrier. Les chercheurs veulent comprendre ce secret.",
      es: "Durante la hibernación, los músculos de las marmotas no se debilitan y su memoria sigue perfecta. Cada primavera salen delgadas y fuertes de su madriguera. Los investigadores quieren comprender ese secreto." },
      { it: "La responsable de l'étude, Claire Fontanet, explique l'objectif : « Nous allons comparer la marmotte et le patient. Un jour, cette recherche va peut-être aider les astronautes et les personnes alitées. »",
      es: "La responsable del estudio, Claire Fontanet, explica el objetivo: «Vamos a comparar a la marmota y al paciente. Un día, esta investigación quizá ayude a los astronautas y a las personas encamadas.»" },
    ],
    words: [
      { it: "la marmotte", es: "la marmota" },
      { it: "l'hibernation", es: "la hibernación" },
      { it: "une sonde", es: "una sonda" },
      { it: "les muscles", es: "los músculos" },
      { it: "en pleine santé", es: "en plena salud" },
      { it: "la recherche", es: "la investigación" },
    ],
    questions: [
      { q: "¿Cuántos meses al año hibernan las marmotas de los Alpes?", options: ["Six mois", "Six semaines", "Douze mois", "Un mois"], answer: 0, why: "«Dans les Alpes, près de Grenoble, les marmottes hibernent six mois par an.»" },
      { q: "¿Con qué han medido los biólogos la temperatura de los animales?", options: ["Avec un thermomètre géant", "Avec une petite sonde", "Avec un téléphone", "Avec un satellite"], answer: 1, why: "«Ils ont mesuré la température des animaux avec une petite sonde»" },
      { q: "¿Qué han descubierto los investigadores sobre los músculos de las marmotas?", options: ["Ils ont fondu complètement", "Ils ne faiblissent pas pendant l'hibernation", "Ils ont changé de couleur", "Ils ont disparu"], answer: 1, why: "«Pendant l'hibernation, les muscles des marmottes ne faiblissent pas»" },
      { q: "¿A quién va a ayudar quizá esta investigación en el futuro?", options: ["Aux joueurs de football", "Aux cuisiniers", "Aux chauffeurs de bus", "Aux astronautes et aux personnes alitées"], answer: 3, why: "«Un jour, cette recherche va peut-être aider les astronautes et les personnes alitées.»" },
    ],
    discuss: [
      { it: "Un jour, les humains vont-ils hiberner ? Que feriez-vous pendant ce long sommeil ?", es: "¿Hibernará el ser humano algún día? ¿Qué harías tú durante ese largo sueño?" },
      { it: "Aimeriez-vous étudier les animaux en montagne ? Pourquoi ?", es: "¿Te gustaría estudiar a los animales en la montaña? ¿Por qué?" },
    ],
  },

  /* ═══ A2 · 5 — Environnement · La Rochelle ═══ */
  {
    id: "fr-news-a2-05", cat: "ambiente", level: "A2", place: "La Rochelle", minutes: 3,
    title: "Des plongeurs nettoient le vieux port de La Rochelle",
    titleEs: "Unos buzos limpian el puerto viejo de La Rochelle",
    lead: {
      it: "Pendant des années, le fond du vieux port de La Rochelle a servi de poubelle. Des plongeurs bénévoles ont décidé de lui rendre sa beauté.",
      es: "Durante años, el fondo del puerto viejo de La Rochelle sirvió de basurero. Unos buzos voluntarios decidieron devolverle su belleza.",
    },
    paragraphs: [
      { it: "Sous les bateaux du vieux port de La Rochelle, des plongeurs bénévoles ont trouvé de tout : des vélos, des chaises, des téléphones et même un scooter. En deux week-ends, ils ont remonté quatre tonnes de déchets.",
      es: "Bajo los barcos del puerto viejo de La Rochelle, unos buzos voluntarios han encontrado de todo: bicis, sillas, teléfonos y hasta un escúter. En dos fines de semana han subido cuatro toneladas de residuos." },
      { it: "L'idée est née sur les réseaux sociaux. Un plongeur du club local a vu le fond du port et a publié des photos. La mairie a répondu immédiatement et a prêté une barge.",
      es: "La idea nació en las redes sociales. Un buzo del club local vio el fondo del puerto y publicó fotos. La alcaldía respondió de inmediato y prestó una barcaza." },
      { it: "La vie marine a suivi. Les poissons sont revenus dans les bassins nettoyés et les herbes marines ont recommencé à pousser sur les vieilles pierres.",
      es: "La vida marina siguió. Los peces han vuelto a las cuencas limpiadas y las hierbas marinas han vuelto a crecer sobre las piedras viejas." },
      { it: "Le chef des plongeurs, Marc Le Goff, garde le sourire : « On a retiré les objets oubliés, mais on va revenir chaque année. Un port propre, c'est un port vivant. »",
      es: "El jefe de los buzos, Marc Le Goff, mantiene la sonrisa: «Hemos quitado los objetos olvidados, pero vamos a volver cada año. Un puerto limpio es un puerto vivo.»" },
    ],
    words: [
      { it: "le plongeur", es: "el buzo" },
      { it: "le fond", es: "el fondo" },
      { it: "les déchets", es: "los residuos" },
      { it: "la mairie", es: "la alcaldía" },
      { it: "la barge", es: "la barcaza" },
      { it: "les herbes marines", es: "las hierbas marinas" },
    ],
    questions: [
      { q: "¿Qué han encontrado los buzos bajo los barcos?", options: ["Des vélos, des chaises, des téléphones et même un scooter", "Des trésors de pirates", "Des poissons dorés", "Rien du tout"], answer: 0, why: "«des plongeurs bénévoles ont trouvé de tout : des vélos, des chaises, des téléphones et même un scooter»" },
      { q: "¿Cuántas toneladas de residuos han subido en dos fines de semana?", options: ["Quatre kilos", "Quatre tonnes", "Quarante tonnes", "Quatre cents tonnes"], answer: 1, why: "«En deux week-ends, ils ont remonté quatre tonnes de déchets.»" },
      { q: "¿Cómo ha reaccionado la vida marina tras la limpieza?", options: ["Les poissons sont revenus et les herbes marines ont recommencé à pousser", "Elle a complètement disparu", "Les poissons ont quitté la côte", "Rien n'a changé"], answer: 0, why: "«Les poissons sont revenus dans les bassins nettoyés et les herbes marines ont recommencé à pousser sur les vieilles pierres.»" },
      { q: "¿Qué van a hacer los buzos en el futuro?", options: ["Ils vont repeindre les bateaux", "Ils vont vendre les vélos", "Ils vont changer de ville", "Ils vont revenir chaque année pour nettoyer"], answer: 3, why: "«on va revenir chaque année. Un port propre, c'est un port vivant»" },
    ],
    discuss: [
      { it: "Y a-t-il un port, un lac ou une rivière à nettoyer près de chez vous ?", es: "¿Hay un puerto, un lago o un río que limpiar cerca de tu casa?" },
      { it: "«Un port propre, c'est un port vivant» : cette phrase marche-t-elle aussi pour les villes ?", es: "«Un puerto limpio es un puerto vivo»: ¿funciona esta frase también para las ciudades?" },
    ],
  },

  /* ═══ A2 · 6 — Santé · Bordeaux ═══ */
  {
    id: "fr-news-a2-06", cat: "salute", level: "A2", place: "Bordeaux", minutes: 3,
    title: "À Bordeaux, les médecins prescrivent du sport",
    titleEs: "En Burdeos, los médicos recetan deporte",
    lead: {
      it: "À Bordeaux, le sport est devenu un médicament. Sur certaines ordonnances, à la place des pilules, les patients lisent : piscine, vélo ou marche rapide.",
      es: "En Burdeos, el deporte se ha convertido en un medicamento. En algunas recetas, en lugar de pastillas, los pacientes leen: piscina, bici o caminata rápida.",
    },
    paragraphs: [
      { it: "L'hôpital de Bordeaux a ouvert un service un peu spécial : la salle de sport du docteur. Les médecins y envoient des patients fatigués, stressés ou trop sédentaires. La première visite ressemble à une consultation normale ; la deuxième se passe en plein air.",
      es: "El hospital de Burdeos ha abierto un servicio un poco especial: la sala de deporte del doctor. Los médicos envían allí a pacientes cansados, estresados o demasiado sedentarios. La primera visita parece una consulta normal; la segunda se hace al aire libre." },
      { it: "Pendant trois mois, les patients ont suivi une séance adaptée chaque semaine : marche dans le parc, natation et gymnastique douce. Les infirmiers ont mesuré les progrès.",
      es: "Durante tres meses, los pacientes han seguido una sesión adaptada cada semana: caminata en el parque, natación y gimnasia suave. Los enfermeros han medido los progresos." },
      { it: "Les résultats sont arrivés vite. La tension a baissé, le sommeil s'est amélioré et les patients ont retrouvé le moral. Beaucoup de pilules sont restées dans la pharmacie.",
      es: "Los resultados han llegado rápido. La tensión ha bajado, el sueño ha mejorado y los pacientes han recuperado el ánimo. Muchas pastillas se han quedado en la farmacia." },
      { it: "Le docteur Hélène Marchal résume la méthode : « Le corps sait se soigner. Nous, nous avons simplement remis le corps en mouvement. D'autres villes vont copier cette ordonnance. »",
      es: "La doctora Hélène Marchal resume el método: «El cuerpo sabe curarse. Nosotros simplemente hemos vuelto a poner el cuerpo en movimiento. Otras ciudades van a copiar esta receta.»" },
    ],
    words: [
      { it: "l'ordonnance", es: "la receta médica", note: "falso amigo : «receta del médico», no «ordenanza»" },
      { it: "les médecins", es: "los médicos" },
      { it: "la séance", es: "la sesión" },
      { it: "la natation", es: "la natación" },
      { it: "la tension", es: "la tensión (arterial)" },
      { it: "se soigner", es: "curarse" },
    ],
    questions: [
      { q: "¿A qué pacientes envían los médicos a la sala de deporte del doctor?", options: ["Des sportifs professionnels", "Des touristes perdus", "Des patients fatigués, stressés ou trop sédentaires", "Des enfants en vacances"], answer: 2, why: "«Les médecins y envoient des patients fatigués, stressés ou trop sédentaires.»" },
      { q: "¿Qué han seguido los pacientes durante tres meses?", options: ["Un régime strict sans pain", "Une séance adaptée chaque semaine : marche, natation et gymnastique douce", "Des cours de mathématiques", "Trois heures de télévision par jour"], answer: 1, why: "«Pendant trois mois, les patients ont suivi une séance adaptée chaque semaine : marche dans le parc, natation et gymnastique douce.»" },
      { q: "¿Por qué muchas pastillas se han quedado en la farmacia?", options: ["Parce que la tension a baissé et que les patients ont retrouvé le moral", "Parce que la pharmacie était fermée", "Parce que les pilules sont trop chères", "Parce que les patients les ont perdues"], answer: 0, why: "«La tension a baissé, le sommeil s'est amélioré et les patients ont retrouvé le moral.»" },
      { q: "¿Qué van a hacer otras ciudades, según la doctora Marchal?", options: ["Elles vont fermer leurs hôpitaux", "Elles vont interdire le sport", "Elles vont copier cette ordonnance", "Elles vont vendre des baskets"], answer: 2, why: "«D'autres villes vont copier cette ordonnance.»" },
    ],
    discuss: [
      { it: "Le sport sur ordonnance : bonne idée ou dépense inutile ? Expliquez.", es: "El deporte con receta: ¿buena idea o gasto inútil? Explícalo." },
      { it: "Quel « médicament sans pilule » fonctionnerait pour vous ?", es: "¿Qué «medicina sin pastillas» funcionaría contigo?" },
    ],
  },

  /* ═══ A2 · 7 — Culture · Arles ═══ */
  {
    id: "fr-news-a2-07", cat: "cultura", level: "A2", place: "Arles", minutes: 3,
    title: "Arles vit au rythme de la photographie",
    titleEs: "Arles vive al ritmo de la fotografía",
    lead: {
      it: "Cet été, la petite ville d'Arles a vécu au rythme de la photographie. Églises, chapelles et vieilles usines sont devenues des galeries.",
      es: "Este verano, la pequeña ciudad de Arles ha vivido al ritmo de la fotografía. Iglesias, capillas y fábricas viejas se han convertido en galerías.",
    },
    paragraphs: [
      { it: "Le festival de photographie d'Arles a cinquante ans et l'énergie d'un jeune homme. Cette année, il a accueilli quarante expositions et cent mille visiteurs venus de toute l'Europe.",
      es: "El festival de fotografía de Arles tiene cincuenta años y la energía de un joven. Este año ha acogido cuarenta exposiciones y cien mil visitantes venidos de toda Europa." },
      { it: "Les organisateurs ont choisi des lieux étonnants : une ancienne chapelle, des ateliers ferroviaires et même la cour d'un lycée. Les photos ont trouvé des murs inattendus.",
      es: "Los organizadores han elegido lugares sorprendentes: una capilla antigua, talleres ferroviarios e incluso el patio de un instituto. Las fotos han encontrado muros inesperados." },
      { it: "Pendant trois mois, la ville a changé de visage. Le soir, les touristes se sont promenés d'une exposition à l'autre, un verre de citronnade à la main. Les Arlésiens ont ouvert leurs terrasses.",
      es: "Durante tres meses, la ciudad ha cambiado de cara. Por la noche, los turistas se han paseado de una exposición a otra con un vaso de limonada en la mano. Los arlesianos han abierto sus terrazas." },
      { it: "La directrice du festival, Sylvie Bertrand, regarde déjà plus loin : « Cette année, nous avons mélangé la photo et la musique. L'année prochaine, nous allons inviter la poésie. »",
      es: "La directora del festival, Sylvie Bertrand, mira ya más lejos: «Este año hemos mezclado la foto y la música. El año que viene vamos a invitar a la poesía.»" },
    ],
    words: [
      { it: "la photographie", es: "la fotografía" },
      { it: "une chapelle", es: "una capilla" },
      { it: "les organisateurs", es: "los organizadores" },
      { it: "un verre", es: "un vaso", note: "también significa «vidrio»" },
      { it: "une exposition", es: "una exposición" },
      { it: "la directrice", es: "la directora" },
    ],
    questions: [
      { q: "¿Cuántas exposiciones y visitantes ha acogido el festival este año?", options: ["Quarante expositions et cent mille visiteurs", "Quatre expositions et mille visiteurs", "Quatorze expositions et dix mille visiteurs", "Aucun visiteur"], answer: 0, why: "«Cette année, il a accueilli quarante expositions et cent mille visiteurs venus de toute l'Europe.»" },
      { q: "¿Qué lugares han elegido los organizadores?", options: ["Des salles de classe modernes", "Une ancienne chapelle, des ateliers ferroviaires et la cour d'un lycée", "Le métro de Paris", "Des parkings souterrains"], answer: 1, why: "«Les organisateurs ont choisi des lieux étonnants : une ancienne chapelle, des ateliers ferroviaires et même la cour d'un lycée.»" },
      { q: "¿Cómo han pasado las noches los turistas?", options: ["Ils se sont promenés d'une exposition à l'autre, un verre de citronnade à la main", "Ils ont dormi à l'hôtel toute la nuit", "Ils ont quitté la ville avant le soir", "Ils ont regardé la télévision"], answer: 0, why: "«Le soir, les touristes se sont promenés d'une exposition à l'autre, un verre de citronnade à la main.»" },
      { q: "¿Qué van a invitar el año próximo?", options: ["La peinture", "La poésie", "Le cinéma muet", "Rien de nouveau"], answer: 1, why: "«L'année prochaine, nous allons inviter la poésie.»" },
    ],
    discuss: [
      { it: "Une photo peut-elle raconter une histoire aussi bien qu'un livre ?", es: "¿Puede una foto contar una historia tan bien como un libro?" },
      { it: "Dans votre ville, quel lieu étonnant mériterait une exposition ?", es: "En tu ciudad, ¿qué lugar sorprendente merecería una exposición?" },
    ],
  },

  /* ═══ A2 · 8 — Économie · Reims ═══ */
  {
    id: "fr-news-a2-08", cat: "economia", level: "A2", place: "Reims", minutes: 3,
    title: "Les vendanges commencent plus tôt à Reims",
    titleEs: "La vendimia empieza más temprano en Reims",
    lead: {
      it: "Autour de Reims, les grappes sont prêtes trois semaines plus tôt qu'il y a vingt ans. Pour la Champagne, c'est toute l'économie qui change d'heure.",
      es: "Alrededor de Reims, las uvas están listas tres semanas antes que hace veinte años. Para el Champaña, es toda la economía la que cambia de hora.",
    },
    paragraphs: [
      { it: "Dans les collines de Champagne, autour de Reims, la récolte a commencé fin août : les vendanges n'ont jamais démarré si tôt. Les vendangeurs ont coupé les grappes à l'aube, avant la chaleur.",
      es: "En las colinas del Champaña, alrededor de Reims, la recolección ha empezado a finales de agosto: las vendimias nunca habían empezado tan pronto. Los vendimiadores han cortado los racimos al alba, antes del calor." },
      { it: "Ce changement n'est pas une mode. Depuis vingt ans, les dates ont avancé presque chaque été et les agriculteurs ont adapté leurs méthodes.",
      es: "Este cambio no es una moda. Desde hace veinte años, las fechas se han adelantado casi cada verano y los agricultores han adaptado sus métodos." },
      { it: "L'économie locale a suivi le mouvement. La région compte quinze mille emplois saisonniers, des restaurants pleins et des presses qui ont tourné jour et nuit.",
      es: "La economía local ha seguido el movimiento. La región cuenta con quince mil empleos de temporada, restaurantes llenos y prensas que han girado día y noche." },
      { it: "Un vigneron de la Montagne de Reims, Paul Berthier, reste prudent : « Nos grands-parents ont connu d'autres étés. Nous, nous avons appris à travailler avec le ciel. L'an prochain, tout va dépendre de la pluie. »",
      es: "Un viticultor de la Montaña de Reims, Paul Berthier, se mantiene prudente: «Nuestros abuelos conocieron otros veranos. Nosotros hemos aprendido a trabajar con el cielo. El año que viene todo va a depender de la lluvia.»" },
    ],
    words: [
      { it: "les vendanges", es: "la vendimia" },
      { it: "la récolte", es: "la cosecha", note: "no confundir con «recolección de basura», que es «collecte»" },
      { it: "les vendangeurs", es: "los vendimiadores" },
      { it: "les grappes", es: "los racimos" },
      { it: "à l'aube", es: "al alba" },
      { it: "la pluie", es: "la lluvia" },
    ],
    questions: [
      { q: "¿Cuándo ha empezado la cosecha en las colinas del Champaña?", options: ["Fin août", "Fin octobre", "Au printemps", "À Noël"], answer: 0, why: "«la récolte a commencé fin août : les vendanges n'ont jamais démarré si tôt»" },
      { q: "¿Cuándo han cortado las uvas los vendimiadores?", options: ["À midi, sous le soleil", "À l'aube, avant la chaleur", "La nuit, à minuit", "Le dimanche après-midi"], answer: 1, why: "«Les vendangeurs ont coupé les grappes à l'aube, avant la chaleur.»" },
      { q: "¿Cómo se han adaptado los agricultores en veinte años?", options: ["Ils ont changé de métier", "Ils ont arrêté la culture", "Ils n'ont rien changé", "Ils ont adapté leurs méthodes"], answer: 3, why: "«Depuis vingt ans, les dates ont avancé presque chaque été et les agriculteurs ont adapté leurs méthodes.»" },
      { q: "¿De qué va a depender todo el año que viene, según el viticultor?", options: ["De la mode", "Des touristes", "De la pluie", "Du prix du pain"], answer: 2, why: "«L'an prochain, tout va dépendre de la pluie.»" },
    ],
    discuss: [
      { it: "Dans votre pays, quel travail dépend du temps et des saisons ?", es: "En tu país, ¿qué trabajo depende del tiempo y de las estaciones?" },
      { it: "Travailler à l'aube : pourriez-vous le faire toute une saison ?", es: "Trabajar al alba: ¿podrías hacerlo toda una temporada?" },
    ],
  },

  /* ═══ A2 · 9 — Société · Montpellier ═══ */
  {
    id: "fr-news-a2-09", cat: "societa", level: "A2", place: "Montpellier", minutes: 3,
    title: "Montpellier a adopté les frigos solidaires",
    titleEs: "Montpellier ha adoptado las neveras solidarias",
    lead: {
      it: "Dans trois quartiers de Montpellier, des réfrigérateurs sont apparus sur les trottoirs. Règle unique : chacun dépose, chacun prend.",
      es: "En tres barrios de Montpellier han aparecido neveras en las aceras. Regla única: cada uno deja, cada uno toma.",
    },
    paragraphs: [
      { it: "Dans un quartier de Montpellier, un particulier a installé un frigo devant sa maison, branché sur son électricité. Les voisins y ont déposé des repas, des fruits et du pain de la veille.",
      es: "En un barrio de Montpellier, un particular ha instalado una nevera delante de su casa, enchufada a su electricidad. Los vecinos han dejado dentro comidas, frutas y pan del día anterior." },
      { it: "La mairie a observé l'expérience de près. Trois mois plus tard, elle a installé deux frigos de plus : un dans un quartier étudiant, l'autre près du marché.",
      es: "La alcaldía ha observado la experiencia de cerca. Tres meses después, ha instalado dos neveras más: una en un barrio de estudiantes, la otra cerca del mercado." },
      { it: "Les commerçants ont changé leurs habitudes : ils donnent maintenant les invendus de la journée et personne ne jette plus rien. Les étudiants ont adopté le frigo du marché.",
      es: "Los comerciantes han cambiado sus costumbres: ahora donan lo no vendido del día y ya nadie tira nada. Los estudiantes han adoptado la nevera del mercado." },
      { it: "Une retraitée du quartier, Micheline Aubert, surveille le premier frigo : « Au début, on a eu peur des abus. Puis on a compris : un frigo qui se vide vite, c'est une ville qui a encore faim. »",
      es: "Una jubilada del barrio, Micheline Aubert, vigila la primera nevera: «Al principio tuvimos miedo de los abusos. Luego comprendimos: una nevera que se vacía rápido es una ciudad que todavía tiene hambre.»" },
    ],
    words: [
      { it: "le frigo", es: "la nevera" },
      { it: "un particulier", es: "un particular, un ciudadano", note: "aquí, una persona cualquiera ; no significa «raro»" },
      { it: "les voisins", es: "los vecinos" },
      { it: "l'électricité", es: "la electricidad" },
      { it: "la mairie", es: "la alcaldía" },
      { it: "les invendus", es: "los productos no vendidos" },
    ],
    questions: [
      { q: "¿Quién ha instalado la primera nevera?", options: ["Le maire, devant la mairie", "Un supermarché du centre", "Une école de la ville", "Un particulier, devant sa maison"], answer: 3, why: "«Dans un quartier de Montpellier, un particulier a installé un frigo devant sa maison, branché sur son électricité.»" },
      { q: "¿Dónde ha instalado la alcaldía las dos neveras nuevas?", options: ["Dans un quartier étudiant et près du marché", "Dans l'aéroport", "À la plage", "Dans le métro"], answer: 0, why: "«Trois mois plus tard, elle a installé deux frigos de plus : un dans un quartier étudiant, l'autre près du marché.»" },
      { q: "¿Qué hacen ahora los comerciantes?", options: ["Ils jettent les invendus chaque soir", "Ils donnent les invendus de la journée", "Ils vendent les repas la nuit", "Ils ont fermé leurs magasins"], answer: 1, why: "«Les commerçants ont changé leurs habitudes : ils donnent maintenant les invendus de la journée et personne ne jette plus rien.»" },
      { q: "¿Qué significa « une ville qui a encore faim » ?", options: ["Beaucoup d'habitants ont encore besoin d'aide", "La ville organise un grand repas", "Les restaurants ferment trop tard", "Le frigo est trop petit"], answer: 0, why: "«un frigo qui se vide vite, c'est une ville qui a encore faim.»" },
    ],
    discuss: [
      { it: "Un frigo solidaire dans votre rue : qui l'utiliserait, à votre avis ?", es: "Una nevera solidaria en tu calle: ¿quién la usaría, según tú?" },
      { it: "Donner de la nourriture ou donner de l'argent : qu'est-ce qui aide le mieux ?", es: "Dar comida o dar dinero: ¿qué ayuda mejor?" },
    ],
  },

  /* ═══ A2 · 10 — Histoire · Carcassonne ═══ */
  {
    id: "fr-news-a2-10", cat: "storia", level: "A2", place: "Carcassonne", minutes: 3,
    title: "Carcassonne a failli disparaître",
    titleEs: "Carcasona estuvo a punto de desaparecer",
    lead: {
      it: "Aujourd'hui, des millions de touristes admirent la cité de Carcassonne. Au dix-neuvième siècle, ce trésor était prêt pour la démolition.",
      es: "Hoy, millones de turistas admiran la ciudadela de Carcasona. En el siglo diecinueve, este tesoro estaba listo para la demolición.",
    },
    paragraphs: [
      { it: "Après la Révolution, la cité médiévale de Carcassonne a perdu son utilité militaire. Les pierres ont servi de carrière : les habitants ont emporté des blocs pour construire leurs maisons.",
      es: "Después de la Revolución, la ciudadela medieval de Carcasona perdió su utilidad militar. Las piedras sirvieron de cantera: los habitantes se llevaron bloques para construir sus casas." },
      { it: "En 1849, un inspecteur a proposé de démolir ce qui restait. La France a découvert la nouvelle et s'est révoltée. Un architecte parisien, Adrien Mercier, a défendu la cité.",
      es: "En 1849, un inspector propuso demoler lo que quedaba. Francia conoció la noticia y se rebeló. Un arquitecto parisino, Adrien Mercier, defendió la ciudadela." },
      { it: "Pendant trente ans, Mercier a reconstruit les remparts, tour par tour, avec des dessins du Moyen Âge. Les habitants ont d'abord ri, puis ils ont remercié. Aujourd'hui, deux millions de touristes marchent sur ces pierres chaque année.",
      es: "Durante treinta años, Mercier reconstruyó las murallas, torre por torre, con dibujos de la Edad Media. Los habitantes primero se rieron, luego dieron las gracias. Hoy, dos millones de turistas caminan sobre estas piedras cada año." },
      { it: "L'historienne locale Nadine Roussel raconte la leçon : « La ville a failli mourir de l'oubli. Nous avons compris qu'un monument sauvé va nourrir une ville entière. »",
      es: "La historiadora local Nadine Roussel cuenta la lección: «La ciudad estuvo a punto de morir de olvido. Hemos comprendido que un monumento salvado va a alimentar a una ciudad entera.»" },
    ],
    words: [
      { it: "la cité", es: "la ciudadela", note: "aquí, ciudad amurallada ; «cité» no equivale a «ciudad» (ville)" },
      { it: "les pierres", es: "las piedras" },
      { it: "démolir", es: "demoler" },
      { it: "les remparts", es: "las murallas" },
      { it: "les habitants", es: "los habitantes" },
      { it: "l'oubli", es: "el olvido" },
    ],
    questions: [
      { q: "¿Para qué han servido las piedras de la ciudadela después de la Revolución?", options: ["De carrière : les habitants ont emporté des blocs pour leurs maisons", "De musée gratuit", "De jardin public", "D'hôtel de luxe"], answer: 0, why: "«Les pierres ont servi de carrière : les habitants ont emporté des blocs pour construire leurs maisons.»" },
      { q: "¿Qué ha propuesto un inspector en 1849?", options: ["De repeindre les murs", "De vendre la cité", "D'y construire un aéroport", "De démolir ce qui restait"], answer: 3, why: "«En 1849, un inspecteur a proposé de démolir ce qui restait.»" },
      { q: "¿Cómo han reaccionado los habitantes ante la reconstrucción?", options: ["Ils ont ri d'abord, puis ils ont remercié", "Ils ont quitté la ville en masse", "Ils ont payé tous les travaux", "Ils ont détruit les tours"], answer: 0, why: "«Les habitants ont d'abord ri, puis ils ont remercié.»" },
      { q: "¿Qué lección cuenta la historiadora?", options: ["Un monument sauvé va nourrir une ville entière", "Les monuments coûtent trop cher", "La démolition était une bonne idée", "Les touristes détruisent la cité"], answer: 0, why: "«Nous avons compris qu'un monument sauvé va nourrir une ville entière.»" },
    ],
    discuss: [
      { it: "Sauver un vieux monument ou construire des logements : que choisiriez-vous ?", es: "Salvar un monumento viejo o construir viviendas: ¿qué elegirías?" },
      { it: "Dans votre pays, quel monument a failli disparaître ?", es: "En tu país, ¿qué monumento estuvo a punto de desaparecer?" },
    ],
  },

  /* ═══ A2 · 11 — Technologie · Nancy ═══ */
  {
    id: "fr-news-a2-11", cat: "tecnologia", level: "A2", place: "Nancy", minutes: 3,
    title: "Nancy a testé sa navette sans chauffeur",
    titleEs: "Nancy ha probado su lanzadera sin conductor",
    lead: {
      it: "Pendant un mois, une navette sans chauffeur a circulé dans les rues de Nancy. À l'intérieur, un seul employé : l'hôtesse de sécurité.",
      es: "Durante un mes, una lanzadera sin conductor ha circulado por las calles de Nancy. Dentro, un solo empleado: la azafata de seguridad.",
    },
    paragraphs: [
      { it: "Pendant un mois, une navette électrique sans chauffeur a relié la gare de Nancy à l'hôpital, sur un trajet de deux kilomètres. Elle a transporté six passagers à la fois.",
      es: "Durante un mes, una lanzadera eléctrica sin conductor ha unido la estación de Nancy con el hospital, en un trayecto de dos kilómetros. Ha transportado a seis pasajeros a la vez." },
      { it: "Sans volant et sans pédales, le véhicule a lu la route avec ses caméras et ses capteurs. Un jour, il s'est arrêté tout seul devant un chien qui traversait.",
      es: "Sin volante y sin pedales, el vehículo ha leído la carretera con sus cámaras y sus sensores. Un día se paró solo delante de un perro que cruzaba." },
      { it: "Les passagers ont d'abord serré les dents, puis ils ont discuté avec la machine à voix haute, comme avec un vieux chauffeur. Les enfants, eux, ont adoré tout de suite.",
      es: "Los pasajeros primero apretaron los dientes, luego hablaron con la máquina en voz alta, como con un viejo conductor. Los niños, en cambio, adoraron todo de inmediato." },
      { it: "L'ingénieure du projet, Sophie Lambert, garde les pieds sur terre : « Le bus n'a pas encore son permis, mais il a pris de bonnes habitudes. Nous allons élargir le trajet l'an prochain. »",
      es: "La ingeniera del proyecto, Sophie Lambert, mantiene los pies en la tierra: «El autobús aún no tiene su permiso, pero ha tomado buenas costumbres. Vamos a ampliar el trayecto el año que viene.»" },
    ],
    words: [
      { it: "la navette", es: "la lanzadera" },
      { it: "le trajet", es: "el trayecto", note: "no confundir con «traje» (vêtement)" },
      { it: "les caméras", es: "las cámaras" },
      { it: "les capteurs", es: "los sensores" },
      { it: "les passagers", es: "los pasajeros" },
      { it: "le chauffeur", es: "el conductor" },
    ],
    questions: [
      { q: "¿Qué trayecto ha unido la lanzadora eléctrica?", options: ["De la gare à l'hôpital, sur deux kilomètres", "De Nancy à Strasbourg", "Le tour de la ville en dix heures", "De la gare à l'aéroport"], answer: 0, why: "«une navette électrique sans chauffeur a relié la gare de Nancy à l'hôpital, sur un trajet de deux kilomètres»" },
      { q: "¿Ante qué se ha parado sola la lanzadera un día?", options: ["Devant un feu rouge cassé", "Devant un chien qui traversait", "Devant un restaurant", "Devant une voiture de police"], answer: 1, why: "«Un jour, il s'est arrêté tout seul devant un chien qui traversait.»" },
      { q: "¿Cómo han reaccionado los pasajeros al principio?", options: ["Ils ont serré les dents", "Ils ont applaudi immédiatement", "Ils se sont endormis", "Ils sont descendus en courant"], answer: 0, why: "«Les passagers ont d'abord serré les dents, puis ils ont discuté avec la machine à voix haute»" },
      { q: "¿Qué van a hacer el año que viene?", options: ["Ils vont supprimer les capteurs", "Ils vont élargir le trajet", "Ils vont vendre la navette", "Ils vont arrêter le service"], answer: 1, why: "«Nous allons élargir le trajet l'an prochain.»" },
    ],
    discuss: [
      { it: "Monter dans un bus sans chauffeur : confiance ou peur ?", es: "Subir a un autobús sin conductor: ¿confianza o miedo?" },
      { it: "En 2050, qui conduira : vous ou la machine ?", es: "En 2050, ¿quién conducirá: tú o la máquina?" },
    ],
  },

  /* ═══ A2 · 12 — Sciences · Rouen ═══ */
  {
    id: "fr-news-a2-12", cat: "scienza", level: "A2", place: "Rouen", minutes: 3,
    title: "Le saumon est revenu dans la Seine",
    titleEs: "El salmón ha vuelto al Sena",
    lead: {
      it: "Cent ans après sa disparition, le saumon a de nouveau nagé dans la Seine, devant Rouen. Les scientifiques ont célébré un retour qu'ils n'attendaient plus.",
      es: "Cien años después de su desaparición, el salmón ha vuelto a nadar en el Sena, frente a Ruán. Los científicos celebraron un regreso que ya no esperaban.",
    },
    paragraphs: [
      { it: "Au dix-neuvième siècle, les usines ont sali le fleuve et le saumon a disparu de la Seine. Pendant cent ans, personne n'en a vu devant Rouen.",
      es: "En el siglo diecinueve, las fábricas ensuciaron el río y el salmón desapareció del Sena. Durante cien años, nadie vio uno frente a Ruán." },
      { it: "Puis la loi a changé. Les villes ont construit des stations d'épuration et les usines ont nettoyé leurs rejets. L'eau est redevenue vivante, poisson par poisson.",
      es: "Luego la ley cambió. Las ciudades han construido depuradoras y las fábricas han limpiado sus vertidos. El agua ha vuelto a estar viva, pez a pez." },
      { it: "Le mois dernier, un pêcheur a attrapé un saumon de quatre kilos près de Rouen. Les scientifiques ont vérifié ses écailles : le poisson a vraiment grandi dans le fleuve. La nouvelle a fait le tour de la région.",
      es: "El mes pasado, un pescador ha pescado un salmón de cuatro kilos cerca de Ruán. Los científicos han verificado sus escamas: el pez ha crecido de verdad en el río. La noticia ha dado la vuelta a la región." },
      { it: "La biologiste Inès Carpentier garde la tête froide : « Un poisson, ce n'est pas une population. Mais nous avons posé la première pierre. Nous allons compter les retours pendant dix ans. »",
      es: "La bióloga Inès Carpentier mantiene la cabeza fría: «Un pez no es una población. Pero hemos puesto la primera piedra. Vamos a contar los regresos durante diez años.»" },
    ],
    words: [
      { it: "le saumon", es: "el salmón" },
      { it: "le fleuve", es: "el río" },
      { it: "la loi", es: "la ley" },
      { it: "les stations d'épuration", es: "las depuradoras" },
      { it: "les écailles", es: "las escamas" },
      { it: "la biologiste", es: "la bióloga" },
    ],
    questions: [
      { q: "¿Por qué desapareció el salmón del Sena?", options: ["Parce que les usines ont sali le fleuve", "Parce que les pêcheurs ont tout pris", "Parce que le saumon est parti en mer pour toujours", "À cause des touristes"], answer: 0, why: "«Au dix-neuvième siècle, les usines ont sali le fleuve et le saumon a disparu de la Seine.»" },
      { q: "¿Qué han construido las ciudades cuando cambió la ley?", options: ["Des ponts neufs", "Des stations d'épuration", "Des stades de football", "Des centrales électriques"], answer: 1, why: "«Les villes ont construit des stations d'épuration et les usines ont nettoyé leurs rejets.»" },
      { q: "¿Cómo han verificado los científicos que el pez creció de verdad en el río?", options: ["Ils ont suivi le poisson en hélicoptère", "Ils ont demandé au pêcheur", "Ils ont regardé une photo", "Ils ont vérifié ses écailles"], answer: 3, why: "«Les scientifiques ont vérifié ses écailles : le poisson a vraiment grandi dans le fleuve.»" },
      { q: "¿Qué van a hacer los científicos durante diez años?", options: ["Ils vont compter les retours", "Ils vont vider la Seine", "Ils vont construire une piscine", "Ils vont pêcher tous les saumons"], answer: 0, why: "«Nous allons compter les retours pendant dix ans.»" },
    ],
    discuss: [
      { it: "Une rivière propre au milieu d'une grande ville : possible dans votre pays ?", es: "¿Un río limpio en medio de una gran ciudad: posible en tu país?" },
      { it: "La nature reprend toujours ses droits ? Donnez un exemple.", es: "¿La naturaleza siempre recupera sus derechos? Da un ejemplo." },
    ],
  },

  /* ═══ A2 · 13 — Culture · Avignon ═══ */
  {
    id: "fr-news-a2-13", cat: "cultura", level: "A2", place: "Avignon", minutes: 3,
    title: "À Avignon, un mois de théâtre dans la ville",
    titleEs: "En Aviñón, un mes de teatro en la ciudad",
    lead: {
      it: "Pendant tout le mois de juillet, Avignon a vécu au théâtre. Dans la cour du palais des papes, deux mille spectateurs ont applaudi chaque soir.",
      es: "Durante todo el mes de julio, Aviñón ha vivido a teatro. En el patio del palacio de los papas, dos mil espectadores han aplaudido cada noche.",
    },
    paragraphs: [
      { it: "Pendant tout le mois de juillet, Avignon a vécu au rythme du théâtre. Dans la cour du palais des papes, deux mille spectateurs ont applaudi chaque soir. Le matin, les comédiens ont répété dans les ruelles ; à la nuit tombée, ils ont récité Molière sous les étoiles.",
      es: "Durante todo el mes de julio, Aviñón ha vivido al ritmo del teatro. En el patio del palacio de los papas, dos mil espectadores han aplaudido cada noche. Por la mañana, los actores han ensayado en los callejones; al caer la noche, han recitado a Molière bajo las estrellas." },
      { it: "Le plus grand festival de théâtre de France a de nouveau rempli la ville. La billetterie a vendu cent cinquante mille places en trois semaines.",
      es: "El festival de teatro más grande de Francia ha llenado de nuevo la ciudad. La taquilla ha vendido ciento cincuenta mil localidades en tres semanas." },
      { it: "Le Off, le petit frère du festival, a battu son record : mille quatre cents compagnies indépendantes ont installé leurs décors dans les cafés et les chapelles.",
      es: "El Off, el hermanito del festival, ha batido su récord: mil cuatrocientas compañías independientes han instalado sus decorados en los cafés y las capillas." },
      { it: "Un vieux comédien, Antoine Vidal, a résumé le mois : « Nous avons joué devant des murs de huit cents ans. L'an prochain, nous allons leur apprendre de nouveaux rôles. »",
      es: "Un viejo actor, Antoine Vidal, ha resumido el mes: «Hemos actuado ante muros de ochocientos años. El año que viene vamos a enseñarles nuevos papeles.»" },
    ],
    words: [
      { it: "le théâtre", es: "el teatro" },
      { it: "la cour", es: "el patio", note: "no significa «coro», que es «chœur»" },
      { it: "la billetterie", es: "la taquilla" },
      { it: "les spectateurs", es: "los espectadores" },
      { it: "les compagnies", es: "las compañías" },
      { it: "le comédien", es: "el actor" },
    ],
    questions: [
      { q: "¿Cuántas localidades ha vendido la taquilla en tres semanas?", options: ["Cent cinquante mille", "Mille cinq cents", "Quinze mille", "Cent cinquante"], answer: 0, why: "«La billetterie a vendu cent cinquante mille places en trois semaines.»" },
      { q: "¿Dónde han recitado Molière los actores al caer la noche?", options: ["Dans un studio de télévision", "Dans le métro", "Dans un parking souterrain", "Sous les étoiles"], answer: 3, why: "«ils ont récité Molière sous les étoiles»" },
      { q: "¿Qué ha batido su récord el Off?", options: ["Le nombre de compagnies indépendantes : mille quatre cents", "Le prix des places", "La hauteur des décors", "Le nombre de cafés"], answer: 0, why: "«Le Off, le petit frère du festival, a battu son record : mille quatre cents compagnies indépendantes ont installé leurs décors dans les cafés et les chapelles.»" },
      { q: "¿Qué van a hacer el año próximo con los muros?", options: ["Ils vont les repeindre en blanc", "Ils vont leur apprendre de nouveaux rôles", "Ils vont les démolir", "Ils vont les couvrir de photos"], answer: 1, why: "«L'an prochain, nous allons leur apprendre de nouveaux rôles.»" },
    ],
    discuss: [
      { it: "Deux mois de répétitions pour un mois de festival : ça vaut le coup ?", es: "Dos meses de ensayos por un mes de festival: ¿vale la pena?" },
      { it: "Le théâtre dans la rue ou dans une salle : que préférez-vous ?", es: "El teatro en la calle o en una sala: ¿qué prefieres?" },
    ],
  },

  /* ═══ A2 · 14 — Sport · Le Havre ═══ */
  {
    id: "fr-news-a2-14", cat: "sport", level: "A2", place: "Le Havre", minutes: 3,
    title: "Le Havre a lancé ses voiliers vers le Brésil",
    titleEs: "El Havre ha lanzado sus veleros hacia Brasil",
    lead: {
      it: "Ce week-end, le port du Havre a vibré au départ d'une grande course transatlantique. Dans les écoles, on prépare déjà la suite.",
      es: "Este fin de semana, el puerto de El Havre ha vibrado con la salida de una gran regata transatlántica. En las escuelas ya se prepara la continuación.",
    },
    paragraphs: [
      { it: "Ce week-end, vingt voiliers ont quitté Le Havre pour le Brésil. Devant la digue, cent mille personnes ont agité des drapeaux pendant une heure entière. Les sirènes des bateaux ont répondu aux cris de la foule.",
      es: "Este fin de semana, veinte veleros han salido de El Havre hacia Brasil. Delante del dique, cien mil personas han agitado banderas durante una hora entera. Las sirenas de los barcos han respondido a los gritos de la multitud." },
      { it: "La ville a profité de la fête pour lancer son nouveau plan voile : deux mille enfants des écoles vont apprendre à naviguer gratuitement.",
      es: "La ciudad ha aprovechado la fiesta para lanzar su nuevo plan de vela: dos mil niños de las escuelas van a aprender a navegar gratis." },
      { it: "Les moniteurs ont déjà formé les premiers groupes. Les élèves ont découvert le vent, les nœuds et le vocabulaire de la mer. Pour beaucoup, c'était la première sortie sur l'eau.",
      es: "Los monitores ya han formado los primeros grupos. Los alumnos han descubierto el viento, los nudos y el vocabulario del mar. Para muchos, era la primera salida al agua." },
      { it: "La monitrice en chef, Julie Lebrun, a les yeux qui brillent : « La mer a formé des marins pendant des siècles. Maintenant, elle va former les enfants du béton. »",
      es: "La monitora jefe, Julie Lebrun, tiene los ojos brillantes: «El mar ha formado marinos durante siglos. Ahora va a formar a los niños del hormigón.»" },
    ],
    words: [
      { it: "le voilier", es: "el velero" },
      { it: "la digue", es: "el dique" },
      { it: "les drapeaux", es: "las banderas" },
      { it: "naviguer", es: "navegar" },
      { it: "les moniteurs", es: "los monitores" },
      { it: "les nœuds", es: "los nudos", note: "ligatura œ : «nœud» se lee «nu»" },
    ],
    questions: [
      { q: "¿Cuántos veleros han salido de El Havre hacia Brasil?", options: ["Deux", "Vingt", "Cent vingt", "Aucun"], answer: 1, why: "«vingt voiliers ont quitté Le Havre pour le Brésil»" },
      { q: "¿Qué han hecho cien mil personas delante del dique?", options: ["Elles ont agité des drapeaux pendant une heure entière", "Elles ont nagé jusqu'aux bateaux", "Elles ont dormi sur la plage", "Elles ont pêché des sardines"], answer: 0, why: "«Devant la digue, cent mille personnes ont agité des drapeaux pendant une heure entière.»" },
      { q: "¿Qué van a aprender dos mil niños con el plan de vela?", options: ["À conduire des voitures", "À naviguer gratuitement", "À pêcher des sardines", "À cuisiner du poisson"], answer: 1, why: "«deux mille enfants des écoles vont apprendre à naviguer gratuitement»" },
      { q: "¿Qué significa « les enfants du béton » ?", options: ["Les enfants qui aiment les chansons", "Les enfants de la ville, loin de la mer", "Les enfants qui travaillent sur les chantiers", "Les statues du port"], answer: 1, why: "«La mer a formé des marins pendant des siècles. Maintenant, elle va former les enfants du béton.»" },
    ],
    discuss: [
      { it: "La mer ou la montagne : quel paysage vous appelle le plus ?", es: "El mar o la montaña: ¿qué paisaje te llama más?" },
      { it: "Le sport gratuit pour tous les enfants : bonne idée ? Qui paie ?", es: "El deporte gratis para todos los niños: ¿buena idea? ¿Quién paga?" },
    ],
  },

  /* ═══ A2 · 15 — Économie · Saint-Étienne ═══ */
  {
    id: "fr-news-a2-15", cat: "economia", level: "A2", place: "Saint-Étienne", minutes: 3,
    title: "Saint-Étienne a troqué ses usines contre le design",
    titleEs: "Saint-Étienne ha cambiado sus fábricas por el diseño",
    lead: {
      it: "Ancienne capitale du charbon et des armes, Saint-Étienne a choisi un nouveau chemin : le design. Les usines d'hier forment les créateurs de demain.",
      es: "Antigua capital del carbón y de las armas, Saint-Étienne ha elegido un nuevo camino: el diseño. Las fábricas de ayer forman a los creadores de mañana.",
    },
    paragraphs: [
      { it: "Pendant cent cinquante ans, Saint-Étienne a produit des armes et du charbon. Puis les mines ont fermé et les usines ont perdu leurs ouvriers. Dans les années difficiles, beaucoup d'habitants ont cherché du travail ailleurs.",
      es: "Durante ciento cincuenta años, Saint-Étienne ha producido armas y carbón. Luego las minas cerraron y las fábricas perdieron a sus obreros. En los años difíciles, muchos habitantes buscaron trabajo en otra parte." },
      { it: "La ville a alors misé sur une idée moderne : le design. Une vieille manufacture d'armes est devenue une école supérieure de création.",
      es: "La ciudad ha apostado entonces por una idea moderna: el diseño. Una vieja fábrica de armas se ha convertido en una escuela superior de creación." },
      { it: "Résultat : huit cents étudiants ont rempli les ateliers. Les jeunes créateurs ont ouvert des studios dans les anciens bâtiments et les loyers sont restés bas. Une biennale du design a attiré cent mille visiteurs cette année.",
      es: "Resultado: ochocientos estudiantes han llenado los talleres. Los jóvenes creadores han abierto estudios en los edificios antiguos y los alquileres se han quedado bajos. Una bienal de diseño ha atraído a cien mil visitantes este año." },
      { it: "Le directeur de la manufacture, François Delorme, regarde les ateliers : « Nous avons échangé les machines-outils contre des machines à idées. Dans dix ans, cette ville va exporter des objets au lieu d'acier. »",
      es: "El director de la fábrica, François Delorme, mira los talleres: «Hemos cambiado las máquinas-herramienta por máquinas de ideas. Dentro de diez años, esta ciudad va a exportar objetos en lugar de acero.»" },
    ],
    words: [
      { it: "les mines", es: "las minas" },
      { it: "les usines", es: "las fábricas" },
      { it: "le design", es: "el diseño", note: "anglicismo asentado en francés" },
      { it: "la manufacture", es: "la fábrica" },
      { it: "les créateurs", es: "los creadores" },
      { it: "les ateliers", es: "los talleres" },
    ],
    questions: [
      { q: "¿Qué ha producido Saint-Étienne durante ciento cincuenta años?", options: ["Des parfums", "Des voitures de sport", "Du fromage", "Des armes et du charbon"], answer: 3, why: "«Pendant cent cinquante ans, Saint-Étienne a produit des armes et du charbon.»" },
      { q: "¿En qué se ha convertido la vieja fábrica de armas?", options: ["En un musée du charbon", "En une école supérieure de création", "En un centre commercial", "En une gare routière"], answer: 1, why: "«Une vieille manufacture d'armes est devenue une école supérieure de création.»" },
      { q: "¿Por qué los creadores jóvenes han abierto estudios en los edificios antiguos?", options: ["Parce que les loyers sont restés bas", "Parce que les bâtiments sont neufs", "Parce qu'il y a la mer", "Parce que la ville est la capitale"], answer: 0, why: "«Les jeunes créateurs ont ouvert des studios dans les anciens bâtiments et les loyers sont restés bas.»" },
      { q: "¿Qué va a exportar la ciudad dentro de diez años?", options: ["Du charbon", "Des armes", "Des objets, au lieu d'acier", "Rien du tout"], answer: 2, why: "«Dans dix ans, cette ville va exporter des objets au lieu d'acier.»" },
    ],
    discuss: [
      { it: "Votre ville a-t-elle changé de métier comme Saint-Étienne ? Racontez.", es: "¿Tu ciudad ha cambiado de oficio como Saint-Étienne? Cuéntalo." },
      { it: "Le design peut-il remplacer l'industrie lourde ? Discutez.", es: "¿Puede el diseño sustituir a la industria pesada? Discútelo." },
    ],
  },
];
