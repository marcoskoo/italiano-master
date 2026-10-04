import type { MindReading } from "../cambridge-mind";

/* ═══ v9.13 · Letture tematiche B1 · Meditazione, spiritualità, qui e ora,
   relax fisico e mentale — 3 por unidad comunicativa.                     */

export const MIND_B1: Record<string, MindReading[]> = {
  "cu-b1-01": [
    {
      id: "md-b1-01-1", theme: "spiritualità", title: "L'anno in cui ho imparato a stare fermo", titleEs: "El año en que aprendí a quedarme quieto", minutes: 4,
      paragraphs: [
        { it: "Il 2019 è stato l'anno più frenetico della mia vita: tre lavori, un trasloco e un telefono che squillava senza sosta. Quando tutto si è fermato, nel 2020, ho scoperto una cosa imbarazzante: non sapevo stare fermo. Dopo dieci minuti di silenzio, sentivo il bisogno di fare qualcosa, qualunque cosa.", es: "2019 fue el año más frenético de mi vida: tres trabajos, una mudanza y un teléfono que sonaba sin parar. Cuando todo se detuvo, en 2020, descubrí algo vergonzoso: no sabía quedarme quieto. Después de diez minutos de silencio, sentía la necesidad de hacer algo, cualquier cosa." },
        { it: "Ho iniziato con cinque minuti di respiro al giorno, poi dieci, poi mezz'ora. Non è stata una conversione miracolosa: la mente scappava sempre. Ma ho capito che la spiritualità non è fare esperienze straordinarie: è diventare ordinari con attenzione. Oggi il silenzio non mi fa più paura: è diventato casa.", es: "Empecé con cinco minutos de respiro al día, luego diez, luego media hora. No fue una conversión milagrosa: la mente escapaba siempre. Pero entendí que la espiritualidad no es tener experiencias extraordinarias: es volverse ordinario con atención. Hoy el silencio ya no me da miedo: se volvió mi casa." },
      ],
      predict: { q: "Antes de leer: ¿qué descubrirá el autor cuando todo se detenga?", options: ["Que no sabía quedarse quieto y aprendería el silencio", "Una nueva carrera profesional", "Una isla desierta"], answer: 0, why: "El título anticipa el aprendizaje de la quietud." },
      quiz: [
        { q: "Com'era il 2019 per l'autore?", kind: "literal", options: ["L'anno più frenetico della sua vita", "Un anno tranquillo", "Un anno di vacanze"], answer: 0, why: "«Il 2019 è stato l'anno più frenetico della mia vita»." },
        { q: "Cosa scopriva dopo dieci minuti di silenzio?", kind: "literal", options: ["Il bisogno di fare qualcosa, qualunque cosa", "Un talento nascosto", "Il sonno profondo"], answer: 0, why: "«Sentivo il bisogno di fare qualcosa, qualunque cosa»." },
        { q: "Cosa ha capito sulla spiritualità?", kind: "inferencial", options: ["Que es volverse ordinario con atención, no buscar lo extraordinario", "Que requiere experiencias místicas", "Que es imposible para la gente ocupada"], answer: 0, why: "«Non è fare esperienze straordinarie: è diventare ordinari con attenzione»." },
        { q: "«Il silenzio è diventato casa». Qué diferencia hay entre temer el silencio y habitarlo?", kind: "critica", options: ["Habitarlo lo convierte en refugio y recurso cotidiano", "Ninguna: el silencio siempre incomoda", "El silencio es solo para monjes"], answer: 0, why: "La relación con el silencio se entrena: de amenaza a hogar." },
      ],
      vf: [
        { text: "L'autore ha iniziato con mezz'ora di meditazione al giorno.", value: false, why: "Falso: empezó con cinco minutos y creció gradualmente." },
        { text: "La conversione è stata miracolosa e immediata.", value: false, why: "Falso: «non è stata una conversione miracolosa: la mente scappava sempre»." },
        { text: "Oggi il silenzio non gli fa più paura.", value: true, why: "«Il silenzio non mi fa più paura: è diventato casa»." },
      ],
    },
    {
      id: "md-b1-01-2", theme: "qui e ora", title: "L'ultimo anno di mio padre", titleEs: "El último año de mi padre", minutes: 4,
      paragraphs: [
        { it: "Quando ho saputo che mio padre aveva poco tempo, ho fatto una scelta strana: invece di riempire i suoi ultimi mesi di cure e visite, ho deciso di esserci. Tutto il resto — lavoro, progetti, social — è passato in secondo piano.", es: "Cuando supe que mi padre tenía poco tiempo, hice una elección rara: en lugar de llenar sus últimos meses de tratamientos y visitas, decidí estar presente. Todo lo demás — trabajo, proyectos, redes — pasó a segundo plano." },
        { it: "È stato l'anno più lento e più pieno della mia vita. Bevevamo il caffè in silenzio, guardavamo il giardino, parlavamo poco ma vero. Se penso a lui, non ricordo le parole: ricordo la luce del pomeriggio sulla sua poltrona. Il qui e ora, alla fine, è l'unica cosa che resta.", es: "Fue el año más lento y más lleno de mi vida. Tomábamos el café en silencio, mirábamos el jardín, hablábamos poco pero de verdad. Si pienso en él, no recuerdo las palabras: recuerdo la luz de la tarde sobre su sillón. El aquí y ahora, al final, es lo único que queda." },
      ],
      predict: { q: "Antes de leer: ¿qué elegirá el autor ante la enfermedad del padre?", options: ["Estar presente, aunque hable poco", "Llenar los días de tratamientos y prisa", "Alejarse para no sufrir"], answer: 0, why: "«L'ultimo anno» + presencia: la elección de lo humano." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["La presencia compartida vale más que la actividad: es lo que permanece", "Hay que evitar el dolor alejándose", "Los recuerdos se construyen con palabras"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El autor pasó trabajo y proyectos a segundo plano", "Del padre recuerda la luz de la tarde, no las palabras"],
        distractors: ["El padre sanó milagrosamente", "El autor nunca habló con el padre"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Invece di riempire i mesi di cure, ho deciso di esserci.", "Bevevamo il caffè in silenzio, guardavamo il giardino.", "Parlavamo poco ma vero.", "Durante l'ultimo anno ho lavorato giorno e notte per non pensare a lui."],
        intruder: 3, why: "Toda la elección del texto es estar, no huir en el trabajo." },
    },
    {
      id: "md-b1-01-3", theme: "relax fisico", title: "La vita mi ha insegnato a respirare", titleEs: "La vida me enseñó a respirar", minutes: 4,
      paragraphs: [
        { it: "A quarant'anni, il mio cardiologo mi ha detto una frase che non dimenticherò: «Il suo cuore è sano, ma lei si comporta come se dovesse scappare da un incendio otto ore al giorno». Aveva ragione: vivevo in allarme permanente.", es: "A los cuarenta, mi cardiólogo me dijo una frase que no olvidaré: «Su corazón está sano, pero usted se comporta como si tuviera que escapar de un incendio ocho horas al día». Tenía razón: vivía en alarma permanente." },
        { it: "Il primo esercizio che mi ha prescritto non era una medicina: era il respiro diaframmatico, dieci minuti due volte al giorno. All'inizio mi sembrava ridicolo: un adulto che impara a respirare! Dopo tre mesi, la pressione era scesa e il sonno era migliorato. A volte la terapia più potente è la più semplice: il corpo sa guarire, se gli dai il tempo.", es: "El primer ejercicio que me recetó no era una medicina: era la respiración diafragmática, diez minutos dos veces al día. Al principio me parecía ridículo: ¡un adulto aprendiendo a respirar! Después de tres meses, la presión había bajado y el sueño había mejorado. A veces la terapia más potente es la más simple: el cuerpo sabe sanar, si le das tiempo." },
      ],
      predict: { q: "Antes de leer: ¿qué le «prescribirá» el cardiólogo?", options: ["Respiración diafragmática, no solo medicinas", "Una operación al corazón", "Más horas de trabajo"], answer: 0, why: "«La vita mi ha insegnato a respirare»: el respiro como terapia." },
      sequence: {
        instr: "Ordena la historia del autor (1 = primero):",
        events: ["Il cardiologo gli dice che vive come in un incendio permanente", "Riceve l'esercizio: respiro diaframmatico dieci minuti, due volte al giorno", "All'inizio trova l'esercizio ridicolo", "Pratica per tre mesi", "Pressione scesa e sonno migliorato"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Se il tuo corpo vive come in un incendio permanente, prova il respiro diaframmatico: dieci minuti, due volte al giorno. Appoggia una mano sulla pancia e falle muovere, lentamente. Non è una medicina, ma dopo tre mesi molte cose cambiano: la pressione scende, il sonno migliora. Il corpo sa guarire, se gli dai il tempo.",
        questions: [
          { q: "Quanto dura l'esercizio?", kind: "literal", options: ["Dieci minuti, due volte al giorno", "Dieci ore al giorno", "Un minuto all'anno"], answer: 0, why: "«Dieci minuti, due volte al giorno»." },
          { q: "Dove appoggi la mano?", kind: "literal", options: ["Sulla pancia", "Sul cuore", "Sulla fronte"], answer: 0, why: "«Appoggia una mano sulla pancia»." },
          { q: "Cosa cambia dopo tre mesi?", kind: "inferencial", options: ["La presión baja y el sueño mejora", "Nada en absoluto", "Hay que operarse"], answer: 0, why: "«La pressione scende, il sonno migliora»." },
        ],
      },
    },
  ],

  "cu-b1-02": [
    {
      id: "md-b1-02-1", theme: "relax mentale", title: "Il colloquio che ho vinto respirando", titleEs: "La entrevista que gané respirando", minutes: 4,
      paragraphs: [
        { it: "Avevo preparato tutto: curriculum, risposte, domande intelligenti. Ma nella sala d'attesa, il cuore batteva come un tamburo e le mani erano gelide. La candidata prima di me usciva sorridendo: perfetto, ancora più ansia!", es: "Había preparado todo: currículum, respuestas, preguntas inteligentes. Pero en la sala de espera, el corazón me latía como un tambor y las manos estaban heladas. La candidata antes que yo salía sonriendo: ¡perfecto, aún más ansiedad!" },
        { it: "Allora ho fatto una cosa che avevo imparato per caso: quattro respiri lenti, contando sei secondi per ogni espirazione. Quando sono entrata, non ero calma al cento per cento — chi lo è? — ma ero presente. Ho ascoltato davvero le domande, invece di recitare le risposte preparate. Mi hanno assunto. La direttrice mi ha detto poi: «Lei era l'unica che ascoltava».", es: "Entonces hice algo que había aprendido por casualidad: cuatro respiraciones lentas, contando seis segundos por cada exhalación. Cuando entré, no estaba calmada al cien por cien — ¿quién lo está? — pero estaba presente. Escuché de verdad las preguntas, en lugar de recitar las respuestas preparadas. Me contrataron. La directora me dijo después: «Usted era la única que escuchaba»." },
      ],
      predict: { q: "Antes de leer: ¿qué ayudará a la autora en la entrevista?", options: ["Cuatro respiraciones lentas que le dieron presencia", "Un café doble antes de entrar", "Recitar las respuestas de memoria"], answer: 0, why: "«Vinto respirando»: la respiración como ventaja real." },
      quiz: [
        { q: "Come batteva il cuore nella sala d'attesa?", kind: "literal", options: ["Come un tamburo", "Lentissimo", "Non batteva"], answer: 0, why: "«Il cuore batteva come un tamburo»." },
        { q: "Cosa faceva la candidata prima di lei?", kind: "literal", options: ["Usciva sorridendo", "Piangeva", "Sveniva"], answer: 0, why: "«La candidata prima di me usciva sorridendo»." },
        { q: "Perché l'hanno assunta, secondo la direttrice?", kind: "inferencial", options: ["Porque era la única que escuchaba de verdad", "Porque tenía el mejor currículum", "Porque conocía al jefe"], answer: 0, why: "«Lei era l'unica che ascoltava»: la presencia marcó la diferencia." },
        { q: "La autora no estaba calmada al 100%, pero estaba presente. Es suficiente?", kind: "critica", options: ["Sì: la meta no es eliminar los nervios sino no ser dominado por ellos", "No: sin calma total no hay rendimiento", "Los nervios siempre arruinan todo"], answer: 0, why: "Gestión ≠ eliminación: la presencia funciona incluso con mariposas." },
      ],
      vf: [
        { text: "L'autrice ha recitato le risposte preparate a memoria.", value: false, why: "Falso: escuchó de verdad en lugar de recitar." },
        { text: "Contava sei secondi per ogni espirazione.", value: true, why: "«Contando sei secondi per ogni espirazione»." },
        { text: "Era calma al cento per cento.", value: false, why: "Falso: «chi lo è?» — no era calma total, pero sí presente." },
      ],
    },
    {
      id: "md-b1-02-2", theme: "meditazione", title: "La pausa prima della presentazione", titleEs: "La pausa antes de la presentación", minutes: 4,
      paragraphs: [
        { it: "C'è un momento che i relatori professionisti conoscono bene: i due minuti prima di salire sul palco. Il cuore accelera, la bocca si secca, la mente recupera improvvisamente ogni errore possibile degli ultimi dieci anni.", es: "Hay un momento que los presentadores profesionales conocen bien: los dos minutos antes de subir al escenario. El corazón se acelera, la boca se seca, la mente recupera de repente cada error posible de los últimos diez años." },
        { it: "I più esperti non combattono questi due minuti: li usano. Chiudono gli occhi, fanno tre respiri profondi e ripetono una frase-ancora: «Sono qui per servire, non per brillare». La differenza tra una presentazione tesa e una presente non è il talento: è cosa fai con quei due minuti. Il palco premia chi arriva abitato, non perfetto.", es: "Los más expertos no combaten esos dos minutos: los usan. Cierran los ojos, hacen tres respiraciones profundas y repiten una frase-ancla: «Estoy aquí para servir, no para brillar». La diferencia entre una presentación tensa y una presente no es el talento: es qué haces con esos dos minutos. El escenario premia a quien llega habitado, no perfecto." },
      ],
      predict: { q: "Antes de leer: ¿qué hacen los expertos con los 2 minutos previos?", options: ["Los usan: respiran y anclan la intención", "Los pasan repasando notas frenéticamente", "Los dedican a quejarse"], answer: 0, why: "«La pausa prima della presentazione»: el rito de los 120 segundos." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Lo que haces con los dos minutos previos define la presentación", "El talento lo es todo en el escenario", "Hay que eliminar los nervios con medicación"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["La mente recupera cada error posible antes de subir", "La frase-ancla: «Estoy aquí para servir, no para brillar»"],
        distractors: ["Los expertos nunca sienten nervios", "El texto recomienda memorizar el discurso palabra por palabra"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Chiudono gli occhi e fanno tre respiri profondi.", "Ripetono: «Sono qui per servire, non per brillare».", "Il palco premia chi arriva abitato, non perfetto.", "Nei due minuti prima, rilegge gli appunti venti volte in preda al panico."],
        intruder: 3, why: "El texto propone lo contrario: usar la pausa, no llenarla de pánico." },
    },
    {
      id: "md-b1-02-3", theme: "qui e ora", title: "Il colloquio di gruppo", titleEs: "La entrevista de grupo", minutes: 4,
      paragraphs: [
        { it: "Nei colloqui di gruppo, dieci candidati si contendono tre posti. La tentazione è parlare più forte, più spesso, più degli altri. Ho visto candidati interrompersi a vicenda come in un talk show. Io ho fatto l'opposto: ho ascoltato.", es: "En las entrevistas de grupo, diez candidatos se disputan tres puestos. La tentación es hablar más fuerte, más seguido, más que los demás. Vi candidatos interrumpirse mutuamente como en un programa de debate. Yo hice lo contrario: escuché." },
        { it: "Quando parlavo, riassumevo prima il punto di vista dell'altro: «Come diceva Sara, il problema è… e io aggiungerei…». Piccola tecnica, grande effetto. Gli selezionatori cercano futuri colleghi, non vincitori di dibattiti. Sono passata io. La presenza — ascoltare prima di parlare — è la competenza più rara del mercato.", es: "Cuando hablaba, resumía primero el punto de vista del otro: «Como decía Sara, el problema es… y yo agregaría…». Pequeña técnica, gran efecto. Los seleccionadores buscan futuros colegas, no ganadores de debates. Pasé yo. La presencia — escuchar antes de hablar — es la competencia más rara del mercado." },
      ],
      predict: { q: "Antes de leer: ¿qué estrategia usará la autora en el grupo?", options: ["Escuchar y construir sobre lo dicho por otros", "Hablar más fuerte que todos", "Quedarse en silencio absoluto"], answer: 0, why: "«Il colloquio di gruppo» + la paradoja de escuchar." },
      sequence: {
        instr: "Ordena la técnica de la autora (1 = primero):",
        events: ["Dieci candidati si contendono tre posti", "Molti si interrompono come in un talk show", "Lei ascolta con attenzione", "Quando parla, riassume prima il punto dell'altro", "Passa la selezione: cercavano colleghi, non vincitori"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Nei colloqui di gruppo, la competenza più rara è la presenza. Prima di parlare, riassumi il punto di vista dell'altro: «Come dicevi tu… e io aggiungerei…». Gli selezionatori non cercano chi parla di più, ma chi ascolta meglio. La presenza si nota, e si assume.",
        questions: [
          { q: "Qual è la competenza più rara del mercato?", kind: "literal", options: ["La presenza: saper ascoltare", "Parlare veloce", "Conoscere Excel"], answer: 0, why: "«La competenza più rara è la presenza»." },
          { q: "Cosa fai prima di parlare?", kind: "literal", options: ["Riassumo il punto di vista dell'altro", "Respiro forte nel microfono", "Intervengo subito"], answer: 0, why: "«Prima di parlare, riassumi il punto di vista dell'altro»." },
          { q: "Chi cercano gli selezionatori?", kind: "inferencial", options: ["Chi escucha bien, futuri colegas", "Chi vince i dibattiti", "Chi tace sempre"], answer: 0, why: "«Non cercano chi parla di più, ma chi ascolta meglio»." },
        ],
      },
    },
  ],

  "cu-b1-03": [
    {
      id: "md-b1-03-1", theme: "qui e ora", title: "Il volo cancellato", titleEs: "El vuelo cancelado", minutes: 4,
      paragraphs: [
        { it: "Aeroporto di Malpensa, ore 22: volo cancellato. Duecento persone urlano al telefono, fanno code, combattono. Io mi sono seduto in un angolo, davanti alla vetrata, e ho guardato gli aerei decollare nella notte. Strano, vero?", es: "Aeropuerto de Malpensa, 22 horas: vuelo cancelado. Doscientas personas gritan al teléfono, hacen colas, combaten. Yo me senté en un rincón, frente al ventanal, y miré los aviones despegar en la noche. Raro, ¿no?" },
        { it: "Dopo un'ora è arrivata una signora: «Ma lei non è arrabbiato?». «Certo che sono arrabbiato», ho risposto, «ma l'aereo non decolla con la mia rabbia. Riparto domani alle nove. Nel frattempo, guardo decollare gli altri». La rabbia è un biglietto per un viaggio che non parte mai: la calma, invece, parte sempre.", es: "Después de una hora llegó una señora: «Pero usted ¿no está enojado?». «Claro que estoy enojado», respondí, «pero el avión no despega con mi rabia. Salgo mañana a las nueve. Mientras tanto, miro despegar a los demás». La rabia es un billete para un viaje que nunca parte: la calma, en cambio, siempre parte." },
      ],
      predict: { q: "Antes de leer: ¿cómo reaccionará el autor al vuelo cancelado?", options: ["Se sienta a mirar los aviones: calma activa", "Grita más fuerte que todos", "Duerme en el suelo"], answer: 0, why: "«Il volo cancellato» + la sorpresa de la calma." },
      quiz: [
        { q: "Dove è successo?", kind: "literal", options: ["All'aeroporto di Malpensa", "Alla stazione di Milano", "Al porto di Genova"], answer: 0, why: "«Aeroporto di Malpensa, ore 22»." },
        { q: "Cosa ha fatto l'autore?", kind: "literal", options: ["Si è seduto davanti alla vetrata a guardare gli aerei", "Ha urlato al telefono", "Ha prenotato un volo privato"], answer: 0, why: "«Mi sono seduto in un angolo, davanti alla vetrata»." },
        { q: "Cosa significa «l'aereo non decolla con la mia rabbia»?", kind: "inferencial", options: ["La rabia no cambia los hechos: no sirve de motor", "Hay que esconder los sentimientos", "Los aviones funcionan con combustible especial"], answer: 0, why: "Aceptar el hecho no es aprobarlo: libera energía útil." },
        { q: "«La rabbia è un biglietto per un viaggio che non parte mai». Qué piensas de esta metáfora?", kind: "critica", options: ["Preciosa: la rabia promete destino pero no despega", "Falsa: la rabia a veces resuelve cosas", "No entiendo la metáfora"], answer: 0, why: "La rabia da sensación de acción sin efecto real sobre lo incontrolable." },
      ],
      vf: [
        { text: "L'autore non era arrabbiato per il volo cancellato.", value: false, why: "Falso: «certo che sono arrabbiato» — pero no se deja dominar." },
        { text: "Duecento persone urlavano e facevano code.", value: true, why: "«Duecento persone urlano al telefono, fanno code»." },
        { text: "La signora gli ha chiesto perché non era arrabbiato.", value: true, why: "«Ma lei non è arrabbiato?»." },
      ],
    },
    {
      id: "md-b1-03-2", theme: "relax fisico", title: "Il mal di schiena del viaggio", titleEs: "El dolor de espalda del viaje", minutes: 4,
      paragraphs: [
        { it: "Chi viaggia per lavoro conosce il rituale: valigia, taxi, aeroporto, sedile, riunione, sedile, hotel. Dopo tre giorni di questo ciclo, il corpo si presenta il conto: schiena bloccata, collo di pietra, occhi rossi.", es: "Quien viaja por trabajo conoce el ritual: maleta, taxi, aeropuerto, asiento, reunión, asiento, hotel. Después de tres días de este ciclo, el cuerpo presenta la factura: espalda bloqueada, cuello de piedra, ojos rojos." },
        { it: "Un collega frequent flyer mi ha dato il suo segreto, che ora è anche il mio: «Il primo gesto in albergo non è accendere la TV: sono cinque minuti di stretching sul tappeto. Prima il corpo, poi il mondo». Da allora, viaggio con un tappetino pieghevole che pesa meno di un ombrello. Il mondo non si ferma perché ti stiri cinque minuti; la tua schiena, invece, se ne ricorda per tutto il viaggio.", es: "Un colega viajero frecuente me dio su secreto, que ahora también es mío: «El primer gesto en el hotel no es encender la TV: son cinco minutos de estiramientos en la alfombra. Primero el cuerpo, luego el mundo». Desde entonces viajo con una esterilla plegable que pesa menos que un paraguas. El mundo no se detiene porque te estires cinco minutos; tu espalda, en cambio, lo recuerda durante todo el viaje." },
      ],
      predict: { q: "Antes de leer: ¿cuál será el secreto del viajero frecuente?", options: ["Cinco minutos de estiramientos al llegar al hotel", "Dormir con la televisión encendida", "Cambiar de hotel cada noche"], answer: 0, why: "«Il mal di schiena del viaggio»: el remedio del first flyer." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Cuidar el cuerpo primero sostiene todo el viaje", "Viajar por trabajo es imposible sin dolor", "Los hoteles deberían tener gimnasios"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El ciclo de viaje pasa factura: espalda, cuello, ojos", "Viaja con una esterilla plegable más liviana que un paraguas"],
        distractors: ["El texto recomienda dejar de viajar por trabajo", "El colega dejó de viajar por el dolor"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Il primo gesto in albergo: cinque minuti di stretching.", "Prima il corpo, poi il mondo.", "Il tappetino pesa meno di un ombrello.", "Appena arrivato in albergo, accendi la TV e lavora fino a mezzanotte."],
        intruder: 3, why: "El secreto del texto es exactamente no hacer eso: cuerpo primero." },
    },
    {
      id: "md-b1-03-3", theme: "meditazione", title: "Il pellegrinaggio lento", titleEs: "La peregrinación lenta", minutes: 4,
      paragraphs: [
        { it: "L'anno scorso ho camminato per dieci giorni sulla Via Francigena: trenta chilometri al giorno, uno zaino di sette chili e nessuna meta urgente. Il primo giorno ho odiato tutto: i piedi, il sole, la lentezza. Il terzo giorno, qualcosa si è rotto dentro di me — nel senso buono.", es: "El año pasado caminé diez días por la Vía Francígena: treinta kilómetros al día, una mochila de siete kilos y ninguna meta urgente. El primer día odié todo: los pies, el sol, la lentitud. El tercer día, algo se rompió dentro de mí — en el buen sentido." },
        { it: "La mente, che correva sempre, ha dovuto adattarsi al passo dei piedi. Camminavo, e basta. I pensieri arrivavano come le nuvole: guardavo passare anche loro. Il decimo giorno, a Roma, un altro pellegrino mi ha chiesto: «Che cosa hai trovato lungo la strada?». Ci ho pensato e ho risposto: «Il passo giusto per la mia vita».", es: "La mente, que corría siempre, tuvo que adaptarse al paso de los pies. Caminaba, y ya. Los pensamientos llegaban como las nubes: miraba pasar también ellos. El décimo día, en Roma, otro peregrino me preguntó: «¿Qué encontraste por el camino?». Lo pensé y respondí: «El paso justo para mi vida»." },
      ],
      predict: { q: "Antes de leer: ¿qué encontrará el peregrino al final?", options: ["El paso justo para su vida", "Un tesoro arqueológico", "Un atajo en tren"], answer: 0, why: "«Il pellegrinaggio lento»: el camino como maestro." },
      sequence: {
        instr: "Ordena la transformación interior (1 = primero):",
        events: ["Cammina dieci giorni sulla Via Francigena", "Il primo giorno odia tutto: piedi, sole, lentezza", "Il terzo giorno qualcosa si rompe — nel senso buono", "La mente si adatta al passo dei piedi", "A Roma capisce: ha trovato il passo giusto per la sua vita"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Sulla Via Francigena ho camminato trenta chilometri al giorno. Il primo giorno ho odiato la lentezza. Poi la mente si è adattata al passo dei piedi: i pensieri passavano come le nuvole. Un pellegrino mi ha chiesto cosa avevo trovato. Il passo giusto per la mia vita.",
        questions: [
          { q: "Quanti chilometri al giorno?", kind: "literal", options: ["Trenta", "Trecento", "Tre"], answer: 0, why: "«Trenta chilometri al giorno»." },
          { q: "Come passavano i pensieri?", kind: "literal", options: ["Come le nuvole", "Come i treni", "Come i camion"], answer: 0, why: "«I pensieri passavano come le nuvole»." },
          { q: "Cosa ha trovato, alla fine?", kind: "inferencial", options: ["Il passo giusto per la sua vita", "Un ristorante stellato", "Un nuovo lavoro"], answer: 0, why: "«Il passo giusto per la mia vita»." },
        ],
      },
    },
  ],

  "cu-b1-04": [
    {
      id: "md-b1-04-1", theme: "spiritualità", title: "La benedizione della nuova casa", titleEs: "La bendición de la casa nueva", minutes: 4,
      paragraphs: [
        { it: "Quando ci siamo trasferiti, mia suocera ha voluto entrare per prima nella casa vuota. Ha portato solo tre cose: sale, pane e una candela. «Il sale conserva, il pane nutre, la candela illumina», ha detto, «senza queste tre cose, una casa è solo un indirizzo».", es: "Cuando nos mudamos, mi suegra quiso entrar primero a la casa vacía. Trajo solo tres cosas: sal, pan y una vela. «La sal conserva, el pan nutre, la vela ilumina», dijo, «sin estas tres cosas, una casa es solo una dirección»." },
        { it: "All'inizio ho sorriso dentro di me: sembrava una scena di un film antico. Ma dopo un anno, devo ammetterlo: quella piccola cerimonia ha cambiato il modo di abitare la casa. Non è superstizione: è intenzione. Una casa benedetta non è una casa perfetta: è una casa dove qualcuno ha detto, ad alta voce, cosa conta.", es: "Al principio sonreí por dentro: parecía una escena de una película antigua. Pero después de un año, debo admitirlo: esa pequeña ceremonia cambió el modo de habitar la casa. No es superstición: es intención. Una casa bendecida no es una casa perfecta: es una casa donde alguien dijo, en voz alta, qué importa." },
      ],
      predict: { q: "Antes de leer: ¿qué llevará la suegra a la casa nueva?", options: ["Sal, pan y una vela: una bendición doméstica", "Un televisor enorme", "Una lista de tareas"], answer: 0, why: "«La benedizione della nuova casa»: ritual de mudanza." },
      quiz: [
        { q: "Cosa simboleggia il sale?", kind: "literal", options: ["Conserva", "Nutre", "Illumina"], answer: 0, why: "«Il sale conserva»." },
        { q: "Cosa ha cambiato la cerimonia?", kind: "literal", options: ["Il modo di abitare la casa", "Il colore dei muri", "Il prezzo dell'affitto"], answer: 0, why: "«Ha cambiato il modo di abitare la casa»." },
        { q: "Perché non è superstizione, secondo l'autore?", kind: "inferencial", options: ["Porque es una declaración de intenciones, no una creencia mágica", "Porque la suegra aveva ragione per caso", "Porque el pan era muy bueno"], answer: 0, why: "«Non è superstizione: è intenzione» — decir qué importa." },
        { q: "Tienes rituales al mudarte o al empezar algo? Qué función cumplen?", kind: "critica", options: ["Marcan el paso y dan significado al espacio y al tiempo", "Son pérdida de tiempo", "Solo valen si son religiosos"], answer: 0, why: "Los rituales domésticos anclan intenciones: psicología del espacio." },
      ],
      vf: [
        { text: "La suocera è entrata per prima con tre cose.", value: true, why: "Sale, pane e una candela." },
        { text: "Una casa benedetta è una casa perfetta.", value: false, why: "Falso: «non è una casa perfetta» — es una casa con intenciones declaradas." },
        { text: "L'autore all'inizio era scettico.", value: true, why: "«Ho sorriso dentro di me»." },
      ],
    },
    {
      id: "md-b1-04-2", theme: "relax fisico", title: "L'angolo dei respiri", titleEs: "El rincón de los respiros", minutes: 4,
      paragraphs: [
        { it: "Nel progetto della nostra nuova casa, l'architetto mi ha chiesto la lista delle stanze: cucina, camere, bagno, studio. Io ho aggiunto una voce che lo ha sorpreso: «un angolo dei respiri». Niente di speciale: due metri quadri, una poltrona, una finestra, una pianta.", es: "En el proyecto de nuestra casa nueva, el arquitecto me pidió la lista de habitaciones: cocina, dormitorios, baño, estudio. Yo agregué un punto que lo sorprendió: «un rincón de los respiros». Nada especial: dos metros cuadrados, un sillón, una ventana, una planta." },
        { it: "«Due metri quadri per fare cosa?», mi ha chiesto. «Per non fare». È l'unico spazio della casa senza schermo, senza tavolo, senza mansione. Sei mesi dopo il trasloco, è il posto più usato da tutta la famiglia, anche dal gatto. Le case moderne hanno una stanza per ogni attività, tranne quella più importante: fermarsi.", es: "«¿Dos metros cuadrados para hacer qué?», me preguntó. «Para no hacer». Es el único espacio de la casa sin pantalla, sin mesa, sin función. Seis meses después de la mudanza, es el lugar más usado por toda la familia, incluso por el gato. Las casas modernas tienen una habitación para cada actividad, salvo la más importante: detenerse." },
      ],
      predict: { q: "Antes de leer: ¿qué pedirá el autor al arquitecto?", options: ["Un rincón para no hacer nada: dos metros cuadrados", "Un gimnasio completo", "Una sala de cine"], answer: 0, why: "«L'angolo dei respiri»: el espacio de la pausa." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Dedicar un espacio físico a la pausa cambia los hábitos de una familia", "Las casas modernas son demasiado pequeñas", "Los gatos necesitan su propia habitación"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El rincón: dos metros cuadrados, un sillón, una ventana, una planta", "Es el espacio más usado por toda la familia, incluso el gato"],
        distractors: ["El arquitecto construyó una sala de meditación de veinte metros", "El rincón quedó prohibido para los niños"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Un angolo dei respiri: due metri quadri, una poltrona, una finestra.", "È l'unico spazio senza schermo e senza mansione.", "È il posto più usato da tutta la famiglia.", "Nell'angolo dei respiri abbiamo installato una TV gigante e una scrivania."],
        intruder: 3, why: "La definición misma del rincón es «sin pantalla, sin función»: el intruso la destruye." },
    },
    {
      id: "md-b1-04-3", theme: "relax mentale", title: "Il trasloco dentro la testa", titleEs: "La mudanza dentro de la cabeza", minutes: 4,
      paragraphs: [
        { it: "Chi ha fatto un trasloco lo sa: il vero casino non è negli scatoloni, è nella testa. Per settimane, la mente ripete liste infinite: il gas, il frigo, le chiavi, l'indirizzo nuovo. Ho traslocato sette volte: l'ultima, finalmente, ho fatto una cosa diversa.", es: "Quien se ha mudado lo sabe: el verdadero desorden no está en las cajas, está en la cabeza. Durante semanas, la mente repite listas infinitas: el gas, el refrigerador, las llaves, la dirección nueva. Me he mudado siete veces: la última, por fin, hice algo distinto." },
        { it: "Il giorno prima del trasloco, ho dedicato un'ora a «spegnere» la casa vecchia: ho camminato per ogni stanza, ho detto grazie ad alta voce e ho lasciato andare. Sembra una follia new age, ma il giorno dopo la mia mente era tranquilla: aveva già salutato. I traslochi falliscono quando portiamo con noi la casa di prima dentro la testa. Prima si svuota la mente, poi gli scatoloni.", es: "El día antes de la mudanza, dediqué una hora a «apagar» la casa vieja: caminé por cada habitación, dije gracias en voz alta y dejé ir. Parece una locura new age, pero al día siguiente mi mente estaba tranquila: ya había despedido. Las mudanzas fallan cuando llevamos con nosotros la casa de antes dentro de la cabeza. Primero se vacía la mente, luego las cajas." },
      ],
      predict: { q: "Antes de leer: ¿qué hará el autor el día antes de la séptima mudanza?", options: ["«Apagar» la casa vieja caminando y agradeciendo", "Empaquetar hasta las 3 a.m.", "Discutir con los transportistas"], answer: 0, why: "«Il trasloco dentro la testa»: el ritual previo." },
      sequence: {
        instr: "Ordena el ritual de despedida (1 = primero):",
        events: ["Il giorno prima del trasloco dedica un'ora alla casa vecchia", "Cammina per ogni stanza", "Dice grazie ad alta voce", "Lascia andare la vecchia casa", "Il giorno dopo la mente è tranquilla: aveva già salutato"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Prima di traslocare, spegni la casa vecchia: cammina per ogni stanza, di' grazie ad alta voce, lascia andare. Sembra strano, ma funziona. La mente tranquilla rende leggeri anche gli scatoloni. Prima si svuota la mente, poi gli scatoloni.",
        questions: [
          { q: "Cosa devi dire ad alta voce?", kind: "literal", options: ["Grazie", "Addio per sempre", "Niente, in silenzio"], answer: 0, why: "«Di' grazie ad alta voce»." },
          { q: "Cosa devi fare dopo i ringraziamenti?", kind: "literal", options: ["Lasciare andare", "Chiudere a chiave tutto", "Piangere un'ora"], answer: 0, why: "«Lascia andare»." },
          { q: "Cosa si svuota per primo?", kind: "inferencial", options: ["La mente, poi gli scatoloni", "Gli scatoloni, poi la mente", "Il frigo"], answer: 0, why: "«Prima si svuota la mente, poi gli scatoloni»." },
        ],
      },
    },
  ],

  "cu-b1-05": [
    {
      id: "md-b1-05-1", theme: "qui e ora", title: "Camminare nella natura che resta", titleEs: "Caminar en la naturaleza que queda", minutes: 4,
      paragraphs: [
        { it: "Ogni domenica mattina, prendo lo stesso sentiero nel bosco dietro casa. Potrei cambiare percorso, ma non lo faccio: conosco ogni curva, ogni quercia, ogni ruscello. E proprio questa conoscenza rende speciale il cammino: quando il percorso è noto, l'attenzione si libera per i dettagli.", es: "Cada domingo por la mañana, tomo el mismo sendero en el bosque detrás de casa. Podría cambiar de ruta, pero no lo hago: conozco cada curva, cada roble, cada arroyo. Y justo ese conocimiento hace especial el camino: cuando la ruta es conocida, la atención se libera para los detalles." },
        { it: "Ho visto quel bosco in tutte le stagioni: la nebbia di novembre, il verde esplosivo di aprile, il silenzio carico di neve di gennaio. Gli scienziati lo chiamano «attenzione involontaria»: la natura non chiede sforzo, ma dà riposo. Il bosco non ha niente da dirmi e io non ho niente da dimostrargli: per questo, insieme, funzioniamo.", es: "He visto ese bosque en todas las estaciones: la niebla de noviembre, el verde explosivo de abril, el silencio cargado de nieve de enero. Los científicos lo llaman «atención involuntaria»: la naturaleza no pide esfuerzo, pero da descanso. El bosque no tiene nada que decirme y yo no tengo nada que demostrarle: por eso, juntos, funcionamos." },
      ],
      predict: { q: "Antes de leer: ¿por qué repetirá siempre el mismo sendero?", options: ["Porque la ruta conocida libera la atención para los detalles", "Porque se perdió una vez", "Porque es el más corto"], answer: 0, why: "«Camminare nella natura che resta»: la repetición consciente." },
      quiz: [
        { q: "Quando cammina nel bosco?", kind: "literal", options: ["Ogni domenica mattina", "Ogni lunedì pomeriggio", "Una volta all'anno"], answer: 0, why: "«Ogni domenica mattina»." },
        { q: "Come chiamano gli scienziati l'effetto della natura?", kind: "literal", options: ["Attenzione involontaria", "Memoria fotografica", "Riposo attivo"], answer: 0, why: "«Gli scienziati lo chiamano attenzione involontaria»." },
        { q: "Perché il bosco e l'autore «funzionano insieme»?", kind: "inferencial", options: ["Porque ninguno exige nada al otro: no hay nada que demostrar", "Porque el bosco le da frutas", "Porque ambos están enamorados"], answer: 0, why: "«Il bosco non ha niente da dirmi e io niente da dimostrargli»." },
        { q: "Cambiarias de ruta cada semana o repetirías la misma? Por qué?", kind: "critica", options: ["Repetir: la familiaridad afina la observación de los cambios", "Cambiar: la novedad es lo único que estimula", "Da igual: caminar es caminar"], answer: 0, why: "El sendero fijo se vuelve medidor sensible de los cambios estacionales." },
      ],
      vf: [
        { text: "L'autore cambia sentiero ogni domenica.", value: false, why: "Falso: toma siempre el mismo sendero." },
        { text: "Ha visto il bosco in tutte le stagioni.", value: true, why: "Nebbia, verde, nieve: las tres estaciones descritas." },
        { text: "La natura chiede un grande sforzo mentale.", value: false, why: "Falso: «la natura non chiede sforzo, ma dà riposo»." },
      ],
    },
    {
      id: "md-b1-05-2", theme: "spiritualità", title: "Il salmo della pioggia", titleEs: "El salmo de la lluvia", minutes: 4,
      paragraphs: [
        { it: "Mia nonna contadina non è mai entrata in una chiesa di città, ma viveva una religiosità antica: ringraziava la pioggia. «Senza di lei», diceva accarezzando la terra bagnata, «siamo solo polvere impaziente».", es: "Mi abuela campesina nunca entró en una iglesia de ciudad, pero vivía una religiosidad antigua: agradecía la lluvia. «Sin ella», decía acariciando la tierra mojada, «somos solo polvo impaciente»." },
        { it: "Da lei ho imparato una spiritualità materiale, fatta di cose che si toccano: il pane, l'acqua, la terra, le mani. Il suo calendario non aveva santi ma stagioni: semina, attesa, raccolto, riposo. Oggi viviamo in case climatizzate, con la frutta tutto l'anno, e ci siamo dimenticati di ringraziare. La pioggia continua a cadere gratis: l'ingratitudine, invece, la paghiamo cara.", es: "De ella aprendí una espiritualidad material, hecha de cosas que se tocan: el pan, el agua, la tierra, las manos. Su calendario no tenía santos sino estaciones: siembra, espera, cosecha, descanso. Hoy vivimos en casas con aire acondicionado, con fruta todo el año, y nos olvidamos de agradecer. La lluvia sigue cayendo gratis: la ingratitud, en cambio, la pagamos cara." },
      ],
      predict: { q: "Antes de leer: ¿qué agradecía la nonna contadina?", options: ["La lluvia: una espiritualidad de la tierra", "El dinero de la ciudad", "La televisión"], answer: 0, why: "«Il salmo della pioggia»: la religiosidad campesina." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Existe una espiritualidad material: agradecer lo que la tierra da gratis", "La agricultura es un negocio obsoleto", "Las iglesias de ciudad son mejores"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El calendario de la nonna tenía estaciones, no santos", "Hoy, con fruta todo el año, nos olvidamos de agradecer"],
        distractors: ["La nonna odiaba la lluvia porque arruinaba la cosecha", "El texto dice que la ingratitud es gratis"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["La nonna ringraziava la pioggia.", "«Senza di lei siamo solo polvere impaziente».", "Il suo calendario aveva stagioni: semina, attesa, raccolto, riposo.", "La spiritualità della nonna era fatta di cose che non si possono toccare."],
        intruder: 3, why: "El texto dice lo contrario: «una spiritualità materiale, fatta di cose che si toccano»." },
    },
    {
      id: "md-b1-05-3", theme: "relax fisico", title: "Il bagno nel lago di ottobre", titleEs: "El baño en el lago de octubre", minutes: 4,
      paragraphs: [
        { it: "C'è un gruppo di persone, in tutta Italia, che fa una cosa che la maggior parte considera follia: il bagno nel lago anche a ottobre. Io mi sono unito a loro l'autunno scorso, spinto più dalla curiosità che dal coraggio.", es: "Hay un grupo de personas, en toda Italia, que hace algo que la mayoría considera locura: el baño en el lago también en octubre. Yo me uní a ellas el otoño pasado, empujado más por la curiosidad que por el valor." },
        { it: "Il protocollo è preciso: si entra piano, si respira profondo, si resta trenta secondi, si esce e ci si copre subito. La sensazione? Prima il freddo morde, poi — e questo nessuno mi ci aveva preparato — arriva una calda onda di calma che dura ore. Gli amici del gruppo la chiamano «il fuoco d'acqua». Non so se è scienza o suggestione: so che il mio corpo, quel pomeriggio, era sveglio e tranquillo insieme.", es: "El protocolo es preciso: se entra despacio, se respira profundo, se queda uno treinta segundos, se sale y se cubre enseguida. ¿La sensación? Primero el frío muerde, luego — y a esto nadie me había preparado — llega una tibia ola de calma que dura horas. Los amigos del grupo la llaman «el fuego de agua». No sé si es ciencia o sugestión: sé que mi cuerpo, esa tarde, estaba despierto y tranquilo a la vez." },
      ],
      predict: { q: "Antes de leer: ¿qué sentirá tras el frío inicial?", options: ["Una ola de calma que dura horas", "Un resfrío garantizado", "Nada en absoluto"], answer: 0, why: "«Il bagno nel lago di ottobre»: el frío que despierta." },
      sequence: {
        instr: "Ordena el protocolo del baño (1 = primero):",
        events: ["Si entra piano nel lago", "Si respira profondo", "Si resta trenta secondi", "Si esce e ci si copre subito", "Arriva «il fuoco d'acqua»: una calda onda di calma"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Il bagno freddo di ottobre ha un protocollo: entra piano, respira profondo, resta trenta secondi, esci e copriti subito. Il freddo morde, ma poi arriva una calda onda di calma che dura ore. Gli amici la chiamano il fuoco d'acqua: il corpo sveglio e tranquillo insieme.",
        questions: [
          { q: "Quanto si resta nel lago?", kind: "literal", options: ["Trenta secondi", "Trenta minuti", "Tre ore"], answer: 0, why: "«Resta trenta secondi»." },
          { q: "Come chiamano quella sensazione?", kind: "literal", options: ["Il fuoco d'acqua", "Il gelo eterno", "La doccia romana"], answer: 0, why: "«Gli amici la chiamano il fuoco d'acqua»." },
          { q: "Com'è il corpo dopo il bagno?", kind: "inferencial", options: ["Sveglio e tranquillo insieme", "Addormentato", "Irritato"], answer: 0, why: "«Sveglio e tranquillo insieme»." },
        ],
      },
    },
  ],

  "cu-b1-06": [
    {
      id: "md-b1-06-1", theme: "meditazione", title: "La cucina come practice", titleEs: "La cocina como práctica", minutes: 4,
      paragraphs: [
        { it: "Ho scoperto lo slow cooking nell'anno più stressante della mia vita. Un'amica mi ha regalato una pentola di coccio e un ricettario di nonne: «Il forno fa il lavoro», ha detto, «tu fai solo l'attesa».", es: "Descubrí la cocina lenta en el año más estresante de mi vida. Una amiga me regaló una olla de barro y un recetario de abuelas: «El horno hace el trabajo», dijo, «tú solo haces la espera»." },
        { it: "Domenica dopo domenica, ho imparato una cosa che nessun corso di meditazione mi aveva insegnato: l'attesa può essere il piatto principale. Mentre il ragù cuoceva per tre ore, io non «perdevo tempo»: lo passavo. Leggevo, guardavo il vapore, semplicemente stavo. La pratica della domenica è diventata la mia meditazione più stabile: profuma, nutre e non chiede di sedersi a gambe incrociate.", es: "Domingo tras domingo, aprendí algo que ningún curso de meditación me había enseñado: la espera puede ser el plato principal. Mientras el ragù cocía tres horas, yo no «perdía tiempo»: lo pasaba. Leía, miraba el vapor, simplemente estaba. La práctica del domingo se volvió mi meditación más estable: perfuma, nutre y no pide sentarse con las piernas cruzadas." },
      ],
      predict: { q: "Antes de leer: ¿qué aprenderá con la olla de barro?", options: ["La espera como plato principal de una meditación", "Recetas para impresionar invitados", "A cocinar en cinco minutos"], answer: 0, why: "«La cucina come practice»: la espera que nutre." },
      quiz: [
        { q: "Cosa ha regalato l'amica?", kind: "literal", options: ["Una pentola di coccio e un ricettario", "Un corso di meditazione", "Una macchina del caffè"], answer: 0, why: "«Una pentola di coccio e un ricettario di nonne»." },
        { q: "Quanto cuoceva il ragù?", kind: "literal", options: ["Tre ore", "Tre minuti", "Tre giorni"], answer: 0, why: "«Mentre il ragù cuoceva per tre ore»." },
        { q: "Cosa significa «io non perdevo tempo: lo passavo»?", kind: "inferencial", options: ["Distingue perder (desperdiciar) de pasar (habitar) el tiempo", "Que era muy lento para leer", "Que el ragù se quemaba"], answer: 0, why: "El juego de palabras marca la diferencia entre desperdicio y presencia." },
        { q: "La meditación «no pide sentarse con las piernas cruzadas». Qué ventajas tiene anclar la práctica en una actividad cotidiana?", kind: "critica", options: ["Se integra en la rutina: no requiere un espacio ni postura especiales", "Ninguna: meditar sin postura no cuenta", "Solo sirve para quien no sabe meditar"], answer: 0, why: "Los hábitos anclados en lo cotidiano sobreviven mejor que los que exigen condiciones ideales." },
      ],
      vf: [
        { text: "L'amica gli ha regalato un corso di meditazione costoso.", value: false, why: "Falso: una olla de barro y un recetario." },
        { text: "L'attesa può essere il piatto principale.", value: true, why: "Es la lección central del texto." },
        { text: "La pratica della domenica profuma e nutre.", value: true, why: "«Profuma, nutre e non chiede di sedersi a gambe incrociate»." },
      ],
    },
    {
      id: "md-b1-06-2", theme: "qui e ora", title: "Il mercato del giovedì", titleEs: "El mercado del jueves", minutes: 4,
      paragraphs: [
        { it: "Ogni giovedì, la piazza del paese si riempie di bancarelle. Potrei fare la spesa al supermercato in quindici minuti, ma il giovedì vado al mercato: ci metto un'ora e mezza, e ne vale la pena.", es: "Cada jueves, la plaza del pueblo se llena de puestos. Podría hacer la compra en el supermercado en quince minutos, pero el jueves voy al mercado: tardo hora y media, y vale la pena." },
        { it: "Al mercato non compri solo le cose: compri la loro storia. Il contadino ti dice dove sono cresciute le zucchine, la signora ti insegna a scegliere le pesche, il pescatore ti giura che il branzino ha dormito stanotte. Supermercato: anonimato e velocità. Mercato: nomi, stagioni, mani. Il qui e ora, il giovedì, ha l'odore del basilico fresco e la voce della gente che conosce quello che vende.", es: "En el mercado no compras solo las cosas: compras su historia. El campesino te dice dónde crecieron los zucchini, la señora te enseña a elegir los duraznos, el pescador te jura que la lubina durmió esta noche. Supermercado: anonimato y velocidad. Mercado: nombres, estaciones, manos. El aquí y ahora, los jueves, huele a albahaca fresca y tiene la voz de gente que conoce lo que vende." },
      ],
      predict: { q: "Antes de leer: ¿qué compra en el mercado además de las cosas?", options: ["La historia de lo que compra: nombres, estaciones, manos", "Tiempo perdido", "Solo productos más caros"], answer: 0, why: "«Il mercato del giovedì»: la compra con rostro humano." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["El mercado ofrece lo que el supermercado no puede: historias, nombres y presencia", "El supermercado siempre es más barato", "Hay que evitar los mercados de pueblo"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["En el mercado tarda hora y media en vez de quince minutos", "El pescador jura que la lubina durmió esta noche"],
        distractors: ["El texto dice que el basilino es lo único importante", "La autora odia los jueves"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Il contadino dice dove sono cresciute le zucchine.", "La signora insegna a scegliere le pesche.", "Al mercato compri anche la storia delle cose.", "Al mercato si entra, si compra veloce e si esce senza guardare nessuno."],
        intruder: 3, why: "Todo el texto celebra la lentitud y la relación; el intruso describe el anonimato del supermercado." },
    },
    {
      id: "md-b1-06-3", theme: "spiritualità", title: "La tavola come altare", titleEs: "La mesa como altar", minutes: 4,
      paragraphs: [
        { it: "In quasi tutte le culture, il cibo ha un ruolo sacro: si offre agli dei, si condivide con gli ospiti, si benedice prima di mangiarlo. Noi italiani abbiamo trasformato il sacro in quotidiano: la tavola è il nostro altare laico.", es: "En casi todas las culturas, la comida tiene un rol sagrado: se ofrece a los dioses, se comparte con los huéspedes, se bendice antes de comer. Nosotros los italianos transformamos lo sagrado en cotidiano: la mesa es nuestro altar laico." },
        { it: "Pensaci: apparecchiamo con cura, ci sediamo in un ordine preciso, aspettiamo che tutti siano serviti. Quando qualcuno dice «buon appetito», sta celebrando una piccola liturgia. Mio zio, ateo convinto, prima di mangiare fa sempre una pausa di tre secondi: «Non ringrazio nessuno», dice, «ma riconosco che questo momento è speciale». Ecco, la spiritualità non è obbligatoria alla tavola italiana: ma un po' di sacro, per rispetto al pane, ci sta sempre bene.", es: "Piénsalo: ponemos la mesa con cuidado, nos sentamos en un orden preciso, esperamos que todos estén servidos. Cuando alguien dice «buen provecho», celebra una pequeña liturgia. Mi tío, ateo convencido, antes de comer hace siempre una pausa de tres segundos: «No agradezco a nadie», dice, «pero reconozco que este momento es especial». He ahí: la espiritualidad no es obligatoria en la mesa italiana; pero un poco de sagrado, por respeto al pan, siempre viene bien." },
      ],
      predict: { q: "Antes de leer: ¿con qué comparará la mesa italiana?", options: ["Un altar laico con pequeñas liturgias", "Una oficina de comida rápida", "Un mostrador de supermercado"], answer: 0, why: "«La tavola come altare»: la comida cotidiana con sabor a rito." },
      sequence: {
        instr: "Ordena la pequeña liturgia de la mesa (1 = primero):",
        events: ["Si apparecchia con cura", "Ci si siede in un ordine preciso", "Si aspetta che tutti siano serviti", "Qualcuno dice «buon appetito»", "Lo zio fa una pausa di tre secondi prima di mangiare"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "La tavola italiana è un altare laico. Si apparecchia con cura, ci si siede in un ordine preciso, si aspetta che tutti siano serviti. Un «buon appetito» è una piccola liturgia. Anche un ateo può fare una pausa di tre secondi: non per ringraziare, ma per riconoscere che quel momento è speciale.",
        questions: [
          { q: "Cosa è la tavola italiana?", kind: "literal", options: ["Un altare laico", "Un bancone", "Una scrivania"], answer: 0, why: "«La tavola è il nostro altare laico»." },
          { q: "Cosa si aspetta prima di mangiare?", kind: "literal", options: ["Che tutti siano serviti", "La partita di calcio", "Il telegiornale"], answer: 0, why: "«Si aspetta che tutti siano serviti»." },
          { q: "Perché lo zio fa la pausa di tre secondi?", kind: "inferencial", options: ["Para reconocer que el momento es especial", "Porque sta contando hasta tres", "Porque tiene sueño"], answer: 0, why: "«Non per ringraziare, ma per riconoscere che quel momento è speciale»." },
        ],
      },
    },
  ],

  "cu-b1-07": [
    {
      id: "md-b1-07-1", theme: "relax mentale", title: "La settimana senza notifiche", titleEs: "La semana sin notificaciones", minutes: 4,
      paragraphs: [
        { it: "L'esperimento è nato per scommessa: una settimana senza notifiche. Nessun avviso, nessuna vibrazione, nessuna lucina rossa. Le app restavano: le aprivo io, quando decidevo io. Sembra una differenza piccola; è una differenza planetaria.", es: "El experimento nació por apuesta: una semana sin notificaciones. Ningún aviso, ninguna vibración, ninguna lucecita roja. Las apps quedaban: las abría yo, cuando decidía yo. Parece una diferencia pequeña; es una diferencia planetaria." },
        { it: "Il primo giorno ho controllato il telefono ottantadue volte (sì, l'ho contato). Il settimo giorno, undici. La cosa più strana? Non la quantità di tempo liberato, ma la qualità: senza l'ansia dell'interruzione, i pensieri arrivavano fino in fondo. Per la prima volta dopo anni, ho finito un libro in tre giorni e ho visto un tramonto intero, dal primo arancio all'ultimo viola. Le notifiche non rubano solo tempo: rubano la fine dei pensieri.", es: "El primer día revisé el teléfono ochenta y dos veces (sí, lo conté). El séptimo día, once. ¿Lo más raro? No la cantidad de tiempo liberado, sino la calidad: sin la ansiedad de la interrupción, los pensamientos llegaban hasta el final. Por primera vez después de años, terminé un libro en tres días y vi un atardecer entero, del primer naranja al último violeta. Las notificaciones no roban solo tiempo: roban el final de los pensamientos." },
      ],
      predict: { q: "Antes de leer: ¿qué cambiará al apagar las notificaciones?", options: ["La calidad del pensamiento: ideas que llegan hasta el final", "Nada, solo aburrimiento", "Perderá todos sus amigos"], answer: 0, why: "«La settimana senza notifiche»: el experimento revelador." },
      quiz: [
        { q: "Quante volte ha controllato il telefono il primo giorno?", kind: "literal", options: ["Ottantadue", "Otto", "Nessuna"], answer: 0, why: "«Ottantadue volte (sì, l'ho contato)»." },
        { q: "E il settimo giorno?", kind: "literal", options: ["Undici", "Cento", "Zero"], answer: 0, why: "«Il settimo giorno, undici»." },
        { q: "Cosa ha visto per la prima volta dopo anni?", kind: "literal", options: ["Un tramonto intero", "Un film al cinema", "La neve a Roma"], answer: 0, why: "«Ho visto un tramonto intero»." },
        { q: "«Le notifiche rubano la fine dei pensieri». Qué significa exactamente?", kind: "inferencial", options: ["Interrumpen antes de que las ideas se completen: pensamientos truncos", "Cortan los cables del cerebro", "Roban el dinero de los pensamientos"], answer: 0, why: "Sin interrupciones, el pensamiento llega a profundidades que la fragmentación impide." },
        { q: "Propondrías este experimento en tu casa? Qué te da miedo?", kind: "critica", options: ["Vale la pena: el miedo es a la abstinencia, no a la pérdida real", "No: las notificaciones son vida", "Es imposible en el trabajo actual"], answer: 0, why: "El experimento muestra que el control recuperado mejora la calidad de vida." },
      ],
      vf: [
        { text: "Durante l'esperimento ha cancellato tutte le app.", value: false, why: "Falso: las apps quedaban, las abría cuando decidía él." },
        { text: "Ha finito un libro in tre giorni.", value: true, why: "«Ho finito un libro in tre giorni»." },
        { text: "Il settimo giorno controllava il telefono più del primo.", value: false, why: "Falso: 82 → 11 veces." },
      ],
    },
    {
      id: "md-b1-07-2", theme: "qui e ora", title: "Il scroll infinito", titleEs: "El scroll infinito", minutes: 4,
      paragraphs: [
        { it: "Il feed infinito è la macchina del tempo più efficiente del mondo: ti fa perdere quaranta minuti in un batter d'occhio. Ti siedi con il caffè, apri le foto di un matrimonio, e quando alzi la testa è buio e il caffè è freddo.", es: "El feed infinito es la máquina del tiempo más eficiente del mundo: te hace perder cuarenta minutos en un parpadeo. Te sientas con el café, abres las fotos de una boda, y cuando levantas la cabeza ya está oscuro y el café frío." },
        { it: "Il problema non è la tecnologia: è l'assenza di fine. I nostri cervelli amano le storie complete — inizio, mezzo, fine — e il feed non finisce mai, quindi la mente non si chiude mai. Un vecchio trucco dei monaci: dà un fine a ogni cosa. Un libro ha l'ultima pagina, un pasto ha l'ultimo boccone, una passeggiata ha la porta di casa. Al feed, metti un fine tu: «Guardo finché non finisce il caffè». Il caffè finisce; lo scroll, anche. Presente, di nuovo.", es: "El problema no es la tecnología: es la ausencia de final. Nuestros cerebros aman las historias completas — inicio, desarrollo, final — y el feed nunca termina, así que la mente nunca se cierra. Un viejo truco de los monjes: dale un final a cada cosa. Un libro tiene la última página, una comida tiene el último bocado, un paseo tiene la puerta de casa. Al feed, ponle tú un final: «Miro hasta que se acabe el café». El café se acaba; el scroll también. Presente, de nuevo." },
      ],
      predict: { q: "Antes de leer: ¿cuál es el problema real del scroll infinito?", options: ["La ausencia de final: la mente nunca se cierra", "Que las fotos son aburridas", "Que gasta demasiados datos"], answer: 0, why: "«Il scroll infinito» + la sabiduría de los finales." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Poner un final consciente a cada actividad devuelve la presencia", "Hay que eliminar la tecnología de raíz", "El café siempre se enfría por culpa del teléfono"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El feed es la máquina del tiempo más eficiente: 40 minutos en un parpadeo", "Los cerebros aman historias completas: inicio, desarrollo y final"],
        distractors: ["Los monjes inventaron el scroll infinito", "El texto dice que hay que mirar el feed hasta la medianoche"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Un libro ha l'ultima pagina.", "Un pasto ha l'ultimo boccone.", "Guardo il feed finché non finisce il caffè.", "Il segreto è scrollare tutta la notte: il feed ha sempre una fine naturale."],
        intruder: 3, why: "El feed no tiene fin natural: eso es exactamente el problema que el texto denuncia." },
    },
    {
      id: "md-b1-07-3", theme: "meditazione", title: "La meditazione dei like", titleEs: "La meditación de los likes", minutes: 4,
      paragraphs: [
        { it: "Ho provato un esperimento sociale su me stesso: ogni volta che pubblicavo qualcosa e tornavo a controllare i like, invece di farlo, facevo tre respiri e annotavo la sensazione. Volevo capire da dove nasceva quel bisogno.", es: "Probé un experimento social sobre mí mismo: cada vez que publicaba algo y volvía a revisar los likes, en lugar de hacerlo, hacía tres respiraciones y anotaba la sensación. Quería entender de dónde nacía esa necesidad." },
        { it: "Dopo un mese, il quaderno diceva la verità: non cercavo approvazione, cercavo compagnia. Ogni like era un «qualcuno pensa a me». La soluzione non era spegnere i social: era costruire posti veri dove essere visto. Ho chiamato tre amici che non sentivo da tempo, ho fissato una cena settimanale con la famiglia. Il bisogno non è scomparso: ha solo trovato cibi più nutrienti. I like sono zucchero: piacciono subito, ma non nutrono.", es: "Después de un mes, el cuaderno decía la verdad: no buscaba aprobación, buscaba compañía. Cada like era un «alguien piensa en mí». La solución no era apagar las redes: era construir lugares reales donde ser visto. Llamé a tres amigos que no veía hacía tiempo, fijé una cena semanal con la familia. La necesidad no desapareció: solo encontró alimentos más nutritivos. Los likes son azúcar: gustan al instante, pero no nutren." },
      ],
      predict: { q: "Antes de leer: ¿qué descubrirá el cuaderno sobre su necesidad de likes?", options: ["Que busca compañía, no aprobación", "Que quiere ser influencer", "Que odia a sus amigos"], answer: 0, why: "«La meditazione dei like»: autoobservación sin juicio." },
      sequence: {
        instr: "Ordena el experimento (1 = primero):",
        events: ["Pubblica qualcosa sui social", "Sente il bisogno di controllare i like", "Invece di guardare, fa tre respiri e annota la sensazione", "Dopo un mese il quaderno rivela: cercava compagnia", "Costruisce posti veri dove essere visto: cene, chiamate"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Ogni volta che senti il bisogno di controllare i like, prova così: tre respiri e una nota sul quaderno. Dopo un mese, la verità: non cerchi approvazione, cerchi compagnia. La soluzione non è spegnere tutto, ma costruire posti veri dove essere visto. I like sono zucchero: piacciono subito, ma non nutrono.",
        questions: [
          { q: "Cosa fai invece di controllare i like?", kind: "literal", options: ["Tre respiri e una nota", "Tre caffè", "Tre chilometri di corsa"], answer: 0, why: "«Tre respiri e una nota sul quaderno»." },
          { q: "Cosa cercavi davvero?", kind: "literal", options: ["Compagnia", "Denaro", "Fama mondiale"], answer: 0, why: "«Non cerchi approvazione, cerchi compagnia»." },
          { q: "Cosa sono i like, secondo l'audio?", kind: "inferencial", options: ["Zucchero: gustan al instante pero no nutren", "Medicina completa", "Veneno letal"], answer: 0, why: "«I like sono zucchero: piacciono subito, ma non nutrono»." },
        ],
      },
    },
  ],

  "cu-b1-08": [
    {
      id: "md-b1-08-1", theme: "relax mentale", title: "La ricetta del sonno", titleEs: "La receta del sueño", minutes: 4,
      paragraphs: [
        { it: "«Non riesco a dormire». Lo dice un italiano su tre, almeno una volta alla settimana. La mia amica Elsa, tecnica del sonno, sostiene che il problema non è mai il letto: è tutto quello che succede nelle tre ore prima.", es: "«No logro dormir». Lo dice uno de cada tres italianos, al menos una vez por semana. Mi amiga Elsa, técnica del sueño, sostiene que el problema nunca es la cama: es todo lo que sucede en las tres horas anteriores." },
        { it: "La sua «ricetta del sonno» ha tre ingredienti: luce, temperatura, pensieri. Luce: un'ora prima di dormire, spegni le luci forti e abbassa lo schermo del telefono (o better: mettilo via). Temperatura: la stanza fresca è migliore della stanza calda, il corpo ha bisogno di raffreddarsi per addormentarsi. Pensieri: il famoso «quaderno delle preoccupazioni» — scrivi tutto quello che ti gira in testa, chiudi il quaderno e chiudi il giorno. «Il sonno», dice Elsa, «non si insegue: si riceve. Devi solo farti trovare a casa».", es: "Su «receta del sueño» tiene tres ingredientes: luz, temperatura, pensamientos. Luz: una hora antes de dormir, apaga las luces intensas y baja el brillo del teléfono (o mejor: apártalo). Temperatura: la habitación fresca es mejor que la cálida, el cuerpo necesita enfriarse para dormirse. Pensamientos: el famoso «cuaderno de preocupaciones» — escribe todo lo que te da vueltas en la cabeza, cierra el cuaderno y cierra el día. «El sueño», dice Elsa, «no se persigue: se recibe. Solo tienes que dejarte encontrar en casa»." },
      ],
      predict: { q: "Antes de leer: ¿dónde está el verdadero problema del insomnio?", options: ["En las tres horas antes de acostarse", "En el colchón carísimo", "En el café de la mañana"], answer: 0, why: "«La ricetta del sonno»: higiene del sueño real." },
      quiz: [
        { q: "Quanti italiani su tre non dormono bene almeno una volta alla settimana?", kind: "literal", options: ["Uno su tre", "Tre su tre", "Nessuno"], answer: 0, why: "«Lo dice un italiano su tre»." },
        { q: "Quali sono i tre ingredienti della ricetta?", kind: "literal", options: ["Luce, temperatura, pensieri", "Latte, biscotti, miele", "Silenzio, buio, musica"], answer: 0, why: "«Tre ingredienti: luce, temperatura, pensieri»." },
        { q: "Perché la stanza deve essere fresca?", kind: "inferencial", options: ["El cuerpo necesita enfriarse para dormirse", "Porque ahorra calefacción", "Porque el frío es divertido"], answer: 0, why: "«Il corpo ha bisogno di raffreddarsi per addormentarsi»." },
        { q: "«Il sonno non si insegue: si riceve». Qué cambiaría en tu rutina nocturna con esta idea?", kind: "critica", options: ["Crear condiciones y soltar: en vez de esforzarme por dormir", "Contar ovejas más rápido", "Dormir con la tele más alta"], answer: 0, why: "El sueño es recepción, no conquista: preparar y confiar." },
      ],
      vf: [
        { text: "Il problema del sonno è sempre il letto.", value: false, why: "Falso: «il problema non è mai il letto»." },
        { text: "Il quaderno delle preoccupazioni aiuta a chiudere il giorno.", value: true, why: "Escribir externaliza los pensamientos que dan vueltas." },
        { text: "La stanza calda è migliore di quella fresca.", value: false, why: "Falso: el cuerpo necesita enfriarse." },
      ],
    },
    {
      id: "md-b1-08-2", theme: "relax fisico", title: "Camminare dopo cena", titleEs: "Caminar después de cenar", minutes: 4,
      paragraphs: [
        { it: "Nei paesi del Sud Italia sopravvive un rituale che la medicina moderna ha riscoperto: la passeggiata dopo cena. Dieci minuti, venti al massimo, al passo della conversazione. Non è sport: è digestione gentile.", es: "En los pueblos del sur de Italia sobrevive un ritual que la medicina moderna ha redescubierto: el paseo después de cenar. Diez minutos, veinte como máximo, al paso de la conversación. No es deporte: es digestión amable." },
        { it: "Gli studi confermano quello che le nonne sapevano: camminare dopo mangiato aiuta a controllare la glicemia, migliora la digestione e — la parte che mi piace di più — trasforma la serata. La passeggiata post-cena è l'unico momento in cui molte famiglie parlano davvero: niente TV, niente telefono, solo tre persone e una strada. La lunghezza ideale? «Finché il gelato non finisce», dice mio zio, che ne approfitta sempre per una passeggiata fino alla gelateria.", es: "Los estudios confirman lo que las abuelas sabían: caminar después de comer ayuda a controlar la glucemia, mejora la digestión y — la parte que más me gusta — transforma la velada. El paseo post-cena es el único momento en que muchas familias hablan de verdad: sin TV, sin teléfono, solo tres personas y una calle. ¿La longitud ideal? «Hasta que se acaba el helado», dice mi tío, que siempre aprovecha para caminar hasta la heladería." },
      ],
      predict: { q: "Antes de leer: ¿qué es la «passeggiata» según el texto?", options: ["Digestión gentile: no deporte, sino ritual familiar", "Un entrenamiento intenso", "Una moda turística"], answer: 0, why: "«Camminare dopo cena»: el ritual saludable del sur." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["El paseo post-cena une salud física y conversación familiar", "Hay que correr después de cenar", "El helado arruina la digestión"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Los estudios confirman: ayuda a la glucemia y a la digestión", "Es el único momento en que muchas familias hablan de verdad"],
        distractors: ["El texto dice que la passeggiata dura tres horas", "La medicina moderna inventó el paseo"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Dieci minuti, venti al massimo, al passo della conversazione.", "Camminare dopo mangiato aiuta a controllare la glicemia.", "Niente TV, niente telefono: solo tre persone e una strada.", "Dopo cena bisogna sdraiarsi subito sul divano con il telefono in mano."],
        intruder: 3, why: "Todo el texto celebra el paseo; el sofá y el teléfono son lo contrario." },
    },
    {
      id: "md-b1-08-3", theme: "meditazione", title: "Il corpo sa il suo mestiere", titleEs: "El cuerpo sabe su oficio", minutes: 4,
      paragraphs: [
        { it: "Mio nonno, contadino, si alzava con il sole e andava a dormire con il sole. Nessun corso di mindfulness, nessuna app: il suo corpo conosceva i ritmi. Noi abbiamo perso quella sapienza e la cerchiamo nei posti più strani: corsi, integratori, gadget da polso che misurano il sonno.", es: "Mi abuelo, campesino, se levantaba con el sol y se iba a dormir con el sol. Ningún curso de mindfulness, ninguna app: su cuerpo conocía los ritmos. Nosotros perdimos esa sabiduría y la buscamos en los lugares más raros: cursos, suplementos, pulseras que miden el sueño." },
        { it: "Un medico olistico mi ha detto una frase che uso come bussola: «Prima di comprare qualsiasi cosa, provi il gratis: luce del mattino, camminata, pasti regolari, silenzio prima di dormire. Se dopo un mese serve altro, torniamo». Il corpo sa il suo mestiere: ha quattro milioni di anni di esperienza. Il problema non è la mancanza di strumenti: è che non lo ascoltiamo più.", es: "Un médico holístico me dijo una frase que uso como brújula: «Antes de comprar cualquier cosa, pruebe lo gratis: luz de la mañana, caminata, comidas regulares, silencio antes de dormir. Si después de un mes hace falta algo más, volvemos». El cuerpo sabe su oficio: tiene cuatro millones de años de experiencia. El problema no es la falta de herramientas: es que ya no lo escuchamos." },
      ],
      predict: { q: "Antes de leer: ¿qué propondrá el médico antes de comprar nada?", options: ["Lo gratis: luz, caminata, comidas regulares, silencio", "Un gadget carísimo de última generación", "Veinte suplementos al día"], answer: 0, why: "«Il corpo sa il suo mestiere»: la sabiduría básica primero." },
      sequence: {
        instr: "Ordena el consejo del médico holístico (1 = primero):",
        events: ["Il medico dice: prima provi il gratis", "Luce del mattino ogni giorno", "Camminata e pasti regolari", "Silenzio prima di dormire", "Se dopo un mese serve altro, si torna dal medico"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Prima di comprare qualsiasi cosa per la salute, prova il gratis: luce del mattino, una camminata, pasti regolari, silenzio prima di dormire. Il corpo ha quattro milioni di anni di esperienza: sa il suo mestiere. Il problema non è la mancanza di strumenti: è che non lo ascoltiamo più.",
        questions: [
          { q: "Cosa devi provare prima di comprare?", kind: "literal", options: ["Il gratis: luce, camminata, pasti, silenzio", "Il gadget più costoso", "Un viaggio di lusso"], answer: 0, why: "«Prima provi il gratis»." },
          { q: "Quanti anni di esperienza ha il corpo?", kind: "literal", options: ["Quattro milioni", "Quaranta", "Quattrocento"], answer: 0, why: "«Quattro milioni di anni di esperienza»." },
          { q: "Qual è il vero problema?", kind: "inferencial", options: ["Ya no escuchamos al cuerpo", "El cuerpo es débil", "Faltan herramientas"], answer: 0, why: "«È che non lo ascoltiamo più»." },
        ],
      },
    },
  ],

  "cu-b1-09": [
    {
      id: "md-b1-09-1", theme: "spiritualità", title: "Davanti al quadro", titleEs: "Frente al cuadro", minutes: 4,
      paragraphs: [
        { it: "Nelle guide dei musei si legge sempre lo stesso consiglio: «Riservi due ore alla Galleria». Errore. Due ore davanti a duecento capolavori significano trenta secondi per quadro: il tempo di una fotografia, non di un incontro.", es: "En las guías de museos se lee siempre el mismo consejo: «Reserve dos horas para la Galería». Error. Dos horas frente a doscientas obras maestras significan treinta segundos por cuadro: el tiempo de una fotografía, no de un encuentro." },
        { it: "Un restauratore mi ha insegnato il metodo opposto: «Vada dentro, scelga UN quadro e ci resti venti minuti». Ho provato: venti minuti davanti a un Caravaggio sono un'esperienza religiosa anche per un ateo. Dopo dieci minuti, la mente smette di «visitare» e inizia a vedere: i dettagli, la luce, il gesto nascosto di una mano. Il museo non è una gara di raccolta: è un luogo d'incontro. Meglio un quadro conosciuto che duecento fotografati.", es: "Un restaurador me enseñó el método opuesto: «Entre, elija UN cuadro y quédese veinte minutos». Lo probé: veinte minutos frente a un Caravaggio son una experiencia religiosa incluso para un ateo. Después de diez minutos, la mente deja de «visitar» y empieza a ver: los detalles, la luz, el gesto escondido de una mano. El museo no es una carrera de colección: es un lugar de encuentro. Mejor un cuadro conocido que doscientos fotografiados." },
      ],
      predict: { q: "Antes de leer: ¿qué consejo dará el restaurador?", options: ["Un solo cuadro, veinte minutos: encuentro, no colección", "Ver todos los cuadros en dos horas", "Fotografiar cada obra"], answer: 0, why: "«Davanti al quadro»: la contemplación contra el turismo veloz." },
      quiz: [
        { q: "Quanto tempo significa due ore per duecento capolavori?", kind: "literal", options: ["Trenta secondi per quadro", "Dieci minuti per quadro", "Un'ora per quadro"], answer: 0, why: "«Trenta secondi per quadro»." },
        { q: "Cosa ha insegnato il restauratore?", kind: "literal", options: ["Scegliere un quadro e restare venti minuti", "Correre tra le sale", "Comprare più cataloghi"], answer: 0, why: "«Scegli UN quadro e ci resti venti minuti»." },
        { q: "Cosa succede dopo dieci minuti davanti al quadro?", kind: "inferencial", options: ["La mente deja de visitar y empieza a ver de verdad", "La mente si annoia", "El cuadro cambia de color"], answer: 0, why: "«La mente smette di visitare e inizia a vedere»." },
        { q: "«Meglio un quadro conosciuto che duecento fotografati». Aplica esta regla a otras áreas de tu vida?", kind: "critica", options: ["Sì: profundidad sobre cantidad también en lecturas, amistades, viajes", "No: coleccionar experiencias es mejor", "Depende del precio del billete"], answer: 0, why: "El consumismo cultural superficial cansa; el encuentro nutre." },
      ],
      vf: [
        { text: "Il metodo del restauratore è vedere più quadri possibile.", value: false, why: "Falso: un cuadro, veinte minutos." },
        { text: "Venti minuti davanti a un Caravaggio sono un'esperienza religiosa anche per un ateo.", value: true, why: "Lo dice el autor por experiencia propia." },
        { text: "Il museo è un luogo d'incontro, non una gara di raccolta.", value: true, why: "Es la conclusión del texto." },
      ],
    },
    {
      id: "md-b1-09-2", theme: "qui e ora", title: "La città che non vedi", titleEs: "La ciudad que no ves", minutes: 4,
      paragraphs: [
        { it: "Vivo a Roma da dieci anni e ho un'ammissione vergognosa: non vedevo più la città. Il Colosseo era il fondo del mio tragitto in autobus, le fontane erano rumore di sottofondo, i tetti erano il tetto. L'abitudine è un velo che cade su tutto.", es: "Vivo en Roma desde hace diez años y tengo una confesión vergonzosa: ya no veía la ciudad. El Coliseo era el fondo de mi trayecto en autobús, las fuentes eran ruido de fondo, los techos eran el techo. La costumbre es un velo que cae sobre todo." },
        { it: "Poi ho conosciuto Luca, fotografo, che mi ha portato a «vedere» la mia città: «Guarda come la luce di ottobre entra tra i palazzi. Guarda quella nonna che parla ai gatti». Da quel giorno, una volta alla settimana, faccio la passeggiata del turista nella mia città. Non è nostalgia: è manutenzione della meraviglia. Le città non si consumano: si smettono di guardare.", es: "Luego conocí a Luca, fotógrafo, que me llevó a «ver» mi ciudad: «Mira cómo la luz de octubre entra entre los edificios. Mira esa abuela que habla con los gatos». Desde ese día, una vez por semana, hago el paseo del turista en mi ciudad. No es nostalgia: es mantenimiento de la maravilla. Las ciudades no se gastan: se dejan de mirar." },
      ],
      predict: { q: "Antes de leer: ¿qué le pasará al autor tras 10 años en Roma?", options: ["Dejó de ver la ciudad: la costumbre es un velo", "Se enamoró de una turista", "Se mudó al campo"], answer: 0, why: "«La città che non vedi»: la ceguera de la costumbre." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["La costumbre apaga la mirada, y se puede entrenar la maravilla", "Roma es la ciudad más aburrida del mundo", "Los fotógrafos son los únicos que ven"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El fotógrafo Luca le enseña a mirar la luz de octubre y a la abuela de los gatos", "Una vez por semana hace el paseo del turista en su propia ciudad"],
        distractors: ["El autor dejó su trabajo para ser guía turístico", "El texto dice que las ciudades se consuman como los zapatos"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["L'abitudine è un velo che cade su tutto.", "Una volta alla settimana faccio la passeggiata del turista.", "È manutenzione della meraviglia.", "Il Colosseo è solo il fondo brutto del tragitto in autobus: non vale uno sguardo."],
        intruder: 3, why: "Todo el texto lucha contra esa indiferencia; el intruso la celebra." },
    },
    {
      id: "md-b1-09-3", theme: "relax fisico", title: "Le scale di Sant'Ivo", titleEs: "Las escaleras de Sant'Ivo", minutes: 4,
      paragraphs: [
        { it: "La cupola della chiesa di Sant'Ivo a Roma ha una scala a chiocciola così stretta che due persone non ci passano insieme. Chi sale, sale da solo: è fisicamente impossibile la compagnia. E in cima, dopo 252 gradini, il premio: Roma intera, silenziosa, sotto di te.", es: "La cúpula de la iglesia de Sant'Ivo en Roma tiene una escalera de caracol tan estrecha que dos personas no caben juntas. Quien sube, sube solo: la compañía es físicamente imposible. Y arriba, después de 252 escalones, el premio: Roma entera, silenciosa, debajo de ti." },
        { it: "Ho fatto la salita la settimana scorsa. A metà scala, le gambe bruciavano e il respiro era forte. In cima, qualcosa di inaspettato: il corpo stanco e la mente luminosa. I monaci lo sapevano: per questo le loro celle erano in alto. La fatica del corpo è una porta della mente: dopo ogni gradino, un pensiero in meno. In cima, con la città intera sotto, restano solo il respiro e la vista.", es: "Hice la subida la semana pasada. A mitad de escalera, las piernas ardían y la respiración era fuerte. Arriba, algo inesperado: el cuerpo cansado y la mente luminosa. Los monjes lo sabían: por eso sus celdas estaban en lo alto. El esfuerzo del cuerpo es una puerta de la mente: después de cada escalón, un pensamiento menos. Arriba, con la ciudad entera abajo, quedan solo el respiro y la vista." },
      ],
      predict: { q: "Antes de leer: ¿qué encontrará en la cima de la escalera?", options: ["Cuerpo cansado, mente luminosa: Roma abajo", "Un restaurante caro", "Una cola de tres horas"], answer: 0, why: "«Le scale di Sant'Ivo»: la subida como práctica." },
      sequence: {
        instr: "Ordena la experiencia de la subida (1 = primero):",
        events: ["Entra nella scala a chiocciola, da solo", "A metà scala le gambe bruciano", "Il respiro diventa forte", "Arriva in cima dopo 252 gradini", "Restano solo il respiro e la vista: Roma sotto"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "La scala di Sant'Ivo è così stretta che si sale da soli. A metà, le gambe bruciano e il respiro è forte. Ma dopo ogni gradino, un pensiero in meno. In cima, dopo duecentocinquantadue gradini, restano solo il respiro e la vista: Roma intera, silenziosa, sotto di te.",
        questions: [
          { q: "Perché si sale da soli?", kind: "literal", options: ["La scala è strettissima", "È vietato parlare", "La guida lo richiede"], answer: 0, why: "«Così stretta che si sale da soli»." },
          { q: "Quanti gradini?", kind: "literal", options: ["Duecentocinquantadue", "Venticinque", "Duemila"], answer: 0, why: "«Dopo duecentocinquantadue gradini»." },
          { q: "Cosa resta in cima?", kind: "inferencial", options: ["Solo el respiro y la vista", "Muchos pensamientos ansiosos", "Un dolor de cabeza"], answer: 0, why: "«Restano solo il respiro e la vista»." },
        ],
      },
    },
  ],

  "cu-b1-10": [
    {
      id: "md-b1-10-1", theme: "relax mentale", title: "Lo studio che respira", titleEs: "El estudio que respira", minutes: 4,
      paragraphs: [
        { it: "Ho passato cinque anni universitari a studiare come un disperato: notti in bianco, caffè a fiumi, ansia da esame. Poi ho incontrato Marta, la studentessa più tranquilla — e più brillante — del corso. Il suo segreto era così semplice che quasi mi arrabbiai.", es: "Pasé cinco años universitarios estudiando como un desesperado: noches en vela, café a raudales, ansiedad de examen. Luego conocí a Marta, la estudiante más tranquila — y más brillante — del curso. Su secreto era tan simple que casi me enojé." },
        { it: "Marta studiava 45 minuti e riposava 15, sempre. Nei 15 minuti non guardava il telefono: faceva una passeggiata nel corridoio o guardava fuori dalla finestra. «Il cervello», mi spiegò, «consolida quando riposi, non quando studi». Aveva ragione lei: io finivo gli esami distrutto, lei fresca come una rosa. La scienza le dava ragione: il riposo attivo è parte dello studio, non la sua pausa.", es: "Marta estudiaba 45 minutos y descansaba 15, siempre. En los 15 minutos no miraba el teléfono: daba un paseo por el pasillo o miraba por la ventana. «El cerebro», me explicó, «consolida cuando descansas, no cuando estudias». Tenía razón ella: yo terminaba los exámenes destruido, ella fresca como una rosa. La ciencia le daba la razón: el descanso activo es parte del estudio, no su pausa." },
      ],
      predict: { q: "Antes de leer: ¿cuál será el secreto de Marta?", options: ["45 minutos de estudio + 15 de descanso activo", "Estudiar toda la noche sin parar", "Café y más café"], answer: 0, why: "«Lo studio che respira»: el ritmo como método." },
      quiz: [
        { q: "Come studiava Marta?", kind: "literal", options: ["45 minuti di studio, 15 di riposo", "Cinque ore senza pausa", "Solo di notte"], answer: 0, why: "«Studiava 45 minuti e riposava 15, sempre»." },
        { q: "Cosa faceva nei 15 minuti?", kind: "literal", options: ["Passeggiava o guardava fuori dalla finestra", "Guardava il telefono", "Studiava di più"], answer: 0, why: "«Una passeggiata nel corridoio o guardava fuori dalla finestra»." },
        { q: "Quando consolida il cervello, secondo Marta?", kind: "inferencial", options: ["Quando riposi, non quando studi", "Quando bevi caffè", "Mentre dormi in aula"], answer: 0, why: "«Il cervello consolida quando riposi»." },
        { q: "El descanso activo es parte del estudio, no su pausa. Cambia esto tu forma de preparar exámenes?", kind: "critica", options: ["Sì: planificar el descanso es planificar el aprendizaje", "No: estudiar más horas siempre gana", "Solo sirve para estudiantes geniales"], answer: 0, why: "La consolidación ocurre en el descanso: optimizarlo optimiza el estudio." },
      ],
      vf: [
        { text: "Marta guardava il telefono durante le pause.", value: false, why: "Falso: paseaba o miraba por la ventana." },
        { text: "L'autore finiva gli esami distrutto.", value: true, why: "«Io finivo gli esami distrutto, lei fresca come una rosa»." },
        { text: "Il riposo attivo è parte dello studio.", value: true, why: "Es la conclusión respaldada por la ciencia." },
      ],
    },
    {
      id: "md-b1-10-2", theme: "meditazione", title: "Il progetto della calma", titleEs: "El proyecto de la calma", minutes: 4,
      paragraphs: [
        { it: "All'università mi hanno insegnato a fare piani di studio, piani di carriera, piani di pensione. Nessuno mi ha mai insegnato a fare un piano di calma. Così, a trent'anni, ho dovuto scriverlo da solo — ed è diventato il progetto più importante della mia vita.", es: "En la universidad me enseñaron a hacer planes de estudio, planes de carrera, planes de jubilación. Nadie me enseñó nunca a hacer un plan de calma. Así que, a los treinta, tuve que escribirlo solo — y se volvió el proyecto más importante de mi vida." },
        { it: "Il piano ha tre punti. Uno: la mattina appartiene a me, non alla posta — mezz'ora di silenzio prima di aprire qualsiasi schermo. Due: un giorno alla settimana senza agende, il sabato del vuoto. Tre: ogni progetto grande, prima di iniziare, tre respiri — perché le decisioni prese con il fiato corto sono quasi sempre sbagliate. Non è un piano perfetto, è un piano vivo: lo aggiorno ogni anno. Ma da quando esiste, tutte le altre pianificazioni funzionano meglio.", es: "El plan tiene tres puntos. Uno: la mañana me pertenece a mí, no al correo — media hora de silencio antes de abrir cualquier pantalla. Dos: un día a la semana sin agenda, el sábado del vacío. Tres: cada proyecto grande, antes de empezar, tres respiraciones — porque las decisiones tomadas con el aliento corto casi siempre están equivocadas. No es un plan perfecto, es un plan vivo: lo actualizo cada año. Pero desde que existe, todas las demás planificaciones funcionan mejor." },
      ],
      predict: { q: "Antes de leer: ¿qué tipo de plan tuvo que escribir el autor solo?", options: ["Un plan de calma: tres puntos vivos", "Un plan financiero complejo", "Un plan de estudios de cinco años"], answer: 0, why: "«Il progetto della calma»: planificar lo no planificado." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["La calma también se planifica — y sostiene todos los demás planes", "Los planes son inútiles", "Hay que abandonar la carrera"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Media hora de silencio antes de abrir cualquier pantalla", "Las decisiones tomadas con el aliento corto casi siempre son erróneas"],
        distractors: ["El plan prohíbe ver amigos los sábados", "El autor actualiza el plan cada hora"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["La mattina appartiene a me, non alla posta.", "Un giorno alla settimana senza agende.", "Ogni progetto grande inizia con tre respiri.", "Prima di ogni decisione importante, tieni il fiato e decide più in fretta che puoi."],
        intruder: 3, why: "El texto dice lo contrario: las decisiones con el aliento corto casi siempre salen mal." },
    },
    {
      id: "md-b1-10-3", theme: "qui e ora", title: "L'esame che ho superato guardando l'albero", titleEs: "El examen que superé mirando el árbol", minutes: 4,
      paragraphs: [
        { it: "Il giorno prima dell'esame più importante della mia carriera, ho fatto una cosa che nessun compagno capì: ho smesso di studiare alle tre del pomeriggio e sono andata a sedermi sotto un albero nel parco. Niente appunti, niente ripasso finale.", es: "El día antes del examen más importante de mi carrera, hice algo que ningún compañero entendió: dejé de estudiar a las tres de la tarde y me fui a sentar bajo un árbol en el parque. Sin apuntes, sin repaso final." },
        { it: "Sotto l'albero, ho fatto l'inventario delle cose vere: il cielo esisteva, il prato esisteva, il mio respiro esisteva. L'esame, in quel momento, era solo un'ipotesi. Il giorno dopo, entrando in aula, avevo nella mente l'albero, non le pagine. Risultato: il miglior voto della mia vita. Non perché l'albero sia magico, ma perché una mente che ha visto il cielo il giorno prima non ha paura di un foglio di carta.", es: "Bajo el árbol, hice el inventario de las cosas reales: el cielo existía, el pasto existía, mi respiración existía. El examen, en ese momento, era solo una hipótesis. Al día siguiente, al entrar al aula, tenía en la mente el árbol, no las páginas. Resultado: la mejor nota de mi vida. No porque el árbol sea mágico, sino porque una mente que ha visto el cielo el día antes no le teme a una hoja de papel." },
      ],
      predict: { q: "Antes de leer: ¿qué hará la autora el día previo al examen?", options: ["Dejar de estudiar y sentarse bajo un árbol", "Estudiar 20 horas seguidas", "Tomar pastillas para no dormir"], answer: 0, why: "«Guardando l'albero»: la pausa contra el pánico." },
      sequence: {
        instr: "Ordena la estrategia de la autora (1 = primero):",
        events: ["Il giorno prima dell'esame smette di studiare alle tre", "Va a sedersi sotto un albero nel parco", "Fa l'inventario delle cose vere: cielo, prato, respiro", "Il giorno dopo entra in aula con l'albero in mente", "Prende il miglior voto della sua vita"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Il giorno prima di un esame importante, fermati un'ora prima del solito. Siediti sotto un albero e guarda il cielo. L'esame è solo un'ipotesi; il cielo è reale. Una mente che ha visto il cielo il giorno prima non ha paura di un foglio di carta.",
        questions: [
          { q: "Quando devi fermarti il giorno prima dell'esame?", kind: "literal", options: ["Un'ora prima del solito", "Mai: si studia tutta la notte", "Una settimana prima"], answer: 0, why: "«Fermati un'ora prima del solito»." },
          { q: "Cosa è l'esame, in quel momento?", kind: "literal", options: ["Solo un'ipotesi", "Una certezza terribile", "Un sogno"], answer: 0, why: "«L'esame è solo un'ipotesi»." },
          { q: "Cosa non teme una mente che ha visto il cielo?", kind: "inferencial", options: ["Un foglio de papel", "Un temporale", "Un albero"], answer: 0, why: "«Non ha paura di un foglio di carta»." },
        ],
      },
    },
  ],

  "cu-b1-11": [
    {
      id: "md-b1-11-1", theme: "spiritualità", title: "Il silenzio dentro la festa", titleEs: "El silencio dentro de la fiesta", minutes: 4,
      paragraphs: [
        { it: "La festa del patrono del mio paese dura tre giorni: musica, fuochi, processioni, cibo. Tutti anni, da bambino, aspettavo solo i fuochi d'artificio. Da adulto ho scoperto il momento che preferisco: le sei del mattino dopo, quando la piazza è coperta di coriandoli e nessuno c'è più.", es: "La fiesta del santo patrono de mi pueblo dura tres días: música, fuegos, procesiones, comida. De niño, todos los años, esperaba solo los fuegos artificiales. De adulto descubrí el momento que prefiero: las seis de la mañana siguiente, cuando la plaza está cubierta de papelillos y ya no queda nadie." },
        { it: "In quella piazza vuota c'è più festa che nella festa stessa: le sedie impilate, i resti del panettone, una scarpa dimenticata (chissà). È il momento in cui il paese si riposa del proprio entusiasmo. Le feste antiche lo sapevano: dopo il dio, il silenzio. Forse è per questo che durano da secoli: sanno che l'estasi ha bisogno di riposare, e il riposo di un po' di estasi.", es: "En esa plaza vacía hay más fiesta que en la fiesta misma: las sillas apiladas, los restos del panettone, un zapato olvidado (quién sabe). Es el momento en que el pueblo descansa de su propio entusiasmo. Las fiestas antiguas lo sabían: después del dios, el silencio. Quizá por eso duran desde hace siglos: saben que el éxtasis necesita descansar, y el descanso, un poco de éxtasis." },
      ],
      predict: { q: "Antes de leer: ¿cuál será el momento favorito del autor adulto?", options: ["La plaza vacía la mañana después de la fiesta", "Los fuegos artificiales más grandes", "La processión más larga"], answer: 0, why: "«Il silenzio dentro la festa»: el contraste sagrado." },
      quiz: [
        { q: "Quanto dura la festa del patrono?", kind: "literal", options: ["Tre giorni", "Tre ore", "Trent'anni"], answer: 0, why: "«La festa dura tre giorni»." },
        { q: "Cosa c'era nella piazza alle sei del mattino?", kind: "literal", options: ["Coriandoli, sedie impilate, una scarpa dimenticata", "Migliaia di turisti", "Il sindaco in festa"], answer: 0, why: "Los restos de la fiesta descriptos con cariño." },
        { q: "Perché le feste antiche durano da secoli, secondo l'autore?", kind: "inferencial", options: ["Porque equilibran éxtasis y descanso", "Porque son obligatorias", "Porque tienen mejor música"], answer: 0, why: "«Sanno che l'estasi ha bisogno di riposare»." },
        { q: "Prefieres la fiesta o la plaza vacía del día siguiente? Qué dice tu respuesta de ti?", kind: "critica", options: ["Ambas son necesarias: intensidad y digestión de lo vivido", "Solo la fiesta: el silencio es triste", "Solo el silencio: la fiesta es caos"], answer: 0, why: "El ritmo festivo/contemplativo es una polaridad sana." },
      ],
      vf: [
        { text: "Da bambino preferiva la processione.", value: false, why: "Falso: de niño esperaba solo los fuegos artificiales." },
        { text: "Nella piazza vuota c'era una scarpa dimenticata.", value: true, why: "«Una scarpa dimenticata (chissà)»." },
        { text: "L'estasi ha bisogno di riposare.", value: true, why: "Es la lección de las fiestas antiguas." },
      ],
    },
    {
      id: "md-b1-11-2", theme: "relax fisico", title: "Il pranzo di Natale che ho sopravvissuto", titleEs: "El almuerzo de Navidad que sobreviví", minutes: 4,
      paragraphs: [
        { it: "Il pranzo di Natale italiano è una maratona: cinque ore a tavola, sette portate, dodici parenti e la domanda fatale: «E quando ti sposi?». Per anni ho affrontato il pranzo come una battaglia. Poi ho cambiato strategia.", es: "El almuerzo de Navidad italiano es una maratón: cinco horas en la mesa, siete platos, doce parientes y la pregunta fatal: «¿Y cuándo te casas?». Durante años afronté el almuerzo como una batalla. Luego cambié de estrategia." },
        { it: "Adesso, ogni ora e mezza, faccio «la pausa del bagno»: non per il bagno, ma per due minuti di respiri con la finestra aperta. Poi torno a tavola e affronto zia Rosa fresco come un germoglio. La zia crede che io abbia problemi di salute. Va bene così: la calma è il miglior regalo di Natale che posso farmi — e nemmeno la devo incartare.", es: "Ahora, cada hora y media, hago «la pausa del baño»: no para el baño, sino para dos minutos de respiraciones con la ventana abierta. Luego vuelvo a la mesa y enfrento a la tía Rosa fresco como un brote. La tía cree que tengo problemas de salud. Está bien así: la calma es el mejor regalo de Navidad que puedo hacerme — y ni siquiera tengo que envolverlo." },
      ],
      predict: { q: "Antes de leer: ¿cómo sobrevivirá el autor al pranzo di Natale?", options: ["Pausas de respiración cada hora y media", "Discutiendo con todos los parientes", "Comiendo más rápido"], answer: 0, why: "«Che ho sopravvissuto»: estrategia de supervivencia festiva." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Pausas breves y conscientes hacen soportables los maratones sociales", "Hay que evitar la familia en Navidad", "El pranzo di Natale debería durar una hora"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El pranzo dura cinco horas con siete platos y doce parientes", "La tía cree que el autor tiene problemas de salud"],
        distractors: ["El autor se esconde en el baño una hora entera", "El texto recomienda responder mal a la zia Rosa"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Ogni ora e mezza faccio due minuti di respiri.", "Torno a tavola fresco come un germoglio.", "La calma è il miglior regalo di Natale.", "Resta a tavola cinque ore di fila senza mai alzarti, nemmeno per respirare."],
        intruder: 3, why: "Todo el método del texto se basa en pausas; quedarse cinco horas sin moverse es lo contrario." },
    },
    {
      id: "md-b1-11-3", theme: "meditazione", title: "La vigilia di capodanno", titleEs: "La víspera de Año Nuevo", minutes: 4,
      paragraphs: [
        { it: "Il 31 dicembre, mentre tutti preparano cene e vestiti, io ho una tradizione segreta che nessuno capisce: alle diciotto mi chiudo in camera per mezz'ora con un quaderno e una candela. È il mio «bilancio dell'anima».", es: "El 31 de diciembre, mientras todos preparan cenas y vestidos, yo tengo una tradición secreta que nadie entiende: a las dieciocho me encierro en mi cuarto media hora con un cuaderno y una vela. Es mi «balance del alma»." },
        { it: "Le domande sono sempre tre: che cosa ho imparato quest'anno? A chi devo dire grazie? Che cosa lascio alla porta? Trenta minuti, tre risposte, una candela. Poi esco dalla stanza e vado a festeggiare come tutti gli altri. La differenza è che io so perché brindo. Negli anni, il bilancio è diventato più importante dei fuochi: i fuochi durano dieci minuti, le risposte durano un anno.", es: "Las preguntas son siempre tres: ¿qué aprendí este año? ¿A quién debo dar las gracias? ¿Qué dejo en la puerta? Treinta minutos, tres respuestas, una vela. Luego salgo del cuarto y voy a celebrar como todos los demás. La diferencia es que yo sé por qué brindo. Con los años, el balance se volvió más importante que los fuegos: los fuegos duran diez minutos, las respuestas duran un año." },
      ],
      predict: { q: "Antes de leer: ¿qué hará el autor a las 18:00 del 31/12?", options: ["El «bilancio dell'anima»: tres preguntas, media hora", "Una cena elegante", "Una siesta larga"], answer: 0, why: "«La vigilia di capodanno»: el rito privado del balance." },
      sequence: {
        instr: "Ordena el rito del 31 dicembre (1 = primero):",
        events: ["Alle diciotto si chiude in camera con quaderno e candela", "Si chiede: che cosa ho imparato quest'anno?", "Poi: a chi devo dire grazie?", "Infine: che cosa lascio alla porta?", "Esce e festeggia — sapendo perché brinda"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Il 31 dicembre, alle diciotto, mezz'ora per il bilancio dell'anima: che cosa ho imparato? A chi devo dire grazie? Che cosa lascio alla porta? Poi esco e festeggio come tutti. La differenza è che io so perché brindo. I fuochi durano dieci minuti; le risposte durano un anno.",
        questions: [
          { q: "A che ora inizia il rito?", kind: "literal", options: ["Alle diciotto", "A mezzanotte", "La mattina presto"], answer: 0, why: "«Alle diciotto»." },
          { q: "Quanto dura?", kind: "literal", options: ["Mezz'ora", "Tutto il giorno", "Cinque minuti"], answer: 0, why: "«Mezz'ora per il bilancio dell'anima»." },
          { q: "Perché il suo brindisi è diverso?", kind: "inferencial", options: ["Porque sabe por qué brinda", "Porque beve più champagne", "Porque brinda da solo"], answer: 0, why: "«La differenza è che io so perché brindo»." },
        ],
      },
    },
  ],

  "cu-b1-12": [
    {
      id: "md-b1-12-1", theme: "qui e ora", title: "Il blog che scrivo camminando", titleEs: "El blog que escribo caminando", minutes: 4,
      paragraphs: [
        { it: "Quando ho iniziato il mio blog di viaggi, passavo le giornate davanti allo schermo a scrivere di posti che non vivevo. Ironia completa: raccontavo il mondo senza guardarlo. Poi, durante un viaggio in Val d'Orcia, il mio computer si è rotto.", es: "Cuando empecé mi blog de viajes, pasaba los días frente a la pantalla escribiendo sobre lugares que no vivía. Ironía completa: contaba el mundo sin mirarlo. Luego, durante un viaje en la Val d'Orcia, mi computadora se rompió." },
        { it: "Costretto a scrivere la sera, su un quaderno, ho scoperto una cosa: le pagine migliori nascevano dalle cose che avevo guardato davvero — la luce sulle crete, il suono del vento tra i cipressi. Il computer rotto è stato il mio miglior maestro di scrittura. Adesso il metodo è fisso: prima cammino e guardo, poi scrivo. Chi scrive di viaggi deve prima viaggiare; chi racconta la presenza deve prima esserci.", es: "Obligado a escribir de noche, en un cuaderno, descubrí algo: las mejores páginas nacían de las cosas que había mirado de verdad — la luz sobre las colinas, el sonido del viento entre los cipreses. La computadora rota fue mi mejor maestra de escritura. Ahora el método es fijo: primero camino y miro, luego escribo. Quien escribe de viajes debe primero viajar; quien cuenta la presencia debe primero estar ahí." },
      ],
      predict: { q: "Antes de leer: ¿qué enseñará la computadora rota?", options: ["Primero mirar de verdad, luego escribir", "Que hay que comprar una computadora mejor", "Que los blogs no valen nada"], answer: 0, why: "«Il blog che scrivo camminando»: presencia antes que prosa." },
      quiz: [
        { q: "Cosa è successo in Val d'Orcia?", kind: "literal", options: ["Il computer si è rotto", "Ha vinto un premio", "Ha conosciuto la sua compagna"], answer: 0, why: "«Il mio computer si è rotto»." },
        { q: "Dove nascevano le pagine migliori?", kind: "literal", options: ["Dalle cose guardate davvero", "Dai ricordi di casa", "Da articoli di altri blogger"], answer: 0, why: "«Le pagine migliori nascevano dalle cose che avevo guardato davvero»." },
        { q: "Cosa deve fare chi racconta la presenza?", kind: "inferencial", options: ["Esserci prima de escribir", "Leer muchos libros", "Escribir más rápido"], answer: 0, why: "«Chi racconta la presenza deve prima esserci»." },
        { q: "«Primero camino y miro, luego escribo». Serviría para tu trabajo o estudios?", kind: "critica", options: ["Sì: la materia prima de cualquier creación es la experiencia directa", "No: escribir es un oficio de biblioteca", "Solo para blogs de viajes"], answer: 0, why: "La escritura viva se alimenta de atención al mundo, no solo de reescritura." },
      ],
      vf: [
        { text: "All'inizio passava le giornate a vivere i posti di persona.", value: false, why: "Falso: pasaba los días frente a la pantalla." },
        { text: "Il computer rotto è stato il suo miglior maestro di scrittura.", value: true, why: "Lo dice el propio texto." },
        { text: "Adesso scrive prima di camminare.", value: false, why: "Falso: primero camina y mira, luego escribe." },
      ],
    },
    {
      id: "md-b1-12-2", theme: "relax mentale", title: "La valigia del viaggiatore sereno", titleEs: "La maleta del viajero sereno", minutes: 4,
      paragraphs: [
        { it: "Un vecchio portiere d'albergo fiorentino mi ha dato la più bella definizione di eleganza: «L'eleganza è portare poco con dignità». Lo diceva delle valigie, ma vale per tutto. Chi viaggia con tre valigie vive nel terrore di perderne una; chi viaggia con uno zaino vive libero.", es: "Un viejo portero de hotel florentino me dio la más bella definición de elegancia: «La elegancia es llevar poco con dignidad». Lo decía de las maletas, pero vale para todo. Quien viaja con tres maletas vive en el terror de perder una; quien viaja con una mochila vive libre." },
        { it: "Da allora applico la «regola del portiere»: metto nella valigia tutto, poi tolgo un terzo. Le cose tolte non mi sono mai mancate — mai. La leggerezza non è solo fisica: la valigia è la prova generale della mente. Se la tua valigia è piena di «non si sa mai», la tua vita probabilmente anche. Viaggia leggero: il mondo pesa già abbastanza.", es: "Desde entonces aplico la «regla del portero»: pongo en la maleta todo, luego quito un tercio. Las cosas quitadas nunca me hicieron falta — nunca. La ligereza no es solo física: la maleta es el ensayo general de la mente. Si tu maleta está llena de «por si acaso», tu vida probablemente también. Viaja ligero: el mundo ya pesa bastante." },
      ],
      predict: { q: "Antes de leer: ¿qué es la elegancia según el portiere?", options: ["Llevar poco con dignidad", "Ropa de marca italiana", "Viajar en primera clase"], answer: 0, why: "«La valigia del viaggiatore sereno»: la filosofía del equipaje." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["La maleta es el ensayo general de la mente: ligereza física y mental van juntas", "Hay que viajar sin nada", "Las maletas caras son más elegantes"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["La regla del portero: empacar todo y quitar un tercio", "Las cosas quitadas nunca le hicieron falta"],
        distractors: ["El portero regaló tres maletas al autor", "El texto dice que el mundo no pesa nada"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["L'eleganza è portare poco con dignità.", "Metto tutto, poi tolgo un terzo.", "Le cose tolte non mi sono mai mancate.", "Metti in valigia sette cambi d'abito per ogni evenienza, non si sa mai."],
        intruder: 3, why: "La valigia llena de «non si sa mai» es justo lo que el texto critica." },
    },
    {
      id: "md-b1-12-3", theme: "meditazione", title: "L'ultima sera del viaggio", titleEs: "La última noche del viaje", minutes: 4,
      paragraphs: [
        { it: "Ogni viaggio ha un momento che quasi tutti buttano via: l'ultima sera. La valigia da fare, il check-in mentale del ritorno, la malinconia. Io ho imparato a trasformarla nel momento più prezioso: la chiamo «la cerimonia dell'ultima sera».", es: "Cada viaje tiene un momento que casi todos desechan: la última noche. La maleta por hacer, el check-in mental del regreso, la melancolía. Yo aprendí a transformarla en el momento más precioso: la llamo «la ceremonia de la última noche»." },
        { it: "Il rituale è semplice: mezz'ora prima di cena, esco da solo e ripercorro a piedi il posto che ho amato di più del viaggio. Senza telefono, senza foto. Solo camminare, guardare e dire arrivederci. L'ultima sera a Palermo ho camminato per un'ora attorno alla Kalsa, e quel addio è il ricordo più vivo di tutto il viaggio. I viaggi non finiscono al gate: finiscono bene solo se li saluti per bene.", es: "El ritual es simple: media hora antes de cenar, salgo solo y recorro a pie el lugar que más amé del viaje. Sin teléfono, sin fotos. Solo caminar, mirar y decir arrivederci. La última noche en Palermo caminé una hora por la Kalsa, y ese adiós es el recuerdo más vivo de todo el viaje. Los viajes no terminan en la puerta de embarque: terminan bien solo si los despides bien." },
      ],
      predict: { q: "Antes de leer: ¿qué hará el autor la última noche de cada viaje?", options: ["La «cerimonia dell'ultima sera»: caminar y despedirse", "Dormir temprano para el vuelo", "Comprar recuerdos apurado"], answer: 0, why: "«L'ultima sera del viaggio»: el rito de cierre." },
      sequence: {
        instr: "Ordena la ceremonia (1 = primero):",
        events: ["Mezz'ora prima di cena esce da solo", "Ripercorre a piedi il posto che ha amato di più", "Senza telefono, senza foto", "Cammina, guarda e dice arrivederci", "Il viaggio finisce bene: salutato per bene"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "L'ultima sera del viaggio, esci da solo mezz'ora prima di cena. Ripercorri a piedi il posto che hai amato di più, senza telefono e senza foto. Cammina, guarda e di arrivederci. I viaggi non finiscono al gate: finiscono bene solo se li saluti per bene.",
        questions: [
          { q: "Quando esci da solo?", kind: "literal", options: ["Mezz'ora prima di cena", "Dopo mezzanotte", "All'alba"], answer: 0, why: "«Mezz'ora prima di cena»." },
          { q: "Cosa NON porti con te?", kind: "literal", options: ["Il telefono", "La valigia", "I soldi"], answer: 0, why: "«Senza telefono, senza foto»." },
          { q: "Dove finiscono i viaggi, davvero?", kind: "inferencial", options: ["No en el gate: en el saludo", "En el aeropuerto", "Al volver al trabajo"], answer: 0, why: "«Finiscono bene solo se li saluti per bene»." },
        ],
      },
    },
  ],
};
