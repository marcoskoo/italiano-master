import type { CbClozeText } from "../../cambridge";

/* ═══ FR C1 · Cloze readings — 3 por unidad (inferencia léxica) ══════
   Metodología v9.12: el texto en francés lleva marcadores {1} {2}, etc.
   que el reproductor convierte en huecos; el estudiante deduce la
   palabra por el contexto. Campos `.it` = francés (lengua de estudio),
   `.es` = español. Escenarios C1: prépas et concours, Sorbonne, meetings,
   séminaires, Cité des sciences, préfecture, radio, agences, plateaux,
   ateliers d'écriture, salles des actes. Français de France, vouvoiement,
   tipografía con espacio antes de ? ! : ; y guillemets « ».           */

export const FR_CLOZE_C1: Record<string, CbClozeText[]> = {
  "fr-cu-c1-01": [
    {
      id: "cz-fr-c1-01-1", title: "L'atelier de méthodologie", titleEs: "El taller de metodología", minutes: 3,
      paragraphs: [
        { it: "Dans une prépa du onzième arrondissement, Madame Vasseur rend les premières synthèses de la saison. Le constat est sans appel : la plupart des copies sentent le {1} — des phrases entières recopiées des quatre documents, cousues bout à bout. « Résumer, c'est rapetisser un texte ; synthétiser, c'est reconstruire un raisonnement avec vos mots à vous », répète-t-elle devant une promotion silencieuse.", es: "En una prépa del distrito once, Madame Vasseur devuelve las primeras síntesis de la temporada. El diagnóstico es sin apelación: la mayoría de las copias huelen a parche — frases enteras copiadas de los cuatro documentos, cosidas cabo con cabo. «Resumir es empequeñecer un texto; sintetizar es reconstruir un razonamiento con sus propias palabras», repite ante una promoción silenciosa." },
        { it: "Puis elle détaille les trois leviers du métier : la {2} exacte (« révèlent » devient « mettent en évidence »), la nominalisation (« les budgets sont serrés » devient « l'étroitesse des budgets ») et le changement de {3} (« on a constaté une hausse » devient « une hausse a été constatée »). Elle conclut sur la règle d'or des concours : aucune citation de plus de dix mots d'affilée, sous peine de {4}, que le jury sanctionne sans hésiter. À la sortie, une candidate résume l'atelier en une {5} : leur pensée, mon style.", es: "Luego detalla las tres palancas del oficio: la sinonimia exacta («révèlent» se convierte en «mettent en évidence»), la nominalización («les budgets sont serrés» se convierte en «l'étroitesse des budgets») y el cambio de voz («on a constaté une hausse» se convierte en «une hausse a été constatée»). Concluye con la regla de oro de los concursos: ninguna cita de más de diez palabras seguidas, so pena de plagio, que el jurado sanciona sin dudar. A la salida, una candidata resume el taller en una frase: su pensamiento, mi estilo." },
      ],
      gaps: [
        { options: ["catalogue", "patchwork", "puzzle"], answer: 1, why: "«Phrases recopiées, cousues bout à bout»: un conjunto cosido de retales es un patchwork." },
        { options: ["synonymie", "biographie", "calligraphie"], answer: 0, why: "«Révèlent» devient «mettent en évidence»: cambiar una palabra por su equivalente exacta es la sinonimia." },
        { options: ["voix", "page", "titre"], answer: 0, why: "De «on a constaté» a «a été constatée»: la activa se vuelve pasiva, es el cambio de voz." },
        { options: ["succès", "repos", "plagiat"], answer: 2, why: "Citar más de diez palabras seguidas ya no es síntesis: es plagio, y el jurado lo sanciona." },
        { options: ["phrase", "paume", "paire"], answer: 0, why: "«Leur pensée, mon style» cabe en una frase: así resume la candidata el taller." },
      ],
    },
    {
      id: "cz-fr-c1-01-2", title: "Le jour de l'épreuve", titleEs: "El día de la prueba", minutes: 3,
      paragraphs: [
        { it: "Samedi matin, huit heures : la salle d'examen du concours d'attaché accueille deux cents candidats. Chacun reçoit un dossier de quatre textes sur le financement des {1} locales et une consigne d'une ligne. Pendant les cinq premières minutes, personne n'écrit : on repère les thèmes, on souligne les idées, on cherche le {2} qui permettra de croiser les documents au lieu de les résumer l'un après l'autre.", es: "Sábado por la mañana, ocho horas: la sala de examen del concurso de attaché acoge a doscientos candidatos. Cada uno recibe un dossier de cuatro textos sobre la financiación de las colectividades locales y una consigna de una línea. Durante los primeros cinco minutos nadie escribe: se localizan los temas, se subrayan las ideas, se busca el plan que permitirá cruzar los documentos en lugar de resumirlos uno tras otro." },
        { it: "Puis l'écriture commence, et les consignes reviennent comme une musique : ne jamais recopier plus de dix mots d'affilée, {3} chaque idée avec ses propres mots, respecter la longueur demandée. À onze heures, les copies partent vers les correcteurs. Dans le couloir, une candidate résume l'épreuve pour ceux qui attendent : « Penser avec les mots des autres, sans jamais écrire comme {4} » — et elle ajoute, souriante, que l'exercice ressemble à un test d'{5} intellectuelle autant qu'à une épreuve de style.", es: "Luego empieza la escritura, y las consignas vuelven como una música: no copiar nunca más de diez palabras seguidas, reformular cada idea con palabras propias, respetar la longitud pedida. A las once, las copias parten hacia los correctores. En el pasillo, una candidata resume la prueba para quienes esperan: «Pensar con las palabras de otros, sin escribir nunca como ellos» — y añade, sonriente, que el ejercicio parece un test de honestidad intelectual tanto como una prueba de estilo." },
      ],
      gaps: [
        { options: ["collectivités", "cuisines", "vacances"], answer: 0, why: "«Le financement des… locales»: el tema público del concurso son las colectividades territoriales." },
        { options: ["prix", "plan", "parking"], answer: 1, why: "Lo que permite «croiser les documents» en vez de resumirlos: la arquitectura, el plan." },
        { options: ["reformuler", "photographier", "commander"], answer: 0, why: "Las consignas piden no copiar y… cada idea con palabras propias: reformular." },
        { options: ["eux", "nous", "personne"], answer: 0, why: "«Penser avec les mots des autres, sans jamais écrire comme eux»: como ellos, los autores." },
        { options: ["honnêteté", "héritage", "horloge"], answer: 0, why: "La synthèse es «un exercice d'honnêteté intellectuelle»: un test de honestidad." },
      ],
    },
    {
      id: "cz-fr-c1-01-3", title: "Le correcteur et les dix mots", titleEs: "El corrector y las diez palabras", minutes: 3,
      paragraphs: [
        { it: "Dans son bureau de Lyon, un correcteur de concours ouvre sa trentième synthèse de la semaine. Le premier {1} est rapide : les copies qui sentent le patchwork partent immédiatement dans la pile des notes moyennes. Il cherche une qualité rare, l'autonomie de {2} — celle du candidat capable de reconstruire le raisonnement des auteurs sans jamais se cacher derrière eux.", es: "En su despacho de Lyon, un corrector de concursos abre su trigésima síntesis de la semana. La primera selección es rápida: las copias que huelen a parche van de inmediato a la pila de las notas medias. Busca una cualidad rara, la autonomía de pensamiento — la del candidato capaz de reconstruir el razonamiento de los autores sin esconderse nunca detrás de ellos." },
        { it: "Une copie l'arrête : face à la phrase « les collectivités manquent de moyens », le candidat a écrit « le sous-équipement des collectivités ». C'est la {3} parfaite : le verbe devient nom, la phrase de l'auteur disparaît. Une autre recopie douze mots d'affilée : c'est trop, la {4} des concours s'arrête à dix. En fin de journée, il note la {5} qu'il réserve aux rares copies qui pensent par elles-mêmes — la moyenne n'y suffira jamais.", es: "Una copia lo detiene: ante la frase «les collectivités manquent de moyens», el candidato ha escrito «le sous-équipement des collectivités». Es la nominalización perfecta: el verbo se hace nombre y la frase del autor desaparece. Otra copia doce palabras seguidas: es demasiado, la regla de los concursos se detiene en diez. Al final del día, anota la mención que reserva a las raras copias que piensan por sí mismas — la media nunca bastará." },
      ],
      gaps: [
        { options: ["tri", "repas", "voyage"], answer: 0, why: "Las copias se separan en pilas: la primera operación del corrector es la selección, el tri." },
        { options: ["route", "pensée", "chance"], answer: 1, why: "«Sans jamais se cacher derrière eux»: la cualidad buscada es la autonomía de pensamiento." },
        { options: ["négociation", "navigation", "nominalisation"], answer: 2, why: "«Le verbe devient nom»: la frase entera se pliega a un sustantivo, la nominalización." },
        { options: ["mode", "règle", "grève"], answer: 1, why: "Doce palabras seguidas son demasiadas: la regla de los concursos se detiene en diez." },
        { options: ["mention", "adresse", "amende"], answer: 0, why: "A las copias que piensan por sí mismas se reserva una distinción: la mención." },
      ],
    },
  ],

  "fr-cu-c1-02": [
    {
      id: "cz-fr-c1-02-1", title: "Le plan brouillon", titleEs: "El plan borroso", minutes: 3,
      paragraphs: [
        { it: "Amphithéâtre de la Sorbonne, cours de méthodologie : Monsieur Mercier rend les premières dissertations. À l'étudiant qui a répondu « non » à la question de la gratuité universitaire, il explique qu'un oui ou un non relève du {1}, pas de l'exercice : « Une dissertation ne répond pas, elle construit une {2} », écrit-il au tableau avant de rendre la copie.", es: "Anfiteatro de la Sorbona, clase de metodología: Monsieur Mercier devuelve las primeras dissertations. Al estudiante que ha respondido «no» a la pregunta de la gratuidad universitaria, le explica que un sí o un no pertenece al referéndum, no al ejercicio: «Una dissertation no responde: construye una problemática», escribe en la pizarra antes de devolver la copia." },
        { it: "La correction continue au tableau noir : le plan dialectique articule trois {3} — thèse, antithèse, synthèse — et chacun s'ouvre sur sa famille de connecteurs. « En premier lieu » et « force est de constater » servent la thèse ; « en revanche » et « toutefois » préparent la {4} ; « dès lors » et « en définitive » annoncent la synthèse, qui n'est pas un compromis mou mais un changement de {5}. À la fin du cours, la consigne tombe : problématisez !", es: "La corrección continúa en la pizarra: el plan dialéctico articula tres movimientos — tesis, antítesis, síntesis— y cada uno se abre con su familia de conectores. «En premier lieu» y «force est de constater» sirven a la tesis; «en revanche» y «toutefois» preparan el volteo; «dès lors» y «en définitive» anuncian la síntesis, que no es un compromiso blando sino un cambio de nivel. Al final de la clase cae la consigna: ¡problematizad!" },
      ],
      gaps: [
        { options: ["restaurant", "référendum", "romanesque"], answer: 1, why: "Un sí o un no es una votación: el profesor lo compara con un referéndum." },
        { options: ["pancarte", "pharmacie", "problématique"], answer: 2, why: "«Ne répond pas, elle construit»: lo que se construye es la problemática." },
        { options: ["mouvements", "monuments", "mécaniciens"], answer: 0, why: "Tesis, antítesis, síntesis: el plan dialéctico articula tres movimientos." },
        { options: ["bascule", "balançoire", "bague"], answer: 0, why: "«En revanche» y «toutefois» preparan el volteo hacia la antítesis: la bascule." },
        { options: ["niveau", "nom", "nombre"], answer: 0, why: "La synthèse no es un compromiso blando: cambia de nivel y abre otra pregunta." },
      ],
    },
    {
      id: "cz-fr-c1-02-2", title: "Aux origines : les disputationes", titleEs: "En los orígenes: las disputationes", minutes: 3,
      paragraphs: [
        { it: "Pour comprendre la dissertation française, il faut remonter au Moyen Âge : dans les salles de la Sorbonne médiévale, les étudiants défendaient une {1} en latin devant les maîtres, puis attaquaient celle de leur adversaire. Ces joutes orales, appelées disputationes, imposaient un ordre strict : poser la question, {2} la thèse, réfuter l'objection — un combat de l'esprit, mais un combat ordonné.", es: "Para comprender la dissertation francesa hay que remontarse a la Edad Media: en las salas de la Sorbona medieval, los estudiantes defendían una tesis en latín ante los maestros y luego atacaban la de su adversario. Aquellas justas orales, llamadas disputationes, imponían un orden estricto: plantear la cuestión, sostener la tesis, refutar la objeción — un combate del espíritu, pero un combate ordenado." },
        { it: "Le plan dialectique moderne hérite de ce {3} réglé : thèse, antithèse, synthèse ne sont pas trois opinions mais trois moments d'une même pensée. Ses détracteurs la disent scolaire, « une tour Eiffel de la pensée, rigide mais élégante » ; ses défenseurs répondent qu'elle apprend à penser {4} soi-même — qui n'a jamais écrit une antithèse à laquelle il ne croyait pas ? En France, on gagne le droit de rompre les règles après avoir su les {5}.", es: "El plan dialéctico moderno hereda ese combate regulado: tesis, antítesis, síntesis no son tres opiniones sino tres momentos de un mismo pensamiento. Sus detractores la dicen escolar, «una torre Eiffel del pensamiento, rígida pero elegante»; sus defensores responden que enseña a pensar contra uno mismo — ¿quién no ha escrito nunca una antítesis en la que no creía? En Francia, se gana el derecho a romper las reglas después de haber sabido defenderlas." },
      ],
      gaps: [
        { options: ["tente", "tasse", "thèse"], answer: 2, why: "Se defiende ante los maestros y luego se ataca la del adversario: una tesis." },
        { options: ["soutenir", "sauter", "suspendre"], answer: 0, why: "El orden estricto: plantear la cuestión, sostener la tesis, refutar la objeción." },
        { options: ["combat", "marché", "couloir"], answer: 0, why: "Las disputationes eran «joutes», un combate del espíritu: el plan hereda ese combate regulado." },
        { options: ["sans", "pour", "contre"], answer: 2, why: "«Qui n'a jamais écrit une antithèse à laquelle il ne croyait pas?»: pensar contra uno mismo." },
        { options: ["oublier", "défendre", "dessiner"], answer: 1, why: "Se gana el derecho a romper las reglas después de saber defenderlas." },
      ],
    },
    {
      id: "cz-fr-c1-02-3", title: "Une introduction en trois gestes", titleEs: "Una introducción en tres gestos", minutes: 2,
      paragraphs: [
        { it: "Camille, étudiante en master, rédige l'introduction de sa dissertation sur la gratuité universitaire. Premier geste, l'amorce : un {1} ou un fait frappant qui installe le sujet — chaque rentrée, la question des frais d'inscription relance un débat ancien. Deuxième geste, la problématique : elle ne {2} pas la question, elle la déplace vers un terrain plus fertile.", es: "Camille, estudiante de máster, redacta la introducción de su dissertation sobre la gratuidad universitaria. Primer gesto, el amorce: una constatación o un hecho llamativo que instala el tema — cada vuelta al curso, la cuestión de las tasas de matrícula relanza un debate antiguo. Segundo gesto, la problemática: no repite la pregunta, la desplaza hacia un terreno más fértil." },
        { it: "Troisième geste, l'annonce du plan : « Nous verrons d'abord que la gratuité protège l'égalité d'accès, avant de montrer qu'elle redistribue mal les efforts ». Le plan se dit au {3}, avec « avant de » suivi de l'{4}. Interdit absolu, rayé deux fois dans son manuel : « je vais vous parler de » — ce {5} personnel ne pénètre jamais dans la dissertation.", es: "Tercer gesto, el anuncio del plan: «Veremos primero que la gratuidad protege la igualdad de acceso, antes de mostrar que redistribuye mal los esfuerzos». El plan se dice en presente, con «avant de» seguido del infinitivo. Prohibición absoluta, tachada dos veces en su manual: «je vais vous parler de» — ese metadiscurso personal no entra jamás en la dissertation." },
      ],
      gaps: [
        { options: ["constat", "chanson", "colis"], answer: 0, why: "El amorce instala el tema con una constatación o un hecho llamativo." },
        { options: ["résout", "répète", "range"], answer: 1, why: "La problemática no repite la pregunta: la desplaza a un terreno más fértil." },
        { options: ["passé", "présent", "futur"], answer: 1, why: "El plan se anuncia en presente: «Nous verrons d'abord que…»." },
        { options: ["adverbe", "impératif", "infinitif"], answer: 2, why: "«Avant de» va seguido del infinitivo: avant de montrer que…" },
        { options: ["métadiscours", "météore", "métier"], answer: 0, why: "«Je vais vous parler de» es metadiscurso personal, prohibido en la dissertation." },
      ],
    },
  ],

  "fr-cu-c1-03": [
    {
      id: "cz-fr-c1-03-1", title: "La répétition de Montreuil", titleEs: "El ensayo de Montreuil", minutes: 3,
      paragraphs: [
        { it: "Salle des fêtes de Montreuil, veille du lancement de campagne : Madame Berr relit le discours que vous venez d'écrire. Le texte est solide, chiffré, honnête — et {1}. « Un discours, ce n'est pas un programme : c'est une musique », soupire-t-elle en prenant un crayon. Dans la marge, elle écrit un seul mot : « anaphore ».", es: "Salón de actos de Montreuil, víspera del lanzamiento de campaña: Madame Berr relee el discurso que acabas de escribir. El texto es sólido, cuantificado, honesto… y plano. «Un discurso no es un programa: es una música», suspira mientras coge un lápiz. En el margen escribe una sola palabra: «anáfora»." },
        { it: "Vous corrigez dans la nuit : « Pour que la ville respire, je m'engage. Pour que la ville avance, je m'engage. » À la troisième {2}, la salle murmurera avec l'oratrice. Elle ajoute une {3} — « une rue, un quartier, une ville entière » — et une seule {4} rhétorique, placée au sommet : « Voulez-vous d'une ville qui dort ? ». Le dernier mot, « Marchons ensemble », devra rester dans l'{5} après les applaudissements.", es: "Corriges de noche: «Para que la ciudad respire, me comprometo. Para que la ciudad avance, me comprometo». A la tercera repetición, la sala murmurará con la oradora. Ella añade una gradación — «una calle, un barrio, una ciudad entera»— y una sola interrogación retórica, colocada en la cima: «¿Queréis una ciudad que duerme?». La última palabra, «Marchemos juntos», deberá quedar en el oído después de los aplausos." },
      ],
      gaps: [
        { options: ["pesé", "plat", "poli"], answer: 1, why: "«Ce n'est pas un programme, c'est une musique»: le falta música, es plano." },
        { options: ["révision", "récession", "répétition"], answer: 2, why: "La anáfora repite la misma apertura: a la tercera repetición la sala murmura." },
        { options: ["gradation", "gratification", "gravitation"], answer: 0, why: "«Une rue, un quartier, une ville entière»: tres escalones crecientes, la gradación." },
        { options: ["quotation", "quantité", "question"], answer: 2, why: "«Voulez-vous d'une ville qui dort?»: una sola pregunta retórica en la cima." },
        { options: ["oreille", "armoire", "ascenseur"], answer: 0, why: "La última palabra debe quedar en el oído después de los aplausos." },
      ],
    },
    {
      id: "cz-fr-c1-03-2", title: "La salle qui murmure", titleEs: "La sala que murmura", minutes: 3,
      paragraphs: [
        { it: "Le soir du meeting, la salle municipale est comble. Madame Berr monte à la {1} sous les applaudissements, pose ses notes qu'elle ne regardera presque jamais. Elle commence doucement, sur le ton de la conversation ; puis arrive la première vague d'anaphores, et cent voix se mettent à {2} les fins de phrases avec elle.", es: "La noche del meeting, el salón municipal está lleno. Madame Berr sube a la tribuna entre aplausos y deja sus notas, que casi no mirará. Empieza suave, en tono de conversación; luego llega la primera ola de anáforas y cien voces empiezan a murmurar los finales de frase con ella." },
        { it: "La gradation monte : du particulier au {3}, du fait au principe. Arrive la question rhétorique, une seule, en {4} solennelle : « Voulez-vous d'une ville qui dort ? » — le silence d'abord, puis les bravos. Elle referme sur un appel à l'action, « Marchons ensemble », et la dernière syllabe reste dans l'oreille, comme promis à la répétition de la veille. Dans les coulisses, le jeune chargé du texte savoure son {5} : la musique a pris.", es: "La gradación sube: de lo particular a lo general, del hecho al principio. Llega la pregunta retórica, una sola, con inversión solemne: «¿Queréis una ciudad que duerme?» — primero el silencio, luego los vítores. Cierra con una llamada a la acción, «Marchemos juntos», y la última sílaba queda en el oído, como prometió en el ensayo de la víspera. Entre bastidores, el joven redactor del texto saborea su placer: la música ha prendido." },
      ],
      gaps: [
        { options: ["tour", "tribune", "table"], answer: 1, why: "Se sube a hablar en un meeting: la tribuna." },
        { options: ["murmurer", "maudire", "mâcher"], answer: 0, why: "Con la anáfora la sala acompaña a la oradora: murmura los finales de frase." },
        { options: ["général", "générique", "générateur"], answer: 0, why: "«Du particulier au…, du fait au principe»: la gradación sube hacia lo general." },
        { options: ["invasion", "inversion", "isolation"], answer: 1, why: "«Voulez-vous…?» es la inversión solemne del estilo formal." },
        { options: ["plaisir", "préavis", "pouvoir"], answer: 0, why: "El texto funcionó y la sala respondió: el redactor saborea su placer." },
      ],
    },
    {
      id: "cz-fr-c1-03-3", title: "L'appel du 18 juin", titleEs: "La llamada del 18 de junio", minutes: 3,
      paragraphs: [
        { it: "« La France a perdu une bataille, mais la France n'a pas perdu la guerre ! » Ces phrases de l'appel du 18 juin 1940, des générations d'écoliers français les ont {1} par cœur. Court, martelé, construit sur des {2} et des antithèses, le texte radiophonique de De Gaulle montre ce que la rhétorique peut faire d'une voix seule.", es: "«Francia ha perdido una batalla, pero Francia no ha perdido la guerra». Generaciones de escolares franceses han aprendido de memoria esas frases del appel du 18 juin de 1940. Corto, martilleado, construido sobre repeticiones y antítesis, el texto radiofónico de De Gaulle muestra lo que la retórica puede hacer con una voz sola." },
        { it: "Les manuels de communication politique en tirent la même leçon : la répétition force l'adhésion, la triade rythme la fin de chaque vague, et le futur d'engagement vaut mieux que le {3}, qui sonne comme une promesse tiède. Des meetings de la Troisième République aux discours {4} d'aujourd'hui, la règle n'a pas changé : une musique, des répétitions, une triade — et le dernier mot qui {5} dans l'oreille.", es: "Los manuales de comunicación política sacan la misma lección: la repetición fuerza la adhesión, la tríada marca el ritmo del final de cada oleada, y el futuro de compromiso vale más que el condicional, que suena a promesa tibia. De los meetings de la Tercera República a los discursos televisados de hoy, la regla no ha cambiado: una música, repeticiones, una tríada — y la última palabra que queda en el oído." },
      ],
      gaps: [
        { options: ["apprises", "achetées", "arrosées"], answer: 0, why: "Los escolares franceses recitan esas frases: las han aprendido de memoria." },
        { options: ["réticences", "réticulations", "répétitions"], answer: 2, why: "«Court, martelé»: el texto está construido sobre repeticiones y antítesis." },
        { options: ["conditionnel", "conditionnement", "condiment"], answer: 0, why: "El futuro de compromiso vale más que el condicional, que suena a promesa tibia." },
        { options: ["taillés", "télévisés", "tarifés"], answer: 1, why: "De los meetings históricos a los discursos televisados de hoy: la regla sigue igual." },
        { options: ["reste", "ronfle", "retombe"], answer: 0, why: "La última palabra queda en el oído: elle reste dans l'oreille." },
      ],
    },
  ],

  "fr-cu-c1-04": [
    {
      id: "cz-fr-c1-04-1", title: "Le séminaire de Monsieur Aubry", titleEs: "El seminario de Monsieur Aubry", minutes: 3,
      paragraphs: [
        { it: "Séminaire de linguistique, amphithéâtre à moitié plein : Monsieur Aubry projette un {1} du Monde — « le ministre serait sur le point de démissionner » — et interroge la salle. Conditionnel du futur ? Passé ? Aveu ? Un étudiant hasarde la bonne piste : le journaliste ne sait pas, mais il veut le dire {2}.", es: "Seminario de lingüística, anfiteatro medio vacío: Monsieur Aubry proyecta un titular de Le Monde — «el ministro estaría a punto de dimitir»— e interroga a la sala. ¿Condicional del futuro? ¿Pasado? ¿Confesión? Un estudiante arriesga la pista correcta: el periodista no lo sabe, pero quiere decirlo igualmente." },
        { it: "C'est le conditionnel d'information non {3}, explique le directeur : il rapporte un dire sans le certifier, et le journaliste se couvre. Puis la séance s'élève vers les sommets de la langue : le subjonctif plus-que-parfait — « qu'il eût compris » — que plus un natif ne conjugue, survit chez Proust comme marque de {4} stylistique. « La modalité, conclut Aubry en refermant ses notes, est la cuisine de l'{5} : chaque langue dose son sel. »", es: "Es el condicional de información no confirmada, explica el director: reporta un decir sin certificarlo, y el periodista se cubre. Luego la sesión se eleva hacia las cumbres de la lengua: el subjuntivo pluscuamperfecto — «qu'il eût compris»— que ya ningún nativo conjuga, sobrevive en Proust como marca de altura estilística. «La modalidad, concluye Aubry cerrando sus notas, es la cocina de lo incierto: cada lengua dosifica su sal.»" },
      ],
      gaps: [
        { options: ["titre", "tapis", "tonneau"], answer: 0, why: "«Le ministre serait…» es un titular de periódico: un titre." },
        { options: ["quand même", "à voix basse", "jamais"], answer: 0, why: "No lo sabe pero quiere decirlo igualmente: quand même." },
        { options: ["condensée", "confirmée", "concédée"], answer: 1, why: "Reporta un decir sin certificarlo: condicional de información no confirmada." },
        { options: ["hauteur", "hasard", "humeur"], answer: 0, why: "El subjuntivo pluscuamperfecto sobrevive como marca de altura estilística." },
        { options: ["incertain", "inconnu", "incident"], answer: 0, why: "«Chaque langue dose son sel»: la modalidad es la cocina de lo incierto." },
      ],
    },
    {
      id: "cz-fr-c1-04-2", title: "Le conditionnel qui protège", titleEs: "El condicional que protege", minutes: 3,
      paragraphs: [
        { it: "Dans la rédaction d'un quotidien parisien, la règle est tacite mais ferme : une information qui ne repose que sur une {1} non révélée se publie au conditionnel. « Le directeur serait parti hier soir » signifie : quelqu'un l'a dit, le journal ne le {2} pas. Les manuels de style appellent ce tour « conditionnel d'altérité » : la parole d'un autre, portée sans aval.", es: "En la redacción de un diario parisino, la regla es tácita pero firme: una información que se apoya solo en una fuente no revelada se publica en condicional. «El director habría partido anoche» significa: alguien lo ha dicho, el diario no lo garantiza. Los manuales de estilo llaman a este giro «condicional de alteridad»: la palabra de otro, transmitida sin aval." },
        { it: "Face aux réseaux sociaux, où tout s'affirme au {3}, ce conditionnel joue le rôle de ceinture de sécurité : il agace les pressés, mais il protège les lecteurs. Les séminaires universitaires l'étudient comme un cas d'école — la {4} appliquée à l'éthique de l'information. Le jour où un journal affirme au présent ce qu'il ignore, il cesse d'{5} : il affirme, et ce n'est pas le même métier.", es: "Frente a las redes sociales, donde todo se afirma en presente, este condicional hace de cinturón de seguridad: irrita a los apresurados, pero protege a los lectores. Los seminarios universitarios lo estudian como caso de escuela — la gramática aplicada a la ética de la información. El día en que un diario afirme en presente lo que ignora, deja de informar: afirma, y no es el mismo oficio." },
      ],
      gaps: [
        { options: ["source", "sorcière", "sonnette"], answer: 0, why: "Información apoyada en una fuente no revelada: la source." },
        { options: ["garde", "garantit", "goûte"], answer: 1, why: "«Quelqu'un l'a dit, le journal ne le… pas»: el diario no lo garantiza." },
        { options: ["passé", "présent", "passif"], answer: 1, why: "En las redes todo se afirma en presente, sin protección modal." },
        { options: ["géographie", "gastronomie", "grammaire"], answer: 2, why: "Los seminarios lo estudian como gramática aplicada a la ética de la información." },
        { options: ["informer", "inspirer", "inventer"], answer: 0, why: "Al afirmar en presente lo que ignora, el diario deja de informar: afirma." },
      ],
    },
    {
      id: "cz-fr-c1-04-3", title: "Proust et le subjonctif disparu", titleEs: "Proust y el subjuntivo desaparecido", minutes: 3,
      paragraphs: [
        { it: "« Il était peu probable qu'il eût compris la nuance » : dans la Recherche, ce subjonctif plus-que-parfait {1} au lecteur d'aujourd'hui à un vestige d'un autre siècle. Formé de l'imparfait du subjonctif — qu'il fût, qu'il eût —, il installe la subjectivité au {2} : doute, souhait, regret. Personne ne le conjugue plus à l'oral ; personne ne devrait l'y conjuguer.", es: "«Era poco probable que hubiera comprendido el matiz»: en la Recherche, ese subjuntivo pluscuamperfecto se parece, para el lector de hoy, a un vestigio de otro siglo. Formado con el imperfecto de subjuntivo — qu'il fût, qu'il eût—, instala la subjetividad en el pasado: duda, deseo, pesar. Nadie lo conjuga ya en la conversación; nadie debería conjugarlo allí." },
        { it: "Ses cousins survivent à l'écrit : le conditionnel passé deuxième forme (« il eût fallu »), la {3} littéraire après « nul ne » ou « à peine », les inversions solennelles. Le lecteur C1 n'a pas besoin de les {4} : il doit les reconnaître pour ne pas broncher. À l'oral, tout ce monde s'est replié sur des formes plus simples — « qu'il ait compris », « il aurait fallu » — et la {5} fait bien les choses.", es: "Sus primos sobreviven por escrito: el condicional pasado de segunda forma («il eût fallu»), la negación literaria tras «nul ne» o «à peine», las inversiones solemnes. El lector C1 no necesita conjugarlos: debe reconocerlos para no pestañear. En la conversación, todo ese mundo se ha replegado hacia formas más simples — «qu'il ait compris», «il aurait fallu»— y la lengua hace bien las cosas." },
      ],
      gaps: [
        { options: ["résume", "ressemble", "réclame"], answer: 1, why: "Para el lector de hoy es como un vestigio de otro siglo: se parece a." },
        { options: ["présent", "passé", "futur"], answer: 1, why: "Duda, deseo, pesar situados en el pasado: la subjetividad al pasado." },
        { options: ["nomination", "navigation", "négation"], answer: 2, why: "«Nul ne» y «à peine» llevan la negación literaria, con su ne de estilo." },
        { options: ["collectionner", "conjuguer", "critiquer"], answer: 1, why: "No hay que conjugarlas: basta reconocerlas al leer sin pestañear." },
        { options: ["langue", "ligne", "louange"], answer: 0, why: "Las formas simples reemplazan a las literarias: la lengua hace bien las cosas." },
      ],
    },
  ],

  "fr-cu-c1-05": [
    {
      id: "cz-fr-c1-05-1", title: "La répétition à la Villette", titleEs: "El ensayo en La Villette", minutes: 3,
      paragraphs: [
        { it: "Samedi matin, Cité des sciences : Thomas, responsable de la médiation, écoute votre répétition sur les océans. Le texte est rigoureux — trop : « Vous écrivez pour vos {1}, pas pour un public familial. » Il pointe la phrase de laboratoire : « L'acidification des océans est accentuée par l'absorption du CO2 » — passive, nominalisation, aucun {2} vivant.", es: "Sábado por la mañana, Cité des sciences: Thomas, responsable de mediación, escucha tu ensayo sobre los océanos. El texto es riguroso — demasiado—: «Usted escribe para sus pares, no para un público familiar». Señala la frase de laboratorio: «La acidificación de los océanos se ve acentuada por la absorción del CO2» — pasiva, nominalización, ningún ser vivo." },
        { it: "La version de conférence arrive, toute simple : « L'océan absorbe notre CO2 et, du coup, il s'acidifie. » L'{3} redevient visible, la phrase se met à respirer. Les mots techniques resteront, mais comme des {4} : on définit une fois, en pleine lumière, puis le terme devient un raccourci. « Science exacte, phrase habitée », résume Thomas avant l'arrivée du {5} du samedi.", es: "Llega la versión de conferencia, sencillísima: «El océano absorbe nuestro CO2 y, a consecuencia, se acidifica». El agente vuelve a ser visible, la frase empieza a respirar. Las palabras técnicas se quedan, pero como balizas: se define una vez, con toda claridad, y luego el término se vuelve un atajo. «Ciencia exacta, frase habitada», resume Thomas antes de la llegada del público del sábado." },
      ],
      gaps: [
        { options: ["pairs", "parents", "papiers"], answer: 0, why: "El texto es demasiado riguroso: está escrito para colegas, los pares." },
        { options: ["avoir", "être", "faire"], answer: 1, why: "Pasiva y nominalización esconden al agente: ningún ser vivant en la frase." },
        { options: ["agent", "agenda", "auteur"], answer: 0, why: "«L'océan absorbe»: quien actúa vuelve a escena, el agente es visible." },
        { options: ["bagages", "balises", "baguettes"], answer: 1, why: "Se definen una vez y luego marcan el camino: las nominalizaciones son balizas." },
        { options: ["public", "patron", "poulain"], answer: 0, why: "Thomas corrige antes de que llegue la audiencia del sábado: el público." },
      ],
    },
    {
      id: "cz-fr-c1-05-2", title: "Traduire sans trahir", titleEs: "Traducir sin traicionar", minutes: 3,
      paragraphs: [
        { it: "La vulgarisation scientifique est un art français ancien : dès 1686, Fontenelle expliquait la pluralité des mondes à une {1}, sous forme de dialogues galants — l'astronomie déguisée en conversation. En 1937, le physicien Jean Perrin, prix Nobel, inaugurait le Palais de la découverte avec une idée audacieuse : des expériences en {2} devant les visiteurs.", es: "La divulgación científica es un arte francés antiguo: ya en 1686 Fontenelle explicaba la pluralidad de los mundos a una marquesa en forma de diálogos galantes — la astronomía disfrazada de conversación. En 1937, el físico Jean Perrin, premio Nobel, inauguraba el Palais de la découverte con una idea audaz: experimentos en directo ante los visitantes." },
        { it: "En 1986 naissait la Cité des sciences, dans le parc de La Villette ; les cafés des sciences et les fêtes annuelles ont prolongé l'aventure. La consigne du métier se transmet de génération en {3} : « Vulgariser, c'est traduire sans {4} ». Le public a le droit de comprendre ; la science, le devoir de se faire {5}. Deux siècles et demi plus tard, la promesse tient toujours.", es: "En 1986 nacía la Cité des sciences, en el parque de La Villette; los cafés des sciences y las fiestas anuales prolongaron la aventura. La consigna del oficio se transmite de generación en generación: «Divulgar es traducir sin traicionar». El público tiene derecho a entender; la ciencia, el deber de hacerse clara. Dos siglos y medio después, la promesa sigue en pie." },
      ],
      gaps: [
        { options: ["marquise", "marchande", "magistrate"], answer: 0, why: "Fontenelle explicaba los mundos a una marquesa en diálogos galantes." },
        { options: ["détail", "direct", "détresse"], answer: 1, why: "Experimentos delante de los visitantes: en directo, como en el Palais de la découverte." },
        { options: ["génération", "géographie", "général"], answer: 0, why: "La consigna se transmite de generación en generación." },
        { options: ["taire", "tomber", "trahir"], answer: 2, why: "«Vulgariser, c'est traduire sans…»: sin traicionar." },
        { options: ["claire", "courte", "chère"], answer: 0, why: "La ciencia tiene el deber de hacerse clara." },
      ],
    },
    {
      id: "cz-fr-c1-05-3", title: "Le cycle de l'eau expliqué", titleEs: "El ciclo del agua explicado", minutes: 2,
      paragraphs: [
        { it: "Imaginez une flaque qui disparaît au soleil : l'eau passe de l'état liquide à l'état gazeux, c'est l'{1}. Plus haut, la vapeur se refroidit et redevient gouttelettes : la {2}. Quand les gouttes grossissent, elles tombent : les précipitations. Trois noms savants, un seul voyage — celui d'une goutte qui monte, flotte et retombe.", es: "Imagina un charco que desaparece al sol: el agua pasa del estado líquido al estado gaseoso, es la evaporación. Más arriba, el vapor se enfría y vuelve a ser gotitas: la condensación. Cuando las gotas engordan, caen: las precipitaciones. Tres nombres sabios, un solo viaje — el de una gota que sube, flota y vuelve a caer." },
        { it: "En conférence, la règle d'or de la médiation ne change jamais : définir chaque terme une seule fois, en pleine {3}, avec une image ; puis le réutiliser comme un {4} qui évite de refaire la phrase. Ce phénomène est accéléré par le réchauffement — ou, pour le dire autrement : plus il fait chaud, plus l'eau s'{5}. Le cycle continue, et le climat, lui, prend note.", es: "En conferencia, la regla de oro de la mediación no cambia nunca: definir cada término una sola vez, con toda claridad, con una imagen; y luego reutilizarlo como un atajo que evita rehacer la frase. Este fenómeno se ve acelerado por el calentamiento — o, para decirlo de otro modo: cuanto más calor, más agua se va volando. El ciclo continúa, y el clima toma nota." },
      ],
      gaps: [
        { options: ["évasion", "évaporation", "évaluation"], answer: 1, why: "El agua pasa de líquido a gas: la evaporación." },
        { options: ["condensation", "condamnation", "confusion"], answer: 0, why: "El vapor se enfría y vuelve a ser gotitas: la condensación." },
        { options: ["marge", "coulisse", "lumière"], answer: 2, why: "Definir en pleine lumière: con toda claridad." },
        { options: ["raccourci", "rail", "rideau"], answer: 0, why: "El término definido ahorra frases: funciona como atajo." },
        { options: ["envole", "endort", "enlève"], answer: 0, why: "Cuanto más calor, más agua se va: s'envole." },
      ],
    },
  ],

  "fr-cu-c1-06": [
    {
      id: "cz-fr-c1-06-1", title: "Trois constats sur la vidéo", titleEs: "Tres constataciones en el vídeo", minutes: 3,
      paragraphs: [
        { it: "Université populaire, après la répétition générale : Inès fait repasser la {1} de votre conférence d'essai. Premier constat : vous parlez trop vite. Deuxième constat : vous ne respirez jamais. Troisième constat, le pire : votre première {2} est un formulaire — « dans cette présentation, nous allons évoquer… » — et la salle a déjà baissé les yeux.", es: "Universidad popular, después del ensayo general: Inès hace repasar el vídeo de tu conferencia de prueba. Primera constatación: hablas demasiado rápido. Segunda: no respiras nunca. Tercera, la peor: tu primera frase es un formulario — «en esta presentación vamos a evocar…»— y la sala ya bajó la mirada." },
        { it: "Le remède tient en une liste. Une {3} qui réveille : une anecdote, un chiffre étonnant, une question. Un plan qui se {4} comme un voyage — « d'abord, je vous emmène au Japon ; ensuite, on revient en France » — avec des verbes de déplacement. Et des pauses de deux secondes avant chaque idée clé, parce que le silence, conclut-elle en éteignant l'écran, est la ponctuation de l'{5}.", es: "El remedio cabe en una lista. Un gancho que despierte: una anécdota, una cifra sorprendente, una pregunta. Un plan que se cuente como un viaje — «primero, os llevo a Japón; después, volvemos a Francia»— con verbos de desplazamiento. Y pausas de dos segundos antes de cada idea clave, porque el silencio, concluye apagando la pantalla, es la puntuación del oral." },
      ],
      gaps: [
        { options: ["vague", "vidéo", "violette"], answer: 1, why: "Inès repasa la grabación del ensayo: el vídeo." },
        { options: ["fiche", "fable", "phrase"], answer: 2, why: "«Dans cette présentation…» es la primera frase: un formulario." },
        { options: ["accroche", "annonce", "accolade"], answer: 0, why: "Anécdota, cifra o pregunta que despierta: el gancho, l'accroche." },
        { options: ["répare", "raconte", "récite"], answer: 1, why: "El plan en conferencia se narra como un viaje: se cuenta." },
        { options: ["oral", "oralement", "orage"], answer: 0, why: "«Le silence est la ponctuation de l'oral»: del discurso hablado." },
      ],
    },
    {
      id: "cz-fr-c1-06-2", title: "La leçon inaugurale", titleEs: "La lección inaugural", minutes: 3,
      paragraphs: [
        { it: "Au Collège de France, fondé en 1530, on vient écouter des savants parler en public, gratuitement — « la science en train de se faire », dit la devise. Chaque année, les {1} inaugurales attirent un public curieux : la tribune y ressemble à un théâtre, et la leçon d'un grand professeur s'y joue comme une {2} attendue.", es: "En el Collège de France, fundado en 1530, se va a escuchar a sabios hablar en público, gratis — «la ciencia en curso de hacerse», dice la divisa. Cada año, las lecciones inaugurales atraen a un público curioso: la tribuna se parece allí a un teatro y la lección de un gran profesor se representa como una función esperada." },
        { it: "La tradition des universités {3}, nées à la fin du XIXe siècle, a ajouté la convivialité : on discute après, autour d'un café. Les cafés philo ont suivi, puis les TEDx. La technologie change, la {4} reste. Et pour l'orateur français, une règle non écrite traverse les siècles : la conférence est un acte de {5} — on donne du temps, de l'attention, du silence.", es: "La tradición de las universidades populares, nacidas a finales del siglo XIX, añadió la sociabilidad: se discute después, alrededor de un café. Los cafés philo siguieron, luego los TEDx. La tecnología cambia, la tribuna permanece. Y para el orador francés, una regla no escrita cruza los siglos: la conferencia es un acto de generosidad — se da tiempo, se da atención, se da silencio." },
      ],
      gaps: [
        { options: ["leçons", "lessives", "levées"], answer: 0, why: "Cada año atraen al público las lecciones inaugurales del Collège de France." },
        { options: ["pièce", "pause", "piste"], answer: 0, why: "La tribuna se parece a un teatro: la lección se juega como una función." },
        { options: ["populaires", "peuplées", "portables"], answer: 0, why: "Las universidades populares añadieron la sociabilidad al saber." },
        { options: ["télévision", "tribune", "tradition"], answer: 1, why: "La tecnología cambia, pero la tribuna permanece." },
        { options: ["génie", "générosité", "géographie"], answer: 1, why: "Se da tiempo, atención y silencio: la conferencia es un acto de generosidad." },
      ],
    },
    {
      id: "cz-fr-c1-06-3", title: "Le soir de la conférence", titleEs: "La noche de la conferencia", minutes: 3,
      paragraphs: [
        { it: "Dix-neuf heures trente, université populaire : le public s'installe et vous attendez en coulisses le {1} qui vous fera monter. Vous respirez deux secondes, comme convenu avec la coach. Première phrase : « Savez-vous combien de temps nous passons à chercher nos clés ? » — la salle relève la {2}, réveillée d'emblée.", es: "Diecinueve treinta, universidad popular: el público se instala y tú esperas entre bastidores la señal que te hará subir. Respiras dos segundos, como acordaste con la coach. Primera frase: «¿Saben cuánto tiempo pasamos buscando nuestras llaves?» — la sala levanta la cabeza, despierta desde el principio." },
        { it: "Le plan se déroule en trois mouvements narrés : le Japon d'abord, la France ensuite, le secret enfin. Devant l'idée clé, vous posez une {3} de deux secondes — le silence fait son travail, personne ne tousse. La petite blague, elle, tombe un peu à plat : vous enchaînez sans {4}, comme prévu, et personne ne s'en offusque. Aux questions, une auditrice résume la soirée d'un sourire : « Merci d'avoir pris votre {5}. »", es: "El plan se despliega en tres movimientos narrados: primero Japón, después Francia, por último el secreto. Ante la idea clave, dejas una pausa de dos segundos — el silencio hace su trabajo, nadie tose. La pequeña broma cae algo plana: encadenas sin comentario, como estaba previsto, y nadie se ofende. En el turno de preguntas, una oyente resume la velada con una sonrisa: «Gracias por tomarse su tiempo.»" },
      ],
      gaps: [
        { options: ["signal", "silence", "sketch"], answer: 0, why: "Esperas entre bastidores lo que te hará subir: la señal." },
        { options: ["tête", "tige", "table"], answer: 0, why: "La sala despierta con la pregunta: levanta la cabeza." },
        { options: ["photo", "pause", "phrase"], answer: 1, why: "Dos segundos de silencio antes de la idea clave: la pausa." },
        { options: ["commentaire", "courage", "collant"], answer: 0, why: "Si el chiste cae plano, se encadena sin comentario." },
        { options: ["temps", "train", "thé"], answer: 0, why: "«Merci d'avoir pris votre…»: gracias por tomarse su tiempo." },
      ],
    },
  ],

  "fr-cu-c1-07": [
    {
      id: "cz-fr-c1-07-1", title: "La lettre à la préfecture", titleEs: "La carta a la prefectura", minutes: 3,
      paragraphs: [
        { it: "Au comptoir d'une association d'aide aux étrangers, Madame Lefèvre parcourt votre premier jet de lettre à la préfecture. Elle raye « je voudrais rester en France » et écrit, sous le titre « Objet », la formule canonique : « Demande de {1} du titre de séjour — étudiant ». Le style administratif ne raconte pas une {2} : il nomme un dossier.", es: "En el mostrador de una asociación de ayuda a extranjeros, Madame Lefèvre recorre tu primer borrador de carta a la prefectura. Tacha «quisiera quedarme en Francia» y escribe, bajo el título «Objet», la fórmula canónica: «Solicitud de renovación del título de estancia — estudiante». El estilo administrativo no cuenta una historia: nombra un expediente." },
        { it: "Puis elle dicte les rituels : « Je me permets de vous adresser la {3} demande », « Je vous prie de bien vouloir m'accorder un {4} », « Vous trouverez ci-joint les pièces justificatives ». Interdits absolus : « pouvez-vous », « est-ce que » — l'administration n'est pas un copain. Le tout se referme sur un remerciement par {5}, même si l'on sait que la réponse prendra des mois.", es: "Luego dicta los rituales: «Me permito dirigirle la presente solicitud», «Le ruego que tenga a bien concederme una entrevista», «Encontrará adjunta la documentación justificativa». Prohibiciones absolutas: «pouvez-vous», «est-ce que» — la administración no es un colega. Todo se cierra con un agradecimiento por adelantado, aunque se sepa que la respuesta tardará meses." },
      ],
      gaps: [
        { options: ["renouvellement", "remplacement", "reniement"], answer: 0, why: "El título de estancia que expira se renueva: solicitud de renovación." },
        { options: ["histoire", "horaire", "hirondelle"], answer: 0, why: "El estilo administrativo nombra el expediente, no cuenta una historia." },
        { options: ["pressée", "présente", "précieuse"], answer: 1, why: "«La présente demande»: el presente solemne del estilo administrativo." },
        { options: ["entretien", "entracte", "entrepôt"], answer: 0, why: "Se pide que concedan una entrevista: un entretien." },
        { options: ["avance", "arrière", "aparté"], answer: 0, why: "Se agradece por adelantado: remerciement par avance." },
      ],
    },
    {
      id: "cz-fr-c1-07-2", title: "La file de sept heures", titleEs: "La cola de las siete", minutes: 3,
      paragraphs: [
        { it: "Sept heures du matin, devant la préfecture : la {1} s'allonge sur le trottoir, dossiers sous le bras, café à la main. Chacun vérifie ses pièces {2} : justificatif de domicile, certificat d'inscription, photos d'identité. Une dame distribue des conseils de vétéran : une chemise par document, jamais d'originaux sans copie.", es: "Siete de la mañana, ante la prefectura: la cola se alarga por la acera, expedientes bajo el brazo, café en la mano. Cada uno revisa sus piezas justificativas: justificante de domicilio, certificado de matrícula, fotos de identidad. Una señora reparte consejos de veterana: una carpeta por documento, nunca originales sin copia." },
        { it: "À huit heures, la file entre et se répartit devant les {3} ; le mouvement avance au rythme des tampons. Au comptoir, un agent pose trois questions, coche une case et glisse un récépissé : « Votre dossier est en cours d'{4}. » La formule est un euphémisme — elle signifie qu'il faudra {5}. La paperasse a ses règles, ses rites, et parfois même un timbre au bout du compte.", es: "A las ocho, la cola entra y se reparte ante las ventanillas; el avance marcha al ritmo de los sellos. En el mostrador, un agente hace tres preguntas, marca una casilla y desliza un resguardo: «Su expediente está en tramitación». La fórmula es un eufemismo — significa que habrá que esperar. El papeleo tiene sus reglas, sus ritos y a veces incluso un sello al final del trayecto." },
      ],
      gaps: [
        { options: ["file", "fête", "fiche"], answer: 0, why: "Gente esperando a las siete ante la prefectura: la cola, la file." },
        { options: ["judiciaires", "justificatives", "juridiques"], answer: 1, why: "Justificante de domicilio, certificado: las piezas justificativas." },
        { options: ["guichets", "guirlandes", "guitares"], answer: 0, why: "La cola se reparte ante las ventanillas: los guichets." },
        { options: ["inscription", "instruction", "inspection"], answer: 1, why: "«En cours d'instruction»: el expediente está en tramitación." },
        { options: ["partir", "payer", "attendre"], answer: 2, why: "El eufemismo significa que no hay plazo: habrá que esperar." },
      ],
    },
    {
      id: "cz-fr-c1-07-3", title: "Le langage clair", titleEs: "El lenguaje claro", minutes: 3,
      paragraphs: [
        { it: "« Vous voudrez bien trouver ci-joint la présente » : le français administratif effraie, avec ses phrases longues et son vocabulaire de bois hérité du {1} des rois. Depuis les années 2000, pourtant, la doctrine officielle réclame des courriers « en langage {2} » : la loi exige une administration qui se fait comprendre — le progrès est réel, les habitudes lentes.", es: "«Querrá usted encontrar adjunta la presente»: el francés administrativo asusta, con sus frases largas y su vocabulario de madera heredado del siglo de los reyes. Desde los años 2000, sin embargo, la doctrina oficial reclama cartas «en lenguaje claro»: la ley exige una administración que se hace entender — el progreso es real, las costumbres lentas." },
        { it: "Le site service-public.fr traduit l'administratif en humain : chaque {3} devient une fiche, chaque jargon une explication, chaque modèle de lettre un {4} à personnaliser. Les associations d'aide, elles, apprennent aux usagers à décoder les formules rituelles. Le fond culturel ne change pas : en France, le {5} posé sur un papier reste une forme de vérité.", es: "El sitio service-public.fr traduce lo administrativo a lo humano: cada trámite se convierte en una ficha, cada jerga en una explicación, cada modelo de carta en una plantilla a personalizar. Las asociaciones de ayuda, por su parte, enseñan a los usuarios a descodificar las fórmulas rituales. El fondo cultural no cambia: en Francia, el sello puesto sobre un papel sigue siendo una forma de verdad." },
      ],
      gaps: [
        { options: ["siècle", "cercle", "cerveau"], answer: 0, why: "Fórmulas heredadas del siglo de los reyes: el siglo." },
        { options: ["clair", "clos", "chiffré"], answer: 0, why: "«En langage clair»: una administración que se hace entender." },
        { options: ["démarche", "démocratie", "dentiste"], answer: 0, why: "Cada trámite se convierte en una ficha del portal." },
        { options: ["module", "modèle", "moral"], answer: 1, why: "Cada modelo de carta es una plantilla: un modèle a personalizar." },
        { options: ["tampon", "tambour", "talon"], answer: 0, why: "El sello sobre el papel sigue siendo una forma de verdad." },
      ],
    },
  ],

  "fr-cu-c1-08": [
    {
      id: "cz-fr-c1-08-1", title: "Huit heures moins dix", titleEs: "Ocho menos diez", minutes: 3,
      paragraphs: [
        { it: "Studio de la radio publique, huit heures moins dix : l'invitée arrive dans deux minutes. Serge, le rédacteur en chef, feuillette votre {1} de questions et soupire : trop frontales. À vos questions directes — quand le projet sera-t-il voté, combien coûtera la réforme —, l'invitée répondra « au moment opportun » et « conformément aux prévisions », des formules vides. « Il vous faut des questions indirectes, mais {2}. »", es: "Estudio de la radio pública, ocho menos diez: la invitada llega en dos minutos. Serge, el redactor jefe, hojea tu lista de preguntas y suspira: demasiado frontales. A tus preguntas directas — ¿cuándo se votará el proyecto, cuánto costará la reforma?—, la invitada responderá «en el momento oportuno» y «conforme a las previsiones», fórmulas vacías. «Necesitas preguntas indirectas, pero armadas.»" },
        { it: "Il réécrit la première avec vous : « Pourriez-vous nous dire en {3} ce calendrier reste réaliste ? » Puis il prépare l'arme du journaliste : « Je ne pense pas que ce calendrier soit tenable » — la négation d'un verbe d'{4} appelle le subjonctif, et ça sonne journaliste, pas militant. Dernier conseil : si l'invitée esquive, resserrez avec la mise en {5} — « C'est le calendrier qui nous intéresse. »", es: "Reescribe la primera contigo: «¿Podría decirnos en qué ese calendario sigue siendo realista?». Luego prepara el arma del periodista: «No creo que ese calendario sea sostenible» — la negación de un verbo de opinión pide subjuntivo, y suena a periodista, no a militante. Último consejo: si la invitada esquiva, aprieta con la mise en relief — «Es el calendario lo que nos interesa.»" },
      ],
      gaps: [
        { options: ["lettre", "liste", "limonade"], answer: 1, why: "Serge hojea tus preguntas preparadas: la lista." },
        { options: ["anciennes", "ancrées", "armées"], answer: 2, why: "Indirectas pero con filo: armadas." },
        { options: ["quoi", "quel", "combien"], answer: 0, why: "«En quoi… reste réaliste»: en qué sigue siendo realista." },
        { options: ["opinion", "occupation", "occasion"], answer: 0, why: "La negación de un verbo de opinión pide subjuntivo." },
        { options: ["relief", "retrait", "regret"], answer: 0, why: "Resserrez con la mise en relief: c'est… qui." },
      ],
    },
    {
      id: "cz-fr-c1-08-2", title: "Face à Madame Costa", titleEs: "Frente a Madame Costa", minutes: 3,
      paragraphs: [
        { it: "Huit heures cinquante, l'antenne s'ouvre. Madame Costa, porte-parole parlementaire, sourit déjà : « Je vous écoute, tout à vous. » Première question indirecte : « Pourriez-vous nous dire en quoi ce calendrier reste {1}, alors que tous les indicateurs suggèrent un report ? » — « Ah, vous commencez fort », glisse-t-elle avant de {2} vers le financement du projet.", es: "Ocho cincuenta, la antena se abre. Madame Costa, portavoz parlamentaria, ya sonríe: «Le escucho, a sus órdenes». Primera pregunta indirecta: «¿Podría decirnos en qué ese calendario sigue siendo sostenible, cuando todos los indicadores sugieren un aplazamiento?» — «Ah, empieza usted fuerte», se le escapa antes de deslizarse hacia la financiación del proyecto." },
        { it: "Vous resserrez, sans élever la voix : « Vous ne m'avez pas répondu, madame : la {3}, oui ou non ? C'est le calendrier qui nous intéresse. » La mise en relief fait son {4} : la question devient un fait, et le silence qui suit travaille pour l'auditeur. À la fin de l'entretien, Serge hoche la tête : ne jamais couper, reformuler plutôt que répéter, et refermer sur une question {5}. L'école française de l'interview tient ses règles.", es: "Apretas, sin subir la voz: «No me ha respondido, señora: la fecha, ¿sí o no? Es el calendario lo que nos interesa». La mise en relief surte su efecto: la pregunta se vuelve un hecho, y el silencio que sigue trabaja para el oyente. Al final de la entrevista, Serge asiente: no cortar nunca, reformular antes que repetir y cerrar con una pregunta abierta. La escuela francesa de la entrevista sostiene sus reglas." },
      ],
      gaps: [
        { options: ["charmant", "tenable", "terminé"], answer: 1, why: "La pregunta apunta a si el calendario se sostiene: tenable." },
        { options: ["grimacer", "grimper", "glisser"], answer: 2, why: "Antes de deslizarse hacia otro tema: glisser vers." },
        { options: ["dépense", "date", "devise"], answer: 1, why: "«Oui ou non»: lo que se pregunta es la fecha." },
        { options: ["effet", "échec", "écrivain"], answer: 0, why: "La mise en relief funciona: fait son effet." },
        { options: ["fermée", "ouverte", "directe"], answer: 1, why: "El cierre del entrevistador es una pregunta abierta." },
      ],
    },
    {
      id: "cz-fr-c1-08-3", title: "L'école de l'insistance courtoise", titleEs: "La escuela de la insistencia cortés", minutes: 3,
      paragraphs: [
        { it: "La grande interview politique française a ses heures de gloire : le matin, en direct, quand le pays se réveille. Ses règles ne sont écrites {1} : ne jamais couper, sauf à l'impair ; reformuler plutôt que répéter ; finir sur une question ouverte. Et une règle d'or traverse les générations : la politesse est une {2}.", es: "La gran entrevista política francesa tiene sus horas de gloria: por la mañana, en directo, cuando el país despierta. Sus reglas no están escritas en ninguna parte: no cortar nunca, salvo falta grave; reformular antes que repetir; terminar con una pregunta abierta. Y una regla de oro cruza las generaciones: la cortesía es un arma." },
        { it: "L'école française a formé des questionneurs légendaires, capables de répéter la même question dix fois sans {3} la voix. Les écoles de journalisme parisiennes entraînent la question indirecte et la reformulation comme un sport. Et une règle déontologique protège le jeu : couper un invité est une faute {4} ; le faire rendre, un métier. À l'antenne, la formule qui désarme reste la même : « Je vous {5} la question, madame la ministre » — et le silence qui suit.", es: "La escuela francesa ha formado preguntadores legendarios, capaces de repetir la misma pregunta diez veces sin levantar la voz. Las escuelas de periodismo parisinas entrenan la pregunta indirecta y la reformulación como un deporte. Y una regla deontológica protege el juego: cortar a un invitado es falta grave; hacerlo rendir, un oficio. En antena, la fórmula que desarma sigue siendo la misma: «Le repito la pregunta, señora ministra» — y el silencio que sigue." },
      ],
      gaps: [
        { options: ["nulle part", "partout", "naguère"], answer: 0, why: "Sus reglas no están escritas en ninguna parte." },
        { options: ["armoire", "arme", "araignée"], answer: 1, why: "La cortesía del entrevistador es un arma: la insistencia cortés." },
        { options: ["élevant", "éclipsant", "échangeant"], answer: 0, why: "Repetir la pregunta diez veces sin levantar la voz." },
        { options: ["grave", "grasse", "gaie"], answer: 0, why: "Cortar a un invitado se considera falta grave." },
        { options: ["remercie", "repose", "retire"], answer: 1, why: "«Je vous repose la question»: le repito la pregunta." },
      ],
    },
  ],

  "fr-cu-c1-09": [
    {
      id: "cz-fr-c1-09-1", title: "Le brainstorming des fromages", titleEs: "La tormenta de ideas del queso", minutes: 3,
      paragraphs: [
        { it: "Agence parisienne, salle de création : Camille, la directrice, lance le {1} — une marque de fromages fermiers, une cible urbaine, un slogan « qui sonne français ». Léo propose d'emblée « Le goût du vrai » : trois syllabes, aucun {2}, le style télégraphique de la pub. « Parfait, note Camille : pas de temps, pas de promesse vérifiable. »", es: "Agencia parisina, sala de creación: Camille, la directora, lanza el briefing — una marca de quesos de granja, un público urbano, un eslogan «que suene francés». Léo propone de entrada «Le goût du vrai»: tres sílabas, ningún verbo, el estilo telegráfico de la publicidad. «Perfecto, anota Camille: sin tiempo, sin promesa verificable.»" },
        { it: "Vous cherchez un calembour, et le tableau s'emplit : « La ferme ! … c'est notre {3}. » Camille sourit mais pose la loi de l'agence : un jeu de mots expliqué est un jeu de mots {4}. Reste le rythme : la pub aime la parataxe, la rime, la triade — « Du lait, du pré, du goût », trois {5} égaux, une comptine. Vendredi, on présentera trois pistes au client, pas une de plus.", es: "Buscas un juego de palabras y la pizarra se llena: «¡La granja!… es nuestra dirección». Camille sonríe pero impone la ley de la agencia: un juego de palabras explicado es un juego de palabras muerto. Queda el ritmo: la publicidad ama la parataxis, la rima, la tríada — «De leche, de pradera, de sabor», tres golpes iguales, una tonadilla. El viernes se presentarán tres pistas al cliente, ni una más." },
      ],
      gaps: [
        { options: ["bilan", "brief", "bouquet"], answer: 1, why: "Marca, público y eslogan: lo que lanza la directora es el brief." },
        { options: ["vers", "verbe", "verre"], answer: 1, why: "«Le goût du vrai» es nominal: ningún verbo." },
        { options: ["adresse", "addition", "ardoise"], answer: 0, why: "El juego: «La ferme!… c'est notre adresse»." },
        { options: ["mort", "mûr", "mou"], answer: 0, why: "Un juego de palabras explicado es un juego de palabras muerto." },
        { options: ["coups", "courants", "crayons"], answer: 0, why: "«Trois… égaux, une comptine»: tres golpes iguales." },
      ],
    },
    {
      id: "cz-fr-c1-09-2", title: "Trois pistes pour le client", titleEs: "Tres pistas para el cliente", minutes: 3,
      paragraphs: [
        { it: "Vendredi, salle de réunion : le client goûte les trois {1}. Piste un, nominative : « Le goût du vrai, l'odeur du pré » — le monde suggéré sans promesse. Piste deux, le calembour : « La ferme ! … c'est notre adresse » — le client rit, puis demande s'il faut l'{2} à l'écran. Camille refuse : « Si le jeu a besoin d'une note, il est mort. »", es: "Viernes, sala de reuniones: el cliente saborea las tres pistas. Pista uno, nominativa: «Le goût du vrai, l'odeur du pré» — el mundo sugerido sin promesa. Pista dos, el juego de palabras: «¡La granja!… es nuestra dirección» — el cliente ríe y luego pregunta si hay que explicarlo en pantalla. Camille se niega: «Si el juego necesita una nota, está muerto.»" },
        { it: "Piste trois, la triade : « Du lait, du pré, du goût ». Le client récite la phrase une fois, la {3} le lendemain matin sans l'avoir notée : c'est le test décisif — le slogan doit survivre à l'{4} sans lui. Il choisit la triade pour l'affiche et le calembour pour la radio. La présentation se referme sur la maxime de la maison : « La pub, c'est de la {5} au mètre carré. »", es: "Pista tres, la tríada: «De leche, de pradera, de sabor». El cliente recita la frase una vez, la repite a la mañana siguiente sin haberla anotado: es la prueba decisiva — el eslogan debe sobrevivir sin el anuncio. Elige la tríada para el cartel y el juego de palabras para la radio. La presentación se cierra con la máxima de la casa: «La publicidad es poesía por metro cuadrado.»" },
      ],
      gaps: [
        { options: ["pitances", "pistes", "pistolets"], answer: 1, why: "El cliente saborea las tres pistas de campaña." },
        { options: ["expliquer", "exporter", "dépenser"], answer: 0, why: "Pregunta si hay que explicarlo en pantalla: l'expliquer." },
        { options: ["regrette", "renonce", "répète"], answer: 2, why: "La repite a la mañana siguiente sin anotarla: el test del eslogan." },
        { options: ["annonce", "atelier", "argent"], answer: 0, why: "El eslogan debe sobrevivir sin el anuncio: à l'annonce." },
        { options: ["poésie", "police", "pause"], answer: 0, why: "«Poesía por metro cuadrado»: la máxima de la casa." },
      ],
    },
    {
      id: "cz-fr-c1-09-3", title: "Pubs culte et censure douce", titleEs: "Anuncios de culto y censura blanda", minutes: 3,
      paragraphs: [
        { it: "La France a son panthéon publicitaire : des slogans cités de mémoire des décennies plus tard, du « Parce que je le vaux bien » des années soixante-dix aux affiches élégantes des compagnies aériennes. On appelle « pubs {1} » ces annonces qui ont franchi la frontière du souvenir et rejoint le {2} partagé — on les cite comme des poèmes.", es: "Francia tiene su panteón publicitario: eslóganes citados de memoria décadas después, del «Parce que je le vaux bien» de los años setenta a los carteles elegantes de las compañías aéreas. Se llaman «anuncios de culto» los que cruzaron la frontera del recuerdo y se unieron al patrimonio compartido — se citan como poemas." },
        { it: "Mais la créativité a sa tutrice : l'ARPP, l'autorité de {3} professionnelle de la publicité, examine les annonces avant diffusion — honnêteté, dignité, protection des mineurs. La loi Évin, elle, encadre depuis les années quatre-vingt-dix la {4} de l'alcool et du tabac. Résultat : une publicité inventive sous {5}, et un public qui pardonne presque tout à un slogan bien rimé.", es: "Pero la creatividad tiene su tutora: el ARPP, la autoridad de regulación profesional de la publicidad, examina los anuncios antes de su emisión — honestidad, dignidad, protección de los menores. La loi Évin, por su parte, encuadra desde los años noventa la publicidad del alcohol y el tabaco. Resultado: una publicidad inventiva bajo vigilancia, y un público que perdona casi todo a un eslogan bien rimado." },
      ],
      gaps: [
        { options: ["coupables", "culte", "courantes"], answer: 1, why: "Anuncios que cruzaron la frontera del recuerdo: pubs de culto." },
        { options: ["patrimoine", "parcours", "paravent"], answer: 0, why: "Se unieron al patrimonio compartido." },
        { options: ["rénovation", "régulation", "récréation"], answer: 1, why: "El ARPP es la autoridad de regulación profesional de la publicidad." },
        { options: ["publicité", "pédagogie", "peinture"], answer: 0, why: "La loi Évin restringe la publicidad del alcohol y el tabaco." },
        { options: ["vedette", "vigilance", "végétation"], answer: 1, why: "Publicidad inventiva bajo vigilancia." },
      ],
    },
  ],

  "fr-cu-c1-10": [
    {
      id: "cz-fr-c1-10-1", title: "Les conseils du vétéran", titleEs: "Los consejos del veterano", minutes: 3,
      paragraphs: [
        { it: "Coulisses du plateau, avant votre premier débat télévisé : Philippe, le vétéran, récite la règle numéro un — on ne {1} pas un argument, on le retourne. Face à vous, une économiste avec des chiffres durs : « la productivité baisse de douze pour cent avec le télétravail généralisé ». Il vous apprend le protocole en trois {2} : comprendre, isoler, retourner.", es: "Entre bastidores del plató, antes de tu primer debate televisivo: Philippe, el veterano, recita la regla número uno — un argumento no se destruye, se le da la vuelta. Frente a ti, una economista con cifras duras: «la productividad baja un doce por ciento con el teletrabajo generalizado». Te enseña el protocolo en tres tiempos: entender, aislar, dar la vuelta." },
        { it: "« Je comprends cet argument — tu l'isoleras — mais il porte sur six mois, pas sur dix ans. » Le chiffre n'est pas nié : il change de {3}. Puis la concession, « l'arme la plus fine » : « Il est vrai que le télétravail déstabilise les équipes ; il est tout aussi {4} que les transports les épuisent. » Du judo rhétorique, conclut-il. Et si le modérateur vous coupe : « Si vous me permettez d'{5} ma pensée » — jamais de haussement de ton : qui s'énerve a déjà perdu.", es: "«Entiendo ese argumento — lo aislarás — pero se refiere a seis meses, no a diez años». La cifra no se niega: cambia de marco. Luego la concesión, «el arma más fina»: «Es cierto que el teletrabajo desestabiliza a los equipos; es igualmente cierto que los transportes los agotan». Judo retórico, concluye. Y si el moderador te corta: «Si me permiten terminar mi pensamiento» — nunca subir el tono: quien se irrita ya ha perdido." },
      ],
      gaps: [
        { options: ["détruit", "ignore", "partage"], answer: 0, why: "La regla: un argumento no se destruye, se le da la vuelta." },
        { options: ["thèmes", "temps", "tensions"], answer: 1, why: "El protocolo en tres tiempos: comprendre, isoler, retourner." },
        { options: ["cadre", "camp", "compte"], answer: 0, why: "El dato no se niega: cambia de marco temporal." },
        { options: ["vague", "vrai", "vain"], answer: 1, why: "«Il est tout aussi… que»: la concesión simétrica, igualmente cierto." },
        { options: ["achever", "avouer", "abandonner"], answer: 0, why: "«Si vous me permettez d'achever ma pensée»: terminar la idea." },
      ],
    },
    {
      id: "cz-fr-c1-10-2", title: "Le duel du jeudi soir", titleEs: "El duelo del jueves", minutes: 3,
      paragraphs: [
        { it: "Plateau du débat, jeudi soir : la question du soir — faut-il généraliser le télétravail dans la fonction publique ? Madame Diallo ouvre avec ses {1} : moins douze pour cent de productivité. Vous respirez, puis vous appliquez la méthode : « Je comprends cet argument, et je le prends au sérieux ; toutefois, il porte sur six {2}, pas sur dix ans. »", es: "Plató del debate, jueves por la noche: la pregunta de la noche — ¿hay que generalizar el teletrabajo en la función pública? Madame Diallo abre con sus cifras: menos doce por ciento de productividad. Respiras y aplicas el método: «Entiendo ese argumento y me lo tomo en serio; sin embargo, se refiere a seis meses, no a diez años.»" },
        { it: "Elle sourit de voir la feinte, mais la discussion monte d'un cran. Vous enchaînez la concession élégante : « Il est vrai que la {3} a baissé ; en revanche, la mesure de la productivité a changé. » Puis l'arme finale, la concession hypothétique : « En admettant que vos chiffres soient {4}, ils ne couvrent pas la décennie. » Le modérateur coupe, vous rendez la parole avec le sourire — celui qui {5}.", es: "Sonríe al ver la finta, pero la discusión sube un escalón. Encadenas la concesión elegante: «Es cierto que la productividad ha bajado; en cambio, la medida de la productividad ha cambiado». Luego el arma final, la concesión hipotética: «Admitiendo que sus cifras sean exactas, no cubren la década». El moderador corta, devuelves la palabra con la sonrisa — la que desarma." },
      ],
      gaps: [
        { options: ["chiffres", "chansons", "chaussures"], answer: 0, why: "La economista abre con datos: sus cifras." },
        { options: ["mots", "mois", "maux"], answer: 1, why: "Seis meses frente a diez años: el marco temporal." },
        { options: ["population", "productivité", "probabilité"], answer: 1, why: "«Moins douze pour cent»: lo que ha bajado es la productividad." },
        { options: ["exacts", "exquis", "exclus"], answer: 0, why: "«En admettant que vos chiffres soient exacts»: que sean exactas." },
        { options: ["désarme", "désespère", "désobéit"], answer: 0, why: "Le sourire qui désarme: la sonrisa que desarma." },
      ],
    },
    {
      id: "cz-fr-c1-10-3", title: "1974 : le premier duel", titleEs: "1974: el primer duelo", minutes: 3,
      paragraphs: [
        { it: "Le débat contradictoire français a son Wimbledon : le face-à-face de l'entre-deux-tours présidentielle. Le premier fut diffusé en {1}, entre Valéry Giscard d'Estaing et François Mitterrand : un duel sans notes, en direct, devant des millions de téléspectateurs. Une phrase calculée y est entrée dans l'{2} — « vous n'avez pas le monopole du cœur ».", es: "El debate contradictorio francés tiene su Wimbledon: el cara a cara de la entre-vueltas presidencial. El primero se emitió en 1974, entre Valéry Giscard d'Estaing y François Mitterrand: un duelo sin notas, en directo, ante millones de telespectadores. Una frase calculada entró allí en la historia — «vous n'avez pas le monopole du cœur»." },
        { it: "En 1988, Mitterrand désarma Jacques Chirac d'une simple formule d'adieu adressée au « Monsieur le Premier {3} ». Depuis, le format se répète tous les cinq ans, et les duelistes le savent : une phrase juste peut devenir un clip éternel, une colère perdue offre le {4} du lendemain. La règle du jeu n'a pas bougé : qui s'énerve a perdu, qui concède avec {5} gagne — parfois.", es: "En 1988, Mitterrand desarmó a Jacques Chirac con una simple fórmula de despedida dirigida al «Monsieur le Premier ministre». Desde entonces el formato se repite cada cinco años, y los duelistas lo saben: una frase justa puede volverse un clip eterno, una cólera perdida regala el titular del día siguiente. La regla del juego no ha cambiado: quien se irrita ha perdido; quien concede con elegancia gana — a veces." },
      ],
      gaps: [
        { options: ["1974", "1968", "1981"], answer: 0, why: "El primer duelo televisado de la entre-vueltas: 1974, Giscard-Mitterrand." },
        { options: ["histoire", "hôpital", "horaire"], answer: 0, why: "«Vous n'avez pas le monopole du cœur» entró en la historia." },
        { options: ["ministre", "monsieur", "magistrat"], answer: 0, why: "El «Monsieur le Premier ministre» con que Mitterrand desarmó a Chirac." },
        { options: ["thé", "titre", "tarif"], answer: 1, why: "Una cólera perdida regala el titular del día siguiente." },
        { options: ["énergie", "élégance", "égoïsme"], answer: 1, why: "Quien concede con elegancia gana, a veces." },
      ],
    },
  ],

  "fr-cu-c1-11": [
    {
      id: "cz-fr-c1-11-1", title: "L'atelier de la gare", titleEs: "El taller de la estación", minutes: 3,
      paragraphs: [
        { it: "Librairie du Quartier Latin, atelier d'écriture du soir : Hélène pose la consigne — une femme attend dans une gare, deux paragraphes, l'exigence de Flaubert : le {1} juste, et rien d'autre. Un participant propose « Il y avait une femme qui attendait » ; elle secoue la tête : « Entrez plutôt dans le décor : la gare était presque {2}. »", es: "Librería del Barrio Latino, taller de escritura nocturno: Hélène plantea la consigna — una mujer espera en una estación, dos párrafos, la exigencia de Flaubert: la palabra justa, y nada más. Un participante propone «Il y avait une femme qui attendait»; ella niega con la cabeza: «Entra más bien en el decorado: la estación estaba casi vacía.»" },
        { it: "La règle se dépose au tableau : l'imparfait peint le {3}, le passé simple fait agir. À « le train n'arriva pas », elle préfère « le train tardait » — l'attente devient un {4}. Et la phrase classique garde son équilibre : trois membres, une cadence, une chute. Le devoir du soir : lire son texte debout, à voix haute — si une phrase résiste au {5}, c'est qu'elle est mal écrite.", es: "La regla se posa en la pizarra: el imperfecto pinta el fondo, el passé simple hace actuar. Ante «le train n'arriva pas», prefiere «le train tardait» — la espera se vuelve personaje. Y la frase clásica guarda su equilibrio: tres miembros, una cadencia, un cierre. El deber de la noche: leer el texto de pie, en voz alta — si una frase resiste al gueuloir, es que está mal escrita." },
      ],
      gaps: [
        { options: ["mot", "maître", "mois"], answer: 0, why: "La exigencia de Flaubert: la palabra justa, le mot juste." },
        { options: ["verte", "vide", "vendue"], answer: 1, why: "Entrar en el decorado: la estación casi vacía." },
        { options: ["futur", "fil", "fond"], answer: 2, why: "El imperfecto pinta el fondo, el decorado." },
        { options: ["paysage", "personnage", "pavé"], answer: 1, why: "«Le train tardait»: la espera se vuelve personaje." },
        { options: ["gorille", "guichet", "gueuloir"], answer: 2, why: "Si una frase resiste al gueuloir (leerla a gritos), está mal escrita." },
      ],
    },
    {
      id: "cz-fr-c1-11-2", title: "Croisset et le gueuloir", titleEs: "Croisset y el gueuloir", minutes: 3,
      paragraphs: [
        { it: "À Croisset, près de Rouen, Gustave Flaubert passait des journées entières à raturer : « Affreux, affreux ! », griffonnait-il en marge de ses {1}. Sa méthode de travail tenait dans un mot de sa fabrication, le « gueuloir » : il hurlait ses phrases en marchant dans son {2}, pour éprouver leur résistance.", es: "En Croisset, cerca de Rouen, Gustave Flaubert pasaba jornadas enteras tachando: «¡Horroroso, horroroso!», garabateaba al margen de sus manuscritos. Su método de trabajo cabía en una palabra de su propia fábrica, el «gueuloir»: gritaba sus frases caminando por su parque, para probar su resistencia." },
        { it: "Madame Bovary parut en 1857, fut poursuivie pour outrage à la morale publique, et {3} : la littérature gagna. Sa leçon tient dans une phrase de sa correspondance : « le style, cette manière {4} de voir les choses ». Les ateliers d'écriture d'aujourd'hui reprennent la consigne à leur compte : raturer, éprouver, hurler — jusqu'à ce que la {5} tienne debout.", es: "Madame Bovary apareció en 1857, fue procesada por ultraje a la moral pública y fue absuelta: la literatura ganó. Su lección cabe en una frase de su correspondencia: «el estilo, esa manera absoluta de ver las cosas». Los talleres de escritura de hoy hacen suya la consigna: tachar, probar, gritar — hasta que la frase se sostenga en pie." },
      ],
      gaps: [
        { options: ["magazines", "manuscrits", "malles"], answer: 1, why: "Tachaba al margen de sus manuscritos." },
        { options: ["parc", "port", "préau"], answer: 0, why: "Gritaba sus frases caminando por su parque de Croisset." },
        { options: ["fut oubliée", "fut vendue", "fut acquittée"], answer: 2, why: "Procesada por ultraje a la moral y absuelta: fut acquittée." },
        { options: ["absente", "absolue", "abstraite"], answer: 1, why: "«Une manière absolue de voir les choses»: la lección del estilo." },
        { options: ["page", "phrase", "plume"], answer: 1, why: "Tachar, probar, gritar, hasta que la frase se sostenga." },
      ],
    },
    {
      id: "cz-fr-c1-11-3", title: "L'attente", titleEs: "La espera", minutes: 3,
      paragraphs: [
        { it: "La gare était presque vide. Sous l'horloge, une femme {1} depuis une heure, immobile, une valise posée à ses pieds. Le quai sentait la poussière et le froid ; au loin, une locomotive {2} doucement, comme un animal endormi. Elle regarda l'heure, prit sa valise, fit quelques pas, s'arrêta.", es: "La estación estaba casi vacía. Bajo el reloj, una mujer esperaba desde hacía una hora, inmóvil, una maleta posada a sus pies. El andén olía a polvo y a frío; a lo lejos, una locomotora soplaba suavemente, como un animal dormido. Miró la hora, cogió la maleta, dio unos pasos, se detuvo." },
        { it: "Le train {3} ; la nuit tombait ; et l'attente, peu à peu, devenait un {4}. À vingt-deux heures, un employé annonça un nouveau retard : elle sourit, ouvrit un livre, et la {5} s'installa comme une compagne fidèle. Quand le train parut enfin, elle monta d'un pas calme — elle avait fini son chapitre.", es: "El tren tardaba; la noche caía; y la espera, poco a poco, se volvía personaje. A las veintidós horas, un empleado anunció un nuevo retraso: sonrió, abrió un libro, y la paciencia se instaló como una compañera fiel. Cuando el tren apareció por fin, subió con paso tranquilo — había terminado su capítulo." },
      ],
      gaps: [
        { options: ["attendait", "riait", "dormait"], answer: 0, why: "Inmóvil bajo el reloj con la maleta: la mujer espera (título: L'attente)." },
        { options: ["sautait", "soufflait", "songeait"], answer: 1, why: "Una locomotora dormida respira: soplaba suavemente." },
        { options: ["tremblait", "tardait", "travaillait"], answer: 1, why: "La noche cae y el tren no llega: tardaba." },
        { options: ["personnage", "problème", "paquet"], answer: 0, why: "La espera gana cuerpo: se vuelve personaje." },
        { options: ["panique", "pénombre", "patience"], answer: 2, why: "Sonríe, abre un libro: la paciencia se instala como compañera." },
      ],
    },
  ],

  "fr-cu-c1-12": [
    {
      id: "cz-fr-c1-12-1", title: "La répétition générale", titleEs: "El ensayo general", minutes: 3,
      paragraphs: [
        { it: "Salle de séminaire, répétition générale de soutenance : Madame Rousseau, votre directrice, joue la présidente du jury et {1} le temps. Dix minutes d'exposé, trente d'entretien — conditions réelles. Vous annoncez le plan : « Mon exposé comportera trois {2} : d'abord le contexte, ensuite la méthodologie, enfin les résultats — et leur limite, que je revendique. »", es: "Sala de seminario, ensayo general de la defensa: Madame Rousseau, tu directora, hace de presidenta del jurado y cronometra el tiempo. Diez minutos de exposición, treinta de entrevista — condiciones reales. Anuncias el plan: «Mi exposición constará de tres partes: primero el contexto, después la metodología, por último los resultados — y su límite, que asumo.»" },
        { it: "Elle vous interrompt à la quatrième minute — c'est son rôle : « Votre échantillon n'est-il pas trop petit ? » Vous appliquez la {3} préparée : « Je vous remercie de cette question ; l'échantillon est certes modeste, mais il a été constitué selon des critères stricts — et si vous me permettez d'achever, j'y {4} dans la troisième partie. » Elle sourit : remercier, concéder, renvoyer — c'est exactement ça, la {5}.", es: "Te interrumpe en el cuarto minuto — es su papel: «¿No es demasiado pequeña su muestra?». Aplicas el método preparado: «Le agradezco esta pregunta; la muestra es ciertamente modesta, pero se constituyó según criterios estrictos — y si me permite terminar, volveré sobre ello en la tercera parte». Sonríe: agradecer, conceder, remitir — eso es exactamente la soutenance." },
      ],
      gaps: [
        { options: ["chronomètre", "change", "chante"], answer: 0, why: "Diez minutos de exposición: la directora cronometra." },
        { options: ["pages", "parties", "pauses"], answer: 1, why: "«D'abord… ensuite… enfin…»: el plan en tres partes." },
        { options: ["mode", "monnaie", "méthode"], answer: 2, why: "Aplicas la respuesta preparada: la méthode." },
        { options: ["reviendrai", "renoncerai", "recopierai"], answer: 0, why: "«J'y reviendrai dans la troisième partie»: volveré sobre ello." },
        { options: ["soutenance", "sorcellerie", "sollicitation"], answer: 0, why: "Agradecer, conceder, remitir: eso es exactamente la soutenance." },
      ],
    },
    {
      id: "cz-fr-c1-12-2", title: "Le 14 juin, salle des actes", titleEs: "El 14 de junio, sala de actos", minutes: 3,
      paragraphs: [
        { it: "Jour J. La salle des actes sent le bois ciré et la tension. Le président ouvre la séance d'une formule {1} : « La séance est ouverte. » Le silence répond. Vous vous levez, remerciez le jury de sa présence, et le {2} s'envole : d'abord le contexte, ensuite la méthodologie, enfin les résultats — et leur limite.", es: "El día D. La sala de actos huele a madera encerada y a tensión. El presidente abre la sesión con una fórmula invariable: «La sesión queda abierta». El silencio responde. Te levantas, das las gracias al jurado por su presencia, y el plan despega: primero el contexto, después la metodología, por último los resultados — y su límite." },
        { it: "Sur les chiffres, vous ralentissez — cent-vingt, c'est une marche, on la {3}. À la question redoutable sur l'échantillon, la triade préparée tombe naturellement : remercier, concéder, {4}. Puis la porte se referme sur la délibération. Seul dans le couloir, vous respirez : votre dernière phrase, préparée de mémoire, reste dans la {5} pendant que le jury délibère.", es: "Con las cifras, frenas — ciento veinte es un peldaño, se posa. Ante la pregunta temible sobre la muestra, la tríada preparada cae con naturalidad: agradecer, conceder, remitir. Luego la puerta se cierra sobre la deliberación. Solo en el pasillo, respiras: tu última frase, preparada de memoria, queda en la sala mientras el jurado delibera." },
      ],
      gaps: [
        { options: ["improvisée", "immuable", "inaudible"], answer: 1, why: "«La séance est ouverte»: fórmula invariable del presidente." },
        { options: ["propos", "plan", "public"], answer: 1, why: "Contexto, metodología, resultados: despega el plan." },
        { options: ["pousse", "presse", "pose"], answer: 2, why: "Las cifras se posan: on la pose, con su pausa." },
        { options: ["réciter", "refuser", "renvoyer"], answer: 2, why: "La tríada: remercier, concéder, renvoyer." },
        { options: ["salle", "rue", "serviette"], answer: 0, why: "La última frase queda sonando en la sala durante la deliberación." },
      ],
    },
    {
      id: "cz-fr-c1-12-3", title: "Le pot de thèse", titleEs: "El convite de tesis", minutes: 3,
      paragraphs: [
        { it: "Après le verdict — mention très bien, félicitations du jury —, la salle se détend : place au {1} de thèse, le convive amical qui referme le rite. Sur la table, des tartes et un cidre doux ; le rapporteur, redoutable une heure plus tôt, raconte maintenant ses propres débuts calamiteux, et tout le monde rit de soulagement.", es: "Después del veredicto — mención très bien, felicitaciones del jurado—, la sala se relaja: llega el momento del pot de thèse, el convite amistoso que cierra el rito. Sobre la mesa, tartas y una sidra dulce; el rapporteur, temible una hora antes, cuenta ahora sus propios comienzos calamitosos y todos ríen con alivio." },
        { it: "La tradition remonte aux disputations médiévales, mais elle a gardé sa {2} : une pensée se défend debout, en public, avant d'être célébrée assis. Votre directrice lève son verre à la formule rituelle : « À la prochaine {3} — la thèse, cette fois ! » Rires, poignées de main, et le sentiment précis d'avoir {4} une porte. Le rite s'achève, comme presque tous les rites français, autour d'une {5}.", es: "La tradición se remonta a las disputaciones medievales, pero ha guardado su lógica: un pensamiento se defiende de pie, en público, antes de celebrarse sentado. Tu directora alza su copa con la fórmula ritual: «¡Al próximo paso — la tesis, esta vez!». Risas, apretones de manos y la sensación precisa de haber cruzado una puerta. El rito termina, como casi todos los ritos franceses, alrededor de una mesa." },
      ],
      gaps: [
        { options: ["pot", "pari", "prix"], answer: 0, why: "El convite tras la defensa: el pot de thèse." },
        { options: ["liste", "logique", "limite"], answer: 1, why: "La tradición conserva su lógica: defender de pie, celebrar sentados." },
        { options: ["erreur", "épreuve", "étape"], answer: 2, why: "«À la prochaine étape»: la tesis doctoral como siguiente paso." },
        { options: ["fermé", "franchi", "fabriqué"], answer: 1, why: "La sensación precisa de haber cruzado una puerta." },
        { options: ["table", "tâche", "tenue"], answer: 0, why: "Los ritos franceses terminan alrededor de una mesa." },
      ],
    },
  ],

};
