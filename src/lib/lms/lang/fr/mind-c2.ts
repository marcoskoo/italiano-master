import type { MindReading } from "../../cambridge-mind";

/* ═══ FR C2 · Mind readings (temáticas de conciencia) — 3 por unidad ══
   Metodología v9.13: 7 estrategias de comprensión lectora y de escucha,
   en français de France niveau C2 (essai réflexif, vouvoiement) con
   traducción española a la vista. Campos `.it` = français (lengua de
   estudio), `.es` = español. Estrategia por posición: L1 = predict +
   quiz (lit/inf/crít) + V/F ; L2 = predict + ideas + intruso ; L3 =
   predict + secuencia + escucha. Temas rotados (8/7/7/7/7): meditazione ·
   spiritualità · qui e ora · relax fisico · relax mentale. Anclaje suave
   a los 12 escenarios del curso C2 (atelier d'écriture, Maison de la
   Poésie, Point Virgule, club de lecture, Sommet de la Francophonie,
   La Fémis, meeting, traduction, lektorat, archives orales, ligue
   d'improvisation, remise des prix). Sin religión concreta, sin
   belicismos, sin cifras volátiles.                                    */

export const FR_MIND_C2: Record<string, MindReading[]> = {
  "fr-cu-c2-01": [
    {
      id: "md-fr-c2-01-1", theme: "meditazione",
      title: "La phrase qui respire", titleEs: "La frase que respira",
      minutes: 2,
      paragraphs: [
        { it: "Dans l'atelier d'écriture, on apprend à couper ; dans la méditation, on apprend le même geste. Les pensées arrivent comme des phrases trop longues : des subordonnées qui s'emboîtent, des adjectifs qui s'accumulent, des « je pense que » superflus. Vous pouvez observer chaque pensée, enlever l'ornement, garder ce que vous avez réellement vu — puis la laisser partir, allégée.", es: "En el taller de escritura se aprende a cortar; en la meditación se aprende el mismo gesto. Los pensamientos llegan como frases demasiado largas: subordinadas que se encajan unas en otras, adjetivos que se acumulan, «je pense que» superfluos. Podéis observar cada pensamiento, quitarle el adorno, guardar lo que visteis de verdad — y luego dejarlo partir, aligerado." },
        { it: "« Sans verbe, la phrase respire », dit l'animatrice ; sans commentaire, l'esprit respire aussi. Une ellipse, à l'intérieur, c'est une pensée nommée d'un mot et relâchée aussitôt. Vous n'êtes pas obligé de tout recopier ce que votre mémoire dicte : triez comme un éditeur, gardez le verbe, coupez le remplissage. La page intérieure y gagne la même cadence qu'une page écrite.", es: "«Sin verbo, la frase respira», dice la animadora; sin comentario, el espíritu también respira. Una elipsis, en el interior, es un pensamiento nombrado con una palabra y soltado enseguida. No estáis obligados a copiar todo lo que dicta vuestra memoria: seleccionad como un editor, guardad el verbo, cortad el relleno. La página interior gana así la misma cadencia que una página escrita." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de corrección de estilo", "Aplicar a los pensamientos el arte de cortar del escritor", "Técnicas para escribir más rápido"],
        answer: 1,
        why: "«La phrase qui respire» une el gesto del taller (cortar, la elipsis) con la mente: apunta a la meditación como edición interior, no a un manual.",
      },
      quiz: [
        { q: "À quoi les pensées sont-elles comparées ?", kind: "literal", options: ["À des phrases trop longues", "À des livres rares", "À des traductions"], answer: 0, why: "«Les pensées arrivent comme des phrases trop longues»: la comparación está literal al abrir el texto." },
        { q: "Que faites-vous de la pensée observée ?", kind: "inferencial", options: ["Vous enlevez l'ornement puis la laissez partir", "Vous la recopiez intégralement", "Vous la cachez dans un tiroir"], answer: 0, why: "«Enlever l'ornement, garder ce que vous avez vu, puis la laisser partir»: se infiere el gesto completo de la edición interior." },
        { q: "Quelle est l'idée maîtresse du texte ?", kind: "critica", options: ["Il faut écrire son journal chaque matin", "Méditer, c'est éditer : trier, alléger, relâcher", "Les phrases longues sont toujours mauvaises"], answer: 1, why: "El texto traslada el oficio del editor a la mente: observar, cortar el relleno y soltar — la meditación como edición." },
      ],
      vf: [
        { text: "Vous êtes obligé de recopier tout ce que votre mémoire dicte.", value: false, why: "«Vous n'êtes pas obligé de tout recopier»: la copia interior es justo lo que se suelta." },
        { text: "L'esprit respire quand il cesse de commenter.", value: true, why: "«Sans commentaire, l'esprit respire aussi»: el comentario es el que ahoga." },
        { text: "La page intérieure gagne une cadence comparable à celle d'une page écrite.", value: true, why: "Está literal en el cierre: la cadencia interior iguala a la de la página." },
      ],
    },
    {
      id: "md-fr-c2-01-2", theme: "qui e ora",
      title: "La page blanche, ce soir", titleEs: "La página en blanco, esta noche",
      minutes: 2,
      paragraphs: [
        { it: "La page blanche ne vous attaque pas : elle attend, voilà tout. Ce soir, dans l'arrière-salle de la librairie, le café refroidit dans les tasses et la lampe éclaire un rectangle de table exactement. Être ici, maintenant, devant cette page, avec ce froid dehors et ce bruit de rue : c'est déjà la séance entière. L'écriture viendra ou ne viendra pas ; la présence, elle, est à vous.", es: "La página en blanco no os ataca: espera, eso es todo. Esta noche, en la trastienda de la librería, el café se enfría en las tazas y la lámpara ilumina exactamente un rectángulo de mesa. Estar aquí, ahora, ante esta página, con este frío fuera y este ruido de calle: eso ya es la sesión entera. La escritura vendrá o no vendrá; la presencia, en cambio, es vuestra." },
        { it: "« L'essai ne sait pas ce qu'il va dire », rappelle la tradition de Montaigne ; la page blanche non plus ne le sait pas, et c'est sa noblesse. Inutile de fuir vers le paragraphe d'hier ni de courir vers la conclusion de demain : il y a une lampe, une table, un instant qui vous regarde. Commencez par décrire ce qui est là — le froid du café, la lumière, la main posée — et le présent vous prêtera le reste.", es: "«El ensayo no sabe lo que va a decir», recuerda la tradición de Montaigne; la página en blanco tampoco lo sabe, y esa es su nobleza. Inútil huir hacia el párrafo de ayer ni correr hacia la conclusión de mañana: hay una lámpara, una mesa, un instante que os mira. Empezad por describir lo que está ahí — el frío del café, la luz, la mano posada — y el presente os prestará el resto." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo vencer el miedo al papel en blanco con ejercicios", "Estar presente ante la página en blanco, sin huir del instante", "La historia del ensayo de Montaigne"],
        answer: 1,
        why: "El título sitúa la página en blanco «esta noche»: apunta a la presencia en el instante, no a trucos contra el bloqueo ni a historia literaria.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["La page blanche attend : être là, présent, est déjà la séance entière", "Il faut écrire très vite pour remplir la page", "Montaigne détestait les pages blanches"], mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Le café refroidit dans les tasses", "La lampe éclaire un rectangle de table", "Commencez par décrire ce qui est là"],
        distractors: ["L'atelier finit à vingt-deux heures précises", "Il faut écrire trois pages avant minuit", "La librairie vend des stylos plume"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "La page blanche ne vous attaque pas : elle attend.",
          "Le café refroidit dans les tasses et la lampe éclaire la table.",
          "L'écriture viendra ou ne viendra pas ; la présence est à vous.",
          "L'adhésion à l'atelier coûte douze euros par mois.",
          "Commencez par décrire ce qui est là, et le présent prêtera le reste.",
        ],
        intruder: 3,
        why: "El precio de la matrícula del taller es un dato logístico ajeno a la experiencia de la página en blanco: es el intruso.",
      },
    },
    {
      id: "md-fr-c2-01-3", theme: "relax fisico",
      title: "L'épaule du scripteur", titleEs: "El hombro del escribiente",
      minutes: 3,
      paragraphs: [
        { it: "Écrire à la main est un travail du corps, et le corps le dit à sa manière : l'épaule monte vers l'oreille, la mâchoire se ferme, le stylo se met à presser le papier comme si le papier allait se défendre. Rien de grave — simplement un corps qui croit protéger une phrase. Regardez-le faire, sans le gronder : la première étape du relâchement est de remarquer.", es: "Escribir a mano es un trabajo del cuerpo, y el cuerpo lo dice a su manera: el hombro sube hacia la oreja, la mandíbula se cierra, el bolígrafo empieza a presionar el papel como si el papel fuera a defenderse. Nada grave — simplemente un cuerpo que cree proteger una frase. Miradlo hacer, sin regañarlo: el primer paso de la distensión es advertirlo." },
        { it: "Puis, entre deux phrases, offrez-vous trente secondes : posez le stylo, laissez tomber l'épaule, ouvrez la mâchoire, respirez une fois comme on tourne une page. La main se souvient qu'elle peut être légère ; le poignet redescend ; et la phrase suivante arrive plus nette, sans que vous ayez forcé. Le texte continue, le corps reste habitable — c'est la seule condition durable de l'écriture.", es: "Luego, entre dos frases, regalaos treinta segundos: dejad el bolígrafo, dejad caer el hombro, abrid la mandíbula, respirad una vez como quien pasa una página. La mano recuerda que puede ser ligera; la muñeca baja; y la frase siguiente llega más nítida, sin que hayáis forzado. El texto continúa, el cuerpo permanece habitable — es la única condición duradera de la escritura." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Ergonomía de oficina para escritores profesionales", "Soltar la tensión física de quien escribe a mano", "La caligrafía elegante paso a paso"],
        answer: 1,
        why: "«L'épaule du scripteur» apunta a la tensión física de escribir a mano, no a la ergonomía de escritorio ni a la caligrafía.",
      },
      sequence: {
        instr: "Ordena los pasos según el texto:",
        events: [
          "Vous remarquez que l'épaule monte vers l'oreille",
          "Vous posez le stylo entre deux phrases",
          "Vous laissez tomber l'épaule et ouvrez la mâchoire",
          "Vous respirez une fois comme on tourne une page",
          "La phrase suivante arrive plus nette",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Avant de reprendre l'écriture, installez votre corps de scripteur : les deux pieds au sol, l'épaule droite basse, puis l'épaule gauche. Ouvrez la mâchoire un instant. Le stylo repose entre deux doigts, sans presser. Respirez une fois longuement. À chaque page, vous répéterez ce petit geste, et la main restera légère jusqu'à la dernière ligne.",
        questions: [
          { q: "Où posez-vous vos pieds ?", kind: "literal", options: ["Au sol", "Sur une chaise", "Sur un tabouret"], answer: 0, why: "«Les deux pieds au sol» está literal en el audio." },
          { q: "Que fait le stylo entre les doigts ?", kind: "literal", options: ["Il repose sans presser", "Il presse fort", "Il roule sur la table"], answer: 0, why: "«Le stylo repose entre deux doigts, sans presser»." },
          { q: "Quand répétez-vous le geste ?", kind: "inferencial", options: ["À chaque page", "Une seule fois par jour", "Toutes les dix secondes"], answer: 0, why: "«À chaque page, vous répéterez ce petit geste»: se infiere la cadencia." },
          { q: "Quel est le but de l'exercice ?", kind: "inferencial", options: ["Garder la main légère jusqu'à la fin", "Écrire plus vite", "Changer de stylo"], answer: 0, why: "«La main restera légère jusqu'à la dernière ligne»: el propósito cierra el audio." },
        ],
      },
    },
  ],

  "fr-cu-c2-02": [
    {
      id: "md-fr-c2-02-1", theme: "spiritualità",
      title: "Compter comme une litanie", titleEs: "Contar como una letanía",
      minutes: 3,
      paragraphs: [
        { it: "Compter des syllabes, lentement, une à une, sans rien attendre d'autre : c'est une litanie laïque. Les traditions de sagesse ont toujours utilisé le retour régulier — un souffle, un mot, un grain — pour apprivoiser l'esprit qui saute. Le compte des vers fait la même chose : « Sois sage, ô ma Douleur » : un, deux, trois ; l'attention revient à chaque syllabe comme la main revient au grain.", es: "Contar sílabas, despacio, una a una, sin esperar nada más: es una letanía laica. Las tradiciones de sabiduría siempre usaron el retorno regular — un aliento, una palabra, un grano — para amansar al espíritu que salta. El conteo de los versos hace lo mismo: «Sois sage, ô ma Douleur»: uno, dos, tres; la atención vuelve a cada sílaba como la mano vuelve al grano." },
        { it: "Il y a dans ce geste une humilité ancienne : avant l'émotion, le nombre ; avant le poème, la patience. Vous ne comptez pas pour juger le vers, vous comptez pour rester — rester avec la phrase, avec le souffle, avec cette heure de votre vie qui passe en douceur. La régularité n'emprisonne pas : elle soutient. Ceux qui récitent depuis toujours le savent : c'est la répétition qui finit par libérer.", es: "Hay en ese gesto una humildad antigua: antes que la emoción, el número; antes que el poema, la paciencia. No contáis para juzgar el verso, contáis para permanecer — permanecer con la frase, con el aliento, con esta hora de vuestra vida que pasa suavemente. La regularidad no aprisiona: sostiene. Quienes recitan desde siempre lo saben: es la repetición la que acaba liberando." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso acelerado de métrica francesa", "Contar sílabas como práctica contemplativa de retorno", "Las letanías religiosas del medievo"],
        answer: 1,
        why: "«Compter comme une litanie» une el conteo silábico con el retorno contemplativo: la métrica como práctica, no como examen.",
      },
      quiz: [
        { q: "Que font les traditions de sagesse, selon le texte ?", kind: "literal", options: ["Elles utilisent le retour régulier pour apprivoiser l'esprit", "Elles interdisent la poésie", "Elles comptent les pages des livres"], answer: 0, why: "«Les traditions de sagesse ont toujours utilisé le retour régulier» está literal en el primer párrafo." },
        { q: "Pourquoi comptez-vous les syllabes ?", kind: "inferencial", options: ["Pour rester avec la phrase et le souffle", "Pour juger la qualité du vers", "Pour finir le poème plus vite"], answer: 0, why: "«Vous ne comptez pas pour juger le vers, vous comptez pour rester»: el propósito es permanecer." },
        { q: "Quelle leçon le texte tire-t-il de la répétition ?", kind: "critica", options: ["La répétition est une prison dont il faut fuir", "La régularité soutient : c'est la répétition qui libère", "Il faut éviter tout retour dans la vie"], answer: 1, why: "«La régularité n'emprisonne pas : elle soutient» y «c'est la répétition qui finit par libérer»: la idea central del texto." },
      ],
      vf: [
        { text: "L'attention revient à chaque syllabe comme la main revient au grain.", value: true, why: "La comparación del grano está literal en el primer párrafo." },
        { text: "On compte les syllabes pour juger le vers plus sévèrement.", value: false, why: "«Vous ne comptez pas pour juger le vers»: se cuenta para permanecer, no para sancionar." },
        { text: "La régularité emprisonne l'esprit.", value: false, why: "Al contrario: «La régularité n'emprisonne pas : elle soutient»." },
      ],
    },
    {
      id: "md-fr-c2-02-2", theme: "relax mentale",
      title: "Le vers qui boite", titleEs: "El verso que cojea",
      minutes: 2,
      paragraphs: [
        { it: "Verlaine préférait le vers impair, celui qui boite légèrement ; la vie mentale, elle aussi, avance en boitant. Vous voulez un esprit régulier, des journées égales, une respiration parfaite — et l'esprit revient toujours avec son petit défaut, sa syllabe de trop ou sa syllabe manquante. Le relâchement commence exactement là : arrêtez de corriger la boiterie, marchez avec elle.", es: "Verlaine prefería el verso impar, el que cojea ligeramente; la vida mental también avanza cojeando. Queréis un espíritu regular, días iguales, una respiración perfecta — y el espíritu vuelve siempre con su pequeño defecto, su sílaba de más o su sílaba de menos. La distensión empieza exactamente ahí: dejad de corregir la cojera, caminad con ella." },
        { it: "Un esprit détendu n'est pas un esprit sans fausse note : c'est un esprit qui ne s'arrête pas sur chaque pierre. Le vers impair touche le cœur, disait la professeure, parce qu'il se déséquilibre à dessein ; votre journée, elle aussi, gagne à perdre l'équilibre parfait. Ce que vous nommez distraction est peut-être une respiration du texte intérieur. Accueillez la clause boiteuse : elle fait partie du poème.", es: "Un espíritu distendido no es un espíritu sin nota falsa: es un espíritu que no se detiene en cada piedra. El verso impar toca el corazón, decía la profesora, porque se desequilibra a propósito; vuestro día también gana con perder el equilibrio perfecto. Lo que llamáis distracción es quizá una respiración del texto interior. Acoged la cláusula coja: forma parte del poema." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo escribir versos impares correctos", "Aceptar la imperfección del propio espíritu, como el verso que cojea", "La biografía de Verlaine"],
        answer: 1,
        why: "El título toma el «vers qui boite» de Verlaine como metáfora: apunta a aceptar la cojera mental, no a la técnica poética.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Il faut corriger chaque fausse note de l'esprit", "Accepter la boiterie de l'esprit : elle fait partie du poème", "Verlaine écrivait mal ses vers"], mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["L'esprit revient toujours avec son petit défaut", "Un esprit détendu ne s'arrête pas sur chaque pierre", "Ce que vous nommez distraction est peut-être une respiration"],
        distractors: ["La professeure interdit les vers pairs", "Il faut méditer exactement douze minutes", "Verlaine a vendu peu de livres de son vivant"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "L'esprit revient toujours avec sa syllabe de trop ou sa syllabe manquante.",
          "Le relâchement commence quand on arrête de corriger la boiterie.",
          "Un esprit détendu ne s'arrête pas sur chaque pierre.",
          "Le séminaire de la Maison de la Poésie ouvre à dix-neuf heures.",
          "Accueillez la clause boiteuse : elle fait partie du poème.",
        ],
        intruder: 3,
        why: "El horario de apertura del seminario es un dato logístico ajeno a la metáfora del verso cojo: es el intruso.",
      },
    },
    {
      id: "md-fr-c2-02-3", theme: "meditazione",
      title: "Douze syllabes, un souffle", titleEs: "Doce sílabas, un soplo",
      minutes: 3,
      paragraphs: [
        { it: "L'alexandrin respire au milieu : six syllabes, une pause, six syllabes. Votre respiration peut apprendre de lui. Sans livre, assis droit, vous comptez intérieurement jusqu'à six sur l'inspiration, vous marquez la césure — un instant de rien — puis six encore sur l'expiration. Le vers vous prête son architecture ; vous lui prêtez votre souffle.", es: "El alejandrino respira en el medio: seis sílabas, una pausa, seis sílabas. Vuestra respiración puede aprender de él. Sin libro, sentados rectos, contáis interiormente hasta seis en la inspiración, marcáis la cesura — un instante de nada — y luego seis más en la espiración. El verso os presta su arquitectura; vosotros le prestáis vuestro aliento." },
        { it: "Au bout de quelques passages, la césure devient un lieu connu : ce petit silence au centre où rien ne manque. Les pensées passent comme des rimes, l'une après l'autre, sans s'accrocher. Vous n'avez rien à composer ce soir ; vous êtes le vers, compté, coupé, respiré. Et quand le souffle revient tout seul à son rythme, la séance est finie — douze temps, un souffle, et le silence après.", es: "Al cabo de algunos pasajes, la cesura se vuelve un lugar conocido: ese pequeño silencio en el centro donde no falta nada. Los pensamientos pasan como rimas, uno tras otro, sin engancharse. No tenéis nada que componer esta noche; sois el verso, contado, cortado, respirado. Y cuando el aliento vuelve solo a su ritmo, la sesión termina — doce tiempos, un soplo, y el silencio después." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un análisis del alejandrino en Baudelaire", "Usar la estructura del alejandrino como pauta de respiración meditativa", "Un ejercicio de canto lírico"],
        answer: 1,
        why: "«Douze syllabes, un souffle» propone contar la respiración con la arquitectura del verso: práctica personal, no análisis literario.",
      },
      sequence: {
        instr: "Ordena los pasos de la práctica según el texto:",
        events: [
          "Vous vous asseyez droit, sans livre",
          "Vous comptez intérieurement jusqu'à six sur l'inspiration",
          "Vous marquez la césure, un instant de rien",
          "Vous comptez six sur l'expiration",
          "Le souffle revient tout seul à son rythme, la séance est finie",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Installez-vous pour le souffle de l'alexandrin. Inspirez sur six temps, doucement, sans forcer la gorge. Marquez la césure : un petit silence au milieu, où rien ne manque. Puis expirez sur six temps encore. Répétez trois passages, et laissez ensuite la respiration revenir à son rythme ordinaire. Douze temps, un souffle : le vers s'occupe de vous.",
        questions: [
          { q: "Combien de temps dure l'inspiration ?", kind: "literal", options: ["Six temps", "Douze temps", "Trois temps"], answer: 0, why: "«Inspirez sur six temps» está literal en el audio." },
          { q: "Où se place la césure ?", kind: "literal", options: ["Au milieu, entre inspiration et expiration", "À la fin seulement", "Avant l'inspiration"], answer: 0, why: "«Un petit silence au milieu»: la césura divide los dos hemistiquios." },
          { q: "Que faites-vous après les trois passages ?", kind: "inferencial", options: ["Vous laissez la respiration revenir à son rythme", "Vous recommencez trente fois", "Vous retenez votre souffle"], answer: 0, why: "«Laissez ensuite la respiration revenir à son rythme ordinaire»: se infiere el cierre de la práctica." },
          { q: "Que signifie « le vers s'occupe de vous » ?", kind: "inferencial", options: ["La structure du vers guide et soutient votre souffle", "Le vers vous écrit un poème", "Vous devez réciter à voix haute"], answer: 0, why: "La arquitectura del verso guía la práctica: el verso se ocupa de vosotros, no al revés." },
        ],
      },
    },
  ],

  "fr-cu-c2-03": [
    {
      id: "md-fr-c2-03-1", theme: "qui e ora",
      title: "Rire, ici et maintenant", titleEs: "Reír, aquí y ahora",
      minutes: 2,
      paragraphs: [
        { it: "Le rire ne se prévoit pas : il arrive, ici et maintenant, dans un corps qui n'y pensait pas une seconde plus tôt. C'est sa noblesse — il vous rend présent d'un coup, sans préparation. Dans la salle du café-théâtre, quand la chute tombe, trois cents personnes quittent leurs soucis au même instant : plus de hier, plus de demain, une phrase, un silence, et le présent qui éclate de rire.", es: "La risa no se prevé: llega, aquí y ahora, en un cuerpo que no pensaba en ella un segundo antes. Esa es su nobleza — os vuelve presentes de golpe, sin preparación. En la sala del café-teatro, cuando cae el remate, trescientas personas abandonan sus preocupaciones en el mismo instante: ni ayer, ni mañana, una frase, un silencio, y el presente que estalla en risa." },
        { it: "On peut cultiver cette qualité du rire : rire de soi, doucement, au moment exact où l'on se prend au sérieux. Le second degré est une leçon de présence — entendre le double sens d'une phrase, c'est être tout entier dans les mots qui sonnent. Essayez ce soir : notez l'instant précis où le rire monte, ce qui l'a déclenché, la demi-seconde de suspension avant. C'est une méditation à trois temps : la phrase, le silence, le rire.", es: "Se puede cultivar esa cualidad de la risa: reírse de uno mismo, suavemente, en el momento exacto en que uno se toma en serio. El second degré es una lección de presencia — oír el doble sentido de una frase es estar entero en las palabras que suenan. Probad esta noche: anotad el instante preciso en que sube la risa, qué la desencadenó, el medio segundo de suspensión anterior. Es una meditación en tres tiempos: la frase, el silencio, la risa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo escribir chistes para one-man-show", "La risa como experiencia de presencia plena", "La historia del café-théâtre parisino"],
        answer: 1,
        why: "«Rire, ici et maintenant» señala la risa como experiencia del presente, no como técnica de escritura ni historia del género.",
      },
      quiz: [
        { q: "Que font les trois cents personnes quand la chute tombe ?", kind: "literal", options: ["Elles quittent leurs soucis au même instant", "Elles quittent la salle", "Elles écrivent des blagues"], answer: 0, why: "«Trois cents personnes quittent leurs soucis au même instant» está literal en el primer párrafo." },
        { q: "Quand rire de soi, selon le texte ?", kind: "inferencial", options: ["Au moment exact où l'on se prend au sérieux", "Uniquement devant un miroir", "Quand les autres se moquent"], answer: 0, why: "«Rire de soi, doucement, au moment exact où l'on se prend au sérieux»: se infiere el instante indicado." },
        { q: "Pourquoi le second degré est-il une leçon de présence ?", kind: "critica", options: ["Parce qu'entendre le double sens demande d'être tout entier dans les mots", "Parce qu'il faut mémoriser les blagues", "Parce qu'il détourne l'attention"], answer: 0, why: "«Entendre le double sens, c'est être tout entier dans les mots qui sonnent»: la idea crítica del texto." },
      ],
      vf: [
        { text: "Le rire se prévoit longuement à l'avance.", value: false, why: "«Le rire ne se prévoit pas : il arrive»: llega sin preparación." },
        { text: "Le texte propose une méditation en trois temps : la phrase, le silence, le rire.", value: true, why: "Está literal en el cierre del segundo párrafo." },
        { text: "Rire de soi est présenté comme une faiblesse.", value: false, why: "Al contrario: reírse de uno mismo es la cualidad que se cultiva, con suavidad." },
      ],
    },
    {
      id: "md-fr-c2-03-2", theme: "relax fisico",
      title: "Le diaphragme du rieur", titleEs: "El diafragma del que ríe",
      minutes: 3,
      paragraphs: [
        { it: "Le bon rire est un travail du corps : le diaphragme pompe, les épaules s'envolent, les yeux se ferment, la respiration s'organise en vagues. Après trois minutes de rire franc, le dos s'est déroulé sans que personne ne l'ait demandé. Les humoristes le savent : on ne rit bien que debout, ou assis très droit — le corps plié en deux ne rime avec rien.", es: "La buena risa es un trabajo del cuerpo: el diafragma bombea, los hombros se disparan, los ojos se cierran, la respiración se organiza en olas. Después de tres minutos de risa franca, la espalda se ha desenrollado sin que nadie lo pidiera. Los humoristas lo saben: solo se ríe bien de pie, o sentado muy recto — el cuerpo plegado en dos no rima con nada." },
        { it: "Offrez-vous donc un échauffement de rieur : trois soupirs exagérés, un sourire tenu dix secondes, puis un « ha » prolongé, comme un accordéon qui démarre. Le visage s'échauffe, la mâchoire se desserre, et le corps se souvient d'un état qu'il connaissait avant toute technique. Vous n'avez besoin de personne pour cet exercice — mais si le rire vrai arrive, ne le coupez pas : il fait le relâchement mieux que toute consigne.", es: "Regalaos pues un calentamiento de risueño: tres suspiros exagerados, una sonrisa sostenida diez segundos, y luego un «ha» prolongado, como un acordeón que arranca. La cara se calienta, la mandíbula se afloja, y el cuerpo recuerda un estado que conocía antes de toda técnica. No necesitáis a nadie para este ejercicio — pero si llega la risa verdadera, no la cortéis: hace la distensión mejor que cualquier consigna." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Anatomía del aparato respiratorio", "El cuerpo que ríe y un calentamiento físico para reír mejor", "Cómo reír en público sin ruborizarse"],
        answer: 1,
        why: "«Le diaphragme du rieur» apunta a la fisiología del reír y su calentamiento, no a la anatomía académica ni a la timidez.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Le rire est un travail du corps qui relâche mieux que toute consigne", "Il faut méditer en silence pour se détendre", "Les humoristes ne rient jamais"], mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Après trois minutes de rire, le dos s'est déroulé", "On ne rit bien que debout ou assis très droit", "Un sourire tenu dix secondes échauffe le visage"],
        distractors: ["Le rire brûle deux cents calories par minute", "Les cours d'humour coûtent quinze euros", "Il faut rire exactement à minuit"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Le diaphragme pompe et la respiration s'organise en vagues.",
          "On ne rit bien que debout, ou assis très droit.",
          "Trois soupirs exagérés échauffent le rieur.",
          "Le café-théâtre du Point Virgule se remplit tous les vendredis.",
          "Si le rire vrai arrive, ne le coupez pas.",
        ],
        intruder: 3,
        why: "La afluencia del café-teatro es un dato logístico del local, ajeno al cuerpo que ríe: es el intruso.",
      },
    },
    {
      id: "md-fr-c2-03-3", theme: "meditazione",
      title: "Ne pas se prendre au sérieux", titleEs: "No tomarse en serio",
      minutes: 3,
      paragraphs: [
        { it: "La première loi du one-man-show français est une loi spirituelle : commencer par soi-même. Celui qui se moque des autres avant de s'être moqué de lui-même n'a rien compris au pacte de la salle ; celui qui rit de ses propres chutes, au contraire, désarme tout le monde. La méditation fait le même chemin : observez votre gravité, vos certitudes, la cape sérieuse que vous portez — puis regardez-la flotter une seconde, comme un costume trop grand.", es: "La primera ley del one-man-show francés es una ley espiritual: empezar por uno mismo. Quien se burla de los demás antes de haberse burlado de sí mismo no ha entendido nada del pacto de la sala; quien ríe de sus propias caídas, al contrario, desarma a todo el mundo. La meditación recorre el mismo camino: observad vuestra gravedad, vuestras certezas, la capa seria que lleváis — y luego miradla flotar un segundo, como un traje demasiado grande." },
        { it: "Cela ne veut pas dire se mépriser : le second degré sur soi est une affection, pas une punition. Vous regardez l'acteur intérieur qui joue « l'homme important » ou « la victime du siècle », vous saluez sa performance, et vous ne lui donnez plus la réplique. Peu à peu, la cape tombe, et ce qui reste — plus léger, plus drôle, plus habitable — c'est vous. L'humour, disaient les moralistes, est la politesse du désespoir ; il est aussi la politesse de la sagesse.", es: "Eso no significa despreciarse: el second degré sobre uno mismo es un afecto, no un castigo. Miráis al actor interior que representa «al hombre importante» o «a la víctima del siglo», saludáis su actuación, y no le dais más la réplica. Poco a poco, la capa cae, y lo que queda — más ligero, más divertido, más habitable — sois vosotros. El humor, decían los moralistas, es la cortesía de la desesperación; también es la cortesía de la sabiduría." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo ganar un concurso de humor", "La autoderisión como camino de sabiduría y ligereza interior", "Por qué hay que evitar el humor negro"],
        answer: 1,
        why: "«Ne pas se prendre au sérieux» apunta a la autoderisión benévola con uno mismo, no a competir ni a vetar estilos.",
      },
      sequence: {
        instr: "Ordena los pasos según el texto:",
        events: [
          "Vous observez votre gravité et vos certitudes",
          "Vous regardez la cape sérieuse flotter comme un costume trop grand",
          "Vous regardez l'acteur intérieur jouer « l'homme important »",
          "Vous saluez sa performance sans lui donner la réplique",
          "La cape tombe : reste quelqu'un de plus léger et habitable",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Ce soir, avant de dormir, rencontrez l'acteur intérieur. Il joue un rôle très sérieux : l'expert, la victime, l'homme pressé. Regardez-le jouer une minute entière, sans juger. Puis applaudissez doucement, à l'intérieur, comme au théâtre. Ne lui donnez pas la réplique. Il s'inclinera, il rangera son costume, et vous resterez seul avec vous-même — c'est-à-dire, enfin, en bonne compagnie.",
        questions: [
          { q: "Que joue l'acteur intérieur ?", kind: "literal", options: ["Un rôle très sérieux", "Une comédie légère", "Un silence"], answer: 0, why: "«Il joue un rôle très sérieux : l'expert, la victime, l'homme pressé»." },
          { q: "Combien de temps le regardez-vous ?", kind: "literal", options: ["Une minute entière", "Une heure", "Trois secondes"], answer: 0, why: "«Regardez-le jouer une minute entière, sans juger»." },
          { q: "Que faites-vous après l'avoir regardé ?", kind: "inferencial", options: ["Vous applaudissez doucement, sans donner la réplique", "Vous le renvoyez avec colère", "Vous jouez son rôle à sa place"], answer: 0, why: "«Applaudissez doucement, à l'intérieur, sans lui donner la réplique»: se infiere el gesto benévolo." },
          { q: "Que reste-t-il quand l'acteur s'en va ?", kind: "inferencial", options: ["Vous-même, en bonne compagnie", "Un silence triste", "Un nouveau personnage"], answer: 0, why: "«Vous resterez seul avec vous-même — en bonne compagnie»: el propósito del ejercicio." },
        ],
      },
    },
  ],

  "fr-cu-c2-04": [
    {
      id: "md-fr-c2-04-1", theme: "relax mentale",
      title: "Deux voix dans la tête", titleEs: "Dos voces en la cabeza",
      minutes: 3,
      paragraphs: [
        { it: "Le discours indirect libre loge deux voix dans une seule phrase ; votre esprit fait de même, toute la journée. Une voix raconte — « il faisait chaud, la journée continuait » — et l'autre, au milieu du récit, s'exclame, s'inquiète, commente. Vous n'avez pas à choisir entre elles, ni à chasser la seconde à coups de guillemets. Le relâchement mental commence quand vous laissez les deux voix cohabiter, comme dans un roman bien écrit.", es: "El estilo indirecto libre aloja dos voces en una sola frase; vuestro espíritu hace lo mismo todo el día. Una voz narra — «hacía calor, el día continuaba» — y la otra, en medio del relato, exclama, se preocupa, comenta. No tenéis que elegir entre ellas, ni expulsar a la segunda a golpes de comillas. La distensión mental empieza cuando dejáis que las dos voces cohabiten, como en una novela bien escrita." },
        { it: "La pratique est simple : repérez, ce matin, la voix du narrateur et la voix du personnage. L'une dit « je traverse la cuisine » ; l'autre soupire « encore cette vaisselle ». N'écrasez ni l'une ni l'autre : écoutez le dialogue intérieur comme on lit une page, avec cette distance exacte qui permet d'entendre sans obéir. Peu à peu, le roman intérieur s'apaise — non parce qu'il se tait, mais parce qu'il s'écoute. Un esprit bien lu est un esprit détendu.", es: "La práctica es simple: localizad esta mañana la voz del narrador y la voz del personaje. Una dice «atravieso la cocina»; la otra suspira «otra vez estos platos». No aplastéis a ninguna: escuchad el diálogo interior como quien lee una página, con esa distancia exacta que permite oír sin obedecer. Poco a poco, la novela interior se aquieta — no porque se calle, sino porque se escucha. Un espíritu bien leído es un espíritu distendido." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un taller de escritura de novelas", "Acoger las dos voces interiores (narrador y personaje) sin expulsar ninguna", "Cómo silenciar por completo los pensamientos"],
        answer: 1,
        why: "«Deux voix dans la tête» toma la técnica del discours indirect libre como metáfora de la mente: acoger, no silenciar.",
      },
      quiz: [
        { q: "Que fait l'autre voix, celle du personnage ?", kind: "literal", options: ["Elle soupire « encore cette vaisselle »", "Elle traverse la cuisine", "Elle écrit un roman"], answer: 0, why: "«L'autre soupire “encore cette vaisselle””: la voz del personaje está literal en el segundo párrafo." },
        { q: "Que signifie « entendre sans obéir » ?", kind: "inferencial", options: ["Écouter le dialogue intérieur avec une distance exacte", "Faire semblant d'écouter", "Obéir à la voix la plus forte"], answer: 0, why: "«Cette distance exacte qui permet d'entendre sans obéir»: se infiere la escucha ecuánime, ni sumisa ni represora." },
        { q: "Pourquoi le roman intérieur s'apaise-t-il, selon le texte ?", kind: "critica", options: ["Parce qu'on l'écrase sous les guillemets", "Parce qu'on l'oublie volontairement", "Parce qu'il s'écoute, non parce qu'il se tait"], answer: 2, why: "«Non parce qu'il se tait, mais parce qu'il s'écoute»: la idea central — la escucha serena aquieta." },
      ],
      vf: [
        { text: "Vous devez chasser la seconde voix à coups de guillemets.", value: false, why: "«Ni à chasser la seconde à coups de guillemets»: las dos voces cohabitan como en una novela bien escrita." },
        { text: "Le relâchement mental commence quand les deux voix cohabitent.", value: true, why: "«Le relâchement mental commence quand vous laissez les deux voix cohabiter»." },
        { text: "Un esprit bien lu est un esprit détendu.", value: true, why: "Es la frase literal que cierra el texto." },
      ],
    },
    {
      id: "md-fr-c2-04-2", theme: "spiritualità",
      title: "La mémoire des anonymes", titleEs: "La memoria de los anónimos",
      minutes: 3,
      paragraphs: [
        { it: "Annie Ernaux a écrit la mémoire des gens ordinaires — les robes d'un été, les chansons d'une radio, les gestes d'une cuisine. Cette attention est une forme de gratitude : rendre au monde ce que le monde a laissé passer. Il y a une pratique spirituelle là-dedans, sans dogme aucun : remarquer ce que personne ne remarque, nommer ce qui allait disparaître sans témoin.", es: "Annie Ernaux escribió la memoria de la gente corriente — los vestidos de un verano, las canciones de una radio, los gestos de una cocina. Esa atención es una forma de gratitud: devolverle al mundo lo que el mundo dejó pasar. Hay una práctica espiritual ahí dentro, sin dogma alguno: advertir lo que nadie advierte, nombrar lo que iba a desaparecer sin testigo." },
        { it: "Ce soir, essayez le « on » d'Ernaux : non pas « je me souviens », mais « on portait », « on écoutait », « on se taisait ». Ce pronom ouvre une mémoire collective où vos propres matins trouvent leur place, à côté de ceux des inconnus. Vous n'êtes plus seul dans la scène : vous êtes un parmi d'autres, et c'est un repos. La gratitude n'a pas besoin de grands mots ; il lui suffit d'un objet exact, d'une date commune, d'un souvenir partagé avec des gens que vous ne connaîtrez jamais.", es: "Esta noche, probad el «on» de Ernaux: no «je me souviens», sino «on portait», «on écoutait», «on se taisait». Ese pronombre abre una memoria colectiva donde vuestros propios amaneceres encuentran su sitio, junto a los de los desconocidos. Ya no estáis solos en la escena: sois uno entre otros, y eso es un descanso. La gratitud no necesita grandes palabras; le basta un objeto exacto, una fecha común, un recuerdo compartido con gente que nunca conoceréis." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una biografía completa de Annie Ernaux", "Prestar atención a lo anónimo como práctica de gratitud compartida", "Cómo coleccionar objetos antiguos"],
        answer: 1,
        why: "«La mémoire des anonymes» parte de Ernaux para proponer una práctica: nombrar lo común, no contar una vida ni coleccionar.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Remarquer ce que personne ne remarque est une pratique de gratitude, sans dogme", "Annie Ernaux a écrit pour devenir célèbre", "Il faut écrire ses mémoires en trois volumes"], mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["L'attention d'Ernaux rend au monde ce que le monde a laissé passer", "Le pronom « on » ouvre une mémoire collective", "Être « un parmi d'autres » est un repos"],
        distractors: ["La librairie de Lyon ferme à vingt heures le jeudi", "Ernaux écrivait toujours à la plume", "Il faut garder un journal intime chaque nuit"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Annie Ernaux a écrit la mémoire des gens ordinaires.",
          "Cette attention est une forme de gratitude : rendre au monde ce que le monde a laissé passer.",
          "Il y a une pratique spirituelle là-dedans, sans dogme aucun.",
          "Le club de lecture de Lyon vote à main levée pour son roman préféré.",
          "La gratitude n'a pas besoin de grands mots.",
        ],
        intruder: 3,
        why: "La votación del club de lectura es un dato logístico de la librería de Lyon, ajeno a la práctica de gratitud: es el intruso.",
      },
    },
    {
      id: "md-fr-c2-04-3", theme: "qui e ora",
      title: "Habiter une phrase", titleEs: "Habitar una frase",
      minutes: 2,
      paragraphs: [
        { it: "Lire un roman, c'est déménager : on quitte sa chambre pour une phrase, on s'installe dans un paysage, on prend l'habitude d'un personnage. La pleine présence en lecture est ce déménagement accompli — la page a un poids, la lumière du récit a une couleur, et le temps qui passe n'est plus le vôtre. Descendre dans le texte, phrase après phrase, comme on marche dans une ville inconnue : voilà la pratique.", es: "Leer una novela es mudarse: se abandona la propia habitación por una frase, se instala uno en un paisaje, se toma la costumbre de un personaje. La plena presencia en la lectura es esa mudanza consumada — la página tiene un peso, la luz del relato tiene un color, y el tiempo que pasa ya no es el vuestro. Descender en el texto, frase a frase, como quien camina por una ciudad desconocida: esa es la práctica." },
        { it: "Quand l'esprit saute vers la fin du chapitre, ramenez-le au mot que vous lisez, comme on ramène un chien en laisse dans la bonne rue. Le club de lecture attendra ; la conclusion attendra ; il y a un adjectif, une virgule, un silence typographique qui mérite votre visite entière. Lire lentement n'est pas perdre du temps : c'est le seul moyen d'habiter. Et un lecteur qui habite n'a plus besoin de finir vite — il est déjà là.", es: "Cuando el espíritu salta hacia el final del capítulo, devolvedlo a la palabra que estáis leyendo, como quien devuelve con la correa al perro a la calle buena. El club de lectura esperará; la conclusión esperará; hay un adjetivo, una coma, un silencio tipográfico que merece vuestra visita entera. Leer despacio no es perder el tiempo: es la única manera de habitar. Y un lector que habita ya no necesita terminar deprisa — ya está allí." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo elegir buenas novelas", "Leer con plena presencia, habitando cada frase como una casa", "Técnicas de lectura rápida"],
        answer: 1,
        why: "«Habiter une phrase» propone la lectura como mudanza y permanencia: presencia, no selección ni velocidad.",
      },
      sequence: {
        instr: "Ordena los pasos según el texto:",
        events: [
          "Vous quittez votre chambre pour une phrase",
          "Vous vous installez dans un paysage du récit",
          "L'esprit saute vers la fin du chapitre",
          "Vous ramenez l'attention au mot que vous lisez",
          "Vous habitez le texte, sans besoin de finir vite",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Ce soir, prenez une seule page de votre roman. Installez votre respiration sur le rythme des phrases. Quand l'esprit saute vers la fin, dites-lui doucement : pas encore. Revenez à la ligne en cours, au mot en cours. Trois fois de suite, vous recommencerez ce retour. Puis vous fermerez le livre, et vous garderez une phrase avec vous, comme la clé d'une maison habitée.",
        questions: [
          { q: "Combien de pages lisez-vous ce soir ?", kind: "literal", options: ["Une seule", "Trente", "Aucune"], answer: 0, why: "«Prenez une seule page de votre roman» está literal en el audio." },
          { q: "Que dites-vous à l'esprit qui saute vers la fin ?", kind: "literal", options: ["Pas encore", "Dépêche-toi", "Fermions le livre"], answer: 0, why: "«Dites-lui doucement : pas encore»." },
          { q: "Combien de fois recommencez-vous le retour ?", kind: "literal", options: ["Trois fois de suite", "Cent fois", "Jamais"], answer: 0, why: "«Trois fois de suite, vous recommencerez ce retour»." },
          { q: "Que gardez-vous en fermant le livre ?", kind: "inferencial", options: ["Une phrase, comme la clé d'une maison habitée", "Un résumé complet", "Une liste de personnages"], answer: 0, why: "La frase guardada como llave de una casa: se infiere del cierre del audio." },
        ],
      },
    },
  ],

  "fr-cu-c2-05": [
    {
      id: "md-fr-c2-05-1", theme: "relax fisico",
      title: "Le dos de la délégation", titleEs: "La espalda de la delegación",
      minutes: 3,
      paragraphs: [
        { it: "Après trois heures de négociation, le dos d'une délégation en sait plus long que son communiqué : les épaules montent vers les oreilles, la nuque se ferme, chaque virgule disputée s'installe entre deux cervicales. Le corps prend la négociation au sérieux, même quand la phrase est un pur exercice de style. Rien de grave — mais le dos mérite mieux qu'un paragraphe signable : il mérite une pause.", es: "Después de tres horas de negociación, la espalda de una delegación sabe más que su comunicado: los hombros suben hacia las orejas, la nuca se cierra, cada coma discutida se instala entre dos vértebras cervicales. El cuerpo se toma la negociación en serio, incluso cuando la frase es puro ejercicio de estilo. Nada grave — pero la espalda merece algo mejor que un párrafo firmable: merece una pausa." },
        { it: "Entre deux chapitres, donc, le geste du diplomate : assis bien droit, laissez les épaules redescendre d'un centimètre, ouvrez les mains sur la table, expirez comme si le paragraphe trois venait d'être signé. Deux respirations suffisent — la salle ne remarquera rien, sauf peut-être que votre voix est revenue plus posée. Et c'est exactement ainsi qu'un dos tient toute une journée de sommet : en se souvenant, chapitre après chapitre, qu'il existe.", es: "Entre dos capítulos, pues, el gesto del diplomático: sentado bien recto, dejad que los hombros bajen un centímetro, abrid las manos sobre la mesa, exhalad como si el capítulo tres acabara de firmarse. Dos respiraciones bastan — la sala no notará nada, salvo quizá que vuestra voz ha vuelto más serena. Y es exactamente así como una espalda aguanta una jornada entera de cumbre: recordando, capítulo tras capítulo, que existe." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Protocolo de postura en reuniones oficiales", "Cuidar la espalda durante una larga jornada de negociación", "Cómo firmar documentos sin dolor de muñeca"],
        answer: 1,
        why: "«Le dos de la délégation» sitúa la tensión física en plena cumbre: pausas corporales entre capítulos, no protocolo ni burocracia.",
      },
      quiz: [
        { q: "Où les virgules disputées s'installent-elles, image à l'appui ?", kind: "literal", options: ["Entre deux cervicales", "Dans les poches", "Sur la table"], answer: 0, why: "«Chaque virgule disputée s'installe entre deux cervicales»: la imagen está literal en el primer párrafo." },
        { q: "Qu'advient-il de la voix après les deux respirations ?", kind: "inferencial", options: ["Elle revient plus posée", "Elle devient plus forte", "Elle disparaît"], answer: 0, why: "«La salle ne remarquera rien, sauf peut-être que votre voix est revenue plus posée»: se infiere el efecto." },
        { q: "Comment un dos tient-il toute une journée de sommet ?", kind: "critica", options: ["En se souvenant, chapitre après chapitre, qu'il existe", "En contractant davantage les épaules", "En évitant toute pause pour ne rien perdre"], answer: 0, why: "El cierre lo dice: la espalda aguanta recordando que existe — la idea central del texto." },
      ],
      vf: [
        { text: "Le corps prend la négociation au sérieux.", value: true, why: "«Le corps prend la négociation au sérieux, même quand la phrase est un pur exercice de style»." },
        { text: "La pause du dos dure une heure entière.", value: false, why: "«Deux respirations suffisent»: la pausa es mínima, invisible para la sala." },
        { text: "Les épaules doivent redescendre d'un centimètre.", value: true, why: "«Laissez les épaules redescendre d'un centimètre»: el gesto exacto." },
      ],
    },
    {
      id: "md-fr-c2-05-2", theme: "meditazione",
      title: "Le mot qui ne sera pas dit", titleEs: "La palabra que no se dirá",
      minutes: 3,
      paragraphs: [
        { it: "La méditation diplomatique consiste à voir le mot avant de le dire. Une phrase monte — la réponse sèche, la correction qui humilie, le « précisément » qui clôt le débat — et vous la regardez venir, comme une délégation regarde venir l'averse. Dire ou ne pas dire : là est toute la question, et la sagesse commence par ne pas répondre tout de suite. Le sommet se joue sur ce qui ne se dit pas ; l'esprit aussi.", es: "La meditación diplomática consiste en ver la palabra antes de decirla. Una frase sube — la respuesta seca, la corrección que humilla, el «précisément» que cierra el debate — y la miráis llegar, como una delegación mira llegar el chaparrón. Decir o no decir: ahí está toda la cuestión, y la sabiduría empieza por no responder de inmediato. La cumbre se juega en lo que no se dice; el espíritu también." },
        { it: "L'exercice tient en trois temps : sentez le mot monter, nommez-le intérieurement — voilà la colère, voilà l'impatience —, puis laissez-le reprendre son siège. Il repartira seul, comme les nuages repartent au-dessus de la salle des délégations. Ce que vous ne dites pas aujourd'hui n'est pas perdu : il reviendra demain, plus juste, dans une phrase que personne n'aura à retirer. On appelle cela la réserve ; les anciens l'appelaient la maîtrise.", es: "El ejercicio cabe en tres tiempos: sentid la palabra subir, nombradla interiormente — he aquí la cólera, he aquí la impaciencia — y luego dejadla recuperar su asiento. Se irá sola, como las nubes se van por encima de la sala de delegaciones. Lo que no decís hoy no está perdido: volverá mañana, más justo, en una frase que nadie tendrá que retirar. A eso se le llama la reserva; los antiguos lo llamaban el dominio." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de negociación para diplomáticos profesionales", "Observar la palabra impulsiva antes de decirla, como en una cumbre interior", "Cómo redactar un comunicado conjunto"],
        answer: 1,
        why: "«Le mot qui ne sera pas dit» traslada la diplomacia del matiz al interior: ver la palabra subir y no soltarla, no técnicas de negociación.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Voir le mot monter, le nommer, le laisser reprendre son siège", "Il faut tout dire immédiatement pour être honnête", "Les diplomates ne pensent jamais"], mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["La sagesse commence par ne pas répondre tout de suite", "Vous nommez la colère et l'impatience intérieurement", "Ce que vous ne dites pas reviendra plus juste demain"],
        distractors: ["La salle des délégations se ferme à dix-huit heures", "Il faut compter jusqu'à cent à voix haute", "Le communiqué fait quarante pages"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Une phrase monte : la réponse sèche, la correction qui humilie.",
          "La sagesse commence par ne pas répondre tout de suite.",
          "Vous nommez le mot intérieurement, puis le laissez reprendre son siège.",
          "La salle des délégations se ferme à dix-huit heures.",
          "Ce que vous ne dites pas aujourd'hui reviendra plus juste demain.",
        ],
        intruder: 3,
        why: "El horario de cierre de la sala es un dato logístico de la cumbre, ajeno al trabajo interior con la palabra: es el intruso.",
      },
    },
    {
      id: "md-fr-c2-05-3", theme: "spiritualità",
      title: "Écouter jusqu'au bout", titleEs: "Escuchar hasta el final",
      minutes: 3,
      paragraphs: [
        { it: "Dans l'esprit de compromis, il y a d'abord un geste spirituel : écouter la phrase de l'autre jusqu'à son dernier mot. Pas jusqu'au moment où l'on prépare sa réponse — jusqu'au bout, y compris la virgule finale, y compris le silence après. Chaque délégation porte une histoire derrière sa formulation ; écouter, c'est recevoir cette histoire avant de discuter la phrase.", es: "En el espíritu de compromiso hay primero un gesto espiritual: escuchar la frase del otro hasta su última palabra. No hasta el momento en que uno prepara su respuesta — hasta el final, incluida la coma final, incluido el silencio después. Cada delegación lleva una historia detrás de su formulación; escuchar es recibir esa historia antes de discutir la frase." },
        { it: "Essayez ce soir, dans une conversation ordinaire : une phrase de l'autre, écoutée jusqu'au bout, sans préparer la vôtre. Vous remarquerez peut-être un détail — une hésitation, un mot juste, un regret — que votre hâte aurait jeté par-dessus bord. Le respect ne consiste pas à approuver : il consiste à entendre entièrement. Et ce qui a été entièrement entendu se discute mieux, se négocie mieux, se garde mieux. L'écoute est la seule monnaie qui ne se dévalue jamais.", es: "Probad esta noche, en una conversación corriente: una frase del otro, escuchada hasta el final, sin preparar la vuestra. Quizá notaréis un detalle — una vacilación, una palabra justa, un pesar — que vuestra prisa habría tirado por la borda. El respeto no consiste en aprobar: consiste en oír enteramente. Y lo que ha sido enteramente oído se discute mejor, se negocia mejor, se guarda mejor. La escucha es la única moneda que nunca se devalúa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo ganar una negociación hablando menos", "Escuchar del todo la frase del otro como gesto de respeto", "Reglas de protocolo en las cumbres internacionales"],
        answer: 1,
        why: "«Écouter jusqu'au bout» propone la escucha completa como gesto espiritual y de respeto, no como táctica para ganar.",
      },
      sequence: {
        instr: "Ordena los pasos del ejercicio según el texto:",
        events: [
          "L'autre commence sa phrase",
          "Vous sentez monter l'envie de préparer votre réponse",
          "Vous laissez la phrase aller jusqu'à son dernier mot",
          "Vous remarquez un détail que la hâte aurait jeté",
          "Vous répondez, après le silence après",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Ce soir, votre exercice d'écoute : une phrase entière, sans préparer la réponse. Quand l'autre parle, sentez votre propre impatience monter, nommez-la, et laissez-la s'asseoir. Restez avec la phrase jusqu'au dernier mot, puis deux secondes encore, dans le silence après. Seulement alors, vous parlerez. Ce que vous direz alors sera plus juste, parce qu'il aura été précédé d'une écoute entière.",
        questions: [
          { q: "Que faites-vous quand l'impatience monte ?", kind: "literal", options: ["Vous la nommez et la laissez s'asseoir", "Vous l'exprimez tout de suite", "Vous partez de la pièce"], answer: 0, why: "«Sentez votre propre impatience monter, nommez-la, et laissez-la s'asseoir»." },
          { q: "Combien de temps restez-vous dans le silence après ?", kind: "literal", options: ["Deux secondes encore", "Dix minutes", "Aucun instant"], answer: 0, why: "«Restez avec la phrase jusqu'au dernier mot, puis deux secondes encore»." },
          { q: "Pourquoi votre réponse sera-t-elle plus juste ?", kind: "inferencial", options: ["Parce qu'elle aura été précédée d'une écoute entière", "Parce que vous parlerez plus fort", "Parce que vous saurez tout"], answer: 0, why: "«Il aura été précédé d'une écoute entière»: la escucha completa precede a la respuesta justa." },
          { q: "Que devient la phrase de l'autre dans cet exercice ?", kind: "inferencial", options: ["Elle est reçue entièrement, jusqu'au dernier mot", "Elle est coupée à la moitié", "Elle est oubliée"], answer: 0, why: "Se infiere del conjunto del audio: la frase llega entera hasta su final." },
        ],
      },
    },
  ],

  "fr-cu-c2-06": [
    {
      id: "md-fr-c2-06-1", theme: "relax mentale",
      title: "L'écran intérieur", titleEs: "La pantalla interior",
      minutes: 3,
      paragraphs: [
        { it: "L'esprit projette sans relâche : des images du matin, des scènes qui n'arriveront pas, des dialogues rejoués avec le son trop fort. Le scénariste appelle cela du matériel ; la méditation appelle cela de la circulation. Vous n'avez pas à couper la projection ni à écrire le scénario qui défile : le metteur en scène intérieur s'en chargera, comme la nuit monte ses images sans demander votre avis.", es: "El espíritu proyecta sin descanso: imágenes de la mañana, escenas que no ocurrirán, diálogos rehechos con el volumen demasiado alto. El guionista llama a eso material; la meditación lo llama circulación. No tenéis que cortar la proyección ni escribir el guion que desfila: el director interior se encargará, como la noche monta sus imágenes sin pediros permiso." },
        { it: "Votre travail est plus simple : rester dans la salle. Les images passent sur l'écran intérieur, une lumière, une autre, et vous les voyez partir sans quitter votre fauteuil. « Si ça ne se voit pas, ça ne s'écrit pas », dit la règle de la Fémis ; si ça ne se retient pas, ça ne sert pas d'y penser. Le relâchement mental, c'est cela : une projection continue, un fauteuil confortable, et personne dans la salle qui court après l'image.", es: "Vuestro trabajo es más simple: quedarse en la sala. Las imágenes pasan por la pantalla interior, una luz, otra, y las veis partir sin abandonar vuestro butaca. «Si ça ne se voit pas, ça ne s'écrit pas», dice la regla de La Fémis; si no se retiene, no sirve de pensar en ello. La distensión mental es eso: una proyección continua, una butaca cómoda, y nadie en la sala corriendo tras la imagen." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo escribir el guion de una película interior", "Dejar pasar las imágenes mentales como una proyección que uno no dirige", "Cómo dormirse viendo películas"],
        answer: 1,
        why: "«L'écran intérieur» usa la metáfora del cine para la mente: ver pasar las imágenes sin perseguirlas ni dirigirlas.",
      },
      quiz: [
        { q: "Comment la méditation appelle-t-elle les images de l'esprit ?", kind: "literal", options: ["De la circulation", "Du matériel", "Du décor"], answer: 0, why: "«La méditation appelle cela de la circulation»: la palabra está literal en el primer párrafo (el guionista, en cambio, lo llama «matériel»)." },
        { q: "Qui s'occupe du scénario qui défile ?", kind: "inferencial", options: ["Vous, en l'écrivant phrase par phrase", "Le metteur en scène intérieur, sans demander votre avis", "Le monteur de la Fémis"], answer: 1, why: "«Le metteur en scène intérieur s'en chargera, comme la nuit monte ses images sans demander votre avis»: se infiere que no es tarea vuestra." },
        { q: "En quoi consiste le relâchement mental, selon la dernière phrase ?", kind: "critica", options: ["Une projection continue, un fauteuil confortable, personne qui court après l'image", "Couper la projection dès qu'elle démarre", "Écrire le scénario de chaque pensée"], answer: 0, why: "La síntesis final del texto: la distensión es quedarse en la sala sin perseguir las imágenes." },
      ],
      vf: [
        { text: "Vous devez couper la projection intérieure.", value: false, why: "«Vous n'avez pas à couper la projection ni à écrire le scénario qui défile»." },
        { text: "Le scénariste appelle cela du matériel.", value: true, why: "«Le scénariste appelle cela du matériel ; la méditation appelle cela de la circulation»." },
        { text: "Votre travail est d'écrire le scénario qui défile.", value: false, why: "Al contrario: vuestro trabajo es «rester dans la salle»." },
      ],
    },
    {
      id: "md-fr-c2-06-2", theme: "qui e ora",
      title: "Décrire la pièce où vous êtes", titleEs: "Describir la habitación donde estáis",
      minutes: 2,
      paragraphs: [
        { it: "INT. VOTRE PIÈCE — CE SOIR. Essayez l'exercice du scénariste : décrire ce qui est, sans mémoire ni prédiction. Il y a une lampe allumée à gauche, une tasse sur la table, le bruit d'un voisin, la lumière qui baisse dehors. C'est tout — et c'est déjà une scène. Le présent n'a pas besoin d'intrigue pour exister ; il n'a besoin que d'un regard qui le note, plan par plan.", es: "INT. VUESTRA HABITACIÓN — ESTA NOCHE. Probad el ejercicio del guionista: describir lo que es, sin memoria ni predicción. Hay una lámpara encendida a la izquierda, una taza sobre la mesa, el ruido de un vecino, la luz que baja fuera. Eso es todo — y ya es una escena. El presente no necesita intriga para existir; solo necesita una mirada que lo anote, plano por plano." },
        { it: "La règle de la maison s'applique aussi ici : si ça ne se voit pas, ça ne s'écrit pas. « Je pense à hier » n'est pas visible ; « la main s'arrête sur la tasse » l'est. Décrivez trois choses seulement — un objet, un son, une lumière — et vous êtes là, entièrement, dans la scène unique de ce soir. Le scénario de votre soirée ne mène nulle part : c'est ce qui fait sa valeur. Rien n'arrive, et tout est là.", es: "La regla de la casa también se aplica aquí: si no se ve, no se escribe. «Pienso en ayer» no es visible; «la mano se detiene sobre la taza» sí lo es. Describid solo tres cosas — un objeto, un sonido, una luz — y estáis allí, enteros, en la escena única de esta noche. El guion de vuestra velada no lleva a ninguna parte: eso es lo que lo hace valioso. No ocurre nada, y todo está allí." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo montar un set de rodaje en casa", "Describir el presente como una escena: objeto, sonido, luz", "Cómo escribir la sinopsis de una película"],
        answer: 1,
        why: "El encabezado de escena del título apunta al ejercicio del guionista aplicado al presente: describir lo visible, no montar un plató.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Décrire ce qui est, plan par plan : le présent n'a pas besoin d'intrigue", "Écrire l'intrigue de toute une soirée de fiction", "Prédire ce qui va arriver demain matin"], mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Une lampe allumée, une tasse, le bruit d'un voisin", "« Je pense à hier » n'est pas visible", "Rien n'arrive, et tout est là"],
        distractors: ["La règle de la maison interdit de filmer après vingt-deux heures", "Il faut décrire exactement cent détails", "Le scénario doit finir par une chute comique"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Décrire ce qui est : une lampe, une tasse, le bruit d'un voisin.",
          "Le présent n'a pas besoin d'intrigue pour exister.",
          "Si ça ne se voit pas, ça ne s'écrit pas.",
          "La régie de la Fémis ferme ses portes à vingt-deux heures.",
          "Décrivez trois choses seulement, et vous êtes là, entièrement.",
        ],
        intruder: 3,
        why: "El horario de la régie es un dato logístico del plató, ajeno al ejercicio de describir el presente: es el intruso.",
      },
    },
    {
      id: "md-fr-c2-06-3", theme: "relax fisico",
      title: "Les yeux après l'écran", titleEs: "Los ojos después de la pantalla",
      minutes: 3,
      paragraphs: [
        { it: "Après une journée de scénario sur écran, les yeux le disent à leur manière : ils brûlent doucement, clignent trop vite, et le monde du fond de la pièce devient flou comme un décor tourné dans la brume. Les Yeux ne demandent pas grand-chose — un point lointain, dix fois par jour, et l'horizon refait surface. Les cadreurs le savent : on ne cadre pas la même scène selon que l'œil est fatigué ou reposé.", es: "Después de una jornada de guion ante la pantalla, los ojos lo dicen a su manera: arden suavemente, parpadean demasiado deprisa, y el fondo de la habitación se vuelve borroso como un decorado rodado en la niebla. Los ojos no piden gran cosa — un punto lejano, diez veces al día, y el horizonte vuelve a la superficie. Los cámaras lo saben: no se encuadra igual la misma escena según el ojo esté cansado o descansado." },
        { it: "L'exercice tient en trois plans, comme une scène : plan large — regardez le plus loin possible par la fenêtre, vingt secondes ; plan moyen — la longueur de la pièce, dix secondes ; gros plan — fermez les paupières, et laissez la chaleur des yeux descendre dans la mâchoire. Répétez trois fois. Puis frottez vos paumes, posez-les en coquilles sur les yeux clos, et laissez le noir s'installer — le vrai fondu au noir, celui qui repose, et que le scénario ne sait pas écrire.", es: "El ejercicio cabe en tres planos, como una escena: plano general — mirad lo más lejos posible por la ventana, veinte segundos; plano medio — el fondo de la habitación, diez segundos; primer plano — cerrad los párpados y dejad que el calor de los ojos baje a la mandíbula. Repetid tres veces. Después frotad las palmas, ponedlas en concha sobre los ojos cerrados y dejad que la oscuridad se instale — el verdadero fundido a negro, el que descansa, y que el guion no sabe escribir." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo calibrar una cámara profesional", "Descansar la vista después de la pantalla con tres planos sucesivos", "Cómo elegir gafas para editores"],
        answer: 1,
        why: "«Les yeux après l'écran» apunta al descanso visual con el vocabulario de planos del guionista, no a la técnica de cámara.",
      },
      sequence: {
        instr: "Ordena los planos del ejercicio según el texto:",
        events: [
          "Plan large : le plus loin possible par la fenêtre, vingt secondes",
          "Plan moyen : la longueur de la pièce, dix secondes",
          "Gros plan : paupières closes, la chaleur descend dans la mâchoire",
          "Vous frottez vos paumes",
          "Vous posez les paumes en coquilles sur les yeux clos",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Pause pour vos yeux, entre deux pages de scénario. Levez le regard : le point le plus lointain de la pièce, ou par la fenêtre. Tenez-le vingt secondes, sans forcer. Puis refermez doucement les paupières, et couvrez-les de vos paumes tièdes, sans appuyer. Trois respirations dans ce noir chaud. Quand vous rouvrirez les yeux, la page sera la même — mais votre regard, lui, aura changé de focale.",
        questions: [
          { q: "Que regardez-vous d'abord ?", kind: "literal", options: ["Le point le plus lointain", "Vos mains", "L'écran"], answer: 0, why: "«Le point le plus lointain de la pièce, ou par la fenêtre» está literal en el audio." },
          { q: "Combien de temps tenez-vous le regard ?", kind: "literal", options: ["Vingt secondes", "Deux heures", "Une seconde"], answer: 0, why: "«Tenez-le vingt secondes, sans forcer»." },
          { q: "Que font les paumes ?", kind: "literal", options: ["Elles couvrent les paupières sans appuyer", "Elles massent le front", "Elles écrivent"], answer: 0, why: "«Couvrez-les de vos paumes tièdes, sans appuyer»." },
          { q: "Qu'arrivera-t-il à votre regard en rouvrant les yeux ?", kind: "inferencial", options: ["Il aura changé de focale : il verra la page autrement", "Il sera pire qu'avant", "Il ne verra plus rien"], answer: 0, why: "«Votre regard, lui, aura changé de focale»: la metáfora del objetivo cierra el audio." },
        ],
      },
    },
  ],

  "fr-cu-c2-07": [
    {
      id: "md-fr-c2-07-1", theme: "meditazione",
      title: "Méditer le futur", titleEs: "Meditar el futuro",
      minutes: 3,
      paragraphs: [
        { it: "Avant d'écrire « nous ferons », le rédacteur de discours peut s'asseoir un instant avec le futur. Chaque promesse est une graine que quelqu'un devra faire pousser — des électeurs, des équipes, des années. La méditation du futur consiste à peser le verbe avant de le lancer : qu'est-ce que ce « nous construirons » contient, qui l'habitera, quelle patience exigera-t-il ? Un futur de foire se prononce vite ; un futur de promesse demande d'être regardé en face.", es: "Antes de escribir «nous ferons», el redactor de discursos puede sentarse un instante con el futuro. Cada promesa es una semilla que alguien deberá hacer crecer — electores, equipos, años. La meditación del futuro consiste en pesar el verbo antes de lanzarlo: ¿qué contiene ese «nous construirons», quién lo habitará, qué paciencia exigirá? Un futuro de feria se pronuncia deprisa; un futuro de promesa pide ser mirado de frente." },
        { it: "La consigne du meeting — ni une promesse sans futur, ni un futur sans verbe — est aussi une consigne intérieure. Perrin répète dans le couloir ; vous, assis dans la salle vide, vous laissez monter chaque futur comme une vague : vous le nommez, vous le tenez un souffle, puis vous décidez s'il mérite la scène. Ce qui survit à trois respirations appartient au discours ; ce qui ne survit pas appartenait seulement à l'agitation. La langue politique se nettoie ainsi, verbe après verbe, dans un silence qui ne trompe personne.", es: "La consigna del mitin — ni una promesa sin futuro, ni un futuro sin verbo — es también una consigna interior. Perrin ensaya en el pasillo; vosotros, sentados en la sala vacía, dejáis subir cada futuro como una ola: lo nombráis, lo sostenéis un soplo, y luego decidís si merece el escenario. Lo que sobrevive a tres respiraciones pertenece al discurso; lo que no sobrevive pertenecía solo a la agitación. La lengua política se limpia así, verbo tras verbo, en un silencio que no engaña a nadie." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo ganar las elecciones municipales", "Pesar cada futuro del discurso como práctica meditativa del redactor", "La historia del futuro en la gramática francesa"],
        answer: 1,
        why: "«Méditer le futur» une el oficio del redactor (los futuros de promesa del mitin) con la mirada meditativa: no es táctica electoral ni historia gramatical.",
      },
      quiz: [
        { q: "À quoi chaque promesse est-elle comparée ?", kind: "literal", options: ["À une graine que quelqu'un devra faire pousser", "À un feu d'artifice", "À un discours de victoire"], answer: 0, why: "«Chaque promesse est une graine que quelqu'un devra faire pousser»: la comparación abre el texto." },
        { q: "Que faites-vous de chaque futur, assis dans la salle vide ?", kind: "inferencial", options: ["Vous le supprimez immédiatement", "Vous le nommez, le tenez un souffle, puis décidez s'il mérite la scène", "Vous les rangez par ordre alphabétique"], answer: 1, why: "«Vous le nommez, vous le tenez un souffle, puis vous décidez s'il mérite la scène»: se infiere el gesto de examen." },
        { q: "Que devient ce qui ne survit pas à trois respirations ?", kind: "critica", options: ["Il appartenait seulement à l'agitation", "Il devient le titre du discours", "Il est prononcé deux fois plus fort"], answer: 0, why: "«Ce qui ne survit pas appartenait seulement à l'agitation»: el tamiz de las tres respiraciones separa la promesa del ruido." },
      ],
      vf: [
        { text: "Un futur de foire se prononce vite.", value: true, why: "«Un futur de foire se prononce vite ; un futur de promesse demande d'être regardé en face»." },
        { text: "La consigne du meeting n'est qu'une consigne de style.", value: false, why: "«Est aussi une consigne intérieure»: la regla del mitin vale igualmente como examen personal." },
        { text: "La langue politique se nettoie verbe après verbe.", value: true, why: "Está literal en el cierre del segundo párrafo." },
      ],
    },
    {
      id: "md-fr-c2-07-2", theme: "qui e ora",
      title: "La salle avant la foule", titleEs: "La sala antes de la multitud",
      minutes: 2,
      paragraphs: [
        { it: "Une heure avant le meeting, la salle des fêtes est à son plus juste : des chaises empilées qu'on déplie en rangs, un micro qui siffle, une odeur de cire et de café froid. Personne n'applaudit encore ; rien ne se joue encore — et pourtant tout est déjà là. Être présent dans la salle vide, c'est habiter la seule heure où le lieu ne prétend rien : il attend, comme une page blanche au ras du sol.", es: "Una hora antes del mitin, la sala de fiestas está en su hora más exacta: sillas apiladas que se despliegan en filas, un micrófono que silba, un olor a cera y a café frío. Nadie aplaude todavía; nada se juega todavía — y sin embargo todo está ya ahí. Estar presente en la sala vacía es habitar la única hora en que el lugar no pretende nada: espera, como una página en blanco a ras de suelo." },
        { it: "Ce soir, le discours fera vibrer trois cents personnes ; à cette heure, il n'existe nulle part. C'est le luxe des coulisses : le présent avant sa mise en scène. Inès teste le micro — « un, deux » —, le technicien baisse une lampe, et vous dépliez une chaise de plus. Décrivez la scène en trois notes, comme un carnet de terrain : un son, une lumière, un geste. La foule remplira l'espace ; personne ne remplacera cette heure, qui ne reviendra pas.", es: "Esta noche, el discurso hará vibrar a trescientas personas; a esta hora, no existe en ninguna parte. Es el lujo de los bastidores: el presente antes de su puesta en escena. Inès prueba el micrófono — «un, deux»—, el técnico baja una lámpara, y vosotros desplegáis una silla más. Describid la escena en tres notas, como un cuaderno de campo: un sonido, una luz, un gesto. La multitud llenará el espacio; nadie reemplazará esta hora, que no volverá." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo montar un mitin electoral paso a paso", "Estar presente en la sala vacía la hora antes del mitin", "Cómo calentar la voz antes de hablar en público"],
        answer: 1,
        why: "«La salle avant la foule» señala la hora previa al mitin: presencia en el lugar desnudo, no logística de montaje ni técnica vocal.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Habiter l'heure de la salle vide, avant que la foule ne remplisse l'espace", "Il faut répéter le discours cent fois avant le meeting", "Les salles des fêtes sont toujours trop petites"], mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Des chaises empilées qu'on déplie en rangs", "Le présent avant sa mise en scène", "Cette heure ne reviendra pas"],
        distractors: ["Le meeting commence à dix-neuf heures précises", "Inès a préparé deux cents flyers verts", "Le candidat Perrin déteste les chaises pliantes"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Des chaises empilées qu'on déplie en rangs, un micro qui siffle.",
          "Personne n'applaudit encore ; rien ne se joue encore.",
          "Le tract officiel de la campagne sera imprimé en deux mille exemplaires.",
          "Inès teste le micro — « un, deux ».",
          "La foule remplira l'espace ; personne ne remplacera cette heure.",
        ],
        intruder: 2,
        why: "La tirada de panfletos de la campaña es un dato logístico, ajeno a la presencia en la sala vacía: es el intruso.",
      },
    },
    {
      id: "md-fr-c2-07-3", theme: "relax fisico",
      title: "Échauffer la voix du soir", titleEs: "Calentar la voz de la noche",
      minutes: 3,
      paragraphs: [
        { it: "La voix d'un meeting ne sort pas de la gorge : elle monte du ventre et s'appuie sur des genoux stables. Le candidat qui fera vibrer trois cents personnes a d'abord un corps à échauffer — comme un chanteur, sans ironie. Les pieds au sol, la mâchoire relâchée, trois bâillements exagérés pour ouvrir le palais : l'échauffement du soir commence bas, très bas, avant le premier « nous ferons ».", es: "La voz de un mitin no sale de la garganta: sube del vientre y se apoya en rodillas estables. El candidato que hará vibrar a trescientas personas tiene primero un cuerpo que calentar — como un cantante, sin ironía. Los pies en el suelo, la mandíbula suelta, tres bostezos exagerados para abrir el paladar: el calentamiento de la noche empieza abajo, muy abajo, antes del primer «nous ferons»." },
        { it: "Car l'anaphore est un sport d'expiration : « nous ferons, nous construirons, nous tiendrons » — trois montées sur le même souffle long, une pause pour respirer, puis la question oratoire qui descend. Entre chaque tricolon, le corps a besoin de silences tenus : épaules qui redescendent, mains ouvertes sur le pupitre, un appui de plus sur les pieds. La salle ne verra que du calme ; le dos, lui, saura qu'il a travaillé. C'est toute la différence entre une voix qui crie et une voix qui pose.", es: "Porque la anáfora es un deporte de espiración: «nous ferons, nous construirons, nous tiendrons» — tres subidas sobre el mismo soplo largo, una pausa para respirar, y después la pregunta oratoria que desciende. Entre cada tricolon, el cuerpo necesita silencios sostenidos: hombros que bajan, manos abiertas sobre el atril, un apoyo más en los pies. La sala no verá más que calma; la espalda sabrá que ha trabajado. Esa es toda la diferencia entre una voz que grita y una voz que posa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo escribir anáforas inolvidables", "Calentar el cuerpo y el aliento del orador antes del mitin", "La historia de los discursos de campaña"],
        answer: 1,
        why: "«Échauffer la voix du soir» apunta al calentamiento físico del orador (pies, mandíbula, aliento), no a la retórica ni a la historia.",
      },
      sequence: {
        instr: "Ordena el calentamiento según el texto:",
        events: [
          "Les pieds au sol, la mâchoire relâchée",
          "Trois bâillements exagérés pour ouvrir le palais",
          "Trois montées sur le même souffle long : l'anaphore",
          "Une pause pour respirer avant la question oratoire",
          "Les épaules redescendent, les mains ouvertes sur le pupitre",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Dernière minute dans les coulisses, avant que la salle ne se remplisse. Debout, les deux pieds bien à plat, sentez le sol tenir votre poids. Bâillez deux fois, grandement, sans honte : le palais s'ouvre, la voix se place. Puis une grande inspiration, et soufflez lentement, comme pour ternir une vitre. Vous êtes prêt ; le micro n'attend que votre ventre, pas votre gorge.",
        questions: [
          { q: "Que faites-vous en premier, debout ?", kind: "literal", options: ["Vous sentez le sol tenir votre poids", "Vous criez trois fois", "Vous courez autour de la salle"], answer: 0, why: "«Debout, les deux pieds bien à plat, sentez le sol tenir votre poids»." },
          { q: "Pourquoi bâiller deux fois, sans honte ?", kind: "literal", options: ["Pour ouvrir le palais et placer la voix", "Pour montrer la fatigue", "Pour faire rire l'équipe"], answer: 0, why: "«Le palais s'ouvre, la voix se place»." },
          { q: "Comment soufflez-vous, après la grande inspiration ?", kind: "inferencial", options: ["Vite et fort", "Lentement, comme pour ternir une vitre", "En retenant le souffle une minute"], answer: 1, why: "«Soufflez lentement, comme pour ternir une vitre»: se infiere la espiración controlada." },
          { q: "D'où doit venir la voix, selon la dernière phrase ?", kind: "inferencial", options: ["Du ventre, pas de la gorge", "De la gorge seulement", "Du nez"], answer: 0, why: "«Le micro n'attend que votre ventre, pas votre gorge»: el apoyo abdominal cierra el audio." },
        ],
      },
    },
  ],

  "fr-cu-c2-08": [
    {
      id: "md-fr-c2-08-1", theme: "spiritualità",
      title: "Servir deux langues", titleEs: "Servir a dos lenguas",
      minutes: 3,
      paragraphs: [
        { it: "Le traducteur littéraire sert deux langues sans en posséder aucune : il est passeur, non propriétaire. Il y a dans ce métier une discipline ancienne, proche d'une voie — recevoir une phrase espagnole, la tenir en silence, puis la laisser repartir en français sans l'avoir contrainte. La fidélité n'est pas un collier ; c'est une attention. Madame Vidal, dans son bureau de Saint-Germain, ne demande pas de belles phrases : elle demande que l'auteur soit reconnaissable, comme on reconnaît une démarche de loin.", es: "El traductor literario sirve a dos lenguas sin poseer ninguna: es barquero, no propietario. Hay en este oficio una disciplina antigua, cercana a una vía — recibir una frase española, sostenerla en silencio, y luego dejarla partir en francés sin haberla forzado. La fidelidad no es un collar; es una atención. Madame Vidal, en su despacho de Saint-Germain, no pide frases bonitas: pide que el autor sea reconocible, como se reconoce un modo de andar desde lejos." },
        { it: "Cette attention a ses heures : elle ne court pas toute la journée. Certains matins, la phrase résiste, le faux ami guette — robe n'est pas ropa, une cave n'est pas une cueva — et la main hésite. C'est le moment de reculer, non de forcer : on ne tire pas sur une phrase comme sur une porte cochère. Trois respirations, un retour à la page espagnole, puis la solution monte d'elle-même, avec cette douceur des choses mûres. Servir deux langues, c'est aussi respecter leurs heures.", es: "Esa atención tiene sus horas: no corre todo el día. Algunas mañanas, la frase resiste, el falso amigo acecha — robe no es ropa, une cave no es una cueva — y la mano duda. Es el momento de retroceder, no de forzar: no se tira de una frase como de una puerta carroza. Tres respiraciones, una vuelta a la página española, y luego la solución sube sola, con esa suavidad de las cosas maduras. Servir a dos lenguas es también respetar sus horas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo publicar una novela en Francia", "La traducción como servicio y paciencia entre dos lenguas", "Los mejores diccionarios bilingües del mercado"],
        answer: 1,
        why: "«Servir deux langues» presenta al traductor como barquero atento, no como editor ni lexicógrafo: la fidelidad como práctica.",
      },
      quiz: [
        { q: "Que demande Madame Vidal, dans son bureau de Saint-Germain ?", kind: "literal", options: ["Que l'auteur soit reconnaissable, comme une démarche de loin", "Des phrases très françaises et fleuries", "Une traduction littérale mot à mot"], answer: 0, why: "«Elle demande que l'auteur soit reconnaissable, comme on reconnaît une démarche de loin»: literal en el primer párrafo." },
        { q: "Que faire quand la phrase résiste et que la main hésite ?", kind: "inferencial", options: ["Forcer la phrase jusqu'à ce qu'elle cède", "Effacer le passage entier", "Reculer, respirer, retourner à la page espagnole"], answer: 2, why: "«C'est le moment de reculer, non de forcer» + «Trois respirations, un retour à la page espagnole»: se infiere el gesto completo." },
        { q: "Comment la fidélité est-elle définie ?", kind: "critica", options: ["C'est un collier qui serre le cou des langues", "C'est une attention, non un collier", "C'est une compétition entre deux langues"], answer: 1, why: "«La fidélité n'est pas un collier ; c'est une attention»: la definición central del texto." },
      ],
      vf: [
        { text: "Le traducteur littéraire possède deux langues.", value: false, why: "«Il sert deux langues sans en posséder aucune»: es barquero, no propietario." },
        { text: "On ne tire pas sur une phrase comme sur une porte cochère.", value: true, why: "La imagen del repliegue está literal en el segundo párrafo." },
        { text: "La solution monte toujours immédiatement, sans jamais hésiter.", value: false, why: "El texto describe mañanas de resistencia: la solución sube sola tras tres respiraciones, «con esa suavidad de las cosas maduras»." },
      ],
    },
    {
      id: "md-fr-c2-08-2", theme: "relax mentale",
      title: "L'oreille détendue", titleEs: "El oído relajado",
      minutes: 2,
      paragraphs: [
        { it: "L'œil tendu rate les faux amis ; l'oreille détendue les attrape. C'est le paradoxe du traducteur : la vigilance qui ne cligne jamais devient aveugle, la chasse au calque tourne à l'obsession, et bientôt chaque mot paraît coupable. Le relâchement mental du métier commence par un aveu — vous ne pouvez pas tout vérifier en même temps — et par une confiance : la phrase juste sonne, elle entre toute seule dans l'oreille.", es: "El ojo tenso deja pasar a los falsos amigos; el oído relajado los atrapa. Es la paradoja del traductor: la vigilancia que nunca parpadea se vuelve ciega, la caza del calco se convierte en obsesión, y pronto cada palabra parece culpable. La distensión mental del oficio empieza con una confesión — no podéis verificarlo todo a la vez — y con una confianza: la frase justa suena, entra sola en el oído." },
        { it: "Thomas, le correcteur, relit en musique : à voix basse, en marchant, laissant les syllabes décider. Essayez : trois phrases lues à voix haute, puis une minute de silence, les yeux fermés, à écouter ce qui résonne de travers. Le calque ne se voit pas toujours — il s'entend. Ce qui sonne espagnol en français demande une autre route, pas un procès. L'oreille détendue n'est pas une oreille paresseuse : c'est une oreille qui a le temps.", es: "Thomas, el corrector, relee en música: en voz baja, caminando, dejando que las sílabas decidan. Probad: tres frases leídas en voz alta, luego un minuto de silencio, los ojos cerrados, a la escucha de lo que resuena torcido. El calco no siempre se ve — se oye. Lo que suena español en francés pide otra ruta, no un juicio. El oído relajado no es un oído perezoso: es un oído que tiene tiempo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Guía de los falsos amigos más frecuentes ES-FR", "El oído relajado del traductor atrapa mejor el calco que el ojo tenso", "Cómo corregir a un traductor principiante"],
        answer: 1,
        why: "«L'oreille détendue» propone soltar la vigilancia obsesiva para oír el calco: práctica del oído, no listas de palabras ni corrección ajena.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Relâcher la vigilance : le calque s'entend mieux qu'il ne se voit", "Il faut vérifier chaque mot dans trois dictionnaires", "Les faux amis n'existent qu'en théorie"], mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["La vigilance qui ne cligne jamais devient aveugle", "Thomas relit à voix basse, en marchant", "L'oreille détendue a le temps"],
        distractors: ["La maison d'édition paie les corrections à la page", "Thomas travaille toujours jusqu'à minuit", "Le manuscrit compte trois cent quarante pages"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "L'œil tendu rate les faux amis ; l'oreille détendue les attrape.",
          "La chasse au calque peut tourner à l'obsession.",
          "Trois phrases lues à voix haute, puis une minute de silence.",
          "La livraison du manuscrit est prévue pour le quinze du mois.",
          "Ce qui sonne espagnol en français demande une autre route.",
        ],
        intruder: 3,
        why: "La fecha de entrega del manuscrito es un dato logístico de la editorial, ajeno a la escucha relajada: es el intruso.",
      },
    },
    {
      id: "md-fr-c2-08-3", theme: "meditazione",
      title: "Traduire en respirant", titleEs: "Traducir respirando",
      minutes: 3,
      paragraphs: [
        { it: "Prenez une seule phrase, espagnole, courte, et ne la traduisez pas tout de suite. Lisez-la trois fois, lentement, comme on fait le tour d'une maison inconnue avant d'y dormir. La méditation de traduction commence par cette hospitalité : la phrase est une invitée, vous êtes l'hôte ; il faut lui laisser le temps de déposer ses valises — son rythme, ses images, sa couleur — avant de lui proposer des habits français.", es: "Tomad una sola frase, española, corta, y no la traduzcáis enseguida. Leedla tres veces, despacio, como quien da la vuelta a una casa desconocida antes de dormir en ella. La meditación de traducción empieza con esa hospitalidad: la frase es una invitada, vosotros el anfitrión; hay que dejarle tiempo para que deposite sus maletas — su ritmo, sus imágenes, su color — antes de proponerle ropas francesas." },
        { it: "Puis, sur l'expiration, la version française monte : parfois juste, souvent presque — et c'est déjà beaucoup. Vous la notez sans la juger, vous respirez encore, et la seconde vague apporte le mot qui manquait, celui qui sonne sans expliquer. Traduire en respirant, c'est accepter que la langue arrive par marées : trois allers-retours entre les rives, et la phrase traverse, essoufflée d'abord, apaisée enfin. Le bateau n'a jamais eu besoin d'être rapide ; il a besoin de flotter.", es: "Luego, en la espiración, sube la versión francesa: a veces justa, a menudo casi — y eso ya es mucho. La anotáis sin juzgarla, respiráis otra vez, y la segunda ola trae la palabra que faltaba, la que suena sin explicar. Traducir respirando es aceptar que la lengua llega por mareas: tres idas y vueltas entre las orillas, y la frase cruza, jadeante al principio, apaciguada al final. La barca nunca necesitó ser rápida; necesita flotar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de traducción simultánea rápida", "Traducir una sola frase con calma, dejando que el francés llegue como una marea", "Cómo alojar a un invitado en París"],
        answer: 1,
        why: "«Traduire en respirant» hace de la frase una invitada y de la traducción una marea: calma contemplativa, no velocidad ni hospitalidad literal.",
      },
      sequence: {
        instr: "Ordena los pasos de la meditación según el texto:",
        events: [
          "Vous lisez la phrase espagnole trois fois, lentement",
          "Vous la laissez déposer ses valises : rythme, images, couleur",
          "Sur l'expiration, la version française monte",
          "Vous la notez sans la juger et respirez encore",
          "La seconde vague apporte le mot qui manquait",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Choisissez une phrase courte, dans votre langue d'origine, et posez-la devant vous comme une carte. Lisez-la une première fois, en silence. Une deuxième fois, en goûtant le rythme. Puis fermez les yeux, inspirez, et sur l'expiration, laissez venir la phrase française — sans la forcer, sans l'appeler. Si elle ne vient pas, ce n'est pas un échec : elle arrive par marées, et la vague suivante est déjà en route.",
        questions: [
          { q: "Combien de fois lisez-vous la phrase avant de fermer les yeux ?", kind: "literal", options: ["Deux fois", "Cinq fois", "Aucune fois"], answer: 0, why: "«Une première fois, en silence. Une deuxième fois, en goûtant le rythme»: dos lecturas antes del cierre de ojos." },
          { q: "Que laissez-vous venir sur l'expiration ?", kind: "literal", options: ["La liste des dictionnaires", "La phrase française", "Une autre phrase espagnole"], answer: 1, why: "«Sur l'expiration, laissez venir la phrase française»." },
          { q: "Que signifie « elle arrive par marées » ?", kind: "inferencial", options: ["La traduction vient par vagues successives, pas d'un coup", "La phrase est nautique de naissance", "Il faut attendre la marée du matin"], answer: 0, why: "«Elle arrive par marées, et la vague suivante est déjà en route»: se infiere la llegada por olas." },
          { q: "Comment le texte qualifie-t-il le fait qu'elle ne vienne pas ?", kind: "inferencial", options: ["Ce n'est pas un échec", "C'est une faute professionnelle", "C'est une preuve de paresse"], answer: 0, why: "«Si elle ne vient pas, ce n'est pas un échec»: el audio desactiva el juicio." },
        ],
      },
    },
  ],

  "fr-cu-c2-09": [
    {
      id: "md-fr-c2-09-1", theme: "relax mentale",
      title: "Dégonfler avec douceur", titleEs: "Desinflar con suavidad",
      minutes: 3,
      paragraphs: [
        { it: "Le manuscrit est enflé de nominalisations : « la mise en œuvre », « la problématique de la régulation », « l'optimisation des modalités » — chaque page pèse plus lourd qu'elle ne justifie. Face aux marques jaunes de Madame Roche, l'esprit du relecteur peut s'affoler : tant à faire, tant à couper. Le relâchement mental commence par un seul geste — un verbe à la fois. « La mise en œuvre de la réforme sera étudiée » redevient « nous étudierons la réforme », et le brouillard se lève d'une phrase.", es: "El manuscrito está hinchado de nominalizaciones: «la mise en œuvre», «la problématique de la régulation», «l'optimisation des modalités» — cada página pesa más de lo que justifica. Ante las marcas amarillas de Madame Roche, el espíritu del corrector puede alarmarse: tanto por hacer, tanto por cortar. La distensión mental empieza con un solo gesto — un verbo cada vez. «La mise en œuvre de la réforme sera étudiée» vuelve a ser «nous étudierons la réforme», y la niebla se levanta de una frase." },
        { it: "La chasse au jargon n'est pas une guerre : c'est un dégonflage, doux, méthodique, sans colère contre l'auteur ni mépris du sujet. Léo parie que quarante pour cent peuvent partir sans perte de sens ; le pari se gagne phrase par phrase, jamais page par page. Quand la fatigue monte, posez le stylo, regardez par la fenêtre la vraie lumière sur les vrais toits, puis revenez : la ligne suivante attend son verbe. Le style administratif n'est pas un ennemi ; c'est un habit trop grand qu'on reprend de couture, un ourlet à la fois.", es: "La caza del jergón no es una guerra: es un desinflado, suave, metódico, sin cólera contra el autor ni desprecio del tema. Léo apuesta a que el cuarenta por ciento puede irse sin pérdida de sentido; la apuesta se gana frase por frase, nunca página por página. Cuando sube el cansancio, dejad el bolígrafo, mirad por la ventana la luz verdadera sobre los tejados verdaderos, y volved: la línea siguiente espera su verbo. El estilo administrativo no es un enemigo; es un traje demasiado grande que se reajusta de sastrería, un dobladillo cada vez." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo despedir a un autor pesado", "Desinflar el jergón administrativo con calma, un verbo cada vez", "Teorías de la nominalización en lingüística"],
        answer: 1,
        why: "«Dégonfler avec douceur» propone la corrección como desinflado sereno del estilo hinchado, no como guerra ni como teoría.",
      },
      quiz: [
        { q: "Que redevient « la mise en œuvre de la réforme sera étudiée » ?", kind: "literal", options: ["« Nous étudierons la réforme »", "« La réforme étudiera la mise en œuvre »", "Elle reste inchangée"], answer: 0, why: "La reducción al verbo está literal en el primer párrafo: el brouillard se levanta de una frase." },
        { q: "Pourquoi regarder par la fenêtre quand la fatigue monte ?", kind: "inferencial", options: ["Pour reposer l'œil et revenir à la ligne suivante", "Pour surveiller la rue", "Pour trouver des idées dans les nuages"], answer: 0, why: "«Posez le stylo, regardez la vraie lumière sur les vrais toits, puis revenez»: la pausa realimenta la corrección." },
        { q: "Comment le texte voit-il le style administratif ?", kind: "critica", options: ["Comme un habit trop grand qu'on reprend de couture", "Comme un ennemi à abattre", "Comme une science exacte"], answer: 0, why: "«Ce n'est pas un ennemi ; c'est un habit trop grand qu'on reprend de couture»: la metáfora que cierra el texto." },
      ],
      vf: [
        { text: "Le pari de Léo se gagne page par page.", value: false, why: "«Le pari se gagne phrase par phrase, jamais page par page»: la corrección es microscópica, nunca de página entera." },
        { text: "La chasse au jargon est décrite comme une guerre.", value: false, why: "Al contrario: «ce n'est pas une guerre : c'est un dégonflage», suave y metódico." },
        { text: "Le relâchement mental commence par un verbe à la fois.", value: true, why: "Está literal en el primer párrafo: «un seul geste — un verbe à la fois»." },
      ],
    },
    {
      id: "md-fr-c2-09-2", theme: "qui e ora",
      title: "Le verbe sous le stylo", titleEs: "El verbo bajo el bolígrafo",
      minutes: 2,
      paragraphs: [
        { it: "Couper demande une présence entière : on ne retranche pas une ligne en pensant à la suivante. L'économie des mots est un exercice d'attention — chaque phrase reçoit l'œil entier, comme une table reçoit un seul convive de marque. Le stylo suspendu au-dessus du manuscrit, la respiration posée, vous ne décidez plus dans le vague : vous êtes là, avec ce verbe, cette subordonnée, cette virgule de trop. Le reste du chapitre n'existe pas encore.", es: "Cortar exige una presencia entera: no se recorta una línea pensando en la siguiente. La economía de las palabras es un ejercicio de atención — cada frase recibe el ojo entero, como una mesa recibe a un solo comensal de categoría. El bolígrafo suspendido sobre el manuscrito, la respiración posada, ya no decidís en lo vago: estáis ahí, con este verbo, esta subordinada, esta coma de más. El resto del capítulo todavía no existe." },
        { it: "C'est la lenteur paradoxale de l'économie : moins de mots, plus de temps par mot. Madame Roche marque en jaune sans hâte : le jaune n'est pas un procès, c'est une invitation — ce passage peut-il recevoir un verbe qui marche ? Parfois la réponse est non, et la page garde son calme ; parfois elle est oui, et une phrase s'illumine, plus courte d'un tiers. Dans les deux cas, vous étiez là pour le voir. Une relecture habitée vaut dix relectures pressées.", es: "Esa es la lentitud paradójica de la economía: menos palabras, más tiempo por palabra. Madame Roche marca en amarillo sin prisa: el amarillo no es un juicio, es una invitación — ¿puede este pasaje recibir un verbo que camine? A veces la respuesta es no, y la página conserva su calma; a veces es sí, y una frase se ilumina, más corta en un tercio. En ambos casos, estabais ahí para verlo. Una relectura habitada vale por diez relecturas apuradas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo leer más rápido en el trabajo", "Cortar con presencia: cada frase recibe el ojo entero", "Los colores de la corrección de pruebas"],
        answer: 1,
        why: "«Le verbe sous le stylo» trata de la atención plena al cortar, no de la velocidad lectora ni de los códigos de color.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Moins de mots, plus de temps par mot : couper avec présence", "Il faut couper vite pour finir avant midi", "Le jaune de Madame Roche est un avertissement grave"], mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Chaque phrase reçoit l'œil entier", "Le jaune n'est pas un procès, c'est une invitation", "Une relecture habitée vaut dix relectures pressées"],
        distractors: ["Madame Roche relit exactement dix pages par heure", "Le manuscrit doit être rendu vendredi prochain", "Léo préfère travailler la nuit"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "On ne retranche pas une ligne en pensant à la suivante.",
          "Le stylo suspendu, vous êtes là, avec ce verbe, cette virgule de trop.",
          "Le jaune n'est pas un procès, c'est une invitation.",
          "Une relecture habitée vaut dix relectures pressées.",
          "La photocopie du chapitre trois coûte huit centimes par page.",
        ],
        intruder: 4,
        why: "El precio de las fotocopias es un dato administrativo de la editorial, ajeno a la presencia al cortar: es el intruso.",
      },
    },
    {
      id: "md-fr-c2-09-3", theme: "relax fisico",
      title: "La pause du relecteur", titleEs: "La pausa del corrector",
      minutes: 3,
      paragraphs: [
        { it: "Après deux heures de relecture, le corps du correcteur a pris la forme du manuscrit : nuque pliée, main crispée autour du stylo jaune, yeux secs. Rien d'exceptionnel — un métier s'installe dans un corps, comme une eau trouve son lit. La pause horaire n'est pas un luxe : c'est l'entretien du seul outil qui relise vraiment. Se lever, regarder loin par la fenêtre, ouvrir la main et la serrer trois fois, marcher jusqu'au couloir et revenir : quatre gestes, cinq minutes, un dos qui redescend.", es: "Después de dos horas de corrección, el cuerpo del corrector ha tomado la forma del manuscrito: nuca doblada, mano contraída alrededor del bolígrafo amarillo, ojos secos. Nada excepcional — un oficio se instala en un cuerpo, como un agua encuentra su cauce. La pausa de cada hora no es un lujo: es el mantenimiento de la única herramienta que relee de verdad. Levantarse, mirar lejos por la ventana, abrir la mano y cerrarla tres veces, caminar hasta el pasillo y volver: cuatro gestos, cinco minutos, una espalda que baja." },
        { it: "L'œil, lui, a sa règle à lui : toutes les vingt minutes, quitter la page pour un point lointain — les toits, une antenne, une branche — et le laisser s'y reposer dix secondes. Les correcteurs de vieille souche jurent que l'œil reposé voit les coquilles que l'œil tendu traverse. Le corps détendu, pareillement, entend le rythme des phrases : une cadence qui boite s'entend mieux assis droit, épaules ouvertes, que recroquevillé sur la ligne. La pause du relecteur n'interrompt pas le travail ; elle le continue par d'autres moyens.", es: "El ojo, por su parte, tiene su propia regla: cada veinte minutos, abandonar la página por un punto lejano — los tejados, una antena, una rama — y dejar que se recueste en él diez segundos. Los correctores de vieja escuela juran que el ojo descansado ve las erratas que el ojo tenso atraviesa. El cuerpo distendido, igualmente, oye el ritmo de las frases: una cadencia que cojea se oye mejor sentado recto, hombros abiertos, que encogido sobre la línea. La pausa del corrector no interrumpe el trabajo; lo continúa por otros medios." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo evitar erratas con software", "Las pausas físicas del corrector: espalda, mano y ojos", "La historia del oficio de corrector"],
        answer: 1,
        why: "«La pause du relecteur» detalla el descanso corporal (espalda, mano, vista) del corrector, no herramientas informáticas ni historia del oficio.",
      },
      sequence: {
        instr: "Ordena los gestos de la pausa según el texto:",
        events: [
          "Se lever, quitter la page",
          "Regarder par la fenêtre un point lointain",
          "Ouvrir la main et la serrer trois fois",
          "Marcher jusqu'au couloir et revenir",
          "Le dos redescend, l'œil reposé voit les coquilles",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Votre pause de l'heure, correcteur. Posez le stylo, levez-vous. Trois gestes seulement : d'abord, les yeux — cherchez le point le plus loin de la pièce, tenez-le dix secondes, sans forcer ; ensuite, la main — ouvrez-la, serrez-la, ouvrez-la encore, jusqu'à ce qu'elle oublie le stylo ; enfin, le dos — étirez-vous vers le plafond, puis laissez tomber les épaules. Rien d'autre. Quand vous vous assoirez, la page sera la même, mais elle vous paraîtra neuve.",
        questions: [
          { q: "Que cherchent vos yeux en premier ?", kind: "literal", options: ["Le point le plus loin de la pièce", "Le stylo jaune", "La photocopieuse"], answer: 0, why: "«Cherchez le point le plus loin de la pièce» está literal en el audio." },
          { q: "Combien de temps tenez-vous le regard lointain ?", kind: "literal", options: ["Dix secondes", "Vingt minutes", "Une seconde"], answer: 0, why: "«Tenez-le dix secondes, sans forcer»." },
          { q: "Quand la main oublie-t-elle le stylo ?", kind: "inferencial", options: ["Après l'avoir ouverte et serrée plusieurs fois", "Quand on change de métier", "Jamais, le stylo reste dans la main"], answer: 0, why: "«Ouvrez-la, serrez-la, ouvrez-la encore, jusqu'à ce qu'elle oublie le stylo»: se infiere la meta del gesto." },
          { q: "Que se passera-t-il quand vous vous assoirez ?", kind: "inferencial", options: ["La page sera la même, mais elle vous paraîtra neuve", "Vous oublierez tout le chapitre", "Vous devrez refaire la pause"], answer: 0, why: "«La page sera la même, mais elle vous paraîtra neuve»: la pausa renueva la mirada." },
        ],
      },
    },
  ],

  "fr-cu-c2-10": [
    {
      id: "md-fr-c2-10-1", theme: "spiritualità",
      title: "Recevoir une voix", titleEs: "Recibir una voz",
      minutes: 3,
      paragraphs: [
        { it: "Il y a des voix qui portent un monde : celle de Monsieur Azéma, quatre-vingt-douze ans, en est une. Quand il raconte l'école d'autrefois — l'encre, le froid, le maître qui parlait occitan à voix basse — ce n'est pas de l'information qui circule, c'est une offrande. Recevoir un témoignage, pour l'archive orale, ressemble à une cérémonie laïque : on ne prend pas, on reçoit ; on n'extrait pas, on accueille. Le magnétophone n'est qu'un témoin de plus, silencieux et reconnaissant.", es: "Hay voces que llevan un mundo dentro: la del señor Azéma, noventa y dos años, es una. Cuando cuenta la escuela de antes — la tinta, el frío, el maestro que hablaba occitano en voz baja — no es información lo que circula, es una ofrenda. Recibir un testimonio, para el archivo oral, se parece a una ceremonia laica: no se toma, se recibe; no se extrae, se acoge. El magnetófono no es más que un testigo más, silencioso y agradecido." },
        { it: "La gratitude, ici, n'a pas de grand mot : elle a des gestes. Arriver à l'heure, éteindre son téléphone, laisser le silence au vieil homme s'il hésite — une hésitation fait partie du témoignage, elle dit où la mémoire pèse. Inès, l'enquêtrice, pose une seule question par souffle, puis attend. Ce que le témoin donne entre deux questions — un mot dialectal, un rire, une phrase qui se referme — n'appartient à aucun questionnaire, et c'est souvent le trésor. L'archive vivante ne se récolte pas : elle se reçoit.", es: "La gratitud, aquí, no tiene gran palabra: tiene gestos. Llegar puntual, apagar el teléfono, dejar el silencio al anciano si duda — una vacilación forma parte del testimonio, dice dónde pesa la memoria. Inès, la encuestadora, plantea una sola pregunta por soplo, y espera. Lo que el testigo da entre dos preguntas — una palabra dialectal, una risa, una frase que se cierra sobre sí — no pertenece a ningún cuestionario, y es a menudo el tesoro. El archivo vivo no se cosecha: se recibe." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo transcribir entrevistas rápidamente", "Recibir el testimonio de un anciano como una ofrenda", "La historia de Occitania y su lengua"],
        answer: 1,
        why: "«Recevoir une voix» presenta el testimonio del señor Azéma como ceremonia laica de acogida, no como técnica de transcripción ni historia regional.",
      },
      quiz: [
        { q: "Comment est décrite la voix de Monsieur Azéma ?", kind: "literal", options: ["C'est une voix qui porte un monde", "C'est une voix faible et lasse", "C'est une voix de chanteur"], answer: 0, why: "«Il y a des voix qui portent un monde»: la frase abre el texto." },
        { q: "Pourquoi laisser le silence au vieil homme qui hésite ?", kind: "inferencial", options: ["Parce qu'une hésitation fait partie du témoignage : elle dit où la mémoire pèse", "Parce qu'il ne veut plus parler", "Pour économiser la cassette"], answer: 0, why: "«Une hésitation fait partie du témoignage, elle dit où la mémoire pèse»: se infiere el valor del silencio." },
        { q: "Comment s'obtient l'archive vivante, selon la dernière phrase ?", kind: "critica", options: ["Elle ne se récolte pas : elle se reçoit", "Elle s'extrait avec des questionnaires stricts", "Elle s'achète aux enchères"], answer: 0, why: "«L'archive vivante ne se récolte pas : elle se reçoit»: la tesis que cierra el texto." },
      ],
      vf: [
        { text: "Recevoir un témoignage ressemble à une cérémonie laïque.", value: true, why: "«Recevoir un témoignage, pour l'archive orale, ressemble à une cérémonie laïque»: literal en el primer párrafo." },
        { text: "Le magnétophone est le protagoniste de la cérémonie.", value: false, why: "«Le magnétophone n'est qu'un témoin de plus»: el protagonista es la voz del testigo." },
        { text: "Inès pose une seule question par souffle, puis attend.", value: true, why: "Está literal en el segundo párrafo: la pregunta única y la espera." },
      ],
    },
    {
      id: "md-fr-c2-10-2", theme: "meditazione",
      title: "L'imparfait comme demeure", titleEs: "El imperfecto como morada",
      minutes: 3,
      paragraphs: [
        { it: "Dans le récit de Monsieur Azéma, deux temps habitent la même voix : l'imparfait pour ce qui durait — l'école sentait l'encre, la route montait au moulin, personne ne se pressait — et le passé simple pour ce qui arriva une fois, une nuit : la tempête, l'arbre tombé. La méditation de l'auditeur consiste à demeurer dans l'imparfait comme dans une maison : y poser son attention, y respirer, y reconnaître un monde qui ne se hâte pas.", es: "En el relato del señor Azéma, dos tiempos habitan la misma voz: el imperfecto para lo que duraba — la escuela olía a tinta, el camino subía al molino, nadie se apresuraba — y el passé simple para lo que ocurrió una vez, una noche: la tormenta, el árbol caído. La meditación del oyente consiste en morar en el imperfecto como en una casa: posar en él la atención, respirar en él, reconocer en él un mundo que no se apresura." },
        { it: "C'est une étrange douceur, d'être hébergé par un temps grammatical. L'imparfait ne raconte plus : il maintient, il recommence, il tient la porte ouverte. Quand le passé simple survient — l'arbre tomba, la foudre frappa — le cœur de l'auditeur tressaille, puis retrouve la demeure. Ainsi va l'écoute des archives : un fond durable, des événements rares, et vous, entre les deux, installé dans la durée. Les grammairiens appellent cela de l'aspect ; les auditeurs attentifs l'appellent un paysage.", es: "Es una extraña suavidad, ser hospedado por un tiempo gramatical. El imperfecto ya no cuenta: mantiene, recomienza, sostiene la puerta abierta. Cuando llega el passé simple — el árbol cayó, el rayo golpeó — el corazón del oyente se estremece, y luego recupera la morada. Así va la escucha de los archivos: un fondo duradero, acontecimientos raros, y vosotros, entre los dos, instalados en la duración. Los gramáticos llaman a eso el aspecto; los oyentes atentos lo llaman un paisaje." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso de conjugación del passé simple", "Morar en el imperfecto del testimonio como en una casa", "Cómo fechar tormentas históricas"],
        answer: 1,
        why: "«L'imparfait comme demeure» hace del tiempo verbal una morada contemplativa, no una lección de conjugación ni un ejercicio de datación.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["L'imparfait maintient un monde durable où l'auditeur peut demeurer", "Le passé simple est le temps le plus élégant du français", "Il faut corriger les temps des témoins à la transcription"], mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["L'imparfait tient la porte ouverte", "Le passé simple raconte ce qui arriva une fois", "Les auditeurs attentifs l'appellent un paysage"],
        distractors: ["L'enregistrement dure exactement quatre-vingt-dix minutes", "Le moulin du village a brûlé deux fois", "Inès note chaque mot en sténo"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "L'école sentait l'encre, la route montait au moulin, personne ne se pressait.",
          "L'imparfait ne raconte plus : il maintient, il recommence.",
          "Quand le passé simple survient, le cœur tressaille, puis retrouve la demeure.",
          "Les archives départementales ferment à dix-sept heures.",
          "Vous êtes installé dans la durée, entre le fond et les événements.",
        ],
        intruder: 3,
        why: "El horario de cierre de los archivos es un dato administrativo, ajeno a la morada del imperfecto: es el intruso.",
      },
    },
    {
      id: "md-fr-c2-10-3", theme: "relax fisico",
      title: "Le corps de l'écoute", titleEs: "El cuerpo de la escucha",
      minutes: 2,
      paragraphs: [
        { it: "Écouter un vieil homme deux heures durant est un sport discret : le dos tient, la nuque reste libre, la main qui tient le micro ne se crispe pas. Le corps de l'enquêteur doit se faire meuble — présent, stable, invisible — pour que la voix de Monsieur Azéma ait toute la place. La respiration, surtout, se met au service de l'autre : souffle long, silences tenus, jamais ce petit bruit d'impatience qui presse un récit et le déforme.", es: "Escuchar a un anciano durante dos horas es un deporte discreto: la espalda aguanta, la nuca queda libre, la mano que sostiene el micro no se contrae. El cuerpo del encuestador debe hacerse mueble — presente, estable, invisible — para que la voz del señor Azéma tenga todo el sitio. La respiración, sobre todo, se pone al servicio del otro: soplo largo, silencios sostenidos, jamás ese pequeño ruido de impaciencia que apresura un relato y lo deforma." },
        { it: "Le protocole du corps est simple : avant l'entretien, s'asseoir au bord de la chaise, le dos droit, les deux pieds au sol ; poser le micro sur la table plutôt que de le brandir, comme un bouquet qu'on dépose ; toutes les demi-heures, déglutir, bâiller intérieurement, rouler les épaules en arrière sans bruit. Si la crampe gagne, bouger pendant les silences du témoin, jamais pendant ses phrases. À la fin, se lever lentement : le corps qui a écouté mérite aussi d'être remercié.", es: "El protocolo del cuerpo es simple: antes de la entrevista, sentarse al borde de la silla, la espalda recta, los dos pies en el suelo; posar el micro sobre la mesa antes que brandirlo, como un ramo que se deposita; cada media hora, tragar, bostezar interiormente, girar los hombros hacia atrás sin ruido. Si gana el calambre, moverse durante los silencios del testigo, nunca durante sus frases. Al final, levantarse despacio: el cuerpo que ha escuchado merece también ser agradecido." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo comprar un buen micrófono de solapa", "La postura corporal del encuestador que escucha largamente", "Ejercicios de voz para entrevistadores"],
        answer: 1,
        why: "«Le corps de l'écoute» detalla la postura y el aliento del que escucha el testimonio, no el equipo técnico ni los ejercicios vocales.",
      },
      sequence: {
        instr: "Ordena el protocolo del cuerpo según el texto:",
        events: [
          "S'asseoir au bord de la chaise, le dos droit, les pieds au sol",
          "Poser le micro sur la table, comme un bouquet",
          "Toutes les demi-heures, bâiller intérieurement, rouler les épaules",
          "Bouger pendant les silences du témoin, jamais pendant ses phrases",
          "Se lever lentement à la fin, remercier le corps qui a écouté",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Avant d'appuyer sur enregistrer, installez votre corps d'écoute. Le dos droit, mais souple, comme une chaise bien faite. Les deux pieds au sol. Le micro posé sur la table, entre vous et le témoin, jamais brandi. Puis trois respirations lentes, pour que votre souffle ne presse pas le sien. Quand Monsieur Azéma hésitera, vous ne bougerez pas : son silence fait partie de son récit. Vous êtes le meuble, lui est la maison.",
        questions: [
          { q: "Comment doit être le dos ?", kind: "literal", options: ["Droit, mais souple", "Très raide", "Complètement penché"], answer: 0, why: "«Le dos droit, mais souple, comme une chaise bien faite»." },
          { q: "Où posez-vous le micro ?", kind: "literal", options: ["Dans votre poche", "Sur la table, entre vous et le témoin", "Brandi au-dessus de la tête"], answer: 1, why: "«Le micro posé sur la table, jamais brandi»." },
          { q: "Pourquoi trois respirations lentes ?", kind: "inferencial", options: ["Pour que votre souffle ne presse pas celui du témoin", "Pour vous endormir un peu", "Pour faire passer le temps"], answer: 0, why: "«Pour que votre souffle ne presse pas le sien»: se infiere el propósito." },
          { q: "Que faites-vous quand le témoin hésite ?", kind: "inferencial", options: ["Vous le relancez tout de suite", "Vous éteignez le magnétophone", "Vous ne bougez pas : son silence fait partie de son récit"], answer: 2, why: "«Quand il hésitera, vous ne bougerez pas»: la vacilación pertenece al relato." },
        ],
      },
    },
  ],

  "fr-cu-c2-11": [
    {
      id: "md-fr-c2-11-1", theme: "relax mentale",
      title: "L'esprit sans filet", titleEs: "El espíritu sin red",
      minutes: 3,
      paragraphs: [
        { it: "L'improvisateur travaille sans filet : ni texte, ni plan B, rien à quoi se raccrocher. Et pourtant, le relâchement mental est sa meilleure préparation. L'esprit qui se remplit de scénarios se bloque au premier imprévu ; l'esprit qui reste vide, disponible, entend la consigne de l'arbitre comme un musicien entend la première note. La ligue d'improvisation l'enseigne à ses débutants : les meilleures sorties naissent dans une tête qui ne s'attendait à rien.", es: "El improvisador trabaja sin red: ni texto, ni plan B, nada a lo que agarrarse. Y sin embargo, la distensión mental es su mejor preparación. El espíritu que se llena de escenarios se bloquea ante el primer imprevisto; el espíritu que permanece vacío, disponible, oye la consigna del árbitro como un músico oye la primera nota. La liga de improvisación se lo enseña a sus principiantes: las mejores salidas nacen en una cabeza que no esperaba nada." },
        { it: "La pratique tient en un geste : avant le coup de sifflet, ne préparez pas. Regardez le public, sentez vos appuis, respirez une fois — et laissez la scène venir à vous. Le calembour se nouera seul, comme des lacets qu'on ne regarde pas. Si vous vous trompez de porte, entrez quand même : en improvisation, il n'y a pas de mauvaises portes, seulement des portes qu'on n'a pas encore ouvertes. Un esprit sans filet n'est pas un esprit insouciant ; c'est un esprit qui a rangé ses scénarios pour être tout entier dans la consigne.", es: "La práctica cabe en un gesto: antes del silbatazo, no preparéis. Mirad al público, sentid vuestros apoyos, respirad una vez — y dejad que la escena venga a vosotros. El calembour se anudará solo, como cordones que no se miran. Si os equivocáis de puerta, entrad de todos modos: en improvisación no hay malas puertas, solo puertas que todavía no se han abierto. Un espíritu sin red no es un espíritu despreocupado; es un espíritu que ha guardado sus escenarios para estar entero en la consigna." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo memorizar réplicas de improvisación", "La mente vacía y disponible como preparación del improvisador", "Las reglas del campeonato de improvisación"],
        answer: 1,
        why: "«L'esprit sans filet» apunta a la disponibilidad mental sin escenarios previos, no a memorizar réplicas ni al reglamento del torneo.",
      },
      quiz: [
        { q: "Comment l'esprit vide et disponible entend-il la consigne de l'arbitre ?", kind: "literal", options: ["Comme un musicien entend la première note", "Comme une corvée à éviter", "Comme une liste de courses"], answer: 0, why: "«Entend la consigne de l'arbitre comme un musicien entend la première note»: la comparación está literal." },
        { q: "Que faire si l'on se trompe de porte ?", kind: "inferencial", options: ["S'excuser et sortir de scène", "Entrer quand même : il n'y a pas de mauvaises portes", "Recommencer la scène du début"], answer: 1, why: "«Si vous vous trompez de porte, entrez quand même»: se infiere que el error es una apertura." },
        { q: "Qu'est-ce qu'un esprit sans filet, selon la dernière phrase ?", kind: "critica", options: ["Un esprit qui a rangé ses scénarios pour être tout entier dans la consigne", "Un esprit qui n'a peur de rien", "Un esprit qui refuse tout entraînement"], answer: 0, why: "La última frase lo define: no es despreocupación, es presencia sin escenarios." },
      ],
      vf: [
        { text: "L'improvisateur travaille avec un filet solide.", value: false, why: "«L'improvisateur travaille sans filet : ni texte, ni plan B»." },
        { text: "Les meilleures sorties naissent dans une tête qui ne s'attendait à rien.", value: true, why: "Está literal en el cierre del primer párrafo." },
        { text: "Un esprit sans filet est un esprit insouciant.", value: false, why: "Al contrario: «ce n'est pas un esprit insouciant», es presencia entera en la consigna." },
      ],
    },
    {
      id: "md-fr-c2-11-2", theme: "meditazione",
      title: "La seconde après le sifflet", titleEs: "El segundo después del silbato",
      minutes: 2,
      paragraphs: [
        { it: "Entre le coup de sifflet et le premier mot, il y a une seconde — et cette seconde est un monde. L'improvisateur entraîné l'habite entièrement : il y entend la consigne, y voit les yeux de son coéquipier, y sent la salle retenir son souffle. La méditation de la seconde n'est pas un ralenti artificiel ; c'est une dilatation naturelle de l'attention qui, bien posée, transforme vingt-quatre images en une scène entière. Les débutants la traversent en courant ; les vieux joueurs y demeurent.", es: "Entre el silbatazo y la primera palabra hay un segundo — y ese segundo es un mundo. El improvisador entrenado lo habita por entero: en él oye la consigna, ve los ojos de su compañero, siente que la sala retiene el aliento. La meditación del segundo no es una cámara lenta artificial; es una dilatación natural de la atención que, bien posada, transforma veinticuatro imágenes en una escena entera. Los principiantes la atraviesan corriendo; los jugadores veteranos permanecen en ella." },
        { it: "On peut s'entraîner à demeurer : chaque matin, une consigne inventée — « le dentiste », « la fin du monde en une phrase », « un calembour sur le pain » —, une inspiration, et l'on laisse la seconde s'ouvrir sans la remplir. Le mot juste n'est jamais celui qui arrive le plus vite ; c'est celui qui arrive à point, comme une balle qu'on laisse rebondir une fois avant de la prendre. La ligue appelle cela le timing ; la méditation l'appelle la patience en mouvement.", es: "Se puede entrenar la permanencia: cada mañana, una consigna inventada — «el dentista», «el fin del mundo en una frase», «un calembour sobre el pan»—, una inspiración, y se deja que el segundo se abra sin llenarlo. La palabra justa nunca es la que llega más deprisa; es la que llega a tiempo, como una pelota que se deja botar una vez antes de tomarla. La liga llama a eso el timing; la meditación lo llama la paciencia en movimiento." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo reaccionar más rápido que los rivales", "Habitar el segundo entre el silbato y la primera palabra", "Ejercicios de silbato para árbitros"],
        answer: 1,
        why: "«La seconde après le sifflet» abre ese instante como morada meditativa, no como carrera de velocidad ni como técnica arbitral.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Habiter entièrement la seconde entre le sifflet et le premier mot", "Il faut parler avant même la fin de la consigne", "Le timing est un don qu'on ne peut pas entraîner"], mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Cette seconde est une dilatation naturelle de l'attention", "Le mot juste arrive à point, comme une balle qu'on laisse rebondir", "La méditation appelle cela la patience en mouvement"],
        distractors: ["Le match se joue en trois manches de vingt minutes", "Léo porte le maillot rouge numéro sept", "Le théâtre loue ses salles le lundi"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Les billets du match se vendent huit euros à l'entrée.",
          "Cette seconde entre le sifflet et le premier mot est un monde.",
          "Les débutants la traversent en courant ; les vieux joueurs y demeurent.",
          "Le mot juste arrive à point, comme une balle qu'on laisse rebondir.",
          "La méditation appelle cela la patience en mouvement.",
        ],
        intruder: 0,
        why: "El precio de las entradas es un dato logístico del teatro, ajeno a la meditación del segundo: es el intruso.",
      },
    },
    {
      id: "md-fr-c2-11-3", theme: "spiritualità",
      title: "La parole qui circule", titleEs: "La palabra que circula",
      minutes: 3,
      paragraphs: [
        { it: "Dans une équipe d'improvisation, la parole circule comme une bougie qu'on se passe de main en main : chacun la tient un instant, l'éclaire de sa couleur, puis la rend. Il y a dans ce geste une petite spiritualité d'équipe — servir la scène, pas sa propre vanité ; faire briller le coéquipier, pas le score. Les publics le sentent aussitôt : une équipe qui se passe la parole avec grâce est belle à voir, même quand la consigne était impossible.", es: "En un equipo de improvisación, la palabra circula como una vela que se pasa de mano en mano: cada uno la sostiene un instante, la ilumina con su color, y luego la devuelve. Hay en ese gesto una pequeña espiritualidad de equipo — servir a la escena, no a la propia vanidad; hacer brillar al compañero, no al marcador. Los públicos lo sienten enseguida: un equipo que se pasa la palabra con gracia es hermoso de ver, incluso cuando la consigna era imposible." },
        { it: "Léo, le capitaine, a une règle : jamais couper un partenaire en train de construire — on peut poser une pierre, jamais retirer la sienne. La gratitude d'équipe se dit peu et se montre : un regard après une bonne relance d'Inès, un clin d'œil au banc, la manière d'accepter une sortie ratée comme un cadeau mal emballé. À la fin du match, gagné ou perdu, les mains se joignent — et la bougie, éteinte, continue de circuler quelque part, dans le rire du couloir, jusqu'à la prochaine scène.", es: "Léo, el capitán, tiene una regla: nunca cortar a un compañero que está construyendo — se puede poner una piedra, nunca retirar la suya. La gratitud de equipo se dice poco y se muestra: una mirada tras un buen relevo de Inès, un guiño al banquillo, la manera de aceptar una salida fallida como un regalo mal envuelto. Al final del partido, ganado o perdido, las manos se juntan — y la vela, apagada, sigue circulando en algún sitio, en la risa del pasillo, hasta la escena siguiente." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo ganar un match de improvisación", "La palabra compartida en el equipo como una vela que circula", "Técnicas de actuación para principiantes"],
        answer: 1,
        why: "«La parole qui circule» describe la espiritualidad del equipo que se pasa la palabra, no tácticas para ganar ni manual de actuación.",
      },
      sequence: {
        instr: "Ordena los momentos según el texto:",
        events: [
          "Un joueur tient la bougie : il éclaire la scène de sa couleur",
          "Il rend la parole à son coéquipier, comme la bougie passée",
          "Une sortie ratée est acceptée comme un cadeau mal emballé",
          "À la fin du match, les mains se joignent",
          "Le rire du couloir prolonge la bougie jusqu'à la prochaine scène",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Ce soir, dans le couloir du théâtre, avant le match, votre capitaine vous rappelle l'unique règle : servez la scène, pas vous-même. Quand un coéquipier tient la parole, regardez-le — votre regard est aussi un cadeau. Quand il vous la rend, prenez-la doucement, comme une bougie, sans éteindre la sienne. Et si une sortie tombe à plat, applaudissez-la quand même à l'intérieur : c'est un cadeau mal emballé, mais c'est un cadeau.",
        questions: [
          { q: "Quelle est l'unique règle rappelée par le capitaine ?", kind: "literal", options: ["Servez la scène, pas vous-même", "Gagnez à tout prix", "Parlez plus fort que les autres"], answer: 0, why: "«Servez la scène, pas vous-même» está literal en el audio." },
          { q: "Comment prendre la parole qu'on vous rend ?", kind: "literal", options: ["Vite, avant les autres", "Doucement, comme une bougie", "En la refusant poliment"], answer: 1, why: "«Prenez-la doucement, comme une bougie, sans éteindre la sienne»." },
          { q: "Pourquoi applaudir une sortie qui tombe à plat ?", kind: "inferencial", options: ["Parce que c'est un cadeau mal emballé, mais un cadeau", "Parce qu'il faut se moquer gentiment", "Parce que le public l'attend"], answer: 0, why: "«C'est un cadeau mal emballé, mais c'est un cadeau»: se infiere la gratitud incondicional." },
          { q: "Que représente le regard porté au coéquipier qui parle ?", kind: "inferencial", options: ["Un contrôle du capitaine", "Un moyen de le distraire", "Votre regard est aussi un cadeau"], answer: 2, why: "«Votre regard est aussi un cadeau»: la atención como ofrenda." },
        ],
      },
    },
  ],

  "fr-cu-c2-12": [
    {
      id: "md-fr-c2-12-1", theme: "spiritualità",
      title: "L'éloge comme offrande", titleEs: "El elogio como ofrenda",
      minutes: 3,
      paragraphs: [
        { it: "Prononcer un éloge, c'est offrir ce que l'on nomme. Sous le portrait d'Edmond Goncourt, au restaurant Drouant, la présidente du jury vous confie trois minutes pour faire briller une vie — et ces trois minutes sont une offrande laïque : ce que vous direz de la romancière ne lui appartiendra plus tout à fait ; il appartiendra à la salle, puis à ceux qui liront. Louer exige une condition intérieure que les anciens savaient : on ne loue pas bien ce qu'on envie. L'éloge commence par un déplacement — sortir de soi pour habiter la vie d'une autre.", es: "Pronunciar un elogio es ofrecer lo que se nombra. Bajo el retrato de Edmond Goncourt, en el restaurante Drouant, la presidenta del jurado os confía tres minutos para hacer brillar una vida — y esos tres minutos son una ofrenda laica: lo que digáis de la novelista ya no le pertenecerá del todo; pertenecerá a la sala, y luego a quienes lean. Alabar exige una condición interior que los antiguos conocían: no se alaba bien lo que se envidia. El elogio empieza con un desplazamiento — salir de sí para habitar la vida de otra." },
        { it: "La gratitude, ici, se travaille comme un texte : relire les livres de la lauréate, noter ce qui vous a touché sans chercher à le surpasser, laisser monter l'admiration jusqu'à ce qu'elle devienne simple. Alors seulement vient la gradation — elle a écrit des livres ; elle a écrit une époque ; elle a écrit nos vies — non comme une figure de style, mais comme une échelle réellement montée. Une péroraison ainsi préparée ne sonne pas comme un morceau de bravoure : elle sonne comme la vérité debout.", es: "La gratitud, aquí, se trabaja como un texto: releer los libros de la premiada, anotar lo que os conmovió sin buscar superarlo, dejar subir la admiración hasta que se vuelva simple. Solo entonces llega la gradación — escribió libros; escribió una época; escribió nuestras vidas — no como figura retórica, sino como una escalera realmente subida. Una péroraison así preparada no suena a alarde: suena a verdad de pie." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo ganar el premio Goncourt", "El elogio como ofrenda: alabar sin envidiar, habitar la vida de otra", "La historia del restaurante Drouant"],
        answer: 1,
        why: "«L'éloge comme offrande» presenta el elogio como ejercicio de gratitud y desplazamiento interior, no como crónica del premio ni del local.",
      },
      quiz: [
        { q: "Que devient ce que vous direz de la romancière ?", kind: "literal", options: ["Il appartiendra à la salle, puis à ceux qui liront", "Il restera votre propriété exclusive", "Il sera supprimé du discours final"], answer: 0, why: "«Il appartiendra à la salle, puis à ceux qui liront»: el destino de la palabra está literal." },
        { q: "Pourquoi la gradation sonne-t-elle vraie à la fin ?", kind: "inferencial", options: ["Parce qu'elle est une échelle réellement montée par l'admiration", "Parce qu'elle est très longue", "Parce qu'elle surprend la salle"], answer: 0, why: "«Non comme une figure de style, mais comme une échelle réellement montée»: se infiere la autenticidad." },
        { q: "Quelle condition intérieure l'éloge exige-t-il ?", kind: "critica", options: ["On ne loue pas bien ce qu'on envie", "Il faut connaître la lauréate depuis vingt ans", "Il faut éviter toute émotion"], answer: 0, why: "«On ne loue pas bien ce qu'on envie»: la condición que los antiguos conocían." },
      ],
      vf: [
        { text: "L'éloge commence par un déplacement hors de soi.", value: true, why: "«L'éloge commence par un déplacement — sortir de soi pour habiter la vie d'une autre»." },
        { text: "La gratitude se travaille comme un texte, selon le second paragraphe.", value: true, why: "«La gratitude, ici, se travaille comme un texte»: releer, anotar, dejar subir la admiración." },
        { text: "Une péroraison préparée sonne comme un morceau de bravoure.", value: false, why: "Al contrario: «elle sonne comme la vérité debout», no como alarde." },
      ],
    },
    {
      id: "md-fr-c2-12-2", theme: "qui e ora",
      title: "Trois minutes, une voix", titleEs: "Tres minutos, una voz",
      minutes: 2,
      paragraphs: [
        { it: "La salle du Drouant fait son entrée de scène à elle : les fourchettes sonnent, puis se taisent, et le silence qui tombe sur trois cents convives pèse comme un rideau. C'est dans ce silence que votre voix commence — et les trois minutes ne se récitent pas, elles s'habitent. Être présent, phrase après phrase : la première pour poser la vie, la deuxième pour la regarder, la troisième pour la remercier. Le brouillon reste dans la poche ; ce qui compte est là, dans la voix qui traverse la salle à la vitesse exacte de la gratitude.", es: "La sala del Drouant hace ella misma su entrada en escena: los tenedores suenan, luego callan, y el silencio que cae sobre trescientos comensales pesa como un telón. Es en ese silencio donde vuestra voz empieza — y los tres minutos no se recitan, se habitan. Estar presente, frase a frase: la primera para posar la vida, la segunda para mirarla, la tercera para agradecerla. El borrador se queda en el bolsillo; lo que cuenta está ahí, en la voz que atraviesa la sala a la velocidad exacta de la gratitud." },
        { it: "Madame Aubry, en répétition, a nommé les deux pièges : la peur d'oublier, qui fait courir vers la fin ; l'envie de briller, qui fait sauter les marches de la gradation. Les deux se soignent pareil — en revenant à la respiration et à la phrase en cours, comme un funambule revient à son fil. Ce soir, il y a une voix, une salle, une lauréate qui ne sait pas encore ce qu'on dira d'elle. C'est assez pour être entièrement là. Le reste — le papier, l'applaudissement, le verre de champagne — attendra sa minute, qui viendra après.", es: "Madame Aubry, en el ensayo, nombró las dos trampas: el miedo a olvidar, que hace correr hacia el final; las ganas de brillar, que hacen saltarse los peldaños de la gradación. Las dos se curan igual — volviendo a la respiración y a la frase en curso, como un funámbulo vuelve a su cuerda. Esta noche hay una voz, una sala, una premiada que todavía no sabe lo que se dirá de ella. Es bastante para estar enteramente ahí. Lo demás — el papel, el aplauso, la copa de champán — esperará su minuto, que vendrá después." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo redactar un discurso con antelación", "Habitar los tres minutos del homenaje, frase a frase", "Protocolo de una cena de gala parisina"],
        answer: 1,
        why: "«Trois minutes, une voix» trata de la presencia en el discurso, no de la redacción previa ni del protocolo de la velada.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Les trois minutes ne se récitent pas : elles s'habitent, phrase après phrase", "Il faut dépasser le temps imparti pour être sincère", "Le brouillon doit rester sur le pupitre"], mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["La première phrase pose la vie, la deuxième la regarde, la troisième la remercie", "La peur d'oublier fait courir vers la fin", "Il y a une voix, une salle, une lauréate : c'est assez"],
        distractors: ["Le dîner commence par un velouté de courge", "La lauréate a écrit six romans en dix ans", "Madame Aubry parle toujours la première"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Les fourchettes sonnent, puis se taisent : le silence pèse comme un rideau.",
          "Les trois minutes ne se récitent pas, elles s'habitent.",
          "La peur d'oublier fait courir vers la fin.",
          "Le champagne est servi à vingt-deux heures précises.",
          "Ce qui compte est dans la voix, à la vitesse exacte de la gratitude.",
        ],
        intruder: 3,
        why: "La hora del champán es un dato logístico de la velada, ajeno a la presencia en los tres minutos: es el intruso.",
      },
    },
    {
      id: "md-fr-c2-12-3", theme: "relax mentale",
      title: "Redescendre du pupitre", titleEs: "Bajar del atril",
      minutes: 3,
      paragraphs: [
        { it: "Après la péroraison, l'applaudissement monte — et il faut le traverser sans le saisir. La tentation du tribun est de rester en haut : la voix qui a porté voudrait porter toujours, l'adrénaline redemande son podium. Redescendre du pupitre est un art discret : saluer, rendre le micro, retrouver ses mains ordinaires, sa voix de tous les jours, celle qui commande un café. Le corps sait faire cette descente si on le laisse faire ; c'est l'esprit qui s'accroche aux marches.", es: "Después de la péroraison, sube el aplauso — y hay que atravesarlo sin agarrarlo. La tentación del tribuno es quedarse arriba: la voz que ha llevado querría llevar siempre, la adrenalina vuelve a pedir su podio. Bajar del atril es un arte discreto: saludar, devolver el micro, recuperar las manos corrientes, la voz de todos los días, la que pide un café. El cuerpo sabe hacer ese descenso si se le deja; es el espíritu el que se aferra a los peldaños." },
        { it: "Le soir, laissez le discours finir vraiment : les félicitations passent comme des voitures sur un quai, on les regarde passer sans courir après. Une douche, une marche, dix minutes assis à ne rien reconstruire — la descente se fait seule, palier après palier. Demain, la page blanche attendra son éloge à elle ; ce soir, il suffit d'être descendu, les deux pieds sur le trottoir de la rue Gaillon, une voix ordinaire et reposée. Les grands discours se reposent comme les grandes voix : en silence.", es: "Por la noche, dejad que el discurso termine de verdad: las felicitaciones pasan como coches por un andén, se las mira pasar sin correr tras ellas. Una ducha, un paseo, diez minutos sentado a no reconstruir nada — la bajada se hace sola, rellano tras rellano. Mañana, la página en blanco esperará su propio elogio; esta noche basta con haber bajado, los dos pies en la acera de la rue Gaillon, una voz corriente y descansada. Los grandes discursos descansan como las grandes voces: en silencio." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo recoger los aplausos con elegancia", "Bajar del atril y descomprimir la voz tras el discurso", "Dónde cenar después de una ceremonia"],
        answer: 1,
        why: "«Redescendre du pupitre» trata de la descompresión posterior al discurso, no del saludo al público ni de la elección de restaurante.",
      },
      sequence: {
        instr: "Ordena la bajada según el texto:",
        events: [
          "L'applaudissement monte : vous le traversez sans le saisir",
          "Vous saluez et rendez le micro",
          "Vous retrouvez vos mains ordinaires, votre voix de tous les jours",
          "Les félicitations passent comme des voitures : vous les regardez passer",
          "Le soir, vous êtes descendu, une voix ordinaire et reposée",
        ],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Le discours est fini ; maintenant, la descente. Respirez une fois, longuement, debout encore. Saluez la salle d'un regard, rendez le micro au technicien, et marchez vers votre table sans vous retourner. Puis, assis, laissez l'adrénaline quitter vos épaules comme une veste qu'on dépose. Les félicitations viendront : recevez-les comme des passants, un sourire chacune, sans les garder. Ce soir, votre voix redevient celle de tous les jours, et c'est une bonne nouvelle.",
        questions: [
          { q: "Que faites-vous debout, juste après le discours ?", kind: "literal", options: ["Vous respirez une fois, longuement", "Vous recommencez la péroraison", "Vous quittez la salle en courant"], answer: 0, why: "«Respirez une fois, longuement, debout encore»." },
          { q: "À qui rendez-vous le micro ?", kind: "literal", options: ["Au technicien", "À la lauréate", "Au chef cuisinier"], answer: 0, why: "«Rendez le micro au technicien»." },
          { q: "Comment recevez-vous les félicitations ?", kind: "literal", options: ["Comme des trophées à compter", "Comme des passants, un sourire chacune", "Comme des ordres à exécuter"], answer: 1, why: "«Recevez-les comme des passants, un sourire chacune, sans les garder»." },
          { q: "Que quitte vos épaules, assis à table ?", kind: "inferencial", options: ["L'adrénaline, comme une veste qu'on dépose", "La cravate", "La voix du discours"], answer: 0, why: "«Laissez l'adrénaline quitter vos épaules comme une veste qu'on dépose»: la imagen de la bajada." },
          { q: "Pourquoi est-ce une bonne nouvelle que la voix redevienne ordinaire ?", kind: "inferencial", options: ["Parce que la descente est accomplie et le corps retrouve son repos", "Parce que la voix ordinaire plaît davantage au jury", "Parce que le discours a été mauvais"], answer: 0, why: "La vuelta a la voz cotidiana cierra la descompresión: se infiere del tono final del audio." },
        ],
      },
    },
  ],
};
