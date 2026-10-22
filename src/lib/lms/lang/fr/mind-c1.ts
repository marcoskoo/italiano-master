import type { MindReading } from "../../cambridge-mind";

/* ═══ FR C1 · Mind readings (temáticas de conciencia) — 3 por unidad ══
   Metodología v9.13: 7 estrategias de comprensión lectora y de escucha,
   en francés de Francia niveau C1 (essai réflexif, vouvoiement) con
   traducción española a la vista. Campos `.it` = francés (lengua de
   estudio), `.es` = español. Estrategia por posición: L1 = predict +
   quiz (lit/inf/crít) + V/F ; L2 = predict + ideas + intruso ; L3 =
   predict + secuencia + escucha. Temas rotados (8/7/7/7/7): meditazione ·
   spiritualità · qui e ora · relax fisico · relax mentale. Anclaje suave
   a los 12 escenarios del curso (concours, Sorbonne, meeting, séminaire,
   Cité des sciences, conférence, préfecture, radio, pub, débat, atelier
   d'écriture, soutenance). Sin religión concreta, sin belicismos.      */

export const FR_MIND_C1: Record<string, MindReading[]> = {
  "fr-cu-c1-01": [
    {
      id: "md-fr-c1-01-1", theme: "meditazione",
      title: "Synthétiser ses pensées", titleEs: "Sintetizar los pensamientos", minutes: 2,
      paragraphs: [
        { it: "Les pensées arrivent comme les documents d'un concours : quatre textes, quatre voix, et l'impression de devoir tout garder. La méditation propose un autre geste : observer chaque pensée, la reformuler avec vos propres mots intérieurs, puis la laisser partir. Vous n'êtes pas obligé de recopier ce que votre esprit dicte.", es: "Los pensamientos llegan como los documentos de un concurso: cuatro textos, cuatro voces y la impresión de tener que guardarlo todo. La meditación propone otro gesto: observar cada pensamiento, reformularlo con vuestras propias palabras interiores y luego dejarlo partir. No estáis obligados a copiar lo que dicta vuestra mente." },
        { it: "Synthétiser, disent les professeurs, c'est reconstruire un raisonnement sans plagier les auteurs. Il en va de même à l'intérieur : vous rassemblez ce qui compte, vous nommez l'idée essentielle, et le reste s'en va sans regret. Votre pensée, votre style : la formule du concours devient une formule de sagesse.", es: "Sintetizar, dicen los profesores, es reconstruir un razonamiento sin plagiar a los autores. Lo mismo ocurre en el interior: reunís lo que importa, nombráis la idea esencial y el resto se va sin pesar. Vuestro pensamiento, vuestro estilo: la fórmula del concurso se convierte en fórmula de sabiduría." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un método de estudio para exámenes", "Observar y reformular los propios pensamientos, como una síntesis interior", "Las reglas del plagio académico"],
        answer: 1,
        why: "El título une la síntesis con los pensamientos: apunta a la meditación como síntesis interior, no a técnicas de estudio.",
      },
      quiz: [
        { q: "À quoi les pensées sont-elles comparées ?", kind: "literal", options: ["Aux documents d'un concours", "Aux nuages d'orage", "Aux passagers d'un train"], answer: 0, why: "«Les pensées arrivent comme les documents d'un concours»: la comparación está literal en la primera frase." },
        { q: "Que faites-vous de chaque pensée observée ?", kind: "inferencial", options: ["Vous la recopiez mot à mot", "Vous la reformulez puis la laissez partir", "Vous la cachez dans un dossier"], answer: 1, why: "«La reformuler avec vos propres mots intérieurs, puis la laisser partir»: se infiere el gesto completo." },
        { q: "Quelle est l'idée maîtresse du texte ?", kind: "critica", options: ["La méditation est un concours intérieur que l'on doit gagner", "Observer, reformuler, laisser partir : une sagesse qui emprunte la formule du concours", "Il faut garder toutes ses pensées par honnêteté"], answer: 1, why: "El texto convierte «votre pensée, votre style» en fórmula de sabiduría: observar, reformular, dejar partir." },
      ],
      vf: [
        { text: "Vous êtes obligé de recopier ce que votre esprit dicte.", value: false, why: "«Vous n'êtes pas obligé de recopier»: la copia interior es justo lo que se suelta." },
        { text: "La formule du concours devient une formule de sagesse.", value: true, why: "Está literal en el cierre del segundo párrafo." },
        { text: "Synthétiser ses pensées, c'est tout garder sans trier.", value: false, why: "Se reúne lo que importa y el resto se va: hay selección, no acumulación." },
      ],
    },
    {
      id: "md-fr-c1-01-2", theme: "qui e ora",
      title: "Lire en pleine présence", titleEs: "Leer en plena presencia", minutes: 2,
      paragraphs: [
        { it: "Un document s'ouvre devant vous, et le monde se ferme : c'est cela, lire en pleine présence. La page a un poids, la lumière du bureau a une couleur, votre respiration a un rythme. Au lieu de survoler les lignes en pensant au résumé à produire, vous descendez dans le texte, phrase après phrase, comme on marche dans une ville inconnue.", es: "Un documento se abre ante vosotros y el mundo se cierra: eso es leer en plena presencia. La página tiene un peso, la luz del despacho tiene un color, vuestra respiración tiene un ritmo. En vez de sobrevolar las líneas pensando en el resumen que hay que producir, descendéis en el texto, frase a frase, como quien camina por una ciudad desconocida." },
        { it: "La synthèse attendra : elle viendra d'elle-même, nourrie de cette lecture lente. Pour l'instant, il y a un paragraphe, un souffle, un instant. Quand l'esprit saute vers la conclusion, ramenez-le au mot que vous lisez. La présence n'est pas un effort de plus : c'est une qualité d'attention, et elle se cultive comme une bonne habitude.", es: "La síntesis esperará: vendrá por sí sola, nutrida por esa lectura lenta. Por ahora hay un párrafo, un aliento, un instante. Cuando la mente salta hacia la conclusión, la devolvéis a la palabra que estáis leyendo. La presencia no es un esfuerzo más: es una cualidad de atención, y se cultiva como un buen hábito." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de lectura rápida", "Leer un documento con atención plena, sin correr hacia el resumen", "Cómo escribir una síntesis en dos horas"],
        answer: 1,
        why: "«Lire en pleine présence» apunta a la calidad de la atención al leer, no a la velocidad ni a la producción.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Lire en pleine présence : descendre dans le texte, phrase après phrase", "Produire la synthèse le plus vite possible", "Éviter les documents difficiles"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["La page a un poids, la lumière a une couleur", "Quand l'esprit saute vers la conclusion, ramenez-le au mot", "La présence est une qualité d'attention"],
        distractors: ["Il faut lire trois documents à la fois", "La respiration doit rester rapide", "La synthèse se rédige avant la lecture"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Un document s'ouvre devant vous, et le monde se ferme.",
          "Vous descendez dans le texte, phrase après phrase.",
          "La synthèse attendra : elle viendra d'elle-même.",
          "Un bon correcteur relit chaque copie en moins de dix minutes.",
          "Quand l'esprit saute vers la conclusion, ramenez-le au mot.",
        ],
        intruder: 3,
        why: "El corrector y sus diez minutos pertenecen al mundo del concurso, no a la experiencia de lectura presente.",
      },
    },
    {
      id: "md-fr-c1-01-3", theme: "relax fisico",
      title: "Le corps de l'épreuve", titleEs: "El cuerpo de la prueba", minutes: 3,
      paragraphs: [
        { it: "Trois heures d'écriture : l'épreuve se joue aussi dans le corps. Au bout d'une heure, l'épaule monte vers l'oreille, la main serre le stylo, la mâchoire suit. Rien de grave — simplement un corps qui croit qu'il faut se défendre. La première étape est de le remarquer, sans se reprocher rien.", es: "Tres horas de escritura: la prueba también se juega en el cuerpo. Al cabo de una hora, el hombro sube hacia la oreja, la mano aprieta el bolígrafo, la mandíbula sigue. Nada grave — simplemente un cuerpo que cree que hay que defenderse. El primer paso es advertirlo, sin reprocharse nada." },
        { it: "Puis, entre deux paragraphes, prenez trente secondes : posez le stylo, laissez tomber l'épaule, desserrez les doigts, respirez une fois lentement. Le corps redescend, la main se souvient qu'elle peut être légère, et la phrase suivante arrive plus nette. L'épreuve continue ; vous, vous restez habitable.", es: "Luego, entre dos párrafos, tomad treinta segundos: dejad el bolígrafo, dejad caer el hombro, aflojad los dedos, respirad una vez lentamente. El cuerpo baja, la mano recuerda que puede ser ligera y la frase siguiente llega más nítida. La prueba continúa; vosotros permanecéis habitables." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un entrenamiento de fuerza para opositores", "Soltar la tensión del cuerpo durante una prueba escrita larga", "La dieta ideal antes de un examen"],
        answer: 1,
        why: "«Le corps de l'épreuve» apunta a la tensión física del examen largo, no al entrenamiento ni a la comida.",
      },
      sequence: {
        instr: "Ordena los pasos según el texto:",
        events: ["Vous remarquez que l'épaule monte vers l'oreille", "Vous posez le stylo entre deux paragraphes", "Vous laissez tomber l'épaule et desserrez les doigts", "Vous respirez une fois lentement", "La phrase suivante arrive plus nette"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Bon courage pour votre épreuve. Avant de commencer, installez votre corps : les deux pieds au sol, l'épaule basse, la main légère sur le stylo. Respirez une fois, longuement. À chaque heure, vous poserez le stylo trente secondes, et vous laisserez l'épaule redescendre. Le corps reste calme, l'esprit reste clair, la copie avance.",
        questions: [
          { q: "Où posez-vous vos pieds ?", kind: "literal", options: ["Au sol", "Sur la chaise", "Sur la table"], answer: 0, why: "«Les deux pieds au sol» está literal en el audio." },
          { q: "Combien de temps dure la pause de chaque heure ?", kind: "literal", options: ["Trente secondes", "Cinq minutes", "Une heure"], answer: 0, why: "«Vous poserez le stylo trente secondes» cada hora." },
          { q: "Que fait la main pendant la pause ?", kind: "inferencial", options: ["Elle se repose, le stylo posé", "Elle écrit plus vite", "Elle serre le stylo"], answer: 0, why: "Se deja el bolígrafo y la mano descansa: se infiere del gesto." },
          { q: "Quel est le but de ces pauses ?", kind: "inferencial", options: ["Garder le corps calme et l'esprit clair", "Finir la copie plus vite", "Éviter de relire"], answer: 0, why: "«Le corps reste calme, l'esprit reste clair»: el propósito cierra el audio." },
        ],
      },
    },
  ],

  "fr-cu-c1-02": [
    {
      id: "md-fr-c1-02-1", theme: "spiritualità",
      title: "Penser contre soi-même", titleEs: "Pensar contra uno mismo", minutes: 3,
      paragraphs: [
        { it: "La dissertation apprend un geste étrange et spirituel : donner la parole à la voix qui vous contredit. Thèse, antithèse : l'exercice vous oblige à habiter l'argument adverse, à l'écrire mieux encore que son propriétaire. C'est une ascèse de l'ego — une manière laïque de prier, si l'on veut, en écoutant ce qu'on ne veut pas entendre.", es: "La dissertation enseña un gesto extraño y espiritual: dar la palabra a la voz que os contradice. Tesis, antítesis: el ejercicio obliga a habitar el argumento contrario, a escribirlo incluso mejor que su propietario. Es una ascesis del ego — una manera laica de rezar, si queréis, escuchando lo que no se quiere oír." },
        { it: "Les traditions de sagesse disaient déjà cela : qui n'a jamais défendu une thèse à laquelle il ne croyait pas n'a jamais vraiment écouté. Dépasser le débat, c'est peut-être cela, la synthèse : un endroit en vous où le pour et le contre se tiennent la main. Ce jour-là, vous ne gagnez pas la discussion ; vous devenez plus vaste.", es: "Las tradiciones de sabiduría ya lo decían: quien nunca ha defendido una tesis en la que no creía nunca ha escuchado de verdad. Superar el debate quizá sea eso, la síntesis: un lugar en vosotros donde el pro y el contra se dan la mano. Ese día no ganáis la discusión; os volvéis más vastos." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo ganar un debate universitario", "Habitar el argumento contrario como práctica espiritual laica", "La historia de las religiones en Francia"],
        answer: 1,
        why: "«Penser contre soi-même» apunta a la dialéctica interior como escucha, no a ganar ni a historia religiosa.",
      },
      quiz: [
        { q: "À quoi la dissertation vous oblige-t-elle ?", kind: "literal", options: ["Habiter l'argument adverse", "Gagner le débat à tout prix", "Réciter la thèse du professeur"], answer: 0, why: "«L'exercice vous oblige à habiter l'argument adverse»: literal en el primer párrafo." },
        { q: "Qu'est-ce que la synthèse, au sens profond du texte ?", kind: "inferencial", options: ["Un compromis mou", "Un lieu intérieur où le pour et le contre se tiennent la main", "Un résumé de la thèse"], answer: 1, why: "Se infiere de la imagen del segundo párrafo: la síntesis como lugar interior reconciliado." },
        { q: "« Vous devenez plus vaste » signifie…", kind: "critica", options: ["Que l'écoute élargit la personne au-delà de son opinion", "Que l'on gagne enfin toutes les discussions", "Que la synthèse rallonge la copie"], answer: 0, why: "La idea crítica: escuchar al contrario no da la razón, da amplitud." },
      ],
      vf: [
        { text: "L'exercice demande d'écrire l'argument adverse mieux que son propriétaire.", value: true, why: "«À l'écrire mieux encore que son propriétaire»: literal." },
        { text: "Le texte présente cette pratique comme une prière religieuse obligatoire.", value: false, why: "Habla de «une manière laïque de prier»: imagen laica, sin religión concreta." },
        { text: "Le jour de la synthèse, vous gagnez la discussion.", value: false, why: "«Vous ne gagnez pas la discussion ; vous devenez plus vaste»: no se gana, se crece." },
      ],
    },
    {
      id: "md-fr-c1-02-2", theme: "relax mentale",
      title: "L'esprit en trois mouvements", titleEs: "La mente en tres movimientos", minutes: 2,
      paragraphs: [
        { it: "Votre esprit, lui aussi, écrit des dissertations sans fin : une thèse s'installe le matin, l'antithèse débarque à midi, et la synthèse ne vient jamais. Le relax mental commence quand vous cessez de trancher. Vous laissez les deux voix exposer leur dossier, sans leur donner la plume ni le marteau.", es: "Vuestra mente también escribe dissertations sin fin: una tesis se instala por la mañana, la antítesis llega al mediodía y la síntesis no llega nunca. La relajación mental empieza cuando dejáis de decidir. Dejáis que las dos voces expongan su expediente, sin darles ni la pluma ni el martillo." },
        { it: "Une pensée qui plaide, une pensée qui conteste : tout ce monde peut défiler sans que vous soyez épuisé, pourvu que vous restiez le président de la séance — calme, impartial, silencieux. Le tribunal siège, les arguments passent, et vous, vous respirez. La séance est ouverte ; la paix aussi.", es: "Un pensamiento que alegue, un pensamiento que impugne: todo ese mundo puede desfilar sin que os agote, con tal de que permanezcáis como el presidente de la sesión — tranquilo, imparcial, silencioso. El tribunal se reúne, los argumentos pasan y vosotros respiráis. La sesión queda abierta; también la paz." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de derecho procesal", "Dejar discutir a los pensamientos sin decidir, como presidente sereno", "Cómo redactar una síntesis perfecta"],
        answer: 1,
        why: "La metáfora del tribunal interior apunta a la relajación mental, no al derecho ni a la técnica de escritura.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Laisser les voix intérieures exposer leur dossier, sans trancher ni s'épuiser", "Choisir la thèse du matin et s'y tenir", "Évacuer toutes les pensées pour penser moins"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Une thèse s'installe le matin, l'antithèse débarque à midi", "Vous restez le président de la séance", "Le tribunal siège, les arguments passent, et vous respirez"],
        distractors: ["La synthèse doit être rendue avant midi", "Le président tape du marteau chaque minute", "L'antithèse est interdite dans la tête"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Une thèse s'installe le matin, l'antithèse débarque à midi.",
          "Vous laissez les deux voix exposer leur dossier.",
          "Vous restez le président de la séance, calme et silencieux.",
          "La Sorbonne fut fondée au treizième siècle.",
          "Le tribunal siège, les arguments passent, et vous respirez.",
        ],
        intruder: 3,
        why: "El dato histórico de la fundación de la Sorbona es ajeno al tribunal interior: es el intruso.",
      },
    },
    {
      id: "md-fr-c1-02-3", theme: "meditazione",
      title: "Trois respirations avant l'introduction", titleEs: "Tres respiraciones antes de la introducción", minutes: 2,
      paragraphs: [
        { it: "L'introduction est le moment le plus redouté de la dissertation : la première phrase engage tout. Avant d'écrire « Nous verrons que… », posez trois respirations. Inspirez par le nez, soufflez lentement, laissez la page blanche être une page blanche, pas un ennemi. À la troisième expiration, la main sait déjà où aller.", es: "La introducción es el momento más temido de la dissertation: la primera frase compromete todo. Antes de escribir «Nous verrons que…», poned tres respiraciones. Inspirad por la nariz, soltad lentamente, dejad que la página en blanco sea una página en blanco, no un enemigo. A la tercera espiración, la mano ya sabe adónde ir." },
        { it: "La méditation ne vous donnera pas la problématique : elle vous donnera la main ferme pour la chercher. Trois respirations, cela ne prend pas trente secondes, et cela change la qualité de l'attention qui va se poser sur les mots. Les grands rédacteurs le savent : on écrit comme on respire.", es: "La meditación no os dará la problemática: os dará la mano firme para buscarla. Tres respiraciones no llevan ni treinta segundos y cambian la calidad de la atención que va a posarse sobre las palabras. Los grandes redactores lo saben: se escribe como se respira." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso de escritura creativa", "Calmar el cuerpo con tres respiraciones antes de escribir la introducción", "Reglas de puntuación francesa"],
        answer: 1,
        why: "El título une la respiración con el momento de la introducción: apunta al gesto de calma previo.",
      },
      sequence: {
        instr: "Ordena los pasos según el texto:",
        events: ["Vous inspirez par le nez", "Vous soufflez lentement", "Vous laissez la page blanche être une page blanche", "Vous posez la première phrase de l'introduction", "La main sait déjà où aller"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Avant de commencer votre copie, installons le souffle. Vous êtes assis, le dos droit, la page blanche devant vous. Inspirez par le nez, profondément. Soufflez lentement, en deux temps. Encore une fois : inspirez, soufflez. Maintenant, relisez la consigne, et écrivez la première phrase comme on pose une pierre : calmement, exactement.",
        questions: [
          { q: "Que faites-vous avant de relire la consigne ?", kind: "literal", options: ["Deux respirations complètes", "Une promenade", "Un café serré"], answer: 0, why: "«Encore une fois : inspirez, soufflez»: dos respiraciones en total." },
          { q: "Comment écrivez-vous la première phrase ?", kind: "literal", options: ["Comme on pose une pierre", "Le plus vite possible", "En fermant les yeux"], answer: 0, why: "«Comme on pose une pierre : calmement, exactement»." },
          { q: "Pourquoi le dos est-il droit ?", kind: "inferencial", options: ["Pour respirer et écrire sans fatigue", "Pour paraître sérieux au correcteur", "Pour voir plus loin"], answer: 0, why: "La postura sirve al aliento y a la escritura sin tensión: se infiere del conjunto." },
          { q: "Quel état d'esprit cherche l'audio ?", kind: "inferencial", options: ["Le calme et l'exactitude", "L'urgence et la vitesse", "La compétition avec les autres candidats"], answer: 0, why: "«Calmement, exactement»: el audio busca calma y precisión, no prisa." },
        ],
      },
    },
  ],

  "fr-cu-c1-03": [
    {
      id: "md-fr-c1-03-1", theme: "qui e ora",
      title: "Dans la salle, ce soir", titleEs: "En la sala, esta noche", minutes: 2,
      paragraphs: [
        { it: "Ce soir, la salle est pleine, quelqu'un parle, et vous êtes là — vraiment là. Pas dans le clip que l'on tournera, pas dans le compte rendu de demain, pas dans votre propre commentaire intérieur. La voix monte, s'appuie sur une anaphore, et cent personnes respirent à peu près ensemble.", es: "Esta noche la sala está llena, alguien habla y estáis ahí — de verdad ahí. No en el clip que se grabará, no en la crónica de mañana, no en vuestro propio comentario interior. La voz sube, se apoya en una anáfora y cien personas respiran casi al unísono." },
        { it: "Être dans la salle, c'est une forme de fidélité : au présent, aux autres, à la parole qui se dépense maintenant. Le discours finira, les applaudissements aussi ; ce qui reste, c'est cette minute commune que rien ne rembobine. Vous n'êtes pas en retard sur votre vie : vous assistez à l'une de ses scènes.", es: "Estar en la sala es una forma de fidelidad: al presente, a los demás, a la palabra que se gasta ahora. El discurso terminará, los aplausos también; lo que queda es este minuto común que nada rebobina. No vais tarde con vuestra vida: asistís a una de sus escenas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo organizar un mitin político", "Estar plenamente presente en la sala mientras alguien habla", "La historia de los discursos de campaña"],
        answer: 1,
        why: "«Dans la salle, ce soir» apunta a la presencia en el momento, no a la organización ni a la historia.",
      },
      quiz: [
        { q: "Où n'êtes-vous PAS, selon le texte ?", kind: "literal", options: ["Dans le clip que l'on tournera", "Dans la salle", "Dans le présent"], answer: 0, why: "«Pas dans le clip que l'on tournera»: la lista de no-lugares es literal." },
        { q: "Que suggère le fait que cent personnes respirent ensemble ?", kind: "inferencial", options: ["Une attention partagée, suspendue au même instant", "Une salle endormie", "Un exercice de gymnastique collective"], answer: 0, why: "«Cent personnes respirent à peu près ensemble»: se infiere la atención colectiva suspendida, no se dice literalmente." },
        { q: "« Vous n'êtes pas en retard sur votre vie » veut dire…", kind: "critica", options: ["Le présent où vous êtes est déjà une scène de votre vie", "Il faut courir pour rattraper le temps perdu", "Les meetings rendent ponctuels"], answer: 0, why: "La idea crítica: el presente compartido ya es la vida, no un ensayo de otra cosa." },
      ],
      vf: [
        { text: "Le discours finira, les applaudissements aussi.", value: true, why: "Literal en el segundo párrafo." },
        { text: "La minute commune peut être rembobinée.", value: false, why: "«Que rien ne rembobine»: el minuto común no se puede rebobinar." },
        { text: "Être dans la salle est une forme de fidélité au présent.", value: true, why: "«C'est une forme de fidélité : au présent, aux autres»." },
      ],
    },
    {
      id: "md-fr-c1-03-2", theme: "relax fisico",
      title: "La voix qui porte", titleEs: "La voz que llega", minutes: 3,
      paragraphs: [
        { it: "La voix ne part pas de la gorge : elle part du sol. Debout, pieds écartés, le poids réparti, le diaphragme libre — c'est là que naît une voix qui porte jusqu'au dernier rang. Avant de prendre la parole en public, trois gestes suffisent : déverrouiller les genoux, laisser tomber les épaules, sentir le souffle descendre.", es: "La voz no sale de la garganta: sale del suelo. De pie, pies separados, el peso repartido, el diafragma libre — ahí nace una voz que llega hasta la última fila. Antes de hablar en público bastan tres gestos: desbloquear las rodillas, dejar caer los hombros, sentir que el aliento baja." },
        { it: "Puis, sur la première phrase, ne poussez pas : posez. Une voix posée descend dans la salle comme une pierre dans l'eau, sans effort visible. Si le trac serre la gorge, respirez une fois, relâchez la mâchoire, et recommencez à parler sur le souffle. Le corps du tribun est un instrument : accordez-le avant de jouer.", es: "Luego, en la primera frase, no empujéis: posad. Una voz posada baja en la sala como una piedra en el agua, sin esfuerzo visible. Si el nervio aprieta la garganta, respirad una vez, soltad la mandíbula y volved a hablar sobre el aliento. El cuerpo del orador es un instrumento: afinadlo antes de tocar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cursos de canto lírico", "Preparar el cuerpo y la voz antes de hablar en público", "Cómo instalar altavoces en un local"],
        answer: 1,
        why: "«La voix qui porte» trata del apoyo corporal de la voz hablada, no del canto ni del equipo técnico.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["La voix naît du corps posé : pieds, épaules, souffle", "Crier pour se faire entendre du dernier rang", "Lire ses notes à voix basse"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["La voix ne part pas de la gorge : elle part du sol", "Ne poussez pas : posez la première phrase", "Le corps du tribun est un instrument à accorder"],
        distractors: ["Le micro est obligatoire en salle", "Le trac disparaît avec l'expérience", "Les gestes sont interdits sur scène"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "La voix part du sol, pas de la gorge.",
          "Vous déverrouillez les genoux et laissez tomber les épaules.",
          "Une voix posée descend dans la salle comme une pierre dans l'eau.",
          "Les tribunes des stades accueillent soixante mille spectateurs.",
          "Si le trac serre la gorge, vous relâchez la mâchoire.",
        ],
        intruder: 3,
        why: "La capacidad de los estadios es un dato de recinto, ajeno a la preparación vocal: es el intruso.",
      },
    },
    {
      id: "md-fr-c1-03-3", theme: "spiritualità",
      title: "Servir une cause", titleEs: "Servir una causa", minutes: 3,
      paragraphs: [
        { it: "S'engager pour une cause commence par un paradoxe : oublier un peu soi-même. La parole publique donne de la voix, et la voix donne du pouvoir ; la question spirituelle est de savoir pour qui l'on parle. Celui qui parle pour sa propre gloire fatigue vite la salle ; celui qui sert une cause plus vaste que lui tient deux heures debout.", es: "Comprometerse por una causa empieza por una paradoja: olvidarse un poco de uno mismo. La palabra pública da voz, y la voz da poder; la cuestión espiritual es saber por quién se habla. Quien habla por su propia gloria cansa pronto a la sala; quien sirve una causa más vasta que él aguanta dos horas de pie." },
        { it: "Les grandes traditions diraient : fais de ta parole un service. Vous n'êtes pas obligé de croire au ciel pour entendre cela : il suffit d'avoir vu un soir un orateur parler pour les autres, et la salle se taire. L'élan qui porte une vie ne se fabrique pas ; il se découvre, souvent, la première fois qu'on défend quelqu'un.", es: "Las grandes tradiciones dirían: haz de tu palabra un servicio. No hace falta creer en el cielo para entenderlo: basta haber visto una noche a un orador hablar por los demás y a la sala callar. El impulso que sostiene una vida no se fabrica; se descubre, a menudo, la primera vez que se defiende a alguien." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Retórica para ganar elecciones", "Hablar como servicio a algo más grande que el propio ego", "La biografía de un orador célebre"],
        answer: 1,
        why: "«Servir une cause» apunta al sentido del compromiso, no a la técnica ni a la biografía.",
      },
      sequence: {
        instr: "Ordena los pasos según el texto:",
        events: ["Vous vous engagez pour une cause", "Vous vous demandez pour qui vous parlez", "Vous oubliez un peu vous-même", "Vous parlez pour les autres un soir", "La salle se tait et l'élan se découvre"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Avant de prendre la parole pour une cause, respirez une fois. Demandez-vous tranquillement : pour qui vais-je parler ce soir ? Si la réponse est « pour les autres », la voix viendra du ventre et non de la gorge. Vous n'êtes pas obligé d'être brillant : vous êtes chargé de servir. La salle sentira la différence, mot après mot.",
        questions: [
          { q: "Que demandez-vous tranquillement avant de parler ?", kind: "literal", options: ["Pour qui je vais parler", "Combien je serai payé", "Où est le micro"], answer: 0, why: "«Pour qui vais-je parler ce soir ?» está literal en el audio." },
          { q: "D'où viendra la voix si la réponse est « pour les autres » ?", kind: "literal", options: ["Du ventre", "De la gorge", "Des notes"], answer: 0, why: "«La voix viendra du ventre et non de la gorge»." },
          { q: "Que n'êtes-vous pas obligé d'être ?", kind: "inferencial", options: ["Brillant", "À l'heure", "Silencieux"], answer: 0, why: "«Vous n'êtes pas obligé d'être brillant : vous êtes chargé de servir»." },
          { q: "Que sentira la salle, selon l'audio ?", kind: "inferencial", options: ["La différence entre briller et servir", "L'odeur de la salle", "Le prix des places"], answer: 0, why: "«La salle sentira la différence»: servir en vez de brillar se nota." },
        ],
      },
    },
  ],

  "fr-cu-c1-04": [
    {
      id: "md-fr-c1-04-1", theme: "relax mentale",
      title: "Douter avec calme", titleEs: "Dudar con calma", minutes: 2,
      paragraphs: [
        { it: "À l'intérieur de chacun, un journal titre chaque matin : « tu serais incapable », « tu vas échouer ». Ce conditionnel intérieur mérite le même traitement que celui de la presse : on le lit, on le remercie, et on ne le croit pas sur parole. Le doute n'est pas votre ennemi ; le doute pressé, oui.", es: "En el interior de cada uno, un periódico titula cada mañana: «serías incapaz», «vas a fracasar». Ese condicional interior merece el mismo trato que el de la prensa: se lee, se agradece y no se cree a pies juntillas. La duda no es vuestra enemiga; la duda apurada, sí." },
        { it: "Le relax mental, ici, ressemble à une échelle de probabilité : il se peut que cette pensée soit vraie, il est peu probable qu'elle le soit tout à fait, il est exclu qu'elle décide de votre journée. Vous dosez, comme un rédacteur prudent. La certitude intérieure n'est pas de ne jamais douter ; c'est de douter à la bonne vitesse.", es: "La relajación mental, aquí, se parece a una escala de probabilidad: puede que ese pensamiento sea verdad, es poco probable que lo sea del todo, está excluido que decida vuestro día. Dosis, como un redactor prudente. La certeza interior no consiste en no dudar nunca; consiste en dudar a la velocidad correcta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Las normas deontológicas de la prensa", "Tratar los pensamientos catastrofistas con la prudencia de un redactor", "Un test de probabilidad matemática"],
        answer: 1,
        why: "El texto aplica el condicional periodístico a la voz interior: dosificar la propia certeza.",
      },
      quiz: [
        { q: "Que fait-on du conditionnel intérieur ?", kind: "literal", options: ["On le lit, on le remercie, on ne le croit pas sur parole", "On le supprime aussitôt", "On le publie au journal"], answer: 0, why: "«On le lit, on le remercie, et on ne le croit pas sur parole»: literal." },
        { q: "Quel est l'ennemi, selon le texte ?", kind: "inferencial", options: ["Le doute pressé, pas le doute lui-même", "Tout doute sans exception", "Les journaux du matin"], answer: 0, why: "«Le doute n'est pas votre ennemi ; le doute pressé, oui»: el enemigo es la prisa, no la duda." },
        { q: "Quelle est la certitude intérieure, selon le texte ?", kind: "critica", options: ["Douter à la bonne vitesse", "Ne jamais douter de rien", "Douter le plus vite possible"], answer: 0, why: "«C'est de douter à la bonne vitesse»: dudar a la velocidad correcta es la certeza sabia." },
      ],
      vf: [
        { text: "Le doute est votre ennemi.", value: false, why: "«Le doute n'est pas votre ennemi»: lo es la duda apurada." },
        { text: "Il est exclu que la pensée décide de votre journée.", value: true, why: "«Il est exclu qu'elle décide de votre journée»: literal en la escala interior." },
        { text: "Vous dosez votre certitude comme un rédacteur prudent.", value: true, why: "«Vous dosez, comme un rédacteur prudent»: literal." },
      ],
    },
    {
      id: "md-fr-c1-04-2", theme: "meditazione",
      title: "Observer sans affirmer", titleEs: "Observar sin afirmar", minutes: 2,
      paragraphs: [
        { it: "La méditation est une école de non-affirmation. Assis, vous observez : une sensation, une pensée, un bruit. La tentation est de conclure aussitôt — « c'est du stress », « c'est de la fatigue ». L'exercice, c'est de rester à la description : il y a une sensation, voilà tout. Le subjonctif intérieur, si l'on ose dire, au lieu de l'indicatif tranchant.", es: "La meditación es una escuela de no afirmación. Sentados, observáis: una sensación, un pensamiento, un ruido. La tentación es concluir enseguida — «es estrés», «es cansancio». El ejercicio consiste en quedarse en la descripción: hay una sensación, eso es todo. El subjuntivo interior, si se me permite decirlo, en lugar del indicativo tajante." },
        { it: "Peu à peu, cette prudence devient une douceur : vous ne vous traitez plus comme un dossier à trancher. « Il semble que… », « il se peut que… » — la langue de l'incertain, appliquée à soi-même, laisse respirer. Observer sans affirmer, c'est faire de sa propre vie un texte que l'on respecte assez pour ne pas le résumer trop vite.", es: "Poco a poco, esa prudencia se vuelve una dulzura: ya no os tratáis como un expediente que hay que resolver. «Il semble que…», «il se peut que…» — la lengua de lo incierto, aplicada a uno mismo, deja respirar. Observar sin afirmar es hacer de la propia vida un texto al que se respeta lo bastante como para no resumirlo demasiado pronto." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un tratado de gramática del subjuntivo", "Observar las propias sensaciones sin etiquetarlas demasiado rápido", "Cómo redactar informes psicológicos"],
        answer: 1,
        why: "El texto usa la gramática modal como metáfora de la observación amable de uno mismo.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Observer sans affirmer : rester à la description pour ne pas se résumer trop vite", "Étiqueter chaque sensation dès qu'elle apparaît", "Vider son esprit de toute pensée"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["La tentation est de conclure aussitôt", "Vous ne vous traitez plus comme un dossier à trancher", "La langue de l'incertain laisse respirer"],
        distractors: ["Le subjonctif est réservé aux grammairiens", "Il faut juger chaque sensation sévèrement", "Les sensations doivent être corrigées"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Assis, vous observez : une sensation, une pensée, un bruit.",
          "L'exercice, c'est de rester à la description.",
          "« Il semble que… », « il se peut que… » — la langue de l'incertain laisse respirer.",
          "Le dossier du séminaire doit être déposé au secrétariat avant midi.",
          "Observer sans affirmer, c'est respecter sa propre vie.",
        ],
        intruder: 3,
        why: "El depósito del expediente en el secretariado es un trámite administrativo ajeno a la observación interior: es el intruso.",
      },
    },
    {
      id: "md-fr-c1-04-3", theme: "qui e ora",
      title: "La minute des titres", titleEs: "El minuto de los titulares", minutes: 3,
      paragraphs: [
        { it: "Ouvrir un journal le matin peut devenir un acte de pleine présence — ou une panne de présence. La différence tient à un détail : est-ce vous qui lisez les titres, ou les titres qui vous lisent ? Prenez une minute, un seul titre, et regardez-le comme on regarde un paysage : « le ministre serait… », « la réforme pourrait… ». Tout ce conditionnel respire ; vous aussi, vous pouvez.", es: "Abrir el periódico por la mañana puede convertirse en un acto de plena presencia — o en una avería de la presencia. La diferencia está en un detalle: ¿sois vosotros quienes leéis los titulares, o los titulares quienes os leen? Tomad un minuto, un solo titular, y miradlo como se mira un paisaje: «el ministro estaría…», «la reforma podría…». Todo ese condicional respira; vosotros también podéis." },
        { it: "Puis fermez la page, et revenez à la table, à la tasse, à la lumière. L'actualité continuera sans vous pendant cinq minutes ; votre matin, lui, ne reviendra pas. Être informé n'interdit pas d'être présent : c'est même la seule manière de lire vraiment — un titre à la fois, comme on marche d'un pas.", es: "Luego cerrad la página y volved a la mesa, a la taza, a la luz. La actualidad seguirá sin vosotros durante cinco minutos; vuestra mañana, en cambio, no volverá. Estar informado no impide estar presente: es incluso la única manera de leer de verdad — un titular cada vez, como se camina dando pasos." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo redactar titulares de prensa", "Leer las noticias con presencia, un titular a la vez", "Las ventajas de no leer nunca el periódico"],
        answer: 1,
        why: "«La minute des titres» propone presencia al leer, ni redacción de titulares ni abstinencia.",
      },
      sequence: {
        instr: "Ordena los pasos según el texto:",
        events: ["Vous ouvrez le journal et choisissez un seul titre", "Vous regardez le conditionnel du titre comme un paysage", "Vous fermez la page", "Vous revenez à la table, à la tasse, à la lumière", "Vous laissez l'actualité continuer sans vous cinq minutes"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Ce matin, un seul titre, une seule minute. Posez le journal à plat, respirez une fois. Lisez ce titre lentement, mot après mot, sans juger. Remarquez le conditionnel : quelqu'un rapporte, personne n'affirme. Soufflez. Refermez le journal. La tasse est encore chaude, la lumière est revenue, et votre matin vous attend.",
        questions: [
          { q: "Combien de temps dure l'exercice du titre ?", kind: "literal", options: ["Une minute", "Une heure", "Toute la matinée"], answer: 0, why: "«Un seul titre, une seule minute»." },
          { q: "Que remarquez-vous dans le titre ?", kind: "literal", options: ["Le conditionnel", "Le futur", "L'imparfait"], answer: 0, why: "«Remarquez le conditionnel»." },
          { q: "Pourquoi souffler avant de refermer ?", kind: "inferencial", options: ["Pour marquer la fin de la lecture et revenir au présent", "Parce que le journal sent le parfum", "Pour lire plus vite ensuite"], answer: 0, why: "El soplo cierra la lectura y devuelve al presente: se infiere del gesto." },
          { q: "« Votre matin vous attend » suggère…", kind: "inferencial", options: ["Le présent de la matinée compte plus que le flot d'informations", "Vous êtes en retard", "Le journal doit être relu"], answer: 0, why: "La mañana espera: el presente propio importa más que el flujo de titulares." },
        ],
      },
    },
  ],

  "fr-cu-c1-05": [
    {
      id: "md-fr-c1-05-1", theme: "relax fisico",
      title: "Les mains du médiateur", titleEs: "Las manos del mediador", minutes: 3,
      paragraphs: [
        { it: "Devant un public familial, le médiateur a deux alliés silencieux : ses mains. Posées, ouvertes, elles disent que la science n'a rien à cacher. Quand on explique l'évaporation, une main peut montrer la flaque, l'autre la vapeur ; le corps devient le schéma, et le public suit sans effort.", es: "Ante un público familiar, el mediador tiene dos aliados silenciosos: sus manos. Posadas, abiertas, dicen que la ciencia no tiene nada que esconder. Cuando se explica la evaporación, una mano puede mostrar el charco, la otra el vapor; el cuerpo se vuelve el esquema y el público sigue sin esfuerzo." },
        { it: "Avant la conférence, préparez-les comme un instrumentiste : secouez doucement les poignets, ouvrez les paumes, laissez les bras peser le long du corps. Les mains crispées crispent la voix ; les mains libres libèrent la phrase. Et si le trac arrive, une paume ouverte sur la table suffit à rappeler au corps qu'il est chez lui.", es: "Antes de la conferencia, preparadlas como un instrumentista: sacudid suavemente las muñecas, abrid las palmas, dejad que los brazos pesen a lo largo del cuerpo. Las manos crispadas crispan la voz; las manos libres liberan la frase. Y si llega el nervio, una palma abierta sobre la mesa basta para recordar al cuerpo que está en casa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La anatomía de la mano humana", "Preparar y usar las manos al hablar en público", "Cómo dibujar esquemas en una pizarra"],
        answer: 1,
        why: "«Les mains du médiateur» trata del gesto del presentador, no de anatomía ni de pizarra.",
      },
      quiz: [
        { q: "Que disent les mains posées et ouvertes du médiateur ?", kind: "literal", options: ["Que la science n'a rien à cacher", "Qu'il est fatigué", "Que la conférence est terminée"], answer: 0, why: "«Posées, ouvertes, elles disent que la science n'a rien à cacher»: literal." },
        { q: "Pourquoi le corps devient-il « le schéma » ?", kind: "inferencial", options: ["Le médiateur dessine sur son torse", "Une main montre la flaque, l'autre la vapeur : le geste illustre l'explication", "Le public apporte son propre schéma"], answer: 1, why: "«Une main peut montrer la flaque, l'autre la vapeur»: se infiere que el gesto hace de esquema." },
        { q: "Comment préparer ses mains avant la conférence, selon le texte ?", kind: "critica", options: ["Comme un instrumentiste : poignets secoués, paumes ouvertes, bras qui pèsent", "En les cachant dans les poches", "En les serrant très fort pour se concentrer"], answer: 0, why: "«Préparez-les comme un instrumentiste»: la preparación corporal del gesto es la idea." },
      ],
      vf: [
        { text: "Les mains crispées crispent la voix.", value: true, why: "«Les mains crispées crispent la voix»: el gesto tenso tensa la voz, literal." },
        { text: "Si le trac arrive, il faut cacher les mains sous la table.", value: false, why: "«Une paume ouverte sur la table suffit»: se muestra la palma, no se esconde." },
        { text: "Les mains libres libèrent la phrase.", value: true, why: "«Les mains libres libèrent la phrase»: literal." },
      ],
    },
    {
      id: "md-fr-c1-05-2", theme: "spiritualità",
      title: "L'émerveillement", titleEs: "El asombro", minutes: 3,
      paragraphs: [
        { it: "En 1686, Fontenelle expliquait les mondes à une marquise, sous forme de conversations galantes : la science y était un émerveillement de salon. Cet émerveillement n'a pas vieilli. Levez les yeux un soir sans lune : la même question qu'au dix-septième siècle se pose, tranquille, et aucune réponse ne l'épuise.", es: "En 1686, Fontenelle explicaba los mundos a una marquesa en forma de conversaciones galantes: la ciencia era allí un asombro de salón. Ese asombro no ha envejecido. Alzad los ojos una noche sin luna: la misma pregunta que en el siglo diecisiete se plantea, tranquila, y ninguna respuesta la agota." },
        { it: "Les savants les plus rigoureux le confessent : la précision de la mesure n'enlève rien à l'étonnement, elle l'aiguise. L'émerveillement est la forme la plus ancienne de spiritualité laïque — être plus petit que ce que l'on regarde, et heureux de l'être. Nul besoin de doctrine : un ciel, une question, et le silence émerveillé qui suit.", es: "Los sabios más rigurosos lo confiesan: la precisión de la medida no quita nada al asombro, lo afila. El asombro es la forma más antigua de espiritualidad laica — ser más pequeño que lo que se mira, y feliz de serlo. No hace falta doctrina: un cielo, una pregunta y el silencio maravillado que sigue." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La biografía de Fontenelle", "El asombro ante el mundo como espiritualidad laica", "Un curso de astronomía práctica"],
        answer: 1,
        why: "«L'émerveillement» apunta al asombro contemplativo, con Fontenelle solo como anécdota inicial.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["L'émerveillement : une spiritualité laïque, être plus petit que ce que l'on regarde", "Fontenelle déconseillait de regarder le ciel la nuit", "La précision scientifique finit par tuer l'étonnement"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Fontenelle expliquait les mondes à une marquise", "La précision de la mesure aiguise l'étonnement", "Nul besoin de doctrine : un ciel, une question, un silence"],
        distractors: ["La lune pleine est nécessaire à l'émerveillement", "Les savants nient tout étonnement", "Le dix-septième siècle détestait les questions"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "En 1686, Fontenelle expliquait les mondes à une marquise.",
          "Levez les yeux un soir sans lune : la même question se pose, tranquille.",
          "La précision de la mesure n'enlève rien à l'étonnement.",
          "L'entrée de la Cité des sciences coûte douze euros.",
          "Nul besoin de doctrine : un ciel, une question, un silence émerveillé.",
        ],
        intruder: 3,
        why: "El precio de la entrada es un dato de logística del museo, ajeno al asombro contemplativo del texto: es el intruso.",
      },
    },
    {
      id: "md-fr-c1-05-3", theme: "relax mentale",
      title: "Nommer pour apaiser", titleEs: "Nombrar para calmar", minutes: 2,
      paragraphs: [
        { it: "Les émotions ressemblent aux termes techniques : tant qu'elles ne sont pas nommées, elles encombrent. La méditation laïque reprend la règle du médiateur scientifique : définir une fois, en pleine lumière, puis réutiliser tranquillement. « Voici de l'anxiété » — et déjà l'anxiété perd un peu de son épaisseur.", es: "Las emociones se parecen a los términos técnicos: mientras no se nombran, estorban. La meditación laica retoma la regla del mediador científico: definir una vez, con toda claridad, y luego reutilizar con calma. «He aquí ansiedad» — y ya la ansiedad pierde algo de su espesor." },
        { it: "Nommer n'est pas juger. « De la fatigue », « de la peur », « de la joie » : le mot posé, le mental se range, comme un public qui connaît enfin le plan de la conférence. Les balises ne suppriment pas le voyage émotionnel ; elles l'éclairent. Et ce qui est éclairé fait presque toujours moins peur.", es: "Nombrar no es juzgar. «Cansancio», «miedo», «alegría»: la palabra posada, la mente se ordena, como un público que por fin conoce el plan de la conferencia. Las balizas no suprimen el viaje emocional; lo iluminan. Y lo que está iluminado casi siempre da menos miedo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un diccionario de emociones francesas", "Nombrar las emociones con calma, como balizas que iluminan", "Cómo fingir emociones en el trabajo"],
        answer: 1,
        why: "«Nommer pour apaiser» apunta al efecto calmante del nombre justo, no al léxico ni a la simulación.",
      },
      sequence: {
        instr: "Ordena los pasos según el texto:",
        events: ["Une émotion non nommée encombre le mental", "Vous la définissez une fois, en pleine lumière", "Vous réutilisez tranquillement le mot posé", "Le mental se range, comme un public qui connaît le plan", "Ce qui est éclairé fait presque toujours moins peur"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Le soir, avant de dormir, choisissez une émotion de la journée. Nommez-la une seule fois, à voix basse : de la fatigue, de la joie, un peu de peur. Saluez-la comme une connaissance, sans la juger. Puis laissez-la passer. Le mot posé, la chambre paraît plus calme, et vous pouvez vous reposer, léger, dans une phrase claire.",
        questions: [
          { q: "Quand faites-vous l'exercice ?", kind: "literal", options: ["Le soir, avant de dormir", "Au réveil, en courant", "Pendant la réunion de travail"], answer: 0, why: "«Le soir, avant de dormir»: literal." },
          { q: "Comment nommez-vous l'émotion ?", kind: "literal", options: ["Une seule fois, à voix basse", "Trois fois très fort", "Par écrit uniquement"], answer: 0, why: "«Nommez-la une seule fois, à voix basse»: literal." },
          { q: "Saluer l'émotion « comme une connaissance » veut dire…", kind: "inferencial", options: ["La reconnaître sans la juger", "L'inviter à rester dîner", "L'oublier aussitôt"], answer: 0, why: "«Sans la juger»: se infiere el trato amable de un conocido, no su supresión." },
          { q: "Pourquoi la chambre paraît-elle plus calme ?", kind: "inferencial", options: ["Le mot posé éclaire et apaise l'émotion", "Vous avez fermé la fenêtre", "Vous avez rangé la chambre"], answer: 0, why: "La palabra posada ilumina el viaje emocional: lo iluminado da menos miedo." },
        ],
      },
    },
  ],

  "fr-cu-c1-06": [
    {
      id: "md-fr-c1-06-1", theme: "meditazione",
      title: "La pause de deux secondes", titleEs: "La pausa de dos segundos", minutes: 2,
      paragraphs: [
        { it: "Le meilleur conseil des grands orateurs est un conseil de méditation : taisez-vous deux secondes avant l'idée importante. Dans ce silence, la salle retient son souffle, et vous aussi : vous goûtez le moment où rien ne se passe. La pause n'est pas un vide ; c'est la ponctuation qui donne son sens à la phrase.", es: "El mejor consejo de los grandes oradores es un consejo de meditación: callad dos segundos antes de la idea importante. En ese silencio la sala contiene el aliento, y vosotros también: saboreáis el momento en que nada ocurre. La pausa no es un vacío; es la puntuación que da sentido a la frase." },
        { it: "Exercez-vous dans la vie quotidienne : avant de répondre à une question, avant de signer un message, avant d'ouvrir une porte, deux secondes. Ce micro-entraînement installe en vous une réserve de calme que la scène pourra puiser. Qui sait se taire deux secondes ne dira presque plus jamais un mot de trop.", es: "Ejercitaos en la vida diaria: antes de responder a una pregunta, antes de firmar un mensaje, antes de abrir una puerta, dos segundos. Este microentrenamiento instala en vosotros una reserva de calma de la que el escenario podrá beber. Quien sabe callar dos segundos casi nunca dirá una palabra de más." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de actuación teatral", "El silencio de dos segundos como entrenamiento diario de calma", "Cómo escribir frases puntuadas"],
        answer: 1,
        why: "La pausa del orador se entrena en la vida diaria: meditación aplicada, no teatro.",
      },
      quiz: [
        { q: "Que fait la salle pendant la pause ?", kind: "literal", options: ["Elle retient son souffle", "Elle applaudit", "Elle s'en va"], answer: 0, why: "«La salle retient son souffle»: literal." },
        { q: "Quel effet la pause crée-t-elle entre la salle et l'orateur ?", kind: "inferencial", options: ["Elle suspend la salle et l'orateur dans le même instant", "Elle coupe tout contact avec la salle", "Elle accélère le débit de l'orateur"], answer: 0, why: "«La salle retient son souffle, et vous aussi»: se infiere el instante compartido que crea la pausa." },
        { q: "Quelle est la promesse de la pause, selon le texte ?", kind: "critica", options: ["Parler moins, mais plus juste", "Ne plus parler du tout", "Parler plus vite pour compenser"], answer: 0, why: "La pausa filtra: menos palabras, más justas — esa es la idea crítica." },
      ],
      vf: [
        { text: "La pause est un vide sans fonction.", value: false, why: "«La pause n'est pas un vide»: es la puntuación que da sentido." },
        { text: "Deux secondes avant une réponse suffisent à s'entraîner.", value: true, why: "El microentrenamiento diario usa pausas de dos segundos." },
        { text: "Le micro-entraînement installe une réserve de calme.", value: true, why: "«Installe en vous une réserve de calme»: literal." },
      ],
    },
    {
      id: "md-fr-c1-06-2", theme: "qui e ora",
      title: "Entrer dans la salle", titleEs: "Entrar en la sala", minutes: 2,
      paragraphs: [
        { it: "Le conférencier a un secret : il entre dans la salle avant d'y entrer. Sur le pas de la porte, il remarque la lumière, les visages, l'odeur du café froid ; il laisse son téléphone et ses soucis dans le couloir. Quand il monte, il n'apporte que lui-même — et la salle le sent immédiatement.", es: "El conferenciante tiene un secreto: entra en la sala antes de entrar en ella. En el umbral advierte la luz, los rostros, el olor del café frío; deja el móvil y las preocupaciones en el pasillo. Cuando sube, no trae más que a sí mismo — y la sala lo siente de inmediato." },
        { it: "C'est une leçon de présence pour tout le monde : on ne commence pas une rencontre, un cours, un dîner, en arrivant à moitié. La porte est une frontière ; décidez de la franchir entière. Les trois premières secondes d'attention que vous offrez à un lieu vous seront rendues au centuple.", es: "Es una lección de presencia para todos: no se empieza una reunión, una clase, una cena, llegando a medias. La puerta es una frontera; decidid cruzarla entera. Los tres primeros segundos de atención que regaláis a un lugar os serán devueltos al céntuplo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Protocolo de recepción de congresos", "Cruzar la puerta con plena presencia, dejando fuera lo demás", "Cómo decorar una sala de conferencias"],
        answer: 1,
        why: "«Entrer dans la salle» es la metáfora de la llegada presente, no organización de eventos.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Entrer entièrement dans un lieu, sans y arriver à moitié", "Répéter son texte dans le couloir", "Arriver en retard pour surprendre"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Il remarque la lumière, les visages, l'odeur du café froid", "Il laisse son téléphone et ses soucis dans le couloir", "La porte est une frontière"],
        distractors: ["La salle doit être vide pour bien parler", "Le café froid est interdit dans les salles", "Les trois premières secondes sont sans importance"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Sur le pas de la porte, il remarque la lumière et les visages.",
          "Il laisse son téléphone et ses soucis dans le couloir.",
          "Il n'apporte que lui-même sur la scène.",
          "Les conférences durent toujours exactement douze minutes.",
          "La porte est une frontière ; franchissez-la entière.",
        ],
        intruder: 3,
        why: "La duración exacta de doce minutos es un dato del oficio, no de la presencia en la puerta.",
      },
    },
    {
      id: "md-fr-c1-06-3", theme: "relax fisico",
      title: "Le souffle avant l'accroche", titleEs: "El aliento antes del gancho", minutes: 3,
      paragraphs: [
        { it: "La première phrase, l'accroche, dépend moins des mots que du souffle qui les porte. Avant de parler : une inspiration par le nez, les épaules basses, le menton libre. Si vous respirez haut, dans la gorge, la voix sortira grêle et la salle le sentira ; si vous respirez bas, la voix posera et la salle s'installera.", es: "La primera frase, el gancho, depende menos de las palabras que del aliento que las lleva. Antes de hablar: una inspiración por la nariz, los hombros bajos, la barbilla libre. Si respiráis alto, en la garganta, la voz saldrá delgada y la sala lo sentirá; si respiráis abajo, la voz se posará y la sala se acomodará." },
        { it: "Un exercice simple, la veille au soir : allongé, une main sur le ventre, sentez la main monter à chaque inspiration, descendre à chaque expiration. C'est ce souffle-là, le souffle bas, que vous chercherez sur scène. L'accroche sera bonne non parce qu'elle est brillante, mais parce qu'elle est portée par un corps qui respire.", es: "Un ejercicio simple, la víspera por la noche: tumbados, una mano sobre el vientre, sentid cómo la mano sube con cada inspiración y baja con cada espiración. Ese es el aliento, el aliento bajo, que buscaréis en el escenario. El gancho será bueno no por brillante, sino porque lo porta un cuerpo que respira." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Frases de apertura famosas", "Preparar la respiración baja que sostiene la primera frase", "Ejercicios de vocalización de vocales"],
        answer: 1,
        why: "«Le souffle avant l'accroche» une respiración y apertura: preparación corporal, no repertorio de frases.",
      },
      sequence: {
        instr: "Ordena los pasos según el texto:",
        events: ["Vous vous allongez, une main sur le ventre", "Vous sentez la main monter à l'inspiration", "Vous sentez la main descendre à l'expiration", "Le lendemain, vous cherchez ce souffle bas sur scène", "La première phrase est portée par un corps qui respire"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Voici le souffle de l'accroche. Debout, une main sur le ventre, les épaules basses. Inspirez par le nez : la main monte, la poitrine reste tranquille. Soufflez lentement : la main descend. Encore deux fois. Ce souffle-là, bas et calme, portera votre première phrase. Vous n'avez plus qu'à ouvrir la bouche.",
        questions: [
          { q: "Où posez-vous la main ?", kind: "literal", options: ["Sur le ventre", "Sur la tête", "Sur l'épaule"], answer: 0, why: "«Une main sur le ventre»." },
          { q: "Que fait la main à l'inspiration ?", kind: "literal", options: ["Elle monte", "Elle tourne", "Elle tape"], answer: 0, why: "«La main monte, la poitrine reste tranquille»." },
          { q: "Quel souffle portera la première phrase ?", kind: "inferencial", options: ["Le souffle bas et calme", "Le souffle de la gorge", "Un souffle retenu"], answer: 0, why: "«Ce souffle-là, bas et calme, portera votre première phrase»." },
          { q: "Pourquoi la poitrine reste-t-elle tranquille ?", kind: "inferencial", options: ["Pour que la respiration descende dans le ventre", "Pour ne pas bouger les bras", "Pour paraître détendu en photo"], answer: 0, why: "Si el pecho queda quieto, el aliento baja: la respiración ventral es la buscada." },
        ],
      },
    },
  ],

  "fr-cu-c1-07": [
    {
      id: "md-fr-c1-07-1", theme: "spiritualità",
      title: "La patience des files", titleEs: "La paciencia de las colas", minutes: 3,
      paragraphs: [
        { it: "Devant la préfecture, à sept heures du matin, la file avance au rythme des tampons. On peut la vivre comme une punition — ou comme un dojo improvisé. La patience n'est pas l'absence d'agacement ; c'est l'agacement regardé en face, respiré, laissé passer sans qu'il prenne la tête de la file.", es: "Ante la prefectura, a las siete de la mañana, la cola avanza al ritmo de los sellos. Puede vivirse como un castigo — o como un dojo improvisado. La paciencia no es la ausencia de fastidio; es el fastidio mirado de frente, respirado, dejado pasar sin que tome la cabeza de la cola." },
        { it: "Les traditions spirituelles ont toujours aimé les files : pèlerinages, portes des temples, cuisines des monastères. L'attente partagée, disent-elles, polit l'âme mieux que le confort. Nul besoin de croyance pour en faire l'expérience : la prochaine fois que vous attendez, essayez d'attendre bien — c'est-à-dire entièrement.", es: "Las tradiciones espirituales siempre han amado las colas: peregrinaciones, puertas de templos, cocinas de monasterios. La espera compartida, dicen, pule el alma mejor que la comodidad. No hace falta creer para vivirlo: la próxima vez que esperéis, probad a esperar bien — es decir, del todo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los horarios de las prefecturas francesas", "La espera en la cola como práctica espiritual laica", "Cómo evitar las colas con cita previa"],
        answer: 1,
        why: "«La patience des files» convierte la cola en dojo: práctica de paciencia, no información práctica.",
      },
      quiz: [
        { q: "À quel rythme la file avance-t-elle ?", kind: "literal", options: ["Au rythme des tampons", "Au rythme de la musique", "Au rythme du métro"], answer: 0, why: "«La file avance au rythme des tampons»: literal." },
        { q: "Pourquoi la file peut-elle devenir un « dojo improvisé » ?", kind: "inferencial", options: ["Parce qu'elle entraîne la patience comme un exercice", "Parce qu'on y apprend les arts martiaux", "Parce qu'on y dort debout"], answer: 0, why: "La cola entrena mirar el fastidio y respirarlo: se infiere el dojo como lugar de práctica interior." },
        { q: "« Attendre entièrement » signifie…", kind: "critica", options: ["Vivre l'attente du dedans, au lieu de la subir en absent", "Dormir debout dans la file", "Se plaindre au guichet"], answer: 0, why: "Esperar bien es habitar la espera en vez de padecerla ausente: la idea crítica del texto." },
      ],
      vf: [
        { text: "La file devant la préfecture peut devenir un dojo improvisé.", value: true, why: "«Ou comme un dojo improvisé»: literal." },
        { text: "La patience est l'absence d'agacement.", value: false, why: "No es ausencia: es el fastidio mirado y respirado." },
        { text: "Il faut une croyance religieuse pour attendre bien.", value: false, why: "«Nul besoin de croyance»: la experiencia está abierta a todos." },
      ],
    },
    {
      id: "md-fr-c1-07-2", theme: "relax mentale",
      title: "Trier ses pensées", titleEs: "Ordenar los pensamientos", minutes: 2,
      paragraphs: [
        { it: "La paperasse a un côté spirituel qu'on lui refuse : elle oblige à trier. Faites de même avec vos pensées, un soir de semaine. Étalez-les sur la table intérieure : voici une inquiétude, voici un projet, voici une rancune périmée, voici une idée qui mérite un dossier. Chaque chose à sa place, une chemise par document.", es: "El papeleo tiene un lado espiritual que se le niega: obliga a ordenar. Haced lo mismo con vuestros pensamientos, una noche entre semana. Extendedlos sobre la mesa interior: aquí una preocupación, aquí un proyecto, aquí un rencor caducado, aquí una idea que merece expediente. Cada cosa en su sitio, una carpeta por documento." },
        { it: "Ce qui est périmé part à la corbeille, sans cérémonie : la rancune de 2019, la comparaison avec un collègue, la phrase qu'on n'a pas dite. Ce qui compte reçoit un dossier neuf. Le mental, comme un bureau bien tenu, ne garde que ce qu'il utilise. Le soir, la pièce est calme ; le lendemain, on retrouve tout.", es: "Lo caducado va a la papelera, sin ceremonia: el rencor de 2019, la comparación con un colega, la frase que no se dijo. Lo que importa recibe un expediente nuevo. La mente, como un despacho bien llevado, solo guarda lo que utiliza. Por la noche, la habitación queda en calma; al día siguiente, se encuentra todo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un sistema de archivado físico", "Ordenar los pensamientos como papeleo: tirar lo caducado, guardar lo que importa", "Cómo pedir cita en la prefectura"],
        answer: 1,
        why: "La metáfora del expediente interior ordena la mente, no la oficina física.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Trier ses pensées comme des papiers : jeter le périmé, classer l'essentiel", "Garder absolument toutes ses pensées", "Penser le moins possible le soir"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Vous étalez les pensées sur la table intérieure", "Ce qui est périmé part à la corbeille", "Le mental ne garde que ce qu'il utilise"],
        distractors: ["La corbeille doit être achetée en préfecture", "Les projets sont interdits le soir", "Le bureau intérieur a une fenêtre"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Vous étalez vos pensées sur la table intérieure.",
          "Voici une inquiétude, voici un projet.",
          "Ce qui est périmé part à la corbeille, sans cérémonie.",
          "Le dossier doit être imprimé en trois exemplaires.",
          "Le mental ne garde que ce qu'il utilise.",
        ],
        intruder: 3,
        why: "Los tres ejemplares impresos son burocracia literal, ajena a la metáfora mental.",
      },
    },
    {
      id: "md-fr-c1-07-3", theme: "meditazione",
      title: "Attendre en respirant", titleEs: "Esperar respirando", minutes: 2,
      paragraphs: [
        { it: "Dans la file, personne ne vous empêche de méditer : c'est même l'endroit idéal, car il ne manque pas de temps. Debout, le poids sur les deux pieds, vous suivez votre souffle : une inspiration, une expiration, encore une. Autour de vous, les dossiers s'impatientent ; en vous, quelque chose reste posé.", es: "En la cola nadie os impide meditar: es incluso el lugar ideal, porque no falta tiempo. De pie, el peso sobre los dos pies, seguís vuestro aliento: una inspiración, una espiración, otra más. A vuestro alrededor, los expedientes se impacientan; en vosotros, algo permanece posado." },
        { it: "C'est toute la méditation : un point d'appui imperceptible au milieu du mouvement. La file avance d'un pas ; vous avancez d'un souffle. Le guichet viendra, le tampon aussi ; entre-temps, vous vous êtes entraîné à la paix portable — celle qui ne dépend ni de la salle ni de l'heure, et que vous emporterez au comptoir.", es: "Eso es toda la meditación: un punto de apoyo imperceptible en medio del movimiento. La cola avanza un paso; vosotros avanzáis un aliento. La ventanilla llegará, el sello también; mientras tanto, os habéis entrenado en la paz portátil — la que no depende ni de la sala ni de la hora, y que llevaréis al mostrador." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los mejores trámites en línea", "Meditar de pie en la cola, un aliento a la vez", "Cómo negociar en la ventanilla"],
        answer: 1,
        why: "«Attendre en respirant» convierte la cola en práctica de pie, no en gestión de trámites.",
      },
      sequence: {
        instr: "Ordena los pasos según el texto:",
        events: ["Vous vous tenez debout, le poids sur les deux pieds", "Vous suivez une inspiration et une expiration", "La file avance d'un pas", "Vous avancez d'un souffle", "Vous emportez la paix portable au comptoir"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Debout dans la file, deux pieds au sol, commençons. Inspirez par le nez, comptez jusqu'à trois. Soufflez lentement, comptez jusqu'à quatre. La file avance : un pas, un souffle. Si l'agacement arrive, bonjour agacement — et retour au souffle. Le guichet s'approche ; votre calme, lui, est déjà là.",
        questions: [
          { q: "Jusqu'à combien comptez-vous en inspirant ?", kind: "literal", options: ["Jusqu'à trois", "Jusqu'à dix", "On ne compte pas"], answer: 0, why: "«Comptez jusqu'à trois» en la inspiración." },
          { q: "Comment saluez-vous l'agacement ?", kind: "literal", options: ["Vous dites bonjour et revenez au souffle", "Vous le combattez", "Vous changez de file"], answer: 0, why: "«Bonjour agacement — et retour au souffle»." },
          { q: "Où est votre calme quand le guichet approche ?", kind: "inferencial", options: ["Il est déjà là", "Il est resté à la maison", "Il dépend du fonctionnaire"], answer: 0, why: "«Votre calme, lui, est déjà là»: el calma ya está instalado." },
          { q: "Combien de temps dure l'expiration ?", kind: "inferencial", options: ["Plus longtemps que l'inspiration", "Moins longtemps", "Le même temps exact"], answer: 0, why: "Se cuenta hasta cuatro al soplar y hasta tres al inspirar: la espiración es más larga." },
        ],
      },
    },
  ],

  "fr-cu-c1-08": [
    {
      id: "md-fr-c1-08-1", theme: "qui e ora",
      title: "Écouter la réponse", titleEs: "Escuchar la respuesta", minutes: 2,
      paragraphs: [
        { it: "Le bon intervieweur écoute la réponse ; le mauvais attend sa question suivante. La différence s'entend. Écouter vraiment, c'est laisser la phrase de l'autre finir, respirer après le point final, et seulement alors décider. Cette demi-seconde de silence est une politesse d'or — et une technique d'or aussi.", es: "El buen entrevistador escucha la respuesta; el malo espera su siguiente pregunta. La diferencia se oye. Escuchar de verdad es dejar que la frase del otro termine, respirar tras el punto final y solo entonces decidir. Ese medio segundo de silencio es una cortesía de oro — y también una técnica de oro." },
        { it: "La présence de l'auditeur change la parole de l'interviewé : qui se sent écouté se risque, se précise, se découvre. C'est vrai à l'antenne et vrai à la table de la cuisine. Écouter n'est pas attendre en silence : c'est offrir une attention si nette que l'autre peut enfin s'entendre lui-même.", es: "La presencia del oyente cambia la palabra del entrevistado: quien se siente escuchado se arriesga, se precisa, se descubre. Es cierto en antena y cierto en la mesa de la cocina. Escuchar no es esperar en silencio: es ofrecer una atención tan nítida que el otro puede por fin oírse a sí mismo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo preparar preguntas de entrevista", "Escuchar de verdad la respuesta antes de decidir la siguiente pregunta", "Técnicas de grabación de radio"],
        answer: 1,
        why: "«Écouter la réponse» trata de la escucha plena, no de preparar preguntas ni de técnica de sonido.",
      },
      quiz: [
        { q: "Que fait le mauvais intervieweur ?", kind: "literal", options: ["Il attend sa question suivante", "Il écoute la réponse", "Il se tait toujours"], answer: 0, why: "«Le mauvais attend sa question suivante»: literal." },
        { q: "Pourquoi la demi-seconde de silence est-elle « une politesse d'or » ?", kind: "inferencial", options: ["Elle honore la phrase finie de l'autre avant la nôtre", "Elle fait gagner du temps à l'antenne", "Elle évite de devoir écouter la réponse"], answer: 0, why: "«Laisser la phrase de l'autre finir, respirer, puis décider»: se infiere el respeto al fraseo ajeno." },
        { q: "Quel est l'effet d'une attention si nette ?", kind: "critica", options: ["L'autre peut enfin s'entendre lui-même", "L'autre se tait par peur", "L'entretien devient plus court"], answer: 0, why: "La idea: la escucha nítida permite al otro oírse — cambia su palabra." },
      ],
      vf: [
        { text: "Écouter, c'est attendre en silence.", value: false, why: "«Écouter n'est pas attendre en silence»: es ofrecer atención." },
        { text: "Qui se sent écouté se risque et se précise.", value: true, why: "Literal en el segundo párrafo." },
        { text: "La demi-seconde de silence est une politesse d'or.", value: true, why: "«Une politesse d'or — et une technique d'or aussi»." },
      ],
    },
    {
      id: "md-fr-c1-08-2", theme: "relax fisico",
      title: "Avant la question difficile", titleEs: "Antes de la pregunta difícil", minutes: 3,
      paragraphs: [
        { it: "La question difficile arrive toujours, et le corps le sait avant vous. La mâchoire se serre, les doigts se croisent, l'épaule droite monte d'un cran. Rien de grave : c'est le vieux réflexe de défense, celui qui préparait la fuite. Sauf qu'ici, ni fuir ni combattre : la bonne réponse a besoin d'un corps calme.", es: "La pregunta difícil llega siempre, y el cuerpo lo sabe antes que vosotros. La mandíbula se aprieta, los dedos se cruzan, el hombro derecho sube un escalón. Nada grave: es el viejo reflejo de defensa, el que preparaba la huida. Solo que aquí ni huir ni luchar: la buena respuesta necesita un cuerpo tranquilo." },
        { it: "Le protocole tient en trois temps : relâchez la mâchoire (les dents ne se touchent plus), ouvrez les mains (les paumes vers la table), et soufflez une fois, plus longtemps que l'inspiration. Puis posez la question ou répondez : votre voix aura la netteté du corps détendu. La question difficile devient simplement une question.", es: "El protocolo cabe en tres tiempos: soltad la mandíbula (los dientes ya no se tocan), abrid las manos (las palmas hacia la mesa) y soplad una vez, más largo que la inspiración. Luego plantead la pregunta o responded: vuestra voz tendrá la nitidez del cuerpo distendido. La pregunta difícil se vuelve simplemente una pregunta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Preguntas capciosas de entrevista", "Soltar mandíbula, manos y aliento antes de la pregunta difícil", "Cómo evitar preguntas difíciles"],
        answer: 1,
        why: "«Avant la question difficile» prepara el cuerpo en tres gestos, no el repertorio de preguntas.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Il faut éviter toute question difficile en direct", "Un protocole en trois temps — mâchoire, mains, souffle — pour répondre le corps calme", "La bonne réponse exige un corps tendu et rapide"],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Le corps sait la question difficile avant vous", "Vous relâchez la mâchoire : les dents ne se touchent plus", "La question difficile devient simplement une question"],
        distractors: ["Il faut serrer les poings pour se concentrer", "Le souffle doit être plus court que l'inspiration", "La voix nette vient d'un corps raidi"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "La mâchoire se serre, les doigts se croisent, l'épaule monte.",
          "Vous relâchez la mâchoire : les dents ne se touchent plus.",
          "Vous ouvrez les mains, les paumes vers la table.",
          "Le casque de l'invité doit être vérifié avant l'antenne.",
          "Vous soufflez une fois, plus longtemps que l'inspiration.",
        ],
        intruder: 3,
        why: "La revisión del casco del invitado es técnica de radio, no un gesto de calma corporal: es el intruso.",
      },
    },
    {
      id: "md-fr-c1-08-3", theme: "spiritualità",
      title: "L'art de s'intéresser", titleEs: "El arte de interesarse", minutes: 3,
      paragraphs: [
        { it: "La meilleure question n'est pas la plus armée : c'est celle qui montre que vous vous intéressez vraiment. L'art de s'intéresser est une discipline discrète — vouloir comprendre avant de vouloir gagner. Celui qui interroge par curiosité sincère reçoit des réponses que l'agressivité n'obtiendra jamais.", es: "La mejor pregunta no es la más armada: es la que muestra que os interesáis de verdad. El arte de interesarse es una disciplina discreta — querer entender antes de querer ganar. Quien pregunta por curiosidad sincera recibe respuestas que la agresividad nunca obtendrá." },
        { it: "C'est une forme de respect, presque une forme de gratitude : chaque personne devant vous sait quelque chose que vous ignorez. L'écoute curieuse honore ce savoir. Et par un retour étrange, celui qui s'intéresse sincèrement aux autres devient, aux yeux de tous, la personne la plus intéressante de la salle.", es: "Es una forma de respeto, casi una forma de gratitud: cada persona ante vosotros sabe algo que vosotros ignoráis. La escucha curiosa honra ese saber. Y por un retorno extraño, quien se interesa sinceramente por los demás se vuelve, a los ojos de todos, la persona más interesante de la sala." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo brillar en una conversación", "La curiosidad sincera como forma de respeto hacia el otro", "Trucos de manipulación en entrevistas"],
        answer: 1,
        why: "«L'art de s'intéresser» valora la curiosidad respetuosa, no el lucimiento ni la manipulación.",
      },
      sequence: {
        instr: "Ordena los pasos según el texto:",
        events: ["Vous rencontrez quelqu'un qui sait quelque chose que vous ignorez", "Vous laissez de côté l'envie de gagner l'échange", "Vous posez une question de curiosité sincère", "Vous recevez des réponses que l'agressivité n'obtiendra jamais", "Vous devenez, aux yeux de tous, la personne la plus intéressante de la salle"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Avant votre prochain entretien, essayez ceci. Choisissez une personne, et au lieu de préparer votre réplique, préparez une question sincère. Écoutez la réponse jusqu'au bout, puis laissez le silence une seconde. Remerciez intérieurement : cette personne vient de vous offrir ce qu'elle sait. Vous repartirez avec une réponse, et surtout avec une présence.",
        questions: [
          { q: "Que préparez-vous avant l'entretien ?", kind: "literal", options: ["Une question sincère", "Une réplique cinglante", "Un long discours"], answer: 0, why: "«Au lieu de préparer votre réplique, préparez une question sincère»." },
          { q: "Que faites-vous quand la réponse se termine ?", kind: "literal", options: ["Vous remerciez intérieurement", "Vous coupez la parole", "Vous changez de sujet"], answer: 0, why: "«Remerciez intérieurement»: literal." },
          { q: "Laisser le silence une seconde sert à…", kind: "inferencial", options: ["Accueillir vraiment ce que l'autre a offert", "Marquer une pause publicitaire", "Éviter la réponse gênante"], answer: 0, why: "El silencio acoge el saber ofrecido: se infiere del gesto de gratitud." },
          { q: "Avec quoi repartez-vous ?", kind: "inferencial", options: ["Une réponse et surtout une présence", "Un contrat signé", "Le silence de l'autre"], answer: 0, why: "«Vous repartirez avec une réponse, et surtout avec une présence»: el audio lo cierra." },
        ],
      },
    },
  ],

  "fr-cu-c1-09": [
    {
      id: "md-fr-c1-09-1", theme: "relax mentale",
      title: "Épurer comme un slogan", titleEs: "Depurar como un eslogan", minutes: 2,
      paragraphs: [
        { it: "Un eslogan n'a que quelques mots ; votre fatigue mentale, elle, en a des milliers. Empruntez aux publicitaires leur geste : épurez. Prenez le flot de pensées du soir et cherchez-en la version de trois mots. « Trop de bruit », « besoin de repos », « demain sera clair » : le claim intérieur tient sur une affiche.", es: "Un eslogan solo tiene unas pocas palabras; vuestra fatiga mental tiene miles. Tomad de los publicitarios su gesto: depurad. Coged el flujo de pensamientos de la noche y buscad su versión de tres palabras. «Demasiado ruido», «necesito descanso», «mañana estará claro»: el claim interior cabe en un cartel." },
        { it: "Épurer ne veut pas dire mentir : le slogan honore l'essentiel, il ne nie pas le reste. Ce que vous laissez de côté n'est pas perdu — il attendra sagement son heure. Le soir, trois mots suffisent à refermer la journée ; le matin, trois mots suffisent à l'ouvrir. La simplicité est une hygiène, pas une pauvreté.", es: "Depurar no quiere decir mentir: el eslogan honra lo esencial, no niega el resto. Lo que dejáis a un lado no está perdido — esperará con calma su hora. Por la noche, tres palabras bastan para cerrar el día; por la mañana, tres palabras bastan para abrirlo. La simplicidad es una higiene, no una pobreza." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Historia de la publicidad francesa", "Condensar el ruido mental en tres palabras, como un eslogan", "Cómo escribir carteles publicitarios"],
        answer: 1,
        why: "«Épurer comme un slogan» aplica el gesto publicitario a la mente, no a la profesión.",
      },
      quiz: [
        { q: "Que fait-on du flot de pensées du soir ?", kind: "literal", options: ["On l'écrit mot à mot", "On en cherche la version de trois mots", "On le garde pour la semaine suivante"], answer: 1, why: "«Cherchez-en la version de trois mots»: literal en el primer párrafo." },
        { q: "« Ce que vous laissez de côté n'est pas perdu » signifie…", kind: "inferencial", options: ["Il attendra sagement son heure", "Il disparaît à jamais", "Il faut le chasser de son esprit"], answer: 0, why: "«Il attendra sagement son heure»: lo esencial vuelve cuando toca; se infiere la espera serena." },
        { q: "La simplicité est comparée, à la fin, à…", kind: "critica", options: ["Une hygiène, pas une pauvreté", "Une punition méritée", "Un slogan à vendre"], answer: 0, why: "«La simplicité est une hygiène, pas une pauvreté»: la idea crítica del cierre." },
      ],
      vf: [
        { text: "Épurer veut dire mentir sur l'essentiel.", value: false, why: "«Épurer ne veut pas dire mentir»: el eslogan honra lo esencial, no niega el resto." },
        { text: "Le claim intérieur tient sur une affiche.", value: true, why: "«Le claim intérieur tient sur une affiche»: literal." },
        { text: "Le matin, trois mots suffisent à ouvrir la journée.", value: true, why: "«Le matin, trois mots suffisent à l'ouvrir»: literal en el cierre." },
      ],
    },
    {
      id: "md-fr-c1-09-2", theme: "meditazione",
      title: "Le repos de l'ellipse", titleEs: "El reposo de la elipsis", minutes: 2,
      paragraphs: [
        { it: "Le style nominatif repose parce qu'il manque le verbe ; l'esprit repose aussi quand on lui épargne les liaisons. Essayez, un instant, de penser en ellipse : pas de « donc », pas de « parce que », pas de « il faut que ». Juste des images posées, une à une, comme des affiches le long d'une rue tranquille.", es: "El estilo nominativo descansa porque le falta el verbo; el espíritu también descansa cuando se le ahorran las conexiones. Probad, un instante, a pensar en elipsis: sin «por tanto», sin «porque», sin «hay que». Solo imágenes posadas, una a una, como carteles a lo largo de una calle tranquila." },
        { it: "C'est une méditation minimale, pour les jours où même respirer lentement semble long. Trois images, pas plus : une tasse, une lumière, un arbre. La phrase intérieure devient courte, et dans sa brièveté, quelque chose se repose. Le verbe reviendra quand vous en aurez besoin ; en attendant, l'ellipse vous garde.", es: "Es una meditación mínima, para los días en que hasta respirar despacio parece largo. Tres imágenes, no más: una taza, una luz, un árbol. La frase interior se vuelve corta y, en su brevedad, algo descansa. El verbo volverá cuando lo necesitéis; mientras tanto, la elipsis os guarda." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Gramática del estilo nominal", "Una meditación mínima con imágenes sueltas, sin conectores", "Cómo pegar carteles en la calle"],
        answer: 1,
        why: "La elipsis se usa aquí como descanso mental con imágenes, no como lección de gramática.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Penser en ellipse : des images posées sans connecteurs, pour reposer l'esprit", "Supprimer les verbes de sa langue pour toujours", "Écrire des phrases très longues et bien liées"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["L'esprit repose quand on lui épargne les liaisons", "Trois images, pas plus : une tasse, une lumière, un arbre", "Le verbe reviendra quand vous en aurez besoin"],
        distractors: ["Les connecteurs rendent la phrase plus calme", "La méditation minimale dure une heure", "Il faut fuir les rues tranquilles"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "L'esprit repose quand on lui épargne les liaisons.",
          "Vous pensez en ellipse : pas de « donc », pas de « parce que ».",
          "Trois images, pas plus : une tasse, une lumière, un arbre.",
          "L'affichage urbain est interdit dans les rues résidentielles.",
          "Le verbe reviendra quand vous en aurez besoin.",
        ],
        intruder: 3,
        why: "La prohibición del cartel urbano es reglamentación publicitaria, ajena al descanso mental: es el intruso.",
      },
    },
    {
      id: "md-fr-c1-09-3", theme: "qui e ora",
      title: "Trois mots sur un mur", titleEs: "Tres palabras en un muro", minutes: 3,
      paragraphs: [
        { it: "Sur le mur de la gare, une affiche : trois mots, un visuel, rien d'autre. Vous avez trente secondes avant le train. Au lieu de les remplir, habitez-les : lisez lentement les trois mots, regardez la couleur, remarquez votre regard qui regarde. La ville crie partout ; cette affiche, elle, chuchote.", es: "En el muro de la estación, un cartel: tres palabras, una imagen, nada más. Tenéis treinta segundos antes del tren. En lugar de llenarlos, habitadlos: leed despacio las tres palabras, mirad el color, advertid vuestra mirada que mira. La ciudad grita por todas partes; este cartel, en cambio, susurra." },
        { it: "Trois mots bien choisis arrêtent l'œil comme une pause arrête la musique. C'est toute la magie de la publicité, utilisée ici à contre-emploi : au lieu de vous faire acheter, elle vous fait remarquer que vous êtes là, debout, vivant, en train de lire. Le train arrive ; vous montez, et l'instant reste entier.", es: "Tres palabras bien elegidas detienen la mirada como una pausa detiene la música. Toda la magia de la publicidad, usada aquí a contrapelo: en vez de haceros comprar, os hace advertir que estáis ahí, de pie, vivos, leyendo. El tren llega; subís, y el instante queda entero." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo diseñar carteles eficaces", "Un momento de presencia ante un cartel de tres palabras", "La historia de la publicidad en estaciones"],
        answer: 1,
        why: "«Trois mots sur un mur» usa el cartel como excusa para la presencia, no como lección de diseño.",
      },
      sequence: {
        instr: "Ordena los pasos según el texto:",
        events: ["Vous repérez une affiche de trois mots sur le mur", "Vous lisez lentement les trois mots", "Vous regardez la couleur du visuel", "Vous remarquez votre regard qui regarde", "Le train arrive et vous montez, l'instant entier"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Dans la gare, trouvez une affiche, n'importe laquelle, avec peu de mots. Arrêtez-vous trente secondes. Lisez le premier mot, lentement. Puis le deuxième. Puis le dernier. Regardez maintenant l'image entière, sa couleur, sa lumière. Vous venez de faire une pause de publicité inversée : ce n'est pas l'affiche qui vous a pris ; c'est vous qui l'avez habitée.",
        questions: [
          { q: "Combien de temps vous arrêtez-vous ?", kind: "literal", options: ["Trente secondes", "Une heure", "Deux minutes"], answer: 0, why: "«Arrêtez-vous trente secondes»." },
          { q: "Comment lisez-vous les mots ?", kind: "literal", options: ["Lentement, un par un", "Très vite", "À voix haute"], answer: 0, why: "«Lisez le premier mot, lentement»." },
          { q: "Qu'est-ce que la « publicité inversée » ?", kind: "inferencial", options: ["Vous habitez l'affiche au lieu d'être pris par elle", "Vous achetez l'affiche", "Vous détournez le regard"], answer: 0, why: "«Ce n'est pas l'affiche qui vous a pris ; c'est vous qui l'avez habitée»." },
          { q: "Que regardez-vous après les mots ?", kind: "inferencial", options: ["L'image entière, sa couleur, sa lumière", "Votre téléphone", "L'horloge de la gare"], answer: 0, why: "«Regardez maintenant l'image entière, sa couleur, sa lumière»." },
        ],
      },
    },
  ],

  "fr-cu-c1-10": [
    {
      id: "md-fr-c1-10-1", theme: "relax fisico",
      title: "Le calme du plateau", titleEs: "La calma del plató", minutes: 3,
      paragraphs: [
        { it: "Le débat monte d'un cran, et votre corps voudrait monter aussi : la voix, les épaules, le pouls. C'est le moment exact du travail : descendre. Les mains ouvertes sur la table, les pieds au sol, la respiration dans le ventre. Le ton ne monte pas parce qu'on a raison ; il monte parce qu'on a peur.", es: "El debate sube un escalón y vuestro cuerpo también querría subir: la voz, los hombros, el pulso. Es el momento exacto del trabajo: bajar. Las manos abiertas sobre la mesa, los pies en el suelo, la respiración en el vientre. El tono no sube porque se tenga razón; sube porque se tiene miedo." },
        { it: "En France, la règle du plateau est connue : qui s'énerve a déjà perdu. Le corps peut apprendre cette règle avant l'esprit. À chaque hausse de température intérieure, la même réponse : paumes ouvertes, mâchoire relâchée, une expiration longue. Le calme n'est pas de la faiblesse ; c'est une technique de précision, et elle se voit à l'antenne.", es: "En Francia la regla del plató es conocida: quien se irrita ya ha perdido. El cuerpo puede aprender esta regla antes que la mente. Ante cada subida de temperatura interior, la misma respuesta: palmas abiertas, mandíbula suelta, una espiración larga. La calma no es debilidad; es una técnica de precisión, y en antena se nota." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo ganar un debate gritando", "Bajar el cuerpo (manos, mandíbula, aliento) cuando el debate se calienta", "Ejercicios de boxeo antes de discutir"],
        answer: 1,
        why: "«Le calme du plateau» enseña a bajar la tensión corporal, no a ganar por volumen.",
      },
      quiz: [
        { q: "Que veut faire le corps quand le débat monte ?", kind: "literal", options: ["Monter aussi", "Dormir", "Rire"], answer: 0, why: "«Votre corps voudrait monter aussi»: literal." },
        { q: "Pourquoi le ton monte-t-il, selon le texte ?", kind: "inferencial", options: ["Parce qu'on a peur", "Parce qu'on a raison", "Parce que le micro est mauvais"], answer: 0, why: "«Il monte parce qu'on a peur»: el tono delata miedo, no razón." },
        { q: "Le calme est décrit comme…", kind: "critica", options: ["Une technique de précision, visible à l'antenne", "Une faiblesse de débutant", "Un don de naissance"], answer: 0, why: "«Une technique de précision, et elle se voit à l'antenne»: idea crítica." },
      ],
      vf: [
        { text: "Qui s'énerve a déjà perdu, dit la règle du plateau.", value: true, why: "Literal: regla conocida del debate francés." },
        { text: "Le calme est une faiblesse.", value: false, why: "«Le calme n'est pas de la faiblesse»." },
        { text: "À chaque hausse de température, la réponse est la même.", value: true, why: "«La même réponse : paumes ouvertes, mâchoire relâchée»." },
      ],
    },
    {
      id: "md-fr-c1-10-2", theme: "spiritualità",
      title: "Concéder, c'est grandir", titleEs: "Ceder es crecer", minutes: 3,
      paragraphs: [
        { it: "Concéder un point à l'adversaire ressemble à une défaite ; c'est souvent une croissance. « Il est vrai que… » : cette petite formule oblige votre ego à plier, et votre pensée à s'élargir. Celui qui ne concède jamais ne gagne pas le débat ; il gagne l'image d'un homme qui ne grandit pas.", es: "Ceder un punto al adversario parece una derrota; a menudo es un crecimiento. «Il est vrai que…»: esa pequeña fórmula obliga a vuestro ego a plegarse y a vuestro pensamiento a ensancharse. Quien nunca cede no gana el debate; gana la imagen de alguien que no crece." },
        { it: "Les sages de toutes les traditions l'ont dit à leur manière : la souplesse survit à la raideur. Concéder avec élégance est un art intérieur autant qu'un art oratoire — le judo de l'âme, donnant un point pour garder le lien. À la fin de la soirée, on oublie les points ; on se souvient de qui savait céder.", es: "Los sabios de todas las tradiciones lo dijeron a su manera: la flexibilidad sobrevive a la rigidez. Ceder con elegancia es un arte interior tanto como oratorio — el judo del alma, dar un punto para conservar el vínculo. Al final de la velada se olvidan los puntos; se recuerda a quien sabía ceder." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Estrategias para no perder puntos", "Ceder con elegancia como arte interior y gesto de crecimiento", "Las reglas de puntuación del judo"],
        answer: 1,
        why: "«Concéder, c'est grandir» presenta la concesión como sabiduría, no como táctica de puntos.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Concéder avec élégance : un art intérieur qui garde le lien avec l'autre", "Ne jamais céder pour gagner tous les débats", "Répéter « il est vrai que » pour gagner du temps"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["La formule « il est vrai que » oblige l'ego à plier", "La souplesse survit à la raideur, disent les sages", "On oublie les points ; on se souvient de qui savait céder"],
        distractors: ["Le débat se gagne en haussant le ton", "Les sages déconseillent toute souplesse", "Céder un point fait perdre le lien"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Concéder un point ressemble à une défaite ; c'est souvent une croissance.",
          "« Il est vrai que… » oblige votre ego à plier et votre pensée à s'élargir.",
          "La souplesse survit à la raideur, disent les sages.",
          "Le plateau enregistre le débat à 20 h 45, après le journal.",
          "On oublie les points ; on se souvient de qui savait céder.",
        ],
        intruder: 3,
        why: "La hora de grabación del plató es logística televisiva, ajena al arte interior de ceder: es el intruso.",
      },
    },
    {
      id: "md-fr-c1-10-3", theme: "relax mentale",
      title: "La phrase qui passe", titleEs: "La frase que pasa", minutes: 2,
      paragraphs: [
        { it: "Il y a une phrase, dans chaque débat, qui cherche à vous accrocher : une pique, une caricature, une injustice. Le réflexe mental est de la saisir et de la serrer — et plus vous la serrez, plus elle vous tient. L'entraînement est simple à dire : laissez la phrase passer comme un nuage passe, sans lui donner de siège.", es: "Hay una frase, en cada debate, que busca enganchaeros: un pincho, una caricatura, una injusticia. El reflejo mental es cogerla y apretarla — y cuanto más la apretáis, más os tiene. El entrenamiento es simple de decir: dejad que la frase pase como pasa una nube, sin darle asiento." },
        { it: "Cela ne veut pas dire être d'accord : cela veut dire rester libre. Une phrase accueillie en passant se répond mieux qu'une phrase serrée au corps. Le relax mental du débat, c'est cela : de la place pour la réponse, pas pour la rancune. Le nuage part ; vous, vous êtes toujours là, disponible.", es: "Eso no quiere decir estar de acuerdo: quiere decir permanecer libres. Una frase acogida al pasar se responde mejor que una frase apretada contra el cuerpo. La relajación mental del debate es eso: espacio para la respuesta, no para el rencor. La nube se va; vosotros seguís ahí, disponibles." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo responder con ironía", "Dejar pasar la frase agresiva como una nube, sin engancharse", "Frases célebres de debates televisivos"],
        answer: 1,
        why: "«La phrase qui passe» enseña a no engancharse, no a improvisar réplicas.",
      },
      sequence: {
        instr: "Ordena los pasos según el texto:",
        events: ["Une phrase cherche à vous accrocher : une pique, une caricature", "Vous remarquez le réflexe de la saisir et de la serrer", "Vous la laissez passer comme un nuage, sans lui donner de siège", "Vous gardez de la place pour la réponse, pas pour la rancune", "Le nuage part ; vous êtes toujours là, disponible"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Pendant la prochaine discussion, vous entendrez une phrase piquante. À ce moment précis, respirez une fois. Ne répondez pas tout de suite. Regardez la phrase comme un nuage : elle traverse le ciel de la salle, elle ne s'installe pas. Puis, calmement, choisissez votre réponse. Vous verrez : une phrase accueillie en passant se répond mieux qu'une phrase serrée.",
        questions: [
          { q: "Que faites-vous dès que la phrase piquante arrive ?", kind: "literal", options: ["Vous respirez une fois", "Vous coupez le micro", "Vous la notez par écrit"], answer: 0, why: "«À ce moment précis, respirez une fois»: literal." },
          { q: "À quoi la phrase est-elle comparée ?", kind: "literal", options: ["À un nuage", "À un mur", "À un éclair"], answer: 0, why: "«Regardez la phrase comme un nuage»: literal." },
          { q: "« Elle ne s'installe pas » suggère…", kind: "inferencial", options: ["La phrase ne reçoit pas de siège en vous", "Le nuage va bientôt pleuvoir", "La salle doit être quittée"], answer: 0, why: "La frase no se instala porque no se le da asiento: se infiere del gesto." },
          { q: "Pourquoi attendre avant de répondre ?", kind: "inferencial", options: ["Pour choisir une réponse libre, pas une rancune", "Pour fatiguer l'adversaire", "Pour laisser parler le modérateur"], answer: 0, why: "La respuesta elegida en calma es libre; la apretada sale como rencor." },
        ],
      },
    },
  ],

  "fr-cu-c1-11": [
    {
      id: "md-fr-c1-11-1", theme: "meditazione",
      title: "Le mot juste intérieur", titleEs: "La palabra justa interior", minutes: 2,
      paragraphs: [
        { it: "Flaubert cherchait le mot juste des journées entières. Vous avez le même travail, en plus court : chercher le mot juste pour ce que vous ressentez. Pas « ça va mal à peu près » — plutôt : fatigué ? déçu ? en attente ? Le mot juste posé, l'agitation floue devient une phrase claire, et la phrase claire se laisse regarder.", es: "Flaubert buscaba la palabra justa jornadas enteras. Tenéis el mismo trabajo, más breve: buscar la palabra justa para lo que sentís. No «más o menos mal» — más bien: ¿cansado?, ¿decepcionado?, ¿en espera? La palabra justa posada, la agitación difusa se vuelve frase clara, y la frase clara se deja mirar." },
        { it: "C'est une méditation d'écrivain : trois mots, un souffle, et le mot qui manque arrive souvent tout seul. S'il n'arrive pas, attendez-le comme on attend un train — l'attente fait partie du texte. Le mot juste intérieur ne sert pas à publier ; il sert à habiter précisément ce que l'on vit.", es: "Es una meditación de escritor: tres palabras, un aliento, y la palabra que falta llega a menudo sola. Si no llega, esperadla como se espera un tren — la espera es parte del texto. La palabra justa interior no sirve para publicar; sirve para habitar con precisión lo que se vive." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un taller de escritura profesional", "Buscar la palabra justa para lo que uno siente, como meditación", "La correspondencia de Flaubert"],
        answer: 1,
        why: "«Le mot juste intérieur» lleva la exigencia literaria al mundo emocional propio.",
      },
      quiz: [
        { q: "Combien de temps Flaubert cherchait-il le mot juste ?", kind: "literal", options: ["Des journées entières", "Trois minutes", "Il ne le cherchait pas"], answer: 0, why: "«Des journées entières»: literal." },
        { q: "Pourquoi « la phrase claire se laisse regarder » ?", kind: "inferencial", options: ["Une émotion nommée devient observable, donc moins envahissante", "Elle est écrite en grand sur le papier", "Elle ressemble à un paysage tranquille"], answer: 0, why: "La frase clara se deja mirar: nombrar la emoción la vuelve objeto observable, se infiere del efecto calmante." },
        { q: "À quoi sert le mot juste intérieur ?", kind: "critica", options: ["À habiter précisément ce que l'on vit", "À publier plus vite", "À impressionner les autres"], answer: 0, why: "«Il sert à habiter précisément ce que l'on vit»: idea crítica del cierre." },
      ],
      vf: [
        { text: "Le mot qui manque arrive toujours tout seul.", value: false, why: "Llega «a menudo» solo; a veces hay que esperarlo como un tren." },
        { text: "L'attente fait partie du texte.", value: true, why: "Literal en el segundo párrafo." },
        { text: "Le mot juste intérieur sert à habiter ce que l'on vit.", value: true, why: "Cierre literal del texto." },
      ],
    },
    {
      id: "md-fr-c1-11-2", theme: "qui e ora",
      title: "L'attente à la gare", titleEs: "La espera en la estación", minutes: 3,
      paragraphs: [
        { it: "Une femme attend dans une gare, disait la consigne de l'atelier ; l'attente devient un personnage. Faites l'expérience vous-même, quai 3, un soir : le tableau des départs, l'odeur de poussière, la voix qui annonce un retard. Tout cela est là, complet, et ne demande qu'une chose — que vous y soyez aussi.", es: "Una mujer espera en una estación, decía la consigna del taller; la espera se vuelve personaje. Haced la experiencia vosotros, andén 3, una noche: el tablero de salidas, el olor a polvo, la voz que anuncia un retraso. Todo eso está ahí, completo, y solo pide una cosa — que vosotros también estéis." },
        { it: "L'attente que l'on habite n'est plus du temps perdu : c'est du temps disponible. Regardez les voyageurs qui râlent, puis celle qui lit, puis celui qui regarde la voie comme un paysage. Trois manières d'attendre ; une seule gare. Le train viendra quand il viendra ; en attendant, vous êtes écrivain de la scène.", es: "La espera que se habita ya no es tiempo perdido: es tiempo disponible. Mirad a los viajeros que protestan, luego a la que lee, luego al que mira la vía como un paisaje. Tres maneras de esperar; una sola estación. El tren vendrá cuando venga; mientras tanto, sois el escritor de la escena." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los horarios de la SNCF", "Habitar la espera en la estación como escritor de la escena", "Cómo escribir una novela ferroviaria"],
        answer: 1,
        why: "«L'attente à la gare» convierte la espera en presencia y materia literaria, no en información.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Habiter l'attente : du temps perdu au temps disponible, en écrivain de la scène", "Se plaindre du retard avec les autres voyageurs", "Éviter les gares pour ne jamais attendre"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Le tableau des départs, l'odeur de poussière, la voix du retard", "Trois manières d'attendre, une seule gare", "Le train viendra quand il viendra"],
        distractors: ["La gare ferme ses portes à minuit", "L'attente doit être remplie de messages", "Le quai 3 est réservé aux écrivains"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "L'attente devient un personnage, disait la consigne de l'atelier.",
          "Le tableau des départs, l'odeur de poussière, la voix qui annonce un retard.",
          "L'attente habitée n'est plus du temps perdu : c'est du temps disponible.",
          "La consigne automatique de la gare accepte les cartes bancaires.",
          "Le train viendra quand il viendra ; vous êtes écrivain de la scène.",
        ],
        intruder: 3,
        why: "La consigna automática con tarjeta bancaria es un servicio de la estación, ajeno a la presencia del que espera: es el intruso.",
      },
    },
    {
      id: "md-fr-c1-11-3", theme: "relax fisico",
      title: "Lire à voix haute", titleEs: "Leer en voz alta", minutes: 3,
      paragraphs: [
        { it: "Flaubert hurlait ses phrases pour les éprouver ; vous pouvez les murmurer pour vous détendre. La lecture à voix haute est un massage discret : la respiration s'allonge, la mâchoire s'ouvre doucement, les épaules suivent le rythme des phrases. Le corps entre dans le texte comme dans une eau tiède.", es: "Flaubert gritaba sus frases para probarlas; vosotros podéis murmurarlas para relajaros. La lectura en voz alta es un masaje discreto: la respiración se alarga, la mandíbula se abre suavemente, los hombros siguen el ritmo de las frases. El cuerpo entra en el texto como en un agua tibia." },
        { it: "Choisissez une page qui vous plaît, lisez-la debout, articulez sans forcer, respirez aux points. Si une phrase résiste, c'est qu'elle est longue : coupez-la au premier point, reprenez souffle, continuez. Vingt minutes de lecture à voix haute détendent le corps autant qu'une marche — et vous aurez en plus la phrase dans l'oreille.", es: "Elegid una página que os guste, leedla de pie, articulad sin forzar, respirad en los puntos. Si una frase resiste, es que es larga: cortad en el primer punto, retomad aliento, continuad. Veinte minutos de lectura en voz alta distienden el cuerpo tanto como un paseo — y además tendréis la frase en el oído." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Ejercicios de dicción para actores", "La lectura en voz alta como masaje corporal relajante", "Cómo memorizar poemas"],
        answer: 1,
        why: "«Lire à voix haute» se presenta como relajación física, no como técnica escénica.",
      },
      sequence: {
        instr: "Ordena los pasos según el texto:",
        events: ["Vous choisissez une page qui vous plaît", "Vous lisez debout, en articulant sans forcer", "Vous respirez aux points", "Si une phrase résiste, vous coupez au premier point et reprenez souffle", "Après vingt minutes, le corps est détendu"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Prenez un livre, n'importe lequel, et ouvrez-le au hasard. Debout, le livre à hauteur des yeux, lisez doucement la première phrase. Articulez un peu plus que d'habitude. Soufflez au point final. Deuxième phrase, même rythme. Si elle est longue, coupez après le premier point. Vous sentez ? La mâchoire s'ouvre, les épaules descendent : le texte vous masse de l'intérieur.",
        questions: [
          { q: "Comment ouvrez-vous le livre ?", kind: "literal", options: ["Au hasard", "À la première page", "À la table des matières"], answer: 0, why: "«Ouvrez-le au hasard»." },
          { q: "Où soufflez-vous ?", kind: "literal", options: ["Au point final", "À chaque mot", "Après le titre"], answer: 0, why: "«Soufflez au point final»." },
          { q: "Que sentez-vous à la fin ?", kind: "inferencial", options: ["La mâchoire s'ouvre et les épaules descendent", "Une envie de courir", "Les yeux qui piquent"], answer: 0, why: "«La mâchoire s'ouvre, les épaules descendent»: el texto masajea." },
          { q: "Pourquoi articuler un peu plus que d'habitude ?", kind: "inferencial", options: ["Pour que le corps entre vraiment dans la lecture", "Pour réveiller les voisins", "Pour lire plus vite"], answer: 0, why: "Articular algo más implicar al cuerpo: la lectura se vuelve masaje." },
        ],
      },
    },
  ],

  "fr-cu-c1-12": [
    {
      id: "md-fr-c1-12-1", theme: "spiritualità",
      title: "Passer la porte", titleEs: "Cruzar la puerta", minutes: 3,
      paragraphs: [
        { it: "Tous les rites de passage se ressemblent : une porte, un seuil, et quelqu'un qui change de pièce. La soutenance en est un — une salle, un jury, et vous qui entrez dans une autre version de vous-même. Les sociologues l'ont décrit ; les sages l'ont vécu : le seuil n'est pas un danger, c'est une croissance.", es: "Todos los ritos de paso se parecen: una puerta, un umbral y alguien que cambia de estancia. La defensa es uno — una sala, un jurado y vosotros que entráis en otra versión de vosotros mismos. Los sociólogos lo han descrito; los sabios lo han vivido: el umbral no es un peligro, es un crecimiento." },
        { it: "Le jour venu, saluez le seuil comme un hôte : respirez sur le pas de la porte, remerciez intérieurement le chemin qui vous a mené ici, puis entrez. Ce qui se passera dans la salle ne dépend pas seulement de vous ; ce que vous en ferez de vous, si. Passer la porte sereinement, c'est déjà avoir compris l'essentiel du rite.", es: "Llegado el día, saludad el umbral como a un anfitrión: respirad en el paso de la puerta, agradeced interiormente el camino que os ha traído hasta aquí y entrad. Lo que ocurra en la sala no depende solo de vosotros; lo que haréis con vosotros mismos, sí. Cruzar la puerta con serenidad es haber entendido ya lo esencial del rito." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Logística de defensas académicas", "Cruzar el umbral del rito con serenidad, como crecimiento interior", "Cómo decorar la sala de actos"],
        answer: 1,
        why: "«Passer la porte» usa el rito de la defensa como umbral espiritual, no como gestión.",
      },
      quiz: [
        { q: "De quoi est fait tout rite de passage ?", kind: "literal", options: ["Une porte, un seuil, quelqu'un qui change de pièce", "Un examen et une note", "Une fête et un gâteau"], answer: 0, why: "«Une porte, un seuil, et quelqu'un qui change de pièce»: literal." },
        { q: "Que signifie « ce que vous en ferez de vous, si » ?", kind: "inferencial", options: ["Le rite vous transforme, quel que soit le verdict de la salle", "La note finale dépend uniquement de vous", "Le jury décidera de votre vie entière"], answer: 0, why: "Lo que pase en la sala no depende solo de uno, pero lo que uno haga consigo mismo sí: se infiere la transformación interior del rito." },
        { q: "Quel est l'essentiel du rite, selon le texte ?", kind: "critica", options: ["Le rite transforme celui qui le franchit sereinement", "La note compte plus que tout", "Il faut courir pour être à l'heure"], answer: 0, why: "La idea: cruzar con serenidad ya es comprender que el umbral transforma." },
      ],
      vf: [
        { text: "Le seuil est un danger.", value: false, why: "«Le seuil n'est pas un danger, c'est une croissance»." },
        { text: "Ce qui se passera dans la salle ne dépend pas seulement de vous.", value: true, why: "Literal en el segundo párrafo." },
        { text: "La soutenance est un rite de passage.", value: true, why: "Primera idea del texto." },
      ],
    },
    {
      id: "md-fr-c1-12-2", theme: "relax mentale",
      title: "La dernière phrase", titleEs: "La última frase", minutes: 2,
      paragraphs: [
        { it: "Vous la connaissez par cœur, cette dernière phrase du mémoire — celle qui restera dans la salle pendant la délibération. L'esprit, lui, voudrait la répéter sans fin, puis répéter les répétitions. Le relax mental commence là : la phrase est prête ; l'esprit peut descendre de l'estrade et aller boire un verre d'eau.", es: "La conocéis de memoria, esa última frase de la memoria — la que quedará en la sala durante la deliberación. La mente, sin embargo, querría repetirla sin fin, y luego repetir las repeticiones. La relajación mental empieza ahí: la frase está lista; la mente puede bajar de la tarima e ir a beber un vaso de agua." },
        { it: "Une phrase préparée est comme une pierre posée : elle tient toute seule. Inutile de la regarder dix fois pour vérifier qu'elle ne bouge pas. Ce qui reste à faire — respirer, marcher, dormir — demande un esprit disponible, pas un esprit épuisé. La confiance n'est pas de croire que tout ira bien ; c'est de laisser la pierre posée.", es: "Una frase preparada es como una piedra posada: se sostiene sola. Inútil mirarla diez veces para comprobar que no se mueve. Lo que queda por hacer — respirar, caminar, dormir— pide una mente disponible, no una mente agotada. La confianza no consiste en creer que todo irá bien; consiste en dejar la piedra posada." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo terminar una tesis con estilo", "Dejar descansar la frase ya preparada y recuperar la mente", "Frases de cierre célebres"],
        answer: 1,
        why: "«La dernière frase» trata del descanso mental tras la preparación, no del estilo del cierre.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Une phrase préparée tient seule : laisser l'esprit se reposer", "Répéter la phrase jusqu'au dernier moment", "Changer de dernière phrase la veille"],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["L'esprit voudrait répéter les répétitions", "La phrase est comme une pierre posée", "La confiance, c'est de laisser la pierre posée"],
        distractors: ["La pierre doit être repeinte", "Il faut apprendre dix phrases par cœur", "Le verre d'eau est interdit avant une soutenance"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Vous connaissez la dernière phrase par cœur.",
          "L'esprit voudrait la répéter sans fin.",
          "La phrase est comme une pierre posée.",
          "Les pierres posées au bord des fenêtres empêchent les courants d'air.",
          "La confiance, c'est de laisser la pierre posée.",
        ],
        intruder: 3,
        why: "Las piedras de las ventanas son un remedio doméstico, ajeno a la metáfora de la frase preparada.",
      },
    },
    {
      id: "md-fr-c1-12-3", theme: "meditazione",
      title: "Pendant la délibération", titleEs: "Durante la deliberación", minutes: 2,
      paragraphs: [
        { it: "La porte s'est refermée sur le jury : la délibération commence, et vous voilà dans le couloir, avec pour tout compagnon le temps. C'est le moment le plus étrange de la soutenance — plus rien à dire, plus rien à prouver. Il ne reste qu'une pratique possible : être là, couloir, lumière, souffle.", es: "La puerta se ha cerrado sobre el jurado: comienza la deliberación y ahí estáis vosotros en el pasillo, con el tiempo por único acompañante. Es el momento más extraño de la defensa — nada que decir, nada que demostrar. Solo queda una práctica posible: estar ahí, pasillo, luz, aliento." },
        { it: "Respirez comme si vous lisiez une page que vous aimez : sans but, sans urgence. Le verdict viendra de l'autre côté de la porte, à son heure ; votre paix, elle, est de ce côté-ci, à la vôtre. Quand la porte s'ouvrira, vous entrerez d'un pas égal — et c'est cela, la vraie dernière phrase.", es: "Respirad como si leyerais una página que amáis: sin objetivo, sin prisa. El veredicto vendrá del otro lado de la puerta, a su hora; vuestra paz está en este lado, a la vuestra. Cuando la puerta se abra, entraréis con paso parejo — y eso es la verdadera última frase." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Qué decide el jurado tras la puerta", "Respirar en el pasillo mientras el jurado delibera", "Cómo celebrar la aprobación"],
        answer: 1,
        why: "«Pendant la délibération» centra el texto en la espera respirada, no en el veredicto.",
      },
      sequence: {
        instr: "Ordena los pasos según el texto:",
        events: ["La porte se referme sur le jury", "Vous restez dans le couloir avec le temps", "Vous respirez comme si vous lisiez une page aimée", "Votre paix reste de ce côté-ci de la porte", "Quand la porte s'ouvre, vous entrez d'un pas égal"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "La porte est fermée ; le jury délibère. Vous, vous êtes dans le couloir. Sentez le sol sous vos pieds, la longueur du couloir, la lumière tranquille. Inspirez comme si vous tourniez une page ; soufflez comme si vous la tourniez encore. Rien à prouver ici, rien à dire. Quand la porte s'ouvrira, vous entrerez calmement, d'un pas égal, tel quel.",
        questions: [
          { q: "Que fait le jury derrière la porte ?", kind: "literal", options: ["Il délibère", "Il téléphone", "Il dîne"], answer: 0, why: "«Le jury délibère»: literal." },
          { q: "Comment inspirez-vous ?", kind: "literal", options: ["Comme si vous tourniez une page", "Très fort", "En retenant le souffle"], answer: 0, why: "«Inspirez comme si vous tourniez une page»." },
          { q: "Que reste-t-il à faire dans le couloir ?", kind: "inferencial", options: ["Rien à prouver, rien à dire", "Répéter son exposé", "Écrire des remerciements"], answer: 0, why: "«Rien à prouver ici, rien à dire»: la espera es vacía de tareas." },
          { q: "Comment entrerez-vous quand la porte s'ouvrira ?", kind: "inferencial", options: ["Calme, d'un pas égal, tel quel", "En courant", "En s'excusant"], answer: 0, why: "«Vous entrerez calmement, d'un pas égal, tel quel»." },
        ],
      },
    },
  ],

};
