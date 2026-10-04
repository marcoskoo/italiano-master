import type { MindReading } from "../cambridge-mind";

/* ═══ v9.13 · Letture tematiche C1 · Meditazione, spiritualità, qui e ora,
   relax fisico e mentale — 3 por unidad comunicativa (C1: unidades 1-10). */

export const MIND_C1: Record<string, MindReading[]> = {
  "cu-c1-01": [
    {
      id: "md-c1-01-1", theme: "meditazione", title: "La scrittura come pratica contemplativa", titleEs: "La escritura como práctica contemplativa", minutes: 5,
      paragraphs: [
        { it: "Chi scrive per mestiere lo sa: la pagina bianca non è un nemico, è uno specchio. Nei primi dieci minuti di ogni sessione di scrittura, la mente porta a riva i pensieri più estranei —Commissioni da pagare, conversazioni lasciate a metà, ansie senza indirizzo. Il principiante li combatte; lo scrittore maturo li depone sulla pagina e prosegue.", es: "Quien escribe por oficio lo sabe: la página en blanco no es un enemigo, es un espejo. En los primeros diez minutos de cada sesión de escritura, la mente trae a la orilla los pensamientos más ajenos — facturas por pagar, conversaciones inconclusas, ansias sin dirección. El principiante los combate; el escritor maduro los deposita en la página y continúa." },
        { it: "La scrittura accademica, in particolare, richiede una forma di attenzione che somiglia alla meditazione: mantenere un oggetto davanti alla mente abbastanza a lungo da vederlo in profondità. Il metodo è banale e severo insieme: una domanda sola per sessione, niente multitasking, un timer visibile. Chi lo pratica scopre che la chiarezza non è un dono che precede la scrittura, ma un effetto che la segue.", es: "La escritura académica, en particular, exige una forma de atención que se parece a la meditación: mantener un objeto frente a la mente el tiempo suficiente para verlo en profundidad. El método es banal y severo a la vez: una sola pregunta por sesión, nada de multitarea, un temporizador visible. Quien lo practica descubre que la claridad no es un don que precede a la escritura, sino un efecto que la sigue." },
      ],
      predict: { q: "Antes de leer: ¿qué relación propondrá el texto entre escribir y meditar?", options: ["Ninguna: son oficios opuestos", "Escribir exige una atención contemplativa sostenida", "Meditar impide escribir bien"], answer: 1, why: "«Pratica contemplativa»: el título ya propone la tesis." },
      quiz: [
        { q: "Cosa porta a riva la mente nei primi dieci minuti?", kind: "literal", options: ["I pensieri più estranei: fatture, conversazioni, ansie", "Idee geniali e immediate", "Il bibliography completa"], answer: 0, why: "El primer párrafo lo describe con precisión." },
        { q: "Cosa fa lo scrittore maturo con i pensieri estranei?", kind: "inferencial", options: ["Los deposita en la página y sigue: no los combate", "Los ignora por completo", "Los convierte en el tema del ensayo"], answer: 0, why: "«Li depone sulla pagina e prosegue»." },
        { q: "La claridad como efecto y no como don: qué cambia en tu manera de escribir?", kind: "critica", options: ["Escribir se vuelve práctica: la claridad llega escribiendo, no antes", "Nada: sin inspiración no hay texto", "Solo los genios escriben con claridad"], answer: 0, why: "Desplazar la claridad del don al efecto vuelve el método posible." },
      ],
      vf: [
        { text: "La pagina bianca è un nemico da sconfiggere.", value: false, why: "Falso: «non è un nemito, è uno specchio»." },
        { text: "Il método incluye una domanda sola per sessione.", value: true, why: "«Una domanda sola per sessione, niente multitasking»." },
        { text: "La chiarezza precede la scrittura.", value: false, why: "Falso: «è un effetto che la segue»." },
      ],
    },
    {
      id: "md-c1-01-2", theme: "spiritualità", title: "Il ritmo dell'anima accademica", titleEs: "El ritmo del alma académica", minutes: 5,
      paragraphs: [
        { it: "L'università contemporanea misura tutto — pubblicazioni, citazioni, indici — tranne l'unica variabile che determina la qualità del pensiero a lungo termine: il ritmo interiore del ricercatore. Un collega, docente di storia medievale, ha ricostruito la giornata dei monaci copisti: sette ore di lavoro, due di lettura lenta, una di silenzio assoluto. Nessuno di noi arriva a sei ore di silenzio; ma anche mezz'ora, sostiene, «cambia la qualità delle domande che poni alle fonti».", es: "La universidad contemporánea mide todo — publicaciones, citas, índices — salvo la única variable que determina la calidad del pensamiento a largo plazo: el ritmo interior del investigador. Un colega, docente de historia medieval, reconstruyó la jornada de los monjes copistas: siete horas de trabajo, dos de lectura lenta, una de silencio absoluto. Ninguno de nosotros llega a seis horas de silencio; pero también media hora, sostiene, «cambia la calidad de las preguntas que planteas a las fuentes»." },
        { it: "La sua tesi è provocatoria: le grandi opere medievali non nacquero nonostante il silenzio istituzionale, ma grazie ad esso. Il ritmo lento non era un limite tecnico: era un'infrastruttura spirituale del pensiero. L'accademia moderna, con i suoi tempi brevi e le metriche continue, ha demolito quell'infrastruttura senza sostituirla. Il rimedio, paradossalmente, è alla portata di chiunque: un'ora protetta al giorno, un calendario che difenda la profondità dalla frammentazione. Non si tratta di nostalgia: si tratta di ingegneria dell'attenzione.", es: "Su tesis es provocadora: las grandes obras medievales no nacieron a pesar del silencio institucional, sino gracias a él. El ritmo lento no era un límite técnico: era una infraestructura espiritual del pensamiento. La academia moderna, con sus tiempos breves y sus métricas continuas, demolió esa infraestructura sin reemplazarla. El remedio, paradójicamente, está al alcance de cualquiera: una hora protegida al día, un calendario que defienda la profundidad de la fragmentación. No se trata de nostalgia: se trata de ingeniería de la atención." },
      ],
      predict: { q: "Antes de leer: ¿qué miden las universidades y qué olvidan medir?", options: ["Miden publicaciones, olvidan el ritmo interior del pensador", "Miden todo correctamente", "No miden nada"], answer: 0, why: "El contraste entre métricas y ritmo interior anticipa la tesis." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["El ritmo lento era una infraestructura espiritual del pensamiento que conviene reconstruir a escala propia", "Hay que volver al medievo integralmente", "Las métricas académicas son perfectas"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["La jornada de los monjes copistas: siete horas de trabajo, dos de lectura lenta, una de silencio", "El remedio actual: una hora protegida al día contra la fragmentación"],
        distractors: ["El colega propone seis horas de silencio para todos", "El texto dice que la nostalgia es la solución"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Sette ore di lavoro, due di lettura lenta, una di silenzio.", "Il ritmo lento era un'infrastruttura spirituale del pensiero.", "Un'ora protetta al giorno difende la profondità.", "La soluzione è riempire ogni buco del calendario con una riunione breve."],
        intruder: 3, why: "El texto defiende exactamente lo contrario: proteger el calendario de la fragmentación." },
    },
    {
      id: "md-c1-01-3", theme: "relax mentale", title: "Il rumore della biblioteca digitale", titleEs: "El ruido de la biblioteca digital", minutes: 5,
      paragraphs: [
        { it: "Il ricercatore di oggi lavora circondato da più testi di quanti un umanista del Novecento leggesse in una vita intera. Eppure qualcosa si è perso strada facendo: la differenza tra consultare e abitare un testo. Il database si consulta; il libro si abita. La consultazione è rapida, utile, rumorosa: cento schede aperte, mille riferimenti, un'ansia da completezza che nessuna completezza soddisfa mai.", es: "El investigador de hoy trabaja rodeado de más textos de cuantos un humanista del Novecento leería en una vida entera. Y sin embargo algo se perdió en el camino: la diferencia entre consultar y habitar un texto. La base de datos se consulta; el libro se habita. La consulta es rápida, útil, ruidosa: cien fichas abiertas, mil referencias, una ansiedad de completitud que ninguna completitud satisface jamás." },
        { it: "Un maestro di paleografia diede ai suoi allievi una regola che vale per ogni disciplina: «Per ogni cento pagine consultate, dieci pagine abitate». Abitare significa rileggere, annotare a mano, discutere ad alta voce, lasciare che il testo risponda. La consulta informa; l'abitazione trasforma. Chi cerca solo informazione, nella infinita biblioteca digitale, resta eternamente all'ingresso.", es: "Un maestro de paleografía dio a sus alumnos una regla que vale para toda disciplina: «Por cada cien páginas consultadas, diez páginas habitadas». Habitar significa releer, anotar a mano, discutir en voz alta, dejar que el texto responda. La consulta informa; la habitación transforma. Quien busca solo información, en la infinita biblioteca digital, queda eternamente en la entrada." },
      ],
      predict: { q: "Antes de leer: ¿qué distinción propondrá el texto?", options: ["Consultar vs habitar un texto", "Libros de papel vs ebook", "Bibliotecas viejas y nuevas"], answer: 0, why: "El título anuncia el ruido de lo digital; la tesis es la distinción clave." },
      sequence: {
        instr: "Ordena la regla del paleógrafo y sus efectos (1 = primero):",
        events: ["Il ricercatore consulta cento pagine nel database", "Sceglie dieci pagine da abitare", "Le rilegge, le annota a mano, le discute ad alta voce", "Il testo comincia a rispondere alle sue domande", "La consulta lo informava; l'abitazione lo trasforma"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Per ogni cento pagine consultate, dieci pagine abitate. Abitare un testo significa rileggerlo, annotarlo a mano, discuterlo ad alta voce. La consultazione informa; l'abitazione trasforma. Chi cerca solo informazione resta eternamente all'ingresso della biblioteca digitale.",
        questions: [
          { q: "Quante pagine bisogna abitare, secondo la regola?", kind: "literal", options: ["Dieci su cento consultate", "Tutte le cento", "Nessuna"], answer: 0, why: "«Per ogni cento pagine consultate, dieci pagine abitate»." },
          { q: "Cosa significa abitare un testo?", kind: "literal", options: ["Rileggere, annotare a mano, discutere ad alta voce", "Sfogliare in fretta", "Fotocopiarlo"], answer: 0, why: "«Rileggerlo, annotarlo a mano, discuterlo ad alta voce»." },
          { q: "Dove resta chi cerca solo informazione?", kind: "inferencial", options: ["Eternamente all'ingresso", "Nel cuore della biblioteca", "Nessuna parte"], answer: 0, why: "«Resta eternamente all'ingresso»." },
        ],
      },
    },
  ],

  "cu-c1-02": [
    {
      id: "md-c1-02-1", theme: "relax mentale", title: "La persuasione che non alza la voce", titleEs: "La persuasión que no levanta la voz", minutes: 5,
      paragraphs: [
        { it: "Nella retorica classica esisteva una distinzione che il dibattito contemporaneo ha dimenticato: tra il persuadere e il vincere. Chi vuole vincere alza la voce, interrompe, umilia; chi vuole persuadere fa qualcosa di più difficile — ascolta fino a trovare il punto in cui l'altro potrebbe cambiare idea, e costruisce il ponte esattamente lì.", es: "En la retórica clásica existía una distinción que el debate contemporáneo ha olvidado: entre persuadir y vencer. Quien quiere vencer levanta la voz, interrumpe, humilla; quien quiere persuadir hace algo más difícil — escucha hasta encontrar el punto en que el otro podría cambiar de opinión, y construye el puente exactamente allí." },
        { it: "Gli studi sulla negoziazione confermano l'intuizione antica: le parti che parlano più lentamente e fanno più domande ottengono accordi più durevoli. La calma, in questo campo, non è gentilezza: è tecnica. L'interlocutore teso difende le posizioni; l'interlocutore ascoltato riconsidera gli interessi. La domanda resta l'unico strumento retorico che apre senza forzare: chi domanda bene ha già spostato la conversazione.", es: "Los estudios sobre negociación confirman la intuición antigua: las partes que hablan más lentamente y hacen más preguntas obtienen acuerdos más duraderos. La calma, en este campo, no es amabilidad: es técnica. El interlocutor tenso defiende posiciones; el interlocutor escuchado reconsidera intereses. La pregunta sigue siendo la única herramienta retórica que abre sin forzar: quien pregunta bien ya movió la conversación." },
      ],
      predict: { q: "Antes de leer: ¿qué distinción clásica recuperará el texto?", options: ["Persuadir vs vencer", "Hablar vs callar", "Ganar vs perder"], answer: 0, why: "«Che non alza la voce»: la persuasión silenciosa." },
      quiz: [
        { q: "Cosa fa chi vuole persuadere?", kind: "literal", options: ["Ascolta fino a trovare il punto dove l'altro potrebbe cambiare idea", "Alza la voce per farsi sentire", "Interrompe con battute"], answer: 0, why: "El primer párrafo lo define." },
        { q: "Cosa ottengono le parti che parlano lentamente e fanno domande?", kind: "literal", options: ["Accordi più durevoli", "Vittorie immediate", "Più applausi"], answer: 0, why: "«Accordi più durevoli»." , why: "«Ottengono accordi più durevoli»." },
        { q: "Perché la calma è «tecnica» y no gentilezza?", kind: "inferencial", options: ["Porque produce efectos medibles: el escuchado reconsidera intereses", "Porque es más rápida", "Porque evita cualquier conflicto"], answer: 0, why: "«L'interlocutore ascoltato riconsidera gli interessi»." },
        { q: "«Chi domanda bene ha già spostato la conversazione». Qué pregunta usarías tú para abrir un debate difícil?", kind: "critica", options: ["Una que invite al otro a exponer sus intereses reales, no sus posiciones", "Una que demuestre mi superioridad", "Ninguna: mejor afirmar fuerte"], answer: 0, why: "La pregunta que expone intereses desarma posiciones rígidas." },
      ],
      vf: [
        { text: "Chi vuole vincere interrompe e umilia.", value: true, why: "Descripción del texto." },
        { text: "L'interlocutore ascoltato difende le posizioni con più forza.", value: false, why: "Falso: reconsidera los intereses." },
        { text: "La domanda apre senza forzare.", value: true, why: "«L'unico strumento retorico che apre senza forzare»." },
      ],
    },
    {
      id: "md-c1-02-2", theme: "qui e ora", title: "Il discorso che parte dal respiro", titleEs: "El discurso que parte del respiro", minutes: 5,
      paragraphs: [
        { it: "I manuali di public speaking insegnano la struttura, le slide, i gesti. Pochi insegnano la prima competenza, quella che decide tutte le altre: dove si trova il tuo respiro mentre parli. Un oratore col respiro alto e corto trasmette urgenza; un oratore col respiro basso e lento trasmette autorità — non perché sia più autorevole, ma perché il pubblico, senza saperlo, respira con lui.", es: "Los manuales de oratoria enseñan la estructura, las diapositivas, los gestos. Pocos enseñan la primera competencia, la que decide todas las demás: dónde se encuentra tu respiración mientras hablas. Un orador con el respiro alto y corto transmite urgencia; un orador con el respiro bajo y lento transmite autoridad — no porque sea más autoritario, sino porque el público, sin saberlo, respira con él." },
        { it: "Un coach teatrale milanese apre ogni corso con un esercizio di tre minuti: leggere un paragrafo qualsiasi inspirando sul punto e espirando sulla virgola. Sembra un dettaglio tecnico; è una rivoluzione. Chi impara a posare la voce sul respiro scopre di avere tutto il tempo del mondo — e il pubblico, che purtroppo ha smesso di ascoltare i contenuti, non ha mai smesso di ascoltare i corpi. La calma, alla fine, è l'unico argomento che nessuno può confutare.", es: "Un coach teatral milanés abre cada curso con un ejercicio de tres minutos: leer un párrafo cualquiera inspirando en el punto y espirando en la coma. Parece un detalle técnico; es una revolución. Quien aprende a apoyar la voz en el respiro descubre que tiene todo el tiempo del mundo — y el público, que por desgracia dejó de escuchar los contenidos, nunca dejó de escuchar los cuerpos. La calma, al final, es el único argumento que nadie puede refutar." },
      ],
      predict: { q: "Antes de leer: ¿qué decidirá la calidad de un discurso según el texto?", options: ["Dónde está el respiro mientras se habla", "La calidad de las slides", "El volumen de la voz"], answer: 0, why: "«Che parte dal respiro»: la base física de la oratoria." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["La voz apoyada en el respiro transmite autoridad real: el público respira con el orador", "Las slides son lo más importante", "Hablar rápido convence más"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El ejercicio del coach: inspirar en el punto, espirar en la coma", "El público nunca dejó de escuchar los cuerpos, aunque dejó de escuchar contenidos"],
        distractors: ["El coach enseña a hablar más rápido", "El texto dice que la calma se puede confutar fácilmente"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Un oratore col respiro basso trasmette autorità.", "Il pubblico respira con lui, senza saperlo.", "Posa la voce sul respiro: hai tutto il tempo del mondo.", "Il segreto: parlare il più velocemente possibile per dimostrare competenza."],
        intruder: 3, why: "El texto enseña lo contrario: el respiro lento da tiempo y autoridad." },
    },
    {
      id: "md-c1-02-3", theme: "meditazione", title: "Il silenzio nella stanza delle riunioni", titleEs: "El silencio en la sala de reuniones", minutes: 5,
      paragraphs: [
        { it: "Un mediator professionista ha descritto il suo strumento più potente: il silenzio di otto secondi. Dopo una frase difficile, invece di riempire il vuoto con una rassicurazione, conta mentalmente fino a otto. Nel mondo delle riunioni, dove il silenzio genera panico, quei secondi sembrano un'eternità — ed è precisamente questa eternità che fa lavorare le parti in causa.", es: "Un mediador profesional describió su herramienta más poderosa: el silencio de ocho segundos. Después de una frase difícil, en lugar de llenar el vacío con un consuelo, cuenta mentalmente hasta ocho. En el mundo de las reuniones, donde el silencio genera pánico, esos segundos parecen una eternidad — y es justamente esa eternidad la que hace trabajar a las partes." },
        { it: "Il silenzio, spiega, non è assenza: è spazio. Le frasi importanti hanno bisogno di tempo per essere capite, e quel tempo nessuno lo concede spontaneamente. Nel vuoto che il mediatore lascia aperto, accadono le cose che la parola copre: la riflessione, il pentimento, il coraggio di rivedere una posizione. Chi teme il silenzio delle riunioni, in realtà, teme ciò che il silenzio rivela.", es: "El silencio, explica, no es ausencia: es espacio. Las frases importantes necesitan tiempo para ser comprendidas, y ese tiempo nadie lo concede espontáneamente. En el vacío que el mediador deja abierto, suceden las cosas que la palabra cubre: la reflexión, el arrepentimiento, el coraje de revisar una posición. Quien teme el silencio de las reuniones, en realidad, teme lo que el silencio revela." },
      ],
      predict: { q: "Antes de leer: ¿cuál será la herramienta más poderosa del mediador?", options: ["El silencio de ocho segundos", "Un argumento perfecto", "La voting rápida"], answer: 0, why: "«Il silenzio nella stanza»: el vacío productivo." },
      sequence: {
        instr: "Ordena la técnica del mediador (1 = primero):",
        events: ["Una parte pronuncia una frase difficile", "Il mediatore non riempie il vuoto con una rassicurazione", "Conta mentalmente fino a otto", "Nel silenzio, le parti riflettono e rivedono le posizioni", "Il vuoto fa lavorare ciò che la parola copriva"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Dopo una frase difficile, il mediatore non riempie il vuoto: conta fino a otto secondi. Il silenzio non è assenza, è spazio. Le frasi importanti hanno bisogno di tempo per essere capite. Nel vuoto accadono le cose che la parola copre: la riflessione, il pentimento, il coraggio di rivedere una posizione.",
        questions: [
          { q: "Fino a quanto conta il mediatore?", kind: "literal", options: ["Fino a otto", "Fino a cento", "Fino a ieri"], answer: 0, why: "«Conta fino a otto secondi»." },
          { q: "Cosa non è il silenzio?", kind: "literal", options: ["Assenza", "Spazio", "Tempo"], answer: 0, why: "«Il silenzio non è assenza, è spazio»." },
          { q: "Cosa accade nel vuoto?", kind: "inferencial", options: ["Reflexión, arrepentimiento, coraje de revisar", "Nada de nada", "Más discusiones"], answer: 0, why: "«La riflessione, il pentimento, il coraggio di rivedere una posizione»." },
        ],
      },
    },
  ],

  "cu-c1-03": [
    {
      id: "md-c1-03-1", theme: "relax mentale", title: "Il telegiornale delle dieci", titleEs: "El telediario de las diez", minutes: 5,
      paragraphs: [
        { it: "Un ricercatore ha misurato l'effetto di venti minuti di telegiornale sulla fisiologia degli spettatori: cortisolo in aumento, respiro accorciato, attenzione iper-vigile. Non era un esperimento sulla cattiva informazione — era un telegiornale perfettamente normale. La conclusione, pubblicata con cautela, era sconcertante: la forma del notiziario serale, costruita su emergenze concatenate, produce nell'organismo una risposta di allarme, indipendentemente dal contenuto.", es: "Un investigador midió el efecto de veinte minutos de telediario sobre la fisiología de los espectadores: cortisol en aumento, respiración acortada, atención hipervigilante. No era un experimento sobre la mala información — era un telediario perfectamente normal. La conclusión, publicada con cautela, era desconcertante: la forma del noticiero nocturno, construida sobre emergencias encadenadas, produce en el organismo una respuesta de alarma, independiente del contenido." },
        { it: "La proposta dei media literacy più avanzati non è il digiuno di notizie — il cittadino informato è un bene prezioso — ma la «dieta informata»: sapere in che ordine e con quale stato d'animo si riceve l'informazione. Notizie al mattino e non alla sera, mai a stomaco vuoto di senso, mai in quantità illimitata. Chi legge dieci minuti di quotidiano con attenzione sa più di chi guarda tre ore di rotocalchi parlati; e soprattutto, dorme meglio. L'informazione, come il cibo, non vale solo per quello che contiene: vale per come viene assimilata.", es: "La propuesta de las alfabetizaciones mediáticas más avanzadas no es el ayuno de noticias — el ciudadano informado es un bien precioso — sino la «dieta informada»: saber en qué orden y con qué estado de ánimo se recibe la información. Noticias por la mañana y no por la noche, nunca con el estómago vacío de sentido, nunca en cantidad ilimitada. Quien lee diez minutos de periódico con atención sabe más que quien mira tres horas de magazines hablados; y sobre todo, duerme mejor. La información, como la comida, no vale solo por lo que contiene: vale por cómo se asimila." },
      ],
      predict: { q: "Antes de leer: ¿qué descubrirá el experimento?", options: ["La forma del telediario produce alarma fisiológica, no solo el contenido", "Que las noticias son todas falsas", "Que la TV es buena para dormir"], answer: 0, why: "«Il telegiornale delle dieci»: la forma como mensaje." },
      quiz: [
        { q: "Cosa è aumentato dopo venti minuti di telegiornale?", kind: "literal", options: ["Il cortisolo", "La serotonina", "L'appetito"], answer: 0, why: "«Cortisolo in aumento»." },
        { q: "La risposta di allarme dipendeva dal contenuto?", kind: "inferencial", options: ["No: dalla forma — emergenze concatenate", "Sì: solo noticias graves", "Non si sa"], answer: 0, why: "«Indipendentemente dal contenuto»." },
        { q: "Qué es la «dieta informada» y qué regla aplicarías primero?", kind: "critica", options: ["Saber orden y estado de ánimo: noticias al mattino, nunca alla sera", "Ver más horas de TV para informarse mejor", "Evitar toda noticia para siempre"], answer: 0, why: "La secuencia y el estado con que se recibe la información determinan su efecto." },
      ],
      vf: [
        { text: "La proposta dei media literacy è il digiuno completo di notizie.", value: false, why: "Falso: es la «dieta informada», no el ayuno." },
        { text: "Chi legge dieci minuti con attenzione sa più di chi guarda tre ore di rotocalchi.", value: true, why: "Comparación explícita del texto." },
        { text: "L'informazione vale solo per quello che contiene.", value: false, why: "Falso: «vale anche per come viene assimilata»." },
      ],
    },
    {
      id: "md-c1-03-2", theme: "qui e ora", title: "Il giornalismo che guarda piano", titleEs: "El periodismo que mira despacio", minutes: 5,
      paragraphs: [
        { it: "Esiste una tradizione giornalistica minore che in Italia ha nome: il racconto di provincia. Niente breaking news, niente rotture: un cronista che passa un mese in un paese di tremila abitanti e ne descrive la vita con la pazienza di un naturalista. Il risultato, spesso, dice più dell'Italia di qualsiasi indagine nazionale.", es: "Existe una tradición periodística menor que en Italia tiene nombre: el relato de provincia. Nada de breaking news, nada de escándalos: un cronista que pasa un mes en un pueblo de tres mil habitantes y describe su vida con la paciencia de un naturalista. El resultado, a menudo, dice más de Italia que cualquier encuesta nacional." },
        { it: "Il segreto di questi reportage è un dato tecnico imbarazzante: il tempo. Dove il giornalismo mainstream misura l'attenzione in secondi, il cronista di provincia la misura in stagioni. Un vecchio maestro lo riassumeva così: «La notizia è quello che accade mentre tu guardi da un'altra parte. Io mi sono limitato, per quarant'anni, a guardare dalla parte giusta». Il che è, a ben vedere, l'esatta definizione della presenza — applicata, con metodo, al mestiere di raccontare il mondo.", es: "El secreto de estos reportajes es un dato técnico vergonzante: el tiempo. Donde el periodismo mainstream mide la atención en segundos, el cronista de provincia la mide en estaciones. Un viejo maestro lo resumía así: «La noticia es lo que sucede mientras tú miras hacia otro lado. Yo me he limitado, durante cuarenta años, a mirar hacia el lado correcto». Que es, bien visto, la definición exacta de la presencia — aplicada, con método, al oficio de contar el mundo." },
      ],
      predict: { q: "Antes de leer: ¿qué mide el cronista de provincia donde el mainstream mide segundos?", options: ["La atención en estaciones", "Los clicks", "Los segundos de video"], answer: 0, why: "«Che guarda piano»: lentitud como método periodístico." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["La presencia sostenida es un método periodístico: mirar el lado correcto durante tiempo", "La provincia no interesa a nadie", "Solo el periodismo nacional es serio"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El cronista pasa un mes en un pueblo de tres mil habitantes", "La frase del maestro: la noticia sucede mientras miras hacia otro lado"],
        distractors: ["El maestro trabajó solo cuatro años", "El texto dice que los reportages de provincia son irrelevantes"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Il cronista misura l'attenzione in stagioni.", "La notizia è quello che accade mentre guardi da un'altra parte.", "Ho guardato, per quarant'anni, dalla parte giusta.", "Il buon giornismo: pubblica per primo, verifica dopo, se c'è tempo."],
        intruder: 3, why: "El texto celebra la paciencia del naturalista; publicar sin verificar es lo contrario." },
    },
    {
      id: "md-c1-03-3", theme: "spiritualità", title: "L'obitorio delle parole", titleEs: "El depósito de las palabras", minutes: 5,
      paragraphs: [
        { it: "Ogni epoca uccide parole. La nostra ne ha uccisa una che gli antichi consideravano centrale: «quies» — la quiete come stato di pienezza, non come ausenza di lavoro. Un lessicografo ha contato le occorrenze nei giornali degli ultimi vent'anni: la parola «quiete» appare quasi solo nelle pubblicità di villette. Siamo rimasti con «relax», che è commerciale, e «riposo», che è medico. La quiete, come categoria dell'anima, è diventata un immobile.", es: "Cada época mata palabras. La nuestra mató una que los antiguos consideraban central: «quies» — la quietud como estado de plenitud, no como ausencia de trabajo. Un lexicógrafo contó las ocurrencias en los periódicos de los últimos veinte años: la palabra «quietud» aparece casi solo en los anuncios de casas de campo. Nos quedamos con «relax», que es comercial, y «descanso», que es médico. La quietud, como categoría del alma, se volvió un inmueble." },
        { it: "La perdita lessicale non è mai innocente: ciò che non si nomina, smette di essere cercato. I monaci del Medioevo avevano un lessico intero per gli stati quieti — quies, silentium, hesychia — perché li coltivavano come si coltiva un campo. La nostra civiltà ha dismantellato il campo e si chiede, con sempre maggiori ansia, perché il pane della calma scarseggi. La prima resistenza possibile è paradossalmente piccola: reimparare la parola. Dire «sto cercando la quiete» e non «devo rilassarmi» cambia, lentissimamente, il paesaggio interiore e persino quello immobiliare.", es: "La pérdida léxica nunca es inocente: lo que no se nombra, deja de buscarse. Los monjes del Medioevo tenían un léxico entero para los estados quietos — quies, silentium, hesychia — porque los cultivaban como se cultiva un campo. Nuestra civilización desmanteló el campo y se pregunta, con ansia creciente, por qué escasea el pan de la calma. La primera resistencia posible es paradójicamente pequeña: reaprender la palabra. Decir «busco la quietud» y no «debo relajarme» cambia, lentísimamente, el paisaje interior e incluso el inmobiliario." },
      ],
      predict: { q: "Antes de leer: ¿qué palabra ha «muerto» en nuestra época?", options: ["Quies: la quietud como plenitud del alma", "Relax: la palabra comercial", "Riposo: la palabra médica"], answer: 0, why: "«L'obitorio delle parole»: lexicografía y espíritu." },
      sequence: {
        instr: "Ordena el argumento (1 = primero):",
        events: ["L'epoca uccide la parola «quies»", "Restano «relax» (commerciale) e «riposo» (medico)", "Ciò che non si nomina smette di essere cercato", "La civiltà smonta il campo della quiete e chiede perché scarseggia", "Reimparare la parola: piccola resistenza che cambia il paesaggio"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Ciò che non si nomina smette di essere cercato. La parola quies, la quiete come pienezza, oggi vive solo nelle pubblicità di villette. Ci restano relax, che è commerciale, e riposo, che è medico. Reimpara la parola: dire «sto cercando la quiete» cambia, lentamente, il paesaggio interiore.",
        questions: [
          { q: "Dove vive oggi la parola «quiete»?", kind: "literal", options: ["Nelle pubblicità di villette", "Nei giornali di economia", "Nei testi universitari"], answer: 0, why: "«Quasi solo nelle pubblicità di villette»." },
          { q: "Cosa smette di essere cercato?", kind: "literal", options: ["Ciò che non si nomina", "Ciò che è antico", "Ciò che è difficile"], answer: 0, why: "«Ciò che non si nomina smette di essere cercato»." },
          { q: "Cosa cambia reimparare la parola?", kind: "inferencial", options: ["El paisaje interior, lentamente", "Nada absolutamente", "Solo el mercado inmobiliario"], answer: 0, why: "«Cambia, lentamente, il paesaggio interiore»." },
        ],
      },
    },
  ],

  "cu-c1-04": [
    {
      id: "md-c1-04-1", theme: "meditazione", title: "Il mediatore vuoto", titleEs: "El mediador vacío", minutes: 5,
      paragraphs: [
        { it: "Nella tradizione della mediazione professionale esiste un principio controintuitivo: il mediatore migliore è quello che entra nella stanza senza una soluzione in mente. Non per pigrizia, ma per tecnica: chi arriva con la soluzione preconfezionata ascolta solo i dati che la confermano; chi arriva vuoto ascolta tutto.", es: "En la tradición de la mediación profesional existe un principio contraintuitivo: el mejor mediador es el que entra en la sala sin una solución en mente. No por pereza, sino por técnica: quien llega con la solución preconfeccionada escucha solo los datos que la confirman; quien llega vacío escucha todo." },
        { it: "Un docente di negotiation lo chiamava «il principio del bicchiere»: se il tuo bicchiere è già pieno, non c'è spazio per l'acqua dell'altro. La preparazione del mediatore, paradossalmente, consiste nel prepararsi a non essere preparati — studiare il contesto, sì, ma anche svuotare le proprie attese prima di aprire la porta. Non è un esercizio da weekend motivazionale: è la condizione tecnica che rende possibile il lavoro. Il vuoto, in quel mestiere, non è assenza di competenza: è la competenza stessa.", es: "Un docente de negociación lo llamaba «el principio del vaso»: si tu vaso ya está lleno, no hay espacio para el agua del otro. La preparación del mediador, paradójicamente, consiste en prepararse para no estar preparado — estudiar el contexto, sí, pero también vaciar las propias expectativas antes de abrir la puerta. No es un ejercicio de fin de semana motivacional: es la condición técnica que hace posible el trabajo. El vacío, en ese oficio, no es ausencia de competencia: es la competencia misma." },
      ],
      predict: { q: "Antes de leer: ¿qué hace el mejor mediador antes de entrar?", options: ["Entra sin solución preconfezionada: vacío y atento", "Entra con la solución lista", "Entra tarde a propósito"], answer: 0, why: "«Il mediatore vuoto»: el vacío como competencia." },
      quiz: [
        { q: "Cosa fa chi arriva con la soluzione preconfezionata?", kind: "literal", options: ["Ascolta solo i dati che la confermano", "Ascolta tutto con equità", "Cambia idea subito"], answer: 0, why: "Frase central del primer párrafo." },
        { q: "Cosa dice «il principio del bicchiere»?", kind: "inferencial", options: ["Si tu vaso está lleno, no cabe el agua del otro", "Hay que beber agua durante la reunión", "El vaso debe ser transparente"], answer: 0, why: "La metáfora del docente." },
        { q: "«Prepararsi a non essere preparati»: es una contradicción o un método?", kind: "critica", options: ["Método: estudiar contexto y vaciar expectativas son dos actos distintos y complementarios", "Contradicción pura", "Filosofía sin aplicación"], answer: 0, why: "La preparación doble (contexto lleno, expectativas vacías) es técnica real." },
      ],
      vf: [
        { text: "Il mediatore migliore arriva con la soluzione pronta.", value: false, why: "Falso: llega sin solución, por técnica." },
        { text: "Il vuoto è la competenza stessa, no su ausencia.", value: true, why: "Frase final del texto." },
        { text: "Il principio del bicchiere riguarda la sete del mediatore.", value: false, why: "Falso: el espacio mental disponible, literal." },
      ],
    },
    {
      id: "md-c1-04-2", theme: "relax fisico", title: "La stretta di mano del negoziatore", titleEs: "El apretón de manos del negociador", minutes: 5,
      paragraphs: [
        { it: "Prima di ogni trattativa importante, un manager romano compie un rituale che i colleghi scambiano per superstizione: dieci minuti in una stanza vuota, il telefono fuori dalla porta, tre respiri profondi e un controllo dello specchio — non per la cravatta, ma per la mascella. «Se entro con la mascella stretta», spiega, «stringerò anche le mani, le posizioni e le proposte. Il corpo negozia prima di noi».", es: "Antes de cada negociación importante, un manager romano cumple un ritual que los colegas confunden con superstición: diez minutos en una sala vacía, el teléfono fuera de la puerta, tres respiraciones profundas y un control del espejo — no por la corbata, sino por la mandíbula. «Si entro con la mandíbula apretada», explica, «apretaré también las manos, las posiciones y las propuestas. El cuerpo negocia antes que nosotros»." },
        { it: "La fisiologia gli dà ragione: la tensione mascellare attiva la catena dello stress e comunica, attraverso i microsegnali, uno stato di allerta che l'altra parte percepisce — e specchia. Il rituale dello specchio non è vanità: è la manutenzione dello strumento principale del mestiere, che è il corpo. Nessun violinista entra in scena con l'archetto incrinato; nessun negoziatore dovrebbe entrare con la mascella di pietra.", es: "La fisiología le da la razón: la tensión mandibular activa la cadena del estrés y comunica, a través de microseñales, un estado de alerta que la otra parte percibe — y refleja. El ritual del espejo no es vanidad: es el mantenimiento del instrumento principal del oficio, que es el cuerpo. Ningún violinista entra en escena con el arco agrietado; ningún negociador debería entrar con la mandíbula de piedra." },
      ],
      predict: { q: "Antes de leer: ¿qué controlará el manager en el espejo?", options: ["La mandíbula: el cuerpo negocia antes que uno", "La corbata", "El peinado"], answer: 0, why: "«La stretta di mano»: la fisiología de la negociación." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["El cuerpo es el instrumento del negociador: su mantenimiento es técnica, no vanidad", "La apariencia lo es todo en los negocios", "El espejo da suerte"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Diez minutos en sala vacía, teléfono fuera, tres respiraciones y control de la mandíbula", "La tensión mandibular comunica alerta que la otra parte percibe y refleja"],
        distractors: ["El manager se mira la corbatta al espejo", "El texto dice que la fisiología contradice al manager"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Se entro con la mascella stretta, stringerò anche le proposte.", "Il corpo negozia prima di noi.", "Nessun negoziatore dovrebbe entrare con la mascella di pietra.", "Prima della trattativa: caffè doppio, tre chiamate veloci e correre in sala sudando."], 
        intruder: 3, why: "Todo el ritual busca calma corporal; café, llamadas y correr es lo contrario." },
    },
    {
      id: "md-c1-04-3", theme: "spiritualità", title: "La benedizione del contratto", titleEs: "La bendición del contrato", minutes: 5,
      paragraphs: [
        { it: "In certi comuni del Sud, fino a pochi decenni fa, i contratti tra famiglie — matrimoni, affitti, società — si firmavano in chiesa, davanti a un sacerdote che non leggeva le clausole ma benediva le mani. Il gesto è scomparso; la sua logica no: ogni patto serio contiene una dimensione sacra — la promessa — che il diritto secolare ha tradotto in firme ma non eliminato.", es: "En ciertos municipios del sur, hasta hace pocas décadas, los contratos entre familias — matrimonios, alquileres, sociedades — se firmaban en la iglesia, ante un sacerdote que no leía las cláusulas pero bendecía las manos. El gesto desapareció; su lógica no: cada pacto serio contiene una dimensión sagrada — la promesa — que el derecho secular tradujo en firmas pero no eliminó." },
        { it: "Un notaio vecchia scuola raccontava di tenere, nel cassetto, una penna speciale per i contratti «che contano»: matrimoni societari, successionni, paci familiari. «La firma», diceva, «è l'ultima tecnologia della parola data. Prima di firmare, faccio sempre la stessa domanda: «Siete pronti a essere ricordati da questo foglio?». I giovani avvocati ridevano. Poi, negli anni, hanno smesso: hanno capito che il notaio non benediceva le firme — ricordava ai firmatari che anche un atto notarile è, prima di tutto, un gesto dell'anima.", es: "Una notario de la vieja escuela contaba que guardaba, en el cajón, una pluma especial para los contratos «que importan»: matrimonios societarios, sucesiones, paces familiares. «La firma», decía, «es la última tecnología de la palabra dada. Antes de firmar, hago siempre la misma pregunta: ¿Están listos para que este folio los recuerde?». Los jóvenes abogados se reían. Luego, con los años, dejaron de hacerlo: entendieron que el notario no bendecía las firmas — les recordaba a los firmantes que también un acto notarial es, ante todo, un gesto del alma." },
      ],
      predict: { q: "Antes de leer: ¿qué preguntará el notario antes de firmar?", options: ["«¿Están listos para que este folio los recuerde?»", "¿Cuenta con los fondos?", "¿Leyeron las cláusulas?"], answer: 0, why: "«La benedizione del contratto»: la dimensión sagrada del pacto." },
      sequence: {
        instr: "Ordena la historia del notaio (1 = primero):",
        events: ["I contratti antichi si firmavano in chiesa, con le mani benedette", "Il diritto secolare traduce la promessa in firme", "Il notaio tiene una penna speciale per i contratti che contano", "Fa sempre la stessa domanda prima di firmare", "I giovani avvocati capiscono: anche un atto notarile è un gesto dell'anima"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Ogni patto serio contiene una dimensione sacra: la promessa. Un notaio, prima di firmare i contratti che contano, fa sempre la stessa domanda: siete pronti a essere ricordati da questo foglio? La firma è l'ultima tecnologia della parola data. Anche un atto notarile è, prima di tutto, un gesto dell'anima.",
        questions: [
          { q: "Cosa contiene ogni patto serio?", kind: "literal", options: ["Una dimensione sacra: la promessa", "Solo clausole", "Un ottimo avvocato"], answer: 0, why: "«Una dimensione sacra: la promessa»." },
          { q: "Cosa è la firma?", kind: "literal", options: ["L'ultima tecnologia della parola data", "Un semplice adempimento", "Un optional"], answer: 0, why: "«L'ultima tecnologia della parola data»." },
          { q: "Cosa capiscono i giovani avvocati?", kind: "inferencial", options: ["Que un acto notarial es un gesto del alma", "Que el notaio era superstizioso", "Que la pregunta era innecesaria"], answer: 0, why: "«Anche un atto notarile è, prima di tutto, un gesto dell'anima»." },
        ],
      },
    },
  ],

  "cu-c1-05": [
    {
      id: "md-c1-05-1", theme: "spiritualità", title: "La memoria lunga", titleEs: "La memoria larga", minutes: 5,
      paragraphs: [
        { it: "Lo storico Fernand Braudel distingueva tre durate: l'evento, che dura giorni; la congiuntura, che dura decenni; la longue durée, che dura secoli. La sua lezione più profonda, però, non riguardava il passato: riguardava il presente. Chi vive solo nella durata dell'evento — la notizia, la notifica, la moda — è strutturalmente ansioso, perché l'evento è per definizione instabile. Chi impara a vedere anche le durate lunghe — i climi, le strutture, i lenti mutamenti — respira diversamente.", es: "El historiador Fernand Braudel distinguía tres duraciones: el acontecimiento, que dura días; la coyuntura, que dura décadas; la larga duración, que dura siglos. Su lección más profunda, sin embargo, no concernía al pasado: concernía al presente. Quien vive solo en la duración del acontecimiento — la noticia, la notificación, la moda — es estructuralmente ansioso, porque el acontecimiento es por definición inestable. Quien aprende a ver también las duraciones largas — los climas, las estructuras, los lentos cambios — respira distinto." },
        { it: "Non è un invito a ignorare il presente: è un allenamento della prospettiva. Il mongolfierista che guarda solo la fiamma si brucia; chi guarda anche il paesaggio naviga. La meditazione, in questa chiave, è un esercizio di storia personale: vedere la propria vita anche nella longue durée — i tratti che durano da generazioni, le fasi che sono solo congiunture — libera una calma che nessun evento può togliere, perché nessun evento, da solo, la produce.", es: "No es una invitación a ignorar el presente: es un entrenamiento de la perspectiva. El aerostero que mira solo la llama se quema; quien mira también el paisaje navega. La meditación, en esta clave, es un ejercicio de historia personal: ver la propia vida también en la larga duración — los rasgos que duran generaciones, las fases que son solo coyunturas — libera una calma que ningún acontecimiento puede quitar, porque ningún acontecimiento, por sí solo, la produce." },
      ],
      predict: { q: "Antes de leer: ¿qué distinción de Braudel aplicará el texto al presente?", options: ["Las tres duraciones: evento, coyuntura, larga duración", "Tres tipos de emperadores", "Tres escuelas de historia"], answer: 0, why: "«La memoria lunga»: Braudel aplicado a la calma." },
      quiz: [
        { q: "Quanto dura l'evento?", kind: "literal", options: ["Giorni", "Secoli", "Decenni"], answer: 0, why: "«L'evento, che dura giorni»." },
        { q: "Perché chi vive solo negli eventi è ansioso?", kind: "inferencial", options: ["Porque el evento es estructuralmente inestable", "Porque los eventos son siempre tristes", "Porque no hay eventos suficientes"], answer: 0, why: "«L'evento è per definizione instabile»." },
        { q: "Ver la propia vida en longue durée: qué ganaría tu presente con esa mirada?", kind: "critica", options: ["Calma estructural: distinguir rasgos duraderos de coyunturas pasajeras", "Nada: el pasado no existe", "Más ansiedad por lo que no cambia"], answer: 0, why: "La perspectiva de duraciones descentraliza la urgencia del evento." },
      ],
      vf: [
        { text: "La congiuntura dura secoli.", value: false, why: "Falso: décadas; los siglos son la longue durée." },
        { text: "Il mongolfierista che guarda solo la fiamma si brucia.", value: true, why: "Metáfora del texto." },
        { text: "Nessun evento, da solo, produce la calma della lunga durata.", value: true, why: "Conclusión explícita." },
      ],
    },
    {
      id: "md-c1-05-2", theme: "qui e ora", title: "L'archivio di stato all'una", titleEs: "El archivo de estado a la una", minutes: 5,
      paragraphs: [
        { it: "All'una in punto, l'Archivio di Stato chiude per la pausa pranzo. Le lampade verdi si spengono, i volumi rilegati riposano, e per trenta minuti la sala di lettura vive una seconda vita: la luce naturale delle finestre alte si posa sui tavoli di legno come se il palazzo tornasse, per mezz'ora, all'Ottocento che lo ha costruito.", es: "A la una en punto, el Archivo de Estado cierra para la pausa del almuerzo. Las lámparas verdes se apagan, los volúmenes encuadernados descansan, y durante treinta minutos la sala de lectura vive una segunda vida: la luz natural de las ventanas altas se posa sobre las mesas de madera como si el palacio volviera, por media hora, al Ochocientos que lo construyó." },
        { it: "Una studiosa di archivistica ha descritto quella mezz'ora come «l'ora più vera dell'archivio»: senza lettori, senza richieste, i documenti semplicemente sono. La sua tesi, fra il mistico e il tecnico, è che l'archivio esista per quei trenta minuti — il resto è servizio. «Il passato», scrive, «non è un magazzino di carte: è una presenza che respira piano. Noi che lo custodiamo non ne siamo i proprietari, ma gli infermieri del turno di notte».", es: "Una estudiosa de archivística describió esa media hora como «la hora más verdadera del archivo»: sin lectores, sin solicitudes, los documentos simplemente son. Su tesis, entre lo místico y lo técnico, es que el archivo existe por esos treinta minutos — el resto es servicio. «El pasado», escribe, «no es un depósito de papeles: es una presencia que respira despacio. Nosotros que lo custodiamos no somos sus propietarios, sino los enfermeros del turno de noche»." },
      ],
      predict: { q: "Antes de leer: ¿qué pasa en el archivo a la una?", options: ["La pausa: la hora más verdadera, sin lectores", "Una conferencia", "El cambio de guardia"], answer: 0, why: "«All'una»: el rito diario del archivo." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["El pasado es una presencia que se custodia como un paciente, no un depósito", "Los archivos deberían cerrar para siempre", "La pausa pranzo es una pérdida de tiempo"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["A la una la luz natural se posa en las mesas como en el Ochocientos", "La estudiosa define a los archiveros como «enfermeros del turno de noche»"],
        distractors: ["La estudiosa propone abolir la pausa del almuerzo", "El texto dice que los documentos deben leerse sin parar"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Per trenta minuti i documenti semplicemente sono.", "Il passato è una presenza che respira piano.", "Gli archivisti sono gli infermieri del turno di notte.", "Un archivio è un magazzino: più cassetti si aprono, più guadagna."],
        intruder: 3, why: "La estudiosa niega exactamente la metáfora del almacén." },
    },
    {
      id: "md-c1-05-3", theme: "relax mentale", title: "Il museo dei giorni lenti", titleEs: "El museo de los días lentos", minutes: 5,
      paragraphs: [
        { it: "Un museo piemontese ha inaugurato una sala anomala: «Il museo dei giorni lenti». Niente capolavori: oggetti quotidiani di famiglie contadine — un bottone, un ferro da stiro a carbone, una lettera di tre pagine. La visita è guidata da un unico divieto: entrare con il telefono, che resta all'ingresso insieme all'orologio, consegnato volontariamente.", es: "Un museo piamontés inauguró una sala anómala: «El museo de los días lentos». Nada de obras maestras: objetos cotidianos de familias campesinas — un botón, una plancha a carbón, una carta de tres páginas. La visita está guiada por una única prohibición: entrar con el teléfono, que queda en la entrada junto con el reloj, entregados voluntariamente." },
        { it: "I visitatori entrano per mezz'ora e ne escono, secondo il direttore, «diversamente velocizzati»: molti raccontano di aver guardato, per la prima volta dopo anni, un oggetto fino a quando l'occhio non si è stancato. Il segreto della sala non è ciò che espone: è la cornice temporale. Un'ora senza orologio trasforma un bottone in un archetipo. La lentezza, nel museo come nella memoria, non è assenza di velocità: è la qualità dell'attenzione che solo il tempo conceduto può comprare.", es: "Los visitantes entran por media hora y salen, según el director, «diversamente acelerados»: muchos cuentan que miraron, por primera vez después de años, un objeto hasta que el ojo se cansó. El secreto de la sala no es lo que expone: es el marco temporal. Una hora sin reloj transforma un botón en un arquetipo. La lentitud, en el museo como en la memoria, no es ausencia de velocidad: es la calidad de atención que solo el tiempo concedido puede comprar." },
      ],
      predict: { q: "Antes de leer: ¿qué se entrega voluntariamente al entrar?", options: ["El teléfono y el reloj", "El dinero", "La chaqueta"], answer: 0, why: "«Il museo dei giorni lenti»: la cornice temporale." },
      sequence: {
        instr: "Ordena la experiencia del visitante (1 = primero):",
        events: ["Il visitatore consegua telefono e orologio all'ingresso", "Entra nella sala degli oggetti quotidiani", "Guarda un bottone fino a quando l'occhio si stanca", "Un'ora senza orologio trasforma il bottone in archetipo", "Esce «diversamente velocizzato»"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Nel museo dei giorni lenti, il visitatore consegna telefono e orologio all'ingresso. Dentro, oggetti quotidiani: un bottone, un ferro da stiro, una lettera di tre pagine. Un'ora senza orologio trasforma un bottone in un archetipo. La lentezza non è assenza di velocità: è la qualità dell'attenzione che solo il tempo conceduto può comprare.",
        questions: [
          { q: "Cosa si consegna all'ingresso?", kind: "literal", options: ["Telefono e orologio", "Solo il telefono", "I documenti"], answer: 0, why: "«Telefono e orologio»." },
          { q: "Cosa espone la sala?", kind: "literal", options: ["Oggetti quotidiani", "Capolavori rinascimentali", "Fotografie di vip"], answer: 0, why: "«Niente capolavori: oggetti quotidiani»." },
          { q: "Cosa è la lentezza?", kind: "inferencial", options: ["La calidad de atención que el tiempo concedido compra", "Una falta de velocidad", "Un problema logístico"], answer: 0, why: "«Non è assenza di velocità: è la qualità dell'attenzione…»." },
        ],
      },
    },
  ],

  "cu-c1-06": [
    {
      id: "md-c1-06-1", theme: "spiritualità", title: "La letteratura come preghiera laica", titleEs: "La literatura como oración laica", minutes: 5,
      paragraphs: [
        { it: "Cesare Pavese scriveva nel suo diario che leggere certi poeti era «un modo di inginocchiarsi senza chiesa». La grande letteratura, in questa chiave, non è intrattenimento colto: è una tecnologia antica della trasformazione interiore. Chi legge bene non resta lo stesso — non perché riceva una lezione, ma perché ha abitato, per qualche ora, un'anima diversa dalla sua.", es: "Cesare Pavese escribía en su diario que leer ciertos poetas era «una manera de arrodillarse sin iglesia». La gran literatura, en esta clave, no es entretenimiento culto: es una tecnología antigua de la transformación interior. Quien lee bien no queda igual — no porque reciba una lección, sino porque habitó, durante algunas horas, un alma distinta de la suya." },
        { it: "I cursi della letteratura — coloro che leggono per confermarsi — non comprendono questo mistero: usano i libri come specchi. Il lettore spirituale li usa come finestre. La differenza non è di gusto: è di coraggio. Uno specchio non chiede nulla; una finestra chiede di guardare quello che c'è, compreso ciò che ci contraddice.", es: "Los cursis de la literatura — quienes leen para confirmarse — no comprenden este misterio: usan los libros como espejos. El lector espiritual los usa como ventanas. La diferencia no es de gusto: es de coraje. Un espejo no pide nada; una ventana pide mirar lo que hay, incluso lo que nos contradice." },
      ],
      predict: { q: "Antes de leer: ¿cómo definía Pavese la lectura de ciertos poetas?", options: ["Una manera de arrodillarse sin iglesia", "Un pasatiempo elegante", "Un deber escolar"], answer: 0, why: "«Preghiera laica»: la cita de Pavese abre el texto." },
      quiz: [
        { q: "Come usano i libri i lettori spirituali?", kind: "literal", options: ["Come finestre", "Come specchi", "Come armadi"], answer: 0, why: "«Il lettore spirituale li usa come finestre»." },
        { q: "Perché abitare un'anima diversa transforma?", kind: "inferencial", options: ["Porque la experiencia ajena amplía lo que uno puede vivir y pensar", "Porque los libros dan respuestas correctas", "Porque la lectura es pasiva"], answer: 0, why: "Habitar otra alma amplía el propio horizonte interior." },
        { q: "Specchio o finestra: cómo lees tú? Qué libro te fue ventana?", kind: "critica", options: ["Ventana: el libro que me contradujo me cambió más que el que me confirmó", "Specchio: prefiero confirmarme", "Non leggo"], answer: 0, why: "La ventana contradice y transforma; el espejo solo refleja." },
      ],
      vf: [
        { text: "Leggere bene lascia il lettore identico a prima.", value: false, why: "Falso: «non resta lo stesso»." },
        { text: "La differenza tra specchio e finestra è di coraggio.", value: true, why: "«Non è di gusto: è di coraggio»." },
        { text: "Una finestra chiede di guardare anche ciò che ci contraddice.", value: true, why: "Frase final del texto." },
      ],
    },
    {
      id: "md-c1-06-2", theme: "relax mentale", title: "Il lettore che annota", titleEs: "El lector que anota", minutes: 5,
      paragraphs: [
        { it: "Un editore anziano distingueva due specie di lettori: quelli che lasciano i libri come nuovi e quelli che li restituiscono «usati» — sottolineature, orecchie, note ai margini. «Il primo tipo», diceva, «ha consumato il libro. Il secondo ha lasciato che il libro consumasse lui». Nella sua biblioteca personale, i volumi intonsi erano quelli di cui non ricordava nulla.", es: "Un editor anciano distinguía dos especies de lectores: los que dejan los libros como nuevos y los que los devuelven «usados» — subrayados, esquinas dobladas, notas al margen. «El primer tipo», decía, «ha consumado el libro. El segundo ha dejado que el libro lo consumiera». En su biblioteca personal, los volúmenes intactos eran aquellos de los que no recordaba nada." },
        { it: "L'annotazione, oggi considerata un vezzo da filologi, è in realtà una forma di dialogo lento: la matita obbliga la mano a seguire la mente, e la mente, seguita dalla mano, rallenta. Studi sulla memoria confermano l'ovvio: ciò che si annota a mano si ricorda. Ma l'effetto più profondo non è la memoria: è la relazione. Un libro annotato è un libro abitato; rileggerlo, anni dopo, è incontrare il proprio io di allora — e misurare, margine per margine, quanto si è cambiati.", es: "La anotación, hoy considerada un capricho de filólogos, es en realidad una forma de diálogo lento: el lápiz obliga a la mano a seguir a la mente, y la mente, seguida por la mano, se frena. Estudios sobre la memoria confirman lo obvio: lo que se anota a mano se recuerda. Pero el efecto más profundo no es la memoria: es la relación. Un libro anotado es un libro habitado; releerlo, años después, es encontrar al propio yo de entonces — y medir, margen a margen, cuánto se ha cambiado." },
      ],
      predict: { q: "Antes de leer: ¿qué distinción haría el editor anciano?", options: ["Lectores que consuman el libro vs lectores que lo habitan", "Lectores rápidos y lentos", "Lectores ricos y pobres"], answer: 0, why: "«Il lettore che annota»: el lápiz como diálogo." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Anotar es habitar el libro: diálogo lento que deja huella y permite reencontrarse", "Hay que mantener los libros impecables", "La memoria no importa"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Los volúmenes intactos eran aquellos de los que no recordaba nada", "El lápiz obliga a la mano a seguir la mente, y la mente se frena"],
        distractors: ["El editor regaló todos los libros anotados", "El texto dice que anotar arruina los libros"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Un libro annotato è un libro abitato.", "La matita obbliga la mano a seguire la mente.", "Rileggere le proprie note è incontrare il proprio io di allora.", "I libri vanno conservati intonsi: le note li svalutano commercialmente."],
        intruder: 3, why: "El editor celebra los libros «usados»; la svalutación comercial contradice todo el texto." },
    },
    {
      id: "md-c1-06-3", theme: "qui e ora", title: "Il libro tascabile del pendolare", titleEs: "El libro de bolsillo del viajero", minutes: 5,
      paragraphs: [
        { it: "Sul treno delle 7:42, un pendolare quarantenne ripete ogni giorno lo stesso gesto: prima di aprire il libro, trenta secondi di sguardo al paesaggio. «Il treno», spiega, «è il mio anteprima e il mio dopo: trenta secondi di mondo prima di entrare nel libro, trenta secondi di libro prima di tornare al mondo».", es: "En el tren de las 7:42, un viajero cuarentón repite cada día el mismo gesto: antes de abrir el libro, treinta segundos de mirada al paisaje. «El tren», explica, «es mi antes y mi después: treinta segundos de mundo antes de entrar en el libro, treinta segundos de libro antes de volver al mundo»." },
        { it: "Il rito, nato per caso, è diventato una tecnica di transizione: il libro non è più una fuga dal viaggio, e il viaggio non è più un fastidio prima del libro. I due tempi si parlano. «Prima leggevo per non essere sul treno», conclude. «Ora leggo per essere più precisamente sul treno — e in ufficio arrivo con una pagina dentro, non con un vuoto». La lettura, ben custodita, non sottrae al presente: lo affina.", es: "El rito, nacido por casualidad, se volvió una técnica de transición: el libro ya no es una fuga del viaje, y el viaje ya no es una molestia antes del libro. Los dos tiempos se hablan. «Antes leía para no estar en el tren», concluye. «Ahora leo para estar más precisamente en el tren — y llego a la oficina con una página adentro, no con un vacío». La lectura, bien custodiada, no le quita al presente: lo afina." },
      ],
      predict: { q: "Antes de leer: ¿qué hace el pendolare antes de abrir el libro?", options: ["Treinta segundos de mirada al paisaje", "Un café doble", "Una llamada de trabajo"], answer: 0, why: "«Il libro tascabile del pendolare»: el rito de transición." },
      sequence: {
        instr: "Ordena el rito del lector (1 = primero):",
        events: ["Sale il treno delle 7:42", "Trenta secondi di sguardo al paesaggio", "Apre il libro e legge", "Chiude il libro trenta secondi prima di arrivare", "Scende con una pagina dentro, non con un vuoto"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Il treno delle sette e quarantadue è il mio prima e il mio dopo: trenta secondi di mondo prima di entrare nel libro, trenta secondi di libro prima di tornare al mondo. Prima leggevo per non essere sul treno. Ora leggo per essere più precisamente sul treno. La lettura ben custodita non sottrae al presente: lo affina.",
        questions: [
          { q: "Quanto dura lo sguardo al paesaggio?", kind: "literal", options: ["Trenta secondi", "Trenta minuti", "Tre ore"], answer: 0, why: "«Trenta secondi di mondo»." },
          { q: "Perché leggeva, prima?", kind: "literal", options: ["Per non essere sul treno", "Per lavorare", "Per dormire"], answer: 0, why: "«Prima leggevo per non essere sul treno»." },
          { q: "Cosa fa la lettura ben custodita?", kind: "inferencial", options: ["No le quita al presente: lo afina", "Sustituye el presente", "Anula el viaje"], answer: 0, why: "«Non sottrae al presente: lo affina»." },
        ],
      },
    },
  ],

  "cu-c1-07": [
    {
      id: "md-c1-07-1", theme: "relax mentale", title: "L'ufficio con la stanza del silenzio", titleEs: "La oficina con la sala del silencio", minutes: 5,
      paragraphs: [
        { it: "Un ministero scandinavo, studiato dai sociologi del lavoro, ha una particolarità: accanto alla sala riunioni, una stanza senza funzione — due poltrone, una pianta, un cartello: «Silenzio». Nessuna meditazione obbligatoria, nessun corso: solo lo spazio. Il suo utilizzo, misurato per un anno, ha rivelato qualcosa di inatteso: non i più stressati la usavano di più, ma i dirigenti.", es: "Un ministerio escandinavo, estudiado por los sociólogos del trabajo, tiene una particularidad: junto a la sala de reuniones, una habitación sin función — dos sillones, una planta, un cartel: «Silencio». Ninguna meditación obligatoria, ningún curso: solo el espacio. Su utilización, medida durante un año, reveló algo inesperado: no los más estresados la usaban más, sino los directivos." },
        { it: "L'ipotesi dei ricercatori: più alta è la responsabilità, più raro è il permesso di non avere una funzione. I dipendenti possono fare pausa; chi decide deve sempre decidere. La stanza del silenzio restituiva ai vertici l'unica cosa che la gerarchia toglie: il diritto di stare cinque minuti senza essere nessuno. La lezione istituzionale è sottile: il benessere organizzativo non si misura dai benefit, ma dagli spazi che un'istituzione concede all'assenza di scopo.", es: "La hipótesis de los investigadores: cuanto más alta es la responsabilidad, más raro es el permiso de no tener una función. Los empleados pueden hacer pausa; quien decide debe siempre decidir. La sala del silencio devolvía a los vértices lo único que la jerarquía quita: el derecho de estar cinco minutos sin ser nadie. La lección institucional es sutil: el bienestar organizativo no se mide por los beneficios, sino por los espacios que una institución concede a la ausencia de propósito." },
      ],
      predict: { q: "Antes de leer: ¿quién usará más la stanza del silenzio?", options: ["Los directivos: quienes no tienen permiso de no tener función", "Los becarios", "Los informáticos"], answer: 0, why: "«La stanza del silenzio»: el espacio institucional sin propósito." },
      quiz: [
        { q: "Cosa c'è nella stanza?", kind: "literal", options: ["Due poltrone, una pianta, un cartello", "Tavoli da ping pong", "Dieci computer"], answer: 0, why: "Descrita al inicio." },
        { q: "Perché i dirigenti la usavano di più?", kind: "inferencial", options: ["La jerarquía les niega el derecho de estar sin función", "Trabajan menos", "Tienen más tiempo libre"], answer: 0, why: "«Chi decide deve sempre decidere»." },
        { q: "Cómo se mide el bienestar organizativo según la lección institucional?", kind: "critica", options: ["Por los espacios concedidos a la ausencia de propósito", "Por el número de benefits", "Por los sueldos"], answer: 0, why: "Última frase del texto." },
      ],
      vf: [
        { text: "La stanza aveva una funzione precisa: meditazione guidata.", value: false, why: "Falso: «una stanza senza funzione», solo silencio." },
        { text: "I più stressati la usavano di più.", value: false, why: "Falso: la usaban más los dirigentes." },
        { text: "La stanza restituiva il diritto di stare cinque minuti senza essere nessuno.", value: true, why: "Frase central del texto." },
      ],
    },
    {
      id: "md-c1-07-2", theme: "meditazione", title: "Il protocollo dell'attesa", titleEs: "El protocollo de la espera", minutes: 5,
      paragraphs: [
        { it: "Nelle istituzioni giapponesi esiste una figura che non ha equivalente occidentale: il maestro dell'attesa. Non è un impiegato lento: è chi custodisce la qualità del tempo tra una fase e l'altra di una cerimonia o di un procedimento. Il suo compito, imparammo da un funzionario in missione, è «proteggere la transizione dall'ansia della fretta».", es: "En las instituciones japonesas existe una figura que no tiene equivalente occidental: el maestro de la espera. No es un empleado lento: es quien custodia la calidad del tiempo entre una fase y la otra de una ceremonia o de un procedimiento. Su tarea, aprendimos de un funcionario en misión, es «proteger la transición de la ansiedad de la prisa»." },
        { it: "Le burocrazie occidentali, osservava il funzionario, trattano l'attesa come un vuoto da riempire — code, numeri, schermi nelle sale d'aspetto. Il protocollo giapponese la tratta come un passaggio da custodire: silenzio, luce bassa, nessuno schermo. Il risultato paradossale: l'attesa giapponese dura spesso di più, ma viene percepita come più breve. Il tempo non si misura solo con l'orologio: si misura con l'ansia. E l'ansia, a differenza dei minuti, si può progettare.", es: "Las burocracias occidentales, observaba el funcionario, tratan la espera como un vacío que llenar — colas, números, pantallas en las salas de espera. El protocolo japonés la trata como un pasaje que custodiar: silencio, luz baja, ninguna pantalla. El resultado paradójico: la espera japonesa suele durar más, pero se percibe como más corta. El tiempo no se mide solo con el reloj: se mide con la ansiedad. Y la ansiedad, a diferencia de los minutos, se puede proyectar." },
      ],
      predict: { q: "Antes de leer: ¿qué custodia el «maestro dell'attesa»?", options: ["La calidad del tiempo de transición", "Los archivos", "El presupuesto"], answer: 0, why: "«Il protocollo dell'attesa»: el tiempo entre fases." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["La ansiedad del tiempo se puede proyectar institucionalmente: custodiar la espera", "Las colas occidentales son las mejores", "El tiempo solo se mide con el reloj"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Las burocracias occidentales tratan la espera como vacío a llenar con pantallas", "La espera japonesa dura más pero se percibe más corta"],
        distractors: ["El maestro dell'attesa es simplemente un empleado lento", "El texto propone eliminar todas las salas de espera"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Il maestro dell'attesa protegge la transizione.", "Silenzio, luce bassa, nessuno schermo.", "L'ansia, a differenza dei minuti, si può progettare.", "Nelle sale d'aspetto: cinque schermi accesi a volume alto, così il tempo passa."],
        intruder: 3, why: "El protocollo descrito elimina justamente las pantallas de las salas de espera." },
    },
    {
      id: "md-c1-07-3", theme: "relax fisico", title: "L'ufficio che respira alle undici", titleEs: "La oficina que respira a las once", minutes: 5,
      paragraphs: [
        { it: "Una multinazionale olandese ha introdotto un orario curioso: alle undici e alle sedici, per tre minuti, tutti gli uffici abbassano le luci del cinquanta per cento. Non è un risparmio energetico: è un «respiro architettonico», progettato con un antropologo per spezzare il ritmo della giornata.", es: "Una multinacional holandesa introdujo un horario curioso: a las once y a las dieciséis, durante tres minutos, todas las oficinas bajan las luces un cincuenta por ciento. No es un ahorro energético: es una «respiración arquitectónica», proyectada con un antropólogo para quebrar el ritmo del día." },
        { it: "I dipendenti hanno ribattezzato l'orario «la pennichella olandese», ma i dati dicono altro: durante i tre minuti, nessuno dorme — ci si alza, si guarda dalla finestra, si stirano le spalle. Il gesto apparentemente simbolico ha prodotto effetti misurabili: meno conflitti nel pomeriggio, riunioni più brevi, una percezione generale che la giornata «ha dei punti d'appoggio». Il corpo, si scopre, non chiede vacanze: chiede architettura.", es: "Los empleados rebautizaron el horario «la siestecita holandesa», pero los datos dicen otra cosa: durante los tres minutos, nadie duerme — la gente se levanta, mira por la ventana, estira los hombros. El gesto aparentemente simbólico produjo efectos medibles: menos conflictos por la tarde, reuniones más breves, una percepción general de que la jornada «tiene puntos de apoyo». El cuerpo, se descubre, no pide vacaciones: pide arquitectura." },
      ],
      predict: { q: "Antes de leer: ¿qué pasa en la oficina a las once y las dieciséis?", options: ["Las luces bajan 50% por tres minutos: respiro arquitectónico", "Se apagan todos los ordenadores", "Se sirve el almuerzo"], answer: 0, why: "«L'ufficio che respira»: el ritmo institucional." },
      sequence: {
        instr: "Ordena el experimento (1 = primero):",
        events: ["La multinazionale progetta il «respiro architettonico» con un antropologo", "Alle undici e alle sedici le luci si abbassano del cinquanta per cento", "Nessuno dorme: ci si alza, si guarda dalla finestra", "Meno conflitti e riunioni più brevi", "Il corpo non chiede vacanze: chiede architettura"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Alle undici e alle sedici, per tre minuti, le luci si abbassano del cinquanta per cento. Non è un risparmio energetico: è un respiro architettonico. Nessuno dorme: ci si alza, si guarda dalla finestra, si stirano le spalle. Il corpo non chiede vacanze: chiede architettura.",
        questions: [
          { q: "Quanto si abbassano le luci?", kind: "literal", options: ["Del cinquanta per cento", "Del cinque per cento", "Del tutto"], answer: 0, why: "«Del cinquanta per cento»." },
          { q: "Cosa NON è il gesto?", kind: "literal", options: ["Un risparmio energetico", "Un respiro architettonico", "Un progetto con un antropologo"], answer: 0, why: "«Non è un risparmio energetico»." },
          { q: "Cosa chiede il corpo?", kind: "inferencial", options: ["Arquitectura, no vacaciones", "Solo vacaciones", "Nada"], answer: 0, why: "«Il corpo non chiede vacanze: chiede architettura»." },
        ],
      },
    },
  ],

  "cu-c1-08": [
    {
      id: "md-c1-08-1", theme: "meditazione", title: "La lezione magistrale del maestro stanco", titleEs: "La lección magistral del maestro cansado", minutes: 5,
      paragraphs: [
        { it: "Un professore emerito, famoso per le lezioni ipnotiche, rivelò in un'intervista il suo segreto più tardi, quando non aveva più nulla da dimostrare: «Le mie lezioni migliori? Le ho tenute nei giorni in cui ero meno preparato. La preparazione mi rendeva sicuro; l'insicurezza mi rendeva presente. Presente a loro, non al mio copione».", es: "Un profesor emérito, famoso por sus lecciones hipnóticas, reveló su secreto en una entrevista tardía, cuando ya no tenía nada que demostrar: «¿Mis mejores lecciones? Las di en los días en que estaba menos preparado. La preparación me hacía seguro; la inseguridad me hacía presente. Presente a ellos, no a mi guion»." },
        { it: "La confessione scandalizzò i colleghi, ma chi insegna riconosce la verità: la lezione troppo preparata è un monologo registrato; la lezione viva nasce dall'incontro tra un sapere e un'attenzione. Il maestro, quel giorno, aveva capito che l'errore dei docenti non è prepararsi poco: è prepararsi a non incontrare nessuno. La tecnica, da allora, ha un nome umile: «prepararsi due volte» — una volta per il contenuto, una volta per l'assenza di copione.", es: "La confesión escandalizó a los colegas, pero quien enseña reconoce la verdad: la lección demasiado preparada es un monólogo grabado; la lección viva nace del encuentro entre un saber y una atención. El maestro, ese día, había entendido que el error de los docentes no es prepararse poco: es prepararse para no encontrar a nadie. La técnica, desde entonces, tiene un nombre humilde: «prepararse dos veces» — una por el contenido, otra por la ausencia de guion." },
      ],
      predict: { q: "Antes de leer: ¿cuándo daba el profesor sus mejores lecciones?", options: ["Cuando estaba menos preparado: más presente", "Cuando ensayaba tres días", "Cuando usaba 100 slides"], answer: 0, why: "«Del maestro stanco»: la paradoja de la presencia docente." },
      quiz: [
        { q: "Cosa rendeva presente il professore?", kind: "literal", options: ["L'insicurezza, non il copione", "La preparazione maniacale", "I microfoni"], answer: 0, why: "«L'insicurezza mi rendeva presente»." },
        { q: "Cosa è una lezione troppo preparata, secondo il testo?", kind: "inferencial", options: ["Un monologo grabado, sin encuentro", "Siempre la mejor", "Un delito"], answer: 0, why: "«Un monologo registrato»." },
        { q: "«Prepararsi due volte»: aplicarías esta técnica a tu próxima presentación?", kind: "critica", options: ["Sì: contenido una vez, ausencia de guion la otra", "No: mejor memorizar todo", "Solo para profesores"], answer: 0, why: "La doble preparación equilibra saber y encuentro." },
      ],
      vf: [
        { text: "Le lezioni migliori le teneva nei giorni più preparati.", value: false, why: "Falso: en los menos preparados." },
        { text: "L'errore dei docenti è prepararsi a non incontrare nessuno.", value: true, why: "Frase central." },
        { text: "La lezione viva nasce dall'incontro tra sapere e attenzione.", value: true, why: "Definición del texto." },
      ],
    },
    {
      id: "md-c1-08-2", theme: "relax fisico", title: "Le gambe del conferenziere", titleEs: "Las piernas del conferenciante", minutes: 5,
      paragraphs: [
        { it: "Un fisioterapista che lavora con i relatori professionali ha descritto il suo mestiere così: «Prima della voce, le gambe». Chi parla in pubblico per due ore in piedi consuma l'energia del corpo nei primi venti minuti: le ginocchia si bloccano, il peso si sposta sui talloni, il respiro si accorcia — e il pubblico lo percepisce come arroganza o fragilità.", es: "Un fisioterapeuta que trabaja con oradores profesionales describió su oficio así: «Antes que la voz, las piernas». Quien habla en público dos horas de pie consume la energía del cuerpo en los primeros veinte minutos: las rodillas se bloquean, el peso se desplaza a los talones, el respiro se acorta — y el público lo percibe como arrogancia o fragilidad." },
        { it: "Il suo protocollo pre-conferenza è banale e infallibile: cinque minuti di camminata all'aperto, trenta secondi di piedi paralleli e ginocchia morbide, e il peso distribuito su tre punti del piede «come un treppiede». «La voce», conclude, «è un filo d'acqua: passa dove il corpo le apre il canale. Un corpo contratto è una tubatura chiusa». Nessun corso di public speaking insegna questo; eppure, nei primi tre minuti di qualunque conferenza, si sente subito chi ha camminato e chi no.", es: "Su protocolo pre-conferencia es banal e infalible: cinco minutos de caminata al aire libre, treinta segundos de pies paralelos y rodillas blandas, y el peso distribuido en tres puntos del pie «como un trípode». «La voz», concluye, «es un hilo de agua: pasa donde el cuerpo le abre el canal. Un cuerpo contraído es una tubería cerrada». Ningún curso de oratoria enseña esto; y sin embargo, en los primeros tres minutos de cualquier conferencia, se nota de inmediato quién caminó y quién no." },
      ],
      predict: { q: "Antes de leer: ¿qué cuida primero el fisioterapista del relatore?", options: ["Las piernas, antes que la voz", "La corbata", "Las slides"], answer: 0, why: "«Le gambe del conferenziere»: el cuerpo del orador." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["La voz pasa donde el cuerpo abre el canal: la postura es técnica vocal", "La oratoria es solo palabra", "Caminar es perder el tiempo"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Protocolo: cinco minutos de caminata, rodillas blandas, peso en tres puntos", "El público percibe el cuerpo contraído como arrogancia o fragilidad"],
        distractors: ["El fisioterapista recomienda correr una maratón antes", "El texto dice que la voz no depende del cuerpo"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Prima della voce, le gambe.", "Il peso si distribuisce su tre punti, come un treppiede.", "Un corpo contratto è una tubatura chiusa.", "Prima di parlare: restare seduto e immobile per ore, così si arriva carichi."],
        intruder: 3, why: "El protocolo completo es movimiento y apertura; la inmovilidad es lo contrario." },
    },
    {
      id: "md-c1-08-3", theme: "qui e ora", title: "Il primo minuto di ogni lezione", titleEs: "El primer minuto de cada clase", minutes: 5,
      paragraphs: [
        { it: "Un'indagine tra studenti universitari ha chiesto di descrivere la lezione ideale. Sorpresa: al primo posto non c'erano i contenuti, né i slide, né l'umorismo. Era il primo minuto. «Quando il professore entra, si capisce subito», ha sintetizzato una studentessa, «se è entrato per stare con noi o per consegnare una merce».", es: "Una encuesta entre estudiantes universitarios pidió describir la clase ideal. Sorpresa: en el primer puesto no estaban los contenidos, ni las diapositivas, ni el humor. Era el primer minuto. «Cuando el profesor entra, se entiende de inmediato», sintetizó una estudiante, «si entró para estar con nosotros o para entregar una mercancía»." },
        { it: "I docenti più amati, osservati dagli studiosi, condividevano un rituale d'apertura: trenta secondi di silenzio, lo sguardo che attraversa l'aula — non per controllare, ma per salutare — e solo dopo la prima frase, pronunciata lentamente. Un professore lo descrisse così: «Il primo minuto è la scala dell'aereo: se la percorri di corsa, tutto il volo sarà agitato. Io salgo piano, e l'aula sale con me».", es: "Los docentes más amados, observados por los estudiosos, compartían un ritual de apertura: treinta segundos de silencio, la mirada que recorre el aula — no para controlar, sino para saludar — y solo después la primera frase, pronunciada lentamente. Un profesor lo describió así: «El primer minuto es la escalera del avión: si la recorres corriendo, todo el vuelo estará agitado. Yo subo despacio, y el aula sube conmigo»." },
      ],
      predict: { q: "Antes de leer: ¿qué resulta decisivo en la lección ideal?", options: ["El primer minuto: cómo entra el profesor", "Los slides perfectos", "El examen final"], answer: 0, why: "«Il primo minuto»: la apertura como ritual." },
      sequence: {
        instr: "Ordena el ritual de apertura (1 = primero):",
        events: ["Il professore entra in aula", "Trenta secondi di silenzio", "Lo sguardo attraversa l'aula per salutare", "Solo dopo, la prima frase pronunciata lentamente", "L'aula sale con lui: il volo sarà sereno"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Il primo minuto di una lezione è la scala dell'aereo: se la percorri di corsa, tutto il volo sarà agitato. Trenta secondi di silenzio, lo sguardo che attraversa l'aula per salutare, e solo dopo la prima frase, lentamente. Io salgo piano, e l'aula sale con me.",
        questions: [
          { q: "A cosa è paragonato il primo minuto?", kind: "literal", options: ["Alla scala dell'aereo", "Al decollo", "All'atterraggio"], answer: 0, why: "«È la scala dell'aereo»." },
          { q: "Quanto dura il silenzio d'apertura?", kind: "literal", options: ["Trenta secondi", "Trenta minuti", "Tre secondi"], answer: 0, why: "«Trenta secondi di silenzio»." },
          { q: "Cosa succede se percorri la scala di corsa?", kind: "inferencial", options: ["Todo el vuelo estará agitado", "Nada", "El vuelo será perfecto"], answer: 0, why: "«Tutto il volo sarà agitato»." },
        ],
      },
    },
  ],

  "cu-c1-09": [
    {
      id: "md-c1-09-1", theme: "qui e ora", title: "Il dialetto del presente", titleEs: "El dialecto del presente", minutes: 5,
      paragraphs: [
        { it: "Un sociolinguista ha passato un anno registrando le conversazioni dei giovani in tre città italiane. La sua scoperta non riguarda i vocaboli (che cambiano, com'è giusto): riguarda il tempo verbale. Il presente dominava oltre l'ottanta per cento degli scambi — non il presente storico, non il presente di programma: un presente senza radici e senza progetto, fatto di «ora», «subito», «sto facendo».", es: "Un sociolingüista pasó un año grabando las conversaciones de los jóvenes en tres ciudades italianas. Su descubrimiento no concierne al vocabulario (que cambia, como es justo): concierne al tiempo verbal. El presente dominaba más del ochenta por ciento de los intercambios — no el presente histórico, no el presente de programa: un presente sin raíces y sin proyecto, hecho de «ahora», «ya mismo», «estoy haciendo»." },
        { it: "L'interpretazione del ricercatore sfugge alla solita lamentazione: non è pigrizia storica, è adattamento a un ambiente che premia la reattività. «Il presente dei ragazzi», scrive, «non è il presente della mindfulness: è il presente dell'allerta — due condizioni che usano lo stesso tempo verbale e vivono in pianeti diversi». La sfida educativa, dunque, non è insegnare il passato: è insegnare la differenza tra abitare l'attimo e essere inseguiti dall'attimo.", es: "La interpretación del investigador escapa a la lamentación habitual: no es pereza histórica, es adaptación a un entorno que premia la reactividad. «El presente de los chicos», escribe, «no es el presente del mindfulness: es el presente de la alerta — dos condiciones que usan el mismo tiempo verbal y viven en planetas distintos». El desafío educativo, entonces, no es enseñar el pasado: es enseñar la diferencia entre habitar el instante y ser perseguido por el instante." },
      ],
      predict: { q: "Antes de leer: ¿qué descubrirá el sociolinguista en las conversaciones?", options: ["El dominio de un presente de alerta, no de presencia", "Que ya nadie habla italiano", "Que el futuro es el tiempo más usado"], answer: 0, why: "«Il dialetto del presente»: tiempo verbal y modo de vida." },
      quiz: [
        { q: "Quanto dominava il presente negli scambi?", kind: "literal", options: ["Oltre l'ottanta per cento", "Il venti per cento", "Il cento per cento"], answer: 0, why: "«Oltre l'ottanta per cento»." },
        { q: "Qual è la differenza tra il presente dei ragazzi e quello della mindfulness?", kind: "inferencial", options: ["Alerta reactiva vs presencia habitada: mismo tiempo verbal, planetas distintos", "Ninguna diferencia", "El mindfulness es más moderno"], answer: 0, why: "«Due condizioni… pianeti diversi»." },
        { q: "Habitare o essere inseguiti dall'attimo: en cuál vives tú la mayoría del día?", kind: "critica", options: ["Prefiero habitar: presencia elegida, no reacción continua", "Soy perseguido: notificaciones deciden", "No pienso en estas cosas"], answer: 0, why: "Nombrar la propia condición es el primer paso para cambiarla." },
      ],
      vf: [
        { text: "La scoperta riguardava soprattutto i vocaboli nuovi.", value: false, why: "Falso: «non riguarda i vocaboli… riguarda il tempo verbale»." },
        { text: "Il presente dei ragazzi è il presente dell'allerta.", value: true, why: "Frase central del texto." },
        { text: "La sfida educativa è insegnare il passato.", value: false, why: "Falso: «non è insegnare il passato»." },
      ],
    },
    {
      id: "md-c1-09-2", theme: "spiritualità", title: "Le lingue che muoiono, i mondi che muoiono", titleEs: "Las lenguas que mueren, los mundos que mueren", minutes: 5,
      paragraphs: [
        { it: "Ogni due settimane, somewhere nel mondo, muore una lingua. Il dato, noto ai linguisti, suona statistico finché non si traduce: muore un modo di nominare la nebbia, un sistema di parentele, una preghiera, un'ironia che nessun'altra lingua saprà fare. «Ogni lingua», scrisse il linguista Ken Hale, «è un museo dello spirito umano che chiude i battenti».", es: "Cada dos semanas, en algún lugar del mundo, muere una lengua. El dato, conocido por los lingüistas, suena estadístico hasta que se traduce: muere una manera de nombrar la niebla, un sistema de parentescos, una oración, una ironía que ninguna otra lengua sabrá hacer. «Cada lengua», escribió el lingüista Ken Hale, «es un museo del espíritu humano que cierra sus puertas»." },
        { it: "La difesa delle lingue minoritarie, spesso liquidata come nostalgia folclorica, è in realtà una questione spirituale: quante forme diverse di attenzione può permettersi l'umanità? Il ladino delle Dolomiti, per esempio, ha sei parole per il silenzio della neve. Quando l'ultima parlante sarà morta, quelle sei attenzioni — non quelle sei parole: quelle sei attenzioni — non esisteranno più. Salvare una lingua non è collezionare il passato: è mantenere aperto un osservatorio sul presente.", es: "La defensa de las lenguas minoritarias, a menudo desestimada como nostalgia folclórica, es en realidad una cuestión espiritual: ¿cuántas formas distintas de atención puede permitirse la humanidad? El ladino de las Dolomitas, por ejemplo, tiene seis palabras para el silencio de la nieve. Cuando la última hablante muera, esas seis atenciones — no esas seis palabras: esas seis atenciones — ya no existirán. Salvar una lengua no es coleccionar el pasado: es mantener abierto un observatorio sobre el presente." },
      ],
      predict: { q: "Antes de leer: ¿qué muere exactamente con una lengua?", options: ["Formas de atención: mundos enteros de nombrar", "Solo palabras aisladas", "Nada importante"], answer: 0, why: "«I mondi che muoiono»: lengua como observatorio." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Salvar una lengua es mantener abiertas formas únicas de atención al mundo", "Las lenguas muertas no importan", "Solo las lenguas grandes merecen vivir"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Hale: cada lengua es un museo del espíritu humano", "El ladino tiene seis palabras para el silencio de la nieve"],
        distractors: ["El texto dice que la defensa lingüística es folclore inútil", "La última hablante del ladino ya murió"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Ogni lingua è un museo dello spirito umano.", "Sei parole per il silencio della neve.", "Salvare una lingua è mantenere aperto un osservatorio.", "Le lingue minoritarie sono ridondanti: basta l'inglese per tutti."],
        intruder: 3, why: "Todo el texto argumenta exactamente lo contrario." },
    },
    {
      id: "md-c1-09-3", theme: "relax mentale", title: "Il lessico della calma", titleEs: "El léxico de la calma", minutes: 5,
      paragraphs: [
        { it: "Un'équipe di psicologi linguisti ha condotto un esperimento elegante: due gruppi, stessa esperienza di relax guidato, ma descrizioni diverse. Al primo gruppo l'audio diceva «lasciare andare la tensione»; al secondo «sentire il corpo che si posa». Terminologia identica, immagini opposte: perdita nell'uno, approdo nell'altro.", es: "Un equipo de psicólogos lingüistas condujo un experimento elegante: dos grupos, la misma experiencia de relajación guiada, pero descripciones distintas. Al primer grupo el audio decía «dejar ir la tensión»; al segundo «sentir el cuerpo que se posa». Terminología idéntica, imágenes opuestas: pérdida en uno, arribo en el otro." },
        { it: "I risultati hanno imbarazzato i manuali: il gruppo dell'«approdo» raggiungeva livelli di rilassamento misurabilmente più profondi. La spiegazione dei ricercatori: il linguaggio della perdita attiva il sistema d'allarme — anche perdere una tensione è, per il corpo antico, una perdita. La calma, a quanto pare, ha bisogno di un lessico che non la descriva come sottrazione. Chi insegna a rilassarsi, dunque, insegna prima di tutto a parlare: il corpo ascolta le parole più di quanto le parole stesse immaginino.", es: "Los resultados avergonzaron a los manuales: el grupo del «arribo» alcanzaba niveles de relajación mediblemente más profundos. La explicación de los investigadores: el lenguaje de la pérdida activa el sistema de alarma — incluso perder una tensión es, para el cuerpo antiguo, una pérdida. La calma, al parecer, necesita un léxico que no la describa como sustracción. Quien enseña a relajarse, entonces, enseña ante todo a hablar: el cuerpo escucha las palabras más de lo que las propias palabras imaginan." },
      ],
      predict: { q: "Antes de leer: ¿qué grupo se relajará más profundamente?", options: ["El del «approdo»: imágenes de posarse, no de perder", "El de «lasciare andare»", "Los dos igual"], answer: 0, why: "«Il lessico della calma»: las palabras como cuerpo." },
      sequence: {
        instr: "Ordena el experimento (1 = primero):",
        events: ["Due gruppi, stesso relax guidato", "Al primo gruppo: «lasciare andare la tensione»", "Al secondo: «sentire il corpo che si posa»", "Il gruppo dell'approdo si rilassa più profondamente", "Conclusione: il corpo ascolta le parole più di quanto immaginiamo"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Due gruppi, stesso relax guidato, parole diverse. Al primo: lasciare andare la tensione. Al secondo: sentire il corpo che si posa. Il gruppo dell'approdo si rilassa più profondamente. Il linguaggio della perdita attiva l'allarme. La calma ha bisogno di un lessico che non la descriva come sottrazione: il corpo ascolta le parole.",
        questions: [
          { q: "Cosa sentiva il secondo gruppo?", kind: "literal", options: ["«Il corpo che si posa»", "«Lasciare andare»", "«Correre veloce»"], answer: 0, why: "«Sentire il corpo che si posa»." },
          { q: "Chi si è rilassato più profondamente?", kind: "literal", options: ["Il gruppo dell'approdo", "Il gruppo della perdita", "Nessuno"], answer: 0, why: "«Il gruppo dell'approdo»." },
          { q: "Perché il linguaggio della perdita è un problema?", kind: "inferencial", options: ["Activa el sistema de alarma del cuerpo antiguo", "Es demasiado poético", "No es científico"], answer: 0, why: "«Attiva il sistema d'allarme»." },
        ],
      },
    },
  ],

  "cu-c1-10": [
    {
      id: "md-c1-10-1", theme: "meditazione", title: "Il saggio che si scrive camminando", titleEs: "El ensayo que se escribe caminando", minutes: 5,
      paragraphs: [
        { it: "Nietzsche scriveva che solo i pensieri concepiti camminando hanno valore. Un docente di scrittura accademica ha preso la frase alla lettera e ha costruito un metodo: ogni paragrafo del saggio viene prima «detenuto» durante una camminata — pensato, non annotato — e solo dopo scritto alla scrivania.", es: "Nietzsche escribía que solo los pensamientos concebidos caminando tienen valor. Un docente de escritura académica tomó la frase al pie de la letra y construyó un método: cada párrafo del ensayo es primero «detenido» durante una caminata — pensado, no anotado — y solo después escrito en el escritorio." },
        { it: "Gli studenti, all'inizio scettici, hanno scoperto l'effetto collaterale: i paragrafi «camminati» risultano sistematicamente più chiari di quelli «seduti». L'ipotesi del docente: camminando, la memoria di lavoro non può reggere periodi lunghi — il pensiero è costretto a semplificare. La chiarezza, dunque, non nasce dal talento: nasce dai limiti del mezzo. Chi scrive un saggio, prima o poi, deve scegliere: sedersi presto e correggere molto, o camminare molto e correggere poco.", es: "Los estudiantes, al principio escépticos, descubrieron el efecto colateral: los párrafos «caminados» resultan sistemáticamente más claros que los «sentados». La hipótesis del docente: al caminar, la memoria de trabajo no puede sostener períodos largos — el pensamiento está obligado a simplificar. La claridad, entonces, no nace del talento: nace de los límites del medio. Quien escribe un ensayo, tarde o temprano, debe elegir: sentarse pronto y corregir mucho, o caminar mucho y corregir poco." },
      ],
      predict: { q: "Antes de leer: ¿qué método construirá el docente?", options: ["Pensar cada párrafo caminando antes de escribirlo", "Escribir siempre en la biblioteca", "Dictar los ensayos al teléfono"], answer: 0, why: "«Si scrive camminando»: Nietzsche aplicado." },
      quiz: [
        { q: "Cosa faceva Nietzsche secondo la frase citata?", kind: "literal", options: ["Solo i pensieri concepiti camminando hanno valore", "Bisogna scrivere di corsa", "Camminare è una perdita di tempo"], answer: 0, why: "La frase abre el texto." },
        { q: "Perché i paragrafi «camminati» sono più chiari?", kind: "inferencial", options: ["La memoria di lavoro non regge periodi lunghi: il pensiero semplifica", "Perché si scrivono più veloci", "Porque los estudiantes son genios"], answer: 0, why: "La hipótesis del docente." },
        { q: "Sedarse presto o camminare mucho: qué elegirías para tu próximo texto?", kind: "critica", options: ["Caminar mucho y corregir poco: claridad desde el inicio", "Sentarse y corregir sin fin", "No escribir nunca"], answer: 0, why: "La caminata produce claridad estructural antes del borrador." },
      ],
      vf: [
        { text: "I paragrafi «seduti» risultano più chiari di quelli «camminati».", value: false, why: "Falso: es exactamente lo contrario." },
        { text: "Durante la camminata il pensiero viene annotato subito.", value: false, why: "Falso: «pensato, non annotato»." },
        { text: "La chiarezza nasce dai limiti del mezzo.", value: true, why: "Frase central del texto." },
      ],
    },
    {
      id: "md-c1-10-2", theme: "relax mentale", title: "La tesi di dottorato e il giardino", titleEs: "La tesis doctoral y el jardín", minutes: 5,
      paragraphs: [
        { it: "Un dottorando in crisi, a un anno dalla scadenza, ricevette dal suo relatore un consiglio inaspettato: «Coltivi un giardino». Non era una metafora per «si prenda cura di sé»: era un giardino vero, sul balcone di casa. Il relatore, vecchio professore di botanica filosofica, sosteneva una tesi impopolare: nessuno finisce una tesi senza un'attività che «cresce a un'altra velocità».", es: "Un doctorando en crisis, a un año del plazo, recibió de su tutor un consejo inesperado: «Cultive un jardín». No era una metáfora de «cuídese»: era un jardín real, en el balcón de su casa. El tutor, viejo profesor de botánica filosófica, sostenía una tesis impopular: nadie termina una tesis sin una actividad que «crece a otra velocidad»." },
        { it: "Il dottorando obbedì, più per disperazione che per fede. Il pomodoro impiega novanta giorni; la tesi, quattro anni. Ogni mattina, annaffiare diede alla sua giornata un punto fermo di crescita visibile. «La tesi», raccontò poi, «non cresceva mai, o cresceva a salti invisibili. Il pomodoro cresceva ogni giorno, indiscutibilmente. Quando è arrivata la prova del pomodoro maturo, ho capito che anche la tesi sarebbe maturata. Non è ragionamento: è fede botanica». Discusse la tesi con lode, tre mesi prima del termine — e offrì ai commissari dei pomodori del balcone.", es: "El doctorando obedeció, más por desesperación que por fe. El tomate tarda noventa días; la tesis, cuatro años. Cada mañana, regar le dio a su jornada un punto fijo de crecimiento visible. «La tesis», contó después, «nunca crecía, o crecía a saltos invisibles. El tomate crecía cada día, indiscutiblemente. Cuando llegó la prueba del tomate maduro, entendí que también la tesis maduraría. No es razonamiento: es fe botánica». Defendió la tesis con honores, tres meses antes del plazo — y les ofreció a los jurados tomates de su balcón." },
      ],
      predict: { q: "Antes de leer: ¿qué consejo dará el relatore?", options: ["Cultivar un jardín real: otra velocidad de crecimiento", "Trabajar veinte horas al día", "Cambiar de tema"], answer: 0, why: "«Il giardino»: la paciencia cultivada." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Una actividad con crecimiento visible sostiene psicológicamente los proyectos largos", "Las tesis son imposibles", "La jardinería es una pérdida de tiempo académico"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El tomate crece cada día, indiscutiblemente; la tesis, a saltos invisibles", "Defendió con honores y ofreció tomates al jurado"],
        distractors: ["El relatore le dijo de dejar la tesi", "El dottorando compró los tomates en el mercado"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Nessuno finisce una tesi senza un'attività che cresce a un'altra velocità.", "Il pomodoro cresceva ogni giorno, indiscutibilmente.", "È fede botanica, non ragionamento.", "Per finire la tesi: eliminare tutte le attività e lavorare senza giorni di pausa per quattro anni."], 
        intruder: 3, why: "Toda la tesis del relatore sostiene la necesidad del contrapeso vital." },
    },
    {
      id: "md-c1-10-3", theme: "spiritualità", title: "La bibliografia dell'anima", titleEs: "La bibliografía del alma", minutes: 5,
      paragraphs: [
        { it: "Ogni saggio accademico si chiude con la bibliografia: l'elenco dei debiti. Un vecchio professore proponeva di aggiungere, ai saggi dei suoi studenti, una seconda lista — facoltativa e mai valutata: «la bibliografia dell'anima». I libri, le persone, i paesaggi che avevano nutrito il testo senza potervi essere citati.", es: "Cada ensayo académico se cierra con la bibliografía: la lista de las deudas. Un viejo profesor proponía agregar, a los ensayos de sus estudiantes, una segunda lista — opcional y nunca evaluada: «la bibliografía del alma». Los libros, las personas, los paisajes que habían nutrido el texto sin poder ser citados." },
        { it: "Gli studenti la compilavano in segreto, e qualcosa cambiava nel loro modo di scrivere: i saggi con doppia bibliografia erano, senza eccezione, più vivi. La spiegazione del professore: «La prima bibliografia mostra da dove hai preso le idee. La seconda mostra dove hai preso te stesso». La scrittura accademica pretende di nascere solo dalla prima lista; ma ogni testo che respira ha due padri — il sapere, e l'anima che l'ha raccolto. Citare il secondo non è misticismo: è onestà.", es: "Los estudiantes la compilaban en secreto, y algo cambiaba en su manera de escribir: los ensayos con doble bibliografía eran, sin excepción, más vivos. La explicación del profesor: «La primera bibliografía muestra de dónde tomaste las ideas. La segunda muestra de dónde te tomaste a ti mismo». La escritura académica pretende nacer solo de la primera lista; pero todo texto que respira tiene dos padres — el saber, y el alma que lo recogió. Citar al segundo no es misticismo: es honestidad." },
      ],
      predict: { q: "Antes de leer: ¿qué segunda lista proponía el profesor?", options: ["La bibliografía dell'anima: libros, personas, paisajes", "Una lista de errores", "El índice analítico"], answer: 0, why: "«La bibliografia dell'anima»: las fuentes invisibles." },
      sequence: {
        instr: "Ordena la propuesta (1 = primero):",
        events: ["Il professore propone una seconda lista, facoltativa e mai valutata", "Gli studenti la compilano in segreto", "I saggi con doppia bibliografia risultano più vivi", "La prima lista mostra da dove hai preso le idee", "La seconda mostra dove hai preso te stesso"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Oltre alla bibliografia delle idee, compila la bibliografia dell'anima: i libri, le persone, i paesaggi che hanno nutrito il tuo testo senza potervi essere citati. La prima mostra da dove hai preso le idee. La seconda mostra dove hai preso te stesso. Ogni testo che respira ha due padri: il sapere e l'anima che l'ha raccolto.",
        questions: [
          { q: "Cosa contiene la bibliografia dell'anima?", kind: "literal", options: ["Libri, persone, paesaggi non citabili", "Solo articoli accademici", "I numeri di pagina"], answer: 0, why: "«I libri, le persone, i paesaggi»." },
          { q: "Cosa mostra la prima bibliografia?", kind: "literal", options: ["Da dove hai preso le idee", "Dove hai preso te stesso", "I tuoi errori"], answer: 0, why: "«Mostra da dove hai preso le idee»." },
          { q: "Cosa ha ogni testo che respira?", kind: "inferencial", options: ["Due padri: il sapere e l'anima che l'ha raccolto", "Un solo autore", "Nessun debito"], answer: 0, why: "«Due padri»." },
        ],
      },
    },
  ],
};
