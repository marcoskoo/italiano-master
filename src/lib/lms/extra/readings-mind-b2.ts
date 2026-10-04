import type { MindReading } from "../cambridge-mind";

/* ═══ v9.13 · Letture tematiche B2 · Meditazione, spiritualità, qui e ora,
   relax fisico e mentale — 3 por unidad comunicativa.                     */

export const MIND_B2: Record<string, MindReading[]> = {
  "cu-b2-01": [
    {
      id: "md-b2-01-1", theme: "relax mentale", title: "L'arte del disaccordo tranquillo", titleEs: "El arte del desacuerdo tranquilo", minutes: 4,
      paragraphs: [
        { it: "Nelle discussioni accese, la maggior parte delle persone non ascolta: ricarica. Mentre l'altro parla, prepara la propria replica come un cecchino prepara il colpo. Il risultato è noto: due monologhi che si sfiorano senza mai incontrarsi.", es: "En las discusiones encendidas, la mayoría de las personas no escucha: recarga. Mientras el otro habla, prepara su réplica como un francotirador prepara el disparo. El resultado es conocido: dos monólogos que se rozan sin encontrarse jamás." },
        { it: "Esiste un'alternativa che i grandi negoziatori conoscono: il disaccordo tranquillo. Prima di rispondere, riassumi la posizione dell'altro in una frase — «Se ho capito bene, tu pensi che…». Due effetti: l'altro si sente ascoltato e si calma; tu guadagni dieci secondi per respirare e pensare. Non è una tecnica per vincere: è una tecnica per capire. E chi capisce, alla fine, discute meno — perché molte liti nascono solo dal bisogno di essere sentiti.", es: "Existe una alternativa que los grandes negociadores conocen: el desacuerdo tranquilo. Antes de responder, resume la posición del otro en una frase — «Si entendí bien, tú piensas que…». Dos efectos: el otro se siente escuchado y se calma; tú ganas diez segundos para respirar y pensar. No es una técnica para ganar: es una técnica para entender. Y quien entiende, al final, discute menos — porque muchas peleas nacen solo de la necesidad de ser escuchados." },
      ],
      predict: { q: "Antes de leer: ¿qué hacen la mayoría mientras el otro habla?", options: ["Recargan su réplica sin escuchar", "Escuchan con atención total", "Se van a dormir"], answer: 0, why: "«L'arte del disaccordo»: la paradoja del diálogo sordo." },
      quiz: [
        { q: "Cosa fa la maggior parte delle persone mentre l'altro parla?", kind: "literal", options: ["Prepara la propria replica", "Prende appunti parola per parola", "Respira profondamente"], answer: 0, why: "«Ricarica… prepara la propria replica»." },
        { q: "Qual è il primo passo del disaccordo tranquillo?", kind: "literal", options: ["Riassumere la posizione dell'altro in una frase", "Alzare la voce per farsi sentire", "Cambiare argomento"], answer: 0, why: "«Se ho capito bene, tu pensi che…»." },
        { q: "Perché chi capisce discute meno?", kind: "inferencial", options: ["Porque muchas peleas nacen solo de la necesidad de ser escuchados", "Porque pierde el interés en todo", "Porque tiene miedo"], answer: 0, why: "La última frase del texto lo explica." },
        { q: "«Non è una técnica per vincere: è una tecnica per capire». Qué pasaría si se enseñara en las escuelas?", kind: "critica", options: ["Cambiaría la cultura del debate: escuchar antes de refutar", "Nada: la técnica es solo para diplomáticos", "Generaría más discusiones"], answer: 0, why: "La escucha activa como base civilizatoria del disagreement." },
      ],
      vf: [
        { text: "Il disaccordo tranquillo serve a vincere le discussioni.", value: false, why: "Falso: «non è una tecnica per vincere: è una tecnica per capire»." },
        { text: "Riassumere l'altro gli fa sentire di essere ascoltato.", value: true, why: "Primer efecto descrito en el texto." },
        { text: "Il riassunto dà anche dieci secondi per respirare e pensare.", value: true, why: "Segundo efecto descrito." },
      ],
    },
    {
      id: "md-b2-01-2", theme: "meditazione", title: "Il monaco e il troll", titleEs: "El monje y el troll", minutes: 4,
      paragraphs: [
        { it: "Un maestro zen famoso riceveva ogni giorno insulti feroci su internet. Un allievo gli chiese come facesse a restare calmo. «Se qualcuno ti regala un regalo e tu non lo accetti», rispose il maestro, «di chi è il regalo?».", es: "Un maestro zen famoso recibía cada día insultos feroces en internet. Un alumno le preguntó cómo hacía para mantenerse calmado. «Si alguien te regala un regalo y tú no lo aceptas», respondió el maestro, «¿de quién es el regalo?»." },
        { it: "L'allievo rimase in silenzio. «Del resto», aggiunse il maestro, «gli insulti sono come il cibo avariato: se non lo mangi, fa male solo a chi lo ha cucinato». Non è indifferenza: è igiene mentale. Rispondere a ogni provocazione è come aprire la porta a ogni venditore ambulante: alla fine della giornata, la casa è piena di cose che non volevi. La calma non è non sentire: è scegliere cosa far entrare.", es: "El alumno quedó en silencio. «Además», agregó el maestro, «los insultos son como la comida vencida: si no la comes, solo hace daño a quien la cocinó». No es indiferencia: es higiene mental. Responder a cada provocación es como abrirle la puerta a cada vendedor ambulante: al final del día, la casa está llena de cosas que no querías. La calma no es no sentir: es elegir qué dejar entrar." },
      ],
      predict: { q: "Antes de leer: ¿qué le preguntará el alumno al maestro zen?", options: ["Cómo mantenerse calmo ante los insultos en internet", "Cómo ganar seguidores", "Cómo cocinar mejor"], answer: 0, why: "«Il monaco e il troll»: sabiduría antigua para redes modernas." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["La calma es elegir qué dejar entrar: no toda provocación merece respuesta", "Hay que responder a cada insulto con dignidad", "Internet debería prohibirse"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El regalo no aceptado sigue perteneciendo a quien lo ofrece", "Los insultos son como comida vencida: si no la comes, daña solo al cocinero"],
        distractors: ["El maestro cerró todas sus cuentas por miedo", "El texto dice que la calma es no sentir nada"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Se non accetti il regalo, resta di chi lo offre.", "Gli insulti sono cibo avariato.", "La calma è scegliere cosa far entrare.", "Bisogna rispondere a ogni provocazione entro cinque minuti, sempre."],
        intruder: 3, why: "El texto compara responder a todo con llenar la casa de cosas no deseadas." },
    },
    {
      id: "md-b2-01-3", theme: "qui e ora", title: "Il dibattito che ho perso volentieri", titleEs: "El debate que perdí con gusto", minutes: 4,
      paragraphs: [
        { it: "Avevo preparato il dibattito per un mese: dati, citazioni, battute pronte. Il mio avversario, un professore in pensione, arrivò con un solo foglio e un atteggiamento che non capivo: sembrava interessato a me.", es: "Había preparado el debate durante un mes: datos, citas, ocurrencias listas. Mi adversario, un profesor jubilado, llegó con una sola hoja y una actitud que no entendía: parecía interesado en mí." },
        { it: "Durante il dibattito mi fece tre domande, tutte semplici: «Perché ci credi tanto? Cosa ti preoccupa davvero? Cosa dovrebbe cambiare nella tua vita se avessi torto?». Alla terza domanda, mi argomento perfetto si sgretolò come un biscotto. Avevo difeso una posizione che non era mia, ereditata da altri, mai verificata. Persi il dibattito e guadagnai una domanda che mi accompagna da allora. Il vecchio professore non voleva vincere: voleva vedere. E per vedere, ti chiede di guardarti.", es: "Durante el debate me hizo tres preguntas, todas simples: «¿Por qué crees tanto en esto? ¿Qué te preocupa de verdad? ¿Qué debería cambiar en tu vida si te equivocaras?». A la tercera pregunta, mi argumento perfecto se desmoronó como una galleta. Había defendido una posición que no era mía, heredada de otros, nunca verificada. Perdí el debate y gané una pregunta que me acompaña desde entonces. El viejo profesor no quería ganar: quería ver. Y para ver, te pide que te mires." },
      ],
      predict: { q: "Antes de leer: ¿qué hará el profesor jubilado con sus preguntas?", options: ["Derrumbará un argumento heredado, nunca verificado", "Contará chistes", "Se retirará a mitad"], answer: 0, why: "«Persi volentieri»: perder como ganancia." },
      sequence: {
        instr: "Ordena el debate (1 = primero):",
        events: ["L'autore prepara il dibattito per un mese", "Il professore arriva con un solo foglio", "Fa tre domande semplici", "Alla terza, l'argomento perfetto si sgretola", "L'autore perde il dibattito e guadagna una domanda per la vita"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Prima di difendere una posizione con tutte le tue forze, fatti tre domande: perché ci credo tanto? Cosa mi preoccupa davvero? Cosa dovrebbe cambiare nella mia vita se avessi torto? Se non sai rispondere, forse l'argomento non è tuo: è ereditato. Verificare le proprie convinzioni non è debolezza: è onestà.",
        questions: [
          { q: "Quante domande devi farti?", kind: "literal", options: ["Tre", "Trenta", "Nessuna"], answer: 0, why: "«Fatti tre domande»." },
          { q: "Cosa potrebbe essere un argomento non verificato?", kind: "inferencial", options: ["Un argomento ereditado, non tuo", "Un argomento científico", "Un argumento ganado"], answer: 0, why: "«Forse l'argomento non è tuo: è ereditato»." },
          { q: "Cosa non è verificare le proprie convinzioni?", kind: "literal", options: ["Debolezza: è onestà", "Vigliaccheria", "Una perdita di tempo"], answer: 0, why: "«Non è debolezza: è onestà»." },
        ],
      },
    },
  ],

  "cu-b2-02": [
    {
      id: "md-b2-02-1", theme: "relax mentale", title: "Il burnout ha un odore", titleEs: "El burnout tiene un olor", minutes: 4,
      paragraphs: [
        { it: "Nessuno si sveglia una mattina con il burnout: ci si arriva gradualmente, come l'acqua che bolle intorno alla rana. Io l'ho visto arrivare e l'ho ignorato, perché i segnali erano troppo normali: caffè che non sveglia più, sonno che non riposa, weekend che non stacca.", es: "Nadie despierta una mañana con burnout: se llega gradualmente, como el agua que hierve alrededor de la rana. Yo lo vi venir y lo ignoré, porque las señales eran demasiado normales: café que ya no despierta, sueño que no descansa, fin de semana que no desconecta." },
        { it: "Poi un martedì qualsiasi, ho pianto davanti a una stampante inceppata. Una stampante. Il mio corpo aveva capito prima della mia testa che qualcosa non funzionava. La guarigione non è arrivata con le vacanze — le vacanze sono un cerotto — ma con la ristrutturazione delle giornate: pause vere tra le riunioni, un'ora di silenzio la mattina, il coraggio di dire «no» senza aggiungere scuse. Il burnout non si cura riposando di più: si cura vivendo diversamente.", es: "Luego un martes cualquiera, lloré frente a una impresora atascada. Una impresora. Mi cuerpo había entendido antes que mi cabeza que algo no funcionaba. La curación no llegó con las vacaciones — las vacaciones son una curita — sino con la reestructuración de los días: pausas reales entre reuniones, una hora de silencio por la mañana, el coraje de decir «no» sin agregar excusas. El burnout no se cura descansando más: se cura viviendo distinto." },
      ],
      predict: { q: "Antes de leer: ¿qué señal extrema mostrará el autor?", options: ["Llorar frente a una impresora atascada", "Gritar en una reunión", "Renunciar por mensaje"], answer: 0, why: "«Il burnout ha un odore»: las señales ignoradas." },
      quiz: [
        { q: "Quali erano i segnali «troppo normali»?", kind: "literal", options: ["Caffè che non sveglia, sonno che non riposa", "Febbre alta e rash cutanei", "Sogni strani la notte"], answer: 0, why: "El primer párrafo los lista." },
        { q: "Davanti a cosa ha pianto?", kind: "literal", options: ["Una stampante inceppata", "Il suo capo", "Un film triste"], answer: 0, why: "«Ho pianto davanti a una stampante inceppata»." },
        { q: "Perché le vacanze sono «un cerotto»?", kind: "inferencial", options: ["Alivian temporalmente pero no cambian la estructura que enferma", "Porque son caras", "Porque duran demasiado"], answer: 0, why: "La cura estructural (pausas, silencio, noes) es lo que funciona." },
        { q: "«Il burnout si cura vivendo diversamente». Qué cambiarías primero en tu semana?", kind: "critica", options: ["La estructura diaria: pausas y límites reales", "Solo el trabajo", "Nada: el burnout es un mito"], answer: 0, why: "El burnout es un problema de diseño de vida, no de vacaciones." },
      ],
      vf: [
        { text: "Il burnout arriva all'improvviso, da un giorno all'altro.", value: false, why: "Falso: «ci si arriva gradualmente»." },
        { text: "Il suo corpo aveva capito prima della sua testa.", value: true, why: "«Il mio corpo aveva capito prima della mia testa»." },
        { text: "La cura è stata solo un mese di vacanze.", value: false, why: "Falso: «le vacanze sono un cerotto»." },
      ],
    },
    {
      id: "md-b2-02-2", theme: "meditazione", title: "Lo smart working dell'anima", titleEs: "El smart working del alma", minutes: 4,
      paragraphs: [
        { it: "Lo smart working ci ha dato libertà di luogo: possiamo lavorare da casa, dal mare, dai monti. Ma nessuno ci ha dato libertà di ritmo: continuiamo a lavorare a ritmo industriale in contesti da villaggio digitale.", es: "El smart working nos dio libertad de lugar: podemos trabajar desde casa, desde el mar, desde la montaña. Pero nadie nos dio libertad de ritmo: seguimos trabajando a ritmo industrial en contextos de aldea digital." },
        { it: "La mia proposta è uno «smart working dell'anima»: lavorare dove vuoi, ma anche quando puoi — e riposare quando devi. Ho scoperto che le mie idee migliori non nascono davanti al computer, ma sotto la doccia, camminando, in coda al supermercato. Per questo ora programma le pause come riunioni: «ore 15-15,30: camminata senza telefono». Il capo all'inizio era scettico. Poi ha visto i risultati e adesso cammina anche lui. La creatività non ubbidisce agli orari: però risponde, generosamente, agli spazi vuoti che le offriamo.", es: "Mi propuesta es un «smart working del alma»: trabajar donde quieras, pero también cuando puedas — y descansar cuando debas. Descubrí que mis mejores ideas no nacen frente a la computadora, sino bajo la ducha, caminando, en la fila del supermercado. Por eso ahora programo las pausas como reuniones: «15-15:30: caminata sin teléfono». El jefe al principio era escéptico. Luego vio los resultados y ahora también camina. La creatividad no obedece a horarios: pero responde, generosamente, a los espacios vacíos que le ofrecemos." },
      ],
      predict: { q: "Antes de leer: ¿qué libertad falta según el autor?", options: ["La de ritmo: pausas programadas como reuniones", "La de lugar", "La de vestimenta"], answer: 0, why: "«Dell'anima»: el paso siguiente del smart working." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["La creatividad responde a los espacios vacíos que se le ofrecen deliberadamente", "Hay que trabajar menos horas siempre", "Las ideas nacen solo frente a la computadora"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Las mejores ideas nacen en la ducha, caminando o en la fila", "El jefe escéptico terminó caminando también"],
        distractors: ["El autor abandonó el trabajo remoto", "El texto dice que las pausas son para revisar el correo"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Lavorare dove vuoi, ma anche quando puoi.", "Programma le pause come riunioni.", "La creatività risponde agli spazi vuoti.", "Riempi ogni spazio vuoto con una videocall veloce di dieci minuti."],
        intruder: 3, why: "Todo el texto defiende los espacios vacíos; llenarlos de videollamadas es lo contrario." },
    },
    {
      id: "md-b2-02-3", theme: "relax fisico", title: "La scrivania che cammina", titleEs: "El escritorio que camina", minutes: 4,
      paragraphs: [
        { it: "Quando ho chiesto in ufficio una scrivania che cammina, i colleghi hanno riso. Sei mesi dopo, tre di loro ne hanno chiesta una. Non era moda: era sopravvivenza. Dopo otto ore seduto, il mio corpo presentava il conto: schiena, collo, umore.", es: "Cuando pedí en la oficina un escritorio caminante, los colegas rieron. Seis meses después, tres de ellos pidieron uno. No era moda: era supervivencia. Después de ocho horas sentado, mi cuerpo presentaba la factura: espalda, cuello, humor." },
        { it: "La macchina dell'ufficio costava troppo, così ho comprato un tappeto da corsa usato e un supporto per il computer: ora cammino mentre leggo le email, e sto fermo quando scrivo le cose importanti. Il corpo non è stato progettato per la sedia: è stato progettato per la savana. Non serve correre — bastano tre chilometri lenti al giorno, davanti allo schermo. Cammino, quindi penso. Penso, quindi cammino. L'ufficio ha smesso di essere una sala d'attesa della vita.", es: "La máquina de la oficina costaba demasiado, así que compré una caminadora usada y un soporte para la computadora: ahora camino mientras leo los correos, y me quedo quieto cuando escribo lo importante. El cuerpo no fue diseñado para la silla: fue diseñado para la sabana. No hace falta correr — bastan tres kilómetros lentos al día, frente a la pantalla. Camino, luego pienso. Pienso, luego camino. La oficina dejó de ser una sala de espera de la vida." },
      ],
      predict: { q: "Antes de leer: ¿qué pedirá el autor a la oficina?", options: ["Una scrivania camminante por supervivencia", "Una silla de cuero ejecutiva", "Un gimnasio privado"], answer: 0, why: "«La scrivania che cammina»: el cuerpo contra la silla." },
      sequence: {
        instr: "Ordena la evolución (1 = primero):",
        events: ["Chiede una scrivania che cammina e i colleghi ridono", "Il corpo presentava il conto: schiena, collo, umore", "Compra un tappeto usato e un supporto per il computer", "Cammina leggendo le email, sta fermo scrivendo le cose importanti", "Sei mesi dopo, tre colleghi chiedono la stessa cosa"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Il corpo non è stato progettato per la sedia: è stato progettato per la savana. Non serve correre: bastano tre chilometri lenti al giorno. Cammina mentre leggi le email, sta fermo quando scrivi le cose importanti. Cammino, quindi penso: l'ufficio smette di essere una sala d'attesa della vita.",
        questions: [
          { q: "Per cosa è stato progettato il corpo?", kind: "literal", options: ["Per la savana, non per la sedia", "Per il divano", "Per l'ufficio"], answer: 0, why: "«Progettato per la savana»." },
          { q: "Quanti chilometri bastano?", kind: "literal", options: ["Tre, lenti", "Trenta, veloci", "Nessuno"], answer: 0, why: "«Bastano tre chilometri lenti al giorno»." },
          { q: "Cosa smette di essere l'ufficio?", kind: "inferencial", options: ["Una sala de espera de la vida", "Un lugar de trabajo", "Un gimnasio"], answer: 0, why: "«L'ufficio smette di essere una sala d'attesa della vita»." },
        ],
      },
    },
  ],

  "cu-b2-03": [
    {
      id: "md-b2-03-1", theme: "spiritualità", title: "L'ecologia interiore", titleEs: "La ecología interior", minutes: 5,
      paragraphs: [
        { it: "Ci preoccupiamo del pianeta — giustamente — ma dimentichiamo un ecosistema che dipende solo da noi: la nostra mente. Anche lì c'è un clima, c'è un inquinamento, ci sono estinzioni: pensieri che scompaiono perché non li ascoltiamo più, silenzi che muoiono perché li riempiamo di rumore.", es: "Nos preocupamos por el planeta — con razón — pero olvidamos un ecosistema que depende solo de nosotros: nuestra mente. También allí hay un clima, hay una contaminación, hay extinciones: pensamientos que desaparecen porque ya no los escuchamos, silencios que mueren porque los llenamos de ruido." },
        { it: "Un filosofo chiamava questa pratica «ecologia interiore»: ridurre i rifiuti mentali, riciclare le esperienze, risparmiare energia spesa in pensieri tossici. Non è un invito all'egoismo: è la base realistica di ogni impegno esteriore. Chi inquina la propria mente con l'ansia non può curare il mondo: può solo urlare. Chi ha un clima interiore sano lavora per il pianeta con la pazienza di un giardiniere — che sa che le stagioni non si affrettano, ma non si arrende a nessuna siccità.", es: "Un filósofo llamaba a esta práctica «ecología interior»: reducir los residuos mentales, reciclar las experiencias, ahorrar energía gastada en pensamientos tóxicos. No es una invitación al egoísmo: es la base realista de todo compromiso exterior. Quien contamina su mente con ansiedad no puede cuidar el mundo: solo puede gritar. Quien tiene un clima interior sano trabaja por el planeta con la paciencia de un jardinero — que sabe que las estaciones no se apuran, pero no se rinde ante ninguna sequía." },
      ],
      predict: { q: "Antes de leer: ¿qué ecosistema olvidamos cuidar?", options: ["La mente: ecología interior como base del compromiso", "El jardín de casa", "Los océanos"], answer: 0, why: "«L'ecologia interiore»: el paralelismo mente-planeta." },
      quiz: [
        { q: "Quali «estinzioni» avvengono nella mente?", kind: "literal", options: ["Pensieri non ascoltati e silenzi riempiti di rumore", "Le cellule cerebrali", "I ricordi d'infanzia"], answer: 0, why: "El primer párrafo las describe." },
        { q: "Cosa significa «riciclare le esperienze»?", kind: "inferencial", options: ["Transformar lo vivido en aprendizaje útil en vez de residuo rumiato", "Tirar las experiencias pasadas", "Repetir las mismas experiencias"], answer: 0, why: "La lógica ecológica aplicada a la vida mental." },
        { q: "Perché l'ansia impedisce di curare il mondo?", kind: "inferencial", options: ["Porque solo permite gritar, no trabajar con paciencia", "Porque consume todo el dinero", "Porque es contagiosa"], answer: 0, why: "«Può solo urlare» vs. la paciencia del jardinero." },
        { q: "«Le stagioni non si affrettano, ma il giardiniere non si arrende». Qué enseña esto para el activismo?", kind: "critica", options: ["Constancia paciente > urgencia ansiosa: el cambio real es estacional", "Hay que actuar solo cuando hay crisis", "El activismo es inútil"], answer: 0, why: "La sostenibilidad del compromiso depende del ritmo interior." },
      ],
      vf: [
        { text: "L'ecologia interiore è un invito all'egoismo.", value: false, why: "Falso: «è la base realistica di ogni impegno esteriore»." },
        { text: "Chi inquina la mente con l'ansia può solo urlare.", value: true, why: "Metáfora del texto." },
        { text: "Il giardiniere si arrende alle siccità.", value: false, why: "Falso: «non si arrende a nessuna siccità»." },
      ],
    },
    {
      id: "md-b2-03-2", theme: "qui e ora", title: "Il consumo che non sazia", titleEs: "El consumo que no sacia", minutes: 4,
      paragraphs: [
        { it: "Il consumismo funziona come una fame che cresce mangiando. Ogni acquisto dà una felicità di due giorni; poi serve qualcosa di più grande, più nuovo, più veloce. Il pianeta paga il conto della nostra insaziabilità — e la nostra mente pure.", es: "El consumismo funciona como un hambre que crece comiendo. Cada compra da una felicidad de dos días; luego hace falta algo más grande, más nuevo, más rápido. El planeta paga la cuenta de nuestra insaciabilidad — y nuestra mente también." },
        { it: "La mindfulness applicata al consumo è semplicissima: prima di comprare, fermati trenta secondi e chiediti: «Questa cosa la voglio, o è il vuoto che la vuole?». Nel novanta per cento dei casi, è il vuoto. E il vuoto non si compra: si ascolta. Da quando faccio questa domanda, ho risparmiato migliaia di euro e scoperto che il mio vuoto voleva solo una camminata e una telefonata a un amico. Il consumo consapevole non è ascetismo: è dare a ogni euro la dignità di una scelta.", es: "El mindfulness aplicado al consumo es simplísima: antes de comprar, detente treinta segundos y pregúntate: «¿Esta cosa la quiero yo, o es el vacío el que la quiere?». En el noventa por ciento de los casos, es el vacío. Y el vacío no se compra: se escucha. Desde que hago esta pregunta, ahorré miles de euros y descubrí que mi vacío solo quería una caminata y una llamada a un amigo. El consumo consciente no es ascetismo: es darle a cada euro la dignidad de una elección." },
      ],
      predict: { q: "Antes de leer: ¿qué revelará la pregunta antes de comprar?", options: ["Que el 90% de las veces es el vacío el que compra", "Que los precios son muy bajos", "Que hay que comprar más"], answer: 0, why: "«Il consumo che non sazia»: mindfulness aplicada." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Detenerse antes de comprar revela si es necesidad real o vacío que pide ser escuchado", "Comprar es siempre malo", "El ahorro es la única meta de vida"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Cada compra da una felicidad de dos días y luego pide más", "El vacío del autor quería solo una caminata y una llamada"],
        distractors: ["El texto propone no comprar nada nunca", "El autor gastó todos sus ahorros en caminatas"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Prima di comprare, fermati trenta secondi.", "Chiediti: la voglio io o la vuole il vuoto?", "Il vuoto non si compra: si ascolta.", "Quando senti il vuoto, ordina subito qualcosa a domicilio: è la soluzione più rapida."],
        intruder: 3, why: "El texto propone escuchar el vacío, no taparlo con una compra." },
    },
    {
      id: "md-b2-03-3", theme: "relax fisico", title: "Le mani nella terra", titleEs: "Las manos en la tierra", minutes: 4,
      paragraphs: [
        { it: "Il mio terapeuta non mi ha prescritto farmaci ma un orto condiviso in periferia. «Le mani nella terra», ha detto, «è la terapia più antica del mondo». Sono scoppiato a ridere. Tre mesi dopo, non rido più: zappo.", es: "Mi terapeuta no me recetó medicamentos sino un huerto compartido en las afueras. «Las manos en la tierra», dijo, «es la terapia más antigua del mundo». Estallé en risa. Tres meses después, ya no río: azado." },
        { it: "L'orto mi ha insegnato cose che nessun libro di psicologia sapeva: che la natura non risponde alla fretta; che un raccolto fallito non è un fallimento personale; che le erbacce tornano sempre — e va bene così. La terra è un maestro severo ma giusto: ti dà esattamente quello che le hai dato, nel tempo che lei decide. Dopo sei mesi di zappa, la mia ansia da prestazione era scesa del settanta per cento. Non ho dati di controllo, ho solo i pomodori: i più belli della mia vita.", es: "El huerto me enseñó cosas que ningún libro de psicología sabía: que la naturaleza no responde a la prisa; que una cosecha fallida no es un fracaso personal; que las malezas vuelven siempre — y está bien así. La tierra es un maestro severo pero justo: te da exactamente lo que le diste, en el tiempo que ella decide. Después de seis meses de azada, mi ansiedad de rendimiento había bajado setenta por ciento. No tengo datos de control, tengo solo los tomates: los más lindos de mi vida." },
      ],
      predict: { q: "Antes de leer: ¿qué «prescribirá» el terapeuta?", options: ["Un orto urbano: manos en la tierra", "Un mes de spa", "Más horas de oficina"], answer: 0, why: "«Le mani nella terra»: la hortoterapia." },
      sequence: {
        instr: "Ordena la transformación (1 = primero):",
        events: ["Il terapeuta prescrive un orto condiviso", "L'autore scoppia a ridere", "Tre mesi dopo: non ride più, zappa", "Impara che la natura non risponde alla fretta", "Dopo sei mesi l'ansia scende e nascono i pomodori"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "La terra è un maestro severo ma giusto: ti dà esattamente quello che le hai dato, nel tempo che lei decide. La natura non risponde alla fretta. Le erbacce tornano sempre, e va bene così. Chi mette le mani nella terra impara la pazienza con tutto il corpo.",
        questions: [
          { q: "Com'è la terra come maestro?", kind: "literal", options: ["Severo ma giusto", "Facile e generoso", "Indifferente"], answer: 0, why: "«Severo ma giusto»." },
          { q: "Cosa non risponde alla fretta?", kind: "literal", options: ["La natura", "Il traffico", "Il telefono"], answer: 0, why: "«La natura non risponde alla fretta»." },
          { q: "Cosa impara chi mette le mani nella terra?", kind: "inferencial", options: ["La paciencia con todo el cuerpo", "La contabilidad", "La jardinería vertical"], answer: 0, why: "«Impara la pazienza con tutto il corpo»." },
        ],
      },
    },
  ],

  "cu-b2-04": [
    {
      id: "md-b2-04-1", theme: "spiritualità", title: "Le radici e le ali", titleEs: "Las raíces y las alas", minutes: 5,
      paragraphs: [
        { it: "Un proverbio antico dice che per vivere bene servono due cose: radici e ali. Le radici sono il luogo, la lingua, la famiglia, i morti. Le ali sono la curiosità, il viaggio, il cambiamento. La modernità ha dichiarato guerra alle radici: tutto deve essere nuovo, mobile, sostituibile.", es: "Un proverbio antiguo dice que para vivir bien se necesitan dos cosas: raíces y alas. Las raíces son el lugar, la lengua, la familia, los muertos. Las alas son la curiosidad, el viaje, el cambio. La modernidad le declaró la guerra a las raíces: todo debe ser nuevo, móvil, reemplazable." },
        { it: "Ma un albero con sole ali non esiste: esistono solo uccelli stanchi. E un albero con sole radici non va da nessuna parte. La spiritualità, in molte tradizioni, è precisamente l'arte di tenere insieme le due cose: onorare da dove vieni senza smettere di andare. Il mio vicino di ottant'anni, emigrato tre volte, me l'ha detto così: «Figlio mio, io ho piantato un albero in ogni paese dove ho vissuto. Gli alberi sono radici che respirano». Forse la felicità è questo: sapere dove sono le tue radici mentre usi le ali.", es: "Pero un árbol con solo alas no existe: solo existen pájaros cansados. Y un árbol con solo raíces no va a ninguna parte. La espiritualidad, en muchas tradiciones, es precisamente el arte de mantener juntas las dos cosas: honrar de dónde vienes sin dejar de ir. Mi vecino de ochenta años, emigrado tres veces, me lo dijo así: «Hijo mío, yo planté un árbol en cada país donde viví. Los árboles son raíces que respiran». Quizá la felicidad es esto: saber dónde están tus raíces mientras usas las alas." },
      ],
      predict: { q: "Antes de leer: ¿qué dos cosas necesita la vida buena?", options: ["Raíces y alas: pertenencia y vuelo", "Dinero y fama", "Trabajo y vacaciones"], answer: 0, why: "«Le radici e le ali»: el proverbio central." },
      quiz: [
        { q: "Cosa sono le radici, secondo il proverbio?", kind: "literal", options: ["Luogo, lingua, famiglia, i morti", "I capelli", "Le piante del giardino"], answer: 0, why: "El primer párrafo las define." },
        { q: "Cosa sono gli alberi per il vicino anziano?", kind: "literal", options: ["Radici che respirano", "Un investimento", "Un passatempo"], answer: 0, why: "«Gli alberi sono radici che respirano»." },
        { q: "Cosa cos'è «un uccello stanco» nella metafora?", kind: "inferencial", options: ["Quien vive solo de cambios sin pertenencias: agotamiento sin hogar", "Un pájaro migratorio normal", "Un avión averiado"], answer: 0, why: "Alas sin raíces = desgaste sin sostento." },
        { q: "Dónde están tus raíces y cómo usas tus alas? El vecino plantaría árboles — tú qué plantarías?", kind: "critica", options: ["Rituales y vínculos que anclan mientras exploro", "Nada: las raíces atan", "Solo alas: el pasado no importa"], answer: 0, why: "La pregunta invita a nombrar las propias raíces mientras se planea el vuelo." },
      ],
      vf: [
        { text: "La modernità ha valorizzato molto le radici.", value: false, why: "Falso: «ha dichiarato guerra alle radici»." },
        { text: "Il vicino ha piantato un albero in ogni paese dove ha vissuto.", value: true, why: "Lo cuenta el último párrafo." },
        { text: "Un albero con sole ali non esiste.", value: true, why: "«Esistono solo uccelli stanchi»." },
      ],
    },
    {
      id: "md-b2-04-2", theme: "qui e ora", title: "L'accento che sono", titleEs: "El acento que soy", minutes: 4,
      paragraphs: [
        { it: "Per anni ho odiato il mio accento del Sud. A Milano lo nascondevo come un difetto: vocali più chiuse, parole tagliate, una mimica da settentrionale. Poi, durante un corso di teatro, il maestro mi fermò: «Tu parli con la voce di un altro. Dov'è la tua?».", es: "Durante años odié mi acento del sur. En Milán lo escondía como un defecto: vocales más cerradas, palabras cortadas, una mímica de norteño. Luego, durante un curso de teatro, el maestro me detuvo: «Tú hablas con la voz de otro. ¿Dónde está la tuya?»." },
        { it: "Quella domanda mi ha accompagnato per anni. La voce — come l'accento — non è solo suono: è geografia, è madre, è storia. Nasconderla è una forma di auto-esilio. Oggi parlo con il mio accento pieno, e quando qualcuno se ne accorge, sorrido: «Sì, sono di giù». La presenza comincia proprio lì: dal coraggio di suonare come sei, non come ti vorresti. La voce autentica è la prima forma di qui e ora: è il presente che parla.", es: "Esa pregunta me acompañó durante años. La voz — como el acento — no es solo sonido: es geografía, es madre, es historia. Ocultarla es una forma de autoexilio. Hoy hablo con mi acento pleno, y cuando alguien lo nota, sonrío: «Sí, soy del sur». La presencia comienza justamente ahí: desde el coraje de sonar como eres, no como querrías ser. La voz auténtica es la primera forma de aquí y ahora: es el presente que habla." },
      ],
      predict: { q: "Antes de leer: ¿qué escondía el autor en Milán?", options: ["Su acento del sur: autoexilio vocal", "Su edad", "Su título universitario"], answer: 0, why: "«L'accento che sono»: identidad y voz." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["La voz propia — acento incluido — es identidad: ocultarla es autoexilio", "Hay que hablar como la televisión", "Los cursos de teatro son inútiles"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El maestro de teatro le pregunta dónde está su voz", "Hoy sonríe cuando notan su acento: «Sì, sono di giù»"],
        distractors: ["El autor perdió el acento para siempre", "El texto dice que el acento del sur es incorrecto"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["La voce è geografia, madre, storia.", "Nasconderla è una forma di auto-esilio.", "La voce autentica è il presente che parla.", "Parla sempre con la voce di un altro: sembri più professionale."],
        intruder: 3, why: "El maestro justo le reprocha hablar con la voz de otro." },
    },
    {
      id: "md-b2-04-3", theme: "relax mentale", title: "Il paese dei pensieri ripetuti", titleEs: "El país de los pensamientos repetidos", minutes: 4,
      paragraphs: [
        { it: "Ho fatto i conti: in una giornata media, il novanta per cento dei miei pensieri era già comparso il giorno prima. Eredi, preoccupazioni, conversazioni immaginarie con persone che non rispondevano. Vivevo in un paese abitato da sempre dagli stessi abitanti.", es: "Hice las cuentas: en un día promedio, el noventa por ciento de mis pensamientos ya había aparecido el día anterior. Quejas, preocupaciones, conversaciones imaginarias con personas que no respondían. Vivía en un pueblo habitado siempre por los mismos habitantes." },
        { it: "La scoperta mi ha scioccato meno dell'antidoto: non serve bloccare i pensieri — serve dargli un paese più grande. Ho iniziato a leggere cose che non conoscevo, a camminare in strade nuove, a chiamare persone diverse. I pensieri vecchi non sono scomparsi: sono diventati minoranza. La mente, come un campo, coltiva quello che pianti. Se pianti sempre gli stessi semi, raccogli sempre lo stesso grano — e poi ti lamenti del menù. La varietà dell'esperienza è la vera igiene mentale: ogni volto nuovo, ogni strada nuova, ogni parola nuova è una stanza in più nella casa della mente.", es: "El descubrimiento me sorprendió menos que el antídoto: no hace falta bloquear los pensamientos — hace falta darles un pueblo más grande. Empecé a leer cosas que no conocía, a caminar por calles nuevas, a llamar a personas distintas. Los pensamientos viejos no desaparecieron: se volvieron minoría. La mente, como un campo, cultiva lo que plantas. Si plantas siempre las mismas semillas, cosechas siempre el mismo grano — y luego te quejas del menú. La variedad de la experiencia es la verdadera higiene mental: cada rostro nuevo, cada calle nueva, cada palabra nueva es una habitación más en la casa de la mente." },
      ],
      predict: { q: "Antes de leer: ¿cuál será el antídoto contra los pensamientos repetidos?", options: ["Darles un país más grande: experiencias nuevas", "Bloquearlos uno por uno", "Quejarse del menú"], answer: 0, why: "«Il paese dei pensieri»: la higiene mental por variedad." },
      sequence: {
        instr: "Ordena el antídoto (1 = primero):",
        events: ["Scopre che il 90% dei pensieri si ripete ogni giorno", "Capisce che non serve bloccarli", "Inizia a leggere, camminare e chiamare cose nuove", "I pensieri vecchi diventano minoranza", "La mente diventa una casa con più stanze"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Il novanta per cento dei nostri pensieri di oggi era già arrivato ieri. Non serve bloccarli: serve dargli un paese più grande. Leggi cose nuove, cammina in strade nuove, chiama persone diverse. La mente, come un campo, coltiva quello che pianti. Ogni parola nuova è una stanza in più nella casa della mente.",
        questions: [
          { q: "Quanta parte dei pensieri si ripete?", kind: "literal", options: ["Il novanta per cento", "Il dieci per cento", "Nessuno"], answer: 0, why: "«Il novanta per cento»." },
          { q: "Cosa fare, invece di bloccare i pensieri?", kind: "literal", options: ["Dare loro un paese più grande", "Ignorarli per sempre", "Contarli tutti"], answer: 0, why: "«Serve dargli un paese più grande»." },
          { q: "Cosa è ogni parola nuova?", kind: "inferencial", options: ["Una stanza più en la casa de la mente", "Un problema", "Un gasto"], answer: 0, why: "«Una stanza in più nella casa della mente»." },
        ],
      },
    },
  ],

  "cu-b2-05": [
    {
      id: "md-b2-05-1", theme: "meditazione", title: "La lingua del silenzio", titleEs: "La lengua del silencio", minutes: 4,
      paragraphs: [
        { it: "Ogni lingua divide il mondo a modo suo. L'italiano ha parole per tutto lo spreco di energia — sfogo, frustrazione, rabbia — ma pochissime per gli stati quieti. Diciamo «sono calmo» e sembra già una diagnosi. I monaci benedettini, invece, avevano un vocabolario intero per il silenzio: il silenzio della cella, il silenzio del coro, il silenzio del cuore.", es: "Cada lengua divide el mundo a su manera. El italiano tiene palabras para todo el desperdicio de energía — desahogo, frustración, rabia — pero muy pocas para los estados quietos. Decimos «estoy calmado» y ya parece un diagnóstico. Los monjes benedictinos, en cambio, tenían un vocabulario entero para el silencio: el silencio de la celda, el silencio del coro, el silencio del corazón." },
        { it: "Chi impara una lingua impara anche un nuovo modo di stare al mondo: l'italiano del silenzio esiste — si chiama «stare» — ma è nascosto. «Come stai?» letteralmente significa «come stai (in piedi, in questo momento)?». È una domanda di presenza. Forse la meditazione, per noi occidentali, è proprio questo: imparare finalmente la lingua del silenzio, con lo stesso impegno con cui studiamo l'inglese. Il silenzio è una lingua straniera che tutti abbiamo dimenticato di sapere.", es: "Quien aprende una lengua aprende también una nueva manera de estar en el mundo: el italiano del silencio existe — se llama «stare» — pero está escondido. «Come stai?» literalmente significa «¿cómo estás (de pie, en este momento)?». Es una pregunta de presencia. Quizá la meditación, para nosotros los occidentales, es justamente esto: aprender por fin la lengua del silencio, con el mismo empeño con que estudiamos inglés. El silencio es una lengua extranjera que todos olvidamos que sabíamos." },
      ],
      predict: { q: "Antes de leer: ¿qué descubrirá el autor sobre el italiano?", options: ["Que contiene una lengua del silencio escondida", "Que es imposible de aprender", "Que solo sirve para la ópera"], answer: 0, why: "«La lingua del silenzio»: idioma y contemplación." },
      quiz: [
        { q: "Che vocabolario avevano i monaci benedettini?", kind: "literal", options: ["Un vocabolario intero per il silenzio", "Solo parole per il lavoro", "Nessun vocabolario"], answer: 0, why: "«Un vocabolario intero per il silenzio»." },
        { q: "Cosa significa letteralmente «come stai?»?", kind: "inferencial", options: ["Cómo estás en este momento: una pregunta de presencia", "Cuánto ganas", "Dónde vives"], answer: 0, why: "«È una domanda di presenza»." },
        { q: "Cosa sarebbe la meditazione per gli occidentali?", kind: "inferencial", options: ["Aprender la lengua del silencio olvidada", "Una técnica de productividad", "Un deporte"], answer: 0, why: "«Il silenzio è una lingua straniera che tutti abbiamo dimenticato di sapere»." },
        { q: "Tu qué «palabras de quietud» tiene tu lengua materna? Cuál falta?", kind: "critica", options: ["Faltan palabras cotidianas para estados calmos: nombrarlos ayuda a habitarlos", "Hay demasiadas", "Las palabras no importan"], answer: 0, why: "Lo que no se nombra es difícil de practicar: léxico = conciencia." },
      ],
      vf: [
        { text: "L'italiano ha molte parole comuni per gli stati quieti.", value: false, why: "Falso: «poche per gli stati quieti»." },
        { text: "«Come stai?» è una domanda di presenza.", value: true, why: "Lo explica el segundo párrafo." },
        { text: "Il silenzio è una lingua che tutti abbiamo dimenticato di sapere.", value: true, why: "Es la frase final." },
      ],
    },
    {
      id: "md-b2-05-2", theme: "qui e ora", title: "Il dialetto della nonna", titleEs: "El dialecto de la abuela", minutes: 4,
      paragraphs: [
        { it: "Mia nonna parlava un dialetto che non scriveva e che io non capivo da bambino. Da adulto, dopo la sua morte, ho trovato un quaderno: le sue ricette, scritte in un italiano imperfetto e bellissimo, con paroline dialettali ai margini come note musicali.", es: "Mi abuela hablaba un dialecto que no escribía y que yo de niño no entendía. De adulto, después de su muerte, encontré un cuaderno: sus recetas, escritas en un italiano imperfecto y hermosísimo, con palabritas dialectales al margen como notas musicales." },
        { it: "Ho iniziato a cucinare quelle ricette come uno studioso legge un manoscritto antico: lentamente, ad alta voce. Cucinando, il dialetto della nonna è tornato a vivere nella mia cucina — e con lui, la sua presenza. Ora capisco: le lingue non muoiono quando muoiono i parlanti; muoiono quando smettiamo di usarle. Ogni volta che dico ad alta voce «'na pinsa de pacienza» (un pizzico di pazienza, come diceva lei), la nonna è in cucina con me. Il presente, a volte, ha l'accento dei morti che amiamo.", es: "Empecé a cocinar esas recetas como un estudioso lee un manuscrito antiguo: lentamente, en voz alta. Cocinando, el dialecto de la abuela volvió a vivir en mi cocina — y con él, su presencia. Ahora entiendo: las lenguas no mueren cuando mueren los hablantes; mueren cuando dejamos de usarlas. Cada vez que digo en voz alta «'na pinsa de paciencia» (una pizca de paciencia, como decía ella), la abuela está en la cocina conmigo. El presente, a veces, tiene el acento de los muertos que amamos." },
      ],
      predict: { q: "Antes de leer: ¿qué encontrará el autor tras la muerte de la nonna?", options: ["Un quaderno de recetas que revive su dialecto", "Un tesoro escondido", "Una carta de despedida"], answer: 0, why: "«Il dialetto della nonna»: lengua y memoria." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Las lenguas viven mientras se usan: cocinar las recetas revive la presencia de la nonna", "Los dialectos deben desaparecer", "Las recetas son solo comida"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El cuaderno tenía recetas en italiano imperfecto con notas dialectales", "Cocinar leyendo en voz alta trajo el dialecto de vuelta a la cocina"],
        distractors: ["El autor aprendió a escribir dialecto perfectamente", "El texto dice que el dialecto murió con la nonna para siempre"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Le lingue muoiono quando smettiamo di usarle.", "Cucinare le ricette ha riportato il dialetto in cucina.", "Il presente, a volte, ha l'accento dei morti che amiamo.", "Il quaderno della nonna era inutile: meglio comprare un ricettario moderno."],
        intruder: 3, why: "Todo el texto celebra ese cuaderno como puente de memoria." },
    },
    {
      id: "md-b2-05-3", theme: "relax mentale", title: "Le parole che ci ripetiamo", titleEs: "Las palabras que nos repetimos", minutes: 4,
      paragraphs: [
        { it: "Un linguista ha calcolato che usiamo circa trenta frasi al giorno per parlare di noi stessi, dentro la testa. «Non ce la farò», «sono sempre io», «tanto non cambia niente». Le chiamò «frasi passeggere»: le ripetiamo così spesso che ci camminano accanto come compagni invisibili.", es: "Un lingüista calculó que usamos unas treinta frases al día para hablarnos a nosotros mismos, dentro de la cabeza. «No voy a poder», «siempre soy yo», «total, nada cambia». Las llamó «frases caminantes»: las repetimos tan seguido que caminan a nuestro lado como compañeros invisibles." },
        { it: "Il primo passo della meditazione verbale è semplicemente sentirle. Un esercizio: per un giorno, ogni volta che una frase-passeggera appare, scrivila su un foglio e aggiungi: «…oppure no». «Non ce la farò… oppure no». Il «oppure no» è una finestra: non nega il pensiero, lo declina. Dopo una settimana di finestre, molte frasi sono uscite da sole: non erano verità, erano abitudini. La mente crede a quello che ripete: ripeti qualcosa di più grande di te.", es: "El primer paso de la meditación verbal es simplemente escucharlas. Un ejercicio: durante un día, cada vez que aparezca una frase-caminante, escríbela en una hoja y agrega: «…o quizá no». «No voy a poder… o quizá no». El «o quizá no» es una ventana: no niega el pensamiento, lo conjuga. Después de una semana de ventanas, muchas frases salieron solas: no eran verdades, eran hábitos. La mente cree lo que repite: repite algo más grande que tú." },
      ],
      predict: { q: "Antes de leer: ¿qué son las «frasi passeggere»?", options: ["Frases que nos repetimos como compañeros invisibles", "Frases de turistas", "Modismos antiguos"], answer: 0, why: "«Le parole che ci ripetiamo»: el diálogo interior." },
      sequence: {
        instr: "Ordena el ejercicio (1 = primero):",
        events: ["Una frase-passeggera appare nella testa", "La scrivi su un foglio", "Aggiungi: «…oppure no»", "Dopo una settimana, molte frasi escono da sole", "Scopri che erano abitudini, non verità"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Ogni giorno ci ripetiamo trenta frasi dentro la testa: non ce la farò, tanto non cambia niente. Prova così: scrivi la frase e aggiungi «oppure no». Non ce la farò… oppure no. Il «oppure no» è una finestra: non nega il pensiero, lo declina. La mente crede a quello che ripete: ripeti qualcosa di più grande di te.",
        questions: [
          { q: "Quante frasi al giorno ci ripetiamo?", kind: "literal", options: ["Circa trenta", "Circa tre", "Circa tremila"], answer: 0, why: "«Circa trenta frasi al giorno»." },
          { q: "Cosa aggiungi alla frase scritta?", kind: "literal", options: ["«Oppure no»", "Un punto esclamativo", "Il nome del capo"], answer: 0, why: "«Aggiungi oppure no»." },
          { q: "Cosa fa il «oppure no»?", kind: "inferencial", options: ["Abre una ventana: declina el pensamiento sin negarlo", "Borra el pensamiento", "Confirma el pensamiento"], answer: 0, why: "«Non nega il pensiero, lo declina»." },
        ],
      },
    },
  ],

  "cu-b2-06": [
    {
      id: "md-b2-06-1", theme: "spiritualità", title: "Il romanzo come pratica spirituale", titleEs: "La novela como práctica espiritual", minutes: 5,
      paragraphs: [
        { it: "Marcel Proust scrisse che la lettura è «un incontro spirituale con qualcuno che ci capisce». Ogni grande romanzo è la biografia di un'anima che somiglia alla nostra in un punto segreto. Leggere, allora, non è intrattenimento: è un esercizio di empatia tecnica.", es: "Marcel Proust escribió que la lectura es «un encuentro espiritual con alguien que nos entiende». Cada gran novela es la biografía de un alma que se parece a la nuestra en un punto secreto. Leer, entonces, no es entretenimiento: es un ejercicio de empatía técnica." },
        { it: "Studi recenti lo confermano: chi legge narrativa letteraria supera i test di lettura della mente — la capacità di indovinare cosa pensa e sente un altro. Il romanzo è una palestra di anime: ogni personaggio è un simulatore di esperienza umana. Ma c'è una condizione: la lettura lenta. Il romanzo ingoiato in due ore come una serie TV non allena nulla. Il romanzo vissuto — qualche pagina al giorno, con la matita in mano, rileggendo le frasi che ci attraversano — cambia il lettore come cambia l'acqua la pietra: senza violenza, con la sola pazienza del contatto.", es: "Estudios recientes lo confirman: quien lee narrativa literaria supera las pruebas de lectura de la mente — la capacidad de adivinar qué piensa y siente otro. La novela es un gimnasio de almas: cada personaje es un simulador de experiencia humana. Pero hay una condición: la lectura lenta. La novela devorada en dos horas como una serie de TV no entrena nada. La novela vivida — algunas páginas al día, con el lápiz en la mano, releyendo las frases que nos atraviesan — cambia al lector como el agua cambia la piedra: sin violencia, con la sola paciencia del contacto." },
      ],
      predict: { q: "Antes de leer: ¿qué es leer según Proust?", options: ["Un encuentro espiritual con quien nos entiende", "Un pasatiempo de vacaciones", "Un deber escolar"], answer: 0, why: "«Il romanzo come pratica spirituale»: leer es empatía." },
      quiz: [
        { q: "Cosa scrisse Proust sulla lettura?", kind: "literal", options: ["È un incontro spirituale con qualcuno che ci capisce", "È una perdita di tempo", "È solo per i ricchi"], answer: 0, why: "La primera línea del texto." },
        { q: "In cosa eccellono i lettori di narrativa letteraria?", kind: "literal", options: ["Nei test di lettura della mente (empatia)", "Nei calcoli matematici", "Nella memoria dei numeri"], answer: 0, why: "«Superano i test di lettura della mente»." },
        { q: "Perché il romanzo «ingoiato» non allena?", kind: "inferencial", options: ["Falta la lentitudy el re-contacto: el cambio requiere paciencia", "Porque es ilegal", "Porque la TV es mejor"], answer: 0, why: "La metáfora agua/piedra: contacto repetido, no violencia." },
        { q: "«Qualche pagina al día, con la matita in mano». Es tu manera de leer? Qué cambiarías?", kind: "critica", options: ["Más lentitud y relectura: subrayar lo que atraviesa", "Más velocidad: cantidad sobre calidad", "Solo audiolibros"], answer: 0, why: "La lectura contemplativa multiplica el efecto empático." },
      ],
      vf: [
        { text: "Il romanzo letto in due ore allena l'empatia come uno vissuto lentamente.", value: false, why: "Falso: «il romanzo ingoiato non allena nulla»." },
        { text: "Ogni personaggio è un simulatore di esperienza umana.", value: true, why: "Metáfora del gimnasio de almas." },
        { text: "L'acqua cambia la pietra senza violenza, con la pazienza del contatto.", value: true, why: "Es la imagen final del texto." },
      ],
    },
    {
      id: "md-b2-06-2", theme: "meditazione", title: "Il cinema che respira", titleEs: "El cine que respira", minutes: 4,
      paragraphs: [
        { it: "Il cinema moderno ha paura del silenzio: taglia ogni due secondi, riempie ogni pausa di musica. Il risultato è che il pubblico ha perso la capacità di guardare un volto che semplicemente pensa. Lo chiamano «tirannia del montaggio».", es: "El cine moderno le teme al silencio: corta cada dos segundos, llena cada pausa de música. El resultado es que el público perdió la capacidad de mirar un rostro que simplemente piensa. Lo llaman «tiranía del montaje»." },
        { it: "Poi ho scoperto il cinema di Yasujiro Ozu: inquadrature fisse che durano come respiri, personaggi che bevono il tè in silenzio, la telecamera ferma all'altezza di chi è seduto su un tatami. Il primo film mi sembrò lento. Il secondo mi calmò. Al terzo capii: Ozu non rallena il cinema — lo riporta alla velocità della vita. Guardare un film di Ozu è una meditazione con sottotitoli: dopo un'ora e mezza, respiri più piano e vedi la tua cucina con altri occhi. Il miglior coaching di attenzione costa dieci euro: un biglietto per un film che si prende il tempo.", es: "Luego descubrí el cine de Yasujiro Ozu: encuadres fijos que duran como respiraciones, personajes que toman el té en silencio, la cámara quieta a la altura de quien está sentado en un tatami. La primera película me pareció lenta. La segunda me calmó. A la tercera entendí: Ozu no hace más lento el cine — lo devuelve a la velocidad de la vida. Mirar una película de Ozu es una meditación con subtítulos: después de hora y media, respiras más lento y ves tu cocina con otros ojos. El mejor coaching de atención cuesta diez euros: una entrada para una película que se toma su tiempo." },
      ],
      predict: { q: "Antes de leer: ¿qué descubrirá el autor en el cine de Ozu?", options: ["El cine a la velocidad de la vida: meditación con subtítulos", "Un nuevo género de terror", "Trucos de montaje rápido"], answer: 0, why: "«Il cinema che respira»: lentitud como medicina." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["El cine lento entrena la atención y devuelve la mirada a la velocidad real", "Todo el cine moderno es malo", "Ozu debería usar más música"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El cine moderno corta cada dos segundos y llena las pausas de música", "La cámara de Ozu se queda a la altura de quien está sentado en el tatami"],
        distractors: ["El autor se durmió durante las tres películas", "El texto dice que los subtítulos arruinan la meditación"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Ozu usa inquadrature fisse che durano come respiri.", "I personaggi bevono il tè in silenzio.", "Guardare Ozu è una meditazione con sottotitoli.", "Il segreto del cinema moderno: tagliare ogni mezzo secondo e alzare la musica nelle pause."],
        intruder: 3, why: "Eso es exactamente la «tiranía del montaje» que el texto critica." },
    },
    {
      id: "md-b2-06-3", theme: "relax mentale", title: "La serie che non finisce mai", titleEs: "La serie que nunca termina", minutes: 4,
      paragraphs: [
        { it: "Ho fatto un esperimento crudele con me stesso: ho contato le ore passate sulle serie in un mese. Ventidue. Equivale a un weekend intero di vita — speso guardando vite di altri, in pigiama, con il telefono in mano come secondo schermo.", es: "Hice un experimento cruel conmigo mismo: conté las horas pasadas en series en un mes. Veintidós. Equivale a un fin de semana entero de vida — gastado mirando vidas de otros, en pijama, con el teléfono en la mano como segunda pantalla." },
        { it: "Non ho cancellato nulla — la vita non è un percorso di penitenza. Ho solo aggiunto una regola: dopo ogni episodio, tre minuti di finestra aperta, in silenzio, prima di decidere se continuare. La maggior parte delle volte, dopo la finestra, decidevo di fermarmi. Il «binge» non nasce dal piacere: nasce dall'inerzia. La finestra rompe l'inerzia. E la domanda che mi faccio guardando il buio fuori è sempre la stessa: «Questa storia mi sta dando qualcosa, o mi sta solo tenendo compagnia?». A volte la risposta è compagnia — e va bene. Ma almeno adesso lo so.", es: "No cancelé nada — la vida no es un recorrido de penitencia. Solo agregué una regla: después de cada episodio, tres minutos de ventana abierta, en silencio, antes de decidir si seguir. La mayoría de las veces, tras la ventana, decidía parar. El «binge» no nace del placer: nace de la inercia. La ventana rompe la inercia. Y la pregunta que me hago mirando la oscuridad afuera es siempre la misma: «¿Esta historia me está dando algo, o solo me está haciendo compañía?». A veces la respuesta es compañía — y está bien. Pero al menos ahora lo sé." },
      ],
      predict: { q: "Antes de leer: ¿qué regla añadirá el autor?", options: ["Tres minutos de ventana abierta entre episodios", "Ver solo documentales", "Cancelar todas las suscripciones"], answer: 0, why: "«La serie che non finisce mai»: romper la inercia." },
      sequence: {
        instr: "Ordena el método (1 = primero):",
        events: ["Conta le ore di serie in un mese: ventidue", "Aggiunge una regola: dopo ogni episodio, tre minuti alla finestra", "In silenzio, decide se continuare", "La maggior parte delle volte decide di fermarsi", "Capisce: il binge nasce dall'inerzia, non dal piacere"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Dopo ogni episodio, tre minuti di finestra aperta, in silenzio. Poi decidi se continuare. Il binge non nasce dal piacere: nasce dall'inerzia, e la finestra rompe l'inerzia. Chiediti: questa storia mi dà qualcosa, o mi tiene solo compagnia? A volte la risposta è compagnia, e va bene. Ma almeno saperlo è già libertà.",
        questions: [
          { q: "Quanti minuti alla finestra?", kind: "literal", options: ["Tre", "Trenta", "Tre secondi"], answer: 0, why: "«Tre minuti di finestra aperta»." },
          { q: "Da cosa nasce il binge?", kind: "literal", options: ["Dall'inerzia, non dal piacere", "Dalla fame", "Dalla noia del weekend"], answer: 0, why: "«Nasce dall'inerzia»." },
          { q: "Cosa è già, saperlo?", kind: "inferencial", options: ["Libertad", "Una condena", "Una pérdida de tiempo"], answer: 0, why: "«Almeno saperlo è già libertà»." },
        ],
      },
    },
  ],

  "cu-b2-07": [
    {
      id: "md-b2-07-1", theme: "meditazione", title: "L'artigiano e il tempo", titleEs: "El artesano y el tiempo", minutes: 5,
      paragraphs: [
        { it: "In un laboratorio di Faenza ho incontrato l'ultimo ceramista che dipinge a mano le maioliche come nel Cinquecento. Gli chiesi quanto tempo richiede un piatto. «Tre ore di pennello», rispose. «E quanto per imparare?» «Trent'anni. E sto ancora imparando».", es: "En un taller de Faenza conocí al último ceramista que pinta a mano la mayólica como en el Quinientos. Le pregunté cuánto tiempo requiere un plato. «Tres horas de pincel», respondió. «¿Y cuánto para aprender?» «Treinta años. Y sigo aprendiendo»." },
        { it: "Il mondo gli propone macchine che farebbero lo stesso piatto in trenta secondi. Lui sorride: «Le macchine non sbagliano. Io sbaglio ogni giorno — e ogni errore mi insegna la pazienza». In quella frase c'è tutta la differenza tra produrre e creare. Produrre elimina l'errore; creare lo ascolta. Quando guardo il suo laboratorio — l'ordine degli strumenti, il silenzio, la lentezza — capisco che la meditazione non è necessariamente seduta a occhi chiusi: a volte è in piedi, con un pennello in mano, davanti a un piatto che ha cinquecento anni di pazienza da rispettare.", es: "El mundo le ofrece máquinas que harían el mismo plato en treinta segundos. Él sonríe: «Las máquinas no se equivocan. Yo me equivoco todos los días — y cada error me enseña la paciencia». En esa frase está toda la diferencia entre producir y crear. Producir elimina el error; crearlo escucha. Cuando miro su taller — el orden de las herramientas, el silencio, la lentitud — entiendo que la meditación no es necesariamente sentada a ojos cerrados: a veces es de pie, con un pincel en la mano, frente a un plato que tiene quinientos años de paciencia que respetar." },
      ],
      predict: { q: "Antes de leer: ¿cuánto tarda aprender el oficio según el ceramista?", options: ["Trent'anni — e sigue aprendiendo", "Tres días", "Una semana online"], answer: 0, why: "«L'artigiano e il tempo»: la paciencia del oficio." },
      quiz: [
        { q: "Quanto tempo richiede un piatto?", kind: "literal", options: ["Tre ore di pennello", "Trenta secondi", "Tre giorni"], answer: 0, why: "«Tre ore di pennello»." },
        { q: "Cosa dicono le macchine al ceramista?", kind: "literal", options: ["Possono fare lo stesso piatto in trenta secondi", "Che è troppo vecchio", "Che deve arrendersi"], answer: 0, why: "«Il mondo gli propone macchine»." },
        { q: "Qual è la differenza tra produrre e creare?", kind: "inferencial", options: ["Producir elimina el error; crearlo escucha", "Ninguna", " Producir es más difícil"], answer: 0, why: "Frase central del penúltimo párrafo." },
        { q: "La meditazione «de pie, con un pincel en la mano»: qué oficio tuyo podría convertirse en práctica?", kind: "critica", options: ["Cualquier oficio hecho con atención total: cocinar, escribir, arreglar", "Ninguno: meditar es solo sentado", "Solo los oficios manuales antiguos"], answer: 0, why: "El oficio como camino contemplativo: tradición de los maestros artesanos." },
      ],
      vf: [
        { text: "Il ceramista non sbaglia mai.", value: false, why: "Falso: «io sbaglio ogni giorno — e ogni errore mi insegna»." },
        { text: "Per un piatto servono tre ore di pennello.", value: true, why: "Lo dice el ceramista." },
        { text: "La meditazione è sempre seduta a occhi chiusi.", value: false, why: "Falso: a veces es de pie, con el pincel en la mano." },
      ],
    },
    {
      id: "md-b2-07-2", theme: "qui e ora", title: "Il sarto lento", titleEs: "El sastre lento", minutes: 4,
      paragraphs: [
        { it: "A Napoli esiste ancora una sartoria che confeziona abiti in sei settimane. Sei settimane per un vestito, nell'epoca della consegna in un giorno. Il vecchio sarto mi spiegò il calendario: «Tre prove, due settimane di riposo del tessuto, una settimana di cuciture a mano».", es: "En Nápoles existe todavía una sastrería que confecciona trajes en seis semanas. Seis semanas para un traje, en la era de la entrega en un día. El viejo sastre me explicó el calendario: «Tres pruebas, dos semanas de descanso del tejido, una semana de costuras a mano»." },
        { it: "«Riposo del tessuto?», chiesi. «Il tessuto è vivo», rispose, «ha viaggiato, ha sofferto il freddo del magazzino. Prima di tagliarlo, lo lascio distendere due settimane sul tavolo: se lo tagli nervoso, l'abito sarà nervoso». Che lezione di psicologia applicata alla lana! Da allora, prima di ogni decisione importante, «faccio riposare il tessuto»: lascio l'idea distendersi due giorni sul tavolo della mente, prima di tagliare. Le idee tagliate di fretta, come i tessuti, si sgualciscono nel tempo.", es: "«¿Descanso del tejido?», pregunté. «El tejido está vivo», respondió, «viajó, sufrió el frío del depósito. Antes de cortarlo, lo dejo distenderse dos semanas sobre la mesa: si lo corto nervioso, el traje quedará nervioso». ¡Qué lección de psicología aplicada a la lana! Desde entonces, antes de cada decisión importante, «dejo descansar el tejido»: dejo que la idea se distienda dos días sobre la mesa de la mente, antes de cortar. Las ideas cortadas con prisa, como los tejidos, se arrugan con el tiempo." },
      ],
      predict: { q: "Antes de leer: ¿por qué descansa el tejido dos semanas?", options: ["Porque está vivo: si se corta nervioso, el traje queda nervioso", "Porque el sastre está de vacaciones", "Por falta de clientes"], answer: 0, why: "«Il sarto lento»: la sabiduría del material." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Las decisiones, como los tejidos, necesitan descansar antes de cortarse", "La ropa hecha a mano es siempre mejor", "Hay que decidir siempre rápido"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El calendario del sastre: tres pruebas, dos semanas de descanso, costuras a mano", "Las ideas cortadas con prisa se arrugan con el tiempo"],
        distractors: ["El sastre usó una máquina para todo", "El autor se compró seis trajes"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Il tessuto è vivo: va lasciato distendere.", "Se lo tagli nervoso, l'abito sarà nervoso.", "Faccio riposare il tessuto anche per le idee.", "Le decisioni migliori si prendono in tre secondi, sempre e comunque."],
        intruder: 3, why: "Toda la lección del sastre va contra decidir con el tejido nervioso." },
    },
    {
      id: "md-b2-07-3", theme: "relax fisico", title: "La cucina del cuoco mindful", titleEs: "La cocina del chef mindful", minutes: 4,
      paragraphs: [
        { it: "Ho intervistato uno chef stellato che prima di ogni servizio fa una cosa strana: dieci minuti di silenzio in cucina, tutto lo staff fermo, le mani sul tavolo di acciaio. «La cucina», mi disse, «è un campo di battaglia: se arrivi in guerra agitato, perdi».", es: "Entrevisté a un chef con estrella que antes de cada servicio hace algo raro: diez minutos de silencio en la cocina, todo el equipo quieto, las manos sobre la mesa de acero. «La cocina», me dijo, «es un campo de batalla: si llegas a la guerra agitado, pierdes»." },
        { it: "Quel rituale — che i colleghi all'inizio deridevano — ha cambiato il clima della brigata: meno urla, meno piatti rotti, meno dimissioni. Il corpo dello chef lavora otto ore in piedi, a quaranta gradi, sotto pressione: è un atleta che nessuno allena. Il suo segreto non è la passione — la passione ce l'hanno tutti — ma la pausa: «La tensione la cucino via», dice. «Se io sono in pace, la cucina è in pace. Se la cucina è in pace, il cibo lo sente». Sarà suggestione. Ma i suoi piatti, da allora, hanno una calma che si assapora.", es: "Ese ritual — que los colegas al principio ridiculizaban — cambió el clima de la brigada: menos gritos, menos platos rotos, menos renuncias. El cuerpo del chef trabaja ocho horas de pie, a cuarenta grados, bajo presión: es un atleta que nadie entrena. Su secreto no es la pasión — la pasión todos la tienen — sino la pausa: «La tensión la cocino fuera», dice. «Si yo estoy en paz, la cocina está en paz. Si la cocina está en paz, la comida lo siente». Será sugestión. Pero sus platos, desde entonces, tienen una calma que se saborea." },
      ],
      predict: { q: "Antes de leer: ¿qué hace el chef antes de cada servicio?", options: ["Diez minutos de silencio con toda la brigada", "Un espresso doppio", "Una ducha fría"], answer: 0, why: "«Il cuoco mindful»: la calma antes de la batalla." },
      sequence: {
        instr: "Ordena la historia del ritual (1 = primero):",
        events: ["Lo chef introduce dieci minuti di silenzio prima del servizio", "Tutto lo staff fermo, le mani sul tavolo d'acciaio", "I colleghi all'inizio deridono il rituale", "Il clima cambia: meno urla, meno piatti rotti", "I piatti acquisiscono una calma che si assapora"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Prima di ogni servizio, dieci minuti di silenzio: tutto lo staff fermo, le mani sul tavolo. Se io sono in pace, la cucina è in pace; se la cucina è in pace, il cibo lo sente. La tensione si cucina via. La passione ce l'hanno tutti: la pausa, quasi nessuno.",
        questions: [
          { q: "Quanto dura il silenzio?", kind: "literal", options: ["Dieci minuti", "Dieci ore", "Dieci secondi"], answer: 0, why: "«Dieci minuti di silenzio»." },
          { q: "Dove sono le mani?", kind: "literal", options: ["Sul tavolo d'acciaio", "In tasca", "Sul telefono"], answer: 0, why: "«Le mani sul tavolo»." },
          { q: "Cosa ha quasi nessuno, secondo lo chef?", kind: "inferencial", options: ["La pausa", "La passione", "Il ristorante"], answer: 0, why: "«La passione ce l'hanno tutti: la pausa, quasi nessuno»." },
        ],
      },
    },
  ],

  "cu-b2-08": [
    {
      id: "md-b2-08-1", theme: "relax mentale", title: "Il digiuno digitale di gennaio", titleEs: "El ayuno digital de enero", minutes: 5,
      paragraphs: [
        { it: "Per tre anni ho fatto il digiuno digitale di gennaio: niente social per un mese. Il primo anno fu una rivelazione: dormivo meglio, leggevo di più, guardavo le persone negli occhi. Il secondo anno fu più facile. Il terzo anno ho capito il problema: a febbraio tornavo a casa, come tutti i digiuni finiscono in abbuffate.", es: "Durante tres años hice el ayuno digital de enero: nada de redes durante un mes. El primer año fue una revelación: dormía mejor, leía más, miraba a la gente a los ojos. El segundo año fue más fácil. El tercer año entendí el problema: en febrero volvía a los excesos, como todos los ayunos terminan en atracones." },
        { it: "Il digiuno insegna che si può stare senza; l'integrazione insegna a stare dentro, diversamente. Adesso non digiuno più: pratico la «dieta mediterranea digitale». Come a tavola: tre pasti al giorno, a orari fissi, a tavola apparecchiata — cioè il social lo apro due volte al giorno, seduto, mai in piedi, mai a letto, mai in bagno. E la domenica, come il ragù, le notifiche riposano. Non è privazione: è stile. La differenza tra il digiuno e la dieta è la differenza tra fuggire il mondo e abitarlo con misura.", es: "El ayuno enseña que se puede estar sin; la integración enseña a estar dentro, de otra manera. Ahora ya no ayuno: practico la «dieta mediterránea digital». Como en la mesa: tres comidas al día, a horarios fijos, en mesa puesta — es decir, las redes las abro dos veces al día, sentado, nunca de pie, nunca en la cama, nunca en el baño. Y el domingo, como el ragù, las notificaciones descansan. No es privación: es estilo. La diferencia entre el ayuno y la dieta es la diferencia entre huir del mundo y habitarlo con medida." },
      ],
      predict: { q: "Antes de leer: ¿qué problema tendrá el ayuno digital?", options: ["Termina en atracones de febrero", "Es imposible de empezar", "Cuesta demasiado dinero"], answer: 0, why: "«Il digiuno digitale»: del ayuno a la dieta." },
      quiz: [
        { q: "Cosa ha scoperto il primo anno di digiuno?", kind: "literal", options: ["Dormiva meglio, leggeva di più, guardava le persone negli occhi", "Aveva più follower", "Guadagnava di più"], answer: 0, why: "El primer párrafo lo describe." },
        { q: "Qual è il problema del digiuno?", kind: "literal", options: ["A febbraio finisce in abbuffate", "È troppo costoso", "Non funziona mai"], answer: 0, why: "«Come tutti i digiuni finiscono in abbuffate»." },
        { q: "Cosa è la «dieta mediterranea digitale»?", kind: "inferencial", options: ["Usar con horarios y modales fijos: dos veces al día, sentado, nunca en cama", "No usar nunca nada", "Usar solo los fines de semana"], answer: 0, why: "La analogía con la mesa: medida, no privación." },
        { q: "«Fuggire il mondo o abitarlo con medida». Cuál sería tu «dieta digital»?", kind: "critica", options: ["Horarios fijos y contextos limpios: la tecnología en su plato", "Ayuno total para siempre", "Uso libre sin reglas"], answer: 0, why: "La medida sostenible vence a la privación heroica." },
      ],
      vf: [
        { text: "Il terzo anno ha capito che i digiuni finiscono in abbuffate.", value: true, why: "Es la conclusión del primer párrafo." },
        { text: "Adesso apre i social in piedi, velocissimo.", value: false, why: "Falso: los abre sentado, dos veces al día." },
        { text: "La domenica le notifiche riposano.", value: true, why: "Como el ragù: descanso dominical." },
      ],
    },
    {
      id: "md-b2-08-2", theme: "qui e ora", title: "La fotografia che non scatto", titleEs: "La fotografía que no tomo", minutes: 4,
      paragraphs: [
        { it: "Al concerto di un grande pianista, il pubblico di cinquecento persone guardava lo schermo dei telefoni: tutti riprendevano il concerto che stavano perdendo. Io incluso: dieci minuti a cercare l'angolazione perfetta per un video che non avrei mai riguardato.", es: "En el concierto de un gran pianista, el público de quinientas personas miraba la pantalla de los teléfonos: todos grababan el concierto que estaban perdiendo. Yo incluido: diez minutos buscando el ángulo perfecto para un video que jamás volvería a ver." },
        { it: "Poi ho visto il vecchietto della fila davanti: mani sulle ginocchia, occhi chiusi, un sorriso leggero. Non riprendeva niente: riceveva tutto. Quella scena mi ha cambiato più del concerto. Da allora, per ogni evento bello, mi concedo una sola fotografia — e poi il telefono va in tasca. La memoria non sta nella memoria del telefono: sta nella presenza. Tra vent'anni non ricorderò il video: ricorderò il vecchietto, le sue mani sulle ginocchia, e la decisione di essere lì anch'io.", es: "Luego vi al viejito de la fila de adelante: manos sobre las rodillas, ojos cerrados, una sonrisa leve. No grababa nada: recibía todo. Esa escena me cambió más que el concierto. Desde entonces, para cada evento bello, me permito una sola fotografía — y luego el teléfono va al bolsillo. La memoria no está en la memoria del teléfono: está en la presencia. Dentro de veinte años no recordaré el video: recordaré al viejito, sus manos sobre las rodillas, y la decisión de estar allí también yo." },
      ],
      predict: { q: "Antes de leer: ¿qué hará el viejito de la fila de adelante?", options: ["Recibir el concierto con ojos cerrados, sin grabar", "Grabar con tres teléfonos", "Dormir profundamente"], answer: 0, why: "«La fotografia che non scatto»: presencia contra registro." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["La memoria está en la presencia, no en el registro: una foto y el teléfono a la bolsa", "Hay que grabar todo para no olvidar", "Los conciertos están prohibidos para mayores"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El público de quinientas personas miraba el concierto por la pantalla", "El autor pasó diez minutos buscando el ángulo de un video que nunca revisó"],
        distractors: ["El viejito le pidió el teléfono prestado", "El texto dice que las fotos están prohibidas siempre"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Il vecchietto aveva le mani sulle ginocchia e gli occhi chiusi.", "Non riprendeva niente: riceveva tutto.", "Mi concedo una sola fotografia, poi il telefono va in tasca.", "Per vivere davvero un momento bisogna riprenderlo da almeno tre angolazioni."],
        intruder: 3, why: "El texto afirma lo contrario: el registro múltiple es justamente lo que se pierde el momento." },
    },
    {
      id: "md-b2-08-3", theme: "relax fisico", title: "La camminata senza contapassi", titleEs: "La caminata sin contador de pasos", minutes: 4,
      paragraphs: [
        { it: "Per anni ho camminato con il contapassi: diecimila passi al giorno, una religione numerica. Un giorno l'orologio si è rotto e ho dovuto camminare «a sensi». È stata la migliore camminata della mia vita.", es: "Durante años caminé con el contador de pasos: diez mil pasos al día, una religión numérica. Un día el reloj se rompió y tuve que caminar «a sentidos». Fue la mejor caminata de mi vida." },
        { it: "Senza il numero da raggiungere, la camminata ha cambiato natura: non era più una consegna ma un'esperienza. Ho notato il gelsomino di un giardino che costeggio da tre anni senza mai annusarlo. Ho visto il cielo fare quattro colori. Ho sentito il ginocchio sinistro ringraziarmi. I numeri sono utili, ma trasformano tutto in dovere: perfino il respiro, se lo misuri, diventa un compito. Adesso l'orologio è riparato, ma resta a casa: io e la strada siamo tornati a parlare direttamente, senza interprete.", es: "Sin el número que alcanzar, la caminata cambió de naturaleza: ya no era una entrega sino una experiencia. Noté el jazmín de un jardín que costeo desde hace tres años sin jamás olerlo. Vi el cielo hacer cuatro colores. Sentí que la rodilla izquierda me agradecía. Los números son útiles, pero transforman todo en deber: incluso el respiro, si lo mides, se vuelve una tarea. Ahora el reloj está reparado, pero se queda en casa: yo y la calle volvimos a hablarnos directamente, sin intérprete." },
      ],
      predict: { q: "Antes de leer: ¿qué pasará cuando se rompa el reloj?", options: ["La mejor caminata: sin números, a sentidos", "Dejará de caminar para siempre", "Comprará tres relojes nuevos"], answer: 0, why: "«Senza contapassi»: la experiencia contra la métrica." },
      sequence: {
        instr: "Ordena la transformación (1 = primero):",
        events: ["Cammina per anni con il contapassi: diecimila passi", "Un giorno l'orologio si rompe", "Cammina «a sensi», senza numeri", "Scopre il gelsomino e i quattro colori del cielo", "L'orologio riparato resta a casa: parla direttamente con la strada"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Senza il contapassi, la camminata cambia natura: non è una consegna, è un'esperienza. Noti il gelsomino di un giardino, il cielo che fa quattro colori, il ginocchio che ringrazia. I numeri trasformano tutto in dovere. L'orologio è riparato, ma resta a casa: io e la strada parliamo direttamente.",
        questions: [
          { q: "Cosa cambia senza il contapassi?", kind: "literal", options: ["La natura della camminata: da consegna a esperienza", "Il prezzo delle scarpe", "Il colore dell'orologio"], answer: 0, why: "«Non è una consegna, è un'esperienza»." },
          { q: "Cosa nota per la prima volta?", kind: "literal", options: ["Il gelsomino di un giardino", "Un nuovo supermercato", "Un semaforo"], answer: 0, why: "«Il gelsomino di un giardino»." },
          { q: "Dove resta l'orologio riparato?", kind: "inferencial", options: ["A casa: ya no hace falta intérprete", "Al polso", "Venduto online"], answer: 0, why: "«Resta a casa: io e la strada parliamo direttamente»." },
        ],
      },
    },
  ],

  "cu-b2-09": [
    {
      id: "md-b2-09-1", theme: "spiritualità", title: "La valigia dell'emigrante", titleEs: "La maleta del emigrante", minutes: 5,
      paragraphs: [
        { it: "Nel museo dell'emigrazione di Genova c'è una sala piena di valigie. Non valigie preziose: scatole di latta, sporte di tela, fagotti legati con lo spago. Erano tutto quello che un milione di italiani portò con sé partendo per l'America. Guardandole, ho capito che emigrare è un atto spirituale: un distacco radicale che obbliga a chiedersi cosa conta davvero.", es: "En el museo de la emigración de Génova hay una sala llena de maletas. No maletas valiosas: cajas de lata, bolsas de tela, atados atados con cuerda. Eran todo lo que un millón de italianos llevó consigo al partir hacia América. Mirándolas, entendí que emigrar es un acto espiritual: un desapego radical que obliga a preguntarse qué importa de verdad." },
        { it: "Mia nonna partì nel 1952 con una valigia e un indirizzo scritto su un biglietto. «Quando ho chiuso la porta di casa», raccontava, «ho capito che casa non era la porta: era il modo in cui mia madre apparecchiava la tavola». Per tutta la vita, in due continenti, ha apparecchiato allo stesso modo. Le radici, alla fine, stanno nei gesti: si possono portare in una valigia di latta, e nessuna dogana le può fermare.", es: "Mi abuela partió en 1952 con una maleta y una dirección escrita en un papelito. «Cuando cerré la puerta de casa», contaba, «entendí que casa no era la puerta: era el modo en que mi madre ponía la mesa». Toda la vida, en dos continentes, puso la mesa igual. Las raíces, al final, están en los gestos: se pueden llevar en una maleta de lata, y ninguna aduana puede detenerlos." },
      ],
      predict: { q: "Antes de leer: ¿qué revelarán las maletas del museo?", options: ["Emigrar como acto espiritual: qué cuenta de verdad", "El precio de los billetes antiguos", "Las rutas de los barcos"], answer: 0, why: "«La valigia dell'emigrante»: desapego y raíces." },
      quiz: [
        { q: "Cosa c'è nella sala del museo di Genova?", kind: "literal", options: ["Valigie semplici: scatole di latta, sporte di tela", "Ori e gioielli", "Solo fotografie"], answer: 0, why: "El primer párrafo las describe." },
        { q: "Quando è partita la nonna?", kind: "literal", options: ["Nel 1952", "Nel 2002", "Nel 1852"], answer: 0, why: "«Mia nonna partì nel 1952»." },
        { q: "Dove stavano le radici, secondo la nonna?", kind: "inferencial", options: ["En los gestos, como el modo de poner la mesa", "En la puerta de casa", "En el barrio"], answer: 0, why: "«Le radici stanno nei gesti»." },
        { q: "«Nessuna dogana può fermare le radici». Qué gestos «de raíz» llevarías contigo?", kind: "critica", options: ["Los gestos cotidianos heredados: comida, palabras, ceremonias pequeñas", "Ninguno: hay que cortar con todo", "Solo los objetos caros"], answer: 0, why: "La identidad portable vive en la práctica, no en las cosas." },
      ],
      vf: [
        { text: "Le valigie del museo erano preziose e di pelle fine.", value: false, why: "Falso: cajas de lata, telas, fardos con cuerda." },
        { text: "La nonna ha apparecchiato allo stesso modo in due continenti.", value: true, why: "Es el gesto-raíz del relato." },
        { text: "Chiudere la porta le fece capire cosa era davvero «casa».", value: true, why: "«Casa non era la porta: era il modo di apparecchiare»." },
      ],
    },
    {
      id: "md-b2-09-2", theme: "qui e ora", title: "Il ritorno", titleEs: "El regreso", minutes: 4,
      paragraphs: [
        { it: "Dopo quindici anni all'estero sono tornato al mio paese per un mese. Tutti si aspettavano che piangessi davanti alla casa dell'infanzia. Invece la cosa che mi ha steso è stata un distributore automatico: il caffè della stazione, quello cattivo, identico a quando avevo sedici anni.", es: "Después de quince años en el extranjero volví a mi pueblo por un mes. Todos esperaban que llorara frente a la casa de la infancia. En cambio, lo que me tumbó fue una máquina expendedora: el café de la estación, ese malísimo, idéntico a cuando tenía dieciséis años." },
        { it: "La nostalgia, ho scoperto, non abita nei monumenti: abita nei dettagli piccolissimi, nei cattivi caffè e nelle targhe storte. Per un mese sono stato un turista della mia stessa vita — e questo è il segreto: tornare senza pretendere che niente sia cambiato, nemmeno io. Il paese era lo stesso; io no; il caffè sì. In quel triangolo — paese uguale, io diverso, caffè uguale — c'era tutto il tempo che era passato, in una tazzina di plastica.", es: "La nostalgia, descubrí, no habita en los monumentos: habita en los detalles pequeñísimos, en los malos cafés y en las placas torcidas. Durante un mes fui un turista de mi propia vida — y este es el secreto: volver sin pretender que nada haya cambiado, ni siquiera yo. El pueblo era el mismo; yo no; el café sí. En ese triángulo — pueblo igual, yo distinto, café igual — estaba todo el tiempo que había pasado, en una tacita de plástico." },
      ],
      predict: { q: "Antes de leer: ¿qué «derribará» emocionalmente al autor?", options: ["El café idéntico de la estación: la nostalgia de los detalles", "La casa de la infancia", "El aeropuerto nuevo"], answer: 0, why: "«Il ritorno»: la nostalgia de lo pequeño." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["La nostalgia vive en los detalles mínimos, no en los monumentos: volver es habitar el contraste", "Volver a casa siempre decepciona", "El café italiano es el mejor del mundo"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Todos esperaban que llorara frente a la casa de la infancia", "Fue un mes como «turista de su propia vida»"],
        distractors: ["El autor decidió quedarse para siempre", "El texto dice que cambiar es traicionar el pasado"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["La nostalgia abita nei dettagli piccolissimi.", "Sono stato un turista della mia stessa vita.", "Tornare senza pretendere che niente sia cambiato.", "Il segreto è esigere che tutto e tutti restino esattamente come nel 1990."],
        intruder: 3, why: "El texto propone aceptar el cambio; exigir que nada cambie arruina el regreso." },
    },
    {
      id: "md-b2-09-3", theme: "relax mentale", title: "La terza cultura", titleEs: "La tercera cultura", minutes: 4,
      paragraphs: [
        { it: "I figli degli emigranti vivono una condizione che i sociologi chiamano «terza cultura»: non sono pienamente del paese dei genitori, né del paese dove crescono. Per anni l'hanno considerata una ferita; oggi si comincia a vederla anche come una risorsa: l'abilità di abitare le soglie.", es: "Los hijos de los emigrantes viven una condición que los sociólogos llaman «tercera cultura»: no son plenamente del país de los padres ni del país donde crecen. Durante años la consideraron una herida; hoy se empieza a ver también como un recurso: la habilidad de habitar los umbrales." },
        { it: "Una mia amica, argentina di genitori italiani cresciuta in Germania, mi ha dato la definizione più bella: «Io non sono un ponte — i ponti stanno fermi. Io sono un traduttore ambulante: porto un mondo nell'altro e tutte e due le lingue mi restano un po' strette». Le lingue strette, dice, sono la sua libertà: la costringono a scegliere le parole, quindi a pensare. Chi sta comodo in una sola lingua raramente si accorge che le parole sono scelte. Chi ne abita due o tre lo sa da sempre — e questa consapevolezza è una forma silenziosa di saggezza.", es: "Una amiga mía, argentina de padres italianos criada en Alemania, me dio la definición más bella: «Yo no soy un puente — los puentes están quietos. Soy una traductora ambulante: llevo un mundo al otro y ambas lenguas me quedan un poco estrechas». Las lenguas estrechas, dice, son su libertad: la obligan a elegir las palabras, por lo tanto a pensar. Quien está cómodo en una sola lengua rara vez se da cuenta de que las palabras son elecciones. Quien habita dos o tres lo sabe desde siempre — y esa conciencia es una forma silenciosa de sabiduría." },
      ],
      predict: { q: "Antes de leer: ¿cómo redefine la amiga su identidad?", options: ["Traductora ambulante con lenguas estrechas", "Un puente entre países", "Una turista permanente"], answer: 0, why: "«La terza cultura»: la herida vuelta recurso." },
      sequence: {
        instr: "Ordena el cambio de perspectiva (1 = primero):",
        events: ["I figli degli emigranti vivono la «terza cultura»", "Per anni è stata considerata una ferita", "Oggi si vede anche come risorsa: abitare le soglie", "L'amica si definisce traduttrice ambulante", "Le lingue strette la costringono a pensare: libertà e saggezza"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Io non sono un ponte: i ponti stanno fermi. Sono una traduttrice ambulante. Tutte e due le lingue mi restano un po' strette, e questa è la mia libertà: la strettezza mi costringe a scegliere le parole, quindi a pensare. Chi sta comodo in una sola lingua raramente pensa alle parole come scelte.",
        questions: [
          { q: "Perché non è un ponte?", kind: "literal", options: ["I ponti stanno fermi, lei si muove", "I ponti sono brutti", "Non le piacciono i fiumi"], answer: 0, why: "«I ponti stanno fermi»." },
          { q: "Come le stanno le lingue?", kind: "literal", options: ["Un po' strette", "Perfettamente comode", "Troppo larghe"], answer: 0, why: "«Tutte e due le lingue mi restano un po' strette»." },
          { q: "Cosa le dà la strettezza?", kind: "inferencial", options: ["Libertà: obliga a elegir palabras y pensar", "Ansiedad pura", "Nada"], answer: 0, why: "«La strettezza mi costringe a scegliere le parole, quindi a pensare»." },
        ],
      },
    },
  ],

  "cu-b2-10": [
    {
      id: "md-b2-10-1", theme: "spiritualità", title: "Il sapere e la saggezza", titleEs: "El saber y la sabiduría", minutes: 5,
      paragraphs: [
        { it: "Un professore di filosofia, alla sua ultima lezione, non parlò di Kant né di Hegel. Portò una clessidra e disse: «In quarant'anni di carriera ho pubblicato sessanta articoli. Pochi li ricorderanno. La mia insegnante delle elementari, che non pubblicò nulla, mi insegnò a guardare le nuvole. Di lei mi ricordo tutto».", es: "Un profesor de filosofía, en su última clase, no habló de Kant ni de Hegel. Trajo un reloj de arena y dijo: «En cuarenta años de carrera publiqué sesenta artículos. Pocos los recordarán. Mi maestra de primaria, que no publicó nada, me enseñó a mirar las nubes. De ella lo recuerdo todo»." },
        { it: "La differenza tra sapere e saggezza, disse, sta nel destinatario: il sapere si pubblica, la saggezza si trasmette. Il sapere risponde alle domande; la saggezza insegna quali domande valgono. E le nuvole? «Le nuvole», concluse, «sono l'esercizio più antico di attenzione gratuita: non servono a niente, e proprio per questo insegnano tutto». L'aula, piena di dottorandi ambiziosi, rimase in silenzio per un minuto intero. Fu la lezione più citata della sua carriera: sessantuno articoli, alla fine, se contiamo anche quella.", es: "La diferencia entre saber y sabiduría, dijo, está en el destinatario: el saber se publica, la sabiduría se transmite. El saber responde a las preguntas; la sabiduría enseña cuáles preguntas valen. ¿Y las nubes? «Las nubes», concluyó, «son el ejercicio más antiguo de atención gratuita: no sirven para nada, y justo por eso enseñan todo». El aula, llena de doctorandos ambiciosos, quedó en silencio un minuto entero. Fue la clase más citada de su carrera: sesenta y un artículos, al final, si contamos también esa." },
      ],
      predict: { q: "Antes de leer: ¿qué traerá el profesor a su última clase?", options: ["Una clessidra y una lección sobre nuvole", "Su último libro", "Un examen sorpresa"], answer: 0, why: "«Il sapere e la saggezza»: la lección no escrita." },
      quiz: [
        { q: "Quanti articoli ha pubblicato in carriera?", kind: "literal", options: ["Sessanta", "Sei", "Seicento"], answer: 0, why: "«Ho pubblicato sessanta articoli»." },
        { q: "Chi gli insegnò a guardare le nuvole?", kind: "literal", options: ["L'insegnante delle elementari", "Un monaco buddista", "Sua moglie"], answer: 0, why: "«La mia insegnante delle elementari»." },
        { q: "Qual è la differenza tra sapere e saggezza?", kind: "inferencial", options: ["El saber se publica y responde; la sabiduría se transmite y selecciona las preguntas", "El saber es más antiguo", "No hay diferencia"], answer: 0, why: "Frase central de la lección." },
        { q: "«L'attenzione gratuita non serve a niente e insegna tutto». Qué prácticas «inútiles» cultivas?", kind: "critica", options: ["Mirar nubes, caminar sin meta, escuchar sin objetivo: atención sin transacción", "Ninguna: todo debe ser productivo", "Solo las que se pueden publicar"], answer: 0, why: "La atención gratuita entrena la capacidad que ninguna técnica entrena." },
      ],
      vf: [
        { text: "Il sapere si trasmette, la saggezza si pubblica.", value: false, why: "Falso: es al revés: el saber se publica, la sabiduría se transmite." },
        { text: "Le nuvole sono «attenzione gratuita».", value: true, why: "Definición del profesor." },
        { text: "L'aula rimase in silenzio per un minuto.", value: true, why: "«Rimase in silenzio per un minuto intero»." },
      ],
    },
    {
      id: "md-b2-10-2", theme: "meditazione", title: "La biblioteca come tempio", titleEs: "La biblioteca como templo", minutes: 4,
      paragraphs: [
        { it: "Le grandi biblioteche sono gli ultimi templi laici dove il silenzio è ancora una regola, non un incidente. Entrare nella Sala di lettura della Braidense, a Milano, è un'esperienza fisica: il rumore della città si stacca dalle spalle come uno zaino.", es: "Las grandes bibliotecas son los últimos templos laicos donde el silencio es todavía una regla, no un accidente. Entrar en la Sala de lectura de la Braidense, en Milán, es una experiencia física: el ruido de la ciudad se despega de los hombros como una mochila." },
        { it: "Ho chiesto a un bibliotecario come mai la gente, anche i ragazzi, lì dentro parla piano senza che nessuno lo chieda. «Il silenzio qui è architettura», mi ha spiegato. «L'altezza del soffitto, la distanza tra i tavoli, la luce dall'alto: tutto dice «piano». Non serve il cartello». È la lezione che ogni ambiente potrebbe dare: lo spazio forma il comportamento più di ogni regola. Chi progetta una scuola, un ufficio, una casa, in realtà progetta il silenzio — o il rumore — delle persone che la vivranno.", es: "Le pregunté a un bibliotecario por qué la gente, también los jóvenes, allí dentro habla bajo sin que nadie lo pida. «El silencio aquí es arquitectura», me explicó. «La altura del techo, la distancia entre las mesas, la luz desde arriba: todo dice «piano». No hace falta el cartel». Es la lección que cualquier ambiente podría dar: el espacio forma el comportamiento más que cualquier regla. Quien diseña una escuela, una oficina, una casa, en realidad diseña el silencio — o el ruido — de las personas que la vivirán." },
      ],
      predict: { q: "Antes de leer: ¿por qué la gente habla bajo en la biblioteca?", options: ["El silencio es arquitectura: el espacio lo dicta", "Por miedo al bibliotecario", "Porque está prohibido por ley"], answer: 0, why: "«La biblioteca come tempio»: espacio y comportamiento." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["El espacio forma el comportamiento: proyectar un lugar es proyectar su silencio", "Los carteles son la mejor pedagogía", "Las bibliotecas están obsoletas"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["En la Braidense el ruido de la ciudad se desprende como una mochila", "Altura del techo, distancia entre mesas y luz desde arriba «dicen piano»"],
        distractors: ["El bibliotecario pone multas por hablar", "El texto dice que los jóvenes gritan en las bibliotecas"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Il silenzio qui è architettura.", "Non serve il cartello: lo spazio parla.", "Chi progetta una casa progetta il suo silenzio.", "Il modo migliore per ottenere silenzio: riempire la sala di cartelli con scritto VIETATO PARLARE."],
        intruder: 3, why: "El texto dice justamente que el cartel no hace falta: el espacio enseña." },
    },
    {
      id: "md-b2-10-3", theme: "relax mentale", title: "Lo studio delle nuvole", titleEs: "El estudio de las nubes", minutes: 4,
      paragraphs: [
        { it: "Nel 1803 un farmacista inglese, Luke Howard, diede alle nuvole i nomi che usiamo ancora: cirrus, cumulus, stratus. Prima di lui erano «vaporacci» senza dignità scientifica. Howard le guardò per anni, dal cortile di casa, con un metodo semplice: osservare senza fretta di concludere.", es: "En 1803 un farmacéutico inglés, Luke Howard, les dio a las nubes los nombres que usamos todavía: cirrus, cumulus, stratus. Antes de él eran «vapores» sin dignidad científica. Howard las miró durante años, desde el patio de su casa, con un método simple: observar sin prisa por concluir." },
        { it: "Goethe, che lo lesse, scrisse una poesia in suo onore: chi dà un nome a una cosa, gli regala dignità. La storia insegna due cose sullo studio. Primo: la rivoluzione scientifica può iniziare in un cortile, senza fondi, con il solo strumento dell'attenzione paziente. Secondo: nominare è già capire — Howard non spiegò le nuvole, le chiamò per nome, e quel gesto bastò a fondare una scienza. Anche oggi, davanti a un problema, il primo passo non è risolverlo: è guardarlo abbastanza a lungo da trovargli il nome giusto.", es: "Goethe, que lo leyó, escribió un poema en su honor: quien da nombre a una cosa, le regala dignidad. La historia enseña dos cosas sobre el estudio. Primero: la revolución científica puede comenzar en un patio, sin fondos, con el único instrumento de la atención paciente. Segundo: nombrar ya es entender — Howard no explicó las nubes, las llamó por su nombre, y ese gesto bastó para fundar una ciencia. También hoy, frente a un problema, el primer paso no es resolverlo: es mirarlo el tiempo suficiente para encontrarle el nombre correcto." },
      ],
      predict: { q: "Antes de leer: ¿qué hizo Luke Howard con las nubes?", options: ["Les dio nombre: nombrar ya es entender", "Les disparó cohetes", "Las dibujó con fines decorativos"], answer: 0, why: "«Lo studio delle nuvole»: la atención paciente." },
      sequence: {
        instr: "Ordena la historia (1 = primero):",
        events: ["Per anni Howard osserva le nuvole dal cortile di casa", "Nel 1803 dà loro i nomi: cirrus, cumulus, stratus", "Le nuvole acquistano dignità scientifica", "Goethe gli dedica una poesia", "Oggi: il primo passo davanti a un problema è trovargli il nome giusto"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Nel milleottocentotré, Luke Howard diede alle nuvole i nomi che usiamo ancora: cirrus, cumulus, stratus. Le osservò per anni, dal cortile di casa, senza fretta di concludere. Chi dà un nome a una cosa le regala dignità. Il primo passo davanti a un problema non è risolverlo: è guardarlo fino a trovargli il nome giusto.",
        questions: [
          { q: "Chi era Luke Howard?", kind: "literal", options: ["Un farmacista inglese", "Un pilota", "Un cuoco francese"], answer: 0, why: "«Un farmacista inglese»." },
          { q: "Dove osservava le nuvole?", kind: "literal", options: ["Dal cortile di casa", "Da un aereo", "Da un osservatorio"], answer: 0, why: "«Dal cortile di casa»." },
          { q: "Qual è il primo passo davanti a un problema?", kind: "inferencial", options: ["Mirarlo hasta encontrarle el nombre justo", "Resolverlo de inmediato", "Ignorarlo"], answer: 0, why: "«Guardarlo fino a trovargli il nome giusto»." },
        ],
      },
    },
  ],

  "cu-b2-11": [
    {
      id: "md-b2-11-1", theme: "qui e ora", title: "Il design del silenzio", titleEs: "El diseño del silencio", minutes: 4,
      paragraphs: [
        { it: "Il grande design italiano è famoso per le sedie e le automobili, ma il suo capolavoro invisibile è un altro: la luce e il silenzio delle case. Chi entra in una casa toscana di pietra, in agosto, sente subito il progetto: muri spessi che trattengono il fresco, finestre alte che catturano la luce senza il calore, stanze che invitano a parlare piano.", es: "El gran diseño italiano es famoso por las sillas y los automóviles, pero su obra maestra invisible es otra: la luz y el silencio de las casas. Quien entra en una casa toscana de piedra, en agosto, siente enseguida el proyecto: muros gruesos que retienen el fresco, ventanas altas que capturan la luz sin el calor, habitaciones que invitan a hablar bajo." },
        { it: "Il buon design, mi disse un architetto, «non è quello che vedi: è quello che senti dopo un'ora». La sedia giusta è quella di cui dimentichi l'esistenza; la casa giusta è quella che ti abbassa la voce senza che tu lo decida. Siamo circondati da oggetti che urlano — notifiche, schermi, luci aggressive — e chiamiamo progresso questa rumorosità. Forse il design del futuro sarà quello che toglie invece di aggiungere: il lusso ultimo, in un mondo saturo, è il silenzio progettato.", es: "El buen diseño, me dijo un arquitecto, «no es el que ves: es el que sientes después de una hora». La silla correcta es aquella de cuya existencia te olvidas; la casa correcta es la que te baja la voz sin que tú lo decidas. Estamos rodeados de objetos que gritan — notificaciones, pantallas, luces agresivas — y llamamos progreso a esta bulla. Quizá el diseño del futuro será el que quite en lugar de agregar: el lujo último, en un mundo saturado, es el silencio proyectado." },
      ],
      predict: { q: "Antes de leer: ¿cuál es la obra maestra invisible del diseño italiano?", options: ["La luz y el silencio de las casas", "Los zapatos de lujo", "Los logotipos de moda"], answer: 0, why: "«Il design del silenzio»: lo que no se ve." },
      quiz: [
        { q: "Cosa fanno i muri spessi di una casa toscana?", kind: "literal", options: ["Trattengono il fresco", "Si scaldano subito", "Cantiscono"], answer: 0, why: "«Muri spessi che trattengono il fresco»." },
        { q: "Com'è la sedia giusta, secondo l'architetto?", kind: "literal", options: ["Quella di cui dimentichi l'esistenza", "Quella che tutti ammirano", "Quella più costosa"], answer: 0, why: "«La sedia giusta è quella di cui dimentichi l'esistenza»." },
        { q: "Cosa sarà il lusso ultimo in un mondo saturo?", kind: "inferencial", options: ["El silencio proyectado: quitar en vez de agregar", "El objeto más caro", "La pantalla más grande"], answer: 0, why: "Última frase del texto." },
        { q: "«Il buon design è quello che senti dopo un'ora». Qué objetos de tu casa «te bajan la voz»?", kind: "critica", options: ["Los que invitan calma: luz cálida, materiales nobles, silencio", "Ninguno: todos gritan", "Solo los objetos de diseño carísimo"], answer: 0, why: "El ambiente sereno es diseño aplicado a la conducta." },
      ],
      vf: [
        { text: "Le finestre alte catturano il calore insieme alla luce.", value: false, why: "Falso: capturan la luz sin el calor." },
        { text: "La casa giusta ti abbassa la voce senza che tu lo decida.", value: true, why: "Frase del arquitecto." },
        { text: "L'autore chiama progresso la rumorosità degli oggetti.", value: false, why: "Falso: lo llama bulla y cuestiona llamarlo progreso." },
      ],
    },
    {
      id: "md-b2-11-2", theme: "relax fisico", title: "La sedia che insegna a stare", titleEs: "La silla que enseña a estar", minutes: 4,
      paragraphs: [
        { it: "C'è una sedia, nei musei di design, che tutti fotografano e nessuno capisce: la sedia Zen di Shaker, in legno grezzo, senza un chilometro di linea in più. Gli Shaker la costruivano con una regola precisa: ogni oggetto deve essere utile e onesto; il superfluo è un insulto alla materia.", es: "Hay una silla, en los museos de diseño, que todos fotografían y nadie entiende: la silla Zen de los Shaker, en madera sin tratar, sin un milímetro de línea de más. Los Shaker la construían con una regla precisa: cada objeto debe ser útil y honesto; lo superfluo es un insulto a la materia." },
        { it: "Ma la lezione più profonda non è estetica: è posturale. Chi si siede su una sedia Shaker non si accascia — la sedia non lo permette. Ti tiene dritto come un maestro antico, e dopo dieci minuti la schiena respira. Nel mondo delle sedie-divano che ci ingoiano, una sedia che insegna a stare è quasi un oggetto rivoluzionario: ricorda al corpo che esiste una postura della dignità. La bellezza utile, alla fine, è anche questa: un oggetto che ti tratta come il migliore di te stesso.", es: "Pero la lección más profunda no es estética: es postural. Quien se sienta en una silla Shaker no se desploma — la silla no lo permite. Te mantiene derecho como un maestro antiguo, y después de diez minutos la espalda respira. En el mundo de las sillas-sillón que nos tragan, una silla que enseña a estar es casi un objeto revolucionario: le recuerda al cuerpo que existe una postura de la dignidad. La belleza útil, al final, también es esto: un objeto que te trata como el mejor de ti mismo." },
      ],
      predict: { q: "Antes de leer: ¿qué enseña la silla Shaker?", options: ["A stare: postura de dignidad", "A dormirse cómodamente", "A fotografiar mejor"], answer: 0, why: "«La sedia che insegna a stare»: diseño y postura." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Un objeto honesto trata al cuerpo con dignidad: diseño como ética postural", "Las sillas duras son un castigo", "El diseño es solo decoración"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["La regla Shaker: cada objeto útil y honesto, lo superfluo insulta la materia", "Quien se sienta en ella no se desploma: la espalda respira"],
        distractors: ["Los Shaker construían sillas de oro macizo", "El texto recomienda trabajar de pie siempre"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Ogni oggetto deve essere utile e onesto.", "La sedia ti tiene dritto come un maestro antico.", "Un oggetto può trattarti come il migliore di te stesso.", "Il vero design: una poltrona che ti ingoia e ti addormenta davanti alla TV."],
        intruder: 3, why: "El texto critica justamente las sillas que nos tragan." },
    },
    {
      id: "md-b2-11-3", theme: "meditazione", title: "Il restauro lento", titleEs: "La restauración lenta", minutes: 4,
      paragraphs: [
        { it: "Ho visto un restauratore lavorare per un mese su un affresco del Quattrocento. Con un bisturi, un cotton fioco e una lente, toglieva lo sporco di cinquecento anni, un millimetro al giorno. «La fretta», mi disse, «è il nemico numero uno: lo sporco lo hanno messo in cinque secoli, non lo tolgo in cinque giorni».", es: "Vi a un restaurador trabajar durante un mes en un fresco del Quattrocento. Con un bisturí, un hisopo y una lupa, quitaba la suciedad de quinientos años, un milímetro por día. «La prisa», me dijo, «es el enemigo número uno: la suciedad la pusieron en cinco siglos, no la quito en cinco días»." },
        { it: "Guardandolo ho pensato che anche noi siamo affreschi sotto sporco: abitudini, fretta, rumore si depositano a strati sul fondo che eravamo. Il restauro di sé non è un weekend motivazionale: è un bisturi, un millimetro al giorno, per anni. E come nell'affresco, sotto lo sporco l'immagine originale è sempre intatta: non si tratta di diventare qualcun altro, ma di togliere quello che non siamo. Il restauratore lo sa: non dipinge niente. Si limita a scoprire.", es: "Mirándolo pensé que también nosotros somos frescos bajo suciedad: hábitos, prisa, ruido se depositan en capas sobre el fondo que éramos. La restauración de sí no es un fin de semana motivacional: es un bisturí, un milímetro al día, durante años. Y como en el fresco, bajo la suciedad la imagen original está siempre intacta: no se trata de volverse otro, sino de quitar lo que no somos. El restaurador lo sabe: no pinta nada. Se limita a descubrir." },
      ],
      predict: { q: "Antes de leer: ¿qué revela la metáfora del restaurador?", options: ["El autoconocimiento como restauración: quitar lo que no somos", "Que hay que pintarse entero de nuevo", "Que la restauración es un buen negocio"], answer: 0, why: "«Il restauro lento»: millimetro a millimetro." },
      sequence: {
        instr: "Ordena la lección del restaurador (1 = primero):",
        events: ["Il restauratore lavora un mese su un affresco", "Toglie lo sporco un millimetro al giorno", "Dice: la fretta è il nemico numero uno", "L'autore capisce: anche noi siamo affreschi sotto sporco", "Il restauro di sé: non dipingere, scoprire"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Lo sporco lo hanno messo in cinque secoli: non lo tolgo in cinque giorni. La fretta è il nemico numero uno. Anche noi siamo affreschi sotto strati di sporco: abitudini, fretta, rumore. Sotto, l'immagine originale è intatta. Il restauro di sé non dipinge niente: si limita a scoprire, un millimetro al giorno.",
        questions: [
          { q: "Chi è il nemico numero uno?", kind: "literal", options: ["La fretta", "Il bisturi", "Il museo"], answer: 0, why: "«La fretta è il nemico numero uno»." },
          { q: "Com'è l'immagine originale sotto lo sporco?", kind: "literal", options: ["Sempre intatta", "Distrutta", "Inesistente"], answer: 0, why: "«L'immagine originale è sempre intatta»." },
          { q: "Cosa fa il restauro di sé?", kind: "inferencial", options: ["No pinta nada: descubre, un milímetro al día", "Cambia la imagen entera", "Tapa el suciedad"], answer: 0, why: "«Non dipinge niente: si limita a scoprire»." },
        ],
      },
    },
  ],

  "cu-b2-12": [
    {
      id: "md-b2-12-1", theme: "relax mentale", title: "La presentazione del secolo", titleEs: "La presentación del siglo", minutes: 5,
      paragraphs: [
        { it: "Steve Jobs preparava ogni keynote come un rituale: due giorni di prova completa, una stanza d'albergo trasformata in teatro, e una regola ferrea: nessuno slide con più di una idea. Ma il dettaglio che mi ha sempre colpito è un altro: dieci minuti prima di uscire sul palco, spariva.", es: "Steve Jobs preparaba cada keynote como un ritual: dos días de ensayo completo, una habitación de hotel transformada en teatro, y una regla férrea: ninguna diapositiva con más de una idea. Pero el detalle que siempre me llamó la atención es otro: diez minutos antes de salir al escenario, desaparecía." },
        { it: "Nessuno sapeva dove. Il suo assistente lo rivelò anni dopo: dieci minuti di silenzio, occhi chiusi, respiro lento. Non visualizzava il successo né ripassava le slide: svuotava. «Il palco», diceva, «premia i vuoti: chi è pieno di sé non ha spazio per il pubblico». La più grande presentazione della storia dell'informatica — quella dell'iPhone, 2007 — iniziò non con una slide, ma con un uomo che aveva appena finito di non fare niente. Il silenzio di dieci minuti divenne il famoso «one more thing» che nessuno vide: il primo, il più importante, quello prima dell'applauso.", es: "Nadie sabía dónde. Su asistente lo reveló años después: diez minutos de silencio, ojos cerrados, respiración lenta. No visualizaba el éxito ni repasaba las diapositivas: se vaciaba. «El escenario», decía, «premia a los vacíos: quien está lleno de sí no tiene espacio para el público». La mayor presentación de la historia de la informática — la del iPhone, 2007 — comenzó no con una diapositiva, sino con un hombre que acababa de terminar de no hacer nada. El silencio de diez minutos se volvió el famoso «one more thing» que nadie vio: el primero, el más importante, el de antes del aplauso." },
      ],
      predict: { q: "Antes de leer: ¿qué hacía Jobs 10 minutos antes de salir al escenario?", options: ["Diez minutos de silencio: vaciarse", "Repasar las slides una última vez", "Beber tres espressos"], answer: 0, why: "«La presentazione del secolo»: el vacío previo." },
      quiz: [
        { q: "Come preparava le keynote?", kind: "literal", options: ["Due giorni di prova, una regola: una idea per slide", "Dieci minuti la sera prima", "Non preparava"], answer: 0, why: "El primer párrafo." },
        { q: "Cosa faceva nei dieci minuti prima di uscire?", kind: "literal", options: ["Silenzio, occhi chiusi, respiro lento: svuotava", "Chiamava sua madre", "Controllava le email"], answer: 0, why: "Lo reveló el asistente." },
        { q: "Perché «il palco premia i vuoti»?", kind: "inferencial", options: ["Quien está lleno de sí no tiene espacio para el público", "Porque el vacío da miedo al público", "Porque así se ahorra tiempo"], answer: 0, why: "La frase de Jobs citada en el texto." },
        { q: "El «one more thing» invisible: qué haría tú antes de una presentación importante?", options: ["Vaciar: silencio y respiración, no repaso ansioso", "Repasar hasta el último segundo", "Mirar el teléfono para distraerme"], answer: 0, why: "La presencia nace del vacío previo, no del llenado.", kind: "critica" },
      ],
      vf: [
        { text: "Jobs visualizzava il successo nei dieci minuti.", value: false, why: "Falso: «non visualizzava il successo… svuotava»." },
        { text: "Nessuna slide con più di una idea.", value: true, why: "Regla férrea del texto." },
        { text: "La keynote dell'iPhone iniziò con una slide.", value: false, why: "Falso: empezó con el silencio de diez minutos." },
      ],
    },
    {
      id: "md-b2-12-2", theme: "meditazione", title: "Il discorso perfetto", titleEs: "El discurso perfecto", minutes: 4,
      paragraphs: [
        { it: "Un premio Nobel della letteratura, prima di una lectio magistralis davanti a tremila persone, fu visto fare una cosa strana: toccare il leggio, lentamente, per un minuto intero. Un giornalista gli chiese cosa stesse facendo. «Sto conoscendo il leggio», rispose. «Passeremo due ore insieme: è giusto presentarci».", es: "Un premio Nobel de literatura, antes de una lectio magistralis frente a tres mil personas, fue visto hacer algo raro: tocar el atril, lentamente, durante un minuto entero. Un periodista le preguntó qué estaba haciendo. «Estoy conociendo el atril», respondió. «Pasaremos dos horas juntos: es justo presentarnos»." },
        { it: "Sembrava una battuta da vecchio scrittore. Era una tecnica di presenza: toccando il leggio portava la mente dalla sala enorme («tremila persone!») al punto di contatto («questo legno, qui, ora»). Il discorso perfetto non nasce dalla gestione della paura, ma dalla riduzione del campo: quando tutto si restringe al contatto con il leggio, la voce si stabilizza da sola. Chi parla in pubblico spende il novanta per cento dell'ansia a pensare al pubblico. Il trucco del Nobel rovescia la proporzione: il pubblico è un'ipotesi, il leggio è reale.", es: "Parecía un chiste de viejo escritor. Era una técnica de presencia: tocando el atril llevaba la mente de la sala enorme («¡tres mil personas!») al punto de contacto («esta madera, aquí, ahora»). El discurso perfecto no nace del manejo del miedo, sino de la reducción del campo: cuando todo se estrecha al contacto con el atril, la voz se estabiliza sola. Quien habla en público gasta el noventa por ciento de la ansiedad pensando en el público. El truco del Nobel invierte la proporción: el público es una hipótesis, el atril es real." },
      ],
      predict: { q: "Antes de leer: ¿por qué el Nobel toca el leggio un minuto?", options: ["Reducir el campo a un punto de contacto real", "Porque el leggio estaba sucio", "Para ganar tiempo"], answer: 0, why: "«Il discorso perfetto»: presencia por contacto." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Reducir el campo de atención a un punto de contacto real estabiliza la voz y la presencia", "Hay que ignorar por completo al público", "Los premios Nobel son excéntricos"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El Nobel dijo que estaba «conociendo» el atril antes de dos horas juntos", "Quien habla gasta el 90% de la ansiedad pensando en el público"],
        distractors: ["El periodista se enojó con el Nobel", "El texto dice que la técnica solo funciona con atriles de madera"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Sto conoscendo il leggio: passeremo due ore insieme.", "Quando tutto si restringe al contatto, la voce si stabilizza.", "Il pubblico è un'ipotesi, il leggio è reale.", "Prima di parlare, pensa intensamente al giudizio di ognuna delle tremila persone."],
        intruder: 3, why: "Es justo el 90% de ansiedad desperdiciada que el truco del Nobel evita." },
    },
    {
      id: "md-b2-12-3", theme: "qui e ora", title: "L'applauso e il respiro", titleEs: "El aplauso y el respiro", minutes: 4,
      paragraphs: [
        { it: "La scena si vede in ogni teatro: l'attore finisce il monologo, il pubblico applaude, e l'attore — se è un grande attore — non ringrazia subito. Resta fermo per tre secondi, gli occhi bassi, il respiro visibile. Poi, e solo poi, inchina la testa.", es: "La escena se ve en todos los teatros: el actor termina el monólogo, el público aplaude, y el actor — si es un gran actor — no agradece de inmediato. Queda quieto durante tres segundos, los ojos bajos, el respiro visible. Luego, y solo luego, inclina la cabeza." },
        { it: "Quei tre secondi hanno un nome nel gergo teatrale: «assaporare il vuoto». L'attore non è maleducato: sta digerendo. Il personaggio lo ha attraversato per due ore e il corpo ha bisogno di un confine — un cancelletto — tra la finzione e la realtà. Chi non lo fa, e ringrazia di corsa, spesso si porta a casa il personaggio come un'ombra. La lezione vale fuori dal teatro: dopo ogni cosa intensa — un esame, un litigio, un progetto finito — tre secondi di respiro prima di rispondere al mondo. Il mondo può aspettare tre secondi: tu, forse, no.", es: "Esos tres segundos tienen un nombre en la jerga teatral: «saborear el vacío». El actor no es maleducado: está digiriendo. El personaje lo atravesó durante dos horas y el cuerpo necesita una frontera — una puertita — entre la ficción y la realidad. Quien no lo hace, y agradece a las carreras, a menudo se lleva el personaje a casa como una sombra. La lección vale fuera del teatro: después de cada cosa intensa — un examen, una pelea, un proyecto terminado — tres segundos de respiro antes de responder al mundo. El mundo puede esperar tres segundos: tú, quizá, no." },
      ],
      predict: { q: "Antes de leer: ¿qué hacen los grandes actores tras el aplauso?", options: ["Tres segundos quietos: «assaporare il vuoto»", "Un saludo inmediato al público", "Una reverencia doble"], answer: 0, why: "«L'applauso e il respiro»: el límite entre ficción y realidad." },
      sequence: {
        instr: "Ordena el rito del actor (1 = primero):",
        events: ["Finisce il monologo", "Il pubblico applaude", "L'attore resta fermo tre secondi, gli occhi bassi", "Il respiro visibile digerisce il personaggio", "Solo poi inchina la testa"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Dopo ogni cosa intensa — un esame, un litigio, un progetto finito — tre secondi di respiro prima di rispondere al mondo. Gli attori lo chiamano assaporare il vuoto: un cancelletto tra la finzione e la realtà. Il mondo può aspettare tre secondi. Tu, forse, no.",
        questions: [
          { q: "Quanti secondi di respiro?", kind: "literal", options: ["Tre", "Trecento", "Mezz'ora"], answer: 0, why: "«Tre secondi di respiro»." },
          { q: "Come lo chiamano gli attori?", kind: "literal", options: ["Assaporare il vuoto", "Il salto nel buio", "Il terzo atto"], answer: 0, why: "«Assaporare il vuoto»." },
          { q: "Chi può aspettare tre secondi?", kind: "inferencial", options: ["El mundo; tú quizá no", "Nadie", "Solo los actores"], answer: 0, why: "«Il mondo può aspettare tre secondi: tu, forse, no»." },
        ],
      },
    },
  ],
};
