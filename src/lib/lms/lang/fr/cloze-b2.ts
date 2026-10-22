import type { CbClozeText } from "../../cambridge";

/* ═══ FR B2 · Cloze readings — 3 por unidad (inferencia léxica) ══════
   Metodología v9.12: el texto en francés lleva marcadores {1} {2}… que
   el reproductor convierte en huecos; el estudiante deduce la palabra
   por el contexto (argumentación, matiz, debate, ironía suave). Campos:
   `.it` = francés de Francia, `.es` = español. Tipografía francesa:
   espacio antes de ? ! : ;, guillemets « », reloj de 24 h. */

export const FR_CLOZE_B2: Record<string, CbClozeText[]> = {
  "fr-cu-b2-01": [
    {
      id: "cz-fr-b2-01-1", title: "La table ronde du onzième", titleEs: "La mesa redonda del distrito once", minutes: 3,
      paragraphs: [
        { it: "Ce jeudi soir, l'association des riverains du onzième arrondissement a loué la {1} des fêtes pour une table ronde sur le revenu universel. Le {2}, cravate dénouée, rappelle les règles avec le sourire : trois minutes de parole par intervention, on ne coupe jamais, et on répond aux objections avant de conclure. Devant une salle comble, chacun sort son carnet : ici, même les spectateurs prennent des notes.", es: "Este jueves por la noche, la asociación de vecinos del distrito once ha alquilado la sala de fiestas para una mesa redonda sobre la renta universal. El moderador, con la corbata desanudada, recuerda las reglas con una sonrisa: tres minutos de palabra por intervención, no se corta a nadie nunca, y se responde a las objeciones antes de concluir. Ante una sala llena, cada uno saca su cuaderno: aquí, hasta los espectadores toman notas." },
        { it: "Léo, économiste, ouvre le bal : une somme versée chaque mois à tous protégerait les plus fragiles. Inès, élue locale, objecte aussitôt que le {3} serait colossal : « Et nos services publics, dans tout ça ? » Vers 21 heures, le débat s'apaise sans {4} ni brouille : chacun a précisé sa pensée, et les spectateurs prolongent la soirée autour d'un café servi par les {5} de l'association.", es: "Léo, economista, abre el baile: una suma abonada cada mes a todos protegería a los más frágiles. Inès, edil local, objeta enseguida que el coste sería colosal: «¿Y nuestros servicios públicos, en todo esto?». Hacia las 21 horas, el debate se calma sin vencedor ni riña: cada uno ha precisado su pensamiento, y los espectadores prolongan la velada alrededor de un café servido por los voluntarios de la asociación." },
      ],
      gaps: [
        { options: ["salle", "porte", "rue"], answer: 0, why: "Se alquila para un acto público con sala llena: «la salle des fêtes» es el local de actos del barrio." },
        { options: ["modérateur", "magicien", "libraire"], answer: 0, why: "«Rappelle les règles» y reparte turnos de palabra: quien dirige una mesa redonda es el moderador." },
        { options: ["coût", "profit", "cadeau"], answer: 0, why: "La objeción apunta al dinero: «Et nos services publics ?» denuncia el gasto colosal de la medida." },
        { options: ["vainqueur", "repas", "discours"], answer: 0, why: "«Sans vainqueur ni brouille»: nadie ha convencido a nadie, no hay ganador del debate." },
        { options: ["bénévoles", "actionnaires", "juges"], answer: 0, why: "Quien sirve cafés en una asociación de barrio trabaja gratis: los voluntarios." },
      ],
    },
    {
      id: "cz-fr-b2-01-2", title: "Le café philo du mardi", titleEs: "El café philo de los martes", minutes: 2,
      paragraphs: [
        { it: "Le mardi soir, au fond d'un café du Marais, une trentaine de chaises attendent les habitués des débats philosophiques. La {1} du soir est écrite à la craie sur l'ardoise : « Faut-il avoir peur du progrès ? » L'animateur, professeur à la retraite, distribue la {2} avec bienveillance : chacun pourra parler, à condition de rester cordial.", es: "El martes por la noche, al fondo de un café del Marais, una treintena de sillas espera a los habituales de los debates filosóficos. La pregunta de la velada está escrita con tiza en la pizarra: «¿Hay que tenerle miedo al progreso?». El animador, profesor jubilado, reparte la palabra con benevolencia: cada uno podrá hablar, con la condición de mantenerse cordial." },
        { it: "Les interventions se succèdent : une étudiante cite Montaigne et son fameux « Que sais-je ? », un informaticien défend les algorithmes, un retraité évoque les trains d'autrefois avec nostalgie. Les {3} se croisent, se heurtent parfois, mais toujours avec courtoisie : personne n'est venu pour écraser qui que ce soit. Vers 22 heures, l'animateur conclut sans trancher, et la soirée se termine comme elle a commencé, dans le {4} retrouvé du café. Chacun paie sa consommation en {5} de merci.", es: "Las intervenciones se suceden: una estudiante cita a Montaigne y su famoso «¿Qué sé?», un informático defiende los algoritmos, un jubilado evoca los trenes de antaño con nostalgia. Los argumentos se cruzan, chocan a veces, pero siempre con cortesía: nadie ha venido a aplastar a nadie. Hacia las 22 horas, el animador concluye sin decantar nada, y la velada termina como empezó, en la calma recuperada del café. Cada uno paga su consumición en señal de agradecimiento." },
      ],
      gaps: [
        { options: ["question", "réponse", "recette"], answer: 0, why: "«Faut-il avoir peur du progrès ?» es una pregunta abierta, la que lanza el debate." },
        { options: ["parole", "monnaie", "note"], answer: 0, why: "«Chacun pourra parler»: lo que reparte el animador es el turno de palabra." },
        { options: ["arguments", "bagages", "serveurs"], answer: 0, why: "Lo que se cruza y choca en un debate son los argumentos de unos y otros." },
        { options: ["calme", "bruit", "froid"], answer: 0, why: "La velada termina como empezó: en la calma del café, tras el intercambio de ideas." },
        { options: ["signe", "cas", "peur"], answer: 0, why: "«En signe de merci» = en señal de agradecimiento antes de despedirse." },
      ],
    },
    {
      id: "cz-fr-b2-01-3", title: "Apprendre à argumenter", titleEs: "Aprender a argumentar", minutes: 3,
      paragraphs: [
        { it: "En France, l'art de la discussion s'apprend à l'école comme une matière à part entière. Dès le lycée, la dissertation impose son plan en trois temps : thèse, antithèse, {1}. L'élève doit défendre une position, puis la contester, avant de proposer un dépassement. Certains professeurs entraînent même leurs élèves à des concours d'éloquence, où l'on apprend à {2} avant de répondre.", es: "En Francia, el arte de la discusión se aprende en la escuela como una asignatura en sí misma. Desde el bachillerato, la dissertation impone su plan en tres tiempos: tesis, antítesis, síntesis. El alumno debe defender una postura, luego contestarla, antes de proponer una superación. Algunos profesores entrenan incluso a sus alumnos en concursos de elocuencia, donde se aprende a escuchar antes de responder." },
        { it: "Cette culture se retrouve partout : dans les tribunes des journaux, où l'auteur concède une {3} avant d'y répondre, et jusque dans les dîners, où un débat animé n'est pas une impolitesse, mais une manière de prendre son {4} au sérieux. Pour un étranger, la règle d'or tient en une phrase : structurez votre propos avec des articulateurs, écoutez l'objection, concluez sans écraser personne — bref, argumentez avec {5}.", es: "Esta cultura se encuentra en todas partes: en las tribunas de los periódicos, donde el autor concede una objeción antes de responderle, y hasta en las cenas, donde un debate animado no es una descortesía, sino una manera de tomarse en serio al interlocutor. Para un extranjero, la regla de oro cabe en una frase: estructura tu discurso con articuladores, escucha la objeción, concluye sin aplastar a nadie; en definitiva, argumenta con elegancia." },
      ],
      gaps: [
        { options: ["synthèse", "récréation", "parenthèse"], answer: 0, why: "El plan canónico es thèse–antithèse–synthèse: la tercera pieza es la síntesis." },
        { options: ["écouter", "crier", "dormir"], answer: 0, why: "«Avant de répondre»: primero se escucha, luego se contesta; es la base de la elocuencia." },
        { options: ["objection", "invitation", "augmentation"], answer: 0, why: "«Concéder avant d'y répondre»: lo que se concede en una tribuna es una objeción." },
        { options: ["interlocuteur", "cousin", "serveur"], answer: 0, why: "En la cena, debater es tomarse en serio a quien habla: al interlocutor." },
        { options: ["élégance", "fatigue", "hâte"], answer: 0, why: "Estructurar, escuchar y no aplastar: el resumen de la regla es argumentar con elegancia." },
      ],
    },
  ],

  "fr-cu-b2-02": [
    {
      id: "cz-fr-b2-02-1", title: "La soirée du prix du jeune essayiste", titleEs: "La velada del premio al joven ensayista", minutes: 3,
      paragraphs: [
        { it: "Ce samedi soir, le grand salon de l'hôtel de ville de Lyon brille de mille feux pour la remise du prix du jeune essayiste. Le jury, les élus et les familles prennent place sous les lustres ; au premier rang, les trois {1} attendent le verdict en silence. Monsieur Berthier, président du jury, monte à l'estrade et salue l'assistance d'un {2} cérémonial : « Mesdames, Messieurs, chers invités… »", es: "Este sábado por la noche, el gran salón del ayuntamiento de Lyon brilla con mil luces para la entrega del premio al joven ensayista. El jurado, los ediles y las familias toman asiento bajo las lámparas de araña; en la primera fila, los tres finalistas esperan el veredicto en silencio. Monsieur Berthier, presidente del jurado, sube a la tribuna y saluda a la concurrencia con un discurso ceremonial: «Señoras, señores, queridos invitados…»" },
        { it: "Le lauréat prononce son discours de remerciement dans un registre soutenu : il remercie d'abord le {3}, puis sa directrice de recherche, enfin ses proches — l'ordre protocolaire est respecté à la lettre. Il parle de la lenteur, de la mémoire des villes, des témoignages {4} au fil des mois. Quand il descend de scène, la salle se lève : à Lyon, on sait honorer ceux qui font durer les {5}.", es: "El ganador pronuncia su discurso de agradecimiento en registro cuidado: agradece primero al jurado, luego a su directora de investigación, al final a sus cercanos; el orden protocolario se respeta al pie de la letra. Habla de la lentitud, de la memoria de las ciudades, de los testimonios recogidos a lo largo de los meses. Cuando baja del escenario, la sala se pone en pie: en Lyon se sabe honrar a quienes hacen durar las ideas." },
      ],
      gaps: [
        { options: ["finalistes", "cuisiniers", "musiciens"], answer: 0, why: "«Attendent le verdict»: los que aguardan el fallo en primera fila son los finalistas." },
        { options: ["discours", "chant", "signe"], answer: 0, why: "«Mesdames, Messieurs, chers invités…»: ese saludo ceremonial abre un discurso." },
        { options: ["jury", "maire", "public"], answer: 0, why: "El orden protocolario manda agradecer primero al jurado que ha fallado el premio." },
        { options: ["recueillis", "perdus", "vendus"], answer: 0, why: "Los testimonios se han ido recogiendo a lo largo de los meses para el trabajo premiado." },
        { options: ["idées", "meubles", "voitures"], answer: 0, why: "La velada honora al ensayista: a quienes hacen durar las ideas, no los muebles." },
      ],
    },
    {
      id: "cz-fr-b2-02-2", title: "La soutenance, mode d'emploi", titleEs: "La defensa, manual de uso", minutes: 2,
      paragraphs: [
        { it: "La soutenance est un rituel réglé comme une cérémonie. Le candidat résume son travail en quinze minutes, répond aux questions du jury, puis s'efface pendant la {1}. On y parle un français soigné : « je me permets de préciser », « je tiens à remercier ». Les familiarités y sont proscrites, et le vouvoiement est de {2}, même lorsque l'on connaît ses professeurs depuis des années.", es: "La defensa es un rito regulado como una ceremonia. El candidato resume su trabajo en quince minutos, responde a las preguntas del jurado y luego se retira durante la deliberación. Allí se habla un francés cuidado: «me permito precisar», «quiero agradecer». Las confianzas están proscritas y el vouvoiement es de rigor, incluso cuando se conoce a los profesores desde hace años." },
        { it: "Les formules font partie du jeu : on remercie d'abord les {3} avant les proches, on salue la directrice de recherche, on annonce son plan. Celui qui néglige ce cérémonial passe pour mal élevé, même si son travail est brillant. En France, la forme n'est pas un {4} : elle est la preuve que l'on respecte l'institution. Et lorsque le jury prononce enfin le {5} attendu, la joie des familles n'en est que plus solennelle.", es: "Las fórmulas forman parte del juego: se agradece primero a las instituciones antes que a los cercanos, se saluda a la directora de investigación, se anuncia el plan. Quien descuida este ceremonial pasa por maleducado, aunque su trabajo sea brillante. En Francia, la forma no es un adorno: es la prueba de que se respeta la institución. Y cuando el jurado pronuncia por fin el veredicto esperado, la alegría de las familias resulta aún más solemne." },
      ],
      gaps: [
        { options: ["délibération", "récréation", "paie"], answer: 0, why: "El candidato «s'efface» mientras el jurado delibera a puerta cerrada." },
        { options: ["rigueur", "mode", "fête"], answer: 0, why: "«Être de rigueur» = ser obligatorio: el tuteo está prohibido en la defensa." },
        { options: ["institutions", "voisins", "cousins"], answer: 0, why: "El orden protocolario agradece primero a las instituciones, no a los vecinos." },
        { options: ["ornement", "obstacle", "secret"], answer: 0, why: "«Elle est la preuve que l'on respecte»: la forma no es un adorno, demuestra respeto." },
        { options: ["verdict", "prénom", "menu"], answer: 0, why: "«Le verdict attendu»: lo que el jurado pronuncia al final es el fallo." },
      ],
    },
    {
      id: "cz-fr-b2-02-3", title: "Lyon, capitale de l'imprimerie", titleEs: "Lyon, capital de la imprenta", minutes: 2,
      paragraphs: [
        { it: "Au seizième siècle, Lyon était l'une des capitales européennes de l'imprimerie. Des centaines d'{1} travaillaient rue Mercière, et les livres sortis de leurs presses circulaient dans toute l'Europe. Cette industrie a nourri l'humanisme : c'est à Lyon que furent imprimés certains des premiers {2} grecs et français de l'époque, pour les lettrés de tout le continent.", es: "En el siglo XVI, Lyon era una de las capitales europeas de la imprenta. Cientos de impresores trabajaban en la rue Mercière, y los libros salidos de sus prensas circulaban por toda Europa. Esa industria alimentó el humanismo: en Lyon se imprimieron algunos de los primeros textos griegos y franceses de la época, para los letrados de todo el continente." },
        { it: "La ville a gardé de cette époque le goût de la {3} et des idées. Aujourd'hui encore, ses bibliothèques et ses maisons d'édition perpétuent la tradition, et le prix du jeune essayiste s'inscrit dans cet héritage. Pour un étudiant en {4}, recevoir une récompense à Lyon, c'est être accueilli dans une longue {5} de penseurs et d'artisans du livre.", es: "La ciudad ha conservado de aquella época el gusto por la lectura y las ideas. Todavía hoy, sus bibliotecas y sus editoriales perpetúan la tradición, y el premio al joven ensayista se inscribe en ese legado. Para un estudiante de letras, recibir una recompensa en Lyon es ser acogido en una larga estirpe de pensadores y artesanos del libro." },
      ],
      gaps: [
        { options: ["imprimeurs", "pêcheurs", "bouchers"], answer: 0, why: "Trabajan «rue Mercière» con prensas que producen libros: los impresores." },
        { options: ["textes", "meubles", "billets"], answer: 0, why: "Lo que se imprime para los letrados son textos griegos y franceses." },
        { options: ["lecture", "chasse", "bricolage"], answer: 0, why: "Bibliotecas y editoriales perpetúan el gusto por la lectura heredado." },
        { options: ["lettres", "comptabilité", "mécanique"], answer: 0, why: "El premio al ensayista lo recibe un estudiante de letras, no de contabilidad." },
        { options: ["lignée", "queue", "colonne"], answer: 0, why: "«De penseurs et d'artisans du livre»: una larga estirpe de gente del libro." },
      ],
    },
  ],

  "fr-cu-b2-03": [
    {
      id: "cz-fr-b2-03-1", title: "Le malentendu du contrat", titleEs: "El malentendido del contrato", minutes: 3,
      paragraphs: [
        { it: "Thomas a retrouvé son ami à la sortie du bureau, l'air sombre. « Alors, content d'avoir signé ? — Je l'ai survolé, le contrat. Le directeur m'avait dit à l'oral que c'était un CDI… » Thomas a ouvert la première page et pointé du doigt les mots « durée {1} » : six mois, renouvelable une fois. Le silence est tombé entre eux, lourd de {2}.", es: "Thomas reencontró a su amigo a la salida de la oficina, con cara sombría. «¿Y qué, contento con haber firmado? —Lo hojeé por encima, el contrato. El director me dijo de palabra que era un CDI…». Thomas abrió la primera página y señaló con el dedo las palabras «duración determinada»: seis meses, renovable una vez. El silencio cayó entre los dos, cargado de reproches." },
        { it: "« Si tu avais lu la première page, tu aurais vu la clause dès le premier jour », soupire Thomas. Ensemble, ils montent au {3} des ressources humaines, contrat et copie de l'annonce à l'appui. La responsable les écoute, admet que l'annonce était {4}, et promet d'étudier un passage en CDI si l'évaluation est bonne. En sortant, l'ami de Thomas en tire la leçon : à l'avenir, il lira chaque {5} avant de signer, sans exception.", es: "«Si hubieras leído la primera página, habrías visto la cláusula desde el primer día», suspira Thomas. Juntos suben al servicio de recursos humanos, con el contrato y una copia del anuncio como respaldo. La responsable los escucha, admite que el anuncio era ambiguo y promete estudiar un paso a CDI si la evaluación es buena. Al salir, el amigo de Thomas saca la lección: en adelante, leerá cada línea antes de firmar, sin excepción." },
      ],
      gaps: [
        { options: ["déterminée", "indéterminée", "libre"], answer: 0, why: "Seis meses renovable una vez: ese es un CDD, un contrato «à durée déterminée»." },
        { options: ["reproches", "rires", "fleurs"], answer: 0, why: "El amigo firmó sin leer y el silencio carga reproches, no risas." },
        { options: ["service", "théâtre", "marché"], answer: 0, why: "Suben a reclamar: el «service des ressources humaines» es el departamento de personal." },
        { options: ["ambiguë", "parfaite", "illisible"], answer: 0, why: "La responsable «admet» algo incómodo: el anuncio era ambiguo, y de ahí el malentendido." },
        { options: ["ligne", "chapitre", "titre"], answer: 0, why: "«Lire chaque ligne avant de signer»: la lección es leer hasta la letra pequeña." },
      ],
    },
    {
      id: "cz-fr-b2-03-2", title: "CDD ou CDI : ce que dit la loi", titleEs: "CDD o CDI: lo que dice la ley", minutes: 3,
      paragraphs: [
        { it: "En France, le contrat de travail a deux visages. Le CDI, contrat à durée indéterminée, est la {1} : il ne prévoit pas de date de fin. Le CDD, lui, reste l'exception et ne peut servir qu'à des cas prévus par la loi : remplacement d'un salarié, pic d'activité, saison. La loi encadre donc le CDD avec une grande {2} : durée maximale, nombre de renouvellements limité.", es: "En Francia, el contrato de trabajo tiene dos caras. El CDI, contrato de duración indeterminada, es la norma: no prevé fecha de fin. El CDD, en cambio, sigue siendo la excepción y solo puede usarse en casos previstos por la ley: sustitución de un asalariado, pico de actividad, temporada. La ley regula pues el CDD con gran rigor: duración máxima, número de renovaciones limitado." },
        { it: "À la fin d'un CDD, le salarié touche la prime de précarité, fixée à dix pour cent de la {3} totale brute. En cas de conflit, il peut saisir le conseil de prud'hommes, un tribunal composé pour moitié d'employeurs et de {4}. La période d'essai, elle aussi, est plafonnée par le Code du travail. Autrement dit : le salarié n'est jamais seul face à son {5}, et la parole s'envole, mais l'écrit reste.", es: "Al terminar un CDD, el asalariado cobra la prima de precariedad, fijada en el diez por ciento de la retribución total bruta. En caso de conflicto, puede acudir al conseil de prud'hommes, un tribunal compuesto a partes iguales por empleadores y asalariados. El período de prueba también está limitado por el Código del Trabajo. Dicho de otro modo: el asalariado nunca está solo frente a su empleador, y la palabra vuela, pero lo escrito queda." },
      ],
      gaps: [
        { options: ["norme", "exception", "devise"], answer: 0, why: "El CDI no prevé fecha de fin: es la regla general, y el propio texto llama al CDD «l'exception»." },
        { options: ["rigueur", "légèreté", "hâte"], answer: 0, why: "Duración máxima y renovaciones limitadas: la ley regula el CDD con gran severidad." },
        { options: ["rémunération", "vacance", "consommation"], answer: 0, why: "La prima se calcula sobre el diez por ciento de lo cobrado: la retribución total bruta." },
        { options: ["salariés", "avocats", "ministres"], answer: 0, why: "El prud'hommes es un tribunal paritario: mitad empleadores, mitad asalariados." },
        { options: ["employeur", "voisin", "banquier"], answer: 0, why: "La ley protege al asalariado en el conflicto con su empleador." },
      ],
    },
    {
      id: "cz-fr-b2-03-3", title: "Les conseils du forum", titleEs: "Los consejos del foro", minutes: 2,
      paragraphs: [
        { it: "Sur le forum d'une association de jeunes travailleurs, un message fait débat : « J'ai signé mon premier contrat sans lire les petites lignes, et j'ai découvert après coup que ma période d'essai durait quatre mois. » Les réponses affluent. Une internaute raconte qu'elle avait {1} le contrat « en diagonale » ; un autre conseille de vérifier la {2} d'essai avant toute signature.", es: "En el foro de una asociación de jóvenes trabajadores, un mensaje provoca debate: «Firmé mi primer contrato sin leer la letra pequeña y descubrí después que mi período de prueba duraba cuatro meses». Las respuestas afluyen. Una internauta cuenta que había recorrido el contrato «en diagonal»; otro aconseja verificar el período de prueba antes de cualquier firma." },
        { it: "Les conseils convergent : exiger une {3} écrite des promesses verbales, garder chaque courriel, photographier l'annonce d'origine. « Si j'avais tout archivé, j'aurais négocié bien plus vite », regrette un membre. Un vétéran du forum résume l'expérience de tous : la parole d'un directeur peut être sincère, mais seul le {4} signé engage l'entreprise. Depuis, la devise du forum s'affiche en haut de page : lisez avant de {5}, toujours.", es: "Los consejos convergen: exigir una confirmación escrita de las promesas verbales, guardar cada correo, fotografiar el anuncio original. «Si lo hubiera archivado todo, habría negociado mucho más rápido», se lamenta un miembro. Un veterano del foro resume la experiencia de todos: la palabra de un director puede ser sincera, pero solo el contrato firmado compromete a la empresa. Desde entonces, la divisa del foro aparece arriba de la página: lean antes de firmar, siempre." },
      ],
      gaps: [
        { options: ["parcouru", "rédigé", "traduit"], answer: 0, why: "«En diagonale»: lo leyó por encima, lo recorrió sin detenerse." },
        { options: ["période", "paie", "pause"], answer: 0, why: "El mensaje habla de los cuatro meses de prueba: conviene verificar la période d'essai." },
        { options: ["confirmation", "réclamation", "invitation"], answer: 0, why: "Las promesas verbales deben quedar por escrito: una confirmación escrita." },
        { options: ["contrat", "sourire", "téléphone"], answer: 0, why: "«Signé» y «engage l'entreprise»: solo el contrato firmado obliga a la empresa." },
        { options: ["signer", "dormir", "partir"], answer: 0, why: "La divisa final repite la lección de la unidad: leer antes de firmar." },
      ],
    },
  ],

  "fr-cu-b2-04": [
    {
      id: "cz-fr-b2-04-1", title: "Rencontre avec Camille Fontaine", titleEs: "Encuentro con Camille Fontaine", minutes: 3,
      paragraphs: [
        { it: "Camille Fontaine reçoit la presse dans un café de la rue de l'Odéon, à deux pas des librairies qui exposent déjà son premier roman. On dit que c'est le livre dont tout le monde parle. Elle sourit : « Vous {1} à peine ! Mon éditeur m'a dit que les libraires avaient aimé le manuscrit ; je ne m'attendais pas à un pareil {2}. »", es: "Camille Fontaine recibe a la prensa en un café de la rue de l'Odéon, a dos pasos de las librerías que ya exponen su primera novela. Dicen que es el libro del que todo el mundo habla. Ella sonríe: «¡Casi no exagera! Mi editor me dijo que a los libreros les había gustado el manuscrito; no esperaba semejante acogida»." },
        { it: "D'où venait cette histoire d'horloger dans le Paris des années trente ? De son grand-père, qui réparait des montres et racontait que chaque montre gardait la mémoire de son propriétaire : elle a simplement pris cette phrase au {3}. Au sujet de la rentrée, elle répond avec ironie : son agent lui avait prédit que septembre serait un {4}, alors elle a pris de l'avance sur son deuxième livre. En la quittant, on repart avec la {5} qu'il fallait : « on ne répare pas le passé, on apprend à le porter ».", es: "¿De dónde venía esa historia de un relojero en el París de los años treinta? De su abuelo, que reparaba relojes y contaba que cada reloj guardaba la memoria de su propietario: ella simplemente se tomó en serio esa frase. Sobre la temporada literaria responde con ironía: su agente le había predicho que septiembre sería un maratón, así que se adelantó con su segundo libro. Al despedirse de ella, uno se marcha con la cita que necesitaba: «no se repara el pasado: se aprende a llevarlo»." },
      ],
      gaps: [
        { options: ["exagérez", "dormez", "mentez"], answer: 0, why: "Responde a «le livre dont tout le monde parle»: casi no exagera, la fama es real." },
        { options: ["accueil", "reproche", "orage"], answer: 0, why: "Los libreros amaron el manuscrito: no esperaba semejante acogida." },
        { options: ["sérieux", "départ", "hasard"], answer: 0, why: "«Prendre une phrase au sérieux»: tomarse en serio la frase del abuelo." },
        { options: ["marathon", "vacance", "repos"], answer: 0, why: "Cientos de novelas en pocas semanas: septiembre será una carrera de fondo." },
        { options: ["citation", "facture", "valise"], answer: 0, why: "El periodista busca «du direct»: se va con la cita exacta para su artículo." },
      ],
    },
    {
      id: "cz-fr-b2-04-2", title: "La rentrée littéraire expliquée", titleEs: "La temporada literaria explicada", minutes: 3,
      paragraphs: [
        { it: "Chaque automne, la France vit au rythme de la rentrée littéraire : des centaines de romans paraissent en quelques semaines, si bien que les libraires n'arrivent pas à tous les {1}. Cette saison concentrée prépare la période des prix : d'octobre à novembre, les jurys décernent leurs {2}, et le destin d'un livre peut changer du jour au lendemain.", es: "Cada otoño, Francia vive al ritmo de la temporada literaria: cientos de novelas aparecen en pocas semanas, tanto que los libreros no llegan a leerlas todas. Esa temporada concentrada prepara la época de los premios: de octubre a noviembre, los jurados conceden sus recompensas, y el destino de un libro puede cambiar de la noche a la mañana." },
        { it: "Le plus célèbre, le Goncourt, décerné depuis 1903, se joue dans un restaurant parisien où le jury se réunit depuis plus d'un siècle. Un seul écrivain l'a reçu deux fois : Romain Gary, la seconde sous le {3} d'Émile Ajar. Pour un premier roman, figurer dans une sélection vaut déjà {4}. Les éditeurs le savent : ils gardent leurs espoirs pour septembre, car un prix multiplie les {5} par dizaines de milliers.", es: "El más célebre, el Goncourt, concedido desde 1903, se decide en un restaurante parisino donde el jurado se reúne desde hace más de un siglo. Un solo escritor lo ha recibido dos veces: Romain Gary, la segunda bajo el seudónimo de Émile Ajar. Para una primera novela, figurar en una selección ya vale consagración. Las editoriales lo saben: guardan sus esperanzas para septiembre, porque un premio multiplica las ventas por decenas de miles." },
      ],
      gaps: [
        { options: ["lire", "financer", "construire"], answer: 0, why: "Cientos de novelas en pocas semanas: los libreros no llegan a leerlas todas." },
        { options: ["récompenses", "sanctions", "consignes"], answer: 0, why: "«La période des prix»: los jurados conceden sus recompensas literarias." },
        { options: ["pseudonyme", "titre", "ministère"], answer: 0, why: "Romain Gary repitió el Goncourt oculto tras otro nombre: un seudónimo." },
        { options: ["consécration", "condamnation", "panne"], answer: 0, why: "Entrar en una selección ya vale consagración para un autor novel." },
        { options: ["ventes", "impôts", "divorces"], answer: 0, why: "Un premio multiplica por decenas de miles lo que un libro vende." },
      ],
    },
    {
      id: "cz-fr-b2-04-3", title: "Le stagiaire et la citation exacte", titleEs: "El becario y la cita exacta", minutes: 2,
      paragraphs: [
        { it: "Le stagiaire de la rédaction culturelle est revenu de son interview les mains pleines. À la rédactrice en chef, il a rapporté que Camille Fontaine avait grandi près d'un atelier d'horlogerie, que son grand-père lui avait appris à écouter les montres, et que l'idée du roman lui était venue d'une phrase entendue un dimanche. La journaliste a levé les yeux de son écran : « Tu as une {1} exacte ? Je veux du direct. »", es: "El becario de la redacción cultural volvió de su entrevista con las manos llenas. A la jefa de redacción le reportó que Camille Fontaine había crecido junto a un taller de relojería, que su abuelo le había enseñado a escuchar los relojes y que la idea de la novela le había venido de una frase oída un domingo. La periodista levantó la vista de su pantalla: «¿Tienes una cita exacta ? Quiero directo»." },
        { it: "Il a sorti son carnet : « On ne répare pas le passé : on apprend à le porter », a-t-elle {2}, en tournant son café. La rédactrice en chef a souri : voilà la phrase qui ouvrira l'article. Elle lui a demandé de {3} le reste sans inventer un seul mot, et de varier les verbes introducteurs : confier, souligner, ajouter. Le stagiaire a compris la règle du métier : à la rédaction, une citation exacte vaut mieux que trois {4} approximatifs, et l'exactitude est une forme de {5}.", es: "Sacó su cuaderno: «No se repara el pasado: se aprende a llevarlo», confió ella, removiendo su café. La jefa de redacción sonrió: he ahí la frase que abrirá el artículo. Le pidió resumir el resto sin inventar una sola palabra y variar los verbos introductorios: confiar, subrayar, añadir. El becario entendió la regla del oficio: en la redacción, una cita exacta vale más que tres paráfrasis aproximadas, y la exactitud es una forma de cortesía." },
      ],
      gaps: [
        { options: ["citation", "opinion", "photo"], answer: 0, why: "«Je veux du direct»: la jefa pide una frase textual, una cita exacta." },
        { options: ["confié", "crié", "refusé"], answer: 0, why: "Verbos introductores de prensa: la frase textual la confió la autora." },
        { options: ["résumer", "traduire", "prolonger"], answer: 0, why: "El resto de la entrevista se resume en estilo indirecto, sin inventar nada." },
        { options: ["paraphrases", "vacances", "imprimés"], answer: 0, why: "Mejor una cita exacta que tres paráfrasis aproximadas: la regla del oficio." },
        { options: ["politesse", "fatigue", "précipitation"], answer: 0, why: "Citar con exactitud es respetar al lector: una forma de cortesía." },
      ],
    },
  ],

  "fr-cu-b2-05": [
    {
      id: "cz-fr-b2-05-1", title: "L'atelier d'écriture de Lille", titleEs: "El taller de escritura de Lille", minutes: 3,
      paragraphs: [
        { it: "Samedi matin, à Lille, l'atelier d'écriture de Monsieur Delacroix commence par une relecture à voix haute. La consigne du mois : un essai sur les réseaux sociaux, « espace de liberté ou d'illusion ? ». Chacun lit son {1}, et le professeur note au tableau les mots à chasser : « beaucoup », « très », « les gens ». « En France, la précision est une politesse », rappelle-t-il.", es: "Sábado por la mañana, en Lille, el taller de escritura de Monsieur Delacroix empieza con una relectura en voz alta. La consigna del mes: un ensayo sobre las redes sociales, «¿espacio de libertad o de ilusión?». Cada uno lee su borrador, y el profesor anota en la pizarra las palabras que hay que cazar: «mucho», «muy», «la gente». «En Francia, la precisión es una cortesía», recuerda." },
        { it: "Vient le tour d'Élodie, qui ouvre son essai par une concession : « Certes, les réseaux nous donnent une voix, mais ils nous enferment dans des bulles. » Le professeur applaudit : c'est la respiration de l'essai à la française. Il rappelle la règle d'or : une concession bien placée vaut mieux que trois, et « malgré » appelle toujours un {2}, jamais une phrase. En sortant, les élèves emportent une {3} : concéder pour mieux réfuter, nuancer sans se perdre, conclure avec une {4} qui reprend la thèse. L'atelier forme ainsi de modestes héritiers d'une tradition née avec Montaigne, celle de penser en {5}.", es: "Llega el turno de Élodie, que abre su ensayo con una concesión: «Ciertamente, las redes nos dan voz, pero nos encierran en burbujas». El profesor aplaude: es la respiración del ensayo a la francesa. Recuerda la regla de oro: una concesión bien colocada vale más que tres, y «malgré» rige siempre un sustantivo, nunca una oración. Al salir, los alumnos se llevan un método: conceder para mejor refutar, matizar sin perderse, concluir con una síntesis que retome la tesis. El taller forma así a modestos herederos de una tradición nacida con Montaigne: la de pensar en matices." },
      ],
      gaps: [
        { options: ["brouillon", "ticket", "menu"], answer: 0, why: "Se lee en voz alta el texto aún sin terminar del ensayo: el borrador." },
        { options: ["nom", "verbe", "adverbe"], answer: 0, why: "«Malgré» rige sustantivo («malgré la pluie»); con oración se usa «bien que»." },
        { options: ["méthode", "punition", "excursion"], answer: 0, why: "Conceder, matizar, concluir: los alumnos se llevan un método de escritura." },
        { options: ["synthèse", "citation", "pause"], answer: 0, why: "El plan thèse–antithèse se cierra con la síntesis que retoma la tesis." },
        { options: ["nuances", "silence", "groupe"], answer: 0, why: "La tradición de Montaigne es la del matiz: pensar en matices, no en blanco y negro." },
      ],
    },
    {
      id: "cz-fr-b2-05-2", title: "Montaigne et l'art du doute", titleEs: "Montaigne y el arte de la duda", minutes: 3,
      paragraphs: [
        { it: "En 1580, dans la tour de sa maison du Périgord, Montaigne publiait ses Essais et baptisait, ce faisant, un genre entier : la tentative, l'essai précisément. Refusant les certitudes de son temps, il écrivait à la première personne, en {1} ses doutes au fil des pages. « Que sais-je ? », sa devise gravée sur ses poutres, disait déjà tout : le {2} est un point de départ, pas une faiblesse.", es: "En 1580, en la torre de su casa del Périgord, Montaigne publicaba sus Essais y bautizaba con ello un género entero: la tentativa, el ensayo precisamente. Rehusando las certezas de su tiempo, escribía en primera persona, confesando sus dudas al hilo de las páginas. «¿Qué sé?», su divisa grabada en sus vigas, lo decía ya todo: la duda es un punto de partida, no una debilidad." },
        { it: "Quatre siècles plus tard, la dissertation française a hérité de cette méthode : exposer une thèse, lui opposer l'antithèse, construire une synthèse. Les tribunes de presse jouent la même partition : l'auteur admet une {3} avant d'y répondre, et en l'acceptant il la désarme. Cette tradition fait de l'essai un sport intellectuel : on ne cherche pas à écraser l'{4}, mais à l'entraîner vers une pensée plus juste. Le génie de Montaigne tient dans cette {5} : changer d'avis est la preuve que l'on pense encore.", es: "Cuatro siglos después, la dissertation francesa ha heredado ese método: exponer una tesis, oponerle la antítesis, construir una síntesis. Las tribunas de prensa tocan la misma partitura: el autor admite una concesión antes de responderle, y al aceptarla la desarma. Esta tradición convierte el ensayo en un deporte intelectual: no se busca aplastar al adversario, sino llevarlo hacia un pensamiento más justo. El genio de Montaigne está en esa elegancia: cambiar de opinión es la prueba de que todavía se piensa." },
      ],
      gaps: [
        { options: ["avouant", "cachant", "vendant"], answer: 0, why: "Escribe en primera persona confesando sus dudas, sin esconderlas." },
        { options: ["doute", "silence", "pouvoir"], answer: 0, why: "«Que sais-je ?»: la divisa convierte la duda en punto de partida." },
        { options: ["concession", "correction", "élection"], answer: 0, why: "Admite algo del rival antes de responder: la concesión que desarma." },
        { options: ["adversaire", "éditeur", "professeur"], answer: 0, why: "El ensayo no aplasta al rival: lo guía hacia un pensamiento más justo." },
        { options: ["élégance", "fatigue", "précipitation"], answer: 0, why: "Cambiar de opinión sin drama: esa flexibilidad es una elegancia." },
      ],
    },
    {
      id: "cz-fr-b2-05-3", title: "Sortir de sa bulle", titleEs: "Salir de la burbuja", minutes: 2,
      paragraphs: [
        { it: "Certes, les réseaux sociaux donnent une voix à chacun ; mais cette voix résonne souvent dans une bulle. Les algorithmes nous renvoient notre propre {1} : mêmes goûts, mêmes opinions, mêmes indignations. Bien que la promesse initiale fût l'ouverture, le résultat ressemble parfois à un miroir. Sortir de cette bulle demande un effort conscient, presque physique.", es: "Ciertamente, las redes sociales dan voz a todos; pero esa voz resuena a menudo dentro de una burbuja. Los algoritmos nos devuelven nuestro propio reflejo: mismos gustos, mismas opiniones, mismas indignaciones. Aunque la promesa inicial fuera la apertura, el resultado se parece a veces a un espejo. Salir de esa burbuja exige un esfuerzo consciente, casi físico." },
        { it: "Les conseils abondent : suivre des auteurs avec qui l'on n'est pas d'accord, lire un journal papier dont on choisit soi-même les pages, vérifier une {2} avant de la partager. Malgré leur confort, les fils d'actualité nous rendent paresseux : ils décident à notre place de ce qui mérite notre {3}. En somme, la question n'est pas de fuir les réseaux, mais d'apprendre à les {4} — et, de temps en temps, de leur préférer une conversation en vrai, autour d'une table, où l'on voit le {5} de son interlocuteur.", es: "Los consejos abundan: seguir a autores con los que no se está de acuerdo, leer un periódico de papel cuyas páginas elige uno mismo, verificar un rumor antes de compartirlo. A pesar de su comodidad, los hilos de actualidad nos vuelven perezosos: deciden por nosotros qué merece nuestra atención. En suma, la cuestión no es huir de las redes, sino aprender a leerlas; y, de vez en cuando, preferirles una conversación de verdad, alrededor de una mesa, donde se ve la cara del interlocutor." },
      ],
      gaps: [
        { options: ["reflet", "voisin", "salaire"], answer: 0, why: "«Le résultat ressemble à un miroir»: el algoritmo devuelve el propio reflejo." },
        { options: ["rumeur", "recette", "chanson"], answer: 0, why: "Antes de compartir conviene verificar aquello que circula sin fuente: un rumor." },
        { options: ["attention", "voiture", "loyer"], answer: 0, why: "Los hilos deciden qué merece nuestro interés: nuestra atención." },
        { options: ["lire", "peindre", "compter"], answer: 0, why: "No se trata de huir sino de aprender a leer las redes: alfabetización crítica." },
        { options: ["visage", "téléphone", "profil"], answer: 0, why: "Frente a una mesa real se ve la cara del otro, no solo su perfil." },
      ],
    },
  ],

  "fr-cu-b2-06": [
    {
      id: "cz-fr-b2-06-1", title: "Le debriefing du bar", titleEs: "El debriefing del bar", minutes: 2,
      paragraphs: [
        { it: "Vendredi soir, au comptoir d'un bar du onzième, l'équipe débriefe le séminaire de la veille. « Alors, cette journée de team building ? — Absolument {1} », souffle Chloé, l'œil vide. « Un modèle de {2} », ajoute Marc. « Je suis resté suspendu à chaque diapositive. » Personne n'a besoin de préciser que la journée fut longue : le second degré dit tout.", es: "Viernes por la noche, en el mostrador de un bar del distrito once, el equipo hace el debriefing del seminario del día anterior. «¿Y qué, esa jornada de team building? —Absolutamente apasionante», suspira Chloé con la mirada vacía. «Un modelo de suspense», añade Marc. «Me quedé en vilo con cada diapositiva». Nadie necesita precisar que la jornada fue larguísima: el segundo grado lo dice todo." },
        { it: "Le jeu s'organise : réécrire les demandes poliment. « Je me demanderais si l'entreprise pourrait envisager de repenser ses réunions », propose la nouvelle recrue, qui commence à maîtriser le conditionnel d'atténuation. « Traduction : vos réunions nous épuisent », traduit Chloé. Marc pose la règle du soir : l'ironie est comme le {3}, une pincée relève, trop, ça brûle. Et le buffet « raffiné » de la veille en était la {4} : il en restait des plateaux entiers, ce qui veut tout {5}.", es: "El juego se organiza: reescribir las demandas con cortesía. «Me preguntaría si la empresa podría considerar replantearse sus reuniones», propone la nueva incorporación, que empieza a dominar el condicional de atenuación. «Traducción: vuestras reuniones nos agotan», traduce Chloé. Marc pone la regla de la noche: la ironía es como el picante, una pizca realza, demasiada, quema. Y el bufé «refinado» de la víspera era la prueba: sobraron bandejas enteras, y eso lo dice todo." },
      ],
      gaps: [
        { options: ["passionnant", "court", "calme"], answer: 0, why: "Suspirada con la mirada vacía: el elogio absoluto «passionnant» es antífrasis por una jornada aburridísima." },
        { options: ["suspense", "générosité", "courage"], answer: 0, why: "«Suspendu à chaque diapositive»: la presentación fue un «modelo de suspense», ironía por aburrida." },
        { options: ["piment", "sucre", "orage"], answer: 0, why: "«Une pincée relève, trop, ça brûle»: la ironía se dosifica como el picante." },
        { options: ["preuve", "récompense", "exception"], answer: 0, why: "Sobraron bandejas enteras: el buffet fallido era la prueba de la regla." },
        { options: ["dire", "changer", "coûter"], answer: 0, why: "«Ça veut tout dire»: señal irónica que lo explica todo sin decirlo." },
      ],
    },
    {
      id: "cz-fr-b2-06-2", title: "L'esprit de l'escalier", titleEs: "El espíritu de la escalera", minutes: 3,
      paragraphs: [
        { it: "Au dix-huitième siècle, Denis Diderot forgeait une expression restée célèbre : l'esprit de l'escalier. La {1} parfaite nous vient à l'esprit trop tard, au moment de descendre l'escalier, quand la conversation est finie. Ce léger retard de l'esprit est une {2} universelle : qui n'a jamais rédigé, la nuit suivante, la réponse qui aurait tout changé ?", es: "En el siglo XVIII, Denis Diderot acuñaba una expresión que se haría célebre: el espíritu de la escalera. La réplica perfecta nos viene a la cabeza demasiado tarde, al bajar la escalera, cuando la conversación ha terminado. Ese ligero retraso del ingenio es una experiencia universal: ¿quién no ha redactado, la noche siguiente, la respuesta que lo habría cambiado todo?" },
        { it: "La culture française a fait de ce retard un art de vivre : la repartie fine, la réponse qui glisse, l'éloge qui pique. Depuis Molière, la comédie peint les vices sous le masque du sérieux, et le spectateur attentif {3} entre les lignes. Mais l'ironie a ses lois : elle exige des clés partagées. Entre amis, elle soude ; avec un {4}, elle blesse ou se perd. D'où la sagesse de bureau : avant de plaisanter au second degré, vérifiez que votre interlocuteur possède les clés ; sinon, restez au premier {5}.", es: "La cultura francesa ha convertido ese retraso en un arte de vivir: la réplica fina, la respuesta que se desliza, el elogio que pincha. Desde Molière, la comedia pinta los vicios bajo la máscara de la seriedad, y el espectador atento lee entre líneas. Pero la ironía tiene sus leyes: exige claves compartidas. Entre amigos une; con un desconocido, hiere o se pierde. De ahí la sabiduría de oficina: antes de bromear en segundo grado, comprueba que tu interlocutor tiene las claves; si no, quédate en el primer grado." },
      ],
      gaps: [
        { options: ["réplique", "question", "excuse"], answer: 0, why: "La respuesta perfecta que llega tarde: la réplica que Diderot bautizó." },
        { options: ["expérience", "maladie", "chance"], answer: 0, why: "«Qui n'a jamais rédigé, la nuit suivante ?»: un vivir universal, una experiencia común." },
        { options: ["lit", "dort", "chante"], answer: 0, why: "La comedia pinta los vicios bajo máscara: el espectador lee entre líneas." },
        { options: ["inconnu", "proche", "parent"], answer: 0, why: "Contraste con «entre amis, elle soude»: con un desconocido la ironía hiere." },
        { options: ["degré", "étage", "rang"], answer: 0, why: "«Second degré» tiene su opuesto: quedarse en el primer grado, el sentido literal." },
      ],
    },
    {
      id: "cz-fr-b2-06-3", title: "Le souci et autres euphémismes", titleEs: "El souci y otros eufemismos", minutes: 3,
      paragraphs: [
        { it: "Le vocabulaire de bureau a ses fards. « On a un petit souci » ne veut pas dire un souci petit : la formule annonce souvent un {1} bien réel. « L'entreprise traverse une phase de réorganisation » peut masquer des départs, et le « plan de sauvegarde de l'emploi » désigne, par une ironie administrative, des {2} secs. Ces fards ne trompent personne, mais tout le monde fait semblant : c'est le prix de la paix des bureaux.", es: "El vocabulario de oficina tiene sus afeites. «Tenemos un pequeño souci» no significa un problema pequeño: la fórmula anuncia a menudo un problema bien real. «La empresa atraviesa una fase de reorganización» puede encubrir salidas, y el «plan de salvaguarda del empleo» designa, por ironía administrativa, despidos secos. Esos afeites no engañan a nadie, pero todo el mundo finge: es el precio de la paz de las oficinas." },
        { it: "Face à ces euphémismes, le franc-parler total serait brutal ; la {3} absolue serait indétectable. La solution française tient dans le conditionnel d'atténuation : « votre présentation pourrait gagner à être plus courte », « je me demanderais s'il n'y a pas une erreur ». On dit tout, mais on le dit {4} : la critique devient hypothèse, et l'hypothèse laisse à chacun une sortie digne. Bien manié, l'euphémisme n'est pas un mensonge : c'est de l'escrime verbale, où l'on touche sans {5}.", es: "Frente a estos eufemismos, la franqueza total sería brutal; la ironía absoluta sería indetectable. La solución francesa está en el condicional de atenuación: «su presentación podría ganar siendo más corta», «me preguntaría si no hay un error». Se dice todo, pero se dice suavemente: la crítica se vuelve hipótesis, y la hipótesis deja a cada uno una salida digna. Bien manejado, el eufemismo no es una mentira: es esgrima verbal, donde se toca sin herir." },
      ],
      gaps: [
        { options: ["problème", "cadeau", "succès"], answer: 0, why: "«Un petit souci» anuncia lo contrario de pequeño: un problema bien real." },
        { options: ["licenciements", "embauches", "promotions"], answer: 0, why: "El «plan de salvaguarda del empleo» es la ironía administrativa de los despidos." },
        { options: ["ironie", "politesse", "tristesse"], answer: 0, why: "Contraste con el franc-parler: la ironía absoluta sería indetectable." },
        { options: ["doucement", "vite", "fort"], answer: 0, why: "El condicional deja decirlo todo, pero dicho con suavidad." },
        { options: ["blesser", "dormir", "gagner"], answer: 0, why: "Esgrima verbal: se toca al adversario sin herirlo." },
      ],
    },
  ],

  "fr-cu-b2-07": [
    {
      id: "cz-fr-b2-07-1", title: "La correction de Madame Perrin", titleEs: "La corrección de Madame Perrin", minutes: 3,
      paragraphs: [
        { it: "Dans la salle de rédaction d'une revue culturelle, Madame Perrin corrige les articles au feutre rouge. Aujourd'hui, c'est le texte sur les librairies de quartier qui passe au crible. « Vous écrivez “beaucoup de gens ne lisent plus”. Beaucoup, c'est combien ? Donnez-moi un {1} : trois habitants sur quatre, une enquête, une date. » Le jeune journaliste note, penaud : la précision est une {2}.", es: "En la sala de redacción de una revista cultural, Madame Perrin corrige los artículos con rotulador rojo. Hoy es el texto sobre las librerías de barrio el que pasa por el cedazo. «Usted escribe “mucha gente ya no lee”. Mucha, ¿es cuánta ? Demuéstreme una cifra: tres de cada cuatro habitantes, una encuesta, una fecha». El joven periodista anota, avergonzado: la precisión es una cortesía." },
        { it: "La correction continue : « Les librairies disparaissent », c'est trop fort ; « elles se font {3}, du moins dans les quartiers chers », c'est juste. « À peine le café a-t-il ouvert que les lycéens s'y installent » : cette phrase, Madame Perrin la garde — elle donne du rythme. En partant, elle résume sa {4} : « Ne dites jamais plus que ce que vous savez. Une phrase juste pèse plus lourd que trois phrases {5}. »", es: "La corrección continúa: «Las librerías desaparecen» es demasiado fuerte; «escasean, al menos en los barrios caros» es justo. «Apenas ha abierto el café, ya se instalan en él los estudiantes de bachillerato»: esa frase, Madame Perrin la conserva, da ritmo. Al marcharse, resume su regla: «No diga nunca más de lo que sabe. Una frase justa pesa más que tres frases aproximadas»." },
      ],
      gaps: [
        { options: ["chiffre", "rêve", "titre"], answer: 0, why: "«Beaucoup, c'est combien ?»: pide un dato exacto, una cifra." },
        { options: ["politesse", "punition", "mode"], answer: 0, why: "La máxima del oficio: en Francia, la precisión es una cortesía." },
        { options: ["rares", "riches", "belles"], answer: 0, why: "«C'est trop fort» exige matiz: escasean (se font rares), al menos en los barrios caros." },
        { options: ["règle", "faute", "paix"], answer: 0, why: "«Ne dites jamais plus que ce que vous savez»: eso es una regla de conducta." },
        { options: ["approximatives", "parfaites", "courtes"], answer: 0, why: "La frase justa pesa más que tres frases imprecisas, opuesto de exactas." },
      ],
    },
    {
      id: "cz-fr-b2-07-2", title: "Chasser l'à-peu-près", titleEs: "Cazar la imprecisión", minutes: 3,
      paragraphs: [
        { it: "Dans les écoles de journalisme françaises, on apprend aux débutants à chasser l'à-peu-près : le « beaucoup de gens », le « on sait que », le « il paraît que ». Un bon article dit exactement ce qu'il sait, ni plus, ni {1}. La dépêche d'agence impose cette discipline : une {2}, un lieu, un chiffre, et rien au-delà.", es: "En las escuelas de periodismo francesas se enseña a los debutantes a cazar la imprecisión: el «mucha gente», el «se sabe que», el «parece ser». Un buen artículo dice exactamente lo que sabe, ni más ni menos. La agencia noticiosa impone esa disciplina: una fecha, un lugar, una cifra, y nada más allá." },
        { it: "Face à cette exigence, la langue de bois représente l'ennemi juré : ses formules vides — « dans un contexte de mutation » — noient le {3} sous le vernis. La tradition française de précision remonte aux grandes agences de presse du dix-neuvième siècle, lorsque la {4} d'une information dépendait déjà du câble qui la portait. À l'heure des réseaux sociaux, la règle devient plus {5} que jamais : celui qui précise ses sources se distingue de celui qui crie.", es: "Frente a esa exigencia, la langue de madera es el enemigo jurado: sus fórmulas vacías —«en un contexto de mutación»— ahogan el sentido bajo el barniz. La tradición francesa de precisión se remonta a las grandes agencias de prensa del siglo XIX, cuando la difusión de una información dependía ya del cable que la transportaba. A la hora de las redes sociales, la regla se vuelve más necesaria que nunca: quien precisa sus fuentes se distingue de quien grita." },
      ],
      gaps: [
        { options: ["moins", "plus", "mieux"], answer: 0, why: "«Ni plus, ni moins»: la fórmula fija exige decir exactamente lo que se sabe." },
        { options: ["date", "chanson", "devise"], answer: 0, why: "La dépêche se compone de fecha, lugar y cifra: lo verificable." },
        { options: ["sens", "profit", "public"], answer: 0, why: "Las fórmulas vacías ahogan el significado bajo el barniz administrativo." },
        { options: ["diffusion", "couleur", "longueur"], answer: 0, why: "En el siglo XIX, el cable determinaba la propagación de la noticia." },
        { options: ["nécessaire", "facile", "obsolète"], answer: 0, why: "Con las redes sociales, precisar fuentes es más imprescindible que nunca." },
      ],
    },
    {
      id: "cz-fr-b2-07-3", title: "Le quartier qui change", titleEs: "El barrio que cambia", minutes: 2,
      paragraphs: [
        { it: "Dans le quartier, les commerces changent de mains, et les habitants y regardent à deux fois. Il n'y a plus que trois cafés, du moins dans la partie haute ; en bas, près du canal, la nouvelle {1} municipale attire les lycéens dès l'ouverture. À peine la grille est-elle levée que les tables se remplissent, et le silence du matin s'efface.", es: "En el barrio, los comercios cambian de manos, y los vecinos lo miran dos veces. Ya solo quedan tres cafés, al menos en la parte alta; abajo, cerca del canal, la nueva biblioteca municipal atrae a los estudiantes de bachillerato desde la apertura. Apenas se levanta la verja, las mesas se llenan, y el silencio de la mañana se desvanece." },
        { it: "Les anciens s'inquiètent : le quartier perd ses artisans, sa {2} de toujours, ses odeurs de pain et d'encre. Les nouveaux arrivants, eux, saluent la tranquillité et les librairies qui réapparaissent. Qui a raison ? Peut-être personne : le quartier ne meurt pas, il change de {3}. En somme, la seule phrase honnête exigerait des chiffres précis — combien de commerces fermés, combien d'ouverts, à quelle {4} — car sans données, il n'y a que des {5} qui s'affrontent.", es: "Los antiguos se inquietan: el barrio pierde a sus artesanos, su panadería de siempre, sus olores a pan y a tinta. Los recién llegados, en cambio, celebran la tranquilidad y las librerías que reaparecen. ¿Quién tiene razón ? Quizá nadie: el barrio no muere, cambia de manos. En suma, la única frase honesta exigiría cifras precisas —cuántos comercios cerrados, cuántos abiertos, a qué ritmo—, porque sin datos solo hay impresiones enfrentadas." },
      ],
      gaps: [
        { options: ["bibliothèque", "prison", "usine"], answer: 0, why: "Atracción municipal que llena las mesas de estudiantes: una biblioteca." },
        { options: ["boulangerie", "mairie", "gare"], answer: 0, why: "«Odeurs de pain»: el comercio artesano de siempre es la panadería." },
        { options: ["mains", "nom", "loi"], answer: 0, why: "«Il ne meurt pas»: cambia de manos, de propietarios, no de identidad." },
        { options: ["vitesse", "heure", "adresse"], answer: 0, why: "Cuántos cierran y abren y a qué ritmo: los datos piden velocidad del cambio." },
        { options: ["impressions", "lois", "budgets"], answer: 0, why: "Sin datos, solo hay pareceres subjetivos que se enfrentan: impresiones." },
      ],
    },
  ],

  "fr-cu-b2-08": [
    {
      id: "cz-fr-b2-08-1", title: "Quatorze heures, conférence de rédaction", titleEs: "Las catorce horas, reunión de redacción", minutes: 3,
      paragraphs: [
        { it: "Chaque jour à 14 heures, dans les locaux d'un quotidien rennais, la conférence de rédaction réunit journalistes et secrétaires de rédaction. La {1} du jour est bouclée ; reste l'éditorial, la page d'opinion qui engage le journal tout entier. La rédactrice en chef ouvre le débat : « Quel {2} pour la réforme des transports ? »", es: "Cada día a las 14 horas, en la sede de un diario de Rennes, la reunión de redacción reúne a periodistas y editores. La portada del día está cerrada; queda el editorial, la página de opinión que compromete al periódico entero. La jefa de redacción abre el debate: «¿Qué enfoque para la reforma de los transportes ?»" },
        { it: "Un journaliste propose de partir du vécu des usagers : des voyageurs bloqués chaque matin par des grilles fermées. Sa collègue objecte : la voix passive {3} qui décide — mieux vaut écrire « la direction a fermé les grilles ». On peaufine la péroraison : « Ce qui doit changer, ce n'est pas les grilles : c'est la méthode. » À 15 heures, l'éditorial est adopté, et le journal tout entier en portera la {4} : demain matin, c'est sa une qui sera commentée {5}.", es: "Un periodista propone partir de la experiencia de los usuarios: viajeros bloqueados cada mañana por verjas cerradas. Su colega objeta: la voz pasiva esconde quién decide; mejor escribir «la dirección ha cerrado las verjas». Se pule la peroración: «Lo que debe cambiar no son las verjas: es el método». A las 15 horas, el editorial queda aprobado, y el periódico entero cargará con su responsabilidad: mañana por la mañana será su portada la que se comente en todas partes." },
      ],
      gaps: [
        { options: ["une", "publicité", "imprimante"], answer: 0, why: "«La une du jour est bouclée»: la portada, la primera página del diario." },
        { options: ["angle", "horaire", "budget"], answer: 0, why: "Se busca el punto de vista para tratar la reforma: el enfoque, el angle." },
        { options: ["cache", "montre", "corrige"], answer: 0, why: "La objeta lo dice: la pasiva esconde quién decide." },
        { options: ["responsabilité", "paix", "impression"], answer: 0, why: "El editorial compromete al diario entero: carga con su responsabilidad." },
        { options: ["partout", "nulle part", "hier"], answer: 0, why: "«Sa une» será comentada en todos los sitios, no en ninguno." },
      ],
    },
    {
      id: "cz-fr-b2-08-2", title: "Qui signe l'éditorial ?", titleEs: "¿Quién firma el editorial ?", minutes: 3,
      paragraphs: [
        { it: "Dans un quotidien français, l'éditorial occupe une place à part : il exprime l'opinion de la {1} tout entière, et non celle d'un journaliste isolé. C'est pourquoi il n'est pas signé d'un nom propre : le journal en assume collectivement la {2}. Cette tradition remonte à la presse d'opinion du dix-neuvième siècle, lorsque chaque titre défendait ouvertement un camp.", es: "En un diario francés, el editorial ocupa un lugar aparte: expresa la opinión de la redacción entera, y no la de un periodista aislado. Por eso no lo firma un nombre propio: el periódico asume colectivamente su responsabilidad. Esa tradición se remonta a la prensa de opinión del siglo XIX, cuando cada título defendía abiertamente un bando." },
        { it: "Le lecteur attentif reconnaît la ligne éditoriale à des signes constants : le choix des sujets, le ton des titres, la manière de {3} les invités du jour. Le Figaro, fondé en 1826, cultive un style classique ; Le Monde, né en 1944, se veut rigoureux et mesuré ; Libération, apparu dans les années soixante-dix, préfère l'ironie. Chaque matin, l'éditorial est le geste par lequel un journal met sa crédibilité en {4} : sur ce texte, il ne peut ni tricher, ni se cacher derrière la {5} de l'information neutre.", es: "El lector atento reconoce la línea editorial por señales constantes: la elección de los temas, el tono de los titulares, la manera de elegir a los invitados del día. Le Figaro, fundado en 1826, cultiva un estilo clásico; Le Monde, nacido en 1944, presume de riguroso y mesurado; Libération, aparecido en los años setenta, prefiere la ironía. Cada mañana, el editorial es el gesto por el que un periódico pone su credibilidad en juego: sobre ese texto no puede hacer trampas ni esconderse tras la neutralidad de la información neutra." },
      ],
      gaps: [
        { options: ["rédaction", "publicité", "imprimerie"], answer: 0, why: "El editorial expresa la opinión colectiva de quienes hacen el periódico: la redacción." },
        { options: ["responsabilité", "paix", "fortune"], answer: 0, why: "Sin firma individual, el diario asume colectivamente la responsabilidad del texto." },
        { options: ["choisir", "payer", "traduire"], answer: 0, why: "Los invitados del día son seleccionados: la línea editorial se ve en cómo se los elige." },
        { options: ["jeu", "pause", "réserve"], answer: 0, why: "«Mettre en jeu»: cada editorial arriesga la credibilidad del diario." },
        { options: ["neutralité", "publicité", "richesse"], answer: 0, why: "El editorial es opinión: no puede esconderse tras la neutralidad de la noticia." },
      ],
    },
    {
      id: "cz-fr-b2-08-3", title: "Écrire pour responsabiliser", titleEs: "Escribir para responsabilizar", minutes: 2,
      paragraphs: [
        { it: "La grammaire n'est jamais neutre : dire « les grilles ont été fermées » sans préciser par qui, c'est déjà prendre parti — pour le flou. Les manuels de style des rédactions françaises recommandent donc de {1} le sujet réel de l'action, ou d'utiliser la mise en relief : « c'est la direction qui a fermé les grilles ». L'accent tombe alors sur le {2}, sans un cri.", es: "La gramática nunca es neutra: decir «las verjas han sido cerradas» sin precisar por quién es ya tomar partido, a favor de la niebla. Los manuales de estilo de las redacciones francesas recomiendan por eso devolver el sujeto real de la acción, o usar el relieve: «es la dirección quien ha cerrado las verjas». El acento cae entonces sobre el responsable, sin un grito." },
        { it: "La formule « ce qui doit changer, c'est la méthode » appartient à la même famille : elle extrait une idée du flot de la phrase pour la {3} en vedette. Ce tour, très français, permet de corriger, de responsabiliser ou de conclure avec calme. Encore faut-il ne pas en {4} : un texte où tout serait mis en relief ne relèverait plus rien. La mise en relief est un {5} : elle ne dit pas tout, elle choisit.", es: "La fórmula «lo que debe cambiar es el método» pertenece a la misma familia: extrae una idea del flujo de la frase para ponerla en cartel. Ese giro, muy francés, permite corregir, responsabilizar o concluir con calma. Eso sí, conviene no abusar: en un texto donde todo estuviera en relieve, nada se destacaría. El relieve es un proyector: no lo dice todo, elige." },
      ],
      gaps: [
        { options: ["rendre", "cacher", "effacer"], answer: 0, why: "Los manuales piden devolver el sujeto real: «rendre le sujet» frente a la pasiva sin agente." },
        { options: ["responsable", "hasard", "voisin"], answer: 0, why: "«Sans un cri»: el relieve hace caer el acento sobre el responsable." },
        { options: ["mettre", "chanter", "perdre"], answer: 0, why: "«Mettre en vedette»: colocar la idea elegida en el centro de la escena." },
        { options: ["abuser", "rêver", "sortir"], answer: 0, why: "Si todo está en relieve, nada se destaca: hay que no abusar del giro." },
        { options: ["projecteur", "parapluie", "mètre"], answer: 0, why: "Ilumina una parte y deja el resto en sombra: un proyector, no un paraguas." },
      ],
    },
  ],

  "fr-cu-b2-09": [
    {
      id: "cz-fr-b2-09-1", title: "La lettre recommandée", titleEs: "La carta certificada", minutes: 3,
      paragraphs: [
        { it: "À Strasbourg, la file du bureau de poste s'allonge un samedi matin sur l'autre. Au guichet, un client fait peser sa lettre recommandée avec accusé de réception : c'est une {1} pour un lave-linge tombé en panne trois semaines après l'achat. L'employé tamponne, sourit : « Vous n'êtes pas le premier aujourd'hui. La parole s'envole, l'{2} reste, n'est-ce pas ? »", es: "En Estrasburgo, la cola de la oficina de correos se alarga un sábado tras otro. En la ventanilla, un cliente hace pesar su carta certificada con acuse de recibo: es una reclamación por una lavadora que dejó de funcionar tres semanas después de la compra. El empleado sella, sonríe: «No es usted el primero de hoy. La palabra vuela, lo escrito queda, ¿verdad?»" },
        { it: "La lettre suit son rituel : appelation — « Madame, Monsieur, » —, objet, faits datés, copie de la facture. La demande est ferme et courtoise : remboursement intégral sous quinze jours, faute de quoi l'expéditeur saisira la {3}. La formule de politesse finale déroule ses trois lignes impeccables. Au fond, cette lettre dit une chose simple : son auteur connaît ses {4}, et il compte bien les faire {5}.", es: "La carta sigue su ritual: llamada al destinatario —«Señora, Señor:»—, asunto, hechos con fechas, copia de la factura. La demanda es firme y cortés: reembolso íntegro en quince días, a falta de lo cual el remitente acudirá a la justicia. La fórmula de cortesía final despliega sus tres líneas impecables. Al fondo, esta carta dice algo simple: su autor conoce sus derechos y cuenta bien con hacerlos respetar." },
      ],
      gaps: [
        { options: ["réclamation", "invitation", "réservation"], answer: 0, why: "Una lavadora averiada y una carta certificada: una reclamación formal." },
        { options: ["écrit", "oral", "email"], answer: 0, why: "Contraste con «la parole s'envole»: lo que queda por escrito es el écrit." },
        { options: ["justice", "boulangerie", "mairie"], answer: 0, why: "«Faute de quoi»: si no hay respuesta, el remitente acudirá a la justicia." },
        { options: ["droits", "limites", "amis"], answer: 0, why: "El autor de la reclamación conoce lo que la ley le reconoce: sus derechos." },
        { options: ["respecter", "oublier", "perdre"], answer: 0, why: "Conocer los derechos sirve para hacerlos respetar, no olvidarlos." },
      ],
    },
    {
      id: "cz-fr-b2-09-2", title: "Madame de Sévigné et l'art épistolaire", titleEs: "Madame de Sévigné y el arte epistolar", minutes: 3,
      paragraphs: [
        { it: "Au dix-septième siècle, Madame de Sévigné écrivait à sa fille presque chaque jour des lettres si vivantes qu'on les lit encore comme des œuvres. Elle y {1} les nouvelles de la cour, les potins, les recettes, la pluie et le beau temps, dans un français resté célèbre. Ses lettres n'étaient pas destinées à la {2}, et c'est précisément ce qui fait leur sel : aucune pose, seulement la voix.", es: "En el siglo XVII, Madame de Sévigné escribía a su hija casi cada día cartas tan vivas que todavía se leen como obras. En ellas contaba las noticias de la corte, los chismes, las recetas, la lluvia y el buen tiempo, en un francés que ha quedado célebre. Sus cartas no estaban destinadas a la publicación, y eso es justamente lo que les da su sal: ninguna pose, solo la voz." },
        { it: "De cette tradition descend le cérémonial épistolaire moderne : l'appelation, l'objet, la formule de politesse. Ces conventions traversent les siècles presque {3}, jusque dans les courriels administratifs d'aujourd'hui, qui s'ouvrent toujours par « Madame, Monsieur ». Certains trouvent ce rituel {4} ; d'autres y voient une politesse précieuse : dire « je vous respecte » avant même de demander. En France, la forme n'est pas vide : elle est la {5} du respect.", es: "De esa tradición desciende el ceremonial epistolar moderno: la llamada al destinatario, el asunto, la fórmula de cortesía. Esas convenciones atraviesan los siglos casi intactas, hasta en los correos administrativos de hoy, que siempre se abren con «Señora, Señor». Algunos encuentran ese ritual anticuado; otros ven en él una cortesía preciosa: decir «le respeto» incluso antes de pedir. En Francia, la forma no está vacía: es la prueba del respeto." },
      ],
      gaps: [
        { options: ["racontait", "cachait", "imprimait"], answer: 0, why: "Noticias de la corte, chismes y recetas: todo eso lo contaba en sus cartas." },
        { options: ["publication", "cuisine", "guerre"], answer: 0, why: "Escribía a su hija sin pensar en publicar: de ahí su naturalidad." },
        { options: ["intactes", "renversées", "oubliées"], answer: 0, why: "Los correos actuales repiten las fórmulas: las convenciones llegan casi intactas." },
        { options: ["démodé", "obligatoire", "amusant"], answer: 0, why: "«Certains trouvent»: para algunos el ritual suena pasado de moda." },
        { options: ["preuve", "fin", "perte"], answer: 0, why: "La forma no es vaciedad: es la prueba del respeto en cada carta." },
      ],
    },
    {
      id: "cz-fr-b2-09-3", title: "Le médiateur de la consommation", titleEs: "El mediador de consumo", minutes: 2,
      paragraphs: [
        { it: "Quand une entreprise reste sourde, le consommateur français n'est pas au bout de ses droits. Après la mise en demeure, il peut saisir gratuitement le {1} de la consommation, un tiers indépendant qui propose une solution amiable. Encore faut-il avoir {2} ses preuves : facture, échanges, numéro de dossier — tout ce papier que l'on regrette de ne pas avoir gardé.", es: "Cuando una empresa sigue sorda, el consumidor francés no ha llegado al final de sus derechos. Tras el requerimiento formal, puede acudir gratis al mediador de consumo, un tercero independiente que propone una solución amistosa. Para eso hace falta haber guardado las pruebas: factura, intercambios, número de expediente, todo ese papel que uno lamenta no haber conservado." },
        { it: "Les associations de consommateurs complètent le dispositif. La plus ancienne, née en 1951, publie des {3} comparatifs et accompagne les réclamations les plus délicates. À Strasbourg, ville de tribunaux et de diplomates, la {4} écrite est un art municipal : chacun connaît quelqu'un qui a gagné son dossier à force de lettres polies. La devise locale tient en une ligne : mieux vaut une lettre bien {5} qu'une colère mal dite.", es: "Las asociaciones de consumidores completan el dispositivo. La más antigua, nacida en 1951, publica pruebas comparativas y acompaña las reclamaciones más delicadas. En Estrasburgo, ciudad de tribunales y diplomáticos, la correspondencia escrita es un arte municipal: cada uno conoce a alguien que ganó su expediente a fuerza de cartas educadas. La divisa local cabe en una línea: mejor una carta bien planteada que una cólera mal dicha." },
      ],
      gaps: [
        { options: ["médiateur", "concierge", "banquier"], answer: 0, why: "Un tercero independiente que propone soluciones amistosas: el mediador." },
        { options: ["gardé", "perdu", "imprimé"], answer: 0, why: "Factura, intercambios, número de expediente: hay que haber guardado las pruebas." },
        { options: ["essais", "romans", "discours"], answer: 0, why: "Las asociaciones publican pruebas comparativas de productos y servicios." },
        { options: ["correspondance", "publicité", "comptabilité"], answer: 0, why: "Cartas educadas que ganan expedientes: el arte de la correspondancia escrita." },
        { options: ["tournée", "oubliée", "payée"], answer: 0, why: "Mejor una carta bien redactada que una cólera: «bien tournée» = bien planteada." },
      ],
    },
  ],

  "fr-cu-b2-10": [
    {
      id: "cz-fr-b2-10-1", title: "La concertation de Nantes", titleEs: "La consulta de Nantes", minutes: 3,
      paragraphs: [
        { it: "Un mardi soir, la salle des fêtes d'un quartier de Nantes déborde : la ville organise une concertation sur son plan de mobilité. Piétonniser le centre, ou construire un parking de {1} aux portes de la ville ? L'animateur rappelle les règles avec calme : chacun parle à son {2}, on ne coupe pas, et toutes les objections seront consignées.", es: "Un martes por la noche, la sala de fiestas de un barrio de Nantes desborda: la ciudad organiza una consulta sobre su plan de movilidad. ¿Peatonalizar el centro o construir un aparcamiento disuasorio a las puertas de la ciudad ? El animador recuerda las reglas con calma: cada uno habla en su turno, no se corta a nadie y todas las objeciones quedarán registradas." },
        { it: "Les uns défendent l'air pur et les enfants ; les autres, les commerçants et les livraisons. Un habitant apporte la contradiction avec élégance : « En admettant que le parking {3} des clients, qui paiera l'entretien ? » La salle marque une pause. L'animateur note tout : objections, hypothèses, objections aux objections — ces cahiers rejoindront le dossier {4}. À la sortie, on se salue : le débat a été vif, mais la {5} est restée intacte.", es: "Unos defienden el aire puro y a los niños; otros, a los comerciantes y las entregas. Un vecino aporta la contradicción con elegancia: «Admitiendo que el aparcamiento atraiga clientes, ¿quién pagará el mantenimiento ?». La sala marca una pausa. El animador lo anota todo: objeciones, hipótesis, objeciones a las objeciones; esos cuadernos irán al expediente público. A la salida, la gente se saluda: el debate fue intenso, pero la civilidad quedó intacta." },
      ],
      gaps: [
        { options: ["dissuasion", "sécurité", "récréation"], answer: 0, why: "Aparcamiento a las puertas de la ciudad para no entrar en coche: el parking de disuasión." },
        { options: ["tour", "avis", "compte"], answer: 0, why: "«On ne coupe pas»: cada uno habla cuando llega su turno." },
        { options: ["attire", "fuit", "achète"], answer: 0, why: "La hipótesis concedida: que el aparcamiento atraiga clientes al centro." },
        { options: ["public", "secret", "perdu"], answer: 0, why: "Los cuadernos de la consulta se incorporan al expediente público." },
        { options: ["civilité", "panne", "honte"], answer: 0, why: "Debate vivo sin romper el respeto: la civilidad quedó intacta." },
      ],
    },
    {
      id: "cz-fr-b2-10-2", title: "Les cahiers de doléances", titleEs: "Los cuadernos de quejas", minutes: 3,
      paragraphs: [
        { it: "Au printemps 1789, la France entière se met à écrire : chaque paroisse, chaque corporation rédige ses cahiers de doléances, où l'on consigne griefs et {1} à l'intention des États généraux. Des dizaines de milliers de cahiers partent vers Versailles. Ce geste — écrire collectivement pour être {2} — traverse toute l'histoire française des siècles suivants.", es: "En la primavera de 1789, Francia entera se pone a escribir: cada parroquia, cada corporación redacta sus cuadernos de quejas, donde se registran agravios y peticiones de cara a los Estados Generales. Decenas de miles de cuadernos parten hacia Versalles. Ese gesto —escribir colectivamente para ser escuchado— atraviesa toda la historia francesa de los siglos siguientes." },
        { it: "De cette tradition descendent les pétitions, les enquêtes publiques et les concertations urbaines d'aujourd'hui : toute objection consignée doit recevoir une {3}. À Nantes, la participation des habitants est un orgueil local, hérité d'une longue mémoire civique. La règle moderne est simple : la discussion n'est pas un {4} qu'on accorde, c'est une étape du projet. Et lorsqu'une réunion se termine sans accord, l'essentiel reste acquis : chaque {5} est désormais écrite, datée, et impossible à ignorer.", es: "De esa tradición descienden las peticiones, las encuestas públicas y las consultas urbanas de hoy: toda objeción registrada debe recibir respuesta. En Nantes, la participación de los vecinos es un orgullo local, heredado de una larga memoria cívica. La regla moderna es simple: la discusión no es un lujo que se concede, es una etapa del proyecto. Y cuando una reunión termina sin acuerdo, lo esencial queda adquirido: cada agravio está ahora escrito, fechado e imposible de ignorar." },
      ],
      gaps: [
        { options: ["vœux", "excuses", "cadeaux"], answer: 0, why: "Los cuadernos recogían agravios y peticiones: los deseos dirigidos al rey." },
        { options: ["entendu", "oublié", "payé"], answer: 0, why: "Escribir colectivamente con un objetivo: ser escuchado." },
        { options: ["réponse", "amende", "leçon"], answer: 0, why: "Toda objeción registrada debe recibir respuesta: el principio moderno de consulta." },
        { options: ["luxe", "devoir", "secret"], answer: 0, why: "«Qu'on accorde»: la discusión no es un lujo concedido, sino parte del proyecto." },
        { options: ["grief", "voiture", "chanson"], answer: 0, why: "Escrito, fechado e imposible de ignorar: el agravio registrado, como en 1789." },
      ],
    },
    {
      id: "cz-fr-b2-10-3", title: "Débattre sans se disputer", titleEs: "Debatir sin pelearse", minutes: 2,
      paragraphs: [
        { it: "Il existe un art de contredire sans blesser, et la France en a fait une spécialité. La recette tient en trois gestes : {1} d'abord une part de vérité à l'adversaire (« certes, la pollution est un vrai sujet »), opposer ensuite le contraste (« cependant, les commerçants vivent mal »), et ne lancer l'objection réelle qu'en dernier, dans une phrase {2} et calme.", es: "Existe un arte de contradecir sin herir, y Francia ha hecho de él una especialidad. La receta cabe en tres gestos: dejar primero una parte de razón al adversario («ciertamente, la contaminación es un asunto serio»), oponer después el contraste («sin embargo, los comerciantes lo pasan mal») y lanzar la objeción real solo al final, en una frase clara y tranquila." },
        { it: "Les vertus de cette méthode sautent aux yeux : l'adversaire se sent {3}, donc il écoute ; le public comprend les deux camps ; la discussion reste digne. À l'inverse, celui qui refuse toute concession passe pour un dogmatique, et celui qui attaque la personne perd la salle. Le débat à la française n'est pas une guerre : c'est une {4} où l'on marque des points avec des arguments, jamais avec des {5}.", es: "Las virtudes de este método saltan a la vista: el adversario se siente reconocido y por eso escucha; el público entiende a los dos bandos; la discusión permanece digna. Al contrario, quien rechaza toda concesión pasa por dogmático, y quien ataca a la persona pierde la sala. El debate a la francesa no es una guerra: es una justa donde se marcan puntos con argumentos, nunca con insultos." },
      ],
      gaps: [
        { options: ["laisser", "refuser", "cacher"], answer: 0, why: "«Certes, la pollution est un vrai sujet»: dejar una parte de razón al rival." },
        { options: ["nette", "agressive", "interminable"], answer: 0, why: "La objeción final llega en una frase clara y serena, no agresiva." },
        { options: ["reconnu", "trahi", "vaincu"], answer: 0, why: "La concesión hace que el adversario se siente reconocido: por eso escucha." },
        { options: ["joute", "paix", "guerre"], answer: 0, why: "No es guerra sino torneo verbal: una justa donde se puntúa con argumentos." },
        { options: ["insultes", "arguments", "cadeaux"], answer: 0, why: "Se puntúa con argumentos, nunca con el arma prohibida: los insultos." },
      ],
    },
  ],

  "fr-cu-b2-11": [
    {
      id: "cz-fr-b2-11-1", title: "Weekly à Station F", titleEs: "La weekly en Station F", minutes: 3,
      paragraphs: [
        { it: "Lundi, 9 h 30, dans un open space de Station F : la weekly commence. « On fait un point rapide sur le lancement », annonce Nadia. Karim admet un retard sur le module de {1} ; Manon rapporte que les bêta-testeurs ont remonté trois bugs, mais que leurs retours sont excellents. L'ordre du jour tient en trois lignes, et chaque {2} a son propriétaire.", es: "Lunes, 9 h 30, en un open space de Station F: la weekly empieza. «Hacemos un repaso rápido del lanzamiento», anuncia Nadia. Karim admite un retraso en el módulo de pago; Manon reporta que los usuarios de prueba han reportado tres errores, pero que sus valoraciones son excelentes. El orden del día cabe en tres líneas, y cada acción tiene su responsable." },
        { it: "La discussion va vite : on propose de décaler la date de sortie d'une semaine, d'arbitrer le budget publicité avant mercredi, d'envoyer la communication dès ce soir. « On {3} le go/no-go mercredi à 9 heures », conclut Nadia. Il reste le compte rendu : rédigé au présent, décisions en gras, un responsable par action. À Station F, le compte rendu n'est pas une formalité : c'est un {4} souple qui engage l'équipe entière, et il partira ce {5} avant 18 heures.", es: "La discusión va rápida: se propone aplazar la fecha de salida una semana, decidir el presupuesto de publicidad antes del miércoles y enviar la comunicación desde esta misma noche. «Dejamos validado el go/no-go el miércoles a las 9 horas», concluye Nadia. Queda el acta: redactada en presente, decisiones en negrita, un responsable por acción. En Station F, el acta no es una formalidad: es un contrato blando que compromete al equipo entero, y saldrá esta misma tarde antes de las 18 horas." },
      ],
      gaps: [
        { options: ["paiement", "loisir", "décor"], answer: 0, why: "El bloqueo técnico típico de un lanzamiento digital: el módulo de pago." },
        { options: ["action", "pause", "réunion"], answer: 0, why: "«A son propriétaire»: cada acción del orden del día tiene dueño." },
        { options: ["acte", "annule", "reporte"], answer: 0, why: "«Le go/no-go mercredi»: la decisión queda validada, se acta." },
        { options: ["contrat", "jeu", "cadeau"], answer: 0, why: "El acta compromete al equipo: un contrato blando, no un juego." },
        { options: ["soir", "mois", "an"], answer: 0, why: "«Avant 18 heures»: el acta parte esa misma tarde, ese mismo día." },
      ],
    },
    {
      id: "cz-fr-b2-11-2", title: "Le compte rendu au présent", titleEs: "El acta en presente", minutes: 3,
      paragraphs: [
        { it: "Dans les entreprises françaises, le compte rendu de réunion obéit à une règle qui surprend les étrangers : il se rédige au présent, même si la réunion est finie. « Nadia ouvre la séance, Karim annonce un retard, l'équipe valide le report » : ce présent dit que les décisions {1} encore aujourd'hui. C'est le même « présent de vérité » qui porte les procès-verbaux et les actes officiels.", es: "En las empresas francesas, el acta de reunión obedece a una regla que sorprende a los extranjeros: se redacta en presente, aunque la reunión haya terminado. «Nadia abre la sesión, Karim anuncia un retraso, el equipo valida el aplazamiento»: ese presente dice que las decisiones cuentan todavía hoy. Es el mismo «presente de verdad» que sostiene las actas notariales y los documentos oficiales." },
        { it: "Cette convention a des vertus pratiques : chaque décision reste lisible, datée et opposable, et chacun sait ce qui lui {2}. Les manuels de communication recommandent d'ajouter à chaque ligne un responsable et une échéance : « décision actée — responsable : Manon — avant le 12 ». Le vocabulaire de réunion fait le reste : faire un point, arbitrer, {3}, débloquer. Encore faut-il respecter la règle d'or : un compte rendu n'est ni un {4}, ni un procès : il enregistre ce qui a été décidé, pas ce qui a été {5}.", es: "Esa convención tiene virtudes prácticas: cada decisión queda legible, fechada y exigible, y cada uno sabe lo que le corresponde. Los manuales de comunicación recomiendan añadir a cada línea un responsable y un plazo: «decisión validada — responsable: Manon — antes del día 12». El vocabulario de reunión hace el resto: hacer un repaso, arbitrar, validar por escrito, desbloquear. Eso sí, hay que respetar la regla de oro: un acta no es una novela ni un proceso: registra lo decidido, no lo que se dijo." },
      ],
      gaps: [
        { options: ["comptent", "dormaient", "mentaient"], answer: 0, why: "El presente de acta dice que las decisiones cuentan hoy: siguen vigentes." },
        { options: ["revient", "coûte", "pèse"], answer: 0, why: "Cada uno sabe qué le toca hacer: lo que le corresponde (revient)." },
        { options: ["acter", "refuser", "oublier"], answer: 0, why: "La serie de verbos de reunión: faire un point, arbitrer, acter, débloquer." },
        { options: ["roman", "budget", "voyage"], answer: 0, why: "El acta no es ficción ni juicio: registra decisiones, no narración." },
        { options: ["dit", "vu", "promis"], answer: 0, why: "Registra lo decidido, no todo lo que se dijo en la sala." },
      ],
    },
    {
      id: "cz-fr-b2-11-3", title: "Anglicismes et loi Toubon", titleEs: "Anglicismos y loi Toubon", minutes: 2,
      paragraphs: [
        { it: "Dans les couloirs des start-up parisiennes, on parle un français parsemé d'anglicismes assumés : la deadline, le feedback, le workshop, le brainstorming. Ces mots vivent leur vie française : on dit « un brainstorming », « le feedback des testeurs », avec la prononciation locale. Les équivalents existent pourtant — {1}, retours, atelier — et l'administration les préfère.", es: "En los pasillos de las startups parisinas se habla un francés salpicado de anglicismos asumidos: la deadline, el feedback, el workshop, el brainstorming. Esas palabras viven su vida francesa: se dice «un brainstorming», «el feedback de los testers», con la pronunciación local. Los equivalentes existen, sin embargo —échéance, retours, atelier—, y la administración los prefiere." },
        { it: "Face à cette vague, la loi Toubon de 1994 pose une limite : les documents sociaux de l'entreprise — contrats, règlements, notes — doivent être rédigés en {2}. L'objectif n'est pas de chasser l'anglais de la conversation, mais que le salarié puisse toujours {3} son contrat dans la langue du pays. Entre les deux pôles, le français des entreprises oscille : la start-up dit « le growth », la banque dit « le développement » ; l'un se veut {4}, l'autre solennel. Chaque secteur choisit sa langue comme il choisit son {5} : par identité.", es: "Frente a esa ola, la loi Toubon de 1994 pone un límite: los documentos sociales de la empresa —contratos, reglamentos, notas— deben redactarse en francés. El objetivo no es cazar el inglés de la conversación, sino que el asalariado pueda siempre entender su contrato en la lengua del país. Entre los dos polos, el francés de las empresas oscila: la startup dice «le growth», el banco dice «el desarrollo»; una quiere parecer moderna, el otro, solemne. Cada sector elige su lengua como elige su traje: por identidad." },
      ],
      gaps: [
        { options: ["échéance", "voiture", "salaire"], answer: 0, why: "Equivalente francés de deadline: la fecha límite, l'échéance." },
        { options: ["français", "anglais", "latin"], answer: 0, why: "La loi Toubon exige que los documentos sociales estén en la lengua del país." },
        { options: ["comprendre", "traduire", "refuser"], answer: 0, why: "El asalariado debe poder entender su contrato, no traducirlo ni rechazarlo." },
        { options: ["moderne", "ringard", "faux"], answer: 0, why: "Contraste con «solennel»: la startup quiere sonar moderna." },
        { options: ["costume", "bureau", "voisin"], answer: 0, why: "La lengua se elige como el traje: cada sector viste su identidad." },
      ],
    },
  ],

  "fr-cu-b2-12": [
    {
      id: "cz-fr-b2-12-1", title: "Le concours de plaidoirie", titleEs: "El concurso de plaidoyer", minutes: 3,
      paragraphs: [
        { it: "Samedi, dans l'amphithéâtre de la faculté, le concours de plaidoirie attire curieux et familles. Le cas de l'année : un jeune peintre poursuivi pour avoir recouvert d'une fresque un mur municipal abandonné. Chaque candidat a dix minutes pour {1} — exposer les faits, plaider, conclure — devant un tribunal de professeurs et d'avocats.", es: "Sábado, en el anfiteatro de la facultad, el concurso de plaidoyer atrae a curiosos y familias. El caso del año: un joven pintor procesado por haber cubierto con un mural un muro municipal abandonado. Cada candidato tiene diez minutos para convencer —exponer los hechos, alegar, concluir— ante un tribunal de profesores y abogados." },
        { it: "La défense la plus applaudie a tenu en trois mouvements : d'abord les faits, sans un adjectif — « mon client a peint un mur » ; puis la {2} — « certes, l'autorisation manquait ; cependant, ce mur était le dépotoir du quartier » ; enfin la péroraison, apprise par cœur, ponctuée d'un silence : « mon client a rendu un mur à la ville ; que la ville lui {3} justice ». La salle a retenu son souffle, puis a applaudi. Le jury a délibéré une heure : le premier prix est allé non au plus virulent, mais au plus {4}. À la sortie, un vieil avocat résume la leçon du jour : dans un prétoire, une phrase bien {5} pèse plus lourd qu'un dossier.", es: "La defensa más aplaudida se sostuvo en tres movimientos: primero los hechos, sin un solo adjetivo —«mi cliente pintó un muro»—; luego la concesión —«ciertamente, faltaba la autorización; sin embargo, ese muro era el vertedero del barrio»—; al final la peroración, aprendida de memoria, puntuada con un silencio: «mi cliente devolvió un muro a la ciudad; que la ciudad le haga justicia». La sala contuvo la respiración y después aplaudió. El jurado deliberó una hora: el primer premio fue no para el más virulento, sino para el más justo. A la salida, un viejo abogado resume la lección del día: en una sala de justicia, una frase bien planteada pesa más que un expediente." },
      ],
      gaps: [
        { options: ["convaincre", "chanter", "dormir"], answer: 0, why: "Diez minutos ante el tribunal para exponer, alegar y concluir: convencer." },
        { options: ["concession", "colère", "pause"], answer: 0, why: "«Certes… cependant…»: el segundo movimiento del alegato es la concesión." },
        { options: ["rende", "prend", "vend"], answer: 0, why: "Subjuntivo optativo final: que la ciudad le devuelva (rende) justicia." },
        { options: ["juste", "fort", "jeune"], answer: 0, why: "El premio fue para el más justo, no para el más agresivo." },
        { options: ["posée", "criée", "lue"], answer: 0, why: "«Une phrase bien posée»: bien planteada, con pausa y calma." },
      ],
    },
    {
      id: "cz-fr-b2-12-2", title: "L'éloquence, une école de la pensée", titleEs: "La elocuencia, una escuela del pensamiento", minutes: 3,
      paragraphs: [
        { it: "Depuis quelques années, l'art de parler en public connaît en France une jeunesse inattendue. Des concours d'éloquence naissent dans les universités et les lycées, et un documentaire consacré à l'un d'eux a attiré des centaines de milliers de {1}. On y voit des étudiants répéter leurs gestes, travailler leur voix, apprendre à respirer avant chaque {2}.", es: "Desde hace unos años, el arte de hablar en público conoce en Francia una juventud inesperada. Concursos de elocuencia nacen en las universidades y los institutos, y un documental dedicado a uno de ellos atrajo a cientos de miles de espectadores. En él se ve a estudiantes ensayar sus gestos, trabajar la voz, aprender a respirar antes de cada frase." },
        { it: "Cette fièvre retient une vieille leçon : l'éloquence n'est pas un bavardage. Bien parler exige d'abord de bien {3} : clarifier l'idée, choisir l'ordre des arguments, taire l'accessoire. Les Anciens l'avaient compris : la rhétorique formait les citoyens, pas les comédiens. Aujourd'hui, les jurés valorisent la même {4} : le candidat qui parle calmement, qui écoute, qui répond, marque plus de points que celui qui {5}. L'éloquence, disait un professeur du concours, c'est la politesse portée à la puissance.", es: "Esa fiebre retiene una vieja lección: la elocuencia no es palabrería. Hablar bien exige primero pensar bien: aclarar la idea, elegir el orden de los argumentos, callar lo accesorio. Los Antiguos lo habían comprendido: la retórica formaba a los ciudadanos, no a los comediantes. Hoy, los jurados valoran la misma maestría: el candidato que habla con calma, que escucha, que responde, puntúa más que el que grita. La elocuencia, decía un profesor del concurso, es la cortesía elevada a su máxima potencia." },
      ],
      gaps: [
        { options: ["spectateurs", "candidats", "voisins"], answer: 0, why: "Un documental que atrajo a cientos de miles de espectadores." },
        { options: ["phrase", "note", "chanson"], answer: 0, why: "Respirar antes de hablar: antes de cada frase pronunciada." },
        { options: ["penser", "crier", "écrire"], answer: 0, why: "Hablar bien exige pensar bien: aclarar la idea antes de decirla." },
        { options: ["maîtrise", "fatigue", "chance"], answer: 0, why: "El jurado premia el dominio: hablar, escuchar y responder con calma." },
        { options: ["hurle", "murmure", "écoute"], answer: 0, why: "Contraste con «parle calmement»: quien grita pierde puntos." },
      ],
    },
    {
      id: "cz-fr-b2-12-3", title: "L'affaire du mur peint", titleEs: "El asunto del muro pintado", minutes: 3,
      paragraphs: [
        { it: "L'histoire avait tout d'un fait divers banal : un mur municipal abandonné, des tags, des dépôts sauvages, et un jeune peintre qui décide un matin de le recouvrir d'une fresque. En quelques semaines, le mur devient une {1} du quartier ; les commerçants s'en félicitent, les passants s'arrêtent, photographient, reviennent. Puis la mairie porte {2}.", es: "La historia tenía todo de suceso banal: un muro municipal abandonado, grafitis, vertidos ilegales, y un joven pintor que decide una mañana cubrirlo con un mural. En pocas semanas, el muro se convierte en un orgullo del barrio; los comerciantes se felicitan por él, los viandantes se detienen, fotografían, vuelven. Luego el ayuntamiento presenta denuncia." },
        { it: "Au tribunal, l'avocat de la ville parle de dégradation ; la défense parle d'usage. Depuis la fresque, dit-elle, plus aucun tag, plus aucun dépôt : le mur abandonné est devenu un mur {3}. Le réquisitoire demande une amende ; la plaidoirie demande une charte. Le délibéré tombe : déclaration de culpabilité avec dispense de peine, et une recommandation — que la ville songe à {4} d'autres murs à d'autres talents. La leçon dépasse le dossier : punir un talent, disait la défense, c'est payer deux fois la même {5}.", es: "En el tribunal, el abogado de la ciudad habla de degradación; la defensa habla de uso. Desde el mural, dice, ya no hay ni grafitis ni vertidos: el muro abandonado se ha vuelto un muro vivo. El requerimiento pide una multa; el alegato pide una carta de muros autorizados. El fallo llega: declaración de culpabilidad con exención de pena, y una recomendación: que la ciudad piense en confiar otros muros a otros talentos. La lección desborda el expediente: castigar un talento, decía la defensa, es pagar dos veces el mismo mural." },
      ],
      gaps: [
        { options: ["fierté", "honte", "ruine"], answer: 0, why: "Los comerciantes se felicitan y los viandantes vuelven: el muro es un orgullo." },
        { options: ["plainte", "chance", "paix"], answer: 0, why: "La mairie «porte plainte»: presenta denuncia contra el pintor." },
        { options: ["vivant", "mort", "clos"], answer: 0, why: "Ya no hay grafitis ni vertidos: el muro abandonado se volvió vivo." },
        { options: ["confier", "interdire", "vendre"], answer: 0, why: "La recomendación: confiar otros muros a otros talentos, no prohibirlos." },
        { options: ["fresque", "amende", "mairie"], answer: 0, why: "Castigar el talento es pagar dos veces el mismo mural, la misma fresque." },
      ],
    },
  ],
};
