/* ── FR · Notícias B1 + B2 (v9.26) ─────────────────────────────────────
   Français de France, méthode VOA. B1 ≈ 160-180 mots, B2 ≈ 250-300.
   Champs `.it` = français (langue étudiée), `.es` = espagnol. */

import type { NewsItem } from "../../news";

export const FR_NEWS_B: NewsItem[] = [

  /* ═══ B1 · 1 — Santé ═══ */
  {
    id: "fr-news-b1-01", cat: "salute", level: "B1", place: "Paris", minutes: 3,
    title: "Les écrans le soir : ce que disent vraiment les chercheurs",
    titleEs: "Las pantallas de noche: lo que dicen de verdad los investigadores",
    lead: {
      it: "«Pas d'écran avant de dormir» : le conseil est partout, mais la recherche est plus nuancée. À Paris, une équipe a passé dix ans à compter les heures de sommeil — et les vérités dérangeantes.",
      es: "«Nada de pantalla antes de dormir»: el consejo está en todas partes, pero la investigación es más matizada. En París, un equipo pasó diez años contando horas de sueño — y verdades incómodas.",
    },
    paragraphs: [
      { it: "La règle officielle est simple : aucune lumière d'écran une heure avant le coucher, parce que la lumière bleue retarde le sommeil. Les chercheurs parisiens la confirment… à moitié. La lumière retarde l'endormissement, oui ; mais ce n'est pas le pire ennemi du sommeil. Le pire, c'est le contenu.",
      es: "La regla oficial es simple: ninguna luz de pantalla una hora antes de acostarse, porque la luz azul retrasa el sueño. Los investigadores parisinos la confirman… a medias. La luz retrasa el dormirse, sí; pero no es el peor enemigo del sueño. El peor es el contenido." },
      { it: "Un film calme finit à minuit sans faire de dégâts. Une conversation en colère à la même heure détruit la nuit entière. L'équipe parle d'«émotions actives» : le cerveau ne ferme pas la porte parce que la lumière s'éteint ; il ferme la porte quand la pensée s'arrête.",
      es: "Una película tranquila termina a medianoche sin hacer daños. Una conversación encolerizada a la misma hora destruye la noche entera. El equipo habla de «emociones activas»: el cerebro no cierra la puerta porque la luz se apague; cierra la puerta cuando el pensamiento se detiene." },
      { it: "Le plus surprenant vient des données objectives. Les volontaires portaient des capteurs pendant des mois. Résultat : les gens dorment mieux qu'ils ne le croient, mais ils se réveillent plus mal qu'ils ne le pensent. La moitié de la fatigue du matin n'est pas un problème de nuit ; c'est un problème de réveil à heure fixe.",
      es: "Lo más sorprendente viene de los datos objetivos. Los voluntarios llevaron sensores durante meses. Resultado: la gente duerme mejor de lo que cree, pero se despierta peor de lo que piensa. La mitad del cansancio de la mañana no es un problema de noche; es un problema de despertar a hora fija." },
      { it: "Les recommandations finales sont donc banales et révolutionnaires à la fois : garder une heure de lever constante (même le week-end, oui), sortir dehors le matin — la lumière du jour vaut mieux que tout le café du monde — et traiter le téléphone le soir comme un invité : il peut rester, mais il ne parle pas.",
      es: "Las recomendaciones finales son pues banales y revolucionarias a la vez: mantener una hora de levantarse constante (también el fin de semana, sí), salir fuera por la mañana — la luz del día vale más que todo el café del mundo — y tratar el teléfono de noche como un invitado: puede quedarse, pero no habla." },
    ],
    words: [
      { it: "le coucher / coucher", es: "acostarse / la hora de acostarse" },
      { it: "s'endormir", es: "quedarse dormido" },
      { it: "les dégâts", es: "los daños" },
      { it: "le capteur", es: "el sensor" },
      { it: "se réveiller", es: "despertarse" },
      { it: "une émotion active", es: "una emoción activa" },
    ],
    questions: [
      { q: "¿Qué confirman «a medias» los investigadores?", options: ["Que la lumière bleue est inoffensive", "Que la lumière retarde l'endormissement, mais que le pire ennemi est le contenu, pas la lumière", "Que les écrans n'existent pas", "Que le sommeil est inutile"], answer: 1, why: "«La lumière retarde l'endormissement, oui ; mais ce n'est pas le pire ennemi du sommeil. Le pire, c'est le contenu.»" },
      { q: "¿Qué son «las emociones activas»?", options: ["Les films calmes", "Ce qui empêche le cerveau de fermer la porte : le cerveau ferme quand la pensée s'arrête", "Les réveils du matin", "Les rêves"], answer: 1, why: "«Le cerveau ne ferme pas la porte parce que la lumière s'éteint ; il ferme la porte quand la pensée s'arrête.»" },
      { q: "¿Qué mostraron los sensores objetivos?", options: ["Que personne ne dort", "Que les gens dorment mieux qu'ils ne le croient, mais se réveillent plus mal : la moitié de la fatigue est un problème de réveil à heure fixe", "Que les capteurs mentent", "Que la lumière du jour est inutile"], answer: 1, why: "«Les gens dorment mieux qu'ils ne le croient… La moitié de la fatigue du matin n'est pas un problème de nuit ; c'est un problème de réveil à heure fixe.»" },
      { q: "¿Cómo hay que tratar el teléfono de noche?", options: ["Comme un maître", "Comme un invité : il peut rester, mais il ne parle pas", "Comme un ennemi à détruire", "Comme un réveil"], answer: 1, why: "«Traiter le téléphone le soir comme un invité : il peut rester, mais il ne parle pas.»" },
    ],
    discuss: [
      { it: "Qu'est-ce qui vous empêche de dormir : la lumière ou la pensée ? Soyez honnête.", es: "¿Qué te impide dormir: la luz o el pensamiento? Sé honesto." },
      { it: "«L'heure de lever constante, même le week-end» : possible dans votre vie ? Pourquoi ?", es: "«La hora de levantarse constante, incluso el finde»: ¿posible en tu vida? ¿Por qué?" },
    ],
  },

  /* ═══ B1 · 2 — Environnement ═══ */
  {
    id: "fr-news-b1-02", cat: "ambiente", level: "B1", place: "Grenoble", minutes: 3,
    title: "La ville qui a donné ses rues aux pieds",
    titleEs: "La ciudad que dio sus calles a los pies",
    lead: {
      it: "Grenoble est entourée de trois montagnes et d'une réputation : la ville la plus plate de France y est aussi la plus inventive pour se passer de voiture.",
      es: "Grenoble está rodeada de tres montañas y de una reputación: la ciudad más llana de Francia es también la más inventiva para prescindir del coche.",
    },
    paragraphs: [
      { it: "Il y a vingt ans, le centre de Grenoble ressemblait à toutes les villes françaises : des voitures, du bruit, des enfants qui marchaient à l'école le long d'un mur de pollution.",
      es: "Hace veinte años, el centro de Grenoble se parecía a todas las ciudades francesas: coches, ruido, niños que caminaban al colegio junto a un muro de contaminación." },
      { it: "La ville a ensuite fait des choix impopulaires et courageux : moins de place pour les voitures, plus de place pour les tramways, les vélos et les pieds. Les commerçants ont protesté ; deux ans plus tard, ils demandaient des tables en terrasse.",
      es: "La ciudad hizo después elecciones impopulares y valientes: menos espacio para los coches, más para los tranvías, las bicis y los pies. Los comerciantes protestaron; dos años más tarde, pedían mesas en terraza." },
      { it: "Le changement le plus visible est le plus banal : les gens s'assoient. Des bancs partout, des chaises en face des fontaines, des escaliers où l'on reste une heure. Une ville sans voiture ne va pas plus vite ; elle reste plus longtemps.",
      es: "El cambio más visible es el más banal: la gente se sienta. Bancos por todas partes, sillas frente a las fuentes, escalinatas donde uno se queda una hora. Una ciudad sin coche no va más rápido; se queda más tiempo." },
      { it: "Les enfants sont l'indicateur final. Dans les écoles du centre, on dessine «le chemin de la maison à l'école» ; depuis cinq ans, les dessins ont changé : les voitures y sont devenues rares, et les arbres, nombreux. C'est la carte d'une ville qui a grandi plus vite que ses peurs.",
      es: "Los niños son el indicador final. En las escuelas del centro se dibuja «el camino de casa al colegio»; desde hace cinco años, los dibujos cambiaron: los coches se volvieron raros, y los árboles, numerosos. Es el mapa de una ciudad que creció más rápido que sus miedos." },
    ],
    words: [
      { it: "se passer de", es: "prescindir de" },
      { it: "impopulaire", es: "impopular" },
      { it: "la terrasse", es: "la terraza" },
      { it: "l'escalier / l'escalinata", es: "la escalera / la escalinata" },
      { it: "la pollution", es: "la contaminación" },
      { it: "l'indicateur", es: "el indicador" },
    ],
    questions: [
      { q: "¿Cómo era el centro de Grenoble hace veinte años?", options: ["Paisible et silencieux", "Comme toutes les villes françaises : voitures, bruit, enfants le long d'un mur de pollution", "Fermé aux visiteurs", "Plein d'arbres"], answer: 1, why: "«Le centre de Grenoble ressemblait à toutes les villes françaises : des voitures, du bruit…»" },
      { q: "¿Qué pasó con los comerciantes?", options: ["Ils ont déménagé", "Ils ont protesté ; deux ans plus tard, ils demandaient des tables en terrasse", "Ils n'ont rien dit", "Ils ont gagné en justice"], answer: 1, why: "«Les commerçants ont protesté ; deux ans plus tard, ils demandaient des tables en terrasse.»" },
      { q: "¿Cuál es el cambio más visible y por qué es banal?", options: ["Les voitures volantes", "Les gens s'assoient : des bancs, des chaises, des escaliers où l'on reste une heure", "Les murs neufs", "Les néons"], answer: 1, why: "«Le changement le plus visible est le plus banal : les gens s'assoient… Une ville sans voiture ne va pas plus vite ; elle reste plus longtemps.»" },
      { q: "¿Qué muestran los dibujos de los niños?", options: ["Des voitures rares et des arbres nombreux", "Des camions", "Des gratte-ciel", "Rien"], answer: 0, why: "«Les dessins ont changé : les voitures y sont devenues rares, et les arbres, nombreux.»" },
    ],
    discuss: [
      { it: "Votre ville : que gagnerait-elle en «donnant ses rues aux pieds» ? Que perdrait-elle ?", es: "Tu ciudad: ¿qué ganaría «dando sus calles a los pies»? ¿Qué perdería?" },
      { it: "«Une ville ne va pas plus vite ; elle reste plus longtemps.» Commentez cette phrase.", es: "«Una ciudad no va más rápido; se queda más tiempo.» Comenta esa frase." },
    ],
  },

  /* ═══ B1 · 3 — Technologie ═══ */
  {
    id: "fr-news-b1-03", cat: "tecnologia", level: "B1", place: "Paris", minutes: 3,
    title: "Le train qui a fait la France plus petite",
    titleEs: "El tren que hizo más pequeña a Francia",
    lead: {
      it: "Il y a quarante ans, il fallait cinq heures pour aller de Paris à Lyon. Aujourd'hui, deux. Le pays n'a pas rétréci ; le temps, si.",
      es: "Hace cuarenta años hacían falta cinco horas para ir de París a Lyon. Hoy, dos. El país no se encogió; el tiempo sí.",
    },
    paragraphs: [
      { it: "Le train à grande vitesse a commencé comme un pari technique. Les ingénieurs devaient faire tenir des rames de trois cent tonnes dans des courbes serrées, à trois cents kilomètres-heure, sans que le café ne se renverse dans les gares.",
      es: "El tren de alta velocidad empezó como una apuesta técnica. Los ingenieros tenían que meter trenes de trescientas toneladas en curvas cerradas, a trescientos kilómetros por hora, sin que el café se derramara en las estaciones." },
      { it: "Le vrai changement, pourtant, n'est pas dans la gare. C'est dans la tête des Français. La distance ne se mesure plus en kilomètres, mais en temps : Lyon est «à deux heures», Marseille «à trois». La géographie mentale du pays a été réécrite par un horaire.",
      es: "El verdadero cambio, sin embargo, no está en la estación. Está en la cabeza de los franceses. La distancia ya no se mide en kilómetros, sino en tiempo: Lyon está «a dos horas», Marsella «a tres». La geografía mental del país fue reescrita por un horario." },
      { it: "Les conséquences sont parfois inattendues. Des familles vivent à deux villes différentes et se voient le soir ; des avocats plaident à Paris et dorment à Tours ; les restaurants de gare sont devenus meilleurs que beaucoup de restaurants de ville — parce que la gare, maintenant, c'est le centre-ville de partout.",
      es: "Las consecuencias son a veces inesperadas. Familias viven en dos ciudades distintas y se ven de noche; abogados alegan en París y duermen en Tours; los restaurantes de estación se volvieron mejores que muchos restaurantes de ciudad — porque la estación, ahora, es el centro de todas partes." },
      { it: "Un contrôleur de la première génération garde la phrase du siècle : « Avant, le train rapprochait les villes. Maintenant, il rapproche les vies. Le reste — deux heures ou cinq — c'est de la mécanique. »",
      es: "Un revisor de la primera generación guarda la frase del siglo: «Antes, el tren acercaba las ciudades. Ahora acerca las vidas. Lo demás — dos horas o cinco — es mecánica.»" },
    ],
    words: [
      { it: "le train à grande vitesse", es: "el tren de alta velocidad" },
      { it: "la rame", es: "el convoy, la composición" },
      { it: "se renverser", es: "derramarse" },
      { it: "plaider", es: "alegar (abogados)" },
      { it: "le contrôleur", es: "el revisor" },
      { it: "rétrécir", es: "encoger(se)" },
    ],
    questions: [
      { q: "¿Cómo empezó el tren de alta velocidad?", options: ["Comme un voyage organisé", "Comme un pari technique : des rames de trois cent tonnes dans des courbes serrées, à trois cents km/h, sans renverser le café", "Comme une idée de touristes", "Par erreur"], answer: 1, why: "«Le train à grande vitesse a commencé comme un pari technique… sans que le café ne se renverse dans les gares.»" },
      { q: "¿Dónde está el verdadero cambio?", options: ["Dans les gares", "Dans la tête des Français : la distance se mesure en temps, la géographie mentale a été réécrite par un horaire", "Dans les billets", "Nulle part"], answer: 1, why: "«Le vrai changement… c'est dans la tête des Français. La distance ne se mesure plus en kilomètres, mais en temps.»" },
      { q: "¿Qué consecuencia inesperada se menciona?", options: ["Les gares ferment", "Des familles vivent à deux villes et se voient le soir ; les restaurants de gare sont devenus meilleurs que beaucoup de restaurants de ville", "Les avions ont disparu", "Les routes sont vides"], answer: 1, why: "«Des familles vivent à deux villes différentes et se voient le soir ; des avocats plaident à Paris et dorment à Tours…»" },
      { q: "¿Cuál es «la frase del siglo» del revisor?", options: ["«Avant, le train rapprochait les villes. Maintenant, il rapproche les vies. Le reste — deux heures ou cinq — c'est de la mécanique.»", "«Le train est trop rapide.»", "«Je préfère les cars.»", "«Tout était mieux avant.»"], answer: 0, why: "«Maintenant, il rapproche les vies. Le reste, c'est de la mécanique.»" },
    ],
    discuss: [
      { it: "Dans votre pays, quelle distance se mesure «en temps» et non «en kilomètres» ?", es: "En tu país, ¿qué distancia se mide «en tiempo» y no «en kilómetros»?" },
      { it: "«Le train rapproche les vies» : une ville «à deux heures» changerait-elle votre vie ? Comment ?", es: "«El tren acerca las vidas»: ¿una ciudad «a dos horas» cambiaría tu vida? ¿Cómo?" },
    ],
  },

  /* ═══ B2 · 1 — Économie ═══ */
  {
    id: "fr-news-b2-01", cat: "economia", level: "B2", place: "France", minutes: 4,
    title: "Le fait maison : la révolte douce des fourchettes",
    titleEs: "Lo casero: la revuelta suave de los tenedores",
    lead: {
      it: "En France, un pays sur trois repas se prend hors de la maison. Les cuisiniers amateurs répondent avec une arme ancienne : le tablier. Les économistes prennent des notes.",
      es: "En Francia, un tercio de las comidas se hace fuera de casa. Los cocineros aficionados responden con un arma antigua: el delantal. Los economistas toman notas.",
    },
    paragraphs: [
      { it: "Pendant des décennies, la promesse du progrès fut la même : moins de travail à la maison. La machine à laver, la cantine, le plat préparé, le livreur — chaque étape libérait du temps et ajoutait une facture. La cuisine, dernière frontière du foyer, semblait la prochaine à tomber.",
      es: "Durante décadas, la promesa del progreso fue la misma: menos trabajo en casa. La lavadora, el comedor, el plato preparado, el repartidor — cada etapa liberaba tiempo y añadía una factura. La cocina, última frontera del hogar, parecía la próxima en caer." },
      { it: "Elle ne tombe pas ; elle se rebelle. Les ventes d'appareils de cuisine montent, les cours de cuisine se remplissent, et une génération qui avait hérité des parents pressés redécouvre ce que les grands-mères n'avaient jamais perdu : une sauce qui mijote est une soirée qui n'a pas de prix — parce qu'elle n'en a pas besoin.",
      es: "No cae; se rebela. Las ventas de aparatos de cocina suben, los cursos de cocina se llenan, y una generación que había heredado de padres apurados redescubre lo que las abuelas nunca habían perdido: una salsa que se cocina a fuego lento es una velada que no tiene precio — porque no lo necesita." },
      { it: "Les économistes hésitent sur la conclusion. Les uns y voient une mode de plus, comme le pain sans gluten ou les quiches aux courgettes ; les autres y reconnaissent un basculement plus profond : quand le travail cesse d'être le seul lieu de valeur, le temps passé à la maison cesse d'être du temps perdu. Le tablier devient, selon la formule d'un chercheur, «un costume de résistance».",
      es: "Los economistas dudan sobre la conclusión. Unos ven una moda más, como el pan sin gluten o los pasteles de calabacín; otros reconocen un vuelco más profundo: cuando el trabajo deja de ser el único lugar de valor, el tiempo pasado en casa deja de ser tiempo perdido. El delantal se convierte, según la fórmula de un investigador, en «un traje de resistencia»." },
      { it: "L'industrie, bien sûr, a déjà enveloppé la révolte. Les robots pâtissiers promettent le fait maison «sans effort» ; les kits livrent des ingrédients coupés avec la recette. La question posée à table est devenue philosophique : est-ce encore du fait maison si les mains ne touchent rien ? Le débat est ouvert ; le dîner, lui, arrive à l'heure.",
      es: "La industria, claro, ya envolvió la revuelta. Los robots de repostería prometen lo casero «sin esfuerzo»; los kits entregan ingredientes cortados con la receta. La pregunta en la mesa se volvió filosófica: ¿sigue siendo casero si las manos no tocan nada? El debate está abierto; la cena, esa, llega a tiempo." },
      { it: "Et les enfants, dans tout cela ? Ils font ce qu'ils ont toujours fait avec ce qui mijote : ils attendent, ils goûtent, ils se souviennent. Une cuisinière de province l'a dit mieux que les statistiques : « Un plat préparé nourrit un soir. Un plat maison nourrit toute une vie. »",
      es: "¿Y los niños en todo esto? Hacen lo que siempre han hecho con lo que se cocina a fuego lento: esperan, prueban, recuerdan. Una cocinera de provincia lo dijo mejor que las estadísticas: «Un plato preparado alimenta una noche. Un plato casero alimenta toda una vida.»" },
    ],
    words: [
      { it: "mijoter", es: "cocinar a fuego lento" },
      { it: "le tablier", es: "el delantal" },
      { it: "basculer / le basculement", es: "volcarse / el vuelco" },
      { it: "un costume de résistance", es: "un traje de resistencia (figurado)" },
      { it: "le kit (de cuisine)", es: "el kit (de cocina)" },
      { it: "nourrir", es: "alimentar" },
    ],
    questions: [
      { q: "¿Cuál fue durante décadas «la promesa del progreso»?", options: ["Plus de travail à la maison, chaque étape libérait du temps et ajoutait une facture", "Moins d'argent", "Plus d'enfants", "Rien"], answer: 0, why: "«La promesse du progrès fut la même : moins de travail à la maison… chaque étape libérait du temps et ajoutait une facture.»" },
      { q: "¿Qué redescubre la nueva generación?", options: ["Les grands-mères", "Ce que les grands-mères n'avaient jamais perdu : une sauce qui mijote est une soirée qui n'a pas de prix", "Les plats préparés", "Les fast-foods"], answer: 1, why: "«Une génération… redécouvre ce que les grands-mères n'avaient jamais perdu : une sauce qui mijote est une soirée qui n'a pas de prix.»" },
      { q: "¿Qué ven «otros» economistas?", options: ["Une mode passagère", "Un basculement profond : le temps à la maison cesse d'être du temps perdu ; le tablier devient «un costume de résistance»", "Une crise", "Un problème de santé"], answer: 1, why: "«Quand le travail cesse d'être le seul lieu de valeur, le temps passé à la maison cesse d'être du temps perdu… le tablier devient «un costume de résistance».»" },
      { q: "¿Qué pregunta «filosófica» se plantea en la mesa?", options: ["«Qui va payer ?»", "«Est-ce encore du fait maison si les mains ne touchent rien ?»", "«Faut-il manger ?»", "«Le robot est-il humain ?»"], answer: 1, why: "«La question posée à table est devenue philosophique : est-ce encore du fait maison si les mains ne touchent rien ?»" },
      { q: "¿Qué dijo la cocinera de provincia?", options: ["«Un plat préparé nourrit un soir. Un plat maison nourrit toute une vie.»", "«Tout est cher.»", "«Je cuisine pour personne.»", "«Les statistiques mentent.»"], answer: 0, why: "«Un plat préparé nourrit un soir. Un plat maison nourrit toute une vie.»" },
    ],
    discuss: [
      { it: "«Un costume de résistance» : que résistez-vous, vous, en cuisine ou ailleurs ?", es: "«Un traje de resistencia»: ¿a qué te resistes tú, en la cocina o fuera de ella?" },
      { it: "Fait maison chez vous : quoi d'abord ? Le pain, la sauce, le café ? Racontez votre plat-mémoire.", es: "Casero en tu casa: ¿qué primero? ¿El pan, la salsa, el café? Cuenta tu plato-recuerdo." },
    ],
  },

  /* ═══ B2 · 2 — Sciences ═══ */
  {
    id: "fr-news-b2-02", cat: "scienza", level: "B2", place: "Paris", minutes: 4,
    title: "L'Observatoire : trois siècles à regarder le plafond",
    titleEs: "El Observatorio: tres siglos mirando el techo",
    lead: {
      it: "Au sommet de Paris, un bâtiment observe le ciel depuis 1667. Il a mesuré la Terre quand elle était encore un mystère, et il prépare maintenant la mission qui la quittera.",
      es: "En lo alto de París, un edificio observa el cielo desde 1667. Midió la Tierra cuando todavía era un misterio, y ahora prepara la misión que la abandonará.",
    },
    paragraphs: [
      { it: "L'histoire de l'Observatoire de Paris commence avec un roi curieux et un astronome obstiné. Louis XIV voulait des cartes exactes de son royaume ; l'astronome lui répondit que la Terre n'était pas ronde — et donc que les cartes mentaient toutes. Il fallait d'abord mesurer la planète. Le roi, pragmatique, accorda un bâtiment et un budget. La cartographie du monde entier en sortit, et la France avec : le méridien de Paris servit de zéro aux longitudes pendant un siècle, avant que l'histoire n'installe le zéro ailleurs.",
      es: "La historia del Observatorio de París empieza con un rey curioso y un astrónomo terco. Luis XIV quería mapas exactos de su reino; el astrónomo le respondió que la Tierra no era redonda — y que por lo tanto todos los mapas mentían. Había que medir primero el planeta. El rey, pragmático, concedió un edificio y un presupuesto. De allí salió la cartografía del mundo entero, y Francia con ella: el meridiano de París sirvió de cero a las longitudes durante un siglo, antes de que la historia instalara el cero en otro lugar." },
      { it: "Le travail des siècles suivants ressemble à une conversation lente avec le ciel. Les équipes ont pesé des planètes depuis leur salon, trouvé des comètes comme on trouve des fautes de frappe, et gardé l'heure de la France quand l'heure était encore une affaire d'État : les gardiens du temps, surnommés ainsi, habitaient littéralement dans le bâtiment, au-dessus des horloges.",
      es: "El trabajo de los siglos siguientes se parece a una conversación lenta con el cielo. Los equipos pesaron planetas desde su salón, hallaron cometas como se hallan erratas, y guardaron la hora de Francia cuando la hora era aún un asunto de Estado: los guardianes del tiempo, así apodados, vivían literalmente en el edificio, encima de los relojes." },
      { it: "Aujourd'hui, l'Observatoire n'a plus de rois ; il a des dossiers. Les chercheurs y préparent des instruments pour des missions lointaines, valident les horloges qui dirigent les satellites de toute l'Europe, et surveillent un risque très parisien de science : que la lumière de la ville, en s'invitant dans les télescopes, confonde la nuit avec le jour. Les étoiles ont quitté Paris pour la campagne ; les idées, elles, n'ont pas déménagé.",
      es: "Hoy, el Observatorio ya no tiene reyes; tiene expedientes. Los investigadores preparan instrumentos para misiones lejanas, validan los relojes que dirigen los satélites de toda Europa, y vigilan un riesgo muy parisino de la ciencia: que la luz de la ciudad, invitándose a los telescopios, confunda la noche con el día. Las estrellas dejaron París por el campo; las ideas no se mudaron." },
      { it: "La phrase du lieu appartient à un directeur du dix-neuvième siècle, que les équipes citent encore en réunion : « Nous n'avons pas la prétention de répondre aux questions du ciel. Nous avons celle de les poser mieux que personne. C'est déjà beaucoup : le ciel est patient, et nous avons un bâtiment. »",
      es: "La frase del lugar pertenece a un director del siglo diecinueve, que los equipos aún citan en reunión: «No pretendemos responder a las preguntas del cielo. Pretendemos plantearlas mejor que nadie. Ya es mucho: el cielo es paciente, y nosotros tenemos un edificio.»" },
    ],
    words: [
      { it: "l'Observatoire", es: "el Observatorio" },
      { it: "le méridien", es: "el meridiano" },
      { it: "la longitude", es: "la longitud" },
      { it: "la comète", es: "el cometa" },
      { it: "une faute de frappe", es: "una errata" },
      { it: "la prétention", es: "la pretensión" },
    ],
    questions: [
      { q: "¿Qué quería Luis XIV y qué respondió el astrónomo?", options: ["Des cartes exactes ; l'astronome répondit que la Terre n'était pas ronde et que toutes les cartes mentaient : il fallait d'abord mesurer la planète", "Un château ; « trop cher »", "Une église ; « non »", "Des étoiles ; « impossible »"], answer: 0, why: "«Louis XIV voulait des cartes exactes… l'astronome lui répondit que la Terre n'était pas ronde — et donc que les cartes mentaient toutes. Il fallait d'abord mesurer la planète.»" },
      { q: "¿Qué papel jugó el meridiano de París?", options: ["Aucun", "Il servit de zéro aux longitudes pendant un siècle", "Il mesurait la pluie", "Il fermait la nuit"], answer: 1, why: "«Le méridien de Paris servit de zéro aux longitudes pendant un siècle, avant que l'histoire n'installe le zéro ailleurs.»" },
      { q: "¿Quiénes eran «los guardianes del tiempo»?", options: ["Des rois", "Ceux qui gardaient l'heure de la France ; ils habitaient littéralement dans le bâtiment, au-dessus des horloges", "Des gardiens de nuit", "Des astronomes espagnols"], answer: 1, why: "«Les gardiens du temps… habitaient littéralement dans le bâtiment, au-dessus des horloges.»" },
      { q: "¿Cuál es hoy el «riesgo muy parisino» de la ciencia?", options: ["Les impôts", "Que la lumière de la ville, en s'invitant dans les télescopes, confonde la nuit avec le jour", "Les touristes", "Les grèves"], answer: 1, why: "«Que la lumière de la ville, en s'invitant dans les télescopes, confonde la nuit avec le jour.»" },
      { q: "¿Qué frase citan aún en reunión?", options: ["«Nous avons la prétention de répondre aux questions du ciel.»", "«Nous n'avons pas la prétention de répondre aux questions du ciel. Nous avons celle de les poser mieux que personne.»", "«Le ciel est à nous.»", "«Paris est la capitale du ciel.»"], answer: 1, why: "«Nous avons celle de les poser mieux que personne. C'est déjà beaucoup : le ciel est patient, et nous avons un bâtiment.»" },
    ],
    discuss: [
      { it: "Poser mieux les questions au lieu d'y répondre : où d'autre cette règle marche-t-elle ?", es: "Plantear mejor las preguntas en vez de responderlas: ¿dónde más funciona esa regla?" },
      { it: "«Le ciel est patient.» Et vous ? Quelle question attendez-vous depuis longtemps ?", es: "«El cielo es paciente.» ¿Y tú? ¿Qué pregunta esperas desde hace tiempo?" },
    ],
  },

  /* ═══ B2 · 3 — Culture ═══ */
  {
    id: "fr-news-b2-03", cat: "cultura", level: "B2", place: "Paris", minutes: 4,
    title: "La bande dessinée : le neuvième art qui a pris le pouvoir",
    titleEs: "La historieta: el noveno arte que tomó el poder",
    lead: {
      it: "En France, on vend plus d'albums dessinés que de romans. Le neuvième art, naguère rangé avec les enfants, dirige maintenant la littérature, le cinéma et les musées.",
      es: "En Francia se venden más álbumes de historieta que novelas. El noveno arte, ayer guardado con los niños, dirige hoy la literatura, el cine y los museos.",
    },
    paragraphs: [
      { it: "Le retournement a pris un demi-siècle. La bande dessinée fut d'abord un divertissement de gare : petites histoires, gros rires, papier qui jaunit. Puis les dessinateurs prirent le temps — celui des romanciers. Des récits de trois cents pages parurent, sur la guerre, sur l'enfance, sur la vieillesse ; les critiques cherchèrent la case «à mettre où ?» et n'en trouvèrent pas.",
      es: "El giro tardó medio siglo. La historieta fue primero un pasatiempo de estación: historias pequeñas, risas grandes, papel que amarillea. Luego los dibujantes tomaron el tiempo — el de los novelistas. Aparecieron relatos de trescientas páginas sobre la guerra, la infancia, la vejez; la crítica buscó la casilla «¿dónde ponerlo?» y no la encontró." },
      { it: "Le public suivit, génération par génération. Les enfants qui lisaient des aventures sont devenus des parents qui offraient des albums ; leurs enfants, à leur tour, sont devenus des auteurs. Aujourd'hui, un roman graphique sur un sujet grave se vend comme un roman tout court, se discute comme lui, et se réimprime comme lui.",
      es: "El público siguió, generación tras generación. Los niños que leían aventuras se volvieron padres que regalaban álbumes; sus hijos, a su vez, se volvieron autores. Hoy, una novela gráfica sobre un tema serio se vende como una novela sin más, se discute como ella y se reimprime como ella." },
      { it: "Les musées ont ouvert leurs cimaises, parfois avec vingt ans de retard et un air de s'excuser. Les festivals, eux, n'ont demandé la permission à personne : une petite ville du sud reçoit chaque année un demi-million de visiteurs, venus voir des auteurs signer des albums pendant huit heures — et faire la queue, patient, comme devant un musée d'été.",
      es: "Los museos abrieron sus muros, a veces con veinte años de retraso y aire de disculparse. Los festivales, en cambio, no pidieron permiso a nadie: una pequeña ciudad del sur recibe cada año medio millón de visitantes, que ven a autores firmar álbumes durante ocho horas — y hacen cola, pacientes, como frente a un museo de verano." },
      { it: "Les derniers réticents se rendent avec élégance, et une phrase de concession : « Ce n'est pas de la littérature, c'est autre chose. » À quoi un auteur répond, invariablement : « Merci. C'était justement l'idée. »",
      es: "Los últimos reticentes se rinden con elegancia, y una frase de concesión: «No es literatura, es otra cosa.» A lo que un autor responde, invariablemente: «Gracias. Justamente esa era la idea.»" },
    ],
    words: [
      { it: "la bande dessinée (BD)", es: "la historieta, el cómic" },
      { it: "le neuvième art", es: "el noveno arte" },
      { it: "le roman graphique", es: "la novela gráfica" },
      { it: "la cimaise", es: "el muro (de exposición)" },
      { it: "naguère", es: "antaño" },
      { it: "jaunir", es: "amarillear" },
    ],
    questions: [
      { q: "¿Qué fue primero la BD?", options: ["Un art de musée", "Un divertissement de gare : petites histoires, gros rires, papier qui jaunit", "Un genre noble dès l'origine", "Une invention récente"], answer: 1, why: "«La bande dessinée fut d'abord un divertissement de gare : petites histoires, gros rires, papier qui jaunit.»" },
      { q: "¿Qué hicieron luego los dibujantes?", options: ["Ils ont arrêté", "Ils ont pris le temps des romanciers : des récits de trois cent pages sur la guerre, l'enfance, la vieillesse", "Ils ont imité les romans", "Ils ont raccourci"], answer: 1, why: "«Puis les dessinateurs prirent le temps — celui des romanciers. Des récits de trois cent pages parurent, sur la guerre, sur l'enfance, sur la vieillesse.»" },
      { q: "¿Qué ocurre en el festival de la pequeña ciudad del sur?", options: ["Rien de spécial", "Un demi-million de visiteurs voient des auteurs signer des albums pendant huit heures, avec des queues patientes", "Il pleut toujours", "Il est interdit"], answer: 1, why: "«Une petite ville du sud reçoit chaque année un demi-million de visiteurs, venus voir des auteurs signer des albums pendant huit heures — et faire la queue, patient.»" },
      { q: "¿Cómo se rinden los últimos reticentes y qué responden los autores?", options: ["«C'est de la littérature» — «Non»", "«Ce n'est pas de la littérature, c'est autre chose» — «Merci. C'était justement l'idée.»", "«C'est pour enfants» — «Oui»", "«C'est fini» — «Presque»"], answer: 1, why: "«Ce n'est pas de la littérature, c'est autre chose.» À quoi un auteur répond : «Merci. C'était justement l'idée.»" },
    ],
    discuss: [
      { it: "BD ou roman : que lisez-vous vraiment, et où ? Avouez vos habitudes.", es: "Historieta o novela: ¿qué lees de verdad, y dónde? Confiesa tus hábitos." },
      { it: "«C'était justement l'idée» : un art qui refuse d'être un autre — en voyez-vous un deuxième exemple ?", es: "«Justamente esa era la idea»: un arte que se niega a ser otro — ¿ves un segundo ejemplo?" },
    ],
  },
];
