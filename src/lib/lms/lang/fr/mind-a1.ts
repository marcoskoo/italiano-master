import type { MindReading } from "../../cambridge-mind";

/* ═══ FR A1 · Mind readings (temáticas de conciencia) — 3 por unidad ══
   Metodología idéntica a las italianas e inglesas (v9.13): predict +
   estrategias de comprensión. Textos en francés de Francia A1, traducción
   española a la vista. Campos `.it` = francés (lengua de estudio), `.es` =
   español. Rotación por posición: L1 = quiz (lit/inf/crít) + V/F con
   justificación; L2 = ideas + intruso; L3 = secuencia + escucha. */

export const FR_MIND_A1: Record<string, MindReading[]> = {
  "fr-cu-a1-01": [
    {
      id: "md-fr-a1-01-1", theme: "meditazione",
      title: "La première respiration", titleEs: "La primera respiración",
      minutes: 2,
      paragraphs: [
        { it: "Assieds-toi. Ferme les yeux. Prends une respiration lente. C'est ta première respiration de la pratique. Tu es ici, et c'est suffisant.", es: "Siéntate. Cierra los ojos. Da una respiración lenta. Es tu primera respiración de la práctica. Estás aquí, y esto es suficiente." },
        { it: "La méditation est simple. Tu inspires, tu souffles. Ton esprit parle, et c'est normal. Tu reviens à ta respiration, encore et encore, comme un ami fidèle.", es: "La meditación es simple. Inhalas, exhalas. Tu mente habla, y es normal. Vuelves a tu respiración, una y otra vez, como un amigo fiel." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual avanzado de yoga", "Una introducción sencilla a meditar con la respiración", "Una clase de gimnasia"],
        answer: 1,
        why: "«La première respiration» apunta a un primer acercamiento a la respiración, no a algo avanzado.",
      },
      quiz: [
        { q: "Que fais-tu d'abord ?", kind: "literal", options: ["Tu t'assieds et tu fermes les yeux", "Tu cours", "Tu cries"], answer: 0, why: "«Assieds-toi. Ferme les yeux»: está literal al inicio." },
        { q: "Que se passe-t-il dans ta tête ?", kind: "inferencial", options: ["Ton esprit parle et tu reviens à la respiration", "Ton esprit se tait tout de suite", "Tu arrêtes tes pensées"], answer: 0, why: "Se infiere que no hay que bloquear la mente: «tu reviens à ta respiration»." },
        { q: "Quelle est l'idée principale du texte ?", kind: "critica", options: ["La méditation est réservée aux experts", "La méditation est simple : respirer et revenir", "La méditation est un sport difficile"], answer: 1, why: "La idea central es la simplicidad: respirar y volver." },
      ],
      vf: [
        { text: "Tu prends une respiration rapide.", value: false, why: "El texto dice «une respiration lente»: lenta, no rápida." },
        { text: "C'est normal si ton esprit parle.", value: true, why: "«Ton esprit parle, et c'est normal»." },
        { text: "Tu reviens à la respiration une seule fois.", value: false, why: "«Encore et encore»: una y otra vez." },
      ],
    },
    {
      id: "md-fr-a1-01-2", theme: "qui e ora",
      title: "Le café est chaud", titleEs: "El café está caliente",
      minutes: 2,
      paragraphs: [
        { it: "Tu tiens ta tasse de café avec deux mains. La tasse est chaude. L'odeur est forte. En ce moment, rien d'autre n'existe : seulement toi, la tasse et cet instant.", es: "Sostienes tu taza de café con dos manos. La taza está caliente. El aroma es intenso. En este momento nada más existe: solo tú, la taza y este instante." },
        { it: "C'est la pratique de l'ici et maintenant. Tu ne penses pas à hier. Tu ne t'inquiètes pas de demain. Le café est chaud, et tu es là, en terrasse, tranquille.", es: "Esta es la práctica del aquí y el ahora. No piensas en el ayer. No te preocupas por el mañana. El café está caliente y estás ahí, en la terraza, tranquilo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una receta de café", "Estar presente con una taza de café (aquí y ahora)", "Una crítica de cafeterías parisinas"],
        answer: 1,
        why: "El título apunta a la experiencia sensorial del café, no a recetas ni críticas.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Tu tiens la tasse avec deux mains.",
          "La tasse est chaude et l'odeur est forte.",
          "En ce moment, rien d'autre n'existe.",
          "Les machines à café coûtent deux cents euros.",
          "Tu ne penses pas à hier.",
        ],
        intruder: 3,
        why: "El precio de las máquinas es ajeno a la experiencia sensorial del momento: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Le moment présent est là, dans tes mains", "Le café est moins cher à Paris", "Le café a trop de caféine"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Tu tiens la tasse avec deux mains", "L'odeur est forte", "Tu ne penses pas à hier"],
        distractors: ["Tu bois trois cafés par jour", "Le café vient de Lyon", "Tu paies avec une carte"],
      },
    },
    {
      id: "md-fr-a1-01-3", theme: "relax fisico",
      title: "Les épaules vers le bas", titleEs: "Los hombros hacia abajo",
      minutes: 2,
      paragraphs: [
        { it: "Regarde tes épaules. Sont-elles hautes, près de tes oreilles ? Laisse-les descendre. Sens la différence. Ton corps dit merci, tout simplement.", es: "Mira tus hombros. ¿Están altos, cerca de tus orejas? Déjalos bajar. Siente la diferencia. Tu cuerpo dice gracias, sencillamente." },
        { it: "Nous portons le stress dans nos épaules toute la journée. Cinq fois par jour, vérifie tes épaules : vers le bas, souples, détendues. C'est une petite habitude avec un grand cadeau.", es: "Cargamos el estrés en los hombros todo el día. Cinco veces al día, revisa tus hombros: hacia abajo, suaves, relajados. Es un hábito pequeño con un gran regalo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ejercicio de gimnasio con pesas", "Relajar los hombros durante el día", "Una clase de natación"],
        answer: 1,
        why: "«Les épaules vers le bas» sugiere soltar tensión, no ejercicio físico intenso.",
      },
      sequence: {
        instr: "Ordena los pasos del hábito:",
        events: ["Regarde tes épaules", "Elles sont hautes, près des oreilles", "Laisse-les descendre lentement", "Sens la différence", "Répète cinq fois par jour"],
      },
      listen: {
        intro: "Escucha el audio (sin ver el texto) y responde:",
        audioIt: "Bienvenue dans ta pause corps. Assieds-toi bien. Prends une respiration. Maintenant, laisse tomber tes épaules. Souples. Faciles. Sens l'espace entre tes oreilles et tes épaules. Reste ici pendant trois respirations. C'est ton corps qui te dit merci.",
        questions: [
          { q: "Que fais-tu avec tes épaules ?", kind: "literal", options: ["Tu les montes", "Tu les laisses tomber", "Tu les tournes vite"], answer: 1, why: "«Laisse tomber tes épaules»." },
          { q: "Combien de temps restes-tu là ?", kind: "literal", options: ["Trois respirations", "Une heure", "Toute la journée"], answer: 0, why: "«Reste ici pendant trois respirations»." },
          { q: "Que sens-tu entre tes oreilles et tes épaules ?", kind: "literal", options: ["De l'espace", "De la douleur", "Du bruit"], answer: 0, why: "«Sens l'espace entre tes oreilles et tes épaules»." },
          { q: "Qui dit merci, à la fin ?", kind: "inferencial", options: ["Ton corps", "Le professeur", "Ton téléphone"], answer: 0, why: "«C'est ton corps qui te dit merci»: se infiere del cierre agradecido." },
        ],
      },
    },
  ],

  "fr-cu-a1-02": [
    {
      id: "md-fr-a1-02-1", theme: "spiritualità",
      title: "La famille du monde", titleEs: "La familia del mundo",
      minutes: 3,
      paragraphs: [
        { it: "La spiritualité n'est pas loin. Elle est dans la cuisine, dans un appel avec ta mère, dans le rire d'un enfant. Quand tu aimes, tu pratiques la spiritualité.", es: "La espiritualidad no está lejos. Está en la cocina, en una llamada con tu madre, en la risa de un niño. Cuando amas, practicas la espiritualidad." },
        { it: "Aujourd'hui, appelle une personne que tu aimes. Écoute sa voix. C'est suffisant. Dans beaucoup de traditions, le service et l'amour sont la première pratique.", es: "Hoy, llama a una persona que amas. Escucha su voz. Es suficiente. En muchas tradiciones, el servicio y el amor son la primera práctica." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Religiones comparadas", "Espiritualidad cotidiana en la familia y el amor", "Un anuncio de telefonía"],
        answer: 1,
        why: "«La famille du monde» apunta a vínculos humanos, no a teología ni productos.",
      },
      quiz: [
        { q: "Où est la spiritualité, selon le texte ?", kind: "literal", options: ["Dans la cuisine et dans un appel", "Seulement dans les temples", "Dans les livres anciens"], answer: 0, why: "«Elle est dans la cuisine, dans un appel avec ta mère»." },
        { q: "Que fais-tu aujourd'hui ?", kind: "inferencial", options: ["Tu appelles une personne que tu aimes", "Tu voyages vers un temple", "Tu achètes un livre"], answer: 0, why: "Se infiere de «Aujourd'hui, appelle une personne que tu aimes»." },
        { q: "Quelle idée correspond le mieux au texte ?", kind: "critica", options: ["Aimer et servir est une pratique spirituelle", "La spiritualité demande des vêtements spéciaux", "Les appels en famille sont une perte de temps"], answer: 0, why: "La idea central: amar y servir ya es práctica espiritual." },
      ],
      vf: [
        { text: "La spiritualité est seulement dans les lieux spéciaux.", value: false, why: "El texto dice que está en la cocina y en una llamada: en lo cotidiano." },
        { text: "Écouter la voix d'un être cher est suffisant.", value: true, why: "«Écoute sa voix. C'est suffisant»." },
        { text: "Beaucoup de traditions mettent l'amour et le service en premier.", value: true, why: "«Le service et l'amour sont la première pratique»." },
      ],
    },
    {
      id: "md-fr-a1-02-2", theme: "relax mentale",
      title: "Un esprit comme le ciel", titleEs: "Una mente como el cielo",
      minutes: 2,
      paragraphs: [
        { it: "Ton esprit est comme le ciel. Les pensées sont des nuages. Certains nuages sont sombres ; d'autres sont blancs et rapides. Le ciel reste. Le ciel est toujours là, calme et ouvert.", es: "Tu mente es como el cielo. Los pensamientos son nubes. Algunas nubes son oscuras; otras, blancas y veloces. El cielo permanece. El cielo siempre está ahí, sereno y abierto." },
        { it: "Quand une mauvaise pensée arrive, ne la combats pas. Regarde le nuage passer. Derrière chaque nuage, le ciel est toujours bleu. Voilà la relaxation mentale : tu es le ciel, pas le nuage.", es: "Cuando llega un mal pensamiento, no luches contra él. Mira pasar la nube. Detrás de cada nube, el cielo sigue azul. Esa es la relajación mental: tú eres el cielo, no la nube." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["El pronóstico del tiempo", "Una metáfora para relajar la mente: pensamientos como nubes", "Un texto de astronomía"],
        answer: 1,
        why: "La metáfora cielo-mente es un clásico de la relajación; el título lo anticipa.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Les pensées sont des nuages, sombres ou blancs.",
          "Le ciel reste, calme et ouvert.",
          "Quand une mauvaise pensée arrive, tu regardes le nuage passer.",
          "Les nuages apportent la pluie pour les fermiers du lundi.",
          "Tu es le ciel, pas le nuage.",
        ],
        intruder: 3,
        why: "El dato agrícola es ajeno a la metáfora mental: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Les pensées sont des nuages ; tu es le ciel qui reste ouvert", "Les nuages annoncent la pluie de demain", "Tu dois combattre tes pensées"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Les pensées sont des nuages", "Tu regardes le nuage passer", "Le ciel est toujours là"],
        distractors: ["Tu peins les nuages en blanc", "Le ciel est en colère aujourd'hui", "Les nuages sont dangereux pour les pilotes"],
      },
    },
    {
      id: "md-fr-a1-02-3", theme: "meditazione",
      title: "Trois respirations avec grand-mère", titleEs: "Tres respiraciones con la abuela",
      minutes: 3,
      paragraphs: [
        { it: "Ma grand-mère s'assied dans son fauteuil chaque matin. Elle boit son thé en silence. Elle dit trois mots : «Assieds-toi, respire, souris.» C'est toute sa pratique, depuis toujours.", es: "Mi abuela se sienta en su sillón cada mañana. Bebe su té en silencio. Dice tres palabras: «Siéntate, respira, sonríe». Esa es toda su práctica, desde siempre." },
        { it: "Elle a quatre-vingts ans, et son esprit est calme comme un lac le matin. Les grands-mères savent : le bonheur est simple, et il habite dans les petits moments de la vie.", es: "Tiene ochenta años y su mente está serena como un lago de mañana. Las abuelas saben: la felicidad es simple y vive en los pequeños momentos de la vida." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una biografía completa", "La práctica simple de una abuela: sentarse, respirar, sonreír", "Una receta de té"],
        answer: 1,
        why: "El título une tres respiraciones con la figura de la abuela: una práctica cotidiana.",
      },
      sequence: {
        instr: "Ordena la práctica de la abuela según el texto:",
        events: ["Grand-mère s'assied dans son fauteuil", "Elle boit son thé en silence", "Elle dit trois mots", "Elle sourit", "Son esprit est calme comme un lac"],
      },
      listen: {
        intro: "Escucha y responde:",
        audioIt: "Bonjour. Voici ta pratique des trois respirations. Assieds-toi comme ma grand-mère dans son vieux fauteuil. Respire lentement. Souffle lentement. Maintenant, souris, juste un peu. Sens ton visage se détendre. Trois respirations, un sourire. Ta journée commence en douceur.",
        questions: [
          { q: "Qui s'assied comme ça, dans l'histoire ?", kind: "literal", options: ["Une grand-mère dans son fauteuil", "Un professeur à l'école", "Un bébé dans une voiture"], answer: 0, why: "«Assieds-toi comme ma grand-mère dans son vieux fauteuil»." },
          { q: "Que fais-tu après les trois respirations ?", kind: "inferencial", options: ["Tu souris un peu", "Tu ouvres ton téléphone", "Tu cours au travail"], answer: 0, why: "«Maintenant, souris, juste un peu»: se infiere el orden final." },
          { q: "Comment commence ta journée ?", kind: "literal", options: ["En douceur", "En colère", "En retard"], answer: 0, why: "«Ta journée commence en douceur»." },
          { q: "Que sens-tu quand tu souris ?", kind: "literal", options: ["Ton visage se détendre", "Tes jambes trembler", "Ta tête cogner"], answer: 0, why: "«Sens ton visage se détendre»." },
        ],
      },
    },
  ],

  "fr-cu-a1-03": [
    {
      id: "md-fr-a1-03-1", theme: "qui e ora",
      title: "Un matin, un instant", titleEs: "Una mañana, un instante",
      minutes: 3,
      paragraphs: [
        { it: "Ce matin, tu te réveilles. La fenêtre est ouverte. Tu écoutes un oiseau. Pendant deux secondes, il n'y a pas d'hier et pas de demain. Il y a seulement ce son, clair et doux.", es: "Esta mañana despiertas. La ventana está abierta. Escuchas un pájaro. Durante dos segundos no hay ayer ni mañana. Solo existe este sonido, claro y suave." },
        { it: "L'ici et maintenant est une pièce. Tu y entres plusieurs fois par jour : avec ton café, avec ta respiration, avec le premier mot d'un ami. La présence est gratuite, et elle est toujours ouverte.", es: "El aquí y el ahora es una habitación. Entras en ella varias veces al día: con tu café, con tu respiración, con la primera palabra de un amigo. La presencia es gratis y siempre está abierta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Rutinas matinales de famosos", "El presente como espacio al que se entra a diario", "Un texto sobre relojes"],
        answer: 1,
        why: "«Un matin, un instant» apunta al instante presente, no a biografías ni objetos.",
      },
      quiz: [
        { q: "Qu'entends-tu par la fenêtre ?", kind: "literal", options: ["Un oiseau", "La radio", "Une voiture"], answer: 0, why: "«Tu écoutes un oiseau»." },
        { q: "Combien de temps dure l'instant sans hier ni demain ?", kind: "inferencial", options: ["Deux secondes", "Deux heures", "Toute la matinée"], answer: 0, why: "«Pendant deux secondes»: se infiere que es muy breve." },
        { q: "Que signifie «la présence est gratuite» ?", kind: "critica", options: ["Être présent ne coûte rien et est toujours disponible", "La présence est une application payante", "Seuls les riches peuvent être présents"], answer: 0, why: "«Gratuite» = sin costo; «toujours ouverte» = disponible siempre." },
      ],
      vf: [
        { text: "L'ici et maintenant est une pièce où tu entres plusieurs fois par jour.", value: true, why: "Metáfora literal del segundo párrafo." },
        { text: "Tu entres dans la présence seulement avec le café.", value: false, why: "El café es un ejemplo; también con la respiración o la palabra de un amigo." },
        { text: "Pendant deux secondes, il n'y a pas d'hier et pas de demain.", value: true, why: "Está literal en el primer párrafo." },
      ],
    },
    {
      id: "md-fr-a1-03-2", theme: "relax fisico",
      title: "Marche comme un chat", titleEs: "Camina como un gato",
      minutes: 2,
      paragraphs: [
        { it: "Les chats marchent lentement. Ils mettent une patte devant l'autre. Ils ne sont pas pressés. Observe un chat pendant cinq minutes : tu apprends une leçon de calme.", es: "Los gatos caminan despacio. Ponen una pata delante de la otra. No tienen prisa. Observa un gato cinco minutos: aprendes una lección de calma." },
        { it: "Aujourd'hui, marche comme un chat pendant une minute. Des pas lents. Les genoux souples. Une respiration tranquille. Ton corps se détend, et ton esprit suit le corps.", es: "Hoy camina como un gato durante un minuto. Pasos lentos. Rodillas suaves. Respiración tranquila. Tu cuerpo se relaja y tu mente sigue al cuerpo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo adoptar una mascota", "Caminar despacio como práctica de calma corporal", "Un documental de felinos"],
        answer: 1,
        why: "«Marche comme un chat» invita a imitar la calma del gato, no a hablar de mascotas.",
      },
      intruder: {
        instr: "Una de estas frases NO encaja con el texto. ¿Cuál es el intruso?",
        sentences: [
          "Les chats marchent lentement, une patte devant l'autre.",
          "Ils ne sont pas pressés.",
          "Des pas lents et des genoux souples détendent le corps.",
          "Les chats dorment vingt heures par jour et chassent la nuit.",
          "Ton esprit suit ton corps.",
        ],
        intruder: 3,
        why: "El dato biológico es cierto para gatos, pero no pertenece a la práctica de calma del texto: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: [
          "Les chats enseignent le calme : des pas lents, sans se presser",
          "Les chats dorment seize heures par jour",
          "Tu dois adopter un chat aujourd'hui",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen:",
        secondary: [
          "Une patte devant l'autre",
          "Ils ne sont pas pressés",
          "Ton esprit suit ton corps",
        ],
        distractors: [
          "Les chats chassent la nuit",
          "Marcher lentement brûle plus de calories",
          "Les chats détestent l'eau",
        ],
      },
    },
    {
      id: "md-fr-a1-03-3", theme: "relax mentale",
      title: "Le téléphone se tait", titleEs: "El teléfono calla",
      minutes: 3,
      paragraphs: [
        { it: "Mets ton téléphone face contre table. Regarde autour de toi. Que vois-tu ? Une chaise. Une plante. La lumière sur le mur. Sans le bruit, le monde parle doucement.", es: "Pon el teléfono boca abajo. Mira a tu alrededor. ¿Qué ves? Una silla. Una planta. La luz en la pared. Sin ruido, el mundo habla suave." },
        { it: "Dix minutes sans écrans, c'est un cadeau pour ton esprit. Tes pensées ralentissent. Ta respiration retrouve son rythme naturel. Le silence n'est pas vide : il est plein de paix.", es: "Diez minutos sin pantallas es un regalo para tu mente. Tus pensamientos se ralentizan. Tu respiración encuentra su ritmo natural. El silencio no está vacío: está lleno de paz." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una reseña de teléfonos", "Un descanso mental sin pantallas", "Un tutorial de fotografía"],
        answer: 1,
        why: "«Le téléphone se tait» apunta a desenchufarse, no a comparar dispositivos.",
      },
      sequence: {
        instr: "Ordena los pasos del descanso digital:",
        events: ["Tu mets ton téléphone face contre table", "Tu regardes autour de la pièce", "Tu remarques la chaise, la plante, la lumière", "Ta respiration retrouve son rythme naturel", "Tu profites de dix minutes sans écrans"],
      },
      listen: {
        intro: "Escucha el mini-audio de desenchufe:",
        audioIt: "Voici ta pause de dix minutes. Pose ton téléphone face contre table. Prends une respiration et regarde autour de toi. Trouve trois choses : une chaise, une plante, une lumière. Dis leur nom dans ta tête. Maintenant, ferme les yeux pour trois respirations lentes. Le silence est plein de paix.",
        questions: [
          { q: "Que fais-tu avec ton téléphone ?", kind: "literal", options: ["Tu le poses face contre table", "Tu l'allumes", "Tu le jettes"], answer: 0, why: "«Pose ton téléphone face contre table»." },
          { q: "Quelles trois choses trouves-tu ?", kind: "literal", options: ["Une chaise, une plante, une lumière", "Une télé, une console, trois téléphones", "Trois amis"], answer: 0, why: "«une chaise, une plante, une lumière»." },
          { q: "Que fais-tu après avoir trouvé les trois choses ?", kind: "inferencial", options: ["Tu fermes les yeux pour trois respirations", "Tu regardes tes messages", "Tu appelles un ami"], answer: 0, why: "Se infiere: «Maintenant, ferme les yeux pour trois respirations lentes»." },
          { q: "De quoi le silence est-il plein, à la fin ?", kind: "literal", options: ["De paix", "De bruit", "De travail"], answer: 0, why: "«Le silence est plein de paix»." },
        ],
      },
    },
  ],

  "fr-cu-a1-04": [
    {
      id: "md-fr-a1-04-1", theme: "meditazione",
      title: "Méditation à la boulangerie", titleEs: "Meditación en la panadería",
      minutes: 3,
      paragraphs: [
        { it: "Tu attends ton pain dans la boulangerie. Une minute. Au lieu de ton téléphone, regarde le boulanger. Ses mains travaillent comme une danse lente. Le four chante doucement.", es: "Esperas tu pan en la panadería. Un minuto. En lugar del teléfono, observa al panadero. Sus manos se mueven como una danza lenta. El horno canta suave." },
        { it: "Le temps d'attente est un temps de méditation. Chaque file, chaque feu rouge, chaque retard est une porte vers la présence. Tu n'as pas besoin d'une pièce silencieuse ; tu as besoin d'une respiration éveillée.", es: "El tiempo de espera es tiempo de meditación. Cada fila, cada luz roja, cada retraso es una puerta a la presencia. No necesitas una sala silenciosa; necesitas una respiración despierta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una queja por las filas", "Convertir la espera en la boulangerie en meditación", "Un catálogo de panadería"],
        answer: 1,
        why: "El título une boulangerie y meditación: la espera como práctica.",
      },
      quiz: [
        { q: "Que regardes-tu en attendant ton pain ?", kind: "literal", options: ["Le boulanger", "La porte", "Tes chaussures"], answer: 0, why: "«Regarde le boulanger»." },
        { q: "Qu'est-ce qu'«une porte vers la présence» ?", kind: "inferencial", options: ["Chaque attente et chaque retard", "Seulement les pièces silencieuses", "Une application spéciale"], answer: 0, why: "Se infiere: cada fila o luz roja es una oportunidad." },
        { q: "De quoi as-tu vraiment besoin pour méditer ?", kind: "critica", options: ["Une respiration éveillée, n'importe où", "Un temple et une heure", "Un silence parfait"], answer: 0, why: "El texto lo dice: no necesitas una sala silenciosa, sino una respiración despierta." },
      ],
      vf: [
        { text: "Le four chante dans le texte.", value: true, why: "Personificación literal: «Le four chante doucement»." },
        { text: "Tu as besoin d'une pièce silencieuse pour méditer.", value: false, why: "El texto lo niega: basta una respiración despierta." },
        { text: "Chaque feu rouge peut être une porte vers la présence.", value: true, why: "«Chaque feu rouge, chaque retard est une porte vers la présence»." },
      ],
    },
    {
      id: "md-fr-a1-04-2", theme: "spiritualità",
      title: "Gratitude et croissant", titleEs: "Gratitud y croissant",
      minutes: 2,
      paragraphs: [
        { it: "Avant la première bouchée de ton croissant, dis merci. Merci au boulanger. Merci à la pluie qui a fait pousser le blé. Merci aux mains qui portent la farine jusqu'au four du quartier.", es: "Antes del primer bocado de tu croissant, da las gracias. Gracias al panadero. Gracias a la lluvia que hizo crecer el trigo. Gracias a las manos que llevan la harina hasta el horno del barrio." },
        { it: "La gratitude est une pratique spirituelle d'une seconde. Elle te relie à des milliers de personnes que tu ne rencontreras jamais. Ton croissant du matin est un petit miracle de coopération.", es: "La gratitud es una práctica espiritual de un segundo. Te conecta con miles de personas que nunca conocerás. Tu croissant de la mañana es un pequeño milagro de cooperación." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La historia del croissant", "La gratitud como práctica espiritual de un segundo", "Una tabla de calorías"],
        answer: 1,
        why: "El título une gratitud y croissant: agradecer antes del primer bocado.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Avant la première bouchée, tu dis merci.",
          "Merci à la pluie qui a fait pousser le blé.",
          "La gratitude est une pratique spirituelle d'une seconde.",
          "Un croissant contient trois cent vingt calories.",
          "Ton croissant est un petit miracle de coopération.",
        ],
        intruder: 3,
        why: "Las calorías son un dato nutricional ajeno a la práctica de la gratitud: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["La gratitude relie le petit geste du matin à des milliers de personnes", "Les croissants sont trop chers à Paris", "Il faut remercier seulement les amis"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Tu dis merci au boulanger", "La gratitude est une pratique d'une seconde", "Ton croissant est un miracle de coopération"],
        distractors: ["Tu manges dix croissants par jour", "Le blé vient de la Lune", "Tu paies le boulanger avec une chanson"],
      },
    },
    {
      id: "md-fr-a1-04-3", theme: "relax fisico",
      title: "Les pieds dans le Marais", titleEs: "Los pies en Le Marais",
      minutes: 3,
      paragraphs: [
        { it: "Marche lentement dans les rues anciennes du Marais. Sens le pavé sous tes pieds. Ta respiration suit tes pas : un pas, une inspiration ; un pas, une expiration. La ville devient calme autour de toi.", es: "Camina despacio por las calles antiguas de Le Marais. Siente el adoquín bajo tus pies. Tu respiración sigue tus pasos: un paso, una inhalación; un paso, una exhalación. La ciudad se vuelve serena a tu alrededor." },
        { it: "Après dix minutes de marche lente, arrête-toi. Regarde les vieux murs, la petite place, le café au coin. Ton corps est détendu et ton esprit est ouvert. Flâner, c'est une méditation debout.", es: "Después de diez minutos de caminata lenta, detente. Mira los muros viejos, la placita, el café de la esquina. Tu cuerpo está relajado y tu mente abierta. Pasear sin rumbo es una meditación de pie." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de compras del Marais", "Caminar despacio por calles antiguas como relajación física", "Los horarios de los museos"],
        answer: 1,
        why: "«Les pieds dans le Marais» apunta a caminar con atención, no a comprar.",
      },
      sequence: {
        instr: "Ordena los pasos del paseo consciente:",
        events: ["Tu marches lentement dans les rues anciennes", "Ta respiration suit tes pas", "Après dix minutes, tu t'arrêtes", "Tu regardes les vieux murs et la petite place", "Ton corps est détendu, ton esprit ouvert"],
      },
      listen: {
        intro: "Escucha el ritmo del paseante:",
        audioIt: "C'est l'heure de la marche lente. Trouve une rue calme. Premier pas : inspire. Deuxième pas : souffle. Sens le pavé sous tes pieds. Regarde un vieux mur, une porte, un chat qui dort. Continue comme ça pendant dix minutes. La ville est ton monastère, et ta respiration est la cloche.",
        questions: [
          { q: "Que fais-tu au premier pas ?", kind: "literal", options: ["Tu inspires", "Tu cries", "Tu cours"], answer: 0, why: "«Premier pas : inspire»." },
          { q: "Combien de temps dure la marche ?", kind: "literal", options: ["Dix minutes", "Dix heures", "Dix secondes"], answer: 0, why: "«Continue comme ça pendant dix minutes»." },
          { q: "Qu'est-ce que ta respiration, dans la métaphore finale ?", kind: "inferencial", options: ["La cloche du monastère", "Un klaxon", "Une chanson triste"], answer: 0, why: "«La ville est ton monastère, et ta respiration est la cloche»." },
          { q: "Que regardes-tu pendant la marche ?", kind: "literal", options: ["Un vieux mur, une porte, un chat", "Ton téléphone", "La télévision"], answer: 0, why: "«Regarde un vieux mur, une porte, un chat qui dort»." },
        ],
      },
    },
  ],

  "fr-cu-a1-05": [
    {
      id: "md-fr-a1-05-1", theme: "qui e ora",
      title: "Les couleurs du marché", titleEs: "Los colores del mercado",
      minutes: 3,
      paragraphs: [
        { it: "Au marché, regarde les couleurs : rouge des fraises, vert des salades, jaune des fromages. Une seconde, oublie ta liste. Regarde seulement. Le marché devient une peinture vivante, gratuite et généreuse.", es: "En el mercado, mira los colores: rojo de las fresas, verde de las lechugas, amarillo de los quesos. Un segundo, olvida tu lista. Mira nada más. El mercado se vuelve una pintura viva, gratuita y generosa." },
        { it: "L'ici et maintenant est partout, même entre les étals. Écoute le marchand qui chante les prix. Sens l'odeur des fruits mûrs. Tu n'as pas besoin d'un temple : le marché suffit, et il est déjà là.", es: "El aquí y el ahora está en todas partes, incluso entre los puestos. Escucha al vendedor que canta los precios. Huele la fruta madura. No necesitas un templo: el mercado basta, y ya está aquí." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Precios y ofertas del mercado", "Observar los colores del mercado para estar presente", "Una guía de compra de queso"],
        answer: 1,
        why: "«Les couleurs du marché» apunta a mirar, no a comprar.",
      },
      quiz: [
        { q: "Que regardes-tu au marché ?", kind: "literal", options: ["Les couleurs des fruits et des fromages", "Ton téléphone", "L'heure"], answer: 0, why: "«rouge des fraises, vert des salades, jaune des fromages»." },
        { q: "Que fais-tu avec ta liste, une seconde ?", kind: "inferencial", options: ["Tu l'oublies pour regarder seulement", "Tu la lis à voix haute", "Tu la déchires"], answer: 0, why: "Se infiere de «oublie ta liste. Regarde seulement»." },
        { q: "Que devient le marché avec l'attention ?", kind: "critica", options: ["Une peinture vivante, un lieu de présence", "Un simple supermarché bruyant", "Un problème à résoudre vite"], answer: 0, why: "«Le marché devient une peinture vivante»: la presencia lo transforma." },
      ],
      vf: [
        { text: "L'ici et maintenant est partout, même entre les étals.", value: true, why: "Literal en el segundo párrafo." },
        { text: "Tu as besoin d'un temple pour être présent.", value: false, why: "El texto dice: «Tu n'as pas besoin d'un temple : le marché suffit»." },
        { text: "Le marché devient une peinture vivante.", value: true, why: "«Le marché devient une peinture vivante»." },
      ],
    },
    {
      id: "md-fr-a1-05-2", theme: "relax mentale",
      title: "Une chose à la fois", titleEs: "Una cosa a la vez",
      minutes: 2,
      paragraphs: [
        { it: "Ta liste de courses a dix lignes. Ton esprit en ajoute cent : le travail, les messages, le week-end. Respire. La liste reste la liste. Toi, tu es ici, maintenant, devant le fromage.", es: "Tu lista de la compra tiene diez líneas. Tu mente añade cien: el trabajo, los mensajes, el finde. Respira. La lista sigue siendo la lista. Tú estás aquí, ahora, delante del queso." },
        { it: "Une chose à la fois : c'est le secret du relax mental. Choisis le fromage. Puis les pommes. Puis le pain. Fais chaque geste avec toute ton attention, et la fatigue mentale part doucement.", es: "Una cosa a la vez: ese es el secreto del relax mental. Elige el queso. Luego las manzanas. Luego el pan. Haz cada gesto con toda tu atención y el cansancio mental se va suavemente." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo hacer la compra rápido", "Hacer una cosa a la vez para calmar la mente", "Una dieta equilibrada"],
        answer: 1,
        why: "«Une chose à la fois» es la clave del título: atención única.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Ta liste de courses a dix lignes.",
          "Ton esprit en ajoute cent, comme le travail et les messages.",
          "Respire : la liste reste la liste.",
          "Le camion du marché livre les marchandises le mardi matin.",
          "Fais chaque geste avec toute ton attention.",
        ],
        intruder: 3,
        why: "La entrega del camión es logística del mercado, no calma mental: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: [
          "Fais une chose à la fois, avec toute ton attention",
          "Fais la liste la plus longue possible",
          "Achète tout très vite",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen:",
        secondary: [
          "Ta liste a dix lignes",
          "Ton esprit ajoute cent pensées",
          "Fais chaque geste avec attention",
        ],
        distractors: [
          "Tu jettes la liste à la poubelle",
          "Le fromage est très cher cette semaine",
          "Tu dors au milieu du marché",
        ],
      },
    },
    {
      id: "md-fr-a1-05-3", theme: "meditazione",
      title: "Respirer entre les étals", titleEs: "Respirar entre los puestos",
      minutes: 2,
      paragraphs: [
        { it: "Le marché est bruyant : les voix des vendeurs, la machine à café, les paniers qui tombent. Trouve une seconde de silence à l'intérieur de toi. Ferme les yeux une seconde. Inspire. Expire. C'est tout.", es: "El mercado es ruidoso: las voces de los vendedores, la máquina de café, las cestas que caen. Encuentra un segundo de silencio dentro de ti. Cierra los ojos un segundo. Inhala. Exhala. Es todo." },
        { it: "La méditation n'exige pas le silence parfait. Elle demande une attention douce. Au milieu du bruit, ton souffle est une petite île calme. Retourne-y chaque fois que tu veux, gratuitement.", es: "La meditación no exige el silencio perfecto. Pide una atención suave. En medio del ruido, tu aliento es una pequeña isla de calma. Vuelve a ella cada vez que quieras, gratis." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo regatear en el mercado", "Encontrar silencio interior en medio del ruido del mercado", "Los horarios de los mercados"],
        answer: 1,
        why: "«Respirer entre les étals» une respiración y mercado: calma en el bullicio.",
      },
      sequence: {
        instr: "Ordena la mini-práctica en el mercado:",
        events: ["Tu écoutes le bruit du marché", "Tu cherches une seconde de silence à l'intérieur", "Tu fermes les yeux une seconde", "Tu inspires et tu expires", "Tu reviens à ton île calme quand tu veux"],
      },
      listen: {
        intro: "Escucha la pausa del mercado:",
        audioIt: "Bienvenue dans ta minute du marché. Le bruit est là, très bien. Trouve ton souffle sous le bruit. Inspire par le nez. Souffle par la bouche. Une voix crie les prix : très bien aussi. Ton souffle reste calme comme une petite île. Reste ici trois respirations. Le bruit continue, et toi aussi.",
        questions: [
          { q: "Où est le silence, dans cet audio ?", kind: "literal", options: ["À l'intérieur de toi", "Dans la cave du marché", "Dans le camion"], answer: 0, why: "«Trouve ton souffle sous le bruit»: el silencio es interior." },
          { q: "Comment inspires-tu ?", kind: "literal", options: ["Par le nez", "Par les oreilles", "Très vite"], answer: 0, why: "«Inspire par le nez»." },
          { q: "Que fait ton souffle pendant le bruit ?", kind: "inferencial", options: ["Il reste calme comme une île", "Il disparaît", "Il crie aussi"], answer: 0, why: "«Ton souffle reste calme comme une petite île»." },
          { q: "Combien de temps restes-tu ?", kind: "literal", options: ["Trois respirations", "Trois heures", "Trois jours"], answer: 0, why: "«Reste ici trois respirations»." },
        ],
      },
    },
  ],

  "fr-cu-a1-06": [
    {
      id: "md-fr-a1-06-1", theme: "relax fisico",
      title: "Le réveil en douceur", titleEs: "El despertar suave",
      minutes: 3,
      paragraphs: [
        { it: "Le matin, avant le téléphone, étire-toi comme un chat dans le lit. Tes bras, tes jambes, ton dos : tout s'étire lentement. Trois étirements lents, trois respirations profondes. Le corps s'éveille sans stress.", es: "Por la mañana, antes que el teléfono, estírate como un gato en la cama. Tus brazos, tus piernas, tu espalda: todo se estira despacio. Tres estiramientos lentos, tres respiraciones profundas. El cuerpo despierta sin estrés." },
        { it: "Un réveil en douceur change la journée. Tes muscles se préparent, ton souffle s'ouvre, ta tête arrive après, tranquille. Cinq minutes de douceur valent mieux qu'une alarme qui crie.", es: "Un despertar suave cambia el día. Tus músculos se preparan, tu respiración se abre, tu cabeza llega después, tranquila. Cinco minutos de dulzura valen más que una alarma que grita." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Rutinas de famosos", "Despertar el cuerpo con suavidad, sin estrés", "Los mejores móviles para despertar"],
        answer: 1,
        why: "«Le réveil en douceur» apunta a un despertar suave del cuerpo.",
      },
      quiz: [
        { q: "Que fais-tu avant de prendre le téléphone ?", kind: "literal", options: ["Tu t'étires comme un chat", "Tu regardes les messages", "Tu sautes du lit"], answer: 0, why: "«avant le téléphone, étire-toi comme un chat»." },
        { q: "Quelle est la conséquence d'un réveil en douceur ?", kind: "inferencial", options: ["Le corps s'éveille sans stress", "Tu arrives en retard partout", "Tu dors toute la journée"], answer: 0, why: "Se infiere: el cuerpo se prepara y la cabeza llega tranquila." },
        { q: "Que valent cinq minutes de douceur ?", kind: "critica", options: ["Mieux qu'une alarme qui crie", "Rien du tout", "Moins qu'un café"], answer: 0, why: "«Cinq minutes de douceur valent mieux qu'une alarme qui crie»." },
      ],
      vf: [
        { text: "Tu t'étires trois fois, avec trois respirations.", value: true, why: "«Trois étirements lents, trois respirations profondes»." },
        { text: "L'alarme qui crie est la meilleure méthode.", value: false, why: "El texto prefiere la dulzura a la alarma que grita." },
        { text: "Ta tête arrive après le corps, tranquillement.", value: true, why: "«ton souffle s'ouvre, ta tête arrive après»." },
      ],
    },
    {
      id: "md-fr-a1-06-2", theme: "spiritualità",
      title: "Le déjeuner comme un rituel", titleEs: "El almuerzo como ritual",
      minutes: 2,
      paragraphs: [
        { it: "À midi, le resto U est plein et bruyant. Pourtant, ton plateau peut devenir un petit rituel. Pose-le lentement sur la table. Regarde la nourriture. Dis merci, même en silence, avant la première bouchée.", es: "Al mediodía, el resto U está lleno y ruidoso. Aun así, tu bandeja puede volverse un pequeño ritual. Ponla despacio sobre la mesa. Mira la comida. Da gracias, incluso en silencio, antes del primer bocado." },
        { it: "Manger en conscience est une pratique spirituelle très ancienne. Une bouchée à la fois : le goût, la chaleur, la faim qui part. Le corps et l'esprit se reposent ensemble, autour de la table.", es: "Comer con conciencia es una práctica espiritual muy antigua. Un bocado a la vez: el sabor, el calor, el hambre que se va. El cuerpo y el espíritu descansan juntos, alrededor de la mesa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["El menú del comedor universitario", "Convertir el almuerzo del resto U en un ritual consciente", "Una crítica de la comida rápida"],
        answer: 1,
        why: "El título trata el almuerzo como ritual, no como menú.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Le resto U est plein et bruyant à midi.",
          "Tu poses ton plateau lentement sur la table.",
          "Tu dis merci, même en silence.",
          "Le ticket du resto U coûte trois euros trente.",
          "Le corps et l'esprit se reposent ensemble.",
        ],
        intruder: 3,
        why: "El precio del ticket es un dato administrativo, no la práctica consciente: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Même au resto U, le déjeuner peut devenir un rituel conscient", "Le resto U est trop cher pour les étudiants", "Il faut manger le plus vite possible"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Tu poses le plateau lentement", "Tu dis merci, même en silence", "Le corps et l'esprit se reposent ensemble"],
        distractors: ["Tu manges debout en courant", "Le resto U ferme à midi", "Tu partages ton plateau avec le cuisinier"],
      },
    },
    {
      id: "md-fr-a1-06-3", theme: "qui e ora",
      title: "Dix-neuf heures trente", titleEs: "Las diecinueve treinta",
      minutes: 3,
      paragraphs: [
        { it: "Le soir, à la fenêtre, regarde la ville. Les lumières s'allument une par une : les bureaux, les appartements, les monuments. Pour une minute, tu ne penses pas à demain. Tu regardes seulement les fenêtres dorées.", es: "Por la noche, en la ventana, mira la ciudad. Las luces se encienden una a una: las oficinas, los pisos, los monumentos. Durante un minuto no piensas en el mañana. Miras solo las ventanas doradas." },
        { it: "La journée est finie. Ce qui est fait est fait. L'ici et maintenant, le soir, c'est ce ciel sombre, ces bruits doux, cette respiration lente. Demain attendra : il est très patient, tu sais.", es: "El día ha terminado. Lo hecho, hecho está. El aquí y el ahora, por la noche, es este cielo oscuro, estos ruidos suaves, esta respiración lenta. Mañana esperará: es muy paciente, ya sabes." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La programación de la tele", "Un minuto de presencia junto a la ventana por la noche", "Los horarios del metro"],
        answer: 1,
        why: "«Dix-neuf heures trente» evoca la tarde parisina: mirar la ciudad sin prisa.",
      },
      sequence: {
        instr: "Ordena el ritual de la ventana:",
        events: ["Tu regardes la ville à la fenêtre", "Les lumières s'allument une par une", "Tu ne penses pas à demain", "Tu écoutes les bruits doux de la nuit", "Demain attend, très patient"],
      },
      listen: {
        intro: "Escucha el audio de la velada:",
        audioIt: "C'est le soir. Approche-toi de la fenêtre. Regarde une lumière qui s'allume. Puis une deuxième. Respire lentement, comme la ville qui se calme. Écoute un bruit doux, très loin. Il est dix-neuf heures trente, et tu es exactement ici. Demain peut attendre : ce soir, la ville t'appartient.",
        questions: [
          { q: "Que regardes-tu par la fenêtre ?", kind: "literal", options: ["Les lumières qui s'allument", "La télévision", "Ton réveil"], answer: 0, why: "«Regarde une lumière qui s'allume»." },
          { q: "Quelle heure est-il, dans l'audio ?", kind: "literal", options: ["Dix-neuf heures trente", "Neuf heures du matin", "Minuit"], answer: 0, why: "«Il est dix-neuf heures trente»." },
          { q: "Que fait demain, à la fin ?", kind: "inferencial", options: ["Il attend, très patient", "Il frappe à la porte", "Il téléphone"], answer: 0, why: "«Demain peut attendre»: se infiere del cierre paciente." },
          { q: "À qui appartient la ville, ce soir-là ?", kind: "literal", options: ["À toi", "Aux voitures", "Aux touristes"], answer: 0, why: "«Ce soir, la ville t'appartient»." },
        ],
      },
    },
  ],

  "fr-cu-a1-07": [
    {
      id: "md-fr-a1-07-1", theme: "relax mentale",
      title: "Sous les arbres du parc", titleEs: "Bajo los árboles del parque",
      minutes: 3,
      paragraphs: [
        { it: "Assis sous un grand arbre du parc, tu écoutes les feuilles. Les pensées tombent aussi, comme les feuilles. Tu ne les ramasses pas. Tu regardes le ciel entre les branches, ouvert et calme.", es: "Sentado bajo un gran árbol del parque, escuchas las hojas. Los pensamientos también caen, como las hojas. No los recoges. Miras el cielo entre las ramas, abierto y sereno." },
        { it: "La nature fait le travail : ton esprit ralentit sans effort. Dix minutes sous un arbre, et le bruit mental devient un murmure. Le relax mental n'est pas compliqué, il est juste vert.", es: "La naturaleza hace el trabajo: tu mente se ralentiza sin esfuerzo. Diez minutos bajo un árbol y el ruido mental se vuelve un murmullo. El relax mental no es complicado, simplemente es verde." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de parques de Lyon", "Dejar caer los pensamientos como hojas bajo un árbol", "Los horarios del zoo"],
        answer: 1,
        why: "El título apunta a la calma bajo los árboles, no a información del parque.",
      },
      quiz: [
        { q: "Qu'entends-tu sous l'arbre ?", kind: "literal", options: ["Les feuilles", "Le métro", "La télé"], answer: 0, why: "«tu écoutes les feuilles»." },
        { q: "Que fais-tu avec les pensées qui tombent ?", kind: "inferencial", options: ["Tu ne les ramasses pas", "Tu les écris", "Tu les cries"], answer: 0, why: "«Tu ne les ramasses pas»: se infiere que las dejas caer." },
        { q: "Que fait la nature pour ton esprit ?", kind: "critica", options: ["Elle ralentit le bruit mental sans effort", "Elle rend l'esprit plus bruyant", "Elle ne fait rien"], answer: 0, why: "«La nature fait le travail : ton esprit ralentit sans effort»." },
      ],
      vf: [
        { text: "Tu regardes le ciel entre les branches.", value: true, why: "Literal en el primer párrafo." },
        { text: "Dix minutes sous un arbre rendent le bruit mental plus fort.", value: false, why: "El texto dice que se vuelve un murmullo." },
        { text: "Le relax mental n'est pas compliqué.", value: true, why: "Frase final del segundo párrafo." },
      ],
    },
    {
      id: "md-fr-a1-07-2", theme: "meditazione",
      title: "Le pique-nique éveillé", titleEs: "El pícnic despierto",
      minutes: 2,
      paragraphs: [
        { it: "Sur l'herbe du parc, pose ton sandwich. Regarde-le vraiment : le pain, la couleur, la forme. Puis mange lentement, sans écran. Le parc devient ton restaurant de pleine conscience, avec le ciel pour plafond.", es: "Sobre la hierba del parque, deja tu sándwich. Míralo de verdad: el pan, el color, la forma. Luego come despacio, sin pantalla. El parque se convierte en tu restaurante de atención plena, con el cielo por techo." },
        { it: "La méditation se cache dans les gestes simples. Étendre la nappe, ouvrir la bouteille, partager les olives : chaque geste, fait avec attention, devient une petite méditation au grand air.", es: "La meditación se esconde en los gestos simples. Extender el mantel, abrir la botella, compartir las aceitunas: cada gesto, hecho con atención, se convierte en una pequeña meditación al aire libre." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Recetas de sándwiches", "El pícnic como práctica de atención plena", "Una lista de parques para pícnic"],
        answer: 1,
        why: "«Le pique-nique éveillé» une comida al aire libre y atención.",
      },
      intruder: {
        instr: "Una de estas frases NO encaja con el texto. ¿Cuál es el intruso?",
        sentences: [
          "Sur l'herbe, tu poses ton sandwich et tu le regardes.",
          "Tu manges lentement, sans écran.",
          "Étendre la nappe devient une petite méditation.",
          "Les fourmis adorent les miettes de pain.",
          "Chaque geste fait avec attention est une méditation.",
        ],
        intruder: 3,
        why: "Las hormigas son un detalle ecológico simpático, pero no pertenecen a la práctica atenta: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: [
          "Chaque geste du pique-nique, fait avec attention, devient une méditation",
          "Le pique-nique est une perte de temps",
          "Il faut manger très vite pour méditer",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen:",
        secondary: [
          "Tu regardes ton sandwich vraiment",
          "Tu manges lentement, sans écran",
          "Tu partages les olives",
        ],
        distractors: [
          "Tu allumes la télé sur l'herbe",
          "Le parc ferme à midi",
          "Tu manges dix sandwichs",
        ],
      },
    },
    {
      id: "md-fr-a1-07-3", theme: "relax fisico",
      title: "Le corps après le sport", titleEs: "El cuerpo después del deporte",
      minutes: 3,
      paragraphs: [
        { it: "Après le footing, ne cours pas vers ton téléphone. Marche lentement. Sens ton cœur qui ralentit. Ta respiration revient toute seule, vague après vague, comme la mer qui se retire doucement.", es: "Después de correr, no corras hacia tu teléfono. Camina despacio. Siente tu corazón desacelerar. Tu respiración vuelve sola, ola tras ola, como el mar que se retira suavemente." },
        { it: "Allonge-toi sur l'herbe, deux minutes. Ferme les yeux. Sens la chaleur de ton corps qui travaille encore. Le sport détend les muscles ; le repos conscient détend tout le reste, gratuitement.", es: "Túmbate en la hierba dos minutos. Cierra los ojos. Siente el calor de tu cuerpo que aún trabaja. El deporte relaja los músculos; el descanso consciente relaja todo lo demás, gratis." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Récords de running", "Relajar el cuerpo después de correr", "Una crítica del footing"],
        answer: 1,
        why: "El título habla del cuerpo después del deporte: recuperación consciente.",
      },
      sequence: {
        instr: "Ordena la recuperación consciente:",
        events: ["Tu finis ton footing", "Tu marches lentement", "Ton cœur ralentit", "Tu t'allonges sur l'herbe deux minutes", "Le repos conscient détend tout le corps"],
      },
      listen: {
        intro: "Escucha el audio post-esfuerzo:",
        audioIt: "Bienvenue après l'effort. Marche doucement, épaules basses. Sens ton cœur ralentir, battement après battement. Maintenant, allonge-toi sur l'herbe si tu peux. Ferme les yeux. Sens la chaleur dans tes jambes : elles ont bien travaillé. Trois respirations lentes. Ton corps dit merci, et la journée sourit.",
        questions: [
          { q: "Que fais-tu tout de suite après le footing ?", kind: "literal", options: ["Tu marches doucement", "Tu téléphones", "Tu dors"], answer: 0, why: "«Marche doucement»." },
          { q: "Que sens-tu dans tes jambes ?", kind: "literal", options: ["De la chaleur", "Du froid polaire", "Rien du tout"], answer: 0, why: "«Sens la chaleur dans tes jambes»." },
          { q: "Combien de respirations à la fin ?", kind: "literal", options: ["Trois", "Trente", "Aucune"], answer: 0, why: "«Trois respirations lentes»." },
          { q: "Que dit ton corps, à la fin ?", kind: "inferencial", options: ["Merci", "Au revoir", "Non"], answer: 0, why: "«Ton corps dit merci»: se infiere del cierre agradecido." },
        ],
      },
    },
  ],

  "fr-cu-a1-08": [
    {
      id: "md-fr-a1-08-1", theme: "spiritualità",
      title: "Merci avant le dîner", titleEs: "Gracias antes de cenar",
      minutes: 3,
      paragraphs: [
        { it: "Dans le bouchon, avant la première bouchée, une seconde de silence. Merci à la cuisinière. Merci aux produits de la région. La table est un petit autel du quotidien, avec sa nappe à carreaux.", es: "En el bouchon, antes del primer bocado, un segundo de silencio. Gracias a la cocinera. Gracias a los productos de la región. La mesa es un pequeño altar de lo cotidiano, con su mantel de cuadros." },
        { it: "Partager un repas est une pratique spirituelle très ancienne. La nourriture relie la terre, les mains et les visages. Un dîner tranquille, c'est de l'amour qui se mange, lentement.", es: "Compartir una comida es una práctica espiritual muy antigua. El alimento conecta la tierra, las manos y los rostros. Una cena tranquila es amor que se come, despacio." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La carta de un restaurante lionés", "El agradecimiento antes de cenar como práctica espiritual", "Un anuncio de un bouchon"],
        answer: 1,
        why: "«Merci avant le dîner» apunta a la gratitud, no al menú.",
      },
      quiz: [
        { q: "Que fais-tu avant la première bouchée ?", kind: "literal", options: ["Une seconde de silence et un merci", "Tu cries dans le restaurant", "Tu regardes ton téléphone"], answer: 0, why: "«avant la première bouchée, une seconde de silence»." },
        { q: "À quoi la table est-elle comparée ?", kind: "inferencial", options: ["À un petit autel du quotidien", "À un bureau", "À une gare"], answer: 0, why: "Se infiere de «La table est un petit autel du quotidien»." },
        { q: "Qu'est-ce qu'un dîner tranquille, selon le texte ?", kind: "critica", options: ["De l'amour qui se mange", "Une obligation sociale", "Une perte de temps"], answer: 0, why: "«Un dîner tranquille, c'est de l'amour qui se mange»." },
      ],
      vf: [
        { text: "Tu remercies la cuisinière et les produits de la région.", value: true, why: "«Merci à la cuisinière. Merci aux produits de la région»." },
        { text: "Partager un repas est une pratique spirituelle ancienne.", value: true, why: "Literal en el segundo párrafo." },
        { text: "La nourriture ne relie rien ni personne.", value: false, why: "El texto dice que conecta la tierra, las manos y los rostros." },
      ],
    },
    {
      id: "md-fr-a1-08-2", theme: "relax mentale",
      title: "L'attente savoureuse", titleEs: "La espera sabrosa",
      minutes: 2,
      paragraphs: [
        { it: "Le plat arrive lentement dans le petit restaurant. Tu n'as pas ton téléphone. Alors tu regardes la salle, les voix, les sourires. L'attente devient une pause douce, que personne ne t'a offerte : tu l'as créée.", es: "El plato llega despacio en el pequeño restaurante. No tienes tu teléfono. Entonces miras la sala, las voces, las sonrisas. La espera se vuelve una pausa suave que nadie te ha ofrecido: la has creado tú." },
        { it: "Savoir attendre est un trésor mental. Ton esprit s'ennuie une minute, puis s'ouvre comme une fenêtre. Le silence à table n'est pas un vide : c'est de la place pour le plaisir qui vient.", es: "Saber esperar es un tesoro mental. Tu mente se aburre un minuto y luego se abre como una ventana. El silencio en la mesa no es un vacío: es espacio para el placer que viene." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo reclamar en un restaurante", "Saber esperar sin teléfono como descanso mental", "Una guía de restaurantes de París"],
        answer: 1,
        why: "«L'attente savoureuse» reivindica la espera como pausa.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Le plat arrive lentement dans le petit restaurant.",
          "Tu regardes la salle, les voix, les sourires.",
          "L'attente devient une pause douce.",
          "Le chef prépare aussi des commandes à emporter.",
          "Le silence à table est de la place pour le plaisir.",
        ],
        intruder: 3,
        why: "El servicio a domicilio es logística del restaurante, no la experiencia de la espera: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: [
          "Savoir attendre ouvre l'esprit, comme une fenêtre",
          "Attendre est toujours horrible",
          "Il faut crier pour être servi vite",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen:",
        secondary: [
          "Tu n'as pas ton téléphone",
          "Tu regardes la salle et les sourires",
          "Le silence à table est de la place pour le plaisir",
        ],
        distractors: [
          "Tu commandes dix plats",
          "Le restaurant ferme dans cinq minutes",
          "Tu joues de la musique à table",
        ],
      },
    },
    {
      id: "md-fr-a1-08-3", theme: "qui e ora",
      title: "La première gorgée", titleEs: "El primer sorbo",
      minutes: 3,
      paragraphs: [
        { it: "La tisane arrive, fumante. Attends une seconde. Sens la tasse entre tes mains, la chaleur qui monte. Puis bois la première gorgée, lentement. Elle est chaude, douce, parfaite, unique.", es: "La infusión llega humeante. Espera un segundo. Siente la taza entre tus manos, el calor que sube. Luego bebe el primer sorbo, despacio. Está caliente, suave, perfecto, único." },
        { it: "La première gorgée n'arrive qu'une fois. C'est un instant unique, comme tous les instants. Quand tu fais vraiment attention, la vie a le goût du miel et de la chaleur du soir.", es: "El primer sorbo solo llega una vez. Es un instante único, como todos los instantes. Cuando pones verdadera atención, la vida sabe a miel y al calor de la noche." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una cata de tés", "El primer sorbo como instante único", "Los beneficios de la tila"],
        answer: 1,
        why: "El título se centra en el primer sorbo y su carácter único.",
      },
      sequence: {
        instr: "Ordena el ritual de la tisane:",
        events: ["La tisane arrive, fumante", "Tu attends une seconde", "Tu sens la tasse entre tes mains", "Tu bois la première gorgée lentement", "La vie a le goût du miel"],
      },
      listen: {
        intro: "Escucha el audio de la tisane:",
        audioIt: "Ta tisane est prête. Elle fume doucement. Prends la tasse avec tes deux mains. Sens la chaleur, comme un petit soleil. Maintenant, la première gorgée, très lentement. Chaud. Doux. Unique. Cette gorgée n'arrive qu'une fois dans l'histoire du monde. Souris : tu viens de boire un instant précieux.",
        questions: [
          { q: "Comment prends-tu la tasse ?", kind: "literal", options: ["Avec tes deux mains", "Avec les pieds", "Avec des gants"], answer: 0, why: "«Prends la tasse avec tes deux mains»." },
          { q: "À quoi la chaleur est-elle comparée ?", kind: "literal", options: ["À un petit soleil", "À un orage", "À un feu de cheminée géant"], answer: 0, why: "«comme un petit soleil»." },
          { q: "Combien de fois la première gorgée arrive-t-elle ?", kind: "inferencial", options: ["Une seule fois", "Tous les jours", "Cent fois"], answer: 0, why: "«Cette gorgée n'arrive qu'une fois»: se infiere el carácter único." },
          { q: "Que fais-tu à la fin de l'audio ?", kind: "literal", options: ["Tu souris", "Tu pleures", "Tu dors"], answer: 0, why: "«Souris : tu viens de boire un instant précieux»." },
        ],
      },
    },
  ],

  "fr-cu-a1-09": [
    {
      id: "md-fr-a1-09-1", theme: "meditazione",
      title: "Sur le quai de la gare", titleEs: "En el andén de la estación",
      minutes: 3,
      paragraphs: [
        { it: "Sur le quai, le train attend. Au lieu de courir, assieds-toi une minute. Regarde les rails, les voyageurs, le grand toit de fer de la gare. Ta respiration est ton billet intérieur : personne ne peut le composter à ta place.", es: "En el andén, el tren espera. En lugar de correr, siéntate un minuto. Mira las vías, los viajeros, el gran techo de hierro de la estación. Tu respiración es tu billete interior: nadie puede validarlo en tu lugar." },
        { it: "Les gares sont des temples du mouvement. Tout part, tout arrive, et toi tu es au centre, immobile et calme. Voyager commence avant le train : voyager commence dans le souffle, ici et maintenant.", es: "Las estaciones son templos del movimiento. Todo parte, todo llega, y tú estás en el centro, inmóvil y sereno. Viajar empieza antes del tren: viajar empieza en el aliento, aquí y ahora." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de la SNCF", "Meditar en el andén antes de subir al tren", "Los retrasos de los trenes"],
        answer: 1,
        why: "«Sur le quai de la gare» une estación y calma interior.",
      },
      quiz: [
        { q: "Que fais-tu sur le quai, au lieu de courir ?", kind: "literal", options: ["Tu t'assieds une minute", "Tu cries", "Tu achètes dix billets"], answer: 0, why: "«Au lieu de courir, assieds-toi une minute»." },
        { q: "Qu'est-ce que «ton billet intérieur» ?", kind: "inferencial", options: ["Ta respiration", "Ton passeport", "Ton téléphone"], answer: 0, why: "Se infiere: nadie puede compostar tu respiración; es tu acceso a la calma." },
        { q: "Où commence le voyage, selon le texte ?", kind: "critica", options: ["Dans le souffle, avant le train", "À l'arrivée seulement", "Dans la file du guichet"], answer: 0, why: "«Voyager commence avant le train : voyager commence dans le souffle»." },
      ],
      vf: [
        { text: "Les gares sont comparées à des temples du mouvement.", value: true, why: "Metáfora literal del segundo párrafo." },
        { text: "Quelqu'un peut composter ton billet intérieur.", value: false, why: "«Personne ne peut le composter à ta place»." },
        { text: "Tout part et tout arrive, et toi tu es au centre.", value: true, why: "Literal en el segundo párrafo." },
      ],
    },
    {
      id: "md-fr-a1-09-2", theme: "spiritualità",
      title: "Le train et le lâcher-prise", titleEs: "El tren y el desapego",
      minutes: 2,
      paragraphs: [
        { it: "Le train part à l'heure, avec toi ou sans toi. C'est une vieille leçon des gares : on ne contrôle pas tout. Tu as ton billet, ton siège, ton souffle. Le reste appartient au voyage, pas à toi.", es: "El tren sale a tiempo, contigo o sin ti. Es una vieja lección de las estaciones: no lo controlamos todo. Tienes tu billete, tu asiento, tu aliento. El resto pertenece al viaje, no a ti." },
        { it: "Lâcher prise est une sagesse spirituelle très ancienne : faire sa part et confier le reste au chemin. Le paysage défile, les pensées défilent aussi. Le train avance tout seul, et toi, tu souris.", es: "Soltar es una sabiduría espiritual muy antigua: hacer la propia parte y confiar el resto al camino. El paisaje desfila, los pensamientos también desfilan. El tren avanza solo, y tú sonríes." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo no perder el tren", "El desapego como sabiduría antigua: hacer la propia parte y confiar", "Los horarios de la SNCF"],
        answer: 1,
        why: "«Le train et le lâcher-prise» une el viaje con la sabiduría de soltar el control.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Le train part à l'heure, avec toi ou sans toi.",
          "On ne contrôle pas tout, c'est une vieille leçon.",
          "Tu as ton billet, ton siège, ton souffle.",
          "Le train de Bruxelles arrive sur la voie numéro sept.",
          "Fais ta part et confie le reste au chemin.",
        ],
        intruder: 3,
        why: "El anuncio de la vía es información de estación, no la sabiduría del desapego: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: [
          "Fais ta part et confie le reste au chemin : le lâcher-prise",
          "Il faut courir après le train",
          "On contrôle tout dans la vie",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen:",
        secondary: [
          "On ne contrôle pas tout",
          "Tu as ton billet, ton siège, ton souffle",
          "Le train avance tout seul",
        ],
        distractors: [
          "Tu conduis le train toi-même",
          "Le contrôleur chante une chanson",
          "Les trains ne partent jamais",
        ],
      },
    },
    {
      id: "md-fr-a1-09-3", theme: "relax fisico",
      title: "Détente du voyageur", titleEs: "Relajación del viajero",
      minutes: 3,
      paragraphs: [
        { it: "Assis dans le train, pose les deux pieds sur le sol. Détends tes épaules. Tourne doucement ta tête à gauche, puis à droite. Ton corps voyage aussi, et il a besoin de petites pauses, lui aussi.", es: "Sentado en el tren, apoya los dos pies en el suelo. Relaja los hombros. Gira suavemente la cabeza a la izquierda y luego a la derecha. Tu cuerpo también viaja, y necesita pequeñas pausas, igual que tú." },
        { it: "Toutes les heures de voyage, une mini-pause : les chevilles, les épaules, la nuque. Deux minutes de gestes lents, et tu arrives à destination frais comme une rose. Le train devient presque un spa qui roule.", es: "Cada hora de viaje, una mini-pausa: los tobillos, los hombros, la nuca. Dos minutos de gestos lentos y llegas a destino fresco como una rosa. El tren se vuelve casi un spa sobre ruedas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Ejercicios para el avión", "Mini-pausas físicas durante un viaje en tren", "Las maletas perdidas"],
        answer: 1,
        why: "«Détente du voyageur» apunta a la relajación física del viajero.",
      },
      sequence: {
        instr: "Ordena la pausa del viajero:",
        events: ["Tu poses les deux pieds sur le sol", "Tu détends tes épaules", "Tu tournes la tête doucement à gauche et à droite", "Toutes les heures : chevilles, épaules, nuque", "Tu arrives frais à destination"],
      },
      listen: {
        intro: "Escucha la pausa del viajero:",
        audioIt: "Pause du voyageur. Pose les deux pieds bien à plat. Roule les épaules en arrière, une fois, deux fois. Tourne la tête à gauche, doucement. Puis à droite, doucement. Bouge tes chevilles, comme si tu dessinais des cercles. Respire. Tu arrives frais, même après trois heures de TGV.",
        questions: [
          { q: "Où poses-tu les deux pieds ?", kind: "literal", options: ["Sur le sol", "Sur la table", "Sur le siège voisin"], answer: 0, why: "«Pose les deux pieds bien à plat»." },
          { q: "Que fais-tu avec les épaules ?", kind: "literal", options: ["Tu les roules en arrière", "Tu les montes aux oreilles", "Tu les serres fort"], answer: 0, why: "«Roule les épaules en arrière»." },
          { q: "Que dessinent tes chevilles ?", kind: "literal", options: ["Des cercles", "Des carrés", "Des étoiles"], answer: 0, why: "«comme si tu dessinais des cercles»." },
          { q: "Comment arrives-tu, même après trois heures ?", kind: "inferencial", options: ["Frais", "Fâché", "Fatigué mort"], answer: 0, why: "«Tu arrives frais, même après trois heures de TGV»." },
        ],
      },
    },
  ],

  "fr-cu-a1-10": [
    {
      id: "md-fr-a1-10-1", theme: "qui e ora",
      title: "La pluie sur la fenêtre", titleEs: "La lluvia en la ventana",
      minutes: 3,
      paragraphs: [
        { it: "Il pleut sur Nantes. Écoute la pluie sur la fenêtre : toc, toc, toc. Chaque goutte est unique et meurt sur le verre. Toi aussi, tu es là, une fois seulement, dans cet instant précis.", es: "Llueve sobre Nantes. Escucha la lluvia en la ventana: toc, toc, toc. Cada gota es única y muere en el cristal. Tú también estás ahí, una sola vez, en este instante preciso." },
        { it: "La pluie n'est pas un problème : c'est une musique gratuite. Rester un instant à l'écouter, sans rien faire, c'est entrer dans l'ici et maintenant par la porte du ciel, grande ouverte.", es: "La lluvia no es un problema: es una música gratis. Quedarse un instante escuchándola, sin hacer nada, es entrar en el aquí y el ahora por la puerta del cielo, bien abierta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un parte meteorológico", "Escuchar la lluvia como música del presente", "Los paraguas más vendidos"],
        answer: 1,
        why: "El título une lluvia y ventana: contemplación, no información.",
      },
      quiz: [
        { q: "Que fais-tu quand il pleut sur Nantes ?", kind: "literal", options: ["Tu écoutes la pluie sur la fenêtre", "Tu fermes tout", "Tu cries de colère"], answer: 0, why: "«Écoute la pluie sur la fenêtre»." },
        { q: "Que deviennent les gouttes sur le verre ?", kind: "inferencial", options: ["Elles meurent sur le verre, uniques", "Elles rentrent dans la maison", "Elles deviennent du café"], answer: 0, why: "«Chaque goutte est unique et meurt sur le verre»." },
        { q: "Qu'est-ce que la pluie, pour le texte ?", kind: "critica", options: ["Une musique gratuite", "Un problème terrible", "Une punition du ciel"], answer: 0, why: "«La pluie n'est pas un problème : c'est une musique gratuite»." },
      ],
      vf: [
        { text: "Tu restes un instant sans rien faire.", value: true, why: "«Rester un instant à l'écouter, sans rien faire»." },
        { text: "La pluie est une punition du ciel.", value: false, why: "El texto la llama música gratuita." },
        { text: "Écouter la pluie est une porte vers l'ici et maintenant.", value: true, why: "«c'est entrer dans l'ici et maintenant par la porte du ciel»." },
      ],
    },
    {
      id: "md-fr-a1-10-2", theme: "spiritualità",
      title: "Les saisons de la vie", titleEs: "Las estaciones de la vida",
      minutes: 2,
      paragraphs: [
        { it: "La nature change de saison sans peur. L'arbre perd ses feuilles en automne et se repose en hiver. Il ne demande pardon à personne. Il suit le rythme du ciel, tranquillement, depuis toujours.", es: "La naturaleza cambia de estación sin miedo. El árbol pierde sus hojas en otoño y descansa en invierno. No pide perdón a nadie. Sigue el ritmo del cielo, tranquilamente, desde siempre." },
        { it: "Toi aussi, tu as tes saisons : des moments verts, des moments nus. Les accepter est une sagesse spirituelle très ancienne. Après chaque hiver intérieur, le printemps revient, fidèle.", es: "Tú también tienes tus estaciones: momentos verdes, momentos desnudos. Aceptarlas es una sabiduría espiritual muy antigua. Después de cada invierno interior, la primavera vuelve, fiel." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["El calendario agrícola", "Aceptar las propias estaciones internas", "Una guía de jardinería"],
        answer: 1,
        why: "«Les saisons de la vie» traslada las estaciones al ánimo humano.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "L'arbre perd ses feuilles en automne, sans peur.",
          "Il se repose en hiver, tranquillement.",
          "Il ne demande pardon à personne.",
          "Les feuilles mortes servent à faire du compost.",
          "Après chaque hiver intérieur, le printemps revient.",
        ],
        intruder: 3,
        why: "El compost es jardinería útil, pero ajeno a la metáfora espiritual: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: [
          "Accepter ses saisons intérieures est une sagesse ancienne",
          "Il faut rester vert toute l'année",
          "L'hiver intérieur ne finit jamais",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen:",
        secondary: [
          "L'arbre perd ses feuilles sans peur",
          "L'arbre ne demande pardon à personne",
          "Après chaque hiver intérieur, le printemps revient",
        ],
        distractors: [
          "L'arbre déménage en hiver",
          "Les arbres votent au printemps",
          "Tu coupes l'arbre chaque automne",
        ],
      },
    },
    {
      id: "md-fr-a1-10-3", theme: "relax fisico",
      title: "Le soleil sur la peau", titleEs: "El sol en la piel",
      minutes: 3,
      paragraphs: [
        { it: "Quand le soleil revient après la pluie, sors cinq minutes. Ferme les yeux. Sens la chaleur sur ton visage, tes paupières, tes épaules. Le soleil est un massage gratuit pour la peau et le cœur.", es: "Cuando el sol vuelve después de la lluvia, sal cinco minutos. Cierra los ojos. Siente el calor en tu cara, tus párpados, tus hombros. El sol es un masaje gratis para la piel y el corazón." },
        { it: "Respire profondément, trois fois, la peau au soleil. Sens les épaules qui descendent, le sourire qui monte tout seul. Ce petit rituel printanier vaut tous les spas du monde, sans rendez-vous.", es: "Respira profundo, tres veces, con la piel al sol. Siente los hombros que bajan, la sonrisa que sube sola. Este pequeño ritual primaveral vale por todos los spas del mundo, sin cita previa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de spas", "Sentir el sol en la piel como relajación física", "Los índices de radiación"],
        answer: 1,
        why: "«Le soleil sur la peau» apunta a la sensación física del calor.",
      },
      sequence: {
        instr: "Ordena el ritual del sol:",
        events: ["Le soleil revient après la pluie", "Tu sors cinq minutes", "Tu fermes les yeux", "Tu sens la chaleur sur ton visage", "Tes épaules descendent, ton sourire monte"],
      },
      listen: {
        intro: "Escucha el ritual del sol:",
        audioIt: "La pluie s'arrête. Le soleil sort, timide. Va à la fenêtre ou dehors, cinq minutes. Ferme les yeux. Sens la chaleur sur ton visage, comme une main douce. Trois respirations profondes, la peau ouverte. Les épaules descendent. Un sourire monte, tout seul. Merci, le soleil : ton massage est gratuit.",
        questions: [
          { q: "Combien de temps sors-tu ?", kind: "literal", options: ["Cinq minutes", "Cinq heures", "Cinq secondes"], answer: 0, why: "«cinq minutes» está literal." },
          { q: "À quoi la chaleur est-elle comparée ?", kind: "literal", options: ["À une main douce", "À une gifle", "À un gant de boxe"], answer: 0, why: "«comme une main douce»." },
          { q: "Combien de respirations profondes ?", kind: "literal", options: ["Trois", "Trente", "Aucune"], answer: 0, why: "«Trois respirations profondes»." },
          { q: "Que fait ton sourire ?", kind: "inferencial", options: ["Il monte tout seul", "Il descend", "Il part en vacances"], answer: 0, why: "«Un sourire monte, tout seul»: se infiere la espontaneidad." },
        ],
      },
    },
  ],

  "fr-cu-a1-11": [
    {
      id: "md-fr-a1-11-1", theme: "relax fisico",
      title: "Essayer sans se juger", titleEs: "Probarse sin juzgarse",
      minutes: 3,
      paragraphs: [
        { it: "Dans la cabine d'essayage, respire. Le miroir montre un corps, pas une note. Tu essaies une chemise, c'est tout. Pas de juge, pas de verdict : seulement du tissu, de la lumière et toi.", es: "En el probador, respira. El espejo muestra un cuerpo, no una nota. Te pruebas una camisa, eso es todo. Sin juez, sin veredicto: solo tela, luz y tú." },
        { it: "Le corps change avec les saisons, comme les vitrines. Être son ami, c'est un relax profond. Détends tes épaules devant le miroir et souris : la bienveillance est ta meilleure taille.", es: "El cuerpo cambia con las estaciones, como los escaparates. Ser su amigo es una relajación profunda. Relaja los hombros ante el espejo y sonríe: la amabilidad es tu mejor talla." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Las tallas de la moda francesa", "Probarse ropa sin juzgarse, con amabilidad", "Una guía de tiendas del Marais"],
        answer: 1,
        why: "«Essayer sans se juger» une probador y ausencia de juicio.",
      },
      quiz: [
        { q: "Que montre le miroir de la cabine ?", kind: "literal", options: ["Un corps, pas une note", "Un prix", "Un film"], answer: 0, why: "«Le miroir montre un corps, pas une note»." },
        { q: "Comment traiter son corps, selon le texte ?", kind: "inferencial", options: ["Comme un ami", "Comme un ennemi", "Comme un meuble"], answer: 0, why: "«Être son ami, c'est un relax profond»." },
        { q: "Quelle est «la meilleure taille» ?", kind: "critica", options: ["La bienveillance envers soi-même", "La taille S", "La taille 38"], answer: 0, why: "«La bienveillance est ta meilleure taille»." },
      ],
      vf: [
        { text: "Tu détends tes épaules devant le miroir.", value: true, why: "Literal en el segundo párrafo." },
        { text: "Le corps change avec les saisons, comme les vitrines.", value: true, why: "Comparación literal del texto." },
        { text: "Le miroir donne une note sur dix.", value: false, why: "El texto dice que muestra un cuerpo, no una nota." },
      ],
    },
    {
      id: "md-fr-a1-11-2", theme: "relax mentale",
      title: "Je regarde seulement", titleEs: "Solo estoy mirando",
      minutes: 2,
      paragraphs: [
        { it: "«Je regarde seulement», dis-tu à la vendeuse. C'est vrai : tu regardes, tu ne cours pas après les soldes. Les objets défilent comme des nuages dans une vitrine, sans que tu les arrêtes.", es: "«Solo estoy mirando», dices a la dependienta. Es verdad: miras, no corres tras las rebajas. Los objetos desfilan como nubes en un escaparate, sin que tú los detengas." },
        { it: "Regarder sans acheter apaise l'esprit. Le désir passe, revient, repart, comme les saisons. Toi, tu restes : calme, libre, les mains ouvertes. La vitrine est un cinéma gratuit, et tu as le meilleur siège.", es: "Mirar sin comprar apacigua la mente. El deseo pasa, vuelve, se va, como las estaciones. Tú permaneces: sereno, libre, con las manos abiertas. El escaparate es un cine gratis, y tú tienes el mejor asiento." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los descuentos de enero", "Mirar escaparates sin comprar como calma mental", "Una crítica del consumismo"],
        answer: 1,
        why: "«Je regarde seulement» reivindica mirar sin comprar.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "«Je regarde seulement», dis-tu à la vendeuse.",
          "Tu ne cours pas après les soldes.",
          "Les objets défilent comme des nuages dans la vitrine.",
          "La boutique ouvre aussi le dimanche dans le Marais.",
          "Tu restes calme, libre, les mains ouvertes.",
        ],
        intruder: 3,
        why: "El horario dominical es información comercial, no la calma del paseante: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: [
          "Regarder sans acheter apaise l'esprit",
          "Il faut tout acheter tout de suite",
          "Les vitrines sont inutiles",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen:",
        secondary: [
          "Tu regardes, tu ne cours pas après les soldes",
          "Les objets défilent comme des nuages",
          "Tu restes calme, libre, les mains ouvertes",
        ],
        distractors: [
          "Tu achètes tout le Marais",
          "La vitrine te doit de l'argent",
          "Tu dors dans la vitrine",
        ],
      },
    },
    {
      id: "md-fr-a1-11-3", theme: "meditazione",
      title: "La respiration du flâneur", titleEs: "La respiración del paseante",
      minutes: 3,
      paragraphs: [
        { it: "Flâner, c'est marcher sans but. Dans les rues du Marais, ralentis. Une vitrine, une porte ancienne, un chat endormi : chaque chose reçoit une seconde de ton attention, comme un petit cadeau.", es: "Pasear sin rumbo es caminar sin objetivo. En las calles de Le Marais, aminora. Un escaparate, una puerta antigua, un gato dormido: cada cosa recibe un segundo de tu atención, como un pequeño regalo." },
        { it: "Le flâneur est un méditant debout. Sa respiration suit ses pas, son attention suit ses yeux. Une heure de flânerie vaut une heure de calme : la ville devient son monastère silencieux.", es: "El paseante es un meditador de pie. Su respiración sigue sus pasos, su atención sigue sus ojos. Una hora de paseo vale una hora de calma: la ciudad se vuelve su monasterio silencioso." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Las mejores calles para comprar", "Caminar sin rumbo como meditación", "La historia del Marais"],
        answer: 1,
        why: "«La respiration du flâneur» une paseo sin rumbo y respiración consciente.",
      },
      sequence: {
        instr: "Ordena el paseo del flâneur:",
        events: ["Tu flânes sans but dans le Marais", "Tu ralentis", "Chaque chose reçoit une seconde d'attention", "Ta respiration suit tes pas", "La ville devient ton monastère"],
      },
      listen: {
        intro: "Escucha al flâneur:",
        audioIt: "Bienvenue dans la flânerie. Marche sans but, un peu plus lentement. Voici une vitrine : regarde une seconde. Voici une porte ancienne : regarde une seconde. Un chat dort au soleil : souris. Ta respiration suit tes pas. Continue dix minutes. Tu es un flâneur : la ville est ton monastère.",
        questions: [
          { q: "Qu'est-ce que flâner ?", kind: "literal", options: ["Marcher sans but", "Courir très vite", "Acheter beaucoup"], answer: 0, why: "«Flâner, c'est marcher sans but»." },
          { q: "Que fait le chat, dans l'audio ?", kind: "literal", options: ["Il dort au soleil", "Il vend des fleurs", "Il conduit une voiture"], answer: 0, why: "«Un chat dort au soleil»." },
          { q: "Combien de temps continues-tu ?", kind: "literal", options: ["Dix minutes", "Dix heures", "Dix jours"], answer: 0, why: "«Continue dix minutes»." },
          { q: "Qu'est-ce que la ville, pour le flâneur ?", kind: "inferencial", options: ["Son monastère", "Son stade", "Son bureau"], answer: 0, why: "«La ville est ton monastère»: se infiere de la comparación final." },
        ],
      },
    },
  ],

  "fr-cu-a1-12": [
    {
      id: "md-fr-a1-12-1", theme: "spiritualità",
      title: "La ville comme maître", titleEs: "La ciudad como maestra",
      minutes: 3,
      paragraphs: [
        { it: "Paris est une maîtresse exigeante : elle fait du bruit, elle presse, elle éblouit. Mais ses jardins murmurent une leçon très ancienne : la paix commence avec une seule personne calme.", es: "París es una maestra exigente: hace ruido, apura, deslumbra. Pero sus jardines murmuran una lección muy antigua: la paz empieza con una sola persona serena." },
        { it: "Chaque rue te pose une question : «Où cours-tu ?» Et la réponse des sages est toujours la même : nulle part, je suis ici. Même au milieu des touristes et des voitures, la paix est possible.", es: "Cada calle te hace una pregunta: «¿Adónde corres?». Y la respuesta de los sabios es siempre la misma: a ninguna parte, estoy aquí. Incluso en medio de turistas y coches, la paz es posible." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía turística de París", "La ciudad como maestra espiritual", "Estadísticas de ruido"],
        answer: 1,
        why: "«La ville comme maître» es la tesis del texto.",
      },
      quiz: [
        { q: "Quelle leçon murmurent les jardins ?", kind: "literal", options: ["La paix commence avec une personne calme", "Il faut courir plus vite", "Les jardins sont fermés"], answer: 0, why: "Literal en el primer párrafo." },
        { q: "Que signifie la question «Où cours-tu ?» ?", kind: "inferencial", options: ["La ville questionne notre précipitation", "Le métro est en panne", "Le sage est perdu"], answer: 0, why: "Se infiere: la ciudad pregunta por la prisa, y el sabio responde que está aquí." },
        { q: "Quelle est la thèse du texte ?", kind: "critica", options: ["La ville, même bruyante, peut enseigner la paix", "Il faut fuir les villes", "Le tourisme détruit tout"], answer: 0, why: "La tesis: incluso en medio del ruido, la paz es posible." },
      ],
      vf: [
        { text: "Paris fait du bruit et presse, selon le texte.", value: true, why: "«elle fait du bruit, elle presse» está literal." },
        { text: "La paix est impossible dans une ville.", value: false, why: "El texto afirma lo contrario: «la paix est possible»." },
        { text: "La réponse des sages est : «je suis ici».", value: true, why: "Literal en el segundo párrafo." },
      ],
    },
    {
      id: "md-fr-a1-12-2", theme: "relax mentale",
      title: "Le silence dans les sirènes", titleEs: "El silencio dentro de las sirenas",
      minutes: 3,
      paragraphs: [
        { it: "Sirènes, klaxons, millions de pas. La ville sonne comme une rivière d'acier. Tu ne peux pas faire taire Paris, mais tu peux faire taire la petite pièce entre tes oreilles, et c'est déjà immense.", es: "Sirenas, bocinas, millones de pasos. La ciudad suena como un río de acero. No puedes silenciar París, pero puedes silenciar la pequeña habitación entre tus orejas, y eso ya es inmenso." },
        { it: "Ferme les yeux dix secondes dans un coin sûr. Une respiration. Le bruit continue dehors, et c'est bien. Le calme n'est pas l'absence de bruit : c'est la présence de l'attention, en toi.", es: "Cierra los ojos diez segundos en un rincón seguro. Una respiración. El ruido sigue afuera, y está bien. La calma no es la ausencia de ruido: es la presencia de la atención, en ti." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Tapones para los oídos", "Calma interior en la ciudad ruidosa", "Una denuncia por ruido"],
        answer: 1,
        why: "El título opone el silencio interior a las sirenas exteriores.",
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Sirènes, klaxons, millions de pas : la ville sonne.",
          "Tu ne peux pas faire taire Paris.",
          "Mais tu peux faire taire la pièce entre tes oreilles.",
          "La ligne 4 du métro passe toutes les trois minutes.",
          "Le calme est la présence de l'attention.",
        ],
        intruder: 3,
        why: "La frecuencia del metro es un dato urbano, no la calma interior: es el intruso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: [
          "Le calme est la présence de l'attention, pas l'absence de bruit",
          "Paris est la ville la plus bruyante du monde",
          "Il faut quitter la ville pour se détendre",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen:",
        secondary: [
          "La ville sonne comme une rivière d'acier",
          "Tu peux faire taire la pièce entre tes oreilles",
          "Le bruit continue dehors, et c'est bien",
        ],
        distractors: [
          "Tu achètes des bouchons d'oreille en or",
          "Les sirènes s'arrêtent à minuit",
          "Les rivières d'acier sont dangereuses",
        ],
      },
    },
    {
      id: "md-fr-a1-12-3", theme: "qui e ora",
      title: "Minuit sur la Seine", titleEs: "Medianoche sobre el Sena",
      minutes: 3,
      paragraphs: [
        { it: "Le bateau avance lentement sur la Seine. La tour Eiffel scintille. Pour une seconde, oublie ton appareil photo. Regarde avec tes yeux : la lumière danse sur l'eau noire de la ville.", es: "El barco avanza despacio por el Sena. La torre Eiffel destella. Por un segundo, olvida tu cámara. Mira con tus ojos: la luz danza sobre el agua negra de la ciudad." },
        { it: "C'est la fin de ta journée parfaite, et elle est parfaite justement parce que tu es là. Ni hier, ni demain : seulement le fleuve, la ville dorée et ta respiration tranquille, ce soir.", es: "Es el final de tu día perfecto, y es perfecto justamente porque estás ahí. Ni ayer, ni mañana: solo el río, la ciudad dorada y tu respiración tranquila, esta noche." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cruceros por el Sena", "Un minuto de presencia al final del día en París", "La historia de los bateaux mouches"],
        answer: 1,
        why: "«Minuit sur la Seine» evoca el cierre contemplativo del día.",
      },
      sequence: {
        instr: "Ordena el último momento del día:",
        events: ["Le bateau avance lentement sur la Seine", "La tour Eiffel scintille", "Tu oublies ton appareil photo", "Tu regardes la lumière danser sur l'eau", "Tu es là, sans hier ni demain"],
      },
      listen: {
        intro: "Escucha el cierre del día perfecto:",
        audioIt: "Dernière étape de ta journée parfaite. Le bateau glisse sur la Seine, tout doucement. Regarde la ville dorée passer : les ponts, les fenêtres, le ciel noir. Ta respiration suit l'eau. Ni hier, ni demain : seulement ce fleuve tranquille. Reste ici, une minute entière. C'est ta minute parfaite.",
        questions: [
          { q: "Comment glisse le bateau ?", kind: "literal", options: ["Tout doucement", "Très vite", "En cercles"], answer: 0, why: "«Le bateau glisse sur la Seine, tout doucement»." },
          { q: "Que voit-on passer ?", kind: "literal", options: ["Les ponts, les fenêtres, le ciel noir", "Des voitures et des bus", "Des vaches"], answer: 0, why: "«les ponts, les fenêtres, le ciel noir»." },
          { q: "Que suit ta respiration ?", kind: "literal", options: ["L'eau", "Le GPS", "Le guide touristique"], answer: 0, why: "«Ta respiration suit l'eau»." },
          { q: "Combien de temps restes-tu ?", kind: "inferencial", options: ["Une minute entière", "Une seconde", "Un week-end"], answer: 0, why: "«Reste ici, une minute entière»: se infiere del cierre." },
        ],
      },
    },
  ],
};
