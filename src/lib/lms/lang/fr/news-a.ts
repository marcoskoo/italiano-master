/* ── FR · Notícias A1 + A2 (v9.26) ─────────────────────────────────────
   Actualités en français de France, niveau adapté, méthode VOA Learning
   English. Contenu 100% original à visée didactique. Corps : A1 ≈ 80 mots,
   A2 ≈ 130-150. Lexique contrôlé, présent (A1) / passé composé et futur
   (A2). Champs `.it` = français (langue étudiée), `.es` = espagnol. */

import type { NewsItem } from "../../news";

export const FR_NEWS_A: NewsItem[] = [

  /* ═══ A1 · 1 — Sciences ═══ */
  {
    id: "fr-news-a1-01", cat: "scienza", level: "A1", place: "Paris", minutes: 2,
    title: "Les escaliers sont vos amis",
    titleEs: "Las escaleras son tus amigas",
    lead: {
      it: "Une étude parisienne annonce une bonne nouvelle : monter les escaliers est bon pour la santé. Et c'est gratuit.",
      es: "Un estudio parisino anuncia una buena noticia: subir escaleras es bueno para la salud. Y es gratis.",
    },
    paragraphs: [
      { it: "Des chercheurs parisiens ont une bonne nouvelle. Monter les escaliers, c'est bon pour le cœur et pour les jambes.",
      es: "Unos investigadores parisinos tienen una buena noticia. Subir escaleras es bueno para el corazón y para las piernas." },
      { it: "L'étude dit : six étages par jour suffisent. Ce n'est pas la peine de faire du sport une heure.",
      es: "El estudio dice: seis pisos al día bastan. No hace falta hacer deporte una hora." },
      { it: "Le problème, c'est l'ascenseur. Il est confortable, mais il ne travaille pas pour vous.",
      es: "El problema es el ascensor. Es cómodo, pero no trabaja para ti." },
      { it: "Les médecins résument tout : « Prenez les escaliers deux fois par jour. C'est gratuit, c'est rapide et c'est déjà un sport.»",
      es: "Los médicos lo resumen todo: «Toma las escaleras dos veces al día. Es gratis, es rápido y ya es un deporte.»" },
    ],
    words: [
      { it: "les escaliers", es: "las escaleras" },
      { it: "un étage", es: "un piso (nivel)" },
      { it: "l'ascenseur", es: "el ascensor" },
      { it: "gratuit", es: "gratuito" },
      { it: "la santé", es: "la salud" },
      { it: "ce n'est pas la peine", es: "no hace falta" },
    ],
    questions: [
      { q: "¿Cuántos pisos al día bastan, según el estudio?", options: ["Six étages", "Soixante étages", "Deux étages", "Aucun"], answer: 0, why: "«L'étude dit : six étages par jour suffisent.»" },
      { q: "¿Cuál es el problema, según la noticia?", options: ["Le temps", "L'ascenseur : il est confortable, mais il ne travaille pas pour vous", "Le prix des billets", "La pluie"], answer: 1, why: "«Le problème, c'est l'ascenseur. Il est confortable, mais il ne travaille pas pour vous.»" },
      { q: "¿Qué resumen los médicos?", options: ["«Faites du sport une heure.»", "«Prenez les escaliers deux fois par jour. C'est gratuit, c'est rapide et c'est déjà un sport.»", "«N'utilisez jamais l'ascenseur.»", "«Montez à pied jusqu'au dixième.»"], answer: 1, why: "«C'est gratuit, c'est rapide et c'est déjà un sport.»" },
      { q: "Subir escaleras es bueno para…", options: ["le cœur et les jambes", "le portefeuille seulement", "la télé", "rien"], answer: 0, why: "«Monter les escaliers, c'est bon pour le cœur et pour les jambes.»" },
    ],
    discuss: [
      { it: "Chez vous, il y a un ascenseur ? Vous l'utilisez combien de fois par jour ?", es: "En tu casa, ¿hay ascensor? ¿Cuántas veces al día lo usas?" },
      { it: "«C'est déjà un sport» : êtes-vous d'accord ? Quel «sport gratuit» faites-vous sans y penser ?", es: "«Ya es un deporte»: ¿estás de acuerdo? ¿Qué «deporte gratis» haces sin pensarlo?" },
    ],
  },

  /* ═══ A1 · 2 — Environnement ═══ */
  {
    id: "fr-news-a1-02", cat: "ambiente", level: "A1", place: "Lyon", minutes: 2,
    title: "Des jardins sur les toits",
    titleEs: "Jardines en los tejados",
    lead: {
      it: "À Lyon, les toits des écoles changent de couleur. Le gris devient vert, et les élèves montent en classe… au jardin.",
      es: "En Lyon, los tejados de las escuelas cambian de color. El gris se vuelve verde, y los alumnos suben a clase… al jardín.",
    },
    paragraphs: [
      { it: "Avant, les toits des écoles étaient gris et tristes. Maintenant, il y a des plantes, des fleurs et même des légumes.",
      es: "Antes, los tejados de las escuelas eran grises y tristes. Ahora hay plantas, flores y hasta verduras." },
      { it: "Les enfants aiment beaucoup ce changement. Ils arrosent les plantes le matin, avant les cours.",
      es: "A los niños les gusta mucho este cambio. Riegan las plantas por la mañana, antes de las clases." },
      { it: "Les toits verts ont trois avantages : ils gardent la fraîcheur en été, ils nettoient l'air et ils accueillent les oiseaux.",
      es: "Los tejados verdes tienen tres ventajas: guardan la frescura en verano, limpian el aire y reciben a los pájaros." },
      { it: "Le maire a une phrase simple : « Une ville qui monte, c'est bien. Une ville qui pousse, c'est mieux. »",
      es: "El alcalde tiene una frase simple: «Una ciudad que sube está bien. Una ciudad que crece es mejor.»" },
    ],
    words: [
      { it: "le toit", es: "el tejado, el techo" },
      { it: "arroser", es: "regar" },
      { it: "la fraîcheur", es: "la frescura" },
      { it: "avantage", es: "la ventaja" },
      { it: "accueillir", es: "recibir, acoger" },
      { it: "pousser", es: "crecer (plantas)" },
    ],
    questions: [
      { q: "¿Cómo eran antes los tejados de las escuelas?", options: ["Verts et gais", "Gris et tristes", "Rouges", "Jaunes"], answer: 1, why: "«Avant, les toits des écoles étaient gris et tristes.»" },
      { q: "¿Qué hacen los niños por la mañana?", options: ["Ils arrosent les plantes avant les cours", "Ils regardent la télé", "Ils dorment", "Ils font du sport sur le toit"], answer: 0, why: "«Ils arrosent les plantes le matin, avant les cours.»" },
      { q: "¿Cuáles son las tres ventajas de los tejados verdes?", options: ["La fraîcheur en été, l'air nettoyé et les oiseaux", "Le prix, le prix et le prix", "Rien du tout", "Le bruit, la poussière et les fuites"], answer: 0, why: "«Ils gardent la fraîcheur en été, ils nettoient l'air et ils accueillent les oiseaux.»" },
      { q: "¿Qué dijo el alcalde?", options: ["«Une ville qui pousse, c'est mieux.»", "«Les toits sont faits pour dormir.»", "«Je n'aime pas les plantes.»", "«C'est trop cher.»"], answer: 0, why: "«Une ville qui monte, c'est bien. Une ville qui pousse, c'est mieux.»" },
    ],
    discuss: [
      { it: "Aimeriez-vous un jardin sur le toit de votre école ou de votre bureau ? Qu'y planteriez-vous ?", es: "¿Te gustaría un jardín en el tejado de tu escuela o tu oficina? ¿Qué plantarías allí?" },
      { it: "Votre ville «pousse» ou «monte» ? Expliquez avec un exemple.", es: "¿Tu ciudad «crece» o «sube»? Explícalo con un ejemplo." },
    ],
  },

  /* ═══ A1 · 3 — Société ═══ */
  {
    id: "fr-news-a1-03", cat: "societa", level: "A1", place: "Marseille", minutes: 2,
    title: "La pétanque : un sport, une famille",
    titleEs: "La petanca: un deporte, una familia",
    lead: {
      it: "Le samedi après-midi, dans les quartiers de Marseille, on joue aux boules. Le jeu est ancien ; les rires sont nouveaux chaque semaine.",
      es: "El sábado por la tarde, en los barrios de Marsella, se juega a las bochas. El juego es antiguo; las risas son nuevas cada semana.",
    },
    paragraphs: [
      { it: "Dans les vieux quartiers, les joueurs se retrouvent toujours au même endroit : sous les platanes, près de la fontaine.",
      es: "En los barrios viejos, los jugadores se reúnen siempre en el mismo lugar: bajo los plátanos, cerca de la fuente." },
      { it: "La pétanque a des règles simples : lancer la boule près du petit ballon. Mais chaque partie devient une discussion nationale.",
      es: "La petanca tiene reglas simples: lanzar la bola cerca de la bolita. Pero cada partida se convierte en una discusión nacional." },
      { it: "Les grands-pères enseignent le jeu aux enfants. Les enfants gagnent souvent — et les grands-pères ne sont pas contents du tout.",
      es: "Los abuelos enseñan el juego a los niños. Los niños ganan a menudo — y los abuelos no están nada contentos." },
      { it: "Un joueur de quatre-vingts ans résume la tradition : « Ici, on ne gagne pas une partie. On gagne une famille. »",
      es: "Un jugador de ochenta años resume la tradición: «Aquí no se gana una partida. Se gana una familia.»" },
    ],
    words: [
      { it: "la pétanque", es: "la petanca" },
      { it: "la boule", es: "la bola" },
      { it: "le quartier", es: "el barrio" },
      { it: "le platane", es: "el plátano (árbol)" },
      { it: "lancer", es: "lanzar" },
      { it: "se retrouver", es: "reunirse" },
    ],
    questions: [
      { q: "¿Dónde se reúnen los jugadores?", options: ["Sous les platanes, près de la fontaine", "Dans un stade", "Au restaurant", "À la plage"], answer: 0, why: "«Les joueurs se retrouvent toujours au même endroit : sous les platanes, près de la fontaine.»" },
      { q: "¿Cuáles son las reglas de la petanca?", options: ["Courir très vite", "Lancer la boule près du petit ballon", "Sauter haut", "Nager"], answer: 1, why: "«La pétanque a des règles simples : lancer la boule près du petit ballon.»" },
      { q: "¿Qué pasa a menudo con los niños?", options: ["Ils perdent toujours", "Ils gagnent souvent — et les grands-pères ne sont pas contents du tout", "Ils refusent de jouer", "Ils dorment"], answer: 1, why: "«Les enfants gagnent souvent — et les grands-pères ne sont pas contents du tout.»" },
      { q: "¿Qué resumió el jugador de ochenta años?", options: ["«On ne gagne pas une partie. On gagne une famille.»", "«La pétanque est ennuyeuse.»", "«Le sport est mort.»", "«Je ne joue plus.»"], answer: 0, why: "«Ici, on ne gagne pas une partie. On gagne une famille.»" },
    ],
    discuss: [
      { it: "Dans votre pays, quel jeu de quartier ressemble à la pétanque ?", es: "En tu país, ¿qué juego de barrio se parece a la petanca?" },
      { it: "«On gagne une famille» : avez-vous un jeu qui vous unit à d'autres personnes ?", es: "«Se gana una familia»: ¿tienes un juego que te une a otras personas?" },
    ],
  },

  /* ═══ A2 · 1 — Histoire ═══ */
  {
    id: "fr-news-a2-01", cat: "storia", level: "A2", place: "Versailles", minutes: 3,
    title: "Le château qui parle aux jardins",
    titleEs: "El palacio que habla con los jardines",
    lead: {
      it: "À Versailles, le plus grand palais du monde a un problème de riches : il est trop grand pour être visité en une journée. Voici la solution des jardiniers.",
      es: "En Versalles, el palacio más grande del mundo tiene un problema de rico: es demasiado grande para visitarlo en un día. Esta es la solución de los jardineros.",
    },
    paragraphs: [
      { it: "Louis XIV a construit Versailles pour deux raisons : habiter loin de Paris et montrer sa puissance au monde entier. Le résultat : sept cent cinquante mille mètres carrés et des jardins à perte de vue.",
      es: "Luis XIV construyó Versalles por dos razones: vivir lejos de París y mostrar su poder al mundo entero. El resultado: setecientos cincuenta mil metros cuadrados y jardines hasta perder la vista." },
      { it: "Le problème est moderne : six millions de visiteurs par an veulent tout voir en trois heures. C'est impossible — et c'est la meilleure nouvelle du lieu.",
      es: "El problema es moderno: seis millones de visitantes al año quieren verlo todo en tres horas. Es imposible — y es la mejor noticia del lugar." },
      { it: "Les jardiniers proposent donc une autre visite : oublier le palais une journée et marcher dans les jardins, là où le roi se promenait seul. Les fontaines fonctionnent le mardi, comme au dix-septième siècle.",
      es: "Los jardineros proponen otra visita: olvidar el palacio un día y caminar por los jardines, donde el rey paseaba a solas. Las fuentes funcionan los martes, como en el siglo diecisiete." },
      { it: "Un jardinier de cinquante ans de métier explique la philosophie du lieu : « Le roi a construit le palais pour impressionner. Mais il a construit les jardins pour respirer. Faites comme lui : venez respirer. »",
      es: "Un jardinero con cincuenta años de oficio explica la filosofía del lugar: «El rey construyó el palacio para impresionar. Pero construyó los jardines para respirar. Haz como él: ven a respirar.»" },
    ],
    words: [
      { it: "le château", es: "el palacio, el castillo" },
      { it: "à perte de vue", es: "hasta perder la vista" },
      { it: "le visiteur", es: "el visitante" },
      { it: "la fontaine", es: "la fuente" },
      { it: "se promener", es: "pasear" },
      { it: "le métier", es: "el oficio" },
    ],
    questions: [
      { q: "¿Por qué construyó Luis XIV Versalles?", options: ["Pour habiter loin de Paris et montrer sa puissance", "Pour faire du sport", "Pour ses enfants", "Par ennui"], answer: 0, why: "«Louis XIV a construit Versailles pour deux raisons : habiter loin de Paris et montrer sa puissance au monde entier.»" },
      { q: "¿Cuál es el problema moderno?", options: ["Le palais ferme trop tôt", "Six millions de visiteurs veulent tout voir en trois heures — c'est impossible", "Les jardins sont fermés", "Il n'y a pas de parking"], answer: 1, why: "«Six millions de visiteurs par an veulent tout voir en trois heures. C'est impossible.»" },
      { q: "¿Qué proponen los jardineros?", options: ["Visiter plus vite", "Oublier le palais une journée et marcher dans les jardins, où le roi se promenait seul", "Venir seulement le mardi", "Ne pas venir"], answer: 1, why: "«Oublier le palais une journée et marcher dans les jardins, là où le roi se promenait seul.»" },
      { q: "¿Cuándo funcionan las fuentes?", options: ["Tous les jours", "Le mardi, comme au dix-septième siècle", "Jamais", "Le dimanche seulement"], answer: 1, why: "«Les fontaines fonctionnent le mardi, comme au dix-septième siècle.»" },
      { q: "¿Qué explicó el jardinero veterano?", options: ["«Le roi a construit le palais pour impressionner. Mais il a construit les jardins pour respirer.»", "«Le palais est trop vieux.»", "«Les visiteurs fatiguent.»", "«Les jardins coûtent cher.»"], answer: 0, why: "«Il a construit les jardins pour respirer. Faites comme lui : venez respirer.»" },
    ],
    discuss: [
      { it: "Palais ou jardins : que choisiriez-vous à Versailles ? Pourquoi ?", es: "Palacio o jardines: ¿qué elegirías en Versalles? ¿Por qué?" },
      { it: "«Visiter vite» ou «respirer lentement» : comment voyagez-vous, en général ?", es: "«Visitar rápido» o «respirar despacio»: ¿cómo viajas tú, en general?" },
    ],
  },

  /* ═══ A2 · 2 — Technologie ═══ */
  {
    id: "fr-news-a2-02", cat: "tecnologia", level: "A2", place: "Toulouse", minutes: 3,
    title: "L'usine qui rêve d'oiseaux",
    titleEs: "La fábrica que sueña con pájaros",
    lead: {
      it: "À la périphérie de Toulouse, une usine construit des machines de trois cent tonnes qui volent. Les ingénieurs ont un objectif nouveau : faire taire la machine, pas la faire crier.",
      es: "En las afueras de Toulouse, una fábrica construye máquinas de trescientas toneladas que vuelan. Los ingenieros tienen un objetivo nuevo: hacer callar a la máquina, no hacerla gritar.",
    },
    paragraphs: [
      { it: "C'est ici que l'Europe assemble ses plus grands avions. Les pièces arrivent du monde entier par bateau, par camion et par un avion spécial, encore plus grand, qui transporte des ailes.",
      es: "Es aquí donde Europa ensambla sus aviones más grandes. Las piezas llegan de todo el mundo en barco, en camión y en un avión especial, aún más grande, que transporta alas." },
      { it: "Le travail ressemble à une horlogerie géante : des milliers d'opérations, chaque pièce à son heure exacte. Un retard d'un jour à Toulouse devient un retard d'une semaine à l'autre bout du monde.",
      es: "El trabajo se parece a una relojería gigante: miles de operaciones, cada pieza a su hora exacta. Un retraso de un día en Toulouse se convierte en un retraso de una semana en el otro extremo del mundo." },
      { it: "La nouveauté de cette décennie, ce sont les silence. Les nouveaux avions consomment moins, volent plus loin et surtout font moins de bruit — parce que les aéroports ont des voisins, et les voisins ont des fenêtres.",
      es: "La novedad de esta década son los silencios. Los aviones nuevos consumen menos, vuelan más lejos y sobre todo hacen menos ruido — porque los aeropuertos tienen vecinos, y los vecinos tienen ventanas." },
      { it: "Un ingénieur compare son travail à un métier d'autrefois : « Nous construisons des cathédrales, avec une différence : la nôtre doit partir dans le ciel chaque matin et revenir chaque soir. »",
      es: "Un ingeniero compara su trabajo con un oficio antiguo: «Nosotros construimos catedrales, con una diferencia: la nuestra debe partir al cielo cada mañana y volver cada noche.»" },
    ],
    words: [
      { it: "l'usine", es: "la fábrica" },
      { it: "assembler", es: "ensamblar" },
      { it: "l'aile", es: "el ala" },
      { it: "le bruit", es: "el ruido" },
      { it: "la pièce", es: "la pieza" },
      { it: "à son heure exacte", es: "a su hora exacta" },
    ],
    questions: [
      { q: "¿Qué construye la fábrica de Toulouse?", options: ["Des voitures", "Les plus grands avions de l'Europe", "Des trains", "Des bateaux"], answer: 1, why: "«C'est ici que l'Europe assemble ses plus grands avions.»" },
      { q: "¿Cómo llegan las piezas?", options: ["Par bateau, par camion et par un avion spécial qui transporte des ailes", "Par la poste", "À pied", "Par magie"], answer: 0, why: "«Les pièces arrivent du monde entier par bateau, par camion et par un avion spécial… qui transporte des ailes.»" },
      { q: "¿Qué es la novedad de esta década?", options: ["Les avions rouges", "Les silence : moins de consommation, plus de distance et surtout moins de bruit", "Les billets gratuits", "Les vols de nuit"], answer: 1, why: "«La nouveauté de cette décennie, ce sont les silence. Les nouveaux avions… font moins de bruit — parce que les aéroports ont des voisins, et les voisins ont des fenêtres.»" },
      { q: "¿A qué comparó el ingeniero su trabajo?", options: ["À une boulangerie", "À des cathédrales qui doivent partir dans le ciel chaque matin et revenir chaque soir", "À un jardin", "À un match de football"], answer: 1, why: "«Nous construisons des cathédrales, avec une différence : la nôtre doit partir dans le ciel chaque matin et revenir chaque soir.»" },
    ],
    discuss: [
      { it: "Vous habitez près d'un aéroport ? Le bruit diminue-t-il, selon vous ?", es: "¿Vives cerca de un aeropuerto? ¿Disminuye el ruido, según tú?" },
      { it: "Cathedrals qui volent : belle image ou orgueil d'ingénieur ? Discutez.", es: "Catedrales que vuelan: ¿buena imagen o orgullo de ingeniero? Discútelo." },
    ],
  },

  /* ═══ A2 · 3 — Sport ═══ */
  {
    id: "fr-news-a2-03", cat: "sport", level: "A2", place: "Annecy", minutes: 3,
    title: "Le lac qui apprend le vélo à tout le monde",
    titleEs: "El lago que enseña a andar en bici a todo el mundo",
    lead: {
      it: "Autour du lac d'Annecy, une seule règle : la piste partagée. Les sportifs rapides et les familles lentes roulent ensemble — et tout le monde arrive à la fin.",
      es: "Alrededor del lago de Annecy, una sola regla: la vía compartida. Los deportistas rápidos y las familias lentas pedalean juntos — y todos llegan al final.",
    },
    paragraphs: [
      { it: "Le lac a la réputation d'être le plus propre d'Europe. Autour de l'eau, trente kilomètres de piste plate : le terrain de jeu parfait pour les débutants.",
      es: "El lago tiene fama de ser el más limpio de Europa. Alrededor del agua, treinta kilómetros de vía plana: el terreno de juego perfecto para los principiantes." },
      { it: "Le dimanche, la piste ressemble à un défilé : couples âgés, enfants sur des petits vélos, coureurs qui doublent poliment. Personne ne crie ; tout le monde sourit.",
      es: "El domingo, la vía parece un desfile: parejas mayores, niños en bicis pequeñas, corredores que adelantan con cortesía. Nadie grita; todo el mundo sonríe." },
      { it: "La ville a ajouté des services simples : des fontaines d'eau, des pompes à vélo gratuites, des bancs tous les deux kilomètres. Le sport est devenu une promenade.",
      es: "La ciudad añadió servicios simples: fuentes de agua, bombas de aire gratis, bancos cada dos kilómetros. El deporte se volvió un paseo." },
      { it: "Une dame de soixante-dix ans, qui a appris le vélo cette année, a la phrase du printemps : « Avant, je regardais le lac. Maintenant, le lac me regarde. »",
      es: "Una señora de setenta años, que aprendió a montar en bici este año, tiene la frase de la primavera: «Antes yo miraba el lago. Ahora el lago me mira a mí.»" },
    ],
    words: [
      { it: "la piste (cyclable)", es: "la vía (ciclista)" },
      { it: "doubler", es: "adelantar" },
      { it: "la fontaine d'eau", es: "la fuente de agua" },
      { it: "la pompe à vélo", es: "la bomba de aire para bicis" },
      { it: "le débutant", es: "el principiante" },
      { it: "partagé", es: "compartido" },
    ],
    questions: [
      { q: "¿Cuál es la reputación del lago?", options: ["Le plus sale de France", "Le plus propre d'Europe", "Le plus froid", "Le plus profond"], answer: 1, why: "«Le lac a la réputation d'être le plus propre d'Europe.»" },
      { q: "¿Cómo es la pista los domingos?", options: ["Vide et triste", "Un défilé : couples âgés, enfants, coureurs qui doublent poliment", "Fermée", "Pleine de voitures"], answer: 1, why: "«Le dimanche, la piste ressemble à un défilé : couples âgés, enfants sur des petits vélos, coureurs qui doublent poliment.»" },
      { q: "¿Qué servicios añadió la ciudad?", options: ["Des hôtels de luxe", "Des fontaines, des pompes à vélo gratuites et des bancs tous les deux kilomètres", "Des bus gratuits", "Rien"], answer: 1, why: "«Des fontaines d'eau, des pompes à vélo gratuites, des bancs tous les deux kilomètres.»" },
      { q: "¿Qué dijo la señora de setenta años?", options: ["«Avant, je regardais le lac. Maintenant, le lac me regarde.»", "«Le vélo est dangereux.»", "«Je préfère la voiture.»", "«C'est trop dur.»"], answer: 0, why: "«Avant, je regardais le lac. Maintenant, le lac me regarde.»" },
    ],
    discuss: [
      { it: "Sport de performance ou sport de promenade : lequel vous ressemble ?", es: "Deporte de rendimiento o de paseo: ¿cuál se te parece?" },
      { it: "Qu'est-ce qui manque à votre ville pour «apprendre le vélo à tout le monde» ?", es: "¿Qué le falta a tu ciudad para «enseñar la bici a todo el mundo»?" },
    ],
  },
];
