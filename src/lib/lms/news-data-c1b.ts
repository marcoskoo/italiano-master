/* ── Notizie · ampliamento C1 (v9.39) ─────────────────────────────────
   12 noticias nuevas (news-c1-04 … news-c1-15): el nivel C1 pasa de 3
   a 15 noticias y cubre las 9 categorías. Método VOA, 100% original:
   6 párrafos, cuerpo 210-265 parole, sintassi elaborata (concessive,
   congiuntivo, periodo ipotetico, lessico astratto, registro
   giornalistico), minutes 5.                                                */

import type { NewsItem } from "./news";

export const NEWS_DATA_C1B: NewsItem[] = [

  /* ═══ C1 · 4 — Scienza ═══ */
  {
    id: "news-c1-04", cat: "scienza", level: "C1", place: "Pavia", minutes: 5,
    title: "A Pavia il sonno svela come il cervello conserva i ricordi",
    titleEs: "En Pavía el sueño revela cómo el cerebro conserva los recuerdos",
    lead: {
      it: "Dormire non è un intervallo vuoto: durante la notte il cervello seleziona, archivia e a volte corregge ciò che abbiamo vissuto. I laboratori di Pavia adesso lo misurano, notte dopo notte.",
      es: "Dormir no es un intervalo vacío: durante la noche el cerebro selecciona, archiva y a veces corrige lo que hemos vivido. Los laboratorios de Pavía ahora lo miden, noche tras noche.",
    },
    paragraphs: [
      { it: "I ricercatori dell'università di Pavia hanno monitorato per mesi il sonno di un centinaio di volontari, registrando le onde cerebrali con una precisione mai tentata prima. L'obiettivo era ambizioso: capire dove vadano a finire i ricordi della giornata.",
      es: "Los investigadores de la Universidad de Pavía han monitorizado durante meses el sueño de un centenar de voluntarios, registrando las ondas cerebrales con una precisión nunca intentada. El objetivo era ambicioso: entender adónde van a parar los recuerdos del día." },
      { it: "I risultati, pubblicati su una rivista internazionale, confermano un'ipotesi coltivata da decenni: durante il sonno profondo il cervello trasferisce le informazioni dall'ippocampo, una specie di archivio provvisorio, alla corteccia, dove vengono custodite a lungo termine.",
      es: "Los resultados, publicados en una revista internacional, confirman una hipótesis cultivada durante décadas: durante el sueño profundo el cerebro transfiere la información del hipocampo, una especie de archivo provisional, a la corteza, donde queda custodiada a largo plazo." },
      { it: "«Il sonno non è un semplice riposo: è un laboratorio silenzioso che decide che cosa tenere e che cosa lasciare andare», spiega la neuroscienziata Elena Brambilla, che ha guidato lo studio. «Chi dorme male, ricorda peggio ed espone memoria e apprendimento a un logorio lento ma continuo.»",
      es: "«El sueño no es un simple descanso: es un laboratorio silencioso que decide qué conservar y qué dejar ir», explica la neurocientífica Elena Brambilla, que ha dirigido el estudio. «Quien duerme mal, recuerda peor y expone memoria y aprendizaje a un desgaste lento pero continuo.»" },
      { it: "La ricerca ha messo in luce un dettaglio inatteso: le emozioni forti vengono rielaborate più lentamente delle informazioni neutre, come se il cervello avesse bisogno di tempo per digerire ciò che lo ha turbato.",
      es: "La investigación ha sacado a la luz un detalle inesperado: las emociones fuertes se reelaboran más despacio que la información neutra, como si el cerebro necesitara tiempo para digerir lo que lo ha turbado." },
      { it: "Le applicazioni riguardano anzitutto la scuola: benché sia presto per riscrivere gli orari delle lezioni, i ricercatori suggeriscono di non sottovalutare il riposo prima di un esame, perché è di notte che il cervello consolida ciò che si è studiato durante il giorno.",
      es: "Las aplicaciones conciernen ante todo a la escuela: aunque es pronto para reescribir los horarios de las clases, los investigadores sugieren no subestimar el descanso antes de un examen, porque es de noche cuando el cerebro consolida lo estudiado durante el día." },
      { it: "Il prossimo passo saranno i sogni. Se anche i sogni, come si sospetta, servissero a provare le paure senza rischio, allora la vecchia idea di una «notte che cura» smetterebbe di essere una metafora.",
      es: "El próximo paso serán los sueños. Si también los sueños, como se sospecha, sirvieran para probar los miedos sin riesgo, entonces la vieja idea de una «noche que cura» dejaría de ser una metáfora." },
    ],
    words: [
      { it: "il sonno profondo", es: "el sueño profondo" },
      { it: "l'ippocampo", es: "el hipocampo", note: "estructura del cerebro que archiva los recuerdos" },
      { it: "la corteccia", es: "la corteza (cerebral)", note: "femenino en italiano, como «corteza»" },
      { it: "il logorio", es: "el desgaste" },
      { it: "digerire", es: "digerir", note: "aquí metafórico: elaborar poco a poco" },
      { it: "la metafora", es: "la metáfora" },
    ],
    questions: [
      { q: "Según los investigadores de Pavía, ¿qué ocurre durante el sueño profundo?", options: ["Il cervello trasferisce le informazioni dall'ippocampo alla corteccia", "Il cervello interrompe ogni attività elettrica", "I ricordi della giornata vengono cancellati", "Le emozioni si rafforzano tutte allo stesso modo"], answer: 0, why: "«durante il sonno profondo il cervello trasferisce le informazioni dall'ippocampo, una specie di archivio provvisorio, alla corteccia»." },
      { q: "¿Cómo define Brambilla el sueño?", options: ["Un intervallo vuoto fra due giornate", "Un laboratorio silenzioso che decide che cosa tenere e che cosa lasciare andare", "Un semplice riposo dei muscoli", "Un archivio provvisorio della memoria"], answer: 1, why: "«Il sonno non è un semplice riposo: è un laboratorio silenzioso che decide che cosa tenere e che cosa lasciare andare»." },
      { q: "¿Qué detalle inesperado ha sacado a la luz la investigación?", options: ["Che i volontari abbiano sognato sempre le stesse scene", "Che la corteccia funzioni soltanto di giorno", "Che le emozioni forti vengono rielaborate più lentamente delle informazioni neutre", "Che gli esami migliorino anche senza studio"], answer: 2, why: "«le emozioni forti vengono rielaborate più lentamente delle informazioni neutre, come se il cervello avesse bisogno di tempo per digerire»." },
      { q: "¿Qué sugiere la imagen de la «noche que cura»?", options: ["Che sia meglio evitare di sognare", "Che le paure vadano ignorate durante il giorno", "Che la ricerca sia ormai conclusa", "Che anche i sogni potrebbero avere una funzione protettiva e riparatrice"], answer: 3, why: "«Se anche i sogni, come si sospetta, servissero a provare le paure senza rischio»: el descanso repararía incluso las heridas del día." },
    ],
    discuss: [
      { it: "Quanto sonno ti serve per sentirti lucido? Come cambia la tua giornata dopo una nottata breve?", es: "¿Cuánto sueño necesitas para sentirte lúcido? ¿Cómo cambia tu jornada tras una noche corta?" },
      { it: "Ti è mai capitato di risolvere un problema dormendoci sopra? Racconta com'è andata.", es: "¿Te ha pasado resolver un problema durmiendo encima de él? Cuenta cómo fue." },
    ],
  },

  /* ═══ C1 · 5 — Tecnologia ═══ */
  {
    id: "news-c1-05", cat: "tecnologia", level: "C1", place: "Modena", minutes: 5,
    title: "A Modena il gemello digitale salva le auto storiche",
    titleEs: "En Módena el gemelo digital salva los coches históricos",
    lead: {
      it: "Prima di toccare un bullone, i restauratori accendono uno schermo: ogni auto storica ha ormai una copia virtuale, un gemello digitale che invecchia al posto suo.",
      es: "Antes de tocar un tornillo, los restauradores encienden una pantalla: cada coche histórico tiene ya una copia virtual, un gemelo digital que envejece en su lugar.",
    },
    paragraphs: [
      { it: "Nei laboratori della provincia di Modena, dove la meccanica è da sempre una forma di cultura, i restauratori di auto storiche hanno adottato una tecnologia nata altrove: il gemello digitale, una copia virtuale del veicolo che ne riproduce ogni dettaglio.",
      es: "En los laboratorios de la provincia de Módena, donde la mecánica es desde siempre una forma de cultura, los restauradores de coches históricos han adoptado una tecnología nacida en otro sector: el gemelo digital, una copia virtual del vehículo que reproduce cada detalle." },
      { it: "Il modello si costruisce con scanner tridimensionali e migliaia di fotografie. Una volta caricato nel computer, mostra usura, deformazioni e crepe invisibili a occhio nudo, e permette di provare il restauro prima di cominciarlo, senza smontare nulla.",
      es: "El modelo se construye con escáneres tridimensionales y miles de fotografías. Una vez cargado en el ordenador, muestra desgaste, deformaciones y grietas invisibles a simple vista, y permite probar la restauración antes de empezarla, sin desmontar nada." },
      { it: "«Un tempo si andava per tentativi: si smontava e si sperava», racconta l'ingegnere Ferdinando Rinaldi, che coordina il progetto. «Oggi simuliamo ogni intervento sul gemello e solo alla fine tocchiamo il pezzo vero. Se la simulazione evidenziasse un rischio, il pezzo originale resterebbe intatto.»",
      es: "«Antes se iba por ensayo y error: se desmontaba y se esperaba», cuenta el ingeniero Ferdinando Rinaldi, que coordina el proyecto. «Hoy simulamos cada intervención sobre el gemelo y solo al final tocamos la pieza verdadera. Si la simulación evidenciara un riesgo, la pieza original quedaría intacta.»" },
      { it: "La tecnica, arrivata dall'industria aerospaziale, si è adattata a carburatori e carrozzerie con qualche compromesso: nonostante i progressi, certi materiali vecchi di mezzo secolo restano difficili da riprodurre fedelmente, soprattutto quando le leghe non si fabbricano più.",
      es: "La técnica, llegada de la industria aeroespacial, se ha adaptado a carburadores y carrocerías con alguna que otra concesión: pese a los avances, ciertos materiales con medio siglo encima siguen siendo difíciles de reproducir fielmente, sobre todo cuando las aleaciones ya no se fabrican." },
      { it: "I collezionisti, all'inizio scettici, si sono convinti guardando i numeri: i restauri digitali riducono i tempi e gli errori, e il valore di un'automobile cresce, sul mercato, quando la documentazione è completa e verificabile.",
      es: "Los coleccionistas, al principio escépticos, se han convencido mirando las cifras: las restauraciones digitales reducen tiempos y errores, y el valor de un automóvil crece, en el mercado, cuando la documentación es completa y verificable." },
      { it: "Il sogno dei tecnici è una banca dati condivisa, dove ogni vettura restaurata lasci tracce utili alle successive. «Il patrimonio automobilistico», conclude Rinaldi, «si conserva meglio se impara a parlare la lingua dei computer.»",
      es: "El sueño de los técnicos es una base de datos compartida, donde cada vehículo restaurado deje huellas útiles para los siguientes. «El patrimonio automovilístico», concluye Rinaldi, «se conserva mejor si aprende a hablar la lengua de los ordenadores.»" },
    ],
    words: [
      { it: "il gemello digitale", es: "el gemelo digital" },
      { it: "l'usura", es: "el desgaste", note: "falso amigo parcial: en italiano «usura» es sobre todo desgaste" },
      { it: "la crepa / le crepe", es: "la grieta / las grietas" },
      { it: "per tentativi", es: "por ensayo y error" },
      { it: "il collezionista / i collezionisti", es: "el coleccionista" },
      { it: "la carrozzeria / le carrozzerie", es: "la carrocería" },
    ],
    questions: [
      { q: "¿Qué muestra el modelo virtual una vez cargado en el ordenador?", options: ["Il colore originale della vernice", "Usura, deformazioni e crepe invisibili a occhio nudo", "Il nome del primo proprietario", "La targa storica del veicolo"], answer: 1, why: "«Una volta caricato nel computer, mostra usura, deformazioni e crepe invisibili a occhio nudo»." },
      { q: "¿Qué pasaría si la simulación evidenciara un riesgo?", options: ["Il pezzo originale resterebbe intatto", "Il restauro verrebbe annullato del tutto", "L'automobile verrebbe demolita", "Il computer sostituirebbe il restauratore"], answer: 0, why: "«Se la simulazione evidenziasse un rischio, il pezzo originale resterebbe intatto»." },
      { q: "¿De dónde ha llegado la técnica del gemelo digital?", options: ["Dai musei d'arte contemporanea", "Dalle officine di paese", "Dall'industria aerospaziale", "Dalle corse automobilistiche"], answer: 2, why: "«La tecnica, arrivata dall'industria aerospaziale, si è adattata a carburatori e carrozzerie»." },
      { q: "¿Qué significa que el patrimonio «aprenda a hablar la lengua de los ordenadores»?", options: ["Che le automobili debbano guidarsi da sole", "Che i restauratori debbano diventare programmatori", "Che i computer sostituiscano la manualità", "Che la tecnologia possa aiutare a conservare e trasmettere la memoria delle vetture"], answer: 3, why: "«si conserva meglio se impara a parlare la lingua dei computer»: la tradición resulta más duradera si se digitaliza." },
    ],
    discuss: [
      { it: "Compreresti un'automobile d'epoca restaurata con l'aiuto del computer? Perché?", es: "¿Comprarías un automóvil de época restaurado con ayuda del ordenador? ¿Por qué?" },
      { it: "Quali oggetti della tua vita meriterebbero un gemello digitale? Racconta.", es: "¿Qué objetos de tu vida merecerían un gemelo digital? Cuenta." },
    ],
  },

  /* ═══ C1 · 6 — Ambiente ═══ */
  {
    id: "news-c1-06", cat: "ambiente", level: "C1", place: "Salerno", minutes: 5,
    title: "Salerno si ripensa come città spugna",
    titleEs: "Salerno se repiensa como ciudad esponja",
    lead: {
      it: "Piogge sempre più violente e fognature che non reggono più: Salerno scommette su tetti verdi, pavimenti drenanti e giardini che bevono l'acqua invece di subirla.",
      es: "Lluvias cada vez más violentas y alcantarillas que ya no aguantan: Salerno apuesta por tejados verdes, pavimentos drenantes y jardines que beben el agua en lugar de sufrirla.",
    },
    paragraphs: [
      { it: "Le piogge violente sono diventate la norma anche sulla costa tirrenica: nubifragi che un tempo si scaricavano in una notte si concentrano oggi in un'ora, e le fognature progettate mezzo secolo fa faticano a reggere l'impatto.",
      es: "Las lluvias violentas se han convertido en la norma también en la costa tirrena: chaparrones torrenciales que antes se descargaban a lo largo de una noche se concentran hoy en una hora, y las alcantarillas proyectadas hace medio siglo apenas soportan el impacto." },
      { it: "Il comune e gli urbanisti hanno così adottato un'idea già sperimentata nel nord Europa: la «città spugna». Invece di respingere l'acqua, la città impara ad assorbirla e a restituirla lentamente, come farebbe un bosco.",
      es: "El ayuntamiento y los urbanistas han adoptado así una idea ya experimentada en el norte de Europa: la «ciudad esponja». En lugar de repeler el agua, la ciudad aprende a absorberla y a devolverla lentamente, como haría un bosque." },
      { it: "I tetti delle scuole sono diventati giardini pensili, i parcheggi sono stati rifatti con pavimentazioni drenanti e nei quartieri bassi sono comparsi i giardini della pioggia, piccole vasche verdi che raccolgono l'acqua dei temporali.",
      es: "Los tejados de las escuelas se han convertido en jardines colgantes, los aparcamientos se han rehecho con pavimentaciones drenantes y en los barrios bajos han aparecido los jardines de lluvia, pequeñas vasijas verdes que recogen el agua de los temporales." },
      { it: "«Non possiamo più combattere l'acqua soltanto con il cemento», avverte l'architetta Rosa Ferrara, che segue il piano. «Se ogni quartiere assorbisse la propria pioggia, il centro starebbe all'asciutto anche durante i nubifragi più intensi.»",
      es: "«Ya no podemos combatir el agua solo con hormigón», advierte la arquitecta Rosa Ferrara, que sigue el plan. «Si cada barrio absorbiera su propia lluvia, el centro se mantendría seco incluso durante los chaparrones más intensos.»" },
      { it: "Non tutto procede senza attriti: alcuni condomini hanno contestato i costi dei lavori, benché i contributi comunali coprano gran parte delle spese, e c'è chi teme che la manutenzione dei giardini pensili venga trascurata con gli anni.",
      es: "No todo avanza sin fricciones: algunas comunidades de vecinos han cuestionado el coste de las obras, aunque las ayudas municipales cubren gran parte de los gastos, y hay quien teme que el mantenimiento de los jardines colgantes se descuide con los años." },
      { it: "I primi dati, comunque, incoraggiano: nelle zone già sistemate le allerte si sono ridotte e la temperatura estiva è scesa di un paio di gradi. L'acqua, conclude Ferrara, «non è un nemico da respingere: è una risorsa da imparare a ospitare».",
      es: "Los primeros datos, en cualquier caso, animan: en las zonas ya acondicionadas las alertas se han reducido y la temperatura de verano ha bajado un par de grados. El agua, concluye Ferrara, «no es un enemigo al que repeler: es un recurso al que hay que aprender a acoger»." },
    ],
    words: [
      { it: "il nubifragio / i nubifragi", es: "el chaparrón torrencial", note: "literalmente «rompe-nubes»" },
      { it: "la città spugna", es: "la ciudad esponja" },
      { it: "il giardino pensile / i giardini pensili", es: "el jardín colgante (sobre azotea)" },
      { it: "la fognatura / le fognature", es: "la alcantarilla, el alcantarillado" },
      { it: "il temporale / i temporali", es: "el temporal (de lluvia)" },
      { it: "la manutenzione", es: "el mantenimiento" },
    ],
    questions: [
      { q: "¿Qué ocurre hoy con los chaparrones que antes se descargaban a lo largo de una noche?", options: ["Sono diminuiti di numero", "Si concentrano oggi in un'ora", "Cadono soltanto in montagna", "Non raggiungono più la costa"], answer: 1, why: "«nubifragi che un tempo si scaricavano in una notte si concentrano oggi in un'ora»." },
      { q: "Según la idea de la «ciudad esponja», ¿cómo aprende la ciudad a tratar el agua?", options: ["Respingendola con dighe sempre più alte", "Scaricandola in mare con tubature nuove", "Assorbendola e restituendola lentamente, come farebbe un bosco", "Chiudendo le scuole nei giorni di pioggia"], answer: 2, why: "«Invece di respingere l'acqua, la città impara ad assorbirla e a restituirla lentamente, come farebbe un bosco»." },
      { q: "¿Qué son los «jardines de lluvia» de los barrios bajos?", options: ["Piccole vasche verdi che raccolgono l'acqua dei temporali", "Serre per le piante tropicali", "Giardini privati sui tetti", "Fontane ornamentali donate dai commercianti"], answer: 0, why: "«i giardini della pioggia, piccole vasche verdi che raccolgono l'acqua dei temporali»." },
      { q: "¿Qué quiere decir Ferrara con que el agua «no es un enemigo»?", options: ["Che i nubifragi non siano pericolosi", "Che le allerte debbano essere abolite", "Che il cemento non serva più a niente", "Che l'acqua vada accolta e gestita come una risorsa, non solo respinta"], answer: 3, why: "«non è un nemico da respingere: è una risorsa da imparare a ospitare»: hay que aprender a recibir el agua." },
    ],
    discuss: [
      { it: "La tua città è pronta per piogge sempre più intense? Che cosa si potrebbe trasformare per primo?", es: "¿Está tu ciudad preparada para lluvias cada vez más intensas? ¿Qué se podría transformar primero?" },
      { it: "Cemento o verde: come conciliare il centro storico con l'adattamento al clima?", es: "¿Hormigón o verde: cómo conciliar el centro histórico con la adaptación al clima?" },
    ],
  },

  /* ═══ C1 · 7 — Salute ═══ */
  {
    id: "news-c1-07", cat: "salute", level: "C1", place: "Reggio Calabria", minutes: 5,
    title: "A Reggio Calabria il medico prescrive una camminata",
    titleEs: "En Regio de Calabria el médico receta un paseo",
    lead: {
      it: "Oltre alle ricette tradizionali, alcuni medici di base scrivono indirizzi di sentiero: escursioni guidate sull'Aspromonte per chi ha la pressione alta, troppo stress o semplicemente troppa poltrona.",
      es: "Además de las recetas tradicionales, algunos médicos de cabecera escriben direcciones de sendero: excursiones guiadas al Aspromonte para quien tiene la tensión alta, demasiado estrés o simplemente demasiado sillón.",
    },
    paragraphs: [
      { it: "Nell'ambulatorio di un quartiere di Reggio Calabria è comparsa una ricetta insolita: non pillole, ma un appuntamento. Ogni sabato mattina un gruppo di pazienti parte, con una guida escursionistica, verso i sentieri dell'Aspromonte, il massiccio che domina lo stretto.",
      es: "En el consultorio de un barrio de Regio de Calabria ha aparecido una receta insólita: no pastillas, sino una cita. Cada sábado por la mañana un grupo de pacientes parte, con un guía de montaña, hacia los senderos del Aspromonte, el macizo que domina el estrecho." },
      { it: "L'iniziativa rientra nella cosiddetta prescrizione sociale: il medico individua i pazienti che potrebbero giovare dell'attività fisica — per la pressione, il colesterolo o l'umore — e «prescrive» la camminata di gruppo, affiancandola alle cure consuete.",
      es: "La iniciativa entra en la llamada prescripción social: el médico identifica a los pacientes que podrían beneficiarse de la actividad física — por la tensión, el colesterol o el ánimo — y «receta» la caminata en grupo, añadiéndola a los tratamientos habituales." },
      { it: "«Lo scopo non è sostituire i farmaci, che restano fondamentali», precisa la dottoressa Carmela Strangio, fra le promotrici. «È ricordare che il corpo umano è fatto per muoversi. Chi cammina in compagnia, poi, segue meglio la terapia: il sentiero cura anche la solitudine.»",
      es: "«El objetivo no es sustituir los medicamentos, que siguen siendo fundamentales», precisa la doctora Carmela Strangio, entre las impulsoras. «Es recordar que el cuerpo humano está hecho para moverse. Quien camina en compañía, además, sigue mejor el tratamiento: el sendero cura también la soledad.»" },
      { it: "I numeri del primo anno incoraggiano: la maggior parte dei partecipanti ha ridotto la sedentarietà, qualcuno ha scoperto di poter fare a meno dell'automobile sui tragitti brevi, e le farmacie del quartiere registrano meno richieste di ansiolitici.",
      es: "Las cifras del primer año animan: la mayoría de los participantes ha reducido el sedentarismo, alguno ha descubierto que puede prescindir del coche en los trayectos cortos, y las farmacias del barrio registran menos peticiones de ansiolíticos." },
      { it: "Non mancano le difficoltà: d'inverno le escursioni si diradano e i trasporti pubblici verso i sentieri restano scarsi, sebbene il comune abbia promesso navette dedicate. C'è chi propone, intanto, di estendere il progetto alle scuole medie.",
      es: "No faltan las dificultades: en invierno las excursiones se espacian y el transporte público hacia los senderos sigue siendo escaso, aunque el ayuntamiento ha prometido lanzaderas dedicadas. Hay quien propone, mientras tanto, extender el proyecto a las escuelas secundarias." },
      { it: "Il modello, nel frattempo, contagia: dopo Reggio, altri comuni della Calabria studiano ricette simili. E la domenica, sul lungomare, si vedono sempre più gruppi di camminatori con la maglietta del progetto: una piccola rivoluzione cominciata da un foglio di ricetta.",
      es: "El modelo, mientras tanto, contagia: tras Reggio, otros municipios de Calabria estudian recetas parecidas. Y el domingo, en el paseo marítimo, se ven cada vez más grupos de caminantes con la camiseta del proyecto: una pequeña revolución que empezó con una hoja de receta." },
    ],
    words: [
      { it: "l'ambulatorio", es: "el consultorio (médico)", note: "no confundir con «ambulanza»" },
      { it: "la ricetta / le ricette", es: "la receta (médica)" },
      { it: "il sentiero / i sentieri", es: "el sendero" },
      { it: "la sedentarietà", es: "el sedentarismo", note: "sustantivo abstracto de «sedentario»" },
      { it: "il farmaco / i farmaci", es: "el medicamento" },
      { it: "l'ansiolitico / gli ansiolitici", es: "el ansiolítico" },
    ],
    questions: [
      { q: "¿Qué receta insólita ha aparecido en la consulta del barrio?", options: ["Una medicina nuova contro la pressione alta", "Un mese di vacanze pagate al mare", "Un appuntamento: escursioni guidate sui sentieri dell'Aspromonte", "Una dieta senza carboidrati"], answer: 2, why: "«Ogni sabato mattina un gruppo di pazienti parte, con una guida escursionistica, verso i sentieri dell'Aspromonte»." },
      { q: "¿Qué precisa Strangio sobre los medicamentos?", options: ["Vanno aboliti per sempre", "Restano fondamentali: la camminata li affianca, non li sostituisce", "Costano troppo ai pazienti", "Fanno dimagrire senza dieta"], answer: 1, why: "«Lo scopo non è sostituire i farmaci, che restano fondamentali»." },
      { q: "¿Qué efecto añadido tiene caminar en compañía, según el texto?", options: ["Il sentiero cura anche la solitudine e aiuta a seguire la terapia", "Rende del tutto inutili le automobili", "Aumenta le richieste di ansiolitici", "Dirada le escursioni invernali"], answer: 0, why: "«Chi cammina in compagnia, poi, segue meglio la terapia: il sentiero cura anche la solitudine»." },
      { q: "¿Qué sugiere la «pequeña revolución» con la que cierra la noticia?", options: ["Che la rivoluzione sia arrivata dalla politica", "Che le magliette del progetto siano diventate di moda", "Che il lungomare sia stato chiuso al traffico", "Che un gesto semplice, una ricetta diversa, possa cambiare le abitudini di una comunità"], answer: 3, why: "«una piccola rivoluzione cominciata da un foglio di ricetta»: el cambio empezó con una prescripción distinta." },
    ],
    discuss: [
      { it: "Accetteresti una ricetta di camminate dal tuo medico? Che cosa ti convincerebbe?", es: "¿Aceptarías una receta de paseos de tu médico? ¿Qué te convencería?" },
      { it: "La tua città invita a camminare? Racconta un percorso che ami.", es: "¿Tu ciudad invita a caminar? Cuenta un recorrido que ames." },
    ],
  },

  /* ═══ C1 · 8 — Storia ═══ */
  {
    id: "news-c1-08", cat: "storia", level: "C1", place: "Agrigento", minutes: 5,
    title: "Ad Agrigento emerge il quartiere degli antichi artigiani",
    titleEs: "En Agrigento aflora el barrio de los antiguos artesanos",
    lead: {
      it: "Sotto gli olivi della Valle dei Templi gli archeologi hanno trovato fornaci, botteghe e le case di chi costruiva la città dei greci: non più soltanto i templi, ma la gente che li faceva.",
      es: "Bajo los olivos del Valle de los Templos los arqueólogos han encontrado hornos, talleres y las casas de quienes construían la ciudad de los griegos: ya no solo los templos, sino la gente que los hacía.",
    },
    paragraphs: [
      { it: "Gli scavi, aperti su un pendio a poca distanza dai templi più celebri, hanno riportato alla luce un isolato intero: fornaci, botteghe di vasai, depositi di argilla e le piccole case di chi lavorava la pietra e il metallo.",
      es: "Las excavaciones, abiertas en una ladera a poca distancia de los templos más célebres, han sacado a la luz una manzana entera: hornos, talleres de alfareros, depósitos de arcilla y las pequeñas casas de quienes trabajaban la piedra y el metal." },
      { it: "È la prima volta, spiegano gli archeologi, che la Valle dei Templi restituisce la città quotidiana e non soltanto i monumenti: finora l'attenzione si era concentrata sui santuari, mentre il quartiere degli artigiani era rimasto nell'ombra.",
      es: "Es la primera vez, explican los arqueólogos, que el Valle de los Templos devuelve la ciudad cotidiana y no solo los monumentos: hasta ahora la atención se había concentrado en los santuarios, mientras el barrio de los artesanos había quedado en la sombra." },
      { it: "«Abbiamo sempre raccontato i templi; adesso possiamo raccontare chi li costruiva», dice l'archeologo Nino Cammarata, responsabile del cantiere. «Le fornaci parlano di turni di lavoro, di famiglie, di mani che modellavano l'argilla: una storia meno maestosa, ma più umana.»",
      es: "«Siempre hemos contado los templos; ahora podemos contar quién los construía», dice el arqueólogo Nino Cammarata, responsable del yacimiento. «Los hornos hablan de turnos de trabajo, de familias, de manos que moldeaban la arcilla: una historia menos majestuosa, pero más humana.»" },
      { it: "Tra i reperti più significativi spiccano stampi per terrecotte, frammenti di lucerne e una moneta d'argento che aiuta a datare l'insediamento al III secolo avanti Cristo, quando la città, pur non essendo più potente come un tempo, continuava a produrre ed esportare.",
      es: "Entre los hallazgos más significativos destacan moldes para terracotas, fragmentos de lámparas de aceite y una moneda de plata que ayuda a datar el asentamiento en el siglo III antes de Cristo, cuando la ciudad, aunque ya no era tan poderosa como antes, seguía produciendo y exportando." },
      { it: "Il ritrovamento pone problemi inediti: il quartiere confina con aree fragili e ogni scelta di scavo rischia di compromettere strati ancora intatti. Per questo il cantiere procede con strumenti digitali, che documentano ogni strato prima che venga rimosso.",
      es: "El hallazgo plantea problemas inéditos: el barrio limita con zonas frágiles y cada decisión de excavación corre el riesgo de comprometer capas aún intactas. Por eso el yacimiento avanza con instrumentos digitales, que documentan cada capa antes de que se retire." },
      { it: "L'obiettivo è aprire una parte del sito ai visitatori entro pochi anni, con un percorso che unisca i templi alle botteghe. «Chi verrà», conclude Cammarata, «capirà che la grandezza di una civiltà si misura anche dalle mani dei suoi artigiani.»",
      es: "El objetivo es abrir al público una parte del sitio dentro de unos años, con un itinerario que una los templos con los talleres. «Quien venga», concluye Cammarata, «entenderá que la grandeza de una civilización se mide también por las manos de sus artesanos.»" },
    ],
    words: [
      { it: "lo scavo / gli scavi", es: "la excavación" },
      { it: "la fornace / le fornaci", es: "el horno (de alfarero)" },
      { it: "il reperto / i reperti", es: "el hallazgo, la pieza", note: "la pieza hallada; el hecho de hallar es «il ritrovamento»" },
      { it: "il vasaio / i vasai", es: "el alfarero", note: "de «vaso»" },
      { it: "la terracotta / le terrecotte", es: "la terracota" },
      { it: "lo strato / gli strati", es: "la capa (arqueológica)" },
    ],
    questions: [
      { q: "¿Qué ha salido a la luz en la ladera cercana a los templos?", options: ["Una villa romana con mosaici", "Un isolato con fornaci, botteghe di vasai e case di artigiani", "Un tempio mai documentato prima", "Una tomba reale intatta"], answer: 1, why: "«fornaci, botteghe di vasai, depositi di argilla e le piccole case di chi lavorava la pietra e il metallo»." },
      { q: "¿Qué objeto ayuda a fechar el asentamiento?", options: ["Una moneta d'argento", "Un'iscrizione su marmo", "Una colonna spezzata", "Un mosaico bizantino"], answer: 0, why: "«una moneta d'argento che aiuta a datare l'insediamento al III secolo avanti Cristo»." },
      { q: "¿Por qué el yacimiento avanza con instrumentos digitales?", options: ["Per attirare più visitatori", "Perché gli archeologi sono pochi", "Per vendere calchi dei reperti", "Perché ogni strato va documentato prima di essere rimosso, senza compromettere gli strati intatti"], answer: 3, why: "«ogni scelta di scavo rischia di compromettere strati ancora intatti. Per questo il cantiere procede con strumenti digitali»." },
      { q: "¿Qué significa que la grandeza de una civilización «se mide también por las manos de sus artesanos»?", options: ["Che i templi non abbiano alcun valore", "Che soltanto gli artisti celebri meritino memoria", "Che anche il lavoro umile e quotidiano sia parte essenziale di una civiltà", "Che i visitatori debbano lavorare gratis nel cantiere"], answer: 2, why: "«la grandezza di una civiltà si misura anche dalle mani dei suoi artigiani»." },
    ],
    discuss: [
      { it: "Preferisci visitare i monumenti o i luoghi della vita quotidiana? Perché?", es: "¿Prefieres visitar los monumentos o los lugares de la vida cotidiana? ¿Por qué?" },
      { it: "Che cosa vorresti che gli archeologi trovassero nella tua città?", es: "¿Qué te gustaría que los arqueólogos encontraran en tu ciudad?" },
    ],
  },

  /* ═══ C1 · 9 — Sport ═══ */
  {
    id: "news-c1-09", cat: "sport", level: "C1", place: "Bormio", minutes: 5,
    title: "Bormio reinventa l'estate con la corsa in montagna",
    titleEs: "Bormio reinventa el verano con la carrera de montaña",
    lead: {
      it: "A Bormio l'economia della neve impara a guardare all'estate: corsa in montagna, mountain bike e sentieri portano in quota i visitatori dei mesi caldi, e i rifugi restano aperti.",
      es: "En Bormio la economía de la nieve aprende a mirar al verano: carrera de montaña, bicicleta y senderos llevan a las alturas a los visitantes de los meses calurosos, y los refugios permanecen abiertos.",
    },
    paragraphs: [
      { it: "Bormio, stazione sciistica storica dell'alta Valtellina, ha imparato a non dipendere soltanto dall'inverno. Le stagioni irregolari e le nevicate incerte hanno spinto la città a investire su ciò che la montagna offre anche senza neve: sentieri, dislivelli e aria buona.",
      es: "Bormio, estación de esquí histórica de la alta Valtellina, ha aprendido a no depender solo del invierno. Las estaciones irregulares y las nevadas inciertas han empujado a la ciudad a invertir en lo que la montaña ofrece también sin nieve: senderos, desniveles y buen aire." },
      { it: "Il cuore del progetto è un percorso di corsa in montagna che attraversa pascoli e antiche mulattiere, pensato non per i campioni ma per i turisti: tre distanze, dalla passeggiata impegnativa alla gara vera e propria.",
      es: "El corazón del proyecto es un itinerario de carrera de montaña que atraviesa pastos y antiguos caminos de mulas, pensado no para los campeones sino para los turistas: tres distancias, desde el paseo exigente hasta la carrera de verdad." },
      { it: "«Lo sport all'aperto è la nostra fabbrica d'estate», sostiene Andrea Battaglia, maestro di sci divenuto organizzatore di gare. «Una volta a luglio il paese si svuotava; oggi alberghi e rifugi lavorano, e molti corridori tornano d'inverno con gli sci.»",
      es: "«El deporte al aire libre es nuestra fábrica de verano», sostiene Andrea Battaglia, maestro de esquí convertido en organizador de carreras. «Antes, en julio, el pueblo se vaciaba; hoy hoteles y refugios trabajan, y muchos corredores vuelven en invierno con los esquís.»" },
      { it: "I rifugi si sono attrezzati con menù leggeri, orari prolungati e postazioni di soccorso. La mobilità è il nodo più difficile, poiché la strada di quota regge male il traffico estivo: navette e incentivi per chi arriva in treno sono la scommessa dei prossimi anni.",
      es: "Los refugios se han equipado con menús ligeros, horarios ampliados y puestos de socorro. La movilidad es el nudo más difícil, pues la carretera de altura aguanta mal el tráfico estival: lanzaderas e incentivos para quien llega en tren son la apuesta de los próximos años." },
      { it: "Le critiche non mancano: chi teme che la folla dei fine settimana consumi i sentieri e disturbi la fauna chiede un tetto massimo di partecipanti, mentre le associazioni ambientaliste propongono percorsi alternativi nei tratti più fragili.",
      es: "Las críticas no faltan: quien teme que la multitud del fin de semana desgaste los senderos y moleste a la fauna pide un tope máximo de participantes, mientras las asociaciones ecologistas proponen recorridos alternativos en los tramos más frágiles." },
      { it: "La montagna, conclude Battaglia, non è un parco a tema: «Il nostro compito è far vivere l'estate senza svenderla. La neve, prima o poi, torna; intanto la terra resta — ed è quella che stiamo curando».",
      es: "La montaña, concluye Battaglia, no es un parque temático: «Nuestra tarea es hacer vivir el verano sin malvenderlo. La nieve, tarde o temprano, vuelve; mientras tanto la tierra permanece — y es ella la que estamos cuidando»." },
    ],
    words: [
      { it: "la stazione sciistica", es: "la estación de esquí" },
      { it: "il sentiero / i sentieri", es: "el sendero" },
      { it: "la mulattiera / le mulattiere", es: "el camino de mulas", note: "hoy sendero excursionista histórico" },
      { it: "il rifugio / i rifugi", es: "el refugio (de montaña)" },
      { it: "il dislivello / i dislivelli", es: "el desnivel" },
      { it: "la fauna", es: "la fauna" },
    ],
    questions: [
      { q: "¿Por qué ha decidido Bormio invertir en la temporada de verano?", options: ["Perché il comune lo impone per legge", "Perché gli impianti di risalita sono troppo nuovi", "Per stagioni irregolari e nevicate incerte che rendono l'inverno meno affidabile", "Perché i turisti stranieri odiano la neve"], answer: 2, why: "«Le stagioni irregolari e le nevicate incerte hanno spinto la città a investire su ciò che la montagna offre anche senza neve»." },
      { q: "¿Para quién está pensado el itinerario de carrera de montaña?", options: ["Solo per i campioni di corsa", "Per i turisti: tre distanze, dalla passeggiata impegnativa alla gara vera e propria", "Solo per chi è nato a Bormio", "Solo per le squadre di ciclismo"], answer: 1, why: "«pensato non per i campioni ma per i turisti: tre distanze, dalla passeggiata impegnativa alla gara vera e propria»." },
      { q: "¿Cuál es el nudo más difícil del proyecto, según la noticia?", options: ["Il prezzo delle gare", "La qualità delle piste", "La mancanza di rifugi aperti", "La mobilità: la strada di quota regge male il traffico estivo"], answer: 3, why: "«La mobilità è il nodo più difficile, poiché la strada di quota regge male il traffico estivo»." },
      { q: "¿Qué quiere decir Battaglia con que «la montaña no es un parque temático»?", options: ["Che la montagna vada vissuta con rispetto, senza trasformarla in puro spettacolo", "Che il paese debba costruire montagne russe", "Che i rifugi debbano chiudere d'estate", "Che la neve non serva più a nessuno"], answer: 0, why: "«Il nostro compito è far vivere l'estate senza svenderla»: la montaña debe tratarse con respeto, no como atracción." },
    ],
    discuss: [
      { it: "Sport invernali o estivi in montagna: quali preferisci e perché?", es: "¿Deportes de invierno o de verano en la montaña: cuáles prefieres y por qué?" },
      { it: "Il turismo può salvare un paese di montagna o rischia di rovinarlo? Discuti.", es: "¿Puede el turismo salvar un pueblo de montaña o corre el riesgo de arruinarlo? Discútelo." },
    ],
  },

  /* ═══ C1 · 10 — Società ═══ */
  {
    id: "news-c1-10", cat: "societa", level: "C1", place: "Pescara", minutes: 5,
    title: "A Pescara un condominio impara a condividere",
    titleEs: "En Pescara una comunidad de vecinos aprende a compartir",
    lead: {
      it: "Un trapano usato quattro volte l'anno, una tenda da campeggio che prende polvere: a Pescara un condominio ha trasformato i ripostigli in una «biblioteca degli oggetti», e i vicini in una piccola comunità.",
      es: "Un taladro usado cuatro veces al año, una tienda de campaña que acumula polvo: en Pescara una comunidad de vecinos ha transformado los trasteros en una «biblioteca de objetos», y a los vecinos en una pequeña comunidad.",
    },
    paragraphs: [
      { it: "È un palazzo come tanti, nella periferia di Pescara: sei piani, un giardino un po' trascurato e l'ascensore che ogni tanto si ferma. A cambiarlo non è stato un restauro, ma un'assemblea: i condomini hanno svuotato i ripostigli e deciso di condividere ciò che usavano di rado.",
      es: "Es un edificio como tantos, en la periferia de Pescara: seis plantas, un jardín algo descuidado y un ascensor que de vez en cuando se para. No lo cambió una reforma, sino una asamblea: los vecinos vaciaron los trasteros y decidieron compartir lo que usaban rara vez." },
      { it: "Così è nata la «biblioteca degli oggetti»: una stanza a pianterreno dove si depositano trapani, valigie, seggioloni e tende da campeggio. Ogni oggetto ha una scheda, ogni prestito un registro, e chi non ha spazio in casa trova ciò che gli serve senza comprarlo.",
      es: "Así nació la «biblioteca de objetos»: una habitación en la planta baja donde se depositan taladros, maletas, sillas para niños y tiendas de campaña. Cada objeto tiene su ficha, cada préstamo su registro, y quien no tiene espacio en casa encuentra lo que necesita sin comprarlo." },
      { it: "«La condivisione funziona soltanto se resta comoda», osserva la sociologa Marta Ricciardi, che studia il fenomeno. «Il trapano condiviso non risolve la crisi economica, ma ricuce legami: ci si conosce, ci si saluta, prima o poi ci si dà una mano.»",
      es: "«La compartición funciona solo si sigue siendo cómoda», observa la socióloga Marta Ricciardi, que estudia el fenómeno. «El taladro compartido no resuelve la crisis económica, pero recompone lazos: nos conocemos, nos saludamos, tarde o temprano nos echamos una mano.»" },
      { it: "Gli effetti si vedono nel giardino, tornato curato dopo anni di abbandono: chi ha preso in prestito un attrezzo ha spesso restituito, insieme, un po' del proprio tempo. Le persone sole, in particolare, hanno guadagnato occasioni di incontro che il palazzo non offriva più.",
      es: "Los efectos se ven en el jardín, vuelto cuidado tras años de abandono: quien tomó prestada una herramienta ha devuelto, a menudo, también un poco de su tiempo. Las personas solas, en particular, han ganado ocasiones de encuentro que el edificio ya no ofrecía." },
      { it: "Non mancano i dubbi: alcuni temono che gli oggetti si rovinino o che qualcuno approfitti del servizio, sebbene i ritardi nei prestiti siano finora rarissimi; altri vorrebbero allargare l'esperimento all'intero quartiere, con una seconda stanza dedicata ai giocattoli.",
      es: "No faltan dudas: algunos temen que los objetos se estropeen o que alguien se aproveche del servicio, aunque los retrasos en los préstamos son hasta ahora rarísimos; otros quisieran ampliar el experimento a todo el barrio, con una segunda habitación dedicada a los juguetes." },
      { it: "L'idea, nata quasi per gioco, sta contagiando i palazzi vicini. «Il segreto», ride una delle condomine, «è cominciare da un oggetto solo. Poi il resto — come l'ascensore — si aggiusta strada facendo.»",
      es: "La idea, nacida casi en broma, está contagiando a los edificios vecinos. «El secreto», ríe una de las vecinas, «es empezar por un solo objeto. Luego lo demás — como el ascensor — se arregla sobre la marcha.»" },
    ],
    words: [
      { it: "il condominio / i condomini", es: "la comunidad de vecinos", note: "«il condominio» es el edificio y la comunidad; cada vecino es «il condomino»" },
      { it: "il ripostiglio / i ripostigli", es: "el trastero" },
      { it: "il prestito / i prestiti", es: "el préstamo" },
      { it: "il trapano / i trapani", es: "el taladro" },
      { it: "il legame / i legami", es: "el lazo / los lazos" },
      { it: "strada facendo", es: "sobre la marcha", note: "locución adverbial hecha" },
    ],
    questions: [
      { q: "¿Qué decidieron los vecinos en la asamblea?", options: ["Di vendere il palazzo a un'impresa", "Di condividere gli oggetti che usavano di rado", "Di chiudere il giardino ai bambini", "Di comprare un ascensore nuovo"], answer: 1, why: "«i condomini hanno svuotato i ripostigli e deciso di condividere ciò che usavano di rado»." },
      { q: "¿Cómo funciona la «biblioteca de objetos»?", options: ["Ogni oggetto ha una scheda e ogni prestito un registro", "Gli oggetti si prendono senza alcuna regola", "Bisogna pagare un affitto mensile", "Serve una tessera speciale per i residenti"], answer: 0, why: "«Ogni oggetto ha una scheda, ogni prestito un registro»." },
      { q: "¿Qué han ganado especialmente las personas solas?", options: ["Più spazio nei ripostigli", "Sconti nei negozi del quartiere", "Occasioni di incontro che il palazzo non offriva più", "Un giardino privato al pianterreno"], answer: 2, why: "«Le persone sole, in particolare, hanno guadagnato occasioni di incontro che il palazzo non offriva più»." },
      { q: "¿Qué significa que el taladro compartido «no resuelve la crisis, pero recompone lazos»?", options: ["Che la crisi economica sia un'invenzione", "Che gli oggetti condivisi si rovinino presto", "Che i trapani costino troppo", "Che il valore della condivisione sia soprattutto sociale, non economico"], answer: 3, why: "«Il trapano condiviso non risolve la crisi economica, ma ricuce legami»." },
    ],
    discuss: [
      { it: "Che cosa condivideresti volentieri con i tuoi vicini? E che cosa no?", es: "¿Qué compartirías de buena gana con tus vecinos? ¿Y qué no?" },
      { it: "Conosci i tuoi vicini di casa? Racconta un episodio, bello o brutto.", es: "¿Conoces a tus vecinos? Cuenta un episodio, bueno o malo." },
    ],
  },

  /* ═══ C1 · 11 — Cultura ═══ */
  {
    id: "news-c1-11", cat: "cultura", level: "C1", place: "Urbino", minutes: 5,
    title: "A Urbino il restauro diventa spettacolo",
    titleEs: "En Urbino la restauración se convierte en espectáculo",
    lead: {
      it: "Un palazzo del Rinascimento si restaura a porte aperte: il pubblico guarda i restauratori all'opera, e il cantiere diventa la visita più richiesta della città.",
      es: "Un palacio del Renacimiento se restaura a puertas abiertas: el público mira a los restauradores en pleno trabajo, y el taller se convierte en la visita más solicitada de la ciudad.",
    },
    paragraphs: [
      { it: "Nel centro di Urbino, città che fu capitale di un piccolo stato e laboratorio del Rinascimento, è cominciato il restauro di un piano nobile affrescato. La novità è il metodo: invece di transenne e silenzio, un cantiere a porte aperte, con un percorso di legno che porta i visitatori a un metro dalle pareti.",
      es: "En el centro de Urbino, ciudad que fue capital de un pequeño Estado y laboratorio del Renacimiento, ha comenzado la restauración de un piso noble con frescos. La novedad es el método: en lugar de vallas y silencio, un taller a puertas abiertas, con una pasarela de madera que lleva a los visitantes a un metro de las paredes." },
      { it: "L'idea, già sperimentata all'estero, punta su un principio semplice: il restauro, se mostrato, smette di essere un mistero. Ogni venerdì una restauratrice spiega al pubblico le scelte tecniche, dalle velature alle integrazioni, e risponde alle domande dei visitatori.",
      es: "La idea, ya experimentada en el extranjero, se apoya en un principio simple: la restauración, si se muestra, deja de ser un misterio. Cada viernes una restauradora explica al público las decisiones técnicas, de los velados a las integraciones, y responde a las preguntas." },
      { it: "«Lavorare osservati non è semplice: conta la concentrazione», ammette Beatrice Dal Monte, responsabile del team. «Però il pubblico ci obbliga a essere chiari. E un affresco che la gente conosce, quando torna al suo posto, è già diventato un po' di tutti.»",
      es: "«Trabajar observados no es fácil: cuenta la concentración», admite Beatrice Dal Monte, responsable del equipo. «Pero el público nos obliga a ser claros. Y un fresco que la gente conoce, cuando vuelve a su sitio, ya se ha vuelto un poco de todos.»" },
      { it: "Le domande dei visitatori si sono rivelate preziose: un particolare segnalato da una studentessa ha spinto il team a rifare un'analisi, rivelando sotto la tinta più recente le tracce di una decorazione più antica.",
      es: "Las preguntas de los visitantes se han revelado valiosas: un detalle señalado por una estudiante llevó al equipo a repetir un análisis, revelando bajo la tintura más reciente las huellas de una decoración más antigua." },
      { it: "I numeri premiano la scommessa: le prenotazioni raddoppiano rispetto alle visite tradizionali, e al mestiere del restauratore, un tempo considerato invisibile, molti giovani guardano ora con occhi diversi, tanto che l'università locale registra più iscrizioni ai suoi corsi.",
      es: "Las cifras premian la apuesta: las reservas se duplican respecto a las visitas tradicionales, y hacia el oficio de restaurador, en otro tiempo considerado invisible, muchos jóvenes miran ahora con ojos distintos, tanto que la universidad local registra más inscripciones en sus cursos." },
      { it: "Resta un limite: il cantiere aperto allunga i tempi e costa di più, e non tutte le opere lo permettono. Ma l'idea, conclude la Dal Monte, «è che la bellezza non vada solo ammirata: va capita. E per capirla bisogna vederla mentre si rialza».",
      es: "Queda un límite: el taller abierto alarga los plazos y cuesta más, y no todas las obras lo permiten. Pero la idea, concluye Dal Monte, «es que la belleza no deba solo admirarse: debe entenderse. Y para entenderla hay que verla mientras se levanta»." },
    ],
    words: [
      { it: "il restauro / i restauri", es: "la restauración" },
      { it: "l'affresco / gli affreschi", es: "el fresco / los frescos (pintura mural)" },
      { it: "la transenna / le transenne", es: "la valla (de obra)", note: "barrera provisional" },
      { it: "la velatura / le velature", es: "el velado (capa fina de color)" },
      { it: "il restauratore / la restauratrice", es: "el restaurador / la restauradora" },
      { it: "a porte aperte", es: "a puertas abiertas" },
    ],
    questions: [
      { q: "¿Cuál es la novedad del método elegido en Urbino?", options: ["Un restauro notturno, senza pubblico", "La chiusura totale del palazzo", "Un percorso di legno che porta i visitatori a un metro dalle pareti", "Una mostra di fotografie d'epoca"], answer: 2, why: "«invece di transenne e silenzio, un cantiere a porte aperte, con un percorso di legno che porta i visitatori a un metro dalle pareti»." },
      { q: "¿Qué ocurre los viernes en el taller?", options: ["Il palazzo resta chiuso per il riposo settimanale", "Una restauratrice spiega al pubblico le scelte tecniche", "Si lavora soltanto di notte", "Si cambiano gli orari delle visite guidate"], answer: 1, why: "«Ogni venerdì una restauratrice spiega al pubblico le scelte tecniche, dalle velature alle integrazioni»." },
      { q: "¿Qué consecuencia tuvo una observación de los visitantes?", options: ["Un particolare segnalato da una studentessa spinse il team a rifare un'analisi", "La visita fu sospesa per un mese", "Gli affreschi furono coperti di nuovo", "Il percorso di legno fu allungato"], answer: 0, why: "«un particolare segnalato da una studentessa ha spinto il team a rifare un'analisi, rivelando sotto la tinta più recente le tracce di una decorazione più antica»." },
      { q: "¿Qué significa que la belleza haya que verla «mientras se levanta»?", options: ["Che gli affreschi debbano essere spostati in alto", "Che il palazzo sia pericolante", "Che il biglietto d'ingresso costi il doppio", "Che la bellezza vada capita anche nel processo che la recupera, non solo nel risultato finito"], answer: 3, why: "«la bellezza non vada solo ammirata: va capita. E per capirla bisogna vederla mentre si rialza»." },
    ],
    discuss: [
      { it: "Preferiresti vedere un'opera finita o un cantiere di restauro? Perché?", es: "¿Preferirías ver una obra terminada o un taller de restauración? ¿Por qué?" },
      { it: "C'è un monumento della tua città che meriterebbe un cantiere aperto? Racconta.", es: "¿Hay un monumento de tu ciudad que merecería un taller abierto? Cuenta." },
    ],
  },

  /* ═══ C1 · 12 — Scienza ═══ */
  {
    id: "news-c1-12", cat: "scienza", level: "C1", place: "Lucca", minutes: 5,
    title: "Gli alberi antichi di Lucca insegnano a resistere alla siccità",
    titleEs: "Los árboles antiguos de Lucca enseñan a resistir la sequía",
    lead: {
      it: "Querce e lecci crescono da secoli sopra le mura, senza irrigazione e quasi senza cure. I botanici studiano il loro patrimonio genetico: in un clima che si scalda, i vecchi alberi potrebbero essere i maestri dei nuovi.",
      es: "Robles y encinas crecen desde hace siglos sobre las murallas, sin riego y casi sin cuidados. Los botánicos estudian su patrimonio genético: en un clima que se calienta, los árboles viejos podrían ser los maestros de los nuevos.",
    },
    paragraphs: [
      { it: "Le mura cinquecentesche di Lucca reggono sulle spalle un bosco sospeso: platani, lecci e querce piantati più di un secolo fa e cresciuti, da sempre, senza annaffiature di soccorso. Per i botanici si tratta di un esperimento naturale già concluso: quegli alberi hanno superato siccità, ondate di calore e gelate.",
      es: "Las murallas del siglo XVI de Lucca soportan sobre sus hombros un bosque suspendido: plátanos, encinas y robles plantados hace más de un siglo y crecidos, desde siempre, sin riegos de socorro. Para los botánicos se trata de un experimento natural ya concluido: esos árboles han superado sequías, olas de calor y heladas." },
      { it: "Un gruppo di ricerca ha cominciato a campionarne il patrimonio genetico, prelevando gemme da duecento esemplari. L'obiettivo è individuare gli individui più resilienti, cioè capaci di sopportare l'arsura con radici profonde e foglie che sanno risparmiare acqua.",
      es: "Un grupo de investigación ha comenzado a muestrear su patrimonio genético, tomando yemas de doscientos ejemplares. El objetivo es identificar los individuos más resilientes, es decir, capaces de soportar la aridez con raíces profundas y hojas que saben ahorrar agua." },
      { it: "«Ogni vecchio albero è un libro scritto dal clima», spiega il botanico Guido Sarti, che coordina i prelievi. «Se sapremo leggerlo, potremo moltiplicare i vincitori: non per clonare il passato, ma per avere piantine adatte al futuro.»",
      es: "«Cada árbol viejo es un libro escrito por el clima», explica el botánico Guido Sarti, que coordina las recolecciones. «Si sabremos leerlo, podremos multiplicar a los ganadores: no para clonar el pasado, sino para tener plantines adaptados al futuro.»" },
      { it: "Il progetto prevede un vivaio comunale, dove le piante madri più promettenti verranno riprodotte da seme e per talea, e nuove alberature lungo i viali esterni, dove gli esemplari giovani soffrono già il caldo degli ultimi anni.",
      es: "El proyecto prevé un vivero municipal, donde las plantas madre más prometedoras se reproducirán por semilla y por esqueje, y nuevas alineaciones de árboles en los paseos exteriores, donde los ejemplares jóvenes ya sufren el calor de los últimos años." },
      { it: "Non mancano le cautele: la genetica, ricordano i ricercatori, è soltanto una parte della risposta, perché anche l'albero più robusto muore se il terreno è sigillato dall'asfalto o se le radici restano senz'acqua.",
      es: "No faltan cautelas: la genética, recuerdan los investigadores, es solo una parte de la respuesta, porque incluso el árbol más robusto muere si el terreno está sellado por el asfalto o si las raíces quedan sin agua." },
      { it: "Intanto le mura, passeggiata amatissima da lucchesi e turisti, sono diventate un osservatorio aperto: piccoli cartelli raccontano quali alberi sono «candidati maestri», e la città segue la ricerca come una lunga partita giocata a favore della propria ombra.",
      es: "Mientras tanto, las murallas, paseo muy amado por lucenses y turistas, se han convertido en un observatorio abierto: pequeños carteles cuentan qué árboles son «candidatos a maestros», y la ciudad sigue la investigación como una larga partida jugada a favor de su propia sombra." },
    ],
    words: [
      { it: "la siccità", es: "la sequía" },
      { it: "il leccio / i lecci", es: "la encina", note: "árbol mediterráneo de hoja perenne" },
      { it: "la gemma / le gemme", es: "la yema (botánica)" },
      { it: "resiliente / resilienti", es: "resiliente" },
      { it: "l'arsura", es: "la aridez, el calor abrasador" },
      { it: "la talea / le talee", es: "el esqueje", note: "reproducción por fragmento de planta" },
    ],
    questions: [
      { q: "¿Por qué los árboles de las murallas son un «experimento natural ya concluido»?", options: ["Perché crescono in una serra comunale", "Perché hanno superato siccità, ondate di calore e gelate senza irrigazione di soccorso", "Perché sono stati piantati l'anno scorso", "Perché nessuno li ha mai osservati prima"], answer: 1, why: "«quegli alberi hanno superato siccità, ondate di calore e gelate»." },
      { q: "¿Qué significa «resiliente» en este contexto?", options: ["Capace di sopportare l'arsura con radici profonde e foglie che sanno risparmiare acqua", "Bello e ordinato come un albero da viale", "Importato da altri continenti", "Molto alto e molto antico"], answer: 0, why: "«individuare gli individui più resilienti, cioè capaci di sopportare l'arsura con radici profonde e foglie che sanno risparmiare acqua»." },
      { q: "¿Por qué la genética es «solo una parte de la respuesta»?", options: ["Perché gli alberi non abbiano un patrimonio genetico", "Perché il vivaio comunale sia ancora chiuso", "Perché le mura siano troppo fragili", "Perché anche l'albero più robusto muore se il terreno è sigillato o le radici restano senz'acqua"], answer: 3, why: "«anche l'albero più robusto muore se il terreno è sigillato dall'asfalto o se le radici restano senz'acqua»." },
      { q: "¿Qué sugiere la metáfora del árbol como «libro escrito por el clima»?", options: ["Che gli alberi amino la letteratura", "Che i libri si stampino sul legno di quercia", "Che nei vecchi alberi sia iscritta la storia ambientale di secoli, e si possa decifrarla", "Che il clima scriva romanzi polizieschi"], answer: 2, why: "«Ogni vecchio albero è un libro scritto dal clima»: la historia ambiental de cada árbol puede leerse y aprovecharse." },
    ],
    discuss: [
      { it: "Qual è il tuo albero preferito e che cosa rappresenta per te?", es: "¿Cuál es tu árbol preferido y qué representa para ti?" },
      { it: "La tua città ha più alberi rispetto a dieci anni fa? Secondo te perché?", es: "¿Tu ciudad tiene más árboles que hace diez años? ¿Por qué crees?" },
    ],
  },

  /* ═══ C1 · 13 — Tecnologia ═══ */
  {
    id: "news-c1-13", cat: "tecnologia", level: "C1", place: "Potenza", minutes: 5,
    title: "L'Appennino lucano si collega: la fibra arriva nei borghi",
    titleEs: "El Apenino lucano se conecta: la fibra llega a los pueblos",
    lead: {
      it: "Nelle piazze dove fino a ieri arrivava soltanto il segnale del telefono, oggi corre la fibra ottica. I piccoli comuni dell'Appennino potentino scoprono il lavoro da remoto — e rivedono i giovani.",
      es: "En las plazas donde hasta ayer solo llegaba la señal del teléfono, hoy corre la fibra óptica. Los pequeños municipios del Apenino potentino descubren el trabajo en remoto — y vuelven a ver a los jóvenes.",
    },
    paragraphs: [
      { it: "Cinquant'anni di spopolamento hanno svuotato i borghi dell'interno lucano: scuole chiuse, farmacie lontane, treni sempre più rari. Ora qualcosa si muove, e passa da un cavo: la fibra ottica portata fin dentro le case di paesi che contano poche centinaia di abitanti.",
      es: "Cincuenta años de despoblamiento han vaciado los pueblos del interior lucano: escuelas cerradas, farmacias lejanas, trenes cada vez más escasos. Ahora algo se mueve, y pasa por un cable: la fibra óptica llevada hasta dentro de las casas de pueblos que cuentan unos cientos de habitantes." },
      { it: "Il progetto, finanziato con fondi europei, ha visto i tecnici arrampicarsi su pali vecchi di un secolo e scavare trincee accanto ai muri a secco. La velocità ottenuta, centinaia di megabit, è la stessa delle città: una distanza che per decenni ha pesato più delle montagne.",
      es: "El proyecto, financiado con fondos europeos, ha visto a los técnicos trepar por postes de un siglo y cavar zanjas junto a los muros de piedra en seco. La velocidad obtenida, cientos de megabits, es la misma de las ciudades: una distancia que durante décadas ha pesado más que las montañas." },
      { it: "«La connessione non riporta indietro nessuno da sola», avverte l'ingegner Vito Scarpa, che ha seguito i lavori. «Però toglie un alibi: chi vuole restare, o tornare, non è più costretto a scegliere fra il lavoro e il paesaggio di casa.»",
      es: "«La conexión no trae de vuelta a nadie por sí sola», advierte el ingeniero Vito Scarpa, que ha seguido las obras. «Pero quita un álibi: quien quiere quedarse, o volver, ya no está obligado a elegir entre el trabajo y el paisaje de casa.»" },
      { it: "I primi effetti si misurano nelle case: qualche famiglia ha riaperto un immobile chiuso da anni, un giovane architetto lavora da remoto nello studio aperto nel palazzo del nonno, e due aziende agricole vendono formaggi e miele oltre i confini regionali.",
      es: "Los primeros efectos se miden en las casas: alguna familia ha reabierto un inmueble cerrado durante años, un joven arquitecto trabaja en remoto en el estudio abierto en el palacio del abuelo, y dos empresas agrícolas venden quesos y miel más allá de las fronteras regionales." },
      { it: "Restano problemi seri: la copertura del cellulare fuori dai centri è ancora a macchie di leopardo, e la fibra, per quanto veloce, non sostituisce l'ospedale né la scuola. Se i servizi non seguiranno, temono gli amministratori locali, il cavo resterà una strada vuota.",
      es: "Quedan problemas serios: la cobertura del móvil fuera de los núcleos sigue siendo a parches, y la fibra, por rápida que sea, no sustituye al hospital ni a la escuela. Si los servicios no siguen, temen los administradores locales, el cable quedará en una carretera vacía." },
      { it: "Intanto, nelle sere d'estate, la piazza del paese più piccolo del progetto è tornata affollata: proiezioni all'aperto, lezioni di inglese per i bambini e un piccolo coworking in quello che era un bar chiuso. La rete, sorride Scarpa, «serve a questo: a tenere accese le luci».",
      es: "Mientras tanto, en las noches de verano, la plaza del pueblo más pequeño del proyecto ha vuelto a llenarse: proyecciones al aire libre, clases de inglés para los niños y un pequeño coworking en lo que era un bar cerrado. La red, sonríe Scarpa, «sirve para esto: para mantener encendidas las luces»." },
    ],
    words: [
      { it: "il borgo / i borghi", es: "el pueblo (pequeño)" },
      { it: "lo spopolamento", es: "el despoblamiento", note: "de «spopolare», despoblar" },
      { it: "la fibra ottica", es: "la fibra óptica" },
      { it: "il lavoro da remoto", es: "el trabajo en remoto" },
      { it: "a macchie di leopardo", es: "a parches, de forma desigual" },
      { it: "il muro a secco / i muri a secco", es: "el muro de piedra en seco" },
    ],
    questions: [
      { q: "¿Qué vació durante décadas los pueblos del interior lucano?", options: ["Le alluvioni degli ultimi anni", "Il turismo mal gestito", "Lo spopolamento: scuole chiuse, farmacie lontane, treni sempre più rari", "Le nuove autostrade di valle"], answer: 2, why: "«Cinquant'anni di spopolamento hanno svuotato i borghi dell'interno lucano: scuole chiuse, farmacie lontane, treni sempre più rari»." },
      { q: "¿Qué velocidad ofrece la nueva fibra?", options: ["Quella del vecchio telefono analogico", "La stessa delle città: centinaia di megabit", "Poche unità di megabit", "Nessuna, nei paesi più piccoli"], answer: 1, why: "«La velocità ottenuta, centinaia di megabit, è la stessa delle città»." },
      { q: "¿Qué quiere decir Scarpa con que la conexión «quita un álibi»?", options: ["Chi vuole restare o tornare non è più costretto a scegliere fra il lavoro e il paesaggio di casa", "Che la rete abbia commesso degli errori tecnici", "Che i giovani raccontino spesso bugie", "Che la montagna sia sparita dalle carte"], answer: 0, why: "«chi vuole restare, o tornare, non è più costretto a scegliere fra il lavoro e il paesaggio di casa»." },
      { q: "¿Qué simboliza la imagen de «mantener encendidas las luces»?", options: ["Che il comune risparmi sull'illuminazione pubblica", "Che i bar debbano restare aperti tutta la notte", "Che la fibra illumini le case durante le allerte", "Che la rete serva a tenere viva la comunità, non soltanto a trasportare dati"], answer: 3, why: "«serve a questo: a tenere accese le luci»." },
    ],
    discuss: [
      { it: "Vivresti in un piccolo borgo con la fibra ma senza ospedale vicino? Fino a dove andresti?", es: "¿Vivirías en un pueblo pequeño con fibra pero sin hospital cerca? ¿Hasta dónde irías?" },
      { it: "La tecnologia può salvare i borghi o serve ben altro? Argomenta la tua tesi.", es: "¿Puede la tecnología salvar los pueblos o hace falta mucho más? Argumenta tu tesis." },
    ],
  },

  /* ═══ C1 · 14 — Ambiente ═══ */
  {
    id: "news-c1-14", cat: "ambiente", level: "C1", place: "Olbia", minutes: 5,
    title: "Nel golfo di Olbia la posidonia torna a conquistare il fondale",
    titleEs: "En el golfo de Olbia la posidonia vuelve a conquistar el fondo",
    lead: {
      it: "Per decenni le ancore hanno strappato il fondale del golfo. Oggi pescatori e biologi ripiantano la posidonia, l'erba marina che produce ossigeno e protegge le spiagge dall'erosione.",
      es: "Durante décadas las anclas han desgarrado el fondo del golfo. Hoy pescadores y biólogos replantan la posidonia, la hierba marina que produce oxígeno y protege las playas de la erosión.",
    },
    paragraphs: [
      { it: "La posidonia non è un'alga, come spesso si crede, ma una pianta marina con radici, fiori e frutti. Le sue praterie sommerse funzionano come le foreste del Mediterraneo: producono ossigeno, ospitano pesci giovanili e smorzano le onde che arrivano alle spiagge.",
      es: "La posidonia no es un alga, como a menudo se cree, sino una planta marina con raíces, flores y frutos. Sus praderas sumergidas funcionan como los bosques del Mediterráneo: producen oxígeno, acogen peces juveniles y amortiguan las olas que llegan a las playas." },
      { it: "Nel golfo di Olbia, però, decenni di ancore e catene hanno inciso solchi profondi nei prati sommersi. Dove la posidonia muore, il fondale si spoglia e le spiagge cominciano a perdere sabbia, portata via da un mare che nessuno frena più.",
      es: "En el golfo de Olbia, sin embargo, décadas de anclas y cadenas han abierto surcos profundos en los prados sumergidos. Donde la posidonia muere, el fondo se desnuda y las playas empiezan a perder arena, arrastrada por un mar que ya nada frena." },
      { it: "«Abbiamo smesso di rimpiangere e cominciato a piantare», racconta la biologa marina Francesca Ledda, a capo del gruppo di recupero. «Si prelevano frammenti dalle praterie sane, si fissano con piccole ancore biodegradabili e si aspetta: la pianta cresce lentamente, pochi centimetri l'anno.»",
      es: "«Dejamos de lamentarnos y empezamos a plantar», cuenta la bióloga marina Francesca Ledda, al frente del grupo de recuperación. «Se toman fragmentos de las praderas sanas, se fijan con pequeñas anclas biodegradables y se espera: la planta crece despacio, pocos centímetros al año.»" },
      { it: "Al lavoro partecipano anche i pescatori, che a lungo hanno considerato le praterie un intralcio per le reti. Oggi le difendono, perché hanno capito che senza posidonia i pesci giovanili mancano e le cale si riempiono di sabbia mossa.",
      es: "En el trabajo participan también los pescadores, que durante mucho tiempo consideraron las praderas un estorbo para las redes. Hoy las defienden, porque han entendido que sin posidonia faltan los peces juveniles y las calas se llenan de arena movediza." },
      { it: "I risultati dei primi anni sono misurabili ma lenti, come la pianta stessa: i trapianti attecchiscono nella maggior parte dei casi, benché una mareggiata possa cancellare in una notte due stagioni di lavoro.",
      es: "Los resultados de los primeros años son mensurables pero lentos, como la propia planta: los trasplantes arraigan en la mayoría de los casos, aunque un temporal marino pueda borrar en una noche dos temporadas de trabajo." },
      { it: "Il passo decisivo riguarda le barche: campi di ormeggi ecologici, che fissano gli scafi senza toccare il fondale, dovrebbero impedire nuovi danni. «Ricominciare è possibile», conclude Ledda. «Basta non ripetere gli errori, e lasciare al mare il tempo di ricucirsi.»",
      es: "El paso decisivo concierne a las embarcaciones: campos de fondeos ecológicos, que fijan los cascos sin tocar el fondo, deberían impedir nuevos daños. «Reempezar es posible», concluye Ledda. «Basta con no repetir los errores y dejar al mar el tiempo de rehacerse.»" },
    ],
    words: [
      { it: "la prateria / le praterie", es: "la pradera", note: "aquí pradera submarina" },
      { it: "il fondale / i fondali", es: "el fondo (marino)" },
      { it: "l'ancora / le ancore", es: "el ancla" },
      { it: "l'ormeggio / gli ormeggi", es: "el fondeo, el amarre", note: "punto de fijación de las embarcaciones" },
      { it: "la mareggiata / le mareggiate", es: "el temporal marino, la galerna" },
      { it: "il trapianto / i trapianti", es: "el trasplante" },
    ],
    questions: [
      { q: "¿Qué es exactamente la posidonia?", options: ["Un'alga molto comune del Mediterraneo", "Una pianta marina con radici, fiori e frutti", "Un pesce che vive fra le rocce", "Una roccia sedimentaria bianca"], answer: 1, why: "«La posidonia non è un'alga, come spesso si crede, ma una pianta marina con radici, fiori e frutti»." },
      { q: "¿Qué función cumplen las praderas sumergidas?", options: ["Producono ossigeno, ospitano pesci giovanili e smorzano le onde", "Riscaldano l'acqua del golfo d'estate", "Fermano le barche a vela", "Puliscono soltanto le spiagge"], answer: 0, why: "«producono ossigeno, ospitano pesci giovanili e smorzano le onde che arrivano alle spiagge»." },
      { q: "¿Por qué los pescadores defienden hoy la posidonia?", options: ["Perché è decorativa", "Perché la legge lo impone", "Perché senza posidonia i pesci giovanili mancano e le cale si riempiono di sabbia mossa", "Perché possono vendere i frammenti ai turisti"], answer: 2, why: "«senza posidonia i pesci giovanili mancano e le cale si riempiono di sabbia mossa»." },
      { q: "¿Qué significa dejar al mar «el tiempo de rehacerse»?", options: ["Che il mare guarisca in poche settimane", "Che si debba vietare ogni navigazione", "Che la biologa abbia fretta di finire", "Che il recupero sia possibile ma richieda pazienza e rispetto dei tempi della natura"], answer: 3, why: "«Basta non ripetere gli errori, e lasciare al mare il tempo di ricucirsi»." },
    ],
    discuss: [
      { it: "Hai mai visto la posidonia spiaggiata? Sai spiegare perché non è «sporcizia»?", es: "¿Has visto posidonia varada en la playa? ¿Sabes explicar por qué no es «suciedad»?" },
      { it: "Chi deve pagare la tutela del mare: i diportisti, i turisti o tutti? Discuti.", es: "¿Quién debe pagar la protección del mar: los navegantes, los turistas o todos? Discútelo." },
    ],
  },

  /* ═══ C1 · 15 — Salute ═══ */
  {
    id: "news-c1-15", cat: "salute", level: "C1", place: "Cremona", minutes: 5,
    title: "A Cremona la musica entra in corsia",
    titleEs: "En Cremona la música entra en la sala del hospital",
    lead: {
      it: "Nella città dei liutai, un reparto di pediatria prova la musicoterapia: archi costruiti a mano, note suonate accanto alle culle e parametri vitali che sembrano rispondere.",
      es: "En la ciudad de los lutieres, un ala de pediatría prueba la musicoterapia: instrumentos de arco hechos a mano, notas tocadas junto a las cunas y constantes vitales que parecen responder.",
    },
    paragraphs: [
      { it: "Cremona è da quattro secoli la capitale della liuteria: qui si costruiscono violini e violoncelli che finiscono nei teatri di mezzo mondo. Meno noto è ciò che accade in un reparto di pediatria, dove alcuni strumenti della tradizione locale sono entrati in corsia.",
      es: "Cremona es desde hace cuatro siglos la capital de la lautería: aquí se construyen violines y violonchelos que acaban en los teatros de medio mundo. Menos conocido es lo que ocurre en un ala de pediatría, donde algunos instrumentos de la tradición local han entrado en la sala." },
      { it: "È un progetto di musicoterapia rivolto anzitutto ai neonati prematuri e ai bambini ricoverati a lungo. Un musicista suona viola o violoncello accanto alle culle, seguendo un protocollo studiato con i medici: volume bassissimo, melodie stabili, pause regolari.",
      es: "Es un proyecto de musicoterapia dirigido ante todo a los recién nacidos prematuros y a los niños ingresados durante largo tiempo. Un músico toca viola o violonchelo junto a las cunas, siguiendo un protocolo estudiado con los médicos: volumen bajísimo, melodías estables, pausas regulares." },
      { it: "«Non siamo qui per fare un concerto», precisa la dottoressa Silvia Corradi, che coordina il programma. «La musica è uno strumento clinico: dosata con cura, sembra aiutare i piccoli a calmarsi e a dormire meglio, e questo conta quanto una cura.»",
      es: "«No estamos aquí para dar un concierto», precisa la doctora Silvia Corradi, que coordina el programa. «La música es un instrumento clínico: dosificada con cuidado, parece ayudar a los pequeños a calmarse y dormir mejor, y esto cuenta tanto como una cura.»" },
      { it: "I dati raccolti finora sono incoraggianti: nei giorni con la musica i parametri vitali dei piccoli appaiono più stabili, le infermiere riferiscono pianti più brevi e alcune mamme raccontano le prime poppate tranquille dopo settimane difficili.",
      es: "Los datos recogidos hasta ahora animan: en los días con música las constantes vitales de los pequeños parecen más estables, las enfermeras refieren llantos más breves y algunas madres cuentan las primeras tomas tranquilas tras semanas difíciles." },
      { it: "C'è poi un effetto inatteso: i liutai della città prestano e regolano gli strumenti gratuitamente, e qualche adolescente ricoverato ha scoperto, ascoltando, il mestiere più celebre della propria città, quello delle botteghe che profumano di legno.",
      es: "Hay además un efecto inesperado: los lutieres de la ciudad prestan y regulan los instrumentos gratis, y algún adolescente ingresado ha descubierto, escuchando, el oficio más célebre de su ciudad, el de los talleres que huelen a madera." },
      { it: "Il passo successivo sarà uno studio più ampio, che confronti i reparti con e senza musica. «La scienza richiede pazienza», conclude la Corradi. «Ma certe sere, quando un bimbo si addormenta al primo accordo, la statistica può aspettare.»",
      es: "El paso siguiente será un estudio más amplio, que compare alas con y sin música. «La ciencia requiere paciencia», concluye Corradi. «Pero ciertas noches, cuando un niño se duerme con el primer acorde, la estadística puede esperar.»" },
    ],
    words: [
      { it: "la liuteria", es: "la lautería", note: "arte de construir instrumentos de arco; de «liuto», laúd" },
      { it: "il liutaio / i liutai", es: "el lutier" },
      { it: "il reparto / i reparti", es: "la sala, el ala (hospitalaria)" },
      { it: "il neonato / i neonati", es: "el recién nacido" },
      { it: "il parametro vitale / i parametri vitali", es: "la constante vital" },
      { it: "la culla / le culle", es: "la cuna" },
    ],
    questions: [
      { q: "¿A quién va dirigido ante todo el proyecto de musicoterapia?", options: ["Ai musicisti che devono esercitarsi", "Ai visitatori dell'ospedale", "Anzitutto ai neonati prematuri e ai bambini ricoverati a lungo", "Ai liutai della città"], answer: 2, why: "«un progetto di musicoterapia rivolto anzitutto ai neonati prematuri e ai bambini ricoverati a lungo»." },
      { q: "¿Qué características tiene la música del protocollo?", options: ["Volume bassissimo, melodie stabili, pause regolari", "Concerti dal vivo ad alto volume", "Soltanto percussioni ritmiche", "Musica registrata in cuffia"], answer: 0, why: "«volume bassissimo, melodie stabili, pause regolari»." },
      { q: "¿Qué efecto inesperado tiene el proyecto en la ciudad?", options: ["I liutai hanno chiuso le botteghe in centro", "Alcuni liutai prestano e regolano gli strumenti, e un ragazzo ricoverato ha scoperto la liuteria", "L'ospedale ha aperto una sala concerti", "I violini sono stati venduti all'estero"], answer: 1, why: "«i liutai della città prestano e regolano gli strumenti gratuitamente, e qualche adolescente ricoverato ha scoperto, ascoltando, il mestiere più celebre della propria città»." },
      { q: "¿Qué revela la frase final sobre la estadística?", options: ["Che gli studi scientifici siano inutili", "Che i dati siano stati annullati", "Che i medici rifiutino ogni misura", "Che accanto al rigore scientifico c'è spazio per l'esperienza umana immediata"], answer: 3, why: "«Ma certe sere, quando un bimbo si addormenta al primo accordo, la statistica può aspettare»." },
    ],
    discuss: [
      { it: "Quale musica ti calma davvero? Racconta la tua «playlist» del benessere.", es: "¿Qué música te calma de verdad? Cuenta tu «playlist» del bienestar." },
      { it: "L'arte può essere una cura? Dove finisce la scienza e dove comincia l'emozione?", es: "¿Puede el arte ser una cura? ¿Dónde termina la ciencia y dónde empieza la emoción?" },
    ],
  },

];
