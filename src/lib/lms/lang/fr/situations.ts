import type { Situation } from "../../types";

/* ── Situaciones reales FR · vocabulario → diálogo → role-play ─────
   Français de France: el campo `.it` contiene el francés y `.es` el
   español. Escenarios: boulangerie de quartier, terrasse de café,
   marché de Lyon, TGV Paris-Lyon, musée du Louvre y agence
   immobilière parisienne. Tipografía francesa: espacio antes de
   ? ! : ; y comillas « » con espacios. Intros y roleplays en
   español con tuteo / francés respectivamente.                   */

export const FR_SITUATIONS: Situation[] = [
  {
    id: "fr-sit-boulangerie", emoji: "🥖", title: "En la boulangerie", titleIt: "À la boulangerie du quartier", level: "A1",
    intro: "El rito matinal francés: la baguette, el croissant y el pequeño diálogo que lo acompaña.",
    vocab: [
      { it: "la baguette", es: "la barra de pan" },
      { it: "la tradition", es: "la baguette tradition (masa tradicional)" },
      { it: "le croissant", es: "el croissant" },
      { it: "le pain au chocolat", es: "el pain au chocolat (bollo de chocolate)" },
      { it: "la brioche", es: "la brioche" },
      { it: "la boulangère", es: "la panadera" },
      { it: "la monnaie", es: "el cambio (dinero devuelto)" },
      { it: "sorti(e) du four", es: "recién salido del horno" },
    ],
    dialogue: [
      { speaker: "Boulangère", it: "Bonjour ! Vous désirez ?", es: "¡Buenos días! ¿Qué desea?" },
      { speaker: "Client", it: "Bonjour madame ! Une tradition et deux croissants, s'il vous plaît.", es: "¡Buenos días, señora! Una tradition y dos croissants, por favor." },
      { speaker: "Boulangère", it: "Très bien. Ils sortent tout juste du four !", es: "Muy bien. ¡Acaban de salir del horno!" },
      { speaker: "Client", it: "Parfait ! Vous avez aussi un pain au chocolat ?", es: "¡Perfecto! ¿Tiene también un pain au chocolat?" },
      { speaker: "Boulangère", it: "Oui, bien sûr. Ça fera quatre euros trente.", es: "Sí, claro. Serán cuatro euros con treinta." },
      { speaker: "Client", it: "Voilà cinq euros. Merci, bonne journée !", es: "Aquí tiene cinco euros. ¡Gracias, buen día!" },
    ],
    exerciseIds: ["fr-ex-sit-boulangerie-1", "fr-ex-sit-boulangerie-2"],
    roleplay: {
      it: "Simulons une scène à la boulangerie : je suis le client et tu es la boulangère du quartier. Salue-moi et prends ma commande.",
      es: "Simulemos una escena en la boulangerie: yo soy el cliente y tú la panadera del barrio. Salúdame y toma mi pedido.",
    },
  },
  {
    id: "fr-sit-cafe", emoji: "☕", title: "En la terraza de un café", titleIt: "En terrasse de café", level: "A1",
    intro: "Sentarte en una terraza, pedir como los parisinos y pedir la cuenta sin equivocarte.",
    vocab: [
      { it: "la terrasse", es: "la terraza" },
      { it: "le comptoir", es: "la barra" },
      { it: "un expresso", es: "un espresso (café solo)" },
      { it: "le café allongé", es: "el café alargado (más agua)" },
      { it: "le serveur / la serveuse", es: "el camarero / la camarera" },
      { it: "l'addition", es: "la cuenta" },
      { it: "le pourboire", es: "la propina" },
      { it: "en salle", es: "en la sala (las mesas)" },
    ],
    dialogue: [
      { speaker: "Serveur", it: "Bonjour ! Vous prenez quelque chose ?", es: "¡Buenos días! ¿Va a tomar algo?" },
      { speaker: "Cliente", it: "Bonjour ! Un café allongé, s'il vous plaît.", es: "¡Buenos días! Un café alargado, por favor." },
      { speaker: "Serveur", it: "Au comptoir ou en terrasse ? C'est moins cher au comptoir.", es: "¿En la barra o en la terraza? En la barra es más barato." },
      { speaker: "Cliente", it: "En terrasse, il fait tellement beau aujourd'hui !", es: "En la terraza, ¡hace tan buen tiempo hoy!" },
      { speaker: "Serveur", it: "Parfait. Je vous apporte ça tout de suite.", es: "Perfecto. Se lo traigo enseguida." },
      { speaker: "Cliente", it: "Merci ! L'addition, s'il vous plaît. Gardez la monnaie.", es: "¡Gracias! La cuenta, por favor. Quédese el cambio." },
    ],
    exerciseIds: ["fr-ex-sit-cafe-1", "fr-ex-sit-cafe-2"],
    roleplay: {
      it: "Jeu de rôle : je m'installe en terrasse et tu es le serveur du café. Accueille-moi, prends ma commande et apporte-moi l'addition.",
      es: "Role-play: me siento en la terraza y tú eres el camarero del café. Recíbeme, toma mi pedido y tráeme la cuenta.",
    },
  },
  {
    id: "fr-sit-marche-lyon", emoji: "🧺", title: "El mercado de Lyon", titleIt: "Au marché de Lyon", level: "A2",
    intro: "Los mercados franceses: los productores, el poulet de Bresse, el saint-marcellin y el arte de elegir despacio.",
    vocab: [
      { it: "le marché", es: "el mercado" },
      { it: "l'étal", es: "el puesto" },
      { it: "le producteur / la productrice", es: "el productor / la productora" },
      { it: "le poulet de Bresse", es: "el pollo de Bresse" },
      { it: "le saint-marcellin", es: "el saint-marcellin (queso lyones)" },
      { it: "le primeur", es: "el frutero-verdulero" },
      { it: "goûter (à)", es: "probar" },
      { it: "le cabas", es: "el bolso de la compra" },
    ],
    dialogue: [
      { speaker: "Productrice", it: "Bonjour ! Qu'est-ce qu'il vous faut aujourd'hui ?", es: "¡Buenos días! ¿Qué necesita hoy?" },
      { speaker: "Client", it: "Bonjour ! Un kilo de pommes de la Drôme, s'il vous plaît.", es: "¡Buenos días! Un kilo de manzanas de la Drôme, por favor." },
      { speaker: "Productrice", it: "Les Reinettes sont délicieuses. Voulez-vous goûter ?", es: "Las Reineta están deliciosas. ¿Quiere probar?" },
      { speaker: "Client", it: "Volontiers… Hmm, très bonnes ! J'en prends deux kilos.", es: "Con mucho gusto… ¡Hmm, muy buenas! Me llevo dos kilos." },
      { speaker: "Productrice", it: "Et avec ça ? J'ai aussi des saint-marcellin bien affinés.", es: "¿Algo más? También tengo saint-marcellin bien curados." },
      { speaker: "Client", it: "Alors deux saint-marcellin. Ça fait combien en tout ?", es: "Pues dos saint-marcellin. ¿Cuánto es en total?" },
    ],
    exerciseIds: ["fr-ex-sit-marche-lyon-1", "fr-ex-sit-marche-lyon-2"],
    roleplay: {
      it: "Jeu de rôle : tu es client(e) au marché de la Croix-Rousse et je suis la productrice de l'étal. Demande-moi des fruits, goûte et achète.",
      es: "Role-play: eres cliente en el mercado de la Croix-Rousse y yo la productora del puesto. Pídeme fruta, prueba y compra.",
    },
  },
  {
    id: "fr-sit-tgv", emoji: "🚄", title: "El TGV París-Lyon", titleIt: "Le TGV Paris-Lyon", level: "A2",
    intro: "Comprar el billete, encontrar el andén en la gare de Lyon y no perderte nada del trayecto más famoso de Francia.",
    vocab: [
      { it: "le billet", es: "el billete" },
      { it: "l'aller-retour", es: "el billete de ida y vuelta" },
      { it: "le quai", es: "el andén" },
      { it: "la gare", es: "la estación" },
      { it: "la voiture", es: "el coche (vagón)" },
      { it: "la place assise", es: "el asiento reservado" },
      { it: "la voiture-bar", es: "el coche-bar" },
      { it: "le retard", es: "el retraso" },
    ],
    dialogue: [
      { speaker: "Voyageuse", it: "Bonjour, je voudrais un billet pour Lyon, s'il vous plaît.", es: "Buenos días, querría un billete para Lyon, por favor." },
      { speaker: "Agent", it: "Aller simple ou aller-retour ?", es: "¿Ida sola o ida y vuelta?" },
      { speaker: "Voyageuse", it: "Aller simple. À quelle heure part le prochain TGV ?", es: "Ida sola. ¿A qué hora sale el próximo TGV?" },
      { speaker: "Agent", it: "Le prochain part à quatorze heures, gare de Lyon, quai onze. Arrivée à la Part-Dieu à quinze heures cinquante-cinq.", es: "El próximo sale a las catorce, gare de Lyon, andén once. Llegada a la Part-Dieu a las quince cincuenta y cinco." },
      { speaker: "Voyageuse", it: "Parfait. Il y a une voiture-bar dans le train ?", es: "Perfecto. ¿Hay coche-bar en el tren?" },
      { speaker: "Agent", it: "Oui, la voiture-bar est en voiture cinq. Bon voyage !", es: "Sí, el coche-bar está en el coche cinco. ¡Buen viaje!" },
    ],
    exerciseIds: ["fr-ex-sit-tgv-1", "fr-ex-sit-tgv-2", "fr-ex-sit-tgv-3"],
    roleplay: {
      it: "Jeu de rôle : tu es agent(e) au guichet de la gare de Lyon et je suis voyageur. Je voudrais acheter un billet de TGV : aide-moi à choisir.",
      es: "Role-play: eres empleado/a de la taquilla de la gare de Lyon y yo viajero. Querría comprar un billete de TGV: ayúdame a elegir.",
    },
  },
  {
    id: "fr-sit-louvre", emoji: "🖼️", title: "En el Louvre", titleIt: "Au musée du Louvre", level: "B1",
    intro: "De la Pyramide a la Joconde: billetes, colas, alas del museo y el arte de no perderse en el palacio más grande del mundo.",
    vocab: [
      { it: "la billetterie", es: "la taquilla" },
      { it: "la file d'attente", es: "la cola" },
      { it: "l'entrée", es: "la entrada" },
      { it: "l'aile Denon", es: "el ala Denon" },
      { it: "la Joconde", es: "la Gioconda" },
      { it: "l'audioguide", es: "la audioguía" },
      { it: "l'exposition temporaire", es: "la exposición temporal" },
      { it: "le billet coupe-file", es: "el billete de acceso prioritario" },
    ],
    dialogue: [
      { speaker: "Visiteuse", it: "Bonjour, je voudrais deux billets pour le musée, s'il vous plaît.", es: "Buenos días, querría dos entradas para el museo, por favor." },
      { speaker: "Agent", it: "Pour aujourd'hui ? Vous avez une réservation ?", es: "¿Para hoy? ¿Tiene reserva?" },
      { speaker: "Visiteuse", it: "Non, pas de réservation. C'est possible d'acheter sur place ?", es: "No, sin reserva. ¿Es posible comprar en el sitio?" },
      { speaker: "Agent", it: "Oui, mais la file d'attente est longue. Sinon, vous pouvez réserver un créneau en ligne.", es: "Sí, pero la cola es larga. Si no, puede reservar un horario en línea." },
      { speaker: "Visiteuse", it: "D'accord, on fera la file. Où se trouve la Joconde, exactement ?", es: "De acuerdo, haremos la cola. ¿Dónde está exactamente la Gioconda?" },
      { speaker: "Agent", it: "Dans l'aile Denon, au premier étage. Suivez la foule, vous ne pouvez pas vous tromper !", es: "En el ala Denon, en el primer piso. Siga a la multitud, ¡no puede equivocarse!" },
    ],
    exerciseIds: ["fr-ex-sit-louvre-1", "fr-ex-sit-louvre-2"],
    roleplay: {
      it: "Jeu de rôle : je suis visiteur au Louvre et tu es l'agent d'accueil sous la Pyramide. Demande-moi mes billets et renseigne-moi sur la Joconde.",
      es: "Role-play: soy visitante del Louvre y tú el empleado de acogida bajo la Pirámide. Pídeme las entradas e infórmame sobre la Gioconda.",
    },
  },
  {
    id: "fr-sit-logement", emoji: "🏠", title: "Alquilar un piso en París", titleIt: "Louer un appartement à Paris", level: "B2",
    intro: "El deporte extremo parisino: el expediente de alquiler, el avalista, las visitas exprés y el vocabulario para salir victorioso.",
    vocab: [
      { it: "le loyer", es: "el alquiler" },
      { it: "les charges", es: "los gastos comunitarios" },
      { it: "le dépôt de garantie", es: "la fianza" },
      { it: "le garant", es: "el avalista" },
      { it: "le dossier", es: "el expediente de alquiler" },
      { it: "les justificatifs de revenus", es: "los justificantes de ingresos" },
      { it: "l'assurance habitation", es: "el seguro de hogar" },
      { it: "la colocation", es: "el piso compartido" },
    ],
    dialogue: [
      { speaker: "Agent immobilier", it: "Bonjour, vous avez rendez-vous pour la visite du deux-pièces ?", es: "Buenos días, ¿tiene cita para la visita del dos ambientes?" },
      { speaker: "Candidate", it: "Oui, bonjour. L'appartement est toujours disponible ? Le loyer est de neuf cents euros, charges comprises ?", es: "Sí, buenos días. ¿El apartamento sigue disponible? ¿El alquiler es de novecientos euros, gastos incluidos?" },
      { speaker: "Agent immobilier", it: "C'est exact. Il faudra constituer un dossier complet : bulletins de salaire, justificatif de domicile et garant.", es: "Es exacto. Habrá que preparar un expediente completo: nóminas, justificante de domicilio y avalista." },
      { speaker: "Candidate", it: "Mes parents peuvent se porter garants. Le dépôt de garantie s'élève à combien ?", es: "Mis padres pueden actuar como avalistas. ¿A cuánto asciende la fianza?" },
      { speaker: "Agent immobilier", it: "À un mois de loyer, hors charges. Il faudra aussi une assurance habitation avant la remise des clés.", es: "A un mes de alquiler, sin los gastos. También necesitará un seguro de hogar antes de la entrega de llaves." },
      { speaker: "Candidate", it: "Très bien, j'envoie mon dossier ce soir. Dans quel délai aurai-je une réponse ?", es: "Muy bien, envío mi expediente esta noche. ¿En qué plazo tendré una respuesta?" },
    ],
    exerciseIds: ["fr-ex-sit-logement-1", "fr-ex-sit-logement-2", "fr-ex-sit-logement-3"],
    roleplay: {
      it: "Jeu de rôle : je cherche un appartement à Paris et tu es l'agent immobilier. Pose-moi des questions sur le loyer, les charges et mon dossier.",
      es: "Role-play: busco apartamento en París y tú eres el agente inmobiliario. Hazme preguntas sobre el alquiler, los gastos y mi expediente.",
    },
  },
];
