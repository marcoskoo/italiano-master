import type { MindReading } from "../../cambridge-mind";

/* ═══ FR A2 · Mind readings (temáticas de conciencia) — 3 por unidad ══
   Metodología v9.13: 7 estrategias de comprensión lectora y de
   escucha, en francés de Francia nivel A2 con traducción española a la
   vista. Campos `.it` = francés (lengua de estudio), `.es` = español.
   Estrategia por posición: L1 = predict + quiz (lit/inf/crít) + V/F ;
   L2 = predict + ideas + intruso ; L3 = predict + secuencia + escucha.
   Temas rotados: meditazione · spiritualità · qui e ora · relax
   fisico · relax mentale. */

export const FR_MIND_A2: Record<string, MindReading[]> = {
  "fr-cu-a2-01": [
    {
      id: "md-fr-a2-01-1", theme: "meditazione",
      title: "Avant le lundi, je respire", titleEs: "Antes del lunes, respiro", minutes: 2,
      paragraphs: [
        { it: "Le dimanche soir, la semaine arrive doucement, comme un bateau au loin. Avant de penser au lundi, asseyez-vous. Fermez les yeux. Prenez une grande respiration lente, puis une autre. Vous êtes ici, sur votre chaise, et c'est suffisant pour ce soir.", es: "El domingo por la noche, la semana llega suavemente, como un barco a lo lejos. Antes de pensar en el lunes, siéntate. Cierra los ojos. Toma una respiración lenta y grande, y luego otra. Estás aquí, en tu silla, y eso es suficiente por esta noche." },
        { it: "La méditation n'est pas compliquée. Vous respirez, vous écoutez le silence de la maison, vous sentez l'air qui entre et qui sort. Votre tête pense au bureau ? C'est normal. Vous revenez doucement à votre respiration, comme on rentre chez soi.", es: "La meditación no es complicada. Respiras, escuchas el silencio de la casa, sientes el aire que entra y que sale. ¿Tu cabeza piensa en la oficina? Es normal. Vuelves suavemente a tu respiración, como quien vuelve a casa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de meditación sencilla para la noche del domingo", "Un programa de formación profesional", "Una crítica de los lunes"],
        answer: 0,
        why: "El título «Avant le lundi, je respire» une respiración e inicio de semana: apunta a meditar.",
      },
      quiz: [
        { q: "Que faites-vous d'abord ?", kind: "literal", options: ["Vous fermez les yeux", "Vous courez", "Vous téléphonez"], answer: 0, why: "«Asseyez-vous. Fermez les yeux»: está literal al inicio del texto." },
        { q: "Pourquoi revenir à la respiration ?", kind: "inferencial", options: ["Parce que votre tête pense à autre chose", "Parce que l'air est froid", "Parce que la maison est bruyante"], answer: 0, why: "«Votre tête pense au bureau ? C'est normal»: la mente se va y la respiración la trae de vuelta." },
        { q: "Quelle est l'idée principale du texte ?", kind: "critica", options: ["Méditer, c'est simple : respirer et revenir", "Il faut travailler le dimanche soir", "La respiration est inutile"], answer: 0, why: "La idea central es la simplicidad de la práctica: respirar y volver." },
      ],
      vf: [
        { text: "Vous prenez une respiration rapide.", value: false, why: "El texto dice «une grande respiration lente»: lenta, no rápida." },
        { text: "Penser au bureau pendant la méditation est normal.", value: true, why: "«C'est normal»: la mente que divaga no es un problema." },
        { text: "Vous êtes sur votre chaise, et c'est suffisant.", value: true, why: "«Vous êtes ici, sur votre chaise, et c'est suffisant»." },
      ],
    },
    {
      id: "md-fr-a2-01-2", theme: "qui e ora",
      title: "Le thé du dimanche soir", titleEs: "El té del domingo por la noche", minutes: 2,
      paragraphs: [
        { it: "Ce soir, préparez un thé comme si c'était la première fois. Écoutez l'eau qui chauffe. Regardez la couleur qui change dans la tasse. Sentez la vapeur chaude sur votre visage. Le monde peut attendre cinq minutes : rien ne presse.", es: "Esta noche prepara un té como si fuera la primera vez. Escucha el agua que se calienta. Mira el color que cambia en la taza. Siente el vapor caliente en tu cara. El mundo puede esperar cinco minutos: nada apremia." },
        { it: "C'est cela, l'ici et maintenant : une tasse chaude entre vos mains, une odeur familière, un goût qui réveille la bouche. Hier est fini, demain n'existe pas encore. Il y a seulement ce thé, cette table, cette lumière, et vous, bien présent.", es: "Eso es el aquí y ahora: una taza caliente entre las manos, un olor familiar, un sabor que despierta la boca. Ayer terminó, mañana todavía no existe. Solo están este té, esta mesa, esta luz, y tú, bien presente." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una cata de tes de lujo", "Estar presente mientras se prepara y se bebe un té", "La historia del té en Francia"],
        answer: 1,
        why: "El título apunta al gesto cotidiano del té dominical, no a catas ni a historia.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Preparar y beber un té con plena atención es estar en el aquí y ahora",
          "Le thé français est meilleur que les autres",
          "Il faut boire le thé très vite",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Écoutez l'eau qui chauffe", "La vapeur chaude sur votre visage", "Demain n'existe pas encore"],
        distractors: ["Le thé coûte trois euros", "Vous achetez le thé en Chine", "Le thé remplace le café du matin"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Écoutez l'eau qui chauffe.",
          "Regardez la couleur qui change dans la tasse.",
          "La vapeur chaude touche votre visage.",
          "Le thé vert contient moins de caféine que le café.",
          "Il y a seulement ce thé, cette table, cette lumière.",
        ],
        intruder: 3,
        why: "El dato sobre la cafeína es información técnica ajena a la experiencia sensorial del momento: es el intruso.",
      },
    },
    {
      id: "md-fr-a2-01-3", theme: "relax fisico",
      title: "Marcher sans but", titleEs: "Caminar sin rumbo", minutes: 2,
      paragraphs: [
        { it: "Ce week-end, essayez une promenade sans but. Pas de montre, pas de destination. Marchez lentement et sentez vos pieds : le talon, la plante, les orteils. À chaque pas, votre corps se pose sur la terre et la terre vous répond.", es: "Este fin de semana prueba un paseo sin rumbo. Sin reloj, sin destino. Camina despacio y siente tus pies: el talón, la planta, los dedos. A cada paso, tu cuerpo se posa sobre la tierra y la tierra te responde." },
        { it: "Vos épaules descendent tout seules. Votre respiration s'ouvre. Après vingt minutes, vos jambes sont chaudes et légères, comme après un bon massage. La marche sans but ne va nulle part : c'est exactement pour cela qu'elle fait du bien.", es: "Tus hombros bajan solos. Tu respiración se abre. Después de veinte minutos tus piernas están calientes y ligeras, como tras un buen masaje. La caminata sin rumbo no va a ninguna parte: justo por eso hace bien." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una competición de marcha atlética", "Caminar despacio y sin destino para relajar el cuerpo", "Una guía de orientación con mapa y brújula"],
        answer: 1,
        why: "«Sans but» = sin rumbo: apunta a caminar por placer, no a competir.",
      },
      sequence: {
        instr: "Ordena los pasos de la caminata:",
        events: ["Vous sortez sans montre et sans destination", "Vous marchez lentement", "Vous sentez vos pieds à chaque pas", "Vos épaules descendent", "Vos jambes deviennent chaudes et légères"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Bonjour et bienvenue pour une marche tranquille. Nous allons marcher ensemble, sans but. D'abord, sentez le contact du pied avec le sol. Ensuite, ralentissez un peu. Maintenant, laissez tomber vos épaules. Respirez l'air frais. Continuez comme cela encore dix minutes, en silence.",
        questions: [
          { q: "Comment allez-vous marcher ?", kind: "literal", options: ["Sans but", "En courant", "Avec un plan précis"], answer: 0, why: "«Nous allons marcher ensemble, sans but»." },
          { q: "Que faites-vous avec vos épaules ?", kind: "literal", options: ["Je les lève", "Je les laisse tomber", "Je les tourne"], answer: 1, why: "«Laissez tomber vos épaules»." },
          { q: "Combien de temps continuez-vous encore ?", kind: "inferencial", options: ["Dix minutes", "Une heure", "Toute la journée"], answer: 0, why: "«Encore dix minutes, en silence»: se infiere la duración restante." },
          { q: "Dans quel état marchez-vous ?", kind: "inferencial", options: ["En silence", "En chantant", "En téléphonant"], answer: 0, why: "El cierre «en silence» indica el estado del paseo." },
        ],
      },
    },
  ],

  "fr-cu-a2-02": [
    {
      id: "md-fr-a2-02-1", theme: "spiritualità",
      title: "La gratitude du chemin", titleEs: "La gratitud del camino", minutes: 3,
      paragraphs: [
        { it: "Il existe une spiritualité très simple : celle des pas. Quand vous marchez dans la nature, remerciez intérieurement. Merci pour l'air, merci pour les arbres, merci pour vos jambes qui portent votre vie. Vous ne demandez rien : vous accueillez tout.", es: "Existe una espiritualidad muy simple: la de los pasos. Cuando caminas en la naturaleza, agradece por dentro. Gracias por el aire, gracias por los árboles, gracias por tus piernas que llevan tu vida. No pides nada: lo acoges todo." },
        { it: "Cette gratitude ne coûte rien et change tout. Le monde devient un cadeau : le chant d'un oiseau, une pierre chaude, l'ombre d'un arbre. Beaucoup de traditions le disent à leur manière : être vivant, ici et maintenant, c'est déjà recevoir.", es: "Esa gratitud no cuesta nada y lo cambia todo. El mundo se vuelve un regalo: el canto de un pájaro, una piedra caliente, la sombra de un árbol. Muchas tradiciones lo dicen a su manera: estar vivo, aquí y ahora, ya es recibir." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un texto devoto de una religión concreta", "La gratitud sencilla al caminar como práctica espiritual", "Un manual de senderismo de montaña"],
        answer: 1,
        why: "El título «La gratitude du chemin» apunta a agradecer mientras se camina, sin religión concreta.",
      },
      quiz: [
        { q: "Que faites-vous quand vous marchez dans la nature ?", kind: "literal", options: ["Je remercie intérieurement", "J'écoute de la musique", "Je compte mes pas"], answer: 0, why: "«Remerciez intérieurement» está literal en el primer párrafo." },
        { q: "Que devient le monde avec la gratitude ?", kind: "inferencial", options: ["Un cadeau", "Un problème", "Un devoir"], answer: 0, why: "«Le monde devient un cadeau»: la gratitud transforma la mirada." },
        { q: "Quelle phrase résume le texte ?", kind: "critica", options: ["Être vivant, ici et maintenant, c'est déjà recevoir", "Il faut marcher vite pour être spirituel", "La gratitude coûte très cher"], answer: 0, why: "Resume la idea central: la vida misma como regalo." },
      ],
      vf: [
        { text: "Vous demandez beaucoup de choses pendant la marche.", value: false, why: "«Vous ne demandez rien : vous accueillez tout»." },
        { text: "La gratitude ne coûte rien.", value: true, why: "«Cette gratitude ne coûte rien et change tout»." },
        { text: "Vos jambes portent votre vie.", value: true, why: "«Merci pour vos jambes qui portent votre vie»." },
      ],
    },
    {
      id: "md-fr-a2-02-2", theme: "relax mentale",
      title: "Le silence après la visite", titleEs: "El silencio después de la visita", minutes: 2,
      paragraphs: [
        { it: "Après une grande journée de visite, votre tête est pleine : des tableaux, des files d'attente, des voix, des photos. Asseyez-vous dans le train. Fermez les yeux. Laissez la journée se poser en vous, comme la poussière après la marche.", es: "Después de un gran día de visitas, tu cabeza está llena: cuadros, colas, voces, fotos. Siéntate en el tren. Cierra los ojos. Deja que el día se pose en ti, como el polvo después de la caminata." },
        { it: "Le silence mental ressemble à cela : on ne vide pas la tête, on la laisse reposer. Les images de la journée passent comme des nuages lents. Vous n'attrapez rien, vous ne repoussez rien. Dans dix minutes, votre esprit sera calme comme un lac au soir.", es: "El silencio mental se parece a eso: no se vacía la cabeza, se la deja descansar. Las imágenes del día pasan como nubes lentas. No atrapas nada, no rechazas nada. En diez minutos tu mente estará calmada como un lago al anochecer." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía del Louvre", "Descansar la mente después de un día intenso de visitas", "Cómo hacer mejores fotos de viaje"],
        answer: 1,
        why: "El título opone el silencio a la visita: apunta al descanso mental posterior.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Después de un día intenso, se deja descansar la mente sin vaciarla a la fuerza",
          "Il faut visiter les musées plus vite",
          "Le train est trop bruyant pour penser",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Votre tête est pleine après la visite", "Les images passent comme des nuages lents", "Vous n'attrapez rien, vous ne repoussez rien"],
        distractors: ["Vous jetez vos photos à la poubelle", "Vous dormez toute la nuit dans le train", "Le lac est pollué le soir"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Votre tête est pleine : tableaux, files, voix, photos.",
          "Les images de la journée passent comme des nuages lents.",
          "Vous n'attrapez rien, vous ne repoussez rien.",
          "Le billet du train coûte 45 euros en seconde classe.",
          "Votre esprit sera calme comme un lac au soir.",
        ],
        intruder: 3,
        why: "El precio del billete es un dato práctico ajeno al relax mental: es el intruso.",
      },
    },
    {
      id: "md-fr-a2-02-3", theme: "meditazione",
      title: "Trois respirations dans les jardins", titleEs: "Tres respiraciones en los jardines", minutes: 3,
      paragraphs: [
        { it: "Au milieu des grands jardins, trouvez un banc à l'ombre. Asseyez-vous droit, mains posées sur les genoux. Regardez loin devant vous, puis fermez doucement les yeux. Trois respirations suffisent : c'est votre parenthèse secrète dans la journée.", es: "En medio de los grandes jardines, busca un banco a la sombra. Siéntate recto, manos sobre las rodillas. Mira lejos delante de ti y luego cierra suavemente los ojos. Tres respiraciones bastan: es tu paréntesis secreto en el día." },
        { it: "Inspirez par le nez pendant quatre secondes. Retenez l'air deux secondes. Expirez lentement par la bouche pendant six secondes. Le bruit des fontaines vous accompagne. À la troisième expiration, ouvrez les yeux : le jardin paraît plus vert, plus vaste, plus vivant.", es: "Inhala por la nariz durante cuatro segundos. Retén el aire dos segundos. Exhala despacio por la boca durante seis segundos. El ruido de las fuentes te acompaña. En la tercera exhalación abre los ojos: el jardín parece más verde, más vasto, más vivo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un plan de jardinería", "Una mini meditación de tres respiraciones en un banco de jardín", "Una clase de educación física al aire libre"],
        answer: 1,
        why: "El título anuncia tres respiraciones en los jardines: una pausa breve de meditación.",
      },
      sequence: {
        instr: "Ordena los pasos de la práctica:",
        events: ["Vous trouvez un banc à l'ombre", "Vous vous asseyez droit, mains sur les genoux", "Vous fermez doucement les yeux", "Vous inspirez par le nez pendant quatre secondes", "À la troisième expiration, vous ouvrez les yeux"],
      },
      listen: {
        intro: "Escucha y responde:",
        audioIt: "Bienvenue dans le jardin. Trouvez un endroit calme, près d'une fontaine si possible. Maintenant, respirez avec moi. Inspirez par le nez : une, deux, trois, quatre. Retenez : une, deux. Expirez par la bouche : une, deux, trois, quatre, cinq, six. Encore une fois, lentement. Le jardin respire avec vous.",
        questions: [
          { q: "Où faut-il s'installer ?", kind: "literal", options: ["Près d'une fontaine si possible", "Au milieu de la route", "Dans le métro"], answer: 0, why: "«Près d'une fontaine si possible»." },
          { q: "Combien de temps retenez-vous l'air ?", kind: "literal", options: ["Deux secondes", "Quatre secondes", "Six secondes"], answer: 0, why: "«Retenez : une, deux» = dos segundos." },
          { q: "Combien de respirations complètes propose l'audio ?", kind: "inferencial", options: ["Au moins deux", "Aucune", "Cent"], answer: 0, why: "«Encore une fois» tras la primera: al menos dos respiraciones." },
          { q: "Que fait le jardin, selon la dernière phrase ?", kind: "inferencial", options: ["Il respire avec vous", "Il ferme ses portes", "Il perd ses feuilles"], answer: 0, why: "«Le jardin respire avec vous»: la personificación de cierre." },
        ],
      },
    },
  ],

  "fr-cu-a2-03": [
    {
      id: "md-fr-a2-03-1", theme: "qui e ora",
      title: "Regarder comme un enfant", titleEs: "Mirar como un niño", minutes: 2,
      paragraphs: [
        { it: "Quand vous étiez petit, le monde était immense. Une fourmi marchait, et vous la regardiez dix minutes. Un nuage changeait de forme, et vous inventiez une histoire. Les enfants savent regarder : ils sont complètement là, complètement ici.", es: "Cuando eras pequeño, el mundo era inmenso. Una hormiga caminaba y tú la mirabas diez minutos. Una nube cambiaba de forma y tú inventabas una historia. Los niños saben mirar: están completamente ahí, completamente aquí." },
        { it: "Aujourd'hui, essayez de regarder une seule chose pendant deux minutes : une plante, une tasse, un oiseau. Ne décrivez rien, ne jugez rien. Regardez simplement, comme la première fois. Vous retrouverez un peu de votre enfance : des yeux neufs, un monde vivant.", es: "Hoy intenta mirar una sola cosa durante dos minutos: una planta, una taza, un pájaro. No describas nada, no juzgues nada. Mira simplemente, como la primera vez. Recuperarás un poco de tu infancia: ojos nuevos, un mundo vivo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un artículo sobre educación infantil", "Recuperar la mirada atenta y presente de la infancia", "Un cuento para niños sobre nubes"],
        answer: 1,
        why: "El título «Regarder comme un enfant» apunta a recuperar esa mirada, no a la pedagogía.",
      },
      quiz: [
        { q: "Que faisiez-vous avec la fourmi ?", kind: "literal", options: ["Je la regardais dix minutes", "Je la mangeais", "Je fuyais"], answer: 0, why: "«Vous la regardiez dix minutos»: imperfecto de la infancia." },
        { q: "Que retrouvez-vous en regardant une seule chose deux minutes ?", kind: "inferencial", options: ["Un peu de votre enfance", "De l'argent", "Un nouveau téléphone"], answer: 0, why: "«Vous retrouverez un peu de votre enfance : des yeux neufs»." },
        { q: "Quelle est la leçon du texte ?", kind: "critica", options: ["L'attention retrouvée rend le monde vivant", "Il faut grandir vite", "Regarder est une perte de temps"], answer: 0, why: "La lección: mirar con atención renueva el mundo." },
      ],
      vf: [
        { text: "Les enfants savent regarder.", value: true, why: "«Les enfants savent regarder : ils sont complètement là»." },
        { text: "Il faut décrire et juger ce que l'on regarde.", value: false, why: "El texto dice lo contrario: «ne décrivez rien, ne jugez rien»." },
        { text: "Un nuage changeait de forme et vous inventiez une histoire.", value: true, why: "Está literal en el primer párrafo." },
      ],
    },
    {
      id: "md-fr-a2-03-2", theme: "relax fisico",
      title: "S'asseoir par terre, comme avant", titleEs: "Sentarse en el suelo, como antes", minutes: 2,
      paragraphs: [
        { it: "Quand vous étiez enfant, vous vous asseyiez par terre partout. Aujourd'hui, essayez : posez un coussin, asseyez-vous, laissez vos mains sur vos cuisses. Vos hanches s'ouvrent lentement, votre dos se souvient d'une vieille liberté.", es: "Cuando eras niño te sentabas en el suelo en todas partes. Hoy pruébalo: pon un cojín, siéntate, deja las manos sobre los muslos. Tus caderas se abren despacio, tu espalda recuerda una vieja libertad." },
        { it: "Restez ainsi cinq minutes, sans bouger. Le poids du corps descend dans le sol. Le sol porte tout : vos os, vos peurs de la journée, vos pensées. C'est un petit retour en arrière très bon pour le corps, et le sourire arrive tout seul.", es: "Quédate así cinco minutos, sin moverte. El peso del cuerpo baja hacia el suelo. El suelo lo sostiene todo: tus huesos, tus miedos del día, tus pensamientos. Es un pequeño viaje atrás muy bueno para el cuerpo, y la sonrisa llega sola." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ejercicio de gimnasia intensa", "Sentarse en el suelo con un cojín para soltar el cuerpo", "Una clase de costura"],
        answer: 1,
        why: "«S'asseoir par terre» con cojín: relajación física sencilla.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Sentarse en el suelo como en la infancia relaja y suelta el cuerpo",
          "Le sol est trop sale pour s'asseoir",
          "Il faut acheter une chaise ergonomique",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Vous posez un coussin", "Vos hanches s'ouvrent lentement", "Le sourire arrive tout seul"],
        distractors: ["Vous sautez dix fois", "Le coussin coûte cent euros", "Vous téléphonez à un ami"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Posez un coussin et asseyez-vous.",
          "Le poids du corps descend dans le sol.",
          "Vos hanches s'ouvrent lentement.",
          "Les chaises ergonomiques sont vendues en ligne ce mois-ci.",
          "Le sourire arrive tout seul.",
        ],
        intruder: 3,
        why: "La publicidad de sillas no pertenece a la experiencia de sentarse en el suelo: es el intruso.",
      },
    },
    {
      id: "md-fr-a2-03-3", theme: "relax mentale",
      title: "Les souvenirs sont des nuages", titleEs: "Los recuerdos son nubes", minutes: 3,
      paragraphs: [
        { it: "Il y a des souvenirs qui reviennent encore : une maison, un été, une voix. Certains sont doux, d'autres pèsent lourd. Ce soir, fermez les yeux et regardez-les passer. Chaque souvenir est un nuage : il traverse le ciel de votre tête, puis il s'en va.", es: "Hay recuerdos que vuelven todavía: una casa, un verano, una voz. Algunos son dulces, otros pesan mucho. Esta noche cierra los ojos y míralos pasar. Cada recuerdo es una nube: atraviesa el cielo de tu cabeza y luego se va." },
        { it: "Vous n'êtes pas vos souvenirs : vous êtes le ciel. Le ciel ne refuse aucune saison. Il accueille les nuages gris, les nuages blancs, même la pluie. Quand un souvenir lourd arrive, dites-lui simplement : « Tu peux passer, je reste. » Alors votre tête devient vaste et calme.", es: "No eres tus recuerdos: eres el cielo. El cielo no rechaza ninguna estación. Acoge las nubes grises, las nubes blancas, incluso la lluvia. Cuando llega un recuerdo pesado, dile simplemente: «Puedes pasar, yo me quedo». Entonces tu cabeza se vuelve vasta y tranquila." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un pronóstico del tiempo", "Una metáfora para soltar recuerdos: son nubes que pasan", "Una lección de geografía sobre las nubes"],
        answer: 1,
        why: "«Les souvenirs sont des nuages»: metáfora clásica del relax mental.",
      },
      sequence: {
        instr: "Ordena el ejercicio del soir:",
        events: ["Vous fermez les yeux ce soir", "Un souvenir lourd arrive", "Vous regardez le souvenir comme un nuage", "Vous dites : « Tu peux passer, je reste. »", "Votre tête devient vaste et calme"],
      },
      listen: {
        intro: "Escucha y responde:",
        audioIt: "Bonsoir. Installez-vous confortablement. Ce soir, nous regardons les nuages de la mémoire. Un souvenir arrive : un visage, une maison, une voix d'été. Ne le repoussez pas. Regardez-le comme un nuage : il traverse le ciel, il change de forme, il s'éloigne doucement. Le ciel, lui, reste calme et bleu, toujours.",
        questions: [
          { q: "Qu'arrive-t-il dans l'exercice du soir ?", kind: "literal", options: ["Un souvenir arrive", "Un orage éclate", "Le téléphone sonne"], answer: 0, why: "«Un souvenir arrive : un visage, une maison»." },
          { q: "Que ne faut-il pas faire avec le souvenir ?", kind: "literal", options: ["Le repousser", "Le regarder", "Le comparer à un nuage"], answer: 0, why: "«Ne le repoussez pas»." },
          { q: "Comment part le souvenir-nuage ?", kind: "inferencial", options: ["Il s'éloigne doucement", "Il explose", "Il devient un mur"], answer: 0, why: "«Il s'éloigne doucement»: se infiere el modo en que se va." },
          { q: "Que fait le ciel pendant tout cela ?", kind: "inferencial", options: ["Il reste calme et bleu", "Il ferme les yeux", "Il change de couleur"], answer: 0, why: "«Le ciel, lui, reste calme et bleu, toujours»: tú eres el cielo." },
        ],
      },
    },
  ],

  "fr-cu-a2-04": [
    {
      id: "md-fr-a2-04-1", theme: "meditazione",
      title: "Méditer dans le métro", titleEs: "Meditar en el metro", minutes: 2,
      paragraphs: [
        { it: "Le métro est plein, la rame freine, tout le monde court. Et si c'était le meilleur endroit pour méditer ? Tenez-vous droit, fermez les yeux ou regardez le sol. Respirez calmement pendant tout le trajet. Le bruit devient une musique étrange.", es: "El metro va lleno, el vagón frena, todo el mundo corre. ¿Y si fuera el mejor lugar para meditar? Mantente recto, cierra los ojos o mira el suelo. Respira con calma durante todo el trayecto. El ruido se vuelve una música extraña." },
        { it: "À chaque station, une personne descend, une autre monte. Comme les pensées : une arrive, une part. Vous ne bougez pas, vous respirez. Vous êtes une île tranquille dans un train en mouvement. Cinq stations suffisent pour se sentir mieux.", es: "En cada estación una persona baja y otra sube. Como los pensamientos: uno llega, otro se va. Tú no te mueves, respiras. Eres una isla tranquila en un tren en movimiento. Cinco estaciones bastan para sentirse mejor." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un mapa del metro de París", "Usar el trayecto en metro como momento de meditación", "Una protesta contra el transporte público"],
        answer: 1,
        why: "«Méditer dans le métro» une meditación y transporte: la práctica en pleno trayecto.",
      },
      quiz: [
        { q: "Que faites-vous de vos yeux ?", kind: "literal", options: ["Vous les fermez ou regardez le sol", "Vous regardez tout le monde", "Vous pleurez"], answer: 0, why: "«Fermez les yeux ou regardez le sol»." },
        { q: "Que représentent les personnes qui descendent et montent ?", kind: "inferencial", options: ["Les pensées qui arrivent et partent", "Les amis d'hier", "Les stations fermées"], answer: 0, why: "«Comme les pensées : une arrive, une part»: la comparación lo explica." },
        { q: "Quelle est l'image centrale du texte ?", kind: "critica", options: ["Une île tranquille dans un train en mouvement", "Un bateau sur la Seine", "Un oiseau dans la station"], answer: 0, why: "«Vous êtes une île tranquille dans un train en mouvement» resume la práctica." },
      ],
      vf: [
        { text: "Vous respirez calmement pendant tout le trajet.", value: true, why: "«Respirez calmement pendant tout le trajet»." },
        { text: "Cinq stations suffisent pour se sentir mieux.", value: true, why: "Está literal al final del segundo párrafo." },
        { text: "Le texte conseille de courir dans le métro.", value: false, why: "Todo el mundo corre MENOS tú: el texto propone quedarse quieto y respirar." },
      ],
    },
    {
      id: "md-fr-a2-04-2", theme: "spiritualità",
      title: "Les gens honnêtes", titleEs: "La gente honesta", minutes: 2,
      paragraphs: [
        { it: "Quand quelqu'un rend un sac oublié, quelque chose de lumineux passe entre deux inconnus. La gentillesse est une spiritualité sans église : elle ne demande ni prière ni livre, seulement une main qui donne et une main qui reçoit.", es: "Cuando alguien devuelve un bolso olvidado, algo luminoso pasa entre dos desconocidos. La amabilidad es una espiritualidad sin templos: no pide ni oración ni libro, solo una mano que da y una mano que recibe." },
        { it: "Vous pouvez pratiquer cette lumière aujourd'hui : tenez une porte, remerciez vraiment, écoutez sans couper la parole. Chaque petit geste honnête éclaire la ville un peu plus. Et celui qui donne reçoit toujours quelque chose en retour : un cœur plus calme.", es: "Puedes practicar esa luz hoy: sostén una puerta, agradece de verdad, escucha sin cortar. Cada pequeño gesto honesto ilumina un poco más la ciudad. Y quien da siempre recibe algo a cambio: un corazón más tranquilo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un artículo policial sobre robos", "La amabilidad cotidiana como espiritualidad sencilla", "Una guía para reclamar objetos perdidos"],
        answer: 1,
        why: "El título «Les gens honnêtes» apunta a la honestidad cotidiana como valor.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "La gentileza diaria es una espiritualidad que cualquiera puede practicar",
          "Seule la police peut rendre les objets perdus",
          "Il est inutile d'être gentil en ville",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Une main qui donne et une main qui reçoit", "Tenez une porte, remerciez vraiment", "Celui qui donne reçoit un cœur plus calme"],
        distractors: ["Vous gagnez de l'argent avec chaque geste", "La ville éclaire les rues la nuit", "Il faut un livre spécial pour remercier"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "La gentillesse ne demande ni prière ni livre.",
          "Tenez une porte pour quelqu'un.",
          "Écoutez sans couper la parole.",
          "Le sac contenait un ordinateur de 900 euros.",
          "Celui qui donne reçoit un cœur plus calme.",
        ],
        intruder: 3,
        why: "El precio del ordenador es un detalle material ajeno a la espiritualidad de la gentileza: es el intruso.",
      },
    },
    {
      id: "md-fr-a2-04-3", theme: "qui e ora",
      title: "Deux minutes sur le quai", titleEs: "Dos minutos en el andén", minutes: 3,
      paragraphs: [
        { it: "Vous attendez le métro. Au lieu de regarder votre téléphone, regardez le quai : les tuiles blanches, la lumière jaune, une affiche décollée au coin. Une mouche vole près de la benne. Vous êtes debout, vivant, en attente. C'est déjà une position rare dans la journée.", es: "Esperas el metro. En vez de mirar el teléfono, mira el andén: las baldosas blancas, la luz amarilla, un cartel despegado en la esquina. Una mosca vuela cerca de la papelera. Estás de pie, vivo, a la espera. Ya es una posición rara en el día." },
        { it: "L'attente n'est pas du temps perdu : c'est du temps offert. Pendant deux minutes, personne ne peut rien vous demander. Respirez l'air un peu chaud du quai. Écoutez le vent qui précède le train. Quand la rame arrive, vous montez, et vous emportez votre calme avec vous.", es: "La espera no es tiempo perdido: es tiempo regalado. Durante dos minutos nadie puede pedirte nada. Respira el aire algo caliente del andén. Escucha el viento que precede al tren. Cuando llega el convoy, subes y te llevas tu calma contigo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los horarios del metro", "Convertir la espera en el andén en un momento de presencia", "Cómo cambiar de andén rápidamente"],
        answer: 1,
        why: "«Deux minutes sur le quai» apunta a usar la espera, no a horarios ni logística.",
      },
      sequence: {
        instr: "Ordena los momentos de la espera:",
        events: ["Vous attendez le métro", "Vous regardez le quai au lieu du téléphone", "Vous respirez l'air chaud du quai", "Vous écoutez le vent qui précède le train", "Vous montez avec votre calme"],
      },
      listen: {
        intro: "Escucha y responde:",
        audioIt: "Bienvenue sur le quai. Posez votre téléphone dans votre poche, écran éteint. Regardez autour de vous : les tuiles, la lumière, les gens. Maintenant, une grande inspiration. L'air du quai est un peu chaud. Écoutez : au fond du tunnel, un vent léger annonce le train. Vous êtes là, simplement là, debout et calme.",
        questions: [
          { q: "Où posez-vous votre téléphone ?", kind: "literal", options: ["Dans votre poche, écran éteint", "Sur le sol", "Dans la benne"], answer: 0, why: "«Posez votre téléphone dans votre poche, écran éteint»." },
          { q: "Qu'annonce le vent léger ?", kind: "literal", options: ["Le train", "La pluie", "La fin de la journée"], answer: 0, why: "«Un vent léger annonce le train»." },
          { q: "Comment est l'air du quai ?", kind: "literal", options: ["Un peu chaud", "Très froid", "Parfumé"], answer: 0, why: "«L'air du quai est un peu chaud»." },
          { q: "Quel est votre état à la fin de l'audio ?", kind: "inferencial", options: ["Debout et calme", "Fatigué et fâché", "Perdu dans la station"], answer: 0, why: "«Vous êtes là, simplement là, debout et calme»." },
        ],
      },
    },
  ],

  "fr-cu-a2-05": [
    {
      id: "md-fr-a2-05-1", theme: "relax fisico",
      title: "Samedi matin au ralenti", titleEs: "Sábado mañana a cámara lenta", minutes: 2,
      paragraphs: [
        { it: "Ce samedi, ne vous précipitez pas. Réveillez-vous sans alarme, étirez-vous dans le lit comme un chat : bras au-dessus de la tête, dos rond, puis dos droit. Restez encore une minute à ne rien faire. Le matin tranquille est un trésor.", es: "Este sábado no te apresures. Despierta sin alarma, estírate en la cama como un gato: brazos sobre la cabeza, espalda redonda y luego recta. Quédate un minuto más sin hacer nada. La mañana tranquila es un tesoro." },
        { it: "Au lever, posez les pieds au sol et sentez-les : le talon, les orteils, le poids du corps. Buvez un grand verre d'eau lentement. Marchez dans la maison comme si vous aviez tout votre temps, parce que c'est vrai : ce samedi, vous avez du temps.", es: "Al levantarte, apoya los pies en el suelo y siéntelos: el talón, los dedos, el peso del cuerpo. Bebe un vaso grande de agua despacio. Camina por la casa como si tuvieras todo tu tiempo, porque es verdad: este sábado tienes tiempo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una rutina de ejercicio intenso", "Empezar el sábado con gestos lentos y relajados", "Un horario de tiendas"],
        answer: 1,
        why: "«Au ralenti» = a cámara lenta: gestos suaves al despertar.",
      },
      quiz: [
        { q: "Comment vous étirez-vous dans le lit ?", kind: "literal", options: ["Comme un chat", "Comme un sportif", "Comme une tour"], answer: 0, why: "«Étirez-vous dans le lit comme un chat»." },
        { q: "Pourquoi marcher comme si vous aviez tout votre temps ?", kind: "inferencial", options: ["Parce que ce samedi, vous avez du temps", "Parce que vous êtes en retard", "Parce que la maison est grande"], answer: 0, why: "«Parce que c'est vrai : ce samedi, vous avez du temps»." },
        { q: "Que représente le matin tranquille ?", kind: "critica", options: ["Un trésor", "Une perte de temps", "Une obligation"], answer: 0, why: "«Le matin tranquille est un trésor»." },
      ],
      vf: [
        { text: "Réveillez-vous avec trois alarmes.", value: false, why: "«Réveillez-vous sans alarme»: sin alarma." },
        { text: "Vous buvez un grand verre d'eau lentement.", value: true, why: "Está literal en el segundo párrafo." },
        { text: "Vous restez une minute à ne rien faire.", value: true, why: "«Restez encore une minute à ne rien faire»." },
      ],
    },
    {
      id: "md-fr-a2-05-2", theme: "relax mentale",
      title: "Moins de plans, plus de présent", titleEs: "Menos planes, más presente", minutes: 2,
      paragraphs: [
        { it: "Parfois, la tête ressemble à un agenda : samedi, musée ; dimanche, courses ; lundi, sport. Résultat : on n'est nulle part, on est toujours dans la liste. Ce soir, essayez d'écrire un seul plan : respirer.", es: "A veces la cabeza parece una agenda: sábado, museo; domingo, compras; lunes, gimnasio. Resultado: no se está en ninguna parte, se está siempre en la lista. Esta noche prueba a escribir un solo plan: respirar." },
        { it: "Le reste suivra tout seul. Vous n'avez pas besoin de tout décider aujourd'hui. La vie aime les surprises, et les surprises n'aiment pas les listes trop pleines. Laissez une porte ouverte dans votre journée : le présent adore entrer par là.", es: "El resto llegará solo. No necesitas decidirlo todo hoy. La vida ama las sorpresas, y a las sorpresas no les gustan las listas demasiado llenas. Deja una puerta abierta en tu día: al presente le encanta entrar por ahí." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una app de organización con listas", "Soltar la mente planificadora y dejar espacio al presente", "Un calendario de eventos de Burdeos"],
        answer: 1,
        why: "«Moins de plans, plus de présent» anuncia el contraste entre lista y presente.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Planificar en exceso aleja del presente; conviene dejar espacio",
          "Il faut remplir l'agenda chaque jour",
          "Les listes sont la seule solution",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["On n'est nulle part, on est toujours dans la liste", "Un seul plan : respirer", "Laissez une porte ouverte dans votre journée"],
        distractors: ["Il faut jeter tous les téléphones", "Les surprises coûtent de l'argent", "Le présent frappe à une porte fermée"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "La tête ressemble parfois à un agenda.",
          "Ce soir, un seul plan : respirer.",
          "Vous n'avez pas besoin de tout décider aujourd'hui.",
          "L'application de listes coûte 2 euros par mois.",
          "Laissez une porte ouverte dans votre journée.",
        ],
        intruder: 3,
        why: "El precio de una app de listas es un dato comercial ajeno al relax mental: es el intruso.",
      },
    },
    {
      id: "md-fr-a2-05-3", theme: "meditazione",
      title: "Avant d'entrer, une respiration", titleEs: "Antes de entrar, una respiración", minutes: 3,
      paragraphs: [
        { it: "Vous arrivez devant la porte de vos amis. À l'intérieur, des rires, de la musique, des odeurs de cuisine. Avant de sonner, arrêtez-vous. Posez une main sur votre ventre et prenez une respiration complète. Vous arrivez vraiment maintenant.", es: "Llegas ante la puerta de tus amigos. Dentro, risas, música, olores de cocina. Antes de tocar, detente. Pon una mano sobre tu barriga y toma una respiración completa. Llegas de verdad ahora." },
        { it: "Cette petite pause change la soirée : vous entrez calme, votre écoute est plus douce, vos mots sont plus vrais. Les hôtes le sentent immédiatement. Une respiration avant la porte, et vous offrez à vos amis la meilleure version de vous-même.", es: "Esta pequeña pausa cambia la velada: entras calmado, tu escucha es más suave, tus palabras más verdaderas. Los anfitriones lo notan enseguida. Una respiración antes de la puerta y regalas a tus amigos la mejor versión de ti." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Trucos para llegar tarde a las fiestas", "Una respiración consciente antes de entrar en una reunión", "Cómo cocinar para invitados"],
        answer: 1,
        why: "«Avant d'entrer, une respiration»: pausa consciente en el umbral.",
      },
      sequence: {
        instr: "Ordena los pasos:",
        events: ["Vous arrivez devant la porte de vos amis", "Vous vous arrêtez avant de sonner", "Vous posez une main sur votre ventre", "Vous prenez une respiration complète", "Vous entrez calme dans la soirée"],
      },
      listen: {
        intro: "Escucha y responde:",
        audioIt: "Vous êtes devant la porte. Vous entendez la fête à l'intérieur. Avant de sonner, arrêtez-vous une seconde. Épaules basses. Une inspiration par le nez. L'air descend jusqu'au ventre. Puis une expiration longue par la bouche. Maintenant, vous pouvez sonner : vous êtes pleinement arrivé, corps et esprit.",
        questions: [
          { q: "Qu'entendez-vous à l'intérieur ?", kind: "literal", options: ["La fête", "Le silence", "La pluie"], answer: 0, why: "«Vous entendez la fête à l'intérieur»." },
          { q: "Où descend l'air de l'inspiration ?", kind: "literal", options: ["Jusqu'au ventre", "Dans les poches", "Dans les chaussures"], answer: 0, why: "«L'air descend jusqu'au ventre»." },
          { q: "Que faites-vous juste après l'expiration ?", kind: "literal", options: ["Vous sonnez", "Vous partez", "Vous dormez"], answer: 0, why: "«Maintenant, vous pouvez sonner»." },
          { q: "Comment êtes-vous arrivé ?", kind: "inferencial", options: ["Pleinement, corps et esprit", "En retard et stressé", "Les mains vides"], answer: 0, why: "«Vous êtes pleinement arrivé, corps et esprit»." },
        ],
      },
    },
  ],

  "fr-cu-a2-06": [
    {
      id: "md-fr-a2-06-1", theme: "qui e ora",
      title: "Ma chambre, mon île", titleEs: "Mi habitación, mi isla", minutes: 2,
      paragraphs: [
        { it: "Le soir, quand la ville crie, votre chambre peut devenir une île. Éteignez le plafonnier, allumez une petite lampe. Soudain, la pièce respire autrement : les murs sont plus doux, le temps est plus lent. Vous êtes chez vous, tout simplement.", es: "Por la noche, cuando la ciudad grita, tu habitación puede volverse una isla. Apaga la luz del techo, enciende una lámpara pequeña. De pronto la habitación respira distinto: las paredes son más suaves, el tiempo más lento. Estás en casa, simplemente." },
        { it: "Regardez un objet que vous aimez : une photo, une pierre, un livre. Il est là, avec vous, depuis des années ou depuis hier. L'ici et maintenant n'a pas besoin d'être beau comme une carte postale. Il a seulement besoin d'être vôtre.", es: "Mira un objeto que quieras: una foto, una piedra, un libro. Está ahí contigo, desde hace años o desde ayer. El aquí y ahora no necesita ser bonito como una postal. Solo necesita ser tuyo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un anuncio inmobiliario de habitaciones", "Convertir la propia habitación en un refugio presente y sereno", "Un manual de decoración de interiores"],
        answer: 1,
        why: "«Ma chambre, mon île» apunta al refugio interior, no al mercado inmobiliario.",
      },
      quiz: [
        { q: "Qu'allumez-vous le soir ?", kind: "literal", options: ["Une petite lampe", "Le plafonnier", "La télévision"], answer: 0, why: "«Éteignez le plafonnier, allumez une petite lampe»." },
        { q: "Que devient le temps dans la lumière douce ?", kind: "inferencial", options: ["Plus lent", "Plus rapide", "Invisible"], answer: 0, why: "«Le temps est plus lent» en la habitación-isla." },
        { q: "Que dit le texte sur l'ici et maintenant ?", kind: "critica", options: ["Il a seulement besoin d'être vôtre", "Il doit ressembler à une carte postale", "Il n'existe pas en ville"], answer: 0, why: "«Il a seulement besoin d'être vôtre»: la idea central." },
      ],
      vf: [
        { text: "La chambre devient une île le soir.", value: true, why: "«Votre chambre peut devenir une île»." },
        { text: "L'ici et maintenant doit être parfait comme une carte postale.", value: false, why: "El texto lo niega: «n'a pas besoin d'être beau comme une carte postale»." },
        { text: "Vous regardez un objet que vous aimez.", value: true, why: "«Regardez un objet que vous aimez : une photo, une pierre, un livre»." },
      ],
    },
    {
      id: "md-fr-a2-06-2", theme: "spiritualità",
      title: "Une maison, un cœur", titleEs: "Una casa, un corazón", minutes: 2,
      paragraphs: [
        { it: "Une maison vivante n'est pas seulement des murs et un loyer. C'est l'odeur du café le matin, la chaise de quelqu'un, la lumière de 17 heures sur le plancher. Prendre soin d'un lieu, c'est prendre soin des personnes qui y vivent.", es: "Una casa viva no son solo paredes y un alquiler. Es el olor del café por la mañana, la silla de alguien, la luz de las 17 en el suelo. Cuidar un lugar es cuidar a las personas que viven en él." },
        { it: "Beaucoup de traditions disent la même chose : balayer sa maison, c'est balayer son cœur. Quand vous lavez votre tasse avec attention, vous lavez aussi votre fatigue. Un lieu aimé rend aimantes les personnes qui y entrent. Voilà une spiritualité du quotidien, à la portée de tous.", es: "Muchas tradiciones dicen lo mismo: barrer tu casa es barrer tu corazón. Cuando lavas tu taza con atención, lavas también tu cansancio. Un lugar querido vuelve amables a las personas que entran en él. Esa es una espiritualidad cotidiana, al alcance de todos." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un contrato de alquiler explicado", "Cuidar la casa como una práctica espiritual diaria", "Una guía de muebles baratos"],
        answer: 1,
        why: "«Une maison, un cœur» une hogar y corazón: el cuidado del espacio como práctica.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Cuidar la casa con atención es cuidar el corazón y a quienes la habitan",
          "Le loyer est la seule chose importante",
          "Les maisons n'ont pas d'âme",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["L'odeur du café le matin", "Balayer sa maison, c'est balayer son cœur", "Un lieu aimé rend aimantes les personnes"],
        distractors: ["Le loyer coûte 750 euros", "La lumière de 17 heures fait mal aux yeux", "Il faut interdire les visites à domicile"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Une maison vivante, c'est une odeur, une chaise, une lumière.",
          "Balayer sa maison, c'est balayer son cœur.",
          "Vous lavez aussi votre fatigue avec attention.",
          "Le plancher en bois coûte plus cher que le carrelage.",
          "Un lieu aimé rend aimantes les personnes.",
        ],
        intruder: 3,
        why: "El precio de los suelos es un dato de reforma ajeno al sentido espiritual del hogar: es el intruso.",
      },
    },
    {
      id: "md-fr-a2-06-3", theme: "relax fisico",
      title: "Ranger pour respirer", titleEs: "Ordenar para respirar", minutes: 3,
      paragraphs: [
        { it: "Une pile de choses vous regarde depuis une semaine : lettres, vêtements, livres. Ce soir, rangez pendant dix minutes, lentement. Chaque objet repris est une décision de moins pour votre tête, un poids de moins pour vos épaules.", es: "Una pila de cosas te mira desde hace una semana: cartas, ropa, libros. Esta noche ordena durante diez minutos, despacio. Cada objeto recogido es una decisión menos para tu cabeza, un peso menos para tus hombros." },
        { it: "Le corps adore les surfaces claires. Quand la table apparaît, votre respiration s'ouvre toute seule. Ce n'est pas de la magie : c'est de l'espace. Votre énergie circule mieux dans une pièce qui respire, et vous respirez avec elle.", es: "El cuerpo adora las superficies despejadas. Cuando aparece la mesa, tu respiración se abre sola. No es magia: es espacio. Tu energía circula mejor en una habitación que respira, y tú respiras con ella." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un servicio de limpieza profesional", "Ordenar despacio como forma de relajación física", "Cómo construir una mesa nueva"],
        answer: 1,
        why: "«Ranger pour respirer» une ordenar y respirar: relajación a través del orden.",
      },
      sequence: {
        instr: "Ordena el proceso:",
        events: ["Une pile de choses vous regarde depuis une semaine", "Vous rangez pendant dix minutes, lentement", "Chaque objet repris allège la tête et les épaules", "La table apparaît", "Votre respiration s'ouvre toute seule"],
      },
      listen: {
        intro: "Escucha y responde:",
        audioIt: "Bonsoir. Ce soir, dix minutes de rangement tranquille. Prenez un seul objet, le premier que vous voyez. Regardez-le une seconde. Trouvez-lui une place. Posez-le là. Recommencez avec un deuxième objet. Ne courez pas : chaque geste lent rend votre respiration plus large et votre pièce plus claire.",
        questions: [
          { q: "Combien de temps dure le rangement ?", kind: "literal", options: ["Dix minutes", "Deux heures", "Toute la nuit"], answer: 0, why: "«Dix minutes de rangement tranquille»." },
          { q: "Combien d'objets prenez-vous en premier ?", kind: "literal", options: ["Un seul, le premier que vous voyez", "Tous en même temps", "Aucun"], answer: 0, why: "«Prenez un seul objet, le premier que vous voyez»." },
          { q: "Que ne faut-il pas faire ?", kind: "literal", options: ["Courir", "Regarder l'objet", "Trouver une place"], answer: 0, why: "«Ne courez pas»." },
          { q: "Qu'obtient-on avec des gestes lents ?", kind: "inferencial", options: ["Une respiration plus large et une pièce plus claire", "Plus de fatigue", "Moins de lumière"], answer: 0, why: "«Chaque geste lent rend votre respiration plus large et votre pièce plus claire»." },
        ],
      },
    },
  ],

  "fr-cu-a2-07": [
    {
      id: "md-fr-a2-07-1", theme: "relax mentale",
      title: "Écouter la voix du corps", titleEs: "Escuchar la voz del cuerpo", minutes: 2,
      paragraphs: [
        { it: "Votre corps parle toute la journée : « Je suis fatigué », « J'ai froid », « Je suis tendu ici ». Mais la tête répond toujours : « Plus tard, plus tard. » Ce soir, offrez à votre corps cinq minutes d'écoute, comme à un vieil ami.", es: "Tu cuerpo habla todo el día: «Estoy cansado», «Tengo frío», «Estoy tenso aquí». Pero la cabeza siempre responde: «Luego, luego». Esta noche dale a tu cuerpo cinco minutos de escucha, como a un viejo amigo." },
        { it: "Allongez-vous et posez les mains sur votre ventre. Écoutez sans rien réparer. Le corps ne demande pas des solutions : il demande de l'attention. Cinq minutes d'écoute calme, et déjà le stress descend d'un étage. C'est ainsi que l'on guérit un peu, chaque soir.", es: "Túmbate y pon las manos sobre tu barriga. Escucha sin reparar nada. El cuerpo no pide soluciones: pide atención. Cinco minutos de escucha calmada y el estrés ya baja un piso. Así es como se sana un poco, cada noche." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una consulta médica a distancia", "Escuchar el cuerpo con atención como relax mental", "Un anuncio de vitaminas"],
        answer: 1,
        why: "«Écouter la voix du corps» apunta a la atención al cuerpo, no a la medicina.",
      },
      quiz: [
        { q: "Que dit souvent la tête au corps ?", kind: "literal", options: ["« Plus tard, plus tard »", "« Tout de suite »", "« Merci »"], answer: 0, why: "«Mais la tête répond toujours : plus tard, plus tard»." },
        { q: "Que demande le corps, selon le texte ?", kind: "inferencial", options: ["De l'attention", "Des solutions complexes", "Des médicaments"], answer: 0, why: "«Le corps ne demande pas des solutions : il demande de l'attention»." },
        { q: "Que se passe-t-il après cinq minutes d'écoute calme ?", kind: "critica", options: ["Le stress descend d'un étage", "Le stress triple", "Rien du tout"], answer: 0, why: "«Le stress descend d'un étage»: la escucha calmada reduce el estrés." },
      ],
      vf: [
        { text: "Le corps parle toute la journée.", value: true, why: "«Votre corps parle toute la journée»." },
        { text: "Vous devez réparer le corps immédiatement.", value: false, why: "«Écoutez sans rien réparer»: se trata de escuchar, no de arreglar." },
        { text: "Vous posez les mains sur votre ventre.", value: true, why: "«Posez les mains sur votre ventre»." },
      ],
    },
    {
      id: "md-fr-a2-07-2", theme: "meditazione",
      title: "Le balayage du corps", titleEs: "El escaneo del cuerpo", minutes: 2,
      paragraphs: [
        { it: "Allongez-vous et fermez les yeux. Commencez par le pied gauche : sentez-le, chaud ou froid, lourd ou léger. Montez ensuite vers la jambe, le genou, la cuisse. Vous ne changez rien : vous visitez votre corps comme on visite une maison calme.", es: "Túmbate y cierra los ojos. Empieza por el pie izquierdo: siéntelo, caliente o frío, pesado o ligero. Sube luego hacia la pierna, la rodilla, el muslo. No cambias nada: visitas tu cuerpo como quien visita una casa tranquila." },
        { it: "Continuez ainsi jusqu'à la tête. À chaque étage, restez trois respirations. Si une zone est tendue, dites-lui simplement : « Je te sens. » La méditation du corps balayé dure dix minutes et laisse derrière elle une paix profonde, comme la marée qui redescend.", es: "Continúa así hasta la cabeza. En cada planta quédate tres respiraciones. Si una zona está tensa, dile simplemente: «Te siento». La meditación del cuerpo escaneado dura diez minutos y deja detrás una paz profunda, como la marea que baja." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una revisión médica con aparatos", "Un escaneo corporal guiado como meditación", "Un masaje deportivo intenso"],
        answer: 1,
        why: "«Le balayage du corps» es el body scan, una meditación clásica de atención al cuerpo.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Recorrer el cuerpo con la atención, de los pies a la cabeza, trae paz",
          "Il faut dormir pendant le scan",
          "Le scan corporel se fait debout",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Commencez par le pied gauche", "À chaque étage, restez trois respirations", "Dites à la zone tendue : « Je te sens »"],
        distractors: ["Vous marchez pendant le scan", "Le scan dure trois heures", "Vous mangez pendant la méditation"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Sentez le pied gauche, chaud ou froid.",
          "Vous visitez votre corps comme une maison calme.",
          "À chaque étage, restez trois respirations.",
          "La pharmacie ferme à 19 heures le samedi.",
          "La méditation laisse derrière elle une paix profonde.",
        ],
        intruder: 3,
        why: "El horario de la farmacia es un dato práctico ajeno a la meditación: es el intruso.",
      },
    },
    {
      id: "md-fr-a2-07-3", theme: "qui e ora",
      title: "Un jour de repos", titleEs: "Un día de reposo", minutes: 3,
      paragraphs: [
        { it: "Aujourd'hui, ordre du médecin : rester à la maison. La fenêtre est ouverte, le lit est chaud, la journée est lente. Au lieu de lutter contre la maladie, écoutez-la. Votre corps a besoin de calme, et le calme commence par l'acceptation.", es: "Hoy, orden del médico: quedarse en casa. La ventana está abierta, la cama está caliente, el día es lento. En vez de luchar contra la enfermedad, escúchala. Tu cuerpo necesita calma, y la calma empieza por la aceptación." },
        { it: "Observez les petites choses que la vitesse ne montre jamais : la lumière qui avance sur le mur, le vol d'un oiseau entre deux branches, la fumée du thé qui monte. Un jour de repos bien vécu est une leçon d'ici et maintenant. Demain, votre corps dira merci.", es: "Observa las pequeñas cosas que la velocidad nunca muestra: la luz que avanza por la pared, el vuelo de un pájaro entre dos ramas, el humo del té que sube. Un día de reposo bien vivido es una lección de aquí y ahora. Mañana tu cuerpo dirá gracias." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una receta con medicinas", "Vivir con presencia un día de reposo por enfermedad", "Una excusa para no trabajar nunca"],
        answer: 1,
        why: "«Un jour de repos» con orden del médico: presencia durante la convalecencia.",
      },
      sequence: {
        instr: "Ordena la jornada de reposo:",
        events: ["Le médecin ordonne de rester à la maison", "Vous ouvrez la fenêtre et écoutez votre corps", "Vous observez la lumière qui avance sur le mur", "Vous regardez la fumée du thé qui monte", "Le lendemain, votre corps dit merci"],
      },
      listen: {
        intro: "Escucha y responde:",
        audioIt: "Bonjour. Aujourd'hui, c'est un jour de repos. Restez dans le lit encore un peu. Écoutez les bruits de la maison : une porte, une rue lointaine, un oiseau sur le balcon. Chaque bruit arrive et repart. Vous ne devez rien faire. Vous devez seulement rester là, chaud, calme, vivant. C'est votre travail du jour.",
        questions: [
          { q: "Où restez-vous encore un peu ?", kind: "literal", options: ["Dans le lit", "Dans la rue", "Au bureau"], answer: 0, why: "«Restez dans le lit encore un peu»." },
          { q: "Quels bruits écoutez-vous ?", kind: "literal", options: ["Une porte, une rue, un oiseau", "Une alarme, un marteau, une trompette", "Le silence complet"], answer: 0, why: "«Une porte, une rue lointaine, un oiseau sur le balcon»." },
          { q: "Que devez-vous faire aujourd'hui ?", kind: "literal", options: ["Rester là, chaud, calme, vivant", "Répondre aux e-mails", "Faire le ménage"], answer: 0, why: "«Vous devez seulement rester là, chaud, calme, vivant»." },
          { q: "Comment s'appelle ce « travail » du jour ?", kind: "inferencial", options: ["Se reposer, ne rien faire d'autre", "Travailler plus que d'habitude", "Voyager"], answer: 0, why: "El descanso se presenta irónicamente como el «trabajo del día»." },
        ],
      },
    },
  ],

  "fr-cu-a2-08": [
    {
      id: "md-fr-a2-08-1", theme: "spiritualità",
      title: "Cuisiner, c'est aimer", titleEs: "Cocinar es amar", minutes: 2,
      paragraphs: [
        { it: "Dans beaucoup de cuisines de famille, la recette est un lien entre les générations. Les mains de la grand-mère mélangent la pâte comme les mains de sa propre mère, il y a cent ans. Cuisiner pour quelqu'un, c'est lui dire sans mots : « Tu comptes pour moi. »", es: "En muchas cocinas de familia, la receta es un vínculo entre generaciones. Las manos de la abuela mezclan la masa como las manos de su propia madre hace cien años. Cocinar para alguien es decirle sin palabras: «Cuentas para mí»." },
        { it: "C'est peut-être la spiritualité la plus ancienne du monde : transformer des ingrédients simples en nourriture, et la nourriture en mémoire. Quand vous cuisinez lentement, avec attention, vous honorez la terre, le temps et les personnes qui mangeront.", es: "Es quizá la espiritualidad más antigua del mundo: transformar ingredientes simples en alimento, y el alimento en recuerdo. Cuando cocinas despacio, con atención, honras la tierra, el tiempo y las personas que comerán." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un libro de dietas moderno", "Cocinar para otros como práctica espiritual y de memoria", "Un curso de cocina rápida"],
        answer: 1,
        why: "«Cuisiner, c'est aimer» une cocina y amor: el gesto de cocinar para otros.",
      },
      quiz: [
        { q: "Que font les mains de la grand-mère ?", kind: "literal", options: ["Elles mélangent la pâte", "Elles dorment", "Elles écrivent une lettre"], answer: 0, why: "«Les mains de la grand-mère mélangent la pâte»." },
        { q: "Que dit-on quand on cuisine pour quelqu'un ?", kind: "inferencial", options: ["« Tu comptes pour moi »", "« J'ai faim »", "« Je suis fatigué »"], answer: 0, why: "«Cuisiner pour quelqu'un, c'est lui dire sans mots : tu comptes pour moi»." },
        { q: "Que transforme-t-on en cuisinant, selon le texte ?", kind: "critica", options: ["Des ingrédients en nourriture, et la nourriture en mémoire", "La cuisine en chambre", "L'eau en vin"], answer: 0, why: "La transformación doble del cocinar: alimento y memoria." },
      ],
      vf: [
        { text: "La recette familiale relie les générations.", value: true, why: "«La recette est un lien entre les générations»." },
        { text: "Il faut cuisiner vite pour honorer le temps.", value: false, why: "El texto dice «quand vous cuisinez lentement, avec attention»." },
        { text: "Cuisiner est présenté comme une spiritualité ancienne.", value: true, why: "«La spiritualité la plus ancienne du monde»." },
      ],
    },
    {
      id: "md-fr-a2-08-2", theme: "relax fisico",
      title: "Le parfum du pain d'épices", titleEs: "El aroma del pain d'épices", minutes: 2,
      paragraphs: [
        { it: "Le four chauffe, et la maison se remplit d'un parfum ancien : miel, cannelle, épices douces. Posez-vous deux minutes près du four. Respirez ce parfum comme s'il venait de loin. Vos mâchoires se desserrent, vos mains se réchauffent.", es: "El horno se calienta y la casa se llena de un aroma antiguo: miel, canela, especias suaves. Ponte dos minutos cerca del horno. Respira ese aroma como si viniera de lejos. Tus mandíbulas se aflojan, tus manos se calientan." },
        { it: "Les odeurs sont des portes directes vers la mémoire et le calme. Une seule inspiration profonde, et le corps se détend sans effort. Restez là, à regarder la pâte dorer. Il n'y a rien à faire d'autre : c'est un moment de pur relax physique.", es: "Los olores son puertas directas a la memoria y a la calma. Una sola inhalación profunda y el cuerpo se relaja sin esfuerzo. Quédate ahí mirando cómo la masa se dora. No hay nada más que hacer: es un momento de puro relajamiento físico." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una receta detallada de pain d'épices", "Relajarse con el aroma del pan de especias al horno", "La historia de las especias de Lorena"],
        answer: 1,
        why: "El título apunta al perfume y su efecto corporal, no a la receta.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "El aroma de la repostería al horno relaja cuerpo y memoria",
          "Il faut manger le pain immédiatement",
          "Les odeurs n'ont aucun effet",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["La maison se remplit d'un parfum ancien", "Vos mâchoires se desserrent", "Les odeurs sont des portes directes vers la mémoire"],
        distractors: ["Le four est cassé", "Vous achetez le pain à la boulangerie", "La cannelle est dangereuse pour la santé"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "La maison se remplit d'un parfum ancien : miel, cannelle.",
          "Respirez ce parfum comme s'il venait de loin.",
          "Vos mâchoires se desserrent, vos mains se réchauffent.",
          "Le four à chaleur tournante consomme moins d'électricité.",
          "Restez là, à regarder la pâte dorer.",
        ],
        intruder: 3,
        why: "El consumo eléctrico del horno es un dato técnico ajeno al relax sensorial: es el intruso.",
      },
    },
    {
      id: "md-fr-a2-08-3", theme: "relax mentale",
      title: "Pétrir la pâte", titleEs: "Amasar la masa", minutes: 3,
      paragraphs: [
        { it: "Le soir, parfois, la tête tourne trop vite. Prenez alors de la farine, de l'eau, un peu de sel, et pétrissez. Poussez la pâte, repliez-la, poussez encore. Le rythme des mains gagne contre le rythme des pensées.", es: "Por la noche, a veces, la cabeza gira demasiado rápido. Toma entonces harina, agua, un poco de sal, y amasa. Empuja la masa, dóblala, empuja otra vez. El ritmo de las manos gana al ritmo de los pensamientos." },
        { it: "Au bout de dix minutes, vos bras travaillent tout seuls et votre esprit est devenu aussi lisse que la pâte. La mèche des pensées tristes s'éteint doucement. Les mains savent méditer mieux que nous : il suffit de leur donner quelque chose à faire.", es: "Al cabo de diez minutos tus brazos trabajan solos y tu mente se ha vuelto tan lisa como la masa. La mecha de los pensamientos tristes se apaga despacio. Las manos saben meditar mejor que nosotros: basta con darles algo que hacer." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso profesional de panadería", "Amasar masa como forma de calmar la mente", "Los peligros de la harine"],
        answer: 1,
        why: "«Pétrir la pâte» con la cabeza que gira: el amasado como antiestrés.",
      },
      sequence: {
        instr: "Ordena el proceso:",
        events: ["Votre tête tourne trop vite le soir", "Vous prenez farine, eau et sel", "Vous poussez la pâte et la repliez", "Vos bras travaillent tout seuls", "Votre esprit devient lisse comme la pâte"],
      },
      listen: {
        intro: "Escucha y responde:",
        audioIt: "Bonsoir. Farine, eau, sel : voilà votre méditation du soir. Pétrissez doucement. Poussez la pâte avec la paume, repliez-la, tournez le bol d'un quart de tour. Encore une fois. Encore une fois. Écoutez le petit bruit de la pâte contre le bois. Vos pensées partent une à une, comme des invités polis.",
        questions: [
          { q: "De quoi avez-vous besoin ?", kind: "literal", options: ["Farine, eau et sel", "Trois œufs et du sucre", "Un tapis de sport"], answer: 0, why: "«Farine, eau, sel : voilà votre méditation du soir»." },
          { q: "Avec quoi poussez-vous la pâte ?", kind: "literal", options: ["Avec la paume", "Avec les pieds", "Avec une cuillère"], answer: 0, why: "«Poussez la pâte avec la paume»." },
          { q: "De combien tournez le bol ?", kind: "literal", options: ["D'un quart de tour", "De dix tours", "Pas du tout"], answer: 0, why: "«Tournez le bol d'un quart de tour»." },
          { q: "Comment partent vos pensées ?", kind: "inferencial", options: ["Une à une, comme des invités polis", "En criant", "Elles ne partent pas"], answer: 0, why: "«Vos pensées partent une à une, comme des invités polis»." },
        ],
      },
    },
  ],

  "fr-cu-a2-09": [
    {
      id: "md-fr-a2-09-1", theme: "meditazione",
      title: "Trois respirations avant l'entretien", titleEs: "Tres respiraciones antes de la entrevista", minutes: 2,
      paragraphs: [
        { it: "La porte du bureau est close. Votre cœur bat vite, vos mains sont froides. Avant d'entrer, respirez trois fois. Inspiration longue par le nez, expiration plus longue par la bouche. Le corps croit ce que la respiration lui raconte.", es: "La puerta de la oficina está cerrada. Tu corazón late rápido, tus manos están frías. Antes de entrar, respira tres veces. Inhalación larga por la nariz, exhalación más larga por la boca. El cuerpo cree lo que la respiración le cuenta." },
        { it: "À la troisième respiration, le visage se détend, la voix se pose. Vous n'êtes pas plus fort ni plus compétent, mais vous êtes là, entier et calme. C'est tout ce qu'on peut demander avant une rencontre importante : être présent.", es: "En la tercera respiración el rostro se afloja, la voz se asienta. No eres más fuerte ni más competente, pero estás ahí, entero y calmado. Eso es todo lo que se puede pedir antes de un encuentro importante: estar presente." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Consejos para mentir en una entrevista", "Respirar antes de un momento importante para estar presente", "Cómo vestirse para una entrevista"],
        answer: 1,
        why: "El título apunta a la respiración previa, no a tácticas de entrevista.",
      },
      quiz: [
        { q: "Combien de fois respirez-vous avant d'entrer ?", kind: "literal", options: ["Trois fois", "Dix fois", "Jamais"], answer: 0, why: "«Avant d'entrer, respirez trois fois»." },
        { q: "Que raconte la respiration au corps ?", kind: "inferencial", options: ["Qu'il peut être calme", "Qu'il est malade", "Qu'il doit courir"], answer: 0, why: "«Le corps croit ce que la respiration lui raconte»: la calma se transmite." },
        { q: "Que peut-on demander avant une rencontre importante ?", kind: "critica", options: ["Être présent", "Être parfait", "Être quelqu'un d'autre"], answer: 0, why: "«C'est tout ce qu'on peut demander : être présent»." },
      ],
      vf: [
        { text: "Vos mains sont chaudes avant l'entretien.", value: false, why: "«Vos mains sont froides» antes de respirar." },
        { text: "L'expiration est plus longue que l'inspiration.", value: true, why: "«Expiration plus longue par la bouche»." },
        { text: "Après trois respirations, le visage se détend.", value: true, why: "«À la troisième respiration, le visage se détend»." },
      ],
    },
    {
      id: "md-fr-a2-09-2", theme: "qui e ora",
      title: "Une tâche à la fois", titleEs: "Una tarea a la vez", minutes: 2,
      paragraphs: [
        { it: "Pendant le service, tout va vite : trois tables, deux cafés, une addition. Le secret des serveurs tranquilles est simple : une seule tâche à la fois. Ici et maintenant, je porte deux cafés. Ici et maintenant, je note la commande.", es: "Durante el servicio todo va rápido: tres mesas, dos cafés, una cuenta. El secreto de los camareros tranquilos es simple: una sola tarea a la vez. Aquí y ahora llevo dos cafés. Aquí y ahora apunto el pedido." },
        { it: "Quand la tête veut tout faire ensemble, elle ne fait rien bien et se fatigue double. Revenez à un seul geste, aussi petit soit-il. Le présent est étroit comme un plateau, mais solide : on peut s'y tenir en équilibre toute la journée.", es: "Cuando la cabeza quiere hacerlo todo a la vez, no hace nada bien y se cansa el doble. Vuelve a un solo gesto, por pequeño que sea. El presente es estrecho como una bandeja, pero sólido: se puede mantener el equilibrio en él todo el día." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de camareros profesionales", "Hacer una sola cosa a la vez como práctica de presencia en el trabajo", "Cómo cobrar más propinas"],
        answer: 1,
        why: "«Une tâche à la fois» apunta a la concentración presente, no a la profesión.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Concentrarse en una sola tarea a la vez mantiene el equilibrio y ahorra energía",
          "Il faut faire cinq choses à la fois",
          "Le présent est trop étroit pour travailler",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Une seule tâche à la fois", "La tête qui veut tout faire ensemble se fatigue double", "Le présent est étroit comme un plateau, mais solide"],
        distractors: ["Les serveurs gagnent mille euros par soir", "Le plateau est en argent", "Il faut courir entre les tables sans arrêt"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Le secret des serveurs tranquilles : une seule tâche à la fois.",
          "Ici et maintenant, je porte deux cafés.",
          "Revenez à un seul geste, aussi petit soit-il.",
          "Les pourboires se déclarent aux impôts en janvier.",
          "On peut s'y tenir en équilibre toute la journée.",
        ],
        intruder: 3,
        why: "La nota fiscal sobre las propinas es un dato administrativo ajeno a la presencia: es el intruso.",
      },
    },
    {
      id: "md-fr-a2-09-3", theme: "spiritualità",
      title: "Bien servir, bien vivre", titleEs: "Bien servir, bien vivir", minutes: 3,
      paragraphs: [
        { it: "Il existe une vieille sagesse : on reconnaît une personne à la façon dont elle sert les autres. Un café posé avec soin, un sourire à la fin d'une longue journée : ces gestes petits comme des graines poussent quelque part en nous.", es: "Existe una vieja sabiduría: se reconoce a una persona por cómo sirve a los demás. Un café posado con cuidado, una sonrisa al final de una larga jornada: esos gestos pequeños como semillas crecen en algún lugar dentro de nosotros." },
        { it: "Servir n'est pas se rabaisser : c'est se relier. Chaque échange honnête, chaque travail bien fait, même invisible, construit un monde un peu plus solide. Le soir, celui qui a bien servi dort d'un sommeil simple et profond, avec la conscience tranquille.", es: "Servir no es rebajarse: es conectarse. Cada intercambio honesto, cada trabajo bien hecho, aunque sea invisible, construye un mundo un poco más sólido. Por la noche, quien ha servido bien duerme un sueño simple y profundo, con la conciencia tranquila." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo ganar un concurso de cafetería", "El trabajo honesto y el servicio a otros como sabiduría de vida", "Una crítica al trabajo en equipo"],
        answer: 1,
        why: "«Bien servir, bien vivre» une servir y vivir: la ética del servicio.",
      },
      sequence: {
        instr: "Ordena las ideas del texto:",
        events: ["Un café est posé avec soin", "Une personne sourit à la fin d'une longue journée", "Les petits gestes poussent comme des graines en nous", "Chaque travail bien fait construit un monde plus solide", "Le soir, celui qui a bien servi dort profondément"],
      },
      listen: {
        intro: "Escucha y responde:",
        audioIt: "Bonsoir. Pensez à votre journée de travail. Un geste simple vous revient : une porte tenue, un plat servi, un mot gentil. Revoyez ce geste en détail. Qui était là ? Que s'est-il passé ensuite ? Ce petit geste honnête a rendu le monde un peu meilleur. Reposez-vous maintenant : vous avez bien travaillé, vous avez bien servi.",
        questions: [
          { q: "À quoi pensez-vous d'abord ?", kind: "literal", options: ["À un geste simple de la journée", "Aux vacances", "À un film"], answer: 0, why: "«Pensez à votre journée de travail. Un geste simple vous revient»." },
          { q: "Quel est l'exemple de geste donné ?", kind: "literal", options: ["Une porte tenue, un plat servi, un mot gentil", "Un salaire, une prime, un jour off", "Un colis, une lettre, une clé"], answer: 0, why: "«Une porte tenue, un plat servi, un mot gentil»." },
          { q: "Que fait la personne à la fin ?", kind: "literal", options: ["Elle se repose", "Elle repart travailler", "Elle court"], answer: 0, why: "«Reposez-vous maintenant»." },
          { q: "Qu'a fait le geste honnête, selon l'audio ?", kind: "inferencial", options: ["Il a rendu le monde un peu meilleur", "Il a coûté très cher", "Il n'a servi à rien"], answer: 0, why: "«Ce petit geste honnête a rendu le monde un peu meilleur»." },
        ],
      },
    },
  ],

  "fr-cu-a2-10": [
    {
      id: "md-fr-a2-10-1", theme: "relax fisico",
      title: "Les pieds dans le sable", titleEs: "Los pies en la arena", minutes: 2,
      paragraphs: [
        { it: "Enlevez vos chaussures et entrez dans le sable. Le sable est tiède en surface, frais dessous. Vos pieds s'enfoncent un peu, puis la mer les lave. À chaque vague, le corps se souvient d'un vieux bonheur simple.", es: "Quítate los zapatos y entra en la arena. La arena está tibia en la superficie, fresca debajo. Tus pies se hunden un poco y luego el mar los lava. A cada ola el cuerpo recuerda una vieja felicidad simple." },
        { it: "Marchez lentement le long de l'eau. Les épaules tombent, la mâchoire se desserre, la respiration prend le rythme des vagues. Le bord de mer est un massage gratuit pour tout le corps. Il ne demande qu'une chose : y rester un peu.", es: "Camina despacio junto al agua. Los hombros caen, la mandíbula se afloja, la respiración toma el ritmo de las olas. La orilla del mar es un masaje gratuito para todo el cuerpo. Solo pide una cosa: quedarse un rato." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso de natación en el mar", "La sensación física de caminar descalzo junto al agua", "La geología de las calas"],
        answer: 1,
        why: "«Les pieds dans le sable» apunta a la experiencia sensorial, no al deporte.",
      },
      quiz: [
        { q: "Comment est le sable en surface ?", kind: "literal", options: ["Tiède", "Brûlant", "Gelé"], answer: 0, why: "«Le sable est tiède en surface, frais dessous»." },
        { q: "Quand la mâchoire se desserre, que fait la respiration ?", kind: "inferencial", options: ["Elle prend le rythme des vagues", "Elle s'arrête", "Elle devient rapide"], answer: 0, why: "«La respiration prend le rythme des vagues»: la calma se propaga." },
        { q: "Qu'est-ce que le bord de mer pour le corps ?", kind: "critica", options: ["Un massage gratuit", "Un danger", "Une corvée"], answer: 0, why: "«Le bord de mer est un massage gratuit pour tout le corps»." },
      ],
      vf: [
        { text: "Vos pieds s'enfoncent un peu dans le sable.", value: true, why: "«Vos pieds s'enfoncent un peu»." },
        { text: "La mer lave vos pieds à chaque vague.", value: true, why: "«Puis la mer les lave. À chaque vague»." },
        { text: "Il faut courir pour profiter du bord de mer.", value: false, why: "El texto dice «Marchez lentement le long de l'eau»." },
      ],
    },
    {
      id: "md-fr-a2-10-2", theme: "relax mentale",
      title: "Des vacances dans la tête", titleEs: "Unas vacaciones en la cabeza", minutes: 2,
      paragraphs: [
        { it: "Vous ne partez pas ce week-end ? Aucune importance : le cerveau ne fait pas la différence entre une plage réelle et une plage imaginée. Fermez les yeux trois minutes et voyez le port, les barques, la lumière du soir sur l'eau.", es: "¿No te vas este fin de semana? No importa: el cerebro no distingue entre una playa real y una playa imaginada. Cierra los ojos tres minutos y ve el puerto, las barcas, la luz del anochecer sobre el agua." },
        { it: "Respirez comme si vous y étiez : l'air salé, le cri des mouettes, le bois chaud du bateau. Ce petit voyage mental détend vraiment les muscles. Les vacances durent deux semaines ; l'imagination, elle, est ouverte toute l'année.", es: "Respira como si estuvieras allí: el aire salado, el grito de las gaviotas, la madera caliente del barco. Este pequeño viaje mental relaja de verdad los músculos. Las vacaciones duran dos semanas; la imaginación está abierta todo el año." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Paquetes turísticos baratos", "Visualizar un lugar tranquilo como descanso mental", "Los peligros de imaginar demasiado"],
        answer: 1,
        why: "«Des vacances dans la tête»: el viaje mental como descanso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Imaginar con detalle un lugar tranquilo relaja como unas pequeñas vacaciones",
          "Seules les vraies vacances détendent",
          "Il est dangereux de fermer les yeux trois minutes",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Le cerveau ne fait pas la différence entre plage réelle et imaginée", "L'air salé, le cri des mouettes", "L'imagination est ouverte toute l'année"],
        distractors: ["Le billet de train coûte trop cher", "Les mouettes attaquent les touristes", "Il faut dormir douze heures pour rêver"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Le cerveau ne distingue pas plage réelle et plage imaginée.",
          "Voyez le port, les barques, la lumière du soir.",
          "L'air salé, le cri des mouettes, le bois chaud.",
          "Les hôtels de Cassis sont complets en août.",
          "L'imagination est ouverte toute l'année.",
        ],
        intruder: 3,
        why: "La disponibilidad hotelera es un dato de reserva ajeno al viaje mental: es el intruso.",
      },
    },
    {
      id: "md-fr-a2-10-3", theme: "meditazione",
      title: "Le son des vagues", titleEs: "El sonido de las olas", minutes: 3,
      paragraphs: [
        { it: "Asseyez-vous face à la mer. Fermez les yeux et suivez une seule vague, du large jusqu'au sable. Écoutez-la naître, grandir, se casser, mourir en petit bruit blanc. Puis cherchez la vague suivante. Il y en a toujours une autre.", es: "Siéntate frente al mar. Cierra los ojos y sigue una sola ola, desde el alta mar hasta la arena. Escúchala nacer, crecer, romper, morir en un pequeño ruido blanco. Luego busca la siguiente ola. Siempre hay otra." },
        { it: "Les vagues sont un professeur de méditation : elles répètent la même leçon sans jamais se lasser. Comme les pensées : elles arrivent, elles se cassent, elles repartent. Après dix minutes d'écoute, votre respiration s'est mise, toute seule, au rythme de la mer.", es: "Las olas son un profesor de meditación: repiten la misma lección sin cansarse nunca. Como los pensamientos: llegan, rompen, se van. Después de diez minutos de escucha, tu respiración se ha puesto, sola, al ritmo del mar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un informe oceanográfico", "Escuchar las olas como práctica de meditación", "Cómo surfar olas grandes"],
        answer: 1,
        why: "«Le son des vagues» + meditación: la escucha del mar.",
      },
      sequence: {
        instr: "Ordena la práctica:",
        events: ["Vous vous asseyez face à la mer", "Vous fermez les yeux", "Vous suivez une vague du large jusqu'au sable", "Vous cherchez la vague suivante", "Votre respiration se met au rythme de la mer"],
      },
      listen: {
        intro: "Escucha y responde:",
        audioIt: "Installez-vous confortablement, face à la mer. Fermez les yeux. Écoutez : une vague arrive de loin. Elle grandit, elle se casse sur le sable, elle murmure en repartant. Une autre arrive déjà. Restez avec ce va-et-vient dix minutes. Le bruit des vagues respire pour vous, et votre corps suit.",
        questions: [
          { q: "Où vous installez-vous ?", kind: "literal", options: ["Face à la mer", "Face à la télévision", "Dans le train"], answer: 0, why: "«Installez-vous confortablement, face à la mer»." },
          { q: "Que fait la vague sur le sable ?", kind: "literal", options: ["Elle se casse et murmure en repartant", "Elle reste immobile", "Elle monte au ciel"], answer: 0, why: "«Elle se casse sur le sable, elle murmure en repartant»." },
          { q: "Combien de temps restez-vous avec le va-et-vient ?", kind: "literal", options: ["Dix minutes", "Dix secondes", "Dix heures"], answer: 0, why: "«Restez avec ce va-et-vient dix minutes»." },
          { q: "Que fait le bruit des vagues, selon l'audio ?", kind: "inferencial", options: ["Il respire pour vous", "Il vous réveille", "Il vous appelle par votre nom"], answer: 0, why: "«Le bruit des vagues respire pour vous, et votre corps suit»." },
        ],
      },
    },
  ],

  "fr-cu-a2-11": [
    {
      id: "md-fr-a2-11-1", theme: "qui e ora",
      title: "Le bonjour du voisin", titleEs: "El buenos días del vecino", minutes: 2,
      paragraphs: [
        { it: "Chaque matin, dans l'escalier, vous croisez madame Meyer. Le même « Bonjour ! », le même sourire. C'est un rendez-vous minuscule, et pourtant tout est là : une voix connue, un visage qui vous voit, le moment présent partagé.", es: "Cada mañana, en la escalera, te cruzas con la señora Meyer. El mismo «¡Buenos días!», la misma sonrisa. Es una cita minúscula y, sin embargo, ahí está todo: una voz conocida, un rostro que te ve, el momento presente compartido." },
        { it: "Les rencontres de trois secondes sont des trésors d'attention. Soyez complètement dans ce « Bonjour » : regardez les yeux, écoutez la réponse. Le reste de la journée peut être rapide et bruyant ; ces trois secondes, elles, seront lentes et vivantes.", es: "Los encuentros de tres segundos son tesoros de atención. Esté completamente en ese «buenos días»: mira los ojos, escucha la respuesta. El resto del día puede ser rápido y ruidoso; esos tres segundos serán lentos y vivos." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los conflictos entre vecinos de edificio", "Vivir con presencia los pequeños encuentros diarios", "Cómo organizar reuniones de vecinos"],
        answer: 1,
        why: "«Le bonjour du voisin» apunta al gesto cotidiano vivido con atención.",
      },
      quiz: [
        { q: "Qui croisez-vous chaque matin ?", kind: "literal", options: ["Madame Meyer", "Le facteur", "Le président"], answer: 0, why: "«Vous croisez madame Meyer»." },
        { q: "Que sont les rencontres de trois secondes ?", kind: "inferencial", options: ["Des trésors d'attention", "Des pertes de temps", "Des obligations ennuyeuses"], answer: 0, why: "«Les rencontres de trois secondes sont des trésors d'attention»." },
        { q: "Comment ces trois secondes seront-elles, selon le texte ?", kind: "critica", options: ["Lentes et vivantes", "Rapides et bruyantes", "Tristes et longues"], answer: 0, why: "«Ces trois secondes, elles, seront lentes et vivantes»." },
      ],
      vf: [
        { text: "Le bonjour de madame Meyer est toujours le même.", value: true, why: "«Le même Bonjour !, le même sourire»." },
        { text: "Il faut éviter les yeux du voisin.", value: false, why: "El texto dice «regardez les yeux»." },
        { text: "Un rendez-vous minuscule peut contenir le moment présent.", value: true, why: "«Tout est là : le moment présent partagé»." },
      ],
    },
    {
      id: "md-fr-a2-11-2", theme: "spiritualità",
      title: "Les petits services", titleEs: "Los pequeños favores", minutes: 2,
      paragraphs: [
        { it: "Arroser les plantes d'un autre, relever son courrier, garder sa clé : ces petits services sont des prières laïques. On ne voit pas grand-chose, mais la confiance passe de main en main, comme une eau invisible.", es: "Regar las plantas de otro, recoger su correo, guardar su llave: esos pequeños favores son plegarias laicas. No se ve gran cosa, pero la confianza pasa de mano en mano, como un agua invisible." },
        { it: "Aider sans demander de retour élargit le cœur silencieusement. Le voisin qui arrose vos tomates pendant votre absence vous relie à quelque chose de plus grand : une communauté de gestes, un tissu de fiabilité. Le spirituel n'est pas toujours en hauteur : parfois, il a les mains dans la terre des pots de fleurs.", es: "Ayudar sin pedir nada a cambio ensancha el corazón en silencio. El vecino que riega tus tomates durante tu ausencia te conecta con algo más grande: una comunidad de gestos, una trama de fiabilidad. Lo espiritual no siempre está en las alturas: a veces tiene las manos en la tierra de las macetas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un contrato de servicios de comunidad", "Los favores entre vecinos como práctica espiritual", "Cómo montar un negocio de jardinería"],
        answer: 1,
        why: "«Les petits services» como «prières laïques»: espiritualidad cotidiana.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Los pequeños favores entre vecinos tejen confianza y ensanchan el corazón",
          "Aider exige toujours une récompense",
          "Les plantes n'ont pas besoin d'eau",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Ces petits services sont des prières laïques", "La confiance passe de main en main", "Aider sans demander de retour élargit le cœur"],
        distractors: ["Le voisin facture vingt euros par plante", "Les clés sont perdues chaque semaine", "Les tomates poussent sans eau pendant un mois"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Arroser les plantes d'un autre est un petit service.",
          "La confiance passe de main en main.",
          "Aider sans demander de retour élargit le cœur.",
          "Le marché aux fleurs ouvre le mardi matin.",
          "Le spirituel parfois a les mains dans la terre des pots.",
        ],
        intruder: 3,
        why: "El horario del mercado de flores es un dato práctico ajeno a la espiritualidad del favor: es el intruso.",
      },
    },
    {
      id: "md-fr-a2-11-3", theme: "relax fisico",
      title: "Arroser, un geste qui apaise", titleEs: "Regar, un gesto que calma", minutes: 3,
      paragraphs: [
        { it: "L'eau coule doucement dans la terre du pot. Tenez l'arrosoir à deux mains, sentez son poids qui change. Regardez la terre sombre boire, les feuilles qui se redressent. Ce geste ancien apaise le corps qui le fait.", es: "El agua corre suavemente por la tierra de la maceta. Sujeta la regadera con las dos manos, siente cómo cambia su peso. Mira cómo bebe la tierra oscura, cómo se yerguen las hojas. Ese gesto antiguo calma el cuerpo que lo hace." },
        { it: "Prenez soin de vos plantes comme d'une petite méditation debout : l'odeur de la terre humide, le bruit fin de l'eau, la couleur verte qui repose les yeux. Cinq minutes d'arrosage lent valent une pause complète, et personne ne remercie mieux qu'une fougère bienheureuse.", es: "Cuida tus plantas como una pequeña meditación de pie: el olor de la tierra húmeda, el ruido fino del agua, el verde que descansa los ojos. Cinco minutos de riego lento valen una pausa completa, y nadie agradece mejor que un helecho dichoso." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un tratado de botánica", "Regar las plantas despacio como relax físico y mental", "Cómo instalar riego automático"],
        answer: 1,
        why: "«Arroser, un geste qui apaise»: el riego como práctica calmante.",
      },
      sequence: {
        instr: "Ordena el gesto:",
        events: ["Vous tenez l'arrosoir à deux mains", "L'eau coule doucement dans la terre", "La terre sombre boit", "Les feuilles se redressent", "Vos yeux se reposent sur le vert"],
      },
      listen: {
        intro: "Escucha y responde:",
        audioIt: "Prenez votre arrosoir. Remplissez-le lentement, écoutez l'eau monter. Maintenant, arrosez la première plante, tout près de la terre, sans presser. Regardez l'eau disparaître dans le pot. Passez à la plante suivante dans le calme. Sentez vos épaules détendues, votre respiration régulière. Les plantes boivent, et vous avec elles.",
        questions: [
          { q: "Que faites-vous d'abord ?", kind: "literal", options: ["Vous remplissez l'arrosoir lentement", "Vous coupez les feuilles", "Vous changez de pot"], answer: 0, why: "«Remplissez-le lentement, écoutez l'eau monter»." },
          { q: "Où arrosez-vous la plante ?", kind: "literal", options: ["Tout près de la terre", "Sur les fleurs seulement", "De très loin"], answer: 0, why: "«Arrosez la première plante, tout près de la terre»." },
          { q: "Comment sont vos épaules pendant l'arrosage ?", kind: "literal", options: ["Détendues", "Levées très haut", "Douloureuses"], answer: 0, why: "«Sentez vos épaules détendues»." },
          { q: "Que font les plantes à la fin ?", kind: "inferencial", options: ["Elles boivent, et vous avec elles", "Elles dorment", "Elles fuient le pot"], answer: 0, why: "«Les plantes boivent, et vous avec elles»: la comunión final." },
        ],
      },
    },
  ],

  "fr-cu-a2-12": [
    {
      id: "md-fr-a2-12-1", theme: "relax mentale",
      title: "Par la fenêtre du train", titleEs: "Por la ventanilla del tren", minutes: 2,
      paragraphs: [
        { it: "Dans le TGV, tout va vite : 300 kilomètres à l'heure, les collines bleues, les champs jaunes. Posez le front contre la vitre et regardez sans nommer. Le paysage défile comme un film que personne n'a monté.", es: "En el TGV todo va rápido: 300 kilómetros por hora, las colinas azules, los campos amarillos. Apoya la frente en la ventanilla y mira sin nombrar. El paisaje desfila como una película que nadie ha montado." },
        { it: "Regarder sans nommer, c'est le secret : ni villes, ni gares, ni heures. Juste des couleurs qui glissent. Le train pense pour vous, il va devant, et votre tête, pour une fois, accepte de suivre. C'est une des rares détentes totales du monde moderne.", es: "Mirar sin nombrar es el secreto: ni ciudades, ni estaciones, ni horas. Solo colores que se deslizan. El tren piensa por ti, va delante, y tu cabeza, por una vez, acepta seguir. Es uno de los raros relajamientos totales del mundo moderno." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los récords de velocidad del TGV", "Mirar el paisaje del tren como relax mental", "Cómo trabajar en el tren"],
        answer: 1,
        why: "«Par la fenêtre du train» apunta a la mirada contemplativa, no a la técnica.",
      },
      quiz: [
        { q: "Que faites-vous avec votre front ?", kind: "literal", options: ["Je le pose contre la vitre", "Je le cache", "Je le lève"], answer: 0, why: "«Posez le front contre la vitre»." },
        { q: "Que signifie « regarder sans nommer » ?", kind: "inferencial", options: ["Voir les couleurs sans mettre de mots", "Apprendre les noms des villes", "Parler à voix haute"], answer: 0, why: "«Ni villes, ni gares, ni heures. Juste des couleurs qui glissent»." },
        { q: "Pourquoi la tête accepte-t-elle de suivre le train ?", kind: "critica", options: ["Parce que le train pense pour vous et va devant", "Parce qu'elle est fatiguée", "Parce qu'elle a peur"], answer: 0, why: "«Le train pense pour vous, il va devant, et votre tête accepte de suivre»." },
      ],
      vf: [
        { text: "Le paysage défile comme un film.", value: true, why: "«Le paysage défile comme un film que personne n'a monté»." },
        { text: "Il faut nommer chaque ville traversée.", value: false, why: "El secreto es lo contrario: «regarder sans nommer»." },
        { text: "La vitre propose une détente totale.", value: true, why: "«C'est une des rares détentes totales du monde moderne»." },
      ],
    },
    {
      id: "md-fr-a2-12-2", theme: "meditazione",
      title: "Le rythme du train", titleEs: "El ritmo del tren", minutes: 2,
      paragraphs: [
        { it: "Fermez les yeux dans le train. Le wagon balance à gauche, à droite, comme un grand berceau. Les rails chantent toujours la même chanson. Vous n'avez rien à faire, nulle part où être, pendant trois heures.", es: "Cierra los ojos en el tren. El vagón se balancea a la izquierda, a la derecha, como una gran cuna. Los raíles cantan siempre la misma canción. No tienes nada que hacer, ningún sitio donde estar, durante tres horas." },
        { it: "Ce balancement est une méditation offerte : le corps se lâche, les pensées ralentissent au rythme des roues. D'abord, puis ensuite, enfin : le train connaît déjà l'ordre des choses. Vous, vous n'avez qu'à respirer, berçé par le voyage, jusqu'à l'arrivée.", es: "Ese balanceo es una meditación regalada: el cuerpo se suelta, los pensamientos aminoran al ritmo de las ruedas. Primero, luego, por último: el tren ya conoce el orden de las cosas. Tú solo tienes que respirar, mecido por el viaje, hasta la llegada." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La ingeniería de los raíles franceses", "El balanceo del tren como meditación regalada", "Cómo reservar asiento en el TGV"],
        answer: 1,
        why: "«Le rythme du train» con cuerpo y respiración: meditación mecánica.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "El balanceo y el ritmo de los raíles mecen cuerpo y mente como una meditación",
          "Il faut travailler pendant tout le voyage",
          "Le train est trop bruyant pour se détendre",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Le wagon balance comme un grand berceau", "Les rails chantent toujours la même chanson", "Le corps se lâche, les pensées ralentissent"],
        distractors: ["Le train roule à 500 kilomètres à l'heure", "Le billet coûte cent euros", "Il faut rester debout tout le trajet"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Le wagon balance à gauche, à droite.",
          "Les rails chantent toujours la même chanson.",
          "Le corps se lâche, les pensées ralentissent.",
          "La voiture 12 se trouve en tête du train.",
          "Vous n'avez qu'à respirer jusqu'à l'arrivée.",
        ],
        intruder: 3,
        why: "La ubicación del vagón 12 es información de viaje ajena a la meditación: es el intruso.",
      },
    },
    {
      id: "md-fr-a2-12-3", theme: "qui e ora",
      title: "Enfin arrivé", titleEs: "Por fin llegado", minutes: 3,
      paragraphs: [
        { it: "La porte du wagon s'ouvre sur un nouveau ciel : la lumière du Sud, l'odeur de sel, les voix qui parlent plus fort. Restez une minute sur le quai, le sac au sol. Vous venez d'arriver. Ce moment n'arrive qu'une fois par voyage.", es: "La puerta del vagón se abre a un cielo nuevo: la luz del Sur, el olor a sal, las voces que hablan más alto. Quédate un minuto en el andén, el bolso en el suelo. Acabas de llegar. Este momento solo llega una vez por viaje." },
        { it: "Enfin ne signifie pas seulement « à la fin » : il signifie aussi « quelle joie ! ». Savourez ces premières respirations de ville inconnue : tout est neuf, tout est ouvert, tout est possible. L'ici et maintenant vous tend les bras ; demain, lui, peut encore attendre.", es: "Enfin no significa solo 'al final': significa también '¡qué alegría!'. Saborea esas primeras respiraciones de ciudad desconocida: todo es nuevo, todo está abierto, todo es posible. El aquí y ahora te tiende los brazos; mañana todavía puede esperar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los retrasos de los trenes", "Saborear el momento de la llegada a un lugar nuevo", "Cómo encontrar hotel al llegar"],
        answer: 1,
        why: "«Enfin arrivé» celebra el instante de llegar, no la logística.",
      },
      sequence: {
        instr: "Ordena la llegada:",
        events: ["La porte du wagon s'ouvre", "Vous restez une minute sur le quai, le sac au sol", "Vous respirez les premières respirations de la ville inconnue", "L'ici et maintenant vous tend les bras", "Demain peut encore attendre"],
      },
      listen: {
        intro: "Escucha y responde:",
        audioIt: "Bienvenue. Vous venez d'arriver. Restez un instant immobile sur le quai. Regardez la nouvelle gare : ses pierres, sa lumière, ses voyageurs qui partent et reviennent. Prenez une grande inspiration. Cette odeur, ce bruit, cette lumière : c'est votre première page du séjour. L'aventure commence par ces trois respirations.",
        questions: [
          { q: "Que faites-vous sur le quai ?", kind: "literal", options: ["Vous restez immobile un instant", "Vous courez vers la sortie", "Vous dormez"], answer: 0, why: "«Restez un instant immobile sur le quai»." },
          { q: "Que regardez-vous ?", kind: "literal", options: ["La nouvelle gare, ses pierres, sa lumière", "Votre téléphone", "Le sol seulement"], answer: 0, why: "«Regardez la nouvelle gare : ses pierres, sa lumière»." },
          { q: "Combien de respirations ouvrent le séjour ?", kind: "literal", options: ["Trois", "Trente", "Aucune"], answer: 0, why: "«L'aventure commence par ces trois respirations»." },
          { q: "Que représentent l'odeur, le bruit et la lumière ?", kind: "inferencial", options: ["La première page du séjour", "Un mauvais souvenir", "Un problème de gare"], answer: 0, why: "«C'est votre première page du séjour»: el inicio de la aventura." },
        ],
      },
    },
  ],
};
