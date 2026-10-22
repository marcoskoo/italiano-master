/* ── FR · Notizie B1 — lote b (v9.39) ─────────────────────────────────
   Actualités en français de France, niveau B1 (suite) : 12 items,
   ids fr-news-b1-04 … fr-news-b1-15. Méthode VOA Learning English :
   corps de 4 paragraphes ≈ 160-220 mots, imparfait contre passé composé,
   pronoms « y » et « en », minutes 3. Champs `.it` = français (langue
   étudiée), `.es` = espagnol. Avec news-b.ts, le niveau B1 couvre
   les 9 catégories. */

import type { NewsItem } from "../../news";

export const FR_NEWS_B1B: NewsItem[] = [

  /* ═══ B1 · 4 — Sciences · Brest ═══ */
  {
    id: "fr-news-b1-04", cat: "scienza", level: "B1", place: "Brest", minutes: 3,
    title: "Les coraux froids au large de Brest intriguent les scientifiques",
    titleEs: "Los corales de agua fría frente a Brest intrigan a los científicos",
    lead: {
      it: "Pendant des décennies, les pêcheurs de la mer d'Iroise ont évité une zone mystérieuse au large de Brest. Des chercheurs bretons y ont enfin envoyé un robot : le « jardin de pierres » cachait des coraux froids vieux de plusieurs siècles.",
      es: "Durante décadas, los pescadores del mar de Iroise evitaron una zona misteriosa frente a Brest. Unos investigadores bretones enviaron por fin un robot: el «jardín de piedras» escondía corales de agua fría con varios siglos de antigüedad.",
    },
    paragraphs: [
      { it: "Au large de Brest, la mer d'Iroise garde depuis toujours ses secrets. Il y a cinquante ans déjà, les pêcheurs redoutaient « le jardin de pierres », une zone où leurs filets se déchiraient sans raison. Ils en connaissaient la position exacte, mais personne ne savait ce qui y vivait au fond.",
      es: "Frente a Brest, el mar de Iroise guarda desde siempre sus secretos. Ya hace cincuenta años, los pescadores temían «el jardín de piedras», una zona donde sus redes se desgarraban sin motivo. Conocían su posición exacta, pero nadie sabía qué vivía allí en el fondo." },
      { it: "Pendant trois étés, une équipe de l'université de Bretagne occidentale a envoyé un robot sous-marin sur place. L'appareil a filmé des coraux blancs et orange sur des centaines d'hectares. Les chercheurs en ont compté plus de trente espèces, dont certaines encore inconnues.",
      es: "Durante tres veranos, un equipo de la universidad de Bretaña Occidental envió un robot submarino al lugar. El aparato filmó corales blancos y naranjas sobre cientos de hectáreas. Los investigadores contaron más de treinta especies, algunas todavía desconocidas." },
      { it: "« On pensait que ces jardins avaient disparu, explique la biologiste Anne Le Goff. En réalité, ils dormaient sous les courants. Il nous en reste beaucoup à explorer, et chaque plongée apporte sa surprise. »",
      es: "«Creíamos que esos jardines habían desaparecido», explica la bióloga Anne Le Goff. «En realidad, dormían bajo las corrientes. Nos queda mucho por explorar, y cada inmersión trae su sorpresa.»" },
      { it: "La région veut maintenant classer le site pour l'éloigner des chaluts. Car ces coraux grandissent d'un millimètre par an : les bancs les plus vieux ont donc des siècles. Les plongeurs y viendront un jour, mais seulement avec des caméras, jamais avec des mains.",
      es: "La región quiere ahora proteger el sitio para alejarlo de las redes de arrastre. Porque estos corales crecen un milímetro al año: los bancos más viejos tienen, pues, siglos. Los buzos irán algún día, pero solo con cámaras, nunca con las manos." },
    ],
    words: [
      { it: "le pêcheur / les pêcheurs", es: "el pescador / los pescadores" },
      { it: "se déchirer", es: "desgarrarse, romperse" },
      { it: "un robot sous-marin", es: "un robot submarino" },
      { it: "les espèces", es: "las especies" },
      { it: "le chalut / les chaluts", es: "la red de arrastre", note: "de aquí «chalutier», el barco de arrastre" },
      { it: "un millimètre", es: "un milímetro" },
    ],
    questions: [
      { q: "¿Por qué los pescadores temían la zona del «jardín de piedras»?", options: ["Parce que leurs filets s'y déchiraient sans raison", "Parce que des requins y vivaient", "Parce que la zone était interdite", "Parce qu'il n'y avait pas de poissons"], answer: 0, why: "«une zone où leurs filets se déchiraient sans raison»" },
      { q: "¿Cuántas especies han contado los investigadores?", options: ["Moins de dix espèces", "Plus de trente espèces", "Exactement cent espèces", "Aucune espèce"], answer: 1, why: "«Les chercheurs en ont compté plus de trente espèces»" },
      { q: "¿Qué pensaban los científicos antes de la exploración?", options: ["Que les coraux étaient comestibles", "Que la zone était une base militaire", "Que ces jardins avaient disparu", "Que les pêcheurs inventaient des histoires"], answer: 2, why: "«On pensait que ces jardins avaient disparu»" },
      { q: "¿Por qué los buzos solo podrán ir con cámaras?", options: ["Parce que les caméras sont obligatoires en Bretagne", "Parce que l'eau est trop chaude", "Parce que les pêcheurs l'interdisent", "Parce que ces coraux grandissent d'un millimètre par an et restent très fragiles"], answer: 3, why: "«ces coraux grandissent d'un millimètre par an»" },
    ],
    discuss: [
      { it: "Faut-il ouvrir de tels sites aux plongeurs ou les garder secrets ? Pourquoi ?", es: "¿Hay que abrir sitios así a los buzos o mantenerlos en secreto? ¿Por qué?" },
      { it: "Votre région garde-t-elle un secret que la science devrait explorer ?", es: "¿Guarda tu región algún secreto que la ciencia debería explorar?" },
    ],
  },

  /* ═══ B1 · 5 — Culture · Lyon ═══ */
  {
    id: "fr-news-b1-05", cat: "cultura", level: "B1", place: "Lyon", minutes: 3,
    title: "À Lyon, les traboules secrètes racontent la ville de la soie",
    titleEs: "En Lyon, las secretas traboules cuentan la ciudad de la seda",
    lead: {
      it: "Derrière les portes du vieux Lyon se cache un labyrinthe : les traboules, des couloirs qui traversent les immeubles d'une rue à l'autre. Nées avec les ouvriers de la soie, elles redeviennent la fierté de la ville.",
      es: "Detrás de las puertas del Lyon viejo se esconde un laberinto: las traboules, pasillos que cruzan los inmuebles de una calle a otra. Nacidas con los obreros de la seda, vuelven a ser el orgullo de la ciudad.",
    },
    paragraphs: [
      { it: "Dans les quartiers anciens de Lyon, les touristes photographient les façades. Mais derrière ces murs, la ville cache un réseau unique en France : les traboules, des couloirs qui relient une rue à une autre à travers les immeubles. Il y en a encore environ quatre cents.",
      es: "En los barrios antiguos de Lyon, los turistas fotografían las fachadas. Pero detrás de esos muros, la ciudad esconde una red única en Francia: las traboules, pasillos que unen una calle con otra a través de los inmuebles. Todavía quedan unos cuatrocientos." },
      { it: "Au dix-neuvième siècle, les ouvriers de la soie, les canuts, y transportaient leurs étoffes lourdes d'un quartier à l'autre, sans sortir sous la pluie. La soie faisait alors vivre la moitié de la ville, et les passages permettaient tout : livrer, fuir, se rencontrer.",
      es: "En el siglo XIX, los obreros de la seda, los canuts, transportaban allí sus pesadas telas de un barrio a otro sin salir bajo la lluvia. La seda daba entonces de comer a media ciudad, y los pasajes lo permitían todo: repartir, huir, encontrarse." },
      { it: "L'an dernier, la municipalité et une association d'habitants en ont ouvert une quarantaine au public, avec des visites gratuites le week-end. « Chaque traboule a son caractère, explique un guide, Marc Charrier. Certaines ont servi de cachettes ; d'autres gardent des fresques oubliées depuis cent ans. »",
      es: "El año pasado, el ayuntamiento y una asociación de vecinos abrieron al público una cuarentena, con visitas gratuitas el fin de semana. «Cada traboule tiene su carácter», explica un guía, Marc Charrier. «Algunas sirvieron de escondite; otras guardan frescos olvidados desde hace cien años.»" },
      { it: "Les Lyonnais en sont fiers, mais le réseau se referme lentement : quand un immeuble change de propriétaire, la porte se verrouille souvent. L'association espère pourtant en sauver une centaine avant dix ans. La soie a quitté les murs ; les passages, eux, sont toujours là.",
      es: "Los lioneses se enorgullecen de ellas, pero la red se cierra lentamente: cuando un inmueble cambia de propietario, la puerta suele quedar cerrada con llave. La asociación espera aun así salvar un centenar antes de diez años. La seda dejó los muros; los pasajes siguen ahí." },
    ],
    words: [
      { it: "une traboule / les traboules", es: "una traboule (pasaje cubierto típico de Lyon)" },
      { it: "la soie", es: "la seda" },
      { it: "un ouvrier / les ouvriers", es: "un obrero / los obreros" },
      { it: "une étoffe / les étoffes", es: "una tela / las telas" },
      { it: "une cachette / des cachettes", es: "un escondite / escondites" },
      { it: "un propriétaire", es: "un propietario" },
    ],
    questions: [
      { q: "¿Qué son exactamente las traboules?", options: ["Des couloirs qui relient une rue à une autre à travers les immeubles", "Des caves où l'on stockait le vin", "Des canaux souterrains", "Des escaliers de service des hôtels"], answer: 0, why: "«des couloirs qui relient une rue à une autre à travers les immeubles»" },
      { q: "¿Para qué usaban los canuts las traboules?", options: ["Pour vendre du poisson", "Pour transporter leurs étoffes sans sortir sous la pluie", "Pour fuir la police", "Pour ranger les machines"], answer: 1, why: "«y transportaient leurs étoffes lourdes d'un quartier à l'autre, sans sortir sous la pluie»" },
      { q: "¿Cuántas traboules se abrieron al público el año pasado?", options: ["Une dizaine", "Quatre cents", "Une quarantaine", "Cent cinquante"], answer: 2, why: "«en ont ouvert une quarantaine au public»" },
      { q: "¿Qué problema amenaza hoy la red de pasajes?", options: ["Les touristes les détruisent", "La municipalité veut les vendre", "La soie a disparu des ateliers", "Quand un immeuble change de propriétaire, la porte se verrouille souvent"], answer: 3, why: "«quand un immeuble change de propriétaire, la porte se verrouille souvent»" },
    ],
    discuss: [
      { it: "Ville de soie, ville de passages : que racontent les rues de votre ville sur son ancien métier ?", es: "Ciudad de la seda, ciudad de pasajes: ¿qué cuentan las calles de tu ciudad sobre su antiguo oficio?" },
      { it: "Faut-il obliger les propriétaires à garder ouvertes les traboules ? Que gagnerait la ville ?", es: "¿Hay que obligar a los propietarios a mantener abiertas las traboules? ¿Qué ganaría la ciudad?" },
    ],
  },

  /* ═══ B1 · 6 — Histoire · Nîmes ═══ */
  {
    id: "fr-news-b1-06", cat: "storia", level: "B1", place: "Nîmes", minutes: 3,
    title: "Nîmes restaure sa Maison Carrée, temple romain de deux mille ans",
    titleEs: "Nimes restaura su Maison Carrée, templo romano de dos mil años",
    lead: {
      it: "La Maison Carrée de Nîmes inspire les architectes depuis deux mille ans. Cette année, la ville a rendu au temple sa blancheur d'origine — et une surprise rouge dormait sous la pierre.",
      es: "La Maison Carrée de Nimes inspira a los arquitectos desde hace dos mil años. Este año, la ciudad devolvió al templo su blancura original — y una sorpresa roja dormía bajo la piedra.",
    },
    paragraphs: [
      { it: "Au cœur de Nîmes, la Maison Carrée attire les visiteurs depuis l'époque romaine. Bâti au premier siècle, ce temple était le plus élégant de la Gaule. Chaque été, des guides en racontent la légende aux groupes du monde entier. Vingt siècles ont passé sur ses colonnes ; il a survécu presque sans dommage.",
      es: "En el corazón de Nimes, la Maison Carrée atrae visitantes desde la época romana. Construido en el siglo I, este templo era el más elegante de la Galia. Cada verano, unos guías cuentan su leyenda a grupos de todo el mundo. Veinte siglos pasaron sobre sus columnas; sobrevivió casi sin daño." },
      { it: "Pendant des décennies, les restaurateurs hésitaient : fallait-il nettoyer la pierre ou la laisser grise ? Le débat a duré vingt ans. Cette année, la ville a enfin choisi un nettoyage doux, à l'eau, qui a rendu sa blancheur d'origine aux colonnes.",
      es: "Durante décadas, los restauradores dudaban: ¿había que limpiar la piedra o dejarla gris? El debate duró veinte años. Este año, la ciudad eligió por fin una limpieza suave, con agua, que devolvió a las columnas su blancura original." },
      { it: "« On y a retrouvé des traces de peinture rouge, explique l'architecte en chef, Élise Fabre. Le temple n'a donc jamais été tout blanc : il en gardait la mémoire dans ses pierres. »",
      es: "«Allí encontramos restos de pintura roja», explica la arquitecta jefe, Élise Fabre. «El templo, pues, nunca fue del todo blanco: guardaba su memoria en sus piedras.»" },
      { it: "L'année prochaine, un nouveau musée racontera son histoire aux touristes, déjà un million chaque année. Les Nîmois, qui en parlent comme d'un grand-père, attendent déjà la fête. La Maison Carrée a d'ailleurs inspiré un monument célèbre de Paris ; l'original, lui, n'a jamais quitté Nîmes.",
      es: "El año que viene, un museo nuevo contará su historia a los turistas, ya un millón cada año. Los nimesios, que hablan de él como de un abuelo, esperan ya la fiesta. La Maison Carrée inspiró además un monumento célebre de París; el original, en cambio, nunca dejó Nimes." },
    ],
    words: [
      { it: "un temple", es: "un templo" },
      { it: "une colonne / les colonnes", es: "una columna / las columnas" },
      { it: "la pierre", es: "la piedra" },
      { it: "un nettoyage", es: "una limpieza" },
      { it: "une trace / des traces", es: "un rastro / restos" },
      { it: "la blancheur", es: "la blancura" },
    ],
    questions: [
      { q: "¿Cómo era este templo en la Galia?", options: ["Le plus élégant de la Gaule", "Le plus laid de la Gaule", "Le plus petit de la Gaule", "Le plus récent de la Gaule"], answer: 0, why: "«ce temple était le plus élégant de la Gaule»" },
      { q: "¿Cuánto duró el debate sobre la limpieza?", options: ["Deux ans", "Vingt ans", "Un siècle", "Vingt semaines"], answer: 1, why: "«Le débat a duré vingt ans»" },
      { q: "¿Qué sorpresa se descubrió bajo la piedra?", options: ["Un trésor d'or", "Une tombe royale", "Des traces de peinture rouge", "Des os d'animaux"], answer: 2, why: "«On y a retrouvé des traces de peinture rouge»" },
      { q: "¿Qué se abrirá el año que viene?", options: ["Un hôtel de luxe", "Une gare souterraine", "Un parc d'attractions", "Un nouveau musée"], answer: 3, why: "«un nouveau musée racontera son histoire aux touristes»" },
    ],
    discuss: [
      { it: "Votre ville possède-t-elle un bâtiment « grand-père » que tout le monde protège ?", es: "¿Posee tu ciudad algún edificio «abuelo» que todo el mundo protege?" },
      { it: "Faut-il restaurer les monuments à leur couleur d'origine, ou garder la patine du temps ?", es: "¿Hay que restaurar los monumentos a su color original o conservar la pátina del tiempo?" },
    ],
  },

  /* ═══ B1 · 7 — Économie · Limoges ═══ */
  {
    id: "fr-news-b1-07", cat: "economia", level: "B1", place: "Limoges", minutes: 3,
    title: "À Limoges, la porcelaine renaît dans les mains des jeunes",
    titleEs: "En Limoges, la porcelana renace en manos de los jóvenes",
    lead: {
      it: "Pendant longtemps, la porcelaine de Limoges dormait dans les placards. Une génération de jeunes céramistes a rouvert les ateliers, et la ville blanche refait des affaires.",
      es: "Durante mucho tiempo, la porcelana de Limoges dormía en los armarios. Una generación de jóvenes ceramistas reabrió los talleres, y la ciudad blanca vuelve a hacer negocios.",
    },
    paragraphs: [
      { it: "Pendant des décennies, la porcelaine de Limoges était ce cadeau de mariage que personne n'osait utiliser. Les usines fermaient une à une, et la ville s'y habituait tristement. La « capitale de la porcelaine » comptait trente mille ouvriers en 1900 ; il en restait dix fois moins en 2015.",
      es: "Durante décadas, la porcelana de Limoges era ese regalo de boda que nadie se atrevía a usar. Las fábricas cerraban una tras otra, y la ciudad se acostumbraba tristemente. La «capital de la porcelana» tenía treinta mil obreros en 1900; quedaban diez veces menos en 2015." },
      { it: "Depuis cinq ans, pourtant, le vent a tourné. Une vingtaine de jeunes créateurs ont ouvert des ateliers dans les anciennes usines. Ils y fabriquent des tasses, des vases et des lampes aux couleurs vives, vendues trois fois moins cher que le service de grand-mère.",
      es: "Desde hace cinco años, sin embargo, el viento cambió. Una veintena de jóvenes creadores abrió talleres en las antiguas fábricas. Allí fabrican tazas, jarrones y lámparas de colores vivos, vendidas tres veces más baratas que la vajilla de la abuela." },
      { it: "« Mes grands-parents travaillaient ici même, raconte une céramiste, Camille Roux. J'ai grandi dans l'odeur de ces fours. Aujourd'hui, j'en fais mon métier, mais à ma façon : de petites séries, des pièces uniques, des couleurs qui surprennent. »",
      es: "«Mis abuelos trabajaban aquí mismo», cuenta una ceramista, Camille Roux. «Crecí con el olor de esos hornos. Hoy hago de ello mi oficio, pero a mi manera: series pequeñas, piezas únicas, colores que sorprenden.»" },
      { it: "Les commandes en ligne ont explosé : la moitié part désormais à l'étranger, du Japon aux États-Unis. La ville en vit mieux, et l'école de céramique, fermée en 2010, a rouvert ses portes en septembre. La table française y revient, tasse après tasse.",
      es: "Los pedidos en línea se dispararon: la mitad sale ya al extranjero, de Japón a Estados Unidos. La ciudad vive mejor de ello, y la escuela de cerámica, cerrada en 2010, reabrió sus puertas en septiembre. La mesa francesa vuelve a ella, taza a taza." },
    ],
    words: [
      { it: "la porcelaine", es: "la porcelana" },
      { it: "une usine / les usines", es: "una fábrica / las fábricas" },
      { it: "un atelier / des ateliers", es: "un taller / talleres" },
      { it: "un four / les fours", es: "un horno / los hornos" },
      { it: "une commande / les commandes", es: "un pedido / los pedidos" },
      { it: "à l'étranger", es: "al extranjero", note: "«étrange» = extraño ; «l'étranger» = el extranjero" },
    ],
    questions: [
      { q: "¿Cuántos obreros tenía la «capital de la porcelana» en 1900?", options: ["Trente mille", "Trois mille", "Trois cents", "Trente mille fois moins"], answer: 0, why: "«comptait trente mille ouvriers en 1900»" },
      { q: "¿Qué fabrican los jóvenes creadores?", options: ["Des parapluies", "Des tasses, des vases et des lampes aux couleurs vives", "Des voitures électriques", "Du papier peint"], answer: 1, why: "«Ils y fabriquent des tasses, des vases et des lampes aux couleurs vives»" },
      { q: "¿Cómo trabaja la ceramista Camille Roux?", options: ["Comme ses grands-parents, en grandes séries", "Seulement pour les musées", "À sa façon : petites séries et pièces uniques", "Elle a abandonné la céramique"], answer: 2, why: "«j'en fais mon métier, mais à ma façon : de petites séries, des pièces uniques»" },
      { q: "¿Qué pasó con la escuela de cerámica?", options: ["Elle a brûlé", "Elle a déménagé à Paris", "Elle n'a jamais existé", "Fermée en 2010, elle a rouvert ses portes en septembre"], answer: 3, why: "«l'école de céramique, fermée en 2010, a rouvert ses portes en septembre»" },
    ],
    discuss: [
      { it: "Possédez-vous des objets de famille que vous n'osez pas utiliser ? Racontez.", es: "¿Tienes objetos familiares que no te atreves a usar? Cuenta." },
      { it: "«Trois fois moins cher que le service de grand-mère» : le prix fait-il la qualité ?", es: "«Tres veces más barata que la vajilla de la abuela»: ¿el precio hace la calidad?" },
    ],
  },

  /* ═══ B1 · 8 — Sport · Chamonix ═══ */
  {
    id: "fr-news-b1-08", cat: "sport", level: "B1", place: "Chamonix", minutes: 3,
    title: "Chamonix, l'école des guides de montagne",
    titleEs: "Chamonix, la escuela de los guías de montaña",
    lead: {
      it: "En 1786, deux habitants de la vallée ont atteint pour la première fois le sommet du mont Blanc. Depuis un siècle, l'école des guides de Chamonix forme ceux qui suivent leurs pas.",
      es: "En 1786, dos habitantes del valle alcanzaron por primera vez la cima del Mont Blanc. Desde hace un siglo, la escuela de guías de Chamonix forma a quienes siguen sus pasos.",
    },
    paragraphs: [
      { it: "Le 8 août 1786, un cristallier et un médecin du pays ont posé le pied sur le toit de l'Europe. À l'époque, leurs voisins croyaient la montagne habitée par des esprits ; personne n'y montait jamais. La nouvelle a fait le tour de la France : l'alpinisme était né.",
      es: "El 8 de agosto de 1786, un buscador de cristales y un médico de la región pusieron el pie en el techo de Europa. En la época, sus vecinos creían la montaña habitada por espíritus; nadie subía jamás. La noticia dio la vuelta a Francia: había nacido el alpinismo." },
      { it: "Depuis, Chamonix est devenue la capitale mondiale de la discipline. Chaque été, des milliers de randonneurs y testent leurs jambes sur les sentiers, et la vallée compte plus de deux cents guides professionnels. Les clients en viennent de toute l'Europe.",
      es: "Desde entonces, Chamonix se convirtió en la capital mundial de la disciplina. Cada verano, miles de senderistas ponen a prueba allí sus piernas en los senderos, y el valle cuenta con más de doscientos guías profesionales. Los clientes llegan de toda Europa." },
      { it: "L'école des guides forme en trois ans ces professionnels de la montagne. « Avant, on apprenait sur le terrain, en imitant les anciens, rappelle un moniteur, Stéphane Ballot. Maintenant, la science y a ajouté la neige, le danger et le sommeil : on enseigne tout cela très sérieusement. »",
      es: "La escuela de guías forma en tres años a esos profesionales de la montaña. «Antes se aprendía en el terreno, imitando a los viejos», recuerda un monitor, Stéphane Ballot. «Ahora la ciencia añadió la nieve, el peligro y el sueño: enseñamos todo eso muy en serio.»" },
      { it: "Le métier change pourtant : les clients arrivent de plus loin, et le réchauffement raccourcit les saisons de glace. Mais chaque matin, avant l'aube, des cordées partent encore vers les glaciers. La montagne n'a jamais été un sport tranquille ; c'est justement pour cela qu'on y revient.",
      es: "El oficio cambia, sin embargo: los clientes llegan de más lejos, y el calentamiento acorta las temporadas de hielo. Pero cada mañana, antes del alba, cordadas parten todavía hacia los glaciares. La montaña nunca fue un deporte tranquilo; justamente por eso se vuelve a ella." },
    ],
    words: [
      { it: "le sommet", es: "la cima" },
      { it: "les sentiers", es: "los senderos" },
      { it: "un guide / les guides", es: "un guía / los guías" },
      { it: "une cordée / des cordées", es: "una cordada", note: "grupo unido por una cuerda, de «corde»" },
      { it: "les glaciers", es: "los glaciares" },
      { it: "avant l'aube", es: "antes del alba" },
    ],
    questions: [
      { q: "¿Quiénes fueron los primeros en la cima en 1786?", options: ["Un cristallier et un médecin du pays", "Deux guides italiens", "Deux touristes anglais", "Un militaire et son équipe"], answer: 0, why: "«un cristallier et un médecin du pays ont posé le pied sur le toit de l'Europe»" },
      { q: "¿Qué creían los vecinos de la época?", options: ["Que l'or y dormait", "Que la montagne était habitée par des esprits", "Que la montagne appartenait au roi", "Que le sommet était déjà pris"], answer: 1, why: "«leurs voisins croyaient la montagne habitée par des esprits»" },
      { q: "¿Qué ha añadido la ciencia a la formación de los guías?", options: ["Le ski et le parapente", "Les langues étrangères", "La neige, le danger et le sommeil", "La cuisine de montagne"], answer: 2, why: "«la science y a ajouté la neige, le danger et le sommeil»" },
      { q: "¿Por qué se vuelve a la montaña, según el cierre de la noticia?", options: ["Parce qu'elle est tranquille", "Parce qu'elle est proche", "Parce qu'elle coûte peu", "Parce qu'elle n'a jamais été un sport tranquille, justement"], answer: 3, why: "«La montagne n'a jamais été un sport tranquille ; c'est justement pour cela qu'on y revient»" },
    ],
    discuss: [
      { it: "Quelle montagne — ou quel défi physique — aimeriez-vous tenter un jour ?", es: "¿Qué montaña —o qué desafío físico— te gustaría intentar algún día?" },
      { it: "«Imiter les anciens» ou «la science» : quelle école préférez-vous pour apprendre ?", es: "«Imitar a los viejos» o «la ciencia»: ¿qué escuela prefieres para aprender?" },
    ],
  },

  /* ═══ B1 · 9 — Société · Rennes ═══ */
  {
    id: "fr-news-b1-09", cat: "societa", level: "B1", place: "Rennes", minutes: 3,
    title: "À Rennes, les retraités retournent en cours",
    titleEs: "En Rennes, los jubilados vuelven a clase",
    lead: {
      it: "Mardi matin, l'amphithéâtre d'histoire de l'université de Rennes est plein. Dans les rangs, des têtes blanches : depuis trois ans, la ville invite ses retraités à redevenir étudiants.",
      es: "Martes por la mañana, el anfiteatro de historia de la universidad de Rennes está lleno. En las filas, cabezas blancas: desde hace tres años, la ciudad invita a sus jubilados a volver a ser estudiantes.",
    },
    paragraphs: [
      { it: "Le programme s'appelle « l'université du deuxième âge ». Il ouvre une dizaine de cours aux retraités : histoire, sciences, langues, musique. Les cours ont lieu le matin, quand l'université est calme. Ils y suivent les mêmes leçons que les étudiants réguliers, sans examen à la fin du semestre.",
      es: "El programa se llama «la universidad de la segunda edad». Abre una decena de cursos a los jubilados: historia, ciencias, lenguas, música. Las clases tienen lugar por la mañana, cuando la universidad está tranquila. Allí siguen las mismas lecciones que los estudiantes regulares, sin examen al final del semestre." },
      { it: "Au départ, les organisateurs craignaient le désert : cent personnes s'inscrivaient la première année. Cette année, six cents seniors ont demandé une place. « On pensait en accueillir cinquante, sourit la responsable, Nadine Quélen. On en a refusé presque autant, faute de chaises. »",
      es: "Al principio, los organizadores temían el desierto: cien personas se inscribieron el primer año. Este año, seiscientos mayores pidieron plaza. «Pensábamos acoger a cincuenta», sonríe la responsable, Nadine Quélen. «Rechazamos a casi otros tantos, por falta de sillas.»" },
      { it: "Les jeunes étudiants, d'abord étonnés, prennent goût à ces voisins de cours. « Ils posent des questions que personne ne pose plus, note une étudiante en histoire. Leur mémoire vaut tous nos manuels. » Certains prennent même des notes pour leurs petits-enfants.",
      es: "Los estudiantes jóvenes, al principio sorprendidos, le toman gusto a estos vecinos de clase. «Hacen preguntas que ya nadie hace», anota una estudiante de historia. «Su memoria vale más que todos nuestros manuales.» Algunos toman incluso apuntes para sus nietos." },
      { it: "Le programme coûte peu et intéresse déjà quatre autres villes françaises. À Rennes, l'âge moyen des nouveaux arrivants atteint soixante-neuf ans. L'université leur a promis une seule chose : aucun examen. Ils en discutent chaque mardi, très sérieusement.",
      es: "El programa cuesta poco y ya interesa a otras cuatro ciudades francesas. En Rennes, la edad media de los recién llegados llega a los sesenta y nueve años. La universidad les prometió una sola cosa: ningún examen. De ello discuten cada martes, muy en serio." },
    ],
    words: [
      { it: "un retraité / les retraités", es: "un jubilado / los jubilados" },
      { it: "une leçon / les leçons", es: "una lección / las lecciones" },
      { it: "un manuel / les manuels", es: "un manual / los manuales" },
      { it: "l'âge moyen", es: "la edad media" },
      { it: "un examen", es: "un examen" },
      { it: "faute de", es: "por falta de" },
    ],
    questions: [
      { q: "¿Qué cursos se abren a los jubilados?", options: ["Histoire, sciences, langues, musique", "Seulement le jardinage", "La cuisine et la natation", "La finance personnelle"], answer: 0, why: "«Il ouvre une dizaine de cours aux retraités : histoire, sciences, langues, musique»" },
      { q: "¿Cuántos mayores pidieron plaza este año?", options: ["Cinquante", "Six cents", "Six mille", "Cent"], answer: 1, why: "«six cents seniors ont demandé une place»" },
      { q: "¿Por qué la estudiante valora tanto su memoria?", options: ["Parce que les manuels sont trop chers", "Parce qu'ils écrivent les manuels", "Parce qu'ils posent des questions que personne ne pose plus et se souviennent du passé", "Parce que la mémoire remplace les ordinateurs"], answer: 2, why: "«Ils posent des questions que personne ne pose plus»" },
      { q: "¿Qué les prometió la universidad?", options: ["Un diplôme officiel", "Des cours gratuits à vie", "Une chambre sur le campus", "Aucun examen"], answer: 3, why: "«L'université leur a promis une seule chose : aucun examen»" },
    ],
    discuss: [
      { it: "Retourner sur les bancs de l'école à soixante-dix ans : pour ou contre ?", es: "Volver a los bancos de la escuela a los setenta años: ¿a favor o en contra?" },
      { it: "Que pourriez-vous apprendre de vos aînés ? Et eux, de vous ?", es: "¿Qué podrías aprender de tus mayores? ¿Y ellos de ti?" },
    ],
  },

  /* ═══ B1 · 10 — Environnement · Marseille ═══ */
  {
    id: "fr-news-b1-10", cat: "ambiente", level: "B1", place: "Marseille", minutes: 3,
    title: "Les calanques de Marseille : la mer rend ce qu'on lui donne",
    titleEs: "Los calanques de Marsella: el mar devuelve lo que le dan",
    lead: {
      it: "Le parc national des calanques, entre Marseille et Cassis, a dix ans. Pêcheurs et scientifiques y ont inventé une autre façon de protéger la mer — et le mérou est déjà revenu.",
      es: "El parque nacional de los calanques, entre Marsella y Cassis, cumple diez años. Pescadores y científicos inventaron allí otra manera de proteger el mar — y el mero ya volvió.",
    },
    paragraphs: [
      { it: "Entre Marseille et Cassis, des falaises blanches tombent dans une eau transparente. Ce parc national, créé il y a dix ans, était le premier de France à border une grande ville : trois millions d'habitants y vivent à moins d'une heure.",
      es: "Entre Marsella y Cassis, acantilados blancos caen en un agua transparente. Este parque nacional, creado hace diez años, fue el primero de Francia que linda con una gran ciudad: tres millones de habitantes viven allí a menos de una hora." },
      { it: "Longtemps, cette mer a servi de poubelle et de terrain de chasse sans règles. Les poissons y devenaient rares ; les posidonies, ces plantes sous-marines qui fabriquent l'oxygène, reculaient chaque année. Les plongeurs s'en souviennent encore.",
      es: "Durante mucho tiempo, ese mar sirvió de basurero y de coto de caza sin reglas. Los peces se volvían raros allí; las posidonias, esas plantas submarinas que fabrican oxígeno, retrocedían cada año. Los buzos aún se acuerdan." },
      { it: "Le parc a alors changé les règles avec ceux qui connaissent le mieux l'eau : les pêcheurs. Eux indiquent les zones à protéger ; en échange, ils jettent des filets plus sélectifs, moins souvent. « Nos grands-pères décrivaient des bancs énormes, raconte un patron de barque, Toni Ferrand. On en revoit enfin. »",
      es: "El parque cambió entonces las reglas con quienes mejor conocen el agua: los pescadores. Ellos señalan las zonas a proteger; a cambio, echan redes más selectivas, con menos frecuencia. «Nuestros abuelos describían bancos enormes», cuenta un patrón de barca, Toni Ferrand. «Volvemos a verlos por fin.»" },
      { it: "Chaque mois, des scientifiques plongent pour compter. Le résultat est là : les herbiers repoussent, et le mérou est revenu près des îles. Le parc espère étendre la zone protégée l'an prochain. À Marseille, on répète que la mer rend toujours ce qu'on lui donne.",
      es: "Cada mes, unos científicos se sumergen para contar. El resultado está ahí: las praderas rebrotan y el mero volvió cerca de las islas. El parque espera ampliar la zona protegida el año próximo. En Marsella se repite que el mar siempre devuelve lo que le dan." },
    ],
    words: [
      { it: "une falaise / des falaises", es: "un acantilado / acantilados" },
      { it: "les posidonies", es: "las posidonias (plantas marinas)" },
      { it: "un herbier / les herbiers", es: "una pradera submarina" },
      { it: "un mérou", es: "un mero (pez de roca)" },
      { it: "en échange", es: "a cambio" },
      { it: "une zone / les zones", es: "una zona / las zonas" },
    ],
    questions: [
      { q: "¿Qué era especial de este parque nacional al crearse?", options: ["C'était le premier de France à border une grande ville", "C'était le plus grand du monde", "Il n'avait pas de mer", "Il appartenait aux pêcheurs"], answer: 0, why: "«était le premier de France à border une grande ville»" },
      { q: "¿Qué pasaba con las posidonias antes de la protección?", options: ["Elles avançaient chaque année", "Elles reculaient chaque année", "Elles avaient disparu depuis un siècle", "Elles changeaient de couleur"], answer: 1, why: "«les posidonies, ces plantes sous-marines qui fabriquent l'oxygène, reculaient chaque année»" },
      { q: "¿Qué hacen los pescadores a cambio?", options: ["Ils quittent la région", "Ils paient un impôt spécial", "Ils jettent des filets plus sélectifs, moins souvent", "Ils travaillent comme guides touristiques"], answer: 2, why: "«en échange, ils jettent des filets plus sélectifs, moins souvent»" },
      { q: "¿Qué resultado muestran los conteos mensuales?", options: ["Rien n'a changé", "La mer est plus sale qu'avant", "Les pêcheurs ont disparu", "Les herbiers repoussent et le mérou est revenu"], answer: 3, why: "«les herbiers repoussent, et le mérou est revenu près des îles»" },
    ],
    discuss: [
      { it: "«La mer rend ce qu'on lui donne» : cette phrase vaut-elle aussi pour la nature près de chez vous ?", es: "«El mar devuelve lo que le dan»: ¿vale esta frase también para la naturaleza cerca de tu casa?" },
      { it: "Protéger avec les pêcheurs plutôt que contre eux : qu'en pensez-vous ?", es: "Proteger con los pescadores y no contra ellos: ¿qué opinas?" },
    ],
  },

  /* ═══ B1 · 11 — Technologie · Saint-Nazaire ═══ */
  {
    id: "fr-news-b1-11", cat: "tecnologia", level: "B1", place: "Saint-Nazaire", minutes: 3,
    title: "Les éoliennes flottantes prennent le large à Saint-Nazaire",
    titleEs: "Los aerogeneradores flotantes se hacen a la mar en Saint-Nazaire",
    lead: {
      it: "Les éoliennes en mer se plantent d'habitude au fond, là où l'eau est basse. Au large de Saint-Nazaire, le plancher descend trop vite : des ingénieurs ont appris à faire flotter leurs machines.",
      es: "Los aerogeneradores marinos se plantan normalmente en el fondo, donde el agua es baja. Frente a Saint-Nazaire, el suelo desciende demasiado deprisa: unos ingenieros aprendieron a hacer flotar sus máquinas.",
    },
    paragraphs: [
      { it: "Une éolienne classique se plante au fond de la mer, sur une base énorme de béton. Mais au large de Saint-Nazaire, l'Atlantique descend vite à plus de cent mètres. Installer des bases y coûtait une fortune : il fallait inventer autre chose.",
      es: "Un aerogenerador clásico se planta en el fondo del mar, sobre una base enorme de hormigón. Pero frente a Saint-Nazaire, el Atlántico baja deprisa a más de cien metros. Instalar bases allí costaba una fortuna: había que inventar otra cosa." },
      { it: "La réponse tient en trois câbles. L'éolienne flottante, construite par les chantiers de la Loire, se pose sur un flotteur tenu au fond comme une barque amarrée. Le prototype a été installé il y a deux ans ; il produit déjà l'électricité d'une ville de vingt mille habitants.",
      es: "La respuesta cabe en tres cables. El aerogenerador flotante, construido por los astilleros del Loira, se posa sobre un flotador amarrado al fondo como una barca. El prototipo se instaló hace dos años; ya produce la electricidad de una ciudad de veinte mil habitantes." },
      { it: "L'hiver dernier, il a tenu des vagues de huit mètres sans broncher. « Le plus dur n'était pas la machine, mais la mer elle-même, explique une ingénieure, Pauline Le Bihan. On y apprend l'humilité : chaque sortie en bateau coûte cher, alors on répare à distance. »",
      es: "El invierno pasado aguantó olas de ocho metros sin inmutarse. «Lo más difícil no era la máquina, sino el mar mismo», explica una ingeniera, Pauline Le Bihan. «Allí se aprende la humildad: cada salida en barco cuesta caro, así que reparamos a distancia.»" },
      { it: "Une ferme pilote de quatre machines se construit maintenant sur la côte. Si tout va bien, des centaines d'éoliennes flottantes pourraient suivre avant quinze ans. La région en attend des milliers d'emplois — et l'océan, un peu de repos.",
      es: "Una granja piloto de cuatro máquinas se construye ahora en la costa. Si todo va bien, cientos de aerogeneradores flotantes podrían seguir antes de quince años. La región espera de ellos miles de empleos — y el océano, un poco de descanso." },
    ],
    words: [
      { it: "une éolienne", es: "un aerogenerador" },
      { it: "flottant / flottante", es: "flotante" },
      { it: "un câble / trois câbles", es: "un cable / tres cables" },
      { it: "un chantier / les chantiers", es: "un astillero", note: "también significa «obra (de construcción)»" },
      { it: "une vague / des vagues", es: "una ola / las olas" },
      { it: "une sortie en bateau", es: "una salida en barco" },
    ],
    questions: [
      { q: "¿Por qué no sirven las bases de hormigón frente a Saint-Nazaire?", options: ["Parce que l'Atlantique descend vite à plus de cent mètres", "Parce qu'il n'y a pas de vent", "Parce que les bateaux ne passent pas", "Parce que le béton y est interdit"], answer: 0, why: "«l'Atlantique descend vite à plus de cent mètres»" },
      { q: "¿A qué se reduce la solución técnica?", options: ["Trois ancres dorées", "Trois câbles", "Un pilier géant", "Rien du tout"], answer: 1, why: "«La réponse tient en trois câbles»" },
      { q: "¿Cuánta electricidad produce ya el prototipo?", options: ["Celle d'un village de cent habitants", "Celle de Paris", "Celle d'une ville de vingt mille habitants", "Aucune"], answer: 2, why: "«il produit déjà l'électricité d'une ville de vingt mille habitants»" },
      { q: "¿Qué aprenden los ingenieros del mar?", options: ["Qu'on peut tout contrôler", "Que la mer est toujours calme", "Qu'il faut éviter la technologie", "L'humilité : chaque sortie en bateau coûte cher"], answer: 3, why: "«On y apprend l'humilité : chaque sortie en bateau coûte cher»" },
    ],
    discuss: [
      { it: "Accepteriez-vous une éolienne en face de votre fenêtre ? Pourquoi ?", es: "¿Aceptarías un aerogenerador frente a tu ventana? ¿Por qué?" },
      { it: "«Réparer à distance» : où cette idée pourrait-elle servir encore ?", es: "«Reparar a distancia»: ¿dónde más podría servir esta idea?" },
    ],
  },

  /* ═══ B1 · 12 — Sciences · Clermont-Ferrand ═══ */
  {
    id: "fr-news-b1-12", cat: "scienza", level: "B1", place: "Clermont-Ferrand", minutes: 3,
    title: "En Auvergne, on surveille des volcans endormis",
    titleEs: "En la Auvernia vigilan volcanes dormidos",
    lead: {
      it: "Au sud de Clermont-Ferrand, des volcans dorment sous l'herbe depuis des millénaires. Un observatoire les écoute maintenant jour et nuit : en Auvergne, « endormi » ne veut pas dire « éteint ».",
      es: "Al sur de Clermont-Ferrand, unos volcanes duermen bajo la hierba desde hace milenios. Un observatorio los escucha ahora día y noche: en la Auvernia, «dormido» no significa «extinto».",
    },
    paragraphs: [
      { it: "La chaîne des Puys, au sud de Clermont-Ferrand, aligne une quatre-vingtaine de volcans verts comme des collines. Le dernier en date s'est endormi il y a huit mille ans. Les géologues répètent la même phrase avec un sourire : « Endormi n'est pas éteint. »",
      es: "La cadena de Puys, al sur de Clermont-Ferrand, alinea unos ochenta volcanes verdes como colinas. El último se durmió hace ocho mil años. Los geólogos repiten la misma frase con una sonrisa: «Dormido no significa extinto.»" },
      { it: "Longtemps, la région ignorait ce trésor sous ses pieds : on croyait les volcans définitivement morts, on y construisait des parkings et des routes. En 2018, la chaîne est entrée au patrimoine mondial de l'humanité ; la science y a suivi, avec un observatoire installé au sommet du puy de Dôme.",
      es: "Durante mucho tiempo, la región ignoraba ese tesoro bajo sus pies: se creía los volcanes definitivamente muertos y se construían allí aparcamientos y carreteras. En 2018, la cadena entró en el patrimonio mundial de la humanidad; la ciencia la siguió, con un observatorio instalado en la cima del puy de Dôme." },
      { it: "L'observatoire mesure tout : les tremblements trop petits pour être sentis, les gaz qui montent du sol, la dérive lente des pentes. « Avant, on attendait les récits des voyageurs pour comprendre, sourit une sismologue, Aurore Béal. Maintenant, les capteurs nous parlent jour et nuit. »",
      es: "El observatorio lo mide todo: los temblores demasiado pequeños para sentirse, los gases que suben del suelo, la deriva lenta de las laderas. «Antes se esperaban los relatos de los viajeros para entender», sonríe una sismóloga, Aurore Béal. «Ahora los sensores nos hablan día y noche.»" },
      { it: "Aucune éruption n'est prévue pour demain matin, rassurez-vous. Mais la chaîne attire désormais un million de visiteurs par an, et les chercheurs en profitent : c'est le meilleur laboratoire d'Europe pour apprendre à lire les montagnes de feu.",
      es: "No se prevé ninguna erupción para mañana por la mañana, tranquilos. Pero la cadena atrae ya a un millón de visitantes al año, y los investigadores aprovechan: es el mejor laboratorio de Europa para aprender a leer las montañas de fuego." },
    ],
    words: [
      { it: "un volcan / les volcans", es: "un volcán / los volcanes" },
      { it: "une éruption", es: "una erupción" },
      { it: "un tremblement / les tremblements", es: "un temblor / los temblores" },
      { it: "le sol", es: "el suelo" },
      { it: "un capteur / les capteurs", es: "un sensor / los sensores" },
      { it: "une pente / les pentes", es: "una ladera / las laderas" },
    ],
    questions: [
      { q: "¿Cuánto hace que se durmió el último volcán de la cadena?", options: ["Huit mille ans", "Huit cents ans", "Huit millions d'années", "Huit ans"], answer: 0, why: "«Le dernier en date s'est endormi il y a huit mille ans»" },
      { q: "¿Qué se construía en los volcanes antes de 2018?", options: ["Des hôpitaux", "Des parkings et des routes", "Des aéroports", "Des éoliennes"], answer: 1, why: "«on y construisait des parkings et des routes»" },
      { q: "¿Qué mide el observatorio?", options: ["Seulement la pluie", "Le nombre de visiteurs", "Les tremblements trop petits pour être sentis, les gaz du sol, la dérive des pentes", "La température de l'air"], answer: 2, why: "«les tremblements trop petits pour être sentis, les gaz qui montent du sol, la dérive lente des pentes»" },
      { q: "¿Por qué los investigadores aprovechan la cadena?", options: ["Parce qu'ils y habitent", "Parce que les visiteurs paient cher", "Parce qu'il n'y a rien d'autre à faire", "Parce que c'est le meilleur laboratoire d'Europe pour lire les montagnes de feu"], answer: 3, why: "«c'est le meilleur laboratoire d'Europe pour apprendre à lire les montagnes de feu»" },
    ],
    discuss: [
      { it: "Visiter un volcan endormi : tentant ou terrifiant ? Expliquez.", es: "Visitar un volcán dormido: ¿tentador o aterrador? Explica." },
      { it: "«Endormi n'est pas éteint» : cette phrase peut-elle décrire autre chose que des volcans ?", es: "«Dormido no significa extinto»: ¿puede describir esta frase algo más que volcanes?" },
    ],
  },

  /* ═══ B1 · 13 — Culture · Angoulême ═══ */
  {
    id: "fr-news-b1-13", cat: "cultura", level: "B1", place: "Angoulême", minutes: 3,
    title: "Angoulême, capitale française de la bande dessinée",
    titleEs: "Angulema, capital francesa del cómic",
    lead: {
      it: "Dans le centre d'Angoulême, des fresques géantes habillent les murs : des héros de bande dessinée regardent la ville. Il y a un siècle, ces rues fabriquaient du papier ; aujourd'hui, elles fabriquent des histoires.",
      es: "En el centro de Angulema, frescos gigantes visten los muros: héroes de cómic miran la ciudad. Hace un siglo, estas calles fabricaban papel; hoy fabrican historias.",
    },
    paragraphs: [
      { it: "Au dix-neuvième siècle, les fabriques de papier de la Charente fournissaient la moitié de la France. Puis la demande a baissé, les usines ont fermé une à une ; il en reste une seule, devenue musée à la fin des années quatre-vingt-dix.",
      es: "En el siglo XIX, las fábricas de papel de la Charente abastecían media Francia. Luego la demanda bajó, las fábricas cerraron una a una; queda una sola, convertida en museo a finales de los años noventa." },
      { it: "La ville a alors misé sur un autre trésor : les cases et les bulles. Chaque hiver, un grand festival transforme Angoulême en salon géant ; un quart de million de fans y défilent, dédicaces à la main. Les hôtels affichent complet six mois à l'avance.",
      es: "La ciudad apostó entonces por otro tesoro: las viñetas y los globos. Cada invierno, un gran festival transforma Angulema en un salón gigante; un cuarto de millón de fans desfila allí con firmas de autores en la mano. Los hoteles cuelgan el cartel de completo seis meses antes." },
      { it: "Le musée de la bande dessinée, perché sur le plateau, y garde cent mille planches originales, des pionniers aux auteurs d'aujourd'hui. « Chaque planche est un manuscrit, explique une conservatrice, Bénédicte Thomas. Les dessinateurs y pensent comme des cinéastes : c'est du cinéma sur papier. »",
      es: "El museo del cómic, encaramado en la meseta, guarda allí cien mil planchas originales, de los pioneros a los autores de hoy. «Cada plancha es un manuscrito», explica una conservadora, Bénédicte Thomas. «Los dibujantes piensan como cineastas: es cine sobre papel.»" },
      { it: "Les librairies en vivent toute l'année, et une école locale forme les dessinateurs de demain. Des studios d'animation s'y installent aussi, un à un. Angoulême a compris avant les autres : une ville peut changer d'usine sans changer d'histoire.",
      es: "Las librerías viven de ello todo el año, y una escuela local forma a los dibujantes del mañana. Estudios de animación se instalan allí también, uno a uno. Angulema entendió antes que las demás: una ciudad puede cambiar de fábrica sin cambiar de historia." },
    ],
    words: [
      { it: "une fabrique / les fabriques", es: "una fábrica / las fábricas" },
      { it: "une case / les cases", es: "una viñeta", note: "falso amigo : «case» = casilla o viñeta, no «casa»" },
      { it: "une bulle / les bulles", es: "un globo (de diálogo)" },
      { it: "une planche / des planches", es: "una plancha (página de cómic)" },
      { it: "un dessinateur / les dessinateurs", es: "un dibujante / los dibujantes" },
      { it: "une dédicace / des dédicaces", es: "una firma (de autor)" },
    ],
    questions: [
      { q: "¿Qué abastecían las fábricas de la Charente en el siglo XIX?", options: ["La moitié de la France en papier", "Toute l'Europe en tissu", "Le pays en armes", "Les colonies en sucre"], answer: 0, why: "«les fabriques de papier de la Charente fournissaient la moitié de la France»" },
      { q: "¿Cuántos fans desfilan en el festival cada invierno?", options: ["Un millier", "Un quart de million", "Un million entier", "Dix millions"], answer: 1, why: "«un quart de million de fans y défilent»" },
      { q: "¿Qué guarda el museo del cómic?", options: ["Des caméras anciennes", "Des costumes de théâtre", "Cent mille planches originales", "Des voitures de course"], answer: 2, why: "«y garde cent mille planches originales»" },
      { q: "¿Por qué compara la conservadora las planchas con el cine?", options: ["Parce que le musée projette des films", "Parce que les héros deviennent des acteurs", "Parce que les planches sont animées", "Parce que les dessinateurs pensent comme des cinéastes : c'est du cinéma sur papier"], answer: 3, why: "«Les dessinateurs y pensent comme des cinéastes : c'est du cinéma sur papier»" },
    ],
    discuss: [
      { it: "La bande dessinée : de la « vraie » littérature ? Défendez votre avis.", es: "El cómic: ¿«verdadera» literatura? Defiende tu opinión." },
      { it: "Votre ville a-t-elle « changé d'usine » comme Angoulême ? Racontez.", es: "¿Ha «cambiado de fábrica» tu ciudad como Angulema? Cuenta." },
    ],
  },

  /* ═══ B1 · 14 — Histoire · Mont-Saint-Michel ═══ */
  {
    id: "fr-news-b1-14", cat: "storia", level: "B1", place: "Mont-Saint-Michel", minutes: 3,
    title: "Le Mont-Saint-Michel redevient peu à peu une île",
    titleEs: "El Mont-Saint-Michel vuelve poco a poco a ser una isla",
    lead: {
      it: "Il y a un siècle, la mer entourait le Mont-Saint-Michel à chaque marée. Puis le sable a comblé la baie, et l'île est devenue colline. Un chantier de vingt ans essaie aujourd'hui de renverser le temps.",
      es: "Hace un siglo, el mar rodeaba el Mont-Saint-Michel en cada marea. Luego la arena cegó la bahía y la isla se hizo colina. Una obra de veinte años intenta hoy revertir el tiempo.",
    },
    paragraphs: [
      { it: "Le Mont-Saint-Michel était une île à marée haute, au temps des pèlerins du Moyen Âge. Puis, pendant un siècle, la mer a déposé du sable dans la baie, et les herbes s'y sont installées : la mer se retirait, la terre avançait.",
      es: "El Mont-Saint-Michel era una isla con marea alta, en tiempos de los peregrinos de la Edad Media. Luego, durante un siglo, el mar depositó arena en la bahía y las hierbas se instalaron allí: el mar se retiraba, la tierra avanzaba." },
      { it: "En 2006, la France a lancé un chantier improbable : rendre son île au Mont. Un barrage remonte maintenant le fleuve côtier, qui pousse les sédiments vers le large ; une passerelle légère a remplacé la vieille route-digue d'autrefois.",
      es: "En 2006, Francia lanzó una obra improbable: devolverle su isla al Mont. Una presa hace ahora remontar el río costero, que empuja los sedimentos hacia el mar; una pasarela ligera sustituyó a la antigua carretera-dique de antaño." },
      { it: "« Mon grand-père m'expliquait que l'eau montait jusqu'aux murailles, se souvient un ingénieur du site, Yann Kermarec. À mon arrivée, des moutons broutaient là où ses souvenirs plaçaient des bateaux. Chaque année, on en gagne un peu sur le sable. »",
      es: "«Mi abuelo me explicaba que el agua subía hasta las murallas», recuerda un ingeniero del sitio, Yann Kermarec. «Cuando llegué, ovejas pastaban donde sus recuerdos ponían barcos. Cada año se le gana un poco a la arena.»" },
      { it: "Les mesures sont claires : la baie en perd chaque année l'équivalent de mille camions de sable. D'ici quelques décennies, le Mont redeviendra une île à chaque grande marée, comme au Moyen Âge. Les trois millions de visiteurs annuels devront alors choisir leur heure, car la mer, elle, ne se déplace pour personne.",
      es: "Las mediciones son claras: la bahía pierde cada año el equivalente a mil camiones de arena. En unas décadas, el Mont volverá a ser una isla en cada marea viva, como en la Edad Media. Los tres millones de visitantes anuales deberán entonces elegir su hora, porque el mar no se mueve por nadie." },
    ],
    words: [
      { it: "une île", es: "una isla" },
      { it: "la marée", es: "la marea" },
      { it: "le sable", es: "la arena" },
      { it: "un sédiment / les sédiments", es: "un sedimento / los sedimentos" },
      { it: "une passerelle", es: "una pasarela" },
      { it: "une digue", es: "un dique" },
    ],
    questions: [
      { q: "¿Cómo era el Mont-Saint-Michel en la Edad Media?", options: ["Une île à marée haute", "Une colline toujours sèche", "Un port de pêche", "Une forteresse sans mer"], answer: 0, why: "«Le Mont-Saint-Michel était une île à marée haute»" },
      { q: "¿Qué hace ahora el río costero gracias a la presa?", options: ["Il inonde les parkings", "Il pousse les sédiments vers le large", "Il disparaît sous le sable", "Il nourrit les moutons"], answer: 1, why: "«qui pousse les sédiments vers le large»" },
      { q: "¿Qué encontró el ingeniero a su llegada?", options: ["Des bateaux sous les murailles", "Une mer plus haute qu'avant", "Des moutons là où les souvenirs de son grand-père plaçaient des bateaux", "Rien de spécial"], answer: 2, why: "«des moutons broutaient là où ses souvenirs plaçaient des bateaux»" },
      { q: "¿Cuánta arena pierde la bahía cada año?", options: ["L'équivalent de cent camions", "L'équivalent de dix camions", "Aucune mesure n'existe", "L'équivalent de mille camions"], answer: 3, why: "«la baie en perd chaque année l'équivalent de mille camions de sable»" },
    ],
    discuss: [
      { it: "Faut-il « renverser le temps » pour un monument, ou laisser la nature suivre son chemin ?", es: "¿Hay que «revertir el tiempo» por un monumento o dejar que la naturaleza siga su curso?" },
      { it: "La mer ne se déplace pour personne : connaissez-vous des lieux où la nature impose son horaire ?", es: "El mar no se mueve por nadie: ¿conoces lugares donde la naturaleza impone su horario?" },
    ],
  },

  /* ═══ B1 · 15 — Société · Strasbourg ═══ */
  {
    id: "fr-news-b1-15", cat: "societa", level: "B1", place: "Strasbourg", minutes: 3,
    title: "À Strasbourg, le tram passe le Rhin pour aller travailler",
    titleEs: "En Estrasburgo, el tranvía cruza el Rin para ir a trabajar",
    lead: {
      it: "Chaque matin, le tramway de Strasbourg passe le Rhin sans ralentir. À bord, des infirmières, des cuisiniers et des ingénieurs quittent la France pour l'Allemagne : on les appelle les travailleurs frontaliers.",
      es: "Cada mañana, el tranvía de Estrasburgo cruza el Rin sin frenar. A bordo, enfermeros, cocineros e ingenieros dejan Francia rumbo a Alemania: se les llama trabajadores fronterizos.",
    },
    paragraphs: [
      { it: "Il y a vingt ans, le mouvement était inverse : les Allemands venaient acheter moins cher en France et repartaient le soir. Les deux pays se tournaient le dos, et le Rhin servait surtout de frontière. Puis les hôpitaux et les usines de l'autre rive ont recruté en français : la balance a basculé.",
      es: "Hace veinte años, el movimiento era inverso: los alemanes venían a comprar más barato a Francia y se volvían por la noche. Los dos países se daban la espalda, y el Rin servía sobre todo de frontera. Luego los hospitales y las fábricas de la otra orilla reclutaron en francés: la balanza basculó." },
      { it: "Aujourd'hui, des milliers d'Alsaciens traversent le fleuve chaque jour, vers la ville jumelle de Kehl. « Mes parents ne comprenaient pas mon choix, raconte une infirmière strasbourgeoise, Anouk Weber. Maintenant, mon frère y travaille aussi. Nous rentrons chaque soir : le tram en a fait des voisins, pas des exilés. »",
      es: "Hoy, miles de alsacianos cruzan el río cada día hacia la ciudad gemela de Kehl. «Mis padres no entendían mi decisión», cuenta una enfermera de Estrasburgo, Anouk Weber. «Ahora mi hermano también trabaja allí. Volvemos cada noche: el tranvía hizo de ellos vecinos, no exiliados.»" },
      { it: "Les deux villes profitent du pont : les écoles de Strasbourg ouvrent des classes bilingues, les crèches cherchent des assistantes qui parlent les deux langues, et les étudiants passent d'un campus à l'autre comme on change d'amphithéâtre.",
      es: "Las dos ciudades se benefician del puente: las escuelas de Estrasburgo abren clases bilingües, las guarderías buscan asistentas que hablen las dos lenguas, y los estudiantes pasan de un campus al otro como quien cambia de anfiteatro." },
      { it: "Le Rhin, qui séparait les deux pays pendant des siècles, n'est plus aujourd'hui qu'une ligne bleue entre deux marchés du travail. Le tram la passe en dix minutes — plus vite, assurent les usagers, qu'un embouteillage de lundi matin.",
      es: "El Rin, que separó los dos países durante siglos, hoy no es más que una línea azul entre dos mercados de trabajo. El tranvía la cruza en diez minutos — más rápido, aseguran los usuarios, que un atasco de lunes por la mañana." },
    ],
    words: [
      { it: "un frontalier / les frontaliers", es: "un trabajador fronterizo" },
      { it: "le Rhin", es: "el Rin" },
      { it: "une crèche / les crèches", es: "una guardería", note: "también significa «nacimiento/belén»" },
      { it: "bilingue / bilingues", es: "bilingüe" },
      { it: "une assistante / des assistantes", es: "una asistente" },
      { it: "un marché / les marchés", es: "un mercado / los mercados" },
    ],
    questions: [
      { q: "¿Cómo era el movimiento de compras hace veinte años?", options: ["Les Allemands venaient acheter moins cher en France", "Les Français achetaient tout en Allemagne", "Personne ne traversait le Rhin", "Le tram n'existait pas encore"], answer: 0, why: "«les Allemands venaient acheter moins cher en France et repartaient le soir»" },
      { q: "¿Adónde van cada día los miles de alsacianos?", options: ["Vers Paris", "Vers la ville jumelle de Kehl", "Vers Lyon", "Vers la Suisse"], answer: 1, why: "«des milliers d'Alsaciens traversent le fleuve chaque jour, vers la ville jumelle de Kehl»" },
      { q: "¿Por qué dice Anouk Weber «vecinos, no exiliados»?", options: ["Parce qu'ils ont oublié la France", "Parce qu'ils ont changé de passeport", "Parce qu'ils rentrent chaque soir grâce au tram", "Parce que l'Allemagne est leur pays natal"], answer: 2, why: "«Nous rentrons chaque soir : le tram en a fait des voisins, pas des exilés»" },
      { q: "¿A quién buscan las guarderías?", options: ["Des cuisiniers", "Des infirmières de nuit", "Des chauffeurs de tram", "Des assistantes qui parlent les deux langues"], answer: 3, why: "«les crèches cherchent des assistantes qui parlent les deux langues»" },
    ],
    discuss: [
      { it: "Travailler dans un pays et dormir dans un autre : une vie qui vous plairait ?", es: "Trabajar en un país y dormir en otro: ¿te gustaría esa vida?" },
      { it: "Que gagnerait votre région si un tram reliait deux pays ?", es: "¿Qué ganaría tu región si un tranvía uniera dos países?" },
    ],
  },
];
