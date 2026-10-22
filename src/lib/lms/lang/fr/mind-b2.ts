import type { MindReading } from "../../cambridge-mind";

/* ═══ FR B2 · Mind readings (temáticas de conciencia) — 3 por unidad ══
   Metodología v9.13: 7 estrategias de comprensión lectora y de
   escucha, en francés de Francia nivel B2 (ensayo reflexivo, matiz)
   con traducción española a la vista. Campos `.it` = francés, `.es` =
   español. Estrategia por posición: L1 = predict + quiz (lit/inf/
   crít) + V/F ; L2 = predict + ideas + intruso ; L3 = predict +
   secuencia + escucha. Temas rotados: meditazione · spiritualità ·
   qui e ora · relax fisico · relax mentale. */

export const FR_MIND_B2: Record<string, MindReading[]> = {
  "fr-cu-b2-01": [
    {
      id: "md-fr-b2-01-1", theme: "meditazione",
      title: "Respirer avant de prendre la parole", titleEs: "Respirar antes de tomar la palabra", minutes: 2,
      paragraphs: [
        { it: "La salle de débat est comble, et ton tour approche : dans deux minutes, le modérateur t'interrogera. Pose une main sur ton ventre et respire. À l'inspiration, il se gonfle ; à l'expiration, il redescend. Trois cycles suffisent pour que la voix, un instant, cesse de trembler.", es: "La sala del debate está llena y tu turno se acerca: en dos minutos el moderador te preguntará. Pon una mano sobre tu vientre y respira. Con la inspiración, se infla; con la espiración, baja. Tres ciclos bastan para que la voz, un instante, deje de temblar." },
        { it: "La méditation n'exige ni coussin ni silence parfait : elle commence exactement ici, dans un corps qui respire au milieu du bruit. Chaque inspiration est une page blanche, chaque expiration une phrase achevée. Si ton esprit rédige déjà ta réponse pendant que l'autre parle, reviens simplement au souffle : la parole juste viendra après, quand le corps sera redevenu calme.", es: "La meditación no exige cojín ni silencio perfecto: empieza exactamente aquí, en un cuerpo que respira en medio del ruido. Cada inspiración es una página en blanco, cada espiración una frase terminada. Si tu mente ya redacta tu respuesta mientras el otro habla, vuelve simplemente a la respiración: la palabra justa vendrá después, cuando el cuerpo se haya vuelto a calmar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de técnicas de debate", "Respirar para calmarse antes de intervenir en un debate", "La biografía de un moderador famoso"],
        answer: 1,
        why: "El título une la respiración y el momento de hablar: apunta a calmarse antes de intervenir, no a técnicas de debate ni biografías.",
      },
      quiz: [
        { q: "Que fais-tu avec ta main ?", kind: "literal", options: ["Tu la poses sur ton ventre", "Tu la lèves pour parler", "Tu la caches sous la table"], answer: 0, why: "«Pose une main sur ton ventre»: está literal al inicio del texto." },
        { q: "Pourquoi l'esprit rédige-t-il la réponse pendant que l'autre parle ?", kind: "inferencial", options: ["Parce qu'il quitte l'écoute, et le souffle le ramène", "Parce que la méditation l'interdit", "Parce que le modérateur l'exige"], answer: 0, why: "Se infiere que la mente se adelanta y deja de escuchar: el texto propone volver al souffle." },
        { q: "Quelle est l'idée essentielle du texte ?", kind: "critica", options: ["Méditer demande un coussin et le silence", "La méditation commence dans un corps qui respire, même au milieu du bruit", "Il faut rédiger sa réponse avant de débattre"], answer: 1, why: "La idea central es que la práctica no exige condiciones perfectas: empieza en un cuerpo que respira en medio del ruido." },
      ],
      vf: [
        { text: "Trois cycles de respiration suffisent pour calmer la voix.", value: true, why: "«Trois cycles suffisent pour que la voix cesse de trembler»." },
        { text: "La méditation exige un silence parfait.", value: false, why: "El texto dice que no exige ni cojín ni silencio perfecto." },
        { text: "Chaque expiration est comparée à une phrase achevée.", value: true, why: "«Chaque expiration une phrase achevée»: la metáfora del texto." },
      ],
    },
    {
      id: "md-fr-b2-01-2", theme: "relax mentale",
      title: "L'esprit qui prépare sa réponse", titleEs: "La mente que prepara su respuesta", minutes: 2,
      paragraphs: [
        { it: "Écoutes-tu vraiment, ou attends-tu ton tour de parler ? La plupart du temps, pendant que l'autre parle, un petit secrétaire intérieur rédige déjà ta réponse, corrige tes arguments, imagine ta victoire. Ce secrétaire zélé croit bien faire : il te protège de l'imprévu. En réalité, il t'empêche d'entendre.", es: "¿Escuchas de verdad o esperas tu turno para hablar ? La mayor parte del tiempo, mientras el otro habla, un pequeño secretario interior ya redacta tu respuesta, corrige tus argumentos, imagina tu victoria. Ese secretario celoso cree hacer bien: te protege de lo imprevisto. En realidad, te impide oír." },
        { it: "Le relâchement mental commence par un geste très simple : remercie le secrétaire, et renvoie-le à la porte. Tu n'as pas besoin de ta réponse avant la fin de la phrase de l'autre. Écoute les mots, le ton, les silences ; laisse la réponse se former toute seule, comme une eau qui retrouve son niveau. L'esprit qui n'anticipe pas est plus rapide que l'esprit qui prépare.", es: "La relajación mental empieza con un gesto muy simple: agradece al secretario y devuélvelo a la puerta. No necesitas tu respuesta antes del final de la frase del otro. Escucha las palabras, el tono, los silencios; deja que la respuesta se forme sola, como un agua que recupera su nivel. La mente que no anticipa es más rápida que la mente que prepara." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso de secretariado", "El ruido mental de preparar la respuesta mientras el otro habla", "Cómo ganar cualquier discusión"],
        answer: 1,
        why: "El título describe a la mente que redacta en vez de escuchar: apunta al ruido mental de anticipar la respuesta.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Écouter vraiment suppose de ne pas rédiger sa réponse à l'avance",
          "Le secrétaire intérieur est un vrai métier d'avenir",
          "Il faut couper la parole pour être plus rapide",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Le secrétaire intérieur croit te protéger de l'imprévu", "Écoute les mots, le ton, les silences", "L'esprit qui n'anticipe pas est plus rapide"],
        distractors: ["Il faut répondre avant la fin de la phrase", "Le débat se gagne en criant plus fort", "Le silence est une forme d'impolitesse"],
      },
      intruder: {
        instr: "Una de estas frases no pertenece a la lógica del texto. ¿Cuál es el intruso?",
        sentences: [
          "Pendant que l'autre parle, un secrétaire intérieur rédige déjà ta réponse.",
          "Ce secrétaire zélé croit bien faire.",
          "Écoute les mots, le ton, les silences.",
          "Un débat se gagne toujours avec des chiffres exacts.",
          "L'esprit qui n'anticipe pas est plus rapide.",
        ],
        intruder: 3,
        why: "La estrategia de ganar con cifras es ajena al tema del texto (escuchar sin anticipar): es el intruso.",
      },
    },
    {
      id: "md-fr-b2-01-3", theme: "spiritualità",
      title: "Écouter comme un cadeau", titleEs: "Escuchar como un regalo", minutes: 3,
      paragraphs: [
        { it: "Il existe une écoute qui ne prépare rien, ne corrige rien, n'attend rien. On pourrait l'appeler l'écoute offerte : tu reçois la voix de l'autre comme on reçoit un cadeau, sans emballer le tien pendant qu'il parle encore. Les traditions de sagesse la placent très haut : écouter sans défendre sa position est déjà une forme de générosité.", es: "Existe una escucha que no prepara nada, no corrige nada, no espera nada. Se podría llamar la escucha ofrecida: recibes la voz del otro como se recibe un regalo, sin envolver el tuyo mientras él todavía habla. Las tradiciones de sabiduría la sitúan muy alto: escuchar sin defender la propia postura es ya una forma de generosidad." },
        { it: "Cet exercice spirituel ne demande aucun courage héroïque : trois minutes suffisent. Choisis une personne, ce soir, et écoute-la sans rien préparer en retour. Si ton esprit bâtissait déjà sa réponse, note-le avec douceur et reviens à sa voix. À la fin, tu remarqueras quelque chose d'étrange : sans avoir rien dit, tu auras été pleinement présent.", es: "Este ejercicio espiritual no pide ningún valor heroico: bastan tres minutos. Elige a una persona, esta noche, y escúchala sin preparar nada a cambio. Si tu mente ya construía su respuesta, tómalo con suavidad y vuelve a su voz. Al final notarás algo extraño: sin haber dicho nada, habrás estado plenamente presente." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de venta persuasiva", "Escuchar sin preparar la respuesta como práctica de presencia", "Un curso de hacer regalos"],
        answer: 1,
        why: "El título compara la escucha con un regalo recibido: apunta a la escucha desinteresada, no a la persuasión.",
      },
      quiz: [
        { q: "Comment appelle-t-on cette écoute ?", kind: "literal", options: ["L'écoute offerte", "L'écoute rapide", "L'écoute sélective"], answer: 0, why: "«On pourrait l'appeler l'écoute offerte»: el nombre está literal en el texto." },
        { q: "Que fais-tu quand ton esprit bâtit déjà sa réponse ?", kind: "inferencial", options: ["Tu le notes avec douceur et reviens à la voix", "Tu arrêtes d'écouter", "Tu l'interromps poliment"], answer: 0, why: "«Note-le avec douceur et reviens à sa voix»: la reacción es observarla y volver." },
        { q: "Que signifie «tu auras été pleinement présent» ?", kind: "critica", options: ["On peut être présent sans rien dire", "Parler est la seule présence possible", "Le silence équivaut à une absence"], answer: 0, why: "La idea crítica: la presencia no depende de hablar; el silencio atento también es presencia." },
      ],
      vf: [
        { text: "L'écoute offerte prépare déjà sa réponse.", value: false, why: "Al contrario: «ne prépare rien, ne corrige rien, n'attend rien»." },
        { text: "L'exercice dure trois minutes.", value: true, why: "«Trois minutes suffisent»: la duración propuesta." },
        { text: "Les traditions de sagesse valorisent cette écoute.", value: true, why: "«Les traditions de sagesse la placent très haut»." },
      ],
      sequence: {
        instr: "Ordena los momentos del ejercicio de escucha ofrecida:",
        events: ["Tu choisis une personne à écouter ce soir", "Tu reçois sa voix sans rien préparer en retour", "Ton esprit se met à bâtir une réponse", "Tu le notes avec douceur et reviens à sa voix", "À la fin, sans avoir rien dit, tu remarques que tu as été pleinement présent"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Ce soir, une expérience simple : choisis quelqu'un, et écoute-le sans rien préparer. Quand ta voix intérieure voudra répondre, remarque-la, souris-lui, et reviens aux mots de l'autre. Trois minutes suffisent. Tu verras : sans avoir rien dit, tu auras offert quelque chose de rare, une présence entière, et l'autre le sentira sans pouvoir le nommer.",
        questions: [
          { q: "Que fait-on quand la voix intérieure veut répondre ?", kind: "literal", options: ["On la remarque et on revient aux mots", "On lui obéit tout de suite", "On quitte la conversation"], answer: 0, why: "«Remarque-la, souris-lui, et reviens aux mots de l'autre»." },
          { q: "Combien de temps dure l'expérience ?", kind: "literal", options: ["Une heure", "Trois minutes", "Trois heures"], answer: 1, why: "«Trois minutes suffisent»: la cifra está literal en el audio." },
          { q: "Qu'offres-tu sans avoir rien dit ?", kind: "inferencial", options: ["Un cadeau matériel", "Un conseil très utile", "Une présence entière"], answer: 2, why: "El audio lo dice al final: algo raro, una presencia entera." },
          { q: "Pourquoi sourire à la voix intérieure ?", kind: "inferencial", options: ["Pour l'accueillir sans la suivre", "Pour la faire taire définitivement", "Pour rire de l'autre personne"], answer: 0, why: "Se infiere que sonreírsela la acoge sin obedecerla: amabilidad, no rechazo." },
        ],
      },
    },
  ],

  "fr-cu-b2-02": [
    {
      id: "md-fr-b2-02-1", theme: "spiritualità",
      title: "La gratitude solennelle", titleEs: "La gratitud solemne", minutes: 3,
      paragraphs: [
        { it: "Dans les grandes cérémonies, la gratitude se dit lentement, avec des formules anciennes. Ce rituel n'est pas qu'un vestige : remercier à voix haute, dans un ordre précis, oblige l'esprit à s'arrêter sur chaque dette heureuse. Le protocole — les institutions d'abord, les maîtres ensuite, les proches enfin — dessine une carte de ce qui nous porte.", es: "En las grandes ceremonias, la gratitud se dice despacio, con fórmulas antiguas. Este rito no es solo un vestigio: dar las gracias en voz alta, en un orden preciso, obliga a la mente a detenerse en cada deuda feliz. El protocolo —primero las instituciones, después los maestros, al final los cercanos— dibuja un mapa de lo que nos sostiene." },
        { it: "Tu peux célébrer ta propre cérémonie, sans estrade ni bouquet. Ce soir, nomme trois personnes : celle qui t'a ouvert une porte, celle qui a corrigé ton premier texte, celle qui était là sans raison. Dis leur nom lentement, comme on dépose des fleurs. La gratitude solennelle n'est pas du folklore : c'est l'art de reconnaître qu'on n'arrive jamais seul.", es: "Puedes celebrar tu propia ceremonia, sin tarima ni ramo. Esta noche, nombra a tres personas: la que te abrió una puerta, la que corrigió tu primer texto, la que estuvo ahí sin razón. Di su nombre despacio, como quien deposita flores. La gratitud solemne no es folclore: es el arte de reconocer que nunca se llega solo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Etics del protocolo diplomático", "La gratitud ritual como mapa de lo que nos sostiene", "Cómo organizar una gala de premios"],
        answer: 1,
        why: "El título apunta al agradecimiento solemne y su sentido, no a la logística de actos ni a la etiqueta.",
      },
      quiz: [
        { q: "Qui remercie-t-on en premier dans le protocole ?", kind: "literal", options: ["Les institutions", "Les proches", "Les inconnus"], answer: 0, why: "«Les institutions d'abord»: el orden protocolario está literal en el texto." },
        { q: "Pourquoi dire les noms lentement ?", kind: "inferencial", options: ["Pour que l'esprit s'arrête sur chaque dette heureuse", "Pour gagner du temps", "Pour ne pas oublier personne"], answer: 0, why: "Se infiere del paralelismo con la ceremonia: la lentitud hace detenerse en cada deuda feliz." },
        { q: "«On n'arrive jamais seul» exprime l'idée que…", kind: "critica", options: ["la réussite est toujours collective en partie", "il faut refuser l'aide des autres", "la solitude est une force"], answer: 0, why: "La idea crítica: el éxito es siempre en parte colectivo; el mapa del protocolo lo muestra." },
      ],
      vf: [
        { text: "Le protocole remercie les proches en premier.", value: false, why: "El orden es instituciones, maestros y por último los cercanos." },
        { text: "La gratitude oblige l'esprit à s'arrêter sur chaque dette heureuse.", value: true, why: "«Oblige l'esprit à s'arrêter sur chaque dette heureuse»." },
        { text: "On peut célébrer sa propre cérémonie sans estrade.", value: true, why: "«Sans estrade ni bouquet»: la ceremonia personal no necesita escenario." },
      ],
    },
    {
      id: "md-fr-b2-02-2", theme: "meditazione",
      title: "La lenteur qui donne sa profondeur", titleEs: "La lentitud que da profundidad", minutes: 2,
      paragraphs: [
        { it: "« Qu'ils n'aient pas peur de la lenteur : c'est elle qui donne leur profondeur aux idées. » Cette phrase, dite sur une scène, vaut aussi pour la méditation. L'esprit moderne court : il survole, il zappe, il résume. La méditation fait le mouvement inverse : elle ralentit jusqu'à ce qu'un seul souffle devienne un événement.", es: "«Que no le tengan miedo a la lentitud: es ella la que da profundidad a las ideas». Esa frase, dicha en un escenario, sirve también para la meditación. La mente moderna corre: sobrevuela, zapea, resume. La meditación hace el movimiento inverso: desacelera hasta que un solo soplo se vuelve un acontecimiento." },
        { it: "Assieds-toi quatre minutes sans autre projet que de suivre l'air qui entre et qui sort. Quand l'impatience arrive — et elle arrivera —, ne la chasse pas : observe-la comme un nuage pressé. La lenteur n'est pas de la paresse ; c'est une autre vitesse, celle où les choses enfin se laissent voir. Les idées profondes ne courent jamais.", es: "Siéntate cuatro minutos sin otro proyecto que seguir el aire que entra y que sale. Cuando llegue la impaciencia —y llegará—, no la expulses: obsérvala como una nube apurada. La lentitud no es pereza; es otra velocidad, aquella en la que las cosas por fin se dejan ver. Las ideas profundas nunca corren." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de lectura rápida", "La lentitud como fuente de profundidad en la meditación", "Un entrenamiento deportivo de velocidad"],
        answer: 1,
        why: "El título enlaza lentitud y profundidad: apunta a meditar despacio, no a leer rápido ni al deporte.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "La méditation inverse le mouvement de l'esprit moderne en ralentissant",
          "La lenteur est une forme de paresse assumée",
          "Les idées profondes courent plus vite que les autres",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["L'esprit moderne survole, zappe, résume", "L'impatience s'observe comme un nuage pressé", "Un seul souffle peut devenir un événement"],
        distractors: ["La lenteur garantit la réussite professionnelle", "Il faut chasser l'impatience dès qu'elle arrive", "Quatre heures de méditation sont nécessaires"],
      },
      intruder: {
        instr: "Una de estas frases no pertenece a la lógica del texto. ¿Cuál es el intruso?",
        sentences: [
          "L'esprit moderne court : il survole, il zappe, il résume.",
          "La méditation ralentit jusqu'à ce qu'un souffle devienne un événement.",
          "L'impatience s'observe comme un nuage pressé.",
          "Un bon méditant ne respire que par la bouche.",
          "Les idées profondes ne courent jamais.",
        ],
        intruder: 3,
        why: "La respiración por la boca no aparece en el texto y contradice la práctica clásica: es el intruso.",
      },
    },
    {
      id: "md-fr-b2-02-3", theme: "relax fisico",
      title: "Debout devant le monde", titleEs: "De pie ante el mundo", minutes: 2,
      paragraphs: [
        { it: "Se tenir debout longtemps — sur une scène, dans une file d'attente, devant un jury — fatigue avant même d'avoir commencé. Le corps se raidit, les genoux se verrouillent, la respiration monte dans la poitrine et raccourcit. La fatigue du debout est d'abord une fatigue d'oubli : on oublie ses pieds.", es: "Mantenerse de pie mucho tiempo —en un escenario, en una cola, ante un jurado— cansa incluso antes de empezar. El cuerpo se entumece, las rodillas se bloquean, la respiración sube al pecho y se acorta. El cansancio del de pie es primero un cansancio de olvido: uno olvida sus pies." },
        { it: "Fais le test maintenant : déverrouille doucement les genoux, sens le poids descendre dans les pieds, le sol monter à ta rencontre. Allonge la colonne sans la raidir, comme un fil suspendu au sommet du crâne. Respire dans le ventre, pas dans les épaules. Ce debout-là n'est plus une posture de combat : c'est une posture d'accueil, et elle peut durer des heures.", es: "Haz la prueba ahora: desbloquea suavemente las rodillas, siente el peso bajar hacia los pies, el suelo subir a tu encuentro. Alarga la columna sin entumecerla, como un hilo suspendido de la coronilla. Respira en el vientre, no en los hombros. Ese de pie ya no es una postura de combate: es una postura de acogida, y puede durar horas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso de postura militar", "Relajar el cuerpo de pie durante esperas y ceremonias", "Cómo dormir de pie"],
        answer: 1,
        why: "El título evoca estar de pie ante los demás: apunta a soltar el cuerpo, no a la disciplina militar.",
      },
      sequence: {
        instr: "Ordena los pasos del ajuste corporal según el texto:",
        events: ["Tu déverrouilles doucement les genoux", "Tu sens le poids descendre dans les pieds", "Tu allonges la colonne sans la raidir", "Tu respires dans le ventre", "Tu restes debout dans une posture d'accueil"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Bonsoir. Debout, tu sens tes pieds sous toi. Déverrouille un peu les genoux, sans plier. Laisse le poids de ton corps descendre vers le sol, et laisse le sol te porter. Allonge la nuque, comme si un fil te tirait doucement vers le ciel. Respire une fois dans le ventre. Voilà : tu peux rester debout longtemps, sans te raidir.",
        questions: [
          { q: "Que font les genoux dans l'audio ?", kind: "literal", options: ["Ils se déverrouillent sans plier", "Ils se plient complètement", "Ils restent verrouillés"], answer: 0, why: "«Déverrouille un peu les genoux, sans plier»." },
          { q: "Où respire-t-on ?", kind: "literal", options: ["Dans le ventre", "Dans les épaules", "Dans la gorge"], answer: 0, why: "«Respire une fois dans le ventre»." },
          { q: "À quoi sert l'image du fil ?", kind: "inferencial", options: ["À allonger la nuque sans la raidir", "À attacher les pieds au sol", "À couper le souffle"], answer: 0, why: "El hilo tira suavemente hacia el cielo: alarga el cuello sin rigidez." },
          { q: "Que fait le sol dans l'audio ?", kind: "inferencial", options: ["Il porte le corps", "Il glisse sous les pieds", "Il fatigue les jambes"], answer: 0, why: "«Laisse le sol te porter»: el suelo sostiene, no cansa." },
        ],
      },
    },
  ],

  "fr-cu-b2-03": [
    {
      id: "md-fr-b2-03-1", theme: "qui e ora",
      title: "Lire le moment avant de signer", titleEs: "Leer el momento antes de firmar", minutes: 2,
      paragraphs: [
        { it: "Devant un contrat, une annonce, un engagement, l'esprit pressé lit en diagonale : il repère les chiffres, saute les lignes, signe. Le moment présent, lui, demande le geste inverse : ralentir les yeux, poser le doigt sur chaque ligne, goûter les mots comme on goûte un plat inconnu. « Déterminée », « renouvelable », « période d'essai » : chaque mot a un poids.", es: "Ante un contrato, un anuncio, un compromiso, la mente apurada lee en diagonal: localiza las cifras, se salta las líneas, firma. El momento presente pide el gesto inverso: frenar los ojos, poner el dedo en cada línea, saborear las palabras como se saborea un plato desconocido. «Determinada», «renovable», «período de prueba»: cada palabra tiene un peso." },
        { it: "Cette attention n'est pas de la méfiance : c'est du respect pour ta propre vie. Avant de signer quoi que ce soit, trois respirations complètes : elles ramènent ton esprit dans la pièce, dans la chaise, dans le papier que tu tiens. Le présent est le seul endroit où une décision peut être vue clairement ; le passé et l'avenir ne signent jamais à ta place.", es: "Esta atención no es desconfianza: es respeto por tu propia vida. Antes de firmar lo que sea, tres respiraciones completas: devuelven tu mente a la habitación, a la silla, al papel que sostienes. El presente es el único lugar donde una decisión puede verse con claridad; el pasado y el porvenir nunca firman en tu lugar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso de derecho laboral", "Leer con plena atención antes de decidir o firmar", "Cómo negociar un salario alto"],
        answer: 1,
        why: "El título une la lectura y el momento de firmar: apunta a la atención plena en la decisión, no al derecho.",
      },
      quiz: [
        { q: "Comment lit l'esprit pressé ?", kind: "literal", options: ["En diagonale", "Avec le doigt sur chaque ligne", "En refusant de lire"], answer: 0, why: "«L'esprit pressé lit en diagonale»: está literal al inicio." },
        { q: "À quoi servent les trois respirations avant de signer ?", kind: "inferencial", options: ["À ramener l'esprit dans la pièce et dans le papier", "À endormir l'attention", "À impressionner l'autre personne"], answer: 0, why: "«Elles ramènent ton esprit dans la pièce»: devuelven la mente al aquí y ahora." },
        { q: "«Le passé et l'avenir ne signent jamais à ta place» signifie que…", kind: "critica", options: ["seule la décision prise en présence t'engage vraiment", "il ne faut jamais rien signer", "le passé décide mieux que toi"], answer: 0, why: "La idea crítica: solo la decisión vista en el presente compromete de verdad." },
      ],
      vf: [
        { text: "Poser le doigt sur chaque ligne aide à ralentir la lecture.", value: true, why: "«Ralentir les yeux, poser le doigt sur chaque ligne»." },
        { text: "Cette attention est une forme de méfiance.", value: false, why: "El texto lo niega: «ce n'est pas de la méfiance», es respeto por tu vida." },
        { text: "Chaque mot du contrat a un poids.", value: true, why: "«Chaque mot a un poids»: el cierre del primer párrafo." },
      ],
    },
    {
      id: "md-fr-b2-03-2", theme: "relax mentale",
      title: "Le bruit du remords", titleEs: "El ruido del remordimiento", minutes: 3,
      paragraphs: [
        { it: "« Si j'avais lu, si j'avais su, si j'avais demandé… » Le remords est une machine bien huilée : elle rejoue la scène, corrige le passé, rédige les répliques parfaites. Cette machine tourne parfois des nuits entières, et le matin, le passé n'a pas bougé d'un millimètre. Ce qui a changé, c'est toi : tu es fatigué.", es: "«Si hubiera leído, si hubiera sabido, si hubiera preguntado…». El remordimiento es una máquina bien aceitada: reprende la escena, corrige el pasado, redacta las réplicas perfectas. Esa máquina gira a veces noches enteras y, por la mañana, el pasado no se ha movido un milímetro. Lo que ha cambiado eres tú: estás cansado." },
        { it: "Lâcher le remords ne veut pas dire l'effacer : c'est changer de poste d'écoute. Au lieu de courir après la scène passée, observe la machine elle-même : « tiens, mon esprit rejoue encore le contrat ». Nommer la boucle l'apaise déjà. Puis reviens à ce qui est réel maintenant : la chaise, la lumière, le souffle. Le passé ne peut être ni réécrit ni annulé ; il peut seulement être porté, comme une montre héritée.", es: "Soltar el remordimiento no quiere decir borrarlo: es cambiar de puesto de escucha. En vez de correr tras la escena pasada, observa la máquina misma: «anda, mi mente reprende otra vez el contrato». Nombrar el bucle ya lo calma. Luego vuelve a lo que es real ahora: la silla, la luz, la respiración. El pasado no puede reescribirse ni anularse; solo puede llevarse, como un reloj heredado." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Regretar el pasado como bucle mental y cómo soltarlo", "Un manual de reescritura de contratos", "La historia de un relojero de París"],
        answer: 0,
        why: "El título anuncia el ruido mental del remordimiento y el texto enseña a observarlo y soltarlo.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Le remords rejoue le passé sans jamais le changer ; l'attention au présent l'apaise",
          "Il faut effacer tous ses souvenirs pour dormir",
          "Le remords est une machine à écrire ancienne",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["La machine du remords rédige les répliques parfaites", "Nommer la boucle l'apaise déjà", "Le passé peut être porté, comme une montre héritée"],
        distractors: ["Le remords rend le passé meilleur", "Il faut rejouer la scène toute la nuit", "La fatigue du matin arrange tout"],
      },
      intruder: {
        instr: "Una de estas frases no pertenece a la lógica del texto. ¿Cuál es el intruso?",
        sentences: [
          "Le remords rejoue la scène et corrige le passé.",
          "La machine tourne parfois des nuits entières.",
          "Nommer la boucle l'apaise déjà.",
          "Le remords fonctionne mieux après un café serré.",
          "Le passé ne peut être ni réécrit ni annulé.",
        ],
        intruder: 3,
        why: "El café no aparece en el texto y es ajeno a la lógica del remordimiento: es el intruso.",
      },
    },
    {
      id: "md-fr-b2-03-3", theme: "meditazione",
      title: "Revenir au souffle après une erreur", titleEs: "Volver a la respiración tras un error", minutes: 2,
      paragraphs: [
        { it: "Une erreur vient d'arriver : un mot de trop, une signature pressée, un malentendu. Le corps le sait avant toi : gorge serrée, ventre noué, joues chaudes. Dans les minutes qui suivent, l'esprit veut agir vite — réparer, se justifier, recommencer. C'est exactement le mauvais moment pour décider.", es: "Acaba de ocurrir un error: una palabra de más, una firma apurada, un malentendido. El cuerpo lo sabe antes que tú: garganta apretada, vientre anudado, mejillas calientes. En los minutos siguientes, la mente quiere actuar rápido: reparar, justificarse, volver a empezar. Es exactamente el peor momento para decidir." },
        { it: "La méditation d'après-erreur est courte : six respirations. Sur chaque expiration, répète intérieurement « c'est déjà arrivé ». Ces trois mots ne résolvent rien et font tout : ils séparent l'erreur de la panique. Quand le corps se sera détendu, tu verras la scène entière, avec ses détails utiles — et l'erreur deviendra ce qu'elle a toujours été : une information, pas une identité.", es: "La meditación tras el error es corta: seis respiraciones. En cada espiración, repite interiormente «ya ha pasado». Esas tres palabras no resuelven nada y lo hacen todo: separan el error del pánico. Cuando el cuerpo se haya relajado, verás la escena entera, con sus detalles útiles, y el error se volverá lo que siempre fue: una información, no una identidad." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo ocultar los errores cometidos", "Respirar tras un error para no reaccionar en pánico", "Un curso de redacción de disculpas"],
        answer: 1,
        why: "El título une el error y la vuelta al souffle: apunta a meditar después de equivocarse, no a esconderlo.",
      },
      sequence: {
        instr: "Ordena los pasos de la meditación posterior al error:",
        events: ["Tu remarques la gorge serrée et le ventre noué", "Tu acceptes de ne pas décider tout de suite", "Tu prends six respirations", "Sur chaque expiration, tu répètes « c'est déjà arrivé »", "Tu vois la scène entière : l'erreur devient une information"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Une erreur vient d'arriver. Ton corps le sait : la gorge serrée, le ventre noué. Ne décide rien pour l'instant. Prends une première respiration, puis une seconde. À chaque expiration, laisse tomber un peu de la panique. Après six respirations, regarde la scène : elle n'est plus un orage, elle est une information. Tu n'es pas ton erreur ; tu es celui qui la regarde.",
        questions: [
          { q: "Combien de respirations l'audio propose-t-il ?", kind: "literal", options: ["Six", "Deux", "Dix"], answer: 0, why: "«Après six respirations»: la cifra está literal en el audio." },
          { q: "Que devient la scène après les respirations ?", kind: "literal", options: ["Une information", "Un orage", "Un secret"], answer: 0, why: "«Elle n'est plus un orage, elle est une information»." },
          { q: "Pourquoi ne rien décider tout de suite ?", kind: "inferencial", options: ["Parce que la panique fausse la décision", "Parce qu'il faut attendre minuit", "Parce que l'erreur disparaît seule"], answer: 0, why: "Se infiere que el pánico distorsiona: por eso conviene esperar al cuerpo tranquilo." },
          { q: "«Tu n'es pas ton erreur» signifie que…", kind: "inferencial", options: ["l'erreur est un événement, pas une identité", "l'erreur n'existe pas", "il faut nier ses fautes"], answer: 0, why: "El audio separa el hecho (el error) de quien lo observa (tú)." },
        ],
      },
    },
  ],

  "fr-cu-b2-04": [
    {
      id: "md-fr-b2-04-1", theme: "relax fisico",
      title: "Le corps dans le bruit de la salle", titleEs: "El cuerpo en el ruido de la sala", minutes: 2,
      paragraphs: [
        { it: "Salle comble, micros qui crachotent, téléphones qui vibrent : le corps d'un journaliste en reportage vit dans le bruit. Sans qu'on y pense, les épaules montent vers les oreilles, la mâchoire se serre, la respiration se raccourcit. Le bruit entre par le corps avant d'entrer par les oreilles.", es: "Sala llena, micrófonos que crepitan, teléfonos que vibran: el cuerpo de un periodista en reportaje vive en el ruido. Sin que uno lo note, los hombros suben hacia las orejas, la mandíbula se aprieta, la respiración se acorta. El ruido entra por el cuerpo antes de entrar por los oídos." },
        { it: "L'antidote tient dans une mini-routine de trente secondes, debout ou assis. Baisse les épaules et garde-les basses ; desserre la mâchoire en posant la langue derrière les dents du bas ; souffle par la bouche, deux fois, comme pour embuer une vitre. Répète cette routine à chaque changement de lieu. Le bruit continuera ; ton corps, lui, cessera de l'amplifier.", es: "El antídoto cabe en una minirutina de treinta segundos, de pie o sentado. Baja los hombros y mantenlos bajos; suelta la mandíbula apoyando la lengua detrás de los dientes de abajo; sopla por la boca, dos veces, como para empañar un cristal. Repite esta rutina en cada cambio de lugar. El ruido seguirá; tu cuerpo, en cambio, dejará de amplificarlo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo grabar mejor el sonido", "Soltar el cuerpo en entornos ruidosos de trabajo", "La historia del micrófono"],
        answer: 1,
        why: "El título pone el cuerpo en medio del ruido: apunta a relajarse en el tumulto, no a la técnica de sonido.",
      },
      quiz: [
        { q: "Où poses-tu la langue pour desserrer la mâchoire ?", kind: "literal", options: ["Derrière les dents du bas", "Sur le palais", "Entre les lèvres"], answer: 0, why: "«En posant la langue derrière les dents du bas»: está literal en el texto." },
        { q: "Pourquoi souffler comme pour embuer une vitre ?", kind: "inferencial", options: ["Pour allonger l'expiration et détendre", "Pour faire du bruit à son tour", "Pour réchauffer la salle"], answer: 0, why: "Se infiere que ese soplo alarga la espiración y relaja el cuerpo contra el ruido." },
        { q: "«Ton corps cessera de l'amplifier» veut dire que…", kind: "critica", options: ["on ne peut pas changer le monde, mais sa réaction oui", "il faut fuir tout bruit", "le corps amplifie toujours le bruit"], answer: 0, why: "La idea crítica: el ruido sigue, pero se puede dejar de amplificarlo desde el cuerpo." },
      ],
      vf: [
        { text: "Les épaules montent vers les oreilles sans qu'on y pense.", value: true, why: "«Sans qu'on y pense, les épaules montent vers les oreilles»." },
        { text: "La routine dure cinq minutes.", value: false, why: "El texto dice que es una mini-rutina de treinta segundos." },
        { text: "On répète la routine à chaque changement de lieu.", value: true, why: "«Répète cette routine à chaque changement de lieu»." },
      ],
    },
    {
      id: "md-fr-b2-04-2", theme: "relax mentale",
      title: "Le silence derrière les informations", titleEs: "El silencio detrás de las informaciones", minutes: 3,
      paragraphs: [
        { it: "Le flux d'actualité se présente comme une urgence permanente : chaque notification prétend être importante, chaque minute apporte son lot de nouveautés. L'esprit qui le suit sans pause perd la capacité de distinguer ce qui compte de ce qui défile. La fatigue mentale n'est pas dans les nouvelles ; elle est dans l'absence de silence entre elles.", es: "El flujo de actualidad se presenta como una urgencia permanente: cada notificación pretende ser importante, cada minuto trae su lote de novedades. La mente que lo sigue sin pausa pierde la capacidad de distinguir lo que importa de lo que desfila. La fatiga mental no está en las noticias; está en la ausencia de silencio entre ellas." },
        { it: "Fais l'expérience d'un soir : après avoir lu une information, pose le téléphone et reste une minute sans rien ajouter. Laisse la nouvelle descendre en toi, comme une goutte d'encre dans l'eau. Ce silence n'est pas de l'ignorance : c'est le temps de digestion dont l'esprit a besoin. Au matin, tu seras étonné de ce que tu retiens : peu de choses, mais les bonnes.", es: "Haz la experiencia una noche: después de leer una información, deja el teléfono y quédate un minuto sin añadir nada. Deja que la noticia baje en ti, como una gota de tinta en el agua. Ese silencio no es ignorancia: es el tiempo de digestión que la mente necesita. Por la mañana te sorprenderá lo que retienes: pocas cosas, pero las buenas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo leer más noticias por minuto", "El silencio entre las noticias como descanso mental", "Una crítica de los periódicos de papel"],
        answer: 1,
        why: "El título busca el silencio detrás de la información: apunta a la pausa mental, no a la velocidad de lectura.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Le silence entre les informations est nécessaire à la digestion mentale",
          "Il faut lire plus vite pour tout retenir",
          "Les notifications sont toujours importantes",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Le flux se présente comme une urgence permanente", "L'esprit perd la capacité de distinguer ce qui compte", "Le silence n'est pas de l'ignorance"],
        distractors: ["Il faut supprimer toutes les applications", "La fatigue vient du papier journal", "Le matin, on oublie absolument tout"],
      },
      intruder: {
        instr: "Una de estas frases no pertenece a la lógica del texto. ¿Cuál es el intruso?",
        sentences: [
          "Chaque notification prétend être importante.",
          "L'esprit perd la capacité de distinguer ce qui compte.",
          "Après une information, pose le téléphone une minute.",
          "Les journaux papier coûtent plus cher le dimanche.",
          "Le silence est le temps de digestion de l'esprit.",
        ],
        intruder: 3,
        why: "El precio del papel dominical es ajeno al tema del silencio mental: es el intruso.",
      },
    },
    {
      id: "md-fr-b2-04-3", theme: "spiritualità",
      title: "Les voix qui restent", titleEs: "Las voces que quedan", minutes: 3,
      paragraphs: [
        { it: "Un grand-père réparait des montres et racontait que chacune gardait la mémoire de son propriétaire. Qu'il ait eu raison ou non importe peu : ce qui compte, c'est l'écoute qu'il imposait. Pour lui, chaque objet avait une histoire, et chaque histoire méritait du temps. Cette attention patiente est une forme discrète de spiritualité.", es: "Un abuelo reparaba relojes y contaba que cada uno guardaba la memoria de su propietario. Que tuviera razón o no importa poco: lo que cuenta es la escucha que imponía. Para él, cada objeto tenía una historia, y cada historia merecía tiempo. Esa atención paciente es una forma discreta de espiritualidad." },
        { it: "Tu peux en faire l'essai sans atelier d'horlogerie. Choisis un objet ancien chez toi — une photo, une lettre, une tasse ébréchée — et écoute ce qu'il évoque : une voix, un après-midi, une odeur. Reste avec cette évocation trois respirations, sans la commenter. Les traditions appellent cela la mémoire reconnaissante : rendre visite à ce qui nous a formés, et le remercier.", es: "Puedes intentarlo sin taller de relojería. Elige un objeto antiguo de tu casa —una foto, una carta, una taza desportillada— y escucha lo que evoca: una voz, una tarde, un olor. Quédate con esa evocación tres respiraciones, sin comentarla. Las tradiciones lo llaman la memoria agradecida: visitar lo que nos formó y agradecérselo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Reparación de relojes antiguos", "La memoria agradecida hacia objetos y voces del pasado", "Cómo coleccionar tazas"],
        answer: 1,
        why: "El título habla de las voces que permanecen: apunta a la memoria como práctica, no a la relojería.",
      },
      quiz: [
        { q: "Que racontait le grand-père ?", kind: "literal", options: ["Chaque montre gardait la mémoire de son propriétaire", "Les montres étaient toutes cassées", "Le temps n'existait pas"], answer: 0, why: "«Chacune gardait la mémoire de son propriétaire»: está literal en el texto." },
        { q: "Que fait-on avec l'évocation pendant trois respirations ?", kind: "inferencial", options: ["On l'accueille sans la commenter", "On l'écrit tout de suite", "On la compare à une autre"], answer: 0, why: "«Sans la commenter»: la evocación se recibe, no se analiza." },
        { q: "La «mémoire reconnaissante» consiste à…", kind: "critica", options: ["visiter ce qui nous a formés et le remercier", "oublier le passé pour avancer", "garder tous les objets anciens"], answer: 0, why: "El texto la define: visitar lo que nos formó y agradecérselo." },
      ],
      vf: [
        { text: "Chaque histoire méritait du temps pour le grand-père.", value: true, why: "«Chaque histoire méritait du temps»." },
        { text: "Il faut un atelier d'horlogerie pour cet exercice.", value: false, why: "«Tu peux en faire l'essai sans atelier d'horlogerie»." },
        { text: "L'exercice dure trois respirations.", value: true, why: "«Reste avec cette évocation trois respirations»." },
      ],
      sequence: {
        instr: "Ordena los pasos del ejercicio de memoria agradecida:",
        events: ["Tu choisis un objet ancien chez toi", "Tu écoutes ce qu'il évoque : une voix, un après-midi, une odeur", "Tu restes avec cette évocation trois respirations", "Tu ne commentes pas ce qui monte", "Tu remercies ce qui t'a formé"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Il y avait un grand-père qui réparait des montres. Il disait que chaque objet garde la mémoire de ceux qui l'ont aimé. Tu n'es pas obligé d'y croire. Mais ce soir, prends une vieille tasse, une lettre, une photo. Tiens-la sans rien dire, trois respirations. Ce qui monte en toi, c'est ta propre histoire : elle mérite un peu de temps, et un peu de gratitude.",
        questions: [
          { q: "Que réparait le grand-père ?", kind: "literal", options: ["Des montres", "Des voitures", "Des maisons"], answer: 0, why: "«Un grand-père qui réparait des montres»: literal al inicio del audio." },
          { q: "Que fais-tu avec l'objet choisi ?", kind: "literal", options: ["Tu le vends vite", "Tu le tiens sans rien dire", "Tu le ranges immédiatement"], answer: 1, why: "«Tiens-la sans rien dire, trois respirations»." },
          { q: "«Ce qui monte en toi, c'est ta propre histoire» signifie que…", kind: "inferencial", options: ["L'objet éveille une mémoire personnelle", "L'objet raconte la vie du grand-père", "Les objets parlent vraiment"], answer: 0, why: "Se infiere: lo que sube es tu historia, no un poder del objeto." },
          { q: "Pourquoi «un peu de gratitude» à la fin ?", kind: "inferencial", options: ["Parce que ce qui nous a formés mérite remerciement", "Parce que le grand-père exigeait un merci", "Parce que la tasse valait cher"], answer: 0, why: "El audio cierra agradeciendo lo que nos formó, como la memoria reconocida del texto." },
        ],
      },
    },
  ],

  "fr-cu-b2-05": [
    {
      id: "md-fr-b2-05-1", theme: "qui e ora",
      title: "Le matin sans écran", titleEs: "La mañana sin pantalla", minutes: 2,
      paragraphs: [
        { it: "Le premier quart d'heure de la journée décide souvent du reste. Pour beaucoup, il commence par un écran allumé dans le noir : les messages déjà lus, les nouvelles déjà jugées, la journée déjà commencée par d'autres. Le présent, lui, attendait à côté du lit : la lumière qui change, le froid de la pièce, le poids du réveil qui sonne.", es: "El primer cuarto de hora del día decide a menudo el resto. Para muchos empieza con una pantalla encendida en la oscuridad: los mensajes ya leídos, las noticias ya juzgadas, el día ya empezado por otros. El presente, en cambio, esperaba junto a la cama: la luz que cambia, el frío de la habitación, el peso del despertador que suena." },
        { it: "Fais l'essai demain : quinze minutes sans écran, juste le monde tel qu'il se présente. La fenêtre d'abord, puis le souffle, puis le premier geste utile — l'eau, le pain, la table mise. Ce n'est pas une punition ni une nostalgie : c'est une mise en ordre. Le monde numérique a toute la journée pour exister ; le matin appartient à ce qui est là.", es: "Haz la prueba mañana: quince minutos sin pantalla, solo el mundo tal como se presenta. Primero la ventana, luego la respiración, después el primer gesto útil: el agua, el pan, la mesa puesta. No es un castigo ni una nostalgia: es una puesta en orden. El mundo digital tiene todo el día para existir; la mañana pertenece a lo que está ahí." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["El primer cuarto de hora del día sin pantalla, con el mundo tal cual", "Cómo elegir un buen teléfono móvil", "La historia de los despertadores franceses"],
        answer: 0,
        why: "El título anuncia la mañana sin pantalla: apunta al presente frente al ruido digital.",
      },
      quiz: [
        { q: "Comment commence la journée de beaucoup de gens ?", kind: "literal", options: ["Par un écran allumé dans le noir", "Par la fenêtre ouverte", "Par le petit-déjeuner sans téléphone"], answer: 0, why: "«Il commence par un écran allumé dans le noir»: está literal en el texto." },
        { q: "Pourquoi parler de «la journée déjà commencée par d'autres» ?", kind: "inferencial", options: ["Parce que les messages font entrer les urgences des autres", "Parce que le réveil sonne trop tôt", "Parce que la chambre est froide"], answer: 0, why: "Se infiere: leer mensajes ajenos al despertar llena el día de urgencias que no son tuyas." },
        { q: "«Le matin appartient à ce qui est là» défend…", kind: "critica", options: ["un début de journée ancré dans le présent sensible", "l'interdiction totale des écrans", "la lecture des nouvelles au petit-déjeuner"], answer: 0, why: "La idea crítica: la mañana como anclaje en lo sensible, no como prohibición absoluta." },
      ],
      vf: [
        { text: "Le premier quart d'heure décide souvent du reste de la journée.", value: true, why: "«Le premier quart d'heure de la journée décide souvent du reste»." },
        { text: "L'expérience propose de garder le téléphone près du lit.", value: false, why: "Al contrario: propone quince minutos sin pantalla al despertar." },
        { text: "Le monde numérique a toute la journée pour exister.", value: true, why: "«Le monde numérique a toute la journée pour exister»." },
      ],
    },
    {
      id: "md-fr-b2-05-2", theme: "meditazione",
      title: "Une seule chose à la fois", titleEs: "Una sola cosa a la vez", minutes: 2,
      paragraphs: [
        { it: "Ouvrir un livre en écoutant une balado en jetant un œil aux messages : l'esprit moderne croit faire trois choses, il n'en fait aucune. La méditation de la concentration choisit l'inverse : une seule chose, toute petite, tenue longtemps. Le souffle, une phrase, une flammèche — un seul objet, et l'attention qui y revient cent fois.", es: "Abrir un libro mientras se escucha un pódcast y se echa un ojo a los mensajes: la mente moderna cree hacer tres cosas y no hace ninguna. La meditación de la concentración elige lo inverso: una sola cosa, pequeñísima, sostenida mucho tiempo. La respiración, una frase, una llamita: un solo objeto, y la atención que vuelve a él cien veces." },
        { it: "Assieds-toi cinq minutes avec un seul objet d'attention : la sensation de l'air dans les narines. Chaque fois que l'esprit part — et il partira, vers les messages, la rentrée, la colère d'hier —, note où il est allé, puis ramène-le sans commentaire. Ramener cent fois l'attention, ce n'est pas échouer cent fois : c'est l'entraînement même.", es: "Siéntate cinco minutos con un solo objeto de atención: la sensación del aire en las fosas nasales. Cada vez que la mente se vaya —y se irá, hacia los mensajes, la temporada literaria, la rabia de ayer—, anota a dónde fue y tráela de vuelta sin comentario. Traer cien veces la atención no es fracasar cien veces: es el entrenamiento mismo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La multitarea como mito y el entrenamiento de la atención única", "Cómo cocinar varios platos a la vez", "Una guía de lectura rápida"],
        answer: 0,
        why: "El título reivindica una sola cosa a la vez: apunta a la concentración frente a la multitarea.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Ramener cent fois l'attention est l'entraînement même",
          "Lire en écoutant une balado est la meilleure méthode",
          "La méditation interdit de penser aux messages",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["L'esprit moderne croit faire trois choses et n'en fait aucune", "Un seul objet d'attention suffit", "Note où l'esprit est allé avant de le ramener"],
        distractors: ["Il faut dix objets d'attention", "Partir cent fois est un échec", "La flammèche doit rester allumée une heure"],
      },
      intruder: {
        instr: "Una de estas frases no pertenece a la lógica del texto. ¿Cuál es el intruso?",
        sentences: [
          "L'esprit moderne croit faire trois choses à la fois.",
          "Un seul objet suffit : le souffle, une phrase, une flammèche.",
          "Note où l'esprit est allé, puis ramène-le.",
          "La méditation de concentration exige un coussin violet.",
          "Ramener cent fois l'attention est l'entraînement même.",
        ],
        intruder: 3,
        why: "El cojín violeta es un requisito inventado que no aparece en el texto: es el intruso.",
      },
    },
    {
      id: "md-fr-b2-05-3", theme: "relax mentale",
      title: "L'esprit qui compare", titleEs: "La mente que compara", minutes: 3,
      paragraphs: [
        { it: "Sur les réseaux, chacun publie ses réussites : le gala, la soutenance, la couverture du livre. L'esprit qui compare traduit tout en manque : ta journée ordinaire contre leurs grands jours, ton brouillon contre leurs déclarations. Cette comparaison permanente est une fatigue invisible — elle ne produit rien et épuise tout.", es: "En las redes cada uno publica sus éxitos: la gala, la defensa, la portada del libro. La mente que compara lo traduce todo en carencia: tu día ordinario contra sus grandes días, tu borrador contra sus declaraciones. Esa comparación permanente es una fatiga invisible: no produce nada y lo agota todo." },
        { it: "Le remède mental est simple à dire, exigeant à faire : compare-toi à toi-même. Ce soir, regarde ton texte d'il y a six mois, ta première prise de parole, ton niveau d'hier. La seule comparaison utile se joue entre deux versions de toi. Puis pose la question au présent : qu'est-ce que je peux faire, ici, avec ce que j'ai ? La réponse occupe l'esprit mieux que toute envie.", es: "El remedio mental es fácil de decir y exigente de hacer: compárate contigo mismo. Esta noche, mira tu texto de hace seis meses, tu primera toma de palabra, tu nivel de ayer. La única comparación útil se juega entre dos versiones de ti. Luego plantea la pregunta al presente: ¿qué puedo hacer, aquí, con lo que tengo ? La respuesta ocupa la mente mejor que cualquier envidia." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La comparación en redes como fatiga mental y su antídoto", "Cómo conseguir más seguidores", "Un ensayo sobre los premios literarios"],
        answer: 0,
        why: "El título nombra a la mente comparadora: apunta a la fatiga de compararse y cómo salir de ella.",
      },
      quiz: [
        { q: "Que publie chacun sur les réseaux ?", kind: "literal", options: ["Ses réussites", "Ses échecs quotidiens", "Ses brouillons"], answer: 0, why: "«Chacun publie ses réussites»: está literal al inicio." },
        { q: "Pourquoi la comparaison est-elle une fatigue invisible ?", kind: "inferencial", options: ["Parce qu'elle ne produit rien et épuise tout", "Parce qu'elle prend beaucoup de temps", "Parce qu'elle est interdite par la loi"], answer: 0, why: "«Elle ne produit rien et épuise tout»: la definición del propio texto." },
        { q: "La seule comparaison utile selon le texte est…", kind: "critica", options: ["entre deux versions de soi-même", "entre collègues du même âge", "entre deux réseaux sociaux"], answer: 0, why: "El texto la formula: la comparación útil se juega entre dos versiones de uno mismo." },
      ],
      vf: [
        { text: "L'esprit qui compare traduit tout en manque.", value: true, why: "«L'esprit qui compare traduit tout en manque»." },
        { text: "Le texte conseille de comparer ton brouillon aux réussites publiées.", value: false, why: "Al contrario: propone compararte solo contigo mismo." },
        { text: "La réponse à la question du présent occupe l'esprit mieux que l'envie.", value: true, why: "«La réponse occupe l'esprit mieux que toute envie»." },
      ],
      sequence: {
        instr: "Ordena los pasos del antídoto contra la comparación:",
        events: ["Tu remarques la fatigue de comparer ton brouillon aux réussites publiées", "Tu regardes ton texte d'il y a six mois", "Tu retrouves la seule comparaison utile : entre deux versions de toi", "Tu poses la question au présent : qu'est-ce que je peux faire, ici ?", "Tu laisses la réponse occuper l'esprit à la place de l'envie"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Sur les réseaux, ce soir, chacun montre son grand jour : le gala, la couverture du livre, la soutenance. Ton brouillon, lui, ne s'affiche nulle part. Ferme l'écran un moment. Reprends ta page d'il y a six mois : c'est le seul texte qui te ressemble. La vraie comparaison se joue entre deux versions de toi, et la plus récente est déjà plus solide que tu ne le crois.",
        questions: [
          { q: "Que montre chacun sur les réseaux ?", kind: "literal", options: ["Son grand jour", "Ses brouillons", "Ses échecs"], answer: 0, why: "«Chacun montre son grand jour»: literal al inicio del audio." },
          { q: "Quelle page reprends-tu ?", kind: "literal", options: ["La page d'un autre écrivain", "Ta page d'il y a six mois", "Une page blanche"], answer: 1, why: "«Reprends ta page d'il y a six mois»." },
          { q: "Pourquoi fermer l'écran un moment ?", kind: "inferencial", options: ["Pour sortir de la comparaison permanente", "Pour économiser la batterie", "Pour punir les réseaux sociaux"], answer: 0, why: "Se infiere: cerrar la pantalla interrumpe el bucle de compararse con los grandes días ajenos." },
          { q: "La «vraie comparaison» se joue…", kind: "inferencial", options: ["entre deux versions de toi", "entre toi et les lauréats", "entre deux réseaux sociaux"], answer: 0, why: "El audio la define: entre dos versiones de ti." },
        ],
      },
    },
  ],

  "fr-cu-b2-06": [
    {
      id: "md-fr-b2-06-1", theme: "relax fisico",
      title: "Le rire qui dénoue les épaules", titleEs: "La risa que deshace los nudos de los hombros", minutes: 2,
      paragraphs: [
        { it: "Après une journée de team building — jeux de rôle, ateliers de cohésion, discours d'équipe — le corps est étrangement tendu : les épaules montées, la mâchoire serrée de politesse. Puis, au bar, un collègue lâche une phrase au second degré sur le séminaire, et le rire part tout seul. Un vrai rire, celui qui plie en deux et fait couler les larmes : en trois secondes, il défait ce que huit heures de sérieux avaient noué.", es: "Después de una jornada de team building —juegos de rol, talleres de cohesión, discursos de equipo— el cuerpo queda extrañamente tenso: los hombros subidos, la mandíbula apretada de cortesía. Luego, en el bar, un colega suelta una frase en second degré sobre el seminario y la risa se dispara sola. Una risa de verdad, la que te dobla en dos y hace saltar las lágrimas: en tres segundos deshace lo que ocho horas de seriedad habían anudado." },
        { it: "Le rire est une séance de relaxation complète et gratuite : le diaphragme pompe, les épaules lâchent sous les secousses, les muscles du visage se déplissent. On le répète depuis toujours : rire, c'est expirer longuement, plusieurs fois, sans y penser. Ce soir, ne cherche pas à être drôle : accueille simplement le premier fou rire qui passe. Il détend le corps mieux que n'importe quel exercice, et en plus il soude l'équipe.", es: "La risa es una sesión de relajación completa y gratuita: el diafragma bombea, los hombros se sueltan con las sacudidas, los músculos de la cara se despliegan. Se repite desde siempre: reír es espirar largo, varias veces, sin pensarlo. Esta noche no busques ser gracioso: acoge simplemente la primera risa irrefrenable que pase. Relaja el cuerpo mejor que cualquier ejercicio y, además, suelda al equipo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de humor en la empresa", "La risa como relajación física después de un día serio de trabajo", "Cómo organizar un seminario de team building"],
        answer: 1,
        why: "El título une la risa con los hombros anudados: apunta al efecto físico de reír, no a manuales de humor ni a la logística del seminario.",
      },
      quiz: [
        { q: "Que lâche un collègue au bar ?", kind: "literal", options: ["Une phrase au second degré sur le séminaire", "Une plainte officielle contre l'entreprise", "Un secret de fabrication"], answer: 0, why: "«Un collègue lâche une phrase au second degré sur le séminaire»: literal en el texto." },
        { q: "Pourquoi le corps est-il tendu après le team building ?", kind: "inferencial", options: ["Parce que huit heures de sérieux et de politesse ont noué les muscles", "Parce que les jeux de rôle étaient sportifs", "Parce que le bar est trop bruyant"], answer: 0, why: "Se infiere: la seriedad sostenida anuda el cuerpo, y el texto opone ese nudo a los tres segundos del rire." },
        { q: "«Rire, c'est expirer longuement» suggère que…", kind: "critica", options: ["le fou rire détend comme une expiration lente répétée", "il faut apprendre à rire lentement", "le rire use le diaphragme"], answer: 0, why: "La idea crítica: reír equivale a espiraciones largas repetidas, una relajación que el cuerpo regala solo." },
      ],
      vf: [
        { text: "Le rire défait ce que huit heures de sérieux avaient noué.", value: true, why: "«Il défait ce que huit heures de sérieux avaient noué»: literal en el texto." },
        { text: "Le texte conseille de forcer l'humour pour détendre l'équipe.", value: false, why: "Al contrario: «ne cherche pas à être drôle», basta acoger la primera risa que pase." },
        { text: "Le fou rire soude aussi l'équipe.", value: true, why: "«Et en plus il soude l'équipe»: el cierre del texto." },
      ],
    },
    {
      id: "md-fr-b2-06-2", theme: "relax mentale",
      title: "L'esprit de l'escalier", titleEs: "El ingenio de la escalera", minutes: 2,
      paragraphs: [
        { it: "La réplique parfaite t'est venue trop tard : dans l'escalier, en quittant le bar, une heure après la phrase qui t'avait vexé. Les Français appellent cela l'esprit de l'escalier, et ce petit retard de l'esprit peut occuper toute la soirée : tu réécris la scène, tu répètes la répartie gagnante, tu regrettes. L'esprit rejoue un match déjà terminé, devant un public parti.", es: "La réplica perfecta te llegó demasiado tarde: en la escalera, al salir del bar, una hora después de la frase que te había molestado. Los franceses lo llaman l'esprit de l'escalier, y ese pequeño retraso de la mente puede ocupar toda la noche: reescribes la escena, repites la salida ganadora, te arrepientes. La mente reprende un partido ya terminado, ante un público que se fue." },
        { it: "Le relâchement mental commence quand tu acceptes le retard : ton esprit n'était pas prêt, voilà tout. Remercie la réplique tardive : elle serait excellente, demain, dans une autre conversation. Puis reviens à la table du bar : les rires actuels, les verres qui se vident, la vraie conversation. La répartie idéale n'existe que dans un passé réécrit ; le présent, lui, propose toujours une nouvelle phrase à saisir.", es: "La relajación mental empieza cuando aceptas el retraso: tu mente no estaba lista, eso es todo. Agradece la réplica tardía: sería excelente mañana, en otra conversación. Luego vuelve a la mesa del bar: las risas actuales, los vasos que se vacían, la conversación de verdad. La salida ideal solo existe en un pasado reescrito; el presente, en cambio, siempre ofrece una nueva frase que atrapar." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La arquitectura de las escaleras parisinas", "La réplica que llega tarde y cómo soltar ese bucle mental", "Cómo ganar todos los duelos de ingenio"],
        answer: 1,
        why: "El título nombra el fenómeno francés de la réplica tardía: apunta al bucle mental de reescribir la escena, no a la arquitectura ni al triunfo.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "La réplique tardive nourrit une rumination que seul le présent désarme",
          "L'esprit de l'escalier est une marque de supériorité intellectuelle",
          "Il faut apprendre ses répliques par cœur avant de sortir",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Tu réécris la scène et tu répètes la répartie gagnante", "Ton esprit n'était pas prêt, voilà tout", "Le présent propose toujours une nouvelle phrase à saisir"],
        distractors: ["La répartie idéale existe dans le futur", "Les escaliers aident à réfléchir plus vite", "Le bar est un mauvais endroit pour rire"],
      },
      intruder: {
        instr: "Una de estas frases no pertenece a la lógica del texto. ¿Cuál es el intruso?",
        sentences: [
          "La réplique parfaite t'est venue dans l'escalier, trop tard.",
          "L'esprit rejoue un match déjà terminé, devant un public parti.",
          "Remercie la réplique tardive : elle serait excellente, demain.",
          "Un café serré double la vitesse de l'esprit de l'escalier.",
          "Le présent propose toujours une nouvelle phrase à saisir.",
        ],
        intruder: 3,
        why: "El café que acelera el ingenio no aparece en el texto y es ajeno al relajamiento mental: es el intruso.",
      },
    },
    {
      id: "md-fr-b2-06-3", theme: "qui e ora",
      title: "Un verre, ici et maintenant", titleEs: "Una copa, aquí y ahora", minutes: 3,
      paragraphs: [
        { it: "Autour de la table du bar, la soirée a sa géographie : le bruit des conversations voisines, la lumière chaude au-dessus du comptoir, le verre fraîchement servi. Pourtant, la moitié des esprits est déjà ailleurs : au séminaire de l'après-midi, au lancement du mois prochain, dans le métro du retour. Le corps est assis au présent ; la tête vit dans un autre fuseau.", es: "En torno a la mesa del bar, la velada tiene su geografía: el ruido de las conversaciones vecinas, la luz cálida sobre la barra, el vaso recién servido. Y sin embargo, la mitad de las mentes ya está en otra parte: en el seminario de la tarde, en el lanzamiento del mes próximo, en el metro de vuelta. El cuerpo está sentado en el presente; la cabeza vive en otro huso horario." },
        { it: "Fais l'expérience inverse, ce soir : cinq minutes de présence entière à la table. Écoute le brouhaha sans chercher à le trier ; sens le poids du verre dans la main, le froid sur la paume ; goûte la première gorgée comme si c'était la première du soir. Le second degré, l'ironie douce de l'équipe, tout cela ne se capte qu'en temps réel : l'humour est la forme la plus rapide du présent.", es: "Haz la experiencia inversa esta noche: cinco minutos de presencia entera en la mesa. Escucha el barullo sin intentar clasificarlo; siente el peso del vaso en la mano, el frío en la palma; saborea el primer sorbo como si fuera el primero de la noche. El second degré, la ironía suave del equipo, todo eso solo se capta en tiempo real: el humor es la forma más rápida del presente." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La carta de los mejores cócteles de París", "Estar del todo presente en la mesa del bar tras el trabajo", "Cómo pedir turno para hablar con los colegas"],
        answer: 1,
        why: "El título une la copa con el aquí y ahora: apunta a la presencia en la mesa, no a la coctelería ni al turno de palabra.",
      },
      sequence: {
        instr: "Ordena los pasos de los cinco minutos de presencia en la mesa:",
        events: ["Tu cesses de préparer ta prochaine phrase", "Tu écoutes le brouhaha sans chercher à le trier", "Tu sens le poids et le froid du verre dans ta main", "Tu goûtes la première gorgée comme si c'était la première du soir", "Tu captes le second degré de l'équipe en temps réel"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Un jeudi soir, dans un bar parisien. Pose un instant ton verre. Écoute le bruit des conversations autour de toi : tu n'as pas besoin de le comprendre, juste de l'accueillir. Sens la table sous tes avant-bras, la lumière chaude au-dessus du comptoir. Bois une gorgée lentement. Tout ce que tu cherches comme repos est déjà là, sur cette table, ce soir.",
        questions: [
          { q: "Que fais-tu du bruit des conversations ?", kind: "literal", options: ["Tu l'accueilles sans le comprendre", "Tu l'enregistres pour plus tard", "Tu le fais taire"], answer: 0, why: "«Tu n'as pas besoin de le comprendre, juste de l'accueillir»." },
          { q: "Où se trouve la lumière chaude ?", kind: "literal", options: ["Sous la table", "Au-dessus du comptoir", "Dans la rue"], answer: 1, why: "«La lumière chaude au-dessus du comptoir»." },
          { q: "Pourquoi boire une gorgée lentement ?", kind: "inferencial", options: ["Pour ramener l'attention au présent", "Pour faire durer la boisson", "Pour impressionner l'équipe"], answer: 0, why: "Se infiere: el gesto devuelve la atención a la mesa y al momento." },
          { q: "«Tout ce que tu cherches comme repos est déjà là» veut dire que…", kind: "inferencial", options: ["le repos dépend de l'attention, pas du lieu", "ce bar est le seul endroit pour se reposer", "il faut commander une autre boisson"], answer: 0, why: "El descanso no está en la bebida sino en la atención puesta en lo que ya está." },
        ],
      },
    },
  ],

  "fr-cu-b2-07": [
    {
      id: "md-fr-b2-07-1", theme: "meditazione",
      title: "Relire comme une méditation", titleEs: "Releer como una meditación", minutes: 2,
      paragraphs: [
        { it: "Madame Perrin corrige avec un crayon et une patience d'horlogère : une virgule, un adverbe de trop, une nuance à peine visible. Sa méthode surprend les débutants : elle relit chaque phrase trois fois, à voix basse, comme on fait tourner un objet dans la main. Madame Perrin ne fait que relire, et c'est déjà un art : la relecture, pratiquée ainsi, devient une méditation — l'attention posée sur un seul groupe de mots, puis un autre, sans hâte ni jugement.", es: "Madame Perrin corrige con lápiz y una paciencia de relojera: una coma, un adverbio de más, un matiz apenas visible. Su método sorprende a los principiantes: relee cada frase tres veces, en voz baja, como quien hace girar un objeto en la mano. Madame Perrin no hace más que releer, y eso ya es un arte: la relectura, practicada así, se vuelve una meditación, la atención posada en un solo grupo de palabras, luego en otro, sin prisa ni juicio." },
        { it: "Tu peux transformer ta prochaine relecture en exercice formel. Une phrase, une respiration : lis, souffle, corrige si nécessaire, passe à la suivante. Quand l'ennui arrive — et il arrive toujours, c'est son rôle —, observe-le comme un signal de pause plutôt que comme un ordre de fuir. Au bout de vingt minutes, le texte est plus net, et quelque chose en toi aussi : l'esprit qui ralentit découvre des détails que la vitesse ne verra jamais.", es: "Puedes convertir tu próxima relectura en un ejercicio formal. Una frase, una respiración: lee, sopla, corrige si hace falta, pasa a la siguiente. Cuando llegue el aburrimiento —y llegará siempre, para eso está—, obsérvalo como una señal de pausa y no como una orden de huir. Al cabo de veinte minutos, el texto está más nítido, y algo en ti también: la mente que desacelera descubre detalles que la velocidad jamás verá." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de lectura rápida para editores", "La relectura atenta y lenta como forma de meditación", "La biografía de una correctora de Lyon"],
        answer: 1,
        why: "El título equipara releer con meditar: apunta a la atención frase a frase, no a la velocidad de lectura ni a una biografía.",
      },
      quiz: [
        { q: "Combien de fois Madame Perrin relit-elle chaque phrase ?", kind: "literal", options: ["Trois fois", "Une seule fois", "Dix fois"], answer: 0, why: "«Elle relit chaque phrase trois fois, à voix basse»: literal en el texto." },
        { q: "Comment accueillir l'ennui qui arrive pendant la relecture ?", kind: "inferencial", options: ["Comme un signal de pause, pas comme un ordre de fuir", "Comme une preuve que le texte est mauvais", "Comme une obligation de changer de métier"], answer: 0, why: "El texto lo reencuadra: «observe-le comme un signal de pause plutôt que comme un ordre de fuir»." },
        { q: "«L'esprit qui ralentit découvre des détails que la vitesse ne verra jamais» défend…", kind: "critica", options: ["la lenteur d'attention comme outil de précision", "l'interdiction des logiciels de correction", "la lecture en diagonale des manuscrits"], answer: 0, why: "La idea crítica: la atención lenta ve lo que la velocidad jamás verá." },
      ],
      vf: [
        { text: "Madame Perrin relit chaque phrase à voix basse.", value: true, why: "«À voix basse, comme on fait tourner un objet dans la main»." },
        { text: "La méthode propose de corriger trois phrases par respiration.", value: false, why: "Al contrario: «une phrase, une respiration»." },
        { text: "L'ennui est présenté comme un phénomène normal et attendu.", value: true, why: "«Et il arrive toujours, c'est son rôle»." },
      ],
    },
    {
      id: "md-fr-b2-07-2", theme: "qui e ora",
      title: "La librairie du quartier", titleEs: "La librería del barrio", minutes: 2,
      paragraphs: [
        { it: "Dans la librairie de quartier, le temps ne va pas à la même vitesse que sur les plateformes : ici, un livre se feuillette debout, une conversation s'installe, la libraire connaît les goûts de chacun. Celui qui entre pressé rate l'essentiel : l'odeur du papier, la pile des nouveautés penchée comme une petite ville, la lumière de fin d'après-midi sur les tables. Le présent, dans une librairie, a une odeur.", es: "En la librería de barrio, el tiempo no va a la misma velocidad que en las plataformas: aquí un libro se hojea de pie, una conversación se instala, la librera conoce los gustos de cada uno. Quien entra con prisa se pierde lo esencial: el olor del papel, la pila de novedades inclinada como una pequeña ciudad, la luz de finales de la tarde sobre las mesas. El presente, en una librería, tiene olor." },
        { it: "Fais l'expérience samedi : entre sans but précis, sans liste, sans chronomètre. Laisse tes mains choisir ; feuillette à l'aveugle la première page de trois livres ; reste un instant devant la table des essais. Si ton esprit calcule déjà le prix, le temps, l'utilité, reviens au toucher du papier : c'est lui, l'ancre. Une librairie fréquentée en pleine conscience rend plus qu'un panier plein : elle rend un quart d'heure de monde réel.", es: "Haz la prueba el sábado: entra sin objetivo preciso, sin lista, sin cronómetro. Deja que tus manos elijan; hojea a ciegas la primera página de tres libros; quédate un instante ante la mesa de ensayos. Si tu mente ya calcula el precio, el tiempo, la utilidad, vuelve al tacto del papel: es él el ancla. Una librería frecuentada en plena conciencia devuelve más que una cesta llena: devuelve un cuarto de hora de mundo real." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo comprar libros más baratos en línea", "La librería de barrio como experiencia de presencia", "La historia del papel en Francia"],
        answer: 1,
        why: "El título sitúa la escena en la librería de barrio: apunta a la experiencia de presencia, no al precio ni a la historia del papel.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Une librairie visitée sans but ni chrono rend un contact réel avec le présent",
          "Les librairies de quartier sont condamnées par les plateformes",
          "Il faut acheter plus de livres pour être heureux",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["La libraire connaît les goûts de chacun", "Laisse tes mains choisir, sans liste ni chronomètre", "Le toucher du papier est l'ancre du présent"],
        distractors: ["Il faut éviter la table des nouveautés", "Calculer le prix aide à rester présent", "Les librairies n'ouvrent que le dimanche"],
      },
      intruder: {
        instr: "Una de estas frases no pertenece a la lógica del texto. ¿Cuál es el intruso?",
        sentences: [
          "Dans une librairie, un livre se feuillette debout, et une conversation s'installe.",
          "Celui qui entre pressé rate l'essentiel.",
          "La pile des nouveautés doit être photographiée pour la page culture du magazine.",
          "Si ton esprit calcule, reviens au toucher du papier.",
          "Une librairie rend un quart d'heure de monde réel.",
        ],
        intruder: 2,
        why: "Fotografiar la pila para la revista es tarea de edición ajena a la experiencia de presencia en la librería: es el intruso.",
      },
    },
    {
      id: "md-fr-b2-07-3", theme: "spiritualità",
      title: "La précision, un acte de respect", titleEs: "La precisión, un acto de respeto", minutes: 3,
      paragraphs: [
        { it: "Corriger une nuance n'est pas un caprice de métier : c'est un acte de respect. Dire « la plupart » quand on peut dire « sept sur dix », écrire « certains » quand on sait lesquels : chaque approximation est un voile de plus sur la vérité. La tradition des correcteurs, avec ses crayons et ses dictionnaires, repose sur une conviction discrète, presque spirituelle : les mots justes honorent les choses qu'ils nomment, et les lecteurs qu'ils servent.", es: "Corregir un matiz no es un capricho de oficio: es un acto de respeto. Decir «la mayoría» cuando se puede decir «siete de cada diez», escribir «algunos» cuando se sabe cuáles: cada aproximación es un velo más sobre la verdad. La tradición de los correctores, con sus lápices y sus diccionarios, descansa en una convicción discreta, casi espiritual: las palabras justas honran a las cosas que nombran y a los lectores a quienes sirven." },
        { it: "Cet honneur rendu aux mots peut devenir une pratique intérieure. Avant d'envoyer un texte, une lettre, même un simple message : trois respirations, puis une relecture de respect — pas pour briller, mais pour ne pas voiler le réel. Les traditions de sagesse parlent de parole juste ; la table de correction en propose une version laïque et quotidienne. La précision est une politesse envers le monde.", es: "Ese honor hecho a las palabras puede volverse una práctica interior. Antes de enviar un texto, una carta, incluso un simple mensaje: tres respiraciones y una relectura de respeto, no para brillar, sino para no velar lo real. Las tradiciones de sabiduría hablan de palabra justa; la mesa de corrección propone una versión laica y cotidiana. La precisión es una cortesía con el mundo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Manual de estilo para correctores profesionales", "La precisión con las palabras como respeto al mundo y al lector", "Cómo escribir más rápido sin releer"],
        answer: 1,
        why: "El título llama respeto a la precisión: apunta al sentido humano de corregir, no a un manual técnico ni a la rapidez.",
      },
      sequence: {
        instr: "Ordena los pasos de la relectura de respeto antes de enviar:",
        events: ["Tu termines d'écrire un texte, une lettre ou un message", "Tu prends trois respirations", "Tu relis par respect, sans chercher à briller", "Tu remplaces une approximation par un mot juste", "Tu envoies : la précision est une politesse envers le monde"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Un vieux correcteur disait : « Chaque mot vague abîme un peu la vérité. » Il relisait ses lettres comme on regarde un paysage : lentement, sans rien presser. Tu n'es pas obligé de corriger le monde entier. Mais ce soir, relis ton dernier message avant de l'envoyer. Cherche le mot juste, celui qui ne blesse rien. C'est une petite politesse, faite au réel.",
        questions: [
          { q: "Que disait le vieux correcteur ?", kind: "literal", options: ["Chaque mot vague abîme un peu la vérité", "La vérité change selon les lecteurs", "Les lettres sont démodées"], answer: 0, why: "«Chaque mot vague abîme un peu la vérité»: literal al inicio del audio." },
          { q: "Que fais-tu ce soir, selon l'audio ?", kind: "literal", options: ["Tu relis ton dernier message avant de l'envoyer", "Tu jettes tes anciens messages", "Tu écris une lettre de dix pages"], answer: 0, why: "«Relis ton dernier message avant de l'envoyer»." },
          { q: "Relire « comme on regarde un paysage », c'est…", kind: "inferencial", options: ["prendre le temps de voir vraiment les mots", "rêver à la campagne", "éviter de corriger"], answer: 0, why: "La imagen sugiere lentitud y mirada real, no evasión." },
          { q: "La « politesse faite au réel » consiste à…", kind: "inferencial", options: ["choisir des mots qui ne déforment rien", "complimenter chaque lecteur", "remercier son correcteur"], answer: 0, why: "El audio lo cierra: buscar la palabra justa que no hiera nada." },
        ],
      },
    },
  ],

  "fr-cu-b2-08": [
    {
      id: "md-fr-b2-08-1", theme: "qui e ora",
      title: "Midi, avant la conférence de rédaction", titleEs: "El mediodía, antes de la conferencia de redacción", minutes: 2,
      paragraphs: [
        { it: "Dans une rédaction, midi sonne deux fois : l'heure de la cantine et le compte à rebours silencieux vers la conférence de quatorze heures. Beaucoup mangent devant l'écran, une main sur le sandwich, un œil sur les dépêches ; l'après-midi arrive déjà fatigué. Le présent, lui, se cache dans la pause qu'on croit ne pas pouvoir se permettre : le goût du pain, la cour du journal, dix minutes de ciel breton.", es: "En una redacción, el mediodía suena dos veces: la hora del comedor y la cuenta atrás silenciosa hacia la conferencia de redacción de las catorce. Muchos comen frente a la pantalla, una mano en el sándwich, un ojo en las agencias; la tarde llega ya cansada. El presente, en cambio, se esconde en la pausa que uno cree no poder permitirse: el sabor del pan, el patio del periódico, diez minutos de cielo bretón." },
        { it: "Fais l'essai demain : une seule chose à la fois. Le sandwich, sans dépêche ; la marche, sans podcast ; la fenêtre, sans fil d'actualité. Ce n'est pas du temps perdu : c'est le seul moment de la journée où l'actualité ne t'appartient pas encore. À quatorze heures, la conférence décidera de ta soirée ; à midi, pendant vingt minutes, c'est toi qui décides de ton attention.", es: "Haz la prueba mañana: una sola cosa a la vez. El sándwich, sin agencias; el paseo, sin pódcast; la ventana, sin hilo de actualidad. No es tiempo perdido: es el único momento del día en que la actualidad todavía no te pertenece. A las catorce, la conferencia decidirá tu tarde; al mediodía, durante veinte minutos, decides tú sobre tu atención." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La historia del horario laboral francés", "La pausa del mediodía del periodista como recuperación del presente", "Cómo pedir una reducción de jornada en una redacción"],
        answer: 1,
        why: "El título sitúa el mediodía justo antes de la conferencia: apunta a la pausa recuperada, no a la historia laboral ni a la reducción de jornada.",
      },
      quiz: [
        { q: "Que font beaucoup de journalistes à midi ?", kind: "literal", options: ["Ils mangent devant l'écran, un œil sur les dépêches", "Ils dorment dans la cour", "Ils quittent la rédaction pour la campagne"], answer: 0, why: "«Beaucoup mangent devant l'écran, une main sur le sandwich, un œil sur les dépêches»: literal en el texto." },
        { q: "Pourquoi midi est-il «le seul moment où l'actualité ne t'appartient pas encore» ?", kind: "inferencial", options: ["Parce que la conférence de quatorze heures n'a pas encore distribué les sujets", "Parce que le journal est imprimé à midi", "Parce que les agences de presse ferment à midi"], answer: 0, why: "Se infiere: antes de la conferencia de las catorce los temas no se han repartido y la atención sigue siendo tuya." },
        { q: "«C'est toi qui décides de ton attention» défend…", kind: "critica", options: ["une souveraineté retrouvée sur sa propre attention", "l'interdiction des pauses déjeuner", "la lecture permanente des dépêches"], answer: 0, why: "La idea crítica: reclamar la atención propia en la pausa, antes de que la agenda del día la reparta." },
      ],
      vf: [
        { text: "La conférence de rédaction a lieu à quatorze heures.", value: true, why: "«Le compte à rebours silencieux vers la conférence de quatorze heures»." },
        { text: "Le texte conseille d'écouter un podcast pendant la marche.", value: false, why: "Al contrario: «la marche, sans podcast»." },
        { text: "La cour du journal et le ciel breton font partie de la pause proposée.", value: true, why: "«Le goût du pain, la cour du journal, dix minutes de ciel breton»." },
      ],
    },
    {
      id: "md-fr-b2-08-2", theme: "relax fisico",
      title: "Les yeux de la une", titleEs: "Los ojos de la portada", minutes: 2,
      paragraphs: [
        { it: "Une journée de rédaction, ce sont huit heures d'écran : la maquette, les dépêches, les corrections, la une qui change trois fois. Le soir, les yeux brûlent, la vision de loin se brouille, et le sommeil tarde à venir, comme si les pixels restaient collés aux paupières. La fatigue d'un journaliste est d'abord une fatigue d'yeux ; le corps entier suit.", es: "Una jornada de redacción son ocho horas de pantalla: la maqueta, las agencias, las correcciones, la portada que cambia tres veces. Por la noche, los ojos arden, la visión de lejos se enturbia y el sueño tarda en llegar, como si los píxeles se hubieran pegado a los párpados. El cansancio de un periodista es primero un cansancio de ojos; el cuerpo entero le sigue." },
        { it: "Les oculistes répètent une règle simple : toutes les vingt minutes, vingt secondes vers le fond de la salle. Ajoute la technique du palmage : paumes chaudes posées sur les yeux fermés, coudes sur la table, trois respirations lentes. Le noir chaud sous les mains repose la rétine autant que la lumière l'a fatiguée. Fais de cette pause un rituel de rédaction : entre deux versions de la une, trente secondes de nuit font mieux qu'une tasse de café.", es: "Los oculistas repiten una regla simple: cada veinte minutos, veinte segundos hacia el fondo de la sala. Añade la técnica del palmado: palmas calientes sobre los ojos cerrados, codos en la mesa, tres respiraciones lentas. El negro cálido bajo las manos descansa la retina tanto como la luz la ha cansado. Haz de esa pausa un ritual de redacción: entre dos versiones de la portada, treinta segundos de noche hacen más que una taza de café." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Relajar la vista en una jornada de pantallas en la redacción", "Un examen de la vista completo", "Cómo diseñar una portada de periódico"],
        answer: 0,
        why: "El título pone los ojos sobre la portada: apunta al descanso visual del periodista, no a la óptica ni al diseño gráfico.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Des micro-pauses pour les yeux protègent mieux que le café",
          "La une d'un journal ne doit jamais changer",
          "Les écrans sont inoffensifs si l'on ferme les yeux la nuit",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Toutes les vingt minutes, vingt secondes vers le fond de la salle", "Le palmage repose la rétine fatiguée", "La fatigue du journaliste est d'abord une fatigue d'yeux"],
        distractors: ["Il faut travailler dans l'obscurité totale", "Les oculistes interdisent les écrans l'après-midi", "Le café remplace le sommeil"],
      },
      intruder: {
        instr: "Una de estas frases no pertenece a la lógica del texto. ¿Cuál es el intruso?",
        sentences: [
          "Une journée de rédaction, ce sont huit heures d'écran.",
          "Toutes les vingt minutes, regarde vingt secondes vers le fond de la salle.",
          "La une du journal doit être validée par le directeur avant midi.",
          "Pose des paumes chaudes sur les yeux fermés, et respire lentement.",
          "Trente secondes de nuit font mieux qu'une tasse de café.",
        ],
        intruder: 2,
        why: "La validación de la portada es un asunto editorial ajeno al descanso visual: es el intruso.",
      },
    },
    {
      id: "md-fr-b2-08-3", theme: "meditazione",
      title: "Une phrase, un souffle", titleEs: "Una frase, una respiración", minutes: 3,
      paragraphs: [
        { it: "L'éditorial attendu pour dix-sept heures n'avance pas : les phrases se suivent, se contredisent, s'effacent. La méditation du rédacteur commence par un renversement : au lieu de courir après l'argument, poser une phrase, puis respirer, puis poser la suivante. L'argumentation n'est pas un fleuve ; c'est une suite de pierres posées une à une, chacune à sa place, chacune assez solide pour porter le pas suivant.", es: "El editorial esperado para las diecisiete no avanza: las frases se siguen, se contradicen, se borran. La meditación del redactor empieza con un giro: en vez de correr tras el argumento, apoyar una frase, luego respirar, luego apoyar la siguiente. La argumentación no es un río; es una hilera de piedras puestas una a una, cada una en su sitio, cada una bastante sólida para sostener el paso siguiente." },
        { it: "Concrètement : écris une phrase complète, avec son verbe et sa fin. Souffle en la relisant. Si elle tient, garde-la ; si elle vacille, corrige-la ou remplace-la — sans te haïr, sans te presser. La mise en relief du journaliste (« c'est cette réforme que nous refusons ») gagne à cette lenteur : ce que l'on place au centre de la phrase demande à être vu au centre de l'esprit. Un éditorial écrit en respirant se lit sans essoufflement.", es: "En concreto: escribe una frase completa, con su verbo y su final. Sopla al releerla. Si se sostiene, consérvala; si vacila, corrígela o reemplázala, sin odiarte, sin apresurarte. La puesta en relieve del periodista («es esta reforma la que rechazamos») gana con esa lentitud: lo que se coloca en el centro de la frase pide ser visto en el centro de la mente. Un editorial escrito respirando se lee sin ahogo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Trucos para escribir editoriales en diez minutos", "Escribir frase a frase, con una respiración entre cada una", "La respiración de los lectores de prensa"],
        answer: 1,
        why: "El título empareja frase y respiración: apunta al ritmo calmado de escritura, no a los trucos rápidos ni a los lectores.",
      },
      sequence: {
        instr: "Ordena los pasos de la escritura meditada del editorial:",
        events: ["Tu écris une première phrase complète, avec son verbe et sa fin", "Tu souffles en la relisant", "Si elle vacille, tu corriges un mot ou tu la remplaces", "Tu poses la phrase suivante, aussi posée que la première", "À dix-sept heures, l'éditorial se lit sans essoufflement"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Ton éditorial est attendu pour dix-sept heures. Pas de panique. Pose une seule phrase, la première. Relis-la en soufflant, lentement. Si elle vacille, corrige un mot, un seul. Puis pose la suivante. C'est ainsi qu'un argument se construit : une pierre, un souffle, une pierre. À la fin, tu auras un texte, et ton souffle n'aura pas changé de rythme.",
        questions: [
          { q: "Quand l'éditorial est-il attendu ?", kind: "literal", options: ["À dix-sept heures", "À sept heures du matin", "Dans dix-sept jours"], answer: 0, why: "«Attendu pour dix-sept heures»: literal al inicio del audio." },
          { q: "Que fais-tu si la première phrase vacille ?", kind: "literal", options: ["Tu corriges un mot, un seul", "Tu jettes tout le brouillon", "Tu changes de sujet"], answer: 0, why: "«Corrige un mot, un seul»." },
          { q: "«Une pierre, un souffle, une pierre» décrit…", kind: "inferencial", options: ["une construction posée, argument par argument", "un mur impossible à bâtir", "un jeu de société"], answer: 0, why: "La imagen evoca una construcción serena, piedra a piedra." },
          { q: "Pourquoi le souffle garde-t-il son rythme à la fin ?", kind: "inferencial", options: ["Parce que le travail est resté calme et mesuré", "Parce que le journaliste court tous les matins", "Parce que le texte est très court"], answer: 0, why: "Se infiere: el método sin prisa evita el ahogo del apuro." },
        ],
      },
    },
  ],

  "fr-cu-b2-09": [
    {
      id: "md-fr-b2-09-1", theme: "relax fisico",
      title: "La colère dans les épaules", titleEs: "La rabia en los hombros", minutes: 2,
      paragraphs: [
        { it: "Trois semaines sans machine à laver, cinq appels au service après-vente, et toujours la même formule : « votre dossier est en cours ». Chaque rappel de la formule remonte le long de la nuque : les épaules se bloquent, les doigts se crispent sur le téléphone, la mâchoire serre les mots qu'elle ne dira pas. La colère polie reste une colère, et le corps la stocke scrupuleusement.", es: "Tres semanas sin lavadora, cinco llamadas al servicio posventa y siempre la misma fórmula: «su expediente está en curso». Cada repetición de la fórmula sube por la nuca: los hombros se bloquean, los dedos se contraen sobre el teléfono, la mandíbula aprieta las palabras que no dirá. La rabia educada sigue siendo rabia, y el cuerpo la almacena escrupulosamente." },
        { it: "Avant d'écrire la lettre de réclamation, débarrasse le corps d'abord. Debout, roule doucement les épaules en arrière, trois grands cercles ; desserre la mâchoire ; souffle fort par la bouche, une fois, deux fois, comme pour éteindre une bougie lointaine. Puis seulement, assieds-toi. La lettre sera plus ferme écrite par un corps détendu : la colère prête ses muscles, mais la précision demande des épaules libres.", es: "Antes de escribir la carta de reclamación, libera primero el cuerpo. De pie, gira suavemente los hombros hacia atrás, tres círculos grandes; suelta la mandíbula; sopla fuerte por la boca, una vez, dos veces, como para apagar una vela lejana. Solo entonces siéntate. La carta será más firme escrita por un cuerpo relajado: la rabia presta sus músculos, pero la precisión pide hombros libres." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo reclamar por teléfono al servicio posventa", "Soltar el cuerpo antes de escribir la carta de reclamación", "Ejercicios de fuerza para los hombros"],
        answer: 1,
        why: "El título sitúa la rabia en los hombros: apunta a soltar el cuerpo antes de reclamar, no al teléfono ni a la fuerza física.",
      },
      quiz: [
        { q: "Que répond toujours le service après-vente ?", kind: "literal", options: ["«Votre dossier est en cours»", "«Nous vous remboursons demain»", "«La machine est réparée»"], answer: 0, why: "«Toujours la même formule : votre dossier est en cours»: literal en el texto." },
        { q: "Pourquoi la lettre sera-t-elle plus ferme écrite par un corps détendu ?", kind: "inferencial", options: ["Parce que la précision demande des épaules libres", "Parce que la colère écrit trop lentement", "Parce que le papier supporte mal la tension"], answer: 0, why: "El texto lo concluye: la rabia presta sus músculos, pero la precisión pide hombros libres." },
        { q: "«La colère polie reste une colère» signifie que…", kind: "critica", options: ["les bonnes manières ne suppriment pas l'émotion : le corps la garde", "il faut toujours montrer sa colère", "la politesse est inutile en affaires"], answer: 0, why: "Idea crítica: la cortesía formal no disuelve la emoción; el cuerpo la almacena." },
      ],
      vf: [
        { text: "La colère remonte le long de la nuque.", value: true, why: "«Chaque rappel de la formule remonte le long de la nuque»." },
        { text: "Le texte conseille d'écrire la lettre immédiatement, sans préparation.", value: false, why: "Al contrario: primero suelta el cuerpo y solo después te sientas a escribir." },
        { text: "Les cercles d'épaules se font doucement, vers l'arrière.", value: true, why: "«Roule doucement les épaules en arrière, trois grands cercles»." },
      ],
    },
    {
      id: "md-fr-b2-09-2", theme: "spiritualità",
      title: "Écrire à quelqu'un, pas contre quelqu'un", titleEs: "Escribir a alguien, no contra alguien", minutes: 3,
      paragraphs: [
        { it: "La lettre de réclamation française a ses rites : « Madame, je me permets de vous écrire », « je vous prie d'agréer ». Derrière ces formules vieillies, une conviction discrète : même en conflit, on écrit à un être humain, pas à un service. La personne qui lira ta lettre n'a pas cassé la machine ; elle peut, si les mots l'y invitent, devenir ton alliée la plus efficace.", es: "La carta de reclamación francesa tiene sus ritos: «Señora: me permito escribirle», «le ruego que acepte». Detrás de esas fórmulas veteranas, una convicción discreta: incluso en conflicto, se escribe a un ser humano, no a un servicio. La persona que leerá tu carta no rompió la lavadora; puede, si las palabras la invitan, convertirse en tu aliada más eficaz." },
        { it: "Les traditions de sagesse diraient : adresse-toi à la personne, pas à la fonction. Avant d'envoyer, relis ta lettre en cherchant le visage de sa destinataire : quelqu'un de pressé, avec des piles de dossiers, qui répond mieux à la précision courtoise qu'aux cris. Ce respect n'est pas de la faiblesse ; c'est une stratégie spirituelle et pratique à la fois : la politesse donne à l'autre la place d'agir, et l'envie de le faire.", es: "Las tradiciones de sabiduría dirían: dirígete a la persona, no a la función. Antes de enviar, relee tu carta buscando el rostro de su destinataria: alguien con prisa, con pilas de expedientes, que responde mejor a la precisión cortés que a los gritos. Ese respeto no es debilidad; es una estrategia espiritual y práctica a la vez: la cortesía le da al otro el espacio para actuar, y las ganas de hacerlo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Fórmulas de cortesía muertas que hay que abolir", "Escribir la reclamación a una persona, con cortesía estratégica", "Cómo demandar a una empresa en los tribunales"],
        answer: 1,
        why: "El título opone escribir A alguien y CONTRA alguien: apunta a la carta como trato humano, no a abolir fórmulas ni a demandar.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "La lettre de réclamation gagne à s'adresser à une personne, avec une précision courtoise",
          "Les formules de politesse françaises doivent disparaître",
          "Il faut menacer le service après-vente pour être remboursé",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["La personne qui lira ta lettre n'a pas cassé la machine", "Le lecteur pressé répond mieux à la précision courtoise qu'aux cris", "La politesse donne à l'autre la place d'agir"],
        distractors: ["Les cris accélèrent toujours le remboursement", "La destinataire ne lit que le dimanche", "La courtoisie est interdite dans les réclamations"],
      },
      intruder: {
        instr: "Una de estas frases no pertenece a la lógica del texto. ¿Cuál es el intruso?",
        sentences: [
          "Même en conflit, on écrit à un être humain, pas à un service.",
          "La personne qui lira ta lettre n'a pas cassé la machine.",
          "Relis ta lettre en cherchant le visage de sa destinataire.",
          "Une lettre recommandée avec accusé de réception coûte plus cher.",
          "La politesse donne à l'autre la place d'agir, et l'envie de le faire.",
        ],
        intruder: 3,
        why: "El precio del envío certificado es un dato postal ajeno al sentido humano de la carta: es el intruso.",
      },
    },
    {
      id: "md-fr-b2-09-3", theme: "relax mentale",
      title: "Le dossier est en cours", titleEs: "El expediente está en curso", minutes: 3,
      paragraphs: [
        { it: "« En cours » : deux mots qui ne veulent rien dire et qui occupent tout. Depuis trois semaines, ton esprit relit le message du service après-vente, recompte les jours, prépare les appels, imagine les scénarios. La machine, elle, reste silencieuse dans la salle de bain. Le dossier est en cours ; malheureusement, le tien aussi : un dossier mental, toujours ouvert, qui se relit lui-même en boucle.", es: "«En curso»: dos palabras que no significan nada y lo ocupan todo. Desde hace tres semanas, tu mente relee el mensaje del servicio posventa, recuenta los días, prepara las llamadas, imagina escenarios. La lavadora, en cambio, sigue muda en el cuarto de baño. El expediente está en curso; por desgracia, el tuyo también: un expediente mental, siempre abierto, que se relee a sí mismo en bucle." },
        { it: "La détente commence par une décision d'horaire : le dossier a son temps — dix minutes le matin, dix le soir — et le reste de la journée lui est interdit. Quand la pensée « et la machine ? » surgit hors de ces créneaux, note-la, salue-la, laisse-la passer comme un train auquel tu ne montes pas. Un dossier mental qui se repose avance souvent plus vite que vingt heures de rumination.", es: "La calma empieza con una decisión de horario: el expediente tiene su tiempo —diez minutos por la mañana, diez por la noche— y el resto del día le está prohibido. Cuando el pensamiento «¿y la lavadora?» aparezca fuera de esas franjas, anótalo, salúdalo, déjalo pasar como un tren al que no subes. Un expediente mental que descansa avanza a menudo más rápido que veinte horas de rumiación." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo reparar una lavadora uno mismo", "El bucle mental de esperar al servicio posventa y cómo limitarlo", "La historia del correo certificado francés"],
        answer: 1,
        why: "El título repite la fórmula del servicio posventa: apunta al bucle mental de la espera, no a la reparación ni al correo.",
      },
      sequence: {
        instr: "Ordena los pasos para cerrar el expediente mental:",
        events: ["Tu fixes deux créneaux de dix minutes pour le dossier", "Hors de ces créneaux, la pensée « et la machine ? » surgit", "Tu la notes et tu la salue", "Tu la laisses passer comme un train auquel tu ne montes pas", "Le soir, pendant le créneau, tu rappelles le service l'esprit reposé"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Ton dossier est en cours, dit le message. Ces deux mots tournent dans ta tête depuis ce matin. Écoute-les une dernière fois, puis donne-leur un rendez-vous : dix minutes ce soir, pas avant. D'ici là, chaque fois qu'ils reviennent, salue-les et laisse-les passer. Un esprit qui ne rumine pas n'est pas un esprit qui ne fait rien : c'est un esprit qui garde ses forces pour agir.",
        questions: [
          { q: "Que dit le message du service ?", kind: "literal", options: ["Ton dossier est en cours", "Ta machine est réparée", "Ton dossier est perdu"], answer: 0, why: "«Ton dossier est en cours, dit le message»: literal al inicio." },
          { q: "Quel rendez-vous donnes-tu à ces mots ?", kind: "literal", options: ["Dix minutes ce soir", "Toute la journée", "Aucun, ils peuvent tourner librement"], answer: 0, why: "«Donne-leur un rendez-vous : dix minutes ce soir»." },
          { q: "Saluer les mots et les laisser passer, c'est…", kind: "inferencial", options: ["refuser de les suivre à chaque apparition", "leur répondre poliment par écrit", "les effacer de sa mémoire"], answer: 0, why: "El gesto interrumpe el bucle sin pelear con él." },
          { q: "«Garder ses forces pour agir» suggère que…", kind: "inferencial", options: ["la rumination épuise sans résultat", "il faut dormir toute la journée", "l'action remplace la réclamation"], answer: 0, why: "Se infiere: la rumiación gasta energía que la acción aprovecharía mejor." },
        ],
      },
    },
  ],

  "fr-cu-b2-10": [
    {
      id: "md-fr-b2-10-1", theme: "qui e ora",
      title: "Le tour de table complet", titleEs: "La vuelta a la mesa completa", minutes: 2,
      paragraphs: [
        { it: "La salle des fêtes de Nantes est pleine : le plan de mobilité divise le quartier, et l'animateur organise un tour de table. Chacun a cent fois raison dans sa tête, et attend surtout son tour pour le dire. Quand ton voisin parle — celui qui veut la piétonnisation, celui qui veut le parc-relais —, ton esprit rédige déjà sa réfutation ; pendant ce temps, sa phrase s'envole, entière, sans toi.", es: "El salón municipal de Nantes está lleno: el plan de movilidad divide al barrio y el animador organiza una vuelta a la mesa. Cada uno tiene cien veces razón en su cabeza y sobre todo espera su turno para decirlo. Cuando habla tu vecino —el que quiere la peatonalización, el que quiere el aparcamiento disuasorio—, tu mente ya redacta su refutación; mientras tanto, su frase se eleva, entera, sin ti." },
        { it: "Le présent, dans une réunion publique, a une règle simple : une seule voix à la fois, et pour l'instant, ce n'est pas la tienne. Écoute la phrase entière, jusqu'au point final, même si tu la combats — surtout si tu la combats. La réfutation la plus élégante commence par une reprise exacte des mots de l'autre ; pour les reprendre, il faut d'abord les avoir entendus. Contredire sans avoir écouté, c'est tirer dans le brouillard.", es: "El presente, en una asamblea pública, tiene una regla simple: una sola voz a la vez, y por ahora no es la tuya. Escucha la frase entera, hasta el punto final, aunque la combatas —sobre todo si la combatas—. La refutación más elegante empieza retomando las palabras exactas del otro; para retomarlas, primero hay que haberlas oído. Contradecir sin haber escuchado es disparar en la niebla." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo moderar asambleas vecinales", "Escuchar la frase completa del vecino antes de refutarla", "La historia del tranvía de Nantes"],
        answer: 1,
        why: "El título evoca la vuelta a la mesa de la asamblea: apunta a escuchar entero antes de responder, no a moderar ni al tranvía.",
      },
      quiz: [
        { q: "Que fait ton esprit quand ton voisin parle ?", kind: "literal", options: ["Il rédige déjà sa réfutation", "Il s'endort doucement", "Il note chaque mot au brouillon"], answer: 0, why: "«Ton esprit rédige déjà sa réfutation»: literal en el texto." },
        { q: "Pourquoi la réfutation élégante commence-t-elle par les mots exacts de l'autre ?", kind: "inferencial", options: ["Parce qu'on ne peut reprendre que ce qu'on a entendu", "Parce que le règlement de la salle l'exige", "Parce que cela impressionne l'animateur"], answer: 0, why: "Se infiere: citar las palabras del otro exige haberlas escuchado enteras." },
        { q: "«Contredire sans avoir écouté, c'est tirer dans le brouillard» veut dire que…", kind: "critica", options: ["on réfute une position imaginée, pas celle qui a été dite", "les réunions publiques ne servent à rien", "les voisins parlent trop bas"], answer: 0, why: "La metáfora: disparar en la niebla es refutar lo imaginado, no lo dicho." },
      ],
      vf: [
        { text: "Le plan de mobilité divise le quartier de Nantes.", value: true, why: "«Le plan de mobilité divise le quartier»: literal al inicio." },
        { text: "Le texte conseille d'interrompre dès que l'argument devient clair.", value: false, why: "Al contrario: escuchar la frase entera, hasta el punto final." },
        { text: "Écouter la phrase entière vaut surtout quand on la combat.", value: true, why: "«Même si tu la combats — surtout si tu la combats»." },
      ],
    },
    {
      id: "md-fr-b2-10-2", theme: "spiritualità",
      title: "L'adversaire, un professeur d'attention", titleEs: "El adversario, un profesor de atención", minutes: 3,
      paragraphs: [
        { it: "Les traditions de sagesse proposent un exercice déroutant : considérer l'adversaire comme un professeur. Le voisin qui défend le parking là où tu veux les platanes t'oblige à préciser tes raisons, à chercher tes chiffres, à comprendre ce qui, dans son camp, t'inquiète. Certes, ses arguments t'agacent ; cependant, ils t'obligent à chercher les tiens. Sans lui, ta position resterait molle et sentimentale ; elle se forge en le réfutant. Un adversaire sérieux est une salle de sport pour l'attention.", es: "Las tradiciones de sabiduría proponen un ejercicio desconcertante: considerar al adversario como un profesor. El vecino que defiende el aparcamiento donde tú quieres los plátanos te obliga a precisar tus razones, a buscar tus cifras, a entender qué es lo de su postura que te inquieta. Ciertamente, sus argumentos te irritan; sin embargo, te obligan a buscar los tuyos. Sin él, tu postura quedaría blanda y sentimental; se forja refutándolo. Un adversario serio es un gimnasio para la atención." },
        { it: "Cela ne veut pas dire lui donner raison, ni fuir le débat : c'est un retournement intérieur, silencieux, que personne ne voit. Ce soir, après la réunion, remercie intérieurement les deux arguments qui t'ont le plus coûté. La gratitude envers l'adversaire n'est pas une défaite ; c'est la reconnaissance discrète de ce que le conflit, bien mené, affine en chacun — la précision, la patience, et une certaine humilité.", es: "Eso no significa darle la razón ni huir del debate: es un giro interior, silencioso, que nadie ve. Esta noche, después de la reunión, agradece interiormente los dos argumentos que más te han costado. La gratitud hacia el adversario no es una derrota; es el reconocimiento discreto de lo que el conflicto, bien llevado, afina en cada uno: la precisión, la paciencia y cierta humildad." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo evitar toda discusión con los vecinos", "El adversario como maestro que afina la propia postura", "Técnicas de persuasión agresiva en asambleas"],
        answer: 1,
        why: "El título llama profesor al adversario: apunta a lo que el debate afina en uno, no a evitarlo ni a la agresividad.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "L'adversaire, vu comme un professeur, rend ta position plus précise et plus humble",
          "Il faut céder à l'adversaire pour avoir la paix",
          "Les assemblées publiques sont toujours stériles",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Sans adversaire, ta position resterait molle et sentimentale", "Certes, ses arguments t'agacent ; cependant, ils t'obligent à chercher les tiens", "Remercie intérieurement les deux arguments qui t'ont coûté"],
        distractors: ["La gratitude envers l'adversaire est une défaite", "Les platanes poussent plus vite que les parkings", "Le débat public est interdit le soir"],
      },
      intruder: {
        instr: "Una de estas frases no pertenece a la lógica del texto. ¿Cuál es el intruso?",
        sentences: [
          "L'adversaire t'oblige à préciser tes raisons.",
          "Sans lui, ta position resterait molle et sentimentale.",
          "Un adversaire sérieux est une salle de sport pour l'attention.",
          "Le parc-relais ouvre ses barrières à six heures du matin.",
          "Remercie intérieurement les arguments qui t'ont coûté.",
        ],
        intruder: 3,
        why: "El horario del aparcamiento disuasorio es un dato logístico de la reunión ajeno a la práctica interior: es el intruso.",
      },
    },
    {
      id: "md-fr-b2-10-3", theme: "relax fisico",
      title: "Deux heures sur une chaise", titleEs: "Dos horas en una silla", minutes: 2,
      paragraphs: [
        { it: "Une concertation publique, c'est une chaise en plastique, deux heures, et une température qui monte avec les interventions. Le corps s'installe dès la première minute : bassin basculé, poids sur une seule fesse, nuque tendue vers le micro. À la mi-séance, le dos brûle et la patience aussi ; les deux fatigues se nourrissent l'une de l'autre.", es: "Una asamblea pública son una silla de plástico, dos horas y una temperatura que sube con las intervenciones. El cuerpo se acomoda desde el primer minuto: pelvis basculada, el peso en una sola nalga, la nuca tensa hacia el micrófono. A media sesión, la espalda arde y la paciencia también; los dos cansancios se alimentan uno al otro." },
        { it: "La détente citoyenne tient en trois gestes invisibles. Assieds-toi sur les ischions, le bassin vertical, les deux pieds au sol : la chaise porte, tu n'as plus à lutter contre elle. Toutes les vingt minutes, pousse les pieds dans le sol et allonge la colonne, sans bruit, pendant une expiration. Enfin, quand la salle chauffe, desserre la langue du palais et laisse les épaules descendre d'un étage. Un corps calme encaisse les désaccords ; un corps crispé les fabrique.", es: "La distensión ciudadana cabe en tres gestos invisibles. Siéntate sobre los isquiones, la pelvis vertical, los dos pies en el suelo: la silla sostiene y ya no hace falta luchar contra ella. Cada veinte minutos, empuja los pies contra el suelo y alarga la columna, sin ruido, durante una espiración. Por último, cuando la sala se calienta, suelta la lengua del paladar y deja que los hombros bajen un piso. Un cuerpo tranquilo absorbe los desacuerdos; un cuerpo contraído los fabrica." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo pedir la palabra en una asamblea", "Cuidar el cuerpo sentado durante una asamblea larga", "La historia de las sillas de plástico francesas"],
        answer: 1,
        why: "El título resume la asamblea como dos horas en una silla: apunta al cuidado corporal, no al turno de palabra ni al mueble.",
      },
      sequence: {
        instr: "Ordena los tres gestos y su contexto según el texto:",
        events: ["Tu t'assieds sur les ischions, le bassin vertical", "Tu poses les deux pieds au sol", "Toutes les vingt minutes, tu pousses les pieds dans le sol", "Tu allonges la colonne pendant une expiration", "Quand la salle chauffe, tu desserres la langue et laisses descendre les épaules"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Deuxième heure de réunion. Ta chaise en plastique ne changera pas, mais toi, si. Pose les deux pieds au sol, bien à plat. Pousse-les doucement vers le bas, comme si tu voulais freiner la terre, et allonge le dos en soufflant. Encore une fois. Voilà : ton dos vient de regagner dix ans. La séance peut reprendre ; ton corps, lui, reste de ton côté.",
        questions: [
          { q: "Que poses-tu bien à plat ?", kind: "literal", options: ["Les deux pieds au sol", "Les mains sur la table", "La tête sur le dossier"], answer: 0, why: "«Pose les deux pieds au sol, bien à plat»." },
          { q: "Dans quelle direction pousses-tu les pieds ?", kind: "literal", options: ["Vers le bas, comme pour freiner la terre", "Vers le haut", "Vers le voisin"], answer: 0, why: "«Pousse-les doucement vers le bas, comme si tu voulais freiner la terre»." },
          { q: "«Ton dos vient de regagner dix ans» signifie que…", kind: "inferencial", options: ["la posture allégée rajeunit la sensation du dos", "la réunion sera plus courte", "il faut changer de chaise"], answer: 0, why: "Es una imagen: la postura liberada rejuvenece la sensación, no el tiempo de la sesión." },
          { q: "Pourquoi pousser les pieds avant d'allonger le dos ?", kind: "inferencial", options: ["Pour créer un appui stable qui libère la colonne", "Pour réchauffer la salle", "Pour réclamer la parole"], answer: 0, why: "Se infiere: el apoyo firme de los pies permite alargar la columna sin forzarla." },
        ],
      },
    },
  ],

  "fr-cu-b2-11": [
    {
      id: "md-fr-b2-11-1", theme: "meditazione",
      title: "Trois respirations avant la weekly", titleEs: "Tres respiraciones antes de la weekly", minutes: 2,
      paragraphs: [
        { it: "Lundi matin, Station F : la weekly commence dans dix minutes, et l'open space vibre déjà — les gobelets s'empilent, les écrans s'allument, chacun répète le point qu'il va faire. Dans ce hall d'ambition, fermer les yeux trois minutes semble aussi déplacé qu'une sieste en plein lancement ; pourtant, c'est peut-être l'outil le plus rentable du bâtiment.", es: "Lunes por la mañana, Station F: la weekly empieza en diez minutos y el open space ya vibra: los vasos se apilan, las pantallas se encienden, cada uno repasa el punto que va a exponer. En ese vestíbulo de ambición, cerrar los ojos tres minutos parece tan fuera de lugar como una siesta en pleno lanzamiento; y sin embargo puede que sea la herramienta más rentable del edificio." },
        { it: "Trois respirations avant la réunion changent peu de chose au planning, et beaucoup à ta présence. Assis, les deux pieds au sol, compte trois cycles complets : rien à résoudre, rien à défendre, rien à prouver pendant cent quatre-vingts secondes. Puis entre dans la salle. La weekly sera la même pour tous ; toi, tu ne seras pas le même dans la weekly — et c'est ce qu'une équipe attend de chacun : une présence entière, pas une urgence qui parle.", es: "Tres respiraciones antes de la reunión cambian poco en el plan y mucho en tu presencia. Sentado, los dos pies en el suelo, cuenta tres ciclos completos: nada que resolver, nada que defender, nada que demostrar durante ciento ochenta segundos. Luego entra en la sala. La weekly será la misma para todos; tú no serás el mismo dentro de ella, y eso es lo que un equipo espera de cada uno: una presencia entera, no una urgencia que habla." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo dirigir reuniones de lunes más cortas", "Tres respiraciones para llegar presente a la weekly del lunes", "La historia de Station F"],
        answer: 1,
        why: "El título une la respiración con la weekly: apunta a la presencia antes de la reunión, no a dirigirla ni a la historia del campus.",
      },
      quiz: [
        { q: "Quand commence la weekly ?", kind: "literal", options: ["Dans dix minutes", "Dans dix jours", "Elle est déjà terminée"], answer: 0, why: "«La weekly commence dans dix minutes»: literal al inicio." },
        { q: "Que changent les trois respirations, selon le texte ?", kind: "inferencial", options: ["Peu de chose au planning, beaucoup à ta présence", "Le contenu du lancement", "L'horaire de la réunion"], answer: 0, why: "«Elles changent peu de chose au planning, et beaucoup à ta présence»." },
        { q: "«Une présence entière, pas une urgence qui parle» oppose…", kind: "critica", options: ["l'attention calme et la précipitation stressée", "la réunion et le travail solitaire", "les anciens et les débutants"], answer: 0, why: "Idea crítica: lo que el equipo espera es presencia, no contagio de urgencia." },
      ],
      vf: [
        { text: "L'open space vibre déjà avant la réunion.", value: true, why: "«L'open space vibre déjà»: literal en el primer párrafo." },
        { text: "Les trois cycles durent cent quatre-vingts secondes.", value: true, why: "«Rien à prouver pendant cent quatre-vingts secondes»." },
        { text: "La méditation remplace la weekly, selon le texte.", value: false, why: "No la sustituye: la weekly será la misma; lo que cambia es tu presencia en ella." },
      ],
    },
    {
      id: "md-fr-b2-11-2", theme: "qui e ora",
      title: "Le téléphone face contre table", titleEs: "El teléfono boca abajo", minutes: 2,
      paragraphs: [
        { it: "Réunion de lancement, neuf personnes, neuf téléphones — posés face contre table, ou pas. Celui qui reste retourné capte tout : chaque vibration, chaque lueur, chaque pensée qui saute vers lui comme vers un phare. Le corps est à la table ; l'attention vit dans une poche, ou pire, dans une conversation qui n'a pas encore eu lieu.", es: "Reunión de lanzamiento, nueve personas, nueve teléfonos: boca abajo sobre la mesa, o no. El que queda hacia arriba lo captura todo: cada vibración, cada destello, cada pensamiento que salta hacia él como hacia un faro. El cuerpo está en la mesa; la atención vive en un bolsillo o, peor, en una conversación que todavía no ha ocurrido." },
        { it: "La présence en réunion a un test simple : si l'on te demande ton avis, réponds à la question posée, pas à celle que tu préparais. Pour y arriver, un seul objet d'attention : la voix qui parle. Quand le mental part vers une notification fantôme, note-le — « parti » —, et reviens. Une réunion où chacun reste à la table dure moins longtemps et décide mieux : l'attention est le seul outil d'équipe qui ne s'achète pas.", es: "La presencia en reunión tiene una prueba simple: si te piden tu opinión, responde a la pregunta formulada, no a la que estabas preparando. Para lograrlo, un solo objeto de atención: la voz que habla. Cuando la mente se vaya hacia una notificación fantasma, anótalo —«ida»— y vuelve. Una reunión en la que cada uno se queda en la mesa dura menos y decide mejor: la atención es la única herramienta de equipo que no se compra." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La presencia en la reunión frente al teléfono boca abajo", "Cómo silenciar notificaciones en el trabajo", "Los mejores móviles para empresas"],
        answer: 0,
        why: "El título describe el gesto de poner el teléfono boca abajo: apunta a la presencia en la reunión, no a la configuración ni al aparato.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Rester présent à la voix qui parle rend la réunion plus courte et meilleure",
          "Les téléphones doivent être confisqués à l'entrée",
          "Préparer sa réponse pendant que l'autre parle est une qualité",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Le téléphone retourné capte chaque vibration et chaque lueur", "Note « parti » et reviens à la voix", "L'attention est le seul outil d'équipe qui ne s'achète pas"],
        distractors: ["Les réunions décident mieux sans aucune règle", "Les notifications fantômes n'existent pas", "Il faut répondre à la question qu'on préparait"],
      },
      intruder: {
        instr: "Una de estas frases no pertenece a la lógica del texto. ¿Cuál es el intruso?",
        sentences: [
          "Celui qui reste retourné capte chaque vibration et chaque lueur.",
          "Le corps est à la table ; l'attention vit ailleurs.",
          "Note « parti », et reviens à la voix qui parle.",
          "Une réunion où chacun reste à la table décide mieux.",
          "Le budget marketing sera validé par le comité du mercredi.",
        ],
        intruder: 4,
        why: "La validación del presupuesto por el comité es un asunto logístico ajeno a la práctica de presencia: es el intruso.",
      },
    },
    {
      id: "md-fr-b2-11-3", theme: "spiritualità",
      title: "Le sens derrière l'objectif", titleEs: "El sentido detrás del objetivo", minutes: 3,
      paragraphs: [
        { it: "Les trimestres se suivent : activer plus d'utilisateurs, lever la série suivante, tenir le runway. Posés les uns derrière les autres, ces objectifs forment une route si recte qu'on oublie de demander où elle va. La question du sens n'est pas un luxe de philosophe : elle est ce qui distingue une équipe qui s'épuise d'une équipe qui grandit. Les grandes traditions le disent à leur manière ; les équipes durables l'apprennent à la leur.", es: "Los trimestres se suceden: activar más usuarios, levantar la siguiente ronda, mantener el runway. Puestos uno detrás de otro, esos objetivos forman una carretera tan recta que se olvida preguntar adónde va. La pregunta por el sentido no es un lujo de filósofo: es lo que distingue a un equipo que se agota de un equipo que crece. Las grandes tradiciones lo dicen a su manera; los equipos duraderos lo aprenden a la suya." },
        { it: "Fais l'exercice des trois pourquoi, ce soir : pourquoi ce lancement ? Pour aider les commerces de quartier à vendre en ligne, diras-tu peut-être. Pourquoi eux ? Parce que les rues vivantes relient les gens. Pourquoi relier les gens ? Là, tu touches quelque chose qui ne se met pas dans un tableau de bord. Garde cette réponse trois respirations avant de rouvrir l'ordinateur. Les objectifs font courir ; le sens fait tenir — et ce qui fait tenir mérite une visite régulière.", es: "Haz el ejercicio de los tres por qué esta noche: ¿por qué este lanzamiento? Para ayudar a los comercios de barrio a vender en línea, dirás quizá. ¿Por qué ellos? Porque las calles vivas conectan a la gente. ¿Por qué conectar a la gente? Ahí tocas algo que no cabe en un cuadro de mando. Guarda esa respuesta tres respiraciones antes de reabrir el ordenador. Los objetivos hacen correr; el sentido hace sostener, y lo que sostiene merece una visita regular." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo fijar objetivos trimestrales realistas", "Buscar el sentido detrás de los objetivos de la empresa", "La historia del runway en las startups"],
        answer: 1,
        why: "El título busca lo que hay detrás del objetivo: apunta a la pregunta por el sentido, no a la fijación de metas ni al argot financiero.",
      },
      sequence: {
        instr: "Ordena el ejercicio de los tres por qué:",
        events: ["Tu poses la première question : pourquoi ce lancement ?", "Tu poses la deuxième : pourquoi ces commerces ?", "Tu poses la troisième : pourquoi relier les gens ?", "Tu restes trois respirations avec la réponse qui ne se mesure pas", "Tu rouvres l'ordinateur, porté par le sens plutôt que par l'urgence"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Ce soir, avant de fermer l'ordinateur, une question discrète : à quoi sert tout cela, au fond ? Pas la réponse du pitch, pas celle du tableau de bord — l'autre. Prends trois respirations et laisse-la monter. Si elle te fait un peu peur, c'est bon signe : le sens dérange d'abord, puis il porte. Les objectifs feront courir demain ; lui, il fera tenir.",
        questions: [
          { q: "Quand fais-tu l'exercice ?", kind: "literal", options: ["Ce soir, avant de fermer l'ordinateur", "Pendant le pitch de demain", "Au milieu de la weekly"], answer: 0, why: "«Ce soir, avant de fermer l'ordinateur»: literal al inicio." },
          { q: "Combien de respirations avant de laisser monter la réponse ?", kind: "literal", options: ["Trois", "Trois cents", "Aucune"], answer: 0, why: "«Prends trois respirations et laisse-la monter»." },
          { q: "Pourquoi le sens «dérange d'abord» ?", kind: "inferencial", options: ["Parce qu'il questionne l'urgence habituelle", "Parce qu'il est interdit en entreprise", "Parce qu'il coûte trop cher"], answer: 0, why: "Se infiere: la pregunta por el sentido incomoda la rutina de urgencias en que se vive." },
          { q: "La différence entre courir et tenir est…", kind: "inferencial", options: ["l'urgence pousse, le sens soutient", "le sport et le repos", "le pitch et le déjeuner d'équipe"], answer: 0, why: "El audio opone objetivos (empujan) y sentido (sostiene)." },
        ],
      },
    },
  ],

  "fr-cu-b2-12": [
    {
      id: "md-fr-b2-12-1", theme: "relax mentale",
      title: "Le trac du prétoire", titleEs: "El trac del tribunal", minutes: 2,
      paragraphs: [
        { it: "Dix minutes de plaidoirie, trois juges, un dossier : le trac s'installe dès la salle d'attente. Le cœur tape au sternum, les mains refroidissent, et le discours appris se déroule à toute vitesse dans une tête qui veut déjà fuir. Le trac n'est pas un défaut de caractère : c'est un corps qui se prépare à quelque chose d'important — trop, certes, mais honnêtement.", es: "Diez minutos de alegato, tres jueces, un expediente: el trac se instala desde la sala de espera. El corazón golpea el esternón, las manos se enfrían y el discurso aprendido se desenrolla a toda velocidad en una cabeza que ya quiere huir. El trac no es un defecto de carácter: es un cuerpo preparándose para algo importante, demasiado, cierto, pero con honestidad." },
        { it: "La détente mentale du plaideur tient en un échange d'images : au lieu de « je vais échouer », essaie « je suis attendu ». Le public est venu écouter, pas juger ta personne ; les juges veulent une bonne plaidoirie, y compris la tienne. Puis trois longues expirations, en comptant, avant d'entrer. Le trac ne disparaîtra pas — tant mieux, il prête son énergie — mais il accepte de marcher derrière toi, au lieu de devant.", es: "La relajación mental del abogado cabe en un cambio de imágenes: en lugar de «voy a fracasar», prueba «me están esperando». El público ha venido a escuchar, no a juzgarte como persona; los jueces quieren un buen alegato, también el tuyo. Después, tres espiraciones largas, contando, antes de entrar. El trac no desaparecerá —mejor así, presta su energía—, pero acepta caminar detrás de ti, en vez de delante." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo memorizar un alegato de diez minutos", "Domar el trac antes de la plaidoirie", "Las reglas de los concursos de elocuencia"],
        answer: 1,
        why: "El título pone el trac en la sala del tribunal: apunta a gestionar el miedo escénico, no a memorizar ni al reglamento.",
      },
      quiz: [
        { q: "Où le trac s'installe-t-il d'abord ?", kind: "literal", options: ["Dès la salle d'attente", "Après la plaidoirie", "Un mois avant le concours"], answer: 0, why: "«Le trac s'installe dès la salle d'attente»: literal en el texto." },
        { q: "Pourquoi le trac est-il «un corps qui se prépare» ?", kind: "inferencial", options: ["Parce qu'il mobilise l'énergie pour un moment important", "Parce qu'il annonce une maladie", "Parce qu'il veut te faire renoncer"], answer: 0, why: "El texto lo reencuadra: un cuerpo que se prepara «demasiado, pero con honestidad»." },
        { q: "«Il accepte de marcher derrière toi» propose…", kind: "critica", options: ["de garder l'énergie du trac sans lui céder la direction", "de supprimer le trac par la volonté", "de fuir la salle avant de parler"], answer: 0, why: "Idea crítica: el trac se domestica como energía útil, no se elimina." },
      ],
      vf: [
        { text: "Le cœur tape au sternum dès la salle d'attente.", value: true, why: "«Le cœur tape au sternum»: literal en el primer párrafo." },
        { text: "Les juges veulent une bonne plaidoirie, y compris la tienne.", value: true, why: "«Les juges veulent une bonne plaidoirie, y compris la tienne»." },
        { text: "Le trac disparaît complètement après trois expirations, selon le texte.", value: false, why: "No desaparece: «il accepte de marcher derrière toi», presta su energía." },
      ],
    },
    {
      id: "md-fr-b2-12-2", theme: "relax fisico",
      title: "La voix vient des pieds", titleEs: "La voz viene de los pies", minutes: 2,
      paragraphs: [
        { it: "Une voix qui plaide dix minutes a besoin de fondations, et les premières sont les pieds. Tant que le poids s'accumule dans la gorge et les épaules, la voix grince, monte d'un ton, se casse au moment décisif. Les chanteurs le savent depuis toujours : le son pousse depuis le sol, monte par les jambes, s'appuie sur le souffle du ventre. Le prétoire, lui, est une salle de concert où personne n'applaudit avant la fin.", es: "Una voz que alega diez minutos necesita cimientos, y los primeros son los pies. Mientras el peso se acumula en la garganta y los hombros, la voz chirría, sube un tono, se quiebra en el momento decisivo. Los cantantes lo saben desde siempre: el sonido empuja desde el suelo, sube por las piernas, se apoya en el aliento del vientre. La sala del tribunal, por su parte, es una sala de conciertos donde nadie aplaude antes del final." },
        { it: "Échauffe le corps avant d'entrer : pieds écartés, poids réparti, genoux libres ; trois soupirs sonores pour ouvrir la cage thoracique ; un bâillement discret pour détendre la mâchoire. Puis, debout face au dossier, répète la première phrase en laissant le son sortir du ventre, pas de la gorge. La veille du concours, marche cinq minutes en chantonnant : la voix qui a roulé dans le corps arrive au prétoire déjà chaude.", es: "Calienta el cuerpo antes de entrar: pies separados, peso repartido, rodillas libres; tres suspiros sonoros para abrir la caja torácica; un bostezo discreto para soltar la mandíbula. Luego, de pie ante el expediente, repite la primera frase dejando que el sonido salga del vientre, no de la garganta. La víspera del concurso, camina cinco minutos tarareando: la voz que ha rodado por el cuerpo llega al tribunal ya caliente." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Ejercicios de canto para conciertos", "Preparar físicamente la voz y el cuerpo para la plaidoirie", "Cómo escribir un alegato perfecto"],
        answer: 1,
        why: "El título hace venir la voz de los pies: apunta a la preparación corporal del que habla, no al canto ni a la redacción.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "La voix plaide mieux quand elle s'appuie sur les pieds, le souffle et un corps échauffé",
          "La plaidoirie se gagne uniquement par la qualité du texte écrit",
          "Il faut crier pour convaincre un tribunal",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Le son pousse depuis le sol et s'appuie sur le souffle du ventre", "Trois soupirs sonores ouvrent la cage thoracique", "La voix qui a roulé dans le corps arrive déjà chaude"],
        distractors: ["Le prétoire applaudit à chaque phrase", "Les genoux doivent être verrouillés pour bien parler", "Le bâillement est interdit avant de plaider"],
      },
      intruder: {
        instr: "Una de estas frases no pertenece a la lógica del texto. ¿Cuál es el intruso?",
        sentences: [
          "Le son pousse depuis le sol et monte par les jambes.",
          "Trois soupirs sonores ouvrent la cage thoracique.",
          "Un bâillement discret détend la mâchoire.",
          "Le tribunal rendra son verdict à dix-sept heures précises.",
          "La voix qui a roulé dans le corps arrive déjà chaude.",
        ],
        intruder: 3,
        why: "La hora exacta del veredicto es un dato del concurso ajeno a la preparación corporal de la voz: es el intruso.",
      },
    },
    {
      id: "md-fr-b2-12-3", theme: "meditazione",
      title: "Le silence après la plaidoirie", titleEs: "El silencio tras el alegato", minutes: 3,
      paragraphs: [
        { it: "La plaidoirie est finie ; l'esprit, lui, plaide encore. Dans le couloir, il rejoue la phrase ratée du deuxième argument, corrige la péroraison, anticipe le verdict. Cette reprise mentale coûte la fatigue de l'épreuve, sans en avoir l'honneur : tu quittes le prétoire en emportant un second procès, cette fois contre toi.", es: "El alegato ha terminado; la mente, en cambio, sigue alegando. En el pasillo, reprende la frase fallida del segundo argumento, corrige la peroración, anticipa el veredicto. Esa repetición mental cuesta la fatiga de la prueba sin tener su honor: sales del tribunal cargando un segundo proceso, esta vez contra ti." },
        { it: "La méditation du plaideur commence par un dépôt : pose le dossier, littéralement, sur une table ou un banc, et dis-toi « c'est déposé ». Puis cinq minutes de silence assis, à ne rien plaider : le souffle entre, le souffle sort, le plaidoyer se dissout. Le concours a eu lieu, entier, avec ses réussites et ses angles morts ; il est maintenant une mémoire, pas une dette. Ce qui te reste d'une plaidoirie ne se joue pas dans le couloir : ça se joue dans ce qui suit.", es: "La meditación del abogado empieza con un depósito: pon el expediente, literalmente, sobre una mesa o un banco y di «queda depositado». Después, cinco minutos de silencio sentado, sin alegar nada: el aliento entra, el aliento sale, el alegato se disuelve. El concurso tuvo lugar, entero, con sus aciertos y sus ángulos muertos; ahora es un recuerdo, no una deuda. Lo que te queda de un alegato no se juega en el pasillo: se juega en lo que viene." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo apelar un veredicto desfavorable", "Soltar el alegato terminado y descansar en el silencio", "Los mejores discursos de cierre de la historia"],
        answer: 1,
        why: "El título sitúa el silencio después del alegato: apunta a soltar lo actuado, no a apelar ni a la historia oratoria.",
      },
      sequence: {
        instr: "Ordena la meditación del plaideur tras el alegato:",
        events: ["La plaidoirie se termine", "Dans le couloir, ton esprit rejoue la phrase ratée", "Tu poses le dossier sur une table : « c'est déposé »", "Tu t'assieds cinq minutes en silence, à ne rien plaider", "Le plaidoyer devient une mémoire, pas une dette"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "C'est fini. Tu as plaidé, le tribunal délibère, et toi, tu es dans le couloir. Pose le dossier sur un banc, un instant. Le procès intérieur, celui qui recommence chaque phrase, n'a pas lieu d'être. Respire : l'épreuve a eu lieu, entière, et elle t'appartient désormais comme un souvenir, plus comme une dette. Marche doucement. Le verdict viendra ; il n'a pas besoin de ta rumination pour arriver.",
        questions: [
          { q: "Où poses-tu le dossier ?", kind: "literal", options: ["Sur un banc", "Sur la table du tribunal", "Dans une poubelle"], answer: 0, why: "«Pose le dossier sur un banc, un instant»." },
          { q: "Que fait le tribunal pendant ce temps ?", kind: "literal", options: ["Il délibère", "Il dort", "Il interroge d'autres témoins"], answer: 0, why: "«Le tribunal délibère»: literal en el audio." },
          { q: "Le «procès intérieur» désigne…", kind: "inferencial", options: ["la rumination qui rejoue chaque phrase", "une nouvelle audience officielle", "le jugement des autres candidats"], answer: 0, why: "Se infiere: es el proceso mental que repite cada frase, no una audiencia real." },
          { q: "Pourquoi le verdict n'a-t-il pas besoin de ta rumination ?", kind: "inferencial", options: ["Parce qu'il suivra son rythme, indépendamment de tes boucles mentales", "Parce qu'il est déjà rendu", "Parce que ruminer est interdit par le règlement"], answer: 0, why: "El audio lo razona: el veredicto llegará igual; la rumiación solo gasta." },
        ],
      },
    },
  ],
};
