import type { MindReading } from "../../cambridge-mind";

/* ═══ FR B1 · Mind readings (temáticas de conciencia) — 3 por unidad ══
   Metodología v9.13: 7 estrategias de comprensión lectora y de escucha,
   en francés de Francia nivel B1 con traducción española a la vista.
   Campos `.it` = francés (lengua de estudio), `.es` = español. Estrategia
   por posición: L1 = predict + quiz (lit/inf/crít) + V/F ; L2 = predict +
   ideas + intruso ; L3 = predict + secuencia + escucha. Temas rotados:
   meditazione · spiritualità · qui e ora · relax fisico · relax mentale. */

export const FR_MIND_B1: Record<string, MindReading[]> = {
  "fr-cu-b1-01": [
    {
      id: "md-fr-b1-01-1", theme: "meditazione",
      title: "Trois respirations avant de prendre la parole", titleEs: "Tres respiraciones antes de tomar la palabra", minutes: 2,
      paragraphs: [
        { it: "Le débat commence dans dix minutes et ton cœur bat déjà vite. Assieds-toi un instant, le dos droit, les mains posées sur la table. Prends trois respirations lentes : inspire par le nez, souffle par la bouche. À chaque souffle, le corps se calme un peu, comme une vague qui descend sur la plage.", es: "El debate empieza en diez minutos y tu corazón ya late rápido. Siéntate un momento, la espalda recta, las manos posadas en la mesa. Toma tres respiraciones lentas: inspira por la nariz, sopla por la boca. Con cada soplo el cuerpo se calma un poco, como una ola que baja por la playa." },
        { it: "La méditation ne supprime pas le trac : elle l'accompagne. Tu sens la tension, tu la regardes, tu reviens à ta respiration. Quand tu prendras la parole, parle sur le souffle, doucement. Tes idées seront plus claires, ta voix plus stable. Trois respirations suffisent : c'est ton secret, personne ne le verra.", es: "La meditación no elimina el nervio escénico: lo acompaña. Sientes la tensión, la miras, vuelves a tu respiración. Cuando tomes la palabra, habla sobre el soplo, suavemente. Tus ideas serán más claras, tu voz más estable. Tres respiraciones bastan: es tu secreto y nadie lo verá." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso de teatro para hablar en público", "Respirar tres veces antes de hablar para calmar el cuerpo", "Las reglas de un debate francés"],
        answer: 1,
        why: "El título une la respiración y el momento de tomar la palabra: apunta a calmarse antes de hablar.",
      },
      quiz: [
        { q: "Que fais-tu avec tes mains ?", kind: "literal", options: ["Tu les poses sur la table", "Tu les serres très fort", "Tu les lèves au ciel"], answer: 0, why: "«Les mains posées sur la table»: está literal en la primera frase." },
        { q: "Pourquoi parler « sur le souffle » ?", kind: "inferencial", options: ["Pour respirer en parlant et rester stable", "Pour crier plus fort", "Pour finir plus vite"], answer: 0, why: "«Ta voix plus stable»: se infiere que hablar sobre el soplo da una voz firme." },
        { q: "Quelle est l'idée principale du texte ?", kind: "critica", options: ["Il faut éliminer tout le trac avant de parler", "Trois respirations accompagnent le trac et clarifient la parole", "Les débats sont dangereux pour le cœur"], answer: 1, why: "El texto dice que la meditación no suprime el trac: lo acompaña y ordena la palabra." },
      ],
      vf: [
        { text: "Tu prends trois respirations rapides.", value: false, why: "«Trois respirations lentes»: lentas, no rápidas." },
        { text: "La méditation ne supprime pas le trac.", value: true, why: "«Elle l'accompagne»: acompaña el nervio sin borrarlo." },
        { text: "Tout le monde verra ton secret.", value: false, why: "«Personne ne le verra»: las tres respiraciones son invisibles." },
      ],
    },
    {
      id: "md-fr-b1-01-2", theme: "qui e ora",
      title: "Le bruit du canal", titleEs: "El ruido del canal", minutes: 2,
      paragraphs: [
        { it: "Tu attends un ami sur la terrasse d'un café, au bord du canal Saint-Martin. Le téléphone te tend son écran, mais tu le laisses dans ta poche. Autour de toi, l'eau descend lentement vers l'écluse, une péniche passe, les voix se mélangent au bruit de la ville. Tu écoutes, tout simplement.", es: "Esperas a un amigo en la terraza de un café, a la orilla del canal Saint-Martin. El teléfono te ofrece su pantalla, pero lo dejas en el bolsillo. A tu alrededor, el agua baja despacio hacia la esclusa, pasa una péniche, las voces se mezclan con el ruido de la ciudad. Escuchas, sencillamente." },
        { it: "C'est cela, l'ici et maintenant : une terrasse, un verre d'eau, un bout de ciel entre les toits. Hier est déjà loin, demain n'est pas encore là. Quand ton ami arrivera, tu seras déjà présent, disponible, les yeux ouverts. Le canal, lui, continue son chemin, et tu le regardes comme si c'était la première fois.", es: "Eso es el aquí y ahora: una terraza, un vaso de agua, un trozo de cielo entre los tejados. Ayer ya está lejos, mañana todavía no llega. Cuando llegue tu amigo, ya estarás presente, disponible, con los ojos abiertos. El canal sigue su camino y tú lo miras como si fuera la primera vez." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de los bares del canal Saint-Martin", "Estar presente en la terraza de un café junto al canal", "La historia de las péniches parisinas"],
        answer: 1,
        why: "El título apunta a la escucha del entorno, no a una guía ni a un texto histórico.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Esperar a un amigo con el teléfono en la mano",
          "La práctica del aquí y ahora en la terraza de un café junto al canal",
          "Los barcos de París y su historia comercial",
        ],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Tu laisses le téléphone dans ta poche", "L'eau descend lentement vers l'écluse", "Tu regardes le canal comme si c'était la première fois"],
        distractors: ["Tu commandes trois cafés", "L'écluse est fermée le dimanche", "Tu écris un message à ton ami"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Tu laisses le téléphone dans ta poche.",
          "L'eau descend lentement vers l'écluse.",
          "Une péniche passe sur le canal.",
          "Le canal Saint-Martin a été construit sous Napoléon.",
          "Tu regardes le ciel entre les toits.",
        ],
        intruder: 3,
        why: "El dato histórico del canal es información de guía, ajena a la experiencia sensorial del momento.",
      },
    },
    {
      id: "md-fr-b1-01-3", theme: "relax fisico",
      title: "Détendre la mâchoire", titleEs: "Relajar la mandíbula", minutes: 2,
      paragraphs: [
        { it: "Quand tu parles beaucoup, ta mâchoire se serre sans que tu le remarques. Les dents se touchent, les muscles des joues travaillent, et le soir, tout le visage est fatigué. Fais le test maintenant : où est ta langue ? Si elle est collée au palais, ta mâchoire est probablement tendue.", es: "Cuando hablas mucho, tu mandíbula se aprieta sin que te des cuenta. Los dientes se tocan, los músculos de las mejillas trabajan y por la noche toda la cara está cansada. Haz la prueba ahora: ¿dónde está tu lengua? Si está pegada al paladar, tu mandíbula está probablemente tensa." },
        { it: "Pour la détendre, pose la langue en bas, derrière les dents du bas. Laisse un petit espace entre les deux rangées de dents. Respire par le nez. Sens le poids de ta tête, le relâchement des joues, le calme qui descend dans le cou. Ta mâchoire te dira merci, surtout après un long débat entre amis.", es: "Para relajarla, apoya la lengua abajo, detrás de los dientes de abajo. Deja un pequeño espacio entre las dos hileras de dientes. Respira por la nariz. Siente el peso de tu cabeza, la distensión de las mejillas, la calma que baja por el cuello. Tu mandíbula te dará las gracias, sobre todo después de un largo debate entre amigos." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un ejercicio de gimnasia para la cara", "Relajar la mandíbula tensa después de hablar mucho", "Un consejo de dentista sobre las caries"],
        answer: 1,
        why: "El título anuncia la mandíbula y el texto parte del habla: apunta a soltar la tensión, no a un ejercicio físico intenso ni a la salud dental.",
      },
      sequence: {
        instr: "Ordena los pasos del ejercicio según el texto:",
        events: ["Tu remarques que ta mâchoire est tendue", "Tu poses la langue en bas, derrière les dents", "Tu laisses un espace entre les dents", "Tu respires par le nez", "Tu sens le calme descendre dans le cou"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Bonsoir. Ce soir, ton visage a beaucoup travaillé. Ferme doucement la bouche. Pose la langue derrière les dents du bas, comme dans un petit hamac. Lâche la mâchoire. Respire par le nez, trois fois. Sens tes joues s'endormir, tes sourcils se reposer. Ton visage entier se détend, prêt pour une bonne nuit.",
        questions: [
          { q: "Où poses-tu ta langue ?", kind: "literal", options: ["Derrière les dents du bas", "Sur le palais", "Sur les lèvres"], answer: 0, why: "«Derrière les dents du bas, comme dans un petit hamac»." },
          { q: "Combien de respirations fais-tu ?", kind: "literal", options: ["Trois", "Dix", "Aucune"], answer: 0, why: "«Respire par le nez, trois fois»." },
          { q: "Pourquoi es-tu prêt pour la nuit ?", kind: "inferencial", options: ["Parce que ton visage s'est détendu", "Parce que tu as couru", "Parce que tu as beaucoup mangé"], answer: 0, why: "El rostro relajado prepara el sueño, se infiere del cierre del audio." },
          { q: "Quand fais-tu cet exercice ?", kind: "inferencial", options: ["Le soir, après une journée de travail", "Le matin en courant", "Pendant un examen"], answer: 0, why: "«Bonsoir» y «prêt pour une bonne nuit» sitúan el ejercicio por la noche." },
        ],
      },
    },
  ],

  "fr-cu-b1-02": [
    {
      id: "md-fr-b1-02-1", theme: "spiritualità",
      title: "Merci à ceux qui nous apprennent", titleEs: "Gracias a quienes nos enseñan", minutes: 3,
      paragraphs: [
        { it: "Pendant ton premier stage, quelqu'un t'a montré où se trouvait la photocopieuse, comment répondre à un courriel professionnel, quand parler et quand écouter. Cette personne avait du travail, et elle a pris du temps pour toi. La gratitude commence exactement là : dans le souvenir de ces mains tendues.", es: "Durante tus primeras prácticas, alguien te enseñó dónde estaba la fotocopiadora, cómo responder a un correo profesional, cuándo hablar y cuándo escuchar. Esa persona tenía trabajo, y sacó tiempo para ti. La gratitud empieza exactamente ahí: en el recuerdo de esas manos tendidas." },
        { it: "Aujourd'hui, pense à une personne qui t'a appris quelque chose. Remercie-la intérieurement, ou mieux : écris-lui trois lignes. Dans beaucoup de traditions, la reconnaissance envers ceux qui transmettent est la première pratique spirituelle : on ne grandit jamais seul, on grandit en compagnie.", es: "Hoy, piensa en una persona que te haya enseñado algo. Agradécele por dentro, o mejor: escríbele tres líneas. En muchas tradiciones, el reconocimiento hacia quienes transmiten es la primera práctica espiritual: nunca se crece solo, se crece en compañía." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un manual de recursos humanos", "La gratitud hacia quienes nos enseñan como práctica espiritual", "La biografía de una tutora de Nantes"],
        answer: 1,
        why: "El título «Merci à ceux qui nous apprennent» apunta a la gratitud con los maestros, sin religión concreta.",
      },
      quiz: [
        { q: "Qui t'a montré où se trouvait la photocopieuse ?", kind: "literal", options: ["Quelqu'un pendant ton premier stage", "Un inconnu dans la rue", "Personne, tu l'as trouvée seul"], answer: 0, why: "«Pendant ton premier stage, quelqu'un t'a montré»." },
        { q: "Pourquoi la personne a-t-elle « pris du temps » pour toi ?", kind: "inferencial", options: ["Parce qu'elle avait du travail, mais elle t'a aidé quand même", "Parce qu'elle n'avait rien à faire", "Parce que tu l'as payée"], answer: 0, why: "«Cette personne avait du travail, et elle a pris du temps pour toi»: ayudó a pesar de su carga." },
        { q: "Quelle phrase résume le texte ?", kind: "critica", options: ["On grandit seul, dans le silence", "Remercier ceux qui transmettent est une pratique spirituelle", "Les stages sont une perte de temps"], answer: 1, why: "«On ne grandit jamais seul» y la gratitud como primera práctica resumen la idea central." },
      ],
      vf: [
        { text: "La gratitude commence dans le souvenir des mains tendues.", value: true, why: "«La gratitude commence exactement là»." },
        { text: "Tu dois toujours remercier à voix haute, devant tout le monde.", value: false, why: "El texto propone agradecer por dentro, o mejor escribir: no exige voz alta pública." },
        { text: "On grandit en compagnie.", value: true, why: "«On ne grandit jamais seul, on grandit en compagnie»." },
      ],
    },
    {
      id: "md-fr-b1-02-2", theme: "relax mentale",
      title: "L'esprit de débutant", titleEs: "La mente de principiante", minutes: 2,
      paragraphs: [
        { it: "Ton premier jour dans une nouvelle entreprise, tout est étrange : les noms, les logiciels, les habitudes autour de la machine à café. Ton esprit d'expert voudrait tout maîtriser tout de suite, et cette pression te fatigue. Mais il existe une autre manière de vivre ce début : comme un débutant, léger et curieux.", es: "Tu primer día en una empresa nueva, todo es extraño: los nombres, los programas, las costumbres alrededor de la máquina de café. Tu mente de experto quiere dominarlo todo de inmediato, y esa presión te cansa. Pero existe otra manera de vivir este comienzo: como un principiante, ligero y curioso." },
        { it: "L'esprit de débutant regarde chaque détail avec des yeux neufs. Ne pas savoir, c'est avoir le droit de poser des questions. L'esprit d'expert pèse lourd : il compare, il juge, il a peur de l'erreur. L'esprit de débutant sourit : pour lui, chaque erreur est une information. Pendant quelques semaines, tu as le droit d'être débutant : profites-en.", es: "La mente de principiante mira cada detalle con ojos nuevos. No saber es tener derecho a hacer preguntas. La mente de experto pesa mucho: compara, juzga, teme el error. La mente de principiante sonríe: para ella, cada error es una información. Durante unas semanas tienes derecho a ser principiante: aprovéchalo." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los errores graves de un becario", "La mente de principiante frente a la de experto al empezar algo nuevo", "Cómo dominar un software en tres días"],
        answer: 1,
        why: "El título «L'esprit de débutant» anuncia el contraste entre dos actitudes mentales ante lo desconocido.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Dominar todo rápido es la única solución posible",
          "Mirar lo nuevo con ojos de principiante aligera la mente",
          "Los expertos nunca cometen errores",
        ],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["L'esprit d'expert compare et juge", "L'esprit de débutant pose des questions", "Chaque erreur est une information"],
        distractors: ["Tu dois cacher tes erreurs à la tutrice", "La machine à café est en panne", "Tu quittes l'entreprise le vendredi"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "L'esprit d'expert compare, juge et a peur de l'erreur.",
          "L'esprit de débutant regarde chaque détail avec des yeux neufs.",
          "Ne pas savoir, c'est avoir le droit de poser des questions.",
          "Le logiciel de gestion de projet coûte trois cents euros par an.",
          "Chaque erreur est une information.",
        ],
        intruder: 3,
        why: "El precio del software es un dato técnico ajeno a la actitud mental que describe el texto.",
      },
    },
    {
      id: "md-fr-b1-02-3", theme: "meditazione",
      title: "Avant la réunion, une minute", titleEs: "Antes de la reunión, un minuto", minutes: 2,
      paragraphs: [
        { it: "La réunion commence dans une minute. Tes jambes veulent courir, ta tête répète déjà tes arguments. Arrête-toi au contraire : pose les deux mains à plat sur la table, ferme les yeux ou regarde le bois du bureau. Sens le contact, la texture, la température. Une minute de rien, juste avant beaucoup de bruit.", es: "La reunión empieza en un minuto. Tus piernas quieren correr, tu cabeza ya repite tus argumentos. Detente, al contrario: pon las dos manos planas sobre la mesa, cierra los ojos o mira la madera del escritorio. Siente el contacto, la textura, la temperatura. Un minuto de nada, justo antes de mucho ruido." },
        { it: "Cette minute appartient à la réunion elle-même : elle t'y installe. Quand les premiers mots voleront, tu seras déjà calme, comme une maison dont on a ouvert les fenêtres avant l'arrivée des invités. Les réunions qui commencent dans le calme ne durent pas plus longtemps que les autres ; elles sont simplement plus près de toi.", es: "Ese minuto pertenece a la reunión misma: te instala en ella. Cuando vuelen las primeras palabras, ya estarás tranquilo, como una casa a la que se le abren las ventanas antes de que lleguen los invitados. Las reuniones que empiezan con calma no duran más que las otras; sencillamente están más cerca de ti." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo hablar mucho en una reunión", "Un minuto de calma con las manos en la mesa antes de una reunión", "Los horarios de las reuniones francesas"],
        answer: 1,
        why: "El título anuncia una pausa mínima antes de la reunión: apunta a un gesto de meditación, no a técnicas de oratoria.",
      },
      sequence: {
        instr: "Ordena los momentos según el texto:",
        events: ["Tu t'arrêtes avant la réunion", "Tu poses les mains à plat sur la table", "Tu sens le contact et la température", "Tu restes calme quand les premiers mots volent", "La réunion commence près de toi"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "La réunion va commencer. Pose une main sur la table. Sens le bois, la fraîcheur, les petits détails. Respire une fois, longuement. Écoute la salle : une chaise, une porte, des voix. Tout est déjà là, en place. Quand on te donnera la parole, tu parleras après une respiration. Rien ne presse, vraiment rien.",
        questions: [
          { q: "Que poses-tu sur la table ?", kind: "literal", options: ["Une main", "Deux pieds", "Un ordinateur"], answer: 0, why: "«Pose une main sur la table»." },
          { q: "Que fais-tu de la salle ?", kind: "literal", options: ["Tu l'écoutes", "Tu la quittes", "Tu la nettoies"], answer: 0, why: "«Écoute la salle : une chaise, une porte, des voix»." },
          { q: "Quand parleras-tu ?", kind: "inferencial", options: ["Après une respiration", "Avant tout le monde", "Le plus fort possible"], answer: 0, why: "«Tu parleras après une respiration»: la pausa precede a la palabra." },
          { q: "Quelle est l'attitude de l'audio ?", kind: "inferencial", options: ["Rien ne presse : la calma avant tout", "Il faut parler vite", "Il faut tout contrôler"], answer: 0, why: "El cierre «Rien ne presse, vraiment rien» marca la actitud tranquila." },
        ],
      },
    },
  ],

  "fr-cu-b1-03": [
    {
      id: "md-fr-b1-03-1", theme: "qui e ora",
      title: "Le banc de la place", titleEs: "El banco de la plaza", minutes: 2,
      paragraphs: [
        { it: "Un banc, en fin d'après-midi, sur la place de ton quartier. Tu t'assieds sans téléphone, juste pour regarder. Une femme attend quelqu'un, un enfant compte les pigeons, l'ombre du platane avance lentement sur le sol. Le quartier respire, et toi avec lui.", es: "Un banco, al final de la tarde, en la plaza de tu barrio. Te sientas sin teléfono, solo para mirar. Una mujer espera a alguien, un niño cuenta las palomas, la sombra del plátano avanza despacio por el suelo. El barrio respira, y tú con él." },
        { it: "Rester assis sans rien faire est un art que la ville oublie. Pourtant la place t'offre tout un spectacle : les saluts des voisins, le va-et-vient du boulanger, la lumière qui devient dorée. Tu ne cherches rien, tu ne produis rien. Tu es, tout simplement, un habitant de ce moment-là.", es: "Quedarse sentado sin hacer nada es un arte que la ciudad olvida. Sin embargo, la plaza te ofrece todo un espectáculo: los saludos de los vecinos, el ir y venir del panadero, la luz que se vuelve dorada. No buscas nada, no produces nada. Simplemente eres un habitante de ese momento." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La historia de una plaza lyonesa", "Sentarse en un banco del barrio y observar el presente", "Una crítica del ruido urbano"],
        answer: 1,
        why: "El título «Le banc de la place» apunta a la pausa contemplativa, no a la historia ni a la crítica.",
      },
      quiz: [
        { q: "Que fait l'enfant ?", kind: "literal", options: ["Il compte les pigeons", "Il joue au football", "Il dort sur le banc"], answer: 0, why: "«Un enfant compte les pigeons»." },
        { q: "Pourquoi l'ombre avance-t-elle sur le sol ?", kind: "inferencial", options: ["Parce que le temps passe doucement", "Parce que le banc bouge tout seul", "Parce que l'enfant court autour"], answer: 0, why: "La sombra que avanza despacio insinúa el paso tranquilo de la tarde." },
        { q: "Quelle est l'idée du texte ?", kind: "critica", options: ["La ville n'a plus rien à offrir", "Regarder sans produire est une manière d'habiter le présent", "Les places publiques sont dangereuses"], answer: 1, why: "«Tu ne cherches rien, tu ne produis rien»: la idea central es habitar el momento sin producir." },
      ],
      vf: [
        { text: "Tu t'assieds avec ton téléphone.", value: false, why: "«Tu t'assieds sans téléphone»." },
        { text: "Le boulanger fait des allées et venues sur la place.", value: true, why: "«Le va-et-vient du boulanger»." },
        { text: "Tu produis beaucoup de choses sur ton banc.", value: false, why: "«Tu ne cherches rien, tu ne produis rien»." },
      ],
    },
    {
      id: "md-fr-b1-03-2", theme: "relax fisico",
      title: "Marcher comme un habitant", titleEs: "Caminar como un vecino", minutes: 2,
      paragraphs: [
        { it: "Marche dans ton quartier plus lentement que d'habitude, comme quelqu'un qui n'a pas de rendez-vous. Sens le talon, la plante, les orteils, à chaque pas. Salue le boulanger, laisse le vent de la rue te toucher le visage. Ton corps reconnaît le chemin : c'est le sien aussi.", es: "Camina por tu barrio más despacio que de costumbre, como alguien que no tiene cita. Siente el talón, la planta, los dedos, a cada paso. Saluda al panadero, deja que el viento de la calle te toque la cara. Tu cuerpo reconoce el camino: también es suyo." },
        { it: "Après quinze minutes, les épaules descendent, la respiration s'ouvre, les jambes se réchauffent. La marche lente est un massage que la ville t'offre gratuitement. Tu n'es plus un piéton pressé : tu es un habitant qui prend soin de son corps en prenant soin de ses rues.", es: "Después de quince minutos, los hombros bajan, la respiración se abre, las piernas se calientan. La caminata lenta es un masaje que la ciudad te ofrece gratis. Ya no eres un peatón apurado: eres un vecino que cuida su cuerpo cuidando sus calles." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una competición de marcha rápida", "Caminar despacio por el propio barrio para relajar el cuerpo", "Cómo llegar antes a todas partes"],
        answer: 1,
        why: "«Marcher comme un habitant» sugiere caminar despacio y con pertenencia, no competir ni optimizar.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Caminar rápido para quemar calorías",
          "Caminar despacio por el barrio relaja el cuerpo y lo une al lugar",
          "Los masajes urbanos de lujo son la mejor solución",
        ],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Tu sens le talon, la plante et les orteils", "Les épaules descendent après quinze minutes", "Tu salue le boulanger du quartier"],
        distractors: ["Tu prends le métro pour aller plus vite", "Le boulanger ferme le lundi", "Tu téléphones en marchant"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Tu sens le talon, la plante et les orteils.",
          "Les épaules descendent, la respiration s'ouvre.",
          "Tu salue le boulanger du quartier.",
          "Un abonnement au fitness coûte trente euros par mois.",
          "La marche lente est un massage gratuit de la ville.",
        ],
        intruder: 3,
        why: "El precio del gimnasio es un dato comercial ajeno al paseo consciente por el barrio.",
      },
    },
    {
      id: "md-fr-b1-03-3", theme: "spiritualità",
      title: "Rêver son quartier", titleEs: "Soñar el barrio", minutes: 3,
      paragraphs: [
        { it: "Dans les assemblées de quartier, on entend souvent des phrases comme : « Si on enlevait les voitures, les enfants joueraient au milieu de la place. » Ces rêves ne sont pas des bavardages : imaginer ensemble un lieu meilleur est une manière spirituelle de prendre soin de lui.", es: "En las asambleas de barrio se oyen a menudo frases como: «Si quitaran los coches, los niños jugarían en medio de la plaza». Esos sueños no son charla vacía: imaginar juntos un lugar mejor es una manera espiritual de cuidarlo." },
        { it: "Prendre soin ne commence pas par les travaux : il commence par l'attention. Qui regarde sa rue avec amour remarque le banc cassé, l'arbre assoiffé, la vieille dame isolée. Rêver son quartier, c'est refuser de le subir. Et quand plusieurs habitants rêvent ensemble, quelque chose de très concret commence : un monde en commun.", es: "Cuidar no empieza por las obras: empieza por la atención. Quien mira su calle con amor nota el banco roto, el árbol sediento, la anciana aislada. Soñar el barrio es negarse a soportarlo. Y cuando varios vecinos sueñan juntos, empieza algo muy concreto: un mundo en común." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un proyecto urbanístico del ayuntamiento", "Soñar el barrio juntos como forma espiritual de cuidarlo", "Cómo aparcar gratis en el centro"],
        answer: 1,
        why: "«Rêver son quartier» une sueño y cuidado del territorio: apunta a la espiritualidad cotidiana del barrio.",
      },
      sequence: {
        instr: "Ordena las etapas según el texto:",
        events: ["On imagine ensemble un quartier meilleur", "On regarde la rue avec attention", "On remarque le banc cassé et l'arbre assoiffé", "Plusieurs habitants rêvent ensemble", "Un monde en commun commence"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Ferme les yeux. Imagine ta rue préférée. Il n'y a plus de voitures : les enfants jouent, les voisins parlent, un arbre donne de l'ombre. Écoute cette rue imaginaire : des rires, un ballon qui rebondit, une guitare au loin. Voilà comment naissent les idées de quartier : d'abord dans la tête de ceux qui les aiment.",
        questions: [
          { q: "Que font les enfants dans la rue imaginaire ?", kind: "literal", options: ["Ils jouent", "Ils klaxonnent", "Ils dorment"], answer: 0, why: "«Les enfants jouent»." },
          { q: "Qu'entends-tu au loin ?", kind: "literal", options: ["Une guitare", "Une sirène", "Un marteau-piqueur"], answer: 0, why: "«Une guitare au loin»." },
          { q: "Où naissent les idées de quartier ?", kind: "inferencial", options: ["Dans la tête de ceux qui les aiment", "Dans les bureaux de la mairie", "Dans les journaux locaux"], answer: 0, why: "«D'abord dans la tête de ceux qui les aiment»: se infiere del cierre." },
          { q: "Pourquoi fermer les yeux ?", kind: "inferencial", options: ["Pour mieux imaginer la rue", "Pour dormir un moment", "Pour éviter la lumière du soleil"], answer: 0, why: "Cerrar los ojos alimenta la imaginación del barrio soñado." },
        ],
      },
    },
  ],

  "fr-cu-b1-04": [
    {
      id: "md-fr-b1-04-1", theme: "relax mentale",
      title: "Une promesse douce à soi-même", titleEs: "Una promesa dulce consigo mismo", minutes: 2,
      paragraphs: [
        { it: "En période d'élections, tout le monde promet : des machines, des fêtes, des budgets. Et toi, que te promets-tu ? Choisis une seule promesse, petite et douce : dix minutes de marche par jour, un café sans téléphone, un appel à ta grand-mère le dimanche.", es: "En época de elecciones, todo el mundo promete: máquinas, fiestas, presupuestos. ¿Y tú, qué te prometes? Elige una sola promesa, pequeña y dulce: diez minutos de caminata al día, un café sin teléfono, una llamada a tu abuela el domingo." },
        { it: "Une promesse douce ne se crie pas dans les meetings : elle se garde tranquillement. Note-la ce soir, sans témoins. Si tu la rates un jour, recommence le lendemain sans te juger. La confiance en soi ne vient pas des grandes déclarations : elle vient des petites promesses tenues, encore et encore.", es: "Una promesa dulce no se grita en los mítines: se guarda tranquilamente. Anótala esta noche, sin testigos. Si un día fallas, vuelve a empezar al día siguiente sin juzgarte. La confianza en uno mismo no viene de las grandes declaraciones: viene de las promesas pequeñas cumplidas, una y otra vez." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un discurso de campaña electoral", "Hacerse una promesa pequeña y cumplirla suavemente", "Cómo ganar unas elecciones estudiantiles"],
        answer: 1,
        why: "El título contrapone la promesa electoral y la promesa a uno mismo: apunta al cuidado personal.",
      },
      quiz: [
        { q: "Combien de promesses dois-tu choisir ?", kind: "literal", options: ["Une seule", "Trois", "Autant que possible"], answer: 0, why: "«Choisis une seule promesse»." },
        { q: "Que faire si tu rates un jour ?", kind: "inferencial", options: ["Recommencer le lendemain sans se juger", "Abandonner la promesse", "Se punir sévèrement"], answer: 0, why: "«Recommence le lendemain sans te juger»: la autocompasión sostiene el hábito." },
        { q: "D'où vient la confiance en soi ?", kind: "critica", options: ["Des grandes déclarations publiques", "Des petites promesses tenues régulièrement", "Des élections gagnées"], answer: 1, why: "La idea central: la confianza nace de las promesas pequeñas cumplidas." },
      ],
      vf: [
        { text: "La promesse doit être grande et spectaculaire.", value: false, why: "«Petite et douce»: lo contrario de grande y espectacular." },
        { text: "Tu notes la promesse ce soir, sans témoins.", value: true, why: "«Note-la ce soir, sans témoins»." },
        { text: "Tenir ses petites promesses construit la confiance.", value: true, why: "«Elle vient des petites promesses tenues, encore et encore»." },
      ],
    },
    {
      id: "md-fr-b1-04-2", theme: "meditazione",
      title: "Décider en respirant", titleEs: "Decidir respirando", minutes: 2,
      paragraphs: [
        { it: "Demain, tu vas voter pour la première fois de ta vie. Ce soir, au lieu de relire pour la dixième fois les programmes, assieds-toi et respire. Trois respirations lentes, les mains sur les genoux. Le choix ne se prépare pas seulement dans les tracts : il se prépare aussi dans le calme.", es: "Mañana votas por primera vez en tu vida. Esta noche, en vez de releer por décima vez los programas, siéntate y respira. Tres respiraciones lentas, las manos sobre las rodillas. La elección no se prepara solo en los octavillos: también se prepara en la calma." },
        { it: "Une décision prise dans l'agitation ressemble à un café bu trop vite : on ne sait plus ce qu'on a bu. Respire, puis demande-toi simplement : « Qu'est-ce qui compte pour moi ? » La réponse ne viendra peut-être pas cette nuit. Mais elle viendra claire, comme une fenêtre qu'on nettoie.", es: "Una decisión tomada en la agitación se parece a un café bebido demasiado rápido: ya no se sabe qué se ha bebido. Respira y pregúntate simplemente: «¿Qué es lo que importa para mí?». Quizá la respuesta no llegue esta noche. Pero llegará clara, como una ventana que se limpia." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Los programas electorales comparados", "Respirar antes de decidir el voto para elegir con calma", "Cómo preparar un café lentamente"],
        answer: 1,
        why: "«Décider en respirando» une la decisión (el voto) con la respiración: meditación antes de elegir.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Votar rápido y sin pensar es más práctico",
          "El voto se decide mejor con calma y respiración que con agitación",
          "Los tracts electorales no sirven de nada",
        ],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Trois respirations lentes, les mains sur les genoux", "Le choix se prépare aussi dans le calme", "La réponse viendra claire, comme une fenêtre nettoyée"],
        distractors: ["Tu bois trois cafés avant de voter", "Le bureau de vote ferme à midi", "Tu relis les programmes onze fois"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Tu t'assieds et tu respires trois fois.",
          "Le choix se prépare aussi dans le calme.",
          "Une décision prise dans l'agitation ressemble à un café bu trop vite.",
          "Le bureau de vote ouvre à 8 heures précises.",
          "Tu te demandes ce qui compte pour toi.",
        ],
        intruder: 3,
        why: "El horario del colegio electoral es un dato práctico ajeno a la meditación de la decisión.",
      },
    },
    {
      id: "md-fr-b1-04-3", theme: "qui e ora",
      title: "Attendre les résultats", titleEs: "Esperar los resultados", minutes: 2,
      paragraphs: [
        { it: "Vendredi soir, 19 h 55 : les résultats tombent dans cinq minutes. Autour de toi, certains marchent de long en large, d'autres rafraîchissent leur écran sans arrêt. Toi, tu peux choisir une autre manière d'attendre : poser le téléphone, sentir ta chaise, écouter la pièce.", es: "Viernes por la noche, 19 h 55: los resultados caen en cinco minutos. A tu alrededor, unos caminan de un lado a otro, otros refrescan su pantalla sin parar. Tú puedes elegir otra manera de esperar: dejar el teléfono, sentir tu silla, escuchar la sala." },
        { it: "L'attente fait partie de la vie, comme la pluie fait partie du ciel. Ce que tu attends finira par arriver, mais ces cinq minutes, elles, ne reviendront pas. Les habiter pleinement, c'est déjà gagner du temps sur l'impatience. Le résultat, lui, se moque complètement de ton angoisse : il viendra pareil.", es: "La espera forma parte de la vida, como la lluvia forma parte del cielo. Lo que esperas terminará por llegar, pero estos cinco minutos no volverán. Habitarlos plenamente ya es ganarle tiempo a la impaciencia. El resultado, en cambio, se ríe de tu angustia: llegará igual." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo manipular los resultados de una votación", "Esperar los resultados con calma, habitando el momento", "Una guía para contar votos rápidamente"],
        answer: 1,
        why: "«Attendre les résultats» apunta a la espera como práctica, no a los resultados en sí.",
      },
      sequence: {
        instr: "Ordena la escena según el texto:",
        events: ["Les résultats tombent dans cinq minutes", "Tu poses le téléphone", "Tu sens ta chaise et écoutes la pièce", "Tu habites pleinement l'attente", "Le résultat arrive pareil"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Cinq minutes avant le résultat. Le téléphone peut attendre, lui aussi. Sens tes pieds sur le sol, ton dos contre la chaise. Respire. Autour de toi, la salle respire : des voix, un rire nerveux, une porte qui claque. Tout ce bruit fait partie de la soirée. Le résultat viendra à son heure. Toi, sois déjà là, calmement.",
        questions: [
          { q: "Où sont tes pieds ?", kind: "literal", options: ["Sur le sol", "Sur la table", "Dans l'eau"], answer: 0, why: "«Sens tes pieds sur le sol»." },
          { q: "Que fait la salle autour de toi ?", kind: "literal", options: ["Elle respire : des voix, un rire, une porte", "Elle dort complètement", "Elle est vide"], answer: 0, why: "«La salle respire : des voix, un rire nerveux, une porte»." },
          { q: "Quand le résultat viendra-t-il ?", kind: "inferencial", options: ["À son heure, sans se presser", "Tout de suite", "Jamais"], answer: 0, why: "«Le résultat viendra à son heure»: la calma no lo adelanta." },
          { q: "Que signifie « sois déjà là » ?", kind: "inferencial", options: ["Être présent maintenant, pas dans l'attente", "Arriver avant tout le monde", "Dormir dans la salle"], answer: 0, why: "La invitación final pide presencia inmediata, no anticipación." },
        ],
      },
    },
  ],

  "fr-cu-b1-05": [
    {
      id: "md-fr-b1-05-1", theme: "relax fisico",
      title: "Le corps dans l'eau", titleEs: "El cuerpo en el agua", minutes: 2,
      paragraphs: [
        { it: "Dans le bassin, ton corps découvre un monde plus léger. L'eau porte tes jambes, tes bras, ta tête. Au début, tu veux lutter contre elle ; puis tu apprends à la laisser faire. Tu flottes, tu glisses, tu souffles dans les petites bulles. Le chlore sent l'enfance, et les carreaux bleus dansent sous la lumière.", es: "En la piscina, tu cuerpo descubre un mundo más ligero. El agua sostiene tus piernas, tus brazos, tu cabeza. Al principio quieres luchar contra ella; luego aprendes a dejarla hacer. Flotas, te deslizas, soplas en las burbujitas. El cloro huele a infancia y los azulejos azules bailan bajo la luz." },
        { it: "Nage sans objectif : ni chronomètre, ni record. Suis juste ta respiration, un bras après l'autre. À chaque longueur, le corps se relâche un peu plus, comme un nœud qui se défait. En sortant de l'eau, tu seras mouillé, fatigué doucement, et étonnamment calme. La piscine est une salle de méditation avec des vagues.", es: "Nada sin objetivo: ni cronómetro, ni récord. Sigue solo tu respiración, un brazo tras otro. A cada largo, el cuerpo se suelta un poco más, como un nudo que se deshace. Al salir del agua estarás mojado, cansado suavemente y sorprendentemente tranquilo. La piscina es una sala de meditación con olas." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso de natación competitiva", "El cuerpo en el agua como experiencia de relajación", "Las reglas de la piscina municipal"],
        answer: 1,
        why: "El título apunta a la sensación del cuerpo en el agua, no a la competición ni al reglamento.",
      },
      quiz: [
        { q: "Que fais-tu avec les petites bulles ?", kind: "literal", options: ["Tu souffles dedans", "Tu les manges", "Tu les regardes à la télévision"], answer: 0, why: "«Tu souffles dans les petites bulles»." },
        { q: "Pourquoi le corps se relâche-t-il à chaque longueur ?", kind: "inferencial", options: ["Parce que tu suis juste ta respiration, sans forcer", "Parce que tu nages très vite", "Parce que l'eau est glacée"], answer: 0, why: "«Ni chronomètre, ni record» + seguir la respiración: nadar sin esfuerzo relaja." },
        { q: "Quelle image résume le texte ?", kind: "critica", options: ["La piscine est une salle de méditation avec des vagues", "La natation est une guerre contre l'eau", "Le chlore est un poison pour les nageurs"], answer: 0, why: "La imagen final resume la idea: nadar como meditación sensorial." },
      ],
      vf: [
        { text: "Tu nages avec un chronomètre.", value: false, why: "«Ni chronomètre, ni record»: se nada sin medir." },
        { text: "L'eau porte ton corps.", value: true, why: "«L'eau porte tes jambes, tes bras, ta tête»." },
        { text: "En sortant de l'eau, tu seras étonnamment calme.", value: true, why: "«Étonnamment calme»: la calma sorprende al salir." },
      ],
    },
    {
      id: "md-fr-b1-05-2", theme: "spiritualità",
      title: "L'eau qui porte", titleEs: "El agua que sostiene", minutes: 3,
      paragraphs: [
        { it: "Flotter demande une chose étrange : faire confiance. Si tu te tends, tu coules ; si tu te relâches, l'eau te porte. C'est une leçon très ancienne, que toutes les traditions de sagesse redisent à leur manière : lâcher prise n'est pas perdre, c'est accepter d'être soutenu.", es: "Flotar exige algo extraño: confiar. Si te tensas, te hundes; si te relajas, el agua te sostiene. Es una lección muy antigua, que todas las tradiciones de sabiduría repiten a su manera: soltar no es perder, es aceptar ser sostenido." },
        { it: "Dans la vie aussi, il y a des moments où lutter aggrave tout. Le chagrin, la fatigue, l'incertitude : parfois la seule réponse juste est de respirer et de se laisser porter un instant. Cela ne durera pas toujours, ni l'eau ni la vie. Mais savoir flotter, c'est garder une confiance tranquille pour les jours difficiles.", es: "En la vida también hay momentos en que luchar lo empeora todo. La pena, el cansancio, la incertidumbre: a veces la única respuesta justa es respirar y dejarse sostener un instante. No durará siempre, ni el agua ni la vida. Pero saber flotar es guardar una confianza tranquila para los días difíciles." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Técnicas de salvamento acuático", "Flotar como lección de soltar y confiar", "La historia de las piscinas municipales"],
        answer: 1,
        why: "El título «L'eau qui porte» apunta a la confianza que enseña el agua, no a la técnica ni a la historia.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Hay que luchar contra el agua en todo momento",
          "Soltar y confiar permite flotar, en el agua y en la vida",
          "La natación es un deporte peligroso",
        ],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Si tu te tends, tu coules", "Lâcher prise n'est pas perdre", "Savoir flotter garde une confiance tranquille"],
        distractors: ["Les piscines ferment en août", "Tu dois nager dix longueurs par jour", "Le chagrin se guérit avec des médicaments"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Si tu te relâches, l'eau te porte.",
          "Lâcher prise n'est pas perdre.",
          "Se laisser porter un instant est parfois la réponse juste.",
          "Le maître-nageur travaille le mercredi matin.",
          "Savoir flotter garde une confiance tranquille.",
        ],
        intruder: 3,
        why: "El horario del socorrista es un dato práctico ajeno a la lección espiritual del agua.",
      },
    },
    {
      id: "md-fr-b1-05-3", theme: "relax mentale",
      title: "Le silence de la médiathèque", titleEs: "El silencio de la mediateca", minutes: 2,
      paragraphs: [
        { it: "Il existe des lieux où le silence est un service public. À la médiathèque, tu entends seulement : une page qui tourne, un crayon qui écrit, le léger climatiseur. Ton esprit, qui court toute la journée, ralentit tout seul, comme une voiture qui entre dans une zone apaisée.", es: "Existen lugares donde el silencio es un servicio público. En la mediateca solo oyes: una página que se pasa, un lápiz que escribe, el leve aire acondicionado. Tu mente, que corre todo el día, frena sola, como un coche que entra en una zona calmada." },
        { it: "Installe-toi près des rayonnages et laisse le silence faire son travail. Les pensées bruyantes s'assoupissent ; d'autres, plus douces, remontent à la surface. Tu n'as même pas besoin de lire : être assis au milieu des livres, c'est déjà une sieste pour l'esprit. Le bruit du monde peut attendre une heure.", es: "Instálate cerca de las estanterías y deja que el silencio haga su trabajo. Los pensamientos ruidosos se adormecen; otros, más suaves, suben a la superficie. Ni siquiera necesitas leer: estar sentado entre libros ya es una siesta para la mente. El ruido del mundo puede esperar una hora." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo estudiar rápido para un examen", "El silencio de la mediateca como descanso mental", "La historia del libro electrónico"],
        answer: 1,
        why: "El título destaca el silencio del lugar: apunta al reposo de la mente, no a la técnica de estudio.",
      },
      sequence: {
        instr: "Ordena la experiencia según el texto:",
        events: ["Tu entres dans la médiathèque", "Tu t'installe près des rayonnages", "Les pensées bruyantes s'assoupissent", "Des pensées douces remontent à la surface", "Le bruit du monde attend une heure"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Bienvenue dans la salle calme. Choisis une place près de la fenêtre. Écoute : une page tourne quelque part, un stylo griffonne, le radiateur chante doucement. Ces petits bruits ne dérangent pas le silence : ils l'habitent. Respire avec eux, tranquillement. Ici, ton esprit peut enfin marcher au ralenti, comme toi.",
        questions: [
          { q: "Où t'installes-tu ?", kind: "literal", options: ["Près de la fenêtre", "Près de la porte d'entrée", "Dans la cour intérieure"], answer: 0, why: "«Choisis une place près de la fenêtre»." },
          { q: "Quels bruits habitent le silence ?", kind: "literal", options: ["Une page, un stylo, le radiateur", "Des klaxons et des sirènes", "Des cris et des chants"], answer: 0, why: "«Une page tourne, un stylo griffonne, le radiateur chante»." },
          { q: "Comment marche ton esprit ici ?", kind: "inferencial", options: ["Au ralenti", "À toute vitesse", "À reculons"], answer: 0, why: "«Ton esprit peut enfin marcher au ralenti»: la sala calmada lo frena." },
          { q: "Pourquoi ces bruits ne dérangent pas ?", kind: "inferencial", options: ["Parce qu'ils font partie du silence de la salle", "Parce qu'ils sont très forts", "Parce qu'ils viennent de la rue"], answer: 0, why: "«Ils l'habitent»: los pequeños ruidos pueblan el silencio sin romperlo." },
        ],
      },
    },
  ],

  "fr-cu-b1-06": [
    {
      id: "md-fr-b1-06-1", theme: "meditazione",
      title: "Le tambour de la machine", titleEs: "El tambor de la lavadora", minutes: 2,
      paragraphs: [
        { it: "Samedi matin, buanderie de la résidence : ta machine tourne, et son tambour fait un bruit régulier, comme un tambour lointain. Au lieu de fuir ce bruit, fais-en ton objet de méditation. Ferme les yeux, installe-toi sur la chaise en plastique et écoute.", es: "Sábado por la mañana, lavadero de la residencia: tu lavadora gira y su tambor hace un ruido regular, como un tambor lejano. En vez de huir de ese ruido, conviértelo en tu objeto de meditación. Cierra los ojos, instálate en la silla de plástico y escucha." },
        { it: "Le rythme monte, descend, s'accélère à l'essorage. Ton esprit voudrait partir ailleurs : vers les devoirs, les messages, le dîner de dimanche. Ramène-le, doucement, au bruit de la machine. C'est un mantra moderne : il ne dit rien de sage, mais il ramène au présent à chaque tour.", es: "El ritmo sube, baja, se acelera en el centrifugado. Tu mente querría irse a otra parte: hacia los deberes, los mensajes, la comida del domingo. Tráela, con suavidad, al ruido de la máquina. Es un mantra moderno: no dice nada sabio, pero devuelve al presente a cada vuelta." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo reparar una lavadora averiada", "Usar el ruido del tambor de la lavadora como ancla de meditación", "Los horarios de la sala de lavado"],
        answer: 1,
        why: "El título convierte el tambor de la máquina en objeto de escucha: meditación sobre un ruido cotidiano.",
      },
      quiz: [
        { q: "Sur quoi t'installes-tu ?", kind: "literal", options: ["Sur la chaise en plastique", "Sur la machine elle-même", "Sur le linge sale"], answer: 0, why: "«Installe-toi sur la chaise en plastique»." },
        { q: "Pourquoi la machine est-elle un « mantra moderne » ?", kind: "inferencial", options: ["Parce qu'elle ramène au présent à chaque tour", "Parce qu'elle chante des paroles sages", "Parce qu'elle ne fait aucun bruit"], answer: 0, why: "«Il ramène au présent à chaque tour»: como un mantra, ancla la atención." },
        { q: "Quelle est l'idée du texte ?", kind: "critica", options: ["Les buanderies sont des lieux à éviter", "Un bruit banal peut devenir une porte vers le présent", "Il faut acheter des machines plus silencieuses"], answer: 1, why: "La idea central: cualquier ruido cotidiano puede volverse ancla de atención." },
      ],
      vf: [
        { text: "Ton esprit voudrait partir ailleurs.", value: true, why: "«Ton esprit voudrait partir ailleurs»." },
        { text: "Tu dois fuir le bruit de la machine.", value: false, why: "«Au lieu de fuir ce bruit, fais-en ton objet de méditation»." },
        { text: "Le rythme s'accélère à l'essorage.", value: true, why: "«S'accélère à l'essorage»." },
      ],
    },
    {
      id: "md-fr-b1-06-2", theme: "qui e ora",
      title: "Plier le linge chaud", titleEs: "Doblar la ropa caliente", minutes: 2,
      paragraphs: [
        { it: "Le linge sort du sèche-linge encore chaud. Étends un tee-shirt sur la table, lisse les manches, plie en deux, puis en quatre. Sens la chaleur qui traverse le tissu, l'odeur de propre, la douceur sous tes doigts. Chaque pli est un petit geste complet, qui commence et qui finit.", es: "La ropa sale de la secadora todavía caliente. Extiende una camiseta en la mesa, alisa las mangas, dobla en dos y luego en cuatro. Siente el calor que atraviesa la tela, el olor a limpio, la suavidad bajo tus dedos. Cada doblez es un pequeño gesto completo, que empieza y que termina." },
        { it: "Plier du linge en pleine attention transforme une corvée en île de calme. Ton esprit ralentit au rythme des plis. Une chaussette, un drap, une serviette : trois cents objets de méditation par semaine, offerts par ta propre maison. Quand le panier est vide, la table est nette et ta tête aussi.", es: "Doblar ropa con plena atención transforma una tarea en una isla de calma. Tu mente frena al ritmo de los dobleces. Un calcetín, una sábana, una toalla: trescientos objetos de meditación por semana, ofrecidos por tu propia casa. Cuando la cesta está vacía, la mesa está limpia y tu cabeza también." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Trucos para planchar más rápido", "Doblar la ropa caliente con atención plena", "Dónde comprar cestas de mimbre"],
        answer: 1,
        why: "El título une el gesto de plegar y el calor de la ropa: atención plena en una tarea doméstica.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Doblar la ropa es una pérdida de tiempo",
          "Plegar la ropa con atención convierte la tarea en calma",
          "Hay que comprar un robot que doble la ropa",
        ],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Tu sens la chaleur qui traverse le tissu", "Chaque pli est un petit geste complet", "Quand le panier est vide, ta tête aussi"],
        distractors: ["Le sèche-linge consomme trop d'électricité", "Tu détestes le linge sale", "Les chaussettes disparaissent dans la machine"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Tu sens la chaleur qui traverse le tissu.",
          "Chaque pli est un petit geste complet.",
          "Ton esprit ralentit au rythme des plis.",
          "Une boîte de lessive coûte moins cher en grande surface.",
          "Quand le panier est vide, ta tête aussi.",
        ],
        intruder: 3,
        why: "El precio del detergente es información comercial ajena a la experiencia consciente del plegado.",
      },
    },
    {
      id: "md-fr-b1-06-3", theme: "relax fisico",
      title: "Les mains dans l'eau chaude", titleEs: "Las manos en el agua caliente", minutes: 2,
      paragraphs: [
        { it: "Il te reste trois assiettes à laver à la main. Au lieu de te plaindre, fais de ce quart d'heure un soin pour toi. Ouvre l'eau chaude, savonne l'éponge, et regarde la mousse naître. Plonge tes mains : la chaleur monte dans les poignets, les avant-bras, jusqu'aux épaules.", es: "Te quedan tres platos por lavar a mano. En vez de quejarte, convierte ese cuarto de hora en un cuidado para ti. Abre el agua caliente, jabona la esponja y mira nacer la espuma. Sumerge las manos: el calor sube por las muñecas, los antebrazos, hasta los hombros." },
        { it: "Lave chaque assiette comme si c'était la seule : le rond, le bord, le fond. Rince, essuie, pose. Tes épaules descendent, ta respiration s'apaise, et le lavoir devient une petite station thermale. Les corvées d'eau sont des alliées cachées : elles lavent la vaisselle et détendent le corps en même temps.", es: "Lava cada plato como si fuera el único: el círculo, el borde, el fondo. Enjuaga, seca, apoya. Tus hombros bajan, tu respiración se aquieta y el fregadero se vuelve un pequeño balneario. Las tareas de agua son aliadas escondidas: lavan la vajilla y relajan el cuerpo a la vez." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una crítica a los lavavajillas", "Lavar los platos a mano como cuidado físico relajante", "Cómo ahorrar agua caliente en casa"],
        answer: 1,
        why: "El título apunta al calor del agua en las manos: cuidado del cuerpo en una tarea cotidiana.",
      },
      sequence: {
        instr: "Ordena los pasos según el texto:",
        events: ["Tu ouvres l'eau chaude", "Tu plonges tes mains dans la mousse", "Tu laves chaque assiette comme la seule", "Tes épaules descendent", "La vaisselle finie, ton corps est détendu"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Ce soir, pas de lave-vaisselle électrique : juste toi, l'évier et trois assiettes. Sens l'eau chaude sur tes mains. Savonne doucement, en cercles. La mousse brille, l'eau chante dans le bassin. Respire au rythme des cercles. Quand la dernière assiette brillera, tes pensées, elles aussi, seront propres et calmes.",
        questions: [
          { q: "Combien d'assiettes restent-elles ?", kind: "literal", options: ["Trois", "Trente", "Aucune"], answer: 0, why: "«Trois assiettes»." },
          { q: "Comment savonnes-tu ?", kind: "literal", options: ["En cercles", "En carrés", "En ligne droite"], answer: 0, why: "«Savonne doucement, en cercles»." },
          { q: "Que deviennent tes pensées à la fin ?", kind: "inferencial", options: ["Propres et calmes comme la vaisselle", "Plus bruyantes qu'avant", "Complètement disparues"], answer: 0, why: "«Tes pensées, elles aussi, seront propres et calmes»: la metáfora del lavado se aplica a la mente." },
          { q: "Pourquoi ce moment est-il un soin ?", kind: "inferencial", options: ["Parce que la chaleur et le rythme détendent", "Parce que tu finis très vite", "Parce que tu gagnes de l'argent"], answer: 0, why: "El agua caliente y el ritmo circular relajan el cuerpo." },
        ],
      },
    },
  ],

  "fr-cu-b1-07": [
    {
      id: "md-fr-b1-07-1", theme: "spiritualità",
      title: "L'émerveillement", titleEs: "El asombro", minutes: 3,
      paragraphs: [
        { it: "En haut des ruelles du Panier, tu t'arrêtes : la lumière tombe sur une pierre jaune, et cette pierre devient précieuse. L'émerveillement est une spiritualité sans église : il ne demande rien, ni rites ni livres. Il suffit de regarder avec attention, et le monde ordinaire devient extraordinaire.", es: "Arriba, en las callejuelas de Le Panier, te detienes: la luz cae sobre una piedra amarilla y esa piedra se vuelve preciosa. El asombro es una espiritualidad sin iglesia: no pide nada, ni ritos ni libros. Basta mirar con atención y el mundo ordinario se vuelve extraordinario." },
        { it: "Les enfants savent le faire naturellement ; les adultes l'oublient, puis le réapprennent. Aujourd'hui, choisis trois choses simples qui t'émerveillent : une ombre sur un mur, le cri d'une mouette, un plat bien chaud. Note-les ce soir. Ce petit journal de merveilles change lentement la manière dont tu habites tes jours.", es: "Los niños saben hacerlo de forma natural; los adultos lo olvidan y luego lo reaprenden. Hoy elige tres cosas sencillas que te asombren: una sombra en un muro, el grito de una gaviota, un plato bien caliente. Anótalas esta noche. Ese pequeño diario de maravillas cambia despacio la manera en que habitas tus días." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de monumentos de Marsella", "El asombro ante cosas sencillas como espiritualidad cotidiana", "Cómo fotografiar piedras antiguas"],
        answer: 1,
        why: "El título anuncia el asombro (émerveillement) como actitud espiritual ante lo simple.",
      },
      quiz: [
        { q: "Que devient la pierre jaune sous la lumière ?", kind: "literal", options: ["Précieuse", "Invisible", "Grise"], answer: 0, why: "«Cette pierre devient précieuse»." },
        { q: "Pourquoi les adultes « réapprennent » l'émerveillement ?", kind: "inferencial", options: ["Parce qu'ils l'ont oublié avec le temps", "Parce que les enfants le refusent", "Parce que la lumière change tous les jours"], answer: 0, why: "«Les enfants le font naturellement ; les adultes l'oublient, puis le réapprennent»." },
        { q: "Quelle est l'idée centrale du texte ?", kind: "critica", options: ["L'émerveillement demande des rites religieux", "Regarder avec attention transforme l'ordinaire en extraordinaire", "Seul le Panier de Marseille est extraordinaire"], answer: 1, why: "La idea central: la atención transforma lo ordinario en extraordinario, sin templos ni ritos." },
      ],
      vf: [
        { text: "L'émerveillement demande des livres et des rites.", value: false, why: "«Il ne demande rien, ni rites ni livres»." },
        { text: "Tu choisis trois choses simples qui t'émerveillent.", value: true, why: "«Choisis trois choses simples qui t'émerveillent»." },
        { text: "Le journal de merveilles change vite tes jours.", value: false, why: "«Change lentement»: el cambio es gradual, no rápido." },
      ],
    },
    {
      id: "md-fr-b1-07-2", theme: "relax mentale",
      title: "Nommer ce que l'on voit", titleEs: "Nombrar lo que se ve", minutes: 2,
      paragraphs: [
        { it: "Les écrivains de guides ont un secret : pour apaiser leur esprit, ils nomment. En marchant, ils disent intérieurement : « une porte verte, une fenêtre bleue, une moto rouge, une bouilloire qui siffle. » Nommer les détails, c'est ralentir le regard, et ralentir le regard, c'est ralentir les pensées.", es: "Los escritores de guías tienen un secreto: para apaciguar su mente, nombran. Caminando, dicen por dentro: «una puerta verde, una ventana azul, una moto roja, una hervidora que silba». Nombrar los detalles es frenar la mirada, y frenar la mirada es frenar los pensamientos." },
        { it: "Essaie dans ta propre rue. Dix détails, un par un, sans juger : ni beau ni laid, juste réel. Tu verras : le flot de pensées s'arrête, car l'esprit ne peut pas nommer et s'inquiéter en même temps. La description est une forme douce de repos mental, à portée de tous, partout, gratuitement.", es: "Pruébalo en tu propia calle. Diez detalles, uno por uno, sin juzgar: ni bonito ni feo, solo real. Verás: el flujo de pensamientos se detiene, porque la mente no puede nombrar y preocuparse a la vez. La descripción es una forma suave de descanso mental, al alcance de todos, en todas partes, gratis." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo escribir guías turísticas profesionales", "Nombrar los detalles del entorno como descanso mental", "Los mejores barrios para fotografiar"],
        answer: 1,
        why: "El título anuncia el gesto de nombrar lo visto: una técnica de calma mental al alcance de cualquiera.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Nombrar los detalles calma la mente porque ocupa la atención",
          "Hay que juzgar lo que se ve en la calle",
          "Solo los escritores de guías saben nombrar",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Nommer les détails ralentit le regard", "L'esprit ne peut pas nommer et s'inquiéter en même temps", "La description est un repos mental gratuit"],
        distractors: ["Tu écris un livre sur ta rue", "Les guides touristiques sont payants", "Il faut un appareil photo professionnel"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Ils nomment : une porte verte, une moto rouge.",
          "Nommer, c'est ralentir le regard.",
          "L'esprit ne peut pas nommer et s'inquiéter en même temps.",
          "Les guides touristiques se vendent en librairie le matin.",
          "La description est un repos mental à portée de tous.",
        ],
        intruder: 3,
        why: "La venta de guías en librerías es un dato comercial ajeno al ejercicio de nombrar.",
      },
    },
    {
      id: "md-fr-b1-07-3", theme: "meditazione",
      title: "Monter les ruelles", titleEs: "Subir las callejuelas", minutes: 2,
      paragraphs: [
        { it: "Les ruelles du Panier montent vers la lumière, et toi avec elles. Un pas, une inspiration ; un pas, une expiration. Ne compte pas les mètres : compte les souffles. Le savon sent le sud, un chat dort sur un rebord de fenêtre, une voix chante derrière une porte. Tout monte doucement.", es: "Las callejuelas de Le Panier suben hacia la luz, y tú con ellas. Un paso, una inspiración; un paso, una espiración. No cuentes los metros: cuenta los soplos. El jabón huele al sur, un gato duerme en un alféizar, una voz canta detrás de una puerta. Todo sube despacio." },
        { it: "En haut, la mer apparaît entre deux toits : ta récompense n'est pas la vue, c'est le souffle régulier que tu as gardé. Assieds-toi sur les marches, reste trois minutes. La montée méditative ne cherche pas la performance : elle transforme un escalier en chemin, et un effort en présence.", es: "Arriba, el mar aparece entre dos tejados: tu recompensa no es la vista, es el soplo regular que has guardado. Siéntate en los escalones, quédate tres minutos. La subida meditativa no busca la marca: transforma una escalera en camino y un esfuerzo en presencia." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Rutas de senderismo en los Alpes", "Subir las callejuelas al ritmo del aliento, en meditación", "Los mejores miradores de Marsella"],
        answer: 1,
        why: "El título une la subida y la respiración: caminar meditativo en cuesta, no excursionismo ni turismo.",
      },
      sequence: {
        instr: "Ordena la subida según el texto:",
        events: ["Tu commences la montée des ruelles", "Un pas inspire, un pas expire", "Tu sens le savon et la voix qui chante", "La mer apparaît entre deux toits", "Tu t'assieds trois minutes sur les marches"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Nous montons ensemble, tout doucement. Un pas, une inspiration. Un pas, une expiration. Ne te presse pas : la ruelle n'a pas d'ascenseur, mais elle a du temps. Sens le soleil sur ton bras gauche. Encore trois marches, calmement. La mer se cache, puis revient. Le sommet n'est pas la fin : c'est juste un endroit pour respirer.",
        questions: [
          { q: "Que fais-tu à chaque pas ?", kind: "literal", options: ["Tu inspires et tu expires", "Tu chantes une chanson", "Tu comptes les voitures"], answer: 0, why: "«Un pas, une inspiration. Un pas, une expiration»." },
          { q: "Que sens-tu sur ton bras gauche ?", kind: "literal", options: ["Le soleil", "La pluie", "Le vent froid"], answer: 0, why: "«Sens le soleil sur ton bras gauche»." },
          { q: "Qu'est-ce que le sommet, selon l'audio ?", kind: "inferencial", options: ["Un endroit pour respirer", "Une gare de départ", "Une boutique de souvenirs"], answer: 0, why: "«Le sommet n'est pas la fin : c'est juste un endroit pour respirer»." },
          { q: "Pourquoi ne pas se presser ?", kind: "inferencial", options: ["Parce que la ruelle a du temps", "Parce que tu es trop fatigué", "Parce que c'est interdit de courir"], answer: 0, why: "«Elle a du temps»: la callejuela invita al paso lento." },
        ],
      },
    },
  ],

  "fr-cu-b1-08": [
    {
      id: "md-fr-b1-08-1", theme: "qui e ora",
      title: "À vélo, ici et maintenant", titleEs: "En bici, aquí y ahora", minutes: 2,
      paragraphs: [
        { it: "À vélo, sans écouteurs, la ville devient une conversation. Le vent sur ton visage, le bruit des pneus sur les pavés, l'odeur du boulanger : tout te parle en même temps. Tu ne peux pas être ailleurs : l'équilibre exige ta présence entière, ici, entre deux tramways.", es: "En bici, sin auriculares, la ciudad se vuelve una conversación. El viento en tu cara, el ruido de los neumáticos sobre el adoquín, el olor del panadero: todo te habla a la vez. No puedes estar en otra parte: el equilibrio exige tu presencia entera, aquí, entre dos tranvías." },
        { it: "La bicyclette est une machine à présent. Chaque coup de pédale est un pas dans le moment présent ; chaque freinage, un retour immédiat au réel. Les soucis ne tiennent pas sur un vélo : ils tombent au premier cahot. Roule quinze minutes sans destination, et tu comprendras pourquoi tant de gens sourient en descendant de leur selle.", es: "La bicicleta es una máquina del presente. Cada pedalada es un paso en el momento presente; cada frenada, un retorno inmediato a lo real. Las preocupaciones no se aguantan en una bici: se caen con el primer bache. Pedalea quince minutos sin destino y entenderás por qué tanta gente sonríe al bajarse del sillín." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["La historia de la bicicleta en Francia", "Ir en bici como práctica del aquí y ahora", "Cómo elegir un buen casco de bici"],
        answer: 1,
        why: "El título une la bici y el momento presente: presencia consciente sobre dos ruedas.",
      },
      quiz: [
        { q: "Qu'est-ce qui exige ta présence entière ?", kind: "literal", options: ["L'équilibre", "La radio du vélo", "Le téléphone portable"], answer: 0, why: "«L'équilibre exige ta présence entière»." },
        { q: "Pourquoi les soucis tombent-ils au premier cahot ?", kind: "inferencial", options: ["Parce que le corps et l'attention reviennent au réel", "Parce que la route est parfaitement plate", "Parce que tu roules trop vite"], answer: 0, why: "El cuerpo en movimiento y el equilibrio anclan la atención en lo real." },
        { q: "Pourquoi tant de gens sourient en descendant de selle ?", kind: "critica", options: ["Parce que la bici les a ramenés dans le présent", "Parce qu'ils ont gagné une course", "Parce que la journée de travail est finie"], answer: 0, why: "La idea central: el vínculo bici-presente explica la sonrisa." },
      ],
      vf: [
        { text: "Tu roules avec des écouteurs.", value: false, why: "«Sans écouteurs»: el texto los excluye." },
        { text: "Chaque freinage est un retour immédiat au réel.", value: true, why: "«Chaque freinage, un retour immédiat au réel»." },
        { text: "Tu roules quinze minutes avec une destination précise.", value: false, why: "«Sans destination»: el paseo no busca meta." },
      ],
    },
    {
      id: "md-fr-b1-08-2", theme: "relax fisico",
      title: "Le grand air des Alpes", titleEs: "El aire fresco de los Alpes", minutes: 3,
      paragraphs: [
        { it: "Grenoble est entourée de montagnes, et le corps le sait. Le dimanche, prends le téléphérique ou tes jambes, et monte chercher le grand air. Là-haut, respire profondément trois fois : l'air frais entre dans la poitrine comme une boisson claire. Les épaules s'ouvrent, la tête s'allège.", es: "Grenoble está rodeada de montañas, y el cuerpo lo sabe. El domingo, toma el teleférico o tus piernas y sube a buscar el aire fresco. Allá arriba, respira hondo tres veces: el aire fresco entra en el pecho como una bebida clara. Los hombros se abren, la cabeza se aligera." },
        { it: "Fais le tour du corps, de bas en haut : les pieds dans les chaussures de marche, les jambes solides, le dos droit, le visage touché par le vent. La montagne ne te demande rien : elle t'offre seulement son calme. Reste dix minutes sans appareil photo, juste pour sentir que tu es un corps debout sous un grand ciel.", es: "Haz el recorrido del cuerpo, de abajo arriba: los pies en las botas de marcha, las piernas firmes, la espalda recta, la cara tocada por el viento. La montaña no te pide nada: solo te ofrece su calma. Quédate diez minutos sin cámara, solo para sentir que eres un cuerpo de pie bajo un cielo grande." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Una guía de esquí de invierno", "El aire de la montaña y el escaneo corporal al aire libre", "Los horarios del teleférico de Grenoble"],
        answer: 1,
        why: "El título apunta al aire alpino y al cuerpo: relajación física en la montaña, no a esquí ni horarios.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "La montaña calma el cuerpo si se la habita sin exigencias",
          "Hay que llegar a la cima lo más rápido posible",
          "Las fotos de cumbre son lo más importante",
        ],
        mainAnswer: 0,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["L'air frais entre dans la poitrine comme une boisson claire", "Tu fais le tour du corps de bas en haut", "La montagne t'offre son calme"],
        distractors: ["Le téléphérique coûte douze euros", "Tu skis toute la journée", "Les chaussures de marche sont démodées"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "L'air frais entre dans la poitrine.",
          "Tu fais le tour du corps, de bas en haut.",
          "La montagne ne te demande rien.",
          "Le parking du téléphérique ferme à 19 heures.",
          "Tu restes dix minutes sous un grand ciel.",
        ],
        intruder: 3,
        why: "El horario del aparcamiento es un dato logístico ajeno a la experiencia corporal de la montaña.",
      },
    },
    {
      id: "md-fr-b1-08-3", theme: "spiritualità",
      title: "Le chemin compte plus que l'arrivée", titleEs: "El camino importa más que la llegada", minutes: 3,
      paragraphs: [
        { it: "Nous passons des heures à imaginer l'arrivée : la plage, le diplôme, la retraite. Mais la vie, elle, se passe sur le chemin. Les sages de toutes les traditions le redisent : la destination est une excuse ; le chemin est la maison. Marcher devient alors une manière de prier, sans mots.", es: "Pasamos horas imaginando la llegada: la playa, el título, la jubilación. Pero la vida, en cambio, ocurre en el camino. Los sabios de todas las tradiciones lo repiten: el destino es una excusa; el camino es la casa. Caminar se vuelve entonces una manera de rezar, sin palabras." },
        { it: "Rien de religieux là-dedans : juste l'idée que chaque pas compte autant que le dernier. Le train qui te ramène, la rue qui monte, le couloir du métro : tous des chemins habités si tu les vis pleinement. Demain, sur ton trajet habituel, essaie de marcher comme si chaque pas était le but. Tu arriveras au même endroit ; toi, tu seras ailleurs.", es: "No hay nada religioso en ello: solo la idea de que cada paso cuenta tanto como el último. El tren que te lleva, la calle que sube, el pasillo del metro: todos caminos habitados si los vives plenamente. Mañana, en tu trayecto de siempre, intenta caminar como si cada paso fuera la meta. Llegarás al mismo sitio; tú estarás en otro." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo llegar más rápido a todas partes", "El camino importa más que la llegada como práctica espiritual", "Los retrasos de los trenes franceses"],
        answer: 1,
        why: "El título declara la primacía del camino: espiritualidad del trayecto cotidiano.",
      },
      sequence: {
        instr: "Ordena el razonamiento del texto:",
        events: ["Tu passes des heures à imaginer l'arrivée", "Tu découvres que le chemin est la maison", "Tu marches comme si chaque pas était le but", "Ton trajet habituel devient habité", "Tu arrives au même endroit, transformé"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Ton trajet de ce matin est un chemin comme les autres. La rue, le passage piéton, la bouche de métro. Respire à chaque étape : une inspiration en ouvrant la porte, une expiration en la refermant. Le but du trajet n'est pas seulement la destination : c'est ce que tu deviens en marchant vers elle, pas après pas.",
        questions: [
          { q: "Qu'est-ce qu'un chemin comme les autres ?", kind: "literal", options: ["Ton trajet de ce matin", "Un pèlerinage au Japon", "Un sentier de haute montagne"], answer: 0, why: "«Ton trajet de ce matin est un chemin comme les autres»." },
          { q: "Que fais-tu en refermant la porte ?", kind: "literal", options: ["Tu expires", "Tu cries de joie", "Tu commences à courir"], answer: 0, why: "«Une expiration en la refermant»." },
          { q: "Quel est le but du trajet, selon l'audio ?", kind: "inferencial", options: ["Ce que tu deviens en marchant", "Arriver avant tout le monde", "Éviter les embouteillages"], answer: 0, why: "«C'est ce que tu deviens en marchant vers elle»: la meta incluye la transformación." },
          { q: "Où est la maison, selon le texte principal ?", kind: "inferencial", options: ["Sur le chemin", "Uniquement à l'arrivée", "Dans la station de métro"], answer: 0, why: "«Le chemin est la maison»: el camino mismo es hogar." },
        ],
      },
    },
  ],

  "fr-cu-b1-09": [
    {
      id: "md-fr-b1-09-1", theme: "relax mentale",
      title: "Devant la porte du bureau", titleEs: "Ante la puerta del despacho", minutes: 2,
      paragraphs: [
        { it: "Tu es assis dans le couloir, dix minutes avant l'entretien. Ton cœur court plus vite que tes pensées. Pose les pieds bien à plat, le dos contre le dossier. Sens les trois points d'appui : les deux pieds et le bas du dos. Tu es assis ; rien ne peut t'emporter de cette chaise.", es: "Estás sentado en el pasillo, diez minutos antes de la entrevista. Tu corazón corre más rápido que tus pensamientos. Apoya bien los pies, la espalda contra el respaldo. Siente los tres puntos de apoyo: los dos pies y la parte baja de la espalda. Estás sentado; nada puede arrancarte de esa silla." },
        { it: "Maintenant, regarde le décor comme un témoin calme : la plante verte, la moquette grise, la lumière du plafonnier. Rien de tout cela n'est dangereux. L'entretien sera une conversation, pas un tribunal. Répète intérieurement : « Je respire, je suis prêt, quoi qu'il arrive. » Ces dix minutes t'appartiennent encore.", es: "Ahora mira el decorado como un testigo tranquilo: la planta verde, la moqueta gris, la luz del techo. Nada de todo eso es peligroso. La entrevista será una conversación, no un tribunal. Repite por dentro: «Respiro, estoy preparado, pase lo que pase». Estos diez minutos todavía te pertenecen." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Las preguntas típicas de una entrevista", "Calmar la mente en el pasillo antes de una entrevista", "Cómo decorar un despacho moderno"],
        answer: 1,
        why: "El título sitúa el texto ante la puerta, minutos antes: gestión de la calma mental.",
      },
      quiz: [
        { q: "Quels sont les trois points d'appui ?", kind: "literal", options: ["Les deux pieds et le bas du dos", "Les mains et la tête", "Le coude et les genoux"], answer: 0, why: "«Les trois points d'appui : les deux pieds et le bas du dos»." },
        { q: "Pourquoi regarder la plante et la moquette ?", kind: "inferencial", options: ["Pour rappeler que le décor n'est pas dangereux", "Pour critiquer la décoration du bureau", "Pour attendre quelqu'un en silence"], answer: 0, why: "«Rien de tout cela n'est dangereux»: observar el decorado apacigua." },
        { q: "Comment l'entretien est-il redéfini ?", kind: "critica", options: ["Comme une conversation, pas un tribunal", "Comme un examen impossible à réussir", "Comme une bataille à gagner"], answer: 0, why: "«Une conversation, pas un tribunal»: reencuadrar la situación reduce la angustia." },
      ],
      vf: [
        { text: "Ton cœur court plus vite que tes pensées.", value: true, why: "«Ton cœur court plus vite que tes pensées»." },
        { text: "L'entretien sera un tribunal.", value: false, why: "«Pas un tribunal»: el texto lo redefine como conversación." },
        { text: "Ces dix minutes t'appartiennent encore.", value: true, why: "«Ces dix minutes t'appartiennent encore»." },
      ],
    },
    {
      id: "md-fr-b1-09-2", theme: "meditazione",
      title: "Un souffle avant la question difficile", titleEs: "Un aliento antes de la pregunta difícil", minutes: 2,
      paragraphs: [
        { it: "« Parlez-moi de vos défauts. » La question arrive toujours, et chaque fois, elle coupe le souffle. Au lieu de répondre tout de suite, prends une seconde : une inspiration, une petite pause, une réponse. Cette seconde ne paraît pas longue de l'extérieur ; de l'intérieur, elle sauve la réponse.", es: "«Hábleme de sus defectos.» La pregunta llega siempre y, cada vez, corta el aliento. En vez de responder de inmediato, toma un segundo: una inspiración, una pequeña pausa, una respuesta. Ese segundo no parece largo desde fuera; desde dentro, salva la respuesta." },
        { it: "Le souffle est un ami discret dans les moments difficiles. Il ralentit le cœur, il donne du temps au cerveau, il remplace la panique par la présence. Les grands orateurs respirent avant chaque phrase ; les candidats sereins aussi. Une question difficile n'est pas une attaque : c'est une invitation à penser debout.", es: "El aliento es un amigo discreto en los momentos difíciles. Frena el corazón, da tiempo al cerebro, sustituye el pánico por la presencia. Los grandes oradores respiran antes de cada frase; los candidatos serenos también. Una pregunta difícil no es un ataque: es una invitación a pensar de pie." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo evitar las preguntas difíciles", "Tomar un aliento antes de responder una pregunta difícil", "Los defectos más populares en las entrevistas"],
        answer: 1,
        why: "El título une el soplo y la pregunta difícil: una pausa de respiración como recurso.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Responder rapidísimo demuestra inteligencia",
          "Una pausa de respiración transforma la respuesta a una pregunta difícil",
          "Hay que memorizar todas las respuestas posibles",
        ],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Une inspiration, une petite pause, une réponse", "Le souffle ralentit le cœur", "Une question difficile est une invitation à penser"],
        distractors: ["Tu demandes une pause pour aller aux toilettes", "La directrice déteste les silences", "Tu réponds en criant très fort"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Une inspiration, une petite pause, une réponse.",
          "Le souffle ralentit le cœur et donne du temps au cerveau.",
          "Les grands orateurs respirent avant chaque phrase.",
          "Les entretiens durent en général vingt minutes.",
          "Une question difficile est une invitation à penser debout.",
        ],
        intruder: 3,
        why: "La duración típica de una entrevista es un dato práctico ajeno a la respiración consciente.",
      },
    },
    {
      id: "md-fr-b1-09-3", theme: "qui e ora",
      title: "Le café d'après", titleEs: "El café de después", minutes: 2,
      paragraphs: [
        { it: "L'entretien est fini. Tu t'assieds en terrasse, un café devant toi, et ta tête veut déjà rejouer chaque réponse : « J'aurais dû dire ça, j'aurais dû sourire là. » Pose la tasse. Le passé vient de se refermer comme une porte ; le futur ne s'ouvrira que vendredi. Entre les deux, il y a ce café, chaud, réel.", es: "La entrevista ha terminado. Te sientas en la terraza, un café delante, y tu cabeza ya quiere repetir cada respuesta: «Debería haber dicho esto, debería haber sonreído allá». Deja la taza. El pasado acaba de cerrarse como una puerta; el futuro no se abrirá hasta el viernes. Entre los dos está este café, caliente, real." },
        { it: "Sentir la chaleur de la tasse, c'est revenir au seul moment qui existe vraiment. L'entretien a été ce qu'il a été : parfait ou imparfait, il t'a appartenu. Le résultat, lui, ne t'appartient pas encore. Bois ton café comme un acte de confiance : tu as fait ton possible, et le présent, lui, a bon goût.", es: "Sentir el calor de la taza es volver al único momento que existe de verdad. La entrevista fue lo que fue: perfecta o imperfecta, fue tuya. El resultado, en cambio, todavía no te pertenece. Bebe tu café como un acto de confianza: hiciste lo posible y el presente, por su parte, sabe bien." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo pedir feedback tras una entrevista", "El café después de la entrevista: soltar y estar presente", "Los mejores cafés de París"],
        answer: 1,
        why: "«Le café d'après» apunta al momento posterior a la entrevista, vivido con presencia.",
      },
      sequence: {
        instr: "Ordena la escena según el texto:",
        events: ["L'entretien se termine", "Ta tête veut rejouer chaque réponse", "Tu poses la tasse et sens la chaleur", "Tu acceptes que le passé s'est refermé", "Tu bois ton café en confiance"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Le café fume encore. Ne réponds pas aux messages pour l'instant : ils attendront, eux aussi. Regarde la rue, les passants, la lumière du matin. Tout ce que tu as dit dans ce bureau est dit. Le vendredi viendra à son heure, pas avant. Pour l'instant, il n'y a que cette tasse, cette chaleur dans tes mains, et cette minute qui te sourit.",
        questions: [
          { q: "Que fais-tu des messages ?", kind: "literal", options: ["Tu attends avant de répondre", "Tu réponds tout de suite", "Tu supprimes ton téléphone"], answer: 0, why: "«Ne réponds pas aux messages pour l'instant : ils attendront»." },
          { q: "Quand le vendredi viendra-t-il ?", kind: "literal", options: ["À son heure, pas avant", "Tout de suite après le café", "Le mois prochain"], answer: 0, why: "«Le vendredi viendra à son heure, pas avant»." },
          { q: "Qu'est-ce qui te sourit ?", kind: "inferencial", options: ["Cette minute présente", "La directrice du bureau", "Le serveur du café"], answer: 0, why: "«Cette minute qui te sourit»: el momento actual es el regalo." },
          { q: "Pourquoi ne pas rejouer l'entretien ?", kind: "inferencial", options: ["Parce que le passé s'est refermé et que le présent a bon goût", "Parce que c'est interdit par l'entreprise", "Parce que tu es trop fatigué"], answer: 0, why: "«Tout ce que tu as dit est dit»: lo dicho, dicho está; queda el presente." },
        ],
      },
    },
  ],

  "fr-cu-b1-10": [
    {
      id: "md-fr-b1-10-1", theme: "relax fisico",
      title: "Les épaules du journaliste", titleEs: "Los hombros del periodista", minutes: 2,
      paragraphs: [
        { it: "Après trois heures d'écriture, tes épaules vivent leur propre vie : montées vers les oreilles, dures comme des pierres. C'est le prix du clavier. Recule-toi de l'écran, et fais ce que font les vieux rédacteurs : dix cercles lents avec les épaules, cinq en avant, cinq en arrière.", es: "Después de tres horas de escritura, tus hombros viven su propia vida: subidos hacia las orejas, duros como piedras. Es el precio del teclado. Aléjate de la pantalla y haz lo que hacen los viejos redactores: diez círculos lentos con los hombros, cinco hacia delante, cinco hacia atrás." },
        { it: "Puis lâche-les complètement, comme si elles tombaient vers la taille. Sens le poids revenir dans les bras, la nuque s'allonger. Les mains aussi ont besoin d'une pause : serre les poings trois secondes, puis ouvre grand les doigts. Ton article attendra deux minutes ; tes épaules, elles, te remercieront toute la soirée.", es: "Luego suéltalos del todo, como si cayeran hacia la cintura. Siente el peso volver a los brazos, la nuca alargarse. Las manos también necesitan pausa: aprieta los puños tres segundos y luego abre bien los dedos. Tu artículo puede esperar dos minutos; tus hombros te lo agradecerán toda la noche." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo escribir artículos más rápido", "Relajar hombros y manos después de horas de escribir", "La vida secreta de los redactores jefe"],
        answer: 1,
        why: "El título ancla el texto en los hombros del que escribe: pausa física del trabajo de escritorio.",
      },
      quiz: [
        { q: "Combien de cercles fais-tu avec les épaules ?", kind: "literal", options: ["Dix", "Trois", "Vingt"], answer: 0, why: "«Dix cercles lents : cinq en avant, cinq en arrière»." },
        { q: "Pourquoi lâcher les épaules « comme si elles tombaient » ?", kind: "inferencial", options: ["Pour sentir leur poids et relâcher les muscles", "Pour les faire disparaître complètement", "Pour toucher le sol avec les mains"], answer: 0, why: "«Sens le poids revenir dans les bras»: soltar permite sentir el peso real." },
        { q: "Que conseille le texte à propos de l'article ?", kind: "critica", options: ["Il peut attendre deux minutes pendant la pause", "Il faut le finir avant de bouger", "Il faut l'abandonner pour aujourd'hui"], answer: 0, why: "«Ton article attendra deux minutes»: el texto prioriza el cuerpo sin abandonar el trabajo." },
      ],
      vf: [
        { text: "Tes épaules sont montées vers les oreilles.", value: true, why: "«Montées vers les oreilles, dures comme des pierres»." },
        { text: "Tu fais cinq cercles en avant et dix en arrière.", value: false, why: "«Cinq en avant, cinq en arrière»: diez en total, repartidos." },
        { text: "Tes épaules te remercieront toute la soirée.", value: true, why: "«Tes épaules te remercieront toute la soirée»." },
      ],
    },
    {
      id: "md-fr-b1-10-2", theme: "spiritualità",
      title: "Ce qui compte vraiment", titleEs: "Lo que de verdad importa", minutes: 3,
      paragraphs: [
        { it: "Chaque matin, la une du journal crie : urgences, scandales, chiffres. Ton esprit s'emballe avec les titres. La sagesse, c'est de trier : parmi toutes ces informations, lesquelles comptent vraiment pour ta vie ? Lesquelles t'aident à aimer mieux, à décider mieux, à vivre mieux ?", es: "Cada mañana, la portada del periódico grita: urgencias, escándalos, cifras. Tu mente se desboca con los titulares. La sabiduría consiste en clasificar: entre toda esa información, ¿cuál cuenta de verdad para tu vida? ¿Cuál te ayuda a amar mejor, a decidir mejor, a vivir mejor?" },
        { it: "Ce tri n'est pas de l'ignorance : c'est de l'attention. Les traditions de sagesse comparent souvent l'esprit à une maison : tout ce que tu laisses entrer s'y installe. Choisis tes nouvelles comme tu choisis tes invités. Le monde restera informé même si tu lis une seule page, lentement, en entier.", es: "Esa selección no es ignorancia: es atención. Las tradiciones de sabiduría comparan a menudo la mente con una casa: todo lo que dejas entrar se instala. Elige tus noticias como eliges a tus invitados. El mundo seguirá informado aunque leas una sola página, despacio, entera." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo suscribirse a un diario local", "Filtrar la avalancha de noticias y elegir lo que importa", "La historia de la prensa de Rennes"],
        answer: 1,
        why: "El título apunta al discernimiento: qué merece entrar en la mente.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Hay que leer todas las noticias del día",
          "Elegir qué información entra en la mente es un acto de atención",
          "Los periódicos son inútiles en la actualidad",
        ],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["L'esprit s'emballe avec les titres", "L'esprit est comme une maison : tout ce qui entre s'y installe", "Choisis tes nouvelles comme tes invités"],
        distractors: ["Tu jettes ta télévision par la fenêtre", "Les chiffres des journaux sont toujours faux", "Tu lis le journal en criant"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "L'esprit s'emballe avec les titres.",
          "L'esprit est comme une maison.",
          "Tout ce que tu laisses entrer s'y installe.",
          "Le journal local paraît chaque matin à 6 heures.",
          "Choisis tes nouvelles comme tes invités.",
        ],
        intruder: 3,
        why: "La hora de salida del periódico es un dato logístico ajeno al discernimiento espiritual.",
      },
    },
    {
      id: "md-fr-b1-10-3", theme: "relax mentale",
      title: "Baisser le volume du monde", titleEs: "Bajar el volumen del mundo", minutes: 2,
      paragraphs: [
        { it: "Notifications, radios, conversations, chantiers : le monde moderne joue toujours trop fort. Ta tête devient une salle de rédaction bruyante où cent sujets se disputent la une. Pour récupérer ton calme, il faut apprendre un geste simple : baisser le volume du monde, une heure par jour.", es: "Notificaciones, radios, conversaciones, obras: el mundo moderno siempre suena demasiado alto. Tu cabeza se vuelve una sala de redacción ruidosa donde cien temas se disputan la portada. Para recuperar la calma hay que aprender un gesto simple: bajar el volumen del mundo, una hora al día." },
        { it: "Une heure sans écran, sans musique, sans nouvelles : juste toi et un silence relatif. Au début, le vide fait peur, puis il devient une pièce spacieuse. Les vraies pensées attendaient derrière le bruit, comme des sources sous la terre. Chaque soir, cette heure-là te rend plus calme que toutes les applications de méditation.", es: "Una hora sin pantalla, sin música, sin noticias: solo tú y un silencio relativo. Al principio el vacío da miedo, luego se convierte en una habitación espaciosa. Los verdaderos pensamientos esperaban detrás del ruido, como manantiales bajo la tierra. Cada noche, esa hora te devuelve más calma que todas las apps de meditación." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo instalar una aplicación de meditación", "Bajar el volumen del mundo una hora al día para calmar la mente", "Los peligros de las obras urbanas"],
        answer: 1,
        why: "El título usa la metáfora del volumen: silencio diario para la mente sobrecargada.",
      },
      sequence: {
        instr: "Ordena la experiencia según el texto:",
        events: ["Tu remarques que le monde joue trop fort", "Tu éteins les écrans une heure", "Le vide fait peur au début", "Le vide devient une pièce spacieuse", "Les vraies pensées remontent comme des sources"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Ce soir, expérience simple : une heure sans rien. Pas de notifications, pas de journal, pas de musique. Juste une pièce, une lampe, et toi. Le silence te semblera étrange, puis vivant : tu entendras ton voisin tousser, ton frigo chanter, ta propre respiration. Le monde n'a pas disparu ; il a juste baissé le volume pour toi.",
        questions: [
          { q: "Combien de temps dure l'expérience ?", kind: "literal", options: ["Une heure", "Une journée entière", "Cinq minutes"], answer: 0, why: "«Une heure sans rien»." },
          { q: "Que fais-tu pendant cette heure ?", kind: "literal", options: ["Rien : une pièce, une lampe, et toi", "Tu travailles sur un dossier", "Tu téléphones à ta mère"], answer: 0, why: "«Juste une pièce, une lampe, et toi»." },
          { q: "Qu'entends-tu quand le silence devient vivant ?", kind: "literal", options: ["Ton voisin, ton frigo, ta respiration", "Des klaxons dans la rue", "Une sirène au loin"], answer: 0, why: "«Ton voisin tousser, ton frigo chanter, ta propre respiration»." },
          { q: "Qu'est devenu le monde à la fin ?", kind: "inferencial", options: ["Il a baissé le volume", "Il a complètement disparu", "Il est devenu plus bruyant"], answer: 0, why: "«Il a juste baissé le volume pour toi»: el mundo sigue ahí, más suave." },
        ],
      },
    },
  ],

  "fr-cu-b1-11": [
    {
      id: "md-fr-b1-11-1", theme: "meditazione",
      title: "Garder un secret, doucement", titleEs: "Guardar un secreto, suavemente", minutes: 2,
      paragraphs: [
        { it: "Le groupe prépare une fête surprise, et toi, tu portes le secret. Tu sens les mots monter dans ta gorge à chaque conversation. La méditation du secret est simple : quand l'envie de parler arrive, ne la combats pas ; regarde-la, respire, et laisse-la redescendre comme une marée.", es: "El grupo prepara una fiesta sorpresa y tú cargas con el secreto. Sientes las palabras subir a la garganta en cada conversación. La meditación del secreto es simple: cuando llegue el deseo de hablar, no lo combatas; míralo, respira y déjalo bajar como una marea." },
        { it: "Un secret bien gardé devient une présence douce : une petite flamme que tu protèges sans la montrer. Tu souris davantage, tu écoutes mieux, et personne ne sait pourquoi. Le jour J, tu offriras ce silence transformé en joie. Garder un secret, c'est déjà faire un cadeau à quelqu'un : un cadeau emballé dans ton calme.", es: "Un secreto bien guardado se vuelve una presencia dulce: una pequeña llama que proteges sin mostrarla. Sonríes más, escuchas mejor y nadie sabe por qué. El día D ofrecerás ese silencio transformado en alegría. Guardar un secreto ya es hacerle un regalo a alguien: un regalo envuelto en tu calma." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo organizar una fiesta sorpresa paso a paso", "Guardar un secreto con calma, respirando las ganas de contarlo", "Los regalos de cumpleaños más originales"],
        answer: 1,
        why: "El título une secreto y suavidad: la práctica de callar sin tensión.",
      },
      quiz: [
        { q: "Que fais-tu quand l'envie de parler arrive ?", kind: "literal", options: ["Tu la regardes et tu respires", "Tu la répètes à voix haute", "Tu la caches sous ton oreiller"], answer: 0, why: "«Ne la combats pas ; regarde-la, respire»." },
        { q: "Pourquoi souris-tu davantage ?", kind: "inferencial", options: ["Parce que tu portes une joie cachée", "Parce que tu es malade ce week-end", "Parce que tu as gagné à la loterie"], answer: 0, why: "La pequeña llama protegida explica la sonrisa discreta." },
        { q: "Qu'est-ce qu'un secret bien gardé, selon le texte ?", kind: "critica", options: ["Un cadeau emballé dans le calme", "Une charge trop lourde à porter seul", "Un mensonge dangereux pour l'amitié"], answer: 0, why: "«Un cadeau emballé dans ton calme»: la imagen final resume la idea." },
      ],
      vf: [
        { text: "Tu combats l'envie de parler avec force.", value: false, why: "«Ne la combats pas»: se observa sin luchar." },
        { text: "Tu protèges une petite flamme sans la montrer.", value: true, why: "«Une petite flamme que tu protèges sans la montrer»." },
        { text: "Le silence du secret devient un cadeau.", value: true, why: "«Un cadeau emballé dans ton calme»." },
      ],
    },
    {
      id: "md-fr-b1-11-2", theme: "qui e ora",
      title: "Préparer la fête en pleine attention", titleEs: "Preparar la fiesta con plena atención", minutes: 2,
      paragraphs: [
        { it: "Les ballons d'abord : souffler, nouer, suspendre. Puis la guirlande : mesurer, fixer, reculer pour voir. Préparer une fête surprise est une suite de petits gestes, et chaque geste peut être habité entièrement. Le scotch qui craque, la couleur des ballons, la chaise qu'on déplace : tout est là, rien ne manque.", es: "Primero los globos: soplar, anudar, colgar. Luego la guirnalda: medir, fijar, retroceder para ver. Preparar una fiesta sorpresa es una sucesión de pequeños gestos, y cada gesto puede habitarse por completo. El celo que cruje, el color de los globos, la silla que se mueve: todo está ahí, no falta nada." },
        { it: "Quand tu décores en pleine attention, l'impatience disparaît : il n'y a plus « avant la fête » et « pendant la fête », seulement la fête qui commence déjà dans tes mains. La surprise sera plus belle si son chemin l'est aussi. Les amis reconnaîtront quelque chose de calme et de soigné dans la salle : ce sera ta signature invisible.", es: "Cuando decoras con plena atención, la impaciencia desaparece: ya no hay «antes de la fiesta» y «durante la fiesta», solo la fiesta que ya empieza en tus manos. La sorpresa será más bella si su camino también lo es. Los amigos reconocerán algo tranquilo y cuidado en la sala: será tu firma invisible." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Dónde comprar decoración barata", "Decorar la fiesta con plena atención, gesto a gesto", "Los mejores juegos para una fiesta"],
        answer: 1,
        why: "El título apunta a la atención durante la preparación: presencia en los pequeños gestos.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "La decoración es una tarea aburrida que hay que acabar rápido",
          "Habitando cada gesto, la fiesta empieza ya mientras decoras",
          "Solo importa el momento de la sorpresa final",
        ],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Chaque geste peut être habité entièrement", "L'impatience disparaît quand tu es présent", "Ta signature invisible est le calme de la salle"],
        distractors: ["Tu achètes toute la décoration sur internet", "Les ballons explosent toujours à la fin", "La fête commence à minuit pile"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Tu souffles les ballons, tu noues, tu suspends.",
          "Le scotch craque entre tes doigts.",
          "Chaque geste peut être habité entièrement.",
          "Les guirlandes lumineuses coûtent neuf euros le rouleau.",
          "La fête commence déjà dans tes mains.",
        ],
        intruder: 3,
        why: "El precio de las guirnaldas es un dato comercial ajeno a la atención del gesto.",
      },
    },
    {
      id: "md-fr-b1-11-3", theme: "relax fisico",
      title: "Danser sans compter", titleEs: "Bailar sin contar", minutes: 2,
      paragraphs: [
        { it: "La playlist tourne, la fête bat son plein, et ton corps hésite encore au bord de la piste. La règle de ce soir : danser sans compter, sans juger, sans spectateur. Tes épaules d'abord, puis les bras, puis les jambes : le corps sait faire, il attendait juste ta permission.", es: "La lista de canciones gira, la fiesta está en su apogeo y tu cuerpo duda todavía al borde de la pista. La regla de esta noche: bailar sin contar, sin juzgar, sin público. Tus hombros primero, luego los brazos, luego las piernas: el cuerpo sabe hacer, solo esperaba tu permiso." },
        { it: "La danse est un massage interne : chaque mouvement secoue doucement les tensions, réchauffe les articulations, délie le dos. Sue un peu, ris beaucoup. Tu n'es pas en train de performer : tu es en train de déposer une semaine entière sur le parquet. Demain matin, tes muscles te rappelleront la fête avec un sourire.", es: "El baile es un masaje interno: cada movimiento sacude suavemente las tensiones, calienta las articulaciones, desata la espalda. Suda un poco, ríe mucho. No estás actuando: estás depositando una semana entera en el parquet. Mañana por la mañana, tus músculos recordarán la fiesta con una sonrisa." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Un curso de baile de salón", "Bailar libremente en la fiesta como relajación física", "La historia de la playlist perfecta"],
        answer: 1,
        why: "«Danser sans compter» apunta al baile libre como descanso del cuerpo, no a la técnica.",
      },
      sequence: {
        instr: "Ordena la escena según el texto:",
        events: ["Tu hésites au bord de la piste", "Tes épaules commencent à bouger", "Les bras et les jambes suivent", "Chaque mouvement secoue les tensions", "Tes muscles sourient le lendemain"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "La musique commence. Ne regarde personne : ferme même les yeux si tu veux. Suis le rythme avec la tête, puis avec les épaules. Laisse les bras partir tout seuls, librement. Si une pensée te dit que tu es ridicule, remercie-la et continue : elle ne danse pas, toi si. Danser, c'est laisser le corps terminer la journée.",
        questions: [
          { q: "Avec quoi commences-tu à suivre le rythme ?", kind: "literal", options: ["La tête, puis les épaules", "Les pieds seulement", "La voix"], answer: 0, why: "«Suis le rythme avec la tête, puis avec les épaules»." },
          { q: "Que fais-tu de la pensée ridicule ?", kind: "inferencial", options: ["Tu la remercies et tu continues", "Tu arrêtes de danser", "Tu la cries à la salle entière"], answer: 0, why: "«Remercie-la et continue : elle ne danse pas, toi si»." },
          { q: "Qu'est-ce que danser, à la fin ?", kind: "literal", options: ["Laisser le corps terminer la journée", "Gagner un concours de danse", "Imiter les autres danseurs"], answer: 0, why: "«Danser, c'est laisser le corps terminer la journée»." },
          { q: "Pourquoi fermer les yeux ?", kind: "inferencial", options: ["Pour ne pas se comparer aux autres", "Pour t'endormir sur place", "Pour éviter la lumière du plafond"], answer: 0, why: "«Ne regarde personne»: cerrar los ojos libera del público imaginario." },
        ],
      },
    },
  ],

  "fr-cu-b1-12": [
    {
      id: "md-fr-b1-12-1", theme: "spiritualità",
      title: "Écouter jusqu'au bout", titleEs: "Escuchar hasta el final", minutes: 3,
      paragraphs: [
        { it: "Pendant un débat, la plupart des gens n'écoutent pas : ils préparent leur réponse. L'écoute profonde est le contraire : recevoir les mots de l'autre jusqu'au bout, sans les interrompre, sans les trier. C'est une forme de respect qui se sent immédiatement, dans une salle comme dans un salon.", es: "Durante un debate, la mayoría de la gente no escucha: prepara su respuesta. La escucha profunda es lo contrario: recibir las palabras del otro hasta el final, sin interrumpirlas, sin clasificarlas. Es una forma de respeto que se siente de inmediato, en una sala como en un salón." },
        { it: "Écouter jusqu'au bout, c'est offrir à quelqu'un une rareté : une attention entière. Les traditions de sagesse placent l'écoute au début de tout chemin, car on ne comprend ni les autres ni soi-même sans silence intérieur. Après le débat, on ne se souviendra peut-être pas de tes arguments ; on se souviendra que tu as écouté.", es: "Escuchar hasta el final es ofrecerle a alguien una rareza: una atención entera. Las tradiciones de sabiduría colocan la escucha al principio de todo camino, porque no se comprende ni a los demás ni a uno mismo sin silencio interior. Después del debate, quizá nadie recuerde tus argumentos; recordarán que escuchaste." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo ganar un debate a cualquier costa", "Escuchar hasta el final como práctica de respeto y sabiduría", "Los mejores argumentos sobre el móvil en la escuela"],
        answer: 1,
        why: "El título anuncia la escucha completa: una práctica de atención y respeto.",
      },
      quiz: [
        { q: "Que font la plupart des gens pendant un débat ?", kind: "literal", options: ["Ils préparent leur réponse", "Ils dorment discrètement", "Ils partent avant la fin"], answer: 0, why: "«La plupart des gens n'écoutent pas : ils préparent leur réponse»." },
        { q: "Pourquoi l'écoute est-elle une rareté ?", kind: "inferencial", options: ["Parce qu'elle offre une attention entière", "Parce qu'elle coûte beaucoup d'argent", "Parce qu'elle est interdite par le règlement"], answer: 0, why: "«Une attention entière»: la escucha plena escasea." },
        { q: "Que restera-t-il après le débat ?", kind: "critica", options: ["Le souvenir d'une vraie écoute", "Les arguments exacts de chacun", "Le café offert par la maison de quartier"], answer: 0, why: "«On se souviendra que tu as écouté»: perdura la escucha, no los argumentos." },
      ],
      vf: [
        { text: "Interrompre fait partie de l'écoute profonde.", value: false, why: "«Sans les interrompre»: la interrupción la rompe." },
        { text: "On ne se souviendra peut-être pas de tes arguments.", value: true, why: "«On ne se souviendra peut-être pas de tes arguments»." },
        { text: "Le silence intérieur aide à comprendre les autres et soi-même.", value: true, why: "«Sans silence intérieur» no hay comprensión, según el texto." },
      ],
    },
    {
      id: "md-fr-b1-12-2", theme: "relax mentale",
      title: "Deux minutes de silence avant de parler", titleEs: "Dos minutos de silencio antes de hablar", minutes: 2,
      paragraphs: [
        { it: "Ton tour de parole arrive, et ta tête est pleine de phrases qui se bousculent. Deux minutes avant de parler, fais le vide : ferme la bouche, ferme presque les yeux, respire. Les phrases pressées partiront ; une seule idée claire restera, et c'est elle qu'on retiendra.", es: "Tu turno de palabra llega, y tu cabeza está llena de frases que se empujan. Dos minutos antes de hablar, haz el vacío: cierra la boca, cierra casi los ojos, respira. Las frases apuradas se irán; quedará una sola idea clara, y es esa la que se recordará." },
        { it: "Le silence prépare mieux la parole que la répétition. Il range l'esprit comme on range une table : enlève le superflu, garde l'essentiel. Quand la modératrice te donnera la parole, tu parleras moins, mais chaque phrase portera. Les grandes interventions ne sont pas longues : elles sont claires parce qu'elles sont nées dans le calme.", es: "El silencio prepara mejor la palabra que la repetición. Ordena la mente como se ordena una mesa: quita lo superfluo, guarda lo esencial. Cuando la moderadora te dé la palabra, hablarás menos, pero cada frase pesará. Las grandes intervenciones no son largas: son claras porque nacieron en la calma." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo hablar mucho sin detenerse", "Dos minutos de silencio para ordenar la mente antes de hablar", "Cómo ser moderador de debates"],
        answer: 1,
        why: "El título propone una pausa de silencio como preparación mental de la intervención.",
      },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: [
          "Hablar mucho impresiona al público",
          "El silencio antes de hablar ordena la mente y aclara las ideas",
          "Hay que memorizar el discurso palabra por palabra",
        ],
        mainAnswer: 1,
        secQ: "Marca las ideas que SÍ aparecen en el texto:",
        secondary: ["Les phrases pressées partiront", "Le silence range l'esprit comme une table", "Chaque phrase née dans le calme porte"],
        distractors: ["Tu parles pendant quinze minutes", "Le public t'applaudit trop tôt", "Tu interromps les autres orateurs"],
      },
      intruder: {
        instr: "¿Cuál es el intruso?",
        sentences: [
          "Les phrases pressées partiront.",
          "Une seule idée claire restera.",
          "Le silence range l'esprit comme une table.",
          "Le débat commence à 18 heures précises.",
          "Les grandes interventions sont claires.",
        ],
        intruder: 3,
        why: "La hora de inicio del debate es un dato organizativo ajeno a la preparación mental.",
      },
    },
    {
      id: "md-fr-b1-12-3", theme: "meditazione",
      title: "Après le débat, la paix", titleEs: "Después del debate, la paz", minutes: 2,
      paragraphs: [
        { it: "Le débat s'est bien passé, mais ta tête veut encore gagner : elle recommence les arguments dans le métro, elle imagine les répliques parfaites. Le besoin d'avoir raison est une fatigue cachée. Pose-le ce soir, comme un manteau dont tu n'as plus besoin dans la chaleur de ta maison.", es: "El debate ha ido bien, pero tu cabeza quiere seguir ganando: repite los argumentos en el metro, imagina las réplicas perfectas. La necesidad de tener razón es un cansancio escondido. Déjala esta noche, como un abrigo que ya no necesitas en el calor de tu casa." },
        { it: "Respire trois fois et laisse la salle de débat derrière toi. Ceux qui pensaient autrement continuent de penser autrement, et le monde tient encore debout. La paix d'après le débat ne veut pas dire indifférence : elle veut dire confiance. Les idées avancent lentement, plusieurs têtes ensemble, et une soirée n'était qu'une soirée.", es: "Respira tres veces y deja la sala de debate detrás de ti. Quienes pensaban distinto siguen pensando distinto, y el mundo se sigue sosteniendo en pie. La paz posterior al debate no significa indiferencia: significa confianza. Las ideas avanzan despacio, varias cabezas juntas, y una velada no era más que una velada." },
      ],
      predict: {
        q: "¿De qué tratará el texto?",
        options: ["Cómo convencer a los que piensan distinto", "Soltar la necesidad de tener razón después del debate", "Cómo volver a casa en metro sin retrasos"],
        answer: 1,
        why: "El título anuncia la calma posterior al debate: dejar la disputa mental en la sala.",
      },
      sequence: {
        instr: "Ordena el proceso según el texto:",
        events: ["Ta tête recommence les arguments dans le métro", "Tu poses le besoin d'avoir raison", "Tu respires trois fois", "Tu laisses la salle de débat derrière toi", "Les idées continuent d'avancer, plusieurs têtes ensemble"],
      },
      listen: {
        intro: "Escucha el audio (sin leer el texto) y responde:",
        audioIt: "Le débat est fini, la maison est calme. Assieds-toi une minute, rien qu'une minute. Sens que le besoin d'avoir raison pose ses valises à la porte. Respire : à l'inspiration, tu écoutes ce qui reste du débat ; à l'expiration, tu le laisses partir. Ta tête mérite du repos, ta soirée mérite mieux qu'un match mental. La paix commence ici.",
        questions: [
          { q: "Que se passe-t-il à la porte ?", kind: "literal", options: ["Le besoin d'avoir raison pose ses valises", "La modératrice frappe à la vitre", "Un voisin sonne à la porte"], answer: 0, why: "«Le besoin d'avoir raison pose ses valises à la porte»." },
          { q: "Que fais-tu à l'expiration ?", kind: "literal", options: ["Tu laisses le débat partir", "Tu cries très fort", "Tu comptes jusqu'à dix"], answer: 0, why: "«À l'expiration, tu le laisses partir»." },
          { q: "Que mérite ta soirée ?", kind: "inferencial", options: ["Mieux qu'un match mental", "Un deuxième débat", "Une réunion de travail"], answer: 0, why: "«Ta soirée mérite mieux qu'un match mental»." },
          { q: "Où commence la paix ?", kind: "inferencial", options: ["Ici, dans le calme de la maison", "Dans la salle de débat", "Demain matin au réveil"], answer: 0, why: "«La paix commence ici»: el aquí y ahora doméstico la inaugura." },
        ],
      },
    },
  ],
};
