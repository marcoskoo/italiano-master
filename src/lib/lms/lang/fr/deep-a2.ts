import type { CbGrammarDeep } from "../../extra/grammar-deep";

/* ═══ FR A2 · Grammar deep — 12 unidades (français de France) ═════════
   Explicación amplia de la gramática de cada unidad A2, con las trampas
   específicas del hispanohablante. Campos `.it` = francés (lengua de
   estudio), `.es` = español. Secciones: Comment ça marche / Quand
   l'utiliser / Attention ! (pour hispanophones) / Dans la vraie
   conversation. Tipografía francesa: espacio antes de ? ! : ; euros,
   reloj de 24 horas. */

export const FR_DEEP_A2: Record<string, CbGrammarDeep> = {
  "fr-cu-a2-01": {
    sezioni: [
      { t: "Comment ça marche", body: "El passé composé se arma con avoir en presente + participio pasado: «j'ai visité», «tu as déjeuné», «il a mangé», «on a marché», «nous avons regardé», «vous avez écouté», «ils ont joué». Los participios regulares son fáciles: verbos en -er → -é («visiter → visité», «manger → mangé»), la mayoría en -ir → -i («finir → fini») y muchos en -re → -u («attendre → attendu»). Los irregulares se memorizan como una lista corta: «faire → fait», «prendre → pris», «avoir → eu», «voir → vu», «lire → lu», «mettre → mis», «dire → dit». Y ojo a «on»: equivale a nous en el habla, pero conjuga como il/elle: «on a déjeuné», nunca «on avons déjeuné»." },
      { t: "Quand l'utiliser", body: "Cuenta hechos terminados en un momento concreto: «Samedi, j'ai visité le Vieux-Lille» = 'el sábado visité'. Funciona como el indefinido español, pero también cubre lo que en español decimos con el perfecto compuesto: «J'ai déjà goûté le welsh» = 'ya he probado el welsh'. Marcadores típicos: «hier», «samedi dernier», «le week-end dernier», «il y a deux jours». En negación, avoir abraza al participio: «je n'ai pas déjeuné», «on n'a pas marché». Y para preguntar, la entonación basta: «Tu as aimé ?», «Vous avez eu du beau temps ?»." },
      { t: "Attention ! (pour hispanophones)", body: "1) El error clásico es aplicar las reglas del perfecto español: en francés NO existe la frontera 'hoy → perfecto, ayer → indefinido'. Con «hier» se dice passé composé sin problema: «hier, j'ai mangé une gaufre chez Méert». 2) Con avoir el participio es INVARIABLE: «elle a mangé», «elle a visité», nunca «elle a mangée» — olvida el acuerdo de género mientras el auxiliar sea avoir. 3) Distingue «visiter» (visitar un lugar: «j'ai visité le musée») de «rendre visite à» (visitar a una persona: «j'ai rendu visite à Camille»)." },
      { t: "Dans la vraie conversation", body: "El lunes en la oficina francesa arranca con «Alors, qu'est-ce que tu as fait ce week-end ?». La respuesta natural encadena hechos con avoir: «On a dormi jusqu'à midi, on a marché au bord de la Deûle et on a regardé un match au café». Para valorar: «J'ai passé un super week-end !», «C'était trop court !». Si algo torció: «Il a plu tout le week-end» (llovió todo el finde). El colega empuja la historia con «Et après ?», «Vous avez fait quoi dimanche ?»." },
    ],
    esempi: [
      { it: "Samedi soir, j'ai dîné tranquillement avec des amis.", es: "El sábado por la noche cené tranquilamente con unos amigos." },
      { it: "Tu as regardé le match hier soir ?", es: "¿Viste el partido anoche?" },
      { it: "Nous avons pris l'apéritif sur la terrasse d'un café.", es: "Tomamos el aperitivo en la terraza de un café." },
      { it: "Ils ont fait une grande promenade au bord de la mer.", es: "Dieron un largo paseo junto al mar." },
      { it: "Elle a lu un roman policier pendant tout le week-end.", es: "Leyó una novela policíaca durante todo el fin de semana." },
    ],
    usi: [
      { q: "«Anoche preparé una quiche.» ¿Cuál encaja?", options: ["Hier soir, j'ai préparé une quiche.", "Hier soir, je préparais une quiche.", "Hier soir, je vais préparer une quiche."], answer: 0, explain: "Hecho terminado con marcador «hier» → passé composé: j'ai préparé." },
      { q: "«On ___ regardé un match au café.»", options: ["avons", "as", "a"], answer: 2, explain: "«on» conjuga como il/elle: on a regardé; «avons» solo con nous." },
    ],
  },

  "fr-cu-a2-02": {
    sezioni: [
      { t: "Comment ça marche", body: "Unos quince verbos de movimiento o cambio de estado forman el passé composé con être: «aller», «venir», «partir», «arriver», «entrer», «sortir», «monter», «descendre», «rester», «retourner», «devenir», «tomber», «naître», «mourir», «passer». La gran diferencia con avoir: el participio se acuerda con el sujeto como un adjetivo: allé/allée/allés/allées. «Marie est sortie» (una chica), «Inès et Camille sont allées» (grupo de chicas), «nous sommes partis» (grupo masculino o mixto), «vous êtes arrivés» (varios). Con «on», lo estándar es dejarlo invariable: «on est rentré»." },
      { t: "Quand l'utiliser", body: "Sirve para narrar desplazamientos completos — el sujeto entra, sale, llega, vuelve — y cambios de estado («elle est née à Lyon», «il est devenu chef»). Es el tiempo de las crónicas de excursión: «Nous sommes partis à 7 heures, nous sommes arrivés avant l'ouverture, nous sommes restés jusqu'à 18 heures et nous sommes rentrés fatigués». El orden del día se marca con «d'abord», «ensuite», «enfin». Y en preguntas: «Vous êtes arrivés à quelle heure ?», «Elle est sortie quand ?»." },
      { t: "Attention ! (pour hispanophones)", body: "1) La trampa número uno del hispanohablante es elegir avoir por inercia: el español 'fuimos' o 'llegamos' no cambian de auxiliar, pero todo desplazamiento completo pide être. 2) El acuerdo se olvida fácil: sujeto femenino → «sortie» con -e; varias mujeres → «allées» con -es; y «vous êtes arrivée» si hablas a UNA sola mujer. 3) Cuidado con los verbos que llevan complemento directo: «sortir» con être es 'salir', pero «j'ai sorti la clé de ma poche» (avoir) es 'saqué la llave' — el complemento cambia el auxiliar." },
      { t: "Dans la vraie conversation", body: "La excursión se cuenta como una escalera: «Nous sommes partis très tôt» → «on est arrivés les premiers» → «nous sommes montés dans la galerie des Glaces» → «nous sommes descendus dans les jardins» → «on est rentrés morts de fatigue !». En el habla rápida oirás el acuerdo popular «on est allés», y las preguntas cortas: «Vous êtes allés où ?», «Ça s'est bien passé ?». Para reaccionar: «Quelle journée !», «Une excursion inoubliable !»." },
    ],
    esempi: [
      { it: "Je suis allé au marché dès 8 heures du matin.", es: "Fui al mercado a las 8 de la mañana." },
      { it: "Elle est née à Lyon en 1998.", es: "Nació en Lyon en 1998." },
      { it: "Nous sommes restés une heure devant la galerie des Glaces.", es: "Nos quedamos una hora delante de la galería de los Espejos." },
      { it: "Marie et Léo sont partis en voiture à 7 heures.", es: "Marie y Léo salieron en coche a las 7." },
      { it: "Tu es descendu à quelle station ?", es: "¿En qué estación bajaste?" },
    ],
    usi: [
      { q: "«Camille (chica) salió a las 18 horas.»", options: ["Camille a sorti à 18 heures.", "Camille est sortie à 18 heures.", "Camille est sorti à 18 heures."], answer: 1, explain: "sortir de movimiento → être; sujeto femenino singular → salida con -e." },
      { q: "«Nous ___ allés au château de Versailles.»", options: ["avons", "sommes", "êtes"], answer: 1, explain: "aller es verbo de la casa de être: nous sommes allés." },
    ],
  },

  "fr-cu-a2-03": {
    sezioni: [
      { t: "Comment ça marche", body: "El imparfait se forma con la raíz del «nous» del presente + las terminaciones -ais, -ais, -ait, -ions, -iez, -aient: «habiter» → nous habitons → «j'habitais», «tu habitais», «elle habitait», «nous habitions», «vous habitiez», «elles habitaient». Solo être es irregular y se aprende entero: «j'étais, tu étais, il était, nous étions, vous étiez, ils étaient». Avoir es regular desde su raíz av-: «j'avais, tu avais, il avait, nous avions». Un verbo, un solo radical: aparte de être no hay raíces raras que memorizar." },
      { t: "Quand l'utiliser", body: "Es el imperfecto español punto por punto: describe cómo era el pasado («la maison était grande»), qué había («il y avait un potager»), qué solía pasar cada verano («je jouais au foot», «elle faisait des confitures») y estados y edades («j'avais dix ans», «il faisait chaud»). Marcadores que lo delatan: «toujours», «chaque été», «tous les jours», «à l'époque», «autrefois». También pinta la hora y el clima de una historia: «il était 20 heures et il pleuvait»." },
      { t: "Attention ! (pour hispanophones)", body: "1) Trampa de hábitos: el hispanohablante salta al passé composé para los veranos de la infancia ('todos los veranos visité'); en francés el hábito repetido exige imparfait: «tous les étés, je visitais ma grand-mère». 2) No confundas «nous habitons» (presente) con «nous habitions» (imparfait): la -i- cambia el tiempo y en el habla suenan casi igual. 3) «elle habitait» y «elles habitaient» se pronuncian exactamente igual: solo el contexto distingue singular de plural." },
      { t: "Dans la vraie conversation", body: "Las conversaciones con personas mayores son el terreno natural del imparfait: «C'était comment, votre enfance ?», «Nous étions vingt élèves», «Il n'y avait pas de bus, on allait partout à pied». Para abrir recuerdos: «Quand j'étais petit(e)…», «Autrefois…». Y para el broche nostálgico: «C'était une belle époque !», «C'était le bon temps». La persona mayor pregunta «Et toi, tu faisais quoi pendant les vacances ?» y espera imperfecto, no indefinido." },
    ],
    esempi: [
      { it: "Quand j'étais petit, je jouais dans la rue avec les enfants du quartier.", es: "Cuando era pequeño jugaba en la calle con los niños del barrio." },
      { it: "Ma grand-mère faisait des confitures tous les étés.", es: "Mi abuela hacía mermeladas todos los veranos." },
      { it: "Il y avait une boulangerie au coin de la rue.", es: "Había una panadería en la esquina." },
      { it: "Nous allions à la plage en train, chaque mois de juillet.", es: "Íbamos a la playa en tren, cada mes de julio." },
      { it: "Tu avais combien d'années à l'époque ?", es: "¿Cuántos años tenías entonces?" },
    ],
    usi: [
      { q: "«Cada julio visitábamos a la abuela.»", options: ["Chaque juillet, nous avons visité grand-mère.", "Chaque juillet, nous visitions grand-mère.", "Chaque juillet, nous visitons grand-mère."], answer: 1, explain: "Hábito repetido en el pasado → imparfait: nous visitions." },
      { q: "«Nous ___ vingt élèves en classe.» (recuerdo de infancia)", options: ["étions", "était", "serons"], answer: 0, explain: "être en imparfait: nous étions; «était» pertenece a il/elle." },
    ],
  },

  "fr-cu-a2-04": {
    sezioni: [
      { t: "Comment ça marche", body: "Son un equipo: el passé composé empuja la acción (hechos concretos, uno detrás de otro) y el imparfait pinta el decorado (contexto, descripciones, acciones en curso). «Je rentrais en métro et je lisais un livre» es el decorado; «soudain, j'ai reçu un appel et je suis sorti très vite» son los hechos. La estructura clásica de la anécdota tiene tres capas: el imparfait del contexto («il était 22 heures», «il y avait beaucoup de monde»), el passé composé del golpe («j'ai oublié mon sac !») y un desenlace con reacción («finalement, j'ai tout récupéré»)." },
      { t: "Quand l'utiliser", body: "La prueba del algodón: si la pregunta es «¿qué pasó?», passé composé; si es «¿cómo era? ¿qué estaba pasando?», imparfait. Los marcadores delatan el tiempo: «soudain», «tout d'un coup» y las horas concretas empujan al passé composé; «ce soir-là» (descripción), «chaque jour», «toujours» y el clima piden imparfait. Con «quand», la interrupción va en passé composé y lo que se estaba haciendo, en imparfait: «je lisais quand le téléphone a sonné»." },
      { t: "Attention ! (pour hispanophones)", body: "1) El «estaba + gerundio» español no se traduce palabra por palabra: «estaba leyendo» = «je lisais», sin gerundio; existe «j'étais en train de lire», pero en A2 el imparfait basta y suena natural. 2) No mezcles las negaciones: «il n'y avait pas de monde» (decorado: 'no había gente') frente a «il n'y a pas eu de problème» (hecho puntual: 'no hubo problema'). 3) Los estados y sentimientos van en imparfait — «j'étais paniqué», «j'avais peur», «il était en retard» — porque describen cómo estaba, no qué hice." },
      { t: "Dans la vraie conversation", body: "Una anécdota francesa se pide a gritos: «Raconte !», «Il t'est arrivé quoi ?», «Et après, tu as fait quoi ?». El relato alterna los dos tiempos con su música: «Je rentrais tranquillement, il y avait du monde, et là, soudain, j'ai vu…». Las reacciones son fórmula: «Oh non !», «Quelle galère !», «T'as de la chance !». Y el final redondo: «Finalement, tout est bien qui finit bien !» o el clásico «J'étais vraiment soulagé !»." },
    ],
    esempi: [
      { it: "Il était 22 heures et il pleuvait sur Paris.", es: "Eran las 22 y llovía sobre París." },
      { it: "Je lisais tranquillement quand le téléphone a sonné.", es: "Leía tranquilamente cuando el teléfono sonó." },
      { it: "Tout d'un coup, j'ai vu mon sac abandonné sur le quai.", es: "De pronto vi mi bolso abandonado en el andén." },
      { it: "Il y avait beaucoup de monde dans le wagon.", es: "Había mucha gente en el vagón." },
      { it: "Finalement, j'ai tout récupéré et j'étais soulagé.", es: "Al final lo recuperé todo y estaba aliviado." },
    ],
    usi: [
      { q: "«Leía cuando de pronto sonó el teléfono.»", options: ["Je lisais quand soudain le téléphone a sonné.", "J'ai lu quand soudain le téléphone sonnait.", "Je lis quand soudain le téléphone sonne."], answer: 0, explain: "Fondo en imparfait (je lisais) + interrupción en passé composé (a sonné)." },
      { q: "«Il ___ beaucoup de monde dans le métro.» (descripción de la escena)", options: ["y a eu", "y avait", "aura"], answer: 1, explain: "Decorado y contexto → imparfait: il y avait; «il y a eu» sería un hecho puntual ('hubo')." },
    ],
  },

  "fr-cu-a2-05": {
    sezioni: [
      { t: "Comment ça marche", body: "Es calcado del español «ir a + infinitivo»: aller en presente + infinitivo del verbo principal. «Je vais visiter le musée», «tu vas adorer», «il va pleuvoir», «nous allons nous promener», «vous allez voir», «ils vont venir». La negación se forma como siempre: «je ne vais pas sortir ce soir» — el «ne» y el «pas» abrazan a aller y el infinitivo queda fuera. Y en preguntas, la entonación hace todo el trabajo: «Tu vas venir ?», «On va se retrouver où ?»." },
      { t: "Quand l'utiliser", body: "Es el futuro del francés hablado para planes, intenciones y promesas inmediatas: «On va se retrouver à 10 heures devant l'entrée», «Je vais organiser un apéro dinatoire». También expresa lo que va a pasar casi seguro: «Il va faire beau samedi». Con «on va + infinitivo» se proponen planes en grupo — la fórmula número uno para organizar un sábado — y con «tu vas adorer !» se promete y anuncia a la vez. Para ganar tiempo con elegancia: «Je vais y réfléchir»." },
      { t: "Attention ! (pour hispanophones)", body: "1) No confundas los dos «je vais»: «je vais visiter» = voy a visitar (futur proche), pero «je vais au marché» = voy al mercado (aller + lugar, sin infinitivo). 2) El segundo verbo queda SIEMPRE en infinitivo: «on va se retrouver», nunca «on va se retrouve» — es el mismo resbalón del español coloquial 'vamos a se encuentran'. 3) Con verbos reflexivos, el pronombre se queda pegado al infinitivo: «je vais me reposer», «nous allons nous promener» — jamás separado." },
      { t: "Dans la vraie conversation", body: "Los grupos de mensajes franceses son un festival de futur proche: «On fait quoi samedi ?», «On va se retrouver à 10 heures devant le musée», «Je vais apporter une salade», «Hugo va s'occuper des boissons». Para cerrar el plan: «À samedi, les amis !». La respuesta entusiasta: «Génial, je vais adorer !». Y si el plan se cae: «Désolé, je ne vais pas pouvoir venir» — futur proche también para disculparse." },
    ],
    esempi: [
      { it: "Ce soir, je vais rester à la maison et je vais regarder un film.", es: "Esta noche voy a quedarme en casa y voy a ver una película." },
      { it: "On va se promener le long de la Garonne après le déjeuner.", es: "Vamos a pasear a lo largo del Garona después de comer." },
      { it: "Tu vas adorer ce petit restaurant du quartier Saint-Pierre !", es: "¡Te va a encantar este restaurante del barrio Saint-Pierre!" },
      { it: "Je ne vais pas travailler samedi matin.", es: "No voy a trabajar el sábado por la mañana." },
      { it: "Qu'est-ce que tu vas apporter à l'apéro ?", es: "¿Qué vas a llevar al aperitivo?" },
    ],
    usi: [
      { q: "«Vamos a vernos delante de la entrada.»", options: ["On va se retrouver devant l'entrée.", "On va se retrouve devant l'entrée.", "On vas se retrouver devant l'entrée."], answer: 0, explain: "aller + infinitivo, con el pronombre reflexivo pegado al infinitivo: on va se retrouver." },
      { q: "«Nous ___ déjeuner dans le quartier Saint-Pierre.»", options: ["allez", "allons", "vont"], answer: 1, explain: "nous allons + infinitivo; «allez» es de vous y «vont» de ils." },
    ],
  },

  "fr-cu-a2-06": {
    sezioni: [
      { t: "Comment ça marche", body: "El sistema francés cuenta estancias habitables: un «studio» es una sola pieza, un T1 añade la cocina separada, un T2 tiene dormitorio + salón, un T3 dos dormitorios + salón, y así hasta T5 o T6; la cocina y el baño nunca cuentan. El vocabulario del anuncio es un código fijo: «meublé» o «non meublé» (amueblado o vacío), «loyer» (alquiler mensual), «charges comprises» u «hors charges» (gastos incluidos o aparte), «caution» (fianza), «bail» (contrato) y «coloc», la abreviación omnipresente de colocation." },
      { t: "Quand l'utiliser", body: "Para leer anuncios y sobrevivir a la visita: «La chambre est meublée : un lit, un bureau, une armoire», «La fenêtre donne sur une cour calme», «On est au quatrième et il n'y a pas d'ascenseur». Preguntas de oro en la visita: «Le loyer est de combien ?», «Il y a une caution ?», «L'électricité est comprise ?». Y para describir tu propio piso: «C'est un T3 avec une cuisine équipée et un lave-linge»." },
      { t: "Attention ! (pour hispanophones)", body: "1) Falsos amigos: «une chambre» es un dormitorio (no 'cámara'), «habiter» es vivir, y «les charges» son los gastos de comunidad y suministros (no 'cargos' bancarios). 2) Los pisos van desplazados: la planta baja es «rez-de-chaussée» y el «premier étage» francés es nuestro segundo piso — el «quatrième» francés es el quinto español, con lo que las escaleras se notan. 3) «loyer» y «location» no son sinónimos: el loyer es la mensualidad que pagas; la location es el hecho de alquilar o el alquiler vacacional." },
      { t: "Dans la vraie conversation", body: "En la visita, la colocataire habla rápido: «Entre, je te montre la chambre. Elle est meublée, elle donne sur une petite cour, très calme». Los números vuelan: «Le loyer est de 750 euros charges comprises : l'eau, le chauffage, internet. L'électricité n'est pas incluse. La caution, c'est un mois, remboursé quand tu pars». Para cerrar sin compromiso: «Je vais réfléchir et je te donne ma réponse demain»." },
    ],
    esempi: [
      { it: "Je cherche une chambre meublée dans une coloc à Lyon.", es: "Busco una habitación amueblada en un piso compartido en Lyon." },
      { it: "Le loyer est de 680 euros, charges comprises.", es: "El alquiler es de 680 euros, gastos incluidos." },
      { it: "La chambre donne sur une cour très calme.", es: "La habitación da a un patio muy tranquilo." },
      { it: "Il faut payer une caution d'un mois de loyer.", es: "Hay que pagar una fianza de un mes de alquiler." },
      { it: "Nous habitons au troisième étage et il n'y a pas d'ascenseur.", es: "Vivimos en el tercer piso y no hay ascensor." },
    ],
    usi: [
      { q: "Buscas un piso con dormitorio y salón. En el anuncio debes buscar…", options: ["un studio", "un T2", "un T5"], answer: 1, explain: "T2 = dormitorio + salón; el studio es una sola pieza y el T5 es gigantesco." },
      { q: "«El agua y la calefacción están incluidos en los gastos.»", options: ["L'eau et le chauffage sont compris dans la caution.", "L'eau et le chauffage sont hors charges.", "L'eau et le chauffage sont compris dans les charges."], answer: 2, explain: "charges = gastos de comunidad y suministros; «compris dans les charges» = incluidos en ellos." },
    ],
  },

  "fr-cu-a2-07": {
    sezioni: [
      { t: "Comment ça marche", body: "«Avoir mal à» = doler en alguna parte, con el artículo contraído: «j'ai mal à la tête» (la cabeza), «j'ai mal au ventre» (au = à + le), «j'ai mal aux dents» (aux = à + les), «j'ai mal à l'oreille» (ante vocal). «Devoir» (deber) + infinitivo expresa obligación o consejo médico: je dois, tu dois, il/elle doit, nous devons, vous devez, ils doivent. En negación funciona como prohibición: «vous ne devez pas sortir». Y con «depuis», el francés usa el presente para lo que continúa: «j'ai mal à la gorge depuis deux jours»." },
      { t: "Quand l'utiliser", body: "Es el kit completo de la consulta: describir síntomas («j'ai mal à la gorge, j'ai de la fièvre, je tousse»), entender el diagnóstico («la gorge est très rouge») y sobre todo las instrucciones: «Vous devez vous reposer», «Vous devez boire beaucoup d'eau», «Vous devez rester à la maison deux jours». En la farmacia: «Vous avez une ordonnance ?», «Vous avez votre carte Vitale ?». Y para preguntar por otros: «Tu dois prendre un médicament ?»." },
      { t: "Attention ! (pour hispanophones)", body: "1) En español 'me duele' usa un verbo especial; en francés es avoir (tener) + mal à: «j'ai mal à la tête», nunca «je suis mal à la tête». 2) No dejes la contracción a medias: «à le dos» no existe, es «au dos»; «à les dents» es «aux dents»; ante vocal, «à l'oreille». 3) Con «depuis» el verbo va en presente si el síntoma continúa: «j'ai mal depuis deux jours» = 'me duele desde hace dos días'; poner pasado («j'avais mal depuis deux jours») sugiere que ya pasó." },
      { t: "Dans la vraie conversation", body: "El doctor abre con vous: «Bonjour, asseyez-vous. Alors, qu'est-ce qui vous arrive ?». Tú describes: «Docteur, j'ai mal à la gorge et j'ai mal à la tête depuis deux jours. Ce matin, j'avais 38 degrés». El doctor examina y prescribe: «Ouvrez la bouche. Dites « ah ». Je vais vous prescrire un sirop et des pastilles. Voici votre ordonnance : passez à la pharmacie». La despedida: «Merci beaucoup, docteur. — Bonne journée et surtout : reposez-vous !»." },
    ],
    esempi: [
      { it: "J'ai mal au ventre depuis ce matin.", es: "Me duele la barriga desde esta mañana." },
      { it: "Elle a mal à la gorge et elle tousse beaucoup.", es: "Le duele la garganta y tose mucho." },
      { it: "Vous devez boire beaucoup d'eau chaude.", es: "Debe beber mucha agua caliente." },
      { it: "Tu dois éviter le sport pendant une semaine.", es: "Debes evitar el deporte durante una semana." },
      { it: "Le pharmacien m'a donné un sirop pour la toux.", es: "El farmacéutico me dio un jarabe para la tos." },
    ],
    usi: [
      { q: "«Me duelen las muelas.»", options: ["J'ai mal aux dents.", "J'ai mal au dents.", "Je suis mal aux dents."], answer: 0, explain: "avoir mal à + artículo plural contraído: aux dents; con être es imposible." },
      { q: "El doctor te prohíbe salir. ¿Qué dice?", options: ["Vous devez sortir demain.", "Vous ne devez pas sortir.", "Vous voulez sortir."], answer: 1, explain: "devoir en negación + infinitivo = prohibición: vous ne devez pas sortir." },
    ],
  },

  "fr-cu-a2-08": {
    sezioni: [
      { t: "Comment ça marche", body: "El imperativo se forma con el presente sin sujeto: «Prépare la pâte !» (tú), «Préparons la quiche !» (nosotros), «Préparez la table !» (vosotros o usted). La sorpresa del «tu»: los verbos en -er PIERDEN la -s final («Prépare !», «Mélange !»), mientras los -ir la conservan («Finis !», «Choisis !»). Être y avoir son irregulares: «sois / soyons / soyez» y «aie / ayons / ayez». En negación: «N'oublie pas le sel !». En afirmativo, los pronombres van detrás con guion: «Lave-toi les mains !»." },
      { t: "Quand l'utiliser", body: "Es el tiempo de las recetas («Préchauffez le four à 180 degrés», «Ajoutez une pincée de sel»), de las instrucciones y de los consejos a amigos. El «nous» sirve para proponer: «Mangeons ensemble ce soir !», «Allons-y !». El «vous» cubre tanto a varios amigos como a un desconocido tratado de usted. Y las cantidades de receta van con «de»: «250 grammes de farine», «20 centilitres de crème», «un kilo de pommes de terre», «une cuillère d'huile»." },
      { t: "Attention ! (pour hispanophones)", body: "1) La -s del «tu» solo desaparece en los verbos en -er: «Prépare !» pero «Finis !» — y en los irregulares tipo battre: «Bats les œufs !», con -s. 2) El español propone con 'vamos a + infinitivo'; el francés propone con el imperativo nous: «Mangeons !», «Allons-y !» — soltar un infinitivo («Manger !») no convence a nadie. 3) En la cocina francesa se pesa: no existe el 'vaso' como medida universal; son gramos y centilitros, y el horno va en grados Celsius: «à 180 degrés»." },
      { t: "Dans la vraie conversation", body: "Mamie dirige la cocina con imperativos en cadena: «Lave-toi les mains ! Prépare la pâte ! Bats les œufs ! N'oublie pas le sel ! Étale bien la pâte ! Goûte !». Entre instrucciones, las cantidades caen como muletillas: «Une pincée de sel, deux pincées, voilà». Y el elogio final: «C'est délicieux, tu es un chef !». Para pedir tú la receta: «Tu peux me dicter la recette ?»." },
    ],
    esempi: [
      { it: "Préchauffe le four à 180 degrés !", es: "¡Precalienta el horno a 180 grados!" },
      { it: "Mélangez la farine avec le beurre fondu.", es: "Mezclen la harina con la mantequilla derretida." },
      { it: "Ne mélange pas trop la pâte.", es: "No mezcles demasiado la masa." },
      { it: "Ajoutons une pincée de sel et un peu de poivre.", es: "Añadamos una pizca de sal y un poco de pimienta." },
      { it: "Il faut 20 centilitres de crème fraîche et trois œufs.", es: "Hacen falta 20 centilitros de nata fresca y tres huevos." },
    ],
    usi: [
      { q: "«¡Bate los huevos bien!» (a tu amiga Suzanne)", options: ["Bats bien les œufs !", "Bat bien les œufs !", "Battre bien les œufs !"], answer: 0, explain: "battre no es -er: el imperativo tu conserva la -s — bats (como finis)." },
      { q: "«250 g de farine» se lee…", options: ["deux cent cinquante grammes de farine", "deux cents cinquante grammes de farine", "vingt-cinq grammes de farine"], answer: 0, explain: "250 = deux cent cinquante; «cent» no lleva -s cuando va seguido de otra cifra." },
    ],
  },

  "fr-cu-a2-09": {
    sezioni: [
      { t: "Comment ça marche", body: "Para la experiencia laboral, el passé composé equivale a nuestro indefinido: «j'ai travaillé dans un restaurant», «j'ai fait le service en terrasse», «j'ai préparé les cocktails». Marcadores perfectos: «pendant deux mois», «l'été dernier», «il y a deux ans». «Depuis» se construye con PRESENTE cuando la acción continúa: «J'apprends le français depuis trois ans» = 'aprendo desde hace tres años'. Y un detalle fino: être seguido de complemento se conjuga con avoir: «nous avons été cinq serveurs» ('fuimos cinco camareros'), nunca «nous sommes été»." },
      { t: "Quand l'utiliser", body: "En la entrevista de job d'été: «Vous avez déjà travaillé ?», «Vous avez servi en salle ou en terrasse ?», «Vous parlez français depuis combien de temps ?». Tus respuestas: «L'été dernier, j'ai travaillé dans un restaurant à Barcelone pendant deux mois», «J'habite à Marseille depuis six mois», «Je parle espagnol, anglais et français». Y la disponibilidad: «Je suis disponible de juin à septembre»." },
      { t: "Attention ! (pour hispanophones)", body: "1) El error estrella es calcar el perfecto español: 'aprendo francés desde hace tres años' NO es «j'ai appris depuis trois ans» sino «j'apprends depuis trois ans» — presente con depuis si la acción sigue en curso. 2) No confundas «il y a deux ans» (hace dos años, punto cerrado) con «depuis deux ans» (desde hace dos años, aún continúa). 3) «pendant deux mois» acompaña al passé composé terminado; si el trabajo sigue, la frase cambia de rumbo: «je travaille ici depuis deux mois»." },
      { t: "Dans la vraie conversation", body: "El patrón de un bistro entrevista rápido y directo: «Bonjour, asseyez-vous. Parlez-moi de vous. Vous avez déjà travaillé ? Vous parlez français depuis combien de temps ? Vous êtes disponible en juillet et août ?». Tus balas de plata: «J'ai tout fait : salle, terrasse et caisse», «J'apprends le français depuis trois ans». Y las condiciones a la francesa: «Salaire : le SMIC, plus les pourboires. Repas compris !»." },
    ],
    esempi: [
      { it: "J'ai travaillé comme serveur pendant tout un été.", es: "Trabajé de camarero durante todo un verano." },
      { it: "Nous avons été six serveurs dans ce restaurant.", es: "Fuimos seis camareros en ese restaurante." },
      { it: "J'habite à Marseille depuis six mois.", es: "Vivo en Marsella desde hace seis meses." },
      { it: "Vous avez déjà fait la caisse ?", es: "¿Ya se ha encargado de la caja?" },
      { it: "Il y a deux ans, j'ai servi en terrasse à Barcelone.", es: "Hace dos años serví en la terraza en Barcelona." },
    ],
    usi: [
      { q: "«Vivo en Francia desde hace dos años.»", options: ["J'ai habité en France depuis deux ans.", "J'habite en France depuis deux ans.", "J'habite en France il y a deux ans."], answer: 1, explain: "La acción continúa → presente + depuis; «il y a» marca un punto cerrado del pasado." },
      { q: "«Fuimos cinco camareros en Barcelona.»", options: ["Nous sommes été cinq serveurs.", "Nous avons être cinq serveurs.", "Nous avons été cinq serveurs."], answer: 2, explain: "être + complemento se conjuga con avoir: nous avons été." },
    ],
  },

  "fr-cu-a2-10": {
    sezioni: [
      { t: "Comment ça marche", body: "El futur simple nace del infinitivo más las terminaciones -ai, -as, -a, -ons, -ez, -ont: «aimer → j'aimerai, tu aimeras, il aimera, nous aimerons, vous aimerez, ils aimeront». Los verbos en -re pierden la e final: «prendre → je prendrai». Y los grandes irregulares cambian de raíz: «être → je serai», «avoir → j'aurai», «aller → j'irai», «faire → je ferai», «venir → je viendrai», «pouvoir → je pourrai», «voir → je verrai», «vouloir → je voudrai»." },
      { t: "Quand l'utiliser", body: "Para el futuro lejano, las promesas y la météo: «il fera très chaud en août», «il pleuvra sur le Nord», «le mistral soufflera l'après-midi», «il y aura de la place pour tout le monde». Dos muletas de oro: «tu verras» (ya verás) y «ce sera» (será). El futur simple convive con el futur proche: el primero para soñar y prometer («nous prendrons le bateau»), el segundo para concretar planes ya decididos («on va nager demain matin»)." },
      { t: "Attention ! (pour hispanophones)", body: "1) Los verbos en -re pierden la e: «je prendrai», nunca «je prendeai» — y «je viendrai» con la raíz viend-, no «venirai». 2) No mezcles las formas en la misma frase: «je vais irai» es imposible; eliges futur proche («je vais aller») o futur simple («j'irai»), pero nunca los dos. 3) En la météo el verbo 'hacer' es faire: 'será buen tiempo' = «il fera beau», nunca «il sera beau temps» calcado del español." },
      { t: "Dans la vraie conversation", body: "La videollamada de vacaciones mezcla los dos futuros sin darse cuenta: «On sera là du 1er au 15 août» (futur simple de être), «Nous avons loué une petite maison : il y aura de la place pour tout le monde !», «Il fera très chaud : 30 degrés à l'ombre», «On pourra nager tous les matins». Y el broche: «Tu verras les calanques, tu vas adorer ! J'ai hâte !» — futur simple para prometer, futur proche para entusiasmar." },
    ],
    esempi: [
      { it: "En août, il fera très chaud à Cassis.", es: "En agosto hará mucho calor en Cassis." },
      { it: "Nous prendrons le petit bateau pour les calanques.", es: "Tomaremos el barquito hacia las calanques." },
      { it: "Tu verras, la mer sera turquoise.", es: "Ya verás, el mar será turquesa." },
      { it: "Il y aura du mistral l'après-midi.", es: "Habrá mistral por la tarde." },
      { it: "On logera dans une petite maison avec vue sur la mer.", es: "Nos alojaremos en una casita con vistas al mar." },
    ],
    usi: [
      { q: "«Mañana hará buen tiempo en Provenza.»", options: ["Il sera beau temps demain en Provence.", "Il fera beau demain en Provence.", "Il fait beau demain en Provence."], answer: 1, explain: "La météo usa faire: il fera beau; el calco con être del español 'será buen tiempo' no funciona." },
      { q: "«Tomaremos el barco a las 10 heures.»", options: ["Nous prendeons le bateau à 10 heures.", "Nous prenons le bateau à 10 heures.", "Nous prendrons le bateau à 10 heures."], answer: 2, explain: "prendre pierde la -e ante la terminación: prendrons." },
    ],
  },

  "fr-cu-a2-11": {
    sezioni: [
      { t: "Comment ça marche", body: "Los pronombres de complemento van DELANTE del verbo conjugado: COD «me, te, le, la, nous, vous, les» (me, te, lo, la, nos, os, los/las) y COI «me, te, lui, nous, vous, leur» (me, te, le, les, con «a»). «Je vous écoute», «Elle m'a aidé hier», «Je lui ai téléphoné». La tercera persona se bifurca: le/la/les para el complemento directo y lui/leur para el indirecto, sin distinguir género: «je lui téléphone» = le llamo, a él O a ella. En imperativo afirmativo, los pronombres van detrás con guion: «Donnez-moi la clé», «Donnez-la-moi» (verbo + le/la/les + moi)." },
      { t: "Quand l'utiliser", body: "Para pedir favores con cortesía: «Je peux vous demander un service ?», «Pourriez-vous arroser mes plantes, s'il vous plaît ?» — pourriez-vous es poder en conditionnel, la fórmula suprema con desconocidos. En registro informal: «Tu peux me rendre un service ?». Los pronombres también sirven para contar: «Elle m'a aidé hier», «Je leur ai laissé une liste». Y el par perfecto de la cortesía vecinal: «Merci infiniment !» → «Je vous en prie»." },
      { t: "Attention ! (pour hispanophones)", body: "1) La trampa del «le»: 'le llamo' es je LUI téléphone (téléphoner à + persona), nunca «je le téléphone»; si el verbo lleva «a» en español, casi siempre pide lui/leur. 2) El pronombre va delante del verbo conjugado, también con infinitivo: «je vais te voir» (voy a verte), «je vais lui téléphoner» — el hispanohablante tiende a pegarlo al final como en español. 3) En imperativo NEGATIVO el pronombre vuelve delante: «Ne me donnez pas ça !» — solo el afirmativo lo pospone con guion." },
      { t: "Dans la vraie conversation", body: "El portal del edificio, un cruce de vecinos: «Bonjour, madame Meyer ! Je peux vous demander un service ? Nous partons en week-end. Pourriez-vous arroser mes plantes et relever notre courrier ?». Ella acepta y pide la llave: «Pas de problème ! Donnez-moi la clé : je les arroserai samedi matin». Cierre educado: «Merci infiniment, madame ! — Je vous en prie, c'est normal entre voisins !»." },
    ],
    esempi: [
      { it: "Pourriez-vous relever mon courrier, s'il vous plaît ?", es: "¿Podría recogerme el correo, por favor?" },
      { it: "Je lui ai demandé un service hier soir.", es: "Le pedí un favor anoche." },
      { it: "Mes voisins m'ont beaucoup aidé à mon arrivée.", es: "Mis vecinos me ayudaron mucho a mi llegada." },
      { it: "Donnez-la-moi avant de partir, s'il vous plaît.", es: "Démela antes de irse, por favor." },
      { it: "Je vous en prie, c'est normal entre voisins !", es: "De nada, ¡es normal entre vecinos!" },
    ],
    usi: [
      { q: "«Le telefoneé a la vecina ayer.»", options: ["Je la ai téléphoné à la voisine hier.", "Je lui ai téléphoné hier.", "Je l'ai téléphoné hier."], answer: 1, explain: "téléphoner à + persona → COI: lui, colocado delante del passé composé." },
      { q: "«Démela» (la llave, a su vecina):", options: ["Donnez-moi-la !", "La donnez-moi !", "Donnez-la-moi !"], answer: 2, explain: "Imperativo afirmativo: verbo + le/la/les + moi → donnez-la-moi." },
    ],
  },

  "fr-cu-a2-12": {
    sezioni: [
      { t: "Comment ça marche", body: "Los conectores ordenan cualquier relato: «d'abord» (primero), «puis» (luego), «ensuite» (después), «enfin» (por último, y también '¡por fin !'). «D'abord, validez votre billet, puis montez dans la voiture 12, ensuite dormez un peu, enfin arrivez à Marseille !». El superlativo se forma con le/la/les plus (o le/la/les moins) + adjetivo, y el adjetivo va DESPUÉS del sustantivo: «le train le plus rapide», «la ville la plus belle», «le billet le moins cher». Irregulares: «le meilleur» (el mejor, de bon) y «le pire» (el peor)." },
      { t: "Quand l'utiliser", body: "Es la gramática de los viajes: dar instrucciones por etapas («D'abord, prenez la ligne 1, ensuite changez à Châtelet, enfin descendez à Vieux-Port»), presumir de ciudad («C'est la plus belle vue de Marseille», «le meilleur endroit du quartier») y elegir («C'est le billet le moins cher de la journée»). Para delimitar el grupo comparado se usa «de»: «la plus belle vue de la ville», «le plus rapide de France»." },
      { t: "Attention ! (pour hispanophones)", body: "1) El orden es fijo e invertido respecto al español, que admite 'el más rápido tren': en francés, sustantivo primero y después le/la plus + adjetivo: «le train le plus rapide», nunca «le plus rapide train». 2) El adjetivo concuerda: «la plus belle vue» (femenina), «les plus belles plages» (plural); y bon no forma «le plus bon» sino «le meilleur». 3) «Enfin» tiene dos almas: ordena ('por último') y suspira ('¡por fin !'): «Enfin, nous sommes arrivés !» puede ser las dos cosas — la entonación decide." },
      { t: "Dans la vraie conversation", body: "En la gare, el agente encadena conectores sin respirar: «D'abord, validez votre billet, puis montez voiture 12, place 52, côté fenêtre. Ensuite, à Marseille, prenez le métro ligne 1, et enfin descendez à la station Vieux-Port». Para presumir de tu ciudad de vacaciones: «Le Vieux-Port, c'est le plus bel endroit de Marseille, avec la plus belle vue de la ville !». Y para pedir consejo: «Qu'est-ce que je dois voir d'abord ?»." },
    ],
    esempi: [
      { it: "D'abord, achetez votre billet, puis cherchez votre voie.", es: "Primero compre su billete, luego busque su vía." },
      { it: "Ensuite, vous prendrez le métro, et enfin vous arriverez au Vieux-Port.", es: "Después tomará el metro y por último llegará al Vieux-Port." },
      { it: "C'est la plus belle vue de toute la ville.", es: "Es la vista más bonita de toda la ciudad." },
      { it: "Le TGV est le train le plus rapide de France.", es: "El TGV es el tren más rápido de Francia." },
      { it: "C'est le meilleur restaurant du quartier, croyez-moi !", es: "Es el mejor restaurante del barrio, ¡créame!" },
    ],
    usi: [
      { q: "«Es el billete más barato del día.»", options: ["C'est le billet le moins cher de la journée.", "C'est le plus cher billet de la journée.", "C'est le billet le plus cher de la journée."], answer: 0, explain: "Sustantivo + le moins + adjetivo; 'más barato' = menos caro: le moins cher." },
      { q: "¿Cuál es la secuencia canónica para narrar por etapas?", options: ["Ensuite, d'abord, enfin, puis", "D'abord, puis, ensuite, enfin", "Enfin, puis, d'abord, ensuite"], answer: 1, explain: "El orden lógico de los conectores: primero, luego, después, por último." },
    ],
  },
};
