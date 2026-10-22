/* ── FR · Notizie A1 — lote b (v9.39) ─────────────────────────────────
   Actualités en français de France, niveau A1 (suite) : 12 items,
   ids fr-news-a1-04 … fr-news-a1-15. Méthode VOA Learning English :
   corps de 4 paragraphes ≈ 70-95 mots au présent, minutes 2. Champs
   `.it` = français (langue étudiée), `.es` = espagnol. Avec news-a.ts,
   le niveau A1 couvre les 9 catégories. */

import type { NewsItem } from "../../news";

export const FR_NEWS_A1B: NewsItem[] = [

  /* ═══ A1 · 4 — Histoire · Nîmes ═══ */
  {
    id: "fr-news-a1-04", cat: "storia", level: "A1", place: "Nîmes", minutes: 2,
    title: "Nîmes garde ses arènes romaines",
    titleEs: "Nimes conserva su anfiteatro romano",
    lead: {
      it: "À Nîmes, les arènes romaines ont deux mille ans. Elles travaillent encore : le soir, la pierre devient une salle de spectacle.",
      es: "En Nimes, el anfiteatro romano tiene dos mil años. Todavía trabaja: por la tarde, la piedra se convierte en sala de espectáculo.",
    },
    paragraphs: [
      { it: "À Nîmes, dans le sud de la France, il y a une maison de pierre très spéciale. C'est une arène romaine. Elle a deux mille ans.",
      es: "En Nimes, en el sur de Francia, hay una casa de piedra muy especial. Es un anfiteatro romano. Tiene dos mil años." },
      { it: "L'arène sert d'abord aux jeux des Romains. Aujourd'hui, elle accueille des concerts et des spectacles.",
      es: "El anfiteatro sirve primero para los juegos de los romanos. Hoy acoge conciertos y espectáculos." },
      { it: "Les pierres sont énormes. Les touristes prennent des photos et écoutent les guides. Les enfants aiment les histoires de gladiateurs.",
      es: "Las piedras son enormes. Los turistas hacen fotos y escuchan a los guías. A los niños les gustan las historias de gladiadores." },
      { it: "Une guide résume le secret du monument : « Les Romains partent, mais les pierres restent. La ville grandit autour d'elles. »",
      es: "Una guía resume el secreto del monumento: «Los romanos se van, pero las piedras quedan. La ciudad crece a su alrededor.»" },
    ],
    words: [
      { it: "l'arène", es: "el anfiteatro, la arena" },
      { it: "la pierre", es: "la piedra" },
      { it: "le guide", es: "el guía" },
      { it: "le touriste", es: "el turista" },
      { it: "le concert", es: "el concierto" },
      { it: "le monument", es: "el monumento" },
    ],
    questions: [
      { q: "¿Qué hay en Nîmes, en el sur de Francia?", options: ["Une arène romaine de deux mille ans", "Une tour moderne en verre", "Un château allemand", "Une gare toute nouvelle"], answer: 0, why: "«C'est une arène romaine. Elle a deux mille ans.»" },
      { q: "¿Qué acoge el anfiteatro hoy en día?", options: ["Des matchs de tennis", "Des concerts et des spectacles", "Des cours de cuisine", "Rien du tout"], answer: 1, why: "«Aujourd'hui, elle accueille des concerts et des spectacles.»" },
      { q: "¿Qué hacen los turistas en el monumento?", options: ["Ils prennent des photos et ils écoutent les guides", "Ils dorment sur les pierres", "Ils nagent dans la fontaine", "Ils peignent les murs"], answer: 0, why: "«Les touristes prennent des photos et écoutent les guides.»" },
      { q: "¿Qué quiere decir la guía con su frase final?", options: ["Les Romains partent, mais les pierres restent : la ville grandit autour d'elles", "Les pierres sont fragiles et dangereuses", "La ville veut détruire le monument", "Les Romains reviennent chaque été"], answer: 0, why: "«Les Romains partent, mais les pierres restent. La ville grandit autour d'elles.»" },
    ],
    discuss: [
      { it: "Y a-t-il un monument romain dans votre région ? Racontez-le.", es: "¿Hay un monumento romano en tu región? Cuéntalo." },
      { it: "Les vieilles pierres ou les bâtiments neufs : que préférez-vous, et pourquoi ?", es: "Las piedras viejas o los edificios nuevos: ¿qué prefieres, y por qué?" },
    ],
  },

  /* ═══ A1 · 5 — Santé · Rennes ═══ */
  {
    id: "fr-news-a1-05", cat: "salute", level: "A1", place: "Rennes", minutes: 2,
    title: "À Rennes, on prescrit du sommeil",
    titleEs: "En Rennes, recetan dormir",
    lead: {
      it: "À Rennes, les étudiants dorment trop peu. Les médecins de la ville ont une recette : la nuit, sans écran.",
      es: "En Rennes, los estudiantes duermen demasiado poco. Los médicos de la ciudad tienen una receta: la noche, sin pantalla.",
    },
    paragraphs: [
      { it: "À l'université de Rennes, les étudiants sont fatigués. Ils regardent leurs écrans très tard et ils dorment peu.",
      es: "En la universidad de Rennes, los estudiantes están cansados. Miran sus pantallas muy tarde y duermen poco." },
      { it: "Les médecins de la ville donnent trois conseils simples : éteindre le téléphone, boire une tisane et fermer les yeux avant minuit.",
      es: "Los médicos de la ciudad dan tres consejos simples: apagar el teléfono, tomar una infusión y cerrar los ojos antes de medianoche." },
      { it: "Le sommeil répare le corps et la mémoire. Les étudiants qui dorment huit heures apprennent plus vite, disent les professeurs.",
      es: "El sueño repara el cuerpo y la memoria. Los estudiantes que duermen ocho horas aprenden más rápido, dicen los profesores." },
      { it: "Une étudiante résume la nouvelle règle : « Avant, je révisais jusqu'à deux heures du matin. Maintenant, le livre dort avant moi. »",
      es: "Una estudiante resume la nueva regla: «Antes yo repasaba hasta las dos de la mañana. Ahora, el libro duerme antes que yo.»" },
    ],
    words: [
      { it: "l'étudiant", es: "el estudiante" },
      { it: "le sommeil", es: "el sueño" },
      { it: "le téléphone", es: "el teléfono" },
      { it: "la tisane", es: "la infusión", note: "infusión de hierbas ; no es exactamente «el té»" },
      { it: "la mémoire", es: "la memoria" },
      { it: "fatigué", es: "cansado, cansada" },
    ],
    questions: [
      { q: "¿Cómo están los estudiantes de la universidad de Rennes?", options: ["Ils sont fatigués : écrans très tard, peu de sommeil", "Ils sont contents et en forme", "Ils sont malades", "Ils sont perdus"], answer: 0, why: "«Les étudiants sont fatigués. Ils regardent leurs écrans très tard et ils dorment peu.»" },
      { q: "¿Cuáles son los tres consejos de los médicos?", options: ["Dormir douze heures d'affilée", "Éteindre le téléphone, boire une tisane et fermer les yeux avant minuit", "Faire du sport à minuit", "Manger avant de dormir"], answer: 1, why: "«Les médecins de la ville donnent trois conseils simples : éteindre le téléphone, boire une tisane et fermer les yeux avant minuit.»" },
      { q: "¿Por qué el sueño ayuda a aprender más rápido?", options: ["Parce que les professeurs chantent la nuit", "Parce que le sommeil répare le corps et la mémoire", "Parce que les tisanes sont magiques", "Parce que les écrans éclairent la chambre"], answer: 1, why: "«Le sommeil répare le corps et la mémoire.»" },
      { q: "¿Qué significa «le livre dort avant moi»?", options: ["Elle met le livre sous son oreiller", "Elle lit toute la nuit", "Elle arrête de réviser tard : maintenant, elle se repose plus tôt", "Le livre est vivant"], answer: 2, why: "«Avant, je révisais jusqu'à deux heures du matin. Maintenant, le livre dort avant moi.»" },
    ],
    discuss: [
      { it: "Combien d'heures dormez-vous chaque nuit ? C'est assez ?", es: "¿Cuántas horas duermes cada noche? ¿Es suficiente?" },
      { it: "Le téléphone dans la chambre le soir : bonne ou mauvaise habitude ?", es: "El teléfono en la habitación por la noche: ¿buena o mala costumbre?" },
    ],
  },

  /* ═══ A1 · 6 — Technologie · Dijon ═══ */
  {
    id: "fr-news-a1-06", cat: "tecnologia", level: "A1", place: "Dijon", minutes: 2,
    title: "À Dijon, les lampadaires font la sieste",
    titleEs: "En Dijon, las farolas echan la siesta",
    lead: {
      it: "À Dijon, les lampadaires s'éteignent tout seuls après minuit. Résultat : une ville plus sombre, un ciel plus étoilé et une facture plus légère.",
      es: "En Dijon, las farolas se apagan solas después de medianoche. Resultado: una ciudad más oscura, un cielo con más estrellas y una factura más ligera.",
    },
    paragraphs: [
      { it: "À Dijon, les rues sont calmes après minuit. Les lampadaires aussi : ils baissent la lumière quand personne ne passe.",
      es: "En Dijon, las calles están tranquilas después de medianoche. Las farolas también: bajan la luz cuando no pasa nadie." },
      { it: "La ville installe des lampadaires intelligents. Ces lampes voient les voitures et les piétons avec de petits capteurs.",
      es: "La ciudad instala farolas inteligentes. Estas lámparas ven los coches y a los peatones con pequeños sensores." },
      { it: "Résultat : la nuit, la ville consomme moins d'électricité. Les astronomes sont contents aussi, car le ciel est plus sombre et les étoiles brillent.",
      es: "Resultado: de noche, la ciudad consume menos electricidad. Los astrónomos también están contentos, porque el cielo está más oscuro y brillan las estrellas." },
      { it: "Un habitant résume le changement avec humour : « La lumière suit les gens maintenant. Elle se couche avec eux. »",
      es: "Un vecino resume el cambio con humor: «Ahora la luz sigue a la gente. Se acuesta con ellos.»" },
    ],
    words: [
      { it: "le lampadaire", es: "la farola" },
      { it: "la lumière", es: "la luz" },
      { it: "le capteur", es: "el sensor" },
      { it: "le piéton", es: "el peatón" },
      { it: "la nuit", es: "la noche" },
      { it: "sombre", es: "oscuro", note: "falso amigo visual : no significa «hombre», significa «oscuro»" },
    ],
    questions: [
      { q: "¿Qué hacen las farolas de Dijon después de medianoche?", options: ["Elles baissent la lumière quand personne ne passe", "Elles s'allument toutes", "Elles changent de couleur", "Elles disparaissent"], answer: 0, why: "«Ils baissent la lumière quand personne ne passe.»" },
      { q: "¿Cómo ven las lámparas a los coches y a los peatones?", options: ["Avec une caméra géante", "Avec de petits capteurs", "Avec l'aide des voisins", "Elles ne voient rien du tout"], answer: 1, why: "«Ces lampes voient les voitures et les piétons avec de petits capteurs.»" },
      { q: "¿Por qué están contentos también los astrónomos?", options: ["Parce qu'ils aiment Dijon", "Parce que le ciel est plus sombre et les étoiles brillent", "Parce que les factures baissent pour eux", "Parce que les lampes sont jolies"], answer: 1, why: "«Les astronomes sont contents aussi, car le ciel est plus sombre et les étoiles brillent.»" },
      { q: "¿Qué quiere decir el vecino con su broma?", options: ["La lumière se couche quand la ville dort", "La ville reste éclairée toute la nuit", "Les gens se couchent trop tard", "La lumière réveille les habitants"], answer: 0, why: "«La lumière suit les gens maintenant. Elle se couche avec eux.»" },
    ],
    discuss: [
      { it: "Dans votre ville, les rues sont trop éclairées la nuit ? Expliquez.", es: "En tu ciudad, ¿las calles están demasiado iluminadas de noche? Explícalo." },
      { it: "Voir les étoiles depuis chez vous : est-ce possible ? Quand ?", es: "Ver las estrellas desde tu casa: ¿es posible? ¿Cuándo?" },
    ],
  },

  /* ═══ A1 · 7 — Culture · Angoulême ═══ */
  {
    id: "fr-news-a1-07", cat: "cultura", level: "A1", place: "Angoulême", minutes: 2,
    title: "Angoulême, capitale de la bande dessinée",
    titleEs: "Angulema, capital del cómic",
    lead: {
      it: "Chaque mois de janvier, Angoulême devient la capitale de la bande dessinée. Pendant trois jours, la petite ville lit des images.",
      es: "Cada mes de enero, Angulema se convierte en la capital del cómic. Durante tres días, la pequeña ciudad lee imágenes.",
    },
    paragraphs: [
      { it: "Chaque année, en janvier, la petite ville d'Angoulême accueille un grand festival. Les amateurs de bande dessinée viennent de toute la France.",
      es: "Cada año, en enero, la pequeña ciudad de Angulema acoge un gran festival. Los aficionados al cómic vienen de toda Francia." },
      { it: "Pendant trois jours, les rues sont pleines de dessins. Les auteurs signent leurs livres et les enfants découvrent de nouveaux héros.",
      es: "Durante tres días, las calles están llenas de dibujos. Los autores firman sus libros y los niños descubren héroes nuevos." },
      { it: "Le festival n'est pas seulement une fête : c'est aussi une école. Des ateliers apprennent aux visiteurs à dessiner un visage ou une case.",
      es: "El festival no es solo una fiesta: también es una escuela. Unos talleres enseñan a los visitantes a dibujar una cara o una viñeta." },
      { it: "Une dessinatrice explique sa passion : « Une case vide, c'est comme une page blanche. On peut y mettre tout un monde. »",
      es: "Una dibujante explica su pasión: «Una viñeta vacía es como una página en blanco. Se puede meter dentro un mundo entero.»" },
    ],
    words: [
      { it: "la bande dessinée", es: "el cómic" },
      { it: "le festival", es: "el festival" },
      { it: "un auteur", es: "un autor" },
      { it: "un atelier", es: "un taller" },
      { it: "la case", es: "la viñeta" },
      { it: "dessiner", es: "dibujar" },
    ],
    questions: [
      { q: "¿Cuándo y dónde se celebra el gran festival?", options: ["En janvier, à Angoulême", "En juillet, à Paris", "En décembre, à Lyon", "Chaque mois, à Bordeaux"], answer: 0, why: "«Chaque année, en janvier, la petite ville d'Angoulême accueille un grand festival.»" },
      { q: "¿Qué hacen los autores en el festival?", options: ["Ils signent leurs livres", "Ils dorment dans les ateliers", "Ils cuisinent des crêpes", "Ils chantent sur scène"], answer: 0, why: "«Les auteurs signent leurs livres et les enfants découvrent de nouveaux héros.»" },
      { q: "¿Qué enseñan los talleres a los visitantes?", options: ["À conduire une moto", "À cuisiner des crêpes", "À dessiner un visage ou une case", "À danser la valse"], answer: 2, why: "«Des ateliers apprennent aux visiteurs à dessiner un visage ou une case.»" },
      { q: "¿Con qué compara la dibujante una viñeta vacía?", options: ["Un livre fermé", "Une page blanche où l'on peut mettre tout un monde", "Un mur sans fenêtre", "Une erreur à corriger"], answer: 1, why: "«Une case vide, c'est comme une page blanche. On peut y mettre tout un monde.»" },
    ],
    discuss: [
      { it: "Vous lisez des bandes dessinées ? Lesquelles ?", es: "¿Lees cómics? ¿Cuáles?" },
      { it: "Une image peut-elle raconter plus qu'une page de texte ? Discutez.", es: "¿Puede una imagen contar más que una página de texto? Discútelo." },
    ],
  },

  /* ═══ A1 · 8 — Économie · Roquefort ═══ */
  {
    id: "fr-news-a1-08", cat: "economia", level: "A1", place: "Roquefort", minutes: 2,
    title: "Le fromage qui fait vivre un village",
    titleEs: "El queso que da vida a un pueblo",
    lead: {
      it: "Dans l'Aveyron, un village de six cents habitants vit d'un fromage bleu. Les caves sont toujours pleines, et les visiteurs aussi.",
      es: "En el Aveyron, un pueblo de seiscientos habitantes vive de un queso azul. Las cuevas están siempre llenas, y los visitantes también.",
    },
    paragraphs: [
      { it: "Dans le sud de l'Aveyron, un petit village vit d'un seul produit : le fromage. C'est le roquefort, un fromage bleu très célèbre.",
      es: "En el sur del Aveyron, un pequeño pueblo vive de un solo producto: el queso. Es el roquefort, un queso azul muy famoso." },
      { it: "Les caves du village gardent des milliers de fromages. Le vent humide de la montagne traverse les murs et fait le travail.",
      es: "Las cuevas del pueblo guardan miles de quesos. El viento húmedo de la montaña atraviesa los muros y hace el trabajo." },
      { it: "Les visiteurs arrivent de partout. Ils goûtent, ils achètent et ils parlent du fromage pendant tout le voyage de retour.",
      es: "Los visitantes llegan de todas partes. Prueban, compran y hablan del queso durante todo el viaje de regreso." },
      { it: "Un producteur sourit devant les caisses pleines : « Le monde change, mais ici, la recette ne change pas. C'est notre richesse. »",
      es: "Un productor sonríe ante las cajas llenas: «El mundo cambia, pero aquí la receta no cambia. Es nuestra riqueza.»" },
    ],
    words: [
      { it: "le fromage", es: "el queso" },
      { it: "la cave", es: "la cueva, la bodega" },
      { it: "le visiteur", es: "el visitante" },
      { it: "le produit", es: "el producto" },
      { it: "la recette", es: "la receta" },
      { it: "célèbre", es: "famoso" },
    ],
    questions: [
      { q: "¿De qué producto vive el pequeño pueblo del Aveyron?", options: ["Du fromage : le roquefort", "Du vin", "Du chocolat", "Des pommes"], answer: 0, why: "«Un petit village vit d'un seul produit : le fromage. C'est le roquefort, un fromage bleu très célèbre.»" },
      { q: "¿Qué atraviesa los muros de las cuevas?", options: ["Le soleil du midi", "Le vent humide de la montagne", "Les touristes pressés", "L'eau de la rivière"], answer: 1, why: "«Le vent humide de la montagne traverse les murs et fait le travail.»" },
      { q: "¿Qué hacen los visitantes durante el viaje de regreso?", options: ["Ils dorment dans le bus", "Ils goûtent, ils achètent et ils parlent du fromage pendant tout le voyage de retour", "Ils écoutent la radio", "Ils se plaignent du prix"], answer: 1, why: "«Ils goûtent, ils achètent et ils parlent du fromage pendant tout le voyage de retour.»" },
      { q: "¿Qué es la verdadera riqueza del pueblo, según el productor?", options: ["La recette qui ne change pas", "Les caisses pleines d'argent", "Le vent de la montagne", "Les touristes qui achètent tout"], answer: 0, why: "«Le monde change, mais ici, la recette ne change pas. C'est notre richesse.»" },
    ],
    discuss: [
      { it: "Quel produit fait la renommée de votre région ? Racontez.", es: "¿Qué producto da fama a tu región? Cuenta." },
      { it: "Le tourisme et la tradition : bons amis ou ennemis ?", es: "El turismo y la tradición: ¿buenos amigos o enemigos?" },
    ],
  },

  /* ═══ A1 · 9 — Sport · Chamonix ═══ */
  {
    id: "fr-news-a1-09", cat: "sport", level: "A1", place: "Chamonix", minutes: 2,
    title: "À Chamonix, la neige est un professeur",
    titleEs: "En Chamonix, la nieve es un profesor",
    lead: {
      it: "À Chamonix, l'hiver dure six mois. Alors l'école monte à la montagne : une semaine de ski, de neige et de devoirs.",
      es: "En Chamonix, el invierno dura seis meses. Así que la escuela sube a la montaña: una semana de esquí, nieve y deberes.",
    },
    paragraphs: [
      { it: "À Chamonix, l'hiver est long et la neige est partout. Pour les enfants de la ville, la montagne est une seconde école.",
      es: "En Chamonix, el invierno es largo y la nieve está por todas partes. Para los niños de la ciudad, la montaña es una segunda escuela." },
      { it: "Une semaine par an, les classes montent au domaine skiable. Les élèves apprennent le ski le matin et font les devoirs le soir, à l'hôtel.",
      es: "Una semana al año, las clases suben al dominio esquiable. Los alumnos aprenden esquí por la mañana y hacen los deberes por la noche, en el hotel." },
      { it: "Les professeurs notent la descente et la table de multiplication. Les enfants tombent souvent, mais ils se relèvent avec le sourire.",
      es: "Los profesores puntúan la bajada y la tabla de multiplicar. Los niños se caen a menudo, pero se levantan con una sonrisa." },
      { it: "Une directrice résume la semaine : « Ici, la piste est une classe. La neige enseigne la patience. »",
      es: "Una directora resume la semana: «Aquí la pista es una clase. La nieve enseña la paciencia.»" },
    ],
    words: [
      { it: "la neige", es: "la nieve" },
      { it: "le ski", es: "el esquí" },
      { it: "l'élève", es: "el alumno" },
      { it: "la piste", es: "la pista" },
      { it: "la descente", es: "la bajada" },
      { it: "la patience", es: "la paciencia" },
    ],
    questions: [
      { q: "¿Cuánto tiempo al año suben las clases al dominio esquiable?", options: ["Une semaine par an", "Un mois par an", "Toute l'année", "Deux jours par an"], answer: 0, why: "«Une semaine par an, les classes montent au domaine skiable.»" },
      { q: "¿Qué hacen los alumnos por la noche?", options: ["Ils regardent des films", "Ils skient à la lune", "Ils font les devoirs à l'hôtel", "Ils dorment dans la neige"], answer: 2, why: "«Les élèves apprennent le ski le matin et font les devoirs le soir, à l'hôtel.»" },
      { q: "¿Cómo reaccionan los niños cuando se caen?", options: ["Ils pleurent", "Ils se relèvent avec le sourire", "Ils appellent leurs parents", "Ils quittent la piste"], answer: 1, why: "«Les enfants tombent souvent, mais ils se relèvent avec le sourire.»" },
      { q: "¿Qué enseña la nieve, según la directora?", options: ["La vitesse", "La peur", "La chimie", "La patience"], answer: 3, why: "«Ici, la piste est une classe. La neige enseigne la patience.»" },
    ],
    discuss: [
      { it: "L'école doit-elle enseigner le ski ? Pourquoi pas ?", es: "¿Debe la escuela enseñar a esquiar? ¿Por qué no?" },
      { it: "Une chute, un sourire : apprenez-vous mieux par l'erreur ?", es: "Una caída, una sonrisa: ¿aprendes mejor del error?" },
    ],
  },

  /* ═══ A1 · 10 — Sciences · Brest ═══ */
  {
    id: "fr-news-a1-10", cat: "scienza", level: "A1", place: "Brest", minutes: 2,
    title: "À Brest, les scientifiques écoutent la mer",
    titleEs: "En Brest, los científicos escuchan el mar",
    lead: {
      it: "À Brest, des micros écoutent la mer jour et nuit. Les scientifiques y entendent des baleines, des bateaux et des tempêtes.",
      es: "En Brest, unos micrófonos escuchan el mar día y noche. Los científicos oyen en él ballenas, barcos y tormentas.",
    },
    paragraphs: [
      { it: "À Brest, en Bretagne, des scientifiques placent des micros sous l'eau. Ils veulent comprendre les bruits de la mer.",
      es: "En Brest, en Bretaña, unos científicos colocan micrófonos bajo el agua. Quieren comprender los ruidos del mar." },
      { it: "Les baleines chantent, les bateaux grondent, les tempêtes crient. Chaque semaine, la mer offre un concert différent.",
      es: "Las ballenas cantan, los barcos rugen, las tormentas gritan. Cada semana, el mar ofrece un concierto distinto." },
      { it: "Les enregistrements aident les chercheurs à protéger les animaux. Quand un bateau fait trop de bruit, les baleines quittent la zone.",
      es: "Las grabaciones ayudan a los investigadores a proteger a los animales. Cuando un barco hace demasiado ruido, las ballenas abandonan la zona." },
      { it: "Une chercheuse compare la mer à une personne : « La mer parle tout le temps. Notre travail, c'est de la comprendre. »",
      es: "Una investigadora compara el mar con una persona: «El mar habla todo el tiempo. Nuestro trabajo es comprenderlo.»" },
    ],
    words: [
      { it: "la baleine", es: "la ballena" },
      { it: "le bruit", es: "el ruido" },
      { it: "le bateau", es: "el barco" },
      { it: "le chercheur", es: "el investigador" },
      { it: "la tempête", es: "la tormenta" },
      { it: "protéger", es: "proteger" },
    ],
    questions: [
      { q: "¿Dónde colocan los micrófonos los científicos de Brest?", options: ["Sous l'eau", "Sur les toits", "Dans la forêt", "Sur la lune"], answer: 0, why: "«Des scientifiques placent des micros sous l'eau.»" },
      { q: "¿Qué hacen las ballenas, según la noticia?", options: ["Elles chantent", "Elles dorment", "Elles partent", "Elles nagent"], answer: 0, why: "«Les baleines chantent, les bateaux grondent, les tempêtes crient.»" },
      { q: "¿Cuándo abandonan las ballenas la zona?", options: ["Quand les micros s'allument", "Quand la mer est calme", "Quand un bateau fait trop de bruit", "Le dimanche"], answer: 2, why: "«Quand un bateau fait trop de bruit, les baleines quittent la zone.»" },
      { q: "¿Con qué compara la investigadora el mar?", options: ["Une montagne silencieuse", "Une personne qui parle tout le temps", "Un livre fermé", "Un robot"], answer: 1, why: "«La mer parle tout le temps. Notre travail, c'est de la comprendre.»" },
    ],
    discuss: [
      { it: "La mer parle : quelle « voix » de la nature préférez-vous écouter ?", es: "El mar habla: ¿qué «voz» de la naturaleza prefieres escuchar?" },
      { it: "Le bruit des villes ou le silence de la mer : où vous reposez-vous ?", es: "El ruido de las ciudades o el silencio del mar: ¿dónde descansas?" },
    ],
  },

  /* ═══ A1 · 11 — Environnement · Lille ═══ */
  {
    id: "fr-news-a1-11", cat: "ambiente", level: "A1", place: "Lille", minutes: 2,
    title: "Le marché de Lille dit non au plastique",
    titleEs: "El mercado de Lille dice no al plástico",
    lead: {
      it: "À Lille, le grand marché du dimanche change de look. Fini les sacs plastiques : place aux paniers et au tissu.",
      es: "En Lille, el gran mercado del domingo cambia de imagen. Se acabaron las bolsas de plástico: lugar a las cestas y a la tela.",
    },
    paragraphs: [
      { it: "À Lille, dans le nord de la France, le grand marché du dimanche change. Les vendeurs n'utilisent plus de sacs plastiques.",
      es: "En Lille, en el norte de Francia, el gran mercado del domingo cambia. Los vendedores ya no usan bolsas de plástico." },
      { it: "Maintenant, les clients apportent leurs propres sacs en tissu. Les fromages, les pommes et le pain voyagent dans des paniers.",
      es: "Ahora, los clientes llevan sus propias bolsas de tela. Los quesos, las manzanas y el pan viajan en cestas." },
      { it: "Résultat : moins de déchets dans les rues après le marché. Les agents de nettoyage sont contents et ont du temps libre.",
      es: "Resultado: menos residuos en las calles después del mercado. Los agentes de limpieza están contentos y tienen tiempo libre." },
      { it: "Une vendeuse de pommes résume la situation : « Le sac plastique, c'est fini. Le panier, c'est l'avenir. »",
      es: "Una vendedora de manzanas resume la situación: «La bolsa de plástico se acabó. La cesta es el futuro.»" },
    ],
    words: [
      { it: "le marché", es: "el mercado" },
      { it: "le sac plastique", es: "la bolsa de plástico" },
      { it: "le vendeur", es: "el vendedor" },
      { it: "le panier", es: "la cesta" },
      { it: "les déchets", es: "los residuos" },
      { it: "le tissu", es: "la tela" },
    ],
    questions: [
      { q: "¿Qué ya no usan los vendedores del mercado de Lille?", options: ["Les sacs plastiques", "Les paniers", "Les balances", "Les camions"], answer: 0, why: "«Les vendeurs n'utilisent plus de sacs plastiques.»" },
      { q: "¿Qué llevan ahora los clientes?", options: ["Des sacs du marché", "Rien du tout", "Leurs propres sacs en tissu", "Des cartons lourds"], answer: 2, why: "«Les clients apportent leurs propres sacs en tissu.»" },
      { q: "¿Por qué están contentos los agentes de limpieza?", options: ["Parce que le marché ferme plus tôt", "Parce qu'il y a moins de déchets et ils ont du temps libre", "Parce que les pommes sont bonnes", "Parce qu'ils aiment le bruit"], answer: 1, why: "«Résultat : moins de déchets dans les rues après le marché. Les agents de nettoyage sont contents et ont du temps libre.»" },
      { q: "¿Qué piensa la vendedora sobre el futuro?", options: ["Le panier, c'est l'avenir", "Le plastique va revenir", "Le marché va fermer", "Les sacs sont plus jolis"], answer: 0, why: "«Le sac plastique, c'est fini. Le panier, c'est l'avenir.»" },
    ],
    discuss: [
      { it: "Vous utilisez des sacs en tissu pour le marché ? Depuis quand ?", es: "¿Usas bolsas de tela para el mercado? ¿Desde cuándo?" },
      { it: "Dans votre pays, le plastique disparaît des marchés ? Donnez un exemple.", es: "En tu país, ¿desaparece el plástico de los mercados? Da un ejemplo." },
    ],
  },

  /* ═══ A1 · 12 — Société · Strasbourg ═══ */
  {
    id: "fr-news-a1-12", cat: "societa", level: "A1", place: "Strasbourg", minutes: 2,
    title: "Les cafés polyglottes de Strasbourg",
    titleEs: "Los cafés políglotas de Estrasburgo",
    lead: {
      it: "À Strasbourg, un café organise des soirées polyglottes. On y change de langue comme on change de table.",
      es: "En Estrasburgo, un café organiza veladas políglotas. Allí se cambia de idioma como se cambia de mesa.",
    },
    paragraphs: [
      { it: "À Strasbourg, près de la cathédrale, un café organise une soirée spéciale. Le mardi soir, on vient pour parler des langues.",
      es: "En Estrasburgo, cerca de la catedral, un café organiza una velada especial. Los martes por la noche, se viene a hablar idiomas." },
      { it: "Chaque table a une langue : français, espagnol, allemand ou italien. Les débutants ont peur au début, mais l'ambiance est chaleureuse.",
      es: "Cada mesa tiene un idioma: francés, español, alemán o italiano. Los principiantes tienen miedo al principio, pero el ambiente es acogedor." },
      { it: "Après une heure, les timides parlent. Les serveurs donnent des biscuits et corrigent les erreurs avec le sourire.",
      es: "Después de una hora, los tímidos hablan. Los camareros dan galletas y corrigen los errores con una sonrisa." },
      { it: "Une habituée explique le secret : « Ici, personne n'est étranger. Une erreur, c'est juste le début d'une phrase. »",
      es: "Una clienta habitual explica el secreto: «Aquí nadie es extranjero. Un error es solo el principio de una frase.»" },
    ],
    words: [
      { it: "la langue", es: "el idioma, la lengua" },
      { it: "le débutant", es: "el principiante" },
      { it: "l'ambiance", es: "el ambiente" },
      { it: "le serveur", es: "el camarero" },
      { it: "une erreur", es: "un error" },
      { it: "parler", es: "hablar" },
    ],
    questions: [
      { q: "¿Cuándo organiza el café la velada especial?", options: ["Le mardi soir", "Le samedi matin", "Tous les soirs", "Le dimanche"], answer: 0, why: "«Le mardi soir, on vient pour parler des langues.»" },
      { q: "¿Qué lenguas hay en las mesas?", options: ["Français et portugais seulement", "Une seule langue", "Aucune langue", "Français, espagnol, allemand ou italien"], answer: 3, why: "«Chaque table a une langue : français, espagnol, allemand ou italien.»" },
      { q: "¿Qué pasa después de una hora?", options: ["Tout le monde part", "Les timides parlent", "Le café ferme", "Les serveurs dansent"], answer: 1, why: "«Après une heure, les timides parlent.»" },
      { q: "¿Qué quiere decir la clienta habitual?", options: ["Personne n'est étranger : une erreur est le début d'une phrase", "Les erreurs sont interdites ici", "Il faut parler parfaitement", "Les étrangers doivent écouter"], answer: 0, why: "«Ici, personne n'est étranger. Une erreur, c'est juste le début d'une phrase.»" },
    ],
    discuss: [
      { it: "Un café polyglotte près de chez vous : quelle langue choisissez-vous en premier ?", es: "Un café políglota cerca de tu casa: ¿qué idioma eliges primero?" },
      { it: "Parler une langue étrangère devant des inconnus : peur ou plaisir ?", es: "Hablar un idioma extranjero delante de desconocidos: ¿miedo o placer?" },
    ],
  },

  /* ═══ A1 · 13 — Histoire · Paris ═══ */
  {
    id: "fr-news-a1-13", cat: "storia", level: "A1", place: "Paris", minutes: 2,
    title: "Le métro de Paris garde ses secrets",
    titleEs: "El metro de París guarda sus secretos",
    lead: {
      it: "Le métro de Paris a plus d'un siècle. Sous les rues, les stations gardent les carreaux, les lampes et les secrets du début.",
      es: "El metro de París tiene más de un siglo. Bajo las calles, las estaciones guardan los azulejos, las lámparas y los secretos del principio.",
    },
    paragraphs: [
      { it: "Le métro de Paris ouvre ses portes en mille neuf cents. La première ligne traverse la ville pour l'exposition universelle.",
      es: "El metro de París abre sus puertas en mil novecientos. La primera línea atraviesa la ciudad para la exposición universal." },
      { it: "Les entrées sont des œuvres d'art, avec des lampes et des fleurs en fer. Certaines stations gardent leurs carrelages d'origine.",
      es: "Las entradas son obras de arte, con lámparas y flores de hierro. Algunas estaciones conservan sus azulejos de origen." },
      { it: "Aujourd'hui, des millions de voyageurs descendent dans ces salles centenaires chaque jour. Le train arrive toutes les deux minutes.",
      es: "Hoy, millones de viajeros bajan a estas salas centenarias cada día. El tren llega cada dos minutos." },
      { it: "Un agent de la station a une image simple : « Le métro est un livre d'histoire. Chaque station est une page, et les pages tournent vite. »",
      es: "Un agente de la estación tiene una imagen simple: «El metro es un libro de historia. Cada estación es una página, y las páginas pasan rápido.»" },
    ],
    words: [
      { it: "le métro", es: "el metro" },
      { it: "la station", es: "la estación" },
      { it: "le voyageur", es: "el viajero" },
      { it: "l'entrée", es: "la entrada" },
      { it: "le carrelage", es: "el alicatado, los azulejos" },
      { it: "une page", es: "una página" },
    ],
    questions: [
      { q: "¿Cuándo abre sus puertas el metro de París?", options: ["En mille neuf cents", "En deux mille", "En mille huit cents", "L'année dernière"], answer: 0, why: "«Le métro de Paris ouvre ses portes en mille neuf cents.»" },
      { q: "¿Cómo son las entradas del metro?", options: ["Des portes en plastique", "Des œuvres d'art, avec des lampes et des fleurs en fer", "Des tunnels sombres", "Des magasins modernes"], answer: 1, why: "«Les entrées sont des œuvres d'art, avec des lampes et des fleurs en fer.»" },
      { q: "¿Con qué frecuencia llega el tren?", options: ["Toutes les heures", "Une fois par jour", "Toutes les deux minutes", "Jamais"], answer: 2, why: "«Le train arrive toutes les deux minutes.»" },
      { q: "¿Con qué compara el agente el metro?", options: ["Un jardin public", "Un livre d'histoire : chaque station est une page", "Un match de football", "Une gare de campagne"], answer: 1, why: "«Le métro est un livre d'histoire. Chaque station est une page, et les pages tournent vite.»" },
    ],
    discuss: [
      { it: "Le métro de votre ville a-t-il une histoire ? Laquelle ?", es: "¿El metro de tu ciudad tiene historia? ¿Cuál?" },
      { it: "Vieilles stations ou stations nouvelles : où voyagez-vous mieux ?", es: "Estaciones viejas o estaciones nuevas: ¿dónde viajas mejor?" },
    ],
  },

  /* ═══ A1 · 14 — Culture · Paris ═══ */
  {
    id: "fr-news-a1-14", cat: "cultura", level: "A1", place: "Paris", minutes: 2,
    title: "La baguette entre au patrimoine mondial",
    titleEs: "La baguette entra en el patrimonio mundial",
    lead: {
      it: "La baguette de pain entre sur la liste du patrimoine mondial. À Paris, les boulangers fêtent la nouvelle avec fierté.",
      es: "La baguete de pan entra en la lista del patrimonio mundial. En París, los panaderos celebran la noticia con orgullo.",
    },
    paragraphs: [
      { it: "La baguette de pain est maintenant sur une liste mondiale. L'UNESCO protège le savoir-faire des boulangers français.",
      es: "La baguete de pan está ahora en una lista mundial. La UNESCO protege el saber hacer de los panaderos franceses." },
      { it: "À Paris, chaque quartier a sa boulangerie. Le boulanger travaille la nuit et le pain sort du four à six heures du matin.",
      es: "En París, cada barrio tiene su panadería. El panadero trabaja de noche y el pan sale del horno a las seis de la mañana." },
      { it: "Les clients attendent devant la vitrine. Pour beaucoup de Français, la baguette est le début de chaque repas.",
      es: "Los clientes esperan delante del escaparate. Para muchos franceses, la baguete es el comienzo de cada comida." },
      { it: "Une boulangère parle de son métier avec fierté : « Le pain, c'est la culture. Une bonne baguette, c'est une petite musique. »",
      es: "Una panadera habla de su oficio con orgullo: «El pan es cultura. Una buena baguete es una pequeña música.»" },
    ],
    words: [
      { it: "la baguette", es: "la baguete, la barra de pan" },
      { it: "le boulanger", es: "el panadero" },
      { it: "la boulangerie", es: "la panadería" },
      { it: "le four", es: "el horno" },
      { it: "le quartier", es: "el barrio" },
      { it: "le savoir-faire", es: "el saber hacer", note: "en francés es una sola palabra con guiones" },
    ],
    questions: [
      { q: "¿Quién protege el saber hacer de los panaderos?", options: ["L'UNESCO", "La mairie de Paris", "Les clients du quartier", "Les boulangers eux-mêmes"], answer: 0, why: "«L'UNESCO protège le savoir-faire des boulangers français.»" },
      { q: "¿Cuándo sale el pan del horno?", options: ["À midi", "À minuit", "À six heures du matin", "Le week-end"], answer: 2, why: "«Le boulanger travaille la nuit et le pain sort du four à six heures du matin.»" },
      { q: "¿Qué es la baguette para muchos franceses?", options: ["Le début de chaque repas", "Un dessert du dimanche", "Un souvenir de voyage", "Un objet de décoration"], answer: 0, why: "«Pour beaucoup de Français, la baguette est le début de chaque repas.»" },
      { q: "¿A qué compara la panadera una buena baguete?", options: ["À un tableau de maître", "À une petite musique", "À un roman policier", "À un film"], answer: 1, why: "«Une bonne baguette, c'est une petite musique.»" },
    ],
    discuss: [
      { it: "Le pain de votre pays ressemble-t-il à la baguette ? Décrivez-le.", es: "¿El pan de tu país se parece a la baguete? Descríbelo." },
      { it: "Le patrimoine doit-il protéger aussi les gestes et les recettes ? Discutez.", es: "¿Debe el patrimonio proteger también los gestos y las recetas? Discútelo." },
    ],
  },

  /* ═══ A1 · 15 — Sport · Nice ═══ */
  {
    id: "fr-news-a1-15", cat: "sport", level: "A1", place: "Nice", minutes: 2,
    title: "Le football des filles gagne du terrain",
    titleEs: "El fútbol de las chicas gana terreno",
    lead: {
      it: "À Nice, un club de football ouvre ses équipes aux filles. Le mercredi, après l'école, le terrain est plein.",
      es: "En Niza, un club de fútbol abre sus equipos a las chicas. El miércoles, después del colegio, el campo está lleno.",
    },
    paragraphs: [
      { it: "À Nice, sur un terrain près de la mer, un club de football change. Maintenant, la moitié des équipes est féminine.",
      es: "En Niza, en un campo cerca del mar, un club de fútbol cambia. Ahora, la mitad de los equipos es femenina." },
      { it: "Les filles s'entraînent le mercredi, après l'école. Elles courent, elles passent le ballon et elles marquent des buts.",
      es: "Las chicas entrenan el miércoles, después del colegio. Corren, pasan el balón y marcan goles." },
      { it: "Les parents applaudissent à chaque match. Le club organise même des tournois mixtes : garçons et filles sur le même terrain.",
      es: "Los padres aplauden en cada partido. El club organiza incluso torneos mixtos: chicos y chicas en el mismo campo." },
      { it: "Une jeune joueuse aime cette nouvelle vie : « Le foot, avant, c'est un sport pour la télé. Maintenant, c'est notre sport à nous. »",
      es: "Una joven jugadora ama esta vida nueva: «Antes, el fútbol era un deporte para la tele. Ahora es nuestro deporte.»" },
    ],
    words: [
      { it: "le football", es: "el fútbol" },
      { it: "s'entraîner", es: "entrenarse, entrenar" },
      { it: "le ballon", es: "el balón" },
      { it: "marquer un but", es: "marcar un gol" },
      { it: "le terrain", es: "el campo" },
      { it: "une équipe", es: "un equipo" },
    ],
    questions: [
      { q: "¿Quién forma ahora la mitad de los equipos del club?", options: ["Les filles", "Les garçons seulement", "Les parents", "Les touristes"], answer: 0, why: "«Maintenant, la moitié des équipes est féminine.»" },
      { q: "¿Cuándo entrenan las chicas?", options: ["Le samedi matin", "La nuit", "Pendant les vacances", "Le mercredi, après l'école"], answer: 3, why: "«Les filles s'entraînent le mercredi, après l'école.»" },
      { q: "¿Qué organiza además el club?", options: ["Des matchs sans spectateurs", "Des tournois mixtes : garçons et filles sur le même terrain", "Des cours de cuisine", "Rien du tout"], answer: 1, why: "«Le club organise même des tournois mixtes : garçons et filles sur le même terrain.»" },
      { q: "¿Qué siente la joven jugadora?", options: ["Fière : le foot est maintenant « leur » sport, pas seulement un sport pour la télé", "Triste, car le club ferme", "En colère contre les parents", "Fatiguée des matchs"], answer: 0, why: "«Le foot, avant, c'est un sport pour la télé. Maintenant, c'est notre sport à nous.»" },
    ],
    discuss: [
      { it: "Dans votre ville, les filles jouent-elles au football ? Racontez.", es: "En tu ciudad, ¿juegan las chicas al fútbol? Cuenta." },
      { it: "Sport d'équipe ou sport individuel : lequel vous convient ?", es: "Deporte de equipo o deporte individual: ¿cuál te va bien?" },
    ],
  },
];
