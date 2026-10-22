/* ── FR · Notizie B2 — lote b (v9.39) ─────────────────────────────────
   Actualités en français de France, niveau B2 (suite) : 12 items,
   ids fr-news-b2-04 … fr-news-b2-15. Méthode VOA Learning English :
   corps de 4 paragraphes ≈ 205-295 mots, subjonctif présent,
   conditionnel présent et discours indirect, minutes 4. Champs `.it`
   = français (langue étudiée), `.es` = espagnol. Avec news-b.ts,
   le niveau B2 couvre les 9 catégories. */

import type { NewsItem } from "../../news";

export const FR_NEWS_B2B: NewsItem[] = [

  /* ═══ B2 · 4 — Environnement · Tours ═══ */
  {
    id: "fr-news-b2-04", cat: "ambiente", level: "B2", place: "Tours", minutes: 4,
    title: "La Loire reprend son lit à Tours",
    titleEs: "El Loira recupera su cauce en Tours",
    lead: {
      it: "Pendant cent cinquante ans, on a serré la Loire contre la ville pour accélérer son courant. Aujourd'hui, les ingénieurs font l'inverse : ils retirent les digues une à une, pour que le fleuve respire.",
      es: "Durante ciento cincuenta años se estrechó el Loira contra la ciudad para acelerar su corriente. Hoy los ingenieros hacen lo contrario: retiran los diques uno a uno, para que el río respire.",
    },
    paragraphs: [
      { it: "Depuis le dix-neuvième siècle, la Loire a été traitée comme un canal : des digues de pierre la serraient contre la ville, pour accélérer le courant et protéger les quais. Les crues, canalisées, montaient plus vite et plus haut. Les ingénieurs d'autrefois croyaient bien faire ; le fleuve, lui, a perdu la moitié de ses îles.",
      es: "Desde el siglo diecinueve, el Loira fue tratado como un canal: diques de piedra lo estrechaban contra la ciudad, para acelerar la corriente y proteger los muelles. Las crecidas, canalizadas, subían más rápido y más alto. Los ingenieros de entonces creían hacer bien; el río, en cambio, perdió la mitad de sus islas." },
      { it: "Depuis trois étés, un chantier inverse le mouvement. Les équipes démontent les digues une à une, afin que l'eau puisse s'étaler de nouveau sur les grèves. La technique surprend : on n'ajoute rien, on retire. « On a compris que le meilleur protecteur de la ville, c'était le fleuve lui-même », explique Camille Perrin, directrice du chantier. Elle a ajouté que les vieilles pierres coûteraient plus cher à entretenir qu'à démonter.",
      es: "Desde hace tres veranos, una obra invierte el movimiento. Los equipos desmontan los diques uno a uno, para que el agua pueda extenderse de nuevo sobre las orillas de arena. La técnica sorprende: no se añade nada, se retira. «Hemos entendido que el mejor protector de la ciudad era el propio río», explica Camille Perrin, directora de la obra. Añadió que las viejas piedras costarían más mantenerlas que desmontarlas." },
      { it: "Les premiers résultats dépassent les prévisions. De nouvelles îles se reforment ; les oiseaux nicheurs reviennent ; les grèves de sable filtrent l'eau. Les scientifiques estiment que la température du fleuve baisserait encore d'un degré en été, si le courant ralentissait. Bien que le chantier soit loin d'être terminé, la ville envisage déjà d'étendre la méthode à d'autres berges.",
      es: "Los primeros resultados superan las previsiones. Se vuelven a formar islas nuevas; regresan las aves nidificantes; los bancos de arena filtran el agua. Los científicos estiman que la temperatura del río bajaría todavía un grado en verano, si la corriente se ralentizara. Aunque la obra esté lejos de terminarse, la ciudad piensa ya en extender el método a otras riberas." },
      { it: "Le prochain débat portera sur les îles : il faudra que les Tourangeaux acceptent de ne pas tout aménager. La Loire, elle, ne demande rien. Elle étale ses sables, prend son temps, comme si elle n'était jamais partie. Les hérons, eux, pêchent déjà sur les nouvelles îles.",
      es: "El próximo debate girará en torno a las islas: los de Tours tendrán que aceptar que no se puede arreglar todo. El Loira no pide nada. Extiende sus arenas, toma su tiempo, como si nunca se hubiera ido. Las garzas, por su parte, ya pescan en las islas nuevas." },
    ],
    words: [
      { it: "la digue / les digues", es: "el dique / los diques" },
      { it: "une crue / les crues", es: "una crecida / las crecidas" },
      { it: "la grève / les grèves", es: "la orilla de arena", note: "aquí «banco de arena del río»; «la grève» también significa «huelga»" },
      { it: "le chantier", es: "la obra, el chantier" },
      { it: "un oiseau nicheur / les oiseaux nicheurs", es: "un ave nidificante / las aves nidificantes" },
      { it: "démonter", es: "desmontar" },
    ],
    questions: [
      { q: "¿Qué hacen hoy los ingenieros con los diques?", options: ["Ils ont construit de nouvelles digues", "Ils les démontent une à une, afin que l'eau puisse s'étaler de nouveau", "Ils les ont remplacées par des murs", "Ils les ont vendues"], answer: 1, why: "«Les équipes démontent les digues une à une, afin que l'eau puisse s'étaler de nouveau sur les grèves»" },
      { q: "¿Qué perdió el río con las viejas obras?", options: ["La moitié de ses îles", "Son nom", "Sa couleur", "Sa source"], answer: 0, why: "«le fleuve, lui, a perdu la moitié de ses îles»" },
      { q: "¿Por qué sorprende la técnica del chantier?", options: ["Parce qu'elle coûte très cher", "Parce qu'elle exige des robots", "Parce qu'on ajoute du béton nouveau", "Parce qu'on n'ajoute rien : on retire"], answer: 3, why: "«La technique surprend : on n'ajoute rien, on retire»" },
      { q: "¿Qué se pedirá a los habitantes de Tours?", options: ["Attendre que la ville décide", "Tout aménager rapidement", "Accepter que le fleuve garde son espace", "Interdire l'accès aux berges"], answer: 2, why: "«il faudra que les Tourangeaux acceptent de ne pas tout aménager»" },
    ],
    discuss: [
      { it: "Faut-il laisser une rivière reprendre son espace, même au prix du confort urbain ?", es: "¿Hay que dejar que un río recupere su espacio, incluso a costa del confort urbano?" },
      { it: "Votre ville a-t-elle « corrigé » une rivière ? Que feriez-vous aujourd'hui ?", es: "¿Ha «corregido» tu ciudad algún río? ¿Qué harías hoy?" },
    ],
  },

  /* ═══ B2 · 5 — Santé · Orléans ═══ */
  {
    id: "fr-news-b2-05", cat: "salute", level: "B2", place: "Orléans", minutes: 4,
    title: "À l'hôpital d'Orléans, la sieste devient une ordonnance",
    titleEs: "En el hospital de Orleans, la siesta se convierte en receta",
    lead: {
      it: "Travailler de nuit use les équipes : les études le répètent depuis quarante ans. À l'hôpital d'Orléans, la médecine a trouvé une arme ancienne — une pièce obscure, six fauteuils, vingt minutes.",
      es: "Trabajar de noche desgasta a los equipos: los estudios lo repiten desde hace cuarenta años. En el hospital de Orleans, la medicina encontró un arma antigua — una sala en penumbra, seis sillones, veinte minutos.",
    },
    paragraphs: [
      { it: "Le service de réanimation a ouvert cette année une salle réservée aux soignants : pas de fenêtre, des fauteuils inclinables, une lumière douce. Le protocole est strict — vingt minutes entre midi et quatorze heures, pas davantage. Les volontaires s'y rendent après le repas ; la plupart s'endorment en moins de cinq minutes. Les réveils se font en douceur, jamais en lumière forte ; un carnet note les heures.",
      es: "El servicio de reanimación abrió este año una sala reservada al personal sanitario: sin ventanas, sillones reclinables, luz suave. El protocolo es estricto — veinte minutos entre las doce y las catorce, ni uno más. Los voluntarios van después de comer; la mayoría se duerme en menos de cinco minutos. Los despertares son suaves, nunca con luz fuerte; un cuaderno anota las horas." },
      { it: "« La nuit, le corps ne pardonne pas, prévient le docteur Bertrand Sellier, responsable du sommeil. Un soignant éveillé depuis trente heures commet plus d'erreurs qu'un conducteur au bord de la route. Il faut que l'hôpital protège ses équipes comme il protège ses patients. »",
      es: "«De noche, el cuerpo no perdona», advierte el doctor Bertrand Sellier, responsable del sueño. «Un sanitario despierto desde hace treinta horas comete más errores que un conductor al límite. Hace falta que el hospital proteja a sus equipos como protege a sus pacientes.»" },
      { it: "Les premiers chiffres sont nets : chez les volontaires réguliers, les erreurs d'après-midi ont baissé d'un tiers. Le médecin a expliqué que la sieste courte améliorerait la vigilance sans casser le sommeil profond de la nuit suivante ; il a ajouté qu'un réveil brutal détruirait le bénéfice entier.",
      es: "Las primeras cifras son claras: entre los voluntarios regulares, los errores de la tarde bajaron un tercio. El médico explicó que la siesta corta mejoraría el estado de alerta sin romper el sueño profundo de la noche siguiente; añadió que un despertar brusco destruiría el beneficio entero." },
      { it: "La direction souhaiterait étendre la pièce aux urgences, à condition que le budget suive. Bien que l'essai soit modeste, les visiteurs demandent déjà leur fauteuil ; une deuxième salle ouvrira à l'automne, et les infirmières de nuit attendent leur tour. Les soignants, eux, n'attendent pas la science : ils savaient qu'une paupière fermée vaut mieux qu'un café.",
      es: "La dirección quisiera extender la sala a urgencias, a condición de que el presupuesto acompañe. Aunque la prueba sea modesta, los visitantes ya piden su sillón; una segunda sala abrirá en otoño, y las enfermeras nocturnas esperan su turno. El personal sanitario, por su parte, no espera a la ciencia: sabían que un párpado cerrado vale más que un café." },
    ],
    words: [
      { it: "la sieste", es: "la siesta" },
      { it: "un soignant / les soignants", es: "el personal sanitario" },
      { it: "le sommeil", es: "el sueño" },
      { it: "la vigilance", es: "el estado de alerta", note: "aquí «capacidad de estar alerta», no vigilancia policial" },
      { it: "un volontaire / les volontaires", es: "un voluntario / los voluntarios" },
      { it: "la réanimation", es: "la reanimación" },
    ],
    questions: [
      { q: "¿Cuánto dura la siesta permitida y en qué franja?", options: ["Dix minutes, avant huit heures", "Vingt minutes, entre midi et quatorze heures", "Cinq minutes, à l'aube", "Une heure, la nuit"], answer: 1, why: "«vingt minutes entre midi et quatorze heures, pas davantage»" },
      { q: "¿Cuánto bajaron los errores de la tarde?", options: ["De moitié", "Pas du tout", "D'un quart", "D'un tiers"], answer: 3, why: "«les erreurs d'après-midi ont baissé d'un tiers»" },
      { q: "¿Qué destruiría el beneficio entero?", options: ["Un réveil brutal", "Une sieste plus longue", "Un repas léger", "Une pièce claire"], answer: 0, why: "«un réveil brutal détruirait le bénéfice entier»" },
      { q: "¿Qué sugiere el cierre sobre los sanitarios?", options: ["Qu'ils préféraient le café", "Qu'ils refusent de dormir", "Qu'ils connaissaient déjà la valeur de la sieste", "Qu'ils travaillent mieux le soir"], answer: 2, why: "«ils savaient qu'une paupière fermée vaut mieux qu'un café»" },
    ],
    discuss: [
      { it: "La sieste au travail : progrès ou paresse déguisée ?", es: "La siesta en el trabajo: ¿progreso o pereza disfrazada?" },
      { it: "Quelles autres « armes anciennes » la médecine moderne devrait-elle réapprendre ?", es: "¿Qué otras «armas antiguas» debería reaprender la medicina moderna?" },
    ],
  },

  /* ═══ B2 · 6 — Technologie · Poitiers ═══ */
  {
    id: "fr-news-b2-06", cat: "tecnologia", level: "B2", place: "Poitiers", minutes: 4,
    title: "À Poitiers, l'atelier qui répare au lieu de jeter",
    titleEs: "En Poitiers, el taller que repara en vez de tirar",
    lead: {
      it: "Chaque samedi matin, une salle de la médiathèque de Poitiers sent la soudure et le café. Des étudiants, des retraités et des lycéens y ressuscitent des appareils que la mode avait condamnés.",
      es: "Cada sábado por la mañana, una sala de la mediateca de Poitiers huele a soldadura y a café. Estudiantes, jubilados y alumnos de instituto devuelven a la vida aparatos que la moda había condenado.",
    },
    paragraphs: [
      { it: "L'idée est partie d'un constat : en France, les appareils sont remplacés tous les trois ans, souvent pour une pièce qui coûte quelques euros. À la médiathèque, on ouvre, on soude, on efface les mémoires des anciens propriétaires. Les bénévoles travaillent gratuitement, à condition que les visiteurs repartent avec les mains un peu grasses — le geste, sinon rien. Les pièces détachées viennent d'appareils morts, collectés par la ville ; un coin café attend les découragés.",
      es: "La idea nació de una constatación: en Francia, los aparatos se reemplazan cada tres años, a menudo por una pieza que cuesta unos pocos euros. En la mediateca se abre, se suelda, se borran las memorias de los antiguos dueños. Los voluntarios trabajan gratis, a condición de que los visitantes se vayan con las manos algo engrasadas — el gesto, si no nada. Las piezas de recambio vienen de aparatos muertos, recogidos por el ayuntamiento; un rincón de café espera a los desanimados." },
      { it: "« Les gens arrivent en s'excusant, raconte Nawel Bensalem, la responsable. Ils repartent en réparant d'autres objets : une cafetière, une lampe, parfois un tourne-disque de grand-père. Les séances durent deux heures ; personne ne regarde la montre. »",
      es: "«La gente llega disculpándose», cuenta Nawel Bensalem, la responsable. «Se van reparando otras cosas: una cafetera, una lámpara, a veces un tocadiscos del abuelo. Las sesiones duran dos horas; nadie mira el reloj.»" },
      { it: "Les chiffres de la ville sont nets : mille appareils sauvés en un an, plusieurs tonnes de déchets évitées. La responsable a indiqué que chaque ordinateur réparé éviterait la fabrication d'un neuf ; elle a ajouté que l'atelier remplirait trois autres quartiers dès septembre. Un concours de réparation réunira les lycées au printemps ; le prix, simple, sera le droit de dire « je sais faire ».",
      es: "Las cifras del ayuntamiento son claras: mil aparatos salvados en un año, varias toneladas de residuos evitadas. La responsable indicó que cada ordenador reparado evitaría la fabricación de uno nuevo; añadió que el taller desbordaría a otros tres barrios desde septiembre. Un concurso de reparación reunirá a los institutos en primavera; el premio, simple, será el derecho de decir «sé hacerlo»." },
      { it: "La mairie voudrait que les grandes villes du département copient l'expérience, bien que les fonds soient serrés. L'atelier, lui, refuse de grandir : il préfère que chacun apprenne à réparer seul. Les retraités y trouvent un rôle ; les étudiants, un métier d'attente. La mode, préviennent les bénévoles, reviendra ; le geste, lui, ne se démodera jamais.",
      es: "El ayuntamiento quisiera que las grandes ciudades del departamento copiaran la experiencia, aunque los fondos sean escasos. El taller, por su parte, se niega a crecer: prefiere que cada uno aprenda a reparar solo. Los jubilados encuentran ahí un papel; los estudiantes, un oficio de espera. La moda, advierten los voluntarios, volverá; el gesto nunca pasará de moda." },
    ],
    words: [
      { it: "un bénévole / les bénévoles", es: "un voluntario / los voluntarios" },
      { it: "réparer", es: "reparar" },
      { it: "un appareil / les appareils", es: "un aparato / los aparatos" },
      { it: "la mémoire / les mémoires", es: "la memoria / las memorias" },
      { it: "une pièce détachée / les pièces détachées", es: "una pieza de recambio" },
      { it: "la médiathèque", es: "la mediateca" },
    ],
    questions: [
      { q: "¿Qué condición ponen los voluntarios a los visitantes?", options: ["Que les visiteurs repartent avec les mains un peu grasses", "Que les visiteurs paient d'avance", "Que les visiteurs apportent des outils", "Que les visiteurs signent un contrat"], answer: 0, why: "«à condition que les visiteurs repartent avec les mains un peu grasses»" },
      { q: "¿Cuántos aparatos salvados en un año?", options: ["Cent", "Mille", "Un million", "Dix mille"], answer: 1, why: "«mille appareils sauvés en un an»" },
      { q: "¿Qué evitaría cada ordenador reparado, según la responsable?", options: ["Les taxes locales", "Le recyclage des métaux", "Les visites guidées", "La fabrication d'un neuf"], answer: 3, why: "«chaque ordinateur réparé éviterait la fabrication d'un neuf»" },
      { q: "¿Por qué se niega el taller a crecer?", options: ["Parce que la salle est trop petite", "Parce que les bénévoles manquent", "Parce qu'il préfère que chacun apprenne à réparer seul", "Parce que la mairie l'interdit"], answer: 2, why: "«il préfère que chacun apprenne à réparer seul»" },
    ],
    discuss: [
      { it: "Réparer ou remplacer : que fait votre famille avec un appareil cassé ?", es: "Reparar o reemplazar: ¿qué hace tu familia con un aparato roto?" },
      { it: "Faut-il enseigner la réparation à l'école, comme la natation ?", es: "¿Hay que enseñar a reparar en la escuela, como la natación?" },
    ],
  },

  /* ═══ B2 · 7 — Histoire · Amiens ═══ */
  {
    id: "fr-news-b2-07", cat: "storia", level: "B2", place: "Amiens", minutes: 4,
    title: "Sous la gare d'Amiens, un quartier romain sort de l'ombre",
    titleEs: "Bajo la estación de Amiens, un barrio romano sale de la sombra",
    lead: {
      it: "À Amiens, la gare va s'agrandir. Mais la loi impose un geste avant les travaux : regarder sous le sol. Les archéologues y ont trouvé une ville entière qui attendait depuis deux mille ans.",
      es: "En Amiens, la estación va a ampliarse. Pero la ley impone un gesto antes de las obras: mirar bajo el suelo. Los arqueólogos encontraron allí un barrio entero que esperaba desde hacía dos mil años.",
    },
    paragraphs: [
      { it: "Pendant huit mois, les fouilles ont révélé un quartier de l'ancienne Samarobriva, la bourgade gauloise devenue Amiens : des rues pavées, des caves à provisions, des puits, un atelier de potier encore plein de pots ratés. Les couches se lisent comme un livre — le premier siècle sous le dix-neuvième.",
      es: "Durante ocho meses, las excavaciones revelaron un barrio de la antigua Samarobriva, la aldea gala que se convirtió en Amiens: calles empedradas, cuevas de provisiones, pozos, un taller de alfarero aún lleno de piezas fallidas. Las capas se leen como un libro — el primer siglo debajo del diecinueve." },
      { it: "« Chaque fois qu'on creuse à Amiens, on retire une page, sourit Julien Robic, l'archéologue en chef. On lit la ville comme un mille-feuille, ajoute-t-il. » Il a prévenu que les travaux dureraient plus longtemps que prévu ; la compagnie ferroviaire a répondu qu'elle adapterait son calendrier, pourvu que la science garde la main.",
      es: "«Cada vez que excavamos en Amiens, retiramos una página», sonríe Julien Robic, el arqueólogo jefe. «Se lee la ciudad como un milhojas», añade. Advirtió que las obras durarían más de lo previsto; la compañía ferroviaria respondió que adaptaría su calendario, con tal de que la ciencia mantenga la mano." },
      { it: "Les vestiges les plus fragiles partiront au musée ; les autres resteront sous terre, où ils dorment mieux. Les monnaies retrouvées, des centaines, racontent le commerce vers le sud ; les amphores attestent le vin. Un puits a rendu des graines brûlées ; les botanistes reverront leur couleur. Bien que le chantier retarde l'ouverture, personne ne s'en plaint : la ville a pris goût à ses dessous.",
      es: "Los vestigios más frágiles irán al museo; los demás quedarán bajo tierra, donde duermen mejor. Las monedas halladas, cientos, hablan del comercio hacia el sur; las ánforas atestiguan el vino. Un pozo devolvió semillas quemadas; los botánicos volverán a ver su color. Aunque la obra retrase la apertura, nadie se queja: la ciudad ha cogido gusto a sus subsuelos." },
      { it: "La nouvelle aile de la gare devra naître au-dessus d'une mémoire, pas contre elle : il faudra que les architectes intègrent les fondations antiques dans le plancher, sous verre. Les voyageurs, demain, marcheront sur vingt siècles sans y penser — à moins qu'un panneau ne leur rappelle où ils posent les pieds.",
      es: "La nueva ala de la estación tendrá que nacer sobre una memoria, no contra ella: los arquitectos deberán integrar los cimientos antiguos en el suelo, bajo cristal. Los viajeros, mañana, caminarán sobre veinte siglos sin pensarlo — a menos que un cartel les recuerde dónde ponen los pies." },
    ],
    words: [
      { it: "une fouille / les fouilles", es: "una excavación / las excavaciones" },
      { it: "un vestige / les vestiges", es: "un vestigio / los vestigios" },
      { it: "une rue pavée / des rues pavées", es: "una calle empedrada" },
      { it: "un atelier", es: "un taller" },
      { it: "une amphore / des amphores", es: "un ánfora / las ánforas", note: "en español lleva tilde: ánfora; en francés no" },
      { it: "une couche / les couches", es: "una capa / las capas" },
    ],
    questions: [
      { q: "¿Qué había de especial en el taller de alfarero?", options: ["Des outils en fer", "Des pots ratés", "Des amphores pleines", "Des monnaies d'or"], answer: 1, why: "«un atelier de potier encore plein de pots ratés»" },
      { q: "¿Qué respondió la compañía ferroviaria?", options: ["Qu'elle annulerait la gare", "Qu'elle refuserait la fouille", "Qu'elle adapterait son calendrier", "Qu'elle partirait d'Amiens"], answer: 2, why: "«la compagnie ferroviaire a répondu qu'elle adapterait son calendrier»" },
      { q: "¿Por qué nadie se queja del retraso?", options: ["Parce que le billet a baissé", "Parce que les trains vont plus vite", "Parce que le musée est gratuit", "Parce que la ville a pris goût à ses dessous"], answer: 3, why: "«la ville a pris goût à ses dessous»" },
      { q: "¿Qué imagen resume la idea del texto?", options: ["Un mille-feuille : les siècles empilés", "Une gare sans mémoire", "Un désert de pierre", "Un livre fermé à jamais"], answer: 0, why: "«On lit la ville comme un mille-feuille»" },
    ],
    discuss: [
      { it: "Faut-il construire sur les vestiges ou tout laisser en place ?", es: "¿Hay que construir sobre los vestigios o dejarlo todo en su sitio?" },
      { it: "Que cacherait le sous-sol de votre ville, à votre avis ?", es: "¿Qué escondería el subsuelo de tu ciudad, en tu opinión?" },
    ],
  },

  /* ═══ B2 · 8 — Sport · Biarritz ═══ */
  {
    id: "fr-news-b2-08", cat: "sport", level: "B2", place: "Biarritz", minutes: 4,
    title: "À Biarritz, les surfeurs s'entraînent quand la mer se tait",
    titleEs: "En Biarritz, los surfistas se entrenan cuando el mar calla",
    lead: {
      it: "Le surf est né à Biarritz il y a soixante-dix ans ; la ville en fait aujourd'hui un laboratoire. Quand la mer est plate, les sportifs ne chôment plus : ils poursuivent l'entraînement dans un hangar, sous l'œil des caméras.",
      es: "El surf nació en Biarritz hace setenta años; hoy la ciudad lo ha convertido en un laboratorio. Cuando el mar está plano, los deportistas ya no se cruzan de brazos: siguen el entrenamiento en un hangar, bajo el ojo de las cámaras.",
    },
    paragraphs: [
      { it: "Le protocole ressemble à un jeu : dix minutes d'équilibre sur une planche instable, des capteurs sous les pieds, la mer en fond d'écran. Ce bout d'entraînement ressemble à une danse lente ; un écran suit les pieds comme un maître suit les mains. Les mesures tombent en direct ; le coach corrige un genou, une épaule, le regard. Rien n'échappe à la machine, pas même l'ennui.",
      es: "El protocolo parece un juego: diez minutos de equilibrio sobre una tabla inestable, sensores bajo los pies, el mar de fondo en pantalla. Este fragmento de entrenamiento se parece a una danza lenta; una pantalla sigue los pies como un maestro sigue las manos. Los datos llegan en directo; el entrenador corrige una rodilla, un hombro, la mirada. Nada se le escapa a la máquina, ni siquiera el aburrimiento." },
      { it: "« La vague idéale dure huit secondes, explique Léa Marchetti, chercheuse en biomécanique. Le reste du sport se joue à terre. » Elle a calculé que la préparation hors de l'eau raccourcirait de moitié l'apprentissage ; elle a ajouté que les débutants gagneraient des années de patience.",
      es: "«La ola ideal dura ocho segundos», explica Léa Marchetti, investigadora en biomecánica. «El resto del deporte se juega en tierra.» Calculó que la preparación fuera del agua acortaría a la mitad el aprendizaje; añadió que los principiantes ganarían años de paciencia." },
      { it: "La fédération voudrait que les clubs adoptent la méthode, bien qu'elle coûte cher. Des mécènes locaux paieraient les capteurs si la ville prêtait le hangar ; les clubs hésitent, car la mer, disent-ils, ne se remplace pas. La science répond gentiment qu'elle ne remplace rien — elle prépare. Un premier bilan tombera au printemps ; les couches de données s'empilent déjà comme des vagues.",
      es: "La federación quisiera que los clubes adoptaran el método, aunque cueste caro. Unos mecenas locales pagarían los sensores si la ciudad prestara el hangar; los clubes dudan, porque el mar, dicen, no se reemplaza. La ciencia responde con cortesía que no reemplaza nada — prepara. Un primer balance caerá en primavera; las capas de datos se apilan ya como olas." },
      { it: "Les vagues, elles, ne changent pas d'avis : il faudra toujours que le corps apprenne seul à se tenir debout. Mais celui qui sait tomber sait surtout se relever ; le hangar ne promet pas la mer, il promet le jour où elle viendra. L'hiver, il garde les compétiteurs ; l'été, il ouvre aux scolaires.",
      es: "Las olas, por su parte, no cambian de opinión: siempre hará falta que el cuerpo aprenda solo a mantenerse en pie. Pero quien sabe caer sabe sobre todo levantarse; el hangar no promete el mar, promete el día en que llegará. En invierno guarda a los competidores; en verano se abre a los escolares." },
    ],
    words: [
      { it: "la planche", es: "la tabla" },
      { it: "un capteur / les capteurs", es: "un sensor / los sensores" },
      { it: "l'équilibre", es: "el equilibrio" },
      { it: "une vague / les vagues", es: "una ola / las olas" },
      { it: "l'entraînement", es: "el entrenamiento" },
      { it: "le genou / les genoux", es: "la rodilla / las rodillas" },
    ],
    questions: [
      { q: "¿Cuánto dura la ola ideal?", options: ["Deux minutes", "Un quart d'heure", "Huit secondes", "Une journée"], answer: 2, why: "«La vague idéale dure huit secondes»" },
      { q: "¿Qué efecto tendría la preparación fuera del agua?", options: ["Le prix des planches", "La couleur des combinaisons", "La hauteur des vagues", "Elle raccourcirait de moitié l'apprentissage"], answer: 3, why: "«la préparation hors de l'eau raccourcirait de moitié l'apprentissage»" },
      { q: "¿Por qué dudan los clubes?", options: ["Parce que la mer ne se remplace pas", "Parce que les capteurs mentent", "Parce que le hangar est fermé", "Parce que les coachs sont partis"], answer: 0, why: "«la mer, disent-ils, ne se remplace pas»" },
      { q: "¿Qué promete el hangar, según el cierre?", options: ["La mer", "Le jour où la mer viendra", "La victoire", "L'argent"], answer: 1, why: "«le hangar ne promet pas la mer, il promet le jour où elle viendra»" },
    ],
    discuss: [
      { it: "Le sport se joue-t-il dans l'eau ou dans la tête ?", es: "¿El deporte se juega en el agua o en la cabeza?" },
      { it: "Faut-il mesurer tout ce que le corps fait, ou laisser la sensation parler ?", es: "¿Hay que medir todo lo que hace el cuerpo o dejar hablar a la sensación?" },
    ],
  },

  /* ═══ B2 · 9 — Société · Colmar ═══ */
  {
    id: "fr-news-b2-09", cat: "societa", level: "B2", place: "Colmar", minutes: 4,
    title: "À Colmar, des étudiants et des aînés sous le même toit",
    titleEs: "En Colmar, estudiantes y mayores bajo el mismo techo",
    lead: {
      it: "Au bord d'un canal de Colmar, une maison à colombages abrite un projet singulier : à l'étage, six étudiants ; au rez-de-chaussée, cinq personnes âgées. Le loyer est bas pour les uns, la compagnie pour les autres.",
      es: "A orillas de un canal de Colmar, una casa de entramado de madera alberga un proyecto singular: arriba, seis estudiantes; abajo, cinco personas mayores. El alquiler es bajo para unos, la compañía para otros.",
    },
    paragraphs: [
      { it: "La colocation intergénérationnelle suit des règles simples. Chaque étudiant s'engage à passer deux soirées par semaine dans le salon commun ; en échange, le loyer tombe à un tiers du prix du quartier. Les partages s'organisent seuls : un cours d'ordinateur contre une recette de tarte, un coup de main pour les cartons contre un récit d'Alsace.",
      es: "El piso compartido intergeneracional sigue reglas simples. Cada estudiante se compromete a pasar dos noches por semana en el salón común; a cambio, el alquiler baja a un tercio del precio del barrio. Los intercambios se organizan solos: una clase de informática por una receta de tarta, una ayuda con las cajas por un relato de Alsacia." },
      { it: "« Au début, chacun craignait le bruit ou le silence, se souvient Annick Steiner, la directrice. Puis les habitudes ont trouvé leur rythme. » Elle a constaté que la solitude des uns faisait écho à celle des autres ; elle a ajouté que la formule coûterait moins cher à la collectivité qu'une maison de retraite.",
      es: "«Al principio, cada uno temía el ruido o el silencio», recuerda Annick Steiner, la directora. «Luego los hábitos encontraron su ritmo.» Comprobó que la soledad de unos hacía eco a la de otros; añadió que la fórmula costaría menos a la comunidad que una residencia." },
      { it: "Les chiffres lui donnent raison : les appels des personnes âgées au service d'urgence ont baissé de moitié ; les étudiants, eux, arrivent à l'heure aux examens — la maison veille, disent-ils. Une liste d'attente de quatre-vingts noms couvre déjà la rentrée. La ville souhaiterait ouvrir trois maisons de plus, pourvu que des bailleurs acceptent de jouer le jeu.",
      es: "Los números le dan la razón: las llamadas de las personas mayores al servicio de urgencias bajaron a la mitad; los estudiantes, por su parte, llegan a tiempo a los exámenes — la casa vela, dicen. Una lista de espera de ochenta nombres cubre ya el próximo curso. La ciudad quisiera abrir tres casas más, siempre que unos caseros acepten jugar al juego." },
      { it: "Bien que l'expérience soit jeune, les listes d'attente s'allongent chaque mois ; le prochain bâtiment ouvrira près du marché, et les commerçants réclament leur tour. On avait oublié que les générations vivaient ensemble jadis ; à Colmar, on s'en souvient désormais. Les canaux ne changent pas de cours — les maisons, si.",
      es: "Aunque la experiencia sea joven, las listas de espera crecen cada mes; el próximo edificio abrirá cerca del mercado, y los comerciantes reclaman su turno. Se había olvidado que las generaciones vivían juntas antaño; en Colmar ya se recuerda. Los canales no cambian de curso — las casas, sí." },
    ],
    words: [
      { it: "la colocation", es: "el piso compartido" },
      { it: "une personne âgée / les personnes âgées", es: "una persona mayor" },
      { it: "la solitude", es: "la soledad" },
      { it: "le loyer", es: "el alquiler" },
      { it: "un étudiant / les étudiants", es: "un estudiante / los estudiantes" },
      { it: "une liste d'attente / les listes d'attente", es: "una lista de espera" },
    ],
    questions: [
      { q: "¿A qué se compromete cada estudiante?", options: ["À payer double", "À passer deux soirées par semaine dans le salon commun", "À cuisiner tous les jours", "À ne rien faire"], answer: 1, why: "«Chaque étudiant s'engage à passer deux soirées par semaine dans le salon commun»" },
      { q: "¿Qué ha bajado a la mitad?", options: ["Les loyers du quartier", "Les notes des étudiants", "Les appels des personnes âgées au service d'urgence", "Les visites des familles"], answer: 2, why: "«les appels des personnes âgées au service d'urgence ont baissé de moitié»" },
      { q: "¿Qué descubrió la directora sobre las soledades?", options: ["Rien de spécial", "Qu'elles n'existaient pas", "Qu'elles étaient irréparables", "Qu'elles se ressemblaient : la solitude des uns faisait écho à celle des autres"], answer: 3, why: "«la solitude des uns faisait écho à celle des autres»" },
      { q: "¿Qué significa «las casas, sí» al final?", options: ["Que les maisons, elles, peuvent changer de cours — comme les générations", "Que les maisons déménagent", "Que les canaux mentent", "Que rien ne change jamais"], answer: 0, why: "«Les canaux ne changent pas de cours — les maisons, si»" },
    ],
    discuss: [
      { it: "Vivriez-vous avec des personnes âgées pour un loyer bas ?", es: "¿Vivirías con personas mayores a cambio de un alquiler bajo?" },
      { it: "Que peut-on échanger entre générations, hors argent ?", es: "¿Qué se puede intercambiar entre generaciones, fuera del dinero?" },
    ],
  },

  /* ═══ B2 · 10 — Économie · Nantes ═══ */
  {
    id: "fr-news-b2-10", cat: "economia", level: "B2", place: "Nantes", minutes: 4,
    title: "À Nantes, l'aéronautique cherche des mains nouvelles",
    titleEs: "En Nantes, la aeronáutica busca manos nuevas",
    lead: {
      it: "La filière aéronautique de Nantes tourne à plein régime, sans trouver tous ses ouvriers. Les usines cherchent des ajusteurs, des soudeurs, des assembleurs de pièces : la demande vole, l'offre reste au sol.",
      es: "El sector aeronáutico de Nantes funciona a pleno rendimiento sin encontrar todos sus operarios. Las fábricas buscan ajustadores, soldadores y ensambladores: la demanda vuela, la oferta se queda en el suelo.",
    },
    paragraphs: [
      { it: "La réponse est venue des lycées professionnels. En trois ans, les classes d'apprentissage sont passées de deux à douze ; les jeunes passent la semaine entre l'atelier-école et l'usine, le samedi en cours. Un ouvrier formé reste rare ; un ouvrier fidèle, une aubaine. Le salaire d'apprenti monte chaque année ; le diplôme arrive avec l'expérience, pas après. Les candidatures, cet été, ont dépassé les places.",
      es: "La respuesta vino de los institutos de formación profesional. En tres años, las clases de aprendizaje pasaron de dos a doce; los jóvenes reparten la semana entre el taller-escuela y la fábrica, el sábado a clase. Un operario formado sigue siendo raro; un operario fiel, una ganga. El sueldo de aprendiz sube cada año; el diploma llega con la experiencia, no después. Las solicitudes, este verano, superaron las plazas." },
      { it: "« Un salaire n'attire plus tout seul, explique Éric Duval, responsable de formation. Il faut que la carrière se voie dès la première année. » Il a ajouté que la formation devait commencer au lycée pour que l'envie précède le diplôme. Les filles, désormais, remplissent la moitié des bancs — un premier dans la filière.",
      es: "«Un sueldo ya no atrae por sí solo», explica Éric Duval, responsable de formación. «Hace falta que la carrera se vea desde el primer año.» Añadió que la formación debía empezar en el instituto para que las ganas precedan al diploma. Las chicas, desde ahora, llenan la mitad de los bancos — una primicia en el sector." },
      { it: "Les premiers résultats sont visibles : neuf apprentis sur dix trouvent un poste avant la fin du contrat. Sans ce vivier, l'industrie nantaise devrait refuser des commandes ; avec lui, elle espère doubler ses effectifs en dix ans. Certains économistes estiment que la filière créerait deux mille emplois si les formations suivaient. Les commandes civiles, disent les analystes, se renouvellent pour vingt ans.",
      es: "Los primeros resultados se ven: nueve de cada diez aprendices encuentran puesto antes de acabar el contrato. Sin ese vivero, la industria nantesa tendría que rechazar encargos; con él, espera duplicar sus plantillas en diez años. Algunos economistas estiman que el sector crearía dos mil empleos si la formación acompañara. Los encargos civiles, dicen los analistas, se renuevan para veinte años." },
      { it: "Reste un débat : il faudrait que les parents changent de regard sur l'atelier, longtemps classé sous les bureaux. Bien que les salaires soient désormais équivalents, les familles hésitent. La semaine de l'industrie ouvrira les usines aux visites ; l'envol, lui, ne patiente pas.",
      es: "Queda un debate: haría falta que los padres cambiaran de mirada sobre el taller, durante mucho tiempo clasificado por debajo de las oficinas. Aunque los sueldos ya sean equivalentes, las familias dudan. La semana de la industria abrirá las fábricas a las visitas; el despegue, por su parte, no espera." },
    ],
    words: [
      { it: "la filière", es: "el sector, la filiera" },
      { it: "un apprenti / les apprentis", es: "un aprendiz / los aprendices" },
      { it: "un ouvrier / les ouvriers", es: "un operario / los operarios" },
      { it: "l'atelier", es: "el taller" },
      { it: "une commande / les commandes", es: "un encargo / los encargos" },
      { it: "le salaire / les salaires", es: "el sueldo / los sueldos" },
    ],
    questions: [
      { q: "¿Cuántos de cada diez aprendices encuentran puesto?", options: ["Neuf sur dix", "Cinq sur dix", "Tous", "Deux sur dix"], answer: 0, why: "«neuf apprentis sur dix trouvent un poste avant la fin du contrat»" },
      { q: "¿Qué pasaría sin ese vivero de talento?", options: ["Rien", "Les usines fermeraient", "L'industrie devrait refuser des commandes", "Les salaires monteraient"], answer: 2, why: "«Sans ce vivier, l'industrie nantaise devrait refuser des commandes»" },
      { q: "¿Qué debe preceder al diploma, según la formación?", options: ["L'argent", "La chance", "L'âge", "L'envie"], answer: 3, why: "«la formation devait commencer au lycée pour que l'envie précède le diplôme»" },
      { q: "¿Qué se pide a los padres en el debate final?", options: ["Qu'ils paient des études longues", "Qu'ils changent de regard sur l'atelier", "Qu'ils déménagent", "Qu'ils travaillent à l'usine"], answer: 1, why: "«il faudrait que les parents changent de regard sur l'atelier»" },
    ],
    discuss: [
      { it: "Atelier ou bureau : que conseilleriez-vous à un jeune qui hésite ?", es: "Taller u oficina: ¿qué le aconsejarías a un joven que duda?" },
      { it: "Votre région manque-t-elle de mains qualifiées ? Dans quels métiers ?", es: "¿Faltan manos cualificadas en tu región? ¿En qué oficios?" },
    ],
  },

  /* ═══ B2 · 11 — Sciences · Besançon ═══ */
  {
    id: "fr-news-b2-11", cat: "scienza", level: "B2", place: "Besançon", minutes: 4,
    title: "À Besançon, l'heure se fabrique au milliardième près",
    titleEs: "En Besançon, la hora se fabrica con precisión de milmillonésimas",
    lead: {
      it: "La ville a bâti sa fortune sur les montres ; elle fabrique aujourd'hui des horloges qui battent plus juste que la Terre. Dans un laboratoire bisontin, une trentaine de chercheurs fabriquent l'heure de référence du pays.",
      es: "La ciudad construyó su fortuna sobre los relojes; hoy fabrica relojes que laten con más precisión que la Tierra. En un laboratorio bisontino, unos treinta investigadores fabrican la hora de referencia del país.",
    },
    paragraphs: [
      { it: "La technique tient en une image : des atomes refroidis, interrogés par un laser comme des élèves à un examen. L'horloge compte neuf milliards d'oscillations et en déduit la seconde. Elle se trompe d'une seconde en cent millions d'années — le temps de beaucoup de vies humaines. Le plateau de la ville garde les antennes ; le silence aussi, précieusement.",
      es: "La técnica cabe en una imagen: átomos enfriados, interrogados por un láser como alumnos en un examen. El reloj cuenta nueve mil millones de oscilaciones y de ellas deduce el segundo. Se equivoca en un segundo cada cien millones de años — tiempo de muchas vidas humanas. La meseta de la ciudad guarda las antenas; también el silencio, con mimo." },
      { it: "« La Terre ralentit sans prévenir, sourit Claire Zeller, physicienne. Les journées s'allongent d'un souffle ; un jour, il faudra bien décider. » Elle a rappelé que la Terre ralentissait imperceptiblement et que les calendriers devraient un jour s'ajuster ; elle a ajouté qu'une seconde en plus dérouterait les réseaux, sauf si l'on prévenait à temps.",
      es: "«La Tierra se frena sin avisar», sonríe Claire Zeller, física. «Los días se alargan un suspiro; algún día habrá que decidir.» Recordó que la Tierra se frenaba de forma imperceptible y que los calendarios deberían ajustarse algún día; añadió que un segundo de más desorientaría a las redes, salvo que se avisara a tiempo." },
      { it: "Le laboratoire voudrait que la France conserve son rang, bien que la concurrence soit mondiale. Les horloges bisontines dialoguent avec leurs homologues d'autres continents ; une comparaison corrige l'autre. Une horloge bisontine embarquera bientôt sur un satellite d'essai. Quand deux laboratoires tombent d'accord, le monde entier tient la même seconde.",
      es: "El laboratorio quisiera que Francia conservara su puesto, aunque la competencia sea mundial. Los relojes bisontinos dialogan con sus homólogos de otros continentes; una comparación corrige a la otra. Un reloj bisontino embarcará pronto en un satélite de prueba. Cuando dos laboratorios se ponen de acuerdo, el mundo entero sostiene el mismo segundo." },
      { it: "Les montres de poche, elles, continuent de retarder avec élégance. Il suffit que les horloges se mettent d'accord pour que le temps devienne une convention paisible. Besançon, qui garda l'heure de la France pendant un siècle, garde aujourd'hui la mémoire du geste — et un musée où les secondes s'exposent.",
      es: "Los relojes de bolsillo, por su parte, siguen atrasando con elegancia. Basta con que los relojes se pongan de acuerdo para que el tiempo se convierta en una convención apacible. Besançon, que guardó la hora de Francia durante un siglo, conserva hoy la memoria del gesto — y un museo donde los segundos se exhiben." },
    ],
    words: [
      { it: "une horloge / les horloges", es: "un reloj / los relojes", note: "en español «reloj» es masculino; en francés «horloge» es femenino" },
      { it: "la seconde", es: "el segundo (de tiempo)" },
      { it: "un atome / les atomes", es: "un átomo / los átomos" },
      { it: "le laser", es: "el láser" },
      { it: "retarder", es: "atrasar, ir tarde" },
      { it: "une oscillation / les oscillations", es: "una oscilación" },
    ],
    questions: [
      { q: "¿Cuántas oscilaciones cuenta el reloj?", options: ["Neuf millions", "Neuf mille", "Neuf milliards", "Neuf cents"], answer: 2, why: "«L'horloge compte neuf milliards d'oscillations et en déduit la seconde»" },
      { q: "¿Qué hace la Tierra, según la física?", options: ["Elle ralentit sans prévenir", "Elle accélère", "Elle s'arrête le dimanche", "Elle change d'axe"], answer: 0, why: "«La Terre ralentit sans prévenir»" },
      { q: "¿Qué pasaría con un segundo de más?", options: ["Rien du tout", "Le monde gagnerait un jour férié", "Les montres s'arrêteraient", "Les réseaux seraient déroutés, sauf si l'on prévenait à temps"], answer: 3, why: "«une seconde en plus dérouterait les réseaux, sauf si l'on prévenait à temps»" },
      { q: "¿Qué convierte el tiempo en «convención apacible»?", options: ["La peur", "Le fait que les horloges se mettent d'accord", "L'argent", "La tradition"], answer: 1, why: "«Il suffit que les horloges se mettent d'accord pour que le temps devienne une convention paisible»" },
    ],
    discuss: [
      { it: "Faut-il changer l'heure quand la Terre ralentit ?", es: "¿Hay que cambiar la hora cuando la Tierra se frena?" },
      { it: "Votre téléphone ment-il sur l'heure ? Vérifiez, puis racontez.", es: "¿Miente tu teléfono sobre la hora? Compruébalo y cuenta." },
    ],
  },

  /* ═══ B2 · 12 — Culture · Metz ═══ */
  {
    id: "fr-news-b2-12", cat: "cultura", level: "B2", place: "Metz", minutes: 4,
    title: "À Metz, les librairies de quartier écrivent leur suite",
    titleEs: "En Metz, las librerías de barrio escriben su continuación",
    lead: {
      it: "Dans les ruelles de Metz, les librairies indépendantes fermaient une à une. Cette année, la tendance s'inverse : trois enseignes ont ouvert, dont une avec un café et une scène ouverte.",
      es: "En las callejuelas de Metz, las librerías independientes cerraban una tras otra. Este año la tendencia se invierte: han abierto tres, una de ellas con cafetería y escenario abierto.",
    },
    paragraphs: [
      { it: "Les libraires ont changé de métier sans le quitter : ils conseillent, commandent, animent des cercles de lecture. Le samedi, les clients restent une heure pour parler ; le livre devient un prétexte. « Personne ne vient plus seulement acheter, constate Sophie Renaud, libraire. » Elle a remarqué que les lecteurs revenaient pour la conversation autant que pour les romans. Les mardis, les cercles se disputent la salle.",
      es: "Los libreros han cambiado de oficio sin abandonarlo: aconsejan, encargan, dinamizan clubes de lectura. El sábado, los clientes se quedan una hora para hablar; el libro se convierte en excusa. «Ya nadie viene solo a comprar», constata Sophie Renaud, librera. Observó que los lectores volvían por la conversación tanto como por las novelas. Los martes, los clubes se disputan la sala." },
      { it: "La ville aide : une prime à l'installation, des vitrines offertes aux petits éditeurs, un salon du livre en place Saint-Jacques. Sans ce soutien, les enseignes disparaîtraient en deux hivers ; avec lui, elles embauchent des apprentis libraires. Certains observateurs estiment que le modèle tiendrait tant que la taille resterait humaine — une salle, ni plus, ni moins.",
      es: "El ayuntamiento ayuda: una prima de instalación, escaparates cedidos a las pequeñas editoriales, una feria del libro en la plaza Saint-Jacques. Sin ese apoyo, las tiendas desaparecerían en dos inviernos; con él, contratan aprendices de librero. Algunos observadores estiman que el modelo aguantaría mientras el tamaño siguiera humano — una sala, ni más ni menos." },
      { it: "Le samedi soir, la scène ouvre aux lectures à voix haute : des inconnus montent, lisent une page, descendent applaudis. Les écrivains régionaux y trouvent un public ; les éditeurs, des rendez-vous. Une enseigne propose même des livres la nuit, dans un distributeur à l'ancienne. « Une librairie n'est pas un magasin, répète Sophie Renaud ; c'est un salon qui vend. »",
      es: "El sábado por la noche, el escenario se abre a lecturas en voz alta: desconocidos suben, leen una página, bajan aplaudidos. Los escritores regionales encuentran ahí público; las editoriales, citas. Una tienda ofrece incluso libros de noche, en un distribuidor a la antigua. «Una librería no es una tienda», repite Sophie Renaud; «es un salón que vende.»" },
      { it: "Il reste que le métier exige une foi : il faut que le libraire aime les gens autant que les livres, bien que les marges soient minces. À Metz, on parie que oui. La liseuse s'éclaire ; la librairie, elle, éclaire.",
      es: "Queda que el oficio exige fe: el librero tiene que amar a la gente tanto como a los libros, aunque los márgenes sean finos. En Metz se apuesta a que sí. El lector electrónico se ilumina; la librería, en cambio, ilumina." },
    ],
    words: [
      { it: "une librairie / les librairies", es: "una librería", note: "«librairie» = librería; «bibliothèque» = biblioteca" },
      { it: "un libraire / les libraires", es: "un librero / los libreros" },
      { it: "un cercle de lecture / les cercles de lecture", es: "un club de lectura" },
      { it: "la vitrine / les vitrines", es: "el escaparate / los escaparates" },
      { it: "une enseigne / les enseignes", es: "una tienda, un comercio" },
      { it: "la marge / les marges", es: "el margen / los márgenes" },
    ],
    questions: [
      { q: "¿Qué ha hecho la ciudad por las librerías?", options: ["Rien du tout", "Une prime à l'installation, des vitrines offertes, un salon du livre", "Une hausse des impôts", "Un déménagement"], answer: 1, why: "«une prime à l'installation, des vitrines offertes aux petits éditeurs, un salon du livre en place Saint-Jacques»" },
      { q: "¿Qué ocurre el sábado por la noche?", options: ["Des inconnus montent, lisent une page, descendent applaudis", "On vend des liseuses", "Le café devient gratuit", "La scène ferme"], answer: 0, why: "«des inconnus montent, lisent une page, descendent applaudis»" },
      { q: "¿Hasta cuándo aguantaría el modelo?", options: ["Jusqu'au prochain hiver", "Jusqu'à la retraite de Sophie", "Indéfiniment", "Tant que la taille resterait humaine — une salle, ni plus, ni moins"], answer: 3, why: "«le modèle tiendrait tant que la taille resterait humaine»" },
      { q: "¿Qué oposición cierra la noticia?", options: ["Le café contre le thé", "La ville contre la campagne", "La liseuse s'éclaire ; la librairie éclaire", "Le papier contre le numérique"], answer: 2, why: "«La liseuse s'éclaire ; la librairie, elle, éclaire»" },
    ],
    discuss: [
      { it: "Une librairie peut-elle survivre sans vendre ?", es: "¿Puede sobrevivir una librería sin vender?" },
      { it: "Que lisez-vous le samedi : un écran ou une page ?", es: "¿Qué lees el sábado: una pantalla o una página?" },
    ],
  },

  /* ═══ B2 · 13 — Environnement · Pau ═══ */
  {
    id: "fr-news-b2-13", cat: "ambiente", level: "B2", place: "Pau", minutes: 4,
    title: "Au-dessus de Pau, les vautours nettoient les Pyrénées",
    titleEs: "Sobre Pau, los buitres limpian los Pirineos",
    lead: {
      it: "Dans le ciel des Pyrénées, près de Pau, une équipe travaille sans salaire ni congés : les vautours. En un demi-siècle, ils sont passés de quelques couples à des milliers d'oiseaux — et leur réputation avec eux.",
      es: "En el cielo de los Pirineos, cerca de Pau, un equipo trabaja sin sueldo ni vacaciones: los buitres. En medio siglo pasaron de unas pocas parejas a miles de aves — y su reputación con ellos.",
    },
    paragraphs: [
      { it: "Leur métier tient en deux gestes : surveiller, puis nettoyer. Une carcasse laissée dans une pente disparaît en quarante-huit heures ; pas un os ne reste. Le travail se partage : les uns cherchent au sol, les autres surveillent les crêtes. Les gardiens du parc estiment que la colonie traiterait des centaines de tonnes de restes chaque année, autant qu'une petite usine.",
      es: "Su oficio se reduce a dos gestos: vigilar y luego limpiar. Un cadáver dejado en una ladera desaparece en cuarenta y ocho horas; no queda ni un hueso. El trabajo se reparte: unos buscan en el suelo, otros vigilan las cumbres. Los guardianes del parque calculan que la colonia trataría cientos de toneladas de restos al año, tanto como una pequeña fábrica." },
      { it: "Les éleveurs, qui les maudissaient jadis, ont dû admettre que le service était gratuit et complet. « Ils ne prennent pas de congés, sourit Gérard Cazaux, ornithologue. Un couple surveille dix kilomètres de crête, sans relève. » Il a calculé qu'un seul oiseau couvrirait trente kilomètres par jour ; il a ajouté que les stations d'équarrissage coûteraient cher sans eux.",
      es: "Los ganaderos, que antes los maldecían, tuvieron que admitir que el servicio era gratuito y completo. «No cogen vacaciones», sonríe Gérard Cazaux, ornitólogo. «Una pareja vigila diez kilómetros de cresta, sin relevo.» Calculó que un solo ave cubriría treinta kilómetros al día; añadió que las plantas de eliminación de cadáveres costarían caro sin ellos." },
      { it: "Le retour n'a rien coûté non plus : les falaises gardaient des couples cachés ; la protection a fait le reste. Aujourd'hui, qui veut les voir s'installe au bord des routes ; des panneaux indiquent les meilleurs jours. Le parc publie même un calendrier des passages — la grammaire du ciel, disent les gardiens. Un poste d'observation ouvrira au printemps, avec des jumelles en libre service.",
      es: "El regreso tampoco costó nada: los cortados calizos guardaban parejas escondidas; la protección hizo el resto. Hoy, quien quiera verlos se coloca al borde de las carreteras; hay carteles que indican los mejores días. El parque publica incluso un calendario de pasos — la gramática del cielo, dicen los guardianes. Un puesto de observación abrirá en primavera, con prismáticos de uso libre." },
      { it: "Le prochain pas demandera de la diplomatie : il faudrait que les mangeoires soient placées loin des sentiers, pour que la faim garde les oiseaux en altitude. Bien que le retour des vautours soit acquis, la cohabitation s'apprend — comme tout voisinage. Le ciel, lui, n'a jamais été aussi souvent traversé.",
      es: "El siguiente paso exigirá diplomacia: habría que colocar los comederos lejos de los senderos, para que el hambre mantenga a las aves en altura. Aunque el regreso de los buitres esté logrado, la convivencia se aprende — como todo vecindario. El cielo, por su parte, nunca fue cruzado tan a menudo." },
    ],
    words: [
      { it: "un vautour / les vautours", es: "un buitre / los buitres" },
      { it: "une carcasse / les carcasses", es: "un cadáver / los cadáveres (de animal)" },
      { it: "un éleveur / les éleveurs", es: "un ganadero / los ganaderos" },
      { it: "les stations d'équarrissage", es: "las plantas de eliminación de cadáveres", note: "«équarrissage» = eliminación de cadáveres de ganado; palabra técnica sin equivalente corto" },
      { it: "une mangeoire / les mangeoires", es: "un comedero / los comederos" },
      { it: "le voisinage", es: "el vecindario, la convivencia" },
    ],
    questions: [
      { q: "¿En cuánto tiempo desaparece un cadáver en una ladera?", options: ["En quarante-huit heures", "En un mois", "En un an", "Jamais"], answer: 0, why: "«Une carcasse laissée dans une pente disparaît en quarante-huit heures»" },
      { q: "¿Qué distancia cubriría un solo ave al día?", options: ["Dix kilomètres", "Cent kilomètres", "Un kilomètre", "Trente kilomètres"], answer: 3, why: "«un seul oiseau couvrirait trente kilomètres par jour»" },
      { q: "¿Por qué tuvieron que admitir los ganaderos?", options: ["Parce que la loi les y forçait", "Parce que les vautours chantaient", "Parce que le service était gratuit et complet", "Parce que le parc payait"], answer: 2, why: "«le service était gratuit et complet»" },
      { q: "¿Qué falta por aprender, según el cierre?", options: ["Le vol", "La cohabitation — comme tout voisinage", "Le nid", "Le silence"], answer: 1, why: "«la cohabitation s'apprend — comme tout voisinage»" },
    ],
    discuss: [
      { it: "Faut-il aider les charognards, ou laisser la nature compter ?", es: "¿Hay que ayudar a las aves carroñeras o dejar que la naturaleza calcule?" },
      { it: "Un service écologique gratuit : qui « paie », au fond ?", es: "Un servicio ecológico gratuito: ¿quién «paga», al final?" },
    ],
  },

  /* ═══ B2 · 14 — Santé · Toulon ═══ */
  {
    id: "fr-news-b2-14", cat: "salute", level: "B2", place: "Toulon", minutes: 4,
    title: "À Toulon, les aînés apprennent à ne plus tomber",
    titleEs: "En Tolón, los mayores aprenden a no caerse",
    lead: {
      it: "Une chute de trop, et l'âge bascule. À Toulon, une dizaine de salles accueillent chaque semaine des ateliers d'équilibre : des retraités debout sur des plateaux mous, sérieux comme des danseurs.",
      es: "Un tropiezo de más, y la vejez bascula. En Tolón, una decena de salas acogen cada semana talleres de equilibrio: jubilados de pie sobre plataformas blandas, serios como bailarines.",
    },
    paragraphs: [
      { it: "Le programme a un nom de code : la proprioception. Il s'agit d'apprendre au corps à corriger seul ses faux pas. Les exercices semblent enfantins — marcher comme sur un fil, se lever sans les mains, tourner la tête en comptant à rebours. Il faut que le corps comprenne où il est, même les yeux fermés. Trois séances par semaine, vingt personnes par salle.",
      es: "El programa tiene un nombre en clave: la propiocepción. Se trata de enseñar al cuerpo a corregir solo sus traspiés. Los ejercicios parecen de niños — caminar como sobre un hilo, levantarse sin las manos, girar la cabeza contando hacia atrás. Hace falta que el cuerpo entienda dónde está, incluso con los ojos cerrados. Tres sesiones por semana, veinte personas por sala." },
      { it: "« Le corps se souvient, assure la docteure Inès Morand, médecin coordinatrice. Un équilibre perdu se réapprend comme une langue : doucement, puis tout revient. » Elle a prévenu que la prudence ne remplacerait pas l'entraînement ; elle a ajouté que dix minutes par jour suffiraient à changer l'équilibre d'une vie.",
      es: "«El cuerpo recuerda», asegura la doctora Inès Morand, médica coordinadora. «Un equilibrio perdido se reaprende como un idioma: despacio, y luego vuelve todo.» Advirtió que la prudencia no reemplazaría al entrenamiento; añadió que diez minutos al día bastarían para cambiar el equilibrio de una vida." },
      { it: "Les chiffres de la région sont nets : chez les fidèles des ateliers, les chutes graves ont baissé d'un quart. La ville voudrait que les médecins prescrivent ces cours comme un médicament, bien que les mutuelles rechignent encore à les rembourser. Un simple bilan suffirait à orienter chacun vers le bon groupe ; un cours d'essai ouvrira aux aidants familiaux dès juin.",
      es: "Los números de la región son claros: entre los fieles a los talleres, las caídas graves bajaron un cuarto. La ciudad quisiera que los médicos recetaran estos cursos como un medicamento, aunque las mutuales sigan remisas a reembolsarlos. Una simple evaluación bastaría para orientar a cada uno al grupo adecuado; un curso de prueba abrirá a los cuidadores familiares desde junio." },
      { it: "Les intéressés, eux, ne demandent rien : ils viennent pour la salle, restent pour le thé, repartent plus droits qu'avant. La chute, disent-ils, ne fait plus partie du programme. L'équilibre, lui, s'apprend à tout âge — à condition que l'âge veuille bien s'y prêter.",
      es: "Los interesados, por su parte, no piden nada: vienen por la sala, se quedan por el té y se van más rectos que antes. La caída, dicen, ya no forma parte del programa. El equilibrio se aprende a cualquier edad — a condición de que la edad quiera prestarse a ello." },
    ],
    words: [
      { it: "une chute / les chutes", es: "una caída / las caídas" },
      { it: "l'équilibre", es: "el equilibrio" },
      { it: "la proprioception", es: "la propiocepción" },
      { it: "un exercice / les exercices", es: "un ejercicio / los ejercicios" },
      { it: "un faux pas / les faux pas", es: "un traspiés" },
      { it: "se lever sans les mains", es: "levantarse sin las manos" },
    ],
    questions: [
      { q: "¿Cuánto bajaron las caídas graves?", options: ["De moitié", "D'un quart", "Pas du tout", "D'un tiers"], answer: 1, why: "«les chutes graves ont baissé d'un quart»" },
      { q: "¿Qué no reemplaza al entrenamiento?", options: ["La prudence", "Le thé", "La ville", "La mutuelle"], answer: 0, why: "«la prudence ne remplacerait pas l'entraînement»" },
      { q: "¿Qué bastaría para orientar a cada uno?", options: ["Un an d'attente", "Une lettre du maire", "Un médicament", "Un simple bilan"], answer: 3, why: "«Un simple bilan suffirait à orienter chacun vers le bon groupe»" },
      { q: "¿A qué condición se aprende el equilibrio?", options: ["À condition d'être jeune", "À condition de payer", "À condition que l'âge veuille bien s'y prêter", "À condition de dormir"], answer: 2, why: "«à condition que l'âge veuille bien s'y prêter»" },
    ],
    discuss: [
      { it: "Faut-il prescrire le sport comme un médicament ?", es: "¿Hay que recetar el ejercicio como un medicamento?" },
      { it: "Que fait votre famille contre les chutes des aînés ?", es: "¿Qué hace tu familia contra las caídas de los mayores?" },
    ],
  },

  /* ═══ B2 · 15 — Technologie · Perpignan ═══ */
  {
    id: "fr-news-b2-15", cat: "tecnologia", level: "B2", place: "Perpignan", minutes: 4,
    title: "Près de Perpignan, des miroirs poursuivent le soleil",
    titleEs: "Cerca de Perpiñán, unos espejos persiguen el sol",
    lead: {
      it: "Sur un plateau des Pyrénées, un champ de miroirs tourne du lever au coucher du soleil. Chaque panneau réfléchit la lumière vers une tour ; au sommet, la chaleur fond des sels — et attend la nuit pour devenir électricité.",
      es: "En una meseta de los Pirineos, un campo de espejos gira del amanecer al atardecer. Cada panel refleja la luz hacia una torre; en lo alto, el calor funde sales — y espera la noche para convertirse en electricidad.",
    },
    paragraphs: [
      { it: "L'astuce ne tient pas au miroir mais au sel : chauffé à cinq cents degrés, il garde la chaleur des heures entières. La centrale produit ainsi après le coucher, juste quand les foyers allument leurs lumières. La nuit tombée, les sels rendent l'électricité. « Le soleil ne travaille pas la nuit ; nous, si, explique Théo Cassini, ingénieur. » Il a précisé que la tour alimenterait dix mille foyers un soir d'été.",
      es: "El truco no está en el espejo sino en la sal: calentada a quinientos grados, guarda el calor durante horas enteras. Así la central produce después del atardecer, justo cuando los hogares encienden sus luces. Caída la noche, las sales devuelven la electricidad. «El sol no trabaja de noche; nosotros sí», explica Théo Cassini, ingeniero. Precisó que la torre alimentaría a diez mil hogares una tarde de verano." },
      { it: "Le procédé divise pourtant le voisinage. Les uns saluent une usine sans fumée ; les autres regrettent des hectares perdus pour l'élevage. L'administration estime que la région économiserait des gaz à effet de serre considérables ; les éleveurs objectent qu'il faudrait compter aussi les moutons. Une association d'habitants surveille les promesses d'emploi, ligne par ligne.",
      es: "El procedimiento divide, con todo, al vecindario. Unos saludan una fábrica sin humo; otros lamentan hectáreas perdidas para la ganadería. La administración calcula que la región ahorraría gases de efecto invernadero considerables; los ganaderos objetan que habría que contar también con las ovejas. Una asociación de vecinos vigila las promesas de empleo, línea por línea." },
      { it: "Le débat s'apaisera : il suffit que le projet montre ses promesses pour que les craintes reculent. Bien que la technique soit récente, la logique est ancienne — capter la lumière, la garder, la rendre. Les écoles du secteur visitent déjà le plateau ; les panneaux suivent le soleil devant les enfants, comme une leçon. Un poste d'accueil ouvrira à la rentrée.",
      es: "El debate se calmará: basta con que el proyecto muestre sus promesas para que los temores retrocedan. Aunque la técnica sea reciente, la lógica es antigua — captar la luz, guardarla, devolverla. Las escuelas de la zona ya visitan la meseta; los paneles siguen al sol ante los niños, como una lección. Un puesto de recepción abrirá con el nuevo curso." },
      { it: "Le plateau, lui, ne change pas d'avis : il fait soleil chaque matin, gracieusement. La centrale garde la nuit ; la nuit, désormais, garde la ville. Il ne reste qu'à apprendre le geste aux autres vallées — à condition que le soleil continue, lui, de signer.",
      es: "La meseta, por su parte, no cambia de opinión: hace sol cada mañana, con cortesía. La central guarda la noche; la noche, desde ahora, guarda a la ciudad. Solo queda enseñar el gesto a los demás valles — a condición de que el sol siga, él, firmando." },
    ],
    words: [
      { it: "un miroir / les miroirs", es: "un espejo / los espejos" },
      { it: "la chaleur", es: "el calor" },
      { it: "une centrale / la centrale", es: "una central / la central" },
      { it: "le coucher (du soleil)", es: "el atardecer" },
      { it: "un foyer / les foyers", es: "un hogar / los hogares", note: "aquí «hogar, casa», no «vestíbulo»" },
      { it: "l'électricité", es: "la electricidad" },
    ],
    questions: [
      { q: "¿Cuántos hogares alimentaría la torre?", options: ["Dix mille", "Cent mille", "Un million", "Mille"], answer: 0, why: "«la tour alimenterait dix mille foyers un soir d'été»" },
      { q: "¿Qué guarda el calor durante horas?", options: ["La tour", "Le sel", "Les miroirs", "La nuit"], answer: 1, why: "«chauffé à cinq cents degrés, il garde la chaleur des heures entières»" },
      { q: "¿Qué objetan los ganaderos?", options: ["Que la tour est laide", "Que le sel coûte cher", "Que la nuit tombe trop tôt", "Qu'il faudrait compter aussi les moutons"], answer: 3, why: "«les éleveurs objectent qu'il faudrait compter aussi les moutons»" },
      { q: "¿Qué lógica «antigua» resume el texto?", options: ["Construire plus haut", "Acheter des batteries", "Capter la lumière, la garder, la rendre", "Attendre le vent"], answer: 2, why: "«capter la lumière, la garder, la rendre»" },
    ],
    discuss: [
      { it: "Faut-il couvrir des collines de miroirs pour garder la nuit ?", es: "¿Hay que cubrir colinas de espejos para guardar la noche?" },
      { it: "Votre toit produirait-il ? Que choisiriez-vous : soleil ou ombre ?", es: "¿Produciría tu tejado? ¿Qué elegirías: sol o sombra?" },
    ],
  },
];
