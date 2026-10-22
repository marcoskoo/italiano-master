import type { CbClozeText } from "../../cambridge";

/* ═══ FR A1 · Lectures cloze — 3 por unidad (inferencia léxica) ═════
   Metodología v9.12: el texto en francés lleva marcadores {1} {2}… que
   el reproductor convierte en huecos; el estudiante deduce la palabra
   por el contexto. Campos: `.it` = francés (Francia), `.es` = español.
   Contextos: París, Lyon, Bordeaux, Nantes, Marseille, Lille. */

export const FR_CLOZE_A1: Record<string, CbClozeText[]> = {
  "fr-cu-a1-01": [
    {
      id: "cz-fr-a1-01-1", title: "L'e-mail de présentation", titleEs: "El correo de presentación", minutes: 2,
      paragraphs: [
        { it: "Salut à tous ! Je m'appelle Camille et je suis {1} Lyon, une ville connue pour sa gastronomie. Je suis {2} en économie à l'université. Je parle français, bien sûr, et j'étudie l'espagnol le soir.", es: "¡Hola a todos! Me llamo Camille y soy de Lyon, una ciudad conocida por su gastronomía. Soy estudiante de Economía en la universidad. Hablo francés, por supuesto, y estudio español por la noche." },
        { it: "Dans ma classe, il y a des étudiants de dix pays ! Notre {3} s'appelle Monsieur Martin. Il est très {4} et très patient avec nous. Le cours commence à neuf heures et je suis toujours à l'{5} : je déteste arriver en retard.", es: "¡En mi clase hay estudiantes de diez países! Nuestro profesor se llama Monsieur Martin. Es muy simpático y muy paciente con nosotros. La clase empieza a las nueve y yo siempre estoy puntual: odio llegar tarde." },
      ],
      gaps: [
        { options: ["à", "de", "en"], answer: 1, why: "«Je suis de Lyon» = origen: preposición de." },
        { options: ["professeure", "étudiante", "médecin"], answer: 1, why: "Estudia Economía en la universidad → estudiante." },
        { options: ["chien", "frère", "professeur"], answer: 2, why: "«Monsieur Martin» y da la clase → profesor." },
        { options: ["sympa", "triste", "en colère"], answer: 0, why: "«et très patient» confirma: simpático." },
        { options: ["heure", "table", "école"], answer: 0, why: "«je déteste arriver en retard» → à l'heure = puntual." },
      ],
    },
    {
      id: "cz-fr-a1-01-2", title: "À la fête de bienvenue", titleEs: "En la fiesta de bienvenida", minutes: 2,
      paragraphs: [
        { it: "C'est la fête de bienvenue de la fac. Léo s'approche d'une {1} et dit : «Bonjour ! Je m'appelle Léo. Et toi, comment tu t'appelles ?» La jeune fille sourit et {2} : «Je m'appelle Emma. Enchantée !»", es: "Es la fiesta de bienvenida de la facultad. Léo se acerca a una chica y dice: «¡Hola! Me llamo Léo. ¿Y tú, cómo te llamas?». La chica sonríe y responde: «Me llamo Emma. ¡Encantada!»" },
        { it: "Ils parlent de leurs {3} : Léo est de Marseille et Emma est de Nantes. «Tu es étudiante ici ?» demande Léo. «Oui, en {4}», répond Emma avec un sourire. À la fin de la soirée, ils échangent leurs numéros de {5} et se disent : «À demain !»", es: "Hablan de sus ciudades: Léo es de Marsella y Emma de Nantes. «¿Eres estudiante aquí?», pregunta Léo. «Sí, de Derecho», responde Emma con una sonrisa. Al final de la velada intercambian sus números de teléfono y se dicen: «¡Hasta mañana!»" },
      ],
      gaps: [
        { options: ["table", "fille", "porte"], answer: 1, why: "Se presenta a alguien en una fiesta → una chica." },
        { options: ["pleure", "s'endort", "répond"], answer: 2, why: "Su respuesta al saludo es presentarse → responde." },
        { options: ["villes", "chambres", "heures"], answer: 0, why: "Marsella y Nantes son ciudades." },
        { options: ["droit", "foot", "pizza"], answer: 0, why: "Se estudia una carrera; el fútbol y la pizza no." },
        { options: ["téléphone", "cuisine", "voiture"], answer: 0, why: "Los números que se intercambian son de teléfono." },
      ],
    },
    {
      id: "cz-fr-a1-01-3", title: "D'où viens-tu ?", titleEs: "¿De dónde eres?", minutes: 2,
      paragraphs: [
        { it: "Sofía est mexicaine, mais elle {1} à Paris maintenant. Dans sa classe de français, les étudiants viennent de {2} différents : il y a une Chinoise, un Brésilien et un Espagnol. La professeure demande : «Vous êtes d'où ?»", es: "Sofía es mexicana, pero vive en París ahora. En su clase de francés los estudiantes vienen de países diferentes: hay una china, un brasileño y un español. La profesora pregunta: «¿De dónde sois?»" },
        { it: "Chacun répond : «Je suis du Brésil», «Je suis d'Italie», «Je suis d'Espagne». Sofía dit : «Je suis {3}, de Mexico». La professeure est {4} : «Quelle classe internationale !» Après le cours, ils prennent un café ensemble. Sofía est {5} d'être à Paris : tout est nouveau pour elle.", es: "Cada uno responde: «Soy de Brasil», «Soy de Italia», «Soy de España». Sofía dice: «Soy mexicana, de la Ciudad de México». La profesora está contenta: «¡Qué clase tan internacional!». Después de clase toman un café juntos. Sofía está feliz de estar en París: todo es nuevo para ella." },
      ],
      gaps: [
        { options: ["habite", "quitte", "vend"], answer: 0, why: "Vive ahora en París: habiter." },
        { options: ["fruits", "livres", "pays"], answer: 2, why: "China, Brasil, España → países." },
        { options: ["française", "mexicaine", "allemande"], answer: 1, why: "Es de México → mexicana." },
        { options: ["contente", "fâchée", "malade"], answer: 0, why: "«Quelle classe internationale !» → está contenta." },
        { options: ["triste", "perdue", "heureuse"], answer: 2, why: "«tout est nouveau» y lo vive con ilusión → feliz." },
      ],
    },
  ],

  "fr-cu-a1-02": [
    {
      id: "cz-fr-a1-02-1", title: "La photo de famille", titleEs: "La foto de familia", minutes: 2,
      paragraphs: [
        { it: "Dimanche matin, c'est l'appel vidéo avec la famille. Alejandro montre une {1} sur son téléphone : «Voici mon père, ma mère et mes grands-parents.» Camille demande : «Tu as des frères et {2} ?»", es: "Domingo por la mañana, toca la videollamada con la familia. Alejandro muestra una foto en su móvil: «Aquí están mi padre, mi madre y mis abuelos». Camille pregunta: «¿Tienes hermanos?»" },
        { it: "«Oui, j'ai une sœur et un frère. Ma sœur a dix-neuf ans et mon frère a huit ans. — Ta sœur a l'air {3} ! — Oui, elle est très drôle. Mes parents ont un {4} avec deux chambres à Mexico. — Et vous avez un animal ? — Oui, nous avons un {5} : il s'appelle Max !»", es: "«Sí, tengo una hermana y un hermano. Mi hermana tiene diecinueve años y mi hermano, ocho. — ¡Tu hermana parece simpática! — Sí, es muy divertida. Mis padres tienen un piso con dos habitaciones en México. — ¿Y tenéis mascota? — ¡Sí, tenemos un perro: se llama Max!»" },
      ],
      gaps: [
        { options: ["photo", "lettre", "facture"], answer: 0, why: "Se muestra en el móvil con la familia dentro → foto." },
        { options: ["sœurs", "voitures", "cousins"], answer: 0, why: "«frères et sœurs» = hermanos y hermanas." },
        { options: ["sympa", "malade", "vieille"], answer: 0, why: "«elle est très drôle» → simpática." },
        { options: ["bureau", "appartement", "bateau"], answer: 1, why: "Con dos habitaciones → un piso." },
        { options: ["train", "gâteau", "chien"], answer: 2, why: "Es un animal y se llama Max → perro." },
      ],
    },
    {
      id: "cz-fr-a1-02-2", title: "L'apéro chez Camille", titleEs: "El apéro en casa de Camille", minutes: 3,
      paragraphs: [
        { it: "Samedi soir, Camille organise un apéro dans son appartement. Sur la table, il y a des chips, des {1} et du jus de fruits. Les amis arrivent vers dix-neuf heures et disent «Bonjour» à tout le {2}.", es: "Sábado por la noche, Camille organiza un apéro en su piso. Sobre la mesa hay patatas fritas, aceitunas y zumo de frutas. Los amigos llegan hacia las diecinueve y dicen «Bonjour» a todo el mundo." },
        { it: "Léo présente sa famille : «Mon père a un restaurant à Lyon et ma mère a une {3} de fleurs. Mes grands-parents ont une maison à la campagne avec un grand {4}.» Alex répond : «Ma famille me manque, mais j'ai de très bons {5} ici !»", es: "Léo presenta a su familia: «Mi padre tiene un restaurante en Lyon y mi madre una floristería. Mis abuelos tienen una casa en el campo con un gran jardín». Alex responde: «Echo de menos a mi familia, ¡pero tengo muy buenos amigos aquí!»" },
      ],
      gaps: [
        { options: ["olives", "chaussures", "livres"], answer: 0, why: "Está sobre la mesa del apéro: comida → aceitunas." },
        { options: ["métro", "monde", "quartier"], answer: 1, why: "Saludan a todos → a todo el mundo." },
        { options: ["boutique", "cuisine", "voiture"], answer: 0, why: "De flores → una tienda." },
        { options: ["balcon", "placard", "jardin"], answer: 2, why: "Una casa en el campo con un gran → jardín." },
        { options: ["amis", "problèmes", "valises"], answer: 0, why: "«pero aquí…» compensa la falta de la familia → amigos." },
      ],
    },
    {
      id: "cz-fr-a1-02-3", title: "Une grande famille française", titleEs: "Una familia francesa grande", minutes: 2,
      paragraphs: [
        { it: "Marc a une grande famille : ses parents, trois {1} et deux sœurs. Le dimanche, tout le monde déjeune chez les grands-parents, à {2}, autour d'une grande table. La grand-mère cuisine depuis le matin.", es: "Marc tiene una familia grande: sus padres, tres hermanos y dos hermanas. El domingo, todos almuerzan en casa de los abuelos, al mediodía, alrededor de una gran mesa. La abuela cocina desde la mañana." },
        { it: "Après le déjeuner, les enfants jouent dans le {3} et les adultes regardent le match ou dorment sur le canapé. Le dimanche soir, chacun {4} chez lui. «À la semaine prochaine !» dit la grand-mère. Elle adore ces {5} en famille.", es: "Después de comer, los niños juegan en el jardín y los adultos ven el partido o duermen en el sofá. El domingo por la noche, cada uno vuelve a su casa. «¡Hasta la semana que viene!», dice la abuela. Le encantan estos momentos en familia." },
      ],
      gaps: [
        { options: ["frères", "professeurs", "voisins"], answer: 0, why: "Con dos hermanas: los otros tres varones → hermanos." },
        { options: ["minuit", "midi", "trois heures"], answer: 1, why: "El almuerzo dominical es al mediodía." },
        { options: ["four", "garage", "jardin"], answer: 2, why: "Los niños juegan en el → jardín." },
        { options: ["rentre", "arrive", "voyage"], answer: 0, why: "Cada uno vuelve a su casa." },
        { options: ["moments", "courses", "examens"], answer: 0, why: "La abuela adora estos ___ en familia → momentos." },
      ],
    },
  ],

  "fr-cu-a1-03": [
    {
      id: "cz-fr-a1-03-1", title: "La première baguette à Bordeaux", titleEs: "La primera baguette en Burdeos", minutes: 3,
      paragraphs: [
        { it: "C'est la première fois qu'Alex commande seul dans une boulangerie de Bordeaux. Il attend son {1} dans la file, derrière une dame. La dame dit : «Bonjour ! Je voudrais une baguette tradition, s'il vous plaît.»", es: "Es la primera vez que Alex pide solo en una panadería de Burdeos. Espera su turno en la fila, detrás de una señora. La señora dice: «¡Buenos días! Quisiera una baguette tradition, por favor»." },
        { it: "Alex répète la même {2} : «Bonjour ! Une baguette et deux croissants, s'il vous plaît. — Et avec ça ?» demande la boulangère. «Rien d'autre, merci. Ça fait {3} ?» La boulangère répond : «Quatre euros soixante.» Alex paie et dit «Bonne {4} !» en sortant. Il est {5} de lui : sa première baguette en français !", es: "Alex repite la misma frase: «¡Buenos días! Una baguette y dos croissants, por favor. — ¿Algo más?», pregunta la panadera. «Nada más, gracias. ¿Cuánto es?». La panadera responde: «Cuatro euros sesenta». Alex paga y dice «¡Buen día!» al salir. Está orgulloso de sí mismo: ¡su primera baguette en francés!" },
      ],
      gaps: [
        { options: ["tour", "train", "café"], answer: 0, why: "Está en la fila → espera su turno." },
        { options: ["chanson", "phrase", "histoire"], answer: 1, why: "Repite el pedido entero → la misma frase." },
        { options: ["combien", "pourquoi", "comment"], answer: 0, why: "Pregunta el precio → ¿cuánto es?" },
        { options: ["nuit", "année", "journée"], answer: 2, why: "Saludo al salir de una tienda → buen día." },
        { options: ["fier", "honteux", "triste"], answer: 0, why: "Logró su primer pedido solo → orgulloso." },
      ],
    },
    {
      id: "cz-fr-a1-03-2", title: "Le rituel du Bonjour", titleEs: "El ritual del Bonjour", minutes: 2,
      paragraphs: [
        { it: "En France, entrer dans un {1} sans dire «Bonjour» est très impoli. La boulangère salue toujours la première : «Bonjour Madame !» Les clients {2} : «Bonjour !» et seulement après, ils commandent.", es: "En Francia, entrar en una tienda sin decir «Bonjour» es muy descortés. La panadera saluda siempre la primera: «¡Buenos días, señora!». Los clientes responden: «¡Buenos días!», y solo después piden." },
        { it: "Ce petit mot ouvre toutes les portes : dans le {3}, au marché, à la pharmacie. Les enfants français apprennent la règle très tôt : on dit «Bonjour», «s'il vous plaît» et «Merci». À la fin, on dit «Bonne {4}» ou «Au revoir». C'est simple, et tout le monde {5} avec le sourire.", es: "Esa pequeña palabra abre todas las puertas: en el metro, en el mercado, en la farmacia. Los niños franceses aprenden la regla muy pronto: se dice «Bonjour», «s'il vous plaît» y «Merci». Al final, se dice «¡Buen día!» o «Au revoir». Es sencillo, y todo el mundo responde con una sonrisa." },
      ],
      gaps: [
        { options: ["magasin", "jardin", "stade"], answer: 0, why: "El contexto es la panadería → una tienda." },
        { options: ["dorment", "répondent", "partent"], answer: 1, why: "Contestan al saludo antes de pedir." },
        { options: ["métro", "chambre", "garage"], answer: 0, why: "Lugar público donde también se saluda → el metro." },
        { options: ["pluie", "chance", "journée"], answer: 2, why: "Despedida de comercio → bonne journée." },
        { options: ["répond", "chante", "dort"], answer: 0, why: "Todos contestan con una sonrisa." },
      ],
    },
    {
      id: "cz-fr-a1-03-3", title: "Le petit-déjeuner à la française", titleEs: "El desayuno a la francesa", minutes: 2,
      paragraphs: [
        { it: "Le petit-déjeuner français est doux et sucré. On mange des tartines de beurre et de {1}, ou des céréales. Les enfants adorent le pain au chocolat, aussi appelé «chocolatine» dans le sud-ouest de la {2}.", es: "El desayuno francés es dulce. Se comen tostadas con mantequilla y mermelada, o cereales. Los niños adoran el pan de chocolate, llamado también «chocolatine» en el suroeste del país." },
        { it: "On boit du café, du thé ou du {3} au cacao. Le jus d'orange est aussi très populaire le matin. Attention : le {4} de la semaine est rapide, souvent debout dans la cuisine, très différent du petit-déjeuner anglais. Le week-end seulement, on prend le temps de {5} en famille.", es: "Se bebe café, té o leche con cacao. El zumo de naranja también es muy popular por la mañana. Ojo: el desayuno entre semana es rápido, a menudo de pie en la cocina, muy distinto del desayuno inglés. Solo el fin de semana se toma el tiempo de comer en familia." },
      ],
      gaps: [
        { options: ["confiture", "fromage", "sel"], answer: 0, why: "Tostadas dulces → mermelada." },
        { options: ["classe", "France", "table"], answer: 1, why: "El suroeste de un país → Francia." },
        { options: ["vin", "bouillon", "lait"], answer: 2, why: "Con cacao → leche." },
        { options: ["petit-déjeuner", "déjeuner", "dîner"], answer: 0, why: "«Le ___ de la semana, rápido y de pie» → desayuno." },
        { options: ["manger", "dormir", "courir"], answer: 0, why: "El fin de semana se come en familia con calma." },
      ],
    },
  ],

  "fr-cu-a1-04": [
    {
      id: "cz-fr-a1-04-1", title: "Perdu dans le Marais", titleEs: "Perdido en Le Marais", minutes: 3,
      paragraphs: [
        { it: "Alex se promène dans le Marais, un quartier très {1} avec des rues étroites. Soudain, il cherche la mairie du troisième arrondissement, mais il est {2}. Il s'approche d'une dame : «Excusez-moi de vous {3}, Madame. Je cherche la mairie.»", es: "Alex pasea por Le Marais, un barrio muy antiguo con calles estrechas. De repente busca el ayuntamiento del tercer distrito, pero está perdido. Se acerca a una señora: «Disculpe que le moleste, señora. Busco el ayuntamiento»." },
        { it: "«Pas de problème. Vous allez tout droit, puis à gauche au {4}. La mairie est en face du marché des Enfants Rouges, à côté d'une boulangerie. — C'est loin ? — Non, deux minutes à {5}. — Merci beaucoup, Madame !»", es: "«No hay problema. Vaya todo recto y luego a la izquierda en el cruce. El ayuntamiento está enfrente del mercado de los Niños Rojos, al lado de una panadería. — ¿Está lejos? — No, a dos minutos a pie. — ¡Muchas gracias, señora!»" },
      ],
      gaps: [
        { options: ["moderne", "ancien", "vide"], answer: 1, why: "Calles estrechas y medievales → antiguo." },
        { options: ["perdu", "riche", "pressé"], answer: 0, why: "Pide ayuda porque no encuentra el camino → perdido." },
        { options: ["téléphoner", "écrire", "déranger"], answer: 2, why: "Fórmula de cortesía: excusez-moi de vous déranger." },
        { options: ["carrefour", "supermarché", "aéroport"], answer: 0, why: "Se gira a la izquierda en el → cruce." },
        { options: ["voiture", "pied", "train"], answer: 1, why: "Dos minutos a → pie." },
      ],
    },
    {
      id: "cz-fr-a1-04-2", title: "Le marché des Enfants Rouges", titleEs: "El mercado de los Niños Rojos", minutes: 2,
      paragraphs: [
        { it: "Le marché des Enfants Rouges est le plus {1} marché couvert de Paris : il a plus de quatre cents ans. À l'intérieur, il y a des stands de cuisine italienne, marocaine et {2}. Les odeurs sont incroyables !", es: "El mercado de los Niños Rojos es el mercado cubierto más antiguo de París: tiene más de cuatrocientos años. Dentro hay puestos de cocina italiana, marroquí y japonesa. ¡Los olores son increíbles!" },
        { it: "Le week-end, il y a beaucoup de {3} : le marché est petit et très populaire. Les tables sont en bois et les clients mangent sur place. C'est le {4} parfait pour un déjeuner rapide et pas {5}, au cœur du Marais.", es: "El fin de semana hay mucha gente: el mercado es pequeño y muy popular. Las mesas son de madera y los clientes comen en el sitio. Es el lugar perfecto para un almuerzo rápido y no caro, en pleno Le Marais." },
      ],
      gaps: [
        { options: ["vieux", "grand", "cher"], answer: 0, why: "Más de cuatrocientos años → viejo." },
        { options: ["japonaise", "fermée", "bleue"], answer: 0, why: "Cocinas del mundo: italiana, marroquí y japonesa." },
        { options: ["vent", "pain", "monde"], answer: 2, why: "Pequeño y muy popular → mucha gente." },
        { options: ["endroit", "jour", "prix"], answer: 0, why: "Para un almuerzo → el lugar perfecto." },
        { options: ["grand", "cher", "vieux"], answer: 1, why: "Rápido y no caro." },
      ],
    },
    {
      id: "cz-fr-a1-04-3", title: "Un itinéraire parisien", titleEs: "Un itinerario parisino", minutes: 2,
      paragraphs: [
        { it: "Pour aller de la place de la République au canal Saint-Martin, c'est simple. D'abord, vous prenez la rue du Faubourg du Temple, tout {1}, pendant cinq minutes. Ensuite, vous tournez à {2} au cinéma.", es: "Para ir de la plaza de la República al canal Saint-Martin es sencillo. Primero, tome la rue du Faubourg du Temple, todo recto, durante cinco minutos. Luego, gire a la izquierda en el cine." },
        { it: "Vous arrivez directement au {3}. Il y a des cafés au bord de l'eau et des écluses. Le dimanche, la rue est {4} aux voitures et les Parisiens pique-niquent au bord du canal. C'est un coin très {5} de la ville.", es: "Llega directamente al canal. Hay cafés junto al agua y esclusas. El domingo la calle está cerrada a los coches y los parisinos hacen pícnic a la orilla del canal. Es un rincón muy popular de la ciudad." },
      ],
      gaps: [
        { options: ["bas", "droit", "seul"], answer: 1, why: "Dirección recta durante cinco minutos → tout droit." },
        { options: ["gauche", "maison", "nuit"], answer: 0, why: "Se gira a la izquierda en el cine." },
        { options: ["canal", "musée", "aéroport"], answer: 0, why: "Cafés junto al agua y esclusas → canal." },
        { options: ["fermée", "ouverte", "vendue"], answer: 0, why: "Los domingos se cierra a los coches." },
        { options: ["populaire", "ennuyeux", "industriel"], answer: 0, why: "Los parisinos lo eligen para el pícnic → popular." },
      ],
    },
  ],

  "fr-cu-a1-05": [
    {
      id: "cz-fr-a1-05-1", title: "Au marché d'Aligre", titleEs: "En el mercado de Aligre", minutes: 3,
      paragraphs: [
        { it: "Samedi matin, au marché d'Aligre, les vendeurs crient : «Les cerises sont belles !» Alex s'arrête au stand de fromage et dit : «Bonjour ! Je voudrais deux cents {1} de comté, s'il vous plaît.»", es: "Sábado por la mañana, en el mercado de Aligre, los vendedores gritan: «¡Las cerezas están preciosas!». Alex se para en el puesto de queso y dice: «¡Buenos días! Quisiera doscientos gramos de comté, por favor»." },
        { it: "«Voilà, ça fait quatre euros quarante. Autre {2} ?» Alex regarde les fruits : «Une {3} de cerises aussi, s'il vous plaît. C'est combien ? — Sept euros quatre-vingts. — Parfait !» Alex paie et {4} le fromage et les fruits dans son sac. Le marché est bruyant, coloré et très {5} : tout le monde parle fort !", es: "«Aquí tiene, son cuatro euros cuarenta. ¿Algo más?». Alex mira la fruta: «También una libra de cerezas, por favor. ¿Cuánto es? — Siete euros ochenta. — ¡Perfecto!». Alex paga y mete el queso y la fruta en su bolsa. El mercado es ruidoso, colorido y muy animado: ¡todo el mundo habla alto!" },
      ],
      gaps: [
        { options: ["litres", "grammes", "kilomètres"], answer: 1, why: "El queso se pesa → gramos." },
        { options: ["chose", "monde", "jour"], answer: 0, why: "Fórmula del vendedor: autre chose = ¿algo más?" },
        { options: ["livre", "photo", "rue"], answer: 0, why: "Medida del mercado para la fruta → une livre (500 g)." },
        { options: ["met", "mange", "perd"], answer: 0, why: "Guarda las compras en la bolsa." },
        { options: ["silencieux", "animé", "vide"], answer: 1, why: "Ruidoso y todo el mundo habla fuerte → animado." },
      ],
    },
    {
      id: "cz-fr-a1-05-2", title: "Les prix du marché", titleEs: "Los precios del mercado", minutes: 2,
      paragraphs: [
        { it: "Comprendre les prix au marché français demande un peu de maths. Le fromage se vend au {1} : «vingt-deux euros le kilo». Les fruits se vendent à la livre : une livre, c'est cinq cents {2}.", es: "Entender los precios en el mercado francés pide un poco de mates. El queso se vende al kilo: «veintidós euros el kilo». La fruta se vende a la libra: una libra son quinientos gramos." },
        { it: "Et les nombres ? Soixante-dix, quatre-vingts, quatre-vingt-dix : quatre-vingt-dix signifie «quatre-vingts plus dix». Le vendeur dit «neuf euros {3}» pour 9,50 €. On paie en espèces ou par {4}. Et à la fin, la formule magique : «Ce sera {5}, merci !»", es: "¿Y los números? Setenta, ochenta, noventa: quatre-vingt-dix significa 'cuatro-veintes más diez'. El vendedor dice «nueve euros cincuenta» para 9,50 €. Se paga en efectivo o con tarjeta. Y al final, la fórmula mágica: «Será todo, ¡gracias!»" },
      ],
      gaps: [
        { options: ["kilo", "mètre", "litre"], answer: 0, why: "«veintidós euros el kilo» → se vende al kilo." },
        { options: ["euros", "minutes", "grammes"], answer: 2, why: "Una libra son 500 → gramos." },
        { options: ["cent", "cinquante", "mille"], answer: 1, why: "9,50 € → cincuenta (centavos)." },
        { options: ["carte", "stylo", "vélo"], answer: 0, why: "En efectivo o con → tarjeta." },
        { options: ["tout", "loin", "beau"], answer: 0, why: "Fórmula de cierre de la compra: ce sera tout." },
      ],
    },
    {
      id: "cz-fr-a1-05-3", title: "La liste de courses", titleEs: "La lista de la compra", minutes: 2,
      paragraphs: [
        { it: "Alex prépare sa liste de {1} pour la semaine : du pain, du beurre, de la confiture, des œufs et du fromage. Le matin, il mange des tartines avec du beurre et de la {2}, comme un vrai Français.", es: "Alex prepara su lista de la compra para la semana: pan, mantequilla, mermelada, huevos y queso. Por la mañana come tostadas con mantequilla y mermelada, como un verdadero francés." },
        { it: "Au marché, il achète aussi une livre de {3} et une barquette de fraises. Le vendeur lui demande : «Avec ça ?» Alex répond : «Non merci, ce sera {4} pour aujourd'hui.» De retour à la maison, il range tout dans le {5} et prépare un sandwich pour le déjeuner.", es: "En el mercado compra también una libra de cerezas y una barqueta de fresas. El vendedor le pregunta: «¿Algo más?». Alex responde: «No, gracias, será todo por hoy». De vuelta en casa, lo guarda todo en la nevera y prepara un sándwich para comer." },
      ],
      gaps: [
        { options: ["courses", "vacances", "affaires"], answer: 0, why: "Pan, mantequilla, huevos → lista de la compra." },
        { options: ["moutarde", "confiture", "mayonnaise"], answer: 1, why: "Está en su lista y es dulce para las tostadas → mermelada." },
        { options: ["savon", "journaux", "cerises"], answer: 2, why: "Fruta que se compra a la libra → cerezas." },
        { options: ["tout", "rien", "bien"], answer: 0, why: "Cierre de la compra: será todo." },
        { options: ["réfrigérateur", "jardin", "salon"], answer: 0, why: "Guarda los alimentos frescos → nevera." },
      ],
    },
  ],

  "fr-cu-a1-06": [
    {
      id: "cz-fr-a1-06-1", title: "La journée d'Inès", titleEs: "El día de Inès", minutes: 3,
      paragraphs: [
        { it: "Inès est lyonnaise. Elle se {1} à six heures et demie et elle prend une douche rapide. Elle ne mange pas à la maison : elle boit un café à la {2} de la fac, debout, avant le cours de huit heures.", es: "Inès es lionesa. Se levanta a las seis y media y se ducha rápido. No come en casa: bebe un café en la máquina de la facultad, de pie, antes de la clase de las ocho." },
        { it: "À midi et demi, elle déjeune au {3} U avec ses amis : c'est le restaurant universitaire, moins cher qu'un café. L'après-midi, elle étudie à la bibliothèque. Le soir, elle {4} vers dix-huit heures et elle dîne avec sa famille à dix-neuf heures {5}.", es: "A las doce y media almuerza en el resto U con sus amigos: es el comedor universitario, más barato que un café. Por la tarde estudia en la biblioteca. Por la noche vuelve a casa hacia las dieciocho y cena con su familia a las diecinueve y media." },
      ],
      gaps: [
        { options: ["couche", "lève", "repose"], answer: 1, why: "Empieza el día a las 6:30 → se levanta." },
        { options: ["machine", "maison", "voiture"], answer: 0, why: "Café de pie en la facultad → en la máquina." },
        { options: ["resto", "ciné", "marché"], answer: 0, why: "El texto lo define: restaurante universitario → resto U." },
        { options: ["sort", "part", "rentre"], answer: 2, why: "Vuelve a casa hacia las 18 h." },
        { options: ["et demie", "pile", "moins le quart"], answer: 0, why: "19:30 → y media." },
      ],
    },
    {
      id: "cz-fr-a1-06-2", title: "Le rythme français", titleEs: "El ritmo francés", minutes: 2,
      paragraphs: [
        { it: "En France, la journée commence tôt. Le travail commence à huit heures ou neuf heures, et le {1} est sacré : entre midi et treize heures, tout le monde s'arrête pour manger. Dans les petites villes, les magasins {2} même pendant la pause.", es: "En Francia el día empieza temprano. El trabajo comienza a las ocho o las nueve, y la comida es sagrada: entre las doce y las trece todo el mundo para a comer. En las ciudades pequeñas, las tiendas cierran incluso durante la pausa." },
        { it: "Le dîner est tôt aussi : entre dix-neuf heures et vingt heures. Pour un Latino-Américain, c'est très {3} ! Au Mexique, on dîne à vingt-et-une heures ou plus tard. Les transports suivent ce rythme : le dernier {4} part vers une heure du matin. Finalement, on s'habitue vite à l'{5} à la française.", es: "La cena también es temprano: entre las diecinueve y las veinte. ¡Para un latinoamericano es muy temprano! En México se cena a las veintiuna o más tarde. Los transportes siguen este ritmo: el último metro sale hacia la una de la madrugada. Al final, uno se acostumbra rápido al horario a la francesa." },
      ],
      gaps: [
        { options: ["déjeuner", "dîner", "goûter"], answer: 0, why: "Entre las 12 y las 13 h → la comida." },
        { options: ["ouvrent", "ferment", "dansent"], answer: 1, why: "Durante la pausa → cierran." },
        { options: ["tard", "tôt", "normal"], answer: 1, why: "En México se cena mucho más tarde → temprano." },
        { options: ["métro", "avion", "bateau"], answer: 0, why: "Transporte urbano nocturno → metro." },
        { options: ["roman", "jeu", "emploi du temps"], answer: 2, why: "Ritmo diario de comidas y horarios → el horario." },
      ],
    },
    {
      id: "cz-fr-a1-06-3", title: "Ma journée à Lyon", titleEs: "Mi jornada en Lyon", minutes: 2,
      paragraphs: [
        { it: "Je m'appelle Alex et j'étudie à Lyon. Le matin, je me lève à six heures et {1} et je prends le métro à huit heures moins le quart. Mes cours commencent à huit heures {2} et finissent à midi. La bibliothèque est ouverte tout l'après-midi.", es: "Me llamo Alex y estudio en Lyon. Por la mañana me levanto a las seis y cuarto y tomo el metro a las ocho menos cuarto. Mis clases empiezan a las ocho en punto y terminan al mediodía. La biblioteca está abierta toda la tarde." },
        { it: "À midi et demi, je {3} au resto U avec Thomas. L'après-midi, j'étudie ou je me promène au bord du Rhône. Le soir, je rentre à la maison, je fais mes {4} et je dîne avec ma famille d'accueil à sept heures et demie. Avant de dormir, je {5} un peu la télé ou je lis.", es: "A las doce y media almuerzo en el resto U con Thomas. Por la tarde estudio o paseo junto al Ródano. Por la noche vuelvo a casa, hago mis deberes y ceno con mi familia de acogida a las siete y media. Antes de dormir veo un poco la tele o leo." },
      ],
      gaps: [
        { options: ["demie", "quart", "moins"], answer: 1, why: "6:15 → y cuarto." },
        { options: ["pile", "lentes", "douces"], answer: 0, why: "En punto → pile." },
        { options: ["dîne", "dors", "déjeune"], answer: 2, why: "12:30 → almuerza." },
        { options: ["devoirs", "courses", "valises"], answer: 0, why: "Tareas de estudiante → devoirs." },
        { options: ["achète", "regarde", "range"], answer: 1, why: "Ve un poco la tele antes de dormir." },
      ],
    },
  ],

  "fr-cu-a1-07": [
    {
      id: "cz-fr-a1-07-1", title: "Le parc de la Tête d'Or", titleEs: "El parque de la Tête d'Or", minutes: 3,
      paragraphs: [
        { it: "Samedi, il fait très beau à Lyon. Inès propose : «On va au parc de la Tête d'Or ? On peut faire du {1} sur le lac !» Thomas préfère faire du {2} avec ses amis : le parc est immense.", es: "Sábado, hace muy bueno en Lyon. Inès propone: «¿Vamos al parque de la Tête d'Or? ¡Se puede pasear en barca en el lago!». Thomas prefiere montar en bici con sus amigos: el parque es inmenso." },
        { it: "Sur l'herbe, les familles pique-niquent et les enfants regardent les {3} du zoo gratuit. Le parc est le lieu {4} des Lyonnais pour le sport et la détente. Alex s'assoit au bord du lac, ferme les yeux et écoute les {5}. «C'est la vie !» dit-il.", es: "Sobre la hierba, las familias hacen pícnic y los niños miran los animales del zoo gratuito. El parque es el lugar preferido de los lioneses para el deporte y el relax. Alex se sienta a la orilla del lago, cierra los ojos y escucha a los pájaros. «¡Esto es vida!», dice." },
      ],
      gaps: [
        { options: ["bateau", "ski", "cheval"], answer: 0, why: "En el lago → barca." },
        { options: ["ski", "vélo", "surf"], answer: 1, why: "En un parque inmenso se monta en bici; el esquí y el surf necesitan montaña y mar." },
        { options: ["animaux", "étoiles", "voitures"], answer: 0, why: "En el zoo → animales." },
        { options: ["détesté", "interdit", "préféré"], answer: 2, why: "Para el deporte y el relax → lugar preferido." },
        { options: ["voisins", "klaxons", "oiseaux"], answer: 2, why: "Junto al lago, con los ojos cerrados → pájaros." },
      ],
    },
    {
      id: "cz-fr-a1-07-2", title: "J'adore, je déteste", titleEs: "Me encanta, odio", minutes: 2,
      paragraphs: [
        { it: "Le week-end, chacun a ses préférences. Camille adore faire du footing le matin : «J'adore {1} dans le parc vide, très tôt. La ville est à moi !» Léo, lui, déteste le sport matinal : «Je {2} me lever tôt le samedi !»", es: "El fin de semana cada cual tiene sus preferencias. A Camille le encanta correr por la mañana: «Me encanta correr en el parque vacío, muy temprano. ¡La ciudad es mía!». Léo, en cambio, odia el deporte matinal: «¡Odio madrugar los sábados!»" },
        { it: "Inès adore cuisiner pour ses amis. «J'ai envie de faire un grand {3} ce soir !» Thomas adore les randonnées en montagne. Et vous ? Qu'est-ce que vous {4} faire le week-end ? Le sport, la lecture, la musique ? Chacun son {5} : l'important, c'est de se détendre.", es: "A Inès le encanta cocinar para sus amigos: «¡Tengo ganas de hacer una gran cena esta noche!». Thomas adora las rutas de montaña. ¿Y vosotros? ¿Qué os gusta hacer el finde? ¿Deporte, lectura, música? Cada cual a lo suyo: lo importante es relajarse." },
      ],
      gaps: [
        { options: ["courir", "dormir", "crier"], answer: 0, why: "Hace footing → correr." },
        { options: ["adore", "déteste", "aime"], answer: 1, why: "Contraste con Camille → odia." },
        { options: ["petit-déjeuner", "dîner", "match"], answer: 1, why: "Cocinar para los amigos esta noche → cena." },
        { options: ["mangez", "perdez", "aimez"], answer: 2, why: "Pregunta por gustos → os gusta." },
        { options: ["plaisir", "problème", "travail"], answer: 0, why: "Cada cual su → placer." },
      ],
    },
    {
      id: "cz-fr-a1-07-3", title: "Le dimanche en famille", titleEs: "El domingo en familia", minutes: 2,
      paragraphs: [
        { it: "Le dimanche français est un rituel. Le matin, tout le monde dort {1} : pas d'alarme ! Le petit-déjeuner est long, avec des viennoiseries. À midi, il y a souvent un grand {2} en famille : poulet rôti du marché ou plat mijoté.", es: "El domingo francés es un ritual. Por la mañana todo el mundo duerme hasta tarde: ¡sin alarma! El desayuno es largo, con bollería. Al mediodía suele haber un gran almuerzo en familia: pollo asado del mercado o un guiso lento." },
        { it: "L'après-midi, on se promène, on va au {3} ou on visite les grands-parents. Le soir arrive la petite mélancolie du «dimanche soir» : on prépare la semaine, on regarde un {4} sous une couverture, on mange des crêpes. Si un ami propose «on fait un truc dimanche {5} ?», c'est presque toujours cinéma et canapé !", es: "Por la tarde se pasea, se va al cine o se visita a los abuelos. Al anochecer llega la pequeña melancolía del «domingo por la noche»: se prepara la semana, se ve una película bajo una manta, se comen crepes. Si un amigo propone «¿hacemos algo el domingo noche?», ¡casi siempre es cine y sofá!" },
      ],
      gaps: [
        { options: ["tard", "tôt", "vite"], answer: 0, why: "Sin alarma → hasta tarde." },
        { options: ["examen", "déjeuner", "match"], answer: 1, why: "A mediodía en familia → almuerzo." },
        { options: ["cinéma", "bureau", "gymnase"], answer: 0, why: "Paseo, ___ o abuelos → cine." },
        { options: ["film", "meuble", "cours"], answer: 0, why: "Bajo una manta → película." },
        { options: ["matin", "midi", "soir"], answer: 2, why: "La melancolía del domingo ___ → soir." },
      ],
    },
  ],

  "fr-cu-a1-08": [
    {
      id: "cz-fr-a1-08-1", title: "Au bouchon lyonnais", titleEs: "En el bouchon lionés", minutes: 3,
      paragraphs: [
        { it: "Vendredi soir, Inès emmène Alex dans un bouchon, le restaurant traditionnel de Lyon. «Une {1} pour deux, s'il vous plaît», dit Inès. Le serveur, en tablier noir, apporte la carte et demande : «Vous voulez {2} quelque chose ?»", es: "Viernes por la noche, Inès lleva a Alex a un bouchon, el restaurante tradicional de Lyon. «Una mesa para dos, por favor», dice Inès. El camarero, con delantal negro, trae la carta y pregunta: «¿Queréis beber algo?»" },
        { it: "«Une carafe d'eau et un quart de beaujolais, s'il vous plaît.» Alex étudie la {3} : quenelles, salade lyonnaise, andouillette. «Je voudrais les quenelles», dit-il enfin. Le serveur note et dit : «Très bon {4} !» À la fin, Alex demande l'{5} : «C'était délicieux !»", es: "«Una jarra de agua y un cuarto de beaujolais, por favor». Alex estudia la carta: quenelles, ensalada lyonesa, andouillette. «Quisiera las quenelles», dice al fin. El camarero anota y dice: «¡Muy buena elección!». Al final, Alex pide la cuenta: «¡Estaba delicioso!»" },
      ],
      gaps: [
        { options: ["table", "chambre", "place"], answer: 0, why: "Para dos, en un restaurante → mesa." },
        { options: ["manger", "lire", "boire"], answer: 2, why: "Piden agua y vino → beber." },
        { options: ["carte", "lettre", "photo"], answer: 0, why: "Con los platos del menú → la carta." },
        { options: ["choix", "ami", "prix"], answer: 0, why: "El camarero aprueba la decisión → elección." },
        { options: ["heure", "adresse", "addition"], answer: 2, why: "Al final de la cena → la cuenta." },
      ],
    },
    {
      id: "cz-fr-a1-08-2", title: "La formule du soir", titleEs: "El menú de la noche", minutes: 2,
      paragraphs: [
        { it: "Dans beaucoup de restaurants français, il y a une «formule» ou un «menu» : entrée + plat, ou plat + {1}, à prix fixe. C'est souvent moins cher que les plats à la {2}. Alex compare les deux options sur la carte.", es: "En muchos restaurantes franceses hay una «formule» o un «menú»: entrada + plato, o plato + postre, a precio fijo. Suele ser más barato que los platos a la carta. Alex compara las dos opciones en la carta." },
        { it: "Alex choisit la formule à dix-huit euros : une salade, un plat du jour et un dessert. En France, le {3} est compris dans le prix («service compris») : le pourboire n'est pas obligatoire, on peut laisser quelques pièces ou {4}. «C'était parfait, merci !» dit Alex en payant. Le serveur répond : «Merci à vous, bonne {5} !»", es: "Alex elige el menú de dieciocho euros: una ensalada, un plato del día y un postre. En Francia el servicio está incluido en el precio («service compris»): la propina no es obligatoria, se pueden dejar unas monedas o redondear. «¡Ha estado perfecto, gracias!», dice Alex al pagar. El camarero responde: «Gracias a usted, ¡buena velada!»" },
      ],
      gaps: [
        { options: ["dessert", "tableau", "chaise"], answer: 0, why: "Entrada + plato, o plato + → postre." },
        { options: ["télé", "carte", "porte"], answer: 1, why: "Precio fijo frente a platos a la → carta." },
        { options: ["billet", "camion", "service"], answer: 2, why: "«Service compris» → el servicio." },
        { options: ["arrondir", "partir", "crier"], answer: 0, why: "Dejar unas monedas o → redondear." },
        { options: ["route", "chance", "soirée"], answer: 2, why: "Despedida del camarero al pagar → buena velada." },
      ],
    },
    {
      id: "cz-fr-a1-08-3", title: "Le serveur pressé", titleEs: "El camarero con prisa", minutes: 2,
      paragraphs: [
        { it: "Dans les cafés parisiens, les serveurs travaillent très {1} : ils portent dix tasses sur un plateau et crient les commandes. «Vous êtes prêts à {2} ?» demande le serveur à Alex, crayon en main.", es: "En los cafés parisinos los camareros trabajan rapidísimo: llevan diez tazas en una bandeja y gritan las comandas. «¿Estáis listos para pedir?», pregunta el camarero a Alex, lápiz en mano." },
        { it: "«Euh, je voudrais un croque-monsieur et un jus d'orange, s'il vous plaît.» Le serveur note {3} et part. Cinq minutes plus tard, il revient avec la commande. En France, on ne mange pas vite par obligation, mais le {4} du déjeuner est limité : beaucoup de bureaux ferment à quatorze heures. Alex mange tranquillement et savoure son {5}. Personne ne le presse.", es: "«Eh, quisiera un croque-monsieur y un zumo de naranja, por favor». El camarero anota todo y se va. Cinco minutos después vuelve con la comanda. En Francia no se come rápido por obligación, pero el tiempo de la comida es limitado: muchas oficinas cierran a las catorce. Alex come tranquilamente y saborea su café. Nadie lo apura." },
      ],
      gaps: [
        { options: ["vite", "lentement", "mal"], answer: 0, why: "Diez tazas en una bandeja → muy rápido." },
        { options: ["commander", "dormir", "payer"], answer: 0, why: "Lápiz en mano, listo para → pedir." },
        { options: ["tout", "rien", "personne"], answer: 0, why: "Anota el pedido completo → todo." },
        { options: ["temps", "prix", "menu"], answer: 0, why: "Las oficinas cierran a las 14 h → el tiempo." },
        { options: ["train", "départ", "café"], answer: 2, why: "Lo saborea sin prisa al final → su café." },
      ],
    },
  ],

  "fr-cu-a1-09": [
    {
      id: "cz-fr-a1-09-1", title: "Le billet de TGV", titleEs: "El billete del TGV", minutes: 3,
      paragraphs: [
        { it: "Alex est à la gare de Lyon, à Paris, pour un week-end à Marseille. Au guichet, il dit : «Bonjour ! Un {1} pour Marseille, s'il vous plaît. — Aller simple ou aller-{2} ?» demande l'agent.", es: "Alex está en la gare de Lyon, en París, para un fin de semana en Marsella. En la taquilla dice: «¡Buenos días! Un billete para Marsella, por favor. — ¿Solo ida o ida y vuelta?», pregunta el empleado." },
        { it: "«Un aller-retour : je reviens dimanche soir. — Le prochain TGV part à neuf heures et demie, {3} 12. — Le trajet dure combien de temps ? — Environ trois heures. — Parfait, je le prends.» Avant de monter dans le train, Alex {4} son billet à la machine orange : c'est obligatoire, sinon amende ! Dans le {5}, il trouve sa place et regarde la France défiler.", es: "«Ida y vuelta: vuelvo el domingo por la noche. — El próximo TGV sale a las nueve y media, andén 12. — ¿Cuánto dura el trayecto? — Unas tres horas. — Perfecto, me lo quedo». Antes de subir al tren, Alex valida su billete en la máquina naranja: ¡es obligatorio, si no, multa! En el tren encuentra su sitio y ve desfilar Francia." },
      ],
      gaps: [
        { options: ["sandwich", "billet", "manteau"], answer: 1, why: "En la taquilla de la estación → un billete." },
        { options: ["retour", "simple", "matin"], answer: 0, why: "Él responde «aller-retour» → vuelta." },
        { options: ["quai", "sac", "bureau"], answer: 0, why: "El número 12 es el del → andén." },
        { options: ["valide", "achète", "perd"], answer: 0, why: "Máquina naranja, obligatorio → valida." },
        { options: ["lac", "train", "marché"], answer: 1, why: "Encuentra su sitio → en el tren." },
      ],
    },
    {
      id: "cz-fr-a1-09-2", title: "La SNCF et le compostage", titleEs: "La SNCF y la validación", minutes: 2,
      paragraphs: [
        { it: "En France, les trains de la {1} relient les grandes villes : le TGV va très vite, jusqu'à trois cents kilomètres à l'{2}. Avant de monter, les voyageurs avec un billet papier doivent le {3} dans une petite machine orange.", es: "En Francia, los trenes de la SNCF conectan las grandes ciudades: el TGV va rapidísimo, hasta trescientos kilómetros por hora. Antes de subir, los viajeros con billete de papel deben validarlo en una pequeña máquina naranja." },
        { it: "C'est le «compostage». Un billet non composté peut entraîner une {4} ! Dans le train, le contrôleur passe et vérifie les billets. «Billet, s'il vous {5} !» Les voyageurs travaillent, dorment ou regardent le paysage. Enfin, le train freine doucement : «Marseille Saint-Charles, terminus !»", es: "Es el «compostage» (validación). ¡Un billete sin validar puede acarrear una multa! En el tren, el revisor pasa y comprueba los billetes. «Billete, ¡por favor!». Los viajeros trabajan, duermen o miran el paisaje. Por fin, el tren frena suavemente: «¡Marsella Saint-Charles, fin de trayecto!»" },
      ],
      gaps: [
        { options: ["SNCF", "métro", "poste"], answer: 0, why: "Los trenes franceses de larga distancia → SNCF." },
        { options: ["an", "heure", "fois"], answer: 1, why: "Velocidad por → hora." },
        { options: ["composter", "déchirer", "vendre"], answer: 0, why: "El párrafo siguiente lo define: compostage → validar." },
        { options: ["amende", "fête", "photo"], answer: 0, why: "Billete sin validar → multa." },
        { options: ["plaît", "voulez", "allez"], answer: 0, why: "Fórmula del revisor: billet s'il vous plaît." },
      ],
    },
    {
      id: "cz-fr-a1-09-3", title: "Le trajet Paris-Marseille", titleEs: "El trayecto París-Marsella", minutes: 2,
      paragraphs: [
        { it: "Le TGV quitte Paris à neuf heures et demie. À trois cents kilomètres à l'heure, la France défile derrière la {1} : champs, vaches, villages. Alex écoute une {2} de français pour réviser les nombres.", es: "El TGV deja París a las nueve y media. A trescientos kilómetros por hora, Francia desfila tras la ventanilla: campos, vacas, pueblos. Alex escucha una lección de francés para repasar los números." },
        { it: "À Marseille, il fait beau et chaud : la Méditerranée est toute proche. Alex descend du train, prend son {3} et sort de la gare. Il attend son amie Léa sur la grande {4} devant la gare. «Bienvenue à Marseille !» dit-elle avec un grand sourire. Premier arrêt : le Vieux-Port, bien sûr, pour un {5} au bord de l'eau.", es: "En Marsella hace bueno y calor: el Mediterráneo está cerquísima. Alex baja del tren, toma su bolsa y sale de la estación. Espera a su amiga Léa en la gran explanada frente a la estación. «¡Bienvenido a Marsella!», dice ella con una gran sonrisa. Primera parada: el Vieux-Port, claro, para un café junto al agua." },
      ],
      gaps: [
        { options: ["fenêtre", "porte", "table"], answer: 0, why: "El paisaje pasa tras la → ventanilla." },
        { options: ["robe", "leçon", "voiture"], answer: 1, why: "Para repasar los números → una lección." },
        { options: ["sac", "café", "taxi"], answer: 0, why: "Baja del tren con su → bolsa." },
        { options: ["place", "table", "scène"], answer: 0, why: "Gran explanada frente a la estación → plaza." },
        { options: ["café", "match", "congé"], answer: 0, why: "Primera parada junto al agua → un café." },
      ],
    },
  ],

  "fr-cu-a1-10": [
    {
      id: "cz-fr-a1-10-1", title: "La météo, sport national", titleEs: "La météo, el deporte nacional", minutes: 3,
      paragraphs: [
        { it: "En France, parler de la météo est un sport national. Dans l'ascenseur, chez le boulanger, au bureau : «Il fait {1} aujourd'hui, non ?» Tout le monde commente le ciel, la pluie, le vent.", es: "En Francia hablar del tiempo es un deporte nacional. En el ascensor, en la panadería, en la oficina: «Hoy está nublado, ¿no?». Todo el mundo comenta el cielo, la lluvia, el viento." },
        { it: "À la télévision, le {2} météo arrive vers vingt heures, après le journal. Les Français regardent la carte de France avec les {3} : soleil sur le sud, nuages sur la Bretagne. «Demain, il pleut à Nantes, comme {4} !» Le bulletin donne aussi les {5} : dix degrés à Paris, seize à Nice.", es: "En la tele, el parte del tiempo llega hacia las veinte, después del telediario. Los franceses miran el mapa de Francia con los símbolos: sol en el sur, nubes en la Bretaña. «Mañana llueve en Nantes, ¡como siempre!». El parte da también las temperaturas: diez grados en París, dieciséis en Niza." },
      ],
      gaps: [
        { options: ["gris", "grand", "lourd"], answer: 0, why: "Comentan lluvia y nubes → nublado (gris)." },
        { options: ["film", "bulletin", "match"], answer: 1, why: "Llega tras el telediario → el parte del tiempo." },
        { options: ["symboles", "prix", "billets"], answer: 0, why: "Sol y nubes en el mapa → símbolos." },
        { options: ["toujours", "jamais", "hier"], answer: 0, why: "En Nantes llueve a menudo → como siempre." },
        { options: ["températures", "chaussures", "horaires"], answer: 0, why: "Diez grados, dieciséis grados → temperaturas." },
      ],
    },
    {
      id: "cz-fr-a1-10-2", title: "Il pleut sur Nantes", titleEs: "Llueve sobre Nantes", minutes: 2,
      paragraphs: [
        { it: "Chloé regarde par la fenêtre : «Encore de la pluie !» À Nantes, en Bretagne, il pleut {1}, mais il ne neige presque jamais. Grâce à l'océan, il fait {2} en hiver : jamais très froid, jamais très chaud.", es: "Chloé mira por la ventana: «¡Otra vez lluvia!». En Nantes, en la Bretaña, llueve a menudo, pero casi nunca nieva. Gracias al océano, el invierno es templado: nunca muy frío, nunca mucho calor." },
        { it: "«Quelle est la meilleure {3} ici ?» demande Alex. «Le printemps ! répond Chloé. Il fait doux, les jours sont longs et il y a des {4} partout.» En été, la ville se vide : les Nantais partent à la mer ou à la montagne. Mais sous la pluie, Nantes reste {5} : les parapluies colorés illuminent les rues.", es: "«¿Cuál es la mejor estación aquí?», pregunta Alex. «¡La primavera!, responde Chloé. Hace templado, los días son largos y hay flores por todas partes». En verano la ciudad se vacía: los nanteses se van al mar o a la montaña. Pero bajo la lluvia, Nantes sigue siendo bonita: las sombrillas de colores iluminan las calles." },
      ],
      gaps: [
        { options: ["souvent", "jamais", "hier"], answer: 0, why: "«Encore de la pluie» → a menudo." },
        { options: ["glacial", "doux", "brûlant"], answer: 1, why: "Ni muy frío ni mucho calor → templado." },
        { options: ["saison", "raison", "maison"], answer: 0, why: "Primavera, verano → estación." },
        { options: ["fleurs", "nuages", "pierres"], answer: 0, why: "En primavera, por todas partes → flores." },
        { options: ["belle", "triste", "fermée"], answer: 0, why: "Las sombrillas la iluminan → bonita." },
      ],
    },
    {
      id: "cz-fr-a1-10-3", title: "Les quatre saisons", titleEs: "Las cuatro estaciones", minutes: 2,
      paragraphs: [
        { it: "La France a quatre saisons bien différentes. Au {1}, la nature se réveille : les jardins fleurissent et les terrasses de cafés se remplissent. En été, il fait très {2} dans le sud : trente-cinq degrés à Marseille !", es: "Francia tiene cuatro estaciones muy distintas. En primavera la naturaleza despierta: los jardines florecen y las terrazas de los cafés se llenan. En verano hace muchísimo calor en el sur: ¡treinta y cinco grados en Marsella!" },
        { it: "En automne, les feuilles tombent et les couleurs sont magnifiques, surtout dans les forêts de l'Est. En hiver, il fait froid et il neige dans les {3} : les Français partent au ski en février. Chaque saison a ses fans : «Moi, j'adore l'hiver», dit Léo. «Pas moi ! répond Camille. Moi, j'adore l'{4} et la plage !» Et toi, tu préfères quelle {5} ?", es: "En otoño caen las hojas y los colores son magníficos, sobre todo en los bosques del Este. En invierno hace frío y nieva en las montañas: los franceses se van a esquiar en febrero. Cada estación tiene sus fans: «Yo adoro el invierno», dice Léo. «¡Yo no!, responde Camille. ¡Yo adoro el verano y la playa!». ¿Y tú, qué estación prefieres?" },
      ],
      gaps: [
        { options: ["printemps", "cinéma", "bureau"], answer: 0, why: "La naturaleza despierta → primavera." },
        { options: ["froid", "chaud", "gris"], answer: 1, why: "35 grados → calor." },
        { options: ["montagnes", "plages", "rues"], answer: 0, why: "Nieve y esquí → montañas." },
        { options: ["hiver", "été", "automne"], answer: 1, why: "La playa → verano." },
        { options: ["saison", "question", "couleur"], answer: 0, why: "Cada una tiene sus fans → estación." },
      ],
    },
  ],

  "fr-cu-a1-11": [
    {
      id: "cz-fr-a1-11-1", title: "La chemise blanche", titleEs: "La camisa blanca", minutes: 3,
      paragraphs: [
        { it: "Dans une boutique du Marais, Alex cherche une {1} blanche pour un entretien. «Vous cherchez quelque chose en particulier ?» demande la vendeuse. «Oui, une chemise blanche, {2} M, s'il vous plaît.»", es: "En una boutique de Le Marais, Alex busca una camisa blanca para una entrevista. «¿Busca algo en particular?», pregunta la dependienta. «Sí, una camisa blanca, talla M, por favor»." },
        { it: "La vendeuse montre une belle chemise en coton et une autre en lin. «Je peux l'{3} ?» demande Alex. «Bien sûr, la cabine d'essayage est au fond, à {4}.» La chemise en lin est un peu grande, mais la taille S est parfaite. «Je la {5} !» dit Alex, content.", es: "La dependienta enseña una bonita camisa de algodón y otra de lino. «¿Puedo probármela?», pregunta Alex. «Claro, el probador está al fondo, a la derecha». La camisa de lino queda un poco grande, pero la talla S es perfecta. «¡Me la quedo!», dice Alex, contento." },
      ],
      gaps: [
        { options: ["chemise", "table", "valise"], answer: 0, why: "Para una entrevista → camisa (blanca)." },
        { options: ["pointure", "taille", "couleur"], answer: 1, why: "Ropa con letras S/M/L → talla (pointure es de zapato)." },
        { options: ["essayer", "acheter", "manger"], answer: 0, why: "Pregunta por el probador → probarse." },
        { options: ["droite", "rouge", "retard"], answer: 0, why: "Al fondo, a la → derecha." },
        { options: ["prends", "laisse", "perds"], answer: 0, why: "La talla S es perfecta → me la quedo." },
      ],
    },
    {
      id: "cz-fr-a1-11-2", title: "Les soldes du Marais", titleEs: "Las rebajas de Le Marais", minutes: 2,
      paragraphs: [
        { it: "En France, les {1} ont des dates fixes : janvier et juillet. Pendant six semaines, les prix baissent : moins trente, cinquante, même soixante-dix pour cent ! Dans le Marais, les boutiques sont {2} de clients.", es: "En Francia las rebajas tienen fechas fijas: enero y julio. Durante seis semanas los precios bajan: ¡treinta, cincuenta y hasta setenta por ciento menos! En Le Marais, las boutiques están llenas de clientes." },
        { it: "Alex regarde une veste à quatre-vingts euros : avec la remise, elle coûte seulement {3} euros. Mais attention aux pièges : parfois la taille n'est plus {4}, ou la couleur ne plaît pas. Alex essaie la veste : elle est parfaite. «Je la prends, c'est une bonne {5} !»", es: "Alex mira una chaqueta de ochenta euros: con el descuento cuesta solo cuarenta. Pero cuidado con las trampas: a veces la talla ya no está disponible o el color no convence. Alex se prueba la chaqueta: es perfecta. «Me la quedo, ¡es una ganga!»" },
      ],
      gaps: [
        { options: ["soldes", "vacances", "fêtes"], answer: 0, why: "Precios que bajan en enero y julio → rebajas." },
        { options: ["vides", "pleines", "fermées"], answer: 1, why: "Muchos clientes → llenas." },
        { options: ["quarante", "vingt", "cent"], answer: 0, why: "80 € con la mitad de descuento → 40." },
        { options: ["disponible", "rouge", "ouverte"], answer: 0, why: "Trampa típica: la talla ya no está disponible." },
        { options: ["affaire", "idée", "journée"], answer: 0, why: "Compra ventajosa → una ganga (bonne affaire)." },
      ],
    },
    {
      id: "cz-fr-a1-11-3", title: "La pointure et la taille", titleEs: "La pointure y la taille", minutes: 2,
      paragraphs: [
        { it: "En France, chaque type de produit a sa mesure. Pour les vêtements, on parle de {1} : S, M, L ou 38, 40, 42. Pour les chaussures, la vendeuse demande : «Quelle est votre {2} ?» Et pour le fromage, on commande en {3} !", es: "En Francia cada tipo de producto tiene su medida. Para la ropa se habla de talla: S, M, L o 38, 40, 42. Para los zapatos la dependienta pregunta: «¿Cuál es su talla de zapato?». ¡Y el queso se pide en gramos!" },
        { it: "Alex apprend tout ce vocabulaire au fil des boutiques. Dans le Marais, les vendeurs sont {4} et patients : «Je regarde seulement», dit-il poliment. La mode française est élégante et simple : une belle chemise blanche, un jean, une écharpe. «Vous avez le look {5} !» lui dit la vendeuse en riant.", es: "Alex aprende todo este vocabulario a medida que recorre las tiendas. En Le Marais los vendedores son simpáticos y pacientes: «Solo estoy mirando», dice con cortesía. La moda francesa es elegante y sencilla: una bonita camisa blanca, unos vaqueros, una bufanda. «¡Llevas un look muy francés!», le dice la dependienta riendo." },
      ],
      gaps: [
        { options: ["pointure", "taille", "heure"], answer: 1, why: "S, M, L, 38, 40, 42 para ropa → talla." },
        { options: ["pointure", "taille", "classe"], answer: 0, why: "Para zapatos → pointure." },
        { options: ["grammes", "litres", "mètres"], answer: 0, why: "Como en el mercado → en gramos." },
        { options: ["sympas", "pressés", "fâchés"], answer: 0, why: "«et patients» → simpáticos." },
        { options: ["espagnol", "français", "ancien"], answer: 1, why: "La moda francesa → look francés." },
      ],
    },
  ],

  "fr-cu-a1-12": [
    {
      id: "cz-fr-a1-12-1", title: "Mission : la journée parfaite", titleEs: "Misión: el día perfecto", minutes: 3,
      paragraphs: [
        { it: "Dernière semaine du cours à Paris. Camille et Léo lancent la mission finale : «Raconte-nous ta {1} parfaite à Paris !» Alex réfléchit et commence : «D'abord, le matin, je prends un croissant et un café dans une boulangerie du {2}.»", es: "Última semana del curso en París. Camille y Léo lanzan la misión final: «¡Cuéntanos tu día perfecto en París!». Alex piensa y empieza: «Primero, por la mañana, tomo un croissant y un café en una panadería del barrio»." },
        { it: "«Ensuite, je visite le musée du Louvre et je regarde la Joconde. Puis, vers midi et {3}, je déjeune dans un petit bistrot : je voudrais un croque-monsieur ! L'après-midi, je monte à la tour Eiffel : il y a une belle {4} sur la ville. Enfin, le soir, je fais un tour en {5} sur la Seine. C'est ma journée parfaite !»", es: "«Luego visito el museo del Louvre y miro la Gioconda. Después, hacia las doce y media, almuerzo en un pequeño bistrot: ¡quisiera un croque-monsieur! Por la tarde subo a la torre Eiffel: hay una vista preciosa de la ciudad. Por último, por la noche, doy un paseo en barco por el Sena. ¡Es mi día perfecto!»" },
      ],
      gaps: [
        { options: ["journée", "semaine", "nuit"], answer: 0, why: "De la mañana a la noche → día." },
        { options: ["quartier", "train", "pays"], answer: 0, why: "Una panadería del → barrio." },
        { options: ["demi", "quart", "heure"], answer: 0, why: "Doce y media → midi et demi." },
        { options: ["vue", "table", "porte"], answer: 0, why: "Desde la torre Eiffel → vista." },
        { options: ["bateau", "train", "vélo"], answer: 0, why: "Paseo por el Sena → en barco." },
      ],
    },
    {
      id: "cz-fr-a1-12-2", title: "Le métro de Paris", titleEs: "El metro de París", minutes: 2,
      paragraphs: [
        { it: "Pour sa journée parfaite, Alex prend le {1} parisien. Le métro a seize lignes et plus de trois cents stations : on va partout ! «Attention aux portes : elles se {2} tout seules !» dit une dame à un touriste distrait.", es: "Para su día perfecto, Alex toma el metro parisino. El metro tiene dieciséis líneas y más de trescientas estaciones: ¡se llega a todas partes! «Cuidado con las puertas: ¡se cierran solas!», dice una señora a un turista despistado." },
        { it: "Dans le métro, on dit «pardon» pour passer, on laisse {3} les gens avant d'entrer et on valide son ticket. Des musiciens jouent {4} : guitare, accordéon, violon. Alex descend à la station Palais-Royal et remonte dans la {5} : le Louvre est juste en face. Premier objectif de la mission : accompli !", es: "En el metro se dice «permiso» para pasar, se deja bajar a la gente antes de entrar y se valida el billete. Unos músicos tocan música: guitarra, acordeón, violín. Alex baja en la estación Palais-Royal y sube a la calle: el Louvre está justo enfrente. ¡Primer objetivo de la misión: cumplido!" },
      ],
      gaps: [
        { options: ["métro", "train", "tramway"], answer: 0, why: "Dieciséis líneas y estaciones → metro." },
        { options: ["ferment", "ouvrent", "dorment"], answer: 0, why: "«Attention aux portes» → se cierran." },
        { options: ["descendre", "monter", "courir"], answer: 0, why: "Cortesía: dejar ___ a la gente antes de entrar → bajar." },
        { options: ["de la musique", "du sport", "des maths"], answer: 0, why: "Guitarra, acordeón, violín → música." },
        { options: ["rue", "mer", "cave"], answer: 0, why: "Sale a la superficie → a la calle." },
      ],
    },
    {
      id: "cz-fr-a1-12-3", title: "La meilleure baguette de Paris", titleEs: "La mejor baguette de París", minutes: 2,
      paragraphs: [
        { it: "Chaque année, Paris organise un grand {1} : le concours de la meilleure baguette de la ville. Le gagnant a le droit de {2} son pain à l'Élysée, au président ! Les boulangers travaillent toute la {3} pour préparer leurs baguettes tradition.", es: "Cada año París organiza un gran concurso: el certamen de la mejor baguette de la ciudad. ¡El ganador tiene derecho a vender su pan en el Elíseo, al presidente! Los panaderos trabajan toda la noche para preparar sus baguettes tradition." },
        { it: "Le jury goûte et note : croustillante, dorée, bien cuite. Le vainqueur devient {4} dans tout le quartier : la file devant sa boulangerie double le week-end. Alex, lui, a sa boulangerie préférée au coin de sa rue. «Pour moi, c'est la {5} du monde !» dit-il en croquant sa baguette encore chaude.", es: "El jurado cata y puntúa: crujiente, dorada, bien horneada. El ganador se vuelve famoso en todo el barrio: la fila ante su panadería se duplica el fin de semana. Alex tiene su panadería favorita en la esquina de su calle. «Para mí, ¡es la mejor del mundo!», dice mordiendo su baguette todavía caliente." },
      ],
      gaps: [
        { options: ["concours", "film", "match"], answer: 0, why: "El certamen de la mejor baguette → concurso." },
        { options: ["jeter", "vendre", "cacher"], answer: 1, why: "Su pan al presidente → vender." },
        { options: ["nuit", "année", "matinée"], answer: 0, why: "Los panaderos preparan el pan de madrugada → toda la noche." },
        { options: ["inconnu", "discret", "célèbre"], answer: 2, why: "La fila se duplica → famoso." },
        { options: ["meilleure", "pire", "plus chère"], answer: 0, why: "Su panadería favorita → la mejor." },
      ],
    },
  ],
};
