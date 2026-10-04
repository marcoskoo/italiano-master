import type { MindReading } from "../cambridge-mind";

/* ═══ v9.13 · Letture tematiche C2 · Meditazione, spiritualità, qui e ora,
   relax fisico e mentale — 3 por unidad comunicativa (C2: unidades 1-8). */

export const MIND_C2: Record<string, MindReading[]> = {
  "cu-c2-01": [
    {
      id: "md-c2-01-1", theme: "spiritualità", title: "Il silenzio nei registri alti", titleEs: "El silencio en los registros altos", minutes: 5,
      paragraphs: [
        { it: "Chi studia i registri dell'italiano — dal burocratese al parlato — nota un'assenza sistematica: il silenzio non ha registro. Esistono il silenzio religioso e quello imbarazzato, ma la lingua italiana, così ricca di sfumature, non possiede un lessico colto per gli stati quieti dell'anima. Il tedesco ha la Gelassenheit; il greco antico, la hesychia; l'italiano, per dire la stessa cosa, deve ricorrere al francesismo «relax» o alla perifrasi medica «riposo».", es: "Quien estudia los registros del italiano — del burocratés al hablado — nota una ausencia sistemática: el silencio no tiene registro. Existen el silencio religioso y el incómodo, pero la lengua italiana, tan rica en matices, no posee un léxico culto para los estados quietos del alma. El alemán tiene la Gelassenheit; el griego antiguo, la hesychia; el italiano, para decir lo mismo, debe recurrir al galicismo «relax» o a la perífrasis médica «descanso»." },
        { it: "Un glottologo ha avanzato un'ipotesi maliziosa: le lingue sviluppano il lessico di ciò che le loro società praticano. L'Italia, civiltà dell'eloquenza, ha cento parole per la retorica e nessuna per la quiete — non perché la quiete manchi, ma perché è rimasta dialettale, domestica, non detta. Il che spiegherebbe anche la fortuna contemporanea della parola inglese mindfulness: non è solo moda, è un prestito di bisogno. Le lacune lessicali, come i vuoti d'aria in aviazione, si attraversano con mezzi altrui.", es: "Un glotólogo avanzó una hipótesis maliciosa: las lenguas desarrollan el léxico de lo que sus sociedades practican. Italia, civilización de la elocuencia, tiene cien palabras para la retórica y ninguna para la quietud — no porque la quietud falte, sino porque quedó dialectal, doméstica, no dicha. Lo que explicaría también la fortuna contemporánea de la palabra inglesa mindfulness: no es solo moda, es un préstamo de necesidad. Las lagunas léxicas, como las zonas de turbulencia en aviación, se cruzan con medios ajenos." },
      ],
      predict: { q: "Antes de leer: ¿qué carencia léxica describirá el texto?", options: ["El italiano carece de léxico culto para la quietud", "El italiano no tiene palabras para la comida", "El italiano desconoce la retórica"], answer: 0, why: "«Il silenzio nei registri alti»: el silencio sin registro." },
      quiz: [
        { q: "Che parole ha il tedesco per la quiete?", kind: "literal", options: ["Gelassenheit", "Hesychia", "Relax"], answer: 0, why: "«Il tedesco ha la Gelassenheit»." },
        { q: "Perché l'italiano ricorre a «mindfulness»?", kind: "inferencial", options: ["Es un préstamo de necesidad ante una laguna léxica", "Porque suena elegante en las redes", "Porque lo exige la escuela"], answer: 0, why: "«Non è solo moda, è un prestito di bisogno»." },
        { q: "«Le lingue sviluppano il lessico di ciò che le loro società pratican»: te parece válida esta hipótesis? Qué practicaría tu lengua?", kind: "critica", options: ["Válida con matices: el léxico refleja prácticas y también las habilita", "Falsa: las lenguas son aleatorias", "No sabría decirlo"], answer: 0, why: "La hipótesis explica préstamos y modas: léxico = práctica social." },
      ],
      vf: [
        { text: "L'italiano possiede un ricco lessico colto per gli stati quieti.", value: false, why: "Falso: la tesis del texto es la ausencia." },
        { text: "La hesychia è greca antica.", value: true, why: "Citada como término griego." },
        { text: "Secondo il glottologo, la quiete in Italia è rimasta dialettale e non detta.", value: true, why: "Frase central del segundo párrafo." },
      ],
    },
    {
      id: "md-c2-01-2", theme: "relax mentale", title: "Il burocratese dell'anima", titleEs: "El burocratés del alma", minutes: 5,
      paragraphs: [
        { it: "C'è chi parla di sé come un modulo compilato male: «In relazione al mio stato emotivo, si segnala una criticità». Il burocratese dell'anima — il linguaggio manageriale applicato alla vita interiore — è l'ultima maschera del disagio: chi non può nominare ciò che sente, lo delega a un registro che non lo obbliga a sentirlo.", es: "Hay quien habla de sí como un formulario mal compilado: «En relación con mi estado emocional, se señala una criticidad». El burocratés del alma — el lenguaje gerencial aplicado a la vida interior — es la última máscara del malestar: quien no puede nombrar lo que siente, lo delega a un registro que no lo obliga a sentirlo." },
        { it: "Un terapeuta linguista ha raccolto per anni le «frasi-module» dei pazienti, notando un pattern: chi dice «sto gestendo una situazione di stress» sta quasi sempre soffrendo qualcosa che non osa dire — un lutto, una paura, un amore. La cura, a volte, comincia con una semplice traduzione: «Proviamo a dirlo in un'altra lingua? Non in corporate: in umano». Il paziente ride, poi piange, poi dice la frase semplice che il modulo nascondeva da mesi. La lingua non descrive l'anima: la abita o la evita.", es: "Un terapeuta lingüista recogió durante años las «frases-formulario» de los pacientes, notando un patrón: quien dice «estoy gestionando una situación de estrés» casi siempre está sufriendo algo que no se atreve a decir — un duelo, un miedo, un amor. La cura, a veces, comienza con una simple traducción: «¿Probamos a decirlo en otra lengua? No en corporativo: en humano». El paciente ríe, luego llora, luego dice la frase simple que el formulario escondía desde hacía meses. La lengua no describe el alma: la habita o la evita." },
      ],
      predict: { q: "Antes de leer: ¿qué será «il burocratese dell'anima»?", options: ["El lenguaje gerencial aplicado a la vida interior", "Un dialecto regional", "Una técnica de meditación corporativa"], answer: 0, why: "«Burocratese dell'anima»: registro y evitación." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["El registro gerencial del sufrimiento es una evitación: traducir a lo humano es ya curar", "Hablar en corporate es más eficiente", "Las emociones no deben nombrarse"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Quien «gestiona el estrés» suele esconder un duelo, un miedo o un amor", "La traducción a lo humano hace reír, llorar y finalmente decir"],
        distractors: ["El terapeuta prohíbe el corporate en su consultorio", "El texto defiende el burocratese como claridad"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Chi non può nominare ciò che sente lo delega a un registro.", "«In relazione al mio stato emotivo, si segnala una criticità».", "La lingua non descrive l'anima: la abita o la evita.", "Il corporate è la lingua più adatta per esprimere i lutti profondi."],
        intruder: 3, why: "El texto sostiene exactamente lo contrario: el corporate evita el duelo." },
    },
    {
      id: "md-c2-01-3", theme: "meditazione", title: "Il parlato che medita", titleEs: "El habla que medita", minutes: 5,
      paragraphs: [
        { it: "Il neostandard italiano, disprezzato dai puristi, contiene una sorpresa: l'esplosione di pause piene — «cioè», «tipo», «insomma» — non è solo insicurezza. Un fonetista le ha analizzate come tecniche di respiro del parlato: riempitori che permettono alla voce di non correre più veloce del pensiero.", es: "El neoestándar italiano, despreciado por los puristas, contiene una sorpresa: la explosión de pausas llenas — «cioè», «tipo», «insomma» — no es solo inseguridad. Un fonetista las analizó como técnicas de respiración del habla: rellenos que permiten a la voz no correr más rápido que el pensamiento." },
        { it: "L'ipotesi, tutt'altro che provocatoria, ha un precedente nobile: i grandi oratori usavano le pause come il silenzio usa i respiri. Il parlato contemporaneo, con i suoi «tipo» e «cioè», avrebbe democratizzato — sia pure in versione impura — un'arte un tempo aristocratica: dare al pensiero il tempo di farsi parola. Chi parla senza pause non pensa mentre parla: recita quello che ha già pensato (o peggio, non ha pensato).", es: "La hipótesis, nada provocadora, tiene un precedente noble: los grandes oradores usaban las pausas como el silencio usa las respiraciones. El habla contemporánea, con sus «tipo» y «cioè», habría democratizado — aunque en versión impura — un arte otrora aristocrático: dar al pensamiento el tiempo de hacerse palabra. Quien habla sin pausas no piensa mientras habla: recita lo que ya pensó (o peor, no pensó)." },
      ],
      predict: { q: "Antes de leer: ¿qué revelará el análisis de «cioè, tipo, insomma»?", options: ["Son pausas llenas: respiración del habla", "Son errores gramaticales", "Son anglicismos"], answer: 0, why: "«Il parlato che medita»: el valor de la pausa." },
      sequence: {
        instr: "Ordena el argumento del fonetista (1 = primero):",
        events: ["Il neostandard moltiplica le pause piene", "Il fonetista le analizza come tecniche di respiro del parlato", "I riempitori impediscono alla voce di correre più veloce del pensiero", "L'arte aristocratica della pausa risulta democratizzata", "Chi parla senza pause recita, non pensa"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "I riempitori del parlato — cioè, tipo, insomma — sono pause piene: permettono alla voce di non correre più veloce del pensiero. I grandi oratori usavano le pause come il silenzio usa i respiri. Chi parla senza pause non pensa mentre parla: recita quello che ha già pensato, o peggio.",
        questions: [
          { q: "Cosa permettono i riempitori?", kind: "literal", options: ["Alla voce di non correre più veloce del pensiero", "Di parlare più veloce", "Di evitare la grammatica"], answer: 0, why: "Frase central." },
          { q: "Come usavano le pause i grandi oratori?", kind: "literal", options: ["Come il silenzio usa i respiri", "Come un difetto da nascondere", "Come un insulto"], answer: 0, why: "Metáfora del texto." },
          { q: "Cosa fa chi parla senza pause?", kind: "inferencial", options: ["Recita, non pensa", "Piensa profundamente", "Escucha mejor"], answer: 0, why: "«Recita quello che ha già pensato, o peggio»." },
        ],
      },
    },
  ],

  "cu-c2-02": [
    {
      id: "md-c2-02-1", theme: "spiritualità", title: "La prosa che prega", titleEs: "La prosa que reza", minutes: 5,
      paragraphs: [
        { it: "I teorici della prosa d'arte — Leopardi in testa — sapevano che la frase perfetta somiglia a una preghiera: ritmo regolare, caduta finale, un respiro che si chiude. La letteratura italiana nasce devota: la Divina Commedia è un viaggio di conversione, e anche il romanzo moderno, sicolare e scettico, conserva nelle sue architetture la struttura dell'orazione — domanda, buio, risposta.", es: "Los teóricos de la prosa de arte — Leopardi a la cabeza — sabían que la frase perfecta se parece a una oración: ritmo regular, caída final, un respiro que se cierra. La literatura italiana nace devota: la Divina Comedia es un viaje de conversión, y también la novela moderna, laica y escéptica, conserva en sus arquitecturas la estructura de la plegaria — pregunta, oscuridad, respuesta." },
        { it: "Uno stilista contemporaneo, interrogato sul suo metodo, ha risposto da liturgista: «Prima di ogni capitolo, mi chiedo: dove sta la preghiera di queste persone? Non la religione: la preghiera — ciò che chiedono al buio, senza testimoni». È forse la definizione più profonda del personaggio letterario: non un carattere, ma una domanda rivolta al silenzio. Chi scrive senza ascoltarla produce personaggi che parlano; chi la ascolta produce personaggi che chiedono — e il lettore, senza sapere perché, si inginocchia con loro.", es: "Un estilista contemporáneo, interrogado sobre su método, respondió como liturgista: «Antes de cada capítulo, me pregunto: ¿dónde está la oración de estas personas? No la religión: la oración — lo que piden en la oscuridad, sin testigos». Es quizá la definición más profunda del personaje literario: no un carácter, sino una pregunta dirigida al silencio. Quien escribe sin escucharla produce personajes que hablan; quien la escucha produce personajes que piden — y el lector, sin saber por qué, se arrodilla con ellos." },
      ],
      predict: { q: "Antes de leer: ¿a qué se parece la frase perfecta según los teóricos?", options: ["A una preghiera: ritmo, cadencia, respiro que se cierra", "A un documento legal", "A una conversación telefónica"], answer: 0, why: "«La prosa che prega»: literatura y liturgia." },
      quiz: [
        { q: "Cosa conserva il romanzo moderno secondo il testo?", kind: "literal", options: ["La struttura dell'orazione: domanda, buio, risposta", "Solo la métrica dantesca", "Niente del passato"], answer: 0, why: "Primer párrafo." },
        { q: "Cosa chiede lo stilista prima di ogni capitolo?", kind: "literal", options: ["Dove sta la preghiera di queste persone", "Quante pagine mancano", "Chi vince nel finale"], answer: 0, why: "Su respuesta citada." },
        { q: "Qué es un personaje literario según la definición profunda?", kind: "inferencial", options: ["Una pregunta dirigida al silencio, no un carácter", "Una biografía completa", "Un portavoz del autor"], answer: 0, why: "«Non un carattere, ma una domanda rivolta al silenzio»." },
        { q: "El lector «se arrodilla con ellos»: lo has experimentado leyendo? En qué libro?", kind: "critica", options: ["Sì: los personajes que piden algo al silencio me conmueven más que los que solo actúan", "No: la literatura es distracción", "No recuerdo ningún libro"], answer: 0, why: "La estructura de plegaria involucra al lector a nivel profundo." },
      ],
      vf: [
        { text: "La Divina Commedia è un viaggio di conversione.", value: true, why: "Citada como origen devoto de la literatura italiana." },
        { text: "Il personaggio letterario è soprattutto un carattere.", value: false, why: "Falso: «non un carattere, ma una domanda»." },
        { text: "Chi ascolta la preghiera dei personaggi produce figure che chiedono.", value: true, why: "Cierre del texto." },
      ],
    },
    {
      id: "md-c2-02-2", theme: "meditazione", title: "La punteggiatura del respiro", titleEs: "La puntuación del respiro", minutes: 5,
      paragraphs: [
        { it: "Un vecchio tipografo sosteneva che la punteggiatura fosse nata come notazione musicale per la voce: il punto, la pausa piena; la virgola, il mezzo respiro; il punto e virgola, il respiro trattenuto. «Il testo», diceva, «è una partitura che i lettori eseguono senza saperlo. Un periodo senza virgole è un'apnea».", es: "Un viejo tipógrafo sostenía que la puntuación nació como notación musical para la voz: el punto, la pausa plena; la coma, el medio respiro; el punto y coma, el respiro contenido. «El texto», decía, «es una partitura que los lectores ejecutan sin saberlo. Un período sin comas es una apnea»." },
        { it: "La filologia moderna gli dà parzialmente ragione: i segni interpuntivi accompagnarono per secoli la lettura ad alta voce, e la loro crisi contemporanea — frasi lunghe senza pause, punti ovunque — coincide con la lettura silenziosa e veloce. Perdere la punteggiatura del respiro significa perdere il corpo del testo: la sua andatura, la sua fatica, il suo modo di respirare. Chi vuole restituire al testo il suo corpo ha un esercizio antico: leggerlo ad alta voce e ascoltare dove manca il respiro. Dove manca al lettore, manca anche allo scrittore.", es: "La filología moderna le da parcialmente la razón: los signos de puntuación acompañaron durante siglos la lectura en voz alta, y su crisis contemporánea — frases largas sin pausas, puntos por doquier — coincide con la lectura silenciosa y veloz. Perder la puntuación del respiro significa perder el cuerpo del texto: su andar, su fatiga, su manera de respirar. Quien quiere devolver al texto su cuerpo tiene un ejercicio antiguo: leerlo en voz alta y escuchar dónde falta el respiro. Donde le falta al lector, le falta también al escritor." },
      ],
      predict: { q: "Antes de leer: ¿qué era la punteggiatura según el tipógrafo?", options: ["Notación musical para la voz: pausas y respiraciones", "Un adorno opcional", "Una invención moderna"], answer: 0, why: "«La punteggiatura del respiro»: partitura del cuerpo." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["La puntuación es la respiración del texto: leer en voz alta devuelve su cuerpo", "La puntuación ya no sirve", "Los tipógrafos no entienden de escritura"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El punto, la pausa plena; la coma, el medio respiro; el punto y coma, el respiro contenido", "La crisis de la puntuación coincide con la lectura silenciosa y veloz"],
        distractors: ["El tipógrafo dice que la coma es inútil", "El texto recomienda abolir los puntos y coma"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Il testo è una partitura eseguita senza saperlo.", "Un periodo senza virgole è un'apnea.", "Dove manca il respiro al lettore, manca anche allo scrittore.", "La punteggiatura va eliminata: le frasi lunghe senza pause sono più moderne."],
        intruder: 3, why: "El texto compara la frase sin pausas con una apnea: lo contrario de una virtud." },
    },
    {
      id: "md-c2-02-3", theme: "qui e ora", title: "Il presente storico dell'anima", titleEs: "El presente histórico del alma", minutes: 5,
      paragraphs: [
        { it: "La narrativa usa il presente storico per rendere vivo il passato: «Nel 1943 entra nella stanza…». Un romanziere ha confessato il suo trucco segreto: usa lo stesso tempo verbale per i ricordi personali. «Quando rivivo un ricordo doloroso», spiega, «lo racconto a me stesso al presente: entro nella stanza, vedo la luce. Il ricordo al passato è un archivio; il ricordo al presente è un incontro».", es: "La narrativa usa el presente histórico para volver vivo el pasado: «En 1943 entra en la habitación…». Un novelista confesó su truco secreto: usa el mismo tiempo verbal para los recuerdos personales. «Cuando revivo un recuerdo doloroso», explica, «me lo cuento a mí mismo en presente: entro en la habitación, veo la luz. El recuerdo en pasado es un archivo; el recuerdo en presente es un encuentro»." },
        { it: "La psicologia del trauma guarda con interés a queste pratiche spontanee: rievocare al presente, in condizioni di sicurezza, è il cuore delle terapie espositive. Il romanziere, da parte sua, ha scoperto un effetto laterale inatteso: i ricordi portati al presente perdono il loro veleno ma anche il loro monopolio — si mescolano al presente attuale e diventano, finalmente, materiale narrativo. «Il passato al passato comanda», conclude. «Il passato al presente racconta».", es: "La psicología del trauma mira con interés esas prácticas espontáneas: reevocar en presente, en condiciones de seguridad, es el corazón de las terapias exposiciónales. El novelista, por su parte, descubrió un efecto lateral inesperado: los recuerdos llevados al presente pierden su veneno pero también su monopolio — se mezclan con el presente actual y se vuelven, por fin, material narrativo. «El pasado en pasado manda», concluye. «El pasado en presente cuenta»." },
      ],
      predict: { q: "Antes de leer: ¿qué truco confesará el novelista?", options: ["Vive los recuerdos en presente: de archivo a encuentro", "Escribe solo por la noche", "Borra todos los borradores"], answer: 0, why: "«Il presente storico dell'anima»: tiempo verbal y memoria." },
      sequence: {
        instr: "Ordena la práctica del novelista (1 = primero):",
        events: ["Rivive un ricordo doloroso", "Lo racconta a se stesso al presente", "Entra nella stanza, vede la luce", "Il ricordo perde il veleno e il monopolio", "Diventa materiale narrativo: il passato al presente racconta"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Il ricordo al passato è un archivio; il ricordo al presente è un incontro. Racconta a te stesso i ricordi difficili al presente: entro nella stanza, vedo la luce. Il passato al passato comanda. Il passato al presente racconta. E ciò che racconta perde il veleno e diventa materia narrativa.",
        questions: [
          { q: "Cosa è il ricordo al passato?", kind: "literal", options: ["Un archivio", "Un incontro", "Un sogno"], answer: 0, why: "«Un archivio»." },
          { q: "Cosa fa il passato al presente?", kind: "literal", options: ["Racconta", "Comanda", "Tace"], answer: 0, why: "«Il passato al presente racconta»." },
          { q: "Cosa perde il ricordo portato al presente?", kind: "inferencial", options: ["Il veleno e il monopolio", "La verità", "La data"], answer: 0, why: "«Perdono il loro veleno ma anche il loro monopolio»." },
        ],
      },
    },
  ],

  "cu-c2-03": [
    {
      id: "md-c2-03-1", theme: "relax mentale", title: "L'ironia che riposa", titleEs: "La ironía que descansa", minutes: 5,
      paragraphs: [
        { it: "L'umorismo pesante affatica: l'ironia fine riposa. Un saggista lo spiegava così: la battuta forte tende un muscolo che poi si rilascia — riso, scarica, oblio. L'ironia sottile, invece, tiene aperta una porta: il lettore resta sulla soglia tra due significati, e quella sospensione — il non decidere, il rimanere tra — è, neurologicamente, uno stato di calma vigile.", es: "El humor pesado fatiga: la ironía fina descansa. Un ensayista lo explicaba así: el chiste fuerte tensa un músculo que luego se libera — risa, descarga, olvido. La ironía sutil, en cambio, mantiene abierta una puerta: el lector queda en el umbral entre dos significados, y esa suspensión — el no decidir, el permanecer entre — es, neurológicamente, un estado de calma vigilante." },
        { it: "Gli studi sui processi cognitivi dell'ironia confermano il paradosso: comprenderla richiede di mantenere due letture simultanee, un esercizio di flessibilità che, una volta appreso, si riversa in ogni altra area del pensiero. Chi pratica l'ironia fine — nel leggerla, nello scriverla, nel subirla — allena la capacità di stare nel dubbio senza ansia. Non a caso i maestri di ogni tradizione contemplativa erano, quasi tutti, degli ironisti terribili: la serietà rigida è il primo sintomo di una mente che non respira.", es: "Los estudios sobre los procesos cognitivos de la ironía confirman la paradoja: comprenderla exige mantener dos lecturas simultáneas, un ejercicio de flexibilidad que, una vez aprendido, se derrama en todas las demás áreas del pensamiento. Quien practica la ironía fina — al leerla, al escribirla, al padecerla — entrena la capacidad de estar en la duda sin ansiedad. No por casualidad los maestros de toda tradición contemplativa eran, casi todos, unos ironistas terribles: la seriedad rígida es el primer síntoma de una mente que no respira." },
      ],
      predict: { q: "Antes de leer: ¿qué diferencia hay entre la battuta fuerte y la ironía fina?", options: ["La ironía mantiene en calma vigilante entre dos significados", "La battuta es más intelectual", "No hay diferencia"], answer: 0, why: "«L'ironia che riposa»: la suspensión como descanso." },
      quiz: [
        { q: "Cosa fa la battuta forte secondo il saggista?", kind: "literal", options: ["Tende un muscolo che poi si rilascia", "Mantiene la calma per ore", "Non produce effetti"], answer: 0, why: "La comparación muscular inicial." },
        { q: "Cosa richiede comprendere l'ironia?", kind: "inferencial", options: ["Mantener dos lecturas simultáneas: flexibilidad sin ansia", "Una sola interpretación literal", "Conocer al autor"], answer: 0, why: "«Due letture simultanee»." },
        { q: "Los maestros contemplativos eran ironistas: qué te dice esto sobre la seriedad?", kind: "critica", options: ["La seriedad rígida es una mente que no respira: el humor fino es práctica espiritual", "La seriedad es siempre sabiduría", "El humor no tiene relación con la mente"], answer: 0, why: "El texto cierra con esa idea exacta." },
      ],
      vf: [
        { text: "L'ironia sottile tiene aperta una porta.", value: true, why: "Imagen central del texto." },
        { text: "La sospensione tra due significati genera ansia.", value: false, why: "Falso: «è uno stato di calma vigile»." },
        { text: "La serietà rigida è il primo sintomo di una mente che non respira.", value: true, why: "Frase final." },
      ],
    },
    {
      id: "md-c2-03-2", theme: "meditazione", title: "Lo humour dei maestri zen", titleEs: "El humor de los maestros zen", minutes: 5,
      paragraphs: [
        { it: "Le cronache zen sono piene di risate. Un allievo chiede al maestro il segreto della vita; il maestro gli ruba il cappello e corre via. Un altro chiede l'illuminazione; il maestro lo invita a pranzo e non dice una parola per due ore. I commentatori occidentali, per decenni, hanno letto questi episodi come «insegnamenti indiretti»: quasi nessuno ha avuto il coraggio di dirlo semplicemente — erano anche, molto spesso, scene comiche.", es: "Las crónicas zen están llenas de risas. Un alumno pide al maestro el secreto de la vida; el maestro le roba el sombrero y sale corriendo. Otro pide la iluminación; el maestro lo invita a almorzar y no dice una palabra durante dos horas. Los comentaristas occidentales, durante décadas, leyeron estos episodios como «enseñanzas indirectas»: casi ninguno tuvo el coraje de decirlo simplemente — eran también, muy a menudo, escenas cómicas." },
        { it: "La comicità, in quelle tradizioni, non decorava l'insegnamento: lo proteggeva. La serietà solenne, infatti, attira l'ego come la luce attira le zanzare — l'allievo solenne finisce per innamorarsi della propria ricerca. Il maestro che ride glielo ricorda, senza ferirlo: stai prendendo troppo sul serio proprio il gioco che serve a non prenderti sul serio. L'umorismo spirituale è questo: la compassione travestita da battuta — perché la verità detta ridendo lascia il segno, detta con solennità lascia solo l'ammirazione.", es: "La comicidad, en esas tradiciones, no decoraba la enseñanza: la protegía. La seriedad solemne, en efecto, atrae al ego como la luz atrae a los mosquitos — el alumno solemne termina enamorándose de su propia búsqueda. El maestro que ríe se lo recuerda, sin herirlo: estás tomándote demasiado en serio justamente el juego que sirve para no tomarte en serio. El humor espiritual es esto: la compasión disfrazada de ocurrencia — porque la verdad dicha riendo deja huella, dicha con solemnidad deja solo admiración." },
      ],
      predict: { q: "Antes de leer: ¿qué han evitado decir los comentaristas occidentales?", options: ["Que los episodios zen son también escenas cómicas", "Que el zen es una religión", "Que los maestros eran violentos"], answer: 0, why: "«Lo humour dei maestri zen»: la risa como enseñanza." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["El humor espiritual protege la enseñanza del ego del buscador: compasión disfrazada", "El zen es una broma cruel", "La solemnidad es la mejor maestra"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["La seriedad solemne atrae al ego como la luz a los mosquitos", "La verdad dicha riendo deja huella; dicha con solemnidad, solo admiración"],
        distractors: ["Los maestros zen reían solo los domingos", "El texto dice que la comicidad decoraba la enseñanza"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Il maestro ruba il cappello e corre via.", "La comicità proteggeva l'insegnamento.", "La verità detta ridendo lascia il segno.", "Il vero allievo deve stare sempre immobile e serissimo, senza mai ridere."],
        intruder: 3, why: "Toda la tradición descrita usa la risa contra la solemnidad del ego." },
    },
    {
      id: "md-c2-03-3", theme: "qui e ora", title: "La litote del giorno comune", titleEs: "La litote del día común", minutes: 5,
      paragraphs: [
        { it: "La litote — dire «non male» per «eccellente» — è considerata un vezzo retorico. Un antropologo del linguaggio l'ha studiata invece come una tecnica di presenza: chi attenua con eleganza evita di fissare l'esperienza in un giudizio definitivo, e la lascia aperta, respirante.", es: "La litote — decir «nada mal» por «excelente» — es considerada un capricho retórico. Un antropólogo del lenguaje la estudió en cambio como una técnica de presencia: quien atenúa con elegancia evita fijar la experiencia en un juicio definitivo, y la deja abierta, respirante." },
        { it: "Il suo corpus: le conversazioni dei contadini valdostani, maestri involontari del «non c'è male». «Dire bellissimo», spiegava un ottantenne, «chiude la cosa. Dire non c'è male la lascia vivere: domani può essere più bella, o meno. Chi esagera, saluta; chi attenua, resta». L'antropologo vi lesse una filosofia intera del presente: il superlativo è un congedo dal momento, la litote un modo di abitarlo ancora. Forse è per questo che i popoli montani — che vivono sotto cieli che cambiano ogni ora — diffidano delle parole troppo grandi: sanno che il tempo le smentisce.", es: "Su corpus: las conversaciones de los campesinos valdostanos, maestros involuntarios del «no está mal». «Decir bellísimo», explicaba un octogenario, «cierra la cosa. Decir no está mal la deja vivir: mañana puede ser más linda, o menos. Quien exagera, se despide; quien atenúa, se queda». El antropólogo leyó en ello una filosofía entera del presente: el superlativo es una despedida del momento, la litote una manera de habitarlo todavía. Quizá por eso los pueblos de montaña — que viven bajo cielos que cambian cada hora — desconfían de las palabras demasiado grandes: saben que el tiempo las desmiente." },
      ],
      predict: { q: "Antes de leer: ¿qué función oculta tendrá la litote?", options: ["Deja la experiencia abierta: técnica de presencia", "Es solo cortesía", "Sirve para engañar"], answer: 0, why: "«La litote del giorno comune»: atenuación y presencia." },
      sequence: {
        instr: "Ordena la filosofía del contadino (1 = primero):",
        events: ["Dice «non c'è male» invece di «bellissimo»", "Il superlativo chiude la cosa", "La litote la lascia vivere", "Domani l'esperienza può essere più bella, o meno", "Chi esagera saluta; chi attenua resta"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Dire bellissimo chiude la cosa. Dire non c'è male la lascia vivere: domani può essere più bella, o meno. Chi esagera, saluta; chi attenua, resta. Il superlativo è un congedo dal momento. La litote è un modo di abitarlo ancora.",
        questions: [
          { q: "Cosa fa il superlativo?", kind: "literal", options: ["Chiude la cosa", "La lascia vivere", "La trasforma"], answer: 0, why: "«Chiude la cosa»." },
          { q: "Chi esagera?", kind: "literal", options: ["Saluta", "Resta", "Tace"], answer: 0, why: "«Chi esagera, saluta»." },
          { q: "Cosa è la litote?", kind: "inferencial", options: ["Un modo di abitar il momento ancora", "Un insulto elegante", "Un errore grammaticale"], answer: 0, why: "«Un modo di abitarlo ancora»." },
        ],
      },
    },
  ],

  "cu-c2-04": [
    {
      id: "md-c2-04-1", theme: "spiritualità", title: "La retorica del silenzio", titleEs: "La retórica del silencio", minutes: 5,
      paragraphs: [
        { it: "Cicerone, teorico dell'eloquenza totale, ammetteva un'eccezione: il silenzio dell'oratore, nei punti giusti, vale più di ogni periodo. La retorica classica, letta fino in fondo, è una disciplina del silenzio tanto quanto della parola: l'ars tacendi — l'arte di tacere — figurava nei programmi delle scuole di oratoria insieme all'ars dicendi.", es: "Cicerón, teórico de la elocuencia total, admitía una excepción: el silencio del orador, en los puntos justos, vale más que cualquier período. La retórica clásica, leída hasta el fondo, es una disciplina del silencio tanto como de la palabra: el ars tacendi — el arte de callar — figuraba en los programas de las escuelas de oratoria junto al ars dicendi." },
        { it: "L'ars tacendi aveva regole precise: tacere prima di un punto decisivo (per prepararlo), tacere dopo (per lasciarlo depositare), e soprattutto tacere quando la parola servirebbe solo a riempire la paura dell'oratore. Il silenzio retorico, dunque, non è vuoto: è un silenzio funzionale, progettato come le pause di una partitura. Gli oratori contemporanei, cresciuti nel terrore del secondo di vuoto, hanno invertito la gerarchia: riempiono tutto, e ottengono l'effetto delle sale piene di mobilio — nessun spazio dove l'uditorio possa posare il pensiero. Il silenzio, in oratoria come in architettura, è la stanza che accoglie.", es: "El ars tacendi tenía reglas precisas: callar antes de un punto decisivo (para prepararlo), callar después (para dejarlo depositarse), y sobre todo callar cuando la palabra serviría solo para llenar el miedo del orador. El silencio retórico, entonces, no es vacío: es un silencio funcional, proyectado como las pausas de una partitura. Los oradores contemporáneos, criados en el terror del segundo de vacío, invirtieron la jerarquía: lo llenan todo, y obtienen el efecto de las salas llenas de muebles — ningún espacio donde el auditorio pueda posar el pensamiento. El silencio, en oratoria como en arquitectura, es la estancia que acoge." },
      ],
      predict: { q: "Antes de leer: ¿qué arte acompañaba al ars dicendi en las escuelas clásicas?", options: ["L'ars tacendi: el arte de callar", "L'ars memoriae solamente", "Ninguna"], answer: 0, why: "«La retorica del silenzio»: el arte complementario." },
      quiz: [
        { q: "Chi ammetteva l'eccezione del silenzio?", kind: "literal", options: ["Cicerone", "Dante", "Manzoni"], answer: 0, why: "Apertura del texto." },
        { q: "Quando si deve tacere, secondo le regole?", kind: "inferencial", options: ["Antes y después del punto decisivo, y cuando la palabra solo llena el miedo", "Nunca", "Solo al final"], answer: 0, why: "Las tres reglas del ars tacendi." },
        { q: "La comparación con la arquitectura: qué espacios ofrece tu comunicación?", kind: "critica", options: ["Debería dejar más vacíos funcionales: donde el otro pose su pensamiento", "Lleno todo: el vacío da miedo", "No comunico nada"], answer: 0, why: "El silencio es la stanza che accoglie." },
      ],
      vf: [
        { text: "Il silenzio retorico è vuoto privo di diseño.", value: false, why: "Falso: «un silenzio funzionale, progettato come le pause di una partitura»." },
        { text: "L'ars tacendi figurava nei programmi delle scuole di oratoria.", value: true, why: "Primer párrafo." },
        { text: "Il silenzio, in oratoria come in architettura, è la stanza che accoglie.", value: true, why: "Frase final." },
      ],
    },
    {
      id: "md-c2-04-2", theme: "relax mentale", title: "La persuasione che respira", titleEs: "La persuasión que respira", minutes: 5,
      paragraphs: [
        { it: "Un esperimento di psicologia sociale ha misurato l'efficacia di due discorsi identici, registrati da due voci: una con pause regolari ogni trenta secondi, l'altra senza pause. Il discorso «che respirava» è risultato più persuasivo del venti per cento — non per il contenuto, che era identico, ma per una ragione profonda: le pause davano all'ascoltatore il tempo di aderire.", es: "Un experimento de psicología social midió la eficacia de dos discursos idénticos, grabados por dos voces: una con pausas regulares cada treinta segundos, la otra sin pausas. El discurso «que respiraba» resultó más persuasivo en un veinte por ciento — no por el contenido, que era idéntico, sino por una razón profunda: las pausas daban al oyente el tiempo de adherir." },
        { it: "Il dato illumina un malinteso antico: crediamo che persuadere significhi riempire l'altro di argomenti, e invece — come ogni giardiniere sa — la persuasione è un'arte di irrigazione lenta. L'argomento è il seme; la pausa è l'acqua. Chi parla ininterrottamente semina un campo che non ha il tempo di bagnare, e poi si meraviglia che niente cresca. La retorica del respiro non è una tecnica di benessere applicata alla comunicazione: è la constatazione, sperimentale, che il consenso nasce nel silenzio dell'ascoltatore, non nella foga dell'oratore.", es: "El dato ilumina un malentendido antiguo: creemos que persuadir significa llenar al otro de argumentos, y sin embargo — como todo jardinero sabe — la persuasión es un arte de irrigación lenta. El argumento es la semilla; la pausa, el agua. Quien habla sin interrupción siembra un campo que no tiene tiempo de mojar, y luego se asombra de que nada crezca. La retórica del respiro no es una técnica de bienestar aplicada a la comunicación: es la constatación, experimental, de que el consenso nace en el silencio del oyente, no en la prisa del orador." },
      ],
      predict: { q: "Antes de leer: ¿cuánto más persuasivo era el discurso «che respirava»?", options: ["Un veinte por ciento", "Un doscientos por ciento", "Cero"], answer: 0, why: "«La persuasione che respira»: pausas y consenso." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["El consenso nace en el silencio del oyente: la pausa es el agua del argumento", "Hablar sin parar convence más", "La retórica no tiene base experimental"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Pausas regulares cada treinta segundos: +20% de persuasión", "La metáfora del jardín: argumento-semilla, pausa-agua"],
        distractors: ["El experimento demostró que el contenido era distinto", "El texto dice que la foga dell'oratore genera consenso"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Le pause davano all'ascoltatore il tempo di aderire.", "La persuasione è un'arte di irrigazione lenta.", "Il consenso nasce nel silenzio dell'ascoltatore.", "Per convincere: parlare il più veloce possibile, senza mai fermarsi."],
        intruder: 3, why: "El experimento demuestra exactamente lo contrario." },
    },
    {
      id: "md-c2-04-3", theme: "meditazione", title: "Il pathos dell'attesa", titleEs: "El pathos de la espera", minutes: 5,
      paragraphs: [
        { it: "Aristotele collocava il pathos — la commozione del pubblico — tra i pilastri della persuasione, ma la sua indicazione più preziosa è quasi sempre dimenticata: il pathos non si produce con le parole intense, si produce con l'attesa. Il pubblico si commuove quando l'oratore, davanti alla frase decisiva, si ferma.", es: "Aristóteles colocaba el pathos — la conmoción del público — entre los pilares de la persuasión, pero su indicación más valiosa casi siempre se olvida: el pathos no se produce con palabras intensas, se produce con la espera. El público se conmueve cuando el orador, ante la frase decisiva, se detiene." },
        { it: "Un regista teatrale lo spiegava agli attori con un'immagine: «La frase decisiva è un ospite importante. Non lo fai entrare con la casa in disordine: prima fai silenzio, poi apri la porta». L'attesa, nella retorica come in scena, è il cerimoniale che prepara l'incontro. Chi la salta — gettando la frase grande in mezzo al rumore — scopre che nemmeno la più bella delle frasi sopravvive alla mancanza di preparazione: il pathos, come un'ospite, bussa solo dove è stato aspettato.", es: "Un director teatral lo explicaba a los actores con una imagen: «La frase decisiva es un huésped importante. No lo haces entrar con la casa en desorden: primero haces silencio, luego abres la puerta». La espera, en la retórica como en escena, es el ceremonial que prepara el encuentro. Quien la salta — arrojando la frase grande en medio del ruido — descubre que ni la más bella de las frases sobrevive a la falta de preparación: el pathos, como un huésped, toca solo donde fue esperado." },
      ],
      predict: { q: "Antes de leer: ¿qué produce el pathos según la indicación olvidada?", options: ["La attesa: detenerse ante la frase decisiva", "Las palabras más intensas", "El volumen de la voz"], answer: 0, why: "«Il pathos dell'attesa»: el ceremonial del encuentro." },
      sequence: {
        instr: "Ordena la imagen del regista (1 = primero):",
        events: ["Arriva la frase decisiva", "Prima si fa silenzio in casa", "Poi si apre la porta", "Solo allora l'ospite importante entra", "Il pathos bussa solo dove è stato aspettato"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Il pathos non si produce con le parole intense: si produce con l'attesa. La frase decisiva è un ospite importante: prima fai silenzio, poi apri la porta. Chi salta l'attesa getta la frase grande in mezzo al rumore. Il pathos, come un ospite, bussa solo dove è stato aspettato.",
        questions: [
          { q: "Cosa produce il pathos?", kind: "literal", options: ["L'attesa", "Le parole intense", "Il volume"], answer: 0, why: "«Si produce con l'attesa»." },
          { q: "Com'è la frase decisiva?", kind: "literal", options: ["Un ospite importante", "Un nemico", "Un obbligo"], answer: 0, why: "«Un ospite importante»." },
          { q: "Dove bussa il pathos?", kind: "inferencial", options: ["Solo dove è stato aspettato", "In ogni casa", "Mai"], answer: 0, why: "«Bussa solo dove è stato aspettato»." },
        ],
      },
    },
  ],

  "cu-c2-05": [
    {
      id: "md-c2-05-1", theme: "meditazione", title: "Il traduttore che respira tra le lingue", titleEs: "El traductor que respira entre las lenguas", minutes: 5,
      paragraphs: [
        { it: "Un grande traduttore, verso la fine della carriera, rivelò il suo strumento più importante: non il dizionario, non la memoria — la pausa. «Tra una lingua e l'altra», diceva, «c'è un punto in cui non si appartiene a nessuna delle due. I giovani traduttori lo attraversano di corsa, con terrore. Io ho imparato ad abitarlo: è il luogo della traduzione vera».", es: "Un gran traductor, hacia el final de la carrera, reveló su instrumento más importante: no el diccionario, no la memoria — la pausa. «Entre una lengua y la otra», decía, «hay un punto en que no se pertenece a ninguna de las dos. Los jóvenes traductores lo cruzan corriendo, con terror. Yo aprendí a habitarlo: es el lugar de la traducción verdadera»." },
        { it: "Quello spazio interlinguistico — né italiano né spagnolo, un diaframma di sospensione — somiglia, nelle sue descrizioni, agli stati contemplativi descritti dai mistici: una zona dove i nomi si posano prima di essere riassegnati. La teoria della traduzione lo chiama «decentramento»; il traduttore lo chiamava, più semplicemente, «respirazione». Ogni lingua, sosteneva, ha un suo modo di espirare: tradurre non è trasportare parole, è riprodurre un respiro in un altro polmone.", es: "Ese espacio interlingüístico — ni italiano ni español, un diafragma de suspensión — se parece, en sus descripciones, a los estados contemplativos descritos por los místicos: una zona donde los nombres se posan antes de ser reasignados. La teoría de la traducción lo llama «decentramiento»; el traductor lo llamaba, más simplemente, «respiración». Cada lengua, sostenía, tiene su manera de espirar: traducir no es transportar palabras, es reproducir un respiro en otro pulmón." },
      ],
      predict: { q: "Antes de leer: ¿cuál es el instrumento más importante del traductor?", options: ["La pausa entre las lenguas", "El diccionario más grande", "La memoria"], answer: 0, why: "«Il traduttore che respira»: la zona interlingüística." },
      quiz: [
        { q: "Cosa c'è tra una lingua e l'altra?", kind: "literal", options: ["Un punto dove non si appartiene a nessuna delle due", "Un ponte solido", "Un dizionario"], answer: 0, why: "«C'è un punto in cui non si appartiene a nessuna delle due»." },
        { q: "Come la chiama la teoria della traduzione?", kind: "literal", options: ["Decentramento", "Traduzione automatica", "Interferenza"], answer: 0, why: "«La teoria della traduzione lo chiama decentramento»." },
        { q: "«Tradurre è riprodurre un respiro in un altro polmone»: qué implica para traducir textos espirituales?", kind: "critica", options: ["Hay que reproducir el ritmo respiratorio del texto, no solo el significado literal", "Basta con la exactitud léxica", "Es imposible traducir"], answer: 0, why: "La metáfora del polmón: ritmo y respiración como parte del sentido." },
      ],
      vf: [
        { text: "I giovani traduttori abitano con calma lo spazio tra le lingue.", value: false, why: "Falso: lo attraversan corriendo, con terror." },
        { text: "Lo spazio interlinguistico somiglia a stati contemplativi.", value: true, why: "Comparación explícita con los místicos." },
        { text: "Ogni lingua ha un suo modo di espirare.", value: true, why: "Tesis del traductor." },
      ],
    },
    {
      id: "md-c2-05-2", theme: "qui e ora", title: "Le parole intraducibili del presente", titleEs: "Las palabras intraducibles del presente", minutes: 5,
      paragraphs: [
        { it: "Ogni lingua possiede parole che rifiutano il passaporto: il portoghese saudade, il danese hygge, il giapponese wabi-sabi. Chi insegna lingue le usa come gioielli di famiglia, ma un linguista ha proposto una lettura più seria: le parole intraducibili sono cartine di tornasole culturali — rivelano ciò che una civiltà ha imparato a notare e le altre no.", es: "Cada lengua posee palabras que rechazan el pasaporte: el portugués saudade, el danés hygge, el japonés wabi-sabi. Quien enseña idiomas las usa como joyas de familia, pero un lingüista propuso una lectura más seria: las palabras intraducibles son papel de tornasol cultural — revelan lo que una civilización aprendió a notar y las otras no." },
        { it: "La sua collezione preferita riguarda il presente: il danese ha quindici parole per la luce del pomeriggio d'inverno; l'italiano, che pure vive di luce, non ne ha nemmeno una dedicata. La conclusione, meno nostalgica di quanto sembri, è un invito all'attenzione: prima di invidiare le parole altrui, verificare di aver guardato davvero ciò che ci circonda. La parola intraducibile più urgente, per ciascuno, è quella che descrive qualcosa che vede ogni giorno e non ha ancora nominato.", es: "Su colección preferida concierne al presente: el danés tiene quince palabras para la luz de la tarde de invierno; el italiano, que también vive de luz, no tiene ni una dedicada. La conclusión, menos nostálgica de lo que parece, es una invitación a la atención: antes de envidiar las palabras ajenas, verificar que uno miró de verdad lo que lo rodea. La palabra intraducible más urgente, para cada uno, es la que describe algo que ve todos los días y todavía no nombró." },
      ],
      predict: { q: "Antes de leer: ¿qué revelan las palabras intraducibles?", options: ["Lo que una civilización aprendió a notar", "La pobreza de otras lenguas", "Errores de traducción"], answer: 0, why: "«Cartine di tornasole»: las palabras como reactivo cultural." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["La palabra intraducible más urgente es la que describe lo que ves cada día sin haber nombrado", "Hay que importar todas las palabras danesas", "Las lenguas pobres deben desaparecer"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El danés tiene quince palabras para la luz del atardecer de invierno", "Las palabras intraducibles son cartinas de tornasole culturales"],
        distractors: ["El italiano tiene más palabras de luz que el danés", "El lingüista propone prohibir los préstamos"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Le parole intraducibili rivelano ciò che una civiltà nota.", "Il danese ha quindici parole per la luce d'inverno.", "Prima di invidiare le parole altrui, guarda davvero ciò che ti circonda.", "Le parole straniere vanno ignorate: la propria lingua basta sempre."],
        intruder: 3, why: "El texto celebra los préstamos como estímulos de atención, no los condena." },
    },
    {
      id: "md-c2-05-3", theme: "relax mentale", title: "La mediazione interculturale del respiro", titleEs: "La mediación intercultural del respiro", minutes: 5,
      paragraphs: [
        { it: "Un mediatore interculturale, dopo vent'anni di professione, ha descritto il suo metodo con una formula strana: «Traduco i respiri, poi le parole». Nei suoi appunti, ogni conflitto interculturale cominciava con un respiro: quello trattenuto dell'uno, quello accelerato dell'altro, il sospiro che chiude la discussione prima ancora che le frasi lo facciano.", es: "Un mediador intercultural, después de veinte años de profesión, describió su método con una fórmula extraña: «Traduzco los respiros, luego las palabras». En sus apuntes, cada conflicto intercultural comenzaba con un respiro: el contenido de uno, el acelerado del otro, el suspiro que cierra la discusión antes incluso que las frases lo hagan." },
        { it: "La sua tecnica di apertura: far notare ai due il proprio respiro, senza interpretarlo. «Quando il corpo rallenta, la lingua straniera diventa meno straniera», osservava. Non è misticismo da seminario: è la constatazione che l'ansia culturale si annida prima nel diaframma che nelle idee. Due persone che respirano insieme — anche solo per tre respiri, prima di parlare — scoprono di avere già qualcosa in comune: il fatto stesso di respirare. Su quello, poi, si può costruire il resto.", es: "Su técnica de apertura: hacer notar a ambos su propio respiro, sin interpretarlo. «Cuando el cuerpo se frena, la lengua extranjera se vuelve menos extranjera», observaba. No es misticismo de seminario: es la constatación de que la ansiedad cultural se esconde antes en el diafragma que en las ideas. Dos personas que respiran juntas — aunque sea solo tres respiraciones, antes de hablar — descubren que ya tienen algo en común: el hecho mismo de respirar. Sobre eso, luego, se puede construir el resto." },
      ],
      predict: { q: "Antes de leer: ¿qué traduce primero el mediatore interculturale?", options: ["Los respiros, luego las palabras", "Solo los documentos", "Los gestos"], answer: 0, why: "«Del respiro»: el cuerpo antes que la lengua." },
      sequence: {
        instr: "Ordena la técnica de apertura (1 = primero):",
        events: ["Arriva un conflitto interculturale", "Il mediatore fa notare ai due il proprio respiro", "Tre respiri insieme, prima di parlare", "I corpi rallentano", "La lingua straniera diventa meno straniera"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Traduco i respiri, poi le parole. L'ansia culturale si annida prima nel diaframma che nelle idee. Quando il corpo rallenta, la lingua straniera diventa meno straniera. Due persone che respirano insieme hanno già qualcosa in comune: il fatto stesso di respirare. Su quello si può costruire il resto.",
        questions: [
          { q: "Dove si annida prima l'ansia culturale?", kind: "literal", options: ["Nel diaframma", "Nelle idee", "Nel vocabolario"], answer: 0, why: "«Prima nel diaframma che nelle idee»." },
          { q: "Quanti respiri insieme, prima di parlare?", kind: "literal", options: ["Tre", "Trecento", "Mezzo"], answer: 0, why: "«Anche solo tre respiri»." },
          { q: "Cosa hanno già in comune due persone che respirano insieme?", kind: "inferencial", options: ["Il fatto mismo de respirar", "La stessa lingua", "La stessa religione"], answer: 0, why: "«Il fatto stesso di respirare»." },
        ],
      },
    },
  ],

  "cu-c2-06": [
    {
      id: "md-c2-06-1", theme: "relax mentale", title: "L'italiano delle macchine", titleEs: "El italiano de las máquinas", minutes: 5,
      paragraphs: [
        { it: "Quando le macchine hanno imparato a scrivere, i puristi hanno previsto la morte dello stile. È successo l'opposto: lo stile — la voce umana irriducibile — è diventato l'unico bene scarso. Un vecchio editor lo riassumeva così: «Le macchine producono testi corretti e morti. Il lettore del futuro pagherà per una cosa sola: un testo che respiri».", es: "Cuando las máquinas aprendieron a escribir, los puristas previeron la muerte del estilo. Sucedió lo opuesto: el estilo — la voz humana irreductible — se volvió el único bien escaso. Un viejo editor lo resumía así: «Las máquinas producen textos correctos y muertos. El lector del futuro pagará por una sola cosa: un texto que respire»." },
        { it: "Il «testo che respira», nella sua definizione, ha sintomi precisi: frasi di lunghezza diversa (le macchine uniformano), una pausa dove l'autore ha esitato davvero (le macchine non esitano), un'idea per pagina invece di cinque (le macchine non sanno rallentare). La scrittura del futuro, paradossalmente, assomiglierà alla scrittura medievale: più lenta, più manuale, più unica. La tecnica non ha ucciso la voce: l'ha liberata dal dovere di essere veloce.", es: "El «texto que respira», en su definición, tiene síntomas precisos: frases de longitud diversa (las máquinas uniforman), una pausa donde el autor realmente dudó (las máquinas no dudan), una idea por página en vez de cinco (las máquinas no saben frenar). La escritura del futuro, paradójicamente, se parecerá a la escritura medieval: más lenta, más manual, más única. La técnica no mató la voz: la liberó del deber de ser veloz." },
      ],
      predict: { q: "Antes de leer: ¿qué pasará con el estilo en la era de las máquinas?", options: ["Será el único bien escaso: el texto que respira", "Desaparecerá del todo", "Las máquinas lo harán mejor"], answer: 0, why: "«L'italiano delle macchine»: voz humana como bien escaso." },
      quiz: [
        { q: "Che testi producono le macchine, secondo l'editor?", kind: "literal", options: ["Corretti e morti", "Vivi e unici", "Perfectos"], answer: 0, why: "«Testi corretti e morti»." },
        { q: "Cosa NON sanno fare le macchine, secondo il testo?", kind: "literal", options: ["Rallentare", "Correggere", "Tradurre"], answer: 0, why: "«Le macchine non sanno rallentare»." },
        { q: "La escritura del futuro se parecerá a la medieval: te convence? Qué harías tú para que tu escritura «respire»?", kind: "critica", options: ["Frases variadas, pausas reales, una idea por página: lentitud deliberada", "Escribir más rápido que las máquinas", "Dejar de escribir"], answer: 0, why: "Los tres síntomas del texto vivo son practice deliberada." },
      ],
      vf: [
        { text: "Le macchine producono frasi di lunghezza diversa.", value: false, why: "Falso: uniforman." },
        { text: "La tecnica ha liberado la voz del deber de ser veloz.", value: true, why: "Frase final." },
        { text: "Il lettore del futuro pagherà per un testo che respiri.", value: true, why: "Predicción del editor." },
      ],
    },
    {
      id: "md-c2-06-2", theme: "qui e ora", title: "La lentezza dell'ultima lingua", titleEs: "La lentitud de la última lengua", minutes: 5,
      paragraphs: [
        { it: "I demografi del linguaggio prevedono che nel 2100 resteranno seicento lingue dalle settemila di oggi. Un poeta, interpellato sul lutto, ha risposto da poeta: «Le lingue non muoiono: rallentano. Diventano così lente che solo i poeti le sentono ancora».", es: "Los demógrafos del lenguaje prevén que en 2100 quedarán seiscientas lenguas de las siete mil de hoy. Un poeta, consultado sobre el duelo, respondió como poeta: «Las lenguas no mueren: se vuelven lentas. Se hacen tan lentas que solo los poetas las escuchan todavía»." },
        { it: "La formula, impubblicabile in una rivista scientifica, contiene però un'intuizione reale: una lingua che perde i parlanti quotidiani guadagna, spesso, parlanti estremi — poeti, liturgisti, nonni che la insegnano sussurrando. L'ultimo parlante di una lingua, osservano i linguisti, parla sempre più lentamente dei parlanti di una lingua viva: la sua è una lentezza cerimoniale, ogni frase un congedo. Forse tutte le lingue, prima o poi, attraversano questa fase: e forse è per questo che i poeti — i parlanti lenti di ogni civiltà — sono sempre stati i primi a notare ciò che gli altri non vedevano ancora.", es: "La fórmula, impublicable en una revista científica, contiene sin embargo una intuición real: una lengua que pierde los hablantes cotidianos gana, a menudo, hablantes extremos — poetas, liturgistas, abuelos que la enseñan susurrando. El último hablante de una lengua, observan los lingüistas, habla siempre más lento que los hablantes de una lengua viva: la suya es una lentitud ceremonial, cada frase una despedida. Quizá todas las lenguas, tarde o temprano, atraviesan esta fase: y quizá por eso los poetas — los hablantes lentos de toda civilización — siempre fueron los primeros en notar lo que los demás aún no veían." },
      ],
      predict: { q: "Antes de leer: ¿qué respondió el poeta sobre la muerte de las lenguas?", options: ["No mueren: se vuelven lentas, solo los poetas las escuchan", "Es una bendición", "No importa"], answer: 0, why: "«La lentezza dell'ultima lingua»: la lentez ceremonial." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Las lenguas que se apagan ganan hablantes extremos: la lentitud ceremonial es una forma de presencia", "Las lenguas mueren de golpe", "Los poetas son irrelevantes"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El último hablante habla más lento: cada frase es una despedida", "Los poetas son los hablantes lentos de toda civilización"],
        distractors: ["Los abuelos dejan de enseñar las lenguas susurrando", "El texto dice que quedan siete mil lenguas en 2100"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Le lingue non muoiono: rallentano.", "L'ultimo parlante parla con lentezza cerimoniale.", "Ogni frase è un congedo.", "I poeti devono parlare il più veloce possibile per farsi capire."],
        intruder: 3, why: "Todo el texto celebra la lentitud: el poeta rápido contradice la figura del hablante lento." },
    },
    {
      id: "md-c2-06-3", theme: "spiritualità", title: "La preghiera come ultima lingua", titleEs: "La oración como última lengua", minutes: 5,
      paragraphs: [
        { it: "Le lingue liturgiche — il latino cattolico, il copto, il sanscrito — sono sopravvissute per secoli alla morte della loro lingua madre. Un filosofo del linguaggio ha proposto un'ipotesi audace: la preghiera è l'ultima lingua in cui una comunità parla — l'idioma che si abbandona per ultimo, quando già si parla altro al mercato e in casa.", es: "Las lenguas litúrgicas — el latín católico, el copto, el sánscrito — sobrevivieron durante siglos a la muerte de su lengua madre. Un filósofo del lenguaje propuso una hipótesis audaz: la oración es la última lengua en que una comunidad habla — el idioma que se abandona en último lugar, cuando ya se habla otra cosa en el mercado y en casa." },
        { it: "L'ipotesi spiegherebbe perché le comunità emigrate difendano la lingua della messa con più accanimento della lingua della cucina: la cucina cambia con gli ingredienti nuovi, la preghiera no. «Si può cucinare in un'altra lingua», sintetizza il filosofo, «ma è difficile morire in un'altra lingua». Le ultime parole, i giuramenti, le ninne nanne: il perimetro più resistente di ogni idioma non è il pratico — è il sacro. Le lingue, alla fine, non muoiono quando nessuno le usa per vivere: muoiono quando nessuno le usa per sperare.", es: "La hipótesis explicaría por qué las comunidades emigradas defienden la lengua de la misa con más ahínco que la lengua de la cocina: la cocina cambia con los ingredientes nuevos, la oración no. «Se puede cocinar en otra lengua», sintetiza el filósofo, «pero es difícil morir en otra lengua». Las últimas palabras, los juramentos, las nanas: el perímetro más resistente de cada idioma no es lo práctico — es lo sagrado. Las lenguas, al final, no mueren cuando nadie las usa para vivir: mueren cuando nadie las usa para esperar." },
      ],
      predict: { q: "Antes de leer: ¿cuál es la «última lengua» que se abandona?", options: ["La lengua de la oración", "La lengua del mercado", "La lengua del trabajo"], answer: 0, why: "«L'ultima lingua»: lo sagrado como perímetro resistente." },
      sequence: {
        instr: "Ordena el argumento (1 = primero):",
        events: ["Una comunidad emigra e cambia lingua", "La cucina adotta gli ingredienti nuovi", "La messa resta nella lingua antica", "Il perimetro sacro resiste più di quello pratico", "Le lingue muoiono quando nessuno le usa per sperare"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "La preghiera è l'ultima lingua che una comunità abbandona. Si può cucinare in un'altra lingua, ma è difficile morire in un'altra lingua. Le ultime parole, i giuramenti, le ninne nanne: il perimetro più resistente di ogni idioma non è il pratico, è il sacro. Le lingue muoiono quando nessuno le usa per sperare.",
        questions: [
          { q: "Cosa è difficile fare in un'altra lingua?", kind: "literal", options: ["Morire", "Cucinare", "Comprare"], answer: 0, why: "«È difficile morire in un'altra lingua»." },
          { q: "Quale perimetro è più resistente?", kind: "literal", options: ["Quello sacro", "Quello pratico", "Quello commerciale"], answer: 0, why: "«Non è il pratico, è il sacro»." },
          { q: "Quando muoiono le lingue?", kind: "inferencial", options: ["Cuando nadie las usa para esperar", "Cuando nadie cocina", "Cuando llega la TV"], answer: 0, why: "«Muoino quando nessuno le usa per sperare»." },
        ],
      },
    },
  ],

  "cu-c2-07": [
    {
      id: "md-c2-07-1", theme: "meditazione", title: "Il personaggio che respira", titleEs: "El personaje que respira", minutes: 5,
      paragraphs: [
        { it: "Manzoni, nel rileggere i suoi personaggi, cancellava più di quanto aggiungesse. Un suo commento marginale, diventato celebre tra gli studiosi, riguarda Renzo: «Qui respira troppo poco». Non era una nota stilistica: era una diagnosi esistenziale. Un personaggio che non respira — che non ha pause, silenzi, esitazioni — non è vivo, per quanto perfetta sia la sua psicologia.", es: "Manzoni, al releer a sus personajes, borraba más de lo que agregaba. Un comentario suyo al margen, célebre entre los estudiosos, concierne a Renzo: «Aquí respira demasiado poco». No era una nota estilística: era un diagnóstico existencial. Un personaje que no respira — que no tiene pausas, silencios, dudas — no está vivo, por perfecta que sea su psicología." },
        { it: "I maestri di scrittura contemporanei hanno trasformato l'intuizione in tecnica: prima di scrivere una scena, trenta secondi di respirazione del personaggio — dove si ferma, cosa non dice, quando distoglie lo sguardo. Un romanziera lo chiamava «il silenzio di scena»: il momento in cui, nella pagina, non succede nulla ed accade tutto. I lettori lo ricordano più di ogni colpo di scena, senza saperlo nominare. Forse perché, in quel silenzio, riconoscono l'unico momento in cui anche loro, nella lettura, hanno smesso di fare e hanno cominciato a essere.", es: "Los maestros de escritura contemporáneos transformaron la intuición en técnica: antes de escribir una escena, treinta segundos de respiración del personaje — dónde se detiene, qué no dice, cuándo desvía la mirada. Una novelista lo llamaba «el silencio de escena»: el momento en que, en la página, no sucede nada y ocurre todo. Los lectores lo recuerdan más que cualquier giro argumental, sin saber nombrarlo. Quizá porque, en ese silencio, reconocen el único momento en que también ellos, leyendo, dejaron de hacer y empezaron a ser." },
      ],
      predict: { q: "Antes de leer: ¿qué notó Manzoni sobre Renzo?", options: ["«Respira troppo poco»: diagnóstico existencial", "Que hablaba demasiado", "Que faltaba al trabaja"], answer: 0, why: "«Il personaggio che respira»: la respiración del personaje." },
      quiz: [
        { q: "Cosa cancellava Manzoni nei rileggi?", kind: "literal", options: ["Più di quanto aggiungesse", "Solo errori di stampa", "Interi capitoli"], answer: 0, why: "Apertura del texto." },
        { q: "Cos'è «il silenzio di scena»?", kind: "inferencial", options: ["El momento en que no sucede nada y ocurre todo", "Un error de montaje", "Una pausa técnica"], answer: 0, why: "Definición de la novelista." },
        { q: "El lector «deja de hacer y empieza a ser»: lo has sentido leyendo? En qué libro?", kind: "critica", options: ["Sì: los silencios del personaje me devuelven a mi propio silencio", "No: leo solo por la trama", "No sé"], answer: 0, why: "El silencio de escena involucra al lector existencialmente." },
      ],
      vf: [
        { text: "La nota di Manzoni era puramente stilistica.", value: false, why: "Falso: «era una diagnosi esistenziale»." },
        { text: "Un personaggio senza pause non è vivo, per quanto perfetta sia la sua psicologia.", value: true, why: "Tesis del texto." },
        { text: "I lettori ricordano il silenzio di scena più dei colpi di scena.", value: true, why: "«Lo ricordano più di ogni colpo di scena»." },
      ],
    },
    {
      id: "md-c2-07-2", theme: "qui e ora", title: "Il primo nome della scrittura", titleEs: "El primer nombre de la escritura", minutes: 5,
      paragraphs: [
        { it: "C'è un momento, in ogni testo che conta, in cui lo scrittore smette di scrivere e comincia a trascrivere. Un romanzo lo descrisse così: «Prima comando io: trame, piani, schede. Poi, se sono fortunato, il testo comincia a dettare — e io resto lì, un impiegato con una buona penna, che ascolta».", es: "Hay un momento, en cada texto que importa, en que el escritor deja de escribir y empieza a transcribir. Un novelista lo describió así: «Primero mando yo: tramas, planes, fichas. Luego, si tengo suerte, el texto empieza a dictar — y yo me quedo ahí, un empleado con una buena pluma, que escucha»." },
        { it: "Gli psicologi della creatività, con vocabolario più sobrio, chiamano questo stato «flusso»: la percezione del tempo si deforma, il sé si assottiglia, la fatica diventa curiosità. I mistici, con vocabolario meno sobrio, lo chiamavano grazia. La scrittura, in quel punto, smette di essere produzione e diventa ascolto — e forse è per questo che i grandi testi, riletti a distanza di anni, sembrano sempre sapere più dei loro autori: non è un mistero. È che, per qualche ora, l'autore ha smesso di parlare e ha lasciato dire.", es: "Los psicólogos de la creatividad, con vocabulario más sobrio, llaman a ese estado «flujo»: la percepción del tiempo se deforma, el yo se adelgaza, el esfuerzo se vuelve curiosidad. Los místicos, con vocabulario menos sobrio, lo llamaban gracia. La escritura, en ese punto, deja de ser producción y se vuelve escucha — y quizá por eso los grandes textos, releídos años después, siempre parecen saber más que sus autores: no es un misterio. Es que, durante algunas horas, el autor dejó de hablar y dejó decir." },
      ],
      predict: { q: "Antes de leer: ¿qué pasa cuando «il testo comincia a dettare»?", options: ["El escritor pasa de mandar a escuchar: trascrive", "El escritor trabaja más rápido", "El texto se vuelve ilegible"], answer: 0, why: "«Il primo nome»: del comando a la escucha." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["La escritura madura pasa de producción a escucha: los grandes textos saben más que sus autores", "Escribir es solo planificación", "El flujo es un mito"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El novelista se describe como «un impiegato con una buona penna, che ascolta»", "Los místicos llamaban gracia a lo que la psicología llama flujo"],
        distractors: ["El texto dice que los autores deben dictar a secretarios", "El flujo deforma la gramática"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Prima comando io: trame, piani, schede.", "Poi il testo comincia a dettare.", "L'autore, per qualche ora, ha lasciato dire.", "Un grande testo è sempre il risultato di una volontà che non si ferma mai ad ascoltare."],
        intruder: 3, why: "Toda la tesis es la escucha: la voluntad que nunca escucha produce textos menores." },
    },
    {
      id: "md-c2-07-3", theme: "relax fisico", title: "La mano che scrive a mano", titleEs: "La mano que escribe a mano", minutes: 5,
      paragraphs: [
        { it: "Gli studi sulla scrittura a mano, accumulatisi in un decennio, dicono una cosa imbarazzante per la modernità: chi prende appunti a mano impara di più di chi digita, pur scrivendo meno. La lentezza della mano, si è scoperto, non è un limite: è un filtro.", es: "Los estudios sobre la escritura a mano, acumulados durante una década, dicen algo vergonzante para la modernidad: quien toma apuntes a mano aprende más que quien teclea, aun escribiendo menos. La lentitud de la mano, se descubrió, no es un límite: es un filtro." },
        { it: "La mano, non potendo seguire tutto, è costretta a scegliere — e la scelta è già comprensione. La tastiera, che può seguire tutto, registra senza comprendere. Un neuropsicologo lo riassume con un'immagine: «La mano è il cane da guardia della memoria: abbaia solo davanti a ciò che merita entrare». Per questo, nella terapia della memoria e nell'insegnamento della scrittura, la matita sta tornando: non per nostalgia, ma per fisiologia. La calligrafia — che le scuole avevano abolito in nome della velocità — si riscopre, a sorpresa, tecnologia contemplativa.", es: "La mano, no pudiendo seguirlo todo, está obligada a elegir — y la elección ya es comprensión. El teclado, que puede seguirlo todo, registra sin comprender. Un neuropsicólogo lo resume con una imagen: «La mano es el perro guardián de la memoria: ladra solo ante lo que merece entrar». Por eso, en la terapia de la memoria y en la enseñanza de la escritura, el lápiz está volviendo: no por nostalgia, sino por fisiología. La caligrafía — que las escuelas abolieron en nombre de la velocidad — se redescubre, sorprendentemente, tecnología contemplativa." },
      ],
      predict: { q: "Antes de leer: ¿por qué aprendería más quien escribe a mano?", options: ["La lentitud de la mano es un filtro: elegir ya es comprender", "Porque escribe más palabras", "Porque la laptop distrae"], answer: 0, why: "«La mano che scrive a mano»: fisiología del lápiz." },
      sequence: {
        instr: "Ordena el argumento (1 = primero):",
        events: ["La mano non può seguire tutto", "È costretta a scegliere", "La scelta è già comprensione", "La tastiera registra tutto senza comprendere", "La calligrafia si riscopre tecnologia contemplativa"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Chi prende appunti a mano impara di più di chi digita, pur scrivendo meno. La mano non può seguire tutto, ed è costretta a scegliere: la scelta è già comprensione. La tastiera registra senza comprendere. La mano è il cane da guardia della memoria: abbaia solo davanti a ciò che merita entrare.",
        questions: [
          { q: "Chi impara di più?", kind: "literal", options: ["Chi scrive a mano", "Chi digita veloce", "Chi registra tutto"], answer: 0, why: "«Chi prende appunti a mano impara di più»." },
          { q: "Com'è la mano, nell'immagine?", kind: "literal", options: ["Il cane da guardia della memoria", "Un motore veloce", "Un archivio"], answer: 0, why: "«Il cane da guardia della memoria»." },
          { q: "Perché la scelta è già comprensione?", kind: "inferencial", options: ["Elegir qué anotar obliga a procesar el sentido", "Porque la mano es lenta físicamente", "Porque el lápiz es mágico"], answer: 0, why: "El filtro activo exige comprensión previa." },
        ],
      },
    },
  ],

  "cu-c2-08": [
    {
      id: "md-c2-08-1", theme: "spiritualità", title: "La tesina come esame dell'anima", titleEs: "La tesina como examen del alma", minutes: 5,
      paragraphs: [
        { it: "Un professore, dopo trent'anni di tesi di laurea, ha classificato i suoi studenti in due specie: quelli che cercano un argomento e quelli che vengono cercati da un argomento. I primi producono tesine corrette e dimenticabili; i secondi, a volte, producono tesine imperfette che però — come diceva lui — «hanno il polso»: si sente che dietro c'è una domanda vera, non una scadenza.", es: "Un profesor, después de treinta años de tesis, clasificó a sus estudiantes en dos especies: los que buscan un tema y los que son buscados por un tema. Los primeros producen tesinas correctas y olvidables; los segundos, a veces, producen tesinas imperfectas que sin embargo — como decía él — «tienen pulso»: se siente que detrás hay una pregunta verdadera, no una fecha límite." },
        { it: "Il suo consiglio finale, pronunciato all'ultimo ricevimento prima della pensione, merita di essere tramandato: «La tesina non è un esame di cultura: è un esame di onestà. Non mi interessa cosa sai — lo so già dalla media. Mi interessa se sei capace di seguire una domanda tua fino in fondo, anche quando diventa scomoda. Gli studenti che ci riescono non finiscono necessariamente bene all'esame. Finiscono bene dappertutto».", es: "Su consejo final, pronunciado en la última tutoría antes de la jubilación, merece ser transmitido: «La tesina no es un examen de cultura: es un examen de honestidad. No me interesa qué sabes — ya lo sé por tu promedio. Me interesa si eres capaz de seguir una pregunta tuya hasta el fondo, incluso cuando se vuelve incómoda. Los estudiantes que lo logran no necesariamente terminan bien el examen. Terminan bien en todas partes»." },
      ],
      predict: { q: "Antes de leer: ¿qué dos especies de estudiantes distinguirá el profesor?", options: ["Los que buscan un tema y los que son buscados por un tema", "Los que estudian y los que copian", "Los teóricos y los prácticos"], answer: 0, why: "«La tesina come esame»: la pregunta verdadera." },
      quiz: [
        { q: "Cosa hanno le tesine imperfette dei secondi?", kind: "literal", options: ["Il polso: una domanda vera", "Più note a piè di pagina", "Una bella copertina"], answer: 0, why: "«Hanno il polso»." },
        { q: "Cosa è la tesina per il professore?", kind: "literal", options: ["Un esame di onestà", "Un esame di cultura", "Un esame di memoria"], answer: 0, why: "«Non è un esame di cultura: è un esame di onestà»." },
        { q: "«Finiscono bene dappertutto»: qué diferencia hay entre terminar bien el examen y terminar bien en todo?", kind: "critica", options: ["Seguir la propia pregunta hasta el fondo es una destreza de vida, no solo académica", "El examen es lo único que importa", "No hay diferencia"], answer: 0, why: "La honestidad intelectual se traslada a todos los dominios." },
      ],
      vf: [
        { text: "I primi producono tesine indimenticabili.", value: false, why: "Falso: correctas y olvidables." },
        { text: "Al professore interessa si sei capace di seguire una domanda tua fino in fondo.", value: true, why: "Frase central del consejo." },
        { text: "Gli studenti che ci riescono finiscono sempre bene all'esame.", value: false, why: "Falso: «non necessariamente»." },
      ],
    },
    {
      id: "md-c2-08-2", theme: "relax mentale", title: "L'ultima pagina", titleEs: "La última página", minutes: 5,
      paragraphs: [
        { it: "Chi ha scritto una tesi conosce il fenomeno: le ultime dieci pagine richiedono lo stesso tempo delle prime cento. Un relatore paziente lo spiegava così: «Le prime cento pagine le scrive la tua energia. Le ultime dieci le scrive la tua anima — o non le scrive nessuno».", es: "Quien escribió una tesis conoce el fenómeno: las últimas diez páginas requieren el mismo tiempo que las primeras cien. Un tutor paciente lo explicaba así: «Las primeras cien páginas las escribe tu energía. Las últimas diez las escribe tu alma — o no las escribe nadie»." },
        { it: "Il momento finale di ogni opera lunga — la tesi, il romanzo, il restaurar una casa — ha una qualità spirituale che le fasi centrali non conoscono: è il punto in cui il progetto ha consumato tutto l'entusiasmo e deve essere finito da qualcos'altro. I manuali di produttività, con i loro «ultimi cinque minuti di sprint», non capiscono questo passaggio: l'ultima pagina non si sprinta. Si contempla. È l'unico momento in cui l'opera, ormai quasi compiuta, si volta indietro e guarda chi l'ha fatta — e la guardia finale non può essere affidata alla stanchezza, ma solo alla gratitudine.", es: "El momento final de cada obra larga — la tesis, la novela, el restaurar una casa — tiene una cualidad espiritual que las fases centrales no conocen: es el punto en que el proyecto consumió todo el entusiasmo y debe ser terminado por otra cosa. Los manuales de productividad, con sus «últimos cinco minutos de sprint», no entienden este pasaje: la última página no se esprinta. Se contempla. Es el único momento en que la obra, ya casi terminada, se vuelve atrás y mira a quien la hizo — y la guardia final no puede confiarse al cansancio, sino solo a la gratitud." },
      ],
      predict: { q: "Antes de leer: ¿qué escribe las últimas diez páginas?", options: ["El alma, no la energía", "La costumbre", "El deadline"], answer: 0, why: "«L'ultima pagina»: la gratitud como guardia final." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["La última página de una obra larga no se esprinta: se contempla, confiada a la gratitud", "Hay que acabar todo de un tirón", "Las últimas páginas son las más fáciles"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Las primeras cien páginas las escribe la energía", "La obra casi terminada se vuelve atrás y mira a quien la hizo"],
        distractors: ["El relatore recomienda abandonar las últimas páginas", "Los manuales de productividad entienden bien este momento"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Le ultime dieci pagine le scrive l'anima.", "L'ultima pagina non si sprinta: si contempla.", "La guardia finale è affidata alla gratitudine.", "Per finire la tesi: tre notti in bianco e caffè fino alla paralisi."],
        intruder: 3, why: "El texto distingue justo la guardia final del mero esfuerzo extenuado." },
    },
    {
      id: "md-c2-08-3", theme: "meditazione", title: "Il colloquio finale", titleEs: "El coloquio final", minutes: 5,
      paragraphs: [
        { it: "Un candidato, al colloquio finale della tesi, ricevette dal professore più severo una domanda inattesa: non sulla bibliografia, non sul metodo. «Mi dica una cosa sola», disse il vecchio docente, «che cosa ha imparato di sé in questi mesi, che non sapeva prima». Il candidato restò in silenzio — e il professore: «Con calma. È l'unica domanda dell'esame, tutto il resto è formalità».", es: "Un candidato, en el coloquio final de la tesis, recibió del profesor más severo una pregunta inesperada: no sobre la bibliografía, no sobre el método. «Dígame una sola cosa», dijo el viejo docente, «qué aprendió de usted mismo en estos meses, que no sabía antes». El candidato quedó en silencio — y el profesor: «Con calma. Es la única pregunta del examen, todo el resto es formalidad»." },
        { it: "Il candidato, anni dopo, raccontava che in quel silenzio aveva capito lo scopo vero di ogni opera lunga: non produrre un oggetto, ma produrre un autore. «La tesi», diceva, «era il pretesto. Il risultato ero io — una versione di me che la fatica aveva tirato fuori e che altrimenti non avrei mai incontrato». Il professore, quel giorno, diede il massimo dei voti con una motivazione di una riga: «Ha risposto bene — nel silenzio, prima ancora che a voce».", es: "El candidato, años después, contaba que en ese silencio había entendido el propósito verdadero de toda obra larga: no producir un objeto, sino producir un autor. «La tesis», decía, «era el pretexto. El resultado era yo — una versión de mí que el esfuerzo había sacado a la luz y que de otro modo jamás habría encontrado». El profesor, ese día, dio la máxima nota con una motivación de una línea: «Respondió bien — en el silencio, antes incluso que en voz alta»." },
      ],
      predict: { q: "Antes de leer: ¿qué pregunta hará el profesor severo?", options: ["Qué aprendió de sí mismo que no sabía", "El año de publicación de una fuente", "La página 47"], answer: 0, why: "«Il colloquio finale»: el examen verdadero." },
      sequence: {
        instr: "Ordena el episodio (1 = primero):",
        events: ["Il professore severo fa la domanda inattesa", "Chiede: che cosa ha imparato di sé?", "Il candidato resta in silenzio", "Nel silenzio capisce: la tesi produce un autore", "Il massimo dei voti: ha risposto nel silenzio"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Mi dica una cosa sola: che cosa ha imparato di lei in questi mesi, che non sapeva prima? Con calma: è l'unica domanda dell'esame, tutto il resto è formalità. Lo scopo vero di ogni opera lunga non è produrre un oggetto: è produrre un autore. La tesi era il pretesto. Il risultato eri tu.",
        questions: [
          { q: "Qual è l'unica domanda dell'esame?", kind: "literal", options: ["Che cosa ha imparato di sé", "La data della bibliografia", "Il nome del relatore"], answer: 0, why: "«È l'unica domanda dell'esame»." },
          { q: "Cosa produce un'opera lunga?", kind: "literal", options: ["Un autore, non un oggetto", "Solo un oggetto", "Niente"], answer: 0, why: "«Non produrre un oggetto: produrre un autore»." },
          { q: "Dove ha risposto bene il candidato?", kind: "inferencial", options: ["En el silencio, antes que en voz alta", "En las últimas páginas", "En la bibliografía"], answer: 0, why: "«Nel silenzio, prima ancora che a voce»." },
        ],
      },
    },
  ],
};
