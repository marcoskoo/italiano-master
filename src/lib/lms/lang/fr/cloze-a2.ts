import type { CbClozeText } from "../../cambridge";

/* ═══ FR A2 · Cloze readings — 3 por unidad (inferencia léxica) ══════
   Metodología v9.12: el texto en francés lleva marcadores {1} {2}, etc.
   que el reproductor convierte en huecos; el estudiante deduce la
   palabra por el contexto. Campos: `.it` = francés (lengua de estudio),
   `.es` = español. Escenarios en Francia: Lille, Versailles, Dijon,
   Paris, Bordeaux, Strasbourg, Marseille, Cassis. */

export const FR_CLOZE_A2: Record<string, CbClozeText[]> = {
  "fr-cu-a2-01": [
    {
      id: "cz-fr-a2-01-1", title: "Le week-end de Chloé à Lille", titleEs: "El fin de semana de Chloé en Lille", minutes: 3,
      paragraphs: [
        { it: "Le week-end dernier, Chloé et deux amies ont visité le Vieux-Lille. Le matin, elles ont acheté des gaufres chez Méert, une {1} très célèbre de la ville, et elles ont pris des photos dans les rues pavées. À midi, elles ont déjeuné dans un {2} typique du Nord, avec des nappes à carreaux rouges.", es: "El fin de semana pasado, Chloé y dos amigas visitaron el Vieux-Lille. Por la mañana compraron gaufres en Méert, una pastelería muy célebre de la ciudad, y tomaron fotos en las calles adoquinadas. Al mediodía almorzaron en un estaminet típico del Norte, con manteles de cuadros rojos." },
        { it: "L'après-midi, il a fait très {3}, alors elles ont marché au bord de la Deûle. Le soir, elles ont regardé un match de football au café et elles ont {4} la journée autour d'une bière. Dimanche soir, Chloé est rentrée chez elle, fatiguée mais {5}.", es: "Por la tarde hizo muy buen tiempo, así que pasearon junto al río Deûle. Por la noche vieron un partido de fútbol en el café y celebraron el día alrededor de una cerveza. El domingo por la noche, Chloé volvió a casa, cansada pero contenta." },
      ],
      gaps: [
        { options: ["pâtisserie", "pharmacie", "banque"], answer: 0, why: "Las gaufres se compran en una pastelería: «une pâtisserie très célèbre»." },
        { options: ["estaminet", "musée", "stade"], answer: 0, why: "«Typique du Nord» con manteles de cuadros: el restaurante tradicional del Norte es el estaminet." },
        { options: ["beau", "froid", "tard"], answer: 0, why: "«Alors elles ont marché au bord de la Deûle»: el buen tiempo explica el paseo." },
        { options: ["fêté", "oublié", "traversé"], answer: 0, why: "Después de un buen día por la ciudad, lo natural es celebrarlo: «elles ont fêté la journée»." },
        { options: ["heureuse", "malade", "inquiète"], answer: 0, why: "El contraste «fatiguée mais» pide un sentimiento positivo: heureuse." },
      ],
    },
    {
      id: "cz-fr-a2-01-2", title: "Un lundi matin au bureau", titleEs: "Un lunes por la mañana en la oficina", minutes: 2,
      paragraphs: [
        { it: "Lundi matin, Léo arrive au bureau avec le sourire. Il demande à sa collègue : « Alors, tu as passé un bon {1} ? » Elle raconte : « Samedi, j'ai visité une exposition de photographie, et le soir, on a {2} un film à la maison. »", es: "El lunes por la mañana, Léo llega a la oficina sonriendo. Le pregunta a su compañera: «¿Y eso? ¿Pasaste un buen fin de semana?». Ella cuenta: «El sábado visité una exposición de fotografía y por la noche vimos una película en casa»." },
        { it: "« Et dimanche ? » continue Léo. « Dimanche, j'ai dormi jusqu'à 10 heures, j'ai lu le journal au lit et j'ai {3} un bon déjeuner : crêpes et salade. L'après-midi, j'ai fait une promenade au parc. Je n'ai pas {4} la télévision : il faisait trop {5} pour rester dedans ! »", es: "«¿Y el domingo?», continúa Léo. «El domingo dormí hasta las 10, leí el periódico en la cama y preparé una buena comida: crepes y ensalada. Por la tarde di un paseo al parque. No encendí la televisión: ¡hacía demasiado buen tiempo para quedarse dentro!»" },
      ],
      gaps: [
        { options: ["week-end", "anniversaire", "voyage"], answer: 0, why: "Es lunes por la mañana: la pregunta típica es por el fin de semana." },
        { options: ["regardé", "rangé", "cuisiné"], answer: 0, why: "«un film à la maison» → regarder un film." },
        { options: ["préparé", "regardé", "attendu"], answer: 0, why: "Las crêpes y la ensalada se preparan: «j'ai préparé un bon déjeuner»." },
        { options: ["allumé", "fermé", "trouvé"], answer: 0, why: "La televisión se enciende: «je n'ai pas allumé la télévision»." },
        { options: ["beau", "noir", "vent"], answer: 0, why: "Salió a pasear: hacía demasiado buen tiempo para quedarse dentro." },
      ],
    },
    {
      id: "cz-fr-a2-01-3", title: "La Braderie de Lille", titleEs: "La Braderie de Lille", minutes: 3,
      paragraphs: [
        { it: "Chaque premier week-end de septembre, Lille organise la Braderie, le plus grand {1} d'Europe. Deux millions de visiteurs marchent dans les rues du centre. On y vend de tout : des vieux livres, des assiettes, des vêtements et des {2} anciens restaurés par des collectionneurs.", es: "Cada primer fin de semana de septiembre, Lille organiza la Braderie, el rastrillo más grande de Europa. Dos millones de visitantes caminan por las calles del centro. Se vende de todo: libros viejos, platos, ropa y muebles antiguos restaurados por coleccionistas." },
        { it: "La tradition veut aussi qu'on mange des moules-frites : les restaurants {3} des montagnes de coquilles vides devant leur porte. Le dimanche soir, à la fin de la fête, les {4} ramassent tout et la ville redevient {5}. Lillois et touristes se donnent rendez-vous chaque année à la même date.", es: "La tradición también quiere que se coman moules-frites: los restaurantes apilan montañas de conchas vacías delante de su puerta. El domingo por la noche, al final de la fiesta, los servicios de limpieza lo recogen todo y la ciudad vuelve a estar tranquila. Lillosos y turistas se dan cita cada año en la misma fecha." },
      ],
      gaps: [
        { options: ["marché", "match", "musée"], answer: 0, why: "Se vende de todo en las calles: es un mercado gigante." },
        { options: ["meubles", "bateaux", "tracteurs"], answer: 0, why: "En un rastrillo se venden muebles viejos junto a libros, platos y ropa." },
        { options: ["entassent", "peignent", "achètent"], answer: 0, why: "«Des montagnes de coquilles vides devant leur porte»: los restaurantes las apilan." },
        { options: ["éboueurs", "serveurs", "artistes"], answer: 0, why: "Al final de la fiesta alguien tiene que recogerlo todo: los servicios de limpieza, les éboueurs." },
        { options: ["calme", "grise", "bête"], answer: 0, why: "Después de dos millones de personas y de la limpieza, la ciudad vuelve a estar tranquila." },
      ],
    },
  ],

  "fr-cu-a2-02": [
    {
      id: "cz-fr-a2-02-1", title: "Une journée à Versailles", titleEs: "Un día en Versalles", minutes: 3,
      paragraphs: [
        { it: "Samedi dernier, la classe de français est partie en excursion au château de Versailles. Nous sommes partis de Paris à 7 heures du matin et nous sommes arrivés avant tout le monde. Nous sommes entrés les {1} dans le château : il n'y avait presque personne autour de nous.", es: "El sábado pasado, la clase de francés salió de excursión al castillo de Versalles. Salimos de París a las 7 de la mañana y llegamos antes que nadie. Entramos los primeros en el castillo: casi no había nadie a nuestro alrededor." },
        { it: "L'après-midi, nous sommes descendus dans les immenses {2} dessinés par Le Nôtre : fontaines, statues et pelouses parfaites. Nous sommes restés jusqu'à 18 heures 30. Le soir, dans le train du retour, tout le monde a dormi : nous étions {3} de fatigue, mais très {4} de notre journée. La semaine suivante, Inès a écrit un article sur l'excursion pour le journal du {5}.", es: "Por la tarde bajamos a los inmensos jardines diseñados por Le Nôtre: fuentes, estatuas y céspedes perfectos. Nos quedamos hasta las 18:30. Por la noche, en el tren de regreso, todo el mundo durmió: estábamos muertos de cansancio, pero muy orgullosos de nuestra jornada. La semana siguiente, Inès escribió un artículo sobre la excursión para el periódico del instituto." },
      ],
      gaps: [
        { options: ["premiers", "derniers", "perdus"], answer: 0, why: "«Avant tout le monde» y «presque personne»: llegaron antes que nadie → los primeros." },
        { options: ["jardins", "couloirs", "ascenseurs"], answer: 0, why: "«Fontaines, statues et pelouses» describe jardines, no pasillos." },
        { options: ["morts", "pleins", "sûrs"], answer: 0, why: "Todos durmieron en el tren: la expresión «morts de fatigue»." },
        { options: ["fiers", "tristes", "honteux"], answer: 0, why: "Tras una excursión lograda, el sentimiento natural es el orgullo: fiers de notre journée." },
        { options: ["lycée", "marché", "théâtre"], answer: 0, why: "Un artículo sobre una excursión de clase se publica en el periódico del instituto." },
      ],
    },
    {
      id: "cz-fr-a2-02-2", title: "Le récit d'Inès", titleEs: "El relato de Inès", minutes: 2,
      paragraphs: [
        { it: "Lundi matin, Inès raconte son excursion à Thomas : « Nous sommes partis très tôt, et à Versailles, une surprise nous attendait : la file d'attente était déjà {1} devant la grille dorée. Heureusement, nous avions des billets réservés sur {2}, alors nous sommes passés directement. »", es: "El lunes por la mañana, Inès le cuenta su excursión a Thomas: «Salimos muy temprano y, en Versalles, nos esperaba una sorpresa: la cola ya era enorme delante de la verja dorada. Por suerte, teníamos billetes reservados por internet, así que pasamos directamente»." },
        { it: "« À l'intérieur, nous sommes montés dans les appartements du {3}, avec les chambres dorées et les fresques. Ensuite, nous sommes descendus vers le Grand Canal, où des visiteurs faisaient du {4} sur l'eau. Nous sommes sortis les derniers, à la fermeture. Le soir, je n'avais plus de {5} dans les jambes ! »", es: "«Dentro subimos a los apartamentos del rey, con las habitaciones doradas y los frescos. Después bajamos hacia el Gran Canal, donde unos visitantes paseaban en barca por el agua. Salimos los últimos, al cierre. ¡Por la noche ya no tenía fuerzas en las piernas!»" },
      ],
      gaps: [
        { options: ["énorme", "courte", "invisible"], answer: 0, why: "La sorpresa negativa que casi arruina la mañana: la cola ya era enorme." },
        { options: ["internet", "place", "honneur"], answer: 0, why: "La estrategia anticolas: los billetes se reservan por internet para pasar directamente." },
        { options: ["roi", "professeur", "chef"], answer: 0, why: "Versalles fue la residencia de Luis XIV: los appartements du roi." },
        { options: ["bateau", "cheval", "ski"], answer: 0, why: "«Sur l'eau» en el Grand Canal: se pasea en barco." },
        { options: ["force", "eau", "fromage"], answer: 0, why: "Después de caminar todo el día: no quedaban fuerzas en las piernas." },
      ],
    },
    {
      id: "cz-fr-a2-02-3", title: "Le Mont-Saint-Michel", titleEs: "El Mont-Saint-Michel", minutes: 3,
      paragraphs: [
        { it: "L'été dernier, Lucas et sa sœur sont allés au Mont-Saint-Michel, en Normandie. Ils sont partis de Paris en {1} de bon matin et ils sont arrivés à midi. À l'entrée du site, ils sont tombés sur une guide qui proposait une visite {2} du village et de l'abbaye.", es: "El verano pasado, Lucas y su hermana fueron al Mont-Saint-Michel, en Normandía. Salieron de París en tren de buena mañana y llegaron al mediodía. A la entrada del sitio se toparon con una guía que ofrecía una visita guiada del pueblo y de la abadía." },
        { it: "Ils sont montés par les ruelles étroites jusqu'à l'{3}, au sommet de la montagne. De là-haut, la vue sur la {4} et les sables était magnifique. Ils sont restés jusqu'au soir, car leur père leur avait dit : « Restez pour la {5} : c'est le plus beau moment du Mont. » Ils ne l'ont pas regretté.", es: "Subieron por las callejuelas estrechas hasta la abadía, en la cima de la montaña. Desde arriba, la vista sobre la bahía y las arenas era magnífica. Se quedaron hasta el anochecer, porque su padre les había dicho: «Quedaos para la marea: es el momento más bonito del Mont». No se arrepintieron." },
      ],
      gaps: [
        { options: ["train", "bateau", "ascenseur"], answer: 0, why: "De París a Normandía se va en tren; el Mont se recorre a pie." },
        { options: ["guidée", "libre", "rapide"], answer: 0, why: "Una guide (guía) solo puede ofrecer una visita guiada." },
        { options: ["abbaye", "gare", "piscine"], answer: 0, why: "En la cima del Mont-Saint-Michel está la abadía." },
        { options: ["baie", "montagne", "rue"], answer: 0, why: "«Et les sables» alrededor: la bahía del Mont-Saint-Michel." },
        { options: ["marée", "pluie", "fête"], answer: 0, why: "El Mont es famoso por su marea, «le plus beau moment» según el padre." },
      ],
    },
  ],

  "fr-cu-a2-03": [
    {
      id: "cz-fr-a2-03-1", title: "L'enfance de Madame Dubois", titleEs: "La infancia de Madame Dubois", minutes: 3,
      paragraphs: [
        { it: "Quand Madame Dubois était petite, sa famille habitait une maison près de Dijon. Son père était {1} dans une fabrique de moutarde et sa mère restait à la maison. Chaque matin, les enfants allaient à l'école à {2}, car il n'y avait pas de bus dans le village.", es: "Cuando Madame Dubois era pequeña, su familia vivía en una casa cerca de Dijon. Su padre era obrero en una fábrica de mostaza y su madre se quedaba en casa. Cada mañana los niños iban al colegio a pie, porque no había autobús en el pueblo." },
        { it: "Les étés étaient simples et beaux. La famille partait un mois entier chez la grand-mère, en Bourgogne. Les enfants jouaient dans le {3}, nourrissaient les poules et cueillaient des cerises. Le soir, quand il faisait chaud, tout le monde mangeait sur la {4} et les grands-parents racontaient des {5} de leur jeunesse.", es: "Los veranos eran sencillos y bonitos. La familia se iba un mes entero a casa de la abuela, en Borgoña. Los niños jugaban en la huerta, daban de comer a las gallinas y cogían cerezas. Por la noche, cuando hacía calor, todos cenaban en la terraza y los abuelos contaban historias de su juventud." },
      ],
      gaps: [
        { options: ["ouvrier", "professeur", "médecin"], answer: 0, why: "Trabajaba «dans une fabrique»: el que trabaja en una fábrica es un obrero." },
        { options: ["pied", "cheval", "voiture"], answer: 0, why: "«Il n'y avait pas de bus»: la única forma de ir era a pie." },
        { options: ["potager", "garage", "bureau"], answer: 0, why: "Entre gallinas y cerezas: el potager, la huerta de la abuela." },
        { options: ["terrasse", "grenier", "cave"], answer: 0, why: "«Quand il faisait chaud»: en el campo, con calor, se cena en la terraza, no en el desván ni en la bodega." },
        { options: ["histoires", "mensonges", "films"], answer: 0, why: "Los abuelos cuentan historias de su juventud: raconter des histoires." },
      ],
    },
    {
      id: "cz-fr-a2-03-2", title: "Les étés chez grand-mère", titleEs: "Los veranos en casa de la abuela", minutes: 2,
      paragraphs: [
        { it: "Suzanne se souvient de ses étés chez sa grand-mère, en Bourgogne. Il y avait une ferme avec un grand {1}, des poules et un vieux chien. Chaque matin, Suzanne se levait tôt parce que les {2} chantaient et que les volets ne fermaient pas bien le bruit. Elle buvait du lait frais et mangeait du pain d'épices.", es: "Suzanne recuerda sus veranos en casa de su abuela, en Borgoña. Había una granja con un gran jardín, gallinas y un perro viejo. Cada mañana Suzanne se levantaba temprano porque los gallos cantaban y las contraventanas no cerraban bien el ruido. Bebía leche fresca y comía pain d'épices." },
        { it: "L'après-midi, elle aidait sa grand-mère à faire des {3} de cerises. C'était long, mais l'odeur de sucre remplissait la cuisine. Le soir, après le dîner, ils faisaient des {4} de société ou ils regardaient les {5} depuis la cour. « C'était une belle époque », dit toujours Suzanne.", es: "Por la tarde ayudaba a su abuela a hacer mermeladas de cereza. Era largo, pero el olor a azúcar llenaba la cocina. Por la noche, después de cenar, jugaban a juegos de mesa o miraban las estrellas desde el patio. «Era una época maravillosa», dice siempre Suzanne." },
      ],
      gaps: [
        { options: ["jardin", "ascenseur", "parking"], answer: 0, why: "Una granja con gallinas y perro tiene un jardín, no ascensor ni aparcamiento." },
        { options: ["coqs", "voisins", "bébés"], answer: 0, why: "Lo que canta al amanecer en una granja es el gallo: les coqs." },
        { options: ["confitures", "gâteaux", "boutiques"], answer: 0, why: "Cerezas + azúcar + cocina: mermeladas." },
        { options: ["jeux", "films", "sports"], answer: 0, why: "«De société»: los jeux de société son los juegos de mesa." },
        { options: ["étoiles", "voitures", "nuages"], answer: 0, why: "Desde el patio, por la noche y en el campo, se miran las estrellas." },
      ],
    },
    {
      id: "cz-fr-a2-03-3", title: "Le village d'autrefois", titleEs: "El pueblo de antes", minutes: 3,
      paragraphs: [
        { it: "Autrefois, le village de Madame Dubois était très différent. Il n'y avait qu'une seule {1}, avec le pain encore chaud à 7 heures. Les gens achetaient leur pain, parlaient cinq minutes et rentraient. Il y avait aussi une petite {2} : on y vendait des bonbons, du fil et des journaux.", es: "Antes, el pueblo de Madame Dubois era muy diferente. Solo había una panadería, con el pan aún caliente a las 7. La gente compraba su pan, hablaba cinco minutos y volvía a casa. También había una pequeña tienda de comestibles: se vendían caramelos, hilo y periódicos." },
        { it: "Le dimanche, tout le village se retrouvait sur la {3} après le déjeuner. Les hommes jouaient aux {4} sous les arbres et les enfants couraient partout. Personne n'était pressé : les journées étaient longues et le temps semblait plus {5}. Aujourd'hui, il reste la place, mais les joueurs ont disparu.", es: "El domingo, todo el pueblo se reunía en la plaza después de comer. Los hombres jugaban a las bochas bajo los árboles y los niños corrían por todas partes. Nadie tenía prisa: los días eran largos y el tiempo parecía más lento. Hoy queda la plaza, pero los jugadores han desaparecido." },
      ],
      gaps: [
        { options: ["boulangerie", "banque", "piscine"], answer: 0, why: "El pan caliente por la mañana sale de la panadería." },
        { options: ["épicerie", "usine", "école"], answer: 0, why: "Caramelos, hilo y periódicos: una tienda de comestibles, une épicerie." },
        { options: ["place", "toiture", "plage"], answer: 0, why: "El punto de reunión de un pueblo es la plaza." },
        { options: ["boules", "échecs", "foot"], answer: 0, why: "La última frase lo confirma: el pueblo conserva la plaza, pero los jugadores han desaparecido." },
        { options: ["lent", "rapide", "cher"], answer: 0, why: "«Les journées étaient longues» y nadie tenía prisa: el tiempo parecía más lento." },
      ],
    },
  ],

  "fr-cu-a2-04": [
    {
      id: "cz-fr-a2-04-1", title: "Le sac oublié", titleEs: "El bolso olvidado", minutes: 3,
      paragraphs: [
        { it: "Vendredi soir, Raphaël rentrait chez lui en métro, ligne 4. Il était 21 heures et il {1} un roman policier. Il y avait beaucoup de monde dans le wagon, et une femme chantait sur le {2} avec une guitare. À Châtelet, tout le monde est descendu d'un coup, et Raphaël est sorti très vite.", es: "El viernes por la noche, Raphaël volvía a casa en metro, línea 4. Eran las 21 y leía una novela policíaca. Había mucha gente en el vagón, y una mujer cantaba en el andén con una guitarra. En Châtelet, todo el mundo bajó de golpe, y Raphaël salió muy rápido." },
        { it: "Sur l'escalator, il a eu un doute : où était son {3} ? Il a cherché dans ses poches, puis il a compris : il l'avait oublié dans le wagon, avec son ordinateur et ses {4} ! Il était paniqué. Il a appelé la RATP depuis le quai et il a rempli une déclaration en ligne. Le lendemain matin, quelqu'un a apporté le sac au service des objets {5} : il a tout récupéré, comme par miracle.", es: "En la escalera mecánica dudó: ¿dónde estaba su bolso? Buscó en los bolsillos y luego entendió: ¡lo había olvidado en el vagón, con su ordenador y sus llaves! Estaba en pánico. Llamó a la RATP desde el andén y rellenó una declaración por internet. A la mañana siguiente, alguien llevó el bolso al servicio de objetos perdidos: lo recuperó todo, como por milagro." },
      ],
      gaps: [
        { options: ["lisait", "conduisait", "nageait"], answer: 0, why: "Con «un roman policier» entre las manos, la acción en curso es leer: il lisait." },
        { options: ["quai", "toit", "tapis"], answer: 0, why: "La música del metro suena en el andén: sur le quai." },
        { options: ["sac", "chien", "billet"], answer: 0, why: "El drama clásico del metro: olvidar el bolso, luego «il l'avait oublié dans le wagon»." },
        { options: ["clés", "chaussures", "amis"], answer: 0, why: "En el bolso con el ordenador van las llaves: ses clés." },
        { options: ["trouvés", "perdus", "vendus"], answer: 0, why: "«Le service des objets trouvés» del curso: donde aparecen las cosas perdidas." },
      ],
    },
    {
      id: "cz-fr-a2-04-2", title: "Un parapluie très cher", titleEs: "Un paraguas muy querido", minutes: 2,
      paragraphs: [
        { it: "Samedi, il pleuvait sur Paris et Julie n'avait pas de parapluie. Elle s'est {1} rapidement sous l'auvent d'une boulangerie quand elle a vu, posé contre une borne, un parapluie bleu. Elle a attendu cinq minutes : {2} ne venait pas le chercher.", es: "El sábado llovía sobre París y Julie no tenía paraguas. Se refugió rápido bajo el toldo de una panadería cuando vio, apoyado contra una borne, un paraguas azul. Esperó cinco minutos: nadie venía a buscarlo." },
        { it: "Elle a pris le parapluie et a laissé un {3} avec son numéro : « Si c'est à vous, appelez-moi ! » Le soir même, un monsieur a téléphoné : c'était le parapluie de sa grand-mère, décédée l'année dernière. Il a apporté à Julie un {4} de chocolats pour la remercier. Le lendemain, ils ont pris un café ensemble : le {5} perdu est devenu une belle rencontre.", es: "Cogió el paraguas y dejó una nota con su número: «Si es suyo, ¡llámeme!». Esa misma noche llamó un señor: era el paraguas de su abuela, fallecida el año pasado. Le trajo a Julie una caja de bombones para agradecérselo. Al día siguiente tomaron un café juntos: el paraguas perdido se convirtió en un hermoso encuentro." },
      ],
      gaps: [
        { options: ["abritée", "perdue", "cachée"], answer: 0, why: "Sin paraguas bajo la lluvia, uno se refugia: «elle s'est abritée sous l'auvent»." },
        { options: ["personne", "tout le monde", "quelqu'un"], answer: 0, why: "Si tras cinco minutos no aparece el dueño: personne ne venait le chercher." },
        { options: ["mot", "paquet", "colis"], answer: 0, why: "Un mensaje escrito con su número: un mot." },
        { options: ["coffret", "billets", "paravent"], answer: 0, why: "Para agradecer: una caja de bombones, un coffret de chocolats." },
        { options: ["parapluie", "téléphone", "chocolat"], answer: 0, why: "Todo empezó con el paraguas azul: «le parapluie perdu»." },
      ],
    },
    {
      id: "cz-fr-a2-04-3", title: "Le bureau des objets trouvés", titleEs: "La oficina de objetos perdidos", minutes: 3,
      paragraphs: [
        { it: "À Paris, le service des objets trouvés reçoit chaque année des dizaines de milliers d'objets : parapluies, écharpes, portefeuilles, téléphones, et parfois des choses très {1}. Les agents racontent qu'un jour, quelqu'un a apporté une fausse dent dorée et même une {2} de mariage.", es: "En París, el servicio de objetos perdidos recibe cada año decenas de miles de objetos: paraguas, bufandas, carteras, teléfonos y a veces cosas muy raras. Los agentes cuentan que un día alguien trajo un diente postizo dorado e incluso una alianza de boda." },
        { it: "Comment ça {3} ? Si vous perdez quelque chose dans le métro ou dans un train, vous pouvez remplir une déclaration de perte sur internet. L'objet attend son propriétaire pendant plusieurs semaines. Si quelqu'un le trouve, il peut le {4} à un agent ou au bureau le plus proche. Beaucoup de Parisiens {5} que « il y a encore des gens honnêtes » quand ils récupèrent leurs affaires.", es: "¿Cómo funciona? Si pierdes algo en el metro o en un tren, puedes rellenar una declaración de pérdida por internet. El objeto espera a su propietario durante varias semanas. Si alguien lo encuentra, puede entregarlo a un agente o en la oficina más cercana. Muchos parisinos concluyen que «todavía hay gente honesta» cuando recuperan sus cosas." },
      ],
      gaps: [
        { options: ["rares", "lourdes", "chères"], answer: 0, why: "Un diente dorado y una alianza: ejemplos de cosas poco comunes, rares." },
        { options: ["alliance", "voiture", "maison"], answer: 0, why: "«De mariage»: la alianza, el anillo de boda." },
        { options: ["marche", "pleut", "coûte"], answer: 0, why: "La pregunta por el funcionamiento: «comment ça marche ?»." },
        { options: ["apporter", "acheter", "cacher"], answer: 0, why: "Quien encuentra algo lo entrega: l'apporter à un agent." },
        { options: ["concluent", "demandent", "partent"], answer: 0, why: "«Il y a encore des gens honnêtes» es una conclusión: muchos concluyen." },
      ],
    },
  ],

  "fr-cu-a2-05": [
    {
      id: "cz-fr-a2-05-1", title: "Un message de Léa", titleEs: "Un mensaje de Léa", minutes: 2,
      paragraphs: [
        { it: "Mercredi soir, le téléphone de Hugo vibre. C'est Léa : « Salut ! On {1} quoi samedi ? Il fait beau ce week-end ! Moi, le matin, je vais visiter le musée d'Aquitaine. On va se {2} à 10 heures devant l'entrée ? »", es: "El miércoles por la noche, el teléfono de Hugo vibra. Es Léa: «¡Hola! ¿Qué hacemos el sábado? ¡Hace buen tiempo este finde! Yo, por la mañana, voy a visitar el museo de Aquitania. ¿Nos vemos a las 10 delante de la entrada?»" },
        { it: "Hugo répond : « Super ! Et à midi, on va {3} dans le quartier Saint-Pierre ? Je connais un petit restaurant très bon. L'après-midi, on va se promener le long de la {4}, à Bordeaux. Le soir, viens chez moi : je vais organiser un {5} dinatoire. Tu vas adorer ! »", es: "Hugo responde: «¡Genial! ¿Y al mediodía vamos a comer en el barrio Saint-Pierre? Conozco un restaurante pequeño buenísimo. Por la tarde vamos a pasear a lo largo del Garona, en Burdeos. Por la noche, ven a mi casa: voy a organizar un apéro dinatoire. ¡Te va a encantar!»" },
      ],
      gaps: [
        { options: ["fait", "va", "est"], answer: 0, why: "«On fait quoi samedi ?»: la pregunta clásica para organizar planes." },
        { options: ["retrouver", "quitter", "casser"], answer: 0, why: "Quedar a una hora y en un sitio: se retrouver à 10 heures." },
        { options: ["déjeuner", "travailler", "dormir"], answer: 0, why: "«À midi» + restaurante: almorzar, déjeuner." },
        { options: ["Garonne", "Loire", "Seine"], answer: 0, why: "El río de Burdeos es el Garona: la escena transcurre en Burdeos." },
        { options: ["apéro", "match", "cours"], answer: 0, why: "«Viens chez moi» por la noche con comida: un apéro dinatoire." },
      ],
    },
    {
      id: "cz-fr-a2-05-2", title: "L'apéro de samedi", titleEs: "El aperitivo del sábado", minutes: 3,
      paragraphs: [
        { it: "Samedi, l'appartement de Paul sent la quiche chaude. Il a invité huit amis pour l'apéro dinatoire. Chacun amène quelque chose : Chloé va apporter du {1} et des olives, Léo va s'occuper des {2} et Julie a promis un gâteau au chocolat. La table attend déjà tout le monde.", es: "El sábado, el piso de Paul huele a quiche caliente. Ha invitado a ocho amigos para el apéro dinatoire. Cada uno trae algo: Chloé va a llevar queso y aceitunas, Léo va a encargarse de las bebidas y Julie ha prometido una tarta de chocolate. La mesa ya espera a todo el mundo." },
        { it: "À 19 heures, les invités arrivent, chacun avec quelque chose dans les {3} : c'est la règle d'or, on ne vient jamais les mains {4}. Tout le monde mange debout, on rit, on parle du week-end. Si tout va bien, l'apéro ne finit jamais à l'heure : à minuit, on joue encore aux {5} de société.", es: "A las 19 llegan los invitados, cada uno con algo en las manos: es la regla de oro, nunca se llega con las manos vacías. Todo el mundo come de pie, se ríe, se habla del finde. Si todo va bien, el aperitivo nunca termina a tiempo: a medianoche todavía se juega a juegos de mesa." },
      ],
      gaps: [
        { options: ["fromage", "savon", "papier"], answer: 0, why: "Con aceitunas para picar: queso, fromage." },
        { options: ["boissons", "courses", "poubelles"], answer: 0, why: "En un apéro alguien se encarga de las bebidas: Léo va s'occuper des boissons." },
        { options: ["mains", "poches", "valises"], answer: 0, why: "La regla de oro: llegar con algo en las manos." },
        { options: ["vides", "pleines", "sales"], answer: 0, why: "La etiqueta francesa: nunca «les mains vides», nunca con las manos vacías." },
        { options: ["jeux", "guitares", "guerres"], answer: 0, why: "«De société»: los juegos de mesa cierran los apéros." },
      ],
    },
    {
      id: "cz-fr-a2-05-3", title: "Le samedi parfait", titleEs: "El sábado perfecto", minutes: 3,
      paragraphs: [
        { it: "Ce samedi-là, le programme est parfait. Le matin, il va faire beau : Claire va se promener au {1} des Capucins, avec ses fruits et ses légumes colorés. Ensuite, elle va déjeuner en {2} au soleil, puis elle va faire une sieste au bord de la Garonne.", es: "Ese sábado el programa es perfecto. Por la mañana va a hacer buen tiempo: Claire va a pasear por el mercado de los Capucins, con sus frutas y verduras de colores. Después va a almorzar en terraza al sol y luego va a echar una siesta junto al Garona." },
        { it: "Le soir, elle va retrouver ses amis pour un {3} en plein air, au Miroir d'eau. Chacun va apporter un plat, et Claire, elle, va préparer une {4} de tomates, sa spécialité. Après le repas, ils vont écouter un {5} gratuit sur le quai : les samedis de Bordeaux ne s'oublient pas.", es: "Por la noche va a ver a sus amigos para un pícnic al aire libre, en el Miroir d'eau. Cada uno llevará un plato, y Claire preparará una tarta de tomates, su especialidad. Después de comer van a escuchar un concierto gratuito en el muelle: los sábados de Burdeos no se olvidan." },
      ],
      gaps: [
        { options: ["marché", "musée", "cinéma"], answer: 0, why: "Frutas y verduras de colores: el mercado." },
        { options: ["terrasse", "cuisine", "voiture"], answer: 0, why: "«Au soleil»: se almuerza en terraza." },
        { options: ["pique-nique", "match", "examen"], answer: 0, why: "«En plein air» con un plato cada uno: un pique-nique." },
        { options: ["tarte", "soupe", "glace"], answer: 0, why: "«Sa spécialité» con tomates: una tarte de tomates." },
        { options: ["concert", "discours", "moteur"], answer: 0, why: "Se escucha algo gratuito sobre el muelle los sábados: un concierto." },
      ],
    },
  ],

  "fr-cu-a2-06": [
    {
      id: "cz-fr-a2-06-1", title: "Une visite à Belleville", titleEs: "Una visita en Belleville", minutes: 3,
      paragraphs: [
        { it: "Emma cherche une chambre en colocation. Aujourd'hui, elle visite un T4 à Belleville, au cinquième étage {1} ascenseur. La colocataire, Sarah, lui montre la chambre : « Elle est {2} : il y a un lit, un bureau et une armoire. La fenêtre donne sur une cour très calme. »", es: "Emma busca una habitación en un piso compartido. Hoy visita un T4 en Belleville, en el quinto piso sin ascensor. La compañera, Sarah, le enseña la habitación: «Está amueblada: hay una cama, un escritorio y un armario. La ventana da a un patio muy tranquilo»." },
        { it: "Emma pose la question importante : « Le loyer est de combien ? » Sarah répond : « 620 euros, charges {3}. L'eau et le chauffage sont inclus, mais l'électricité est à part. Il y a une {4} d'un mois, remboursée à la fin du bail. » Emma hésite : le prix est correct, mais monter cinq étages à {5} tous les jours, c'est sportif !", es: "Emma hace la pregunta importante: «¿De cuánto es el alquiler?». Sarah responde: «620 euros, gastos incluidos. El agua y la calefacción están incluidos, pero la electricidad va aparte. Hay una fianza de un mes, que se devuelve al final del contrato». Emma duda: el precio está bien, ¡pero subir cinco pisos a pie cada día es deportivo!" },
      ],
      gaps: [
        { options: ["sans", "avec", "chez"], answer: 0, why: "El detalle temido de los pisos franceses: «sans ascenseur»." },
        { options: ["meublée", "vide", "peinte"], answer: 0, why: "«Un lit, un bureau et une armoire»: la habitación está amueblada." },
        { options: ["comprises", "exclues", "gratuites"], answer: 0, why: "«L'eau et le chauffage sont inclus» explica el charges comprises." },
        { options: ["caution", "chambre", "chance"], answer: 0, why: "«Remboursée à la fin du bail»: la fianza, la caution." },
        { options: ["pied", "cheval", "vélo"], answer: 0, why: "Sin ascensor, se sube a pie: «à pied»." },
      ],
    },
    {
      id: "cz-fr-a2-06-2", title: "L'annonce parfaite", titleEs: "El anuncio perfecto", minutes: 2,
      paragraphs: [
        { it: "Voici l'annonce de Mathilde : « Chambre meublée à louer dans une coloc sympathique, au cœur du 11e arrondissement. L'appartement est un T3 avec salon lumineux, cuisine {1} et salle de bains rénovée. Le {2} est de 700 euros, charges comprises : eau, chauffage et internet. »", es: "Este es el anuncio de Mathilde: «Habitación amueblada para alquilar en un piso compartido agradable, en el corazón del 11.º distrito. El piso es un T3 con salón luminoso, cocina equipada y cuarto de baño reformado. El alquiler es de 700 euros, gastos incluidos: agua, calefacción e internet»." },
        { it: "« La chambre donne sur une {3} calme, sans bruit de la rue. Nous sommes deux colocataires : une étudiante et un jeune salarié. Nous cherchons une personne {4}, propre et de bonne compagnie. Visites mercredi et jeudi soir. {5} d'un mois de loyer. Libre dès le 1er du mois prochain ! »", es: "«La habitación da a un patio tranquilo, sin ruido de la calle. Somos dos compañeros: una estudiante y un joven asalariado. Buscamos una persona simpática, limpia y de buena compañía. Visitas miércoles y jueves por la noche. Fianza de un mes de alquiler. ¡Libre desde el día 1 del mes que viene!»" },
      ],
      gaps: [
        { options: ["équipée", "cassée", "fermée"], answer: 0, why: "En los anuncios, la cocina se anuncia equipada: cuisine équipée." },
        { options: ["loyer", "loisir", "lever"], answer: 0, why: "«De 700 euros charges comprises»: el loyer, el alquiler." },
        { options: ["cour", "gare", "usine"], answer: 0, why: "«Calme, sans bruit de la rue»: da a una cour, un patio interior." },
        { options: ["sympa", "bruyante", "pressée"], answer: 0, why: "El trío clásico del anuncio francés: «sympa, propre et de bonne compagnie»." },
        { options: ["Caution", "Fête", "Pause"], answer: 0, why: "«D'un mois de loyer»: la caution, la fianza." },
      ],
    },
    {
      id: "cz-fr-a2-06-3", title: "Le premier jour dans la coloc", titleEs: "El primer día en el piso compartido", minutes: 3,
      paragraphs: [
        { it: "Aujourd'hui, Théo emménage dans sa nouvelle colocation à Lyon. Ses deux colocataires l'attendent sur le {1} avec la clé et un plan du quartier. Ils lui montrent sa chambre, puis la cuisine : « Il y a une étagère par personne dans le {2} », explique Aïcha. « Tes produits, ton étagère : c'est la règle numéro un. »", es: "Hoy Théo se muda a su nuevo piso compartido en Lyon. Sus dos compañeros lo esperan en el rellano con la llave y un mapa del barrio. Le enseñan su habitación y luego la cocina: «Hay una balda por persona en la nevera», explica Aïcha. «Tus productos, tu balda: es la regla número uno»." },
        { it: "Le soir, les trois colocataires dînent ensemble. Ils parlent des {3} : le loyer de 550 euros chacun, les charges, et l'abonnement de {4} qu'ils partagent. Avant de dormir, Théo pense à sa vieille chambre d'étudiant : elle était plus petite, mais ici, il a enfin l'impression d'être chez {5}.", es: "Por la noche, los tres compañeros cenan juntos. Hablan de los gastos: el alquiler de 550 euros cada uno, las cargas y la suscripción de internet que comparten. Antes de dormir, Théo piensa en su vieja habitación de estudiante: era más pequeña, pero aquí tiene por fin la sensación de estar en casa." },
      ],
      gaps: [
        { options: ["palier", "toit", "canapé"], answer: 0, why: "Con la llave en mano, los compañeros esperan en el rellano: sur le palier." },
        { options: ["frigo", "four", "salon"], answer: 0, why: "Una balda por persona para los productos: el frigo." },
        { options: ["frais", "amis", "vacances"], answer: 0, why: "Loyer, charges, abonnement: el tema de la cena son los gastos, les frais." },
        { options: ["internet", "voiture", "sport"], answer: 0, why: "El abonnement que se comparte en una coloc es el de internet." },
        { options: ["lui", "elle", "eux"], answer: 0, why: "Sentirse en casa: «être chez soi» → chez lui." },
      ],
    },
  ],

  "fr-cu-a2-07": [
    {
      id: "cz-fr-a2-07-1", title: "Chez le docteur Girard", titleEs: "En casa del doctor Girard", minutes: 3,
      paragraphs: [
        { it: "Marthe attend depuis vingt minutes dans la salle d'attente du docteur Girard. Elle a mal à la {1} et elle a de la fièvre depuis lundi. Enfin, l'infirmière appelle son {2} : « Marthe Lefèvre, salle 3 ! » Le docteur regarde sa gorge et dit : « C'est très rouge. Vous devez vous reposer. »", es: "Marthe espera desde hace veinte minutos en la sala de espera del doctor Girard. Le duele la garganta y tiene fiebre desde el lunes. Por fin, la enfermera llama su nombre: «¡Marthe Lefèvre, sala 3!». El doctor mira su garganta y dice: «Está muy roja. Debe descansar»." },
        { it: "« Est-ce que je dois prendre un médicament ? » demande Marthe. « Oui, je vais vous {3} un sirop et des pastilles. Vous devez aussi boire beaucoup d'eau chaude et rester à la {4} deux jours. Voici votre {5} : passez à la pharmacie ce soir. Et surtout, pas de travail avant vendredi ! »", es: "«¿Debo tomar un medicamento?», pregunta Marthe. «Sí, le voy a recetar un jarabe y pastillas. También debe beber mucha agua caliente y quedarse en casa dos días. Aquí tiene su receta: pase por la farmacia esta tarde. ¡Y sobre todo, nada de trabajar antes del viernes!»" },
      ],
      gaps: [
        { options: ["gorge", "jambe", "table"], answer: 0, why: "«Sa gorge est très rouge» lo revela: le duele la garganta." },
        { options: ["nom", "âge", "prix"], answer: 0, why: "Lo que se llama en la sala de espera es el nombre." },
        { options: ["prescrire", "acheter", "cacher"], answer: 0, why: "El doctor prescribe: «je vais vous prescrire un sirop»." },
        { options: ["maison", "plage", "montagne"], answer: 0, why: "Enferma y sin trabajar: quedarse en casa, rester à la maison." },
        { options: ["ordonnance", "bagage", "annonce"], answer: 0, why: "El papel que se lleva a la farmacia: la receta, l'ordonnance." },
      ],
    },
    {
      id: "cz-fr-a2-07-2", title: "À la pharmacie", titleEs: "En la farmacia", minutes: 2,
      paragraphs: [
        { it: "Marthe entre dans la pharmacie du coin avec son ordonnance. Le pharmacien lit et {1} la tête : « Le sirop, trois fois par jour, après les {2}. Les pastilles, une tous les trois heures, et surtout, ne les avalez pas : laissez-les fondre dans la bouche. »", es: "Marthe entra en la farmacia de la esquina con su receta. El farmacéutico lee y asiente: «El jarabe, tres veces al día, después de las comidas. Las pastillas, una cada tres horas y, sobre todo, no las trague: déjelas derretirse en la boca»." },
        { it: "Avant de payer, Marthe sort sa carte {3} : « Vous avez la carte ? Parfait, votre consultation est remboursée. Ce sera 6 euros 40. » Marthe paye par {4} et range le sirop dans son sac. Le pharmacien ajoute : « Si la fièvre {5} après trois jours, retournez voir le docteur ! »", es: "Antes de pagar, Marthe saca su carte Vitale: «¿Tiene la tarjeta? Perfecto, su consulta está reembolsada. Serán 6,40 euros». Marthe paga con tarjeta y guarda el jarabe en el bolso. El farmacéutico añade: «Si la fiebre continúa después de tres días, ¡vuelva a ver al doctor!»" },
      ],
      gaps: [
        { options: ["hoche", "secoue", "tourne"], answer: 0, why: "Aprobando las instrucciones: hocher la tête (asentir)." },
        { options: ["repas", "courses", "douches"], answer: 0, why: "«Trois fois par jour» se toma el jarabe: después de las comidas." },
        { options: ["Vitale", "bleue", "postale"], answer: 0, why: "La tarjeta sanitaria francesa: la carte Vitale." },
        { options: ["carte", "chèque", "nature"], answer: 0, why: "«Paye par»: en Francia lo cotidiano es pagar con tarjeta." },
        { options: ["continue", "arrête", "descend"], answer: 0, why: "La advertencia del farmacéutico: si la fiebre no para, volver al médico." },
      ],
    },
    {
      id: "cz-fr-a2-07-3", title: "Les conseils du docteur", titleEs: "Los consejos del doctor", minutes: 3,
      paragraphs: [
        { it: "Le docteur Girard reçoit beaucoup de patients en hiver. Sur son bureau, une affiche rappelle ses conseils : « En hiver, vous devez dormir au moins huit heures, manger des {1} et des fruits, et vous laver les {2} très souvent. Le virus adore les mains sales ! »", es: "El doctor Girard recibe a muchos pacientes en invierno. Sobre su escritorio, un cartel recuerda sus consejos: «En invierno deben dormir al menos ocho horas, comer verduras y frutas y lavarse las manos muy a menudo. ¡El virus adora las manos sucias!»" },
        { it: "L'affiche ajoute : « Si vous avez de la fièvre, vous ne devez pas aller au {3} : restez à la maison et reposez-vous. Si vous toussez beaucoup, portez un {4} en public pour protéger les autres. Et si les symptômes {5} plus de trois jours, appelez votre médecin traitant. »", es: "El cartel añade: «Si tienen fiebre, no deben ir a trabajar: quédense en casa y descansen. Si tosen mucho, lleven una mascarilla en público para proteger a los demás. Y si los síntomas duran más de tres días, llamen a su médico de cabecera»." },
      ],
      gaps: [
        { options: ["légumes", "bonbons", "chips"], answer: 0, why: "El consejo sano: verduras y frutas." },
        { options: ["mains", "pieds", "cheveux"], answer: 0, why: "«Le virus adore les mains sales»: lavarse las manos." },
        { options: ["travail", "cinéma", "marché"], answer: 0, why: "Con fiebre, lo prohibido es ir a trabajar: rester à la maison." },
        { options: ["masque", "chapeau", "manteau"], answer: 0, why: "Al toser en público, para proteger a los demás: una mascarilla." },
        { options: ["durent", "coûtent", "pèsent"], answer: 0, why: "«Plus de trois jours»: los síntomas que duran." },
      ],
    },
  ],

  "fr-cu-a2-08": [
    {
      id: "cz-fr-a2-08-1", title: "La quiche de Mamie Suzanne", titleEs: "La quiche de Mamie Suzanne", minutes: 3,
      paragraphs: [
        { it: "Samedi matin, dans la cuisine de Mamie Suzanne, tout le monde a un rôle. « Toi, tu vas préparer la {1} », dit-elle à son petit-fils. « D'abord, lave-toi les {2} ! Ensuite, verse la farine, le beurre et une pincée de sel dans le saladier. »", es: "El sábado por la mañana, en la cocina de Mamie Suzanne, cada uno tiene un papel. «Tú vas a preparar la masa», le dice a su nieto. «Primero, ¡lávate las manos! Después, echa la harina, la mantequilla y una pizca de sal en el bol»." },
        { it: "Pendant que le petit-fils mélange, Mamie prépare la garniture : des lardons, de la crème et trois œufs. « Maintenant, {3} la pâte dans le moule avec la fourchette ! » Puis elle ouvre le four : « On va cuire la quiche à 180 {4} pendant quarante minutes. » Une bonne odeur remplit bientôt la maison : le samedi, chez Mamie, on cuisine en {5}.", es: "Mientras el nieto mezcla, Mamie prepara el relleno: tocino, nata y tres huevos. «Ahora, ¡extiende la masa en el molde con el tenedor!». Luego abre el horno: «Vamos a hornear la quiche a 180 grados durante cuarenta minutos». Pronto un buen olor llena la casa: el sábado, en casa de Mamie, se cocina en familia." },
      ],
      gaps: [
        { options: ["pâte", "chambre", "table"], answer: 0, why: "Harina, mantequilla y sal: se prepara la masa, la pâte." },
        { options: ["mains", "pieds", "dents"], answer: 0, why: "Antes de cocinar, lo primero en francés: «Lave-toi les mains !»." },
        { options: ["étale", "jette", "mange"], answer: 0, why: "La masa se extiende en el molde: «étale la pâte dans le moule»." },
        { options: ["degrés", "kilos", "litres"], answer: 0, why: "El horno se regula en grados: à 180 degrés." },
        { options: ["famille", "silence", "retard"], answer: 0, why: "Cada uno con su papel y Mamie dirigiendo: se cocina en familia." },
      ],
    },
    {
      id: "cz-fr-a2-08-2", title: "Le cahier de recettes", titleEs: "El cuaderno de recetas", minutes: 2,
      paragraphs: [
        { it: "Mamie Suzanne écrit ses recettes dans un grand cahier. Voici la page de la quiche lorraine : « Prépare la pâte. Étale-la bien. Ajoute les lardons. N'oublie pas le {1} ! Bats trois œufs avec la crème. Verse tout sur la pâte. Enfin, mets le moule au {2} et attends. »", es: "Mamie Suzanne escribe sus recetas en un cuaderno grande. Esta es la página de la quiche lorraine: «Prepara la masa. Extiéndela bien. Añade el tocino. ¡No olvides la sal! Bate tres huevos con la nata. Échalo todo sobre la masa. Por último, mete el molde en el horno y espera»." },
        { it: "En bas de la page, une note : « Pour six personnes : 250 grammes de farine, 20 centilitres de crème, 200 grammes de lardons et une {3} de sel. Le secret d'une bonne quiche ? La pâte doit reposer une {4} avant la cuisson. Et pour la cuisson : jamais la porte du four {5}, sinon la quiche retombe ! »", es: "Al pie de la página, una nota: «Para seis personas: 250 gramos de harina, 20 centilitros de nata, 200 gramos de tocino y una pizca de sal. ¿El secreto de una buena quiche? La masa debe reposar una hora antes de hornear. Y para el horneado: ¡jamás abrir la puerta del horno, o la quiche se baja!»" },
      ],
      gaps: [
        { options: ["sel", "sucre", "poivre"], answer: 0, why: "«N'oublie pas le sel !» es la frase estrella de Mamie en el curso." },
        { options: ["four", "frigo", "placard"], answer: 0, why: "La quiche se hornea: el molde va al four." },
        { options: ["pincée", "bouteille", "cuillère"], answer: 0, why: "Cantidad clásica de sal: una pizca, une pincée de sel." },
        { options: ["heure", "semaine", "minute"], answer: 0, why: "Reposo razonable antes de cocinar: una hora." },
        { options: ["ouverte", "cassée", "propre"], answer: 0, why: "«Sinon la quiche retombe»: no abrir el horno, jamás la puerta abierta." },
      ],
    },
    {
      id: "cz-fr-a2-08-3", title: "Aux fourneaux avec Lucas", titleEs: "A los fogones con Lucas", minutes: 3,
      paragraphs: [
        { it: "Lucas, dix ans, prépare son premier gâteau au yaourt, tout seul. Il lit la recette à voix haute : « Verse le yaourt dans un saladier. Utilise le pot comme {1} : deux pots de farine, un pot de sucre, un demi-pot d'huile. Casse trois œufs et {2} le tout. »", es: "Lucas, diez años, prepara su primera tarta de yogur, solo. Lee la receta en voz alta: «Echa el yogur en un bol. Usa el vaso como medida: dos vasos de harina, un vaso de azúcar, medio vaso de aceite. Rompe tres huevos y mezcla todo»." },
        { it: "Lucas verse la pâte dans un moule et glisse le tout dans le four. Pendant la cuisson, il nettoie la {3} : sa mère sera fière. Quarante minutes plus tard, l'odeur du gâteau envahit la maison. « C'est {4} ! » crie-t-il. Sa petite sœur arrive en courant : « J'adore le gâteau au yaourt ! » Lucas coupe douze parts, et il reste à peine une {5} pour le dîner.", es: "Lucas vierte la masa en un molde y lo desliza en el horno. Durante el horneado, limpia la cocina: su madre estará orgullosa. Cuarenta minutos después, el olor a tarta invade la casa. «¡Está listo!», grita. Su hermana pequeña llega corriendo: «¡Me encanta la tarta de yogur!». Lucas corta doce porciones y apenas queda una para la cena." },
      ],
      gaps: [
        { options: ["mesure", "jouet", "chapeau"], answer: 0, why: "El truco del gâteau au yaourt: el vaso sirve de medida." },
        { options: ["mélange", "vends", "perds"], answer: 0, why: "«Le tout»: se mezcla todo, mélange le tout." },
        { options: ["cuisine", "voiture", "chambre"], answer: 0, why: "Después de cocinar se limpia la cocina, y su madre estará orgullosa." },
        { options: ["prêt", "raté", "brûlé"], answer: 0, why: "El grito del cocinero feliz: «C'est prêt !», nada de quemado ni fracasado." },
        { options: ["part", "pinte", "photo"], answer: 0, why: "Corta doce porciones y apenas queda una: une part." },
      ],
    },
  ],

  "fr-cu-a2-09": [
    {
      id: "cz-fr-a2-09-1", title: "L'entretien au Bistro du Port", titleEs: "La entrevista en el Bistro du Port", minutes: 3,
      paragraphs: [
        { it: "Monsieur Brun reçoit Natalia dans son petit bureau, au-dessus du restaurant. « Parlez-moi de vous. Vous avez déjà {1} ? » Natalia répond : « Oui, l'été dernier, j'ai travaillé dans un café à Valence, en Espagne, pendant deux mois. J'ai fait le service en {2} et à la terrasse, et j'ai aussi tenu la caisse. »", es: "Monsieur Brun recibe a Natalia en su pequeña oficina, encima del restaurante. «Hábleme de usted. ¿Ya ha trabajado?». Natalia responde: «Sí, el verano pasado trabajé en un café de Valencia, en España, durante dos meses. Hice el servicio en sala y en la terraza, y también me encargué de la caja»." },
        { it: "« Vous parlez français depuis combien de {3} ? » continue le patron. « Depuis trois ans : j'apprends le français à l'université et j'habite à Marseille depuis six {4} seulement. » « Parfait. Vous êtes disponible de juillet à fin août ? Le salaire, c'est le SMIC, plus les pourboires, et les {5} sont compris : le midi et le soir. » Natalia sourit : le job est à elle.", es: "«¿Desde hace cuánto tiempo habla francés?», continúa el patrón. «Desde hace tres años: aprendo francés en la universidad y vivo en Marsella desde hace apenas seis meses». «Perfecto. ¿Está disponible de julio a finales de agosto? El salario es el SMIC, más las propinas, y las comidas están incluidas: al mediodía y por la noche». Natalia sonríe: el trabajo es suyo." },
      ],
      gaps: [
        { options: ["travaillé", "voyagé", "mangé"], answer: 0, why: "La pregunta de entrevista por excelencia: «Vous avez déjà travaillé ?»." },
        { options: ["salle", "cuisine", "rue"], answer: 0, why: "El par del curso: «service en salle et à la terrasse»." },
        { options: ["temps", "euros", "kilos"], answer: 0, why: "«Depuis combien de temps»: desde hace cuánto tiempo." },
        { options: ["mois", "ans", "siècles"], answer: 0, why: "«Seulement» indica poco tiempo: seis meses viviendo allí." },
        { options: ["repas", "uniformes", "fins"], answer: 0, why: "«Le midi et le soir»: las comidas del personal están incluidas." },
      ],
    },
    {
      id: "cz-fr-a2-09-2", title: "Le premier service", titleEs: "El primer servicio", minutes: 3,
      paragraphs: [
        { it: "Premier jour de Natalia au Bistro du Port. À 11 heures, elle installe les {1} sur la terrasse : nappes, verres, menus. À midi, la salle se remplit. « Apportez-moi une {2} d'eau ! » crie un client pressé. Natalia court, sourit, note les commandes sur son carnet.", es: "Primer día de Natalia en el Bistro du Port. A las 11 monta las mesas de la terraza: manteles, vasos, cartas. Al mediodía la sala se llena. «¡Tráigame una jarra de agua!», grita un cliente con prisa. Natalia corre, sonríe, apunta los pedidos en su libreta." },
        { it: "L'après-midi passe vite. À 15 heures, la terrasse se vide et Natalia peut enfin manger : les {3} du personnel sont simples mais bons. Le soir, Monsieur Brun la félicite : « Vous avez bien {4} la journée ! » À minuit, elle ferme la {5} et rentre, fatiguée mais contente : le port de Marseille brille sous les lampadaires.", es: "La tarde pasa rápido. A las 15 la terraza se vacía y Natalia por fin puede comer: las comidas del personal son sencillas pero buenas. Por la noche, Monsieur Brun la felicita: «¡Ha aguantado bien la jornada!». A medianoche cierra la caja y vuelve a casa, cansada pero contenta: el puerto de Marsella brilla bajo las farolas." },
      ],
      gaps: [
        { options: ["tables", "chaises", "lampes"], answer: 0, why: "Manteles, vasos y cartas: se montan las mesas de la terraza." },
        { options: ["carafe", "bicyclette", "couverture"], answer: 0, why: "Agua para la mesa: une carafe d'eau, la jarra." },
        { options: ["repas", "valises", "vacances"], answer: 0, why: "El personal come después del servicio: los repas du personnel." },
        { options: ["tenu", "oublié", "quitté"], answer: 0, why: "Aguantar toda la jornada: «vous avez bien tenu la journée»." },
        { options: ["caisse", "porte", "banque"], answer: 0, why: "Al cerrar el restaurante, la camarera cierra la caja." },
      ],
    },
    {
      id: "cz-fr-a2-09-3", title: "Un job d'été à Deauville", titleEs: "Un trabajo de verano en Deauville", minutes: 2,
      paragraphs: [
        { it: "Chaque été, les plages de Normandie cherchent des jeunes pour la saison. Voici une offre typique : « Nous cherchons des {1} de plage pour juillet et août. Vous installerez les parasols, vous accueillerez les {2} et vous surveillerez les transats. »", es: "Cada verano, las playas de Normandía buscan jóvenes para la temporada. Esta es una oferta típica: «Buscamos empleados de playa para julio y agosto. Instalarán las sombrillas, recibirán a los clientes y vigilarán las tumbonas»." },
        { it: "« Qualités nécessaires : le sourire, la {3} et le sens du service. Expérience souhaitée mais non obligatoire. Salaire : le SMIC, plus une prime de fin de saison. Les candidats peuvent envoyer leur CV par {4} avant le 15 juin. Début de la saison : le 1er {5}, à Deauville, face à la mer. »", es: "«Cualidades necesarias: la sonrisa, la resistencia y el sentido del servicio. Experiencia deseable pero no obligatoria. Salario: el SMIC, más una prima de fin de temporada. Los candidatos pueden enviar su CV por correo electrónico antes del 15 de junio. Inicio de la temporada: el 1 de julio, en Deauville, frente al mar»." },
      ],
      gaps: [
        { options: ["employés", "professeurs", "médecins"], answer: 0, why: "Sombrillas y tumbonas: empleados de playa." },
        { options: ["clients", "requins", "voitures"], answer: 0, why: "A quien se recibe en una playa-club es a los clientes." },
        { options: ["résistance", "voiture", "cuisine"], answer: 0, why: "Para un puesto físico al sol: la resistencia." },
        { options: ["courriel", "colis", "fax"], answer: 0, why: "Hoy un CV se envía por correo electrónico." },
        { options: ["juillet", "janvier", "décembre"], answer: 0, why: "La temporada de playa empieza el 1 de julio." },
      ],
    },
  ],

  "fr-cu-a2-10": [
    {
      id: "cz-fr-a2-10-1", title: "La maison de Cassis", titleEs: "La casa de Cassis", minutes: 3,
      paragraphs: [
        { it: "Vendredi soir, Paul et Chloé appellent leurs amis en visio. « Alors, vous avez décidé ? Vous viendrez à Cassis en août ? — Oui ! On sera là du 1er au 15. Vous logerez où ? — Nous avons loué une petite maison avec vue sur les {1}. Il y aura de la place pour tout le monde : quatre chambres et un grand {2}. »", es: "El viernes por la noche, Paul y Chloé llaman a sus amigos por videollamada. «Y bien, ¿os habéis decidido? ¿Vendréis a Cassis en agosto? — ¡Sí! Estaremos del 1 al 15. ¿Dónde os alojaréis? — Hemos alquilado una casita con vistas a las calanques. Habrá sitio para todos: cuatro dormitorios y un gran salón»." },
        { it: "« Et il fera beau, tu crois ? — Bien sûr ! En août, il fera très {3} : 30 degrés à l'ombre. Le matin, nous irons à la plage avant la foule, et l'après-midi, le mistral {4} : il rafraîchira l'air. Nous prendrons le petit bateau pour visiter les calanques en {5}, et le soir, nous mangerons des glaces sur le port. Vous verrez : ce sera parfait ! »", es: "«¿Y hará buen tiempo, crees? — ¡Claro! En agosto hará mucho calor: 30 grados a la sombra. Por la mañana iremos a la playa antes de la gente y por la tarde soplará el mistral: refrescará el aire. Tomaremos el barquito para visitar las calanques en barco y por la noche comeremos helados en el puerto. ¡Ya veréis: será perfecto!»" },
      ],
      gaps: [
        { options: ["calanques", "usines", "gares"], answer: 0, why: "El paisaje famoso de Cassis: las calanques." },
        { options: ["salon", "ascenseur", "bureau"], answer: 0, why: "Con cuatro dormitorios y sitio para todos: un gran salón." },
        { options: ["chaud", "froid", "vent"], answer: 0, why: "«30 degrés à l'ombre»: hará mucho calor." },
        { options: ["soufflera", "pleuvra", "neigera"], answer: 0, why: "El mistral es viento: soplará y refrescará el aire." },
        { options: ["bateau", "voiture", "train"], answer: 0, why: "Las calanques se visitan en barco: el petit bateau." },
      ],
    },
    {
      id: "cz-fr-a2-10-2", title: "La météo d'août", titleEs: "El tiempo de agosto", minutes: 2,
      paragraphs: [
        { it: "Voici la météo de la semaine prochaine pour la Provence. Lundi, il fera très chaud, avec 32 degrés à l'ombre. Mardi, le {1} soufflera fort l'après-midi : attention aux chapeaux sur le port ! Mercredi, un petit {2} passera le matin sur la mer, puis le soleil reviendra.", es: "Este es el tiempo de la semana que viene para la Provenza. El lunes hará mucho calor, con 32 grados a la sombra. El martes el mistral soplará fuerte por la tarde: ¡cuidado con los sombreros en el puerto! El miércoles una pequeña nube pasará por la mañana sobre el mar y luego volverá el sol." },
        { it: "Jeudi et vendredi, il fera {3} partout : parfait pour les randonnées dans les calanques. Samedi, la {4} montera en fin de journée : prévoyez un pull pour l'apéro sur le port. Dimanche, il y aura du {5} le matin sur la mer, mais il se lèvera vers 10 heures. Bref : une semaine parfaite pour des vacances au bord de l'eau.", es: "El jueves y el viernes hará buen tiempo en todas partes: perfecto para las rutas por las calanques. El sábado la brisa subirá al final del día: prevean una chaqueta para el aperitivo en el puerto. El domingo habrá niebla por la mañana sobre el mar, pero se levantará hacia las 10. En fin: una semana perfecta para unas vacaciones junto al agua." },
      ],
      gaps: [
        { options: ["mistral", "monstre", "moteur"], answer: 0, why: "El viento de Provenza que se lleva los sombreros: el mistral." },
        { options: ["nuage", "brouillard", "voilier"], answer: 0, why: "«Puis le soleil reviendra»: era solo una nube pasajera." },
        { options: ["beau", "gris", "moche"], answer: 0, why: "«Parfait pour les randonnées»: hará buen tiempo." },
        { options: ["brise", "marée", "fête"], answer: 0, why: "El aire que sube al atardecer y obliga a una chaqueta: la brisa." },
        { options: ["brouillard", "monde", "bruit"], answer: 0, why: "Se levanta hacia las 10 sobre el mar: la niebla matinal." },
      ],
    },
    {
      id: "cz-fr-a2-10-3", title: "Une journée dans les calanques", titleEs: "Un día en las calanques", minutes: 3,
      paragraphs: [
        { it: "Dimanche, le groupe se lèvera très tôt pour éviter la foule et la chaleur. À 8 heures, ils prendront le {1} des calanques, avec de bonnes chaussures et deux litres d'eau par personne. Marcher sous le soleil de Provence, ce n'est pas un jeu : les {2} monteront vite.", es: "El domingo el grupo se levantará muy temprano para evitar la gente y el calor. A las 8 tomarán el sendero de las calanques, con buen calzado y dos litros de agua por persona. Caminar bajo el sol de Provenza no es un juego: las temperaturas subirán rápido." },
        { it: "Après deux heures de marche, ils verront enfin l'eau turquoise d'en bas. Certains nageront, d'autres {3} sur les rochers plats au soleil. À midi, ils pique-niqueront à l'ombre des {4} : pain, fromage de chèvre et pastèque. Le retour sera plus difficile, mais tout le monde gardera une image : la mer vue d'en haut, la plus {5} de la région.", es: "Después de dos horas de caminata verán por fin el agua turquesa allá abajo. Algunos nadarán, otros se tenderán sobre las rocas planas al sol. Al mediodía harán un pícnic a la sombra de los pinos: pan, queso de cabra y sandía. La vuelta será más dura, pero todos guardarán una imagen: el mar visto desde arriba, el más bonito de la región." },
      ],
      gaps: [
        { options: ["sentier", "métro", "train"], answer: 0, why: "Con buenas zapatillas y agua: el sendero, le sentier des calanques." },
        { options: ["températures", "vagues", "prix"], answer: 0, why: "Bajo el sol de Provenza: las temperaturas subirán rápido." },
        { options: ["bronzeront", "nageront", "rentreront"], answer: 0, why: "«Certains nageront, d'autres»: los demás se tenderán al sol, bronzeront." },
        { options: ["pins", "lampadaires", "murs"], answer: 0, why: "A la sombra de los pinos: los árboles de las calanques." },
        { options: ["belle", "loin", "cher"], answer: 0, why: "La imagen del mar desde arriba: «la plus belle de la région», el superlativo estrella." },
      ],
    },
  ],

  "fr-cu-a2-11": [
    {
      id: "cz-fr-a2-11-1", title: "Un service entre voisins", titleEs: "Un favor entre vecinos", minutes: 3,
      paragraphs: [
        { it: "Vendredi, monsieur Weber croise son voisin dans l'escalier. « Bonjour, monsieur Klein ! Vous partez ce week-end ? — Oui, à Colmar. Je peux vous demander un {1} ? — Bien sûr, je vous écoute ! — Pourriez-vous {2} mes plantes et relever mon courrier ? Je vous laisse la clé. »", es: "El viernes, el señor Weber se cruza con su vecino en la escalera. «¡Buenos días, señor Klein! ¿Se va este fin de semana? — Sí, a Colmar. ¿Puedo pedirle un favor? — ¡Claro, le escucho! — ¿Podría regar mis plantas y recogerme el correo? Le dejo la llave»." },
        { it: "« Pas de problème ! Donnez-moi la {3} : j'arroserai samedi matin et je relèverai le {4} chaque jour. — Merci infiniment, monsieur Weber ! — Je vous en prie, c'est {5} entre voisins ! Et ramenez-moi un bon kouglof de Colmar ! »", es: "«¡Sin problema! Deme la llave: regaré el sábado por la mañana y recogeré el correo cada día. — ¡Muchísimas gracias, señor Weber! — De nada, ¡es normal entre vecinos! ¡Y tráigame un buen kouglof de Colmar!»" },
      ],
      gaps: [
        { options: ["service", "bagage", "cadeau"], answer: 0, why: "Pedir un favor: «je peux vous demander un service ?»." },
        { options: ["arroser", "couper", "manger"], answer: 0, why: "Lo que se hace con las plantas de un ausente: regarlas." },
        { options: ["clé", "plante", "voiture"], answer: 0, why: "Para regar las plantas de un piso cerrado: la llave." },
        { options: ["courrier", "journal", "parapluie"], answer: 0, why: "Lo que se recoge cada día cuando alguien viaja: el correo." },
        { options: ["normal", "impossible", "interdit"], answer: 0, why: "La respuesta modesta del curso: «c'est normal entre voisins !»." },
      ],
    },
    {
      id: "cz-fr-a2-11-2", title: "La clé et les plantes", titleEs: "La llave y las plantas", minutes: 2,
      paragraphs: [
        { it: "Samedi matin, monsieur Weber monte chez son voisin avec la clé. Dans l'appartement, il y a douze {1} : des tomates sur le balcon, des herbes aromatiques dans la {2} et trois fougères dans le salon. « Cet homme a une vraie jungle ! » pense-t-il en arrosant tout.", es: "El sábado por la mañana, el señor Weber sube a casa de su vecino con la llave. En el piso hay doce plantas: tomates en el balcón, hierbas aromáticas en la cocina y tres helechos en el salón. «¡Este hombre tiene una auténtica jungla!», piensa mientras lo riega todo." },
        { it: "Il relève ensuite le courrier : deux {3}, un magazine et un petit colis. Il pose tout sur la table, ferme la porte et redescend chez lui. Le dimanche soir, monsieur Klein sonne à sa porte : « Alors, tout s'est bien {4} ? — Parfait ! J'ai arrosé, j'ai relevé le courrier, et vos tomates sont magnifiques. — Merci infiniment ! Tenez, le kouglof {5} ! »", es: "Luego recoge el correo: dos cartas, una revista y un paquetito. Lo deja todo sobre la mesa, cierra la puerta y baja a su casa. El domingo por la noche, el señor Klein llama a su puerta: «¿Y bien, todo fue bien? — ¡Perfecto! Regué, recogí el correo y sus tomates están magníficos. — ¡Muchísimas gracias! ¡Tenga, el kouglof prometido!»" },
      ],
      gaps: [
        { options: ["plantes", "animaux", "valises"], answer: 0, why: "Tomates, hierbas y helechos: doce plantas." },
        { options: ["cuisine", "rue", "valise"], answer: 0, why: "Las hierbas aromáticas viven en la cocina, a mano para cocinar." },
        { options: ["lettres", "pneus", "chiens"], answer: 0, why: "En el correo del ausente: dos cartas, una revista y un paquete." },
        { options: ["passé", "levé", "arrosé"], answer: 0, why: "La pregunta del reencuentro: «tout s'est bien passé ?»." },
        { options: ["promis", "perdu", "acheté"], answer: 0, why: "El regalo de agradecimiento anunciado: el kouglof prometido." },
      ],
    },
    {
      id: "cz-fr-a2-11-3", title: "Week-end à Colmar", titleEs: "Fin de semana en Colmar", minutes: 3,
      paragraphs: [
        { it: "Le samedi, à Colmar, le marché coloré borde le canal. Devant un stand de fromages, un homme demande à sa femme : « Tu peux me {1} le panier ? » Elle le lui tend en souriant. Ils achètent du munster, du pain et des mirabelles, puis ils s'assoient au bord de l'{2} pour regarder les barques.", es: "El sábado, en Colmar, el mercado colorido bordea el canal. Delante de un puesto de quesos, un hombre le pide a su mujer: «¿Puedes pasarme la cesta?». Ella se la da sonriendo. Compran munster, pan y mirabeles, y luego se sientan junto al agua para mirar las barcas." },
        { it: "Dans la rue, un touriste cherche son chemin : « Excusez-moi de vous {3}, pourriez-vous m'indiquer la Petite Venise ? — Mais c'est ici ! Vous y êtes ! » Le couple rit et lui {4} un plan de la ville. Le touriste les remercie et part vers les maisons à colombages. Hier, des voisins se sont rendu un {5} ; aujourd'hui, ils aident un inconnu : à Colmar, la politesse circule comme l'eau du canal.", es: "En la calle, un turista busca su camino: «Perdonen que las moleste, ¿podrían indicarme la Petite Venise? — ¡Pero si está aquí! ¡Ya está usted en ella!». La pareja ríe y le da un plano de la ciudad. El turista les da las gracias y se va hacia las casas de entramado. Ayer unos vecinos se hicieron un favor; hoy ayudan a un desconocido: en Colmar la cortesía circula como el agua del canal." },
      ],
      gaps: [
        { options: ["passer", "acheter", "cacher"], answer: 0, why: "La cesta que se pide en el mercado: «passe-moi le panier»." },
        { options: ["eau", "air", "heure"], answer: 0, why: "Junto al canal se miran las barcas: au bord de l'eau." },
        { options: ["déranger", "téléphoner", "écrire"], answer: 0, why: "«Excusez-moi de vous déranger»: la fórmula para abordar a alguien." },
        { options: ["tend", "vend", "cache"], answer: 0, why: "Para orientar al turista: le tienden un plano de la ciudad." },
        { options: ["service", "chèque", "cadeau"], answer: 0, why: "El vecino regó sus plantas: se hicieron un servicio, un favor." },
      ],
    },
  ],

  "fr-cu-a2-12": [
    {
      id: "cz-fr-a2-12-1", title: "Gare de Lyon, 10 h 07", titleEs: "Estación de Lyon, 10:07", minutes: 3,
      paragraphs: [
        { it: "Samedi, 9 heures 45, gare de Lyon. Le voyageur regarde le tableau des {1} : le TGV pour Marseille part à 10 h 07, voie 9. Il achète un café, puis il valide son {2}. Sur le quai, un agent annonce : « Le train est à l'heure. Première voiture, en tête du train ! »", es: "Sábado, 9:45, estación de Lyon. El viajero mira el tablero de salidas: el TGV hacia Marsella sale a las 10:07, vía 9. Compra un café y luego valida su billete. En el andén, un agente anuncia: «El tren está puntual. ¡Primer vagón, en cabeza del tren!»" },
        { it: "À 10 h 07 précises, le train {3} doucement. Paris disparaît peu à peu derrière les immeubles, puis la campagne arrive : champs, rivières, villages. Le contrôleur passe : « Votre billet, s'il vous plaît. Tout est en ordre. Le trajet durera trois {4} : arrivée à 13 heures 07. » Le voyageur s'installe, ferme les yeux et pense déjà au {5} de Marseille.", es: "A las 10:07 en punto, el tren arranca suavemente. París desaparece poco a poco tras los edificios y luego llega el campo: cultivos, ríos, pueblos. El revisor pasa: «Su billete, por favor. Todo está en orden. El trayecto durará tres horas: llegada a las 13:07». El viajero se acomoda, cierra los ojos y piensa ya en el Vieux-Port de Marsella." },
      ],
      gaps: [
        { options: ["départs", "prix", "menus"], answer: 0, why: "En una estación, el tablero que mira quien va a viajar: las salidas." },
        { options: ["billet", "chien", "casque"], answer: 0, why: "Antes de subir al tren francés: validar el billete." },
        { options: ["démarre", "dort", "freine"], answer: 0, why: "A la hora exacta, el tren arranca: démarre." },
        { options: ["heures", "minutes", "jours"], answer: 0, why: "De 10:07 a 13:07: tres horas de trayecto." },
        { options: ["Vieux-Port", "Louvre", "Mont-Blanc"], answer: 0, why: "El destino clásico de Marsella: el Vieux-Port." },
      ],
    },
    {
      id: "cz-fr-a2-12-2", title: "Le voisin bavard", titleEs: "El vecino charlatán", minutes: 2,
      paragraphs: [
        { it: "À Valence, un monsieur d'une soixantaine d'années s'assoit à côté du voyageur. « Vous allez à Marseille ? Moi, j'y vais voir ma {1}. » Et la conversation commence : le mistral, la bouillabaisse, les matchs de l'OM. Le voyageur apprend que son voisin était {2} dans la marine, il y a trente ans.", es: "En Valence, un señor de unos sesenta años se sienta junto al viajero. «¿Va a Marsella? Yo voy a ver a mi hija». Y la conversación arranca: el mistral, la bouillabaisse, los partidos del OM. El viajero aprende que su vecino fue cocinero en la marina hace treinta años." },
        { it: "« D'abord, visitez le vieux {3} du Panier, avec ses rues en couleurs. Ensuite, goûtez la {4} chez Michel, le meilleur restaurant du port. Et enfin, montez à Notre-Dame de la Garde : vous aurez la plus belle {5} de la ville, croyez-moi ! » Le voyageur note tout dans son carnet. Quel chanceux : un guide gratuit tombé du ciel.", es: "«Primero visite el viejo barrio del Panier, con sus calles de colores. Después pruebe la bouillabaisse chez Michel, el mejor restaurante del puerto. ¡Y por último suba a Notre-Dame de la Garde: tendrá la vista más bonita de la ciudad, créame!». El viajero lo apunta todo en su libreta. Qué suerte: una guía gratuita caída del cielo." },
      ],
      gaps: [
        { options: ["fille", "voiture", "ferme"], answer: 0, why: "A quien se va a ver en Marsella, alguien de la familia: su hija." },
        { options: ["cuisinier", "danseur", "président"], answer: 0, why: "La bouillabaisse le delata: fue cocinero, en la marina." },
        { options: ["quartier", "aéroport", "stade"], answer: 0, why: "El Panier es el barrio viejo de Marsella: «le vieux quartier du Panier»." },
        { options: ["bouillabaisse", "paella", "cassoulet"], answer: 0, why: "El plato típico de Marsella mencionado en la charla: la bouillabaisse." },
        { options: ["vue", "voiture", "voix"], answer: 0, why: "Desde la colina de la Garde: la vista más bonita de la ciudad." },
      ],
    },
    {
      id: "cz-fr-a2-12-3", title: "Bienvenue au Vieux-Port", titleEs: "Bienvenido al Vieux-Port", minutes: 3,
      paragraphs: [
        { it: "13 heures 07, gare Saint-Charles. Le voyageur suit les {1} du métro et prend la ligne 1. Deux stations plus loin, il descend à Vieux-Port. Dehors, le soleil tape, les mouettes crient et l'odeur de la mer flotte dans l'air. Il s'assoit sur les marches du {2} et regarde les barques.", es: "13:07, estación Saint-Charles. El viajero sigue las indicaciones del metro y toma la línea 1. Dos paradas más allá baja en Vieux-Port. Fuera, el sol aprieta, las gaviotas gritan y el olor al mar flota en el aire. Se sienta en los escalones del puerto y mira las barcas." },
        { it: "Autour de lui, la ville s'anime : des joueurs de {3} sous les platanes, des marchands de glaces, des pêcheurs qui vendent leur poisson du jour. Un serveur passe : « Vous voulez quelque chose ? — Oui, une {4} bien fraîche, s'il vous plaît ! » Le voyageur pense : « C'est la plus belle {5} de ma vie. » Et son week-end marseillais ne fait que commencer.", es: "A su alrededor la ciudad se anima: jugadores de petanca bajo los plátanos, vendedores de helados, pescadores que venden su pescado del día. Pasa un camarero: «¿Quiere algo? — Sí, ¡una limonada bien fresca, por favor!». El viajero piensa: «Es el día más bonito de mi vida». Y su fin de semana marsellés acaba de empezar." },
      ],
      gaps: [
        { options: ["indications", "bagages", "passagers"], answer: 0, why: "Para encontrar el métro en una estación: seguir las indicaciones." },
        { options: ["port", "train", "musée"], answer: 0, why: "En Vieux-Port, uno se sienta en las escalinatas del puerto y mira las barcas." },
        { options: ["pétanque", "tennis", "échecs"], answer: 0, why: "El juego de los marselleses bajo los plátanos del Vieux-Port: la petanca." },
        { options: ["citronnade", "soupe", "tartine"], answer: 0, why: "Con el sol apretando: una limonada bien fresca, clásico provenzal." },
        { options: ["journée", "nuit", "semaine"], answer: 0, why: "Acaba de llegar y ya piensa que es el día más bonito de su vida." },
      ],
    },
  ],
};
