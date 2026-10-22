import type { CbGrammarDeep } from "../../extra/grammar-deep";

/* ═══ FR C1 · Grammar deep — 12 unidades (français de France soutenu) ══
   Explicación amplia de la gramática de cada unidad C1: synthèse de
   documents, dissertation dialectique, discours politique, modalité,
   français scientifique, conférence, administratif, interview, pub,
   débat, littéraire et soutenance. A este nivel las sezioni usan
   títulos temáticos creativos en francés (espejo del italiano C1),
   salvo la de trampas, fija: «Le miroir espagnol». Campos `.it` =
   francés (lengua de estudio), `.es` = español. Tipografía francesa:
   espacio antes de ? ! : ; guillemets « ». Vouvoiement.            */

export const FR_DEEP_C1: Record<string, CbGrammarDeep> = {
  "fr-cu-c1-01": {
    sezioni: [
      { t: "Les trois leviers de la reformulation", body: "Reformular no es recortar: «résumer, c'est rapetisser un texte ; synthétiser, c'est reconstruire un raisonnement avec vos mots à vous». El arsenal tiene tres palancas. Primera, la sinonimia exacta: «révèlent» se convierte en «mettent en évidence», siempre que el matiz se conserve. Segunda, la nominalización, el gesto rey del francés académico: «les budgets sont serrés» se pliega a «l'étroitesse des budgets» y la frase entera del autor desaparece dentro de un sintagma nominal unido por de. Tercera, el cambio de voz: «on a constaté une hausse» pasa a «une hausse a été constatée», y el agente se disuelve en la pasiva con être." },
      { t: "L'autonomie de pensée devant le jury", body: "La synthèse de documents se organiza por ideas, no por fuentes: «une idée, une phrase ; un document, une idée». El plan debe cruzar los cuatro textos — convergencias, tensiones, ángulos muertos — en lugar de yuxtaponer resúmenes. Los correctores buscan «l'autonomie de pensée»: el candidato que se esconde detrás de los autores ya no alcanza la media. Y la regla de oro de las consignas: nunca citar más de diez palabras seguidas («dix mots d'affilée») ; una frase idéntica «au mot près» ya no es síntesis: es plagio, y el jury lo sanciona sin piedad." },
      { t: "Le miroir espagnol", body: "1) El falso amigo más traicionero del aula: «prétendre» no es 'pretender' sino afirmar sin prueba, y desautoriza al autor — «l'auteur prétend que…» ante un jurado casi es una acusación ; para defender una tesis usa «soutenir», para constatar usa «affirmer». 2) La sinonimia aproximada delata al extranjero: el español confía en el primer sinónimo del diccionario bilingüe, pero «soutenir» y «affirmer» no son intercambiables y el corrector lo repasa. 3) Las pasivas reflejas del español («se ha decidido que…») no se traducen con «on a décidé» : en escrito soutenu conviene la pasiva con être («il a été décidé que…»). 4) La nominalización española añade artículo y de («el aumento del consumo») ; la francesa encadena sin comas: «l'augmentation de la consommation»." },
      { t: "Dans l'atelier de méthodologie", body: "En las prépas parisinas el ritual es siempre el mismo: la profesora devuelve la primera synthèse y huele a «patchwork à dix mètres». El gesto del oficio: leer los cuatro documentos, cerrarlos y reconstruir el razonamiento de memoria con las tres palancas ; solo se reabren los textos para verificar las cifras. La frase que hay que ganarse: «leur pensée, mon style» — su pensamiento, mi estilo. Porque la synthèse, más que una prueba, es «un exercice d'honnêteté intellectuelle» : pensar con las palabras de otros sin escribir nunca como ellos." },
    ],
    esempi: [
      { it: "Les documents s'accordent sur un point : la dégradation des finances locales.", es: "Los documentos coinciden en un punto: el deterioro de las finanzas locales." },
      { it: "Il a été établi que la fréquentation des bibliothèques augmente.", es: "Se ha establecido que la frecuentación de las bibliotecas aumenta." },
      { it: "Les auteurs dénoncent l'immobilisme de l'État.", es: "Los autores denuncian el inmovilismo del Estado." },
      { it: "Le rapport met en lumière la baisse des effectifs.", es: "El informe pone de relieve la caída de las plantillas." },
      { it: "Résumer, c'est rapetisser ; synthétiser, c'est reconstruire.", es: "Resumir es empequeñecer; sintetizar es reconstruir." },
    ],
    usi: [
      { q: "En une synthèse, ¿cómo reformularías « les collectivités manquent de moyens » ?", options: ["« Les collectivités n'ont pas les moyens » (frase casi calcada)", "« Le sous-équipement des collectivités » (nominalisation)", "« Les collectivités, ça manque de moyens » (registro oral)"], answer: 1, explain: "La nominalización pliega la frase entera a un sintagma nominal: el verbo desaparece y con él la frase del autor." },
      { q: "¿Qué verbo de report elige quien quiere insinuar que la afirmación del otro es dudosa?", options: ["affirmer", "soutenir", "prétendre"], answer: 2, explain: "«prétendre» presenta la afirmación sin prueba y desautoriza al autor : devant un jury, es casi una acusación." },
    ],
  },

  "fr-cu-c1-02": {
    sezioni: [
      { t: "L'architecture dialectique", body: "La dissertation no responde: problematiza. Una pregunta como « L'université doit-elle être gratuite ? » no se zanja con un sí o un no — « oui ou non, c'est un référendum » — sino que se desplaza a un terreno fértil: derecho de acceso y selección por el suspenso, gratuidad para las familias y coste fiscal. El plan dialéctico articula tres movimientos: thèse, antithèse, synthèse. Y la synthèse no es un compromiso blando (« un compromis mou ») : es un dépassement, un cambio de nivel que abre una pregunta más fértil que la inicial." },
      { t: "Les connecteurs de haut niveau", body: "Cada movimiento tiene su familia de conectores, y repetir mais tres veces delata un « plan brouillon ». Tesis: « en premier lieu », « ensuite », « de surcroît », « force est de constater que ». Antítesis (la bascule) : « en revanche », « toutefois », « néanmoins », « il n'empêche que ». Síntesis (el cambio de nivel) : « dès lors », « en définitive », « en dernier analyse ». La bisagra de la concesión es « certes… mais » : certes reconoce el argumento contrario con cortesía y mais lo retoma para superarlo. Y los conectores de gran altura — « nonobstant », « en l'espèce » — sazonan el registro soutenu sin sustituir la arquitectura." },
      { t: "Le miroir espagnol", body: "1) El error número uno del estudiante español: responder la pregunta (« j'ai dit non, avec des arguments ») en vez de construir la problématique ; el corrector lo llama « plan brouillon ». 2) El metadiscurso coloquial está prohibido: « je vais vous parler de… » no entra jamás en una dissertation ; el plan se anuncia en presente con avant de + infinitivo (« Nous verrons que… avant de montrer que… »). 3) El español encadena peros (« pero », « sin embargo », « pero ») sin sanción ; el francés académico exige escalar y variar: de « mais » a « toutefois » y de « toutefois » a « dès lors » hay toda una jerarquía del pensamiento." },
      { t: "À la Sorbonne", body: "En el anfiteatro de méthodologie, el profesor tacha el « oui, mais » como « pensée paresseuse » — pero lo conserva como arquitectura. La tradición viene de las disputationes medievales de la Sorbona: defender y atacar una tesis en latín ante los maestros. Sus enemigos dicen que la dissertation es escolar, « une tour Eiffel de la pensée — rigide, mais élégante » ; sus defensores responden que enseña « l'art de penser contre soi-même » : quién no ha escrito una antítesis en la que no creía. Generaciones de profesores repiten: « problématisez ! », « le plan est la pensée visible »." },
    ],
    esempi: [
      { it: "Force est de constater que la gratuité a un coût social.", es: "Es forzoso reconocer que la gratuidad tiene un coste social." },
      { it: "Certes, l'université ouvre des portes ; toutefois, elle en referme d'autres.", es: "Cierto es que la universidad abre puertas; sin embargo, cierra otras." },
      { it: "Dès lors, la question se déplace : qui paie, et pour quelle formation ?", es: "Por consiguiente, la pregunta se desplaza: ¿quién paga, y para qué formación?" },
      { it: "Nonobstant ces progrès, la sélection par l'échec demeure.", es: "No obstante estos progresos, la selección por el suspenso permanece." },
      { it: "Nous verrons d'abord que la gratuité protège l'égalité, avant de montrer qu'elle redistribue mal les efforts.", es: "Veremos primero que la gratuidad protege la igualdad, antes de mostrar que redistribuye mal los esfuerzos." },
    ],
    usi: [
      { q: "¿Qué pareja abre la bascule hacia la antítesis?", options: ["En premier lieu… de surcroît", "Certes… toutefois", "Dès lors… en définitive"], answer: 1, explain: "certes reconoce el argumento contrario y toutefois lo retoma para superarlo: la bisagra clásica de la concesión." },
      { q: "El plan de la dissertation se anuncia…", options: ["en pasado, con « j'ai parlé de »", "en presente, con avant de + infinitivo", "en primera persona coloquial"], answer: 1, explain: "Metadiscurso académico: « Nous verrons que… avant de montrer que… » ; el « je vais vous parler de » está prohibido." },
    ],
  },

  "fr-cu-c1-03": {
    sezioni: [
      { t: "La musique du discours", body: "« Un discours, ce n'est pas un programme : c'est une musique. » Los recursos que la hacen sonar: la anáfora, que repite la misma apertura en frases sucesivas (« Pour que la ville respire, je m'engage. Pour que la ville avance, je m'engage. ») hasta que a la tercera repetición la sala murmura con la oradora ; la gradación, que ordena los elementos de lo particular a lo general (« du particulier au général, du fait au principe ») ; la tríada, el gran tres retórico que cierra cada ola (« du logement, de l'école, du lien social ») ; y una sola interrogación retórica en la cima, con inversión solemne: « Voulez-vous d'une ville qui dort ? »." },
      { t: "L'appel final et le futur d'engagement", body: "El cierre pide appel: imperativo de primera persona del plural (« Marchons ensemble ») o futuro de compromiso (« Nous ferons de cette ville… »). El condicional queda desterrado porque suena a promesa tibia, y el passé simple porque pertenece al relato literario: el discurso político vive en un presente que mira al futuro. El último requisito es musical: la última palabra « doit rester dans l'oreille » — tiene que quedar en el oído después de los aplausos, como un estribillo que la sala se lleva a casa." },
      { t: "Le miroir espagnol", body: "1) Pour que + subjuntivo, siempre: « pour que la ville respire » — coincide con 'para que la ciudad respire', aprovecha el espejo. 2) El ne littéraire de los discursos: « Nul ne peut se satisfaire de ce bilan » — nul ya es negación completa y el verbo no añade nada más ; el español «nadie» funciona igual, pero al oído hispanohablante le sobra ese ne: acéptalo como marca de solemnidad. 3) La interrogación retórica francesa se cierra con entonación descendente, no ascendente: « Voulez-vous… ? » baja, exige adhesión, no respuesta. 4) En el estilo declamado la e caduca se mantiene (« samedi [sa.mə.di] ») para dar gravedad: no la recortes como en la conversación." },
      { t: "Sur la tribune", body: "El meeting a la francesa nació con la Tercera República: la política bajó a la plaza y la palabra subió a la tribuna. Léon Blum hablaba de pie, sin notas, durante dos horas: « l'anaphore tenait lieu d'orchestre ». En mayo de 1981, place de la Bastille, el meeting se volvió liturgia. Desde entonces se televisa, pero la regla permanece: una música, repeticiones, una tríada — y la última palabra que queda. Quien escribe el texto lo aprende en la repetición de la víspera: sólido, cuantificado, honesto… y todavía plano, hasta que la anáfora le da alas." },
    ],
    esempi: [
      { it: "Pour que la ville respire, je m'engage ; pour que la ville s'élève, je m'engage.", es: "Para que la ciudad respire, me comprometo; para que la ciudad se eleve, me comprometo." },
      { it: "Nul ne peut se satisfaire d'un bilan pareil.", es: "Nadie puede satisfacerse con un balance así." },
      { it: "Une école, un quartier, une ville entière : telle est notre ambition.", es: "Una escuela, un barrio, una ciudad entera: esa es nuestra ambición." },
      { it: "Voulez-vous d'une ville qui dort ou d'une ville qui ose ?", es: "¿Queréis una ciudad que duerme o una ciudad que se atreve?" },
      { it: "Marchons ensemble : le dernier mot restera dans vos oreilles.", es: "Marchemos juntos: la última palabra quedará en vuestros oídos." },
    ],
    usi: [
      { q: "« Pour que la ville respire », le verbe doit être…", options: ["à l'indicatif", "au subjonctif", "au conditionnel"], answer: 1, explain: "pour que + subjuntivo, exactamente como 'para que' en español: finalidad y subjuntivo van juntos." },
      { q: "¿Cómo se cierra un discurso político francés?", options: ["Con un condicional prudente", "Con un appel: imperativo de 1.ª persona plural o futuro de compromiso", "Con tres preguntas retóricas en serie"], answer: 1, explain: "« Marchons ensemble » o « Nous ferons » cierran con energía ; el condicional suena a promesa tibia y la pregunta en serie cansa a la sala." },
    ],
  },

  "fr-cu-c1-04": {
    sezioni: [
      { t: "La cuisine de l'incertain", body: "La escala modal francesa dosifica la certeza con construcciones fijas que rigen subjuntivo: « il se peut que » (posibilidad discreta), « il est possible que » (neutra), « il est peu probable que » (improbabilidad débil), « il est improbable que » (improbabilidad técnica y fría), « il est exclu que » (imposibilidad casi jurídica). El español replica la escalera, pero los matices cambian de paisaje: il se peut que es más discreto que il est possible que, e il est exclu que es categórico. Decir « je sais », « je crois » o « il se peut » ya es tomar posición: « la grammaire est morale »." },
      { t: "Le conditionnel d'altérité", body: "« Le ministre serait sur le point de démissionner » : ese condicional del titular es el conditionnel d'information non confirmée, también llamado d'altérité. Reporta un decir sin certificarlo: el diario transmite, no afirma, y así se cubre. Los manuales de estilo de la prensa lo regulan: se usa con fuentes no reveladas, nunca para disimular la ignorancia propia. Frente al presente categórico de las redes sociales, el condicional periodístico funciona como cinturón de seguridad: molesta a los apresurados, pero protege a los lectores." },
      { t: "Les formes de la hauteur littéraire", body: "En la prosa culta sobreviven formas que ya nadie conjuga a la oral: el subjonctif plus-que-parfait (« il était peu probable qu'il eût compris »), formado con el imperfecto de subjuntivo de avoir o être más el participio ; y el conditionnel passé deuxième forme (« il eût fallu »), su hermano hipotético. Sus equivalentes hablados: « qu'il ait compris », « il aurait fallu ». Hoy son marcas de altura estilística: hay que reconocerlas — en Proust, en los textos administrativos antiguos, en la ironía de registro alto — sin necesidad de producirlas. Usarlas bien señala un C1 literario ; usarlas mal, un pedante." },
      { t: "Le miroir espagnol", body: "1) El hispanohablante traduce el conditionnel journalistique por futuro o por un explícito «según fuentes»: el francés prefiere la elegancia del condicional sin fuente citada, que deja la responsabilidad fuera de la frase. 2) « Il est improbable que » suena más frío y técnico que « il est peu probable que » : la escala no es simétrica y el matiz se oye. 3) « Il se peut que » es impersonal e invariable, y siempre con subjuntivo: nunca « ça se peut que ». 4) El subjuntivo pluscuamperfecto francés ya no tiene voz: reconocerlo al leer basta ; en la conversación sería una nota de pedantería involuntaria." },
    ],
    esempi: [
      { it: "Il est peu probable que la réforme soit votée ce mois-ci.", es: "Es poco probable que la reforma se vote este mes." },
      { it: "Selon nos informations, le directeur serait parti hier soir.", es: "Según nuestras informaciones, el director habría partido anoche." },
      { it: "Il était peu probable qu'il eût saisi la nuance.", es: "Era poco probable que hubiera comprendido el matiz." },
      { it: "Encore eût-il fallu que la commission eût délibéré à temps.", es: "Aún habría hecho falta que la comisión hubiera deliberado a tiempo." },
      { it: "Il se peut que le ministre change d'avis d'ici vendredi.", es: "Puede que el ministro cambie de opinión antes del viernes." },
    ],
    usi: [
      { q: "« Le ministre serait sur le point de démissionner » : le conditionnel signale…", options: ["un futur proche", "une information non confirmée, dite par un autre", "un ordre poli"], answer: 1, explain: "Conditionnel d'altérité: el diario reporta un decir sin certificarlo y se cubre." },
      { q: "La forma hablada equivalente a « qu'il eût compris » es…", options: ["qu'il a compris", "qu'il ait compris", "qu'il aura compris"], answer: 1, explain: "El subjuntivo compuesto « qu'il ait compris » es el equivalente cotidiano del pluscuamperfecto literario." },
    ],
  },

  "fr-cu-c1-05": {
    sezioni: [
      { t: "La phrase de laboratoire", body: "El artículo científico francés despersonaliza con dos gestos: la pasiva con être y par (« l'acidification des océans est accentuée par l'absorption du CO2 »), que expresa causalidad física sin culpable, y la pasiva impersonal (« il a été observé que… »), donde la comunidad científica habla como bloque. La nominalización técnica convierte procesos en nombres: « l'évaporation », « l'oxydation », « la confirmation de l'hypothèse par les résultats ». El agente desaparece o se relega a un complemento: el francés científico lleva la despersonalización más lejos que el español académico." },
      { t: "Défaire la passivation", body: "La divulgación invierte el gesto: el agente vuelve a escena (« l'océan absorbe notre CO2 »), los procesos se verbalizan (« l'eau s'évapore ») y las nominalizaciones se definen una sola vez, « en pleine lumière », antes de reutilizarse como balizas. Simplificar no es empobrecer: es dosificar la precisión. La regla de oro del mediador: cada término técnico se presenta con una definición accesible — « l'évaporation, c'est le passage de l'eau de l'état liquide à l'état gazeux » — y después funciona como atajo que ahorra frases. La consigna del oficio: « science exacte, phrase habitée »." },
      { t: "Le participe présent en scène", body: "El participio presente condensa el método: « observant le phénomène, l'équipe… » (causa o tiempo), y su forma compuesta marca anterioridad: « ayant constaté la hausse, les chercheurs publient » — primero la constatación, después la publicación. El gerundio con en (« en observant ») añade simultaneidad: 'al observar'. Se forma sobre el radical del presente y es invariable: ni concordancia con el sujeto ni con el objeto — una economía sintáctica que el español resuelve con el gerundio « habiendo constatado », raro pero perfectamente comprensible." },
      { t: "Le miroir espagnol", body: "1) Las pasivas reflejas del español científico (« se ha observado que… ») se despliegan en francés como pasivas con être: « il a été observé que… » ; el « on a observé » pertenece a la conversación, no al artículo. 2) El participio presente francés es invariable: quédate con la forma fija « ayant + participio » para la anterioridad, sin intentar concordarlo. 3) La pasiva con par expresa causa física sin intención (« accentuée par l'absorption ») : no la conviertas en « par le fait de » — el proceso y su causa bastan. 4) Al traducir al español, las pasivas francesas vuelven a ser reflejas: el registro se conserva en ambos sentidos." },
    ],
    esempi: [
      { it: "L'acidification des océans est accentuée par l'absorption du CO2.", es: "La acidificación de los océanos se ve acentuada por la absorción del CO2." },
      { it: "Ayant observé le phénomène pendant dix ans, l'équipe publie ses résultats.", es: "Tras haber observado el fenómeno durante diez años, el equipo publica sus resultados." },
      { it: "Il a été constaté que la température moyenne augmente.", es: "Se ha constatado que la temperatura media aumenta." },
      { it: "L'évaporation, c'est le passage de l'eau de l'état liquide à l'état gazeux.", es: "La evaporación es el paso del agua del estado líquido al estado gaseoso." },
      { it: "Ce phénomène est accéléré par le réchauffement climatique.", es: "Este fenómeno se ve acelerado por el calentamiento climático." },
    ],
    usi: [
      { q: "Dans un article scientifique, « se ha observado que… » se dit…", options: ["On a observé que…", "Il a été observé que…", "Ça s'observe que…"], answer: 1, explain: "La pasiva impersonal con être es la voz del artículo científico ; « on » es conversación y « ça » ni siquiera." },
      { q: "« Ayant constaté la hausse, l'équipe publie » : le participe présent composé exprime…", options: ["une antériorité (d'abord la constatation, puis l'action)", "une simultanéité exacte", "un but"], answer: 0, explain: "El participio presente compuesto (ayant + participio) marca que la acción del participio es anterior al verbo principal." },
    ],
  },

  "fr-cu-c1-06": {
    sezioni: [
      { t: "L'accroche, ou la première seconde", body: "La conferencia se gana o se pierde en la primera frase: « dans cette présentation, nous allons évoquer… » es un formulario que duerme a la sala. El gancho (l'accroche) es una anécdota, una cifra sorprendente o una pregunta: « Savez-vous combien de temps nous passons à chercher nos clés ? » — y la sala despierta. La inversión formal « Savez-vous… ? » añade solemnidad interrogativa ; la cifra exacta (« trois jours entiers ») remata la sorpresa tras una pausa, y el público ya es cómplice del viaje." },
      { t: "Le plan qui se raconte", body: "En dissertation el plan se anuncia ; en conférence se narra como un viaje: « D'abord, je vous emmène au Japon. Ensuite, on revient en France. Enfin, je vous livrerai mon secret. » Los verbos de desplazamiento (emmener, revenir, aboutir) convierten la arquitectura en relato, y el pronombre on abraza al público. El fil rouge — el hilo rojo — se retoma en el cierre (« comme je vous le disais en commençant… ») : la sensación de un recorrido, no de una lista. Tres movimientos, como un viaje: eso es lo que la sala escucha." },
      { t: "Le silence, ponctuation de l'oral", body: "« Qui se tait fait écouter » : la pausa de dos segundos antes de la idea clave crea expectativa ; un segundo tras la palabra nueva le da tiempo a anclarse ; tres tras la frase de humor dejan espacio a la risa. Los marcadores de oralidad (eh bien, figurez-vous, et vous savez quoi ?) acercan el registro, y los presentativos subrayan: « ce qui m'a surpris, c'est ce chiffre-là ». En el guion las pausas se marcan con // : el silencio es la puntuación del oral, y el humor de conferencia es discreto — una autoderisión, una imagen inesperada ; si la broma cae plano, se encadena sin comentario." },
      { t: "Le miroir espagnol", body: "1) El hispanohablante rellena el silencio con muletillas (eh, este, o sea) : el francés elegante prefiere « le silence plein à la parole vide » — callar dos segundos en vez de amortiguar. 2) Mantener la velocidad coloquial ante público produce una avalancha de elisiones que nadie descifra a diez metros: el débito de conferencia ronda las 130-140 palabras por minuto, con las sílabas plenas bien articuladas. 3) No traduzcas «fíjense» literalmente: la intercalación francesa es « figurez-vous » — 'imagínense ustedes' — con su ritmo propio." },
    ],
    esempi: [
      { it: "Savez-vous combien de temps nous passons à chercher nos clés ?", es: "¿Saben cuánto tiempo pasamos buscando nuestras llaves?" },
      { it: "D'abord, je vous emmène au Japon ; ensuite, on revient en France.", es: "Primero, os llevo a Japón; después, volvemos a Francia." },
      { it: "Figurez-vous que ce phénomène est tout récent.", es: "Imagínense que este fenómeno es muy reciente." },
      { it: "Ce qui m'a surpris, c'est ce chiffre-là.", es: "Lo que me sorprendió es precisamente esa cifra." },
      { it: "Et vous savez quoi ? Personne n'avait jamais mesuré ça.", es: "¿Y saben qué? Nadie lo había medido nunca." },
    ],
    usi: [
      { q: "¿Cuál de estas aperturas es una accroche válida?", options: ["« Dans cette présentation, nous allons évoquer… »", "« Savez-vous combien de temps nous passons à chercher nos clés ? »", "« Bonjour, je m'appelle Paul et voici mon plan. »"], answer: 1, explain: "La pregunta con cifra despierta a la sala ; el formulario y la presentación burocrática la duermen desde el primer segundo." },
      { q: "En conférence, el plan se anuncia…", options: ["como una lista administrativa de partes", "narrado como un viaje con verbos de desplazamiento", "no se anuncia jamás"], answer: 1, explain: "« Je vous emmène… on revient… je vous livrerai » : el plan se cuenta con emmener, revenir, aboutir, no se burocratiza." },
    ],
  },

  "fr-cu-c1-07": {
    sezioni: [
      { t: "Les formules rituelles", body: "El francés administrativo es una lengua ritual con fórmulas fijas que son sello de competencia: apertura (« je me permets de vous adresser la présente »), petición (« je vous prie de bien vouloir + infinitivo »), anexos (« vous trouverez ci-joint les pièces justificatives requises »), cierre (« dans l'attente de votre réponse », « je vous remercie par avance »). Una carta sin fórmulas se lee como descortés ; una con exceso, como irónica: la administración responde al registro, y el futuro de cortesía (« vous voudrez bien », « vous trouverez ») es puro rito." },
      { t: "La langue de bois et ses euphémismes", body: "El estilo oficial dosifica la obligación y suaviza la espera: « il convient de fournir un justificatif » dice 'debes' sin decirlo ; « à l'issue de l'instruction du dossier » marca el final de un proceso con precisión procesal ; « votre demande est en cours d'examen » significa, con eufemismo, que habrá que esperar. El presente solemne « la présente » ('la presente') pertenece a este mundo: decir el derecho, no la emoción ; nombrar el expediente, no el drama. El español administrativo tiene gemelos (conviene, a la finalización de, se ruega), pero el francés añade el futuro de cortesía que no se traduce: es puro rito." },
      { t: "La hiérarchie des politesses", body: "El cierre se gradúa según el destinatario: « je vous prie de bien vouloir agréer l'expression de ma considération distinguée » (máxima solemnidad, funcionario desconocido) ; « je vous prie de recevoir mes salutations distinguées » (estándar) ; « cordialement » (solo por correo electrónico y si ya hay trato). La regla de oro: la cortesía administrativa nunca baja de registro primero — la sube el funcionario, no el administrado. Y se agradece « par avance », « de l'attention que vous voudrez bien porter à ma demande »." },
      { t: "Le miroir espagnol", body: "1) Nunca preguntes con « pouvez-vous » ni « est-ce que » en una petición oficial: la fórmula canónica es « je vous prie de bien vouloir + infinitivo » — 'le ruego que tenga a bien'. 2) El futuro de cortesía francesa (« vous voudrez bien m'accorder ») no tiene equivalente vivo en el español actual ('querrá bien' suena arcaico): apréndelo como pieza fija, no como tiempo verbal traducible. 3) La litote administrativa resta para sumar: « je vous remercie par avance » agradece antes de recibir ; el español exageraría el agradecimiento — aquí el registro sobrio es el cortés." },
    ],
    esempi: [
      { it: "Je me permets de vous adresser la présente demande de renouvellement.", es: "Me permito dirigirle la presente solicitud de renovación." },
      { it: "Je vous prie de bien vouloir m'accorder un entretien.", es: "Le ruego que tenga a bien concederme una entrevista." },
      { it: "Vous trouverez ci-joint les pièces justificatives requises.", es: "Encontrará adjunta la documentación justificativa requerida." },
      { it: "À l'issue de l'instruction du dossier, une décision sera notifiée.", es: "Al término de la tramitación del expediente, se notificará una decisión." },
      { it: "Je vous remercie par avance de l'attention que vous voudrez bien porter à ma demande.", es: "Le agradezco de antemano la atención que tenga a bien prestar a mi solicitud." },
    ],
    usi: [
      { q: "Pour pedir una cita a la préfecture, la fórmula canónica es…", options: ["Pouvez-vous me donner un rendez-vous ?", "Je vous prie de bien vouloir m'accorder un entretien.", "Je voudrais que vous me receviez vite."], answer: 1, explain: "La petición administrativa se formula con je vous prie de bien vouloir + infinitivo ; las preguntas directas son de conversación." },
      { q: "« Votre dossier est en cours d'instruction » signifie, con eufemismo administrativo…", options: ["que el expediente ha sido rechazado", "que la administración lo está tramitando (y que habrá que esperar)", "que debe volver a presentar el expediente"], answer: 1, explain: "l'instruction du dossier es la tramitación: el giro suaviza la espera sin comprometerse a un plazo." },
    ],
  },

  "fr-cu-c1-08": {
    sezioni: [
      { t: "La question indirecte armée", body: "La pregunta frontal (« Quand le projet sera-t-il voté ? ») recibe respuestas de fórmula: « au moment opportun ». La indirecta armada envuelve la pregunta en cortesía sin perder el filo: « Pourriez-vous nous dire en quoi ce calendrier reste réaliste ? » La estructura: inversión de cortesía en la principal (pourriez-vous) + palabra interrogativa + orden afirmativo en la subordinada (quand le texte sera voté — nunca quand sera-t-il voté). Para la interrogativa indirecta total: « je voudrais savoir si… ». Y si la invitada esquiva, la pregunta se aprieta, no se repite tal cual." },
      { t: "Le subjonctif du journaliste", body: "La negación de los verbos de opinión rige subjuntivo en francés cuidado: « je ne pense pas que ce calendrier soit tenable ». Afirmada, la opinión vuelve al indicativo: « je pense que c'est tenable ». El matiz es deontológico: el subjuntivo expresa duda sin acusación — « tu doutes, tu n'accuses pas encore » — y separa al periodista del militante. La escalera se completa con la interrogación escéptica: « qu'est-ce qui vous autorise à affirmer que… ? », cortesía con la punta visible." },
      { t: "La mise en relief avancée", body: "La focalización escinde la frase para señalar el blanco: « c'est le calendrier qui nous intéresse » (sujeto con qui), « c'est le coût social que la France regardera » (complemento con que), « ce sont les conséquences que le jury examinera » (plural), « c'est à la commission qu'il revient de décider » (complemento preposicional). En la entrevista, la mise en relief aprieta la pregunta sin subir el tono: la pregunta se vuelve un hecho — « vous ne m'avez pas répondu, madame : la date, oui ou non ? » — y el silencio que sigue hace el resto." },
      { t: "Le miroir espagnol", body: "1) En la subordinada indirecta el orden es afirmativo: « pourriez-vous nous dire quand le texte sera voté » — el hispanohablante copia a veces la inversión (« quand sera-t-il voté ») y la frase se rompe. 2) El subjuntivo tras opinión negada coincide con el español (« no creo que sea »), pero el francés coloquial lo esquiva con indicativo: no imites esa relajación en antena. 3) El español focaliza igual ('es el calendario lo que nos interesa'), pero con personas el francés usa qui, no que: « c'est elle qui décidera ». 4) « je voudrais savoir si » lleva si interrogativo, sin acento: no es el 'sí' español de afirmación." },
    ],
    esempi: [
      { it: "Pourriez-vous nous dire en quoi ce calendrier reste tenable ?", es: "¿Podría decirnos en qué ese calendario sigue siendo sostenible?" },
      { it: "Je voudrais savoir si le coût de la réforme a été chiffré.", es: "Quisiera saber si el coste de la reforma se ha cuantificado." },
      { it: "Je ne pense pas que ces chiffres soient définitifs.", es: "No creo que esas cifras sean definitivas." },
      { it: "C'est le calendrier qui nous intéresse, madame la ministre.", es: "Es el calendario lo que nos interesa, señora ministra." },
      { it: "Ce sont les conséquences sociales que la France regardera.", es: "Son las consecuencias sociales lo que Francia mirará." },
    ],
    usi: [
      { q: "La pregunta indirecta correcta es…", options: ["Pourriez-vous nous dire quand sera-t-il voté, le texte ?", "Pourriez-vous nous dire quand le texte sera voté ?", "Pourriez-vous nous dire quand le texte sera-t-il voté ?"], answer: 1, explain: "En la subordinada el orden es afirmativo: la inversión solo vive en la pregunta principal (pourriez-vous)." },
      { q: "« Je ne pense pas que ce calendrier ___ réaliste » :", options: ["est", "soit", "sera"], answer: 1, explain: "Opinión negada + subjuntivo: la duda del periodista, que todavía no acusa." },
    ],
  },

  "fr-cu-c1-09": {
    sezioni: [
      { t: "Le style nominatif", body: "El eslogan francés prescinde del verbo: « Le goût du vrai » — ni sujeto ni tiempo, solo un mundo sugerido. La elipsis vuelve la frase inatacable: sin tiempo verbal no hay promesa verificable. Cuando el verbo aparece, es presente atemporal de identidad (« Parce que je le vaux bien ») o infinitivo publicitario (« Oser, choisir, partager ») que convierte la acción en estilo de vida y en promesa sin plazo. El claim ideal cabe en seis palabras y sobrevive al anuncio: se recuerda al día siguiente sin haberlo apuntado." },
      { t: "Le calembour et la litote", body: "El calembour vive del doble sentido o de la homofonía: « La ferme ! … c'est notre adresse » hace chocar la interjección ('¡cállense!') con el sustantivo ('la granja'). Su ley: « un jeu de mots expliqué est un jeu de mots mort » — se saborea, no se anota. Y su primo discreto, la litote: « il n'est pas interdit de préférer le vrai » dice menos para sugerir más. Frente a la exageración mediterránea del elogio, la publicidad francesa resta y deja que el lector sume: es la elegante desconfianza del público que sonríe sin ser conquistado a gritos." },
      { t: "Le rythme : triade et parataxe", body: "El ritmo se construye con parataxis y paralelismos: tres sintagmas de longitud igual o creciente (« du lait, du pré, du goût »), rima o asonancia final, cierre descendente — « trois coups, une comptine ». La tríada publicitaria hereda el prestigio retórico del número tres: tres golpes iguales y la memoria hace el resto. La prueba del algodón de la agencia: decir el eslogan al día siguiente sin haberlo apuntado ; si no sale, el claim no existe." },
      { t: "Le miroir espagnol", body: "1) El español publicitario exagera ('el mejor queso del mundo') ; el francés sugiere con elipsis y litote: « Le goût du vrai » no afirma superioridad, la insinúa — adapta el gesto, no el adjetivo. 2) El calembour no se explica en pantalla: si necesita nota al pie, ha fracasado ; se justifica aparte, ante el cliente, nunca en el anuncio. 3) Los préstamos se pronuncian a la francesa: en la agencia parisina un meeting es [mi.tin] y quien dice [mi.ting] se delata — la é y la è de los anglicismos siguen el oído francés, no la ortografía de origen." },
    ],
    esempi: [
      { it: "Le goût du vrai, l'odeur du pré.", es: "El sabor de lo auténtico, el olor de la pradera." },
      { it: "Oser, choisir, partager.", es: "Atreverse, elegir, compartir." },
      { it: "Parce que je le vaux bien.", es: "Porque yo lo valgo." },
      { it: "Il n'est pas interdit de préférer le vrai.", es: "No está prohibido preferir lo auténtico." },
      { it: "Du lait, du pré, du goût : trois mots, une comptine.", es: "De leche, de pradera, de sabor: tres palabras, una tonadilla." },
    ],
    usi: [
      { q: "¿Por qué la elipsis del verbo hace inatacable al eslogan?", options: ["Porque ahorra dinero de rodaje", "Porque sin tiempo verbal no hay promesa verificable: solo un mundo sugerido", "Porque es más fácil de rimar"], answer: 1, explain: "Sin verbo no hay plazo ni promesa: el estilo nominativo sugiere sin comprometerse a nada comprobable." },
      { q: "Ante un cliente, el calembour…", options: ["se explica en una nota al pie del anuncio", "se saborea sin explicación: explicado, muere", "se sustituye por un superlativo seguro"], answer: 1, explain: "Regla de agencia: « un jeu de mots expliqué est un jeu de mots mort » — la justificación va aparte, jamás en pantalla." },
    ],
  },

  "fr-cu-c1-10": {
    sezioni: [
      { t: "Comprendre, isoler, retourner", body: "La refutación francesa es un protocolo de tres tiempos: comprendre (« je comprends cet argument » — la llave que abre el turno y desarma), isoler (la cifra queda aislada: « il porte sur six mois »), retourner (el mismo dato se convierte en arma: « pas sur dix ans »). No se ataca a la persona ni se niega el dato: se le cambia el marco temporal o conceptual. Empezar por « je comprends » no es debilidad: es la cortesía que da autoridad al golpe siguiente — el judo retórico de dar la razón en un punto para llevarse el otro." },
      { t: "L'échelle des concessions", body: "Las concesiones forman una escala de elegancia: « certes… mais » (clásica), « il est vrai que… en revanche » (elegante), « j'en conviens… mais encore faut-il que » (afinada), « en admettant que + subjuntivo » (hipotética total: concedes incluso lo que no crees para hacerlo girar). Y la litote de débat: « vous n'êtes pas sans savoir que le budget a été voté » — dos negaciones que afirman con más fuerza que cualquier énfasis. Tras los verbes de concesión, el subjuntivo es obligatorio: « en admettant que vos chiffres soient exacts »." },
      { t: "Le tour de parole et la froide ironie", body: "La gestión del turno tiene sus fórmulas: « si vous me permettez d'achever ma pensée » (recuperar la palabra), « puis-je ajouter une précision ? » (entrar), « je vous laisse ce point » (ceder con clase). La regla de oro del plateau: « qui s'énerve a déjà perdu » — el tono nunca sube. La ironía fina repite la frase del otro con acento de insistencia inicial y contorno plano: « C'est VRAIMENT une découverte » con la voz que no sube es una puya perfecta que no regala papel de víctima." },
      { t: "Le miroir espagnol", body: "1) El español exagera para convencer ('eso es falsísimo', 'clarísimo'): el debate francés soutenu baja la voz — quien concede con elegancia gana, quien grita pierde el titular del día siguiente. 2) La litote dice menos para afirmar más (« vous n'êtes pas sans savoir »): es el gesto inverso de la hipérbole española, y mal calada suena fría sin querer. 3) En admettant que rige subjuntivo siempre — 'admitiendo que sea', no 'que es'. 4) « il est tout aussi vrai que » encadena la concesión simétrica: la simetría de los dos miembros es el arma, no la suma de argumentos." },
    ],
    esempi: [
      { it: "Je comprends cet argument ; toutefois, il porte sur six mois, pas sur dix ans.", es: "Entiendo ese argumento; sin embargo, se refiere a seis meses, no a diez años." },
      { it: "Il est vrai que le télétravail déstabilise les équipes ; il est tout aussi vrai que les transports les épuisent.", es: "Es cierto que el teletrabajo desestabiliza a los equipos; es igualmente cierto que los transportes los agotan." },
      { it: "Vous n'êtes pas sans savoir que le budget a été voté.", es: "Usted no ignora que el presupuesto fue votado." },
      { it: "En admettant que vos chiffres soient exacts, ils ne couvrent pas la décennie.", es: "Admitiendo que sus cifras sean exactas, no cubren la década." },
      { it: "Si vous me permettez d'achever ma pensée, j'y répondrai point par point.", es: "Si me permiten terminar mi pensamiento, responderé punto por punto." },
    ],
    usi: [
      { q: "« Vous n'êtes pas sans savoir que… » est une…", options: ["exagération oratoire", "litote: dos negaciones que afirman ('usted sabe perfectamente')", "question rhétorique en série"], answer: 1, explain: "La litote francesa resta para sumar: el gesto opuesto a la exageración, y en debate da autoridad sin subir el tono." },
      { q: "Después de « en admettant que », el verbo va…", options: ["à l'indicatif", "au subjonctif", "au conditionnel"], answer: 1, explain: "La concesión hipotética rige subjuntivo: en admettant que vos chiffres soient exacts." },
    ],
  },

  "fr-cu-c1-11": {
    sezioni: [
      { t: "Passé simple et imparfait : le partage du travail", body: "En el relato escrito, los dos tiempos se reparten el trabajo: « l'imparfait peint le fond, le passé simple fait agir ». El imperfecto pinta el decorado, los estados y las acciones repetidas (« la gare était presque vide ; le train tardait ») ; el passé simple dispara los acontecimientos puntuales que empujan la historia (« elle regarda l'horloge, prit sa valise, s'assit »). Formas útiles: los verbos en -er hacen -a (regarda) ; venir y tenir → vint, tinrent ; être y avoir → il fut, il eut ; faire → il fit ; pouvoir → il put ; savoir → elle sut ; paraître → le train parut." },
      { t: "L'architecture de la phrase classique", body: "La frase clásica busca equilibrio: tres miembros con cadencia (longitud igual o creciente) y cierre descendente. El adjetivo es sospechoso: cada uno debe justificarse, porque « le mot juste remplace trois mots faibles » — « le train tardait » ahorra « le train était en retard et elle attendait depuis longtemps ». Y la prueba del gueuloir: si la frase resiste ser leída a gritos, queda ; si se rompe, se reescribe. Flaubert pasaba jornadas buscando un adjetivo, y su correspondencia lo confiesa: « le style est une manière absolue de voir les choses »." },
      { t: "Les traces du style ancien", body: "La prosa clásica deja huellas que el lector C1 debe reconocer sin pestañear: el subjonctif imparfait (qu'il fût, qu'il eût compris), el conditionnel passé deuxième forme (il eût fallu, fût-il venu), el ne littéraire (nul ne le savait ; à peine fut-elle montée que le train partit) y las inversiones solemnes con -t- eufónica (fut-il ?). Nadie las conjuga ya al hablar: son señales de altura estilística que hay que descifrar en Flaubert o Proust. Y una ley sin excepción: jamás se mezclan passé simple y passé composé en el mismo párrafo narrativo — el salto de registro delata al extranjero." },
      { t: "Le miroir espagnol", body: "1) El español habla su pretérito indefinido ('fue', 'miró') : el passé simple francés NO se habla — solo narra por escrito y sobrevive en discursos solemnes ; su gemelo conversacional es el passé composé. 2) La alternancia imperfecto/indefinido es idéntica en las dos lenguas: aprovecha el espejo ('la estación estaba vacía' / 'miró el reloj'). 3) El ne littéraire no existe en español: « nul ne », « à peine… que » se aprenden como piezas fijas. 4) En el taller, el hispanohablante abre con « il y avait une femme qui attendait » por calco del cuento: mejor entrar en el decorado: « la gare était presque vide »." },
    ],
    esempi: [
      { it: "La gare était presque vide ; une femme attendait près du guichet.", es: "La estación estaba casi vacía; una mujer esperaba cerca del puesto." },
      { it: "Elle regarda l'horloge, prit sa valise, s'assit enfin.", es: "Miró el reloj, cogió su maleta, se sentó por fin." },
      { it: "Le train tardait ; la nuit tombait ; l'attente devenait un personnage.", es: "El tren tardaba; la noche caía; la espera se volvía personaje." },
      { it: "À peine fut-elle montée que le train partit.", es: "Apenas hubo subido, el tren partió." },
      { it: "Il eût fallu davantage de temps pour comprendre.", es: "Habría hecho falta más tiempo para comprender." },
    ],
    usi: [
      { q: "« Elle ___ l'horloge, prit sa valise. » (narration écrite)", options: ["a regardé", "regardait", "regarda"], answer: 2, explain: "El acontecimiento puntual que hace avanzar el relato va en passé simple: regarda ; el compuesto rompería el registro." },
      { q: "« Il eût fallu » es…", options: ["un plus-que-parfait de l'indicatif", "un conditionnel passé deuxième forme literario", "un futur antérieur"], answer: 1, explain: "eût + participio: la segunda forma del condicional pasado, marca de prosa clásica que conviene reconocer." },
    ],
  },

  "fr-cu-c1-12": {
    sezioni: [
      { t: "Annoncer le plan, tracer la route", body: "El plan se anuncia en futuro, como promesa: « mon exposé comportera trois parties : d'abord le contexte, ensuite la méthodologie, enfin les résultats — et leur limite, que je revendique ». Las transiciones son puertas que el jurado oye abrir: « j'en viens maintenant à… » (el pronombre en retoma y anuncia), « j'aborde à présent… », « avant d'en venir à la dernière partie… ». El francés exige el pronombre adverbial y el ahora (maintenant, à présent) para crear la sensación de arquitectura en construcción — el español dice 'paso ahora a', el francés añade el en que retoma el tema anterior." },
      { t: "Le protocole du jury", body: "Interrumpido por el jurado, la tríada canónica: remercier (« je vous remercie de cette question »), concéder (« l'échantillon est certes modeste »), renvoyer (« j'y reviendrai dans la troisième partie »). Para tomar la palabra: « permettez-moi d'ajouter une précision ». Para matizar sin perder autoridad, el hedging: « il me semble que… », « les données suggèrent que… » — la atenuación protege el flanco y da tiempo para pensar. Y las cifras se posan: « cent-vingt // c'est une marche » — pausa tras cada número, porque el dato que desfila no se oye." },
      { t: "Le vous et la distance savante", body: "Ante el jurado, el vouvoiement es total e invariable: « mesdames et messieurs les membres du jury, je vous remercie de votre présence ». El nous de investigación (« nous avons interrogé cent vingt personnes ») puede asumirse con coherencia o cambiarse al je del orador — pero nunca alternar al azar. La última frase se prepara de memoria: es la que queda sonando en la sala durante la deliberación. Y la deliberación se hace a puerta cerrada: presidenta, fórmula invariable (« la séance est ouverte »), preguntas, veredicto." },
      { t: "Le miroir espagnol", body: "1) El español académico se permite el 'yo creo que' directo ; el francés hedges: « il me semble que », « les données suggèrent que » — la opinión se sirve atenuada. 2) No saltes de nous a je según la frase: elige un nosotros de equipo o un yo de orador y sostén la persona gramatical hasta el final. 3) El español encadena cifras sin respirar ; el francés de soutenance posa cada número con micro pausa — « cent-vingt » es un peldaño, no un desfile. 4) « j'y reviendrai » lleva y (volver sobre ello), mientras « j'en viens à » lleva en: los dos pronombres adverbiales del recorrido." },
    ],
    esempi: [
      { it: "Mon exposé comportera trois parties : d'abord le contexte, ensuite la méthodologie, enfin les résultats.", es: "Mi exposición constará de tres partes: primero el contexto, después la metodología, por último los resultados." },
      { it: "J'en viens maintenant à la méthodologie.", es: "Paso ahora a la metodología." },
      { it: "Je vous remercie de cette question ; j'y reviendrai dans la troisième partie.", es: "Le agradezco esta pregunta; volveré sobre ello en la tercera parte." },
      { it: "Il me semble que les résultats appellent une nuance.", es: "Me parece que los resultados requieren un matiz." },
      { it: "Permettez-moi d'ajouter une précision sur l'échantillon.", es: "Permítanme añadir una precisión sobre la muestra." },
    ],
    usi: [
      { q: "Interrompu par le jury, la tríada correcta es…", options: ["nier, crier, fuir", "remercier, concéder, renvoyer", "lire, écrire, compter"], answer: 1, explain: "Se agradece la pregunta, se concede un punto y se remite a una parte posterior: estructura y calma ante la objeción." },
      { q: "« J'___ viens maintenant à la méthodologie » :", options: ["y", "en", "le"], answer: 1, explain: "J'en viens à: el pronombre en retoma el tema anterior y abre la transición ; y sería para « j'y reviendrai »." },
    ],
  },
};
