/* ── FR · Notícias C1 + C2 (v9.26) ─────────────────────────────────────
   Français avancé, méthode VOA. C1 : argumentation nuancée ;
   C2 : registre littéraire, ironie et rhétorique. `.it` = français, `.es` = espagnol. */

import type { NewsItem } from "../../news";

export const FR_NEWS_C: NewsItem[] = [

  /* ═══ C1 · 1 — Société ═══ */
  {
    id: "fr-news-c1-01", cat: "societa", level: "C1", place: "Paris", minutes: 5,
    title: "Le bistrot : un parlement avec des comptoirs",
    titleEs: "El bistrot: un parlamento con mostradores",
    lead: {
      it: "La France compte des dizaines de milliers de bistrots, et les sociologues commencent à les étudier comme des institutions : des lieux où l'on paie peu pour rester longtemps — et où, sans le savoir, on légifère.",
      es: "Francia cuenta decenas de miles de bistrós, y los sociólogos empiezan a estudiarlos como instituciones: lugares donde se paga poco por quedarse mucho tiempo — y donde, sin saberlo, se legisla.",
    },
    paragraphs: [
      { it: "Un bistrot parait simple : un comptoir, des chaises, une machine à café et un patron qui connaît les prénoms. Les chercheurs y voient autre chose : une des dernières enceintes françaises où toutes les classes se croient obligées de se croiser. Le banquier et l'électricien y boivent le même petit noir, au même prix, debout au même barreau de cuivre — et c'est peut-être la seule houra de la journée où leur égalité ne fait débat pour personne.",
      es: "Un bistró parece simple: un mostrador, sillas, una cafetera y un dueño que conoce los nombres. Los investigadores ven otra cosa: uno de los últimos recintos franceses donde todas las clases se creen obligadas a cruzarse. El banquero y el electricista beben allí el mismo café corto, al mismo precio, de pie en la misma barra de latón — y quizás es la única hora del día en que su igualdad no se discute para nadie." },
      { it: "La conversation, elle, suit des règles non écrites que tout le monde respecte. Le premier verre est social ; le second, politique ; le troisième, personnel — et il est rare, parce que le comptoir a une pudeur. On peut y dire « je ne comprends rien à ce pays » à un inconnu ; on ne peut pas y demander « combien tu gagnes » à un ami. Les habitués résument le code en une phrase : « Au bistrot, tout se dit. Rien ne se demande. »",
      es: "La conversación sigue reglas no escritas que todos respetan. El primer vaso es social; el segundo, político; el tercero, personal — y es raro, porque el mostrador tiene pudor. Allí se puede decir «no entiendo nada de este país» a un desconocido; no se puede preguntar «cuánto ganas» a un amigo. Los habituales resumen el código en una frase: «En el bistró todo se dice. Nada se pregunta.»" },
      { it: "Le temps a fait des bistrots une espèce menacée et protégée, comme les vieilles races de chiens. Les grandes surfaces ont tué l'épicerie ; Internet a tué le journal du matin ; mais le bistrot résiste, pour une raison que les économistes avouent à demi-mot : il ne vend pas seulement du café, il vend du temps commun — une denrée introuvable en ligne, qui ne se livre pas et ne se stocke pas.",
      es: "El tiempo hizo de los bistrós una especie amenazada y protegida, como las viejas razas de perros. Los supermercados mataron la tienda de barrio; Internet mató el periódico de la mañana; pero el bistró resiste, por una razón que los economistas confiesan a medias: no vende solo café, vende tiempo común — una mercancía intraducible en línea, que no se reparte ni se almacena." },
      { it: "Les politiques l'ont compris avant les chercheurs : tout candidat commence sa campagne au comptoir, tasse à la main, parce que l'image dit « des gens comme vous » mieux que n'importe quel discours. Les philosophes y viennent après, pour la même raison que tout le monde : parce qu'au bistrot, contrairement à l'université, l'objection est immédiate et le désaccord, servi chaud.",
      es: "Los políticos lo entendieron antes que los investigadores: todo candidato empieza su campaña en el mostrador, taza en mano, porque la imagen dice «gente como tú» mejor que cualquier discurso. Los filósofos llegan después, por la misma razón que todos: porque en el bistró, a diferencia de la universidad, la objeción es inmediata y el desacuerdo, servido caliente." },
      { it: "Un patron de la rue Oberkampf, interrogé sur la fonction de son établissement, a donné la définition que les manuels reprennent désormais : « Ici, on ne vend pas du café. On loue une chaise au prix du café. Le client croit boire ; en réalité, il siège. Et il siège, monsieur, dans la dernière assemblée où la France parle encore debout. »",
      es: "Un dueño de la rue Oberkampf, preguntado por la función de su local, dio la definición que los manuales ya repiten: «Aquí no se vende café. Se alquila una silla al precio del café. El cliente cree que bebe; en realidad, ocupa un escaño. Y ocupa un escaño, señor, en la última asamblea donde Francia todavía habla de pie.»" },
    ],
    words: [
      { it: "le comptoir", es: "el mostrador, la barra" },
      { it: "le barreau de cuivre", es: "el riel de latón (de la barra)" },
      { it: "la pudeur", es: "el pudor" },
      { it: "une denrée", es: "una mercancía" },
      { it: "introuvable", es: "inasequible, que no se encuentra" },
      { it: "l'objection", es: "la objeción" },
      { it: "siéger", es: "ocupar un escaño (figurado)" },
    ],
    questions: [
      { q: "¿Qué ven los investigadores en el bistrot?", options: ["Un commerce comme les autres", "Une des dernières enceintes où toutes les classes se croient obligées de se croiser : banquier et électricien au même barreau", "Un musée", "Un bureau"], answer: 1, why: "«Une des dernières enceintes françaises où toutes les classes se croient obligées de se croiser. Le banquier et l'électricien y boivent le même petit noir, au même prix.»" },
      { q: "¿Cuáles son las reglas de la conversación?", options: ["Tout se demande, rien ne se dit", "Premier verre social, second politique, troisième personnel — rare, parce que le comptoir a une pudeur", "On ne parle jamais", "On parle seulement du temps"], answer: 1, why: "«Le premier verre est social ; le second, politique ; le troisième, personnel — et il est rare, parce que le comptoir a une pudeur.»" },
      { q: "¿Por qué resiste el bistrot, según los economistas?", options: ["Parce que le café est meilleur", "Parce qu'il ne vend pas seulement du café : il vend du temps commun, introuvable en ligne, qui ne se livre pas et ne se stocke pas", "Parce que c'est protégé par la loi", "Par hasard"], answer: 1, why: "«Il ne vend pas seulement du café, il vend du temps commun — une denrée introuvable en ligne, qui ne se livre pas et ne se stocke pas.»" },
      { q: "¿Por qué empiezan los candidatos su campaña en el mostrador?", options: ["Parce que le café est gratuit", "Parce que l'image dit «des gens comme vous» mieux que n'importe quel discours", "Parce que c'est obligatoire", "Parce que les journaux sont là"], answer: 1, why: "«Tout candidat commence sa campagne au comptoir, tasse à la main, parce que l'image dit «des gens comme vous» mieux que n'importe quel discours.»" },
      { q: "¿Qué definición dio el patrón de la rue Oberkampf?", options: ["«On ne vend pas du café. On loue une chaise au prix du café… la dernière assemblée où la France parle encore debout.»", "«Le bistrot est fini.»", "«Ici, on mange vite.»", "«Le café est un prétexte.»"], answer: 0, why: "«On loue une chaise au prix du café. Le client croit boire ; en réalité, il siège… dans la dernière assemblée où la France parle encore debout.»" },
    ],
    discuss: [
      { it: "«Tout se dit. Rien ne se demande.» Que diriez-vous à un inconnu au comptoir — et jamais en ligne ?", es: "«Todo se dice. Nada se pregunta.» ¿Qué dirías a un desconocido en la barra — y nunca en línea?" },
      { it: "Votre ville a-t-elle son «parlement avec des comptoirs» ? Décrivez-le en français.", es: "¿Tu ciudad tiene su «parlamento con mostradores»? Descríbelo en francés." },
    ],
  },

  /* ═══ C1 · 2 — Culture ═══ */
  {
    id: "fr-news-c1-02", cat: "cultura", level: "C1", place: "Cannes", minutes: 5,
    title: "Le festival : douze jours qui gouvernent une année",
    titleEs: "El festival: doce días que gobiernan un año",
    lead: {
      it: "Une petite ville du sud devient, chaque mois de mai, la capitale momentanée du cinéma mondial. Les films y sont des prétextes ; ce qui s'y échange, c'est la valeur des douze mois suivants.",
      es: "Una pequeña ciudad del sur se convierte, cada mes de mayo, en la capital momentánea del cine mundial. Las películas allí son pretextos; lo que se intercambia es el valor de los doce meses siguientes.",
    },
    paragraphs: [
      { it: "Le monde voit les photographies : tapis rouge, escaliers, mains applaudissant. Les professionnels voient autre chose : la plus grande bourse du cinéma, un marché où les films s'achètent avant d'exister, où les territoires s'arbitrent au petit déjeuner et où une phrase lâchée sur un yacht vaut un contrat signé à Paris trois semaines plus tard. Le festival est une pièce en trois actes : la compétition, qui fait l'histoire ; le marché, qui fait l'économie ; et la fête, qui fait la légende.",
      es: "El mundo ve las fotografías: alfombra roja, escalinatas, manos aplaudiendo. Los profesionales ven otra cosa: la mayor bolsa del cine, un mercado donde las películas se compran antes de existir, donde los territorios se arbitran en el desayuno y donde una frase soltada en un yate vale un contrato firmado en París tres semanas después. El festival es una pieza en tres actos: la competencia, que hace la historia; el mercado, que hace la economía; y la fiesta, que hace la leyenda." },
      { it: "La compétition, elle, obéit à une mécanique précise. Vingt films environ, choisis dans le secret, montent les marches ; un jury de neuf personnes décide, au nom d'un goût qui sera contesté quel qu'il soit. La règle non écrite est connue des cinéphiles : le palmarès déçoit toujours, parce qu'il ne peut récompenser que la moitié des films qu'on lui a fait aimer. Les gagnants gagnent deux fois : un trophée le soir, et une carrière le lendemain.",
      es: "La competencia obedece a una mecánica precisa. Unos veinte filmes, elegidos en secreto, suben las escaleras; un jurado de nueve personas decide, en nombre de un gusto que será discutido sea cual sea. La regla no escrita es conocida por los cinéfilos: el palmarés siempre decepciona, porque solo puede premiar la mitad de las películas que le hicieron amar. Los ganadores ganan dos veces: un trofeo de noche, y una carrera a la mañana siguiente." },
      { it: "Les villes du monde entier copient le modèle, avec des fortunes diverses, et le modèle leur résiste — pour une raison géographique que les consultants n'écrivent jamais : le festival n'est pas un événement dans une ville ; c'est une ville transformée en événement. Les habitants en sont les figurants consentants : ils prêtent leurs rues, leurs terrasses et leur lumière, et reçoivent en échange une irritante fierté qu'ils jurent ne pas éprouver.",
      es: "Las ciudades del mundo copian el modelo, con fortunas diversas, y el modelo les resiste — por una razón geográfica que los consultores nunca escriben: el festival no es un evento en una ciudad; es una ciudad transformada en evento. Los habitantes son los figurantes consentidores: prestan sus calles, sus terrazas y su luz, y reciben a cambio una irritante vanidad que juran no sentir." },
      { it: "Les critiques de l'institution sont anciennes et souvent justes : la beauté y côtoie la corruption douce, l'art y finance la vanité, et l'argent fait parfois semblant d'être du goût. Les défenseurs répondent par la seule arme qu'ils possèdent : la programmation d'un mois de mai. Car le festival, au fond, se défend comme les bistrots et les bibliothèques — par ce qui s'y passe quand même, malgré tout, une fois par an.",
      es: "Las críticas a la institución son antiguas y a menudo justas: la belleza convive allí con la corrupción suave, el arte financia la vanidad, y el dinero a veces finge ser gusto. Los defensores responden con la única arma que poseen: la programación de un mes de mayo. Porque el festival, al fondo, se defiende como los bistrós y las bibliotecas — por lo que ocurre allí de todos modos, a pesar de todo, una vez al año." },
      { it: "Un hôtelier de la croisette, à la fin d'une édition, a livré le bilan que les rapports officiels cherchent encore : « Douze jours par an, cette ville devient ce qu'elle est le reste du temps : la seule au monde où le monde entier vient perdre. Ici, tout le monde repart sans le trophée — et tout le monde revient. C'est ça, le cinéma. »",
      es: "Un hotelero del paseo marítimo, al final de una edición, entregó el balance que los informes oficiales todavía buscan: «Doce días al año, esta ciudad se convierte en lo que es el resto del tiempo: la única del mundo donde el mundo entero viene a perder. Aquí todos se van sin el trofeo — y todos vuelven. Eso es el cine.»" },
    ],
    words: [
      { it: "le palmarès", es: "el palmarés" },
      { it: "une bourse", es: "una bolsa (de comercio)" },
      { it: "les marches", es: "las escalinatas (de acceso)" },
      { it: "la croisette", es: "el paseo marítimo (de Cannes)" },
      { it: "côtoyer", es: " convivir con, codearse con" },
      { it: "la corruption douce", es: "la corrupción suave" },
      { it: "un figurant", es: "un figurante" },
    ],
    questions: [
      { q: "¿Qué ven los profesionales que el mundo no ve?", options: ["Des photographies", "La plus grande bourse du cinéma : les films s'y achètent avant d'exister, les territoires s'arbitrent au petit déjeuner", "Des plages", "Des touristes"], answer: 1, why: "«Les professionnels voient autre chose : la plus grande bourse du cinéma, un marché où les films s'achètent avant d'exister…»" },
      { q: "¿Cuáles son los tres actos del festival?", options: ["La plage, l'hôtel, la nuit", "La compétition (l'histoire), le marché (l'économie), la fête (la légende)", "Les photos, les interviews, les fuites", "L'ouverture, le milieu, la fin"], answer: 1, why: "«Le festival est une pièce en trois actes : la compétition, qui fait l'histoire ; le marché, qui fait l'économie ; et la fête, qui fait la légende.»" },
      { q: "¿Por qué «el palmarés siempre decepciona»?", options: ["Parce que le jury est partial", "Parce qu'il ne peut récompenser que la moitié des films qu'on lui a fait aimer", "Parce que les billets coûtent cher", "Parce qu'il pleut"], answer: 1, why: "«Le palmarès déçoit toujours, parce qu'il ne peut récompenser que la moitié des films qu'on lui a fait aimer.»" },
      { q: "¿Qué razón geográfica explica que el modelo resista?", options: ["La ville est trop petite", "Le festival n'est pas un événement dans une ville : c'est une ville transformée en événement, avec les habitants comme figurants consentants", "Il y a trop de plages", "Les hôtels sont chers"], answer: 1, why: "«Le festival n'est pas un événement dans une ville ; c'est une ville transformée en événement. Les habitants en sont les figurants consentants.»" },
      { q: "¿Cómo se defiende el festival, según la noticia?", options: ["Par son budget", "Par sa programmation — par ce qui s'y passe quand même, malgré tout, une fois par an", "Par ses avocats", "Par sa tradition"], answer: 1, why: "«Le festival… se défend comme les bistrots et les bibliothèques — par ce qui s'y passe quand même, malgré tout, une fois par an.»" },
    ],
    discuss: [
      { it: "«Tout le monde repart sans le trophée — et tout le monde revient.» Pourquoi revient-on, selon vous ?", es: "«Todos se van sin el trofeo — y todos vuelven.» ¿Por qué se vuelve, según tú?" },
      { it: "Une «ville transformée en événement» : en connaissez-vous une autre ? Racontez-la en français.", es: "Una «ciudad transformada en evento»: ¿conoces otra? Cuéntala en francés." },
    ],
  },

  /* ═══ C1 · 3 — Économie ═══ */
  {
    id: "fr-news-c1-03", cat: "economia", level: "C1", place: "Paris", minutes: 5,
    title: "Le fromage : une économie qui se protège par le nom",
    titleEs: "El queso: una economía que se protege por el nombre",
    lead: {
      it: "En France, un fromage peut être poursuivi en justice pour son nom. Derrière cette bizarrerie juridique se cache un système économique redoutable : des siècles de savoir-faire convertis en exclusivité.",
      es: "En Francia, un queso puede ser demandado por su nombre. Detrás de esa rareza jurídica se esconde un sistema económico temible: siglos de saber hacer convertidos en exclusividad.",
    },
    paragraphs: [
      { it: "Le principe est né d'un désastre. Au dix-neuvième siècle, le vin se falsifiait à grande échelle ; les producteurs honnêtes faisaient faute ensemble avec les fripouilles. La réponse fut juridique et presque poétique : attacher la valeur au lieu, au nom et au cahier des charges — un nom qui dit d'où vient le produit, comment il est fait, et qui a le droit de le faire. Le fromage suivit : un village, une vache, une cave, une règle.",
      es: "El principio nació de un desastre. En el siglo diecinueve, el vino se falsificaba a gran escala; los productores honestos quebraban juntos con los tramposos. La respuesta fue jurídica y casi poética: atar el valor al lugar, al nombre y al pliego de condiciones — un nombre que dice de dónde viene el producto, cómo se hace y quién tiene derecho a hacerlo. El queso siguió: un pueblo, una vaca, una cueva, una regla." },
      { it: "Le système français en a fait une industrie de la protection. Des comités rédigent des normes de plusieurs centaines de pages ; des inspecteurs mesurent le diamètre des meules, la profondeur des caves et la date de traite ; et un producteur espagnol ou américain qui vend « le même » fromage sous le même nom s'expose à des tribunaux. Les consommateurs n'y comprennent rien — et c'est précisément le point : le nom travaille à leur place.",
      es: "El sistema francés hizo de ello una industria de la protección. Comités redactan normas de varios cientos de páginas; inspectores miden el diámetro de las ruedas, la profundidad de las cuevas y la fecha de ordeño; y un productor español o estadounidense que vende «el mismo» queso con el mismo nombre se expone a los tribunales. Los consumidores no entienden nada — y es exactamente el punto: el nombre trabaja en su lugar." },
      { it: "Les résultats économiques sont réels et mesurables : les zones protégées gardent leurs usines quand les autres les perdent, les villages gardent leurs bergers, et les prix résistent aux crises mieux que les actions. Les économistes parlent de « rente de nom » — une rente que l'on ne peut ni imprimer ni délocaliser, et qui ne vaut que par la promesse tenue. Le jour où la meule triche, le nom entier s'effondre : la protection est aussi une prison.",
      es: "Los resultados económicos son reales y medibles: las zonas protegidas conservan sus fábricas cuando las demás las pierden, los pueblos conservan a sus pastores, y los precios resisten las crisis mejor que las acciones. Los economistas hablan de «renta de nombre» — una renta que no se puede imprimir ni deslocalizar, y que solo vale por la promesa cumplida. El día en que la rueda hace trampa, el nombre entero se derrumba: la protección es también una cárcel." },
      { it: "Les critiques du système existent, et elles sont sérieuses : la protection peut devenir un club fermé qui étouffe les petits producteurs locaux au profit des grandes maisons ; la norme peut figer un produit vivant ; et le consommateur paie parfois le nom plus cher que le goût. La controverse est ouverte dans chaque cave du pays — entre les générations, précisément, comme toutes les bonnes controverses.",
      es: "Las críticas al sistema existen, y son serias: la protección puede volverse un club cerrado que asfixia a los pequeños productores en provecho de las grandes casas; la norma puede congelar un producto vivo; y el consumidor a veces paga el nombre más caro que el sabor. La controversia está abierta en cada cueva del país — entre las generaciones, precisamente, como todas las buenas controversias." },
      { it: "Un affineur du Jura, devant ses centaines de meules, a livré la définition que les écoles de commerce citent désormais : « Un fromage protégé, c'est une promesse avec une adresse. Si la promesse ment, l'adresse brûle. Toute l'économie du nom tient dans cette phrase — et dans la patience des bactéries, qui, elles, n'ont jamais signé aucun cahier des charges. »",
      es: "Un afinador del Jura, frente a sus cientos de ruedas, entregó la definición que las escuelas de negocios ahora citan: «Un queso protegido es una promesa con dirección. Si la promesa miente, la dirección arde. Toda la economía del nombre cabe en esa frase — y en la paciencia de las bacterias, que jamás firmaron pliego alguno.»" },
    ],
    words: [
      { it: "le savoir-faire", es: "el saber hacer" },
      { it: "le cahier des charges", es: "el pliego de condiciones" },
      { it: "la meule", es: "la rueda (de queso)" },
      { it: "l'affineur", es: "el afinador (madurador de quesos)" },
      { it: "une rente de nom", es: "una renta de nombre" },
      { it: "délocaliser", es: "deslocalizar" },
      { it: "étouffer", es: "asfixiar" },
    ],
    questions: [
      { q: "¿De qué desastre nació el principio?", options: ["Une guerre", "La falsification du vin au dix-neuvième siècle : les producteurs honnêtes faisaient faute avec les fripouilles", "Une inondation", "Une mode"], answer: 1, why: "«Au dix-neuvième siècle, le vin se falsifiait à grande échelle ; les producteurs honnêtes faisaient faute ensemble avec les fripouilles. La réponse fut juridique : attacher la valeur au lieu, au nom et au cahier des charges.»" },
      { q: "¿Qué miden los inspectores?", options: ["Le poids des tourists", "Le diamètre des meules, la profondeur des caves et la date de traite", "La hauteur des étagères", "Rien"], answer: 1, why: "«Des inspecteurs mesurent le diamètre des meules, la profondeur des caves et la date de traite.»" },
      { q: "¿Qué es la «rente de nom»?", options: ["Un impôt", "Une rente que l'on ne peut ni imprimer ni délocaliser, et qui ne vaut que par la promesse tenue", "Une subvention", "Un crédit"], answer: 1, why: "«Les économistes parlent de «rente de nom» — une rente que l'on ne peut ni imprimer ni délocaliser, et qui ne vaut que par la promesse tenue.»" },
      { q: "¿Cuáles son las críticas serias al sistema?", options: ["Il n'y en a pas", "La protection peut devenir un club fermé qui étouffe les petits, la norme peut figer un produit vivant, et le consommateur paie parfois le nom plus cher que le goût", "Les fromages sont mauvais", "Les prix sont trop bas"], answer: 1, why: "«La protection peut devenir un club fermé qui étouffe les petits producteurs… la norme peut figer un produit vivant… le consommateur paie parfois le nom plus cher que le goût.»" },
      { q: "¿Qué definición dio el afinador del Jura?", options: ["«Un fromage protégé, c'est une promesse avec une adresse. Si la promesse ment, l'adresse brûle.»", "«Le fromage est un business.»", "«Tout fromage se vaut.»", "«Les normes sont inutiles.»"], answer: 0, why: "«Toute l'économie du nom tient dans cette phrase — et dans la patience des bactéries, qui, elles, n'ont jamais signé aucun cahier des charges.»" },
    ],
    discuss: [
      { it: "Un produit de votre pays qui mériterait «une promesse avec une adresse» : lequel, et pourquoi ?", es: "Un producto de tu país que merecería «una promesa con dirección»: ¿cuál, y por qué?" },
      { it: "Payer le nom plus cher que le goût : vous l'avez déjà fait ? Avouez.", es: "Pagar el nombre más caro que el sabor: ¿ya te pasó? Confiesa." },
    ],
  },

  /* ═══ C2 · 1 — Culture ═══ */
  {
    id: "fr-news-c2-01", cat: "cultura", level: "C2", place: "Paris", minutes: 6,
    title: "L'Académie : quarante fauteuils qui défendent une langue assise",
    titleEs: "La Academia: cuarenta sillones que defienden una lengua sentada",
    lead: {
      it: "Au bord de la Seine, quarante personnes élues à vie se réunissent pour décider de la sorte des mots. Le monde s'en moque ; la langue, elle, s'en souvient.",
      es: "A la orilla del Sena, cuarenta personas elegidas a vitalicio se reúnen para decidir la suerte de las palabras. El mundo se burla de ello; la lengua, en cambio, lo recuerda.",
    },
    paragraphs: [
      { it: "L'institution est un anachronisme assumé, et c'est sa force. Créée par un cardinal au dix-septième siècle pour « donner des règles certainies à notre langue » — la langue de qui, au juste, demandent les historiens ; celle de la cour, répondent les archives — l'Académie a survécu à la cour qui l'avait fait naître, aux régimes qui l'ont tourmentée et aux prophètes qui l'enterrent chaque génération. Elle survit de la seule manière dont survivent les institutions : en changeant lentement, et en jurant ne pas changer.",
      es: "La institución es un anacronismo asumido, y esa es su fuerza. Creada por un cardenal en el siglo diecisiete para «dar reglas seguras a nuestra lengua» — ¿la lengua de quién, exactamente?, preguntan los historiadores; la de la corte, responden los archivos—, la Academia sobrevivió a la corte que la hizo nacer, a los regímenes que la atormentaron y a los profetas que la entierran cada generación. Sobrevive de la única manera en que sobreviven las instituciones: cambiando despacio, y jurando no cambiar." },
      { it: "Le travail des Immortels, comme on les appelle, a un objet plus étroit et plus étrange qu'on ne le dit : non pas défendre le français contre l'anglais — bataille perdue d'avance, et l'Académie le sait mieux que ses pamphlétaireurs —, mais décider de l'orthographe, du genre des mots et de la tournure des phrases officielles. Le résultat tient en un dictionnaire que la France entière ignore et que l'école entière suit : l'État écrit « événement » avec ou sans accent, et c'est là-haut que cela se décide.",
      es: "El trabajo de los Inmortales, así se les llama, tiene un objeto más estrecho y extraño de lo que se dice: no defender el francés contra el inglés —batalla perdida de antemano, y la Academia lo sabe mejor que sus panfletistas—, sino decidir la ortografía, el género de las palabras y el giro de las frases oficiales. El resultado cabe en un diccionario que toda Francia ignora y que toda la escuela sigue: el Estado escribe «événement» con o sin acento, y es allí arriba donde se decide." },
      { it: "Le rapport de la France à ses mots a quelque chose de religieux sans dieu. On n'y jure pas ; on y consacre. Les querelles d'orthographe y prennent la place des guerres de religion, avec la même violence en miniature : des lettres majuscules, des accents circonflexes, des rectifications votées que personne n'applique. Un académicien défunt résumait la fonction de la maison d'une phrase que la grille du dictionnaire reprend en exergue : « Nous ne gouvernons pas la langue. Nous la pleurons en avance — et le monde écrit quand même. »",
      es: "La relación de Francia con sus palabras tiene algo de religioso sin dios. No se jura; se consagra. Las querellas de ortografía ocupan el lugar de las guerras de religión, con la misma violencia en miniatura: letras mayúsculas, acentos circunflejos, reformas votadas que nadie aplica. Un académico difunto resumía la función de la casa con una frase que la portada del diccionario repite como lema: «No gobernamos la lengua. La lloramos por adelantado — y el mundo escribe igualmente.»" },
      { it: "Ce que les moqueurs oublient, c'est que la langue française a une particularité statistique rare : elle se parle surtout hors de France, par des peuples qui n'attendent rien de la Seine — et c'est peut-être là, paradoxalement, que le dictionnaire travaille le plus. Un professeur de Dakar enseigne « quand même » à des élèves qui le diront toute leur vie ; une romancière de Montréal écrit un roman qui gagnera le prix que l'Académie décerne — et elle écrira, à la fin, remerciement inclus, une phrase dans la langue des quarante fauteuils, en les remerciant de l'avoir laissée vivante.",
      es: "Lo que los burladores olvidan es que la lengua francesa tiene una rareza estadística: se habla sobre todo fuera de Francia, por pueblos que no esperan nada del Sena — y es quizás allí, paradójicamente, donde el diccionario más trabaja. Un profesor de Dakar enseña «quand même» a alumnos que lo dirán toda su vida; una novelista de Montreal escribe una novela que ganará el premio que la Academia otorga — y escribirá, al final, agradecimiento incluido, una frase en la lengua de los cuarenta sillones, agradeciéndoles haberla dejado viva." },
      { it: "Et le futur ? Il ressemble à tous les futurs des institutions : plus petit, plus lent, plus ridiculisé — et toujours là. La langue, pendant ce temps, fait ce qu'elle a toujours fait : elle emprunte, elle mélange, elle oublie les règles et en invente d'autres, pendant que quarante personnes, au bord du fleuve, prennent des notes. Un grammairien du vingtième siècle a laissé le mot de la fin : « L'Académie croit garder la langue. C'est la langue qui garde l'Académie — par charité, et pour avoir quelqu'un à contredire. »",
      es: "¿Y el futuro? Se parece a todos los futuros de las instituciones: más pequeño, más lento, más ridiculizado — y todavía allí. La lengua, mientras tanto, hace lo que siempre ha hecho: pide prestado, mezcla, olvida las reglas e inventa otras, mientras cuarenta personas, a la orilla del río, toman notas. Un gramático del siglo veinte dejó la última palabra: «La Academia cree guardar la lengua. Es la lengua la que guarda a la Academia — por caridad, y para tener a quién contradecir.»" },
    ],
    words: [
      { it: "un anachronisme", es: "un anacronismo" },
      { it: "les Immortels", es: "los Inmortales (académicos)" },
      { it: "le pamphlétaireur", es: "el panfletista" },
      { it: "l'accent circonflexe", es: "el acento circunflejo" },
      { it: "en exergue", es: "como lema, en exergo" },
      { it: "décerner", es: "otorgar (un premio)" },
      { it: "par charité", es: "por caridad" },
    ],
    questions: [
      { q: "¿Qué ha sobrevivido la Academia, según la noticia?", options: ["À rien, elle est morte", "À la cour qui l'avait fait naître, aux régimes qui l'ont tourmentée et aux prophètes qui l'enterrent chaque génération", "Aux élections", "Aux ordinateurs"], answer: 1, why: "«L'Académie a survécu à la cour qui l'avait fait naître, aux régimes qui l'ont tourmentée et aux prophètes qui l'enterrent chaque génération.»" },
      { q: "¿Cuál es el verdadero y «más estrecho» objeto de su trabajo?", options: ["Défendre le français contre l'anglais", "Décider de l'orthographe, du genre des mots et de la tournure des phrases officielles", "Écrire des romans", "Faire la loi"], answer: 1, why: "«Non pas défendre le français contre l'anglais… mais décider de l'orthographe, du genre des mots et de la tournure des phrases officielles.»" },
      { q: "¿Qué particularidad estadística tiene el francés?", options: ["Il se parle surtout en France", "Il se parle surtout hors de France, par des peuples qui n'attendent rien de la Seine", "Il disparaît", "Il n'a pas de dictionnaire"], answer: 1, why: "«Elle se parle surtout hors de France, par des peuples qui n'attendent rien de la Seine — et c'est peut-être là que le dictionnaire travaille le plus.»" },
      { q: "¿Qué dejó dicho el académico difunto sobre la función de la casa?", options: ["«Nous gouvernons la langue.»", "«Nous ne gouvernons pas la langue. Nous la pleurons en avance — et le monde écrit quand même.»", "«La langue est finie.»", "«Nous écrivons tous les romans.»"], answer: 1, why: "«Nous la pleurons en avance — et le monde écrit quand même.»" },
      { q: "¿Cuál es «la última palabra» del gramático del siglo veinte?", options: ["«L'Académie garde la langue.»", "«C'est la langue qui garde l'Académie — par charité, et pour avoir quelqu'un à contredire.»", "«Il faut fermer l'Académie.»", "«Les mots sont libres.»"], answer: 1, why: "«C'est la langue qui garde l'Académie — par charité, et pour avoir quelqu'un à contredire.»" },
    ],
    discuss: [
      { it: "«Une promesse avec une adresse» s'appliquait au fromage ; «quelqu'un à contredire» s'applique à la langue. Qu'est-ce qui, dans votre langue, a besoin d'être contredit ?", es: "«Una promesa con dirección» valía para el queso; «alguien a quién contradecir» vale para la lengua. ¿Qué, en tu idioma, necesita ser contradecido?" },
      { it: "Votre langue a-t-elle son «bord de la Seine» — une institution qui prend des notes ? Décrivez-la.", es: "¿Tu lengua tiene su «orilla del Sena» — una institución que toma notas? Descríbela." },
    ],
  },

  /* ═══ C2 · 2 — Sciences ═══ */
  {
    id: "fr-news-c2-02", cat: "scienza", level: "C2", place: "Kourou", minutes: 6,
    title: "La fusée européenne part de la forêt, et la forêt s'en accommode",
    titleEs: "El cohete europeo parte de la selva, y la selva se lo consiente",
    lead: {
      it: "Pour lancer un satellite vers l'est, il faut de l'eau au bout de la terre. L'Europe a trouvé mieux : une forêt équatoriale au bord de l'Atlantique, et une ville qui vit avec un port spatial comme d'autres vivent avec une marée.",
      es: "Para lanzar un satélite hacia el este hace falta agua al borde de la tierra. Europa encontró algo mejor: una selva ecuatorial a la orilla del Atlántico, y una ciudad que vive con un puerto espacial como otras viven con una marea.",
    },
    paragraphs: [
      { it: "La géographie a ses ironies, et celle-ci vaut le voyage. La France, puissance modeste par la taille, possède — par le jeu des héritages et des traités — un morceau d'Amérique du Sud où la terre tourne plus vite qu'ailleurs. Car c'est cela, le secret imbécile et magnifique des bases de lancement : la planète n'est pas une sphère qui attend, c'est une fronde qui tourne, et l'équateur en est le bout. Lancer depuis les tropiques, c'est partir avec un cadeau de mille kilomètres-heure que les bases du nord paient en carburant.",
      es: "La geografía tiene sus ironías, y esta vale el viaje. Francia, potencia modesta en tamaño, posee —por el juego de las herencias y los tratados— un pedazo de América del Sur donde la tierra gira más rápido que en otras partes. Porque eso es el secreto tonto y magnífico de las bases de lanzamiento: el planeta no es una esfera que espera, es una honda que gira, y el ecuador es su punta. Lanzar desde los trópicos es partir con un regalo de mil kilómetros por hora que las bases del norte pagan en combustible." },
      { it: "L'installation, ensuite, a obéi à la logique des colonies spatiales : on a coupé la forêt le moins possible, posé les bâtiments le plus loin possible, et recruté la population d'alentour, qui se retrouva, du jour au lendemain, technicienne de l'espace sans avoir déménagé. Les enfants des villages apprennent aujourd'hui deux vocabulaires — celui des fleuves et celui des fusées — et les vieux disent, en souriant, que la forêt a été prévenue : elle recule d'un pas quand il y a du feu au ciel, puis revient.",
      es: "La instalación, después, obedeció a la lógica de las colonias espaciales: se taló la selva lo menos posible, se pusieron los edificios lo más lejos posible, y se reclutó a la población de los alrededores, que se encontró, de la noche a la mañana, siendo técnica espacial sin haberse mudado. Los niños de las aldeas aprenden hoy dos vocabularios — el de los ríos y el de los cohetes — y los viejos dicen, sonriendo, que la selva fue avisada: retrocede un paso cuando hay fuego en el cielo, y luego vuelve." },
      { it: "Les lancements rythment la vie comme des fêtes religieuses laïques. Les écoles s'arrêtent ; les marchés vident ; les pêcheurs tirent leurs barques au large, par tradition et par prudence ; et au compte à rebours, toute une région retient son souffle en comptant à voix haute — en français, et en créole, et dans les langues qu'aucune radio ne diffuse. Puis le ciel s'ouvre d'un coup, et la forêt, pendant quarante secondes, a la couleur du matin à trois heures de l'après-midi.",
      es: "Los lanzamientos marcan el ritmo de la vida como fiestas religiosas laicas. Las escuelas se detienen; los mercados se vacían; los pescadores alejan sus barcas, por tradición y por prudencia; y en la cuenta regresiva, una región entera contiene la respiración contando en voz alta — en francés, y en criollo, y en las lenguas que ninguna radio difunde. Luego el cielo se abre de golpe, y la selva, durante cuarenta segundos, tiene el color de la madrugada a las tres de la tarde." },
      { it: "Le bilan scientifique est à la mesure du paradoxe : l'Europe, continent sans un mètre de tropiques, envoie depuis la forêt des machines vers Jupiter, vers le Soleil et vers les points de Lagrange — ces endroits de l'espace où les gravités s'annulent et où l'on gare les télescopes. Et chaque fois, le calcul est le même : partir de la forêt coûte moins cher que de partir de la colère ; l'équateur pardonne aux fusées ce que les hautes latitudes leur font payer.",
      es: "El balance científico está a la altura de la paradoja: Europa, continente sin un metro de trópicos, manda desde la selva máquinas hacia Júpiter, hacia el Sol y hacia los puntos de Lagrange — esos lugares del espacio donde las gravedades se anulan y donde se estacionan los telescopios. Y cada vez, el cálculo es el mismo: partir de la selva cuesta menos que partir del enojo; el ecuador les perdona a los cohetes lo que las altas latitudes les hacen pagar." },
      { it: "Un ingénieur, au soir d'un lancement réussi, a laissé la phrase que la base garde depuis comme une devise : « Nous ne conquérons pas l'espace. Nous l'empruntons — par le chemin le plus proche de la terre, qui se trouve être le plus loin des hommes. Et quand la fusée part, il reste ici deux choses : une forêt qui n'a rien vu, et une population qui a tout vu, et qui n'a plus jamais tout à fait la même idée du ciel. »",
      es: "Un ingeniero, al caer la tarde de un lanzamiento exitoso, dejó la frase que la base guarda desde entonces como divisa: «No conquistamos el espacio. Lo pedimos prestado — por el camino más cercano a la tierra, que resulta ser el más lejos de los hombres. Y cuando el cohete parte, aquí quedan dos cosas: una selva que no vio nada, y una población que lo vio todo, y que ya nunca del todo tendrá la misma idea del cielo.»" },
    ],
    words: [
      { it: "une fronde", es: "una honda (arma antigua; figurado)" },
      { it: "le compte à rebours", es: "la cuenta regresiva" },
      { it: "au large", es: "mar adentro" },
      { it: "les points de Lagrange", es: "los puntos de Lagrange" },
      { it: "s'accommoder de", es: "consentir, resignarse con" },
      { it: "laïque", es: "laico" },
      { it: "à voix haute", es: "en voz alta" },
    ],
    questions: [
      { q: "¿Cuál es «el secreto tonto y magnífico» de las bases de lanzamiento?", options: ["Le climat", "La planète est une fronde qui tourne, et l'équateur en est le bout : lancer depuis les tropiques, c'est partir avec un cadeau de mille kilomètres-heure", "Le sable", "Les vents"], answer: 1, why: "«La planète… c'est une fronde qui tourne, et l'équateur en est le bout. Lancer depuis les tropiques, c'est partir avec un cadeau de mille kilomètres-heure que les bases du nord paient en carburant.»" },
      { q: "¿Cómo se instaló la base, según la noticia?", options: ["En coupant toute la forêt", "On a coupé la forêt le moins possible, posé les bâtiments le plus loin possible, et recruté la population d'alentour", "En déplaçant les villages", "Au bord de Paris"], answer: 1, why: "«On a coupé la forêt le moins possible, posé les bâtiments le plus loin possible, et recruté la population d'alentour, qui se retrouva technicienne de l'espace sans avoir déménagé.»" },
      { q: "¿Qué ocurre durante los lanzamientos?", options: ["Personne ne regarde", "Les écoles s'arrêtent, les marchés vident, les pêcheurs tirent leurs barques au large, et toute une région retient son souffle", "La forêt ferme les yeux", "Il n'y a pas de lancements"], answer: 1, why: "«Les écoles s'arrêtent ; les marchés vident ; les pêcheurs tirent leurs barques au large… au compte à rebours, toute une région retient son souffle.»" },
      { q: "¿Qué color tiene la selva durante cuarenta segundos?", options: ["Vert, comme toujours", "La couleur du matin à trois heures de l'après-midi", "Noire", "Rouge"], answer: 1, why: "«Le ciel s'ouvre d'un coup, et la forêt, pendant quarante secondes, a la couleur du matin à trois heures de l'après-midi.»" },
      { q: "¿Qué frase dejó el ingeniero como divisa?", options: ["«Nous conquérons l'espace.»", "«Nous ne conquérons pas l'espace. Nous l'empruntons — par le chemin le plus proche de la terre, qui se trouve être le plus loin des hommes.»", "La forêt est à nous.", "L'espace est français.»"], answer: 1, why: "«Nous l'empruntons — par le chemin le plus proche de la terre, qui se trouve être le plus loin des hommes. Et quand la fusée part, il reste ici deux choses : une forêt qui n'a rien vu, et une population qui a tout vu.»" },
    ],
    discuss: [
      { it: "«Une population qui a tout vu, et qui n'a plus jamais tout à fait la même idée du ciel.» Que change le ciel dans une vie ? Racontez.", es: "«Una población que lo vio todo, y que ya nunca del todo tendrá la misma idea del cielo.» ¿Qué cambia el cielo en una vida? Cuenta." },
      { it: "L'espace : emprunt ou conquête ? Choisissez un camp en français et défendez-le.", es: "El espacio: ¿préstamo o conquista? Elige un bando en francés y defiéndelo." },
    ],
  },

  /* ═══ C2 · 3 — Économie ═══ */
  {
    id: "fr-news-c2-03", cat: "economia", level: "C2", place: "Paris", minutes: 6,
    title: "Le luxe : l'industrie qui vend le temps inversé",
    titleEs: "El lujo: la industria que vende el tiempo invertido",
    lead: {
      it: "La France exporte des sacs au prix de voitures et des parfums au prix de repas. Les économistes appellent cela « le luxe » ; les artisans l'appellent autrement : le temps.",
      es: "Francia exporta bolsos al precio de coches y perfumes al precio de comidas. Los economistas lo llaman «el lujo»; los artesanos lo llaman de otra manera: el tiempo.",
    },
    paragraphs: [
      { it: "Le luxe moderne a commencé comme une réparation. Au dix-neuvième siècle, un emballeur parisien avait l'idée de mettre des initiales sur les malles : les clients partaient en bateau pour des mois, et les initiales disaient, sur les quais du monde entier, qui possédait quoi. Le commerce du signe était né — un commerce étrange, où la marchandise compte moins que ce qu'elle raconte, et où le prix n'est pas un coût mais une phrase : je peux.",
      es: "El lujo moderno empezó como una reparación. En el siglo diecinueve, un embalador parisino tuvo la idea de poner iniciales en los baúles: los clientes partían en barco durante meses, y las iniciales decían, en los muelles del mundo entero, quién poseía qué. El comercio del signo había nacido — un comercio extraño, donde la mercancía cuenta menos que lo que relata, y donde el precio no es un coste sino una frase: yo puedo." },
      { it: "L'industrie française en a fait une machine paradoxale. Elle vend, d'un côté, l'exception — un sac cousu par une main pendant vingt heures — et, de l'autre, la multiplicité : des millions d'objets identiques, distribués dans des boutiques identiques, de Tokyo à Paris, avec une discipline que les armées envient. Les artisans, au centre, font le travail que la machine a refusé : ils rabattent les coutures, polissent les cuirs, alignent les motifs, et transmettent, dans les ateliers, un savoir que les écoles ne savent pas enseigner — parce qu'il ne s'apprend qu'à côté.",
      es: "La industria francesa hizo de ello una máquina paradójica. Vende, por un lado, la excepción — un bolso cosido a mano durante veinte horas — y, por otro, la multiplicidad: millones de objetos idénticos, distribuidos en tiendas idénticas, de Tokio a París, con una disciplina que los ejércitos envidian. Los artesanos, al centro, hacen el trabajo que la máquina rechazó: doblan las costuras, pulen los cueros, alinean los motivos, y transmiten, en los talleres, un saber que las escuelas no saben enseñar — porque solo se aprende al lado." },
      { it: "Le paradoxe de ce commerce tient en une asymétrie : les usines ont délocalisé, mais pas les ateliers. La main qui coud ne peut pas s'envoyer ; le savoir-faire ne se brevète pas comme une machine, il se lègue comme une langue — par l'usage, la correction et l'oreille. Les maisons l'ont compris avant les économistes, et ont bâti leur stratégie sur cette matière première que la mondialisation ne sait pas déplacer : un geste. Le reste — le marketing, les défilés, les vitrines — est la mise en scène du geste, jamais le contraire.",
      es: "La paradoja de este comercio cabe en una asimetría: las fábricas se deslocalizaron, pero no los talleres. La mano que cose no se puede enviar; el saber hacer no se patenta como una máquina, se lega como una lengua — por el uso, la corrección y el oído. Las casas lo entendieron antes que los economistas, y construyeron su estrategia sobre esa materia prima que la globalización no sabe mover: un gesto. El resto — el marketing, los desfiles, las vitrinas — es la puesta en escena del gesto, nunca lo contrario." },
      { it: "Les critiques, bien sûr, ne manquent pas. Le luxe vend du rêve à ceux qui dorment mal ; il fabrique du désir pour des objets que le désir même rend banals ; et la surabondance des logos a produit l'effet inverse des initiales du dix-neuvième siècle : quand tout le monde peut, personne ne se distingue. Les maisons répondent en silence, en montant, encore, les prix — parce que le prix, dans ce métier, est la marchandise : l'objet n'est que le reçu.",
      es: "Las críticas, claro, no faltan. El lujo vende sueño a quienes duermen mal; fabrica deseo por objetos que el propio deseo vuelve banales; y la sobreabundancia de logotipos ha producido el efecto inverso de las iniciales del siglo diecinueve: cuando todos pueden, nadie se distingue. Las casas responden en silencio, subiendo, aún más, los precios — porque el precio, en este oficio, es la mercancía: el objeto es apenas el recibo." },
      { it: "Une ouvrière des ateliers, en fin de carrière, a laissé la définition que les patrons citent devant les investisseurs, et que les poètes citent ailleurs : « Vous croyez que nous vendons des sacs. Nous vendons le contraire : le temps que les autres n'ont pas. Vingt heures de main contre vingt ans de vie — voilà le compte, et personne, au fond, ne le lit dans le bon sens. »",
      es: "Una operaria de los talleres, al final de su carrera, dejó la definición que los dueños citan ante los inversores, y que los poetas citan en otra parte: «Creen que vendemos bolsos. Vendemos lo contrario: el tiempo que los demás no tienen. Veinte horas de mano contra veinte años de vida — esa es la cuenta, y nadie, al fondo, la lee en el sentido correcto.»" },
    ],
    words: [
      { it: "la malle", es: "el baúl" },
      { it: "le savoir-faire", es: "el saber hacer" },
      { it: "se léguer", es: "legarse" },
      { it: "délocaliser", es: "deslocalizar" },
      { it: "le défilé", es: "el desfile (de modas)" },
      { it: "le reçu", es: "el recibo" },
      { it: "au fond", es: "al fondo, en el fondo" },
    ],
    questions: [
      { q: "¿Cómo empezó el lujo moderno, según la noticia?", options: ["Comme une mode de cour", "Comme une réparation : un emballeur parisien mit des initiales sur les malles, et le commerce du signe naquit", "Comme une invention de banquiers", "Au vingtième siècle"], answer: 1, why: "«Le luxe moderne a commencé comme une réparation. Au dix-neuvième siècle, un emballeur parisien avait l'idée de mettre des initiales sur les malles… Le commerce du signe était né.»" },
      { q: "¿En qué consiste la máquina paradójica?", options: ["Elle vend seulement l'exception", "Elle vend d'un côté l'exception (un sac cousu pendant vingt heures) et de l'autre la multiplicité : des millions d'objets identiques partout dans le monde", "Elle vend seulement la multiplicité", "Elle ne vend rien"], answer: 1, why: "«Elle vend, d'un côté, l'exception… et, de l'autre, la multiplicité : des millions d'objets identiques, distribués dans des boutiques identiques, de Tokyo à Paris.»" },
      { q: "¿Qué es la «asimetría» de este comercio?", options: ["Les usines ont délocalisé, mais pas les ateliers : la main qui coud ne peut pas s'envoyer ; le savoir-faire se lègue comme une langue", "Les prix montent et descendent", "Les vendeurs gagnent plus que les artisans", "Rien"], answer: 0, why: "«Les usines ont délocalisé, mais pas les ateliers. La main qui coud ne peut pas s'envoyer ; le savoir-faire ne se brevète pas comme une machine, il se lègue comme une langue.»" },
      { q: "¿Qué efecto inverso han producido los logotipos?", options: ["Tout le monde se distingue", "Quand tout le monde peut, personne ne se distingue", "Les initiales reviennent", "Les prix baissent"], answer: 1, why: "«La surabondance des logos a produit l'effet inverse des initiales du dix-neuvième siècle : quand tout le monde peut, personne ne se distingue.»" },
      { q: "¿Por qué suben los precios, «en silencio»?", options: ["Parce que le luxe est cher à produire", "Parce que le prix, dans ce métier, est la marchandise : l'objet n'est que le reçu", "Parce que les clients sont riches", "Par tradition"], answer: 1, why: "«Le prix, dans ce métier, est la marchandise : l'objet n'est que le reçu.»" },
      { q: "¿Qué definición dejó la obrera de los talleres?", options: ["«Nous vendons des sacs très beaux.»", "«Nous vendons le contraire : le temps que les autres n'ont pas. Vingt heures de main contre vingt ans de vie — et personne ne le lit dans le bon sens.»", "«Le luxe est inutile.»", "«Les machines coudront mieux.»"], answer: 1, why: "«Vous croyez que nous vendons des sacs. Nous vendons le contraire : le temps que les autres n'ont pas. Vingt heures de main contre vingt ans de vie — voilà le compte, et personne, au fond, ne le lit dans le bon sens.»" },
    ],
    discuss: [
      { it: "«Vingt heures de main contre vingt ans de vie.» Lisez-vous ce compte dans le bon sens ? Expliquez votre lecture.", es: "«Veinte horas de mano contra veinte años de vida.» ¿Lees esta cuenta en el sentido correcto? Explica tu lectura." },
      { it: "Un objet de votre vie qui «ne se brevète pas, se lègue» : lequel ? Dites-le en français.", es: "Un objeto de tu vida que «no se patenta, se lega»: ¿cuál? Dilo en francés." },
    ],
  },
];
