import type { CbGrammarDeep } from "../../extra/grammar-deep";

/* ═══ FR B1 · Grammar deep — 12 unidades (français de France) ═════════
   Explicación amplia de la gramática de cada unidad B1, con las trampas
   específicas del hispanohablante (indicatif vs subjuntivo, en/y, desde,
   lieu de l'adjectif, faillir + infinitif). Campos `.it` = francés
   (lengua de estudio), `.es` = español. Secciones: Comment ça marche /
   Quand l'utiliser / Attention ! (pour hispanophones) / Dans la vraie
   conversation. Tipografía francesa: espacio antes de ? ! : ; euros,
   reloj de 24 horas, guillemets « ». */

export const FR_DEEP_B1: Record<string, CbGrammarDeep> = {
  "fr-cu-b1-01": {
    sezioni: [
      { t: "Comment ça marche", body: "Para opinar, el francés alinea tres motores seguidos de indicativo: «je pense que» (opinión razonada, como 'pienso que'), «je trouve que» (impresión personal, como 'me parece que') y «à mon avis» / «selon moi» (fórmulas neutras que abren la frase). Para reaccionar: «je suis d'accord avec toi» (con personas) o «je suis d'accord sur ce point» (con temas), y la pareja del débat: «tu as raison» / «tu as tort», siempre con avoir. El matiz es lo que suena B1: «c'est vrai que» abre una concesión, «tu as raison sur un point» regala un acuerdo parcial y «en tout cas» cierra sin romper la conversación." },
      { t: "Quand l'utiliser", body: "En cualquier débat de café, reunión o foro: opinión + razón + matiz es la estructura francesa por excelencia, porque el «oui, mais» es casi un deporte nacional. Empiezas con «à mon avis, le télétravail est une chance», sostienes con «je trouve que je travaille mieux chez moi», cedes terreno con «c'est vrai que les réunions à distance sont fatigantes» y cierras con «en tout cas, le débat est ouvert». Para pedir la opinión del otro: «et toi, qu'est-ce que tu en penses ?», con el pronombre en." },
      { t: "Attention ! (pour hispanophones)", body: "1) El español dispara subjuntivos donde el francés mantiene el indicativo: «no creo que sea grave» se dice en el francés corriente «je ne pense pas que c'est grave» (la norma culta admite «que ce soit»), y con 'aunque' hipotético el francés usa «même si» + indicatif: «même s'il pleuvait, je viendrais». No traduzcas el subjuntivo español por reflejo. 2) La razón se tiene, como en español, pero con avoir: «tu as raison», «il a tort»; «tu es raison» es imposible. 3) être d'accord va con avec (personas) o sur (temas), nunca con de; y para preguntar la opinión se dice «qu'est-ce que tu en penses ?», con en, no un calco de «qué piensas»." },
      { t: "Dans la vraie conversation", body: "En la terraza del canal, el débat arranca siempre igual: «Alors, qu'est-ce que tu en penses du télétravail ?». Las respuestas encadenan las fórmulas: «À mon avis, c'est le meilleur des deux mondes», «Je trouve que les open spaces sont trop bruyants», «Tu as raison sur un point : on perd les pauses café». Cuando alguien exagera, el matiz lo corrige todo: «C'est vrai que, en partie», «En tout cas, chacun son rythme». Y la salida elegante cuando no te convencen: «Je ne suis pas d'accord du tout, mais je t'écoute»." },
    ],
    esempi: [
      { it: "À mon avis, ce film est le meilleur de l'année.", es: "En mi opinión, esta película es la mejor del año." },
      { it: "Je trouve que les lundis matin sont difficiles pour tout le monde.", es: "Me parece que los lunes por la mañana son difíciles para todos." },
      { it: "Je ne suis pas d'accord avec toi sur ce point.", es: "No estoy de acuerdo contigo en ese punto." },
      { it: "Selon moi, le marché du dimanche vaut le détour.", es: "Según yo, el mercado del domingo merece la visita." },
      { it: "C'est vrai que le loyer est cher, mais la ville est magnifique.", es: "Es cierto que el alquiler es caro, pero la ciudad es preciosa." },
    ],
    usi: [
      { q: "«Me parece que los vecinos tienen razón.»", options: ["Je trouve que les voisins sont raison.", "Je trouve que les voisins ont raison.", "Je trouve que les voisins soient raison."], answer: 1, explain: "je trouve que + indicatif, y la razón se tiene con avoir: ont raison." },
      { q: "«Estoy de acuerdo contigo en ese punto.»", options: ["J'ai d'accord avec toi sur ce point.", "Je suis d'accord de toi à ce point.", "Je suis d'accord avec toi sur ce point."], answer: 2, explain: "être d'accord avec + personne / sur + thème; nunca avoir y nunca de." },
    ],
  },

  "fr-cu-b1-02": {
    sezioni: [
      { t: "Comment ça marche", body: "El plus-que-parfait se arma con avoir o être en imparfait + participio: «j'avais rédigé», «elle était partie», «nous avions fini», «ils s'étaient disputés». Expresa una acción anterior a otra pasada, exactamente como el 'había hecho' español. La marca de la experiencia es «ne + auxiliaire + jamais + participe»: «je n'avais jamais participé à une réunion», y ojo: con jamais el complemento pasa a de («je n'avais jamais rédigé de rapport»). «déjà» se coloca entre auxiliar y participio: «tu avais déjà travaillé en équipe ?»." },
      { t: "Quand l'utiliser", body: "Sitúa vivencias antes de un punto de referencia pasado: «avant ce stage», «quand je suis arrivé, la réunion avait déjà commencé». Es el tiempo del carnet de stage: qué nunca habías hecho antes de llegar («je n'avais jamais pris la parole»), qué dominabas ya («j'avais déjà rédigé des articles») y la joya narrativa «c'était la première fois que + imparfait» ('era la primera vez que hacía'). Y para lo que sigue en marcha, «depuis» con presente: «depuis trois ans, je valide les rapports»." },
      { t: "Attention ! (pour hispanophones)", body: "1) Con depuis el francés NO cambia de verbo: 'llevo tres años trabajando aquí' es «je travaille ici depuis trois ans», en presente; el español salta a 'llevo', el francés se queda quieto. 2) La negación jamais arrastra el partitivo de: «je n'avais jamais fait de présentation», mientras el español mantiene el artículo ('nunca había hecho una presentación'). 3) «c'était la première fois que + imparfait» se calca del español ('era la primera vez que hacía'); la trampa inversa es meter plus-que-parfait ahí, con la idea de que 'primera vez' pide algo más complicado. No lo necesita." },
      { t: "Dans la vraie conversation", body: "En la pausa del mediodía, los recuerdos de stage se piden solos: «Et toi, ton premier stage, c'était comment ?». Las respuestas encadenan plus-que-parfait: «Avant d'arriver, je n'avais jamais participé à un vrai projet», «Quand je suis entré, tout le monde avait déjà lu mon dossier», «C'était la première fois que je rédigeais un rapport». El colega empuja con «Tu avais quel âge ?», «Et depuis, tu te sens à l'aise ?», y el broche: «l'expérience ne s'achète pas, elle se vit»." },
    ],
    esempi: [
      { it: "Avant ce voyage, je n'avais jamais pris le train de nuit.", es: "Antes de ese viaje, nunca había cogido el tren nocturno." },
      { it: "Quand nous sommes arrivés, la fête avait déjà commencé.", es: "Cuando llegamos, la fiesta ya había empezado." },
      { it: "Elle m'a dit qu'elle n'avait jamais vu la mer.", es: "Me dijo que nunca había visto el mar." },
      { it: "C'était la première fois que je parlais en public.", es: "Era la primera vez que hablaba en público." },
      { it: "Il cherchait ses clés : il les avait laissées au bureau.", es: "Buscaba sus llaves: las había dejado en la oficina." },
    ],
    usi: [
      { q: "«Cuando llegué, la reunión ya había empezado.»", options: ["Quand je suis arrivé, la réunion a déjà commencé.", "Quand je suis arrivé, la réunion avait déjà commencé.", "Quand j'arrivais, la réunion commencera déjà."], answer: 1, explain: "Anterioridad respecto a un pasado: plus-que-parfait avait déjà commencé." },
      { q: "«Llevo seis meses en esta empresa.»", options: ["Je suis dans cette entreprise depuis six mois.", "J'étais dans cette entreprise depuis six mois.", "Je suis dans cette entreprise il y a six mois."], answer: 0, explain: "depuis + présent para lo que continúa; «il y a» marca un punto pasado." },
    ],
  },

  "fr-cu-b1-03": {
    sezioni: [
      { t: "Comment ça marche", body: "La hipótesis irreal tiene dos mitades: «si + imparfait» en la subordinada y «conditionnel présent» en la principal: «si j'étais maire, je créerais des espaces verts». El condicional se construye sobre el infinitivo con las terminaciones del imparfait (-ais, -ais, -ait, -ions, -iez, -aient): «je transformer-ais», «tu install-erais», «on limiter-ait». Los irregulares toman la raíz del futuro: être → «je serais», avoir → «j'aurais», aller → «j'irais», faire → «je ferais», venir → «je viendrais», pouvoir → «je pourrais»; y los verbos en -re pierden la e final: prendre → «je prendrais»." },
      { t: "Quand l'utiliser", body: "Sirve para soñar en voz alta («si on transformait la place en jardin ?»), aconsejar («à ta place, je contacterais la mairie») y proponer en grupo con suavidad: «on pourrait organiser une fête», «il faudrait penser aux enfants», «ce serait génial», «il y aurait plus de monde le soir». Cubre hipótesis sobre el presente («si j'avais le temps, maintenant») y sobre el futuro cercano; el imperfecto español 'si fuera' y el imparfait francés «si j'étais» son gemelos, así que el mapa mental ya lo tienes." },
      { t: "Attention ! (pour hispanophones)", body: "1) Regla de oro: después de si NUNCA va condicional, igual que el español no dice 'si tendría tiempo': «si j'avais le temps», jamás «si j'aurais le temps» (lo oirás en el habla popular, pero no lo imites). 2) Formación: el condicional es el futuro con terminaciones de imparfait — «je ferai» (haré) → «je ferais» (haría); a la primera persona suenan igual, y solo la escritura y el contexto los distinguen. 3) Para aconsejar, el español dice 'yo que tú' o 'en tu lugar': el francés fija «à ta place» + condicional, y 'habría que' es «il faudrait», 'se podría' es «on pourrait» + infinitivo." },
      { t: "Dans la vraie conversation", body: "En la asamblea de barrio, las ideas vuelan con este molde: «Si on transformait la place en grand jardin ? — Ce serait génial !», «Si j'étais maire, je limiterais les voitures», «À ta place, je parlerais avec les voisins d'abord», «Il faudrait penser aux enfants», «Il y aurait plus de monde le week-end». Para cerrar una propuesta colectiva, la fórmula mágica: «On n'a qu'à écrire nos idées et à les déposer dans la boîte !» — y todo el mundo asiente." },
    ],
    esempi: [
      { it: "Si j'étais maire, je créerais plus d'espaces verts.", es: "Si fuera alcalde, crearía más espacios verdes." },
      { it: "S'il y avait moins de voitures, l'air serait plus pur.", es: "Si hubiera menos coches, el aire sería más puro." },
      { it: "À ta place, je prendrais le tramway.", es: "Yo en tu lugar, cogería el tranvía." },
      { it: "On pourrait organiser une fête de quartier.", es: "Se podría organizar una fiesta de barrio." },
      { it: "Ce serait dommage de fermer ce petit cinéma.", es: "Sería una lástima cerrar este cine pequeño." },
    ],
    usi: [
      { q: "«Si tuviera tiempo, arreglaría la plaza.»", options: ["Si j'aurais le temps, je réparerais la place.", "Si j'avais le temps, je réparerais la place.", "Si j'ai le temps, je réparerai la place."], answer: 1, explain: "Hipótesis irreal: si + imparfait + conditionnel; el condicional tras si es imposible." },
      { q: "«Habría que escuchar a los vecinos.» (propuesta suave)", options: ["Il faut écouter les voisins.", "Il faudra écouter les voisins.", "Il faudrait écouter les voisins."], answer: 2, explain: "Propuesta hipotética suave: conditionnel de il faut → il faudrait; «il faut» sería obligación directa." },
    ],
  },

  "fr-cu-b1-04": {
    sezioni: [
      { t: "Comment ça marche", body: "El futur simple se forma con infinitivo + -ai, -as, -a, -ons, -ez, -ont: «je distribuerai», «tu organiseras», «nous organiserons», «vous voterez». Los verbos en -re pierden la e final (prendre → «je prendrai», mettre → «je mettrai») y los irregulares tienen raíz propia: être → «je serai», avoir → «j'aurai», aller → «j'irai», faire → «je ferai», venir → «je viendrai», pouvoir → «je pourrai», tenir → «je tiendrai». El futur antérieur es futur simple del auxiliar + participio: «j'aurai affiché», «tu auras organisé», «on sera partis», y expresa una acción futura ANTERIOR a otra futura." },
      { t: "Quand l'utiliser", body: "Es el tiempo de las promesas y de los planes formales: «si vous m'élisez, j'organiserai un café des voisins chaque mois». El futur antérieur trabaja con quand y dès que: «quand j'aurai fini mes tracts, je ferai une pause», «dès que tu auras lu le programme, tu voteras», «d'ici dimanche, vous aurez voté». En el discurso político actual también reina el futur proche («on va changer les choses») porque suena cercano y de acción: mezclar los dos es puro estilo de campaña." },
      { t: "Attention ! (pour hispanophones)", body: "1) El español pega el futuro en una sola palabra («repartiré»); el francés le añade la terminación al infinitivo completo: «je distribuerai». Cuidado con los -re: 'tomaré' es «je prendrai», nunca una forma calcada del español. 2) Tras quand y dès que, el español dice 'cuando termine' o 'cuando haya terminado'; el francés estándar exige futuro en las dos partes: «quand tu auras lu, tu voteras» — dejar «quand tu as lu» con valor futuro suena a error. 3) A la primera persona, futur simple y conditionnel suenan idénticos («je ferai» / «je ferais»): solo la otra mitad de la frase delata si hablas de mañana o de un sueño." },
      { t: "Dans la vraie conversation", body: "La campaña en la résidence suena así: «Si vous m'élisez, j'organiserai des cafés des voisins chaque mois», «Dès que nous aurons le budget, nous installerons une machine à café au hall», «Quand vous aurez lu mon programme, vous voterez en connaissance de cause», «Je tiendrai mes promesses, promis !». El elector escéptico responde con la frase nacional: «On verra ça après les élections !» — porque todo el mundo sabe que las promesas se verifican con el calendario." },
    ],
    esempi: [
      { it: "Demain, nous organiserons une réunion dans le hall.", es: "Mañana organizaremos una reunión en el vestíbulo." },
      { it: "Quand j'aurai affiché mes tracts, je ferai une pause.", es: "Cuando haya colgado mis octavillos, haré una pausa." },
      { it: "D'ici dimanche, vous aurez voté pour vos délégués.", es: "Para el domingo, habréis votado a vuestros delegados." },
      { it: "Elle tiendra sa promesse, tu verras.", es: "Cumplirá su promesa, ya verás." },
      { it: "Dès que le budget sera validé, on installera des bornes à vélos.", es: "En cuanto se apruebe el presupuesto, instalaremos puntos de bicicletas." },
    ],
    usi: [
      { q: "«Cuando haya terminado el informe, te lo enviaré.»", options: ["Quand je finirai le rapport, je te l'envoie.", "Quand j'aurai fini le rapport, je te l'enverrai.", "Quand j'aurais fini le rapport, je t'envoie."], answer: 1, explain: "Futur antérieur (j'aurai fini) para lo anterior + futur simple (enverrai) para lo posterior." },
      { q: "«tomaré» (futuro de prendre)", options: ["je prendereai", "je prendrai", "je prendsrai"], answer: 1, explain: "Los verbos en -re pierden la e final ante la terminación: prendre → je prendrai." },
    ],
  },

  "fr-cu-b1-05": {
    sezioni: [
      { t: "Comment ça marche", body: "La obligación tiene dos motores: «devoir» conjugado + infinitivo («je dois partir», «vous devez passer à la caisse») para la obligación con persona, e «il faut» + infinitivo o sustantivo («il faut un bonnet», «il faut réserver») para la obligación impersonal, invariable como el 'hay que' español. La prohibición usa «être interdit de + infinitivo» («il est interdit de manger ici») o el cartel clásico «c'est interdit !», y el permiso se apoya en «avoir le droit de + infinitivo», que invoca el reglamento, mientras pouvoir pregunta capacidad o permiso general." },
      { t: "Quand l'utiliser", body: "Es el kit del règlement francés: piscinas, médiathèques, transportes. «Vous devez porter un bonnet de bain», «il est interdit de courir au bord du bassin», «on a le droit d'apporter une serviette ?». El matiz de consejo llega con el condicional: «je devrais» = 'debería'. Y los carteles franceses adoran el sustantivo: «l'entrée est interdite», «l'accès est réservé», «le bonnet est obligatoire» — la lengua de los avisos se reconoce a primera vista." },
      { t: "Attention ! (pour hispanophones)", body: "1) 'Hay que' → «il faut + infinitivo»; 'tengo que' → «je dois + infinitivo»: son dos motores distintos, y mezclarlos («il faut je dois») es imposible. La versión personal «il faut que + subjuntivo» se verá en la unidad 11. 2) Casi gemelos para el oído: «avoir raison» (tener razón) y «avoir le droit de» (tener derecho a); 'tiene derecho a entrar' es «il a le droit d'entrer», no «il a raison d'entrer». 3) El español cuelga 'prohibido' solo en el cartel («Prohibido fumar»); el francés pide frase completa: «il est interdit de fumer» o el administrativo «défense de fumer»; y 'está permitido' es «c'est permis» / «c'est autorisé»." },
      { t: "Dans la vraie conversation", body: "En la piscine municipale, el agent no negocia: «Vous devez porter un bonnet, c'est obligatoire. Il est interdit de courir au bord du bassin. Les shorts ne sont pas autorisés». La negociación educada abre con la fórmula mágica: «Excusez-moi, madame, est-ce qu'on a le droit d'apporter une planche ?» — y la respuesta suele ser non, pero con cortesía. En la médiathèque el reglamento se susurra: «ici, il faut parler à voix basse et éteindre son téléphone»." },
    ],
    esempi: [
      { it: "Ici, il faut présenter votre carte à l'entrée.", es: "Aquí hay que presentar la tarjeta a la entrada." },
      { it: "Il est interdit de manger dans les salles de lecture.", es: "Está prohibido comer en las salas de lectura." },
      { it: "Vous devez ranger vos affaires avant de partir.", es: "Debe guardar sus cosas antes de irse." },
      { it: "Est-ce qu'on a le droit de photographier les tableaux ?", es: "¿Se pueden fotografiar los cuadros?" },
      { it: "Tu devrais te reposer ce week-end.", es: "Deberías descansar este fin de semana." },
    ],
    usi: [
      { q: "Cartel de la piscina: «Está prohibido saltar.»", options: ["Il est interdit de sauter.", "Il est défendu sauter.", "On doit sauter."], answer: 0, explain: "être interdit de + infinitivo: la fórmula de cartel; «on doit» expresaría obligación, no prohibición." },
      { q: "«Hay que reservar la sala.» (impersonal)", options: ["On doit réserver la salle.", "Il faut que réserver la salle.", "Il faut réserver la salle."], answer: 2, explain: "il faut + infinitivo = 'hay que', impersonal; la versión con persona sería «il faut qu'on réserve» + subjuntivo." },
    ],
  },

  "fr-cu-b1-06": {
    sezioni: [
      { t: "Comment ça marche", body: "Para retransmitir palabras: «dire que», «annoncer que», «raconter que» + la frase dicha, y «demander si» para las preguntas indirectas. Si el verbo introductor está en pasado, los tiempos retroceden un escalón: présent → imparfait («Léo a dit qu'il cherchait»), passé composé → plus-que-parfait («ils ont dit qu'ils s'étaient disputés»), futur → conditionnel («elle a dit qu'elle viendrait»). Los marcadores también se adaptan: hier → «la veille», demain → «le lendemain», aujourd'hui → «ce jour-là». Pero si el introductor está en presente («il paraît que», «on dit que»), no cambia absolutamente nada." },
      { t: "Quand l'utiliser", body: "Es la gramática del cotilleo y de las noticias compartidas: «Sarah m'a dit que Léo cherchait un autre appartement», «le responsable m'a demandé si tout allait bien», «elle m'a raconté qu'ils s'étaient rencontrés à la laverie». El matiz B1: «il paraît que» presenta la información como rumor (no te haces responsable), «j'ai entendu dire que» la atribuye a un tercero, y «ce ne sont que des rumeurs !» es la salida elegante cuando te pillan difundiendo." },
      { t: "Attention ! (pour hispanophones)", body: "1) En la pregunta indirecta NO hay inversión: «il m'a demandé si je venais», nunca «si venais-je» — igual que el español 'preguntó si venía'. 2) Los marcadores del pasado se desplazan: lo que ayer era 'demain' se convierte en «le lendemain», y el 'ayer' de la historia contada hoy es «la veille»; el hispanohablante suele dejar 'hier' clavado. 3) Con «il paraît que» en presente NO hay concordancia: «il paraît qu'Amandine a trouvé une coloc» — el reflejo de retroceder tiempos solo funciona cuando el verbo introductor está en pasado." },
      { t: "Dans la vraie conversation", body: "La sala de lavado de una résidence es la red social analógica de Francia: «Il paraît que le troisième étage va organiser une fête», «Sarah m'a dit que le loyer allait augmenter», «J'ai entendu dire que la machine du bas était encore en panne», «Le responsable m'a demandé si je descendais les poubelles». Cuando el rumor crece demasiado, alguien corta con sabiduría: «Mais ce ne sont que des rumeurs ! Il faut vérifier avant de répéter»." },
    ],
    esempi: [
      { it: "Chloé m'a dit que la machine du rez-de-chaussée était encore en panne.", es: "Chloé me dijo que la máquina de la planta baja seguía estropeada." },
      { it: "Il m'a demandé si je descendais les poubelles le soir.", es: "Me preguntó si bajaba la basura por la noche." },
      { it: "On m'a annoncé que la salle serait fermée le week-end.", es: "Me anunciaron que la sala estaría cerrada el fin de semana." },
      { it: "Il paraît que le nouveau locataire est musicien.", es: "Parece que el nuevo inquilino es músico." },
      { it: "Elle m'a raconté qu'elle avait rencontré la gardienne dans l'escalier.", es: "Me contó que se había encontrado con la portera en la escalera." },
    ],
    usi: [
      { q: "Léo dijo: «Busco piso». ¿Cómo lo retransmites?", options: ["Léo a dit qu'il cherche un appartement.", "Léo a dit qu'il cherchait un appartement.", "Léo a dit qu'il a cherché un appartement."], answer: 1, explain: "Verbo introductor en passé: présent → imparfait (cherchait)." },
      { q: "«Me preguntó si venía a la fiesta.»", options: ["Il m'a demandé si venais-je à la fête.", "Il m'a demandé que je viens à la fête.", "Il m'a demandé si je venais à la fête."], answer: 2, explain: "demander si + orden sujeto-verbo, sin inversión; que no introduce preguntas indirectas." },
    ],
  },

  "fr-cu-b1-07": {
    sezioni: [
      { t: "Comment ça marche", body: "Cuatro relativos gobiernan la descripción: «qui» es sujeto («les ruelles qui montent vers la mer»), «que» es objeto directo («l'hospice que tout le monde photographie»), «où» con acento grave localiza lugares y momentos («la boulangerie où on les fait», «le dimanche où tout est fermé»), y «dont» sustituye a de + nombre: «un quartier dont tout le monde parle» (parler de), «l'édifice dont Puget a dessiné les plans» (les plans de). Con preposición concreta aparece lequel/laquelle («la terrasse sur laquelle on boit le café»), más formal y típico de guías." },
      { t: "Quand l'utiliser", body: "Es la herramienta de las guías, los artículos de barrio y las historias con detalle: unir frases sin repetir nombres. «La place où les artistes se retrouvent», «le café que je t'ai conseillé», «la ruelle qui sent le savon», «un quartier dont tout le monde rêve». Con qui, que, où y dont ya escribes una entrada de guía entera; lequel se reconoce y ya está." },
      { t: "Attention ! (pour hispanophones)", body: "1) El español usa 'que' para sujeto y objeto; el francés obliga a elegir: pregunta si el nombre hace la acción (→ qui) o la recibe (→ que). 2) El español evita el relativo con de ('el barrio que todo el mundo comenta'); el francés exige dont y jamás deja la preposición colgando ni añade un pronombre: «le quartier dont tout le monde parle», nunca «le quartier que tout le monde parle de lui». 3) El lugar del adjetivo: los cortos van delante («une petite place tranquille»), y algunos cambian de sentido al moverse: «un ancien hospice» (un ex hospicio, hoy otra cosa) frente a «un hospice ancien» (un hospicio viejo); en Le Panier, la Vieille Charité es el ejemplo perfecto." },
      { t: "Dans la vraie conversation", body: "Manon pasea y comenta: «Tu vois la ruelle qui monte là-bas ? C'est là où on fait le meilleur savon de Marseille», «La Vieille Charité, c'est un ancien hospice que tout le monde photographie», «Le café dont je t'ai parlé ferme à 19 heures», «Il y a une petite place où les artistes se retrouvent le soir». Para preguntar en la marcha: «C'est quoi, ce bâtiment-là ?» — y la respuesta siempre trae un relativo." },
    ],
    esempi: [
      { it: "La boulangerie où j'achète mon pain ferme à 19 heures.", es: "La panadería donde compro mi pan cierra a las 19." },
      { it: "Le quartier dont tout le monde parle s'appelle le Panier.", es: "El barrio del que todo el mundo habla se llama Le Panier." },
      { it: "J'ai retrouvé la rue que tu m'avais conseillée.", es: "He vuelto a encontrar la calle que me habías recomendado." },
      { it: "Il y a une petite place qui reste tranquille le soir.", es: "Hay una placita que sigue tranquila por la noche." },
      { it: "C'est un vieil immeuble dont l'entrée sent le savon.", es: "Es un viejo edificio cuya entrada huele a jabón." },
    ],
    usi: [
      { q: "«Les ruelles ___ montent vers la mer sont étroites.»", options: ["qui", "que", "où"], answer: 0, explain: "Las ruelles hacen la acción de subir: sujeto del relativo → qui." },
      { q: "«Voilà le café ___ je t'ai parlé hier.»", options: ["que", "dont", "qui"], answer: 1, explain: "parler DE quelque chose → dont: el relativo que reemplaza a de + nombre." },
    ],
  },

  "fr-cu-b1-08": {
    sezioni: [
      { t: "Comment ça marche", body: "La causa tiene tres vehículos: «parce que» + frase completa con sujeto y verbo («parce que j'habite loin»), «à cause de» + nombre para causas negativas («à cause du trafic», por culpa del tráfico) y «grâce à / grâce aux» + nombre para causas positivas («grâce aux pistes cyclables»). «comme» es causal pero abre SIEMPRE la frase con coma: «comme il pleut, je prends le tram». La consecuencia recae en «donc», que se coloca justo después del verbo conjugado («on doit donc agir»), con «alors» más conversacional y «c'est pourquoi» / «par conséquent» para el registro formal del informe y el debate." },
      { t: "Quand l'utiliser", body: "Es el esqueleto de cualquier argumento: causa + consecuencia. En un atelier de movilidad: «à cause des voitures, l'air est mauvais ; grâce aux nouvelles pistes, le quartier respire ; on doit donc étendre le réseau». Encadenarlas convierte una opinión en un razonamiento: por eso los débats écologistes franceses están llenos de à cause de, grâce à y donc." },
      { t: "Attention ! (pour hispanophones)", body: "1) El español 'por' no distingue positivo de negativo: «à cause du chantier» (por culpa de la obra) y «grâce au chantier» (gracias a la obra) son mundos opuestos; confundirlas es dar las gracias a un problema. 2) «comme» causal abre frase y lleva coma: «comme j'habite loin, je prends le tram» — como el español 'como vivo lejos'; pero à cause de y grâce à solo aceptan nombre, nunca verbo. 3) «donc» se apoya justo después del verbo: «on doit donc agir»; el español dice 'por eso, actúo' con el conector en cabeza — para esa posición el francés reserva «c'est pourquoi»." },
      { t: "Dans la vraie conversation", body: "El atelier de Grenoble suena así: «À cause des voitures, l'air est mauvais au centre-ville», «Grâce aux nouvelles pistes, certains quartiers respirent déjà mieux», «Le bus ne passe plus parce qu'il y a un chantier sur la place», «Comme j'habite loin, je prends le tramway», «On doit donc agir vite, sinon la situation empirera». El animador resume con el par formal: «par conséquent, la mairie proposera un plan» — y el público toma notas." },
    ],
    esempi: [
      { it: "Grâce aux nouvelles pistes cyclables, le quartier respire mieux.", es: "Gracias a los nuevos carriles bici, el barrio respira mejor." },
      { it: "À cause des travaux, la ligne B est fermée ce week-end.", es: "Por culpa de las obras, la línea B está cerrada este fin de semana." },
      { it: "Comme il pleut, je prends le tramway.", es: "Como llueve, cojo el tranvía." },
      { it: "Le marché a fermé tôt, donc je suis allé à la boulangerie.", es: "El mercado cerró pronto, así que fui a la panadería." },
      { it: "Il y a un chantier sur la place, par conséquent le bus ne passe plus.", es: "Hay una obra en la plaza; en consecuencia, el autobús ya no pasa." },
    ],
    usi: [
      { q: "«Gracias a los voluntarios, el parque está limpio.»", options: ["À cause des bénévoles, le parc est propre.", "Parce que les bénévoles, le parc est propre.", "Grâce aux bénévoles, le parc est propre."], answer: 2, explain: "Causa positiva + nombre: grâce à; à cause de introduciría una culpa, y parce que exige frase con verbo." },
      { q: "«Como vivo lejos, cojo el tranvía.»", options: ["Je prends le tramway comme j'habite loin.", "Comme j'habite loin, je prends le tramway.", "J'habite loin comme je prends le tramway."], answer: 1, explain: "Comme causal abre la frase y va seguido de coma; detrás llega la consecuencia." },
    ],
  },

  "fr-cu-b1-09": {
    sezioni: [
      { t: "Comment ça marche", body: "«venir de + infinitivo» = 'acabar de': acción inmediatamente anterior al presente («je viens de finir», «elle vient d'arriver»), con contracción ante vocal: «je viens d'obtenir mon diplôme». En pasado se conjuga el venir: «je venais de finir» ('acababa de terminar'). El parcours se narra en passé composé con conectores: «j'ai d'abord suivi une formation, ensuite j'ai travaillé un an, puis j'ai créé mon portfolio, enfin j'ai postulé». Y las fórmulas de la entrevista: «j'ai suivi une formation» (una formación se 'sigue') y «je suis spécialisé en + dominio»." },
      { t: "Quand l'utiliser", body: "«Parlez-moi de vous» no pide tu vida sentimental: espera noventa segundos de parcours + competencia + motivación, con vous innegociable ante quien contrata. El molde: formación («j'ai suivi une formation en graphisme»), experiencia («j'ai travaillé deux ans dans une agence»), especialidad («je me suis spécialisé en identité visuelle»), actualidad («je viens d'obtenir mon diplôme») y cierre motivado («aujourd'hui, je cherche un stage dans votre agence»)." },
      { t: "Attention ! (pour hispanophones)", body: "1) Dos venirs distintos: «je viens de Lyon» (vengo de un lugar) y «je viens d'arriver» (acabo de llegar); para 'acabo de terminar' jamás «je viens pour finir». 2) 'Llevo dos años en este puesto' es presente con depuis: «je suis à ce poste depuis deux ans» — el español cambia de verbo ('llevo'), el francés no. 3) Registro y falsos amigos: «j'ai bossé» es coloquial y en la entrevista se prefiere «j'ai travaillé»; y «un parcours» no es un 'curso': es el recorrido profesional completo que el CV resume." },
      { t: "Dans la vraie conversation", body: "La entrevista fluye con este guion: «Parlez-moi de vous. — J'ai d'abord suivi une formation en graphisme à Lyon. Ensuite, j'ai travaillé deux ans dans une petite agence, où j'ai appris à gérer des projets. Je me suis spécialisé en identité visuelle et je viens d'obtenir mon diplôme de concepteur. Aujourd'hui, je cherche un stage dans votre équipe.» Madame Rousseau anota, sonríe, y la pregunta final siempre es: «Je viens de vous présenter mon parcours ; avez-vous des questions ?»." },
    ],
    esempi: [
      { it: "Je viens de finir mes études de communication.", es: "Acabo de terminar mis estudios de comunicación." },
      { it: "Elle vient d'obtenir son diplôme de graphiste.", es: "Ella acaba de obtener su título de diseñadora gráfica." },
      { it: "J'ai d'abord travaillé dans une librairie, puis dans une agence.", es: "Primero trabajé en una librería y luego en una agencia." },
      { it: "Nous venons de signer le contrat ce matin.", es: "Acabamos de firmar el contrato esta mañana." },
      { it: "Il venait de commencer son nouveau poste quand tout a changé.", es: "Acababa de empezar su nuevo puesto cuando todo cambió." },
    ],
    usi: [
      { q: "«Acabo de llegar de Lyon.» (el tren hace un momento)", options: ["Je viens à Lyon.", "Je viens pour arriver de Lyon.", "Je viens d'arriver de Lyon."], answer: 2, explain: "venir de + infinitivo = 'acabar de'; ante vocal, de se contrae en d'." },
      { q: "En la entrevista: «Estoy especializado en diseño.»", options: ["Je suis spécialisé du design.", "Je suis spécialisé en design.", "Je me spécialise sur le design."], answer: 1, explain: "spécialisé EN + dominio: la fórmula fija del CV y de la entrevista." },
    ],
  },

  "fr-cu-b1-10": {
    sezioni: [
      { t: "Comment ça marche", body: "La pasiva francesa copia la fórmula: être + participio acordado con el sujeto. En présent describe estados resultantes («la piscine est fermée», está cerrada) y en passé composé narra procesos («le tram a été inauguré», fue inaugurado; «les stations ont été construites», con acuerdo en femenino plural). El agente se introduce con par: «relu par toute la rédaction», «restaurée par des artisans locaux». Y en los titulares reina la síntesis: el auxiliar se recorta («Sept stations construites en dix-huit mois»)." },
      { t: "Quand l'utiliser", body: "La pasiva con être es la lengua de la prensa, los informes y los comunicados: «la fuite a été détectée par un agent», «les abonnés ont été prévenus par courriel», «l'information a été publiée par le journal local». En la conversación cotidiana el francés la usa MENOS que el español y prefiere la construcción con on: «on a inauguré le tram», «on a fermé la piscine». Ver être + participio en un texto formal significa que alguien actúa sobre el sujeto: pregúntate quién con par." },
      { t: "Attention ! (pour hispanophones)", body: "1) La pasiva refleja española ('se cerró la piscina', 'se inauguró el puente') no se traduce con se: el francés elige «on a fermé la piscine» o la pasiva con être, pero jamás una construcción con se. 2) El participio concuerda con el sujeto pasivo: «la cathédrale a été restaurée», «les billets sont vendus» — y el error típico es olvidar el être o dejar el participio invariable. 3) El agente va con par (por), no con pour: «relu par la directrice»; aunque el español a veces traduce 'por' como pour en otras contextos, en la pasiva el sitio de par es fijo." },
      { t: "Dans la vraie conversation", body: "En la conférence de rédaction, los temas se reparten en pasiva: «Le tram a été inauguré samedi ; il a été testé pendant trois mois», «La fuite a été réparée dans la matinée», «Les photos ont été prises par notre reporter». Un colega pregunta «Qui a écrit l'article ?» y la respuesta también cae en pasiva: «Il a été rédigé par Julien et relu par toute la rédaction». Para el titular del día siguiente: «Piscine fermée jusqu'à nouvel ordre» — sin auxiliar, pura prensa." },
    ],
    esempi: [
      { it: "Le nouveau pont a été inauguré le mois dernier.", es: "El nuevo puente fue inaugurado el mes pasado." },
      { it: "Les billets sont vendus à l'entrée du marché.", es: "Las entradas se venden en la entrada del mercado." },
      { it: "La cathédrale a été restaurée par des artisans locaux.", es: "La catedral fue restaurada por artesanos locales." },
      { it: "Le centre nautique est fermé jusqu'à nouvel ordre.", es: "El centro acuático está cerrado hasta nuevo aviso." },
      { it: "Cette rue a été transformée en zone piétonne.", es: "Esta calle fue transformada en zona peatonal." },
    ],
    usi: [
      { q: "Titular: «Fueron construidas siete estaciones en dieciocho meses.»", options: ["Sept stations ont construit en dix-huit mois.", "Sept stations ont été construites en dix-huit mois.", "Sept stations sont construites hier."], answer: 1, explain: "Pasiva en passé composé: ont été construites, con participio acordado en femenino plural." },
      { q: "«El informe fue revisado por la directora.»", options: ["Le rapport a été relu pour la directrice.", "Le rapport a rellu par la directrice.", "Le rapport a été relu par la directrice."], answer: 2, explain: "El agente de la pasiva se introduce con par, no con pour." },
    ],
  },

  "fr-cu-b1-11": {
    sezioni: [
      { t: "Comment ça marche", body: "Después de «il faut que», «vouloir que», «être content/heureux que», «avoir peur que» o «avant que», el francés exige subjuntivo. Formación: toma la 3.ª persona del plural del presente, quita -ent y añade -e, -es, -e, -ions, -iez, -ent: ils font → «que je fasse», ils viennent → «que tu viennes», ils ont → «qu'il ait». Irregulares de memo: être → «que je sois», avoir → «que tu aies», aller → «qu'il aille», faire → «fasse», pouvoir → «puisse», savoir → «sache»." },
      { t: "Quand l'utiliser", body: "Es la gramática de los deseos, las necesidades y las emociones compartidas: «je veux que tout le monde arrive à l'heure», «il faut que tu sois au courant», «nous sommes contents que vous puissiez venir», «j'ai peur qu'elle découvre le secret». Perfecta para organizar una fête sorpresa con voz baja: deseos (vouloir que), necesidades (il faut que) y alegrías (être content que), todo con subjuntivo." },
      { t: "Attention ! (pour hispanophones)", body: "1) «il faut + infinitivo» es impersonal ('hay que irse'); «il faut que + subjuntivo» es personal ('hace falta que NOSOTROS nos vayamos'): el español resuelve ambos con 'hay que' y no distingue persona. 2) El francés usa el subjuntivo menos que el español: 'aunque llueva' es «même s'il pleut» (indicatif), y aunque la norma culta conserva el subjuntivo tras «bien que», el francés hablado actual dice a menudo «bien que c'est cher» — al revés que el español, donde 'aunque sea caro' exige subjuntivo. 3) «espérer que» va con indicatif: «j'espère que tu viens», aunque el español diga 'espero que VENGAS'; en cambio «avoir peur que» sí lleva subjuntivo, como 'temo que venga'." },
      { t: "Dans la vraie conversation", body: "El grupo «Opération M30» funciona en subjuntivo: «Il faut qu'on arrive avant 19 heures», «Je veux que Léo s'occupe de la musique», «Il faut que Manon ne puisse rien deviner», «J'ai peur qu'elle nous entende», «Nous sommes contents que tout le monde soit disponible». Y cuando el disfraz casi cae: «On a failli se faire découvrir !» — faillir + infinitif, 'por poco', el susto nacional de toda fête surprise." },
    ],
    esempi: [
      { it: "Il faut que tu sois au courant avant vendredi.", es: "Hace falta que estés al tanto antes del viernes." },
      { it: "Je veux que tout le monde arrive à l'heure.", es: "Quiero que todo el mundo llegue puntual." },
      { it: "Nous sommes contents que vous puissiez venir.", es: "Estamos contentos de que puedan venir." },
      { it: "Elle a peur que la fête se sache dans le quartier.", es: "Teme que la fiesta se sepa en el barrio." },
      { it: "Bien qu'il soit tard, les voisins veulent fêter ça.", es: "Aunque es tarde, los vecinos quieren celebrarlo." },
    ],
    usi: [
      { q: "«Hace falta que estés aquí a las 19 horas.»", options: ["Il faut que tu es là à 19 heures.", "Il faut que tu sois là à 19 heures.", "Il faut que tu seras là à 19 heures."], answer: 1, explain: "il faut que + subjuntivo: que tu sois (être en subjuntivo, no indicativo ni futuro)." },
      { q: "«Espero que vengas a la fiesta.»", options: ["J'espère que tu viens à la fête.", "J'espère que tu viennes à la fête.", "J'ai peur que tu viens à la fête."], answer: 0, explain: "espérer que + indicatif en francés, al revés que el español; avoir peur que sí pediría subjuntivo." },
    ],
  },

  "fr-cu-b1-12": {
    sezioni: [
      { t: "Comment ça marche", body: "Estructurar es argumentar. Para enumerar: «d'une part, d'autre part» (por una parte, por otra), también «en premier lieu» y «de plus». Para oponer: «en revanche» (en cambio, formal y elegante), «mais» (neutro) e «il n'empêche que» (no obstante, muy francés). Para concluir: «somme toute» (en suma), «en conclusion» y «bref» (oral). La consecuencia lógica sigue siendo donc, justo después del verbo; y el protocolo del débat trae su vocabulario: «prendre la parole», «je te cède la parole», «un tour de parole»." },
      { t: "Quand l'utiliser", body: "En un debate moderado, cada conector es una señal para el oyente: «D'une part, le portable déconcentre ; d'autre part, il facilite la triche. En revanche, c'est un outil d'apprentissage. Il n'empêche que l'interdiction totale paraît brutale. Somme toute, je reste pour la régulation, pas pour l'interdiction.» Con ese esqueleto, cualquier modérateur te sigue, y tu turno de palabra se recuerda." },
      { t: "Attention ! (pour hispanophones)", body: "1) «en revanche» no es 'en revancha': significa 'en cambio, por el contrario'; la revancha deportiva se dice «prendre sa revanche». 2) «somme toute» cierra y resume un razonamiento completo ('en suma'), mientras donc solo enlaza causa y consecuencia: no uses donc para concluir un discurso, que el oyente esperará otra frase. 3) «d'ailleurs» añade un argumento al hilo ('dicho esto, además') y no significa 'allá'; e «il n'empêche que» es el 'no obstante' conversacional que admite el contraste sin negar lo dicho antes." },
      { t: "Dans la vraie conversation", body: "En el gran debate, Nadia modera: «Vous avez la parole», «Je vous cède la parole après cette intervention». Léo abre: «D'une part, le portable déconcentre les élèves ; d'autre part, il favorise la triche». Camille responde: «En revanche, c'est un outil d'apprentissage. Il n'empêche que certaines écoles l'ont interdit sans résultat. Somme toute, il faut réguler, pas interdire». El público aplaude al final de cada intervención, y el café del cierre sabe a victoria compartida." },
    ],
    esempi: [
      { it: "D'une part, le sport coûte cher ; d'autre part, il est excellent pour la santé.", es: "Por una parte, el deporte cuesta caro; por otra, es excelente para la salud." },
      { it: "En revanche, les petits marchés restent animés le dimanche.", es: "En cambio, los mercados pequeños siguen animados los domingos." },
      { it: "Il n'empêche que la décision appartient aux habitants.", es: "No obstante, la decisión pertenece a los vecinos." },
      { it: "Somme toute, ce débat nous a fait avancer.", es: "En suma, este debate nos ha hecho avanzar." },
      { it: "Bref, il faut trouver un compromis.", es: "En fin, hay que encontrar un compromiso." },
    ],
    usi: [
      { q: "«Le portable déconcentre ; ___, il sert à réviser.» (contraste)", options: ["d'autre part", "en revanche", "somme toute"], answer: 1, explain: "en revanche introduce oposición ('en cambio'); d'autre part solo enumera y somme toute concluye." },
      { q: "Quieres cerrar tu intervención en el debate. ¿Qué conector eliges?", options: ["Donc", "De plus", "Somme toute"], answer: 2, explain: "somme toute resume y cierra un razonamiento ('en suma'); donc enlaza una consecuencia y de plus añade un argumento." },
    ],
  },
};
