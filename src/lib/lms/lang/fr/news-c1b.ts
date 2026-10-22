/* ── FR · Notizie C1 — lote b (v9.39) ─────────────────────────────────
   Actualités en français de France, niveau C1 (suite) : 12 items,
   ids fr-news-c1-04 … fr-news-c1-15. Méthode VOA Learning English :
   corps de 5 paragraphes ≈ 350-395 mots, subjonctif imparfait, voix
   passive et registre académique, minutes 5. Champs `.it` = français
   (langue étudiée), `.es` = espagnol. Avec news-c.ts, le niveau C1
   couvre les 9 catégories. */

import type { NewsItem } from "../../news";

export const FR_NEWS_C1B: NewsItem[] = [

  /* ═══ C1 · 4 — Sciences · Angers ═══ */
  {
    id: "fr-news-c1-04", cat: "scienza", level: "C1", place: "Angers", minutes: 5,
    title: "Le pommier de l'avenir : la génétique contre le pulvérisateur",
    titleEs: "El manzano del futuro: la genética contra el pulverizador",
    lead: {
      it: "Dans les vergers de l'Anjou, la recherche a pris un parti que personne n'attendait : croiser les pommes modernes avec leurs ancêtres sauvages, pour que l'arbre se défende seul. Les vergers d'essai sont désormais observés comme des laboratoires à ciel ouvert.",
      es: "En los huertos de Anjou, la investigación tomó un partido que nadie esperaba: cruzar las manzanas modernas con sus antepasadas silvestres, para que el árbol se defienda solo. Los huertos de prueba se observan desde ahora como laboratorios a cielo abierto.",
    },
    paragraphs: [
      { it: "Le verger d'Angers est un champ d'expérience déguisé en paysage. Depuis vingt ans, les sélectionneurs y croisent les variétés commerciales — fragiles, luisantes, exigeantes en soins — avec des pommiers sauvages venus d'Asie centrale, rugueux, amers et presque indestructibles. Le pari tient en une phrase : obtenir un arbre qui résiste à la tavelure et à l'oïdium sans que le pulvérisateur quitte le hangar. Mais un pommier met sept ans à fructifier, et la science est condamnée à avancer à la vitesse de l'arbre.",
      es: "El huerto de Angers es un campo de experimentación disfrazado de paisaje. Desde hace veinte años, los seleccionadores cruzan allí las variedades comerciales — frágiles, lustrosas, exigentes en cuidados — con manzanos silvestres venidos de Asia central, rugosos, amargos y casi indestructibles. La apuesta cabe en una frase: obtener un árbol que resista a la roña y al oídio sin que el pulverizador salga del hangar. Pero un manzano tarda siete años en fructificar, y la ciencia está condenada a avanzar a la velocidad del árbol." },
      { it: "Le protocole, lui, relève de la patience méthodique. Chaque semis est planté, infecté délibérément par les mêmes souches, puis observé pendant dix hivers. Le règlement du centre exigeait jadis que chaque sujet fût noté à la main, feuille par feuille ; les capteurs enregistrent aujourd'hui la croissance, et les marqueurs génétiques lisent la résistance avant même la première fleur. Les arbres indociles sont éliminés ; les meilleurs sont greffés, multipliés, renvoyés aux vergers.",
      es: "El protocolo, por su parte, pertenece a la paciencia metódica. Cada planta de semillero se planta, se infecta deliberadamente con las mismas cepas y luego se observa durante diez inviernos. El reglamento del centro exigía antaño que cada ejemplar fuese anotado a mano, hoja por hoja; hoy los sensores registran el crecimiento, y los marcadores genéticos leen la resistencia incluso antes de la primera flor. Los árboles indómitos se eliminan; los mejores se injertan, se multiplican y vuelven a los huertos." },
      { it: "Les premiers résultats sont diffusés aux arboriculteurs. Trois variétés issues de ces croisements ont été inscrites au catalogue national ; dans les vergers pilotes, les traitements fongicides ont été réduits de plus de quatre-vingts pour cent. L'économie suit la biologie : moins de cuivre sur les feuilles, moins de tracteurs dans les rangs, moins de jours passés sous le masque. Les chercheurs parlent de « résistance incorporée » — un arbre si bien choisi qu'il n'a plus besoin d'être protégé.",
      es: "Los primeros resultados se difunden entre los fruticultores. Tres variedades nacidas de estos cruces fueron inscritas en el catálogo nacional; en los huertos piloto, los tratamientos fungicidas se redujeron más de un ochenta por ciento. La economía sigue a la biología: menos cobre sobre las hojas, menos tractores entre las filas, menos días pasados bajo la máscara. Los investigadores hablan de «resistencia incorporada»: un árbol tan bien elegido que ya no necesita ser protegido." },
      { it: "Les objections n'ont pas disparu pour autant. Le goût reste le juge dernier, et les pommes résistantes ont longtemps été soupçonnées de rusticité. Surtout, les pépiniéristes craignaient que le consommateur ne s'habituât aux seules pommes luisantes du rayon, uniformes et sucrées ; or la biodiversité ne se vend pas en barquette. Les sélectionneurs répondent que les variétés anciennes sont conservées, elles aussi, dans une collection plantée près de la Loire — une arche de Noé pomologique, ouverte aux visiteurs.",
      es: "Las objeciones no desaparecieron por ello. El sabor sigue siendo el juez último, y las manzanas resistentes fueron sospechosas de rusticidad durante mucho tiempo. Sobre todo, los viveristas temían que el consumidor se acostumbrase a las únicas manzanas lustrosas del estante, uniformes y azucaradas; pero la biodiversidad no se vende en bandeja. Los seleccionadores responden que las variedades antiguas también se conservan, en una colección plantada cerca del Loira — un arca de Noé pomológica, abierta a los visitantes." },
      { it: "La suite se jouera dans les cuisines et les rayons. Hélène Aubier, généticienne du centre d'Angers, résume l'ambition d'une formule que les instituts citent désormais : « Nous ne fabriquons pas une pomme nouvelle ; nous rendons à l'arbre une mémoire que l'agriculture lui avait prise. Une pomme qui se protège seule, c'est un paysage qui respire mieux — et un verger que l'on peut enfin écouter pousser. »",
      es: "La continuación se jugará en las cocinas y en los estantes. Hélène Aubier, genetista del centro de Angers, resume la ambición con una fórmula que los institutos ya citan: «Nosotros no fabricamos una manzana nueva; le devolvemos al árbol una memoria que la agricultura le había quitado. Una manzana que se protege sola es un paisaje que respira mejor — y un huerto que por fin se puede escuchar crecer.»" },
    ],
    words: [
      { it: "le verger / les vergers", es: "el huerto frutal" },
      { it: "un semis / des semis", es: "una planta de semillero" },
      { it: "la tavelure", es: "la roña del manzano", note: "hongo; el «oïdium» es el oidio, otra enfermedad del manzano" },
      { it: "le pulvérisateur", es: "el pulverizador" },
      { it: "fructifier", es: "fructificar, dar fruto" },
      { it: "greffer / greffés", es: "injertar / injertados" },
    ],
    questions: [
      { q: "¿Con qué se cruzan las variedades comerciales en los huertos de Angers?", options: ["Avec des pommiers sauvages venus d'Asie centrale, rugueux, amers et presque indestructibles", "Avec des poiriers du Jura", "Avec des pommiers de Normandie", "Avec des cerisiers d'Espagne"], answer: 0, why: "«croisent les variétés commerciales — fragiles, luisantes, exigeantes en soins — avec des pommiers sauvages venus d'Asie centrale, rugueux, amers et presque indestructibles»" },
      { q: "¿Cuánto tiempo se observa cada semillero antes del veredicto?", options: ["Un hiver", "Dix hivers", "Deux étés", "Vingt ans"], answer: 1, why: "«Chaque semis est planté, infecté délibérément par les mêmes souches, puis observé pendant dix hivers»" },
      { q: "¿Por qué se dice que la ciencia está «condenada» a avanzar a la velocidad del árbol?", options: ["Parce que les chercheurs manquent de financement", "Parce que la génétique végétale est interdite", "Parce qu'un pommier met sept ans à fructifier : la biologie impose son rythme", "Parce que les vergers d'essai sont trop petits"], answer: 2, why: "«un pommier met sept ans à fructifier, et la science est condamnée à avancer à la vitesse de l'arbre»" },
      { q: "¿Qué quiere decir la genetista con «devolver al árbol una memoria»?", options: ["Que l'arbre souffre d'une maladie nerveuse", "Que les anciennes variétés avaient meilleur goût", "Que la mémoire des pommes a été modifiée en laboratoire", "Restituer à l'arbre la résistance naturelle que l'agriculture moderne lui avait fait perdre"], answer: 3, why: "«nous rendons à l'arbre une mémoire que l'agriculture lui avait prise» — la resistencia natural, seleccionada y luego perdida, vuelve al árbol" },
    ],
    discuss: [
      { it: "Une pomme «qui se protège seule» : la recherche doit-elle imiter la nature ou aller plus vite qu'elle ?", es: "Una manzana «que se protege sola»: ¿debe la investigación imitar a la naturaleza o ir más rápido que ella?" },
      { it: "Choisiriez-vous une pomme moins parfaite mais cultivée sans traitements ? Justifiez en français.", es: "¿Elegirías una manzana menos perfecta pero cultivada sin tratamientos? Justifícalo en francés." },
    ],
  },

  /* ═══ C1 · 5 — Technologie · Tarbes ═══ */
  {
    id: "fr-news-c1-05", cat: "tecnologia", level: "C1", place: "Tarbes", minutes: 5,
    title: "À Tarbes, les robots deviennent des collègues",
    titleEs: "En Tarbes, los robots se convierten en compañeros",
    lead: {
      it: "Dans les ateliers d'usinage de la région, une machine nouvelle est arrivée : le cobot, un bras léger qui partage l'établi de l'ouvrier au lieu de le remplacer. À Tarbes, entreprises et école d'ingénieurs en ont fait un cas d'étude national.",
      es: "En los talleres de mecanizado de la región llegó una máquina nueva: el cobot, un brazo ligero que comparte la mesa de trabajo del obrero en lugar de sustituirlo. En Tarbes, empresas y escuela de ingeniería lo han convertido en un caso de estudio nacional.",
    },
    paragraphs: [
      { it: "Le robot industriel classique est une bête de cage : massif, jaune, enfermé derrière des grilles, il travaille vite et seul. Le cobot est l'inverse — un bras lent, posé sur l'établi même de l'opérateur. Il ne soulève pas une cabine d'avion ; il tient la pièce pendant que la main humaine visse, contrôle, décide. La distinction paraît mince ; elle redessine pourtant tout le métier, du geste au salaire.",
      es: "El robot industrial clásico es una bestia de jaula: macizo, amarillo, encerrado tras verjas, trabaja rápido y solo. El cobot es lo contrario — un brazo lento, posado sobre la misma mesa del operario. No levanta la cabina de un avión; sostiene la pieza mientras la mano humana atornilla, controla, decide. La distinción parece mínima; sin embargo redibuja todo el oficio, del gesto al salario." },
      { it: "À Tarbes, la migration est observée de près. Trois ateliers d'usinage ont été équipés l'an dernier ; les opérateurs ont été formés en interne, pendant que les programmeurs apprenaient, eux, à ralentir les machines. Le réglage demande un paradoxe que la norme européenne encadre : il fallait que le robot fût assez fort pour être utile, et assez faible pour rester inoffensif. Les ingénieurs s'y conforment avec une rigueur de scaphandrier.",
      es: "En Tarbes, la migración se observa de cerca. Tres talleres de mecanizado fueron equipados el año pasado; los operarios se formaron internamente, mientras los programadores aprendían, ellos, a ralentizar las máquinas. El ajuste exige una paradoja que la norma europea enmarca: hacía falta que el robot fuese bastante fuerte para ser útil, y bastante débil para seguir siendo inofensivo. Los ingenieros se atienen a ella con un rigor de buzo." },
      { it: "Les résultats sont discutés avec prudence. Dans les trois ateliers, les postes les plus pénibles — levage répété, positions fixes, vibrations — ont été réduits, et aucun licenciement n'a été annoncé pour cause de cobot, ce que les directions rappellent avec insistance. La productivité, elle, est mesurée sans triomphalisme : le bras gagne surtout en régularité, la nuit comme le jour, ce qui permet de ne plus jamais arrêter la chaîne pour une question d'horaires.",
      es: "Los resultados se discuten con prudencia. En los tres talleres, los puestos más penosos — levantamiento repetido, posiciones fijas, vibraciones — fueron reducidos, y ningún despido fue anunciado por causa del cobot, algo que las direcciones recuerdan con insistencia. La productividad se mide sin triunfalismo: el brazo gana sobre todo en regularidad, de noche como de día, lo que permite no detener nunca más la cadena por una cuestión de horarios." },
      { it: "Les syndicats restent vigilants, et leur objection est moins mécanique que sociale. La crainte n'est pas la machine, disent-ils, mais le rythme qu'elle impose : quand le bras tient la pièce, c'est l'humain qui doit suivre. Un ancien tourneur, trente ans d'atelier, le dit plus simplement : « Avant, quand j'étais fatigué, la pièce attendait. Maintenant, c'est le bras qui m'attend. »",
      es: "Los sindicatos siguen vigilantes, y su objeción es menos mecánica que social. El miedo no es la máquina, dicen, sino el ritmo que ella impone: cuando el brazo sostiene la pieza, es el humano quien debe seguir. Un viejo tornero, treinta años de taller, lo dice más simplemente: «Antes, cuando estaba cansado, la pieza esperaba. Ahora es el brazo el que me espera a mí.»" },
      { it: "Marc Lassalle, roboticien à l'école d'ingénieurs, garde pour la fin une distinction que les fédérations industrielles citent en formation : « Le cobot ne remplace pas le geste ; il le décharge. La question n'est plus de savoir ce que la machine peut faire, mais ce que l'on accepte de lui laisser faire — et cette question-là, aucun algorithme ne la tranchera à notre place. » Le pari de Tarbes est là, tout entier : partager l'atelier sans se perdre.",
      es: "Marc Lassalle, especialista en robótica de la escuela de ingenieros, guarda para el final una distinción que las federaciones industriales citan en sus formaciones: «El cobot no sustituye el gesto; lo descarga. La pregunta ya no es saber qué puede hacer la máquina, sino qué aceptamos dejarle hacer — y esa pregunta, ningún algoritmo la zanjará en nuestro lugar.» La apuesta de Tarbes está ahí, entera: compartir el taller sin perderse." },
    ],
    words: [
      { it: "l'usinage / un atelier d'usinage", es: "el mecanizado" },
      { it: "un opérateur / des opérateurs", es: "un operario" },
      { it: "le réglage", es: "el ajuste, la regulación" },
      { it: "pénible / les postes pénibles", es: "penoso" },
      { it: "un tourneur", es: "un tornero" },
      { it: "inoffensif", es: "inofensivo" },
    ],
    questions: [
      { q: "¿Qué distingue al cobot del robot industrial clásico?", options: ["Il travaille plus vite que tous les autres", "C'est un bras lent, posé sur l'établi de l'opérateur : il tient la pièce pendant que la main humaine visse, contrôle, décide", "Il est enfermé derrière des grilles", "Il remplace entièrement l'ouvrier"], answer: 1, why: "«un bras lent, posé sur l'établi même de l'opérateur. Il ne soulève pas une cabine d'avion ; il tient la pièce pendant que la main humaine visse, contrôle, décide»" },
      { q: "¿Qué paradoja debe respetar el ajuste de la máquina?", options: ["Être le plus rapide possible", "Travailler sans électricité", "Être assez fort pour être utile, et assez faible pour rester inoffensif", "Apprendre à parler aux ouvriers"], answer: 2, why: "«il fallait que le robot fût assez fort pour être utile, et assez faible pour rester inoffensif»" },
      { q: "¿Cuál es la objeción de los sindicatos?", options: ["Les robots sont trop lents", "Les salaires ont baissé", "Les ateliers vont fermer", "La crainte n'est pas la machine, mais le rythme qu'elle impose"], answer: 3, why: "«La crainte n'est pas la machine, disent-ils, mais le rythme qu'elle impose : quand le bras tient la pièce, c'est l'humain qui doit suivre»" },
      { q: "¿Qué pregunta dice Lassalle que ningún algoritmo zanjará por nosotros?", options: ["Ce que l'on accepte de laisser faire à la machine", "Comment peindre les robots", "Où acheter les bras mécaniques", "Quelle couleur choisir"], answer: 0, why: "«La question n'est plus de savoir ce que la machine peut faire, mais ce que l'on accepte de lui laisser faire — et cette question-là, aucun algorithme ne la tranchera à notre place»" },
    ],
    discuss: [
      { it: "Un collègue robotique : progrès réel ou pression déguisée ? Donnez votre avis en français.", es: "Un compañero robótico: ¿progreso real o presión disfrazada? Da tu opinión en francés." },
      { it: "Dans votre futur métier, quelle tâche confieriez-vous volontiers à un cobot ?", es: "En tu futuro oficio, ¿qué tarea le confiarías de buena gana a un cobot?" },
    ],
  },

  /* ═══ C1 · 6 — Environnement · Sète ═══ */
  {
    id: "fr-news-c1-06", cat: "ambiente", level: "C1", place: "Sète", minutes: 5,
    title: "L'étang de Thau : une lagune soignée comme une patiente",
    titleEs: "El estanque de Thau: una laguna cuidada como una paciente",
    lead: {
      it: "L'étang de Thau, la plus vaste lagune du littoral méditerranéen français, produit des huîtres depuis des siècles. Longtemps traitée en grenier, elle est désormais soignée comme une patiente : diagnostic, ordonnance, suivi — et un pronostic qui s'améliore à peine, mais qui s'améliore.",
      es: "El estanque de Thau, la laguna más vasta del litoral mediterráneo francés, produce ostras desde hace siglos. Tratada durante mucho tiempo como un granero, hoy se cuida como una paciente: diagnóstico, receta, seguimiento — y un pronóstico que mejora apenas, pero mejora.",
    },
    paragraphs: [
      { it: "La lagune a d'abord été considérée comme un grenier à huîtres : sept cents conchyliculteurs, des tables en bois plantées dans l'eau, un savoir-faire transmis de mère en fille. Mais un grenier n'est pas un écosystème. Les herbiers de zostères, pouponnières des poissons et poumons de la lagune, ont été amputés de moitié en cinquante ans ; les nitrates venus des vignes et des villages ont nourri des crises d'oxygène qui tuent les huîtres en quelques nuits d'été.",
      es: "La laguna fue primero considerada como un granero de ostras: setecientos ostricultores, mesas de madera plantadas en el agua, un saber hacer transmitido de madre a hija. Pero un granero no es un ecosistema. Las praderas de zostera, viveros de los peces y pulmones de la laguna, fueron amputadas a la mitad en cincuenta años; los nitratos llegados de las viñas y de los pueblos alimentaron crisis de oxígeno que matan las ostras en unas pocas noches de verano." },
      { it: "Le tournant a été juridique autant que scientifique. Un contrat de gestion a été signé entre les communes, les conchyliculteurs et les agriculteurs — le premier du genre sur ce littoral. Le diagnostic, lui, était ancien ; il fallut pourtant attendre une mortalité massive pour que la lagune fût enfin traitée en priorité. Des stations d'épuration ont été mises aux normes, les fosses rénovées, les berges reprofilées.",
      es: "El giro fue jurídico tanto como científico. Un contrato de gestión fue firmado entre los municipios, los ostricultores y los agricultores — el primero de su tipo en este litoral. El diagnóstico, en cambio, era antiguo; hubo que esperar una mortalidad masiva para que la laguna fuese por fin tratada como prioridad. Depuradoras fueron puestas a norma, las fosas renovadas, las orillas reperfiladas." },
      { it: "Les herbiers, eux, sont replantés à la main : des plongeurs descendent les boutures de zostère comme on repique des salades, et le survol annuel par drone mesure la reprise, hectare par hectare. Les huîtres, elles, sont déplacées vers les zones profondes pendant les étés les plus chauds, afin que leur chair supporte mieux la température. Rien de spectaculaire : de la patience appliquée.",
      es: "Las praderas, por su parte, se replantan a mano: buzos bajan los esquejes de zostera como quien trasplanta lechugas, y el sobrevuelo anual con dron mide la recuperación, hectárea a hectárea. Las ostras se trasladan hacia las zonas profundas durante los veranos más calurosos, para que su carne soporte mejor la temperatura. Nada espectacular: paciencia aplicada." },
      { it: "Les conchyliculteurs ont changé leurs habitudes en même temps que leurs tables. Les poches sont nettoyées plus souvent, les naissains sont choisis avec un soin nouveau, la vente directe s'étend sur les pontons. Le calendrier même a changé : les triages se font désormais à l'aube, pour que les huîtres souffrent le moins possible. L'économie et l'écologie, longtemps opposées par les habitudes, sont désormais sommées de travailler ensemble — sous l'œil du bassin versant, qui ne pardonne rien.",
      es: "Los ostricultores cambiaron sus costumbres al mismo tiempo que sus mesas. Las bolsas se limpian más a menudo, las crías de ostra se eligen con un cuidado nuevo, la venta directa se extiende sobre los pontones. Hasta el calendario cambió: las clasificaciones se hacen desde ya al alba, para que las ostras sufran lo menos posible. La economía y la ecología, enfrentadas durante mucho tiempo por la costumbre, están ahora obligadas a trabajar juntas — bajo la mirada de la cuenca, que no perdona nada." },
      { it: "Sylvia Marchand, écologue du programme, résume d'une formule que les gestionnaires répètent désormais : « Nous avons arrêté de soigner les symptômes un par un. Une lagune, c'est une patiente âgée : on ne la ranime pas, on l'accompagne. Les huîtres reviendront quand l'eau se sera remise — et l'eau, elle, ne se presse pas. » Le prochain cap, déjà discuté, porte sur les années sèches, lorsque le bassin concentre tous ses excès.",
      es: "Sylvia Marchand, ecóloga del programa, lo resume con una fórmula que los gestores repiten ahora: «Dejamos de curar los síntomas uno por uno. Una laguna es una paciente anciana: no se la reanima, se la acompaña. Las ostras volverán cuando el agua se haya recuperado — y el agua no tiene prisa.» El próximo reto, ya discutido, trata de los años secos, cuando la cuenca concentra todos sus excesos." },
    ],
    words: [
      { it: "une lagune", es: "una laguna" },
      { it: "un conchyliculteur / des conchyliculteurs", es: "un criador de ostras y mejillones", note: "palabra técnica; la «conchyliculture» es la ostricultura y miticultura" },
      { it: "un herbier / les herbiers", es: "una pradera submarina", note: "aquí pradera de fanerógamas marinas; «herbier» también es un herbario de plantas secas" },
      { it: "le bassin versant", es: "la cuenca hidrográfica" },
      { it: "une station d'épuration / des stations d'épuration", es: "una depuradora" },
      { it: "un naissain / des naissains", es: "la cría (semilla) de ostra" },
    ],
    questions: [
      { q: "¿Qué fue amputado a la mitad en cincuenta años?", options: ["Le nombre de touristes", "La production de vin", "Les herbiers de zostères, pouponnières des poissons et poumons de la lagune", "Les pontons en bois"], answer: 2, why: "«Les herbiers de zostères, pouponnières des poissons et poumons de la lagune, ont été amputés de moitié en cinquante ans»" },
      { q: "¿Qué hizo por fin que la laguna pasara a ser prioridad?", options: ["Une mode passagère", "Une subvention exceptionnelle", "La visite d'une personnalité", "Une mortalité massive, alors que le diagnostic était ancien"], answer: 3, why: "«il fallut pourtant attendre une mortalité massive pour que la lagune fût enfin traitée en priorité»" },
      { q: "¿Por qué se trasladan las ostras a las zonas profundas?", options: ["Afin que leur chair supporte mieux la température des étés les plus chauds", "Pour les vendre plus cher au marché", "Pour les cacher des prédateurs", "Parce que les tables sont cassées"], answer: 0, why: "«sont déplacées vers les zones profondes pendant les étés les plus chauds, afin que leur chair supporte mieux la température»" },
      { q: "¿Qué significa «acompañar» a la laguna en lugar de «reanimarla»?", options: ["Qu'il faut abandonner les huîtres à leur sort", "Qu'on ne peut pas imposer un rythme de guérison : la lagune se remet à sa propre vitesse", "Que la lagune est déjà guérie", "Que les scientifiques abandonnent la recherche"], answer: 1, why: "«Une lagune, c'est une patiente âgée : on ne la ranime pas, on l'accompagne» — no se le puede imponer un ritmo de curación" },
    ],
    discuss: [
      { it: "L'économie et l'écologie, «sommées de travailler ensemble» : comment imaginer cette coopération ?", es: "La economía y la ecología, «obligadas a trabajar juntas»: ¿cómo imaginar esa cooperación?" },
      { it: "Votre région a-t-elle sa «patiente âgée» écologique ? Décrivez-la en français.", es: "¿Tiene tu región su «paciente anciana» ecológica? Descríbela en francés." },
    ],
  },

  /* ═══ C1 · 7 — Santé · Vichy ═══ */
  {
    id: "fr-news-c1-07", cat: "salute", level: "C1", place: "Vichy", minutes: 5,
    title: "Vichy : le thermalisme passe à l'épreuve des chiffres",
    titleEs: "Vichy: el termalismo pasa por el examen de las cifras",
    lead: {
      it: "Les cures thermales sont prescrites en France depuis deux siècles, sur la foi de la tradition plus que des chiffres. À Vichy, la plus classique des villes d'eaux, la médecine universitaire a décidé de mesurer ce que l'eau prétend faire.",
      es: "Las curas termales se recetan en Francia desde hace dos siglos, más por fe en la tradición que en las cifras. En Vichy, la más clásica de las ciudades de aguas, la medicina universitaria decidió medir lo que el agua pretende hacer.",
    },
    paragraphs: [
      { it: "La ville est bâtie sur son bain. Deux mille emplois directs, des dizaines d'établissements, une architecture de kiosques et de parcs héritée du Second Empire : à Vichy, l'eau est une industrie et une identité. Chaque année, des dizaines de milliers de curistes y boivent, s'y trempent et s'y font masser — le plus souvent sur ordonnance, pour des douleurs chroniques que la médecine classique fatigue elle-même à soulager.",
      es: "La ciudad está construida sobre su baño. Dos mil empleos directos, decenas de establecimientos, una arquitectura de kioscos y parques heredada del Segundo Imperio: en Vichy, el agua es una industria y una identidad. Cada año, decenas de miles de pacientes en cura beben allí, se sumergen y se hacen masajear — casi siempre con receta, por dolores crónicos que la medicina clásica se cansa ella misma de aliviar." },
      { it: "C'est ce flou que l'étude vient écorner. Pendant trois ans, plusieurs centaines de patients lombalgiques ont été répartis par tirage au sort : cure thermale pour les uns, soins classiques pour les autres. Le protocole exigeait que la moindre séance fût consignée, que les médicaments fussent comptés, que l'aveugle fût respecté autant qu'il se peut. Fabien Roux, rhumatologue coordinateur, a présenté les résultats avec des précautions de verrier.",
      es: "Esa vaguedad es la que el estudio viene a rozar. Durante tres años, varios cientos de pacientes con lumbalgia fueron repartidos por sorteo: cura termal para unos, cuidados clásicos para otros. El protocolo exigía que la mínima sesión fuese consignada, que los medicamentos fuesen contados, que el ciego fuese respetado en lo posible. Fabien Roux, reumatólogo coordinador, presentó los resultados con precauciones de cristalero." },
      { it: "Le verdict est mesuré. À l'issue des trois semaines, la douleur des curistes a baissé un peu plus que celle des autres patients, et la consommation d'antalgiques a fléchi ; la marche, le sommeil et le moral suivent la même pente. Mais l'écart, réel, reste modeste, et il s'amenuise au fil des mois. Les auteurs le disent sans fard : l'eau aide, elle ne guérit pas — du moins pas seule, et pas mesurablement au-delà d'un semestre.",
      es: "El veredicto es moderado. Al final de las tres semanas, el dolor de los pacientes en cura bajó un poco más que el de los otros, y el consumo de analgésicos cedió; la marcha, el sueño y el ánimo siguen la misma pendiente. Pero la diferencia, real, sigue siendo modesta, y se desvanece con los meses. Los autores lo dicen sin adornos: el agua ayuda, no cura — al menos no sola, y no mediblemente más allá de un semestre." },
      { it: "La profession a accueilli l'étude avec un soulagement prudent : après des décennies d'arguments d'autorité, la voilà équipée de chiffres. Les organismes d'assurance, eux, ont lu les mêmes lignes d'un autre œil : un bénéfice modeste, à un coût élevé, ouvre la question du remboursement. Entre les deux, la ville retient son souffle — et rappelle que le thermalisme, ce sont aussi des emplois qui ne se délocalisent pas.",
      es: "El sector acogió el estudio con un alivio prudente: después de décadas de argumentos de autoridad, por fin está equipado de cifras. Los organismos aseguradores, en cambio, leyeron las mismas líneas con otro ojo: un beneficio modesto, a un coste elevado, abre la cuestión del reembolso. Entre los dos, la ciudad contiene la respiración — y recuerda que el termalismo también son empleos que no se deslocalizan." },
      { it: "Fabien Roux refuse, lui, la querelle des chiffres : « On a demandé à l'eau de se comporter comme un médicament, et elle a répondu à sa manière. Une cure, c'est trois semaines où l'on dort, où l'on marche, où l'on est écouté — aucun comprimé ne fait cela. La question n'est pas de savoir si l'eau est active ; elle est de savoir si notre médecine sait prescrire du temps. »",
      es: "Fabien Roux rechaza, por su parte, la querella de las cifras: «Le pedimos al agua que se comportara como un medicamento, y respondió a su manera. Una cura son tres semanas en que se duerme, se camina, se es escuchado — ninguna pastilla hace eso. La pregunta no es saber si el agua es activa; es saber si nuestra medicina sabe recetar tiempo.»" },
    ],
    words: [
      { it: "un curiste / des curistes", es: "un paciente en cura termal" },
      { it: "une cure thermale", es: "una cura termal" },
      { it: "lombalgique / des patients lombalgiques", es: "con lumbalgia", note: "«lombalgie» = lumbalgia, dolor de la zona lumbar" },
      { it: "un antalgique / des antalgiques", es: "un analgésico" },
      { it: "le tirage au sort", es: "el sorteo (aleatorización del estudio)" },
      { it: "le remboursement", es: "el reembolso" },
    ],
    questions: [
      { q: "¿Cómo se repartieron los pacientes del estudio?", options: ["Par âge", "Selon la préférence de chaque médecin", "Par ordre d'arrivée à l'établissement", "Par tirage au sort : cure thermale pour les uns, soins classiques pour les autres"], answer: 3, why: "«plusieurs centaines de patients lombalgiques ont été répartis par tirage au sort : cure thermale pour les uns, soins classiques pour les autres»" },
      { q: "¿Qué concluyen los autores sin adornos?", options: ["L'eau aide, elle ne guérit pas — pas seule, et pas au-delà d'un semestre", "L'eau guérit toutes les douleurs", "L'étude doit être refaite ailleurs", "Les curistes ont triché"], answer: 0, why: "«l'eau aide, elle ne guérit pas — du moins pas seule, et pas mesurablement au-delà d'un semestre»" },
      { q: "¿Por qué leen los organismos aseguradores el estudio «con otro ojo»?", options: ["Parce qu'ils détestent Vichy", "Parce qu'un bénéfice modeste, à un coût élevé, ouvre la question du remboursement", "Parce que les médecins y sont mal payés", "Parce que l'étude est secrète"], answer: 1, why: "«un bénéfice modeste, à un coût élevé, ouvre la question du remboursement»" },
      { q: "¿Qué pregunta plantea finalmente el reumatólogo?", options: ["Si l'eau est bleue ou verte", "Combien coûte une journée de cure", "Si notre médecine sait prescrire du temps — dormir, marcher, être écouté", "Si les patients reviendront l'an prochain"], answer: 2, why: "«La question n'est pas de savoir si l'eau est active ; elle est de savoir si notre médecine sait prescrire du temps»" },
    ],
    discuss: [
      { it: "«Prescrire du temps» : votre médecin pourrait-il un jour le faire ?", es: "«Recetar tiempo»: ¿podría algún día hacerlo tu médico?" },
      { it: "Les médecines traditionnelles doivent-elles prouver leur efficacité comme des médicaments ?", es: "¿Deben las medicinas tradicionales demostrar su eficacia como los medicamentos?" },
    ],
  },

  /* ═══ C1 · 8 — Histoire · Bayeux ═══ */
  {
    id: "fr-news-c1-08", cat: "storia", level: "C1", place: "Bayeux", minutes: 5,
    title: "La tapisserie de Bayeux : neuf siècles de fil et de questions",
    titleEs: "El tapiz de Bayeux: nueve siglos de hilo y de preguntas",
    lead: {
      it: "Soixante-dix mètres de lin brodé racontent, depuis près de mille ans, la conquête de l'Angleterre. La tapisserie de Bayeux vient d'être passée au scanner, fil par fil — et elle garde ses mystères mieux que ses couleurs.",
      es: "Setenta metros de lino bordado cuentan, desde hace casi mil años, la conquista de Inglaterra. El tapiz de Bayeux acaba de pasar por el escáner, hilo a hilo — y guarda sus misterios mejor que sus colores.",
    },
    paragraphs: [
      { it: "L'objet est un paradoxe textile : une « tapisserie » qui est en réalité une broderie de laine sur lin, une chronique cousue par des mains que l'on croit anglaises, conservée en Normandie, décrivant la gloire d'un duc normand devenu roi d'Angleterre. Neuf cents ans plus tard, elle est exposée dans un musée que l'on visite en marche arrière, faute de recul suffisant : soixante-dix mètres de récit, c'est plus long que n'est haute la cathédrale voisine.",
      es: "El objeto es una paradoja textil: una «tapisserie» que en realidad es un bordado de lana sobre lino, una crónica cosida por manos que se cree inglesas, conservada en Normandía, que describe la gloria de un duque normando convertido en rey de Inglaterra. Novecientos años después, se expone en un museo que se visita marcha atrás, por falta de retroceso suficiente: setenta metros de relato son más largos de lo alta que es la catedral vecina." },
      { it: "La campagne d'examen, lancée avant la refonte du musée, a été conduite comme une enquête de police. Chaque scène a été photographiée en lumière rasante, chaque fil cartographié ; les réparations du dix-neuvième siècle, autrefois invisibles, sont apparues comme des aveux. On craignait que la toile ne fût plus fragile que sa réputation ; les experts ont trouvé l'inverse — une matière étonnamment robuste, mais des colorants que la lumière attaque sans relâche.",
      es: "La campaña de examen, lanzada antes de la renovación del museo, fue conducida como una investigación policial. Cada escena fue fotografiada con luz rasante, cada hilo cartografiado; las reparaciones del siglo diecinueve, antes invisibles, aparecieron como confesiones. Se temía que la tela fuese más frágil que su reputación; los expertos hallaron lo contrario — una materia asombrosamente robusta, pero colorantes que la luz ataca sin tregua." },
      { it: "Les découvertes affinent ce que l'on croyait savoir. Des noms oubliés ont été déchiffrés dans les bordures ; des coutures ont révélé que certaines scènes avaient été brodées par des mains différentes, sans plan unique — un chantier collectif, presque industriel pour l'époque. Le compte des scènes n'est même pas fixé : cinquante-huit, peut-être cinquante-neuf, selon que l'on raccorde deux fragments. La datation reste prudente : la plupart des historiens tiennent pour les années mille soixante-dix, mais aucun fil ne le prouve.",
      es: "Los descubrimientos afinan lo que se creía saber. Nombres olvidados fueron descifrados en los bordes; costuras revelaron que ciertas escenas habían sido bordadas por manos distintas, sin plan único — un taller colectivo, casi industrial para la época. Ni siquiera el número de escenas está fijado: cincuenta y ocho, tal vez cincuenta y nueve, según se conecten dos fragmentos. La datación sigue siendo prudente: la mayoría de los historiadores se inclina por los años mil setenta, pero ningún hilo lo prueba." },
      { it: "Car la tapisserie est aussi un piège historiographique. Faut-il y lire la victoire racontée par les vainqueurs, une propagande destinée à légitimer un pouvoir neuf ? Ou, au contraire, une ironie cousue en secret par les brodeuses vaincues, qui glissent dans les marges des détails que le discours officiel ne prévoyait pas ? Les deux lectures s'affrontent depuis un siècle, et la broderie, muette, se garde bien de trancher.",
      es: "Porque el tapiz es también una trampa historiográfica. ¿Hay que leer en él la victoria contada por los vencedores, una propaganda destinada a legitimar un poder nuevo? ¿O, al contrario, una ironía cosida en secreto por las bordadoras vencidas, que deslizan en los márgenes detalles que el discurso oficial no preveía? Las dos lecturas se enfrentan desde hace un siglo, y el bordado, mudo, se guarda bien de zanjar." },
      { it: "Cécile Le Goff, conservatrice de l'œuvre, a résumé l'enjeu d'une formule que les musées citent désormais : « Nous connaissons chaque mètre de cette toile, et nous ne savons toujours pas qui l'a voulue. C'est sa force : une source qui ne conclut pas. Tant qu'on la regarde, elle continue de travailler — neuf cents ans après, elle brode encore nos questions. » La refonte du musée, elle, offrira enfin à la toile la longueur qu'elle réclame.",
      es: "Cécile Le Goff, conservadora de la obra, resumió el asunto con una fórmula que los museos ya citan: «Conocemos cada metro de esta tela y seguimos sin saber quién la quiso. Esa es su fuerza: una fuente que no concluye. Mientras se la mire, sigue trabajando — novecientos años después, aún borda nuestras preguntas.» La renovación del museo, por su parte, ofrecerá por fin a la tela la longitud que reclama." },
    ],
    words: [
      { it: "une broderie", es: "un bordado" },
      { it: "le lin", es: "el lino" },
      { it: "la bordure / les bordures", es: "el borde (bordado)" },
      { it: "en lumière rasante", es: "con luz rasante" },
      { it: "légitimer", es: "legitimar" },
      { it: "déchiffrer / déchiffrés", es: "descifrar / descifrados" },
    ],
    questions: [
      { q: "¿Qué es en realidad la «tapisserie» de Bayeux?", options: ["Une broderie de laine sur lin, cousue par des mains que l'on croit anglaises et conservée en Normandie", "Un tableau peint sur bois", "Un manuscrit enluminé", "Une vraie tapisserie tissée à Lyon"], answer: 0, why: "«en réalité une broderie de laine sur lin, une chronique cousue par des mains que l'on croit anglaises, conservée en Normandie»" },
      { q: "¿Qué revelaron las costuras del tejido?", options: ["Que la toile est une copie moderne", "Que certaines scènes avaient été brodées par des mains différentes, sans plan unique", "Que les couleurs ont été repeintes", "Que la tapisserie est inachevée"], answer: 1, why: "«des coutures ont révélé que certaines scènes avaient été brodées par des mains différentes, sans plan unique»" },
      { q: "¿Por qué se llama al tapiz «una trampa historiográfica»?", options: ["Parce qu'elle est trop longue pour être lue", "Parce qu'elle est abîmée par l'humidité", "Parce qu'elle peut se lire comme propagande des vainqueurs ou comme ironie secrète des brodeuses vaincues", "Parce que les historiens refusent de l'étudier"], answer: 2, why: "«Faut-il y lire la victoire racontée par les vainqueurs, une propagande destinée à légitimer un pouvoir neuf ? Ou, au contraire, une ironie cousue en secret par les brodeuses vaincues»" },
      { q: "¿Qué quiere decir Le Goff con «una fuente que no concluye»?", options: ["Que le document est incomplet et doit être jeté", "Que les chercheurs n'ont pas fini leur travail", "Qu'il faut la ranger dans les réserves", "Qu'elle ne donne pas de réponse définitive et continue de nourrir les questions de chaque génération"], answer: 3, why: "«C'est sa force : une source qui ne conclut pas. Tant qu'on la regarde, elle continue de travailler — neuf cents ans après, elle brode encore nos questions»" },
    ],
    discuss: [
      { it: "Une «ironie cousue en secret» : les artisans peuvent-ils écrire l'histoire dans les marges ?", es: "Una «ironía cosida en secreto»: ¿pueden los artesanos escribir la historia en los márgenes?" },
      { it: "Faut-il déplacer une œuvre fragile pour la montrer, ou la protéger même au prix de la cacher ?", es: "¿Hay que trasladar una obra frágil para mostrarla, o protegerla incluso a costa de esconderla?" },
    ],
  },

  /* ═══ C1 · 9 — Sport · Font-Romeu ═══ */
  {
    id: "fr-news-c1-09", cat: "sport", level: "C1", place: "Font-Romeu", minutes: 5,
    title: "Font-Romeu : la science de l'air pauvre",
    titleEs: "Font-Romeu: la ciencia del aire pobre",
    lead: {
      it: "À mille huit cents mètres d'altitude, l'air manque d'environ un cinquième d'oxygène. C'est précisément pour cela que les athlètes viennent s'entraîner à Font-Romeu, où un centre dédié mesure depuis trente ans ce que la montagne fait au corps — pour le meilleur et pour la fatigue.",
      es: "A mil ochocientos metros de altitud, al aire le falta alrededor de una quinta parte de oxígeno. Precisamente por eso los atletas vienen a entrenarse a Font-Romeu, donde un centro dedicado mide desde hace treinta años lo que la montaña le hace al cuerpo — para bien y para el cansancio.",
    },
    paragraphs: [
      { it: "Le principe tient en une équation que les physiologistes répètent aux stagiaires dès le premier jour : moins d'oxygène inspiré, plus de globules rouges fabriqués. Séjourner en altitude pousse l'organisme à épaissir son sang, un peu comme une usine embauche quand la commande monte. Encore faut-il doser : trop haut, trop longtemps, et le corps se détruit au lieu de se construire. L'entraînement en altitude est un médicament, avec sa posologie et ses contre-indications.",
      es: "El principio cabe en una ecuación que los fisiólogos repiten a los residentes desde el primer día: menos oxígeno inspirado, más glóbulos rojos fabricados. Vivir en altura empuja al organismo a espesar su sangre, un poco como una fábrica contrata cuando el pedido sube. Todavía hay que dosificar: demasiado alto, demasiado tiempo, y el cuerpo se destruye en lugar de construirse. El entrenamiento en altitud es un medicamento, con su posología y sus contraindicaciones." },
      { it: "Le centre fonctionne comme une station de mesure du corps entier. Chaque athlète est pesé, son sang analysé deux fois par semaine, son sommeil enregistré par des capteurs portés au poignet. Les entraîneurs d'autrefois exigeaient que chaque séance fût menée jusqu'à l'épuisement ; le protocole actuel impose, à l'inverse, que la fatigue soit surveillée comme une dette, remboursée avant d'être contractée.",
      es: "El centro funciona como una estación de medición del cuerpo entero. Cada atleta es pesado, su sangre analizada dos veces por semana, su sueño registrado por sensores llevados en la muñeca. Los entrenadores de antaño exigían que cada sesión fuese llevada hasta el agotamiento; el protocolo actual impone, al contrario, que la fatiga sea vigilada como una deuda, reembolsada antes de ser contraída." },
      { it: "Les résultats ont consolidé la méthode dite « dormir haut, s'entraîner bas » : les sportifs dorment à l'étage de la montagne et descendent accomplir les séances intenses au fond de la vallée, là où l'air rend ce que l'altitude retire. Les séances de vélo sont calibrées au watt, les courses au dixième de seconde — une précision d'horloger que la génération précédente aurait prise pour une coquetterie.",
      es: "Los resultados consolidaron el método llamado «dormir alto, entrenar bajo»: los deportistas duermen en la planta alta de la montaña y bajan a cumplir las sesiones intensas al fondo del valle, allí donde el aire devuelve lo que la altitud quita. Las sesiones de bici se calibran al vatio, las carreras a la décima de segundo — una precisión de relojero que la generación anterior habría tomado por un capricho." },
      { it: "Les limites sont connues et discutées sans fard. Le gain, réel, s'estompe en quelques semaines au retour au niveau de la mer ; il profite inégalement selon les disciplines ; et l'organisme, à force de sollicitation, peut basculer du surmenage utile à l'épuisement stérile — la frontière entre les deux étant individuelle, ce qui rend les recettes collectives suspectes. D'où les carnets personnels, les bilans hebdomadaires, et ce conseil affiché à l'entrée du centre : « La montagne ne se force pas plus qu'un partenaire. »",
      es: "Los límites son conocidos y se discuten sin adornos. La ganancia, real, se desvanece en unas semanas al volver al nivel del mar; aprovecha de manera desigual según la disciplina; y el organismo, a fuerza de solicitación, puede pasar del sobreesfuerzo útil al agotamiento estéril — la frontera entre ambos es individual, lo que vuelve sospechosas las recetas colectivas. De ahí los cuadernos personales, los balances semanales y este consejo colgado a la entrada del centro: «La montaña no se fuerza más que una pareja de baile.»" },
      { it: "Antoine Vasseur, physiologiste du centre, garde une formule que les fédérations reprennent en formation : « L'altitude ne rend personne meilleur ; elle rend visible ce que chacun porte en réserve. Ceux qui en reviennent brillants étaient déjà brillants — ils avaient seulement oublié de le savoir. Notre métier, c'est de la leur rappeler, un globule à la fois. » La station, elle, prépare déjà l'été : c'est la saison où les records viennent se reposer.",
      es: "Antoine Vasseur, fisiólogo del centro, guarda una fórmula que las federaciones repiten en formación: «La altitud no vuelve mejor a nadie; vuelve visible lo que cada uno lleva en reserva. Quienes vuelven brillantes ya lo eran — solo habían olvidado saberlo. Nuestro oficio es recordárselo, un glóbulo a la vez.» La estación, por su parte, ya prepara el verano: es la temporada en que los récords vienen a descansar." },
    ],
    words: [
      { it: "l'altitude", es: "la altitud" },
      { it: "un globule rouge / des globules rouges", es: "un glóbulo rojo" },
      { it: "la posologie", es: "la posología" },
      { it: "une séance / des séances", es: "una sesión (de entrenamiento)" },
      { it: "le surmenage", es: "el sobreesfuerzo, el agotamiento" },
      { it: "s'estomper / s'estompe", es: "desvanecerse, difuminarse" },
    ],
    questions: [
      { q: "¿Cuál es el principio que repiten los fisiólogos el primer día?", options: ["Moins d'oxygène, moins de globules", "Moins d'oxygène inspiré, plus de globules rouges fabriqués", "L'altitude endort les muscles", "Il faut manger davantage"], answer: 1, why: "«moins d'oxygène inspiré, plus de globules rouges fabriqués»" },
      { q: "¿En qué consiste el método «dormir alto, entrenar bajo»?", options: ["Dormir en bas et s'entraîner en haut", "Ne dormir qu'en altitude, jour et nuit", "Dormir en altitude et descendre dans la vallée pour les séances intenses, là où l'air rend ce que l'altitude retire", "S'entraîner uniquement en salle fermée"], answer: 2, why: "«les sportifs dorment à l'étage de la montagne et descendent accomplir les séances intenses au fond de la vallée, là où l'air rend ce que l'altitude retire»" },
      { q: "¿Por qué son sospechosas las recetas colectivas?", options: ["Parce que les sportifs trichent souvent", "Parce que les wattmètres sont mal réglés", "Parce que la montagne change de climat", "Parce que la frontière entre surmenage utile et épuisement stérile est individuelle"], answer: 3, why: "«la frontière entre les deux étant individuelle, ce qui rend les recettes collectives suspectes»" },
      { q: "¿Qué significa que la altitud «hace visible lo que cada uno lleva en reserva»?", options: ["Que l'altitude révèle un potentiel déjà présent sans le créer : ceux qui reviennent brillants l'étaient déjà", "Que l'altitude fabrique des champions", "Que les réserves de carburant sont comptées", "Que le centre vend des compléments alimentaires"], answer: 0, why: "«L'altitude ne rend personne meilleur ; elle rend visible ce que chacun porte en réserve. Ceux qui en reviennent brillants étaient déjà brillants»" },
    ],
    discuss: [
      { it: "«Un médicament avec sa posologie» : peut-on avoir trop d'un bon entraînement ?", es: "«Un medicamento con su posología»: ¿puede sobrarnos un buen entrenamiento?" },
      { it: "Chez vous, la montagne est-elle une alliée ou une contrainte du quotidien ?", es: "Donde vives, ¿la montaña es una aliada o una carga del día a día?" },
    ],
  },

  /* ═══ C1 · 10 — Société · Épinal ═══ */
  {
    id: "fr-news-c1-10", cat: "societa", level: "C1", place: "Épinal", minutes: 5,
    title: "Le dernier café du village devient une association",
    titleEs: "El último café del pueblo se convierte en una asociación",
    lead: {
      it: "Dans les villages vosgiens, le café qui fermait était le dernier commerce de la commune. Une vague d'associations a décidé de reprendre les comptoirs : bénévoles, licences, horaires réduits — et une vie sociale qui ne figure dans aucune statistique.",
      es: "En los pueblos de los Vosgos, el café que cerraba era el último comercio del municipio. Una ola de asociaciones decidió recuperar los mostradores: voluntarios, licencias, horarios reducidos — y una vida social que no figura en ninguna estadística.",
    },
    paragraphs: [
      { it: "La scène s'est répétée tant de fois qu'elle est devenue un genre : le dernier café du village baisse le rideau, le maire parle de « désertification », et la commune se retrouve sans aucun lieu où boire un verre autrement que chez soi. Dans les Vosges, le phénomène a gagné des hameaux entiers ; les jeunes partent vers Épinal ou Nancy, les aînés restent, et la distance au premier commerce se compte désormais en dizaines de kilomètres.",
      es: "La escena se repitió tantas veces que se volvió un género: el último café del pueblo baja el telón, el alcalde habla de «despoblación» y el municipio se queda sin ningún lugar donde tomar algo fuera de casa. En los Vosgos, el fenómeno ganó aldeas enteras; los jóvenes se marchan hacia Épinal o Nancy, los mayores se quedan, y la distancia hasta el primer comercio se cuenta ahora en decenas de kilómetros." },
      { it: "La réponse est née de la débrouille associative. Une quinzaine de communes ont créé des « cafés associatifs » : la mairie prête ou rachète le local, des bénévoles tiennent le comptoir quelques soirs par semaine, les prix sont calculés au plus juste. Le modèle a ses règles : il fallait, dès l'origine, que chaque association fût assurée, que les comptes fussent publics, que les volontaires ne fussent jamais seuls face au comptoir.",
      es: "La respuesta nació del ingenio asociativo. Una quincena de municipios creó «cafés asociativos»: el ayuntamiento presta o recompra el local, voluntarios atienden el mostrador unas noches por semana, los precios se calculan al mínimo. El modelo tiene sus reglas: desde el origen, hacía falta que cada asociación estuviera asegurada, que las cuentas fuesen públicas, que los voluntarios nunca estuviesen solos frente al mostrador." },
      { it: "Les effets dépassent la consommation. Le café sert de point relais pour les colis, de salle des fêtes d'appoint, de bureau de permanence pour les démarches en ligne des aînés. Marie-Thérèse Colin, géographe qui étudie le mouvement, note que ces comptoirs sont redevenus « des endroits où la nouvelle du village se fabrique » : décès, naissances, chantiers — tout y transite avant même d'être officiel.",
      es: "Los efectos superan el consumo. El café sirve de punto de recogida de paquetes, de sala de fiestas de apoyo, de oficina de permanencia para los trámites en línea de los mayores. Marie-Thérèse Colin, geógrafa que estudia el movimiento, observa que estos mostradores volvieron a ser «lugares donde se fabrica la noticia del pueblo»: fallecimientos, nacimientos, obras — todo pasa por allí antes incluso de ser oficial." },
      { it: "Les fragilités sont assumées comme telles. Le bénévolat s'use, la moyenne d'âge des équipes inquiète, et la caisse ne supporte pas les grands travaux. Certaines associations ont fusionné avec l'épicerie du village voisin ; d'autres ont embauché un salarié à mi-temps avec les aides aux petits commerces. La question posée partout est la même : que deviendra le comptoir quand la génération qui le tient ne pourra plus monter les chaises le soir ?",
      es: "Las fragilidades se asumen como tales. El voluntariado se desgasta, la media de edad de los equipos inquieta, y la caja no soporta las grandes obras. Algunas asociaciones se fusionaron con la tienda del pueblo vecino; otras contrataron un empleado a media jornada con las ayudas a los pequeños comercios. La pregunta planteada en todas partes es la misma: ¿qué será del mostrador cuando la generación que lo sostiene ya no pueda subir las sillas por la noche?" },
      { it: "Marie-Thérèse Colin répond par une image que les rapports reprennent désormais : « Un village sans café n'est pas un village plus pauvre : c'est un village rendu muet. Ces bénévoles ne vendent pas des cafés ; ils entretiennent l'endroit où le village se parle. Tant qu'il y a quelqu'un pour brancher la machine le matin, la commune existe encore. » Dans les Vosges, une quinzaine de communes attendent des volontaires de moins de cinquante ans — la liste est ouverte.",
      es: "Marie-Thérèse Colin responde con una imagen que los informes ya retoman: «Un pueblo sin café no es un pueblo más pobre: es un pueblo enmudecido. Estos voluntarios no venden cafés; mantienen el lugar donde el pueblo se habla. Mientras haya alguien que enchufe la máquina por la mañana, el municipio existe todavía.» En los Vosgos, una quincena de municipios espera voluntarios de menos de cincuenta años — la lista está abierta." },
    ],
    words: [
      { it: "le comptoir", es: "el mostrador, la barra" },
      { it: "bénévole / des bénévoles", es: "voluntario" },
      { it: "une commune / des communes", es: "un municipio" },
      { it: "baisser le rideau", es: "cerrar definitivamente (un negocio)", note: "literalmente «bajar el telón»; «le rideau» = telón, estor" },
      { it: "la désertification", es: "la despoblación (pérdida de servicios)" },
      { it: "un hameau / des hameaux", es: "una aldea, un caserío" },
    ],
    questions: [
      { q: "¿Qué se cuenta ahora en decenas de kilómetros?", options: ["La route vers les stations de ski", "Les forêts voisines", "La distance au premier commerce, depuis la fermeture des derniers cafés", "Les sentiers de randonnée"], answer: 2, why: "«la distance au premier commerce se compte désormais en dizaines de kilomètres»" },
      { q: "¿Qué reglas tenía el modelo desde el origen?", options: ["Servir uniquement des repas gastronomiques", "Interdire l'accès aux touristes", "Ouvrir uniquement l'été", "Que chaque association fût assurée, que les comptes fussent publics, que les volontaires ne fussent jamais seuls"], answer: 3, why: "«il fallait, dès l'origine, que chaque association fût assurée, que les comptes fussent publics, que les volontaires ne fussent jamais seuls face au comptoir»" },
      { q: "¿Por qué se dice que los efectos «superan el consumo»?", options: ["Parce que le café sert aussi de point relais, de salle des fêtes d'appoint et de permanence pour les démarches en ligne", "Parce que les prix ont beaucoup augmenté", "Parce que la mairie y tient ses réunions", "Parce que le café gagne de l'argent"], answer: 0, why: "«Le café sert de point relais pour les colis, de salle des fêtes d'appoint, de bureau de permanence pour les démarches en ligne des aînés»" },
      { q: "¿Qué significa un pueblo «enmudecido»?", options: ["Un village qui chante tous les soirs", "Un village privé de l'endroit où il se parle, c'est-à-dire de sa voix collective", "Un village sans radio ni télévision", "Un village où personne ne travaille"], answer: 1, why: "«Un village sans café n'est pas un village plus pauvre : c'est un village rendu muet» — los voluntarios mantienen «l'endroit où le village se parle»" },
    ],
    discuss: [
      { it: "Votre quartier a-t-il un lieu qui «fabrique la nouvelle» ? Que s'y passe-t-il ?", es: "¿Tiene tu barrio un lugar que «fabrica la noticia»? ¿Qué pasa allí?" },
      { it: "Le bénévolat peut-il remplacer durablement un commerce ? Où est la limite ?", es: "¿Puede el voluntariado sustituir duraderamente un comercio? ¿Dónde está el límite?" },
    ],
  },

  /* ═══ C1 · 11 — Culture · Grasse ═══ */
  {
    id: "fr-news-c1-11", cat: "cultura", level: "C1", place: "Grasse", minutes: 5,
    title: "À Grasse, le parfum devient patrimoine",
    titleEs: "En Grasse, el perfume se convierte en patrimonio",
    lead: {
      it: "À Grasse, la rose et le jasmin se cueillent à l'aube depuis quatre siècles, et le métier de « nez » s'apprend encore comme un artisanat. L'inscription de ce savoir-faire au patrimoine de l'humanité a transformé une fierté locale en obligation : transmettre.",
      es: "En Grasse, la rosa y el jazmín se recogen al alba desde hace cuatro siglos, y el oficio de «nariz» se aprende todavía como un artesanado. La inscripción de ese saber hacer en el patrimonio de la humanidad transformó un orgullo local en obligación: transmitir.",
    },
    paragraphs: [
      { it: "La ville a bâti sa fortune sur l'invisible. Aux dix-septième et dix-huitième siècles, les tanneries de Grasse, gênées par leurs odeurs, se mirent à parfumer les cuirs ; le cuir déclina, le parfum resta. Aujourd'hui encore, les maisons de composition y forment leurs créateurs, et les champs de fleurs habillent les coteaux — moins vastes qu'autrefois, mais intacts dans leurs gestes : la rose se cueille à la main, fleur par fleur, entre mai et juin.",
      es: "La ciudad construyó su fortuna sobre lo invisible. En los siglos diecisiete y dieciocho, las curtidurías de Grasse, molestas por sus olores, se pusieron a perfumar los cueros; el cuero declinó, el perfume quedó. Todavía hoy, las casas de composición forman allí a sus creadores, y los campos de flores visten las laderas — menos vastos que antaño, pero intactos en sus gestos: la rosa se recoge a mano, flor a flor, entre mayo y junio." },
      { it: "L'inscription au patrimoine, obtenue après des années de dossier, a été saluée comme une victoire — puis vécue comme une charge. Car le label protège des compétences, pas des champs : la pression immobilière grignote les parcelles, et les étés secs avancent la floraison, bousculant les cueillettes. Juliette Benhamou, parfumeuse et formatrice, constate que le métier « s'est cru éternel précisément au moment où il devenait rare ».",
      es: "La inscripción en el patrimonio, obtenida tras años de expediente, fue saludada como una victoria — y vivida después como una carga. Porque la etiqueta protege competencias, no campos: la presión inmobiliaria roe las parcelas, y los veranos secos adelantan la floración, trastocando las recolecciones. Juliette Benhamou, perfumista y formadora, constata que el oficio «se creyó eterno precisamente en el momento en que se volvía raro»." },
      { it: "La transmission est devenue un chantier en soi. La tradition voulait naguère qu'un adolescent fût placé chez un maître parfumeur, et que le geste se transmît avant la théorie ; ce chemin a disparu, et il faut le réinventer. Une formation aux métiers du parfum a été ouverte aux jeunes du bassin, avec des places réservées aux enfants d'agriculteurs ; les maisons parrainent des classes ; des jardins pédagogiques ont été plantés près des écoles, où les enfants découvrent ce qu'est un « nez ».",
      es: "La transmisión se volvió un taller en sí misma. La tradición quería antaño que un adolescente fuese colocado junto a un maestro perfumista, y que el gesto se transmitiese antes que la teoría; ese camino desapareció, y hay que reinventarlo. Una formación en los oficios del perfume fue abierta a los jóvenes de la cuenca, con plazas reservadas a los hijos de agricultores; las casas apadrinan clases; jardines pedagógicos fueron plantados cerca de las escuelas, donde los niños descubren qué es una «nariz»." },
      { it: "Le paradoxe du luxe n'a pas disparu. Les grandes maisons mondialisées portent le nom de la ville, mais la matière première locale ne pèse plus qu'une part infime des volumes mondiaux. Certains agriculteurs se demandent si la fête du patrimoine n'oublie pas les champs au profit des vitrines ; d'autres répondent que la valeur des fleurs tient désormais à leur histoire — et que l'histoire, elle, ne se délocalise pas.",
      es: "La paradoja del lujo no desapareció. Las grandes casas mundiales llevan el nombre de la ciudad, pero la materia prima local ya no pesa más que una parte ínfima de los volúmenes mundiales. Algunos agricultores se preguntan si la fiesta del patrimonio no olvida los campos en provecho de los escaparates; otros responden que el valor de las flores reside ahora en su historia — y la historia, precisamente, no se deslocaliza." },
      { it: "Juliette Benhamou, à la fin d'une journée de récolte, a livré la formule que la profession répète : « Un parfum, c'est une mémoire portée sur la peau. Ce que nous protégeons n'est pas une odeur : c'est la chaîne entière — le champ, le geste, le panier, la pesée, la distillation. Cassez un seul maillon, et il ne restera qu'un joli flacon avec un beau nom. » Le prochain inventaire du patrimoine, lui, portera sur les gestes de la distillation.",
      es: "Juliette Benhamou, al final de una jornada de recolección, entregó la fórmula que la profesión repite: «Un perfume es un recuerdo llevado sobre la piel. Lo que protegemos no es un olor: es la cadena entera — el campo, el gesto, la cesta, el pesaje, la destilación. Rompan un solo eslabón y no quedará más que un bonito frasco con un bonito nombre.» El próximo inventario del patrimonio, por su parte, tratará de los gestos de la destilación." },
    ],
    words: [
      { it: "la cueillette / les cueillettes", es: "la recolección" },
      { it: "un nez", es: "una «nariz» (creador de perfumes)", note: "aquí «nez» = compositor de perfumes, no el órgano" },
      { it: "la tannerie / les tanneries", es: "la curtiduría" },
      { it: "la distillation", es: "la destilación" },
      { it: "une parcelle / des parcelles", es: "una parcela" },
      { it: "la transmission / transmettre", es: "la transmisión / transmitir" },
    ],
    questions: [
      { q: "¿Cómo nació la fortuna perfumada de Grasse?", options: ["Par les vignobles de la côte", "Par la soie et la draperie", "Par le tourisme du littoral", "Par les tanneries, qui se mirent à parfumer leurs cuirs ; le cuir déclina, le parfum resta"], answer: 3, why: "«les tanneries de Grasse, gênées par leurs odeurs, se mirent à parfumer les cuirs ; le cuir déclina, le parfum resta»" },
      { q: "¿Qué protege exactamente la etiqueta de patrimonio?", options: ["Des compétences, pas des champs : la pression immobilière et les étés secs restent des menaces", "Les champs contre les promoteurs", "Les flacons anciens des collections", "Le nom commercial des rues"], answer: 0, why: "«le label protège des compétences, pas des champs : la pression immobilière grignote les parcelles, et les étés secs avancent la floraison»" },
      { q: "¿Por qué dudan algunos agricultores de la «fiesta del patrimonio»?", options: ["Parce qu'ils veulent planter des vignes", "Parce qu'ils craignent que les champs soient oubliés au profit des vitrines des grandes maisons", "Parce que les écoles prennent leurs terres", "Parce que le jasmin est devenu rare"], answer: 1, why: "«Certains agriculteurs se demandent si la fête du patrimoine n'oublie pas les champs au profit des vitrines»" },
      { q: "¿Qué quiere decir «romper un solo eslabón»?", options: ["Fermer l'école de parfumerie", "Perdre un grand client étranger", "Perdre un seul maillon de la chaîne — champ, geste, panier, pesée, distillation — et ne garder qu'un flacon vide de sens", "Casser un flacon historique"], answer: 2, why: "«Cassez un seul maillon, et il ne restera qu'un joli flacon avec un beau nom»" },
    ],
    discuss: [
      { it: "«Une mémoire portée sur la peau» : un parfum vous raconte-t-il une histoire ? Laquelle ?", es: "«Un recuerdo llevado sobre la piel»: ¿te cuenta alguna historia un perfume? ¿Cuál?" },
      { it: "Patrimoine ou vitrine : comment protéger un savoir-faire sans le figer ?", es: "Patrimonio o escaparate: ¿cómo proteger un saber hacer sin congelarlo?" },
    ],
  },

  /* ═══ C1 · 12 — Économie · Dunkerque ═══ */
  {
    id: "fr-news-c1-12", cat: "economia", level: "C1", place: "Dunkerque", minutes: 5,
    title: "Dunkerque : le port fabrique sa deuxième vie",
    titleEs: "Dunkerque: el puerto fabrica su segunda vida",
    lead: {
      it: "On l'a cru condamné par la désindustrialisation ; le port de Dunkerque recrute à nouveau. La vague d'usines qui s'y installe pose une question d'économie autant que de mémoire : comment fabriquer encore, là où l'on a appris à fermer ?",
      es: "Se le creyó condenado por la desindustrialización; el puerto de Dunkerque contrata de nuevo. La ola de fábricas que se instala allí plantea una pregunta de economía tanto como de memoria: ¿cómo fabricar todavía, donde se aprendió a cerrar?",
    },
    paragraphs: [
      { it: "Le paysage porte les deux histoires à la fois. Les crassiers et les friches de la sidérurgie y côtoient des chantiers neufs : parcs éoliens en mer, usines de batteries, lignes de production dont on annonce les emplois à la presse locale comme on annonce des naissances. La génération qui a vu fermer les hauts fourneaux déjeune désormais à côté de celle qui n'a connu que les grues du renouveau — les deux partagent les mêmes cantines, sans toujours se parler.",
      es: "El paisaje lleva las dos historias a la vez. Las montañas de escorias y los terrenos abandonados de la siderurgia conviven allí con obras nuevas: parques eólicos en el mar, fábricas de baterías, líneas de producción cuyos empleos se anuncian a la prensa local como se anuncian nacimientos. La generación que vio cerrar los altos hornos almuerza ahora al lado de la que solo conoció las grúas del renacer — ambas comparten los mismos comedores, sin hablarse siempre." },
      { it: "L'atout du port tient à une évidence géographique : l'eau profonde, le rail, l'Europe du Nord à portée de quai. Mais le véritable chantier a été humain. Il fallait que les friches fussent dépolluées avant d'être vendues — la dépollution des sols a précédé chaque inauguration —, que les formations fussent réécrites avec les entreprises, que la main-d'œuvre locale fût recrutée avant que la concurrence ne s'en saisît.",
      es: "La baza del puerto está en una evidencia geográfica: el agua profunda, el ferrocarril, la Europa del Norte al alcance del muelle. Pero la verdadera obra fue humana. Hacía falta que los terrenos fuesen descontaminados antes de ser vendidos — la descontaminación de los suelos precedió a cada inauguración —, que las formaciones fuesen reescritas con las empresas, que la mano de obra local fuese contratada antes de que la competencia se adueñase de ella." },
      { it: "Les résultats se lisent dans le chômage, qui recule plus vite qu'au niveau national, mais aussi dans les salaires et dans les cantines. Karim Belkacem, économiste régional, tempère l'enthousiasme des brochures : « Chaque emploi industriel en attire d'autres, c'est vrai ; mais chaque fermeture précédente en avait détruit bien plus. L'arithmétique du renouveau sera jugée sur vingt ans, pas sur un communiqué. »",
      es: "Los resultados se leen en el paro, que retrocede más rápido que a escala nacional, pero también en los salarios y en los comedores. Karim Belkacem, economista regional, templa el entusiasmo de los folletos: «Cada empleo industrial atrae a otros, es verdad; pero cada cierre anterior había destruido muchos más. La aritmética del renacer será juzgada a veinte años, no sobre un comunicado.»" },
      { it: "Les critiques portent sur la dépendance. Une économie bâtie sur des usines attirées par des aides publiques reste vulnérable aux décisions lointaines, et la mémoire locale a appris à se méfier des inaugurations en fanfare. La chambre de commerce répond par la diversification — énergie, logistique, réparation navale — et par une phrase qui circule désormais dans les syndicats : « On ne veut plus d'une ville à une seule usine. » Les uns demandent des clauses d'emploi, les autres des garanties de long terme.",
      es: "Las críticas apuntan a la dependencia. Una economía construida sobre fábricas atraídas por ayudas públicas sigue siendo vulnerable a decisiones lejanas, y la memoria local aprendió a desconfiar de las inauguraciones con fanfarria. La cámara de comercio responde con la diversificación — energía, logística, reparación naval — y con una frase que circula ya en los sindicatos: «No queremos más una ciudad con una sola fábrica.» Unos piden cláusulas de empleo, otros garantías de largo plazo." },
      { it: "Karim Belkacem conclut par une image que les écoles de commerce citent volontiers : « Un port, c'est une promesse répétée. Pendant trente ans, on a promis la fin ; aujourd'hui, on promet le retour. La vraie réussite, ce sera le jour où l'on ne promettra plus rien — parce que tout sera déjà là. » Le prochain test, déjà annoncé, portera sur l'approvisionnement électrique des nouvelles usines.",
      es: "Karim Belkacem concluye con una imagen que las escuelas de negocios citan gustosas: «Un puerto es una promesa repetida. Durante treinta años se prometió el fin; hoy se promete el regreso. El verdadero éxito llegará el día en que ya no se prometa nada — porque todo estará ya allí.» La próxima prueba, ya anunciada, tratará del suministro eléctrico de las nuevas fábricas." },
    ],
    words: [
      { it: "une friche / des friches", es: "un terreno industrial abandonado" },
      { it: "un crassier / des crassiers", es: "una montaña de escorias (siderúrgicas)", note: "montón de escoria de acería; cf. el «terril», del carbón" },
      { it: "la dépollution", es: "la descontaminación" },
      { it: "le chômage", es: "el paro, el desempleo" },
      { it: "la main-d'œuvre", es: "la mano de obra" },
      { it: "une grue / des grues", es: "una grúa" },
    ],
    questions: [
      { q: "¿Qué se anuncia a la prensa local «como se anuncian nacimientos»?", options: ["Les emplois des chantiers et des usines nouvelles", "Les mariages de la saison", "Les fermetures de services", "Les résultats des matchs"], answer: 0, why: "«des chantiers neufs : parcs éoliens en mer, usines de batteries, lignes de production dont on annonce les emplois à la presse locale comme on annonce des naissances»" },
      { q: "¿Cuál fue el verdadero trabajo humano del renacer?", options: ["Construire des logements de luxe", "Dépolluer les friches, réécrire les formations avec les entreprises, recruter la main-d'œuvre locale", "Organiser des festivals d'été", "Agrandir la gare routière"], answer: 1, why: "«Il fallait que les friches fussent dépolluées avant d'être vendues» — y «que les formations fussent réécrites avec les entreprises, que la main-d'œuvre locale fût recrutée»" },
      { q: "¿Por qué dice Belkacem que la aritmética se juzgará a veinte años?", options: ["Parce qu'il refuse les chiffres", "Parce que les brochures mentent toujours", "Parce que chaque emploi industriel en attire d'autres, mais chaque fermeture précédente en avait détruit bien plus", "Parce que le port fermera de nouveau"], answer: 2, why: "«Chaque emploi industriel en attire d'autres, c'est vrai ; mais chaque fermeture précédente en avait détruit bien plus»" },
      { q: "¿Qué significará el día en que «ya no se prometa nada»?", options: ["Le déclin définitif du port", "Une nouvelle campagne publicitaire", "Le silence des institutions", "La réussite complète : usines et emplois seront déjà installés, sans besoin de promettre"], answer: 3, why: "«La vraie réussite, ce sera le jour où l'on ne promettra plus rien — parce que tout sera déjà là»" },
    ],
    discuss: [
      { it: "Votre région a-t-elle connu une «deuxième vie» industrielle ? Racontez-la en français.", es: "¿Ha conocido tu región una «segunda vida» industrial? Cuéntala en francés." },
      { it: "Faut-il attirer les usines avec des aides publiques ? Jusqu'où iriez-vous ?", es: "¿Hay que atraer fábricas con ayudas públicas? ¿Hasta dónde llegarías?" },
    ],
  },

  /* ═══ C1 · 13 — Histoire · Narbonne ═══ */
  {
    id: "fr-news-c1-13", cat: "storia", level: "C1", place: "Narbonne", minutes: 5,
    title: "Narbonne : la ville qui dort sur son port romain",
    titleEs: "Narbona: la ciudad que duerme sobre su puerto romano",
    lead: {
      it: "Narbonne fut la première colonie romaine de Gaule, un port riche que le fleuve a fini d'ensevelir. La ville moderne est construite dessus ; les archéologues apprennent désormais à la lire sans la déranger, à l'aide de cartes invisibles.",
      es: "Narbona fue la primera colonia romana de la Galia, un puerto rico que el río terminó por sepultar. La ciudad moderna está construida encima; los arqueólogos aprenden ahora a leerla sin molestarla, con mapas invisibles.",
    },
    paragraphs: [
      { it: "Narbo Martius, colonie de vétérans fondée avant notre ère, devint l'un des grands ports de la Méditerranée : vins, amphores, garum, marbre — tout transitait par son bassin, que l'Aude et ses alluvions n'ont pas mis un siècle à combler. La mer, aujourd'hui, est à douze kilomètres ; le port antique dort sous les rues, les caves et les parkings, intact et inaccessible.",
      es: "Narbo Martius, colonia de veteranos fundada antes de nuestra era, llegó a ser uno de los grandes puertos del Mediterráneo: vinos, ánforas, garum, mármol — todo transitaba por su dársena, que el Aude y sus aluviones no tardaron un siglo en colmar. El mar, hoy, está a doce kilómetros; el puerto antiguo duerme bajo las calles, las bodegas y los aparcamientos, intacto e inaccesible." },
      { it: "Longtemps, la ville n'a entretenu avec ce trésor qu'un rapport de propriétaire distrait : quelques fouilles sauvées de ci de là, des mosaïques au musée, et l'obligation légale d'un diagnostic avant chaque chantier. Véronique Sabatier, archéologue municipale, rappelle qu'il fallut se battre, année après année, pour que le sous-sol fût examiné avant que la pelleteuse ne fût lâchée — une contrainte que les promoteurs jugeaient naguère décorative.",
      es: "Durante mucho tiempo, la ciudad no mantuvo con ese tesoro más que una relación de propietario distraído: algunas excavaciones salvadas aquí y allá, mosaicos en el museo, y la obligación legal de un diagnóstico antes de cada obra. Véronique Sabatier, arqueóloga municipal, recuerda que hubo que luchar, año tras año, para que el subsuelo fuese examinado antes de que la excavadora fuese soltada — una exigencia que los promotores juzgaban antaño decorativa." },
      { it: "La méthode a changé d'échelle. Des relevés géophysiques, menés camion au pas entre les immeubles, cartographient le sous-sol sans ouvrir une seule tranchée ; les données sont assemblées en une maquette numérique où le port romain reparaît, quai par quai, entrepôt par entrepôt. On y voit une ville dans la ville : des quais alignés, des hangars à amphores, un chenal que l'on croyait perdu. La géographie du passé est redevenue lisible sans avoir déplacé une pierre.",
      es: "El método cambió de escala. Levantamientos geofísicos, realizados camión al paso entre los edificios, cartografían el subsuelo sin abrir una sola zanja; los datos se ensamblan en una maqueta digital donde el puerto romano reaparece, muelle a muelle, almacén a almacén. Se ve en ella una ciudad dentro de la ciudad: muelles alineados, hangares de ánforas, un canal que se creía perdido. La geografía del pasado volvió a ser legible sin haber movido una piedra." },
      { it: "Les découvertes retentissent jusque dans les manuels : le port était plus vaste qu'on ne le croyait, et son ensevelissement plus précoce. Mais la question devient urbaine avant d'être historique : que faire d'un patrimoine que l'on ne peut ni voir ni toucher ? D'autres villes ont bâti des musées sur leurs vestiges ; Narbonne préfère, pour l'heure, la carte et la maquette, qui laissent la ville vivre au-dessus de son passé.",
      es: "Los descubrimientos resuenan hasta en los manuales: el puerto era más vasto de lo que se creía, y su sepultamiento más temprano. Pero la cuestión se vuelve urbana antes que histórica: ¿qué hacer con un patrimonio que no se puede ni ver ni tocar? Otras ciudades construyeron museos sobre sus vestigios; Narbona prefiere, por ahora, el mapa y la maqueta, que dejan vivir la ciudad encima de su pasado." },
      { it: "Véronique Sabatier assume ce choix d'une formule que les services du patrimoine citent désormais : « Nous ne creusons plus pour savoir ; nous savons pour ne pas avoir à creuser. Sous ces rues dort la seule ville romaine que l'on pourra encore montrer intacte dans mille ans — à condition de la laisser dormir. » L'étape suivante, déjà promise, portera sur la mise en ligne de la maquette, ouverte aux curieux du monde entier.",
      es: "Véronique Sabatier asume esa elección con una fórmula que los servicios de patrimonio ya citan: «Ya no excavamos para saber; sabemos para no tener que excavar. Bajo estas calles duerme la única ciudad romana que aún se podrá mostrar intacta dentro de mil años — con la condición de dejarla dormir.» La etapa siguiente, ya prometida, tratará de la publicación en línea de la maqueta, abierta a los curiosos del mundo entero." },
    ],
    words: [
      { it: "une alluvion / les alluvions", es: "un aluvión" },
      { it: "une amphore / des amphores", es: "una ánfora", note: "femenina y con tilde en español; el «garum» era la salsa de pescado romana" },
      { it: "le sous-sol", es: "el subsuelo" },
      { it: "un relevé géophysique / des relevés", es: "un levantamiento geofísico" },
      { it: "un entrepôt / des entrepôts", es: "un almacén" },
      { it: "un vestige / des vestiges", es: "un vestigio" },
    ],
    questions: [
      { q: "¿Por qué el puerto antiguo es hoy inaccesible?", options: ["Parce qu'une guerre l'a détruit", "Parce que l'Aude et ses alluvions ont comblé le bassin : la mer est à douze kilomètres, le port dort sous la ville", "Parce qu'une vitre le protège", "Parce que les archéologues l'ont déménagé"], answer: 1, why: "«que l'Aude et ses alluvions n'ont pas mis un siècle à combler. La mer, aujourd'hui, est à douze kilomètres ; le port antique dort sous les rues, les caves et les parkings, intact et inaccessible»" },
      { q: "¿Qué permite la maqueta digital del subsuelo?", options: ["Reconstruire le port en béton armé", "Vendre des billets d'entrée", "Voir repararaître le port romain, quai par quai, entrepôt par entrepôt, sans ouvrir une tranchée", "Drainer les eaux de pluie"], answer: 2, why: "«les données sont assemblées en une maquette numérique où le port romain reparaît, quai par quai, entrepôt par entrepôt»" },
      { q: "¿Por qué la cuestión se vuelve «urbana antes que histórica»?", options: ["Parce que l'histoire ne compte plus", "Parce que les vestiges sont récents", "Parce que les touristes s'ennuient", "Parce qu'il faut décider quoi faire d'un patrimoine que l'on ne peut ni voir ni toucher"], answer: 3, why: "«que faire d'un patrimoine que l'on ne peut ni voir ni toucher ?»" },
      { q: "¿Qué significa «sabemos para no tener que excavar»?", options: ["Connaître le sous-sol par la géophysique pour préserver les vestiges, en laissant la ville vivre au-dessus", "Que les archéologues refusent tout travail", "Que le sous-sol est vide de vestiges", "Que la loi interdit désormais la science"], answer: 0, why: "«Nous ne creusons plus pour savoir ; nous savons pour ne pas avoir à creuser»" },
    ],
    discuss: [
      { it: "Faut-il montrer les vestiges ou les protéger en les laissant enterrés ?", es: "¿Hay que mostrar los vestigios o protegerlos dejándolos enterrados?" },
      { it: "Votre ville cache-t-elle une ville plus ancienne sous ses rues ?", es: "¿Esconde tu ciudad una ciudad más antigua bajo sus calles?" },
    ],
  },

  /* ═══ C1 · 14 — Sport · Vannes ═══ */
  {
    id: "fr-news-c1-14", cat: "sport", level: "C1", place: "Vannes", minutes: 5,
    title: "Le golfe du Morbihan met la voile à l'école",
    titleEs: "El golfo de Morbihan lleva la vela a la escuela",
    lead: {
      it: "Dans le golfe du Morbihan, la voile n'est plus un sport de famille aisée ni un loisir d'été. Depuis cinq ans, tous les enfants du pays de Vannes passent par le bateau — et le golfe devient une salle de classe à marées.",
      es: "En el golfo de Morbihan, la vela ya no es un deporte de familia acomodada ni un pasatiempo de verano. Desde hace cinco años, todos los niños del país de Vannes pasan por el barco — y el golfo se convierte en un aula con mareas.",
    },
    paragraphs: [
      { it: "L'idée tient en une phrase : la mer est un bien commun, elle se partage comme l'école. Concrètement, les classes embarquent sur des petits dériveurs et des voiliers collectifs, encadrées par des moniteurs et des enseignants formés pour l'occasion. Les séances sont payées par un fonds commun auquel contribuent le département, les communes et les clubs — afin que la bourse des parents ne décide jamais de qui a le droit de naviguer.",
      es: "La idea cabe en una frase: el mar es un bien común, se comparte como la escuela. En concreto, las clases embarcan en pequeños dinguis y veleros colectivos, supervisadas por monitores y docentes formados para la ocasión. Las sesiones las paga un fondo común al que contribuyen el departamento, los municipios y los clubes — para que la bolsa de los padres nunca decida quién tiene derecho a navegar." },
      { it: "La pédagogie a été réécrite pour l'occasion. La voile y sert de prétexte à tout : le vent devient une leçon de géographie, les marées une leçon d'astronomie, la manœuvre une leçon de physique, les règles de priorité une leçon de citoyenneté. Les instructeurs exigeaient autrefois que chaque enfant fût capable de barrer seul avant d'embarquer en équipage ; la priorité est inversée désormais : on apprend d'abord à embarquer, à écouter, à répartir les rôles — le solo viendra plus tard.",
      es: "La pedagogía fue reescrita para la ocasión. La vela sirve allí de pretexto para todo: el viento se vuelve una lección de geografía, las mareas una lección de astronomía, la maniobra una lección de física, las reglas de prioridad una lección de ciudadanía. Los instructores exigían antes que cada niño fuese capaz de gobernar solo antes de embarcar en tripulación; la prioridad está invertida desde ahora: primero se aprende a embarcar, a escuchar, a repartir los papeles — la navegación en solitario llegará después." },
      { it: "Les effets sont mesurés avec attention. La natation s'est améliorée, disent les collèges ; certains enfants timides ont révélé des réflexes que la salle de classe ignorait ; et les clubs locaux voient arriver des licenciés de milieux que le nautisme n'atteignait pas. Anne-Claire Le Bihan, directrice du pôle nautique, parle d'« un sport qui redonne le vertige dans le bon sens » — celui du large, pas celui des notes.",
      es: "Los efectos se miden con atención. La natación mejoró, dicen los institutos; algunos niños tímidos revelaron reflejos que el aula ignoraba; y los clubes locales ven llegar federados de medios a los que el náutico no llegaba. Anne-Claire Le Bihan, directora del polo náutico, habla de «un deporte que devuelve el vértigo en el buen sentido» — el del mar abierto, no el de las notas." },
      { it: "Le modèle a ses exigences, à commencer par la sécurité : gilets, zones de navigation balisées, météo scrutée deux fois par jour. Il a aussi ses limites : les créneaux saturent au printemps, les moniteurs manquent, et le golfe, précisément protégé, supporte mal la multiplication des sorties. L'été, la navigation scolaire doit céder la place à la navigation tout court — le golfe appartient alors aux vacanciers et aux sternes, qui n'ont pas d'horaire.",
      es: "El modelo tiene sus exigencias, empezando por la seguridad: chalecos, zonas de navegación balizadas, meteorología examinada dos veces al día. También tiene sus límites: las franjas horarias se saturan en primavera, faltan monitores, y el golfo, precisamente protegido, soporta mal la multiplicación de salidas. En verano, la navegación escolar debe ceder el sitio a la navegación sin más — el golfo pertenece entonces a los veraneantes y a los charranes, que no tienen horario." },
      { it: "Anne-Claire Le Bihan garde pour la fin une formule que les fédérations citent en exemple : « En vingt ans de monitorat, j'ai vu des enfants avoir peur, puis comprendre, puis tenir la barre. Ce que la voile enseigne, aucun manuel ne l'enseigne : le vent ne négocie pas, la mer ne répète pas, l'équipage ne triche pas. C'est une école qui ne ment pas. »",
      es: "Anne-Claire Le Bihan guarda para el final una fórmula que las federaciones citan como ejemplo: «En veinte años de monitoría he visto a niños tener miedo, luego comprender, luego sujetar la caña. Lo que enseña la vela no lo enseña ningún manual: el viento no negocia, el mar no repite, la tripulación no hace trampas. Es una escuela que no miente.»" },
    ],
    words: [
      { it: "un dériveur / des dériveurs", es: "un dingui (velero ligero)" },
      { it: "la barre / barrer", es: "la caña o rueda del timón / gobernar" },
      { it: "un moniteur / des moniteurs", es: "un monitor" },
      { it: "un licencié / des licenciés", es: "un federado, socio de club", note: "en francés, «licencié» = afiliado a una federación deportiva; no significa «titulado»" },
      { it: "baliser / balisées", es: "balizar" },
      { it: "la marée / les marées", es: "la marea" },
    ],
    questions: [
      { q: "¿Para qué sirve el fondo común?", options: ["À acheter des cirés neufs", "À payer seulement les moniteurs", "À payer les séances, afin que la bourse des parents ne décide jamais de qui a le droit de naviguer", "À organiser des régates"], answer: 2, why: "«afin que la bourse des parents ne décide jamais de qui a le droit de naviguer»" },
      { q: "¿Qué prioridad pedagógica se ha invertido?", options: ["On apprend d'abord la théorie à terre", "Le solo reste la priorité absolue", "Les moniteurs n'enseignent plus", "On apprend d'abord à embarquer, écouter, répartir les rôles — barrer seul viendra plus tard"], answer: 3, why: "«la priorité est inversée désormais : on apprend d'abord à embarquer, à écouter, à répartir les rôles — le solo viendra plus tard»" },
      { q: "¿Por qué la vela es «una escuela que no miente»?", options: ["Parce que le vent ne négocie pas, la mer ne répète pas, l'équipage ne triche pas", "Parce que les notes y sont faciles", "Parce qu'il n'y a pas d'examen final", "Parce que les moniteurs ne parlent jamais"], answer: 0, why: "«le vent ne négocie pas, la mer ne répète pas, l'équipage ne triche pas»" },
      { q: "¿Qué significa «un deporte que devuelve el vértigo en el buen sentido»?", options: ["Un sport qui donne le mal de mer", "Un sport qui sort les enfants de leurs habitudes, en bien : grand air, effort, confiance", "Un sport réservé aux futurs champions", "Un sport qui effraie les parents"], answer: 1, why: "«un sport qui redonne le vertige dans le bon sens» — los niños tímidos revelan reflejos que el aula ignoraba" },
    ],
    discuss: [
      { it: "La mer doit-elle s'apprendre à l'école, comme la natation ?", es: "¿Debe aprenderse el mar en la escuela, como la natación?" },
      { it: "«Le vent ne négocie pas» : qu'est-ce que la nature nous apprend que la salle de classe ne peut pas ?", es: "«El viento no negocia»: ¿qué nos enseña la naturaleza que el aula no puede?" },
    ],
  },

  /* ═══ C1 · 15 — Santé · Troyes ═══ */
  {
    id: "fr-news-c1-15", cat: "salute", level: "C1", place: "Troyes", minutes: 5,
    title: "À l'hôpital de Troyes, la maladie s'écrit",
    titleEs: "En el hospital de Troyes, la enfermedad se escribe",
    lead: {
      it: "Chaque semaine, une salle de l'hôpital de Troyes se transforme en atelier d'écriture : des patients y mettent leur maladie en mots, guidés par une écrivaine publique. La médecine narrative, venue des facultés américaines, est passée par la petite porte des services.",
      es: "Cada semana, una sala del hospital de Troyes se transforma en taller de escritura: pacientes ponen allí su enfermedad en palabras, guiados por una escritora pública. La medicina narrativa, llegada de las facultades americanas, entró por la puerta pequeña de los servicios.",
    },
    paragraphs: [
      { it: "L'idée dérange d'abord, tant l'hôpital parle chiffres : tension, taux, courbes. L'atelier demande autre chose — écrire ce que la maladie fait au quotidien, à la troisième personne si la première fait trop mal. Les textes ne sont pas notés ; ils sont lus à voix haute, s'ils veulent bien l'être. Certains patients reviennent chaque mois depuis deux ans, comme on revient chez un médecin qui écoute.",
      es: "La idea molesta al principio, tan acostumbrado está el hospital a hablar en cifras: tensión, niveles, curvas. El taller pide otra cosa — escribir lo que la enfermedad hace al día a día, en tercera persona si la primera duele demasiado. Los textos no se califican; se leen en voz alta, si sus autores quieren. Algunos pacientes vuelven cada mes desde hace dos años, como se vuelve a un médico que escucha." },
      { it: "La démarche est née d'un constat clinique : les patients décrivent souvent leur maladie comme une histoire sans narrateur, un récit qui leur arrive. Le service de médecine interne a donc invité une écrivaine, puis formé des soignants aux ateliers. Le protocole exigeait que chaque séance fût encadrée par un soignant, que la parole écrite ne fût jamais confondue avec un dossier médical, et que personne ne fût forcé de relire son texte.",
      es: "El planteamiento nació de una constatación clínica: los pacientes suelen describir su enfermedad como una historia sin narrador, un relato que les sucede. El servicio de medicina interna invitó entonces a una escritora y luego formó a personal sanitario en los talleres. El protocolo exigía que cada sesión estuviese supervisada por personal sanitario, que la palabra escrita nunca se confundiese con un expediente médico y que nadie fuese obligado a releer su texto." },
      { it: "Les effets observés sont discrets mais réels, disent les équipes : une meilleure préparation des consultations — le patient arrive avec sa page, le médecin gagne un quart d'heure —, un apaisement dans les soins longs, et parfois des révélations que l'entretien clinique n'avait pas obtenues. Étienne Charmet, interniste, cite une patiente : « J'ai compris ma douleur le jour où j'ai pu la décrire à quelqu'un qui ne la soignait pas. »",
      es: "Los efectos observados son discretos pero reales, dicen los equipos: una mejor preparación de las consultas — el paciente llega con su página, el médico gana un cuarto de hora —, una calma en los cuidados prolongados y, a veces, revelaciones que la entrevista clínica no había obtenido. Étienne Charmet, internista, cita a una paciente: «Entendí mi dolor el día en que pude describírselo a alguien que no lo curaba.»" },
      { it: "Les sceptiques existent, et leur argument mérite d'être entendu : le temps soignant manque déjà ; l'écriture n'est pas un traitement ; et l'on ne saurait exiger des malades un travail littéraire sur leur propre souffrance. Les réponses sont prudentes : l'atelier ne remplace rien, il coûte peu, et nul n'y est envoyé d'office. La littérature est proposée comme on propose une promenade — à ceux qui peuvent marcher.",
      es: "Los escépticos existen, y su argumento merece ser escuchado: falta tiempo sanitario; la escritura no es un tratamiento; y no se les puede exigir a los enfermos un trabajo literario sobre su propio sufrimiento. Las respuestas son prudentes: el taller no sustituye nada, cuesta poco y nadie es enviado allí de oficio. La literatura se propone como se propone un paseo — a quienes pueden caminar." },
      { it: "Étienne Charmet conclut par une distinction que les facultés commencent à enseigner : « La médecine classique demande : où avez-vous mal ? La médecine narrative demande : que vous arrive-t-il ? La première soigne une lésion ; la seconde recoud une vie autour d'elle. Nous n'écrivons pas pour guérir — nous écrivons pour que le patient reste l'auteur de ce qui lui arrive. » L'atelier de Troyes, lui, prépare déjà un recueil anonyme, pour les familles.",
      es: "Étienne Charmet concluye con una distinción que las facultades empiezan a enseñar: «La medicina clásica pregunta: ¿dónde le duele? La medicina narrativa pregunta: ¿qué le está pasando? La primera cura una lesión; la segunda cose una vida a su alrededor. No escribimos para curar — escribimos para que el paciente siga siendo el autor de lo que le pasa.» El taller de Troyes, por su parte, ya prepara una recopilación anónima, para las familias." },
    ],
    words: [
      { it: "un atelier d'écriture", es: "un taller de escritura" },
      { it: "clinique / un constat clinique", es: "clínico" },
      { it: "un soignant / des soignants", es: "personal sanitario", note: "participio de «soigner» (cuidar) usado como sustantivo" },
      { it: "un récit", es: "un relato" },
      { it: "une consultation / des consultations", es: "una consulta" },
      { it: "une lésion", es: "una lesión" },
    ],
    questions: [
      { q: "¿Qué se pide en el taller de escritura?", options: ["Remplir des formulaires médicaux", "Garder le silence", "Chanter pour se détendre", "Écrire ce que la maladie fait au quotidien, à la troisième personne si la première fait trop mal"], answer: 3, why: "«écrire ce que la maladie fait au quotidien, à la troisième personne si la première fait trop mal»" },
      { q: "¿Qué exigía el protocolo de las sesiones?", options: ["Que chaque séance fût encadrée par un soignant, et que personne ne fût forcé de relire son texte", "Que les textes soient publiés", "Que les médecins écrivent aussi", "Que l'atelier ait lieu la nuit"], answer: 0, why: "«Le protocole exigeait que chaque séance fût encadrée par un soignant, que la parole écrite ne fût jamais confondue avec un dossier médical, et que personne ne fût forcé de relire son texte»" },
      { q: "¿Por qué el médico gana «un cuarto de hora» en las consultas?", options: ["Parce que la consultation est raccourcie par la loi", "Parce que le patient arrive avec sa page : sa maladie est déjà organisée en mots", "Parce que l'atelier remplace la consultation", "Parce que les médecins lisent plus vite"], answer: 1, why: "«le patient arrive avec sa page, le médecin gagne un quart d'heure»" },
      { q: "¿Qué diferencia hay entre las dos preguntas finales?", options: ["Aucune : ce sont les mêmes questions", "La première est plus polie que la seconde", "«Où avez-vous mal ?» soigne une lésion ; «que vous arrive-t-il ?» recoud une vie autour d'elle", "La deuxième remplace la première dans tous les cas"], answer: 2, why: "«La médecine classique demande : où avez-vous mal ? La médecine narrative demande : que vous arrive-t-il ? La première soigne une lésion ; la seconde recoud une vie autour d'elle»" },
    ],
    discuss: [
      { it: "«Rester l'auteur de ce qui lui arrive» : pourquoi est-ce important pour un patient ?", es: "«Seguir siendo el autor de lo que le pasa»: ¿por qué es importante para un paciente?" },
      { it: "Écririez-vous votre maladie ? À la première ou à la troisième personne ?", es: "¿Escribirías tu enfermedad? ¿En primera o en tercera persona?" },
    ],
  },

];
