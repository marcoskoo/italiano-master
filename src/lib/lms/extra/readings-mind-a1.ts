import type { MindReading } from "../cambridge-mind";

/* ═══ v9.13 · Letture tematiche A1 · Meditazione, spiritualità, qui e ora,
   relax fisico e mentale — 3 por unidad comunicativa.
   L1: predizione + cuestionario (lit/inf/crit) + V/F con justificación
   L2: predizione + idea principal/secundarias + intruso
   L3: predizione + orden temporal + ascolto                                    */

export const MIND_A1: Record<string, MindReading[]> = {
  "cu-a1-01": [
    {
      id: "md-a1-01-1", theme: "meditazione", title: "Il mio primo respiro", titleEs: "Mi primera respiración", minutes: 2,
      paragraphs: [
        { it: "La meditazione è semplice. Siediti bene. La schiena è dritta, le mani sono ferme. Chiudi gli occhi e ascolta.", es: "La meditación es simple. Siéntate bien. La espalda está recta, las manos están quietas. Cierra los ojos y escucha." },
        { it: "Adesso ascolta il respiro. L'aria entra dal naso, l'aria esce dal naso. È il tuo respiro: è con te, adesso, e non costa niente.", es: "Ahora escucha la respiración. El aire entra por la nariz, el aire sale por la nariz. Es tu respiración: está contigo, ahora, y no cuesta nada." },
      ],
      predict: { q: "Antes de leer: con el título «Il mio primo respiro», ¿de qué tratará el texto?", options: ["El primer llanto de un bebé", "Cómo empezar a meditar con la respiración", "Una enfermedad de los pulmones"], answer: 1, why: "«Il mio primo respiro» es aquí el primer ejercicio de respiración consciente: un texto para empezar a meditar." },
      quiz: [
        { q: "Dove entra l'aria?", kind: "literal", options: ["Dalla bocca", "Dal naso", "Dalle orecchie"], answer: 1, why: "El texto lo dice directo: «L'aria entra dal naso»." },
        { q: "Come deve essere la schiena?", kind: "inferencial", options: ["Dritta", "Storta", "Molto bassa"], answer: 0, why: "«La schiena è dritta»: la postura erguida ayuda a estar atento." },
        { q: "Secondo il testo, meditare è…", kind: "critica", options: ["difficile e costosa", "solo per i monaci", "semplice e gratuita"], answer: 2, why: "«La meditazione è semplice» y «non costa niente»: al alcance de todos." },
      ],
      vf: [
        { text: "Le mani sono ferme.", value: true, why: "Lo dice el primer párrafo: postura quieta de manos." },
        { text: "L'aria entra dalla bocca.", value: false, why: "Falso: «l'aria entra dal naso». La boca no aparece en el texto." },
        { text: "Il respiro è sempre con te.", value: true, why: "«È con te, adesso»: el respiro es el recurso más cercano que tienes." },
      ],
    },
    {
      id: "md-a1-01-2", theme: "qui e ora", title: "Adesso sono qui", titleEs: "Ahora estoy aquí", minutes: 2,
      paragraphs: [
        { it: "Molte persone pensano al passato. Molte persone pensano al futuro. Ma la vita è adesso. Adesso sei qui, con i piedi a terra.", es: "Muchas personas piensan en el pasado. Muchas personas piensan en el futuro. Pero la vida es ahora. Ahora estás aquí, con los pies en la tierra." },
        { it: "«Qui e ora» è una piccola frase grande. Qui è questo posto. Ora è questo momento. Con questa frase, la mente torna tranquilla.", es: "«Aquí y ahora» es una pequeña frase grande. Aquí es este lugar. Ahora es este momento. Con esta frase, la mente vuelve tranquila." },
      ],
      predict: { q: "Antes de leer: ¿qué idea te sugiere el título «Adesso sono qui»?", options: ["Un horario de trenes", "Vivir el momento presente", "Un anuncio de una casa nueva"], answer: 1, why: "El título apunta a la presencia: estar en el aquí y ahora, no en el pasado ni en el futuro." },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["La vida ocurre en el presente, y «qui e ora» calma la mente", "El pasado es la parte más importante de la vida", "Hay que comprar un reloj muy preciso"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias que de verdad aparecen en el texto:",
        secondary: ["Muchas personas viven pensando en el pasado o en el futuro", "«Qui» es el lugar y «ora» es el momento"],
        distractors: ["Hay que meditar tres horas cada día", "La frase «qui e ora» viene del latín antiguo"],
      },
      intruder: {
        instr: "Una de estas frases NO pertenece al espíritu del texto. ¿Cuál es el intruso?",
        sentences: ["La vita è adesso.", "Adesso sei qui, con i piedi a terra.", "Con «qui e ora» la mente torna tranquilla.", "Il passato è l'unica cosa importante."],
        intruder: 3, why: "El texto dice justo lo contrario: pensar solo en el pasado nos aleja de la vida.",
      },
    },
    {
      id: "md-a1-01-3", theme: "relax fisico", title: "Il corpo riposa", titleEs: "El cuerpo descansa", minutes: 2,
      paragraphs: [
        { it: "È sera. Sofia è a casa, sul divano. Prima distende le gambe. Poi appoggia la testa sul cuscino. Respira piano, tre volte. Il corpo è caldo e tranquillo.", es: "Es de noche. Sofía está en casa, en el sofá. Primero estira las piernas. Luego apoya la cabeza en el cojín. Respira lento, tres veces. El cuerpo está tibio y tranquilo." },
        { it: "Domani è un altro giorno. Stasera il corpo dice «grazie». Il relax fisico è semplice: ascolta il corpo, e il corpo ti ascolta.", es: "Mañana es otro día. Esta noche el cuerpo dice «gracias». La relajación física es simple: escucha al cuerpo, y el cuerpo te escucha." },
      ],
      predict: { q: "Antes de leer: «Il corpo riposa» trata sobre…", options: ["Una clase de gimnasia intensa", "Cómo relajar el cuerpo al final del día", "Una receta de cocina ligera"], answer: 1, why: "«Riposa» = descansar: el texto describe una relajación física suave, no ejercicio." },
      sequence: {
        instr: "Ordena en el tiempo la rutina de Sofia (toca las frases en orden, 1 = primero):",
        events: ["Sofia si siede sul divano", "Distende le gambe", "Appoggia la testa sul cuscino", "Respira piano tre volte", "Il corpo diventa caldo e tranquillo"],
      },
      listen: {
        intro: "🎧 Escucha el audio (sin leerlo; puedes escucharlo dos veces) y responde:",
        audioIt: "La sera, prima di dormire, respira tre volte, molto piano. Il corpo si rilassa da solo. Non serve forza: serve solo attenzione.",
        questions: [
          { q: "Quante volte respiri?", kind: "literal", options: ["Una volta", "Tre volte", "Dieci volte"], answer: 1, why: "«Respira tre volte, molto piano»." },
          { q: "Cosa serve per rilassarsi?", kind: "inferencial", options: ["Forza", "Attenzione", "Denaro"], answer: 1, why: "«Non serve forza: serve solo attenzione»: no hace falta fuerza." },
          { q: "Quando si fa questo esercizio?", kind: "literal", options: ["La sera, prima di dormire", "La mattina prestissimo", "Durante la pausa pranzo"], answer: 0, why: "«La sera, prima di dormire»." },
        ],
      },
    },
  ],

  "cu-a1-02": [
    {
      id: "md-a1-02-1", theme: "spiritualità", title: "La pace della nonna", titleEs: "La paz de la abuela", minutes: 2,
      paragraphs: [
        { it: "La nonna Elvira ha ottant'anni. La mattina si siede vicino alla finestra. Non ha fretta: ha il suo caffè e ha il suo silenzio.", es: "La abuela Elvira tiene ochenta años. Por la mañana se sienta junto a la ventana. No tiene prisa: tiene su café y tiene su silencio." },
        { it: "«La pace è una compagna», dice. «Non è lontana. È qui, con me». I nipoti la guardano e imparano una lezione silenziosa.", es: "«La paz es una compañera», dice. «No está lejos. Está aquí, conmigo». Los nietos la miran y aprenden una lección silenciosa." },
      ],
      predict: { q: "Antes de leer: ¿quién será «la nonna» del título?", options: ["Una maestra de yoga famosa", "Una abuela serena que transmite paz", "Una señora que vende café"], answer: 1, why: "El título familiar «della nonna» apunta a una figura querida, no a una celebridad." },
      quiz: [
        { q: "Quanti anni ha la nonna Elvira?", kind: "literal", options: ["Ottanta", "Venti", "Centodieci"], answer: 0, why: "«Ha ottant'anni», dice la primera línea." },
        { q: "Dove si siede la mattina?", kind: "literal", options: ["Vicino alla finestra", "Sul balcone", "In giardino"], answer: 0, why: "«Si siede vicino alla finestra»." },
        { q: "Cosa imparano i nipoti?", kind: "inferencial", options: ["Una ricetta di cucina", "Una lezione silenziosa di pace", "Un gioco di carte"], answer: 1, why: "La aprenden observándola: la paz se contagia sin palabras." },
        { q: "Secondo te, perché il silenzio della nonna è «una lezione»?", kind: "critica", options: ["Porque enseña más que muchas palabras", "Porque los nietos tienen miedo", "Porque en casa está prohibido hablar"], answer: 0, why: "La serenidad vivida es el mejor ejemplo: enseña sin explicar." },
      ],
      vf: [
        { text: "La nonna ha molta fretta la mattina.", value: false, why: "Falso: «non ha fretta» — justo lo contrario." },
        { text: "Per Elvira la pace è lontana.", value: false, why: "Falso: dice «non è lontana, è qui con me»." },
        { text: "I nipoti guardano la nonna.", value: true, why: "«I nipoti la guardano»: observan su ejemplo." },
      ],
    },
    {
      id: "md-a1-02-2", theme: "meditazione", title: "La famiglia in silenzio", titleEs: "La familia en silencio", minutes: 2,
      paragraphs: [
        { it: "Nella famiglia Rossi c'è una bella abitudine. La domenica sera, per dieci minuti, tutti stanno in silenzio. Papà spegne il telefono. Mamma spegne la televisione. Anche il gatto sta zitto!", es: "En la familia Rossi hay una hermosa costumbre. El domingo por la noche, durante diez minutos, todos están en silencio. Papá apaga el teléfono. Mamá apaga la televisión. ¡Hasta el gato se calla!" },
        { it: "In silenzio, si ascolta la casa. Si ascolta il respiro. Dieci minuti sono pochi, ma sono un tesoro. È la meditazione della famiglia Rossi.", es: "En silencio, se escucha la casa. Se escucha la respiración. Diez minutos son pocos, pero son un tesoro. Es la meditación de la familia Rossi." },
      ],
      predict: { q: "Antes de leer: «La famiglia in silenzio» será un texto sobre…", options: ["Una familia que discute mucho", "Una familia que practica silencio juntos", "Una biblioteca municipal"], answer: 1, why: "«In silenzio» es la clave: una costumbre compartida de quietud." },
      ideas: {
        mainQ: "¿Cuál es la idea principal del texto?",
        mainOptions: ["Diez minutos de silencio compartido son un pequeño tesoro familiar", "La televisión es la mejor compañía del domingo", "El gato de la familia Rossi es muy ruidoso"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias que aparecen en el texto:",
        secondary: ["Papá apaga el teléfono y mamá apaga la televisión", "En silencio se escuchan la casa y la respiración"],
        distractors: ["La familia medita tres horas cada día", "Los vecinos se quejan del ruido"],
      },
      intruder: {
        instr: "Busca el intruso: una frase es absurda en este contexto. ¿Cuál?",
        sentences: ["Per dieci minuti tutti stanno in silenzio.", "Papà spegne il telefono.", "In silenzio si ascolta il respiro.", "La domenica sera la famiglia fa una grande festa rumorosa."],
        intruder: 3, why: "El texto habla de silencio: una «festa rumorosa» es lo contrario de la costumbre familiar.",
      },
    },
    {
      id: "md-a1-02-3", theme: "relax mentale", title: "La mente dei bambini", titleEs: "La mente de los niños", minutes: 2,
      paragraphs: [
        { it: "I bambini sanno riposare la mente. Giocano, ridono, corrono. Poi dormono. La loro mente è come il cielo dopo la pioggia: pulita e aperta.", es: "Los niños saben descansar la mente. Juegan, ríen, corren. Luego duermen. Su mente es como el cielo después de la lluvia: limpia y abierta." },
        { it: "Anche tu puoi fare come loro. Dopo il lavoro, gioca un po'. Poi riposa. La mente felice non ha età.", es: "Tú también puedes hacer como ellos. Después del trabajo, juega un poco. Luego descansa. La mente feliz no tiene edad." },
      ],
      predict: { q: "Antes de leer: «La mente dei bambini» hablará de…", options: ["Una escuela muy exigente", "Qué podemos aprender del descanso de los niños", "Los juguetes más vendidos"], answer: 1, why: "El título compara la mente infantil con un modelo de descanso mental." },
      sequence: {
        instr: "Ordena temporalmente el consejo final del texto (1 = primero):",
        events: ["Lavori con attenzione", "Finito il lavoro, giochi un po'", "Poi riposi la mente", "La mente diventa come il cielo dopo la pioggia", "Torni alle cose di tutti i giorni con energia"],
      },
      listen: {
        intro: "🎧 Escucha el audio y responde (puedes escucharlo dos veces):",
        audioIt: "I bambini ridono, corrono e poi dormono bene. La loro mente è libera come il cielo dopo la pioggia. Anche noi, da grandi, possiamo imparare a riposare così.",
        questions: [
          { q: "Cosa fanno i bambini prima di dormire?", kind: "literal", options: ["Ridono e corrono", "Piangono", "Studiano il latino"], answer: 0, why: "«Ridono, corrono e poi dormono»." },
          { q: "Con cosa paragona l'audio la mente dei bambini?", kind: "inferencial", options: ["Con un muro grigio", "Con un cielo dopo la pioggia", "Con un libro chiuso"], answer: 1, why: "«Libera come il cielo dopo la pioggia»: limpia y abierta." },
          { q: "Chi può imparare a riposare così?", kind: "literal", options: ["Solo i bambini", "Anche noi, da grandi", "Nessuno"], answer: 1, why: "«Anche noi, da grandi, possiamo imparare»." },
        ],
      },
    },
  ],

  "cu-a1-03": [
    {
      id: "md-a1-03-1", theme: "qui e ora", title: "La mattina con calma", titleEs: "La mañana con calma", minutes: 2,
      paragraphs: [
        { it: "La mattina, Marco non corre. Si alza, apre la finestra e guarda il cielo. Poi beve un bicchiere d'acqua, piano piano. «Il giorno inizia bene se inizi piano», dice.", es: "Por la mañana, Marco no corre. Se levanta, abre la ventana y mira el cielo. Luego bebe un vaso de agua, despacito. «El día empieza bien si empiezas despacio», dice." },
        { it: "Non guarda il telefono. Prima c'è il cielo, poi c'è l'acqua, poi c'è il respiro. Il telefono aspetta. Il qui e ora è più forte.", es: "No mira el teléfono. Primero está el cielo, luego el agua, luego el respiro. El teléfono espera. El aquí y ahora es más fuerte." },
      ],
      predict: { q: "Antes de leer: ¿qué tipo de mañana describe el título?", options: ["Una mañana apurada y estresada", "Una mañana tranquila y consciente", "Una mañana de tormenta"], answer: 1, why: "«Con calma» lo dice todo: empiezo lento y consciente." },
      quiz: [
        { q: "Cosa fa Marco subito dopo essersi alzato?", kind: "literal", options: ["Apre la finestra e guarda il cielo", "Corre al lavoro", "Accende la televisione"], answer: 0, why: "«Si alza, apre la finestra e guarda il cielo»." },
        { q: "Quando guarda il telefono?", kind: "inferencial", options: ["Subito", "Più tardi: il telefono aspetta", "Mai, l'ha venduto"], answer: 1, why: "«Il telefono aspetta»: primero cielo, agua y respiro." },
        { q: "«Il giorno inizia bene se inizi piano». Sei d'accordo?", kind: "critica", options: ["Sì: un inicio tranquillo cambia todo el día", "No: hay que correr desde el primer minuto", "Da igual: la mañana no importa"], answer: 0, why: "La frase invita a pensar: empezar con calma es una inversión en el resto del día." },
      ],
      vf: [
        { text: "Marco corre la mattina.", value: false, why: "Falso: «la mattina, Marco non corre» — es justamente lo contrario." },
        { text: "Marco beve un bicchiere d'acqua piano piano.", value: true, why: "«Beve un bicchiere d'acqua, piano piano»." },
        { text: "Il telefono è più forte del qui e ora.", value: false, why: "Falso: «il qui e ora è più forte»." },
      ],
    },
    {
      id: "md-a1-03-2", theme: "relax fisico", title: "Una pausa per le spalle", titleEs: "Una pausa para los hombros", minutes: 2,
      paragraphs: [
        { it: "Lavori tutto il giorno al computer? Le spalle sono dure come pietre. Ferma tutto un momento. Alza le spalle, tienile su… e poi lasciale cadere. Ancora una volta: su… e giù.", es: "¿Trabajas todo el día en el ordenador? Los hombros están duros como piedras. Para todo un momento. Sube los hombros, sostenlos… y luego déjalos caer. Otra vez: arriba… y abajo." },
        { it: "Adesso gira il collo, piano, a destra e a sinistra. Bene! Il corpo dice «grazie». Tre piccoli movimenti, e il lavoro è già più leggero.", es: "Ahora gira el cuello, despacio, a la derecha y a la izquierda. ¡Bien! El cuerpo dice «gracias». Tres pequeños movimientos, y el trabajo ya es más ligero." },
      ],
      predict: { q: "Antes de leer: «Una pausa per le spalle» es…", options: ["Un ejercicio físico de relajación en el trabajo", "Un texto sobre moda y abrigos", "Una historia de montaña"], answer: 0, why: "«Pausa» + «spalle» = pausa activa para relajar el cuerpo en la oficina." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Pequeños movimientos bastan para aliviar el cuerpo en el trabajo", "Hay que dejar el trabajo para siempre", "El ordenador es peligroso y hay que tirarlo"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Las espaldas de quien trabaja al ordenador se ponen duras", "Girar el cuello lentamente a derecha e izquierda relaja"],
        distractors: ["Es necesario ir al gimnasio dos horas al día", "El texto recomienda trabajar de pie"],
      },
      intruder: {
        instr: "¿Cuál es el intruso entre estas frases del espíritu del texto?",
        sentences: ["Alza le spalle e lasciale cadere.", "Gira il collo, piano, a destra e a sinistra.", "Il corpo dice «grazie».", "Lavora tutto il giorno senza mai fermarti."],
        intruder: 3, why: "El texto recomienda justamente lo contrario: parar un momento para mover el cuerpo.",
      },
    },
    {
      id: "md-a1-03-3", theme: "meditazione", title: "Tre minuti con il respiro", titleEs: "Tres minutos con el respiro", minutes: 2,
      paragraphs: [
        { it: "La campanella suona: pausa! Luca si siede. Chiude gli occhi. Ascolta il respiro: dentro… fuori… dentro… fuori. Tre minuti soltanto.", es: "¡Suena la campana: pausa! Luca se sienta. Cierra los ojos. Escucha la respiración: adentro… afuera… adentro… afuera. Solo tres minutos." },
        { it: "Dopo i tre minuti, Luca apre gli occhi. Il mondo è lo stesso, ma Luca è nuovo. La meditazione è un bagno leggero per la mente.", es: "Después de los tres minutos, Luca abre los ojos. El mundo es el mismo, pero Luca es nuevo. La meditación es un baño ligero para la mente." },
      ],
      predict: { q: "Antes de leer: «Tre minuti con il respiro» será…", options: ["Un ejercicio de respiración corta y simple", "Una competición de natación", "Una receta con tres ingredientes"], answer: 0, why: "«Tre minuti» + «respiro» = mini-meditación al alcance de todos." },
      sequence: {
        instr: "Ordena la mini-meditación de Luca (1 = primero):",
        events: ["La campanella suona: pausa", "Luca si siede e chiude gli occhi", "Ascolta il respiro: dentro, fuori", "Passano tre minuti", "Luca apre gli occhi e si sente nuovo"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Tre minuti soltanto. Chiudi gli occhi. Il respiro entra, il respiro esce. Non pensare a niente. Dopo tre minuti, apri gli occhi: il mondo è lo stesso, ma tu sei nuovo.",
        questions: [
          { q: "Quanto dura l'esercizio?", kind: "literal", options: ["Tre minuti", "Tre ore", "Trenta secondi"], answer: 0, why: "«Tre minuti soltanto»." },
          { q: "Cosa devi fare con i pensieri?", kind: "inferencial", options: ["Pensarlos todos muy rápido", "Non pensare a niente", "Escribirlos en un cuaderno"], answer: 1, why: "«Non pensare a niente»: solo el respiro." },
          { q: "Cosa succede dopo l'esercizio?", kind: "literal", options: ["El mundo cambia de color", "Abrís los ojos y te sientes nuevo", "Te quedas dormido"], answer: 1, why: "«Apri gli occhi: il mondo è lo stesso, ma tu sei nuovo»." },
        ],
      },
    },
  ],

  "cu-a1-04": [
    {
      id: "md-a1-04-1", theme: "qui e ora", title: "Il caffè dei cinque sensi", titleEs: "El café de los cinco sentidos", minutes: 2,
      paragraphs: [
        { it: "Al bar, Anna prende un caffè. Ma non è un caffè normale. Prima guarda il colore: marrone scuro. Poi ascolta il rumore della tazzina. Poi sente il profumo: forte, caldo.", es: "En el bar, Anna toma un café. Pero no es un café normal. Primero mira el color: marrón oscuro. Luego escucha el ruido de la tacita. Luego siente el aroma: fuerte, caliente." },
        { it: "Adesso beve, piano. Il sapore è amaro e buono. Cinque sensi, un caffè. «Il qui e ora», sorride Anna, «ha il sapore del caffè».", es: "Ahora bebe, despacio. El sabor es amargo y bueno. Cinco sentidos, un café. «El aquí y ahora», sonríe Anna, «tiene sabor a café»." },
      ],
      predict: { q: "Antes de leer: ¿qué será «il caffè dei cinque sensi»?", options: ["Un café cinco veces más caro", "Un café bebido con plena atención a los sentidos", "Un cóctel de cinco tipos de café"], answer: 1, why: "«Cinque sensi» apunta a la atención plena: ver, oír, oler, saborear, tocar." },
      quiz: [
        { q: "Quale colore ha il caffè?", kind: "literal", options: ["Marrone scuro", "Verde chiaro", "Azzurro"], answer: 0, why: "«Marrone scuro», dice el texto." },
        { q: "Perché il caffè di Anna «non è normale»?", kind: "inferencial", options: ["Porque es muy caro", "Porque lo bebe con atención total a los sentidos", "Porque tiene azúcar especial"], answer: 1, why: "Anna usa vista, oído, olfato y gusto: es café consciente." },
        { q: "«Il qui e ora ha il sapore del caffè». Qué significa para ti?", kind: "critica", options: ["Cualquier gesto diario puede volverse un momento de presencia", "Solo el café trae la paz", "Hay que beber diez cafés al día"], answer: 0, why: "La presencia se puede practicar con cualquier cosa cotidiana: el café es solo un ejemplo." },
      ],
      vf: [
        { text: "Anna beve il caffè molto in fretta.", value: false, why: "Falso: «adesso beve, piano» — todo lo contrario." },
        { text: "Anna ascolta il rumore della tazzina.", value: true, why: "«Poi ascolta il rumore della tazzina»: el oído también participa." },
        { text: "Il sapore del caffè è dolcissimo.", value: false, why: "Falso: «il sapore è amaro e buono»." },
      ],
    },
    {
      id: "md-a1-04-2", theme: "spiritualità", title: "Il silenzio del mattino presto", titleEs: "El silencio de la madrugada", minutes: 2,
      paragraphs: [
        { it: "Alle sei del mattino la città dorme ancora. C'è un silenzio speciale, quasi sacro. Solo un uccello canta, lontano. Chi si alza presto riceve questo regalo.", es: "A las seis de la mañana la ciudad duerme todavía. Hay un silencio especial, casi sagrado. Solo un pájaro canta, lejos. Quien madruga recibe este regalo." },
        { it: "Nel silenzio, i pensieri diventano chiari. Il giorno nuovo è una pagina bianca. Le persone antiche dicevano: «L'alba è la porta dell'anima».", es: "En el silencio, los pensamientos se vuelven claros. El día nuevo es una página en blanco. Las personas antiguas decían: «El alba es la puerta del alma»." },
      ],
      predict: { q: "Antes de leer: el texto hablará de…", options: ["El tráfico de las seis de la mañana", "El valor espiritual del silencio del amanecer", "Cómo preparar el desayuno rápido"], answer: 1, why: "«Silenzio del mattino presto» evoca quietud y apertura espiritual." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["El silencio del alba es un regalo que aclara los pensamientos", "Madrugar es malo para la salud", "Los pájaros cantan para despertar a la gente"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["En la madrugada solo canta un pájaro lejano", "Los antiguos llamaban al alba «la puerta del alma»"],
        distractors: ["El texto dice que hay que correr diez kilómetros al alba", "La ciudad está llena de ruido a las seis"],
      },
      intruder: {
        instr: "Encuentra el intruso (la frase absurda en este contexto):",
        sentences: ["La città dorme ancora.", "C'è un silenzio speciale, quasi sacro.", "Nel silenzio i pensieri diventano chiari.", "Alle sei del mattino c'è un grande traffico e la musica a tutto volume."],
        intruder: 3, why: "A las seis la ciudad duerme: «grande traffico e musica a tutto volume» es lo contrario del silencio del alba.",
      },
    },
    {
      id: "md-a1-04-3", theme: "relax mentale", title: "Prima del lavoro", titleEs: "Antes del trabajo", minutes: 2,
      paragraphs: [
        { it: "Giulia lavora in un ufficio grande. Prima di entrare, si ferma vicino a un albero. Respira una volta, due volte, tre volte. Guarda le foglie. La mente si prepara, come un attore prima dello spettacolo.", es: "Giulia trabaja en una oficina grande. Antes de entrar, se detiene junto a un árbol. Respira una vez, dos veces, tres veces. Mira las hojas. La mente se prepara, como un actor antes del espectáculo." },
        { it: "Poi entra, e il lavoro è sempre lavoro. Ma Giulia ha un segreto piccolo e verde: tre respiri e un albero.", es: "Luego entra, y el trabajo es siempre trabajo. Pero Giulia tiene un secreto pequeño y verde: tres respiraciones y un árbol." },
      ],
      predict: { q: "Antes de leer: ¿cuál es el «segreto» de Giulia?", options: ["Un nuevo smartphone carísimo", "Un ritual de calma antes de entrar a trabajar", "Una siesta larga en la oficina"], answer: 1, why: "«Prima del lavoro» + la imagen de respirar apuntan a un ritual de preparación mental." },
      sequence: {
        instr: "Ordena los pasos del ritual de Giulia (1 = primero):",
        events: ["Giulia arriva vicino all'ufficio", "Si ferma vicino a un albero", "Respira tre volte", "Guarda le foglie", "Entra in ufficio con la mente pronta"],
      },
      listen: {
        intro: "🎧 Escucha el audio y responde:",
        audioIt: "Prima di entrare in ufficio, Giulia si ferma sotto un albero. Respira piano tre volte e guarda le foglie. Sono solo trenta secondi, ma la sua giornata inizia con calma.",
        questions: [
          { q: "Dove si ferma Giulia?", kind: "literal", options: ["Sotto un albero", "Davanti alla finestra del capo", "Al bar"], answer: 0, why: "«Si ferma sotto un albero»." },
          { q: "Quanto dura il rituale?", kind: "literal", options: ["Trenta secondi", "Trenta minuti", "Tre ore"], answer: 0, why: "«Sono solo trenta secondi»." },
          { q: "Con quale parola inizia la giornata di Giulia?", kind: "inferencial", options: ["Con calma", "Con rabbia", "Con paura"], answer: 0, why: "«Inizia con calma»: eso logra el mini-ritual." },
        ],
      },
    },
  ],

  "cu-a1-05": [
    {
      id: "md-a1-05-1", theme: "qui e ora", title: "Mangiare con attenzione", titleEs: "Comer con atención", minutes: 2,
      paragraphs: [
        { it: "A tavola, il nonno mangia piano. Guarda il pomodoro rosso, sente il profumo del basilico, ascolta il rumore della forchetta. Mangia e basta: niente telefono, niente televisione.", es: "En la mesa, el abuelo come despacio. Mira el tomate rojo, huele el perfume de la albahaca, escucha el ruido del tenedor. Come y ya: ni teléfono, ni televisión." },
        { it: "«Il cibo è un amico», dice. «Quando mangi, mangia». È la meditazione del pranzo, semplice e antica come il pane.", es: "«La comida es una amiga», dice. «Cuando comes, come». Es la meditación del almuerzo, simple y antigua como el pan." },
      ],
      predict: { q: "Antes de leer: «Mangiare con attenzione» es…", options: ["Una dieta para adelgazar rápido", "Comer de forma consciente, usando los sentidos", "Un curso de cocina profesional"], answer: 1, why: "«Con attenzione» = atención plena en cada bocado, no una dieta." },
      quiz: [
        { q: "Cosa NON c'è a tavola del nonno?", kind: "literal", options: ["Il telefono", "Il pomodoro", "La forchetta"], answer: 0, why: "«Niente telefono, niente televisione»." },
        { q: "Che profumo sente il nonno?", kind: "literal", options: ["Del basilico", "Del caffè", "Del sapone"], answer: 0, why: "«Sente il profumo del basilico»." },
        { q: "Cosa significa «quando mangi, mangia»?", kind: "inferencial", options: ["Hay que comer dos veces", "Haz una sola cosa a la vez: come cuando comes", "Hay que comer muy rápido"], answer: 1, why: "Una cosa a la vez: presencia total en la acción de comer." },
        { q: "El texto compara la meditación del almuerzo con el pan. Por qué?", kind: "critica", options: ["Porque ambas cosas se compran", "Porque ambas son simples, cotidianas y antiguas", "Porque ambas son caras"], answer: 1, why: "La simplicidad cotidiana es el punto: meditar no requiere nada especial." },
      ],
      vf: [
        { text: "Il nonno mangia piano, con i sensi aperti.", value: true, why: "Mira, huele, escucha: todos los sentidos participan." },
        { text: "A tavola c'è la televisione accesa.", value: false, why: "Falso: «niente televisione»." },
        { text: "Per il nonno il cibo è un nemico.", value: false, why: "Falso: «il cibo è un amico»." },
      ],
    },
    {
      id: "md-a1-05-2", theme: "relax fisico", title: "Dopo cena, il corpo riposa", titleEs: "Después de cenar, el cuerpo descansa", minutes: 2,
      paragraphs: [
        { it: "La cena è finita. Maria si alza piano dalla sedia. Mette una mano sulla pancia: è calda e piena. Cammina un po' per la casa, senza fretta, come una gatta.", es: "La cena terminó. María se levanta despacio de la silla. Pone una mano sobre la panza: está tibia y llena. Camina un poco por la casa, sin prisa, como una gata." },
        { it: "Poi si siede e respira. La digestione è lenta e tranquilla. Il corpo lavora piano piano, e Maria lo ascolta. La serata è morbida come un cuscino.", es: "Luego se sienta y respira. La digestión es lenta y tranquila. El cuerpo trabaja despacito, y María lo escucha. La velada es suave como un cojín." },
      ],
      predict: { q: "Antes de leer: el texto describirá…", options: ["Un entrenamiento intenso de noche", "Una relajación suave del cuerpo después de cenar", "Una receta de postre"], answer: 1, why: "«Dopo cena» + «il corpo riposa» = calma posprandial, no ejercicio." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Después de cenar, el cuerpo pide calma y escucha lenta", "Hay que dormir inmediatamente después de cenar", "Caminar rápido quema la cena antes"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Maria camina por la casa sin prisa, como una gata", "La digestión es lenta y tranquila, y María la escucha"],
        distractors: ["El texto recomienda correr diez kilómetros tras la cena", "María prepare un postre de chocolate"],
      },
      intruder: {
        instr: "Busca la frase intrusa (no encaja con el espíritu del texto):",
        sentences: ["Maria si alza piano dalla sedia.", "Cammina un po' per la casa, senza fretta.", "Il corpo lavora piano piano.", "Subito dopo cena, Maria fa un'ora di corsa veloce."],
        intruder: 3, why: "El texto es de calma: una hora de carrera rápida tras la cena es lo opuesto.",
      },
    },
    {
      id: "md-a1-05-3", theme: "spiritualità", title: "Il cibo è un dono", titleEs: "La comida es un don", minutes: 2,
      paragraphs: [
        { it: "Prima di mangiare, la famiglia Chen si ferma un momento. «Grazie al sole, grazie alla pioggia, grazie alle mani che hanno cucinato». Sono parole piccole, ma il cuore è grande.", es: "Antes de comer, la familia Chen se detiene un momento. «Gracias al sol, gracias a la lluvia, gracias a las manos que cocinaron». Son palabras pequeñas, pero el corazón es grande." },
        { it: "Per la famiglia Chen, ogni pasto è un piccolo miracolo. Il pane, la frutta, l'acqua: niente è «normale». Tutto è un dono.", es: "Para la familia Chen, cada comida es un pequeño milagro. El pan, la fruta, el agua: nada es «normal». Todo es un don." },
      ],
      predict: { q: "Antes de leer: ¿qué hará la familia antes de comer?", options: ["Una llamada de trabajo", "Una pequeña acción de gracias", "Una foto para las redes"], answer: 1, why: "«Il cibo è un dono» apunta a gratitud: agradecer antes de comer." },
      sequence: {
        instr: "Ordena los pasos de la familia Chen (1 = primero):",
        events: ["La famiglia si siede a tavola", "Si ferma un momento, in silenzio", "Dice «grazie» al sole, alla pioggia e alle mani", "Mangia con calma", "Finisce il pasto con il cuore pieno"],
      },
      listen: {
        intro: "🎧 Escucha el audio y responde:",
        audioIt: "Prima di mangiare, la famiglia si ferma un momento e dice grazie: grazie al sole, grazie alla pioggia, grazie alle mani che hanno cucinato. Parole piccole, cuore grande. Ogni pasto è un piccolo miracolo.",
        questions: [
          { q: "A chi dice grazie la famiglia?", kind: "literal", options: ["Al sole, alla pioggia e alle mani che hanno cucinato", "Al cuoco del ristorante", "Al professore"], answer: 0, why: "El audio nombra sol, lluvia y manos que cocinaron." },
          { q: "Come sono le parole?", kind: "literal", options: ["Piccole, ma con il cuore grande", "Lunghe e noiose", "Tristi"], answer: 0, why: "«Parole piccole, cuore grande»." },
          { q: "Cosa è ogni pasto per la famiglia?", kind: "inferencial", options: ["Un piccolo miracolo", "Un problema", "Una perdita di tempo"], answer: 0, why: "«Ogni pasto è un piccolo miracolo»: nada es normal, todo es don." },
        ],
      },
    },
  ],

  "cu-a1-06": [
    {
      id: "md-a1-06-1", theme: "relax mentale", title: "Prima di comprare, respira", titleEs: "Antes de comprar, respira", minutes: 2,
      paragraphs: [
        { it: "Al centro commerciale, tutto è colorato e forte: luci, musica, vetrine. La mente corre: «Voglio questo! Voglio quello!». STOP. Respira una volta, piano.", es: "En el centro comercial, todo es colorido e intenso: luces, música, vitrinas. La mente corre: «¡Quiero esto! ¡Quiero aquello!». STOP. Respira una vez, despacio." },
        { it: "Adesso guarda l'oggetto con calma. Ti serve davvero? La risposta tranquilla è una risposta intelligente. Comprare con calma è anche meditazione.", es: "Ahora mira el objeto con calma. ¿De verdad lo necesitas? La respuesta tranquila es una respuesta inteligente. Comprar con calma también es meditación." },
      ],
      predict: { q: "Antes de leer: el texto dará un consejo sobre…", options: ["Cómo gastar mucho dinero rápido", "Cómo calmar la mente antes de comprar", "Dónde aparcar en el centro comercial"], answer: 1, why: "«Prima di comprare, respira» une compra consciente y respiración." },
      quiz: [
        { q: "Com'è il centro commerciale?", kind: "literal", options: ["Tranquillo e silenzioso", "Colorato e forte: luci, musica, vetrine", "Piccolo e buio"], answer: 1, why: "«Tutto è colorato e forte: luci, musica, vetrine»." },
        { q: "Qual è la domanda importante prima di comprare?", kind: "inferencial", options: ["«È di moda?»", "«Ti serve davvero?»", "«È il più caro?»"], answer: 1, why: "«Ti serve davvero?»: la pregunta clave de la compra consciente." },
        { q: "«La risposta tranquilla è una risposta intelligente». Estás de acuerdo?", kind: "critica", options: ["Sì: la calma deja ver la necesidad real", "No: hay que decidir rápido siempre", "Da igual: comprar es comprar"], answer: 0, why: "La pausa consciente evita compras impulsivas: es la tesis del texto." },
      ],
      vf: [
        { text: "La mente corre al centro commerciale.", value: true, why: "«La mente corre: voglio questo, voglio quello»." },
        { text: "El texto dice «compra tutto subito».", value: false, why: "Falso: propone respirar y preguntarse si hace falta." },
        { text: "Comprare con calma è anche meditazione.", value: true, why: "Lo dice la última línea: presencia aplicada a la compra." },
      ],
    },
    {
      id: "md-a1-06-2", theme: "qui e ora", title: "I colori del mercato", titleEs: "Los colores del mercado", minutes: 2,
      paragraphs: [
        { it: "Al mercato, Luca non compra subito. Prima guarda: rosso le pomodori, verde il basilico, giallo i limoni. Il mercato è un quadro vivo, e l'ingresso è gratis.", es: "En el mercado, Luca no compra de inmediato. Primero mira: rojos los tomates, verde la albahaca, amarillos los limones. El mercado es un cuadro vivo, y la entrada es gratis." },
        { it: "Poi ascolta le voci, sente i profumi. Solo dopo, compra. «Sono qui», pensa Luca. «In questo momento, in questo posto». È lunedì, è mercato, è vita.", es: "Luego escucha las voces, huele los perfumes. Solo después, compra. «Estoy aquí», piensa Luca. «En este momento, en este lugar». Es lunes, es mercado, es vida." },
      ],
      predict: { q: "Antes de leer: el texto será sobre…", options: ["Precios y descuentos del mercado", "La experiencia sensorial y presente del mercado", "Una receta con limones"], answer: 1, why: "«I colori» apunta a los sentidos, no a los precios." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["El mercado se puede vivir como un cuadro vivo de colores, voces y perfumes", "El mercado es el lugar más barato de la ciudad", "Hay que comprar rápido antes de que cierren"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Luca primero mira, escucha y huele; solo después compra", "Para Luca es lunes, es mercado, es vida: presencia total"],
        distractors: ["Luca compra todos los limones del mercado", "El texto dice que el mercado es peligroso"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Rosso i pomodori, verde il basilico, giallo i limoni.", "Il mercato è un quadro vivo.", "Luca ascolta le voci e sente i profumi.", "Al mercato Luca corre con gli occhi chiusi e non guarda niente."],
        intruder: 3, why: "Todo el texto va de mirar y sentir: correr con los ojos cerrados es lo contrario.",
      },
    },
    {
      id: "md-a1-06-3", theme: "meditazione", title: "Lo sguardo tranquillo", titleEs: "La mirada tranquila", minutes: 2,
      paragraphs: [
        { it: "Siediti. Guarda davanti a te, senza sforzo. Non giudicare: «bello», «brutto», «mio», «tuo». Guarda e basta. Gli occhi sono calmi, e la mente diventa calma.", es: "Siéntate. Mira delante de ti, sin esfuerzo. No juzgues: «bonito», «feo», «mío», «tuyo». Mira y ya. Los ojos están calmados, y la mente se vuelve calma." },
        { it: "Dopo cinque minuti, chiudi gli occhi. Le immagini restano dentro, come fotografie gentili. Questo esercizio si chiama «sguardo tranquillo».", es: "Después de cinco minutos, cierra los ojos. Las imágenes quedan dentro, como fotografías amables. Este ejercicio se llama «mirada tranquila»." },
      ],
      predict: { q: "Antes de leer: «Lo sguardo tranquillo» es…", options: ["Una mirada de enfado", "Un ejercicio de meditación con los ojos", "Un tipo de gafas nuevas"], answer: 1, why: "«Sguardo tranquillo» describe una práctica: mirar sin juzgar." },
      sequence: {
        instr: "Ordena el ejercicio «sguardo tranquillo» (1 = primero):",
        events: ["Ti siedi comodo", "Guardi davanti a te, senza sforzo e senza giudicare", "Passano cinque minuti", "Chiudi gli occhi", "Le immagini restano dentro, come fotografie gentili"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Guarda davanti a te, senza sforzo. Non dire «bello», non dire «brutto»: guarda e basta. Gli occhi sono calmi e la mente diventa calma. Dopo cinque minuti, chiudi gli occhi.",
        questions: [
          { q: "Cosa NON devi dire?", kind: "literal", options: ["«Bello» e «brutto»", "«Grazie»", "«Buongiorno»"], answer: 0, why: "«Non dire bello, non dire brutto»: mirar sin juzgar." },
          { q: "Quanti minuti dura la parte con gli occhi aperti?", kind: "literal", options: ["Cinque minuti", "Cinque ore", "Un minuto"], answer: 0, why: "«Dopo cinque minuti, chiudi gli occhi»." },
          { q: "Cosa succede alla mente quando gli occhi sono calmi?", kind: "inferencial", options: ["Diventa calma anche lei", "Diventa nervosa", "Si addormenta subito"], answer: 0, why: "«Gli occhi sono calmi e la mente diventa calma»." },
        ],
      },
    },
  ],

  "cu-a1-07": [
    {
      id: "md-a1-07-1", theme: "relax fisico", title: "Camminare in città", titleEs: "Caminar por la ciudad", minutes: 2,
      paragraphs: [
        { it: "Cammina per la città, ma cammina bene. I piedi toccano terra, il corpo è dritto, le spalle sono libere. Respira con i passi: un passo, un respiro.", es: "Camina por la ciudad, pero camina bien. Los pies tocan el suelo, el cuerpo está recto, los hombros están libres. Respira con los pasos: un paso, una respiración." },
        { it: "Il semaforo è rosso? Perfetto: tre respiri fermi. L'autobus è in ritardo? Benissimo: due minuti di piedi tranquilli. La città diventa una palestra di calma.", es: "¿El semáforo está en rojo? Perfecto: tres respiraciones quietas. ¿El autobús llega tarde? Estupendo: dos minutos de pies tranquilos. La ciudad se vuelve un gimnasio de calma." },
      ],
      predict: { q: "Antes de leer: el texto enseñará a…", options: ["Convertir la ciudad en un gimnasio de calma al caminar", "Correr maratones urbanas", "Evitar los semáforos rojos"], answer: 0, why: "«Camminare in città» + calma: presencia aplicada al paseo urbano." },
      quiz: [
        { q: "Con che cosa respiri camminando?", kind: "literal", options: ["Con i passi", "Con il telefono", "Con la radio"], answer: 0, why: "«Respira con i passi: un passo, un respiro»." },
        { q: "Il semaforo rosso, secondo il testo, è…", kind: "inferencial", options: ["Un problema grave", "Una oportunidad para tres respiros quietos", "Una señal de mala suerte"], answer: 1, why: "«Perfetto: tre respiri fermi»: los obstáculos se vuelven pausas." },
        { q: "«La città diventa una palestra di calma». Te parece una buena idea?", kind: "critica", options: ["Sì: cualquier espera se convierte en práctica", "No: la calma solo existe en la montaña", "Da igual: la ciudad es solo ruido"], answer: 0, why: "La tesis del texto: la práctica no necesita un lugar especial." },
      ],
      vf: [
        { text: "Le spalle devono essere libere.", value: true, why: "«Le spalle sono libere»: postura relajada." },
        { text: "Il testo dice che l'autobus in ritardo è una tragedia.", value: false, why: "Falso: «benissimo: due minuti di piedi tranquilli»." },
        { text: "Un passo, un respiro.", value: true, why: "Es la técnica central del texto." },
      ],
    },
    {
      id: "md-a1-07-2", theme: "meditazione", title: "Il rumore e il silenzio", titleEs: "El ruido y el silencio", minutes: 2,
      paragraphs: [
        { it: "In città c'è sempre rumore: motori, clacson, voci. Ma ascolta bene: dentro il rumore c'è anche un silenzio. È il silenzio tra un suono e l'altro.", es: "En la ciudad siempre hay ruido: motores, cláxons, voces. Pero escucha bien: dentro del ruido también hay un silencio. Es el silencio entre un sonido y otro." },
        { it: "La meditazione urbana è questo: cercare il silenzio dentro il rumore. Non serve scappare in montagna. Serve solo attenzione. Il silenzio è timido, ma esiste.", es: "La meditación urbana es esto: buscar el silencio dentro del ruido. No hace falta huir a la montaña. Hace falta solo atención. El silencio es tímido, pero existe." },
      ],
      predict: { q: "Antes de leer: ¿dónde estará el silencio según el título?", options: ["Lejos, en la montaña", "Dentro del ruido de la ciudad", "En una biblioteca"], answer: 1, why: "El título junta «rumore» y «silenzio»: el silencio convive con el ruido." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["El silencio existe incluso dentro del ruido urbano, si hay atención", "La ciudad es imposible para meditar", "Hay que comprar audífonos caros"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El silencio está entre un sonido y otro", "Para meditar en la ciudad no hace falta huir a la montaña"],
        distractors: ["El texto dice que hay que taparse los oídos", "El silencio urbano solo aparece de noche"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Dentro il rumore c'è anche un silenzio.", "Il silenzio è tra un suono e l'altro.", "Non serve scappare in montagna.", "Per meditare è obbligatorio vivere in montagna, lontano da tutti."],
        intruder: 3, why: "El texto afirma lo contrario: «non serve scappare in montagna».",
      },
    },
    {
      id: "md-a1-07-3", theme: "spiritualità", title: "Una chiesa silenziosa", titleEs: "Una iglesia silenciosa", minutes: 2,
      paragraphs: [
        { it: "Nel centro della città c'è una chiesa piccola e fresca. La porta è aperta. Dentro, il rumore della strada scompare, come per magia. Il tempo cambia velocità.", es: "En el centro de la ciudad hay una iglesia pequeña y fresca. La puerta está abierta Adentro, el ruido de la calle desaparece, como por magia. El tiempo cambia de velocidad." },
        { it: "Marco si siede nell'ultima panca. Non è religioso, ma quel silenzio parla una lingua antica. «Qui», pensa, «il tempo è una cosa lenta e gentile».", es: "Marco se sienta en el último banco. No es religioso, pero ese silencio habla una lengua antigua. «Aquí», piensa, «el tiempo es una cosa lenta y amable»." },
      ],
      predict: { q: "Antes de leer: ¿qué encontrará Marco en la iglesia?", options: ["Una fiesta ruidosa", "Un silencio que cambia la velocidad del tiempo", "Un restaurante caro"], answer: 1, why: "«Chiesa silenziosa» promete quietud, incluso para quien no es religioso." },
      sequence: {
        instr: "Ordena la experiencia de Marco (1 = primero):",
        events: ["Marco trova la chiesa con la porta aperta", "Entra: il rumore della strada scompare", "Si siede nell'ultima panca", "Ascolta il silenzio, che parla una lingua antica", "Pensa: qui il tempo è lento e gentile"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Nel centro della città c'è una chiesa piccola e fresca. La porta è aperta. Dentro, il rumore scompare. Marco si siede nell'ultima panca: non è religioso, ma quel silenzio parla una lingua antica.",
        questions: [
          { q: "Com'è la chiesa?", kind: "literal", options: ["Piccola e fresca", "Grande e calda", "Nuova e rumorosa"], answer: 0, why: "«Una chiesa piccola e fresca»." },
          { q: "Marco è religioso?", kind: "literal", options: ["No, ma il silenzio gli parla", "Sì, molto", "Non si sa"], answer: 0, why: "«Non è religioso, ma quel silenzio parla»." },
          { q: "Qué desaparece al entrar?", kind: "inferencial", options: ["El ruido de la calle", "La puerta", "La gente"], answer: 0, why: "«Dentro, il rumore scompare»." },
        ],
      },
    },
  ],

  "cu-a1-08": [
    {
      id: "md-a1-08-1", theme: "qui e ora", title: "Il treno e il paesaggio", titleEs: "El tren y el paisaje", minutes: 2,
      paragraphs: [
        { it: "Sul treno, molti guardano il telefono. Elena guarda il finestrino. Ci sono colline gialle, un fiume lento, case piccole piccole. Il paesaggio è un film senza pubblicità.", es: "En el tren, muchos miran el teléfono. Elena mira la ventanilla. Hay colinas amarillas, un río lento, casas chiquititas. El paisaje es una película sin publicidad." },
        { it: "«Il treno è lento?» pensa Elena. «Bene! Ho più tempo per guardare». Il viaggio non è solo l'arrivo: è anche il paesaggio. Adesso, qui, passa una mucca. Che regalo!", es: "«¿El tren es lento?», piensa Elena. «¡Bien! Tengo más tiempo para mirar». El viaje no es solo la llegada: es también el paisaje. Ahora, aquí, pasa una vaca. ¡Qué regalo!" },
      ],
      predict: { q: "Antes de leer: ¿qué mira Elena en el tren?", options: ["Su teléfono todo el viaje", "El paisaje por la ventanilla", "Una película con publicidad"], answer: 1, why: "«Il treno e il paesaggio» lo anticipa: la ventanilla como pantalla." },
      quiz: [
        { q: "Cosa guardano molti sul treno?", kind: "literal", options: ["Il telefono", "Il paesaggio", "Il controllore"], answer: 0, why: "«Molti guardano il telefono»." },
        { q: "Perché Elena è contenta del treno lento?", kind: "inferencial", options: ["Porque tiene más tiempo para mirar el paisaje", "Porque odia llegar temprano", "Porque el tren lento es más barato"], answer: 0, why: "«Bene! Ho più tempo per guardare»: lentitud = tiempo de presencia." },
        { q: "«Il viaggio non è solo l'arrivo». Qué piensas de esta frase?", kind: "critica", options: ["Es cierta: el camino vale tanto como la meta", "Es falsa: solo importa llegar", "Es solo un eslogan de la compañía"], answer: 0, why: "Aplicarla al día a día es la lección: vivir el proceso, no solo el resultado." },
      ],
      vf: [
        { text: "Il paesaggio è un film senza pubblicità.", value: true, why: "Metáfora del texto: naturaleza sin interrupciones." },
        { text: "Elena odia il treno lento.", value: false, why: "Falso: el tren lento le regala tiempo para mirar." },
        { text: "Sul treno passa una mucca.", value: true, why: "«Adesso, qui, passa una mucca»." },
      ],
    },
    {
      id: "md-a1-08-2", theme: "relax mentale", title: "In viaggio senza pensieri", titleEs: "De viaje sin pensamientos", minutes: 2,
      paragraphs: [
        { it: "Il treno parte. Nella testa di Pietro c'è una valigia pesante: il lavoro, i problemi, le liste. Ma il treno va, e i pensieri restano alla stazione.", es: "El tren parte. En la cabeza de Pietro hay una maleta pesada: el trabajo, los problemas, las listas. Pero el tren avanza, y los pensamientos se quedan en la estación." },
        { it: "Dopo dieci minuti, la mente è come il vagone: ordinata e tranquilla. «In viaggio», sorride Pietro, «si viaggia anche nella testa». Relax mentale su rotaia.", es: "Después de diez minutos, la mente es como el vagón: ordenada y tranquila. «De viaje», sonríe Pietro, «también se viaja en la cabeza». Relajación mental sobre rieles." },
      ],
      predict: { q: "Antes de leer: «In viaggio senza pensieri» trata sobre…", options: ["Una guía de equipaje ligero", "Cómo la mente se calma viajando", "Un problema perdido de equipaje"], answer: 1, why: "«Senza pensieri» es la clave: la mente que se vacía en el viaje." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["El viaje en tren puede ordenar y calmar la mente", "Los trenes italianos siempre llegan tarde", "Hay que pensar en el trabajo durante el viaje"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Los pensamientos pesados de Pietro se quedan en la estación", "Después de diez minutos la mente está ordenada como el vagón"],
        distractors: ["Pietro pierde su valigia en la estación", "El texto recomienda trabajar en el tren"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Nella testa di Pietro c'è una valigia pesante di pensieri.", "Il treno va e i pensieri restano alla stazione.", "La mente diventa ordinata e tranquilla.", "Pietro lavora al telefono per tutto il viaggio, senza guardare fuori."],
        intruder: 3, why: "El texto va de soltar los pensamientos, no de trabajar todo el viaje.",
      },
    },
    {
      id: "md-a1-08-3", theme: "relax fisico", title: "Il sedile e la schiena", titleEs: "El asiento y la espalda", minutes: 2,
      paragraphs: [
        { it: "In treno, siediti bene. La schiena tocca lo schienale. I piedi toccano terra. Le mani riposano sulle gambe, come due gatti addormentati.", es: "En el tren, siéntate bien. La espalda toca el respaldo. Los pies tocan el suelo. Las manos descansan sobre las piernas, como dos gatos dormidos." },
        { it: "Adesso lascia andare le spalle. Giù… ancora giù… bene. Chiudi gli occhi per dieci stazioni. Il treno ti porta: tu non devi fare niente. Che lusso!", es: "Ahora suelta los hombros. Abajo… más abajo… bien. Cierra los ojos durante diez estaciones. El tren te lleva: tú no tienes que hacer nada. ¡Qué lujo!" },
      ],
      predict: { q: "Antes de leer: el texto explicará…", options: ["Cómo dormir en el hotel", "Una postura relajada sentado en el tren", "Cómo conducir un tren"], answer: 1, why: "«Sedile» (asiento) + «schiena» (espalda) = postura en el tren." },
      sequence: {
        instr: "Ordena los pasos (1 = primero):",
        events: ["La schiena tocca lo schienale", "I piedi toccano terra", "Le mani riposano sulle gambe", "Lasci andare le spalle, giù e ancora giù", "Chiudi gli occhi per dieci stazioni"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "In treno, siediti bene: la schiena tocca lo schienale, i piedi toccano terra. Poi lascia andare le spalle: giù, ancora giù. Chiudi gli occhi. Il treno ti porta: tu non devi fare niente.",
        questions: [
          { q: "Cosa toccano i piedi?", kind: "literal", options: ["Terra", "Il sedile davanti", "La valigia"], answer: 0, why: "«I piedi toccano terra»." },
          { q: "Cosa non devi fare?", kind: "literal", options: ["Niente: il treno ti porta", "Respirare", "Guardare il paesaggio"], answer: 0, why: "«Tu non devi fare niente»." },
          { q: "Dove vanno le mani?", kind: "inferencial", options: ["Sulle gambe, come due gatti addormentati", "In tasca", "Alzate in alto"], answer: 0, why: "El texto de lectura lo dice: «come due gatti addormentati» — suaves y quietas." },
        ],
      },
    },
  ],

  "cu-a1-09": [
    {
      id: "md-a1-09-1", theme: "meditazione", title: "Il mio tempo per me", titleEs: "Mi tiempo para mí", minutes: 2,
      paragraphs: [
        { it: "Nel tempo libero, cosa fai? Marco ha una risposta strana: «Non faccio niente. E non sono mai così felice». Si siede nel parco, guarda gli alberi e respira.", es: "En el tiempo libre, ¿qué haces? Marco tiene una respuesta rara: «No hago nada. Y nunca soy tan feliz». Se sienta en el parque, mira los árboles y respira." },
        { it: "Dieci minuti di niente: niente telefono, niente musica, niente fretta. Solo il respiro e il parco. «Il tempo per me», dice Marco, «è il cuore della settimana».", es: "Diez minutos de nada: ni teléfono, ni música, ni prisa. Solo el respiro y el parque. «El tiempo para mí», dice Marco, «es el corazón de la semana»." },
      ],
      predict: { q: "Antes de leer: ¿qué hace Marco en su tiempo libre?", options: ["Deportes extremos", "Nada activamente: sentarse y respirar", "Compras en el centro"], answer: 1, why: "«Il mio tempo per me» + la sorpresa de «no hacer nada» apuntan a pausa consciente." },
      quiz: [
        { q: "Dove si siede Marco?", kind: "literal", options: ["Nel parco", "In ufficio", "Al bar"], answer: 0, why: "«Si siede nel parco»." },
        { q: "Perché la risposta di Marco è «strana»?", kind: "inferencial", options: ["Porque hace mucho deporte", "Porque no hace nada y aun así es feliz", "Porque habla un idioma raro"], answer: 1, why: "La felicidad sin «hacer» sorprende en un mundo ocupado." },
        { q: "«Il tempo per me è il cuore della settimana». Qué piensas?", kind: "critica", options: ["Cierto: cuidarse a uno mismo sostiene todo lo demás", "Falso: perder tiempo es malo siempre", "Es una frase bonita pero vacía"], answer: 0, why: "El autocuidado no es egoísmo: es la base de la energía para los demás." },
      ],
      vf: [
        { text: "Marco ascolta la musica nel parco.", value: false, why: "Falso: «niente musica» — solo respiro y parque." },
        { text: "Dieci minuti di niente rendono Marco felice.", value: true, why: "«Non sono mai così felice»." },
        { text: "Marco porta il telefono nel parco.", value: false, why: "Falso: «niente telefono»." },
      ],
    },
    {
      id: "md-a1-09-2", theme: "spiritualità", title: "La domenica dell'anima", titleEs: "El domingo del alma", minutes: 2,
      paragraphs: [
        { it: "La domenica, Chiara non lavora. La mattina cammina fino al fiume. L'acqua va, va, va, e non ha mai fretta. Chiara guarda l'acqua e pensa alle cose importanti.", es: "El domingo, Chiara no trabaja. Por la mañana camina hasta el río. El agua avanza, avanza, avanza, y nunca tiene prisa. Chiara mira el agua y piensa en las cosas importantes." },
        { it: "«Un giorno alla settimana», dice, «è per l'anima». Non è religione: è attenzione. Il fiume è la sua chiesa, il silenzio è la sua preghiera.", es: "«Un día a la semana», dice, «es para el alma». No es religión: es atención. El río es su iglesia, el silencio es su oración." },
      ],
      predict: { q: "Antes de leer: «La domenica dell'anima» hablará de…", options: ["Misas y ritos religiosos", "Un día semanal de atención y quietud junto al río", "Un partido de fútbol del domingo"], answer: 1, why: "«Anima» aquí es dimensión interior, no religión organizada." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Dedicar un día a la semana a la atención y al silencio nutre el alma", "Los domingos hay que trabajar el doble", "El río es peligroso y hay que evitarlo"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El agua del río avanza sin prisa, como ejemplo", "Para Chiara el río es su iglesia y el silencio su oración"],
        distractors: ["Chiara va a la iglesia todos los días", "El texto dice que trabajar los domingos es bueno"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["La domenica Chiara cammina fino al fiume.", "L'acqua va e non ha mai fretta.", "Il silenzio è la sua preghiera.", "La domenica Chiara lavora dodici ore in ufficio."],
        intruder: 3, why: "El texto empieza diciendo «la domenica, Chiara non lavora»: lo contrario del intruso.",
      },
    },
    {
      id: "md-a1-09-3", theme: "qui e ora", title: "Guardare le nuvole", titleEs: "Mirar las nubes", minutes: 2,
      paragraphs: [
        { it: "È sabato pomeriggio. Nina è sull'erba, nel giardino. Sopra di lei passano le nuvole: una è un coniglio, una è una nave, una è solo una nuvola. Va bene così.", es: "Es sábado por la tarde. Nina está sobre la hierba, en el jardín. Encima de ella pasan las nubes: una es un conejo, una es un barco, una es solo una nube. Está bien así." },
        { it: "Nina non pensa a ieri, non pensa a domani. Pensa alle nuvole, adesso. «Il presente», sorride, «è morbido come l'erba».", es: "Nina no piensa en ayer, no piensa en mañana. Piensa en las nubes, ahora. «El presente», sonríe, «es suave como la hierba»." },
      ],
      predict: { q: "Antes de leer: ¿qué hará Nina en el jardín?", options: ["Cortar la hierba rápido", "Mirar las nubes sin prisa", "Preparar una fiesta"], answer: 1, why: "«Guardare le nuvole» = contemplación simple del presente." },
      sequence: {
        instr: "Ordena la tarde de Nina (1 = primero):",
        events: ["È sabato pomeriggio", "Nina si distende sull'erba del giardino", "Guarda le nuvole: un coniglio, una nave", "Non pensa a ieri e non pensa a domani", "Sorride: il presente è morbido come l'erba"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "È sabato pomeriggio. Nina è sull'erba e guarda le nuvole. Una nuvola è un coniglio, un'altra è una nave. Nina non pensa a ieri e non pensa a domani: pensa alle nuvole, adesso. Il presente è morbido come l'erba.",
        questions: [
          { q: "Che forma hanno le nuvole?", kind: "literal", options: ["Un coniglio e una nave", "Un leone e una macchina", "Non hanno forme"], answer: 0, why: "«Una nuvola è un coniglio, un'altra è una nave»." },
          { q: "A cosa NON pensa Nina?", kind: "literal", options: ["A ieri e a domani", "Alle nuvole", "All'erba"], answer: 0, why: "«Non pensa a ieri e non pensa a domani»." },
          { q: "Com'è il presente, per Nina?", kind: "inferencial", options: ["Morbido come l'erba", "Duro come una pietra", "Noioso come lunedì"], answer: 0, why: "«Il presente è morbido come l'erba»." },
        ],
      },
    },
  ],

  "cu-a1-10": [
    {
      id: "md-a1-10-1", theme: "relax fisico", title: "L'angolo della calma", titleEs: "El rincón de la calma", minutes: 2,
      paragraphs: [
        { it: "In ogni casa c'è un posto perfetto per la calma. Forse è una poltrona vicino alla finestra. Forse è un tappeto nell'angolo. Nella casa di Giulio è il balcone piccolo.", es: "En cada casa hay un sitio perfecto para la calma. Quizá es un sillón junto a la ventana. Quizá es una alfombra en el rincón. En la casa de Giulio es el balcón pequeño." },
        { it: "Lì c'è una sedia, una pianta e niente altro. Quando Giulio è stanco, si siede lì. Dieci minuti, e la casa è sempre la stessa, ma lui no. Ogni casa ha un angolo della calma: trova il tuo.", es: "Allí hay una silla, una planta y nada más. Cuando Giulio está cansado, se sienta allí. Diez minutos, y la casa es siempre la misma, pero él no. Cada casa tiene un rincón de calma: encuentra el tuyo." },
      ],
      predict: { q: "Antes de leer: «L'angolo della calma» es…", options: ["Una tienda de muebles", "Un lugar especial de la casa para descansar", "Un gimnasio en casa"], answer: 1, why: "«Angolo» (rincón) + «calma» = espacio personal de quietud." },
      quiz: [
        { q: "Dov'è l'angolo della calma di Giulio?", kind: "literal", options: ["Sul balcone piccolo", "In cucina", "In bagno"], answer: 0, why: "«Nella casa di Giulio è il balcone piccolo»." },
        { q: "Cosa c'è nell'angolo?", kind: "literal", options: ["Una sedia e una pianta", "Un televisore grande", "Dieci scatole"], answer: 0, why: "«Una sedia, una pianta e niente altro»." },
        { q: "Qué significa «la casa è sempre la stessa, ma lui no»?", kind: "inferencial", options: ["La casa cambia de color", "Giulio se renueva con la pausa aunque la casa no cambie", "Giulio compra una casa nueva"], answer: 1, why: "La pausa transforma a la persona, no al lugar." },
        { q: "Tienes tú un «angolo della calma»? Vale la pena crearlo?", kind: "critica", options: ["Sì: un lugar fijo ayuda a crear el hábito de parar", "No: se puede meditar en cualquier sitio, el lugar no importa nada", "Solo si la casa es grande"], answer: 0, why: "Un lugar dedicado facilita la práctica — aunque cualquier sitio sirva, el hábito necesita un ancla." },
      ],
      vf: [
        { text: "Nell'angolo della calma c'è un televisore grande.", value: false, why: "Falso: «una sedia, una pianta e niente altro»." },
        { text: "Dieci minuti bastano per cambiare umore.", value: true, why: "«Dieci minuti… ma lui no»: Giulio sí cambia." },
        { text: "Solo le case grandi hanno un angolo della calma.", value: false, why: "Falso: «ogni casa ha un angolo della calma» — incluso un balcón pequeño." },
      ],
    },
    {
      id: "md-a1-10-2", theme: "qui e ora", title: "Pulire è meditare", titleEs: "Limpiar es meditar", minutes: 2,
      paragraphs: [
        { it: "Sabbia sul pavimento, piatti nel lavandino, maglioni sulle sedi. Emma respira. Poi lava un piatto. Solo uno, ma lo lava bene: sente l'acqua calda, il profumo del sapone.", es: "Arena en el piso, platos en el lavaplatos, suéteres sobre las sillas. Emma respira. Luego lava un plato. Solo uno, pero lo lava bien: siente el agua caliente, el perfume del jabón." },
        { it: "Un piatto, poi un altro. Niente fretta, niente radio. Dopo mezz'ora, la cucina è pulita e la testa è pulita. «Pulire è meditare», sorride Emma.", es: "Un plato, luego otro. Sin prisa, sin radio. Después de media hora, la cocina está limpia y la cabeza está limpia. «Limpiar es meditar», sonríe Emma." },
      ],
      predict: { q: "Antes de leer: la idea del título es…", options: ["Limpiar rápido con música alta", "Limpiar con atención total, como meditación", "Contratar a alguien para limpiar"], answer: 1, why: "«È meditare» compara limpieza y meditación: una acción con presencia." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Una tarea doméstica hecha con plena atención se vuelve meditación", "Hay que limpiar la casa lo más rápido posible", "Los platos se lavan mejor con radio"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Emma lava un plato a la vez, sintiendo el agua y el jabón", "Después de media hora, la cocina y la cabeza están limpias"],
        distractors: ["Emma tira los platos a la basura", "El texto recomienda limpiar con la televisión encendida"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Emma lava un piatto alla volta, con attenzione.", "Sente l'acqua calda e il profumo del sapone.", "Niente fretta, niente radio.", "Emma lancia i piatti nel lavandino e corre urlando per la casa."], 
        intruder: 3, why: "El espíritu del texto es calma y atención; lanzar platos y gritar es lo contrario.",
      },
    },
    {
      id: "md-a1-10-3", theme: "relax mentale", title: "La sera, la mente riposa", titleEs: "De noche, la mente descansa", minutes: 2,
      paragraphs: [
        { it: "Dieci di sera. Il telefono di Luca è in cucina, lontano dal letto. Le luci sono basse. La mente di Luca fa un ultimo giro: domani, il lavoro, la spesa…", es: "Las diez de la noche. El teléfono de Luca está en la cocina, lejos de la cama. Las luces están bajas. La mente de Luca da una última vuelta: mañana, el trabajo, la compra…" },
        { it: "Luca scrive tre parole su un foglio: «Domani. Basta. Adesso». Poi chiude il foglio e chiude gli occhi. I pensieri dormono con il foglio. La mente riposa con il corpo.", es: "Luca escribe tres palabras en un papel: «Mañana. Ya está. Ahora». Luego cierra el papel y cierra los ojos. Los pensamientos duermen con el papel. La mente descansa con el cuerpo." },
      ],
      predict: { q: "Antes de leer: el texto dará…", options: ["Consejos para dormir mejor y calmar la mente de noche", "Una lista de películas para ver en la cama", "Una alarma para las 5 a.m."], answer: 0, why: "«La mente riposa» + la noche apuntan a higiene del descanso mental." },
      sequence: {
        instr: "Ordena la rutina de Luca (1 = primero):",
        events: ["Sono le dieci di sera", "Il telefono resta in cucina, lontano dal letto", "Le luci sono basse e la mente fa un ultimo giro", "Luca scrive «Domani. Basta. Adesso» su un foglio", "Chiude il foglio e chiude gli occhi"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "La sera, metti il telefono in cucina, lontano dal letto. Abbassa le luci. Se la mente gira, scrivi tre parole su un foglio: domani, basta, adesso. Poi chiudi il foglio e chiudi gli occhi. I pensieri dormono con il foglio.",
        questions: [
          { q: "Dove va il telefono la sera?", kind: "literal", options: ["In cucina, lontano dal letto", "Sul comodino", "Sotto il cuscino"], answer: 0, why: "«Metti il telefono in cucina, lontano dal letto»." },
          { q: "Cosa scrivi sul foglio?", kind: "literal", options: ["«Domani. Basta. Adesso.»", "La lista della spesa", "Un messaggio per il capo"], answer: 0, why: "Tres palabras: domani, basta, adesso." },
          { q: "Con che cosa dormono i pensieri?", kind: "inferencial", options: ["Con il foglio chiuso", "Con il telefono acceso", "Con la radio a tutto volume"], answer: 0, why: "«I pensieri dormono con il foglio»: lo escrito ya no da vueltas." },
        ],
      },
    },
  ],

  "cu-a1-11": [
    {
      id: "md-a1-11-1", theme: "relax mentale", title: "La lista e la calma", titleEs: "La lista y la calma", minutes: 2,
      paragraphs: [
        { it: "Al supermercato, Sara ha una lista: pane, latte, mele, pasta. La lista è corta e la mente è tranquilla. «Senza lista», dice, «la mente corre come un carrello impazzito».", es: "En el supermercado, Sara tiene una lista: pan, leche, manzanas, pasta. La lista es corta y la mente está tranquila. «Sin lista», dice, «la mente corre como un carrito descontrolado»." },
        { it: "Una lista è un amico della mente: tiene i pensieri al posto loro. Così la mente è libera per guardare le mele rosse e scegliere con calma. Meno pensieri, più presenti.", es: "Una lista es una amiga de la mente: mantiene los pensamientos en su lugar. Así la mente está libre para mirar las manzanas rojas y elegir con calma. Menos pensamientos, más presencia." },
      ],
      predict: { q: "Antes de leer: ¿qué relación hay entre lista y calma?", options: ["La lista multiplica el estrés", "La lista ordena los pensamientos y libera la mente", "La lista sirve para el descuento"], answer: 1, why: "La lista externaliza la memoria: la mente se queda libre y tranquila." },
      quiz: [
        { q: "Cosa c'è nella lista di Sara?", kind: "literal", options: ["Pane, latte, mele, pasta", "Un telefono nuovo", "Vestiti e scarpe"], answer: 0, why: "«Pane, latte, mele, pasta»." },
        { q: "Con che cosa paragona la mente senza lista?", kind: "literal", options: ["Un carrello impazzito", "Un gatto tranquillo", "Un fiume lento"], answer: 0, why: "«La mente corre come un carrello impazzito»." },
        { q: "Perché la lista rende la mente libera?", kind: "inferencial", options: ["Porque guarda los pendientes y la mente puede estar presente", "Porque es corta y bonita", "Porque el papel es caro"], answer: 0, why: "Lo escrito no ocupa memoria: menos pensamientos, más presencia." },
        { q: "«Meno pensieri, più presenti». Aplicarías esta idea a otras áreas?", kind: "critica", options: ["Sì: escribir libera la mente en general, no solo en la compra", "No: las listas son solo para el supermercado", "No sé, nunca he hecho una lista"], answer: 0, why: "Externalizar pendientes (agenda, notas) es una técnica universal de calma." },
      ],
      vf: [
        { text: "La lista di Sara è corta.", value: true, why: "Cuatro cosas: corta y clara." },
        { text: "Senza lista la mente è tranquilla.", value: false, why: "Falso: sin lista corre «come un carrello impazzito»." },
        { text: "Sara sceglie le mele con calma.", value: true, why: "«Libera per guardare le mele rosse e scegliere con calma»." },
      ],
    },
    {
      id: "md-a1-11-2", theme: "qui e ora", title: "Tra gli scaffali", titleEs: "Entre las estanterías", minutes: 2,
      paragraphs: [
        { it: "Il supermercato è pieno di colori e scritte: OFFERTA! NUOVO! SCONTO! La mente compra parole. Ma tu respira e torna alle cose vere: una mela è una mela.", es: "El supermercado está lleno de colores y letreros: ¡OFERTA! ¡NUEVO! ¡DESCUENTO! La mente compra palabras. Pero tú respira y vuelve a las cosas reales: una manzana es una manzana." },
        { it: "Tocca il pane: è morbido? Annusa il limone: è profumato? Questo è il qui e ora tra gli scaffali. Compra il cibo, non le parole.", es: "Toca el pan: ¿está blando? Huele el limón: ¿está perfumado? Este es el aquí y ahora entre las estanterías. Compra la comida, no las palabras." },
      ],
      predict: { q: "Antes de leer: «Tra gli scaffali» enseñará a…", options: ["Ahorrar con cupones", "Estar presente entre los productos, más allá de la publicidad", "Elegir el supermercado más grande"], answer: 1, why: "«Scaffali» (estanterías) + presencia: los sentidos contra el bombardeo de carteles." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Los sentidos reales (tocar, oler) devuelven al presente entre la publicidad", "Las ofertas son siempre la mejor opción", "El supermercado es un lugar muy relajante por naturaleza"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["Los carteles OFFERTA/NUOVO/SCONTO hacen que la mente «compre palabras»", "Tocar el pan y oler el limón anclan en el aquí y ahora"],
        distractors: ["El texto dice que hay que comprar solo productos en oferta", "El pan del supermercado siempre es morbidísimo"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["Il supermercato è pieno di scritte: OFFERTA, NUOVO, SCONTO.", "Tocca il pane: è morbido?", "Annusa il limone: è profumato?", "Nel supermercato è obbligatorio comprare tutto ciò che è scritto sui cartelli."],
        intruder: 3, why: "El texto dice lo contrario: compra la comida real, no las palabras de los carteles.",
      },
    },
    {
      id: "md-a1-11-3", theme: "relax fisico", title: "Il respiro in fila", titleEs: "La respiración en la fila", minutes: 2,
      paragraphs: [
        { it: "Coda alla cassa. Davanti a te ci sono sette persone e una signora con due carrelli. Perfetto! Hai un tempo speciale: il tempo della fila.", es: "Fila en la caja. Delante de ti hay siete personas y una señora con dos carritos. ¡Perfecto! Tienes un tiempo especial: el tiempo de la fila." },
        { it: "Appoggia i piedi a terra. Sciogli le spalle. Respira piano, quattro volte. Il corpo si calma da solo. Quando arriva il tuo turno, sei riposato, non arrabbiato. La fila è stata un regalo.", es: "Apoya los pies en el suelo. Suelta los hombros. Respira lento, cuatro veces. El cuerpo se calma solo. Cuando llega tu turno, estás descansado, no enojado. La fila fue un regalo." },
      ],
      predict: { q: "Antes de leer: ¿cómo será «il respiro in fila»?", options: ["Un ejercicio para usar la espera de la fila como pausa", "Un juego para saltar la fila", "Una canción de cuna"], answer: 0, why: "«Respiro» + «fila» = práctica de calma en la espera." },
      sequence: {
        instr: "Ordena el ejercicio de la fila (1 = primero):",
        events: ["Sei in coda alla cassa, con sette persone davanti", "Appoggi i piedi a terra", "Sciogli le spalle", "Respiri piano quattro volte", "Arriva il tuo turno: sei riposato, non arrabbiato"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "In fila alla cassa, appoggia i piedi a terra e sciogli le spalle. Poi respira piano, quattro volte. Il corpo si calma da solo. Quando arriva il tuo turno, sei riposato, non arrabbiato. La fila è un piccolo regalo.",
        questions: [
          { q: "Quante volte respiri?", kind: "literal", options: ["Quattro volte", "Sette volte", "Una volta"], answer: 0, why: "«Respira piano, quattro volte»." },
          { q: "Come sei quando arriva il tuo turno?", kind: "literal", options: ["Riposato, non arrabbiato", "Molto arrabbiato", "Addormentato"], answer: 0, why: "«Sei riposato, non arrabbiato»." },
          { q: "Cosa è la fila, secondo l'audio?", kind: "inferencial", options: ["Un piccolo regalo di tempo", "Una perdita di tempo totale", "Un castigo"], answer: 0, why: "«La fila è un piccolo regalo»: la espera convertida en pausa." },
        ],
      },
    },
  ],

  "cu-a1-12": [
    {
      id: "md-a1-12-1", theme: "spiritualità", title: "Roma e il tempo", titleEs: "Roma y el tiempo", minutes: 2,
      paragraphs: [
        { it: "A Roma ci sono panchine vecchie di duemila anni. Siediti su una panchina nuova, davanti a un muro antico. Tu sei piccolo, il tempo è grande. E va bene così.", es: "En Roma hay bancos de dos mil años de antigüedad. Siéntate en un banco nuevo, frente a un muro antiguo. Tú eres pequeño, el tiempo es grande. Y está bien así." },
        { it: "«I problemi di oggi», dice un vecchio signore, «sono piccoli come le persone. Il tempo è paziente». Guarda il muro di mattoni e respira. La città eterna insegna l'eterna pazienza.", es: "«Los problemas de hoy», dice un viejo señor, «son pequeños como las personas. El tiempo es paciente». Mira el muro de ladrillos y respira. La ciudad eterna enseña la eterna paciencia." },
      ],
      predict: { q: "Antes de leer: ¿qué enseñará Roma según el título?", options: ["La historia de los emperadores", "Una lección de paciencia a través del tiempo largo de la ciudad", "Dónde comer la mejor pizza"], answer: 1, why: "«Roma e il tempo» junta la ciudad eterna con la perspectiva temporal." },
      quiz: [
        { q: "Quanti anni hanno alcune panchine o muri di Roma?", kind: "literal", options: ["Duemila anni", "Vent'anni", "Due milioni di anni"], answer: 0, why: "«Panchine vecchie di duemila anni»." },
        { q: "Cosa dice il vecchio signore dei problemi di oggi?", kind: "literal", options: ["Sono piccoli come le persone", "Sono grandi come i monumenti", "Non esistono"], answer: 0, why: "«Piccoli come le persone. Il tempo è paziente»." },
        { q: "Qué enseña «la città eterna» según el texto?", kind: "inferencial", options: ["Paciencia: los problemas se ven pequeños con perspectiva", "A correr más rápido", "A comprar recuerdos"], answer: 0, why: "«La città eterna insegna l'eterna pazienza»." },
        { q: "Pensar en el tiempo largo de Roma, ¿te calmaría tus problemas?", kind: "critica", options: ["Sì: la perspectiva amplia reduce la urgencia", "No: mis problemas son únicos e inmensos", "Es una pérdida de tiempo pensar en ladrillos"], answer: 0, why: "La perspectiva temporal es una técnica real de regulación emocional." },
      ],
      vf: [
        { text: "Tu sei piccolo e il tempo è grande.", value: true, why: "Lo dice el texto: y está bien así." },
        { text: "Il vecchio signore dice che i problemi sono grandi come i monumenti.", value: false, why: "Falso: «piccoli come le persone»." },
        { text: "Roma insegna la fretta.", value: false, why: "Falso: enseña «l'eterna pazienza»." },
      ],
    },
    {
      id: "md-a1-12-2", theme: "meditazione", title: "La fontana e l'acqua", titleEs: "La fuente y el agua", minutes: 2,
      paragraphs: [
        { it: "In una piazza di Roma c'è una fontana piccola. L'acqua cade, cade, cade, sempre uguale e sempre nuova. Sara si siede lì davanti, con un gelato che si scioglie.", es: "En una plaza de Roma hay una fuente pequeña. El agua cae, cae, cae, siempre igual y siempre nueva. Sara se sienta frente a ella, con un helado que se derrite." },
        { it: "Guarda l'acqua e pensa: «Anche i pensieri cadono come l'acqua. Non trattenerli». È la sua meditazione romana: una fontana, un gelato, dieci minuti. La felicità è semplice.", es: "Mira el agua y piensa: «También los pensamientos caen como el agua. No retenerlos». Es su meditación romana: una fuente, un helado, diez minutos. La felicidad es simple." },
      ],
      predict: { q: "Antes de leer: ¿qué observará Sara en la fuente?", options: ["Peces de colores", "El agua cayendo como metáfora de los pensamientos", "Un espectáculo de luces"], answer: 1, why: "«La fontana e l'acqua» anticipa la metáfora central." },
      ideas: {
        mainQ: "¿Cuál es la idea principal?",
        mainOptions: ["Observar el agua enseña a dejar pasar los pensamientos", "Los helados romanos son los mejores del mundo", "Las fuentes son para lanzar monedas"], mainAnswer: 0,
        secQ: "Marca las DOS ideas secundarias presentes en el texto:",
        secondary: ["El agua cae siempre igual y siempre nueva", "La meditación romana de Sara es simple: fuente, helado, diez minutos"],
        distractors: ["Sara se baña en la fuente", "El texto dice que hay que retener todos los pensamientos"],
      },
      intruder: {
        instr: "Encuentra el intruso:",
        sentences: ["L'acqua cade, cade, cade, sempre uguale e sempre nuova.", "Anche i pensieri cadono come l'acqua.", "Non trattenerli, i pensieri.", "Sara cerca di fermare l'acqua della fontana con le mani, per non farla cadere più."],
        intruder: 3, why: "Todo el texto enseña a dejar fluir; frenar el agua con las manos contradice la lección.",
      },
    },
    {
      id: "md-a1-12-3", theme: "qui e ora", title: "Un passo alla volta", titleEs: "Un paso a la vez", minutes: 2,
      paragraphs: [
        { it: "Primo giorno a Roma. Tante cose da vedere: il Colosseo, i musei, le piazze, i ponti… La lista è lunga, e i piedi già tremano.", es: "Primer día en Roma. Tantas cosas que ver: el Coliseo, los museos, las plazas, los puentes… La lista es larga, y los pies ya tiemblan." },
        { it: "Ma il signore del bar sorride: «Roma non scappa. Un passo alla volta». Così cammini piano, guardi una cosa sola, e la vedi davvero. Meglio una cosa vera che dieci di corsa. Qui, ora, un passo.", es: "Pero el señor del bar sonríe: «Roma no se escapa. Un paso a la vez». Así caminas despacio, miras una sola cosa, y la ves de verdad. Mejor una cosa de verdad que diez a la carrera. Aquí, ahora, un paso." },
      ],
      predict: { q: "Antes de leer: ¿cuál será el consejo del texto?", options: ["Ver todo en un día corriendo", "Ir despacio: una cosa a la vez", "Quedarse en el hotel"], answer: 1, why: "«Un passo alla volta» es literalmente el consejo del título." },
      sequence: {
        instr: "Ordena el primer día romano (1 = primero):",
        events: ["Arrivi a Roma con una lista lunghissima", "I piedi già tremano", "Il signore del bar dice: «Un passo alla volta»", "Cammini piano e guardi una cosa sola", "Vedi davvero quella cosa: qui, ora, un passo"],
      },
      listen: {
        intro: "🎧 Escucha y responde:",
        audioIt: "Roma non scappa. Un passo alla volta. Cammina piano e guarda una cosa sola: la vedi davvero. Meglio una cosa vera che dieci di corsa. Qui, ora, un passo.",
        questions: [
          { q: "Roma scappa?", kind: "literal", options: ["No, Roma non scappa", "Sì, molto veloce", "Solo il sabato"], answer: 0, why: "«Roma non scappa»: no hay prisa." },
          { q: "Quante cose devi guardare alla volta?", kind: "literal", options: ["Una cosa sola", "Dieci cose", "Tutte le piazze in un'ora"], answer: 0, why: "«Guarda una cosa sola: la vedi davvero»." },
          { q: "Cosa è meglio, secondo l'audio?", kind: "inferencial", options: ["Una cosa vista de verdad que diez a la carrera", "Dieci cose viste corriendo", "Ninguna cosa, dormir"], answer: 0, why: "«Meglio una cosa vera che dieci di corsa»." },
        ],
      },
    },
  ],
};
