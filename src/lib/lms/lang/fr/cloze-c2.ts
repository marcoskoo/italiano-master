import type { CbClozeText } from "../../cambridge";

/* ═══ FR C2 · Cloze readings — 3 por unidad (inferencia léxica) ══════
   Metodología v9.12: el texto en francés lleva marcadores {1} {2}, etc.
   que el reproductor convierte en huecos; el estudiante deduce la
   palabra por el contexto. Campos `.it` = français de France (lengua de
   estudio), `.es` = español. Escenarios C2: atelier d'écriture du
   Quartier Latin, Maison de la Poésie, café-théâtre du Point Virgule,
   club de lecture de Lyon, Sommet de la Francophonie, La Fémis,
   meetings municipaux, maisons d'édition de Saint-Germain, lektorat,
   archives orales de l'Aveyron, ligue d'improvisation, remise des prix
   du Goncourt au Drouant. Français de France, vouvoiement, tipografía
   con espacio antes de ? ! : ; y guillemets « ».                   */

export const FR_CLOZE_C2: Record<string, CbClozeText[]> = {
  "fr-cu-c2-01": [
    {
      id: "cz-fr-c2-01-1", title: "L'heure de couper", titleEs: "La hora de cortar", minutes: 3,
      paragraphs: [
        { it: "Dans l'arrière-salle de la librairie du Quartier Latin, la dernière séance de l'atelier d'écriture touche à sa fin. Camille rend les textes de l'année : chaque page porte ses {1} bleues — ici une coupe, là un adjectif encerclé. « Ton texte est bon, répète-t-elle, mais il n'est pas encore à toi : trop d'adjectifs, trop de « je pense que ». » La consigne de la soirée tombe comme une évidence : l'heure est venue de {2}.", es: "En la trastienda de la librería del Barrio Latino, la última sesión del taller de escritura llega a su fin. Camille devuelve los textos del año: cada página lleva sus tachaduras azules — aquí un corte, allá un adjetivo encerrado en un círculo. «Tu texto es bueno, repite, pero todavía no es tuyo: demasiados adjetivos, demasiados « je pense que ».» La consigna de la noche cae como una evidencia: ha llegado la hora de cortar." },
        { it: "Léo, lui, relit son titre : « De la lenteur », tout court, comme Montaigne titrait « De l'amitié ». La préposition, explique-t-il, est déjà un {3} : elle annonce ce que le texte explorera. Sur la table, le café est froid depuis une heure ; personne ne s'en plaint. Avant de partir, une participante lit sa phrase de clôture, une {4} sans verbe : « L'essai, une conversation ; le traité, un interrogatoire. » Camille hoche la tête : la {5} se décide dans le final, et cette phrase respirera longtemps après la séance.", es: "Léo, por su parte, relee su título: «De la lenteur», a secas, como Montaigne titulaba «De l'amitié». La preposición, explica, ya es un programa: anuncia lo que el texto explorará. Sobre la mesa, el café está frío desde hace una hora; nadie se queja. Antes de irse, una participante lee su frase de cierre, una elipsis sin verbo: «El ensayo, una conversación; el tratado, un interrogatorio.» Camille asiente: la cadencia se decide en el final, y esa frase respirará mucho después de la sesión." },
      ],
      gaps: [
        { options: ["dorures", "ratures", "signatures"], answer: 1, why: "«Ici une coupe, là un adjectif encerclé»: las marcas azules del editor son las tachaduras (ratures)." },
        { options: ["couper", "décorer", "publier"], answer: 0, why: "«Trop d'adjectifs» y «ici une coupe»: el gesto del taller es cortar." },
        { options: ["paradoxe", "proverbe", "programme"], answer: 2, why: "«Elle annonce ce que le texte explorera»: la preposición del título ya es un programa." },
        { options: ["épigraphe", "ellipse", "épitaphe"], answer: 1, why: "«Une phrase sans verbe»: la elipsis calla el verbo y la frase respira." },
        { options: ["coïncidence", "confidence", "cadence"], answer: 2, why: "«Cette phrase respirera longtemps»: el ritmo final del párrafo es la cadencia." },
      ],
    },
    {
      id: "cz-fr-c2-01-2", title: "La page un", titleEs: "La página uno", minutes: 3,
      paragraphs: [
        { it: "Le lendemain, à la même table, chacun attaque sa page un. Camille rappelle les trois figures du genre : l'{1}, qui place le prédicat en tête — « Rare est l'essai qui ressemble à son auteur » ; l'ellipse, qui {2} le verbe quand la phrase se suffit ; le chiasme, enfin, ce miroir croisé où les mots s'échangent leurs places.", es: "Al día siguiente, en la misma mesa, cada uno ataca su página uno. Camille recuerda las tres figuras del género: la inversión, que coloca el predicado al principio — «Raro es el ensayo que se parece a su autor»; la elipsis, que calla el verbo cuando la frase se basta sola; y el quiasmo, ese espejo cruzado donde las palabras se intercambian sus lugares." },
        { it: "Un participant tente le grand écart : « Peut-être faudrait-il {3} par la fin », propose-t-il, et sa formule porte déjà l'inversion. Camille sourit, corrige un « à mon avis » tombé dans le premier paragraphe — le texte est signé, l'{4} y est déjà, inutile de demander la permission. Sur la page blanche, la phrase finale attend son tour : la plus courte du texte, sans verbe si possible, parce que la page un se juge à sa dernière {5}.", es: "Un participante intenta el gran salto: «Quizá habría que empezar por el final», propone, y su fórmula ya lleva dentro la inversión. Camille sonríe, corrige un «à mon avis» caído en el primer párrafo — el texto está firmado, la opinión ya está dentro, inútil pedir permiso. Sobre la página en blanco, la frase final espera su turno: la más corta del texto, sin verbo si es posible, porque la página uno se juzga por su última línea." },
      ],
      gaps: [
        { options: ["inspiration", "inversion", "interrogation"], answer: 1, why: "«Qui place le prédicat en tête» con el ejemplo «Rare est l'essai»: la inversión enfática." },
        { options: ["tord", "tait", "tache"], answer: 1, why: "«Quand la phrase se suffit»: la elipsis calla (taire) el verbo." },
        { options: ["commencer", "finir", "traduire"], answer: 0, why: "«Par la fin» implica partir de algo: comenzar por el final." },
        { options: ["essai", "avis", "effort"], answer: 1, why: "Corrige «à mon avis»: el texto está firmado, la opinión (avis) ya está dentro." },
        { options: ["leçon", "liste", "ligne"], answer: 2, why: "«La plus courte du texte»: la página uno se juzga por su última línea." },
      ],
    },
    {
      id: "cz-fr-c2-01-3", title: "Montaigne en vitrine", titleEs: "Montaigne en el escaparate", minutes: 3,
      paragraphs: [
        { it: "Dans la vitrine de la librairie, les essais de l'année trônent entre deux piles : Montaigne ne quitte jamais l'étal. Le libraire raconte sa {1} aux visiteurs du samedi : les « Essais » parurent à Bordeaux en 1580, et leur auteur ne cessa de les retoucher jusqu'à sa mort — le genre naquit inachevé et le demeure. « Essais », à l'époque, voulait dire {2} : des tentatives de soi sur soi, jamais des traités.", es: "En el escaparate de la librería, los ensayos del año tronean entre dos pilas: Montaigne nunca abandona el mostrador. El librero cuenta su nacimiento a los visitantes del sábado: los «Essais» aparecieron en Burdeos en 1580, y su autor no dejó de retocarlos hasta su muerte — el género nació inacabado y así permanece. «Essais», en la época, quería decir tentativas: pruebas de sí sobre sí, jamás tratados." },
        { it: "Dans la tour du Périgord où il écrivait, Montaigne faisait du {3} une méthode et d'une question une devise : « Que sais-je ? » Après lui, la tradition ne s'est jamais interrompue : Pascal, Voltaire, Alain, Camus — même ironie, même {4} du traité et de ses grands systèmes. Le libraire conclut en tapant sur la couverture : « Si vous savez déjà ce que vous allez dire, ce n'est pas un essai. » La formule fait sourire la petite foule, et un étudiant la note mot pour mot dans son {5}.", es: "En la torre del Périgord donde escribía, Montaigne hizo de la duda un método y de una pregunta una divisa: «¿Qué sé?». Después de él, la tradición nunca se interrumpió: Pascal, Voltaire, Alain, Camus — misma ironía, mismo rechazo del tratado y de sus grandes sistemas. El librero concluye golpeando la cubierta: «Si ya sabéis lo que vais a decir, no es un ensayo.» La fórmula hace sonreír al pequeño gentío, y un estudiante la anota palabra por palabra en su cuaderno." },
      ],
      gaps: [
        { options: ["nausée", "naissance", "navigation"], answer: 1, why: "«Les Essais parurent en 1580»: lo que cuenta el librero es el nacimiento del género." },
        { options: ["tentatives", "tentations", "tensions"], answer: 0, why: "«Des tentatives de soi sur soi» lo define en la misma frase: ensayos = tentativas." },
        { options: ["docte", "défaite", "doute"], answer: 2, why: "«Une méthode» con «Que sais-je ?» como divisa: Montaigne hace de la duda un método." },
        { options: ["refus", "rêve", "résumé"], answer: 0, why: "«Même ironie» frente al tratado: la tradición comparte el rechazo del tratado." },
        { options: ["carafe", "carnet", "collier"], answer: 1, why: "El estudiante anota la fórmula palabra por palabra: en su cuaderno." },
      ],
    },
  ],

  "fr-cu-c2-02": [
    {
      id: "cz-fr-c2-02-1", title: "Compter avant de sentir", titleEs: "Contar antes de sentir", minutes: 3,
      paragraphs: [
        { it: "À la Maison de la Poésie, le séminaire ouvre sur une consigne sans appel : avant l'émotion, la métrique. Madame Dubois fait lire « Recueillement » de Baudelaire et exige qu'on {1} à voix haute. « Sois sage, ô ma Douleur, et tiens-toi plus tranquille » : douze syllabes, pas une de plus, avec une pause au {2} après « Douleur ».", es: "En la Maison de la Poésie, el seminario abre con una consigna sin apelación: antes que la emoción, la métrica. Madame Dubois hace leer «Recueillement» de Baudelaire y exige contar en voz alta. «Sé buena, oh mi Dolor, y estáte más tranquila»: doce sílabas, ni una más, con una pausa en el centro tras «Douleur»." },
        { it: "Deux hémistiches de six syllabes : c'est l'{3} classique, douze temps avec un souffle au centre. Thomas interroge : et chez Verlaine, lui qui voulait « de la musique avant toute {4} » ? Madame Dubois sourit : Verlaine dérègle, il fait boiter le vers, mais jamais il ne cesse de compter. La {5}, conclut-elle, n'est pas une prison : c'est l'instrument qui permet à l'émotion de se tenir droite.", es: "Dos hemistiquios de seis sílabas: es el alejandrino clásico, doce tiempos con un soplo en el centro. Thomas pregunta: ¿y en Verlaine, él que quería «de la música antes que nada»? Madame Dubois sonríe: Verlaine desajusta, hace cojear el verso, pero jamás deja de contar. La métrica, concluye, no es una prisión: es el instrumento que permite a la emoción mantenerse derecha." },
      ],
      gaps: [
        { options: ["comptons", "compte", "compter"], answer: 1, why: "«Exige qu'on»: exiger rige subjuntivo — y la consigna del seminario es contar en voz alta." },
        { options: ["début", "milieu", "hasard"], answer: 1, why: "«Deux hémistiches de six syllabes»: la pausa cae en el medio, tras la sexta sílaba." },
        { options: ["alexandrin", "almanach", "allitération"], answer: 0, why: "«Douze temps avec un souffle au centre»: el verso de doce sílabas es el alejandrino." },
        { options: ["chanson", "chance", "chose"], answer: 2, why: "La cita de Verlaine es «de la musique avant toute chose»: la palabra final es chose." },
        { options: ["magie", "métaphore", "métrique"], answer: 2, why: "«N'est pas une prison, c'est l'instrument»: la consigna de apertura la nombra — la métrique." },
      ],
    },
    {
      id: "cz-fr-c2-02-2", title: "Sous le pont Mirabeau", titleEs: "Bajo el puente Mirabeau", minutes: 3,
      paragraphs: [
        { it: "Le soir, le séminaire se penche sur Apollinaire. « Sous le pont Mirabeau coule la Seine et nos amours » : la chanson populaire tend la main au poème, et le {1} revient après chaque strophe, comme dans une berceuse. Madame Dubois fait remarquer la {2} du vers, qui épouse le mouvement de l'eau : la syntaxe coule, elle aussi, sans ponctuation qui l'arrête.", es: "Por la noche, el seminario se inclina sobre Apollinaire. «Bajo el puente Mirabeau fluye el Sena y nuestros amores»: la canción popular tiende la mano al poema, y el estribillo vuelve tras cada estrofa, como en una nana. Madame Dubois hace notar la fluidez del verso, que se amolda al movimiento del agua: la sintaxis fluye también, sin puntuación que la detenga." },
        { it: "Puis la question attendue tombe : pourquoi Verlaine préférait-il le vers impair ? Parce qu'il {3}, répond la professeure, et que cette boiterie touche le cœur mieux que la marche régulière. Elle cite « De la musique avant toute chose » comme un {4} du genre : la poésie française, de Baudelaire au slam, a toujours obéi à l'oreille avant d'obéir aux règles. En quittant la salle, un participant marmonne le vers d'Apollinaire sur le trottoir : la Seine coule encore, et les amours avec elle — tel est le pouvoir d'une {5} bien posée.", es: "Luego cae la pregunta esperada: ¿por qué prefería Verlaine el verso impar? Porque cojea, responde la profesora, y esa cojera toca el corazón mejor que la marcha regular. Cita «De la musique avant toute chose» como un credo del género: la poesía francesa, de Baudelaire al slam, siempre obedeció al oído antes que a las reglas. Al salir de la sala, un participante tararea el verso de Apollinaire en la acera: el Sena fluye todavía, y los amores con él — tal es el poder de una rima bien colocada." },
      ],
      gaps: [
        { options: ["refrain", "prélude", "proverbe"], answer: 0, why: "«Revient après chaque strophe, comme dans une berceuse»: lo que vuelve es el estribillo." },
        { options: ["fermeté", "fissure", "fluidité"], answer: 2, why: "«Qui épouse le mouvement de l'eau» y «coule sans ponctuation»: la fluidez del verso." },
        { options: ["boîte", "boite", "bout"], answer: 1, why: "«Cette boiterie touche le cœur»: el verso impar cojea (boiter) — verbo, no el sustantivo boîte." },
        { options: ["créance", "critère", "crédo"], answer: 2, why: "La cita de Verlaine como principio del género: un credo poético." },
        { options: ["rive", "rime", "rumeur"], answer: 1, why: "«Le pouvoir d'une chose bien posée» que hace volver la estrofa como el agua: la rima." },
      ],
    },
    {
      id: "cz-fr-c2-02-3", title: "Le slam prend la parole", titleEs: "El slam toma la palabra", minutes: 3,
      paragraphs: [
        { it: "Dernière séance du séminaire : le slam entre par la grande porte. Grand Corps Malade, raconte Madame Dubois, a remis la {1} au centre du jeu : son vers se compte, se martèle, se respire — souvent proche de l'alexandrin, mais libre de s'en échapper. Le slammeur écrit pour sa voix d'abord : la page n'est que la {2} de la scène.", es: "Última sesión del seminario: el slam entra por la gran puerta. Grand Corps Malade, cuenta Madame Dubois, devolvió la voz al centro del juego: su verso se cuenta, se martillea, se respira — a menudo cercano al alejandrino, pero libre de escaparse de él. El slammer escribe primero para su voz: la página no es más que la partitura de la escena." },
        { it: "Un participant ose la comparaison : Baudelaire hier, le slam aujourd'hui — même {3}, même exigence de rythme ? La professeure nuance : la rime au slam se sert au corps, elle s'appuie sur le souffle et la {4} ; mais la leçon de Verlaine reste entière — le vers impair boite, le slam boite aussi, et c'est sa grâce. La séance se clôt sur une lecture à voix haute, sans micro : douze syllabes, une césure, un souffle — la plus vieille {5} du vers français n'a pas pris une ride.", es: "Un participante se atreve con la comparación: Baudelaire ayer, el slam hoy — ¿el mismo oído, la misma exigencia de ritmo? La profesora matiza: la rima del slam se sirve al cuerpo, se apoya en el aliento y la escansión; pero la lección de Verlaine sigue entera — el verso impar cojea, el slam cojea también, y esa es su gracia. La sesión se cierra con una lectura en voz alta, sin micrófono: doce sílabas, una cesura, un soplo — la más vieja receta del verso francés no ha cogido ni una arruga." },
      ],
      gaps: [
        { options: ["voix", "voie", "vase"], answer: 0, why: "«Son vers se respire» y el slammer «écrit pour sa voix»: lo puesto en el centro del juego es la voz." },
        { options: ["peinture", "partition", "prédiction"], answer: 1, why: "«Le slammeur écrit pour sa voix d'abord»: la página es la partitura de lo que se dirá en escena." },
        { options: ["oreille", "horreur", "erreur"], answer: 0, why: "«Même exigence de rythme» y «obéir à l'oreille»: el oído poético común a Baudelaire y al slam." },
        { options: ["science", "silence", "scansion"], answer: 2, why: "«La rime se sert au corps, s'appuie sur le souffle»: el apoyo técnico es la escansión." },
        { options: ["redevance", "recette", "rivalité"], answer: 1, why: "«Douze syllabes, une césure, un souffle»: la vieja fórmula del verso, la receta que no envejece." },
      ],
    },
  ],

  "fr-cu-c2-03": [
    {
      id: "cz-fr-c2-03-1", title: "L'horlogère du Point Virgule", titleEs: "La relojera del Point Virgule", minutes: 3,
      paragraphs: [
        { it: "Au café-théâtre du Point Virgule, dans le Marais, Inès démonte les blagues comme une horlogère : elle ouvre la phrase, montre l'engrenage, referme. Ce soir, un classique du répertoire passe sur la table : « Un homme entre dans un café. {1} ! » Le public rit d'avance — tout est dans le {2} sens du mot « café », le bar et la boisson.", es: "En el café-teatro del Point Virgule, en pleno Marais, Inès desmonta los chistes como una relojera: abre la frase, muestra el engranaje, vuelve a cerrar. Esta noche, un clásico del repertorio pasa por la mesa: «Un hombre entra en un café. ¡Plouf!». El público ríe por adelantado — todo está en el doble sentido de la palabra «café», el bar y la bebida." },
        { it: "Léo prend des notes pour son premier one-man-show. La consigne d'Inès tient en trois gestes : monter la phrase, marquer la {3}, laisser tomber la chute. La pause avant le {4} est sacrée : demi-seconde de silence, et la salle tombe avec la phrase. « Le rire est une affaire de {5}, pas de mots », conclut-elle en remontant le ressort d'une blague que plus personne n'osait réparer.", es: "Léo toma notas para su primer one-man-show. La consigna de Inès cabe en tres gestos: subir la frase, marcar la pausa, dejar caer el remate. La pausa antes del remate es sagrada: medio segundo de silencio, y la sala cae con la frase. «La risa es un asunto de ritmo, no de palabras», concluye mientras le da cuerda a un chiste que ya nadie se atrevía a reparar." },
      ],
      gaps: [
        { options: ["Pan", "Plouf", "Paf"], answer: 1, why: "El hombre cae dentro de la bebida: Plouf es el chapoteo, la onomatopeya del agua." },
        { options: ["double", "simple", "sage"], answer: 0, why: "«Le bar et la boisson»: una palabra con dos sentidos es el doble sentido." },
        { options: ["pose", "pouce", "pause"], answer: 2, why: "«Demi-seconde de silence»: la pausa antes de la caída del remate." },
        { options: ["charte", "chute", "chaume"], answer: 1, why: "«Laisser tomber la chute»: la caída del chiste es la chute, el remate." },
        { options: ["rythme", "rime", "rêve"], answer: 0, why: "«Monter, marquer la pause, laisser tomber»: el chiste es puro ritmo, no palabras sueltas." },
      ],
    },
    {
      id: "cz-fr-c2-03-2", title: "Pas mal du tout", titleEs: "Nada mal del todo", minutes: 3,
      paragraphs: [
        { it: "Deuxième séance : la litote. Inès écrit au feutre « Il n'est pas interdit de penser que » et demande ce que ça veut dire. Un silence : en français, cette {1} dit exactement le contraire de ce qu'elle affirme — elle suggère une évidence que personne n'osera contester. La {2}, c'est l'art de dire moins pour faire entendre plus : « pas mal du tout » est un éloge, « il n'est pas bête » presque une déclaration.", es: "Segunda sesión: la litote. Inès escribe con rotulador «Il n'est pas interdit de penser que» y pregunta qué significa. Un silencio: en francés, esta fórmula dice exactamente lo contrario de lo que afirma — sugiere una evidencia que nadie osará discutir. La litote es el arte de decir menos para hacer oír más: «pas mal du tout» es un elogio, «il n'est pas bête» casi una declaración." },
        { it: "Le tour de l'antiphrase arrive ensuite : « Quel temps magnifique ! », lance Inès en désignant la pluie par la vitre. Le second degré, explique-t-elle, est un {3} de lecture : l'auteur fait confiance à un public capable d'entendre le contraire de ce qui s'écrit. Le public français le préfère à la blague directe ; l'{4} aussi, qui exagère à dessein pour qu'on comprenne le manque. À la sortie, Léo résume la leçon dans son carnet : ici, l'éloge {5} toujours — le compliment exagéré sonne faux, le moindre bien dit sonne juste.", es: "Llega después el turno de la antífrasis: «¡Qué tiempo tan magnífico!», lanza Inès señalando la lluvia tras el cristal. El second degré, explica, es un pacto de lectura: el autor confía en un público capaz de oír lo contrario de lo que se escribe. El público francés lo prefiere a la broma directa; también la hipérbole, que exagera a propósito para que se entienda lo que falta. A la salida, Léo resume la lección en su cuaderno: aquí el elogio siempre minora — el cumplido exagerado suena falso, el menor bien dicho suena justo." },
      ],
      gaps: [
        { options: ["forme", "formule", "fortune"], answer: 1, why: "«Il n'est pas interdit de penser que» escrita en la pizarra: es una fórmula fija." },
        { options: ["liste", "ligne", "litote"], answer: 2, why: "«L'art de dire moins pour faire entendre plus»: la definición exacta de la litote." },
        { options: ["pente", "pacte", "pactole"], answer: 1, why: "«Fait confiance à un public capable d'entendre le contraire»: el second degré es un pacto de lectura." },
        { options: ["hyperbole", "hypermarché", "hymne"], answer: 0, why: "«Qui exagère à dessein pour qu'on comprenne le manque»: la figura que exagera es la hipérbole." },
        { options: ["minore", "maximise", "mutile"], answer: 0, why: "«Le moindre bien dit sonne juste»: el elogio francés resta, minora — la litote." },
      ],
    },
    {
      id: "cz-fr-c2-03-3", title: "Rire à la française", titleEs: "Reír a la francesa", minutes: 3,
      paragraphs: [
        { it: "Le cours d'histoire du rire se tient au bar, avant l'ouverture. Inès raconte Desproges et Devos : deux manières françaises de faire rire, la {1} noire de l'un, les mots-valises de l'autre. Le one-man-show, dit-elle, a ses lois : ne jamais rire de ses propres {2}, commencer par soi-même, finir par la salle.", es: "La clase de historia de la risa se celebra en el bar, antes de la apertura. Inès cuenta a Desproges y Devos: dos maneras francesas de hacer reír, la ironía negra del uno, las palabras-maleta del otro. El one-man-show, dice, tiene sus leyes: no reírse jamás de los propios chistes, empezar por uno mismo, terminar con la sala." },
        { it: "Le public du Point Virgule connaît la {3} : il vient chercher le second degré comme d'autres vont chercher la vérité. Un spectateur demande la différence avec l'humour espagnol ; Inès répond avec une image : l'Espagne exagère, la France {4}. Le rire jaune, ajoute-t-elle, c'est celui qu'on force quand la blague fait mal — il en faut, aussi, dans une carrière. Le soir même, Léo teste son premier passage : trois phrases, un silence, et la {5} qui tombe — le rire, enfin, tombe avec elle, tout seul.", es: "El público del Point Virgule conoce la música: viene a buscar el second degré como otros van a buscar la verdad. Un espectador pregunta por la diferencia con el humor español; Inès responde con una imagen: España exagera, Francia atenúa. La risa amarilla, añade, es la que se fuerza cuando la broma duele — también hace falta en este oficio. Esa misma noche, Léo estrena su primer pasaje: tres frases, un silencio y el remate que cae — la risa, al fin, cae con ella, sola." },
      ],
      gaps: [
        { options: ["histoire", "ironie", "ivresse"], answer: 1, why: "Desproges y su humor negro: la ironie noire del cómico." },
        { options: ["blagues", "bottes", "brouettes"], answer: 0, why: "La ley del comediante: no reírse de sus propios chistes." },
        { options: ["mathématique", "mosaïque", "musique"], answer: 2, why: "«Connaître la musique» es la expresión: el público ya sabe cómo funciona el juego." },
        { options: ["attise", "atténue", "attelle"], answer: 1, why: "Contraste con «l'Espagne exagère»: Francia resta, atenúa — la litote frente a la hipérbole." },
        { options: ["chute", "chaise", "chose"], answer: 0, why: "«Trois phrases, un silence, et la chute qui tombe»: el remate final del chiste." },
      ],
    },
  ],

  "fr-cu-c2-04": [
    {
      id: "cz-fr-c2-04-1", title: "Le club des deux romans", titleEs: "El club de las dos novelas", minutes: 3,
      paragraphs: [
        { it: "Dans la librairie de Lyon, le club de lecture s'installe en cercle : ce soir, « L'Étranger » et « Les Années ». Camille, la libraire, ouvre le débat par une question piège : qui parle quand personne ne cite ? Inès cite la première phrase de Camus — « Aujourd'hui, maman est morte » — et parle de {1} : le narrateur ne s'explique pas, il regarde. Un membre du club proteste : cette phrase est froide. Justement, répond Camille : la {2} ne vient pas des adjectifs, elle vient de l'absence de commentaire.", es: "En la librería de Lyon, el club de lectura se coloca en círculo: esta noche toca «El extranjero» y «Los años». Camille, la librera, abre el debate con una pregunta trampa: ¿quién habla cuando nadie cita? Inès cita la primera frase de Camus — «Hoy, mamá ha muerto» — y habla de distancia: el narrador no se explica, mira. Un miembro del club protesta: esta frase es fría. Justamente, responde Camille: la frialdad no viene de los adjetivos, viene de la ausencia de comentario." },
        { it: "Puis vient Ernaux. Inès défend « l'écriture plate » : des phrases sans ornement, des objets et des dates qui travaillent comme des {3}. « Cet été-là, on portait des robes claires » : le « on » collectif fait d'une vie un temps entier. Le débat s'échauffe sur ce mot « on » : narrateur ou personne ? Camille tranche avec le vocabulaire du séminaire : c'est une écriture de la {4} interne, mais le point de vue est celui de tous. À la fermeture, une lectrice note dans son agenda la prochaine séance : même heure, même {5} — et deux autres voix à écouter.", es: "Luego llega Ernaux. Inès defiende «la escritura plana»: frases sin ornamento, objetos y fechas que trabajan como fotografías. «Aquel verano, se llevaban vestidos claros»: el «on» colectivo hace de una vida un tiempo entero. El debate se calienta con esa palabra «on»: ¿narrador o nadie? Camille zanja con el vocabulario del seminario: es una escritura de focalización interna, pero el punto de vista es el de todos. Al cierre, una lectora anota en su agenda la próxima sesión: misma hora, misma sala — y otras dos voces que escuchar." },
      ],
      gaps: [
        { options: ["distorsion", "distribution", "distance"], answer: 2, why: "«Le narrateur ne s'explique pas, il regarde»: el efecto de la frase de Camus es la distancia." },
        { options: ["froideur", "chaleur", "couleur"], answer: 0, why: "«Cette phrase est froide. Justement»: la calidad señalada es la frialdad, y no nace de los adjetivos." },
        { options: ["photographies", "philosophies", "phrases"], answer: 0, why: "«Des objets et des dates qui travaillent»: funcionan como fotografías del tiempo." },
        { options: ["fiction", "fabrication", "focalisation"], answer: 2, why: "«Le vocabulaire du séminaire» y «le point de vue»: el término técnico es la focalización." },
        { options: ["scène", "salle", "science"], answer: 1, why: "«Prochaine séance, même heure»: la reunión vuelve a la misma sala." },
      ],
    },
    {
      id: "cz-fr-c2-04-2", title: "La phrase à deux voix", titleEs: "La frase a dos voces", minutes: 3,
      paragraphs: [
        { it: "Camille distribue une fiche : « Elle attendait. Pourquoi tardait-il encore ? » Deux phrases, dit-elle, et deux {1} : le temps du verbe appartient au narrateur, la question appartient au personnage. C'est le discours indirect libre : la conscience du héros {2} dans la phrase du roman, sans guillemets ni verbe introducteur.", es: "Camille reparte una ficha: «Ella esperaba. ¿Por qué tardaba todavía?». Dos frases, dice, y dos voces: el tiempo del verbo pertenece al narrador, la pregunta pertenece al personaje. Es el estilo indirecto libre: la conciencia del héroe flota en la frase de la novela, sin comillas ni verbo introductor." },
        { it: "La fiche propose un test : ajoutez « se demanda-t-elle » à la fin. Si la phrase s'améliore, ce n'était pas du indirect libre ; si elle {3}, c'en était. Le club s'exécute, rit, comprend. Camille enchaîne sur la {4} : qui voit l'histoire ? Le narrateur omniscient, le personnage, ou la caméra ? Trois choix, trois romans différents — et le lecteur, lui, ne voit jamais la même scène selon celui qui tient la {5}.", es: "La ficha propone una prueba: añadid «se demanda-t-elle» al final. Si la frase mejora, no era indirecto libre; si se estropea, lo era. El club lo ejecuta, ríe, entiende. Camille encadena con la focalización: ¿quién ve la historia? ¿El narrador omnisciente, el personaje o la cámara? Tres elecciones, tres novelas distintas — y el lector nunca ve la misma escena según quién sostenga la lámpara." },
      ],
      gaps: [
        { options: ["voix", "voies", "voûtes"], answer: 0, why: "«Le temps appartient au narrateur, la question au personnage»: dos voces en la misma frase." },
        { options: ["fuit", "fond", "flotte"], answer: 2, why: "«Sans guillemets ni verbe introducteur»: la conciencia flota dentro de la frase del narrador." },
        { options: ["s'améliore", "s'anime", "s'abîme"], answer: 2, why: "Contraste con «si la phrase s'améliore»: el otro caso es que la frase se estropea (s'abîme)." },
        { options: ["focalisation", "citation", "conclusion"], answer: 0, why: "«Qui voit l'histoire ?»: la pregunta técnica del seminario es la focalización." },
        { options: ["plume", "lampe", "porte"], answer: 1, why: "«Qui voit l'histoire» y «la caméra»: según quién sostenga la lámpara cambia lo iluminado." },
      ],
    },
    {
      id: "cz-fr-c2-04-3", title: "Le Nobel des inconnues", titleEs: "El Nobel de las desconocidas", minutes: 3,
      paragraphs: [
        { it: "La séance suivante tombe la semaine d'une nouvelle : Annie Ernaux reçoit le prix Nobel de littérature. Le club de Lyon se sent devancé : il lisait « Les Années » avant tout le monde. Camille rappelle le {1} : des décennies de France ordinaire racontées par les objets, les chansons, les robes — la mémoire d'une génération entière, sans « je » dominant. Le {2} suédois a salué « le courage et l'acuité clinique » de son œuvre — deux mots qui décrivent une écriture qui ne s'apitoie jamais.", es: "La sesión siguiente cae la semana de una noticia: Annie Ernaux recibe el premio Nobel de literatura. El club de Lyon se siente adelantado: leía «Los años» antes que nadie. Camille recuerda el proyecto: décadas de Francia corriente contadas por los objetos, las canciones, los vestidos — la memoria de una generación entera, sin un «yo» dominante. El jurado sueco saludó «el coraje y la agudeza clínica» de su obra — dos palabras que describen una escritura que jamás se compadece de sí misma." },
        { it: "Inès relit une page à voix haute : les photos de famille y servent de {3}, chaque décennie arrive avec sa voiture, son président, sa chanson à la radio. Une lectrice demande pourquoi on l'appelle « plate », cette écriture ; Camille corrige : plate, oui, sans relief d'adjectifs — et pourtant chaque ligne, dit-elle, {4}. À la caisse, en partant, un membre achète deux exemplaires du roman : l'un pour lui, l'autre pour sa mère, « parce que c'est sa vie, aussi, dans ces {5} ».", es: "Inès relee una página en voz alta: las fotos de familia sirven allí de referencia, cada década llega con su coche, su presidente, su canción en la radio. Una lectora pregunta por qué llaman «plana» a esta escritura; Camille corrige: plana, sí, sin relieve de adjetivos — y sin embargo cada línea, dice, excava. En la caja, al marcharse, un miembro compra dos ejemplares de la novela: uno para él, otro para su madre, «porque su vida también está en estas páginas»." },
      ],
      gaps: [
        { options: ["projet", "profit", "problème"], answer: 0, why: "«Des décennies racontées par les objets»: el plan de la obra es el proyecto de Ernaux." },
        { options: ["journal", "jury", "bijou"], answer: 1, why: "«Suédois» y el fallo del premio: quien premia es el jurado." },
        { options: ["rappels", "rapports", "repères"], answer: 2, why: "«Chaque décennie arrive avec sa voiture, sa chanson»: las fotos marcan los hitos, los repères." },
        { options: ["creuse", "comble", "caresse"], answer: 0, why: "«Sans relief d'adjectifs, et pourtant»: la escritura plana excava — cada línea creuse." },
        { options: ["phrases", "parcelles", "pages"], answer: 2, why: "«Deux exemplaires du roman, l'un pour sa mère»: la vida de la madre también está en esas páginas." },
      ],
    },
  ],

  "fr-cu-c2-05": [
    {
      id: "cz-fr-c2-05-1", title: "La virgule disputée", titleEs: "La coma discutida", minutes: 3,
      paragraphs: [
        { it: "Salle de négociation, dix-sept heures : la déclaration conjointe du sommet est encore au point sur le chapitre trois. Le délégué sénégalais, M. Ndiaye, défend une {1} qui change le sens de tout le paragraphe ; la délégation voisine la juge superflue. Madame Dubois tranche avec le sourire : « La virgule, c'est déjà la {2}. »", es: "Sala de negociación, las diecisiete: la declaración conjunta de la cumbre sigue en el capítulo tres. El delegado senegalés, M. Ndiaye, defiende una coma que cambia el sentido de todo el párrafo; la delegación vecina la considera superflua. Madame Dubois zanja con una sonrisa: «La coma ya es una posición.»" },
        { it: "Le chapitre avance à coups de conditionnel : « Le gouvernement serait disposé à examiner cette hypothèse » — personne n'a promis, tout le monde a laissé la porte {3}. Un jeune rédacteur s'excuse d'avoir écrit « nous refusons » ; Madame Dubois raye le mot d'un trait et note : « Nous ne saurions {4}. » Même refus, mais en gants blancs — le sommet se joue sur tout ce qui ne se dit pas. À dix-neuf heures, le paragraphe signable existe enfin : chaque délégation pourra le relire chez elle sans {5} sa politique.", es: "El capítulo avanza a golpe de condicional: «El gobierno estaría dispuesto a examinar esta hipótesis» — nadie ha prometido, todos han dejado la puerta abierta. Un joven redactor se disculpa por haber escrito «nous refusons»; Madame Dubois tacha la palabra de un trazo y anota: «Nous ne saurions souscrire.» El mismo rechazo, pero con guantes blancos — la cumbre se juega en todo lo que no se dice. A las diecinueve, el párrafo firmable existe al fin: cada delegación podrá releerlo en casa sin desmentir su política." },
      ],
      gaps: [
        { options: ["verse", "vigueur", "virgule"], answer: 2, why: "El título la nombra y «qui change le sens de tout le paragraphe»: la coma discutida." },
        { options: ["position", "possession", "profession"], answer: 0, why: "La frase de la embajadora: «La virgule, c'est déjà la position» — hasta la puntuación toma partido." },
        { options: ["fermée", "ouverte", "cassée"], answer: 1, why: "«Personne n'a promis»: el condicional deja la puerta abierta." },
        { options: ["souscrire", "souffrir", "souligner"], answer: 0, why: "Reemplaza a «nous refusons» con guantes blancos: la fórmula ritual «ne saurions souscrire»." },
        { options: ["décrire", "déplacer", "démentir"], answer: 2, why: "El párrafo firmable debe poder leerse en casa sin desmentir la política propia." },
      ],
    },
    {
      id: "cz-fr-c2-05-2", title: "Le paragraphe signable", titleEs: "El párrafo firmable", minutes: 3,
      paragraphs: [
        { it: "Deuxième jour du sommet : l'art du communiqué s'apprend à la table même. Le paragraphe signable commence par un {1} collectif — « les participants », jamais « la France » toute seule —, se poursuit en verbes de processus (« examiner », « poursuivre », « prendre note ») et se termine par une porte laissée ouverte. Les verbes qui engagent — « décider », « s'engager à » — ne traversent la salle que si les deux {2} les veulent.", es: "Segundo día de la cumbre: el arte del comunicado se aprende en la propia mesa. El párrafo firmable empieza por un sujeto colectivo — «los participantes», jamás «Francia» sola —, sigue con verbos de proceso («examinar», «proseguir», «tomar nota») y termina con una puerta dejada abierta. Los verbos que comprometen — «decidir», «comprometerse a» — solo cruzan la sala si las dos delegaciones los quieren." },
        { it: "Madame Dubois relit la version du soir avec une lenteur de notaire. Chaque « devrait » est un cheval de Troie, chaque « reconnaît » une {3} ; les adverbes — « utilement », « dans les meilleurs délais » — se placent à la pince. Le chapitre trois résiste depuis deux heures : « constater avec préoccupation » ou « noter avec {4} » ? La première formule est un code : tout le monde entendra une critique sévère sans qu'aucun État ait à la {5}. Le choix tombe, la séance se lève — le non-dit, encore une fois, a rédigé la phrase.", es: "Madame Dubois relee la versión de la tarde con una lentitud de notario. Cada «devrait» es un caballo de Troya, cada «reconnaît» una concesión; los adverbios — «útilmente», «en los mejores plazos» — se colocan con pinzas. El capítulo tres resiste desde hace dos horas: ¿«constatar con preocupación» o «notar con inquietud»? La primera fórmula es un código: todo el mundo oirá una crítica severa sin que ningún Estado tenga que pronunciarla. La elección cae, la sesión se levanta — lo no dicho, una vez más, ha redactado la frase." },
      ],
      gaps: [
        { options: ["style", "symptôme", "sujet"], answer: 2, why: "«Les participants», jamais un país solo: el párrafo abre con un sujeto colectivo." },
        { options: ["délégations", "déclarations", "décorations"], answer: 0, why: "La mesa del sommet: los verbos que comprometen solo pasan si las dos delegaciones los quieren." },
        { options: ["cession", "concession", "conviction"], answer: 1, why: "Cada «devrait» es una trampa y cada «reconnaît» una concesión diplomática." },
        { options: ["inquiétude", "injustice", "importance"], answer: 0, why: "La alternativa suave a «préoccupation»: «noter avec inquiétude»." },
        { options: ["pardonner", "peindre", "prononcer"], answer: 2, why: "«Sans qu'aucun État ait à la dire»: la crítica se entiende sin que nadie la pronuncie." },
      ],
    },
    {
      id: "cz-fr-c2-05-3", title: "Une forêt de francophonies", titleEs: "Un bosque de francofonías", minutes: 3,
      paragraphs: [
        { it: "Dernier soir du sommet : la délégation technique dîne tard. Le plus jeune membre demande ce qu'est exactement la Francophonie au-delà des {1} de la salle. Madame Dubois répond en poseuse d'images : une organisation qui réunit des États et des gouvernements sur les cinq continents, des {2} variés — « l'ONU des francophones », ose un stagiaire, et la table le lui pardonne à peine.", es: "Última noche de la cumbre: la delegación técnica cena tarde. El miembro más joven pregunta qué es exactamente la francofonía más allá de las banderas de la sala. Madame Dubois responde como quien pinta imágenes: una organización que reúne a Estados y gobiernos de los cinco continentes, con acentos variados — «la ONU de los francófonos», se atreve un becario, y la mesa apenas se lo perdona." },
        { it: "La conversation glisse vers la langue elle-même : le français y change de {3} à chaque frontière — le Sénégal, le Québec, la Belgique ont chacun leur manière de la faire sonner. M. Ndiaye raconte que, chez lui, certains mots du français ont gardé un {4} d'autrefois, que Paris a oublié depuis deux siècles. Personne ne conteste : la Francophonie n'est pas un jardin à la française, c'est une forêt — et les langues y vivent de leur {5} propre.", es: "La conversación se desliza hacia la lengua misma: el francés cambia de música en cada frontera — Senegal, Quebec, Bélgica tienen cada uno su manera de hacerla sonar. M. Ndiaye cuenta que, en su tierra, ciertas palabras del francés han guardado un sonido de antaño, que París olvidó hace dos siglos. Nadie lo discute: la francofonía no es un jardín a la francesa, es un bosque — y las lenguas viven allí de su propia vida." },
      ],
      gaps: [
        { options: ["drapeaux", "draps", "dragons"], answer: 0, why: "La sala de la cumbre y sus Estados representados: más allá de las banderas." },
        { options: ["accords", "accès", "accents"], answer: 2, why: "El francés de los cinco continentes suena distinto: los acentos variados." },
        { options: ["couleur", "musique", "orthographe"], answer: 1, why: "«Leur manière de la faire sonner»: cada frontera cambia la música del francés." },
        { options: ["son", "sens", "sort"], answer: 0, why: "«Que Paris a oublié depuis deux siècles»: palabras que conservan un sonido antiguo." },
        { options: ["vigne", "vie", "voie"], answer: 1, why: "«Une forêt» frente al jardín a la francesa: las lenguas viven allí de su propia vida." },
      ],
    },
  ],

  "fr-cu-c2-06": [
    {
      id: "cz-fr-c2-06-1", title: "La scène un sur la table", titleEs: "La escena uno sobre la mesa", minutes: 3,
      paragraphs: [
        { it: "Dans la salle de travail de La Fémis, l'école de cinéma installée dans les anciens studios Pathé de la rue Francœur, Thomas pose la scène un face à lui : quatre-vingt-dix lignes de {1} que le maître lit comme un pilote lit sa check-list. INT. APPARTEMENT — JOUR. Léa entre, allume la lampe, s'assoit. « Je ne vois rien », tranche Thomas, et la phrase tombe comme un {2}.", es: "En la sala de trabajo de La Fémis, la escuela de cine instalada en los antiguos estudios Pathé de la calle Francœur, Thomas pone la escena uno frente a él: noventa líneas de diálogo que el maestro lee como un piloto lee su lista de verificación. INT. APARTAMENTO — DÍA. Léa entra, enciende la lámpara, se sienta. «No veo nada», sentencia Thomas, y la frase cae como un veredicto." },
        { it: "La règle de la maison est sans appel : si ça ne se {3} pas, ça ne s'écrit pas. Le « en se souvenant de son enfance » que le scénariste amateur avait glissé dans une didascalie part à la corbeille ; à la place, une photo sur la table, un regard qui s'attarde — l'enfance entière en deux objets visibles. Le {4} de narration reprend ses droits : la caméra vit au présent, elle ne sait ni se souvenir ni prédire. Camille, au fond de la salle, défend une autre idée : un plan-séquence unique, une seule {5} pour toute la scène, le temps réel qui respire. Thomas hoche la tête : deux stratégies, deux films — il faudra choisir.", es: "La regla de la casa es sin apelación: si no se ve, no se escribe. El «en se souvenant de son enfance» que el guionista aficionado había colado en una acotación va a la papelera; en su lugar, una foto sobre la mesa, una mirada que se demora — la infancia entera en dos objetos visibles. El presente de narración recupera sus derechos: la cámara vive en el presente, no sabe ni recordar ni predecir. Camille, al fondo de la sala, defiende otra idea: un plano secuencia único, una sola toma para toda la escena, el tiempo real que respira. Thomas asiente: dos estrategias, dos películas — habrá que elegir." },
      ],
      gaps: [
        { options: ["dialogue", "journal", "décor"], answer: 0, why: "La escena se lee línea a línea como una check-list: las noventa líneas de diálogo." },
        { options: ["vertige", "verdict", "voyage"], answer: 1, why: "«Je ne vois rien» y la regla sin apelación: la frase cae como una sentencia." },
        { options: ["voit", "veut", "vaut"], answer: 0, why: "La regla de La Fémis: «si ça ne se voit pas, ça ne s'écrit pas» — lo visible manda." },
        { options: ["passé", "présent", "futur"], answer: 1, why: "«La caméra vit au présent»: el tiempo del guion es el presente de narración." },
        { options: ["pause", "pose", "prise"], answer: 2, why: "El plano secuencia se rueda de una vez: una sola toma (prise) para toda la escena." },
      ],
    },
    {
      id: "cz-fr-c2-06-2", title: "La réplique coupable", titleEs: "La réplica culpable", minutes: 3,
      paragraphs: [
        { it: "Deuxième exercice : couper les répliques. Thomas donne l'exemple canonique : « — Tu m'as menti depuis le début. — Depuis le début, {1}. » L'écho reprend les mots exacts et change leur poids : la {2} gagne trois degrés en deux mots. Le jeune scénariste comprend que le dialogue de film ne se lit pas, il se {3} — debout, à voix haute, chrono en main.", es: "Segundo ejercicio: cortar las réplicas. Thomas da el ejemplo canónico: «—Me has mentido desde el principio. —Desde el principio, sí.» El eco retoma las palabras exactas y cambia su peso: la tensión gana tres grados en dos palabras. El joven guionista entiende que el diálogo de cine no se lee, se juega — de pie, en voz alta, cronómetro en mano." },
        { it: "La réplique parfaite tient en une ligne, deux au maximum : elle doit rester coupable — le mot est un jeu —, c'est-à-dire qu'on doit pouvoir la {4} au milieu, l'interrompre comme dans la vie. Thomas interdit aussi les didascalies qui pensent : « elle songe à sa mère » n'est pas {5} ; « elle regarde la photo, longtemps » l'est. À la fin de la séance, la scène un ne dépasse plus la page — et le maître sourit : une page, une minute, le film commence à exister.", es: "La réplica perfecta cabe en una línea, dos como máximo: debe permanecer culpable — la palabra es un juego —, es decir, debe poder cortársela por la mitad, interrumpirla como en la vida. Thomas prohíbe también las acotaciones que piensan: «ella piensa en su madre» no es visible; «ella mira la foto, largo rato» sí lo es. Al final de la sesión, la escena uno ya no pasa de la página — y el maestro sonríe: una página, un minuto, la película empieza a existir." },
      ],
      gaps: [
        { options: ["oui", "non", "peut-être"], answer: 0, why: "La réplica-eco del ejemplo del curso: «Depuis le début, oui.»" },
        { options: ["tendresse", "tempête", "tension"], answer: 2, why: "El eco «cambia el peso» de las palabras: la tensión sube tres grados." },
        { options: ["juge", "joue", "jeûne"], answer: 1, why: "«Debout, à voix haute, chrono en main»: el diálogo no se lee, se juega." },
        { options: ["couper", "couvrir", "courber"], answer: 0, why: "«C'est-à-dire l'interrompre au milieu»: la réplica debe poder cortarse." },
        { options: ["vendable", "venimeuse", "visible"], answer: 2, why: "Frente a «elle songe» (invisible), «elle regarde la photo» sí es visible para la cámara." },
      ],
    },
    {
      id: "cz-fr-c2-06-3", title: "Le plan-séquence et les César", titleEs: "El plano secuencia y los César", minutes: 3,
      paragraphs: [
        { it: "La soirée du cours se termine par une projection : les plan-séquences célèbres du cinéma français défilent, et Camille les défend un par un. Une seule {1}, un temps réel, une scène qui respire sans coupure : pour elle, c'est le {2} du cinéma, l'acteur et le décor obligés de tenir ensemble. Thomas répond avec le découpage classique : le montage pense pour le spectateur, coupe à l'essentiel, gagne des {3} que le plan unique dilapide.", es: "La velada del curso termina con una proyección: los planos secuencia célebres del cine francés desfilan, y Camille los defiende uno por uno. Una sola toma, un tiempo real, una escena que respira sin corte: para ella, ese es el vértigo del cine, el actor y el decorado obligados a sostenerse juntos. Thomas responde con el despiece clásico: el montaje piensa por el espectador, corta a lo esencial, gana segundos que el plano único dilapida." },
        { it: "Le débat glisse vers la cérémonie des César : l'assemblée rit que la scène qu'ils s'apprêtent à tourner aura un budget de {4} et deux chaises. Peu importe, tranche le professeur invité : la stratégie se choisit par scène, pas par mode. Une déclaration d'amour peut exiger trois coupes ; une {5} de cuisine réclame son plan-séquence. La lumière s'éteint, la séance de travail devient projection — et chacun regarde son propre scénario, déjà remonté dans sa tête.", es: "El debate se desliza hacia la ceremonia de los César: la asamblea ríe que la escena que están a punto de rodar tendrá un presupuesto de tres euros y dos sillas. Poco importa, sentencia el profesor invitado: la estrategia se elige por escena, no por moda. Una declaración de amor puede exigir tres cortes; una disputa de cocina reclama su plano secuencia. La luz se apaga, la sesión de trabajo se vuelve proyección — y cada uno mira su propio guion, ya montado de nuevo en su cabeza." },
      ],
      gaps: [
        { options: ["pause", "prime", "prise"], answer: 2, why: "El plano secuencia se rueda de una vez: una sola toma (prise) sin corte." },
        { options: ["vertige", "vertu", "vers"], answer: 0, why: "«Un temps réel» y «une scène qui respire»: para Camille, el plano secuencia es el vértigo del cine." },
        { options: ["sentences", "semelles", "secondes"], answer: 2, why: "El montaje «coupe à l'essentiel»: gana segundos que el plano único desperdicia." },
        { options: ["trois millions", "trois euros", "trois heures"], answer: 1, why: "«Et deux chaises»: la broma sobre la escena de estudiantes y su presupuesto ridículo." },
        { options: ["dispute", "distance", "distribution"], answer: 0, why: "El ejemplo doméstico opuesto a la declaración de amor: la discusión de cocina." },
      ],
    },
  ],

  "fr-cu-c2-07": [
    {
      id: "cz-fr-c2-07-1", title: "La veille du meeting", titleEs: "La víspera del mitin", minutes: 3,
      paragraphs: [
        { it: "Salle des fêtes de la sous-préfecture, veille du dernier meeting : Perrin répète, Inès coupe. Le futur de promesse passe en premier : « Nous rouvrirons. Nous {1}. Nous tiendrons. » — des verbes courts, un engagement par phrase. La consigne de l'équipe tient en huit mots : ni une promesse sans futur, ni un futur sans {2}.", es: "Casa de fiestas de la subprefectura, víspera del último mitin: Perrin ensaya, Inès corta. El futuro de promesa pasa primero: «Reabriremos. Construiremos. Mantendremos.» — verbos cortos, un compromiso por frase. La consigna del equipo cabe en ocho palabras: ni una promesa sin futuro, ni un futuro sin verbo." },
        { it: "Perrin s'emballe sur une subordonnée de trois lignes ; Inès la {3} d'un trait de stylo : au meeting, la phrase de martille ne dépasse pas douze mots. Vient le tour de l'anaphore : « Parce que ce n'est pas normal. Parce que ce n'est pas normal. Parce que ce n'est pas {4}. » — à la troisième répétition, la salle donnera l'applaudissement elle-même. Le tricolon, lui, classe le programme en trois coups : logement, école, lien social. À la fin de la répétition, Perrin demande si tout cela ne sonne pas trop. Inès sourit : une phrase du débat vaut mille {5} — il faut juste qu'elle survive à la salle.", es: "Perrin se lanza con una subordinada de tres líneas; Inès la tacha de un trazo de bolígrafo: en el mitin, la frase de martillo no pasa de doce palabras. Llega el turno de la anáfora: «Porque esto no es normal. Porque esto no es normal. Porque esto no es normal.» — a la tercera repetición, la sala dará ella misma el aplauso. El tricolon, por su parte, ordena el programa en tres golpes: vivienda, escuela, vínculo social. Al final del ensayo, Perrin pregunta si todo eso no suena a demasiado. Inès sonríe: una frase del debate vale mil carteles — solo hace falta que sobreviva a la sala." },
      ],
      gaps: [
        { options: ["construirons", "construirions", "construisons"], answer: 0, why: "El futuro de promesa: «Nous rouvrirons, nous tiendrons» pide el futuro construirons, no el condicional." },
        { options: ["verbe", "vert", "vers"], answer: 0, why: "La consigna del equipo: ni una promesa sin futuro, ni un futuro sin verbo." },
        { options: ["rire", "râle", "raye"], answer: 2, why: "Inès corta la subordinada: la tacha (rayer) de un trazo de bolígrafo." },
        { options: ["normal", "fatal", "moral"], answer: 0, why: "La anáfora repite la misma frase tres veces: «ce n'est pas normal»." },
        { options: ["affaires", "affiches", "aubaines"], answer: 1, why: "«Qu'elle survive à la salle»: una frase del debate vale mil carteles (affiches)." },
      ],
    },
    {
      id: "cz-fr-c2-07-2", title: "L'applaudissement préparé", titleEs: "El aplauso preparado", minutes: 3,
      paragraphs: [
        { it: "Le soir du meeting, la salle est comble et la tribune attend. Dans les coulisses, Inès répète la {1} à Perrin : la phrase courte qui tombe, le silence d'une seconde avant l'idée forte, la reprise en {2} pour que la salle récite avec lui. Le candidat veut ajouter une citation latine ; la responsable de communication la retire : le meeting n'est pas un concours d'{3}.", es: "La noche del mitin, la sala está llena y la tribuna espera. Entre bastidores, Inès repite la partitura con Perrin: la frase corta que cae, el silencio de un segundo antes de la idea fuerte, la reprise en anáfora para que la sala recite con él. El candidato quiere añadir una cita latina; la responsable de comunicación la retira: el mitin no es un concurso de elocuencia." },
        { it: "Sur scène, le futur d'engagement revient en leitmotiv : « Ce que nous avons promis, nous le {4} » — et la dislocation fait son office, le pronom reprenant la promesse mot à mot. La question oratoire tombe, descendante, sans attendre de réponse : « Combien de rapports encore, combien de réunions, combien d'années ? » La salle retient son {5}. Puis la péroraison : trois mots, un silence — et l'applaudissement préparé éclate, exactement à la seconde prévue.", es: "En escena, el futuro de compromiso vuelve como leitmotiv: «Lo que hemos prometido, lo haremos» — y la dislocación hace su oficio, con el pronombre retomando la promesa palabra por palabra. La pregunta oratoria cae, descendente, sin esperar respuesta: «¿Cuántos informes todavía, cuántas reuniones, cuántos años?». La sala contiene el aliento. Luego la peroración: tres palabras, un silencio — y el aplauso preparado estalla, exactamente en el segundo previsto." },
      ],
      gaps: [
        { options: ["patience", "pastille", "partition"], answer: 2, why: "Frase corta, silencio, reprise: el discurso ensayado es la partitura del mitin." },
        { options: ["anecdote", "anaphore", "antenne"], answer: 1, why: "«Pour que la salle récite avec lui»: la repetición que arrastra al público es la anáfora." },
        { options: ["élection", "électricité", "éloquence"], answer: 2, why: "La cita latina retirada: el mitin no es un concurso de elocuencia." },
        { options: ["ferons", "ferions", "faisons"], answer: 0, why: "El futuro de compromiso: «nous le ferons», con la clítica retomando la promesa." },
        { options: ["souffre", "souffle", "soufflet"], answer: 1, why: "«La salle retient son souffle»: la sala contiene el aliento antes de la peroración." },
      ],
    },
    {
      id: "cz-fr-c2-07-3", title: "La phrase qui traverse la nuit", titleEs: "La frase que atraviesa la noche", minutes: 3,
      paragraphs: [
        { it: "Lendemain du meeting, l'équipe débriefe autour des cartes électorales. La {1} électorale est impitoyable : certains quartiers votent à gauche depuis un demi-siècle, d'autres changent de bord comme de chemise. Mais la vraie nouvelle vient des ondes : la phrase de Perrin sur les écoles circule déjà à la radio, reprise mot pour mot. « Une phrase du débat vaut mille affiches », résume Inès — et la {2} en fait la démonstration.", es: "Pasado el mitin, el equipo hace el debriefing sobre los mapas electorales. La cartografía electoral es implacable: ciertos barrios votan a la izquierda desde hace medio siglo, otros cambian de bando como de camisa. Pero la verdadera noticia viene de las ondas: la frase de Perrin sobre las escuelas ya circula en la radio, retomada palabra por palabra. «Una frase del debate vale mil carteles», resume Inès — y la velada lo demuestra." },
        { it: "Le directeur de campagne rappelle le cas d'école : « Je vous ai compris » — trois mots, une {3} double, la promesse et ce qu'elle ne disait pas. C'est pour cela que la phrase survit : elle dit deux choses à la fois, et chacun entend la sienne. Le débat tourne alors sur l'entre-deux-{4} : plus le temps des grandes réunions, le temps des marchés, des portes, des poignées de main. Perrin note une dernière consigne pour la tournée : la même {5} partout, celle de la salle comble — parce qu'une promesse, ça se répète, jusqu'à ce que le village entier la récite.", es: "El director de campaña recuerda el caso de escuela: «Je vous ai compris» — tres palabras, una doble lectura, la promesa y lo que no decía. Por eso la frase sobrevive: dice dos cosas a la vez, y cada uno oye la suya. El debate gira entonces hacia la segunda vuelta: ya no es el tiempo de las grandes reuniones, sino el de los mercados, las puertas, los apretones de manos. Perrin anota una última consigna para la gira: la misma frase en todas partes, la de la sala llena — porque una promesa se repite, hasta que el pueblo entero la recite." },
      ],
      gaps: [
        { options: ["caricature", "cartographie", "cassette"], answer: 1, why: "«Les cartes électorales» abren el debriefing: la cartografía electoral." },
        { options: ["soirée", "semelle", "saison"], answer: 0, why: "La radio del «lendemain du meeting»: la velada demuestra el valor de la frase." },
        { options: ["légende", "lecture", "leçon"], answer: 1, why: "«La promesse et ce qu'elle ne disait pas»: la frase tiene una doble lectura." },
        { options: ["tours", "tournées", "tables"], answer: 0, why: "«Plus le temps des grandes réunions»: la segunda vuelta es el entre-deux-tours." },
        { options: ["phase", "phrase", "pharmacie"], answer: 1, why: "«Celle de la salle comble» que se repite en la gira: la misma frase." },
      ],
    },
  ],

  "fr-cu-c2-08": [
    {
      id: "cz-fr-c2-08-1", title: "L'épreuve du coton", titleEs: "La prueba del algodón", minutes: 3,
      paragraphs: [
        { it: "Dans les bureaux de la maison d'édition de Saint-Germain-des-Prés, la première livraison passe l'épreuve du coton. Madame Vidal lit le chapitre un de la traduction, l'original espagnol à {1} ; Thomas, le correcteur, lit sans original, pour entendre si la prose respire française. La règle est ancienne : une traduction qui sent la {2} est une traduction ratée.", es: "En las oficinas de la editorial de Saint-Germain-des-Prés, la primera entrega pasa la prueba del algodón. Madame Vidal lee el capítulo uno de la traducción con el original español al lado; Thomas, el corrector, lee sin original, para oír si la prosa respira francesa. La regla es antigua: una traducción que huele a lengua fuente es una traducción fracasada." },
        { it: "Premier accroc : « Elle portait une robe rouge » — le traducteur avait hésité, puis laissé « robe », qui désigne ici une seule {3}, et non pas l'armoire entière. Deuxième accroc, plus grave : « Il a été blessé dans l'accident » traduisait un verbe espagnol de bénédiction — un {4} de faux ami qui changeait l'accident en miracle. Madame Vidal sourit malgré elle : le faux ami trompe l'œil, jamais l'{5} — lu à voix haute, il trébuche tout seul. Le chapitre repart en correction, et le délai, lui, ne bouge pas.", es: "Primer descosido: «Elle portait une robe rouge» — el traductor había dudado y luego dejado «robe», que designa aquí una sola prenda, y no el armario entero. Segundo descosido, más grave: «Il a été blessé dans l'accident» traducía un verbo español de bendición — un contrasentido de falso amigo que convertía el accidente en milagro. Madame Vidal sonríe a pesar suyo: el falso amigo engaña al ojo, nunca al oído — leído en voz alta, tropieza solo. El capítulo vuelve a corrección, y el plazo, ese, no se mueve." },
      ],
      gaps: [
        { options: ["côté", "coude", "cote"], answer: 0, why: "Madame Vidal compara: lee la traducción con el original español al lado." },
        { options: ["sauce", "source", "sauge"], answer: 1, why: "«Une traduction ratée»: la que huele a la lengua fuente (source) es fracasada." },
        { options: ["pièce", "pierre", "pitié"], answer: 0, why: "«Non pas l'armoire entière»: robe es una sola prenda (vestido), no la ropa entera." },
        { options: ["contenu", "contrat", "contresens"], answer: 2, why: "Traducir «blessé» por 'bendito' convierte el accidente en milagro: un contrasentido." },
        { options: ["orée", "oreille", "orgueil"], answer: 1, why: "«Lu à voix haute, il trébuche»: el falso amigo engaña al ojo, nunca al oído (oreille)." },
      ],
    },
    {
      id: "cz-fr-c2-08-2", title: "Le bestiaire en liberté", titleEs: "El bestiario suelto", minutes: 3,
      paragraphs: [
        { it: "La correction du chapitre deux ressemble à une chasse aux bêtes. Le traducteur dresse la liste des {1} croisés : robe, blessé, cave, éventuellement — chacun avec sa note. La « cueva » de l'original est voûtée et pleine de bouteilles : il faut donc rendre « {2} », la pièce à vin, et non la grotte des touristes. « Éventuellement », lui, veut dire « posiblemente » : le « eventualmente » espagnol de la durée se rendra par « avec le {3} ».", es: "La corrección del capítulo dos parece una caza de alimañas. El traductor levanta la lista de los falsos amigos cruzados: robe, blessé, cave, éventuellement — cada uno con su nota. La «cueva» del original es abovedada y está llena de botellas: hay que traducir «cave», la bodega, y no la gruta de los turistas. «Éventuellement», por su parte, significa 'posiblemente': el 'eventualmente' español de la duración se traducirá por «avec le temps»." },
        { it: "Thomas propose un exercice au traducteur : relire sa version à voix {4}, sans le texte source sous les yeux. Le faux ami, dit-il, trompe l'œil mais jamais l'oreille : sa prononciation réveille la vraie parole française, et le {5} se voit aussitôt. La méthode plaît à Madame Vidal, qui l'impose à toutes les livraisons de la collection. Dans le couloir, le traducteur note sa règle du jour : fidèle à l'effet, jamais à la lettre — la trahison la plus honnête reste une trahison.", es: "Thomas propone un ejercicio al traductor: releer su versión en voz alta, sin el texto fuente ante los ojos. El falso amigo, dice, engaña al ojo pero nunca al oído: su pronunciación despierta la verdadera palabra francesa, y el calco se ve enseguida. El método le gusta a Madame Vidal, que lo impone a todas las entregas de la colección. En el pasillo, el traductor anota su regla del día: fiel al efecto, nunca a la letra — la traición más honesta sigue siendo una traición." },
      ],
      gaps: [
        { options: ["faux bonds", "faux amis", "faux frais"], answer: 1, why: "«Robe, blessé, cave, éventuellement»: la lista de los falsos amigos." },
        { options: ["cave", "caverne", "caveau"], answer: 0, why: "«Voûtée et pleine de bouteilles»: la bodega de vino es la cave." },
        { options: ["vent", "temps", "talus"], answer: 1, why: "El 'eventualmente' español de la duración se traduce por «avec le temps»." },
        { options: ["basse", "haute", "tête"], answer: 1, why: "El ejercicio del corrector: releer la versión en voz alta (à voix haute)." },
        { options: ["calque", "calcul", "candide"], answer: 0, why: "La sintaxis calcada del español que «se ve aussitôt»: el calco." },
      ],
    },
    {
      id: "cz-fr-c2-08-3", title: "Les belles infidèles", titleEs: "Las bellas infieles", minutes: 3,
      paragraphs: [
        { it: "Pour la dernière livraison, Madame Vidal raconte l'histoire du métier : au dix-septième siècle, on traduisait « librement », on embellissait, on {1} — les « belles infidèles » étaient des traductions jolies et fausses. Le vingtième siècle a renversé la {2} : la fidélité d'abord, disait-on, la lettre avant le souffle. Le traducteur moderne, conclut-elle, marche sur cette {3} entre les deux écoles.", es: "Para la última entrega, Madame Vidal cuenta la historia del oficio: en el siglo diecisiete se traducía «libremente», se embellecía, se traicionaba — las «belles infidèles» eran traducciones bonitas y falsas. El siglo veinte invirtió la mesa: la fidelidad primero, se decía, la letra antes que el aliento. El traductor moderno, concluye, camina sobre esa cuerda entre las dos escuelas." },
        { it: "La collection célèbre chaque année ses traducteurs : le prix de la traduction littéraire récompense une {4} entière de travail discret. Sur les étagères de Saint-Germain, les romans espagnols voisinent désormais avec leurs versions françaises, et le lecteur passe de l'un à l'autre sans {5} — plus grand compliment du métier, dit Thomas : quand la fenêtre est assez propre, on ne voit plus le verre.", es: "La colección celebra cada año a sus traductores: el premio de traducción literaria premia una vida entera de trabajo discreto. En los estantes de Saint-Germain, las novelas españolas vecinan ya con sus versiones francesas, y el lector pasa de unas a otras sin tropiezo — el mayor cumplido del oficio, dice Thomas: cuando la ventana está bastante limpia, ya no se ve el cristal." },
      ],
      gaps: [
        { options: ["trahissait", "traduisait", "travaillait"], answer: 0, why: "«On embellissait, on ___»: la pareja del embellecer es traicionar — las bellas infieles." },
        { options: ["tente", "table", "tendance"], answer: 1, why: "El siglo XX «invirtió» la jerarquía: renverser la table, la mesa de valores." },
        { options: ["corde", "cible", "carte"], answer: 0, why: "«Entre les deux écoles»: el traductor camina sobre la cuerda (funambulismo)." },
        { options: ["vie", "voie", "ville"], answer: 0, why: "«Travail discret» premiado año tras año: una vida entera de oficio." },
        { options: ["heure", "heurt", "huile"], answer: 1, why: "«On ne voit plus le verre»: el lector pasa de una versión a otra sin tropiezo (heurt)." },
      ],
    },
  ],

  "fr-cu-c2-09": [
    {
      id: "cz-fr-c2-09-1", title: "La chasse est ouverte", titleEs: "La caza está abierta", minutes: 3,
      paragraphs: [
        { it: "Dans le bureau du lektorat, le manuscrit d'essai économique attend son verdict. Madame Roche, directrice de collection, surligne en {1} ; Léo, éditeur adjoint, ouvre les paris : quarante pour cent de coupe, à sens égal. La première page donne le ton : « La mise en œuvre de la réforme sera étudiée » — sept mots pour une seule {2}, et le sujet responsable nulle part.", es: "En la oficina del lektorat, el manuscrito de ensayo económico espera su veredicto. Madame Roche, directora de colección, subraya en amarillo; Léo, editor adjunto, abre las apuestas: cuarenta por ciento de corte, con el sentido intacto. La primera página marca el tono: «La mise en œuvre de la réforme sera étudiée» — siete palabras para una sola acción, y el sujeto responsable en ninguna parte." },
        { it: "La chasse au jargon a ses instruments : remplacer « il a procédé à l'examen » par « il a {3} », « il convient de noter que la situation est préoccupante » par « la situation {4} ». Léo attaque le remplissage : « en termes de », « il faut souligner que » tombent en rang. Madame Roche garde un œil sur la {5} : on coupe l'air, jamais la pensée. Le soir, le manuscrit pèse moins lourd, et le pari des quarante pour cent semble jouable — à condition que l'auteur, lui, survive à la lecture.", es: "La caza de la jerga tiene sus instrumentos: reemplazar «il a procédé à l'examen» por «il a examiné», «il convient de noter que la situation est préoccupante» por «la situation inquiète». Léo ataca el relleno: «en termes de», «il faut souligner que» caen en fila. Madame Roche vigila la densidad: se corta el aire, jamás el pensamiento. Por la noche, el manuscrito pesa menos, y la apuesta del cuarenta por ciento parece jugable — con la condición de que el autor, él, sobreviva a la lectura." },
      ],
      gaps: [
        { options: ["jaune", "jeune", "jaunisse"], answer: 0, why: "El verbo «surligner» y el color clásico del rotulador de corrección: en amarillo." },
        { options: ["acte", "action", "actualité"], answer: 1, why: "«Sept mots pour une seule» acción escondida en la nominalización." },
        { options: ["examiné", "examina", "examen"], answer: 0, why: "La versión desinflada de «il a procédé à l'examen»: il a examiné." },
        { options: ["inquiéta", "inquiète", "inquiéter"], answer: 1, why: "La versión con verbo pleno de «est préoccupante»: la situation inquiète." },
        { options: ["dentée", "densité", "dépense"], answer: 1, why: "«On coupe l'air, jamais la pensée»: el criterio es la densidad de ideas." },
      ],
    },
    {
      id: "cz-fr-c2-09-2", title: "Le pari des quarante pour cent", titleEs: "La apuesta del cuarenta por ciento", minutes: 3,
      paragraphs: [
        { it: "Une semaine plus tard, l'auteur du manuscrit est reçu pour la {1} de ses pages marquées. Il découvre son texte couvert de jaune comme une carte d'état-major. Léo, en maître de cérémonie, présente la {2} : « La situation est préoccupante » devient « La situation inquiète » ; « Il a procédé à l'examen du dossier » fond en « Il a examiné le dossier » ; et le « en termes de » disparaît au profit d'un simple « pour ».", es: "Una semana después, el autor del manuscrito es recibido para la restitución de sus páginas marcadas. Descubre su texto cubierto de amarillo como un mapa de estado mayor. Léo, como maestro de ceremonias, presenta la receta: «La situation est préoccupante» se convierte en «La situation inquiète»; «Il a procédé à l'examen du dossier» se funde en «Il a examiné le dossier»; y el «en termes de» desaparece en favor de un simple «pour»." },
        { it: "L'auteur tente une défense : ses nominalisations sonnent « sérieuses ». Madame Roche répond avec la règle de la maison : le sérieux d'un texte se {3} en idées par ligne, pas en syllabes par phrase. Proust, glisse-t-elle, écrit des phrases longues et denses ; le jargon écrit des phrases courtes et {4}. La distinction sauve la coupe : on ne raccourcit pas la pensée, on enlève l'air. À la fin de la séance, l'auteur biffe lui-même une page entière — et Léo note, déçu ou soulagé, que le pari des quarante pour cent vient de tomber à {5}.", es: "El autor intenta una defensa: sus nominalizaciones suenan «serias». Madame Roche responde con la regla de la casa: la seriedad de un texto se mide en ideas por línea, no en sílabas por frase. Proust, desliza, escribe frases largas y densas; la jerga escribe frases cortas y vacías. La distinción salva el corte: no se acorta el pensamiento, se le quita el aire. Al final de la sesión, el autor tacha él mismo una página entera — y Léo anota, decepcionado o aliviado, que la apuesta del cuarenta por ciento acaba de caer al agua." },
      ],
      gaps: [
        { options: ["restauration", "résolution", "restitution"], answer: 2, why: "«Ses pages marquées» devueltas al autor: la restitución de las correcciones." },
        { options: ["réception", "recette", "recrue"], answer: 1, why: "Las transformaciones presentadas una a una: la receta de la casa." },
        { options: ["mesure", "ménage", "menace"], answer: 0, why: "«En idées par ligne, pas en syllabes»: la seriedad se mide (mesurer)." },
        { options: ["vastes", "vides", "vives"], answer: 1, why: "Frente a Proust «dense»: el jargon escribe frases cortas y vacías." },
        { options: ["l'heure", "l'eau", "l'air"], answer: 1, why: "«Déçu ou soulagé»: la apuesta se hunde — tomber à l'eau, caer al agua." },
      ],
    },
    {
      id: "cz-fr-c2-09-3", title: "Le langage de bois", titleEs: "La lengua de madera", minutes: 3,
      paragraphs: [
        { it: "Dernier chapitre de la formation : le langage de bois. Madame Roche distribue une page de rapport administratif et demande ce qui cloche. Les stagiaires comptent : aucun {1} d'action, aucun sujet responsable, quatre « il convient de » en cinq lignes — la langue de bois parle beaucoup pour ne rien {2}.", es: "Último capítulo de la formación: la lengua de madera. Madame Roche reparte una página de informe administrativo y pregunta qué falla. Los becarios cuentan: ningún verbo de acción, ningún sujeto responsable, cuatro «il convient de» en cinco líneas — la lengua de madera habla mucho para no decir nada." },
        { it: "La cure passe par le {3} responsable : qui fait quoi, en un verbe et un sujet. « La mise en place d'un dispositif de suivi sera étudiée » devient « nous étudierons un suivi » — le lecteur voit enfin des {4}. Léo ajoute le garde-fou : tout couper serait une autre trahison, car Proust est dense et le jargon vide ; on coupe le vide, on garde la {5}. La stagiaire qui relit son propre rapport, ce soir-là, sourit en biffant son premier « il convient de noter que » : la chasse est ouverte, et elle est de la partie.", es: "La cura pasa por el sujeto responsable: quién hace qué, con un verbo y un sujeto. «La mise en place d'un dispositif de suivi sera étudiée» se convierte en «nous étudierons un suivi» — el lector ve por fin rostros. Léo añade la protección: cortarlo todo sería otra traición, porque Proust es denso y la jerga vacía; se corta lo vacío, se guarda el pensamiento. La becaria que relee su propio informe esa noche sonríe tachando su primer «il convient de noter que»: la caza está abierta, y ella juega." },
      ],
      gaps: [
        { options: ["verbe", "vert", "vers"], answer: 0, why: "«Aucun sujet responsable» con cuatro «il convient de»: falta el verbo de acción." },
        { options: ["donner", "dire", "dormir"], answer: 1, why: "«Parle beaucoup pour ne rien»: la lengua de madera habla para no decir nada." },
        { options: ["style", "sujet", "souci"], answer: 1, why: "«Qui fait quoi, en un verbe et un»: la pareja del verbo es el sujeto responsable." },
        { options: ["visages", "visées", "visites"], answer: 0, why: "«Nous étudierons»: con sujeto responsable, el lector ve por fin rostros (quién actúa)." },
        { options: ["poussée", "pensée", "pesée"], answer: 1, why: "«On coupe le vide, on garde»: lo que se conserva es el pensamiento." },
      ],
    },
  ],

  "fr-cu-c2-10": [
    {
      id: "cz-fr-c2-10-1", title: "La voix de Monsieur Azéma", titleEs: "La voz de Monsieur Azéma", minutes: 3,
      paragraphs: [
        { it: "Dans le village de l'Aveyron, la maison de Monsieur Azéma sent la pomme et le feu de bois. Inès installe le magnétophone, le témoin de quatre-vingt-douze ans s'installe dans son fauteuil, et la bande commence à {1}. Il raconte l'école d'autrefois : l'encre, le {2}, le maître qui parlait français pendant que la cour résonnait d'occitan.", es: "En el pueblo del Aveyron, la casa de Monsieur Azéma huele a manzana y a leña. Inès instala el magnetófono, el testigo de noventa y dos años se acomoda en su sillón, y la cinta empieza a girar. Cuenta la escuela de antaño: la tinta, el cuaderno, el maestro que hablaba francés mientras el patio resonaba en occitano." },
        { it: "Le vendredi, se souvient-il, il faisait le tour du village — l'imparfait des habitudes, notera Inès en transcrivant. Puis vient le grand {3} de 1944 : le récit change de temps, tout le village courut sur la place, et la voix du témoin elle-même s'accélère. À la fin de la séance, le vieux monsieur demande à écouter sa propre {4} : il rit, se trouve trop lent, ajoute un mot occitan que la bande garde tel quel. Inès ne corrige rien : le {5} a toujours raison, même quand il se trompe de date.", es: "Los viernes, recuerda, daba la vuelta al pueblo — el imperfecto de las costumbres, anotará Inès al transcribir. Luego llega la gran tormenta de 1944: el relato cambia de tiempo, todo el pueblo corrió a la plaza, y la voz del testigo se acelera. Al final de la sesión, el anciano pide escuchar su propia voz: ríe, se encuentra demasiado lento, añade una palabra occitana que la cinta guarda tal cual. Inès no corrige nada: el testigo siempre tiene razón, incluso cuando se equivoca de fecha." },
      ],
      gaps: [
        { options: ["tourner", "torrent", "tornade"], answer: 0, why: "El magnetófono instalado y «la bande»: la cinta empieza a girar (tourner)." },
        { options: ["cahut", "cahier", "caisson"], answer: 1, why: "La escuela de antaño: la tinta, el cuaderno, el maître." },
        { options: ["orange", "orage", "organe"], answer: 1, why: "El acontecimiento que corta la rutina en 1944 y hace correr al pueblo: la tormenta (orage)." },
        { options: ["voix", "voie", "vol"], answer: 0, why: "«Il rit, se trouve trop lent»: el anciano pide escuchar su propia voz grabada." },
        { options: ["thym", "timon", "témoin"], answer: 2, why: "«Inès ne corrige rien»: la regla del archivo oral — el testigo siempre tiene razón." },
      ],
    },
    {
      id: "cz-fr-c2-10-2", title: "De la bande à l'encre", titleEs: "De la cinta a la tinta", minutes: 3,
      paragraphs: [
        { it: "Retour à Paris, les cassettes sur la table : commence le travail de {1}. Inès écoute chaque phrase trois fois avant de l'écrire. Le principe de l'école française : transcrire « telle quelle » — les hésitations, les « euh », les phrases {2} restent, parce qu'elles documentent la mémoire autant que les mots. Seule exception : le nom propre que la bande n'attrape pas, vérifié dans le registre de la mairie.", es: "Regreso a París, las cintas sobre la mesa: empieza el trabajo de transcripción. Inès escucha cada frase tres veces antes de escribirla. El principio de la escuela francesa: transcribir «tal cual» — las vacilaciones, los «euh», las frases recomenzadas se quedan, porque documentan la memoria tanto como las palabras. Única excepción: el nombre propio que la cinta no captura, verificado en el registro del ayuntamiento." },
        { it: "Le témoin mélangeait l'occitan et le français : les mots de la langue d'oc restent en italique avec une note, jamais traduits — traduire, ce serait {3} le témoin. Pour les temps, la règle est ferme : l'oral vit au passé composé et à l'imparfait des habitudes ; le passé simple, lui, n'apparaîtra que si l'archive devient {4}. La dernière phrase du témoignage, Inès la garde pour la fin du rapport : « Le vent parlait occitan » — et cette {5}, dit-elle, vaut tous les chapitres d'explication.", es: "El testigo mezclaba el occitano y el francés: las palabras de la lengua de oc quedan en cursiva con una nota, jamás traducidas — traducir sería corregir al testigo. Para los tiempos, la regla es firme: la oralidad vive en passé composé y en el imperfecto de las costumbres; el passé simple solo aparecerá si el archivo se vuelve literatura. La última frase del testimonio, Inès la guarda para el final del informe: «Le vent parlait occitan» — y esa fórmula, dice, vale todos los capítulos de explicación." },
      ],
      gaps: [
        { options: ["transpiration", "traduction", "transcription"], answer: 2, why: "Las cintas sobre la mesa e Inès escucha y escribe: el trabajo de transcripción." },
        { options: ["recommandées", "recommencées", "récompensées"], answer: 1, why: "Las vacilaciones y los «euh»: las frases recomenzadas del habla." },
        { options: ["corriger", "copier", "couvrir"], answer: 0, why: "«Jamais traduits»: traducir las palabras del testigo sería corregirlo." },
        { options: ["légitime", "littérature", "liminaire"], answer: 1, why: "El passé simple solo entra si el archivo pasa del habla a la literatura." },
        { options: ["formalité", "formule", "fourmilière"], answer: 1, why: "«Vaut tous les chapitres d'explication»: la frase final es una fórmula." },
      ],
    },
    {
      id: "cz-fr-c2-10-3", title: "La langue qui se tait", titleEs: "La lengua que calla", minutes: 3,
      paragraphs: [
        { it: "Le rapport d'enquête s'ouvre sur un paradoxe : les archives départementales gardent la {1} de la France entière, mais les langues qu'on y entend ne sont pas toujours le français. Dans l'Aveyron, l'occitan ; en Bretagne, le breton ; des langues {2} pendant des générations, quand l'école punissait celui qui les parlait dans la cour.", es: "El informe de la encuesta abre con una paradoja: los archivos departamentales guardan la voz de la Francia entera, pero las lenguas que allí se escuchan no son siempre el francés. En el Aveyron, el occitano; en Bretaña, el bretón; lenguas proscritas durante generaciones, cuando la escuela castigaba a quien las hablaba en el patio." },
        { it: "Monsieur Azéma le racontait mieux que personne : à l'école, le maître exigeait le français ; à la maison, la {3} restait occitane. Il a gardé de cette enfance deux registres séparés, comme deux poches d'un même gilet. Aujourd'hui, les écoles bilingues rouvrent la porte que l'école d'autrefois avait fermée, et les {4} d'archives donnent aux langues régionales une seconde audience. Inès conclut son rapport par une phrase du vieux témoin : une langue ne meurt pas, dit-il en substance — elle {5}, et elle attend. La bande magnétique, elle, garde la voix au chaud pour le jour où l'on voudra la réentendre.", es: "Monsieur Azéma lo contaba mejor que nadie: en la escuela, el maestro exigía el francés; en casa, la lengua seguía siendo occitana. De aquella infancia guardó dos registros separados, como dos bolsillos de un mismo chaleco. Hoy, las escuelas bilingües reabren la puerta que la escuela de antaño había cerrado, y los archivos dan a las lenguas regionales una segunda audiencia. Inès concluye su informe con una frase del viejo testigo: una lengua no muere, dice en sustancia — calla, y espera. La cinta magnética, por su parte, guarda la voz en caliente para el día en que se quiera volver a oírla." },
      ],
      gaps: [
        { options: ["voix", "voie", "vol"], answer: 0, why: "Los archivos de historia oral guardan la voz de los testigos." },
        { options: ["bénies", "bannies", "bâillées"], answer: 1, why: "«Quand l'école punissait celui qui les parlait»: lenguas proscritas (bannies)." },
        { options: ["langue", "lange", "légende"], answer: 0, why: "En la escuela el francés, en casa «la langue restait occitane»: la lengua familiar." },
        { options: ["archives", "arches", "archets"], answer: 0, why: "«Une seconde audience»: los archivos dan nueva audiencia a las lenguas regionales." },
        { options: ["se bat", "se tait", "se dit"], answer: 1, why: "«Elle attend»: el título lo anticipa — la lengua calla (se taire) y espera." },
      ],
    },
  ],

  "fr-cu-c2-11": [
    {
      id: "cz-fr-c2-11-1", title: "Le coup d'envoi", titleEs: "El saque inicial", minutes: 3,
      paragraphs: [
        { it: "Le théâtre parisien a rendez-vous avec la ligue d'improvisation : deux équipes, des maillots de couleur, un arbitre au sifflet. L'{1} impose un thème, et la préparation commence — quarante-cinq secondes pour bâtir une {2} entière. Le public, lui, a ses pancartes : il note, il vote, il siffle aussi.", es: "El teatro parisino tiene cita con la liga de improvisación: dos equipos, camisetas de colores, un árbitro con silbato. El árbitro impone un tema, y la preparación empieza — cuarenta y cinco segundos para construir una escena entera. El público, por su parte, tiene sus pancartas: puntúa, vota, también silba." },
        { it: "Léo, capitaine de l'équipe, répartit les rôles : Inès ouvrira par le {3} solennel, lui prendra la chute. La règle du jeu tient en une phrase : rapide, mais lisible — le public pardonne l'approximation, jamais le {4}. Premier thème tiré au sort : « la panne d'ascenseur ». Le sifflet tombe, les quarante-cinq secondes {5}, et la langue française devient, pour deux minutes, un sport de plein air.", es: "Léo, capitán del equipo, reparte los papeles: Inès abrirá con el relato solemne, él se quedará el remate. La regla del juego cabe en una frase: rápido, pero legible — el público perdona la aproximación, jamás lo confuso. Primer tema sacado a suerte: «la avería del ascensor». El silbato cae, los cuarenta y cinco segundos vuelan, y la lengua francesa se convierte, por dos minutos, en un deporte al aire libre." },
      ],
      gaps: [
        { options: ["arbitre", "arbre", "arbuste"], answer: 0, why: "«Au sifflet» y «impose un thème»: quien impone el tema es el árbitro." },
        { options: ["scie", "scène", "sève"], answer: 1, why: "Cuarenta y cinco segundos para construir una escena entera." },
        { options: ["récit", "récif", "racine"], answer: 0, why: "Inès abrirá con el relato solemne; Léo toma la chute." },
        { options: ["flou", "flot", "flan"], answer: 0, why: "«Rapide, mais lisible»: el público perdona la aproximación, jamás lo borroso (flou)." },
        { options: ["fichent", "fument", "filent"], answer: 2, why: "«Le sifflet tombe» y arranca el cronómetro: los segundos vuelan (filer)." },
      ],
    },
    {
      id: "cz-fr-c2-11-2", title: "La fabrique du calembour", titleEs: "La fábrica del calembour", minutes: 3,
      paragraphs: [
        { it: "Pendant l'entraînement, Léo fait visiter son atelier de mots. Le calembour d'abord : il prend une phrase du match précédent, « l'avocat a plaidé », et la retourne — l'{1} se cache dans « avocat », le fruit et l'homme de loi. Puis le mot-valise : « courriel » a marié « courrier » et « électronique », « pourriel » a épousé la {2} — et les deux sont entrés au dictionnaire.", es: "Durante el entrenamiento, Léo hace visitar su taller de palabras. Primero el calembour: toma una frase del partido anterior, «l'avocat a plaidé», y la da la vuelta — la ambigüedad se esconde en «avocat», la fruta y el hombre de ley. Luego la palabra-maleta: «courriel» casó «courrier» y «électronique», «pourriel» se desposó con la basura — y las dos entraron en el diccionario." },
        { it: "Le verlan, lui, travaille à l'envers : « l'envers » lui-même a donné son nom au {3}. Femme devient meuf, lourd devient relou, louche devient chelou — l'oreille retourne les {4} comme un gant. Inès, elle, travaille l'apocope : le resto, l'apéro, impec — une syllabe de moins par mot, et des secondes de gagnées sur le chronomètre. Le maître de la ligue résume l'école : la langue vivante fabrique ses mots comme la foule fabrique ses {5} — vite, ensemble, et sans attendre l'académie.", es: "El verlán, por su parte, trabaja al revés: «l'envers» dio su propio nombre al verlán. Femme se convierte en meuf, lourd en relou, louche en chelou — el oído vuelve las sílabas como un guante. Inès trabaja la apócope: le resto, l'apéro, impec — una sílaba menos por palabra, y segundos ganados al cronómetro. El maestro de la liga resume la escuela: la lengua viva fabrica sus palabras como la multitud fabrica sus gritos — rápido, juntos, y sin esperar a la academia." },
      ],
      gaps: [
        { options: ["ambassade", "ambulance", "ambiguïté"], answer: 2, why: "«Le fruit et l'homme de loi»: el doble sentido escondido en «avocat» es la ambigüedad." },
        { options: ["poussette", "poubelle", "praline"], answer: 1, why: "«Pourriel» casa courriel con la basura (poubelle)." },
        { options: ["verlan", "verger", "vernis"], answer: 0, why: "«L'envers» invertido da su nombre al verlan — así nació la propia palabra." },
        { options: ["syllabes", "salades", "salves"], answer: 0, why: "Femme→meuf, lourd→relou: el oído invierte las sílabas como un guante." },
        { options: ["croix", "cris", "creux"], answer: 1, why: "«Vite, ensemble, sans attendre l'académie»: la multitud fabrica sus gritos." },
      ],
    },
    {
      id: "cz-fr-c2-11-3", title: "Le match de clôture", titleEs: "El partido de cierre", minutes: 3,
      paragraphs: [
        { it: "La finale de la ligue se joue à salle comble. Les équipes sont à égalité quand l'arbitre tire le dernier {1} : « la madeleine de Proust », en quarante-cinq secondes. L'équipe adverse choisit la catégorie « à la manière de » — et lance un pastiche de roman du dix-neuvième siècle où la madeleine devient un calembour. Le public retient son {2}, puis éclate.", es: "La final de la liga se juega con la sala llena. Los equipos están empatados cuando el árbitro saca el último tema: «la magdalena de Proust», en cuarenta y cinco segundos. El equipo adversario elige la categoría «à la manière de» — y lanza un pastiche de novela del diecinueve donde la magdalena se convierte en juego de palabras. El público contiene el aliento, y luego estalla." },
        { it: "Sur scène, Léo tente la réponse en {3} : la mémoire, le goût, le temps retrouvé — et la chute tombe au mot près. Inès, elle, joue la minute de {4} totale : le silence, la madeleine imaginaire qui refroidit, et le public qui invente la suite. Le vote final donne une voix d'écart ; le trophée change de {5}, et la ligue promet la revanche. Dans le couloir, Léo résume la saison : « La langue, c'est le seul sport où l'on gagne en riant. »", es: "En escena, Léo intenta la respuesta en alejandrino: la memoria, el sabor, el tiempo recobrado — y el remate cae palabra por palabra. Inès, por su parte, juega el minuto de poesía total: el silencio, la magdalena imaginaria que se enfría, y el público inventando la continuación. La votación final da una voz de ventaja; el trofeo cambia de manos, y la liga promete la revancha. En el pasillo, Léo resume la temporada: «La lengua es el único deporte en el que se gana riendo.»" },
      ],
      gaps: [
        { options: ["thème", "terme", "thèse"], answer: 0, why: "«En quarante-cinq secondes»: lo que el árbitro saca a suerte es el tema." },
        { options: ["soufflet", "souffrance", "souffle"], answer: 2, why: "«Puis éclate»: el público contiene su aliento (souffle) antes de estallar." },
        { options: ["alexandrin", "Alexandre", "alarme"], answer: 0, why: "La respuesta métrica con memoria, gusto y tiempo: el alejandrino." },
        { options: ["police", "poésie", "poussière"], answer: 1, why: "El silencio y la magdalena imaginaria: el minuto de poesía total." },
        { options: ["matin", "mains", "mai"], answer: 1, why: "«Une voix d'écart» en la votación: el trofeo cambia de manos." },
      ],
    },
  ],

  "fr-cu-c2-12": [
    {
      id: "cz-fr-c2-12-1", title: "Sous le portrait de Goncourt", titleEs: "Bajo el retrato de Goncourt", minutes: 3,
      paragraphs: [
        { it: "Au restaurant Drouant, sous le portrait d'Edmond Goncourt, Madame Aubry répète le protocole avec le speaker improvisé : « Trois minutes, pas une de plus. Un éloge, ce n'est pas un {1} de prix, c'est une vie que l'on fait voir. » Sur la table, le discours raturé ; dans la salle, les couverts s'installent déjà pour le dîner.", es: "En el restaurante Drouant, bajo el retrato de Edmond Goncourt, Madame Aubry ensaya el protocolo con el orador improvisado: «Tres minutos, ni uno más. Un elogio no es un catálogo de premios, es una vida que se hace ver.» Sobre la mesa, el discurso tachado; en la sala, los cubiertos ya se colocan para la cena." },
        { it: "La présidente du jury procède par retouches. Elle biffe les adjectifs émus — « émouvante, formidable, extraordinaire » tombent un à un — et les {2} par des détails : « Elle corrigeait au crayon rouge, en marge, jusque dans les dédicaces. » Puis vient la {3} : trois phrases qui montent, le même verbe à chaque marche, la plus courte au sommet. Reste la péroraison. Madame Aubry pose sa règle de fer : avant la dernière phrase, une seconde {4} de silence — le temps que la salle retienne son souffle. Le speaker s'exécute, la voix un peu basse ; la présidente hoche la tête : « C'est elle qu'on {5} demain. »", es: "La presidenta del jurado procede con retoques. Tacha los adjetivos emocionados — «émouvante, formidable, extraordinaire» caen uno a uno — y los reemplaza con detalles: «Corregía con lápiz rojo, al margen, incluso en las dedicatorias.» Luego llega la gradación: tres frases que suben, el mismo verbo en cada peldaño, la más corta en la cima. Queda la peroración. Madame Aubry impone su regla de hierro: antes de la última frase, un segundo entero de silencio — el tiempo para que la sala contenga el aliento. El orador se ejecuta, con la voz un poco baja; la presidenta asiente: «Es la frase que citarán mañana.»" },
      ],
      gaps: [
        { options: ["cataclysme", "catalogue", "cathédrale"], answer: 1, why: "«C'est une vie que l'on fait voir»: el elogio no es una lista de premios, un catálogo." },
        { options: ["remplace", "renforce", "raille"], answer: 0, why: "Tacha los adjetivos y los reemplaza por detalles concretos." },
        { options: ["graduation", "gradation", "gratitude"], answer: 1, why: "«Trois phrases qui montent, le même verbe à chaque marche»: la gradación." },
        { options: ["entourée", "enrôlée", "entière"], answer: 2, why: "«Une seconde de silence»: entera, completa — la pausa no se recorta." },
        { options: ["cite", "cimente", "citera"], answer: 2, why: "«Demain»: la frase final se escribe para ser citada mañana — futuro citera." },
      ],
    },
    {
      id: "cz-fr-c2-12-2", title: "Trois minutes pour une vie", titleEs: "Tres minutos para una vida", minutes: 3,
      paragraphs: [
        { it: "Le soir de la remise, le bruit des fourchettes s'arrête net. Le discours commence bas, comme un {1} : « Elle a écrit des livres ; elle a écrit une époque ; elle a écrit nos vies. » La gradation monte, le même {2} à chaque marche, et la salle entend l'escalier sans qu'on la lui montre.", es: "La noche de la entrega, el ruido de los cubiertos se detiene en seco. El discurso empieza bajo, como un murmullo: «Escribió libros; escribió una época; escribió nuestras vidas.» La gradación sube, el mismo verbo en cada peldaño, y la sala oye la escalera sin que nadie se la muestre." },
        { it: "Vient le détail, le seul qui vaille : « Elle écrivait debout, dans les {3}, entre deux trains. » Pas un adjectif ému dans la phrase, et pourtant la salle voit la scène entière. Le discours évite les larmes et fait voir ; il évite aussi la modestie fausse : un prix couronne une œuvre, dit le speaker, ce soir il reconnaît une {4}. Puis la seconde de silence — entière, mesurée — et la péroraison : « Recevez, madame, l'hommage du jury — et la {5} de tous les lecteurs. » Les applaudissements tombent après, pas avant : ils étaient programmés, comme il se doit.", es: "Llega el detalle, el único que vale: «Escribía de pie, en las estaciones, entre dos trenes.» Ni un adjetivo emocionado en la frase, y sin embargo la sala ve la escena entera. El discurso evita las lágrimas y hace ver; evita también la falsa modestia: un premio corona una obra, dice el orador, esta noche reconoce una vida. Luego el segundo de silencio — entero, medido — y la peroración: «Reciba, señora, el homenaje del jurado — y la gratitud de todos los lectores.» Los aplausos caen después, no antes: estaban programados, como es debido." },
      ],
      gaps: [
        { options: ["murmure", "morsure", "mesure"], answer: 0, why: "«Le discours commence bas»: arranca como un murmullo." },
        { options: ["vert", "vers", "verbe"], answer: 2, why: "«À chaque marche»: la gradación repite el mismo verbe (a écrit)." },
        { options: ["gares", "guêpes", "granges"], answer: 0, why: "«Entre deux trains»: escribía de pie en las estaciones." },
        { options: ["voie", "vie", "ville"], answer: 1, why: "«Un prix couronne une œuvre, ce soir il reconnaît»: la antítesis corona la obra y reconoce la vida." },
        { options: ["grammaire", "gravité", "gratitude"], answer: 2, why: "«L'hommage du jury — et la» gratitud de los lectores: fórmula ritual de cierre." },
      ],
    },
    {
      id: "cz-fr-c2-12-3", title: "La saison des prix", titleEs: "La temporada de los premios", minutes: 3,
      paragraphs: [
        { it: "La remise des prix du Goncourt a ses décors et ses légendes : le restaurant Drouant, les dix convives du jury, la {1} littéraire qui commence toujours en septembre. Chaque mardi, le jury déjeune à la même table ; chaque novembre, la France entière {2} du vainqueur au journal de vingt heures.", es: "La entrega de premios del Goncourt tiene sus decorados y sus leyendas: el restaurante Drouant, los diez comensales del jurado, la temporada literaria que empieza siempre en septiembre. Cada martes, el jurado almuerza en la misma mesa; cada noviembre, la Francia entera habla del ganador en el diario de las veinte." },
        { it: "Le lendemain de la remise, les libraires alignent le roman couronné en vitrine, et la petite {3} de l'éditeur devient un fleuve. Le jury assume ses paradoxes : on le dit imprévisible, pourtant il couronne depuis un siècle des livres qui durent. À côté du Goncourt, d'autres prix veillent — le Renaudot décerné dans le même restaurant, le {4} des lycéens qui fait voter des classes entières. Madame Aubry conclut la soirée sous le portrait : les prix ne font pas les œuvres, dit-elle, ils leur font un {5} — et parfois, une seconde vie.", es: "Pasada la entrega, los libreros alinean en el escaparate la novela premiada, y la pequeña edición del editor se convierte en un río. El jurado asume sus paradojas: se dice impredecible, y sin embargo premia desde hace un siglo libros que duran. Junto al Goncourt, otros premios velan — el Renaudot otorgado en el mismo restaurante, el premio de los bachilleres que hace votar a clases enteras. Madame Aubry concluye la velada bajo el retrato: los premios no hacen las obras, dice, les hacen un nombre — y a veces, una segunda vida." },
      ],
      gaps: [
        { options: ["rente", "randonnée", "rentrée"], answer: 2, why: "«Qui commence toujours en septembre»: la rentrée littéraire." },
        { options: ["parle", "parie", "part"], answer: 0, why: "«Au journal de vingt heures»: Francia entera habla del ganador." },
        { options: ["édifice", "édition", "édit"], answer: 1, why: "«Devient un fleuve»: la tirada inicial pequeña es la edición." },
        { options: ["pris", "prime", "prix"], answer: 2, why: "«Le Renaudot, le» premio de los bachilleres: el Goncourt des lycéens es un prix." },
        { options: ["nos", "nom", "nombre"], answer: 1, why: "«Et parfois, une seconde vie»: los premios dan a las obras un nombre." },
      ],
    },
  ],
};

